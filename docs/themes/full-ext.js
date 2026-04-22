var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var et=Object.create;var X=Object.defineProperty;var rt=Object.getOwnPropertyDescriptor;var tt=Object.getOwnPropertyNames;var nt=Object.getPrototypeOf,it=Object.prototype.hasOwnProperty;var F=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var fe=(e,r)=>()=>(e&&(r=e(e=0)),r);var m=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),Ue=(e,r)=>{for(var t in r)X(e,t,{get:r[t],enumerable:!0})},We=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of tt(r))!it.call(e,i)&&i!==t&&X(e,i,{get:()=>r[i],enumerable:!(n=rt(r,i))||n.enumerable});return e};var st=(e,r,t)=>(t=e!=null?et(nt(e)):{},We(r||!e||!e.__esModule?X(t,"default",{value:e,enumerable:!0}):t,e)),de=e=>We(X({},"__esModule",{value:!0}),e);var p=fe(()=>{});var be={};Ue(be,{createReadStream:()=>rr,createWriteStream:()=>tr,default:()=>at,existsSync:()=>Ye,lstatSync:()=>Qe,mkdirSync:()=>Ze,readFileSync:()=>Ke,readdirSync:()=>Je,rmdirSync:()=>er,statSync:()=>ve,unlinkSync:()=>$e,writeFileSync:()=>Xe});function ge(e){return String(e).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Ge(e){var r=ge(e);if(Z[r]!==void 0)return Z[r];for(var t=Object.keys(Z),n=0;n<t.length;n++)if(r.endsWith("/"+t[n])||r===t[n])return Z[t[n]]}function me(e){var r=ge(e);if((r===""||r===".")&&T["."]!==void 0)return T["."];if(T[r]!==void 0)return T[r];for(var t=Object.keys(T),n=0;n<t.length;n++)if(r.endsWith("/"+t[n])||r===t[n])return T[t[n]]}var Z,T,Ke,Je,Ye,Xe,Ze,ve,Qe,$e,er,rr,tr,at,ye=fe(()=>{"use strict";p();Z={"package.json":`{\r
  "name": "jsonresume-theme-full-ext",\r
  "version": "1.2.0",\r
  "description": "Simple to the point theme for JSON Resume, based on the full theme",\r
  "author": "Prasanna Kumar Gollangi",\r
  "repository": {\r
    "type": "git",\r
    "url": "https://github.com/pgollangi/jsonresume-theme-full-ext"\r
  },\r
  "bugs": {\r
    "url": "https://github.com/pgollangi/jsonresume-theme-full-ext/issues"\r
  },\r
  "homepage": "https://github.com/pgollangi/jsonresume-theme-full-ext#readme",\r
  "keywords": [\r
    "jsonresume",\r
    "resume",\r
    "full theme support",\r
    "accent color",\r
    "developer friendly",\r
    "full-ext theme support"\r
  ],\r
  "scripts": {\r
    "style": "sass dev/style.sass dev/style.css --watch",\r
    "dev": "npx livereloadx -s -p 35729 dev"\r
  },\r
  "license": "MIT",\r
  "dependencies": {\r
    "handlebars": "^2.0.0-alpha.4"\r
  },\r
  "devDependencies": {\r
    "sass": "^1.44.0"\r
  }\r
}\r
`,"partials/awards.hbs":`{{#if resume.awards.length}}\r
<section id="awards" class="awards">\r
  {{#each resume.awards}}\r
  <div class="item">\r
    {{#if @first}}\r
    <h2>Awards</h2>\r
    {{/if}}\r
    <header>\r
      {{#if title}}\r
      <div class="title">{{title}}</div>\r
      {{/if}}\r
      {{#if date}}\r
      <small class="date">{{date date}}</small>\r
      {{/if}}\r
    </header>\r
    {{#if awarder}}\r
    <div class="awarder">{{awarder}}</div>\r
    {{/if}}\r
    {{#if summary}}\r
    <div class="summary"><span>{{summary}}</span></div>\r
    {{/if}}\r
  </div>\r
  {{/each}}\r
</section>\r
{{/if}}`,"partials/basics.hbs":`{{#resume.basics}}\r
<section id="heading" class="heading">\r
  <header>\r
    <div class="header-container">\r
      <div>\r
        <h1>{{name}}</h1>\r
        {{#if label}}\r
        <h2>{{label}}</h2>\r
        {{/if}}\r
      </div>\r
      <div class="contact">\r
        {{#if email}}\r
        <span class="contact-detail"><a href="mailto:{{email}}">{{email}}</a></span>\r
        {{/if}}\r
        {{#if phone}}\r
        <span class="contact-detail">{{phone}}</span>\r
        {{/if}}\r
        {{#if url}}\r
        <span class="contact-detail"><a href="{{url}}" target="external">{{url}}</a></span>\r
        {{/if}}\r
        {{#if location}}\r
        <address>\r
          {{#if location.address}}\r
          <span class="address-detail">{{location.address}}</span>\r
          {{/if}}\r
          {{#if location.city}}\r
          <span class="address-detail">{{location.city}},</span>\r
          {{/if}}\r
          {{#if location.region}}\r
          <span class="address-detail">{{location.region}}</span>\r
          {{/if}}\r
          {{#if location.postalCode}}\r
          <span class="address-detail">{{location.postalCode}}</span>\r
          {{/if}}\r
          {{#if location.countryCode}}\r
          <span class="address-detail">{{location.countryCode}}</span>\r
          {{/if}}\r
        </address>\r
        {{/if}}\r
      </div>\r
    </div>\r
    {{#if summary}}\r
    <div class="summary">{{paragraphSplit summary}}</div>\r
    {{/if}}\r
    \r
  </header>\r
\r
  {{#if profiles.length}}\r
  <div class="profiles">\r
    {{#each profiles}}\r
    <div class="profile">\r
      {{#if network}}\r
      <strong class="network">{{network}}</strong>\r
      {{/if}}\r
      {{#if username}}\r
      <span class="username">\r
        {{#if url}}\r
        <a href="{{url}}" target="external">@{{username}}</a>\r
        {{else}}\r
        {{username}}\r
        {{/if}}\r
      </span>\r
      {{/if}}\r
    </div>\r
    <div class="profile print">\r
      {{#if username}}\r
      <span class="username">\r
        {{#if url}}\r
        {{url}}\r
        {{/if}}\r
      </span>\r
      {{/if}}\r
    </div>\r
    {{/each}}\r
  </div>\r
  {{/if}}\r
</section>\r
{{/resume.basics}}`,"partials/education.hbs":`{{#if resume.education.length}}\r
<section id="education" class="education">\r
  {{#each resume.education}}\r
  <div class="item">\r
    {{#if @first}}\r
    <h2>Education</h2>\r
    {{/if}}\r
    <header>\r
      {{#if institution}}\r
        <h3 class="name">{{institution}}</h3>\r
      {{/if}}\r
      <small class="dates">\r
        {{#if startDate}}\r
        <span class="startDate">{{date startDate}}</span>\r
        {{/if}}\r
        {{#if endDate}}\r
        <span class="endDate"> - {{date endDate}}</span>\r
        {{else}}\r
        <span class="endDate"> - Present</span>\r
        {{/if}}\r
      </small>\r
    </header>\r
    <div class="qualification">\r
      {{#if studyType}}\r
      <span class="studyType">{{studyType}}</span>\r
      {{/if}}\r
      {{#if area}}\r
      <span class="area">{{area}}</span>\r
      {{/if}}\r
      {{#if gpa}}\r
      <span class="gpa">GPA: {{gpa}}</span>\r
      {{/if}}\r
      {{#if score}}\r
      <span class="gpa">GPA: {{score}}</span>\r
      {{/if}}\r
      {{#if courses.length}}\r
      <br>\r
      <strong>Courses</strong>\r
      <ul class="courses">\r
        {{#each courses}}\r
        <li>{{.}}</li>\r
        {{/each}}\r
      </ul>\r
      {{/if}}\r
    </div>\r
  </div>\r
  {{/each}}\r
</section>\r
{{/if}}`,"partials/interests.hbs":`{{#if resume.interests.length}}\r
<section id="interests" class="interests">\r
  {{#each resume.interests}}\r
  <div class="item">\r
    {{#if @first}}\r
    <h2>Interests</h2>\r
    {{/if}}\r
    {{#if name}}\r
    <span class="name">{{name}}</span>\r
    {{/if}}\r
    {{#if keywords.length}}\r
    <span class="name">:</span>\r
    <span class="keywords">\r
      {{#each keywords}}\r
      <span>{{.}}</span>{{#if @last}}{{else}},{{/if}}\r
      {{/each}}\r
    </span>\r
    {{/if}}\r
  </div>\r
  {{/each}}\r
</section>\r
{{/if}}\r
`,"partials/languages.hbs":`{{#if resume.languages.length}}\r
<section id="languages" class="languages">\r
  {{#each resume.languages}}\r
  <div class="item">\r
    {{#if @first}}\r
    <h2>Languages</h2>\r
    {{/if}}\r
    {{#if language}}\r
    <div class="language-item">\r
      <span class="language">{{language}}:</span>\r
      {{/if}}\r
      {{#if fluency}}\r
      <span class="fluency">{{fluency}}</span>\r
      {{/if}}\r
    </div>\r
  </div>\r
  {{/each}}\r
</section>\r
{{/if}}\r
`,"partials/projects.hbs":`{{#if resume.projects.length}}\r
<section id="projects" class="projects">\r
  {{#each resume.projects}}\r
  <section class="item">\r
    {{#if @first}}\r
    <h2>Projects</h2>\r
    {{/if}}\r
    <header>\r
      {{#if name}}\r
      <h3 class="name">{{name}}</h3>\r
      {{/if}}\r
      {{#if startDate}}\r
      <small class="subhead">{{date startDate}}\r
      {{/if}}\r
      {{#if endDate}}\r
       - {{date endDate}}</small>\r
      {{else}}\r
       </small>\r
      {{/if}}\r
    </header>\r
    {{#if summary}}\r
    <div class="summary">{{paragraphSplit summary}}</div>\r
    {{/if}}\r
    {{#if highlights.length}}\r
    <strong>Highlights</strong>\r
    <ul class="highlights">\r
      {{#each highlights}}\r
      <li>{{.}}</li>\r
      {{/each}}\r
    </ul>\r
    {{/if}}\r
    {{#if stack.length}}\r
    <div>\r
    <strong>Stack:</strong>\r
    <span class="keywords">\r
      {{#each stack}}\r
      {{.}}{{#if @last}}{{else}},{{/if}}\r
      {{/each}}\r
    </span>\r
    </div>\r
    {{/if}}\r
    {{#if roles.length}}\r
      <strong>Roles</strong>\r
    <ul class="roles">\r
      {{#each roles}}\r
      <li>{{.}}</li>\r
      {{/each}}\r
    </ul>\r
    {{/if}}\r
    {{#if entity}}\r
      <div class="entity">{{entity}}</div>\r
    {{/if}}\r
    {{#if type}}\r
      <div class="type">{{type}}</div>\r
    {{/if}}\r
  </section>\r
  {{/each}}\r
</section>\r
{{/if}}`,"partials/publications.hbs":`{{#if resume.publications.length}}\r
<section id="publications" class="publications">\r
  {{#each resume.publications}}\r
  <div class="item">\r
    {{#if @first}}\r
    <h2>Publications</h2>\r
    {{/if}}\r
    {{#if name}}\r
    <div class="name">{{name}}</div>\r
    {{/if}}\r
    {{#if publisher}}\r
    <div class="subhead">\r
\r
    <div class="publisher">{{publisher}}</div>\r
    {{/if}}\r
    {{#if releaseDate}}\r
    <small class="releaseDate">{{date releaseDate}}</small>\r
    {{/if}}\r
    {{#if url}}\r
    <div class="website"><a href="{{url}}" target="external">Link</a></div>\r
    </div>\r
    {{/if}}\r
    {{#if summary}}\r
    <div class="summary">{{summary}}</div>\r
    {{/if}}\r
  </div>\r
  {{/each}}\r
</section>\r
{{/if}}`,"partials/references.hbs":`{{#if resume.references.length}}\r
<section id="references" class="references">\r
  {{#each resume.references}}\r
  <div class="item">\r
    {{#if @first}}\r
    <h2>References</h2>\r
    {{/if}}\r
    {{#if reference}}\r
    <blockquote class="reference">{{reference}}</blockquote>\r
    {{/if}}\r
    {{#if name}}\r
    <div class="name">\u2014 {{name}}</div>\r
    {{/if}}\r
  </div>\r
  {{/each}}\r
</section>\r
{{/if}}\r
`,"partials/skills.hbs":`{{#if resume.skills.length}}\r
<section id="skills" class="skills">\r
  {{#each resume.skills}}\r
  <div class="item">\r
    {{#if @first}}\r
    <h2>Skills</h2>\r
    {{/if}}\r
    {{#if name}}\r
    <div class="name">{{name}}</div>\r
    {{/if}}\r
    {{#if keywords.length}}\r
    <div class="keywords">\r
      {{#each keywords}}\r
      {{.}}{{#if @last}}{{else}},{{/if}}\r
      {{/each}}\r
    </div>\r
    {{/if}}\r
  </div>\r
  {{/each}}\r
</section>\r
{{/if}}`,"partials/volunteer.hbs":`{{#if resume.volunteer.length}}\r
<section id="volunteering" class="volunteering">\r
  {{#each resume.volunteer}}\r
  <div class="item">\r
    {{#if @first}}\r
    <h2>Volunteering</h2>\r
    {{/if}}\r
    <header>\r
      {{#if organization}}\r
      <h3 class="name">{{organization}}</h3>\r
      {{/if}}\r
      <div class="subhead">\r
        {{#if position}}\r
        <span class="position">{{position}}</span>\r
        {{/if}}\r
        {{#if startDate}}\r
        <small class="startDate">{{date startDate}}\r
        {{/if}}\r
        {{#if endDate}}\r
        - {{date endDate}}</small>\r
        {{else}}\r
        - Present</small>\r
        {{/if}}\r
      </div>\r
    </header>\r
    {{#if summary}}\r
    <div class="summary">{{summary}}</div>\r
    {{/if}}\r
    {{#if highlights.length}}\r
    <ul class="highlights">\r
      {{#each highlights}}\r
      <li>{{.}}</li>\r
      {{/each}}\r
    </ul>\r
    {{/if}}\r
  </div>\r
  {{/each}}\r
</section>\r
{{/if}}`,"partials/work.hbs":`{{#if resume.work.length}}\r
<section id="experience" class="experience">\r
  {{#each resume.work}}\r
  <section class="item">\r
    {{#if @first}}\r
    <h2>Experience</h2>\r
    {{/if}}\r
    <header>\r
      {{#if url}}\r
      <h3 class="name"><a href="{{url}}" target="external">{{name}}</a></h3>\r
      {{else}}\r
      <h3 class="name">{{name}}</h3>\r
      {{/if}}\r
      <div class="subhead">\r
      {{#if position}}\r
      <span class="position">{{position}}</span>\r
      {{/if}}\r
      {{#if startDate}}\r
      <small class="dates">{{date startDate}}\r
      {{/if}}\r
      {{#if endDate}}\r
       - {{date endDate}}</small>\r
      {{else}}\r
       - Present</small>\r
      {{/if}}\r
      </div>\r
    </header>\r
    {{#if summary}}\r
    <div class="summary">{{paragraphSplit summary}}</div>\r
    {{/if}}\r
    {{#if highlights.length}}\r
    <ul class="highlights">\r
      {{#each highlights}}\r
      <li>{{.}}</li>\r
      {{/each}}\r
    </ul>\r
    {{/if}}\r
  </section>\r
  {{/each}}\r
</section>\r
{{/if}}`,"resume.hbs":`<!doctype html>\r
<html>\r
	<head>\r
	<meta charset="utf-8">\r
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">\r
	<title>{{#resume.basics}}{{name}} {{#if experience}} - {{experience}}{{/if}} {{#if label}} - {{label}}{{/if}}{{/resume.basics}}</title>\r
	<style>\r
  	{{{css}}}\r
	</style>\r
	<style media="print">\r
		body { font-size: 12px; }\r
	</style>\r
  {{#resume.meta}}\r
  {{#if accent.length}}\r
  <style>\r
    :root {\r
      --accent: {{accent}};\r
    }\r
  </style>\r
  {{/if}}\r
  {{/resume.meta}}\r
\r
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300' rel='stylesheet' type='text/css'>\r
	\r
	</head>\r
  <body>	\r
    <div id="resume">\r
      {{> basics }}\r
      {{> skills }}\r
      {{> work }}\r
      {{> volunteer }}\r
      {{> projects }}\r
      {{> education }}\r
      {{> awards }}\r
      {{> publications }}\r
      {{> languages }}\r
      {{> interests }}\r
      {{#unless resume.meta.hideReferences }}\r
      {{> references }}\r
      {{/unless}}\r
    </div>\r
	</body>\r
</html>\r
`,"style.css":`:root {\r
  --accent:#BC1B39;\r
  --anchor-color: #2C85B1;\r
  --blue:#2C85B1;\r
  --copy-color-light: #666666;\r
  --copy-color: #242424;\r
  --grey:#999999;\r
  --light-grey:#ededed;\r
  --white:#FFFFFF;\r
  --base-font-size: 12pt;\r
  --spacing-double: 1rem;\r
  --spacing-small: .1rem;\r
  --spacing: .5rem;\r
}\r
@media (min-width: 567px) {\r
  :root {\r
    --spacing-double: 1.5rem;\r
    --spacing-small: .25rem;\r
    --spacing: .75rem;\r
  }\r
}\r
@media print {\r
  :root {\r
    --anchor-color: #000000;\r
    --base-font-size: 9pt;\r
    --copy-color-light: #000000;\r
    --copy-color: #000000;\r
  }\r
}\r
\r
body {\r
  color: var(--copy-color);\r
  display: flex;\r
  font: var(--base-font-size) "Open Sans", Helvetica, Arial, sans-serif;\r
  justify-content: center;\r
  line-height: 1.25;\r
  -webkit-print-color-adjust: exact;\r
}\r
\r
em {\r
  color: var(--grey);\r
}\r
\r
p {\r
  font-size: 90%;\r
}\r
\r
a {\r
  color: var(--anchor-color);\r
  font-weight: 400;\r
  text-decoration: none;\r
}\r
\r
ul {\r
  margin-bottom: 0;\r
}\r
\r
section {\r
  margin: var(--spacing) 0 var(--spacing-double);\r
}\r
\r
blockquote {\r
  margin-bottom: 0 0 var(--spacing);\r
}\r
\r
#resume {\r
  background: var(--white);\r
  margin: var(--spacing) var(--spacing-double);\r
  max-width: 760px;\r
}\r
\r
section.heading header h1 {\r
  font-size: 180%;\r
  font-weight: 300;\r
  margin: 0;\r
}\r
section.heading header h2 {\r
  font-size: 140%;\r
  font-weight: 400;\r
  margin: 0;\r
}\r
section.heading header h2::after {\r
  display: none;\r
}\r
section.heading header .contact {\r
  display: flex;\r
  flex-direction: column;\r
  /* padding-bottom: var(--spacing); */\r
}\r
\r
section.heading header .header-container {\r
  display: flex;\r
  justify-content: space-between;\r
  flex-direction: row;\r
}\r
\r
@media (max-width: 567px) {\r
  section.heading header .header-container {\r
    flex-direction: column;\r
  }\r
}\r
@media print {\r
  section.heading header .header-container {\r
    flex-direction: row;\r
  }\r
}\r
\r
/* @media (min-width: 567px) {\r
  section.heading header .contact {\r
    flex-direction: row;\r
    justify-content: space-between;\r
  }\r
} */\r
section.heading header address {\r
  font-size: 90%;\r
  font-style: normal;\r
  /* padding-bottom: var(--spacing); */\r
}\r
section.heading .profiles {\r
  display: flex;\r
  flex-direction: column;\r
  padding-bottom: var(--spacing);\r
}\r
\r
/* @media (min-width: 567px) { */\r
  section.heading .profiles {\r
    flex-direction: row;\r
    justify-content: start;\r
  }\r
/* } */\r
section.heading .profiles .profile.print {\r
  display: none;\r
}\r
/* @media print {\r
  section.heading .profiles .profile.print {\r
    display: block;\r
  }\r
} */\r
section.heading .profiles strong {\r
  margin: 0 var(--spacing-small) 0 0;\r
}\r
section.heading .profiles span {\r
  margin: 0 var(--spacing-double) 0 0;\r
}\r
\r
section.experience .item {\r
  border-bottom: 1px solid var(--light-grey);\r
  margin: 0 0 0.5em;\r
  padding: 0 0 0.5em;\r
}\r
section.experience .item:last-child {\r
  border-bottom: none;\r
}\r
section.experience .item header a,\r
section.experience .item header h3 {\r
  color: var(--copy-color);\r
  display: inline-block;\r
  font-weight: 400;\r
  text-decoration: none;\r
}\r
@media (max-width: 566px) {\r
  section.experience .item header .subhead {\r
    flex-direction: column;\r
    margin-bottom: var(--spacing-double);\r
  }\r
}\r
section.experience .item .summary p {\r
  margin-top: var(--spacing);\r
}\r
section.experience .item .summary p:first-child {\r
  margin-top: var(--spacing-small);\r
}\r
section.experience .item .summary p:last-child {\r
  margin-bottom: var(--spacing-small);\r
}\r
section.experience .item .position {\r
  color: var(--copy-color-light);\r
  font-size: 100%;\r
  font-weight: 500;\r
  margin: var(--spacing-small) 0;\r
}\r
section.experience .item .startDate,\r
section.experience .item .endDate {\r
  color: var(--grey);\r
}\r
section.skills .item {\r
  margin: 0;\r
  padding: 0 0 var(--spacing);\r
}\r
section.skills .item:first-child {\r
  margin-top: var(--spacing);\r
}\r
section.skills .item:last-child {\r
  margin-bottom: var(--spacing);\r
}\r
section.skills .item .name {\r
  display: inline-block;\r
  font-size: 90%;\r
  font-weight: 600;\r
  margin: 0 var(--spacing) 0 0;\r
  text-transform: uppercase;\r
  vertical-align: top;\r
  white-space: nowrap;\r
}\r
section.skills .item .keywords {\r
  display: inline;\r
  font-size: 90%;\r
  vertical-align: top;\r
}\r
\r
section.volunteering .item .position {\r
  font-weight: 600;\r
}\r
section.volunteering .item header .subhead {\r
  margin-top: var(--spacing);\r
}\r
section.projects .item strong {\r
  color: var(--copy-color-light);\r
  font-weight: 600;\r
  display: inline-block;\r
  /* padding-top: var(--spacing); */\r
}\r
section.awards .item .title {\r
  font-weight: 600;\r
}\r
section.publications .item .name {\r
  font-weight: 600;\r
}\r
section.languages .language-item {\r
  align-items: baseline;\r
  display: flex;\r
  justify-content: start;\r
}\r
section.languages .language-item:first-child {\r
  margin-top: var(--spacing);\r
}\r
section.languages .language-item:last-child {\r
  margin-bottom: var(--spacing);\r
}\r
section.languages .language-item .language {\r
  display: inline-block;\r
  font-size: 90%;\r
  font-weight: 600;\r
  margin: 0 var(--spacing) 0 0;\r
  text-transform: uppercase;\r
  vertical-align: top;\r
  white-space: nowrap;\r
}\r
section.languages .language-item .fluency {\r
  color: var(--copy-color-light);\r
  font-style: italic;\r
}\r
\r
section.interests .item {\r
  margin-bottom: var(--spacing);\r
}\r
section.interests .item:last-child {\r
  margin-bottom: var(--spacing);\r
}\r
section.interests .item .name {\r
  display: inline-block;\r
  font-size: 90%;\r
  font-weight: 600;\r
  margin: 0 var(--spacing) 0 0;\r
  text-transform: uppercase;\r
  vertical-align: top;\r
  white-space: nowrap;\r
}\r
\r
section.references .item blockquote {\r
  font-style: italic;\r
  margin-bottom: 0;\r
  margin-left: var(--spacing);\r
}\r
section.references .item .name {\r
  color: var(--copy-color-light);\r
}\r
\r
section h2 {\r
  color: var(--accent);\r
  font-size: 135%;\r
  font-weight: 400;\r
  margin: 0 0 var(--spacing-double);\r
  position: relative;\r
  text-transform: uppercase;\r
}\r
section h2::after {\r
  background: var(--accent);\r
  bottom: -10px;\r
  content: " ";\r
  display: inline-block;\r
  height: 3px;\r
  left: 0;\r
  position: absolute;\r
  width: 2.5rem;\r
}\r
section header h3 {\r
  margin: 0;\r
  font-weight: 600;\r
}\r
\r
section.experience .item .highlights, section.volunteering .highlights, section.projects .highlights,\r
section.projects .keywords,\r
section.projects .roles, section.education .item .courses {\r
  font-size: 90%;\r
  line-height: 1.3;\r
  list-style: square;\r
  margin: var(--spacing-small) 0 var(--spacing);\r
  padding-left: var(--spacing-double);\r
}\r
\r
section.experience .item, section.volunteering .item, section.projects .item, section.education .item, section.awards .item, section.publications .item, section.interests .item, section.references .item {\r
  page-break-inside: avoid;\r
}\r
\r
/* @media print {\r
  section.heading .profiles .profile:not(.print), section.publications .item .website {\r
    display: none;\r
  }\r
} */\r
\r
section.experience .item header .subhead, section.volunteering .item header .subhead, section.projects .item header, section.education .item header, section.awards .item header, section.publications .item .subhead {\r
  align-items: baseline;\r
  display: flex;\r
  justify-content: space-between;\r
}\r
@media (min-width: 567px) {\r
  section.experience .item header .subhead, section.volunteering .item header .subhead, section.projects .item header, section.education .item header, section.awards .item header, section.publications .item .subhead {\r
    flex-direction: row;\r
  }\r
}\r
\r
@media print {\r
  section.experience .item header .subhead, section.volunteering .item header .subhead, section.projects .item header, section.education .item header, section.awards .item header, section.publications .item .subhead {\r
    flex-direction: row;\r
  }\r
}\r
\r
@media print {\r
  body {\r
    font-size: 11pt;\r
    margin: 0;\r
    padding: 0;\r
  }\r
}\r
`},T={partials:["awards.hbs","basics.hbs","education.hbs","interests.hbs","languages.hbs","projects.hbs","publications.hbs","references.hbs","skills.hbs","volunteer.hbs","work.hbs"],".":["README.md","index.js","package.json","partials","resume.hbs","style.css"]};Ke=function(e,r){var t=Ge(e);return t!==void 0?t:""},Je=function(e,r){var t=me(e);return t===void 0&&(t=[]),r&&r.withFileTypes?t.map(function(n){var i=ge(e)+"/"+n,s=me(i)!==void 0;return{name:n,isFile:function(){return!s},isDirectory:function(){return s}}}):t},Ye=function(e){return Ge(e)!==void 0||me(e)!==void 0},Xe=function(){},Ze=function(){},ve=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Qe=ve,$e=function(){},er=function(){},rr=function(){return{pipe:function(e){return e},on:function(){return this}}},tr=function(){return{write:function(){},end:function(){},on:function(){return this}}},at={readFileSync:Ke,readdirSync:Je,existsSync:Ye,writeFileSync:Xe,mkdirSync:Ze,statSync:ve,lstatSync:Qe,unlinkSync:$e,rmdirSync:er,createReadStream:rr,createWriteStream:tr}});var cr={};Ue(cr,{basename:()=>Q,default:()=>ot,dirname:()=>ke,extname:()=>$,isAbsolute:()=>ar,join:()=>nr,normalize:()=>or,parse:()=>hr,relative:()=>lr,resolve:()=>ir,sep:()=>sr});var nr,ir,ke,Q,$,sr,ar,or,lr,hr,ot,pr=fe(()=>{"use strict";p();nr=function(){return[].slice.call(arguments).join("/")},ir=function(){return[].slice.call(arguments).join("/")},ke=function(e){return e.split("/").slice(0,-1).join("/")},Q=function(e,r){var t=e.split("/").pop()||"";return r&&t.endsWith(r)?t.slice(0,-r.length):t},$=function(e){var r=e.match(/\.[^.]+$/);return r?r[0]:""},sr="/",ar=function(e){return e.charAt(0)==="/"},or=function(e){return e},lr=function(e,r){return r},hr=function(e){return{root:"",dir:ke(e),base:Q(e),ext:$(e),name:Q(e,$(e))}},ot={join:nr,resolve:ir,dirname:ke,basename:Q,extname:$,sep:sr,isAbsolute:ar,normalize:or,relative:lr,parse:hr}});var Se=m(fr=>{"use strict";p();function ur(e){this.string=e}ur.prototype.toString=function(){return""+this.string};fr.default=ur});var q=m(N=>{"use strict";p();var lt=Se().default,ht={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},ct=/[&<>"'`]/g,pt=/[&<>"'`]/;function ut(e){return ht[e]}function ft(e){for(var r=1;r<arguments.length;r++)for(var t in arguments[r])Object.prototype.hasOwnProperty.call(arguments[r],t)&&(e[t]=arguments[r][t]);return e}N.extend=ft;var xe=Object.prototype.toString;N.toString=xe;var ee=function(e){return typeof e=="function"};ee(/x/)&&(ee=function(e){return typeof e=="function"&&xe.call(e)==="[object Function]"});var ee;N.isFunction=ee;var dr=Array.isArray||function(e){return e&&typeof e=="object"?xe.call(e)==="[object Array]":!1};N.isArray=dr;function dt(e){return e instanceof lt?e.toString():e==null?"":e?(e=""+e,pt.test(e)?e.replace(ct,ut):e):e+""}N.escapeExpression=dt;function mt(e){return!e&&e!==0?!0:!!(dr(e)&&e.length===0)}N.isEmpty=mt;function gt(e,r){return(e?e+".":"")+r}N.appendContextPath=gt});var P=m(gr=>{"use strict";p();var we=["description","fileName","lineNumber","message","name","number","stack"];function mr(e,r){var t;r&&r.firstLine&&(t=r.firstLine,e+=" - "+t+":"+r.firstColumn);for(var n=Error.prototype.constructor.call(this,e),i=0;i<we.length;i++)this[we[i]]=n[we[i]];t&&(this.lineNumber=t,this.column=r.firstColumn)}mr.prototype=new Error;gr.default=mr});var I=m(_=>{"use strict";p();var y=q(),Ne=P().default,vt="2.0.0";_.VERSION=vt;var bt=6;_.COMPILER_REVISION=bt;var yt={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};_.REVISION_CHANGES=yt;var vr=y.isArray,Ee=y.isFunction,br=y.toString,yr="[object Object]";function Pe(e,r){this.helpers=e||{},this.partials=r||{},kt(this)}_.HandlebarsEnvironment=Pe;Pe.prototype={constructor:Pe,logger:z,log:kr,registerHelper:function(e,r){if(br.call(e)===yr){if(r)throw new Ne("Arg not supported with multiple helpers");y.extend(this.helpers,e)}else this.helpers[e]=r},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,r){br.call(e)===yr?y.extend(this.partials,e):this.partials[e]=r},unregisterPartial:function(e){delete this.partials[e]}};function kt(e){e.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new Ne("Missing helper: '"+arguments[arguments.length-1].name+"'")}),e.registerHelper("blockHelperMissing",function(r,t){var n=t.inverse,i=t.fn;if(r===!0)return i(this);if(r===!1||r==null)return n(this);if(vr(r))return r.length>0?(t.ids&&(t.ids=[t.name]),e.helpers.each(r,t)):n(this);if(t.data&&t.ids){var s=re(t.data);s.contextPath=y.appendContextPath(t.data.contextPath,t.name),t={data:s}}return i(r,t)}),e.registerHelper("each",function(r,t){if(!t)throw new Ne("Must pass iterator to #each");var n=t.fn,i=t.inverse,s=0,a="",o,c;if(t.data&&t.ids&&(c=y.appendContextPath(t.data.contextPath,t.ids[0])+"."),Ee(r)&&(r=r.call(this)),t.data&&(o=re(t.data)),r&&typeof r=="object")if(vr(r))for(var l=r.length;s<l;s++)o&&(o.index=s,o.first=s===0,o.last=s===r.length-1,c&&(o.contextPath=c+s)),a=a+n(r[s],{data:o});else for(var u in r)r.hasOwnProperty(u)&&(o&&(o.key=u,o.index=s,o.first=s===0,c&&(o.contextPath=c+u)),a=a+n(r[u],{data:o}),s++);return s===0&&(a=i(this)),a}),e.registerHelper("if",function(r,t){return Ee(r)&&(r=r.call(this)),!t.hash.includeZero&&!r||y.isEmpty(r)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(r,t){return e.helpers.if.call(this,r,{fn:t.inverse,inverse:t.fn,hash:t.hash})}),e.registerHelper("with",function(r,t){Ee(r)&&(r=r.call(this));var n=t.fn;if(y.isEmpty(r))return t.inverse(this);if(t.data&&t.ids){var i=re(t.data);i.contextPath=y.appendContextPath(t.data.contextPath,t.ids[0]),t={data:i}}return n(r,t)}),e.registerHelper("log",function(r,t){var n=t.data&&t.data.level!=null?parseInt(t.data.level,10):1;e.log(n,r)}),e.registerHelper("lookup",function(r,t){return r&&r[t]})}var z={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,r){if(z.level<=e){var t=z.methodMap[e];typeof console<"u"&&console[t]&&console[t].call(console,r)}}};_.logger=z;var kr=z.log;_.log=kr;var re=function(e){var r=y.extend({},e);return r._parent=e,r};_.createFrame=re});var xr=m(B=>{"use strict";p();var _e=q(),D=P().default,St=I().COMPILER_REVISION,Sr=I().REVISION_CHANGES,xt=I().createFrame;function wt(e){var r=e&&e[0]||1,t=St;if(r!==t)if(r<t){var n=Sr[t],i=Sr[r];throw new D("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+i+").")}else throw new D("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}B.checkRevision=wt;function Et(e,r){if(!r)throw new D("No environment passed to template");if(!e||!e.main)throw new D("Unknown template object: "+typeof e);r.VM.checkRevision(e.compiler);var t=function(s,a,o,c,l,u,h,w,j){l&&(c=_e.extend({},c,l));var O=r.VM.invokePartial.call(this,s,o,c,u,h,w,j);if(O==null&&r.compile){var Fe={helpers:u,partials:h,data:w,depths:j};h[o]=r.compile(s,{data:w!==void 0,compat:e.compat},r),O=h[o](c,Fe)}if(O!=null){if(a){for(var S=O.split(`
`),E=0,he=S.length;E<he&&!(!S[E]&&E+1===he);E++)S[E]=a+S[E];O=S.join(`
`)}return O}else throw new D("The partial "+o+" could not be compiled when running in runtime-only mode")},n={lookup:function(s,a){for(var o=s.length,c=0;c<o;c++)if(s[c]&&s[c][a]!=null)return s[c][a]},lambda:function(s,a){return typeof s=="function"?s.call(a):s},escapeExpression:_e.escapeExpression,invokePartial:t,fn:function(s){return e[s]},programs:[],program:function(s,a,o){var c=this.programs[s],l=this.fn(s);return a||o?c=te(this,s,l,a,o):c||(c=this.programs[s]=te(this,s,l)),c},data:function(s,a){for(;s&&a--;)s=s._parent;return s},merge:function(s,a){var o=s||a;return s&&a&&s!==a&&(o=_e.extend({},a,s)),o},noop:r.VM.noop,compilerInfo:e.compiler},i=function(s,a){a=a||{};var o=a.data;i._setup(a),!a.partial&&e.useData&&(o=_t(s,o));var c;return e.useDepths&&(c=a.depths?[s].concat(a.depths):[s]),e.main.call(n,s,n.helpers,n.partials,o,c)};return i.isTop=!0,i._setup=function(s){s.partial?(n.helpers=s.helpers,n.partials=s.partials):(n.helpers=n.merge(s.helpers,r.helpers),e.usePartial&&(n.partials=n.merge(s.partials,r.partials)))},i._child=function(s,a,o){if(e.useDepths&&!o)throw new D("must pass parent depths");return te(n,s,e[s],a,o)},i}B.template=Et;function te(e,r,t,n,i){var s=function(a,o){return o=o||{},t.call(e,a,e.helpers,e.partials,o.data||n,i&&[a].concat(i))};return s.program=r,s.depth=i?i.length:0,s}B.program=te;function Nt(e,r,t,n,i,s,a){var o={partial:!0,helpers:n,partials:i,data:s,depths:a};if(e===void 0)throw new D("The partial "+r+" could not be found");if(e instanceof Function)return e(t,o)}B.invokePartial=Nt;function Pt(){return""}B.noop=Pt;function _t(e,r){return(!r||!("root"in r))&&(r=r?xt(r):{},r.root=e),r}});var _r=m(Pr=>{"use strict";p();var wr=I(),Ct=Se().default,Ot=P().default,Ce=q(),Er=xr(),Nr=function(){var e=new wr.HandlebarsEnvironment;return Ce.extend(e,wr),e.SafeString=Ct,e.Exception=Ot,e.Utils=Ce,e.escapeExpression=Ce.escapeExpression,e.VM=Er,e.template=function(r){return Er.template(r,e)},e},ne=Nr();ne.create=Nr;ne.default=ne;Pr.default=ne});var Oe=m(Or=>{"use strict";p();var Cr=P().default;function v(e){e=e||{},this.firstLine=e.first_line,this.firstColumn=e.first_column,this.lastColumn=e.last_column,this.lastLine=e.last_line}var U={ProgramNode:function(e,r,t){v.call(this,t),this.type="program",this.statements=e,this.strip=r},MustacheNode:function(e,r,t,n,i){if(v.call(this,i),this.type="mustache",this.strip=n,t!=null&&t.charAt){var s=t.charAt(3)||t.charAt(2);this.escaped=s!=="{"&&s!=="&"}else this.escaped=!!t;e instanceof U.SexprNode?this.sexpr=e:this.sexpr=new U.SexprNode(e,r),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(e,r,t){v.call(this,t),this.type="sexpr",this.hash=r;var n=this.id=e[0],i=this.params=e.slice(1);this.isHelper=!!(i.length||r),this.eligibleHelper=this.isHelper||n.isSimple},PartialNode:function(e,r,t,n,i){v.call(this,i),this.type="partial",this.partialName=e,this.context=r,this.hash=t,this.strip=n,this.strip.inlineStandalone=!0},BlockNode:function(e,r,t,n,i){v.call(this,i),this.type="block",this.mustache=e,this.program=r,this.inverse=t,this.strip=n,t&&!r&&(this.isInverse=!0)},RawBlockNode:function(e,r,t,n){if(v.call(this,n),e.sexpr.id.original!==t)throw new Cr(e.sexpr.id.original+" doesn't match "+t,this);r=new U.ContentNode(r,n),this.type="block",this.mustache=e,this.program=new U.ProgramNode([r],{},n)},ContentNode:function(e,r){v.call(this,r),this.type="content",this.original=this.string=e},HashNode:function(e,r){v.call(this,r),this.type="hash",this.pairs=e},IdNode:function(e,r){v.call(this,r),this.type="ID";for(var t="",n=[],i=0,s="",a=0,o=e.length;a<o;a++){var c=e[a].part;if(t+=(e[a].separator||"")+c,c===".."||c==="."||c==="this"){if(n.length>0)throw new Cr("Invalid path: "+t,this);c===".."?(i++,s+="../"):this.isScoped=!0}else n.push(c)}this.original=t,this.parts=n,this.string=n.join("."),this.depth=i,this.idName=s+this.string,this.isSimple=e.length===1&&!this.isScoped&&i===0,this.stringModeValue=this.string},PartialNameNode:function(e,r){v.call(this,r),this.type="PARTIAL_NAME",this.name=e.original},DataNode:function(e,r){v.call(this,r),this.type="DATA",this.id=e,this.stringModeValue=e.stringModeValue,this.idName="@"+e.stringModeValue},StringNode:function(e,r){v.call(this,r),this.type="STRING",this.original=this.string=this.stringModeValue=e},NumberNode:function(e,r){v.call(this,r),this.type="NUMBER",this.original=this.number=e,this.stringModeValue=Number(e)},BooleanNode:function(e,r){v.call(this,r),this.type="BOOLEAN",this.bool=e,this.stringModeValue=e==="true"},CommentNode:function(e,r){v.call(this,r),this.type="comment",this.comment=e,this.strip={inlineStandalone:!0}}};Or.default=U});var Ir=m(Ar=>{"use strict";p();var At=(function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(i,s,a,o,c,l,u){var h=l.length-1;switch(c){case 1:return o.prepareProgram(l[h-1].statements,!0),l[h-1];break;case 2:this.$=new o.ProgramNode(o.prepareProgram(l[h]),{},this._$);break;case 3:this.$=l[h];break;case 4:this.$=l[h];break;case 5:this.$=l[h];break;case 6:this.$=l[h];break;case 7:this.$=new o.ContentNode(l[h],this._$);break;case 8:this.$=new o.CommentNode(l[h],this._$);break;case 9:this.$=new o.RawBlockNode(l[h-2],l[h-1],l[h],this._$);break;case 10:this.$=new o.MustacheNode(l[h-1],null,"","",this._$);break;case 11:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!1,this._$);break;case 12:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!0,this._$);break;case 13:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 14:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 15:this.$={strip:o.stripFlags(l[h-1],l[h-1]),program:l[h]};break;case 16:this.$={path:l[h-1],strip:o.stripFlags(l[h-2],l[h])};break;case 17:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 18:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 19:this.$=new o.PartialNode(l[h-3],l[h-2],l[h-1],o.stripFlags(l[h-4],l[h]),this._$);break;case 20:this.$=new o.PartialNode(l[h-2],void 0,l[h-1],o.stripFlags(l[h-3],l[h]),this._$);break;case 21:this.$=new o.SexprNode([l[h-2]].concat(l[h-1]),l[h],this._$);break;case 22:this.$=new o.SexprNode([l[h]],null,this._$);break;case 23:this.$=l[h];break;case 24:this.$=new o.StringNode(l[h],this._$);break;case 25:this.$=new o.NumberNode(l[h],this._$);break;case 26:this.$=new o.BooleanNode(l[h],this._$);break;case 27:this.$=l[h];break;case 28:l[h-1].isHelper=!0,this.$=l[h-1];break;case 29:this.$=new o.HashNode(l[h],this._$);break;case 30:this.$=[l[h-2],l[h]];break;case 31:this.$=new o.PartialNameNode(l[h],this._$);break;case 32:this.$=new o.PartialNameNode(new o.StringNode(l[h],this._$),this._$);break;case 33:this.$=new o.PartialNameNode(new o.NumberNode(l[h],this._$));break;case 34:this.$=new o.DataNode(l[h],this._$);break;case 35:this.$=new o.IdNode(l[h],this._$);break;case 36:l[h-2].push({part:l[h],separator:l[h-1]}),this.$=l[h-2];break;case 37:this.$=[{part:l[h]}];break;case 38:this.$=[];break;case 39:l[h-1].push(l[h]);break;case 48:this.$=[];break;case 49:l[h-1].push(l[h]);break;case 52:this.$=[l[h]];break;case 53:l[h-1].push(l[h]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(i,s){throw new Error(i)},parse:function(i){var s=this,a=[0],o=[null],c=[],l=this.table,u="",h=0,w=0,j=0,O=2,Fe=1;this.lexer.setInput(i),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var S=this.lexer.yylloc;c.push(S);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function he(k){a.length=a.length-2*k,o.length=o.length-k,c.length=c.length-k}function $r(){var k;return k=s.lexer.lex()||1,typeof k!="number"&&(k=s.symbols_[k]||k),k}for(var g,ce,A,b,rn,pe,M={},J,x,ze,Y;;){if(A=a[a.length-1],this.defaultActions[A]?b=this.defaultActions[A]:((g===null||typeof g>"u")&&(g=$r()),b=l[A]&&l[A][g]),typeof b>"u"||!b.length||!b[0]){var ue="";if(!j){Y=[];for(J in l[A])this.terminals_[J]&&J>2&&Y.push("'"+this.terminals_[J]+"'");this.lexer.showPosition?ue="Parse error on line "+(h+1)+`:
`+this.lexer.showPosition()+`
Expecting `+Y.join(", ")+", got '"+(this.terminals_[g]||g)+"'":ue="Parse error on line "+(h+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(ue,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:S,expected:Y})}}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+A+", token: "+g);switch(b[0]){case 1:a.push(g),o.push(this.lexer.yytext),c.push(this.lexer.yylloc),a.push(b[1]),g=null,ce?(g=ce,ce=null):(w=this.lexer.yyleng,u=this.lexer.yytext,h=this.lexer.yylineno,S=this.lexer.yylloc,j>0&&j--);break;case 2:if(x=this.productions_[b[1]][1],M.$=o[o.length-x],M._$={first_line:c[c.length-(x||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(x||1)].first_column,last_column:c[c.length-1].last_column},E&&(M._$.range=[c[c.length-(x||1)].range[0],c[c.length-1].range[1]]),pe=this.performAction.call(M,u,w,h,this.yy,b[1],o,c),typeof pe<"u")return pe;x&&(a=a.slice(0,-1*x*2),o=o.slice(0,-1*x),c=c.slice(0,-1*x)),a.push(this.productions_[b[1]][0]),o.push(M.$),c.push(M._$),ze=l[a[a.length-2]][a[a.length-1]],a.push(ze);break;case 3:return!0}}return!0}},r=(function(){var n={EOF:1,parseError:function(s,a){if(this.yy.parser)this.yy.parser.parseError(s,a);else throw new Error(s)},setInput:function(i){return this._input=i,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var s=i.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var s=i.length,a=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s-1),this.offset-=s;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===o.length?this.yylloc.first_column:0)+o[o.length-a.length].length-a[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-s]),this},more:function(){return this._more=!0,this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),s=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+s+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,s,a,o,c,l;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),h=0;h<u.length&&(a=this._input.match(this.rules[u[h]]),!(a&&(!s||a[0].length>s[0].length)&&(s=a,o=h,!this.options.flex)));h++);return s?(l=s[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],i=this.performAction.call(this,this.yy,this,u[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return typeof s<"u"?s:this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(s){this.begin(s)}};return n.options={},n.performAction=function(s,a,o,c){function l(h,w){return a.yytext=a.yytext.substr(h,a.yyleng-w)}var u=c;switch(o){case 0:if(a.yytext.slice(-2)==="\\\\"?(l(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(l(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return a.yytext=a.yytext.substr(5,a.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return l(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return l(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return a.yytext=l(1,2).replace(/\\"/g,'"'),42;break;case 30:return a.yytext=l(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return a.yytext=l(1,2),50;break;case 37:return"INVALID";case 38:return 5}},n.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],n.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},n})();e.lexer=r;function t(){this.yy={}}return t.prototype=e,e.Parser=t,new t})();Ar.default=At});var Dr=m(ie=>{"use strict";p();var It=P().default;function Dt(e,r){return{left:e.charAt(2)==="~",right:r.charAt(r.length-3)==="~"}}ie.stripFlags=Dt;function Ht(e,r,t,n,i,s){if(e.sexpr.id.original!==n.path.original)throw new It(e.sexpr.id.original+" doesn't match "+n.path.original,e);var a=t&&t.program,o={left:e.strip.left,right:n.strip.right,openStandalone:Ie(r.statements),closeStandalone:Ae((a||r).statements)};if(e.strip.right&&H(r.statements,null,!0),a){var c=t.strip;c.left&&C(r.statements,null,!0),c.right&&H(a.statements,null,!0),n.strip.left&&C(a.statements,null,!0),Ae(r.statements)&&Ie(a.statements)&&(C(r.statements),H(a.statements))}else n.strip.left&&C(r.statements,null,!0);return i?new this.BlockNode(e,a,r,o,s):new this.BlockNode(e,r,a,o,s)}ie.prepareBlock=Ht;function Rt(e,r){for(var t=0,n=e.length;t<n;t++){var i=e[t],s=i.strip;if(s){var a=Ae(e,t,r,i.type==="partial"),o=Ie(e,t,r),c=s.openStandalone&&a,l=s.closeStandalone&&o,u=s.inlineStandalone&&a&&o;s.right&&H(e,t,!0),s.left&&C(e,t,!0),u&&(H(e,t),C(e,t)&&i.type==="partial"&&(i.indent=/([ \t]+$)/.exec(e[t-1].original)?RegExp.$1:"")),c&&(H((i.program||i.inverse).statements),C(e,t)),l&&(H(e,t),C((i.inverse||i.program).statements))}}return e}ie.prepareProgram=Rt;function Ae(e,r,t){r===void 0&&(r=e.length);var n=e[r-1],i=e[r-2];if(!n)return t;if(n.type==="content")return(i||!t?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(n.original)}function Ie(e,r,t){r===void 0&&(r=-1);var n=e[r+1],i=e[r+2];if(!n)return t;if(n.type==="content")return(i||!t?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(n.original)}function H(e,r,t){var n=e[r==null?0:r+1];if(!(!n||n.type!=="content"||!t&&n.rightStripped)){var i=n.string;n.string=n.string.replace(t?/^\s+/:/^[ \t]*\r?\n?/,""),n.rightStripped=n.string!==i}}function C(e,r,t){var n=e[r==null?e.length-1:r-1];if(!(!n||n.type!=="content"||!t&&n.leftStripped)){var i=n.string;return n.string=n.string.replace(t?/\s+$/:/[ \t]+$/,""),n.leftStripped=n.string!==i,n.leftStripped}}});var Re=m(He=>{"use strict";p();var De=Ir().default,Hr=Oe().default,Lt=Dr(),jt=q().extend;He.parser=De;var Rr={};jt(Rr,Lt,Hr);function Mt(e){return e.constructor===Hr.ProgramNode?e:(De.yy=Rr,De.parse(e))}He.parse=Mt});var ae=m(se=>{"use strict";p();var je=P().default,Lr=q().isArray,Tt=[].slice;function Le(){}se.Compiler=Le;Le.prototype={compiler:Le,equals:function(e){var r=this.opcodes.length;if(e.opcodes.length!==r)return!1;for(var t=0;t<r;t++){var n=this.opcodes[t],i=e.opcodes[t];if(n.opcode!==i.opcode||!jr(n.args,i.args))return!1}for(r=this.children.length,t=0;t<r;t++)if(!this.children[t].equals(e.children[t]))return!1;return!0},guid:0,compile:function(e,r){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=r,this.stringParams=r.stringParams,this.trackIds=r.trackIds;var t=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},t)for(var n in t)this.options.knownHelpers[n]=t[n];return this.accept(e)},accept:function(e){return this[e.type](e)},program:function(e){for(var r=e.statements,t=0,n=r.length;t<n;t++)this.accept(r[t]);return this.isSimple=n===1,this.depths.list=this.depths.list.sort(function(i,s){return i-s}),this},compileProgram:function(e){var r=new this.compiler().compile(e,this.options),t=this.guid++,n;this.usePartial=this.usePartial||r.usePartial,this.children[t]=r;for(var i=0,s=r.depths.list.length;i<s;i++)n=r.depths.list[i],!(n<2)&&this.addDepth(n-1);return t},block:function(e){var r=e.mustache,t=e.program,n=e.inverse;t&&(t=this.compileProgram(t)),n&&(n=this.compileProgram(n));var i=r.sexpr,s=this.classifySexpr(i);s==="helper"?this.helperSexpr(i,t,n):s==="simple"?(this.simpleSexpr(i),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",i.id.original)):(this.ambiguousSexpr(i,t,n),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(e){var r=e.pairs,t,n;for(this.opcode("pushHash"),t=0,n=r.length;t<n;t++)this.pushParam(r[t][1]);for(;t--;)this.opcode("assignToHash",r[t][0]);this.opcode("popHash")},partial:function(e){var r=e.partialName;this.usePartial=!0,e.hash?this.accept(e.hash):this.opcode("push","undefined"),e.context?this.accept(e.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",r.name,e.indent||""),this.opcode("append")},content:function(e){e.string&&this.opcode("appendContent",e.string)},mustache:function(e){this.sexpr(e.sexpr),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(e,r,t){var n=e.id,i=n.parts[0],s=r!=null||t!=null;this.opcode("getContext",n.depth),this.opcode("pushProgram",r),this.opcode("pushProgram",t),this.ID(n),this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(e){var r=e.id;r.type==="DATA"?this.DATA(r):r.parts.length?this.ID(r):(this.addDepth(r.depth),this.opcode("getContext",r.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,r,t){var n=this.setupFullMustacheParams(e,r,t),i=e.id,s=i.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",n.length,s);else{if(this.options.knownHelpersOnly)throw new je("You specified knownHelpersOnly, but used the unknown helper "+s,e);i.falsy=!0,this.ID(i),this.opcode("invokeHelper",n.length,i.original,i.isSimple)}},sexpr:function(e){var r=this.classifySexpr(e);r==="simple"?this.simpleSexpr(e):r==="helper"?this.helperSexpr(e):this.ambiguousSexpr(e)},ID:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var r=e.parts[0];r?this.opcode("lookupOnContext",e.parts,e.falsy,e.isScoped):this.opcode("pushContext")},DATA:function(e){this.options.data=!0,this.opcode("lookupData",e.id.depth,e.id.parts)},STRING:function(e){this.opcode("pushString",e.string)},NUMBER:function(e){this.opcode("pushLiteral",e.number)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:Tt.call(arguments,1)})},addDepth:function(e){e!==0&&(this.depths[e]||(this.depths[e]=!0,this.depths.list.push(e)))},classifySexpr:function(e){var r=e.isHelper,t=e.eligibleHelper,n=this.options;if(t&&!r){var i=e.id.parts[0];n.knownHelpers[i]?r=!0:n.knownHelpersOnly&&(t=!1)}return r?"helper":t?"ambiguous":"simple"},pushParams:function(e){for(var r=0,t=e.length;r<t;r++)this.pushParam(e[r])},pushParam:function(e){this.stringParams?(e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",e.stringModeValue,e.type),e.type==="sexpr"&&this.sexpr(e)):(this.trackIds&&this.opcode("pushId",e.type,e.idName||e.stringModeValue),this.accept(e))},setupFullMustacheParams:function(e,r,t){var n=e.params;return this.pushParams(n),this.opcode("pushProgram",r),this.opcode("pushProgram",t),e.hash?this.hash(e.hash):this.opcode("emptyHash"),n}};function qt(e,r,t){if(e==null||typeof e!="string"&&e.constructor!==t.AST.ProgramNode)throw new je("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);r=r||{},"data"in r||(r.data=!0),r.compat&&(r.useDepths=!0);var n=t.parse(e),i=new t.Compiler().compile(n,r);return new t.JavaScriptCompiler().compile(i,r)}se.precompile=qt;function Bt(e,r,t){if(e==null||typeof e!="string"&&e.constructor!==t.AST.ProgramNode)throw new je("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);r=r||{},"data"in r||(r.data=!0),r.compat&&(r.useDepths=!0);var n;function i(){var a=t.parse(e),o=new t.Compiler().compile(a,r),c=new t.JavaScriptCompiler().compile(o,r,void 0,!0);return t.template(c)}var s=function(a,o){return n||(n=i()),n.call(this,a,o)};return s._setup=function(a){return n||(n=i()),n._setup(a)},s._child=function(a,o,c){return n||(n=i()),n._child(a,o,c)},s}se.compile=Bt;function jr(e,r){if(e===r)return!0;if(Lr(e)&&Lr(r)&&e.length===r.length){for(var t=0;t<e.length;t++)if(!jr(e[t],r[t]))return!1;return!0}}});var Br=m(qr=>{"use strict";p();var Vt=I().COMPILER_REVISION,Ft=I().REVISION_CHANGES,Me=P().default;function W(e){this.value=e}function R(){}R.prototype={nameLookup:function(e,r){return R.isValidJavaScriptVariableName(r)?e+"."+r:e+"['"+r+"']"},depthedLookup:function(e){return this.aliases.lookup="this.lookup",'lookup(depths, "'+e+'")'},compilerInfo:function(){var e=Vt,r=Ft[e];return[e,r]},appendToBuffer:function(e){return this.environment.isSimple?"return "+e+";":{appendToBuffer:!0,content:e,toString:function(){return"buffer += "+e+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,r,t,n){this.environment=e,this.options=r,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!n,this.name=this.environment.name,this.isChild=!!t,this.context=t||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(e,r),this.useDepths=this.useDepths||e.depths.list.length||this.options.compat;var i=e.opcodes,s,a,o;for(a=0,o=i.length;a<o;a++)s=i[a],this[s.opcode].apply(this,s.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Me("Compile completed with content left on stack");var c=this.createFunctionContext(n);if(this.isChild)return c;var l={compiler:this.compilerInfo(),main:c},u=this.context.programs;for(a=0,o=u.length;a<o;a++)u[a]&&(l[a]=u[a]);return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.options.compat&&(l.compat=!0),n||(l.compiler=JSON.stringify(l.compiler),l=this.objectLiteral(l)),l},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(e){var r="",t=this.stackVars.concat(this.registers.list);t.length>0&&(r+=", "+t.join(", "));for(var n in this.aliases)this.aliases.hasOwnProperty(n)&&(r+=", "+n+"="+this.aliases[n]);var i=["depth0","helpers","partials","data"];this.useDepths&&i.push("depths");var s=this.mergeSource(r);return e?(i.push(s),Function.apply(this,i)):"function("+i.join(",")+`) {
  `+s+"}"},mergeSource:function(e){for(var r="",t,n=!this.forceBuffer,i,s=0,a=this.source.length;s<a;s++){var o=this.source[s];o.appendToBuffer?t?t=t+`
    + `+o.content:t=o.content:(t&&(r?r+="buffer += "+t+`;
  `:(i=!0,r=t+`;
  `),t=void 0),r+=o+`
  `,this.environment.isSimple||(n=!1))}return n?(t||!r)&&(r+="return "+(t||'""')+`;
`):(e+=", buffer = "+(i?"":this.initializeBuffer()),t?r+="return buffer + "+t+`;
`:r+=`return buffer;
`),e&&(r="var "+e.substring(2)+(i?"":`;
  `)+r),r},blockValue:function(e){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var r=[this.contextName(0)];this.setupParams(e,0,r);var t=this.popStack();r.splice(1,0,t),this.push("blockHelperMissing.call("+r.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams("",0,e,!0),this.flushInline();var r=this.topStack();e.splice(1,0,r),this.pushSource("if (!"+this.lastHelper+") { "+r+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){this.pendingContent&&(e=this.pendingContent+e),this.pendingContent=e},append:function(){this.flushInline();var e=this.popStack();this.pushSource("if ("+e+" != null) { "+this.appendToBuffer(e)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,r,t){var n=0,i=e.length;for(!t&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(e[n++])):this.pushContext();n<i;n++)this.replaceStack(function(s){var a=this.nameLookup(s,e[n],"context");return r?" && "+a:" != null ? "+a+" : "+s})},lookupData:function(e,r){e?this.pushStackLiteral("this.data(data, "+e+")"):this.pushStackLiteral("data");for(var t=r.length,n=0;n<t;n++)this.replaceStack(function(i){return" && "+this.nameLookup(i,r[n],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(e,r){this.pushContext(),this.pushString(r),r!=="sexpr"&&(typeof e=="string"?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+e.ids.join(",")+"}"),this.stringParams&&(this.push("{"+e.contexts.join(",")+"}"),this.push("{"+e.types.join(",")+"}")),this.push(`{
    `+e.values.join(`,
    `)+`
  }`)},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){return this.inlineStack.push(e),e},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){e!=null?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},invokeHelper:function(e,r,t){this.aliases.helperMissing="helpers.helperMissing";var n=this.popStack(),i=this.setupHelper(e,r),s=(t?i.name+" || ":"")+n+" || helperMissing";this.push("(("+s+").call("+i.callParams+"))")},invokeKnownHelper:function(e,r){var t=this.setupHelper(e,r);this.push(t.name+".call("+t.callParams+")")},invokeAmbiguous:function(e,r){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var t=this.popStack();this.emptyHash();var n=this.setupHelper(0,e,r),i=this.lastHelper=this.nameLookup("helpers",e,"helper");this.push("((helper = (helper = "+i+" || "+t+") != null ? helper : helperMissing"+(n.paramsInit?"),("+n.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+n.callParams+") : helper))")},invokePartial:function(e,r){var t=[this.nameLookup("partials",e,"partial"),"'"+r+"'","'"+e+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?t.push("data"):this.options.compat&&t.push("undefined"),this.options.compat&&t.push("depths"),this.push("this.invokePartial("+t.join(", ")+")")},assignToHash:function(e){var r=this.popStack(),t,n,i;this.trackIds&&(i=this.popStack()),this.stringParams&&(n=this.popStack(),t=this.popStack());var s=this.hash;t&&s.contexts.push("'"+e+"': "+t),n&&s.types.push("'"+e+"': "+n),i&&s.ids.push("'"+e+"': "+i),s.values.push("'"+e+"': ("+r+")")},pushId:function(e,r){e==="ID"||e==="DATA"?this.pushString(r):e==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:R,compileChildren:function(e,r){for(var t=e.children,n,i,s=0,a=t.length;s<a;s++){n=t[s],i=new this.compiler;var o=this.matchExistingProgram(n);o==null?(this.context.programs.push(""),o=this.context.programs.length,n.index=o,n.name="program"+o,this.context.programs[o]=i.compile(n,r,this.context,!this.precompile),this.context.environments[o]=n,this.useDepths=this.useDepths||i.useDepths):(n.index=o,n.name="program"+o)}},matchExistingProgram:function(e){for(var r=0,t=this.context.environments.length;r<t;r++){var n=this.context.environments[r];if(n&&n.equals(e))return r}},programExpression:function(e){var r=this.environment.children[e],t=r.depths.list,n=this.useDepths,i,s=[r.index,"data"];return n&&s.push("depths"),"this.program("+s.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},pushStackLiteral:function(e){return this.push(new W(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),e&&this.source.push(e)},pushStack:function(e){this.flushInline();var r=this.incrStack();return this.pushSource(r+" = "+e+";"),this.compileStack.push(r),r},replaceStack:function(e){var r="",t=this.isInline(),n,i,s;if(!this.isInline())throw new Me("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof W)r=n=a.value,s=!0;else{i=!this.stackSlot;var o=i?this.incrStack():this.topStackName();r="("+this.push(o)+" = "+a+")",n=this.topStack()}var c=e.call(this,n);s||this.popStack(),i&&this.stackSlot--,this.push("("+r+c+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;if(e.length){this.inlineStack=[];for(var r=0,t=e.length;r<t;r++){var n=e[r];n instanceof W?this.compileStack.push(n):this.pushStack(n)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var r=this.isInline(),t=(r?this.inlineStack:this.compileStack).pop();if(!e&&t instanceof W)return t.value;if(!r){if(!this.stackSlot)throw new Me("Invalid stack pop");this.stackSlot--}return t},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,r=e[e.length-1];return r instanceof W?r.value:r},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var r=[];for(var t in e)e.hasOwnProperty(t)&&r.push(this.quotedString(t)+":"+e[t]);return"{"+r.join(",")+"}"},setupHelper:function(e,r,t){var n=[],i=this.setupParams(r,e,n,t),s=this.nameLookup("helpers",r,"helper");return{params:n,paramsInit:i,name:s,callParams:[this.contextName(0)].concat(n).join(", ")}},setupOptions:function(e,r,t){var n={},i=[],s=[],a=[],o,c,l;n.name=this.quotedString(e),n.hash=this.popStack(),this.trackIds&&(n.hashIds=this.popStack()),this.stringParams&&(n.hashTypes=this.popStack(),n.hashContexts=this.popStack()),c=this.popStack(),l=this.popStack(),(l||c)&&(l||(l="this.noop"),c||(c="this.noop"),n.fn=l,n.inverse=c);for(var u=r;u--;)o=this.popStack(),t[u]=o,this.trackIds&&(a[u]=this.popStack()),this.stringParams&&(s[u]=this.popStack(),i[u]=this.popStack());return this.trackIds&&(n.ids="["+a.join(",")+"]"),this.stringParams&&(n.types="["+s.join(",")+"]",n.contexts="["+i.join(",")+"]"),this.options.data&&(n.data="data"),n},setupParams:function(e,r,t,n){var i=this.objectLiteral(this.setupOptions(e,r,t));return n?(this.useRegister("options"),t.push("options"),"options="+i):(t.push(i),"")}};var Mr="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),zt=R.RESERVED_WORDS={};for(oe=0,Tr=Mr.length;oe<Tr;oe++)zt[Mr[oe]]=!0;var oe,Tr;R.isValidJavaScriptVariableName=function(e){return!R.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)};qr.default=R});var zr=m(Fr=>{"use strict";p();var V=_r().default,Ut=Oe().default,Wt=Re().parser,Gt=Re().parse,Kt=ae().Compiler,Jt=ae().compile,Yt=ae().precompile,Xt=Br().default,Zt=V.create,Vr=function(){var e=Zt();return e.compile=function(r,t){return Jt(r,t,e)},e.precompile=function(r,t){return Yt(r,t,e)},e.AST=Ut,e.Compiler=Kt,e.JavaScriptCompiler=Xt,e.Parser=Wt,e.parse=Gt,e};V=Vr();V.create=Vr;V.default=V;Fr.default=V});var qe=m(Ur=>{"use strict";p();function Te(){}Te.prototype={constructor:Te,accept:function(e){return this[e.type](e)}};Ur.default=Te});var Wr=m(Be=>{"use strict";p();var Qt=qe().default;function $t(e){return new d().accept(e)}Be.print=$t;function d(){this.padding=0}Be.PrintVisitor=d;d.prototype=new Qt;d.prototype.pad=function(e){for(var r="",t=0,n=this.padding;t<n;t++)r=r+"  ";return r=r+e+`
`,r};d.prototype.program=function(e){var r="",t=e.statements,n,i;for(n=0,i=t.length;n<i;n++)r=r+this.accept(t[n]);return this.padding--,r};d.prototype.block=function(e){var r="";return r=r+this.pad("BLOCK:"),this.padding++,r=r+this.accept(e.mustache),e.program&&(r=r+this.pad("PROGRAM:"),this.padding++,r=r+this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,r=r+this.pad("{{^}}"),this.padding++,r=r+this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,r};d.prototype.sexpr=function(e){for(var r=e.params,t=[],n,i=0,s=r.length;i<s;i++)t.push(this.accept(r[i]));return r="["+t.join(", ")+"]",n=e.hash?" "+this.accept(e.hash):"",this.accept(e.id)+" "+r+n};d.prototype.mustache=function(e){return this.pad("{{ "+this.accept(e.sexpr)+" }}")};d.prototype.partial=function(e){var r=this.accept(e.partialName);return e.context&&(r+=" "+this.accept(e.context)),e.hash&&(r+=" "+this.accept(e.hash)),this.pad("{{> "+r+" }}")};d.prototype.hash=function(e){for(var r=e.pairs,t=[],n,i,s=0,a=r.length;s<a;s++)n=r[s][0],i=this.accept(r[s][1]),t.push(n+"="+i);return"HASH{"+t.join(", ")+"}"};d.prototype.STRING=function(e){return'"'+e.string+'"'};d.prototype.NUMBER=function(e){return"NUMBER{"+e.number+"}"};d.prototype.BOOLEAN=function(e){return"BOOLEAN{"+e.bool+"}"};d.prototype.ID=function(e){var r=e.parts.join("/");return e.parts.length>1?"PATH:"+r:"ID:"+r};d.prototype.PARTIAL_NAME=function(e){return"PARTIAL:"+e.name};d.prototype.DATA=function(e){return"@"+this.accept(e.id)};d.prototype.content=function(e){return this.pad("CONTENT[ '"+e.string+"' ]")};d.prototype.comment=function(e){return this.pad("{{! '"+e.comment+"' }}")}});var Jr=m((Tn,Kr)=>{p();var G=zr().default;G.Visitor=qe().default;var Gr=Wr();G.PrintVisitor=Gr.PrintVisitor;G.print=Gr.print;Kr.exports=G;typeof F<"u"&&F.extensions&&(Ve=function(e,r){var t=(ye(),de(be)),n=t.readFileSync(r,"utf8");e.exports=G.compile(n)},F.extensions[".handlebars"]=Ve,F.extensions[".hbs"]=Ve);var Ve});var Zr=m((Vn,Xr)=>{p();var le=(ye(),de(be)),Yr=(pr(),de(cr)),K=Jr();function en(e){e.meta||(e.meta={}),e.meta.order&&(e.meta.order=["basics","skills","work","volunteer","projects","education","awards","publications","languages","interests","references"]);var r=le.readFileSync("//style.css","utf-8"),t=le.readFileSync("//resume.hbs","utf-8"),n=Yr.join("/","partials"),i=le.readdirSync(n);i.forEach(function(a){var o=/^([^.]+).hbs$/.exec(a);if(o){var c=o[1],l=Yr.join(n,a),u=le.readFileSync(l,"utf8");K.registerPartial(c,u)}});let s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return K.registerHelper("date",function(a){let o=new Date(a);return`${s[o.getMonth()]} ${o.getFullYear()}`}),K.compile(t)({css:r,resume:e})}K.registerHelper("paragraphSplit",function(e){var r,t="",n=e.split(/\r\n|\r|\n/g);for(r=0;r<n.length;r++)n[r]&&(t+="<p>"+n[r]+"</p>");return new K.SafeString(t)});Xr.exports={render:en}});p();var L=st(Zr(),1),Qr=L.default??L,zn=Qr.render??L.render,Un=Qr.pdfRenderOptions??L.pdfRenderOptions;export{Un as pdfRenderOptions,zn as render};
