var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var k=Object.defineProperty;var w=(n,t)=>{for(var e in t)k(n,e,{get:t[e],enumerable:!0})};var u={};w(u,{pdfRenderOptions:()=>g,render:()=>m});var y=["January","February","March","April","May","June","July","August","September","October","November","December"],S={GB:"United Kingdom",US:"United States",CA:"Canada",AU:"Australia",DE:"Germany",FR:"France",IN:"India",JP:"Japan",CN:"China",BR:"Brazil",NL:"Netherlands",IT:"Italy",ES:"Spain",SE:"Sweden",CH:"Switzerland",SG:"Singapore",NZ:"New Zealand",IE:"Ireland",AE:"UAE"},j={summary:"Summary",skills:"Core Skills",experience:"Experience",projects:"Selected Projects",education:"Education",volunteer:"Leadership & Volunteering",certifications:"Credentials",additional:"Additional"};function h(n){return n.replace(/&#(\d+);/g,(t,e)=>String.fromCharCode(Number(e))).replace(/&#x([0-9a-fA-F]+);/g,(t,e)=>String.fromCharCode(parseInt(e,16))).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&nbsp;/g," ").replace(/&mdash;/g,"\u2014").replace(/&ndash;/g,"\u2013").replace(/&hellip;/g,"\u2026")}function r(n){return n==null?"":String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function f(n){if(!n||n.toLowerCase()==="present")return"Present";let t=String(n).split("-");if(t.length===1)return t[0];let e=t[0];return`${y[parseInt(t[1],10)-1]||""} ${e}`}function E(n,t){let e=f(n),i=f(t);return!e||e==="Present"?"":i?`${e} to ${i}`:e}function z(n){return n?S[n.toUpperCase()]||n:""}function C(n){if(!n)return'<i class="fa-solid fa-link"></i>';let t=n.toLowerCase();return t==="linkedin"?'<i class="fa-brands fa-linkedin-in"></i>':t==="github"?'<i class="fa-brands fa-github"></i>':t==="twitter"||t==="x"?'<i class="fa-brands fa-x-twitter"></i>':t==="stackoverflow"?'<i class="fa-brands fa-stack-overflow"></i>':'<i class="fa-solid fa-link"></i>'}var v=new Set(["p","ul","ol","li","blockquote"]),$=new Set(["br","b","strong","i","em","u","s","mark","a","sub","sup","code"]),A=new Set([...v,...$]),D=/^(?:https?|mailto|tel):/i,N=/^[#/?.]/;function T(n){let t=n.trim();return t?D.test(t)||N.test(t):!1}function I(n,{inline:t=!1}={}){if(!n)return"";let e=t?$:A;return String(n).replace(/<a\s+[^>]*href="([^"]*)"[^>]*>/gi,(i,a)=>T(a)?`<a href="${a.replace(/"/g,"&quot;")}" target="_blank" rel="noopener">`:"").replace(/<mark\s+[^>]*class="([^"]*)"[^>]*>/gi,(i,a)=>`<mark class="${a.replace(/"/g,"&quot;")}">`).replace(/<(\/?)([a-z][a-z0-9]*)\s*[^>]*?(\/?)>/gi,(i,a,o,l)=>{let p=o.toLowerCase();return p==="a"&&!a&&i.includes("href=")||p==="mark"&&!a&&i.includes("class=")?i:e.has(p)?`<${a}${p}${l}>`:t&&v.has(p)&&a?" ":""}).replace(/<p>\s*<\/p>/gi,"").replace(/\s{2,}/g," ").trim()}function L(n){return n?h(String(n).replace(/<br\s*\/?>/gi," ").replace(/<\/?(p|div|li)[^>]*>/gi," ").replace(/<[^>]+>/g,"")).replace(/\s{2,}/g," ").trim():""}var _=n=>/<[a-z][\s\S]*>/i.test(n),R=n=>/&(?:amp|lt|gt|quot|#\d+|#x[0-9a-f]+);/i.test(n);function d(n,{block:t=!1}={}){if(n==null)return"";let e=String(n);return _(e)?I(e,{inline:!t}):R(e)?r(h(e)):r(e)}function s(n){return Array.isArray(n)&&n.length>0}function B(n){if(!n)return"";let t=n.location?[n.location.city,z(n.location.region)].filter(Boolean).join(", "):"",e=[];if(t&&e.push({icon:'<i class="fa-solid fa-location-dot"></i>',text:t}),n.phone&&e.push({icon:'<i class="fa-solid fa-square-phone"></i>',text:n.phone}),n.email&&e.push({icon:'<i class="fa-solid fa-envelope"></i>',text:n.email}),n.url){let i=n.url.replace(/^https?:\/\//,"");e.push({icon:'<i class="fa-solid fa-globe"></i>',text:i})}if(s(n.profiles))for(let i of n.profiles)e.push({icon:C(i.network),text:i.username||i.url||""});return`
    <header class="header">
      <div class="header-left">
        <h1 class="name">${r(n.name)}</h1>
        <div class="label">${r(n.label)}</div>
      </div>
      <div class="contact-info">
        ${e.map(i=>`<div class="contact-line">${r(i.text)} ${i.icon}</div>`).join(`
        `)}
      </div>
    </header>
    <hr class="header-rule" />`}function c(n){return`<h2 class="section-title">${r(n)}</h2>`}function P(n,t){if(!n)return"";let e=d(n,{block:!0});return e?`
    ${c(t)}
    <div class="summary">${e}</div>`:""}function U(n,t){return s(n)?`
    ${c(t)}
    <div class="section-body">
      ${n.map(e=>`
      <div class="bullet-item">
        <span class="skill-name">${r(e.name)}:</span> ${r((e.keywords||[]).join(", "))}
      </div>`).join("")}
    </div>`:""}function H(n){return/Tech-stack:\s/i.test(n)||/Client:\s/i.test(n)}function O(n){if(!n)return{techStack:"",client:"",narrative:""};let t=L(n).replace(/\n/g," ").trim();if(!H(t))return{techStack:"",client:"",narrative:t};let e=t,i=e.match(/Client:\s*(.+)$/i),a=i?i[1].trim():"";i&&(e=e.slice(0,i.index).trim());let o=e.match(/Tech-stack:\s*(.+)/i),l=o?o[1].trim():"";return o&&(e=e.slice(0,o.index).trim()),{techStack:l,client:a,narrative:e}}function G(n){let{techStack:t,client:e,narrative:i}=O(n.summary),a=E(n.startDate,n.endDate);return`
    <div class="work-entry">
      <div class="work-header">
        <div class="work-title">${r(n.name)} - ${r(n.position)}</div>
        <div class="work-duration">${a?`Duration: ${r(a)}`:""}</div>
      </div>
      ${t||e?`
      <div class="work-meta">
        <div class="work-tech">${t?`Tech-stack: ${r(t)}`:""}</div>
        <div class="work-client">${e?`Client: ${r(e)}`:""}</div>
      </div>`:""}
      ${i?`<p class="work-summary">${d(i,{block:!1})}</p>`:""}
      ${s(n.highlights)?`
      <ul class="work-highlights">
        ${n.highlights.map(o=>`<li>${d(o)}</li>`).join(`
        `)}
      </ul>`:""}
    </div>`}function F(n,t){return s(n)?`
    ${c(t)}
    <div class="section-body">
      ${n.map(G).join("")}
    </div>`:""}function M(n,t){return s(n)?`
    ${c(t)}
    <div class="section-body">
      ${n.map(e=>{let i=d(e.description);return`
      <div class="bullet-item">
        <span class="project-name">${r(e.name)}:</span> ${i}
      </div>`}).join("")}
    </div>`:""}function q(n){let t=[n.studyType,n.area].filter(Boolean).join(" "),e="";if(n.endDate)e=f(n.endDate);else if(n.startDate){let o=parseInt(String(n.startDate).split("-")[0],10),l=new Date().getFullYear();e=o>=l?`Expected ${f(n.startDate)}`:f(n.startDate)}let i=[n.institution];n.score&&i.push(n.score);let a=i.filter(Boolean).join(" | ");return`
    <div class="edu-entry">
      <div class="edu-header">
        <div class="edu-degree">${r(t)}</div>
        <div class="edu-year">${r(e)}</div>
      </div>
      ${n.institution?`<div class="edu-institution">${r(a)}</div>`:""}
      ${s(n.courses)?`<div class="edu-courses">Coursework: ${n.courses.map(o=>d(o)).join(", ")}</div>`:""}
    </div>`}function J(n,t){return s(n)?`
    ${c(t)}
    <div class="section-body">
      ${n.map(q).join("")}
    </div>`:""}function W(n,t){return s(n)?`
    ${c(t)}
    <div class="section-body">
      ${n.map(e=>{let i=e.endDate?`${e.startDate}\u2013${e.endDate}`:e.startDate||"",a=e.position?`${e.position} \u2013 ${e.organization}`:e.organization,o=d(e.summary);return`
      <div class="bullet-item volunteer-item">
        <span class="vol-title">${r(a)}${i?` (${r(i)})`:""}:</span> ${o}
      </div>`}).join("")}
    </div>`:""}function V(n,t){return s(n)?`
    ${c(t)}
    <div class="section-body">
      ${n.map(e=>`
      <div class="bullet-item">${d(e.name)}</div>`).join("")}
    </div>`:""}function Y(n,t){let e=[];if(s(n.interests))for(let i of n.interests){let a=s(i.keywords)?i.keywords.join(", "):"",o=i.name||"Interests";a&&e.push(`<div class="additional-line"><span class="additional-label">${r(o)}:</span> ${r(a)}</div>`)}if(s(n.languages)){let i=n.languages.map(a=>`${a.language}${a.fluency?` (${a.fluency})`:""}`).join(", ");e.push(`<div class="additional-line"><span class="additional-label">Languages:</span> ${r(i)}</div>`)}return s(n.references)&&e.push('<div class="additional-line"><span class="additional-label">Referees:</span> Available on request</div>'),e.length===0?"":`
    ${c(t)}
    <div class="section-body">
      ${e.join(`
      `)}
    </div>`}var K=`@page {
  size: A4;
  margin: 12mm 14mm;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  font-family: 'EB Garamond', Georgia, 'Palatino Linotype', 'Times New Roman', serif;
  font-size: 10pt;
  line-height: 1.32;
  color: #000;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

/* Browser-only padding (overridden by @page margin in print/PDF) */
body {
  padding: 12mm 14mm;
}
@media print {
  body { padding: 0; }
}

/* \u2500\u2500\u2500 Header \u2500\u2500\u2500 */

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.header-left {
  flex: 1;
  min-width: 0;
}

.name {
  font-size: 32pt;
  font-weight: 400;
  line-height: 1.05;
  color: #000;
  letter-spacing: 0.3px;
}

.label {
  font-style: italic;
  font-size: 10.5pt;
  margin-top: 4px;
  color: #222;
  line-height: 1.3;
}

.contact-info {
  text-align: right;
  font-size: 8.5pt;
  line-height: 1.65;
  flex-shrink: 0;
  padding-top: 4px;
}

.contact-line {
  white-space: nowrap;
}

.contact-line i {
  display: inline-block;
  width: 11px;
  text-align: center;
  margin-left: 5px;
  font-size: 7.5pt;
}

.header-rule {
  border: none;
  border-top: 0.5px solid #666;
  margin: 6px 0 3px;
}

/* \u2500\u2500\u2500 Summary \u2500\u2500\u2500 */

.summary {
  font-style: italic;
  font-size: 9pt;
  line-height: 1.38;
  margin-bottom: 2px;
  text-align: justify;
}

/* \u2500\u2500\u2500 Section Headings \u2500\u2500\u2500 */

.section-title {
  font-variant: small-caps;
  font-size: 12.5pt;
  font-weight: 400;
  letter-spacing: 1.5px;
  border-bottom: 1.5px solid #C4962C;
  padding-bottom: 1px;
  margin-top: 8px;
  margin-bottom: 5px;
  color: #000;
  page-break-after: avoid;
}

/* \u2500\u2500\u2500 Bullet Items (shared) \u2500\u2500\u2500 */

.bullet-item {
  position: relative;
  padding-left: 14px;
  margin-bottom: 2px;
}

.bullet-item::before {
  content: '\\25CB';
  position: absolute;
  left: 0;
  font-size: 7pt;
  top: 2.5px;
}

/* \u2500\u2500\u2500 Skills \u2500\u2500\u2500 */

.skill-name {
  font-weight: 700;
}

/* \u2500\u2500\u2500 Work Experience \u2500\u2500\u2500 */

.work-entry {
  margin-bottom: 7px;
  page-break-inside: avoid;
}

.work-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.work-title {
  font-weight: 700;
  font-size: 10pt;
}

.work-duration {
  font-size: 9.5pt;
  white-space: nowrap;
  flex-shrink: 0;
}

.work-meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.work-tech {
  font-style: italic;
  font-size: 9.5pt;
}

.work-client {
  font-style: italic;
  font-size: 9.5pt;
  white-space: nowrap;
  flex-shrink: 0;
}

.work-summary {
  margin: 2px 0 0;
  font-style: italic;
  font-size: 9.5pt;
  color: #333;
}

.work-highlights {
  list-style: none;
  padding-left: 0;
  margin-top: 3px;
}

.work-highlights li {
  position: relative;
  padding-left: 14px;
  margin-bottom: 3px;
  text-align: justify;
}

.work-highlights li::before {
  content: '\\25CB';
  position: absolute;
  left: 0;
  font-size: 7pt;
  top: 2.5px;
}

/* \u2500\u2500\u2500 Education \u2500\u2500\u2500 */

.edu-entry {
  margin-bottom: 5px;
  page-break-inside: avoid;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.edu-degree {
  font-weight: 700;
  font-size: 10pt;
}

.edu-year {
  font-size: 10pt;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;
}

.edu-institution {
  font-size: 9.5pt;
}

.edu-courses {
  font-size: 9.5pt;
}

/* \u2500\u2500\u2500 Projects \u2500\u2500\u2500 */

.project-name {
  font-weight: 700;
}

/* \u2500\u2500\u2500 Volunteer \u2500\u2500\u2500 */

.volunteer-item {
  text-align: justify;
  margin-bottom: 4px;
}

.vol-title {
  font-weight: 700;
}

/* \u2500\u2500\u2500 Additional \u2500\u2500\u2500 */

.additional-line {
  margin-bottom: 1px;
}

.additional-label {
  font-weight: 700;
  font-style: italic;
}

/* \u2500\u2500\u2500 Print \u2500\u2500\u2500 */

@media print {
  .work-entry { page-break-inside: avoid; }
  .edu-entry  { page-break-inside: avoid; }
  .section-title { page-break-after: avoid; }
}
`;function m(n){var t;let e={...j},i=(t=n?.meta)==null?void 0:t.headings;if(i)for(let[o,l]of Object.entries(i))l&&o in e&&(e[o]=l);let a=n?.basics||{};return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${r(a.name||"Resume")}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <style>${K}</style>
</head>
<body>
  <div class="resume">
    ${B(a)}
    ${P(a.summary,e.summary)}
    ${U(n.skills,e.skills)}
    ${F(n.work,e.experience)}
    ${M(n.projects,e.projects)}
    ${J(n.education,e.education)}
    ${W(n.volunteer,e.volunteer)}
    ${V(n.certificates,e.certifications)}
    ${Y(n,e.additional)}
  </div>
</body>
</html>`}var g={mediaType:"print",format:"A4",margin:{top:"12mm",right:"14mm",bottom:"12mm",left:"14mm"}};var b=void 0??u,X=b.render??m,nn=b.pdfRenderOptions??g;export{nn as pdfRenderOptions,X as render};
