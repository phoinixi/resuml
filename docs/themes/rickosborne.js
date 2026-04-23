var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Oe=Object.create;var k=Object.defineProperty;var Ye=Object.getOwnPropertyDescriptor;var Pe=Object.getOwnPropertyNames;var Ue=Object.getPrototypeOf,Re=Object.prototype.hasOwnProperty;var q=(r,e)=>()=>(r&&(e=r(r=0)),e);var c=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),Z=(r,e)=>{for(var t in e)k(r,t,{get:e[t],enumerable:!0})},B=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Pe(e))!Re.call(r,a)&&a!==t&&k(r,a,{get:()=>e[a],enumerable:!(n=Ye(e,a))||n.enumerable});return r};var We=(r,e,t)=>(t=r!=null?Oe(Ue(r)):{},B(e||!r||!r.__esModule?k(t,"default",{value:r,enumerable:!0}):t,r)),G=r=>B(k({},"__esModule",{value:!0}),r);var i=q(()=>{});var sn={};Z(sn,{createReadStream:()=>an,createWriteStream:()=>on,default:()=>Fe,existsSync:()=>X,lstatSync:()=>en,mkdirSync:()=>nn,readFileSync:()=>K,readdirSync:()=>V,rmdirSync:()=>rn,statSync:()=>Q,unlinkSync:()=>tn,writeFileSync:()=>_});function $(r){return String(r).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function H(r){var e=$(r);if(L[e]!==void 0)return L[e];for(var t=Object.keys(L),n=0;n<t.length;n++)if(e.endsWith("/"+t[n])||e===t[n])return L[t[n]]}function E(r){var e=$(r);if((e===""||e===".")&&w["."]!==void 0)return w["."];if(w[e]!==void 0)return w[e];for(var t=Object.keys(w),n=0;n<t.length;n++)if(e.endsWith("/"+t[n])||e===t[n])return w[t[n]]}var L,w,K,V,X,_,nn,Q,en,tn,rn,an,on,Fe,cn=q(()=>{"use strict";i();L={"example.json":`{
  "awards": [
    {
      "awarder": "Company",
      "date": "2014-11-01",
      "summary": "There is no spoon.",
      "title": "Award"
    }
  ],
  "basics": {
    "email": "john@gmail.com",
    "image": "",
    "label": "Programmer",
    "location": {
      "address": "2712 Broadway St",
      "city": "San Francisco",
      "countryCode": "US",
      "postalCode": "CA 94115",
      "region": "California"
    },
    "name": "John Doe",
    "phone": "(912) 555-4321",
    "profiles": [
      {
        "network": "Twitter",
        "url": "https://twitter.com/john",
        "username": "john"
      }
    ],
    "summary": "A summary of John Doe\u2026",
    "url": "https://johndoe.com"
  },
  "certificates": [
    {
      "date": "2021-11-07",
      "issuer": "Company",
      "name": "Certificate",
      "url": "https://certificate.com"
    }
  ],
  "education": [
    {
      "area": "Software Development",
      "courses": [
        "DB1101 - Basic SQL"
      ],
      "endDate": "2013-01-01",
      "institution": "University",
      "score": "4.0",
      "startDate": "2011-01-01",
      "studyType": "Bachelor",
      "url": "https://institution.com/"
    }
  ],
  "interests": [
    {
      "keywords": [
        "Ferrets",
        "Unicorns"
      ],
      "name": "Wildlife"
    }
  ],
  "languages": [
    {
      "fluency": "Native speaker",
      "language": "English"
    }
  ],
  "projects": [
    {
      "description": "Description\u2026",
      "endDate": "2021-01-01",
      "entity": "Entity",
      "highlights": [
        "Won award at AIHacks 2016"
      ],
      "keywords": [
        "HTML"
      ],
      "name": "Project",
      "roles": [
        "Team Lead"
      ],
      "startDate": "2019-01-01",
      "type": "application",
      "url": "https://project.com/"
    }
  ],
  "publications": [
    {
      "name": "Publication",
      "publisher": "Company",
      "releaseDate": "2014-10-01",
      "summary": "Description\u2026",
      "url": "https://publication.com"
    }
  ],
  "references": [
    {
      "name": "Jane Doe",
      "reference": "Reference\u2026"
    }
  ],
  "skills": [
    {
      "keywords": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "level": "Master",
      "name": "Web Development"
    }
  ],
  "volunteer": [
    {
      "endDate": "2013-01-01",
      "highlights": [
        "Awarded 'Volunteer of the Month'"
      ],
      "organization": "Organization",
      "position": "Volunteer",
      "startDate": "2012-01-01",
      "summary": "Description\u2026",
      "url": "https://organization.com/"
    }
  ],
  "work": [
    {
      "endDate": "2014-01-01",
      "highlights": [
        "Started the company"
      ],
      "name": "Company",
      "position": "President",
      "startDate": "2013-01-01",
      "summary": "Description\u2026",
      "url": "https://company.com"
    }
  ]
}
`,"package.json":`{
  "author": {
    "name": "Rick Osborne",
    "url": "https://rickosborne.org"
  },
  "description": "Rick O's theme for registry.jsonresume.org",
  "license": "CC-BY-NC-SA-4.0",
  "main": "index.js",
  "name": "jsonresume-theme-rickosborne",
  "repository": {
    "type": "git",
    "url": "https://github.com/rickosborne/jsonresume-theme-rickosborne"
  },
  "scripts": {
    "test:example": "node test.js example.json example.html",
    "test:rickosborne": "node test.js rickosborne.json rickosborne.html"
  },
  "version": "2022.09.16-T1450"
}
`,"resume.css":`:root {
    --text: 1.92vw;
    --cadence-quarter: calc(var(--text) * 0.45);
    --cadence-half: calc(var(--text) * 0.9);
    --cadence-one: calc(var(--text) * 1.8);
    --cadence-two: calc(var(--text) * 3.6);
    --text-color: #222;
    --light: #444;
    --lighter: #666;
    --ghostly: #eee;
}

html {
    width: 100%;
    height: 100%;
    background: #555;
    margin: 0;
    padding: 0;
    font-size: var(--text);
}

* {
    margin: 0;
    padding: 0;
    outline: none;
    text-indent: 0;
    list-style: none;
    font-weight: 200;
    font-style: normal;
    text-decoration: none;
}

body, h1, h2, h3, h4, h5, h6 {
    font-size: var(--text);
}

body {
    width: 100%;
    min-height: 100%;
    overflow-y: auto;
    background: white;
    color: var(--text-color);
    max-width: calc(var(--text) * 50.0);
    margin: var(--cadence-half) auto;
    padding: 0;
    box-shadow: 0 0 var(--cadence-half) black;
    line-height: var(--cadence-one);
}

a, a:visited, a:focus, a:hover {
    color: #248 !important;
    text-decoration: none;
}

a:focus, a:hover {
    color: #36c !important;
    text-decoration: underline;
}

#resume {
    padding: var(--cadence-one);
    align-content: start;
    align-items: start;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

#basics {
    display: grid;
    grid-template-areas:
        "name label"
        "summary summary";
    grid-template-columns: 1fr auto;
    align-items: baseline;
    gap: 0;
}

#person-name {
    font-size: 200%;
    line-height: var(--cadence-two);
    grid-area: name;
    flex-wrap: nowrap;
    white-space: nowrap;
    flex-grow: 1;
}

#person-label {
    font-size: 150%;
    line-height: var(--cadence-two);
    grid-area: label;
    color: var(--light);
}

#person-summary {
    grid-area: summary;
    color: var(--lighter);
    font-style: italic;
}

.has-image #top {
    display: flex;
    flex-direction: row;
}

.has-image #basics {
    display: block;
}

.has-image #person-name {
    line-height: inherit;
    margin-bottom: var(--cadence-quarter);
}

.has-image #person-label {
    line-height: inherit;
    font-size: 120%;
    margin-bottom: var(--cadence-quarter);
}

.has-image #person-summary {
    line-height: 120%;
}

.person-location-parts {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0 var(--cadence-quarter);
}

#avatar {
    max-width: 60%;
    padding: 0 20%;
    height: auto;
    border-radius: 50%;
    margin-bottom: var(--cadence-half);
}

#top {
    flex-basis: 100%;
    order: 1;
}

#left {
    padding-right: var(--cadence-one);
    grid-area: left;
    min-width: 60%;
    flex-basis: 60%;
    order: 2;
    flex-grow: 1;
    flex-shrink: 0;
}

#right {
    /*border-left: thin solid var(--ghostly);*/
    padding-left: var(--cadence-one);
    grid-area: right;
    min-width: 30%;
    flex-basis: 30%;
    order: 3;
    flex-grow: 0;
    flex-shrink: 0;
}

#right, #right h1, #right h2, #right h3, #right h4, #right h5, #right h6 {
    font-size: 90%;
}

.list h1 {
    font-weight: 400;
    text-transform: uppercase;
    color: var(--lighter);
    line-height: var(--cadence-two);
}

.list {
    margin-bottom: 0;
}

.list header {
    color: var(--lighter);
}

.list header > *:first-child {
    color: var(--text-color);
}

.list header > * {
    display: inline;
}

.list header .between:after, .language-item .between:after, .person-location-parts .between:after {
    content: ",\\20";
    color: var(--lighter);
}

#right .list header > *:first-child, .list header > *:first-child {
    padding-left: 0;
    border-left: none;
    margin-left: 0;
}

#right .list header > *:last-child:after, .list header > *:last-child:after {
    content: none;
    padding-right: unset;
}

.list header > *:first-child {
    font-weight: 400;
}

.dates {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.date-delimiter::before {
    content: "-";
}

.dates {
    break-inside: avoid;
    white-space: nowrap;
}

.dates.same-dates .date-start,
.dates.same-dates .date-delimiter,
.dates.no-start .date-delimiter,
.dates.no-end .date-delimiter {
    display: none;
}

.education-summary, .work-summary, .project-description {
    font-style: italic;
}

.work-domain, .work-location, .work-employer {
    letter-spacing: -0.05em;
    color: var(--lighter);
}

.work-item {
    margin-bottom: var(--cadence-half);
}

.work-highlights-list {
    margin-left: var(--cadence-one);
}

.work-highlights-item {
    list-style-type: square;
}

.work-highlights-item ::marker {
    color: var(--light);
}

.work-highlights-item .first-word {
    font-style: italic;
}

.skill-item, .interest-item {
    margin: var(--cadence-quarter) 0;
}

.skill-item header, .interest-item header {
    line-height: 120%;
}

.skill-item:first-of-type, .interest-item:first-of-type {
    margin-top: 0;
}

.skill-keyword-list, .interest-keyword-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: calc(var(--cadence-quarter) * 0.5);
}

.skill-keyword-item, .interest-keyword-item {
    background-color: var(--ghostly);
    color: var(--light);
    border-radius: var(--cadence-quarter);
    padding: calc(var(--cadence-quarter) * 0.5) var(--cadence-quarter);
    font-size: 90%;
    line-height: 90%;
    text-wrap: avoid;
    white-space: nowrap;
}

.skill-level {
    color: var(--lighter);
    font-size: 90%;
    margin: var(--cadence-quarter);
}

#top {
    grid-area: top;
}

#bottom {
    grid-area: bottom;
}

#person-url, #person-email, #person-location, .profile-url {
    display: flex;
    flex-direction: row;
    gap: var(--cadence-quarter);
    align-items: start;
    align-content: start;
}

.icon {
    width: calc(var(--cadence-one) * 0.8);
    height: calc(var(--cadence-one) * 0.8);
    opacity: 25%;
    flex-shrink: 0;
    flex-grow: 0;
    padding: calc(var(--cadence-one) * 0.1);
    padding-left: 0;
}

#basics-profiles, #basics-contact, #basics-url, #basics-email, #basics-location, .profile-network {
    display: none;
}

#person-location .between {
    width: 0;
    margin-left: calc(var(--cadence-quarter) * -1.0);
}

.project-item header {
    line-height: 120%;
}

.project-url-a, .project-description {
    font-size: 90%;
    line-height: 120%;
}

.project-description {
    margin-top: var(--cadence-quarter);
}

.project-item {
    margin-bottom: var(--cadence-quarter);
}

@media print {
    :root {
        --text: 8.75pt;
        --cadence-quarter: calc(var(--text) * 0.4);
        --cadence-half: calc(var(--text) * 0.8);
        --cadence-one: calc(var(--text) * 1.6);
        --cadence-two: calc(var(--text) * 3.2);
    }

    html {
        background-color: transparent;
    }

    body {
        box-shadow: none;
        width: 100%;
        max-width: 100%;
        padding: 0;
        margin: 0 auto;
        line-height: 130%;
        break-inside: auto;
        page-break-inside: auto;
    }

    a, a:visited, a:focus, a:hover {
        color: var(--text-color) !important;
    }

    .no-print {
        display: none;
    }

    #resume {
        padding: 0;
        margin: 0;
    }

    #top {
        page-break-after: avoid;
        break-after: avoid;
    }

    #left, #right, #resume {
        break-before: avoid;
        page-break-before: avoid;
        break-inside: auto;
        page-break-inside: auto;
    }

    #bottom {
        page-break-before: avoid;
        break-before: avoid;
    }

    #right {
        padding-top: var(--cadence-half);
    }

    #left > section, #right > section {
        break-before: avoid;
        break-inside: auto;
        page-break-before: avoid;
        page-break-inside: auto;
    }

    .work-highlights-item {
        font-size: 90%;
        line-height: 120%;
    }

    #person-summary, .list h1 {
        color: var(--light);
    }

}

@media print and (-webkit-min-device-pixel-ratio:0) {
    /* Safari */
    .work-item {
        margin-bottom: var(--cadence-quarter);
    }
    #resume {
        padding-top: var(--cadence-quarter);
    }
    /*.list h1 {*/
    /*    line-height: 130%;*/
    /*}*/
}

@media screen {
    #how-to-print {
        position: fixed;
        bottom: 0;
        right: 0;
        width: calc(var(--cadence-half) + 30%);
        background-color: hsla(60, 100%, 80%, 95%);
        padding: var(--cadence-quarter);
        font-size: 80%;
        border-top: thin solid hsla(60, 100%, 40%, 95%);
        border-left: thin solid hsla(60, 100%, 40%, 95%);
        line-height: 120%;
    }
}
`,"rickosborne.json":`{
  "$schema": "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  "basics": {
    "email": "rickosborne@duck.com",
    "image": "https://rickosborne.org/images/rick-teach-hands.jpg",
    "label": "Cloud & Mobile Engineering Force Multiplier",
    "location": {
      "countryCode": "US",
      "region": "California"
    },
    "name": "Rick Osborne",
    "profiles": [
      {
        "network": "github",
        "url": "https://github.com/rickosborne",
        "username": "rickosborne"
      }
    ],
    "summary": "Web software professional since 1995.  Leadership, Education, Architecture, Development, Exploration, Research.",
    "url": "https://rickosborne.org"
  },
  "education": [
    {
      "area": "Education Media Design & Technology",
      "endDate": "2011",
      "institution": "Full Sail University",
      "score": "4.0",
      "startDate": "2011",
      "studyType": "M.S.",
      "url": "https://web.archive.org/web/20110113121529/https://online.fullsail.edu/degrees/education-media-design-technology-masters/courses"
    },
    {
      "area": "Information Systems Technology",
      "endDate": "2009",
      "institution": "University of Central Florida",
      "startDate": "2007",
      "studyType": "B.S.",
      "url": "https://web.archive.org/web/20090329131204/https://www.ent.ucf.edu/undergraduate/ist/ist_index.html"
    }
  ],
  "interests": [
    {
      "keywords": [
        "gaming",
        "social",
        "creativity",
        "collaboration",
        "empathy"
      ],
      "name": "tabletop RPGs"
    },
    {
      "keywords": [
        "gaming",
        "strategy",
        "tactics",
        "social",
        "instruction",
        "cooperation"
      ],
      "name": "board games"
    },
    {
      "keywords": [
        "gaming",
        "strategy",
        "tactics",
        "problem solving"
      ],
      "name": "console gaming, open-world RPGs"
    },
    {
      "keywords": [
        "web",
        "mobile",
        "gaming",
        "data"
      ],
      "name": "programming"
    },
    {
      "keywords": [
        "fiction",
        "creativity",
        "research",
        "perspective"
      ],
      "name": "writing"
    }
  ],
  "languages": [
    {
      "fluency": "native",
      "language": "English (US)"
    }
  ],
  "meta": {
    "canonical": "https://ricko.is/resume.json",
    "lastModified": "2022-09-13T23:59:59",
    "theme": "kendall",
    "version": "2022.9.13"
  },
  "projects": [
    {
      "description": "Snarky one-page site you can link to in group chat whenever someone asks the inevitable question.",
      "name": "Should I Create A Ticket?",
      "type": "website",
      "url": "https://should-i-create-a-ticket.team/"
    },
    {
      "description": "Geek-oriented wordlist, dictionary, and identifier generator web app, intended for projects which need URL- and human-safe random word generators.",
      "name": "words.supply",
      "type": "application",
      "url": "https://words.supply/"
    },
    {
      "description": "Bare bones link shortener I created for myself to use, but which has gone through a number of tech stack iterations over the years.",
      "name": "ricko.is Bounce",
      "type": "application",
      "url": "https://github.com/rickosborne/bounce"
    }
  ],
  "skills": [
    {
      "keywords": [
        "vision",
        "communication",
        "mentorship",
        "guidance"
      ],
      "level": "advanced",
      "name": "Team Leadership"
    },
    {
      "keywords": [
        "html",
        "css",
        "javascript",
        "typescript",
        "ux"
      ],
      "level": "master",
      "name": "Front-End Web"
    },
    {
      "keywords": [
        "aws",
        "java",
        "typescript",
        "data modeling"
      ],
      "level": "advanced",
      "name": "Cloud Engineering"
    },
    {
      "keywords": [
        "android",
        "java"
      ],
      "level": "intermediate",
      "name": "Mobile Engineering"
    }
  ],
  "work": [
    {
      "description": "Cloud Software Medical Devices",
      "endDate": "2022-07",
      "highlights": [
        "Leadership: Senior-most software engineer and technical lead on multiple projects and teams.",
        "Education: Evangelist for engineering iteration, including slide decks, reference docs, deep dive videos, etc.",
        "Architecture: Primary source of software engineering vision, and collaborative source for execution, across several cloud software products, projects, and programs.",
        "Development: Pre-alpha prototyping of emerging technologies, primarily Java- and AWS-based; proof-of-concept implementations of disruptive singularities; heavy-lift spikes."
      ],
      "location": "SF Bay Area, CA, US",
      "name": "Roche Sequencing Solutions",
      "position": "Senior Principal Software Architect II",
      "startDate": "2015-08",
      "summary": "Multi-product and multi-program architecture, team leadership, and prototype development for cloud software medical devices and related clinical biomarker applications.",
      "url": "https://sequencing.roche.com/"
    },
    {
      "description": "Ad Tech",
      "endDate": "2015-08",
      "highlights": [
        "Leadership: Senior software engineer over a team split between new-grad junior engineers and senior-level international contractors.",
        "Education: Source of arcane technical Web, browser, and data ethics knowledge for ~20 new-grad junior engineers.",
        "Architecture: One of a handful of senior engineers collaborating without a dedicated architect to provide application roadmaps and execution plans.",
        "Development: Ongoing code contributor on a sprawling internal tools codebase on a Ruby on Rails tech stack and custom continuous delivery pipeline."
      ],
      "location": "SF Bay Area, CA, US",
      "name": "Rocket Fuel, Inc.",
      "position": "Rocket Scientist (Front-End Engineering Manager)",
      "startDate": "2013-08",
      "summary": "Co-manager over a team of ~40 front-end software engineers working on internal tools for ad tech management.",
      "url": "https://web.archive.org/web/20150816152248/https://rocketfuel.com/"
    },
    {
      "description": "Education",
      "endDate": "2013-07",
      "highlights": [
        "Leadership: Managed two integrated teams totaling ~40 faculty, including major instructional design overhauls of the two degrees and their programs.",
        "Education: Started as a teacher in back-end Web courses, got my M.S., and presented at a number of workshops to disseminate that knowledge to my faculty peers.",
        "Architecture: Rewrote an aging Flash-based Web degree to a modern cloud stack, and built out the Mobile degrees, including instructional design, lesson planning, and assignment generation for many courses across both programs.",
        "Development: Single-handed-ly built out the university's first student data analytics Web visualization platform, to help educators gain insights into student and course performance and issues."
      ],
      "location": "Orlando, FL, US",
      "name": "Full Sail University",
      "position": "Program Manager",
      "startDate": "2009-07",
      "summary": "Designed and ran the Web Design & Development degree programs, both campus and online, and co-designed and co-ran the Mobile Development degree programs.",
      "url": "https://web.archive.org/web/20120811130226/https://online.fullsail.edu/degrees/web-design-development-bachelors"
    },
    {
      "description": "Art & Writing Supplies, Manufacturing",
      "endDate": "2009-07",
      "name": "Dixon Ticonderoga",
      "position": "Web Development Lead",
      "startDate": "2005-06",
      "summary": "Sole Web developer for this 200-year-old writing and art supplies manufacturing company, primarily focused on mainframe integration, budget planning, and sales analytics visualization.",
      "url": "https://dixonticonderogacompany.com/"
    },
    {
      "description": "Internet Service Provider & Web Development",
      "endDate": "2005",
      "name": "Creative Data Concepts",
      "position": "Lead Web Programmer",
      "startDate": "2003",
      "summary": "Sole in-house Developer, Database Administrator, and Network Administrator for several systems."
    },
    {
      "description": "Web Development",
      "endDate": "2002",
      "name": "Mojo Interactive",
      "position": "Lead Web Programmer",
      "startDate": "2000"
    },
    {
      "description": "Internet Banking Software",
      "endDate": "2000",
      "name": "Phoenix International",
      "position": "Senior Web Developer",
      "startDate": "1998"
    },
    {
      "description": "US Government Contracting",
      "endDate": "1998",
      "name": "Northrop-Grumman Corp.",
      "position": "Web Developer",
      "startDate": "1996"
    }
  ]
}
`},w={fn:["date.js","dateFormat.js","findAll.js","firstWord.js","htmlEscape.js","humanUrl.js","imgTag.js","joinWithBetween.js","linkify.js","listTags.js","stringify.js","tag.js"],section:["avatar.js","awards.js","basics.js","certificates.js","contact.js","education.js","error.js","interests.js","languages.js","projects.js","publications.js","references.js","skills.js","volunteer.js","work.js"],".":["README.md","example.json","fn","index.js","package.json","resume.css","rickosborne.json","section","test.js"]};K=function(r,e){var t=H(r);return t!==void 0?t:""},V=function(r,e){var t=E(r);return t===void 0&&(t=[]),e&&e.withFileTypes?t.map(function(n){var a=$(r)+"/"+n,o=E(a)!==void 0;return{name:n,isFile:function(){return!o},isDirectory:function(){return o}}}):t},X=function(r){return H(r)!==void 0||E(r)!==void 0},_=function(){},nn=function(){},Q=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},en=Q,tn=function(){},rn=function(){},an=function(){return{pipe:function(r){return r},on:function(){return this}}},on=function(){return{write:function(){},end:function(){},on:function(){return this}}},Fe={readFileSync:K,readdirSync:V,existsSync:X,writeFileSync:_,mkdirSync:nn,statSync:Q,lstatSync:en,unlinkSync:tn,rmdirSync:rn,createReadStream:an,createWriteStream:on}});var yn={};Z(yn,{basename:()=>x,default:()=>Je,dirname:()=>O,extname:()=>z,isAbsolute:()=>gn,join:()=>ln,normalize:()=>pn,parse:()=>hn,relative:()=>mn,resolve:()=>un,sep:()=>dn});var ln,un,O,x,z,dn,gn,pn,mn,hn,Je,fn=q(()=>{"use strict";i();ln=function(){return[].slice.call(arguments).join("/")},un=function(){return[].slice.call(arguments).join("/")},O=function(r){return r.split("/").slice(0,-1).join("/")},x=function(r,e){var t=r.split("/").pop()||"";return e&&t.endsWith(e)?t.slice(0,-e.length):t},z=function(r){var e=r.match(/\.[^.]+$/);return e?e[0]:""},dn="/",gn=function(r){return r.charAt(0)==="/"},pn=function(r){return r},mn=function(r,e){return e},hn=function(r){return{root:"",dir:O(r),base:x(r),ext:z(r),name:x(r,z(r))}},Je={join:ln,resolve:un,dirname:O,basename:x,extname:z,sep:dn,isAbsolute:gn,normalize:pn,relative:mn,parse:hn}});var l=c((er,Mn)=>{i();Mn.exports=function(e){return typeof e=="string"?e.replace(/[\u00A0-\u9999<>&]/g,t=>`&#${t.charCodeAt(0)};`):""}});var Dn=c((rr,wn)=>{i();wn.exports=function(e,t,n){let a=null,o=[],h=typeof n=="string"?(m=>m.groups[n]):typeof n=="function"?n:typeof n=="number"?(m=>m[n]):(m=>m[0]);for(;(a=t.exec(e))!=null&&(o.push(h(a)),!!t.flags.includes("g")););return o}});var u=c((ar,vn)=>{i();var jn=l(),bn=Dn();vn.exports=function(e,t,n){if(typeof t!="string"||t==="")return"";let a=bn(e,/#([^.@#]+)/,1)[0],o=bn(e,/\.([^.@#]+)/g,1),h=e.replace(/[.@#].*$/,"");return`<${h}${a?` id="${jn(a)}"`:""} class="${o.join(" ")} ${jn(n||"")}">${t}${h==="img"?"":`</${h}>`}`}});var In=c((sr,Nn)=>{i();var Ze=u();Nn.exports=function(e,t,n){return Ze("div.error",`ERROR: No such section named "${n}".`)}});var Ln=c((lr,kn)=>{i();kn.exports=function(e,t,n){if(typeof e=="string")return e;if(typeof e=="function")return e.apply(t,n||[])}});var p=c((dr,zn)=>{i();var xn=Ln();zn.exports=function(e,t){let n=t,a;return Array.isArray(e)?(n=e,a='<span class="between"></span>'):a=xn(e),!Array.isArray(n)||n.length===0?"":n.map(o=>xn(o)).filter(o=>o!=null&&o!=="").join(a)}});var An=c((pr,Cn)=>{i();var Y=u(),P=l(),Be=p();Cn.exports=function(e){let t=e.basics||{};return`
        <header id="basics">${Be([Y("h1#person-name",P(t.name)),Y("h2#person-label",P(t.label)),Y("p#person-summary",P(t.summary))])}</header>
    `.trim()}});var qn=c((hr,Sn)=>{i();var Tn=l();Sn.exports=function(e){let t=e.basics||{};return t.image?`<img src="${Tn(t.image)}" id="avatar" alt="${Tn(t.name)}">`:""}});var g=c((fr,$n)=>{i();var En=u(),Ge=l();$n.exports=function(e,t,n,a,o,h){if(!Array.isArray(e)||e.length===0)return"";let m=e.map(h||(M=>M)).map((M,j)=>En(typeof n=="function"?n(M):n,M,`${Ge(a)}-item item-${j} ${j===e.length-1?"item-last":""} item`));return typeof o=="function"?m.unshift(o()):typeof o=="string"&&m.unshift(o),En(`${typeof t=="function"?t(e):t}.${a}-list.list`,m.join(""))}});var b=c((wr,Qn)=>{i();var U="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");U.unshift("");Qn.exports=function(e){return typeof e=="string"&&e!==""?e.replace(/^(\d+)(?:-(\d+)(?:-(\d+))?)?$/,(t,n,a,o)=>o!=null?`${U[Number(a)]} ${Number(o)}, ${Number(n)}`:a!=null?`${U[Number(a)]} ${Number(n)}`:n):""}});var Yn=c((jr,On)=>{i();var C=u(),He=l(),Ke=p(),Ve=g(),Xe=b();On.exports=function(e,t){return Ve(e.awards,"section","div","award",`<h1>${He(t.awards)}</h1>`,n=>`
        <header>${Ke([C("h2.award-title",n.title),C("span.award-date",Xe(n.date)),C("span.award-awarder",n.awarder)])}</header>
        <main>
        ${C("p.award-summary",n.summary)}
        </main>
    `.trim())}});var v=c((vr,Pn)=>{i();var _e=l();Pn.exports=function(e){return typeof e=="string"?_e(e.replace(/^https?:\/\/|\/$/ig,"")).replace(/^web\.archive\.org\/web\/\d+\/https?:\/\//,"[archived]&nbsp;"):""}});var y=c((Ir,Rn)=>{i();var nt=u(),Un=l();Rn.exports=function(e,t,n){return typeof e!="string"||e===""?"":typeof t=="string"?`<a href="${Un(t)}" class="${Un(n)}" target="_blank" rel="external">${e}</a>`:nt("span",e,"no-url")}});var Jn=c((Lr,Fn)=>{i();var et=u(),Wn=l(),tt={url:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMwMCAzMDAiPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0xNDkuOTk2LDBDNjcuMTU3LDAsMC4wMDEsNjcuMTYxLDAuMDAxLDE0OS45OTdTNjcuMTU3LDMwMCwxNDkuOTk2LDMwMHMxNTAuMDAzLTY3LjE2MywxNTAuMDAzLTE1MC4wMDMNCgkJCQlTMjMyLjgzNSwwLDE0OS45OTYsMHogTTIyNS4zNjMsMTIzLjMwMmwtMzYuNjg2LDM2LjY4NmMtMy45NzksMy45NzktOS4yNjksNi4xNy0xNC44OTUsNi4xN2MtNS42MjUsMC0xMC45MTYtMi4xOTItMTQuODk1LTYuMTY4DQoJCQkJbC0xLjQzNy0xLjQzN2wtMy45MDYsMy45MDZsMS40MzQsMS40MzRjOC4yMTQsOC4yMTQsOC4yMTQsMjEuNTc5LDAsMjkuNzkzbC0zNi42ODEsMzYuNjg2Yy0zLjk3OSwzLjk3OS05LjI2OSw2LjE3LTE0Ljg5OCw2LjE3DQoJCQkJYy01LjYyOCwwLTEwLjkxOS0yLjE5Mi0xNC45LTYuMTczTDc0LjYzNCwyMTYuNWMtOC4yMTQtOC4yMDktOC4yMTQtMjEuNTczLTAuMDAzLTI5Ljc5bDM2LjY4OS0zNi42ODQNCgkJCQljMy45NzktMy45NzksOS4yNjktNi4xNywxNC44OTgtNi4xN3MxMC45MTYsMi4xOTIsMTQuODk4LDYuMTdsMS40MzIsMS40MzJsMy45MDYtMy45MDZsLTEuNDMyLTEuNDMyDQoJCQkJYy04LjIxNC04LjIxMS04LjIxNC0yMS41NzYtMC4wMDUtMjkuNzlsMzYuNjg5LTM2LjY4NmMzLjk4MS0zLjk4MSw5LjI3Mi02LjE3MywxNC44OTgtNi4xNzNzMTAuOTE2LDIuMTkyLDE0Ljg5OCw2LjE3DQoJCQkJbDEzLjg2OCwxMy44NzNDMjMzLjU3NywxMDEuNzIzLDIzMy41NzcsMTE1LjA5LDIyNS4zNjMsMTIzLjMwMnoiLz4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDIuNTM5LDE3My40NTlsLTcuMDkzLDcuMDkzbC0xMS4wMDItMTAuOTk5bDcuMDkzLTcuMDkzbC0xLjQzMi0xLjQzMmMtMS4wNC0xLjAzNy0yLjQyMi0xLjYxMS0zLjg5LTEuNjExDQoJCQkJYy0xLjQ3MSwwLTIuODUzLDAuNTczLTMuODkzLDEuNjExbC0zNi42ODYsMzYuNjgxYy0yLjE0NSwyLjE0Ny0yLjE0NSw1LjYzOCwwLDcuNzgzbDEzLjg3LDEzLjg3Mw0KCQkJCWMyLjA4MywyLjA4Myw1LjcwOCwyLjA4LDcuNzg2LDAuMDAzbDM2LjY4MS0zNi42ODZjMi4xNDgtMi4xNDcsMi4xNDgtNS42NDEsMC03Ljc4OUwxNDIuNTM5LDE3My40NTl6Ii8+DQogICAgICAgICAgICA8cGF0aCBkPSJNMjAwLjQ5Myw5MC42NDNjLTEuMDQtMS4wNC0yLjQyNS0xLjYxMy0zLjg5Ni0xLjYxM2MtMS40NzEsMC0yLjg1NiwwLjU3My0zLjg5NiwxLjYxNmwtMzYuNjg2LDM2LjY4NA0KCQkJCWMtMi4xNDIsMi4xNDctMi4xNDIsNS42MzgsMC4wMDMsNy43ODZsMS40MzQsMS40MzJsMTAuODgtMTAuODgzbDExLjAwMiwxMS4wMDJsLTEwLjg4LDEwLjg4M2wxLjQzNCwxLjQzNA0KCQkJCWMyLjA4MywyLjA3Nyw1LjcwMywyLjA4LDcuNzg2LTAuMDAzbDM2LjY4NC0zNi42ODFjMi4xNDUtMi4xNDcsMi4xNDUtNS42MzgsMC03Ljc4NkwyMDAuNDkzLDkwLjY0M3oiLz4NCgkJPC9nPg0KPC9zdmc+DQo=",email:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMjU2LDBDMTE0LjYxNSwwLDAsMTE0LjYxNSwwLDI1NnMxMTQuNjE1LDI1NiwyNTYsMjU2czI1Ni0xMTQuNjE1LDI1Ni0yNTZTMzk3LjM4NSwwLDI1NiwweiBNNDEyLDM1My41ICAgYzAsMjAuMTkzLTE2LjM3LDM2LjU2Mi0zNi41NjIsMzYuNTYySDEzNi41NjJjLTIwLjE5MywwLTM2LjU2Mi0xNi4zNy0zNi41NjItMzYuNTYydi0xOTVjMC0yMC4xOTMsMTYuMzctMzYuNTYyLDM2LjU2Mi0zNi41NjIgICBoMjM4Ljg3NWMyMC4xOTMsMCwzNi41NjIsMTYuMzcsMzYuNTYyLDM2LjU2MlYzNTMuNXoiLz4KICAgICAgICA8cGF0aCBkPSJNMzM0LjQ2MywxNjYuNzAzTDI1NiwyMTIuMDA0bC03OC40NjMtNDUuMzAxYy04Ljc0NC01LjA0OC0xOS45MjQtMi4wNTItMjQuOTczLDYuNjkxICAgYy01LjA0OCw4Ljc0NC0yLjA1MiwxOS45MjQsNi42OTEsMjQuOTczbDg3LjYwNCw1MC41NzhsMC4wMDEtMC4wMDJjMi43NzcsMS42LDUuOTM2LDIuNDQzLDkuMTM5LDIuNDQ4ICAgYzMuMjA0LTAuMDA0LDYuMzYzLTAuODQ4LDkuMTM5LTIuNDQ4bDAuMDAxLDAuMDAybDg3LjYwNC01MC41NzhjOC43NDQtNS4wNDgsMTEuNzQtMTYuMjI5LDYuNjkxLTI0Ljk3MyAgIEMzNTQuMzg4LDE2NC42NTEsMzQzLjIwNywxNjEuNjU1LDMzNC40NjMsMTY2LjcwM3oiLz4KICAgIDwvZz4KPC9zdmc+Cg==",location:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik04IDBjLTQuNCAwLTggMy42LTggOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHpNNyAxNHYtNWgtNWwxMC01LTUgMTB6Ii8+Cjwvc3ZnPgo=",github:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iIzAwMCIgZD0iTTMyIDAgQzE0IDAgMCAxNCAwIDMyIDAgNTMgMTkgNjIgMjIgNjIgMjQgNjIgMjQgNjEgMjQgNjAgTDI0IDU1IEMxNyA1NyAxNCA1MyAxMyA1MCAxMyA1MCAxMyA0OSAxMSA0NyAxMCA0NiA2IDQ0IDEwIDQ0IDEzIDQ0IDE1IDQ4IDE1IDQ4IDE4IDUyIDIyIDUxIDI0IDUwIDI0IDQ4IDI2IDQ2IDI2IDQ2IDE4IDQ1IDEyIDQyIDEyIDMxIDEyIDI3IDEzIDI0IDE1IDIyIDE1IDIyIDEzIDE4IDE1IDEzIDE1IDEzIDIwIDEzIDI0IDE3IDI3IDE1IDM3IDE1IDQwIDE3IDQ0IDEzIDQ5IDEzIDQ5IDEzIDUxIDIwIDQ5IDIyIDQ5IDIyIDUxIDI0IDUyIDI3IDUyIDMxIDUyIDQyIDQ1IDQ1IDM4IDQ2IDM5IDQ3IDQwIDQ5IDQwIDUyIEw0MCA2MCBDNDAgNjEgNDAgNjIgNDIgNjIgNDUgNjIgNjQgNTMgNjQgMzIgNjQgMTQgNTAgMCAzMiAwIFoiLz4KPC9zdmc+Cg=="};Fn.exports=function(e,t,n,a){let o=(((a.meta||{}).rickosborne||{}).images||{})[e]||tt[e];return o?`<img id="img-${e}" src="${o}" alt="${Wn(t)}" class="${n}">`:et(`span#img-${e}`,Wn(t))}});var Gn=c((zr,Bn)=>{i();var d=u(),Zn=p(),rt=g(),it=v(),R=y(),N=Jn();Bn.exports=function(e,t){let n=e.basics||{},a=n.location||{};return`
        <section id="contact" class="list">
                ${d("h1#basics-contact",t.contact)}
            ${n.url?`
                <section id="person-url">
                    ${d("h2#basics-url",t.basicsUrl)}
                    ${N("url","URL","icon",e)}
                    ${R(it(n.url),n.url,"person-url-a")}
                </section>
            `:""}
            ${n.email?`
                <section id="person-email">
                    ${d("h2#basics-email",t.basicsEmail)}
                    ${N("email","E-mail","icon",e)}
                    ${R(n.email,`mailto:${n.email}`,"person-email-a")}
                </section>
            `:""}
            ${n.phone?`
                <section id="person-phone">
                    ${d("h2#basics-phone",t.basicsPhone)}
                    ${N("phone","Phone","icon",e)}
                    ${d("p.person-phone-number",n.phone)}
                </section>
            `:""}
            ${a?`
                <section id="person-location">${Zn([d("h2#basics-location",t.basicsLocation),N("location","Location","icon",e),d("main.person-location-parts",Zn([d("span.person-location-address",a.address),d("span.person-location-postalCode",a.postalCode),d("span.person-location-city",a.city),d("span.person-location-region",a.region),d("span.person-location-countryCode",a.countryCode)]))])}</section>
            `:""}
            ${rt(n.profiles,"section","div","profile",d("h2#basics-profiles",t.basicsProfiles),o=>R(`
                    ${d(`span.profile-network.profile-network-${o.network}`,o.network)}
                    ${N(o.network,o.network,"icon",e)}
                    ${d("span.profile-username",o.username)}
                `,o.url,"profile-url"))}
        </section>
    `.trim()}});var Vn=c((Ar,Kn)=>{i();var Hn=u(),at=l(),ot=g(),st=p();Kn.exports=function(e,t){return Array.isArray(e.languages)&&e.languages.length>1?ot(e.languages,"section","div","language",`<h1>${at(t.languages)}</h1>`,n=>st([Hn("span.language-language",n.language),Hn("span.language-fluency",n.fluency)])):""}});var I=c((Sr,ne)=>{i();var W=l(),Xn=u(),_n=b();ne.exports=function(e,t){let n=(e||{}).startDate,a=(e||{}).endDate;return e==null||n==null&&a==null?"":`
        <span class="dates ${W(t)} ${n?"has":"no"}-start ${a?"has":"no"}-end ${n===a?"same-dates":""}">${Xn("span",W(_n(n)),"date-start")}<span class="date-delimiter"></span>${Xn("span",W(_n(a)),"date-end")}</span>
    `.trim()}});var re=c((Er,te)=>{i();var F=u(),ct=l(),lt=p(),ee=g(),ut=y(),dt=I();te.exports=function(e,t){return ee(e.education,"section","div","education",`<h1>${ct(t.education)}</h1>`,n=>`
        <header>${lt([F("h2.education-area",n.area),dt(n,"education-dates"),F("span",n.studyType,"education-studyType"),ut(n.institution,n.url,"education-url"),F("span",n.score,"education-score")])}</header>
        <main>
        ${ee(n.courses,"ul","li","course")}
        </main>
    `.trim())}});var oe=c((Qr,ae)=>{i();var ie=u(),gt=l(),pt=p(),mt=g(),ht=b(),yt=y();ae.exports=function(e,t){return mt(e.certificates,"section","div","certificate",`<h1>${gt(t.certificates)}</h1>`,n=>`
        <header>${pt([ie("h2.certification-name",n.name),ie("span.certification-date",ht(n.date)),yt(n.issuer,n.url,"certification-issuer")])}</header>
    `.trim())}});var ce=c((Yr,se)=>{i();se.exports=function(e){return typeof e!="string"||e===""?"":e.replace(/^\s*(\w+:?)/,'<span class="first-word">$1</span>')}});var de=c((Ur,ue)=>{i();var A=u(),ft=l(),Mt=p(),le=g(),wt=I(),Dt=ce(),jt=y();ue.exports=function(e,t){return le(e.work,"section","div","work",`<h1>${ft(t.work)}</h1>`,n=>`
        <header>${Mt([A("h2.work-position",n.position),wt(n,"work-dates"),jt(n.name,n.url,"work-employer"),A("span.work-domain",n.description),A("span.work-location",n.location)])}</header>
        <main>
        ${A("p.work-summary",n.summary)}
        ${le(n.highlights,"ul","li","work-highlights",void 0,Dt)}
        </main>
    `.trim())}});var pe=c((Wr,ge)=>{i();var T=u(),bt=l(),vt=p(),Nt=g(),It=b(),kt=v(),Lt=y();ge.exports=function(e,t){return Nt(e.publications,"section","div","publication",`<h1>${bt(t.publications)}</h1>`,n=>`
        <header>${vt([T("h2.publication-name",n.name),T("span.publication-date",It(n.releaseDate)),T("span.publication-publisher",n.publisher),Lt(kt(n.url),n.url,"publication-url-a")])}
        </header>
        <main>
        ${T("p.publication-summary",n.summary)}
        </main>
    `.trim())}});var he=c((Jr,me)=>{i();var J=u(),xt=l(),zt=p(),S=g(),Ct=I(),At=v(),Tt=y();me.exports=function(e,t){return S(e.projects,"section",n=>`div.project-${n.type?n.type:"no-type"}`,"project",`<h1>${xt(t.projects)}</h1>`,n=>`
        <header>${zt([J("h2.project-name",n.name),Ct(n,"project-dates"),Tt(At(n.url),n.url,"project-url-a"),J("p.project-entity",n.entity),S(n.roles,"ul","li","project-role")])}
        </header>
        <main>
        ${J("p.project-description",n.description)}
        ${S(n.highlights,"ul","li","project-highlights")}
        </main>
        <footer>
        ${S(n.keywords,"ul","li","project-keyword")}
        </footer>
    `.trim())}});var we=c((Br,Me)=>{i();var ye=u(),St=l(),qt=p(),fe=g(),Et=I(),$t=v(),Qt=y();Me.exports=function(e,t){return fe(e.volunteer,"section","div","volunteer",`<h1>${St(t.volunteer)}</h1>`,n=>`
        <header>${qt([ye("h2.volunteer-position",n.position),Et(n,"volunteer-dates"),Qt(n.organization?n.organization:$t(n.url),n.url,"volunteer-url-a")])}</header>
        <main>
        ${ye("p.volunteer-summary",n.summary)}
        ${fe(n.highlights,"ul","li","volunteer-highlights")}
        </main>
    `.trim())}});var ve=c((Hr,be)=>{i();var De=u(),Ot=l(),Yt=p(),je=g();be.exports=function(e,t){return je(e.skills,"section",n=>`div.skill-${n.level?n.level:"no-level"}`,"skill",`<h1>${Ot(t.skills)}</h1>`,n=>`
        <header>${Yt([De("h2.skill-name",n.name),De("span.skill-level",n.level)])}</header>
        ${je(n.keywords,"ul","li","skill-keyword")}
    `.trim())}});var ke=c((Vr,Ie)=>{i();var Pt=u(),Ut=l(),Ne=g();Ie.exports=function(e,t){return Ne(e.interests,"section","div","interest",`<h1>${Ut(t.interests)}</h1>`,n=>`
        <header>${Pt("h2.interest-name",n.name)}</header>
        ${Ne(n.keywords,"ul","li","interest-keyword")}
    `.trim())}});var ze=c((_r,xe)=>{i();var Le=u(),Rt=l(),Wt=g();xe.exports=function(e,t){return Wt(e.references,"section","div","reference",`<h1>${Rt(t.references)}</h1>`,n=>`
        ${Le("h2.reference-name",n.name)}
        ${Le("p.reference-reference",n.reference)}
    `.trim())}});var Ee=c((ei,qe)=>{i();var Te=(cn(),G(sn)),Se=(fn(),G(yn)),Ft=u(),D=l(),Jt=Te.readFileSync(Se.join("/","resume.css"),{encoding:"utf8"}),Ce=JSON.parse(Te.readFileSync(Se.join("/","package.json"),{encoding:"utf8"})),Zt=[{id:"top",sections:[]},{id:"left",sections:["basics","education","work","volunteer","references"]},{id:"right",sections:["avatar","contact","languages","certificates","publications","awards","projects","skills","interests"]}],Bt={contact:"Contact",basicsEmail:"E-mail",basicsLocation:"Location",basicsPhone:"Phone",basicsProfiles:"Profiles",basicsUrl:"URL",languages:"Languages",education:"Education",certificates:"Certificates",work:"Employment",projects:"Projects",volunteer:"Volunteering",publications:"Publications",awards:"Awards",skills:"Skills",interests:"Interests",references:"References"},Ae={error:In(),basics:An(),avatar:qn(),awards:Yn(),contact:Gn(),languages:Vn(),education:re(),certificates:oe(),work:de(),publications:pe(),projects:he(),volunteer:we(),skills:ve(),interests:ke(),references:ze()};function Gt(r,e,t){console.log(`Rendering section: ${t}`);let a=(Ae[t]||Ae.error)(r,e,t);return console.log(`Rendered: ${typeof a} ${typeof a=="string"?a.length:""}`),a}function Ht(r){let e=r.basics||{},t=r.meta||{},n=t.rickosborne||{},a=Array.isArray(n.layout)?n.layout:Zt,o=Object.assign({},Bt,n.titles||{}),h=Array.isArray(n.customCSS)?n.customCSS.join(`
`):typeof n.customCSS=="string"?n.customCSS:null,m=n.fontFamily||"Roboto Slab",M=n.googleFontFamilyParam||"Roboto+Slab:wght@200;400";return`
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Resume for ${D(e.name)}</title>
${t.canonical?`<link rel="canonical" href="${D(t.canonical)}">`:""}
${t.lastModified?`<meta http-equiv="Last-Modified" content="${D(t.lastModified)}">`:""}
${t.version?`<meta http-equiv="Version" content="${D(t.version)}">`:""}
<meta http-equiv="Generator" content="${Ce.name} ${Ce.version}" about="Written by Rick Osborne (rickosborne.org)">
<style>
@import url('https://fonts.googleapis.com/css2?family=${M}&display=swap');
body {
    font-family: '${D(m)}', 'Gentium Book Basic', 'Gentium Plus', 'Gentium Basic', 'Times New Roman', 'Times', ui-serif, serif;
}
</style>
<style>${Jt}</style>
${h?`<style>${D(h)}</style>`:""}
</head>
<body class="${r.basics.image&&r.basics.image!==""?"has-image":""}">
<article id="resume">
${a.map(j=>Ft(`section#${j.id}`,j.sections.map(Qe=>Gt(r,o,Qe)).join(`
`))).join(`
`)}
</article>
<footer class="no-print" id="how-to-print"><p>Save a PDF using your browser's Print-to-PDF functionality.  (Don't worry, this won't show up.)</p></footer>
</body>
</html>
    `.trim()}qe.exports={render:Ht}});i();var f=We(Ee(),1),$e=f.default??f,ri=$e.render??f.render,ii=$e.pdfRenderOptions??f.pdfRenderOptions;export{ii as pdfRenderOptions,ri as render};
