import { Header } from "@/components/header"
import { Footer } from "../../components/footer"
import { TitleSection } from "@/components/titleSection"
import { Form } from "@/components/form"
import { Skeleton } from "@/components/skeleton"
import { Suspense } from "react"

const Page = () => {

  return (
    <Suspense fallback={<Skeleton />}>
      <main className="schedule-page">
        <Header />
        <section className="hero-services">
          <TitleSection toCenter={true}
            title={<>MARQUE SUA <span>CONSULTA</span></>}
          />
        </section>
        <section className="form-section">
          <div className="container-col">
            <h1>Preencha o formulário abaixo</h1>
            <Form />
          </div>
        </section>
        <Footer />
      </main>
    </Suspense>
  )
}
export default Page