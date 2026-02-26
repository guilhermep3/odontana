import { ChevronDown } from "lucide-react"
import { Button } from "./button"
import { MobileNavbar } from "./mobilenavbar"
import Link from "next/link"
import { sectionsData } from "@/data/sectionsData"

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
                {sectionsData.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                ))}
              </div>
            </li>
            <li><a href="sobre">Sobre</a></li>
            <li><a href="servicos">Serviços</a></li>
          </ul>
        </nav>
        <Button href="/agendar" text="Agendar" />
        <MobileNavbar />
      </div>
    </header>
  )
}