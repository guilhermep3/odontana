import { serviceType } from "@/types/service";
import { useRouter } from "next/navigation";

type props = {
  infos: serviceType;
  setShowModal: () => void;
}
export const Modal = ({ infos, setShowModal }: props) => {
  const router = useRouter();

  function handleCloseModal(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      setShowModal()
    }
  }

  function handleGoSchedule() {
    const serviceFormatted = infos.name.toLocaleLowerCase().replace(/\s+/g, '');
    router.push(`/agendar?service=${serviceFormatted}`);
  }

  return (
    <div className="modal-container" onClick={handleCloseModal}>
      <div className="modal">
        <div className="modal-left">
          <img className="modal-image" src={`./services/${infos.img}`} alt="highlights" />
        </div>
        <div className="modal-right">
          <div className="modal-right-top">
            <h1 className="modal-title">{infos.name}</h1>
            <div className="modal-description">
              {infos.description}
            </div>
          </div>
          <div className="modal-right-bottom">
            <h2 className="modal-steps-title">Etapas</h2>
            <ul className="steps-list">
              {infos.steps.map((step) => (
                <li key={step.id}>
                  <span>{step.id}</span>
                  <p>{step.stepText}</p>
                </li>
              ))}
            </ul>
            <div className="buttons-modal">
              <button className="modal-schedule-btn" onClick={handleGoSchedule}>Marcar consulta</button>
              <button className="close-btn" onClick={() => setShowModal()}>Fechar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}