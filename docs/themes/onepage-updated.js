var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var tn=Object.create;var Y=Object.defineProperty;var en=Object.getOwnPropertyDescriptor;var nn=Object.getOwnPropertyNames;var sn=Object.getPrototypeOf,an=Object.prototype.hasOwnProperty;var V=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var ut=(t,e)=>()=>(t&&(e=t(t=0)),e);var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),zt=(t,e)=>{for(var n in e)Y(t,n,{get:e[n],enumerable:!0})},Wt=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of nn(e))!an.call(t,s)&&s!==n&&Y(t,s,{get:()=>e[s],enumerable:!(i=en(e,s))||i.enumerable});return t};var rn=(t,e,n)=>(n=t!=null?tn(sn(t)):{},Wt(e||!t||!t.__esModule?Y(n,"default",{value:t,enumerable:!0}):n,t)),dt=t=>Wt(Y({},"__esModule",{value:!0}),t);var p=ut(()=>{});var gt={};zt(gt,{createReadStream:()=>ee,createWriteStream:()=>ne,default:()=>on,existsSync:()=>Yt,lstatSync:()=>Zt,mkdirSync:()=>Qt,readFileSync:()=>Jt,readdirSync:()=>Kt,rmdirSync:()=>te,statSync:()=>vt,unlinkSync:()=>$t,writeFileSync:()=>Xt});function mt(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Gt(t){var e=mt(t);if(X[e]!==void 0)return X[e];for(var n=Object.keys(X),i=0;i<n.length;i++)if(e.endsWith("/"+n[i])||e===n[i])return X[n[i]]}function ft(t){var e=mt(t);if((e===""||e===".")&&F["."]!==void 0)return F["."];if(F[e]!==void 0)return F[e];for(var n=Object.keys(F),i=0;i<n.length;i++)if(e.endsWith("/"+n[i])||e===n[i])return F[n[i]]}var X,F,Jt,Kt,Yt,Xt,Qt,vt,Zt,$t,te,ee,ne,on,kt=ut(()=>{"use strict";p();X={"package.json":`{
    "name": "jsonresume-theme-onepage-updated",
    "version": "1.0.3",
    "description": "An update of the onepage theme (a compact theme for JSON Resume, designed for printing).",
    "author": "Daniel A. Rodr\xEDguez Caballero",
    "repository": {
        "type": "git",
        "url": "https://github.com/danielrodcaball/jsonresume-theme-onepage-updated"
    },
    "license": "MIT",
    "dependencies": {
        "handlebars": "^2.0.0-alpha.4"
    }
}`,"partials/awards.hbs":`{{#if resume.awards.length}}
<div class='sectionLine'></div>
<div id='awards' class="sectionBlock">
	<div class='sectionName'>
		<span>AWARDS</span>
	</div>
	<div class='sectionContent'>
		{{#each resume.awards}}
		<div class='blockHeader'>
			<span class='title'>
				{{#if title}}{{title}}{{/if}}
			</span>
			{{#if date}}
			<span class='date'>
				<span class='date'>{{date}}</span>
			</span>
			{{/if}}
		</div>
		{{#if awarder}}
			<div class="awarder">{{awarder}}</div>
		{{/if}}
		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
		{{#unless @last}}<div class='separator'></div>{{/unless}}
		{{/each}}
	</div>
</div>
{{/if}}`,"partials/basics.hbs":`{{#resume.basics}}
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
			<b>{{network}}:</b> <a href='{{url}}'>{{url}}</a>
		</span>
		{{#unless @last}}<span class='divider'>|</span>{{/unless}}
		{{/if}}
		{{/each}}
	</div>
	{{/if}}
</div>
{{/resume.basics}}

{{#if resume.basics.summary}}
<div class='sectionLine'></div>
<div id='summaryBlock' class="sectionBlock">
	<div class='sectionName'>
		<span>SUMMARY</span>
	</div>
	<div class='sectionContent'>
		<span>{{resume.basics.summary}}</span>
	</div>
</div>
{{/if}}`,"partials/certificates.hbs":`{{#if resume.certificates.length}}
<div class='sectionLine'></div>
<div id='certificates'>
	<div class='sectionName'>
		<span>CERTIFICATES</span>
	</div>
	<div class='sectionContent'>
		{{#each resume.certificates}}
		<div class='blockHeader'>
			<span class='title'>
				{{#if name}}{{name}}{{/if}}
			</span>
			{{#if issuer}} | <span class="issuer">{{issuer}}</span>{{/if}}
			{{#if date}}
			<span class='date'>
				<span class='date'>{{formatDate date}}</span>
			</span>
			{{/if}}
		</div>
		{{#if url}}
		<div class='url'>
			<a href='{{url}}'>{{url}}</a>
		</div>
		{{/if}}
		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
		{{#unless @last}}<div class='separator'></div>{{/unless}}
		{{/each}}
	</div>
</div>
{{/if}}`,"partials/education.hbs":`{{#if resume.education.length}}
<div class='sectionLine'></div>
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
				{{#if startDate}}{{formatDate startDate}}{{/if}} - {{#if endDate}}{{formatDate endDate}}{{else}}Present{{/if}}
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
{{/if}}`,"partials/interests.hbs":`{{#if resume.interests.length}}
<div class='sectionLine'></div>
<div id='interests' class="sectionBlock">
	<div class='sectionName'>
		<span>INTERESTS</span>
	</div>
	<div class='sectionContent'>
		{{#each resume.interests}}
		<span class='name'>{{name}}</span>
		<!--
      {{#if keywords.length}}
      --><span class='keywords'> <em>[
				{{#each keywords}}
				{{.}}
				<!--
        -->{{#unless @last}}, {{/unless}}
				{{/each}}
				]
			</em></span>
		<!--
      {{/if}}
      -->{{#unless @last}}<span>, </span>{{/unless}}
		{{/each}}
	</div>
</div>
{{/if}}`,"partials/languages.hbs":`{{#if resume.languages.length}}
<div class='sectionLine'></div>
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
</div>
{{/if}}`,"partials/projects.hbs":`{{#if resume.projects.length}}
<div class='sectionLine'></div>
<div id='projectsBlock' class="sectionBlock">
	<div class='sectionName'>
		<span>PROJECTS</span>
	</div>
	<div class='sectionContent'>
		{{#each resume.projects}}
		<div class="projectBlock">
			<div class='blockHeader'>
				<span class='title'>
					{{#if name}}{{name}}{{/if}}
				</span>
				{{#if entity}} | <span class="entity">{{entity}}</span>{{/if}}
				{{#if roles.length}} | <span class="roles">{{#each roles}}{{.}}{{#unless @last}},{{/unless}}{{/each}}</span>{{/if}}
				{{#if startDate}}
				<span class='date'>
					{{#if startDate}}{{formatDate startDate}}{{/if}} - {{#if endDate}}{{formatDate
					endDate}}{{else}}Present{{/if}}
				</span>
				{{/if}}
			</div>
			<div><a href='{{url}}'>{{url}}</a></div>
			{{#if description}}
			<div class="description">
				<p>{{description}}</p>
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
		</div>
		{{/each}}
	</div>
</div>
{{/if}}`,"partials/publications.hbs":`{{#if resume.publications.length}}
<div class='sectionLine'></div>
<div id='publications'>
	<div class='sectionName'>
		<span>PUBLICATIONS</span>
	</div>
	<div class='sectionContent'>
		{{#each resume.publications}}
		<div class='blockHeader'>
			<span class='title'>
				{{#if name}}{{name}}{{/if}}
			</span>
			{{#if releaseDate}}
			<span class='date'>
				<span class='releaseDate'>{{formatDate releaseDate}}</span>
			</span>
			{{/if}}
		</div>
		{{#if publisher}}
		<div class="publisher">{{publisher}}</div>
		{{/if}}
		{{#if url}}
		<div class='url'>
			<a href='{{url}}'>{{url}}</a>
		</div>
		{{/if}}
		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
		{{#unless @last}}<div class='separator'></div>{{/unless}}
		{{/each}}
	</div>
</div>
{{/if}}`,"partials/references.hbs":`{{#if resume.references.length}}
<div class='sectionLine'></div>
<div id="references">
	<div class='sectionName'>
		<span>REFERENCES</span>
	</div>
	<div class="sectionContent">
		{{#each resume.references}}
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
		{{/each}}
	</div>
</div>
{{/if}}`,"partials/skills.hbs":`{{#if resume.skills.length}}
<div class='sectionLine'></div>
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
			<span>{{#if text}}{{text}}{{/if}}{{#if comment}} <em>({{comment}})</em>{{/if}}{{#unless @last}},
				{{/unless}}</span>
			{{/each}}
			{{/if}}
		</div>
		{{/each}}
	</div>
</div>
{{/if}}`,"partials/volunteer.hbs":`{{#if resume.volunteer.length}}
<div class='sectionLine'></div>
<div id='volunteer' class="sectionBlock">
	<div class='sectionName'>
		<span>VOLUNTEERING</span>
	</div>
	<div class='sectionContent'>
		{{#each resume.volunteer}}
		<div class='blockHeader'>
			<span class='title'>{{#if organization}}{{organization}}{{/if}}{{#if position}} - {{position}}{{/if}}</span>
			{{#if startDate}}
			<span class='date'>
				{{#if startDate}}{{startDate}}{{/if}} &mdash; {{#if endDate}}{{endDate}}{{else}}Present{{/if}}
			</span>
			{{/if}}
			{{#if url}}
			<div class='url'><a href='{{url}}'>{{url}}</a></div>
			{{/if}}
			{{#if summary}}
			<div class="summary">
				<p>{{summary}}</p>
			</div>
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
{{/if}}`,"partials/work.hbs":`{{#if resume.work.length}}
<div class='sectionLine'></div>
<div id='workBlock' class="sectionBlock">
	<div class='sectionName'>
		<span>EXPERIENCE</span>
	</div>
	<div class='sectionContent'>
		{{#each resume.work}}
		<div class="jobBlock">
			<div class='blockHeader'>
				<span class='title'>{{#if name}}{{name}}{{/if}}</span>
				{{#if position}} | <span class="position">{{position}}</span>{{/if}}
				{{#if startDate}}
				<span class='date'>
					{{#if startDate}}{{formatDate startDate}}{{/if}} - {{#if endDate}}{{formatDate
					endDate}}{{else}}Present{{/if}}
				</span>
				{{/if}}
			</div>
			<div><a href='{{url}}'>{{url}}</a></div>
			{{#if summary}}
			<div class="summary">
				<p>{{summary}}</p>
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
		</div>
		{{/each}}
	</div>
</div>
{{/if}}`,"public/index.html":`<!doctype html>
<html>
	<head>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">
	
	<title>Richard Hendrik</title>

	<style>
	body {
    background: #EEEEEE;
    font: 13px "Times New Roman", Times, sans-serif;
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
    font-size: 13px;
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
    page-break-inside: avoid;
}

.description {
    text-align: justify;
}

blockquote.reference {
    margin: 0;
    margin-bottom: 1em;
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
        flex-direction: column;
    }
    .sectionContent {
        width: 100%;
    }
    .sectionContent .date {
        padding-right: 2em;
    }
    .sectionName {
        width: auto;
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
        background: #FFFFFF;
    }
    #resume {
        margin: 0 auto;
        max-width: 600px;
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
	
	<div id="resume">
		<div id='nameBlock' class='largeFont'>
			<span class='name'>
				Richard Hendrik,
			</span>
			<span class='label'>Software Developer</span>
		</div>
		<div id='basicsBlock' class='smallFont'>
			<div class='contactBlock'>
				<span class='email'>rhendriks@mail.com</span>
				<span class='divider'>|</span>
				<span class='phone'>(912) 555-4321</span>
				<span class='divider'>|</span>
				<span class='address'>
					San Francisco, California, US
				</span>
			</div>
			<div id='profilesBlock'>
				<span class='url'>
					<b>Gitplace:</b> <a href='https://gitplace.com/rhendricks'>https://gitplace.com/rhendricks</a>
				</span>
				<span class='divider'>|</span>
				<span class='url'>
					<b>LinkedIn:</b> <a href='https://linkedon.com/richardh'>https://linkedon.com/richardh</a>
				</span>
				
			</div>
		</div>
		
		<div class='sectionLine'></div>
		<div id='summaryBlock' class="sectionBlock">
			<div class='sectionName'>
				<span>SUMMARY</span>
			</div>
			<div class='sectionContent'>
				<span>Richard hails from Tulsa (https://en.wikipedia.org/wiki/Tulsa,_Oklahoma). Holds a bachelor&#x27;s degree from the University of Oklahoma and a master&#x27;s degree from Stanford University. (Go Sooners) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a length-limited conversation!</span>
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
						University of Stanford
					</span>
					<div class=''>
						Master  - Computer Science
					</div>
				</div>
				<div class='separator'></div>
				<div class='educationBlock'>
					<span class='title'>
						University of Oklahoma
					</span>
					<div class=''>
						Bachelor  - Information Technology
					</div>
				</div>
				
			</div>
		</div>
		<div class='sectionLine'></div>
		<div id='skills' class="sectionBlock">
			<div class='sectionName'>
				<span>SKILLS</span>
			</div>
			<div class='sectionContent'>
				<div class='skillBlock'>
					<span class='title'>Languages:</span>
					<span>Java</span>, 
					<span>Python</span>, 
					<span>Javascript</span>, 
					<span>Rust</span>, 
					<span>Golang</span>
				</div>
				<div class='skillBlock'>
					<span class='title'>Frameworks:</span>
					<span>Spring</span>, 
					<span>Django</span>, 
					<span>Express</span>
				</div>
				<div class='skillBlock'>
					<span class='title'>Tools:</span>
					<span>VS Code</span>, 
					<span>Intellij IDEA</span>
				</div>
				<div class='skillBlock'>
					<span class='title'>Technologies:</span>
					<span>Docker</span>, 
					<span>Kubernetes</span>, 
					<span>AWS</span>
				</div>
				<div class='skillBlock'>
					<span class='title'>Other:</span>
					<span>Open source</span>, 
					<span>XP</span>
				</div>
			</div>
		</div>
		<div class='sectionLine'></div>
		<div id='workBlock' class="sectionBlock">
			<div class='sectionName'>
				<span>EXPERIENCE</span>
			</div>
			<div class='sectionContent'>
				<div class="jobBlock">
					<div class='blockHeader'>
						<span class='title'>Facebook</span>
						 | <span class="position">Principal Software Engineer</span>
						<span class='date'>
							Nov 17, 2016 - Present
						</span>
					</div>
					<div><a href='http://facebook.com'>http://facebook.com</a></div>
					<div class="summary">
						<p>Facebook is an American social media conglomerate corporation based in Menlo Park, California. It was founded by Mark Zuckerberg, along with his fellow roommates and students at Harvard College, who were Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes, originally as TheFacebook.com\u2014today&#x27;s Facebook, a popular global social networking website</p>
					</div>
					<ul class='highlights'>
						<li>Vitae purus faucibus ornare suspendisse</li>
						<li>Ut enim blandit volutpat maecenas</li>
						<li>Volutpat blandit aliquam</li>
					</ul>
					<div class='separator'></div>
				</div>
				<div class="jobBlock">
					<div class='blockHeader'>
						<span class='title'>Google</span>
						 | <span class="position">Software Engineer Intern</span>
						<span class='date'>
							Sep 13, 2009 - Feb 13, 2010
						</span>
					</div>
					<div><a href='http://google.com'>http://google.com</a></div>
					<div class="summary">
						<p>Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the Big Five technology companies in the U.S. information technology industry, alongside Amazon, Facebook, Apple, and Microsoft.</p>
					</div>
					<ul class='highlights'>
						<li>Ut pharetra sit amet aliquam id diam</li>
						<li>Vitae congue eu consequat ac</li>
						<li>Cursus sit amet dictum sit amet</li>
					</ul>
					
				</div>
			</div>
		</div>
		<div class='sectionLine'></div>
		<div id='projectsBlock' class="sectionBlock">
			<div class='sectionName'>
				<span>PROJECTS</span>
			</div>
			<div class='sectionContent'>
				<div class="projectBlock">
					<div class='blockHeader'>
						<span class='title'>
							Node.js
						</span>
						
						 | <span class="roles">contributor,evangelist</span>
					</div>
					<div><a href='https://nodejs.org/'>https://nodejs.org/</a></div>
					<div class="description">
						<p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser.</p>
					</div>
					<ul class='highlights'>
						<li>Commodo elit at imperdiet dui</li>
						<li>Id volutpat lacus laoreet non</li>
						<li>Accumsan lacus vel facilisis</li>
					</ul>
					<div class='separator'></div>
				</div>
				<div class="projectBlock">
					<div class='blockHeader'>
						<span class='title'>
							Deno
						</span>
						
						 | <span class="roles">creator</span>
					</div>
					<div><a href='https://deno.land/'>https://deno.land/</a></div>
					<div class="description">
						<p>Deno is a runtime for JavaScript and TypeScript that is based on the V8 JavaScript engine and the Rust programming language. It was created by Ryan Dahl, original creator of Node.js, and is focused on productivity. It was announced by Dahl in 2018 during his talk &quot;10 Things I Regret About Node.js&quot;.</p>
					</div>
					<ul class='highlights'>
						<li>Vitae tempus quam pellentesque</li>
						<li>Dui accumsan sit amet nulla</li>
						<li>Ultrices vitae auctor eu augue</li>
						<li>Scelerisque felis imperdiet</li>
						<li>Pellentesque dignissim enim sit</li>
					</ul>
					
				</div>
			</div>
		</div>
		<div class='sectionLine'></div>
		<div id='certificates'>
			<div class='sectionName'>
				<span>CERTIFICATES</span>
			</div>
			<div class='sectionContent'>
				<div class='blockHeader'>
					<span class='title'>
						AWS Certified Solutions
		
		 Architect - Professional
					</span>
					 | <span class="issuer">Amazon Web Services</span>
				</div>
				<div class='url'>
					<a href='https://www.your-badge.com'>https://www.your-badge.com</a>
				</div>
				
			</div>
		</div>
		<div class='sectionLine'></div>
		<div id='awards' class="sectionBlock">
			<div class='sectionName'>
				<span>AWARDS</span>
			</div>
			<div class='sectionContent'>
				<div class='blockHeader'>
					<span class='title'>
						Website of the day
					</span>
					<span class='date'>
						<span class='date'>2014</span>
					</span>
				</div>
					<div class="awarder">Awwward</div>
				<div class="summary">
					<p>Received for my website domain.com</p>
				</div>
				<div class='separator'></div>
				<div class='blockHeader'>
					<span class='title'>
						Java Champion
					</span>
					<span class='date'>
						<span class='date'>2015</span>
					</span>
				</div>
					<div class="awarder">Oracle</div>
				<div class="summary">
					<p>Obtained thanks to my contributions 
		
		 to the Java community.</p>
				</div>
				
			</div>
		</div>
		<div class='sectionLine'></div>
		<div id='languages' class="sectionBlock">
			<div class='sectionName'>
				<span>LANGUAGES</span>
			</div>
			<div class='sectionContent'>
				<span class='language'>English</span>
				<span class='fluency'><em>(Native)</em></span>
				<span>,</span>
				<span class='language'>Russian</span>
				<span class='fluency'><em>(Professional)</em></span>
				
			</div>
		</div>
		<div class='sectionLine'></div>
		<div id='interests' class="sectionBlock">
			<div class='sectionName'>
				<span>INTERESTS</span>
			</div>
			<div class='sectionContent'>
				<span class='name'>Pixelart</span>
				<!--
		      --><span>, </span>
				<span class='name'>Open Source</span>
				<!--
		      --><span>, </span>
				<span class='name'>Gardening</span>
				<!--
		      --><span>, </span>
				<span class='name'>Writing</span>
				<!--
		      -->
			</div>
		</div>
		<div class='sectionLine'></div>
		<div id="references">
			<div class='sectionName'>
				<span>REFERENCES</span>
			</div>
			<div class="sectionContent">
				<blockquote class="reference">
					It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company.
				</blockquote>
				<div class="name">
					\u2014 Erlich Bachman
				</div>
			</div>
		</div>
	</body>
</html>
`,"resume.hbs":`<!doctype html>
<html>
	<head>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">
	
	<title>{{#resume.basics}}{{name}}{{/resume.basics}}</title>

	<style>
	{{{css}}}
	</style>
	
	</head>
	<body>
	
	<div id="resume">
		{{> basics }}
		{{> education }}
		{{> skills }}
		{{> work }}
		{{> publications }}
		{{> projects}}
		{{> certificates }}
		{{> awards }}
		{{> volunteer }}
		{{> languages }}
		{{> interests }}
		{{> references }}
	</body>
</html>
`,"style.css":`body {
    background: #EEEEEE;
    font: 13px "Times New Roman", Times, sans-serif;
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
    font-size: 13px;
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
    page-break-inside: avoid;
}

.description {
    text-align: justify;
}

blockquote.reference {
    margin: 0;
    margin-bottom: 1em;
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
        flex-direction: column;
    }
    .sectionContent {
        width: 100%;
    }
    .sectionContent .date {
        padding-right: 2em;
    }
    .sectionName {
        width: auto;
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
        background: #FFFFFF;
    }
    #resume {
        margin: 0 auto;
        max-width: 600px;
        padding: 0px 0px;
        border: 0px;
        background: #fff;
        box-shadow: none;
        -webkit-box-shadow: none;
    }
    a {
        color: black;
    }
}`},F={partials:["awards.hbs","basics.hbs","certificates.hbs","education.hbs","interests.hbs","languages.hbs","projects.hbs","publications.hbs","references.hbs","skills.hbs","volunteer.hbs","work.hbs"],public:["index.html"],".":["README.md","index.js","package.json","partials","public","resume.hbs","style.css"]};Jt=function(t,e){var n=Gt(t);return n!==void 0?n:""},Kt=function(t,e){var n=ft(t);return n===void 0&&(n=[]),e&&e.withFileTypes?n.map(function(i){var s=mt(t)+"/"+i,a=ft(s)!==void 0;return{name:i,isFile:function(){return!a},isDirectory:function(){return a}}}):n},Yt=function(t){return Gt(t)!==void 0||ft(t)!==void 0},Xt=function(){},Qt=function(){},vt=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Zt=vt,$t=function(){},te=function(){},ee=function(){return{pipe:function(t){return t},on:function(){return this}}},ne=function(){return{write:function(){},end:function(){},on:function(){return this}}},on={readFileSync:Jt,readdirSync:Kt,existsSync:Yt,writeFileSync:Xt,mkdirSync:Qt,statSync:vt,lstatSync:Zt,unlinkSync:$t,rmdirSync:te,createReadStream:ee,createWriteStream:ne}});var he={};zt(he,{basename:()=>Q,default:()=>ln,dirname:()=>bt,extname:()=>Z,isAbsolute:()=>re,join:()=>ie,normalize:()=>oe,parse:()=>ce,relative:()=>le,resolve:()=>se,sep:()=>ae});var ie,se,bt,Q,Z,ae,re,oe,le,ce,ln,pe=ut(()=>{"use strict";p();ie=function(){return[].slice.call(arguments).join("/")},se=function(){return[].slice.call(arguments).join("/")},bt=function(t){return t.split("/").slice(0,-1).join("/")},Q=function(t,e){var n=t.split("/").pop()||"";return e&&n.endsWith(e)?n.slice(0,-e.length):n},Z=function(t){var e=t.match(/\.[^.]+$/);return e?e[0]:""},ae="/",re=function(t){return t.charAt(0)==="/"},oe=function(t){return t},le=function(t,e){return e},ce=function(t){return{root:"",dir:bt(t),base:Q(t),ext:Z(t),name:Q(t,Z(t))}},ln={join:ie,resolve:se,dirname:bt,basename:Q,extname:Z,sep:ae,isAbsolute:re,normalize:oe,relative:le,parse:ce}});var yt=m(de=>{"use strict";p();function ue(t){this.string=t}ue.prototype.toString=function(){return""+this.string};de.default=ue});var M=m(N=>{"use strict";p();var cn=yt().default,hn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},pn=/[&<>"'`]/g,un=/[&<>"'`]/;function dn(t){return hn[t]}function fn(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}N.extend=fn;var St=Object.prototype.toString;N.toString=St;var $=function(t){return typeof t=="function"};$(/x/)&&($=function(t){return typeof t=="function"&&St.call(t)==="[object Function]"});var $;N.isFunction=$;var fe=Array.isArray||function(t){return t&&typeof t=="object"?St.call(t)==="[object Array]":!1};N.isArray=fe;function mn(t){return t instanceof cn?t.toString():t==null?"":t?(t=""+t,un.test(t)?t.replace(pn,dn):t):t+""}N.escapeExpression=mn;function vn(t){return!t&&t!==0?!0:!!(fe(t)&&t.length===0)}N.isEmpty=vn;function gn(t,e){return(t?t+".":"")+e}N.appendContextPath=gn});var P=m(ve=>{"use strict";p();var xt=["description","fileName","lineNumber","message","name","number","stack"];function me(t,e){var n;e&&e.firstLine&&(n=e.firstLine,t+=" - "+n+":"+e.firstColumn);for(var i=Error.prototype.constructor.call(this,t),s=0;s<xt.length;s++)this[xt[s]]=i[xt[s]];n&&(this.lineNumber=n,this.column=e.firstColumn)}me.prototype=new Error;ve.default=me});var L=m(C=>{"use strict";p();var b=M(),Et=P().default,kn="2.0.0";C.VERSION=kn;var bn=6;C.COMPILER_REVISION=bn;var yn={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};C.REVISION_CHANGES=yn;var ge=b.isArray,wt=b.isFunction,ke=b.toString,be="[object Object]";function Nt(t,e){this.helpers=t||{},this.partials=e||{},Sn(this)}C.HandlebarsEnvironment=Nt;Nt.prototype={constructor:Nt,logger:U,log:ye,registerHelper:function(t,e){if(ke.call(t)===be){if(e)throw new Et("Arg not supported with multiple helpers");b.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){ke.call(t)===be?b.extend(this.partials,t):this.partials[t]=e},unregisterPartial:function(t){delete this.partials[t]}};function Sn(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new Et("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(e,n){var i=n.inverse,s=n.fn;if(e===!0)return s(this);if(e===!1||e==null)return i(this);if(ge(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):i(this);if(n.data&&n.ids){var a=tt(n.data);a.contextPath=b.appendContextPath(n.data.contextPath,n.name),n={data:a}}return s(e,n)}),t.registerHelper("each",function(e,n){if(!n)throw new Et("Must pass iterator to #each");var i=n.fn,s=n.inverse,a=0,r="",o,h;if(n.data&&n.ids&&(h=b.appendContextPath(n.data.contextPath,n.ids[0])+"."),wt(e)&&(e=e.call(this)),n.data&&(o=tt(n.data)),e&&typeof e=="object")if(ge(e))for(var l=e.length;a<l;a++)o&&(o.index=a,o.first=a===0,o.last=a===e.length-1,h&&(o.contextPath=h+a)),r=r+i(e[a],{data:o});else for(var u in e)e.hasOwnProperty(u)&&(o&&(o.key=u,o.index=a,o.first=a===0,h&&(o.contextPath=h+u)),r=r+i(e[u],{data:o}),a++);return a===0&&(r=s(this)),r}),t.registerHelper("if",function(e,n){return wt(e)&&(e=e.call(this)),!n.hash.includeZero&&!e||b.isEmpty(e)?n.inverse(this):n.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),t.registerHelper("with",function(e,n){wt(e)&&(e=e.call(this));var i=n.fn;if(b.isEmpty(e))return n.inverse(this);if(n.data&&n.ids){var s=tt(n.data);s.contextPath=b.appendContextPath(n.data.contextPath,n.ids[0]),n={data:s}}return i(e,n)}),t.registerHelper("log",function(e,n){var i=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;t.log(i,e)}),t.registerHelper("lookup",function(e,n){return e&&e[n]})}var U={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(U.level<=t){var n=U.methodMap[t];typeof console<"u"&&console[n]&&console[n].call(console,e)}}};C.logger=U;var ye=U.log;C.log=ye;var tt=function(t){var e=b.extend({},t);return e._parent=t,e};C.createFrame=tt});var xe=m(q=>{"use strict";p();var Pt=M(),O=P().default,xn=L().COMPILER_REVISION,Se=L().REVISION_CHANGES,wn=L().createFrame;function En(t){var e=t&&t[0]||1,n=xn;if(e!==n)if(e<n){var i=Se[n],s=Se[e];throw new O("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+s+").")}else throw new O("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}q.checkRevision=En;function Nn(t,e){if(!e)throw new O("No environment passed to template");if(!t||!t.main)throw new O("Unknown template object: "+typeof t);e.VM.checkRevision(t.compiler);var n=function(a,r,o,h,l,u,c,w,H){l&&(h=Pt.extend({},h,l));var A=e.VM.invokePartial.call(this,a,o,h,u,c,w,H);if(A==null&&e.compile){var Vt={helpers:u,partials:c,data:w,depths:H};c[o]=e.compile(a,{data:w!==void 0,compat:t.compat},e),A=c[o](h,Vt)}if(A!=null){if(r){for(var S=A.split(`
`),E=0,lt=S.length;E<lt&&!(!S[E]&&E+1===lt);E++)S[E]=r+S[E];A=S.join(`
`)}return A}else throw new O("The partial "+o+" could not be compiled when running in runtime-only mode")},i={lookup:function(a,r){for(var o=a.length,h=0;h<o;h++)if(a[h]&&a[h][r]!=null)return a[h][r]},lambda:function(a,r){return typeof a=="function"?a.call(r):a},escapeExpression:Pt.escapeExpression,invokePartial:n,fn:function(a){return t[a]},programs:[],program:function(a,r,o){var h=this.programs[a],l=this.fn(a);return r||o?h=et(this,a,l,r,o):h||(h=this.programs[a]=et(this,a,l)),h},data:function(a,r){for(;a&&r--;)a=a._parent;return a},merge:function(a,r){var o=a||r;return a&&r&&a!==r&&(o=Pt.extend({},r,a)),o},noop:e.VM.noop,compilerInfo:t.compiler},s=function(a,r){r=r||{};var o=r.data;s._setup(r),!r.partial&&t.useData&&(o=_n(a,o));var h;return t.useDepths&&(h=r.depths?[a].concat(r.depths):[a]),t.main.call(i,a,i.helpers,i.partials,o,h)};return s.isTop=!0,s._setup=function(a){a.partial?(i.helpers=a.helpers,i.partials=a.partials):(i.helpers=i.merge(a.helpers,e.helpers),t.usePartial&&(i.partials=i.merge(a.partials,e.partials)))},s._child=function(a,r,o){if(t.useDepths&&!o)throw new O("must pass parent depths");return et(i,a,t[a],r,o)},s}q.template=Nn;function et(t,e,n,i,s){var a=function(r,o){return o=o||{},n.call(t,r,t.helpers,t.partials,o.data||i,s&&[r].concat(s))};return a.program=e,a.depth=s?s.length:0,a}q.program=et;function Pn(t,e,n,i,s,a,r){var o={partial:!0,helpers:i,partials:s,data:a,depths:r};if(t===void 0)throw new O("The partial "+e+" could not be found");if(t instanceof Function)return t(n,o)}q.invokePartial=Pn;function Cn(){return""}q.noop=Cn;function _n(t,e){return(!e||!("root"in e))&&(e=e?wn(e):{},e.root=t),e}});var Ce=m(Pe=>{"use strict";p();var we=L(),An=yt().default,In=P().default,Ct=M(),Ee=xe(),Ne=function(){var t=new we.HandlebarsEnvironment;return Ct.extend(t,we),t.SafeString=An,t.Exception=In,t.Utils=Ct,t.escapeExpression=Ct.escapeExpression,t.VM=Ee,t.template=function(e){return Ee.template(e,t)},t},nt=Ne();nt.create=Ne;nt.default=nt;Pe.default=nt});var _t=m(Ae=>{"use strict";p();var _e=P().default;function g(t){t=t||{},this.firstLine=t.first_line,this.firstColumn=t.first_column,this.lastColumn=t.last_column,this.lastLine=t.last_line}var z={ProgramNode:function(t,e,n){g.call(this,n),this.type="program",this.statements=t,this.strip=e},MustacheNode:function(t,e,n,i,s){if(g.call(this,s),this.type="mustache",this.strip=i,n!=null&&n.charAt){var a=n.charAt(3)||n.charAt(2);this.escaped=a!=="{"&&a!=="&"}else this.escaped=!!n;t instanceof z.SexprNode?this.sexpr=t:this.sexpr=new z.SexprNode(t,e),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(t,e,n){g.call(this,n),this.type="sexpr",this.hash=e;var i=this.id=t[0],s=this.params=t.slice(1);this.isHelper=!!(s.length||e),this.eligibleHelper=this.isHelper||i.isSimple},PartialNode:function(t,e,n,i,s){g.call(this,s),this.type="partial",this.partialName=t,this.context=e,this.hash=n,this.strip=i,this.strip.inlineStandalone=!0},BlockNode:function(t,e,n,i,s){g.call(this,s),this.type="block",this.mustache=t,this.program=e,this.inverse=n,this.strip=i,n&&!e&&(this.isInverse=!0)},RawBlockNode:function(t,e,n,i){if(g.call(this,i),t.sexpr.id.original!==n)throw new _e(t.sexpr.id.original+" doesn't match "+n,this);e=new z.ContentNode(e,i),this.type="block",this.mustache=t,this.program=new z.ProgramNode([e],{},i)},ContentNode:function(t,e){g.call(this,e),this.type="content",this.original=this.string=t},HashNode:function(t,e){g.call(this,e),this.type="hash",this.pairs=t},IdNode:function(t,e){g.call(this,e),this.type="ID";for(var n="",i=[],s=0,a="",r=0,o=t.length;r<o;r++){var h=t[r].part;if(n+=(t[r].separator||"")+h,h===".."||h==="."||h==="this"){if(i.length>0)throw new _e("Invalid path: "+n,this);h===".."?(s++,a+="../"):this.isScoped=!0}else i.push(h)}this.original=n,this.parts=i,this.string=i.join("."),this.depth=s,this.idName=a+this.string,this.isSimple=t.length===1&&!this.isScoped&&s===0,this.stringModeValue=this.string},PartialNameNode:function(t,e){g.call(this,e),this.type="PARTIAL_NAME",this.name=t.original},DataNode:function(t,e){g.call(this,e),this.type="DATA",this.id=t,this.stringModeValue=t.stringModeValue,this.idName="@"+t.stringModeValue},StringNode:function(t,e){g.call(this,e),this.type="STRING",this.original=this.string=this.stringModeValue=t},NumberNode:function(t,e){g.call(this,e),this.type="NUMBER",this.original=this.number=t,this.stringModeValue=Number(t)},BooleanNode:function(t,e){g.call(this,e),this.type="BOOLEAN",this.bool=t,this.stringModeValue=t==="true"},CommentNode:function(t,e){g.call(this,e),this.type="comment",this.comment=t,this.strip={inlineStandalone:!0}}};Ae.default=z});var Le=m(Ie=>{"use strict";p();var Ln=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(s,a,r,o,h,l,u){var c=l.length-1;switch(h){case 1:return o.prepareProgram(l[c-1].statements,!0),l[c-1];break;case 2:this.$=new o.ProgramNode(o.prepareProgram(l[c]),{},this._$);break;case 3:this.$=l[c];break;case 4:this.$=l[c];break;case 5:this.$=l[c];break;case 6:this.$=l[c];break;case 7:this.$=new o.ContentNode(l[c],this._$);break;case 8:this.$=new o.CommentNode(l[c],this._$);break;case 9:this.$=new o.RawBlockNode(l[c-2],l[c-1],l[c],this._$);break;case 10:this.$=new o.MustacheNode(l[c-1],null,"","",this._$);break;case 11:this.$=o.prepareBlock(l[c-3],l[c-2],l[c-1],l[c],!1,this._$);break;case 12:this.$=o.prepareBlock(l[c-3],l[c-2],l[c-1],l[c],!0,this._$);break;case 13:this.$=new o.MustacheNode(l[c-1],null,l[c-2],o.stripFlags(l[c-2],l[c]),this._$);break;case 14:this.$=new o.MustacheNode(l[c-1],null,l[c-2],o.stripFlags(l[c-2],l[c]),this._$);break;case 15:this.$={strip:o.stripFlags(l[c-1],l[c-1]),program:l[c]};break;case 16:this.$={path:l[c-1],strip:o.stripFlags(l[c-2],l[c])};break;case 17:this.$=new o.MustacheNode(l[c-1],null,l[c-2],o.stripFlags(l[c-2],l[c]),this._$);break;case 18:this.$=new o.MustacheNode(l[c-1],null,l[c-2],o.stripFlags(l[c-2],l[c]),this._$);break;case 19:this.$=new o.PartialNode(l[c-3],l[c-2],l[c-1],o.stripFlags(l[c-4],l[c]),this._$);break;case 20:this.$=new o.PartialNode(l[c-2],void 0,l[c-1],o.stripFlags(l[c-3],l[c]),this._$);break;case 21:this.$=new o.SexprNode([l[c-2]].concat(l[c-1]),l[c],this._$);break;case 22:this.$=new o.SexprNode([l[c]],null,this._$);break;case 23:this.$=l[c];break;case 24:this.$=new o.StringNode(l[c],this._$);break;case 25:this.$=new o.NumberNode(l[c],this._$);break;case 26:this.$=new o.BooleanNode(l[c],this._$);break;case 27:this.$=l[c];break;case 28:l[c-1].isHelper=!0,this.$=l[c-1];break;case 29:this.$=new o.HashNode(l[c],this._$);break;case 30:this.$=[l[c-2],l[c]];break;case 31:this.$=new o.PartialNameNode(l[c],this._$);break;case 32:this.$=new o.PartialNameNode(new o.StringNode(l[c],this._$),this._$);break;case 33:this.$=new o.PartialNameNode(new o.NumberNode(l[c],this._$));break;case 34:this.$=new o.DataNode(l[c],this._$);break;case 35:this.$=new o.IdNode(l[c],this._$);break;case 36:l[c-2].push({part:l[c],separator:l[c-1]}),this.$=l[c-2];break;case 37:this.$=[{part:l[c]}];break;case 38:this.$=[];break;case 39:l[c-1].push(l[c]);break;case 48:this.$=[];break;case 49:l[c-1].push(l[c]);break;case 52:this.$=[l[c]];break;case 53:l[c-1].push(l[c]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(s,a){throw new Error(s)},parse:function(s){var a=this,r=[0],o=[null],h=[],l=this.table,u="",c=0,w=0,H=0,A=2,Vt=1;this.lexer.setInput(s),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var S=this.lexer.yylloc;h.push(S);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function lt(y){r.length=r.length-2*y,o.length=o.length-y,h.length=h.length-y}function $e(){var y;return y=a.lexer.lex()||1,typeof y!="number"&&(y=a.symbols_[y]||y),y}for(var v,ct,I,k,ni,ht,T={},J,x,Ut,K;;){if(I=r[r.length-1],this.defaultActions[I]?k=this.defaultActions[I]:((v===null||typeof v>"u")&&(v=$e()),k=l[I]&&l[I][v]),typeof k>"u"||!k.length||!k[0]){var pt="";if(!H){K=[];for(J in l[I])this.terminals_[J]&&J>2&&K.push("'"+this.terminals_[J]+"'");this.lexer.showPosition?pt="Parse error on line "+(c+1)+`:
`+this.lexer.showPosition()+`
Expecting `+K.join(", ")+", got '"+(this.terminals_[v]||v)+"'":pt="Parse error on line "+(c+1)+": Unexpected "+(v==1?"end of input":"'"+(this.terminals_[v]||v)+"'"),this.parseError(pt,{text:this.lexer.match,token:this.terminals_[v]||v,line:this.lexer.yylineno,loc:S,expected:K})}}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+v);switch(k[0]){case 1:r.push(v),o.push(this.lexer.yytext),h.push(this.lexer.yylloc),r.push(k[1]),v=null,ct?(v=ct,ct=null):(w=this.lexer.yyleng,u=this.lexer.yytext,c=this.lexer.yylineno,S=this.lexer.yylloc,H>0&&H--);break;case 2:if(x=this.productions_[k[1]][1],T.$=o[o.length-x],T._$={first_line:h[h.length-(x||1)].first_line,last_line:h[h.length-1].last_line,first_column:h[h.length-(x||1)].first_column,last_column:h[h.length-1].last_column},E&&(T._$.range=[h[h.length-(x||1)].range[0],h[h.length-1].range[1]]),ht=this.performAction.call(T,u,w,c,this.yy,k[1],o,h),typeof ht<"u")return ht;x&&(r=r.slice(0,-1*x*2),o=o.slice(0,-1*x),h=h.slice(0,-1*x)),r.push(this.productions_[k[1]][0]),o.push(T.$),h.push(T._$),Ut=l[r[r.length-2]][r[r.length-1]],r.push(Ut);break;case 3:return!0}}return!0}},e=(function(){var i={EOF:1,parseError:function(a,r){if(this.yy.parser)this.yy.parser.parseError(a,r);else throw new Error(a)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var a=s.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var a=s.length,r=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a-1),this.offset-=a;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var h=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===o.length?this.yylloc.first_column:0)+o[o.length-r.length].length-r[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[h[0],h[0]+this.yyleng-a]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),a=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+a+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,a,r,o,h,l;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),c=0;c<u.length&&(r=this._input.match(this.rules[u[c]]),!(r&&(!a||r[0].length>a[0].length)&&(a=r,o=c,!this.options.flex)));c++);return a?(l=a[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],s=this.performAction.call(this,this.yy,this,u[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return typeof a<"u"?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return i.options={},i.performAction=function(a,r,o,h){function l(c,w){return r.yytext=r.yytext.substr(c,r.yyleng-w)}var u=h;switch(o){case 0:if(r.yytext.slice(-2)==="\\\\"?(l(0,1),this.begin("mu")):r.yytext.slice(-1)==="\\"?(l(0,1),this.begin("emu")):this.begin("mu"),r.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return r.yytext=r.yytext.substr(5,r.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return l(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return l(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return r.yytext=l(1,2).replace(/\\"/g,'"'),42;break;case 30:return r.yytext=l(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return r.yytext=l(1,2),50;break;case 37:return"INVALID";case 38:return 5}},i.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],i.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},i})();t.lexer=e;function n(){this.yy={}}return n.prototype=t,t.Parser=n,new n})();Ie.default=Ln});var Oe=m(it=>{"use strict";p();var On=P().default;function Dn(t,e){return{left:t.charAt(2)==="~",right:e.charAt(e.length-3)==="~"}}it.stripFlags=Dn;function Rn(t,e,n,i,s,a){if(t.sexpr.id.original!==i.path.original)throw new On(t.sexpr.id.original+" doesn't match "+i.path.original,t);var r=n&&n.program,o={left:t.strip.left,right:i.strip.right,openStandalone:It(e.statements),closeStandalone:At((r||e).statements)};if(t.strip.right&&D(e.statements,null,!0),r){var h=n.strip;h.left&&_(e.statements,null,!0),h.right&&D(r.statements,null,!0),i.strip.left&&_(r.statements,null,!0),At(e.statements)&&It(r.statements)&&(_(e.statements),D(r.statements))}else i.strip.left&&_(e.statements,null,!0);return s?new this.BlockNode(t,r,e,o,a):new this.BlockNode(t,e,r,o,a)}it.prepareBlock=Rn;function Bn(t,e){for(var n=0,i=t.length;n<i;n++){var s=t[n],a=s.strip;if(a){var r=At(t,n,e,s.type==="partial"),o=It(t,n,e),h=a.openStandalone&&r,l=a.closeStandalone&&o,u=a.inlineStandalone&&r&&o;a.right&&D(t,n,!0),a.left&&_(t,n,!0),u&&(D(t,n),_(t,n)&&s.type==="partial"&&(s.indent=/([ \t]+$)/.exec(t[n-1].original)?RegExp.$1:"")),h&&(D((s.program||s.inverse).statements),_(t,n)),l&&(D(t,n),_((s.inverse||s.program).statements))}}return t}it.prepareProgram=Bn;function At(t,e,n){e===void 0&&(e=t.length);var i=t[e-1],s=t[e-2];if(!i)return n;if(i.type==="content")return(s||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}function It(t,e,n){e===void 0&&(e=-1);var i=t[e+1],s=t[e+2];if(!i)return n;if(i.type==="content")return(s||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}function D(t,e,n){var i=t[e==null?0:e+1];if(!(!i||i.type!=="content"||!n&&i.rightStripped)){var s=i.string;i.string=i.string.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.string!==s}}function _(t,e,n){var i=t[e==null?t.length-1:e-1];if(!(!i||i.type!=="content"||!n&&i.leftStripped)){var s=i.string;return i.string=i.string.replace(n?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.string!==s,i.leftStripped}}});var Dt=m(Ot=>{"use strict";p();var Lt=Le().default,De=_t().default,Hn=Oe(),Tn=M().extend;Ot.parser=Lt;var Re={};Tn(Re,Hn,De);function Fn(t){return t.constructor===De.ProgramNode?t:(Lt.yy=Re,Lt.parse(t))}Ot.parse=Fn});var at=m(st=>{"use strict";p();var Bt=P().default,Be=M().isArray,Mn=[].slice;function Rt(){}st.Compiler=Rt;Rt.prototype={compiler:Rt,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var n=0;n<e;n++){var i=this.opcodes[n],s=t.opcodes[n];if(i.opcode!==s.opcode||!He(i.args,s.args))return!1}for(e=this.children.length,n=0;n<e;n++)if(!this.children[n].equals(t.children[n]))return!1;return!0},guid:0,compile:function(t,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds;var n=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},n)for(var i in n)this.options.knownHelpers[i]=n[i];return this.accept(t)},accept:function(t){return this[t.type](t)},program:function(t){for(var e=t.statements,n=0,i=e.length;n<i;n++)this.accept(e[n]);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(s,a){return s-a}),this},compileProgram:function(t){var e=new this.compiler().compile(t,this.options),n=this.guid++,i;this.usePartial=this.usePartial||e.usePartial,this.children[n]=e;for(var s=0,a=e.depths.list.length;s<a;s++)i=e.depths.list[s],!(i<2)&&this.addDepth(i-1);return n},block:function(t){var e=t.mustache,n=t.program,i=t.inverse;n&&(n=this.compileProgram(n)),i&&(i=this.compileProgram(i));var s=e.sexpr,a=this.classifySexpr(s);a==="helper"?this.helperSexpr(s,n,i):a==="simple"?(this.simpleSexpr(s),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("blockValue",s.id.original)):(this.ambiguousSexpr(s,n,i),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var e=t.pairs,n,i;for(this.opcode("pushHash"),n=0,i=e.length;n<i;n++)this.pushParam(e[n][1]);for(;n--;)this.opcode("assignToHash",e[n][0]);this.opcode("popHash")},partial:function(t){var e=t.partialName;this.usePartial=!0,t.hash?this.accept(t.hash):this.opcode("push","undefined"),t.context?this.accept(t.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",e.name,t.indent||""),this.opcode("append")},content:function(t){t.string&&this.opcode("appendContent",t.string)},mustache:function(t){this.sexpr(t.sexpr),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(t,e,n){var i=t.id,s=i.parts[0],a=e!=null||n!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.ID(i),this.opcode("invokeAmbiguous",s,a)},simpleSexpr:function(t){var e=t.id;e.type==="DATA"?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,n){var i=this.setupFullMustacheParams(t,e,n),s=t.id,a=s.parts[0];if(this.options.knownHelpers[a])this.opcode("invokeKnownHelper",i.length,a);else{if(this.options.knownHelpersOnly)throw new Bt("You specified knownHelpersOnly, but used the unknown helper "+a,t);s.falsy=!0,this.ID(s),this.opcode("invokeHelper",i.length,s.original,s.isSimple)}},sexpr:function(t){var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0];e?this.opcode("lookupOnContext",t.parts,t.falsy,t.isScoped):this.opcode("pushContext")},DATA:function(t){this.options.data=!0,this.opcode("lookupData",t.id.depth,t.id.parts)},STRING:function(t){this.opcode("pushString",t.string)},NUMBER:function(t){this.opcode("pushLiteral",t.number)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:Mn.call(arguments,1)})},addDepth:function(t){t!==0&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifySexpr:function(t){var e=t.isHelper,n=t.eligibleHelper,i=this.options;if(n&&!e){var s=t.id.parts[0];i.knownHelpers[s]?e=!0:i.knownHelpersOnly&&(n=!1)}return e?"helper":n?"ambiguous":"simple"},pushParams:function(t){for(var e=0,n=t.length;e<n;e++)this.pushParam(t[e])},pushParam:function(t){this.stringParams?(t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",t.stringModeValue,t.type),t.type==="sexpr"&&this.sexpr(t)):(this.trackIds&&this.opcode("pushId",t.type,t.idName||t.stringModeValue),this.accept(t))},setupFullMustacheParams:function(t,e,n){var i=t.params;return this.pushParams(i),this.opcode("pushProgram",e),this.opcode("pushProgram",n),t.hash?this.hash(t.hash):this.opcode("emptyHash"),i}};function qn(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new Bt("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i=n.parse(t),s=new n.Compiler().compile(i,e);return new n.JavaScriptCompiler().compile(s,e)}st.precompile=qn;function jn(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new Bt("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i;function s(){var r=n.parse(t),o=new n.Compiler().compile(r,e),h=new n.JavaScriptCompiler().compile(o,e,void 0,!0);return n.template(h)}var a=function(r,o){return i||(i=s()),i.call(this,r,o)};return a._setup=function(r){return i||(i=s()),i._setup(r)},a._child=function(r,o,h){return i||(i=s()),i._child(r,o,h)},a}st.compile=jn;function He(t,e){if(t===e)return!0;if(Be(t)&&Be(e)&&t.length===e.length){for(var n=0;n<t.length;n++)if(!He(t[n],e[n]))return!1;return!0}}});var qe=m(Me=>{"use strict";p();var Vn=L().COMPILER_REVISION,Un=L().REVISION_CHANGES,Ht=P().default;function W(t){this.value=t}function R(){}R.prototype={nameLookup:function(t,e){return R.isValidJavaScriptVariableName(e)?t+"."+e:t+"['"+e+"']"},depthedLookup:function(t){return this.aliases.lookup="this.lookup",'lookup(depths, "'+t+'")'},compilerInfo:function(){var t=Vn,e=Un[t];return[t,e]},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,e,n,i){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!n,this.context=n||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.depths.list.length||this.options.compat;var s=t.opcodes,a,r,o;for(r=0,o=s.length;r<o;r++)a=s[r],this[a.opcode].apply(this,a.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Ht("Compile completed with content left on stack");var h=this.createFunctionContext(i);if(this.isChild)return h;var l={compiler:this.compilerInfo(),main:h},u=this.context.programs;for(r=0,o=u.length;r<o;r++)u[r]&&(l[r]=u[r]);return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.options.compat&&(l.compat=!0),i||(l.compiler=JSON.stringify(l.compiler),l=this.objectLiteral(l)),l},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(t){var e="",n=this.stackVars.concat(this.registers.list);n.length>0&&(e+=", "+n.join(", "));for(var i in this.aliases)this.aliases.hasOwnProperty(i)&&(e+=", "+i+"="+this.aliases[i]);var s=["depth0","helpers","partials","data"];this.useDepths&&s.push("depths");var a=this.mergeSource(e);return t?(s.push(a),Function.apply(this,s)):"function("+s.join(",")+`) {
  `+a+"}"},mergeSource:function(t){for(var e="",n,i=!this.forceBuffer,s,a=0,r=this.source.length;a<r;a++){var o=this.source[a];o.appendToBuffer?n?n=n+`
    + `+o.content:n=o.content:(n&&(e?e+="buffer += "+n+`;
  `:(s=!0,e=n+`;
  `),n=void 0),e+=o+`
  `,this.environment.isSimple||(i=!1))}return i?(n||!e)&&(e+="return "+(n||'""')+`;
`):(t+=", buffer = "+(s?"":this.initializeBuffer()),n?e+="return buffer + "+n+`;
`:e+=`return buffer;
`),t&&(e="var "+t.substring(2)+(s?"":`;
  `)+e),e},blockValue:function(t){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams(t,0,e);var n=this.popStack();e.splice(1,0,n),this.push("blockHelperMissing.call("+e.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams("",0,t,!0),this.flushInline();var e=this.topStack();t.splice(1,0,e),this.pushSource("if (!"+this.lastHelper+") { "+e+" = blockHelperMissing.call("+t.join(", ")+"); }")},appendContent:function(t){this.pendingContent&&(t=this.pendingContent+t),this.pendingContent=t},append:function(){this.flushInline();var t=this.popStack();this.pushSource("if ("+t+" != null) { "+this.appendToBuffer(t)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,n){var i=0,s=t.length;for(!n&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[i++])):this.pushContext();i<s;i++)this.replaceStack(function(a){var r=this.nameLookup(a,t[i],"context");return e?" && "+r:" != null ? "+r+" : "+a})},lookupData:function(t,e){t?this.pushStackLiteral("this.data(data, "+t+")"):this.pushStackLiteral("data");for(var n=e.length,i=0;i<n;i++)this.replaceStack(function(s){return" && "+this.nameLookup(s,e[i],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),e!=="sexpr"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+t.ids.join(",")+"}"),this.stringParams&&(this.push("{"+t.contexts.join(",")+"}"),this.push("{"+t.types.join(",")+"}")),this.push(`{
    `+t.values.join(`,
    `)+`
  }`)},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},invokeHelper:function(t,e,n){this.aliases.helperMissing="helpers.helperMissing";var i=this.popStack(),s=this.setupHelper(t,e),a=(n?s.name+" || ":"")+i+" || helperMissing";this.push("(("+a+").call("+s.callParams+"))")},invokeKnownHelper:function(t,e){var n=this.setupHelper(t,e);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(t,e){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var n=this.popStack();this.emptyHash();var i=this.setupHelper(0,t,e),s=this.lastHelper=this.nameLookup("helpers",t,"helper");this.push("((helper = (helper = "+s+" || "+n+") != null ? helper : helperMissing"+(i.paramsInit?"),("+i.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+i.callParams+") : helper))")},invokePartial:function(t,e){var n=[this.nameLookup("partials",t,"partial"),"'"+e+"'","'"+t+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?n.push("data"):this.options.compat&&n.push("undefined"),this.options.compat&&n.push("depths"),this.push("this.invokePartial("+n.join(", ")+")")},assignToHash:function(t){var e=this.popStack(),n,i,s;this.trackIds&&(s=this.popStack()),this.stringParams&&(i=this.popStack(),n=this.popStack());var a=this.hash;n&&a.contexts.push("'"+t+"': "+n),i&&a.types.push("'"+t+"': "+i),s&&a.ids.push("'"+t+"': "+s),a.values.push("'"+t+"': ("+e+")")},pushId:function(t,e){t==="ID"||t==="DATA"?this.pushString(e):t==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:R,compileChildren:function(t,e){for(var n=t.children,i,s,a=0,r=n.length;a<r;a++){i=n[a],s=new this.compiler;var o=this.matchExistingProgram(i);o==null?(this.context.programs.push(""),o=this.context.programs.length,i.index=o,i.name="program"+o,this.context.programs[o]=s.compile(i,e,this.context,!this.precompile),this.context.environments[o]=i,this.useDepths=this.useDepths||s.useDepths):(i.index=o,i.name="program"+o)}},matchExistingProgram:function(t){for(var e=0,n=this.context.environments.length;e<n;e++){var i=this.context.environments[e];if(i&&i.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],n=e.depths.list,i=this.useDepths,s,a=[e.index,"data"];return i&&a.push("depths"),"this.program("+a.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new W(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var e=this.incrStack();return this.pushSource(e+" = "+t+";"),this.compileStack.push(e),e},replaceStack:function(t){var e="",n=this.isInline(),i,s,a;if(!this.isInline())throw new Ht("replaceStack on non-inline");var r=this.popStack(!0);if(r instanceof W)e=i=r.value,a=!0;else{s=!this.stackSlot;var o=s?this.incrStack():this.topStackName();e="("+this.push(o)+" = "+r+")",i=this.topStack()}var h=t.call(this,i);a||this.popStack(),s&&this.stackSlot--,this.push("("+e+h+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var e=0,n=t.length;e<n;e++){var i=t[e];i instanceof W?this.compileStack.push(i):this.pushStack(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),n=(e?this.inlineStack:this.compileStack).pop();if(!t&&n instanceof W)return n.value;if(!e){if(!this.stackSlot)throw new Ht("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof W?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(this.quotedString(n)+":"+t[n]);return"{"+e.join(",")+"}"},setupHelper:function(t,e,n){var i=[],s=this.setupParams(e,t,i,n),a=this.nameLookup("helpers",e,"helper");return{params:i,paramsInit:s,name:a,callParams:[this.contextName(0)].concat(i).join(", ")}},setupOptions:function(t,e,n){var i={},s=[],a=[],r=[],o,h,l;i.name=this.quotedString(t),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack()),h=this.popStack(),l=this.popStack(),(l||h)&&(l||(l="this.noop"),h||(h="this.noop"),i.fn=l,i.inverse=h);for(var u=e;u--;)o=this.popStack(),n[u]=o,this.trackIds&&(r[u]=this.popStack()),this.stringParams&&(a[u]=this.popStack(),s[u]=this.popStack());return this.trackIds&&(i.ids="["+r.join(",")+"]"),this.stringParams&&(i.types="["+a.join(",")+"]",i.contexts="["+s.join(",")+"]"),this.options.data&&(i.data="data"),i},setupParams:function(t,e,n,i){var s=this.objectLiteral(this.setupOptions(t,e,n));return i?(this.useRegister("options"),n.push("options"),"options="+s):(n.push(s),"")}};var Te="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),zn=R.RESERVED_WORDS={};for(rt=0,Fe=Te.length;rt<Fe;rt++)zn[Te[rt]]=!0;var rt,Fe;R.isValidJavaScriptVariableName=function(t){return!R.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};Me.default=R});var Ue=m(Ve=>{"use strict";p();var j=Ce().default,Wn=_t().default,Gn=Dt().parser,Jn=Dt().parse,Kn=at().Compiler,Yn=at().compile,Xn=at().precompile,Qn=qe().default,Zn=j.create,je=function(){var t=Zn();return t.compile=function(e,n){return Yn(e,n,t)},t.precompile=function(e,n){return Xn(e,n,t)},t.AST=Wn,t.Compiler=Kn,t.JavaScriptCompiler=Qn,t.Parser=Gn,t.parse=Jn,t};j=je();j.create=je;j.default=j;Ve.default=j});var Ft=m(ze=>{"use strict";p();function Tt(){}Tt.prototype={constructor:Tt,accept:function(t){return this[t.type](t)}};ze.default=Tt});var We=m(Mt=>{"use strict";p();var $n=Ft().default;function ti(t){return new f().accept(t)}Mt.print=ti;function f(){this.padding=0}Mt.PrintVisitor=f;f.prototype=new $n;f.prototype.pad=function(t){for(var e="",n=0,i=this.padding;n<i;n++)e=e+"  ";return e=e+t+`
`,e};f.prototype.program=function(t){var e="",n=t.statements,i,s;for(i=0,s=n.length;i<s;i++)e=e+this.accept(n[i]);return this.padding--,e};f.prototype.block=function(t){var e="";return e=e+this.pad("BLOCK:"),this.padding++,e=e+this.accept(t.mustache),t.program&&(e=e+this.pad("PROGRAM:"),this.padding++,e=e+this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e=e+this.pad("{{^}}"),this.padding++,e=e+this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e};f.prototype.sexpr=function(t){for(var e=t.params,n=[],i,s=0,a=e.length;s<a;s++)n.push(this.accept(e[s]));return e="["+n.join(", ")+"]",i=t.hash?" "+this.accept(t.hash):"",this.accept(t.id)+" "+e+i};f.prototype.mustache=function(t){return this.pad("{{ "+this.accept(t.sexpr)+" }}")};f.prototype.partial=function(t){var e=this.accept(t.partialName);return t.context&&(e+=" "+this.accept(t.context)),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")};f.prototype.hash=function(t){for(var e=t.pairs,n=[],i,s,a=0,r=e.length;a<r;a++)i=e[a][0],s=this.accept(e[a][1]),n.push(i+"="+s);return"HASH{"+n.join(", ")+"}"};f.prototype.STRING=function(t){return'"'+t.string+'"'};f.prototype.NUMBER=function(t){return"NUMBER{"+t.number+"}"};f.prototype.BOOLEAN=function(t){return"BOOLEAN{"+t.bool+"}"};f.prototype.ID=function(t){var e=t.parts.join("/");return t.parts.length>1?"PATH:"+e:"ID:"+e};f.prototype.PARTIAL_NAME=function(t){return"PARTIAL:"+t.name};f.prototype.DATA=function(t){return"@"+this.accept(t.id)};f.prototype.content=function(t){return this.pad("CONTENT[ '"+t.string+"' ]")};f.prototype.comment=function(t){return this.pad("{{! '"+t.comment+"' }}")}});var Ke=m((Fi,Je)=>{p();var G=Ue().default;G.Visitor=Ft().default;var Ge=We();G.PrintVisitor=Ge.PrintVisitor;G.print=Ge.print;Je.exports=G;typeof V<"u"&&V.extensions&&(qt=function(t,e){var n=(kt(),dt(gt)),i=n.readFileSync(e,"utf8");t.exports=G.compile(i)},V.extensions[".handlebars"]=qt,V.extensions[".hbs"]=qt);var qt});var Qe=m((ji,Xe)=>{p();var ot=(kt(),dt(gt)),Ye=(pe(),dt(he)),jt=Ke();jt.registerHelper("formatDate",function(t){let e=t.split("-");return e[0]&&e[1]&&e[2]?new Date(t).toLocaleDateString("en",{month:"short",year:"numeric",day:"numeric"}):e[0]&&e[1]?new Date(t).toLocaleDateString("en",{month:"short",year:"numeric"}):e});function ei(t){var e=ot.readFileSync("//style.css","utf-8"),n=ot.readFileSync("//resume.hbs","utf-8"),i=Ye.join("/","partials"),s=ot.readdirSync(i);return s.forEach(function(a){var r=/^([^.]+).hbs$/.exec(a);if(r){var o=r[1],h=Ye.join(i,a),l=ot.readFileSync(h,"utf8");jt.registerPartial(o,l)}}),jt.compile(n)({css:e,resume:t})}Xe.exports={render:ei}});p();var B=rn(Qe(),1),Ze=B.default??B,Ui=Ze.render??B.render,zi=Ze.pdfRenderOptions??B.pdfRenderOptions;export{zi as pdfRenderOptions,Ui as render};
