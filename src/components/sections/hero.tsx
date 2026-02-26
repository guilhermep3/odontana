import { Button } from "@/components/button"
import { Star } from "lucide-react"

export const Hero = () => {

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-left">
          <h1 data-aos="zoom-in" className="hero-title">
            Experimente a <span>Excelência Odontológica</span> com um toque suave
          </h1>
          <h2 data-aos="zoom-in" className="hero-subtitle">
            A clínica com a melhor equipe e estrutura pronta para te atender com muito carinho e atenção.
          </h2>
          <Button text="Agendar" href="/agendar" dataAos="fade-up" />
          <div data-aos="fade-up" className="hero-rating">
            <div className="hero-rating-top">
              <p>Avaliação Google</p>
              <span>5.0</span>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="star-rating" />
              ))}
            </div>
            <p>Baseado em 480 avaliações</p>
          </div>
        </div>
        <div className="hero-right">
          <div data-aos="zoom-in" className="hero-relative">
            <img src="./dentista.png" alt="imagem da dentista Ana Vitoria" className="hero-image" />
            <div className="dentist-box">
              <img src="./dentista-perfil.png" alt="imagem da dentista Ana Vitoria" />
              <div>
                <p className="dentist-box-name">Dr. Ana Vitória</p>
                <p className="dentist-box-profession">Dentista</p>
              </div>
            </div>
            <div className="icon-hero icon-hero1">
              <img src="./svgs/icon-hero-theeth-1.svg" alt="icone dente 1" />
            </div>
            <div className="icon-hero icon-hero2">
              <img src="./svgs/icon-hero-theeth-2.svg" alt="icone dente 2" />
            </div>
            <div className="icon-hero icon-hero3">
              <img src="./svgs/icon-hero-theeth-3.svg" alt="icone dente 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}