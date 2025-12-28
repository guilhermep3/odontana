import { TitleSection } from "@/components/titleSection";
import { RatingSlide } from "@/components/ratingSlide";

export const Rating = () => {

  return (
    <section id="rating">
      <div className="container-col">
        <TitleSection toCenter={true}
          secId="Avaliações"
          title={<>As <span>avaliações</span> mais recentes</>}
          subtitle="Veja as últimas avaliações dos nossos clientes." />
        <div className="ratings">
          <RatingSlide />
        </div>
      </div>
    </section>
  )
}