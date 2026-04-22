var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Ne=Object.create;var E=Object.defineProperty;var Ie=Object.getOwnPropertyDescriptor;var Re=Object.getOwnPropertyNames;var Me=Object.getPrototypeOf,We=Object.prototype.hasOwnProperty;var C=(e,r)=>()=>(e&&(r=e(e=0)),r);var y=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),U=(e,r)=>{for(var n in r)E(e,n,{get:r[n],enumerable:!0})},q=(e,r,n,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Re(r))!We.call(e,i)&&i!==n&&E(e,i,{get:()=>r[i],enumerable:!(t=Ie(r,i))||t.enumerable});return e};var ze=(e,r,n)=>(n=e!=null?Ne(Me(e)):{},q(r||!e||!e.__esModule?E(n,"default",{value:e,enumerable:!0}):n,e)),D=e=>q(E({},"__esModule",{value:!0}),e);var l=C(()=>{});var T={};U(T,{basename:()=>S,default:()=>Je,dirname:()=>O,extname:()=>A,isAbsolute:()=>Z,join:()=>G,normalize:()=>Y,parse:()=>K,relative:()=>Q,resolve:()=>X,sep:()=>$});var G,X,O,S,A,$,Z,Y,Q,K,Je,F=C(()=>{"use strict";l();G=function(){return[].slice.call(arguments).join("/")},X=function(){return[].slice.call(arguments).join("/")},O=function(e){return e.split("/").slice(0,-1).join("/")},S=function(e,r){var n=e.split("/").pop()||"";return r&&n.endsWith(r)?n.slice(0,-r.length):n},A=function(e){var r=e.match(/\.[^.]+$/);return r?r[0]:""},$="/",Z=function(e){return e.charAt(0)==="/"},Y=function(e){return e},Q=function(e,r){return r},K=function(e){return{root:"",dir:O(e),base:S(e),ext:A(e),name:S(e,A(e))}},Je={join:G,resolve:X,dirname:O,basename:S,extname:A,sep:$,isAbsolute:Z,normalize:Y,relative:Q,parse:K}});var M={};U(M,{createReadStream:()=>le,createWriteStream:()=>pe,default:()=>Ve,existsSync:()=>re,lstatSync:()=>ae,mkdirSync:()=>se,readFileSync:()=>ne,readdirSync:()=>te,rmdirSync:()=>ce,statSync:()=>R,unlinkSync:()=>oe,writeFileSync:()=>ie});function I(e){return String(e).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function ee(e){var r=I(e);if(L[r]!==void 0)return L[r];for(var n=Object.keys(L),t=0;t<n.length;t++)if(r.endsWith("/"+n[t])||r===n[t])return L[n[t]]}function N(e){var r=I(e);if((r===""||r===".")&&w["."]!==void 0)return w["."];if(w[r]!==void 0)return w[r];for(var n=Object.keys(w),t=0;t<n.length;t++)if(r.endsWith("/"+n[t])||r===n[t])return w[n[t]]}var L,w,ne,te,re,ie,se,R,ae,oe,ce,le,pe,Ve,W=C(()=>{"use strict";l();L={"assets/stylesheets/style.css":`@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

body {
  background: #fff;
  font-family: Lato, sans-serif;
  font-weight: 300;
  color: #333;
  margin: 0 0 80px;
  font-size: 15px;
}

a {
  color: #e32b46;
}

a:focus,
a:hover {
  color: #333;
  text-decoration: none;
}

strong {
  font-size: smaller;
  font-weight: 400;
  color: #333;
}

p {
  line-height: 1.5;
  margin: 0 0 0.5em 0;
}

p + p {
  margin-top: 10px;
}

h1,
h2,
h3,
h4 {
  margin-top: 0;
  font-weight: 300;
  color: #555;
}

section {
  margin-top: 24px;
}

ul,
ol {
  padding-left: 21px;
}

li {
  line-height: 1.8;
  list-style: none;
}

li:before {
  content: '\\f052';
  float: left;
  font: 16px Octicons;
  margin-top: 6px;
  margin-left: -20px;
  opacity: 0.1;
  position: absolute;
}

blockquote {
  border-left: 3px solid #e7e9ec;
  font-size: 14px;
  margin-bottom: 4px;
}

em {
  color: #666;
  font-weight: 300;
  font-style: normal;
}

h4 span:first-child {
  color: #333;
  font-weight: 400;
}

.section {
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
}

.section-title {
  flex: 1;
  text-align: right;
  padding-right: 30px;
}

.section-content {
  flex: 4;
}

.container {
  max-width: 768px;
  padding: 0 30px;
}

.item-row {
  padding-top: 5px;
  margin-top: -5px;
}

.item-row-split {
  display: flex;
  flex-wrap: wrap;
}

.item-split {
  flex: 0 0 50%;
}

#header {
  padding: 50px 0 25px;
}

#header .section-title {
  padding-right: 30px;
}

#header h2 {
  color: #95a5a6;
  font-size: 24px;
}

#content h3 {
  color: #555;
  font-size: 26px;
  margin-top: -4px;
}

#profiles .network {
  text-transform: capitalize;
}

#work .position,
#volunteer .position {
  font-weight: 400;
  margin-bottom: 8px;
}

#education .area {
  font-weight: 400;
}

#education .area:before {
  content: '\\f0d7';
  font: 16px Octicons;
  margin-right: 6px;
}

#education .studyType {
  margin-left: 25px;
  padding-bottom: 5px;
}

#awards .summary,
#publications .summary {
  margin-top: 8px;
}

#publications .website a:before {
  content: attr(href);
}

@media (min-width: 480px) {
  .strike-through {
    border-top: 1px solid #f4f6f6;
    height: 20px;
    margin-top: 12px;
    margin-bottom: -2px;
    position: relative;
  }

  .strike-through span,
  .strike-through a {
    background: #fff;
    position: absolute;
  }

  .strike-through span:first-child {
    padding-right: 20px;
    margin-top: -12px;
  }

  .strike-through span + span {
    font-size: 14px;
    margin-top: -10px;
    padding-left: 20px;
    right: 0;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 28px;
  }

  #header h2 {
    font-size: 24px;
  }

  #content h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 16px;
  }

  .date {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .strike-through span:first-child {
    margin-bottom: 7px;
  }

  .strike-through span {
    display: block;
  }

  #header {
    padding: 30px 0 0;
  }

  #actions {
    display: none;
  }
}

@media (max-width: 768px) {
  .section-content {
    flex: 6;
  }

  #content h3 {
    font-size: 20px;
    margin-top: -1px;
  }
}

@page {
  margin-top: 0.5in;
  margin-bottom: 0.5in;
}

@media print {
  a {
    color: #e32b46 !important;
  }

  a[href]:after {
    display: none;
  }

  *,
  :after,
  :before {
    background: #fff !important;
  }

  .container::before,
  .container::after {
    content: inherit;
  }

  .item-row {
    break-inside: avoid;
  }

  #content aside {
    margin: 0 !important;
  }
}
`,"package.json":`{
  "name": "jsonresume-theme-eshaham",
  "version": "1.0.9",
  "description": "My personal theme for JSON Resume",
  "keywords": [
    "resume",
    "jsonresume",
    "theme",
    "curriculum vitae",
    "CV"
  ],
  "author": "Elad Shaham",
  "license": "MIT",
  "homepage": "https://github.com/eshaham/jsonresume-theme-eshaham",
  "bugs": "https://github.com/eshaham/jsonresume-theme-eshaham/issues",
  "repository": "github:eshaham/jsonresume-theme-eshaham",
  "engines": {
    "node": ">= 10.0.0"
  },
  "scripts": {
    "start": "resume serve --theme ./ --port \${PORT:-4000}",
    "lint:js": "eslint --cache --ignore-path .gitignore '**/*.js'",
    "lint:ejs": "ejslint 'views/**/*.ejs'",
    "lint": "npm run lint:js && npm run lint:ejs"
  },
  "dependencies": {
    "ejs": "^3.1.3"
  },
  "devDependencies": {
    "ejs-lint": "^1.1.0",
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.1.0",
    "eslint-plugin-import": "^2.20.2",
    "resume-cli": "^3.0.8"
  }
}
`,"resume.json":`{
  "basics": {
    "name": "John Doe",
    "label": "Software Engineer, Backend Development",
    "image": "dummy-profile.png",
    "email": "john.doe@gmail.com",
    "phone": "(+1) 234-567-8910",
    "website": "https://john.doe",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "GitHub",
        "username": "johndoe",
        "url": "https://github.com/johndoe"
      },
      {
        "network": "StackOverflow",
        "username": "johndoe",
        "url": "https://stackoverflow.com/users/johndoe"
      },
      {
        "network": "Facebook",
        "username": "John Doe",
        "url": "https://www.facebook.com/johndoe"
      }
    ]
  },
  "work": [
    {
      "name": "Google",
      "position": "Software Engineer 1",
      "url": "https://google.com",
      "startDate": "2017-09-01",
      "summary": "Help building components of the Foo system",
      "highlights": [
        "Awarded 'Employee of the Month'",
        "Optimize computational cost by 10%"
      ]
    },
    {
      "name": "Microsoft",
      "position": "Intern",
      "url": "https://microsoft.com",
      "startDate": "2015-05-01",
      "endDate": "2015-08-01",
      "summary": "Work here as an intern for the ABC project during summer"
    }
  ],
  "volunteer": [
    {
      "organization": "Nerds movement",
      "position": "Founder",
      "website": "https://nerdsmovement.com",
      "startDate": "2012-01-01",
      "endDate": "2013-01-01",
      "summary": "Helping nerds around the world realize their true nature"
    },
    {
      "organization": "Charity Funds",
      "position": "Volunteer",
      "website": "https://charityfunds.com",
      "startDate": "2012-01-01",
      "endDate": "2013-01-01",
      "summary": "Delivering help to people who needs it",
      "highlights": ["Bring food to 350 sick people in need of help"]
    }
  ],
  "education": [
    {
      "institution": "MIT",
      "area": "Artificial Intelligence",
      "studyType": "Master",
      "startDate": "2015-09-01",
      "endDate": "2017-07-01"
    },
    {
      "institution": "UC Berkeley",
      "area": "Software Engineering",
      "studyType": "Bachelor",
      "startDate": "2011-09-01",
      "endDate": "2015-07-01",
      "gpa": "3.2 / 4.0",
      "courses": ["DB1101 - Basic SQL", "BE8080 - Distributed Systems"]
    }
  ],
  "awards": [
    {
      "title": "Employee of the month",
      "date": "2018-01-15",
      "awarder": "Google",
      "summary": "Awarded for outstanding working performance"
    }
  ],
  "projects": [
    {
      "name": "The code project",
      "summary": "A project that allows software developers to share their code with others",
      "url": "https://codeproject.com",
      "startDate": "2019-02-28"
    },
    {
      "name": "Project Manhatten",
      "startDate": "1942-08-13",
      "endDate": "1945-08-01",
      "summary": "Play with nuclear technology"
    }
  ],
  "publications": [
    {
      "name": "Optimizing artificial neural network",
      "publisher": "Nature and Science journal",
      "releaseDate": "2014-10-01",
      "website": "http://publication.com",
      "summary": "My publication on a new algorithm that speed up recognition in artificial neural network"
    }
  ],
  "certificates": [
    {
      "name": "Solution Architect - Associate",
      "issuingOrganization": "Amazon Web Services (AWS)",
      "issueDate": "2014-10-01",
      "expirationDate": "2016-10-01",
      "credentialID": "627A796D5FE94E64B8845C4C2C0C4020",
      "credentialURL": "http://credential.dot.com/627A796D5FE94E64B8845C4C2C0C4020"
    }
  ],
  "skills": [
    {
      "name": "Frontend Development",
      "level": "Master",
      "keywords": [
        "HTML/CSS/Javascript",
        "Boostrap",
        "Babel",
        "React/Redux",
        "Webpack"
      ]
    },
    {
      "name": "Backend Development",
      "level": "Master",
      "keywords": ["NodeJS", "Golang", "MongoDB", "Postgres", "Redis"]
    },
    {
      "name": "System Administration",
      "level": "Master",
      "keywords": ["AWS", "Linux", "NGINX", "CloudFlare", "Shell", "Docker"]
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native speaker"
    },
    {
      "language": "French",
      "fluency": "Proficient"
    },
    {
      "language": "Japanese",
      "fluency": "Beginner"
    }
  ],
  "interests": [
    {
      "name": "Anime",
      "keywords": ["Re:Zero", "Steins Gate"]
    },
    {
      "name": "Movies",
      "keywords": ["Star Wars", "Lord of the Rings"]
    }
  ],
  "references": [
    {
      "name": "Jane Doe <jane.doe@gmail.com>",
      "reference": "Passionate and hard working man"
    },
    {
      "name": "Don Joe",
      "reference": "The best employee we could ever have"
    }
  ]
}
`,"views/partials/about.ejs":`<%
/**
 * [Section] About
 * @param {string} summary Personal summary
 */
%>

<% if (summary) { %>
  <section id="about" class="section">
    <aside class="section-title">
      <h3>About</h3>
    </aside>
    <div class="section-content">
      <p><%= summary %></p>
    </div>
  </section>
<% } %>
`,"views/partials/awards.ejs":`<%
/**
 * @typedef {object} Award
 * @property {string} title Award title
 * @property {string} date Award date
 * @property {string} awarder Award awarder
 * @property {string} summary Award summary
 *
 * [Section] Awards
 * @param {array.<Award>} awards
 */
%>

<% if (awards && Array.isArray(awards) && awards.length > 0) { %>
  <section id="awards" class="section">
    <aside class="section-title">
      <h3>Awards</h3>
    </aside>
    <div class="section-content">
      <% awards.forEach((award) => { %>
        <div class="item-row">
          <h4 class="strike-through">
            <span><%= award.title %></span>
          </h4>
          <div class="date pull-right">
            <em>Awarded</em>
            <%= this.prettyDate(award.date) %>
          </div>
          <div>
            <em>by</em>
            <strong><%= award.awarder %></strong>
          </div>
          <div class="summary">
            <%= award.summary %>
          </div>
        </div>
      <% }); %>
    </div>
  </section>
<% } %>

`,"views/partials/certificates.ejs":`<%
/**
 * @typedef {object} Certificates
 * @property {string} name Certificate name
 * @property {string} issuingOrganization Certificate name
 * @property {string} issueDate Certificate issue date
 * @property {string} expirationDate Certificate issue date
 * @property {string} credentialID Certificate ID
 * @property {string} credentialURL Certificate URL
 *
 * [Section] Certificates
 * @param {array.<Certificate>} certificates
 */
%>

<% if (certificates && Array.isArray(certificates) && certificates.length > 0) { %>
  <section id="publications" class="section">
    <aside class="section-title">
      <h3>Certificates</h3>
    </aside>
    <div class="section-content">
      <% certificates.forEach((c) => { %>
        <div class="item-row">
          <h4 class="strike-through">
            <span><%= c.name %></span>
            <span class="date">
              <%= this.prettyDate(c.issueDate) %> <%if (c.expirationDate) { %> \u2014 <%= this.prettyDate(c.expirationDate) %><% } %>
            </span>
          </h4>
          <div class="website pull-right">
            <a target="_blank" href="<%= c.website %>"></a>
          </div>
          <div>
            <em>by</em>
            <strong><%= c.issuingOrganization %></strong>
          </div>
          <div class="summary">
            <em>Credential ID</em>
            <a target="_blank" href="<%= c.credentialURL %>"><%= c.credentialID %></a>
          </div>
        </div>
      <% }); %>
    </div>
  </section>
<% } %>
`,"views/partials/contact.ejs":`<%
/**
 * @typedef {object} Contact
 * @property {string} email Contact email
 * @property {string} phone Contact phone number
 * @property {string} website Contact website
 *
 * [Section] Contact
 * @param {Contact} contact
 */
%>

<% if (contact) { %>
  <section id="contact" class="section">
    <aside class="section-title"><h3>Contact</h3></aside>
    <div class="section-content">
      <div class="item-row">
        <div class="item-row-split">
          <% if (contact.email) { %>
            <div class="item-split">
              <strong>Email</strong>
              <div>
                <a href="mailto:<%= contact.email %>"><%= contact.email %></a>
              </div>
            </div>
          <% } %>
          <% if (contact.phone) { %>
            <div class="item-split">
              <strong>Phone</strong>
              <div class="phone"><%= contact.phone %></div>
            </div>
          <% } %>
          <% if (contact.website) { %>
            <div class="item-split">
              <strong>Website</strong>
              <div>
                <a target="_blank" href="<%= contact.website %>"><%= contact.website %></a>
              </div>
            </div>
          <% } %>
        </div>
      </div>
    </div>
  </section>
<% } %>
`,"views/partials/education.ejs":`<%
/**
 * @typedef {object} Education
 * @property {string} institution Education institution
 * @property {string} startDate Education start date
 * @property {string} endDate Education end date
 * @property {string} area Education area
 * @property {string} studyType Education study type
 * @property {string} gpa Education GPA
 * @property {array.<string>} courses Education courses
 *
 * [Section] Education
 * @param {array.<Education>} education
 */
%>

<% if (education && Array.isArray(education) && education.length > 0) { %>
  <section id="education" class="section">
    <aside class="section-title">
      <h3>Education</h3>
    </aside>
    <div class="section-content">
      <% education.forEach((e) => { %>
        <div class="item-row">
          <h4 class="strike-through">
            <span><%= e.institution %></span>
            <span class="date">
              <%= this.prettyDate(e.startDate) %> \u2014 <%= this.prettyDate(e.endDate) || 'Now' %>
            </span>
          </h4>
          <div class="area"><%= e.area %></div>
          <div class="studyType">
            <%= e.studyType %>
            <% if (e.gpa) { %>
              (<%= e.gpa %>)
            <% } %>
          </div>
          <% if (e.courses && Array.isArray(e.courses) && e.courses.length > 0 ) { %>
            <h4>Courses</h4>
            <% e.courses.forEach((course) => { %>
              <ul class="courses">
                <li><%= course %></li>
              </ul>
            <% }); %>
          <% } %>
        </div>
      <% }); %>
    </div>
  </section>
<% } %>
`,"views/partials/interests.ejs":`<%
/**
 * @typedef {object} Interest
 * @property {string} name Interest name
 * @property {array.<string>} keywords Interest keywords
 *
 * [Section] Interests
 * @param {array.<Interest>} interests
 */
%>

<% if (interests && Array.isArray(interests) && interests.length > 0) { %>
  <section id="interests" class="section">
    <aside class="section-title">
      <h3>Interests</h3>
    </aside>
    <div class="section-content">
      <div class="item-row">
        <div class="item-row-split">
          <% interests.forEach((interest) => { %>
            <div class="item-split">
              <div class="name">
                <h4><%= interest.name %></h4>
              </div>
              <ul class="keywords">
                <% interest.keywords.forEach((keyword) => { %>
                  <li><%= keyword %></li>
                <% }); %>
              </ul>
            </div>
          <% }); %>
        </div>
      </div>
    </div>
  </section>
<% } %>
`,"views/partials/languages.ejs":`<%
/**
 * @typedef {object} Language
 * @property {string} language Language language
 * @property {string} fluency Language fluency
 *
 * [Section] Languages
 * @param {array.<Language>} languages
 */
%>

<% if (languages && Array.isArray(languages) && languages.length > 0) { %>
  <section id="languages" class="section">
    <aside class="section-title">
      <h3>Languages</h3>
    </aside>
    <div class="section-content">
      <div class="item-row">
        <div class="item-row-split">
          <% languages.forEach((language) => { %>
            <div class="item-split">
              <div class="language"><strong><%= language.language %></strong></div>
              <div class="fluency"><%= language.fluency %></div>
            </div>
          <% }); %>
        </div>
      </div>
    </div>
  </section>
<% } %>
`,"views/partials/profiles.ejs":`<%
/**
 * @typedef {object} Profile
 * @property {string} network Profile network
 * @property {string} username Profile username
 * @property {string} url Profile url
 *
 * [Section] Profiles
 * @param {array.<Profile>} profiles
 */
%>

<% if (profiles && Array.isArray(profiles) && profiles.length > 0) { %>
  <section id="profiles" class="section">
    <aside class="section-title">
      <h3>Profiles</h3>
    </aside>
    <div class="section-content">
      <div class="item-row">
        <div class="item-row-split">
          <% profiles.forEach((profile) => { %>
            <div class="item-split">
              <strong class="network"><%= profile.network %></strong>
              <div class="url">
                <a target="_blank" href="<%= profile.url %>"><%= profile.username || profile.url %></a>
              </div>
            </div>
          <% }); %>
        </div>
      </div>
    </div>
  </section>
<% } %>
`,"views/partials/projects.ejs":`<%
/**
 * @typedef {object} Project
 * @property {string} name Project name
 * @property {string} startDate Project startDate
 * @property {string} endDate Project endDate
 * @property {string} url Project url
 * @property {string} summary Project summary
 * @property {array.<string>} highlights Project highlights
 *
 * [Section] Project
 * @param {array.<Project>} projects
 */
%>

<% if (projects && Array.isArray(projects) && projects.length > 0) { %>
  <section id="projects" class="section">
    <aside class="section-title">
      <h3>Projects</h3>
    </aside>
    <div class="section-content">
      <% projects.forEach((p) => { %>
        <div class="item-row">
          <h4 class="strike-through">
            <span><%= p.name %></span>
            <span class="date">
              <%= this.prettyDate(p.startDate) %> \u2014 <%= this.prettyDate(p.endDate) || 'Now' %>
            </span>
          </h4>
          <div class="website pull-right">
            <a target="_blank" href="<%= p.url %>"><%= this.domainOnly(p.url) %></a>
          </div>
          <div class="summary">
            <p><%= p.summary %></p>
          </div>
          <% if (p.highlights && Array.isArray(p.highlights) && p.highlights.length > 0) { %>
            <p><strong>Highlights</strong></p>
            <ul class="highlights">
              <% p.highlights.forEach((h) => { %>
                <li class="bullet"><%= h %></li>
              <% }); %>
            </ul>
          <% } %>
        </div>
      <% }); %>
    </div>
  </section>
<% } %>
`,"views/partials/publications.ejs":`<%
/**
 * @typedef {object} Publication
 * @property {string} name Publication name
 * @property {string} releaseDate Publication release date
 * @property {string} publisher Publication publisher
 * @property {string} summary Publication summary
 *
 * [Section] Publications
 * @param {array.<Publication>} publications
 */
%>

<% if (publications && Array.isArray(publications) && publications.length > 0) { %>
  <section id="publications" class="section">
    <aside class="section-title">
      <h3>Publications</h3>
    </aside>
    <div class="section-content">
      <% publications.forEach((publication) => { %>
        <div class="item-row">
          <h4 class="strike-through">
            <span><%= publication.name %></span>
            <span class="date"><%= this.prettyDate(publication.releaseDate) %></span>
          </h4>
          <div class="website pull-right">
            <a target="_blank" href="<%= publication.website %>"></a>
          </div>
          <div class="publisher">
            <em>Published by</em>
            <strong><%= publication.publisher %></strong>
          </div>
          <div class="summary">
            <p><%= publication.summary %></p>
          </div>
        </div>
      <% }); %>
    </div>
  </section>
<% } %>
`,"views/partials/references.ejs":`<%
/**
 * @typedef {object} Reference
 * @property {string} reference Reference description
 * @property {string} name Reference author name
 *
 * [Section] References
 * @param {array.<Reference>} references
 */
%>

<% if (references && Array.isArray(references) && references.length > 0) { %>
  <section id="references" class="section">
    <aside class="section-title">
      <h3>References</h3>
    </aside>
    <div class="section-content">
      <% references.forEach((reference) => { %>
        <div class="item-row">
          <p><%= reference.reference %></p>
          <p class="name">
            <strong>\u2014 <%= reference.name %></strong></p>
          </p>
          <br>
        </div>
      <% }); %>
    </div>
  </section>
<% } %>
`,"views/partials/skills.ejs":`<%
/**
 * @typedef {object} Skill
 * @property {string} name Skill name
 * @property {array.<string>} keywords Skill keywords
 *
 * [Section] Skills
 * @param {array.<Skill>} skills
 */
%>

<% if (skills && Array.isArray(skills) && skills.length > 0) { %>
  <section id="skills" class="section">
    <aside class="section-title">
      <h3>Skills</h3>
    </aside>
    <div class="section-content">
      <div class="item-row">
        <div class="item-row-split">
          <% skills.forEach((skill) => { %>
            <div class="item-split">
              <div class="name">
                <h4><%= skill.name %></h4>
              </div>
              <% if (skill.keywords && Array.isArray(skill.keywords) && skill.keywords.length > 0) { %>
                <ul class="keywords">
                  <% skill.keywords.forEach((keyword) => { %>
                    <li><%= keyword %></li>
                  <% }); %>
                </ul>
              <% } %>
            </div>
          <% }); %>
        </div>
      </div>
    </div>
  </section>
<% } %>
`,"views/partials/volunteer.ejs":`<%
/**
 * @typedef {object} Volunteer
 * @property {string} organization Volunteer organization
 * @property {string} startDate Volunteer startDate
 * @property {string} endDate Volunteer endDate
 * @property {string} website Volunteer company website
 * @property {string} position Volunteer position
 * @property {string} summary Volunteer summary
 * @property {array.<string>} highlights Volunteer highlights
 *
 * [Section] Volunteer
 * @param {array.<Volunteer>} volunteer
 */
%>

<% if (volunteer && Array.isArray(volunteer) && volunteer.length > 0) { %>
  <section id="volunteer" class="section">
    <aside class="section-title">
      <h3>Volunteer</h3>
    </aside>
    <div class="section-content">
      <% volunteer.forEach((v) => { %>
        <div class="item-row">
          <h4 class="strike-through">
            <span><%= v.organization %></span>
            <span class="date">
              <%= this.prettyDate(v.startDate) %> \u2014 <%= this.prettyDate(v.endDate) || 'Now' %>
            </span>
          </h4>
          <div class="website pull-right">
            <a target="_blank" href="<%= v.website %>"><%= v.website %></a>
          </div>
          <div class="position">
            <%= v.position %>
          </div>
          <div class="summary">
            <p><%= v.summary %></p>
          </div>
          <% if (v.highlights && Array.isArray(v.highlights) && v.highlights.length > 0) { %>
            <p>
              <strong>Highlights</strong>
            </p>
            <ul class="highlights">
              <% v.highlights.forEach((h) => { %>
                <li class="bullet"><%= h %></li>
              <% }); %>
            </ul>
          <% } %>
        </div>
      <% }); %>
    </div>
  </section>
<% } %>
`,"views/partials/work.ejs":`<%
/**
 * @typedef {object} Work
 * @property {string} name Work name
 * @property {string} startDate Work startDate
 * @property {string} endDate Work endDate
 * @property {string} url Work company url
 * @property {string} position Work position
 * @property {string} summary Work summary
 * @property {array.<string>} highlights Work highlights
 *
 * [Section] Work
 * @param {array.<Work>} work
 */
%>

<% if (work && Array.isArray(work) && work.length > 0) { %>
  <section id="work" class="section">
    <aside class="section-title">
      <h3>Work</h3>
    </aside>
    <div class="section-content">
      <% work.forEach((w) => { %>
        <div class="item-row">
          <h4 class="strike-through">
            <span><%= w.name %></span>
            <span class="date">
              <%= this.prettyDate(w.startDate) %> \u2014 <%= this.prettyDate(w.endDate) || 'Now' %>
            </span>
          </h4>
          <div class="website pull-right">
            <a target="_blank" href="<%= w.url %>"><%= this.domainOnly(w.url) %></a>
          </div>
          <div class="position">
            <%= w.position %>
          </div>
          <div class="summary">
            <p><%= w.summary %></p>
          </div>
          <% if (w.highlights && Array.isArray(w.highlights) && w.highlights.length > 0) { %>
            <p><strong>Highlights</strong></p>
            <ul class="highlights">
              <% w.highlights.forEach((h) => { %>
                <li class="bullet"><%= h %></li>
              <% }); %>
            </ul>
          <% } %>
        </div>
      <% }); %>
    </div>
  </section>
<% } %>
`,"views/resume.ejs":`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title><%= resume.basics.name %></title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css">

  <% if (css) { %>
  <style type="text/css">
<%- css %>
  </style>
  <% } %>
</head>
<body>
  <!-- HEADER -->
  <header id="header">
    <div class="container">
			<div class="section">
        <div class="section-title">
          <img src="<%= resume.basics.image %>" class="img-responsive img-circle pull-right" style="max-height: 88px">
        </div>
				<div class="section-content">
          <h1><%= resume.basics.name %></h1>
          <h2><%= resume.basics.label %></h2>
				</div>
			</div>
		</div>
	</header>

  <!-- CONTENT: Re-arrange sections order if necessary -->
  <div id="content" class="container">
    <!-- Contact -->
    <%- include('partials/contact', { contact: { email: resume.basics.email, phone: resume.basics.phone, website: resume.basics.website } }); %>
    <!-- About -->
    <%- include('partials/about', { summary: resume.basics.summary }); %>
    <!-- Profiles -->
    <%- include('partials/profiles', { profiles: resume.basics.profiles }); %>
    <!-- Work -->
    <%- include('partials/work', { work: resume.work }); %>
    <!-- Skills -->
    <%- include('partials/skills', { skills: resume.skills }); %>
    <!-- Education -->
    <%- include('partials/education', { education: resume.education }); %>
    <!-- Certificates -->
    <%- include('partials/certificates', { certificates: resume.certificates }); %>
    <!-- Awards -->
    <%- include('partials/awards', { awards: resume.awards }); %>
    <!-- Projects -->
    <%- include('partials/projects', { projects: resume.projects }); %>
    <!-- Volunteer -->
    <%- include('partials/volunteer', { volunteer: resume.volunteer }); %>
    <!-- Publications -->
    <%- include('partials/publications', { publications: resume.publications }); %>
    <!-- Languages -->
    <%- include('partials/languages', { languages: resume.languages }); %>
    <!-- Interests -->
    <%- include('partials/interests', { interests: resume.interests }); %>
    <!-- References -->
    <%- include('partials/references', { references: resume.references }); %>
  </div>
</body>
</html>
`},w={"assets/stylesheets":["style.css"],assets:["stylesheets"],helpers:["index.js","pretty_date.js"],"views/partials":["about.ejs","awards.ejs","certificates.ejs","contact.ejs","education.ejs","interests.ejs","languages.ejs","profiles.ejs","projects.ejs","publications.ejs","references.ejs","skills.ejs","volunteer.ejs","work.ejs"],views:["partials","resume.ejs"],".":["CHANGELOG.md","LICENSE","README.md","assets","helpers","index.js","package.json","resume.json","sample.png","views"]};ne=function(e,r){var n=ee(e);return n!==void 0?n:""},te=function(e,r){var n=N(e);return n===void 0&&(n=[]),r&&r.withFileTypes?n.map(function(t){var i=I(e)+"/"+t,a=N(i)!==void 0;return{name:t,isFile:function(){return!a},isDirectory:function(){return a}}}):n},re=function(e){return ee(e)!==void 0||N(e)!==void 0},ie=function(){},se=function(){},R=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},ae=R,oe=function(){},ce=function(){},le=function(){return{pipe:function(e){return e},on:function(){return this}}},pe=function(){return{write:function(){},end:function(){},on:function(){return this}}},Ve={readFileSync:ne,readdirSync:te,existsSync:re,writeFileSync:ie,mkdirSync:se,statSync:R,lstatSync:ae,unlinkSync:oe,rmdirSync:ce,createReadStream:le,createWriteStream:pe}});var de=y(d=>{"use strict";l();var Be=/[|\\{}()[\]^$+*?.]/g,He=Object.prototype.hasOwnProperty,z=function(e,r){return He.apply(e,[r])};d.escapeRegExpChars=function(e){return e?String(e).replace(Be,"\\$&"):""};var Ue={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},qe=/[&<>'"]/g;function Ge(e){return Ue[e]||e}var Xe=`var _ENCODE_HTML_RULES = {
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
`;d.escapeXML=function(e){return e==null?"":String(e).replace(qe,Ge)};function ue(){return Function.prototype.toString.call(this)+`;
`+Xe}try{typeof Object.defineProperty=="function"?Object.defineProperty(d.escapeXML,"toString",{value:ue}):d.escapeXML.toString=ue}catch{console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)")}d.shallowCopy=function(e,r){if(r=r||{},e!=null)for(var n in r)z(r,n)&&(n==="__proto__"||n==="constructor"||(e[n]=r[n]));return e};d.shallowCopyFromList=function(e,r,n){if(n=n||[],r=r||{},e!=null)for(var t=0;t<n.length;t++){var i=n[t];if(typeof r[i]<"u"){if(!z(r,i)||i==="__proto__"||i==="constructor")continue;e[i]=r[i]}}return e};d.cache={_data:{},set:function(e,r){this._data[e]=r},get:function(e){return this._data[e]},remove:function(e){delete this._data[e]},reset:function(){this._data={}}};d.hyphenToCamel=function(e){return e.replace(/-[a-z]/g,function(r){return r[1].toUpperCase()})};d.createNullProtoObjWherePossible=(function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}})();d.hasOwnOnlyObject=function(e){var r=d.createNullProtoObjWherePossible();for(var n in e)z(e,n)&&(r[n]=e[n]);return r}});var he=y((wn,$e)=>{$e.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.10",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^4.0.2","lru-cache":"^4.0.1",mocha:"^10.2.0","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"npx jake test"}}});var je=y(s=>{"use strict";l();var V=(W(),D(M)),j=(F(),D(T)),o=de(),me=!1,Ze=he().version,Ye="<",Qe=">",Ke="%",be="locals",en="ejs",nn="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",xe=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],tn=xe.concat("cache"),fe=/^\uFEFF/,J=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;s.cache=o.cache;s.fileLoader=V.readFileSync;s.localsName=be;s.promiseImpl=new Function("return this;")().Promise;s.resolveInclude=function(e,r,n){var t=j.dirname,i=j.extname,a=j.resolve,p=a(n?r:t(r),e),m=i(e);return m||(p+=".ejs"),p};function ge(e,r){var n;if(r.some(function(t){return n=s.resolveInclude(e,t,!0),V.existsSync(n)}))return n}function rn(e,r){var n,t,i=r.views,a=/^[A-Za-z]+:\\|^\//.exec(e);if(a&&a.length)e=e.replace(/^\/*/,""),Array.isArray(r.root)?n=ge(e,r.root):n=s.resolveInclude(e,r.root||"/",!0);else if(r.filename&&(t=s.resolveInclude(e,r.filename),V.existsSync(t)&&(n=t)),!n&&Array.isArray(i)&&(n=ge(e,i)),!n&&typeof r.includer!="function")throw new Error('Could not find the include file "'+r.escapeFunction(e)+'"');return n}function k(e,r){var n,t=e.filename,i=arguments.length>1;if(e.cache){if(!t)throw new Error("cache option requires a filename");if(n=s.cache.get(t),n)return n;i||(r=ve(t).toString().replace(fe,""))}else if(!i){if(!t)throw new Error("Internal EJS error: no file name or template provided");r=ve(t).toString().replace(fe,"")}return n=s.compile(r,e),e.cache&&s.cache.set(t,n),n}function sn(e,r,n){var t;if(n){try{t=k(e)(r)}catch(i){return n(i)}n(null,t)}else{if(typeof s.promiseImpl=="function")return new s.promiseImpl(function(i,a){try{t=k(e)(r),i(t)}catch(p){a(p)}});throw new Error("Please provide a callback function")}}function ve(e){return s.fileLoader(e)}function an(e,r){var n=o.shallowCopy(o.createNullProtoObjWherePossible(),r);if(n.filename=rn(e,n),typeof r.includer=="function"){var t=r.includer(e,n.filename);if(t&&(t.filename&&(n.filename=t.filename),t.template))return k(n,t.template)}return k(n)}function ye(e,r,n,t,i){var a=r.split(`
`),p=Math.max(t-3,0),m=Math.min(a.length,t+3),h=i(n),f=a.slice(p,m).map(function(b,_){var x=_+p+1;return(x==t?" >> ":"    ")+x+"| "+b}).join(`
`);throw e.path=h,e.message=(h||"ejs")+":"+t+`
`+f+`

`+e.message,e}function we(e){return e.replace(/;(\s*$)/,"$1")}s.compile=function(r,n){var t;return n&&n.scope&&(me||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),me=!0),n.context||(n.context=n.scope),delete n.scope),t=new c(r,n),t.compile()};s.render=function(e,r,n){var t=r||o.createNullProtoObjWherePossible(),i=n||o.createNullProtoObjWherePossible();return arguments.length==2&&o.shallowCopyFromList(i,t,xe),k(i,e)(t)};s.renderFile=function(){var e=Array.prototype.slice.call(arguments),r=e.shift(),n,t={filename:r},i,a;return typeof arguments[arguments.length-1]=="function"&&(n=e.pop()),e.length?(i=e.shift(),e.length?o.shallowCopy(t,e.pop()):(i.settings&&(i.settings.views&&(t.views=i.settings.views),i.settings["view cache"]&&(t.cache=!0),a=i.settings["view options"],a&&o.shallowCopy(t,a)),o.shallowCopyFromList(t,i,tn)),t.filename=r):i=o.createNullProtoObjWherePossible(),sn(t,i,n)};s.Template=c;s.clearCache=function(){s.cache.reset()};function c(e,r){var n=o.hasOwnOnlyObject(r),t=o.createNullProtoObjWherePossible();this.templateText=e,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",t.client=n.client||!1,t.escapeFunction=n.escape||n.escapeFunction||o.escapeXML,t.compileDebug=n.compileDebug!==!1,t.debug=!!n.debug,t.filename=n.filename,t.openDelimiter=n.openDelimiter||s.openDelimiter||Ye,t.closeDelimiter=n.closeDelimiter||s.closeDelimiter||Qe,t.delimiter=n.delimiter||s.delimiter||Ke,t.strict=n.strict||!1,t.context=n.context,t.cache=n.cache||!1,t.rmWhitespace=n.rmWhitespace,t.root=n.root,t.includer=n.includer,t.outputFunctionName=n.outputFunctionName,t.localsName=n.localsName||s.localsName||be,t.views=n.views,t.async=n.async,t.destructuredLocals=n.destructuredLocals,t.legacyInclude=typeof n.legacyInclude<"u"?!!n.legacyInclude:!0,t.strict?t._with=!1:t._with=typeof n._with<"u"?n._with:!0,this.opts=t,this.regex=this.createRegex()}c.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"};c.prototype={createRegex:function(){var e=nn,r=o.escapeRegExpChars(this.opts.delimiter),n=o.escapeRegExpChars(this.opts.openDelimiter),t=o.escapeRegExpChars(this.opts.closeDelimiter);return e=e.replace(/%/g,r).replace(/</g,n).replace(/>/g,t),new RegExp(e)},compile:function(){var e,r,n=this.opts,t="",i="",a=n.escapeFunction,p,m=n.filename?JSON.stringify(n.filename):"undefined";if(!this.source){if(this.generateSource(),t+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,n.outputFunctionName){if(!J.test(n.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");t+="  var "+n.outputFunctionName+` = __append;
`}if(n.localsName&&!J.test(n.localsName))throw new Error("localsName is not a valid JS identifier.");if(n.destructuredLocals&&n.destructuredLocals.length){for(var h="  var __locals = ("+n.localsName+` || {}),
`,f=0;f<n.destructuredLocals.length;f++){var b=n.destructuredLocals[f];if(!J.test(b))throw new Error("destructuredLocals["+f+"] is not a valid JS identifier.");f>0&&(h+=`,
  `),h+=b+" = __locals."+b}t+=h+`;
`}n._with!==!1&&(t+="  with ("+n.localsName+` || {}) {
`,i+=`  }
`),i+=`  return __output;
`,this.source=t+this.source+i}n.compileDebug?e=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+m+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:e=this.source,n.client&&(e="escapeFn = escapeFn || "+a.toString()+`;
`+e,n.compileDebug&&(e="rethrow = rethrow || "+ye.toString()+`;
`+e)),n.strict&&(e=`"use strict";
`+e),n.debug&&console.log(e),n.compileDebug&&n.filename&&(e=e+`
//# sourceURL=`+m+`
`);try{if(n.async)try{p=new Function("return (async function(){}).constructor;")()}catch(u){throw u instanceof SyntaxError?new Error("This environment does not support async/await"):u}else p=Function;r=new p(n.localsName+", escapeFn, include, rethrow",e)}catch(u){throw u instanceof SyntaxError&&(n.filename&&(u.message+=" in "+n.filename),u.message+=` while compiling ejs

`,u.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,u.message+="https://github.com/RyanZim/EJS-Lint",n.async||(u.message+=`
`,u.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),u}var _=n.client?r:function(B){var Te=function(Fe,H){var P=o.shallowCopy(o.createNullProtoObjWherePossible(),B);return H&&(P=o.shallowCopy(P,H)),an(Fe,n)(P)};return r.apply(n.context,[B||o.createNullProtoObjWherePossible(),a,Te,ye])};if(n.filename&&typeof Object.defineProperty=="function"){var x=n.filename,Oe=j.basename(x,j.extname(x));try{Object.defineProperty(_,"name",{value:Oe,writable:!1,enumerable:!1,configurable:!0})}catch{}}return _},generateSource:function(){var e=this.opts;e.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var r=this,n=this.parseTemplateText(),t=this.opts.delimiter,i=this.opts.openDelimiter,a=this.opts.closeDelimiter;n&&n.length&&n.forEach(function(p,m){var h;if(p.indexOf(i+t)===0&&p.indexOf(i+t+t)!==0&&(h=n[m+2],!(h==t+a||h=="-"+t+a||h=="_"+t+a)))throw new Error('Could not find matching close tag for "'+p+'".');r.scanLine(p)})},parseTemplateText:function(){for(var e=this.templateText,r=this.regex,n=r.exec(e),t=[],i;n;)i=n.index,i!==0&&(t.push(e.substring(0,i)),e=e.slice(i)),t.push(n[0]),e=e.slice(n[0].length),n=r.exec(e);return e&&t.push(e),t},_addOutput:function(e){if(this.truncate&&(e=e.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!e)return e;e=e.replace(/\\/g,"\\\\"),e=e.replace(/\n/g,"\\n"),e=e.replace(/\r/g,"\\r"),e=e.replace(/"/g,'\\"'),this.source+='    ; __append("'+e+`")
`},scanLine:function(e){var r=this,n=this.opts.delimiter,t=this.opts.openDelimiter,i=this.opts.closeDelimiter,a=0;switch(a=e.split(`
`).length-1,e){case t+n:case t+n+"_":this.mode=c.modes.EVAL;break;case t+n+"=":this.mode=c.modes.ESCAPED;break;case t+n+"-":this.mode=c.modes.RAW;break;case t+n+"#":this.mode=c.modes.COMMENT;break;case t+n+n:this.mode=c.modes.LITERAL,this.source+='    ; __append("'+e.replace(t+n+n,t+n)+`")
`;break;case n+n+i:this.mode=c.modes.LITERAL,this.source+='    ; __append("'+e.replace(n+n+i,n+i)+`")
`;break;case n+i:case"-"+n+i:case"_"+n+i:this.mode==c.modes.LITERAL&&this._addOutput(e),this.mode=null,this.truncate=e.indexOf("-")===0||e.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case c.modes.EVAL:case c.modes.ESCAPED:case c.modes.RAW:e.lastIndexOf("//")>e.lastIndexOf(`
`)&&(e+=`
`)}switch(this.mode){case c.modes.EVAL:this.source+="    ; "+e+`
`;break;case c.modes.ESCAPED:this.source+="    ; __append(escapeFn("+we(e)+`))
`;break;case c.modes.RAW:this.source+="    ; __append("+we(e)+`)
`;break;case c.modes.COMMENT:break;case c.modes.LITERAL:this._addOutput(e);break}}else this._addOutput(e)}r.opts.compileDebug&&a&&(this.currentLine+=a,this.source+="    ; __line = "+this.currentLine+`
`)}};s.escapeXML=o.escapeXML;s.__express=s.renderFile;s.VERSION=Ze;s.name=en;typeof window<"u"&&(window.ejs=s)});var _e=y((jn,ke)=>{l();var on=["January","February","March","April","May","June","July","August","September","October","November","December"];ke.exports=e=>{if(!e)return e;let r=new Date(e);return`${on[r.getMonth()]} ${r.getFullYear()}`}});var De=y((_n,Ee)=>{l();var cn=_e();function ln(e){return e&&e.replace(/(https?:\/\/)?(www.)?/i,"")}Ee.exports={prettyDate:cn,domainOnly:ln}});var Pe=y(Le=>{l();var Se=(F(),D(T)),Ae=(W(),D(M)),pn=je(),un=De();Le.render=e=>{let r=Se.join("/","views/resume.ejs"),n=pn.compile(Ae.readFileSync(r,"utf8"),{filename:r,context:{...un}}),t=Ae.readFileSync(Se.join("/","assets/stylesheets/style.css"),"utf8");return n({css:t,resume:e})}});l();var v=ze(Pe(),1),Ce=v.default??v,An=Ce.render??v.render,Ln=Ce.pdfRenderOptions??v.pdfRenderOptions;export{Ln as pdfRenderOptions,An as render};
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
