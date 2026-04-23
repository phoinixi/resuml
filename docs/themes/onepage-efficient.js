var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var We=Object.create;var Q=Object.defineProperty;var je=Object.getOwnPropertyDescriptor;var Ge=Object.getOwnPropertyNames;var Je=Object.getPrototypeOf,ze=Object.prototype.hasOwnProperty;var U=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var Tn=(n,e)=>()=>(n&&(e=n(n=0)),e);var m=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),Ke=(n,e)=>{for(var t in e)Q(n,t,{get:e[t],enumerable:!0})},Fn=(n,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Ge(e))!ze.call(n,i)&&i!==t&&Q(n,i,{get:()=>e[i],enumerable:!(s=je(e,i))||s.enumerable});return n};var Qe=(n,e,t)=>(t=n!=null?We(Je(n)):{},Fn(e||!n||!n.__esModule?Q(t,"default",{value:n,enumerable:!0}):t,n)),Vn=n=>Fn(Q({},"__esModule",{value:!0}),n);var h=Tn(()=>{});var dn={};Ke(dn,{createReadStream:()=>Xn,createWriteStream:()=>Yn,default:()=>Xe,existsSync:()=>jn,lstatSync:()=>zn,mkdirSync:()=>Jn,readFileSync:()=>Un,readdirSync:()=>Wn,rmdirSync:()=>Qn,statSync:()=>un,unlinkSync:()=>Kn,writeFileSync:()=>Gn});function hn(n){return String(n).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function qn(n){var e=hn(n);if(X[e]!==void 0)return X[e];for(var t=Object.keys(X),s=0;s<t.length;s++)if(e.endsWith("/"+t[s])||e===t[s])return X[t[s]]}function cn(n){var e=hn(n);if((e===""||e===".")&&T["."]!==void 0)return T["."];if(T[e]!==void 0)return T[e];for(var t=Object.keys(T),s=0;s<t.length;s++)if(e.endsWith("/"+t[s])||e===t[s])return T[t[s]]}var X,T,Un,Wn,jn,Gn,Jn,un,zn,Kn,Qn,Xn,Yn,Xe,fn=Tn(()=>{"use strict";h();X={"package.json":`{
  "name": "jsonresume-theme-onepage-efficient",
  "version": "0.0.2",
  "description": "Space efficient resume theme. Based on onepage theme by Ainsley Chong",
  "author": "Brys Sepulveda",
  "repository": {
    "type": "git",
    "url": "https://github.com/MetroidHunter/jsonresume-theme-onepage-efficient"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  },
  "main": "index.js"
}
`,"public/index.html":`<!doctype html>
<html>
	<head>

	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width, user-scalable=no, minimal-ui'>

	<title>Brys Sepulveda</title>

	<style>
	body {
  background: #EEEEEE;
  font: 12px "Times New Roman", Times, sans-serif;
  line-height: 1.4;
  margin: 40px 0;
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
li {
  margin-bottom: 2px;
}
a {
  text-decoration: none;
}

#resume {
  margin: 0 auto;
  max-width: 600px;
  padding: 80px 100px;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 4px #aaa;
  -webkit-box-shadow: 2px 2px 4px #aaa;
}

.coursesList {
  width: 28%;
  vertical-align: top;
  display: inline-block;
}

.largeFont {
  font-size: 20px;
}

.smallFont {
  font-size: 12px;
}

.sectionBlock {
  display: flex;
  width: 100%;
}

.sectionName {
  width: 18%;
  vertical-align: top;
  display: inline-block;
}

.sectionContent {
  width: 80%;
  vertical-align: top;
  display: inline-block;
}

.sectionContent ul {
  padding-left: 20px;
  margin-top: 6px;
  list-style-type: circle;
}

.sectionContent .title {
  font-weight: bold;
}

.sectionContent .date {
  float: right;
}

.sectionContent .separator {
  height: 14px;
}

.sectionLine {
  border-style: dashed;
  border-width: 1px;
  border-color: #CFCFCF;
  margin-top: 10px;
  margin-bottom: 10px;
}

.divider {
  font-weight: bold;
  margin-left: 5px;
  margin-right: 5px;
}

.summary {
  margin-top: 6px;
}

.skillBlock {
  margin-bottom: 4px;
}

.jobBlock {
  margin: 0 0 0 2em;
  page-break-inside: avoid;
}

.companyDescription {
  margin:0;
}

.companyDescription.withDescription {
  margin:0 0 1em 0;
}

/* Media Queries */
@media only screen and (max-width: 40em) {
  body {
    margin: 0;
    font-size: 14px;
  }
  #resume {
    margin: 0 auto;
    max-width: 600px;
    padding: 0.5em 1em;
    border: none;
  }
  .sectionBlock {
    display:initial;
  }

  .sectionContent {
    width: 100%;
  }
  .sectionContent .date {
    padding-right: 2em;
  }
  .sectionName {
    width: initial;
    display: block;
    margin: 0 0 1em;
  }
  .largeFont {
    font-size: 20px;
  }
  .smallFont {
    font-size: 14px;
  }
}

@media print {
  body {
    margin: 0;
  }

  #resume {
    margin: 0 auto;
    max-width: 1024px;
    padding: 0px 0px;
    border: 0px;
    background: #fff;
    box-shadow: none;
    -webkit-box-shadow: none;
  }

  a {
    color: black;
  }
}

	</style>

	</head>
	<body>

	<div id='resume'>
  <div id='nameBlock' class='largeFont'>
    <span class='name'>
      Brys Sepulveda,
    </span>
    <span class='label'>Software Engineer</span>
  </div>
  <div id='basicsBlock' class='smallFont'>
    <div class='contactBlock'>
      <span class='email'>bksepulv@gmail.com</span>
      <span class='divider'>|</span>
      <span class='phone'>8033167755</span>
        <span class='divider'>|</span>
        <span class='address'>
          Bellevue, WA, US
        </span>
    </div>
  </div>
  <div class='sectionLine'></div>


	<div id='skills' class="sectionBlock">
    <div class='sectionName'>
      <span>SKILLS</span>
    </div>
    <div class='sectionContent'>
      <div class='skillBlock'>
        <span class='title'>Frameworks:</span>
          <span>.Net 3.5</span>, 
          <span>.Net 4.0</span>, 
          <span>.Net 4.5</span>, 
          <span>Django</span>, 
          <span>JQuery</span>, 
          <span>Magento</span>, 
          <span>Protoype JS</span>, 
          <span>UE3 Native</span>, 
          <span>UE3 Script</span>, 
          <span>XDK</span>, 
          <span>Ansible</span>, 
          <span>Google Protobuf</span>, 
          <span>NLog</span>, 
          <span>Log4Net</span>, 
          <span>Python Pyramid</span>, 
          <span>Handlebars</span>, 
          <span>NMake</span>, 
          <span>GNU Make</span>, 
          <span>.Net MVC</span>, 
          <span>NUnit</span>, 
          <span>LAMP</span>
      </div>
      <div class='skillBlock'>
        <span class='title'>Languages:</span>
          <span>BASH</span>, 
          <span>BATCH</span>, 
          <span>C#</span>, 
          <span>C++</span>, 
          <span>Google App Engine</span>, 
          <span>Java</span>, 
          <span>Javascript</span>, 
          <span>PHP</span>, 
          <span>PowerShell</span>, 
          <span>Python</span>, 
          <span>SQL</span>, 
          <span>Golang</span>, 
          <span>Golang CGO</span>
      </div>
      <div class='skillBlock'>
        <span class='title'>IDE:</span>
          <span>Eclipse</span>, 
          <span>Netbeans</span>, 
          <span>Visual Studio 2008</span>, 
          <span>Visual Studio 2010</span>, 
          <span>Visual Studio 2012</span>, 
          <span>Visual Studio 2015</span>, 
          <span>Visual Studio Code</span>, 
          <span>Pycharm</span>
      </div>
      <div class='skillBlock'>
        <span class='title'>OS:</span>
          <span>Android</span>, 
          <span>Linux</span>, 
          <span>Windows</span>
      </div>
      <div class='skillBlock'>
        <span class='title'>Services:</span>
          <span>AWS EC2</span>, 
          <span>AWS ElastiCache</span>, 
          <span>AWS ELB</span>, 
          <span>AWS IAM</span>, 
          <span>AWS RDS</span>, 
          <span>AWS Route 53</span>, 
          <span>AWS S3</span>, 
          <span>AWS SNS</span>, 
          <span>AWS SQS</span>, 
          <span>AWS VPC</span>, 
          <span>Apache HTTP Server</span>, 
          <span>IIS</span>, 
          <span>XDP</span>, 
          <span>Xbox Live</span>, 
          <span>PSN</span>, 
          <span>Steam API</span>, 
          <span>Apache Flume</span>, 
          <span>Apache Kafka</span>, 
          <span>Apache Zookeeper</span>, 
          <span>Jenkins</span>, 
          <span>RabbitMQ</span>, 
          <span>Docker</span>, 
          <span>Redis</span>
      </div>
      <div class='skillBlock'>
        <span class='title'>Version Control:</span>
          <span>Git</span>, 
          <span>Perforce</span>, 
          <span>SVN</span>
      </div>
      <div class='skillBlock'>
        <span class='title'>Data Formats:</span>
          <span>CSS</span>, 
          <span>CSV</span>, 
          <span>HTML</span>, 
          <span>INI</span>, 
          <span>JSON</span>, 
          <span>XML</span>, 
          <span>YAML</span>
      </div>
      <div class='skillBlock'>
        <span class='title'>Debugging:</span>
          <span>GDB</span>, 
          <span>Visual GDB</span>, 
          <span>Fiddler</span>
      </div>
      <div class='skillBlock'>
        <span class='title'>Compilers:</span>
          <span>GCC</span>, 
          <span>MSVC</span>, 
          <span>Clang</span>
      </div>
      <div class='skillBlock'>
        <span class='title'>Documentation:</span>
          <span>UML</span>, 
          <span>Visual Paradigm</span>, 
          <span>Jira</span>
      </div>
      <div class='skillBlock'>
        <span class='title'>Databases:</span>
          <span>PostgreSQL</span>, 
          <span>AWS Aurora</span>, 
          <span>MySQL</span>, 
          <span>Raven DB</span>
      </div>
      <div class='skillBlock'>
        <span class='title'>Solutions:</span>
          <span>Client Server Architecture</span>, 
          <span>Agile Methodology</span>, 
          <span>Distributed Programming</span>, 
          <span>Scrum Process</span>, 
          <span>Scaling Webservices</span>, 
          <span>RESTful APIS (REST)</span>, 
          <span>Event Driven Development</span>, 
          <span>Unit Testing and Mocking</span>, 
          <span>Data Driven Development (DDD)</span>, 
          <span>Test Driven Development (TDD)</span>, 
          <span>Continuous Integration</span>, 
          <span>Network Security</span>, 
          <span>Microservice Architecture</span>, 
          <span>Tools Development</span>
      </div>
    </div>
	</div>
  <div class='sectionLine'></div>

  <div id='workBlock' class="sectionBlock">
    <div class='sectionName'>
      <span>EXPERIENCE</span>
    </div>
    <div class='sectionContent'>
        <div class="companyBlock">
          <div class='blockHeader'>
            <span class='title'>
              Motiga Inc
            </span>
          </div>
          <div class="companyDescription ">
            
          </div>
        </div>
            <div class="jobBlock">
              <div class='blockHeader'>
                <span class='title'>
                  Senior Platform Engineer
                </span>
                <span class='date'>
                  Nov 2016 &mdash; Nov 2017
                </span>
              </div>
              <div><a href=''></a></div>
              <ul class='highlights'>
                <li>Refactored distributed C# game server manager called Supervisor to be unit testable, integrate with existing integration tests, and expand features</li>
                <li>Implemented QoS UE3 client to UE3 server to motiga platform system</li>
                <li>Provided insight on best coding practices, implementation patterns, and architecture decisions</li>
                <li>Instrumental in architecting the second version of the motiga platform written in Golang with a strong CGO library</li>
                <li>C++, C#, Python, Golang, CGO, JS, Zookeeper, Kafka, Flume, RabbitMQ, Redis, Physical Servers, Jenkins, Ansible</li>
              </ul>
              
            </div>
        <div class='separator'></div>
        <div class="companyBlock">
          <div class='blockHeader'>
            <span class='title'>
              Trendy Entertainment
            </span>
          </div>
          <div class="companyDescription withDescription">
            Trendy is an independent video game developer known for the multi-player tower defense action-RPG hit, Dungeon Defenders and their cross-platform technology, Playverse for online game features and game server hosting.
          </div>
        </div>
            <div class="jobBlock">
              <div class='blockHeader'>
                <span class='title'>
                  Game Programmer/Playverse Engineering Lead
                </span>
                <span class='date'>
                  Nov 2015 &mdash; Nov 2016
                </span>
              </div>
              <div><a href=''></a></div>
              <ul class='highlights'>
                <li>In charge of all development for Playverse, online game subsystem. Communicate, manage, architect, plan, research, refactor and execute all features and improvements.\r</li>
                <li>UE3 engine, gameplay, networking,UI, and tool development, modification, extension, documentation and Playverse integration.\r</li>
                <li>Working closely with design to shape aspects of gameplay and user interface within Dungeon Defenders 2.\r</li>
                <li>C#, MySql, AWS EC2, AWS SQS, AWS RDS, Memcached, Redis, C++, Windows/Linux servers management, MVC, ASP, HTML, JS, CSS, Raw TCP, WebSocket, UML, IIS, UE3, UnrealScript</li>
              </ul>
              <div class='separator'></div>
            </div>
            <div class="jobBlock">
              <div class='blockHeader'>
                <span class='title'>
                  Playverse Engineering Lead
                </span>
                <span class='date'>
                  Dec 2014 &mdash; Nov 2015
                </span>
              </div>
              <div><a href=''></a></div>
              <ul class='highlights'>
                <li>Architect and extend large scale, highly available, reliable online managed hosting environment called Playverse. \r</li>
                <li>Managed multi-feature matchmaking, server hosting, content management, versioning, distribution, development tools, and user management.\r</li>
                <li>Rich API design and improvement of legacy systems\r</li>
                <li>Lead team of 6\r</li>
                <li>C#, MySql, AWS EC2, AWS SQS, AWS RDS, Memcached, Redis, C++, Windows/Linux servers management, MVC, ASP, HTML, JS, CSS, Raw TCP, WebSocket, UML, IIS, JNI</li>
              </ul>
              <div class='separator'></div>
            </div>
            <div class="jobBlock">
              <div class='blockHeader'>
                <span class='title'>
                  Programmer 2
                </span>
                <span class='date'>
                  May 2013 &mdash; Dec 2014
                </span>
              </div>
              <div><a href=''></a></div>
              <ul class='highlights'>
                <li>Architect and extend large scale, highly available, reliable online managed hosting environment called Playverse. </li>
                <li>Managed multi-feature matchmaking, server hosting, content management, versioning, distribution, development tools, and user management.</li>
                <li>Rich API design and improvement of legacy systems</li>
                <li>C#, MySql, AWS EC2, AWS SQS, AWS RDS, Memcached, Redis, C++, Windows/Linux servers management, MVC, ASP, HTML, JS, CSS, Raw TCP, WebSocket, UML, IIS, JNI</li>
              </ul>
              
            </div>
        <div class='separator'></div>
        <div class="companyBlock">
          <div class='blockHeader'>
            <span class='title'>
              Blueacorn
            </span>
          </div>
          <div class="companyDescription withDescription">
            Blue Acorn is a premium eCommerce agency dedicated to helping retailers and brands achieve revenue growth through data-driven design, development and optimization.
          </div>
        </div>
            <div class="jobBlock">
              <div class='blockHeader'>
                <span class='title'>
                  Archimaster
                </span>
                <span class='date'>
                  Sep 2012 &mdash; Apr 2013
                </span>
              </div>
              <div><a href=''></a></div>
              <ul class='highlights'>
                <li>Enforced agile methodologies and scrum processes, field retrospective feedback to improve processes, find solutions to roadblocks and resolve dependencies.\r</li>
                <li>Master of all ceremonies, Manage burn down chart and task board on a day to day basis.\r</li>
                <li>Reponsible for deliverables, code reviews, glue code, feature architecture, answering team technical questions and providing guidance\r</li>
                <li>PHP, Apache, MySql, Physical Servers, HTML, JS, CSS, Magento, Linux</li>
              </ul>
              <div class='separator'></div>
            </div>
            <div class="jobBlock">
              <div class='blockHeader'>
                <span class='title'>
                  Systems Architect
                </span>
                <span class='date'>
                  Feb 2012 &mdash; Apr 2013
                </span>
              </div>
              <div><a href=''></a></div>
              <ul class='highlights'>
                <li>Oversee team of 6 with responsibility for 16 websites, maintenance, new features, and communication.\r</li>
                <li>Tech design, implementation, team education, software research, reviews, and standards enforcement on existing, new, and ground up client projects ensuring quality of deliverable.\r</li>
                <li>ERP system integrations, order/shipping/invoice/credit memo tracking, inventory management, cancels, subscriptions, and system updates. Integrations with SAP, TBS, MDS, OMX, Navision, SugarCRM, MOM, and EDI based systems.\r</li>
                <li>Large\xADscale data manipulation, optimization and handling for product catalogs up to 2 million skus and more.\r</li>
                <li>PHP, Apache, MySql, Physical Servers, HTML, JS, CSS, Magento, Linux</li>
              </ul>
              <div class='separator'></div>
            </div>
            <div class="jobBlock">
              <div class='blockHeader'>
                <span class='title'>
                  Backend Web Developer
                </span>
                <span class='date'>
                  Apr 2011 &mdash; Feb 2012
                </span>
              </div>
              <div><a href=''></a></div>
              <ul class='highlights'>
                <li>Software implementation, design, documentation, and requirements gathering for modules, bugs, and improvements to existing clients and client deliverables\r</li>
                <li>Webservice and API Integration of Shipping and Payment gateways such as Authorize.net, Chase Orbital Payments, Valuetec Gift Cards, Fedex, USPS, and UPS\r</li>
                <li>PHP, Apache, MySql, Physical Servers, HTML, JS, CSS, Magento, Linux</li>
              </ul>
              <div class='separator'></div>
            </div>
            <div class="jobBlock">
              <div class='blockHeader'>
                <span class='title'>
                  Intern
                </span>
                <span class='date'>
                  Mar 2011 &mdash; Apr 2011
                </span>
              </div>
              <div><a href=''></a></div>
              <ul class='highlights'>
                <li>Create a weather data collection and interface application using Apache, PHP, and MySql\r</li>
                <li>PHP, Apache, MySql\r</li>
                <li>Integration with Google Charts to display weather data and an interface to view, filter and sort that data.</li>
              </ul>
              
            </div>
        <div class='separator'></div>
        <div class="companyBlock">
          <div class='blockHeader'>
            <span class='title'>
              College of Charleston
            </span>
          </div>
          <div class="companyDescription ">
            
          </div>
        </div>
            <div class="jobBlock">
              <div class='blockHeader'>
                <span class='title'>
                  Assistant Webmaster / Resident Programmer
                </span>
                <span class='date'>
                  Jul 2009 &mdash; Mar 2011
                </span>
              </div>
              <div><a href=''></a></div>
              <ul class='highlights'>
                <li>Developed web based applications for students of the LCWA department utilizing Google code and the developer API within Google code.</li>
              </ul>
              <div class='separator'></div>
            </div>
            <div class="jobBlock">
              <div class='blockHeader'>
                <span class='title'>
                  Student Researcher
                </span>
                <span class='date'>
                  Jul 2008 &mdash; Apr 2010
                </span>
              </div>
              <div><a href=''></a></div>
              <ul class='highlights'>
                <li>Used JavaScript, HTML, and CSS to assist in creating the Armonique live website. Fine-tuned the power law metrics that govern the Armonique music search engine behavior using Python and math. Helped develop new metrics to capture and record more aesthetic qualities of the music.</li>
              </ul>
              
            </div>
        
    </div>
  </div>
  <div class='sectionLine'></div>




	<div id='education' class="sectionBlock">
    <div class='sectionName'>
      <span>EDUCATION</span>
    </div>
    <div class='sectionContent'>
      <div class='educationBlock'>
        <span class='title'>
          College of Charleston
        </span>
        <span class='date'>
          Jul 2007 &mdash; Apr 2011
        </span>
        <div class=''>
          BS  - Computer Science, GPA: 3.5
        </div>
      </div>
      
    </div>
	</div>
  <div class='sectionLine'></div>

	



	</body>
</html>
`,"resume.hbs":`<!doctype html>
<html>
	<head>

	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width, user-scalable=no, minimal-ui'>

	<title>{{resume.basics.name}}</title>

	<style>
	{{{css}}}
	</style>

	</head>
	<body>

	<div id='resume'>
	{{#resume.basics}}
  <div id='nameBlock' class='largeFont'>
    <span class='name'>
      {{name}}{{#if label}},{{/if}}
    </span>
    {{#if label}}
    <span class='label'>{{label}}</span>
    {{/if}}
  </div>
  <div id='basicsBlock' class='smallFont'>
    <div class='contactBlock'>
      {{#if email}}
      <span class='email'>{{email}}</span>
      {{/if}}
      {{#if phone}}
      <span class='divider'>|</span>
      <span class='phone'>{{phone}}</span>
      {{/if}}
      {{#location}}
        <span class='divider'>|</span>
        <span class='address'>
          {{#if city}}{{city}}{{/if}}{{#if region}}, {{region}}{{/if}}{{#if countryCode}}, {{countryCode}}{{/if}}
        </span>
      {{/location}}
    </div>
    {{#if profiles.length}}
      <div id='profilesBlock'>
        {{#each profiles}}
          {{#if url}}
            <span class='url'>
              <a href='{{url}}'>{{url}}</a>
            </span>
            {{#unless @last}}<span class='divider'>|</span>{{/unless}}
          {{/if}}
      {{/each}}
      </div>
    {{/if}}
  </div>
  <div class='sectionLine'></div>
	{{/resume.basics}}

  {{#if resume.basics.summary}}
  <div id='summaryBlock' class="sectionBlock">
    <div class='sectionName'>
      <span>SUMMARY</span>
    </div>
    <div class='sectionContent'>
      <span>{{resume.basics.summary}}</span>
    </div>
  </div>
  <div class='sectionLine'></div>
  {{/if}}

  {{#if resume.skills.length}}
	<div id='skills' class="sectionBlock">
    <div class='sectionName'>
      <span>SKILLS</span>
    </div>
    <div class='sectionContent'>
      {{#each resume.skills}}
      <div class='skillBlock'>
        <span class='title'>{{#if name}}{{name}}{{/if}}{{#if level}} <em>({{level}})</em>{{/if}}:</span>
        {{#if keywords.length}}
          {{#each keywords}}
          <span>{{.}}</span>{{#unless @last}}, {{/unless}}
          {{/each}}
        {{/if}}
        {{#if details.length}}
          {{#each details}}
          <span>{{#if text}}{{text}}{{/if}}{{#if comment}} <em>({{comment}})</em>{{/if}}{{#unless @last}}, {{/unless}}</span>
          {{/each}}
        {{/if}}
      </div>
      {{/each}}
    </div>
	</div>
  <div class='sectionLine'></div>
	{{/if}}

	{{#if resume.work.length}}
  <div id='workBlock' class="sectionBlock">
    <div class='sectionName'>
      <span>EXPERIENCE</span>
    </div>
    <div class='sectionContent'>
      {{#each resume.work}}
        <div class="companyBlock">
          <div class='blockHeader'>
            <span class='title'>
              {{#if name}}{{name}}{{/if}}
            </span>
          </div>
          <div class="companyDescription {{#if description}}withDescription{{/if}}">
            {{#if description}}{{description}}{{/if}}
          </div>
        </div>
        {{#if positions.length}}
          {{#each positions}}
            <div class="jobBlock">
              <div class='blockHeader'>
                <span class='title'>
                  {{#if position}}{{position}}{{/if}}
                </span>
                {{#if startDate}}
                <span class='date'>
                  {{smallDate startDate}} &mdash; {{#if endDate}}{{smallDate endDate}}{{else}}Present{{/if}}
                </span>
                {{/if}}
              </div>
              <div><a href='{{website}}'>{{website}}</a></div>
              {{#if highlights.length}}
              <ul class='highlights'>
                {{#each highlights}}
                <li>{{.}}</li>
                {{/each}}
              </ul>
              {{/if}}
              {{#if details.length}}
              <ul class='details'>
                {{#each details}}
                <li>{{#if text}}{{text}}{{/if}}{{#if comment}} <em>[{{comment}}]</em>{{/if}}</li>
                {{/each}}
              </ul>
              {{/if}}
              {{#unless @last}}<div class='separator'></div>{{/unless}}
            </div>
          {{/each}}
        {{/if}}
        {{#unless @last}}<div class='separator'></div>{{/unless}}
      {{/each}}
    </div>
  </div>
  <div class='sectionLine'></div>
	{{/if}}

	{{#if resume.publications.length}}
	<div id='publications'>
    <div class='sectionName'>
      <span>PUBLICATIONS</span>
    </div>
    <div class='sectionContent'>
      {{#each resume.publications}}
      <div class='blockHeader'>
        <span class='title'>
          {{#if name}}{{name}}{{/if}}{{#if publisher}}, {{publisher}}{{/if}}
        </span>
        {{#if releaseDate}}
        <span class='date'>
          <span class='releaseDate'>{{releaseDate}}</span>
        </span>
        {{/if}}
      </div>
      {{#if website}}
      <div class='website'>
        <a href='{{website}}'>{{website}}</a>
      </div>
      {{/if}}
      {{#if highlights.length}}
      <ul class='highlights'>
        {{#each highlights}}
        <li>{{.}}</li>
        {{/each}}
      </ul>
      {{/if}}
      {{#unless @last}}<div class='separator'></div>{{/unless}}
      {{/each}}
    </div>
	</div>
  <div class='sectionLine'></div>
	{{/if}}

	{{#if resume.awards.length}}
	<div id='awards' class="sectionBlock">
    <div class='sectionName'>
      <span>AWARDS</span>
    </div>
    <div class='sectionContent'>
      {{#each resume.awards}}
      <div class='blockHeader'>
        <span class='title'>
          {{#if title}}{{title}}{{/if}}{{#if awarder}}, {{awarder}}{{/if}}
        </span>
        {{#if date}}
        <span class='date'>
          <span class='date'>{{date}}</span>
        </span>
        {{/if}}
      </div>
      {{#if highlights.length}}
      <ul class='highlights'>
        {{#each highlights}}
        <li>{{.}}</li>
        {{/each}}
      </ul>
      {{/if}}
      {{#unless @last}}<div class='separator'></div>{{/unless}}
      {{/each}}
    </div>
	</div>
  <div class='sectionLine'></div>
	{{/if}}

	{{#if resume.volunteer.length}}
	<div id='volunteer' class="sectionBlock">
    <div class='sectionName'>
      <span>VOLUNTEERING</span>
    </div>
    <div class='sectionContent'>
      {{#each resume.volunteer}}
      <div class='blockHeader'>
        <span class='title'>{{#if organization}}{{organization}}{{/if}}{{#if position}}, {{position}}{{/if}}</span>
        {{#if startDate}}
        <span class='date'>
          {{#if startDate}}{{startDate}}{{/if}} &mdash; {{#if endDate}}{{endDate}}{{else}}Present{{/if}}
        </span>
        {{/if}}
        {{#if website}}
        <div class='website'><a href='{{website}}'>{{website}}</a></div>
        {{/if}}
        {{#if highlights.length}}
        <ul class='highlights'>
          {{#each highlights}}
          <li>{{.}}</li>
          {{/each}}
        </ul>
        {{/if}}
      </div>
      {{#unless @last}}<div class='separator'></div>{{/unless}}
      {{/each}}
    </div>
	</div>
  <div class='sectionLine'></div>
	{{/if}}

	{{#if resume.education.length}}
	<div id='education' class="sectionBlock">
    <div class='sectionName'>
      <span>EDUCATION</span>
    </div>
    <div class='sectionContent'>
      {{#each resume.education}}
      <div class='educationBlock'>
        <span class='title'>
          {{#if institution}}{{institution}}{{/if}}
        </span>
        {{#if startDate}}
        <span class='date'>
          {{smallDate startDate}} &mdash; {{#if endDate}}{{smallDate endDate}}{{else}}Present{{/if}}
        </span>
        {{/if}}
        <div class=''>
          {{#if studyType}}{{studyType}} {{/if}} - {{#if area}}{{area}}{{/if}}{{#if gpa}}, GPA: {{gpa}}{{/if}}
        </div>
        {{#if courses.length}}
        <div id='coursesBlock'>
          {{#each courses}}
          <ul class='coursesList'>
            {{#each .}}
            <li class='course'>{{.}}</li>
            {{/each}}
          </ul>
          {{/each}}
        </div>
        {{/if}}
      </div>
      {{#unless @last}}<div class='separator'></div>{{/unless}}
      {{/each}}
    </div>
	</div>
  <div class='sectionLine'></div>
	{{/if}}

	

	{{#if resume.languages.length}}
	<div id='languages' class="sectionBlock">
    <div class='sectionName'>
      <span>LANGUAGES</span>
    </div>
    <div class='sectionContent'>
      {{#each resume.languages}}
      <span class='language'>{{language}}</span>
      {{#if fluency}}
      <span class='fluency'><em>({{fluency}})</em></span>
      {{/if}}
      {{#unless @last}}<span>,</span>{{/unless}}
      {{/each}}
    </div>
    <div class='sectionLine'></div>
	</div>
  {{/if}}

	{{#if resume.interests.length}}
	<div id='interests' class="sectionBlock">
    <div class='sectionName'>
      <span>INTERESTS</span>
    </div>
    <div class='sectionContent'>
      {{#each resume.interests}}
      <span class='name'>{{name}}</span><!--
      {{#if keywords.length}}
      --><span class='keywords'> <em>[
      {{#each keywords}}
        {{.}}<!--
        -->{{#unless @last}}, {{/unless}}
      {{/each}}
      ]</em></span><!--
      {{/if}}
      -->{{#unless @last}}<span>, </span>{{/unless}}
      {{/each}}
    </div>
    <div class='sectionLine'></div>
	</div>
  {{/if}}

	</body>
</html>
`,"style.css":`body {
  background: #EEEEEE;
  font: 12px "Times New Roman", Times, sans-serif;
  margin: 40px 0;
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
li {
  margin-bottom: 2px;
}
a {
  text-decoration: none;
}

#resume {
  margin: 0 auto;
  max-width: 600px;
  padding: 80px 100px;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 4px #aaa;
  -webkit-box-shadow: 2px 2px 4px #aaa;
}

.coursesList {
  width: 28%;
  vertical-align: top;
  display: inline-block;
}

.largeFont {
  font-size: 20px;
}

.smallFont {
  font-size: 12px;
}

.sectionBlock {
  display: flex;
  width: 100%;
}

.sectionName {
  width: 18%;
  vertical-align: top;
  display: inline-block;
}

.sectionContent {
  width: 80%;
  vertical-align: top;
  display: inline-block;
}

.sectionContent ul {
  padding-left: 20px;
  margin-top: 6px;
  list-style-type: circle;
}

.sectionContent .title {
  font-weight: bold;
}

.sectionContent .date {
  float: right;
}

.sectionContent .separator {
  height: 14px;
}

.sectionLine {
  border-style: dashed;
  border-width: 1px;
  border-color: #CFCFCF;
  margin-top: 10px;
  margin-bottom: 10px;
}

.divider {
  font-weight: bold;
  margin-left: 5px;
  margin-right: 5px;
}

.summary {
  margin-top: 6px;
}

.skillBlock {
  margin-bottom: 4px;
}

.jobBlock {
  margin: 0 0 0 2em;
  page-break-inside: avoid;
}

.companyDescription {
  margin:0;
}

.companyDescription.withDescription {
  margin:0 0 1em 0;
}

/* Media Queries */
@media only screen and (max-width: 40em) {
  body {
    margin: 0;
    font-size: 14px;
  }
  #resume {
    margin: 0 auto;
    max-width: 600px;
    padding: 0.5em 1em;
    border: none;
  }
  .sectionBlock {
    display:initial;
  }

  .sectionContent {
    width: 100%;
  }
  .sectionContent .date {
    padding-right: 2em;
  }
  .sectionName {
    width: initial;
    display: block;
    margin: 0 0 1em;
  }
  .largeFont {
    font-size: 20px;
  }
  .smallFont {
    font-size: 14px;
  }
}

@media print {
  body {
    margin: 0;
  }

  #resume {
    margin: 0 auto;
    max-width: 1024px;
    padding: 0px 0px;
    border: 0px;
    background: #fff;
    box-shadow: none;
    -webkit-box-shadow: none;
  }

  a {
    color: black;
  }
}
`},T={public:["index.html"],".":["README.md","index.js","package.json","public","resume.hbs","style.css"]};Un=function(n,e){var t=qn(n);return t!==void 0?t:""},Wn=function(n,e){var t=cn(n);return t===void 0&&(t=[]),e&&e.withFileTypes?t.map(function(s){var i=hn(n)+"/"+s,a=cn(i)!==void 0;return{name:s,isFile:function(){return!a},isDirectory:function(){return a}}}):t},jn=function(n){return qn(n)!==void 0||cn(n)!==void 0},Gn=function(){},Jn=function(){},un=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},zn=un,Kn=function(){},Qn=function(){},Xn=function(){return{pipe:function(n){return n},on:function(){return this}}},Yn=function(){return{write:function(){},end:function(){},on:function(){return this}}},Xe={readFileSync:Un,readdirSync:Wn,existsSync:jn,writeFileSync:Gn,mkdirSync:Jn,statSync:un,lstatSync:zn,unlinkSync:Kn,rmdirSync:Qn,createReadStream:Xn,createWriteStream:Yn}});var mn=m($n=>{"use strict";h();function Zn(n){this.string=n}Zn.prototype.toString=function(){return""+this.string};$n.default=Zn});var F=m(P=>{"use strict";h();var Ye=mn().default,Ze={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},$e=/[&<>"'`]/g,nt=/[&<>"'`]/;function et(n){return Ze[n]}function tt(n){for(var e=1;e<arguments.length;e++)for(var t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&(n[t]=arguments[e][t]);return n}P.extend=tt;var gn=Object.prototype.toString;P.toString=gn;var Y=function(n){return typeof n=="function"};Y(/x/)&&(Y=function(n){return typeof n=="function"&&gn.call(n)==="[object Function]"});var Y;P.isFunction=Y;var ne=Array.isArray||function(n){return n&&typeof n=="object"?gn.call(n)==="[object Array]":!1};P.isArray=ne;function st(n){return n instanceof Ye?n.toString():n==null?"":n?(n=""+n,nt.test(n)?n.replace($e,et):n):n+""}P.escapeExpression=st;function it(n){return!n&&n!==0?!0:!!(ne(n)&&n.length===0)}P.isEmpty=it;function at(n,e){return(n?n+".":"")+e}P.appendContextPath=at});var N=m(te=>{"use strict";h();var vn=["description","fileName","lineNumber","message","name","number","stack"];function ee(n,e){var t;e&&e.firstLine&&(t=e.firstLine,n+=" - "+t+":"+e.firstColumn);for(var s=Error.prototype.constructor.call(this,n),i=0;i<vn.length;i++)this[vn[i]]=s[vn[i]];t&&(this.lineNumber=t,this.column=e.firstColumn)}ee.prototype=new Error;te.default=ee});var I=m(C=>{"use strict";h();var b=F(),Sn=N().default,rt="2.0.0";C.VERSION=rt;var lt=6;C.COMPILER_REVISION=lt;var ot={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};C.REVISION_CHANGES=ot;var se=b.isArray,kn=b.isFunction,ie=b.toString,ae="[object Object]";function bn(n,e){this.helpers=n||{},this.partials=e||{},pt(this)}C.HandlebarsEnvironment=bn;bn.prototype={constructor:bn,logger:W,log:re,registerHelper:function(n,e){if(ie.call(n)===ae){if(e)throw new Sn("Arg not supported with multiple helpers");b.extend(this.helpers,n)}else this.helpers[n]=e},unregisterHelper:function(n){delete this.helpers[n]},registerPartial:function(n,e){ie.call(n)===ae?b.extend(this.partials,n):this.partials[n]=e},unregisterPartial:function(n){delete this.partials[n]}};function pt(n){n.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new Sn("Missing helper: '"+arguments[arguments.length-1].name+"'")}),n.registerHelper("blockHelperMissing",function(e,t){var s=t.inverse,i=t.fn;if(e===!0)return i(this);if(e===!1||e==null)return s(this);if(se(e))return e.length>0?(t.ids&&(t.ids=[t.name]),n.helpers.each(e,t)):s(this);if(t.data&&t.ids){var a=Z(t.data);a.contextPath=b.appendContextPath(t.data.contextPath,t.name),t={data:a}}return i(e,t)}),n.registerHelper("each",function(e,t){if(!t)throw new Sn("Must pass iterator to #each");var s=t.fn,i=t.inverse,a=0,l="",r,c;if(t.data&&t.ids&&(c=b.appendContextPath(t.data.contextPath,t.ids[0])+"."),kn(e)&&(e=e.call(this)),t.data&&(r=Z(t.data)),e&&typeof e=="object")if(se(e))for(var o=e.length;a<o;a++)r&&(r.index=a,r.first=a===0,r.last=a===e.length-1,c&&(r.contextPath=c+a)),l=l+s(e[a],{data:r});else for(var u in e)e.hasOwnProperty(u)&&(r&&(r.key=u,r.index=a,r.first=a===0,c&&(r.contextPath=c+u)),l=l+s(e[u],{data:r}),a++);return a===0&&(l=i(this)),l}),n.registerHelper("if",function(e,t){return kn(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||b.isEmpty(e)?t.inverse(this):t.fn(this)}),n.registerHelper("unless",function(e,t){return n.helpers.if.call(this,e,{fn:t.inverse,inverse:t.fn,hash:t.hash})}),n.registerHelper("with",function(e,t){kn(e)&&(e=e.call(this));var s=t.fn;if(b.isEmpty(e))return t.inverse(this);if(t.data&&t.ids){var i=Z(t.data);i.contextPath=b.appendContextPath(t.data.contextPath,t.ids[0]),t={data:i}}return s(e,t)}),n.registerHelper("log",function(e,t){var s=t.data&&t.data.level!=null?parseInt(t.data.level,10):1;n.log(s,e)}),n.registerHelper("lookup",function(e,t){return e&&e[t]})}var W={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(n,e){if(W.level<=n){var t=W.methodMap[n];typeof console<"u"&&console[t]&&console[t].call(console,e)}}};C.logger=W;var re=W.log;C.log=re;var Z=function(n){var e=b.extend({},n);return e._parent=n,e};C.createFrame=Z});var oe=m(V=>{"use strict";h();var yn=F(),L=N().default,ct=I().COMPILER_REVISION,le=I().REVISION_CHANGES,ht=I().createFrame;function ut(n){var e=n&&n[0]||1,t=ct;if(e!==t)if(e<t){var s=le[t],i=le[e];throw new L("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+s+") or downgrade your runtime to an older version ("+i+").")}else throw new L("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+n[1]+").")}V.checkRevision=ut;function dt(n,e){if(!e)throw new L("No environment passed to template");if(!n||!n.main)throw new L("Unknown template object: "+typeof n);e.VM.checkRevision(n.compiler);var t=function(a,l,r,c,o,u,p,k,R){o&&(c=yn.extend({},c,o));var _=e.VM.invokePartial.call(this,a,r,c,u,p,k,R);if(_==null&&e.compile){var Rn={helpers:u,partials:p,data:k,depths:R};p[r]=e.compile(a,{data:k!==void 0,compat:n.compat},e),_=p[r](c,Rn)}if(_!=null){if(l){for(var x=_.split(`
`),E=0,rn=x.length;E<rn&&!(!x[E]&&E+1===rn);E++)x[E]=l+x[E];_=x.join(`
`)}return _}else throw new L("The partial "+r+" could not be compiled when running in runtime-only mode")},s={lookup:function(a,l){for(var r=a.length,c=0;c<r;c++)if(a[c]&&a[c][l]!=null)return a[c][l]},lambda:function(a,l){return typeof a=="function"?a.call(l):a},escapeExpression:yn.escapeExpression,invokePartial:t,fn:function(a){return n[a]},programs:[],program:function(a,l,r){var c=this.programs[a],o=this.fn(a);return l||r?c=$(this,a,o,l,r):c||(c=this.programs[a]=$(this,a,o)),c},data:function(a,l){for(;a&&l--;)a=a._parent;return a},merge:function(a,l){var r=a||l;return a&&l&&a!==l&&(r=yn.extend({},l,a)),r},noop:e.VM.noop,compilerInfo:n.compiler},i=function(a,l){l=l||{};var r=l.data;i._setup(l),!l.partial&&n.useData&&(r=gt(a,r));var c;return n.useDepths&&(c=l.depths?[a].concat(l.depths):[a]),n.main.call(s,a,s.helpers,s.partials,r,c)};return i.isTop=!0,i._setup=function(a){a.partial?(s.helpers=a.helpers,s.partials=a.partials):(s.helpers=s.merge(a.helpers,e.helpers),n.usePartial&&(s.partials=s.merge(a.partials,e.partials)))},i._child=function(a,l,r){if(n.useDepths&&!r)throw new L("must pass parent depths");return $(s,a,n[a],l,r)},i}V.template=dt;function $(n,e,t,s,i){var a=function(l,r){return r=r||{},t.call(n,l,n.helpers,n.partials,r.data||s,i&&[l].concat(i))};return a.program=e,a.depth=i?i.length:0,a}V.program=$;function ft(n,e,t,s,i,a,l){var r={partial:!0,helpers:s,partials:i,data:a,depths:l};if(n===void 0)throw new L("The partial "+e+" could not be found");if(n instanceof Function)return n(t,r)}V.invokePartial=ft;function mt(){return""}V.noop=mt;function gt(n,e){return(!e||!("root"in e))&&(e=e?ht(e):{},e.root=n),e}});var de=m(ue=>{"use strict";h();var pe=I(),vt=mn().default,kt=N().default,xn=F(),ce=oe(),he=function(){var n=new pe.HandlebarsEnvironment;return xn.extend(n,pe),n.SafeString=vt,n.Exception=kt,n.Utils=xn,n.escapeExpression=xn.escapeExpression,n.VM=ce,n.template=function(e){return ce.template(e,n)},n},nn=he();nn.create=he;nn.default=nn;ue.default=nn});var wn=m(me=>{"use strict";h();var fe=N().default;function v(n){n=n||{},this.firstLine=n.first_line,this.firstColumn=n.first_column,this.lastColumn=n.last_column,this.lastLine=n.last_line}var j={ProgramNode:function(n,e,t){v.call(this,t),this.type="program",this.statements=n,this.strip=e},MustacheNode:function(n,e,t,s,i){if(v.call(this,i),this.type="mustache",this.strip=s,t!=null&&t.charAt){var a=t.charAt(3)||t.charAt(2);this.escaped=a!=="{"&&a!=="&"}else this.escaped=!!t;n instanceof j.SexprNode?this.sexpr=n:this.sexpr=new j.SexprNode(n,e),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(n,e,t){v.call(this,t),this.type="sexpr",this.hash=e;var s=this.id=n[0],i=this.params=n.slice(1);this.isHelper=!!(i.length||e),this.eligibleHelper=this.isHelper||s.isSimple},PartialNode:function(n,e,t,s,i){v.call(this,i),this.type="partial",this.partialName=n,this.context=e,this.hash=t,this.strip=s,this.strip.inlineStandalone=!0},BlockNode:function(n,e,t,s,i){v.call(this,i),this.type="block",this.mustache=n,this.program=e,this.inverse=t,this.strip=s,t&&!e&&(this.isInverse=!0)},RawBlockNode:function(n,e,t,s){if(v.call(this,s),n.sexpr.id.original!==t)throw new fe(n.sexpr.id.original+" doesn't match "+t,this);e=new j.ContentNode(e,s),this.type="block",this.mustache=n,this.program=new j.ProgramNode([e],{},s)},ContentNode:function(n,e){v.call(this,e),this.type="content",this.original=this.string=n},HashNode:function(n,e){v.call(this,e),this.type="hash",this.pairs=n},IdNode:function(n,e){v.call(this,e),this.type="ID";for(var t="",s=[],i=0,a="",l=0,r=n.length;l<r;l++){var c=n[l].part;if(t+=(n[l].separator||"")+c,c===".."||c==="."||c==="this"){if(s.length>0)throw new fe("Invalid path: "+t,this);c===".."?(i++,a+="../"):this.isScoped=!0}else s.push(c)}this.original=t,this.parts=s,this.string=s.join("."),this.depth=i,this.idName=a+this.string,this.isSimple=n.length===1&&!this.isScoped&&i===0,this.stringModeValue=this.string},PartialNameNode:function(n,e){v.call(this,e),this.type="PARTIAL_NAME",this.name=n.original},DataNode:function(n,e){v.call(this,e),this.type="DATA",this.id=n,this.stringModeValue=n.stringModeValue,this.idName="@"+n.stringModeValue},StringNode:function(n,e){v.call(this,e),this.type="STRING",this.original=this.string=this.stringModeValue=n},NumberNode:function(n,e){v.call(this,e),this.type="NUMBER",this.original=this.number=n,this.stringModeValue=Number(n)},BooleanNode:function(n,e){v.call(this,e),this.type="BOOLEAN",this.bool=n,this.stringModeValue=n==="true"},CommentNode:function(n,e){v.call(this,e),this.type="comment",this.comment=n,this.strip={inlineStandalone:!0}}};me.default=j});var ve=m(ge=>{"use strict";h();var St=(function(){var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(i,a,l,r,c,o,u){var p=o.length-1;switch(c){case 1:return r.prepareProgram(o[p-1].statements,!0),o[p-1];break;case 2:this.$=new r.ProgramNode(r.prepareProgram(o[p]),{},this._$);break;case 3:this.$=o[p];break;case 4:this.$=o[p];break;case 5:this.$=o[p];break;case 6:this.$=o[p];break;case 7:this.$=new r.ContentNode(o[p],this._$);break;case 8:this.$=new r.CommentNode(o[p],this._$);break;case 9:this.$=new r.RawBlockNode(o[p-2],o[p-1],o[p],this._$);break;case 10:this.$=new r.MustacheNode(o[p-1],null,"","",this._$);break;case 11:this.$=r.prepareBlock(o[p-3],o[p-2],o[p-1],o[p],!1,this._$);break;case 12:this.$=r.prepareBlock(o[p-3],o[p-2],o[p-1],o[p],!0,this._$);break;case 13:this.$=new r.MustacheNode(o[p-1],null,o[p-2],r.stripFlags(o[p-2],o[p]),this._$);break;case 14:this.$=new r.MustacheNode(o[p-1],null,o[p-2],r.stripFlags(o[p-2],o[p]),this._$);break;case 15:this.$={strip:r.stripFlags(o[p-1],o[p-1]),program:o[p]};break;case 16:this.$={path:o[p-1],strip:r.stripFlags(o[p-2],o[p])};break;case 17:this.$=new r.MustacheNode(o[p-1],null,o[p-2],r.stripFlags(o[p-2],o[p]),this._$);break;case 18:this.$=new r.MustacheNode(o[p-1],null,o[p-2],r.stripFlags(o[p-2],o[p]),this._$);break;case 19:this.$=new r.PartialNode(o[p-3],o[p-2],o[p-1],r.stripFlags(o[p-4],o[p]),this._$);break;case 20:this.$=new r.PartialNode(o[p-2],void 0,o[p-1],r.stripFlags(o[p-3],o[p]),this._$);break;case 21:this.$=new r.SexprNode([o[p-2]].concat(o[p-1]),o[p],this._$);break;case 22:this.$=new r.SexprNode([o[p]],null,this._$);break;case 23:this.$=o[p];break;case 24:this.$=new r.StringNode(o[p],this._$);break;case 25:this.$=new r.NumberNode(o[p],this._$);break;case 26:this.$=new r.BooleanNode(o[p],this._$);break;case 27:this.$=o[p];break;case 28:o[p-1].isHelper=!0,this.$=o[p-1];break;case 29:this.$=new r.HashNode(o[p],this._$);break;case 30:this.$=[o[p-2],o[p]];break;case 31:this.$=new r.PartialNameNode(o[p],this._$);break;case 32:this.$=new r.PartialNameNode(new r.StringNode(o[p],this._$),this._$);break;case 33:this.$=new r.PartialNameNode(new r.NumberNode(o[p],this._$));break;case 34:this.$=new r.DataNode(o[p],this._$);break;case 35:this.$=new r.IdNode(o[p],this._$);break;case 36:o[p-2].push({part:o[p],separator:o[p-1]}),this.$=o[p-2];break;case 37:this.$=[{part:o[p]}];break;case 38:this.$=[];break;case 39:o[p-1].push(o[p]);break;case 48:this.$=[];break;case 49:o[p-1].push(o[p]);break;case 52:this.$=[o[p]];break;case 53:o[p-1].push(o[p]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(i,a){throw new Error(i)},parse:function(i){var a=this,l=[0],r=[null],c=[],o=this.table,u="",p=0,k=0,R=0,_=2,Rn=1;this.lexer.setInput(i),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var x=this.lexer.yylloc;c.push(x);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function rn(y){l.length=l.length-2*y,r.length=r.length-y,c.length=c.length-y}function Ue(){var y;return y=a.lexer.lex()||1,typeof y!="number"&&(y=a.symbols_[y]||y),y}for(var g,ln,D,S,Gt,on,O={},z,w,On,K;;){if(D=l[l.length-1],this.defaultActions[D]?S=this.defaultActions[D]:((g===null||typeof g>"u")&&(g=Ue()),S=o[D]&&o[D][g]),typeof S>"u"||!S.length||!S[0]){var pn="";if(!R){K=[];for(z in o[D])this.terminals_[z]&&z>2&&K.push("'"+this.terminals_[z]+"'");this.lexer.showPosition?pn="Parse error on line "+(p+1)+`:
`+this.lexer.showPosition()+`
Expecting `+K.join(", ")+", got '"+(this.terminals_[g]||g)+"'":pn="Parse error on line "+(p+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(pn,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:x,expected:K})}}if(S[0]instanceof Array&&S.length>1)throw new Error("Parse Error: multiple actions possible at state: "+D+", token: "+g);switch(S[0]){case 1:l.push(g),r.push(this.lexer.yytext),c.push(this.lexer.yylloc),l.push(S[1]),g=null,ln?(g=ln,ln=null):(k=this.lexer.yyleng,u=this.lexer.yytext,p=this.lexer.yylineno,x=this.lexer.yylloc,R>0&&R--);break;case 2:if(w=this.productions_[S[1]][1],O.$=r[r.length-w],O._$={first_line:c[c.length-(w||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(w||1)].first_column,last_column:c[c.length-1].last_column},E&&(O._$.range=[c[c.length-(w||1)].range[0],c[c.length-1].range[1]]),on=this.performAction.call(O,u,k,p,this.yy,S[1],r,c),typeof on<"u")return on;w&&(l=l.slice(0,-1*w*2),r=r.slice(0,-1*w),c=c.slice(0,-1*w)),l.push(this.productions_[S[1]][0]),r.push(O.$),c.push(O._$),On=o[l[l.length-2]][l[l.length-1]],l.push(On);break;case 3:return!0}}return!0}},e=(function(){var s={EOF:1,parseError:function(a,l){if(this.yy.parser)this.yy.parser.parseError(a,l);else throw new Error(a)},setInput:function(i){return this._input=i,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var a=i.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var a=i.length,l=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a-1),this.offset-=a;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===r.length?this.yylloc.first_column:0)+r[r.length-l.length].length-l[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-a]),this},more:function(){return this._more=!0,this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),a=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+a+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,a,l,r,c,o;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),p=0;p<u.length&&(l=this._input.match(this.rules[u[p]]),!(l&&(!a||l[0].length>a[0].length)&&(a=l,r=p,!this.options.flex)));p++);return a?(o=a[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],i=this.performAction.call(this,this.yy,this,u[r],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return typeof a<"u"?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return s.options={},s.performAction=function(a,l,r,c){function o(p,k){return l.yytext=l.yytext.substr(p,l.yyleng-k)}var u=c;switch(r){case 0:if(l.yytext.slice(-2)==="\\\\"?(o(0,1),this.begin("mu")):l.yytext.slice(-1)==="\\"?(o(0,1),this.begin("emu")):this.begin("mu"),l.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return l.yytext=l.yytext.substr(5,l.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return o(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return o(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return l.yytext=o(1,2).replace(/\\"/g,'"'),42;break;case 30:return l.yytext=o(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return l.yytext=o(1,2),50;break;case 37:return"INVALID";case 38:return 5}},s.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],s.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},s})();n.lexer=e;function t(){this.yy={}}return t.prototype=n,n.Parser=t,new t})();ge.default=St});var ke=m(en=>{"use strict";h();var bt=N().default;function yt(n,e){return{left:n.charAt(2)==="~",right:e.charAt(e.length-3)==="~"}}en.stripFlags=yt;function xt(n,e,t,s,i,a){if(n.sexpr.id.original!==s.path.original)throw new bt(n.sexpr.id.original+" doesn't match "+s.path.original,n);var l=t&&t.program,r={left:n.strip.left,right:s.strip.right,openStandalone:Pn(e.statements),closeStandalone:En((l||e).statements)};if(n.strip.right&&M(e.statements,null,!0),l){var c=t.strip;c.left&&A(e.statements,null,!0),c.right&&M(l.statements,null,!0),s.strip.left&&A(l.statements,null,!0),En(e.statements)&&Pn(l.statements)&&(A(e.statements),M(l.statements))}else s.strip.left&&A(e.statements,null,!0);return i?new this.BlockNode(n,l,e,r,a):new this.BlockNode(n,e,l,r,a)}en.prepareBlock=xt;function wt(n,e){for(var t=0,s=n.length;t<s;t++){var i=n[t],a=i.strip;if(a){var l=En(n,t,e,i.type==="partial"),r=Pn(n,t,e),c=a.openStandalone&&l,o=a.closeStandalone&&r,u=a.inlineStandalone&&l&&r;a.right&&M(n,t,!0),a.left&&A(n,t,!0),u&&(M(n,t),A(n,t)&&i.type==="partial"&&(i.indent=/([ \t]+$)/.exec(n[t-1].original)?RegExp.$1:"")),c&&(M((i.program||i.inverse).statements),A(n,t)),o&&(M(n,t),A((i.inverse||i.program).statements))}}return n}en.prepareProgram=wt;function En(n,e,t){e===void 0&&(e=n.length);var s=n[e-1],i=n[e-2];if(!s)return t;if(s.type==="content")return(i||!t?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(s.original)}function Pn(n,e,t){e===void 0&&(e=-1);var s=n[e+1],i=n[e+2];if(!s)return t;if(s.type==="content")return(i||!t?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(s.original)}function M(n,e,t){var s=n[e==null?0:e+1];if(!(!s||s.type!=="content"||!t&&s.rightStripped)){var i=s.string;s.string=s.string.replace(t?/^\s+/:/^[ \t]*\r?\n?/,""),s.rightStripped=s.string!==i}}function A(n,e,t){var s=n[e==null?n.length-1:e-1];if(!(!s||s.type!=="content"||!t&&s.leftStripped)){var i=s.string;return s.string=s.string.replace(t?/\s+$/:/[ \t]+$/,""),s.leftStripped=s.string!==i,s.leftStripped}}});var An=m(Cn=>{"use strict";h();var Nn=ve().default,Se=wn().default,Et=ke(),Pt=F().extend;Cn.parser=Nn;var be={};Pt(be,Et,Se);function Nt(n){return n.constructor===Se.ProgramNode?n:(Nn.yy=be,Nn.parse(n))}Cn.parse=Nt});var sn=m(tn=>{"use strict";h();var Dn=N().default,ye=F().isArray,Ct=[].slice;function _n(){}tn.Compiler=_n;_n.prototype={compiler:_n,equals:function(n){var e=this.opcodes.length;if(n.opcodes.length!==e)return!1;for(var t=0;t<e;t++){var s=this.opcodes[t],i=n.opcodes[t];if(s.opcode!==i.opcode||!xe(s.args,i.args))return!1}for(e=this.children.length,t=0;t<e;t++)if(!this.children[t].equals(n.children[t]))return!1;return!0},guid:0,compile:function(n,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds;var t=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},t)for(var s in t)this.options.knownHelpers[s]=t[s];return this.accept(n)},accept:function(n){return this[n.type](n)},program:function(n){for(var e=n.statements,t=0,s=e.length;t<s;t++)this.accept(e[t]);return this.isSimple=s===1,this.depths.list=this.depths.list.sort(function(i,a){return i-a}),this},compileProgram:function(n){var e=new this.compiler().compile(n,this.options),t=this.guid++,s;this.usePartial=this.usePartial||e.usePartial,this.children[t]=e;for(var i=0,a=e.depths.list.length;i<a;i++)s=e.depths.list[i],!(s<2)&&this.addDepth(s-1);return t},block:function(n){var e=n.mustache,t=n.program,s=n.inverse;t&&(t=this.compileProgram(t)),s&&(s=this.compileProgram(s));var i=e.sexpr,a=this.classifySexpr(i);a==="helper"?this.helperSexpr(i,t,s):a==="simple"?(this.simpleSexpr(i),this.opcode("pushProgram",t),this.opcode("pushProgram",s),this.opcode("emptyHash"),this.opcode("blockValue",i.id.original)):(this.ambiguousSexpr(i,t,s),this.opcode("pushProgram",t),this.opcode("pushProgram",s),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(n){var e=n.pairs,t,s;for(this.opcode("pushHash"),t=0,s=e.length;t<s;t++)this.pushParam(e[t][1]);for(;t--;)this.opcode("assignToHash",e[t][0]);this.opcode("popHash")},partial:function(n){var e=n.partialName;this.usePartial=!0,n.hash?this.accept(n.hash):this.opcode("push","undefined"),n.context?this.accept(n.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",e.name,n.indent||""),this.opcode("append")},content:function(n){n.string&&this.opcode("appendContent",n.string)},mustache:function(n){this.sexpr(n.sexpr),n.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(n,e,t){var s=n.id,i=s.parts[0],a=e!=null||t!=null;this.opcode("getContext",s.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",t),this.ID(s),this.opcode("invokeAmbiguous",i,a)},simpleSexpr:function(n){var e=n.id;e.type==="DATA"?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(n,e,t){var s=this.setupFullMustacheParams(n,e,t),i=n.id,a=i.parts[0];if(this.options.knownHelpers[a])this.opcode("invokeKnownHelper",s.length,a);else{if(this.options.knownHelpersOnly)throw new Dn("You specified knownHelpersOnly, but used the unknown helper "+a,n);i.falsy=!0,this.ID(i),this.opcode("invokeHelper",s.length,i.original,i.isSimple)}},sexpr:function(n){var e=this.classifySexpr(n);e==="simple"?this.simpleSexpr(n):e==="helper"?this.helperSexpr(n):this.ambiguousSexpr(n)},ID:function(n){this.addDepth(n.depth),this.opcode("getContext",n.depth);var e=n.parts[0];e?this.opcode("lookupOnContext",n.parts,n.falsy,n.isScoped):this.opcode("pushContext")},DATA:function(n){this.options.data=!0,this.opcode("lookupData",n.id.depth,n.id.parts)},STRING:function(n){this.opcode("pushString",n.string)},NUMBER:function(n){this.opcode("pushLiteral",n.number)},BOOLEAN:function(n){this.opcode("pushLiteral",n.bool)},comment:function(){},opcode:function(n){this.opcodes.push({opcode:n,args:Ct.call(arguments,1)})},addDepth:function(n){n!==0&&(this.depths[n]||(this.depths[n]=!0,this.depths.list.push(n)))},classifySexpr:function(n){var e=n.isHelper,t=n.eligibleHelper,s=this.options;if(t&&!e){var i=n.id.parts[0];s.knownHelpers[i]?e=!0:s.knownHelpersOnly&&(t=!1)}return e?"helper":t?"ambiguous":"simple"},pushParams:function(n){for(var e=0,t=n.length;e<t;e++)this.pushParam(n[e])},pushParam:function(n){this.stringParams?(n.depth&&this.addDepth(n.depth),this.opcode("getContext",n.depth||0),this.opcode("pushStringParam",n.stringModeValue,n.type),n.type==="sexpr"&&this.sexpr(n)):(this.trackIds&&this.opcode("pushId",n.type,n.idName||n.stringModeValue),this.accept(n))},setupFullMustacheParams:function(n,e,t){var s=n.params;return this.pushParams(s),this.opcode("pushProgram",e),this.opcode("pushProgram",t),n.hash?this.hash(n.hash):this.opcode("emptyHash"),s}};function At(n,e,t){if(n==null||typeof n!="string"&&n.constructor!==t.AST.ProgramNode)throw new Dn("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+n);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var s=t.parse(n),i=new t.Compiler().compile(s,e);return new t.JavaScriptCompiler().compile(i,e)}tn.precompile=At;function _t(n,e,t){if(n==null||typeof n!="string"&&n.constructor!==t.AST.ProgramNode)throw new Dn("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+n);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var s;function i(){var l=t.parse(n),r=new t.Compiler().compile(l,e),c=new t.JavaScriptCompiler().compile(r,e,void 0,!0);return t.template(c)}var a=function(l,r){return s||(s=i()),s.call(this,l,r)};return a._setup=function(l){return s||(s=i()),s._setup(l)},a._child=function(l,r,c){return s||(s=i()),s._child(l,r,c)},a}tn.compile=_t;function xe(n,e){if(n===e)return!0;if(ye(n)&&ye(e)&&n.length===e.length){for(var t=0;t<n.length;t++)if(!xe(n[t],e[t]))return!1;return!0}}});var Ne=m(Pe=>{"use strict";h();var Dt=I().COMPILER_REVISION,It=I().REVISION_CHANGES,In=N().default;function G(n){this.value=n}function B(){}B.prototype={nameLookup:function(n,e){return B.isValidJavaScriptVariableName(e)?n+"."+e:n+"['"+e+"']"},depthedLookup:function(n){return this.aliases.lookup="this.lookup",'lookup(depths, "'+n+'")'},compilerInfo:function(){var n=Dt,e=It[n];return[n,e]},appendToBuffer:function(n){return this.environment.isSimple?"return "+n+";":{appendToBuffer:!0,content:n,toString:function(){return"buffer += "+n+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(n,e,t,s){this.environment=n,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!s,this.name=this.environment.name,this.isChild=!!t,this.context=t||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(n,e),this.useDepths=this.useDepths||n.depths.list.length||this.options.compat;var i=n.opcodes,a,l,r;for(l=0,r=i.length;l<r;l++)a=i[l],this[a.opcode].apply(this,a.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new In("Compile completed with content left on stack");var c=this.createFunctionContext(s);if(this.isChild)return c;var o={compiler:this.compilerInfo(),main:c},u=this.context.programs;for(l=0,r=u.length;l<r;l++)u[l]&&(o[l]=u[l]);return this.environment.usePartial&&(o.usePartial=!0),this.options.data&&(o.useData=!0),this.useDepths&&(o.useDepths=!0),this.options.compat&&(o.compat=!0),s||(o.compiler=JSON.stringify(o.compiler),o=this.objectLiteral(o)),o},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(n){var e="",t=this.stackVars.concat(this.registers.list);t.length>0&&(e+=", "+t.join(", "));for(var s in this.aliases)this.aliases.hasOwnProperty(s)&&(e+=", "+s+"="+this.aliases[s]);var i=["depth0","helpers","partials","data"];this.useDepths&&i.push("depths");var a=this.mergeSource(e);return n?(i.push(a),Function.apply(this,i)):"function("+i.join(",")+`) {
  `+a+"}"},mergeSource:function(n){for(var e="",t,s=!this.forceBuffer,i,a=0,l=this.source.length;a<l;a++){var r=this.source[a];r.appendToBuffer?t?t=t+`
    + `+r.content:t=r.content:(t&&(e?e+="buffer += "+t+`;
  `:(i=!0,e=t+`;
  `),t=void 0),e+=r+`
  `,this.environment.isSimple||(s=!1))}return s?(t||!e)&&(e+="return "+(t||'""')+`;
`):(n+=", buffer = "+(i?"":this.initializeBuffer()),t?e+="return buffer + "+t+`;
`:e+=`return buffer;
`),n&&(e="var "+n.substring(2)+(i?"":`;
  `)+e),e},blockValue:function(n){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams(n,0,e);var t=this.popStack();e.splice(1,0,t),this.push("blockHelperMissing.call("+e.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var n=[this.contextName(0)];this.setupParams("",0,n,!0),this.flushInline();var e=this.topStack();n.splice(1,0,e),this.pushSource("if (!"+this.lastHelper+") { "+e+" = blockHelperMissing.call("+n.join(", ")+"); }")},appendContent:function(n){this.pendingContent&&(n=this.pendingContent+n),this.pendingContent=n},append:function(){this.flushInline();var n=this.popStack();this.pushSource("if ("+n+" != null) { "+this.appendToBuffer(n)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(n){this.lastContext=n},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(n,e,t){var s=0,i=n.length;for(!t&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(n[s++])):this.pushContext();s<i;s++)this.replaceStack(function(a){var l=this.nameLookup(a,n[s],"context");return e?" && "+l:" != null ? "+l+" : "+a})},lookupData:function(n,e){n?this.pushStackLiteral("this.data(data, "+n+")"):this.pushStackLiteral("data");for(var t=e.length,s=0;s<t;s++)this.replaceStack(function(i){return" && "+this.nameLookup(i,e[s],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(n,e){this.pushContext(),this.pushString(e),e!=="sexpr"&&(typeof n=="string"?this.pushString(n):this.pushStackLiteral(n))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var n=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+n.ids.join(",")+"}"),this.stringParams&&(this.push("{"+n.contexts.join(",")+"}"),this.push("{"+n.types.join(",")+"}")),this.push(`{
    `+n.values.join(`,
    `)+`
  }`)},pushString:function(n){this.pushStackLiteral(this.quotedString(n))},push:function(n){return this.inlineStack.push(n),n},pushLiteral:function(n){this.pushStackLiteral(n)},pushProgram:function(n){n!=null?this.pushStackLiteral(this.programExpression(n)):this.pushStackLiteral(null)},invokeHelper:function(n,e,t){this.aliases.helperMissing="helpers.helperMissing";var s=this.popStack(),i=this.setupHelper(n,e),a=(t?i.name+" || ":"")+s+" || helperMissing";this.push("(("+a+").call("+i.callParams+"))")},invokeKnownHelper:function(n,e){var t=this.setupHelper(n,e);this.push(t.name+".call("+t.callParams+")")},invokeAmbiguous:function(n,e){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var t=this.popStack();this.emptyHash();var s=this.setupHelper(0,n,e),i=this.lastHelper=this.nameLookup("helpers",n,"helper");this.push("((helper = (helper = "+i+" || "+t+") != null ? helper : helperMissing"+(s.paramsInit?"),("+s.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+s.callParams+") : helper))")},invokePartial:function(n,e){var t=[this.nameLookup("partials",n,"partial"),"'"+e+"'","'"+n+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?t.push("data"):this.options.compat&&t.push("undefined"),this.options.compat&&t.push("depths"),this.push("this.invokePartial("+t.join(", ")+")")},assignToHash:function(n){var e=this.popStack(),t,s,i;this.trackIds&&(i=this.popStack()),this.stringParams&&(s=this.popStack(),t=this.popStack());var a=this.hash;t&&a.contexts.push("'"+n+"': "+t),s&&a.types.push("'"+n+"': "+s),i&&a.ids.push("'"+n+"': "+i),a.values.push("'"+n+"': ("+e+")")},pushId:function(n,e){n==="ID"||n==="DATA"?this.pushString(e):n==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:B,compileChildren:function(n,e){for(var t=n.children,s,i,a=0,l=t.length;a<l;a++){s=t[a],i=new this.compiler;var r=this.matchExistingProgram(s);r==null?(this.context.programs.push(""),r=this.context.programs.length,s.index=r,s.name="program"+r,this.context.programs[r]=i.compile(s,e,this.context,!this.precompile),this.context.environments[r]=s,this.useDepths=this.useDepths||i.useDepths):(s.index=r,s.name="program"+r)}},matchExistingProgram:function(n){for(var e=0,t=this.context.environments.length;e<t;e++){var s=this.context.environments[e];if(s&&s.equals(n))return e}},programExpression:function(n){var e=this.environment.children[n],t=e.depths.list,s=this.useDepths,i,a=[e.index,"data"];return s&&a.push("depths"),"this.program("+a.join(", ")+")"},useRegister:function(n){this.registers[n]||(this.registers[n]=!0,this.registers.list.push(n))},pushStackLiteral:function(n){return this.push(new G(n))},pushSource:function(n){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),n&&this.source.push(n)},pushStack:function(n){this.flushInline();var e=this.incrStack();return this.pushSource(e+" = "+n+";"),this.compileStack.push(e),e},replaceStack:function(n){var e="",t=this.isInline(),s,i,a;if(!this.isInline())throw new In("replaceStack on non-inline");var l=this.popStack(!0);if(l instanceof G)e=s=l.value,a=!0;else{i=!this.stackSlot;var r=i?this.incrStack():this.topStackName();e="("+this.push(r)+" = "+l+")",s=this.topStack()}var c=n.call(this,s);a||this.popStack(),i&&this.stackSlot--,this.push("("+e+c+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var n=this.inlineStack;if(n.length){this.inlineStack=[];for(var e=0,t=n.length;e<t;e++){var s=n[e];s instanceof G?this.compileStack.push(s):this.pushStack(s)}}},isInline:function(){return this.inlineStack.length},popStack:function(n){var e=this.isInline(),t=(e?this.inlineStack:this.compileStack).pop();if(!n&&t instanceof G)return t.value;if(!e){if(!this.stackSlot)throw new In("Invalid stack pop");this.stackSlot--}return t},topStack:function(){var n=this.isInline()?this.inlineStack:this.compileStack,e=n[n.length-1];return e instanceof G?e.value:e},contextName:function(n){return this.useDepths&&n?"depths["+n+"]":"depth"+n},quotedString:function(n){return'"'+n.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(n){var e=[];for(var t in n)n.hasOwnProperty(t)&&e.push(this.quotedString(t)+":"+n[t]);return"{"+e.join(",")+"}"},setupHelper:function(n,e,t){var s=[],i=this.setupParams(e,n,s,t),a=this.nameLookup("helpers",e,"helper");return{params:s,paramsInit:i,name:a,callParams:[this.contextName(0)].concat(s).join(", ")}},setupOptions:function(n,e,t){var s={},i=[],a=[],l=[],r,c,o;s.name=this.quotedString(n),s.hash=this.popStack(),this.trackIds&&(s.hashIds=this.popStack()),this.stringParams&&(s.hashTypes=this.popStack(),s.hashContexts=this.popStack()),c=this.popStack(),o=this.popStack(),(o||c)&&(o||(o="this.noop"),c||(c="this.noop"),s.fn=o,s.inverse=c);for(var u=e;u--;)r=this.popStack(),t[u]=r,this.trackIds&&(l[u]=this.popStack()),this.stringParams&&(a[u]=this.popStack(),i[u]=this.popStack());return this.trackIds&&(s.ids="["+l.join(",")+"]"),this.stringParams&&(s.types="["+a.join(",")+"]",s.contexts="["+i.join(",")+"]"),this.options.data&&(s.data="data"),s},setupParams:function(n,e,t,s){var i=this.objectLiteral(this.setupOptions(n,e,t));return s?(this.useRegister("options"),t.push("options"),"options="+i):(t.push(i),"")}};var we="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),Lt=B.RESERVED_WORDS={};for(an=0,Ee=we.length;an<Ee;an++)Lt[we[an]]=!0;var an,Ee;B.isValidJavaScriptVariableName=function(n){return!B.RESERVED_WORDS[n]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(n)};Pe.default=B});var _e=m(Ae=>{"use strict";h();var q=de().default,Mt=wn().default,Bt=An().parser,Ht=An().parse,Rt=sn().Compiler,Ot=sn().compile,Tt=sn().precompile,Ft=Ne().default,Vt=q.create,Ce=function(){var n=Vt();return n.compile=function(e,t){return Ot(e,t,n)},n.precompile=function(e,t){return Tt(e,t,n)},n.AST=Mt,n.Compiler=Rt,n.JavaScriptCompiler=Ft,n.Parser=Bt,n.parse=Ht,n};q=Ce();q.create=Ce;q.default=q;Ae.default=q});var Mn=m(De=>{"use strict";h();function Ln(){}Ln.prototype={constructor:Ln,accept:function(n){return this[n.type](n)}};De.default=Ln});var Ie=m(Bn=>{"use strict";h();var qt=Mn().default;function Ut(n){return new f().accept(n)}Bn.print=Ut;function f(){this.padding=0}Bn.PrintVisitor=f;f.prototype=new qt;f.prototype.pad=function(n){for(var e="",t=0,s=this.padding;t<s;t++)e=e+"  ";return e=e+n+`
`,e};f.prototype.program=function(n){var e="",t=n.statements,s,i;for(s=0,i=t.length;s<i;s++)e=e+this.accept(t[s]);return this.padding--,e};f.prototype.block=function(n){var e="";return e=e+this.pad("BLOCK:"),this.padding++,e=e+this.accept(n.mustache),n.program&&(e=e+this.pad("PROGRAM:"),this.padding++,e=e+this.accept(n.program),this.padding--),n.inverse&&(n.program&&this.padding++,e=e+this.pad("{{^}}"),this.padding++,e=e+this.accept(n.inverse),this.padding--,n.program&&this.padding--),this.padding--,e};f.prototype.sexpr=function(n){for(var e=n.params,t=[],s,i=0,a=e.length;i<a;i++)t.push(this.accept(e[i]));return e="["+t.join(", ")+"]",s=n.hash?" "+this.accept(n.hash):"",this.accept(n.id)+" "+e+s};f.prototype.mustache=function(n){return this.pad("{{ "+this.accept(n.sexpr)+" }}")};f.prototype.partial=function(n){var e=this.accept(n.partialName);return n.context&&(e+=" "+this.accept(n.context)),n.hash&&(e+=" "+this.accept(n.hash)),this.pad("{{> "+e+" }}")};f.prototype.hash=function(n){for(var e=n.pairs,t=[],s,i,a=0,l=e.length;a<l;a++)s=e[a][0],i=this.accept(e[a][1]),t.push(s+"="+i);return"HASH{"+t.join(", ")+"}"};f.prototype.STRING=function(n){return'"'+n.string+'"'};f.prototype.NUMBER=function(n){return"NUMBER{"+n.number+"}"};f.prototype.BOOLEAN=function(n){return"BOOLEAN{"+n.bool+"}"};f.prototype.ID=function(n){var e=n.parts.join("/");return n.parts.length>1?"PATH:"+e:"ID:"+e};f.prototype.PARTIAL_NAME=function(n){return"PARTIAL:"+n.name};f.prototype.DATA=function(n){return"@"+this.accept(n.id)};f.prototype.content=function(n){return this.pad("CONTENT[ '"+n.string+"' ]")};f.prototype.comment=function(n){return this.pad("{{! '"+n.comment+"' }}")}});var Be=m((Ns,Me)=>{h();var J=_e().default;J.Visitor=Mn().default;var Le=Ie();J.PrintVisitor=Le.PrintVisitor;J.print=Le.print;Me.exports=J;typeof U<"u"&&U.extensions&&(Hn=function(n,e){var t=(fn(),Vn(dn)),s=t.readFileSync(e,"utf8");n.exports=J.compile(s)},U.extensions[".handlebars"]=Hn,U.extensions[".hbs"]=Hn);var Hn});var Ve=m((_s,Fe)=>{h();var He=(fn(),Vn(dn)),Te=Be(),Re=3,Wt=["work","volunteer","awards","publications"];Te.registerHelper("smallDate",function(n){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=new Date(n);return e[t.getMonth()]+" "+t.getFullYear()});function Oe(n){return n!=null&&n instanceof Array&&n.length>0}function jt(n){if(Oe(n.education)&&n.education.forEach(function(r){if(Oe(r.courses)){for(var c=[],o=0,u=0;u<Re;u++)c.push([]);r.courses.forEach(function(p){if(c[k].push(p),k++,k>=Re)var k=0}),r.courses=c}}),Wt.forEach(function(r){n[r]!==void 0&&n[r].forEach(function(c){c.highlights===void 0&&(c.highlights=[]),c.summary&&(c.highlights.unshift(c.summary),delete c.summary)})}),n.work.length>0){var e={};n.work.forEach(function(r){if(!e.hasOwnProperty(r.company)){var c="";if(r.hasOwnProperty("description"))var c=r.description;e[r.company]={name:r.company,description:c,positions:[]}}e[r.company].positions.push(r)});var t=[];for(var s in e){var i=e[s];t.push(i)}n.work=t}var a=He.readFileSync("//style.css","utf-8"),l=He.readFileSync("//resume.hbs","utf-8");return Te.compile(l)({css:a,resume:n})}Fe.exports={render:jt}});h();var H=Qe(Ve(),1),qe=H.default??H,Is=qe.render??H.render,Ls=qe.pdfRenderOptions??H.pdfRenderOptions;export{Ls as pdfRenderOptions,Is as render};
