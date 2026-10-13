import Link from 'next/link';
import {site} from '@/lib/site';

export const metadata={title:'Original workflow research',description:'Transparent workflow research from '+site.brand+'.'};

export default function Page(){
  const items=site.research;
  return <section className="section"><div className="wrap"><p className="eyebrow">Research library</p><h1>Observable workflow evidence, mapped clearly.</h1><p className="lede">Original briefs use disclosed methods, explicit limits, and authoritative source frameworks.</p><div className="grid">{items.map((x:any)=><Link className="card" href={'/research/'+x.slug} key={x.slug}>{x.thumbnail&&<img className="article-thumb" src={x.thumbnail} alt={x.title}/>}<span className="eyebrow">{x.cluster}</span><h2>{x.title}</h2><p>{x.excerpt}</p><p className="article-date">Published {new Date(x.publishedAt+'T12:00:00Z').toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'})}</p></Link>)}</div></div></section>
}
