import { useClinicData } from "@/data/localData"

export const Clinic = () => {
   const clinicdata = useClinicData;

   return (
      <section id="clinic">
         <div className="container-col">
            <div className="local-image">
               <div className="local-blue-bg">
                  <h2 data-aos="zoom-in"><img src="./svgs/star-2.svg" alt="star" className="star2" />Clínica</h2>
                  <h1 data-aos="zoom-in">Atendimento Compreensivo e cuidadoso para qualquer idade</h1>
               </div>
            </div>
            <div className="local-infos-clinic">
               {clinicdata.map((item) => (
                  <div
                     data-aos="fade-down"
                     className={`local-box 
                     ${item.id === 1 || item.id === 2 ? 'reveal-left' : 'reveal-right'}
                     `}
                     key={item.id}>
                     <span>{item.span}</span>
                     <p className="local-box-title">{item.title}</p>
                     <p className="local-box-desc">{item.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}