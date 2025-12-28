"use client"
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
        <li><a href="schedule">Agendar</a></li>
      </nav>
    </>
  )
}