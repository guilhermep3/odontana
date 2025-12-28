"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDentistData } from "@/data/dentistData";
import { useEffect, useState } from "react";
import { Dentist } from "./dentist";

export const SlideTeam = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const dentistData = useDentistData;
  const dentistDataSlice = dentistData.slice(0, 5)

  useEffect(() => {
    function checkMobileWidth() {
      window.innerWidth < 900 ? setSlidesPerView(1) : setSlidesPerView(3)
    }
    checkMobileWidth();
    window.addEventListener('resize', checkMobileWidth)
    return () => {
      window.removeEventListener('resize', checkMobileWidth)
    }
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      navigation
      spaceBetween={0}
    >
      {dentistDataSlice.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="dentist-slide">
            <Dentist item={item} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}