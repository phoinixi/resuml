var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var nt=Object.create;var Q=Object.defineProperty;var tt=Object.getOwnPropertyDescriptor;var rt=Object.getOwnPropertyNames;var it=Object.getPrototypeOf,st=Object.prototype.hasOwnProperty;var F=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var ue=(e,n)=>()=>(e&&(n=e(e=0)),n);var m=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),ze=(e,n)=>{for(var t in n)Q(e,t,{get:n[t],enumerable:!0})},We=(e,n,t,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of rt(n))!st.call(e,i)&&i!==t&&Q(e,i,{get:()=>n[i],enumerable:!(r=tt(n,i))||r.enumerable});return e};var at=(e,n,t)=>(t=e!=null?nt(it(e)):{},We(n||!e||!e.__esModule?Q(t,"default",{value:e,enumerable:!0}):t,e)),de=e=>We(Q({},"__esModule",{value:!0}),e);var p=ue(()=>{});var ve={};ze(ve,{createReadStream:()=>en,createWriteStream:()=>nn,default:()=>ot,existsSync:()=>Ke,lstatSync:()=>Xe,mkdirSync:()=>Ye,readFileSync:()=>Ue,readdirSync:()=>Ge,rmdirSync:()=>$e,statSync:()=>ge,unlinkSync:()=>Ze,writeFileSync:()=>Qe});function me(e){return String(e).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Je(e){var n=me(e);if(Y[n]!==void 0)return Y[n];for(var t=Object.keys(Y),r=0;r<t.length;r++)if(n.endsWith("/"+t[r])||n===t[r])return Y[t[r]]}function fe(e){var n=me(e);if((n===""||n===".")&&T["."]!==void 0)return T["."];if(T[n]!==void 0)return T[n];for(var t=Object.keys(T),r=0;r<t.length;r++)if(n.endsWith("/"+t[r])||n===t[r])return T[t[r]]}var Y,T,Ue,Ge,Ke,Qe,Ye,ge,Xe,Ze,$e,en,nn,ot,be=ue(()=>{"use strict";p();Y={"package.json":`{
  "name": "jsonresume-theme-sidepanel",
  "version": "0.3.0",
  "description": "Side panel theme for JSON Resume",
  "author": "Michael-Longley",
  "repository": {
    "type": "git",
    "url": "https://github.com/Michael-Longley/jsonresume-theme-sidepanel.git"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  }
}
`,"partials/basics.hbs":`{{#resume.basics}}\r
<div class="info">\r
    <h1>{{name}}</h1>\r
    <h2>{{label}}</h2>\r
</div>\r
<section id="basics">\r
    <div class="contact">\r
        <div class="header">\r
            <h2>Personal Info</h2>\r
        </div>\r
        <div class="info">\r
            {{#if website}}\r
            <div class="website">\r
                <strong>Website</strong>\r
                </br>\r
                {{website}}\r
                </br>\r
                </br>\r
            </div>\r
            {{/if}} {{#if email}}\r
            <div class="email">\r
                <strong>Email</strong>\r
                </br>\r
                {{email}}\r
                </br>\r
                </br>\r
            </div>\r
            {{/if}} {{#if phone}}\r
            <div class="phone">\r
                <strong>Phone</strong>\r
                </br>\r
                {{phone}}\r
                </br>\r
                </br>\r
            </div>\r
            {{/if}} {{#if profiles.length}}\r
            <section id="profiles">\r
                {{#each profiles}}\r
                <div class="item">\r
                    {{#if network}}\r
                    <strong class="network">\r
                        {{network}}\r
                    </strong>\r
                    {{/if}} {{#if username}}\r
                    {{#if url}}\r
                    <a href={{url}}>\r
                    {{/if}}\r
                    <div class="username">\r
                        {{username}}\r
                        </br>\r
                        </br>\r
                    </div>\r
                    {{#if url}}\r
                    </a>\r
                    {{/if}}\r
                    {{/if}}\r
                </div>\r
                {{/each}}\r
            </section>\r
            {{/if}}\r
        </div>\r
    </div>\r
</section>\r
{{/resume.basics}}`,"partials/education.hbs":`{{#if resume.education.length}}\r
<section id="education">\r
    <hr>\r
    <h2>Education</h2>\r
    <hr> {{#each resume.education}}\r
    <div class="item">\r
        <div class="date">\r
            {{#if startDate}}\r
            <span class="startDate">\r
                {{startDate}} -\r
            </span>\r
            {{/if}}\r
            <br> {{#if endDate}}\r
            <span class="endDate">\r
                {{endDate}}\r
            </span>\r
            {{else}}\r
            <span class="endDate">\r
                Present\r
            </span>\r
            {{/if}}\r
        </div>\r
        <div class="college">\r
            {{#if institution}}\r
            <div class="institution">\r
                {{institution}}\r
            </div>\r
            {{/if}} {{#if area}}\r
            <div class="area">\r
                {{area}}\r
            </div>\r
            {{/if}} {{#if studyType}}\r
            <div class="studyType">\r
                {{studyType}}\r
            </div>\r
            {{/if}} {{#if gpa}}\r
            <div class="gpa">\r
                GPA: {{gpa}}\r
            </div>\r
            {{/if}}\r
        </div>\r
    </div>\r
    {{/each}}\r
</section>\r
{{/if}}`,"partials/interests.hbs":`{{#if resume.interests.length}}\r
<section id="interests">\r
    <div class="header">\r
        <h2>Achievements / Interests</h2>\r
    </div>\r
    <div class="info">\r
        {{#each resume.interests}}\r
        <div class="item">\r
            {{#if name}}\r
            <div class="name">\r
                {{name}}\r
            </div>\r
            {{/if}} {{#if keywords.length}}\r
            <ul class="keywords">\r
                {{#each keywords}}\r
                <li>{{.}}</li>\r
                {{/each}}\r
            </ul>\r
            {{/if}}\r
        </div>\r
        {{/each}}\r
    </div>\r
</section>\r
{{/if}}`,"partials/projects.hbs":`{{#if resume.projects.length}}\r
<section id="Projects">\r
    <hr/>\r
    <h2>Projects</h2>\r
    <hr/>\r
    {{#each resume.projects}}\r
    <div class="project">\r
        {{#if name}}\r
        <h3 class="name">\r
            {{name}}\r
            {{#if tools}}\r
                <tools>\r
                    {{#each tools}}\r
                        <t>{{.}}</t>\r
                    {{/each}}\r
                </tools>\r
            {{/if}}\r
        </h3>\r
        {{/if}}\r
        {{#if summary}}\r
        <div class="summary">\r
            <p>{{summary}}</p>\r
        </div>\r
        {{/if}}\r
    </div>\r
    {{/each}}\r
</section>\r
{{/if}}`,"partials/skills.hbs":`{{#if resume.skills.length}}\r
<section id="skills">\r
    <div class="header">\r
        <h2>Skills</h2>\r
    </div>\r
    <div class="info">\r
        {{#each resume.skills}}\r
        <div class="item">\r
            {{#if name}}\r
            <div class="name">\r
                {{name}}\r
            </div>\r
            {{/if}} {{#if level}}\r
            <div class="level">\r
                <em>{{level}}</em>\r
            </div>\r
            {{/if}} {{#if keywords.length}}\r
            <ul class="keywords">\r
                {{#each keywords}}\r
                <li>{{.}}</li>\r
                {{/each}}\r
            </ul>\r
            {{/if}}\r
        </div>\r
        {{/each}}\r
    </div>\r
</section>\r
{{/if}}`,"partials/work.hbs":`{{#if resume.work.length}}\r
<section id="work">\r
    <hr/>\r
    <h2>Experience</h2>\r
    <hr/>\r
    {{#each resume.work}}\r
    <div class="item">\r
        <div class="date">\r
            {{#if startDate}}\r
            <span class="startDate">\r
                {{startDate}} -\r
            </span>\r
            {{/if}}\r
            <br/> {{#if endDate}}\r
            <span class="endDate">\r
                {{endDate}}\r
            </span>\r
            {{else}}\r
            <span class="endDate">\r
                Present\r
            </span>\r
            {{/if}}\r
            {{#if startDate2}}\r
            </br>\r
            <span class="startDate">\r
                {{startDate2}} -\r
            </span>\r
            {{/if}}\r
            <br/> {{#if endDate2}}\r
            <span class="endDate">\r
                {{endDate2}}\r
            </span>\r
            {{else}}\r
            <span class="endDate">\r
                Present\r
            </span>\r
            {{/if}}\r
        </div>\r
        <div class="data">\r
            {{#if position}}\r
            <div class="position">\r
                <h2>\r
                    {{position}}\r
                </h2>\r
            </div>\r
            {{/if}} {{#if company}}\r
            <h3 class="cmpny">\r
                {{company}}\r
                {{#if tools}}\r
                    <tools>\r
                        {{#each tools}}\r
                            <t>{{.}}</t>\r
                        {{/each}}\r
                    </tools>\r
                {{/if}}\r
            </h3>\r
            {{/if}}\r
            \r
            {{#if summary}}\r
            <div class="summary">\r
                <p>{{summary}}</p>\r
            </div>\r
            {{/if}} {{#if highlights.length}}\r
            <ul class="highlights">\r
                {{#each highlights}}\r
                <p><highlightHead>{{title}}</highlightHead>\r
                {{desc}}</p>\r
                {{/each}}\r
            </ul>\r
            {{/if}}\r
        </div>\r
    </div>\r
    {{/each}}\r
</section>\r
{{/if}}`,"public/index.html":`<!doctype html>\r
<html>\r
    <head>\r
        <meta charset="utf-8">\r
        <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">\r
        <title>Michael Longley</title>\r
        <style>body{\r
    font-family:Arial, Helvetica, sans-serif;\r
}\r
\r
#sidepanel {\r
    height: 100%;\r
    width: 25%;\r
    position: fixed;\r
    background-color: #373737;\r
    color: white;\r
}\r
\r
#sidepanel .info{\r
    padding-left: 5px; /*Move the info right 5 px*/\r
}\r
\r
#sidepanel .header{\r
    background-color: #282828;\r
    padding-left: 5px; /*Move the headers right 5 px*/\r
}\r
\r
#content {\r
    width: 74%;\r
    padding: 10px 0px; /*Move the right panel down by 10 px*/\r
    float: right;\r
}\r
.item{\r
    clear: both;\r
    font-size: 15px\r
}\r
.date{\r
    float: left;\r
    height: 100%;\r
    width: 20%;\r
}\r
#work .item .date{\r
    padding-top: 5px;\r
}\r
.college{\r
    float: right;\r
    width: 80%;\r
}\r
\r
#work{\r
    display: inline-block;\r
}\r
\r
.institution{\r
    font-weight: bold;\r
}\r
\r
.data{\r
    float: right;\r
    width: 80%;\r
}\r
\r
\r
\r
.cmpny{\r
    margin: 0;\r
}\r
\r
a{\r
    color: white;\r
}\r
h2{\r
    margin: 10px 0px 10px 0px;\r
}\r
\r
.summary p{\r
    margin: 10px 0px 10px 0px;\r
}\r
\r
#content h2{\r
    font-size: 20px\r
}\r
\r
#content .position h2{\r
    margin: 0;\r
}\r
#content ul{\r
    padding-left: 0%;\r
}\r
\r
t{\r
    color: gray;\r
    font-size: smaller\r
}\r
\r
highlightHead{\r
    font-weight: bold;\r
}\r
\r
p{\r
    margin-top: 0%;\r
    margin-bottom: 0%;\r
}\r
\r
#Projects .project .name{\r
    margin-bottom: 0%;\r
}\r
\r
#Projects .project .summary p{\r
    margin-top: 0%;\r
    margin-bottom: 0%;\r
}</style>\r
    </head>\r
    <body>\r
        <div id="container">\r
            <div id="sidepanel">\r
                <div class="info">\r
                    <h1>Michael Longley</h1>\r
                    <h2>Software Engineer</h2>\r
                </div>\r
                <section id="basics">\r
                    <div class="contact">\r
                        <div class="header">\r
                            <h2>Personal Info</h2>\r
                        </div>\r
                        <div class="info">\r
                 \r
                            <div class="email">\r
                                <strong>Email</strong>\r
                                </br>\r
                                mxl2761@rit.edu\r
                                </br>\r
                                </br>\r
                            </div>\r
                             \r
                            <div class="phone">\r
                                <strong>Phone</strong>\r
                                </br>\r
                                (484) 896 - 8446\r
                                </br>\r
                                </br>\r
                            </div>\r
                             \r
                            <section id="profiles">\r
                                <div class="item">\r
                                    <strong class="network">\r
                                        LinkedIn\r
                                    </strong>\r
                                     \r
                                    <a href=https://www.linkedin.com/in/michael-longley/>\r
                                    <div class="username">\r
                                        Michael-Longley\r
                                        </br>\r
                                        </br>\r
                                    </div>\r
                                    </a>\r
                                </div>\r
                                <div class="item">\r
                                    <strong class="network">\r
                                        Github\r
                                    </strong>\r
                                     \r
                                    <a href=https://github.com/Michael-Longley>\r
                                    <div class="username">\r
                                        Michael-Longley\r
                                        </br>\r
                                        </br>\r
                                    </div>\r
                                    </a>\r
                                </div>\r
                            </section>\r
                        </div>\r
                    </div>\r
                </section>\r
                <br/>\r
                <section id="skills">\r
                    <div class="header">\r
                        <h2>Skills</h2>\r
                    </div>\r
                    <div class="info">\r
                        <div class="item">\r
                            <div class="name">\r
                                Web Development\r
                            </div>\r
                              \r
                            <ul class="keywords">\r
                                <li>HTML</li>\r
                                <li>CSS</li>\r
                                <li>Javascript</li>\r
                            </ul>\r
                        </div>\r
                        <div class="item">\r
                            <div class="name">\r
                                Backend Developer\r
                            </div>\r
                              \r
                            <ul class="keywords">\r
                                <li>Python</li>\r
                                <li>Java</li>\r
                                <li>React</li>\r
                                <li>Go</li>\r
                            </ul>\r
                        </div>\r
                    </div>\r
                </section>\r
                <br/>\r
                <section id="interests">\r
                    <div class="header">\r
                        <h2>Achievements / Interests</h2>\r
                    </div>\r
                    <div class="info">\r
                        <div class="item">\r
                            <div class="name">\r
                                Dean&#x27;s List\r
                            </div>\r
                                     </div>\r
                        <div class="item">\r
                            <div class="name">\r
                                Black Belt in MMA\r
                            </div>\r
                                     </div>\r
                        <div class="item">\r
                            <div class="name">\r
                                Mentor\r
                            </div>\r
                                     </div>\r
                        <div class="item">\r
                            <div class="name">\r
                                3D Printing\r
                            </div>\r
                                     </div>\r
                        <div class="item">\r
                            <div class="name">\r
                                Off-Roading\r
                            </div>\r
                                     </div>\r
                    </div>\r
                </section>\r
            </div>\r
            <div id="content">\r
                Passionate Software Engineer interested in solving meaningful problems, that present new challenges to me intellectually and to the company. Currently available from January 2019 to August 2019.\r
                <section id="education">\r
                    <hr>\r
                    <h2>Education</h2>\r
                    <hr> \r
                    <div class="item">\r
                        <div class="date">\r
                            <span class="startDate">\r
                                Aug 2015 -\r
                            </span>\r
                            <br> \r
                            <span class="endDate">\r
                                May 2020\r
                            </span>\r
                        </div>\r
                        <div class="college">\r
                            <div class="institution">\r
                                Rochester Institute of Technology\r
                            </div>\r
                             \r
                            <div class="area">\r
                                Software Engineering\r
                            </div>\r
                             \r
                            <div class="studyType">\r
                                Bachelor of Science\r
                            </div>\r
                                     </div>\r
                    </div>\r
                </section>\r
                <section id="work">\r
                    <hr/>\r
                    <h2>Experience</h2>\r
                    <hr/>\r
                    <div class="item">\r
                        <div class="date">\r
                            <span class="startDate">\r
                                Feb 2018 -\r
                            </span>\r
                            <br/> \r
                            <span class="endDate">\r
                                Present\r
                            </span>\r
                            </br>\r
                            <span class="startDate">\r
                                Jun 2017 -\r
                            </span>\r
                            <br/> \r
                            <span class="endDate">\r
                                Aug 2017\r
                            </span>\r
                        </div>\r
                        <div class="data">\r
                            <div class="position">\r
                                <h2>\r
                                    Software Engineering Intern\r
                                </h2>\r
                            </div>\r
                             \r
                            <h3 class="cmpny">\r
                                Dun &amp; Bradstreet\r
                                    <tools>\r
                                            <t>Python \u25CF</t>\r
                                            <t>Java \u25CF</t>\r
                                            <t>Azure \u25CF</t>\r
                                            <t>SQL</t>\r
                                    </tools>\r
                            </h3>\r
                            \r
                 \r
                            <ul class="highlights">\r
                                <p><highlightHead>Problem</highlightHead>\r
                                - Customer inquires take too long to process and evaluate.
                 - New data source was discovered and needed to be automated.</p>\r
                                <p><highlightHead>Solution</highlightHead>\r
                                - Collaborate with software and RPA developers to automate the hunting &amp; gathering processes. Designed, developed and tested Java component to integrate into existing system to increase available incites.
                 -Researched available packages to automate the extraction from 31 sources. Designed and developed processes to mine the data for ingestion into various products.</p>\r
                                <p><highlightHead>Results</highlightHead>\r
                                - Measurement to happen, late in 2018.
                 - With minor modifications, 11,000 records have been aggregated into database for possible new product.</p>\r
                            </ul>\r
                        </div>\r
                    </div>\r
                    <div class="item">\r
                        <div class="date">\r
                            <span class="startDate">\r
                                Sep 2017 -\r
                            </span>\r
                            <br/> \r
                            <span class="endDate">\r
                                Dec 2017\r
                            </span>\r
                            <br/>             <span class="endDate">\r
                                Present\r
                            </span>\r
                        </div>\r
                        <div class="data">\r
                            <div class="position">\r
                                <h2>\r
                                    R &amp; D Intern\r
                                </h2>\r
                            </div>\r
                             \r
                            <h3 class="cmpny">\r
                                Innovative Systems, Inc.\r
                                    <tools>\r
                                            <t>VB.Net \u25CF</t>\r
                                            <t>Java \u25CF</t>\r
                                            <t>SQL</t>\r
                                    </tools>\r
                            </h3>\r
                            \r
                 \r
                            <ul class="highlights">\r
                                <p><highlightHead>Problem</highlightHead>\r
                                - Manual process of comparing databases is long and costly.</p>\r
                                <p><highlightHead>Solution</highlightHead>\r
                                - Using Visual Basic developed a process to determine the differences between two databases and generate instructions to update the database using another component.</p>\r
                                <p><highlightHead>Results</highlightHead>\r
                                - Reduce the time taken to install by half.</p>\r
                            </ul>\r
                        </div>\r
                    </div>\r
                    <div class="item">\r
                        <div class="date">\r
                            <span class="startDate">\r
                                Oct 2015 -\r
                            </span>\r
                            <br/> \r
                            <span class="endDate">\r
                                May 2018\r
                            </span>\r
                            <br/>             <span class="endDate">\r
                                Present\r
                            </span>\r
                        </div>\r
                        <div class="data">\r
                            <div class="position">\r
                                <h2>\r
                                    Undergraduate Research Assistant\r
                                </h2>\r
                            </div>\r
                             \r
                            <h3 class="cmpny">\r
                                Future Everyday Technology Lab\r
                                    <tools>\r
                                            <t>Python \u25CF</t>\r
                                            <t>GCode \u25CF</t>\r
                                            <t>Fusion 360 API</t>\r
                                    </tools>\r
                            </h3>\r
                            \r
                 \r
                            <ul class="highlights">\r
                                <p><highlightHead>Problem</highlightHead>\r
                                - Prototyping with 3D printing takes too long.</p>\r
                                <p><highlightHead>Solution</highlightHead>\r
                                - Research and analyze 3D printing on various fabrics using various method including changing temperature, speed and z offset.</p>\r
                                <p><highlightHead>Results</highlightHead>\r
                                - Acknowledged in FET Labs research paper, &quot;Stretching the Bounds of 3D Printing with Embedded Textiles&quot;.</p>\r
                            </ul>\r
                        </div>\r
                    </div>\r
                </section>\r
                <section id="Projects">\r
                    <hr/>\r
                    <h2>Projects</h2>\r
                    <hr/>\r
                    <div class="project">\r
                        <h3 class="name">\r
                            Virtual Punch Card\r
                                <tools>\r
                                        <t>Golang \u25CF</t>\r
                                        <t>React \u25CF</t>\r
                                        <t>MySQL</t>\r
                                </tools>\r
                        </h3>\r
                        <div class="summary">\r
                            <p>Created a web app utilizing a React front end with material components, a Golang backend and a MySQL DB</p>\r
                        </div>\r
                    </div>\r
                    <div class="project">\r
                        <h3 class="name">\r
                            Side-Panel Resume Template\r
                                <tools>\r
                                        <t>Handlebars</t>\r
                                </tools>\r
                        </h3>\r
                        <div class="summary">\r
                            <p>Created a resume template published to NPM which can be used to generate a resume when content is stored in JSON</p>\r
                        </div>\r
                    </div>\r
                    <div class="project">\r
                        <h3 class="name">\r
                            Arm Waving Robot\r
                                <tools>\r
                                        <t>Raspberry Pi \u25CF</t>\r
                                        <t>Python \u25CF</t>\r
                                        <t>C</t>\r
                                </tools>\r
                        </h3>\r
                        <div class="summary">\r
                            <p>Built an arm that waves at tours as they walk past the Society of Software Engineers</p>\r
                        </div>\r
                    </div>\r
                    <div class="project">\r
                        <h3 class="name">\r
                            Data Mining Web Scraper\r
                                <tools>\r
                                        <t>Python \u25CF</t>\r
                                        <t>Bing API</t>\r
                                </tools>\r
                        </h3>\r
                        <div class="summary">\r
                            <p>Utilized the Bing search API to help solve technical problems for people who do not have technical knowledge</p>\r
                        </div>\r
                    </div>\r
                    <div class="project">\r
                        <h3 class="name">\r
                            Data Mining Web Scraper\r
                                <tools>\r
                                        <t>Python \u25CF</t>\r
                                        <t>Bing API</t>\r
                                </tools>\r
                        </h3>\r
                        <div class="summary">\r
                            <p>Utilized the Bing search API to help solve technical problems for people who do not have technical knowledge</p>\r
                        </div>\r
                    </div>\r
                    <div class="project">\r
                        <h3 class="name">\r
                            Motorized Wheel\r
                                <tools>\r
                                        <t>Arduino \u25CF</t>\r
                                        <t>Electrical Engineering \u25CF</t>\r
                                        <t>Java</t>\r
                                </tools>\r
                        </h3>\r
                        <div class="summary">\r
                            <p>Using magnets create a wheel which can be rotated without having any wire attached to the rotating wheel</p>\r
                        </div>\r
                    </div>\r
                </section>\r
            </div>\r
        </div>\r
    </body>\r
</html>`,"resume.hbs":`<!doctype html>\r
<html>\r
    <head>\r
        <meta charset="utf-8">\r
        <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">\r
        <title>{{#resume.basics}}{{name}}{{/resume.basics}}</title>\r
        <style>{{{css}}}</style>\r
    </head>\r
    <body>\r
        <div id="container">\r
            <div id="sidepanel">\r
                {{> basics}}\r
                <br/>\r
                {{> skills}}\r
                <br/>\r
                {{> interests}}\r
            </div>\r
            <div id="content">\r
                {{#if resume.basics.summary}}\r
                {{resume.basics.summary}}\r
                {{/if}}\r
                {{> education}}\r
                {{> work}}\r
                {{> projects}}\r
            </div>\r
        </div>\r
    </body>\r
</html>`,"resume.json":`{
  "basics": {
    "name": "Michael Longley",
    "label": "Software Engineer",
    "picture": "",
    "email": "mxl2761@rit.edu",
    "phone": "(484) 896 - 8446",
    "website": "",
    "summary": "Passionate Software Engineer interested in solving meaningful problems, that present new challenges to me intellectually and to the company. Currently available from January 2019 to August 2019.",
    "location": {
      "address": "",
      "postalCode": "",
      "city": "",
      "countryCode": "",
      "region": ""
    },
    "profiles": [
      {
        "network": "LinkedIn",
        "username": "Michael-Longley",
        "url": "https://www.linkedin.com/in/michael-longley/"
      },
      {
        "network": "Github",
        "username": "Michael-Longley",
        "url": "https://github.com/Michael-Longley"
      }
    ]
  },
  "work": [
    {
      "company": "Dun & Bradstreet",
      "position": "Software Engineering Intern",
      "website": "https://www.dnb.com/",
      "startDate": "Feb 2018",
      "endDate": "Present",
      "summary": "",
      "highlights": [
        "Problem - Customer inquires take too long to process and evaluate.",
        "Solution - Collaborate with software and RPA developers to automate the hunting & gathering processes. Designed, developed and tested Java component to integrate into existing system to increase available incites.",
        "Results - Measurement to happen, late in 2018."
      ]
    },
    {
      "company": "Innovative Systems, Inc.",
      "position": "R & D Intern",
      "website": "http://www.innovativesystems.com/",
      "startDate": "Sep 2017",
      "endDate": "Dec 2017",
      "summary": "",
      "highlights": [
        "Problem - Manual process of comparing databases is long and costly.",
        "Solution - Using Visual Basic developed a process to determine the differences between two databases and generate instructions to update the database using another component.",
        "Results - Reduce the time taken to install by half."
      ]
    },
    {
      "company": "Dun & Bradstreet",
      "position": "Content Innovation Intern",
      "website": "https://www.dnb.com/",
      "startDate": "Jun 2017",
      "endDate": "Aug 2017",
      "summary": "",
      "highlights": [
        "Problem - New data source was discovered and needed to be automated.",
        "Solution - Researched available packages to automate the extraction from 31 sources. Designed and developed processes to mine the data for ingestion into various products.",
        "Result - With minor modifications, 11,000 records have been aggregated into database for possible new product."
      ]
    },
    {
      "company": "Future Everyday Technology Lab",
      "position": "Undergraduate Research Assistant",
      "website": "http://fetlab.io/",
      "startDate": "Oct 2015",
      "endDate": "May 2018",
      "summary": "",
      "highlights": [
        "Problem - Prototyping with 3D printing takes too long.",
        "Solution - Research and analyze 3D printing on various fabrics using various method including changing temperature, speed and z offset.",
        "Results - Acknowledged in FET Labs research paper, \\"Stretching the Bounds of 3D Printing with Embedded Textiles\\"."
      ]
    }
  ],
  "volunteer": [
    {
      "organization": "Society of Software Engineers",
      "position": "Mentor",
      "website": "",
      "startDate": "",
      "endDate": "",
      "summary": "",
      "highlights": [
        ""
      ]
    }
  ],
  "education": [
    {
      "institution": "Rochester Institute of Technology",
      "area": "Software Engineering",
      "studyType": "Bachelor of Science",
      "startDate": "Aug 2015",
      "endDate": "May 2020",
      "gpa": "",
      "courses": [
        "",
        ""
      ]
    }
  ],
  "awards": [
    {
      "title": "",
      "date": "",
      "awarder": "",
      "summary": ""
    }
  ],
  "publications": [
    {
      "name": "",
      "publisher": "",
      "releaseDate": "",
      "website": "",
      "summary": ""
    }
  ],
  "skills": [
    {
      "name": "Web Development",
      "level": "",
      "keywords": [
        "HTML",
        "CSS",
        "Javascript"
      ]
    },
    {
      "name": "Backend Developer",
      "level": "",
      "keywords": [
        "Python",
        "Java",
        "React",
        "Go"
      ]
    }
  ],
  "languages": [
    {
      "language": "",
      "fluency": ""
    }
  ],
  "interests": [
    {
      "name": "Dean's List",
      "keywords": []
    },
    {
      "name": "Black Belt in MMA",
      "keywords": []
    },
    {
      "name": "Mentor",
      "keywords": []
    },
    {
      "name": "3D Printing",
      "keywords": []
    },
    {
      "name": "Off-Roading",
      "keywords": []
    }
  ],
  "references": [
    {
      "name": "",
      "reference": ""
    }
  ]
}`,"resume2.json":`{
  "basics": {
    "name": "Michael Longley",
    "label": "Software Engineer",
    "picture": "",
    "email": "mxl2761@rit.edu",
    "phone": "(484) 896 - 8446",
    "website": "",
    "summary": "Passionate Software Engineer interested in solving meaningful problems, that present new challenges to me intellectually and to the company. Currently available from January 2019 to August 2019.",
    "location": {
      "address": "",
      "postalCode": "",
      "city": "",
      "countryCode": "",
      "region": ""
    },
    "profiles": [
      {
        "network": "LinkedIn",
        "username": "Michael-Longley",
        "url": "https://www.linkedin.com/in/michael-longley/"
      },
      {
        "network": "Github",
        "username": "Michael-Longley",
        "url": "https://github.com/Michael-Longley"
      }
    ]
  },
  "work": [
    {
      "company": "Dun & Bradstreet",
      "position": "Software Engineering Intern",
      "website": "https://www.dnb.com/",
      "startDate": "Feb 2018",
      "endDate": "Present",
      "startDate2": "Jun 2017",
      "endDate2": "Aug 2017",
      "summary": "",
      "highlights": [
        {
          "title" : "Problem",
          "desc" : "- Customer inquires take too long to process and evaluate.\\n - New data source was discovered and needed to be automated."
        },
        {
          "title" : "Solution",
          "desc" : "- Collaborate with software and RPA developers to automate the hunting & gathering processes. Designed, developed and tested Java component to integrate into existing system to increase available incites.\\n -Researched available packages to automate the extraction from 31 sources. Designed and developed processes to mine the data for ingestion into various products."
        },
        {
          "title" : "Results",
          "desc" : "- Measurement to happen, late in 2018.\\n - With minor modifications, 11,000 records have been aggregated into database for possible new product."
        }
      ],
      "tools": [
        "Python \u25CF",
        "Java \u25CF",
        "Azure \u25CF",
        "SQL"
      ]
    },
    {
      "company": "Innovative Systems, Inc.",
      "position": "R & D Intern",
      "website": "http://www.innovativesystems.com/",
      "startDate": "Sep 2017",
      "endDate": "Dec 2017",
      "summary": "",
      "highlights": [
        {
          "title" : "Problem",
          "desc" : "- Manual process of comparing databases is long and costly."
        },
        {
          "title" : "Solution",
          "desc" : "- Using Visual Basic developed a process to determine the differences between two databases and generate instructions to update the database using another component."
        },
        {
          "title" : "Results",
          "desc" : "- Reduce the time taken to install by half."
        }
      ],
      "tools": [
        "VB.Net \u25CF",
        "Java \u25CF",
        "SQL"
      ]
    },
    {
      "company": "Future Everyday Technology Lab",
      "position": "Undergraduate Research Assistant",
      "website": "http://fetlab.io/",
      "startDate": "Oct 2015",
      "endDate": "May 2018",
      "summary": "",
      "highlights": [
        {
          "title" : "Problem",
          "desc" : "- Prototyping with 3D printing takes too long."
        },
        {
          "title" : "Solution",
          "desc" : "- Research and analyze 3D printing on various fabrics using various method including changing temperature, speed and z offset."
        },
        {
          "title" : "Results",
          "desc" : "- Acknowledged in FET Labs research paper, \\"Stretching the Bounds of 3D Printing with Embedded Textiles\\"."
        }
      ],
      "tools": [
        "Python \u25CF",
        "GCode \u25CF",
        "Fusion 360 API"
      ]
    }
  ],
  "volunteer": [
    {
      "organization": "Society of Software Engineers",
      "position": "Mentor",
      "website": "",
      "startDate": "",
      "endDate": "",
      "summary": "",
      "highlights": [
        ""
      ]
    }
  ],
  "education": [
    {
      "institution": "Rochester Institute of Technology",
      "area": "Software Engineering",
      "studyType": "Bachelor of Science",
      "startDate": "Aug 2015",
      "endDate": "May 2020",
      "gpa": "",
      "courses": [
        "",
        ""
      ]
    }
  ],
  "awards": [
    {
      "title": "",
      "date": "",
      "awarder": "",
      "summary": ""
    }
  ],
  "publications": [
    {
      "name": "",
      "publisher": "",
      "releaseDate": "",
      "website": "",
      "summary": ""
    }
  ],
  "skills": [
    {
      "name": "Web Development",
      "level": "",
      "keywords": [
        "HTML",
        "CSS",
        "Javascript"
      ]
    },
    {
      "name": "Backend Developer",
      "level": "",
      "keywords": [
        "Python",
        "Java",
        "React",
        "Go"
      ]
    }
  ],
  "languages": [
    {
      "language": "",
      "fluency": ""
    }
  ],
  "interests": [
    {
      "name": "Dean's List",
      "keywords": []
    },
    {
      "name": "Black Belt in MMA",
      "keywords": []
    },
    {
      "name": "Mentor",
      "keywords": []
    },
    {
      "name": "3D Printing",
      "keywords": []
    },
    {
      "name": "Off-Roading",
      "keywords": []
    }
  ],
  "references": [
    {
      "name": "",
      "reference": ""
    }
  ],
  "projects" :[
    {
      "name" : "Virtual Punch Card",
      "tools" : [
        "Golang \u25CF",
        "React \u25CF",
        "MySQL"
      ],
      "summary" : "Created a web app utilizing a React front end with material components, a Golang backend and a MySQL DB"
    },
    {
      "name" : "Side-Panel Resume Template",
      "tools" : [
        "Handlebars"
      ],
      "summary" : "Created a resume template published to NPM which can be used to generate a resume when content is stored in JSON"
    },
    {
      "name" : "Arm Waving Robot",
      "tools" : [
        "Raspberry Pi \u25CF",
        "Python \u25CF",
        "C"
      ],
      "summary" : "Built an arm that waves at tours as they walk past the Society of Software Engineers"
    },
    {
      "name" : "Data Mining Web Scraper",
      "tools" : [
        "Python \u25CF",
        "Bing API"
      ],
      "summary" : "Utilized the Bing search API to help solve technical problems for people who do not have technical knowledge"
    },
    {
      "name" : "Data Mining Web Scraper",
      "tools" : [
        "Python \u25CF",
        "Bing API"
      ],
      "summary" : "Utilized the Bing search API to help solve technical problems for people who do not have technical knowledge"
    },
    {
      "name" : "Motorized Wheel",
      "tools" : [
        "Arduino \u25CF",
        "Electrical Engineering \u25CF",
        "Java"
      ],
      "summary" : "Using magnets create a wheel which can be rotated without having any wire attached to the rotating wheel"
    }
  ]
}`,"style.css":`body{\r
    font-family:Arial, Helvetica, sans-serif;\r
}\r
\r
#sidepanel {\r
    height: 100%;\r
    width: 25%;\r
    position: fixed;\r
    background-color: #373737;\r
    color: white;\r
}\r
\r
#sidepanel .info{\r
    padding-left: 5px; /*Move the info right 5 px*/\r
}\r
\r
#sidepanel .header{\r
    background-color: #282828;\r
    padding-left: 5px; /*Move the headers right 5 px*/\r
}\r
\r
#content {\r
    width: 74%;\r
    padding: 10px 0px; /*Move the right panel down by 10 px*/\r
    float: right;\r
}\r
.item{\r
    clear: both;\r
    font-size: 15px\r
}\r
.date{\r
    float: left;\r
    height: 100%;\r
    width: 20%;\r
}\r
#work .item .date{\r
    padding-top: 5px;\r
}\r
.college{\r
    float: right;\r
    width: 80%;\r
}\r
\r
#work{\r
    display: inline-block;\r
}\r
\r
.institution{\r
    font-weight: bold;\r
}\r
\r
.data{\r
    float: right;\r
    width: 80%;\r
}\r
\r
\r
\r
.cmpny{\r
    margin: 0;\r
}\r
\r
a{\r
    color: white;\r
}\r
h2{\r
    margin: 10px 0px 10px 0px;\r
}\r
\r
.summary p{\r
    margin: 10px 0px 10px 0px;\r
}\r
\r
#content h2{\r
    font-size: 20px\r
}\r
\r
#content .position h2{\r
    margin: 0;\r
}\r
#content ul{\r
    padding-left: 0%;\r
}\r
\r
t{\r
    color: gray;\r
    font-size: smaller\r
}\r
\r
highlightHead{\r
    font-weight: bold;\r
}\r
\r
p{\r
    margin-top: 0%;\r
    margin-bottom: 0%;\r
}\r
\r
#Projects .project .name{\r
    margin-bottom: 0%;\r
}\r
\r
#Projects .project .summary p{\r
    margin-top: 0%;\r
    margin-bottom: 0%;\r
}`},T={partials:["basics.hbs","education.hbs","interests.hbs","projects.hbs","skills.hbs","work.hbs"],public:["index.html"],".":["README.md","index.js","package.json","partials","public","resume.hbs","resume.json","resume.pdf","resume2.json","style.css"]};Ue=function(e,n){var t=Je(e);return t!==void 0?t:""},Ge=function(e,n){var t=fe(e);return t===void 0&&(t=[]),n&&n.withFileTypes?t.map(function(r){var i=me(e)+"/"+r,s=fe(i)!==void 0;return{name:r,isFile:function(){return!s},isDirectory:function(){return s}}}):t},Ke=function(e){return Je(e)!==void 0||fe(e)!==void 0},Qe=function(){},Ye=function(){},ge=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Xe=ge,Ze=function(){},$e=function(){},en=function(){return{pipe:function(e){return e},on:function(){return this}}},nn=function(){return{write:function(){},end:function(){},on:function(){return this}}},ot={readFileSync:Ue,readdirSync:Ge,existsSync:Ke,writeFileSync:Qe,mkdirSync:Ye,statSync:ge,lstatSync:Xe,unlinkSync:Ze,rmdirSync:$e,createReadStream:en,createWriteStream:nn}});var cn={};ze(cn,{basename:()=>X,default:()=>lt,dirname:()=>ye,extname:()=>Z,isAbsolute:()=>an,join:()=>tn,normalize:()=>on,parse:()=>hn,relative:()=>ln,resolve:()=>rn,sep:()=>sn});var tn,rn,ye,X,Z,sn,an,on,ln,hn,lt,pn=ue(()=>{"use strict";p();tn=function(){return[].slice.call(arguments).join("/")},rn=function(){return[].slice.call(arguments).join("/")},ye=function(e){return e.split("/").slice(0,-1).join("/")},X=function(e,n){var t=e.split("/").pop()||"";return n&&t.endsWith(n)?t.slice(0,-n.length):t},Z=function(e){var n=e.match(/\.[^.]+$/);return n?n[0]:""},sn="/",an=function(e){return e.charAt(0)==="/"},on=function(e){return e},ln=function(e,n){return n},hn=function(e){return{root:"",dir:ye(e),base:X(e),ext:Z(e),name:X(e,Z(e))}},lt={join:tn,resolve:rn,dirname:ye,basename:X,extname:Z,sep:sn,isAbsolute:an,normalize:on,relative:ln,parse:hn}});var ke=m(dn=>{"use strict";p();function un(e){this.string=e}un.prototype.toString=function(){return""+this.string};dn.default=un});var j=m(E=>{"use strict";p();var ht=ke().default,ct={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},pt=/[&<>"'`]/g,ut=/[&<>"'`]/;function dt(e){return ct[e]}function ft(e){for(var n=1;n<arguments.length;n++)for(var t in arguments[n])Object.prototype.hasOwnProperty.call(arguments[n],t)&&(e[t]=arguments[n][t]);return e}E.extend=ft;var Se=Object.prototype.toString;E.toString=Se;var $=function(e){return typeof e=="function"};$(/x/)&&($=function(e){return typeof e=="function"&&Se.call(e)==="[object Function]"});var $;E.isFunction=$;var fn=Array.isArray||function(e){return e&&typeof e=="object"?Se.call(e)==="[object Array]":!1};E.isArray=fn;function mt(e){return e instanceof ht?e.toString():e==null?"":e?(e=""+e,ut.test(e)?e.replace(pt,dt):e):e+""}E.escapeExpression=mt;function gt(e){return!e&&e!==0?!0:!!(fn(e)&&e.length===0)}E.isEmpty=gt;function vt(e,n){return(e?e+".":"")+n}E.appendContextPath=vt});var N=m(gn=>{"use strict";p();var we=["description","fileName","lineNumber","message","name","number","stack"];function mn(e,n){var t;n&&n.firstLine&&(t=n.firstLine,e+=" - "+t+":"+n.firstColumn);for(var r=Error.prototype.constructor.call(this,e),i=0;i<we.length;i++)this[we[i]]=r[we[i]];t&&(this.lineNumber=t,this.column=n.firstColumn)}mn.prototype=new Error;gn.default=mn});var R=m(D=>{"use strict";p();var y=j(),Pe=N().default,bt="2.0.0";D.VERSION=bt;var yt=6;D.COMPILER_REVISION=yt;var kt={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};D.REVISION_CHANGES=kt;var vn=y.isArray,xe=y.isFunction,bn=y.toString,yn="[object Object]";function Ee(e,n){this.helpers=e||{},this.partials=n||{},St(this)}D.HandlebarsEnvironment=Ee;Ee.prototype={constructor:Ee,logger:z,log:kn,registerHelper:function(e,n){if(bn.call(e)===yn){if(n)throw new Pe("Arg not supported with multiple helpers");y.extend(this.helpers,e)}else this.helpers[e]=n},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,n){bn.call(e)===yn?y.extend(this.partials,e):this.partials[e]=n},unregisterPartial:function(e){delete this.partials[e]}};function St(e){e.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new Pe("Missing helper: '"+arguments[arguments.length-1].name+"'")}),e.registerHelper("blockHelperMissing",function(n,t){var r=t.inverse,i=t.fn;if(n===!0)return i(this);if(n===!1||n==null)return r(this);if(vn(n))return n.length>0?(t.ids&&(t.ids=[t.name]),e.helpers.each(n,t)):r(this);if(t.data&&t.ids){var s=ee(t.data);s.contextPath=y.appendContextPath(t.data.contextPath,t.name),t={data:s}}return i(n,t)}),e.registerHelper("each",function(n,t){if(!t)throw new Pe("Must pass iterator to #each");var r=t.fn,i=t.inverse,s=0,a="",o,c;if(t.data&&t.ids&&(c=y.appendContextPath(t.data.contextPath,t.ids[0])+"."),xe(n)&&(n=n.call(this)),t.data&&(o=ee(t.data)),n&&typeof n=="object")if(vn(n))for(var l=n.length;s<l;s++)o&&(o.index=s,o.first=s===0,o.last=s===n.length-1,c&&(o.contextPath=c+s)),a=a+r(n[s],{data:o});else for(var u in n)n.hasOwnProperty(u)&&(o&&(o.key=u,o.index=s,o.first=s===0,c&&(o.contextPath=c+u)),a=a+r(n[u],{data:o}),s++);return s===0&&(a=i(this)),a}),e.registerHelper("if",function(n,t){return xe(n)&&(n=n.call(this)),!t.hash.includeZero&&!n||y.isEmpty(n)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(n,t){return e.helpers.if.call(this,n,{fn:t.inverse,inverse:t.fn,hash:t.hash})}),e.registerHelper("with",function(n,t){xe(n)&&(n=n.call(this));var r=t.fn;if(y.isEmpty(n))return t.inverse(this);if(t.data&&t.ids){var i=ee(t.data);i.contextPath=y.appendContextPath(t.data.contextPath,t.ids[0]),t={data:i}}return r(n,t)}),e.registerHelper("log",function(n,t){var r=t.data&&t.data.level!=null?parseInt(t.data.level,10):1;e.log(r,n)}),e.registerHelper("lookup",function(n,t){return n&&n[t]})}var z={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,n){if(z.level<=e){var t=z.methodMap[e];typeof console<"u"&&console[t]&&console[t].call(console,n)}}};D.logger=z;var kn=z.log;D.log=kn;var ee=function(e){var n=y.extend({},e);return n._parent=e,n};D.createFrame=ee});var wn=m(q=>{"use strict";p();var Ne=j(),C=N().default,wt=R().COMPILER_REVISION,Sn=R().REVISION_CHANGES,xt=R().createFrame;function Pt(e){var n=e&&e[0]||1,t=wt;if(n!==t)if(n<t){var r=Sn[t],i=Sn[n];throw new C("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}else throw new C("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}q.checkRevision=Pt;function Et(e,n){if(!n)throw new C("No environment passed to template");if(!e||!e.main)throw new C("Unknown template object: "+typeof e);n.VM.checkRevision(e.compiler);var t=function(s,a,o,c,l,u,h,x,O){l&&(c=Ne.extend({},c,l));var A=n.VM.invokePartial.call(this,s,o,c,u,h,x,O);if(A==null&&n.compile){var Ve={helpers:u,partials:h,data:x,depths:O};h[o]=n.compile(s,{data:x!==void 0,compat:e.compat},n),A=h[o](c,Ve)}if(A!=null){if(a){for(var S=A.split(`
`),P=0,le=S.length;P<le&&!(!S[P]&&P+1===le);P++)S[P]=a+S[P];A=S.join(`
`)}return A}else throw new C("The partial "+o+" could not be compiled when running in runtime-only mode")},r={lookup:function(s,a){for(var o=s.length,c=0;c<o;c++)if(s[c]&&s[c][a]!=null)return s[c][a]},lambda:function(s,a){return typeof s=="function"?s.call(a):s},escapeExpression:Ne.escapeExpression,invokePartial:t,fn:function(s){return e[s]},programs:[],program:function(s,a,o){var c=this.programs[s],l=this.fn(s);return a||o?c=ne(this,s,l,a,o):c||(c=this.programs[s]=ne(this,s,l)),c},data:function(s,a){for(;s&&a--;)s=s._parent;return s},merge:function(s,a){var o=s||a;return s&&a&&s!==a&&(o=Ne.extend({},a,s)),o},noop:n.VM.noop,compilerInfo:e.compiler},i=function(s,a){a=a||{};var o=a.data;i._setup(a),!a.partial&&e.useData&&(o=_t(s,o));var c;return e.useDepths&&(c=a.depths?[s].concat(a.depths):[s]),e.main.call(r,s,r.helpers,r.partials,o,c)};return i.isTop=!0,i._setup=function(s){s.partial?(r.helpers=s.helpers,r.partials=s.partials):(r.helpers=r.merge(s.helpers,n.helpers),e.usePartial&&(r.partials=r.merge(s.partials,n.partials)))},i._child=function(s,a,o){if(e.useDepths&&!o)throw new C("must pass parent depths");return ne(r,s,e[s],a,o)},i}q.template=Et;function ne(e,n,t,r,i){var s=function(a,o){return o=o||{},t.call(e,a,e.helpers,e.partials,o.data||r,i&&[a].concat(i))};return s.program=n,s.depth=i?i.length:0,s}q.program=ne;function Nt(e,n,t,r,i,s,a){var o={partial:!0,helpers:r,partials:i,data:s,depths:a};if(e===void 0)throw new C("The partial "+n+" could not be found");if(e instanceof Function)return e(t,o)}q.invokePartial=Nt;function Dt(){return""}q.noop=Dt;function _t(e,n){return(!n||!("root"in n))&&(n=n?xt(n):{},n.root=e),n}});var Dn=m(Nn=>{"use strict";p();var xn=R(),At=ke().default,It=N().default,De=j(),Pn=wn(),En=function(){var e=new xn.HandlebarsEnvironment;return De.extend(e,xn),e.SafeString=At,e.Exception=It,e.Utils=De,e.escapeExpression=De.escapeExpression,e.VM=Pn,e.template=function(n){return Pn.template(n,e)},e},te=En();te.create=En;te.default=te;Nn.default=te});var _e=m(An=>{"use strict";p();var _n=N().default;function v(e){e=e||{},this.firstLine=e.first_line,this.firstColumn=e.first_column,this.lastColumn=e.last_column,this.lastLine=e.last_line}var W={ProgramNode:function(e,n,t){v.call(this,t),this.type="program",this.statements=e,this.strip=n},MustacheNode:function(e,n,t,r,i){if(v.call(this,i),this.type="mustache",this.strip=r,t!=null&&t.charAt){var s=t.charAt(3)||t.charAt(2);this.escaped=s!=="{"&&s!=="&"}else this.escaped=!!t;e instanceof W.SexprNode?this.sexpr=e:this.sexpr=new W.SexprNode(e,n),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(e,n,t){v.call(this,t),this.type="sexpr",this.hash=n;var r=this.id=e[0],i=this.params=e.slice(1);this.isHelper=!!(i.length||n),this.eligibleHelper=this.isHelper||r.isSimple},PartialNode:function(e,n,t,r,i){v.call(this,i),this.type="partial",this.partialName=e,this.context=n,this.hash=t,this.strip=r,this.strip.inlineStandalone=!0},BlockNode:function(e,n,t,r,i){v.call(this,i),this.type="block",this.mustache=e,this.program=n,this.inverse=t,this.strip=r,t&&!n&&(this.isInverse=!0)},RawBlockNode:function(e,n,t,r){if(v.call(this,r),e.sexpr.id.original!==t)throw new _n(e.sexpr.id.original+" doesn't match "+t,this);n=new W.ContentNode(n,r),this.type="block",this.mustache=e,this.program=new W.ProgramNode([n],{},r)},ContentNode:function(e,n){v.call(this,n),this.type="content",this.original=this.string=e},HashNode:function(e,n){v.call(this,n),this.type="hash",this.pairs=e},IdNode:function(e,n){v.call(this,n),this.type="ID";for(var t="",r=[],i=0,s="",a=0,o=e.length;a<o;a++){var c=e[a].part;if(t+=(e[a].separator||"")+c,c===".."||c==="."||c==="this"){if(r.length>0)throw new _n("Invalid path: "+t,this);c===".."?(i++,s+="../"):this.isScoped=!0}else r.push(c)}this.original=t,this.parts=r,this.string=r.join("."),this.depth=i,this.idName=s+this.string,this.isSimple=e.length===1&&!this.isScoped&&i===0,this.stringModeValue=this.string},PartialNameNode:function(e,n){v.call(this,n),this.type="PARTIAL_NAME",this.name=e.original},DataNode:function(e,n){v.call(this,n),this.type="DATA",this.id=e,this.stringModeValue=e.stringModeValue,this.idName="@"+e.stringModeValue},StringNode:function(e,n){v.call(this,n),this.type="STRING",this.original=this.string=this.stringModeValue=e},NumberNode:function(e,n){v.call(this,n),this.type="NUMBER",this.original=this.number=e,this.stringModeValue=Number(e)},BooleanNode:function(e,n){v.call(this,n),this.type="BOOLEAN",this.bool=e,this.stringModeValue=e==="true"},CommentNode:function(e,n){v.call(this,n),this.type="comment",this.comment=e,this.strip={inlineStandalone:!0}}};An.default=W});var Rn=m(In=>{"use strict";p();var Rt=(function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(i,s,a,o,c,l,u){var h=l.length-1;switch(c){case 1:return o.prepareProgram(l[h-1].statements,!0),l[h-1];break;case 2:this.$=new o.ProgramNode(o.prepareProgram(l[h]),{},this._$);break;case 3:this.$=l[h];break;case 4:this.$=l[h];break;case 5:this.$=l[h];break;case 6:this.$=l[h];break;case 7:this.$=new o.ContentNode(l[h],this._$);break;case 8:this.$=new o.CommentNode(l[h],this._$);break;case 9:this.$=new o.RawBlockNode(l[h-2],l[h-1],l[h],this._$);break;case 10:this.$=new o.MustacheNode(l[h-1],null,"","",this._$);break;case 11:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!1,this._$);break;case 12:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!0,this._$);break;case 13:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 14:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 15:this.$={strip:o.stripFlags(l[h-1],l[h-1]),program:l[h]};break;case 16:this.$={path:l[h-1],strip:o.stripFlags(l[h-2],l[h])};break;case 17:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 18:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 19:this.$=new o.PartialNode(l[h-3],l[h-2],l[h-1],o.stripFlags(l[h-4],l[h]),this._$);break;case 20:this.$=new o.PartialNode(l[h-2],void 0,l[h-1],o.stripFlags(l[h-3],l[h]),this._$);break;case 21:this.$=new o.SexprNode([l[h-2]].concat(l[h-1]),l[h],this._$);break;case 22:this.$=new o.SexprNode([l[h]],null,this._$);break;case 23:this.$=l[h];break;case 24:this.$=new o.StringNode(l[h],this._$);break;case 25:this.$=new o.NumberNode(l[h],this._$);break;case 26:this.$=new o.BooleanNode(l[h],this._$);break;case 27:this.$=l[h];break;case 28:l[h-1].isHelper=!0,this.$=l[h-1];break;case 29:this.$=new o.HashNode(l[h],this._$);break;case 30:this.$=[l[h-2],l[h]];break;case 31:this.$=new o.PartialNameNode(l[h],this._$);break;case 32:this.$=new o.PartialNameNode(new o.StringNode(l[h],this._$),this._$);break;case 33:this.$=new o.PartialNameNode(new o.NumberNode(l[h],this._$));break;case 34:this.$=new o.DataNode(l[h],this._$);break;case 35:this.$=new o.IdNode(l[h],this._$);break;case 36:l[h-2].push({part:l[h],separator:l[h-1]}),this.$=l[h-2];break;case 37:this.$=[{part:l[h]}];break;case 38:this.$=[];break;case 39:l[h-1].push(l[h]);break;case 48:this.$=[];break;case 49:l[h-1].push(l[h]);break;case 52:this.$=[l[h]];break;case 53:l[h-1].push(l[h]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(i,s){throw new Error(i)},parse:function(i){var s=this,a=[0],o=[null],c=[],l=this.table,u="",h=0,x=0,O=0,A=2,Ve=1;this.lexer.setInput(i),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var S=this.lexer.yylloc;c.push(S);var P=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function le(k){a.length=a.length-2*k,o.length=o.length-k,c.length=c.length-k}function et(){var k;return k=s.lexer.lex()||1,typeof k!="number"&&(k=s.symbols_[k]||k),k}for(var g,he,I,b,tr,ce,B={},G,w,Fe,K;;){if(I=a[a.length-1],this.defaultActions[I]?b=this.defaultActions[I]:((g===null||typeof g>"u")&&(g=et()),b=l[I]&&l[I][g]),typeof b>"u"||!b.length||!b[0]){var pe="";if(!O){K=[];for(G in l[I])this.terminals_[G]&&G>2&&K.push("'"+this.terminals_[G]+"'");this.lexer.showPosition?pe="Parse error on line "+(h+1)+`:
`+this.lexer.showPosition()+`
Expecting `+K.join(", ")+", got '"+(this.terminals_[g]||g)+"'":pe="Parse error on line "+(h+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(pe,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:S,expected:K})}}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+g);switch(b[0]){case 1:a.push(g),o.push(this.lexer.yytext),c.push(this.lexer.yylloc),a.push(b[1]),g=null,he?(g=he,he=null):(x=this.lexer.yyleng,u=this.lexer.yytext,h=this.lexer.yylineno,S=this.lexer.yylloc,O>0&&O--);break;case 2:if(w=this.productions_[b[1]][1],B.$=o[o.length-w],B._$={first_line:c[c.length-(w||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(w||1)].first_column,last_column:c[c.length-1].last_column},P&&(B._$.range=[c[c.length-(w||1)].range[0],c[c.length-1].range[1]]),ce=this.performAction.call(B,u,x,h,this.yy,b[1],o,c),typeof ce<"u")return ce;w&&(a=a.slice(0,-1*w*2),o=o.slice(0,-1*w),c=c.slice(0,-1*w)),a.push(this.productions_[b[1]][0]),o.push(B.$),c.push(B._$),Fe=l[a[a.length-2]][a[a.length-1]],a.push(Fe);break;case 3:return!0}}return!0}},n=(function(){var r={EOF:1,parseError:function(s,a){if(this.yy.parser)this.yy.parser.parseError(s,a);else throw new Error(s)},setInput:function(i){return this._input=i,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var s=i.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var s=i.length,a=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s-1),this.offset-=s;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===o.length?this.yylloc.first_column:0)+o[o.length-a.length].length-a[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-s]),this},more:function(){return this._more=!0,this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),s=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+s+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,s,a,o,c,l;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),h=0;h<u.length&&(a=this._input.match(this.rules[u[h]]),!(a&&(!s||a[0].length>s[0].length)&&(s=a,o=h,!this.options.flex)));h++);return s?(l=s[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],i=this.performAction.call(this,this.yy,this,u[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return typeof s<"u"?s:this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(s){this.begin(s)}};return r.options={},r.performAction=function(s,a,o,c){function l(h,x){return a.yytext=a.yytext.substr(h,a.yyleng-x)}var u=c;switch(o){case 0:if(a.yytext.slice(-2)==="\\\\"?(l(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(l(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return a.yytext=a.yytext.substr(5,a.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return l(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return l(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return a.yytext=l(1,2).replace(/\\"/g,'"'),42;break;case 30:return a.yytext=l(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return a.yytext=l(1,2),50;break;case 37:return"INVALID";case 38:return 5}},r.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],r.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},r})();e.lexer=n;function t(){this.yy={}}return t.prototype=e,e.Parser=t,new t})();In.default=Rt});var Cn=m(re=>{"use strict";p();var Ct=N().default;function Mt(e,n){return{left:e.charAt(2)==="~",right:n.charAt(n.length-3)==="~"}}re.stripFlags=Mt;function Ht(e,n,t,r,i,s){if(e.sexpr.id.original!==r.path.original)throw new Ct(e.sexpr.id.original+" doesn't match "+r.path.original,e);var a=t&&t.program,o={left:e.strip.left,right:r.strip.right,openStandalone:Ie(n.statements),closeStandalone:Ae((a||n).statements)};if(e.strip.right&&M(n.statements,null,!0),a){var c=t.strip;c.left&&_(n.statements,null,!0),c.right&&M(a.statements,null,!0),r.strip.left&&_(a.statements,null,!0),Ae(n.statements)&&Ie(a.statements)&&(_(n.statements),M(a.statements))}else r.strip.left&&_(n.statements,null,!0);return i?new this.BlockNode(e,a,n,o,s):new this.BlockNode(e,n,a,o,s)}re.prepareBlock=Ht;function Lt(e,n){for(var t=0,r=e.length;t<r;t++){var i=e[t],s=i.strip;if(s){var a=Ae(e,t,n,i.type==="partial"),o=Ie(e,t,n),c=s.openStandalone&&a,l=s.closeStandalone&&o,u=s.inlineStandalone&&a&&o;s.right&&M(e,t,!0),s.left&&_(e,t,!0),u&&(M(e,t),_(e,t)&&i.type==="partial"&&(i.indent=/([ \t]+$)/.exec(e[t-1].original)?RegExp.$1:"")),c&&(M((i.program||i.inverse).statements),_(e,t)),l&&(M(e,t),_((i.inverse||i.program).statements))}}return e}re.prepareProgram=Lt;function Ae(e,n,t){n===void 0&&(n=e.length);var r=e[n-1],i=e[n-2];if(!r)return t;if(r.type==="content")return(i||!t?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(r.original)}function Ie(e,n,t){n===void 0&&(n=-1);var r=e[n+1],i=e[n+2];if(!r)return t;if(r.type==="content")return(i||!t?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(r.original)}function M(e,n,t){var r=e[n==null?0:n+1];if(!(!r||r.type!=="content"||!t&&r.rightStripped)){var i=r.string;r.string=r.string.replace(t?/^\s+/:/^[ \t]*\r?\n?/,""),r.rightStripped=r.string!==i}}function _(e,n,t){var r=e[n==null?e.length-1:n-1];if(!(!r||r.type!=="content"||!t&&r.leftStripped)){var i=r.string;return r.string=r.string.replace(t?/\s+$/:/[ \t]+$/,""),r.leftStripped=r.string!==i,r.leftStripped}}});var Me=m(Ce=>{"use strict";p();var Re=Rn().default,Mn=_e().default,Ot=Cn(),Bt=j().extend;Ce.parser=Re;var Hn={};Bt(Hn,Ot,Mn);function Tt(e){return e.constructor===Mn.ProgramNode?e:(Re.yy=Hn,Re.parse(e))}Ce.parse=Tt});var se=m(ie=>{"use strict";p();var Le=N().default,Ln=j().isArray,jt=[].slice;function He(){}ie.Compiler=He;He.prototype={compiler:He,equals:function(e){var n=this.opcodes.length;if(e.opcodes.length!==n)return!1;for(var t=0;t<n;t++){var r=this.opcodes[t],i=e.opcodes[t];if(r.opcode!==i.opcode||!On(r.args,i.args))return!1}for(n=this.children.length,t=0;t<n;t++)if(!this.children[t].equals(e.children[t]))return!1;return!0},guid:0,compile:function(e,n){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=n,this.stringParams=n.stringParams,this.trackIds=n.trackIds;var t=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},t)for(var r in t)this.options.knownHelpers[r]=t[r];return this.accept(e)},accept:function(e){return this[e.type](e)},program:function(e){for(var n=e.statements,t=0,r=n.length;t<r;t++)this.accept(n[t]);return this.isSimple=r===1,this.depths.list=this.depths.list.sort(function(i,s){return i-s}),this},compileProgram:function(e){var n=new this.compiler().compile(e,this.options),t=this.guid++,r;this.usePartial=this.usePartial||n.usePartial,this.children[t]=n;for(var i=0,s=n.depths.list.length;i<s;i++)r=n.depths.list[i],!(r<2)&&this.addDepth(r-1);return t},block:function(e){var n=e.mustache,t=e.program,r=e.inverse;t&&(t=this.compileProgram(t)),r&&(r=this.compileProgram(r));var i=n.sexpr,s=this.classifySexpr(i);s==="helper"?this.helperSexpr(i,t,r):s==="simple"?(this.simpleSexpr(i),this.opcode("pushProgram",t),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("blockValue",i.id.original)):(this.ambiguousSexpr(i,t,r),this.opcode("pushProgram",t),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(e){var n=e.pairs,t,r;for(this.opcode("pushHash"),t=0,r=n.length;t<r;t++)this.pushParam(n[t][1]);for(;t--;)this.opcode("assignToHash",n[t][0]);this.opcode("popHash")},partial:function(e){var n=e.partialName;this.usePartial=!0,e.hash?this.accept(e.hash):this.opcode("push","undefined"),e.context?this.accept(e.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",n.name,e.indent||""),this.opcode("append")},content:function(e){e.string&&this.opcode("appendContent",e.string)},mustache:function(e){this.sexpr(e.sexpr),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(e,n,t){var r=e.id,i=r.parts[0],s=n!=null||t!=null;this.opcode("getContext",r.depth),this.opcode("pushProgram",n),this.opcode("pushProgram",t),this.ID(r),this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(e){var n=e.id;n.type==="DATA"?this.DATA(n):n.parts.length?this.ID(n):(this.addDepth(n.depth),this.opcode("getContext",n.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,n,t){var r=this.setupFullMustacheParams(e,n,t),i=e.id,s=i.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",r.length,s);else{if(this.options.knownHelpersOnly)throw new Le("You specified knownHelpersOnly, but used the unknown helper "+s,e);i.falsy=!0,this.ID(i),this.opcode("invokeHelper",r.length,i.original,i.isSimple)}},sexpr:function(e){var n=this.classifySexpr(e);n==="simple"?this.simpleSexpr(e):n==="helper"?this.helperSexpr(e):this.ambiguousSexpr(e)},ID:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var n=e.parts[0];n?this.opcode("lookupOnContext",e.parts,e.falsy,e.isScoped):this.opcode("pushContext")},DATA:function(e){this.options.data=!0,this.opcode("lookupData",e.id.depth,e.id.parts)},STRING:function(e){this.opcode("pushString",e.string)},NUMBER:function(e){this.opcode("pushLiteral",e.number)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:jt.call(arguments,1)})},addDepth:function(e){e!==0&&(this.depths[e]||(this.depths[e]=!0,this.depths.list.push(e)))},classifySexpr:function(e){var n=e.isHelper,t=e.eligibleHelper,r=this.options;if(t&&!n){var i=e.id.parts[0];r.knownHelpers[i]?n=!0:r.knownHelpersOnly&&(t=!1)}return n?"helper":t?"ambiguous":"simple"},pushParams:function(e){for(var n=0,t=e.length;n<t;n++)this.pushParam(e[n])},pushParam:function(e){this.stringParams?(e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",e.stringModeValue,e.type),e.type==="sexpr"&&this.sexpr(e)):(this.trackIds&&this.opcode("pushId",e.type,e.idName||e.stringModeValue),this.accept(e))},setupFullMustacheParams:function(e,n,t){var r=e.params;return this.pushParams(r),this.opcode("pushProgram",n),this.opcode("pushProgram",t),e.hash?this.hash(e.hash):this.opcode("emptyHash"),r}};function qt(e,n,t){if(e==null||typeof e!="string"&&e.constructor!==t.AST.ProgramNode)throw new Le("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);n=n||{},"data"in n||(n.data=!0),n.compat&&(n.useDepths=!0);var r=t.parse(e),i=new t.Compiler().compile(r,n);return new t.JavaScriptCompiler().compile(i,n)}ie.precompile=qt;function Vt(e,n,t){if(e==null||typeof e!="string"&&e.constructor!==t.AST.ProgramNode)throw new Le("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);n=n||{},"data"in n||(n.data=!0),n.compat&&(n.useDepths=!0);var r;function i(){var a=t.parse(e),o=new t.Compiler().compile(a,n),c=new t.JavaScriptCompiler().compile(o,n,void 0,!0);return t.template(c)}var s=function(a,o){return r||(r=i()),r.call(this,a,o)};return s._setup=function(a){return r||(r=i()),r._setup(a)},s._child=function(a,o,c){return r||(r=i()),r._child(a,o,c)},s}ie.compile=Vt;function On(e,n){if(e===n)return!0;if(Ln(e)&&Ln(n)&&e.length===n.length){for(var t=0;t<e.length;t++)if(!On(e[t],n[t]))return!1;return!0}}});var qn=m(jn=>{"use strict";p();var Ft=R().COMPILER_REVISION,zt=R().REVISION_CHANGES,Oe=N().default;function J(e){this.value=e}function H(){}H.prototype={nameLookup:function(e,n){return H.isValidJavaScriptVariableName(n)?e+"."+n:e+"['"+n+"']"},depthedLookup:function(e){return this.aliases.lookup="this.lookup",'lookup(depths, "'+e+'")'},compilerInfo:function(){var e=Ft,n=zt[e];return[e,n]},appendToBuffer:function(e){return this.environment.isSimple?"return "+e+";":{appendToBuffer:!0,content:e,toString:function(){return"buffer += "+e+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,n,t,r){this.environment=e,this.options=n,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!r,this.name=this.environment.name,this.isChild=!!t,this.context=t||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(e,n),this.useDepths=this.useDepths||e.depths.list.length||this.options.compat;var i=e.opcodes,s,a,o;for(a=0,o=i.length;a<o;a++)s=i[a],this[s.opcode].apply(this,s.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Oe("Compile completed with content left on stack");var c=this.createFunctionContext(r);if(this.isChild)return c;var l={compiler:this.compilerInfo(),main:c},u=this.context.programs;for(a=0,o=u.length;a<o;a++)u[a]&&(l[a]=u[a]);return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.options.compat&&(l.compat=!0),r||(l.compiler=JSON.stringify(l.compiler),l=this.objectLiteral(l)),l},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(e){var n="",t=this.stackVars.concat(this.registers.list);t.length>0&&(n+=", "+t.join(", "));for(var r in this.aliases)this.aliases.hasOwnProperty(r)&&(n+=", "+r+"="+this.aliases[r]);var i=["depth0","helpers","partials","data"];this.useDepths&&i.push("depths");var s=this.mergeSource(n);return e?(i.push(s),Function.apply(this,i)):"function("+i.join(",")+`) {
  `+s+"}"},mergeSource:function(e){for(var n="",t,r=!this.forceBuffer,i,s=0,a=this.source.length;s<a;s++){var o=this.source[s];o.appendToBuffer?t?t=t+`
    + `+o.content:t=o.content:(t&&(n?n+="buffer += "+t+`;
  `:(i=!0,n=t+`;
  `),t=void 0),n+=o+`
  `,this.environment.isSimple||(r=!1))}return r?(t||!n)&&(n+="return "+(t||'""')+`;
`):(e+=", buffer = "+(i?"":this.initializeBuffer()),t?n+="return buffer + "+t+`;
`:n+=`return buffer;
`),e&&(n="var "+e.substring(2)+(i?"":`;
  `)+n),n},blockValue:function(e){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var n=[this.contextName(0)];this.setupParams(e,0,n);var t=this.popStack();n.splice(1,0,t),this.push("blockHelperMissing.call("+n.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams("",0,e,!0),this.flushInline();var n=this.topStack();e.splice(1,0,n),this.pushSource("if (!"+this.lastHelper+") { "+n+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){this.pendingContent&&(e=this.pendingContent+e),this.pendingContent=e},append:function(){this.flushInline();var e=this.popStack();this.pushSource("if ("+e+" != null) { "+this.appendToBuffer(e)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,n,t){var r=0,i=e.length;for(!t&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(e[r++])):this.pushContext();r<i;r++)this.replaceStack(function(s){var a=this.nameLookup(s,e[r],"context");return n?" && "+a:" != null ? "+a+" : "+s})},lookupData:function(e,n){e?this.pushStackLiteral("this.data(data, "+e+")"):this.pushStackLiteral("data");for(var t=n.length,r=0;r<t;r++)this.replaceStack(function(i){return" && "+this.nameLookup(i,n[r],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(e,n){this.pushContext(),this.pushString(n),n!=="sexpr"&&(typeof e=="string"?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+e.ids.join(",")+"}"),this.stringParams&&(this.push("{"+e.contexts.join(",")+"}"),this.push("{"+e.types.join(",")+"}")),this.push(`{
    `+e.values.join(`,
    `)+`
  }`)},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){return this.inlineStack.push(e),e},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){e!=null?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},invokeHelper:function(e,n,t){this.aliases.helperMissing="helpers.helperMissing";var r=this.popStack(),i=this.setupHelper(e,n),s=(t?i.name+" || ":"")+r+" || helperMissing";this.push("(("+s+").call("+i.callParams+"))")},invokeKnownHelper:function(e,n){var t=this.setupHelper(e,n);this.push(t.name+".call("+t.callParams+")")},invokeAmbiguous:function(e,n){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var t=this.popStack();this.emptyHash();var r=this.setupHelper(0,e,n),i=this.lastHelper=this.nameLookup("helpers",e,"helper");this.push("((helper = (helper = "+i+" || "+t+") != null ? helper : helperMissing"+(r.paramsInit?"),("+r.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+r.callParams+") : helper))")},invokePartial:function(e,n){var t=[this.nameLookup("partials",e,"partial"),"'"+n+"'","'"+e+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?t.push("data"):this.options.compat&&t.push("undefined"),this.options.compat&&t.push("depths"),this.push("this.invokePartial("+t.join(", ")+")")},assignToHash:function(e){var n=this.popStack(),t,r,i;this.trackIds&&(i=this.popStack()),this.stringParams&&(r=this.popStack(),t=this.popStack());var s=this.hash;t&&s.contexts.push("'"+e+"': "+t),r&&s.types.push("'"+e+"': "+r),i&&s.ids.push("'"+e+"': "+i),s.values.push("'"+e+"': ("+n+")")},pushId:function(e,n){e==="ID"||e==="DATA"?this.pushString(n):e==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:H,compileChildren:function(e,n){for(var t=e.children,r,i,s=0,a=t.length;s<a;s++){r=t[s],i=new this.compiler;var o=this.matchExistingProgram(r);o==null?(this.context.programs.push(""),o=this.context.programs.length,r.index=o,r.name="program"+o,this.context.programs[o]=i.compile(r,n,this.context,!this.precompile),this.context.environments[o]=r,this.useDepths=this.useDepths||i.useDepths):(r.index=o,r.name="program"+o)}},matchExistingProgram:function(e){for(var n=0,t=this.context.environments.length;n<t;n++){var r=this.context.environments[n];if(r&&r.equals(e))return n}},programExpression:function(e){var n=this.environment.children[e],t=n.depths.list,r=this.useDepths,i,s=[n.index,"data"];return r&&s.push("depths"),"this.program("+s.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},pushStackLiteral:function(e){return this.push(new J(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),e&&this.source.push(e)},pushStack:function(e){this.flushInline();var n=this.incrStack();return this.pushSource(n+" = "+e+";"),this.compileStack.push(n),n},replaceStack:function(e){var n="",t=this.isInline(),r,i,s;if(!this.isInline())throw new Oe("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof J)n=r=a.value,s=!0;else{i=!this.stackSlot;var o=i?this.incrStack():this.topStackName();n="("+this.push(o)+" = "+a+")",r=this.topStack()}var c=e.call(this,r);s||this.popStack(),i&&this.stackSlot--,this.push("("+n+c+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;if(e.length){this.inlineStack=[];for(var n=0,t=e.length;n<t;n++){var r=e[n];r instanceof J?this.compileStack.push(r):this.pushStack(r)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var n=this.isInline(),t=(n?this.inlineStack:this.compileStack).pop();if(!e&&t instanceof J)return t.value;if(!n){if(!this.stackSlot)throw new Oe("Invalid stack pop");this.stackSlot--}return t},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,n=e[e.length-1];return n instanceof J?n.value:n},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var n=[];for(var t in e)e.hasOwnProperty(t)&&n.push(this.quotedString(t)+":"+e[t]);return"{"+n.join(",")+"}"},setupHelper:function(e,n,t){var r=[],i=this.setupParams(n,e,r,t),s=this.nameLookup("helpers",n,"helper");return{params:r,paramsInit:i,name:s,callParams:[this.contextName(0)].concat(r).join(", ")}},setupOptions:function(e,n,t){var r={},i=[],s=[],a=[],o,c,l;r.name=this.quotedString(e),r.hash=this.popStack(),this.trackIds&&(r.hashIds=this.popStack()),this.stringParams&&(r.hashTypes=this.popStack(),r.hashContexts=this.popStack()),c=this.popStack(),l=this.popStack(),(l||c)&&(l||(l="this.noop"),c||(c="this.noop"),r.fn=l,r.inverse=c);for(var u=n;u--;)o=this.popStack(),t[u]=o,this.trackIds&&(a[u]=this.popStack()),this.stringParams&&(s[u]=this.popStack(),i[u]=this.popStack());return this.trackIds&&(r.ids="["+a.join(",")+"]"),this.stringParams&&(r.types="["+s.join(",")+"]",r.contexts="["+i.join(",")+"]"),this.options.data&&(r.data="data"),r},setupParams:function(e,n,t,r){var i=this.objectLiteral(this.setupOptions(e,n,t));return r?(this.useRegister("options"),t.push("options"),"options="+i):(t.push(i),"")}};var Bn="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),Wt=H.RESERVED_WORDS={};for(ae=0,Tn=Bn.length;ae<Tn;ae++)Wt[Bn[ae]]=!0;var ae,Tn;H.isValidJavaScriptVariableName=function(e){return!H.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)};jn.default=H});var zn=m(Fn=>{"use strict";p();var V=Dn().default,Jt=_e().default,Ut=Me().parser,Gt=Me().parse,Kt=se().Compiler,Qt=se().compile,Yt=se().precompile,Xt=qn().default,Zt=V.create,Vn=function(){var e=Zt();return e.compile=function(n,t){return Qt(n,t,e)},e.precompile=function(n,t){return Yt(n,t,e)},e.AST=Jt,e.Compiler=Kt,e.JavaScriptCompiler=Xt,e.Parser=Ut,e.parse=Gt,e};V=Vn();V.create=Vn;V.default=V;Fn.default=V});var Te=m(Wn=>{"use strict";p();function Be(){}Be.prototype={constructor:Be,accept:function(e){return this[e.type](e)}};Wn.default=Be});var Jn=m(je=>{"use strict";p();var $t=Te().default;function er(e){return new f().accept(e)}je.print=er;function f(){this.padding=0}je.PrintVisitor=f;f.prototype=new $t;f.prototype.pad=function(e){for(var n="",t=0,r=this.padding;t<r;t++)n=n+"  ";return n=n+e+`
`,n};f.prototype.program=function(e){var n="",t=e.statements,r,i;for(r=0,i=t.length;r<i;r++)n=n+this.accept(t[r]);return this.padding--,n};f.prototype.block=function(e){var n="";return n=n+this.pad("BLOCK:"),this.padding++,n=n+this.accept(e.mustache),e.program&&(n=n+this.pad("PROGRAM:"),this.padding++,n=n+this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,n=n+this.pad("{{^}}"),this.padding++,n=n+this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,n};f.prototype.sexpr=function(e){for(var n=e.params,t=[],r,i=0,s=n.length;i<s;i++)t.push(this.accept(n[i]));return n="["+t.join(", ")+"]",r=e.hash?" "+this.accept(e.hash):"",this.accept(e.id)+" "+n+r};f.prototype.mustache=function(e){return this.pad("{{ "+this.accept(e.sexpr)+" }}")};f.prototype.partial=function(e){var n=this.accept(e.partialName);return e.context&&(n+=" "+this.accept(e.context)),e.hash&&(n+=" "+this.accept(e.hash)),this.pad("{{> "+n+" }}")};f.prototype.hash=function(e){for(var n=e.pairs,t=[],r,i,s=0,a=n.length;s<a;s++)r=n[s][0],i=this.accept(n[s][1]),t.push(r+"="+i);return"HASH{"+t.join(", ")+"}"};f.prototype.STRING=function(e){return'"'+e.string+'"'};f.prototype.NUMBER=function(e){return"NUMBER{"+e.number+"}"};f.prototype.BOOLEAN=function(e){return"BOOLEAN{"+e.bool+"}"};f.prototype.ID=function(e){var n=e.parts.join("/");return e.parts.length>1?"PATH:"+n:"ID:"+n};f.prototype.PARTIAL_NAME=function(e){return"PARTIAL:"+e.name};f.prototype.DATA=function(e){return"@"+this.accept(e.id)};f.prototype.content=function(e){return this.pad("CONTENT[ '"+e.string+"' ]")};f.prototype.comment=function(e){return this.pad("{{! '"+e.comment+"' }}")}});var Kn=m((Tr,Gn)=>{p();var U=zn().default;U.Visitor=Te().default;var Un=Jn();U.PrintVisitor=Un.PrintVisitor;U.print=Un.print;Gn.exports=U;typeof F<"u"&&F.extensions&&(qe=function(e,n){var t=(be(),de(ve)),r=t.readFileSync(n,"utf8");e.exports=U.compile(r)},F.extensions[".handlebars"]=qe,F.extensions[".hbs"]=qe);var qe});var Zn=m((Vr,Xn)=>{p();var oe=(be(),de(ve)),Qn=(pn(),de(cn)),Yn=Kn();function nr(e){var n=oe.readFileSync("//style.css","utf-8"),t=oe.readFileSync("//resume.hbs","utf-8"),r=Qn.join("/","partials"),i=oe.readdirSync(r);return i.forEach(function(s){var a=/^([^.]+).hbs$/.exec(s);if(a){var o=a[1],c=Qn.join(r,s),l=oe.readFileSync(c,"utf8");Yn.registerPartial(o,l)}}),Yn.compile(t)({css:n,resume:e})}Xn.exports={render:nr}});p();var L=at(Zn(),1),$n=L.default??L,zr=$n.render??L.render,Wr=$n.pdfRenderOptions??L.pdfRenderOptions;export{Wr as pdfRenderOptions,zr as render};
