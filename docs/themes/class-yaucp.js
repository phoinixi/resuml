var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Kr=Object.create;var ze=Object.defineProperty;var Zr=Object.getOwnPropertyDescriptor;var Qr=Object.getOwnPropertyNames;var Yr=Object.getPrototypeOf,Xr=Object.prototype.hasOwnProperty;var Pt=(n,e)=>()=>(n&&(e=n(n=0)),e);var w=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),$r=(n,e)=>{for(var i in e)ze(n,i,{get:e[i],enumerable:!0})},Ft=(n,e,i,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Qr(e))!Xr.call(n,r)&&r!==i&&ze(n,r,{get:()=>e[r],enumerable:!(t=Zr(e,r))||t.enumerable});return n};var es=(n,e,i)=>(i=n!=null?Kr(Yr(n)):{},Ft(e||!n||!n.__esModule?ze(i,"default",{value:n,enumerable:!0}):i,n)),ns=n=>Ft(ze({},"__esModule",{value:!0}),n);var m=Pt(()=>{});var Gt={};$r(Gt,{createReadStream:()=>zt,createWriteStream:()=>qt,default:()=>ts,existsSync:()=>Lt,lstatSync:()=>Rt,mkdirSync:()=>Tt,readFileSync:()=>It,readdirSync:()=>Mt,rmdirSync:()=>Ht,statSync:()=>Bn,unlinkSync:()=>Nt,writeFileSync:()=>Ot});function Fn(n){return String(n).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Bt(n){var e=Fn(n);if(qe[e]!==void 0)return qe[e];for(var i=Object.keys(qe),t=0;t<i.length;t++)if(e.endsWith("/"+i[t])||e===i[t])return qe[i[t]]}function Pn(n){var e=Fn(n);if((e===""||e===".")&&de["."]!==void 0)return de["."];if(de[e]!==void 0)return de[e];for(var i=Object.keys(de),t=0;t<i.length;t++)if(e.endsWith("/"+i[t])||e===i[t])return de[i[t]]}var qe,de,It,Mt,Lt,Ot,Tt,Bn,Rt,Nt,Ht,zt,qt,ts,Ut=Pt(()=>{"use strict";m();qe={"index.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Yau Chin Pang (Thomas)</title>
    <meta name="description" content="Hello there\u{1F44B}\u{1F3FB}! &amp;lt;br /&amp;gt;&amp;lt;br /&amp;gt;I took a gap semester for a full-time internship in Finverse Technologies in the 2022 Autumn semester. &amp;lt;br /&amp;gt;&amp;lt;br /&amp;gt;Mostly familiar with JavaScript (Typescript/Node.js) and Python now. I also have experience using Java, C++/C, Go, and Haskell (Had a ton of fun using Haskell! Very Interested using it for my graduate job)&amp;lt;br /&amp;gt;Interested working in backend in the future...&amp;lt;br /&amp;gt;&amp;lt;br /&amp;gt;Learning GoLang, gRPC, Swift and PostgreSQL for my final year project">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap">
    <style>:root {
  /* Colors */
  --primaryColor: #212529;
  --secondaryColor: #95a5a6;
  --accentColor: #f1c40f;
  --linkColor: #2ecc71;
  --mutedColor: #f4f6f6;

  /* Typography */
  --ratio: 1.25;
  --scale0: 1rem;
  --scale1: calc(var(--scale0) * var(--ratio));
  --scale2: calc(var(--scale1) * var(--ratio));
  --scale3: calc(var(--scale2) * var(--ratio));
  --scale4: calc(var(--scale3) * var(--ratio));
  --scale5: calc(var(--scale4) * var(--ratio));
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 14px;
}

body {
  color: var(--primaryColor);
  display: grid;
  font: 1em/1.5 Lato, sans-serif;
  gap: 2em;
  grid-template-columns:
    [full-start]
    1fr
    [main-start side-start]
    minmax(min-content, 12em)
    [side-end content-start]
    minmax(min-content, 36em)
    [main-end content-end]
    1fr
    [full-end];
  grid-template-rows: auto [content] 0;
  margin-bottom: 4em;
}

body::before {
  content: '';
  grid-column: full;
  grid-row: content;
}

ol,
ul {
  padding-left: 1em;
}

li + li {
  margin-top: 0.2em;
}

li::marker {
  color: var(--mutedColor);
}

a {
  color: var(--linkColor);
  text-decoration: none;
  transition: color 0.2s;
}

a:focus,
a:hover {
  color: var(--accentColor);
}

h1,
h2,
h3,
h5 {
  font-weight: normal;
}

h1,
h2,
h3 {
  line-height: 1.2;
}

h1 {
  font-size: var(--scale5);
}

h2 {
  color: var(--secondaryColor);
  font-size: var(--scale4);
}

h3 {
  color: var(--accentColor);
  font-size: var(--scale3);
  grid-column: side;
  margin-bottom: 1rem;
}

h4 {
  font-size: var(--scale2);
}

h5 {
  font-size: var(--scale1);
}

h6 {
  font-size: var(--scale0);
}

blockquote {
  border-left: 0.2em solid var(--mutedColor);
  padding-left: 1em;
}

cite {
  color: var(--secondaryColor);
  font-style: inherit;
}

cite::before {
  content: '\u2014 ';
}

.masthead {
  background: var(--mutedColor);
  display: inherit;
  gap: inherit;
  grid-column: full;
  grid-template-columns: inherit;
  padding: 4em 0;
  row-gap: 0;
}

.masthead > *,
section {
  grid-column: main;
}

article > * + *,
blockquote > * + * {
  margin-top: 0.6em;
}

.stack {
  display: grid;
  gap: 1.5em;
}

.grid-list {
  display: grid;
  gap: 1em;
}

.spaced-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.spaced-list:first-child::before {
  border-bottom: 1px solid var(--mutedColor);
  content: '';
  flex-grow: 1;
  margin: 0 1em;
  order: 1;
}

.spaced-list > :nth-child(2) {
  order: 2;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

.tag-list > li {
  background: var(--mutedColor);
  margin: 0 0.2em 0.2em 0;
  padding: 0.2em 0.6em;
}

@media print, (min-width: 48em) {
  h3 {
    text-align: right;
    margin-bottom: inherit;
  }

  .masthead > *,
  section {
    grid-column: content;
  }

  section {
    display: contents;
  }

  .grid-list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
  </head>
  <body>
      <header class="masthead">
          <h1>Yau Chin Pang (Thomas)</h1>
          <h2>HKUCS@2024</h2>
      </header>
      <section id="contact">
        <h3>Contact</h3>
        <div class="grid-list">
            <div>
              <h4>Email</h4>
              <a href="mailto:me@yaucp.dev">me@yaucp.dev</a>
            </div>
            <div>
              <h4>Phone</h4>
              +852 51136393
            </div>
            <div>
              <h4>Website</h4>
              <a href="https://yaucp.dev">yaucp.dev</a>
            </div>
        </div>
      </section>
        <section id="about">
          <h3>About</h3>
          <article>
            <p>Hello there\u{1F44B}\u{1F3FB}! &lt;br /&gt;&lt;br /&gt;I took a gap semester for a full-time internship in Finverse Technologies in the 2022 Autumn semester. &lt;br /&gt;&lt;br /&gt;Mostly familiar with JavaScript (Typescript/Node.js) and Python now. I also have experience using Java, C++/C, Go, and Haskell (Had a ton of fun using Haskell! Very Interested using it for my graduate job)&lt;br /&gt;Interested working in backend in the future...&lt;br /&gt;&lt;br /&gt;Learning GoLang, gRPC, Swift and PostgreSQL for my final year project</p>
          </article>
        </section>
        <section id="profiles">
          <h3>Profiles</h3>
          <div class="grid-list">
              <div>
                  <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/yaucp/">yaucp</a>
              </div>
              <div>
                  <h4>GitHub</h4>
                    <a href="https://github.com/yaucp/">yaucp</a>
              </div>
          </div>
        </section>

      <section id="work">
        <h3>Work</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Molekiu Limited</h4>
                  <span>
                    <time datetime="2023-10">Oct 2023</time> \u2013
                    Present
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Software Developer (Part-time)</strong>
                    <a href=""></a>
                </div>
              </header>
                
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Metamory.io</h4>
                  <span>
                    <time datetime="2023-06">Jun 2023</time> \u2013
                    <time datetime="2023-07">Jul 2023</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Software Engineer Intern</strong>
                    <a href=""></a>
                </div>
              </header>
                
                <h5>Highlights</h5>
                <ul>
                    <li>Added OAuth-Based Authentication to Next.js website with Auth.js</li>
                    <li>Built a demo/POC with Stripe&#x27;s Payment API with its Custom Payment Elements and Prebuilt Checkout Page</li>
                </ul>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Finverse Technologies</h4>
                  <span>
                    <time datetime="2023-01">Jan 2023</time> \u2013
                    <time datetime="2023-01">Jan 2023</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Software Engineer Intern (Part-time)</strong>
                    <a href="https://www.finverse.com">www.finverse.com</a>
                </div>
              </header>
                
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4></h4>
                  <span>
                    <time datetime="2022-07">Jul 2022</time> \u2013
                    <time datetime="2022-12">Dec 2022</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Software Engineer Intern (Full-time)</strong>
                    <a href="https://www.finverse.com">www.finverse.com</a>
                </div>
              </header>
                
                <h5>Highlights</h5>
                <ul>
                    <li>Successfully integrated major commercial banks into the internal open-banking system through reverse engineering and secure web scraping in TypeScript and Node.js.</li>
                    <li>Facilitated efficient micro-service communications using Go and gRPC.</li>
                    <li>Trained a machine learning model using Python for solving captchas, incorporating image pre-processing techniques, and successfully deployed to production via Google Cloud Platform\u2019s bucket storage.</li>
                    <li>Developed a demo showcasing API functionality in React.js, leading to enhanced clarity for external clients regarding the platform&#x27;s capabilities.</li>
                    <li>Enhanced code quality by implementing unit tests using Jest and Nock, resulting in a reduction in system bugs.</li>
                </ul>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Thales</h4>
                  <span>
                    <time datetime="2021-07">Jul 2021</time> \u2013
                    <time datetime="2021-08">Aug 2021</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Software Intern</strong>
                    <a href=""></a>
                </div>
              </header>
                
                <h5>Highlights</h5>
                <ul>
                    <li>Used Python to verify and search for missing files or lines according to specifications</li>
                    <li>Configured database that stores status and commands of equipment in the station in Unix system</li>
                </ul>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Esri China (Hong Kong)</h4>
                  <span>
                    <time datetime="2021-06">Jun 2021</time> \u2013
                    <time datetime="2021-07">Jul 2021</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Programmer Trainee Intern</strong>
                    <a href=""></a>
                </div>
              </header>
                
                <h5>Highlights</h5>
                <ul>
                    <li>Used Python to collect and group real-time open data to update local geodatabase in ArcGIS Pro</li>
                </ul>
            </article>
        </div>
      </section>
      <section id="volunteer">
        <h3>Volunteer</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Referalah</h4>
                  <span>
                    <time datetime="2023-10">Oct 2023</time> \u2013
                    Present
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Next.js Web Developer/Maintainer</strong>
                    <a href="https://www.referalah.com">www.referalah.com</a>
                </div>
              </header>
                <p>Referalah is an open-sourced platform for overseas HongKongers to network for job referrals, connect for job opportunities, and support each other.</p>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Campus TV, HKUSU, Session 2020-2021</h4>
                  <span>
                    <time datetime="2020-03">Mar 2020</time> \u2013
                    <time datetime="2021-02">Feb 2021</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Chairperson &amp; Student Press</strong>
                    <a href="https://www.facebook.com/hkucampustv/">www.facebook.com/hkucampustv</a>
                </div>
              </header>
                <p>Campus TV is a student-run media organization in HKU. We produce videos and articles to report on campus news and events. We make a large variety of videos from memes, to interviews with HKU Council or student bodies candidates. We also have a Facebook page with over 100,000 followers.</p>
            </article>
        </div>
      </section>
      <section id="education">
        <h3>Education</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>The University of Hong Kong</h4>
                  <span>
                    <time datetime="2019-09">Sep 2019</time> \u2013
                    <time datetime="2024-06">Jun 2024</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Computer Science</strong>
                </div>
              </header>
                <h5>Courses</h5>
                <ul>
                    <li>COMP2119 - Introduction to data structures and algorithms</li>
                    <li>COMP2120 - Computer organization</li>
                    <li>COMP2396 - Object-oriented programming and Java</li>
                    <li>COMP3230 - Principles of operating systems</li>
                    <li>COMP3251 - Algorithm design</li>
                    <li>COMP3258 - Functional programming (Haskell)</li>
                    <li>COMP3259 - Principles of programming languages (Haskell) (A+)</li>
                    <li>COMP3278 - Introduction to database management systems</li>
                    <li>COMP3322 - Modern Technologies on World Wide Web</li>
                    <li>COMP3355 - Cyber Security</li>
                </ul>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Aalto University</h4>
                  <span>
                    <time datetime="2022-01">Jan 2022</time> \u2013
                    <time datetime="2022-05">May 2022</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Computer Science</strong>
                </div>
              </header>
                <h5>Courses</h5>
                <ul>
                    <li>Software Engineering</li>
                    <li>Machine Learning</li>
                    <li>Basic Principles in Networking</li>
                    <li>Introduction to AI</li>
                    <li>Digital Ethics</li>
                </ul>
            </article>
        </div>
      </section>
      <section id="projects">
        <h3>Projects</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>An All-in-one HKU App for Students (Final Year Project/Final Research Project)</h4>
                  <span>
                    <time datetime="2023-09-01">Sep 2023</time> \u2013
                    Present
                  </span>
                </div>
                <div class="spaced-list">
                  <span>
                  </span>
                    <a href="https://wp2023.cs.hku.hk/fyp23079/">wp2023.cs.hku.hk/fyp23079</a>
                </div>
              </header>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Haskell-based JavaScript-like interpreter</h4>
                  <span>
                    <time datetime="2023-01-01">Jan 2023</time> \u2013
                    <time datetime="2023-05-31">May 2023</time>
                  </span>
                </div>
                <div class="spaced-list">
                  <span>
                  </span>
                    <a href=""></a>
                </div>
              </header>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Simple Messaging Client-to-host</h4>
                  <span>
                    <time datetime="2022-01-01">Jan 2022</time> \u2013
                    <time datetime="2022-05-31">May 2022</time>
                  </span>
                </div>
                <div class="spaced-list">
                  <span>
                  </span>
                    <a href="https://github.com/yaucp/Messaging">github.com/yaucp/Messaging</a>
                </div>
              </header>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Big Two</h4>
                  <span>
                    <time datetime="2020-09-30">Sep 2020</time> \u2013
                    <time datetime="2020-12-31">Dec 2020</time>
                  </span>
                </div>
                <div class="spaced-list">
                  <span>
                  </span>
                    <a href=""></a>
                </div>
              </header>
            </article>
        </div>
      </section>
      <section id="certificates">
        <h3>Certificates</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>IELTS Academic Band 8.0</h4>
                </div>
                <div class="spaced-list">
                    <span>
                      Issued by <strong>IELTS Official</strong>
                    </span>
                </div>
              </header>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Programming with Google Go Specialization</h4>
                </div>
                <div class="spaced-list">
                    <span>
                      Issued by <strong>Coursera</strong>
                    </span>
                    <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/H4GWC9AQZXKN">www.coursera.org/account/accomplishments/specialization/certificate/H4GWC9AQZXKN</a>
                </div>
              </header>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Engineering Virtual Program Participant</h4>
                </div>
                <div class="spaced-list">
                    <span>
                      Issued by <strong>Goldman Sachs</strong>
                    </span>
                    <a href="https://insidesherpa.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_9hP8S2DkX4MC7aPsg_completion_certificate.pdf">insidesherpa.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_9hP8S2DkX4MC7aPsg_completion_certificate.pdf</a>
                </div>
              </header>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Participant of PwC\u2019s HackaDay 2021 Capture the Flag Competition</h4>
                </div>
                <div class="spaced-list">
                    <span>
                      Issued by <strong>PwC</strong>
                    </span>
                </div>
              </header>
            </article>
        </div>
      </section>
      <section id="skills">
        <h3>Skills</h3>
        <div class="grid-list">
            <div>
                <h4>JavaScript Frameworks/Libraries</h4>
                <ul class="tag-list">
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Jest</li>
                </ul>
            </div>
            <div>
                <h4>Programming Languages</h4>
                <ul class="tag-list">
                    <li>Python</li>
                    <li>Java</li>
                    <li>Kotlin</li>
                    <li>Go</li>
                    <li>C++/C</li>
                    <li>Haskell</li>
                </ul>
            </div>
            <div>
                <h4>Others</h4>
                <ul class="tag-list">
                    <li>Git</li>
                    <li>GitHub/GitLab</li>
                    <li>Unix/MacOS</li>
                    <li>Ubuntu</li>
                    <li>Google Cloud Platform (GCP)</li>
                    <li>Protocol Buffers</li>
                    <li>Cloudflare Registrar &amp; Page</li>
                    <li>GitHub Actions</li>
                </ul>
            </div>
            <div>
                <h4>Creative Stuff</h4>
                <ul class="tag-list">
                    <li>Adobe Premiere Pro</li>
                    <li>Adobe Photoshop</li>
                </ul>
            </div>
        </div>
      </section>
      <section id="languages">
        <h3>Languages</h3>
        <div class="grid-list">
            <div>
                <h4>Cantonese</h4>
              Native Speaker
            </div>
            <div>
                <h4>English</h4>
              Full Professional (IELTS Band 8)
            </div>
            <div>
                <h4>Mandarin</h4>
              Full Professional
            </div>
        </div>
      </section>
      <section id="interests">
        <h3>Interests</h3>
        <div class="grid-list">
            <div>
                <h4>Photography</h4>
            </div>
            <div>
                <h4>Watching Movies</h4>
            </div>
            <div>
                <h4>Solo travelling</h4>
            </div>
        </div>
      </section>
  </body>
</html>
`,"package.json":`{
  "name": "jsonresume-theme-class-yaucp",
  "version": "0.2.8",
  "description": "Class Theme for JSON Resume",
  "author": "Seth Falco",
  "license": "MIT",
  "private": false,
  "keywords": [
    "resume",
    "handlebars",
    "cv",
    "jsonresume",
    "jsonresume-theme",
    "jsonresume-theme-class"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/yaucp/jsonresume-theme-class.git"
  },
  "scripts": {
    "build:pdf": "resume export --theme . resume.pdf",
    "build:html": "resume export --theme . resume.html"
  },
  "dependencies": {
    "handlebars": "^4.7.7",
    "marked": "^4.0.17"
  },
  "devDependencies": {
    "resume-cli": "^3.0.5"
  },
  "bugs": {
    "url": "https://github.com/jsonresume/jsonresume-theme-class/issues"
  },
  "homepage": "https://github.com/yaucp/jsonresume-theme-class",
  "main": "index.js"
}
`,"public/index.html":`<!DOCTYPE html>
<html>
<head prefix="og: http://ogp.me/ns# profile: http://ogp.me/ns/profile#">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta property="og:type" content="profile">
  <meta name="twitter:card" content="summary">

    <title>Yau Chin Pang (Thomas) - CV</title>
    <meta name="description" content="Hello there\u{1F44B}\u{1F3FB}! I Took a gap semester for a full-time internship in Finverse Technologies in the last Winter semester. Mostly familiar with JavaScript (Typescript/Node.js) and Python now. I also have experience using Java, C++/C, Go, and Haskell (Had a ton of fun using Haskell! Very Interested using it for my graduate job) Interested working in backend in the future...">

    <meta property="og:title" content="Resume of Yau Chin Pang (Thomas)">
    <meta property="og:url" content="https://yaucp.dev">
      <meta property="og:description" content="Resume of Thomas Yau Chin Pang. It is automatically generated by using GitHub Actions with JSON Resume Schema. Click on me to find out more!">
    <meta property="profile:first_name" content="Chin Pang">
    <meta property="profile:last_name" content="Yau">


    <!--  For SEO-->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Hong Kong"
        },
        "email": "mailto:me@yaucp.dev",
        "image": "",
        "name": "Yau Chin Pang (Thomas)",
        "telephone": "+852 51136393",
        "url": "https://yaucp.dev",
        "description": "Hello there\u{1F44B}\u{1F3FB}! I Took a gap semester for a full-time internship in Finverse Technologies in the last Winter semester. Mostly familiar with JavaScript (Typescript/Node.js) and Python now. I also have experience using Java, C++/C, Go, and Haskell (Had a ton of fun using Haskell! Very Interested using it for my graduate job) Interested working in backend in the future..."
      }
    <\/script>


  <style>
      /*! normalize.css 2012-02-07T12:37 UTC - http://github.com/necolas/normalize.css */
article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block}audio,canvas,video{display:inline-block;*display:inline;*zoom:1}audio:not([controls]){display:none}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html,button,input,select,textarea{font-family:sans-serif}body{margin:0}a:focus{outline:thin dotted}a:hover,a:active{outline:0}h1{font-size:2em;margin:.67em 0}h2{font-size:1.5em;margin:.83em 0}h3{font-size:1.17em;margin:1em 0}h4{font-size:1em;margin:1.33em 0}h5{font-size:.83em;margin:1.67em 0}h6{font-size:.75em;margin:2.33em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}blockquote{margin:1em 40px}dfn{font-style:italic}mark{background:#ff0;color:#000}p,pre{margin:1em 0}pre,code,kbd,samp{font-family:monospace,serif;_font-family:'courier new',monospace;font-size:1em}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word}q{quotes:none}q:before,q:after{content:'';content:none}small{font-size:75%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}dl,menu,ol,ul{margin:1em 0}dd{margin:0 0 0 40px}menu,ol,ul{padding:0 0 0 40px}nav ul,nav ol{list-style:none;list-style-image:none}img{border:0;-ms-interpolation-mode:bicubic}svg:not(:root){overflow:hidden}figure{margin:0}form{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0;white-space:normal;*margin-left:-7px}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle}button,input{line-height:normal}button,input[type="button"],input[type="reset"],input[type="submit"]{cursor:pointer;-webkit-appearance:button;*overflow:visible}button[disabled],input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;*height:13px;*width:13px}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-cancel-button{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}

/* Variables */

body {
  --fg-color: black;
  --bg-color: #FFFFFF;
  --header-h1-fg-color: #FFFFFF;
  --header-h2-fg-color: #F3F3F3;
  --header-bg-color: #1866C3;
  --h2-fg-color: #F3F3F3;
  --link-color: #3061A5;
  --seperator-color: #E2E2E2;
}

@media (prefers-color-scheme: dark) {
  body {
    --fg-color: #D5D6D7;
    --bg-color: #041C32;
    --header-h1-fg-color: #ECB365;
    --header-h2-fg-color: #ECB365;
    --header-bg-color: #04293A;
    --link-color: #70A1E5;
    --seperator-color: #939393;
    --h2-fg-color: #ECB365;
  }
}

/* Page CSS */

body {
  color: var(--fg-color);
  background: var(--bg-color);
  font-size: 0.9em;
  font-family: 'Helvetica', 'Arial', 'Trebuchet MS', 'Verdana', sans-serif;
}

em {
  color: #999;
}

p {
  line-height: 1.4;
}

a {
  color: var(--link-color);
  text-decoration: none;
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
  break-inside: avoid;
}

header {
  background: var(--header-bg-color);
  padding: 50px;
  margin-bottom: 50px;
}

header h1 {
  color: var(--header-h1-fg-color);
  max-width: 772px;
  margin: 0 auto;
}

header h2 {
  color: var(--header-h2-fg-color);
  font-size: 1em;
  max-width: 772px;
  margin: 0 auto;
}

footer {
  margin-top: 1em !important;
  margin-bottom: 1em !important;
  font-size: 0.8em;
  font-style:italic;
  text-align: center;
}

.container, footer {
  max-width: 772px;
  padding: 0 50px;
  margin: 0 auto;
}

.container h2,
#basics h3{
  color: var(--h2-fg-color);
}

#basics {
  margin-bottom: 10px;
  border-bottom: 1px var(--seperator-color) solid;
}
#basics h3 {
  margin-bottom: 10px;
}

.contact h3 {
  padding-bottom: 10px;
}

.split {
  display: flex;
  flex-wrap: wrap;
}

.split strong {
  margin-right: 2em;
}

.website,
.email,
.phone {
  margin-bottom: 10px;
  width: 50%;
}

#profiles {
  overflow: hidden;
}

#profiles .item {
  width: 50%;
}

.username{
  margin-top: 10px;
}

.work_date,
.work_position,
.work_website,
.institution,
.study_date,
.qualification {
  margin-bottom: 10px;
  width: 30%;
}

.courses {
  clear: both;
}

.dissertation {
  margin-top: 10px;
}

#work,
#volunteer,
#projects{
  padding-bottom: 5px;
  border-bottom: 1px var(--seperator-color) solid;
}

#work .item,
#volunteer .item,
#projects .item{
  margin: 25px 0;
}

#skills {
  margin-bottom: 10px;
  border-bottom: 1px var(--seperator-color) solid;
  padding-bottom: 5px;
}

#skills .item,
#languages .item {
  margin: 0 0 25px 0;
}

#interests .item {
  margin-bottom: 25px;
}

#skills {
  overflow: hidden;
}

#languages .item,
#interests .item,
#skills .item {
  width: 50%;
}

#references,
#interests {
  clear: both;
}

  </style>

