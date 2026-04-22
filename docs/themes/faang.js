var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var $=Object.create;var u=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var k=(e,t)=>()=>(e&&(t=e(e=0)),t);var b=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var D=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of v(t))!w.call(e,s)&&s!==n&&u(e,s,{get:()=>t[s],enumerable:!(i=g(t,s))||i.enumerable});return e};var L=(e,t,n)=>(n=e!=null?$(y(e)):{},D(t||!e||!e.__esModule?u(n,"default",{value:e,enumerable:!0}):n,e));var a=k(()=>{});var h=b(p=>{a();var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function d(e,t=""){if(!e)return t;let n=new Date(e),i=S[n.getMonth()],s=n.getFullYear();return`${i} ${s}`}function m(e=[],t){return e.find(n=>n.network.toLowerCase()===t.toLowerCase())}function H(e=[]){let t=[];for(let n of e)t.push(...n.keywords);return t}function f(e){return e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-800 font-medium">$1</a>')}function o(e,t){return t?`<a href="${t}" class="cursor-pointer text-blue-800">${e}</a>`:`<span>${e}</span>`}function c(e,t){return!t||t.trim()===""?"":`
    <h3 class="w-full border-gray-600 px-1 font-medium mb-2" style="border-bottom-width: 1px; box-shadow: 0 2px 2px -2px gray;">${e.toUpperCase()}</h3>
    <div class="px-2">
      ${t}
    </div>
  `}function N(e){if(!e)return"";let t=m(e.profiles,"github"),n=m(e.profiles,"linkedin");return`
    <div class="flex flex-col items-center">
      <h1 class="text-4xl mb-[-4px]">${e.name||""}</h1>
      <h2 class="text-lg">${e.label||""}</h2>
    </div>

    <div class="flex flex-col sm:flex-row items-center justify-between mx-4 text-xs">
      <div class="flex justify-between sm:justify-around w-full">
        ${e.email?o(e.email,`mailto:${e.email}`):""}
        ${e.phone?o(`phone: ${e.phone}`,`tel:${e.phone}`):""}
      </div>
      <div class="flex justify-between sm:justify-around w-full">
        ${t?o(`github: ${t.username}`,`https://github.com/${t.username}`):""}
        ${n?o(`linkedin: ${n.username}`,`https://www.linkedin.com/in/${n.username}/`):""}
      </div>
    </div>
  `}function O(e){let t=`${d(e.startDate)} - ${d(e.endDate,"present")}`,n="";e.highlights&&e.highlights.length>0&&(n=`
      <ul class="pl-2">
        ${e.highlights.map(s=>`
          <li class="list-['-'] list-outside mr-2">
            <span class="pl-1">${f(s)}</span>
          </li>
        `).join("")}
      </ul>
    `);let i="";return e.stack&&e.stack.length>0&&(i=`<b>Tech Stack: </b>${e.stack.map(r=>typeof r=="string"?r:r.text).join(", ")}`),`
    <div>
      <div class="flex items-center">
        <div class="w-full">
          <div class="flex justify-between">
            ${o(`<b>${e.name}</b>`,e.url)}
            <span class="text-xs">${e.location||""}</span>
          </div>
          <div class="flex justify-between">
            <div class="underline">${e.position}</div>
            <span class="text-xs">${t}</span>
          </div>
        </div>
      </div>

      <div class="ml-2 text-xs">
        ${e.summary?`<div>${f(e.summary)}</div>`:""}
        ${n}
        ${i}
      </div>
    </div>
  `}function T(e){if(!e||e.length===0)return"";let t=e.map(O).join("");return c("Work Experience",t)}function E(e){if(!e||e.length===0)return"";let t=e.map(n=>{let i=`${d(n.startDate)} - ${d(n.endDate,"present")}`;return`
      <div>
        <div class="flex justify-between">
          <b>${n.studyType} of ${n.area}</b>
          <span class="text-xs">${i}</span>
        </div>
        <span>${n.institution}</span>
      </div>
    `}).join("");return c("Education",t)}function F(e){if(!e||e.length===0)return"";let n=`<p class="text-xs">${H(e).join(", ")}</p>`;return c("Skills",n)}p.render=({basics:e,work:t,education:n,skills:i})=>{let s="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;500;600;700&display=swap",r="Frank Ruhl Libre";return`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e?.name||"Resume"}</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="${s}" rel="stylesheet">
    <style>
      body {
        font-family: '${r}', serif;
      }
      @media print {
        body {
          background: white;
        }
        .resume-container {
          box-shadow: none;
          margin: 0;
          max-width: none;
        }
      }
      @media (max-width: 8.5in) {
        .resume-page {
          height: max(11in, 100%);
        }
      }
    </style>
  </head>
  <body class="bg-gray-900">
    <div class="flex justify-center">
      <div class="resume-container resume-page bg-white max-w-[8.5in]" style="height: 11in;">
        <main class="text-sm px-10 py-12 text-black" style="font-family: '${r}', serif;">
          ${N(e)}
          ${T(t)}
          ${E(n)}
          ${F(i)}
        </main>
      </div>
    </div>
  </body>
</html>`}});a();var l=L(h(),1),x=l.default??l,P=x.render??l.render,U=x.pdfRenderOptions??l.pdfRenderOptions;export{U as pdfRenderOptions,P as render};
