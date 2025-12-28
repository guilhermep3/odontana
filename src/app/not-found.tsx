import { Header } from "@/components/header"
import Link from "next/link"

const NotFount = () => {

  return (
    <div>
      <Header />
      <div className="not-found">
        <h1 className="">404 - Página não encontrada</h1>
        <Link href="/" className="not-found-btn">
          Voltar para a home
        </Link>
      </div>
    </div>
  )
}
export default NotFount