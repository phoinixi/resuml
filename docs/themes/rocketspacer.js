var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var In=Object.create;var j=Object.defineProperty;var Rn=Object.getOwnPropertyDescriptor;var Mn=Object.getOwnPropertyNames;var Wn=Object.getPrototypeOf,zn=Object.prototype.hasOwnProperty;var O=(n,r)=>()=>(n&&(r=n(n=0)),r);var y=(n,r)=>()=>(r||n((r={exports:{}}).exports,r),r.exports),q=(n,r)=>{for(var e in r)j(n,e,{get:r[e],enumerable:!0})},H=(n,r,e,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of Mn(r))!zn.call(n,s)&&s!==e&&j(n,s,{get:()=>r[s],enumerable:!(t=Rn(r,s))||t.enumerable});return n};var Jn=(n,r,e)=>(e=n!=null?In(Wn(n)):{},H(r||!n||!n.__esModule?j(e,"default",{value:n,enumerable:!0}):e,n)),S=n=>H(j({},"__esModule",{value:!0}),n);var l=O(()=>{});var T={};q(T,{basename:()=>D,default:()=>Vn,dirname:()=>P,extname:()=>A,isAbsolute:()=>Z,join:()=>G,normalize:()=>Y,parse:()=>K,relative:()=>Q,resolve:()=>X,sep:()=>$});var G,X,P,D,A,$,Z,Y,Q,K,Vn,F=O(()=>{"use strict";l();G=function(){return[].slice.call(arguments).join("/")},X=function(){return[].slice.call(arguments).join("/")},P=function(n){return n.split("/").slice(0,-1).join("/")},D=function(n,r){var e=n.split("/").pop()||"";return r&&e.endsWith(r)?e.slice(0,-r.length):e},A=function(n){var r=n.match(/\.[^.]+$/);return r?r[0]:""},$="/",Z=function(n){return n.charAt(0)==="/"},Y=function(n){return n},Q=function(n,r){return r},K=function(n){return{root:"",dir:P(n),base:D(n),ext:A(n),name:D(n,A(n))}},Vn={join:G,resolve:X,dirname:P,basename:D,extname:A,sep:$,isAbsolute:Z,normalize:Y,relative:Q,parse:K}});var M={};q(M,{createReadStream:()=>pn,createWriteStream:()=>un,default:()=>Bn,existsSync:()=>rn,lstatSync:()=>on,mkdirSync:()=>an,readFileSync:()=>en,readdirSync:()=>tn,rmdirSync:()=>ln,statSync:()=>R,unlinkSync:()=>cn,writeFileSync:()=>sn});function I(n){return String(n).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function nn(n){var r=I(n);if(L[r]!==void 0)return L[r];for(var e=Object.keys(L),t=0;t<e.length;t++)if(r.endsWith("/"+e[t])||r===e[t])return L[e[t]]}function N(n){var r=I(n);if((r===""||r===".")&&w["."]!==void 0)return w["."];if(w[r]!==void 0)return w[r];for(var e=Object.keys(w),t=0;t<e.length;t++)if(r.endsWith("/"+e[t])||r===e[t])return w[e[t]]}var L,w,en,tn,rn,sn,an,R,on,cn,ln,pn,un,Bn,W=O(()=>{"use strict";l();L={"assets/stylesheets/style.css":`@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

body {
	background: #fff;
	font-family: Lato, sans-serif;
	font-weight: 300;
	color: #333;
	margin: 0 0 80px;
	font-size: 15px;
}

a {
	color: #E32B46;
}

a:focus, a:hover {
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
	margin: 0 0 .5em 0;
}

p + p {
	margin-top: 10px;
}

h1, h2, h3, h4 {
	margin-top: 0;
	font-weight: 300;
	color: #555;
}

section {
	margin-top: 24px;
}

ul, ol {
	padding-left: 21px;
}

li {
	line-height: 1.8;
	list-style: none;
}

li:before {
	content: "\\f052";
	float: left;
	font: 16px Octicons;
	margin-top: 6px;
	margin-left: -20px;
	opacity: .1;
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

.container {
	max-width: 750px;
	padding: 0 30px;
}

.col-sm-6 {
	margin-bottom: 10px;
}

.col-sm-12 h4 {
	margin-top: 12px;
}

.col-sm-12 + .col-sm-12 {
	margin-top: 30px;
}

#header {
	padding: 50px 0 25px;
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

#content aside {
	text-align: right;
	padding-right: 30px;
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
	content: "\\f0d7";
	font: 16px Octicons;
	margin-right: 6px;
}

#education .studyType {
	margin-left: 25px;
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

@media (max-width: 768px) {
	.col-sm-6:last-child {
		margin-bottom: 0px;
  }

	#content aside {
		margin-bottom: 20px;
		padding-right: 0;
		text-align: left;
  }

	#publications .website a:before {
		content: "View publication";
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

@media print {
	body {
		font-size: 12px;
  }

	a[href]:after {
		display: none;
  }

	h1 {
		font-size: 24px;
  }

	#header h2 {
		font-size: 18px;
		margin-top: -8px;
  }

	h4 {
		font-size: 13px;
  }

  #header {
		padding: 0;
	}

	#content aside {
		margin: 0 !important;
	}

	#content h3 {
		font-size: 16px;
		margin-top: 0;
	}

	blockquote {
		border: 0;
		border-left: 3px solid #e7e9ec;
		font-size: 12px;
	}

	li:before {
		font: 10px Octicons;
	}

	.strike-through {
		border-top-color: transparent;
  }

	.strike-through span + span {
		font-size: 12px;
  }

	.col-sm-push-3 {
    left: 25%;
  }

	.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
    float: left;
  }

	.col-sm-12 {
	  width: 100%;
  }

	.col-sm-11 {
	  width: 91.66666666666666%;
  }

	.col-sm-10 {
	  width: 83.33333333333334%;
  }

	.col-sm-9 {
	  width: 75%;
  }

	.col-sm-8 {
	  width: 66.66666666666666%;
  }

	.col-sm-7 {
	  width: 58.333333333333336%;
  }

	.col-sm-6 {
	  width: 50%;
  }

	.col-sm-5 {
	  width: 41.66666666666667%;
  }

	.col-sm-4 {
	  width: 33.33333333333333%;
  }

	.col-sm-3 {
	  width: 25%;
  }

	.col-sm-2 {
	  width: 16.666666666666664%;
  }

	.col-sm-1 {
	  width: 8.333333333333332%;
  }
}
`,"package.json":`{
  "name": "jsonresume-theme-rocketspacer",
  "version": "1.2.2",
  "description": "My (rocketspacer) personal theme for JSON Resume",
  "keywords": [
    "resume",
    "jsonresume",
    "theme",
    "curriculum vitae",
    "CV"
  ],
  "author": "Tuan Nguyen <nmtuan.dev@gmail.com>",
  "license": "MIT",
  "homepage": "https://rocketspacer.github.io/jsonresume-theme-rocketspacer",
  "bugs": "https://github.com/rocketspacer/jsonresume-theme-rocketspacer/issues",
  "repository": "github:rocketspacer/jsonresume-theme-rocketspacer",
  "engines": {
    "node": ">= 10.0.0"
  },
  "scripts": {
    "start": "resume serve --port \${PORT:-4000}",
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
    "resume-cli": "1.2.3"
  }
}
`,"resume.json":`{
  "basics": {
    "name": "John Doe",
    "label": "Software Engineer, Backend Development",
    "picture": "dummy-profile.png",
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
      "company": "Google",
      "position": "Software Engineer 1",
      "website": "https://google.com",
      "startDate": "2017-09-01",
      "summary": "Help building components of the Foo system",
      "highlights": [
        "Awarded 'Employee of the Month'",
        "Optimize computational cost by 10%"
      ]
    },
    {
      "company": "Microsoft",
      "position": "Intern",
      "website": "https://microsoft.com",
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
      "highlights": [
        "Bring food to 350 sick people in need of help"
      ]
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
      "courses": [
        "DB1101 - Basic SQL",
        "BE8080 - Distributed Systems"
      ]
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
  "publications": [
    {
      "name": "Optimizing artificial neural network",
      "publisher": "Nature and Science journal",
      "releaseDate": "2014-10-01",
      "website": "http://publication.com",
      "summary": "My publication on a new algorithm that speed up recognition in artificial neural network"
    }
  ],
  "certifications": [
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
      "keywords": [
        "NodeJS",
        "Golang",
        "MongoDB",
        "Postgres",
        "Redis"
      ]
    },
    {
      "name": "System Administration",
      "level": "Master",
      "keywords": [
        "AWS",
        "Linux",
        "NGINX",
        "CloudFlare",
        "Shell",
        "Docker"
      ]
    }
  ],
  "languages": [
    {
      "name": "English",
      "level": "Native speaker"
    },
    {
      "name": "French",
      "level": "Proficient"
    },
    {
      "name": "Japanese",
      "level": "Beginner"
    }
  ],
  "interests": [
    {
      "name": "Anime",
      "keywords": [
        "Re:Zero",
        "Steins Gate"
      ]
    },
    {
      "name": "Movies",
      "keywords": [
        "Star Wars",
        "Lord of the Rings"
      ]
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
  <section id="about" class="row">
    <aside class="col-sm-3">
      <h3>About</h3>
    </aside>
    <div class="col-sm-9">
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
  <section id="awards" class="row">
    <aside class="col-sm-3">
      <h3>Awards</h3>
    </aside>
    <div class="col-sm-9">
      <div class="row">
        <% awards.forEach((award) => { %>
          <div class="col-sm-12">
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
    </div>
  </section>
<% } %>

`,"views/partials/certifications.ejs":`<%
/**
 * @typedef {object} Certifications
 * @property {string} name Certification name
 * @property {string} issuingOrganization Certification name
 * @property {string} issueDate Certification issue date
 * @property {string} expirationDate Certification issue date
 * @property {string} credentialID Certification ID
 * @property {string} credentialURL Certification URL
 *
 * [Section] Certifications
 * @param {array.<Certification>} certifications
 */
%>

<% if (certifications && Array.isArray(certifications) && certifications.length > 0) { %>
  <section id="publications" class="row">
    <aside class="col-sm-3">
      <h3>Certifications</h3>
    </aside>
    <div class="col-sm-9">
      <div class="row">
        <% certifications.forEach((c) => { %>
          <div class="col-sm-12">
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
  <section id="contact" class="row">
    <aside class="col-sm-3"><h3>Contact</h3></aside>
    <div class="col-sm-9">
      <div class="row">
        <% if (contact.email) { %>
          <div class="col-sm-6">
            <strong>Email</strong>
            <div>
              <a href="mailto:<%= contact.email %>"><%= contact.email %></a>
            </div>
          </div>
        <% } %>
        <% if (contact.phone) { %>
          <div class="col-sm-6">
            <strong>Phone</strong>
            <div class="phone"><%= contact.phone %></div>
          </div>
        <% } %>
        <% if (contact.website) { %>
          <div class="col-sm-6">
            <strong>Website</strong>
            <div>
              <a target="_blank" href="<%= contact.website %>"><%= contact.website %></a>
            </div>
          </div>
        <% } %>
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
  <section id="education" class="row">
    <aside class="col-sm-3">
      <h3>Education</h3>
    </aside>
    <div class="col-sm-9">
      <div class="row">
        <% education.forEach((e) => { %>
          <div class="col-sm-12">
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
  <section id="interests" class="row">
    <aside class="col-sm-3">
      <h3>Interests</h3>
    </aside>
    <div class="col-sm-9">
      <div class="row">
        <% interests.forEach((interest) => { %>
          <div class="col-sm-6">
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
  </section>
<% } %>
`,"views/partials/languages.ejs":`<%
/**
 * @typedef {object} Language
 * @property {string} name Language name
 * @property {string} level Language level
 *
 * [Section] Languages
 * @param {array.<Language>} languages
 */
%>

<% if (languages && Array.isArray(languages) && languages.length > 0) { %>
  <section id="languages" class="row">
    <aside class="col-sm-3">
      <h3>Languages</h3>
    </aside>
    <div class="col-sm-9">
      <div class="row">
        <% languages.forEach((language) => { %>
          <div class="col-sm-6">
            <div class="language"><strong><%= language.name %></strong></div>
            <div class="fluency"><%= language.level %></div>
          </div>
        <% }); %>
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
  <section id="profiles" class="row">
    <aside class="col-sm-3">
      <h3>Profiles</h3>
    </aside>
    <div class="col-sm-9">
      <div class="row">
        <% profiles.forEach((profile) => { %>
          <div class="col-sm-6">
            <strong class="network"><%= profile.network %></strong>
            <div class="url">
              <a target="_blank" href="<%= profile.url %>"><%= profile.username || profile.url %></a>
            </div>
          </div>
        <% }); %>
      </div>
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
  <section id="publications" class="row">
    <aside class="col-sm-3">
      <h3>Publications</h3>
    </aside>
    <div class="col-sm-9">
      <div class="row">
        <% publications.forEach((publication) => { %>
          <div class="col-sm-12">
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
  <section id="references" class="row">
    <aside class="col-sm-3">
      <h3>References</h3>
    </aside>
    <div class="col-sm-9">
      <div class="row">
        <% references.forEach((reference) => { %>
          <div class="col-sm-11">
            <p><%= reference.reference %></p>
            <p class="name">
              <strong>\u2014 <%= reference.name %></strong></p>
            </p>
            <br>
          </div>
        <% }); %>
      </div>
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
  <section id="skills" class="row">
    <aside class="col-sm-3">
      <h3>Skills</h3>
    </aside>
    <div class="col-sm-9">
      <div class="row">
        <% skills.forEach((skill) => { %>
          <div class="col-sm-6">
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
  <section id="volunteer" class="row">
    <aside class="col-sm-3">
      <h3>Volunteer</h3>
    </aside>
    <div class="col-sm-9">
      <div class="row">
        <% volunteer.forEach((v) => { %>
          <div class="col-sm-12">
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
    </div>
  </section>
<% } %>
`,"views/partials/work.ejs":`<%
/**
 * @typedef {object} Work
 * @property {string} company Work company
 * @property {string} startDate Work startDate
 * @property {string} endDate Work endDate
 * @property {string} website Work company website
 * @property {string} position Work position
 * @property {string} summary Work summary
 * @property {array.<string>} highlights Work highlights
 *
 * [Section] Work
 * @param {array.<Work>} work
 */
%>

<% if (work && Array.isArray(work) && work.length > 0) { %>
  <section id="work" class="row">
    <aside class="col-sm-3">
      <h3>Work</h3>
    </aside>
    <div class="col-sm-9">
      <div class="row">
        <% work.forEach((w) => { %>
          <div class="col-sm-12">
            <h4 class="strike-through">
              <span><%= w.company %></span>
              <span class="date">
                <%= this.prettyDate(w.startDate) %> \u2014 <%= this.prettyDate(w.endDate) || 'Now' %>
              </span>
            </h4>
            <div class="website pull-right">
              <a target="_blank" href="<%= w.website %>"><%= w.website %></a>
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
			<div class="row">
        <div class="col-sm-3">
          <img src="<%= resume.basics.picture %>" class="img-responsive img-circle pull-right" style="max-height: 88px">
        </div>
				<div class="col-sm-9">
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
    <!-- Certifications -->
    <%- include('partials/certifications', { certifications: resume.certifications }); %>
    <!-- Awards -->
    <%- include('partials/awards', { awards: resume.awards }); %>
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
`},w={"assets/stylesheets":["style.css"],assets:["stylesheets"],helpers:["index.js","pretty_date.js"],"views/partials":["about.ejs","awards.ejs","certifications.ejs","contact.ejs","education.ejs","interests.ejs","languages.ejs","profiles.ejs","publications.ejs","references.ejs","skills.ejs","volunteer.ejs","work.ejs"],views:["partials","resume.ejs"],".":["CHANGELOG.md","LICENSE","README.md","assets","helpers","index.js","package.json","resume.json","sample.png","views"]};en=function(n,r){var e=nn(n);return e!==void 0?e:""},tn=function(n,r){var e=N(n);return e===void 0&&(e=[]),r&&r.withFileTypes?e.map(function(t){var s=I(n)+"/"+t,a=N(s)!==void 0;return{name:t,isFile:function(){return!a},isDirectory:function(){return a}}}):e},rn=function(n){return nn(n)!==void 0||N(n)!==void 0},sn=function(){},an=function(){},R=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},on=R,cn=function(){},ln=function(){},pn=function(){return{pipe:function(n){return n},on:function(){return this}}},un=function(){return{write:function(){},end:function(){},on:function(){return this}}},Bn={readFileSync:en,readdirSync:tn,existsSync:rn,writeFileSync:sn,mkdirSync:an,statSync:R,lstatSync:on,unlinkSync:cn,rmdirSync:ln,createReadStream:pn,createWriteStream:un}});var mn=y(d=>{"use strict";l();var Un=/[|\\{}()[\]^$+*?.]/g,qn=Object.prototype.hasOwnProperty,z=function(n,r){return qn.apply(n,[r])};d.escapeRegExpChars=function(n){return n?String(n).replace(Un,"\\$&"):""};var Hn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},Gn=/[&<>'"]/g;function Xn(n){return Hn[n]||n}var $n=`var _ENCODE_HTML_RULES = {
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
`;d.escapeXML=function(n){return n==null?"":String(n).replace(Gn,Xn)};function dn(){return Function.prototype.toString.call(this)+`;
`+$n}try{typeof Object.defineProperty=="function"?Object.defineProperty(d.escapeXML,"toString",{value:dn}):d.escapeXML.toString=dn}catch{console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)")}d.shallowCopy=function(n,r){if(r=r||{},n!=null)for(var e in r)z(r,e)&&(e==="__proto__"||e==="constructor"||(n[e]=r[e]));return n};d.shallowCopyFromList=function(n,r,e){if(e=e||[],r=r||{},n!=null)for(var t=0;t<e.length;t++){var s=e[t];if(typeof r[s]<"u"){if(!z(r,s)||s==="__proto__"||s==="constructor")continue;n[s]=r[s]}}return n};d.cache={_data:{},set:function(n,r){this._data[n]=r},get:function(n){return this._data[n]},remove:function(n){delete this._data[n]},reset:function(){this._data={}}};d.hyphenToCamel=function(n){return n.replace(/-[a-z]/g,function(r){return r[1].toUpperCase()})};d.createNullProtoObjWherePossible=(function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}})();d.hasOwnOnlyObject=function(n){var r=d.createNullProtoObjWherePossible();for(var e in n)z(n,e)&&(r[e]=n[e]);return r}});var hn=y((ye,Zn)=>{Zn.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.10",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^4.0.2","lru-cache":"^4.0.1",mocha:"^10.2.0","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"npx jake test"}}});var _n=y(i=>{"use strict";l();var V=(W(),S(M)),k=(F(),S(T)),o=mn(),fn=!1,Yn=hn().version,Qn="<",Kn=">",ne="%",xn="locals",ee="ejs",te="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",kn=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],re=kn.concat("cache"),gn=/^\uFEFF/,J=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;i.cache=o.cache;i.fileLoader=V.readFileSync;i.localsName=xn;i.promiseImpl=new Function("return this;")().Promise;i.resolveInclude=function(n,r,e){var t=k.dirname,s=k.extname,a=k.resolve,p=a(e?r:t(r),n),h=s(n);return h||(p+=".ejs"),p};function vn(n,r){var e;if(r.some(function(t){return e=i.resolveInclude(n,t,!0),V.existsSync(e)}))return e}function se(n,r){var e,t,s=r.views,a=/^[A-Za-z]+:\\|^\//.exec(n);if(a&&a.length)n=n.replace(/^\/*/,""),Array.isArray(r.root)?e=vn(n,r.root):e=i.resolveInclude(n,r.root||"/",!0);else if(r.filename&&(t=i.resolveInclude(n,r.filename),V.existsSync(t)&&(e=t)),!e&&Array.isArray(s)&&(e=vn(n,s)),!e&&typeof r.includer!="function")throw new Error('Could not find the include file "'+r.escapeFunction(n)+'"');return e}function _(n,r){var e,t=n.filename,s=arguments.length>1;if(n.cache){if(!t)throw new Error("cache option requires a filename");if(e=i.cache.get(t),e)return e;s||(r=yn(t).toString().replace(gn,""))}else if(!s){if(!t)throw new Error("Internal EJS error: no file name or template provided");r=yn(t).toString().replace(gn,"")}return e=i.compile(r,n),n.cache&&i.cache.set(t,e),e}function ie(n,r,e){var t;if(e){try{t=_(n)(r)}catch(s){return e(s)}e(null,t)}else{if(typeof i.promiseImpl=="function")return new i.promiseImpl(function(s,a){try{t=_(n)(r),s(t)}catch(p){a(p)}});throw new Error("Please provide a callback function")}}function yn(n){return i.fileLoader(n)}function ae(n,r){var e=o.shallowCopy(o.createNullProtoObjWherePossible(),r);if(e.filename=se(n,e),typeof r.includer=="function"){var t=r.includer(n,e.filename);if(t&&(t.filename&&(e.filename=t.filename),t.template))return _(e,t.template)}return _(e)}function wn(n,r,e,t,s){var a=r.split(`
`),p=Math.max(t-3,0),h=Math.min(a.length,t+3),m=s(e),f=a.slice(p,h).map(function(b,E){var x=E+p+1;return(x==t?" >> ":"    ")+x+"| "+b}).join(`
`);throw n.path=m,n.message=(m||"ejs")+":"+t+`
`+f+`

`+n.message,n}function bn(n){return n.replace(/;(\s*$)/,"$1")}i.compile=function(r,e){var t;return e&&e.scope&&(fn||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),fn=!0),e.context||(e.context=e.scope),delete e.scope),t=new c(r,e),t.compile()};i.render=function(n,r,e){var t=r||o.createNullProtoObjWherePossible(),s=e||o.createNullProtoObjWherePossible();return arguments.length==2&&o.shallowCopyFromList(s,t,kn),_(s,n)(t)};i.renderFile=function(){var n=Array.prototype.slice.call(arguments),r=n.shift(),e,t={filename:r},s,a;return typeof arguments[arguments.length-1]=="function"&&(e=n.pop()),n.length?(s=n.shift(),n.length?o.shallowCopy(t,n.pop()):(s.settings&&(s.settings.views&&(t.views=s.settings.views),s.settings["view cache"]&&(t.cache=!0),a=s.settings["view options"],a&&o.shallowCopy(t,a)),o.shallowCopyFromList(t,s,re)),t.filename=r):s=o.createNullProtoObjWherePossible(),ie(t,s,e)};i.Template=c;i.clearCache=function(){i.cache.reset()};function c(n,r){var e=o.hasOwnOnlyObject(r),t=o.createNullProtoObjWherePossible();this.templateText=n,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",t.client=e.client||!1,t.escapeFunction=e.escape||e.escapeFunction||o.escapeXML,t.compileDebug=e.compileDebug!==!1,t.debug=!!e.debug,t.filename=e.filename,t.openDelimiter=e.openDelimiter||i.openDelimiter||Qn,t.closeDelimiter=e.closeDelimiter||i.closeDelimiter||Kn,t.delimiter=e.delimiter||i.delimiter||ne,t.strict=e.strict||!1,t.context=e.context,t.cache=e.cache||!1,t.rmWhitespace=e.rmWhitespace,t.root=e.root,t.includer=e.includer,t.outputFunctionName=e.outputFunctionName,t.localsName=e.localsName||i.localsName||xn,t.views=e.views,t.async=e.async,t.destructuredLocals=e.destructuredLocals,t.legacyInclude=typeof e.legacyInclude<"u"?!!e.legacyInclude:!0,t.strict?t._with=!1:t._with=typeof e._with<"u"?e._with:!0,this.opts=t,this.regex=this.createRegex()}c.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"};c.prototype={createRegex:function(){var n=te,r=o.escapeRegExpChars(this.opts.delimiter),e=o.escapeRegExpChars(this.opts.openDelimiter),t=o.escapeRegExpChars(this.opts.closeDelimiter);return n=n.replace(/%/g,r).replace(/</g,e).replace(/>/g,t),new RegExp(n)},compile:function(){var n,r,e=this.opts,t="",s="",a=e.escapeFunction,p,h=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),t+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName){if(!J.test(e.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");t+="  var "+e.outputFunctionName+` = __append;
`}if(e.localsName&&!J.test(e.localsName))throw new Error("localsName is not a valid JS identifier.");if(e.destructuredLocals&&e.destructuredLocals.length){for(var m="  var __locals = ("+e.localsName+` || {}),
`,f=0;f<e.destructuredLocals.length;f++){var b=e.destructuredLocals[f];if(!J.test(b))throw new Error("destructuredLocals["+f+"] is not a valid JS identifier.");f>0&&(m+=`,
  `),m+=b+" = __locals."+b}t+=m+`;
`}e._with!==!1&&(t+="  with ("+e.localsName+` || {}) {
`,s+=`  }
`),s+=`  return __output;
`,this.source=t+this.source+s}e.compileDebug?n=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+h+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:n=this.source,e.client&&(n="escapeFn = escapeFn || "+a.toString()+`;
`+n,e.compileDebug&&(n="rethrow = rethrow || "+wn.toString()+`;
`+n)),e.strict&&(n=`"use strict";
`+n),e.debug&&console.log(n),e.compileDebug&&e.filename&&(n=n+`
//# sourceURL=`+h+`
`);try{if(e.async)try{p=new Function("return (async function(){}).constructor;")()}catch(u){throw u instanceof SyntaxError?new Error("This environment does not support async/await"):u}else p=Function;r=new p(e.localsName+", escapeFn, include, rethrow",n)}catch(u){throw u instanceof SyntaxError&&(e.filename&&(u.message+=" in "+e.filename),u.message+=` while compiling ejs