</head>
<body>

  <header>
    <h1>Yau Chin Pang (Thomas)</h1>
      <h2>HKUCS@2024</h2>
  </header>

  <div id="content" class="container">
    <section id="basics">
      <div class="contact">
        <h3>Contact</h3>
        <div class="split">
            <div class="website">
              <strong>Website</strong>
              <a href="https://yaucp.dev">https://yaucp.dev</a>
            </div>
            <div class="email">
              <strong>Email</strong>
              <a href="mailto:me@yaucp.dev">me@yaucp.dev</a>
            </div>
            <div class="phone">
              <strong>Phone</strong>
              <a href="tel:+852 51136393">+852 51136393</a>
            </div>
        </div>
      </div>
        <div class="summary">
          <h3>About</h3>
          <p>Hello there\u{1F44B}\u{1F3FB}! I Took a gap semester for a full-time internship in Finverse Technologies in the last Winter semester. Mostly familiar with JavaScript (Typescript/Node.js) and Python now. I also have experience using Java, C++/C, Go, and Haskell (Had a ton of fun using Haskell! Very Interested using it for my graduate job) Interested working in backend in the future...</p>
        </div>
        <section id="profiles" class="split">
            <div class="item">
                <strong class="network">
                  LinkedIn
                </strong>
              <div>
                  <a href="https://www.linkedin.com/in/yaucp/">
                      yaucp
                  </a>
              </div>
            </div>
            <div class="item">
                <strong class="network">
                  GitHub
                </strong>
              <div>
                  <a href="https://github.com/yaucp/">
                      yaucp
                  </a>
              </div>
            </div>
        </section>
    </section>

    <section id="skills">
      <h2>Skills</h2>
        <div class="item">
            <div class="name">
              JavaScript Frameworks/Libraries
            </div>
            <ul class="keywords">
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Jest</li>
            </ul>
        </div>
        <div class="item">
            <div class="name">
              Programming Technologies
            </div>
            <ul class="keywords">
                <li>Python</li>
                <li>Java</li>
                <li>Go</li>
                <li>C++/C</li>
                <li>Haskell</li>
                <li>MySQL</li>
            </ul>
        </div>
        <div class="item">
            <div class="name">
              Others
            </div>
            <ul class="keywords">
                <li>Git</li>
                <li>GitHub/GitLab</li>
                <li>Unix/MacOS</li>
                <li>Ubuntu</li>
                <li>Google Cloud Platform (GCP)</li>
                <li>Protocol Buffers</li>
                <li>Cloudflare Registrar &amp; Page</li>
                <li>GitHub Actions</li>
            </ul>
        </div>
        <div class="item">
            <div class="name">
              Creative Stuff
            </div>
            <div class="level">
              <em>Beginner</em>
            </div>
            <ul class="keywords">
                <li>Adobe Premiere Pro</li>
                <li>Adobe Photoshop</li>
            </ul>
        </div>
    </section>

    <section id="work">
      <h2>Work Experience</h2>
        <div class="item">
            <h3 class="work_name">
              Metamory.io
            </h3>

          <div class="split">
              <div class="work_position">
                Software Engineer Intern
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2023-06-01T00:00:00.000Z">Jun 2023</time>
                </span>
                <span class="endDate">
          - <time datetime="2023-07-01T00:00:00.000Z">Jul 2023</time>
        </span>
            </div>

          </div>

            <ul class="highlights">
                <li>Added OAuth-Based Authentication to Next.js website with Auth.js</li>
                <li>Built a demo/POC with Stripe&#39;s Payment API with its Custom Payment Elements and Prebuilt Checkout Page</li>
            </ul>
        </div>
        <div class="item">
            <h3 class="work_name">
              Finverse Technologies
            </h3>

          <div class="split">
              <div class="work_position">
                Software Engineer Intern (Part-time)
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2023-01-01T00:00:00.000Z">Jan 2023</time>
                </span>
                <span class="endDate">
          - <time datetime="2023-01-01T00:00:00.000Z">Jan 2023</time>
        </span>
            </div>

              <div class="work_website">
                <a href="https://www.finverse.com">https://www.finverse.com</a>
              </div>
          </div>

        </div>
        <div class="item">
            <h3 class="work_name">
              Finverse Technologies
            </h3>
          
          <div class="split">
              <div class="work_position">
                Software Engineer Intern
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2022-07-01T00:00:00.000Z">Jul 2022</time>
                </span>
                <span class="endDate">
          - <time datetime="2022-12-01T00:00:00.000Z">Dec 2022</time>
        </span>
            </div>

              <div class="work_website">
                <a href="https://www.finverse.com">https://www.finverse.com</a>
              </div>
          </div>

            <ul class="highlights">
                <li>Connected different commercial banks to an open-banking API-based system by reverse engineering and web scraping data from banks securely in TypeScript and Node.js</li>
                <li>Handling different communications between micro-services with Go and Protocol Buffers</li>
                <li>Added demo of API functionality with React.js</li>
                <li>Wrote unit tests to ensure high code quality with Jest and Nock</li>
            </ul>
        </div>
        <div class="item">
            <h3 class="work_name">
              Thales
            </h3>

          <div class="split">
              <div class="work_position">
                Software Intern
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2021-07-01T00:00:00.000Z">Jul 2021</time>
                </span>
                <span class="endDate">
          - <time datetime="2021-08-01T00:00:00.000Z">Aug 2021</time>
        </span>
            </div>

          </div>

            <ul class="highlights">
                <li>Used Python to verify and search for missing files or lines according to specifications</li>
                <li>Configured database that stores status and commands of equipment in the station in Unix system</li>
            </ul>
        </div>
        <div class="item">
            <h3 class="work_name">
              Esri China (Hong Kong)
            </h3>

          <div class="split">
              <div class="work_position">
                Programmer Trainee Intern
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2021-06-01T00:00:00.000Z">Jun 2021</time>
                </span>
                <span class="endDate">
          - <time datetime="2021-07-01T00:00:00.000Z">Jul 2021</time>
        </span>
            </div>

          </div>

            <ul class="highlights">
                <li>Used Python to collect and group real-time open data to update local geodatabase in ArcGIS Pro</li>
            </ul>
        </div>
    </section>

    <section id="volunteer">
      <h2>Volunteer</h2>
        <div class="item">
            <h3 class="company">
              Campus TV, HKUSU, Session 2020-2021
            </h3>

          <div class="split">
              <div class="work_position">
                Chairperson &amp; Student Press
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2020-03-01T00:00:00.000Z">Mar 2020</time>
                </span>
                <span class="endDate">
          - <time datetime="2021-02-01T00:00:00.000Z">Feb 2021</time>
        </span>
            </div>

              <div class="work_website">
                <a href="https://www.facebook.com/hkucampustv/">https://www.facebook.com/hkucampustv/</a>
              </div>
          </div>

        </div>
    </section>

    <section id="projects">
      <h2>Projects</h2>
        <div class="item">

            <h3 class="work_name">
              Haskell-based JavaScript-like interpreter
            </h3>

          <div class="split">
            <div class="work_date">
                <span class="startDate">
                  <time datetime="2023-01-01T00:00:00.000Z">Jan 2023</time>
                </span>
                <span class="endDate">
          - <time datetime="2023-05-31T00:00:00.000Z">May 2023</time>
                        </span>
            </div>
          </div>

          <div class="split">
              <div class="summary">
                <p>Developed a programming language interpreter with Haskell during Principles of Programming Languages course with features like conditionals, function definitions, higher-order functions, mutable-state...</p>
              </div>
          </div>
        </div>
        <div class="item">

            <h3 class="work_name">
              Simple Messaging Client-to-host
            </h3>

          <div class="split">
            <div class="work_date">
                <span class="startDate">
                  <time datetime="2022-01-01T00:00:00.000Z">Jan 2022</time>
                </span>
                <span class="endDate">
          - <time datetime="2022-05-31T00:00:00.000Z">May 2022</time>
                        </span>
            </div>
              <div class="work_website">
                <a href="https://github.com/yaucp/Messaging">https://github.com/yaucp/Messaging</a>
              </div>
          </div>

          <div class="split">
              <div class="summary">
                <p>A simple messaging client/host written in Python for computer networking course in Aalto University. Socket programming is involved as well to try to learn the basics of computer networking.</p>
              </div>
          </div>
        </div>
        <div class="item">

            <h3 class="work_name">
              Big Two
            </h3>

          <div class="split">
            <div class="work_date">
                <span class="startDate">
                  <time datetime="2020-09-30T00:00:00.000Z">Sep 2020</time>
                </span>
                <span class="endDate">
          - <time datetime="2020-12-31T00:00:00.000Z">Dec 2020</time>
                        </span>
            </div>
          </div>

          <div class="split">
              <div class="summary">
                <p>Multiplayer networked cross-platform card game in Java</p>
              </div>
          </div>
        </div>
    </section>

    <section id="education">
      <h2>Education</h2>
        <div class="item">

          <div class="split">
              <div class="institution">
                The University of Hong Kong
              </div>

            <div class="study_date">
                <span class="startDate">
                  <time datetime="2019-09-01T00:00:00.000Z">Sep 2019</time>
                </span>
                <span class="endDate">
          - <time datetime="2024-06-01T00:00:00.000Z">Jun 2024</time>
        </span>
            </div>

          </div>

            <div class="qualification">
              Bachelor of Engineering - BEng
            </div>

            <ul class="courses">
                <li>COMP2396 - Object-oriented programming and Java</li>
                <li>COMP3322 - Modern Technologies on World Wide Web</li>
                <li>COMP2119 - Introduction to data structures and algorithms</li>
                <li>COMP3230 - Principles of operating systems</li>
                <li>COMP3258 - Functional programming (Haskell)</li>
                <li>COMP3278 - Introduction to database management systems</li>
                <li>COMP3355 - Cyber Security</li>
                <li>COMP3251 - Algorithm design</li>
                <li>COMP3259 - Principles of programming languages (Haskell) (A+)</li>
                <li>COMP2120 - Computer organization</li>
            </ul>

        </div>
        <div class="item">

          <div class="split">
              <div class="institution">
                Aalto University
              </div>

            <div class="study_date">
                <span class="startDate">
                  <time datetime="2022-01-01T00:00:00.000Z">Jan 2022</time>
                </span>
                <span class="endDate">
          - <time datetime="2022-05-01T00:00:00.000Z">May 2022</time>
        </span>
            </div>

          </div>

            <div class="qualification">
              Semester Exchange
            </div>

            <ul class="courses">
                <li>Software Engineering</li>
                <li>Machine Learning</li>
                <li>Basic Principles in Networking</li>
                <li>Introduction to AI</li>
                <li>Digital Ethics</li>
            </ul>

        </div>
    </section>

    <section id="languages">
      <h2>Languages</h2>
        <div class="item">
            <div class="language">
              Cantonese
            </div>
            <div class="level">
              <em>Native Speaker</em>
            </div>
        </div>
        <div class="item">
            <div class="language">
              English
            </div>
            <div class="level">
              <em>Full Professional</em>
            </div>
        </div>
        <div class="item">
            <div class="language">
              Mandarin
            </div>
            <div class="level">
              <em>Full Professional</em>
            </div>
        </div>
    </section>

    <section id="interests">
      <h2>Interests</h2>
        <div class="item">
            <div class="name">
              Photography
            </div>
        </div>
        <div class="item">
            <div class="name">
              Watching Movies
            </div>
        </div>
        <div class="item">
            <div class="name">
              Solo travelling
            </div>
        </div>
    </section>


</div>

<footer>
    <p>Check out the <a href="https://github.com/yaucp/yaucp">GitHub repo</a> for this website!</p>
    <p>This website is powered by Cloudflare Page. The html page is automatically generated by using <a href="https://github.com/marketplace/actions/jsonresume-export">Github Actions</a> with <a href="https://jsonresume.org/schema/">JSON Resume</a> schema.</p>
</footer>

<script>
  console.log('Theme made with \u{1F495} using JSON Resume and Handlebars!\\nhttps://github.com/jsonresume/jsonresume-theme-class')
