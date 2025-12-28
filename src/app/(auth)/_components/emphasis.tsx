import { Clock, Phone } from "lucide-react"

export const Emphasis = () => {

  return (
    <div className="emphasis">
      <div className="emphasis-box">
        <Phone />
        <div>
          <p className="emphasis-title">Ligue para marcar uma consulta</p>
          <p className="emphasis-subtitle">+55 999 999 999</p>
        </div>
      </div>
      <div className="emphasis-box">
        <Clock />
        <div>
          <p className="emphasis-title">Horários abertos</p>
          <p className="emphasis-subtitle">Seg a Sex: 07:00 22:00</p>
        </div>
      </div>
    </div>
  )
}