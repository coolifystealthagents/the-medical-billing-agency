import Link from 'next/link';
import {site} from '@/lib/site';

export const metadata={title: 'Blog',description:'Practical articles for '+site.audience+'.'};

export default function Page(){
  const items=site.blog;
  return <section className="section"><div className="wrap"><p className="eyebrow">Blog</p><h1>Blog</h1><p className="lede">Operational guides for claim, payment, denial, access, and patient-account workflows.</p><div className="grid listing-grid">{items.map((x:any)=><Link className="card article-card" href={'/blog/'+x[0]} key={x[0]}>{x[5]&&<img className="article-thumb" src={x[5]} alt={x[1]}/>}<span className="eyebrow">{x[2]}</span><h2>{x[1]}</h2><p>{x[3]}</p>{x[6]&&<p className="article-date">Published {new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${x[6]}T00:00:00Z`))} · {x[4]?.readTime||'9 min read'}</p>}</Link>)}</div></div></section>
}