`,u.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,u.message+="https://github.com/RyanZim/EJS-Lint",e.async||(u.message+=`
`,u.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),u}var E=e.client?r:function(B){var Fn=function(Nn,U){var C=o.shallowCopy(o.createNullProtoObjWherePossible(),B);return U&&(C=o.shallowCopy(C,U)),ae(Nn,e)(C)};return r.apply(e.context,[B||o.createNullProtoObjWherePossible(),a,Fn,wn])};if(e.filename&&typeof Object.defineProperty=="function"){var x=e.filename,Tn=k.basename(x,k.extname(x));try{Object.defineProperty(E,"name",{value:Tn,writable:!1,enumerable:!1,configurable:!0})}catch{}}return E},generateSource:function(){var n=this.opts;n.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var r=this,e=this.parseTemplateText(),t=this.opts.delimiter,s=this.opts.openDelimiter,a=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(p,h){var m;if(p.indexOf(s+t)===0&&p.indexOf(s+t+t)!==0&&(m=e[h+2],!(m==t+a||m=="-"+t+a||m=="_"+t+a)))throw new Error('Could not find matching close tag for "'+p+'".');r.scanLine(p)})},parseTemplateText:function(){for(var n=this.templateText,r=this.regex,e=r.exec(n),t=[],s;e;)s=e.index,s!==0&&(t.push(n.substring(0,s)),n=n.slice(s)),t.push(e[0]),n=n.slice(e[0].length),e=r.exec(n);return n&&t.push(n),t},_addOutput:function(n){if(this.truncate&&(n=n.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!n)return n;n=n.replace(/\\/g,"\\\\"),n=n.replace(/\n/g,"\\n"),n=n.replace(/\r/g,"\\r"),n=n.replace(/"/g,'\\"'),this.source+='    ; __append("'+n+`")
`},scanLine:function(n){var r=this,e=this.opts.delimiter,t=this.opts.openDelimiter,s=this.opts.closeDelimiter,a=0;switch(a=n.split(`
`).length-1,n){case t+e:case t+e+"_":this.mode=c.modes.EVAL;break;case t+e+"=":this.mode=c.modes.ESCAPED;break;case t+e+"-":this.mode=c.modes.RAW;break;case t+e+"#":this.mode=c.modes.COMMENT;break;case t+e+e:this.mode=c.modes.LITERAL,this.source+='    ; __append("'+n.replace(t+e+e,t+e)+`")
`;break;case e+e+s:this.mode=c.modes.LITERAL,this.source+='    ; __append("'+n.replace(e+e+s,e+s)+`")
`;break;case e+s:case"-"+e+s:case"_"+e+s:this.mode==c.modes.LITERAL&&this._addOutput(n),this.mode=null,this.truncate=n.indexOf("-")===0||n.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case c.modes.EVAL:case c.modes.ESCAPED:case c.modes.RAW:n.lastIndexOf("//")>n.lastIndexOf(`
`)&&(n+=`
`)}switch(this.mode){case c.modes.EVAL:this.source+="    ; "+n+`
`;break;case c.modes.ESCAPED:this.source+="    ; __append(escapeFn("+bn(n)+`))
`;break;case c.modes.RAW:this.source+="    ; __append("+bn(n)+`)
`;break;case c.modes.COMMENT:break;case c.modes.LITERAL:this._addOutput(n);break}}else this._addOutput(n)}r.opts.compileDebug&&a&&(this.currentLine+=a,this.source+="    ; __line = "+this.currentLine+`
`)}};i.escapeXML=o.escapeXML;i.__express=i.renderFile;i.VERSION=Yn;i.name=ee;typeof window<"u"&&(window.ejs=i)});var jn=y((xe,En)=>{l();var oe=["January","February","March","April","May","June","July","August","September","October","November","December"];En.exports=n=>{if(!n)return n;let r=new Date(n);return`${oe[r.getMonth()]} ${r.getFullYear()}`}});var Dn=y((_e,Sn)=>{l();var ce=jn();Sn.exports={prettyDate:ce}});var On=y(Cn=>{l();var An=(F(),S(T)),Ln=(W(),S(M)),le=_n(),pe=Dn();Cn.render=n=>{let r=An.join("/","views/resume.ejs"),e=le.compile(Ln.readFileSync(r,"utf8"),{filename:r,context:{...pe}}),t=Ln.readFileSync(An.join("/","assets/stylesheets/style.css"),"utf8");return e({css:t,resume:n})}});l();var v=Jn(On(),1),Pn=v.default??v,De=Pn.render??v.render,Ae=Pn.pdfRenderOptions??v.pdfRenderOptions;export{Ae as pdfRenderOptions,De as render};
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
