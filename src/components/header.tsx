import { ChevronDown } from "lucide-react"
import { Button } from "./button"
import { MobileNavbar } from "./mobilenavbar"
import Link from "next/link"

export const Header = () => {

  return (
    <header className="header">
      <div className="wrapper-header">
        <Link href={'/'} className="logo-div">
          <img src="./logo.png" alt="logo da Odontana" />
          <div>Odontana</div>
        </Link>
        <nav className="nav-desktop">
          <ul className="list-links">
            <li className="li-dropdown">
              <a href="/" className="home">Início</a>
              <ChevronDown className="arrow-down" />
              <div className="dropdown">
                <a href="#hero">Início</a>
                <a href="#about">Sobre</a>
                <a href="#services">Serviços</a>
                <a href="#clinic">Clínica</a>
                <a href="#highlights">Diferenciais</a>
                <a href="#team">Time</a>
                <a href="#rating">Avaliações</a>
                <a href="#local">Local</a>
              </div>
            </li>
            <li><a href="about">Sobre</a></li>
            <li><a href="services">Serviços</a></li>
          </ul>
        </nav>
        <Button href="/schedule" text="Agendar" />
        <MobileNavbar />
      </div>
    </header>
  )
}