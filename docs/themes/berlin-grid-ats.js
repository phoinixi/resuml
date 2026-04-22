var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var v=Object.defineProperty;var $=(i,t)=>{for(var e in t)v(i,e,{get:t[e],enumerable:!0})};var c={};$(c,{render:()=>m});var k=`*, *::before, *::after { 
            box-sizing: border-box; 
        }

        body { 
            margin: 0; 
        }

        body a {
            text-decoration: none;
            position: relative;
            padding-bottom: 2px;
        }

        body a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background: #1a1a1a;
            transition: width 0.2s ease;
        }

        body a:hover::after { 
            width: 100%;
        }

        .layout {
            max-width: 880px;
            margin: 0 auto;
            padding: 80px 48px;
            background: #ffffff;
            font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            color: #1a1a1a;
            line-height: 24px;
            font-size: 14px;
        }

        .header {
            padding-bottom: 32px;
            border-bottom: 3px solid #1a1a1a;
            margin-bottom: 32px;
        }        

        .name {
            text-align: center;
            font-size: 44px;
            font-weight: 700;
            margin: 0 0 16px 0;
            letter-spacing: -0.5px;
            line-height: 56px;
            text-transform: uppercase;
        }

        .tagline {
            display: flex;
            justify-content: center;
            font-size: 16px;
            color: #4a4a4a;
            margin: 8px 0 24px 0;
            font-weight: 500;
            letter-spacing: 0.3px;
        }

        .summary {
            font-size: 15px;
            line-height: 24px;
            color: #2a2a2a;
            margin: 0 0 64px 0;
            padding: 24px;
            border-left: 4px solid #e5e5e5;
            background: #fafafa;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 24px;
            margin-top: 16px;
        }

        .contact-info a {
            color: #1a1a1a;
            font-size: 16px;
        }

        .section { 
            margin-bottom: 64px;
        }

        .section-title {
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #1a1a1a;
            margin: 0 0 32px 0;
            padding-bottom: 8px;
            border-bottom: 2px solid #1a1a1a;
        }

        .grid-item {
            display: grid;
            grid-template-columns: 200px 1fr;
            gap: 32px;
            margin-top: 40px;
            padding-top: 40px;
            border-top: 1px solid #e5e5e5;
        }

        .grid-item:first-of-type { 
            margin-top: initial;
            padding-top: initial;
            border-top: none; 
        }

        .meta-column {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-right: 16px;
            border-right: 2px solid #e5e5e5;
        }

        .content-column {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .meta-date {
            font-size: 13px;
            font-weight: 600;
            color: #4a4a4a;
            font-variant-numeric: tabular-nums;
        }

        .meta-location {
            font-size: 12px;
            color: #6a6a6a;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .item-title {
            font-size: 18px;
            font-weight: 700;
            margin: 0;
            color: #1a1a1a;
            letter-spacing: -0.2px;
        }

        .item-title a {
            color: inherit;
            text-decoration: none;
        }

        .item-title a:hover { 
            text-decoration: underline;
        }

        .item-subtitle {
            margin-top: 4px;
        }

        .item-subtitle * {
            font-size: 15px;
            font-weight: 500;
            color: #4a4a4a;
        }

        .item-description {
            font-size: 14px;
            line-height: 24px;
            color: #2a2a2a;
            margin: 8px 0 0 0;
        }

        .highlights-list {
            margin: 16px 0 0 0;
            padding-left: 24px;
            list-style: none;
        }

        .highlights-list li {
            position: relative;
            margin-bottom: 8px;
            font-size: 14px;
            line-height: 24px;
        }

        .highlights-list li::before {
            content: '\u25A0';
            position: absolute;
            left: -24px;
            color: #1a1a1a;
            font-size: 10px;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 32px;
        }

        .skill-category {
            padding: 12px;
            border: 2px solid #e5e5e5;
            background: #fafafa;
        }

        .skill-category h4 {
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0 0 16px 0;
            color: #1a1a1a;
        }

        .badge-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .badge {
            flex: 1 1 auto;
            display: inline-block;
            font-size: 12px;
            padding: 4px 12px;
            background: #ffffff;
            border: 1px solid #d0d0d0;
            color: #2a2a2a;
            font-weight: 500;
            letter-spacing: 0.3px;
            text-align: center;
        }

        .simple-list {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .simple-item {
            padding: 16px;
            border-left: 3px solid #e5e5e5;
            background: #fafafa;
        }

        .simple-item h4 {
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 8px 0;
        }

        .simple-item p {
            font-size: 14px;
            margin: 0;
            color: #4a4a4a;
        }

        .simple-item a {
            color: inherit;
            text-decoration: underline;
        }
        
        @media (max-width: 768px) {
            .grid-item {
                    grid-template-columns: 1fr;
                    gap: 16px;
            }

            .meta-column {
                    border-right: none;
                    border-bottom: 2px solid #e5e5e5;
                    padding-right: 0;
                    padding-bottom: 16px;
            }
        }

        @media print {
            .layout { padding: 48px 32px; }
            .header { page-break-inside: avoid; }
            .grid-item { page-break-inside: avoid; }
            .no-break { page-break-inside: avoid;}
            .section .section-title { page-break-after: avoid; }
        }`;function d(i){if(!i||typeof i!="string")return null;let t=i.trim();return/^(javascript|data|vbscript|file|about):/i.test(t)?null:/^(https?|mailto|tel|sms|ftp):/i.test(t)||t.startsWith("/")||t.startsWith(".")?t:/^www\./i.test(t)?`https://${t}`:/^[a-z0-9][a-z0-9.-]+\.[a-z]{2,}$/i.test(t)?`https://${t}`:t}function u({startDate:i,endDate:t}){if(!i)return"";let e=new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric"}),n=o=>{if(!o)return"Present";let a=typeof o=="string"?new Date(o):o;return isNaN(a.getTime())?String(o):e.format(a)},r=n(i);return t===void 0?r:`${r} - ${n(t)}`}function l(i,t){return t.replace(/\t/g,"    ").split(`
`).map(e=>"    ".repeat(i)+e).join(`
`)}function j({email:i,phone:t,url:e,location:n,profiles:r=[]}){let o=[];if(n){let a=[n.city,n.region,n.countryCode].filter(Boolean).join(", ");a&&o.push(a)}if(i&&o.push(`<a href="mailto:${i}">${i}</a>`),t&&o.push(`<a href="tel:${t}">${t}</a>`),e){let a=d(e);if(a){let s=e.replace(/^https?:\/\//,"").replace(/\/$/,"");o.push(`<a href="${a}" target="_blank" rel="noopener noreferrer">${s}</a>`)}}return r.forEach(a=>{if(a.url){let s=d(a.url);s&&o.push(`<a href="${s}" target="_blank" rel="noopener noreferrer">${a.network||a.username}</a>`)}}),o.length===0?"":`<div class="contact-info">${o.map(a=>`<span>${a}</span>`).join("")}</div>`}function D(i){if(!i||i.length==0)return"";let t=['<ul class="highlights-list">'];for(let e of i)t.push(`	<li>${e}</li>`);return t.push("</ul>"),t.join(`
`)}function f({title:i,metaDate:t,metaLocation:e,tags:n,subtitle:r,description:o,highlights:a}){let s=['<div class="grid-item">'];if(s.push('	<div class="meta-column">'),t&&s.push(`		<div class="meta-date">${t}</div>`),e&&s.push(`		<div class="meta-location">${e}</div>`),s.push("	</div>"),s.push('	<div class="content-column">'),s.push(`		<h3 class="item-title">${i}</h3>`),r&&s.push(`		<div class="item-subtitle">${r}</div>`),o&&s.push(`		<p class="item-description"><em>${o}</em></p>`),a&&a.length>0){let h=D(a);s.push(l(2,h))}if(n&&n.length>0){s.push('		<div class="badge-list">');for(let h of n)s.push(`			<span class="badge">${h}</span>`);s.push("		</div>")}return s.push("	</div>"),s.push("</div>"),s.join(`
`)}function z(i){let t=[];return t.push('<header class="header">'),i.name&&t.push(`	<h1 class="name">${i.name}</h1>`),i.label&&t.push(`	<div class="tagline">${i.label}</div>`),t.push("	"+j({email:i.email,phone:i.phone,url:i.url,location:i.location,profiles:i.profiles||[]})),t.push("</header>"),t.join(`
`)}function S(i){let t=['<section class="section no-break">'];return t.push(`	<p class="summary">${i}</p>`),t.push("</section>"),t.join(`
`)}function B(i){let t=['<section class="section no-break">'];t.push('	<h2 class="section-title">Skills</h2>'),t.push('	<div class="skills-grid">');for(let e of i){if(t.push('		<div class="skill-category">'),t.push(`			<h4>${e.name}</h4>`),e.keywords&&e.keywords.length>0){t.push('			<div class="badge-list">');for(let n of e.keywords)t.push(`				<span class="badge">${n}</span>`);t.push("			</div>")}t.push("		</div>")}return t.push("	</div>"),t.push("</section>"),t.join(`
`)}function P(i){let t=['<section id="work" class="section">'];t.push('	<h2 class="section-title">Experience</h2>');for(let e of i){let n=e.url?d(e.url):null,r=n?`<a href="${n}" target="_blank" rel="noopener noreferrer">${e.name}</a>`:e.name,o=f({metaDate:u({startDate:e.startDate,endDate:e.endDate}),metaLocation:e.location,title:e.position||r,subtitle:e.position&&r?r:null,description:e.summary,highlights:e.highlights});t.push(l(1,o))}return t.push("</section>"),t.join(`
`)}function R(i){let t=['<section id="projects" class="section">'];t.push('	<h2 class="section-title">Projects</h2>');for(let e of i){let n=e.url?d(e.url):null,r=n?`<a href="${n}" target="_blank" rel="noopener noreferrer">${e.name}</a>`:e.name;t.push("	"+f({metaDate:u({startDate:e.startDate,endDate:e.endDate}),metaLocation:e.type,title:r,tags:e.keywords,description:e.description,highlights:e.highlights}))}return t.push("</section>"),t.join(`
`)}function T(i){let t=['<section id="education" class="section">'];t.push('	<h2 class="section-title">Education</h2>');for(let e of i){let n=f({metaDate:u({startDate:e.startDate,endDate:e.endDate}),metaLocation:e.area,title:e.institution,subtitle:e.studyType&&e.area?`${e.studyType} in ${e.area}`:null,description:e.score?`GPA: ${e.score}`:null,highlights:e.courses});t.push(l(1,n))}return t.push("</section>"),t.join(`
`)}function I(i){let t=['<section id="languages" class="section">'];t.push('	<h2 class="section-title">Languages</h2>'),t.push('	<div class="badge-list">');for(let e of i){let n=e.language;e.fluency&&(n+=` \u2014 ${e.fluency}`);let r=`<span class="badge">${n}</span>`;t.push(l(2,r))}return t.push("	</div>"),t.push("</section>"),t.join(`
`)}function N(i){let t=['<section class="section">'];t.push('	<h2 class="section-title">Awards</h2>'),t.push('	<div class="simple-list">');for(let e of i)t.push('		<div class="simple-item">'),t.push(`			<h4>${e.title}</h4>`),t.push(`			<p>${e.awarder}${e.date?` \u2022 ${e.date}`:""}</p>`),e.summary&&t.push(`			<p>${e.summary}</p>`),t.push("		</div>");return t.push("	</div>"),t.push("</section>"),t.join(`
`)}function _(i){let t=['<section class="section">'];t.push('	<h2 class="section-title">Publications</h2>'),t.push('	<div class="simple-list">');for(let e of i){let n=e.url?d(e.url):null,r=n?`<a href="${n}" target="_blank" rel="noopener noreferrer">${e.name}</a>`:e.name;t.push('		<div class="simple-item">'),t.push(`			<h4>${r}</h4>`),t.push(`			<p>${e.publisher}${e.releaseDate?` \u2022 ${e.releaseDate}`:""}</p>`),e.summary&&t.push(`			<p>${e.summary}</p>`),t.push("		</div>")}return t.push("	</div>"),t.push("</section>"),t.join(`
`)}function E(i){let t=['<section class="section">'];t.push('	<h2 class="section-title">Volunteer</h2>');for(let e of i)t.push(l(1,f({metaDate:u({startDate:e.startDate,endDate:e.endDate}),title:e.position,subtitle:e.organization,description:e.summary,highlights:e.highlights})));return t.push("</section>"),t.join(`
`)}function H(i){let t=['<section class="section">'];t.push('	<h2 class="section-title">Interests</h2>'),t.push('	<div class="simple-list">');for(let e of i){if(t.push('		<div class="simple-item">'),t.push(`			<h4>${e.name}</h4>`),e.keywords&&e.keywords.length>0){let n=e.keywords.join(", ");t.push(`			<p>${n}</p>`)}t.push("		</div>")}return t.push("	</div>"),t.push("</section>"),t.join(`
`)}function C(i){let t=['<section class="section">'];t.push('	<h2 class="section-title">References</h2>'),t.push('	<div class="simple-list">');for(let e of i)t.push('		<div class="simple-item">'),t.push(`			<h4>${e.name}</h4>`),e.reference&&t.push(`			<p>${e.reference}</p>`),t.push("		</div>");return t.push("	</div>"),t.push("</section>"),t.join(`
`)}function L(i){let{basics:t={},work:e=[],education:n=[],skills:r=[],projects:o=[],volunteer:a=[],awards:s=[],publications:h=[],languages:g=[],interests:x=[],references:b=[]}=i,p=['<div class="layout">'];return p.push(l(1,z(t))),t.summary&&p.push(l(1,S(t.summary))),e.length>0&&p.push(l(1,P(e))),o.length>0&&p.push(l(1,R(o))),r.length>0&&p.push(l(1,B(r))),b.length>0&&p.push(l(1,C(b))),h.length>0&&p.push(l(1,_(h))),s.length>0&&p.push(l(1,N(s))),a.length>0&&p.push(l(1,E(a))),n.length>0&&p.push(l(1,T(n))),g.length>0&&p.push(l(1,I(g))),x.length>0&&p.push(l(1,H(x))),p.push("</div>"),p.join(`
`)}function m(i){let t=L(i),e=i.basics&&i.basics.name||"Resume",n=k.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\s*([{}|:;,])\s*/g,"$1").replace(/\s+/g," ").trim();return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${e}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>${n}</style>
</head>
    <body>
${l(2,t)}
    </body>
</html>`}var y=void 0??c,M=y.render??m,W=y.pdfRenderOptions??void 0;export{W as pdfRenderOptions,M as render};
