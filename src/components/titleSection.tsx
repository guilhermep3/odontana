type props = {
   title?: React.ReactNode;
   subtitle?: string;
   secId?: string;
   toCenter: boolean;
   revealId?: string;
   revealTitle?: string;
   revealDesc?: string;
}
export const TitleSection = ({ title, subtitle, secId, toCenter, revealId, revealTitle, revealDesc }: props) => {
   return (
      <div
         data-aos="fade-down"
         className="title-section-div"
         style={{ textAlign: toCenter ? 'center' : 'start' }}
      >
         {secId &&
            <h2 className={`section-id ${revealId ?? ''}`}><img src="./svgs/star-2.svg" alt="star" className="star2" />{secId}</h2>
         }
         <h1 className={`section-title ${revealTitle ?? ''}`}>{title}</h1>
         <p className={`section-desc ${revealDesc ?? ''}`}>{subtitle}</p>
      </div>
   )
}