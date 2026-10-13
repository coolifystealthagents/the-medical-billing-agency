import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'../..');
const manifest=JSON.parse(fs.readFileSync(path.join(here,'manifest.json'),'utf8'));
const source=fs.readFileSync(path.join(root,'lib/october12.ts'),'utf8');
const failures=[];
const check=(ok,message)=>{if(!ok)failures.push(message)};
const all=[...manifest.blog.map(x=>({...x,section:'Blog'})),...manifest.research.map(x=>({...x,section:'Research'}))];

check(manifest.blog.length===12,'expected exactly 12 Blog items');
check(manifest.research.length===5,'expected exactly 5 Research items');
check(all.length===17,'expected 17 total items');
check(new Set(all.map(x=>x.slug)).size===17,'slugs must be unique');
check(new Set(all.map(x=>x.title)).size===17,'titles must be unique');
check(new Set(all.map(x=>x.thumbnailPath)).size===17,'thumbnail paths must be unique');
check(all.every(x=>!/(?:2026|october\s+12)/i.test(x.title)),'titles must be date-free');
check(source.includes("const publishedAt = '2026-10-12'"),'registry must set the exact publication date');
for(const item of all){check(source.includes(`'${item.slug}'`)&&source.includes(`'${item.title}'`),`registry missing ${item.slug}`)}
check(manifest.research.every(x=>x.sources===10),'each Research item must declare ten sources');
check(source.includes('sourceCount: 10')&&source.includes('.slice(0, 10)'),'Research source depth must remain ten');
const urls=[...source.matchAll(/'https:\/\/([^/'\s]+)[^']*'/g)].map(m=>m[0].slice(1,-1));
const allowed=new Set(['www.cms.gov','www.hhs.gov','csrc.nist.gov','oig.hhs.gov','www.gao.gov']);
check(urls.length>=12,'source catalog must contain at least twelve HTTPS references');
check(urls.every(url=>allowed.has(new URL(url).hostname)), 'source catalog contains a non-authoritative host');
const hashes=[];
for(const item of all){
  const p=path.join(root,item.thumbnailPath);check(fs.existsSync(p),`missing thumbnail ${item.thumbnailPath}`);if(!fs.existsSync(p))continue;
  const b=fs.readFileSync(p);check(b.toString('ascii',1,4)==='PNG',`${item.thumbnailPath} is not PNG`);check(b.readUInt32BE(16)===1200&&b.readUInt32BE(20)===630,`${item.thumbnailPath} must be 1200x630`);hashes.push(crypto.createHash('sha256').update(b).digest('hex'));
}
check(new Set(hashes).size===17,'thumbnail binaries must be unique');
const blogIndex=fs.readFileSync(path.join(root,'app/blog/page.tsx'),'utf8');
const blogRoute=fs.readFileSync(path.join(root,'app/blog/[slug]/page.tsx'),'utf8');
const researchIndex=fs.readFileSync(path.join(root,'app/research/page.tsx'),'utf8');
const researchRoute=fs.readFileSync(path.join(root,'app/research/[slug]/page.tsx'),'utf8');
check(blogIndex.includes('Published October 12, 2026'),'Blog index must show the date');
check(blogRoute.includes('Published {visibleDate}')&&blogRoute.includes('className="sidebar"')&&blogRoute.includes('Related billing operations guidance'),'Blog route must preserve date, sidebar, and related content');
check(researchIndex.includes("'/research/'")&&researchIndex.includes('Published {'),'Research index must route and show dates');
check(researchRoute.includes('className="sidebar"')&&researchRoute.includes('Related research')&&researchRoute.includes('sources.map'),'Research route must preserve sidebar, related content, and source links');
const siteLoader=fs.readFileSync(path.join(root,'lib/site.ts'),'utf8');
check(siteLoader.includes("from './october12Blog'")&&siteLoader.includes("from './october12Research'"),'separate Blog and Research loaders must be integrated');
check(fs.existsSync(path.join(root,'lib/october12Blog.ts'))&&fs.existsSync(path.join(root,'lib/october12Research.ts')),'separate Blog and Research registry entry points must exist');
if(failures.length){console.error(failures.map(x=>'FAIL: '+x).join('\n'));process.exit(1)}
console.log('PASS: 12 Blog + 5 Research; exact visible date; date-free unique titles; 10 authoritative HTTPS sources per Research; 17 unique exact-title 1200x630 PNG thumbnails; distinct indexes, routes, sidebars, and related content.');
