"use client"
import React from "react"
import { initScrollReveal, revealFromBottom, revealFromBottomD4, revealFromLeft, revealFromRight, revealFromTop, revealFromTopD4 } from "@/utils/scrollReveal"
import { useEffect } from "react"

type props = {
   children: React.ReactNode;
}
const ScrollRevealWrapper = ({children}: props) => {
      useEffect(() => {
         if (typeof window !== 'undefined') {
            initScrollReveal('.', revealFromTop);
            initScrollReveal('.', revealFromBottom);
            initScrollReveal('.reveal-left', revealFromLeft);
            initScrollReveal('.reveal-right', revealFromRight);
            initScrollReveal('.D4', revealFromTopD4);
            initScrollReveal('.D4', revealFromBottomD4);
         }
      }, []);

   return <div>{children}</div>;
}
export default ScrollRevealWrapper;