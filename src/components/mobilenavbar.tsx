"use client"
import { sectionsData } from "@/data/sectionsData"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export const MobileNavbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  function handleShowMobileNav() {
    setShowMobileNav(prev => !prev)
  }

  function handleShowDropdown() {
    setShowDropdown(prev => !prev)
  }

  return (
    <>
      <div className={`navbar-btn ${showMobileNav ? "navbar-btn-active" : ""}`}
        onClick={handleShowMobileNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`navbar-mobile ${showMobileNav ? "navbar-active" : ""}`}>
        <li className="li-dropdown">
          <div className="li-dropdown-home" onClick={handleShowDropdown}>
            <a href="/" className="home">Início</a>
            <ChevronDown className="arrow-down" />
          </div>
          <div className={`dropdown-mobile ${showDropdown ? "show-dropdown-mobile" : ""}`}>
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