import { Dentist } from "@/components/dentist";
import { TitleSection } from "@/components/titleSection"
import { useDentistData } from "@/data/dentistData"

export const FullTeam = () => {
  const dentistData = useDentistData;

  return (
    <section id="fullteam">
      <div className="container-col">
        <TitleSection toCenter={true}
          title={<>Nosso <span>time</span> de dentistas</>}
          subtitle={`Veja todos os nossos ${dentistData.length} dentistas`}
        />
        <div className="fullteam-div">
          {dentistData.map((item) => (
            <Dentist key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}