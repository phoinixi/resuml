var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var x=Object.defineProperty;var b=(t,i)=>{for(var e in i)x(t,e,{get:i[e],enumerable:!0})};var f={};b(f,{default:()=>g,pdfRenderOptions:()=>d,render:()=>p});var y=`:root {
  --text: #0f172a;
  --muted: #334155;
  --summary-light: #7c8798;
  --heading: #0b1220;
  --header-bg: #0f274d;
  --right-bg: #edf4ff;
  --right-text: #0f274d;
}
* { box-sizing: border-box; }
html, body {
  margin: 0;
  padding: 0;
  color: var(--text);
  font-family: Aptos, "Gill Sans MT", "Gill Sans", Calibri, "Trebuchet MS", sans-serif;
  line-height: 1.22;
  font-size: 10pt;
}
.resume {
  max-width: 8.5in;
  margin: 0 auto;
  padding: 0.28in 0.32in;
}
.header {
  display: grid;
  grid-template-columns: 1fr 88px;
  gap: 10px;
  align-items: start;
  margin-bottom: 8px;
  background: var(--header-bg);
  border: 1px solid #0b1f3f;
  padding: 10px 10px 8px;
}
.header-main {
  text-align: center;
}
.name {
  margin: 0;
  font-size: 22pt;
  line-height: 1.05;
  color: #f8fbff;
}
.label {
  margin: 3px 0 0;
  font-size: 10.4pt;
  color: #e6f0ff;
  font-style: italic;
}
.layout {
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 0.16in;
  align-items: start;
}
.right-panel {
  background: var(--right-bg);
  color: var(--right-text);
  padding: 8px 8px 6px;
  line-height: 1.14;
}
.right-panel .section-title {
  color: var(--right-text);
}
.right-panel .compact-list li,
.right-panel .contact-list li,
.right-panel .skill-group,
.right-panel a {
  color: var(--right-text);
}
.right-panel .compact-list li,
.right-panel .contact-list li,
.right-panel .skill-group,
.right-panel .compact-sub li {
  font-size: 9.15pt;
}
.photo,
.photo-empty {
  width: 100%;
  height: 100%;
}
.photo-wrap {
  width: 68px;
  height: 68px;
  border: 1px solid #93c5fd;
  background: #eff6ff;
}
.photo {
  object-fit: cover;
  display: block;
}
.photo-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 8.4pt;
  color: #1d4ed8;
  padding: 6px;
}
.section {
  margin-top: 7px;
}
.section-title {
  margin: 0 0 4px;
  font-size: 14.2pt;
  font-weight: 700;
  color: var(--heading);
}
.summary {
  margin: 0;
  text-align: left;
  font-size: 10.05pt;
}
.item {
  margin-bottom: 5px;
}
.work-item-keep {
  width: 100%;
  display: block;
  margin-bottom: 5px;
  break-inside: avoid;
  page-break-inside: avoid;
}
.item-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.item-role {
  margin: 0;
  font-size: 10.5pt;
  font-weight: 700;
}
.item-org {
  margin: 0.5px 0 0;
  color: var(--muted);
  font-size: 10.5pt;
  font-style: italic;
}
.item-dates {
  white-space: nowrap;
  color: var(--muted);
  font-size: 9.15pt;
}
.item-summary {
  margin: 1px 0 2px;
  color: var(--summary-light);
  font-style: italic;
}
.bullets {
  margin: 2px 0 0;
  padding: 0;
  list-style: none;
}
.bullets li {
  margin: 0 0 1px;
  line-height: 1.12;
  position: relative;
  padding-left: 12px;
}
.bullets li::before {
  content: "\u2022";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--muted);
}
.contact-list,
.compact-list {
  margin: 0;
  padding: 0 0 0 14px;
  list-style: disc;
}
.contact-list {
  padding-left: 0;
  list-style: none;
}
.contact-list li,
.compact-list li {
  margin-bottom: 5px;
  font-size: 9.7pt;
}
.contact-list li {
  margin-bottom: 2px;
  line-height: 1.08;
}
.contact-icon {
  display: inline-flex;
  width: 0.82em;
  height: 0.82em;
  margin-right: 4px;
  vertical-align: -0.08em;
}
.contact-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.compact-sub {
  margin: 1px 0 0 14px;
  padding: 0;
}
.compact-sub li {
  font-size: 9.35pt;
  margin-bottom: 0;
}
.compact-list > li {
  margin-bottom: 7px;
}
.cert-list > li {
  margin-bottom: 2px;
  line-height: 1.1;
}
.compact-list li::marker {
  color: var(--muted);
}
.skill-group {
  margin-bottom: 6px;
  font-size: 9.65pt;
}
.skill-name {
  font-weight: 700;
}
.skills-section,
.skills-section .section-title {
  break-inside: avoid;
  page-break-inside: avoid;
}
.skills-section .section-title {
  break-after: avoid;
  page-break-after: avoid;
}
a {
  color: inherit;
  text-decoration: none;
}
.print-footer {
  display: none;
}
@media print {
  @page {
    size: Letter;
    margin: 0.32in 0.32in 0.22in 0.32in;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .resume {
    max-width: none;
    margin: 0;
    padding: 0.03in 0 0.26in;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
  .layout {
    align-items: start;
  }
  .layout > div,
  .right-panel {
    padding-bottom: 0.28in;
  }
  .right-panel {
    background: transparent;
    padding-left: 0;
    padding-right: 0;
  }
  .right-panel .section {
    background: var(--right-bg);
    margin-top: 7px;
    padding: 6px 8px;
  }
  .right-panel .section:first-child {
    margin-top: 0;
  }
  .bullets,
  .compact-list,
  .skills-section {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  .section-title {
    break-after: avoid;
    page-break-after: avoid;
  }
  .work-section .work-item-keep,
  .work-section .work-item-keep .item,
  .work-section .work-item-keep .item-head,
  .work-section .work-item-keep .item-summary,
  .work-section .work-item-keep .bullets,
  .work-section .work-item-keep .bullets li {
    break-inside: avoid-page !important;
    break-inside: avoid !important;
    page-break-inside: avoid !important;
    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;
  }
  .work-section .work-item-keep {
    page-break-before: auto;
    break-before: auto;
  }
  .print-footer {
    display: flex !important;
    position: fixed;
    left: 0.32in;
    right: 0.32in;
    bottom: 0in;
    height: 0.22in;
    padding: 0 0 0.01in;
    font-size: 7.8pt;
    line-height: 1.15;
    color: var(--summary-light);
    font-style: italic;
    background: transparent;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 999;
    pointer-events: none;
  }
}`;function n(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;")}function h(t){if(!t)return"";let i=String(t).trim();if(!i)return"";let e=new Date(/^\d{4}-\d{2}$/.test(i)?`${i}-01`:i);return Number.isNaN(e.getTime())?n(t):e.toLocaleDateString("en-US",{month:"short",year:"numeric"})}function w(t,i){let e=h(t),o=h(i);return e&&o?`${e} - ${o}`:e?`${e} - Present`:o||""}function l(t,i,e=""){return i?`<section class="section ${e}"><h2 class="section-title">${n(t)}</h2>${i}</section>`:""}function u(t,i){let e=String(t||"").replace(/\s+/g," ").trim();return e.length<=i?e:`${e.slice(0,i-1).trimEnd()}\u2026`}function $(t={}){let i=String(t.network||"").toLowerCase(),e=String(t.url||"").toLowerCase();return i.includes("linkedin")||e.includes("linkedin.com")?'<span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="img" focusable="false"><rect x="0" y="0" width="24" height="24" rx="3" fill="#111111"></rect><text x="12" y="17" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="700" fill="#ffffff">in</text></svg></span>':i.includes("github")||e.includes("github.com")?'<span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="img" focusable="false"><circle cx="12" cy="12" r="12" fill="#111111"></circle><path d="M12 5.2c-3.85 0-6.97 3.12-6.97 6.97 0 3.08 2 5.7 4.77 6.62.35.06.48-.15.48-.34 0-.17-.01-.73-.01-1.33-1.94.42-2.35-.82-2.35-.82-.32-.8-.78-1.02-.78-1.02-.64-.44.05-.43.05-.43.71.05 1.08.73 1.08.73.63 1.08 1.65.77 2.06.59.06-.46.25-.77.45-.95-1.55-.18-3.18-.78-3.18-3.46 0-.76.27-1.38.72-1.87-.07-.18-.31-.91.07-1.9 0 0 .58-.19 1.92.71a6.7 6.7 0 0 1 3.49 0c1.33-.9 1.92-.71 1.92-.71.38.99.14 1.72.07 1.9.45.49.72 1.11.72 1.87 0 2.68-1.63 3.28-3.19 3.45.26.22.48.65.48 1.3 0 .95-.01 1.71-.01 1.95 0 .19.13.41.49.34A6.98 6.98 0 0 0 18.97 12.17c0-3.85-3.12-6.97-6.97-6.97Z" fill="#ffffff"></path></svg></span>':'<span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="img" focusable="false"><circle cx="12" cy="12" r="10" fill="none" stroke="#0f172a" stroke-width="1.8"></circle><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20" fill="none" stroke="#0f172a" stroke-width="1.4"></path></svg></span>'}function c(t){return t==="phone"?'<span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="img" focusable="false"><path d="M6.6 2.8h3.2c.55 0 1 .45 1 1v2.6c0 .5-.37.92-.86.99l-1.5.2a13.5 13.5 0 0 0 8 8l.2-1.5c.07-.49.49-.86.99-.86h2.6c.55 0 1 .45 1 1v3.2c0 .55-.45 1-1 1A17.8 17.8 0 0 1 5.6 3.8c0-.55.45-1 1-1Z" fill="#0f172a"></path></svg></span>':t==="mail"?'<span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="img" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2" ry="2" fill="none" stroke="#0f172a" stroke-width="1.8"></rect><path d="M4 7l8 6 8-6" fill="none" stroke="#0f172a" stroke-width="1.8"></path></svg></span>':t==="location"?'<span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="img" focusable="false"><path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z" fill="none" stroke="#0f172a" stroke-width="1.8"></path><circle cx="12" cy="10" r="2.4" fill="#0f172a"></circle></svg></span>':'<span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="img" focusable="false"><circle cx="12" cy="12" r="10" fill="none" stroke="#0f172a" stroke-width="1.8"></circle><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20" fill="none" stroke="#0f172a" stroke-width="1.4"></path></svg></span>'}function z(t={}){let i=[];t.phone&&i.push(`<li>${c("phone")}${n(t.phone)}</li>`),t.email&&i.push(`<li>${c("mail")}<a href="mailto:${n(t.email)}">${n(t.email)}</a></li>`);let e=[t.location?.address,t.location?.city,t.location?.region,t.location?.postalCode].filter(Boolean).join(", ");return e&&i.push(`<li>${c("location")}${n(e)}</li>`),t.url&&i.push(`<li>${c("globe")}<a href="${n(t.url)}">${n(t.url)}</a></li>`),(t.profiles||[]).forEach(o=>{o?.url&&i.push(`<li>${$(o)}<a href="${n(o.url)}">${n(o.url)}</a></li>`)}),l("Contact",i.length?`<ul class="contact-list">${i.join("")}</ul>`:"")}function S(t={}){return t.summary?l("Summary",`<p class="summary">${n(u(t.summary,650))}</p>`):t.label?l("Summary",`<p class="summary">${n(u(t.label,650))}</p>`):""}function M(t=[]){if(!t.length)return"";let i=t.map(e=>{let o=e.position||"",a=e.name?`<p class="item-org">${n(e.name)}</p>`:"",r=[];if(e.summary&&r.push(`<p class="item-summary">${n(e.summary)}</p>`),Array.isArray(e.highlights)&&e.highlights.length){let s=e.highlights.map(m=>`<li>${n(String(m).replace(/^\*\s*/,""))}</li>`).join("");r.push(`<ul class="bullets">${s}</ul>`)}return`
      <div class="work-item-keep">
        <article class="item">
          <div class="item-head">
            <div>
              <h3 class="item-role">${n(o)}</h3>
              ${a}
            </div>
            <div class="item-dates">${n(w(e.startDate,e.endDate))}</div>
          </div>
          ${r.join("")}
        </article>
      </div>
    `}).join("");return l("Professional Experience",i,"work-section")}function j(t=[]){let i=t.map(e=>{let o=[e.studyType,e.area].filter(Boolean).join(" in "),a=e.institution?`${e.institution}`:"",r=Array.isArray(e.courses)&&e.courses.length?`<ul class="compact-sub">${e.courses.map(s=>`<li>${n(s)}</li>`).join("")}</ul>`:"";return`<li><strong>${n(o)}</strong>${a?`, <em>${n(a)}</em>`:""}${r}</li>`}).join("");return l("Education",`<ul class="compact-list edu-list">${i}</ul>`)}function A(t=[]){if(!t.length)return"";let i=t.slice(0,12).map(e=>{let o=e.name?`<strong>${n(e.name)}</strong>`:"",a=e.issuer?` \u2014 <em>${n(e.issuer)}</em>`:"";return`<li>${o}${a}</li>`}).join("");return l("Certifications",`<ul class="compact-list cert-list">${i}</ul>`)}function B(t=[]){if(!t.length)return"";let i=t.map(e=>{let o=Array.isArray(e.keywords)?e.keywords.slice(0,12).join(", "):"";return`
      <div class="skill-group">
        <span class="skill-name">${n(e.name)}:</span>
        <span>${n(o)}</span>
      </div>
    `}).join("");return l("Skills",`<div>${i}</div>`,"skills-section")}function p(t={}){let i=t.basics||{},e=i.name||"Resume",o=i.label?`<p class="label">${n(i.label)}</p>`:"",a=[i.name,i.label].filter(Boolean).join(": "),r=i.image?`<img class="photo" src="${n(i.image)}" alt="${n(e)} profile photo" />`:'<div class="photo-empty">Profile Photo</div>',s=[S(i),M(t.work||[])].join(""),m=[z(i),j(t.education||[]),A(t.certificates||[]),B(t.skills||[])].join("");return`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${n(e)} - Resume</title>
  <style>${y}</style>
</head>
<body>
  <main class="resume" role="main">
    <header class="header" role="banner">
      <div class="header-main">
        <h1 class="name">${n(e)}</h1>
        ${o}
      </div>
      <div class="photo-wrap" aria-label="Profile image">
        ${r}
      </div>
    </header>
    <div class="layout">
      <div>${s}</div>
      <aside class="right-panel">${m}</aside>
    </div>
  </main>
  ${a?`<footer class="print-footer" role="contentinfo">${n(a)}</footer>`:""}
</body>
</html>`}var d={mediaType:"print",margin:{top:"0.32in",right:"0.32in",bottom:"0.22in",left:"0.32in"}},g={render:p,pdfRenderOptions:d};var k=g??f,R=k.render??p,E=k.pdfRenderOptions??d;export{E as pdfRenderOptions,R as render};
