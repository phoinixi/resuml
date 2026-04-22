var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Ue=Object.create;var E=Object.defineProperty;var Be=Object.getOwnPropertyDescriptor;var We=Object.getOwnPropertyNames;var He=Object.getPrototypeOf,qe=Object.prototype.hasOwnProperty;var S=(e,r)=>()=>(e&&(r=e(e=0)),r);var L=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),C=(e,r)=>{for(var n in r)E(e,n,{get:r[n],enumerable:!0})},$=(e,r,n,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of We(r))!qe.call(e,i)&&i!==n&&E(e,i,{get:()=>r[i],enumerable:!(t=Be(r,i))||t.enumerable});return e};var Je=(e,r,n)=>(n=e!=null?Ue(He(e)):{},$(r||!e||!e.__esModule?E(n,"default",{value:e,enumerable:!0}):n,e)),x=e=>$(E({},"__esModule",{value:!0}),e);var l=S(()=>{});var A={};C(A,{createReadStream:()=>te,createWriteStream:()=>ie,default:()=>Xe,existsSync:()=>Z,lstatSync:()=>ee,mkdirSync:()=>Q,readFileSync:()=>V,readdirSync:()=>Y,rmdirSync:()=>re,statSync:()=>M,unlinkSync:()=>ne,writeFileSync:()=>K});function R(e){return String(e).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function G(e){var r=R(e);if(D[r]!==void 0)return D[r];for(var n=Object.keys(D),t=0;t<n.length;t++)if(r.endsWith("/"+n[t])||r===n[t])return D[n[t]]}function F(e){var r=R(e);if((r===""||r===".")&&v["."]!==void 0)return v["."];if(v[r]!==void 0)return v[r];for(var n=Object.keys(v),t=0;t<n.length;t++)if(r.endsWith("/"+n[t])||r===n[t])return v[n[t]]}var D,v,V,Y,Z,K,Q,M,ee,ne,re,te,ie,Xe,N=S(()=>{"use strict";l();D={"package.json":`{
  "name": "jsonresume-theme-latexone",
  "version": "0.0.4",
  "description": "a theme for json resume",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsup"
  },
  "keywords": [
    "latex",
    "jsonresume",
    "latex-theme"
  ],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@types/ejs": "^3.1.5",
    "tsup": "^8.5.0",
    "typescript": "^5.8.3",
    "@types/node": "^24.0.14"
  },
  "dependencies": {
    "ejs": "^3.1.10"
  }
}
`,"resume.template.ejs":`<!DOCTYPE html>\r
<html lang="en">\r
  <head>\r
    <meta charset="UTF-8" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
    <title><%= resume.basics.name %> - Resume</title>\r
    <link\r
      rel="stylesheet"\r
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"\r
    />\r
    <style>\r
      * {\r
        margin: 0;\r
        padding: 0;\r
        box-sizing: border-box;\r
      }\r
\r
      body {\r
        font-family: "Computer Modern", "Times New Roman", serif;\r
        font-size: 11pt;\r
        line-height: 1.3;\r
        color: #000;\r
        background: #fff;\r
        padding: 0.8cm 1cm 0.5cm 1cm;\r
        max-width: 21cm;\r
        margin: 0 auto;\r
      }\r
\r
      /* Header Styles */\r
      .header {\r
        text-align: center;\r
        margin-bottom: 0.3cm;\r
      }\r
\r
      .header h1 {\r
        font-size: 24pt;\r
        font-weight: bold;\r
        margin-bottom: 0.3cm;\r
        font-family: "Computer Modern", serif;\r
      }\r
\r
      .header-info {\r
        font-size: 10pt;\r
        line-height: 1.2;\r
        display: flex;\r
        flex-wrap: wrap;\r
        justify-content: center;\r
        gap: 0.4cm;\r
        align-items: center;\r
      }\r
\r
      .header-info span {\r
        white-space: nowrap;\r
        display: inline-flex;\r
        align-items: center;\r
        gap: 0.2cm;\r
      }\r
\r
      .header-info a {\r
        color: #000;\r
        text-decoration: none;\r
        display: inline-flex;\r
        align-items: center;\r
        gap: 0.2cm;\r
      }\r
\r
      .header-info i {\r
        font-size: 9pt;\r
        width: 12px;\r
        text-align: center;\r
      }\r
\r
      /* Section Styles */\r
      .section {\r
        margin-bottom: 0.5cm;\r
      }\r
\r
      .section-title {\r
        font-size: 12pt;\r
        font-weight: bold;\r
        text-transform: uppercase;\r
        letter-spacing: 0.5px;\r
        margin-bottom: 0.3cm;\r
        padding-bottom: 0.1cm;\r
        border-bottom: 1px solid #000;\r
      }\r
\r
      /* Summary */\r
      .summary {\r
        text-align: justify;\r
        margin-bottom: 0.3cm;\r
      }\r
\r
      /* Education */\r
      .education-item {\r
        margin-bottom: 0.4cm;\r
      }\r
\r
      .education-header {\r
        display: flex;\r
        justify-content: space-between;\r
        align-items: flex-start;\r
        margin-bottom: 0.1cm;\r
      }\r
\r
      .education-left {\r
        flex: 1;\r
      }\r
\r
      .education-right {\r
        text-align: right;\r
        font-style: italic;\r
        font-size: 10pt;\r
      }\r
\r
      .education-title {\r
        font-weight: bold;\r
        font-size: 11pt;\r
      }\r
\r
      .education-subtitle {\r
        font-style: italic;\r
        font-size: 10pt;\r
        margin-top: 0.1cm;\r
      }\r
\r
      /* Projects */\r
      .project-item {\r
        margin-bottom: 0.5cm;\r
      }\r
\r
      .project-header {\r
        display: flex;\r
        justify-content: space-between;\r
        align-items: flex-start;\r
        margin-bottom: 0.1cm;\r
      }\r
\r
      .project-left {\r
        flex: 1;\r
      }\r
\r
      .project-right {\r
        text-align: right;\r
        font-style: italic;\r
        font-size: 10pt;\r
      }\r
\r
      .project-title {\r
        font-weight: bold;\r
        font-size: 11pt;\r
      }\r
\r
      .project-subtitle {\r
        font-style: italic;\r
        font-size: 10pt;\r
        margin-top: 0.1cm;\r
      }\r
\r
      .project-links {\r
        display: flex;\r
        gap: 1mm;\r
        align-items: center;\r
      }\r
\r
      .project-links a {\r
        color: #000;\r
        text-decoration: none;\r
        font-size: 10pt;\r
      }\r
\r
      /* Work Experience */\r
      .work-item {\r
        margin-bottom: 0.4cm;\r
      }\r
\r
      .work-header {\r
        display: flex;\r
        justify-content: space-between;\r
        align-items: flex-start;\r
        margin-bottom: 0.1cm;\r
      }\r
\r
      .work-left {\r
        flex: 1;\r
      }\r
\r
      .work-right {\r
        text-align: right;\r
        font-size: 10pt;\r
      }\r
\r
      .work-title {\r
        font-weight: bold;\r
        font-size: 11pt;\r
      }\r
\r
      .work-location {\r
        font-size: 10pt;\r
        margin-top: 0.1cm;\r
      }\r
\r
      /* Lists */\r
      .item-list {\r
        margin-left: 2.5ex;\r
        margin-right: 1.5ex;\r
        margin-bottom: 0.3cm;\r
      }\r
\r
      .item-list li {\r
        margin-bottom: 0.15cm;\r
        text-align: justify;\r
        font-size: 10pt;\r
        line-height: 1.2;\r
      }\r
\r
      .item-list li::marker {\r
        content: "\u2022";\r
        font-size: 8pt;\r
      }\r
\r
      /* Skills */\r
      .skills-list {\r
        margin-left: 0.1in;\r
        list-style: none;\r
      }\r
\r
      .skills-list li {\r
        margin-bottom: 0.3mm;\r
        font-size: 11pt;\r
      }\r
\r
      .skills-list li strong {\r
        font-weight: bold;\r
      }\r
\r
      /* Print Styles */\r
      @media print {\r
        * {\r
          margin: 0 !important;\r
          padding: 0 !important;\r
          box-sizing: border-box !important;\r
        }\r
\r
        body {\r
          font-size: 10pt !important;\r
          line-height: 1.2 !important;\r
          padding: 0.8cm 1cm 0.5cm 1cm !important;\r
          max-width: none !important;\r
          margin: 0 !important;\r
          background: white !important;\r
          color: black !important;\r
        }\r
\r
        .header {\r
          margin-bottom: 0.3cm !important;\r
          text-align: center !important;\r
        }\r
\r
        .header h1 {\r
          font-size: 24pt !important;\r
          font-weight: bold !important;\r
          margin-bottom: 0.3cm !important;\r
        }\r
\r
        .header-info {\r
          font-size: 10pt !important;\r
          gap: 0.25cm !important;\r
          line-height: 1.2 !important;\r
        }\r
\r
        .section {\r
          margin-bottom: 0.5cm !important;\r
        }\r
\r
        .section-title {\r
          font-size: 12pt !important;\r
          font-weight: bold !important;\r
          text-transform: uppercase !important;\r
          letter-spacing: 0.5px !important;\r
          margin-bottom: 0.3cm !important;\r
          padding-bottom: 0.1cm !important;\r
          border-bottom: 1px solid #000 !important;\r
        }\r
\r
        .summary {\r
          margin-bottom: 0.3cm !important;\r
          font-size: 11pt !important;\r
          text-align: justify !important;\r
        }\r
\r
        .education-item,\r
        .project-item,\r
        .work-item {\r
          margin-bottom: 0.4cm !important;\r
        }\r
\r
        .education-header,\r
        .project-header,\r
        .work-header {\r
          margin-bottom: 0.1cm !important;\r
        }\r
\r
        .education-title,\r
        .project-title,\r
        .work-title {\r
          font-size: 11pt !important;\r
          font-weight: bold !important;\r
        }\r
\r
        .education-subtitle,\r
        .project-subtitle {\r
          font-size: 10pt !important;\r
          font-style: italic !important;\r
          margin-top: 0.1cm !important;\r
        }\r
\r
        .education-right,\r
        .project-right,\r
        .work-right {\r
          font-size: 10pt !important;\r
          font-style: italic !important;\r
        }\r
\r
        .work-location {\r
          font-size: 10pt !important;\r
          margin-top: 0.1cm !important;\r
        }\r
\r
        .item-list {\r
          margin-left: 2.5ex !important;\r
          margin-right: 1.5ex !important;\r
          margin-bottom: 0.3cm !important;\r
        }\r
\r
        .item-list li {\r
          font-size: 10pt !important;\r
          line-height: 1.2 !important;\r
          margin-bottom: 0.15cm !important;\r
          text-align: justify !important;\r
        }\r
\r
        .item-list li::marker {\r
          content: "\u2022" !important;\r
          font-size: 8pt !important;\r
        }\r
\r
        .skills-list {\r
          margin-left: 0.1in !important;\r
          list-style: none !important;\r
        }\r
\r
        .skills-list li {\r
          font-size: 11pt !important;\r
          margin-bottom: 0.3mm !important;\r
          line-height: 1.2 !important;\r
        }\r
\r
        .project-links a,\r
        .header-info a {\r
          color: #000 !important;\r
          text-decoration: none !important;\r
        }\r
\r
        .project-links {\r
          font-size: 10pt !important;\r
        }\r
\r
        /* Ensure no page breaks in inappropriate places */\r
        .section {\r
          page-break-inside: avoid !important;\r
        }\r
\r
        .education-item,\r
        .project-item,\r
        .work-item {\r
          page-break-inside: avoid !important;\r
        }\r
\r
        /* Force everything to fit on one page */\r
        .header,\r
        .section {\r
          page-break-after: avoid !important;\r
        }\r
\r
        /* Remove any conflicting styles */\r
        .header-info span,\r
        .header-info a {\r
          display: inline-flex !important;\r
          align-items: center !important;\r
          gap: 0.2cm !important;\r
        }\r
\r
        .header-info i {\r
          font-size: 9pt !important;\r
          width: 12px !important;\r
          text-align: center !important;\r
        }\r
      }\r
    </style>\r
  </head>\r
  <body>\r
    <header class="header">\r
      <h1><%= resume.basics.name %></h1>\r
      <div class="header-info">\r
        <% if (resume.basics.location && (resume.basics.location.city ||\r
        resume.basics.location.address)) { %>\r
        <span\r
          ><i class="fas fa-map-marker-alt"></i><%=\r
          resume.basics.location.address || resume.basics.location.city %><%=\r
          resume.basics.location.city && resume.basics.location.address ? ', ' +\r
          resume.basics.location.city : '' %></span\r
        >\r
        <% } %> <% if (resume.basics.email) { %>\r
        <span\r
          ><a href="mailto:<%= resume.basics.email %>"\r
            ><i class="far fa-envelope"></i><%= resume.basics.email %></a\r
          ></span\r
        >\r
        <% } %> <% if (resume.basics.phone) { %>\r
        <span\r
          ><a href="tel:<%= resume.basics.phone %>"\r
            ><i class="fas fa-phone"></i><%= resume.basics.phone %></a\r
          ></span\r
        >\r
        <% } %> <% if (resume.basics.profiles && resume.basics.profiles.length >\r
        0) { %> <% resume.basics.profiles.forEach(function(profile) { %> <% if\r
        (profile.url && profile.username) { %>\r
        <span\r
          ><a href="<%= profile.url %>">\r
            <% if (profile.network === 'GitHub') { %>\r
            <i class="fab fa-github"></i>\r
            <% } else if (profile.network === 'LinkedIn') { %>\r
            <i class="fab fa-linkedin-in"></i>\r
            <% } else if (profile.network === 'X') { %>\r
            <i class="fab fa-twitter"></i>\r
            <% } else { %>\r
            <i class="fas fa-link"></i>\r
            <% } %> <%= profile.username %>\r
          </a></span\r
        >\r
        <% } %> <% }); %> <% } %>\r
      </div>\r
    </header>\r
\r
    <% if (resume.basics.summary) { %>\r
    <section class="section">\r
      <h2 class="section-title">Summary</h2>\r
      <div class="summary"><%= resume.basics.summary %></div>\r
    </section>\r
    <% } %> <% if (resume.education && resume.education.length > 0) { %>\r
    <section class="section">\r
      <h2 class="section-title">Education</h2>\r
\r
      <% resume.education.forEach(function(edu) { %>\r
      <div class="education-item">\r
        <div class="education-header">\r
          <div class="education-left">\r
            <% if (edu.studyType && edu.area) { %>\r
            <div class="education-title">\r
              <%= edu.studyType %> in <%= edu.area %>\r
            </div>\r
            <% } else if (edu.studyType) { %>\r
            <div class="education-title"><%= edu.studyType %></div>\r
            <% } else if (edu.area) { %>\r
            <div class="education-title"><%= edu.area %></div>\r
            <% } %> <% if (edu.institution) { %>\r
            <div class="education-subtitle"><%= edu.institution %></div>\r
            <% } %>\r
          </div>\r
          <div class="education-right">\r
            <% if (edu.startDate || edu.endDate) { %>\r
            <div>\r
              <% if (edu.startDate) { %> <%= new\r
              Date(edu.startDate).getFullYear() %> <% } %> <% if (edu.startDate\r
              && edu.endDate) { %>-<% } %> <% if (edu.endDate) { %> <%= new\r
              Date(edu.endDate).getFullYear() %> <% } %>\r
            </div>\r
            <% } %> <% if (edu.gpa) { %>\r
            <div>GPA: <%= edu.gpa %></div>\r
            <% } %>\r
          </div>\r
        </div>\r
      </div>\r
      <% }); %>\r
    </section>\r
    <% } %> <% if (resume.projects && resume.projects.length > 0) { %>\r
    <section class="section">\r
      <h2 class="section-title">Personal Projects</h2>\r
\r
      <% resume.projects.forEach(function(project) { %>\r
      <div class="project-item">\r
        <div class="project-header">\r
          <div class="project-left">\r
            <% if (project.name) { %>\r
            <div class="project-title"><%= project.name %></div>\r
            <% } %> <% if (project.description) { %>\r
            <div class="project-subtitle"><%= project.description %></div>\r
            <% } %>\r
          </div>\r
          <div class="project-right">\r
            <div class="project-links">\r
              <% if (project.github) { %>\r
              <a href="<%= project.github %>"><i class="fab fa-github"></i></a>\r
              <% } %> <% if (project.url) { %>\r
              <a href="<%= project.url %>"\r
                ><i class="fas fa-external-link-alt"></i\r
              ></a>\r
              <% } %>\r
            </div>\r
          </div>\r
        </div>\r
        <% if (project.highlights && project.highlights.length > 0) { %>\r
        <ul class="item-list">\r
          <% project.highlights.forEach(function(highlight) { %>\r
          <li><%= highlight %></li>\r
          <% }); %>\r
        </ul>\r
        <% } %>\r
      </div>\r
      <% }); %>\r
    </section>\r
    <% } %> <% if (resume.work && resume.work.length > 0) { %>\r
    <section class="section">\r
      <h2 class="section-title">Work Experience</h2>\r
\r
      <% resume.work.forEach(function(job) { %>\r
      <div class="work-item">\r
        <div class="work-header">\r
          <div class="work-left">\r
            <% if (job.position) { %>\r
            <div class="work-title"><%= job.position %></div>\r
            <% } %> <% if (job.name) { %>\r
            <div class="work-location"><%= job.name %></div>\r
            <% } %>\r
          </div>\r
          <div class="work-right">\r
            <% if (job.startDate || job.endDate) { %>\r
            <div>\r
              <% if (job.startDate) { %> <%= new\r
              Date(job.startDate).getFullYear() %> <% } %> <% if (job.startDate\r
              && job.endDate) { %>-<% } %> <% if (job.endDate) { %> <%= new\r
              Date(job.endDate).getFullYear() %> <% } %>\r
            </div>\r
            <% } %> <% if (job.location) { %>\r
            <div><i class="fas fa-map-marker-alt"></i> <%= job.location %></div>\r
            <% } %>\r
          </div>\r
        </div>\r
        <% if (job.highlights && job.highlights.length > 0) { %>\r
        <ul class="item-list">\r
          <% job.highlights.forEach(function(highlight) { %>\r
          <li><%= highlight %></li>\r
          <% }); %>\r
        </ul>\r
        <% } %>\r
      </div>\r
      <% }); %>\r
    </section>\r
    <% } %> <% if (resume.skills && resume.skills.length > 0) { %>\r
    <section class="section">\r
      <h2 class="section-title">Skills</h2>\r
      <ul class="skills-list">\r
        <% resume.skills.forEach(function(skill) { %> <% if (skill.name &&\r
        skill.keywords && skill.keywords.length > 0) { %>\r
        <li>\r
          <strong><%= skill.name %>:</strong> <%= skill.keywords.join(', ') %>\r
        </li>\r
        <% } %> <% }); %>\r
      </ul>\r
    </section>\r
    <% } %> <% if (resume.certificates && resume.certificates.length > 0) { %>\r
    <section class="section">\r
      <h2 class="section-title">Certificates</h2>\r
      <% resume.certificates.forEach(function(cert) { %>\r
      <div class="work-item">\r
        <div class="work-header">\r
          <div class="work-left">\r
            <% if (cert.name) { %>\r
            <div class="work-title"><%= cert.name %></div>\r
            <% } %> <% if (cert.issuer) { %>\r
            <div class="work-location"><%= cert.issuer %></div>\r
            <% } %>\r
          </div>\r
          <div class="work-right">\r
            <% if (cert.url) { %>\r
            <div>\r
              <a href="<%= cert.url %>"\r
                ><i class="fas fa-external-link-alt"></i\r
              ></a>\r
            </div>\r
            <% } %>\r
          </div>\r
        </div>\r
      </div>\r
      <% }); %>\r
    </section>\r
    <% } %> <% if (resume.talks && resume.talks.length > 0) { %>\r
    <section class="section">\r
      <h2 class="section-title">Talks</h2>\r
      <% resume.talks.forEach(function(talk) { %>\r
      <div class="work-item">\r
        <div class="work-header">\r
          <div class="work-left">\r
            <% if (talk.title) { %>\r
            <div class="work-title"><%= talk.title %></div>\r
            <% } %> <% if (talk.event) { %>\r
            <div class="work-location"><%= talk.event %></div>\r
            <% } %>\r
          </div>\r
          <div class="work-right">\r
            <% if (talk.date) { %>\r
            <div><%= new Date(talk.date).getFullYear() %></div>\r
            <% } %> <% if (talk.slides) { %>\r
            <div>\r
              <a href="<%= talk.slides %>"\r
                ><i class="fas fa-external-link-alt"></i\r
              ></a>\r
            </div>\r
            <% } %>\r
          </div>\r
        </div>\r
      </div>\r
      <% }); %>\r
    </section>\r
    <% } %>\r
\r
    <script>\r
      document.addEventListener("DOMContentLoaded", function () {\r
        initializeDarkReader();\r
        addFavicon();\r
        handlePrintParameter();\r
        setupSmoothScroll();\r
        setupEmailCopy();\r
        setupPrintButton();\r
        setupDarkModeButton();\r
        setupGoogleTranslate();\r
        setupScrollProgress();\r
      });\r
\r
      function initializeDarkReader() {\r
        const darkReaderScript = document.createElement("script");\r
        darkReaderScript.src =\r
          "https://cdn.jsdelivr.net/npm/darkreader@4.9.105/darkreader.min.js";\r
        document.head.appendChild(darkReaderScript);\r
      }\r
\r
      function addFavicon() {\r
        const favicon = document.createElement("link");\r
        favicon.rel = "icon";\r
        favicon.href =\r
          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">\u{1F468}\u{1F3FB}\u200D\u{1F4BB}</text></svg>';\r
        document.head.appendChild(favicon);\r
      }\r
\r
      function handlePrintParameter() {\r
        const urlParams = new URLSearchParams(window.location.search);\r
        if (urlParams.get("print") === "true") {\r
          window.print();\r
        }\r
      }\r
\r
      function setupSmoothScroll() {\r
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {\r
          anchor.addEventListener("click", function (e) {\r
            e.preventDefault();\r
            const target = document.querySelector(this.getAttribute("href"));\r
            if (target) {\r
              target.scrollIntoView({\r
                behavior: "smooth",\r
                block: "start",\r
              });\r
            }\r
          });\r
        });\r
      }\r
\r
      function setupEmailCopy() {\r
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');\r
        emailLinks.forEach((link) => {\r
          link.addEventListener("click", (e) => {\r
            e.preventDefault();\r
            const email = link.href.replace("mailto:", "");\r
            navigator.clipboard.writeText(email).then(() => {\r
              const originalText = link.textContent;\r
              link.textContent = "Email copied!";\r
              setTimeout(() => {\r
                link.textContent = originalText;\r
              }, 2000);\r
            });\r
          });\r
        });\r
      }\r
\r
      function setupPrintButton() {\r
        const buttonContainer = document.createElement("div");\r
        buttonContainer.className = "button-container";\r
        document.body.appendChild(buttonContainer);\r
\r
        const printButton = document.createElement("button");\r
        printButton.innerHTML = '<i class="fas fa-print"></i>';\r
        printButton.className = "print-button";\r
        printButton.title = "Print Resume";\r
        buttonContainer.appendChild(printButton);\r
\r
        printButton.addEventListener("click", () => {\r
          window.print();\r
        });\r
      }\r
\r
      function setupDarkModeButton() {\r
        const buttonContainer = document.querySelector(".button-container");\r
        const darkModeButton = document.createElement("button");\r
        darkModeButton.innerHTML = '<i class="fas fa-moon"></i>';\r
        darkModeButton.className = "print-button";\r
        darkModeButton.title = "Toggle Dark Mode";\r
        buttonContainer.appendChild(darkModeButton);\r
\r
        let isDarkMode = false;\r
        darkModeButton.addEventListener("click", () => {\r
          isDarkMode = !isDarkMode;\r
          if (isDarkMode) {\r
            DarkReader.enable({\r
              brightness: 100,\r
              contrast: 90,\r
              sepia: 10,\r
            });\r
            darkModeButton.innerHTML = '<i class="fas fa-sun"></i>';\r
          } else {\r
            DarkReader.disable();\r
            darkModeButton.innerHTML = '<i class="fas fa-moon"></i>';\r
          }\r
        });\r
      }\r
\r
      function setupGoogleTranslate() {\r
        // Add Google Translate script\r
        const translateScript = document.createElement("script");\r
        translateScript.src =\r
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";\r
        document.head.appendChild(translateScript);\r
\r
        // Create the div for Google Translate\r
        const translateDiv = document.createElement("div");\r
        translateDiv.id = "google_translate_element";\r
        translateDiv.style.position = "fixed";\r
        translateDiv.style.bottom = "20px";\r
        translateDiv.style.right = "20px";\r
        translateDiv.style.zIndex = "1000";\r
        document.body.appendChild(translateDiv);\r
\r
        // Initialize Google Translate\r
        window.googleTranslateElementInit = function () {\r
          new google.translate.TranslateElement(\r
            {\r
              pageLanguage: "en",\r
              includedLanguages:\r
                "ar,zh-CN,fr,de,hi,id,it,ja,ko,pt,ru,es,th,tr,vi",\r
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,\r
            },\r
            "google_translate_element"\r
          );\r
        };\r
      }\r
\r
      function setupScrollProgress() {\r
        // Create progress bar element\r
        const progressBar = document.createElement("div");\r
        progressBar.className = "scroll-progress";\r
        document.body.appendChild(progressBar);\r
\r
        // Update progress bar on scroll\r
        window.addEventListener("scroll", () => {\r
          const windowHeight =\r
            document.documentElement.scrollHeight -\r
            document.documentElement.clientHeight;\r
          const progress = (window.scrollY / windowHeight) * 100;\r
          progressBar.style.width = \`\${progress}%\`;\r
        });\r
      }\r
\r
      // Add print button styles\r
      const printStyle = document.createElement("style");\r
      printStyle.textContent = \`\r
    .button-container {\r
        position: fixed;\r
        top: 20px;\r
        right: 30px;\r
        z-index: 1000;\r
        display: flex;\r
        gap: 10px;\r
    }\r
    .print-button {\r
        background: #fff;\r
        border: 1px solid #ddd;\r
        border-radius: 50%;\r
        width: 40px;\r
        height: 40px;\r
        cursor: pointer;\r
        display: flex;\r
        align-items: center;\r
        justify-content: center;\r
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);\r
    }\r
    .scroll-progress {\r
        position: fixed;\r
        top: 0;\r
        left: 0;\r
        height: 3px;\r
        background-color: #FF6B00;\r
        z-index: 1001;\r
        transition: width 0.1s ease;\r
    }\r
    @media print {\r
        .button-container {\r
            display: none;\r
        }\r
        .scroll-progress {\r
            display: none;\r
        }\r
        #google_translate_element {\r
            display: none;\r
        }\r
    }\r
    @media screen and (max-width: 768px) {\r
        .print-button[title="Print Resume"] {\r
            display: none;\r
        }\r
    }\r
\`;\r
      document.head.appendChild(printStyle);\r
    <\/script>\r
  </body>\r
</html>\r
`,"tree.txt":`\uFFFD\uFFFDF\0o\0l\0d\0e\0r\0 \0P\0A\0T\0H\0 \0l\0i\0s\0t\0i\0n\0g\0 \0f\0o\0r\0 \0v\0o\0l\0u\0m\0e\0 \0W\0i\0n\0d\0o\0w\0s\0-\0S\0S\0D\0\r\0
\0V\0o\0l\0u\0m\0e\0 \0s\0e\0r\0i\0a\0l\0 \0n\0u\0m\0b\0e\0r\0 \0i\0s\0 \x006\0E\x002\x004\0-\x001\x004\0B\x008\0\r\0
\0C\0:\0.\0\r\0
\0|\0 \0 \0 \0.\0g\0i\0t\0i\0g\0n\0o\0r\0e\0\r\0
\0|\0 \0 \0 \0.\0n\0p\0m\0i\0g\0n\0o\0r\0e\0\r\0
\0|\0 \0 \0 \0p\0a\0c\0k\0a\0g\0e\0-\0l\0o\0c\0k\0.\0j\0s\0o\0n\0\r\0
\0|\0 \0 \0 \0p\0a\0c\0k\0a\0g\0e\0.\0j\0s\0o\0n\0\r\0
\0|\0 \0 \0 \0r\0e\0a\0d\0m\0e\0.\0m\0d\0\r\0
\0|\0 \0 \0 \0r\0e\0s\0u\0m\0e\0.\0t\0e\0m\0p\0l\0a\0t\0e\0.\0e\0j\0s\0\r\0
\0|\0 \0 \0 \0t\0r\0e\0e\0.\0t\0x\0t\0\r\0
\0|\0 \0 \0 \0t\0s\0c\0o\0n\0f\0i\0g\0.\0j\0s\0o\0n\0\r\0
\0|\0 \0 \0 \0t\0s\0u\0p\0.\0c\0o\0n\0f\0i\0g\0.\0j\0s\0\r\0
\0|\0 \0 \0 \0t\0s\0u\0p\0.\0c\0o\0n\0f\0i\0g\0.\0t\0s\0\r\0
\0|\0 \0 \0 \0\r\0
\0+\0-\0-\0-\0d\0i\0s\0t\0\r\0
\0|\0 \0 \0 \0 \0 \0 \0 \0i\0n\0d\0e\0x\0.\0d\0.\0m\0t\0s\0\r\0
\0|\0 \0 \0 \0 \0 \0 \0 \0i\0n\0d\0e\0x\0.\0d\0.\0t\0s\0\r\0
\0|\0 \0 \0 \0 \0 \0 \0 \0i\0n\0d\0e\0x\0.\0j\0s\0\r\0
\0|\0 \0 \0 \0 \0 \0 \0 \0i\0n\0d\0e\0x\0.\0m\0j\0s\0\r\0
\0|\0 \0 \0 \0 \0 \0 \0 \0\r\0
\0\\\0-\0-\0-\0s\0r\0c\0\r\0
\0 \0 \0 \0 \0 \0 \0 \0 \0i\0n\0d\0e\0x\0.\0t\0s\0\r\0
\0 \0 \0 \0 \0 \0 \0 \0 \0\r\0
\0`},v={dist:["index.d.mts","index.d.ts","index.js","index.mjs"],".":["dist","package.json","readme.md","resume.template.ejs","tree.txt","tsup.config.js"]};V=function(e,r){var n=G(e);return n!==void 0?n:""},Y=function(e,r){var n=F(e);return n===void 0&&(n=[]),r&&r.withFileTypes?n.map(function(t){var i=R(e)+"/"+t,o=F(i)!==void 0;return{name:t,isFile:function(){return!o},isDirectory:function(){return o}}}):n},Z=function(e){return G(e)!==void 0||F(e)!==void 0},K=function(){},Q=function(){},M=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},ee=M,ne=function(){},re=function(){},te=function(){return{pipe:function(e){return e},on:function(){return this}}},ie=function(){return{write:function(){},end:function(){},on:function(){return this}}},Xe={readFileSync:V,readdirSync:Y,existsSync:Z,writeFileSync:K,mkdirSync:Q,statSync:M,lstatSync:ee,unlinkSync:ne,rmdirSync:re,createReadStream:te,createWriteStream:ie}});var I={};C(I,{basename:()=>T,default:()=>$e,dirname:()=>z,extname:()=>P,isAbsolute:()=>ue,join:()=>ae,normalize:()=>ce,parse:()=>de,relative:()=>le,resolve:()=>oe,sep:()=>se});var ae,oe,z,T,P,se,ue,ce,le,de,$e,U=S(()=>{"use strict";l();ae=function(){return[].slice.call(arguments).join("/")},oe=function(){return[].slice.call(arguments).join("/")},z=function(e){return e.split("/").slice(0,-1).join("/")},T=function(e,r){var n=e.split("/").pop()||"";return r&&n.endsWith(r)?n.slice(0,-r.length):n},P=function(e){var r=e.match(/\.[^.]+$/);return r?r[0]:""},se="/",ue=function(e){return e.charAt(0)==="/"},ce=function(e){return e},le=function(e,r){return r},de=function(e){return{root:"",dir:z(e),base:T(e),ext:P(e),name:T(e,P(e))}},$e={join:ae,resolve:oe,dirname:z,basename:T,extname:P,sep:se,isAbsolute:ue,normalize:ce,relative:le,parse:de}});var pe=L(m=>{"use strict";l();var Ge=/[|\\{}()[\]^$+*?.]/g,Ve=Object.prototype.hasOwnProperty,B=function(e,r){return Ve.apply(e,[r])};m.escapeRegExpChars=function(e){return e?String(e).replace(Ge,"\\$&"):""};var Ye={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},Ze=/[&<>'"]/g;function Ke(e){return Ye[e]||e}var Qe=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;m.escapeXML=function(e){return e==null?"":String(e).replace(Ze,Ke)};function me(){return Function.prototype.toString.call(this)+`;
`+Qe}try{typeof Object.defineProperty=="function"?Object.defineProperty(m.escapeXML,"toString",{value:me}):m.escapeXML.toString=me}catch{console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)")}m.shallowCopy=function(e,r){if(r=r||{},e!=null)for(var n in r)B(r,n)&&(n==="__proto__"||n==="constructor"||(e[n]=r[n]));return e};m.shallowCopyFromList=function(e,r,n){if(n=n||[],r=r||{},e!=null)for(var t=0;t<n.length;t++){var i=n[t];if(typeof r[i]<"u"){if(!B(r,i)||i==="__proto__"||i==="constructor")continue;e[i]=r[i]}}return e};m.cache={_data:{},set:function(e,r){this._data[e]=r},get:function(e){return this._data[e]},remove:function(e){delete this._data[e]},reset:function(){this._data={}}};m.hyphenToCamel=function(e){return e.replace(/-[a-z]/g,function(r){return r[1].toUpperCase()})};m.createNullProtoObjWherePossible=(function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}})();m.hasOwnOnlyObject=function(e){var r=m.createNullProtoObjWherePossible();for(var n in e)B(e,n)&&(r[n]=e[n]);return r}});var fe=L((An,en)=>{en.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.10",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^4.0.2","lru-cache":"^4.0.1",mocha:"^10.2.0","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"npx jake test"}}});var _e=L(a=>{"use strict";l();var H=(N(),x(A)),k=(U(),x(I)),s=pe(),he=!1,nn=fe().version,rn="<",tn=">",an="%",xe="locals",on="ejs",sn="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",ke=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],un=ke.concat("cache"),ge=/^\uFEFF/,W=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;a.cache=s.cache;a.fileLoader=H.readFileSync;a.localsName=xe;a.promiseImpl=new Function("return this;")().Promise;a.resolveInclude=function(e,r,n){var t=k.dirname,i=k.extname,o=k.resolve,c=o(n?r:t(r),e),f=i(e);return f||(c+=".ejs"),c};function ve(e,r){var n;if(r.some(function(t){return n=a.resolveInclude(e,t,!0),H.existsSync(n)}))return n}function cn(e,r){var n,t,i=r.views,o=/^[A-Za-z]+:\\|^\//.exec(e);if(o&&o.length)e=e.replace(/^\/*/,""),Array.isArray(r.root)?n=ve(e,r.root):n=a.resolveInclude(e,r.root||"/",!0);else if(r.filename&&(t=a.resolveInclude(e,r.filename),H.existsSync(t)&&(n=t)),!n&&Array.isArray(i)&&(n=ve(e,i)),!n&&typeof r.includer!="function")throw new Error('Could not find the include file "'+r.escapeFunction(e)+'"');return n}function _(e,r){var n,t=e.filename,i=arguments.length>1;if(e.cache){if(!t)throw new Error("cache option requires a filename");if(n=a.cache.get(t),n)return n;i||(r=be(t).toString().replace(ge,""))}else if(!i){if(!t)throw new Error("Internal EJS error: no file name or template provided");r=be(t).toString().replace(ge,"")}return n=a.compile(r,e),e.cache&&a.cache.set(t,n),n}function ln(e,r,n){var t;if(n){try{t=_(e)(r)}catch(i){return n(i)}n(null,t)}else{if(typeof a.promiseImpl=="function")return new a.promiseImpl(function(i,o){try{t=_(e)(r),i(t)}catch(c){o(c)}});throw new Error("Please provide a callback function")}}function be(e){return a.fileLoader(e)}function dn(e,r){var n=s.shallowCopy(s.createNullProtoObjWherePossible(),r);if(n.filename=cn(e,n),typeof r.includer=="function"){var t=r.includer(e,n.filename);if(t&&(t.filename&&(n.filename=t.filename),t.template))return _(n,t.template)}return _(n)}function ye(e,r,n,t,i){var o=r.split(`
`),c=Math.max(t-3,0),f=Math.min(o.length,t+3),p=i(n),h=o.slice(c,f).map(function(y,j){var w=j+c+1;return(w==t?" >> ":"    ")+w+"| "+y}).join(`
`);throw e.path=p,e.message=(p||"ejs")+":"+t+`
`+h+`

`+e.message,e}function we(e){return e.replace(/;(\s*$)/,"$1")}a.compile=function(r,n){var t;return n&&n.scope&&(he||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),he=!0),n.context||(n.context=n.scope),delete n.scope),t=new u(r,n),t.compile()};a.render=function(e,r,n){var t=r||s.createNullProtoObjWherePossible(),i=n||s.createNullProtoObjWherePossible();return arguments.length==2&&s.shallowCopyFromList(i,t,ke),_(i,e)(t)};a.renderFile=function(){var e=Array.prototype.slice.call(arguments),r=e.shift(),n,t={filename:r},i,o;return typeof arguments[arguments.length-1]=="function"&&(n=e.pop()),e.length?(i=e.shift(),e.length?s.shallowCopy(t,e.pop()):(i.settings&&(i.settings.views&&(t.views=i.settings.views),i.settings["view cache"]&&(t.cache=!0),o=i.settings["view options"],o&&s.shallowCopy(t,o)),s.shallowCopyFromList(t,i,un)),t.filename=r):i=s.createNullProtoObjWherePossible(),ln(t,i,n)};a.Template=u;a.clearCache=function(){a.cache.reset()};function u(e,r){var n=s.hasOwnOnlyObject(r),t=s.createNullProtoObjWherePossible();this.templateText=e,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",t.client=n.client||!1,t.escapeFunction=n.escape||n.escapeFunction||s.escapeXML,t.compileDebug=n.compileDebug!==!1,t.debug=!!n.debug,t.filename=n.filename,t.openDelimiter=n.openDelimiter||a.openDelimiter||rn,t.closeDelimiter=n.closeDelimiter||a.closeDelimiter||tn,t.delimiter=n.delimiter||a.delimiter||an,t.strict=n.strict||!1,t.context=n.context,t.cache=n.cache||!1,t.rmWhitespace=n.rmWhitespace,t.root=n.root,t.includer=n.includer,t.outputFunctionName=n.outputFunctionName,t.localsName=n.localsName||a.localsName||xe,t.views=n.views,t.async=n.async,t.destructuredLocals=n.destructuredLocals,t.legacyInclude=typeof n.legacyInclude<"u"?!!n.legacyInclude:!0,t.strict?t._with=!1:t._with=typeof n._with<"u"?n._with:!0,this.opts=t,this.regex=this.createRegex()}u.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"};u.prototype={createRegex:function(){var e=sn,r=s.escapeRegExpChars(this.opts.delimiter),n=s.escapeRegExpChars(this.opts.openDelimiter),t=s.escapeRegExpChars(this.opts.closeDelimiter);return e=e.replace(/%/g,r).replace(/</g,n).replace(/>/g,t),new RegExp(e)},compile:function(){var e,r,n=this.opts,t="",i="",o=n.escapeFunction,c,f=n.filename?JSON.stringify(n.filename):"undefined";if(!this.source){if(this.generateSource(),t+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,n.outputFunctionName){if(!W.test(n.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");t+="  var "+n.outputFunctionName+` = __append;
`}if(n.localsName&&!W.test(n.localsName))throw new Error("localsName is not a valid JS identifier.");if(n.destructuredLocals&&n.destructuredLocals.length){for(var p="  var __locals = ("+n.localsName+` || {}),
`,h=0;h<n.destructuredLocals.length;h++){var y=n.destructuredLocals[h];if(!W.test(y))throw new Error("destructuredLocals["+h+"] is not a valid JS identifier.");h>0&&(p+=`,
  `),p+=y+" = __locals."+y}t+=p+`;
`}n._with!==!1&&(t+="  with ("+n.localsName+` || {}) {
`,i+=`  }
`),i+=`  return __output;
`,this.source=t+this.source+i}n.compileDebug?e=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+f+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:e=this.source,n.client&&(e="escapeFn = escapeFn || "+o.toString()+`;
`+e,n.compileDebug&&(e="rethrow = rethrow || "+ye.toString()+`;
`+e)),n.strict&&(e=`"use strict";
`+e),n.debug&&console.log(e),n.compileDebug&&n.filename&&(e=e+`
//# sourceURL=`+f+`
`);try{if(n.async)try{c=new Function("return (async function(){}).constructor;")()}catch(d){throw d instanceof SyntaxError?new Error("This environment does not support async/await"):d}else c=Function;r=new c(n.localsName+", escapeFn, include, rethrow",e)}catch(d){throw d instanceof SyntaxError&&(n.filename&&(d.message+=" in "+n.filename),d.message+=` while compiling ejs

`,d.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,d.message+="https://github.com/RyanZim/EJS-Lint",n.async||(d.message+=`
`,d.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),d}var j=n.client?r:function(J){var ze=function(Ie,X){var O=s.shallowCopy(s.createNullProtoObjWherePossible(),J);return X&&(O=s.shallowCopy(O,X)),dn(Ie,n)(O)};return r.apply(n.context,[J||s.createNullProtoObjWherePossible(),o,ze,ye])};if(n.filename&&typeof Object.defineProperty=="function"){var w=n.filename,Ne=k.basename(w,k.extname(w));try{Object.defineProperty(j,"name",{value:Ne,writable:!1,enumerable:!1,configurable:!0})}catch{}}return j},generateSource:function(){var e=this.opts;e.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var r=this,n=this.parseTemplateText(),t=this.opts.delimiter,i=this.opts.openDelimiter,o=this.opts.closeDelimiter;n&&n.length&&n.forEach(function(c,f){var p;if(c.indexOf(i+t)===0&&c.indexOf(i+t+t)!==0&&(p=n[f+2],!(p==t+o||p=="-"+t+o||p=="_"+t+o)))throw new Error('Could not find matching close tag for "'+c+'".');r.scanLine(c)})},parseTemplateText:function(){for(var e=this.templateText,r=this.regex,n=r.exec(e),t=[],i;n;)i=n.index,i!==0&&(t.push(e.substring(0,i)),e=e.slice(i)),t.push(n[0]),e=e.slice(n[0].length),n=r.exec(e);return e&&t.push(e),t},_addOutput:function(e){if(this.truncate&&(e=e.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!e)return e;e=e.replace(/\\/g,"\\\\"),e=e.replace(/\n/g,"\\n"),e=e.replace(/\r/g,"\\r"),e=e.replace(/"/g,'\\"'),this.source+='    ; __append("'+e+`")
`},scanLine:function(e){var r=this,n=this.opts.delimiter,t=this.opts.openDelimiter,i=this.opts.closeDelimiter,o=0;switch(o=e.split(`
`).length-1,e){case t+n:case t+n+"_":this.mode=u.modes.EVAL;break;case t+n+"=":this.mode=u.modes.ESCAPED;break;case t+n+"-":this.mode=u.modes.RAW;break;case t+n+"#":this.mode=u.modes.COMMENT;break;case t+n+n:this.mode=u.modes.LITERAL,this.source+='    ; __append("'+e.replace(t+n+n,t+n)+`")
`;break;case n+n+i:this.mode=u.modes.LITERAL,this.source+='    ; __append("'+e.replace(n+n+i,n+i)+`")
`;break;case n+i:case"-"+n+i:case"_"+n+i:this.mode==u.modes.LITERAL&&this._addOutput(e),this.mode=null,this.truncate=e.indexOf("-")===0||e.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case u.modes.EVAL:case u.modes.ESCAPED:case u.modes.RAW:e.lastIndexOf("//")>e.lastIndexOf(`
`)&&(e+=`
`)}switch(this.mode){case u.modes.EVAL:this.source+="    ; "+e+`
`;break;case u.modes.ESCAPED:this.source+="    ; __append(escapeFn("+we(e)+`))
`;break;case u.modes.RAW:this.source+="    ; __append("+we(e)+`)
`;break;case u.modes.COMMENT:break;case u.modes.LITERAL:this._addOutput(e);break}}else this._addOutput(e)}r.opts.compileDebug&&o&&(this.currentLine+=o,this.source+="    ; __line = "+this.currentLine+`
`)}};a.escapeXML=s.escapeXML;a.__express=a.renderFile;a.VERSION=nn;a.name=on;typeof window<"u"&&(window.ejs=a)});var Pe={};C(Pe,{URL:()=>je,URLSearchParams:()=>Ee,default:()=>mn,fileURLToPath:()=>Se,format:()=>De,parse:()=>Te,pathToFileURL:()=>Le});var je,Ee,Se,Le,De,Te,mn,Oe=S(()=>{"use strict";l();je=globalThis.URL,Ee=globalThis.URLSearchParams,Se=function(e){return e.replace(/^file:\/\//,"")},Le=function(e){return new globalThis.URL("file://"+e)},De=function(e){return typeof e=="string"?e:e.href},Te=function(e){return new globalThis.URL(e)},mn={URL:je,URLSearchParams:Ee,fileURLToPath:Se,pathToFileURL:Le,format:De,parse:Te}});var Me=L((Un,Re)=>{"use strict";l();var q=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,fn=Object.getOwnPropertyNames,hn=Object.prototype.hasOwnProperty,gn=(e,r)=>{for(var n in r)q(e,n,{get:r[n],enumerable:!0})},vn=(e,r,n,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of fn(r))!hn.call(e,i)&&i!==n&&q(e,i,{get:()=>r[i],enumerable:!(t=pn(r,i))||t.enumerable});return e},bn=e=>vn(q({},"__esModule",{value:!0}),e),Ce={};gn(Ce,{render:()=>Dn});Re.exports=bn(Ce);var yn=()=>typeof document>"u"?new URL("file:/index.js").href:document.currentScript&&document.currentScript.src||new URL("main.js",document.baseURI).href,wn=yn(),xn=_e(),kn=(N(),x(A)),Fe=(U(),x(I)),_n=(Oe(),x(Pe)),jn=(0,_n.fileURLToPath)(wn),En=(0,Fe.dirname)(jn),Sn=(0,Fe.resolve)(En,"../resume.template.ejs"),Ln=(0,kn.readFileSync)(Sn,"utf-8");function Dn(e){return(0,xn.render)(Ln,{resume:e})}});l();var g=Je(Me(),1),Ae=g.default??g,Wn=Ae.render??g.render,Hn=Ae.pdfRenderOptions??g.pdfRenderOptions;export{Hn as pdfRenderOptions,Wn as render};
/*! Bundled license information:

ejs/lib/ejs.js:
  (**
   * @file Embedded JavaScript templating engine. {@link http://ejs.co}
   * @author Matthew Eernisse <mde@fleegix.org>
   * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
   * @project EJS
   * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
   *)
*/
