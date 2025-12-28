import { TitleSection } from "@/components/titleSection";
import { Cpu } from "lucide-react";

export const Purpose = () => {

  return (
    <section id="purpose">
      <div className="container-col">
        <TitleSection toCenter={true}
          title={<>Nossos <span>Propósitos</span></>}
        />
        <div className="purposes">
          <div className="purpose">
            <img src="./svgs/happy-teeth.svg" className="purpose-svg" />
            <p>Prezamos pelo bem-estar e saúde de nossos clientes. Cuidar do seu sorriso é cuidar da sua saúde.</p>
          </div>
          <div className="purpose">
            <img src="./svgs/technology-b3.svg" className="purpose-svg" />
            <p>Sempre usamos as tecnologias mais recentes para garantir o melhor resultado para você.</p>
          </div>
          <div className="purpose">
            <img src="./svgs/smile-circle-fill.svg" className="purpose-svg" />
            <p>Oferecemos um atendimento humanizado, focado no seu conforto e segurança em cada consulta.</p>
          </div>
        </div>
      </div>
    </section>
  )
}