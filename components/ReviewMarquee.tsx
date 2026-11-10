"use client";
import {useRef,useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(useGSAP);
// First-party parent-company testimonials, also displayed on logisticstrucks.com/contact-us.
const reviews=[
 {name:'Chad Sublet',quote:'Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives.'},
 {name:'Alex Behrens',quote:'They have made a real difference in our day-to-day operations and truly feel like part of our internal team.'},
 {name:'McKay Jaeckel',quote:'The easiest VA onboarding process. Communicative and helpful throughout.'},
 {name:'Rich Cochran',quote:'We especially appreciate how diligent and pleasant Evy is. True pros.'},
 {name:'Martine Cadet',quote:'The team learned my brand and goals and transformed my business. My dream team.'},
 {name:'Lee Maasen',quote:'Stealth Agents provided me with a fantastic virtual assistant who has been an absolute asset.'},
 {name:'Lynda Sunshine West',quote:'Paolo is exceptional. Communicative, fast turnaround, quality work every time.'}
];
export default function ReviewMarquee(){
 const root=useRef<HTMLElement>(null),track=useRef<HTMLDivElement>(null),tween=useRef<gsap.core.Tween|null>(null),manualPause=useRef(false);const [paused,setPaused]=useState(false);
 useGSAP(()=>{const media=gsap.matchMedia();media.add('(prefers-reduced-motion: no-preference)',()=>{tween.current=gsap.to(track.current,{xPercent:-50,duration:90,repeat:-1,ease:'none'});});return()=>media.revert();},{scope:root});
 function toggle(){manualPause.current=!manualPause.current;setPaused(manualPause.current);tween.current?.paused(manualPause.current);}
 return <section className="contact-reviews" aria-label="StealthAgents reviews" ref={root} onMouseEnter={()=>tween.current?.pause()} onMouseLeave={()=>{if(!manualPause.current)tween.current?.play();}} onFocusCapture={()=>tween.current?.pause()} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget)&&!manualPause.current)tween.current?.play();}}>
  <div className="contact-review-heading"><h2>StealthAgents reviews</h2><button type="button" onClick={toggle} aria-pressed={paused} aria-label={paused?'Play reviews':'Pause reviews'}>{paused?'Play':'Pause'}</button></div>
  <div className="contact-review-window" tabIndex={0} aria-label="Parent-company reviews. Moving reviews pause on hover or focus."><div className="contact-review-track" ref={track}>{[0,1].map(copy=><div className="contact-review-group" key={copy} aria-hidden={copy===1?true:undefined}>{reviews.map(review=><figure key={review.name}><span className="contact-stars" aria-label="5 out of 5 stars">★★★★★</span><blockquote>{review.quote}</blockquote><figcaption>{review.name}</figcaption></figure>)}</div>)}</div></div>
  <p className="contact-review-source">Parent-company reviews. <a href="https://stealthagents.com/virtual-assistant">Read at StealthAgents</a>.</p>
 </section>;
}
