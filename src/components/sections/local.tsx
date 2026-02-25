import { MapLocal } from "@/components/mapLocal";
import { TitleSection } from "@/components/titleSection"
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Local = () => {

  return (
    <section id="local">
      <div className="container">
        <div className="local-left">
          <MapLocal />
        </div>
        <div className="local-right">
          <TitleSection secId="Localização" title={<>Nossa <span>localização</span></>} toCenter={true} />
          <ul className="local-infos">
            <li data-aos="fade-up">
              <MapPin />
              <p>Av. Albert Einstein, 627/701 - Morumbi, São Paulo - SP</p>
            </li>
            <li data-aos="fade-up">
              <Phone />
              <p>(11) 99999-9999</p>
            </li>
            <li data-aos="fade-up">
              <Mail />
              <p>seuemail@dominio.com</p>
            </li>
            <li data-aos="fade-up">
              <Clock />
              <p>Seg a Sex: 07:00 22:00</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}