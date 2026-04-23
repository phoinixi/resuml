var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var k=Object.create;var c=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var H=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var S=(e,a)=>()=>(e&&(a=e(e=0)),a);var P=(e,a)=>()=>(a||e((a={exports:{}}).exports,a),a.exports);var j=(e,a,i,s)=>{if(a&&typeof a=="object"||typeof a=="function")for(let o of z(a))!D.call(e,o)&&o!==i&&c(e,o,{get:()=>a[o],enumerable:!(s=x(a,o))||s.enumerable});return e};var E=(e,a,i)=>(i=e!=null?k(H(e)):{},j(a||!e||!e.__esModule?c(i,"default",{value:e,enumerable:!0}):i,e));var d=S(()=>{});var p=P((U,m)=>{d();function R(e){let a=`
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        --text-primary: #2c3e50;
        --text-secondary: #7f8c8d;
        --accent: #3498db;
        --border: #e0e0e0;
        --background: #ffffff;
      }

      body {
        font-family: 'Georgia', 'Times New Roman', serif;
        color: var(--text-primary);
        background: var(--background);
        line-height: 1.6;
        font-size: 11pt;
        max-width: 8.5in;
        margin: 0 auto;
        padding: 0.75in;
      }

      /* Typography */
      h1, h2, h3, h4, h5, h6 {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 0.5em;
      }

      h1 {
        font-size: 28pt;
        font-weight: 700;
        margin-bottom: 0.2em;
      }

      h2 {
        font-size: 10pt;
        text-transform: uppercase;
        letter-spacing: 1px;
        border-bottom: 2px solid var(--text-primary);
        padding-bottom: 0.3em;
        margin-top: 1.2em;
        margin-bottom: 0.8em;
        font-weight: 700;
      }

      h3 {
        font-size: 12pt;
        font-weight: 600;
        margin-bottom: 0.3em;
      }

      a {
        color: var(--accent);
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      /* Header */
      .header {
        text-align: center;
        margin-bottom: 1.5em;
        padding-bottom: 1em;
        border-bottom: 1px solid var(--border);
      }

      .header h1 {
        margin-bottom: 0.1em;
      }

      .header .label {
        font-size: 11pt;
        color: var(--text-secondary);
        margin-bottom: 0.8em;
        font-style: italic;
      }

      .contact-info {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1em;
        font-size: 9pt;
        margin-top: 0.5em;
      }

      .contact-info span {
        white-space: nowrap;
      }

      .contact-info span:not(:last-child)::after {
        content: "\u2022";
        margin-left: 1em;
        color: var(--text-secondary);
      }

      /* Summary */
      .summary {
        text-align: justify;
        margin-bottom: 1em;
        font-size: 10.5pt;
        line-height: 1.5;
      }

      /* Work Experience */
      .work-item {
        margin-bottom: 1.2em;
        page-break-inside: avoid;
      }

      .work-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 0.3em;
      }

      .work-header h3 {
        margin: 0;
      }

      .work-meta {
        display: flex;
        justify-content: space-between;
        font-size: 9.5pt;
        color: var(--text-secondary);
        margin-bottom: 0.4em;
      }

      .work-summary {
        font-style: italic;
        margin-bottom: 0.5em;
        font-size: 10pt;
        color: var(--text-secondary);
      }

      .highlights {
        list-style-position: outside;
        padding-left: 1.2em;
        margin-top: 0.4em;
      }

      .highlights li {
        margin-bottom: 0.3em;
        font-size: 10pt;
      }

      /* Skills */
      .skills {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.8em;
        margin-bottom: 1em;
      }

      .skill-category {
        page-break-inside: avoid;
      }

      .skill-category h4 {
        font-size: 10pt;
        font-weight: 600;
        margin-bottom: 0.3em;
      }

      .skill-keywords {
        font-size: 9.5pt;
        line-height: 1.4;
      }

      /* Education */
      .education-item {
        margin-bottom: 0.8em;
        page-break-inside: avoid;
      }

      .education-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .education-meta {
        font-size: 9.5pt;
        color: var(--text-secondary);
      }

      /* Awards & Publications */
      .award-item, .publication-item {
        margin-bottom: 0.8em;
        page-break-inside: avoid;
      }

      .award-title, .publication-name {
        font-weight: 600;
        font-size: 10pt;
      }

      .award-date, .publication-date {
        color: var(--text-secondary);
        font-size: 9pt;
      }

      /* Profiles */
      .profiles {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1em;
        margin-top: 0.5em;
      }

      /* Print Styles */
      @media print {
        body {
          padding: 0.5in;
          font-size: 10pt;
          max-width: 100%;
        }

        h1 {
          font-size: 24pt;
        }

        h2 {
          font-size: 9pt;
          page-break-after: avoid;
        }

        h3 {
          font-size: 11pt;
          page-break-after: avoid;
        }

        .work-item,
        .education-item,
        .skill-category,
        .award-item,
        .publication-item {
          page-break-inside: avoid;
        }

        a {
          color: var(--text-primary);
          text-decoration: none;
        }

        a[href^="http"]:after {
          content: "";
        }

        .highlights li {
          font-size: 9.5pt;
        }
      }

      /* Mobile Responsive */
      @media screen and (max-width: 768px) {
        body {
          padding: 1em;
          font-size: 12pt;
        }

        h1 {
          font-size: 24pt;
        }

        .contact-info {
          flex-direction: column;
          gap: 0.3em;
        }

        .contact-info span:not(:last-child)::after {
          display: none;
        }

        .work-header,
        .work-meta,
        .education-header {
          flex-direction: column;
        }

        .skills {
          grid-template-columns: 1fr;
        }
      }
    </style>
  `,i=e.basics||{},s=i.location||{},o=n=>n?new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short"}):"Present",f=()=>{let n=[];i.email&&n.push(`<a href="mailto:${i.email}">${i.email}</a>`),i.phone&&n.push(i.phone),i.website&&n.push(`<a href="${i.website}">${i.website.replace(/^https?:\/\//,"")}</a>`),s.city&&s.region&&n.push(`${s.city}, ${s.region}`);let t=(i.profiles||[]).map(l=>`<a href="${l.url}">${l.network}</a>`).join("</span><span>");return`
      <header class="header">
        <h1>${i.name||""}</h1>
        ${i.label?`<div class="label">${i.label}</div>`:""}
        <div class="contact-info">
          ${n.map(l=>`<span>${l}</span>`).join("")}
        </div>
        ${t?`<div class="profiles"><span>${t}</span></div>`:""}
      </header>
    `},g=()=>i.summary?`<div class="summary">${i.summary}</div>`:"",u=()=>!e.work||e.work.length===0?"":`
      <section>
        <h2>Experience</h2>
        ${e.work.map(t=>{let l=t.highlights&&t.highlights.length>0?`<ul class="highlights">${t.highlights.map($=>`<li>${$}</li>`).join("")}</ul>`:"";return`
        <div class="work-item">
          <div class="work-header">
            <h3>${t.position||""}</h3>
          </div>
          <div class="work-meta">
            <span><strong>${t.company||t.name||""}</strong></span>
            <span>${o(t.startDate)} \u2013 ${o(t.endDate)}</span>
          </div>
          ${t.summary?`<div class="work-summary">${t.summary}</div>`:""}
          ${l}
        </div>
      `}).join("")}
      </section>
    `,v=()=>!e.skills||e.skills.length===0?"":`
      <section>
        <h2>Skills</h2>
        <div class="skills">
          ${e.skills.map(t=>`
      <div class="skill-category">
        <h4>${t.name||""}</h4>
        <div class="skill-keywords">${(t.keywords||[]).join(" \u2022 ")}</div>
      </div>
    `).join("")}
        </div>
      </section>
    `,y=()=>!e.education||e.education.length===0?"":`
      <section>
        <h2>Education</h2>
        ${e.education.map(t=>`
      <div class="education-item">
        <div class="education-header">
          <h3>${t.institution||""}</h3>
          <span class="education-meta">${o(t.startDate)} \u2013 ${o(t.endDate)}</span>
        </div>
        <div class="education-meta">
          ${t.studyType||""} ${t.area||""}${t.gpa?` \u2022 ${t.gpa}`:""}
        </div>
      </div>
    `).join("")}
      </section>
    `,b=()=>!e.awards||e.awards.length===0?"":`
      <section>
        <h2>Awards</h2>
        ${e.awards.map(t=>`
      <div class="award-item">
        <div class="award-title">${t.title||""}</div>
        <div class="award-date">${t.awarder||""} \u2022 ${o(t.date)}</div>
        ${t.summary?`<div>${t.summary}</div>`:""}
      </div>
    `).join("")}
      </section>
    `,w=()=>!e.publications||e.publications.length===0?"":`
      <section>
        <h2>Publications</h2>
        ${e.publications.map(t=>`
      <div class="publication-item">
        <div class="publication-name">${t.name||""}</div>
        <div class="publication-date">${t.publisher||""} \u2022 ${o(t.releaseDate)}</div>
        ${t.summary?`<div>${t.summary}</div>`:""}
      </div>
    `).join("")}
      </section>
    `;return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${i.name||"Resume"}</title>
      ${a}
    </head>
    <body>
      ${f()}
      ${g()}
      ${u()}
      ${v()}
      ${y()}
      ${b()}
      ${w()}
    </body>
    </html>
  `}m.exports={render:R}});d();var r=E(p(),1),h=r.default??r,I=h.render??r.render,M=h.pdfRenderOptions??r.pdfRenderOptions;export{M as pdfRenderOptions,I as render};
