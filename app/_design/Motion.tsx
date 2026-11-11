'use client';
import {useRef,useState,type ReactNode} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
gsap.registerPlugin(ScrollTrigger,useGSAP);
export function ArtMotion({children,theme}:{children:ReactNode;theme:string}){
 const root=useRef<HTMLDivElement>(null);
 useGSAP(()=>{const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{
  gsap.utils.toArray<HTMLElement>('.ad-reveal',root.current).forEach(el=>gsap.fromTo(el,{y:22},{y:0,duration:.7,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 95%',once:true}}));
  gsap.utils.toArray<HTMLElement>('.ad-boundaries .ad-photo img,.ad-people .ad-photo img',root.current).forEach(el=>gsap.fromTo(el,{scale:1.07},{scale:1,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom center',scrub:.5}}));
  gsap.utils.toArray<HTMLElement>('.ad-statement,.ad-closing h2',root.current).forEach(el=>gsap.fromTo(el,{opacity:.5,y:12},{opacity:1,y:0,duration:.8,scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
 });return()=>mm.revert();},{scope:root,dependencies:[theme]});
 return <div ref={root} className="ad-motion">{children}</div>
}
type Service={slug:string;title:string;benefit:string;example:string;deliverables:string[];prep:string[]};
export function WorkExample({services,theme}:{services:Service[];theme:string}){
 const [selected,setSelected]=useState(0);const s=services[selected];
 return <div className={'ad-workspace ad-workspace-'+theme}><div className="ad-work-tabs" role="tablist" aria-label="Choose an example workflow">{services.map((item,i)=><button key={item.slug} type="button" role="tab" id={'work-tab-'+i} aria-selected={selected===i} aria-controls="work-example-panel" tabIndex={selected===i?0:-1} onClick={()=>setSelected(i)} onKeyDown={e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const n=(i+(e.key==='ArrowRight'?1:-1)+services.length)%services.length;setSelected(n);document.getElementById('work-tab-'+n)?.focus();}}}>{item.title}<span aria-hidden="true">↗</span></button>)}</div><div className="ad-work-panel" role="tabpanel" id="work-example-panel" aria-labelledby={'work-tab-'+selected} tabIndex={0}><div className="ad-work-story"><p className="ad-kicker">Example workflow</p><h3>{s.title}</h3><p>{s.example}</p><a href={'/services/'+s.slug} className="ad-text-link">Read the full service scope <span aria-hidden="true">↗</span></a></div><div className="ad-paper"><p className="ad-paper-caption">A useful handoff includes</p>{s.deliverables.slice(0,3).map(x=><div key={x}><span aria-hidden="true">✓</span><p>{x}</p></div>)}<footer><strong>Prepared for review</strong><span>Your team retains final approval.</span></footer></div></div></div>
}
