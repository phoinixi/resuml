var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var C=Object.defineProperty;var E=(t,r)=>{for(var e in r)C(t,e,{get:r[e],enumerable:!0})};var s={};E(s,{render:()=>c});function n(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function d(t){let r=t.phone||"",e=t.email||"";return`
    <div class="header">
      <div class="name">${n(t.name)}</div>
      <div class="contact-group">
        <span class="json-link"><a href="https://stephen.traiforos.com/">{stephen.traiforos.com}</a></span>
        <span class="contact">${n(r)}</span>
        <span class="email">${n(e)}</span>
      </div>
    </div>
  `}function m(t){return t.summary?`
    <div class="section">
      <h2>Summary</h2>
      <div class="divider"></div>
      <p class="summary-text">${n(t.summary)}</p>
    </div>
  `:""}function f(t){if(!t||t.length===0)return"";let r=`
    <div class="section">
      <h2>Skills</h2>
      <div class="divider"></div>
      <div class="skills-grid">
  `;return t.forEach(e=>{r+=`<div class="skill-group">
      <span class="skill-label">${n(e.name)}:</span>
      <span class="skill-keywords">${e.keywords.join(", ")}</span>
    </div>`}),r+="</div></div>",r}function u(t){if(!t||t.length===0)return"";let r=`
    <div class="section">
      <h2>Work Experience</h2>
      <div class="divider"></div>
  `;return t.forEach(e=>{let i=R(e.startDate,e.endDate);r+=`
      <div class="work-entry">
        <div class="company-row">
          <span class="company-name">${n(e.company||e.name)}</span>
          <span class="date-range">${n(i)}</span>
        </div>
        ${e.position?`<div class="position">${n(e.position)}</div>`:""}
        ${D(e.highlights)}
      </div>
    `}),r+="</div>",r}function D(t){if(!t||t.length===0)return"";let r='<ul class="highlights">';return t.forEach(e=>{r+=`<li>${n(e)}</li>`}),r+="</ul>",r}function R(t,r){if(!t)return"";let e=l=>{if(!l)return"";let p=new Date(l);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][p.getMonth()]} ${p.getFullYear()}`},i=e(t),a=r?e(r):"Present";return`${i} - ${a}`}function g(t){if(!t||t.length===0)return"";let r=`
    <div class="section">
      <h2>Education</h2>
      <div class="divider"></div>
  `;return t.forEach(e=>{let i=A(e.startDate,e.endDate),a=e.area?`${e.studyType||""}, ${e.area}`:e.studyType||"";r+=`
      <div class="education-entry">
        <div class="education-row">
          <span class="education-name">${n(e.institution)}${a?", "+n(a):""}</span>
          <span class="education-date">${n(i)}</span>
        </div>
      </div>
    `}),r+="</div>",r}function A(t,r){if(!t)return"";let e=l=>{if(!l)return"";let p=new Date(l);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][p.getMonth()]} ${p.getFullYear()}`},i=e(t),a=r?e(r):"Present";return`${i} - ${a}`}function h(){return`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Arial', 'Helvetica', sans-serif;
      font-size: 11pt;
      color: #000;
      line-height: 1.15;
      background: white;
      margin: 0;
      padding: 12pt 36pt 30pt 36pt;
    }
    
    .resume {
      max-width: 540pt;
      margin: 0 auto;
    }
  `}function v(){return`
    .header {
      margin-bottom: 4pt;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .name {
      font-size: 14pt;
      font-weight: bold;
    }
    
    .contact-group {
      font-size: 10pt;
    }
    
    .json-link {
      font-size: 10pt;
      font-weight: bold;
      color: #1155cc;
      margin-right: 12pt;
    }
    
    .contact {
      font-size: 10pt;
      color: #000;
      margin-right: 12pt;
    }
    
    .email {
      font-size: 10pt;
      color: #1155cc;
    }
    
    .divider {
      height: 0.8pt;
      background-color: #000;
      margin: 3pt 0 6pt 0;
    }
  `}function y(){return`
    .section {
      margin-bottom: 8pt;
    }
    
    h2 {
      font-size: 13pt;
      font-weight: bold;
      color: #2f5496;
      margin-bottom: 2pt;
    }
  `}function S(){return`
    .summary-text {
      font-size: 11pt;
      line-height: 1.15;
      margin-top: 0pt;
      margin-bottom: 0pt;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0pt;
      margin-top: 0pt;
    }
    
    .skill-group {
      font-size: 10pt;
      margin-bottom: 0pt;
    }
    
    .skill-label {
      font-weight: bold;
      color: #2f5496;
    }
    
    .skill-keywords {
      color: #2f5496;
    }
  `}function $(){return`
    .work-entry {
      margin-bottom: 6pt;
    }
    
    .company-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3pt;
    }
    
    .company-name {
      font-size: 11pt;
      font-weight: bold;
      color: #000000;
    }
    
    .date-range {
      font-size: 10.5pt;
      color: #434649;
    }
    
    .position {
      font-size: 10pt;
      color: #0563c1;
      font-weight: bold;
      margin-bottom: 2pt;
    }
    
    .highlights {
      list-style: none;
      margin-left: 36pt;
      margin-top: 3pt;
    }
    
    .highlights li {
      font-size: 10pt;
      font-family: Arial, sans-serif;
      margin-bottom: 0pt;
      position: relative;
      padding-left: 18pt;
      line-height: 1.1;
    }
    
    .highlights li:before {
      content: "\u2022";
      position: absolute;
      left: 0;
      color: #000;
      font-size: 10pt;
    }
  `}function b(){return`
    .education-entry {
      margin-bottom: 2pt;
    }
    
    .education-row {
      display: flex;
      justify-content: space-between;
      font-size: 10pt;
    }
    
    .education-name {
      font-weight: bold;
      color: #2f5496;
    }
    
    .education-date {
      font-size: 10.5pt;
      color: #434649;
    }
  `}function k(){return`
    @media print {
      body {
        padding: 0;
      }
      
      .section {
        page-break-inside: avoid;
      }
      
      .work-entry {
        page-break-inside: avoid;
      }
      
      .resume {
        height: 100%;
        overflow: hidden;
      }
    }
  `}function x(){return`
    ${h()}
    ${v()}
    ${y()}
    ${S()}
    ${$()}
    ${b()}
    ${k()}
  `}function c(t){let{basics:r,work:e,education:i,skills:a}=t;return`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${r.name} - Resume</title>
  <style>
    ${x()}
  </style>
</head>
<body>
  <div class="resume">
    ${d(r)}
    ${m(r)}
    ${f(a)}
    ${u(e)}
    ${g(i)}
  </div>
</body>
</html>`}var w=void 0??s,Dt=w.render??c,Rt=w.pdfRenderOptions??void 0;export{Rt as pdfRenderOptions,Dt as render};
