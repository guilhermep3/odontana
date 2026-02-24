import { TitleSection } from "@/components/titleSection"

export const MoreAbout = () => {

  return (
    <section className="moreabout">
      <div className="container">
        <div className="moreabout-left">
          <TitleSection toCenter={false} title={<>Início da <span>Odontana</span></>} />
          <p>
            A <strong>Odontana</strong> nasceu do sonho de oferecer um atendimento odontológico de excelência, unindo tecnologia, conforto e um cuidado humanizado. Fundada em 2014 pela Dra. Ana Vitória,<br />
            Desde o primeiro dia, buscamos criar um ambiente acolhedor, onde cada paciente se sinta seguro e confiante ao cuidar da sua saúde bucal. Com uma equipe altamente qualificada e equipamentos de última geração,
            evoluímos constantemente para oferecer os melhores tratamentos odontológicos, sempre com ética, transparência e comprometimento.
          </p>
        </div>
        <div className="moreabout-right">
          <div className="moreabout-img">
            <img src="./aboutpage/moreabout.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}