import { Button } from "@/components/button"
import { BadgeCheck } from "lucide-react"

export const About = () => {

  return (
    <section id="about">
      <div className="container">
        <div className="about-right">
          <img data-aos="fade-up" src="./about/about-1.png" alt="pessoa no dentista" className="about-img1" />
          <img data-aos="fade-down" src="./about/about-2.jpg" alt="clinica odontologica" className="about-img2" />
        </div>
        <div className="about-left">
          <h2 data-aos="fade-down" className="section-id reveal-right"><img src="./svgs/star-2.svg" alt="star" className="star2" />Sobre nós</h2>
          <h1 data-aos="fade-down" className="section-title reveal-right">
            Sua jornada para o <span>sorriso perfeito</span> começa aqui
          </h1>
          <p data-aos="fade-up" className="section-desc reveal-right">O objetivo de nossa clínica é fornecer odontologia amigável e atenciosa e o mais alto nível de tratamentos odontológicos gerais,
            cosméticos e especializados. Com consultórios odontológicos em todo o mundo.</p>
          <ul className="about-list">
            <li data-aos="fade-left" className="about-list-item">
              <BadgeCheck />
              <p>Time Experiente</p>
            </li>
            <li data-aos="fade-right" className="about-list-item">
              <BadgeCheck />
              <p>Equipamentos tecnológicos</p>
            </li>
            <li data-aos="fade-left" className="about-list-item">
              <BadgeCheck />
              <p>Ambiente confortável</p>
            </li>
            <li data-aos="fade-right" className="about-list-item">
              <BadgeCheck />
              <p>Servico de emergências</p>
            </li>
          </ul>
          <Button text="Ver mais sobre nós" href="/about" dataAos="zoom-in" />
        </div>
      </div>
    </section>
  )
}