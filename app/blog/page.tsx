import Link from 'next/link';
import {site} from '@/lib/site';

export const metadata={title:'Practical insights',description:'Practical articles for '+site.audience+'.'};

export default function Page(){
  const items=site.blog;
  return <section className="section"><div className="wrap"><p className="eyebrow">Insights</p><h1>Practical guidance for the work behind the work.</h1><p className="lede">Operational guides for claim, payment, denial, access, and patient-account workflows.</p><div className="grid">{items.map((x:any)=><Link className="card" href={'/blog/'+x[0]} key={x[0]}>{x[5]&&<img className="article-thumb" src={x[5]} alt={x[1]}/>}<span className="eyebrow">{x[2]}</span><h2>{x[1]}</h2><p>{x[3]}</p>{x[6]&&<p className="article-date">Published October 12, 2026</p>}</Link>)}</div></div></section>
}
