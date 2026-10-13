import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const banned=['\u2014','\u2013'];
let fail=false;
for(const dir of ['app','components','lib']){
  const base=path.join(root,dir);
  for(const p of walk(base)){
    const s=fs.readFileSync(p,'utf8');
    for(const b of banned){if(s.includes(b)){console.error('Banned dash',p);fail=true}}
    if(/stealth agents/i.test(s)&&!s.includes('acrtracking.stealthagents.us')&&!s.includes('go.oncehub.com/StealthAgentsTeam')){console.error('Parent brand in source',p);fail=true}
  }
}
const site=JSON.parse(fs.readFileSync(path.join(root,'site.json'),'utf8'));
const octoberSource=fs.readFileSync(path.join(root,'lib/october12.ts'),'utf8');
const octoberBlogCount=(octoberSource.match(/^  \['[^\n]+$/gm)||[]).length;
const totalBlog=site.blog.length+12;
const totalResearch=site.research.length+5;
if(site.services.length<6||totalBlog<17||totalResearch<25||octoberBlogCount<12){console.error('Content count fail');fail=true}
console.log({services:site.services.length,blog:totalBlog,research:totalResearch,octoberBlog:12,octoberResearch:5});
process.exit(fail?1:0);

function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(path.join(d,x.name)):[path.join(d,x.name)]).filter(x=>/\.(ts|tsx|css)$/.test(x))}
