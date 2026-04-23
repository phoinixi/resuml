var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var C=Object.create;var x=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,W=Object.prototype.hasOwnProperty;var E=(e,t)=>()=>(e&&(t=e(e=0)),t);var B=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var L=(e,t,o,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of O(t))!W.call(e,n)&&n!==o&&x(e,n,{get:()=>t[n],enumerable:!(a=N(t,n))||a.enumerable});return e};var S=(e,t,o)=>(o=e!=null?C(P(e)):{},L(t||!e||!e.__esModule?x(o,"default",{value:e,enumerable:!0}):o,e));var l=E(()=>{});var k=B(y=>{l();function $(e){return e?e.replace(/-/g,"."):""}function f(e,t){let o=$(e),a=t?$(t):"present";return`(${o} - ${a})`}function m(e){return e?e.toLowerCase().replace(/\b\w/g,t=>t.toUpperCase()):""}function w(e){let t=f(e.startDate,e.endDate),o=m(e.position),a=e.summary?`<div class="item-description">${e.summary}</div>`:"",n=e.highlights&&e.highlights.length>0?`<div class="item-skills">${e.highlights.join(" \u2022 ")}</div>`:"";return`<div class="experience-item">
    <div class="item-header"><strong>${o}</strong> <em>@ ${e.name}</em> ${t}</div>
    ${a}
    ${n}
  </div>`}y.render=e=>{let{basics:t,work:o=[],education:a=[],publications:n=[],projects:j=[]}=e,c=[];if(t.email&&c.push(`<a href="mailto:${t.email}">${t.email}</a>`),t.phone&&c.push(`<a href="tel:${t.phone}">${t.phone}</a>`),t.url&&c.push(`<a href="${t.url}">${t.url}</a>`),t.location){let i=[t.location.city,t.location.region,t.location.countryCode].filter(Boolean).join(", ");i&&c.push(i)}let D=c.join(" | "),I=o.slice(0,4),z=o.slice(4),R=I.map(w).join(""),g=z.map(w).join(""),T=a.map(i=>{let r=f(i.startDate,i.endDate),d=[i.studyType,i.area].filter(Boolean).join(" in "),p=m(d),h=i.summary?`<div class="item-description">${i.summary}</div>`:"";return`<div class="education-item">
      <div class="item-header"><strong>${p}</strong>, <em>${i.institution}</em> ${r}</div>
      ${h}
    </div>`}).join(""),u=n.map(i=>{let r=i.releaseDate?` (${i.releaseDate})`:"",d=i.summary?`<div class="item-description">${i.summary}</div>`:"";return`<div class="publication-item">
      <div class="item-header"><strong>${m(i.name)}</strong>, <em>${i.publisher}</em>${r}</div>
      ${d}
    </div>`}).join(""),v=j.map(i=>{let r=f(i.startDate,i.endDate),d=m(i.name),p=i.description?`<div class="item-description">${i.description}</div>`:"",h=i.keywords&&i.keywords.length>0?`<div class="item-skills">${i.keywords.join(" \u2022 ")}</div>`:"";return`<div class="project-item">
      <div class="item-header">${d}${r?` ${r}`:""}</div>
      ${p}
      ${h}
    </div>`}).join("");return`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t.name}</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html, body {
        width: 100%;
        min-height: 100vh;
        background-color: #fff;
        color: #000;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        line-height: 1.6;
        position: relative;
      }
      .header-band {
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        margin-top: 0;
        background-color: #666 !important;
        color: #fff !important;
        padding: 12px 20px 8px 20px;
        margin-bottom: 15px;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      h1 {
        margin: 0 0 3px 0;
        font-size: 1.5em;
        font-weight: 700;
        color: #fff;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      h2 {
        margin: 0;
        font-size: 1.1em;
        font-weight: 500;
        color: #fff;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .contact {
        margin: 8px 0 0 0;
        font-size: 0.85em;
        color: #fff;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .contact a {
        color: #fff;
        text-decoration: none;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .contact a:hover {
        text-decoration: underline;
      }
      .summary {
        margin: 15px 0 20px 0;
        text-align: justify;
        color: #000;
      }
      section {
        margin: 30px 0;
      }
      .section-header {
        font-size: 1.2em;
        font-weight: 600;
        margin: 0 0 15px 0;
        padding: 8px 20px;
        text-transform: uppercase;
        background-color: #666 !important;
        color: #fff !important;
        display: block;
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .experience-item, .education-item, .publication-item, .project-item {
        margin: 15px 0;
      }
      .item-header {
        font-size: 1.1em;
        margin-bottom: 8px;
        color: #000;
      }
      .item-header strong {
        font-weight: 700;
      }
      .item-header em {
        font-style: italic;
        font-weight: normal;
      }
      .item-description {
        font-size: 0.95em;
        color: #000;
        margin-top: 5px;
        line-height: 1.5;
      }
      .item-skills {
        font-size: 0.9em;
        color: #000;
        margin-top: 8px;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    </style>
  </head>
  <body>
    <div class="header-band">
      <h1>${t.name}</h1>
      <h2>${t.label||""}</h2>
      <div class="contact">${D}</div>
    </div>
    <div class="summary">${t.summary||""}</div>
    
    <section>
      <div class="section-header">Experience</div>
      ${R}
    </section>
    
    <section>
      <div class="section-header">Education</div>
      ${T}
    </section>
    
    ${g?`<section>
      <div class="section-header">Other Professional Experience</div>
      ${g}
    </section>`:""}
    
    ${v?`<section>
      <div class="section-header">Projects</div>
      ${v}
    </section>`:""}
    
    ${u?`<section>
      <div class="section-header">Publications</div>
      ${u}
    </section>`:""}
  </body>
</html>
`}});l();var s=S(k(),1),b=s.default??s,_=b.render??s.render,q=b.pdfRenderOptions??s.pdfRenderOptions;export{q as pdfRenderOptions,_ as render};
