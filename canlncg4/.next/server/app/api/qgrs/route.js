"use strict";(()=>{var e={};e.id=28,e.ids=[28],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},66868:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>m,originalPathname:()=>q,requestAsyncStorage:()=>g,routeModule:()=>d,serverHooks:()=>h,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>f});var a={};r.r(a),r.d(a,{POST:()=>u}),r(95655);var s=r(83323),i=r(54647),n=r(41779),o=r(22781);class l{constructor(){}async get_data(e,t,r,a,s,i){let n;if("NCBI_ID"===t){let{seq:t,url:o}=await this.get_fasta_and_link(e);n=await this.get_QGRS_data(t,r,a,s,i)}else"seq"===t?n=await this.get_QGRS_data(e,r,a,s,i):console.log("Wrong input type");return n}remove(e,t){for(let r of t)e=e.replace(r,"");return e}async get_fasta_and_link(e){let t,r;r=[];for(let t=0;t<5;t++){let t=`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=nuccore&id=${e}&rettype=fasta&retmode=text`,a=await n.Z.get(t);if((r=a.data.split("\n").slice(1)).join("").length>0)break}return{seq:r.join(""),url:t}}async get_QGRS_data(e,t,r,a,s){let i={Enabled:"true",QGRSmax:t.toString(),GGroupmin:r.toString(),loop_min:a.toString(),loop_max:s.toString()},l=await n.Z.post("https://bioinformatics.ramapo.edu/QGRS/analyze.php",{sequence:e},{headers:{"Content-Type":"application/x-www-form-urlencoded",Cookie:JSON.stringify(i)}}),u=l.data,p=o.ZP.load(u),d=p("body").find('img[src="data.gif"]').parent(),g="https://bioinformatics.ramapo.edu/QGRS/dataview.php/"+d.attr("href"),c=await n.Z.get(g),h=c.data,m=o.ZP.load(h),f=m("table").eq(0),q=f.find("tr"),x=[];for(let e=1;e<q?.length;e++){let t=q.eq(e),r={},a=t.find("td").eq(0).text();r.start=parseInt(this.remove(a,["<td>","</td>"]));let s=t.find("td").eq(1).text();r.len=parseInt(this.remove(s,["<td>","</td>"]));let i=t.find("td").eq(2);r.sequence=this.remove(i.html(),["<td>","</td>","<u>","</u>","<b>","</b>"]);let n=this.remove(i.html(),["<td>","</td>","</u>","<b>","</b>"]),o=[...Array.from(n.matchAll(/<u>/g))].map(e=>e.index);r.g_indices=o.map((e,t)=>e-3*t),r.numgs=i.find("u").eq(0).text().length;let l=t.find("td").eq(3).text();r.score=parseInt(this.remove(l,["<td>","</td>"])),x.push(r)}return x}}let u=async e=>{let t=await e.json(),{inputString:r,maxLen:a,minGLen:s,loopMin:i,loopMax:n}=t,o=[];if(r.startsWith(">")){let e=r.split("\n"),t="";for(let r=1;r<e.length;r++)t+=e[r];let u=new l;o=await u.get_data(t,"seq",a,s,i,n)}else if(r.startsWith("NR")){let e=new l;o=await e.get_data(r,"NCBI_ID",a,s,i,n)}else{let e=new l;o=await e.get_data(r,"seq",a,s,i,n)}let u=[];for(let e=0;e<o.length;e++)o[e].numgs>=2&&o[e].numgs<=4&&u.push(o[e]);for(let e=0;e<u.length;e++){let t=u[e].sequence;for(t=t.replace(/<u>/g,"");t.includes("</u>");)t=t.replace("</u>","");u[e].sequence=t}return Response.json({result:u},{status:200})},p=s.AppRouteRouteModule,d=new p({definition:{kind:i.x.APP_ROUTE,page:"/api/qgrs/route",pathname:"/api/qgrs",filename:"route",bundlePath:"app/api/qgrs/route"},resolvedPagePath:"C:\\DATA\\Code\\IITGN\\CanlncG4\\canlncg4\\app\\api\\qgrs\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:g,staticGenerationAsyncStorage:c,serverHooks:h,headerHooks:m,staticGenerationBailout:f}=d,q="/api/qgrs/route"}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[405,779,781],()=>r(66868));module.exports=a})();