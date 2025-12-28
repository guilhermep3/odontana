"use client"
import { validarCPF } from "@/utils/validarCpf";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useFormStore } from "@/store/formStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const scheduleSchema = z.object({
  name: z.string().min(2, 'Preencha o campo corretamente')
    .transform(value => value.trim())
    .refine(value => /^\S+\s+\S+/.test(value), { message: 'Preencha com nome e sobrenome' }),
  birthday: z.string().refine(value => {
    const date = new Date(value);
    return !isNaN(date.getTime())
  }, { message: 'Data de nascimento inválida' })
    .refine(value => {
      const date = new Date(value);
      const today = new Date;
      const minAge = 5;
      const age = today.getFullYear() - date.getFullYear();
      return age > minAge || (age === minAge && today >= new Date(date.getFullYear() + minAge, date.getMonth(), date.getDate()))
    }),
  genre: z.enum(["Masculino", "Feminino", "Outro"]),
  cpf: z.string().min(11, 'CPF deve ter 11 números').refine(validarCPF, { message: 'CPF inválido' }),
  number: z.string().min(9, 'Preencha o campo corretamente'),
  service: z.array(z.string()).min(1, 'Selecione pelo menos uma opção'),
})

const services = [
  "Clareamento Dental",
  "Implante Dental",
  "Ortodontia",
  "Limpeza Profissional",
  "Endodontia",
  "Prótese Dentária",
  "Harmonização Orofacial",
  "Odontopediatria"
];

export type formData = z.infer<typeof scheduleSchema>

export const Form = () => {
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<formData>({
    resolver: zodResolver(scheduleSchema)
  });
  const { setFormData } = useFormStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedService = searchParams.get("service");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    if (selectedService) {
      const formattedService = selectedService.replace(/\s+/g, "");
      const matchedService = services.find(service =>
        service.toLocaleLowerCase().replace(/\s+/g, "") === formattedService
      )
      if (matchedService) {
        setSelectedServices((prev) => [...new Set([...prev, matchedService])]);
        setValue("service", [matchedService]);
      }
    }
  }, [selectedService, setValue]);

  function handleChangeCheckbox(service: string) {
    const currentServices = getValues("service") || [];
    const updateService = currentServices.includes(service)
      ? currentServices.filter(s => s !== service)
      : [...currentServices, service];
    setSelectedServices(updateService);
    setValue("service", updateService);
  }

  const onSubmit = (data: formData) => {
    setFormData(data);
    console.log(data);
    router.push('/finish')
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-div">
          <label>
            Seu nome
            <input type="text" {...register("name")}
              placeholder="Digite seu nome" />
            {errors.name && <span className="error-input">{errors.name.message}</span>}
          </label>
        </div>
        <div className="form-div">
          <label>
            Data de nascimento
            <input type="date" {...register("birthday")} />
            {errors.birthday && <span className="error-input">{errors.birthday.message}</span>}
          </label>
          <label>
            Seu gênero
            <select {...register("genre")}>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
            {errors.genre && <span className="error-input">{errors.genre.message}</span>}
          </label>
        </div>
        <div className="form-div">
          <label>
            Seu número
            <input type="text" {...register("number")}
              placeholder="Número de telefone" />
            {errors.number && <span className="error-input">{errors.number.message}</span>}
          </label>
          <label>
            Seu CPF
            <input type="text" {...register("cpf")}
              placeholder="Digite seu CPF" />
            {errors.cpf && <span className="error-input">{errors.cpf.message}</span>}
          </label>
        </div>
        <div className="form-div">
          <fieldset className="services-fieldset">
            <legend>Selecione os serviços:</legend>
            {services.map(service => (
              <label key={service}>
                <input type="checkbox" {...register("service")}
                  value={service}
                  checked={selectedServices?.includes(service)}
                  onChange={() => handleChangeCheckbox(service)}
                />
                {service}
              </label>
            ))}
            {errors.service && <span className="error-input">{errors.service.message}</span>}
          </fieldset>
        </div>
        <input type="submit" value="Marcar consulta" />
      </form>
    </>
  )
}