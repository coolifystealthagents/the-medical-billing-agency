import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'../..');
const manifest=JSON.parse(fs.readFileSync(path.join(here,'manifest.json'),'utf8'));
const entries=[...manifest.blog.map(x=>({...x,section:'BLOG'})),...manifest.research.map(x=>({...x,section:'RESEARCH'}))];
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'medical-billing-thumbs-'));
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const wrap=(title,max=27)=>{const words=title.split(' '),lines=[];let line='';for(const word of words){const next=line?line+' '+word:word;if(next.length>max&&line){lines.push(line);line=word}else line=next}if(line)lines.push(line);return lines};

try{
  entries.forEach((entry,index)=>{
    const output=path.join(root,entry.thumbnailPath);
    fs.mkdirSync(path.dirname(output),{recursive:true});
    const lines=wrap(entry.title);
    const accent=entry.section==='BLOG'?'#39c6c8':'#f0b85b';
    const shape=index%3===0?'M0 500 Q330 390 620 510 T1200 450 V630 H0Z':index%3===1?'M0 455 Q280 555 590 440 T1200 490 V630 H0Z':'M0 520 Q340 430 680 500 T1200 420 V630 H0Z';
    const text=lines.map((line,i)=>`<text x="72" y="${225+i*68}" fill="#f7fbfb" font-family="Arial, sans-serif" font-size="54" font-weight="700">${escape(line)}</text>`).join('');
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#073f46"/><circle cx="1040" cy="80" r="220" fill="#127bc1" opacity=".38"/><rect x="72" y="62" width="360" height="48" rx="24" fill="${accent}"/><text x="252" y="94" text-anchor="middle" fill="#073f46" font-family="Arial, sans-serif" font-size="18" font-weight="700">${entry.section}</text>${text}<path d="${shape}" fill="#127bc1" opacity=".72"/><text x="72" y="584" fill="#f7fbfb" font-family="Arial, sans-serif" font-size="21" font-weight="700">THE MEDICAL BILLING AGENCY · OCTOBER 12, 2026</text></svg>`;
    const svgPath=path.join(temp,entry.slug+'.svg');
    fs.writeFileSync(svgPath,svg);
    execFileSync('sips',['-s','format','png',svgPath,'--out',output],{stdio:'ignore'});
  });
  console.log(`Generated ${entries.length} exact-title PNG thumbnails.`);
}finally{fs.rmSync(temp,{recursive:true,force:true})}
