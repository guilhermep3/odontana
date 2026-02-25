"use client"
import { Button } from "@/components/button";
import { Modal } from "@/components/modal";
import { TitleSection } from "@/components/titleSection";
import { useServicesData } from "@/data/servicesData";
import { serviceType } from "@/types/service";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const Services = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<serviceType>();

  const servicesData = useServicesData;
  const servicesDataSlice = servicesData.slice(0, 4)

  function handleShowModal(item: any) {
    setShowModal(true);
    setModalItem(item);
  };

  return (
    <section id="services">
      <div className="container">
        <TitleSection secId="Serviços"
          title={<>Serviços de <span>alta qualidade</span> para você</>} toCenter={true}
        />
        <p data-aos="zoom-in" className="section-desc">
          Estamos comprometidos com a sustentabilidade. iniciativas ecológicas.
        </p>
        <div className="services-list">
          {servicesDataSlice.map((item) => (
            <div key={item.id} data-aos="fade-up"
              className="service"
              onClick={() => handleShowModal(item)}
            >
              <img src={`./services/${item.img}`} alt="pessoa em uma consulta odontológica" className="service-img" />
              <img src={`./svgs/${item.icon}`} className="service-icon" alt={item.icon} />
              <div className="service-infos">
                <p className="service-title">{item.name}</p>
                <p className="service-desc">{item.description}</p>
                <p className="read-more">
                  Ver mais <ArrowRight />
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button href="/services" text="Ver todos" dataAos="zoom-in" />
      </div>
      {showModal && modalItem && (
        <Modal infos={modalItem} setShowModal={() => setShowModal(!showModal)} />
      )}
    </section>
  )
}