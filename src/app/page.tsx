import { Header } from "@/components/header";
import { Hero } from "../components/sections/hero";
import { Emphasis } from "../components/sections/emphasis";
import { About } from "../components/sections/about";
import { Services } from "../components/sections/services";
import { Faixa } from "../components/sections/faixa";
import { Clinic } from "../components/sections/clinic";
import { GoTopButton } from "@/components/GoTopButton";
import { Highlights } from "../components/sections/highlights";
import { Team } from "../components/sections/team"
import { Rating } from "../components/sections/rating";
import { Local } from "../components/sections/local";
import { Footer } from "../components/footer";
import { ClientScrollReveal } from "../components/sections/clientScrollReveal";
import { Suspense } from "react";
import { Skeleton } from "@/components/skeleton";

export default function Home() {

  return (
    <Suspense fallback={<Skeleton />}>
      <main className="main">
        <Header />
        <ClientScrollReveal>
          <Hero />
          <Emphasis />
          <About />
          <Services />
          <Faixa />
          <Clinic />
          <Highlights />
          <Team />
          <Rating />
          <Local />
          <Footer />
        </ClientScrollReveal>
        <GoTopButton />
      </main>
    </Suspense>
  );
}