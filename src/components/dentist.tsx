import { dentistType } from "@/types/dentist"
import { Facebook, Instagram, Twitter } from "lucide-react"

type props = {
  item: dentistType
}
export const Dentist = ({ item }: props) => {

  return (
    <div className="dentist">
      <div className="dentist-image-area">
        <img src={`./dentist/${item.image}`} alt={"imagem do " + item.name} />
        <div className="dentist-social-medias">
          <div className="sm-box"><Facebook /></div>
          <div className="sm-box"><Instagram /></div>
          <div className="sm-box"><Twitter /></div>
        </div>
      </div>
      <p className="dentist-name">Dr. {item.name}</p>
      <p className="dentist-role">{item.role}</p>
    </div>
  )
}