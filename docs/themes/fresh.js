var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var nt=Object.create;var Y=Object.defineProperty;var tt=Object.getOwnPropertyDescriptor;var it=Object.getOwnPropertyNames;var st=Object.getPrototypeOf,rt=Object.prototype.hasOwnProperty;var V=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var ue=(e,n)=>()=>(e&&(n=e(e=0)),n);var m=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),je=(e,n)=>{for(var t in n)Y(e,t,{get:n[t],enumerable:!0})},We=(e,n,t,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let s of it(n))!rt.call(e,s)&&s!==t&&Y(e,s,{get:()=>n[s],enumerable:!(i=tt(n,s))||i.enumerable});return e};var at=(e,n,t)=>(t=e!=null?nt(st(e)):{},We(n||!e||!e.__esModule?Y(t,"default",{value:e,enumerable:!0}):t,e)),de=e=>We(Y({},"__esModule",{value:!0}),e);var p=ue(()=>{});var ve={};je(ve,{createReadStream:()=>en,createWriteStream:()=>nn,default:()=>lt,existsSync:()=>Ke,lstatSync:()=>Qe,mkdirSync:()=>Xe,readFileSync:()=>Ge,readdirSync:()=>Je,rmdirSync:()=>$e,statSync:()=>ge,unlinkSync:()=>Ze,writeFileSync:()=>Ye});function me(e){return String(e).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Ue(e){var n=me(e);if(X[n]!==void 0)return X[n];for(var t=Object.keys(X),i=0;i<t.length;i++)if(n.endsWith("/"+t[i])||n===t[i])return X[t[i]]}function fe(e){var n=me(e);if((n===""||n===".")&&T["."]!==void 0)return T["."];if(T[n]!==void 0)return T[n];for(var t=Object.keys(T),i=0;i<t.length;i++)if(n.endsWith("/"+t[i])||n===t[i])return T[t[i]]}var X,T,Ge,Je,Ke,Ye,Xe,ge,Qe,Ze,$e,en,nn,lt,be=ue(()=>{"use strict";p();X={"package.json":`{
  "name": "jsonresume-theme-fresh",
  "version": "0.0.3",
  "description": "Fresh theme for JSON Resume",
  "author": "Tair Assimov",
  "repository": {
    "type": "git",
    "url": "https://github.com/assimovt/jsonresume-theme-fresh"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  }
}
`,"partials/awards.hbs":`{{#if resume.awards.length}}
<section id="awards">
  <div class="left">
    <h2>Awards</h2>
  </div>

  <div class="right">
    {{#each resume.awards}}
    <div class="item">
      {{#if date}}
      <div class="date">
        {{date}}
      </div>
      {{/if}}
      {{#if title}}
      <h3 class="title">
        {{title}}
      </h3>
      {{/if}}
      {{#if awarder}}
      <h4 class="awarder">
        {{awarder}}
      </h4>
      {{/if}}
      {{#if summary}}
      <div class="summary">
        <p>{{summary}}</p>
      </div>
      {{/if}}
    </div>
    {{/each}}
  </div>
</section>
{{/if}}
`,"partials/basics.hbs":`{{#resume.basics}}
  <section id="basics">
    <div class="left">
      {{#if picture}}
        <img class="picture" src="{{picture}}" alt="{{name}} avatar"/>
      {{else}}
        <img class="picture" src="https://api.adorable.io/avatars/285/{{name}}.png" alt="{{name}} avatar"/>
      {{/if}}
    </div>


    <div class="right">
      <h1>{{name}}</h1>
      <h2>{{label}}</h2>

      <div class="contact">
        {{#location}}
        <ul class="inline comma" id="location">
          {{#if address}}
          <li class="address">{{address}}</li>
          {{/if}}
          {{#if postalCode}}
          <li class="postalCode">{{postalCode}}</li>
          {{/if}}
          {{#if city}}
          <li class="city">{{city}}</li>
          {{/if}}
          {{#if region}}
          <li class="region">{{region}}</li>
          {{/if}}
          {{#if countryCode}}
          <li class="countryCode">{{countryCode}}</li>
          {{/if}}
        </ul>
        {{/location}}
      </div>

      <div class="contact">
        {{#if website}}
        <span class="website">
          <strong>Website: </strong>
          <a href="{{website}}" target="_blank">{{website}}</a>
        </span>
        {{/if}}

        {{#if email}}
        <span class="email">
          <strong>Email: </strong>
          <a href="mailto:{{email}}" target="_blank">{{email}}</a>
        </span>
        {{/if}}

        {{#if phone}}
        <span class="phone">
          <strong>Phone: </strong>
          <a href="tel:{{phone}}" target="_blank">{{phone}}</a>
        </span>
        {{/if}}
      </div>

      {{#if profiles.length}}
      <ul class="inline" id="profiles">
        {{#each profiles}}
          {{#if username}}
          <li class="network {{network}}">
            <a href="{{url}}" target="_blank">{{username}}</a>
          </li>
          {{/if}}
        {{/each}}
      </ul>
      {{/if}}
    </div>
  </section>

  {{#if summary}}
  <section id="summary">
    <div class="left">
      <h2>Summary</h2>
    </div>
    <div class="right">
      <p>{{summary}}</p>
    </div>
  </section>
  {{/if}}
{{/resume.basics}}
`,"partials/education.hbs":`{{#if resume.education.length}}
<section id="education">
  <div class="left">
    <h2>Education</h2>
  </div>

  <div class="right">
    {{#each resume.education}}
    <div class="item">
      <div class="date">
        {{#if startDate}}
        <span class="startDate">
          {{startDate}}
        </span>
        {{/if}}
        {{#if endDate}}
        <span class="endDate">
          - {{endDate}}
        </span>
        {{else}}
        <span class="endDate">
          - Present
        </span>
        {{/if}}
      </div>
      {{#if institution}}
      <h3 class="institution">
        {{institution}}
      </h3>
      {{/if}}
      {{#if area}}
      <h4 class="area">
        {{area}}
      </h4>
      {{/if}}
      {{#if studyType}}
      <div class="studyType">
        {{studyType}}
        {{#if gpa}}
        <em class="gpa">GPA: {{gpa}}</em>
        {{/if}}
      </div>
      {{/if}}
      {{#if courses.length}}
      <ul class="courses">
        {{#each courses}}
        <li>{{.}}</li>
        {{/each}}
      </ul>
      {{/if}}
    </div>
    {{/each}}
  </div>
</section>
{{/if}}
`,"partials/interests.hbs":`{{#if resume.interests.length}}
<section id="interests">
  <div class="left">
    <h2>Interests</h2>
  </div>

  <div class="right">
    {{#each resume.interests}}
    <div class="item">
      {{#if name}}
      <span class="name">
        {{name}}
      </span>
      {{/if}}
      {{#if keywords.length}}
      <ul class="keywords inline comma">
        {{#each keywords}}
        <li>{{.}}</li>
        {{/each}}
      </ul>
      {{/if}}
    </div>
    {{/each}}
  </div>
</section>
{{/if}}
`,"partials/languages.hbs":`{{#if resume.languages.length}}
<section id="languages">
  <div class="left">
    <h2>Languages</h2>
  </div>

  <div class="right">
    <ul class="language inline">
    {{#each resume.languages}}
      {{#if language}}
      <li>
        {{language}}
        {{#if fluency}}
        <em>{{fluency}}</em>
        {{/if}}
      <li>
      {{/if}}
    {{/each}}
    </ul>
  </div>
</section>
{{/if}}
`,"partials/publications.hbs":`{{#if resume.publications.length}}
<section id="publications">
  <div class="left">
    <h2>Publications</h2>
  </div>

  <div class="right">
    {{#each resume.publications}}
    <div class="item">
      {{#if releaseDate}}
      <div class="releaseDate">
        {{releaseDate}}
      </div>
      {{/if}}
      {{#if name}}
      <h3 class="name">
        {{name}}
      </h3>
      {{/if}}
      {{#if publisher}}
      <h4 class="publisher">
        {{publisher}}
      </h4>
      {{/if}}
      {{#if website}}
      <div class="website">
        <a href="{{website}}">Link</a>
      </div>
      {{/if}}
      {{#if summary}}
      <div class="summary">
        <p>{{summary}}</p>
      </div>
      {{/if}}
    </div>
    {{/each}}
  </div>
</section>
{{/if}}
`,"partials/references.hbs":`{{#if resume.references.length}}
<section id="references">
  <div class="left">
    <h2>References</h2>
  </div>

  <div class="right">
    {{#each resume.references}}
    <div class="item">
      {{#if reference}}
      <blockquote class="reference">
        {{reference}}
      </blockquote>
      {{/if}}
      {{#if name}}
      <h4 class="name">
        {{name}}
      </h4>
      {{/if}}
    </div>
    {{/each}}
  </div>
</section>
{{/if}}
`,"partials/skills.hbs":`{{#if resume.skills.length}}
<section id="skills">
  <div class="left">
    <h2>Skills</h2>
  </div>

  <div class="right">
    {{#each resume.skills}}
    <div class="item">
      {{#if name}}
      <span class="name">
        {{name}}
        {{#if level}}
        <em class="level">{{level}}</em>
        {{/if}}
      </span>
      {{/if}}
      {{#if keywords.length}}
      <ul class="keywords inline comma">
        {{#each keywords}}
        <li>{{.}}</li>
        {{/each}}
      </ul>
      {{/if}}
    </div>
    {{/each}}
  </div>
</section>
{{/if}}
`,"partials/volunteer.hbs":`{{#if resume.volunteer.length}}
<section id="volunteer">
  <div class="left">
    <h2>Volunteer</h2>
  </div>

  <div class="right">
    {{#each resume.volunteer}}
    <div class="item">
      <div class="date">
        {{#if startDate}}
        <span class="startDate">
          {{startDate}}
        </span>
        {{/if}}
        {{#if endDate}}
        <span class="endDate">
          - {{endDate}}
        </span>
        {{else}}
        <span class="endDate">
          - Present
        </span>
        {{/if}}
      </div>
      {{#if organization}}
      <h3 class="company">
        {{organization}}
      </h3>
      {{/if}}
      {{#if position}}
      <h4 class="position">
        {{position}}
      </h4>
      {{/if}}
      {{#if website}}
      <div class="website">
        <a href="{{website}}">{{website}}</a>
      </div>
      {{/if}}
      {{#if summary}}
      <div class="summary">
        <p>{{summary}}</p>
      </div>
      {{/if}}
      {{#if highlights.length}}
      <ul class="highlights">
        {{#each highlights}}
        <li>{{.}}</li>
        {{/each}}
      </ul>
      {{/if}}
    </div>
    {{/each}}
  </div>
</section>
{{/if}}
`,"partials/work.hbs":`{{#if resume.work.length}}
<section id="work">
  <div class="left">
    <h2>Work</h2>
  </div>

  <div class="right">
    {{#each resume.work}}
    <div class="item">
      <div class="date">
        {{#if startDate}}
        <span class="startDate">
          {{startDate}}
        </span>
        {{/if}}
        {{#if endDate}}
        <span class="endDate">
          - {{endDate}}
        </span>
        {{else}}
        <span class="endDate">
          - Present
        </span>
        {{/if}}
      </div>
      {{#if company}}
      <h3 class="name">
        {{company}}
      </h3>
      {{/if}}
      {{#if position}}
      <h4 class="position">
        {{position}}
      </h4>
      {{/if}}
      {{#if website}}
      <div class="website">
        <a href="{{website}}">{{website}}</a>
      </div>
      {{/if}}
      {{#if summary}}
      <div class="summary">
        <p>{{summary}}</p>
      </div>
      {{/if}}
      {{#if highlights.length}}
      <ul class="highlights">
        {{#each highlights}}
        <li>{{.}}</li>
        {{/each}}
      </ul>
      {{/if}}
    </div>
    {{/each}}
  </div>
</section>
{{/if}}
`,"public/index.html":`<!doctype html>
<html>
  <head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">

  <title>Richard Hendriks &sdot; Programmer</title>

  <style>
  /*===========================================================
  CSS Reset

  http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
============================================================*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;

  vertical-align: baseline;

  border: 0;

  font: inherit;
  font-size: 100%;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-spacing: 0;

  border-collapse: collapse;
}

/*===========================================================
  JSON Resume - Theme styles
============================================================*/

@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i');

* {
  box-sizing: border-box;
}

body {
  margin: 40px 0;

  color: #252525;
  background: #F6F9FC;

  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  line-height: 1.3;
}

h1 {
  letter-spacing: 0.2px;

  font-size: 2rem;
  font-weight: 600;
}

h2 {
  margin-bottom: 1.4rem;

  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: rgba(36,36,36,0.80);

  font-size: 1rem;
  font-weight: 600;
}

h3 {
  margin-bottom: 0.4rem;

  color: #252525;

  font-size: 1.2rem;
  font-weight: 600;
}

h4 {
  margin-bottom: 0.4rem;

  letter-spacing: 0.5px;

  color: rgba(36,36,36,0.80);

  font-size: 0.9rem;
  font-weight: 600;
  font-style: italic;
}

a {
  text-decoration: none;

  color: rgba(36,36,36,0.40);
}

a:hover {
  text-decoration: underline;
}

p {
  line-height: 1.8;
}

em {
  color: rgba(36,36,36,0.40);

  font-size: 0.9rem;
  font-weight: normal;
}

strong {
  color: rgba(37,37,37,0.80);

  font-size: 0.9rem;
  font-weight: 600;
}

blockquote {
  position: relative;

  padding-top: 0.2rem;
  padding-left: 1.4rem;
}

blockquote:before {
  position: absolute;
  top: -10px;
  left: 0;

  content: '\u201C';

  color: #D1D5D8;

  font-family: 'Garamond', 'Baskerville', 'Baskerville Old Face', 'Hoefler Text', 'Times New Roman', serif;
  font-size: 1.6rem;
  font-weight: 600;
}

li {
  padding: 0.4rem 0 0.4rem 1rem;

  line-height: 1.8;
}

li:before {
  display: inline-block;

  width: 1em;
  margin-left: -1em;

  content: '\u2022';

  color: #D1D5D8;
}

ul.inline {
  display: inline-block;

  list-style-type: none;
}

ul.inline li {
  display: inline-block;

  margin-right: 0.6rem;
  padding: 0;

  line-height: 1;
}

ul.inline em {
  margin-left: 0.1rem;
}

ul.inline li:before {
  content: '';
  content: none;
}

ul.comma li {
  margin: 0;
}

ul.comma li:not(:last-of-type):after {
  content: ',';
}

section {
  clear: both;

  padding: 2rem 0;

  border-bottom: 1px solid #F1F2FB;
}

#resume {
  position: relative;

  max-width: 980px;
  margin: 0 auto;
  padding: 0;

  border-radius: 4px;
  background: #FFFFFF;
  box-shadow: 1px 2px 10px 0 rgba(0,0,0,0.05);
}

.left {
  position: absolute;
  left: 0;

  padding: 0 40px 0 80px;
  padding-top: 0.1rem;
}

.left h2 {
  color: #20476A;

  font-size: 1rem;
}

.right {
  padding: 0 80px 0 250px;
}

.date, .releaseDate {
  margin-bottom: 0.6rem;

  color: rgba(36,36,36,0.40);

  font-size: 0.9rem;
}

#basics {
  border-bottom: 2px solid #F1F2FB;
}

#basics img.picture {
  width: 100px;
  height: 100px;

  border-radius: 50%;
}

#location {
  margin-bottom: 0.4rem;
}

#basics .contact {
  color: rgba(36,36,36,0.40);

  font-size: 0.9rem;
}

#basics .contact span {
  display: inline-block;

  padding-bottom: 0.4rem;
}

#basics .contact a {
  margin-right: 1rem;
}

#profiles li a {
  color: rgba(36,36,36,0.60);
}

#profiles .network {
  margin: 30px 30px 0 0;
  padding: 0 0 0 40px;

  background-size: 30px 30px;

  line-height: 30px;
}

#work .item,
#volunteer .item,
#awards .item,
#publications .item {
  margin-bottom: 4rem;
}

#work .item:last-child,
#volunteer .item:last-child,
#awards .item:last-child,
#publications .item:last-child {
  margin-bottom: 0;
}

#work .website,
#volunteer .website,
#awards .website,
#publications .website {
  margin-bottom: 1.4rem;
}

#work .summary,
#volunteer .summary,
#awards .summary,
#publications .summary {
  margin-bottom: 1.2rem;
}

#skills .name,
#interests .name {
  display: inline-block;

  width: 150px;
  margin: 0 1.4rem 1.4rem 0;

  vertical-align: top;
  letter-spacing: 0.5px;

  color: rgba(36,36,36,0.80);

  font-weight: 600;
}

#skills .keywords {
  max-width: 470px;
}

#education .studyType {
  margin-bottom: 1.4rem;
}

#references .name {
  padding: 1.2rem 1.2rem 0 0;

  text-align: right;
}

.copy {
  margin: 1.4rem auto 4rem auto;

  text-align: center;

  color: #C2C6C9;

  font-size: 0.8rem;
}

.copy a {
  text-decoration: underline;

  color: #C2C6C9;
}

/*===========================================================
  Responsiveness
============================================================*/

@media (max-width: 980px) {
  #resume {
    max-width: none;
    margin: 1.4rem;
  }
}

@media (max-width: 800px) {
  .left {
    position: static;

    padding: 0 40px;
  }
  .right {
    padding: 0 40px;
  }
  .contact {
    margin-bottom: 1.2rem;
  }
  #basics .left, #basics .right {
    text-align: center;
  }
}

/*===========================================================
  Social icons
============================================================*/

#profiles .network.Twitter {
  background: url("data:image/svg+xml;utf8,<svg enable-background='new 0 0 550 550' viewBox='0 0 550 550' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><g><circle cx='275' cy='275' fill='#2CBDE2' r='256'/><path d='M161.9,181.2c0,0,40.6,45.9,107.8,53.4c0,0-3.2-38.4,30.9-59.8c0,0,35.2-23.5,61.9,10.7     c0,0,25.6-5.3,35.2-11.7c0,0-7.5,14.5-20.3,27l28.8-5.7l-26.7,28.8c0,0,10.7,97.1-95.5,148.3c0,0-82.7,29.9-140.3-9.6     c0,0,70.4-10.7,77.9-26.7c0,0-37.4-4.3-47-36.3l20.3-1.1c0,0-35.2-3.2-39.5-53.4l23.5,3.2C179,248.4,141.6,237.8,161.9,181.2z' fill='#FFFFFF'/></g></g></svg>") no-repeat left top;
}

#profiles .network.SoundCloud {
  background: url("data:image/svg+xml;utf8,<svg style='enable-background:new 0 0 112.196 112.196;' viewBox='0 0 112.196 112.196' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><circle cx='56.098' cy='56.098' r='56.098' style='fill:#FF6A22;'/><g><path d='M16.707,68.833c-0.027,0.182-0.157,0.312-0.326,0.312c-0.169,0-0.299-0.13-0.325-0.316    l-0.593-4.438l0.593-4.512c0.025-0.188,0.155-0.318,0.325-0.318c0.168,0,0.298,0.13,0.326,0.318l0.706,4.517L16.707,68.833z     M19.728,71.529c-0.028,0.193-0.168,0.328-0.341,0.328c-0.168,0-0.315-0.135-0.338-0.328l-0.798-7.139l0.798-7.299    c0.024-0.188,0.17-0.328,0.338-0.328c0.173,0,0.313,0.137,0.341,0.328l0.908,7.299L19.728,71.529z M22.988,72.738    c-0.023,0.232-0.197,0.397-0.406,0.397c-0.216,0-0.387-0.165-0.408-0.397l-0.757-8.342l0.757-8.659    c0.019-0.235,0.192-0.403,0.408-0.403c0.209,0,0.382,0.168,0.406,0.403l0.859,8.659L22.988,72.738z M26.28,73.003    c-0.024,0.266-0.232,0.467-0.479,0.467c-0.253,0-0.46-0.201-0.481-0.467l-0.715-8.607l0.715-8.897    c0.021-0.268,0.228-0.469,0.481-0.469c0.247,0,0.455,0.201,0.479,0.469l0.811,8.897L26.28,73.003z M29.59,73.072    c-0.017,0.309-0.258,0.538-0.543,0.538c-0.294,0-0.527-0.229-0.547-0.538l-0.676-8.677l0.676-8.254    c0.021-0.307,0.253-0.536,0.547-0.536c0.29,0,0.526,0.229,0.543,0.532l0.766,8.258L29.59,73.072z M32.932,73.077v-0.005    c-0.02,0.342-0.291,0.612-0.617,0.612c-0.327,0-0.598-0.271-0.617-0.607l-0.631-8.677l0.631-13.429    c0.019-0.342,0.29-0.612,0.617-0.612c0.327,0,0.598,0.271,0.617,0.607l0.715,13.434L32.932,73.077z M36.249,73.072v-0.005    c-0.02,0.378-0.319,0.679-0.689,0.679c-0.363,0-0.663-0.301-0.681-0.679l-0.596-8.621l0.596-16.501    c0.018-0.378,0.318-0.677,0.681-0.677c0.37,0,0.669,0.299,0.689,0.677l0.671,16.501L36.249,73.072z M39.69,72.939v-0.005    c-0.015,0.421-0.346,0.748-0.753,0.748c-0.407,0-0.738-0.327-0.753-0.743l-0.553-8.533c0,0,0.553-17.876,0.553-17.881    c0.016-0.416,0.346-0.749,0.753-0.749c0.407,0,0.739,0.333,0.753,0.749l0.625,17.881L39.69,72.939z M43.111,72.882    c-0.016,0.458-0.375,0.817-0.822,0.817c-0.448,0-0.807-0.359-0.823-0.813l-0.516-8.482l0.516-18.478    c0.016-0.46,0.375-0.818,0.823-0.818c0.447,0,0.807,0.358,0.822,0.818l0.573,18.478L43.111,72.882z M46.554,72.807v-0.005    c-0.016,0.495-0.403,0.888-0.894,0.888c-0.484,0-0.879-0.393-0.888-0.883l-0.474-8.401L44.767,46.4    c0.014-0.502,0.408-0.89,0.893-0.89c0.491,0,0.878,0.388,0.894,0.89l0.532,18.006L46.554,72.807z M50.025,72.757V72.75    c-0.008,0.539-0.434,0.954-0.96,0.954c-0.53,0-0.95-0.415-0.966-0.947l-0.428-8.352L48.1,47.058    c0.016-0.538,0.436-0.959,0.966-0.959c0.526,0,0.952,0.421,0.96,0.959l0.485,17.352L50.025,72.757z M53.566,71.876l-0.043,0.818    c-0.005,0.285-0.125,0.543-0.308,0.729c-0.188,0.183-0.446,0.3-0.719,0.3c-0.318,0-0.598-0.146-0.79-0.376    c-0.142-0.167-0.23-0.383-0.24-0.61c-0.003-0.01-0.003-0.023-0.003-0.037c0,0-0.395-8.286-0.395-8.3l0.39-20.443l0.005-0.196    c0.003-0.358,0.193-0.677,0.477-0.86c0.159-0.106,0.347-0.168,0.557-0.168c0.206,0,0.401,0.064,0.564,0.177    c0.277,0.185,0.458,0.496,0.463,0.852l0.434,20.648L53.566,71.876z M57.007,72.587v-0.01c-0.007,0.604-0.502,1.096-1.1,1.096    c-0.6,0-1.094-0.492-1.1-1.091l-0.227-4.03l-0.223-4.138l0.45-22.406v-0.113c0.001-0.34,0.161-0.644,0.408-0.849    c0.189-0.155,0.432-0.249,0.692-0.249c0.207,0,0.399,0.057,0.563,0.153c0.313,0.196,0.532,0.543,0.542,0.94l0.487,22.523    L57.007,72.587z M86.74,73.695c0,0-27.683,0-27.712,0c-0.598-0.061-1.071-0.537-1.081-1.15V40.821    c0.01-0.584,0.211-0.885,0.963-1.174c1.941-0.752,4.139-1.196,6.398-1.196c9.215,0,16.766,7.069,17.567,16.074    c1.186-0.495,2.496-0.777,3.865-0.777c5.518,0,9.992,4.476,9.992,9.998C96.732,69.267,92.258,73.695,86.74,73.695L86.74,73.695z' style='fill:#F1F2F2;'/></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>") no-repeat left top;
}

#profiles .network.Facebook {
  background: url("data:image/svg+xml;utf8,<svg enable-background='new 0 0 550 550' viewBox='0 0 550 550' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><g><circle cx='275' cy='275' fill='#3F65A6' r='256'/><path d='M236.1,190.8c0,7.4,0,40.4,0,40.4h-29.6v49.4h29.6V416h60.8V280.5h40.8     c0,0,3.8-23.7,5.7-49.6c-5.3,0-46.2,0-46.2,0s0-28.7,0-33.8c0-5,6.6-11.8,13.2-11.8c6.5,0,20.3,0,33.1,0c0-6.7,0-30,0-51.4     c-17.1,0-36.5,0-45,0C234.6,134,236.1,183.4,236.1,190.8z' fill='#FFFFFF' /></g></g></svg>") no-repeat left top;
}

#profiles .network.Skype {
  background: url("data:image/svg+xml;utf8,<svg enable-background='new 0 0 550 550' viewBox='0 0 550 550' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><g><circle cx='275' cy='275' fill='#2CBDE2' r='256'/><g><path d='M380,299c1.6-7.4,2.5-15,2.5-22.8c0-58.7-47.6-106.3-106.3-106.3c-6.2,0-12.3,0.5-18.2,1.5      c-9.5-6-20.7-9.5-32.8-9.5c-34.1,0-61.7,27.6-61.7,61.7c0,11.4,3.1,22,8.5,31.2c-1.4,6.9-2.1,14.1-2.1,21.4      c0,58.7,47.6,106.3,106.3,106.3c6.6,0,13.1-0.6,19.5-1.8c8.7,4.7,18.6,7.3,29.1,7.3c34.1,0,61.7-27.6,61.7-61.6      C386.4,316.5,384.1,307.3,380,299z' fill='#31A5DD'/><path d='M244.3,206.3L244.3,206.3c-8.9,3.3-15.9,8.1-20.6,14.3c-4.8,6.3-7.2,13.5-7.2,21.5      c0,8.4,2.3,15.6,6.9,21.3c4.5,5.6,10.6,10.1,18.3,13.4c7.5,3.2,16.8,6,27.9,8.3c8.1,1.7,14.7,3.3,19.5,4.8      c4.6,1.4,8.4,3.6,11.3,6.3c2.8,2.6,4.1,5.9,4.1,10.1c0,5.3-2.6,9.7-7.9,13.3c-5.4,3.7-12.6,5.6-21.4,5.6      c-6.4,0-11.6-0.9-15.5-2.8c-3.8-1.8-6.8-4.1-8.9-6.9c-2.2-2.9-4.2-6.5-6.1-10.8c-1.7-4-3.8-7-6.2-9.1c-2.6-2.2-5.7-3.3-9.4-3.3      c-4.5,0-8.2,1.4-11.1,4.1c-2.9,2.8-4.4,6.2-4.4,10c0,6.2,2.3,12.7,6.8,19.2c4.5,6.4,10.4,11.7,17.5,15.5c10,5.3,22.8,8,38.1,8      c12.7,0,23.9-2,33.2-5.8c9.4-3.9,16.7-9.4,21.6-16.4c4.9-7,7.4-15,7.4-23.7c0-7.3-1.4-13.6-4.3-18.7c-2.9-5.1-6.9-9.4-12-12.7      c-5-3.2-11.1-6-18.2-8.3c-7-2.2-14.9-4.3-23.5-6.2c-6.8-1.6-11.8-2.8-14.7-3.6c-2.9-0.8-5.8-1.9-8.6-3.3c-2.7-1.3-4.8-3-6.3-4.8      c-1.4-1.8-2.1-3.8-2.1-6.2c0-4,2.2-7.3,6.6-10.2c4.6-3,10.8-4.5,18.4-4.5c8.2,0,14.2,1.4,17.7,4.1c3.7,2.8,6.9,6.8,9.5,11.8      c2.3,4,4.4,6.7,6.3,8.5c2.1,1.9,5.2,2.9,9.2,2.9c4.3,0,8-1.5,10.9-4.6c2.9-3,4.3-6.5,4.3-10.3c0-4-1.1-8-3.3-12.1      c-2.2-4-5.7-7.9-10.3-11.6c-4.6-3.6-10.6-6.6-17.6-8.7c-7-2.2-15.3-3.3-24.8-3.3C263.6,201.4,253.1,203,244.3,206.3z' fill='#FFFFFF'/></g></g></g></svg>") no-repeat left top;
}

#profiles .network.LinkedIn {
  background: url("data:image/svg+xml;utf8,<svg enable-background='new 0 0 550 550' viewBox='0 0 550 550' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><g><circle cx='275' cy='275' fill='#04689B' r='256'/><path d='M219.2,366.5h-38.8V242.2h38.8V366.5z M198.8,226.6h-0.3c-14.1,0-23.2-9.5-23.2-21.6     c0-12.3,9.4-21.6,23.7-21.6c14.3,0,23.1,9.3,23.4,21.5C222.5,217.1,213.4,226.6,198.8,226.6z M374.6,366.5h-44v-64.3     c0-16.8-6.9-28.3-22-28.3c-11.6,0-18,7.7-21,15.2c-1.1,2.7-0.9,6.4-0.9,10.2v67.3H243c0,0,0.6-113.9,0-124.3h43.6v19.5     c2.6-8.5,16.5-20.7,38.8-20.7c27.6,0,49.3,17.9,49.3,56.4V366.5z' fill='#FFFFFF'/></g></g></svg>") no-repeat left top;
}

#profiles .network.GitHub {
  background: url("data:image/svg+xml;utf8,<svg enable-background='new 0 0 550 550' viewBox='0 0 550 550' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><g><circle cx='275' cy='275' fill='#BF5B94' r='256'/><path d='M484.7,292.1c0.1,0,0.3,0.1,0.4,0.2c0,0,0.1,0,0.1,0.1c0.1,0,0.2,0.1,0.3,0.2c0,0,0.1,0.1,0.1,0.1     c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.4,0.3c0,0,0,0,0.1,0c0.1,0.1,0.3,0.2,0.4,0.4     c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0.1,0.1,0.1,0.1     c0.1,0.1,0.3,0.3,0.4,0.4v-9.1c-20.6,0-40.6,0-61,0c0.6-9.2,2-18.7,1.6-28.1c-0.8-20.4-8.1-38.6-19.5-55.5     c-2.2-3.3-2.6-8.6-2.3-12.8c1.1-16,4.3-31.9,3.9-47.8c-0.4-17.6-7.4-21.7-24.6-17.7c-2.7,0.6-5.4,1.4-8,2.2     c-12.1,4-23,10.3-32.1,19.6c-4.4,4.5-8.5,5.1-14.6,3.3c-30.9-9.6-62.1-10.1-93.1-0.9c-8.2,2.4-13.2,0.8-19-4.6     c-12.9-12.1-28.3-18.5-45.9-20.8c-9.2-1.2-13.9,3.2-14.4,10.3c-1.1,14.5-2.4,29.5,0.3,43.6c2.5,13.1,0.8,22.8-6.5,33.9     c-13.5,20.4-18,43.4-13.5,67.8c0.4,2,0.2,4.1,0.4,7.8c-8.2-0.5-15.3-1.5-22.4-1.3c-17.4,0.5-34.8,1.2-52.1,2.6     c-1.5,0.1-2.8,0.2-4,0.2v6c25.2-7.8,76.3-6.3,82.4,4c-27.7-2.5-54.7-3.4-80.4,9.3c0.2,1.3,0.5,2.6,0.7,3.9     c11.9-3.1,24-6.5,36.2-9.1c5.3-1.1,11,0,16.4-0.4c17.9-1.5,30.8,2.4,42.2,19.8c10.2,15.6,24.6,25.2,40.8,31.7     c11.9,4.7,24.7,7.8,37.6,10.3c1.6,0.3,3.1,0.6,4.5,0.8C229,389.7,207,395.9,181,394.2c-4.3-0.3-8.1-1.2-11.6-2.7     c-9.3-3.8-16.2-11.2-22.5-19.5c-7.7-10.2-16.9-18-30-19.6c-3.1-0.4-6.2,0.4-7.4,0.5c12.8,18.2,25.2,36.4,38.1,54.2     c1.6,2.2,3.3,4.1,5.2,5.7c8.8,7.7,20.3,9.6,32.2,10.1c9.2,0.3,18.3,0.1,27.4,0.1c0,14.4,0,27.9,0,41.3h20.5     c-0.3-5.9-0.1-11.9,0.3-17.8c0.4-6.4,3.8-12.3,10.7-10.5c3.8,1,8.6,6.7,9.1,10.8c0.7,5.7,0.8,11.5,0.7,17.5h19.9     c-0.1-10.5-0.2-21,0.6-31.4c0.2-3.4,6.9-9.6,9.5-9c4,0.9,9.8,6.1,10.1,9.9c0.8,10,0.7,20,0.6,30.5h20c-0.1-6.7-0.2-12.9,0.6-19.1     c0.5-3.6,6.1-9,9.4-9c3.3,0,8.6,5.2,9.5,9c1.4,6.1,1.7,12.8,0.7,19.1h18.3c1.1-0.4,2.2-0.8,3.3-1.3c-1.5-18.3-1.7-35.6-4.7-52.5     c-3.1-17.9-13.3-32.6-26.6-44.9c14.9-4.7,29.6-8.4,43.7-14c22-8.7,39.1-23.4,50.5-44.6c1.5-2.8,5.2-6,8.1-6.3     c0.6-0.1,1.2-0.1,1.9-0.2c0.3,0,0.5,0,0.8-0.1c0.3,0,0.7-0.1,1-0.1c0.3,0,0.7-0.1,1-0.1c0.3,0,0.5,0,0.8-0.1     c0.4,0,0.8-0.1,1.2-0.1c0.2,0,0.4,0,0.7,0c0.4,0,0.9-0.1,1.3-0.1c0.2,0,0.4,0,0.6,0c0.4,0,0.9-0.1,1.3-0.1c0.2,0,0.3,0,0.5,0     c0.5,0,0.9-0.1,1.4-0.1c0.2,0,0.3,0,0.5,0c0.5,0,1,0,1.4-0.1c0.1,0,0.3,0,0.4,0c0.5,0,1,0,1.5-0.1c0.1,0,0.3,0,0.4,0     c0.5,0,1,0,1.5,0c0.1,0,0.2,0,0.4,0c0.5,0,1,0,1.5,0c0.1,0,0.2,0,0.3,0c0.5,0,1,0,1.5,0c0.1,0,0.2,0,0.3,0c0.5,0,1,0,1.6,0     c0.1,0,0.2,0,0.3,0c0.5,0,1.1,0,1.6,0c0.1,0,0.2,0,0.3,0c0.5,0,1.1,0,1.6,0c0.1,0,0.2,0,0.3,0c0.5,0,1.1,0,1.6,0.1     c0.1,0,0.2,0,0.2,0c0.5,0,1.1,0.1,1.6,0.1c0.1,0,0.2,0,0.2,0c0.6,0,1.1,0.1,1.7,0.1c0.1,0,0.1,0,0.2,0c0.6,0,1.1,0.1,1.7,0.1     c0.1,0,0.1,0,0.2,0c0.6,0,1.1,0.1,1.7,0.2c0.1,0,0.1,0,0.2,0c0.6,0.1,1.1,0.1,1.7,0.2c0.1,0,0.1,0,0.2,0c0.6,0.1,1.1,0.1,1.7,0.2     c0.1,0,0.1,0,0.2,0c0.6,0.1,1.2,0.2,1.7,0.2c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.2,1.8,0.3c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.2,1.8,0.3     c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.2,1.8,0.3c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.2,1.8,0.4c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.3,1.8,0.4     c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.3,1.9,0.5c0,0,0,0,0.1,0c0.6,0.2,1.2,0.3,1.9,0.5c0,0,0,0,0,0c0.6,0.2,1.3,0.4,1.9,0.5     c0,0,0,0,0,0c0.6,0.2,1.3,0.4,1.9,0.6c0.4-2.4,0.8-4.9,1.2-7.3c-0.2,0-0.4,0-0.6,0c-21-1.1-39.7-2.1-57.5-3.1     c-1.1-0.1-2.3-0.1-3.4-0.2C432,288.9,468.4,286.8,484.7,292.1z' fill='#FFFFFF'/></g></g></svg>") no-repeat left top;
}

  </style>

  </head>
  <body>

  <div id="resume">
      <section id="basics">
        <div class="left">
            <img class="picture" src="https://api.adorable.io/avatars/285/Richard Hendriks.png" alt="Richard Hendriks avatar"/>
        </div>
    
    
        <div class="right">
          <h1>Richard Hendriks</h1>
          <h2>Programmer</h2>
    
          <div class="contact">
            <ul class="inline comma" id="location">
              <li class="address">2712 Broadway St</li>
              <li class="postalCode">CA 94115</li>
              <li class="city">San Francisco</li>
              <li class="region">California</li>
              <li class="countryCode">US</li>
            </ul>
          </div>
    
          <div class="contact">
            <span class="website">
              <strong>Website: </strong>
              <a href="http://richardhendricks.com" target="_blank">http://richardhendricks.com</a>
            </span>
    
            <span class="email">
              <strong>Email: </strong>
              <a href="mailto:richard.hendriks@mail.com" target="_blank">richard.hendriks@mail.com</a>
            </span>
    
            <span class="phone">
              <strong>Phone: </strong>
              <a href="tel:(912) 555-4321" target="_blank">(912) 555-4321</a>
            </span>
          </div>
    
          <ul class="inline" id="profiles">
              <li class="network Twitter">
                <a href="" target="_blank">neutralthoughts</a>
              </li>
              <li class="network SoundCloud">
                <a href="https://soundcloud.com/dandymusicnl" target="_blank">dandymusicnl</a>
              </li>
          </ul>
        </div>
      </section>
    
      <section id="summary">
        <div class="left">
          <h2>Summary</h2>
        </div>
        <div class="right">
          <p>Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a \u201Clength-limited\u201D conversation!</p>
        </div>
      </section>
    <section id="work">
      <div class="left">
        <h2>Work</h2>
      </div>
    
      <div class="right">
        <div class="item">
          <div class="date">
            <span class="startDate">
              2013-12-01
            </span>
            <span class="endDate">
              - 2014-12-01
            </span>
          </div>
          <h3 class="name">
            Pied Piper
          </h3>
          <h4 class="position">
            CEO/President
          </h4>
          <div class="website">
            <a href="http://piedpiper.com">http://piedpiper.com</a>
          </div>
          <div class="summary">
            <p>Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores\u2122 that are not merely competitive, but approach the theoretical limit of lossless compression.</p>
          </div>
          <ul class="highlights">
            <li>Build an algorithm for artist to detect if their music was violating copy right infringement laws</li>
            <li>Successfully won Techcrunch Disrupt</li>
            <li>Optimized an algorithm that holds the current world record for Weisman Scores</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="volunteer">
      <div class="left">
        <h2>Volunteer</h2>
      </div>
    
      <div class="right">
        <div class="item">
          <div class="date">
            <span class="startDate">
              2012-01-01
            </span>
            <span class="endDate">
              - 2013-01-01
            </span>
          </div>
          <h3 class="company">
            CoderDojo
          </h3>
          <h4 class="position">
            Teacher
          </h4>
          <div class="website">
            <a href="http://coderdojo.com/">http://coderdojo.com/</a>
          </div>
          <div class="summary">
            <p>Global movement of free coding clubs for young people.</p>
          </div>
          <ul class="highlights">
            <li>Awarded &#x27;Teacher of the Month&#x27;</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="education">
      <div class="left">
        <h2>Education</h2>
      </div>
    
      <div class="right">
        <div class="item">
          <div class="date">
            <span class="startDate">
              2011-06-01
            </span>
            <span class="endDate">
              - 2014-01-01
            </span>
          </div>
          <h3 class="institution">
            University of Oklahoma
          </h3>
          <h4 class="area">
            Information Technology
          </h4>
          <div class="studyType">
            Bachelor
            <em class="gpa">GPA: 4.0</em>
          </div>
          <ul class="courses">
            <li>DB1101 - Basic SQL</li>
            <li>CS2011 - Java Introduction</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="awards">
      <div class="left">
        <h2>Awards</h2>
      </div>
    
      <div class="right">
        <div class="item">
          <div class="date">
            2014-11-01
          </div>
          <h3 class="title">
            Digital Compression Pioneer Award
          </h3>
          <h4 class="awarder">
            Techcrunch
          </h4>
          <div class="summary">
            <p>There is no spoon.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="publications">
      <div class="left">
        <h2>Publications</h2>
      </div>
    
      <div class="right">
        <div class="item">
          <div class="releaseDate">
            2014-10-01
          </div>
          <h3 class="name">
            Video compression for 3d media
          </h3>
          <h4 class="publisher">
            Hooli
          </h4>
          <div class="website">
            <a href="http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)">Link</a>
          </div>
          <div class="summary">
            <p>Innovative middle-out compression algorithm that changes the way we store data.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="skills">
      <div class="left">
        <h2>Skills</h2>
      </div>
    
      <div class="right">
        <div class="item">
          <span class="name">
            Web Development
            <em class="level">Master</em>
          </span>
          <ul class="keywords inline comma">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div class="item">
          <span class="name">
            Compression
            <em class="level">Master</em>
          </span>
          <ul class="keywords inline comma">
            <li>Mpeg</li>
            <li>MP4</li>
            <li>GIF</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="languages">
      <div class="left">
        <h2>Languages</h2>
      </div>
    
      <div class="right">
        <ul class="language inline">
          <li>
            English
            <em>Native speaker</em>
          <li>
        </ul>
      </div>
    </section>
    <section id="interests">
      <div class="left">
        <h2>Interests</h2>
      </div>
    
      <div class="right">
        <div class="item">
          <span class="name">
            Wildlife
          </span>
          <ul class="keywords inline comma">
            <li>Ferrets</li>
            <li>Unicorns</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="references">
      <div class="left">
        <h2>References</h2>
      </div>
    
      <div class="right">
        <div class="item">
          <blockquote class="reference">
            It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company.
          </blockquote>
          <h4 class="name">
            Erlich Bachman
          </h4>
        </div>
      </div>
    </section>
  </div>

  <div class="copy">
    Powered by <a href="https://jsonresume.org" target="_blank">JSON Resume</a> &sdot;
    Theme by <a href="https://github.com/assimovt">Tair Assimov</a>
  </div>
  </body>
</html>
`,"resume.hbs":`<!doctype html>
<html>
  <head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">

  <title>{{#resume.basics}}{{name}} &sdot; {{label}}{{/resume.basics}}</title>

  <style>
  {{{css}}}
  </style>

  </head>
  <body>

  <div id="resume">
    {{> basics }}
    {{> work }}
    {{> volunteer }}
    {{> education }}
    {{> awards }}
    {{> publications }}
    {{> skills }}
    {{> languages }}
    {{> interests }}
    {{> references }}
  </div>

  <div class="copy">
    Powered by <a href="https://jsonresume.org" target="_blank">JSON Resume</a> &sdot;
    Theme by <a href="https://github.com/assimovt">Tair Assimov</a>
  </div>
  </body>
</html>
`,"style.css":`/*===========================================================
  CSS Reset

  http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
============================================================*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;

  vertical-align: baseline;

  border: 0;

  font: inherit;
  font-size: 100%;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-spacing: 0;

  border-collapse: collapse;
}

/*===========================================================
  JSON Resume - Theme styles
============================================================*/

@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i');

* {
  box-sizing: border-box;
}

body {
  margin: 40px 0;

  color: #252525;
  background: #F6F9FC;

  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  line-height: 1.3;
}

h1 {
  letter-spacing: 0.2px;

  font-size: 2rem;
  font-weight: 600;
}

h2 {
  margin-bottom: 1.4rem;

  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: rgba(36,36,36,0.80);

  font-size: 1rem;
  font-weight: 600;
}

h3 {
  margin-bottom: 0.4rem;

  color: #252525;

  font-size: 1.2rem;
  font-weight: 600;
}

h4 {
  margin-bottom: 0.4rem;

  letter-spacing: 0.5px;

  color: rgba(36,36,36,0.80);

  font-size: 0.9rem;
  font-weight: 600;
  font-style: italic;
}

a {
  text-decoration: none;

  color: rgba(36,36,36,0.40);
}

a:hover {
  text-decoration: underline;
}

p {
  line-height: 1.8;
}

em {
  color: rgba(36,36,36,0.40);

  font-size: 0.9rem;
  font-weight: normal;
}

strong {
  color: rgba(37,37,37,0.80);

  font-size: 0.9rem;
  font-weight: 600;
}

blockquote {
  position: relative;

  padding-top: 0.2rem;
  padding-left: 1.4rem;
}

blockquote:before {
  position: absolute;
  top: -10px;
  left: 0;

  content: '\u201C';

  color: #D1D5D8;

  font-family: 'Garamond', 'Baskerville', 'Baskerville Old Face', 'Hoefler Text', 'Times New Roman', serif;
  font-size: 1.6rem;
  font-weight: 600;
}

li {
  padding: 0.4rem 0 0.4rem 1rem;

  line-height: 1.8;
}

li:before {
  display: inline-block;

  width: 1em;
  margin-left: -1em;

  content: '\u2022';

  color: #D1D5D8;
}

ul.inline {
  display: inline-block;

  list-style-type: none;
}

ul.inline li {
  display: inline-block;

  margin-right: 0.6rem;
  padding: 0;

  line-height: 1;
}

ul.inline em {
  margin-left: 0.1rem;
}

ul.inline li:before {
  content: '';
  content: none;
}

ul.comma li {
  margin: 0;
}

ul.comma li:not(:last-of-type):after {
  content: ',';
}

section {
  clear: both;

  padding: 2rem 0;

  border-bottom: 1px solid #F1F2FB;
}

#resume {
  position: relative;

  max-width: 980px;
  margin: 0 auto;
  padding: 0;

  border-radius: 4px;
  background: #FFFFFF;
  box-shadow: 1px 2px 10px 0 rgba(0,0,0,0.05);
}

.left {
  position: absolute;
  left: 0;

  padding: 0 40px 0 80px;
  padding-top: 0.1rem;
}

.left h2 {
  color: #20476A;

  font-size: 1rem;
}

.right {
  padding: 0 80px 0 250px;
}

.date, .releaseDate {
  margin-bottom: 0.6rem;

  color: rgba(36,36,36,0.40);

  font-size: 0.9rem;
}

#basics {
  border-bottom: 2px solid #F1F2FB;
}

#basics img.picture {
  width: 100px;
  height: 100px;

  border-radius: 50%;
}

#location {
  margin-bottom: 0.4rem;
}

#basics .contact {
  color: rgba(36,36,36,0.40);

  font-size: 0.9rem;
}

#basics .contact span {
  display: inline-block;

  padding-bottom: 0.4rem;
}

#basics .contact a {
  margin-right: 1rem;
}

#profiles li a {
  color: rgba(36,36,36,0.60);
}

#profiles .network {
  margin: 30px 30px 0 0;
  padding: 0 0 0 40px;

  background-size: 30px 30px;

  line-height: 30px;
}

#work .item,
#volunteer .item,
#awards .item,
#publications .item {
  margin-bottom: 4rem;
}

#work .item:last-child,
#volunteer .item:last-child,
#awards .item:last-child,
#publications .item:last-child {
  margin-bottom: 0;
}

#work .website,
#volunteer .website,
#awards .website,
#publications .website {
  margin-bottom: 1.4rem;
}

#work .summary,
#volunteer .summary,
#awards .summary,
#publications .summary {
  margin-bottom: 1.2rem;
}

#skills .name,
#interests .name {
  display: inline-block;

  width: 150px;
  margin: 0 1.4rem 1.4rem 0;

  vertical-align: top;
  letter-spacing: 0.5px;

  color: rgba(36,36,36,0.80);

  font-weight: 600;
}

#skills .keywords {
  max-width: 470px;
}

#education .studyType {
  margin-bottom: 1.4rem;
}

#references .name {
  padding: 1.2rem 1.2rem 0 0;

  text-align: right;
}

.copy {
  margin: 1.4rem auto 4rem auto;

  text-align: center;

  color: #C2C6C9;

  font-size: 0.8rem;
}

.copy a {
  text-decoration: underline;

  color: #C2C6C9;
}

/*===========================================================
  Responsiveness
============================================================*/

@media (max-width: 980px) {
  #resume {
    max-width: none;
    margin: 1.4rem;
  }
}

@media (max-width: 800px) {
  .left {
    position: static;

    padding: 0 40px;
  }
  .right {
    padding: 0 40px;
  }
  .contact {
    margin-bottom: 1.2rem;
  }
  #basics .left, #basics .right {
    text-align: center;
  }
}

/*===========================================================
  Social icons
============================================================*/

#profiles .network.Twitter {
  background: url("data:image/svg+xml;utf8,<svg enable-background='new 0 0 550 550' viewBox='0 0 550 550' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><g><circle cx='275' cy='275' fill='#2CBDE2' r='256'/><path d='M161.9,181.2c0,0,40.6,45.9,107.8,53.4c0,0-3.2-38.4,30.9-59.8c0,0,35.2-23.5,61.9,10.7     c0,0,25.6-5.3,35.2-11.7c0,0-7.5,14.5-20.3,27l28.8-5.7l-26.7,28.8c0,0,10.7,97.1-95.5,148.3c0,0-82.7,29.9-140.3-9.6     c0,0,70.4-10.7,77.9-26.7c0,0-37.4-4.3-47-36.3l20.3-1.1c0,0-35.2-3.2-39.5-53.4l23.5,3.2C179,248.4,141.6,237.8,161.9,181.2z' fill='#FFFFFF'/></g></g></svg>") no-repeat left top;
}

#profiles .network.SoundCloud {
  background: url("data:image/svg+xml;utf8,<svg style='enable-background:new 0 0 112.196 112.196;' viewBox='0 0 112.196 112.196' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><circle cx='56.098' cy='56.098' r='56.098' style='fill:#FF6A22;'/><g><path d='M16.707,68.833c-0.027,0.182-0.157,0.312-0.326,0.312c-0.169,0-0.299-0.13-0.325-0.316    l-0.593-4.438l0.593-4.512c0.025-0.188,0.155-0.318,0.325-0.318c0.168,0,0.298,0.13,0.326,0.318l0.706,4.517L16.707,68.833z     M19.728,71.529c-0.028,0.193-0.168,0.328-0.341,0.328c-0.168,0-0.315-0.135-0.338-0.328l-0.798-7.139l0.798-7.299    c0.024-0.188,0.17-0.328,0.338-0.328c0.173,0,0.313,0.137,0.341,0.328l0.908,7.299L19.728,71.529z M22.988,72.738    c-0.023,0.232-0.197,0.397-0.406,0.397c-0.216,0-0.387-0.165-0.408-0.397l-0.757-8.342l0.757-8.659    c0.019-0.235,0.192-0.403,0.408-0.403c0.209,0,0.382,0.168,0.406,0.403l0.859,8.659L22.988,72.738z M26.28,73.003    c-0.024,0.266-0.232,0.467-0.479,0.467c-0.253,0-0.46-0.201-0.481-0.467l-0.715-8.607l0.715-8.897    c0.021-0.268,0.228-0.469,0.481-0.469c0.247,0,0.455,0.201,0.479,0.469l0.811,8.897L26.28,73.003z M29.59,73.072    c-0.017,0.309-0.258,0.538-0.543,0.538c-0.294,0-0.527-0.229-0.547-0.538l-0.676-8.677l0.676-8.254    c0.021-0.307,0.253-0.536,0.547-0.536c0.29,0,0.526,0.229,0.543,0.532l0.766,8.258L29.59,73.072z M32.932,73.077v-0.005    c-0.02,0.342-0.291,0.612-0.617,0.612c-0.327,0-0.598-0.271-0.617-0.607l-0.631-8.677l0.631-13.429    c0.019-0.342,0.29-0.612,0.617-0.612c0.327,0,0.598,0.271,0.617,0.607l0.715,13.434L32.932,73.077z M36.249,73.072v-0.005    c-0.02,0.378-0.319,0.679-0.689,0.679c-0.363,0-0.663-0.301-0.681-0.679l-0.596-8.621l0.596-16.501    c0.018-0.378,0.318-0.677,0.681-0.677c0.37,0,0.669,0.299,0.689,0.677l0.671,16.501L36.249,73.072z M39.69,72.939v-0.005    c-0.015,0.421-0.346,0.748-0.753,0.748c-0.407,0-0.738-0.327-0.753-0.743l-0.553-8.533c0,0,0.553-17.876,0.553-17.881    c0.016-0.416,0.346-0.749,0.753-0.749c0.407,0,0.739,0.333,0.753,0.749l0.625,17.881L39.69,72.939z M43.111,72.882    c-0.016,0.458-0.375,0.817-0.822,0.817c-0.448,0-0.807-0.359-0.823-0.813l-0.516-8.482l0.516-18.478    c0.016-0.46,0.375-0.818,0.823-0.818c0.447,0,0.807,0.358,0.822,0.818l0.573,18.478L43.111,72.882z M46.554,72.807v-0.005    c-0.016,0.495-0.403,0.888-0.894,0.888c-0.484,0-0.879-0.393-0.888-0.883l-0.474-8.401L44.767,46.4    c0.014-0.502,0.408-0.89,0.893-0.89c0.491,0,0.878,0.388,0.894,0.89l0.532,18.006L46.554,72.807z M50.025,72.757V72.75    c-0.008,0.539-0.434,0.954-0.96,0.954c-0.53,0-0.95-0.415-0.966-0.947l-0.428-8.352L48.1,47.058    c0.016-0.538,0.436-0.959,0.966-0.959c0.526,0,0.952,0.421,0.96,0.959l0.485,17.352L50.025,72.757z M53.566,71.876l-0.043,0.818    c-0.005,0.285-0.125,0.543-0.308,0.729c-0.188,0.183-0.446,0.3-0.719,0.3c-0.318,0-0.598-0.146-0.79-0.376    c-0.142-0.167-0.23-0.383-0.24-0.61c-0.003-0.01-0.003-0.023-0.003-0.037c0,0-0.395-8.286-0.395-8.3l0.39-20.443l0.005-0.196    c0.003-0.358,0.193-0.677,0.477-0.86c0.159-0.106,0.347-0.168,0.557-0.168c0.206,0,0.401,0.064,0.564,0.177    c0.277,0.185,0.458,0.496,0.463,0.852l0.434,20.648L53.566,71.876z M57.007,72.587v-0.01c-0.007,0.604-0.502,1.096-1.1,1.096    c-0.6,0-1.094-0.492-1.1-1.091l-0.227-4.03l-0.223-4.138l0.45-22.406v-0.113c0.001-0.34,0.161-0.644,0.408-0.849    c0.189-0.155,0.432-0.249,0.692-0.249c0.207,0,0.399,0.057,0.563,0.153c0.313,0.196,0.532,0.543,0.542,0.94l0.487,22.523    L57.007,72.587z M86.74,73.695c0,0-27.683,0-27.712,0c-0.598-0.061-1.071-0.537-1.081-1.15V40.821    c0.01-0.584,0.211-0.885,0.963-1.174c1.941-0.752,4.139-1.196,6.398-1.196c9.215,0,16.766,7.069,17.567,16.074    c1.186-0.495,2.496-0.777,3.865-0.777c5.518,0,9.992,4.476,9.992,9.998C96.732,69.267,92.258,73.695,86.74,73.695L86.74,73.695z' style='fill:#F1F2F2;'/></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>") no-repeat left top;
}

#profiles .network.Facebook {
  background: url("data:image/svg+xml;utf8,<svg enable-background='new 0 0 550 550' viewBox='0 0 550 550' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><g><circle cx='275' cy='275' fill='#3F65A6' r='256'/><path d='M236.1,190.8c0,7.4,0,40.4,0,40.4h-29.6v49.4h29.6V416h60.8V280.5h40.8     c0,0,3.8-23.7,5.7-49.6c-5.3,0-46.2,0-46.2,0s0-28.7,0-33.8c0-5,6.6-11.8,13.2-11.8c6.5,0,20.3,0,33.1,0c0-6.7,0-30,0-51.4     c-17.1,0-36.5,0-45,0C234.6,134,236.1,183.4,236.1,190.8z' fill='#FFFFFF' /></g></g></svg>") no-repeat left top;
}

#profiles .network.Skype {
  background: url("data:image/svg+xml;utf8,<svg enable-background='new 0 0 550 550' viewBox='0 0 550 550' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><g><circle cx='275' cy='275' fill='#2CBDE2' r='256'/><g><path d='M380,299c1.6-7.4,2.5-15,2.5-22.8c0-58.7-47.6-106.3-106.3-106.3c-6.2,0-12.3,0.5-18.2,1.5      c-9.5-6-20.7-9.5-32.8-9.5c-34.1,0-61.7,27.6-61.7,61.7c0,11.4,3.1,22,8.5,31.2c-1.4,6.9-2.1,14.1-2.1,21.4      c0,58.7,47.6,106.3,106.3,106.3c6.6,0,13.1-0.6,19.5-1.8c8.7,4.7,18.6,7.3,29.1,7.3c34.1,0,61.7-27.6,61.7-61.6      C386.4,316.5,384.1,307.3,380,299z' fill='#31A5DD'/><path d='M244.3,206.3L244.3,206.3c-8.9,3.3-15.9,8.1-20.6,14.3c-4.8,6.3-7.2,13.5-7.2,21.5      c0,8.4,2.3,15.6,6.9,21.3c4.5,5.6,10.6,10.1,18.3,13.4c7.5,3.2,16.8,6,27.9,8.3c8.1,1.7,14.7,3.3,19.5,4.8      c4.6,1.4,8.4,3.6,11.3,6.3c2.8,2.6,4.1,5.9,4.1,10.1c0,5.3-2.6,9.7-7.9,13.3c-5.4,3.7-12.6,5.6-21.4,5.6      c-6.4,0-11.6-0.9-15.5-2.8c-3.8-1.8-6.8-4.1-8.9-6.9c-2.2-2.9-4.2-6.5-6.1-10.8c-1.7-4-3.8-7-6.2-9.1c-2.6-2.2-5.7-3.3-9.4-3.3      c-4.5,0-8.2,1.4-11.1,4.1c-2.9,2.8-4.4,6.2-4.4,10c0,6.2,2.3,12.7,6.8,19.2c4.5,6.4,10.4,11.7,17.5,15.5c10,5.3,22.8,8,38.1,8      c12.7,0,23.9-2,33.2-5.8c9.4-3.9,16.7-9.4,21.6-16.4c4.9-7,7.4-15,7.4-23.7c0-7.3-1.4-13.6-4.3-18.7c-2.9-5.1-6.9-9.4-12-12.7      c-5-3.2-11.1-6-18.2-8.3c-7-2.2-14.9-4.3-23.5-6.2c-6.8-1.6-11.8-2.8-14.7-3.6c-2.9-0.8-5.8-1.9-8.6-3.3c-2.7-1.3-4.8-3-6.3-4.8      c-1.4-1.8-2.1-3.8-2.1-6.2c0-4,2.2-7.3,6.6-10.2c4.6-3,10.8-4.5,18.4-4.5c8.2,0,14.2,1.4,17.7,4.1c3.7,2.8,6.9,6.8,9.5,11.8      c2.3,4,4.4,6.7,6.3,8.5c2.1,1.9,5.2,2.9,9.2,2.9c4.3,0,8-1.5,10.9-4.6c2.9-3,4.3-6.5,4.3-10.3c0-4-1.1-8-3.3-12.1      c-2.2-4-5.7-7.9-10.3-11.6c-4.6-3.6-10.6-6.6-17.6-8.7c-7-2.2-15.3-3.3-24.8-3.3C263.6,201.4,253.1,203,244.3,206.3z' fill='#FFFFFF'/></g></g></g></svg>") no-repeat left top;
}

#profiles .network.LinkedIn {
  background: url("data:image/svg+xml;utf8,<svg enable-background='new 0 0 550 550' viewBox='0 0 550 550' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><g><circle cx='275' cy='275' fill='#04689B' r='256'/><path d='M219.2,366.5h-38.8V242.2h38.8V366.5z M198.8,226.6h-0.3c-14.1,0-23.2-9.5-23.2-21.6     c0-12.3,9.4-21.6,23.7-21.6c14.3,0,23.1,9.3,23.4,21.5C222.5,217.1,213.4,226.6,198.8,226.6z M374.6,366.5h-44v-64.3     c0-16.8-6.9-28.3-22-28.3c-11.6,0-18,7.7-21,15.2c-1.1,2.7-0.9,6.4-0.9,10.2v67.3H243c0,0,0.6-113.9,0-124.3h43.6v19.5     c2.6-8.5,16.5-20.7,38.8-20.7c27.6,0,49.3,17.9,49.3,56.4V366.5z' fill='#FFFFFF'/></g></g></svg>") no-repeat left top;
}

#profiles .network.GitHub {
  background: url("data:image/svg+xml;utf8,<svg enable-background='new 0 0 550 550' viewBox='0 0 550 550' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><g><circle cx='275' cy='275' fill='#BF5B94' r='256'/><path d='M484.7,292.1c0.1,0,0.3,0.1,0.4,0.2c0,0,0.1,0,0.1,0.1c0.1,0,0.2,0.1,0.3,0.2c0,0,0.1,0.1,0.1,0.1     c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.4,0.3c0,0,0,0,0.1,0c0.1,0.1,0.3,0.2,0.4,0.4     c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0.1,0.1,0.1,0.1     c0.1,0.1,0.3,0.3,0.4,0.4v-9.1c-20.6,0-40.6,0-61,0c0.6-9.2,2-18.7,1.6-28.1c-0.8-20.4-8.1-38.6-19.5-55.5     c-2.2-3.3-2.6-8.6-2.3-12.8c1.1-16,4.3-31.9,3.9-47.8c-0.4-17.6-7.4-21.7-24.6-17.7c-2.7,0.6-5.4,1.4-8,2.2     c-12.1,4-23,10.3-32.1,19.6c-4.4,4.5-8.5,5.1-14.6,3.3c-30.9-9.6-62.1-10.1-93.1-0.9c-8.2,2.4-13.2,0.8-19-4.6     c-12.9-12.1-28.3-18.5-45.9-20.8c-9.2-1.2-13.9,3.2-14.4,10.3c-1.1,14.5-2.4,29.5,0.3,43.6c2.5,13.1,0.8,22.8-6.5,33.9     c-13.5,20.4-18,43.4-13.5,67.8c0.4,2,0.2,4.1,0.4,7.8c-8.2-0.5-15.3-1.5-22.4-1.3c-17.4,0.5-34.8,1.2-52.1,2.6     c-1.5,0.1-2.8,0.2-4,0.2v6c25.2-7.8,76.3-6.3,82.4,4c-27.7-2.5-54.7-3.4-80.4,9.3c0.2,1.3,0.5,2.6,0.7,3.9     c11.9-3.1,24-6.5,36.2-9.1c5.3-1.1,11,0,16.4-0.4c17.9-1.5,30.8,2.4,42.2,19.8c10.2,15.6,24.6,25.2,40.8,31.7     c11.9,4.7,24.7,7.8,37.6,10.3c1.6,0.3,3.1,0.6,4.5,0.8C229,389.7,207,395.9,181,394.2c-4.3-0.3-8.1-1.2-11.6-2.7     c-9.3-3.8-16.2-11.2-22.5-19.5c-7.7-10.2-16.9-18-30-19.6c-3.1-0.4-6.2,0.4-7.4,0.5c12.8,18.2,25.2,36.4,38.1,54.2     c1.6,2.2,3.3,4.1,5.2,5.7c8.8,7.7,20.3,9.6,32.2,10.1c9.2,0.3,18.3,0.1,27.4,0.1c0,14.4,0,27.9,0,41.3h20.5     c-0.3-5.9-0.1-11.9,0.3-17.8c0.4-6.4,3.8-12.3,10.7-10.5c3.8,1,8.6,6.7,9.1,10.8c0.7,5.7,0.8,11.5,0.7,17.5h19.9     c-0.1-10.5-0.2-21,0.6-31.4c0.2-3.4,6.9-9.6,9.5-9c4,0.9,9.8,6.1,10.1,9.9c0.8,10,0.7,20,0.6,30.5h20c-0.1-6.7-0.2-12.9,0.6-19.1     c0.5-3.6,6.1-9,9.4-9c3.3,0,8.6,5.2,9.5,9c1.4,6.1,1.7,12.8,0.7,19.1h18.3c1.1-0.4,2.2-0.8,3.3-1.3c-1.5-18.3-1.7-35.6-4.7-52.5     c-3.1-17.9-13.3-32.6-26.6-44.9c14.9-4.7,29.6-8.4,43.7-14c22-8.7,39.1-23.4,50.5-44.6c1.5-2.8,5.2-6,8.1-6.3     c0.6-0.1,1.2-0.1,1.9-0.2c0.3,0,0.5,0,0.8-0.1c0.3,0,0.7-0.1,1-0.1c0.3,0,0.7-0.1,1-0.1c0.3,0,0.5,0,0.8-0.1     c0.4,0,0.8-0.1,1.2-0.1c0.2,0,0.4,0,0.7,0c0.4,0,0.9-0.1,1.3-0.1c0.2,0,0.4,0,0.6,0c0.4,0,0.9-0.1,1.3-0.1c0.2,0,0.3,0,0.5,0     c0.5,0,0.9-0.1,1.4-0.1c0.2,0,0.3,0,0.5,0c0.5,0,1,0,1.4-0.1c0.1,0,0.3,0,0.4,0c0.5,0,1,0,1.5-0.1c0.1,0,0.3,0,0.4,0     c0.5,0,1,0,1.5,0c0.1,0,0.2,0,0.4,0c0.5,0,1,0,1.5,0c0.1,0,0.2,0,0.3,0c0.5,0,1,0,1.5,0c0.1,0,0.2,0,0.3,0c0.5,0,1,0,1.6,0     c0.1,0,0.2,0,0.3,0c0.5,0,1.1,0,1.6,0c0.1,0,0.2,0,0.3,0c0.5,0,1.1,0,1.6,0c0.1,0,0.2,0,0.3,0c0.5,0,1.1,0,1.6,0.1     c0.1,0,0.2,0,0.2,0c0.5,0,1.1,0.1,1.6,0.1c0.1,0,0.2,0,0.2,0c0.6,0,1.1,0.1,1.7,0.1c0.1,0,0.1,0,0.2,0c0.6,0,1.1,0.1,1.7,0.1     c0.1,0,0.1,0,0.2,0c0.6,0,1.1,0.1,1.7,0.2c0.1,0,0.1,0,0.2,0c0.6,0.1,1.1,0.1,1.7,0.2c0.1,0,0.1,0,0.2,0c0.6,0.1,1.1,0.1,1.7,0.2     c0.1,0,0.1,0,0.2,0c0.6,0.1,1.2,0.2,1.7,0.2c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.2,1.8,0.3c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.2,1.8,0.3     c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.2,1.8,0.3c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.2,1.8,0.4c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.3,1.8,0.4     c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.3,1.9,0.5c0,0,0,0,0.1,0c0.6,0.2,1.2,0.3,1.9,0.5c0,0,0,0,0,0c0.6,0.2,1.3,0.4,1.9,0.5     c0,0,0,0,0,0c0.6,0.2,1.3,0.4,1.9,0.6c0.4-2.4,0.8-4.9,1.2-7.3c-0.2,0-0.4,0-0.6,0c-21-1.1-39.7-2.1-57.5-3.1     c-1.1-0.1-2.3-0.1-3.4-0.2C432,288.9,468.4,286.8,484.7,292.1z' fill='#FFFFFF'/></g></g></svg>") no-repeat left top;
}
`},T={partials:["awards.hbs","basics.hbs","education.hbs","interests.hbs","languages.hbs","publications.hbs","references.hbs","skills.hbs","volunteer.hbs","work.hbs"],public:["index.html"],".":["README.md","index.js","package.json","partials","public","resume.hbs","style.css"]};Ge=function(e,n){var t=Ue(e);return t!==void 0?t:""},Je=function(e,n){var t=fe(e);return t===void 0&&(t=[]),n&&n.withFileTypes?t.map(function(i){var s=me(e)+"/"+i,r=fe(s)!==void 0;return{name:i,isFile:function(){return!r},isDirectory:function(){return r}}}):t},Ke=function(e){return Ue(e)!==void 0||fe(e)!==void 0},Ye=function(){},Xe=function(){},ge=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Qe=ge,Ze=function(){},$e=function(){},en=function(){return{pipe:function(e){return e},on:function(){return this}}},nn=function(){return{write:function(){},end:function(){},on:function(){return this}}},lt={readFileSync:Ge,readdirSync:Je,existsSync:Ke,writeFileSync:Ye,mkdirSync:Xe,statSync:ge,lstatSync:Qe,unlinkSync:Ze,rmdirSync:$e,createReadStream:en,createWriteStream:nn}});var hn={};je(hn,{basename:()=>Q,default:()=>ct,dirname:()=>ke,extname:()=>Z,isAbsolute:()=>an,join:()=>tn,normalize:()=>ln,parse:()=>on,relative:()=>cn,resolve:()=>sn,sep:()=>rn});var tn,sn,ke,Q,Z,rn,an,ln,cn,on,ct,pn=ue(()=>{"use strict";p();tn=function(){return[].slice.call(arguments).join("/")},sn=function(){return[].slice.call(arguments).join("/")},ke=function(e){return e.split("/").slice(0,-1).join("/")},Q=function(e,n){var t=e.split("/").pop()||"";return n&&t.endsWith(n)?t.slice(0,-n.length):t},Z=function(e){var n=e.match(/\.[^.]+$/);return n?n[0]:""},rn="/",an=function(e){return e.charAt(0)==="/"},ln=function(e){return e},cn=function(e,n){return n},on=function(e){return{root:"",dir:ke(e),base:Q(e),ext:Z(e),name:Q(e,Z(e))}},ct={join:tn,resolve:sn,dirname:ke,basename:Q,extname:Z,sep:rn,isAbsolute:an,normalize:ln,relative:cn,parse:on}});var we=m(dn=>{"use strict";p();function un(e){this.string=e}un.prototype.toString=function(){return""+this.string};dn.default=un});var B=m(N=>{"use strict";p();var ot=we().default,ht={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},pt=/[&<>"'`]/g,ut=/[&<>"'`]/;function dt(e){return ht[e]}function ft(e){for(var n=1;n<arguments.length;n++)for(var t in arguments[n])Object.prototype.hasOwnProperty.call(arguments[n],t)&&(e[t]=arguments[n][t]);return e}N.extend=ft;var ye=Object.prototype.toString;N.toString=ye;var $=function(e){return typeof e=="function"};$(/x/)&&($=function(e){return typeof e=="function"&&ye.call(e)==="[object Function]"});var $;N.isFunction=$;var fn=Array.isArray||function(e){return e&&typeof e=="object"?ye.call(e)==="[object Array]":!1};N.isArray=fn;function mt(e){return e instanceof ot?e.toString():e==null?"":e?(e=""+e,ut.test(e)?e.replace(pt,dt):e):e+""}N.escapeExpression=mt;function gt(e){return!e&&e!==0?!0:!!(fn(e)&&e.length===0)}N.isEmpty=gt;function vt(e,n){return(e?e+".":"")+n}N.appendContextPath=vt});var P=m(gn=>{"use strict";p();var xe=["description","fileName","lineNumber","message","name","number","stack"];function mn(e,n){var t;n&&n.firstLine&&(t=n.firstLine,e+=" - "+t+":"+n.firstColumn);for(var i=Error.prototype.constructor.call(this,e),s=0;s<xe.length;s++)this[xe[s]]=i[xe[s]];t&&(this.lineNumber=t,this.column=n.firstColumn)}mn.prototype=new Error;gn.default=mn});var D=m(_=>{"use strict";p();var k=B(),Ee=P().default,bt="2.0.0";_.VERSION=bt;var kt=6;_.COMPILER_REVISION=kt;var wt={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};_.REVISION_CHANGES=wt;var vn=k.isArray,Se=k.isFunction,bn=k.toString,kn="[object Object]";function Ne(e,n){this.helpers=e||{},this.partials=n||{},yt(this)}_.HandlebarsEnvironment=Ne;Ne.prototype={constructor:Ne,logger:j,log:wn,registerHelper:function(e,n){if(bn.call(e)===kn){if(n)throw new Ee("Arg not supported with multiple helpers");k.extend(this.helpers,e)}else this.helpers[e]=n},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,n){bn.call(e)===kn?k.extend(this.partials,e):this.partials[e]=n},unregisterPartial:function(e){delete this.partials[e]}};function yt(e){e.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new Ee("Missing helper: '"+arguments[arguments.length-1].name+"'")}),e.registerHelper("blockHelperMissing",function(n,t){var i=t.inverse,s=t.fn;if(n===!0)return s(this);if(n===!1||n==null)return i(this);if(vn(n))return n.length>0?(t.ids&&(t.ids=[t.name]),e.helpers.each(n,t)):i(this);if(t.data&&t.ids){var r=ee(t.data);r.contextPath=k.appendContextPath(t.data.contextPath,t.name),t={data:r}}return s(n,t)}),e.registerHelper("each",function(n,t){if(!t)throw new Ee("Must pass iterator to #each");var i=t.fn,s=t.inverse,r=0,a="",l,h;if(t.data&&t.ids&&(h=k.appendContextPath(t.data.contextPath,t.ids[0])+"."),Se(n)&&(n=n.call(this)),t.data&&(l=ee(t.data)),n&&typeof n=="object")if(vn(n))for(var c=n.length;r<c;r++)l&&(l.index=r,l.first=r===0,l.last=r===n.length-1,h&&(l.contextPath=h+r)),a=a+i(n[r],{data:l});else for(var u in n)n.hasOwnProperty(u)&&(l&&(l.key=u,l.index=r,l.first=r===0,h&&(l.contextPath=h+u)),a=a+i(n[u],{data:l}),r++);return r===0&&(a=s(this)),a}),e.registerHelper("if",function(n,t){return Se(n)&&(n=n.call(this)),!t.hash.includeZero&&!n||k.isEmpty(n)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(n,t){return e.helpers.if.call(this,n,{fn:t.inverse,inverse:t.fn,hash:t.hash})}),e.registerHelper("with",function(n,t){Se(n)&&(n=n.call(this));var i=t.fn;if(k.isEmpty(n))return t.inverse(this);if(t.data&&t.ids){var s=ee(t.data);s.contextPath=k.appendContextPath(t.data.contextPath,t.ids[0]),t={data:s}}return i(n,t)}),e.registerHelper("log",function(n,t){var i=t.data&&t.data.level!=null?parseInt(t.data.level,10):1;e.log(i,n)}),e.registerHelper("lookup",function(n,t){return n&&n[t]})}var j={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,n){if(j.level<=e){var t=j.methodMap[e];typeof console<"u"&&console[t]&&console[t].call(console,n)}}};_.logger=j;var wn=j.log;_.log=wn;var ee=function(e){var n=k.extend({},e);return n._parent=e,n};_.createFrame=ee});var xn=m(z=>{"use strict";p();var Pe=B(),A=P().default,xt=D().COMPILER_REVISION,yn=D().REVISION_CHANGES,St=D().createFrame;function Et(e){var n=e&&e[0]||1,t=xt;if(n!==t)if(n<t){var i=yn[t],s=yn[n];throw new A("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+s+").")}else throw new A("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}z.checkRevision=Et;function Nt(e,n){if(!n)throw new A("No environment passed to template");if(!e||!e.main)throw new A("Unknown template object: "+typeof e);n.VM.checkRevision(e.compiler);var t=function(r,a,l,h,c,u,o,S,H){c&&(h=Pe.extend({},h,c));var F=n.VM.invokePartial.call(this,r,l,h,u,o,S,H);if(F==null&&n.compile){var qe={helpers:u,partials:o,data:S,depths:H};o[l]=n.compile(r,{data:S!==void 0,compat:e.compat},n),F=o[l](h,qe)}if(F!=null){if(a){for(var y=F.split(`
`),E=0,ce=y.length;E<ce&&!(!y[E]&&E+1===ce);E++)y[E]=a+y[E];F=y.join(`
`)}return F}else throw new A("The partial "+l+" could not be compiled when running in runtime-only mode")},i={lookup:function(r,a){for(var l=r.length,h=0;h<l;h++)if(r[h]&&r[h][a]!=null)return r[h][a]},lambda:function(r,a){return typeof r=="function"?r.call(a):r},escapeExpression:Pe.escapeExpression,invokePartial:t,fn:function(r){return e[r]},programs:[],program:function(r,a,l){var h=this.programs[r],c=this.fn(r);return a||l?h=ne(this,r,c,a,l):h||(h=this.programs[r]=ne(this,r,c)),h},data:function(r,a){for(;r&&a--;)r=r._parent;return r},merge:function(r,a){var l=r||a;return r&&a&&r!==a&&(l=Pe.extend({},a,r)),l},noop:n.VM.noop,compilerInfo:e.compiler},s=function(r,a){a=a||{};var l=a.data;s._setup(a),!a.partial&&e.useData&&(l=Ct(r,l));var h;return e.useDepths&&(h=a.depths?[r].concat(a.depths):[r]),e.main.call(i,r,i.helpers,i.partials,l,h)};return s.isTop=!0,s._setup=function(r){r.partial?(i.helpers=r.helpers,i.partials=r.partials):(i.helpers=i.merge(r.helpers,n.helpers),e.usePartial&&(i.partials=i.merge(r.partials,n.partials)))},s._child=function(r,a,l){if(e.useDepths&&!l)throw new A("must pass parent depths");return ne(i,r,e[r],a,l)},s}z.template=Nt;function ne(e,n,t,i,s){var r=function(a,l){return l=l||{},t.call(e,a,e.helpers,e.partials,l.data||i,s&&[a].concat(s))};return r.program=n,r.depth=s?s.length:0,r}z.program=ne;function Pt(e,n,t,i,s,r,a){var l={partial:!0,helpers:i,partials:s,data:r,depths:a};if(e===void 0)throw new A("The partial "+n+" could not be found");if(e instanceof Function)return e(t,l)}z.invokePartial=Pt;function _t(){return""}z.noop=_t;function Ct(e,n){return(!n||!("root"in n))&&(n=n?St(n):{},n.root=e),n}});var _n=m(Pn=>{"use strict";p();var Sn=D(),Ft=we().default,Lt=P().default,_e=B(),En=xn(),Nn=function(){var e=new Sn.HandlebarsEnvironment;return _e.extend(e,Sn),e.SafeString=Ft,e.Exception=Lt,e.Utils=_e,e.escapeExpression=_e.escapeExpression,e.VM=En,e.template=function(n){return En.template(n,e)},e},te=Nn();te.create=Nn;te.default=te;Pn.default=te});var Ce=m(Fn=>{"use strict";p();var Cn=P().default;function v(e){e=e||{},this.firstLine=e.first_line,this.firstColumn=e.first_column,this.lastColumn=e.last_column,this.lastLine=e.last_line}var W={ProgramNode:function(e,n,t){v.call(this,t),this.type="program",this.statements=e,this.strip=n},MustacheNode:function(e,n,t,i,s){if(v.call(this,s),this.type="mustache",this.strip=i,t!=null&&t.charAt){var r=t.charAt(3)||t.charAt(2);this.escaped=r!=="{"&&r!=="&"}else this.escaped=!!t;e instanceof W.SexprNode?this.sexpr=e:this.sexpr=new W.SexprNode(e,n),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(e,n,t){v.call(this,t),this.type="sexpr",this.hash=n;var i=this.id=e[0],s=this.params=e.slice(1);this.isHelper=!!(s.length||n),this.eligibleHelper=this.isHelper||i.isSimple},PartialNode:function(e,n,t,i,s){v.call(this,s),this.type="partial",this.partialName=e,this.context=n,this.hash=t,this.strip=i,this.strip.inlineStandalone=!0},BlockNode:function(e,n,t,i,s){v.call(this,s),this.type="block",this.mustache=e,this.program=n,this.inverse=t,this.strip=i,t&&!n&&(this.isInverse=!0)},RawBlockNode:function(e,n,t,i){if(v.call(this,i),e.sexpr.id.original!==t)throw new Cn(e.sexpr.id.original+" doesn't match "+t,this);n=new W.ContentNode(n,i),this.type="block",this.mustache=e,this.program=new W.ProgramNode([n],{},i)},ContentNode:function(e,n){v.call(this,n),this.type="content",this.original=this.string=e},HashNode:function(e,n){v.call(this,n),this.type="hash",this.pairs=e},IdNode:function(e,n){v.call(this,n),this.type="ID";for(var t="",i=[],s=0,r="",a=0,l=e.length;a<l;a++){var h=e[a].part;if(t+=(e[a].separator||"")+h,h===".."||h==="."||h==="this"){if(i.length>0)throw new Cn("Invalid path: "+t,this);h===".."?(s++,r+="../"):this.isScoped=!0}else i.push(h)}this.original=t,this.parts=i,this.string=i.join("."),this.depth=s,this.idName=r+this.string,this.isSimple=e.length===1&&!this.isScoped&&s===0,this.stringModeValue=this.string},PartialNameNode:function(e,n){v.call(this,n),this.type="PARTIAL_NAME",this.name=e.original},DataNode:function(e,n){v.call(this,n),this.type="DATA",this.id=e,this.stringModeValue=e.stringModeValue,this.idName="@"+e.stringModeValue},StringNode:function(e,n){v.call(this,n),this.type="STRING",this.original=this.string=this.stringModeValue=e},NumberNode:function(e,n){v.call(this,n),this.type="NUMBER",this.original=this.number=e,this.stringModeValue=Number(e)},BooleanNode:function(e,n){v.call(this,n),this.type="BOOLEAN",this.bool=e,this.stringModeValue=e==="true"},CommentNode:function(e,n){v.call(this,n),this.type="comment",this.comment=e,this.strip={inlineStandalone:!0}}};Fn.default=W});var Dn=m(Ln=>{"use strict";p();var Dt=(function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(s,r,a,l,h,c,u){var o=c.length-1;switch(h){case 1:return l.prepareProgram(c[o-1].statements,!0),c[o-1];break;case 2:this.$=new l.ProgramNode(l.prepareProgram(c[o]),{},this._$);break;case 3:this.$=c[o];break;case 4:this.$=c[o];break;case 5:this.$=c[o];break;case 6:this.$=c[o];break;case 7:this.$=new l.ContentNode(c[o],this._$);break;case 8:this.$=new l.CommentNode(c[o],this._$);break;case 9:this.$=new l.RawBlockNode(c[o-2],c[o-1],c[o],this._$);break;case 10:this.$=new l.MustacheNode(c[o-1],null,"","",this._$);break;case 11:this.$=l.prepareBlock(c[o-3],c[o-2],c[o-1],c[o],!1,this._$);break;case 12:this.$=l.prepareBlock(c[o-3],c[o-2],c[o-1],c[o],!0,this._$);break;case 13:this.$=new l.MustacheNode(c[o-1],null,c[o-2],l.stripFlags(c[o-2],c[o]),this._$);break;case 14:this.$=new l.MustacheNode(c[o-1],null,c[o-2],l.stripFlags(c[o-2],c[o]),this._$);break;case 15:this.$={strip:l.stripFlags(c[o-1],c[o-1]),program:c[o]};break;case 16:this.$={path:c[o-1],strip:l.stripFlags(c[o-2],c[o])};break;case 17:this.$=new l.MustacheNode(c[o-1],null,c[o-2],l.stripFlags(c[o-2],c[o]),this._$);break;case 18:this.$=new l.MustacheNode(c[o-1],null,c[o-2],l.stripFlags(c[o-2],c[o]),this._$);break;case 19:this.$=new l.PartialNode(c[o-3],c[o-2],c[o-1],l.stripFlags(c[o-4],c[o]),this._$);break;case 20:this.$=new l.PartialNode(c[o-2],void 0,c[o-1],l.stripFlags(c[o-3],c[o]),this._$);break;case 21:this.$=new l.SexprNode([c[o-2]].concat(c[o-1]),c[o],this._$);break;case 22:this.$=new l.SexprNode([c[o]],null,this._$);break;case 23:this.$=c[o];break;case 24:this.$=new l.StringNode(c[o],this._$);break;case 25:this.$=new l.NumberNode(c[o],this._$);break;case 26:this.$=new l.BooleanNode(c[o],this._$);break;case 27:this.$=c[o];break;case 28:c[o-1].isHelper=!0,this.$=c[o-1];break;case 29:this.$=new l.HashNode(c[o],this._$);break;case 30:this.$=[c[o-2],c[o]];break;case 31:this.$=new l.PartialNameNode(c[o],this._$);break;case 32:this.$=new l.PartialNameNode(new l.StringNode(c[o],this._$),this._$);break;case 33:this.$=new l.PartialNameNode(new l.NumberNode(c[o],this._$));break;case 34:this.$=new l.DataNode(c[o],this._$);break;case 35:this.$=new l.IdNode(c[o],this._$);break;case 36:c[o-2].push({part:c[o],separator:c[o-1]}),this.$=c[o-2];break;case 37:this.$=[{part:c[o]}];break;case 38:this.$=[];break;case 39:c[o-1].push(c[o]);break;case 48:this.$=[];break;case 49:c[o-1].push(c[o]);break;case 52:this.$=[c[o]];break;case 53:c[o-1].push(c[o]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(s,r){throw new Error(s)},parse:function(s){var r=this,a=[0],l=[null],h=[],c=this.table,u="",o=0,S=0,H=0,F=2,qe=1;this.lexer.setInput(s),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var y=this.lexer.yylloc;h.push(y);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function ce(w){a.length=a.length-2*w,l.length=l.length-w,h.length=h.length-w}function et(){var w;return w=r.lexer.lex()||1,typeof w!="number"&&(w=r.symbols_[w]||w),w}for(var g,oe,L,b,ti,he,R={},J,x,Ve,K;;){if(L=a[a.length-1],this.defaultActions[L]?b=this.defaultActions[L]:((g===null||typeof g>"u")&&(g=et()),b=c[L]&&c[L][g]),typeof b>"u"||!b.length||!b[0]){var pe="";if(!H){K=[];for(J in c[L])this.terminals_[J]&&J>2&&K.push("'"+this.terminals_[J]+"'");this.lexer.showPosition?pe="Parse error on line "+(o+1)+`:
`+this.lexer.showPosition()+`
Expecting `+K.join(", ")+", got '"+(this.terminals_[g]||g)+"'":pe="Parse error on line "+(o+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(pe,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:y,expected:K})}}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+L+", token: "+g);switch(b[0]){case 1:a.push(g),l.push(this.lexer.yytext),h.push(this.lexer.yylloc),a.push(b[1]),g=null,oe?(g=oe,oe=null):(S=this.lexer.yyleng,u=this.lexer.yytext,o=this.lexer.yylineno,y=this.lexer.yylloc,H>0&&H--);break;case 2:if(x=this.productions_[b[1]][1],R.$=l[l.length-x],R._$={first_line:h[h.length-(x||1)].first_line,last_line:h[h.length-1].last_line,first_column:h[h.length-(x||1)].first_column,last_column:h[h.length-1].last_column},E&&(R._$.range=[h[h.length-(x||1)].range[0],h[h.length-1].range[1]]),he=this.performAction.call(R,u,S,o,this.yy,b[1],l,h),typeof he<"u")return he;x&&(a=a.slice(0,-1*x*2),l=l.slice(0,-1*x),h=h.slice(0,-1*x)),a.push(this.productions_[b[1]][0]),l.push(R.$),h.push(R._$),Ve=c[a[a.length-2]][a[a.length-1]],a.push(Ve);break;case 3:return!0}}return!0}},n=(function(){var i={EOF:1,parseError:function(r,a){if(this.yy.parser)this.yy.parser.parseError(r,a);else throw new Error(r)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var r=s.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var r=s.length,a=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var l=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var h=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===l.length?this.yylloc.first_column:0)+l[l.length-a.length].length-a[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[h[0],h[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),r=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,r,a,l,h,c;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),o=0;o<u.length&&(a=this._input.match(this.rules[u[o]]),!(a&&(!r||a[0].length>r[0].length)&&(r=a,l=o,!this.options.flex)));o++);return r?(c=r[0].match(/(?:\r\n?|\n).*/g),c&&(this.yylineno+=c.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:c?c[c.length-1].length-c[c.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],s=this.performAction.call(this,this.yy,this,u[l],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return typeof r<"u"?r:this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(r){this.begin(r)}};return i.options={},i.performAction=function(r,a,l,h){function c(o,S){return a.yytext=a.yytext.substr(o,a.yyleng-S)}var u=h;switch(l){case 0:if(a.yytext.slice(-2)==="\\\\"?(c(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(c(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return a.yytext=a.yytext.substr(5,a.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return c(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return c(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return a.yytext=c(1,2).replace(/\\"/g,'"'),42;break;case 30:return a.yytext=c(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return a.yytext=c(1,2),50;break;case 37:return"INVALID";case 38:return 5}},i.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],i.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},i})();e.lexer=n;function t(){this.yy={}}return t.prototype=e,e.Parser=t,new t})();Ln.default=Dt});var An=m(ie=>{"use strict";p();var At=P().default;function Ot(e,n){return{left:e.charAt(2)==="~",right:n.charAt(n.length-3)==="~"}}ie.stripFlags=Ot;function Mt(e,n,t,i,s,r){if(e.sexpr.id.original!==i.path.original)throw new At(e.sexpr.id.original+" doesn't match "+i.path.original,e);var a=t&&t.program,l={left:e.strip.left,right:i.strip.right,openStandalone:Le(n.statements),closeStandalone:Fe((a||n).statements)};if(e.strip.right&&O(n.statements,null,!0),a){var h=t.strip;h.left&&C(n.statements,null,!0),h.right&&O(a.statements,null,!0),i.strip.left&&C(a.statements,null,!0),Fe(n.statements)&&Le(a.statements)&&(C(n.statements),O(a.statements))}else i.strip.left&&C(n.statements,null,!0);return s?new this.BlockNode(e,a,n,l,r):new this.BlockNode(e,n,a,l,r)}ie.prepareBlock=Mt;function It(e,n){for(var t=0,i=e.length;t<i;t++){var s=e[t],r=s.strip;if(r){var a=Fe(e,t,n,s.type==="partial"),l=Le(e,t,n),h=r.openStandalone&&a,c=r.closeStandalone&&l,u=r.inlineStandalone&&a&&l;r.right&&O(e,t,!0),r.left&&C(e,t,!0),u&&(O(e,t),C(e,t)&&s.type==="partial"&&(s.indent=/([ \t]+$)/.exec(e[t-1].original)?RegExp.$1:"")),h&&(O((s.program||s.inverse).statements),C(e,t)),c&&(O(e,t),C((s.inverse||s.program).statements))}}return e}ie.prepareProgram=It;function Fe(e,n,t){n===void 0&&(n=e.length);var i=e[n-1],s=e[n-2];if(!i)return t;if(i.type==="content")return(s||!t?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}function Le(e,n,t){n===void 0&&(n=-1);var i=e[n+1],s=e[n+2];if(!i)return t;if(i.type==="content")return(s||!t?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}function O(e,n,t){var i=e[n==null?0:n+1];if(!(!i||i.type!=="content"||!t&&i.rightStripped)){var s=i.string;i.string=i.string.replace(t?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.string!==s}}function C(e,n,t){var i=e[n==null?e.length-1:n-1];if(!(!i||i.type!=="content"||!t&&i.leftStripped)){var s=i.string;return i.string=i.string.replace(t?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.string!==s,i.leftStripped}}});var Oe=m(Ae=>{"use strict";p();var De=Dn().default,On=Ce().default,Ht=An(),Rt=B().extend;Ae.parser=De;var Mn={};Rt(Mn,Ht,On);function Tt(e){return e.constructor===On.ProgramNode?e:(De.yy=Mn,De.parse(e))}Ae.parse=Tt});var re=m(se=>{"use strict";p();var Ie=P().default,In=B().isArray,Bt=[].slice;function Me(){}se.Compiler=Me;Me.prototype={compiler:Me,equals:function(e){var n=this.opcodes.length;if(e.opcodes.length!==n)return!1;for(var t=0;t<n;t++){var i=this.opcodes[t],s=e.opcodes[t];if(i.opcode!==s.opcode||!Hn(i.args,s.args))return!1}for(n=this.children.length,t=0;t<n;t++)if(!this.children[t].equals(e.children[t]))return!1;return!0},guid:0,compile:function(e,n){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=n,this.stringParams=n.stringParams,this.trackIds=n.trackIds;var t=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},t)for(var i in t)this.options.knownHelpers[i]=t[i];return this.accept(e)},accept:function(e){return this[e.type](e)},program:function(e){for(var n=e.statements,t=0,i=n.length;t<i;t++)this.accept(n[t]);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(s,r){return s-r}),this},compileProgram:function(e){var n=new this.compiler().compile(e,this.options),t=this.guid++,i;this.usePartial=this.usePartial||n.usePartial,this.children[t]=n;for(var s=0,r=n.depths.list.length;s<r;s++)i=n.depths.list[s],!(i<2)&&this.addDepth(i-1);return t},block:function(e){var n=e.mustache,t=e.program,i=e.inverse;t&&(t=this.compileProgram(t)),i&&(i=this.compileProgram(i));var s=n.sexpr,r=this.classifySexpr(s);r==="helper"?this.helperSexpr(s,t,i):r==="simple"?(this.simpleSexpr(s),this.opcode("pushProgram",t),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("blockValue",s.id.original)):(this.ambiguousSexpr(s,t,i),this.opcode("pushProgram",t),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(e){var n=e.pairs,t,i;for(this.opcode("pushHash"),t=0,i=n.length;t<i;t++)this.pushParam(n[t][1]);for(;t--;)this.opcode("assignToHash",n[t][0]);this.opcode("popHash")},partial:function(e){var n=e.partialName;this.usePartial=!0,e.hash?this.accept(e.hash):this.opcode("push","undefined"),e.context?this.accept(e.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",n.name,e.indent||""),this.opcode("append")},content:function(e){e.string&&this.opcode("appendContent",e.string)},mustache:function(e){this.sexpr(e.sexpr),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(e,n,t){var i=e.id,s=i.parts[0],r=n!=null||t!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",n),this.opcode("pushProgram",t),this.ID(i),this.opcode("invokeAmbiguous",s,r)},simpleSexpr:function(e){var n=e.id;n.type==="DATA"?this.DATA(n):n.parts.length?this.ID(n):(this.addDepth(n.depth),this.opcode("getContext",n.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,n,t){var i=this.setupFullMustacheParams(e,n,t),s=e.id,r=s.parts[0];if(this.options.knownHelpers[r])this.opcode("invokeKnownHelper",i.length,r);else{if(this.options.knownHelpersOnly)throw new Ie("You specified knownHelpersOnly, but used the unknown helper "+r,e);s.falsy=!0,this.ID(s),this.opcode("invokeHelper",i.length,s.original,s.isSimple)}},sexpr:function(e){var n=this.classifySexpr(e);n==="simple"?this.simpleSexpr(e):n==="helper"?this.helperSexpr(e):this.ambiguousSexpr(e)},ID:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var n=e.parts[0];n?this.opcode("lookupOnContext",e.parts,e.falsy,e.isScoped):this.opcode("pushContext")},DATA:function(e){this.options.data=!0,this.opcode("lookupData",e.id.depth,e.id.parts)},STRING:function(e){this.opcode("pushString",e.string)},NUMBER:function(e){this.opcode("pushLiteral",e.number)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:Bt.call(arguments,1)})},addDepth:function(e){e!==0&&(this.depths[e]||(this.depths[e]=!0,this.depths.list.push(e)))},classifySexpr:function(e){var n=e.isHelper,t=e.eligibleHelper,i=this.options;if(t&&!n){var s=e.id.parts[0];i.knownHelpers[s]?n=!0:i.knownHelpersOnly&&(t=!1)}return n?"helper":t?"ambiguous":"simple"},pushParams:function(e){for(var n=0,t=e.length;n<t;n++)this.pushParam(e[n])},pushParam:function(e){this.stringParams?(e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",e.stringModeValue,e.type),e.type==="sexpr"&&this.sexpr(e)):(this.trackIds&&this.opcode("pushId",e.type,e.idName||e.stringModeValue),this.accept(e))},setupFullMustacheParams:function(e,n,t){var i=e.params;return this.pushParams(i),this.opcode("pushProgram",n),this.opcode("pushProgram",t),e.hash?this.hash(e.hash):this.opcode("emptyHash"),i}};function zt(e,n,t){if(e==null||typeof e!="string"&&e.constructor!==t.AST.ProgramNode)throw new Ie("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);n=n||{},"data"in n||(n.data=!0),n.compat&&(n.useDepths=!0);var i=t.parse(e),s=new t.Compiler().compile(i,n);return new t.JavaScriptCompiler().compile(s,n)}se.precompile=zt;function qt(e,n,t){if(e==null||typeof e!="string"&&e.constructor!==t.AST.ProgramNode)throw new Ie("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);n=n||{},"data"in n||(n.data=!0),n.compat&&(n.useDepths=!0);var i;function s(){var a=t.parse(e),l=new t.Compiler().compile(a,n),h=new t.JavaScriptCompiler().compile(l,n,void 0,!0);return t.template(h)}var r=function(a,l){return i||(i=s()),i.call(this,a,l)};return r._setup=function(a){return i||(i=s()),i._setup(a)},r._child=function(a,l,h){return i||(i=s()),i._child(a,l,h)},r}se.compile=qt;function Hn(e,n){if(e===n)return!0;if(In(e)&&In(n)&&e.length===n.length){for(var t=0;t<e.length;t++)if(!Hn(e[t],n[t]))return!1;return!0}}});var zn=m(Bn=>{"use strict";p();var Vt=D().COMPILER_REVISION,jt=D().REVISION_CHANGES,He=P().default;function U(e){this.value=e}function M(){}M.prototype={nameLookup:function(e,n){return M.isValidJavaScriptVariableName(n)?e+"."+n:e+"['"+n+"']"},depthedLookup:function(e){return this.aliases.lookup="this.lookup",'lookup(depths, "'+e+'")'},compilerInfo:function(){var e=Vt,n=jt[e];return[e,n]},appendToBuffer:function(e){return this.environment.isSimple?"return "+e+";":{appendToBuffer:!0,content:e,toString:function(){return"buffer += "+e+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,n,t,i){this.environment=e,this.options=n,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!t,this.context=t||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(e,n),this.useDepths=this.useDepths||e.depths.list.length||this.options.compat;var s=e.opcodes,r,a,l;for(a=0,l=s.length;a<l;a++)r=s[a],this[r.opcode].apply(this,r.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new He("Compile completed with content left on stack");var h=this.createFunctionContext(i);if(this.isChild)return h;var c={compiler:this.compilerInfo(),main:h},u=this.context.programs;for(a=0,l=u.length;a<l;a++)u[a]&&(c[a]=u[a]);return this.environment.usePartial&&(c.usePartial=!0),this.options.data&&(c.useData=!0),this.useDepths&&(c.useDepths=!0),this.options.compat&&(c.compat=!0),i||(c.compiler=JSON.stringify(c.compiler),c=this.objectLiteral(c)),c},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(e){var n="",t=this.stackVars.concat(this.registers.list);t.length>0&&(n+=", "+t.join(", "));for(var i in this.aliases)this.aliases.hasOwnProperty(i)&&(n+=", "+i+"="+this.aliases[i]);var s=["depth0","helpers","partials","data"];this.useDepths&&s.push("depths");var r=this.mergeSource(n);return e?(s.push(r),Function.apply(this,s)):"function("+s.join(",")+`) {
  `+r+"}"},mergeSource:function(e){for(var n="",t,i=!this.forceBuffer,s,r=0,a=this.source.length;r<a;r++){var l=this.source[r];l.appendToBuffer?t?t=t+`
    + `+l.content:t=l.content:(t&&(n?n+="buffer += "+t+`;
  `:(s=!0,n=t+`;
  `),t=void 0),n+=l+`
  `,this.environment.isSimple||(i=!1))}return i?(t||!n)&&(n+="return "+(t||'""')+`;
`):(e+=", buffer = "+(s?"":this.initializeBuffer()),t?n+="return buffer + "+t+`;
`:n+=`return buffer;
`),e&&(n="var "+e.substring(2)+(s?"":`;
  `)+n),n},blockValue:function(e){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var n=[this.contextName(0)];this.setupParams(e,0,n);var t=this.popStack();n.splice(1,0,t),this.push("blockHelperMissing.call("+n.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams("",0,e,!0),this.flushInline();var n=this.topStack();e.splice(1,0,n),this.pushSource("if (!"+this.lastHelper+") { "+n+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){this.pendingContent&&(e=this.pendingContent+e),this.pendingContent=e},append:function(){this.flushInline();var e=this.popStack();this.pushSource("if ("+e+" != null) { "+this.appendToBuffer(e)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,n,t){var i=0,s=e.length;for(!t&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(e[i++])):this.pushContext();i<s;i++)this.replaceStack(function(r){var a=this.nameLookup(r,e[i],"context");return n?" && "+a:" != null ? "+a+" : "+r})},lookupData:function(e,n){e?this.pushStackLiteral("this.data(data, "+e+")"):this.pushStackLiteral("data");for(var t=n.length,i=0;i<t;i++)this.replaceStack(function(s){return" && "+this.nameLookup(s,n[i],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(e,n){this.pushContext(),this.pushString(n),n!=="sexpr"&&(typeof e=="string"?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+e.ids.join(",")+"}"),this.stringParams&&(this.push("{"+e.contexts.join(",")+"}"),this.push("{"+e.types.join(",")+"}")),this.push(`{
    `+e.values.join(`,
    `)+`
  }`)},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){return this.inlineStack.push(e),e},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){e!=null?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},invokeHelper:function(e,n,t){this.aliases.helperMissing="helpers.helperMissing";var i=this.popStack(),s=this.setupHelper(e,n),r=(t?s.name+" || ":"")+i+" || helperMissing";this.push("(("+r+").call("+s.callParams+"))")},invokeKnownHelper:function(e,n){var t=this.setupHelper(e,n);this.push(t.name+".call("+t.callParams+")")},invokeAmbiguous:function(e,n){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var t=this.popStack();this.emptyHash();var i=this.setupHelper(0,e,n),s=this.lastHelper=this.nameLookup("helpers",e,"helper");this.push("((helper = (helper = "+s+" || "+t+") != null ? helper : helperMissing"+(i.paramsInit?"),("+i.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+i.callParams+") : helper))")},invokePartial:function(e,n){var t=[this.nameLookup("partials",e,"partial"),"'"+n+"'","'"+e+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?t.push("data"):this.options.compat&&t.push("undefined"),this.options.compat&&t.push("depths"),this.push("this.invokePartial("+t.join(", ")+")")},assignToHash:function(e){var n=this.popStack(),t,i,s;this.trackIds&&(s=this.popStack()),this.stringParams&&(i=this.popStack(),t=this.popStack());var r=this.hash;t&&r.contexts.push("'"+e+"': "+t),i&&r.types.push("'"+e+"': "+i),s&&r.ids.push("'"+e+"': "+s),r.values.push("'"+e+"': ("+n+")")},pushId:function(e,n){e==="ID"||e==="DATA"?this.pushString(n):e==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:M,compileChildren:function(e,n){for(var t=e.children,i,s,r=0,a=t.length;r<a;r++){i=t[r],s=new this.compiler;var l=this.matchExistingProgram(i);l==null?(this.context.programs.push(""),l=this.context.programs.length,i.index=l,i.name="program"+l,this.context.programs[l]=s.compile(i,n,this.context,!this.precompile),this.context.environments[l]=i,this.useDepths=this.useDepths||s.useDepths):(i.index=l,i.name="program"+l)}},matchExistingProgram:function(e){for(var n=0,t=this.context.environments.length;n<t;n++){var i=this.context.environments[n];if(i&&i.equals(e))return n}},programExpression:function(e){var n=this.environment.children[e],t=n.depths.list,i=this.useDepths,s,r=[n.index,"data"];return i&&r.push("depths"),"this.program("+r.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},pushStackLiteral:function(e){return this.push(new U(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),e&&this.source.push(e)},pushStack:function(e){this.flushInline();var n=this.incrStack();return this.pushSource(n+" = "+e+";"),this.compileStack.push(n),n},replaceStack:function(e){var n="",t=this.isInline(),i,s,r;if(!this.isInline())throw new He("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof U)n=i=a.value,r=!0;else{s=!this.stackSlot;var l=s?this.incrStack():this.topStackName();n="("+this.push(l)+" = "+a+")",i=this.topStack()}var h=e.call(this,i);r||this.popStack(),s&&this.stackSlot--,this.push("("+n+h+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;if(e.length){this.inlineStack=[];for(var n=0,t=e.length;n<t;n++){var i=e[n];i instanceof U?this.compileStack.push(i):this.pushStack(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var n=this.isInline(),t=(n?this.inlineStack:this.compileStack).pop();if(!e&&t instanceof U)return t.value;if(!n){if(!this.stackSlot)throw new He("Invalid stack pop");this.stackSlot--}return t},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,n=e[e.length-1];return n instanceof U?n.value:n},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var n=[];for(var t in e)e.hasOwnProperty(t)&&n.push(this.quotedString(t)+":"+e[t]);return"{"+n.join(",")+"}"},setupHelper:function(e,n,t){var i=[],s=this.setupParams(n,e,i,t),r=this.nameLookup("helpers",n,"helper");return{params:i,paramsInit:s,name:r,callParams:[this.contextName(0)].concat(i).join(", ")}},setupOptions:function(e,n,t){var i={},s=[],r=[],a=[],l,h,c;i.name=this.quotedString(e),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack()),h=this.popStack(),c=this.popStack(),(c||h)&&(c||(c="this.noop"),h||(h="this.noop"),i.fn=c,i.inverse=h);for(var u=n;u--;)l=this.popStack(),t[u]=l,this.trackIds&&(a[u]=this.popStack()),this.stringParams&&(r[u]=this.popStack(),s[u]=this.popStack());return this.trackIds&&(i.ids="["+a.join(",")+"]"),this.stringParams&&(i.types="["+r.join(",")+"]",i.contexts="["+s.join(",")+"]"),this.options.data&&(i.data="data"),i},setupParams:function(e,n,t,i){var s=this.objectLiteral(this.setupOptions(e,n,t));return i?(this.useRegister("options"),t.push("options"),"options="+s):(t.push(s),"")}};var Rn="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),Wt=M.RESERVED_WORDS={};for(ae=0,Tn=Rn.length;ae<Tn;ae++)Wt[Rn[ae]]=!0;var ae,Tn;M.isValidJavaScriptVariableName=function(e){return!M.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)};Bn.default=M});var jn=m(Vn=>{"use strict";p();var q=_n().default,Ut=Ce().default,Gt=Oe().parser,Jt=Oe().parse,Kt=re().Compiler,Yt=re().compile,Xt=re().precompile,Qt=zn().default,Zt=q.create,qn=function(){var e=Zt();return e.compile=function(n,t){return Yt(n,t,e)},e.precompile=function(n,t){return Xt(n,t,e)},e.AST=Ut,e.Compiler=Kt,e.JavaScriptCompiler=Qt,e.Parser=Gt,e.parse=Jt,e};q=qn();q.create=qn;q.default=q;Vn.default=q});var Te=m(Wn=>{"use strict";p();function Re(){}Re.prototype={constructor:Re,accept:function(e){return this[e.type](e)}};Wn.default=Re});var Un=m(Be=>{"use strict";p();var $t=Te().default;function ei(e){return new f().accept(e)}Be.print=ei;function f(){this.padding=0}Be.PrintVisitor=f;f.prototype=new $t;f.prototype.pad=function(e){for(var n="",t=0,i=this.padding;t<i;t++)n=n+"  ";return n=n+e+`
`,n};f.prototype.program=function(e){var n="",t=e.statements,i,s;for(i=0,s=t.length;i<s;i++)n=n+this.accept(t[i]);return this.padding--,n};f.prototype.block=function(e){var n="";return n=n+this.pad("BLOCK:"),this.padding++,n=n+this.accept(e.mustache),e.program&&(n=n+this.pad("PROGRAM:"),this.padding++,n=n+this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,n=n+this.pad("{{^}}"),this.padding++,n=n+this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,n};f.prototype.sexpr=function(e){for(var n=e.params,t=[],i,s=0,r=n.length;s<r;s++)t.push(this.accept(n[s]));return n="["+t.join(", ")+"]",i=e.hash?" "+this.accept(e.hash):"",this.accept(e.id)+" "+n+i};f.prototype.mustache=function(e){return this.pad("{{ "+this.accept(e.sexpr)+" }}")};f.prototype.partial=function(e){var n=this.accept(e.partialName);return e.context&&(n+=" "+this.accept(e.context)),e.hash&&(n+=" "+this.accept(e.hash)),this.pad("{{> "+n+" }}")};f.prototype.hash=function(e){for(var n=e.pairs,t=[],i,s,r=0,a=n.length;r<a;r++)i=n[r][0],s=this.accept(n[r][1]),t.push(i+"="+s);return"HASH{"+t.join(", ")+"}"};f.prototype.STRING=function(e){return'"'+e.string+'"'};f.prototype.NUMBER=function(e){return"NUMBER{"+e.number+"}"};f.prototype.BOOLEAN=function(e){return"BOOLEAN{"+e.bool+"}"};f.prototype.ID=function(e){var n=e.parts.join("/");return e.parts.length>1?"PATH:"+n:"ID:"+n};f.prototype.PARTIAL_NAME=function(e){return"PARTIAL:"+e.name};f.prototype.DATA=function(e){return"@"+this.accept(e.id)};f.prototype.content=function(e){return this.pad("CONTENT[ '"+e.string+"' ]")};f.prototype.comment=function(e){return this.pad("{{! '"+e.comment+"' }}")}});var Kn=m((Ti,Jn)=>{p();var G=jn().default;G.Visitor=Te().default;var Gn=Un();G.PrintVisitor=Gn.PrintVisitor;G.print=Gn.print;Jn.exports=G;typeof V<"u"&&V.extensions&&(ze=function(e,n){var t=(be(),de(ve)),i=t.readFileSync(n,"utf8");e.exports=G.compile(i)},V.extensions[".handlebars"]=ze,V.extensions[".hbs"]=ze);var ze});var Zn=m((qi,Qn)=>{p();var le=(be(),de(ve)),Yn=(pn(),de(hn)),Xn=Kn();function ni(e){var n=le.readFileSync("//style.css","utf-8"),t=le.readFileSync("//resume.hbs","utf-8"),i=Yn.join("/","partials"),s=le.readdirSync(i);return s.forEach(function(r){var a=/^([^.]+).hbs$/.exec(r);if(a){var l=a[1],h=Yn.join(i,r),c=le.readFileSync(h,"utf8");Xn.registerPartial(l,c)}}),Xn.compile(t)({css:n,resume:e})}Qn.exports={render:ni}});p();var I=at(Zn(),1),$n=I.default??I,ji=$n.render??I.render,Wi=$n.pdfRenderOptions??I.pdfRenderOptions;export{Wi as pdfRenderOptions,ji as render};
