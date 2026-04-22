var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var ts=Object.create;var Q=Object.defineProperty;var es=Object.getOwnPropertyDescriptor;var ss=Object.getOwnPropertyNames;var ns=Object.getPrototypeOf,is=Object.prototype.hasOwnProperty;var F=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,s)=>(typeof require<"u"?require:e)[s]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var ut=(t,e)=>()=>(t&&(e=t(t=0)),e);var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Gt=(t,e)=>{for(var s in e)Q(t,s,{get:e[s],enumerable:!0})},Ut=(t,e,s,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ss(e))!is.call(t,i)&&i!==s&&Q(t,i,{get:()=>e[i],enumerable:!(n=es(e,i))||n.enumerable});return t};var as=(t,e,s)=>(s=t!=null?ts(ns(t)):{},Ut(e||!t||!t.__esModule?Q(s,"default",{value:t,enumerable:!0}):s,t)),ft=t=>Ut(Q({},"__esModule",{value:!0}),t);var p=ut(()=>{});var vt={};Gt(vt,{createReadStream:()=>te,createWriteStream:()=>ee,default:()=>rs,existsSync:()=>Kt,lstatSync:()=>Xt,mkdirSync:()=>Yt,readFileSync:()=>Jt,readdirSync:()=>zt,rmdirSync:()=>$t,statSync:()=>gt,unlinkSync:()=>Zt,writeFileSync:()=>Qt});function mt(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Wt(t){var e=mt(t);if(Y[e]!==void 0)return Y[e];for(var s=Object.keys(Y),n=0;n<s.length;n++)if(e.endsWith("/"+s[n])||e===s[n])return Y[s[n]]}function dt(t){var e=mt(t);if((e===""||e===".")&&B["."]!==void 0)return B["."];if(B[e]!==void 0)return B[e];for(var s=Object.keys(B),n=0;n<s.length;n++)if(e.endsWith("/"+s[n])||e===s[n])return B[s[n]]}var Y,B,Jt,zt,Kt,Qt,Yt,gt,Xt,Zt,$t,te,ee,rs,bt=ut(()=>{"use strict";p();Y={"package.json":`{
  "name": "jsonresume-theme-tachyons-clean",
  "version": "0.0.9",
  "description": "My take on jsonresume",
  "author": "Ricardo Casares",
  "repository": {
    "type": "git",
    "url": "https://github.com/ricardocasares/cv"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  }
}
`,"partials/awards.hbs":`{{#if resume.awards.length}}
<section id="awards">
	<h2 class="f3 fw5 lh-copy mt5">Awards</h2>
	{{#each resume.awards}}
	<div class="item">
		{{#if title}}
		<h3 class="position f4 fw5 lh-copy mb0">
			{{title}}
		</h3>
		{{/if}}
		{{#if awarder}}
		<h4 class="position f5 fw5 lh-copy mt3 mb0">
			{{awarder}}
		</h4>
		{{/if}}

		{{#if date}}
		<div class="gray fw2 date">
			{{date}}
		</div>
		{{/if}}
		
		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"partials/basics.hbs":`{{#resume.basics}}
<header class="tc pv4">
	{{#if picture}}
	<img src="{{picture}}" class="br3 h4 w4" alt="avatar">
	{{/if}}
	<h1 class="f4 fw6">{{name}}</h1>
	<h2 class="f6 fw2 ttu tracked gray">{{label}}</h2>
</header>
<section id="basics">
	<div class="contact flex justify-between">
		<ul class="list pl0">
			{{#if website}}<li class="mb1"><a href="{{website}}">{{website}}</a></li>{{/if}}
			{{#if email}}<li class="mb1"><a href="mailto:{{email}}">{{email}}</a></li>{{/if}}
			{{#if phone}}<li class="mb1">{{phone}}</li>{{/if}}
			{{#location}}
			{{#if address}}
			<li class="mb1">{{address}}{{#if postalCode}}, {{postalCode}}{{/if}}{{#if city}},
				{{city}}{{/if}}{{#if region}}, {{region}}{{/if}}{{#if countryCode}}, {{countryCode}}{{/if}}.</li>
			{{/if}}
			{{/location}}
		</ul>

		{{#if profiles.length}}
		<ul class="list pl0 tr">
			{{#each profiles}}
			{{#if network}}
			<li class="mb1 network">
				<span class="ttl gray">{{network}} / </span><a href="{{url}}">{{username}}</a>
			</li>
			{{/if}}
			{{/each}}
		</ul>
		{{/if}}
	</div>

	{{#if summary}}
	<div class="summary lh-copy">
		<p>{{summary}}</p>
	</div>
	{{/if}}
</section>
{{/resume.basics}}`,"partials/education.hbs":`{{#if resume.education.length}}
<section id="education">
	<h2 class="f3 fw5 lh-copy mt4">Education</h2>
	{{#each resume.education}}
	<div class="item">
		{{#if institution}}
		<h3 class="company f4 fw5 lh-copy mb0">{{institution}}</h3>
		{{/if}}
		{{#if area}}
		<h4 class="company f5 fw5 mt0 mb2">
			{{area}}
		</h4>
		{{/if}}
		{{#if studyType}}
		<h4 class="position f5 fw5 lh-copy mt3 mb0">
			{{studyType}}

			{{#if gpa}}
			<span class="gpa fw3 black-40">
				GPA {{gpa}}
			</span>
			{{/if}}
		</h4>
		{{/if}}
		<div class="gray fw2 date">
			{{#if startDate}}
			<span class="startDate">
				{{startDate}}
			</span>
			{{/if}}
			{{#if endDate}}
			<span class="endDate">
				&rarr; {{endDate}}
			</span>
			{{else}}
			<span class="endDate">
				&rarr; Present
			</span>
			{{/if}}
		</div>

		{{#if courses.length}}
		<ul class="courses list pl2">
			{{#each courses}}
			<li class="lt-dash mb1">{{.}}</li>
			{{/each}}
		</ul>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"partials/interests.hbs":`{{#if resume.interests.length}}
<section id="interests">
	<h2 class="f3 fw5 lh-copy mt4">Interests</h2>
	<div class="flex flex-wrap">
		{{#each resume.interests}}
		<div class="w-25">
			{{#if name}}
			<h3 class="f4 fw4 mt0 mb0 lh-copy name">
				{{name}}
			</h3>
			{{/if}}
			{{#if level}}
			<div class="level f6 fw3 black-50 ttu">{{level}}</div>
			{{/if}}
			{{#if keywords.length}}
			<ul class="list pl0">
				{{#each keywords}}
				<li class="mb1 lt-dash">{{.}}</li>
				{{/each}}
			</ul>
			{{/if}}
		</div>
		{{/each}}
	</div>
</section>
{{/if}}`,"partials/languages.hbs":`{{#if resume.languages.length}}
<section id="languages">
	<h2 class="f3 fw5 lh-copy mt4">Languages</h2>

	<div class="flex flex-wrap">
		{{#each resume.languages}}
		<div class="w-25">
			{{#if language}}<h3 class="f4 fw4 mt0 mb0">{{language}}</h3>{{/if}}
			{{#if fluency}}<h4 class="f7 fw3 tracked ttu gray mt2">{{fluency}}</h4>{{/if}}
		</div>
		</li>
		{{/each}}
	</div>
	</ul>
</section>
{{/if}}`,"partials/publications.hbs":`{{#if resume.publications.length}}
<section id="publications">
	<h2 class="f3 fw5 lh-copy mt4">Publications</h2>
	{{#each resume.publications}}
	<div class="item">
		{{#if name}}
		<h3 class="name f4 fw5 lh-copy mb0">
			{{name}}
		</h3>
		{{/if}}

		{{#if website}}
		<div class="website">
			<a href="{{website}}">Link to publication</a>
		</div>
		{{/if}}

		{{#if publisher}}
		<h3 class="position f5 fw5 lh-copy mb0">
			{{publisher}}
		</h3>
		{{/if}}

		{{#if releaseDate}}
		<div class="gray fw2 releaseDate">
			{{releaseDate}}
		</div>
		{{/if}}
		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"partials/references.hbs":`{{#if resume.references.length}}
<section id="references">
	<h2 class="f3 fw5 lh-copy mt4">References</h2>
	{{#each resume.references}}
	<div class="item mb4">
		{{#if reference}}
		<blockquote class="reference pl0 ml0 mb0 f4 lh-copy gray quotes">
			{{reference}}
		</blockquote>
		{{/if}}
		{{#if name}}
		<h3 class="name f5 fw5 mt2">
			{{name}}
		</h3>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"partials/skills.hbs":`{{#if resume.skills.length}}
<section id="skills">
	<h2 class="f3 fw5 lh-copy mt4">Skills</h2>
	<div class="flex flex-wrap">
		{{#each resume.skills}}
		<div class="item w-25">
			{{#if name}}
			<h3 class="f4 fw4 mb0 mt0 lh-copy name">
				{{name}}
			</h3>
			{{/if}}
			{{#if level}}
			<h4 class="level f7 fw3 black-50 tracked ttu mt0">{{level}}</h4>
			{{/if}}
			{{#if keywords.length}}
			<ul class="list pl0">
				{{#each keywords}}
				<li class="mb1 lt-dash">{{.}}</li>
				{{/each}}
			</ul>
			{{/if}}
		</div>
		{{/each}}
	</div>
</section>
{{/if}}`,"partials/volunteer.hbs":`{{#if resume.volunteer.length}}
<section id="volunteer">
	<h2 class="f3 fw5 lh-copy mt4">Volunteer</h2>
	{{#each resume.volunteer}}
	<div class="item">
		{{#if organization}}
		<h3 class="company f4 fw5 lh-copy mb0">
			{{organization}}
		</h3>
		{{/if}}
		{{#if website}}
		<div class="website">
			<a href="{{website}}">{{website}}</a>
		</div>
		{{/if}}

		{{#if position}}
		<h3 class="position f5 fw5 lh-copy mb0">
			{{position}}
		</h3>
		{{/if}}

		<div class="gray fw2 date">
			{{#if startDate}}
			<span class="startDate">
				{{startDate}}
			</span>
			{{/if}}
			{{#if endDate}}
			<span class="endDate">
				&rarr; {{endDate}}
			</span>
			{{else}}
			<span class="endDate">
				&rarr; Present
			</span>
			{{/if}}
		</div>

		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
		{{#if highlights.length}}
		<ul class="highlights list pl2">
			{{#each highlights}}
			<li class="lt-dash mb1">{{.}}</li>
			{{/each}}
		</ul>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"partials/work.hbs":`{{#if resume.work.length}}
<section id="work">
	<h2 class="f3 fw5 lh-copy mt4">Experience</h2>
	{{#each resume.work}}
	<div class="item">
		{{#if company}}
		<h3 class="name f4 fw5 lh-copy mb0">
			{{company}}
		</h3>
		{{/if}}

		{{#if website}}
		<div class="website">
			<a href="{{website}}">{{website}}</a>
		</div>
		{{/if}}

		{{#if position}}
		<h3 class="position f5 fw5 lh-copy mb0">
			{{position}}
		</h3>
		{{/if}}

		<div class="gray fw2 date">
			{{#if startDate}}
			<span class="startDate">
				{{startDate}}
			</span>
			{{/if}}
			{{#if endDate}}
			<span class="endDate">
				&rarr; {{endDate}}
			</span>
			{{else}}
			<span class="endDate">
				&rarr; Present
			</span>
			{{/if}}
		</div>
		{{#if summary}}
		<div class="summary lh-copy">
			<p>{{summary}}</p>
		</div>
		{{/if}}
		{{#if highlights.length}}
		<ul class="highlights list pl2">
			{{#each highlights}}
			<li class="mb2 lt-dash">{{.}}</li>
			{{/each}}
		</ul>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"public/index.html":`<!doctype html>
<html>

<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">

	<title>Ricardo Casares</title>
	<link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />

	<style>a {
  color: #364fc7;
  text-decoration: none;
}

.lt-dash::before {
  content: "- ";
}

@media print {
  ul,
  .item {
    page-break-inside: avoid;
  }
}
</style>

</head>

<body class="sans-serif black bg-white">
	<div id="resume" class="mw8 center mb6 pa3">
		<header class="tc pv4">
			<img src="https://avatars0.githubusercontent.com/u/84963?s=460&amp;u=f32960c1cea4811583d84203e022d6f10388acfc&amp;v=4" class="br3 h4 w4" alt="avatar">
			<h1 class="f4 fw6">Ricardo Casares</h1>
			<h2 class="f6 fw2 ttu tracked gray">Full Stack Human</h2>
		</header>
		<section id="basics">
			<div class="contact flex justify-between">
				<ul class="list pl0">
					<li class="mb1"><a href="https://analogic.al">https://analogic.al</a></li>
					<li class="mb1"><a href="mailto:ricardocasares@gmail.com">ricardocasares@gmail.com</a></li>
					
				</ul>
		
				<ul class="list pl0 tr">
					<li class="mb1 network">
						<span class="ttl gray">Github / </span><a href="https://github.com/ricardocasares">ricardocasares</a>
					</li>
					<li class="mb1 network">
						<span class="ttl gray">Gitlab / </span><a href="https://gitlab.com/ricardocasares">rcasares</a>
					</li>
				</ul>
			</div>
		
			<div class="summary lh-copy">
				<p>A web craftsman, passionate about the Internet and new technologies.</p>
			</div>
		</section>
		<section id="skills">
			<h2 class="f3 fw5 lh-copy mt4">Skills</h2>
			<div class="flex flex-wrap">
				<div class="item w-25">
					<h3 class="f4 fw4 mb0 mt0 lh-copy name">
						Javascript
					</h3>
					<h4 class="level f7 fw3 black-50 tracked ttu mt0">Advanced</h4>
					<ul class="list pl0">
						<li class="mb1 lt-dash">ReactJS</li>
						<li class="mb1 lt-dash">Next.js</li>
						<li class="mb1 lt-dash">Angular</li>
						<li class="mb1 lt-dash">TypeScript</li>
					</ul>
				</div>
				<div class="item w-25">
					<h3 class="f4 fw4 mb0 mt0 lh-copy name">
						Node
					</h3>
					<h4 class="level f7 fw3 black-50 tracked ttu mt0">Advanced</h4>
					<ul class="list pl0">
						<li class="mb1 lt-dash">Express</li>
						<li class="mb1 lt-dash">GraphQL</li>
						<li class="mb1 lt-dash">Socket.io</li>
						<li class="mb1 lt-dash">Gulp</li>
					</ul>
				</div>
				<div class="item w-25">
					<h3 class="f4 fw4 mb0 mt0 lh-copy name">
						AWS
					</h3>
					<h4 class="level f7 fw3 black-50 tracked ttu mt0">Intermediate</h4>
					<ul class="list pl0">
						<li class="mb1 lt-dash">ECS</li>
						<li class="mb1 lt-dash">Lambda</li>
						<li class="mb1 lt-dash">DynamoDB</li>
						<li class="mb1 lt-dash">Alexa Custom Skills</li>
					</ul>
				</div>
				<div class="item w-25">
					<h3 class="f4 fw4 mb0 mt0 lh-copy name">
						Agile
					</h3>
					<h4 class="level f7 fw3 black-50 tracked ttu mt0">Advanced</h4>
					<ul class="list pl0">
						<li class="mb1 lt-dash">Scrum</li>
						<li class="mb1 lt-dash">Kanban</li>
						<li class="mb1 lt-dash">VSM</li>
						<li class="mb1 lt-dash">DevOps</li>
					</ul>
				</div>
				<div class="item w-25">
					<h3 class="f4 fw4 mb0 mt0 lh-copy name">
						DevOps
					</h3>
					<h4 class="level f7 fw3 black-50 tracked ttu mt0">Intermediate</h4>
					<ul class="list pl0">
						<li class="mb1 lt-dash">Docker</li>
						<li class="mb1 lt-dash">Gitlab Pipelines</li>
						<li class="mb1 lt-dash">Github Actions</li>
						<li class="mb1 lt-dash">Terraform</li>
					</ul>
				</div>
				<div class="item w-25">
					<h3 class="f4 fw4 mb0 mt0 lh-copy name">
						HTML
					</h3>
					<h4 class="level f7 fw3 black-50 tracked ttu mt0">Advanced</h4>
					<ul class="list pl0">
						<li class="mb1 lt-dash">Semantics</li>
						<li class="mb1 lt-dash">Accessibility</li>
						<li class="mb1 lt-dash">HTML 5</li>
						<li class="mb1 lt-dash">Custom Elements</li>
					</ul>
				</div>
				<div class="item w-25">
					<h3 class="f4 fw4 mb0 mt0 lh-copy name">
						CSS
					</h3>
					<h4 class="level f7 fw3 black-50 tracked ttu mt0">Advanced</h4>
					<ul class="list pl0">
						<li class="mb1 lt-dash">CSS 3</li>
						<li class="mb1 lt-dash">LESS</li>
						<li class="mb1 lt-dash">Stylus</li>
						<li class="mb1 lt-dash">SASS</li>
					</ul>
				</div>
				<div class="item w-25">
					<h3 class="f4 fw4 mb0 mt0 lh-copy name">
						PHP
					</h3>
					<h4 class="level f7 fw3 black-50 tracked ttu mt0">Advanced</h4>
					<ul class="list pl0">
						<li class="mb1 lt-dash">CakePHP</li>
						<li class="mb1 lt-dash">Laravel</li>
						<li class="mb1 lt-dash">Codeigniter</li>
						<li class="mb1 lt-dash">Slim</li>
					</ul>
				</div>
				<div class="item w-25">
					<h3 class="f4 fw4 mb0 mt0 lh-copy name">
						Databases
					</h3>
					<h4 class="level f7 fw3 black-50 tracked ttu mt0">Intermediate</h4>
					<ul class="list pl0">
						<li class="mb1 lt-dash">MySQL</li>
						<li class="mb1 lt-dash">Postgres</li>
						<li class="mb1 lt-dash">MongoDB</li>
					</ul>
				</div>
				<div class="item w-25">
					<h3 class="f4 fw4 mb0 mt0 lh-copy name">
						Cisco IOS
					</h3>
					<h4 class="level f7 fw3 black-50 tracked ttu mt0">Advanced</h4>
					<ul class="list pl0">
						<li class="mb1 lt-dash">ACL</li>
						<li class="mb1 lt-dash">BGP</li>
						<li class="mb1 lt-dash">Monitoring</li>
					</ul>
				</div>
				<div class="item w-25">
					<h3 class="f4 fw4 mb0 mt0 lh-copy name">
						RouterOS
					</h3>
					<h4 class="level f7 fw3 black-50 tracked ttu mt0">Advanced</h4>
					<ul class="list pl0">
						<li class="mb1 lt-dash">Queues</li>
						<li class="mb1 lt-dash">Mangle</li>
						<li class="mb1 lt-dash">Firewalling</li>
					</ul>
				</div>
			</div>
		</section>
		<section id="languages">
			<h2 class="f3 fw5 lh-copy mt4">Languages</h2>
		
			<div class="flex flex-wrap">
				<div class="w-25">
					<h3 class="f4 fw4 mt0 mb0">English</h3>
					<h4 class="f7 fw3 tracked ttu gray mt2">C1 Level</h4>
				</div>
				</li>
				<div class="w-25">
					<h3 class="f4 fw4 mt0 mb0">Spanish</h3>
					<h4 class="f7 fw3 tracked ttu gray mt2">Native</h4>
				</div>
				</li>
				<div class="w-25">
					<h3 class="f4 fw4 mt0 mb0">Polish</h3>
					<h4 class="f7 fw3 tracked ttu gray mt2">A2 Level</h4>
				</div>
				</li>
			</div>
			</ul>
		</section>
		<section id="work">
			<h2 class="f3 fw5 lh-copy mt4">Experience</h2>
			<div class="item">
				<h3 class="name f4 fw5 lh-copy mb0">
					Grand Parade
				</h3>
		
				<div class="website">
					<a href="https://grandparade.co.uk/">https://grandparade.co.uk/</a>
				</div>
		
				<h3 class="position f5 fw5 lh-copy mb0">
					Software Engineering Team Lead
				</h3>
		
				<div class="gray fw2 date">
					<span class="startDate">
						2018-11-18
					</span>
					<span class="endDate">
						&rarr; 2021-01-01
					</span>
				</div>
				<div class="summary lh-copy">
					<p>Leading a cross-functional agile team with varying levels of experience to deliver mission-critical services and components.</p>
				</div>
				<ul class="highlights list pl2">
					<li class="mb2 lt-dash">Led the company&#x27;s home page modernization for UK customers.</li>
					<li class="mb2 lt-dash">Led the development of high-load session authentication microservices.</li>
					<li class="mb2 lt-dash">Led the development of DCI-PSS (cardholder data) compliant services.</li>
					<li class="mb2 lt-dash">Led improvements on customer journey for first-time depositing users.</li>
					<li class="mb2 lt-dash">Led the development of GraphQL gateway service layer unifying multiple Java backends.</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="name f4 fw5 lh-copy mb0">
					EPAM Systems
				</h3>
		
				<div class="website">
					<a href="https://epam.com">https://epam.com</a>
				</div>
		
				<h3 class="position f5 fw5 lh-copy mb0">
					Lead Software Engineer
				</h3>
		
				<div class="gray fw2 date">
					<span class="startDate">
						2017-07-31
					</span>
					<span class="endDate">
						&rarr; 2018-10-31
					</span>
				</div>
				<div class="summary lh-copy">
					<p>Focused on research and development with team management responsibilities for one of the biggest EPAM&#x27;s client in EU/US.</p>
				</div>
				<ul class="highlights list pl2">
					<li class="mb2 lt-dash">Certified technical interviewer.</li>
					<li class="mb2 lt-dash">Member of JavaScript Experts Internal Assessment Committee.</li>
					<li class="mb2 lt-dash">Developed Voice User Interfaces (Google Home, Alexa) for integration with our client&#x27;s products.</li>
					<li class="mb2 lt-dash">Led a distributed team with focus on building UI web components library.</li>
					<li class="mb2 lt-dash">Public speaking: Voice User Interfaces (Barka, Krak\xF3w, June 2018).</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="name f4 fw5 lh-copy mb0">
					EPAM Systems
				</h3>
		
				<div class="website">
					<a href="https://epam.com">https://epam.com</a>
				</div>
		
				<h3 class="position f5 fw5 lh-copy mb0">
					Senior Software Engineer
				</h3>
		
				<div class="gray fw2 date">
					<span class="startDate">
						2015-07-31
					</span>
					<span class="endDate">
						&rarr; 2017-07-31
					</span>
				</div>
				<div class="summary lh-copy">
					<p>Senior Software Engineer with focus on research and development of UI libraries.</p>
				</div>
				<ul class="highlights list pl2">
					<li class="mb2 lt-dash">Developed custom UI web components using TypeScript.</li>
					<li class="mb2 lt-dash">Developed custom UI components using Angular and wrapping existing web components.</li>
					<li class="mb2 lt-dash">Developed custom UI component styles in a modular and highly reusable approach using SASS.</li>
					<li class="mb2 lt-dash">Public speaking: Web Components (Barka, Krak\xF3w, 2017).</li>
					<li class="mb2 lt-dash">Public speaking: Web Components (Sztuka Wyboru, Gda\u0144sk, 2017).</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="name f4 fw5 lh-copy mb0">
					Globant
				</h3>
		
				<div class="website">
					<a href="https://globant.com">https://globant.com</a>
				</div>
		
				<h3 class="position f5 fw5 lh-copy mb0">
					Senior Software Engineer
				</h3>
		
				<div class="gray fw2 date">
					<span class="startDate">
						2014-12-01
					</span>
					<span class="endDate">
						&rarr; 2015-05-01
					</span>
				</div>
				<div class="summary lh-copy">
					<p>Worked on a project for Walt Disney Parks &amp; Resorts, one of the oldest and biggest accounts on the company, migrating from an legacy PHP based platform to AngularJS &amp; Node.js</p>
				</div>
				<ul class="highlights list pl2">
					<li class="mb2 lt-dash">Developed critical UI components as AngularJS directives. They had to be generic enough to be used across several business verticals.</li>
					<li class="mb2 lt-dash">Improved performance on several UI components by the reduction of watchers, replacing them with the proper use of ng-model controller on directives.</li>
					<li class="mb2 lt-dash">Improved performance on several UI components by reducing the amount of unnecessary two-way-bindings, replacing them with one-time-bindings.</li>
					<li class="mb2 lt-dash">Integrated several REST API services through AngularJS services and factories.</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="name f4 fw5 lh-copy mb0">
					BHP Global S.A.
				</h3>
		
				<div class="website">
					<a href="https://bhp-global.com">https://bhp-global.com</a>
				</div>
		
				<h3 class="position f5 fw5 lh-copy mb0">
					Senior Software Engineer
				</h3>
		
				<div class="gray fw2 date">
					<span class="startDate">
						2014-01-02
					</span>
					<span class="endDate">
						&rarr; 2014-11-21
					</span>
				</div>
				<div class="summary lh-copy">
					<p>Worked at BHP Global on a internal product based on the MEAN stack: MongoDB, Express, AngularJS &amp; Node.js</p>
				</div>
				<ul class="highlights list pl2">
					<li class="mb2 lt-dash">Public speaking: HipChat integrations (Buenos Aires, 2014).</li>
					<li class="mb2 lt-dash">Developed a REST API backend from ground zero, using Node.js and MongoDB, with JWToken authentication.</li>
					<li class="mb2 lt-dash">Fully integrated with JIRA project management tool through JIRA&#x27;s REST API.</li>
					<li class="mb2 lt-dash">Responsive &amp; mobile friendly admin panel built from ground zero with Twitter&#x27;s Bootstrap framework.</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="name f4 fw5 lh-copy mb0">
					Itexa S.R.L.
				</h3>
		
				<div class="website">
					<a href="https://itexa.com.ar/">https://itexa.com.ar/</a>
				</div>
		
				<h3 class="position f5 fw5 lh-copy mb0">
					Senior Software Engineer
				</h3>
		
				<div class="gray fw2 date">
					<span class="startDate">
						2013-04-01
					</span>
					<span class="endDate">
						&rarr; 2014-01-01
					</span>
				</div>
				<div class="summary lh-copy">
					<p>Worked at Itexa S.R.L. on several projects built on the LAMP stack: Linux, Apache, MySQL &amp; PHP. Involved technologies were the CodeIgniter PHP framework, jQuery &amp; Bootstrap.</p>
				</div>
				<ul class="highlights list pl2">
					<li class="mb2 lt-dash">Fully developed a medium sized learning management system for the Alliance Fran\xE7aise.</li>
					<li class="mb2 lt-dash">Developed a full-fledged accounting system for schools on a team composed by 3 people. I remember this team as the perfect MVC team.</li>
					<li class="mb2 lt-dash">Developed an entire corporate newsletter web application for ESET Latin America.</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="name f4 fw5 lh-copy mb0">
					BHP Global S.A.
				</h3>
		
				<div class="website">
					<a href="https://bhp-global.com">https://bhp-global.com</a>
				</div>
		
				<h3 class="position f5 fw5 lh-copy mb0">
					Senior Software Engineer
				</h3>
		
				<div class="gray fw2 date">
					<span class="startDate">
						2012-01-03
					</span>
					<span class="endDate">
						&rarr; 2013-01-01
					</span>
				</div>
				<div class="summary lh-copy">
					<p>Worked at BHP Global on an integration project between two project management tools, JIRA &amp; TestLink, for the Q&amp;A area of Banco Hipotecario S.A.</p>
				</div>
				<ul class="highlights list pl2">
					<li class="mb2 lt-dash">Extended TestLink API capabilities. </li>
					<li class="mb2 lt-dash">Built a middleware architecture to manage the comunication between tools: TestLink XML-RPC &lt;=&gt; JIRA REST</li>
					<li class="mb2 lt-dash">Extended TestLink reporting capabilities.</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="name f4 fw5 lh-copy mb0">
					ISRI - TecnoConsulta S.R.L.
				</h3>
		
				<div class="website">
					<a href="https://isri.com.ar">https://isri.com.ar</a>
				</div>
		
				<h3 class="position f5 fw5 lh-copy mb0">
					Instructor
				</h3>
		
				<div class="gray fw2 date">
					<span class="startDate">
						2010-02-01
					</span>
					<span class="endDate">
						&rarr; 2012-01-01
					</span>
				</div>
				<div class="summary lh-copy">
					<p>Worked together with ISRI (a private tech-related education center) to bring new topics to the classrooms in order to achieve innovation goals.</p>
				</div>
				<ul class="highlights list pl2">
					<li class="mb2 lt-dash">Cisco CCNA I Instructor</li>
					<li class="mb2 lt-dash">Cisco CCNA II Instructor</li>
					<li class="mb2 lt-dash">Cisco CCNA III Instructor</li>
					<li class="mb2 lt-dash">Cisco CCNA IV Instructor</li>
					<li class="mb2 lt-dash">Mikrotik RouterOS Instructor</li>
					<li class="mb2 lt-dash">Introduction to CodeIgniter Instructor</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="name f4 fw5 lh-copy mb0">
					Interredes S.A.
				</h3>
		
				<div class="website">
					<a href="https://www.interredes.com.ar">https://www.interredes.com.ar</a>
				</div>
		
				<h3 class="position f5 fw5 lh-copy mb0">
					Senior Network Services Manager
				</h3>
		
				<div class="gray fw2 date">
					<span class="startDate">
						2007-03-01
					</span>
					<span class="endDate">
						&rarr; 2010-06-24
					</span>
				</div>
				<div class="summary lh-copy">
					<p>Worked at Interredes S.A., a San Juan based ISP provider, from Tech Support to Network Services Manager, and on many different projects.</p>
				</div>
				<ul class="highlights list pl2">
					<li class="mb2 lt-dash">Implemented Interredes first BGP Autonomous System within a 3 people team.</li>
					<li class="mb2 lt-dash">Replaced old MS DNS server with a Linux MySQL backed PowerDNS server.</li>
					<li class="mb2 lt-dash">Built a virtual hosting service with PHP scripting &amp; MySQL capabilities.</li>
					<li class="mb2 lt-dash">Developed an internal support ticket system with client connection diagnostic capabilities to improve the support response time.</li>
				</ul>
			</div>
		</section>
		<section id="references">
			<h2 class="f3 fw5 lh-copy mt4">References</h2>
			<div class="item mb4">
				<blockquote class="reference pl0 ml0 mb0 f4 lh-copy gray quotes">
					Ricardo is technically skilled, team builder, coach and mentor. I&#x27;ve had this chance and enjoyed working with Ricardo the last 2 years at EPAM. Keep the good work!
				</blockquote>
				<h3 class="name f5 fw5 mt2">
					Vadzim Yakushau, Lead Software Engineer, EPAM Systems
				</h3>
			</div>
			<div class="item mb4">
				<blockquote class="reference pl0 ml0 mb0 f4 lh-copy gray quotes">
					It is my pleasure to recommend Ricardo, his performance working as a consultant for BHP Global proved that he will be a valuable addition to any company.
				</blockquote>
				<h3 class="name f5 fw5 mt2">
					Ernesto Corona, CEO, BHP Global
				</h3>
			</div>
			<div class="item mb4">
				<blockquote class="reference pl0 ml0 mb0 f4 lh-copy gray quotes">
					Ricardo is a team player, detail-oriented person who&#x27;s always looking for new challenges, committed to the projects he works on. It is always a pleasure to work with him.
				</blockquote>
				<h3 class="name f5 fw5 mt2">
					Mart\xEDn Fonzo, CEO, Communi Technologies
				</h3>
			</div>
		</section>
		<section id="education">
			<h2 class="f3 fw5 lh-copy mt4">Education</h2>
			<div class="item">
				<h3 class="company f4 fw5 lh-copy mb0">Proydesa Foundation</h3>
				<h4 class="company f5 fw5 mt0 mb2">
					Networking
				</h4>
				<h4 class="position f5 fw5 lh-copy mt3 mb0">
					CCNA Course Instructor
		
				</h4>
				<div class="gray fw2 date">
					<span class="startDate">
						2009-01-01
					</span>
					<span class="endDate">
						&rarr; 2011-01-01
					</span>
				</div>
		
				<ul class="courses list pl2">
					<li class="lt-dash mb1">Network Fundamentals</li>
					<li class="lt-dash mb1">Routing Protocols and Concepts</li>
					<li class="lt-dash mb1">LAN Switching &amp; Wireless</li>
					<li class="lt-dash mb1">Accesing the WAN</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="company f4 fw5 lh-copy mb0">Instituto Superior en Redes &amp; Inform\xE1tica</h3>
				<h4 class="company f5 fw5 mt0 mb2">
					Networking
				</h4>
				<h4 class="position f5 fw5 lh-copy mt3 mb0">
					Cisco Certified Network Associate
		
				</h4>
				<div class="gray fw2 date">
					<span class="startDate">
						2002-01-01
					</span>
					<span class="endDate">
						&rarr; 2004-01-01
					</span>
				</div>
		
				<ul class="courses list pl2">
					<li class="lt-dash mb1">Network Fundamentals</li>
					<li class="lt-dash mb1">Routing Protocols and Concepts</li>
					<li class="lt-dash mb1">LAN Switching &amp; Wireless</li>
					<li class="lt-dash mb1">Accesing the WAN</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="company f4 fw5 lh-copy mb0">Universidad Nacional de San Juan</h3>
				<h4 class="company f5 fw5 mt0 mb2">
					Facultad de Igenier\xEDa
				</h4>
				<h4 class="position f5 fw5 lh-copy mt3 mb0">
					Electronic Engeneering (Uncompleted)
		
				</h4>
				<div class="gray fw2 date">
					<span class="startDate">
						2004-01-01
					</span>
					<span class="endDate">
						&rarr; 2007-01-01
					</span>
				</div>
		
				<ul class="courses list pl2">
					<li class="lt-dash mb1">Mathematical Analysis I</li>
					<li class="lt-dash mb1">Mathematical Analysis II</li>
					<li class="lt-dash mb1">Algebra and Analytic Geometry</li>
					<li class="lt-dash mb1">Physics I</li>
					<li class="lt-dash mb1">Physics II</li>
					<li class="lt-dash mb1">Electromagnetism</li>
					<li class="lt-dash mb1">Computing I</li>
					<li class="lt-dash mb1">Computing II</li>
					<li class="lt-dash mb1">English I</li>
					<li class="lt-dash mb1">English II</li>
					<li class="lt-dash mb1">Economics</li>
				</ul>
			</div>
			<div class="item">
				<h3 class="company f4 fw5 lh-copy mb0">Universidad Tecnol\xF3gica Nacional</h3>
				<h4 class="company f5 fw5 mt0 mb2">
					Facultad Regional Buenos Aires
				</h4>
				<h4 class="position f5 fw5 lh-copy mt3 mb0">
					Advanced Java Programming
		
				</h4>
				<div class="gray fw2 date">
					<span class="startDate">
						2012-02-15
					</span>
					<span class="endDate">
						&rarr; 2012-06-11
					</span>
				</div>
		
			</div>
		</section>
		<section id="interests">
			<h2 class="f3 fw5 lh-copy mt4">Interests</h2>
			<div class="flex flex-wrap">
				<div class="w-25">
					<h3 class="f4 fw4 mt0 mb0 lh-copy name">
						Skydiving
					</h3>
					<ul class="list pl0">
						<li class="mb1 lt-dash">B.A.S.E.</li>
						<li class="mb1 lt-dash">Gliding</li>
					</ul>
				</div>
				<div class="w-25">
					<h3 class="f4 fw4 mt0 mb0 lh-copy name">
						Music
					</h3>
					<ul class="list pl0">
						<li class="mb1 lt-dash">Guitar</li>
						<li class="mb1 lt-dash">Bass</li>
					</ul>
				</div>
				<div class="w-25">
					<h3 class="f4 fw4 mt0 mb0 lh-copy name">
						Life hacking
					</h3>
					<ul class="list pl0">
						<li class="mb1 lt-dash">Enviroment-friendly</li>
						<li class="mb1 lt-dash">Self-management</li>
						<li class="mb1 lt-dash">Critical thinking</li>
						<li class="mb1 lt-dash">Decision-making</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</body>

</html>`,"resume.hbs":`<!doctype html>
<html>

<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">

	<title>{{#resume.basics}}{{name}}{{/resume.basics}}</title>
	<link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />

	<style>{{{css}}}</style>

</head>

<body class="sans-serif black bg-white">
	<div id="resume" class="mw8 center mb6 pa3">
		{{> basics }}
		{{> skills }}
		{{> languages }}
		{{> work }}
		{{> references }}
		{{> volunteer }}
		{{> education }}
		{{> awards }}
		{{> publications }}
		{{> interests }}
	</div>
</body>

</html>`,"style.css":`a {
  color: #364fc7;
  text-decoration: none;
}

.lt-dash::before {
  content: "- ";
}

@media print {
  ul,
  .item {
    page-break-inside: avoid;
  }
}
`},B={partials:["awards.hbs","basics.hbs","education.hbs","interests.hbs","languages.hbs","publications.hbs","references.hbs","skills.hbs","volunteer.hbs","work.hbs"],public:["index.html"],".":["README.md","index.js","package.json","partials","public","resume.hbs","style.css"]};Jt=function(t,e){var s=Wt(t);return s!==void 0?s:""},zt=function(t,e){var s=dt(t);return s===void 0&&(s=[]),e&&e.withFileTypes?s.map(function(n){var i=mt(t)+"/"+n,a=dt(i)!==void 0;return{name:n,isFile:function(){return!a},isDirectory:function(){return a}}}):s},Kt=function(t){return Wt(t)!==void 0||dt(t)!==void 0},Qt=function(){},Yt=function(){},gt=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Xt=gt,Zt=function(){},$t=function(){},te=function(){return{pipe:function(t){return t},on:function(){return this}}},ee=function(){return{write:function(){},end:function(){},on:function(){return this}}},rs={readFileSync:Jt,readdirSync:zt,existsSync:Kt,writeFileSync:Qt,mkdirSync:Yt,statSync:gt,lstatSync:Xt,unlinkSync:Zt,rmdirSync:$t,createReadStream:te,createWriteStream:ee}});var he={};Gt(he,{basename:()=>X,default:()=>ls,dirname:()=>yt,extname:()=>Z,isAbsolute:()=>ae,join:()=>se,normalize:()=>re,parse:()=>oe,relative:()=>le,resolve:()=>ne,sep:()=>ie});var se,ne,yt,X,Z,ie,ae,re,le,oe,ls,ce=ut(()=>{"use strict";p();se=function(){return[].slice.call(arguments).join("/")},ne=function(){return[].slice.call(arguments).join("/")},yt=function(t){return t.split("/").slice(0,-1).join("/")},X=function(t,e){var s=t.split("/").pop()||"";return e&&s.endsWith(e)?s.slice(0,-e.length):s},Z=function(t){var e=t.match(/\.[^.]+$/);return e?e[0]:""},ie="/",ae=function(t){return t.charAt(0)==="/"},re=function(t){return t},le=function(t,e){return e},oe=function(t){return{root:"",dir:yt(t),base:X(t),ext:Z(t),name:X(t,Z(t))}},ls={join:se,resolve:ne,dirname:yt,basename:X,extname:Z,sep:ie,isAbsolute:ae,normalize:re,relative:le,parse:oe}});var wt=m(ue=>{"use strict";p();function pe(t){this.string=t}pe.prototype.toString=function(){return""+this.string};ue.default=pe});var q=m(P=>{"use strict";p();var os=wt().default,hs={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},cs=/[&<>"'`]/g,ps=/[&<>"'`]/;function us(t){return hs[t]}function fs(t){for(var e=1;e<arguments.length;e++)for(var s in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],s)&&(t[s]=arguments[e][s]);return t}P.extend=fs;var kt=Object.prototype.toString;P.toString=kt;var $=function(t){return typeof t=="function"};$(/x/)&&($=function(t){return typeof t=="function"&&kt.call(t)==="[object Function]"});var $;P.isFunction=$;var fe=Array.isArray||function(t){return t&&typeof t=="object"?kt.call(t)==="[object Array]":!1};P.isArray=fe;function ds(t){return t instanceof os?t.toString():t==null?"":t?(t=""+t,ps.test(t)?t.replace(cs,us):t):t+""}P.escapeExpression=ds;function ms(t){return!t&&t!==0?!0:!!(fe(t)&&t.length===0)}P.isEmpty=ms;function gs(t,e){return(t?t+".":"")+e}P.appendContextPath=gs});var N=m(me=>{"use strict";p();var St=["description","fileName","lineNumber","message","name","number","stack"];function de(t,e){var s;e&&e.firstLine&&(s=e.firstLine,t+=" - "+s+":"+e.firstColumn);for(var n=Error.prototype.constructor.call(this,t),i=0;i<St.length;i++)this[St[i]]=n[St[i]];s&&(this.lineNumber=s,this.column=e.firstColumn)}de.prototype=new Error;me.default=de});var D=m(I=>{"use strict";p();var y=q(),Et=N().default,vs="2.0.0";I.VERSION=vs;var bs=6;I.COMPILER_REVISION=bs;var ys={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};I.REVISION_CHANGES=ys;var ge=y.isArray,xt=y.isFunction,ve=y.toString,be="[object Object]";function Pt(t,e){this.helpers=t||{},this.partials=e||{},ws(this)}I.HandlebarsEnvironment=Pt;Pt.prototype={constructor:Pt,logger:G,log:ye,registerHelper:function(t,e){if(ve.call(t)===be){if(e)throw new Et("Arg not supported with multiple helpers");y.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){ve.call(t)===be?y.extend(this.partials,t):this.partials[t]=e},unregisterPartial:function(t){delete this.partials[t]}};function ws(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new Et("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(e,s){var n=s.inverse,i=s.fn;if(e===!0)return i(this);if(e===!1||e==null)return n(this);if(ge(e))return e.length>0?(s.ids&&(s.ids=[s.name]),t.helpers.each(e,s)):n(this);if(s.data&&s.ids){var a=tt(s.data);a.contextPath=y.appendContextPath(s.data.contextPath,s.name),s={data:a}}return i(e,s)}),t.registerHelper("each",function(e,s){if(!s)throw new Et("Must pass iterator to #each");var n=s.fn,i=s.inverse,a=0,r="",l,c;if(s.data&&s.ids&&(c=y.appendContextPath(s.data.contextPath,s.ids[0])+"."),xt(e)&&(e=e.call(this)),s.data&&(l=tt(s.data)),e&&typeof e=="object")if(ge(e))for(var o=e.length;a<o;a++)l&&(l.index=a,l.first=a===0,l.last=a===e.length-1,c&&(l.contextPath=c+a)),r=r+n(e[a],{data:l});else for(var u in e)e.hasOwnProperty(u)&&(l&&(l.key=u,l.index=a,l.first=a===0,c&&(l.contextPath=c+u)),r=r+n(e[u],{data:l}),a++);return a===0&&(r=i(this)),r}),t.registerHelper("if",function(e,s){return xt(e)&&(e=e.call(this)),!s.hash.includeZero&&!e||y.isEmpty(e)?s.inverse(this):s.fn(this)}),t.registerHelper("unless",function(e,s){return t.helpers.if.call(this,e,{fn:s.inverse,inverse:s.fn,hash:s.hash})}),t.registerHelper("with",function(e,s){xt(e)&&(e=e.call(this));var n=s.fn;if(y.isEmpty(e))return s.inverse(this);if(s.data&&s.ids){var i=tt(s.data);i.contextPath=y.appendContextPath(s.data.contextPath,s.ids[0]),s={data:i}}return n(e,s)}),t.registerHelper("log",function(e,s){var n=s.data&&s.data.level!=null?parseInt(s.data.level,10):1;t.log(n,e)}),t.registerHelper("lookup",function(e,s){return e&&e[s]})}var G={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(G.level<=t){var s=G.methodMap[t];typeof console<"u"&&console[s]&&console[s].call(console,e)}}};I.logger=G;var ye=G.log;I.log=ye;var tt=function(t){var e=y.extend({},t);return e._parent=t,e};I.createFrame=tt});var ke=m(V=>{"use strict";p();var Nt=q(),L=N().default,ks=D().COMPILER_REVISION,we=D().REVISION_CHANGES,Ss=D().createFrame;function xs(t){var e=t&&t[0]||1,s=ks;if(e!==s)if(e<s){var n=we[s],i=we[e];throw new L("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+i+").")}else throw new L("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}V.checkRevision=xs;function Es(t,e){if(!e)throw new L("No environment passed to template");if(!t||!t.main)throw new L("Unknown template object: "+typeof t);e.VM.checkRevision(t.compiler);var s=function(a,r,l,c,o,u,h,x,M){o&&(c=Nt.extend({},c,o));var _=e.VM.invokePartial.call(this,a,l,c,u,h,x,M);if(_==null&&e.compile){var jt={helpers:u,partials:h,data:x,depths:M};h[l]=e.compile(a,{data:x!==void 0,compat:t.compat},e),_=h[l](c,jt)}if(_!=null){if(r){for(var k=_.split(`
`),E=0,ot=k.length;E<ot&&!(!k[E]&&E+1===ot);E++)k[E]=r+k[E];_=k.join(`
`)}return _}else throw new L("The partial "+l+" could not be compiled when running in runtime-only mode")},n={lookup:function(a,r){for(var l=a.length,c=0;c<l;c++)if(a[c]&&a[c][r]!=null)return a[c][r]},lambda:function(a,r){return typeof a=="function"?a.call(r):a},escapeExpression:Nt.escapeExpression,invokePartial:s,fn:function(a){return t[a]},programs:[],program:function(a,r,l){var c=this.programs[a],o=this.fn(a);return r||l?c=et(this,a,o,r,l):c||(c=this.programs[a]=et(this,a,o)),c},data:function(a,r){for(;a&&r--;)a=a._parent;return a},merge:function(a,r){var l=a||r;return a&&r&&a!==r&&(l=Nt.extend({},r,a)),l},noop:e.VM.noop,compilerInfo:t.compiler},i=function(a,r){r=r||{};var l=r.data;i._setup(r),!r.partial&&t.useData&&(l=Is(a,l));var c;return t.useDepths&&(c=r.depths?[a].concat(r.depths):[a]),t.main.call(n,a,n.helpers,n.partials,l,c)};return i.isTop=!0,i._setup=function(a){a.partial?(n.helpers=a.helpers,n.partials=a.partials):(n.helpers=n.merge(a.helpers,e.helpers),t.usePartial&&(n.partials=n.merge(a.partials,e.partials)))},i._child=function(a,r,l){if(t.useDepths&&!l)throw new L("must pass parent depths");return et(n,a,t[a],r,l)},i}V.template=Es;function et(t,e,s,n,i){var a=function(r,l){return l=l||{},s.call(t,r,t.helpers,t.partials,l.data||n,i&&[r].concat(i))};return a.program=e,a.depth=i?i.length:0,a}V.program=et;function Ps(t,e,s,n,i,a,r){var l={partial:!0,helpers:n,partials:i,data:a,depths:r};if(t===void 0)throw new L("The partial "+e+" could not be found");if(t instanceof Function)return t(s,l)}V.invokePartial=Ps;function Ns(){return""}V.noop=Ns;function Is(t,e){return(!e||!("root"in e))&&(e=e?Ss(e):{},e.root=t),e}});var Ne=m(Pe=>{"use strict";p();var Se=D(),As=wt().default,_s=N().default,It=q(),xe=ke(),Ee=function(){var t=new Se.HandlebarsEnvironment;return It.extend(t,Se),t.SafeString=As,t.Exception=_s,t.Utils=It,t.escapeExpression=It.escapeExpression,t.VM=xe,t.template=function(e){return xe.template(e,t)},t},st=Ee();st.create=Ee;st.default=st;Pe.default=st});var At=m(Ae=>{"use strict";p();var Ie=N().default;function v(t){t=t||{},this.firstLine=t.first_line,this.firstColumn=t.first_column,this.lastColumn=t.last_column,this.lastLine=t.last_line}var U={ProgramNode:function(t,e,s){v.call(this,s),this.type="program",this.statements=t,this.strip=e},MustacheNode:function(t,e,s,n,i){if(v.call(this,i),this.type="mustache",this.strip=n,s!=null&&s.charAt){var a=s.charAt(3)||s.charAt(2);this.escaped=a!=="{"&&a!=="&"}else this.escaped=!!s;t instanceof U.SexprNode?this.sexpr=t:this.sexpr=new U.SexprNode(t,e),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(t,e,s){v.call(this,s),this.type="sexpr",this.hash=e;var n=this.id=t[0],i=this.params=t.slice(1);this.isHelper=!!(i.length||e),this.eligibleHelper=this.isHelper||n.isSimple},PartialNode:function(t,e,s,n,i){v.call(this,i),this.type="partial",this.partialName=t,this.context=e,this.hash=s,this.strip=n,this.strip.inlineStandalone=!0},BlockNode:function(t,e,s,n,i){v.call(this,i),this.type="block",this.mustache=t,this.program=e,this.inverse=s,this.strip=n,s&&!e&&(this.isInverse=!0)},RawBlockNode:function(t,e,s,n){if(v.call(this,n),t.sexpr.id.original!==s)throw new Ie(t.sexpr.id.original+" doesn't match "+s,this);e=new U.ContentNode(e,n),this.type="block",this.mustache=t,this.program=new U.ProgramNode([e],{},n)},ContentNode:function(t,e){v.call(this,e),this.type="content",this.original=this.string=t},HashNode:function(t,e){v.call(this,e),this.type="hash",this.pairs=t},IdNode:function(t,e){v.call(this,e),this.type="ID";for(var s="",n=[],i=0,a="",r=0,l=t.length;r<l;r++){var c=t[r].part;if(s+=(t[r].separator||"")+c,c===".."||c==="."||c==="this"){if(n.length>0)throw new Ie("Invalid path: "+s,this);c===".."?(i++,a+="../"):this.isScoped=!0}else n.push(c)}this.original=s,this.parts=n,this.string=n.join("."),this.depth=i,this.idName=a+this.string,this.isSimple=t.length===1&&!this.isScoped&&i===0,this.stringModeValue=this.string},PartialNameNode:function(t,e){v.call(this,e),this.type="PARTIAL_NAME",this.name=t.original},DataNode:function(t,e){v.call(this,e),this.type="DATA",this.id=t,this.stringModeValue=t.stringModeValue,this.idName="@"+t.stringModeValue},StringNode:function(t,e){v.call(this,e),this.type="STRING",this.original=this.string=this.stringModeValue=t},NumberNode:function(t,e){v.call(this,e),this.type="NUMBER",this.original=this.number=t,this.stringModeValue=Number(t)},BooleanNode:function(t,e){v.call(this,e),this.type="BOOLEAN",this.bool=t,this.stringModeValue=t==="true"},CommentNode:function(t,e){v.call(this,e),this.type="comment",this.comment=t,this.strip={inlineStandalone:!0}}};Ae.default=U});var Ce=m(_e=>{"use strict";p();var Cs=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(i,a,r,l,c,o,u){var h=o.length-1;switch(c){case 1:return l.prepareProgram(o[h-1].statements,!0),o[h-1];break;case 2:this.$=new l.ProgramNode(l.prepareProgram(o[h]),{},this._$);break;case 3:this.$=o[h];break;case 4:this.$=o[h];break;case 5:this.$=o[h];break;case 6:this.$=o[h];break;case 7:this.$=new l.ContentNode(o[h],this._$);break;case 8:this.$=new l.CommentNode(o[h],this._$);break;case 9:this.$=new l.RawBlockNode(o[h-2],o[h-1],o[h],this._$);break;case 10:this.$=new l.MustacheNode(o[h-1],null,"","",this._$);break;case 11:this.$=l.prepareBlock(o[h-3],o[h-2],o[h-1],o[h],!1,this._$);break;case 12:this.$=l.prepareBlock(o[h-3],o[h-2],o[h-1],o[h],!0,this._$);break;case 13:this.$=new l.MustacheNode(o[h-1],null,o[h-2],l.stripFlags(o[h-2],o[h]),this._$);break;case 14:this.$=new l.MustacheNode(o[h-1],null,o[h-2],l.stripFlags(o[h-2],o[h]),this._$);break;case 15:this.$={strip:l.stripFlags(o[h-1],o[h-1]),program:o[h]};break;case 16:this.$={path:o[h-1],strip:l.stripFlags(o[h-2],o[h])};break;case 17:this.$=new l.MustacheNode(o[h-1],null,o[h-2],l.stripFlags(o[h-2],o[h]),this._$);break;case 18:this.$=new l.MustacheNode(o[h-1],null,o[h-2],l.stripFlags(o[h-2],o[h]),this._$);break;case 19:this.$=new l.PartialNode(o[h-3],o[h-2],o[h-1],l.stripFlags(o[h-4],o[h]),this._$);break;case 20:this.$=new l.PartialNode(o[h-2],void 0,o[h-1],l.stripFlags(o[h-3],o[h]),this._$);break;case 21:this.$=new l.SexprNode([o[h-2]].concat(o[h-1]),o[h],this._$);break;case 22:this.$=new l.SexprNode([o[h]],null,this._$);break;case 23:this.$=o[h];break;case 24:this.$=new l.StringNode(o[h],this._$);break;case 25:this.$=new l.NumberNode(o[h],this._$);break;case 26:this.$=new l.BooleanNode(o[h],this._$);break;case 27:this.$=o[h];break;case 28:o[h-1].isHelper=!0,this.$=o[h-1];break;case 29:this.$=new l.HashNode(o[h],this._$);break;case 30:this.$=[o[h-2],o[h]];break;case 31:this.$=new l.PartialNameNode(o[h],this._$);break;case 32:this.$=new l.PartialNameNode(new l.StringNode(o[h],this._$),this._$);break;case 33:this.$=new l.PartialNameNode(new l.NumberNode(o[h],this._$));break;case 34:this.$=new l.DataNode(o[h],this._$);break;case 35:this.$=new l.IdNode(o[h],this._$);break;case 36:o[h-2].push({part:o[h],separator:o[h-1]}),this.$=o[h-2];break;case 37:this.$=[{part:o[h]}];break;case 38:this.$=[];break;case 39:o[h-1].push(o[h]);break;case 48:this.$=[];break;case 49:o[h-1].push(o[h]);break;case 52:this.$=[o[h]];break;case 53:o[h-1].push(o[h]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(i,a){throw new Error(i)},parse:function(i){var a=this,r=[0],l=[null],c=[],o=this.table,u="",h=0,x=0,M=0,_=2,jt=1;this.lexer.setInput(i),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var k=this.lexer.yylloc;c.push(k);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function ot(w){r.length=r.length-2*w,l.length=l.length-w,c.length=c.length-w}function $e(){var w;return w=a.lexer.lex()||1,typeof w!="number"&&(w=a.symbols_[w]||w),w}for(var g,ht,C,b,en,ct,T={},z,S,Ft,K;;){if(C=r[r.length-1],this.defaultActions[C]?b=this.defaultActions[C]:((g===null||typeof g>"u")&&(g=$e()),b=o[C]&&o[C][g]),typeof b>"u"||!b.length||!b[0]){var pt="";if(!M){K=[];for(z in o[C])this.terminals_[z]&&z>2&&K.push("'"+this.terminals_[z]+"'");this.lexer.showPosition?pt="Parse error on line "+(h+1)+`:
`+this.lexer.showPosition()+`
Expecting `+K.join(", ")+", got '"+(this.terminals_[g]||g)+"'":pt="Parse error on line "+(h+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(pt,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:k,expected:K})}}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+C+", token: "+g);switch(b[0]){case 1:r.push(g),l.push(this.lexer.yytext),c.push(this.lexer.yylloc),r.push(b[1]),g=null,ht?(g=ht,ht=null):(x=this.lexer.yyleng,u=this.lexer.yytext,h=this.lexer.yylineno,k=this.lexer.yylloc,M>0&&M--);break;case 2:if(S=this.productions_[b[1]][1],T.$=l[l.length-S],T._$={first_line:c[c.length-(S||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(S||1)].first_column,last_column:c[c.length-1].last_column},E&&(T._$.range=[c[c.length-(S||1)].range[0],c[c.length-1].range[1]]),ct=this.performAction.call(T,u,x,h,this.yy,b[1],l,c),typeof ct<"u")return ct;S&&(r=r.slice(0,-1*S*2),l=l.slice(0,-1*S),c=c.slice(0,-1*S)),r.push(this.productions_[b[1]][0]),l.push(T.$),c.push(T._$),Ft=o[r[r.length-2]][r[r.length-1]],r.push(Ft);break;case 3:return!0}}return!0}},e=(function(){var n={EOF:1,parseError:function(a,r){if(this.yy.parser)this.yy.parser.parseError(a,r);else throw new Error(a)},setInput:function(i){return this._input=i,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var a=i.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var a=i.length,r=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a-1),this.offset-=a;var l=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===l.length?this.yylloc.first_column:0)+l[l.length-r.length].length-r[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-a]),this},more:function(){return this._more=!0,this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),a=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+a+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,a,r,l,c,o;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),h=0;h<u.length&&(r=this._input.match(this.rules[u[h]]),!(r&&(!a||r[0].length>a[0].length)&&(a=r,l=h,!this.options.flex)));h++);return a?(o=a[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],i=this.performAction.call(this,this.yy,this,u[l],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return typeof a<"u"?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return n.options={},n.performAction=function(a,r,l,c){function o(h,x){return r.yytext=r.yytext.substr(h,r.yyleng-x)}var u=c;switch(l){case 0:if(r.yytext.slice(-2)==="\\\\"?(o(0,1),this.begin("mu")):r.yytext.slice(-1)==="\\"?(o(0,1),this.begin("emu")):this.begin("mu"),r.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return r.yytext=r.yytext.substr(5,r.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return o(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return o(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return r.yytext=o(1,2).replace(/\\"/g,'"'),42;break;case 30:return r.yytext=o(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return r.yytext=o(1,2),50;break;case 37:return"INVALID";case 38:return 5}},n.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],n.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},n})();t.lexer=e;function s(){this.yy={}}return s.prototype=t,t.Parser=s,new s})();_e.default=Cs});var De=m(nt=>{"use strict";p();var Ds=N().default;function Ls(t,e){return{left:t.charAt(2)==="~",right:e.charAt(e.length-3)==="~"}}nt.stripFlags=Ls;function Rs(t,e,s,n,i,a){if(t.sexpr.id.original!==n.path.original)throw new Ds(t.sexpr.id.original+" doesn't match "+n.path.original,t);var r=s&&s.program,l={left:t.strip.left,right:n.strip.right,openStandalone:Ct(e.statements),closeStandalone:_t((r||e).statements)};if(t.strip.right&&R(e.statements,null,!0),r){var c=s.strip;c.left&&A(e.statements,null,!0),c.right&&R(r.statements,null,!0),n.strip.left&&A(r.statements,null,!0),_t(e.statements)&&Ct(r.statements)&&(A(e.statements),R(r.statements))}else n.strip.left&&A(e.statements,null,!0);return i?new this.BlockNode(t,r,e,l,a):new this.BlockNode(t,e,r,l,a)}nt.prepareBlock=Rs;function Os(t,e){for(var s=0,n=t.length;s<n;s++){var i=t[s],a=i.strip;if(a){var r=_t(t,s,e,i.type==="partial"),l=Ct(t,s,e),c=a.openStandalone&&r,o=a.closeStandalone&&l,u=a.inlineStandalone&&r&&l;a.right&&R(t,s,!0),a.left&&A(t,s,!0),u&&(R(t,s),A(t,s)&&i.type==="partial"&&(i.indent=/([ \t]+$)/.exec(t[s-1].original)?RegExp.$1:"")),c&&(R((i.program||i.inverse).statements),A(t,s)),o&&(R(t,s),A((i.inverse||i.program).statements))}}return t}nt.prepareProgram=Os;function _t(t,e,s){e===void 0&&(e=t.length);var n=t[e-1],i=t[e-2];if(!n)return s;if(n.type==="content")return(i||!s?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(n.original)}function Ct(t,e,s){e===void 0&&(e=-1);var n=t[e+1],i=t[e+2];if(!n)return s;if(n.type==="content")return(i||!s?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(n.original)}function R(t,e,s){var n=t[e==null?0:e+1];if(!(!n||n.type!=="content"||!s&&n.rightStripped)){var i=n.string;n.string=n.string.replace(s?/^\s+/:/^[ \t]*\r?\n?/,""),n.rightStripped=n.string!==i}}function A(t,e,s){var n=t[e==null?t.length-1:e-1];if(!(!n||n.type!=="content"||!s&&n.leftStripped)){var i=n.string;return n.string=n.string.replace(s?/\s+$/:/[ \t]+$/,""),n.leftStripped=n.string!==i,n.leftStripped}}});var Rt=m(Lt=>{"use strict";p();var Dt=Ce().default,Le=At().default,Hs=De(),Ms=q().extend;Lt.parser=Dt;var Re={};Ms(Re,Hs,Le);function Ts(t){return t.constructor===Le.ProgramNode?t:(Dt.yy=Re,Dt.parse(t))}Lt.parse=Ts});var at=m(it=>{"use strict";p();var Ht=N().default,Oe=q().isArray,Bs=[].slice;function Ot(){}it.Compiler=Ot;Ot.prototype={compiler:Ot,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var s=0;s<e;s++){var n=this.opcodes[s],i=t.opcodes[s];if(n.opcode!==i.opcode||!He(n.args,i.args))return!1}for(e=this.children.length,s=0;s<e;s++)if(!this.children[s].equals(t.children[s]))return!1;return!0},guid:0,compile:function(t,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds;var s=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},s)for(var n in s)this.options.knownHelpers[n]=s[n];return this.accept(t)},accept:function(t){return this[t.type](t)},program:function(t){for(var e=t.statements,s=0,n=e.length;s<n;s++)this.accept(e[s]);return this.isSimple=n===1,this.depths.list=this.depths.list.sort(function(i,a){return i-a}),this},compileProgram:function(t){var e=new this.compiler().compile(t,this.options),s=this.guid++,n;this.usePartial=this.usePartial||e.usePartial,this.children[s]=e;for(var i=0,a=e.depths.list.length;i<a;i++)n=e.depths.list[i],!(n<2)&&this.addDepth(n-1);return s},block:function(t){var e=t.mustache,s=t.program,n=t.inverse;s&&(s=this.compileProgram(s)),n&&(n=this.compileProgram(n));var i=e.sexpr,a=this.classifySexpr(i);a==="helper"?this.helperSexpr(i,s,n):a==="simple"?(this.simpleSexpr(i),this.opcode("pushProgram",s),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",i.id.original)):(this.ambiguousSexpr(i,s,n),this.opcode("pushProgram",s),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var e=t.pairs,s,n;for(this.opcode("pushHash"),s=0,n=e.length;s<n;s++)this.pushParam(e[s][1]);for(;s--;)this.opcode("assignToHash",e[s][0]);this.opcode("popHash")},partial:function(t){var e=t.partialName;this.usePartial=!0,t.hash?this.accept(t.hash):this.opcode("push","undefined"),t.context?this.accept(t.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",e.name,t.indent||""),this.opcode("append")},content:function(t){t.string&&this.opcode("appendContent",t.string)},mustache:function(t){this.sexpr(t.sexpr),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(t,e,s){var n=t.id,i=n.parts[0],a=e!=null||s!=null;this.opcode("getContext",n.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",s),this.ID(n),this.opcode("invokeAmbiguous",i,a)},simpleSexpr:function(t){var e=t.id;e.type==="DATA"?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,s){var n=this.setupFullMustacheParams(t,e,s),i=t.id,a=i.parts[0];if(this.options.knownHelpers[a])this.opcode("invokeKnownHelper",n.length,a);else{if(this.options.knownHelpersOnly)throw new Ht("You specified knownHelpersOnly, but used the unknown helper "+a,t);i.falsy=!0,this.ID(i),this.opcode("invokeHelper",n.length,i.original,i.isSimple)}},sexpr:function(t){var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0];e?this.opcode("lookupOnContext",t.parts,t.falsy,t.isScoped):this.opcode("pushContext")},DATA:function(t){this.options.data=!0,this.opcode("lookupData",t.id.depth,t.id.parts)},STRING:function(t){this.opcode("pushString",t.string)},NUMBER:function(t){this.opcode("pushLiteral",t.number)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:Bs.call(arguments,1)})},addDepth:function(t){t!==0&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifySexpr:function(t){var e=t.isHelper,s=t.eligibleHelper,n=this.options;if(s&&!e){var i=t.id.parts[0];n.knownHelpers[i]?e=!0:n.knownHelpersOnly&&(s=!1)}return e?"helper":s?"ambiguous":"simple"},pushParams:function(t){for(var e=0,s=t.length;e<s;e++)this.pushParam(t[e])},pushParam:function(t){this.stringParams?(t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",t.stringModeValue,t.type),t.type==="sexpr"&&this.sexpr(t)):(this.trackIds&&this.opcode("pushId",t.type,t.idName||t.stringModeValue),this.accept(t))},setupFullMustacheParams:function(t,e,s){var n=t.params;return this.pushParams(n),this.opcode("pushProgram",e),this.opcode("pushProgram",s),t.hash?this.hash(t.hash):this.opcode("emptyHash"),n}};function qs(t,e,s){if(t==null||typeof t!="string"&&t.constructor!==s.AST.ProgramNode)throw new Ht("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var n=s.parse(t),i=new s.Compiler().compile(n,e);return new s.JavaScriptCompiler().compile(i,e)}it.precompile=qs;function Vs(t,e,s){if(t==null||typeof t!="string"&&t.constructor!==s.AST.ProgramNode)throw new Ht("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var n;function i(){var r=s.parse(t),l=new s.Compiler().compile(r,e),c=new s.JavaScriptCompiler().compile(l,e,void 0,!0);return s.template(c)}var a=function(r,l){return n||(n=i()),n.call(this,r,l)};return a._setup=function(r){return n||(n=i()),n._setup(r)},a._child=function(r,l,c){return n||(n=i()),n._child(r,l,c)},a}it.compile=Vs;function He(t,e){if(t===e)return!0;if(Oe(t)&&Oe(e)&&t.length===e.length){for(var s=0;s<t.length;s++)if(!He(t[s],e[s]))return!1;return!0}}});var qe=m(Be=>{"use strict";p();var js=D().COMPILER_REVISION,Fs=D().REVISION_CHANGES,Mt=N().default;function W(t){this.value=t}function O(){}O.prototype={nameLookup:function(t,e){return O.isValidJavaScriptVariableName(e)?t+"."+e:t+"['"+e+"']"},depthedLookup:function(t){return this.aliases.lookup="this.lookup",'lookup(depths, "'+t+'")'},compilerInfo:function(){var t=js,e=Fs[t];return[t,e]},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,e,s,n){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!n,this.name=this.environment.name,this.isChild=!!s,this.context=s||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.depths.list.length||this.options.compat;var i=t.opcodes,a,r,l;for(r=0,l=i.length;r<l;r++)a=i[r],this[a.opcode].apply(this,a.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Mt("Compile completed with content left on stack");var c=this.createFunctionContext(n);if(this.isChild)return c;var o={compiler:this.compilerInfo(),main:c},u=this.context.programs;for(r=0,l=u.length;r<l;r++)u[r]&&(o[r]=u[r]);return this.environment.usePartial&&(o.usePartial=!0),this.options.data&&(o.useData=!0),this.useDepths&&(o.useDepths=!0),this.options.compat&&(o.compat=!0),n||(o.compiler=JSON.stringify(o.compiler),o=this.objectLiteral(o)),o},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(t){var e="",s=this.stackVars.concat(this.registers.list);s.length>0&&(e+=", "+s.join(", "));for(var n in this.aliases)this.aliases.hasOwnProperty(n)&&(e+=", "+n+"="+this.aliases[n]);var i=["depth0","helpers","partials","data"];this.useDepths&&i.push("depths");var a=this.mergeSource(e);return t?(i.push(a),Function.apply(this,i)):"function("+i.join(",")+`) {
  `+a+"}"},mergeSource:function(t){for(var e="",s,n=!this.forceBuffer,i,a=0,r=this.source.length;a<r;a++){var l=this.source[a];l.appendToBuffer?s?s=s+`
    + `+l.content:s=l.content:(s&&(e?e+="buffer += "+s+`;
  `:(i=!0,e=s+`;
  `),s=void 0),e+=l+`
  `,this.environment.isSimple||(n=!1))}return n?(s||!e)&&(e+="return "+(s||'""')+`;
`):(t+=", buffer = "+(i?"":this.initializeBuffer()),s?e+="return buffer + "+s+`;
`:e+=`return buffer;
`),t&&(e="var "+t.substring(2)+(i?"":`;
  `)+e),e},blockValue:function(t){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams(t,0,e);var s=this.popStack();e.splice(1,0,s),this.push("blockHelperMissing.call("+e.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams("",0,t,!0),this.flushInline();var e=this.topStack();t.splice(1,0,e),this.pushSource("if (!"+this.lastHelper+") { "+e+" = blockHelperMissing.call("+t.join(", ")+"); }")},appendContent:function(t){this.pendingContent&&(t=this.pendingContent+t),this.pendingContent=t},append:function(){this.flushInline();var t=this.popStack();this.pushSource("if ("+t+" != null) { "+this.appendToBuffer(t)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,s){var n=0,i=t.length;for(!s&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[n++])):this.pushContext();n<i;n++)this.replaceStack(function(a){var r=this.nameLookup(a,t[n],"context");return e?" && "+r:" != null ? "+r+" : "+a})},lookupData:function(t,e){t?this.pushStackLiteral("this.data(data, "+t+")"):this.pushStackLiteral("data");for(var s=e.length,n=0;n<s;n++)this.replaceStack(function(i){return" && "+this.nameLookup(i,e[n],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),e!=="sexpr"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+t.ids.join(",")+"}"),this.stringParams&&(this.push("{"+t.contexts.join(",")+"}"),this.push("{"+t.types.join(",")+"}")),this.push(`{
    `+t.values.join(`,
    `)+`
  }`)},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},invokeHelper:function(t,e,s){this.aliases.helperMissing="helpers.helperMissing";var n=this.popStack(),i=this.setupHelper(t,e),a=(s?i.name+" || ":"")+n+" || helperMissing";this.push("(("+a+").call("+i.callParams+"))")},invokeKnownHelper:function(t,e){var s=this.setupHelper(t,e);this.push(s.name+".call("+s.callParams+")")},invokeAmbiguous:function(t,e){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var s=this.popStack();this.emptyHash();var n=this.setupHelper(0,t,e),i=this.lastHelper=this.nameLookup("helpers",t,"helper");this.push("((helper = (helper = "+i+" || "+s+") != null ? helper : helperMissing"+(n.paramsInit?"),("+n.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+n.callParams+") : helper))")},invokePartial:function(t,e){var s=[this.nameLookup("partials",t,"partial"),"'"+e+"'","'"+t+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?s.push("data"):this.options.compat&&s.push("undefined"),this.options.compat&&s.push("depths"),this.push("this.invokePartial("+s.join(", ")+")")},assignToHash:function(t){var e=this.popStack(),s,n,i;this.trackIds&&(i=this.popStack()),this.stringParams&&(n=this.popStack(),s=this.popStack());var a=this.hash;s&&a.contexts.push("'"+t+"': "+s),n&&a.types.push("'"+t+"': "+n),i&&a.ids.push("'"+t+"': "+i),a.values.push("'"+t+"': ("+e+")")},pushId:function(t,e){t==="ID"||t==="DATA"?this.pushString(e):t==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:O,compileChildren:function(t,e){for(var s=t.children,n,i,a=0,r=s.length;a<r;a++){n=s[a],i=new this.compiler;var l=this.matchExistingProgram(n);l==null?(this.context.programs.push(""),l=this.context.programs.length,n.index=l,n.name="program"+l,this.context.programs[l]=i.compile(n,e,this.context,!this.precompile),this.context.environments[l]=n,this.useDepths=this.useDepths||i.useDepths):(n.index=l,n.name="program"+l)}},matchExistingProgram:function(t){for(var e=0,s=this.context.environments.length;e<s;e++){var n=this.context.environments[e];if(n&&n.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],s=e.depths.list,n=this.useDepths,i,a=[e.index,"data"];return n&&a.push("depths"),"this.program("+a.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new W(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var e=this.incrStack();return this.pushSource(e+" = "+t+";"),this.compileStack.push(e),e},replaceStack:function(t){var e="",s=this.isInline(),n,i,a;if(!this.isInline())throw new Mt("replaceStack on non-inline");var r=this.popStack(!0);if(r instanceof W)e=n=r.value,a=!0;else{i=!this.stackSlot;var l=i?this.incrStack():this.topStackName();e="("+this.push(l)+" = "+r+")",n=this.topStack()}var c=t.call(this,n);a||this.popStack(),i&&this.stackSlot--,this.push("("+e+c+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var e=0,s=t.length;e<s;e++){var n=t[e];n instanceof W?this.compileStack.push(n):this.pushStack(n)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),s=(e?this.inlineStack:this.compileStack).pop();if(!t&&s instanceof W)return s.value;if(!e){if(!this.stackSlot)throw new Mt("Invalid stack pop");this.stackSlot--}return s},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof W?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=[];for(var s in t)t.hasOwnProperty(s)&&e.push(this.quotedString(s)+":"+t[s]);return"{"+e.join(",")+"}"},setupHelper:function(t,e,s){var n=[],i=this.setupParams(e,t,n,s),a=this.nameLookup("helpers",e,"helper");return{params:n,paramsInit:i,name:a,callParams:[this.contextName(0)].concat(n).join(", ")}},setupOptions:function(t,e,s){var n={},i=[],a=[],r=[],l,c,o;n.name=this.quotedString(t),n.hash=this.popStack(),this.trackIds&&(n.hashIds=this.popStack()),this.stringParams&&(n.hashTypes=this.popStack(),n.hashContexts=this.popStack()),c=this.popStack(),o=this.popStack(),(o||c)&&(o||(o="this.noop"),c||(c="this.noop"),n.fn=o,n.inverse=c);for(var u=e;u--;)l=this.popStack(),s[u]=l,this.trackIds&&(r[u]=this.popStack()),this.stringParams&&(a[u]=this.popStack(),i[u]=this.popStack());return this.trackIds&&(n.ids="["+r.join(",")+"]"),this.stringParams&&(n.types="["+a.join(",")+"]",n.contexts="["+i.join(",")+"]"),this.options.data&&(n.data="data"),n},setupParams:function(t,e,s,n){var i=this.objectLiteral(this.setupOptions(t,e,s));return n?(this.useRegister("options"),s.push("options"),"options="+i):(s.push(i),"")}};var Me="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),Gs=O.RESERVED_WORDS={};for(rt=0,Te=Me.length;rt<Te;rt++)Gs[Me[rt]]=!0;var rt,Te;O.isValidJavaScriptVariableName=function(t){return!O.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};Be.default=O});var Fe=m(je=>{"use strict";p();var j=Ne().default,Us=At().default,Ws=Rt().parser,Js=Rt().parse,zs=at().Compiler,Ks=at().compile,Qs=at().precompile,Ys=qe().default,Xs=j.create,Ve=function(){var t=Xs();return t.compile=function(e,s){return Ks(e,s,t)},t.precompile=function(e,s){return Qs(e,s,t)},t.AST=Us,t.Compiler=zs,t.JavaScriptCompiler=Ys,t.Parser=Ws,t.parse=Js,t};j=Ve();j.create=Ve;j.default=j;je.default=j});var Bt=m(Ge=>{"use strict";p();function Tt(){}Tt.prototype={constructor:Tt,accept:function(t){return this[t.type](t)}};Ge.default=Tt});var Ue=m(qt=>{"use strict";p();var Zs=Bt().default;function $s(t){return new d().accept(t)}qt.print=$s;function d(){this.padding=0}qt.PrintVisitor=d;d.prototype=new Zs;d.prototype.pad=function(t){for(var e="",s=0,n=this.padding;s<n;s++)e=e+"  ";return e=e+t+`
`,e};d.prototype.program=function(t){var e="",s=t.statements,n,i;for(n=0,i=s.length;n<i;n++)e=e+this.accept(s[n]);return this.padding--,e};d.prototype.block=function(t){var e="";return e=e+this.pad("BLOCK:"),this.padding++,e=e+this.accept(t.mustache),t.program&&(e=e+this.pad("PROGRAM:"),this.padding++,e=e+this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e=e+this.pad("{{^}}"),this.padding++,e=e+this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e};d.prototype.sexpr=function(t){for(var e=t.params,s=[],n,i=0,a=e.length;i<a;i++)s.push(this.accept(e[i]));return e="["+s.join(", ")+"]",n=t.hash?" "+this.accept(t.hash):"",this.accept(t.id)+" "+e+n};d.prototype.mustache=function(t){return this.pad("{{ "+this.accept(t.sexpr)+" }}")};d.prototype.partial=function(t){var e=this.accept(t.partialName);return t.context&&(e+=" "+this.accept(t.context)),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")};d.prototype.hash=function(t){for(var e=t.pairs,s=[],n,i,a=0,r=e.length;a<r;a++)n=e[a][0],i=this.accept(e[a][1]),s.push(n+"="+i);return"HASH{"+s.join(", ")+"}"};d.prototype.STRING=function(t){return'"'+t.string+'"'};d.prototype.NUMBER=function(t){return"NUMBER{"+t.number+"}"};d.prototype.BOOLEAN=function(t){return"BOOLEAN{"+t.bool+"}"};d.prototype.ID=function(t){var e=t.parts.join("/");return t.parts.length>1?"PATH:"+e:"ID:"+e};d.prototype.PARTIAL_NAME=function(t){return"PARTIAL:"+t.name};d.prototype.DATA=function(t){return"@"+this.accept(t.id)};d.prototype.content=function(t){return this.pad("CONTENT[ '"+t.string+"' ]")};d.prototype.comment=function(t){return this.pad("{{! '"+t.comment+"' }}")}});var ze=m((Bn,Je)=>{p();var J=Fe().default;J.Visitor=Bt().default;var We=Ue();J.PrintVisitor=We.PrintVisitor;J.print=We.print;Je.exports=J;typeof F<"u"&&F.extensions&&(Vt=function(t,e){var s=(bt(),ft(vt)),n=s.readFileSync(e,"utf8");t.exports=J.compile(n)},F.extensions[".handlebars"]=Vt,F.extensions[".hbs"]=Vt);var Vt});var Xe=m((jn,Ye)=>{p();var lt=(bt(),ft(vt)),Ke=(ce(),ft(he)),Qe=ze();function tn(t){var e=lt.readFileSync("//style.css","utf-8"),s=lt.readFileSync("//resume.hbs","utf-8"),n=Ke.join("/","partials"),i=lt.readdirSync(n);return i.forEach(function(a){var r=/^([^.]+).hbs$/.exec(a);if(r){var l=r[1],c=Ke.join(n,a),o=lt.readFileSync(c,"utf8");Qe.registerPartial(l,o)}}),Qe.compile(s)({css:e,resume:t})}Ye.exports={render:tn}});p();var H=as(Xe(),1),Ze=H.default??H,Gn=Ze.render??H.render,Un=Ze.pdfRenderOptions??H.pdfRenderOptions;export{Un as pdfRenderOptions,Gn as render};
