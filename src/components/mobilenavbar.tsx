"use client"
import { sectionsData } from "@/data/sectionsData"
import { ChevronDown } from "lucide-react"
import { useRef } from "react"

export const MobileNavbar = () => {
  const navbar = useRef<HTMLDivElement>(null)
  const dropdownmobile = useRef<HTMLDivElement>(null);

  function handleShowMobileNav() {
    navbar.current?.classList.toggle('navbar-active');
    document.querySelector('.navbar-btn')?.classList.toggle('navbar-btn-active');
  }
  function handleShowDropdown() {
    dropdownmobile.current?.classList.toggle('show-dropdown-mobile')
  }

  return (
    <>
      <div className="navbar-btn" onClick={handleShowMobileNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav ref={navbar} className="navbar-mobile">
        <li className="li-dropdown">
          <div className="li-dropdown-home" onClick={handleShowDropdown}>
            <a href="/" className="home">Início</a>
            <ChevronDown className="arrow-down" />
          </div>
          <div ref={dropdownmobile} className="dropdown-mobile">
            {sectionsData.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </div>
        </li>
        <li><a href="sobre">Sobre</a></li>
        <li><a href="servicos">Serviços</a></li>
        <li><a href="agendar">Agendar</a></li>
      </nav>
    </>
  )
}