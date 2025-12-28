import { Header } from "@/components/header";
import { Hero } from "./(auth)/_components/hero";
import { Emphasis } from "./(auth)/_components/emphasis";
import { About } from "./(auth)/_components/about";
import { Services } from "./(auth)/_components/services";
import { Faixa } from "./(auth)/_components/faixa";
import { Clinic } from "./(auth)/_components/clinic";
import { GoTopButton } from "@/components/GoTopButton";
import { Highlights } from "./(auth)/_components/highlights";
import { Team } from "./(auth)/_components/team"
import { Rating } from "./(auth)/_components/rating";
import { Local } from "./(auth)/_components/local";
import { Footer } from "../components/footer";
import { ClientScrollReveal } from "./(auth)/_components/clientScrollReveal";
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