<\/script>
</body>
</html>
`,"resume.handlebars":`<!DOCTYPE html>
<html lang="en">
<head prefix="og: https://ogp.me/ns# profile: https://ogp.me/ns/profile#">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta property="og:type" content="profile">
  <meta name="twitter:card" content="summary">

  {{#resume.basics}}
    <title>{{name}} - CV</title>
    <meta name="description" content="{{summary}}">

    <meta property="og:title" content="Resume of {{name}}">
    <meta property="og:url" content="{{url}}">
    {{#if openGraphDescription}}
      <meta property="og:description" content="{{openGraphDescription}}">
    {{else}}
      <meta property="og:description" content="{{summary}}">
    {{/if}}
    <meta property="profile:first_name" content="{{firstName}}">
    <meta property="profile:last_name" content="{{lastName}}">

    {{#if image}}
      <link rel="icon" href="{{image}}">
      <meta property="og:image" content="{{image}}">
      <meta property="og:image:alt" content="Avatar of {{name}}.">
    {{/if}}

    <!--  For SEO-->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "{{location.city}}"
        },
        "email": "mailto:{{email}}",
        "image": "{{image}}",
        "name": "{{name}}",
        "telephone": "{{phone}}",
        "url": "{{url}}",
        "description": "{{summary}}"
      }
    <\/script>
  {{/resume.basics}}

  {{#resume.custom}}
    {{#if twitterHandle}}
      <meta name="twitter:site" content="{{twitterHandle}}">
    {{/if}}
  {{/resume.custom}}

  <style>
      {{{css}}}
  </style>

</head>
<body>

{{#resume.basics}}
  <header>
    <h1>{{name}}</h1>
    {{#if label}}
      <h2>{{label}}</h2>
    {{/if}}
  </header>

  <div id="content" class="container">
    <section id="basics">
      <div class="contact">
        <h3>Contact</h3>
        <div class="split">
          {{#if url}}
            <div class="website">
              <strong>Website</strong>
              <a href="{{url}}">{{url}}</a>
            </div>
          {{else if website}}
            <div class="website">
              <strong>Website</strong>
              <a href="{{website}}">{{website}}</a>
            </div>
          {{/if}}
          {{#if email}}
            <div class="email">
              <strong>Email</strong>
              <a href="mailto:{{email}}">{{email}}</a>
            </div>
          {{/if}}
          {{#if phone}}
            <div class="phone">
              <strong>Phone</strong>
              <a href="tel:{{phone}}">{{phone}}</a>
            </div>
          {{/if}}
        </div>
      </div>
      {{#if summary}}
        <div class="summary">
          <h3>About</h3>
          <p>{{{markdown summary}}}</p>
        </div>
      {{/if}}
      {{#if profiles.length}}
        <section id="profiles" class="split">
          {{#each profiles}}
            <div class="item">
              {{#if network}}
                <strong class="network">
                  {{network}}
                </strong>
              {{/if}}
              <div>
                {{#if url}}
                  <a href="{{url}}">
                    {{#if username}}
                      {{username}}
                    {{else}}
                      {{url}}
                    {{/if}}
                  </a>
                {{else}}
                  <span>
                    {{username}}
                  </span>
                {{/if}}
              </div>
            </div>
          {{/each}}
        </section>
      {{/if}}
    </section>
{{/resume.basics}}

{{#if resume.skills.length}}
    <section id="skills">
      <h2>Skills</h2>
      {{#each resume.skills}}
        <div class="item">
          {{#if name}}
            <div class="name">
              {{name}}
            </div>
          {{/if}}
          {{#if level}}
            <div class="level">
              <em>{{level}}</em>
            </div>
          {{/if}}
          {{#if keywords.length}}
            <ul class="keywords">
              {{#each keywords}}
                <li>{{.}}</li>
              {{/each}}
            </ul>
          {{/if}}
        </div>
      {{/each}}
    </section>
{{/if}}

{{#if resume.work.length}}
    <section id="work">
      <h2>Work Experience</h2>
      {{#each resume.work}}
        <div class="item">
          {{#if name}}
            <h3 class="work_name">
              {{name}}
            </h3>
          {{else if company}}
            <h3 class="work_name">
              {{company}}
            </h3>
          {{/if}}

          <div class="split">
            {{#if position}}
              <div class="work_position">
                {{position}}
              </div>
            {{/if}}

            <div class="work_date">
              {{#if startDate}}
                <span class="startDate">
                  {{{date startDate}}}
                </span>
                <span class="endDate">
          - {{{date endDate}}}
        </span>
              {{/if}}
            </div>

            {{#if url}}
              <div class="work_website">
                <a href="{{url}}">{{url}}</a>
              </div>
            {{else if website}}
              <div class="work_website">
                <a href="{{website}}">{{website}}</a>
              </div>
            {{/if}}
          </div>

          {{#if summary}}
            <div class="summary">
              <p>{{{markdown summary}}}</p>
            </div>
          {{/if}}
          {{#if highlights.length}}
            <ul class="highlights">
              {{#each highlights}}
                <li>{{{markdown .}}}</li>
              {{/each}}
            </ul>
          {{/if}}
        </div>
      {{/each}}
    </section>
{{/if}}

{{#if resume.volunteer.length}}
    <section id="volunteer">
      <h2>Volunteer</h2>
      {{#each resume.volunteer}}
        <div class="item">
          {{#if organization}}
            <h3 class="company">
              {{organization}}
            </h3>
          {{/if}}

          <div class="split">
            {{#if position}}
              <div class="work_position">
                {{position}}
              </div>
            {{/if}}

            <div class="work_date">
              {{#if startDate}}
                <span class="startDate">
                  {{{date startDate}}}
                </span>
                <span class="endDate">
          - {{{date endDate}}}
        </span>
              {{/if}}
            </div>

            {{#if url}}
              <div class="work_website">
                <a href="{{url}}">{{url}}</a>
              </div>
            {{else if website}}
              <div class="work_website">
                <a href="{{website}}">{{website}}</a>
              </div>
            {{/if}}
          </div>

          {{#if summary}}
            <div class="summary">
              <p>{{{markdown summary}}}</p>
            </div>
          {{/if}}
          {{#if highlights.length}}
            <ul class="highlights">
              {{#each highlights}}
                <li>{{{markdown .}}}</li>
              {{/each}}
            </ul>
          {{/if}}
        </div>
      {{/each}}
    </section>
{{/if}}

{{#if resume.projects.length}}
    <section id="projects">
      <h2>Projects</h2>
      {{#each resume.projects}}
        <div class="item">

          {{#if name}}
            <h3 class="work_name">
              {{name}}
            </h3>
          {{/if}}

          <div class="split">
            <div class="work_date">
              {{#if startDate}}
                <span class="startDate">
                  {{{date startDate}}}
                </span>
                <span class="endDate">
          - {{{date endDate}}}
                        </span>
              {{/if}}
            </div>
            {{#if url}}
              <div class="work_website">
                <a href="{{url}}">{{url}}</a>
              </div>
            {{else if website}}
              <div class="work_website">
                <a href="{{website}}">{{website}}</a>
              </div>
            {{/if}}
          </div>

          <div class="split">
            {{#if summary}}
              <div class="summary">
                <p>{{{markdown summary}}}</p>
              </div>
            {{/if}}
          </div>

          {{#if keywords.length}}
            <ul class="horizontal_list" style="text-align: center;">
              {{#each keywords}}
                <li style="display: inline;">{{.}}</li>
              {{/each}}
            </ul>
          {{/if}}
        </div>
      {{/each}}
    </section>
{{/if}}

{{#if resume.education.length}}
    <section id="education">
      <h2>Education</h2>
      {{#each resume.education}}
        <div class="item">

          <div class="split">
            {{#if institution}}
              <div class="institution">
                {{institution}}
              </div>
            {{/if}}

            <div class="study_date">
              {{#if startDate}}
                <span class="startDate">
                  {{{date startDate}}}
                </span>
                <span class="endDate">
          - {{{date endDate}}}
        </span>
              {{/if}}
            </div>

            {{#if url}}
              <div class="work_website">
                <a href="{{url}}">{{url}}</a>
              </div>
            {{/if}}
          </div>

          {{#if qualification}}
            <div class="qualification">
              {{qualification}}
            </div>
          {{/if}}

          {{#if courses.length}}
            <ul class="courses">
              {{#each courses}}
                <li>{{.}}</li>
              {{/each}}
            </ul>
          {{/if}}

          {{#if dissertation}}
            <div class="dissertation">
              <span>Dissertation: </span>{{dissertation}}
            </div>
          {{/if}}
        </div>
      {{/each}}
    </section>
{{/if}}

{{#if resume.languages.length}}
    <section id="languages">
      <h2>Languages</h2>
      {{#each resume.languages}}
        <div class="item">
          {{#if language}}
            <div class="language">
              {{language}}
            </div>
          {{/if}}
          {{#if fluency}}
            <div class="level">
              <em>{{fluency}}</em>
            </div>
          {{/if}}
        </div>
      {{/each}}
    </section>
{{/if}}

{{#if resume.interests.length}}
    <section id="interests">
      <h2>Interests</h2>
      {{#each resume.interests}}
        <div class="item">
          {{#if name}}
            <div class="name">
              {{name}}
            </div>
          {{/if}}
          {{#if keywords.length}}
            <ul class="keywords">
              {{#each keywords}}
                <li>{{.}}</li>
              {{/each}}
            </ul>
          {{/if}}
        </div>
      {{/each}}
    </section>
{{/if}}

{{#if resume.references.length}}
    <section id="references">
      <h2>References</h2>
      {{#each resume.references}}
        <div class="item">
          {{#if reference}}
            <blockquote class="reference">
              {{reference}}
            </blockquote>
          {{/if}}
          {{#if name}}
            <div class="name">
              \u2014 {{name}}
            </div>
          {{/if}}
        </div>
      {{/each}}
    </section>
{{/if}}

</div>

<footer>
  {{#resume.meta}}
    <p>Check out the <a href="{{githubRepoUrl}}">GitHub repo</a> for this website!</p>
    <p>{{{markdown footerText}}}</p>
  {{/resume.meta}}
</footer>

<script>
  console.log('Theme made with \u{1F495} using JSON Resume and Handlebars!\\nhttps://github.com/jsonresume/jsonresume-theme-class')
<\/script>
</body>
</html>
`,"resume.html":`<!DOCTYPE html>
<html lang="en">
<head prefix="og: https://ogp.me/ns# profile: https://ogp.me/ns/profile#">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta property="og:type" content="profile">
  <meta name="twitter:card" content="summary">

    <title>Yau Chin Pang (Thomas) - CV</title>
    <meta name="description" content="Hello there\u{1F44B}\u{1F3FB}! &lt;br /&gt;&lt;br /&gt;I took a gap semester for a full-time internship in Finverse Technologies in the 2022 Autumn semester. &lt;br /&gt;&lt;br /&gt;Mostly familiar with JavaScript (Typescript/Node.js) and Python now. I also have experience using Java, C++/C, Go, and Haskell (Had a ton of fun using Haskell! Very Interested using it for my graduate job)&lt;br /&gt;Interested working in backend in the future...&lt;br /&gt;&lt;br /&gt;Learning GoLang, gRPC, Swift and PostgreSQL for my final year project">

    <meta property="og:title" content="Resume of Yau Chin Pang (Thomas)">
    <meta property="og:url" content="https://yaucp.dev">
      <meta property="og:description" content="Resume of Thomas Yau Chin Pang. It is automatically generated by using GitHub Actions with JSON Resume Schema. Click on me to find out more!">
    <meta property="profile:first_name" content="Chin Pang">
    <meta property="profile:last_name" content="Yau">


    <!--  For SEO-->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Hong Kong"
        },
        "email": "mailto:me@yaucp.dev",
        "image": "",
        "name": "Yau Chin Pang (Thomas)",
        "telephone": "+852 51136393",
        "url": "https://yaucp.dev",
        "description": "Hello there\u{1F44B}\u{1F3FB}! &lt;br /&gt;&lt;br /&gt;I took a gap semester for a full-time internship in Finverse Technologies in the 2022 Autumn semester. &lt;br /&gt;&lt;br /&gt;Mostly familiar with JavaScript (Typescript/Node.js) and Python now. I also have experience using Java, C++/C, Go, and Haskell (Had a ton of fun using Haskell! Very Interested using it for my graduate job)&lt;br /&gt;Interested working in backend in the future...&lt;br /&gt;&lt;br /&gt;Learning GoLang, gRPC, Swift and PostgreSQL for my final year project"
      }
    <\/script>


  <style>
      /*! normalize.css 2012-02-07T12:37 UTC - http://github.com/necolas/normalize.css */
article, aside, details, figcaption, figure, footer, header, hgroup, nav, section, summary {
  display: block
}

audio, canvas, video {
  display: inline-block;
  *display: inline;
  *zoom: 1
}

audio:not([controls]) {
  display: none
}

[hidden] {
  display: none
}

html {
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%
}

html, button, input, select, textarea {
  font-family: sans-serif
}

body {
  margin: 0
}

a:focus {
  outline: thin dotted
}

a:hover, a:active {
  outline: 0
}

h1 {
  font-size: 2em;
  margin: .67em 0
}

h2 {
  font-size: 1.5em;
  margin: .83em 0
}

h3 {
  font-size: 1.17em;
  margin: 1em 0
}

h4 {
  font-size: 1em;
  margin: 1.33em 0
}

h5 {
  font-size: .83em;
  margin: 1.67em 0
}

h6 {
  font-size: .75em;
  margin: 2.33em 0
}

abbr[title] {
  border-bottom: 1px dotted
}

b, strong {
  font-weight: bold
}

blockquote {
  margin: 1em 40px
}

dfn {
  font-style: italic
}

mark {
  background: #ff0;
  color: #000
}

p, pre {
  margin: 1em 0
}

pre, code, kbd, samp {
  font-family: monospace, serif;
  _font-family: 'courier new', monospace;
  font-size: 1em
}

pre {
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word
}

q {
  quotes: none
}

q:before, q:after {
  content: '';
  content: none
}

small {
  font-size: 75%
}

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}

sup {
  top: -0.5em
}

sub {
  bottom: -0.25em
}

dl, menu, ol, ul {
  margin: 1em 0
}

dd {
  margin: 0 0 0 40px
}

menu, ol, ul {
  padding: 0 0 0 40px
}

nav ul, nav ol {
  list-style: none;
  list-style-image: none
}

img {
  border: 0;
  -ms-interpolation-mode: bicubic
}

svg:not(:root) {
  overflow: hidden
}

figure {
  margin: 0
}

form {
  margin: 0
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: .35em .625em .75em
}

legend {
  border: 0;
  padding: 0;
  white-space: normal;
  *margin-left: -7px
}

button, input, select, textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
  *vertical-align: middle
}

button, input {
  line-height: normal
}

button, input[type="button"], input[type="reset"], input[type="submit"] {
  cursor: pointer;
  -webkit-appearance: button;
  *overflow: visible
}

button[disabled], input[disabled] {
  cursor: default
}

input[type="checkbox"], input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
  *height: 13px;
  *width: 13px
}

input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box
}

input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none
}

button::-moz-focus-inner, input::-moz-focus-inner {
  border: 0;
  padding: 0
}

textarea {
  overflow: auto;
  vertical-align: top
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

/* Variables */

body {
  --fg-color: black;
  --bg-color: #FFFFFF;
  --header-h1-fg-color: #FFFFFF;
  --header-h2-fg-color: #F3F3F3;
  --header-bg-color: #1866C3;
  --h2-fg-color: #F3F3F3;
  --link-color: #3061A5;
  --seperator-color: #E2E2E2;
}

@media (prefers-color-scheme: dark) {
  body {
    --fg-color: #D5D6D7;
    --bg-color: #041C32;
    --header-h1-fg-color: #ECB365;
    --header-h2-fg-color: #ECB365;
    --header-bg-color: #04293A;
    --link-color: #70A1E5;
    --seperator-color: #939393;
    --h2-fg-color: #ECB365;
  }
}

/* Page CSS */

body {
  color: var(--fg-color);
  background: var(--bg-color);
  font-size: 0.9em;
  font-family: 'Helvetica', 'Arial', 'Trebuchet MS', 'Verdana', sans-serif;
}

em {
  color: #999;
}

p {
  line-height: 1.4;
}

a {
  color: var(--link-color);
  text-decoration: none;
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
  break-inside: avoid;
}

header {
  background: var(--header-bg-color);
  padding: 50px;
  margin-bottom: 50px;
}

header h1 {
  color: var(--header-h1-fg-color);
  max-width: 772px;
  margin: 0 auto;
}

header h2 {
  color: var(--header-h2-fg-color);
  font-size: 1em;
  max-width: 772px;
  margin: 0 auto;
}

footer {
  margin-top: 1em !important;
  margin-bottom: 1em !important;
  font-size: 0.8em;
  font-style: italic;
  text-align: center;
}

.container, footer {
  max-width: 772px;
  padding: 0 50px;
  margin: 0 auto;
}

.container h2,
#basics h3 {
  color: var(--h2-fg-color);
}

#basics {
  margin-bottom: 10px;
  border-bottom: 1px var(--seperator-color) solid;
}

#basics h3 {
  margin-bottom: 10px;
}

.contact h3 {
  padding-bottom: 10px;
}

.split {
  display: flex;
  flex-wrap: wrap;
}

.split strong {
  margin-right: 2em;
}

.website,
.email,
.phone {
  margin-bottom: 10px;
  width: 50%;
}

#profiles {
  overflow: hidden;
}

#profiles .item {
  width: 50%;
}

.username {
  margin-top: 10px;
}

.work_date,
.work_position,
.work_website,
.institution,
.study_date,
.qualification {
  margin-bottom: 10px;
  width: 30%;
}

.courses {
  clear: both;
}

.dissertation {
  margin-top: 10px;
}

#work,
#volunteer,
#projects {
  padding-bottom: 5px;
  border-bottom: 1px var(--seperator-color) solid;
}

#work .item,
#volunteer .item,
#projects .item {
  margin: 25px 0;
}

#skills {
  margin-bottom: 10px;
  border-bottom: 1px var(--seperator-color) solid;
  padding-bottom: 5px;
}

#skills .item,
#languages .item {
  margin: 0 0 25px 0;
}

#interests .item {
  margin-bottom: 25px;
}

#skills {
  overflow: hidden;
}

#languages .item,
#interests .item,
#skills .item {
  width: 50%;
}

#references,
#interests {
  clear: both;
}
.horizontal_list {
  padding: 0 !important;
}

.horizontal_list li:after {
  content: " ";
  letter-spacing: 1em;
  background: center center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwAAADsABataJCQAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xMkMEa+wAAAAnSURBVBhXY/Dz89MA4sNA/B9Ka4AEYQIwfBgkiCwAxjhVopnppwEApxQqhnyQ+VkAAAAASUVORK5CYII=);
}

  </style>

</head>
<body>

  <header>
    <h1>Yau Chin Pang (Thomas)</h1>
      <h2>HKUCS@2024</h2>
  </header>

  <div id="content" class="container">
    <section id="basics">
      <div class="contact">
        <h3>Contact</h3>
        <div class="split">
            <div class="website">
              <strong>Website</strong>
              <a href="https://yaucp.dev">https://yaucp.dev</a>
            </div>
            <div class="email">
              <strong>Email</strong>
              <a href="mailto:me@yaucp.dev">me@yaucp.dev</a>
            </div>
            <div class="phone">
              <strong>Phone</strong>
              <a href="tel:+852 51136393">+852 51136393</a>
            </div>
        </div>
      </div>
        <div class="summary">
          <h3>About</h3>
          <p>Hello there\u{1F44B}\u{1F3FB}! <br /><br />I took a gap semester for a full-time internship in Finverse Technologies in the 2022 Autumn semester. <br /><br />Mostly familiar with JavaScript (Typescript/Node.js) and Python now. I also have experience using Java, C++/C, Go, and Haskell (Had a ton of fun using Haskell! Very Interested using it for my graduate job)<br />Interested working in backend in the future...<br /><br />Learning GoLang, gRPC, Swift and PostgreSQL for my final year project</p>
        </div>
        <section id="profiles" class="split">
            <div class="item">
                <strong class="network">
                  LinkedIn
                </strong>
              <div>
                  <a href="https://www.linkedin.com/in/yaucp/">
                      yaucp
                  </a>
              </div>
            </div>
            <div class="item">
                <strong class="network">
                  GitHub
                </strong>
              <div>
                  <a href="https://github.com/yaucp/">
                      yaucp
                  </a>
              </div>
            </div>
        </section>
    </section>

    <section id="skills">
      <h2>Skills</h2>
        <div class="item">
            <div class="name">
              JavaScript Frameworks/Libraries
            </div>
            <ul class="keywords">
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Jest</li>
            </ul>
        </div>
        <div class="item">
            <div class="name">
              Programming Languages
            </div>
            <ul class="keywords">
                <li>Python</li>
                <li>Java</li>
                <li>Kotlin</li>
                <li>Go</li>
                <li>C++/C</li>
                <li>Haskell</li>
            </ul>
        </div>
        <div class="item">
            <div class="name">
              Others
            </div>
            <ul class="keywords">
                <li>Git</li>
                <li>GitHub/GitLab</li>
                <li>Unix/MacOS</li>
                <li>Ubuntu</li>
                <li>Google Cloud Platform (GCP)</li>
                <li>Protocol Buffers</li>
                <li>Cloudflare Registrar &amp; Page</li>
                <li>GitHub Actions</li>
            </ul>
        </div>
        <div class="item">
            <div class="name">
              Creative Stuff
            </div>
            <div class="level">
              <em>Beginner</em>
            </div>
            <ul class="keywords">
                <li>Adobe Premiere Pro</li>
                <li>Adobe Photoshop</li>
            </ul>
        </div>
    </section>

    <section id="work">
      <h2>Work Experience</h2>
        <div class="item">
            <h3 class="work_name">
              Molekiu Limited
            </h3>

          <div class="split">
              <div class="work_position">
                Software Developer (Part-time)
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2023-10-01T00:00:00.000Z">Oct 2023</time>
                </span>
                <span class="endDate">
          - Present
        </span>
            </div>

          </div>

        </div>
        <div class="item">
            <h3 class="work_name">
              Metamory.io
            </h3>

          <div class="split">
              <div class="work_position">
                Software Engineer Intern
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2023-06-01T00:00:00.000Z">Jun 2023</time>
                </span>
                <span class="endDate">
          - <time datetime="2023-07-01T00:00:00.000Z">Jul 2023</time>
        </span>
            </div>

          </div>

            <ul class="highlights">
                <li>Added OAuth-Based Authentication to Next.js website with Auth.js</li>
                <li>Built a demo/POC with Stripe&#39;s Payment API with its Custom Payment Elements and Prebuilt Checkout Page</li>
            </ul>
        </div>
        <div class="item">
            <h3 class="work_name">
              Finverse Technologies
            </h3>

          <div class="split">
              <div class="work_position">
                Software Engineer Intern (Part-time)
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2023-01-01T00:00:00.000Z">Jan 2023</time>
                </span>
                <span class="endDate">
          - <time datetime="2023-01-01T00:00:00.000Z">Jan 2023</time>
        </span>
            </div>

              <div class="work_website">
                <a href="https://www.finverse.com">https://www.finverse.com</a>
              </div>
          </div>

        </div>
        <div class="item">
            <h3 class="work_name">
              Finverse Technologies
            </h3>
          
          <div class="split">
              <div class="work_position">
                Software Engineer Intern (Full-time)
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2022-07-01T00:00:00.000Z">Jul 2022</time>
                </span>
                <span class="endDate">
          - <time datetime="2022-12-01T00:00:00.000Z">Dec 2022</time>
        </span>
            </div>

              <div class="work_website">
                <a href="https://www.finverse.com">https://www.finverse.com</a>
              </div>
          </div>

            <ul class="highlights">
                <li>Successfully integrated major commercial banks into the internal open-banking system through reverse engineering and secure web scraping in TypeScript and Node.js.</li>
                <li>Facilitated efficient micro-service communications using Go and gRPC.</li>
                <li>Trained a machine learning model using Python for solving captchas, incorporating image pre-processing techniques, and successfully deployed to production via Google Cloud Platform\u2019s bucket storage.</li>
                <li>Developed a demo showcasing API functionality in React.js, leading to enhanced clarity for external clients regarding the platform&#39;s capabilities.</li>
                <li>Enhanced code quality by implementing unit tests using Jest and Nock, resulting in a reduction in system bugs.</li>
            </ul>
        </div>
        <div class="item">
            <h3 class="work_name">
              Thales
            </h3>

          <div class="split">
              <div class="work_position">
                Software Intern
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2021-07-01T00:00:00.000Z">Jul 2021</time>
                </span>
                <span class="endDate">
          - <time datetime="2021-08-01T00:00:00.000Z">Aug 2021</time>
        </span>
            </div>

          </div>

            <ul class="highlights">
                <li>Used Python to verify and search for missing files or lines according to specifications</li>
                <li>Configured database that stores status and commands of equipment in the station in Unix system</li>
            </ul>
        </div>
        <div class="item">
            <h3 class="work_name">
              Esri China (Hong Kong)
            </h3>

          <div class="split">
              <div class="work_position">
                Programmer Trainee Intern
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2021-06-01T00:00:00.000Z">Jun 2021</time>
                </span>
                <span class="endDate">
          - <time datetime="2021-07-01T00:00:00.000Z">Jul 2021</time>
        </span>
            </div>

          </div>

            <ul class="highlights">
                <li>Used Python to collect and group real-time open data to update local geodatabase in ArcGIS Pro</li>
            </ul>
        </div>
    </section>

    <section id="volunteer">
      <h2>Volunteer</h2>
        <div class="item">
            <h3 class="company">
              Referalah
            </h3>

          <div class="split">
              <div class="work_position">
                Next.js Web Developer/Maintainer
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2023-10-01T00:00:00.000Z">Oct 2023</time>
                </span>
                <span class="endDate">
          - Present
        </span>
            </div>

              <div class="work_website">
                <a href="https://www.referalah.com">https://www.referalah.com</a>
              </div>
          </div>

            <div class="summary">
              <p>Referalah is an open-sourced platform for overseas HongKongers to network for job referrals, connect for job opportunities, and support each other.</p>
            </div>
        </div>
        <div class="item">
            <h3 class="company">
              Campus TV, HKUSU, Session 2020-2021
            </h3>

          <div class="split">
              <div class="work_position">
                Chairperson &amp; Student Press
              </div>

            <div class="work_date">
                <span class="startDate">
                  <time datetime="2020-03-01T00:00:00.000Z">Mar 2020</time>
                </span>
                <span class="endDate">
          - <time datetime="2021-02-01T00:00:00.000Z">Feb 2021</time>
        </span>
            </div>

              <div class="work_website">
                <a href="https://www.facebook.com/hkucampustv/">https://www.facebook.com/hkucampustv/</a>
              </div>
          </div>

            <div class="summary">
              <p>Campus TV is a student-run media organization in HKU. We produce videos and articles to report on campus news and events. We make a large variety of videos from memes, to interviews with HKU Council or student bodies candidates. We also have a Facebook page with over 100,000 followers.</p>
            </div>
        </div>
    </section>

    <section id="projects">
      <h2>Projects</h2>
        <div class="item">

            <h3 class="work_name">
              An All-in-one HKU App for Students (Final Year Project/Final Research Project)
            </h3>

          <div class="split">
            <div class="work_date">
                <span class="startDate">
                  <time datetime="2023-09-01T00:00:00.000Z">Sep 2023</time>
                </span>
                <span class="endDate">
          - Present
                        </span>
            </div>
              <div class="work_website">
                <a href="https://wp2023.cs.hku.hk/fyp23079/">https://wp2023.cs.hku.hk/fyp23079/</a>
              </div>
          </div>

          <div class="split">
              <div class="summary">
                <p>This project aims to tackle the pressing necessity to address the digital confusion that the students face at HKU. The envisioned mobile application seeks to amalgamate various student-centric functionalities into a singular, user-friendly, intuitive and modern platform. By potentially leveraging web scraping technology or obtaining API access from ITS, the app aims to aggregate essential data from HKU Portal, simplifying access to academic data, facility bookings, and campus events, while implementing intelligent and nice-to-have features like course reviews, GPT-powered friendship pairings, smart notifications and an intelligent chatbot with extensive knowledge of the student\u2019s information to improve and enrich student\u2019s campus life.</p>
              </div>
          </div>

            <ul class="horizontal_list" style="text-align: center;">
                <li style="display: inline;">Swift</li>
                <li style="display: inline;">SwiftUI</li>
                <li style="display: inline;">Go</li>
                <li style="display: inline;">gRPC</li>
                <li style="display: inline;">PostgreSQL</li>
                <li style="display: inline;">Google Cloud Platform</li>
                <li style="display: inline;">Supabase</li>
                <li style="display: inline;">OpenAI API</li>
            </ul>
        </div>
        <div class="item">

            <h3 class="work_name">
              Haskell-based JavaScript-like interpreter
            </h3>

          <div class="split">
            <div class="work_date">
                <span class="startDate">
                  <time datetime="2023-01-01T00:00:00.000Z">Jan 2023</time>
                </span>
                <span class="endDate">
          - <time datetime="2023-05-31T00:00:00.000Z">May 2023</time>
                        </span>
            </div>
          </div>

          <div class="split">
              <div class="summary">
                <p>Developed a programming language interpreter with Haskell during Principles of Programming Languages course with features like conditionals, function definitions, higher-order functions, mutable-state, monads...</p>
              </div>
          </div>

            <ul class="horizontal_list" style="text-align: center;">
                <li style="display: inline;">Haskell</li>
                <li style="display: inline;">Interpreter</li>
            </ul>
        </div>
        <div class="item">

            <h3 class="work_name">
              Simple Messaging Client-to-host
            </h3>

          <div class="split">
            <div class="work_date">
                <span class="startDate">
                  <time datetime="2022-01-01T00:00:00.000Z">Jan 2022</time>
                </span>
                <span class="endDate">
          - <time datetime="2022-05-31T00:00:00.000Z">May 2022</time>
                        </span>
            </div>
              <div class="work_website">
                <a href="https://github.com/yaucp/Messaging">https://github.com/yaucp/Messaging</a>
              </div>
          </div>

          <div class="split">
              <div class="summary">
                <p>A simple messaging client/host written in Python for computer networking course in Aalto University. Socket programming is involved as well to try to learn the basics of computer networking.</p>
              </div>
          </div>

            <ul class="horizontal_list" style="text-align: center;">
                <li style="display: inline;">Python</li>
                <li style="display: inline;">Computer Networking</li>
                <li style="display: inline;">Socket Programming</li>
            </ul>
        </div>
        <div class="item">

            <h3 class="work_name">
              Big Two
            </h3>

          <div class="split">
            <div class="work_date">
                <span class="startDate">
                  <time datetime="2020-09-30T00:00:00.000Z">Sep 2020</time>
                </span>
                <span class="endDate">
          - <time datetime="2020-12-31T00:00:00.000Z">Dec 2020</time>
                        </span>
            </div>
          </div>

          <div class="split">
              <div class="summary">
                <p>Multiplayer networked cross-platform card game in Java</p>
              </div>
          </div>

        </div>
    </section>

    <section id="education">
      <h2>Education</h2>
        <div class="item">

          <div class="split">
              <div class="institution">
                The University of Hong Kong
              </div>

            <div class="study_date">
                <span class="startDate">
                  <time datetime="2019-09-01T00:00:00.000Z">Sep 2019</time>
                </span>
                <span class="endDate">
          - <time datetime="2024-06-01T00:00:00.000Z">Jun 2024</time>
        </span>
            </div>

          </div>

            <div class="qualification">
              Bachelor of Engineering - BEng
            </div>

            <ul class="courses">
                <li>COMP2119 - Introduction to data structures and algorithms</li>
                <li>COMP2120 - Computer organization</li>
                <li>COMP2396 - Object-oriented programming and Java</li>
                <li>COMP3230 - Principles of operating systems</li>
                <li>COMP3251 - Algorithm design</li>
                <li>COMP3258 - Functional programming (Haskell)</li>
                <li>COMP3259 - Principles of programming languages (Haskell) (A+)</li>
                <li>COMP3278 - Introduction to database management systems</li>
                <li>COMP3322 - Modern Technologies on World Wide Web</li>
                <li>COMP3355 - Cyber Security</li>
            </ul>

        </div>
        <div class="item">

          <div class="split">
              <div class="institution">
                Aalto University
              </div>

            <div class="study_date">
                <span class="startDate">
                  <time datetime="2022-01-01T00:00:00.000Z">Jan 2022</time>
                </span>
                <span class="endDate">
          - <time datetime="2022-05-01T00:00:00.000Z">May 2022</time>
        </span>
            </div>

          </div>

            <div class="qualification">
              Semester Exchange
            </div>

            <ul class="courses">
                <li>Software Engineering</li>
                <li>Machine Learning</li>
                <li>Basic Principles in Networking</li>
                <li>Introduction to AI</li>
                <li>Digital Ethics</li>
            </ul>

        </div>
    </section>

    <section id="languages">
      <h2>Languages</h2>
        <div class="item">
            <div class="language">
              Cantonese
            </div>
            <div class="level">
              <em>Native Speaker</em>
            </div>
        </div>
        <div class="item">
            <div class="language">
              English
            </div>
            <div class="level">
              <em>Full Professional (IELTS Band 8)</em>
            </div>
        </div>
        <div class="item">
            <div class="language">
              Mandarin
            </div>
            <div class="level">
              <em>Full Professional</em>
            </div>
        </div>
    </section>

    <section id="interests">
      <h2>Interests</h2>
        <div class="item">
            <div class="name">
              Photography
            </div>
        </div>
        <div class="item">
            <div class="name">
              Watching Movies
            </div>
        </div>
        <div class="item">
            <div class="name">
              Solo travelling
            </div>
        </div>
    </section>


</div>

<footer>
    <p>Check out the <a href="https://github.com/yaucp/yaucp">GitHub repo</a> for this website!</p>
    <p>This website is powered by Cloudflare Page. The html page is automatically generated by using <a href="https://github.com/marketplace/actions/jsonresume-export">Github Actions</a> with <a href="https://jsonresume.org/schema/">JSON Resume</a> schema.</p>
</footer>

<script>
  console.log('Theme made with \u{1F495} using JSON Resume and Handlebars!\\nhttps://github.com/jsonresume/jsonresume-theme-class')
<\/script>
</body>
</html>
`,"resume.json":`{
  "$schema": "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  "basics": {
    "name": "Yau Chin Pang (Thomas)",
    "firstName": "Chin Pang",
    "lastName": "Yau",
    "label": "HKUCS@2024",
    "image": "",
    "email": "me@yaucp.dev",
    "phone": "+852 51136393",
    "url": "https://yaucp.dev",
    "summary": "Hello there\u{1F44B}\u{1F3FB}! <br /><br />I took a gap semester for a full-time internship in Finverse Technologies in the 2022 Autumn semester. <br /><br />Mostly familiar with JavaScript (Typescript/Node.js) and Python now. I also have experience using Java, C++/C, Go, and Haskell (Had a ton of fun using Haskell! Very Interested using it for my graduate job)<br />Interested working in backend in the future...<br /><br />Learning GoLang, gRPC, Swift and PostgreSQL for my final year project",
    "openGraphDescription": "Resume of Thomas Yau Chin Pang. It is automatically generated by using GitHub Actions with JSON Resume Schema. Click on me to find out more!",
    "location": {
      "city": "Hong Kong"
    },
    "profiles": [
      {
        "network": "LinkedIn",
        "username": "yaucp",
        "url": "https://www.linkedin.com/in/yaucp/"
      },
      {
        "network": "GitHub",
        "username": "yaucp",
        "url": "https://github.com/yaucp/"
      }
    ]
  },
  "work": [
    {
      "name": "Molekiu Limited",
      "position": "Software Developer (Part-time)",
      "startDate": "2023-10",
      "highlights": [],
      "summary": "",
      "url": "",
      "location": "Hong Kong SAR"
    },
    {
      "name": "Metamory.io",
      "position": "Software Engineer Intern",
      "startDate": "2023-06",
      "endDate": "2023-07",
      "highlights": [
        "Added OAuth-Based Authentication to Next.js website with Auth.js",
        "Built a demo/POC with Stripe's Payment API with its Custom Payment Elements and Prebuilt Checkout Page"
      ],
      "summary": "",
      "url": "",
      "location": "Hong Kong SAR"
    },
    {
      "name": "Finverse Technologies",
      "position": "Software Engineer Intern (Part-time)",
      "startDate": "2023-01",
      "endDate": "2023-01",
      "highlights": [],
      "summary": "",
      "url": "https://www.finverse.com",
      "location": "Hong Kong SAR"
    },
    {
      "company": "Finverse Technologies",
      "position": "Software Engineer Intern (Full-time)",
      "startDate": "2022-07",
      "endDate": "2022-12",
      "highlights": [
        "Successfully integrated major commercial banks into the internal open-banking system through reverse engineering and secure web scraping in TypeScript and Node.js.",
        "Facilitated efficient micro-service communications using Go and gRPC.",
        "Trained a machine learning model using Python for solving captchas, incorporating image pre-processing techniques, and successfully deployed to production via Google Cloud Platform\u2019s bucket storage.",
        "Developed a demo showcasing API functionality in React.js, leading to enhanced clarity for external clients regarding the platform's capabilities.",
        "Enhanced code quality by implementing unit tests using Jest and Nock, resulting in a reduction in system bugs."
      ],
      "summary": "",
      "url": "https://www.finverse.com",
      "location": "Hong Kong SAR"
    },
    {
      "name": "Thales",
      "position": "Software Intern",
      "startDate": "2021-07",
      "endDate": "2021-08",
      "highlights": [
        "Used Python to verify and search for missing files or lines according to specifications",
        "Configured database that stores status and commands of equipment in the station in Unix system"
      ],
      "summary": "",
      "url": "",
      "location": "Hong Kong SAR"
    },
    {
      "name": "Esri China (Hong Kong)",
      "position": "Programmer Trainee Intern",
      "startDate": "2021-06",
      "endDate": "2021-07",
      "highlights": [
        "Used Python to collect and group real-time open data to update local geodatabase in ArcGIS Pro"
      ],
      "summary": "",
      "url": "",
      "location": "Hong Kong SAR"
    }
  ],
  "volunteer": [
    {
      "organization": "Referalah",
      "position": "Next.js Web Developer/Maintainer",
      "url": "https://www.referalah.com",
      "startDate": "2023-10",
      "summary": "Referalah is an open-sourced platform for overseas HongKongers to network for job referrals, connect for job opportunities, and support each other.",
      "highlights": []
    },
    {
      "organization": "Campus TV, HKUSU, Session 2020-2021",
      "position": "Chairperson & Student Press",
      "url": "https://www.facebook.com/hkucampustv/",
      "startDate": "2020-03",
      "endDate": "2021-02",
      "summary": "Campus TV is a student-run media organization in HKU. We produce videos and articles to report on campus news and events. We make a large variety of videos from memes, to interviews with HKU Council or student bodies candidates. We also have a Facebook page with over 100,000 followers.",
      "highlights": [
      ]
    }
  ],
  "education": [
    {
      "institution": "The University of Hong Kong",
      "area": "Computer Science",
      "qualification": "Bachelor of Engineering - BEng",
      "startDate": "2019-09",
      "endDate": "2024-06",
      "score": "",
      "courses": [
        "COMP2119 - Introduction to data structures and algorithms",
        "COMP2120 - Computer organization",
        "COMP2396 - Object-oriented programming and Java",
        "COMP3230 - Principles of operating systems",
        "COMP3251 - Algorithm design",
        "COMP3258 - Functional programming (Haskell)",
        "COMP3259 - Principles of programming languages (Haskell) (A+)",
        "COMP3278 - Introduction to database management systems",
        "COMP3322 - Modern Technologies on World Wide Web",
        "COMP3355 - Cyber Security"
      ]
    },
    {
      "institution": "Aalto University",
      "area": "Computer Science",
      "qualification": "Semester Exchange",
      "startDate": "2022-01",
      "endDate": "2022-05",
      "score": "",
      "courses": [
        "Software Engineering",
        "Machine Learning",
        "Basic Principles in Networking",
        "Introduction to AI",
        "Digital Ethics"
      ]
    }
  ],
  "awards": [],
  "certificates": [
    {
      "name": "IELTS Academic Band 8.0",
      "issuer": "IELTS Official",
      "endDate": "2022-12-31",
      "startDate": "2020-12-31"
    },
    {
      "name": "Programming with Google Go Specialization",
      "issuer": "Coursera",
      "startDate": "2021-09-30",
      "url": "https://www.coursera.org/account/accomplishments/specialization/certificate/H4GWC9AQZXKN"
    },
    {
      "name": "Engineering Virtual Program Participant",
      "issuer": "Goldman Sachs",
      "startDate": "2021-04-30",
      "url": "https://insidesherpa.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_9hP8S2DkX4MC7aPsg_completion_certificate.pdf"
    },
    {
      "name": "Participant of PwC\u2019s HackaDay 2021 Capture the Flag Competition",
      "issuer": "PwC",
      "startDate": "2021-12-31"
    }
  ],
  "publications": [],
  "skills": [
    {
      "name": "JavaScript Frameworks/Libraries",
      "level": "",
      "keywords": [
        "TypeScript",
        "Node.js",
        "React.js",
        "Next.js",
        "Jest"
      ]
    },
    {
      "name": "Programming Languages",
      "level": "",
      "keywords": [
        "Python",
        "Java",
        "Kotlin",
        "Go",
        "C++/C",
        "Haskell"
      ]
    },
    {
      "name": "Others",
      "level": "",
      "keywords": [
        "Git",
        "GitHub/GitLab",
        "Unix/MacOS",
        "Ubuntu",
        "Google Cloud Platform (GCP)",
        "Protocol Buffers",
        "Cloudflare Registrar & Page",
        "GitHub Actions"
      ]
    },
    {
      "name": "Creative Stuff",
      "level": "Beginner",
      "keywords": [
        "Adobe Premiere Pro",
        "Adobe Photoshop"
      ]
    }
  ],
  "languages": [
    {
      "fluency": "Native Speaker",
      "language": "Cantonese"
    },
    {
      "fluency": "Full Professional (IELTS Band 8)",
      "language": "English"
    },
    {
      "fluency": "Full Professional",
      "language": "Mandarin"
    }
  ],
  "interests": [
    {
      "name": "Photography"
    },
    {
      "name": "Watching Movies"
    },
    {
      "name": "Solo travelling"
    }
  ],
  "references": [],
  "projects": [
    {
      "name": "An All-in-one HKU App for Students (Final Year Project/Final Research Project)",
      "startDate": "2023-09-01",
      "summary": "This project aims to tackle the pressing necessity to address the digital confusion that the students face at HKU. The envisioned mobile application seeks to amalgamate various student-centric functionalities into a singular, user-friendly, intuitive and modern platform. By potentially leveraging web scraping technology or obtaining API access from ITS, the app aims to aggregate essential data from HKU Portal, simplifying access to academic data, facility bookings, and campus events, while implementing intelligent and nice-to-have features like course reviews, GPT-powered friendship pairings, smart notifications and an intelligent chatbot with extensive knowledge of the student\u2019s information to improve and enrich student\u2019s campus life.",
      "url": "https://wp2023.cs.hku.hk/fyp23079/",
      "keywords": [
        "Swift",
        "SwiftUI",
        "Go",
        "gRPC",
        "PostgreSQL",
        "Google Cloud Platform",
        "Supabase",
        "OpenAI API"
      ]
    },
    {
      "name": "Haskell-based JavaScript-like interpreter",
      "startDate": "2023-01-01",
      "endDate": "2023-05-31",
      "summary": "Developed a programming language interpreter with Haskell during Principles of Programming Languages course with features like conditionals, function definitions, higher-order functions, mutable-state, monads...",
      "url": "",
      "keywords": [
        "Haskell",
        "Interpreter"
      ]
    },
    {
      "name": "Simple Messaging Client-to-host",
      "startDate": "2022-01-01",
      "endDate": "2022-05-31",
      "summary": "A simple messaging client/host written in Python for computer networking course in Aalto University. Socket programming is involved as well to try to learn the basics of computer networking.",
      "url": "https://github.com/yaucp/Messaging",
      "keywords": [
        "Python",
        "Computer Networking",
        "Socket Programming"
      ]
    },
    {
      "name": "Big Two",
      "startDate": "2020-09-30",
      "endDate": "2020-12-31",
      "summary": "Multiplayer networked cross-platform card game in Java",
      "url": ""
    }
  ],
  "meta": {
    "version": "v1.0.0",
    "canonical": "https://github.com/jsonresume/resume-schema/blob/v1.0.0/schema.json",
    "footerText": "This website is powered by Cloudflare Page. The html page is automatically generated by using [Github Actions](https://github.com/marketplace/actions/jsonresume-export) with [JSON Resume](https://jsonresume.org/schema/) schema.",
    "githubRepoUrl": "https://github.com/yaucp/yaucp"
  }
}
`,"style.css":`/*! normalize.css 2012-02-07T12:37 UTC - http://github.com/necolas/normalize.css */
article, aside, details, figcaption, figure, footer, header, hgroup, nav, section, summary {
  display: block
}

audio, canvas, video {
  display: inline-block;
  *display: inline;
  *zoom: 1
}

audio:not([controls]) {
  display: none
}

[hidden] {
  display: none
}

html {
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%
}

html, button, input, select, textarea {
  font-family: sans-serif
}

body {
  margin: 0
}

a:focus {
  outline: thin dotted
}

a:hover, a:active {
  outline: 0
}

h1 {
  font-size: 2em;
  margin: .67em 0
}

h2 {
  font-size: 1.5em;
  margin: .83em 0
}

h3 {
  font-size: 1.17em;
  margin: 1em 0
}

h4 {
  font-size: 1em;
  margin: 1.33em 0
}

h5 {
  font-size: .83em;
  margin: 1.67em 0
}

h6 {
  font-size: .75em;
  margin: 2.33em 0
}

abbr[title] {
  border-bottom: 1px dotted
}

b, strong {
  font-weight: bold
}

blockquote {
  margin: 1em 40px
}

dfn {
  font-style: italic
}

mark {
  background: #ff0;
  color: #000
}

p, pre {
  margin: 1em 0
}

pre, code, kbd, samp {
  font-family: monospace, serif;
  _font-family: 'courier new', monospace;
  font-size: 1em
}

pre {
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word
}

q {
  quotes: none
}

q:before, q:after {
  content: '';
  content: none
}

small {
  font-size: 75%
}

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}

sup {
  top: -0.5em
}

sub {
  bottom: -0.25em
}

dl, menu, ol, ul {
  margin: 1em 0
}

dd {
  margin: 0 0 0 40px
}

menu, ol, ul {
  padding: 0 0 0 40px
}

nav ul, nav ol {
  list-style: none;
  list-style-image: none
}

img {
  border: 0;
  -ms-interpolation-mode: bicubic
}

svg:not(:root) {
  overflow: hidden
}

figure {
  margin: 0
}

form {
  margin: 0
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: .35em .625em .75em
}

legend {
  border: 0;
  padding: 0;
  white-space: normal;
  *margin-left: -7px
}

button, input, select, textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
  *vertical-align: middle
}

button, input {
  line-height: normal
}

button, input[type="button"], input[type="reset"], input[type="submit"] {
  cursor: pointer;
  -webkit-appearance: button;
  *overflow: visible
}

button[disabled], input[disabled] {
  cursor: default
}

input[type="checkbox"], input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
  *height: 13px;
  *width: 13px
}

input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box
}

input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none
}

button::-moz-focus-inner, input::-moz-focus-inner {
  border: 0;
  padding: 0
}

textarea {
  overflow: auto;
  vertical-align: top
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

/* Variables */

body {
  --fg-color: black;
  --bg-color: #FFFFFF;
  --header-h1-fg-color: #FFFFFF;
  --header-h2-fg-color: #F3F3F3;
  --header-bg-color: #1866C3;
  --link-color: #3061A5;
  --seperator-color: #E2E2E2;
  --h2-fg-color: #1866C3;
}

@media (prefers-color-scheme: dark) {
  body {
    --fg-color: #D5D6D7;
    --bg-color: #041C32;
    --header-h1-fg-color: #ECB365;
    --header-h2-fg-color: #ECB365;
    --header-bg-color: #04293A;
    --link-color: #70A1E5;
    --seperator-color: #939393;
    --h2-fg-color: #ECB365;
  }
}

/* Page CSS */

body {
  color: var(--fg-color);
  background: var(--bg-color);
  font-size: 0.9em;
  font-family: 'Helvetica', 'Arial', 'Trebuchet MS', 'Verdana', sans-serif;
}

em {
  color: #999;
}

p {
  line-height: 1.4;
}

a {
  color: var(--link-color);
  text-decoration: none;
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
  break-inside: avoid;
}

header {
  background: var(--header-bg-color);
  padding: 50px;
  margin-bottom: 50px;
}

header h1 {
  color: var(--header-h1-fg-color);
  max-width: 772px;
  margin: 0 auto;
}

header h2 {
  color: var(--header-h2-fg-color);
  font-size: 1em;
  max-width: 772px;
  margin: 0 auto;
}

footer {
  margin-top: 1em !important;
  margin-bottom: 1em !important;
  font-size: 0.8em;
  font-style: italic;
  text-align: center;
}

.container, footer {
  max-width: 772px;
  padding: 0 50px;
  margin: 0 auto;
}

.container h2,
#basics h3 {
  color: var(--h2-fg-color);
}

#basics {
  margin-bottom: 10px;
  border-bottom: 1px var(--seperator-color) solid;
}

#basics h3 {
  margin-bottom: 10px;
}

.contact h3 {
  padding-bottom: 10px;
}

.split {
  display: flex;
  flex-wrap: wrap;
}

.split strong {
  margin-right: 2em;
}

.website,
.email,
.phone {
  margin-bottom: 10px;
  width: 50%;
}

#profiles {
  overflow: hidden;
}

#profiles .item {
  width: 50%;
}

.username {
  margin-top: 10px;
}

.work_date,
.work_position,
.work_website,
.institution,
.study_date,
.qualification {
  margin-bottom: 10px;
  width: 30%;
}

.courses {
  clear: both;
}

.dissertation {
  margin-top: 10px;
}

#work,
#volunteer,
#projects {
  padding-bottom: 5px;
  border-bottom: 1px var(--seperator-color) solid;
}

#work .item,
#volunteer .item,
#projects .item {
  margin: 25px 0;
}

#skills {
  margin-bottom: 10px;
  border-bottom: 1px var(--seperator-color) solid;
  padding-bottom: 5px;
}

#skills .item,
#languages .item {
  margin: 0 0 25px 0;
}

#interests .item {
  margin-bottom: 25px;
}

#skills {
  overflow: hidden;
}

#languages .item,
#interests .item,
#skills .item {
  width: 50%;
}

#references,
#interests {
  clear: both;
}

.horizontal_list {
  padding: 0 !important;
}

.horizontal_list li:after {
  content: " ";
  letter-spacing: 1em;
  background: center center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwAAADsABataJCQAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xMkMEa+wAAAAnSURBVBhXY/Dz89MA4sNA/B9Ka4AEYQIwfBgkiCwAxjhVopnppwEApxQqhnyQ+VkAAAAASUVORK5CYII=);
}
`},de={public:["index.html"],".":["LICENSE","README.md","index.html","index.js","package.json","public","resume.handlebars","resume.html","resume.json","style.css"]};It=function(n,e){var i=Bt(n);return i!==void 0?i:""},Mt=function(n,e){var i=Pn(n);return i===void 0&&(i=[]),e&&e.withFileTypes?i.map(function(t){var r=Fn(n)+"/"+t,s=Pn(r)!==void 0;return{name:t,isFile:function(){return!s},isDirectory:function(){return s}}}):i},Lt=function(n){return Bt(n)!==void 0||Pn(n)!==void 0},Ot=function(){},Tt=function(){},Bn=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Rt=Bn,Nt=function(){},Ht=function(){},zt=function(){return{pipe:function(n){return n},on:function(){return this}}},qt=function(){return{write:function(){},end:function(){},on:function(){return this}}},ts={readFileSync:It,readdirSync:Mt,existsSync:Lt,writeFileSync:Ot,mkdirSync:Tt,statSync:Bn,lstatSync:Rt,unlinkSync:Nt,rmdirSync:Ht,createReadStream:zt,createWriteStream:qt}});var R=w(H=>{"use strict";m();H.__esModule=!0;H.extend=jt;H.indexOf=os;H.escapeExpression=ls;H.isEmpty=us;H.createFrame=cs;H.blockParams=hs;H.appendContextPath=ps;var is={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},rs=/[&<>"'`=]/g,ss=/[&<>"'`=]/;function as(n){return is[n]}function jt(n){for(var e=1;e<arguments.length;e++)for(var i in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],i)&&(n[i]=arguments[e][i]);return n}var Mn=Object.prototype.toString;H.toString=Mn;var In=function(e){return typeof e=="function"};In(/x/)&&(H.isFunction=In=function(n){return typeof n=="function"&&Mn.call(n)==="[object Function]"});H.isFunction=In;var Jt=Array.isArray||function(n){return n&&typeof n=="object"?Mn.call(n)==="[object Array]":!1};H.isArray=Jt;function os(n,e){for(var i=0,t=n.length;i<t;i++)if(n[i]===e)return i;return-1}function ls(n){if(typeof n!="string"){if(n&&n.toHTML)return n.toHTML();if(n==null)return"";if(!n)return n+"";n=""+n}return ss.test(n)?n.replace(rs,as):n}function us(n){return!n&&n!==0?!0:!!(Jt(n)&&n.length===0)}function cs(n){var e=jt({},n);return e._parent=n,e}function hs(n,e){return n.path=e,n}function ps(n,e){return(n?n+".":"")+e}});var U=w((Ge,Vt)=>{"use strict";m();Ge.__esModule=!0;var Ln=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function On(n,e){var i=e&&e.loc,t=void 0,r=void 0,s=void 0,a=void 0;i&&(t=i.start.line,r=i.end.line,s=i.start.column,a=i.end.column,n+=" - "+t+":"+s);for(var o=Error.prototype.constructor.call(this,n),u=0;u<Ln.length;u++)this[Ln[u]]=o[Ln[u]];Error.captureStackTrace&&Error.captureStackTrace(this,On);try{i&&(this.lineNumber=t,this.endLineNumber=r,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:a,enumerable:!0})):(this.column=s,this.endColumn=a))}catch{}}On.prototype=new Error;Ge.default=On;Vt.exports=Ge.default});var Kt=w((Ue,Wt)=>{"use strict";m();Ue.__esModule=!0;var Tn=R();Ue.default=function(n){n.registerHelper("blockHelperMissing",function(e,i){var t=i.inverse,r=i.fn;if(e===!0)return r(this);if(e===!1||e==null)return t(this);if(Tn.isArray(e))return e.length>0?(i.ids&&(i.ids=[i.name]),n.helpers.each(e,i)):t(this);if(i.data&&i.ids){var s=Tn.createFrame(i.data);s.contextPath=Tn.appendContextPath(i.data.contextPath,i.name),i={data:s}}return r(e,i)})};Wt.exports=Ue.default});var Qt=w((je,Zt)=>{"use strict";m();je.__esModule=!0;function ds(n){return n&&n.__esModule?n:{default:n}}var Ae=R(),fs=U(),ms=ds(fs);je.default=function(n){n.registerHelper("each",function(e,i){if(!i)throw new ms.default("Must pass iterator to #each");var t=i.fn,r=i.inverse,s=0,a="",o=void 0,u=void 0;i.data&&i.ids&&(u=Ae.appendContextPath(i.data.contextPath,i.ids[0])+"."),Ae.isFunction(e)&&(e=e.call(this)),i.data&&(o=Ae.createFrame(i.data));function l(g,f,_){o&&(o.key=g,o.index=f,o.first=f===0,o.last=!!_,u&&(o.contextPath=u+g)),a=a+t(e[g],{data:o,blockParams:Ae.blockParams([e[g],g],[u+g,null])})}if(e&&typeof e=="object")if(Ae.isArray(e))for(var h=e.length;s<h;s++)s in e&&l(s,s,s===e.length-1);else if(typeof Symbol=="function"&&e[Symbol.iterator]){for(var c=[],p=e[Symbol.iterator](),d=p.next();!d.done;d=p.next())c.push(d.value);e=c;for(var h=e.length;s<h;s++)l(s,s,s===e.length-1)}else(function(){var g=void 0;Object.keys(e).forEach(function(f){g!==void 0&&l(g,s-1),g=f,s++}),g!==void 0&&l(g,s-1,!0)})();return s===0&&(a=r(this)),a})};Zt.exports=je.default});var Xt=w((Je,Yt)=>{"use strict";m();Je.__esModule=!0;function gs(n){return n&&n.__esModule?n:{default:n}}var vs=U(),Ds=gs(vs);Je.default=function(n){n.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new Ds.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})};Yt.exports=Je.default});var ti=w((Ve,ni)=>{"use strict";m();Ve.__esModule=!0;function bs(n){return n&&n.__esModule?n:{default:n}}var $t=R(),ys=U(),ei=bs(ys);Ve.default=function(n){n.registerHelper("if",function(e,i){if(arguments.length!=2)throw new ei.default("#if requires exactly one argument");return $t.isFunction(e)&&(e=e.call(this)),!i.hash.includeZero&&!e||$t.isEmpty(e)?i.inverse(this):i.fn(this)}),n.registerHelper("unless",function(e,i){if(arguments.length!=2)throw new ei.default("#unless requires exactly one argument");return n.helpers.if.call(this,e,{fn:i.inverse,inverse:i.fn,hash:i.hash})})};ni.exports=Ve.default});var ri=w((We,ii)=>{"use strict";m();We.__esModule=!0;We.default=function(n){n.registerHelper("log",function(){for(var e=[void 0],i=arguments[arguments.length-1],t=0;t<arguments.length-1;t++)e.push(arguments[t]);var r=1;i.hash.level!=null?r=i.hash.level:i.data&&i.data.level!=null&&(r=i.data.level),e[0]=r,n.log.apply(n,e)})};ii.exports=We.default});var ai=w((Ke,si)=>{"use strict";m();Ke.__esModule=!0;Ke.default=function(n){n.registerHelper("lookup",function(e,i,t){return e&&t.lookupProperty(e,i)})};si.exports=Ke.default});var li=w((Ze,oi)=>{"use strict";m();Ze.__esModule=!0;function ks(n){return n&&n.__esModule?n:{default:n}}var Se=R(),ws=U(),_s=ks(ws);Ze.default=function(n){n.registerHelper("with",function(e,i){if(arguments.length!=2)throw new _s.default("#with requires exactly one argument");Se.isFunction(e)&&(e=e.call(this));var t=i.fn;if(Se.isEmpty(e))return i.inverse(this);var r=i.data;return i.data&&i.ids&&(r=Se.createFrame(i.data),r.contextPath=Se.appendContextPath(i.data.contextPath,i.ids[0])),t(e,{data:r,blockParams:Se.blockParams([e],[r&&r.contextPath])})})};oi.exports=Ze.default});var Rn=w(Qe=>{"use strict";m();Qe.__esModule=!0;Qe.registerDefaultHelpers=Ns;Qe.moveHelperToHooks=Hs;function se(n){return n&&n.__esModule?n:{default:n}}var Cs=Kt(),As=se(Cs),Ss=Qt(),Es=se(Ss),xs=Xt(),Ps=se(xs),Fs=ti(),Bs=se(Fs),Is=ri(),Ms=se(Is),Ls=ai(),Os=se(Ls),Ts=li(),Rs=se(Ts);function Ns(n){As.default(n),Es.default(n),Ps.default(n),Bs.default(n),Ms.default(n),Os.default(n),Rs.default(n)}function Hs(n,e,i){n.helpers[e]&&(n.hooks[e]=n.helpers[e],i||delete n.helpers[e])}});var ci=w((Ye,ui)=>{"use strict";m();Ye.__esModule=!0;var zs=R();Ye.default=function(n){n.registerDecorator("inline",function(e,i,t,r){var s=e;return i.partials||(i.partials={},s=function(a,o){var u=t.partials;t.partials=zs.extend({},u,i.partials);var l=e(a,o);return t.partials=u,l}),i.partials[r.args[0]]=r.fn,s})};ui.exports=Ye.default});var hi=w(Nn=>{"use strict";m();Nn.__esModule=!0;Nn.registerDefaultDecorators=js;function qs(n){return n&&n.__esModule?n:{default:n}}var Gs=ci(),Us=qs(Gs);function js(n){Us.default(n)}});var Hn=w((Xe,pi)=>{"use strict";m();Xe.__esModule=!0;var Js=R(),fe={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if(typeof e=="string"){var i=Js.indexOf(fe.methodMap,e.toLowerCase());i>=0?e=i:e=parseInt(e,10)}return e},log:function(e){if(e=fe.lookupLevel(e),typeof console<"u"&&fe.lookupLevel(fe.level)<=e){var i=fe.methodMap[e];console[i]||(i="log");for(var t=arguments.length,r=Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];console[i].apply(console,r)}}};Xe.default=fe;pi.exports=Xe.default});var di=w(zn=>{"use strict";m();zn.__esModule=!0;zn.createNewLookupObject=Ws;var Vs=R();function Ws(){for(var n=arguments.length,e=Array(n),i=0;i<n;i++)e[i]=arguments[i];return Vs.extend.apply(void 0,[Object.create(null)].concat(e))}});var qn=w(Ee=>{"use strict";m();Ee.__esModule=!0;Ee.createProtoAccessControl=Ys;Ee.resultIsAllowed=Xs;Ee.resetLoggedProperties=ea;function Ks(n){return n&&n.__esModule?n:{default:n}}var fi=di(),Zs=Hn(),Qs=Ks(Zs),$e=Object.create(null);function Ys(n){var e=Object.create(null);e.constructor=!1,e.__defineGetter__=!1,e.__defineSetter__=!1,e.__lookupGetter__=!1;var i=Object.create(null);return i.__proto__=!1,{properties:{whitelist:fi.createNewLookupObject(i,n.allowedProtoProperties),defaultValue:n.allowProtoPropertiesByDefault},methods:{whitelist:fi.createNewLookupObject(e,n.allowedProtoMethods),defaultValue:n.allowProtoMethodsByDefault}}}function Xs(n,e,i){return mi(typeof n=="function"?e.methods:e.properties,i)}function mi(n,e){return n.whitelist[e]!==void 0?n.whitelist[e]===!0:n.defaultValue!==void 0?n.defaultValue:($s(e),!1)}function $s(n){$e[n]!==!0&&($e[n]=!0,Qs.default.log("error",'Handlebars: Access has been denied to resolve the property "'+n+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function ea(){Object.keys($e).forEach(function(n){delete $e[n]})}});var nn=w(K=>{"use strict";m();K.__esModule=!0;K.HandlebarsEnvironment=jn;function gi(n){return n&&n.__esModule?n:{default:n}}var ae=R(),na=U(),Gn=gi(na),ta=Rn(),ia=hi(),ra=Hn(),en=gi(ra),sa=qn(),aa="4.7.8";K.VERSION=aa;var oa=8;K.COMPILER_REVISION=oa;var la=7;K.LAST_COMPATIBLE_COMPILER_REVISION=la;var ua={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};K.REVISION_CHANGES=ua;var Un="[object Object]";function jn(n,e,i){this.helpers=n||{},this.partials=e||{},this.decorators=i||{},ta.registerDefaultHelpers(this),ia.registerDefaultDecorators(this)}jn.prototype={constructor:jn,logger:en.default,log:en.default.log,registerHelper:function(e,i){if(ae.toString.call(e)===Un){if(i)throw new Gn.default("Arg not supported with multiple helpers");ae.extend(this.helpers,e)}else this.helpers[e]=i},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,i){if(ae.toString.call(e)===Un)ae.extend(this.partials,e);else{if(typeof i>"u")throw new Gn.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=i}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,i){if(ae.toString.call(e)===Un){if(i)throw new Gn.default("Arg not supported with multiple decorators");ae.extend(this.decorators,e)}else this.decorators[e]=i},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){sa.resetLoggedProperties()}};var ca=en.default.log;K.log=ca;K.createFrame=ae.createFrame;K.logger=en.default});var Di=w((tn,vi)=>{"use strict";m();tn.__esModule=!0;function Jn(n){this.string=n}Jn.prototype.toString=Jn.prototype.toHTML=function(){return""+this.string};tn.default=Jn;vi.exports=tn.default});var bi=w(Vn=>{"use strict";m();Vn.__esModule=!0;Vn.wrapHelper=ha;function ha(n,e){if(typeof n!="function")return n;var i=function(){var r=arguments[arguments.length-1];return arguments[arguments.length-1]=e(r),n.apply(this,arguments)};return i}});var Ci=w(te=>{"use strict";m();te.__esModule=!0;te.checkRevision=va;te.template=Da;te.wrapProgram=rn;te.resolvePartial=ba;te.invokePartial=ya;te.noop=wi;function pa(n){return n&&n.__esModule?n:{default:n}}function da(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e.default=n,e}var fa=R(),X=da(fa),ma=U(),$=pa(ma),ee=nn(),yi=Rn(),ga=bi(),ki=qn();function va(n){var e=n&&n[0]||1,i=ee.COMPILER_REVISION;if(!(e>=ee.LAST_COMPATIBLE_COMPILER_REVISION&&e<=ee.COMPILER_REVISION))if(e<ee.LAST_COMPATIBLE_COMPILER_REVISION){var t=ee.REVISION_CHANGES[i],r=ee.REVISION_CHANGES[e];throw new $.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+t+") or downgrade your runtime to an older version ("+r+").")}else throw new $.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+n[1]+").")}function Da(n,e){if(!e)throw new $.default("No environment passed to template");if(!n||!n.main)throw new $.default("Unknown template object: "+typeof n);n.main.decorator=n.main_d,e.VM.checkRevision(n.compiler);var i=n.compiler&&n.compiler[0]===7;function t(a,o,u){u.hash&&(o=X.extend({},o,u.hash),u.ids&&(u.ids[0]=!0)),a=e.VM.resolvePartial.call(this,a,o,u);var l=X.extend({},u,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),h=e.VM.invokePartial.call(this,a,o,l);if(h==null&&e.compile&&(u.partials[u.name]=e.compile(a,n.compilerOptions,e),h=u.partials[u.name](o,l)),h!=null){if(u.indent){for(var c=h.split(`
`),p=0,d=c.length;p<d&&!(!c[p]&&p+1===d);p++)c[p]=u.indent+c[p];h=c.join(`
`)}return h}else throw new $.default("The partial "+u.name+" could not be compiled when running in runtime-only mode")}var r={strict:function(o,u,l){if(!o||!(u in o))throw new $.default('"'+u+'" not defined in '+o,{loc:l});return r.lookupProperty(o,u)},lookupProperty:function(o,u){var l=o[u];if(l==null||Object.prototype.hasOwnProperty.call(o,u)||ki.resultIsAllowed(l,r.protoAccessControl,u))return l},lookup:function(o,u){for(var l=o.length,h=0;h<l;h++){var c=o[h]&&r.lookupProperty(o[h],u);if(c!=null)return o[h][u]}},lambda:function(o,u){return typeof o=="function"?o.call(u):o},escapeExpression:X.escapeExpression,invokePartial:t,fn:function(o){var u=n[o];return u.decorator=n[o+"_d"],u},programs:[],program:function(o,u,l,h,c){var p=this.programs[o],d=this.fn(o);return u||c||h||l?p=rn(this,o,d,u,l,h,c):p||(p=this.programs[o]=rn(this,o,d)),p},data:function(o,u){for(;o&&u--;)o=o._parent;return o},mergeIfNeeded:function(o,u){var l=o||u;return o&&u&&o!==u&&(l=X.extend({},u,o)),l},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:n.compiler};function s(a){var o=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],u=o.data;s._setup(o),!o.partial&&n.useData&&(u=ka(a,u));var l=void 0,h=n.useBlockParams?[]:void 0;n.useDepths&&(o.depths?l=a!=o.depths[0]?[a].concat(o.depths):o.depths:l=[a]);function c(p){return""+n.main(r,p,r.helpers,r.partials,u,h,l)}return c=_i(n.main,c,r,o.depths||[],u,h),c(a,o)}return s.isTop=!0,s._setup=function(a){if(a.partial)r.protoAccessControl=a.protoAccessControl,r.helpers=a.helpers,r.partials=a.partials,r.decorators=a.decorators,r.hooks=a.hooks;else{var o=X.extend({},e.helpers,a.helpers);wa(o,r),r.helpers=o,n.usePartial&&(r.partials=r.mergeIfNeeded(a.partials,e.partials)),(n.usePartial||n.useDecorators)&&(r.decorators=X.extend({},e.decorators,a.decorators)),r.hooks={},r.protoAccessControl=ki.createProtoAccessControl(a);var u=a.allowCallsToHelperMissing||i;yi.moveHelperToHooks(r,"helperMissing",u),yi.moveHelperToHooks(r,"blockHelperMissing",u)}},s._child=function(a,o,u,l){if(n.useBlockParams&&!u)throw new $.default("must pass block params");if(n.useDepths&&!l)throw new $.default("must pass parent depths");return rn(r,a,n[a],o,0,u,l)},s}function rn(n,e,i,t,r,s,a){function o(u){var l=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],h=a;return a&&u!=a[0]&&!(u===n.nullContext&&a[0]===null)&&(h=[u].concat(a)),i(n,u,n.helpers,n.partials,l.data||t,s&&[l.blockParams].concat(s),h)}return o=_i(i,o,n,a,t,s),o.program=e,o.depth=a?a.length:0,o.blockParams=r||0,o}function ba(n,e,i){return n?!n.call&&!i.name&&(i.name=n,n=i.partials[n]):i.name==="@partial-block"?n=i.data["partial-block"]:n=i.partials[i.name],n}function ya(n,e,i){var t=i.data&&i.data["partial-block"];i.partial=!0,i.ids&&(i.data.contextPath=i.ids[0]||i.data.contextPath);var r=void 0;if(i.fn&&i.fn!==wi&&(function(){i.data=ee.createFrame(i.data);var s=i.fn;r=i.data["partial-block"]=function(o){var u=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return u.data=ee.createFrame(u.data),u.data["partial-block"]=t,s(o,u)},s.partials&&(i.partials=X.extend({},i.partials,s.partials))})(),n===void 0&&r&&(n=r),n===void 0)throw new $.default("The partial "+i.name+" could not be found");if(n instanceof Function)return n(e,i)}function wi(){return""}function ka(n,e){return(!e||!("root"in e))&&(e=e?ee.createFrame(e):{},e.root=n),e}function _i(n,e,i,t,r,s){if(n.decorator){var a={};e=n.decorator(e,a,i,t&&t[0],r,s,t),X.extend(e,a)}return e}function wa(n,e){Object.keys(n).forEach(function(i){var t=n[i];n[i]=_a(t,e)})}function _a(n,e){var i=e.lookupProperty;return ga.wrapHelper(n,function(t){return X.extend({lookupProperty:i},t)})}});var Wn=w((sn,Ai)=>{"use strict";m();sn.__esModule=!0;sn.default=function(n){(function(){typeof globalThis!="object"&&(Object.prototype.__defineGetter__("__magic__",function(){return this}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__)})();var e=globalThis.Handlebars;n.noConflict=function(){return globalThis.Handlebars===n&&(globalThis.Handlebars=e),n}};Ai.exports=sn.default});var Fi=w((an,Pi)=>{"use strict";m();an.__esModule=!0;function Zn(n){return n&&n.__esModule?n:{default:n}}function Qn(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e.default=n,e}var Ca=nn(),Si=Qn(Ca),Aa=Di(),Sa=Zn(Aa),Ea=U(),xa=Zn(Ea),Pa=R(),Kn=Qn(Pa),Fa=Ci(),Ei=Qn(Fa),Ba=Wn(),Ia=Zn(Ba);function xi(){var n=new Si.HandlebarsEnvironment;return Kn.extend(n,Si),n.SafeString=Sa.default,n.Exception=xa.default,n.Utils=Kn,n.escapeExpression=Kn.escapeExpression,n.VM=Ei,n.template=function(e){return Ei.template(e,n)},n}var xe=xi();xe.create=xi;Ia.default(xe);xe.default=xe;an.default=xe;Pi.exports=an.default});var Yn=w((on,Ii)=>{"use strict";m();on.__esModule=!0;var Bi={helpers:{helperExpression:function(e){return e.type==="SubExpression"||(e.type==="MustacheStatement"||e.type==="BlockStatement")&&!!(e.params&&e.params.length||e.hash)},scopedId:function(e){return/^\.|this\b/.test(e.original)},simpleId:function(e){return e.parts.length===1&&!Bi.helpers.scopedId(e)&&!e.depth}}};on.default=Bi;Ii.exports=on.default});var Li=w((ln,Mi)=>{"use strict";m();ln.__esModule=!0;var Ma=(function(){var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(r,s,a,o,u,l,h){var c=l.length-1;switch(u){case 1:return l[c-1];case 2:this.$=o.prepareProgram(l[c]);break;case 3:this.$=l[c];break;case 4:this.$=l[c];break;case 5:this.$=l[c];break;case 6:this.$=l[c];break;case 7:this.$=l[c];break;case 8:this.$=l[c];break;case 9:this.$={type:"CommentStatement",value:o.stripComment(l[c]),strip:o.stripFlags(l[c],l[c]),loc:o.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:l[c],value:l[c],loc:o.locInfo(this._$)};break;case 11:this.$=o.prepareRawBlock(l[c-2],l[c-1],l[c],this._$);break;case 12:this.$={path:l[c-3],params:l[c-2],hash:l[c-1]};break;case 13:this.$=o.prepareBlock(l[c-3],l[c-2],l[c-1],l[c],!1,this._$);break;case 14:this.$=o.prepareBlock(l[c-3],l[c-2],l[c-1],l[c],!0,this._$);break;case 15:this.$={open:l[c-5],path:l[c-4],params:l[c-3],hash:l[c-2],blockParams:l[c-1],strip:o.stripFlags(l[c-5],l[c])};break;case 16:this.$={path:l[c-4],params:l[c-3],hash:l[c-2],blockParams:l[c-1],strip:o.stripFlags(l[c-5],l[c])};break;case 17:this.$={path:l[c-4],params:l[c-3],hash:l[c-2],blockParams:l[c-1],strip:o.stripFlags(l[c-5],l[c])};break;case 18:this.$={strip:o.stripFlags(l[c-1],l[c-1]),program:l[c]};break;case 19:var p=o.prepareBlock(l[c-2],l[c-1],l[c],l[c],!1,this._$),d=o.prepareProgram([p],l[c-1].loc);d.chained=!0,this.$={strip:l[c-2].strip,program:d,chain:!0};break;case 20:this.$=l[c];break;case 21:this.$={path:l[c-1],strip:o.stripFlags(l[c-2],l[c])};break;case 22:this.$=o.prepareMustache(l[c-3],l[c-2],l[c-1],l[c-4],o.stripFlags(l[c-4],l[c]),this._$);break;case 23:this.$=o.prepareMustache(l[c-3],l[c-2],l[c-1],l[c-4],o.stripFlags(l[c-4],l[c]),this._$);break;case 24:this.$={type:"PartialStatement",name:l[c-3],params:l[c-2],hash:l[c-1],indent:"",strip:o.stripFlags(l[c-4],l[c]),loc:o.locInfo(this._$)};break;case 25:this.$=o.preparePartialBlock(l[c-2],l[c-1],l[c],this._$);break;case 26:this.$={path:l[c-3],params:l[c-2],hash:l[c-1],strip:o.stripFlags(l[c-4],l[c])};break;case 27:this.$=l[c];break;case 28:this.$=l[c];break;case 29:this.$={type:"SubExpression",path:l[c-3],params:l[c-2],hash:l[c-1],loc:o.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:l[c],loc:o.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:o.id(l[c-2]),value:l[c],loc:o.locInfo(this._$)};break;case 32:this.$=o.id(l[c-1]);break;case 33:this.$=l[c];break;case 34:this.$=l[c];break;case 35:this.$={type:"StringLiteral",value:l[c],original:l[c],loc:o.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(l[c]),original:Number(l[c]),loc:o.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:l[c]==="true",original:l[c]==="true",loc:o.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:o.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:o.locInfo(this._$)};break;case 40:this.$=l[c];break;case 41:this.$=l[c];break;case 42:this.$=o.preparePath(!0,l[c],this._$);break;case 43:this.$=o.preparePath(!1,l[c],this._$);break;case 44:l[c-2].push({part:o.id(l[c]),original:l[c],separator:l[c-1]}),this.$=l[c-2];break;case 45:this.$=[{part:o.id(l[c]),original:l[c]}];break;case 46:this.$=[];break;case 47:l[c-1].push(l[c]);break;case 48:this.$=[];break;case 49:l[c-1].push(l[c]);break;case 50:this.$=[];break;case 51:l[c-1].push(l[c]);break;case 58:this.$=[];break;case 59:l[c-1].push(l[c]);break;case 64:this.$=[];break;case 65:l[c-1].push(l[c]);break;case 70:this.$=[];break;case 71:l[c-1].push(l[c]);break;case 78:this.$=[];break;case 79:l[c-1].push(l[c]);break;case 82:this.$=[];break;case 83:l[c-1].push(l[c]);break;case 86:this.$=[];break;case 87:l[c-1].push(l[c]);break;case 90:this.$=[];break;case 91:l[c-1].push(l[c]);break;case 94:this.$=[];break;case 95:l[c-1].push(l[c]);break;case 98:this.$=[l[c]];break;case 99:l[c-1].push(l[c]);break;case 100:this.$=[l[c]];break;case 101:l[c-1].push(l[c]);break}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(r,s){throw new Error(r)},parse:function(r){var s=this,a=[0],o=[null],u=[],l=this.table,h="",c=0,p=0,d=0,g=2,f=1;this.lexer.setInput(r),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var _=this.lexer.yylloc;u.push(_);var C=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function I(W){a.length=a.length-2*W,o.length=o.length-W,u.length=u.length-W}function S(){var W;return W=s.lexer.lex()||1,typeof W!="number"&&(W=s.symbols_[W]||W),W}for(var A,Q,N,F,re,Y,G={},pe,T,xt,He;;){if(N=a[a.length-1],this.defaultActions[N]?F=this.defaultActions[N]:((A===null||typeof A>"u")&&(A=S()),F=l[N]&&l[N][A]),typeof F>"u"||!F.length||!F[0]){var xn="";if(!d){He=[];for(pe in l[N])this.terminals_[pe]&&pe>2&&He.push("'"+this.terminals_[pe]+"'");this.lexer.showPosition?xn="Parse error on line "+(c+1)+`:
`+this.lexer.showPosition()+`
Expecting `+He.join(", ")+", got '"+(this.terminals_[A]||A)+"'":xn="Parse error on line "+(c+1)+": Unexpected "+(A==1?"end of input":"'"+(this.terminals_[A]||A)+"'"),this.parseError(xn,{text:this.lexer.match,token:this.terminals_[A]||A,line:this.lexer.yylineno,loc:_,expected:He})}}if(F[0]instanceof Array&&F.length>1)throw new Error("Parse Error: multiple actions possible at state: "+N+", token: "+A);switch(F[0]){case 1:a.push(A),o.push(this.lexer.yytext),u.push(this.lexer.yylloc),a.push(F[1]),A=null,Q?(A=Q,Q=null):(p=this.lexer.yyleng,h=this.lexer.yytext,c=this.lexer.yylineno,_=this.lexer.yylloc,d>0&&d--);break;case 2:if(T=this.productions_[F[1]][1],G.$=o[o.length-T],G._$={first_line:u[u.length-(T||1)].first_line,last_line:u[u.length-1].last_line,first_column:u[u.length-(T||1)].first_column,last_column:u[u.length-1].last_column},C&&(G._$.range=[u[u.length-(T||1)].range[0],u[u.length-1].range[1]]),Y=this.performAction.call(G,h,p,c,this.yy,F[1],o,u),typeof Y<"u")return Y;T&&(a=a.slice(0,-1*T*2),o=o.slice(0,-1*T),u=u.slice(0,-1*T)),a.push(this.productions_[F[1]][0]),o.push(G.$),u.push(G._$),xt=l[a[a.length-2]][a[a.length-1]],a.push(xt);break;case 3:return!0}}return!0}},e=(function(){var t={EOF:1,parseError:function(s,a){if(this.yy.parser)this.yy.parser.parseError(s,a);else throw new Error(s)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var a=s.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var a=s.length,o=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a-1),this.offset-=a;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var l=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===u.length?this.yylloc.first_column:0)+u[u.length-o.length].length-o[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[l[0],l[0]+this.yyleng-a]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),a=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+a+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,a,o,u,l,h;this._more||(this.yytext="",this.match="");for(var c=this._currentRules(),p=0;p<c.length&&(o=this._input.match(this.rules[c[p]]),!(o&&(!a||o[0].length>a[0].length)&&(a=o,u=p,!this.options.flex)));p++);return a?(h=a[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],s=this.performAction.call(this,this.yy,this,c[u],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return typeof s<"u"?s:this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(s){this.begin(s)}};return t.options={},t.performAction=function(s,a,o,u){function l(c,p){return a.yytext=a.yytext.substring(c,a.yyleng-p+c)}var h=u;switch(o){case 0:if(a.yytext.slice(-2)==="\\\\"?(l(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(l(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;break;case 3:return this.begin("raw"),15;break;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(l(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;break;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;break;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;break;case 16:return this.popState(),44;break;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(a.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;break;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;break;case 30:return this.popState(),33;break;case 31:return a.yytext=l(1,2).replace(/\\"/g,'"'),80;break;case 32:return a.yytext=l(1,2).replace(/\\'/g,"'"),80;break;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return a.yytext=a.yytext.replace(/\\([\\\]])/g,"$1"),72;break;case 43:return"INVALID";case 44:return 5}},t.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],t.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},t})();n.lexer=e;function i(){this.yy={}}return i.prototype=n,n.Parser=i,new i})();ln.default=Ma;Mi.exports=ln.default});var $n=w((hn,Ri)=>{"use strict";m();hn.__esModule=!0;function La(n){return n&&n.__esModule?n:{default:n}}var Oa=U(),Xn=La(Oa);function un(){this.parents=[]}un.prototype={constructor:un,mutating:!1,acceptKey:function(e,i){var t=this.accept(e[i]);if(this.mutating){if(t&&!un.prototype[t.type])throw new Xn.default('Unexpected node type "'+t.type+'" found when accepting '+i+" on "+e.type);e[i]=t}},acceptRequired:function(e,i){if(this.acceptKey(e,i),!e[i])throw new Xn.default(e.type+" requires "+i)},acceptArray:function(e){for(var i=0,t=e.length;i<t;i++)this.acceptKey(e,i),e[i]||(e.splice(i,1),i--,t--)},accept:function(e){if(e){if(!this[e.type])throw new Xn.default("Unknown type: "+e.type,e);this.current&&this.parents.unshift(this.current),this.current=e;var i=this[e.type](e);if(this.current=this.parents.shift(),!this.mutating||i)return i;if(i!==!1)return e}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:cn,Decorator:cn,BlockStatement:Oi,DecoratorBlock:Oi,PartialStatement:Ti,PartialBlockStatement:function(e){Ti.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:cn,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}};function cn(n){this.acceptRequired(n,"path"),this.acceptArray(n.params),this.acceptKey(n,"hash")}function Oi(n){cn.call(this,n),this.acceptKey(n,"program"),this.acceptKey(n,"inverse")}function Ti(n){this.acceptRequired(n,"name"),this.acceptArray(n.params),this.acceptKey(n,"hash")}hn.default=un;Ri.exports=hn.default});var Hi=w((pn,Ni)=>{"use strict";m();pn.__esModule=!0;function Ta(n){return n&&n.__esModule?n:{default:n}}var Ra=$n(),Na=Ta(Ra);function Z(){var n=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=n}Z.prototype=new Na.default;Z.prototype.Program=function(n){var e=!this.options.ignoreStandalone,i=!this.isRootSeen;this.isRootSeen=!0;for(var t=n.body,r=0,s=t.length;r<s;r++){var a=t[r],o=this.accept(a);if(o){var u=et(t,r,i),l=nt(t,r,i),h=o.openStandalone&&u,c=o.closeStandalone&&l,p=o.inlineStandalone&&u&&l;o.close&&oe(t,r,!0),o.open&&ie(t,r,!0),e&&p&&(oe(t,r),ie(t,r)&&a.type==="PartialStatement"&&(a.indent=/([ \t]+$)/.exec(t[r-1].original)[1])),e&&h&&(oe((a.program||a.inverse).body),ie(t,r)),e&&c&&(oe(t,r),ie((a.inverse||a.program).body))}}return n};Z.prototype.BlockStatement=Z.prototype.DecoratorBlock=Z.prototype.PartialBlockStatement=function(n){this.accept(n.program),this.accept(n.inverse);var e=n.program||n.inverse,i=n.program&&n.inverse,t=i,r=i;if(i&&i.chained)for(t=i.body[0].program;r.chained;)r=r.body[r.body.length-1].program;var s={open:n.openStrip.open,close:n.closeStrip.close,openStandalone:nt(e.body),closeStandalone:et((t||e).body)};if(n.openStrip.close&&oe(e.body,null,!0),i){var a=n.inverseStrip;a.open&&ie(e.body,null,!0),a.close&&oe(t.body,null,!0),n.closeStrip.open&&ie(r.body,null,!0),!this.options.ignoreStandalone&&et(e.body)&&nt(t.body)&&(ie(e.body),oe(t.body))}else n.closeStrip.open&&ie(e.body,null,!0);return s};Z.prototype.Decorator=Z.prototype.MustacheStatement=function(n){return n.strip};Z.prototype.PartialStatement=Z.prototype.CommentStatement=function(n){var e=n.strip||{};return{inlineStandalone:!0,open:e.open,close:e.close}};function et(n,e,i){e===void 0&&(e=n.length);var t=n[e-1],r=n[e-2];if(!t)return i;if(t.type==="ContentStatement")return(r||!i?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(t.original)}function nt(n,e,i){e===void 0&&(e=-1);var t=n[e+1],r=n[e+2];if(!t)return i;if(t.type==="ContentStatement")return(r||!i?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(t.original)}function oe(n,e,i){var t=n[e==null?0:e+1];if(!(!t||t.type!=="ContentStatement"||!i&&t.rightStripped)){var r=t.value;t.value=t.value.replace(i?/^\s+/:/^[ \t]*\r?\n?/,""),t.rightStripped=t.value!==r}}function ie(n,e,i){var t=n[e==null?n.length-1:e-1];if(!(!t||t.type!=="ContentStatement"||!i&&t.leftStripped)){var r=t.value;return t.value=t.value.replace(i?/\s+$/:/[ \t]+$/,""),t.leftStripped=t.value!==r,t.leftStripped}}pn.default=Z;Ni.exports=pn.default});var zi=w(j=>{"use strict";m();j.__esModule=!0;j.SourceLocation=qa;j.id=Ga;j.stripFlags=Ua;j.stripComment=ja;j.preparePath=Ja;j.prepareMustache=Va;j.prepareRawBlock=Wa;j.prepareBlock=Ka;j.prepareProgram=Za;j.preparePartialBlock=Qa;function Ha(n){return n&&n.__esModule?n:{default:n}}var za=U(),tt=Ha(za);function it(n,e){if(e=e.path?e.path.original:e,n.path.original!==e){var i={loc:n.path.loc};throw new tt.default(n.path.original+" doesn't match "+e,i)}}function qa(n,e){this.source=n,this.start={line:e.first_line,column:e.first_column},this.end={line:e.last_line,column:e.last_column}}function Ga(n){return/^\[.*\]$/.test(n)?n.substring(1,n.length-1):n}function Ua(n,e){return{open:n.charAt(2)==="~",close:e.charAt(e.length-3)==="~"}}function ja(n){return n.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function Ja(n,e,i){i=this.locInfo(i);for(var t=n?"@":"",r=[],s=0,a=0,o=e.length;a<o;a++){var u=e[a].part,l=e[a].original!==u;if(t+=(e[a].separator||"")+u,!l&&(u===".."||u==="."||u==="this")){if(r.length>0)throw new tt.default("Invalid path: "+t,{loc:i});u===".."&&s++}else r.push(u)}return{type:"PathExpression",data:n,depth:s,parts:r,original:t,loc:i}}function Va(n,e,i,t,r,s){var a=t.charAt(3)||t.charAt(2),o=a!=="{"&&a!=="&",u=/\*/.test(t);return{type:u?"Decorator":"MustacheStatement",path:n,params:e,hash:i,escaped:o,strip:r,loc:this.locInfo(s)}}function Wa(n,e,i,t){it(n,i),t=this.locInfo(t);var r={type:"Program",body:e,strip:{},loc:t};return{type:"BlockStatement",path:n.path,params:n.params,hash:n.hash,program:r,openStrip:{},inverseStrip:{},closeStrip:{},loc:t}}function Ka(n,e,i,t,r,s){t&&t.path&&it(n,t);var a=/\*/.test(n.open);e.blockParams=n.blockParams;var o=void 0,u=void 0;if(i){if(a)throw new tt.default("Unexpected inverse block on decorator",i);i.chain&&(i.program.body[0].closeStrip=t.strip),u=i.strip,o=i.program}return r&&(r=o,o=e,e=r),{type:a?"DecoratorBlock":"BlockStatement",path:n.path,params:n.params,hash:n.hash,program:e,inverse:o,openStrip:n.strip,inverseStrip:u,closeStrip:t&&t.strip,loc:this.locInfo(s)}}function Za(n,e){if(!e&&n.length){var i=n[0].loc,t=n[n.length-1].loc;i&&t&&(e={source:i.source,start:{line:i.start.line,column:i.start.column},end:{line:t.end.line,column:t.end.column}})}return{type:"Program",body:n,strip:{},loc:e}}function Qa(n,e,i,t){return it(n,i),{type:"PartialBlockStatement",name:n.path,params:n.params,hash:n.hash,program:e,openStrip:n.strip,closeStrip:i&&i.strip,loc:this.locInfo(t)}}});var Ui=w(Pe=>{"use strict";m();Pe.__esModule=!0;Pe.parseWithoutProcessing=Gi;Pe.parse=ro;function Ya(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e.default=n,e}function qi(n){return n&&n.__esModule?n:{default:n}}var Xa=Li(),rt=qi(Xa),$a=Hi(),eo=qi($a),no=zi(),to=Ya(no),io=R();Pe.parser=rt.default;var dn={};io.extend(dn,to);function Gi(n,e){if(n.type==="Program")return n;rt.default.yy=dn,dn.locInfo=function(t){return new dn.SourceLocation(e&&e.srcName,t)};var i=rt.default.parse(n);return i}function ro(n,e){var i=Gi(n,e),t=new eo.default(e);return t.accept(i)}});var Wi=w(Me=>{"use strict";m();Me.__esModule=!0;Me.Compiler=st;Me.precompile=lo;Me.compile=uo;function Ji(n){return n&&n.__esModule?n:{default:n}}var so=U(),Be=Ji(so),Ie=R(),ao=Yn(),Fe=Ji(ao),oo=[].slice;function st(){}st.prototype={compiler:st,equals:function(e){var i=this.opcodes.length;if(e.opcodes.length!==i)return!1;for(var t=0;t<i;t++){var r=this.opcodes[t],s=e.opcodes[t];if(r.opcode!==s.opcode||!Vi(r.args,s.args))return!1}i=this.children.length;for(var t=0;t<i;t++)if(!this.children[t].equals(e.children[t]))return!1;return!0},guid:0,compile:function(e,i){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=i,this.stringParams=i.stringParams,this.trackIds=i.trackIds,i.blockParams=i.blockParams||[],i.knownHelpers=Ie.extend(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},i.knownHelpers),this.accept(e)},compileProgram:function(e){var i=new this.compiler,t=i.compile(e,this.options),r=this.guid++;return this.usePartial=this.usePartial||t.usePartial,this.children[r]=t,this.useDepths=this.useDepths||t.useDepths,r},accept:function(e){if(!this[e.type])throw new Be.default("Unknown type: "+e.type,e);this.sourceNode.unshift(e);var i=this[e.type](e);return this.sourceNode.shift(),i},Program:function(e){this.options.blockParams.unshift(e.blockParams);for(var i=e.body,t=i.length,r=0;r<t;r++)this.accept(i[r]);return this.options.blockParams.shift(),this.isSimple=t===1,this.blockParams=e.blockParams?e.blockParams.length:0,this},BlockStatement:function(e){ji(e);var i=e.program,t=e.inverse;i=i&&this.compileProgram(i),t=t&&this.compileProgram(t);var r=this.classifySexpr(e);r==="helper"?this.helperSexpr(e,i,t):r==="simple"?(this.simpleSexpr(e),this.opcode("pushProgram",i),this.opcode("pushProgram",t),this.opcode("emptyHash"),this.opcode("blockValue",e.path.original)):(this.ambiguousSexpr(e,i,t),this.opcode("pushProgram",i),this.opcode("pushProgram",t),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(e){var i=e.program&&this.compileProgram(e.program),t=this.setupFullMustacheParams(e,i,void 0),r=e.path;this.useDecorators=!0,this.opcode("registerDecorator",t.length,r.original)},PartialStatement:function(e){this.usePartial=!0;var i=e.program;i&&(i=this.compileProgram(e.program));var t=e.params;if(t.length>1)throw new Be.default("Unsupported number of partial arguments: "+t.length,e);t.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):t.push({type:"PathExpression",parts:[],depth:0}));var r=e.name.original,s=e.name.type==="SubExpression";s&&this.accept(e.name),this.setupFullMustacheParams(e,i,void 0,!0);var a=e.indent||"";this.options.preventIndent&&a&&(this.opcode("appendContent",a),a=""),this.opcode("invokePartial",s,r,a),this.opcode("append")},PartialBlockStatement:function(e){this.PartialStatement(e)},MustacheStatement:function(e){this.SubExpression(e),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(e){this.DecoratorBlock(e)},ContentStatement:function(e){e.value&&this.opcode("appendContent",e.value)},CommentStatement:function(){},SubExpression:function(e){ji(e);var i=this.classifySexpr(e);i==="simple"?this.simpleSexpr(e):i==="helper"?this.helperSexpr(e):this.ambiguousSexpr(e)},ambiguousSexpr:function(e,i,t){var r=e.path,s=r.parts[0],a=i!=null||t!=null;this.opcode("getContext",r.depth),this.opcode("pushProgram",i),this.opcode("pushProgram",t),r.strict=!0,this.accept(r),this.opcode("invokeAmbiguous",s,a)},simpleSexpr:function(e){var i=e.path;i.strict=!0,this.accept(i),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,i,t){var r=this.setupFullMustacheParams(e,i,t),s=e.path,a=s.parts[0];if(this.options.knownHelpers[a])this.opcode("invokeKnownHelper",r.length,a);else{if(this.options.knownHelpersOnly)throw new Be.default("You specified knownHelpersOnly, but used the unknown helper "+a,e);s.strict=!0,s.falsy=!0,this.accept(s),this.opcode("invokeHelper",r.length,s.original,Fe.default.helpers.simpleId(s))}},PathExpression:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var i=e.parts[0],t=Fe.default.helpers.scopedId(e),r=!e.depth&&!t&&this.blockParamIndex(i);r?this.opcode("lookupBlockParam",r,e.parts):i?e.data?(this.options.data=!0,this.opcode("lookupData",e.depth,e.parts,e.strict)):this.opcode("lookupOnContext",e.parts,e.falsy,e.strict,t):this.opcode("pushContext")},StringLiteral:function(e){this.opcode("pushString",e.value)},NumberLiteral:function(e){this.opcode("pushLiteral",e.value)},BooleanLiteral:function(e){this.opcode("pushLiteral",e.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(e){var i=e.pairs,t=0,r=i.length;for(this.opcode("pushHash");t<r;t++)this.pushParam(i[t].value);for(;t--;)this.opcode("assignToHash",i[t].key);this.opcode("popHash")},opcode:function(e){this.opcodes.push({opcode:e,args:oo.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(e){e&&(this.useDepths=!0)},classifySexpr:function(e){var i=Fe.default.helpers.simpleId(e.path),t=i&&!!this.blockParamIndex(e.path.parts[0]),r=!t&&Fe.default.helpers.helperExpression(e),s=!t&&(r||i);if(s&&!r){var a=e.path.parts[0],o=this.options;o.knownHelpers[a]?r=!0:o.knownHelpersOnly&&(s=!1)}return r?"helper":s?"ambiguous":"simple"},pushParams:function(e){for(var i=0,t=e.length;i<t;i++)this.pushParam(e[i])},pushParam:function(e){var i=e.value!=null?e.value:e.original||"";if(this.stringParams)i.replace&&(i=i.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",i,e.type),e.type==="SubExpression"&&this.accept(e);else{if(this.trackIds){var t=void 0;if(e.parts&&!Fe.default.helpers.scopedId(e)&&!e.depth&&(t=this.blockParamIndex(e.parts[0])),t){var r=e.parts.slice(1).join(".");this.opcode("pushId","BlockParam",t,r)}else i=e.original||i,i.replace&&(i=i.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",e.type,i)}this.accept(e)}},setupFullMustacheParams:function(e,i,t,r){var s=e.params;return this.pushParams(s),this.opcode("pushProgram",i),this.opcode("pushProgram",t),e.hash?this.accept(e.hash):this.opcode("emptyHash",r),s},blockParamIndex:function(e){for(var i=0,t=this.options.blockParams.length;i<t;i++){var r=this.options.blockParams[i],s=r&&Ie.indexOf(r,e);if(r&&s>=0)return[i,s]}}};function lo(n,e,i){if(n==null||typeof n!="string"&&n.type!=="Program")throw new Be.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+n);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var t=i.parse(n,e),r=new i.Compiler().compile(t,e);return new i.JavaScriptCompiler().compile(r,e)}function uo(n,e,i){if(e===void 0&&(e={}),n==null||typeof n!="string"&&n.type!=="Program")throw new Be.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+n);e=Ie.extend({},e),"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var t=void 0;function r(){var a=i.parse(n,e),o=new i.Compiler().compile(a,e),u=new i.JavaScriptCompiler().compile(o,e,void 0,!0);return i.template(u)}function s(a,o){return t||(t=r()),t.call(this,a,o)}return s._setup=function(a){return t||(t=r()),t._setup(a)},s._child=function(a,o,u,l){return t||(t=r()),t._child(a,o,u,l)},s}function Vi(n,e){if(n===e)return!0;if(Ie.isArray(n)&&Ie.isArray(e)&&n.length===e.length){for(var i=0;i<n.length;i++)if(!Vi(n[i],e[i]))return!1;return!0}}function ji(n){if(!n.path.parts){var e=n.path;n.path={type:"PathExpression",data:!1,depth:0,parts:[e.original+""],original:e.original+"",loc:e.loc}}}});var Zi=w(at=>{m();var Ki="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");at.encode=function(n){if(0<=n&&n<Ki.length)return Ki[n];throw new TypeError("Must be between 0 and 63: "+n)};at.decode=function(n){var e=65,i=90,t=97,r=122,s=48,a=57,o=43,u=47,l=26,h=52;return e<=n&&n<=i?n-e:t<=n&&n<=r?n-t+l:s<=n&&n<=a?n-s+h:n==o?62:n==u?63:-1}});var ut=w(lt=>{m();var Qi=Zi(),ot=5,Yi=1<<ot,Xi=Yi-1,$i=Yi;function co(n){return n<0?(-n<<1)+1:(n<<1)+0}function ho(n){var e=(n&1)===1,i=n>>1;return e?-i:i}lt.encode=function(e){var i="",t,r=co(e);do t=r&Xi,r>>>=ot,r>0&&(t|=$i),i+=Qi.encode(t);while(r>0);return i};lt.decode=function(e,i,t){var r=e.length,s=0,a=0,o,u;do{if(i>=r)throw new Error("Expected more digits in base 64 VLQ value.");if(u=Qi.decode(e.charCodeAt(i++)),u===-1)throw new Error("Invalid base64 digit: "+e.charAt(i-1));o=!!(u&$i),u&=Xi,s=s+(u<<a),a+=ot}while(o);t.value=ho(s),t.rest=i}});var ve=w(L=>{m();function po(n,e,i){if(e in n)return n[e];if(arguments.length===3)return i;throw new Error('"'+e+'" is a required argument.')}L.getArg=po;var er=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,fo=/^data:.+\,.+$/;function Le(n){var e=n.match(er);return e?{scheme:e[1],auth:e[2],host:e[3],port:e[4],path:e[5]}:null}L.urlParse=Le;function me(n){var e="";return n.scheme&&(e+=n.scheme+":"),e+="//",n.auth&&(e+=n.auth+"@"),n.host&&(e+=n.host),n.port&&(e+=":"+n.port),n.path&&(e+=n.path),e}L.urlGenerate=me;function ct(n){var e=n,i=Le(n);if(i){if(!i.path)return n;e=i.path}for(var t=L.isAbsolute(e),r=e.split(/\/+/),s,a=0,o=r.length-1;o>=0;o--)s=r[o],s==="."?r.splice(o,1):s===".."?a++:a>0&&(s===""?(r.splice(o+1,a),a=0):(r.splice(o,2),a--));return e=r.join("/"),e===""&&(e=t?"/":"."),i?(i.path=e,me(i)):e}L.normalize=ct;function nr(n,e){n===""&&(n="."),e===""&&(e=".");var i=Le(e),t=Le(n);if(t&&(n=t.path||"/"),i&&!i.scheme)return t&&(i.scheme=t.scheme),me(i);if(i||e.match(fo))return e;if(t&&!t.host&&!t.path)return t.host=e,me(t);var r=e.charAt(0)==="/"?e:ct(n.replace(/\/+$/,"")+"/"+e);return t?(t.path=r,me(t)):r}L.join=nr;L.isAbsolute=function(n){return n.charAt(0)==="/"||er.test(n)};function mo(n,e){n===""&&(n="."),n=n.replace(/\/$/,"");for(var i=0;e.indexOf(n+"/")!==0;){var t=n.lastIndexOf("/");if(t<0||(n=n.slice(0,t),n.match(/^([^\/]+:\/)?\/*$/)))return e;++i}return Array(i+1).join("../")+e.substr(n.length+1)}L.relative=mo;var tr=(function(){var n=Object.create(null);return!("__proto__"in n)})();function ir(n){return n}function go(n){return rr(n)?"$"+n:n}L.toSetString=tr?ir:go;function vo(n){return rr(n)?n.slice(1):n}L.fromSetString=tr?ir:vo;function rr(n){if(!n)return!1;var e=n.length;if(e<9||n.charCodeAt(e-1)!==95||n.charCodeAt(e-2)!==95||n.charCodeAt(e-3)!==111||n.charCodeAt(e-4)!==116||n.charCodeAt(e-5)!==111||n.charCodeAt(e-6)!==114||n.charCodeAt(e-7)!==112||n.charCodeAt(e-8)!==95||n.charCodeAt(e-9)!==95)return!1;for(var i=e-10;i>=0;i--)if(n.charCodeAt(i)!==36)return!1;return!0}function Do(n,e,i){var t=ge(n.source,e.source);return t!==0||(t=n.originalLine-e.originalLine,t!==0)||(t=n.originalColumn-e.originalColumn,t!==0||i)||(t=n.generatedColumn-e.generatedColumn,t!==0)||(t=n.generatedLine-e.generatedLine,t!==0)?t:ge(n.name,e.name)}L.compareByOriginalPositions=Do;function bo(n,e,i){var t=n.generatedLine-e.generatedLine;return t!==0||(t=n.generatedColumn-e.generatedColumn,t!==0||i)||(t=ge(n.source,e.source),t!==0)||(t=n.originalLine-e.originalLine,t!==0)||(t=n.originalColumn-e.originalColumn,t!==0)?t:ge(n.name,e.name)}L.compareByGeneratedPositionsDeflated=bo;function ge(n,e){return n===e?0:n===null?1:e===null?-1:n>e?1:-1}function yo(n,e){var i=n.generatedLine-e.generatedLine;return i!==0||(i=n.generatedColumn-e.generatedColumn,i!==0)||(i=ge(n.source,e.source),i!==0)||(i=n.originalLine-e.originalLine,i!==0)||(i=n.originalColumn-e.originalColumn,i!==0)?i:ge(n.name,e.name)}L.compareByGeneratedPositionsInflated=yo;function ko(n){return JSON.parse(n.replace(/^\)]}'[^\n]*\n/,""))}L.parseSourceMapInput=ko;function wo(n,e,i){if(e=e||"",n&&(n[n.length-1]!=="/"&&e[0]!=="/"&&(n+="/"),e=n+e),i){var t=Le(i);if(!t)throw new Error("sourceMapURL could not be parsed");if(t.path){var r=t.path.lastIndexOf("/");r>=0&&(t.path=t.path.substring(0,r+1))}e=nr(me(t),e)}return ct(e)}L.computeSourceURL=wo});var dt=w(sr=>{m();var ht=ve(),pt=Object.prototype.hasOwnProperty,le=typeof Map<"u";function ne(){this._array=[],this._set=le?new Map:Object.create(null)}ne.fromArray=function(e,i){for(var t=new ne,r=0,s=e.length;r<s;r++)t.add(e[r],i);return t};ne.prototype.size=function(){return le?this._set.size:Object.getOwnPropertyNames(this._set).length};ne.prototype.add=function(e,i){var t=le?e:ht.toSetString(e),r=le?this.has(e):pt.call(this._set,t),s=this._array.length;(!r||i)&&this._array.push(e),r||(le?this._set.set(e,s):this._set[t]=s)};ne.prototype.has=function(e){if(le)return this._set.has(e);var i=ht.toSetString(e);return pt.call(this._set,i)};ne.prototype.indexOf=function(e){if(le){var i=this._set.get(e);if(i>=0)return i}else{var t=ht.toSetString(e);if(pt.call(this._set,t))return this._set[t]}throw new Error('"'+e+'" is not in the set.')};ne.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)};ne.prototype.toArray=function(){return this._array.slice()};sr.ArraySet=ne});var lr=w(or=>{m();var ar=ve();function _o(n,e){var i=n.generatedLine,t=e.generatedLine,r=n.generatedColumn,s=e.generatedColumn;return t>i||t==i&&s>=r||ar.compareByGeneratedPositionsInflated(n,e)<=0}function fn(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}fn.prototype.unsortedForEach=function(e,i){this._array.forEach(e,i)};fn.prototype.add=function(e){_o(this._last,e)?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))};fn.prototype.toArray=function(){return this._sorted||(this._array.sort(ar.compareByGeneratedPositionsInflated),this._sorted=!0),this._array};or.MappingList=fn});var ft=w(ur=>{m();var Oe=ut(),B=ve(),mn=dt().ArraySet,Co=lr().MappingList;function J(n){n||(n={}),this._file=B.getArg(n,"file",null),this._sourceRoot=B.getArg(n,"sourceRoot",null),this._skipValidation=B.getArg(n,"skipValidation",!1),this._sources=new mn,this._names=new mn,this._mappings=new Co,this._sourcesContents=null}J.prototype._version=3;J.fromSourceMap=function(e){var i=e.sourceRoot,t=new J({file:e.file,sourceRoot:i});return e.eachMapping(function(r){var s={generated:{line:r.generatedLine,column:r.generatedColumn}};r.source!=null&&(s.source=r.source,i!=null&&(s.source=B.relative(i,s.source)),s.original={line:r.originalLine,column:r.originalColumn},r.name!=null&&(s.name=r.name)),t.addMapping(s)}),e.sources.forEach(function(r){var s=r;i!==null&&(s=B.relative(i,r)),t._sources.has(s)||t._sources.add(s);var a=e.sourceContentFor(r);a!=null&&t.setSourceContent(r,a)}),t};J.prototype.addMapping=function(e){var i=B.getArg(e,"generated"),t=B.getArg(e,"original",null),r=B.getArg(e,"source",null),s=B.getArg(e,"name",null);this._skipValidation||this._validateMapping(i,t,r,s),r!=null&&(r=String(r),this._sources.has(r)||this._sources.add(r)),s!=null&&(s=String(s),this._names.has(s)||this._names.add(s)),this._mappings.add({generatedLine:i.line,generatedColumn:i.column,originalLine:t!=null&&t.line,originalColumn:t!=null&&t.column,source:r,name:s})};J.prototype.setSourceContent=function(e,i){var t=e;this._sourceRoot!=null&&(t=B.relative(this._sourceRoot,t)),i!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[B.toSetString(t)]=i):this._sourcesContents&&(delete this._sourcesContents[B.toSetString(t)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))};J.prototype.applySourceMap=function(e,i,t){var r=i;if(i==null){if(e.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);r=e.file}var s=this._sourceRoot;s!=null&&(r=B.relative(s,r));var a=new mn,o=new mn;this._mappings.unsortedForEach(function(u){if(u.source===r&&u.originalLine!=null){var l=e.originalPositionFor({line:u.originalLine,column:u.originalColumn});l.source!=null&&(u.source=l.source,t!=null&&(u.source=B.join(t,u.source)),s!=null&&(u.source=B.relative(s,u.source)),u.originalLine=l.line,u.originalColumn=l.column,l.name!=null&&(u.name=l.name))}var h=u.source;h!=null&&!a.has(h)&&a.add(h);var c=u.name;c!=null&&!o.has(c)&&o.add(c)},this),this._sources=a,this._names=o,e.sources.forEach(function(u){var l=e.sourceContentFor(u);l!=null&&(t!=null&&(u=B.join(t,u)),s!=null&&(u=B.relative(s,u)),this.setSourceContent(u,l))},this)};J.prototype._validateMapping=function(e,i,t,r){if(i&&typeof i.line!="number"&&typeof i.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0&&!i&&!t&&!r)){if(e&&"line"in e&&"column"in e&&i&&"line"in i&&"column"in i&&e.line>0&&e.column>=0&&i.line>0&&i.column>=0&&t)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:t,original:i,name:r}))}};J.prototype._serializeMappings=function(){for(var e=0,i=1,t=0,r=0,s=0,a=0,o="",u,l,h,c,p=this._mappings.toArray(),d=0,g=p.length;d<g;d++){if(l=p[d],u="",l.generatedLine!==i)for(e=0;l.generatedLine!==i;)u+=";",i++;else if(d>0){if(!B.compareByGeneratedPositionsInflated(l,p[d-1]))continue;u+=","}u+=Oe.encode(l.generatedColumn-e),e=l.generatedColumn,l.source!=null&&(c=this._sources.indexOf(l.source),u+=Oe.encode(c-a),a=c,u+=Oe.encode(l.originalLine-1-r),r=l.originalLine-1,u+=Oe.encode(l.originalColumn-t),t=l.originalColumn,l.name!=null&&(h=this._names.indexOf(l.name),u+=Oe.encode(h-s),s=h)),o+=u}return o};J.prototype._generateSourcesContent=function(e,i){return e.map(function(t){if(!this._sourcesContents)return null;i!=null&&(t=B.relative(i,t));var r=B.toSetString(t);return Object.prototype.hasOwnProperty.call(this._sourcesContents,r)?this._sourcesContents[r]:null},this)};J.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(e.file=this._file),this._sourceRoot!=null&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e};J.prototype.toString=function(){return JSON.stringify(this.toJSON())};ur.SourceMapGenerator=J});var cr=w(ue=>{m();ue.GREATEST_LOWER_BOUND=1;ue.LEAST_UPPER_BOUND=2;function mt(n,e,i,t,r,s){var a=Math.floor((e-n)/2)+n,o=r(i,t[a],!0);return o===0?a:o>0?e-a>1?mt(a,e,i,t,r,s):s==ue.LEAST_UPPER_BOUND?e<t.length?e:-1:a:a-n>1?mt(n,a,i,t,r,s):s==ue.LEAST_UPPER_BOUND?a:n<0?-1:n}ue.search=function(e,i,t,r){if(i.length===0)return-1;var s=mt(-1,i.length,e,i,t,r||ue.GREATEST_LOWER_BOUND);if(s<0)return-1;for(;s-1>=0&&t(i[s],i[s-1],!0)===0;)--s;return s}});var pr=w(hr=>{m();function gt(n,e,i){var t=n[e];n[e]=n[i],n[i]=t}function Ao(n,e){return Math.round(n+Math.random()*(e-n))}function vt(n,e,i,t){if(i<t){var r=Ao(i,t),s=i-1;gt(n,r,t);for(var a=n[t],o=i;o<t;o++)e(n[o],a)<=0&&(s+=1,gt(n,s,o));gt(n,s+1,o);var u=s+1;vt(n,e,i,u-1),vt(n,e,u+1,t)}}hr.quickSort=function(n,e){vt(n,e,0,n.length-1)}});var fr=w(gn=>{m();var D=ve(),Dt=cr(),De=dt().ArraySet,So=ut(),Te=pr().quickSort;function P(n,e){var i=n;return typeof n=="string"&&(i=D.parseSourceMapInput(n)),i.sections!=null?new V(i,e):new M(i,e)}P.fromSourceMap=function(n,e){return M.fromSourceMap(n,e)};P.prototype._version=3;P.prototype.__generatedMappings=null;Object.defineProperty(P.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}});P.prototype.__originalMappings=null;Object.defineProperty(P.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}});P.prototype._charIsMappingSeparator=function(e,i){var t=e.charAt(i);return t===";"||t===","};P.prototype._parseMappings=function(e,i){throw new Error("Subclasses must implement _parseMappings")};P.GENERATED_ORDER=1;P.ORIGINAL_ORDER=2;P.GREATEST_LOWER_BOUND=1;P.LEAST_UPPER_BOUND=2;P.prototype.eachMapping=function(e,i,t){var r=i||null,s=t||P.GENERATED_ORDER,a;switch(s){case P.GENERATED_ORDER:a=this._generatedMappings;break;case P.ORIGINAL_ORDER:a=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var o=this.sourceRoot;a.map(function(u){var l=u.source===null?null:this._sources.at(u.source);return l=D.computeSourceURL(o,l,this._sourceMapURL),{source:l,generatedLine:u.generatedLine,generatedColumn:u.generatedColumn,originalLine:u.originalLine,originalColumn:u.originalColumn,name:u.name===null?null:this._names.at(u.name)}},this).forEach(e,r)};P.prototype.allGeneratedPositionsFor=function(e){var i=D.getArg(e,"line"),t={source:D.getArg(e,"source"),originalLine:i,originalColumn:D.getArg(e,"column",0)};if(t.source=this._findSourceIndex(t.source),t.source<0)return[];var r=[],s=this._findMapping(t,this._originalMappings,"originalLine","originalColumn",D.compareByOriginalPositions,Dt.LEAST_UPPER_BOUND);if(s>=0){var a=this._originalMappings[s];if(e.column===void 0)for(var o=a.originalLine;a&&a.originalLine===o;)r.push({line:D.getArg(a,"generatedLine",null),column:D.getArg(a,"generatedColumn",null),lastColumn:D.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s];else for(var u=a.originalColumn;a&&a.originalLine===i&&a.originalColumn==u;)r.push({line:D.getArg(a,"generatedLine",null),column:D.getArg(a,"generatedColumn",null),lastColumn:D.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s]}return r};gn.SourceMapConsumer=P;function M(n,e){var i=n;typeof n=="string"&&(i=D.parseSourceMapInput(n));var t=D.getArg(i,"version"),r=D.getArg(i,"sources"),s=D.getArg(i,"names",[]),a=D.getArg(i,"sourceRoot",null),o=D.getArg(i,"sourcesContent",null),u=D.getArg(i,"mappings"),l=D.getArg(i,"file",null);if(t!=this._version)throw new Error("Unsupported version: "+t);a&&(a=D.normalize(a)),r=r.map(String).map(D.normalize).map(function(h){return a&&D.isAbsolute(a)&&D.isAbsolute(h)?D.relative(a,h):h}),this._names=De.fromArray(s.map(String),!0),this._sources=De.fromArray(r,!0),this._absoluteSources=this._sources.toArray().map(function(h){return D.computeSourceURL(a,h,e)}),this.sourceRoot=a,this.sourcesContent=o,this._mappings=u,this._sourceMapURL=e,this.file=l}M.prototype=Object.create(P.prototype);M.prototype.consumer=P;M.prototype._findSourceIndex=function(n){var e=n;if(this.sourceRoot!=null&&(e=D.relative(this.sourceRoot,e)),this._sources.has(e))return this._sources.indexOf(e);var i;for(i=0;i<this._absoluteSources.length;++i)if(this._absoluteSources[i]==n)return i;return-1};M.fromSourceMap=function(e,i){var t=Object.create(M.prototype),r=t._names=De.fromArray(e._names.toArray(),!0),s=t._sources=De.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file,t._sourceMapURL=i,t._absoluteSources=t._sources.toArray().map(function(d){return D.computeSourceURL(t.sourceRoot,d,i)});for(var a=e._mappings.toArray().slice(),o=t.__generatedMappings=[],u=t.__originalMappings=[],l=0,h=a.length;l<h;l++){var c=a[l],p=new dr;p.generatedLine=c.generatedLine,p.generatedColumn=c.generatedColumn,c.source&&(p.source=s.indexOf(c.source),p.originalLine=c.originalLine,p.originalColumn=c.originalColumn,c.name&&(p.name=r.indexOf(c.name)),u.push(p)),o.push(p)}return Te(t.__originalMappings,D.compareByOriginalPositions),t};M.prototype._version=3;Object.defineProperty(M.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function dr(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}M.prototype._parseMappings=function(e,i){for(var t=1,r=0,s=0,a=0,o=0,u=0,l=e.length,h=0,c={},p={},d=[],g=[],f,_,C,I,S;h<l;)if(e.charAt(h)===";")t++,h++,r=0;else if(e.charAt(h)===",")h++;else{for(f=new dr,f.generatedLine=t,I=h;I<l&&!this._charIsMappingSeparator(e,I);I++);if(_=e.slice(h,I),C=c[_],C)h+=_.length;else{for(C=[];h<I;)So.decode(e,h,p),S=p.value,h=p.rest,C.push(S);if(C.length===2)throw new Error("Found a source, but no line and column");if(C.length===3)throw new Error("Found a source and line, but no column");c[_]=C}f.generatedColumn=r+C[0],r=f.generatedColumn,C.length>1&&(f.source=o+C[1],o+=C[1],f.originalLine=s+C[2],s=f.originalLine,f.originalLine+=1,f.originalColumn=a+C[3],a=f.originalColumn,C.length>4&&(f.name=u+C[4],u+=C[4])),g.push(f),typeof f.originalLine=="number"&&d.push(f)}Te(g,D.compareByGeneratedPositionsDeflated),this.__generatedMappings=g,Te(d,D.compareByOriginalPositions),this.__originalMappings=d};M.prototype._findMapping=function(e,i,t,r,s,a){if(e[t]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[t]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return Dt.search(e,i,s,a)};M.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var i=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var t=this._generatedMappings[e+1];if(i.generatedLine===t.generatedLine){i.lastGeneratedColumn=t.generatedColumn-1;continue}}i.lastGeneratedColumn=1/0}};M.prototype.originalPositionFor=function(e){var i={generatedLine:D.getArg(e,"line"),generatedColumn:D.getArg(e,"column")},t=this._findMapping(i,this._generatedMappings,"generatedLine","generatedColumn",D.compareByGeneratedPositionsDeflated,D.getArg(e,"bias",P.GREATEST_LOWER_BOUND));if(t>=0){var r=this._generatedMappings[t];if(r.generatedLine===i.generatedLine){var s=D.getArg(r,"source",null);s!==null&&(s=this._sources.at(s),s=D.computeSourceURL(this.sourceRoot,s,this._sourceMapURL));var a=D.getArg(r,"name",null);return a!==null&&(a=this._names.at(a)),{source:s,line:D.getArg(r,"originalLine",null),column:D.getArg(r,"originalColumn",null),name:a}}}return{source:null,line:null,column:null,name:null}};M.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(e){return e==null}):!1};M.prototype.sourceContentFor=function(e,i){if(!this.sourcesContent)return null;var t=this._findSourceIndex(e);if(t>=0)return this.sourcesContent[t];var r=e;this.sourceRoot!=null&&(r=D.relative(this.sourceRoot,r));var s;if(this.sourceRoot!=null&&(s=D.urlParse(this.sourceRoot))){var a=r.replace(/^file:\/\//,"");if(s.scheme=="file"&&this._sources.has(a))return this.sourcesContent[this._sources.indexOf(a)];if((!s.path||s.path=="/")&&this._sources.has("/"+r))return this.sourcesContent[this._sources.indexOf("/"+r)]}if(i)return null;throw new Error('"'+r+'" is not in the SourceMap.')};M.prototype.generatedPositionFor=function(e){var i=D.getArg(e,"source");if(i=this._findSourceIndex(i),i<0)return{line:null,column:null,lastColumn:null};var t={source:i,originalLine:D.getArg(e,"line"),originalColumn:D.getArg(e,"column")},r=this._findMapping(t,this._originalMappings,"originalLine","originalColumn",D.compareByOriginalPositions,D.getArg(e,"bias",P.GREATEST_LOWER_BOUND));if(r>=0){var s=this._originalMappings[r];if(s.source===t.source)return{line:D.getArg(s,"generatedLine",null),column:D.getArg(s,"generatedColumn",null),lastColumn:D.getArg(s,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}};gn.BasicSourceMapConsumer=M;function V(n,e){var i=n;typeof n=="string"&&(i=D.parseSourceMapInput(n));var t=D.getArg(i,"version"),r=D.getArg(i,"sections");if(t!=this._version)throw new Error("Unsupported version: "+t);this._sources=new De,this._names=new De;var s={line:-1,column:0};this._sections=r.map(function(a){if(a.url)throw new Error("Support for url field in sections not implemented.");var o=D.getArg(a,"offset"),u=D.getArg(o,"line"),l=D.getArg(o,"column");if(u<s.line||u===s.line&&l<s.column)throw new Error("Section offsets must be ordered and non-overlapping.");return s=o,{generatedOffset:{generatedLine:u+1,generatedColumn:l+1},consumer:new P(D.getArg(a,"map"),e)}})}V.prototype=Object.create(P.prototype);V.prototype.constructor=P;V.prototype._version=3;Object.defineProperty(V.prototype,"sources",{get:function(){for(var n=[],e=0;e<this._sections.length;e++)for(var i=0;i<this._sections[e].consumer.sources.length;i++)n.push(this._sections[e].consumer.sources[i]);return n}});V.prototype.originalPositionFor=function(e){var i={generatedLine:D.getArg(e,"line"),generatedColumn:D.getArg(e,"column")},t=Dt.search(i,this._sections,function(s,a){var o=s.generatedLine-a.generatedOffset.generatedLine;return o||s.generatedColumn-a.generatedOffset.generatedColumn}),r=this._sections[t];return r?r.consumer.originalPositionFor({line:i.generatedLine-(r.generatedOffset.generatedLine-1),column:i.generatedColumn-(r.generatedOffset.generatedLine===i.generatedLine?r.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}};V.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(e){return e.consumer.hasContentsOfAllSources()})};V.prototype.sourceContentFor=function(e,i){for(var t=0;t<this._sections.length;t++){var r=this._sections[t],s=r.consumer.sourceContentFor(e,!0);if(s)return s}if(i)return null;throw new Error('"'+e+'" is not in the SourceMap.')};V.prototype.generatedPositionFor=function(e){for(var i=0;i<this._sections.length;i++){var t=this._sections[i];if(t.consumer._findSourceIndex(D.getArg(e,"source"))!==-1){var r=t.consumer.generatedPositionFor(e);if(r){var s={line:r.line+(t.generatedOffset.generatedLine-1),column:r.column+(t.generatedOffset.generatedLine===r.line?t.generatedOffset.generatedColumn-1:0)};return s}}}return{line:null,column:null}};V.prototype._parseMappings=function(e,i){this.__generatedMappings=[],this.__originalMappings=[];for(var t=0;t<this._sections.length;t++)for(var r=this._sections[t],s=r.consumer._generatedMappings,a=0;a<s.length;a++){var o=s[a],u=r.consumer._sources.at(o.source);u=D.computeSourceURL(r.consumer.sourceRoot,u,this._sourceMapURL),this._sources.add(u),u=this._sources.indexOf(u);var l=null;o.name&&(l=r.consumer._names.at(o.name),this._names.add(l),l=this._names.indexOf(l));var h={source:u,generatedLine:o.generatedLine+(r.generatedOffset.generatedLine-1),generatedColumn:o.generatedColumn+(r.generatedOffset.generatedLine===o.generatedLine?r.generatedOffset.generatedColumn-1:0),originalLine:o.originalLine,originalColumn:o.originalColumn,name:l};this.__generatedMappings.push(h),typeof h.originalLine=="number"&&this.__originalMappings.push(h)}Te(this.__generatedMappings,D.compareByGeneratedPositionsDeflated),Te(this.__originalMappings,D.compareByOriginalPositions)};gn.IndexedSourceMapConsumer=V});var gr=w(mr=>{m();var Eo=ft().SourceMapGenerator,vn=ve(),xo=/(\r?\n)/,Po=10,be="$$$isSourceNode$$$";function z(n,e,i,t,r){this.children=[],this.sourceContents={},this.line=n??null,this.column=e??null,this.source=i??null,this.name=r??null,this[be]=!0,t!=null&&this.add(t)}z.fromStringWithSourceMap=function(e,i,t){var r=new z,s=e.split(xo),a=0,o=function(){var p=g(),d=g()||"";return p+d;function g(){return a<s.length?s[a++]:void 0}},u=1,l=0,h=null;return i.eachMapping(function(p){if(h!==null)if(u<p.generatedLine)c(h,o()),u++,l=0;else{var d=s[a]||"",g=d.substr(0,p.generatedColumn-l);s[a]=d.substr(p.generatedColumn-l),l=p.generatedColumn,c(h,g),h=p;return}for(;u<p.generatedLine;)r.add(o()),u++;if(l<p.generatedColumn){var d=s[a]||"";r.add(d.substr(0,p.generatedColumn)),s[a]=d.substr(p.generatedColumn),l=p.generatedColumn}h=p},this),a<s.length&&(h&&c(h,o()),r.add(s.splice(a).join(""))),i.sources.forEach(function(p){var d=i.sourceContentFor(p);d!=null&&(t!=null&&(p=vn.join(t,p)),r.setSourceContent(p,d))}),r;function c(p,d){if(p===null||p.source===void 0)r.add(d);else{var g=t?vn.join(t,p.source):p.source;r.add(new z(p.originalLine,p.originalColumn,g,d,p.name))}}};z.prototype.add=function(e){if(Array.isArray(e))e.forEach(function(i){this.add(i)},this);else if(e[be]||typeof e=="string")e&&this.children.push(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);return this};z.prototype.prepend=function(e){if(Array.isArray(e))for(var i=e.length-1;i>=0;i--)this.prepend(e[i]);else if(e[be]||typeof e=="string")this.children.unshift(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);return this};z.prototype.walk=function(e){for(var i,t=0,r=this.children.length;t<r;t++)i=this.children[t],i[be]?i.walk(e):i!==""&&e(i,{source:this.source,line:this.line,column:this.column,name:this.name})};z.prototype.join=function(e){var i,t,r=this.children.length;if(r>0){for(i=[],t=0;t<r-1;t++)i.push(this.children[t]),i.push(e);i.push(this.children[t]),this.children=i}return this};z.prototype.replaceRight=function(e,i){var t=this.children[this.children.length-1];return t[be]?t.replaceRight(e,i):typeof t=="string"?this.children[this.children.length-1]=t.replace(e,i):this.children.push("".replace(e,i)),this};z.prototype.setSourceContent=function(e,i){this.sourceContents[vn.toSetString(e)]=i};z.prototype.walkSourceContents=function(e){for(var i=0,t=this.children.length;i<t;i++)this.children[i][be]&&this.children[i].walkSourceContents(e);for(var r=Object.keys(this.sourceContents),i=0,t=r.length;i<t;i++)e(vn.fromSetString(r[i]),this.sourceContents[r[i]])};z.prototype.toString=function(){var e="";return this.walk(function(i){e+=i}),e};z.prototype.toStringWithSourceMap=function(e){var i={code:"",line:1,column:0},t=new Eo(e),r=!1,s=null,a=null,o=null,u=null;return this.walk(function(l,h){i.code+=l,h.source!==null&&h.line!==null&&h.column!==null?((s!==h.source||a!==h.line||o!==h.column||u!==h.name)&&t.addMapping({source:h.source,original:{line:h.line,column:h.column},generated:{line:i.line,column:i.column},name:h.name}),s=h.source,a=h.line,o=h.column,u=h.name,r=!0):r&&(t.addMapping({generated:{line:i.line,column:i.column}}),s=null,r=!1);for(var c=0,p=l.length;c<p;c++)l.charCodeAt(c)===Po?(i.line++,i.column=0,c+1===p?(s=null,r=!1):r&&t.addMapping({source:h.source,original:{line:h.line,column:h.column},generated:{line:i.line,column:i.column},name:h.name})):i.column++}),this.walkSourceContents(function(l,h){t.setSourceContent(l,h)}),{code:i.code,map:t}};mr.SourceNode=z});var vr=w(Dn=>{m();Dn.SourceMapGenerator=ft().SourceMapGenerator;Dn.SourceMapConsumer=fr().SourceMapConsumer;Dn.SourceNode=gr().SourceNode});var kr=w((bn,yr)=>{"use strict";m();bn.__esModule=!0;var yt=R(),ce=void 0;try{(typeof define!="function"||!define.amd)&&(Dr=vr(),ce=Dr.SourceNode)}catch{}var Dr;ce||(ce=function(n,e,i,t){this.src="",t&&this.add(t)},ce.prototype={add:function(e){yt.isArray(e)&&(e=e.join("")),this.src+=e},prepend:function(e){yt.isArray(e)&&(e=e.join("")),this.src=e+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}});function bt(n,e,i){if(yt.isArray(n)){for(var t=[],r=0,s=n.length;r<s;r++)t.push(e.wrap(n[r],i));return t}else if(typeof n=="boolean"||typeof n=="number")return n+"";return n}function br(n){this.srcFile=n,this.source=[]}br.prototype={isEmpty:function(){return!this.source.length},prepend:function(e,i){this.source.unshift(this.wrap(e,i))},push:function(e,i){this.source.push(this.wrap(e,i))},merge:function(){var e=this.empty();return this.each(function(i){e.add(["  ",i,`
`])}),e},each:function(e){for(var i=0,t=this.source.length;i<t;i++)e(this.source[i])},empty:function(){var e=this.currentLocation||{start:{}};return new ce(e.start.line,e.start.column,this.srcFile)},wrap:function(e){var i=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return e instanceof ce?e:(e=bt(e,this,i),new ce(i.start.line,i.start.column,this.srcFile,e))},functionCall:function(e,i,t){return t=this.generateList(t),this.wrap([e,i?"."+i+"(":"(",t,")"])},quotedString:function(e){return'"'+(e+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var i=this,t=[];Object.keys(e).forEach(function(s){var a=bt(e[s],i);a!=="undefined"&&t.push([i.quotedString(s),":",a])});var r=this.generateList(t);return r.prepend("{"),r.add("}"),r},generateList:function(e){for(var i=this.empty(),t=0,r=e.length;t<r;t++)t&&i.add(","),i.add(bt(e[t],this));return i},generateArray:function(e){var i=this.generateList(e);return i.prepend("["),i.add("]"),i}};bn.default=br;yr.exports=bn.default});var Sr=w((yn,Ar)=>{"use strict";m();yn.__esModule=!0;function Cr(n){return n&&n.__esModule?n:{default:n}}var wr=nn(),Fo=U(),kt=Cr(Fo),Bo=R(),Io=kr(),_r=Cr(Io);function ye(n){this.value=n}function ke(){}ke.prototype={nameLookup:function(e,i){return this.internalNameLookup(e,i)},depthedLookup:function(e){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(e),")"]},compilerInfo:function(){var e=wr.COMPILER_REVISION,i=wr.REVISION_CHANGES[e];return[e,i]},appendToBuffer:function(e,i,t){return Bo.isArray(e)||(e=[e]),e=this.source.wrap(e,i),this.environment.isSimple?["return ",e,";"]:t?["buffer += ",e,";"]:(e.appendToBuffer=!0,e)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(e,i){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",e,",",JSON.stringify(i),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(e,i,t,r){this.environment=e,this.options=i,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!r,this.name=this.environment.name,this.isChild=!!t,this.context=t||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(e,i),this.useDepths=this.useDepths||e.useDepths||e.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||e.useBlockParams;var s=e.opcodes,a=void 0,o=void 0,u=void 0,l=void 0;for(u=0,l=s.length;u<l;u++)a=s[u],this.source.currentLocation=a.loc,o=o||a.loc,this[a.opcode].apply(this,a.args);if(this.source.currentLocation=o,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new kt.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),r?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var h=this.createFunctionContext(r);if(this.isChild)return h;var c={compiler:this.compilerInfo(),main:h};this.decorators&&(c.main_d=this.decorators,c.useDecorators=!0);var p=this.context,d=p.programs,g=p.decorators;for(u=0,l=d.length;u<l;u++)d[u]&&(c[u]=d[u],g[u]&&(c[u+"_d"]=g[u],c.useDecorators=!0));return this.environment.usePartial&&(c.usePartial=!0),this.options.data&&(c.useData=!0),this.useDepths&&(c.useDepths=!0),this.useBlockParams&&(c.useBlockParams=!0),this.options.compat&&(c.compat=!0),r?c.compilerOptions=this.options:(c.compiler=JSON.stringify(c.compiler),this.source.currentLocation={start:{line:1,column:0}},c=this.objectLiteral(c),i.srcName?(c=c.toStringWithSourceMap({file:i.destName}),c.map=c.map&&c.map.toString()):c=c.toString()),c},preamble:function(){this.lastContext=0,this.source=new _r.default(this.options.srcName),this.decorators=new _r.default(this.options.srcName)},createFunctionContext:function(e){var i=this,t="",r=this.stackVars.concat(this.registers.list);r.length>0&&(t+=", "+r.join(", "));var s=0;Object.keys(this.aliases).forEach(function(u){var l=i.aliases[u];l.children&&l.referenceCount>1&&(t+=", alias"+ ++s+"="+u,l.children[0]="alias"+s)}),this.lookupPropertyFunctionIsUsed&&(t+=", "+this.lookupPropertyFunctionVarDeclaration());var a=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&a.push("blockParams"),this.useDepths&&a.push("depths");var o=this.mergeSource(t);return e?(a.push(o),Function.apply(this,a)):this.source.wrap(["function(",a.join(","),`) {
  `,o,"}"])},mergeSource:function(e){var i=this.environment.isSimple,t=!this.forceBuffer,r=void 0,s=void 0,a=void 0,o=void 0;return this.source.each(function(u){u.appendToBuffer?(a?u.prepend("  + "):a=u,o=u):(a&&(s?a.prepend("buffer += "):r=!0,o.add(";"),a=o=void 0),s=!0,i||(t=!1))}),t?a?(a.prepend("return "),o.add(";")):s||this.source.push('return "";'):(e+=", buffer = "+(r?"":this.initializeBuffer()),a?(a.prepend("return buffer + "),o.add(";")):this.source.push("return buffer;")),e&&this.source.prepend("var "+e.substring(2)+(r?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(e){var i=this.aliasable("container.hooks.blockHelperMissing"),t=[this.contextName(0)];this.setupHelperArgs(e,0,t);var r=this.popStack();t.splice(1,0,r),this.push(this.source.functionCall(i,"call",t))},ambiguousBlockValue:function(){var e=this.aliasable("container.hooks.blockHelperMissing"),i=[this.contextName(0)];this.setupHelperArgs("",0,i,!0),this.flushInline();var t=this.topStack();i.splice(1,0,t),this.pushSource(["if (!",this.lastHelper,") { ",t," = ",this.source.functionCall(e,"call",i),"}"])},appendContent:function(e){this.pendingContent?e=this.pendingContent+e:this.pendingLocation=this.source.currentLocation,this.pendingContent=e},append:function(){if(this.isInline())this.replaceStack(function(i){return[" != null ? ",i,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var e=this.popStack();this.pushSource(["if (",e," != null) { ",this.appendToBuffer(e,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,i,t,r){var s=0;!r&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(e[s++])):this.pushContext(),this.resolvePath("context",e,s,i,t)},lookupBlockParam:function(e,i){this.useBlockParams=!0,this.push(["blockParams[",e[0],"][",e[1],"]"]),this.resolvePath("context",i,1)},lookupData:function(e,i,t){e?this.pushStackLiteral("container.data(data, "+e+")"):this.pushStackLiteral("data"),this.resolvePath("data",i,0,!0,t)},resolvePath:function(e,i,t,r,s){var a=this;if(this.options.strict||this.options.assumeObjects){this.push(Mo(this.options.strict&&s,this,i,t,e));return}for(var o=i.length;t<o;t++)this.replaceStack(function(u){var l=a.nameLookup(u,i[t],e);return r?[" && ",l]:[" != null ? ",l," : ",u]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(e,i){this.pushContext(),this.pushString(i),i!=="SubExpression"&&(typeof e=="string"?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(e){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(e?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(e.ids)),this.stringParams&&(this.push(this.objectLiteral(e.contexts)),this.push(this.objectLiteral(e.types))),this.push(this.objectLiteral(e.values))},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){e!=null?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},registerDecorator:function(e,i){var t=this.nameLookup("decorators",i,"decorator"),r=this.setupHelperArgs(i,e);this.decorators.push(["fn = ",this.decorators.functionCall(t,"",["fn","props","container",r])," || fn;"])},invokeHelper:function(e,i,t){var r=this.popStack(),s=this.setupHelper(e,i),a=[];t&&a.push(s.name),a.push(r),this.options.strict||a.push(this.aliasable("container.hooks.helperMissing"));var o=["(",this.itemsSeparatedBy(a,"||"),")"],u=this.source.functionCall(o,"call",s.callParams);this.push(u)},itemsSeparatedBy:function(e,i){var t=[];t.push(e[0]);for(var r=1;r<e.length;r++)t.push(i,e[r]);return t},invokeKnownHelper:function(e,i){var t=this.setupHelper(e,i);this.push(this.source.functionCall(t.name,"call",t.callParams))},invokeAmbiguous:function(e,i){this.useRegister("helper");var t=this.popStack();this.emptyHash();var r=this.setupHelper(0,e,i),s=this.lastHelper=this.nameLookup("helpers",e,"helper"),a=["(","(helper = ",s," || ",t,")"];this.options.strict||(a[0]="(helper = ",a.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",a,r.paramsInit?["),(",r.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",r.callParams)," : helper))"])},invokePartial:function(e,i,t){var r=[],s=this.setupParams(i,1,r);e&&(i=this.popStack(),delete s.name),t&&(s.indent=JSON.stringify(t)),s.helpers="helpers",s.partials="partials",s.decorators="container.decorators",e?r.unshift(i):r.unshift(this.nameLookup("partials",i,"partial")),this.options.compat&&(s.depths="depths"),s=this.objectLiteral(s),r.push(s),this.push(this.source.functionCall("container.invokePartial","",r))},assignToHash:function(e){var i=this.popStack(),t=void 0,r=void 0,s=void 0;this.trackIds&&(s=this.popStack()),this.stringParams&&(r=this.popStack(),t=this.popStack());var a=this.hash;t&&(a.contexts[e]=t),r&&(a.types[e]=r),s&&(a.ids[e]=s),a.values[e]=i},pushId:function(e,i,t){e==="BlockParam"?this.pushStackLiteral("blockParams["+i[0]+"].path["+i[1]+"]"+(t?" + "+JSON.stringify("."+t):"")):e==="PathExpression"?this.pushString(i):e==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:ke,compileChildren:function(e,i){for(var t=e.children,r=void 0,s=void 0,a=0,o=t.length;a<o;a++){r=t[a],s=new this.compiler;var u=this.matchExistingProgram(r);if(u==null){this.context.programs.push("");var l=this.context.programs.length;r.index=l,r.name="program"+l,this.context.programs[l]=s.compile(r,i,this.context,!this.precompile),this.context.decorators[l]=s.decorators,this.context.environments[l]=r,this.useDepths=this.useDepths||s.useDepths,this.useBlockParams=this.useBlockParams||s.useBlockParams,r.useDepths=this.useDepths,r.useBlockParams=this.useBlockParams}else r.index=u.index,r.name="program"+u.index,this.useDepths=this.useDepths||u.useDepths,this.useBlockParams=this.useBlockParams||u.useBlockParams}},matchExistingProgram:function(e){for(var i=0,t=this.context.environments.length;i<t;i++){var r=this.context.environments[i];if(r&&r.equals(e))return r}},programExpression:function(e){var i=this.environment.children[e],t=[i.index,"data",i.blockParams];return(this.useBlockParams||this.useDepths)&&t.push("blockParams"),this.useDepths&&t.push("depths"),"container.program("+t.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},push:function(e){return e instanceof ye||(e=this.source.wrap(e)),this.inlineStack.push(e),e},pushStackLiteral:function(e){this.push(new ye(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),e&&this.source.push(e)},replaceStack:function(e){var i=["("],t=void 0,r=void 0,s=void 0;if(!this.isInline())throw new kt.default("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof ye)t=[a.value],i=["(",t],s=!0;else{r=!0;var o=this.incrStack();i=["((",this.push(o)," = ",a,")"],t=this.topStack()}var u=e.call(this,t);s||this.popStack(),r&&this.stackSlot--,this.push(i.concat(u,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;this.inlineStack=[];for(var i=0,t=e.length;i<t;i++){var r=e[i];if(r instanceof ye)this.compileStack.push(r);else{var s=this.incrStack();this.pushSource([s," = ",r,";"]),this.compileStack.push(s)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var i=this.isInline(),t=(i?this.inlineStack:this.compileStack).pop();if(!e&&t instanceof ye)return t.value;if(!i){if(!this.stackSlot)throw new kt.default("Invalid stack pop");this.stackSlot--}return t},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,i=e[e.length-1];return i instanceof ye?i.value:i},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return this.source.quotedString(e)},objectLiteral:function(e){return this.source.objectLiteral(e)},aliasable:function(e){var i=this.aliases[e];return i?(i.referenceCount++,i):(i=this.aliases[e]=this.source.wrap(e),i.aliasable=!0,i.referenceCount=1,i)},setupHelper:function(e,i,t){var r=[],s=this.setupHelperArgs(i,e,r,t),a=this.nameLookup("helpers",i,"helper"),o=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:r,paramsInit:s,name:a,callParams:[o].concat(r)}},setupParams:function(e,i,t){var r={},s=[],a=[],o=[],u=!t,l=void 0;u&&(t=[]),r.name=this.quotedString(e),r.hash=this.popStack(),this.trackIds&&(r.hashIds=this.popStack()),this.stringParams&&(r.hashTypes=this.popStack(),r.hashContexts=this.popStack());var h=this.popStack(),c=this.popStack();(c||h)&&(r.fn=c||"container.noop",r.inverse=h||"container.noop");for(var p=i;p--;)l=this.popStack(),t[p]=l,this.trackIds&&(o[p]=this.popStack()),this.stringParams&&(a[p]=this.popStack(),s[p]=this.popStack());return u&&(r.args=this.source.generateArray(t)),this.trackIds&&(r.ids=this.source.generateArray(o)),this.stringParams&&(r.types=this.source.generateArray(a),r.contexts=this.source.generateArray(s)),this.options.data&&(r.data="data"),this.useBlockParams&&(r.blockParams="blockParams"),r},setupHelperArgs:function(e,i,t,r){var s=this.setupParams(e,i,t);return s.loc=JSON.stringify(this.source.currentLocation),s=this.objectLiteral(s),r?(this.useRegister("options"),t.push("options"),["options=",s]):t?(t.push(s),""):s}};(function(){for(var n="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),e=ke.RESERVED_WORDS={},i=0,t=n.length;i<t;i++)e[n[i]]=!0})();ke.isValidJavaScriptVariableName=function(n){return!ke.RESERVED_WORDS[n]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(n)};function Mo(n,e,i,t,r){var s=e.popStack(),a=i.length;for(n&&a--;t<a;t++)s=e.nameLookup(s,i[t],r);return n?[e.aliasable("container.strict"),"(",s,", ",e.quotedString(i[t]),", ",JSON.stringify(e.source.currentLocation)," )"]:s}yn.default=ke;Ar.exports=yn.default});var Pr=w((kn,xr)=>{"use strict";m();kn.__esModule=!0;function Re(n){return n&&n.__esModule?n:{default:n}}var Lo=Fi(),Oo=Re(Lo),To=Yn(),Ro=Re(To),wt=Ui(),_t=Wi(),No=Sr(),Ho=Re(No),zo=$n(),qo=Re(zo),Go=Wn(),Uo=Re(Go),jo=Oo.default.create;function Er(){var n=jo();return n.compile=function(e,i){return _t.compile(e,i,n)},n.precompile=function(e,i){return _t.precompile(e,i,n)},n.AST=Ro.default,n.Compiler=_t.Compiler,n.JavaScriptCompiler=Ho.default,n.Parser=wt.parser,n.parse=wt.parse,n.parseWithoutProcessing=wt.parseWithoutProcessing,n}var we=Er();we.create=Er;Uo.default(we);we.Visitor=qo.default;we.default=we;kn.default=we;xr.exports=kn.default});var Gr=w(x=>{"use strict";m();function Fr(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,Ko(t.key),t)}}function Jo(n,e,i){return e&&Fr(n.prototype,e),i&&Fr(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function q(){return q=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}return n},q.apply(this,arguments)}function Vo(n,e){if(n){if(typeof n=="string")return Br(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Br(n,e)}}function Br(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,t=new Array(e);i<e;i++)t[i]=n[i];return t}function wn(n,e){var i=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i)return(i=i.call(n)).next.bind(i);if(Array.isArray(n)||(i=Vo(n))||e&&n&&typeof n.length=="number"){i&&(n=i);var t=0;return function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wo(n,e){if(typeof n!="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var t=i.call(n,e||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Ko(n){var e=Wo(n,"string");return typeof e=="symbol"?e:String(e)}function Ct(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}x.defaults=Ct();function Zo(n){x.defaults=n}var Nr=/[&<>"']/,Qo=new RegExp(Nr.source,"g"),Hr=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Yo=new RegExp(Hr.source,"g"),Xo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ir=function(e){return Xo[e]};function O(n,e){if(e){if(Nr.test(n))return n.replace(Qo,Ir)}else if(Hr.test(n))return n.replace(Yo,Ir);return n}var $o=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function zr(n){return n.replace($o,function(e,i){return i=i.toLowerCase(),i==="colon"?":":i.charAt(0)==="#"?i.charAt(1)==="x"?String.fromCharCode(parseInt(i.substring(2),16)):String.fromCharCode(+i.substring(1)):""})}var el=/(^|[^\[])\^/g;function E(n,e){n=typeof n=="string"?n:n.source,e=e||"";var i={replace:function(r,s){return s=s.source||s,s=s.replace(el,"$1"),n=n.replace(r,s),i},getRegex:function(){return new RegExp(n,e)}};return i}var nl=/[^\w:]/g,tl=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Mr(n,e,i){if(n){var t;try{t=decodeURIComponent(zr(i)).replace(nl,"").toLowerCase()}catch{return null}if(t.indexOf("javascript:")===0||t.indexOf("vbscript:")===0||t.indexOf("data:")===0)return null}e&&!tl.test(i)&&(i=al(e,i));try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}var _n={},il=/^[^:]+:\/*[^/]*$/,rl=/^([^:]+:)[\s\S]*$/,sl=/^([^:]+:\/*[^/]*)[\s\S]*$/;function al(n,e){_n[" "+n]||(il.test(n)?_n[" "+n]=n+"/":_n[" "+n]=Cn(n,"/",!0)),n=_n[" "+n];var i=n.indexOf(":")===-1;return e.substring(0,2)==="//"?i?e:n.replace(rl,"$1")+e:e.charAt(0)==="/"?i?e:n.replace(sl,"$1")+e:n+e}var An={exec:function(){}};function Lr(n,e){var i=n.replace(/\|/g,function(s,a,o){for(var u=!1,l=a;--l>=0&&o[l]==="\\";)u=!u;return u?"|":" |"}),t=i.split(/ \|/),r=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;r<t.length;r++)t[r]=t[r].trim().replace(/\\\|/g,"|");return t}function Cn(n,e,i){var t=n.length;if(t===0)return"";for(var r=0;r<t;){var s=n.charAt(t-r-1);if(s===e&&!i)r++;else if(s!==e&&i)r++;else break}return n.slice(0,t-r)}function ol(n,e){if(n.indexOf(e[1])===-1)return-1;for(var i=n.length,t=0,r=0;r<i;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return-1}function ll(n){n&&n.sanitize&&!n.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Or(n,e){if(e<1)return"";for(var i="";e>1;)e&1&&(i+=n),e>>=1,n+=n;return i+n}function Tr(n,e,i,t){var r=e.href,s=e.title?O(e.title):null,a=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){t.state.inLink=!0;var o={type:"link",raw:i,href:r,title:s,text:a,tokens:t.inlineTokens(a)};return t.state.inLink=!1,o}return{type:"image",raw:i,href:r,title:s,text:O(a)}}function ul(n,e){var i=n.match(/^(\s+)(?:```)/);if(i===null)return e;var t=i[1];return e.split(`
`).map(function(r){var s=r.match(/^\s+/);if(s===null)return r;var a=s[0];return a.length>=t.length?r.slice(t.length):r}).join(`
`)}var Sn=(function(){function n(i){this.options=i||x.defaults}var e=n.prototype;return e.space=function(t){var r=this.rules.block.newline.exec(t);if(r&&r[0].length>0)return{type:"space",raw:r[0]}},e.code=function(t){var r=this.rules.block.code.exec(t);if(r){var s=r[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:this.options.pedantic?s:Cn(s,`
`)}}},e.fences=function(t){var r=this.rules.block.fences.exec(t);if(r){var s=r[0],a=ul(s,r[3]||"");return{type:"code",raw:s,lang:r[2]?r[2].trim().replace(this.rules.inline._escapes,"$1"):r[2],text:a}}},e.heading=function(t){var r=this.rules.block.heading.exec(t);if(r){var s=r[2].trim();if(/#$/.test(s)){var a=Cn(s,"#");(this.options.pedantic||!a||/ $/.test(a))&&(s=a.trim())}return{type:"heading",raw:r[0],depth:r[1].length,text:s,tokens:this.lexer.inline(s)}}},e.hr=function(t){var r=this.rules.block.hr.exec(t);if(r)return{type:"hr",raw:r[0]}},e.blockquote=function(t){var r=this.rules.block.blockquote.exec(t);if(r){var s=r[0].replace(/^ *>[ \t]?/gm,""),a=this.lexer.state.top;this.lexer.state.top=!0;var o=this.lexer.blockTokens(s);return this.lexer.state.top=a,{type:"blockquote",raw:r[0],tokens:o,text:s}}},e.list=function(t){var r=this.rules.block.list.exec(t);if(r){var s,a,o,u,l,h,c,p,d,g,f,_,C=r[1].trim(),I=C.length>1,S={type:"list",raw:"",ordered:I,start:I?+C.slice(0,-1):"",loose:!1,items:[]};C=I?"\\d{1,9}\\"+C.slice(-1):"\\"+C,this.options.pedantic&&(C=I?C:"[*+-]");for(var A=new RegExp("^( {0,3}"+C+")((?:[	 ][^\\n]*)?(?:\\n|$))");t&&(_=!1,!(!(r=A.exec(t))||this.rules.block.hr.test(t)));){if(s=r[0],t=t.substring(s.length),p=r[2].split(`
`,1)[0].replace(/^\t+/,function(T){return" ".repeat(3*T.length)}),d=t.split(`
`,1)[0],this.options.pedantic?(u=2,f=p.trimLeft()):(u=r[2].search(/[^ ]/),u=u>4?1:u,f=p.slice(u),u+=r[1].length),h=!1,!p&&/^ *$/.test(d)&&(s+=d+`
`,t=t.substring(d.length+1),_=!0),!_)for(var Q=new RegExp("^ {0,"+Math.min(3,u-1)+"}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))"),N=new RegExp("^ {0,"+Math.min(3,u-1)+"}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"),F=new RegExp("^ {0,"+Math.min(3,u-1)+"}(?:```|~~~)"),re=new RegExp("^ {0,"+Math.min(3,u-1)+"}#");t&&(g=t.split(`
`,1)[0],d=g,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(F.test(d)||re.test(d)||Q.test(d)||N.test(t)));){if(d.search(/[^ ]/)>=u||!d.trim())f+=`
`+d.slice(u);else{if(h||p.search(/[^ ]/)>=4||F.test(p)||re.test(p)||N.test(p))break;f+=`
`+d}!h&&!d.trim()&&(h=!0),s+=g+`
`,t=t.substring(g.length+1),p=d.slice(u)}S.loose||(c?S.loose=!0:/\n *\n *$/.test(s)&&(c=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(f),a&&(o=a[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),S.items.push({type:"list_item",raw:s,task:!!a,checked:o,loose:!1,text:f}),S.raw+=s}S.items[S.items.length-1].raw=s.trimRight(),S.items[S.items.length-1].text=f.trimRight(),S.raw=S.raw.trimRight();var Y=S.items.length;for(l=0;l<Y;l++)if(this.lexer.state.top=!1,S.items[l].tokens=this.lexer.blockTokens(S.items[l].text,[]),!S.loose){var G=S.items[l].tokens.filter(function(T){return T.type==="space"}),pe=G.length>0&&G.some(function(T){return/\n.*\n/.test(T.raw)});S.loose=pe}if(S.loose)for(l=0;l<Y;l++)S.items[l].loose=!0;return S}},e.html=function(t){var r=this.rules.block.html.exec(t);if(r){var s={type:"html",raw:r[0],pre:!this.options.sanitizer&&(r[1]==="pre"||r[1]==="script"||r[1]==="style"),text:r[0]};if(this.options.sanitize){var a=this.options.sanitizer?this.options.sanitizer(r[0]):O(r[0]);s.type="paragraph",s.text=a,s.tokens=this.lexer.inline(a)}return s}},e.def=function(t){var r=this.rules.block.def.exec(t);if(r){var s=r[1].toLowerCase().replace(/\s+/g," "),a=r[2]?r[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",o=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline._escapes,"$1"):r[3];return{type:"def",tag:s,raw:r[0],href:a,title:o}}},e.table=function(t){var r=this.rules.block.table.exec(t);if(r){var s={type:"table",header:Lr(r[1]).map(function(c){return{text:c}}),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:r[3]&&r[3].trim()?r[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){s.raw=r[0];var a=s.align.length,o,u,l,h;for(o=0;o<a;o++)/^ *-+: *$/.test(s.align[o])?s.align[o]="right":/^ *:-+: *$/.test(s.align[o])?s.align[o]="center":/^ *:-+ *$/.test(s.align[o])?s.align[o]="left":s.align[o]=null;for(a=s.rows.length,o=0;o<a;o++)s.rows[o]=Lr(s.rows[o],s.header.length).map(function(c){return{text:c}});for(a=s.header.length,u=0;u<a;u++)s.header[u].tokens=this.lexer.inline(s.header[u].text);for(a=s.rows.length,u=0;u<a;u++)for(h=s.rows[u],l=0;l<h.length;l++)h[l].tokens=this.lexer.inline(h[l].text);return s}}},e.lheading=function(t){var r=this.rules.block.lheading.exec(t);if(r)return{type:"heading",raw:r[0],depth:r[2].charAt(0)==="="?1:2,text:r[1],tokens:this.lexer.inline(r[1])}},e.paragraph=function(t){var r=this.rules.block.paragraph.exec(t);if(r){var s=r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:s,tokens:this.lexer.inline(s)}}},e.text=function(t){var r=this.rules.block.text.exec(t);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}},e.escape=function(t){var r=this.rules.inline.escape.exec(t);if(r)return{type:"escape",raw:r[0],text:O(r[1])}},e.tag=function(t){var r=this.rules.inline.tag.exec(t);if(r)return!this.lexer.state.inLink&&/^<a /i.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):O(r[0]):r[0]}},e.link=function(t){var r=this.rules.inline.link.exec(t);if(r){var s=r[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;var a=Cn(s.slice(0,-1),"\\");if((s.length-a.length)%2===0)return}else{var o=ol(r[2],"()");if(o>-1){var u=r[0].indexOf("!")===0?5:4,l=u+r[1].length+o;r[2]=r[2].substring(0,o),r[0]=r[0].substring(0,l).trim(),r[3]=""}}var h=r[2],c="";if(this.options.pedantic){var p=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(h);p&&(h=p[1],c=p[3])}else c=r[3]?r[3].slice(1,-1):"";return h=h.trim(),/^</.test(h)&&(this.options.pedantic&&!/>$/.test(s)?h=h.slice(1):h=h.slice(1,-1)),Tr(r,{href:h&&h.replace(this.rules.inline._escapes,"$1"),title:c&&c.replace(this.rules.inline._escapes,"$1")},r[0],this.lexer)}},e.reflink=function(t,r){var s;if((s=this.rules.inline.reflink.exec(t))||(s=this.rules.inline.nolink.exec(t))){var a=(s[2]||s[1]).replace(/\s+/g," ");if(a=r[a.toLowerCase()],!a){var o=s[0].charAt(0);return{type:"text",raw:o,text:o}}return Tr(s,a,s[0],this.lexer)}},e.emStrong=function(t,r,s){s===void 0&&(s="");var a=this.rules.inline.emStrong.lDelim.exec(t);if(a&&!(a[3]&&s.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var o=a[1]||a[2]||"";if(!o||o&&(s===""||this.rules.inline.punctuation.exec(s))){var u=a[0].length-1,l,h,c=u,p=0,d=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(d.lastIndex=0,r=r.slice(-1*t.length+u);(a=d.exec(r))!=null;)if(l=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!!l){if(h=l.length,a[3]||a[4]){c+=h;continue}else if((a[5]||a[6])&&u%3&&!((u+h)%3)){p+=h;continue}if(c-=h,!(c>0)){h=Math.min(h,h+c+p);var g=t.slice(0,u+a.index+(a[0].length-l.length)+h);if(Math.min(u,h)%2){var f=g.slice(1,-1);return{type:"em",raw:g,text:f,tokens:this.lexer.inlineTokens(f)}}var _=g.slice(2,-2);return{type:"strong",raw:g,text:_,tokens:this.lexer.inlineTokens(_)}}}}}},e.codespan=function(t){var r=this.rules.inline.code.exec(t);if(r){var s=r[2].replace(/\n/g," "),a=/[^ ]/.test(s),o=/^ /.test(s)&&/ $/.test(s);return a&&o&&(s=s.substring(1,s.length-1)),s=O(s,!0),{type:"codespan",raw:r[0],text:s}}},e.br=function(t){var r=this.rules.inline.br.exec(t);if(r)return{type:"br",raw:r[0]}},e.del=function(t){var r=this.rules.inline.del.exec(t);if(r)return{type:"del",raw:r[0],text:r[2],tokens:this.lexer.inlineTokens(r[2])}},e.autolink=function(t,r){var s=this.rules.inline.autolink.exec(t);if(s){var a,o;return s[2]==="@"?(a=O(this.options.mangle?r(s[1]):s[1]),o="mailto:"+a):(a=O(s[1]),o=a),{type:"link",raw:s[0],text:a,href:o,tokens:[{type:"text",raw:a,text:a}]}}},e.url=function(t,r){var s;if(s=this.rules.inline.url.exec(t)){var a,o;if(s[2]==="@")a=O(this.options.mangle?r(s[0]):s[0]),o="mailto:"+a;else{var u;do u=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0];while(u!==s[0]);a=O(s[0]),s[1]==="www."?o="http://"+s[0]:o=s[0]}return{type:"link",raw:s[0],text:a,href:o,tokens:[{type:"text",raw:a,text:a}]}}},e.inlineText=function(t,r){var s=this.rules.inline.text.exec(t);if(s){var a;return this.lexer.state.inRawBlock?a=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):O(s[0]):s[0]:a=O(this.options.smartypants?r(s[0]):s[0]),{type:"text",raw:s[0],text:a}}},n})(),y={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:An,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};y._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;y._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;y.def=E(y.def).replace("label",y._label).replace("title",y._title).getRegex();y.bullet=/(?:[*+-]|\d{1,9}[.)])/;y.listItemStart=E(/^( *)(bull) */).replace("bull",y.bullet).getRegex();y.list=E(y.list).replace(/bull/g,y.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+y.def.source+")").getRegex();y._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";y._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;y.html=E(y.html,"i").replace("comment",y._comment).replace("tag",y._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();y.paragraph=E(y._paragraph).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",y._tag).getRegex();y.blockquote=E(y.blockquote).replace("paragraph",y.paragraph).getRegex();y.normal=q({},y);y.gfm=q({},y.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});y.gfm.table=E(y.gfm.table).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",y._tag).getRegex();y.gfm.paragraph=E(y._paragraph).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",y.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",y._tag).getRegex();y.pedantic=q({},y.normal,{html:E(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",y._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:An,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:E(y.normal._paragraph).replace("hr",y.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",y.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var v={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:An,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:An,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};v._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";v.punctuation=E(v.punctuation).replace(/punctuation/g,v._punctuation).getRegex();v.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;v.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;v._comment=E(y._comment).replace("(?:-->|$)","-->").getRegex();v.emStrong.lDelim=E(v.emStrong.lDelim).replace(/punct/g,v._punctuation).getRegex();v.emStrong.rDelimAst=E(v.emStrong.rDelimAst,"g").replace(/punct/g,v._punctuation).getRegex();v.emStrong.rDelimUnd=E(v.emStrong.rDelimUnd,"g").replace(/punct/g,v._punctuation).getRegex();v._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;v._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;v._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;v.autolink=E(v.autolink).replace("scheme",v._scheme).replace("email",v._email).getRegex();v._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;v.tag=E(v.tag).replace("comment",v._comment).replace("attribute",v._attribute).getRegex();v._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;v._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;v._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;v.link=E(v.link).replace("label",v._label).replace("href",v._href).replace("title",v._title).getRegex();v.reflink=E(v.reflink).replace("label",v._label).replace("ref",y._label).getRegex();v.nolink=E(v.nolink).replace("ref",y._label).getRegex();v.reflinkSearch=E(v.reflinkSearch,"g").replace("reflink",v.reflink).replace("nolink",v.nolink).getRegex();v.normal=q({},v);v.pedantic=q({},v.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:E(/^!?\[(label)\]\((.*?)\)/).replace("label",v._label).getRegex(),reflink:E(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",v._label).getRegex()});v.gfm=q({},v.normal,{escape:E(v.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});v.gfm.url=E(v.gfm.url,"i").replace("email",v.gfm._extended_email).getRegex();v.breaks=q({},v.gfm,{br:E(v.br).replace("{2,}","*").getRegex(),text:E(v.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function cl(n){return n.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Rr(n){var e="",i,t,r=n.length;for(i=0;i<r;i++)t=n.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),e+="&#"+t+";";return e}var _e=(function(){function n(i){this.tokens=[],this.tokens.links=Object.create(null),this.options=i||x.defaults,this.options.tokenizer=this.options.tokenizer||new Sn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};var t={block:y.normal,inline:v.normal};this.options.pedantic?(t.block=y.pedantic,t.inline=v.pedantic):this.options.gfm&&(t.block=y.gfm,this.options.breaks?t.inline=v.breaks:t.inline=v.gfm),this.tokenizer.rules=t}n.lex=function(t,r){var s=new n(r);return s.lex(t)},n.lexInline=function(t,r){var s=new n(r);return s.inlineTokens(t)};var e=n.prototype;return e.lex=function(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);for(var r;r=this.inlineQueue.shift();)this.inlineTokens(r.src,r.tokens);return this.tokens},e.blockTokens=function(t,r){var s=this;r===void 0&&(r=[]),this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,function(c,p,d){return p+"    ".repeat(d.length)});for(var a,o,u,l;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(function(c){return(a=c.call({lexer:s},t,r))?(t=t.substring(a.raw.length),r.push(a),!0):!1}))){if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length),a.raw.length===1&&r.length>0?r[r.length-1].raw+=`
`:r.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length),o=r[r.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):r.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length),o=r[r.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+a.raw,o.text+=`
`+a.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),r.push(a);continue}if(u=t,this.options.extensions&&this.options.extensions.startBlock&&(function(){var c=1/0,p=t.slice(1),d=void 0;s.options.extensions.startBlock.forEach(function(g){d=g.call({lexer:this},p),typeof d=="number"&&d>=0&&(c=Math.min(c,d))}),c<1/0&&c>=0&&(u=t.substring(0,c+1))})(),this.state.top&&(a=this.tokenizer.paragraph(u))){o=r[r.length-1],l&&o.type==="paragraph"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):r.push(a),l=u.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length),o=r[r.length-1],o&&o.type==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):r.push(a);continue}if(t){var h="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return this.state.top=!0,r},e.inline=function(t,r){return r===void 0&&(r=[]),this.inlineQueue.push({src:t,tokens:r}),r},e.inlineTokens=function(t,r){var s=this;r===void 0&&(r=[]);var a,o,u,l=t,h,c,p;if(this.tokens.links){var d=Object.keys(this.tokens.links);if(d.length>0)for(;(h=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)d.includes(h[0].slice(h[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,h.index)+"["+Or("a",h[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(h=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,h.index)+"["+Or("a",h[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(h=this.tokenizer.rules.inline.escapedEmSt.exec(l))!=null;)l=l.slice(0,h.index+h[0].length-2)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;t;)if(c||(p=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(function(f){return(a=f.call({lexer:s},t,r))?(t=t.substring(a.raw.length),r.push(a),!0):!1}))){if(a=this.tokenizer.escape(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.tag(t)){t=t.substring(a.raw.length),o=r[r.length-1],o&&a.type==="text"&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):r.push(a);continue}if(a=this.tokenizer.link(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(a.raw.length),o=r[r.length-1],o&&a.type==="text"&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):r.push(a);continue}if(a=this.tokenizer.emStrong(t,l,p)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.codespan(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.br(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.del(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.autolink(t,Rr)){t=t.substring(a.raw.length),r.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(t,Rr))){t=t.substring(a.raw.length),r.push(a);continue}if(u=t,this.options.extensions&&this.options.extensions.startInline&&(function(){var f=1/0,_=t.slice(1),C=void 0;s.options.extensions.startInline.forEach(function(I){C=I.call({lexer:this},_),typeof C=="number"&&C>=0&&(f=Math.min(f,C))}),f<1/0&&f>=0&&(u=t.substring(0,f+1))})(),a=this.tokenizer.inlineText(u,cl)){t=t.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(p=a.raw.slice(-1)),c=!0,o=r[r.length-1],o&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):r.push(a);continue}if(t){var g="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return r},Jo(n,null,[{key:"rules",get:function(){return{block:y,inline:v}}}]),n})(),En=(function(){function n(i){this.options=i||x.defaults}var e=n.prototype;return e.code=function(t,r,s){var a=(r||"").match(/\S*/)[0];if(this.options.highlight){var o=this.options.highlight(t,a);o!=null&&o!==t&&(s=!0,t=o)}return t=t.replace(/\n$/,"")+`
`,a?'<pre><code class="'+this.options.langPrefix+O(a)+'">'+(s?t:O(t,!0))+`</code></pre>
`:"<pre><code>"+(s?t:O(t,!0))+`</code></pre>
`},e.blockquote=function(t){return`<blockquote>
`+t+`</blockquote>
`},e.html=function(t){return t},e.heading=function(t,r,s,a){if(this.options.headerIds){var o=this.options.headerPrefix+a.slug(s);return"<h"+r+' id="'+o+'">'+t+"</h"+r+`>
`}return"<h"+r+">"+t+"</h"+r+`>
`},e.hr=function(){return this.options.xhtml?`<hr/>
`:`<hr>
`},e.list=function(t,r,s){var a=r?"ol":"ul",o=r&&s!==1?' start="'+s+'"':"";return"<"+a+o+`>
`+t+"</"+a+`>
`},e.listitem=function(t){return"<li>"+t+`</li>
`},e.checkbox=function(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},e.paragraph=function(t){return"<p>"+t+`</p>
`},e.table=function(t,r){return r&&(r="<tbody>"+r+"</tbody>"),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`},e.tablerow=function(t){return`<tr>
`+t+`</tr>
`},e.tablecell=function(t,r){var s=r.header?"th":"td",a=r.align?"<"+s+' align="'+r.align+'">':"<"+s+">";return a+t+("</"+s+`>
`)},e.strong=function(t){return"<strong>"+t+"</strong>"},e.em=function(t){return"<em>"+t+"</em>"},e.codespan=function(t){return"<code>"+t+"</code>"},e.br=function(){return this.options.xhtml?"<br/>":"<br>"},e.del=function(t){return"<del>"+t+"</del>"},e.link=function(t,r,s){if(t=Mr(this.options.sanitize,this.options.baseUrl,t),t===null)return s;var a='<a href="'+t+'"';return r&&(a+=' title="'+r+'"'),a+=">"+s+"</a>",a},e.image=function(t,r,s){if(t=Mr(this.options.sanitize,this.options.baseUrl,t),t===null)return s;var a='<img src="'+t+'" alt="'+s+'"';return r&&(a+=' title="'+r+'"'),a+=this.options.xhtml?"/>":">",a},e.text=function(t){return t},n})(),At=(function(){function n(){}var e=n.prototype;return e.strong=function(t){return t},e.em=function(t){return t},e.codespan=function(t){return t},e.del=function(t){return t},e.html=function(t){return t},e.text=function(t){return t},e.link=function(t,r,s){return""+s},e.image=function(t,r,s){return""+s},e.br=function(){return""},n})(),St=(function(){function n(){this.seen={}}var e=n.prototype;return e.serialize=function(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},e.getNextSafeSlug=function(t,r){var s=t,a=0;if(this.seen.hasOwnProperty(s)){a=this.seen[t];do a++,s=t+"-"+a;while(this.seen.hasOwnProperty(s))}return r||(this.seen[t]=a,this.seen[s]=0),s},e.slug=function(t,r){r===void 0&&(r={});var s=this.serialize(t);return this.getNextSafeSlug(s,r.dryrun)},n})(),Ce=(function(){function n(i){this.options=i||x.defaults,this.options.renderer=this.options.renderer||new En,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new At,this.slugger=new St}n.parse=function(t,r){var s=new n(r);return s.parse(t)},n.parseInline=function(t,r){var s=new n(r);return s.parseInline(t)};var e=n.prototype;return e.parse=function(t,r){r===void 0&&(r=!0);var s="",a,o,u,l,h,c,p,d,g,f,_,C,I,S,A,Q,N,F,re,Y=t.length;for(a=0;a<Y;a++){if(f=t[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(re=this.options.extensions.renderers[f.type].call({parser:this},f),re!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))){s+=re||"";continue}switch(f.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{s+=this.renderer.heading(this.parseInline(f.tokens),f.depth,zr(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{s+=this.renderer.code(f.text,f.lang,f.escaped);continue}case"table":{for(d="",p="",l=f.header.length,o=0;o<l;o++)p+=this.renderer.tablecell(this.parseInline(f.header[o].tokens),{header:!0,align:f.align[o]});for(d+=this.renderer.tablerow(p),g="",l=f.rows.length,o=0;o<l;o++){for(c=f.rows[o],p="",h=c.length,u=0;u<h;u++)p+=this.renderer.tablecell(this.parseInline(c[u].tokens),{header:!1,align:f.align[u]});g+=this.renderer.tablerow(p)}s+=this.renderer.table(d,g);continue}case"blockquote":{g=this.parse(f.tokens),s+=this.renderer.blockquote(g);continue}case"list":{for(_=f.ordered,C=f.start,I=f.loose,l=f.items.length,g="",o=0;o<l;o++)A=f.items[o],Q=A.checked,N=A.task,S="",A.task&&(F=this.renderer.checkbox(Q),I?A.tokens.length>0&&A.tokens[0].type==="paragraph"?(A.tokens[0].text=F+" "+A.tokens[0].text,A.tokens[0].tokens&&A.tokens[0].tokens.length>0&&A.tokens[0].tokens[0].type==="text"&&(A.tokens[0].tokens[0].text=F+" "+A.tokens[0].tokens[0].text)):A.tokens.unshift({type:"text",text:F}):S+=F),S+=this.parse(A.tokens,I),g+=this.renderer.listitem(S,N,Q);s+=this.renderer.list(g,_,C);continue}case"html":{s+=this.renderer.html(f.text);continue}case"paragraph":{s+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{for(g=f.tokens?this.parseInline(f.tokens):f.text;a+1<Y&&t[a+1].type==="text";)f=t[++a],g+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);s+=r?this.renderer.paragraph(g):g;continue}default:{var G='Token with "'+f.type+'" type was not found.';if(this.options.silent){console.error(G);return}else throw new Error(G)}}}return s},e.parseInline=function(t,r){r=r||this.renderer;var s="",a,o,u,l=t.length;for(a=0;a<l;a++){if(o=t[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(u=this.options.extensions.renderers[o.type].call({parser:this},o),u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type))){s+=u||"";continue}switch(o.type){case"escape":{s+=r.text(o.text);break}case"html":{s+=r.html(o.text);break}case"link":{s+=r.link(o.href,o.title,this.parseInline(o.tokens,r));break}case"image":{s+=r.image(o.href,o.title,o.text);break}case"strong":{s+=r.strong(this.parseInline(o.tokens,r));break}case"em":{s+=r.em(this.parseInline(o.tokens,r));break}case"codespan":{s+=r.codespan(o.text);break}case"br":{s+=r.br();break}case"del":{s+=r.del(this.parseInline(o.tokens,r));break}case"text":{s+=r.text(o.text);break}default:{var h='Token with "'+o.type+'" type was not found.';if(this.options.silent){console.error(h);return}else throw new Error(h)}}}return s},n})(),Ne=(function(){function n(i){this.options=i||x.defaults}var e=n.prototype;return e.preprocess=function(t){return t},e.postprocess=function(t){return t},n})();Ne.passThroughHooks=new Set(["preprocess","postprocess"]);function hl(n,e,i){return function(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){var r="<p>An error occurred:</p><pre>"+O(t.message+"",!0)+"</pre>";if(e)return Promise.resolve(r);if(i){i(null,r);return}return r}if(e)return Promise.reject(t);if(i){i(t);return}throw t}}function qr(n,e){return function(i,t,r){typeof t=="function"&&(r=t,t=null);var s=q({},t);t=q({},b.defaults,s);var a=hl(t.silent,t.async,r);if(typeof i>"u"||i===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(ll(t),t.hooks&&(t.hooks.options=t),r){var o=t.highlight,u;try{t.hooks&&(i=t.hooks.preprocess(i)),u=n(i,t)}catch(d){return a(d)}var l=function(g){var f;if(!g)try{t.walkTokens&&b.walkTokens(u,t.walkTokens),f=e(u,t),t.hooks&&(f=t.hooks.postprocess(f))}catch(_){g=_}return t.highlight=o,g?a(g):r(null,f)};if(!o||o.length<3||(delete t.highlight,!u.length))return l();var h=0;b.walkTokens(u,function(d){d.type==="code"&&(h++,setTimeout(function(){o(d.text,d.lang,function(g,f){if(g)return l(g);f!=null&&f!==d.text&&(d.text=f,d.escaped=!0),h--,h===0&&l()})},0))}),h===0&&l();return}if(t.async)return Promise.resolve(t.hooks?t.hooks.preprocess(i):i).then(function(d){return n(d,t)}).then(function(d){return t.walkTokens?Promise.all(b.walkTokens(d,t.walkTokens)).then(function(){return d}):d}).then(function(d){return e(d,t)}).then(function(d){return t.hooks?t.hooks.postprocess(d):d}).catch(a);try{t.hooks&&(i=t.hooks.preprocess(i));var c=n(i,t);t.walkTokens&&b.walkTokens(c,t.walkTokens);var p=e(c,t);return t.hooks&&(p=t.hooks.postprocess(p)),p}catch(d){return a(d)}}}function b(n,e,i){return qr(_e.lex,Ce.parse)(n,e,i)}b.options=b.setOptions=function(n){return b.defaults=q({},b.defaults,n),Zo(b.defaults),b};b.getDefaults=Ct;b.defaults=x.defaults;b.use=function(){for(var n=b.defaults.extensions||{renderers:{},childTokens:{}},e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];i.forEach(function(r){var s=q({},r);if(s.async=b.defaults.async||s.async||!1,r.extensions&&(r.extensions.forEach(function(o){if(!o.name)throw new Error("extension name required");if(o.renderer){var u=n.renderers[o.name];u?n.renderers[o.name]=function(){for(var l=arguments.length,h=new Array(l),c=0;c<l;c++)h[c]=arguments[c];var p=o.renderer.apply(this,h);return p===!1&&(p=u.apply(this,h)),p}:n.renderers[o.name]=o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[o.level]?n[o.level].unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),s.extensions=n),r.renderer&&(function(){var o=b.defaults.renderer||new En,u=function(c){var p=o[c];o[c]=function(){for(var d=arguments.length,g=new Array(d),f=0;f<d;f++)g[f]=arguments[f];var _=r.renderer[c].apply(o,g);return _===!1&&(_=p.apply(o,g)),_}};for(var l in r.renderer)u(l);s.renderer=o})(),r.tokenizer&&(function(){var o=b.defaults.tokenizer||new Sn,u=function(c){var p=o[c];o[c]=function(){for(var d=arguments.length,g=new Array(d),f=0;f<d;f++)g[f]=arguments[f];var _=r.tokenizer[c].apply(o,g);return _===!1&&(_=p.apply(o,g)),_}};for(var l in r.tokenizer)u(l);s.tokenizer=o})(),r.hooks&&(function(){var o=b.defaults.hooks||new Ne,u=function(c){var p=o[c];Ne.passThroughHooks.has(c)?o[c]=function(d){if(b.defaults.async)return Promise.resolve(r.hooks[c].call(o,d)).then(function(f){return p.call(o,f)});var g=r.hooks[c].call(o,d);return p.call(o,g)}:o[c]=function(){for(var d=arguments.length,g=new Array(d),f=0;f<d;f++)g[f]=arguments[f];var _=r.hooks[c].apply(o,g);return _===!1&&(_=p.apply(o,g)),_}};for(var l in r.hooks)u(l);s.hooks=o})(),r.walkTokens){var a=b.defaults.walkTokens;s.walkTokens=function(o){var u=[];return u.push(r.walkTokens.call(this,o)),a&&(u=u.concat(a.call(this,o))),u}}b.setOptions(s)})};b.walkTokens=function(n,e){for(var i=[],t=function(){var o=s.value;switch(i=i.concat(e.call(b,o)),o.type){case"table":{for(var u=wn(o.header),l;!(l=u()).done;){var h=l.value;i=i.concat(b.walkTokens(h.tokens,e))}for(var c=wn(o.rows),p;!(p=c()).done;)for(var d=p.value,g=wn(d),f;!(f=g()).done;){var _=f.value;i=i.concat(b.walkTokens(_.tokens,e))}break}case"list":{i=i.concat(b.walkTokens(o.items,e));break}default:b.defaults.extensions&&b.defaults.extensions.childTokens&&b.defaults.extensions.childTokens[o.type]?b.defaults.extensions.childTokens[o.type].forEach(function(C){i=i.concat(b.walkTokens(o[C],e))}):o.tokens&&(i=i.concat(b.walkTokens(o.tokens,e)))}},r=wn(n),s;!(s=r()).done;)t();return i};b.parseInline=qr(_e.lexInline,Ce.parseInline);b.Parser=Ce;b.parser=Ce.parse;b.Renderer=En;b.TextRenderer=At;b.Lexer=_e;b.lexer=_e.lex;b.Tokenizer=Sn;b.Slugger=St;b.Hooks=Ne;b.parse=b;var pl=b.options,dl=b.setOptions,fl=b.use,ml=b.walkTokens,gl=b.parseInline,vl=b,Dl=Ce.parse,bl=_e.lex;x.Hooks=Ne;x.Lexer=_e;x.Parser=Ce;x.Renderer=En;x.Slugger=St;x.TextRenderer=At;x.Tokenizer=Sn;x.getDefaults=Ct;x.lexer=bl;x.marked=b;x.options=pl;x.parse=vl;x.parseInline=gl;x.parser=Dl;x.setOptions=dl;x.use=fl;x.walkTokens=ml});var Vr=w((Nu,Jr)=>{m();var Ur=(Ut(),ns(Gt)),Et=Pr(),{marked:jr}=Gr(),yl={heading(n){return n},html(n){return n},hr(){return""},list(n){return n},listitem(n){return n},br(){return""},paragraph(n){return n}};jr.use({renderer:yl});Et.registerHelper("date",n=>{if(!n)return"Present";let e=new Date(n),i=e.toISOString(),t=e.toLocaleDateString("en-US",{month:"short",year:"numeric"});return`<time datetime="${i}">${t}</time>`});Et.registerHelper("markdown",n=>jr.parse(n));function kl(n){let e=Ur.readFileSync("//style.css","utf-8"),i=Ur.readFileSync("//resume.handlebars","utf-8"),{profiles:t}=n.basics;if(Array.isArray(t)){let r=t.find(s=>s.network.toLowerCase().includes("twitter"));if(r){let{username:s,url:a}=r;if(!s&&a){let o=a.match(/https?:\/\/.+?\/([\w]{1,15})/);o.length==2&&(s=o[1])}s&&!s.startsWith("@")&&(s=`@${s}`),n.custom={twitterHandle:s}}}return Et.compile(i)({css:e,resume:n})}Jr.exports={render:kl}});m();var he=es(Vr(),1),Wr=he.default??he,zu=Wr.render??he.render,qu=Wr.pdfRenderOptions??he.pdfRenderOptions;export{qu as pdfRenderOptions,zu as render};
