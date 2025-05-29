import { TitleSection } from "@/components/titleSection"
import { highlightsData } from "@/data/highlightsData"

export const Highlights = () => {

   return (
      <section id="highlights">
         <div className="container">
            <div className="highlights-left">
               <TitleSection toCenter={false}
                  secId="Diferenciais"
                  title={<>Nosso principais <span>diferenciais</span> para atender você</>}
                  revealTitle=""
                  revealId=""
               />
               <p data-aos="zoom-in" className="highlights-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis sit at architecto harum numquam obcaecati culpa minus. Minima architecto voluptas voluptatum hic a nemo velit, inventore id quaerat. Aut.</p>
               <div className="highlight-list">
                  {highlightsData.map((h) => (
                     <div className="highlight-box">
                        <div className="highlight-top">
                           <img src={`./svgs/${h.image}`} alt={h.name} />
                           <p>{h.name}</p>
                        </div>
                        <p className="highlight-box-text">{h.description}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="highlights-right">
               <img src="./highlights.png" className="highlights-image1" alt="cliente sendo atendido" />
               <img src="./before-after.png" className="highlights-image2" alt="dentistas" />
            </div>
         </div>
      </section>
   )
}