"use client";
import {useRef,type ReactNode} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(useGSAP,ScrollTrigger);
export default function ContactMotion({children,theme}:{children:ReactNode;theme:string}){
 const root=useRef<HTMLDivElement>(null);
 useGSAP(()=>{const media=gsap.matchMedia();media.add('(prefers-reduced-motion: no-preference)',()=>{
  gsap.utils.toArray<HTMLElement>('[data-contact-image]',root.current).forEach(image=>gsap.fromTo(image,{scale:.94},{scale:1,ease:'none',scrollTrigger:{trigger:image,start:'top 95%',end:'top 45%',scrub:.5}}));
  if(['controller','security'].includes(theme))gsap.utils.toArray<HTMLElement>('[data-contact-reveal]',root.current).forEach(el=>gsap.fromTo(el,{opacity:.65,y:12},{opacity:1,y:0,scrollTrigger:{trigger:el,start:'top 90%',end:'top 60%',scrub:.5}}));
  else if(window.innerWidth>1000)ScrollTrigger.create({trigger:root.current?.querySelector('.contact-preparation'),start:'top 100px',end:'bottom 75%',pin:root.current?.querySelector('.contact-prep-title'),pinSpacing:false});
 });return()=>media.revert();},{scope:root});
 return <div ref={root} className={`contact-experience contact-${theme}`}>{children}</div>;
}
