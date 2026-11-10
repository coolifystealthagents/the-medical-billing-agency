import Link from "next/link";
import type {ReactNode} from "react";
import ContactMotion from "./ContactMotion";
import ReviewMarquee from "./ReviewMarquee";
import {contactDesign as d} from "./contactDesign";
type Props={brand:string;title:string;intro:string;preparation:string[];boundary:string;calendar?:string;reviews?:readonly {name:string;quote:string;role?:string}[];children:ReactNode};
export default function ContactShell({brand,intro,preparation,boundary,calendar,children}:Props){return <ContactMotion theme={d.theme}>
 <section className="contact-first-screen" aria-labelledby="contact-title"><div className="contact-first-inner">
  <div className="contact-opening"><p className="contact-invitation">Support for the work behind patient care</p><h1 id="contact-title">{d.title}</h1><p className="contact-intro">{intro}</p><ReviewMarquee/>{d.email?<p className="contact-email">Prefer email? <a href={`mailto:${d.email}`}>{d.email}</a></p>:<a className="contact-direct-link" href="#book-direct">Prefer to choose a time? View the calendar <span aria-hidden="true">↗</span></a>}</div>
  <div className="contact-form-panel" id="consultation-form"><span id="contact-form"/><h2>{d.formTitle}</h2>{children}</div>
 </div></section>
 <section className="contact-team-section" aria-labelledby="contact-team-title"><div className="contact-team-inner">
  <figure className="contact-team-photo"><img data-contact-image src="/brand/team-bacolod.jpg" alt="The official Stealth Agents team together at Bacolod city hall" width="953" height="540" loading="lazy"/><figcaption>Bacolod, Philippines. The people behind your support.</figcaption></figure>
  <div className="contact-team-copy"><p className="contact-parent">Powered by <a href="https://stealthagents.com/">StealthAgents</a></p><h2 id="contact-team-title">{d.teamTitle}</h2><p>Stealth Agents provides virtual assistant staffing support for businesses that need dependable help with recurring administrative and operational work.</p><p>{d.teamCopy}</p><p className="contact-parent-note">{brand} is powered by StealthAgents.</p><a className="contact-action" id="cta-contact-team-consultation" href="/contact-us#consultation-form">Book a Free Consultation <span aria-hidden="true">↗</span></a></div>
 </div></section>
 <section className="contact-calendar-section" id="book-direct" aria-labelledby="contact-calendar-title"><div className="contact-section-heading"><h2 id="contact-calendar-title">Or skip the wait.<br/>Book a call now.</h2><p>{d.calendarCopy}</p></div><div className="contact-calendar-frame"><iframe title={`Book a consultation with ${brand}`} src={calendar||'https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1'} loading="lazy"/></div></section>
 <section className="contact-next" aria-labelledby="contact-next-title"><div className="contact-section-heading"><h2 id="contact-next-title">After you reach out</h2><p>A useful conversation, a defined role, and a careful start.</p></div><ol className="contact-steps">{[
  ['Workflow discovery',d.discovery],['Role design','Turn recurring work into a clear role with defined responsibilities, access and handoffs.'],['Candidate matching',d.matching],['Controlled launch','Begin with approved tools, documented procedures, supervised handoffs and regular review points.']
 ].map(([title,copy])=><li key={title} data-contact-reveal><h3>{title}</h3><p>{copy}</p></li>)}</ol></section>
 <section className="contact-preparation" aria-labelledby="contact-prep-title"><div className="contact-prep-title"><h2 id="contact-prep-title">Make the first<br/>conversation count.</h2><p>A few practical details help us shape the role around your work. Bring examples, without confidential records or credentials.</p></div><div className="contact-prep-list">{[
 ['Recurring work',preparation[0]],['Current ownership',d.ownership],['Systems and access',preparation[1]],['Service standard',d.standard]
 ].map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
 <section className="contact-authority" aria-labelledby="contact-authority-title"><h2 id="contact-authority-title">A clear role.<br/>Clear responsibility.</h2><div className="contact-authority-pair"><article><h3>Delegated support</h3><p>{d.delegation}</p></article><article><h3>Retained by your team</h3><p>{boundary}</p></article></div></section>
 <section className="contact-starting" aria-labelledby="contact-starting-title"><div className="contact-section-heading"><h2 id="contact-starting-title">Common starting points</h2><p>{d.servicesIntro}</p></div><div className="contact-service-links">{d.services.map(service=><a href={service.href} key={service.href}><span>{service.title}</span><span aria-hidden="true">↗</span></a>)}</div><Link className="contact-directory" href="/services">Explore every service <span aria-hidden="true">→</span></Link></section>
 <section className="contact-questions" aria-labelledby="contact-faq-title"><h2 id="contact-faq-title">Before we talk.</h2><div>{d.faqs.map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
 </ContactMotion>}
