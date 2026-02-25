"use client"
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Skeleton } from "@/components/skeleton";
import { TitleSection } from "@/components/titleSection";
import { useFormStore } from "@/store/formStore";
import Link from "next/link";
import { Suspense } from "react";

const Page = () => {
  const { formData } = useFormStore();

  return (
    <Suspense fallback={<Skeleton />}>
      <main id="finish">
        <Header />
        {formData ? (
          <div className="container-col">
            <h1 className="finish-title">
              Parabéns, {formData.name}!
            </h1>
            <div className="finish-div">
              <div className="finish-left">
                <p>Você finalizou o processo de marcar uma consulta com a <strong>Odontana</strong>.</p>
                <p>
                  Em breve, entraremos em contato pelo número <strong>{formData?.number}</strong>{' '}
                  para confirmar o seu agendamento.
                </p>
                <p>Agradecemos pela sua confiança!</p>
                <Link href="/" className="back-home-btn">Voltar para a página inicial</Link>
              </div>
              <div className="finish-right">
                <img src="./finish.png" alt="Consulta confirmada" />
              </div>
            </div>
          </div>
        ) : (
          <div className="container-col">
            <h1 className="finish-title">Agende sua consulta</h1>
            <div className="finish-div">
              <div className="finish-left">
                <p>Estamos prontos para te atender com a melhor equipe.</p>
                <p>Agende agora sua consulta e dê o primeiro passo para um sorriso mais saudável!</p>
                <Link href="/" className="back-home-btn">Voltar para a página inicial</Link>
              </div>
              <div className="finish-right">
                <img src="./calendar.png" alt="Agende sua consulta" />
              </div>
            </div>
          </div>
        )}
        <Footer />
      </main>
    </Suspense>
  );
}

export default Page;
