import { sectionsData } from "@/data/sectionsData"
import { Facebook, Instagram, Mail, Music2, Phone, Twitter } from "lucide-react"

export const Footer = () => {

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-message">
          <div className="logo-div">
            <img src="./logo.png" alt="logo da Odontana" />
            <div>Odontana</div>
          </div>
          <p className="footer-msg">O objetivo de nossa clínica é fornecer odontologia amigável e atenciosa e tratamentos odontológicos gerais, cosméticos e especializados do mais alto nível.</p>
        </div>
        <div className="footer-div">
          <h1>Links</h1>
          <ul>
            {sectionsData.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-div">
          <h1>Redes Sociais</h1>
          <ul className="footer-ul-svg">
            <li>
              <Facebook />
              <a href="#">Facebook</a>
            </li>
            <li>
              <Instagram />
              <a href="#">Instagram</a>
            </li>
            <li>
              <Twitter />
              <a href="#">Twitter</a>
            </li>
            <li>
              <Music2 />
              <a href="#">TikTok</a>
            </li>
          </ul>
        </div>
        <div className="footer-div">
          <h1>Contato</h1>
          <ul className="footer-ul-svg">
            <li>
              <Mail />
              <p>seuemail@dominio.com</p>
            </li>
            <li>
              <Phone />
              <p>(11) 9999-9999</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          © Copyright todos os direitos reservados
        </p>
        <p className="footer-developed">
          Desenvolvido por{' '}
          <a href="https://github.com/guilhermep3/dentista-website" target="_blank">Guilherme Pereira</a>
        </p>
      </div>
    </footer>
  )
}