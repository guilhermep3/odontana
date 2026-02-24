import { TitleSection } from "@/components/titleSection"
import { highlightsData } from "@/data/highlightsData"

export const Highlights = () => {

  return (
    <section id="highlights">
      <div className="container">
        <div className="highlights-left">
          <TitleSection toCenter={false}
            secId="Diferenciais"
            title={<>Nossos principais <span>diferenciais</span> para atender você</>}
          />
          <p data-aos="zoom-in" className="highlights-text">
            Nossa clínica odontológica é referência em cuidado, tecnologia e atendimento humanizado.
            Contamos com profissionais altamente qualificados, equipamentos modernos e tratamentos
            personalizados para garantir saúde, conforto e o melhor sorriso para você e sua família.
            Tudo isso em um ambiente seguro, acolhedor e pensado para o seu bem-estar.
          </p>
          <div className="highlight-list">
            {highlightsData.map((h) => (
              <div key={h.id} className="highlight-box">
                <div className="highlight-top">
                  <h.icon />
                  <p>{h.name}</p>
                </div>
                <p className="highlight-box-text">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="highlights-right">
          <img src="./highlights.png" className="highlights-image1" alt="cliente sendo atendido" />
          <img src="./before-after.png" className="highlights-image2" alt="dentistas" />
        </div>
      </div>
    </section>
  )
}