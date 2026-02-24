"use client"
import { SlideTeam } from "@/components/teamSlide";
import { TitleSection } from "@/components/titleSection";

export const Team = () => {

  return (
    <section id="team">
      <div className="team-container">
        <TitleSection toCenter={true}
          secId="Time"
          title={<>Nosso <span>time</span> de dentistas</>}
          subtitle="Veja nossos dentistas mais experientes"
        />
        <div className="team-list">
          <SlideTeam />
        </div>
      </div>
    </section>
  )
}