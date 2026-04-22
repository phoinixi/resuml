var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var En=Object.create;var R=Object.defineProperty;var jn=Object.getOwnPropertyDescriptor;var Wn=Object.getOwnPropertyNames;var In=Object.getPrototypeOf,Mn=Object.prototype.hasOwnProperty;var G=(n,t)=>()=>(n&&(t=n(n=0)),t);var B=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),X=(n,t)=>{for(var e in t)R(n,e,{get:t[e],enumerable:!0})},K=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of Wn(t))!Mn.call(n,c)&&c!==e&&R(n,c,{get:()=>t[c],enumerable:!(i=jn(t,c))||i.enumerable});return n};var Nn=(n,t,e)=>(e=n!=null?En(In(n)):{},K(t||!n||!n.__esModule?R(e,"default",{value:n,enumerable:!0}):e,n)),Y=n=>K(R({},"__esModule",{value:!0}),n);var k=G(()=>{});var Z=B($=>{k();$.convert=(n,t)=>{let e={};e.lang={format:"hide",data:"en"},e.title={format:"hide",data:`R\xE9sum\xE9: ${n.basics.name}`},e.order={format:"hide",data:["picture","identity","summary","contacts","profiles","work","volunteer","education","awards","publications","skills","languages","interests","references"]},e.legend={format:"hide",data:{address:"Address",area:"Area",awarder:"Awarder",awards:"Awards",basics:"Basics",city:"City",company:"Company",countryCode:"Country code",courses:"Courses",creditTo:"Powered by ",date:"Date",education:"Education",email:"Email",endDate:"End date",fluency:"Fluency",gpa:"GPA",highlights:"Highlights",institution:"Institution",interests:"Interests",keywords:"Details",label:"Label",language:"Language",languages:"Languages",level:"Level",location:"Mailing address",name:"Name",network:"Network",organization:"Organization",phone:"Phone",picture:"Photograph",position:"Position",postalCode:"Postal code",profiles:"Profiles",publications:"Publications",publisher:"Publisher",reference:"Reference",references:"References",region:"Region",releaseDate:"Release date",skills:"Skills",startDate:"Start date",studyType:"Study type",summary:"Synopsis",title:"Title",url:"URL",username:"Username",volunteer:"Volunteering",website:"Website",work:"Work"}};{let{basics:o}=n,{name:s,label:d,picture:f,email:h,phone:b,website:g,summary:l,location:S,profiles:p}=o;e.picture={normalFormat:"cornerPic",format:f?"cornerPic":"hide",title:"picture",data:{src:f||"",alt:`Photograph${s?" of "+s:""}`}},e.identity={normalFormat:"center",format:s||d?"center":"hide",title:"identity",data:[{size:1,text:s},{size:2,text:d}]};let{address:P,postalCode:A,city:D,region:L,countryCode:C}=S;e.contacts={normalFormat:"tableLeftHeads",format:h||b||g||D||L||C?"tableLeftHeads":"hide",title:"contacts",data:{table:{caption:{size:4,data:"Contacts"},data:[{label:"email",data:[{format:"mailLink",data:{href:h}}]},{label:"phone",data:[b]},{label:"website",data:[{format:"hLink",data:{href:g}}]},{label:"location",data:[{format:"address",data:{point:P,city:D,region:L,postalCode:A,countryCode:C}}]}]}}},e.summary={normalFormat:"left",format:l?"left":"hide",title:"summary",data:l?l.split(`
`):""},e.profiles={normalFormat:"tableTopHead",format:p&&p.length?"tableTopHead":"hide",title:"profiles",data:{table:{caption:{size:4,data:"Profiles"},label:["network","username","url"],data:p&&p.length?p.map(z=>[z.network||"",z.username||"",{format:"hLink",data:{href:z.url||""}}]):[]}}}}let i=o=>e.legend.data[o]||o,c=(o,s)=>{let d=o==="website"?{format:"hLink",data:{href:s}}:s;return{format:"headedString",data:{head:i(o),tail:d||"",delimiter:d?": ":""}}},w=(o,s)=>({format:"headedString",data:{head:i(o),tail:s}}),m=o=>({format:"bulletList",data:o}),u=(o,s,d,f)=>{let h=[c(s,o[s])];return h.push({format:"bulletList",data:[]}),d.forEach(b=>{let g=o[b];if(g){let l;Array.isArray(g)?t?l=w(b,m(g)):l=c(b,g.join(f)):l=c(b,g),h[1].data.push(l)}}),h},r=(o,s,d,f,h)=>{let b=n[o];e[o]={normalFormat:"boxedBulletList",format:b&&b.length?"boxedBulletList":"hide",title:o,data:{head:{size:2,data:s},list:b&&b.length?b.map(g=>u(g,d,f,h)):[]}}};return r("work","Work history","company",["position","website","startDate","endDate","summary","highlights"],"/"),r("volunteer","Volunteering","organization",["position","website","startDate","endDate","summary","highlights"],"/"),r("education","Education","institution",["area","studyType","startDate","endDate","gpa","courses"],"/"),r("awards","Grants, awards, and prizes","title",["date","awarder","summary"],""),r("publications","Publications","name",["publisher","releaseDate","website","summary"],""),r("skills","Skills","name",["level","keywords"],", "),r("languages","Languages known","name",["level"],""),r("interests","Interests","name",["keywords"],", "),r("references","References","name",["reference"],""),e}});var hn={};X(hn,{createReadStream:()=>cn,createWriteStream:()=>un,default:()=>Rn,existsSync:()=>an,lstatSync:()=>sn,mkdirSync:()=>rn,readFileSync:()=>tn,readdirSync:()=>en,rmdirSync:()=>dn,statSync:()=>q,unlinkSync:()=>ln,writeFileSync:()=>on});function V(n){return String(n).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function nn(n){var t=V(n);if(U[t]!==void 0)return U[t];for(var e=Object.keys(U),i=0;i<e.length;i++)if(t.endsWith("/"+e[i])||t===e[i])return U[e[i]]}function F(n){var t=V(n);if((t===""||t===".")&&W["."]!==void 0)return W["."];if(W[t]!==void 0)return W[t];for(var e=Object.keys(W),i=0;i<e.length;i++)if(t.endsWith("/"+e[i])||t===e[i])return W[e[i]]}var U,W,tn,en,an,on,rn,q,sn,ln,dn,cn,un,Rn,mn=G(()=>{"use strict";k();U={"docs/samples/hendricks/hendricks-std.json":`{
  "basics": {
    "name": "test",
    "label": "Programmer",
    "picture": "",
    "email": "test4@test.com",
    "phone": "(912) 555-4321",
    "website": "http://richardhendricks.com",
    "summary": "Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a \u201Clength-limited\u201D conversation!",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "Twitter",
        "username": "neutralthoughts",
        "url": ""
      },
      {
        "network": "SoundCloud",
        "username": "dandymusicnl",
        "url": "https://soundcloud.com/dandymusicnl"
      }
    ]
  },
  "work": [
    {
      "company": "Pied Piper",
      "position": "CEO/President",
      "website": "http://piedpiper.com",
      "startDate": "2013-12-01",
      "endDate": "2014-12-01",
      "summary": "Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores\u2122 that are not merely competitive, but approach the theoretical limit of lossless compression.",
      "highlights": [
        "Build an algorithm for artist to detect if their music was violating copy right infringement laws",
        "Successfully won Techcrunch Disrupt",
        "Optimized an algorithm that holds the current world record for Weisman Scores"
      ]
    }
  ],
  "volunteer": [
    {
      "organization": "CoderDojo",
      "position": "Teacher",
      "website": "http://coderdojo.com/",
      "startDate": "2012-01-01",
      "endDate": "2013-01-01",
      "summary": "Global movement of free coding clubs for young people.",
      "highlights": [
        "Awarded 'Teacher of the Month'"
      ]
    }
  ],
  "education": [
    {
      "institution": "University of Oklahoma",
      "area": "Information Technology",
      "studyType": "Bachelor",
      "startDate": "2011-06-01",
      "endDate": "2014-01-01",
      "gpa": "4.0",
      "courses": [
        "DB1101 - Basic SQL",
        "CS2011 - Java Introduction"
      ]
    }
  ],
  "awards": [
    {
      "title": "Digital Compression Pioneer Award",
      "date": "2014-11-01",
      "awarder": "Techcrunch",
      "summary": "There is no spoon."
    }
  ],
  "publications": [
    {
      "name": "Video compression for 3d media",
      "publisher": "Hooli",
      "releaseDate": "2014-10-01",
      "website": "http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)",
      "summary": "Innovative middle-out compression algorithm that changes the way we store data."
    }
  ],
  "skills": [
    {
      "name": "Web Development",
      "level": "Master",
      "keywords": [
        "HTML",
        "CSS",
        "Javascript"
      ]
    },
    {
      "name": "Compression",
      "level": "Master",
      "keywords": [
        "Mpeg",
        "MP4",
        "GIF"
      ]
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native speaker"
    }
  ],
  "interests": [
    {
      "name": "Wildlife",
      "keywords": [
        "Ferrets",
        "Unicorns"
      ]
    }
  ],
  "references": [
    {
      "name": "Erlich Bachman",
      "reference": "It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company."
    }
  ]
}
`,"docs/samples/pool-medium/pool-medium-a11y-verbose.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>R\xE9sum\xE9: Jonathan Pool</title>
    <style>
      @media (max-width: 650px) {
        html {
          font-size: 10px;
        }
      }
      @media (min-width: 651px), print {
        .cornerPic > img {
          position: absolute;
          top: 3rem;
          right: 3rem;
        }
      }
      @media (min-width: 651px) {
        html {
          font-size: 1.6vw;
        }
      }
      @media print {
        html {
          font-size: 10px;
        }
      }
      * {
        box-sizing: border-box;
      }
      a {
        overflow-wrap: break-word;
      }
      .band {
        background-color: lightgray;
      }
      .band,
      .rowTablesCircled {
        margin-top: 1.5rem;
      }
      body {
        background: #eee;
        margin: 3rem 3rem;
      }
      .boxedBulletList {
        padding-bottom: 0.5rem;
        border-style: solid;
        border-width: 1px;
      }
      .boxedBulletList + .boxedBulletList {
        margin-top: -1px;
      }
      .boxedBulletList > h1 {
        margin-top: 0.1rem;
      }
      .caps {
        text-transform: uppercase;
      }
      caption {
        margin-bottom: 0.5rem;
        font-weight: bold;
      }
      .center,
      .compact {
        text-align: center;
      }
      .compact {
        padding: 0 3rem 2rem 3rem;
        border-style: solid;
        border-width: 0.5rem;
        border-radius: 50%;
        border-color: #33444433;
      }
      .cornerPic {
        text-align: center;
      }
      .cornerPic > img {
        width: 8rem;
      }
      h1 {
        margin: 0.5rem 0 0 0.5rem;
        color: #344;
      }
      .left {
        text-align: left;
      }
      li,
      td {
        font-size: 1.2rem;
      }
      p {
        margin: 0.3rem 0 0.8rem 0.5rem;
      }
      p.size1,
      p.size2 {
        font-weight: bold;
      }
      .rowTable ~ .rowTable {
        margin-top: 0.1rem;
      }
      .rowTablesCircled {
        display: flex;
        justify-content: center;
      }
      .rowTablesCircled td {
        padding-right: 0.3rem;
      }
      section:not(.boxedBulletList) + .boxedBulletList,
      .section-head {
        margin-top: 2rem;
      }
      .size1 {
        font-size: 2.2rem;
      }
      .size2 {
        font-size: 2rem;
        font-style: italic;
      }
      .size3 {
        font-size: 1.8rem;
      }
      .size4 {
        font-size: 1.6rem;
        font-style: italic;
      }
      .size5 {
        font-size: 1.4rem;
      }
      .size6 {
        font-size: 1.2rem;
        font-style: italic;
      }
      .size7,
      p {
        font-size: 1rem;
      }
      strong,
      .strong {
        font-weight: bold;
      }
      table {
        margin: 0.5rem auto 0 auto;
        border-collapse: collapse;
      }
      .tableLH th {
        text-align: right;
        padding-right: 0.5rem;
      }
      td {
        padding: 0.2rem;
        border-style: solid;
        border-width: 1px;
        border-color: slategray;
        text-align: left;
      }
      .theme-credit {
        margin-top: 1rem;
        text-align: center;
        font-size: 1rem;
        font-style: italic;
      }
      .tight {
        margin-top: 0;
        margin-bottom: 0;
      }
      ul {
        margin: 0.25rem 0;
      }
      .under {
        margin-top: 0;
      }
    </style>
  </head>
  <body>
    <main>
      <section title="Photograph" class="cornerPic">
        <img src="http://stulta.com/images/pool-2009.jpg" alt="Photograph of Jonathan Pool">
      </section>
      <section title="identity" class="center">
        <p class="size1">Jonathan Pool</p>
        <p class="size2">Developer of accessible web applications</p>
      </section>
      <section title="contacts" class="section-head center">
        <table class="tableLH">
          <caption class="size4">
            Contacts
          </caption>
          <tbody>
            <tr>
              <th>Email</th>
              <td><a href="mailto:pool@stulta.com">pool@stulta.com</a></td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>(510) 225-1700</td>
            </tr>
            <tr>
              <th>Website</th>
              <td><a href="http://jpdev.pro">http://jpdev.pro</a></td>
            </tr>
            <tr>
              <th>Mailing address</th>
              <td>901 24th Avenue South<br>Seattle, Washington 98144-3032, US</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section title="Synopsis" class="left">
        <p class="size7">I have developed web and database applications in JavaScript and other languages. I have tested numerous websites for accessibility and reported written findings to website administrators as a pro bono service. I am currently adding accessibility features to existing applications and developing new ones that comply with international accessibility standards.</p>
      </section>
      <section title="Profiles" class="section-head center">
        <table class="tableTH">
          <caption class="size4">
            Profiles
          </caption>
          <thead>
            <tr>
              <th>Network</th>
              <th>Username</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Github</td>
              <td>jrpool</td>
              <td><a href="https://github.com/jrpool">https://github.com/jrpool</a></td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td>jonathanpool</td>
              <td><a href="https://www.linkedin.com/in/jonathanpool/">https://www.linkedin.com/in/jonathanpool/</a></td>
            </tr>
            <tr>
              <td>MDN Web Docs</td>
              <td>Jonathan Pool</td>
              <td><a href="https://developer.mozilla.org/en-US/profiles/JonathanPool">https://developer.mozilla.org/en-US/profiles/JonathanPool</a></td>
            </tr>
            <tr>
              <td>Google Scholar</td>
              <td>JonathanPool</td>
              <td><a href="https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en&oi=ao">https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en&oi=ao</a></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section title="Work" class="boxedBulletList">
        <h1 class="size2 section-head band center">Work history</h1>
        <ul>
          <li><strong>Company</strong>: The Long Now Foundation<ul>
            <li><strong>Position</strong>: Project Director</li>
            <li><strong>Website</strong>: <a href="http://longnow.org">http://longnow.org</a></li>
            <li><strong>Start date</strong>: 2012-01-01</li>
            <li><strong>End date</strong>: 2016-12-19</li>
            <li><strong>Synopsis</strong>: Director of the PanLex project</li>
            <li><strong>Highlights</strong><ul>
              <li>Developed PostgreSQL database of 3.1 billion lexical translations</li>
              <li>Developed UIs and SEO for database</li>
              <li>Recruited steering committee and advisory committee</li>
              <li>Hired and supervised 3 computational linguists and 1 linguist</li>
              <li>Directed 2 summer internship programs with 45 interns</li>
              <li>Established project office</li>
            </ul></li>
          </ul></li>
          <li><strong>Company</strong>: Centerplex<ul>
            <li><strong>Position</strong>: Proprietor</li>
            <li><strong>Website</strong>: <a href="http://stulta.com/misc/cx/">http://stulta.com/misc/cx/</a></li>
            <li><strong>Start date</strong>: 1993-06-16</li>
            <li><strong>End date</strong>: 2004-06-11</li>
            <li><strong>Synopsis</strong>: Owner and operator of 4 office buildings with 100 tenants</li>
            <li><strong>Highlights</strong><ul>
              <li>Developed web application and UI for tenant-initiated leasing</li>
              <li>Procured, configured, and managed 4-building wireless network with T1 WAN and Cisco LAN</li>
              <li>Hired and supervised 20 employees</li>
              <li>Upgraded physical plant to enhance ADA accessibility</li>
              <li>Procured and managed lighting upgrade with 1.5-year payback</li>
            </ul></li>
          </ul></li>
          <li><strong>Company</strong>: University of Washington<ul>
            <li><strong>Position</strong>: Assistant and Associate Professor</li>
            <li><strong>Website</strong>: <a href="http://www.washington.edu">http://www.washington.edu</a></li>
            <li><strong>Start date</strong>: 1977-09-16</li>
            <li><strong>End date</strong>: 1993-06-15</li>
            <li><strong>Synopsis</strong>: Member of faculty of Department of Political Science</li>
            <li><strong>Highlights</strong><ul>
              <li>Published research articles, collections, and conference papers</li>
              <li>Had visiting appointments at University of Paderborn and University of Bielefeld, Germany</li>
              <li>Taught courses in research methods, decision theory, and language policy</li>
              <li>Served on university committees</li>
            </ul></li>
          </ul></li>
          <li><strong>Company</strong>: State University of New York at Stony Brook<ul>
            <li><strong>Position</strong>: Assistant Professor</li>
            <li><strong>Website</strong>: <a href="http://www.stonybrook.edu">http://www.stonybrook.edu</a></li>
            <li><strong>Start date</strong>: 1971-01-01</li>
            <li><strong>End date</strong>: 1977-06-15</li>
            <li><strong>Synopsis</strong>: Member of faculty of Department of Political Science</li>
            <li><strong>Highlights</strong><ul>
              <li>Published research articles and conference papers</li>
              <li>Had visiting appointments at Stanford University, McGill University, and University of Mannheim, Germany</li>
              <li>Taught courses in research methods, comparative politics, and language policy</li>
              <li>Developed instructional software</li>
            </ul></li>
          </ul></li>
        </ul>
      </section>
      <section title="Volunteering" class="boxedBulletList">
        <h1 class="size2 section-head band center">Volunteering</h1>
        <ul>
          <li><strong>Organization</strong>: Berkeley Town House Cooperative Corporation<ul>
            <li><strong>Position</strong>: Director and Secretary</li>
            <li><strong>Website</strong>: <a href="http://www.berkeleytownhouse.com">http://www.berkeleytownhouse.com</a></li>
            <li><strong>Start date</strong>: 2011-05-24</li>
            <li><strong>End date</strong>: 2011-12-06</li>
            <li><strong>Synopsis</strong>: Managed and improved access to corporate documentation</li>
            <li><strong>Highlights</strong><ul>
              <li>Digitized 52 years of corporate board minutes</li>
              <li>Made 13,000 records web-accessible to authorized members</li>
              <li>Documented extent and cost of construction defect, permitting corporation to recover $224,415 from contractors</li>
            </ul></li>
          </ul></li>
          <li><strong>Organization</strong>: Peace Corps<ul>
            <li><strong>Position</strong>: Volunteer</li>
            <li><strong>Website</strong>: <a href="https://www.peacecorps.gov">https://www.peacecorps.gov</a></li>
            <li><strong>Start date</strong>: 1964-06-15</li>
            <li><strong>End date</strong>: 1966-06-15</li>
            <li><strong>Synopsis</strong>: Taught ESL in Nev\u015Fehir and \u0130stanbul, Turkey</li>
            <li><strong>Highlights</strong><ul>
              <li>Achieved 4.5 Foreign Service Institute score in Turkish</li>
              <li>Published articles in Turkish periodicals</li>
              <li>Authored language textbook for speakers of Turkish</li>
            </ul></li>
          </ul></li>
          <li><strong>Organization</strong>: Operation Crossroads Africa<ul>
            <li><strong>Position</strong>: Volunteer</li>
            <li><strong>Website</strong>: <a href="http://www.operationcrossroadsafrica.org">http://www.operationcrossroadsafrica.org</a></li>
            <li><strong>Start date</strong>: 1963-06-15</li>
            <li><strong>End date</strong>: 1963-08-15</li>
            <li><strong>Synopsis</strong>: Worked on a binational team constructing a community center in Nsoatre, Ghana</li>
            <li><strong>Highlights</strong><ul>
              <li>Visited C\xF4te d\u2019Ivoire, Togo, Benin, and Nigeria</li>
            </ul></li>
          </ul></li>
        </ul>
      </section>
      <section title="Education" class="boxedBulletList">
        <h1 class="size2 section-head band center">Education</h1>
        <ul>
          <li><strong>Institution</strong>: Learners Guild<ul>
            <li><strong>Area</strong>: full-stack web development</li>
            <li><strong>Study type</strong>: Vocational training and apprenticeship</li>
            <li><strong>Start date</strong>: 2017-05-01</li>
            <li><strong>End date</strong>: 2018-02-16</li>
            <li><strong>Courses</strong><ul>
              <li>full-stack web application development</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>Express</li>
              <li>web accessibility</li>
            </ul></li>
          </ul></li>
          <li><strong>Institution</strong>: University of Washington<ul>
            <li><strong>Area</strong>: computer science and linguistics</li>
            <li><strong>Study type</strong>: undergraduate and graduate courses</li>
            <li><strong>Start date</strong>: 2004-03-29</li>
            <li><strong>End date</strong>: 2007-06-01</li>
            <li><strong>GPA</strong>: 3.97</li>
            <li><strong>Courses</strong><ul>
              <li>computer programming (Java)</li>
              <li>data structures and algorithms</li>
              <li>user-interface design</li>
              <li>artificial intelligence</li>
              <li>syntax</li>
              <li>morphology</li>
              <li>semantics</li>
              <li>lexical ambiguity</li>
              <li>computational linguistics</li>
              <li>grammar engineering</li>
              <li>human rights law and philosophy</li>
            </ul></li>
          </ul></li>
          <li><strong>Institution</strong>: The University of Chicago<ul>
            <li><strong>Area</strong>: political science</li>
            <li><strong>Study type</strong>: M.A. and Ph.D.</li>
            <li><strong>Start date</strong>: 1966-09-01</li>
            <li><strong>End date</strong>: 1971-04-30</li>
            <li><strong>Courses</strong><ul>
              <li>computational political analysis</li>
              <li>survey research on public opinion</li>
              <li>political science methodology</li>
              <li>political philosophy</li>
              <li>comparative politics</li>
            </ul></li>
          </ul></li>
          <li><strong>Institution</strong>: Harvard University<ul>
            <li><strong>Area</strong>: government</li>
            <li><strong>Study type</strong>: B.A.</li>
            <li><strong>Start date</strong>: 1960-09-01</li>
            <li><strong>End date</strong>: 1964-06-30</li>
            <li><strong>Courses</strong><ul>
              <li>quantitative analysis of judicial behavior</li>
              <li>political philosophy</li>
              <li>comparative politics</li>
            </ul></li>
          </ul></li>
        </ul>
      </section>
      <section title="Awards" class="boxedBulletList">
        <h1 class="size2 section-head band center">Grants, awards, and prizes</h1>
        <ul>
          <li><strong>Title</strong>: Computer Simulation in Multilingual International Studies<ul>
            <li><strong>Date</strong>: 1983-07-15</li>
            <li><strong>Awarder</strong>: University of Maryland</li>
            <li><strong>Synopsis</strong>: Cross-national policy simulation for students of politics</li>
          </ul></li>
          <li><strong>Title</strong>: Computer Equipment for Experimental Political Science Research<ul>
            <li><strong>Date</strong>: 1978-09-15</li>
            <li><strong>Awarder</strong>: National Science Foundation</li>
            <li><strong>Synopsis</strong>: Laboratory for study of political behavior; co-principal investigator with Donald R. Matthews</li>
          </ul></li>
        </ul>
      </section>
      <section title="Publications" class="boxedBulletList">
        <h1 class="size2 section-head band center">Publications</h1>
        <ul>
          <li><strong>Name</strong>: Countering language attrition with PanLex and the Web of Data<ul>
            <li><strong>Publisher</strong>: Semantic Web Journal</li>
            <li><strong>Release date</strong>: 2015-08-01</li>
            <li><strong>Website</strong>: <a href="https://old.panlex.org/pubs/etc/plwebdata-201404.pdf">https://old.panlex.org/pubs/etc/plwebdata-201404.pdf</a></li>
            <li><strong>Synopsis</strong>: Transformation of PanLex database to RDF, linkage with Lexvo and DBpedia, and publication as Linked Data; co-author with Patrick Westphal and Claus Stadler</li>
          </ul></li>
          <li><strong>Name</strong>: PanLex and LEXTRACT: Translating all Words of all Languages of the World<ul>
            <li><strong>Publisher</strong>: Coling 2010: 23rd International Conference on Computational Linguistics</li>
            <li><strong>Release date</strong>: 2010-07-08</li>
            <li><strong>Website</strong>: <a href="http://aclweb.org/anthology/C/C10/C10-3010.pdf">http://aclweb.org/anthology/C/C10/C10-3010.pdf</a></li>
            <li><strong>Synopsis</strong>: Research on expansion of coverage of PanLex, a lemmatic translation resource, via semi-automatic dictionary scraping; co-author with Timothy Baldwin and Susan M. Colowick</li>
          </ul></li>
          <li><strong>Name</strong>: Lemmatic Machine Translation<ul>
            <li><strong>Publisher</strong>: Machine Translation Summit XII</li>
            <li><strong>Release date</strong>: 2009-08-30</li>
            <li><strong>Website</strong>: <a href="http://www.mt-archive.info/MTS-2009-Soderland.pdf">http://www.mt-archive.info/MTS-2009-Soderland.pdf</a></li>
            <li><strong>Synopsis</strong>: Panlingual Translator, a prototype lemmatic machine-translation system; co-author with Stephen Soderland, Christopher Lim, Mausam, Bo Qin, and Oren Etzioni</li>
          </ul></li>
          <li><strong>Name</strong>: Disambiguating for the Web: A Test of Two Methods<ul>
            <li><strong>Publisher</strong>: K-CAP 2007: Fourth International Conference on Knowledge Capture</li>
            <li><strong>Release date</strong>: 2007-10-31</li>
            <li><strong>Website</strong>: <a href="http://turing.cs.washington.edu/papers/disamweb.pdf">http://turing.cs.washington.edu/papers/disamweb.pdf</a></li>
            <li><strong>Synopsis</strong>: Paraphrasal disambiguation was more effective than truth-conditional disambiguation in an experiment with 386 subjects; co-author with Susan M. Colowick</li>
          </ul></li>
          <li><strong>Name</strong>: \u201CThe Official Language Problem<ul>
            <li><strong>Publisher</strong>: American Political Science Review, 85, 495\u2013514</li>
            <li><strong>Release date</strong>: 1991-06-15</li>
            <li><strong>Website</strong>: <a href="https://old.panlex.org/pubs/etc/offlangprob-apsr1991.pdf">https://old.panlex.org/pubs/etc/offlangprob-apsr1991.pdf</a></li>
            <li><strong>Synopsis</strong>: Proves in a mathematical model that it is possible to discover a fair and efficient policy on official languages even when language groups are willing to misrepresent the costs they would incur to use a nonnative official language</li>
          </ul></li>
          <li><strong>Name</strong>: The Distribution of Foreign Language Skills as a Game Equilibrium<ul>
            <li><strong>Publisher</strong>: Game Equilibrium Models, ed. Reinhard Selten, vol. 4, Social and Political Interaction (Berlin: Springer)</li>
            <li><strong>Release date</strong>: 1991-01-15</li>
            <li><strong>Website</strong>: <a href="https://old.panlex.org/pubs/etc/flsge-abs.html">https://old.panlex.org/pubs/etc/flsge-abs.html</a></li>
            <li><strong>Synopsis</strong>: Proofs of relationships among learning aptitude, language difficulty, and personal benefit in a game model, suggesting that those who learn the hardest languages get the most profit; co-author with Reinhard Selten</li>
          </ul></li>
        </ul>
      </section>
      <section title="Skills" class="boxedBulletList">
        <h1 class="size2 section-head band center">Skills</h1>
        <ul>
          <li><strong>Name</strong>: Web Development<ul>
            <li><strong>Level</strong>: various</li>
            <li><strong>Details</strong><ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Languages<ul>
            <li><strong>Level</strong>: various</li>
            <li><strong>Details</strong><ul>
              <li>JavaScript</li>
              <li>Perl</li>
              <li>Java</li>
              <li>bash</li>
              <li>68000 Assembly</li>
              <li>VBA</li>
              <li>APL</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Scopes<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong><ul>
              <li>full stack</li>
              <li>back end</li>
              <li>front end</li>
              <li>APIs</li>
              <li>SPAs</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Back-end<ul>
            <li><strong>Level</strong>: various</li>
            <li><strong>Details</strong><ul>
              <li>Node.js</li>
              <li>NPM</li>
              <li>Express</li>
              <li>pg</li>
              <li>pg-promise</li>
              <li>bcrypt</li>
              <li>solr</li>
              <li>DBI</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Databases<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong><ul>
              <li>PostgreSQL</li>
              <li>PL/pgSQL</li>
              <li>SQL Server</li>
              <li>FileMaker Pro</li>
              <li>MongoDB</li>
              <li>migrations</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Front-end<ul>
            <li><strong>Level</strong>: various</li>
            <li><strong>Details</strong><ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JQuery</li>
              <li>Cheerio</li>
              <li>Bootstrap</li>
              <li>EJS</li>
              <li>Pug</li>
              <li>Materialize</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Content and version management<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong><ul>
              <li>git</li>
              <li>svn</li>
              <li>Github</li>
              <li>Gitlab</li>
              <li>Bitbucket</li>
              <li>SourceForge</li>
              <li>WordPress</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Quality control<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong><ul>
              <li>ESLint</li>
              <li>mocha</li>
              <li>chai</li>
              <li>Selenium Webdriver</li>
              <li>Chrome Developer Tools</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Accessibility<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong><ul>
              <li>WCAG 2.1</li>
              <li>ARIA</li>
              <li>Chrome/aXe/Siteimprove/WAVE/OpenWAX/Tenon.io audits</li>
              <li>ADA Title III</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Internationalization<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong><ul>
              <li>Unicode</li>
              <li>CLDR</li>
              <li>ISO 639</li>
              <li>PanLex API</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Web servers<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong><ul>
              <li>Apache httpd</li>
              <li>nginx</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Mail servers<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong><ul>
              <li>Postfix</li>
              <li>sendmail</li>
              <li>SendGrid Web API</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Remote hosts<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong><ul>
              <li>Amazon AWS (EC2</li>
              <li>S3</li>
              <li>Glacier)</li>
              <li>OVH</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: OS\u2019s<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong><ul>
              <li>Ubuntu</li>
              <li>RHEL</li>
              <li>OS X</li>
              <li>Cisco IOS</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Configuration management<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong><ul>
              <li>Puppet</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Files<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong><ul>
              <li>FineReader</li>
              <li>Acrobat</li>
              <li>iconv</li>
              <li>Atom</li>
              <li>nano</li>
              <li>ed</li>
              <li>sed</li>
              <li>bbEdit/TextWrangler</li>
              <li>GraphicConverter</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: CAD<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong><ul>
              <li>VectorWorks</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Statistics<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong><ul>
              <li>SPSS</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Office apps<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong><ul>
              <li>Apache OpenOffice</li>
              <li>Apple iWork</li>
              <li>Microsoft Office</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: Collaboration<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong><ul>
              <li>Slack</li>
              <li>Asana</li>
              <li>Wrike</li>
              <li>Trello</li>
              <li>Egnyte</li>
            </ul></li>
          </ul></li>
        </ul>
      </section>
      <section title="Languages" class="boxedBulletList">
        <h1 class="size2 section-head band center">Languages known</h1>
        <ul>
          <li><strong>Name</strong>: English<ul>
            <li><strong>Level</strong>: native</li>
          </ul></li>
          <li><strong>Name</strong>: Esperanto<ul>
            <li><strong>Level</strong>: professional</li>
          </ul></li>
          <li><strong>Name</strong>: German<ul>
            <li><strong>Level</strong>: working</li>
          </ul></li>
          <li><strong>Name</strong>: Turkish<ul>
            <li><strong>Level</strong>: working</li>
          </ul></li>
          <li><strong>Name</strong>: French<ul>
            <li><strong>Level</strong>: practical</li>
          </ul></li>
          <li><strong>Name</strong>: Norwegian (Bokm\xE5l)<ul>
            <li><strong>Level</strong>: practical</li>
          </ul></li>
          <li><strong>Name</strong>: Russian<ul>
            <li><strong>Level</strong>: practical</li>
          </ul></li>
          <li><strong>Name</strong>: Latin<ul>
            <li><strong>Level</strong>: fragmentary</li>
          </ul></li>
        </ul>
      </section>
      <section title="Interests" class="boxedBulletList">
        <h1 class="size2 section-head band center">Interests</h1>
        <ul>
          <li><strong>Name</strong>: language design<ul>
            <li><strong>Details</strong><ul>
              <li>controlled Languages</li>
              <li>artificial languages</li>
              <li>disambiguation</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: human rights<ul>
            <li><strong>Details</strong><ul>
              <li>universality</li>
              <li>humanitarian intervention</li>
              <li>migration rights</li>
              <li>genocide</li>
              <li>civil liberties</li>
              <li>transparency</li>
              <li>quasi-municipality democracy</li>
            </ul></li>
          </ul></li>
          <li><strong>Name</strong>: social choice<ul>
            <li><strong>Details</strong><ul>
              <li>voting design</li>
              <li>language choice</li>
              <li>rational mediation</li>
            </ul></li>
          </ul></li>
        </ul>
      </section>
      <section title="References" class="boxedBulletList">
        <h1 class="size2 section-head band center">References</h1>
        <ul>
          <li><strong>Name</strong>: Learners Guild<ul>
            <li><strong>Reference</strong>: Instructors and colleagues during 2017\u20132018 enrollment as trainee-apprentice (on request)</li>
          </ul></li>
          <li><strong>Name</strong>: The Long Now Foundation<ul>
            <li><strong>Reference</strong>: Supervisors and colleagues during 2012\u20132016 tenure as PanLex Project Director (on request)</li>
          </ul></li>
        </ul>
      </section>
    </main>
    <section title="credit" class="theme-credit">
      Powered by <a href="https://www.npmjs.com/package/jsonresume-theme-a11y">jsonresume-theme-a11y</a>
    </section>
  </body>
</html>`,"docs/samples/pool-medium/pool-medium-a11y-verbose.json":`{
  "lang": {
    "format": "hide",
    "data": "en"
  },
  "title": {
    "format": "hide",
    "data": "R\xE9sum\xE9: Jonathan Pool"
  },
  "order": {
    "format": "hide",
    "data": [
      "picture",
      "identity",
      "summary",
      "contacts",
      "profiles",
      "work",
      "volunteer",
      "education",
      "awards",
      "publications",
      "skills",
      "languages",
      "interests",
      "references"
    ]
  },
  "legend": {
    "format": "hide",
    "data": {
      "address": "Address",
      "area": "Area",
      "awarder": "Awarder",
      "awards": "Awards",
      "basics": "Basics",
      "city": "City",
      "company": "Company",
      "countryCode": "Country code",
      "courses": "Courses",
      "creditTo": "Powered by ",
      "date": "Date",
      "education": "Education",
      "email": "Email",
      "endDate": "End date",
      "fluency": "Fluency",
      "gpa": "GPA",
      "highlights": "Highlights",
      "institution": "Institution",
      "interests": "Interests",
      "keywords": "Details",
      "label": "Label",
      "language": "Language",
      "languages": "Languages",
      "level": "Level",
      "location": "Mailing address",
      "name": "Name",
      "network": "Network",
      "organization": "Organization",
      "phone": "Phone",
      "picture": "Photograph",
      "position": "Position",
      "postalCode": "Postal code",
      "profiles": "Profiles",
      "publications": "Publications",
      "publisher": "Publisher",
      "reference": "Reference",
      "references": "References",
      "region": "Region",
      "releaseDate": "Release date",
      "skills": "Skills",
      "startDate": "Start date",
      "studyType": "Study type",
      "summary": "Synopsis",
      "title": "Title",
      "url": "URL",
      "username": "Username",
      "volunteer": "Volunteering",
      "website": "Website",
      "work": "Work"
    }
  },
  "picture": {
    "normalFormat": "cornerPic",
    "format": "cornerPic",
    "title": "picture",
    "data": {
      "src": "http://stulta.com/images/pool-2009.jpg",
      "alt": "Photograph of Jonathan Pool"
    }
  },
  "identity": {
    "normalFormat": "center",
    "format": "center",
    "title": "identity",
    "data": [
      {
        "size": 1,
        "text": "Jonathan Pool"
      },
      {
        "size": 2,
        "text": "Developer of accessible web applications"
      }
    ]
  },
  "contacts": {
    "normalFormat": "tableLeftHeads",
    "format": "tableLeftHeads",
    "title": "contacts",
    "data": {
      "table": {
        "caption": {
          "size": 4,
          "data": "Contacts"
        },
        "data": [
          {
            "label": "email",
            "data": [
              {
                "format": "mailLink",
                "data": {
                  "href": "pool@stulta.com"
                }
              }
            ]
          },
          {
            "label": "phone",
            "data": [
              "(510) 225-1700"
            ]
          },
          {
            "label": "website",
            "data": [
              {
                "format": "hLink",
                "data": {
                  "href": "http://jpdev.pro"
                }
              }
            ]
          },
          {
            "label": "location",
            "data": [
              {
                "format": "address",
                "data": {
                  "point": "901 24th Avenue South",
                  "city": "Seattle",
                  "region": "Washington",
                  "postalCode": "98144-3032",
                  "countryCode": "US"
                }
              }
            ]
          }
        ]
      }
    }
  },
  "summary": {
    "normalFormat": "left",
    "format": "left",
    "title": "summary",
    "data": [
      "I have developed web and database applications in JavaScript and other languages. I have tested numerous websites for accessibility and reported written findings to website administrators as a pro bono service. I am currently adding accessibility features to existing applications and developing new ones that comply with international accessibility standards."
    ]
  },
  "profiles": {
    "normalFormat": "tableTopHead",
    "format": "tableTopHead",
    "title": "profiles",
    "data": {
      "table": {
        "caption": {
          "size": 4,
          "data": "Profiles"
        },
        "label": [
          "network",
          "username",
          "url"
        ],
        "data": [
          [
            "Github",
            "jrpool",
            {
              "format": "hLink",
              "data": {
                "href": "https://github.com/jrpool"
              }
            }
          ],
          [
            "LinkedIn",
            "jonathanpool",
            {
              "format": "hLink",
              "data": {
                "href": "https://www.linkedin.com/in/jonathanpool/"
              }
            }
          ],
          [
            "MDN Web Docs",
            "Jonathan Pool",
            {
              "format": "hLink",
              "data": {
                "href": "https://developer.mozilla.org/en-US/profiles/JonathanPool"
              }
            }
          ],
          [
            "Google Scholar",
            "JonathanPool",
            {
              "format": "hLink",
              "data": {
                "href": "https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en&oi=ao"
              }
            }
          ]
        ]
      }
    }
  },
  "work": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "work",
    "data": {
      "head": {
        "size": 2,
        "data": "Work history"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Company",
              "tail": "The Long Now Foundation",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Project Director",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://longnow.org"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2012-01-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2016-12-19",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Director of the PanLex project",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Developed PostgreSQL database of 3.1 billion lexical translations",
                      "Developed UIs and SEO for database",
                      "Recruited steering committee and advisory committee",
                      "Hired and supervised 3 computational linguists and 1 linguist",
                      "Directed 2 summer internship programs with 45 interns",
                      "Established project office"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Company",
              "tail": "Centerplex",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Proprietor",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://stulta.com/misc/cx/"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1993-06-16",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2004-06-11",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Owner and operator of 4 office buildings with 100 tenants",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Developed web application and UI for tenant-initiated leasing",
                      "Procured, configured, and managed 4-building wireless network with T1 WAN and Cisco LAN",
                      "Hired and supervised 20 employees",
                      "Upgraded physical plant to enhance ADA accessibility",
                      "Procured and managed lighting upgrade with 1.5-year payback"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Company",
              "tail": "University of Washington",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Assistant and Associate Professor",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.washington.edu"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1977-09-16",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1993-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Member of faculty of Department of Political Science",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Published research articles, collections, and conference papers",
                      "Had visiting appointments at University of Paderborn and University of Bielefeld, Germany",
                      "Taught courses in research methods, decision theory, and language policy",
                      "Served on university committees"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Company",
              "tail": "State University of New York at Stony Brook",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Assistant Professor",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.stonybrook.edu"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1971-01-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1977-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Member of faculty of Department of Political Science",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Published research articles and conference papers",
                      "Had visiting appointments at Stanford University, McGill University, and University of Mannheim, Germany",
                      "Taught courses in research methods, comparative politics, and language policy",
                      "Developed instructional software"
                    ]
                  }
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "volunteer": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "volunteer",
    "data": {
      "head": {
        "size": 2,
        "data": "Volunteering"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Organization",
              "tail": "Berkeley Town House Cooperative Corporation",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Director and Secretary",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.berkeleytownhouse.com"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2011-05-24",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2011-12-06",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Managed and improved access to corporate documentation",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Digitized 52 years of corporate board minutes",
                      "Made 13,000 records web-accessible to authorized members",
                      "Documented extent and cost of construction defect, permitting corporation to recover $224,415 from contractors"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Organization",
              "tail": "Peace Corps",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Volunteer",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://www.peacecorps.gov"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1964-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1966-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Taught ESL in Nev\u015Fehir and \u0130stanbul, Turkey",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Achieved 4.5 Foreign Service Institute score in Turkish",
                      "Published articles in Turkish periodicals",
                      "Authored language textbook for speakers of Turkish"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Organization",
              "tail": "Operation Crossroads Africa",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Volunteer",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.operationcrossroadsafrica.org"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1963-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1963-08-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Worked on a binational team constructing a community center in Nsoatre, Ghana",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Visited C\xF4te d\u2019Ivoire, Togo, Benin, and Nigeria"
                    ]
                  }
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "education": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "education",
    "data": {
      "head": {
        "size": 2,
        "data": "Education"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Institution",
              "tail": "Learners Guild",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Area",
                  "tail": "full-stack web development",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Study type",
                  "tail": "Vocational training and apprenticeship",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2017-05-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2018-02-16",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Courses",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "full-stack web application development",
                      "JavaScript",
                      "Node.js",
                      "PostgreSQL",
                      "Express",
                      "web accessibility"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Institution",
              "tail": "University of Washington",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Area",
                  "tail": "computer science and linguistics",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Study type",
                  "tail": "undergraduate and graduate courses",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2004-03-29",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2007-06-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "GPA",
                  "tail": "3.97",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Courses",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "computer programming (Java)",
                      "data structures and algorithms",
                      "user-interface design",
                      "artificial intelligence",
                      "syntax",
                      "morphology",
                      "semantics",
                      "lexical ambiguity",
                      "computational linguistics",
                      "grammar engineering",
                      "human rights law and philosophy"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Institution",
              "tail": "The University of Chicago",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Area",
                  "tail": "political science",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Study type",
                  "tail": "M.A. and Ph.D.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1966-09-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1971-04-30",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Courses",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "computational political analysis",
                      "survey research on public opinion",
                      "political science methodology",
                      "political philosophy",
                      "comparative politics"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Institution",
              "tail": "Harvard University",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Area",
                  "tail": "government",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Study type",
                  "tail": "B.A.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1960-09-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1964-06-30",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Courses",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "quantitative analysis of judicial behavior",
                      "political philosophy",
                      "comparative politics"
                    ]
                  }
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "awards": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "awards",
    "data": {
      "head": {
        "size": 2,
        "data": "Grants, awards, and prizes"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Title",
              "tail": "Computer Simulation in Multilingual International Studies",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Date",
                  "tail": "1983-07-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Awarder",
                  "tail": "University of Maryland",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Cross-national policy simulation for students of politics",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Title",
              "tail": "Computer Equipment for Experimental Political Science Research",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Date",
                  "tail": "1978-09-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Awarder",
                  "tail": "National Science Foundation",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Laboratory for study of political behavior; co-principal investigator with Donald R. Matthews",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "publications": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "publications",
    "data": {
      "head": {
        "size": 2,
        "data": "Publications"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Countering language attrition with PanLex and the Web of Data",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Semantic Web Journal",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "2015-08-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://old.panlex.org/pubs/etc/plwebdata-201404.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Transformation of PanLex database to RDF, linkage with Lexvo and DBpedia, and publication as Linked Data; co-author with Patrick Westphal and Claus Stadler",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "PanLex and LEXTRACT: Translating all Words of all Languages of the World",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Coling 2010: 23rd International Conference on Computational Linguistics",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "2010-07-08",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://aclweb.org/anthology/C/C10/C10-3010.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Research on expansion of coverage of PanLex, a lemmatic translation resource, via semi-automatic dictionary scraping; co-author with Timothy Baldwin and Susan M. Colowick",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Lemmatic Machine Translation",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Machine Translation Summit XII",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "2009-08-30",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.mt-archive.info/MTS-2009-Soderland.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Panlingual Translator, a prototype lemmatic machine-translation system; co-author with Stephen Soderland, Christopher Lim, Mausam, Bo Qin, and Oren Etzioni",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Disambiguating for the Web: A Test of Two Methods",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "K-CAP 2007: Fourth International Conference on Knowledge Capture",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "2007-10-31",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://turing.cs.washington.edu/papers/disamweb.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Paraphrasal disambiguation was more effective than truth-conditional disambiguation in an experiment with 386 subjects; co-author with Susan M. Colowick",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "\u201CThe Official Language Problem",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "American Political Science Review, 85, 495\u2013514",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "1991-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://old.panlex.org/pubs/etc/offlangprob-apsr1991.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Proves in a mathematical model that it is possible to discover a fair and efficient policy on official languages even when language groups are willing to misrepresent the costs they would incur to use a nonnative official language",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "The Distribution of Foreign Language Skills as a Game Equilibrium",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Game Equilibrium Models, ed. Reinhard Selten, vol. 4, Social and Political Interaction (Berlin: Springer)",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "1991-01-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://old.panlex.org/pubs/etc/flsge-abs.html"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Proofs of relationships among learning aptitude, language difficulty, and personal benefit in a game model, suggesting that those who learn the hardest languages get the most profit; co-author with Reinhard Selten",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "skills": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "skills",
    "data": {
      "head": {
        "size": 2,
        "data": "Skills"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Web Development",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "various",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "HTML",
                      "CSS",
                      "Javascript"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Languages",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "various",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "JavaScript",
                      "Perl",
                      "Java",
                      "bash",
                      "68000 Assembly",
                      "VBA",
                      "APL"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Scopes",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "full stack",
                      "back end",
                      "front end",
                      "APIs",
                      "SPAs"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Back-end",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "various",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Node.js",
                      "NPM",
                      "Express",
                      "pg",
                      "pg-promise",
                      "bcrypt",
                      "solr",
                      "DBI"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Databases",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "PostgreSQL",
                      "PL/pgSQL",
                      "SQL Server",
                      "FileMaker Pro",
                      "MongoDB",
                      "migrations"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Front-end",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "various",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "HTML",
                      "CSS",
                      "JQuery",
                      "Cheerio",
                      "Bootstrap",
                      "EJS",
                      "Pug",
                      "Materialize"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Content and version management",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "git",
                      "svn",
                      "Github",
                      "Gitlab",
                      "Bitbucket",
                      "SourceForge",
                      "WordPress"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Quality control",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "ESLint",
                      "mocha",
                      "chai",
                      "Selenium Webdriver",
                      "Chrome Developer Tools"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Accessibility",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "WCAG 2.1",
                      "ARIA",
                      "Chrome/aXe/Siteimprove/WAVE/OpenWAX/Tenon.io audits",
                      "ADA Title III"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Internationalization",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Unicode",
                      "CLDR",
                      "ISO 639",
                      "PanLex API"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Web servers",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Apache httpd",
                      "nginx"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Mail servers",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Postfix",
                      "sendmail",
                      "SendGrid Web API"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Remote hosts",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Amazon AWS (EC2",
                      "S3",
                      "Glacier)",
                      "OVH"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "OS\u2019s",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Ubuntu",
                      "RHEL",
                      "OS X",
                      "Cisco IOS"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Configuration management",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Puppet"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Files",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "FineReader",
                      "Acrobat",
                      "iconv",
                      "Atom",
                      "nano",
                      "ed",
                      "sed",
                      "bbEdit/TextWrangler",
                      "GraphicConverter"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "CAD",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "VectorWorks"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Statistics",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "SPSS"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Office apps",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Apache OpenOffice",
                      "Apple iWork",
                      "Microsoft Office"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Collaboration",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "Slack",
                      "Asana",
                      "Wrike",
                      "Trello",
                      "Egnyte"
                    ]
                  }
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "languages": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "languages",
    "data": {
      "head": {
        "size": 2,
        "data": "Languages known"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "English",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "native",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Esperanto",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "professional",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "German",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "working",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Turkish",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "working",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "French",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "practical",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Norwegian (Bokm\xE5l)",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "practical",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Russian",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "practical",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Latin",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "fragmentary",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "interests": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "interests",
    "data": {
      "head": {
        "size": 2,
        "data": "Interests"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "language design",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "controlled Languages",
                      "artificial languages",
                      "disambiguation"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "human rights",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "universality",
                      "humanitarian intervention",
                      "migration rights",
                      "genocide",
                      "civil liberties",
                      "transparency",
                      "quasi-municipality democracy"
                    ]
                  }
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "social choice",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": {
                    "format": "bulletList",
                    "data": [
                      "voting design",
                      "language choice",
                      "rational mediation"
                    ]
                  }
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "references": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "references",
    "data": {
      "head": {
        "size": 2,
        "data": "References"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Learners Guild",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Reference",
                  "tail": "Instructors and colleagues during 2017\u20132018 enrollment as trainee-apprentice (on request)",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "The Long Now Foundation",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Reference",
                  "tail": "Supervisors and colleagues during 2012\u20132016 tenure as PanLex Project Director (on request)",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  }
}
`,"docs/samples/pool-medium/pool-medium-a11y.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>R\xE9sum\xE9: Jonathan Pool</title>
    <style>
      @media (max-width: 650px) {
        html {
          font-size: 10px;
        }
      }
      @media (min-width: 651px), print {
        .cornerPic > img {
          position: absolute;
          top: 3rem;
          right: 3rem;
        }
      }
      @media (min-width: 651px) {
        html {
          font-size: 1.6vw;
        }
      }
      @media print {
        html {
          font-size: 10px;
        }
      }
      * {
        box-sizing: border-box;
      }
      a {
        overflow-wrap: break-word;
      }
      .band {
        background-color: lightgray;
      }
      .band,
      .rowTablesCircled {
        margin-top: 1.5rem;
      }
      body {
        background: #eee;
        margin: 3rem 3rem;
      }
      .boxedBulletList {
        padding-bottom: 0.5rem;
        border-style: solid;
        border-width: 1px;
      }
      .boxedBulletList + .boxedBulletList {
        margin-top: -1px;
      }
      .boxedBulletList > h1 {
        margin-top: 0.1rem;
      }
      .caps {
        text-transform: uppercase;
      }
      caption {
        margin-bottom: 0.5rem;
        font-weight: bold;
      }
      .center,
      .compact {
        text-align: center;
      }
      .compact {
        padding: 0 3rem 2rem 3rem;
        border-style: solid;
        border-width: 0.5rem;
        border-radius: 50%;
        border-color: #33444433;
      }
      .cornerPic {
        text-align: center;
      }
      .cornerPic > img {
        width: 8rem;
      }
      h1 {
        margin: 0.5rem 0 0 0.5rem;
        color: #344;
      }
      .left {
        text-align: left;
      }
      li,
      td {
        font-size: 1.2rem;
      }
      p {
        margin: 0.3rem 0 0.8rem 0.5rem;
      }
      p.size1,
      p.size2 {
        font-weight: bold;
      }
      .rowTable ~ .rowTable {
        margin-top: 0.1rem;
      }
      .rowTablesCircled {
        display: flex;
        justify-content: center;
      }
      .rowTablesCircled td {
        padding-right: 0.3rem;
      }
      section:not(.boxedBulletList) + .boxedBulletList,
      .section-head {
        margin-top: 2rem;
      }
      .size1 {
        font-size: 2.2rem;
      }
      .size2 {
        font-size: 2rem;
        font-style: italic;
      }
      .size3 {
        font-size: 1.8rem;
      }
      .size4 {
        font-size: 1.6rem;
        font-style: italic;
      }
      .size5 {
        font-size: 1.4rem;
      }
      .size6 {
        font-size: 1.2rem;
        font-style: italic;
      }
      .size7,
      p {
        font-size: 1rem;
      }
      strong,
      .strong {
        font-weight: bold;
      }
      table {
        margin: 0.5rem auto 0 auto;
        border-collapse: collapse;
      }
      .tableLH th {
        text-align: right;
        padding-right: 0.5rem;
      }
      td {
        padding: 0.2rem;
        border-style: solid;
        border-width: 1px;
        border-color: slategray;
        text-align: left;
      }
      .theme-credit {
        margin-top: 1rem;
        text-align: center;
        font-size: 1rem;
        font-style: italic;
      }
      .tight {
        margin-top: 0;
        margin-bottom: 0;
      }
      ul {
        margin: 0.25rem 0;
      }
      .under {
        margin-top: 0;
      }
    </style>
  </head>
  <body>
    <main>
      <section title="Photograph" class="cornerPic">
        <img src="http://stulta.com/images/pool-2009.jpg" alt="Photograph of Jonathan Pool">
      </section>
      <section title="identity" class="center">
        <p class="size1">Jonathan Pool</p>
        <p class="size2">Developer of accessible web applications</p>
      </section>
      <section title="contacts" class="section-head center">
        <table class="tableLH">
          <caption class="size4">
            Contacts
          </caption>
          <tbody>
            <tr>
              <th>Email</th>
              <td><a href="mailto:pool@stulta.com">pool@stulta.com</a></td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>(510) 225-1717</td>
            </tr>
            <tr>
              <th>Website</th>
              <td><a href="http://jpdev.pro/info">http://jpdev.pro/info</a></td>
            </tr>
            <tr>
              <th>Mailing address</th>
              <td>555 10th St Apt 312<br>Oakland, California 94607-5208, US</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section title="Synopsis" class="left">
        <p class="size7">I have developed web and database applications in JavaScript and other languages. I am currently adding accessibility features to existing applications and developing new ones that comply with international accessibility standards.</p>
      </section>
      <section title="Profiles" class="section-head center">
        <table class="tableTH">
          <caption class="size4">
            Profiles
          </caption>
          <thead>
            <tr>
              <th>Network</th>
              <th>Username</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Github</td>
              <td>jrpool</td>
              <td><a href="https://github.com/jrpool">https://github.com/jrpool</a></td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td>jonathanpool</td>
              <td><a href="https://www.linkedin.com/in/jonathanpool/">https://www.linkedin.com/in/jonathanpool/</a></td>
            </tr>
            <tr>
              <td>MDN Web Docs</td>
              <td>Jonathan Pool</td>
              <td><a href="https://developer.mozilla.org/en-US/profiles/JonathanPool">https://developer.mozilla.org/en-US/profiles/JonathanPool</a></td>
            </tr>
            <tr>
              <td>Google Scholar</td>
              <td>JonathanPool</td>
              <td><a href="https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en&oi=ao">https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en&oi=ao</a></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section title="Work" class="boxedBulletList">
        <h1 class="size2 section-head band center">Work history</h1>
        <ul>
          <li><strong>Company</strong>: The Long Now Foundation<ul>
            <li><strong>Position</strong>: Project Director</li>
            <li><strong>Website</strong>: <a href="http://longnow.org">http://longnow.org</a></li>
            <li><strong>Start date</strong>: 2012-01-01</li>
            <li><strong>End date</strong>: 2016-12-19</li>
            <li><strong>Synopsis</strong>: Director of the PanLex project</li>
            <li><strong>Highlights</strong>: Developed PostgreSQL database of 3.1 billion lexical translations/Developed UIs and SEO for database/Recruited steering committee and advisory committee/Hired and supervised 3 computational linguists and 1 linguist/Director 2 summer internship programs with 45 interns/Established project office</li>
          </ul></li>
          <li><strong>Company</strong>: Centerplex<ul>
            <li><strong>Position</strong>: Proprietor</li>
            <li><strong>Website</strong>: <a href="http://stulta.com/misc/cx/">http://stulta.com/misc/cx/</a></li>
            <li><strong>Start date</strong>: 1993-06-16</li>
            <li><strong>End date</strong>: 2004-06-11</li>
            <li><strong>Synopsis</strong>: Owner and operator of 4 office buildings with 100 tenants</li>
            <li><strong>Highlights</strong>: Developed web application and UI for tenant-initiated leasing/Procured, configured, and managed 4-building wireless network with T1 WAN and Cisco LAN/Hired and supervised 20 employees/Upgraded physical plant to enhance ADA accessibility/Procured and managed lighting upgrade with 1.5-year payback</li>
          </ul></li>
          <li><strong>Company</strong>: University of Washington<ul>
            <li><strong>Position</strong>: Assistant and Associate Professor</li>
            <li><strong>Website</strong>: <a href="http://www.washington.edu">http://www.washington.edu</a></li>
            <li><strong>Start date</strong>: 1977-09-16</li>
            <li><strong>End date</strong>: 1993-06-15</li>
            <li><strong>Synopsis</strong>: Member of faculty of Department of Political Science</li>
            <li><strong>Highlights</strong>: Published research articles, collections, and conference papers/Had visiting appointments at University of Paderborn and University of Bielefeld, Germany/Taught courses in research methods, decision theory, and language policy/Served on university committees</li>
          </ul></li>
          <li><strong>Company</strong>: State University of New York at Stony Brook<ul>
            <li><strong>Position</strong>: Assistant Professor</li>
            <li><strong>Website</strong>: <a href="http://www.stonybrook.edu">http://www.stonybrook.edu</a></li>
            <li><strong>Start date</strong>: 1971-01-01</li>
            <li><strong>End date</strong>: 1977-06-15</li>
            <li><strong>Synopsis</strong>: Member of faculty of Department of Political Science</li>
            <li><strong>Highlights</strong>: Published research articles and conference papers/Had visiting appointments at Stanford University, McGill University, and University of Mannheim, Germany/Taught courses in research methods, comparative politics, and language policy/Developed instructional software</li>
          </ul></li>
        </ul>
      </section>
      <section title="Volunteering" class="boxedBulletList">
        <h1 class="size2 section-head band center">Volunteering</h1>
        <ul>
          <li><strong>Organization</strong>: Berkeley Town House Cooperative Corporation<ul>
            <li><strong>Position</strong>: Director and Secretary</li>
            <li><strong>Website</strong>: <a href="http://www.berkeleytownhouse.com">http://www.berkeleytownhouse.com</a></li>
            <li><strong>Start date</strong>: 2011-05-24</li>
            <li><strong>End date</strong>: 2011-12-06</li>
            <li><strong>Synopsis</strong>: Managed and improved access to corporate documentation</li>
            <li><strong>Highlights</strong>: Digitized 52 years of corporate board minutes/Made 13,000 records web-accessible to authorized members/Documented extent and cost of construction defect, permitting corporation to recover $224,415 from contractors</li>
          </ul></li>
          <li><strong>Organization</strong>: Peace Corps<ul>
            <li><strong>Position</strong>: Volunteer</li>
            <li><strong>Website</strong>: <a href="https://www.peacecorps.gov">https://www.peacecorps.gov</a></li>
            <li><strong>Start date</strong>: 1964-06-15</li>
            <li><strong>End date</strong>: 1966-06-15</li>
            <li><strong>Synopsis</strong>: Taught ESL in Nev\u015Fehir and \u0130stanbul, Turkey</li>
            <li><strong>Highlights</strong>: Achieved 4.5 Foreign Service Institute score in Turkish/Published articles in Turkish periodicals/Authored language textbook for speakers of Turkish</li>
          </ul></li>
          <li><strong>Organization</strong>: Operation Crossroads Africa<ul>
            <li><strong>Position</strong>: Volunteer</li>
            <li><strong>Website</strong>: <a href="http://www.operationcrossroadsafrica.org">http://www.operationcrossroadsafrica.org</a></li>
            <li><strong>Start date</strong>: 1963-06-15</li>
            <li><strong>End date</strong>: 1963-08-15</li>
            <li><strong>Synopsis</strong>: Worked on a binational team constructing a community center in Nsoatre, Ghana</li>
            <li><strong>Highlights</strong>: Visited C\xF4te d\u2019Ivoire, Togo, Benin, and Nigeria</li>
          </ul></li>
        </ul>
      </section>
      <section title="Education" class="boxedBulletList">
        <h1 class="size2 section-head band center">Education</h1>
        <ul>
          <li><strong>Institution</strong>: Learners Guild<ul>
            <li><strong>Area</strong>: full-stack web development</li>
            <li><strong>Study type</strong>: Vocational training and apprenticeship</li>
            <li><strong>Start date</strong>: 2017-05-01</li>
            <li><strong>End date</strong>: 2018-02-16</li>
            <li><strong>Courses</strong>: full-stack web application development/JavaScript/Node.js/PostgreSQL/Express/web accessibility</li>
          </ul></li>
          <li><strong>Institution</strong>: University of Washington<ul>
            <li><strong>Area</strong>: computer science and linguistics</li>
            <li><strong>Study type</strong>: undergraduate and graduate courses</li>
            <li><strong>Start date</strong>: 2004-03-29</li>
            <li><strong>End date</strong>: 2007-06-01</li>
            <li><strong>GPA</strong>: 3.97</li>
            <li><strong>Courses</strong>: computer programming (Java)/data structures and algorithms/user-interface design/artificial intelligence/syntax/morphology/semantics/lexical ambiguity/computational linguistics/grammar engineering/human rights law and philosophy</li>
          </ul></li>
          <li><strong>Institution</strong>: The University of Chicago<ul>
            <li><strong>Area</strong>: political science</li>
            <li><strong>Study type</strong>: M.A. and Ph.D.</li>
            <li><strong>Start date</strong>: 1966-09-01</li>
            <li><strong>End date</strong>: 1971-04-30</li>
            <li><strong>Courses</strong>: computational political analysis/survey research on public opinion/political science methodology/political philosophy/comparative politics</li>
          </ul></li>
          <li><strong>Institution</strong>: Harvard University<ul>
            <li><strong>Area</strong>: government</li>
            <li><strong>Study type</strong>: B.A.</li>
            <li><strong>Start date</strong>: 1960-09-01</li>
            <li><strong>End date</strong>: 1964-06-30</li>
            <li><strong>Courses</strong>: quantitative analysis of judicial behavior/political philosophy/comparative politics</li>
          </ul></li>
        </ul>
      </section>
      <section title="Awards" class="boxedBulletList">
        <h1 class="size2 section-head band center">Grants, awards, and prizes</h1>
        <ul>
          <li><strong>Title</strong>: Computer Simulation in Multilingual International Studies<ul>
            <li><strong>Date</strong>: 1983-07-15</li>
            <li><strong>Awarder</strong>: University of Maryland</li>
            <li><strong>Synopsis</strong>: Cross-national policy simulation for students of politics</li>
          </ul></li>
          <li><strong>Title</strong>: Computer Equipment for Experimental Political Science Research<ul>
            <li><strong>Date</strong>: 1978-09-15</li>
            <li><strong>Awarder</strong>: National Science Foundation</li>
            <li><strong>Synopsis</strong>: Laboratory for study of political behavior; co-principal investigator with Donald R. Matthews</li>
          </ul></li>
        </ul>
      </section>
      <section title="Publications" class="boxedBulletList">
        <h1 class="size2 section-head band center">Publications</h1>
        <ul>
          <li><strong>Name</strong>: Countering language attrition with PanLex and the Web of Data<ul>
            <li><strong>Publisher</strong>: Semantic Web Journal</li>
            <li><strong>Release date</strong>: 2015-08-01</li>
            <li><strong>Website</strong>: <a href="https://old.panlex.org/pubs/etc/plwebdata-201404.pdf">https://old.panlex.org/pubs/etc/plwebdata-201404.pdf</a></li>
            <li><strong>Synopsis</strong>: Transformation of PanLex database to RDF, linkage with Lexvo and DBpedia, and publication as Linked Data; co-author with Patrick Westphal and Claus Stadler</li>
          </ul></li>
          <li><strong>Name</strong>: PanLex and LEXTRACT: Translating all Words of all Languages of the World<ul>
            <li><strong>Publisher</strong>: Coling 2010: 23rd International Conference on Computational Linguistics</li>
            <li><strong>Release date</strong>: 2010-07-08</li>
            <li><strong>Website</strong>: <a href="http://aclweb.org/anthology/C/C10/C10-3010.pdf">http://aclweb.org/anthology/C/C10/C10-3010.pdf</a></li>
            <li><strong>Synopsis</strong>: Research on expansion of coverage of PanLex, a lemmatic translation resource, via semi-automatic dictionary scraping; co-author with Timothy Baldwin and Susan M. Colowick</li>
          </ul></li>
          <li><strong>Name</strong>: Lemmatic Machine Translation<ul>
            <li><strong>Publisher</strong>: Machine Translation Summit XII</li>
            <li><strong>Release date</strong>: 2009-08-30</li>
            <li><strong>Website</strong>: <a href="http://www.mt-archive.info/MTS-2009-Soderland.pdf">http://www.mt-archive.info/MTS-2009-Soderland.pdf</a></li>
            <li><strong>Synopsis</strong>: Panlingual Translator, a prototype lemmatic machine-translation system; co-author with Stephen Soderland, Christopher Lim, Mausam, Bo Qin, and Oren Etzioni</li>
          </ul></li>
          <li><strong>Name</strong>: Disambiguating for the Web: A Test of Two Methods<ul>
            <li><strong>Publisher</strong>: K-CAP 2007: Fourth International Conference on Knowledge Capture</li>
            <li><strong>Release date</strong>: 2007-10-31</li>
            <li><strong>Website</strong>: <a href="http://turing.cs.washington.edu/papers/disamweb.pdf">http://turing.cs.washington.edu/papers/disamweb.pdf</a></li>
            <li><strong>Synopsis</strong>: Paraphrasal disambiguation was more effective than truth-conditional disambiguation in an experiment with 386 subjects; co-author with Susan M. Colowick</li>
          </ul></li>
          <li><strong>Name</strong>: \u201CThe Official Language Problem<ul>
            <li><strong>Publisher</strong>: American Political Science Review, 85, 495\u2013514</li>
            <li><strong>Release date</strong>: 1991-06-15</li>
            <li><strong>Website</strong>: <a href="https://old.panlex.org/pubs/etc/offlangprob-apsr1991.pdf">https://old.panlex.org/pubs/etc/offlangprob-apsr1991.pdf</a></li>
            <li><strong>Synopsis</strong>: Proves in a mathematical model that it is possible to discover a fair and efficient policy on official languages even when language groups are willing to misrepresent the costs they would incur to use a nonnative official language</li>
          </ul></li>
          <li><strong>Name</strong>: The Distribution of Foreign Language Skills as a Game Equilibrium<ul>
            <li><strong>Publisher</strong>: Game Equilibrium Models, ed. Reinhard Selten, vol. 4, Social and Political Interaction (Berlin: Springer)</li>
            <li><strong>Release date</strong>: 1991-01-15</li>
            <li><strong>Website</strong>: <a href="https://old.panlex.org/pubs/etc/flsge-abs.html">https://old.panlex.org/pubs/etc/flsge-abs.html</a></li>
            <li><strong>Synopsis</strong>: Proofs of relationships among learning aptitude, language difficulty, and personal benefit in a game model, suggesting that those who learn the hardest languages get the most profit; co-author with Reinhard Selten</li>
          </ul></li>
        </ul>
      </section>
      <section title="Skills" class="boxedBulletList">
        <h1 class="size2 section-head band center">Skills</h1>
        <ul>
          <li><strong>Name</strong>: Web Development<ul>
            <li><strong>Level</strong>: various</li>
            <li><strong>Details</strong>: HTML, CSS, Javascript</li>
          </ul></li>
          <li><strong>Name</strong>: Languages<ul>
            <li><strong>Level</strong>: various</li>
            <li><strong>Details</strong>: JavaScript, Perl, Java, bash, 68000 Assembly, VBA, APL</li>
          </ul></li>
          <li><strong>Name</strong>: Scopes<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong>: full stack, back end, front end, APIs, SPAs</li>
          </ul></li>
          <li><strong>Name</strong>: Back-end<ul>
            <li><strong>Level</strong>: various</li>
            <li><strong>Details</strong>: Node.js, NPM, Express, pg, pg-promise, bcrypt, solr, DBI</li>
          </ul></li>
          <li><strong>Name</strong>: Databases<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong>: PostgreSQL, PL/pgSQL, SQL Server, FileMaker Pro, MongoDB, migrations</li>
          </ul></li>
          <li><strong>Name</strong>: Front-end<ul>
            <li><strong>Level</strong>: various</li>
            <li><strong>Details</strong>: HTML, CSS, JQuery, Cheerio, Bootstrap, EJS, Pug, Materialize</li>
          </ul></li>
          <li><strong>Name</strong>: Content and version management<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong>: git, svn, Github, Gitlab, Bitbucket, SourceForge, WordPress</li>
          </ul></li>
          <li><strong>Name</strong>: Quality control<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: ESLint, mocha, chai, Selenium Webdriver, Chrome Developer Tools</li>
          </ul></li>
          <li><strong>Name</strong>: Accessibility<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: WCAG 2.1, ARIA, Chrome/aXe/Siteimprove/WAVE/OpenWAX/Tenon.io audits, ADA Title III</li>
          </ul></li>
          <li><strong>Name</strong>: Internationalization<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong>: Unicode, CLDR, ISO 639, PanLex API</li>
          </ul></li>
          <li><strong>Name</strong>: Web servers<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong>: Apache httpd, nginx</li>
          </ul></li>
          <li><strong>Name</strong>: Mail servers<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: Postfix, sendmail, SendGrid Web API</li>
          </ul></li>
          <li><strong>Name</strong>: Remote hosts<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong>: Amazon AWS (EC2, S3, Glacier), OVH</li>
          </ul></li>
          <li><strong>Name</strong>: OS\u2019s<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong>: Ubuntu, RHEL, OS X, Cisco IOS</li>
          </ul></li>
          <li><strong>Name</strong>: Configuration management<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: Puppet</li>
          </ul></li>
          <li><strong>Name</strong>: Files<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong>: FineReader, Acrobat, iconv, Atom, nano, ed, sed, bbEdit/TextWrangler, GraphicConverter</li>
          </ul></li>
          <li><strong>Name</strong>: CAD<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong>: VectorWorks</li>
          </ul></li>
          <li><strong>Name</strong>: Statistics<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: SPSS</li>
          </ul></li>
          <li><strong>Name</strong>: Office apps<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong>: Apache OpenOffice, Apple iWork, Microsoft Office</li>
          </ul></li>
          <li><strong>Name</strong>: Collaboration<ul>
            <li><strong>Level</strong>: intermediate</li>
            <li><strong>Details</strong>: Slack, Asana, Wrike, Trello, Egnyte</li>
          </ul></li>
        </ul>
      </section>
      <section title="Languages" class="boxedBulletList">
        <h1 class="size2 section-head band center">Languages known</h1>
        <ul>
          <li><strong>Name</strong>: English<ul>
            <li><strong>Level</strong>: native</li>
          </ul></li>
          <li><strong>Name</strong>: Esperanto<ul>
            <li><strong>Level</strong>: professional</li>
          </ul></li>
          <li><strong>Name</strong>: German<ul>
            <li><strong>Level</strong>: working</li>
          </ul></li>
          <li><strong>Name</strong>: Turkish<ul>
            <li><strong>Level</strong>: working</li>
          </ul></li>
          <li><strong>Name</strong>: French<ul>
            <li><strong>Level</strong>: practical</li>
          </ul></li>
          <li><strong>Name</strong>: Norwegian (Bokm\xE5l)<ul>
            <li><strong>Level</strong>: practical</li>
          </ul></li>
          <li><strong>Name</strong>: Russian<ul>
            <li><strong>Level</strong>: practical</li>
          </ul></li>
          <li><strong>Name</strong>: Latin<ul>
            <li><strong>Level</strong>: fragmentary</li>
          </ul></li>
        </ul>
      </section>
      <section title="Interests" class="boxedBulletList">
        <h1 class="size2 section-head band center">Interests</h1>
        <ul>
          <li><strong>Name</strong>: language design<ul>
            <li><strong>Details</strong>: controlled Languages, artificial languages, disambiguation</li>
          </ul></li>
          <li><strong>Name</strong>: human rights<ul>
            <li><strong>Details</strong>: universality, humanitarian intervention, migration rights, genocide, civil liberties, transparency, quasi-municipality democracy</li>
          </ul></li>
          <li><strong>Name</strong>: social choice<ul>
            <li><strong>Details</strong>: voting design, language choice, rational mediation</li>
          </ul></li>
        </ul>
      </section>
      <section title="References" class="boxedBulletList">
        <h1 class="size2 section-head band center">References</h1>
        <ul>
          <li><strong>Name</strong>: Learners Guild<ul>
            <li><strong>Reference</strong>: Instructors and colleagues during 2017\u20132018 enrollment as trainee-apprentice (on request)</li>
          </ul></li>
          <li><strong>Name</strong>: The Long Now Foundation<ul>
            <li><strong>Reference</strong>: Supervisors and colleagues during 2012\u20132016 tenure as PanLex Project Director (on request)</li>
          </ul></li>
        </ul>
      </section>
    </main>
    <section title="credit" class="theme-credit">
      Powered by <a href="https://www.npmjs.com/package/jsonresume-theme-a11y">jsonresume-theme-a11y</a>
    </section>
  </body>
</html>`,"docs/samples/pool-medium/pool-medium-a11y.json":`{
  "lang": {
    "format": "hide",
    "data": "en"
  },
  "title": {
    "format": "hide",
    "data": "R\xE9sum\xE9: Jonathan Pool"
  },
  "order": {
    "format": "hide",
    "data": [
      "picture",
      "identity",
      "summary",
      "contacts",
      "profiles",
      "work",
      "volunteer",
      "education",
      "awards",
      "publications",
      "skills",
      "languages",
      "interests",
      "references"
    ]
  },
  "legend": {
    "format": "hide",
    "data": {
      "address": "Address",
      "area": "Area",
      "awarder": "Awarder",
      "awards": "Awards",
      "basics": "Basics",
      "city": "City",
      "company": "Company",
      "countryCode": "Country code",
      "courses": "Courses",
      "creditTo": "Powered by ",
      "date": "Date",
      "education": "Education",
      "email": "Email",
      "endDate": "End date",
      "fluency": "Fluency",
      "gpa": "GPA",
      "highlights": "Highlights",
      "institution": "Institution",
      "interests": "Interests",
      "keywords": "Details",
      "label": "Label",
      "language": "Language",
      "languages": "Languages",
      "level": "Level",
      "location": "Mailing address",
      "name": "Name",
      "network": "Network",
      "organization": "Organization",
      "phone": "Phone",
      "picture": "Photograph",
      "position": "Position",
      "postalCode": "Postal code",
      "profiles": "Profiles",
      "publications": "Publications",
      "publisher": "Publisher",
      "reference": "Reference",
      "references": "References",
      "region": "Region",
      "releaseDate": "Release date",
      "skills": "Skills",
      "startDate": "Start date",
      "studyType": "Study type",
      "summary": "Synopsis",
      "title": "Title",
      "url": "URL",
      "username": "Username",
      "volunteer": "Volunteering",
      "website": "Website",
      "work": "Work"
    }
  },
  "picture": {
    "normalFormat": "cornerPic",
    "format": "cornerPic",
    "title": "picture",
    "data": {
      "src": "http://stulta.com/images/pool-2009.jpg",
      "alt": "Photograph of Jonathan Pool"
    }
  },
  "identity": {
    "normalFormat": "center",
    "format": "center",
    "title": "identity",
    "data": [
      {
        "size": 1,
        "text": "Jonathan Pool"
      },
      {
        "size": 2,
        "text": "Developer of accessible web applications"
      }
    ]
  },
  "contacts": {
    "normalFormat": "tableLeftHeads",
    "format": "tableLeftHeads",
    "title": "contacts",
    "data": {
      "table": {
        "caption": {
          "size": 4,
          "data": "Contacts"
        },
        "data": [
          {
            "label": "email",
            "data": [
              {
                "format": "mailLink",
                "data": {
                  "href": "pool@stulta.com"
                }
              }
            ]
          },
          {
            "label": "phone",
            "data": [
              "(510) 225-1717"
            ]
          },
          {
            "label": "website",
            "data": [
              {
                "format": "hLink",
                "data": {
                  "href": "http://jpdev.pro/info"
                }
              }
            ]
          },
          {
            "label": "location",
            "data": [
              {
                "format": "address",
                "data": {
                  "point": "555 10th St Apt 312",
                  "city": "Oakland",
                  "region": "California",
                  "postalCode": "94607-5208",
                  "countryCode": "US"
                }
              }
            ]
          }
        ]
      }
    }
  },
  "summary": {
    "normalFormat": "left",
    "format": "left",
    "title": "summary",
    "data": [
      "I have developed web and database applications in JavaScript and other languages. I am currently adding accessibility features to existing applications and developing new ones that comply with international accessibility standards."
    ]
  },
  "profiles": {
    "normalFormat": "tableTopHead",
    "format": "tableTopHead",
    "title": "profiles",
    "data": {
      "table": {
        "caption": {
          "size": 4,
          "data": "Profiles"
        },
        "label": [
          "network",
          "username",
          "url"
        ],
        "data": [
          [
            "Github",
            "jrpool",
            {
              "format": "hLink",
              "data": {
                "href": "https://github.com/jrpool"
              }
            }
          ],
          [
            "LinkedIn",
            "jonathanpool",
            {
              "format": "hLink",
              "data": {
                "href": "https://www.linkedin.com/in/jonathanpool/"
              }
            }
          ],
          [
            "MDN Web Docs",
            "Jonathan Pool",
            {
              "format": "hLink",
              "data": {
                "href": "https://developer.mozilla.org/en-US/profiles/JonathanPool"
              }
            }
          ],
          [
            "Google Scholar",
            "JonathanPool",
            {
              "format": "hLink",
              "data": {
                "href": "https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en&oi=ao"
              }
            }
          ]
        ]
      }
    }
  },
  "work": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "work",
    "data": {
      "head": {
        "size": 2,
        "data": "Work history"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Company",
              "tail": "The Long Now Foundation",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Project Director",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://longnow.org"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2012-01-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2016-12-19",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Director of the PanLex project",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Developed PostgreSQL database of 3.1 billion lexical translations/Developed UIs and SEO for database/Recruited steering committee and advisory committee/Hired and supervised 3 computational linguists and 1 linguist/Director 2 summer internship programs with 45 interns/Established project office",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Company",
              "tail": "Centerplex",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Proprietor",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://stulta.com/misc/cx/"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1993-06-16",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2004-06-11",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Owner and operator of 4 office buildings with 100 tenants",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Developed web application and UI for tenant-initiated leasing/Procured, configured, and managed 4-building wireless network with T1 WAN and Cisco LAN/Hired and supervised 20 employees/Upgraded physical plant to enhance ADA accessibility/Procured and managed lighting upgrade with 1.5-year payback",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Company",
              "tail": "University of Washington",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Assistant and Associate Professor",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.washington.edu"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1977-09-16",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1993-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Member of faculty of Department of Political Science",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Published research articles, collections, and conference papers/Had visiting appointments at University of Paderborn and University of Bielefeld, Germany/Taught courses in research methods, decision theory, and language policy/Served on university committees",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Company",
              "tail": "State University of New York at Stony Brook",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Assistant Professor",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.stonybrook.edu"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1971-01-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1977-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Member of faculty of Department of Political Science",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Published research articles and conference papers/Had visiting appointments at Stanford University, McGill University, and University of Mannheim, Germany/Taught courses in research methods, comparative politics, and language policy/Developed instructional software",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "volunteer": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "volunteer",
    "data": {
      "head": {
        "size": 2,
        "data": "Volunteering"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Organization",
              "tail": "Berkeley Town House Cooperative Corporation",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Director and Secretary",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.berkeleytownhouse.com"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2011-05-24",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2011-12-06",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Managed and improved access to corporate documentation",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Digitized 52 years of corporate board minutes/Made 13,000 records web-accessible to authorized members/Documented extent and cost of construction defect, permitting corporation to recover $224,415 from contractors",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Organization",
              "tail": "Peace Corps",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Volunteer",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://www.peacecorps.gov"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1964-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1966-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Taught ESL in Nev\u015Fehir and \u0130stanbul, Turkey",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Achieved 4.5 Foreign Service Institute score in Turkish/Published articles in Turkish periodicals/Authored language textbook for speakers of Turkish",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Organization",
              "tail": "Operation Crossroads Africa",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Volunteer",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.operationcrossroadsafrica.org"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1963-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1963-08-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Worked on a binational team constructing a community center in Nsoatre, Ghana",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Visited C\xF4te d\u2019Ivoire, Togo, Benin, and Nigeria",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "education": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "education",
    "data": {
      "head": {
        "size": 2,
        "data": "Education"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Institution",
              "tail": "Learners Guild",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Area",
                  "tail": "full-stack web development",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Study type",
                  "tail": "Vocational training and apprenticeship",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2017-05-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2018-02-16",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Courses",
                  "tail": "full-stack web application development/JavaScript/Node.js/PostgreSQL/Express/web accessibility",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Institution",
              "tail": "University of Washington",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Area",
                  "tail": "computer science and linguistics",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Study type",
                  "tail": "undergraduate and graduate courses",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2004-03-29",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2007-06-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "GPA",
                  "tail": "3.97",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Courses",
                  "tail": "computer programming (Java)/data structures and algorithms/user-interface design/artificial intelligence/syntax/morphology/semantics/lexical ambiguity/computational linguistics/grammar engineering/human rights law and philosophy",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Institution",
              "tail": "The University of Chicago",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Area",
                  "tail": "political science",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Study type",
                  "tail": "M.A. and Ph.D.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1966-09-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1971-04-30",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Courses",
                  "tail": "computational political analysis/survey research on public opinion/political science methodology/political philosophy/comparative politics",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Institution",
              "tail": "Harvard University",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Area",
                  "tail": "government",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Study type",
                  "tail": "B.A.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1960-09-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1964-06-30",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Courses",
                  "tail": "quantitative analysis of judicial behavior/political philosophy/comparative politics",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "awards": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "awards",
    "data": {
      "head": {
        "size": 2,
        "data": "Grants, awards, and prizes"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Title",
              "tail": "Computer Simulation in Multilingual International Studies",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Date",
                  "tail": "1983-07-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Awarder",
                  "tail": "University of Maryland",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Cross-national policy simulation for students of politics",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Title",
              "tail": "Computer Equipment for Experimental Political Science Research",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Date",
                  "tail": "1978-09-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Awarder",
                  "tail": "National Science Foundation",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Laboratory for study of political behavior; co-principal investigator with Donald R. Matthews",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "publications": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "publications",
    "data": {
      "head": {
        "size": 2,
        "data": "Publications"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Countering language attrition with PanLex and the Web of Data",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Semantic Web Journal",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "2015-08-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://old.panlex.org/pubs/etc/plwebdata-201404.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Transformation of PanLex database to RDF, linkage with Lexvo and DBpedia, and publication as Linked Data; co-author with Patrick Westphal and Claus Stadler",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "PanLex and LEXTRACT: Translating all Words of all Languages of the World",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Coling 2010: 23rd International Conference on Computational Linguistics",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "2010-07-08",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://aclweb.org/anthology/C/C10/C10-3010.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Research on expansion of coverage of PanLex, a lemmatic translation resource, via semi-automatic dictionary scraping; co-author with Timothy Baldwin and Susan M. Colowick",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Lemmatic Machine Translation",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Machine Translation Summit XII",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "2009-08-30",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.mt-archive.info/MTS-2009-Soderland.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Panlingual Translator, a prototype lemmatic machine-translation system; co-author with Stephen Soderland, Christopher Lim, Mausam, Bo Qin, and Oren Etzioni",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Disambiguating for the Web: A Test of Two Methods",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "K-CAP 2007: Fourth International Conference on Knowledge Capture",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "2007-10-31",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://turing.cs.washington.edu/papers/disamweb.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Paraphrasal disambiguation was more effective than truth-conditional disambiguation in an experiment with 386 subjects; co-author with Susan M. Colowick",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "\u201CThe Official Language Problem",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "American Political Science Review, 85, 495\u2013514",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "1991-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://old.panlex.org/pubs/etc/offlangprob-apsr1991.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Proves in a mathematical model that it is possible to discover a fair and efficient policy on official languages even when language groups are willing to misrepresent the costs they would incur to use a nonnative official language",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "The Distribution of Foreign Language Skills as a Game Equilibrium",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Game Equilibrium Models, ed. Reinhard Selten, vol. 4, Social and Political Interaction (Berlin: Springer)",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "1991-01-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://old.panlex.org/pubs/etc/flsge-abs.html"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Proofs of relationships among learning aptitude, language difficulty, and personal benefit in a game model, suggesting that those who learn the hardest languages get the most profit; co-author with Reinhard Selten",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "skills": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "skills",
    "data": {
      "head": {
        "size": 2,
        "data": "Skills"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Web Development",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "various",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "HTML, CSS, Javascript",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Languages",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "various",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "JavaScript, Perl, Java, bash, 68000 Assembly, VBA, APL",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Scopes",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "full stack, back end, front end, APIs, SPAs",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Back-end",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "various",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Node.js, NPM, Express, pg, pg-promise, bcrypt, solr, DBI",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Databases",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "PostgreSQL, PL/pgSQL, SQL Server, FileMaker Pro, MongoDB, migrations",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Front-end",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "various",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "HTML, CSS, JQuery, Cheerio, Bootstrap, EJS, Pug, Materialize",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Content and version management",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "git, svn, Github, Gitlab, Bitbucket, SourceForge, WordPress",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Quality control",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "ESLint, mocha, chai, Selenium Webdriver, Chrome Developer Tools",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Accessibility",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "WCAG 2.1, ARIA, Chrome/aXe/Siteimprove/WAVE/OpenWAX/Tenon.io audits, ADA Title III",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Internationalization",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Unicode, CLDR, ISO 639, PanLex API",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Web servers",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Apache httpd, nginx",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Mail servers",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Postfix, sendmail, SendGrid Web API",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Remote hosts",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Amazon AWS (EC2, S3, Glacier), OVH",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "OS\u2019s",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Ubuntu, RHEL, OS X, Cisco IOS",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Configuration management",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Puppet",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Files",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "FineReader, Acrobat, iconv, Atom, nano, ed, sed, bbEdit/TextWrangler, GraphicConverter",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "CAD",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "VectorWorks",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Statistics",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "SPSS",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Office apps",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Apache OpenOffice, Apple iWork, Microsoft Office",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Collaboration",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "intermediate",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Slack, Asana, Wrike, Trello, Egnyte",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "languages": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "languages",
    "data": {
      "head": {
        "size": 2,
        "data": "Languages known"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "English",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "native",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Esperanto",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "professional",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "German",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "working",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Turkish",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "working",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "French",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "practical",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Norwegian (Bokm\xE5l)",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "practical",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Russian",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "practical",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Latin",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "fragmentary",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "interests": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "interests",
    "data": {
      "head": {
        "size": 2,
        "data": "Interests"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "language design",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "controlled Languages, artificial languages, disambiguation",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "human rights",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "universality, humanitarian intervention, migration rights, genocide, civil liberties, transparency, quasi-municipality democracy",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "social choice",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "voting design, language choice, rational mediation",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "references": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "references",
    "data": {
      "head": {
        "size": 2,
        "data": "References"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Learners Guild",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Reference",
                  "tail": "Instructors and colleagues during 2017\u20132018 enrollment as trainee-apprentice (on request)",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "The Long Now Foundation",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Reference",
                  "tail": "Supervisors and colleagues during 2012\u20132016 tenure as PanLex Project Director (on request)",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  }
}`,"docs/samples/pool-medium/pool-medium-std.json":`{
  "basics": {
    "name": "Jonathan Pool",
    "label": "Developer of accessible web applications",
    "picture": "http://stulta.com/images/pool-2009.jpg",
    "email": "pool@stulta.com",
    "phone": "(510) 225-1717",
    "website": "http://jpdev.pro/info",
    "summary": "I have developed web and database applications in JavaScript and other languages. I am currently adding accessibility features to existing applications and developing new ones that comply with international accessibility standards.",
    "location": {
      "address": "555 10th St Apt 312",
      "city": "Oakland",
      "region": "California",
      "postalCode": "94607-5208",
      "countryCode": "US"
    },
    "profiles": [
      {
        "network": "Github",
        "username": "jrpool",
        "url": "https://github.com/jrpool"
      },
      {
        "network": "LinkedIn",
        "username": "jonathanpool",
        "url": "https://www.linkedin.com/in/jonathanpool/"
      },
      {
        "network": "MDN Web Docs",
        "username": "Jonathan Pool",
        "url": "https://developer.mozilla.org/en-US/profiles/JonathanPool"
      },
      {
        "network": "Google Scholar",
        "username": "JonathanPool",
        "url": "https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en&oi=ao"
      }
    ]
  },
  "work": [
    {
      "company": "The Long Now Foundation",
      "position": "Project Director",
      "website": "http://longnow.org",
      "startDate": "2012-01-01",
      "endDate": "2016-12-19",
      "summary": "Director of the PanLex project",
      "highlights": [
        "Developed PostgreSQL database of 3.1 billion lexical translations",
        "Developed UIs and SEO for database",
        "Recruited steering committee and advisory committee",
        "Hired and supervised 3 computational linguists and 1 linguist",
        "Director 2 summer internship programs with 45 interns",
        "Established project office"
      ]
    },
    {
      "company": "Centerplex",
      "position": "Proprietor",
      "website": "http://stulta.com/misc/cx/",
      "startDate": "1993-06-16",
      "endDate": "2004-06-11",
      "summary": "Owner and operator of 4 office buildings with 100 tenants",
      "highlights": [
        "Developed web application and UI for tenant-initiated leasing",
        "Procured, configured, and managed 4-building wireless network with T1 WAN and Cisco LAN",
        "Hired and supervised 20 employees",
        "Upgraded physical plant to enhance ADA accessibility",
        "Procured and managed lighting upgrade with 1.5-year payback"
      ]
    },
    {
      "company": "University of Washington",
      "position": "Assistant and Associate Professor",
      "website": "http://www.washington.edu",
      "startDate": "1977-09-16",
      "endDate": "1993-06-15",
      "summary": "Member of faculty of Department of Political Science",
      "highlights": [
        "Published research articles, collections, and conference papers",
        "Had visiting appointments at University of Paderborn and University of Bielefeld, Germany",
        "Taught courses in research methods, decision theory, and language policy",
        "Served on university committees"
      ]
    },
    {
      "company": "State University of New York at Stony Brook",
      "position": "Assistant Professor",
      "website": "http://www.stonybrook.edu",
      "startDate": "1971-01-01",
      "endDate": "1977-06-15",
      "summary": "Member of faculty of Department of Political Science",
      "highlights": [
        "Published research articles and conference papers",
        "Had visiting appointments at Stanford University, McGill University, and University of Mannheim, Germany",
        "Taught courses in research methods, comparative politics, and language policy",
        "Developed instructional software"
      ]
    }
  ],
  "volunteer": [
    {
      "organization": "Berkeley Town House Cooperative Corporation",
      "position": "Director and Secretary",
      "website": "http://www.berkeleytownhouse.com",
      "startDate": "2011-05-24",
      "endDate": "2011-12-06",
      "summary": "Managed and improved access to corporate documentation",
      "highlights": [
        "Digitized 52 years of corporate board minutes",
        "Made 13,000 records web-accessible to authorized members",
        "Documented extent and cost of construction defect, permitting corporation to recover $224,415 from contractors"
      ]
    },
    {
      "organization": "Peace Corps",
      "position": "Volunteer",
      "website": "https://www.peacecorps.gov",
      "startDate": "1964-06-15",
      "endDate": "1966-06-15",
      "summary": "Taught ESL in Nev\u015Fehir and \u0130stanbul, Turkey",
      "highlights": [
        "Achieved 4.5 Foreign Service Institute score in Turkish",
        "Published articles in Turkish periodicals",
        "Authored language textbook for speakers of Turkish"
      ]
    },
    {
      "organization": "Operation Crossroads Africa",
      "position": "Volunteer",
      "website": "http://www.operationcrossroadsafrica.org",
      "startDate": "1963-06-15",
      "endDate": "1963-08-15",
      "summary": "Worked on a binational team constructing a community center in Nsoatre, Ghana",
      "highlights": [
        "Visited C\xF4te d\u2019Ivoire, Togo, Benin, and Nigeria"
      ]
    }
  ],
  "education": [
    {
      "institution": "Learners Guild",
      "area": "full-stack web development",
      "studyType": "Vocational training and apprenticeship",
      "startDate": "2017-05-01",
      "endDate": "2018-02-16",
      "courses": [
        "full-stack web application development",
        "JavaScript",
        "Node.js",
        "PostgreSQL",
        "Express",
        "web accessibility"
      ]
    },
    {
      "institution": "University of Washington",
      "area": "computer science and linguistics",
      "studyType": "undergraduate and graduate courses",
      "startDate": "2004-03-29",
      "endDate": "2007-06-01",
      "gpa": "3.97",
      "courses": [
        "computer programming (Java)",
        "data structures and algorithms",
        "user-interface design",
        "artificial intelligence",
        "syntax",
        "morphology",
        "semantics",
        "lexical ambiguity",
        "computational linguistics",
        "grammar engineering",
        "human rights law and philosophy"
      ]
    },
    {
      "institution": "The University of Chicago",
      "area": "political science",
      "studyType": "M.A. and Ph.D.",
      "startDate": "1966-09-01",
      "endDate": "1971-04-30",
      "courses": [
        "computational political analysis",
        "survey research on public opinion",
        "political science methodology",
        "political philosophy",
        "comparative politics"
      ]
    },
    {
      "institution": "Harvard University",
      "area": "government",
      "studyType": "B.A.",
      "startDate": "1960-09-01",
      "endDate": "1964-06-30",
      "courses": [
        "quantitative analysis of judicial behavior",
        "political philosophy",
        "comparative politics"
      ]
    }
  ],
  "awards": [
    {
      "title": "Computer Simulation in Multilingual International Studies",
      "date": "1983-07-15",
      "awarder": "University of Maryland",
      "summary": "Cross-national policy simulation for students of politics"
    },
    {
      "title": "Computer Equipment for Experimental Political Science Research",
      "date": "1978-09-15",
      "awarder": "National Science Foundation",
      "summary": "Laboratory for study of political behavior; co-principal investigator with Donald R. Matthews"
    }
  ],
  "publications": [
    {
      "name": "Countering language attrition with PanLex and the Web of Data",
      "publisher": "Semantic Web Journal",
      "releaseDate": "2015-08-01",
      "website": "https://old.panlex.org/pubs/etc/plwebdata-201404.pdf",
      "summary": "Transformation of PanLex database to RDF, linkage with Lexvo and DBpedia, and publication as Linked Data; co-author with Patrick Westphal and Claus Stadler"
    },
    {
      "name": "PanLex and LEXTRACT: Translating all Words of all Languages of the World",
      "publisher": "Coling 2010: 23rd International Conference on Computational Linguistics",
      "releaseDate": "2010-07-08",
      "website": "http://aclweb.org/anthology/C/C10/C10-3010.pdf",
      "summary": "Research on expansion of coverage of PanLex, a lemmatic translation resource, via semi-automatic dictionary scraping; co-author with Timothy Baldwin and Susan M. Colowick"
    },
    {
      "name": "Lemmatic Machine Translation",
      "publisher": "Machine Translation Summit XII",
      "releaseDate": "2009-08-30",
      "website": "http://www.mt-archive.info/MTS-2009-Soderland.pdf",
      "summary": "Panlingual Translator, a prototype lemmatic machine-translation system; co-author with Stephen Soderland, Christopher Lim, Mausam, Bo Qin, and Oren Etzioni"
    },
    {
      "name": "Disambiguating for the Web: A Test of Two Methods",
      "publisher": "K-CAP 2007: Fourth International Conference on Knowledge Capture",
      "releaseDate": "2007-10-31",
      "website": "http://turing.cs.washington.edu/papers/disamweb.pdf",
      "summary": "Paraphrasal disambiguation was more effective than truth-conditional disambiguation in an experiment with 386 subjects; co-author with Susan M. Colowick"
    },
    {
      "name": "\u201CThe Official Language Problem",
      "publisher": "American Political Science Review, 85, 495\u2013514",
      "releaseDate": "1991-06-15",
      "website": "https://old.panlex.org/pubs/etc/offlangprob-apsr1991.pdf",
      "summary": "Proves in a mathematical model that it is possible to discover a fair and efficient policy on official languages even when language groups are willing to misrepresent the costs they would incur to use a nonnative official language"
    },
    {
      "name": "The Distribution of Foreign Language Skills as a Game Equilibrium",
      "publisher": "Game Equilibrium Models, ed. Reinhard Selten, vol. 4, Social and Political Interaction (Berlin: Springer)",
      "releaseDate": "1991-01-15",
      "website": "https://old.panlex.org/pubs/etc/flsge-abs.html",
      "summary": "Proofs of relationships among learning aptitude, language difficulty, and personal benefit in a game model, suggesting that those who learn the hardest languages get the most profit; co-author with Reinhard Selten"
    }
  ],
  "skills": [
    {
      "name": "Web Development",
      "level": "Master",
      "level": "various",
      "keywords": [
        "HTML",
        "CSS",
        "Javascript"
      ]
    },
    {
      "name": "Languages",
      "level": "various",
      "keywords": [
        "JavaScript",
        "Perl",
        "Java",
        "bash",
        "68000 Assembly",
        "VBA",
        "APL"
      ]
    },
    {
      "name": "Scopes",
      "level": "intermediate",
      "keywords": [
        "full stack",
        "back end",
        "front end",
        "APIs",
        "SPAs"
      ]
    },
    {
      "name": "Back-end",
      "level": "various",
      "keywords": [
        "Node.js",
        "NPM",
        "Express",
        "pg",
        "pg-promise",
        "bcrypt",
        "solr",
        "DBI"
      ]
    },
    {
      "name": "Databases",
      "level": "intermediate",
      "keywords": [
        "PostgreSQL",
        "PL/pgSQL",
        "SQL Server",
        "FileMaker Pro",
        "MongoDB",
        "migrations"
      ]
    },
    {
      "name": "Front-end",
      "level": "various",
      "keywords": [
        "HTML",
        "CSS",
        "JQuery",
        "Cheerio",
        "Bootstrap",
        "EJS",
        "Pug",
        "Materialize"
      ]
    },
    {
      "name": "Content and version management",
      "level": "intermediate",
      "keywords": [
        "git",
        "svn",
        "Github",
        "Gitlab",
        "Bitbucket",
        "SourceForge",
        "WordPress"
      ]
    },
    {
      "name": "Quality control",
      "level": "junior",
      "keywords": [
        "ESLint",
        "mocha",
        "chai",
        "Selenium Webdriver",
        "Chrome Developer Tools"
      ]
    },
    {
      "name": "Accessibility",
      "level": "junior",
      "keywords": [
        "WCAG 2.1",
        "ARIA",
        "Chrome/aXe/Siteimprove/WAVE/OpenWAX/Tenon.io audits",
        "ADA Title III"
      ]
    },
    {
      "name": "Internationalization",
      "level": "intermediate",
      "keywords": [
        "Unicode",
        "CLDR",
        "ISO 639",
        "PanLex API"
      ]
    },
    {
      "name": "Web servers",
      "level": "intermediate",
      "keywords": [
        "Apache httpd",
        "nginx"
      ]
    },
    {
      "name": "Mail servers",
      "level": "junior",
      "keywords": [
        "Postfix",
        "sendmail",
        "SendGrid Web API"
      ]
    },
    {
      "name": "Remote hosts",
      "level": "intermediate",
      "keywords": [
        "Amazon AWS (EC2", "S3", "Glacier)",
        "OVH"
      ]
    },
    {
      "name": "OS\u2019s",
      "level": "intermediate",
      "keywords": [
        "Ubuntu",
        "RHEL",
        "OS X",
        "Cisco IOS"
      ]
    },
    {
      "name": "Configuration management",
      "level": "junior",
      "keywords": [
        "Puppet"
      ]
    },
    {
      "name": "Files",
      "level": "intermediate",
      "keywords": [
        "FineReader",
        "Acrobat",
        "iconv",
        "Atom",
        "nano",
        "ed",
        "sed",
        "bbEdit/TextWrangler",
        "GraphicConverter"
      ]
    },
    {
      "name": "CAD",
      "level": "intermediate",
      "keywords": [
        "VectorWorks"
      ]
    },
    {
      "name": "Statistics",
      "level": "junior",
      "keywords": [
        "SPSS"
      ]
    },
    {
      "name": "Office apps",
      "level": "intermediate",
      "keywords": [
        "Apache OpenOffice",
        "Apple iWork",
        "Microsoft Office"
      ]
    },
    {
      "name": "Collaboration",
      "level": "intermediate",
      "keywords": [
        "Slack",
        "Asana",
        "Wrike",
        "Trello",
        "Egnyte"
      ]
    }
  ],
  "languages": [
    {
      "name": "English",
      "level": "native"
    },
    {
      "name": "Esperanto",
      "level": "professional"
    },
    {
      "name": "German",
      "level": "working"
    },
    {
      "name": "Turkish",
      "level": "working"
    },
    {
      "name": "French",
      "level": "practical"
    },
    {
      "name": "Norwegian (Bokm\xE5l)",
      "level": "practical"
    },
    {
      "name": "Russian",
      "level": "practical"
    },
    {
      "name": "Latin",
      "level": "fragmentary"
    }
  ],
  "interests": [
    {
      "name": "language design",
      "keywords": [
        "controlled Languages",
        "artificial languages",
        "disambiguation"
      ]
    },
    {
      "name": "human rights",
      "keywords": [
        "universality",
        "humanitarian intervention",
        "migration rights",
        "genocide",
        "civil liberties",
        "transparency",
        "quasi-municipality democracy"
      ]
    },
    {
      "name": "social choice",
      "keywords": [
        "voting design",
        "language choice",
        "rational mediation"
      ]
    }
  ],
  "references": [
    {
      "name": "Learners Guild",
      "reference": "Instructors and colleagues during 2017\u20132018 enrollment as trainee-apprentice (on request)"
    },
    {
      "name": "The Long Now Foundation",
      "reference": "Supervisors and colleagues during 2012\u20132016 tenure as PanLex Project Director (on request)"
    }
  ]
}
`,"docs/samples/pool-medium-ex/pool-medium-ex-a11y.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Jonathan Pool: Curriculum Vitae</title>
    <style>
      @media (max-width: 650px) {
        html {
          font-size: 10px;
        }
      }
      @media (min-width: 651px), print {
        .cornerPic > img {
          position: absolute;
          top: 3rem;
          right: 3rem;
        }
      }
      @media (min-width: 651px) {
        html {
          font-size: 1.6vw;
        }
      }
      @media print {
        html {
          font-size: 10px;
        }
      }
      * {
        box-sizing: border-box;
      }
      a {
        overflow-wrap: break-word;
      }
      .band {
        background-color: lightgray;
      }
      .band,
      .rowTablesCircled,
      .section-subhead {
        margin-top: 1rem;
      }
      body {
        background: #eee;
        margin: 3rem 3rem;
      }
      .boxedBulletList {
        padding-bottom: 0.5rem;
        border-style: solid;
        border-width: 1px;
      }
      .boxedBulletList + .boxedBulletList {
        margin-top: -1px;
      }
      .boxedBulletList > h1 {
        margin-top: 0.1rem;
      }
      .caps {
        text-transform: uppercase;
      }
      caption {
        margin-bottom: 0.5rem;
        font-weight: bold;
      }
      .center,
      .compact {
        text-align: center;
      }
      .compact {
        padding: 0 3rem 2rem 3rem;
        border-style: solid;
        border-width: 0.5rem;
        border-radius: 50%;
        border-color: #33444433;
      }
      .cornerPic {
        text-align: center;
      }
      .cornerPic > img {
        width: 8rem;
      }
      h1 {
        margin: 0.5rem 0 0 0.5rem;
        color: #344;
      }
      .left {
        text-align: left;
      }
      li,
      td {
        font-size: 1.2rem;
      }
      p {
        margin: 0.3rem 0 0.8rem 0.5rem;
      }
      p.size1,
      p.size2 {
        font-weight: bold;
      }
      .rowTable ~ .rowTable {
        margin-top: 0.1rem;
      }
      .rowTablesCircled {
        display: flex;
        justify-content: center;
      }
      .rowTablesCircled td {
        padding-right: 0.3rem;
      }
      section:not(.boxedBulletList) + .boxedBulletList,
      .section-head {
        margin-top: 2rem;
      }
      .size1 {
        font-size: 2.2rem;
      }
      .size2 {
        font-size: 2rem;
        font-style: italic;
      }
      .size3 {
        font-size: 1.8rem;
      }
      .size4 {
        font-size: 1.6rem;
        font-style: italic;
      }
      .size5 {
        font-size: 1.4rem;
      }
      .size6 {
        font-size: 1.2rem;
        font-style: italic;
      }
      .size7,
      p {
        font-size: 1rem;
      }
      strong,
      .strong {
        font-weight: bold;
      }
      table {
        margin: 0.5rem auto 0 auto;
        border-collapse: collapse;
      }
      .tableLH th {
        text-align: right;
        padding-right: 0.5rem;
      }
      td {
        padding: 0.2rem;
        border-style: solid;
        border-width: 1px;
        border-color: slategray;
        text-align: left;
      }
      .theme-credit {
        margin-top: 1rem;
        text-align: center;
        font-size: 1rem;
        font-style: italic;
      }
      .tight {
        margin-top: 0;
        margin-bottom: 0;
      }
      ul {
        margin: 0.25rem 0;
      }
      .under {
        margin-top: 0;
      }
    </style>
  </head>
  <body>
    <main>
      <section title="Jonathan Pool: Curriculum Vitae" class="section-head center">
        <p class="size1 center">Jonathan Pool</p>
        <p class="size2 center under">Curriculum Vitae</p>
      </section>
      <section title="Work History" class="section-head">
        <h1 class="size3 band center">Work History</h1>
        <section title="The Long Now Foundation">
          <h1 class="size5"><a href="https://panlex.org">The Long Now Foundation</a></h1>
          <h1 class="size6">2012-01-01 \u2013 2016-12-19: Project Director, PanLex Project</h1>
          <p class="size7">Ported database from MS SQL Server to PostgreSQL. Grew data to 24 million words and 1.3 billion word-pair translations. Designed and implemented developer, end-user, and search-engine interfaces to database. Documented project standards, practices, and tools. Presented paper at IUC 2012. Published technical articles. Recruited steering committee. Hired 5 developers and linguists and negotiated transfer of project control to them.</p>
        </section>
        <section title="Utilika Foundation">
          <h1 class="size5"><a href="http://stulta.com/misc/uf/">Utilika Foundation</a></h1>
          <h1 class="size6">2004-05-03 \u2013 2011-12-31: President</h1>
          <p class="size7">Founded foundation. Obtained IRS recognition. Recruited board of directors. Directed search for research partner. Negotiated partnership with Turing Center at University of Washington. Managed partnership. Participated in research, development, and publication. Presented papers at CLAW/AMTA 2006, K-CAP 2007, SAAKM 2007, LISA Berkeley 2009, Machine Translation Summit XII, Coling 2010, and DELPH-IN Summit 2011.</p>
        </section>
        <section title="Centerplex">
          <h1 class="size5"><a href="http://stulta.com/misc/cx/">Centerplex</a></h1>
          <h1 class="size6">1993-06-16 \u2013 2004-06-11: Proprietor</h1>
          <p class="size7">Purchased, improved, and operated 4 Tukwila, Washington, office buildings with about 100 tenants. Pioneered micro-offices, virtual tenancies, web-based leasing and room reservations, inter-building LAN, free Internet access, and energy-conservation and recycling programs. Earned 1999 EPA Energy Star for Small Business Award. Implemented lighting upgrade recognized by International Interior Design Association. Profiled in Joseph Romm, \u201CCool Companies\u201D (2006).</p>
        </section>
        <section title="University of Washington">
          <h1 class="size5"><a href="http://www.washington.edu">University of Washington</a></h1>
          <h1 class="size6">1977-09-16 \u2013 1993-06-15: Assistant and Associate Professor</h1>
          <p class="size7">Performed research and graduate and undergraduate teaching in political science, including language policy, social choice theory, and quantitative research methods. Presented papers at conferences of American Political Science Association and other organizations. Published book chapters, research articles, and working papers. Held visiting research and teaching appointments at Universities of Paderborn and Bielefeld, Germany.</p>
        </section>
        <section title="State University of New York at Stony Brook">
          <h1 class="size5"><a href="http://www.stonybrook.edu">State University of New York at Stony Brook</a></h1>
          <h1 class="size6">1971-01-01 \u2013 1977-06-15: Assistant Professor</h1>
          <p class="size7">Performed research and graduate and undergraduate teaching in political science, including language policy, social choice theory, and quantitative research methods. Presented papers at conferences of American Political Science Association and other organizations. Published book chapters, research articles, and working papers. Held visiting research and teaching appointments at University of Mannheim (Germany), McGill University (Canada), the USSR Academy of Sciences, and Stanford University.</p>
        </section>
        <section title="Peace Corps">
          <h1 class="size5"><a href="https://www.peacecorps.gov">Peace Corps</a></h1>
          <h1 class="size6">1964-06-15 \u2013 1966-06-15: Teacher of English as a foreign language</h1>
          <p class="size7">Taught English in secondary schools in Nev\u015Fehir and \u0130stanbul, Turkey. Published articles in Turkish periodicals (\u201CT\xFCrk Dili\u201D, \u201CY\xF6n\u201D) and \u201CPeace Corps Volunteer\u201D. Wrote and published an Esperanto textbook in Turkish. Helped fund a summer camp for disadvantaged youth.</p>
        </section>
      </section>
      <section title="Volunteering" class="section-head">
        <h1 class="size3 band center">Volunteering</h1>
        <section title="Esperantic Studies Foundation">
          <h1 class="size5"><a href="http://www.esperantic.org">Esperantic Studies Foundation</a></h1>
          <h1 class="size6">1968 \u2013 : Cofounder, director, and Advisory Board member</h1>
          <p class="size7">Co-organized mission, strategy, and partnerships.</p>
        </section>
        <section title="City of Tukwila, Washington">
          <h1 class="size5"><a href="http://www.tukwilawa.gov">City of Tukwila, Washington</a></h1>
          <h1 class="size6">2002 \u2013 2004: Connectivity Advisory Committee member</h1>
          <p class="size7">Drafted proposal for municipal broadband fiberoptic network.</p>
        </section>
        <section title="Johns Hopkins University">
          <h1 class="size5"><a href="http://www.worldcat.org/title/proceedings-of-the-johns-hopkins-first-national-search-for-applications-of-personal-computing-to-aid-the-handicapped-october-31-1981/oclc/8446123">Johns Hopkins University</a></h1>
          <h1 class="size6">1981 \u2013 1981: Proposal reviewer</h1>
          <p class="size7">Reviewed proposals for First National Search for Applications of Personal Computing to Aid the Handicapped.</p>
        </section>
        <section title="International Sociological Association, Research Committee on Sociolinguistics">
          <h1 class="size5"><a href="http://www.language-and-society.org/index.html">International Sociological Association, Research Committee on Sociolinguistics</a></h1>
          <h1 class="size6">1974 \u2013 1978: First Vice-President</h1>
          <p class="size7">Organized and obtained support for travel grants to sociolinguistics program of 9th World Congress of Sociology, 1978.</p>
        </section>
        <section title="Operation Crossroads Africa">
          <h1 class="size5"><a href="http://operationcrossroadsafrica.org">Operation Crossroads Africa</a></h1>
          <h1 class="size6">1963-06-15 \u2013 1963-08-15: Unskilled laborer</h1>
          <p class="size7">Participated in construction of a community center in Nsoatre, Ghana.</p>
        </section>
      </section>
      <section title="Conference presentations" class="section-head">
        <h1 class="size3 band center">Conference presentations</h1>
        <section title="SF Globalization">
          <h1 class="size5">SF Globalization, 2015</h1>
          <p class="size7">\u201CExtreme Localization: Translating Every Word in Every Language\u201D</p>
        </section>
        <section title="36th Internationalization & Unicode Conference">
          <h1 class="size5">36th Internationalization & Unicode Conference, 2012</h1>
          <p class="size7">\u201CDesigning a Panlingual Dictionary\u201D</p>
        </section>
        <section title="DELPH-IN Summit">
          <h1 class="size5">DELPH-IN Summit, 2011</h1>
          <p class="size7">\u201CPanLex: A Panlingual Lexical Resource\u201D</p>
        </section>
        <section title="Localization Industry Standards Association Berkeley Globalization Conference">
          <h1 class="size5">Localization Industry Standards Association Berkeley Globalization Conference, 2009</h1>
          <p class="size7">\u201CPanlingual Localization\u201D</p>
        </section>
        <section title="Semantic Authoring, Annotation and Knowledge Markup Workshop">
          <h1 class="size5">Semantic Authoring, Annotation and Knowledge Markup Workshop, 2007</h1>
          <p class="size7">\u201CSyntactic Disambiguation for the Semantic Web\u201D</p>
        </section>
        <section title="Fourth International Conference on Knowledge Capture">
          <h1 class="size5">Fourth International Conference on Knowledge Capture, 2007</h1>
          <p class="size7">\u201CDisambiguating for the Web: A Test of Two Methods\u201D</p>
        </section>
        <section title="5th International Workshop on Controlled Language Applications">
          <h1 class="size5">5th International Workshop on Controlled Language Applications, 2006</h1>
          <p class="size7">\u201CCan Controlled Languages Scale to the Web?\u201D</p>
        </section>
        <section title="International Symposium on Linguistic Human Rights">
          <h1 class="size5">International Symposium on Linguistic Human Rights, 1991</h1>
          <p class="size7">\u201CThe Language Auction: A Nondiscriminatory Method of Choosing Official Languages\u201D</p>
        </section>
        <section title="American Political Science Association">
          <h1 class="size5">American Political Science Association, 1986</h1>
          <p class="size7">\u201CThe Pure Theory of Language Conflict\u201D</p>
        </section>
      </section>
      <section title="Education" class="section-head">
        <h1 class="size3 band center">Education</h1>
        <section title="Learners Guild">
          <h1 class="size5"><a href="https://learnersguild.org">Learners Guild</a>, 2017-05-01 \u2013 2018-02-16</h1>
          <h1 class="size6">postsecondary; full-stack web development, web accessibility</h1>
          <p class="size7">Developed, tested, and documented server-client applications, responsive SPAs, and APIs with databases, authentication, authorization, and WCAG 2.0 compliance.</p>
        </section>
        <section title="University of Washington">
          <h1 class="size5"><a href="https://www.washington.edu">University of Washington</a>, 2004-03-29 \u2013 2007-06-01</h1>
          <h1 class="size6">undergraduate and graduate; computer science, human-computer interaction, linguistics, computational linguistics, human rights law and philosophy; GPA = 3.97/4; <a href="https://jpdev.pro/info/docs/pool-uw-transcript.pdf">transcript</a></h1>
          <p class="size7">Studied programming, data structures, algorithms, Java, user interfaces, AI, syntax, semantics, grammar engineering, human-rights law and philosophy, and public policy.</p>
        </section>
        <section title="The University of Chicago">
          <h1 class="size5"><a href="https://www.uchicago.edu">The University of Chicago</a>, 1966-09-01 \u2013 1971-04-30</h1>
          <h1 class="size6">graduate; Ph.D.; political science; <a href="https://jpdev.pro/info/docs/pool-uc-transcript.pdf">transcript</a></h1>
          <p class="size7">Studied all fields of political science. Did statistical analyses of opinion surveys for M.A. thesis and Ph.D. dissertation.</p>
        </section>
        <section title="Harvard University">
          <h1 class="size5"><a href="https://www.harvard.edu">Harvard University</a>, 1960-09-01 \u2013 1964-06-30</h1>
          <h1 class="size6">undergraduate; B.A. cum laude; government; <a href="https://jpdev.pro/info/docs/pool-hu-transcript.pdf">transcript</a></h1>
          <p class="size7">Studied political science, social sciences, humanities, calculus, physics. Did dimensional analysis of voting behavior of U.S. Supreme Court justices for B.A. honors thesis.</p>
        </section>
      </section>
      <section title="Grants" class="section-head">
        <h1 class="size3 band center">Grants</h1>
        <section title="Embassy of Canada to the United States">
          <h1 class="size5">Embassy of Canada to the United States, 1985</h1>
          \u201CThe Political Economy of Language\u201D
        </section>
        <section title="University of Maryland">
          <h1 class="size5">University of Maryland, 1983</h1>
          \u201CComputer Simulation in Multilingual International Studies\u201D
        </section>
        <section title="National Science Foundation">
          <h1 class="size5">National Science Foundation, 1978</h1>
          \u201CComputer Equipment for Experimental Political Science Research\u201D
        </section>
        <section title="American Association for the Advancement of Slavic Studies">
          <h1 class="size5">American Association for the Advancement of Slavic Studies, 1978</h1>
          \u201CLanguage and Ethnicity in the USSR: Advances in Policy Research\u201D
        </section>
        <section title="Ford Foundation">
          <h1 class="size5">Ford Foundation, 1978</h1>
          \u201CTravel support for 9th World Congress of Sociology\u201D
        </section>
        <section title="American Association for the Advancement of Slavic Studies">
          <h1 class="size5">American Association for the Advancement of Slavic Studies, 1975</h1>
          \u201CSoviet language policy\u201D
        </section>
        <section title="National Academy of Sciences of the USA and Academy of Sciences of the USSR">
          <h1 class="size5">National Academy of Sciences of the USA and Academy of Sciences of the USSR, 1975</h1>
          \u201CSociolinguistic research in Azerbaijan, Turkmenistan, and Kazakhstan\u201D
        </section>
        <section title="Social Science Research Council">
          <h1 class="size5">Social Science Research Council, 1974</h1>
          \u201CCross-Cultural Psycholinguistics\u201D
        </section>
        <section title="Alexander von Humboldt-Stiftung">
          <h1 class="size5">Alexander von Humboldt-Stiftung, 1974</h1>
          \u201CSurvey and Experimental Political Research\u201D
        </section>
        <section title="Deutscher Akademischer Austauschdienst and Council for European Studies">
          <h1 class="size5">Deutscher Akademischer Austauschdienst and Council for European Studies, 1973</h1>
          \u201CNew Directions in Research: Comparative Studies\u201D
        </section>
      </section>
      <section title="Selected publications" class="section-head">
        <h1 class="size3 band center">Selected publications</h1>
        <section title="Countering language attrition with PanLex and the Web of Data">
          <p class="size7">Patrick Westphal, Claus Stadler, Jonathan Pool<br><a href="http://www.semantic-web-journal.net/system/files/swj509.pdf">Countering language attrition with PanLex and the Web of Data</a><br>Semantic Web Journal: 2015</p>
        </section>
        <section title="PanLex: Building a Resource for Panlingual Lexical Translation">
          <p class="size7">David Kamholz, Jonathan Pool, Susan M. Colowick<br><a href="https://pdfs.semanticscholar.org/4bf5/387ec770f557525484b7c99be3a0c568651a.pdf">PanLex: Building a Resource for Panlingual Lexical Translation</a><br>LREC: 2014</p>
        </section>
        <section title="PanLex and LEXTRACT: Translating all Words of all Languages of the World">
          <p class="size7">Timothy Baldwin, Jonathan Pool, Susan M. Colowick<br><a href="http://turing.cs.washington.edu/papers/BaldwinEtAl-Lextract.pdf">PanLex and LEXTRACT: Translating all Words of all Languages of the World</a><br>Coling: 2010</p>
        </section>
        <section title="Evaluating Lemmatic Communication">
          <p class="size7">Katherine Everitt, Christopher Lim, Oren Etzioni, Jonathan Pool, Susan Colowick, Stephen Soderland<br><a href="http://www.trans-kom.eu/bd03nr01/trans-kom_03_01_03_Everitt_et_al_Lemmatic_Communication.20100531.pdf">Evaluating Lemmatic Communication</a><br>trans-kom: 2010</p>
        </section>
        <section title="Syntactic Disambiguation for the Semantic Web">
          <p class="size7">Jonathan Pool, S. M. Colowick<br><a href="http://ftp.informatik.rwth-aachen.de/Publications/CEUR-WS/Vol-289/po02.pdf">Syntactic Disambiguation for the Semantic Web</a><br>SAAKM: 2007</p>
        </section>
        <section title="The Multilingual Election Problem">
          <p class="size7">Jonathan Pool<br><a href="https://old.panlex.org/pubs/etc/multielectprob.pdf">The Multilingual Election Problem</a><br>Journal of Theoretical Politics: 1992</p>
        </section>
        <section title="The Distribution of Foreign Language Skills as a Game Equilibrium">
          <p class="size7">Reinhard Selten, Jonathan Pool<br><a href="https://pdfs.semanticscholar.org/fe68/86cfbf8c2d18f4175b490dcc8837a14d3a5c.pdf">The Distribution of Foreign Language Skills as a Game Equilibrium</a><br>Springer: 1991</p>
        </section>
        <section title="The Official Language Problem">
          <p class="size7">Jonathan Pool<br><a href="https://www.jstor.org/stable/1963171">The Official Language Problem</a><br>American Political Science Review: 1991</p>
        </section>
        <section title="How to Make Cooperation the Optimizing Strategy in a Two-Person Game">
          <p class="size7">Bernard Grofman, Jonathan Pool<br><a href="http://www.tandfonline.com/doi/abs/10.1080/0022250X.1977.9989871?src=recsys&">How to Make Cooperation the Optimizing Strategy in a Two-Person Game</a><br>Journal of Mathematical Sociology: 1977</p>
        </section>
        <section title="Coalition Formation in Small Groups with Incomplete Communication Networks">
          <p class="size7">Jonathan Pool<br><a href="https://old.panlex.org/pubs/etc/cfsg.pdf">Coalition Formation in Small Groups with Incomplete Communication Networks</a><br>Journal of Personality and Social Psychology: 1976</p>
        </section>
      </section>
    </main>
    <section title="credit" class="theme-credit">
      Powered by <a href="https://www.npmjs.com/package/jsonresume-theme-a11y">jsonresume-theme-a11y</a>
    </section>
  </body>
</html>`,"docs/samples/pool-medium-ex/pool-medium-ex-a11y.json":`{
  "lang": {
    "format": "hide",
    "data": "en"
  },
  "title": {
    "format": "hide",
    "data": "Jonathan Pool: Curriculum Vitae"
  },
  "legend": {
    "format": "hide",
    "data": {
      "area": "Concentrations",
      "basic": "Jonathan Pool: Curriculum Vitae",
      "company": "Company",
      "conferences": "Conference presentations",
      "courses": "Courses",
      "creditTo": "Powered by ",
      "education": "Education",
      "email": "Email",
      "endDate": "End date",
      "gpa": "GPA =",
      "grants": "Grants",
      "highlights": "Accomplishments",
      "label": "Label",
      "position": "Position",
      "publications": "Selected publications",
      "publisher": "Publisher",
      "releaseDate": "Release date",
      "startDate": "Start date",
      "studyType": "Study type",
      "title": "Title",
      "transcript": "transcript",
      "volunteer": "Volunteering",
      "work": "Work History"
    }
  },
  "order": {
    "format": "hide",
    "data": [
      "basic",
      "work",
      "volunteer",
      "conferences",
      "education",
      "grants",
      "publications"
    ]
  },
  "basicData": {
    "format": "hide",
    "data": [
      {
        "head": "Jonathan Pool",
        "subhead": "Curriculum Vitae"
      }
    ]
  },
  "workData": {
    "format": "hide",
    "data": [
      {
        "organization": "The Long Now Foundation",
        "role": "Project Director, PanLex Project",
        "website": "https://panlex.org",
        "startDate": "2012-01-01",
        "endDate": "2016-12-19",
        "synopsis": "Ported database from MS SQL Server to PostgreSQL. Grew data to 24 million words and 1.3 billion word-pair translations. Designed and implemented developer, end-user, and search-engine interfaces to database. Documented project standards, practices, and tools. Presented paper at IUC 2012. Published technical articles. Recruited steering committee. Hired 5 developers and linguists and negotiated transfer of project control to them."
      },
      {
        "organization": "Utilika Foundation",
        "role": "President",
        "website": "http://stulta.com/misc/uf/",
        "startDate": "2004-05-03",
        "endDate": "2011-12-31",
        "synopsis": "Founded foundation. Obtained IRS recognition. Recruited board of directors. Directed search for research partner. Negotiated partnership with Turing Center at University of Washington. Managed partnership. Participated in research, development, and publication. Presented papers at CLAW/AMTA 2006, K-CAP 2007, SAAKM 2007, LISA Berkeley 2009, Machine Translation Summit XII, Coling 2010, and DELPH-IN Summit 2011."
      },
      {
        "organization": "Centerplex",
        "role": "Proprietor",
        "website": "http://stulta.com/misc/cx/",
        "startDate": "1993-06-16",
        "endDate": "2004-06-11",
        "synopsis": "Purchased, improved, and operated 4 Tukwila, Washington, office buildings with about 100 tenants. Pioneered micro-offices, virtual tenancies, web-based leasing and room reservations, inter-building LAN, free Internet access, and energy-conservation and recycling programs. Earned 1999 EPA Energy Star for Small Business Award. Implemented lighting upgrade recognized by International Interior Design Association. Profiled in Joseph Romm, \u201CCool Companies\u201D (2006)."
      },
      {
        "organization": "University of Washington",
        "role": "Assistant and Associate Professor",
        "website": "http://www.washington.edu",
        "startDate": "1977-09-16",
        "endDate": "1993-06-15",
        "synopsis": "Performed research and graduate and undergraduate teaching in political science, including language policy, social choice theory, and quantitative research methods. Presented papers at conferences of American Political Science Association and other organizations. Published book chapters, research articles, and working papers. Held visiting research and teaching appointments at Universities of Paderborn and Bielefeld, Germany."
      },
      {
        "organization": "State University of New York at Stony Brook",
        "role": "Assistant Professor",
        "website": "http://www.stonybrook.edu",
        "startDate": "1971-01-01",
        "endDate": "1977-06-15",
        "synopsis": "Performed research and graduate and undergraduate teaching in political science, including language policy, social choice theory, and quantitative research methods. Presented papers at conferences of American Political Science Association and other organizations. Published book chapters, research articles, and working papers. Held visiting research and teaching appointments at University of Mannheim (Germany), McGill University (Canada), the USSR Academy of Sciences, and Stanford University."
      },
      {
        "organization": "Peace Corps",
        "role": "Teacher of English as a foreign language",
        "website": "https://www.peacecorps.gov",
        "startDate": "1964-06-15",
        "endDate": "1966-06-15",
        "synopsis": "Taught English in secondary schools in Nev\u015Fehir and \u0130stanbul, Turkey. Published articles in Turkish periodicals (\u201CT\xFCrk Dili\u201D, \u201CY\xF6n\u201D) and \u201CPeace Corps Volunteer\u201D. Wrote and published an Esperanto textbook in Turkish. Helped fund a summer camp for disadvantaged youth."
      }
    ]
  },
  "volunteerData": {
    "format": "hide",
    "data": [
      {
        "organization": "Esperantic Studies Foundation",
        "role": "Cofounder, director, and Advisory Board member",
        "website": "http://www.esperantic.org",
        "startDate": "1968",
        "endDate": "",
        "synopsis": "Co-organized mission, strategy, and partnerships."
      },
      {
        "organization": "City of Tukwila, Washington",
        "role": "Connectivity Advisory Committee member",
        "website": "http://www.tukwilawa.gov",
        "startDate": "2002",
        "endDate": "2004",
        "synopsis": "Drafted proposal for municipal broadband fiberoptic network."
      },
      {
        "organization": "Johns Hopkins University",
        "role": "Proposal reviewer",
        "website": "http://www.worldcat.org/title/proceedings-of-the-johns-hopkins-first-national-search-for-applications-of-personal-computing-to-aid-the-handicapped-october-31-1981/oclc/8446123",
        "startDate": "1981",
        "endDate": "1981",
        "synopsis": "Reviewed proposals for First National Search for Applications of Personal Computing to Aid the Handicapped."
      },
      {
        "organization": "International Sociological Association, Research Committee on Sociolinguistics",
        "role": "First Vice-President",
        "website": "http://www.language-and-society.org/index.html",
        "startDate": "1974",
        "endDate": "1978",
        "synopsis": "Organized and obtained support for travel grants to sociolinguistics program of 9th World Congress of Sociology, 1978."
      },
      {
        "organization": "Operation Crossroads Africa",
        "role": "Unskilled laborer",
        "website": "http://operationcrossroadsafrica.org",
        "startDate": "1963-06-15",
        "endDate": "1963-08-15",
        "synopsis": "Participated in construction of a community center in Nsoatre, Ghana."
      }
    ]
  },
  "conferenceData": {
    "format": "hide",
    "data": [
      {
        "name": "SF Globalization",
        "date": "2015",
        "title": "Extreme Localization: Translating Every Word in Every Language"
      },
      {
        "name": "36th Internationalization & Unicode Conference",
        "date": "2012",
        "title": "Designing a Panlingual Dictionary"
      },
      {
        "name": "DELPH-IN Summit",
        "date": "2011",
        "title": "PanLex: A Panlingual Lexical Resource"
      },
      {
        "name": "Localization Industry Standards Association Berkeley Globalization Conference",
        "date": "2009",
        "title": "Panlingual Localization"
      },
      {
        "name": "Semantic Authoring, Annotation and Knowledge Markup Workshop",
        "date": "2007",
        "title": "Syntactic Disambiguation for the Semantic Web"
      },
      {
        "name": "Fourth International Conference on Knowledge Capture",
        "date": "2007",
        "title": "Disambiguating for the Web: A Test of Two Methods"
      },
      {
        "name": "5th International Workshop on Controlled Language Applications",
        "date": "2006",
        "title": "Can Controlled Languages Scale to the Web?"
      },
      {
        "name": "International Symposium on Linguistic Human Rights",
        "date": "1991",
        "title": "The Language Auction: A Nondiscriminatory Method of Choosing Official Languages"
      },
      {
        "name": "American Political Science Association",
        "date": "1986",
        "title": "The Pure Theory of Language Conflict"
      }
    ]
  },
  "educationData": {
    "format": "hide",
    "data": [
      {
        "organization": "Learners Guild",
        "level": "postsecondary",
        "diploma": "",
        "specialties": [
          "full-stack web development",
          "web accessibility"
        ],
        "website": "https://learnersguild.org",
        "startDate": "2017-05-01",
        "endDate": "2018-02-16",
        "synopsis": "Developed, tested, and documented server-client applications, responsive SPAs, and APIs with databases, authentication, authorization, and WCAG 2.0 compliance.",
        "gpa": "",
        "transcript": ""
      },
      {
        "organization": "University of Washington",
        "level": "undergraduate and graduate",
        "diploma": "",
        "specialties": [
          "computer science",
          "human-computer interaction",
          "linguistics",
          "computational linguistics",
          "human rights law and philosophy"
        ],
        "website": "https://www.washington.edu",
        "startDate": "2004-03-29",
        "endDate": "2007-06-01",
        "synopsis": "Studied programming, data structures, algorithms, Java, user interfaces, AI, syntax, semantics, grammar engineering, human-rights law and philosophy, and public policy.",
        "gpa": "3.97/4",
        "transcript": "https://jpdev.pro/info/docs/pool-uw-transcript.pdf"
      },
      {
        "organization": "The University of Chicago",
        "level": "graduate",
        "diploma": "Ph.D.",
        "specialties": [
          "political science"
        ],
        "website": "https://www.uchicago.edu",
        "startDate": "1966-09-01",
        "endDate": "1971-04-30",
        "synopsis": "Studied all fields of political science. Did statistical analyses of opinion surveys for M.A. thesis and Ph.D. dissertation.",
        "gpa": "",
        "transcript": "https://jpdev.pro/info/docs/pool-uc-transcript.pdf"
      },
      {
        "organization": "Harvard University",
        "level": "undergraduate",
        "diploma": "B.A. cum laude",
        "specialties": [
          "government"
        ],
        "website": "https://www.harvard.edu",
        "startDate": "1960-09-01",
        "endDate": "1964-06-30",
        "synopsis": "Studied political science, social sciences, humanities, calculus, physics. Did dimensional analysis of voting behavior of U.S. Supreme Court justices for B.A. honors thesis.",
        "gpa": "",
        "transcript": "https://jpdev.pro/info/docs/pool-hu-transcript.pdf"
      }
    ]
  },
  "grantData": {
    "format": "hide",
    "data": [
      {
        "grantor": "Embassy of Canada to the United States",
        "date": "1985",
        "title": "The Political Economy of Language"
      },
      {
        "grantor": "University of Maryland",
        "date": "1983",
        "title": "Computer Simulation in Multilingual International Studies"
      },
      {
        "grantor": "National Science Foundation",
        "date": "1978",
        "title": "Computer Equipment for Experimental Political Science Research"
      },
      {
        "grantor": "American Association for the Advancement of Slavic Studies",
        "date": "1978",
        "title": "Language and Ethnicity in the USSR: Advances in Policy Research"
      },
      {
        "grantor": "Ford Foundation",
        "date": "1978",
        "title": "Travel support for 9th World Congress of Sociology"
      },
      {
        "grantor": "American Association for the Advancement of Slavic Studies",
        "date": "1975",
        "title": "Soviet language policy"
      },
      {
        "grantor": "National Academy of Sciences of the USA and Academy of Sciences of the USSR",
        "date": "1975",
        "title": "Sociolinguistic research in Azerbaijan, Turkmenistan, and Kazakhstan"
      },
      {
        "grantor": "Social Science Research Council",
        "date": "1974",
        "title": "Cross-Cultural Psycholinguistics"
      },
      {
        "grantor": "Alexander von Humboldt-Stiftung",
        "date": "1974",
        "title": "Survey and Experimental Political Research"
      },
      {
        "grantor": "Deutscher Akademischer Austauschdienst and Council for European Studies",
        "date": "1973",
        "title": "New Directions in Research: Comparative Studies"
      }
    ]
  },
  "publicationData": {
    "format": "hide",
    "data": [
      {
        "authors": ["Patrick Westphal", "Claus Stadler", "Jonathan Pool"],
        "title": "Countering language attrition with PanLex and the Web of Data",
        "publisher": "Semantic Web Journal",
        "date": "2015",
        "url": "http://www.semantic-web-journal.net/system/files/swj509.pdf"
      },
      {
        "authors": ["David Kamholz", "Jonathan Pool", "Susan M. Colowick"],
        "title": "PanLex: Building a Resource for Panlingual Lexical Translation",
        "publisher": "LREC",
        "date": "2014",
        "url": "https://pdfs.semanticscholar.org/4bf5/387ec770f557525484b7c99be3a0c568651a.pdf"
      },
      {
        "authors": ["Timothy Baldwin", "Jonathan Pool", "Susan M. Colowick"],
        "title": "PanLex and LEXTRACT: Translating all Words of all Languages of the World",
        "publisher": "Coling",
        "date": "2010",
        "url": "http://turing.cs.washington.edu/papers/BaldwinEtAl-Lextract.pdf"
      },
      {
        "authors": [
          "Katherine Everitt",
          "Christopher Lim",
          "Oren Etzioni",
          "Jonathan Pool",
          "Susan Colowick",
          "Stephen Soderland"
        ],
        "title": "Evaluating Lemmatic Communication",
        "publisher": "trans-kom",
        "date": "2010",
        "url": "http://www.trans-kom.eu/bd03nr01/trans-kom_03_01_03_Everitt_et_al_Lemmatic_Communication.20100531.pdf"
      },
      {
        "authors": ["Jonathan Pool", "S. M. Colowick"],
        "title": "Syntactic Disambiguation for the Semantic Web",
        "publisher": "SAAKM",
        "date": "2007",
        "url": "http://ftp.informatik.rwth-aachen.de/Publications/CEUR-WS/Vol-289/po02.pdf"
      },
      {
        "authors": ["Jonathan Pool"],
        "title": "The Multilingual Election Problem",
        "publisher": "Journal of Theoretical Politics",
        "date": "1992",
        "url": "https://old.panlex.org/pubs/etc/multielectprob.pdf"
      },
      {
        "authors": ["Reinhard Selten", "Jonathan Pool"],
        "title": "The Distribution of Foreign Language Skills as a Game Equilibrium",
        "publisher": "Springer",
        "date": "1991",
        "url": "https://pdfs.semanticscholar.org/fe68/86cfbf8c2d18f4175b490dcc8837a14d3a5c.pdf"
      },
      {
        "authors": ["Jonathan Pool"],
        "title": "The Official Language Problem",
        "publisher": "American Political Science Review",
        "date": "1991",
        "url": "https://www.jstor.org/stable/1963171"
      },
      {
        "authors": ["Bernard Grofman", "Jonathan Pool"],
        "title": "How to Make Cooperation the Optimizing Strategy in a Two-Person Game",
        "publisher": "Journal of Mathematical Sociology",
        "date": "1977",
        "url": "http://www.tandfonline.com/doi/abs/10.1080/0022250X.1977.9989871?src=recsys&"
      },
      {
        "authors": ["Jonathan Pool"],
        "title": "Coalition Formation in Small Groups with Incomplete Communication Networks",
        "publisher": "Journal of Personality and Social Psychology",
        "date": "1976",
        "url": "https://old.panlex.org/pubs/etc/cfsg.pdf"
      }
    ]
  },
  "basic": {
    "format": "extraction",
    "title": "basic",
    "data": {
      "from": "basicData",
      "into": "basicMainHeads"
    }
  },
  "work": {
    "format": "extraction",
    "title": "work",
    "data": {
      "from": "workData",
      "into": "headedWorkVolParagraphs"
    }
  },
  "volunteer": {
    "format": "extraction",
    "title": "volunteer",
    "data": {
      "from": "volunteerData",
      "into": "headedWorkVolParagraphs"
    }
  },
  "conferences": {
    "format": "extraction",
    "title": "conferences",
    "data": {
      "from": "conferenceData",
      "into": "headedConferenceParagraphs"
    }
  },
  "education": {
    "format": "extraction",
    "title": "education",
    "data": {
      "from": "educationData",
      "into": "headedEducationParagraphs"
    }
  },
  "grants": {
    "format": "extraction",
    "title": "grants",
    "data": {
      "from": "grantData",
      "into": "headedGrantParagraphs"
    }
  },
  "publications": {
    "format": "extraction",
    "title": "publications",
    "data": {
      "from": "publicationData",
      "into": "headedPublicationParagraphs"
    }
  }
}
`,"docs/samples/pool-medium-ex/pool-mediumrecent-ex-a11y.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Jonathan Pool: Curriculum Vitae</title>
    <style>
      @media (max-width: 650px) {
        html {
          font-size: 10px;
        }
      }
      @media (min-width: 651px), print {
        .cornerPic > img {
          position: absolute;
          top: 3rem;
          right: 3rem;
        }
      }
      @media (min-width: 651px) {
        html {
          font-size: 1.6vw;
        }
      }
      @media print {
        html {
          font-size: 10px;
        }
      }
      * {
        box-sizing: border-box;
      }
      a {
        overflow-wrap: break-word;
      }
      .band {
        background-color: lightgray;
      }
      .band,
      .rowTablesCircled,
      .section-subhead {
        margin-top: 1rem;
      }
      body {
        background: #eee;
        margin: 3rem 3rem;
      }
      .boxedBulletList {
        padding-bottom: 0.5rem;
        border-style: solid;
        border-width: 1px;
      }
      .boxedBulletList + .boxedBulletList {
        margin-top: -1px;
      }
      .boxedBulletList > h1 {
        margin-top: 0.1rem;
      }
      .caps {
        text-transform: uppercase;
      }
      caption {
        margin-bottom: 0.5rem;
        font-weight: bold;
      }
      .center,
      .compact {
        text-align: center;
      }
      .compact {
        padding: 0 3rem 2rem 3rem;
        border-style: solid;
        border-width: 0.5rem;
        border-radius: 50%;
        border-color: #33444433;
      }
      .cornerPic {
        text-align: center;
      }
      .cornerPic > img {
        width: 8rem;
      }
      h1 {
        margin: 0.5rem 0 0 0.5rem;
        color: #344;
      }
      .left {
        text-align: left;
      }
      li,
      td {
        font-size: 1.2rem;
      }
      p {
        margin: 0.3rem 0 0.8rem 0.5rem;
      }
      p.size1,
      p.size2 {
        font-weight: bold;
      }
      .rowTable ~ .rowTable {
        margin-top: 0.1rem;
      }
      .rowTablesCircled {
        display: flex;
        justify-content: center;
      }
      .rowTablesCircled td {
        padding-right: 0.3rem;
      }
      section:not(.boxedBulletList) + .boxedBulletList,
      .section-head {
        margin-top: 2rem;
      }
      .size1 {
        font-size: 2.2rem;
      }
      .size2 {
        font-size: 2rem;
        font-style: italic;
      }
      .size3 {
        font-size: 1.8rem;
      }
      .size4 {
        font-size: 1.6rem;
        font-style: italic;
      }
      .size5 {
        font-size: 1.4rem;
      }
      .size6 {
        font-size: 1.2rem;
        font-style: italic;
      }
      .size7,
      p {
        font-size: 1rem;
      }
      strong,
      .strong {
        font-weight: bold;
      }
      table {
        margin: 0.5rem auto 0 auto;
        border-collapse: collapse;
      }
      .tableLH th {
        text-align: right;
        padding-right: 0.5rem;
      }
      td {
        padding: 0.2rem;
        border-style: solid;
        border-width: 1px;
        border-color: slategray;
        text-align: left;
      }
      .theme-credit {
        margin-top: 1rem;
        text-align: center;
        font-size: 1rem;
        font-style: italic;
      }
      .tight {
        margin-top: 0;
        margin-bottom: 0;
      }
      ul {
        margin: 0.25rem 0;
      }
      .under {
        margin-top: 0;
      }
    </style>
  </head>
  <body>
    <main>
      <section title="Jonathan Pool: Curriculum Vitae" class="section-head center">
        <p class="size1 center">Jonathan Pool</p>
        <p class="size2 center under">Curriculum Vitae</p>
      </section>
      <section title="Work History" class="section-head">
        <h1 class="size3 band center">Work History</h1>
        <section title="Independent Research">
          <h1 class="size5"><a href="https://jpdev.pro">Independent Research</a></h1>
          <h1 class="size6">2018-02-17 \u2013 : Web Accessibility Researcher</h1>
          <p class="size7">Participated in IAAP webinar \u201CBringing CSS and SVG Back into the Accessibility Spotlight\u201D. Participated in CSUN workshop \u201CAdvanced PDF Accessibility\u201D. Attended CSUN Assistive Technology Conference. Participated in Deque Systems 3rd Annual aXe-Hackathon. Added features to Accessible R\xE9sum\xE9 application with JavaScript, HTML, and CSS.</p>
        </section>
        <section title="The Long Now Foundation">
          <h1 class="size5"><a href="https://panlex.org">The Long Now Foundation</a></h1>
          <h1 class="size6">2012-01-01 \u2013 2016-12-19: Project Director, PanLex Project</h1>
          <p class="size7">Ported database from MS SQL Server to PostgreSQL. Grew data to 24 million words and 1.3 billion word-pair translations. Designed and implemented Perl-based developer, end-user, and search-engine interfaces to database. Documented project standards, practices, and tools. Presented paper at IUC 2012. Published technical articles. Recruited steering committee. Hired 5 developers and linguists and negotiated transfer of project control to them.</p>
        </section>
        <section title="Utilika Foundation">
          <h1 class="size5"><a href="http://stulta.com/misc/uf/">Utilika Foundation</a></h1>
          <h1 class="size6">2004-05-03 \u2013 2011-12-31: President</h1>
          <p class="size7">Founded foundation. Obtained IRS recognition. Recruited board of directors. Directed search for research partner. Negotiated partnership with Turing Center at University of Washington. Managed partnership. Participated in research, development, and publication, using Perl, CSS, HTML, and PostgreSQL. Presented papers at CLAW/AMTA 2006, K-CAP 2007, SAAKM 2007, LISA Berkeley 2009, Machine Translation Summit XII, Coling 2010, and DELPH-IN Summit 2011.</p>
        </section>
        <section title="Centerplex">
          <h1 class="size5"><a href="http://stulta.com/misc/cx/">Centerplex</a></h1>
          <h1 class="size6">1993-06-16 \u2013 2004-06-11: Proprietor</h1>
          <p class="size7">Pioneered web-based leasing and room reservations using Perl, CSS, HTML, PostgreSQL, and VBA. Designed and managed inter-building LAN using Cisco IOS. Designed and managed free Internet access. Managed energy-conservation and recycling. Earned 1999 EPA Energy Star for Small Business Award.</p>
        </section>
        <section title="SUNY/Stony Brook and University of Washington">
          <h1 class="size5"><a href="http://www.washington.edu">SUNY/Stony Brook and University of Washington</a></h1>
          <h1 class="size6">1971-01-01 \u2013 1993-06-15: Assistant and Associate Professor</h1>
          <p class="size7">Performed mathematical, statistical, and game-theoretic research and graduate and undergraduate teaching. Designed instructional software with APL. Presented papers at conferences of American Political Science Association and other organizations. Published book chapters, research articles, and working papers.</p>
        </section>
        <section title="Peace Corps">
          <h1 class="size5"><a href="https://www.peacecorps.gov">Peace Corps</a></h1>
          <h1 class="size6">1964-06-15 \u2013 1966-06-15: Teacher of English as a foreign language</h1>
          <p class="size7">Taught English in Turkey. Published articles in Turkish periodicals and \u201CPeace Corps Volunteer\u201D. Wrote and published textbook in Turkish. Helped fund summer camp for disadvantaged youth.</p>
        </section>
      </section>
      <section title="Conference presentations" class="section-head">
        <h1 class="size3 band center">Conference presentations</h1>
        <section title="SF Globalization">
          <h1 class="size5">SF Globalization, 2015</h1>
          <p class="size7">\u201CExtreme Localization: Translating Every Word in Every Language\u201D</p>
        </section>
        <section title="36th Internationalization & Unicode Conference">
          <h1 class="size5">36th Internationalization & Unicode Conference, 2012</h1>
          <p class="size7">\u201CDesigning a Panlingual Dictionary\u201D</p>
        </section>
        <section title="DELPH-IN Summit">
          <h1 class="size5">DELPH-IN Summit, 2011</h1>
          <p class="size7">\u201CPanLex: A Panlingual Lexical Resource\u201D</p>
        </section>
        <section title="Localization Industry Standards Association Berkeley Globalization Conference">
          <h1 class="size5">Localization Industry Standards Association Berkeley Globalization Conference, 2009</h1>
          <p class="size7">\u201CPanlingual Localization\u201D</p>
        </section>
        <section title="Semantic Authoring, Annotation and Knowledge Markup Workshop">
          <h1 class="size5">Semantic Authoring, Annotation and Knowledge Markup Workshop, 2007</h1>
          <p class="size7">\u201CSyntactic Disambiguation for the Semantic Web\u201D</p>
        </section>
        <section title="Fourth International Conference on Knowledge Capture">
          <h1 class="size5">Fourth International Conference on Knowledge Capture, 2007</h1>
          <p class="size7">\u201CDisambiguating for the Web: A Test of Two Methods\u201D</p>
        </section>
        <section title="5th International Workshop on Controlled Language Applications">
          <h1 class="size5">5th International Workshop on Controlled Language Applications, 2006</h1>
          <p class="size7">\u201CCan Controlled Languages Scale to the Web?\u201D</p>
        </section>
        <section title="International Symposium on Linguistic Human Rights">
          <h1 class="size5">International Symposium on Linguistic Human Rights, 1991</h1>
          <p class="size7">\u201CThe Language Auction: A Nondiscriminatory Method of Choosing Official Languages\u201D</p>
        </section>
        <section title="American Political Science Association">
          <h1 class="size5">American Political Science Association, 1986</h1>
          <p class="size7">\u201CThe Pure Theory of Language Conflict\u201D</p>
        </section>
      </section>
      <section title="Education" class="section-head">
        <h1 class="size3 band center">Education</h1>
        <section title="Learners Guild">
          <h1 class="size5"><a href="https://learnersguild.org">Learners Guild</a>, 2017-05-01 \u2013 2018-02-16</h1>
          <h1 class="size6">postsecondary; full-stack web development, web accessibility</h1>
          <p class="size7">Developed, tested, and documented server-client applications, responsive SPAs, and APIs with JavaScript, Express, JQuery, AJAX, Bootstrap, bcrypt, PostgreSQL, MongoDB, Rethinkdb, commander, and other tools. Implemented web applications with databases, file storage, authentication, authorization, and WCAG 2.0 compliance. Tested websites\u2019 accessibility with Siteimprove Accessibility Checker, aXe Accessibility, WAVE, OpenWAX, Tenon, Chrome Developer Tools, and VoiceOver. Wrote reports on test results and transmitted to website owners. Became the 25th most active contributor to ESLint project (out of 550 contributors). Contributed more than 200 improvements to MDN Web Docs. Achieved 4th highest over-all-quality ranking among more than 200 themes in JSON R\xE9sum\xE9 project.</p>
        </section>
        <section title="University of Washington">
          <h1 class="size5"><a href="https://www.washington.edu">University of Washington</a>, 2004-03-29 \u2013 2007-06-01</h1>
          <h1 class="size6">undergraduate and graduate; computer science, human-computer interaction, linguistics, computational linguistics, human rights law and philosophy; GPA = 3.97/4; <a href="https://jpdev.pro/info/docs/pool-uw-transcript.pdf">transcript</a></h1>
          <p class="size7">Studied programming, data structures, algorithms, Java, user interfaces, AI, syntax, semantics, grammar engineering, human-rights law and philosophy, and public policy.</p>
        </section>
        <section title="The University of Chicago">
          <h1 class="size5"><a href="https://www.uchicago.edu">The University of Chicago</a>, 1966-09-01 \u2013 1971-04-30</h1>
          <h1 class="size6">graduate; Ph.D.; political science; <a href="https://jpdev.pro/info/docs/pool-uc-transcript.pdf">transcript</a></h1>
          <p class="size7">Studied all fields of political science. Did statistical analyses of opinion surveys for M.A. thesis and Ph.D. dissertation with SPSS.</p>
        </section>
        <section title="Harvard University">
          <h1 class="size5"><a href="https://www.harvard.edu">Harvard University</a>, 1960-09-01 \u2013 1964-06-30</h1>
          <h1 class="size6">undergraduate; B.A. cum laude; government; <a href="https://jpdev.pro/info/docs/pool-hu-transcript.pdf">transcript</a></h1>
          <p class="size7">Studied political science, social sciences, humanities, calculus, physics. Did dimensional analysis of voting behavior of U.S. Supreme Court justices for B.A. honors thesis.</p>
        </section>
      </section>
      <section title="Computing technology grants" class="section-head">
        <h1 class="size3 band center">Computing technology grants</h1>
        <section title="University of Maryland">
          <h1 class="size5">University of Maryland, 1983</h1>
          \u201CComputer Simulation in Multilingual International Studies\u201D
        </section>
        <section title="National Science Foundation">
          <h1 class="size5">National Science Foundation, 1978</h1>
          \u201CComputer Equipment for Experimental Political Science Research\u201D
        </section>
      </section>
      <section title="Selected publications" class="section-head">
        <h1 class="size3 band center">Selected publications</h1>
        <section title="Countering language attrition with PanLex and the Web of Data">
          <p class="size7">Patrick Westphal, Claus Stadler, Jonathan Pool<br><a href="http://www.semantic-web-journal.net/system/files/swj509.pdf">Countering language attrition with PanLex and the Web of Data</a><br>Semantic Web Journal: 2015</p>
        </section>
        <section title="PanLex: Building a Resource for Panlingual Lexical Translation">
          <p class="size7">David Kamholz, Jonathan Pool, Susan M. Colowick<br><a href="https://pdfs.semanticscholar.org/4bf5/387ec770f557525484b7c99be3a0c568651a.pdf">PanLex: Building a Resource for Panlingual Lexical Translation</a><br>LREC: 2014</p>
        </section>
        <section title="PanLex and LEXTRACT: Translating all Words of all Languages of the World">
          <p class="size7">Timothy Baldwin, Jonathan Pool, Susan M. Colowick<br><a href="http://turing.cs.washington.edu/papers/BaldwinEtAl-Lextract.pdf">PanLex and LEXTRACT: Translating all Words of all Languages of the World</a><br>Coling: 2010</p>
        </section>
        <section title="Evaluating Lemmatic Communication">
          <p class="size7">Katherine Everitt, Christopher Lim, Oren Etzioni, Jonathan Pool, Susan Colowick, Stephen Soderland<br><a href="http://www.trans-kom.eu/bd03nr01/trans-kom_03_01_03_Everitt_et_al_Lemmatic_Communication.20100531.pdf">Evaluating Lemmatic Communication</a><br>trans-kom: 2010</p>
        </section>
        <section title="Syntactic Disambiguation for the Semantic Web">
          <p class="size7">Jonathan Pool, S. M. Colowick<br><a href="http://ftp.informatik.rwth-aachen.de/Publications/CEUR-WS/Vol-289/po02.pdf">Syntactic Disambiguation for the Semantic Web</a><br>SAAKM: 2007</p>
        </section>
      </section>
    </main>
    <section title="credit" class="theme-credit">
      Powered by <a href="https://www.npmjs.com/package/jsonresume-theme-a11y">jsonresume-theme-a11y</a>
    </section>
  </body>
</html>`,"docs/samples/pool-medium-ex/pool-mediumrecent-ex-a11y.json":`{
  "lang": {
    "format": "hide",
    "data": "en"
  },
  "order": {
    "format": "hide",
    "data": [
      "basic",
      "work",
      "conferences",
      "education",
      "grants",
      "publications"
    ]
  },
  "title": {
    "format": "hide",
    "data": "Jonathan Pool: Curriculum Vitae"
  },
  "legend": {
    "format": "hide",
    "data": {
      "area": "Concentrations",
      "basic": "Jonathan Pool: Curriculum Vitae",
      "company": "Company",
      "conferences": "Conference presentations",
      "courses": "Courses",
      "creditTo": "Powered by ",
      "education": "Education",
      "email": "Email",
      "endDate": "End date",
      "gpa": "GPA =",
      "grants": "Computing technology grants",
      "highlights": "Accomplishments",
      "label": "Label",
      "position": "Position",
      "publications": "Selected publications",
      "publisher": "Publisher",
      "releaseDate": "Release date",
      "startDate": "Start date",
      "studyType": "Study type",
      "title": "Title",
      "transcript": "transcript",
      "volunteer": "Volunteering",
      "work": "Work History"
    }
  },
  "basicData": {
    "format": "hide",
    "data": [
      {
        "head": "Jonathan Pool",
        "subhead": "Curriculum Vitae"
      }
    ]
  },
  "workData": {
    "format": "hide",
    "data": [
      {
        "organization": "Independent Research",
        "role": "Web Accessibility Researcher",
        "website": "https://jpdev.pro",
        "startDate": "2018-02-17",
        "endDate": "",
        "synopsis": "Participated in IAAP webinar \u201CBringing CSS and SVG Back into the Accessibility Spotlight\u201D. Participated in CSUN workshop \u201CAdvanced PDF Accessibility\u201D. Attended CSUN Assistive Technology Conference. Participated in Deque Systems 3rd Annual aXe-Hackathon. Added features to Accessible R\xE9sum\xE9 application with JavaScript, HTML, and CSS."
      },
      {
        "organization": "The Long Now Foundation",
        "role": "Project Director, PanLex Project",
        "website": "https://panlex.org",
        "startDate": "2012-01-01",
        "endDate": "2016-12-19",
        "synopsis": "Ported database from MS SQL Server to PostgreSQL. Grew data to 24 million words and 1.3 billion word-pair translations. Designed and implemented Perl-based developer, end-user, and search-engine interfaces to database. Documented project standards, practices, and tools. Presented paper at IUC 2012. Published technical articles. Recruited steering committee. Hired 5 developers and linguists and negotiated transfer of project control to them."
      },
      {
        "organization": "Utilika Foundation",
        "role": "President",
        "website": "http://stulta.com/misc/uf/",
        "startDate": "2004-05-03",
        "endDate": "2011-12-31",
        "synopsis": "Founded foundation. Obtained IRS recognition. Recruited board of directors. Directed search for research partner. Negotiated partnership with Turing Center at University of Washington. Managed partnership. Participated in research, development, and publication, using Perl, CSS, HTML, and PostgreSQL. Presented papers at CLAW/AMTA 2006, K-CAP 2007, SAAKM 2007, LISA Berkeley 2009, Machine Translation Summit XII, Coling 2010, and DELPH-IN Summit 2011."
      },
      {
        "organization": "Centerplex",
        "role": "Proprietor",
        "website": "http://stulta.com/misc/cx/",
        "startDate": "1993-06-16",
        "endDate": "2004-06-11",
        "synopsis": "Pioneered web-based leasing and room reservations using Perl, CSS, HTML, PostgreSQL, and VBA. Designed and managed inter-building LAN using Cisco IOS. Designed and managed free Internet access. Managed energy-conservation and recycling. Earned 1999 EPA Energy Star for Small Business Award."
      },
      {
        "organization": "SUNY/Stony Brook and University of Washington",
        "role": "Assistant and Associate Professor",
        "website": "http://www.washington.edu",
        "startDate": "1971-01-01",
        "endDate": "1993-06-15",
        "synopsis": "Performed mathematical, statistical, and game-theoretic research and graduate and undergraduate teaching. Designed instructional software with APL. Presented papers at conferences of American Political Science Association and other organizations. Published book chapters, research articles, and working papers."
      },
      {
        "organization": "Peace Corps",
        "role": "Teacher of English as a foreign language",
        "website": "https://www.peacecorps.gov",
        "startDate": "1964-06-15",
        "endDate": "1966-06-15",
        "synopsis": "Taught English in Turkey. Published articles in Turkish periodicals and \u201CPeace Corps Volunteer\u201D. Wrote and published textbook in Turkish. Helped fund summer camp for disadvantaged youth."
      }
    ]
  },
  "conferenceData": {
    "format": "hide",
    "data": [
      {
        "name": "SF Globalization",
        "date": "2015",
        "title": "Extreme Localization: Translating Every Word in Every Language"
      },
      {
        "name": "36th Internationalization & Unicode Conference",
        "date": "2012",
        "title": "Designing a Panlingual Dictionary"
      },
      {
        "name": "DELPH-IN Summit",
        "date": "2011",
        "title": "PanLex: A Panlingual Lexical Resource"
      },
      {
        "name": "Localization Industry Standards Association Berkeley Globalization Conference",
        "date": "2009",
        "title": "Panlingual Localization"
      },
      {
        "name": "Semantic Authoring, Annotation and Knowledge Markup Workshop",
        "date": "2007",
        "title": "Syntactic Disambiguation for the Semantic Web"
      },
      {
        "name": "Fourth International Conference on Knowledge Capture",
        "date": "2007",
        "title": "Disambiguating for the Web: A Test of Two Methods"
      },
      {
        "name": "5th International Workshop on Controlled Language Applications",
        "date": "2006",
        "title": "Can Controlled Languages Scale to the Web?"
      },
      {
        "name": "International Symposium on Linguistic Human Rights",
        "date": "1991",
        "title": "The Language Auction: A Nondiscriminatory Method of Choosing Official Languages"
      },
      {
        "name": "American Political Science Association",
        "date": "1986",
        "title": "The Pure Theory of Language Conflict"
      }
    ]
  },
  "educationData": {
    "format": "hide",
    "data": [
      {
        "organization": "Learners Guild",
        "level": "postsecondary",
        "diploma": "",
        "specialties": [
          "full-stack web development",
          "web accessibility"
        ],
        "website": "https://learnersguild.org",
        "startDate": "2017-05-01",
        "endDate": "2018-02-16",
        "synopsis": "Developed, tested, and documented server-client applications, responsive SPAs, and APIs with JavaScript, Express, JQuery, AJAX, Bootstrap, bcrypt, PostgreSQL, MongoDB, Rethinkdb, commander, and other tools. Implemented web applications with databases, file storage, authentication, authorization, and WCAG 2.0 compliance. Tested websites\u2019 accessibility with Siteimprove Accessibility Checker, aXe Accessibility, WAVE, OpenWAX, Tenon, Chrome Developer Tools, and VoiceOver. Wrote reports on test results and transmitted to website owners. Became the 25th most active contributor to ESLint project (out of 550 contributors). Contributed more than 200 improvements to MDN Web Docs. Achieved 4th highest over-all-quality ranking among more than 200 themes in JSON R\xE9sum\xE9 project.",
        "gpa": "",
        "transcript": ""
      },
      {
        "organization": "University of Washington",
        "level": "undergraduate and graduate",
        "diploma": "",
        "specialties": [
          "computer science",
          "human-computer interaction",
          "linguistics",
          "computational linguistics",
          "human rights law and philosophy"
        ],
        "website": "https://www.washington.edu",
        "startDate": "2004-03-29",
        "endDate": "2007-06-01",
        "synopsis": "Studied programming, data structures, algorithms, Java, user interfaces, AI, syntax, semantics, grammar engineering, human-rights law and philosophy, and public policy.",
        "gpa": "3.97/4",
        "transcript": "https://jpdev.pro/info/docs/pool-uw-transcript.pdf"
      },
      {
        "organization": "The University of Chicago",
        "level": "graduate",
        "diploma": "Ph.D.",
        "specialties": [
          "political science"
        ],
        "website": "https://www.uchicago.edu",
        "startDate": "1966-09-01",
        "endDate": "1971-04-30",
        "synopsis": "Studied all fields of political science. Did statistical analyses of opinion surveys for M.A. thesis and Ph.D. dissertation with SPSS.",
        "gpa": "",
        "transcript": "https://jpdev.pro/info/docs/pool-uc-transcript.pdf"
      },
      {
        "organization": "Harvard University",
        "level": "undergraduate",
        "diploma": "B.A. cum laude",
        "specialties": [
          "government"
        ],
        "website": "https://www.harvard.edu",
        "startDate": "1960-09-01",
        "endDate": "1964-06-30",
        "synopsis": "Studied political science, social sciences, humanities, calculus, physics. Did dimensional analysis of voting behavior of U.S. Supreme Court justices for B.A. honors thesis.",
        "gpa": "",
        "transcript": "https://jpdev.pro/info/docs/pool-hu-transcript.pdf"
      }
    ]
  },
  "grantData": {
    "format": "hide",
    "data": [
      {
        "grantor": "University of Maryland",
        "date": "1983",
        "title": "Computer Simulation in Multilingual International Studies"
      },
      {
        "grantor": "National Science Foundation",
        "date": "1978",
        "title": "Computer Equipment for Experimental Political Science Research"
      }
    ]
  },
  "publicationData": {
    "format": "hide",
    "data": [
      {
        "authors": ["Patrick Westphal", "Claus Stadler", "Jonathan Pool"],
        "title": "Countering language attrition with PanLex and the Web of Data",
        "publisher": "Semantic Web Journal",
        "date": "2015",
        "url": "http://www.semantic-web-journal.net/system/files/swj509.pdf"
      },
      {
        "authors": ["David Kamholz", "Jonathan Pool", "Susan M. Colowick"],
        "title": "PanLex: Building a Resource for Panlingual Lexical Translation",
        "publisher": "LREC",
        "date": "2014",
        "url": "https://pdfs.semanticscholar.org/4bf5/387ec770f557525484b7c99be3a0c568651a.pdf"
      },
      {
        "authors": ["Timothy Baldwin", "Jonathan Pool", "Susan M. Colowick"],
        "title": "PanLex and LEXTRACT: Translating all Words of all Languages of the World",
        "publisher": "Coling",
        "date": "2010",
        "url": "http://turing.cs.washington.edu/papers/BaldwinEtAl-Lextract.pdf"
      },
      {
        "authors": [
          "Katherine Everitt",
          "Christopher Lim",
          "Oren Etzioni",
          "Jonathan Pool",
          "Susan Colowick",
          "Stephen Soderland"
        ],
        "title": "Evaluating Lemmatic Communication",
        "publisher": "trans-kom",
        "date": "2010",
        "url": "http://www.trans-kom.eu/bd03nr01/trans-kom_03_01_03_Everitt_et_al_Lemmatic_Communication.20100531.pdf"
      },
      {
        "authors": ["Jonathan Pool", "S. M. Colowick"],
        "title": "Syntactic Disambiguation for the Semantic Web",
        "publisher": "SAAKM",
        "date": "2007",
        "url": "http://ftp.informatik.rwth-aachen.de/Publications/CEUR-WS/Vol-289/po02.pdf"
      }
    ]
  },
  "basic": {
    "format": "extraction",
    "title": "basic",
    "data": {
      "from": "basicData",
      "into": "basicMainHeads"
    }
  },
  "work": {
    "format": "extraction",
    "title": "work",
    "data": {
      "from": "workData",
      "into": "headedWorkVolParagraphs"
    }
  },
  "conferences": {
    "format": "extraction",
    "title": "conferences",
    "data": {
      "from": "conferenceData",
      "into": "headedConferenceParagraphs"
    }
  },
  "education": {
    "format": "extraction",
    "title": "education",
    "data": {
      "from": "educationData",
      "into": "headedEducationParagraphs"
    }
  },
  "grants": {
    "format": "extraction",
    "title": "grants",
    "data": {
      "from": "grantData",
      "into": "headedGrantParagraphs"
    }
  },
  "publications": {
    "format": "extraction",
    "title": "publications",
    "data": {
      "from": "publicationData",
      "into": "headedPublicationParagraphs"
    }
  }
}
`,"docs/samples/pool-short/pool-short-a-a11y.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>R\xE9sum\xE9: Jonathan Pool</title>
    <style>
      @media (max-width: 650px) {
        html {
          font-size: 10px;
        }
      }
      @media (min-width: 651px), print {
        .cornerPic > img {
          position: absolute;
          top: 3rem;
          right: 3rem;
        }
      }
      @media (min-width: 651px) {
        html {
          font-size: 1.6vw;
        }
      }
      @media print {
        html {
          font-size: 10px;
        }
      }
      * {
        box-sizing: border-box;
      }
      a {
        overflow-wrap: break-word;
      }
      .band {
        background-color: lightgray;
      }
      .band,
      .rowTablesCircled {
        margin-top: 1.5rem;
      }
      body {
        background: #eee;
        margin: 3rem 3rem;
      }
      .boxedBulletList {
        padding-bottom: 0.5rem;
        border-style: solid;
        border-width: 1px;
      }
      .boxedBulletList + .boxedBulletList {
        margin-top: -1px;
      }
      .boxedBulletList > h1 {
        margin-top: 0.1rem;
      }
      .caps {
        text-transform: uppercase;
      }
      caption {
        margin-bottom: 0.5rem;
        font-weight: bold;
      }
      .center,
      .compact {
        text-align: center;
      }
      .compact {
        padding: 0 3rem 2rem 3rem;
        border-style: solid;
        border-width: 0.5rem;
        border-radius: 50%;
        border-color: #33444433;
      }
      .cornerPic {
        text-align: center;
      }
      .cornerPic > img {
        width: 8rem;
      }
      h1 {
        margin: 0.5rem 0 0 0.5rem;
        color: #344;
      }
      .left {
        text-align: left;
      }
      li,
      td {
        font-size: 1.2rem;
      }
      p {
        margin: 0.3rem 0 0.8rem 0.5rem;
      }
      p.size1,
      p.size2 {
        font-weight: bold;
      }
      .rowTable ~ .rowTable {
        margin-top: 0.1rem;
      }
      .rowTablesCircled {
        display: flex;
        justify-content: center;
      }
      .rowTablesCircled td {
        padding-right: 0.3rem;
      }
      section:not(.boxedBulletList) + .boxedBulletList {
        margin-top: 2rem;
      }
      .section-head {
        margin-top: 2rem;
      }
      .size1 {
        font-size: 2.2rem;
      }
      .size2 {
        font-size: 2rem;
        font-style: italic;
      }
      .size3 {
        font-size: 1.8rem;
      }
      .size4 {
        font-size: 1.6rem;
        font-style: italic;
      }
      .size5 {
        font-size: 1.4rem;
      }
      .size6 {
        font-size: 1.2rem;
        font-style: italic;
      }
      .size7,
      p {
        font-size: 1rem;
      }
      strong,
      .strong {
        font-weight: bold;
      }
      table {
        margin: 0.5rem auto 0 auto;
        border-collapse: collapse;
      }
      .tableLH th {
        text-align: right;
        padding-right: 0.5rem;
      }
      td {
        padding: 0.2rem;
        border-style: solid;
        border-width: 1px;
        border-color: slategray;
        text-align: left;
      }
      .theme-credit {
        margin-top: 1rem;
        text-align: center;
        font-size: 1rem;
        font-style: italic;
      }
      .tight {
        margin-top: 0;
        margin-bottom: 0;
      }
      ul {
        margin: 0.25rem 0;
      }
      .under {
        margin-top: 0;
      }
    </style>
  </head>
  <body>
    <main>
      <section title="Photograph" class="cornerPic">
        <img src="http://stulta.com/images/pool-2009.jpg" alt="Photograph of Jonathan Pool">
      </section>
      <section title="Name and occupation" class="center">
        <p class="size1">Jonathan Pool</p>
        <p class="size2">Developer of accessible web applications</p>
      </section>
      <section title="Professional repertoire" class="rowTablesCircled">
        <div></div>
        <div class="compact">
          <h1 class="size4">I do</h1>
          <table class="rowTable">
            <tbody>
              <tr>
                <td>planning</td>
                <td>design</td>
                <td>coding</td>
                <td>linting</td>
                <td>testing</td>
              </tr>
            </tbody>
          </table>
          <table class="rowTable">
            <tbody>
              <tr>
                <td>documentation</td>
                <td>blogging</td>
                <td>training</td>
                <td>maintenance</td>
                <td>upgrades</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div></div>
      </section>
      <section title="Contact information" class="section-head center">
        <table class="tableLH">
          <caption class="size4">
            Find me at
          </caption>
          <tbody>
            <tr>
              <th>Email</th>
              <td><a href="mailto:pool@stulta.com">pool@stulta.com</a></td>
            </tr>
            <tr>
              <th>Telephone</th>
              <td>(510) 225-1700</td>
            </tr>
            <tr>
              <th>Blog</th>
              <td><a href="http://stulta.com/forumo">http://stulta.com/forumo</a></td>
            </tr>
            <tr>
              <th>R\xE9sum\xE9</th>
              <td><a href="https://jpdev.pro">https://jpdev.pro</a></td>
            </tr>
            <tr>
              <th>Mailing address</th>
              <td>901 24th Ave S<br>Seattle, Washington 98144-3032, US</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section title="Profiles" class="section-head center">
        <table class="tableTH">
          <caption class="size4">
            Look me up at
          </caption>
          <thead>
            <tr>
              <th>Host</th>
              <th>User ID</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Github</td>
              <td>jrpool</td>
              <td><a href="https://github.com/jrpool">https://github.com/jrpool</a></td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td>jonathanpool</td>
              <td><a href="https://www.linkedin.com/in/jonathanpool/">https://www.linkedin.com/in/jonathanpool/</a></td>
            </tr>
            <tr>
              <td>MDN Web Docs</td>
              <td>JonathanPool</td>
              <td><a href="https://developer.mozilla.org/en-US/profiles/JonathanPool">https://developer.mozilla.org/en-US/profiles/JonathanPool</a></td>
            </tr>
            <tr>
              <td>Google Scholar</td>
              <td>Jonathan Pool</td>
              <td><a href="https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en&oi=ao">https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en&oi=ao</a></td>
            </tr>
            <tr>
              <td>Semantic Scholar</td>
              <td>Jonathan Pool</td>
              <td><a href="https://www.semanticscholar.org/author/31879705">https://www.semanticscholar.org/author/31879705</a></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section title="Projects" class="section-head center">
        <table class="tableTH">
          <caption class="size4">
            I\u2019ve been working on
          </caption>
          <thead>
            <tr>
              <th>Project name</th>
              <th>Github</th>
              <th>Demo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>jsonresume-theme-a11y</code></td>
              <td><a href="https://github.com/jrpool/jsonresume-theme-a11y">jrpool/jsonresume-theme-a11y</a></td>
              <td><a href="https://www.npmjs.com/package/jsonresume-theme-a11y">npm: jsonresume-theme-a11y</a></td>
            </tr>
            <tr>
              <td>Accessible Calculator</td>
              <td><a href="https://github.com/jrpool/calculator">jrpool/calculator</a></td>
              <td><a href="https://jrpool.github.io/calculator/">https://jrpool.github.io/calculator/</a></td>
            </tr>
            <tr>
              <td>DocSearch</td>
              <td><a href="https://github.com/jrpool/docsearch">jrpool/docsearch</a></td>
              <td><a href="https://jpdev.pro/ds/">https://jpdev.pro/ds/</a></td>
            </tr>
            <tr>
              <td>Geezer.pro</td>
              <td><a href="https://github.com/jrpool/geezer.pro">jrpool/geezer.pro</a></td>
              <td><a href="https://geezer.pro">https://geezer.pro</a></td>
            </tr>
            <tr>
              <td>SPA for Seniors</td>
              <td><a href="https://github.com/jrpool/singlepropertysite">jrpool/singlepropertysite</a></td>
              <td><a href="https://berkhouse.info">https://berkhouse.info</a></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section title="Open-source development" class="boxedBulletList">
        <h1 class="size2 section-head band center">I have contributed to</h1>
        <ul>
          <li><strong>ESLint (#25)</strong>: <a href="https://github.com/eslint/eslint/graphs/contributors">https://github.com/eslint/eslint/graphs/contributors</a></li>
          <li><strong>MDN Web Docs</strong>: <a href="https://developer.mozilla.org/en-US/dashboards/revisions?user=JonathanPool">https://developer.mozilla.org/en-US/dashboards/revisions?user=JonathanPool</a></li>
          <li><strong>LearnersGuild/curriculum-app (#3)</strong>: <a href="https://github.com/LearnersGuild/curriculum-app/graphs/contributors">https://github.com/LearnersGuild/curriculum-app/graphs/contributors</a></li>
          <li><strong>PanLem</strong>: <a href="https://jpdev.pro/info/docs/panlem-pool.png">https://jpdev.pro/info/docs/panlem-pool.png</a></li>
          <li><strong>PanLex developer documentation</strong>: <a href="https://dev.panlex.org">https://dev.panlex.org</a></li>
        </ul>
      </section>
      <section title="Skills" class="boxedBulletList">
        <h1 class="size2 section-head band center">I have worked with</h1>
        <ul>
          <li><strong>Languages</strong>: JavaScript, Perl, Java, bash, 68000 Assembly, VBA, APL</li>
          <li><strong>Scopes</strong>: full-stack, back-end, front-end, APIs, SPAs</li>
          <li><strong>Back-end</strong>: Node.js, NPM, Express, pg, pg-promise, bcrypt, solr, DBI</li>
          <li><strong>Databases</strong>: PostgreSQL, PL/pgSQL, SQL Server, FileMaker Pro, MongoDB, migrations</li>
          <li><strong>Front-end</strong>: HTML, CSS, JQuery, Cheerio, Bootstrap, EJS, Pug, Materialize</li>
          <li><strong>Content and version management</strong>: git, svn, Github, Gitlab, Bitbucket, SourceForge, WordPress</li>
          <li><strong>Quality control</strong>: ESLint, mocha, chai, Selenium Webdriver, Chrome Developer Tools</li>
          <li><strong>Accessibility testing</strong>: Chrome Developer Tools, WAVE, aXe, Siteimprove</li>
          <li><strong>Accessible development</strong>: WCAG 2.1, ARIA, VoiceOver, Acrobat Pro DC, ADA Title III</li>
          <li><strong>Internationalization</strong>: Unicode, CLDR, ISO 639, PanLex API</li>
          <li><strong>Web servers</strong>: Apache httpd, nginx</li>
          <li><strong>Mail servers</strong>: Postfix, sendmail, SendGrid Web API</li>
          <li><strong>Remote hosts</strong>: Amazon AWS (EC2, S3, Glacier), Heroku, OVH</li>
          <li><strong>OS\u2019s</strong>: Ubuntu, RHEL, OS X, Cisco IOS</li>
          <li><strong>Configuration management</strong>: Puppet</li>
          <li><strong>Files</strong>: FineReader, Acrobat, iconv, Atom, nano, ed, sed, GraphicConverter</li>
          <li><strong>CAD</strong>: VectorWorks</li>
          <li><strong>Statistics</strong>: SPSS</li>
          <li><strong>Office apps</strong>: Apache OpenOffice, Apple iWork, Microsoft Office</li>
          <li><strong>Collaboration</strong>: Slack, Asana, Wrike, Trello, Egnyte</li>
          <li><strong>E-commerce</strong>: web contracting, web reservations, crowdsourcing (Amazon Mechanical Turk), Google AdWords, IP licensing, authentication, authorization, sales form management (design, validation, tabulation)</li>
        </ul>
      </section>
      <section title="Human languages" class="boxedBulletList">
        <h1 class="size2 section-head band center">I can communicate in (best\u2192worst)</h1>
        <ul>
          <li>English</li>
          <li>Esperanto</li>
          <li>German</li>
          <li>Turkish</li>
          <li>French</li>
          <li>Norwegian Bokm\xE5l</li>
          <li>Russian</li>
          <li>Latin</li>
        </ul>
      </section>
      <section title="Education" class="boxedBulletList">
        <h1 class="size2 section-head band center">I have studied at</h1>
        <ul>
          <li><a href="https://learnersguild.org">Learners Guild</a>, 2017-05-01\u20132018-02-16: web development</li>
          <li><a href="https://jpdev.pro/info/docs/pool-uw-transcript.pdf">University of Washington Interdisciplinary Undergraduate Program</a>, 2004-03-29\u20132007-06-01: computer science, UI design, linguistics</li>
          <li><a href="https://jpdev.pro/info/docs/pool-uc-transcript.pdf">The University of Chicago</a>, 1966-09-01\u20131971-04-30: political science</li>
          <li><a href="https://www.harvard.edu">Harvard University</a>, 1960-09-01\u20131964-06-30: government</li>
        </ul>
      </section>
      <section title="Work" class="boxedBulletList">
        <h1 class="size2 section-head band center">I have worked at</h1>
        <ul>
          <li><a href="http://longnow.org">The Long Now Foundation</a>, 2012-01-01\u20132016-12-19: Project Director, PanLex</li>
          <li><a href="http://stulta.com/misc/cx/">Centerplex</a>, 1993-06-16\u20132004-06-11: contracting, project management, ADA upgrades</li>
          <li><a href="https://www.polisci.washington.edu/">University of Washington Department of Political Science</a>, 1977-09-16\u20131993-06-15: research and teaching</li>
          <li><a href="http://www.stonybrook.edu">State University of New York at Stony Brook</a>, 1971-01-01\u20131977-06-15: research and teaching</li>
          <li><a href="https://www.peacecorps.gov/">Peace Corps</a>, 1964-06-15\u20131966-06-15: teaching</li>
        </ul>
      </section>
      <section title="Awards" class="boxedBulletList">
        <h1 class="size2 section-head band center">I have received software grants from</h1>
        <ul>
          <li>University of Maryland</li>
          <li>National Science Foundation</li>
        </ul>
      </section>
      <section title="Publications" class="boxedBulletList">
        <h1 class="size2 section-head band center">I have published about</h1>
        <ul>
          <li>computational lexicography</li>
          <li>syntactic ambiguity</li>
          <li>game-theoretic models of social choice</li>
        </ul>
      </section>
    </main>
    <section title="credit" class="theme-credit">
      Powered by <a href="https://www.npmjs.com/package/jsonresume-theme-a11y">jsonresume-theme-a11y</a>
    </section>
  </body>
</html>`,"docs/samples/pool-short/pool-short-a-a11y.json":`{
  "lang": {
    "format": "hide",
    "data": "en"
  },
  "title": {
    "format": "hide",
    "data": "R\xE9sum\xE9: Jonathan Pool"
  },
  "order": {
    "format": "hide",
    "data": [
      "picture",
      "identity",
      "profDetail",
      "contacts",
      "profiles",
      "projects",
      "openSource",
      "skills",
      "languages",
      "education",
      "work",
      "awards",
      "publications"
    ]
  },
  "legend": {
    "format": "hide",
    "data": {
      "awards": "Awards",
      "blog": "Blog",
      "contacts": "Contact information",
      "creditTo": "Powered by ",
      "deployment": "Demo",
      "education": "Education",
      "email": "Email",
      "githubRepo": "Github",
      "identity": "Name and occupation",
      "languages": "Human languages",
      "location": "Mailing address",
      "mobilePhone": "Mobile telephone",
      "network": "Host",
      "openSource": "Open-source development",
      "phone": "Telephone",
      "picture": "Photograph",
      "profDetail": "Professional repertoire",
      "profiles": "Profiles",
      "project": "Project name",
      "projects": "Projects",
      "publications": "Publications",
      "r\xE9sum\xE9": "R\xE9sum\xE9",
      "skills": "Skills",
      "url": "URL",
      "username": "User ID",
      "work": "Work"
    }
  },
  "picture": {
    "format": "cornerPic",
    "title": "picture",
    "data": {
      "src": "http://stulta.com/images/pool-2009.jpg",
      "alt": "Photograph of Jonathan Pool"
    }
  },
  "identity": {
    "format": "center",
    "title": "identity",
    "data": [
      {
        "size": 1,
        "text": "Jonathan Pool"
      },
      {
        "size": 2,
        "text": "Developer of accessible web applications"
      }
    ]
  },
  "profDetail": {
    "format": "rowTablesCircled",
    "title": "profDetail",
    "data": {
      "head": {
        "size": 4,
        "data": "I do"
      },
      "tables": [
        ["planning", "design", "coding", "linting", "testing"],
        ["documentation", "blogging", "training", "maintenance", "upgrades"]
      ]
    }
  },
  "contacts": {
    "format": "tableLeftHeads",
    "title": "contacts",
    "data": {
      "table": {
        "caption": {
          "size": 4,
          "data": "Find me at"
        },
        "data": [
          {
            "label": "email",
            "data": [
              {
                "format": "mailLink",
                "data": {
                  "href": "pool@stulta.com"
                }
              }
            ]
          },
          {
            "label": "phone",
            "data": [
              "(510) 225-1700"
            ]
          },
          {
            "label": "blog",
            "data": [
              {
                "format": "hLink",
                "data": {
                  "href": "http://stulta.com/forumo"
                }
              }
            ]
          },
          {
            "label": "r\xE9sum\xE9",
            "data": [
              {
                "format": "hLink",
                "data": {
                  "href": "https://jpdev.pro"
                }
              }
            ]
          },
          {
            "label": "location",
            "data": [
              {
                "format": "address",
                "data": {
                  "point": "901 24th Ave S",
                  "postalCode": "98144-3032",
                  "city": "Seattle",
                  "countryCode": "US",
                  "region": "Washington"
                }
              }
            ]
          }
        ]
      }
    }
  },
  "profiles": {
    "format": "tableTopHead",
    "title": "profiles",
    "data": {
      "table": {
        "caption": {
          "size": 4,
          "data": "Look me up at"
        },
        "label": ["network", "username", "url"],
        "data": [
          [
            "Github",
            "jrpool",
            {
              "format": "hLink",
              "data": {
                "href": "https://github.com/jrpool"
              }
            }
          ],
          [
            "LinkedIn",
            "jonathanpool",
            {
              "format": "hLink",
              "data": {
                "href": "https://www.linkedin.com/in/jonathanpool/"
              }
            }
          ],
          [
            "MDN Web Docs",
            "JonathanPool",
            {
              "format": "hLink",
              "data": {
                "href": "https://developer.mozilla.org/en-US/profiles/JonathanPool"
              }
            }
          ],
          [
            "Google Scholar",
            "Jonathan Pool",
            {
              "format": "hLink",
              "data": {
                "href": "https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en&oi=ao"
              }
            }
          ],
          [
            "Semantic Scholar",
            "Jonathan Pool",
            {
              "format": "hLink",
              "data": {
                "href": "https://www.semanticscholar.org/author/31879705"
              }
            }
          ]
        ]
      }
    }
  },
  "projects": {
    "format": "tableTopHead",
    "title": "projects",
    "data": {
      "table": {
        "caption": {
          "size": 4,
          "data": "I\u2019ve been working on"
        },
        "label": ["project", "githubRepo", "deployment"],
        "data": [
          [
            {
              "format": "code",
              "data": "jsonresume-theme-a11y"
            },
            {
              "format": "hLink",
              "data": {
                "label": "jrpool/jsonresume-theme-a11y",
                "href": "https://github.com/jrpool/jsonresume-theme-a11y"
              }
            },
            {
              "format": "hLink",
              "data": {
                "label": "npm: jsonresume-theme-a11y",
                "href": "https://www.npmjs.com/package/jsonresume-theme-a11y"
              }
            }
          ],
          [
            "Accessible Calculator",
            {
              "format": "hLink",
              "data": {
                "label": "jrpool/calculator",
                "href": "https://github.com/jrpool/calculator"
              }
            },
            {
              "format": "hLink",
              "data": {
                "href": "https://jrpool.github.io/calculator/"
              }
            }
          ],
          [
            "DocSearch",
            {
              "format": "hLink",
              "data": {
                "label": "jrpool/docsearch",
                "href": "https://github.com/jrpool/docsearch"
              }
            },
            {
              "format": "hLink",
              "data": {
                "href": "https://jpdev.pro/ds/"
              }
            }
          ],
          [
            "Geezer.pro",
            {
              "format": "hLink",
              "data": {
                "label": "jrpool/geezer.pro",
                "href": "https://github.com/jrpool/geezer.pro"
              }
            },
            {
              "format": "hLink",
              "data": {
                "href": "https://geezer.pro"
              }
            }
          ],
          [
            "SPA for Seniors",
            {
              "format": "hLink",
              "data": {
                "label": "jrpool/singlepropertysite",
                "href": "https://github.com/jrpool/singlepropertysite"
              }
            },
            {
              "format": "hLink",
              "data": {
                "href": "https://berkhouse.info"
              }
            }
          ]
        ]
      }
    }
  },
  "openSource": {
    "format": "boxedBulletList",
    "title": "openSource",
    "data": {
      "head": {
        "size": 2,
        "data": "I have contributed to"
      },
      "list": [
        {
          "format": "headedString",
          "data": {
            "head": "ESLint (#25)",
            "tail": {
              "format": "hLink",
              "data": {
                "href": "https://github.com/eslint/eslint/graphs/contributors"
              }
            },
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "MDN Web Docs",
            "tail": {
              "format": "hLink",
              "data": {
                "href": "https://developer.mozilla.org/en-US/dashboards/revisions?user=JonathanPool"
              }
            },
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "LearnersGuild/curriculum-app (#3)",
            "tail": {
              "format": "hLink",
              "data": {
                "href": "https://github.com/LearnersGuild/curriculum-app/graphs/contributors"
              }
            },
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "PanLem",
            "tail": {
              "format": "hLink",
              "data": {
                "href": "https://jpdev.pro/info/docs/panlem-pool.png"
              }
            },
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "PanLex developer documentation",
            "tail": {
              "format": "hLink",
              "data": {
                "href": "https://dev.panlex.org"
              }
            },
            "delimiter": ": "
          }
        }
      ]
    }
  },
  "skills": {
    "format": "boxedBulletList",
    "title": "skills",
    "data": {
      "head": {
        "size": 2,
        "data": "I have worked with"
      },
      "list": [
        {
          "format": "headedString",
          "data": {
            "head": "Languages",
            "tail": "JavaScript, Perl, Java, bash, 68000 Assembly, VBA, APL",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Scopes",
            "tail": "full-stack, back-end, front-end, APIs, SPAs",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Back-end",
            "tail": "Node.js, NPM, Express, pg, pg-promise, bcrypt, solr, DBI",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Databases",
            "tail": "PostgreSQL, PL/pgSQL, SQL Server, FileMaker Pro, MongoDB, migrations",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Front-end",
            "tail": "HTML, CSS, JQuery, Cheerio, Bootstrap, EJS, Pug, Materialize",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Content and version management",
            "tail": "git, svn, Github, Gitlab, Bitbucket, SourceForge, WordPress",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Quality control",
            "tail": "ESLint, mocha, chai, Selenium Webdriver, Chrome Developer Tools",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Accessibility testing",
            "tail": "Chrome Developer Tools, WAVE, aXe, Siteimprove",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Accessible development",
            "tail": "WCAG 2.1, ARIA, VoiceOver, Acrobat Pro DC, ADA Title III",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Internationalization",
            "tail": "Unicode, CLDR, ISO 639, PanLex API",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Web servers",
            "tail": "Apache httpd, nginx",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Mail servers",
            "tail": "Postfix, sendmail, SendGrid Web API",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Remote hosts",
            "tail": "Amazon AWS (EC2, S3, Glacier), Heroku, OVH",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "OS\u2019s",
            "tail": "Ubuntu, RHEL, OS X, Cisco IOS",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Configuration management",
            "tail": "Puppet",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Files",
            "tail": "FineReader, Acrobat, iconv, Atom, nano, ed, sed, GraphicConverter",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "CAD",
            "tail": "VectorWorks",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Statistics",
            "tail": "SPSS",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Office apps",
            "tail": "Apache OpenOffice, Apple iWork, Microsoft Office",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "Collaboration",
            "tail": "Slack, Asana, Wrike, Trello, Egnyte",
            "delimiter": ": "
          }
        },
        {
          "format": "headedString",
          "data": {
            "head": "E-commerce",
            "tail": "web contracting, web reservations, crowdsourcing (Amazon Mechanical Turk), Google AdWords, IP licensing, authentication, authorization, sales form management (design, validation, tabulation)",
            "delimiter": ": "
          }
        }
      ]
    }
  },
  "languages": {
    "format": "boxedBulletList",
    "title": "languages",
    "data": {
      "head": {
        "size": 2,
        "data": "I can communicate in (best\u2192worst)"
      },
      "list": [
        "English",
        "Esperanto",
        "German",
        "Turkish",
        "French",
        "Norwegian Bokm\xE5l",
        "Russian",
        "Latin"
      ]
    }
  },
  "education": {
    "format": "boxedBulletList",
    "title": "education",
    "data": {
      "head": {
        "size": 2,
        "data": "I have studied at"
      },
      "list": [
        {
          "format": "edWork",
          "data": {
            "location": "Learners Guild",
            "url": "https://learnersguild.org",
            "startDate": "2017-05-01",
            "endDate": "2018-02-16",
            "subject": "web development"
          }
        },
        {
          "format": "edWork",
          "data": {
            "location": "University of Washington Interdisciplinary Undergraduate Program",
            "url": "https://jpdev.pro/info/docs/pool-uw-transcript.pdf",
            "startDate": "2004-03-29",
            "endDate": "2007-06-01",
            "subject": "computer science, UI design, linguistics"
          }
        },
        {
          "format": "edWork",
          "data": {
            "location": "The University of Chicago",
            "url": "https://jpdev.pro/info/docs/pool-uc-transcript.pdf",
            "startDate": "1966-09-01",
            "endDate": "1971-04-30",
            "subject": "political science"
          }
        },
        {
          "format": "edWork",
          "data": {
            "location": "Harvard University",
            "url": "https://www.harvard.edu",
            "startDate": "1960-09-01",
            "endDate": "1964-06-30",
            "subject": "government"
          }
        }
      ]
    }
  },
  "work": {
    "format": "boxedBulletList",
    "title": "work",
    "data": {
      "head": {
        "size": 2,
        "data": "I have worked at"
      },
      "list": [
        {
          "format": "edWork",
          "data": {
            "location": "The Long Now Foundation",
            "url": "http://longnow.org",
            "startDate": "2012-01-01",
            "endDate": "2016-12-19",
            "subject": "Project Director, PanLex"
          }
        },
        {
          "format": "edWork",
          "data": {
            "location": "Centerplex",
            "url": "http://stulta.com/misc/cx/",
            "startDate": "1993-06-16",
            "endDate": "2004-06-11",
            "subject": "contracting, project management, ADA upgrades"
          }
        },
        {
          "format": "edWork",
          "data": {
            "location": "University of Washington Department of Political Science",
            "url": "https://www.polisci.washington.edu/",
            "startDate": "1977-09-16",
            "endDate": "1993-06-15",
            "subject": "research and teaching"
          }
        },
        {
          "format": "edWork",
          "data": {
            "location": "State University of New York at Stony Brook",
            "url": "http://www.stonybrook.edu",
            "startDate": "1971-01-01",
            "endDate": "1977-06-15",
            "subject": "research and teaching"
          }
        },
        {
          "format": "edWork",
          "data": {
            "location": "Peace Corps",
            "url": "https://www.peacecorps.gov/",
            "startDate": "1964-06-15",
            "endDate": "1966-06-15",
            "subject": "teaching"
          }
        }
      ]
    }
  },
  "awards": {
    "format": "boxedBulletList",
    "title": "awards",
    "data": {
      "head": {
        "size": 2,
        "data": "I have received software grants from"
      },
      "list": [
        "University of Maryland",
        "National Science Foundation"
      ]
    }
  },
  "publications": {
    "format": "boxedBulletList",
    "title": "publications",
    "data": {
      "head": {
        "size": 2,
        "data": "I have published about"
      },
      "list": [
        "computational lexicography",
        "syntactic ambiguity",
        "game-theoretic models of social choice"
      ]
    }
  }
}
`,"docs/samples/pool-short/pool-short-b-a11y.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Jonathan Pool: R\xE9sum\xE9</title>
    <style>
      @media (max-width: 650px) {
        html {
          font-size: 10px;
        }
      }
      @media (min-width: 651px), print {
        .cornerPic > img {
          position: absolute;
          top: 3rem;
          right: 3rem;
        }
      }
      @media (min-width: 651px) {
        html {
          font-size: 1.6vw;
        }
      }
      @media print {
        html {
          font-size: 10px;
        }
      }
      * {
        box-sizing: border-box;
      }
      a {
        overflow-wrap: break-word;
      }
      .band {
        background-color: lightgray;
      }
      .band,
      .rowTablesCircled,
      .section-subhead {
        margin-top: 1rem;
      }
      body {
        background: #eee;
        margin: 3rem 3rem;
      }
      .boxedBulletList {
        padding-bottom: 0.5rem;
        border-style: solid;
        border-width: 1px;
      }
      .boxedBulletList + .boxedBulletList {
        margin-top: -1px;
      }
      .boxedBulletList > h1 {
        margin-top: 0.1rem;
      }
      .caps {
        text-transform: uppercase;
      }
      caption {
        margin-bottom: 0.5rem;
        font-weight: bold;
      }
      .center,
      .compact {
        text-align: center;
      }
      .compact {
        padding: 0 3rem 2rem 3rem;
        border-style: solid;
        border-width: 0.5rem;
        border-radius: 50%;
        border-color: #33444433;
      }
      .cornerPic {
        text-align: center;
      }
      .cornerPic > img {
        width: 8rem;
      }
      h1 {
        margin: 0.5rem 0 0 0.5rem;
        color: #344;
      }
      .left {
        text-align: left;
      }
      li,
      td {
        font-size: 1.2rem;
      }
      p {
        margin: 0.3rem 0 0.8rem 0.5rem;
      }
      p.size1,
      p.size2 {
        font-weight: bold;
      }
      .rowTable ~ .rowTable {
        margin-top: 0.1rem;
      }
      .rowTablesCircled {
        display: flex;
        justify-content: center;
      }
      .rowTablesCircled td {
        padding-right: 0.3rem;
      }
      section:not(.boxedBulletList) + .boxedBulletList,
      .section-head {
        margin-top: 2rem;
      }
      .size1 {
        font-size: 2.2rem;
      }
      .size2 {
        font-size: 2rem;
        font-style: italic;
      }
      .size3 {
        font-size: 1.8rem;
      }
      .size4 {
        font-size: 1.6rem;
        font-style: italic;
      }
      .size5 {
        font-size: 1.4rem;
      }
      .size6 {
        font-size: 1.2rem;
        font-style: italic;
      }
      .size7,
      p {
        font-size: 1rem;
      }
      strong,
      .strong {
        font-weight: bold;
      }
      table {
        margin: 0.5rem auto 0 auto;
        border-collapse: collapse;
      }
      .tableLH th {
        text-align: right;
        padding-right: 0.5rem;
      }
      td {
        padding: 0.2rem;
        border-style: solid;
        border-width: 1px;
        border-color: slategray;
        text-align: left;
      }
      .theme-credit {
        margin-top: 1rem;
        text-align: center;
        font-size: 1rem;
        font-style: italic;
      }
      .tight {
        margin-top: 0;
        margin-bottom: 0;
      }
      ul {
        margin: 0.25rem 0;
      }
      .under {
        margin-top: 0;
      }
    </style>
  </head>
  <body>
    <main>
      <section title="Jonathan Pool: R\xE9sum\xE9" class="section-head">
        <p class="size3 center tight strong">Jonathan Pool</p>
        <p class="size3 center tight strong">(510) 225-1700</p>
        <p class="size3 center tight strong">pool@jpdev.pro</p>
      </section>
      <section title="Synopsis" class="section-head">
        <h1 class="size3 band left caps">Synopsis</h1>
        <section title="Motto">
          <h1 class="size5 strong">Motto</h1>
          <ul>
            <li>\u201CHit the ground learning\u201D</li>
          </ul>
        </section>
        <section title="Principal roles">
          <h1 class="size5 strong">Principal roles</h1>
          <ul>
            <li>Full-stack web developer</li>
            <li>Accessibility engineer</li>
          </ul>
        </section>
        <section title="Prior experience and training">
          <h1 class="size5 strong">Prior experience and training</h1>
          <ul>
            <li>UI design and usability</li>
            <li>Automated and user testing</li>
            <li>Automated internationalization and localization</li>
            <li>Documentation</li>
            <li>Conference presentations, training, business acquisition, and customer relationship management</li>
            <li>Design, implementation, and deployment of instructional software</li>
            <li>Physical and cloud server installation, configuration, and maintenance</li>
            <li>Network and firewall configuration and maintenance</li>
            <li>Project planning, costing, coordination, and management</li>
            <li>Grant and contract solicitation, negotiation, and management</li>
            <li>Procurement</li>
            <li>Regulatory compliance and risk management</li>
            <li>Founding of nonprofit and for-profit startups</li>
            <li>Political research, mathematical models of social behavior, and statistical analysis of social data (Harvard University, B.A.; University of Chicago, Ph.D.)</li>
            <li>Volunteer service in Peace Corps, Operation Crossroads Africa, nonprofit boards of directors, and advisory boards</li>
          </ul>
        </section>
      </section>
      <section title="Recent Work History" class="section-head">
        <h1 class="size3 band left caps">Recent Work History</h1>
        <section title="Self-employment">
          <h1 class="size5 section-subhead strong">Self-employment<br>Web accessibility developer/consultant<br>Seattle, Washington<br>2018-02-17 \u2013 </h1>
          <ul>
            <li>Conducted cross-browser WCAG 2.1, WAI-ARIA, and usability tests on web pages and other digital documents with aXe, WAVE, Siteimprove, WCAG Accessibility Audit Developer UI, Safari a11y Tools, Acrobat Pro DC, VoiceOver, ChromeVox, and other assistive technologies</li>
            <li>Provided pro bono accessibility consulting to for-profit, nonprofit, and government organizations</li>
            <li>Published accessibility reports</li>
            <li>Developed and maintained web applications with nginx, PM2, PostgreSQL, SendGrid Web API, and Twilio Programmable Voice API on Ubuntu Linux OVH VPS</li>
            <li>Received training on \u201CAdvanced PDF Accessibility\u201D, accessible CSS and SVG, and aXe development</li>
          </ul>
        </section>
        <section title="Learners Guild">
          <h1 class="size5 section-subhead strong">Learners Guild<br>Full-stack web-development and accessibility apprentice<br>Oakland, California<br>2017-05-01 \u2013 2018-02-16</h1>
          <ul>
            <li>Developed accessible and responsive front-end, back-end, and full-stack web applications, SPAs, and APIs coded in HTML5, CSS3, JavaScript (ES2015), and SQL, using Node.js, NPM, Express, pg, pg-promise, bcrypt, solr, PostgreSQL, Mongoose/MongoDB, JQuery, Cheerio, Bootstrap, EJS, Pug, Materialize, ESLint, mocha, chai, Selenium Webdriver, Chrome Developer Tools, and Heroku</li>
            <li>Researched state and federal U.S. and foreign accessibility laws and regulations</li>
            <li>Studied best practices in code organization, asynchronous programming, naming conventions, debugging, linting, testing, TDD, continuous integration, MVC architecture, documentation, and code reviews in agile development</li>
            <li>Became ESLint contributor #25</li>
            <li>Made 200+ contributions to MDN Web Docs</li>
            <li>Managed versions, collaboration, and workflows with git, Github, Slack, and Trello</li>
          </ul>
        </section>
        <section title="The Long Now Foundation">
          <h1 class="size5 section-subhead strong">The Long Now Foundation<br>Director and web/database developer in multilingual accessibility project<br>Berkeley, California<br>2012-01-01 \u2013 2016-12-19</h1>
          <ul>
            <li>Managed PanLex project</li>
            <li>Developed 3.1-billion-translation database and UIs supporting accessibility of digital content for speakers of all languages, using Perl, PostgreSQL, PL/pgSQL, DBI, MojoDOM, OCR tools, iconv, and ISO 639-3</li>
            <li>Developed web UIs with authentication and authorization and SEO API</li>
            <li>Tuned and tested indirect-translation algorithms</li>
            <li>Developed NLTK corpus in 2000 languages</li>
            <li>Contributed to Common Locale Data Repository of the Unicode Standard</li>
            <li>Recruited steering committee, 5 web developers and linguists, and 40 summer interns</li>
            <li>Installed, configured, and managed servers under Ubuntu Linux on AWS EC2 and dedicated OVH hosts</li>
            <li>Wrote project developer documentation with WordPress</li>
            <li>Collaborated with git, svn, Github, Gitlab, Bitbucket, SourceForge, Slack, Asana, Wrike, and Egnyte</li>
            <li>Published and presented technical papers</li>
          </ul>
        </section>
        <section title="Utilika Foundation">
          <h1 class="size5 section-subhead strong">Utilika Foundation<br>Founder, CEO, and web/database developer in multilingual accessibility project<br>Seattle, Washington<br>2004-05-03 \u2013 2011-12-31</h1>
          <ul>
            <li>Converted SQL Server database to PostgreSQL</li>
            <li>Developed database, web framework, and UIs with Perl, CSS, and HTML for accessibility of digital content and communications for speakers of all languages</li>
            <li>Designed authentication and authorization rules</li>
            <li>Installed, configured, and managed web, database, and mail servers with Red Hat Enterprise Linux</li>
            <li>Managed research partnership with Turing Center, University of Washington</li>
            <li>Published and presented research papers</li>
            <li>Recruited and trained volunteers and 10 interns</li>
            <li>Took undergraduate and graduate courses in Java, data structures and algorithms, UI design, user testing, usability research, AI, syntax, semantics, and morphology at University of Washington (GPA 3.97)</li>
          </ul>
        </section>
        <section title="Centerplex">
          <h1 class="size5 section-subhead strong">Centerplex<br>Founder, CEO, and web/eCommerce/network developer<br>Tukwila, Washington<br>1993-06-16 \u2013 2004-06-11</h1>
          <ul>
            <li>Developed web applications for property management, resource allocation, and contracting with Perl, CSS, HTML, PostgreSQL, VBA, and VectorWorks CAD</li>
            <li>Designed and managed search-engine advertising</li>
            <li>Designed and managed secure inter-building LAN and firewall under Cisco IOS</li>
            <li>Designed physical accessibility upgrades per ADA Title III</li>
          </ul>
        </section>
      </section>
      <section title="Professional affiliations" class="section-head">
        <h1 class="size3 band left caps">Professional affiliations</h1>
        <section title="International Association of Accessibility Professionals">
          <h1 class="size5 strong">International Association of Accessibility Professionals</h1>
          <ul>
            <li>member</li>
          </ul>
        </section>
        <section title="Puget Sound Special Interest Group in Computer-Human Interaction">
          <h1 class="size5 strong">Puget Sound Special Interest Group in Computer-Human Interaction</h1>
          <ul>
            <li>member</li>
          </ul>
        </section>
        <section title="Seattle Area Accessibility & Universal Design">
          <h1 class="size5 strong">Seattle Area Accessibility & Universal Design</h1>
          <ul>
            <li>member</li>
            <li>invited speaker</li>
          </ul>
        </section>
        <section title="Esperantic Studies Foundation">
          <h1 class="size5 strong">Esperantic Studies Foundation</h1>
          <ul>
            <li>cofounder</li>
            <li>Advisory Board member</li>
          </ul>
        </section>
      </section>
    </main>
    <section title="credit" class="theme-credit">
      Powered by <a href="https://www.npmjs.com/package/jsonresume-theme-a11y">jsonresume-theme-a11y</a>
    </section>
  </body>
</html>
`,"docs/samples/pool-short/pool-short-b-a11y.json":`{
  "lang": {
    "format": "hide",
    "data": "en"
  },
  "order": {
    "format": "hide",
    "data": [
      "basic",
      "intro",
      "work",
      "groups"
    ]
  },
  "title": {
    "format": "hide",
    "data": "Jonathan Pool: R\xE9sum\xE9"
  },
  "legend": {
    "format": "hide",
    "data": {
      "basic": "Jonathan Pool: R\xE9sum\xE9",
      "company": "Employer",
      "creditTo": "Powered by ",
      "email": "Email",
      "endDate": "End date",
      "groups": "Professional affiliations",
      "highlights": "Accomplishments",
      "intro": "Synopsis",
      "position": "Role",
      "startDate": "Start date",
      "title": "Title",
      "work": "Recent Work History"
    }
  },
  "basicData": {
    "format": "hide",
    "data": [
      "Jonathan Pool",
      "(510) 225-1700",
      "pool@jpdev.pro"
    ]
  },
  "introData": {
    "format": "hide",
    "data": [
      {
        "introTopic": "Motto",
        "list": [
          "\u201CHit the ground learning\u201D"
        ]
      },
      {
        "introTopic": "Principal roles",
        "list": [
          "Full-stack web developer",
          "Accessibility engineer"
        ]
      },
      {
        "introTopic": "Prior experience and training",
        "list": [
          "UI design and usability",
          "Automated and user testing",
          "Automated internationalization and localization",
          "Documentation",
          "Conference presentations, training, business acquisition, and customer relationship management",
          "Design, implementation, and deployment of instructional software",
          "Physical and cloud server installation, configuration, and maintenance",
          "Network and firewall configuration and maintenance",
          "Project planning, costing, coordination, and management",
          "Grant and contract solicitation, negotiation, and management",
          "Procurement",
          "Regulatory compliance and risk management",
          "Founding of nonprofit and for-profit startups",
          "Political research, mathematical models of social behavior, and statistical analysis of social data (Harvard University, B.A.; University of Chicago, Ph.D.)",
          "Volunteer service in Peace Corps, Operation Crossroads Africa, nonprofit boards of directors, and advisory boards"
        ]
      }
    ]
  },
  "workData": {
    "format": "hide",
    "data": [
      {
        "organization": "Self-employment",
        "role": "Web accessibility developer/consultant",
        "location": "Seattle, Washington",
        "startDate": "2018-02-17",
        "endDate": "",
        "highlights": [
          "Conducted cross-browser WCAG 2.1, WAI-ARIA, and usability tests on web pages and other digital documents with aXe, WAVE, Siteimprove, WCAG Accessibility Audit Developer UI, Safari a11y Tools, Acrobat Pro DC, VoiceOver, ChromeVox, and other assistive technologies",
          "Provided pro bono accessibility consulting to for-profit, nonprofit, and government organizations",
          "Published accessibility reports",
          "Developed and maintained web applications with nginx, PM2, PostgreSQL, SendGrid Web API, and Twilio Programmable Voice API on Ubuntu Linux OVH VPS",
          "Received training on \u201CAdvanced PDF Accessibility\u201D, accessible CSS and SVG, and aXe development"
        ]
      },
      {
        "organization": "Learners Guild",
        "role": "Full-stack web-development and accessibility apprentice",
        "location": "Oakland, California",
        "startDate": "2017-05-01",
        "endDate": "2018-02-16",
        "highlights": [
          "Developed accessible and responsive front-end, back-end, and full-stack web applications, SPAs, and APIs coded in HTML5, CSS3, JavaScript (ES2015), and SQL, using Node.js, NPM, Express, pg, pg-promise, bcrypt, solr, PostgreSQL, Mongoose/MongoDB, JQuery, Cheerio, Bootstrap, EJS, Pug, Materialize, ESLint, mocha, chai, Selenium Webdriver, Chrome Developer Tools, and Heroku",
          "Researched state and federal U.S. and foreign accessibility laws and regulations",
          "Studied best practices in code organization, asynchronous programming, naming conventions, debugging, linting, testing, TDD, continuous integration, MVC architecture, documentation, and code reviews in agile development",
          "Became ESLint contributor #25",
          "Made 200+ contributions to MDN Web Docs",
          "Managed versions, collaboration, and workflows with git, Github, Slack, and Trello"
        ]
      },
      {
        "organization": "The Long Now Foundation",
        "role": "Director and web/database developer in multilingual accessibility project",
        "location": "Berkeley, California",
        "startDate": "2012-01-01",
        "endDate": "2016-12-19",
        "highlights": [
          "Managed PanLex project",
          "Developed 3.1-billion-translation database and UIs supporting accessibility of digital content for speakers of all languages, using Perl, PostgreSQL, PL/pgSQL, DBI, MojoDOM, OCR tools, iconv, and ISO 639-3",
          "Developed web UIs with authentication and authorization and SEO API",
          "Tuned and tested indirect-translation algorithms",
          "Developed NLTK corpus in 2000 languages",
          "Contributed to Common Locale Data Repository of the Unicode Standard",
          "Recruited steering committee, 5 web developers and linguists, and 40 summer interns",
          "Installed, configured, and managed servers under Ubuntu Linux on AWS EC2 and dedicated OVH hosts",
          "Wrote project developer documentation with WordPress",
          "Collaborated with git, svn, Github, Gitlab, Bitbucket, SourceForge, Slack, Asana, Wrike, and Egnyte",
          "Published and presented technical papers"
        ]
      },
      {
        "organization": "Utilika Foundation",
        "role": "Founder, CEO, and web/database developer in multilingual accessibility project",
        "location": "Seattle, Washington",
        "startDate": "2004-05-03",
        "endDate": "2011-12-31",
        "highlights": [
          "Converted SQL Server database to PostgreSQL",
          "Developed database, web framework, and UIs with Perl, CSS, and HTML for accessibility of digital content and communications for speakers of all languages",
          "Designed authentication and authorization rules",
          "Installed, configured, and managed web, database, and mail servers with Red Hat Enterprise Linux",
          "Managed research partnership with Turing Center, University of Washington",
          "Published and presented research papers",
          "Recruited and trained volunteers and 10 interns",
          "Took undergraduate and graduate courses in Java, data structures and algorithms, UI design, user testing, usability research, AI, syntax, semantics, and morphology at University of Washington (GPA 3.97)"
          ]
      },
      {
        "organization": "Centerplex",
        "role": "Founder, CEO, and web/eCommerce/network developer",
        "location": "Tukwila, Washington",
        "startDate": "1993-06-16",
        "endDate": "2004-06-11",
        "highlights": [
          "Developed web applications for property management, resource allocation, and contracting with Perl, CSS, HTML, PostgreSQL, VBA, and VectorWorks CAD",
          "Designed and managed search-engine advertising",
          "Designed and managed secure inter-building LAN and firewall under Cisco IOS",
          "Designed physical accessibility upgrades per ADA Title III"
        ]
      }
    ]
  },
  "groupData": {
    "format": "hide",
    "data": [
      {
        "organization": "International Association of Accessibility Professionals",
        "roles": ["member"]
      },
      {
        "organization": "Puget Sound Special Interest Group in Computer-Human Interaction",
        "roles": ["member"]
      },
      {
        "organization": "Seattle Area Accessibility & Universal Design",
        "roles": [
          "member",
          "invited speaker"
        ]
      },
      {
        "organization": "Esperantic Studies Foundation",
        "roles": [
          "cofounder",
          "Advisory Board member"
        ]
      }
    ]
  },
  "basic": {
    "format": "extraction",
    "title": "basic",
    "data": {
      "from": "basicData",
      "into": "centeredStrongLines"
    }
  },
  "intro": {
    "format": "extraction",
    "title": "intro",
    "data": {
      "from": "introData",
      "into": "introLists",
      "headStyle": "left caps"
    }
  },
  "work": {
    "format": "extraction",
    "title": "work",
    "data": {
      "from": "workData",
      "into": "headedWorkVolLists",
      "headStyle": "left caps"
    }
  },
  "group": {
    "format": "extraction",
    "title": "groups",
    "data": {
      "from": "groupData",
      "into": "headedGroupList",
      "headStyle": "left caps"
    }
  }
}
`,"package.json":`{
  "name": "jsonresume-theme-a11y",
  "version": "2.5.0",
  "description": "Theme for JSON Resume addressing WCAG 2.1 and ARIA accessibility (a11y) standards",
  "scripts": {
    "lint": "eslint *.js views/*.js; exit 0"
  },
  "keywords": [
    "r\xE9sum\xE9",
    "resume",
    "curriculum vitae",
    "CV",
    "jsonresume",
    "jsonresume-theme",
    "accessibility",
    "a11y",
    "WCAG",
    "ARIA",
    "disability",
    "assistive technology"
  ],
  "author": "Jonathan Pool",
  "license": "MIT",
  "dependencies": {
    "commander": "*"
  },
  "devDependencies": {
    "babel-preset-es2015": "*",
    "eslint": "*"
  },
  "bugs": {
    "url": "https://github.com/jrpool/jsonresume-theme-a11y.git/issues"
  },
  "homepage": "https://github.com/jrpool/jsonresume-theme-a11y.git/index.html",
  "repository": {
    "type": "git",
    "url": "https://github.com/jrpool/jsonresume-theme-a11y"
  },
  "babel": {
    "presets": [
      "es2015"
    ]
  },
  "eslintConfig": {
    "env": {
      "node": true,
      "browser": true,
      "es6": true,
      "jquery": true,
      "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
      "sourceType": "module"
    },
    "rules": {
      "arrow-spacing": [
        "error",
        {
          "before": true,
          "after": true
        }
      ],
      "indent": [
        "error",
        2,
        {
          "MemberExpression": 0,
          "SwitchCase": 1
        }
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "no-array-constructor": [
        "error"
      ],
      "no-cond-assign": [
        "off"
      ],
      "no-control-regex": [
        "off"
      ],
      "no-console": [
        "off"
      ],
      "no-const-assign": [
        "error"
      ],
      "no-new-object": [
        "error"
      ],
      "no-var": [
        "off"
      ],
      "no-whitespace-before-property": [
        "error"
      ],
      "prefer-const": [
        "warn"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "always"
      ],
      "space-before-blocks": [
        "error",
        "always"
      ],
      "space-before-function-paren": [
        "error",
        "never"
      ],
      "space-in-parens": [
        "error",
        "never"
      ],
      "space-unary-ops": [
        "error",
        {
          "words": true,
          "nonwords": false
        }
      ],
      "spaced-comment": [
        "error",
        "always",
        {
          "markers": [
            "/",
            "*"
          ]
        }
      ]
    }
  }
}
`,"private/notes/notes.txt":`R\xE9sum\xE9 parsers:

jobscan.co; simulates ATS on r\xE9sum\xE9s?

http://www.resumehacking.com/ready-for-automated-resume-screening says the main firms that parse r\xE9sum\xE9s for the main ATSs are:

Daxtra (used by Zoho)
BurningGlass
Sovren (claims that \u201C60% of all resumes are processed by Sovren technology\u201D); claims use by Google, Hired, CyberCoders, Talent, Kelly, Lever, Neogov, 
TextKernel
Trovix (acquired by Monster)
RapidParser

January 2018 thesis on r\xE9sum\xE9 parsing:
http://download.fortiss.org/public/pmwt/theses/Masterarbeit_TamasNeumer.pdf
Tests commercial and open-source parsers on a sample of real software-engineering r\xE9sum\xE9s, wrt NLU and structure recognition. Finds they ignore structure and parse only text, poorly.

####

Comments given to RapidParser, 2018-04-23:

I compliment you on your generosity in allowing the public to test r\xE9sum\xE9s with RapidParser. Sovren also does this, but all the other commercial parsers that I have visited seem not to allow it.

My first test was on a r\xE9sum\xE9 written for a human reader in a colloquial (rather than outline) style. I provided an HTML file with WCAG-2-compliant markup, so that assistive technologies could parse the document structure. You can find a copy of that file at https://jpdev.pro/info/ . It was generated by the software at https://www.npmjs.com/package/jsonresume-theme-a11y .

The result was problematic.

At the beginning, the parser interpreted my name as \u201CDemo Github\u201D instead of \u201CJonathan Pool\u201D.

Education and work histories were intermixed, and items within them were inconsistently interpreted, despite consistent formatting.

I wish to continue testing while developing applications for generating parser-friendly r\xE9sum\xE9s, based on the jsonresume standard. Your sandbox API will be very helpful for this.

The advice given by Sovren for making r\xE9sum\xE9s compatible with its parser is helpful. I recommend that kind of documentation as an additional enhancement to your website.

####

Related projects: https://news.ycombinator.com/item?id=10787608
`,"private/pool-versions/20171213-pool.json":`{
  "basics": {
    "name": "Jonathan Pool",
    "label": "Programmer",
    "picture": "http://stulta.com/images/pool-2009.jpg",
    "email": "pool@stulta.com",
    "phone": "(510) 225-1717",
    "mobilePhone": "(510) 225-1700",
    "website": "http://stulta.com",
    "summary": "Seeking an opportunity to build, test, revise, document, and learn software that helps people behave more efficiently and fairly",
    "location": {
      "address": "555 10th St",
      "postalCode": "CA 94607-5208",
      "city": "Oakland",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "Github",
        "username": "jrpool",
        "url": "https://github.com/jrpool"
      },
      {
        "network": "LinkedIn",
        "username": "jonathanpool",
        "url": "https://www.linkedin.com/in/jonathanpool/"
      },
      {
        "network": "Stack Overflow",
        "username": "1572601",
        "url": "https://stackoverflow.com/users/story/1572601"
      },
      {
        "network": "MDN Web Docs (Mozilla Foundation)",
        "username": "JonathanPool",
        "url": "https://developer.mozilla.org/en-US/profiles/JonathanPool"
      },
      {
        "network": "Google Scholar",
        "username": "qSNjYhQAAAAJ&hl",
        "url": "https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en"
      },
      {
        "network": "GitLab",
        "username": "JonathanPool",
        "url": "https://gitlab.com/JonathanPool"
      },
      {
        "network": "Twitter",
        "username": "JonathanRPool",
        "url": "https://twitter.com/JonathanRPool"
      }
    ]
  },
  "skills": [
    {
      "name": "Full-stack JavaScript-based web development",
      "level": "junior",
      "keywords": [
        "bcrypt",
        "body-parser",
        "Bootstrap",
        "chai",
        "cherio",
        "cookie-session",
        "cryptr",
        "CSS",
        "dotenv",
        "ejs",
        "ESLint",
        "express",
        "express-session",
        "express",
        "HTML",
        "JavaScript",
        "JQuery",
        "Lodash",
        "Materialize",
        "mocha",
        "mongoose",
        "morgan",
        "nodemon",
        "npm",
        "pg (node-postgres)",
        "pg-promise",
        "PM2",
        "pug",
        "request-promise-native",
        "resume-cli",
        "selenium-webdriver",
        "session-file-store",
        "Underscore",
        "XMLHttpRequest"
      ]
    },
    {
      "name": "Perl-based software development",
      "level": "junior",
      "keywords": [
        "cpan",
        "dbd::pg",
        "dbi",
        "LWP::UserAgent",
        "mojolicious",
        "Perl"
      ]
    },
    {
      "name": "Java-based software development",
      "level": "junior",
      "keywords": [
        "Java",
        "JavaDoc",
        "Apache solr"
      ]
    },
    {
      "name": "Other programming languages",
      "level": "junior",
      "keywords": [
        "Visual Basic for Applications",
        "68000 Assembly Language",
        "APL"
      ]
    },
    {
      "name": "Database systems",
      "level": "junior",
      "keywords": [
        "PostgreSQL",
        "MongoDB",
        "FileMaker Pro"
      ]
    },
    {
      "name": "Server software",
      "level": "junior",
      "keywords": [
        "Postfix",
        "Apache httpd",
        "nginx",
        "puppet"
      ]
    },
    {
      "name": "Services",
      "level": "junior",
      "keywords": [
        "Amazon EC2",
        "Amazon S3",
        "Amazon Glacier",
        "Heroku",
        "SendGrid Web API",
        "OVH VPS platform",
        "OVH dedicated-server platform"
      ]
    },
    {
      "name": "Operating systems",
      "level": "junior",
      "keywords": [
        "Ubuntu Linux server",
        "Red Hat Enterprise Linux",
        "OS X",
        "Windows",
        "Cisco firewall/router/switch OS"
      ]
    },
    {
      "name": "Productivity applications",
      "level": "junior",
      "keywords": [
        "Apache OpenOffice (Calc, Writer, Impress)",
        "Microsoft Office (Excel, Word, PowerPoint)",
        "iWork (Keynote, Pages, Numbers)"
      ]
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native speaker"
    },
    {
      "language": "Esperanto",
      "fluency": "High"
    },
    {
      "language": "German",
      "fluency": "Medium-high"
    },
    {
      "language": "Turkish",
      "fluency": "Medium"
    },
    {
      "language": "French",
      "fluency": "Medium-low"
    },
    {
      "language": "Russian",
      "fluency": "Medium-low"
    },
    {
      "language": "Norwegian (Bokm\xE5l)",
      "fluency": "Medium-low"
    }
  ],
  "education": [
    {
      "institution": "Learners Guild",
      "website": "https://www.learnersguild.org/",
      "area": "software development",
      "studyType": "apprenticeship",
      "startDate": "2017-05-01",
      "endDate": "2018-02-16",
      "gpa": "N/A",
      "courses": [
        "Foundations",
        "Practice",
        "Apprenticeship"
      ]
    },
    {
      "institution": "University of Washington",
      "website": "http://www.washington.edu",
      "area": "Computational linguistics and computer science",
      "studyType": "course work",
      "startDate": "2004-03-29",
      "endDate": "2007-06-01",
      "gpa": "3.97",
      "courses": [
        "CSE 142: Computer Programming I",
        "Linguistics 461: Syntax I",
        "Linguistics 462: Syntax II",
        "Linguistics 472: Introduction to Computational Linguistics",
        "Linguistics 580: Problems in Linguistics (Introduction to Syntax for Computational Linguistics)",
        "Linguistics 567: Grammar Engineering",
        "CSE 143: Computer Programming II",
        "CSE 373: Data Structures and Algorithms",
        "CSE 415: Artificial Intelligence",
        "Linguistics 580: Problems in Linguistics (Lexical Ambiguity)",
        "CSE 490: Special Topics in CSE (Human\u2013Computer Interaction 1 & 2)",
        "Linguistics 575: Computational Linguistics Topics",
        "Other courses audited"
      ]
    },
    {
      "institution": "The University of Chicago",
      "website": "https://www.uchicago.edu",
      "area": "Policital science",
      "studyType": "M.A. and Ph.D.",
      "startDate": "1966-09-01",
      "endDate": "1971-04-30",
      "gpa": "unknown",
      "courses": [
        "graduate courses in political science"
      ]
    },
    {
      "institution": "Harvard University",
      "website": "https://www.harvard.edu",
      "area": "Government",
      "studyType": "B.A., cum laude",
      "startDate": "1960-09-01",
      "endDate": "1964-06-30",
      "gpa": "unknown",
      "courses": [
        "undergraduate courses in mathematics, natural and social sciences, and humanities"
      ]
    }
  ],
  "work": [
    {
      "company":"The Long Now Foundation",
      "position": "Project Director",
      "website": "http://longnow.org",
      "projectWebsite": "https:panlex.org",
      "startDate": "2012-01-01",
      "endDate": "2015-12-19",
      "summary": "PanLex is the successor to the PanDictionary project of the Turing Center at the University of Washington (2006\u20132010), directed by Oren Etzioni. PanLex is building an open-source database documenting all known lexical translations among all languages and dialects, living and dead, natural and artificial, with the purpose of making cross-language information exchange and retrieval more effective for languages of all sizes and supporting cross-linguistic research.",
      "highlights": [
        "Converted database from MS SQL Server to PostgreSQL",
        "Grew data from 13 million to 24 million lexemes",
        "Grew pairwise translation count to 1.3 billion",
        "Designed and implemented Web interfaces to database for developers, end users, and search engines",
        "Documented standards, practices, and tools for other developers",
        "Presented technical conference papers",
        "Published technical article"
      ]
    },
    {
      "company": "Centerplex",
      "position": "Proprietor",
      "website": "http://stulta.com/misc/cx/",
      "startDate": "1993-06-16",
      "endDate": "2004-06-11",
      "summary": "Centerplex purchased, improved, and operated 4 Tukwila, Washington, office buildings. Centerplex pioneered micro-offices, virtual tenancies, tenant-friendly draft-your-own web leases, web reservations of conference rooms, high-speed Internet access as a free tenant amenity, and energy-conservation and recycling programs.",
      "highlights": [
        "Earned EPA Energy Star for Small Business Award, 1999",
        "Lighting upgrade got honorable mention from International Interior Design Association, 1999",
        "Profiled in Joseph Romm, \u201CCool Companies\u201D (2006)"
      ]
    },
    {
      "company": "University of Washington",
      "position": "Assistant and Associate Professor",
      "website": "http://www.washington.edu",
      "startDate": "1977-09-16",
      "endDate": "1993-06-15",
      "summary": "Research and teaching in political science, with concentrations in language policy, social choice theory, and quantitative research methods.",
      "highlights": [
        "Presented conference papers",
        "Published book chapters, research articles, and working papers",
        "Visiting research and teaching appointments at U of Paderborn (Germany) and U of Bielefeld (Germany)"
      ]
    },
    {
      "company": "State University of New York at Stony Brook",
      "position": "Assistant Professor",
      "website": "http://www.stonybrook.edu/",
      "startDate": "1971-01-01",
      "endDate": "1977-06-15",
      "summary": "Research and teaching in political science, with concentrations in language policy, social choice theory, and quantitative research methods.",
      "highlights": [
        "Presented conference papers",
        "Published book chapters, research articles, and working papers",
        "Visiting appointments at U of Mannheim (Germany), McGill U (Montr\xE9al), USSR Academy of Sciences, and Stanford U"
      ]
    }
  ],
  "volunteer": [
    {
      "organization": "ESLint",
      "position": "Contributor",
      "website": "https://eslint.org/",
      "startDate": "2017-10-12",
      "summary": "ESLint is the premier linting tool for JavaScript.",
      "highlights": [
        "Submitted 16 merged commits in first month",
        "Became #26 out of 566 contributors by commit count",
        "Contributing to absorbtion of JSCS by ESLint"
      ]
    },
    {
      "organization": "Mozilla Foundation",
      "position": "Contributor to MDN Docs",
      "website": "https://developer.mozilla.org",
      "startDate": "2017-02-20",
      "summary": "MDN Docs is the premier repository of authoritative developer-facing documentation on HTML, CSS, JavaScript, and related APIs.",
      "highlights": [
        "Made 224 edits in documentation in 8 months"
      ]
    },
    {
      "organization": "Utilika Foundation",
      "position": "President",
      "website": "http://stulta.com/misc/uf/",
      "startDate": "2004-05-03",
      "endDate": "2011-12-31",
      "summary": "Utilika Foundation supported the work of the UW Turing Center on the PanDictionary project and assumed management of it as the PanLex project when the Turing Center\u2019s work on it ended. The foundation turned the project over to The Long Now Foundation in 2012.",
      "highlights": [
        "Presented technical conference papers at CLAW/AMTA 2006, K-CAP 2007, SAAKM 2007, LISA Berkeley 2009, Machine Translation Summit XII, Coling 2010, and DELPH-IN Summit 2011"
      ]
    },
    {
      "organization": "Berkeley Town House Cooperative Corporation",
      "position": "Director and Secretary",
      "website": "http://berkeleytownhouse.com",
      "startDate": "2011-05-24",
      "endDate": "2011-12-06",
      "summary": "Berkeley Town House is the first senior housing cooperative in the United States, founded in 1960.",
      "highlights": [
        "Helped evaluate prospects of recovery for construction defects",
        "Recorded official corporate business",
        "Recovered, organized, and digitized corporate records"
      ]
    },
    {
      "organization": "Peace Corps",
      "position": "Volunteer",
      "website": "https://www.peacecorps.gov",
      "startDate": "1964-06-15",
      "endDate": "1966-06-15",
      "summary": "The fourth contingent of Peace Corps Volunteers in Turkey was trained at Portland State University and mostly taught English as a foreign language at the secondary level.",
      "highlights": [
        "Taught in middle and high schools in Nev\u015Fehir and \u0130stanbul, Turkey",
        "Published articles in a Turkish news magazine (\u201CY\xF6n\u201D) and \u201CPeace Corps Volunteer\u201D",
        "Published a language textbook"
      ]
    },
    {
      "organization": "Operation Crossroads Africa",
      "position": "Volunteer",
      "website": "http://operationcrossroadsafrica.org/",
      "startDate": "1963-06-15",
      "endDate": "1966-08-15",
      "summary": "Operation Crossroads Africa organizes manual labor projects in Africa with international participation.",
      "highlights": [
        "Participated in building a community center in Nsoatre, Ghana"
      ]
    }
  ],
  "awards": [
    {
      "title": "Faculty Research Programme grant",
      "date": "1985-11-01",
      "awarder": "Embassy of Canada to the United States",
      "summary": "The Political Economy of Language"
    },
    {
      "title": "Educational software development grant",
      "date": "1983-07-01",
      "awarder": "University of Maryland",
      "summary": "Computer Simulation in Multilingual International Studies"
    },
    {
      "title": "Research grant",
      "date": "1978-09-01",
      "awarder": "National Science Foundation",
      "summary": "Computer Equipment for Experimental Political Science Research"
    },
    {
      "title": "Collaborative research grant",
      "date": "1978-05-01",
      "awarder": "American Association for the Advancement of Slavic Studies",
      "summary": "Language and Ethnicity in the USSR: Advances in Policy Research"
    },
    {
      "title": "Conference travel grant",
      "date": "1978-08-01",
      "awarder": "Ford Foundation",
      "summary": "Travel support for 9th World Congress of Sociology"
    },
    {
      "title": "Research stipend",
      "date": "1975-09-01",
      "awarder": "American Association for the Advancement of Slavic Studies",
      "summary": "Soviet language policy"
    },
    {
      "title": "Awards for visiting research and teaching appointments",
      "startDate": "1973",
      "endDate": "1975",
      "awarder": "National Academy of Sciences of the USA, Academy of Sciences of the USSR, Social Science Research Council, Alexander von Humboldt-Stiftung, Deutscher Akademischer Austauschdienst, and Council for European Studies",
      "summary": "Survey, experimental, and theoretical research"
    }
  ],
  "publications": [
    {
      "name": "David Kamholz, Jonathan Pool, and Susan M. Colowick, \u201CPanLex: Building a Resource for Panlingual Lexical Translation\u201D",
      "publisher": "LREC",
      "releaseDate": "2014",
      "website": "https://pdfs.semanticscholar.org/4bf5/387ec770f557525484b7c99be3a0c568651a.pdf",
      "summary": "Technical description of the PanLex project of The Long Now Foundation"
    },
    {
      "name": "Patrick Westphal, Claus Stadler, and Jonathan Pool, \u201CCountering language attrition with PanLex and the Web of Data\u201D",
      "publisher": "Semantic Web Journal",
      "releaseDate": "2015",
      "website": "http://www.semantic-web-journal.net/system/files/swj509.pdf",
      "summary": "Technical report on creation of an RDF interface to the PanLex database"
    },
    {
      "name": "Timothy Baldwin, Jonathan Pool, and Susan M. Colowick, \u201CPanLex and LEXTRACT: Translating all Words of all Languages of the World\u201D",
      "publisher": "Coling",
      "releaseDate": "2010",
      "website": "http://turing.cs.washington.edu/papers/BaldwinEtAl-Lextract.pdf",
      "summary": "Technical report on attempts to automate the parsing of heterogeneous multilingual dictionaries for extraction of translations"
    },
    {
      "name": "Katherine Everitt, Christopher Lim, Oren Etzioni, Jonathan Pool, Susan Colowick, and Stephen Soderland, \u201CEvaluating Lemmatic Communication\u201D",
      "publisher": "trans-kom",
      "releaseDate": "2010",
      "website": "http://www.trans-kom.eu/bd03nr01/trans-kom_03_01_03_Everitt_et_al_Lemmatic_Communication.20100531.pdf",
      "summary": "Experiment on conditions of success in lemmatic communication between Spanish- and Hungarian-speaking subjects"
    },
    {
      "name": "Jonathan Pool and S. M. Colowick, \u201CSyntactic Disambiguation for the Semantic Web\u201D",
      "publisher": "SAAKM",
      "releaseDate": "2007",
      "website": "http://ftp.informatik.rwth-aachen.de/Publications/CEUR-WS/Vol-289/po02.pdf",
      "summary": "Experimental comparison of paraphrasal and truth-conditional selection as methods of disambiguation"
    },
    {
      "name": "Jonathan Pool, \u201CThe Multilingual Election Problem\u201D",
      "publisher": "Journal of Theoretical Politics",
      "releaseDate": "1992",
      "website": "https://old.panlex.org/pubs/etc/multielectprob.pdf",
      "summary": "Formal model of political polarization with candidates advocating conflicting policies to dissimilar audiences"
    },
    {
      "name": "Reinhard Selten and Jonathan Pool, \u201CThe Distribution of Foreign Language Skills as a Game Equilibrium\u201D",
      "publisher": "Springer",
      "releaseDate": "1991",
      "website": "https://pdfs.semanticscholar.org/fe68/86cfbf8c2d18f4175b490dcc8837a14d3a5c.pdf",
      "summary": "Model of interactive decisions on acquiring knowledge of additional languages"
    },
    {
      "name": "Jonathan Pool, \u201CThe Official Language Problem\u201D",
      "publisher": "American Political Science Review",
      "releaseDate": "1991",
      "website": "https://www.jstor.org/stable/1963171",
      "summary": "Model of a solution to the problem of choosing optimally efficient official languages while treating speakers of all languages fairly"
    },
    {
      "name": "Bernard Grofman and Jonathan Pool, \u201CHow to Make Cooperation the Optimizing Strategy in a Two-Person Game\u201D",
      "publisher": "Journal of Mathematical Sociology",
      "releaseDate": "1977",
      "website": "http://www.tandfonline.com/doi/abs/10.1080/0022250X.1977.9989871?src=recsys&",
      "summary": "Proves the existence of a partial tit\u2010for\u2010tat (matching) strategy that induces an optimizing opponent to cooperate in an iterated Prisoner's Dilemma game"
    },
    {
      "name": "Jonathan Pool, \u201CCoalition Formation in Small Groups with Incomplete Communication Networks\u201D",
      "publisher": "Journal of Personality and Social Psychology",
      "releaseDate": "1976",
      "website": "https://old.panlex.org/pubs/etc/cfsg.pdf",
      "summary": "Report of an experiment on the effects of communication restrictions on coalition formation and competitive success"
    }
  ],
  "interests": [
    {
      "name": "Culinary experimentation",
      "keywords": [
        "Look, ma, no recipe!"
      ]
    },
    {
      "name": "Habit disruption",
      "keywords": [
        "Dvorak keyboard layout"
      ]
    },
    {
      "name": "Urban carless living",
      "keywords": [
        "Walking",
        "Transit"
      ]
    },
    {
      "name": "The assignment problem",
      "keywords": [
        "Why buyers and sellers are both scarce"
      ]
    },
    {
      "name": "Postspatial society",
      "keywords": [
        "Unrestricted migration",
        "Nonspatial voting systems",
        "Teleservices",
        "Telecollaboration",
        "Telemeetings"
      ]
    }
  ],
  "references": [
    {
      "name": "To be specified on request",
      "reference": "To be obtained from references"
    }
  ]
}
`,"private/pool-versions/20180122-pool.html":`<!doctype html>
<html>
	<head>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">
	
	<title>Jonathan Pool</title>

	<style>
	body {
	background: #fff;
	font: 15px Arial, Helvetica, sans-serif;
	line-height: 1.4;
	margin: 50px 0;
	margin-bottom: 100px;
}
em {
	color: #999;
}
p {
	line-height: 1.4;
}
ul {
	margin-bottom: 0;
}
section {
	margin-bottom: 2em;
}
blockquote {
	margin: 0;
	margin-bottom: 1em;
}
.item {
	margin-bottom: 1em;
}
#resume {
	margin: 0 auto;
	max-width: 480px;
	padding: 0 20px;
}
#basics {
	margin-bottom: -10px;
}
#basics h3 {
	margin-top: 1.5em;
}
#basics .contact strong,
#location strong {
	clear: both;
	float: left;
	line-height: 1.3;
	width: 120px;
}
#profiles,
#skills {
	overflow: hidden;
}
#profiles .item,
#skills .item {
	float: left;
	width: 50%;
}


	</style>
	
	</head>
	<body>
	
	<div id="resume">
			<h1>Jonathan Pool</h1>
			<h2>Programmer</h2>
			<section id="basics">
				<div class="contact">
				<div class="website">
					<strong>Website</strong>
					http://stulta.com
				</div>
				<div class="email">
					<strong>Email</strong>
					pool@stulta.com
				</div>
				<div class="phone">
					<strong>Phone</strong>
					(510) 225-1717
				</div>
				</div>
				<div class="summary">
					<p>Seeking an opportunity to build, test, revise, document, and learn software that helps people behave more efficiently and fairly</p>
				</div>
				<h3>Location</h3>
				<section id="location">
					<div class="address">
						<strong>Address</strong>
						555 10th St
					</div>
					<div class="postalCode">
						<strong>Postal code</strong>
						CA 94607-5208
					</div>
					<div class="city">
						<strong>City</strong>
						Oakland
					</div>
					<div class="countryCode">
						<strong>Country code</strong>
						US
					</div>
					<div class="region">
						<strong>Region</strong>
						California
					</div>
				</section>
				<h3>Profiles</h3>
				<section id="profiles">
					<div class="item">
						<strong class="network">
							Github
						</strong>
						<div class="username">
							jrpool
						</div>
						<div class="url">
							<a href="https://github.com/jrpool">Link</a>
						</div>
					</div>
					<div class="item">
						<strong class="network">
							LinkedIn
						</strong>
						<div class="username">
							jonathanpool
						</div>
						<div class="url">
							<a href="https://www.linkedin.com/in/jonathanpool/">Link</a>
						</div>
					</div>
					<div class="item">
						<strong class="network">
							Stack Overflow
						</strong>
						<div class="username">
							1572601
						</div>
						<div class="url">
							<a href="https://stackoverflow.com/users/story/1572601">Link</a>
						</div>
					</div>
					<div class="item">
						<strong class="network">
							MDN Web Docs (Mozilla Foundation)
						</strong>
						<div class="username">
							JonathanPool
						</div>
						<div class="url">
							<a href="https://developer.mozilla.org/en-US/profiles/JonathanPool">Link</a>
						</div>
					</div>
					<div class="item">
						<strong class="network">
							Google Scholar
						</strong>
						<div class="username">
							qSNjYhQAAAAJ&amp;hl
						</div>
						<div class="url">
							<a href="https://scholar.google.com/citations?user&#x3D;qSNjYhQAAAAJ&amp;hl&#x3D;en">Link</a>
						</div>
					</div>
					<div class="item">
						<strong class="network">
							GitLab
						</strong>
						<div class="username">
							JonathanPool
						</div>
						<div class="url">
							<a href="https://gitlab.com/JonathanPool">Link</a>
						</div>
					</div>
					<div class="item">
						<strong class="network">
							Twitter
						</strong>
						<div class="username">
							JonathanRPool
						</div>
						<div class="url">
							<a href="https://twitter.com/JonathanRPool">Link</a>
						</div>
					</div>
				</section>
			</section>
		<section id="work">
			<h2>Work</h2>
			<div class="item">
				<h3 class="name">
					The Long Now Foundation
				</h3>
				<div class="date">
					<span class="startDate">
						2012-01-01
					</span>
					<span class="endDate">
						- 2015-12-19
					</span>
				</div>
				<div class="position">
					Project Director
				</div>
				<div class="website">
					<a href="http://longnow.org">http://longnow.org</a>
				</div>
				<div class="summary">
					<p>PanLex is the successor to the PanDictionary project of the Turing Center at the University of Washington (2006\u20132010), directed by Oren Etzioni. PanLex is building an open-source database documenting all known lexical translations among all languages and dialects, living and dead, natural and artificial, with the purpose of making cross-language information exchange and retrieval more effective for languages of all sizes and supporting cross-linguistic research.</p>
				</div>
				<ul class="highlights">
					<li>Converted database from MS SQL Server to PostgreSQL</li>
					<li>Grew data from 13 million to 24 million lexemes</li>
					<li>Grew pairwise translation count to 1.3 billion</li>
					<li>Designed and implemented Web interfaces to database for developers, end users, and search engines</li>
					<li>Documented standards, practices, and tools for other developers</li>
					<li>Presented technical conference papers</li>
					<li>Published technical article</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="name">
					Centerplex
				</h3>
				<div class="date">
					<span class="startDate">
						1990-12-14
					</span>
					<span class="endDate">
						- 2004-06-11
					</span>
				</div>
				<div class="position">
					Proprietor
				</div>
				<div class="website">
					<a href="http://stulta.com/misc/cx/">http://stulta.com/misc/cx/</a>
				</div>
				<div class="summary">
					<p>Centerplex purchased, improved, and operated 4 Tukwila, Washington, office buildings. Centerplex pioneered micro-offices, virtual tenancies, tenant-friendly draft-your-own web leases, web reservations of conference rooms, high-speed Internet access as a free tenant amenity, and energy-conservation and recycling programs.</p>
				</div>
				<ul class="highlights">
					<li>Earned EPA Energy Star for Small Business Award, 1999</li>
					<li>Lighting upgrade got honorable mention from International Interior Design Association, 1999</li>
					<li>Profiled in Joseph Romm, \u201CCool Companies\u201D (2006)</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="name">
					University of Washington
				</h3>
				<div class="date">
					<span class="startDate">
						1977-09-16
					</span>
					<span class="endDate">
						- 1993-06-15
					</span>
				</div>
				<div class="position">
					Assistant and Associate Professor
				</div>
				<div class="website">
					<a href="http://www.washington.edu">http://www.washington.edu</a>
				</div>
				<div class="summary">
					<p>Research and teaching in political science, with concentrations in language policy, social choice theory, and quantitative research methods.</p>
				</div>
				<ul class="highlights">
					<li>Presented conference papers</li>
					<li>Published book chapters, research articles, and working papers</li>
					<li>Visiting research and teaching appointments at U of Paderborn (Germany) and U of Bielefeld (Germany)</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="name">
					State University of New York at Stony Brook
				</h3>
				<div class="date">
					<span class="startDate">
						1971-01-01
					</span>
					<span class="endDate">
						- 1977-06-15
					</span>
				</div>
				<div class="position">
					Assistant Professor
				</div>
				<div class="website">
					<a href="http://www.stonybrook.edu/">http://www.stonybrook.edu/</a>
				</div>
				<div class="summary">
					<p>Research and teaching in political science, with concentrations in language policy, social choice theory, and quantitative research methods.</p>
				</div>
				<ul class="highlights">
					<li>Presented conference papers</li>
					<li>Published book chapters, research articles, and working papers</li>
					<li>Visiting appointments at U of Mannheim (Germany), McGill U (Montr\xE9al), USSR Academy of Sciences, and Stanford U</li>
				</ul>
			</div>
		</section>
		<section id="volunteer">
			<h2>Volunteer</h2>
			<div class="item">
				<h3 class="company">
					ESLint
				</h3>
				<div class="date">
					<span class="startDate">
						2017-10-12
					</span>
					<span class="endDate">
						- Present
					</span>
				</div>
				<div class="position">
					Contributor
				</div>
				<div class="website">
					<a href="https://eslint.org/">https://eslint.org/</a>
				</div>
				<div class="summary">
					<p>ESLint is the premier linting tool for JavaScript.</p>
				</div>
				<ul class="highlights">
					<li>Submitted 16 merged commits in first month</li>
					<li>Became #26 out of 566 contributors by commit count</li>
					<li>Contributing to absorbtion of JSCS by ESLint</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="company">
					Mozilla Foundation
				</h3>
				<div class="date">
					<span class="startDate">
						2017-02-20
					</span>
					<span class="endDate">
						- Present
					</span>
				</div>
				<div class="position">
					Contributor to MDN Docs
				</div>
				<div class="website">
					<a href="https://developer.mozilla.org">https://developer.mozilla.org</a>
				</div>
				<div class="summary">
					<p>MDN Docs is the premier repository of authoritative developer-facing documentation on HTML, CSS, JavaScript, and related APIs.</p>
				</div>
				<ul class="highlights">
					<li>Made 224 edits in documentation in 8 months</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="company">
					Utilika Foundation
				</h3>
				<div class="date">
					<span class="startDate">
						2004-05-03
					</span>
					<span class="endDate">
						- 2011-12-31
					</span>
				</div>
				<div class="position">
					President
				</div>
				<div class="website">
					<a href="http://stulta.com/misc/uf/">http://stulta.com/misc/uf/</a>
				</div>
				<div class="summary">
					<p>Utilika Foundation supported the work of the UW Turing Center on the PanDictionary project and assumed management of it as the PanLex project when the Turing Center\u2019s work on it ended. The foundation turned the project over to The Long Now Foundation in 2012.</p>
				</div>
				<ul class="highlights">
					<li>Presented technical conference papers at CLAW/AMTA 2006, K-CAP 2007, SAAKM 2007, LISA Berkeley 2009, Machine Translation Summit XII, Coling 2010, and DELPH-IN Summit 2011</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="company">
					Berkeley Town House Cooperative Corporation
				</h3>
				<div class="date">
					<span class="startDate">
						2011-05-24
					</span>
					<span class="endDate">
						- 2011-12-06
					</span>
				</div>
				<div class="position">
					Director and Secretary
				</div>
				<div class="website">
					<a href="http://berkeleytownhouse.com">http://berkeleytownhouse.com</a>
				</div>
				<div class="summary">
					<p>Berkeley Town House is the first senior housing cooperative in the United States, founded in 1960.</p>
				</div>
				<ul class="highlights">
					<li>Helped evaluate prospects of recovery for construction defects</li>
					<li>Recorded official corporate business</li>
					<li>Recovered, organized, and digitized corporate records</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="company">
					Peace Corps
				</h3>
				<div class="date">
					<span class="startDate">
						1964-06-15
					</span>
					<span class="endDate">
						- 1966-06-15
					</span>
				</div>
				<div class="position">
					Volunteer
				</div>
				<div class="website">
					<a href="https://www.peacecorps.gov">https://www.peacecorps.gov</a>
				</div>
				<div class="summary">
					<p>The fourth contingent of Peace Corps Volunteers in Turkey was trained at Portland State University and mostly taught English as a foreign language at the secondary level.</p>
				</div>
				<ul class="highlights">
					<li>Taught in middle and high schools in Nev\u015Fehir and \u0130stanbul, Turkey</li>
					<li>Published articles in a Turkish news magazine (\u201CY\xF6n\u201D) and \u201CPeace Corps Volunteer\u201D</li>
					<li>Published a language textbook</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="company">
					Operation Crossroads Africa
				</h3>
				<div class="date">
					<span class="startDate">
						1963-06-15
					</span>
					<span class="endDate">
						- 1966-08-15
					</span>
				</div>
				<div class="position">
					Volunteer
				</div>
				<div class="website">
					<a href="http://operationcrossroadsafrica.org/">http://operationcrossroadsafrica.org/</a>
				</div>
				<div class="summary">
					<p>Operation Crossroads Africa organizes manual labor projects in Africa with international participation.</p>
				</div>
				<ul class="highlights">
					<li>Participated in building a community center in Nsoatre, Ghana</li>
				</ul>
			</div>
		</section>
		<section id="education">
			<h2>Education</h2>
			<div class="item">
				<div class="date">
					<span class="startDate">
						2017-05-01
					</span>
					<span class="endDate">
						- 2018-02-16
					</span>
				</div>
				<div class="institution">
					Learners Guild
				</div>
				<div class="area">
					software development
				</div>
				<div class="studyType">
					apprenticeship
				</div>
				<div class="gpa">
					GPA: N/A
				</div>
				<ul class="courses">
					<li>Foundations</li>
					<li>Practice</li>
					<li>Apprenticeship</li>
				</ul>
			</div>
			<div class="item">
				<div class="date">
					<span class="startDate">
						2004-03-29
					</span>
					<span class="endDate">
						- 2007-06-01
					</span>
				</div>
				<div class="institution">
					University of Washington
				</div>
				<div class="area">
					Computational linguistics and computer science
				</div>
				<div class="studyType">
					course work
				</div>
				<div class="gpa">
					GPA: 3.97
				</div>
				<ul class="courses">
					<li>CSE 142: Computer Programming I</li>
					<li>Linguistics 461: Syntax I</li>
					<li>Linguistics 462: Syntax II</li>
					<li>Linguistics 472: Introduction to Computational Linguistics</li>
					<li>Linguistics 580: Problems in Linguistics (Introduction to Syntax for Computational Linguistics)</li>
					<li>Linguistics 567: Grammar Engineering</li>
					<li>CSE 143: Computer Programming II</li>
					<li>CSE 373: Data Structures and Algorithms</li>
					<li>CSE 415: Artificial Intelligence</li>
					<li>Linguistics 580: Problems in Linguistics (Lexical Ambiguity)</li>
					<li>CSE 490: Special Topics in CSE (Human\u2013Computer Interaction 1 &amp; 2)</li>
					<li>Linguistics 575: Computational Linguistics Topics</li>
					<li>Other courses audited</li>
				</ul>
			</div>
			<div class="item">
				<div class="date">
					<span class="startDate">
						1966-09-01
					</span>
					<span class="endDate">
						- 1971-04-30
					</span>
				</div>
				<div class="institution">
					The University of Chicago
				</div>
				<div class="area">
					Policital science
				</div>
				<div class="studyType">
					M.A. and Ph.D.
				</div>
				<div class="gpa">
					GPA: unknown
				</div>
				<ul class="courses">
					<li>graduate courses in political science</li>
				</ul>
			</div>
			<div class="item">
				<div class="date">
					<span class="startDate">
						1960-09-01
					</span>
					<span class="endDate">
						- 1964-06-30
					</span>
				</div>
				<div class="institution">
					Harvard University
				</div>
				<div class="area">
					Government
				</div>
				<div class="studyType">
					B.A., cum laude
				</div>
				<div class="gpa">
					GPA: unknown
				</div>
				<ul class="courses">
					<li>undergraduate courses in mathematics, natural and social sciences, and humanities</li>
				</ul>
			</div>
		</section>
		<section id="awards">
			<h2>Awards</h2>
			<div class="item">
				<div class="title">
					Faculty Research Programme grant
				</div>
				<div class="date">
					1985-11-01
				</div>
				<div class="awarder">
					Embassy of Canada to the United States
				</div>
				<div class="summary">
					<p>The Political Economy of Language</p>
				</div>
			</div>
			<div class="item">
				<div class="title">
					Educational software development grant
				</div>
				<div class="date">
					1983-07-01
				</div>
				<div class="awarder">
					University of Maryland
				</div>
				<div class="summary">
					<p>Computer Simulation in Multilingual International Studies</p>
				</div>
			</div>
			<div class="item">
				<div class="title">
					Research grant
				</div>
				<div class="date">
					1978-09-01
				</div>
				<div class="awarder">
					National Science Foundation
				</div>
				<div class="summary">
					<p>Computer Equipment for Experimental Political Science Research</p>
				</div>
			</div>
			<div class="item">
				<div class="title">
					Collaborative research grant
				</div>
				<div class="date">
					1978-05-01
				</div>
				<div class="awarder">
					American Association for the Advancement of Slavic Studies
				</div>
				<div class="summary">
					<p>Language and Ethnicity in the USSR: Advances in Policy Research</p>
				</div>
			</div>
			<div class="item">
				<div class="title">
					Conference travel grant
				</div>
				<div class="date">
					1978-08-01
				</div>
				<div class="awarder">
					Ford Foundation
				</div>
				<div class="summary">
					<p>Travel support for 9th World Congress of Sociology</p>
				</div>
			</div>
			<div class="item">
				<div class="title">
					Research stipend
				</div>
				<div class="date">
					1975-09-01
				</div>
				<div class="awarder">
					American Association for the Advancement of Slavic Studies
				</div>
				<div class="summary">
					<p>Soviet language policy</p>
				</div>
			</div>
			<div class="item">
				<div class="title">
					Awards for visiting research and teaching appointments
				</div>
				<div class="awarder">
					National Academy of Sciences of the USA, Academy of Sciences of the USSR, Social Science Research Council, Alexander von Humboldt-Stiftung, Deutscher Akademischer Austauschdienst, and Council for European Studies
				</div>
				<div class="summary">
					<p>Survey, experimental, and theoretical research</p>
				</div>
			</div>
		</section>
		<section id="publications">
			<h2>Publications</h2>
			<div class="item">
				<div class="name">
					David Kamholz, Jonathan Pool, and Susan M. Colowick, \u201CPanLex: Building a Resource for Panlingual Lexical Translation\u201D
				</div>
				<div class="publisher">
					LREC
				</div>
				<div class="releaseDate">
					2014
				</div>
				<div class="website">
					<a href="https://pdfs.semanticscholar.org/4bf5/387ec770f557525484b7c99be3a0c568651a.pdf">Link</a>
				</div>
				<div class="summary">
					<p>Technical description of the PanLex project of The Long Now Foundation</p>
				</div>
			</div>
			<div class="item">
				<div class="name">
					Patrick Westphal, Claus Stadler, and Jonathan Pool, \u201CCountering language attrition with PanLex and the Web of Data\u201D
				</div>
				<div class="publisher">
					Semantic Web Journal
				</div>
				<div class="releaseDate">
					2015
				</div>
				<div class="website">
					<a href="http://www.semantic-web-journal.net/system/files/swj509.pdf">Link</a>
				</div>
				<div class="summary">
					<p>Technical report on creation of an RDF interface to the PanLex database</p>
				</div>
			</div>
			<div class="item">
				<div class="name">
					Timothy Baldwin, Jonathan Pool, and Susan M. Colowick, \u201CPanLex and LEXTRACT: Translating all Words of all Languages of the World\u201D
				</div>
				<div class="publisher">
					Coling
				</div>
				<div class="releaseDate">
					2010
				</div>
				<div class="website">
					<a href="http://turing.cs.washington.edu/papers/BaldwinEtAl-Lextract.pdf">Link</a>
				</div>
				<div class="summary">
					<p>Technical report on attempts to automate the parsing of heterogeneous multilingual dictionaries for extraction of translations</p>
				</div>
			</div>
			<div class="item">
				<div class="name">
					Katherine Everitt, Christopher Lim, Oren Etzioni, Jonathan Pool, Susan Colowick, and Stephen Soderland, \u201CEvaluating Lemmatic Communication\u201D
				</div>
				<div class="publisher">
					trans-kom
				</div>
				<div class="releaseDate">
					2010
				</div>
				<div class="website">
					<a href="http://www.trans-kom.eu/bd03nr01/trans-kom_03_01_03_Everitt_et_al_Lemmatic_Communication.20100531.pdf">Link</a>
				</div>
				<div class="summary">
					<p>Experiment on conditions of success in lemmatic communication between Spanish- and Hungarian-speaking subjects</p>
				</div>
			</div>
			<div class="item">
				<div class="name">
					Jonathan Pool and S. M. Colowick, \u201CSyntactic Disambiguation for the Semantic Web\u201D
				</div>
				<div class="publisher">
					SAAKM
				</div>
				<div class="releaseDate">
					2007
				</div>
				<div class="website">
					<a href="http://ftp.informatik.rwth-aachen.de/Publications/CEUR-WS/Vol-289/po02.pdf">Link</a>
				</div>
				<div class="summary">
					<p>Experimental comparison of paraphrasal and truth-conditional selection as methods of disambiguation</p>
				</div>
			</div>
			<div class="item">
				<div class="name">
					Jonathan Pool, \u201CThe Multilingual Election Problem\u201D
				</div>
				<div class="publisher">
					Journal of Theoretical Politics
				</div>
				<div class="releaseDate">
					1992
				</div>
				<div class="website">
					<a href="https://old.panlex.org/pubs/etc/multielectprob.pdf">Link</a>
				</div>
				<div class="summary">
					<p>Formal model of political polarization with candidates advocating conflicting policies to dissimilar audiences</p>
				</div>
			</div>
			<div class="item">
				<div class="name">
					Reinhard Selten and Jonathan Pool, \u201CThe Distribution of Foreign Language Skills as a Game Equilibrium\u201D
				</div>
				<div class="publisher">
					Springer
				</div>
				<div class="releaseDate">
					1991
				</div>
				<div class="website">
					<a href="https://pdfs.semanticscholar.org/fe68/86cfbf8c2d18f4175b490dcc8837a14d3a5c.pdf">Link</a>
				</div>
				<div class="summary">
					<p>Model of interactive decisions on acquiring knowledge of additional languages</p>
				</div>
			</div>
			<div class="item">
				<div class="name">
					Jonathan Pool, \u201CThe Official Language Problem\u201D
				</div>
				<div class="publisher">
					American Political Science Review
				</div>
				<div class="releaseDate">
					1991
				</div>
				<div class="website">
					<a href="https://www.jstor.org/stable/1963171">Link</a>
				</div>
				<div class="summary">
					<p>Model of a solution to the problem of choosing optimally efficient official languages while treating speakers of all languages fairly</p>
				</div>
			</div>
			<div class="item">
				<div class="name">
					Bernard Grofman and Jonathan Pool, \u201CHow to Make Cooperation the Optimizing Strategy in a Two-Person Game\u201D
				</div>
				<div class="publisher">
					Journal of Mathematical Sociology
				</div>
				<div class="releaseDate">
					1977
				</div>
				<div class="website">
					<a href="http://www.tandfonline.com/doi/abs/10.1080/0022250X.1977.9989871?src&#x3D;recsys&amp;">Link</a>
				</div>
				<div class="summary">
					<p>Proves the existence of a partial tit\u2010for\u2010tat (matching) strategy that induces an optimizing opponent to cooperate in an iterated Prisoner&#x27;s Dilemma game</p>
				</div>
			</div>
			<div class="item">
				<div class="name">
					Jonathan Pool, \u201CCoalition Formation in Small Groups with Incomplete Communication Networks\u201D
				</div>
				<div class="publisher">
					Journal of Personality and Social Psychology
				</div>
				<div class="releaseDate">
					1976
				</div>
				<div class="website">
					<a href="https://old.panlex.org/pubs/etc/cfsg.pdf">Link</a>
				</div>
				<div class="summary">
					<p>Report of an experiment on the effects of communication restrictions on coalition formation and competitive success</p>
				</div>
			</div>
		</section>
		<section id="skills">
			<h2>Skills</h2>
			<div class="item">
				<div class="name">
					Full-stack JavaScript-based web development
				</div>
				<div class="level">
					<em>junior</em>
				</div>
				<ul class="keywords">
					<li>bcrypt</li>
					<li>body-parser</li>
					<li>Bootstrap</li>
					<li>chai</li>
					<li>cherio</li>
					<li>cookie-session</li>
					<li>cryptr</li>
					<li>CSS</li>
					<li>dotenv</li>
					<li>ejs</li>
					<li>ESLint</li>
					<li>express</li>
					<li>express-session</li>
					<li>express</li>
					<li>HTML</li>
					<li>JavaScript</li>
					<li>JQuery</li>
					<li>Lodash</li>
					<li>Materialize</li>
					<li>mocha</li>
					<li>mongoose</li>
					<li>morgan</li>
					<li>nodemon</li>
					<li>npm</li>
					<li>pg (node-postgres)</li>
					<li>pg-promise</li>
					<li>PM2</li>
					<li>pug</li>
					<li>request-promise-native</li>
					<li>resume-cli</li>
					<li>selenium-webdriver</li>
					<li>session-file-store</li>
					<li>Underscore</li>
					<li>XMLHttpRequest</li>
				</ul>
			</div>
			<div class="item">
				<div class="name">
					Perl-based software development
				</div>
				<div class="level">
					<em>junior</em>
				</div>
				<ul class="keywords">
					<li>cpan</li>
					<li>dbd::pg</li>
					<li>dbi</li>
					<li>LWP::UserAgent</li>
					<li>mojolicious</li>
					<li>Perl</li>
				</ul>
			</div>
			<div class="item">
				<div class="name">
					Java-based software development
				</div>
				<div class="level">
					<em>junior</em>
				</div>
				<ul class="keywords">
					<li>Java</li>
					<li>JavaDoc</li>
					<li>Apache solr</li>
				</ul>
			</div>
			<div class="item">
				<div class="name">
					Other programming languages
				</div>
				<div class="level">
					<em>junior</em>
				</div>
				<ul class="keywords">
					<li>Visual Basic for Applications</li>
					<li>68000 Assembly Language</li>
					<li>APL</li>
				</ul>
			</div>
			<div class="item">
				<div class="name">
					Database systems
				</div>
				<div class="level">
					<em>junior</em>
				</div>
				<ul class="keywords">
					<li>PostgreSQL</li>
					<li>MongoDB</li>
					<li>FileMaker Pro</li>
				</ul>
			</div>
			<div class="item">
				<div class="name">
					Server software
				</div>
				<div class="level">
					<em>junior</em>
				</div>
				<ul class="keywords">
					<li>Postfix</li>
					<li>Apache httpd</li>
					<li>nginx</li>
					<li>puppet</li>
				</ul>
			</div>
			<div class="item">
				<div class="name">
					Services
				</div>
				<div class="level">
					<em>junior</em>
				</div>
				<ul class="keywords">
					<li>Amazon EC2</li>
					<li>Amazon S3</li>
					<li>Amazon Glacier</li>
					<li>Heroku</li>
					<li>SendGrid Web API</li>
					<li>OVH VPS platform</li>
					<li>OVH dedicated-server platform</li>
				</ul>
			</div>
			<div class="item">
				<div class="name">
					Operating systems
				</div>
				<div class="level">
					<em>junior</em>
				</div>
				<ul class="keywords">
					<li>Ubuntu Linux server</li>
					<li>Red Hat Enterprise Linux</li>
					<li>OS X</li>
					<li>Windows</li>
					<li>Cisco firewall/router/switch OS</li>
				</ul>
			</div>
			<div class="item">
				<div class="name">
					Productivity applications
				</div>
				<div class="level">
					<em>junior</em>
				</div>
				<ul class="keywords">
					<li>Apache OpenOffice (Calc, Writer, Impress)</li>
					<li>Microsoft Office (Excel, Word, PowerPoint)</li>
					<li>iWork (Keynote, Pages, Numbers)</li>
				</ul>
			</div>
		</section>
		<section id="languages">
			<h2>Languages</h2>
			<div class="item">
				<div class="language">
					English
				</div>
				<div class="fluency">
					<em>Native speaker</em>
				</div>
			</div>
			<div class="item">
				<div class="language">
					Esperanto
				</div>
				<div class="fluency">
					<em>High</em>
				</div>
			</div>
			<div class="item">
				<div class="language">
					German
				</div>
				<div class="fluency">
					<em>Medium-high</em>
				</div>
			</div>
			<div class="item">
				<div class="language">
					Turkish
				</div>
				<div class="fluency">
					<em>Medium</em>
				</div>
			</div>
			<div class="item">
				<div class="language">
					French
				</div>
				<div class="fluency">
					<em>Medium-low</em>
				</div>
			</div>
			<div class="item">
				<div class="language">
					Russian
				</div>
				<div class="fluency">
					<em>Medium-low</em>
				</div>
			</div>
			<div class="item">
				<div class="language">
					Norwegian (Bokm\xE5l)
				</div>
				<div class="fluency">
					<em>Medium-low</em>
				</div>
			</div>
		</section>
		<section id="interests">
			<h2>Interests</h2>
			<div class="item">
				<div class="name">
					Culinary experimentation
				</div>
				<ul class="keywords">
					<li>Look, ma, no recipe!</li>
				</ul>
			</div>
			<div class="item">
				<div class="name">
					Habit disruption
				</div>
				<ul class="keywords">
					<li>Dvorak keyboard layout</li>
				</ul>
			</div>
			<div class="item">
				<div class="name">
					Urban carless living
				</div>
				<ul class="keywords">
					<li>Walking</li>
					<li>Transit</li>
				</ul>
			</div>
			<div class="item">
				<div class="name">
					The assignment problem
				</div>
				<ul class="keywords">
					<li>Why buyers and sellers are both scarce</li>
				</ul>
			</div>
			<div class="item">
				<div class="name">
					Postspatial society
				</div>
				<ul class="keywords">
					<li>Unrestricted migration</li>
					<li>Nonspatial voting systems</li>
					<li>Teleservices</li>
					<li>Telecollaboration</li>
					<li>Telemeetings</li>
				</ul>
			</div>
		</section>
		<section id="references">
			<h2>References</h2>
			<div class="item">
				<blockquote class="reference">
					To be obtained from references
				</blockquote>
				<div class="name">
					\u2014 To be specified on request
				</div>
			</div>
		</section>
	</body>
</html>
`,"private/pool-versions/20180207-pool.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Jonathan Pool</title>
    <style>
      @media (max-width: 500px) {
        html {
          font-size: 7px;
        }
      }
      @media (min-width: 501px) {
        html {
          font-size: 1.4vw;
        }
      }
      * {
        box-sizing: border-box;
      }
      a {
        overflow-wrap: break-word;
      }
      body {
        background: #eee;
        margin: 3rem 3rem;
      }
      .boxedBulletList {
        padding-bottom: 0.5rem;
        border-style: solid;
        border-width: 1px;
      }
      .compactDiv {
        padding: 0 3rem 2rem 3rem;
        margin-top: 1rem;
        border-style: solid;
        border-width: 0.5rem;
        border-radius: 50%;
        border-color: #33444433;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6
      h7 {
        margin: 0.5rem 0 0 0.3rem;
        color: #344;
      }
      h1,
      .head1 {
        font-size: 2rem;
      }
      h2,
      .head2 {
        font-size: 1.9rem;
        font-style: italic;
      }
      h3,
      .head3 {
        font-size: 1.8rem;
      }
      h4,
      .head4 {
        font-size: 1.7rem;
        font-style: italic;
      }
      h5,
      .head5 {
        font-size: 1.6rem;
      }
      h6,
      .head6 {
        font-size: 1.5rem;
        font-style: italic;
      }
      h7,
      .head7 {
        font-size: 1.4rem;
      }
      .head1,
      .head2,
      .head3,
      .head4,
      .head5,
      .head6,
      .head7 {
        margin-top: 1rem;
        text-align: center;
        font-weight: bolder;
        color: #344;
      }
      .level1 > section:first-child > h1,
      .level2 > section:first-child > h2,
      .level3 > section:first-child > h3 {
        margin-top: 0;
      }
      .level1 {
        border-color: slategray;
      }
      .level2 {
        margin: 0.5vw;
        border-color: mediumslateblue;
      }
      .level3 {
        margin: 0.5vw;
        border-color: mediumturquoise;
      }
      .list-item {
        position: relative;
        left: -0.5rem;
      }
      p {
        display: list-item;
        list-style: inside;
        margin: 0.3rem 0 0 0;
        padding-left: 0.75rem;
        font-size: 1.2rem;
      }
      .pic1 > img {
        position: absolute;
        top: 3rem;
        right: 3rem;
        width: 8rem;
      }
      .rowTable ~ .rowTable {
        margin-top: 0.1rem;
      }
      .rowTablesCircled {
        display: flex;
        justify-content: center;
      }
      .rowTablesCircled td {
        padding-right: 0.3rem;
      }
      section > .tableLH,
      section > .tableTH {
        margin-top: 2rem;
      }
      .boxedBulletList + .boxedBulletList {
        margin-top: -1px;
      }
      section:not(.boxedBulletList) + .boxedBulletList {
        margin-top: 1.5rem;
      }
      strong {
        font-weight: bold;
      }
      table {
        margin: 1rem auto 0 auto;
        border-collapse: collapse;
      }
      .tableLH th {
        text-align: right;
        padding-right: 0.5rem;
      }
      .theme-credit {
        margin-top: 1rem;
        text-align: center;
        font-size: 1rem;
        font-style: italic;
      }
      td {
        padding: 0.2rem;
        border-style: solid;
        border-width: 1px;
        border-color: slategray;
      }
      
    </style>
  </head>
  <body>
    <main>
      <section title="Photograph" class="pic1">
        <img src="http://stulta.com/images/pool-2009.jpg" alt="Photograph of Jonathan Pool">
      </section>
      <section title="Name" class="head1">
        <h1>Jonathan Pool</h1>
      </section>
      <section title="Profession" class="head2">
        <h2>Developer of accessible web applications</h2>
      </section>
      <section title="Repertoire" class="rowTablesCircled">
        <div></div>
        <div class="compactDiv">
          <div class="head3">All phases:</div>
          <table class="rowTable">
            <tr>
              <td>planning</td><td>design</td><td>coding</td><td>linting</td><td>testing</td>
            </tr>
          </table>
          <table class="rowTable">
            <tr>
              <td>documentation</td><td>blogging</td><td>training</td><td>maintenance</td><td>upgrades</td>
            </tr>
          </table>
        </div>
        <div></div>
      </section>
      
      <section title="Contact information">
        <table class="tableLH">
          <tr>
            <th>Email</th><td><a href="mailto:pool@stulta.com">pool@stulta.com</a></td>
          </tr>
          <tr>
            <th>Telephone</th><td>(510) 225-1717</td>
          </tr>
          <tr>
            <th>Mobile telephone</th><td>(510) 225-1700</td>
          </tr>
          <tr>
            <th>Blog</th><td><a href="http://stulta.com/forumo">http://stulta.com/forumo</a></td>
          </tr>
          <tr>
            <th>Mailing address</th><td>555 10th St Apt 312<br>Oakland, California 94607-5208, US</td>
          </tr>
        </table>
      </section>
      <section title="Profiles">
        <table class="tableTH">
          <tr>
            <th>Host</th><th>User ID</th><th>URL</th>
          </tr>
          <tr>
            <td>Github</td><td>jrpool</td><td><a href="https://github.com/jrpool">https://github.com/jrpool</a></td>
          </tr>
          <tr>
            <td>LinkedIn</td><td>jonathanpool</td><td><a href="https://www.linkedin.com/in/jonathanpool/">https://www.linkedin.com/in/jonathanpool/</a></td>
          </tr>
          <tr>
            <td>MDN Web Docs</td><td>JonathanPool</td><td><a href="https://developer.mozilla.org/en-US/profiles/JonathanPool">https://developer.mozilla.org/en-US/profiles/JonathanPool</a></td>
          </tr>
        </table>
      </section>
      <section class="boxedBulletList level1">
        <h1>Current a11y projects</h1>
        <p><span class="list-item"><strong>Accessible Calculator</strong>: <a href="https://github.com/jrpool/calculator/blob/master/README3.md">https://github.com/jrpool/calculator/blob/master/README3.md</a></span></p>
        <p><span class="list-item"><strong>Accessible <code>jsonresume</code> theme</strong>: <a href="https://github.com/jrpool/jsonresume-theme-a11y">https://github.com/jrpool/jsonresume-theme-a11y</a></span></p>
        <p><span class="list-item"><strong>Senior-friendly single-page site</strong>: <a href="https://github.com/jrpool/singlepropertysite">https://github.com/jrpool/singlepropertysite</a></span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>Open-source contributions</h1>
        <p><span class="list-item"><strong>ESLint (#25)</strong>: <a href="https://github.com/eslint/eslint/graphs/contributors">https://github.com/eslint/eslint/graphs/contributors</a></span></p>
        <p><span class="list-item"><strong>MDN Web Docs</strong>: <a href="https://developer.mozilla.org/en-US/dashboards/revisions?user=JonathanPool">https://developer.mozilla.org/en-US/dashboards/revisions?user=JonathanPool</a></span></p>
        <p><span class="list-item"><strong>LearnersGuild/curriculum-app (#3)</strong>: <a href="https://github.com/LearnersGuild/curriculum-app/graphs/contributors">https://github.com/LearnersGuild/curriculum-app/graphs/contributors</a></span></p>
        <p><span class="list-item"><strong>PanLem</strong>: <a href="https://gitlab.com/JonathanPool">https://gitlab.com/JonathanPool</a></span></p>
        <p><span class="list-item"><strong>PanLex developer documentation</strong>: <a href="https://dev.panlex.org">https://dev.panlex.org</a></span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>What I have worked with</h1>
        <p><span class="list-item"><strong>Languages</strong>: JavaScript, Perl, Java, bash, VBA, APL</span></p>
        <p><span class="list-item"><strong>Scopes</strong>: full-stack, back-end, front-end, APIs, SPAs</span></p>
        <p><span class="list-item"><strong>Back-end</strong>: Node.js, NPM, Express, pg, pg-promise, bcrypt, solr, DBI</span></p>
        <p><span class="list-item"><strong>Databases</strong>: PostgreSQL, PL/pgSQL, SQL Server, FileMaker Pro, MongoDB, migrations</span></p>
        <p><span class="list-item"><strong>Front-end</strong>: HTML, CSS, JQuery, Cheerio, Bootstrap, EJS, Pug, Materialize</span></p>
        <p><span class="list-item"><strong>Content and version management</strong>: git, svn, Github, Gitlab, Bitbucket, SourceForge, WordPress</span></p>
        <p><span class="list-item"><strong>Quality control</strong>: ESLint, mocha, chai, Selenium Webdriver, Chrome Developer Tools</span></p>
        <p><span class="list-item"><strong>Accessibility</strong>: WCAG 2.1, ARIA, Chrome/aXe/Siteimprove audits, ADA Title III</span></p>
        <p><span class="list-item"><strong>Internationalization</strong>: Unicode, CLDR, ISO 639, PanLex API</span></p>
        <p><span class="list-item"><strong>Web servers</strong>: Apache httpd, nginx</span></p>
        <p><span class="list-item"><strong>Mail servers</strong>: Postfix, sendmail, SendGrid Web API</span></p>
        <p><span class="list-item"><strong>Remote hosts</strong>: Amazon AWS (EC2, S3, Glacier), OVH</span></p>
        <p><span class="list-item"><strong>OS\u2019s</strong>: Ubuntu, RHEL, OS X, Cisco IOS</span></p>
        <p><span class="list-item"><strong>Configuration management</strong>: Puppet</span></p>
        <p><span class="list-item"><strong>Files</strong>: FineReader, Acrobat, iconv, Atom, nano, ed, sed, GraphicConverter</span></p>
        <p><span class="list-item"><strong>CAD</strong>: VectorWorks</span></p>
        <p><span class="list-item"><strong>Statistics</strong>: SPSS</span></p>
        <p><span class="list-item"><strong>Office apps</strong>: Apache OpenOffice, Apple iWork, Microsoft Office</span></p>
        <p><span class="list-item"><strong>Collaboration</strong>: Slack, Asana, Wrike, Trello, Egnyte</span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>Human languages (best\u2192worst)</h1>
        <p><span class="list-item">English</span></p>
        <p><span class="list-item">Esperanto</span></p>
        <p><span class="list-item">German</span></p>
        <p><span class="list-item">Turkish</span></p>
        <p><span class="list-item">French</span></p>
        <p><span class="list-item">Norwegian Bokm\xE5l</span></p>
        <p><span class="list-item">Russian</span></p>
        <p><span class="list-item">Latin</span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>Professional education</h1>
        <p><span class="list-item"><a href="https://learnersguild.org">Learners Guild</a>, 2017\u20132018: web development</span></p>
        <p><span class="list-item"><a href="https://jpdev.pro/info/docs/pool-uw-transcript.pdf">University of Washington</a>, 2004\u20132007: computer science and linguistics</span></p>
        <p><span class="list-item"><a href="https://www.uchicago.edu">The University of Chicago</a>, 1966\u20131971: political science</span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>Work</h1>
        <p><span class="list-item"><a href="http://longnow.org">The Long Now Foundation</a>, 2012\u20132016: Project Director, PanLex</span></p>
        <p><span class="list-item"><a href="http://stulta.com/misc/cx/">Centerplex</a>, 1990\u20132004: contracting, project management, ADA upgrades</span></p>
        <p><span class="list-item"><a href="http://www.washington.edu">University of Washington</a>, 1977\u20131993: research and teaching</span></p>
        <p><span class="list-item"><a href="http://www.stonybrook.edu">State University of New York at Stony Brook</a>, 1971\u20131977: research and teaching</span></p>
        <p><span class="list-item"><a href="https://www.peacecorps.gov/">Peace Corps</a>, 1964\u20131966: teaching</span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>Software-development grants</h1>
        <p><span class="list-item">University of Maryland</span></p>
        <p><span class="list-item">National Science Foundation</span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>Publication subjects</h1>
        <p><span class="list-item">computational lexicography</span></p>
        <p><span class="list-item">syntactic ambiguity</span></p>
        <p><span class="list-item">game-theoretic models of social choice</span></p>
      </section>
    </main>
    <section class="theme-credit">
      Powered by <a href="https://github.com/jrpool/jsonresume-theme-a11y">jsonresume-theme-a11y</a>
    </section>
  </body>
</html>`,"private/pool-versions/20180207-pool.json":`{
  "lang": {
    "format": "hide",
    "data": "en"
  },
  "order": {
    "format": "hide",
    "data": [
      "picture",
      "name",
      "label",
      "summary",
      "subSummary",
      "contacts",
      "profiles",
      "accessible",
      "openSource",
      "skills",
      "languages",
      "education",
      "work",
      "awards",
      "publications"
    ]
  },
  "legend": {
    "format": "hide",
    "data": {
      "accessible": "Current a11y projects",
      "address": "Address",
      "area": "Subject",
      "awarder": "Awarder",
      "awards": "Software-development grants",
      "city": "City",
      "company": "Company",
      "contacts": "Contact information",
      "countryCode": "Country code",
      "courses": "Courses",
      "creditTo": "Powered by ",
      "date": "Date",
      "duties": "Duties",
      "education": "Professional education",
      "email": "Email",
      "endDate": "End date (yyyy-mm-dd)",
      "fluency": "Fluency",
      "gpa": "GPA",
      "highlights": "Accomplishments",
      "institution": "Institution",
      "interests": "Interests",
      "keywords": "Specifics",
      "label": "Profession",
      "language": "Language",
      "languages": "Human languages (best\u2192worst)",
      "level": "Proficiency",
      "location": "Mailing address",
      "mobilePhone": "Mobile telephone",
      "name": "Name",
      "network": "Host",
      "openSource": "Open-source contributions",
      "organization": "Organization",
      "phone": "Telephone",
      "picture": "Photograph",
      "position": "Position",
      "postalCode": "Postal code",
      "profiles": "Profiles",
      "projectWebsite": "Project website",
      "publications": "Publication subjects",
      "publisher": "Publisher",
      "reference": "Referee",
      "references": "Referees",
      "region": "State",
      "releaseDate": "Year of publication",
      "skills": "What I have worked with",
      "startDate": "Start date (yyyy-mm-dd)",
      "studyType": "Degree or program",
      "summary": "Repertoire",
      "title": "Title",
      "url": "URL",
      "username": "User ID",
      "volunteer": "Volunteering",
      "website": "Blog",
      "work": "Work"
    }
  },
  "picture": {
    "format": "pic1",
    "data": {
      "src": "http://stulta.com/images/pool-2009.jpg",
      "alt": "Photograph of Jonathan Pool"
    }
  },
  "name": {
    "format": "head",
    "treeLevel": 1,
    "data": "Jonathan Pool"
  },
  "label": {
    "format": "head",
    "treeLevel": 2,
    "data": "Developer of accessible web applications"
  },
  "summary": {
    "format": "rowTablesCircled",
    "treeLevel": 3,
    "data": {
      "head": "All phases:",
      "tables": [
        ["planning", "design", "coding", "linting", "testing"],
        ["documentation", "blogging", "training", "maintenance", "upgrades"]
      ]
    }
  },
  "contacts": {
    "format": "tableLeftHead",
    "data": [
      [
        "email",
        {
          "format": "mailLink",
          "data": {
            "href": "pool@stulta.com"
          }
        }
      ],
      ["phone", "(510) 225-1717"],
      ["mobilePhone", "(510) 225-1700"],
      [
        "website",
        {
          "format": "hLink",
          "data": {
            "href": "http://stulta.com/forumo"
          }
        }
      ],
      [
        "location",
        {
          "format": "address",
          "data": {
            "address": "555 10th St Apt 312",
            "postalCode": "94607-5208",
            "city": "Oakland",
            "countryCode": "US",
            "region": "California"
          }
        }
      ]
    ]
  },
  "profiles": {
    "format": "tableTopHead",
    "data": [
      ["network", "username", "url"],
      [
        "Github",
        "jrpool",
        {
          "format": "hLink",
          "data": {
            "href": "https://github.com/jrpool"
          }
        }
      ],
      [
        "LinkedIn",
        "jonathanpool",
        {
          "format": "hLink",
          "data": {
            "href": "https://www.linkedin.com/in/jonathanpool/"
          }
        }
      ],
      [
        "MDN Web Docs",
        "JonathanPool",
        {
          "format": "hLink",
          "data": {
            "href": "https://developer.mozilla.org/en-US/profiles/JonathanPool"
          }
        }
      ]
    ]
  },
  "accessible": {
    "format": "boxedBulletList",
    "treeLevel": 1,
    "data": [
      {
        "format": "headedString",
        "data": {
          "head": "Accessible Calculator",
          "tail": {
            "format": "hLink",
            "data": {
              "href": "https://github.com/jrpool/calculator/blob/master/README3.md"
            }
          },
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": [
            "Accessible ",
            {
              "format": "code",
              "data": "jsonresume"
            },
            " theme"
          ],
          "tail": {
            "format": "hLink",
            "data": {
              "href": "https://github.com/jrpool/jsonresume-theme-a11y"
            }
          },
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Senior-friendly single-page site",
          "tail": {
            "format": "hLink",
            "data": {
              "href": "https://github.com/jrpool/singlepropertysite"
            }
          },
          "delimiter": ": "
        }
      }
    ]
  },
  "openSource": {
    "format": "boxedBulletList",
    "treeLevel": 1,
    "data": [
      {
        "format": "headedString",
        "data": {
          "head": "ESLint (#25)",
          "tail": {
            "format": "hLink",
            "data": {
              "href": "https://github.com/eslint/eslint/graphs/contributors"
            }
          },
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "MDN Web Docs",
          "tail": {
            "format": "hLink",
            "data": {
              "href": "https://developer.mozilla.org/en-US/dashboards/revisions?user=JonathanPool"
            }
          },
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "LearnersGuild/curriculum-app (#3)",
          "tail": {
            "format": "hLink",
            "data": {
              "href": "https://github.com/LearnersGuild/curriculum-app/graphs/contributors"
            }
          },
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "PanLem",
          "tail": {
            "format": "hLink",
            "data": {
              "href": "https://gitlab.com/JonathanPool"
            }
          },
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "PanLex developer documentation",
          "tail": {
            "format": "hLink",
            "data": {
              "href": "https://dev.panlex.org"
            }
          },
          "delimiter": ": "
        }
      }
    ]
  },
  "skills": {
    "format": "boxedBulletList",
    "treeLevel": 1,
    "data": [
      {
        "format": "headedString",
        "data": {
          "head": "Languages",
          "tail": "JavaScript, Perl, Java, bash, VBA, APL",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Scopes",
          "tail": "full-stack, back-end, front-end, APIs, SPAs",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Back-end",
          "tail": "Node.js, NPM, Express, pg, pg-promise, bcrypt, solr, DBI",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Databases",
          "tail": "PostgreSQL, PL/pgSQL, SQL Server, FileMaker Pro, MongoDB, migrations",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Front-end",
          "tail": "HTML, CSS, JQuery, Cheerio, Bootstrap, EJS, Pug, Materialize",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Content and version management",
          "tail": "git, svn, Github, Gitlab, Bitbucket, SourceForge, WordPress",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Quality control",
          "tail": "ESLint, mocha, chai, Selenium Webdriver, Chrome Developer Tools",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Accessibility",
          "tail": "WCAG 2.1, ARIA, Chrome/aXe/Siteimprove audits, ADA Title III",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Internationalization",
          "tail": "Unicode, CLDR, ISO 639, PanLex API",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Web servers",
          "tail": "Apache httpd, nginx",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Mail servers",
          "tail": "Postfix, sendmail, SendGrid Web API",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Remote hosts",
          "tail": "Amazon AWS (EC2, S3, Glacier), OVH",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "OS\u2019s",
          "tail": "Ubuntu, RHEL, OS X, Cisco IOS",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Configuration management",
          "tail": "Puppet",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Files",
          "tail": "FineReader, Acrobat, iconv, Atom, nano, ed, sed, GraphicConverter",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "CAD",
          "tail": "VectorWorks",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Statistics",
          "tail": "SPSS",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Office apps",
          "tail": "Apache OpenOffice, Apple iWork, Microsoft Office",
          "delimiter": ": "
        }
      },
      {
        "format": "headedString",
        "data": {
          "head": "Collaboration",
          "tail": "Slack, Asana, Wrike, Trello, Egnyte",
          "delimiter": ": "
        }
      }
    ]
  },
  "languages": {
    "format": "boxedBulletList",
    "treeLevel": 1,
    "data": [
      "English",
      "Esperanto",
      "German",
      "Turkish",
      "French",
      "Norwegian Bokm\xE5l",
      "Russian",
      "Latin"
    ]
  },
  "education": {
    "format": "boxedBulletList",
    "treeLevel": 1,
    "data": [
      {
        "format": "ed",
        "data": {
          "head": "Learners Guild",
          "url": "https://learnersguild.org",
          "startDate": "2017",
          "endDate": "2018",
          "area": "web development"
        }
      },
      {
        "format": "ed",
        "data": {
          "head": "University of Washington",
          "url": "https://jpdev.pro/info/docs/pool-uw-transcript.pdf",
          "startDate": "2004",
          "endDate": "2007",
        "area": "computer science, user interface design, linguistics"
        }
      },
      {
        "format": "ed",
        "data": {
          "head": "The University of Chicago",
          "url": "https://www.uchicago.edu",
          "startDate": "1966",
          "endDate": "1971",
          "area": "political science"
        }
      }
    ]
  },
  "work": {
    "format": "boxedBulletList",
    "treeLevel": 1,
    "data": [
      {
        "format": "work",
        "data": {
          "head": "The Long Now Foundation",
          "url": "http://longnow.org",
          "startDate": "2012",
          "endDate": "2016",
          "duties": "Project Director, PanLex"
        }
      },
      {
        "format": "work",
        "data": {
          "head": "Centerplex",
          "url": "http://stulta.com/misc/cx/",
          "startDate": "1990",
          "endDate": "2004",
          "duties": "contracting, project management, ADA upgrades"
        }
      },
      {
        "format": "work",
        "data": {
          "head": "University of Washington",
          "url": "http://www.washington.edu",
          "startDate": "1977",
          "endDate": "1993",
          "duties": "research and teaching"
        }
      },
      {
        "format": "work",
        "data": {
          "head": "State University of New York at Stony Brook",
          "url": "http://www.stonybrook.edu",
          "startDate": "1971",
          "endDate": "1977",
          "duties": "research and teaching"
        }
      },
      {
        "format": "work",
        "data": {
          "head": "Peace Corps",
          "url": "https://www.peacecorps.gov/",
          "startDate": "1964",
          "endDate": "1966",
          "duties": "teaching"
        }
      }
    ]
  },
  "awards": {
    "format": "boxedBulletList",
    "treeLevel": 1,
    "data": [
      "University of Maryland",
      "National Science Foundation"
    ]
  },
  "publications": {
    "format": "boxedBulletList",
    "treeLevel": 1,
    "data": [
      "computational lexicography",
      "syntactic ambiguity",
      "game-theoretic models of social choice"
    ]
  }
}
`,"private/pool-versions/20180208-pool.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Jonathan Pool</title>
    <style>
      @media (max-width: 500px) {
        html {
          font-size: 7px;
        }
      }
      @media (min-width: 501px) {
        html {
          font-size: 1.4vw;
        }
      }
      * {
        box-sizing: border-box;
      }
      a {
        overflow-wrap: break-word;
      }
      body {
        background: #eee;
        margin: 3rem 3rem;
      }
      .boxedBulletList {
        padding-bottom: 0.5rem;
        border-style: solid;
        border-width: 1px;
      }
      .compactDiv {
        padding: 0 3rem 2rem 3rem;
        margin-top: 1rem;
        border-style: solid;
        border-width: 0.5rem;
        border-radius: 50%;
        border-color: #33444433;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6
      h7 {
        margin: 0.5rem 0 0 0.3rem;
        color: #344;
      }
      h1,
      .head1 {
        font-size: 2rem;
      }
      h2,
      .head2 {
        font-size: 1.9rem;
        font-style: italic;
      }
      h3,
      .head3 {
        font-size: 1.8rem;
      }
      h4,
      .head4 {
        font-size: 1.7rem;
        font-style: italic;
      }
      h5,
      .head5 {
        font-size: 1.6rem;
      }
      h6,
      .head6 {
        font-size: 1.5rem;
        font-style: italic;
      }
      h7,
      .head7 {
        font-size: 1.4rem;
      }
      .head1,
      .head2,
      .head3,
      .head4,
      .head5,
      .head6,
      .head7 {
        margin-top: 1rem;
        text-align: center;
        font-weight: bolder;
        color: #344;
      }
      .level1 > section:first-child > h1,
      .level2 > section:first-child > h2,
      .level3 > section:first-child > h3 {
        margin-top: 0;
      }
      .level1 {
        border-color: slategray;
      }
      .level2 {
        margin: 0.5vw;
        border-color: mediumslateblue;
      }
      .level3 {
        margin: 0.5vw;
        border-color: mediumturquoise;
      }
      .list-item {
        position: relative;
        left: -0.5rem;
      }
      p {
        display: list-item;
        list-style: inside;
        margin: 0.3rem 0 0 0;
        padding-left: 0.75rem;
        font-size: 1.2rem;
      }
      .pic1 > img {
        position: absolute;
        top: 3rem;
        right: 3rem;
        width: 8rem;
      }
      .rowTable ~ .rowTable {
        margin-top: 0.1rem;
      }
      .rowTablesCircled {
        display: flex;
        justify-content: center;
      }
      .rowTablesCircled td {
        padding-right: 0.3rem;
      }
      section > .tableLH,
      section > .tableTH {
        margin-top: 2rem;
      }
      .boxedBulletList + .boxedBulletList {
        margin-top: -1px;
      }
      section:not(.boxedBulletList) + .boxedBulletList {
        margin-top: 1.5rem;
      }
      strong {
        font-weight: bold;
      }
      table {
        margin: 1rem auto 0 auto;
        border-collapse: collapse;
      }
      .tableLH th {
        text-align: right;
        padding-right: 0.5rem;
      }
      .theme-credit {
        margin-top: 1rem;
        text-align: center;
        font-size: 1rem;
        font-style: italic;
      }
      td {
        padding: 0.2rem;
        border-style: solid;
        border-width: 1px;
        border-color: slategray;
      }
      
    </style>
  </head>
  <body>
    <main>
      <section title="Photograph" class="pic1">
        <img src="http://stulta.com/images/pool-2009.jpg" alt="Photograph of Jonathan Pool">
      </section>
      <section title="Name" class="head1">
        <h1>Jonathan Pool</h1>
      </section>
      <section title="Profession" class="head2">
        <h2>Developer of accessible web applications</h2>
      </section>
      <section title="Repertoire" class="rowTablesCircled">
        <div></div>
        <div class="compactDiv">
          <div class="head3">All phases:</div>
          <table class="rowTable">
            <tr>
              <td>planning</td><td>design</td><td>coding</td><td>linting</td><td>testing</td>
            </tr>
          </table>
          <table class="rowTable">
            <tr>
              <td>documentation</td><td>blogging</td><td>training</td><td>maintenance</td><td>upgrades</td>
            </tr>
          </table>
        </div>
        <div></div>
      </section>
      
      <section title="Contact information">
        <table class="tableLH">
          <tr>
            <th>Email</th><td><a href="mailto:pool@stulta.com">pool@stulta.com</a></td>
          </tr>
          <tr>
            <th>Telephone</th><td>(510) 225-1717</td>
          </tr>
          <tr>
            <th>Mobile telephone</th><td>(510) 225-1700</td>
          </tr>
          <tr>
            <th>Blog</th><td><a href="http://stulta.com/forumo">http://stulta.com/forumo</a></td>
          </tr>
          <tr>
            <th>Mailing address</th><td>555 10th St Apt 312<br>Oakland, California 94607-5208, US</td>
          </tr>
        </table>
      </section>
      <section title="Profiles">
        <table class="tableTH">
          <tr>
            <th>Host</th><th>User ID</th><th>URL</th>
          </tr>
          <tr>
            <td>Github</td><td>jrpool</td><td><a href="https://github.com/jrpool">https://github.com/jrpool</a></td>
          </tr>
          <tr>
            <td>LinkedIn</td><td>jonathanpool</td><td><a href="https://www.linkedin.com/in/jonathanpool/">https://www.linkedin.com/in/jonathanpool/</a></td>
          </tr>
          <tr>
            <td>MDN Web Docs</td><td>JonathanPool</td><td><a href="https://developer.mozilla.org/en-US/profiles/JonathanPool">https://developer.mozilla.org/en-US/profiles/JonathanPool</a></td>
          </tr>
        </table>
      </section>
      <section class="boxedBulletList level1">
        <h1>Current a11y projects</h1>
        <p><span class="list-item"><strong>Accessible Calculator</strong>: <a href="https://github.com/jrpool/calculator/blob/master/README3.md">https://github.com/jrpool/calculator/blob/master/README3.md</a></span></p>
        <p><span class="list-item"><strong>Accessible <code>jsonresume</code> theme</strong>: <a href="https://github.com/jrpool/jsonresume-theme-a11y">https://github.com/jrpool/jsonresume-theme-a11y</a></span></p>
        <p><span class="list-item"><strong>Senior-friendly single-page site</strong>: <a href="https://github.com/jrpool/singlepropertysite">https://github.com/jrpool/singlepropertysite</a></span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>Open-source contributions</h1>
        <p><span class="list-item"><strong>ESLint (#25)</strong>: <a href="https://github.com/eslint/eslint/graphs/contributors">https://github.com/eslint/eslint/graphs/contributors</a></span></p>
        <p><span class="list-item"><strong>MDN Web Docs</strong>: <a href="https://developer.mozilla.org/en-US/dashboards/revisions?user=JonathanPool">https://developer.mozilla.org/en-US/dashboards/revisions?user=JonathanPool</a></span></p>
        <p><span class="list-item"><strong>LearnersGuild/curriculum-app (#3)</strong>: <a href="https://github.com/LearnersGuild/curriculum-app/graphs/contributors">https://github.com/LearnersGuild/curriculum-app/graphs/contributors</a></span></p>
        <p><span class="list-item"><strong>PanLem</strong>: <a href="https://gitlab.com/JonathanPool">https://gitlab.com/JonathanPool</a></span></p>
        <p><span class="list-item"><strong>PanLex developer documentation</strong>: <a href="https://dev.panlex.org">https://dev.panlex.org</a></span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>What I have worked with</h1>
        <p><span class="list-item"><strong>Languages</strong>: JavaScript, Perl, Java, bash, VBA, APL</span></p>
        <p><span class="list-item"><strong>Scopes</strong>: full-stack, back-end, front-end, APIs, SPAs</span></p>
        <p><span class="list-item"><strong>Back-end</strong>: Node.js, NPM, Express, pg, pg-promise, bcrypt, solr, DBI</span></p>
        <p><span class="list-item"><strong>Databases</strong>: PostgreSQL, PL/pgSQL, SQL Server, FileMaker Pro, MongoDB, migrations</span></p>
        <p><span class="list-item"><strong>Front-end</strong>: HTML, CSS, JQuery, Cheerio, Bootstrap, EJS, Pug, Materialize</span></p>
        <p><span class="list-item"><strong>Content and version management</strong>: git, svn, Github, Gitlab, Bitbucket, SourceForge, WordPress</span></p>
        <p><span class="list-item"><strong>Quality control</strong>: ESLint, mocha, chai, Selenium Webdriver, Chrome Developer Tools</span></p>
        <p><span class="list-item"><strong>Accessibility</strong>: WCAG 2.1, ARIA, Chrome/aXe/Siteimprove audits, ADA Title III</span></p>
        <p><span class="list-item"><strong>Internationalization</strong>: Unicode, CLDR, ISO 639, PanLex API</span></p>
        <p><span class="list-item"><strong>Web servers</strong>: Apache httpd, nginx</span></p>
        <p><span class="list-item"><strong>Mail servers</strong>: Postfix, sendmail, SendGrid Web API</span></p>
        <p><span class="list-item"><strong>Remote hosts</strong>: Amazon AWS (EC2, S3, Glacier), OVH</span></p>
        <p><span class="list-item"><strong>OS\u2019s</strong>: Ubuntu, RHEL, OS X, Cisco IOS</span></p>
        <p><span class="list-item"><strong>Configuration management</strong>: Puppet</span></p>
        <p><span class="list-item"><strong>Files</strong>: FineReader, Acrobat, iconv, Atom, nano, ed, sed, GraphicConverter</span></p>
        <p><span class="list-item"><strong>CAD</strong>: VectorWorks</span></p>
        <p><span class="list-item"><strong>Statistics</strong>: SPSS</span></p>
        <p><span class="list-item"><strong>Office apps</strong>: Apache OpenOffice, Apple iWork, Microsoft Office</span></p>
        <p><span class="list-item"><strong>Collaboration</strong>: Slack, Asana, Wrike, Trello, Egnyte</span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>Human languages (best\u2192worst)</h1>
        <p><span class="list-item">English</span></p>
        <p><span class="list-item">Esperanto</span></p>
        <p><span class="list-item">German</span></p>
        <p><span class="list-item">Turkish</span></p>
        <p><span class="list-item">French</span></p>
        <p><span class="list-item">Norwegian Bokm\xE5l</span></p>
        <p><span class="list-item">Russian</span></p>
        <p><span class="list-item">Latin</span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>Professional education</h1>
        <p><span class="list-item"><a href="https://learnersguild.org">Learners Guild</a>, 2017\u20132018: web development</span></p>
        <p><span class="list-item"><a href="https://jpdev.pro/info/docs/pool-uw-transcript.pdf">University of Washington</a>, 2004\u20132007: computer science, user interface design, linguistics</span></p>
        <p><span class="list-item"><a href="https://www.uchicago.edu">The University of Chicago</a>, 1966\u20131971: political science</span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>Work</h1>
        <p><span class="list-item"><a href="http://longnow.org">The Long Now Foundation</a>, 2012\u20132016: Project Director, PanLex</span></p>
        <p><span class="list-item"><a href="http://stulta.com/misc/cx/">Centerplex</a>, 1990\u20132004: contracting, project management, ADA upgrades</span></p>
        <p><span class="list-item"><a href="http://www.washington.edu">University of Washington</a>, 1977\u20131993: research and teaching</span></p>
        <p><span class="list-item"><a href="http://www.stonybrook.edu">State University of New York at Stony Brook</a>, 1971\u20131977: research and teaching</span></p>
        <p><span class="list-item"><a href="https://www.peacecorps.gov/">Peace Corps</a>, 1964\u20131966: teaching</span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>Software-development grants</h1>
        <p><span class="list-item">University of Maryland</span></p>
        <p><span class="list-item">National Science Foundation</span></p>
      </section>
      <section class="boxedBulletList level1">
        <h1>Publication subjects</h1>
        <p><span class="list-item">computational lexicography</span></p>
        <p><span class="list-item">syntactic ambiguity</span></p>
        <p><span class="list-item">game-theoretic models of social choice</span></p>
      </section>
    </main>
    <section class="theme-credit">
      Powered by <a href="https://github.com/jrpool/jsonresume-theme-a11y">jsonresume-theme-a11y</a>
    </section>
  </body>
</html>`,"private/pool-versions/pool-a11y.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>R\xE9sum\xE9: Jonathan Pool</title>
    <style>
      @media (max-width: 650px) {
        html {
          font-size: 10px;
        }
      }
      @media (min-width: 651px), print {
        .cornerPic > img {
          position: absolute;
          top: 3rem;
          right: 3rem;
        }
      }
      @media (min-width: 651px) {
        html {
          font-size: 1.6vw;
        }
      }
      @media print {
        html {
          font-size: 10px;
        }
      }
      * {
        box-sizing: border-box;
      }
      a {
        overflow-wrap: break-word;
      }
      body {
        background: #eee;
        margin: 3rem 3rem;
      }
      .boxedBulletList {
        padding-bottom: 0.5rem;
        border-style: solid;
        border-width: 1px;
      }
      .boxedBulletList + .boxedBulletList {
        margin-top: -1px;
      }
      .boxedBulletList > h1 {
        margin-top: 0.1rem;
      }
      caption {
        margin-bottom: 0.5rem;
        font-weight: bold;
      }
      .center,
      .compact {
        text-align: center;
      }
      .center,
      .rowTablesCircled {
        margin-top: 1.5rem;
      }
      .compact {
        padding: 0 3rem 2rem 3rem;
        border-style: solid;
        border-width: 0.5rem;
        border-radius: 50%;
        border-color: #33444433;
      }
      .cornerPic {
        text-align: center;
      }
      .cornerPic > img {
        width: 8rem;
      }
      h1 {
        margin: 0.5rem 0 0 0.5rem;
        color: #344;
      }
      li,
      td {
        font-size: 1.2rem;
      }
      main > section > h1 {
        margin-top: 2rem;
        text-align: center;
        background-color: lightgray;
      }
      p {
        margin: 0.3rem 0 0.8rem 0.5rem;
      }
      p.size1,
      p.size2 {
        font-weight: bold;
      }
      .rowTable ~ .rowTable {
        margin-top: 0.1rem;
      }
      .rowTablesCircled {
        display: flex;
        justify-content: center;
      }
      .rowTablesCircled td {
        padding-right: 0.3rem;
      }
      section:not(.boxedBulletList) + .boxedBulletList {
        margin-top: 2rem;
      }
      .size1 {
        font-size: 2.2rem;
      }
      .size2 {
        font-size: 2rem;
        font-style: italic;
      }
      .size3 {
        font-size: 1.8rem;
      }
      .size4 {
        font-size: 1.6rem;
        font-style: italic;
      }
      .size5 {
        font-size: 1.4rem;
      }
      .size6 {
        font-size: 1.2rem;
        font-style: italic;
      }
      .size7,
      p {
        font-size: 1rem;
      }
      strong {
        font-weight: bold;
      }
      table {
        margin: 0.5rem auto 0 auto;
        border-collapse: collapse;
      }
      .tableLH th {
        text-align: right;
        padding-right: 0.5rem;
      }
      .theme-credit {
        margin-top: 1rem;
        text-align: center;
        font-size: 1rem;
        font-style: italic;
      }
      td {
        padding: 0.2rem;
        border-style: solid;
        border-width: 1px;
        border-color: slategray;
        text-align: left;
      }
      ul {
        margin: 0.25rem 0;
      }
      
    </style>
  </head>
  <body>
    <main>
      <section title="Photograph" class="cornerPic">
        <img src="http://stulta.com/images/pool-2009.jpg" alt="Photograph of Jonathan Pool">
      </section>
      <section title="Name and occupation" class="center">
        <p class="size1">Jonathan Pool</p>
        <p class="size2">Developer of accessible web applications</p>
      </section>
      <section title="Professional repertoire" class="rowTablesCircled">
        <div></div>
        <div class="compact">
          <h1 class="size4">I do</h1>
          <table class="rowTable">
            <tbody>
              <tr>
                <td>planning</td>
                <td>design</td>
                <td>coding</td>
                <td>linting</td>
                <td>testing</td>
              </tr>
            </tbody>
          </table>
          <table class="rowTable">
            <tbody>
              <tr>
                <td>documentation</td>
                <td>blogging</td>
                <td>training</td>
                <td>maintenance</td>
                <td>upgrades</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div></div>
      </section>
      <section title="Contact information" class="center">
        <table class="tableLH">
          <caption class="size4">
            Find me at
          </caption>
          <tbody>
            <tr>
              <th>Email</th>
              <td><a href="mailto:pool@stulta.com">pool@stulta.com</a></td>
            </tr>
            <tr>
              <th>Telephone</th>
              <td>(510) 225-1700</td>
            </tr>
            <tr>
              <th>Blog</th>
              <td><a href="http://stulta.com/forumo">http://stulta.com/forumo</a></td>
            </tr>
            <tr>
              <th>R\xE9sum\xE9</th>
              <td><a href="https://jpdev.pro">https://jpdev.pro</a></td>
            </tr>
            <tr>
              <th>Mailing address</th>
              <td>901 24th Ave S<br>Seattle, Washington 98144-3032, US</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section title="Profiles" class="center">
        <table class="tableTH">
          <caption class="size4">
            Look me up at
          </caption>
          <thead>
            <tr>
              <th>Host</th>
              <th>User ID</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Github</td>
              <td>jrpool</td>
              <td><a href="https://github.com/jrpool">https://github.com/jrpool</a></td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td>jonathanpool</td>
              <td><a href="https://www.linkedin.com/in/jonathanpool/">https://www.linkedin.com/in/jonathanpool/</a></td>
            </tr>
            <tr>
              <td>MDN Web Docs</td>
              <td>JonathanPool</td>
              <td><a href="https://developer.mozilla.org/en-US/profiles/JonathanPool">https://developer.mozilla.org/en-US/profiles/JonathanPool</a></td>
            </tr>
            <tr>
              <td>Google Scholar</td>
              <td>Jonathan Pool</td>
              <td><a href="https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en&oi=ao">https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en&oi=ao</a></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section title="Projects" class="center">
        <table class="tableTH">
          <caption class="size4">
            I\u2019ve been working on
          </caption>
          <thead>
            <tr>
              <th>Project name</th>
              <th>Github</th>
              <th>Demo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>jsonresume-theme-a11y</code></td>
              <td><a href="https://github.com/jrpool/jsonresume-theme-a11y">jrpool/jsonresume-theme-a11y</a></td>
              <td><a href="https://www.npmjs.com/package/jsonresume-theme-a11y">npm: jsonresume-theme-a11y</a></td>
            </tr>
            <tr>
              <td>Accessible Calculator</td>
              <td><a href="https://github.com/jrpool/calculator">jrpool/calculator</a></td>
              <td><a href="https://jrpool.github.io/calculator/">https://jrpool.github.io/calculator/</a></td>
            </tr>
            <tr>
              <td>DocSearch</td>
              <td><a href="https://github.com/jrpool/docsearch">jrpool/docsearch</a></td>
              <td><a href="https://jpdev.pro/ds/">https://jpdev.pro/ds/</a></td>
            </tr>
            <tr>
              <td>Geezer.pro</td>
              <td><a href="https://github.com/jrpool/geezer.pro">jrpool/geezer.pro</a></td>
              <td><a href="https://geezer.pro">https://geezer.pro</a></td>
            </tr>
            <tr>
              <td>SPA for Seniors</td>
              <td><a href="https://github.com/jrpool/singlepropertysite">jrpool/singlepropertysite</a></td>
              <td><a href="https://berkhouse.info">https://berkhouse.info</a></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section title="Open-source development" class="boxedBulletList">
        <h1 class="size2">I have contributed to</h1>
        <ul>
          <li><strong>ESLint (#25)</strong>: <a href="https://github.com/eslint/eslint/graphs/contributors">https://github.com/eslint/eslint/graphs/contributors</a></li>
          <li><strong>MDN Web Docs</strong>: <a href="https://developer.mozilla.org/en-US/dashboards/revisions?user=JonathanPool">https://developer.mozilla.org/en-US/dashboards/revisions?user=JonathanPool</a></li>
          <li><strong>LearnersGuild/curriculum-app (#3)</strong>: <a href="https://github.com/LearnersGuild/curriculum-app/graphs/contributors">https://github.com/LearnersGuild/curriculum-app/graphs/contributors</a></li>
          <li><strong>PanLem</strong>: <a href="https://jpdev.pro/info/docs/panlem-pool.png">https://jpdev.pro/info/docs/panlem-pool.png</a></li>
          <li><strong>PanLex developer documentation</strong>: <a href="https://dev.panlex.org">https://dev.panlex.org</a></li>
        </ul>
      </section>
      <section title="Skills" class="boxedBulletList">
        <h1 class="size2">I have worked with</h1>
        <ul>
          <li><strong>Languages</strong>: JavaScript, Perl, Java, bash, 68000 Assembly, VBA, APL</li>
          <li><strong>Scopes</strong>: full-stack, back-end, front-end, APIs, SPAs</li>
          <li><strong>Back-end</strong>: Node.js, NPM, Express, pg, pg-promise, bcrypt, solr, DBI</li>
          <li><strong>Databases</strong>: PostgreSQL, PL/pgSQL, SQL Server, FileMaker Pro, MongoDB, migrations</li>
          <li><strong>Front-end</strong>: HTML, CSS, JQuery, Cheerio, Bootstrap, EJS, Pug, Materialize</li>
          <li><strong>Content and version management</strong>: git, svn, Github, Gitlab, Bitbucket, SourceForge, WordPress</li>
          <li><strong>Quality control</strong>: ESLint, mocha, chai, Selenium Webdriver, Chrome Developer Tools</li>
          <li><strong>Accessibility testing</strong>: Chrome Developer Tools, WAVE, aXe, Siteimprove</li>
          <li><strong>Accessible development</strong>: WCAG 2.1, ARIA, VoiceOver, Acrobat Pro DC, ADA Title III</li>
          <li><strong>Internationalization</strong>: Unicode, CLDR, ISO 639, PanLex API</li>
          <li><strong>Web servers</strong>: Apache httpd, nginx</li>
          <li><strong>Mail servers</strong>: Postfix, sendmail, SendGrid Web API</li>
          <li><strong>Remote hosts</strong>: Amazon AWS (EC2, S3, Glacier), Heroku, OVH</li>
          <li><strong>OS\u2019s</strong>: Ubuntu, RHEL, OS X, Cisco IOS</li>
          <li><strong>Configuration management</strong>: Puppet</li>
          <li><strong>Files</strong>: FineReader, Acrobat, iconv, Atom, nano, ed, sed, GraphicConverter</li>
          <li><strong>CAD</strong>: VectorWorks</li>
          <li><strong>Statistics</strong>: SPSS</li>
          <li><strong>Office apps</strong>: Apache OpenOffice, Apple iWork, Microsoft Office</li>
          <li><strong>Collaboration</strong>: Slack, Asana, Wrike, Trello, Egnyte</li>
        </ul>
      </section>
      <section title="Human languages" class="boxedBulletList">
        <h1 class="size2">I can communicate in (best\u2192worst)</h1>
        <ul>
          <li>English</li>
          <li>Esperanto</li>
          <li>German</li>
          <li>Turkish</li>
          <li>French</li>
          <li>Norwegian Bokm\xE5l</li>
          <li>Russian</li>
          <li>Latin</li>
        </ul>
      </section>
      <section title="Education" class="boxedBulletList">
        <h1 class="size2">I have studied at</h1>
        <ul>
          <li><a href="https://learnersguild.org">Learners Guild</a>, 2017-05-01\u20132018-02-16: web development</li>
          <li><a href="https://jpdev.pro/info/docs/pool-uw-transcript.pdf">University of Washington Interdisciplinary Undergraduate Program</a>, 2004-03-29\u20132007-06-01: computer science, UI design, linguistics</li>
          <li><a href="https://jpdev.pro/info/docs/pool-uc-transcript.pdf">The University of Chicago</a>, 1966-09-01\u20131971-04-30: political science</li>
          <li><a href="https://www.harvard.edu">Harvard University</a>, 1960-09-01\u20131964-06-30: government</li>
        </ul>
      </section>
      <section title="Work" class="boxedBulletList">
        <h1 class="size2">I have worked at</h1>
        <ul>
          <li><a href="http://longnow.org">The Long Now Foundation</a>, 2012-01-01\u20132016-12-19: Project Director, PanLex</li>
          <li><a href="http://stulta.com/misc/cx/">Centerplex</a>, 1993-06-16\u20132004-06-11: contracting, project management, ADA upgrades</li>
          <li><a href="https://www.polisci.washington.edu/">University of Washington Department of Political Science</a>, 1977-09-16\u20131993-06-15: research and teaching</li>
          <li><a href="http://www.stonybrook.edu">State University of New York at Stony Brook</a>, 1971-01-01\u20131977-06-15: research and teaching</li>
          <li><a href="https://www.peacecorps.gov/">Peace Corps</a>, 1964-06-15\u20131966-06-15: teaching</li>
        </ul>
      </section>
      <section title="Awards" class="boxedBulletList">
        <h1 class="size2">I have received software grants from</h1>
        <ul>
          <li>University of Maryland</li>
          <li>National Science Foundation</li>
        </ul>
      </section>
      <section title="Publications" class="boxedBulletList">
        <h1 class="size2">I have published about</h1>
        <ul>
          <li>computational lexicography</li>
          <li>syntactic ambiguity</li>
          <li>game-theoretic models of social choice</li>
        </ul>
      </section>
    </main>
    <section title="credit" class="theme-credit">
      Powered by <a href="https://www.npmjs.com/package/jsonresume-theme-a11y">jsonresume-theme-a11y</a>
    </section>
  </body>
</html>`,"private/pool-versions/pool-linkedin.html":`<html><body><h2>Jonathan Pool</h2><p>555 10th St, Apt 312\r
Oakland CA 94607-5208<br />home : 510-225-1717<br /></p><p>Web accessibility researcher</p><p><b>Industry:</b> Information Technology and Services</p><p><b>Summary:</b><br />Recently retooled in web software development and web accessibility at Learners Guild. Previously nonprofit project director and engineer at the PanLex project of The Long Now Foundation, developing a database of all known translations among all words of all human languages.\r
\r
Specialties: web application development, web accessibility, panlingual translation, computational lexicography, human rights, language choice, language policy, commercial real estate, California common-interest development regulation.</p><p><b>Specialties:</b><br /></p><p><b>Associations:</b><br />Utilika Foundation, Esperantic Studies Foundation</p><p><b>Honors:</b><br /></p><p><b>	Experience:</b></p><p>Web Accessibility Researcher<br />geezer.pro<br />February 2018 - Present</p><p>I research web accessibility as a problem in law, regulation, policy, standardization, and software development, for application to the software that I develop and, as capabilities justify, to the needs of employers and/or a (until now hypothetical) company (https://geezer.pro).<br /><br /></p><p>Learner<br />Learners Guild<br />May 2017 - February 2018</p><p>Enrollee (from May 2017 to February 2018) in full-time program of collaborative education in web application development.<br /><br /></p><p>Project Director<br />The Long Now Foundation<br />January 2012 - December 2016</p><p>Led migration of PanLex project (https://panlex.org) sponsorship from Utilika Foundation to The Long Now Foundation. Hired and supervised interns, volunteers, and employees. Managed partnerships. Developed and populated PostgreSQL database of 1.3 billion lexical translations among 6 thousand languages. Developed human and search-engine interfaces to database. Documented project software for end users and developers (https://dev.panlex.org).<br /><br /></p><p>Director<br />Berkeley Town House Cooperative Corporation<br />May 2011 - December 2011</p><p>Elected member of the Board of Directors of the first senior housing cooperative ever founded in the U.S. Also served as Secretary of the corporation from June, 2011, until August, 2011. As secretary, created and curated web-retrievable digital archive of 6 thousand documents.<br /><br /></p><p>President<br />Utilika Foundation<br />May 2004 - December 2011</p><p>Directed grant and internship programs. Directed and led research and development. Directed strategic partnership with University of Washington Turing Center and sponsorship policymaking.<br /><br /></p><p>Chair, Events Committee<br />University of Washington - Turing Center - Computer Science &amp; Engineering<br />2006 - 2009</p><p>Led recruitment, scheduling, and publicity for colloquia and group discussions.<br /><br /></p><p>Proprietor<br />Centerplex<br />1990 - 2004</p><p>Owned and operated office buildings. Reconfigured office buildings as service-rich incubators for small businesses, professionals, and nonprofits. Directed strategic management restructuring and liquidation.<br /><br /></p><p>Assistant and Associate Professor of Political Science<br />University of Washington<br />September 1977 - June 1993</p><p>Teaching and research on political research methods, comparative politics, political theory, language policy, decision theory.<br /><br /></p><p>Assistant Professor of Political Science<br />Stony Brook University<br />January 1971 - June 1977</p><p>Teaching and research in political research methodology, language policy, political theory.<br /><br /></p><p><b>Education:</b></p><p>Learners Guild<br /> Computer Software Engineering<br />2017 - 2018<br />JavaScript-based development of server and client applications and APIs, including database integration, testing, usability, accessibility (a11y), internationalization (i18n), and documentation.<br /><i>Activities and Societies:</i> <br /><br /></p><p>University of Washington<br /> Linguistics, Computer Science<br />2004 - 2009<br />Undergraduate and graduate courses in syntax, semantics, morphology, computational linguistics, programming, data structures, algorithms, artificial intelligence, human rights, public policy.<br /><i>Activities and Societies:</i> <br /><br /></p><p>University of Chicago<br />Ph.D. Political Science<br />1966 - 1971<br />Doctoral study of political science.<br /><i>Activities and Societies:</i> International Language Society<br /><br /></p><p>Harvard University<br />B.A. Government<br />1960 - 1964<br />Undergraduate study of government.<br /><i>Activities and Societies:</i> Harvard-Radcliffe Esperanto Club<br /><br /></p><p><b>Public Profile Url: https://www.linkedin.com/in/jonathanpool</b></p></body></html>`,"private/pool-versions/pool-long/pool-long-a11y.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>R\xE9sum\xE9</title>
    <style>
      @media (max-width: 650px) {
        html {
          font-size: 10px;
        }
      }
      @media (min-width: 651px), print {
        .cornerPic > img {
          position: absolute;
          top: 3rem;
          right: 3rem;
        }
      }
      @media (min-width: 651px) {
        html {
          font-size: 1.6vw;
        }
      }
      @media print {
        html {
          font-size: 10px;
        }
      }
      * {
        box-sizing: border-box;
      }
      a {
        overflow-wrap: break-word;
      }
      body {
        background: #eee;
        margin: 3rem 3rem;
      }
      .boxedBulletList {
        padding-bottom: 0.5rem;
        border-style: solid;
        border-width: 1px;
      }
      .boxedBulletList + .boxedBulletList {
        margin-top: -1px;
      }
      .boxedBulletList > h1 {
        margin-top: 0.1rem;
      }
      caption {
        margin-bottom: 0.5rem;
        font-weight: bold;
      }
      .center,
      .compact {
        text-align: center;
      }
      .center,
      .rowTablesCircled {
        margin-top: 1.5rem;
      }
      .compact {
        padding: 0 3rem 2rem 3rem;
        border-style: solid;
        border-width: 0.5rem;
        border-radius: 50%;
        border-color: #33444433;
      }
      .cornerPic {
        text-align: center;
      }
      .cornerPic > img {
        width: 8rem;
      }
      h1 {
        margin: 0.5rem 0 0 0.5rem;
        color: #344;
      }
      li,
      td {
        font-size: 1.2rem;
      }
      .rowTable ~ .rowTable {
        margin-top: 0.1rem;
      }
      .rowTablesCircled {
        display: flex;
        justify-content: center;
      }
      .rowTablesCircled td {
        padding-right: 0.3rem;
      }
      section:not(.boxedBulletList) + .boxedBulletList {
        margin-top: 2rem;
      }
      .size1 {
        font-size: 2rem;
      }
      .size2 {
        font-size: 1.9rem;
        font-style: italic;
      }
      .size3 {
        font-size: 1.8rem;
      }
      .size4 {
        font-size: 1.7rem;
        font-style: italic;
      }
      .size5 {
        font-size: 1.6rem;
      }
      .size6 {
        font-size: 1.5rem;
        font-style: italic;
      }
      .size7,
      p {
        font-size: 1.4rem;
      }
      strong {
        font-weight: bold;
      }
      table {
        margin: 0.5rem auto 0 auto;
        border-collapse: collapse;
      }
      .tableLH th {
        text-align: right;
        padding-right: 0.5rem;
      }
      .theme-credit {
        margin-top: 1rem;
        text-align: center;
        font-size: 1rem;
        font-style: italic;
      }
      td {
        padding: 0.2rem;
        border-style: solid;
        border-width: 1px;
        border-color: slategray;
        text-align: left;
      }
      ul {
        margin: 0.25rem 0;
      }
      
    </style>
  </head>
  <body>
    <main>
      <section title="Photograph" class="cornerPic">
        <img src="http://stulta.com/images/pool-2009.jpg" alt="Photograph of Jonathan Pool">
      </section>
      <section title="identity" class="center">
        <h1 class="size1">Jonathan Pool</h1>
        <h1 class="size2">Programmer</h1>
      </section>
      <section title="contacts" class="center">
        <table class="tableLH">
          <caption class="size4">
            Contacts
          </caption>
          <tbody>
            <tr>
              <th>Email</th>
              <td><a href="mailto:pool@stulta.com">pool@stulta.com</a></td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>(510) 225-1717</td>
            </tr>
            <tr>
              <th>Website</th>
              <td><a href="http://stulta.com">http://stulta.com</a></td>
            </tr>
            <tr>
              <th>Mailing address</th>
              <td>555 10th St<br>Oakland, California CA 94607-5208, US</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section title="Synopsis" class="left">
        <p>Seeking an opportunity to build, test, revise, document, and learn software that helps people behave more efficiently and fairly</p>
      </section>
      <section title="Profiles" class="center">
        <table class="tableTH">
          <caption class="size4">
            Profiles
          </caption>
          <thead>
            <tr>
              <th>Network</th>
              <th>Username</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Github</td>
              <td>jrpool</td>
              <td><a href="https://github.com/jrpool">https://github.com/jrpool</a></td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td>jonathanpool</td>
              <td><a href="https://www.linkedin.com/in/jonathanpool/">https://www.linkedin.com/in/jonathanpool/</a></td>
            </tr>
            <tr>
              <td>Stack Overflow</td>
              <td>1572601</td>
              <td><a href="https://stackoverflow.com/users/story/1572601">https://stackoverflow.com/users/story/1572601</a></td>
            </tr>
            <tr>
              <td>MDN Web Docs (Mozilla Foundation)</td>
              <td>JonathanPool</td>
              <td><a href="https://developer.mozilla.org/en-US/profiles/JonathanPool">https://developer.mozilla.org/en-US/profiles/JonathanPool</a></td>
            </tr>
            <tr>
              <td>Google Scholar</td>
              <td>qSNjYhQAAAAJ&hl</td>
              <td><a href="https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en">https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en</a></td>
            </tr>
            <tr>
              <td>GitLab</td>
              <td>JonathanPool</td>
              <td><a href="https://gitlab.com/JonathanPool">https://gitlab.com/JonathanPool</a></td>
            </tr>
            <tr>
              <td>Twitter</td>
              <td>JonathanRPool</td>
              <td><a href="https://twitter.com/JonathanRPool">https://twitter.com/JonathanRPool</a></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section title="Work" class="boxedBulletList">
        <h1 class="size2">Work history</h1>
        <ul>
          <li><strong>Company</strong>: The Long Now Foundation<ul>
            <li><strong>Position</strong>: Project Director</li>
            <li><strong>Website</strong>: <a href="http://longnow.org">http://longnow.org</a></li>
            <li><strong>Start date</strong>: 2012-01-01</li>
            <li><strong>End date</strong>: 2015-12-19</li>
            <li><strong>Synopsis</strong>: PanLex is the successor to the PanDictionary project of the Turing Center at the University of Washington (2006\u20132010), directed by Oren Etzioni. PanLex is building an open-source database documenting all known lexical translations among all languages and dialects, living and dead, natural and artificial, with the purpose of making cross-language information exchange and retrieval more effective for languages of all sizes and supporting cross-linguistic research.</li>
            <li><strong>Highlights</strong>: Converted database from MS SQL Server to PostgreSQL/Grew data from 13 million to 24 million lexemes/Grew pairwise translation count to 1.3 billion/Designed and implemented Web interfaces to database for developers, end users, and search engines/Documented standards, practices, and tools for other developers/Presented technical conference papers/Published technical article</li>
          </ul></li>
          <li><strong>Company</strong>: Centerplex<ul>
            <li><strong>Position</strong>: Proprietor</li>
            <li><strong>Website</strong>: <a href="http://stulta.com/misc/cx/">http://stulta.com/misc/cx/</a></li>
            <li><strong>Start date</strong>: 1993-06-16</li>
            <li><strong>End date</strong>: 2004-06-11</li>
            <li><strong>Synopsis</strong>: Centerplex purchased, improved, and operated 4 Tukwila, Washington, office buildings. Centerplex pioneered micro-offices, virtual tenancies, tenant-friendly draft-your-own web leases, web reservations of conference rooms, high-speed Internet access as a free tenant amenity, and energy-conservation and recycling programs.</li>
            <li><strong>Highlights</strong>: Earned EPA Energy Star for Small Business Award, 1999/Lighting upgrade got honorable mention from International Interior Design Association, 1999/Profiled in Joseph Romm, \u201CCool Companies\u201D (2006)</li>
          </ul></li>
          <li><strong>Company</strong>: University of Washington<ul>
            <li><strong>Position</strong>: Assistant and Associate Professor</li>
            <li><strong>Website</strong>: <a href="http://www.washington.edu">http://www.washington.edu</a></li>
            <li><strong>Start date</strong>: 1977-09-16</li>
            <li><strong>End date</strong>: 1993-06-15</li>
            <li><strong>Synopsis</strong>: Research and teaching in political science, with concentrations in language policy, social choice theory, and quantitative research methods.</li>
            <li><strong>Highlights</strong>: Presented conference papers/Published book chapters, research articles, and working papers/Visiting research and teaching appointments at U of Paderborn (Germany) and U of Bielefeld (Germany)</li>
          </ul></li>
          <li><strong>Company</strong>: State University of New York at Stony Brook<ul>
            <li><strong>Position</strong>: Assistant Professor</li>
            <li><strong>Website</strong>: <a href="http://www.stonybrook.edu/">http://www.stonybrook.edu/</a></li>
            <li><strong>Start date</strong>: 1971-01-01</li>
            <li><strong>End date</strong>: 1977-06-15</li>
            <li><strong>Synopsis</strong>: Research and teaching in political science, with concentrations in language policy, social choice theory, and quantitative research methods.</li>
            <li><strong>Highlights</strong>: Presented conference papers/Published book chapters, research articles, and working papers/Visiting appointments at U of Mannheim (Germany), McGill U (Montr\xE9al), USSR Academy of Sciences, and Stanford U</li>
          </ul></li>
        </ul>
      </section>
      <section title="Volunteering" class="boxedBulletList">
        <h1 class="size2">Volunteering</h1>
        <ul>
          <li><strong>Organization</strong>: ESLint<ul>
            <li><strong>Position</strong>: Contributor</li>
            <li><strong>Website</strong>: <a href="https://eslint.org/">https://eslint.org/</a></li>
            <li><strong>Start date</strong>: 2017-10-12</li>
            <li><strong>Synopsis</strong>: ESLint is the premier linting tool for JavaScript.</li>
            <li><strong>Highlights</strong>: Submitted 16 merged commits in first month/Became #26 out of 566 contributors by commit count/Contributing to absorbtion of JSCS by ESLint</li>
          </ul></li>
          <li><strong>Organization</strong>: Mozilla Foundation<ul>
            <li><strong>Position</strong>: Contributor to MDN Docs</li>
            <li><strong>Website</strong>: <a href="https://developer.mozilla.org">https://developer.mozilla.org</a></li>
            <li><strong>Start date</strong>: 2017-02-20</li>
            <li><strong>Synopsis</strong>: MDN Docs is the premier repository of authoritative developer-facing documentation on HTML, CSS, JavaScript, and related APIs.</li>
            <li><strong>Highlights</strong>: Made 224 edits in documentation in 8 months</li>
          </ul></li>
          <li><strong>Organization</strong>: Utilika Foundation<ul>
            <li><strong>Position</strong>: President</li>
            <li><strong>Website</strong>: <a href="http://stulta.com/misc/uf/">http://stulta.com/misc/uf/</a></li>
            <li><strong>Start date</strong>: 2004-05-03</li>
            <li><strong>End date</strong>: 2011-12-31</li>
            <li><strong>Synopsis</strong>: Utilika Foundation supported the work of the UW Turing Center on the PanDictionary project and assumed management of it as the PanLex project when the Turing Center\u2019s work on it ended. The foundation turned the project over to The Long Now Foundation in 2012.</li>
            <li><strong>Highlights</strong>: Presented technical conference papers at CLAW/AMTA 2006, K-CAP 2007, SAAKM 2007, LISA Berkeley 2009, Machine Translation Summit XII, Coling 2010, and DELPH-IN Summit 2011</li>
          </ul></li>
          <li><strong>Organization</strong>: Berkeley Town House Cooperative Corporation<ul>
            <li><strong>Position</strong>: Director and Secretary</li>
            <li><strong>Website</strong>: <a href="http://berkeleytownhouse.com">http://berkeleytownhouse.com</a></li>
            <li><strong>Start date</strong>: 2011-05-24</li>
            <li><strong>End date</strong>: 2011-12-06</li>
            <li><strong>Synopsis</strong>: Berkeley Town House is the first senior housing cooperative in the United States, founded in 1960.</li>
            <li><strong>Highlights</strong>: Helped evaluate prospects of recovery for construction defects/Recorded official corporate business/Recovered, organized, and digitized corporate records</li>
          </ul></li>
          <li><strong>Organization</strong>: Peace Corps<ul>
            <li><strong>Position</strong>: Volunteer</li>
            <li><strong>Website</strong>: <a href="https://www.peacecorps.gov">https://www.peacecorps.gov</a></li>
            <li><strong>Start date</strong>: 1964-06-15</li>
            <li><strong>End date</strong>: 1966-06-15</li>
            <li><strong>Synopsis</strong>: The fourth contingent of Peace Corps Volunteers in Turkey was trained at Portland State University and mostly taught English as a foreign language at the secondary level.</li>
            <li><strong>Highlights</strong>: Taught in middle and high schools in Nev\u015Fehir and \u0130stanbul, Turkey/Published articles in a Turkish news magazine (\u201CY\xF6n\u201D) and \u201CPeace Corps Volunteer\u201D/Published a language textbook</li>
          </ul></li>
          <li><strong>Organization</strong>: Operation Crossroads Africa<ul>
            <li><strong>Position</strong>: Volunteer</li>
            <li><strong>Website</strong>: <a href="http://operationcrossroadsafrica.org/">http://operationcrossroadsafrica.org/</a></li>
            <li><strong>Start date</strong>: 1963-06-15</li>
            <li><strong>End date</strong>: 1966-08-15</li>
            <li><strong>Synopsis</strong>: Operation Crossroads Africa organizes manual labor projects in Africa with international participation.</li>
            <li><strong>Highlights</strong>: Participated in building a community center in Nsoatre, Ghana</li>
          </ul></li>
        </ul>
      </section>
      <section title="Education" class="boxedBulletList">
        <h1 class="size2">Education</h1>
        <ul>
          <li><strong>Institution</strong>: Learners Guild<ul>
            <li><strong>Area</strong>: software development</li>
            <li><strong>Study type</strong>: apprenticeship</li>
            <li><strong>Start date</strong>: 2017-05-01</li>
            <li><strong>End date</strong>: 2018-02-16</li>
            <li><strong>GPA</strong>: N/A</li>
            <li><strong>Courses</strong>: Foundations/Practice/Apprenticeship</li>
          </ul></li>
          <li><strong>Institution</strong>: University of Washington<ul>
            <li><strong>Area</strong>: Computational linguistics and computer science</li>
            <li><strong>Study type</strong>: course work</li>
            <li><strong>Start date</strong>: 2004-03-29</li>
            <li><strong>End date</strong>: 2007-06-01</li>
            <li><strong>GPA</strong>: 3.97</li>
            <li><strong>Courses</strong>: CSE 142: Computer Programming I/Linguistics 461: Syntax I/Linguistics 462: Syntax II/Linguistics 472: Introduction to Computational Linguistics/Linguistics 580: Problems in Linguistics (Introduction to Syntax for Computational Linguistics)/Linguistics 567: Grammar Engineering/CSE 143: Computer Programming II/CSE 373: Data Structures and Algorithms/CSE 415: Artificial Intelligence/Linguistics 580: Problems in Linguistics (Lexical Ambiguity)/CSE 490: Special Topics in CSE (Human\u2013Computer Interaction 1 & 2)/Linguistics 575: Computational Linguistics Topics/Other courses audited</li>
          </ul></li>
          <li><strong>Institution</strong>: The University of Chicago<ul>
            <li><strong>Area</strong>: Policital science</li>
            <li><strong>Study type</strong>: M.A. and Ph.D.</li>
            <li><strong>Start date</strong>: 1966-09-01</li>
            <li><strong>End date</strong>: 1971-04-30</li>
            <li><strong>GPA</strong>: unknown</li>
            <li><strong>Courses</strong>: graduate courses in political science</li>
          </ul></li>
          <li><strong>Institution</strong>: Harvard University<ul>
            <li><strong>Area</strong>: Government</li>
            <li><strong>Study type</strong>: B.A., cum laude</li>
            <li><strong>Start date</strong>: 1960-09-01</li>
            <li><strong>End date</strong>: 1964-06-30</li>
            <li><strong>GPA</strong>: unknown</li>
            <li><strong>Courses</strong>: undergraduate courses in mathematics, natural and social sciences, and humanities</li>
          </ul></li>
        </ul>
      </section>
      <section title="Awards" class="boxedBulletList">
        <h1 class="size2">Grants, awards, and prizes</h1>
        <ul>
          <li><strong>Title</strong>: Faculty Research Programme grant<ul>
            <li><strong>Date</strong>: 1985-11-01</li>
            <li><strong>Awarder</strong>: Embassy of Canada to the United States</li>
            <li><strong>Synopsis</strong>: The Political Economy of Language</li>
          </ul></li>
          <li><strong>Title</strong>: Educational software development grant<ul>
            <li><strong>Date</strong>: 1983-07-01</li>
            <li><strong>Awarder</strong>: University of Maryland</li>
            <li><strong>Synopsis</strong>: Computer Simulation in Multilingual International Studies</li>
          </ul></li>
          <li><strong>Title</strong>: Research grant<ul>
            <li><strong>Date</strong>: 1978-09-01</li>
            <li><strong>Awarder</strong>: National Science Foundation</li>
            <li><strong>Synopsis</strong>: Computer Equipment for Experimental Political Science Research</li>
          </ul></li>
          <li><strong>Title</strong>: Collaborative research grant<ul>
            <li><strong>Date</strong>: 1978-05-01</li>
            <li><strong>Awarder</strong>: American Association for the Advancement of Slavic Studies</li>
            <li><strong>Synopsis</strong>: Language and Ethnicity in the USSR: Advances in Policy Research</li>
          </ul></li>
          <li><strong>Title</strong>: Conference travel grant<ul>
            <li><strong>Date</strong>: 1978-08-01</li>
            <li><strong>Awarder</strong>: Ford Foundation</li>
            <li><strong>Synopsis</strong>: Travel support for 9th World Congress of Sociology</li>
          </ul></li>
          <li><strong>Title</strong>: Research stipend<ul>
            <li><strong>Date</strong>: 1975-09-01</li>
            <li><strong>Awarder</strong>: American Association for the Advancement of Slavic Studies</li>
            <li><strong>Synopsis</strong>: Soviet language policy</li>
          </ul></li>
          <li><strong>Title</strong>: Awards for visiting research and teaching appointments<ul>
            <li><strong>Awarder</strong>: National Academy of Sciences of the USA, Academy of Sciences of the USSR, Social Science Research Council, Alexander von Humboldt-Stiftung, Deutscher Akademischer Austauschdienst, and Council for European Studies</li>
            <li><strong>Synopsis</strong>: Survey, experimental, and theoretical research</li>
          </ul></li>
        </ul>
      </section>
      <section title="Publications" class="boxedBulletList">
        <h1 class="size2">Publications</h1>
        <ul>
          <li><strong>Name</strong>: David Kamholz, Jonathan Pool, and Susan M. Colowick, \u201CPanLex: Building a Resource for Panlingual Lexical Translation\u201D<ul>
            <li><strong>Publisher</strong>: LREC</li>
            <li><strong>Release date</strong>: 2014</li>
            <li><strong>Website</strong>: <a href="https://pdfs.semanticscholar.org/4bf5/387ec770f557525484b7c99be3a0c568651a.pdf">https://pdfs.semanticscholar.org/4bf5/387ec770f557525484b7c99be3a0c568651a.pdf</a></li>
            <li><strong>Synopsis</strong>: Technical description of the PanLex project of The Long Now Foundation</li>
          </ul></li>
          <li><strong>Name</strong>: Patrick Westphal, Claus Stadler, and Jonathan Pool, \u201CCountering language attrition with PanLex and the Web of Data\u201D<ul>
            <li><strong>Publisher</strong>: Semantic Web Journal</li>
            <li><strong>Release date</strong>: 2015</li>
            <li><strong>Website</strong>: <a href="http://www.semantic-web-journal.net/system/files/swj509.pdf">http://www.semantic-web-journal.net/system/files/swj509.pdf</a></li>
            <li><strong>Synopsis</strong>: Technical report on creation of an RDF interface to the PanLex database</li>
          </ul></li>
          <li><strong>Name</strong>: Timothy Baldwin, Jonathan Pool, and Susan M. Colowick, \u201CPanLex and LEXTRACT: Translating all Words of all Languages of the World\u201D<ul>
            <li><strong>Publisher</strong>: Coling</li>
            <li><strong>Release date</strong>: 2010</li>
            <li><strong>Website</strong>: <a href="http://turing.cs.washington.edu/papers/BaldwinEtAl-Lextract.pdf">http://turing.cs.washington.edu/papers/BaldwinEtAl-Lextract.pdf</a></li>
            <li><strong>Synopsis</strong>: Technical report on attempts to automate the parsing of heterogeneous multilingual dictionaries for extraction of translations</li>
          </ul></li>
          <li><strong>Name</strong>: Katherine Everitt, Christopher Lim, Oren Etzioni, Jonathan Pool, Susan Colowick, and Stephen Soderland, \u201CEvaluating Lemmatic Communication\u201D<ul>
            <li><strong>Publisher</strong>: trans-kom</li>
            <li><strong>Release date</strong>: 2010</li>
            <li><strong>Website</strong>: <a href="http://www.trans-kom.eu/bd03nr01/trans-kom_03_01_03_Everitt_et_al_Lemmatic_Communication.20100531.pdf">http://www.trans-kom.eu/bd03nr01/trans-kom_03_01_03_Everitt_et_al_Lemmatic_Communication.20100531.pdf</a></li>
            <li><strong>Synopsis</strong>: Experiment on conditions of success in lemmatic communication between Spanish- and Hungarian-speaking subjects</li>
          </ul></li>
          <li><strong>Name</strong>: Jonathan Pool and S. M. Colowick, \u201CSyntactic Disambiguation for the Semantic Web\u201D<ul>
            <li><strong>Publisher</strong>: SAAKM</li>
            <li><strong>Release date</strong>: 2007</li>
            <li><strong>Website</strong>: <a href="http://ftp.informatik.rwth-aachen.de/Publications/CEUR-WS/Vol-289/po02.pdf">http://ftp.informatik.rwth-aachen.de/Publications/CEUR-WS/Vol-289/po02.pdf</a></li>
            <li><strong>Synopsis</strong>: Experimental comparison of paraphrasal and truth-conditional selection as methods of disambiguation</li>
          </ul></li>
          <li><strong>Name</strong>: Jonathan Pool, \u201CThe Multilingual Election Problem\u201D<ul>
            <li><strong>Publisher</strong>: Journal of Theoretical Politics</li>
            <li><strong>Release date</strong>: 1992</li>
            <li><strong>Website</strong>: <a href="https://old.panlex.org/pubs/etc/multielectprob.pdf">https://old.panlex.org/pubs/etc/multielectprob.pdf</a></li>
            <li><strong>Synopsis</strong>: Formal model of political polarization with candidates advocating conflicting policies to dissimilar audiences</li>
          </ul></li>
          <li><strong>Name</strong>: Reinhard Selten and Jonathan Pool, \u201CThe Distribution of Foreign Language Skills as a Game Equilibrium\u201D<ul>
            <li><strong>Publisher</strong>: Springer</li>
            <li><strong>Release date</strong>: 1991</li>
            <li><strong>Website</strong>: <a href="https://pdfs.semanticscholar.org/fe68/86cfbf8c2d18f4175b490dcc8837a14d3a5c.pdf">https://pdfs.semanticscholar.org/fe68/86cfbf8c2d18f4175b490dcc8837a14d3a5c.pdf</a></li>
            <li><strong>Synopsis</strong>: Model of interactive decisions on acquiring knowledge of additional languages</li>
          </ul></li>
          <li><strong>Name</strong>: Jonathan Pool, \u201CThe Official Language Problem\u201D<ul>
            <li><strong>Publisher</strong>: American Political Science Review</li>
            <li><strong>Release date</strong>: 1991</li>
            <li><strong>Website</strong>: <a href="https://www.jstor.org/stable/1963171">https://www.jstor.org/stable/1963171</a></li>
            <li><strong>Synopsis</strong>: Model of a solution to the problem of choosing optimally efficient official languages while treating speakers of all languages fairly</li>
          </ul></li>
          <li><strong>Name</strong>: Bernard Grofman and Jonathan Pool, \u201CHow to Make Cooperation the Optimizing Strategy in a Two-Person Game\u201D<ul>
            <li><strong>Publisher</strong>: Journal of Mathematical Sociology</li>
            <li><strong>Release date</strong>: 1977</li>
            <li><strong>Website</strong>: <a href="http://www.tandfonline.com/doi/abs/10.1080/0022250X.1977.9989871?src=recsys&">http://www.tandfonline.com/doi/abs/10.1080/0022250X.1977.9989871?src=recsys&</a></li>
            <li><strong>Synopsis</strong>: Proves the existence of a partial tit\u2010for\u2010tat (matching) strategy that induces an optimizing opponent to cooperate in an iterated Prisoner's Dilemma game</li>
          </ul></li>
          <li><strong>Name</strong>: Jonathan Pool, \u201CCoalition Formation in Small Groups with Incomplete Communication Networks\u201D<ul>
            <li><strong>Publisher</strong>: Journal of Personality and Social Psychology</li>
            <li><strong>Release date</strong>: 1976</li>
            <li><strong>Website</strong>: <a href="https://old.panlex.org/pubs/etc/cfsg.pdf">https://old.panlex.org/pubs/etc/cfsg.pdf</a></li>
            <li><strong>Synopsis</strong>: Report of an experiment on the effects of communication restrictions on coalition formation and competitive success</li>
          </ul></li>
        </ul>
      </section>
      <section title="Skills" class="boxedBulletList">
        <h1 class="size2">Skills</h1>
        <ul>
          <li><strong>Name</strong>: Full-stack JavaScript-based web development<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: bcrypt, body-parser, Bootstrap, chai, cherio, cookie-session, cryptr, CSS, dotenv, ejs, ESLint, express, express-session, express, HTML, JavaScript, JQuery, Lodash, Materialize, mocha, mongoose, morgan, nodemon, npm, pg (node-postgres), pg-promise, PM2, pug, request-promise-native, resume-cli, selenium-webdriver, session-file-store, Underscore, XMLHttpRequest</li>
          </ul></li>
          <li><strong>Name</strong>: Perl-based software development<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: cpan, dbd::pg, dbi, LWP::UserAgent, mojolicious, Perl</li>
          </ul></li>
          <li><strong>Name</strong>: Java-based software development<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: Java, JavaDoc, Apache solr</li>
          </ul></li>
          <li><strong>Name</strong>: Other programming languages<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: Visual Basic for Applications, 68000 Assembly Language, APL</li>
          </ul></li>
          <li><strong>Name</strong>: Database systems<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: PostgreSQL, MongoDB, FileMaker Pro</li>
          </ul></li>
          <li><strong>Name</strong>: Server software<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: Postfix, Apache httpd, nginx, puppet</li>
          </ul></li>
          <li><strong>Name</strong>: Services<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: Amazon EC2, Amazon S3, Amazon Glacier, Heroku, SendGrid Web API, OVH VPS platform, OVH dedicated-server platform</li>
          </ul></li>
          <li><strong>Name</strong>: Operating systems<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: Ubuntu Linux server, Red Hat Enterprise Linux, OS X, Windows, Cisco firewall/router/switch OS</li>
          </ul></li>
          <li><strong>Name</strong>: Productivity applications<ul>
            <li><strong>Level</strong>: junior</li>
            <li><strong>Details</strong>: Apache OpenOffice (Calc, Writer, Impress), Microsoft Office (Excel, Word, PowerPoint), iWork (Keynote, Pages, Numbers)</li>
          </ul></li>
        </ul>
      </section>
      <section title="Languages" class="boxedBulletList">
        <h1 class="size2">Languages known</h1>
        <ul>
          <li><strong>Name</strong>: English<ul>
            <li><strong>Level</strong>: Native speaker</li>
          </ul></li>
          <li><strong>Name</strong>: Esperanto<ul>
            <li><strong>Level</strong>: High</li>
          </ul></li>
          <li><strong>Name</strong>: German<ul>
            <li><strong>Level</strong>: Medium-high</li>
          </ul></li>
          <li><strong>Name</strong>: Turkish<ul>
            <li><strong>Level</strong>: Medium</li>
          </ul></li>
          <li><strong>Name</strong>: French<ul>
            <li><strong>Level</strong>: Medium-low</li>
          </ul></li>
          <li><strong>Name</strong>: Russian<ul>
            <li><strong>Level</strong>: Medium-low</li>
          </ul></li>
          <li><strong>Name</strong>: Norwegian (Bokm\xE5l)<ul>
            <li><strong>Level</strong>: Medium-low</li>
          </ul></li>
        </ul>
      </section>
      <section title="Interests" class="boxedBulletList">
        <h1 class="size2">Interests</h1>
        <ul>
          <li><strong>Name</strong>: Culinary experimentation<ul>
            <li><strong>Details</strong>: Look, ma, no recipe!</li>
          </ul></li>
          <li><strong>Name</strong>: Habit disruption<ul>
            <li><strong>Details</strong>: Dvorak keyboard layout</li>
          </ul></li>
          <li><strong>Name</strong>: Urban carless living<ul>
            <li><strong>Details</strong>: Walking, Transit</li>
          </ul></li>
          <li><strong>Name</strong>: The assignment problem<ul>
            <li><strong>Details</strong>: Why buyers and sellers are both scarce</li>
          </ul></li>
          <li><strong>Name</strong>: Postspatial society<ul>
            <li><strong>Details</strong>: Unrestricted migration, Nonspatial voting systems, Teleservices, Telecollaboration, Telemeetings</li>
          </ul></li>
        </ul>
      </section>
      <section title="References" class="boxedBulletList">
        <h1 class="size2">References</h1>
        <ul>
          <li><strong>Name</strong>: To be specified on request<ul>
            <li><strong>Reference</strong>: To be obtained from references</li>
          </ul></li>
        </ul>
      </section>
    </main>
    <section title="credit" class="theme-credit">
      Powered by <a href="https://github.com/jrpool/jsonresume-theme-a11y">jsonresume-theme-a11y</a>
    </section>
  </body>
</html>`,"private/pool-versions/pool-long/pool-long-a11y.json":`{
  "lang": {
    "format": "hide",
    "data": "en"
  },
  "order": {
    "format": "hide",
    "data": [
      "picture",
      "identity",
      "summary",
      "contacts",
      "profiles",
      "work",
      "volunteer",
      "education",
      "awards",
      "publications",
      "skills",
      "languages",
      "interests",
      "references"
    ]
  },
  "legend": {
    "format": "hide",
    "data": {
      "address": "Address",
      "area": "Area",
      "awarder": "Awarder",
      "awards": "Awards",
      "basics": "Basics",
      "city": "City",
      "company": "Company",
      "countryCode": "Country code",
      "courses": "Courses",
      "creditTo": "Powered by ",
      "date": "Date",
      "education": "Education",
      "email": "Email",
      "endDate": "End date",
      "fluency": "Fluency",
      "gpa": "GPA",
      "highlights": "Highlights",
      "institution": "Institution",
      "interests": "Interests",
      "keywords": "Details",
      "label": "Label",
      "language": "Language",
      "languages": "Languages",
      "level": "Level",
      "location": "Mailing address",
      "name": "Name",
      "network": "Network",
      "organization": "Organization",
      "phone": "Phone",
      "picture": "Photograph",
      "position": "Position",
      "postalCode": "Postal code",
      "profiles": "Profiles",
      "publications": "Publications",
      "publisher": "Publisher",
      "reference": "Reference",
      "references": "References",
      "region": "Region",
      "releaseDate": "Release date",
      "skills": "Skills",
      "startDate": "Start date",
      "studyType": "Study type",
      "summary": "Synopsis",
      "title": "Title",
      "url": "URL",
      "username": "Username",
      "volunteer": "Volunteering",
      "website": "Website",
      "work": "Work"
    }
  },
  "picture": {
    "normalFormat": "cornerPic",
    "format": "cornerPic",
    "title": "picture",
    "data": {
      "src": "http://stulta.com/images/pool-2009.jpg",
      "alt": "Photograph of Jonathan Pool"
    }
  },
  "identity": {
    "normalFormat": "center",
    "format": "center",
    "title": "identity",
    "data": [
      {
        "size": 1,
        "text": "Jonathan Pool"
      },
      {
        "size": 2,
        "text": "Programmer"
      }
    ]
  },
  "contacts": {
    "normalFormat": "tableLeftHeads",
    "format": "tableLeftHeads",
    "title": "contacts",
    "data": {
      "table": {
        "caption": {
          "size": 4,
          "data": "Contacts"
        },
        "data": [
          {
            "label": "email",
            "data": [
              {
                "format": "mailLink",
                "data": {
                  "href": "pool@stulta.com"
                }
              }
            ]
          },
          {
            "label": "phone",
            "data": [
              "(510) 225-1717"
            ]
          },
          {
            "label": "website",
            "data": [
              {
                "format": "hLink",
                "data": {
                  "href": "http://stulta.com"
                }
              }
            ]
          },
          {
            "label": "location",
            "data": [
              {
                "format": "address",
                "data": {
                  "point": "555 10th St",
                  "city": "Oakland",
                  "region": "California",
                  "postalCode": "CA 94607-5208",
                  "countryCode": "US"
                }
              }
            ]
          }
        ]
      }
    }
  },
  "summary": {
    "normalFormat": "left",
    "format": "left",
    "title": "summary",
    "data": [
      "Seeking an opportunity to build, test, revise, document, and learn software that helps people behave more efficiently and fairly"
    ]
  },
  "profiles": {
    "normalFormat": "tableTopHead",
    "format": "tableTopHead",
    "title": "profiles",
    "data": {
      "table": {
        "caption": {
          "size": 4,
          "data": "Profiles"
        },
        "label": [
          "network",
          "username",
          "url"
        ],
        "data": [
          [
            "Github",
            "jrpool",
            {
              "format": "hLink",
              "data": {
                "href": "https://github.com/jrpool"
              }
            }
          ],
          [
            "LinkedIn",
            "jonathanpool",
            {
              "format": "hLink",
              "data": {
                "href": "https://www.linkedin.com/in/jonathanpool/"
              }
            }
          ],
          [
            "Stack Overflow",
            "1572601",
            {
              "format": "hLink",
              "data": {
                "href": "https://stackoverflow.com/users/story/1572601"
              }
            }
          ],
          [
            "MDN Web Docs (Mozilla Foundation)",
            "JonathanPool",
            {
              "format": "hLink",
              "data": {
                "href": "https://developer.mozilla.org/en-US/profiles/JonathanPool"
              }
            }
          ],
          [
            "Google Scholar",
            "qSNjYhQAAAAJ&hl",
            {
              "format": "hLink",
              "data": {
                "href": "https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en"
              }
            }
          ],
          [
            "GitLab",
            "JonathanPool",
            {
              "format": "hLink",
              "data": {
                "href": "https://gitlab.com/JonathanPool"
              }
            }
          ],
          [
            "Twitter",
            "JonathanRPool",
            {
              "format": "hLink",
              "data": {
                "href": "https://twitter.com/JonathanRPool"
              }
            }
          ]
        ]
      }
    }
  },
  "work": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "work",
    "data": {
      "head": {
        "size": 2,
        "data": "Work history"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Company",
              "tail": "The Long Now Foundation",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Project Director",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://longnow.org"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2012-01-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2015-12-19",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "PanLex is the successor to the PanDictionary project of the Turing Center at the University of Washington (2006\u20132010), directed by Oren Etzioni. PanLex is building an open-source database documenting all known lexical translations among all languages and dialects, living and dead, natural and artificial, with the purpose of making cross-language information exchange and retrieval more effective for languages of all sizes and supporting cross-linguistic research.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Converted database from MS SQL Server to PostgreSQL/Grew data from 13 million to 24 million lexemes/Grew pairwise translation count to 1.3 billion/Designed and implemented Web interfaces to database for developers, end users, and search engines/Documented standards, practices, and tools for other developers/Presented technical conference papers/Published technical article",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Company",
              "tail": "Centerplex",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Proprietor",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://stulta.com/misc/cx/"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1993-06-16",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2004-06-11",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Centerplex purchased, improved, and operated 4 Tukwila, Washington, office buildings. Centerplex pioneered micro-offices, virtual tenancies, tenant-friendly draft-your-own web leases, web reservations of conference rooms, high-speed Internet access as a free tenant amenity, and energy-conservation and recycling programs.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Earned EPA Energy Star for Small Business Award, 1999/Lighting upgrade got honorable mention from International Interior Design Association, 1999/Profiled in Joseph Romm, \u201CCool Companies\u201D (2006)",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Company",
              "tail": "University of Washington",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Assistant and Associate Professor",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.washington.edu"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1977-09-16",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1993-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Research and teaching in political science, with concentrations in language policy, social choice theory, and quantitative research methods.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Presented conference papers/Published book chapters, research articles, and working papers/Visiting research and teaching appointments at U of Paderborn (Germany) and U of Bielefeld (Germany)",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Company",
              "tail": "State University of New York at Stony Brook",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Assistant Professor",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.stonybrook.edu/"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1971-01-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1977-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Research and teaching in political science, with concentrations in language policy, social choice theory, and quantitative research methods.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Presented conference papers/Published book chapters, research articles, and working papers/Visiting appointments at U of Mannheim (Germany), McGill U (Montr\xE9al), USSR Academy of Sciences, and Stanford U",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "volunteer": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "volunteer",
    "data": {
      "head": {
        "size": 2,
        "data": "Volunteering"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Organization",
              "tail": "ESLint",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Contributor",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://eslint.org/"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2017-10-12",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "ESLint is the premier linting tool for JavaScript.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Submitted 16 merged commits in first month/Became #26 out of 566 contributors by commit count/Contributing to absorbtion of JSCS by ESLint",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Organization",
              "tail": "Mozilla Foundation",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Contributor to MDN Docs",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://developer.mozilla.org"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2017-02-20",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "MDN Docs is the premier repository of authoritative developer-facing documentation on HTML, CSS, JavaScript, and related APIs.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Made 224 edits in documentation in 8 months",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Organization",
              "tail": "Utilika Foundation",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "President",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://stulta.com/misc/uf/"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2004-05-03",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2011-12-31",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Utilika Foundation supported the work of the UW Turing Center on the PanDictionary project and assumed management of it as the PanLex project when the Turing Center\u2019s work on it ended. The foundation turned the project over to The Long Now Foundation in 2012.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Presented technical conference papers at CLAW/AMTA 2006, K-CAP 2007, SAAKM 2007, LISA Berkeley 2009, Machine Translation Summit XII, Coling 2010, and DELPH-IN Summit 2011",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Organization",
              "tail": "Berkeley Town House Cooperative Corporation",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Director and Secretary",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://berkeleytownhouse.com"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2011-05-24",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2011-12-06",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Berkeley Town House is the first senior housing cooperative in the United States, founded in 1960.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Helped evaluate prospects of recovery for construction defects/Recorded official corporate business/Recovered, organized, and digitized corporate records",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Organization",
              "tail": "Peace Corps",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Volunteer",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://www.peacecorps.gov"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1964-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1966-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "The fourth contingent of Peace Corps Volunteers in Turkey was trained at Portland State University and mostly taught English as a foreign language at the secondary level.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Taught in middle and high schools in Nev\u015Fehir and \u0130stanbul, Turkey/Published articles in a Turkish news magazine (\u201CY\xF6n\u201D) and \u201CPeace Corps Volunteer\u201D/Published a language textbook",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Organization",
              "tail": "Operation Crossroads Africa",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Position",
                  "tail": "Volunteer",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://operationcrossroadsafrica.org/"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1963-06-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1966-08-15",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Operation Crossroads Africa organizes manual labor projects in Africa with international participation.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Highlights",
                  "tail": "Participated in building a community center in Nsoatre, Ghana",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "education": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "education",
    "data": {
      "head": {
        "size": 2,
        "data": "Education"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Institution",
              "tail": "Learners Guild",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Area",
                  "tail": "software development",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Study type",
                  "tail": "apprenticeship",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2017-05-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2018-02-16",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "GPA",
                  "tail": "N/A",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Courses",
                  "tail": "Foundations/Practice/Apprenticeship",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Institution",
              "tail": "University of Washington",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Area",
                  "tail": "Computational linguistics and computer science",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Study type",
                  "tail": "course work",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "2004-03-29",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "2007-06-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "GPA",
                  "tail": "3.97",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Courses",
                  "tail": "CSE 142: Computer Programming I/Linguistics 461: Syntax I/Linguistics 462: Syntax II/Linguistics 472: Introduction to Computational Linguistics/Linguistics 580: Problems in Linguistics (Introduction to Syntax for Computational Linguistics)/Linguistics 567: Grammar Engineering/CSE 143: Computer Programming II/CSE 373: Data Structures and Algorithms/CSE 415: Artificial Intelligence/Linguistics 580: Problems in Linguistics (Lexical Ambiguity)/CSE 490: Special Topics in CSE (Human\u2013Computer Interaction 1 & 2)/Linguistics 575: Computational Linguistics Topics/Other courses audited",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Institution",
              "tail": "The University of Chicago",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Area",
                  "tail": "Policital science",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Study type",
                  "tail": "M.A. and Ph.D.",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1966-09-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1971-04-30",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "GPA",
                  "tail": "unknown",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Courses",
                  "tail": "graduate courses in political science",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Institution",
              "tail": "Harvard University",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Area",
                  "tail": "Government",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Study type",
                  "tail": "B.A., cum laude",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Start date",
                  "tail": "1960-09-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "End date",
                  "tail": "1964-06-30",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "GPA",
                  "tail": "unknown",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Courses",
                  "tail": "undergraduate courses in mathematics, natural and social sciences, and humanities",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "awards": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "awards",
    "data": {
      "head": {
        "size": 2,
        "data": "Grants, awards, and prizes"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Title",
              "tail": "Faculty Research Programme grant",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Date",
                  "tail": "1985-11-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Awarder",
                  "tail": "Embassy of Canada to the United States",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "The Political Economy of Language",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Title",
              "tail": "Educational software development grant",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Date",
                  "tail": "1983-07-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Awarder",
                  "tail": "University of Maryland",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Computer Simulation in Multilingual International Studies",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Title",
              "tail": "Research grant",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Date",
                  "tail": "1978-09-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Awarder",
                  "tail": "National Science Foundation",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Computer Equipment for Experimental Political Science Research",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Title",
              "tail": "Collaborative research grant",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Date",
                  "tail": "1978-05-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Awarder",
                  "tail": "American Association for the Advancement of Slavic Studies",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Language and Ethnicity in the USSR: Advances in Policy Research",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Title",
              "tail": "Conference travel grant",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Date",
                  "tail": "1978-08-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Awarder",
                  "tail": "Ford Foundation",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Travel support for 9th World Congress of Sociology",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Title",
              "tail": "Research stipend",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Date",
                  "tail": "1975-09-01",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Awarder",
                  "tail": "American Association for the Advancement of Slavic Studies",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Soviet language policy",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Title",
              "tail": "Awards for visiting research and teaching appointments",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Awarder",
                  "tail": "National Academy of Sciences of the USA, Academy of Sciences of the USSR, Social Science Research Council, Alexander von Humboldt-Stiftung, Deutscher Akademischer Austauschdienst, and Council for European Studies",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Survey, experimental, and theoretical research",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "publications": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "publications",
    "data": {
      "head": {
        "size": 2,
        "data": "Publications"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "David Kamholz, Jonathan Pool, and Susan M. Colowick, \u201CPanLex: Building a Resource for Panlingual Lexical Translation\u201D",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "LREC",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "2014",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://pdfs.semanticscholar.org/4bf5/387ec770f557525484b7c99be3a0c568651a.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Technical description of the PanLex project of The Long Now Foundation",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Patrick Westphal, Claus Stadler, and Jonathan Pool, \u201CCountering language attrition with PanLex and the Web of Data\u201D",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Semantic Web Journal",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "2015",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.semantic-web-journal.net/system/files/swj509.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Technical report on creation of an RDF interface to the PanLex database",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Timothy Baldwin, Jonathan Pool, and Susan M. Colowick, \u201CPanLex and LEXTRACT: Translating all Words of all Languages of the World\u201D",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Coling",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "2010",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://turing.cs.washington.edu/papers/BaldwinEtAl-Lextract.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Technical report on attempts to automate the parsing of heterogeneous multilingual dictionaries for extraction of translations",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Katherine Everitt, Christopher Lim, Oren Etzioni, Jonathan Pool, Susan Colowick, and Stephen Soderland, \u201CEvaluating Lemmatic Communication\u201D",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "trans-kom",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "2010",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.trans-kom.eu/bd03nr01/trans-kom_03_01_03_Everitt_et_al_Lemmatic_Communication.20100531.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Experiment on conditions of success in lemmatic communication between Spanish- and Hungarian-speaking subjects",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Jonathan Pool and S. M. Colowick, \u201CSyntactic Disambiguation for the Semantic Web\u201D",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "SAAKM",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "2007",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://ftp.informatik.rwth-aachen.de/Publications/CEUR-WS/Vol-289/po02.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Experimental comparison of paraphrasal and truth-conditional selection as methods of disambiguation",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Jonathan Pool, \u201CThe Multilingual Election Problem\u201D",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Journal of Theoretical Politics",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "1992",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://old.panlex.org/pubs/etc/multielectprob.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Formal model of political polarization with candidates advocating conflicting policies to dissimilar audiences",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Reinhard Selten and Jonathan Pool, \u201CThe Distribution of Foreign Language Skills as a Game Equilibrium\u201D",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Springer",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "1991",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://pdfs.semanticscholar.org/fe68/86cfbf8c2d18f4175b490dcc8837a14d3a5c.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Model of interactive decisions on acquiring knowledge of additional languages",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Jonathan Pool, \u201CThe Official Language Problem\u201D",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "American Political Science Review",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "1991",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://www.jstor.org/stable/1963171"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Model of a solution to the problem of choosing optimally efficient official languages while treating speakers of all languages fairly",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Bernard Grofman and Jonathan Pool, \u201CHow to Make Cooperation the Optimizing Strategy in a Two-Person Game\u201D",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Journal of Mathematical Sociology",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "1977",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "http://www.tandfonline.com/doi/abs/10.1080/0022250X.1977.9989871?src=recsys&"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Proves the existence of a partial tit\u2010for\u2010tat (matching) strategy that induces an optimizing opponent to cooperate in an iterated Prisoner's Dilemma game",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Jonathan Pool, \u201CCoalition Formation in Small Groups with Incomplete Communication Networks\u201D",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Publisher",
                  "tail": "Journal of Personality and Social Psychology",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Release date",
                  "tail": "1976",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Website",
                  "tail": {
                    "format": "hLink",
                    "data": {
                      "href": "https://old.panlex.org/pubs/etc/cfsg.pdf"
                    }
                  },
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Synopsis",
                  "tail": "Report of an experiment on the effects of communication restrictions on coalition formation and competitive success",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "skills": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "skills",
    "data": {
      "head": {
        "size": 2,
        "data": "Skills"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Full-stack JavaScript-based web development",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "bcrypt, body-parser, Bootstrap, chai, cherio, cookie-session, cryptr, CSS, dotenv, ejs, ESLint, express, express-session, express, HTML, JavaScript, JQuery, Lodash, Materialize, mocha, mongoose, morgan, nodemon, npm, pg (node-postgres), pg-promise, PM2, pug, request-promise-native, resume-cli, selenium-webdriver, session-file-store, Underscore, XMLHttpRequest",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Perl-based software development",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "cpan, dbd::pg, dbi, LWP::UserAgent, mojolicious, Perl",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Java-based software development",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Java, JavaDoc, Apache solr",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Other programming languages",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Visual Basic for Applications, 68000 Assembly Language, APL",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Database systems",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "PostgreSQL, MongoDB, FileMaker Pro",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Server software",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Postfix, Apache httpd, nginx, puppet",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Services",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Amazon EC2, Amazon S3, Amazon Glacier, Heroku, SendGrid Web API, OVH VPS platform, OVH dedicated-server platform",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Operating systems",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Ubuntu Linux server, Red Hat Enterprise Linux, OS X, Windows, Cisco firewall/router/switch OS",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Productivity applications",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "junior",
                  "delimiter": ": "
                }
              },
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Apache OpenOffice (Calc, Writer, Impress), Microsoft Office (Excel, Word, PowerPoint), iWork (Keynote, Pages, Numbers)",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "languages": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "languages",
    "data": {
      "head": {
        "size": 2,
        "data": "Languages known"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "English",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "Native speaker",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Esperanto",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "High",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "German",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "Medium-high",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Turkish",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "Medium",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "French",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "Medium-low",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Russian",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "Medium-low",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Norwegian (Bokm\xE5l)",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Level",
                  "tail": "Medium-low",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "interests": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "interests",
    "data": {
      "head": {
        "size": 2,
        "data": "Interests"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Culinary experimentation",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Look, ma, no recipe!",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Habit disruption",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Dvorak keyboard layout",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Urban carless living",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Walking, Transit",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "The assignment problem",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Why buyers and sellers are both scarce",
                  "delimiter": ": "
                }
              }
            ]
          }
        ],
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "Postspatial society",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Details",
                  "tail": "Unrestricted migration, Nonspatial voting systems, Teleservices, Telecollaboration, Telemeetings",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  },
  "references": {
    "normalFormat": "boxedBulletList",
    "format": "boxedBulletList",
    "title": "references",
    "data": {
      "head": {
        "size": 2,
        "data": "References"
      },
      "list": [
        [
          {
            "format": "headedString",
            "data": {
              "head": "Name",
              "tail": "To be specified on request",
              "delimiter": ": "
            }
          },
          {
            "format": "bulletList",
            "data": [
              {
                "format": "headedString",
                "data": {
                  "head": "Reference",
                  "tail": "To be obtained from references",
                  "delimiter": ": "
                }
              }
            ]
          }
        ]
      ]
    }
  }
}`,"private/pool-versions/pool-long/pool-long-std.json":`{
  "basics": {
    "name": "Jonathan Pool",
    "label": "Programmer",
    "picture": "http://stulta.com/images/pool-2009.jpg",
    "email": "pool@stulta.com",
    "phone": "(510) 225-1717",
    "mobilePhone": "(510) 225-1700",
    "website": "http://stulta.com",
    "summary": "Seeking an opportunity to build, test, revise, document, and learn software that helps people behave more efficiently and fairly",
    "location": {
      "address": "555 10th St",
      "postalCode": "CA 94607-5208",
      "city": "Oakland",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "Github",
        "username": "jrpool",
        "url": "https://github.com/jrpool"
      },
      {
        "network": "LinkedIn",
        "username": "jonathanpool",
        "url": "https://www.linkedin.com/in/jonathanpool/"
      },
      {
        "network": "Stack Overflow",
        "username": "1572601",
        "url": "https://stackoverflow.com/users/story/1572601"
      },
      {
        "network": "MDN Web Docs (Mozilla Foundation)",
        "username": "JonathanPool",
        "url": "https://developer.mozilla.org/en-US/profiles/JonathanPool"
      },
      {
        "network": "Google Scholar",
        "username": "qSNjYhQAAAAJ&hl",
        "url": "https://scholar.google.com/citations?user=qSNjYhQAAAAJ&hl=en"
      },
      {
        "network": "GitLab",
        "username": "JonathanPool",
        "url": "https://gitlab.com/JonathanPool"
      },
      {
        "network": "Twitter",
        "username": "JonathanRPool",
        "url": "https://twitter.com/JonathanRPool"
      }
    ]
  },
  "skills": [
    {
      "name": "Full-stack JavaScript-based web development",
      "level": "junior",
      "keywords": [
        "bcrypt",
        "body-parser",
        "Bootstrap",
        "chai",
        "cherio",
        "cookie-session",
        "cryptr",
        "CSS",
        "dotenv",
        "ejs",
        "ESLint",
        "express",
        "express-session",
        "express",
        "HTML",
        "JavaScript",
        "JQuery",
        "Lodash",
        "Materialize",
        "mocha",
        "mongoose",
        "morgan",
        "nodemon",
        "npm",
        "pg (node-postgres)",
        "pg-promise",
        "PM2",
        "pug",
        "request-promise-native",
        "resume-cli",
        "selenium-webdriver",
        "session-file-store",
        "Underscore",
        "XMLHttpRequest"
      ]
    },
    {
      "name": "Perl-based software development",
      "level": "junior",
      "keywords": [
        "cpan",
        "dbd::pg",
        "dbi",
        "LWP::UserAgent",
        "mojolicious",
        "Perl"
      ]
    },
    {
      "name": "Java-based software development",
      "level": "junior",
      "keywords": [
        "Java",
        "JavaDoc",
        "Apache solr"
      ]
    },
    {
      "name": "Other programming languages",
      "level": "junior",
      "keywords": [
        "Visual Basic for Applications",
        "68000 Assembly Language",
        "APL"
      ]
    },
    {
      "name": "Database systems",
      "level": "junior",
      "keywords": [
        "PostgreSQL",
        "MongoDB",
        "FileMaker Pro"
      ]
    },
    {
      "name": "Server software",
      "level": "junior",
      "keywords": [
        "Postfix",
        "Apache httpd",
        "nginx",
        "puppet"
      ]
    },
    {
      "name": "Services",
      "level": "junior",
      "keywords": [
        "Amazon EC2",
        "Amazon S3",
        "Amazon Glacier",
        "Heroku",
        "SendGrid Web API",
        "OVH VPS platform",
        "OVH dedicated-server platform"
      ]
    },
    {
      "name": "Operating systems",
      "level": "junior",
      "keywords": [
        "Ubuntu Linux server",
        "Red Hat Enterprise Linux",
        "OS X",
        "Windows",
        "Cisco firewall/router/switch OS"
      ]
    },
    {
      "name": "Productivity applications",
      "level": "junior",
      "keywords": [
        "Apache OpenOffice (Calc, Writer, Impress)",
        "Microsoft Office (Excel, Word, PowerPoint)",
        "iWork (Keynote, Pages, Numbers)"
      ]
    }
  ],
  "languages": [
    {
      "name": "English",
      "level": "Native speaker"
    },
    {
      "name": "Esperanto",
      "level": "High"
    },
    {
      "name": "German",
      "level": "Medium-high"
    },
    {
      "name": "Turkish",
      "level": "Medium"
    },
    {
      "name": "French",
      "level": "Medium-low"
    },
    {
      "name": "Russian",
      "level": "Medium-low"
    },
    {
      "name": "Norwegian (Bokm\xE5l)",
      "level": "Medium-low"
    }
  ],
  "education": [
    {
      "institution": "Learners Guild",
      "website": "https://www.learnersguild.org/",
      "area": "software development",
      "studyType": "apprenticeship",
      "startDate": "2017-05-01",
      "endDate": "2018-02-16",
      "gpa": "N/A",
      "courses": [
        "Foundations",
        "Practice",
        "Apprenticeship"
      ]
    },
    {
      "institution": "University of Washington",
      "website": "http://www.washington.edu",
      "area": "Computational linguistics and computer science",
      "studyType": "course work",
      "startDate": "2004-03-29",
      "endDate": "2007-06-01",
      "gpa": "3.97",
      "courses": [
        "CSE 142: Computer Programming I",
        "Linguistics 461: Syntax I",
        "Linguistics 462: Syntax II",
        "Linguistics 472: Introduction to Computational Linguistics",
        "Linguistics 580: Problems in Linguistics (Introduction to Syntax for Computational Linguistics)",
        "Linguistics 567: Grammar Engineering",
        "CSE 143: Computer Programming II",
        "CSE 373: Data Structures and Algorithms",
        "CSE 415: Artificial Intelligence",
        "Linguistics 580: Problems in Linguistics (Lexical Ambiguity)",
        "CSE 490: Special Topics in CSE (Human\u2013Computer Interaction 1 & 2)",
        "Linguistics 575: Computational Linguistics Topics",
        "Other courses audited"
      ]
    },
    {
      "institution": "The University of Chicago",
      "website": "https://www.uchicago.edu",
      "area": "Policital science",
      "studyType": "M.A. and Ph.D.",
      "startDate": "1966-09-01",
      "endDate": "1971-04-30",
      "gpa": "unknown",
      "courses": [
        "graduate courses in political science"
      ]
    },
    {
      "institution": "Harvard University",
      "website": "https://www.harvard.edu",
      "area": "Government",
      "studyType": "B.A., cum laude",
      "startDate": "1960-09-01",
      "endDate": "1964-06-30",
      "gpa": "unknown",
      "courses": [
        "undergraduate courses in mathematics, natural and social sciences, and humanities"
      ]
    }
  ],
  "work": [
    {
      "company":"The Long Now Foundation",
      "position": "Project Director",
      "website": "http://longnow.org",
      "projectWebsite": "https:panlex.org",
      "startDate": "2012-01-01",
      "endDate": "2015-12-19",
      "summary": "PanLex is the successor to the PanDictionary project of the Turing Center at the University of Washington (2006\u20132010), directed by Oren Etzioni. PanLex is building an open-source database documenting all known lexical translations among all languages and dialects, living and dead, natural and artificial, with the purpose of making cross-language information exchange and retrieval more effective for languages of all sizes and supporting cross-linguistic research.",
      "highlights": [
        "Converted database from MS SQL Server to PostgreSQL",
        "Grew data from 13 million to 24 million lexemes",
        "Grew pairwise translation count to 1.3 billion",
        "Designed and implemented Web interfaces to database for developers, end users, and search engines",
        "Documented standards, practices, and tools for other developers",
        "Presented technical conference papers",
        "Published technical article"
      ]
    },
    {
      "company": "Centerplex",
      "position": "Proprietor",
      "website": "http://stulta.com/misc/cx/",
      "startDate": "1993-06-16",
      "endDate": "2004-06-11",
      "summary": "Centerplex purchased, improved, and operated 4 Tukwila, Washington, office buildings. Centerplex pioneered micro-offices, virtual tenancies, tenant-friendly draft-your-own web leases, web reservations of conference rooms, high-speed Internet access as a free tenant amenity, and energy-conservation and recycling programs.",
      "highlights": [
        "Earned EPA Energy Star for Small Business Award, 1999",
        "Lighting upgrade got honorable mention from International Interior Design Association, 1999",
        "Profiled in Joseph Romm, \u201CCool Companies\u201D (2006)"
      ]
    },
    {
      "company": "University of Washington",
      "position": "Assistant and Associate Professor",
      "website": "http://www.washington.edu",
      "startDate": "1977-09-16",
      "endDate": "1993-06-15",
      "summary": "Research and teaching in political science, with concentrations in language policy, social choice theory, and quantitative research methods.",
      "highlights": [
        "Presented conference papers",
        "Published book chapters, research articles, and working papers",
        "Visiting research and teaching appointments at U of Paderborn (Germany) and U of Bielefeld (Germany)"
      ]
    },
    {
      "company": "State University of New York at Stony Brook",
      "position": "Assistant Professor",
      "website": "http://www.stonybrook.edu/",
      "startDate": "1971-01-01",
      "endDate": "1977-06-15",
      "summary": "Research and teaching in political science, with concentrations in language policy, social choice theory, and quantitative research methods.",
      "highlights": [
        "Presented conference papers",
        "Published book chapters, research articles, and working papers",
        "Visiting appointments at U of Mannheim (Germany), McGill U (Montr\xE9al), USSR Academy of Sciences, and Stanford U"
      ]
    }
  ],
  "volunteer": [
    {
      "organization": "ESLint",
      "position": "Contributor",
      "website": "https://eslint.org/",
      "startDate": "2017-10-12",
      "summary": "ESLint is the premier linting tool for JavaScript.",
      "highlights": [
        "Submitted 16 merged commits in first month",
        "Became #26 out of 566 contributors by commit count",
        "Contributing to absorbtion of JSCS by ESLint"
      ]
    },
    {
      "organization": "Mozilla Foundation",
      "position": "Contributor to MDN Docs",
      "website": "https://developer.mozilla.org",
      "startDate": "2017-02-20",
      "summary": "MDN Docs is the premier repository of authoritative developer-facing documentation on HTML, CSS, JavaScript, and related APIs.",
      "highlights": [
        "Made 224 edits in documentation in 8 months"
      ]
    },
    {
      "organization": "Utilika Foundation",
      "position": "President",
      "website": "http://stulta.com/misc/uf/",
      "startDate": "2004-05-03",
      "endDate": "2011-12-31",
      "summary": "Utilika Foundation supported the work of the UW Turing Center on the PanDictionary project and assumed management of it as the PanLex project when the Turing Center\u2019s work on it ended. The foundation turned the project over to The Long Now Foundation in 2012.",
      "highlights": [
        "Presented technical conference papers at CLAW/AMTA 2006, K-CAP 2007, SAAKM 2007, LISA Berkeley 2009, Machine Translation Summit XII, Coling 2010, and DELPH-IN Summit 2011"
      ]
    },
    {
      "organization": "Berkeley Town House Cooperative Corporation",
      "position": "Director and Secretary",
      "website": "http://berkeleytownhouse.com",
      "startDate": "2011-05-24",
      "endDate": "2011-12-06",
      "summary": "Berkeley Town House is the first senior housing cooperative in the United States, founded in 1960.",
      "highlights": [
        "Helped evaluate prospects of recovery for construction defects",
        "Recorded official corporate business",
        "Recovered, organized, and digitized corporate records"
      ]
    },
    {
      "organization": "Peace Corps",
      "position": "Volunteer",
      "website": "https://www.peacecorps.gov",
      "startDate": "1964-06-15",
      "endDate": "1966-06-15",
      "summary": "The fourth contingent of Peace Corps Volunteers in Turkey was trained at Portland State University and mostly taught English as a foreign language at the secondary level.",
      "highlights": [
        "Taught in middle and high schools in Nev\u015Fehir and \u0130stanbul, Turkey",
        "Published articles in a Turkish news magazine (\u201CY\xF6n\u201D) and \u201CPeace Corps Volunteer\u201D",
        "Published a language textbook"
      ]
    },
    {
      "organization": "Operation Crossroads Africa",
      "position": "Volunteer",
      "website": "http://operationcrossroadsafrica.org/",
      "startDate": "1963-06-15",
      "endDate": "1966-08-15",
      "summary": "Operation Crossroads Africa organizes manual labor projects in Africa with international participation.",
      "highlights": [
        "Participated in building a community center in Nsoatre, Ghana"
      ]
    }
  ],
  "awards": [
    {
      "title": "Faculty Research Programme grant",
      "date": "1985-11-01",
      "awarder": "Embassy of Canada to the United States",
      "summary": "The Political Economy of Language"
    },
    {
      "title": "Educational software development grant",
      "date": "1983-07-01",
      "awarder": "University of Maryland",
      "summary": "Computer Simulation in Multilingual International Studies"
    },
    {
      "title": "Research grant",
      "date": "1978-09-01",
      "awarder": "National Science Foundation",
      "summary": "Computer Equipment for Experimental Political Science Research"
    },
    {
      "title": "Collaborative research grant",
      "date": "1978-05-01",
      "awarder": "American Association for the Advancement of Slavic Studies",
      "summary": "Language and Ethnicity in the USSR: Advances in Policy Research"
    },
    {
      "title": "Conference travel grant",
      "date": "1978-08-01",
      "awarder": "Ford Foundation",
      "summary": "Travel support for 9th World Congress of Sociology"
    },
    {
      "title": "Research stipend",
      "date": "1975-09-01",
      "awarder": "American Association for the Advancement of Slavic Studies",
      "summary": "Soviet language policy"
    },
    {
      "title": "Awards for visiting research and teaching appointments",
      "startDate": "1973",
      "endDate": "1975",
      "awarder": "National Academy of Sciences of the USA, Academy of Sciences of the USSR, Social Science Research Council, Alexander von Humboldt-Stiftung, Deutscher Akademischer Austauschdienst, and Council for European Studies",
      "summary": "Survey, experimental, and theoretical research"
    }
  ],
  "publications": [
    {
      "name": "David Kamholz, Jonathan Pool, and Susan M. Colowick, \u201CPanLex: Building a Resource for Panlingual Lexical Translation\u201D",
      "publisher": "LREC",
      "releaseDate": "2014",
      "website": "https://pdfs.semanticscholar.org/4bf5/387ec770f557525484b7c99be3a0c568651a.pdf",
      "summary": "Technical description of the PanLex project of The Long Now Foundation"
    },
    {
      "name": "Patrick Westphal, Claus Stadler, and Jonathan Pool, \u201CCountering language attrition with PanLex and the Web of Data\u201D",
      "publisher": "Semantic Web Journal",
      "releaseDate": "2015",
      "website": "http://www.semantic-web-journal.net/system/files/swj509.pdf",
      "summary": "Technical report on creation of an RDF interface to the PanLex database"
    },
    {
      "name": "Timothy Baldwin, Jonathan Pool, and Susan M. Colowick, \u201CPanLex and LEXTRACT: Translating all Words of all Languages of the World\u201D",
      "publisher": "Coling",
      "releaseDate": "2010",
      "website": "http://turing.cs.washington.edu/papers/BaldwinEtAl-Lextract.pdf",
      "summary": "Technical report on attempts to automate the parsing of heterogeneous multilingual dictionaries for extraction of translations"
    },
    {
      "name": "Katherine Everitt, Christopher Lim, Oren Etzioni, Jonathan Pool, Susan Colowick, and Stephen Soderland, \u201CEvaluating Lemmatic Communication\u201D",
      "publisher": "trans-kom",
      "releaseDate": "2010",
      "website": "http://www.trans-kom.eu/bd03nr01/trans-kom_03_01_03_Everitt_et_al_Lemmatic_Communication.20100531.pdf",
      "summary": "Experiment on conditions of success in lemmatic communication between Spanish- and Hungarian-speaking subjects"
    },
    {
      "name": "Jonathan Pool and S. M. Colowick, \u201CSyntactic Disambiguation for the Semantic Web\u201D",
      "publisher": "SAAKM",
      "releaseDate": "2007",
      "website": "http://ftp.informatik.rwth-aachen.de/Publications/CEUR-WS/Vol-289/po02.pdf",
      "summary": "Experimental comparison of paraphrasal and truth-conditional selection as methods of disambiguation"
    },
    {
      "name": "Jonathan Pool, \u201CThe Multilingual Election Problem\u201D",
      "publisher": "Journal of Theoretical Politics",
      "releaseDate": "1992",
      "website": "https://old.panlex.org/pubs/etc/multielectprob.pdf",
      "summary": "Formal model of political polarization with candidates advocating conflicting policies to dissimilar audiences"
    },
    {
      "name": "Reinhard Selten and Jonathan Pool, \u201CThe Distribution of Foreign Language Skills as a Game Equilibrium\u201D",
      "publisher": "Springer",
      "releaseDate": "1991",
      "website": "https://pdfs.semanticscholar.org/fe68/86cfbf8c2d18f4175b490dcc8837a14d3a5c.pdf",
      "summary": "Model of interactive decisions on acquiring knowledge of additional languages"
    },
    {
      "name": "Jonathan Pool, \u201CThe Official Language Problem\u201D",
      "publisher": "American Political Science Review",
      "releaseDate": "1991",
      "website": "https://www.jstor.org/stable/1963171",
      "summary": "Model of a solution to the problem of choosing optimally efficient official languages while treating speakers of all languages fairly"
    },
    {
      "name": "Bernard Grofman and Jonathan Pool, \u201CHow to Make Cooperation the Optimizing Strategy in a Two-Person Game\u201D",
      "publisher": "Journal of Mathematical Sociology",
      "releaseDate": "1977",
      "website": "http://www.tandfonline.com/doi/abs/10.1080/0022250X.1977.9989871?src=recsys&",
      "summary": "Proves the existence of a partial tit\u2010for\u2010tat (matching) strategy that induces an optimizing opponent to cooperate in an iterated Prisoner's Dilemma game"
    },
    {
      "name": "Jonathan Pool, \u201CCoalition Formation in Small Groups with Incomplete Communication Networks\u201D",
      "publisher": "Journal of Personality and Social Psychology",
      "releaseDate": "1976",
      "website": "https://old.panlex.org/pubs/etc/cfsg.pdf",
      "summary": "Report of an experiment on the effects of communication restrictions on coalition formation and competitive success"
    }
  ],
  "interests": [
    {
      "name": "Culinary experimentation",
      "keywords": [
        "Look, ma, no recipe!"
      ]
    },
    {
      "name": "Habit disruption",
      "keywords": [
        "Dvorak keyboard layout"
      ]
    },
    {
      "name": "Urban carless living",
      "keywords": [
        "Walking",
        "Transit"
      ]
    },
    {
      "name": "The assignment problem",
      "keywords": [
        "Why buyers and sellers are both scarce"
      ]
    },
    {
      "name": "Postspatial society",
      "keywords": [
        "Unrestricted migration",
        "Nonspatial voting systems",
        "Teleservices",
        "Telecollaboration",
        "Telemeetings"
      ]
    }
  ],
  "references": [
    {
      "name": "To be specified on request",
      "reference": "To be obtained from references"
    }
  ]
}
`,"private/pool-versions/pool-mediumrecent-ex-a11y.fld/header.html":`\uFFFD\uFFFD<\0h\0t\0m\0l\0 \0x\0m\0l\0n\0s\0:\0v\0=\0"\0u\0r\0n\0:\0s\0c\0h\0e\0m\0a\0s\0-\0m\0i\0c\0r\0o\0s\0o\0f\0t\0-\0c\0o\0m\0:\0v\0m\0l\0"\0\r\0
\0x\0m\0l\0n\0s\0:\0o\0=\0"\0u\0r\0n\0:\0s\0c\0h\0e\0m\0a\0s\0-\0m\0i\0c\0r\0o\0s\0o\0f\0t\0-\0c\0o\0m\0:\0o\0f\0f\0i\0c\0e\0:\0o\0f\0f\0i\0c\0e\0"\0\r\0
\0x\0m\0l\0n\0s\0:\0w\0=\0"\0u\0r\0n\0:\0s\0c\0h\0e\0m\0a\0s\0-\0m\0i\0c\0r\0o\0s\0o\0f\0t\0-\0c\0o\0m\0:\0o\0f\0f\0i\0c\0e\0:\0w\0o\0r\0d\0"\0\r\0
\0x\0m\0l\0n\0s\0:\0m\0=\0"\0h\0t\0t\0p\0:\0/\0/\0s\0c\0h\0e\0m\0a\0s\0.\0m\0i\0c\0r\0o\0s\0o\0f\0t\0.\0c\0o\0m\0/\0o\0f\0f\0i\0c\0e\0/\x002\x000\x000\x004\0/\x001\x002\0/\0o\0m\0m\0l\0"\0\r\0
\0x\0m\0l\0n\0s\0=\0"\0h\0t\0t\0p\0:\0/\0/\0w\0w\0w\0.\0w\x003\0.\0o\0r\0g\0/\0T\0R\0/\0R\0E\0C\0-\0h\0t\0m\0l\x004\x000\0"\0>\0\r\0
\0\r\0
\0<\0h\0e\0a\0d\0>\0\r\0
\0<\0m\0e\0t\0a\0 \0h\0t\0t\0p\0-\0e\0q\0u\0i\0v\0=\0C\0o\0n\0t\0e\0n\0t\0-\0T\0y\0p\0e\0 \0c\0o\0n\0t\0e\0n\0t\0=\0"\0t\0e\0x\0t\0/\0h\0t\0m\0l\0;\0 \0c\0h\0a\0r\0s\0e\0t\0=\0u\0n\0i\0c\0o\0d\0e\0"\0>\0\r\0
\0<\0m\0e\0t\0a\0 \0n\0a\0m\0e\0=\0P\0r\0o\0g\0I\0d\0 \0c\0o\0n\0t\0e\0n\0t\0=\0W\0o\0r\0d\0.\0D\0o\0c\0u\0m\0e\0n\0t\0>\0\r\0
\0<\0m\0e\0t\0a\0 \0n\0a\0m\0e\0=\0G\0e\0n\0e\0r\0a\0t\0o\0r\0 \0c\0o\0n\0t\0e\0n\0t\0=\0"\0M\0i\0c\0r\0o\0s\0o\0f\0t\0 \0W\0o\0r\0d\0 \x001\x005\0"\0>\0\r\0
\0<\0m\0e\0t\0a\0 \0n\0a\0m\0e\0=\0O\0r\0i\0g\0i\0n\0a\0t\0o\0r\0 \0c\0o\0n\0t\0e\0n\0t\0=\0"\0M\0i\0c\0r\0o\0s\0o\0f\0t\0 \0W\0o\0r\0d\0 \x001\x005\0"\0>\0\r\0
\0<\0l\0i\0n\0k\0 \0i\0d\0=\0M\0a\0i\0n\0-\0F\0i\0l\0e\0 \0r\0e\0l\0=\0M\0a\0i\0n\0-\0F\0i\0l\0e\0 \0h\0r\0e\0f\0=\0"\0.\0.\0/\0p\0o\0o\0l\0-\0m\0e\0d\0i\0u\0m\0r\0e\0c\0e\0n\0t\0-\0e\0x\0-\0a\x001\x001\0y\0.\0h\0t\0m\0l\0"\0>\0\r\0
\0<\0!\0-\0-\0[\0i\0f\0 \0g\0t\0e\0 \0m\0s\0o\0 \x009\0]\0>\0<\0x\0m\0l\0>\0\r\0
\0 \0<\0o\0:\0s\0h\0a\0p\0e\0d\0e\0f\0a\0u\0l\0t\0s\0 \0v\0:\0e\0x\0t\0=\0"\0e\0d\0i\0t\0"\0 \0s\0p\0i\0d\0m\0a\0x\0=\0"\x002\x000\x004\x009\0"\0/\0>\0\r\0
\0<\0/\0x\0m\0l\0>\0<\0!\0[\0e\0n\0d\0i\0f\0]\0-\0-\0>\0\r\0
\0<\0/\0h\0e\0a\0d\0>\0\r\0
\0\r\0
\0<\0b\0o\0d\0y\0 \0l\0a\0n\0g\0=\0E\0N\0-\0U\0S\0 \0l\0i\0n\0k\0=\0b\0l\0u\0e\0 \0v\0l\0i\0n\0k\0=\0p\0u\0r\0p\0l\0e\0>\0\r\0
\0\r\0
\0<\0d\0i\0v\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0e\0l\0e\0m\0e\0n\0t\0:\0f\0o\0o\0t\0n\0o\0t\0e\0-\0s\0e\0p\0a\0r\0a\0t\0o\0r\0'\0 \0i\0d\0=\0f\0s\0>\0\r\0
\0\r\0
\0<\0p\0 \0c\0l\0a\0s\0s\0=\0M\0s\0o\0N\0o\0r\0m\0a\0l\0>\0<\0s\0p\0a\0n\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0s\0p\0e\0c\0i\0a\0l\0-\0c\0h\0a\0r\0a\0c\0t\0e\0r\0:\0f\0o\0o\0t\0n\0o\0t\0e\0-\0s\0e\0p\0a\0r\0a\0t\0o\0r\0'\0>\0<\0!\0[\0i\0f\0 \0!\0s\0u\0p\0p\0o\0r\0t\0F\0o\0o\0t\0n\0o\0t\0e\0s\0]\0>\0\r\0
\0\r\0
\0<\0h\0r\0 \0a\0l\0i\0g\0n\0=\0l\0e\0f\0t\0 \0s\0i\0z\0e\0=\x001\0 \0w\0i\0d\0t\0h\0=\0"\x003\x003\0%\0"\0>\0\r\0
\0\r\0
\0<\0!\0[\0e\0n\0d\0i\0f\0]\0>\0<\0/\0s\0p\0a\0n\0>\0<\0/\0p\0>\0\r\0
\0\r\0
\0<\0/\0d\0i\0v\0>\0\r\0
\0\r\0
\0<\0d\0i\0v\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0e\0l\0e\0m\0e\0n\0t\0:\0f\0o\0o\0t\0n\0o\0t\0e\0-\0c\0o\0n\0t\0i\0n\0u\0a\0t\0i\0o\0n\0-\0s\0e\0p\0a\0r\0a\0t\0o\0r\0'\0 \0i\0d\0=\0f\0c\0s\0>\0\r\0
\0\r\0
\0<\0p\0 \0c\0l\0a\0s\0s\0=\0M\0s\0o\0N\0o\0r\0m\0a\0l\0>\0<\0s\0p\0a\0n\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0s\0p\0e\0c\0i\0a\0l\0-\0c\0h\0a\0r\0a\0c\0t\0e\0r\0:\0f\0o\0o\0t\0n\0o\0t\0e\0-\0c\0o\0n\0t\0i\0n\0u\0a\0t\0i\0o\0n\0-\0s\0e\0p\0a\0r\0a\0t\0o\0r\0'\0>\0<\0!\0[\0i\0f\0 \0!\0s\0u\0p\0p\0o\0r\0t\0F\0o\0o\0t\0n\0o\0t\0e\0s\0]\0>\0\r\0
\0\r\0
\0<\0h\0r\0 \0a\0l\0i\0g\0n\0=\0l\0e\0f\0t\0 \0s\0i\0z\0e\0=\x001\0>\0\r\0
\0\r\0
\0<\0!\0[\0e\0n\0d\0i\0f\0]\0>\0<\0/\0s\0p\0a\0n\0>\0<\0/\0p\0>\0\r\0
\0\r\0
\0<\0/\0d\0i\0v\0>\0\r\0
\0\r\0
\0<\0d\0i\0v\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0e\0l\0e\0m\0e\0n\0t\0:\0e\0n\0d\0n\0o\0t\0e\0-\0s\0e\0p\0a\0r\0a\0t\0o\0r\0'\0 \0i\0d\0=\0e\0s\0>\0\r\0
\0\r\0
\0<\0p\0 \0c\0l\0a\0s\0s\0=\0M\0s\0o\0N\0o\0r\0m\0a\0l\0>\0<\0s\0p\0a\0n\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0s\0p\0e\0c\0i\0a\0l\0-\0c\0h\0a\0r\0a\0c\0t\0e\0r\0:\0f\0o\0o\0t\0n\0o\0t\0e\0-\0s\0e\0p\0a\0r\0a\0t\0o\0r\0'\0>\0<\0!\0[\0i\0f\0 \0!\0s\0u\0p\0p\0o\0r\0t\0F\0o\0o\0t\0n\0o\0t\0e\0s\0]\0>\0\r\0
\0\r\0
\0<\0h\0r\0 \0a\0l\0i\0g\0n\0=\0l\0e\0f\0t\0 \0s\0i\0z\0e\0=\x001\0 \0w\0i\0d\0t\0h\0=\0"\x003\x003\0%\0"\0>\0\r\0
\0\r\0
\0<\0!\0[\0e\0n\0d\0i\0f\0]\0>\0<\0/\0s\0p\0a\0n\0>\0<\0/\0p\0>\0\r\0
\0\r\0
\0<\0/\0d\0i\0v\0>\0\r\0
\0\r\0
\0<\0d\0i\0v\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0e\0l\0e\0m\0e\0n\0t\0:\0e\0n\0d\0n\0o\0t\0e\0-\0c\0o\0n\0t\0i\0n\0u\0a\0t\0i\0o\0n\0-\0s\0e\0p\0a\0r\0a\0t\0o\0r\0'\0 \0i\0d\0=\0e\0c\0s\0>\0\r\0
\0\r\0
\0<\0p\0 \0c\0l\0a\0s\0s\0=\0M\0s\0o\0N\0o\0r\0m\0a\0l\0>\0<\0s\0p\0a\0n\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0s\0p\0e\0c\0i\0a\0l\0-\0c\0h\0a\0r\0a\0c\0t\0e\0r\0:\0f\0o\0o\0t\0n\0o\0t\0e\0-\0c\0o\0n\0t\0i\0n\0u\0a\0t\0i\0o\0n\0-\0s\0e\0p\0a\0r\0a\0t\0o\0r\0'\0>\0<\0!\0[\0i\0f\0 \0!\0s\0u\0p\0p\0o\0r\0t\0F\0o\0o\0t\0n\0o\0t\0e\0s\0]\0>\0\r\0
\0\r\0
\0<\0h\0r\0 \0a\0l\0i\0g\0n\0=\0l\0e\0f\0t\0 \0s\0i\0z\0e\0=\x001\0>\0\r\0
\0\r\0
\0<\0!\0[\0e\0n\0d\0i\0f\0]\0>\0<\0/\0s\0p\0a\0n\0>\0<\0/\0p\0>\0\r\0
\0\r\0
\0<\0/\0d\0i\0v\0>\0\r\0
\0\r\0
\0<\0d\0i\0v\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0e\0l\0e\0m\0e\0n\0t\0:\0h\0e\0a\0d\0e\0r\0'\0 \0i\0d\0=\0e\0h\x001\0>\0\r\0
\0\r\0
\0<\0p\0 \0c\0l\0a\0s\0s\0=\0M\0s\0o\0H\0e\0a\0d\0e\0r\0>\0<\0o\0:\0p\0>\0&\0n\0b\0s\0p\0;\0<\0/\0o\0:\0p\0>\0<\0/\0p\0>\0\r\0
\0\r\0
\0<\0/\0d\0i\0v\0>\0\r\0
\0\r\0
\0<\0d\0i\0v\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0e\0l\0e\0m\0e\0n\0t\0:\0h\0e\0a\0d\0e\0r\0'\0 \0i\0d\0=\0h\x001\0>\0\r\0
\0\r\0
\0<\0p\0 \0c\0l\0a\0s\0s\0=\0M\0s\0o\0H\0e\0a\0d\0e\0r\0>\0<\0o\0:\0p\0>\0&\0n\0b\0s\0p\0;\0<\0/\0o\0:\0p\0>\0<\0/\0p\0>\0\r\0
\0\r\0
\0<\0/\0d\0i\0v\0>\0\r\0
\0\r\0
\0<\0d\0i\0v\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0e\0l\0e\0m\0e\0n\0t\0:\0f\0o\0o\0t\0e\0r\0'\0 \0i\0d\0=\0e\0f\x001\0>\0\r\0
\0\r\0
\0<\0p\0 \0c\0l\0a\0s\0s\0=\0M\0s\0o\0F\0o\0o\0t\0e\0r\0>\0<\0o\0:\0p\0>\0&\0n\0b\0s\0p\0;\0<\0/\0o\0:\0p\0>\0<\0/\0p\0>\0\r\0
\0\r\0
\0<\0/\0d\0i\0v\0>\0\r\0
\0\r\0
\0<\0d\0i\0v\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0e\0l\0e\0m\0e\0n\0t\0:\0f\0o\0o\0t\0e\0r\0'\0 \0i\0d\0=\0f\x001\0>\0\r\0
\0\r\0
\0<\0p\0 \0c\0l\0a\0s\0s\0=\0M\0s\0o\0F\0o\0o\0t\0e\0r\0>\0<\0o\0:\0p\0>\0&\0n\0b\0s\0p\0;\0<\0/\0o\0:\0p\0>\0<\0/\0p\0>\0\r\0
\0\r\0
\0<\0/\0d\0i\0v\0>\0\r\0
\0\r\0
\0<\0d\0i\0v\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0e\0l\0e\0m\0e\0n\0t\0:\0h\0e\0a\0d\0e\0r\0'\0 \0i\0d\0=\0f\0h\x001\0>\0\r\0
\0\r\0
\0<\0p\0 \0c\0l\0a\0s\0s\0=\0M\0s\0o\0H\0e\0a\0d\0e\0r\0>\0<\0o\0:\0p\0>\0&\0n\0b\0s\0p\0;\0<\0/\0o\0:\0p\0>\0<\0/\0p\0>\0\r\0
\0\r\0
\0<\0/\0d\0i\0v\0>\0\r\0
\0\r\0
\0<\0d\0i\0v\0 \0s\0t\0y\0l\0e\0=\0'\0m\0s\0o\0-\0e\0l\0e\0m\0e\0n\0t\0:\0f\0o\0o\0t\0e\0r\0'\0 \0i\0d\0=\0f\0f\x001\0>\0\r\0
\0\r\0
\0<\0p\0 \0c\0l\0a\0s\0s\0=\0M\0s\0o\0F\0o\0o\0t\0e\0r\0>\0<\0o\0:\0p\0>\0&\0n\0b\0s\0p\0;\0<\0/\0o\0:\0p\0>\0<\0/\0p\0>\0\r\0
\0\r\0
\0<\0/\0d\0i\0v\0>\0\r\0
\0\r\0
\0<\0/\0b\0o\0d\0y\0>\0\r\0
\0\r\0
\0<\0/\0h\0t\0m\0l\0>\0\r\0
\0`,"private/tests/20180423-rapidparser-pool-short-a11y.html":`<!DOCTYPE HTML>
<html>
<head>	
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta http-equiv="content-language" content="en-US" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />	
	<meta name="keywords" content="CV Parser, Resume Parser, Resume Extraction, semantic" />
	<meta name="description" content="Free anonymous online test of the rapidparser resume parser" />
  	<title>Free CV Parser Test - RapidParser</title>
	<link rel="shortcut icon" href="/template/images/favicon.ico" type="image/x-icon">
	<link rel="icon" href="/template/images/favicon.ico" type="image/x-icon">	
	<link href="/template/css/style.css?v=3" rel="stylesheet" />
	<link href="/template/css/doku.css?v=3" rel="stylesheet" />
	<script type="text/javascript" src="/template/js/jquery-2.1.4.min.js"><\/script>
	<script type="text/javascript" src="/template/js/main.js?v=3"><\/script>
	<script type="text/javascript" src="/template/js/demo.js?v=3"><\/script>
  	<script>
  	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-90848734-1', 'auto');
    ga('set', 'anonymizeIp', true);
    ga('send', 'pageview');<\/script>
</head>
<body>
	<div class="header">
		<div class="logo">
		  <a href="/">
				<img src="/template/images/logo.png" alt="RapidParser Logo" draggable="false">
			</a>
		</div>		
<div id="navigation">\r
	<ul>\r
    	        	<li>  \r
        		<a       		\r
        	     href="/">Home</a>\r
        	</li>\r
        	<li>  \r
        		<a       		\r
        	     href="/features">Features</a>\r
        	</li>\r
        	<li>  \r
        		<a       		\r
        	     href="/test">Free Test</a>\r
        	</li>\r
        	<li>  \r
        		<a       		\r
        	     href="/prices">Prices</a>\r
        	</li>\r
        	<li>  \r
        		<a       		\r
        	     href="/doc">Documentation</a>\r
        	</li>\r
        	<li>  \r
        		<a       		\r
        	     href="/register">Register</a>\r
        	</li>\r
		<div class="clear"></div>\r
	</ul>\r
	<table class="login">\r
		<tr>\r
			<td>\r
				<a href="/user">\r
					<img src="/template/images/icon_user.png" alt="RapidParser User" draggable="false"/>\r
				</a>\r
			</td><td class="" >\r
					<a href="/login">Login</a>\r
			</td>\r
		</tr>\r
	</table>\r
</div>\r
<nav class="mobile">\r
	<button id="nav-mobile-button" class="hamburger hamburger--stand" type="button">\r
		<span class="hamburger-box"><span class="hamburger-inner"></span></span>\r
	</button>\r
	<div id="nav-mobile-div">\r
			<a href="/">Home</a>\r
			<a href="/features">Features</a>\r
			<a href="/test">Free Test</a>\r
			<a href="/prices">Prices</a>\r
			<a href="/doc">Documentation</a>\r
			<a href="/register">Register</a>\r
		<a style="border: 0;" href="/login">Login</a>\r
  	</div>\r
</nav>		<div style="clear: both;"></div>
	</div>
	
	<div class="balken unselectable">
		<img class="balken" src="/template/images/bar.png" alt="RapidParser bar" draggable="false">
	</div>
	
		<div id="header-img-small" class="unselectable"><img src="/template/images/header/header_default.png" alt="RapidParser Header Image" draggable="false"></div>		
		
			
	
			
	
	
	<div id="content-start">
	<div class="demo-content-left">\r
		<h1>Free Online Test</h1>	\r
		<h2>&quot;Trust is good, but control is better!&quot;</h2>\r
		<p>The quote speaks for itself. Go ahead and test our CV Parser now! You don't need to register, it's absolutely anonymous, it's free of charge, and you can try it out anytime, day or night, at your convenience!</p>\r
		<p>Simply upload a CV and the result will be available to you in no time!</p>\r
		<p><b>Did you know</b>: Our system supports all standard formats for documents, such as PDF, DOC(X), ODT, XLS, WPF, and many more while being able to extract any type of formatting and font at the highest quality.</p>\r
	</div>\r
	<div class="demo-content-right">			\r
		<div id="demo_drop_box" class="unselectable">\r
			<div id="dropzone" class="demo_dropzone" style="position: relative;">\r
				<div class="demo-drop-image">\r
					<img src="template/images/online_test.png" style="width: 100%; padding-top: 2em;" draggable="false">\r
				</div>\r
				<div class="demo-drop-text">\r
					Drag and Drop a File Here...\r
				</div>\r
				<form method="POST" id="demoForm" enctype="multipart/form-data" action="/test/submit">\r
					<input id="upButton" type="button" value="...or Select a File to Start" />\r
					<input id="fupButton" name="fupButton" type="file" style="display: none" />\r
					<input id="csrfName" type="hidden" value="X-CSRF-TOKEN" />\r
					<input id="csrfValue" type="hidden" value = "6b1f5a80-4786-4457-a76d-caa7068557ee" />\r
				</form>\r
			</div>\r
		</div>\r
		<div id="demoTeaser" style="display: none; margin-left: 50px;margin-top: 45px;margin-right: 0px;text-align: right;">\r
			<p style="font-style: italic; color: #2b91c5; text-align: justify;">\r
				<b>Get free credits rapidly!</b> Just register and give us feedback on the test result and our website via the Contact-Us form. What do you like? What are you missing? Tell us and you will immediately get our Welcome Package &quot;Rapid XXS&quot; with 100 credits for free.\r
				<p style="text-align: right;"><a href="register">Register now</a></p>\r
			</p>\r
		</div>\r
	</div>	\r
	<div class="demo-clr"></div>		\r
	<div id="demo_loading_indicator" style="display: none;">\r
		<table style="margin: 0 auto;"><tr><td><img src="/template/images/loader.gif" style="width: 25px;"></td><td style="padding-left: 10px;"><p><i>processing...</i></p></td></tr></table>\r
	</div>\r
	<div id="demoFragment" style="margin-top: -2em;"></div>\r
	</div>
	
	
	
	<div class="footer">		
		<span style="float: left;">&copy; 2018</span>		
		<span style="float: right;">
			<ul>
				<li><a href="/terms">Terms and Conditions</a></li>
				|
				<li><a href="/privacy">Privacy</a></li>
				|
				<li><a href="/imprint">Imprint</a></li>
			</ul>
		</span>				
		<div style="clear: both;"></div>
	</div>	
	<div class="overlay" id="o_background"></div>
	<table class="overlay" id="o_foreground"><tr><td>		
		<div id="popup" class="loading"></div>
	</td></tr></table>
</body>
</html>
`,"style.css":`@media (max-width: 650px) {
  html {
    font-size: 10px;
  }
}
@media (min-width: 651px), print {
  .cornerPic > img {
    position: absolute;
    top: 3rem;
    right: 3rem;
  }
}
@media (min-width: 651px) {
  html {
    font-size: 1.6vw;
  }
}
@media print {
  html {
    font-size: 10px;
  }
}
* {
  box-sizing: border-box;
}
a {
  overflow-wrap: break-word;
}
.band {
  background-color: lightgray;
}
.band,
.rowTablesCircled,
.section-subhead {
  margin-top: 1rem;
}
body {
  background: #eee;
  margin: 3rem 3rem;
}
.boxedBulletList {
  padding-bottom: 0.5rem;
  border-style: solid;
  border-width: 1px;
}
.boxedBulletList + .boxedBulletList {
  margin-top: -1px;
}
.boxedBulletList > h1 {
  margin-top: 0.1rem;
}
.caps {
  text-transform: uppercase;
}
caption {
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.center,
.compact {
  text-align: center;
}
.compact {
  padding: 0 3rem 2rem 3rem;
  border-style: solid;
  border-width: 0.5rem;
  border-radius: 50%;
  border-color: #33444433;
}
.cornerPic {
  text-align: center;
}
.cornerPic > img {
  width: 8rem;
}
h1 {
  margin: 0.5rem 0 0 0.5rem;
  color: #344;
}
.left {
  text-align: left;
}
li,
td {
  font-size: 1.2rem;
}
p {
  margin: 0.3rem 0 0.8rem 0.5rem;
}
p.size1,
p.size2 {
  font-weight: bold;
}
.rowTable ~ .rowTable {
  margin-top: 0.1rem;
}
.rowTablesCircled {
  display: flex;
  justify-content: center;
}
.rowTablesCircled td {
  padding-right: 0.3rem;
}
section:not(.boxedBulletList) + .boxedBulletList,
.section-head {
  margin-top: 2rem;
}
.size1 {
  font-size: 2.2rem;
}
.size2 {
  font-size: 2rem;
  font-style: italic;
}
.size3 {
  font-size: 1.8rem;
}
.size4 {
  font-size: 1.6rem;
  font-style: italic;
}
.size5 {
  font-size: 1.4rem;
}
.size6 {
  font-size: 1.2rem;
  font-style: italic;
}
.size7,
p {
  font-size: 1rem;
}
strong,
.strong {
  font-weight: bold;
}
table {
  margin: 0.5rem auto 0 auto;
  border-collapse: collapse;
}
.tableLH th {
  text-align: right;
  padding-right: 0.5rem;
}
td {
  padding: 0.2rem;
  border-style: solid;
  border-width: 1px;
  border-color: slategray;
  text-align: left;
}
.theme-credit {
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;
  font-style: italic;
}
.tight {
  margin-top: 0;
  margin-bottom: 0;
}
ul {
  margin: 0.25rem 0;
}
.under {
  margin-top: 0;
}
`},W={"docs/samples/hendricks":["hendricks-std.json"],"docs/samples/pool-medium":["pool-medium-a11y-verbose.html","pool-medium-a11y-verbose.json","pool-medium-a11y.html","pool-medium-a11y.json","pool-medium-std.json"],"docs/samples/pool-medium-ex":["pool-medium-ex-a11y.html","pool-medium-ex-a11y.json","pool-mediumrecent-ex-a11y.html","pool-mediumrecent-ex-a11y.json"],"docs/samples/pool-short":["pool-short-a-a11y.html","pool-short-a-a11y.json","pool-short-b-a11y.html","pool-short-b-a11y.json"],"docs/samples":["hendricks","pool-medium","pool-medium-ex","pool-short"],docs:["samples"],"private/docs":["pool-uw-transcript.pdf"],"private/notes":["notes.txt"],"private/originals":["index.js","workflows.key"],"private/pool-versions/pool-long":["pool-full.pdf","pool-long-a11y.html","pool-long-a11y.json","pool-long-std.json"],"private/pool-versions/pool-mediumrecent-ex-a11y.fld":["colorschememapping.xml","filelist.xml","header.html","themedata.thmx"],"private/pool-versions":["20171213-pool.json","20180122-pool.html","20180128-pool.md","20180128-pool.pdf","20180207-pool.html","20180207-pool.json","20180207-pool.pdf","20180208-pool.html","20180218-pool.pdf","20180502-pool-short-a11y.docx","pool-a11y.html","pool-linkedin.html","pool-long","pool-medium.docx","pool-mediumrecent-ex-a11y.fld","pool-short-a11y.docx","pool-short-a11y.pdf"],"private/standards":["template-monster-webdev.doc"],"private/tests":["20180423-rapidparser-pool-short-a11y.html","sonarwhalreport.pdf"],private:["docs","notes","originals","pool-versions","standards","tests"],public:["workflows.png"],views:["html.js"],".":["README-workflowa.md","README-workflowb.md","README-workflowc.md","README-writejr.md","README.md","convert.js","converter.js","docs","index.js","package.json","parse.js","parser.js","private","public","style.css","views"]};tn=function(n,t){var e=nn(n);return e!==void 0?e:""},en=function(n,t){var e=F(n);return e===void 0&&(e=[]),t&&t.withFileTypes?e.map(function(i){var c=V(n)+"/"+i,w=F(c)!==void 0;return{name:i,isFile:function(){return!w},isDirectory:function(){return w}}}):e},an=function(n){return nn(n)!==void 0||F(n)!==void 0},on=function(){},rn=function(){},q=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},sn=q,ln=function(){},dn=function(){},cn=function(){return{pipe:function(n){return n},on:function(){return this}}},un=function(){return{write:function(){},end:function(){},on:function(){return this}}},Rn={readFileSync:tn,readdirSync:en,existsSync:an,writeFileSync:on,mkdirSync:rn,statSync:q,lstatSync:sn,unlinkSync:ln,rmdirSync:dn,createReadStream:cn,createWriteStream:un}});var wn={};X(wn,{basename:()=>O,default:()=>Bn,dirname:()=>Q,extname:()=>J,isAbsolute:()=>bn,join:()=>gn,normalize:()=>vn,parse:()=>yn,relative:()=>Sn,resolve:()=>pn,sep:()=>fn});var gn,pn,Q,O,J,fn,bn,vn,Sn,yn,Bn,Pn=G(()=>{"use strict";k();gn=function(){return[].slice.call(arguments).join("/")},pn=function(){return[].slice.call(arguments).join("/")},Q=function(n){return n.split("/").slice(0,-1).join("/")},O=function(n,t){var e=n.split("/").pop()||"";return t&&e.endsWith(t)?e.slice(0,-t.length):e},J=function(n){var t=n.match(/\.[^.]+$/);return t?t[0]:""},fn="/",bn=function(n){return n.charAt(0)==="/"},vn=function(n){return n},Sn=function(n,t){return t},yn=function(n){return{root:"",dir:Q(n),base:O(n),ext:J(n),name:O(n,J(n))}},Bn={join:gn,resolve:pn,dirname:Q,basename:O,extname:J,sep:fn,isAbsolute:bn,normalize:vn,relative:Sn,parse:yn}});var An=B((vt,kn)=>{k();var Ln=n=>Object.keys(n).map(t=>` ${t}="${n[t]}"`).join(""),N=(n,t)=>`<${n}${Ln(t)}>`,v=(n,t,e,i)=>{let c=n.replace(/\n+$/,""),w=`<${t}${Ln(e)}>`;if(i>-1){let m=`
${" ".repeat(i)}`,u=`${m}${c.replace(/\n(?=.)/g,m)}
`;return`${w}${u}</${t}>`}else return`${w}${n}</${t}>`},Un=n=>v(n.join(`
`),"tbody",{},2),On=n=>v(n.join(`
`),"ul",{},2),Jn=n=>v(n,"li",{},-1),Hn=n=>v(n,"code",{},-1),Gn=(n,t)=>v(n||t,"a",{href:`mailto:${t}`},-1),Fn=(n,t,e)=>[v(n,"strong",{},-1),t].join(e),Vn=(n,t,e)=>{let i=`size${t}`+(e?` ${e}`:"");return v(n,"h1",{class:i},-1)},qn=n=>{let t=n.map(i=>v(i,"th",{},-1)),e=_(t);return v(e,"thead",{},2)},Qn=(n,t)=>v(n||t,"a",{href:t},-1),_n=(n,t)=>N("img",{src:n,alt:t}),Xn=n=>{let t=n.map((e,i)=>v(e,i?"td":"th",{},-1));return _(t)},Kn=n=>n.join(N("br",{})),Yn=(n,t,e,i,c)=>{let w=N("meta",{charset:"utf-8"}),m=N("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),u=v(i,"title",{},-1),r=v(c,"style",{},2),o=v([w,m,u,r].join(`
`),"head",{},2),s=v(n,"main",{},2),d=v([s,t].join(`
`),"body",{},2);return`${["<!DOCTYPE html>",v([o,d].join(`
`),"html",{lang:e},2)].join(`
`)}
`},$n=(n,t,e)=>{let i=`size${t}`+(e?` ${e}`:"");return v(n,"p",{class:i},-1)},Zn=n=>{let t=n.map(e=>v(e,"td",{},-1));return _(t)},nt=(n,t,e)=>v(n,"section",e?{title:t,class:e}:{title:t},2),tt=n=>{let t=v("","div",{},-1),e=v(n,"div",{class:"compact"},2);return[t,e,t].join(`
`)},et=n=>v(n,"style",{},-1),at=(n,t)=>v(n.join(`
`),"table",{class:t},2),it=(n,t)=>v(t,"caption",{class:`size${n}`},2),_=n=>v(n.join(`
`),"tr",{},2);kn.exports={bulletItemOf:Jn,bulletListOf:On,captionOf:it,codeOf:Hn,element1Of:N,element2Of:v,headedStringOf:Fn,headOf:Vn,headRowOf:qn,hLinkOf:Qn,imageOf:_n,leftHeadRowOf:Xn,mailLinkOf:Gn,multilineOf:Kn,pageOf:Yn,paragraphOf:$n,plainRowOf:Zn,sectionOf:nt,squeezeBoxOf:tt,styleOf:et,tableBodyOf:Un,tableOf:at}});var Dn=B(Cn=>{k();var ot=(mn(),Y(hn)),rt=(Pn(),Y(wn)),a=An(),I=(n,t)=>t[n]||n,st=n=>n.order&&n.order.format!=="hide"?n.order.data:Object.keys(n).filter(t=>n[t].format!=="hide"),y=n=>{if(typeof n=="string")return n;if(Array.isArray(n))return n.map(t=>y(t)).join("");if(typeof n=="object"){let t=n.format,e=n.data;switch(t){case"address":{let{point:i,city:c,region:w,postalCode:m,countryCode:u}=e,r=i,o=[c,w,m,u],s="";return o[0]?s=[[o.slice(0,2).filter(h=>h.length).join(", "),o[2]].filter(h=>h.length).join(" "),o[3]].filter(h=>h.length).join(", "):(r=o[2]="",s=o.filter(d=>d.length).join(", ")),a.multilineOf([r,s].filter(d=>d.length))}case"bulletList":return a.bulletListOf(e.map(i=>a.bulletItemOf(y(i))));case"code":return a.codeOf(y(e));case"edWork":{let{location:i,startDate:c,endDate:w}=e,m="",u="";i&&(m=e.url?a.hLinkOf(i,e.url):i),(c||w)&&(u=`${c||""}\u2013${w||""}`);let r=e.subject||"";return[[m,u].filter(s=>s.length).join(", "),r].filter(s=>s.length).join(": ")}case"headedString":return a.headedStringOf(y(e.head),y(e.tail),e.hasOwnProperty("delimiter")?e.delimiter:"");case"hLink":return a.hLinkOf(e.label,e.href);case"mailLink":return a.mailLinkOf(e.label,e.href)}}},H=(n,t)=>{let e=n.head;return e?a.headOf(y(e.data),e.size,t):""},T=(n,t,e,i)=>{let c=n;return c.unshift(a.headOf(t,e,i)),c},lt=(n,t,e,i,c)=>{let w=`band ${e||"center"}`;switch(t){case"basicMainHeads":{let{head:m,subhead:u}=n[0];return[a.paragraphOf(y(m),1,"center"),a.paragraphOf(y(u),2,"center under")].join(`
`)}case"centeredStrongLines":return n.map(u=>a.paragraphOf(y(u),3,"center tight strong")).join(`
`);case"headedWorkVolLists":{let m=n.map(u=>{let{organization:r,role:o,location:s,startDate:d,endDate:f,highlights:h}=u,b=a.headOf(a.multilineOf([y(r),y(o),y(s),y(`${d} \u2013 ${f}`)]),5,"section-subhead strong"),g=a.bulletListOf(h.map(S=>a.bulletItemOf(S))),l=[b,g].join(`
`);return a.sectionOf(l,r,"")});return T(m,i,3,w).join(`
`)}case"headedWorkVolParagraphs":{let m=n.map(u=>{let{organization:r,role:o,website:s,startDate:d,endDate:f,synopsis:h}=u,b=a.headOf(y({format:"hLink",data:{label:r,href:s}}),5,""),g=a.headOf(y(`${d} \u2013 ${f}: ${o}`),6,""),l=[b,g,a.paragraphOf(h,7,"")].join(`
`);return a.sectionOf(l,r,"")});return T(m,i,3,w).join(`
`)}case"headedConferenceParagraphs":{let m=n.map(u=>{let{name:r,date:o,title:s}=u,d=a.headOf(`${r}, ${o}`,5,""),f=a.paragraphOf(`\u201C${s}\u201D`,7,""),h=[d,f].join(`
`);return a.sectionOf(h,r,"")});return T(m,i,3,w).join(`
`)}case"headedEducationParagraphs":{let m=n.map(u=>{let{organization:r,level:o,diploma:s,specialties:d,website:f,startDate:h,endDate:b,synopsis:g,gpa:l,transcript:S}=u,p=`${h} \u2013 ${b}`,P=y({format:"hLink",data:{label:r,href:f}}),A=a.headOf(`${P}, ${p}`,5,""),L=[o,s,d.join(", "),l?`${I("gpa",c)} ${l}`:"",S?y({format:"hLink",data:{label:I("transcript",c),href:S}}):""].filter(M=>M).join("; "),C=L?a.headOf(L,6,""):"",x=(C?[A,C]:[A]).concat(a.paragraphOf(g,7,"")).join(`
`);return a.sectionOf(x,r,"")});return T(m,i,3,w).join(`
`)}case"headedGrantParagraphs":{let m=n.map(u=>{let{grantor:r,date:o,title:s}=u,f=[a.headOf(`${r}, ${o}`,5,""),`\u201C${s}\u201D`].join(`
`);return a.sectionOf(f,r,"")});return T(m,i,3,w).join(`
`)}case"headedPublicationParagraphs":{let m=n.map(u=>{let{authors:r,title:o,date:s,publisher:d,url:f}=u,h=r.join(", "),b=f?y({format:"hLink",data:{label:o,href:f}}):o,g=`${d}: ${s}`,l=a.paragraphOf(a.multilineOf([h,b,g]),7,"");return a.sectionOf(l,o,"")});return T(m,i,3,w).join(`
`)}case"introLists":{let m=n.map(u=>{let{introTopic:r,list:o}=u,s=a.headOf(y(r),5,"strong"),d=a.bulletListOf(o.map(h=>a.bulletItemOf(h))),f=[s,d].join(`
`);return a.sectionOf(f,r,"")});return T(m,i,3,w).join(`
`)}case"headedGroupList":{let m=n.map(u=>{let{organization:r,roles:o}=u,s=a.headOf(y(r),5,"strong"),d=a.bulletListOf(o.map(h=>a.bulletItemOf(h))),f=[s,d].join(`
`);return a.sectionOf(f,r,"")});return T(m,i,3,w).join(`
`)}}return""};Cn.parse=n=>{let t=n.lang?n.lang.data:"en",e=n.title?n.title.data:"R\xE9sum\xE9",i=ot.readFileSync(rt.join("/","style.css"),"utf-8"),c=n.legend?n.legend.data:{},u=[I("creditTo",c),y({format:"hLink",data:{label:"jsonresume-theme-a11y",href:"https://www.npmjs.com/package/jsonresume-theme-a11y"}})].join(""),r=a.sectionOf(u,"credit","theme-credit"),d=st(n).map(f=>{let h=n[f],b=h.format,g=I(h.title,c),l=h.data;switch(b){case"boxedBulletList":{let S=H(l,"section-head band center"),p=l.list.map(D=>a.bulletItemOf(y(D))),P=a.bulletListOf(p),A=S?[S,P].join(`
`):P;return a.sectionOf(A,g,b)}case"center":{let S=l.filter(p=>p.text.length).map(p=>a.paragraphOf(y(p.text),p.size,""));return a.sectionOf(S.join(`
`),g,b)}case"cornerPic":{let S=a.imageOf(l.src,l.alt);return a.sectionOf(S,g,b)}case"extraction":{let S=lt(n[l.from].data,l.into,l.headStyle,g,c);return a.sectionOf(S,g,`section-head${l.into==="basicMainHeads"?" center":""}`)}case"left":{let S=l.map(p=>a.paragraphOf(p,7,""));return a.sectionOf(S.join(`
`),g,b)}case"rowTables":{let p=l.map(P=>a.plainRowOf(P)).map(P=>a.tableOf([a.tableBodyOf([P])],"rowTable"));return a.sectionOf(p.join(`
`),g,"center")}case"rowTablesCircled":{let S=(L,C,z)=>{let x=a.squeezeBoxOf(L);return a.sectionOf(x,C,z)},p=H(l,""),A=l.tables.map(L=>a.plainRowOf(L)).map(L=>a.tableOf([a.tableBodyOf([L])],"rowTable")),D=p?[p,...A]:A;return S(D.join(`
`),g,"rowTablesCircled")}case"tableLeftHeads":{let S=H(l,""),p=l.table,P=p.caption,A=a.captionOf(P.size,P.data),D=p.data.map(x=>(x.data.unshift(I(x.label,c)),a.leftHeadRowOf(x.data.map(M=>y(M))))),L=a.tableBodyOf(D),C=a.tableOf([A,L],"tableLH"),z=S?[S,C].join(`
`):C;return a.sectionOf(z,g,"section-head center")}case"tableTopHead":{let S=H(l,""),p=l.table,P=p.caption,A=a.captionOf(P.size,P.data),D=a.headRowOf(p.label.map(x=>I(x,c))),L=a.tableBodyOf(p.data.map(x=>a.plainRowOf(x.map(M=>y(M))))),C=a.tableOf([A,D,L],"tableTH"),z=S?[S,C].join(`
`):C;return a.sectionOf(z,g,"section-head center")}}}).join(`
`);return a.pageOf(d,r,t,e,i)}});var zn=B(xn=>{k();var dt=Z(),ct=Dn();xn.render=n=>ct.parse(dt.convert(n,!0))});k();var E=Nn(zn(),1),Tn=E.default??E,kt=Tn.render??E.render,At=Tn.pdfRenderOptions??E.pdfRenderOptions;export{At as pdfRenderOptions,kt as render};
