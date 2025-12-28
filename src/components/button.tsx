import { ArrowRight } from "lucide-react";
import Link from "next/link";

type props = {
  text: string;
  href: string;
  classe?: string;
  dataAos?: string;
}
export const Button = ({ text, href, classe, dataAos }: props) => {

  return (
    <Link
      href={href}
      className={`btn ${classe}`}
      {...(dataAos ? { 'data-aos': dataAos } : {})}
    >
      {text}
      <div className="arrow-svg">
        <ArrowRight />
      </div>
    </Link>
  )
}