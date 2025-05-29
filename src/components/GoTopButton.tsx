"use client"
import { useEffect, useState } from "react"

export const GoTopButton = () => {
   const [isTop, setIsTop] = useState(false);

   useEffect(() => {
      function checkScroll() {
         setIsTop(window.scrollY < 400)
      }

      checkScroll()
      window.addEventListener('scroll', checkScroll);

      return () => {
         window.removeEventListener('scroll', checkScroll)
      }
   }, []);

   function handleGoTop() {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }

   return (
      <div className={`up-btn ${isTop ? '' : 'show-up-btn'}`} onClick={handleGoTop}>
         <img src="./svgs/arrow-top-chevron-chevron-top-svgrepo-com.svg" alt="arrow-top" />
      </div>
   )
}