import { Header } from "@/components/header"
import { Footer } from "../../components/footer"
import { TitleSection } from "@/components/titleSection"
import { MoreAbout } from "../(auth)/_aboutComponents/moreabout"
import { Purpose } from "../(auth)/_aboutComponents/purpose";
import { FullTeam } from "../(auth)/_aboutComponents/fullTeam";
import { ClientScrollReveal } from "../(auth)/_components/clientScrollReveal";
import { Suspense } from "react";
import { Skeleton } from "@/components/skeleton";

const Page = () => {

   return (
      <Suspense fallback={<Skeleton/>}>
         <main id="about">
            <Header/>
            <ClientScrollReveal>
               <section className="hero-about">
                  <TitleSection toCenter={true}
                     title={<><span>SOBRE</span> NÓS</>}
                     subtitle="Descubra mais sobre nossa clínica e equipe"
                  />
               </section>
               <MoreAbout />
               <Purpose/>
               <FullTeam/>
            </ClientScrollReveal>
            <Footer/>
         </main>
      </Suspense>
   )
}
export default Page