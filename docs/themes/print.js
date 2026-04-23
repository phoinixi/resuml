var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Ve=Object.create;var Y=Object.defineProperty;var Fe=Object.getOwnPropertyDescriptor;var je=Object.getOwnPropertyNames;var ze=Object.getPrototypeOf,Ue=Object.prototype.hasOwnProperty;var j=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var Tt=(t,e)=>()=>(t&&(e=t(t=0)),e);var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),We=(t,e)=>{for(var n in e)Y(t,n,{get:e[n],enumerable:!0})},qt=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of je(e))!Ue.call(t,s)&&s!==n&&Y(t,s,{get:()=>e[s],enumerable:!(i=Fe(e,s))||i.enumerable});return t};var Ge=(t,e,n)=>(n=t!=null?Ve(ze(t)):{},qt(e||!t||!t.__esModule?Y(n,"default",{value:t,enumerable:!0}):n,t)),Bt=t=>qt(Y({},"__esModule",{value:!0}),t);var c=Tt(()=>{});var ut={};We(ut,{createReadStream:()=>Yt,createWriteStream:()=>Xt,default:()=>Ke,existsSync:()=>zt,lstatSync:()=>Gt,mkdirSync:()=>Wt,readFileSync:()=>Ft,readdirSync:()=>jt,rmdirSync:()=>Jt,statSync:()=>ct,unlinkSync:()=>Kt,writeFileSync:()=>Ut});function pt(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Vt(t){var e=pt(t);if(X[e]!==void 0)return X[e];for(var n=Object.keys(X),i=0;i<n.length;i++)if(e.endsWith("/"+n[i])||e===n[i])return X[n[i]]}function lt(t){var e=pt(t);if((e===""||e===".")&&q["."]!==void 0)return q["."];if(q[e]!==void 0)return q[e];for(var n=Object.keys(q),i=0;i<n.length;i++)if(e.endsWith("/"+n[i])||e===n[i])return q[n[i]]}var X,q,Ft,jt,zt,Ut,Wt,ct,Gt,Kt,Jt,Yt,Xt,Ke,ft=Tt(()=>{"use strict";c();X={"package.json":`{
  "name": "jsonresume-theme-print",
  "version": "0.1.9",
  "description": "A fork of theme short for my printing purposes",
  "author": "Alex Wolden",
  "repository": {
    "type": "git",
    "url": "https://github.com/isnotahippy/jsonresume-theme-print"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  }
}
`,"resume.template":`<!doctype html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">

	<title>{{#resume.basics}}{{name}}{{/resume.basics}}</title>

	<style>
	{{{css}}}
	</style>
	<style media="print">
	body { font-size: 12px; }
	</style>

	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300' rel='stylesheet' type='text/css'>

</head>
<body>

	<div id="resume">

		{{#resume.basics}}
		<section class="heading">
			<header>
				<h1>{{name}}</h1>
				<div class="contact">
					{{#if email}}
					<span class="detail">
						<a href="mailto:{{email}}">{{email}}</a>
					</span>
					{{/if}}
					{{#if phone}}
					<span class="detail">
						{{phone}}
					</span>
					{{/if}}
					{{#if website}}
					<span class="detail">
						<a href="{{website}}">{{website}}</a>
					</span>
					{{/if}}
				</div>
			</header>


			{{#if summary}}
			<p>{{summary}}</p>
			{{/if}}

			{{#if profiles.length}}
			{{#each profiles}}
			<div class="profile">
				{{#if network}}
				<strong class="network">
					{{network}}
				</strong>
				{{/if}}
				{{#if username}}
				<span class="username">
					{{#if url}}
					<a href="{{url}}">{{url}}</a>
					{{else}}
					{{url}}
					{{/if}}
				</span>
				{{/if}}
			</div>
			{{/each}}
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
				{{#if level}}
				<div class="bar">
					<span class="zero">Zero</span>
					<span class="hero">Hero</span>
					<span class="mastery-{{level}}"></span>
				</div>
				{{/if}}
				{{/if}}
			</div>
			{{/each}}
		</section>
		{{/if}}

		{{#if resume.work.length}}
		<section class="experience">
			<h2>Experience</h2>
			{{#each resume.work}}
			<section class="item">
				<header>
					{{#if company}}
					<h3 class="name">{{company}}</h3>
					{{/if}}
				</header>
				{{#if position}}
				<span class="position">
					{{position}}
				</span>
				{{/if}}

				{{#if startDate}}
				<span class="startDate">
					{{date startDate}}
				</span>
				{{/if}}
				{{#if endDate}}
				<span class="endDate">
					- {{date endDate}}
				</span>
				{{else}}
				<span class="endDate">
					- Present
				</span>
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
			</section>
			{{/each}}
		</section>
		{{/if}}

		{{#if resume.volunteer.length}}
		<section class="experience">
			<h2>Volunteering</h2>
			{{#each resume.volunteer}}
			<div class="item">
				<header>
					{{#if organization}}
					<h3 class="name">{{organization}}</h3>
					{{/if}}
				</header>
				{{#if position}}
				<span class="position">
					{{position}}
				</span>
				{{/if}}

				{{#if startDate}}
				<span class="startDate">
					{{date startDate}}
				</span>
				{{/if}}
				{{#if endDate}}
				<span class="endDate">
					- {{date endDate}}
				</span>
				{{else}}
				<span class="endDate">
					- Present
				</span>
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
		</section>
		{{/if}}

		{{#if resume.education.length}}
		<section id="education">
			<h2>Education</h2>
			{{#each resume.education}}
			<div class="item">
				<header>
					{{#if institution}}
					<h3 class="name">{{institution}}</h3>
					{{/if}}
				</header>

				<div class="dates">
					{{#if startDate}}
					<span class="startDate">
						{{date startDate}}
					</span>
					{{/if}}
					{{#if endDate}}
					<span class="endDate">
						- {{date endDate}}
					</span>
					{{else}}
					<span class="endDate">
						- Present
					</span>
					{{/if}}
				</div>

				<div class="qualification">
					{{#if studyType}}
					<span class="studyType">
						{{studyType}}
					</span>
					{{/if}}

					{{#if area}}
					<span class="area">
						- {{area}}
					</span>
					{{/if}}

					{{#if gpa}}
					<span class="gpa">
						GPA: {{gpa}}
					</span>
					{{/if}}
				</div>

				{{#if highlights}}
				<h4>Highlights</h4>
				<ul class="education-highlights">
					{{#each highlights}}
					<li>{{.}}</li>
					{{/each}}
				</ul>
				{{/if}}

			</div>
			{{/each}}
		</section>
		{{/if}}

		{{#if resume.awards.length}}
		<section id="awards">
			<h2>Highlights</h2>
			{{#each resume.awards}}
			<div class="item">
				{{#if title}}
				<div class="title">
					{{title}}
				</div>
				{{/if}}
				{{#if date}}
				<div class="date">
					{{date}}
				</div>
				{{/if}}
				{{#if awarder}}
				<div class="awarder">
					{{awarder}}
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
		{{/if}}

		{{#if resume.publications.length}}
		<section id="publications">
			<h2>Publications</h2>
			{{#each resume.publications}}
			<div class="item">
				{{#if name}}
				<div class="name">
					{{name}}
				</div>
				{{/if}}
				{{#if publisher}}
				<div class="publisher">
					{{publisher}}
				</div>
				{{/if}}
				{{#if releaseDate}}
				<div class="releaseDate">
					{{releaseDate}}
				</div>
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
				<div class="fluency">
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

</body>
</html>
`,"style.css":`body {
	background: #fff;
	font: 16px 'Open Sans' Helvetica, Arial, sans-serif;
	line-height: 1.4;
	margin: 0 0;
	margin-bottom: 100px;
}
em {
	color: #999;
}
p {
	line-height: 1.6;
	font-size: 90%;
}
a {
	color: #2C85B1;
	text-decoration: none;
	font-weight: 400;
}
ul {
	margin-bottom: 0;
}
section {
	margin: 1em 0 2em;
}
blockquote {
	margin: 0;
	margin-bottom: 1em;
}
#resume {
	margin: 2em 2em 2em 2.5em;
	max-width: 760px;
}
/* Resume heading */

.heading header {} .heading header h1 {
	font-size: 180%;
	margin: 0.5em 0;
	font-weight: 600;
}
.heading header h2 {
	font-size: 140%;
	margin: 0;
	font-weight: 400;
}
.heading header .contact .detail {
	margin: 0 1em 0 0;
}
.profile {
	display: inline-block;
	margin: 0 1em 0 0;
}
.profile strong,
.profile span {
	display: inline-block;
	margin: 0 1em 0 0;
}
/* section / line breaks */

section h2 {
	font-size: 140%;
	margin: 0 0 .4em;
	text-transform: uppercase;
	color: #BC1B39;
	font-weight: 400;
}
span.zero,
span.hero {
	font-size: 10px;
	top: 8px;
}
span.hero {
	position: absolute;
	right: 0;
}
span.zero {
	position: absolute;
}
.bar {
	margin-top: 5px;
	height: 20px;
	position: relative;
}
span[class*="mastery-"] {
	height: 5px;
	display: block;
	background-color: rgb(60, 107, 52);
}
.mastery-1 {
	width: 10%;
}
.mastery-2 {
	width: 20%;
}
.mastery-3 {
	width: 30%;
}
.mastery-4 {
	width: 40%;
}
.mastery-5 {
	width: 50%;
}
.mastery-6 {
	width: 60%;
}
.mastery-7 {
	width: 70%;
}
.mastery-8 {
	width: 80%;
}
.mastery-9 {
	width: 90%;
}
.mastery-10 {
	width: 100%;
}
/* Experience items */

.item {
	margin: 0 0 .75em;
	padding: 0 0 .75em;
	border-bottom: 1px solid #F2EBEC;
}
.item:last-child {
	border-bottom: none;
}
.item header h3 {
	margin: 0.2em 1em 0.2em 0;
	display: inline-block;
	font-weight: 600;
}
.item header a {
	display: inline-block;
}
.item .position {
	font-weight: 600;
	font-size: 100%;
	margin: 0.2em 1em 0.2em 0;
}
.item .startDate,
.item .endDate {
	color: #6B6B6B;
}
.item .highlights {
	list-style: square;
	font-size: 90%;
}
.education-highlights> {
	padding-left: 0px;
	margin-left: 0px;
}
.education-highlights>li {
	display: inline-block;
	list-style-type: none;
	margin-right: 10px;
	border-right: 1px solid #e7e7e7;
	padding-right: 10px;
}
.education-highlights>li:last-child {
	border-right: 0px;
}
/* skills */

#skills .item {
	margin: 0.5em 0;
	padding: 0 0 0.5em;
	font-size: 90%;
}
#skills .item .name {
	font-weight: 600;
	display: inline-block;
	text-transform: uppercase;
	margin: 0 1em 0 0;
	width: 23%;
	vertical-align: top;
}
#skills .item .keywords {
	display: inline-block;
	width: 70%;
	vertical-align: top;
}
/* education */

#education .item {
	display: inline-block;
	vertical-align: top;
	border-bottom: 0;
}
`},q={".":["README.md","index.js","package.json","package.json~","resume.template","style.css","style.css~"]};Ft=function(t,e){var n=Vt(t);return n!==void 0?n:""},jt=function(t,e){var n=lt(t);return n===void 0&&(n=[]),e&&e.withFileTypes?n.map(function(i){var s=pt(t)+"/"+i,r=lt(s)!==void 0;return{name:i,isFile:function(){return!r},isDirectory:function(){return r}}}):n},zt=function(t){return Vt(t)!==void 0||lt(t)!==void 0},Ut=function(){},Wt=function(){},ct=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Gt=ct,Kt=function(){},Jt=function(){},Yt=function(){return{pipe:function(t){return t},on:function(){return this}}},Xt=function(){return{write:function(){},end:function(){},on:function(){return this}}},Ke={readFileSync:Ft,readdirSync:jt,existsSync:zt,writeFileSync:Ut,mkdirSync:Wt,statSync:ct,lstatSync:Gt,unlinkSync:Kt,rmdirSync:Jt,createReadStream:Yt,createWriteStream:Xt}});var dt=m(Qt=>{"use strict";c();function Zt(t){this.string=t}Zt.prototype.toString=function(){return""+this.string};Qt.default=Zt});var B=m(N=>{"use strict";c();var Je=dt().default,Ye={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Xe=/[&<>"'`]/g,Ze=/[&<>"'`]/;function Qe(t){return Ye[t]}function $e(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}N.extend=$e;var mt=Object.prototype.toString;N.toString=mt;var Z=function(t){return typeof t=="function"};Z(/x/)&&(Z=function(t){return typeof t=="function"&&mt.call(t)==="[object Function]"});var Z;N.isFunction=Z;var $t=Array.isArray||function(t){return t&&typeof t=="object"?mt.call(t)==="[object Array]":!1};N.isArray=$t;function tn(t){return t instanceof Je?t.toString():t==null?"":t?(t=""+t,Ze.test(t)?t.replace(Xe,Qe):t):t+""}N.escapeExpression=tn;function en(t){return!t&&t!==0?!0:!!($t(t)&&t.length===0)}N.isEmpty=en;function nn(t,e){return(t?t+".":"")+e}N.appendContextPath=nn});var P=m(ee=>{"use strict";c();var gt=["description","fileName","lineNumber","message","name","number","stack"];function te(t,e){var n;e&&e.firstLine&&(n=e.firstLine,t+=" - "+n+":"+e.firstColumn);for(var i=Error.prototype.constructor.call(this,t),s=0;s<gt.length;s++)this[gt[s]]=i[gt[s]];n&&(this.lineNumber=n,this.column=e.firstColumn)}te.prototype=new Error;ee.default=te});var I=m(_=>{"use strict";c();var y=B(),kt=P().default,sn="2.0.0";_.VERSION=sn;var rn=6;_.COMPILER_REVISION=rn;var an={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};_.REVISION_CHANGES=an;var ne=y.isArray,vt=y.isFunction,ie=y.toString,se="[object Object]";function yt(t,e){this.helpers=t||{},this.partials=e||{},hn(this)}_.HandlebarsEnvironment=yt;yt.prototype={constructor:yt,logger:z,log:re,registerHelper:function(t,e){if(ie.call(t)===se){if(e)throw new kt("Arg not supported with multiple helpers");y.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){ie.call(t)===se?y.extend(this.partials,t):this.partials[t]=e},unregisterPartial:function(t){delete this.partials[t]}};function hn(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new kt("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(e,n){var i=n.inverse,s=n.fn;if(e===!0)return s(this);if(e===!1||e==null)return i(this);if(ne(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):i(this);if(n.data&&n.ids){var r=Q(n.data);r.contextPath=y.appendContextPath(n.data.contextPath,n.name),n={data:r}}return s(e,n)}),t.registerHelper("each",function(e,n){if(!n)throw new kt("Must pass iterator to #each");var i=n.fn,s=n.inverse,r=0,a="",h,p;if(n.data&&n.ids&&(p=y.appendContextPath(n.data.contextPath,n.ids[0])+"."),vt(e)&&(e=e.call(this)),n.data&&(h=Q(n.data)),e&&typeof e=="object")if(ne(e))for(var o=e.length;r<o;r++)h&&(h.index=r,h.first=r===0,h.last=r===e.length-1,p&&(h.contextPath=p+r)),a=a+i(e[r],{data:h});else for(var u in e)e.hasOwnProperty(u)&&(h&&(h.key=u,h.index=r,h.first=r===0,p&&(h.contextPath=p+u)),a=a+i(e[u],{data:h}),r++);return r===0&&(a=s(this)),a}),t.registerHelper("if",function(e,n){return vt(e)&&(e=e.call(this)),!n.hash.includeZero&&!e||y.isEmpty(e)?n.inverse(this):n.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),t.registerHelper("with",function(e,n){vt(e)&&(e=e.call(this));var i=n.fn;if(y.isEmpty(e))return n.inverse(this);if(n.data&&n.ids){var s=Q(n.data);s.contextPath=y.appendContextPath(n.data.contextPath,n.ids[0]),n={data:s}}return i(e,n)}),t.registerHelper("log",function(e,n){var i=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;t.log(i,e)}),t.registerHelper("lookup",function(e,n){return e&&e[n]})}var z={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(z.level<=t){var n=z.methodMap[t];typeof console<"u"&&console[n]&&console[n].call(console,e)}}};_.logger=z;var re=z.log;_.log=re;var Q=function(t){var e=y.extend({},t);return e._parent=t,e};_.createFrame=Q});var he=m(V=>{"use strict";c();var St=B(),D=P().default,on=I().COMPILER_REVISION,ae=I().REVISION_CHANGES,ln=I().createFrame;function pn(t){var e=t&&t[0]||1,n=on;if(e!==n)if(e<n){var i=ae[n],s=ae[e];throw new D("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+s+").")}else throw new D("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}V.checkRevision=pn;function cn(t,e){if(!e)throw new D("No environment passed to template");if(!t||!t.main)throw new D("Unknown template object: "+typeof t);e.VM.checkRevision(t.compiler);var n=function(r,a,h,p,o,u,l,w,M){o&&(p=St.extend({},p,o));var O=e.VM.invokePartial.call(this,r,h,p,u,l,w,M);if(O==null&&e.compile){var Lt={helpers:u,partials:l,data:w,depths:M};l[h]=e.compile(r,{data:w!==void 0,compat:t.compat},e),O=l[h](p,Lt)}if(O!=null){if(a){for(var b=O.split(`
`),E=0,rt=b.length;E<rt&&!(!b[E]&&E+1===rt);E++)b[E]=a+b[E];O=b.join(`
`)}return O}else throw new D("The partial "+h+" could not be compiled when running in runtime-only mode")},i={lookup:function(r,a){for(var h=r.length,p=0;p<h;p++)if(r[p]&&r[p][a]!=null)return r[p][a]},lambda:function(r,a){return typeof r=="function"?r.call(a):r},escapeExpression:St.escapeExpression,invokePartial:n,fn:function(r){return t[r]},programs:[],program:function(r,a,h){var p=this.programs[r],o=this.fn(r);return a||h?p=$(this,r,o,a,h):p||(p=this.programs[r]=$(this,r,o)),p},data:function(r,a){for(;r&&a--;)r=r._parent;return r},merge:function(r,a){var h=r||a;return r&&a&&r!==a&&(h=St.extend({},a,r)),h},noop:e.VM.noop,compilerInfo:t.compiler},s=function(r,a){a=a||{};var h=a.data;s._setup(a),!a.partial&&t.useData&&(h=dn(r,h));var p;return t.useDepths&&(p=a.depths?[r].concat(a.depths):[r]),t.main.call(i,r,i.helpers,i.partials,h,p)};return s.isTop=!0,s._setup=function(r){r.partial?(i.helpers=r.helpers,i.partials=r.partials):(i.helpers=i.merge(r.helpers,e.helpers),t.usePartial&&(i.partials=i.merge(r.partials,e.partials)))},s._child=function(r,a,h){if(t.useDepths&&!h)throw new D("must pass parent depths");return $(i,r,t[r],a,h)},s}V.template=cn;function $(t,e,n,i,s){var r=function(a,h){return h=h||{},n.call(t,a,t.helpers,t.partials,h.data||i,s&&[a].concat(s))};return r.program=e,r.depth=s?s.length:0,r}V.program=$;function un(t,e,n,i,s,r,a){var h={partial:!0,helpers:i,partials:s,data:r,depths:a};if(t===void 0)throw new D("The partial "+e+" could not be found");if(t instanceof Function)return t(n,h)}V.invokePartial=un;function fn(){return""}V.noop=fn;function dn(t,e){return(!e||!("root"in e))&&(e=e?ln(e):{},e.root=t),e}});var ue=m(ce=>{"use strict";c();var oe=I(),mn=dt().default,gn=P().default,bt=B(),le=he(),pe=function(){var t=new oe.HandlebarsEnvironment;return bt.extend(t,oe),t.SafeString=mn,t.Exception=gn,t.Utils=bt,t.escapeExpression=bt.escapeExpression,t.VM=le,t.template=function(e){return le.template(e,t)},t},tt=pe();tt.create=pe;tt.default=tt;ce.default=tt});var xt=m(de=>{"use strict";c();var fe=P().default;function v(t){t=t||{},this.firstLine=t.first_line,this.firstColumn=t.first_column,this.lastColumn=t.last_column,this.lastLine=t.last_line}var U={ProgramNode:function(t,e,n){v.call(this,n),this.type="program",this.statements=t,this.strip=e},MustacheNode:function(t,e,n,i,s){if(v.call(this,s),this.type="mustache",this.strip=i,n!=null&&n.charAt){var r=n.charAt(3)||n.charAt(2);this.escaped=r!=="{"&&r!=="&"}else this.escaped=!!n;t instanceof U.SexprNode?this.sexpr=t:this.sexpr=new U.SexprNode(t,e),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(t,e,n){v.call(this,n),this.type="sexpr",this.hash=e;var i=this.id=t[0],s=this.params=t.slice(1);this.isHelper=!!(s.length||e),this.eligibleHelper=this.isHelper||i.isSimple},PartialNode:function(t,e,n,i,s){v.call(this,s),this.type="partial",this.partialName=t,this.context=e,this.hash=n,this.strip=i,this.strip.inlineStandalone=!0},BlockNode:function(t,e,n,i,s){v.call(this,s),this.type="block",this.mustache=t,this.program=e,this.inverse=n,this.strip=i,n&&!e&&(this.isInverse=!0)},RawBlockNode:function(t,e,n,i){if(v.call(this,i),t.sexpr.id.original!==n)throw new fe(t.sexpr.id.original+" doesn't match "+n,this);e=new U.ContentNode(e,i),this.type="block",this.mustache=t,this.program=new U.ProgramNode([e],{},i)},ContentNode:function(t,e){v.call(this,e),this.type="content",this.original=this.string=t},HashNode:function(t,e){v.call(this,e),this.type="hash",this.pairs=t},IdNode:function(t,e){v.call(this,e),this.type="ID";for(var n="",i=[],s=0,r="",a=0,h=t.length;a<h;a++){var p=t[a].part;if(n+=(t[a].separator||"")+p,p===".."||p==="."||p==="this"){if(i.length>0)throw new fe("Invalid path: "+n,this);p===".."?(s++,r+="../"):this.isScoped=!0}else i.push(p)}this.original=n,this.parts=i,this.string=i.join("."),this.depth=s,this.idName=r+this.string,this.isSimple=t.length===1&&!this.isScoped&&s===0,this.stringModeValue=this.string},PartialNameNode:function(t,e){v.call(this,e),this.type="PARTIAL_NAME",this.name=t.original},DataNode:function(t,e){v.call(this,e),this.type="DATA",this.id=t,this.stringModeValue=t.stringModeValue,this.idName="@"+t.stringModeValue},StringNode:function(t,e){v.call(this,e),this.type="STRING",this.original=this.string=this.stringModeValue=t},NumberNode:function(t,e){v.call(this,e),this.type="NUMBER",this.original=this.number=t,this.stringModeValue=Number(t)},BooleanNode:function(t,e){v.call(this,e),this.type="BOOLEAN",this.bool=t,this.stringModeValue=t==="true"},CommentNode:function(t,e){v.call(this,e),this.type="comment",this.comment=t,this.strip={inlineStandalone:!0}}};de.default=U});var ge=m(me=>{"use strict";c();var vn=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(s,r,a,h,p,o,u){var l=o.length-1;switch(p){case 1:return h.prepareProgram(o[l-1].statements,!0),o[l-1];break;case 2:this.$=new h.ProgramNode(h.prepareProgram(o[l]),{},this._$);break;case 3:this.$=o[l];break;case 4:this.$=o[l];break;case 5:this.$=o[l];break;case 6:this.$=o[l];break;case 7:this.$=new h.ContentNode(o[l],this._$);break;case 8:this.$=new h.CommentNode(o[l],this._$);break;case 9:this.$=new h.RawBlockNode(o[l-2],o[l-1],o[l],this._$);break;case 10:this.$=new h.MustacheNode(o[l-1],null,"","",this._$);break;case 11:this.$=h.prepareBlock(o[l-3],o[l-2],o[l-1],o[l],!1,this._$);break;case 12:this.$=h.prepareBlock(o[l-3],o[l-2],o[l-1],o[l],!0,this._$);break;case 13:this.$=new h.MustacheNode(o[l-1],null,o[l-2],h.stripFlags(o[l-2],o[l]),this._$);break;case 14:this.$=new h.MustacheNode(o[l-1],null,o[l-2],h.stripFlags(o[l-2],o[l]),this._$);break;case 15:this.$={strip:h.stripFlags(o[l-1],o[l-1]),program:o[l]};break;case 16:this.$={path:o[l-1],strip:h.stripFlags(o[l-2],o[l])};break;case 17:this.$=new h.MustacheNode(o[l-1],null,o[l-2],h.stripFlags(o[l-2],o[l]),this._$);break;case 18:this.$=new h.MustacheNode(o[l-1],null,o[l-2],h.stripFlags(o[l-2],o[l]),this._$);break;case 19:this.$=new h.PartialNode(o[l-3],o[l-2],o[l-1],h.stripFlags(o[l-4],o[l]),this._$);break;case 20:this.$=new h.PartialNode(o[l-2],void 0,o[l-1],h.stripFlags(o[l-3],o[l]),this._$);break;case 21:this.$=new h.SexprNode([o[l-2]].concat(o[l-1]),o[l],this._$);break;case 22:this.$=new h.SexprNode([o[l]],null,this._$);break;case 23:this.$=o[l];break;case 24:this.$=new h.StringNode(o[l],this._$);break;case 25:this.$=new h.NumberNode(o[l],this._$);break;case 26:this.$=new h.BooleanNode(o[l],this._$);break;case 27:this.$=o[l];break;case 28:o[l-1].isHelper=!0,this.$=o[l-1];break;case 29:this.$=new h.HashNode(o[l],this._$);break;case 30:this.$=[o[l-2],o[l]];break;case 31:this.$=new h.PartialNameNode(o[l],this._$);break;case 32:this.$=new h.PartialNameNode(new h.StringNode(o[l],this._$),this._$);break;case 33:this.$=new h.PartialNameNode(new h.NumberNode(o[l],this._$));break;case 34:this.$=new h.DataNode(o[l],this._$);break;case 35:this.$=new h.IdNode(o[l],this._$);break;case 36:o[l-2].push({part:o[l],separator:o[l-1]}),this.$=o[l-2];break;case 37:this.$=[{part:o[l]}];break;case 38:this.$=[];break;case 39:o[l-1].push(o[l]);break;case 48:this.$=[];break;case 49:o[l-1].push(o[l]);break;case 52:this.$=[o[l]];break;case 53:o[l-1].push(o[l]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(s,r){throw new Error(s)},parse:function(s){var r=this,a=[0],h=[null],p=[],o=this.table,u="",l=0,w=0,M=0,O=2,Lt=1;this.lexer.setInput(s),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var b=this.lexer.yylloc;p.push(b);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function rt(S){a.length=a.length-2*S,h.length=h.length-S,p.length=p.length-S}function Be(){var S;return S=r.lexer.lex()||1,typeof S!="number"&&(S=r.symbols_[S]||S),S}for(var g,at,A,k,jn,ht,T={},K,x,Mt,J;;){if(A=a[a.length-1],this.defaultActions[A]?k=this.defaultActions[A]:((g===null||typeof g>"u")&&(g=Be()),k=o[A]&&o[A][g]),typeof k>"u"||!k.length||!k[0]){var ot="";if(!M){J=[];for(K in o[A])this.terminals_[K]&&K>2&&J.push("'"+this.terminals_[K]+"'");this.lexer.showPosition?ot="Parse error on line "+(l+1)+`:
`+this.lexer.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[g]||g)+"'":ot="Parse error on line "+(l+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(ot,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:b,expected:J})}}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+A+", token: "+g);switch(k[0]){case 1:a.push(g),h.push(this.lexer.yytext),p.push(this.lexer.yylloc),a.push(k[1]),g=null,at?(g=at,at=null):(w=this.lexer.yyleng,u=this.lexer.yytext,l=this.lexer.yylineno,b=this.lexer.yylloc,M>0&&M--);break;case 2:if(x=this.productions_[k[1]][1],T.$=h[h.length-x],T._$={first_line:p[p.length-(x||1)].first_line,last_line:p[p.length-1].last_line,first_column:p[p.length-(x||1)].first_column,last_column:p[p.length-1].last_column},E&&(T._$.range=[p[p.length-(x||1)].range[0],p[p.length-1].range[1]]),ht=this.performAction.call(T,u,w,l,this.yy,k[1],h,p),typeof ht<"u")return ht;x&&(a=a.slice(0,-1*x*2),h=h.slice(0,-1*x),p=p.slice(0,-1*x)),a.push(this.productions_[k[1]][0]),h.push(T.$),p.push(T._$),Mt=o[a[a.length-2]][a[a.length-1]],a.push(Mt);break;case 3:return!0}}return!0}},e=(function(){var i={EOF:1,parseError:function(r,a){if(this.yy.parser)this.yy.parser.parseError(r,a);else throw new Error(r)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var r=s.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var r=s.length,a=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var h=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var p=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===h.length?this.yylloc.first_column:0)+h[h.length-a.length].length-a[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),r=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,r,a,h,p,o;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),l=0;l<u.length&&(a=this._input.match(this.rules[u[l]]),!(a&&(!r||a[0].length>r[0].length)&&(r=a,h=l,!this.options.flex)));l++);return r?(o=r[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],s=this.performAction.call(this,this.yy,this,u[h],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return typeof r<"u"?r:this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(r){this.begin(r)}};return i.options={},i.performAction=function(r,a,h,p){function o(l,w){return a.yytext=a.yytext.substr(l,a.yyleng-w)}var u=p;switch(h){case 0:if(a.yytext.slice(-2)==="\\\\"?(o(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(o(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return a.yytext=a.yytext.substr(5,a.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return o(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return o(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return a.yytext=o(1,2).replace(/\\"/g,'"'),42;break;case 30:return a.yytext=o(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return a.yytext=o(1,2),50;break;case 37:return"INVALID";case 38:return 5}},i.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],i.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},i})();t.lexer=e;function n(){this.yy={}}return n.prototype=t,t.Parser=n,new n})();me.default=vn});var ve=m(et=>{"use strict";c();var kn=P().default;function yn(t,e){return{left:t.charAt(2)==="~",right:e.charAt(e.length-3)==="~"}}et.stripFlags=yn;function Sn(t,e,n,i,s,r){if(t.sexpr.id.original!==i.path.original)throw new kn(t.sexpr.id.original+" doesn't match "+i.path.original,t);var a=n&&n.program,h={left:t.strip.left,right:i.strip.right,openStandalone:Et(e.statements),closeStandalone:wt((a||e).statements)};if(t.strip.right&&H(e.statements,null,!0),a){var p=n.strip;p.left&&C(e.statements,null,!0),p.right&&H(a.statements,null,!0),i.strip.left&&C(a.statements,null,!0),wt(e.statements)&&Et(a.statements)&&(C(e.statements),H(a.statements))}else i.strip.left&&C(e.statements,null,!0);return s?new this.BlockNode(t,a,e,h,r):new this.BlockNode(t,e,a,h,r)}et.prepareBlock=Sn;function bn(t,e){for(var n=0,i=t.length;n<i;n++){var s=t[n],r=s.strip;if(r){var a=wt(t,n,e,s.type==="partial"),h=Et(t,n,e),p=r.openStandalone&&a,o=r.closeStandalone&&h,u=r.inlineStandalone&&a&&h;r.right&&H(t,n,!0),r.left&&C(t,n,!0),u&&(H(t,n),C(t,n)&&s.type==="partial"&&(s.indent=/([ \t]+$)/.exec(t[n-1].original)?RegExp.$1:"")),p&&(H((s.program||s.inverse).statements),C(t,n)),o&&(H(t,n),C((s.inverse||s.program).statements))}}return t}et.prepareProgram=bn;function wt(t,e,n){e===void 0&&(e=t.length);var i=t[e-1],s=t[e-2];if(!i)return n;if(i.type==="content")return(s||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}function Et(t,e,n){e===void 0&&(e=-1);var i=t[e+1],s=t[e+2];if(!i)return n;if(i.type==="content")return(s||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}function H(t,e,n){var i=t[e==null?0:e+1];if(!(!i||i.type!=="content"||!n&&i.rightStripped)){var s=i.string;i.string=i.string.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.string!==s}}function C(t,e,n){var i=t[e==null?t.length-1:e-1];if(!(!i||i.type!=="content"||!n&&i.leftStripped)){var s=i.string;return i.string=i.string.replace(n?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.string!==s,i.leftStripped}}});var _t=m(Pt=>{"use strict";c();var Nt=ge().default,ke=xt().default,xn=ve(),wn=B().extend;Pt.parser=Nt;var ye={};wn(ye,xn,ke);function En(t){return t.constructor===ke.ProgramNode?t:(Nt.yy=ye,Nt.parse(t))}Pt.parse=En});var it=m(nt=>{"use strict";c();var Ot=P().default,Se=B().isArray,Nn=[].slice;function Ct(){}nt.Compiler=Ct;Ct.prototype={compiler:Ct,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var n=0;n<e;n++){var i=this.opcodes[n],s=t.opcodes[n];if(i.opcode!==s.opcode||!be(i.args,s.args))return!1}for(e=this.children.length,n=0;n<e;n++)if(!this.children[n].equals(t.children[n]))return!1;return!0},guid:0,compile:function(t,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds;var n=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},n)for(var i in n)this.options.knownHelpers[i]=n[i];return this.accept(t)},accept:function(t){return this[t.type](t)},program:function(t){for(var e=t.statements,n=0,i=e.length;n<i;n++)this.accept(e[n]);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(s,r){return s-r}),this},compileProgram:function(t){var e=new this.compiler().compile(t,this.options),n=this.guid++,i;this.usePartial=this.usePartial||e.usePartial,this.children[n]=e;for(var s=0,r=e.depths.list.length;s<r;s++)i=e.depths.list[s],!(i<2)&&this.addDepth(i-1);return n},block:function(t){var e=t.mustache,n=t.program,i=t.inverse;n&&(n=this.compileProgram(n)),i&&(i=this.compileProgram(i));var s=e.sexpr,r=this.classifySexpr(s);r==="helper"?this.helperSexpr(s,n,i):r==="simple"?(this.simpleSexpr(s),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("blockValue",s.id.original)):(this.ambiguousSexpr(s,n,i),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var e=t.pairs,n,i;for(this.opcode("pushHash"),n=0,i=e.length;n<i;n++)this.pushParam(e[n][1]);for(;n--;)this.opcode("assignToHash",e[n][0]);this.opcode("popHash")},partial:function(t){var e=t.partialName;this.usePartial=!0,t.hash?this.accept(t.hash):this.opcode("push","undefined"),t.context?this.accept(t.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",e.name,t.indent||""),this.opcode("append")},content:function(t){t.string&&this.opcode("appendContent",t.string)},mustache:function(t){this.sexpr(t.sexpr),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(t,e,n){var i=t.id,s=i.parts[0],r=e!=null||n!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.ID(i),this.opcode("invokeAmbiguous",s,r)},simpleSexpr:function(t){var e=t.id;e.type==="DATA"?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,n){var i=this.setupFullMustacheParams(t,e,n),s=t.id,r=s.parts[0];if(this.options.knownHelpers[r])this.opcode("invokeKnownHelper",i.length,r);else{if(this.options.knownHelpersOnly)throw new Ot("You specified knownHelpersOnly, but used the unknown helper "+r,t);s.falsy=!0,this.ID(s),this.opcode("invokeHelper",i.length,s.original,s.isSimple)}},sexpr:function(t){var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0];e?this.opcode("lookupOnContext",t.parts,t.falsy,t.isScoped):this.opcode("pushContext")},DATA:function(t){this.options.data=!0,this.opcode("lookupData",t.id.depth,t.id.parts)},STRING:function(t){this.opcode("pushString",t.string)},NUMBER:function(t){this.opcode("pushLiteral",t.number)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:Nn.call(arguments,1)})},addDepth:function(t){t!==0&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifySexpr:function(t){var e=t.isHelper,n=t.eligibleHelper,i=this.options;if(n&&!e){var s=t.id.parts[0];i.knownHelpers[s]?e=!0:i.knownHelpersOnly&&(n=!1)}return e?"helper":n?"ambiguous":"simple"},pushParams:function(t){for(var e=0,n=t.length;e<n;e++)this.pushParam(t[e])},pushParam:function(t){this.stringParams?(t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",t.stringModeValue,t.type),t.type==="sexpr"&&this.sexpr(t)):(this.trackIds&&this.opcode("pushId",t.type,t.idName||t.stringModeValue),this.accept(t))},setupFullMustacheParams:function(t,e,n){var i=t.params;return this.pushParams(i),this.opcode("pushProgram",e),this.opcode("pushProgram",n),t.hash?this.hash(t.hash):this.opcode("emptyHash"),i}};function Pn(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new Ot("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i=n.parse(t),s=new n.Compiler().compile(i,e);return new n.JavaScriptCompiler().compile(s,e)}nt.precompile=Pn;function _n(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new Ot("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i;function s(){var a=n.parse(t),h=new n.Compiler().compile(a,e),p=new n.JavaScriptCompiler().compile(h,e,void 0,!0);return n.template(p)}var r=function(a,h){return i||(i=s()),i.call(this,a,h)};return r._setup=function(a){return i||(i=s()),i._setup(a)},r._child=function(a,h,p){return i||(i=s()),i._child(a,h,p)},r}nt.compile=_n;function be(t,e){if(t===e)return!0;if(Se(t)&&Se(e)&&t.length===e.length){for(var n=0;n<t.length;n++)if(!be(t[n],e[n]))return!1;return!0}}});var Ne=m(Ee=>{"use strict";c();var Cn=I().COMPILER_REVISION,On=I().REVISION_CHANGES,At=P().default;function W(t){this.value=t}function R(){}R.prototype={nameLookup:function(t,e){return R.isValidJavaScriptVariableName(e)?t+"."+e:t+"['"+e+"']"},depthedLookup:function(t){return this.aliases.lookup="this.lookup",'lookup(depths, "'+t+'")'},compilerInfo:function(){var t=Cn,e=On[t];return[t,e]},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,e,n,i){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!n,this.context=n||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.depths.list.length||this.options.compat;var s=t.opcodes,r,a,h;for(a=0,h=s.length;a<h;a++)r=s[a],this[r.opcode].apply(this,r.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new At("Compile completed with content left on stack");var p=this.createFunctionContext(i);if(this.isChild)return p;var o={compiler:this.compilerInfo(),main:p},u=this.context.programs;for(a=0,h=u.length;a<h;a++)u[a]&&(o[a]=u[a]);return this.environment.usePartial&&(o.usePartial=!0),this.options.data&&(o.useData=!0),this.useDepths&&(o.useDepths=!0),this.options.compat&&(o.compat=!0),i||(o.compiler=JSON.stringify(o.compiler),o=this.objectLiteral(o)),o},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(t){var e="",n=this.stackVars.concat(this.registers.list);n.length>0&&(e+=", "+n.join(", "));for(var i in this.aliases)this.aliases.hasOwnProperty(i)&&(e+=", "+i+"="+this.aliases[i]);var s=["depth0","helpers","partials","data"];this.useDepths&&s.push("depths");var r=this.mergeSource(e);return t?(s.push(r),Function.apply(this,s)):"function("+s.join(",")+`) {
  `+r+"}"},mergeSource:function(t){for(var e="",n,i=!this.forceBuffer,s,r=0,a=this.source.length;r<a;r++){var h=this.source[r];h.appendToBuffer?n?n=n+`
    + `+h.content:n=h.content:(n&&(e?e+="buffer += "+n+`;
  `:(s=!0,e=n+`;
  `),n=void 0),e+=h+`
  `,this.environment.isSimple||(i=!1))}return i?(n||!e)&&(e+="return "+(n||'""')+`;
`):(t+=", buffer = "+(s?"":this.initializeBuffer()),n?e+="return buffer + "+n+`;
`:e+=`return buffer;
`),t&&(e="var "+t.substring(2)+(s?"":`;
  `)+e),e},blockValue:function(t){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams(t,0,e);var n=this.popStack();e.splice(1,0,n),this.push("blockHelperMissing.call("+e.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams("",0,t,!0),this.flushInline();var e=this.topStack();t.splice(1,0,e),this.pushSource("if (!"+this.lastHelper+") { "+e+" = blockHelperMissing.call("+t.join(", ")+"); }")},appendContent:function(t){this.pendingContent&&(t=this.pendingContent+t),this.pendingContent=t},append:function(){this.flushInline();var t=this.popStack();this.pushSource("if ("+t+" != null) { "+this.appendToBuffer(t)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,n){var i=0,s=t.length;for(!n&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[i++])):this.pushContext();i<s;i++)this.replaceStack(function(r){var a=this.nameLookup(r,t[i],"context");return e?" && "+a:" != null ? "+a+" : "+r})},lookupData:function(t,e){t?this.pushStackLiteral("this.data(data, "+t+")"):this.pushStackLiteral("data");for(var n=e.length,i=0;i<n;i++)this.replaceStack(function(s){return" && "+this.nameLookup(s,e[i],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),e!=="sexpr"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+t.ids.join(",")+"}"),this.stringParams&&(this.push("{"+t.contexts.join(",")+"}"),this.push("{"+t.types.join(",")+"}")),this.push(`{
    `+t.values.join(`,
    `)+`
  }`)},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},invokeHelper:function(t,e,n){this.aliases.helperMissing="helpers.helperMissing";var i=this.popStack(),s=this.setupHelper(t,e),r=(n?s.name+" || ":"")+i+" || helperMissing";this.push("(("+r+").call("+s.callParams+"))")},invokeKnownHelper:function(t,e){var n=this.setupHelper(t,e);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(t,e){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var n=this.popStack();this.emptyHash();var i=this.setupHelper(0,t,e),s=this.lastHelper=this.nameLookup("helpers",t,"helper");this.push("((helper = (helper = "+s+" || "+n+") != null ? helper : helperMissing"+(i.paramsInit?"),("+i.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+i.callParams+") : helper))")},invokePartial:function(t,e){var n=[this.nameLookup("partials",t,"partial"),"'"+e+"'","'"+t+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?n.push("data"):this.options.compat&&n.push("undefined"),this.options.compat&&n.push("depths"),this.push("this.invokePartial("+n.join(", ")+")")},assignToHash:function(t){var e=this.popStack(),n,i,s;this.trackIds&&(s=this.popStack()),this.stringParams&&(i=this.popStack(),n=this.popStack());var r=this.hash;n&&r.contexts.push("'"+t+"': "+n),i&&r.types.push("'"+t+"': "+i),s&&r.ids.push("'"+t+"': "+s),r.values.push("'"+t+"': ("+e+")")},pushId:function(t,e){t==="ID"||t==="DATA"?this.pushString(e):t==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:R,compileChildren:function(t,e){for(var n=t.children,i,s,r=0,a=n.length;r<a;r++){i=n[r],s=new this.compiler;var h=this.matchExistingProgram(i);h==null?(this.context.programs.push(""),h=this.context.programs.length,i.index=h,i.name="program"+h,this.context.programs[h]=s.compile(i,e,this.context,!this.precompile),this.context.environments[h]=i,this.useDepths=this.useDepths||s.useDepths):(i.index=h,i.name="program"+h)}},matchExistingProgram:function(t){for(var e=0,n=this.context.environments.length;e<n;e++){var i=this.context.environments[e];if(i&&i.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],n=e.depths.list,i=this.useDepths,s,r=[e.index,"data"];return i&&r.push("depths"),"this.program("+r.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new W(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var e=this.incrStack();return this.pushSource(e+" = "+t+";"),this.compileStack.push(e),e},replaceStack:function(t){var e="",n=this.isInline(),i,s,r;if(!this.isInline())throw new At("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof W)e=i=a.value,r=!0;else{s=!this.stackSlot;var h=s?this.incrStack():this.topStackName();e="("+this.push(h)+" = "+a+")",i=this.topStack()}var p=t.call(this,i);r||this.popStack(),s&&this.stackSlot--,this.push("("+e+p+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var e=0,n=t.length;e<n;e++){var i=t[e];i instanceof W?this.compileStack.push(i):this.pushStack(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),n=(e?this.inlineStack:this.compileStack).pop();if(!t&&n instanceof W)return n.value;if(!e){if(!this.stackSlot)throw new At("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof W?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(this.quotedString(n)+":"+t[n]);return"{"+e.join(",")+"}"},setupHelper:function(t,e,n){var i=[],s=this.setupParams(e,t,i,n),r=this.nameLookup("helpers",e,"helper");return{params:i,paramsInit:s,name:r,callParams:[this.contextName(0)].concat(i).join(", ")}},setupOptions:function(t,e,n){var i={},s=[],r=[],a=[],h,p,o;i.name=this.quotedString(t),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack()),p=this.popStack(),o=this.popStack(),(o||p)&&(o||(o="this.noop"),p||(p="this.noop"),i.fn=o,i.inverse=p);for(var u=e;u--;)h=this.popStack(),n[u]=h,this.trackIds&&(a[u]=this.popStack()),this.stringParams&&(r[u]=this.popStack(),s[u]=this.popStack());return this.trackIds&&(i.ids="["+a.join(",")+"]"),this.stringParams&&(i.types="["+r.join(",")+"]",i.contexts="["+s.join(",")+"]"),this.options.data&&(i.data="data"),i},setupParams:function(t,e,n,i){var s=this.objectLiteral(this.setupOptions(t,e,n));return i?(this.useRegister("options"),n.push("options"),"options="+s):(n.push(s),"")}};var xe="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),An=R.RESERVED_WORDS={};for(st=0,we=xe.length;st<we;st++)An[xe[st]]=!0;var st,we;R.isValidJavaScriptVariableName=function(t){return!R.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};Ee.default=R});var Ce=m(_e=>{"use strict";c();var F=ue().default,In=xt().default,Dn=_t().parser,Hn=_t().parse,Rn=it().Compiler,Ln=it().compile,Mn=it().precompile,Tn=Ne().default,qn=F.create,Pe=function(){var t=qn();return t.compile=function(e,n){return Ln(e,n,t)},t.precompile=function(e,n){return Mn(e,n,t)},t.AST=In,t.Compiler=Rn,t.JavaScriptCompiler=Tn,t.Parser=Dn,t.parse=Hn,t};F=Pe();F.create=Pe;F.default=F;_e.default=F});var Dt=m(Oe=>{"use strict";c();function It(){}It.prototype={constructor:It,accept:function(t){return this[t.type](t)}};Oe.default=It});var Ae=m(Ht=>{"use strict";c();var Bn=Dt().default;function Vn(t){return new d().accept(t)}Ht.print=Vn;function d(){this.padding=0}Ht.PrintVisitor=d;d.prototype=new Bn;d.prototype.pad=function(t){for(var e="",n=0,i=this.padding;n<i;n++)e=e+"  ";return e=e+t+`
`,e};d.prototype.program=function(t){var e="",n=t.statements,i,s;for(i=0,s=n.length;i<s;i++)e=e+this.accept(n[i]);return this.padding--,e};d.prototype.block=function(t){var e="";return e=e+this.pad("BLOCK:"),this.padding++,e=e+this.accept(t.mustache),t.program&&(e=e+this.pad("PROGRAM:"),this.padding++,e=e+this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e=e+this.pad("{{^}}"),this.padding++,e=e+this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e};d.prototype.sexpr=function(t){for(var e=t.params,n=[],i,s=0,r=e.length;s<r;s++)n.push(this.accept(e[s]));return e="["+n.join(", ")+"]",i=t.hash?" "+this.accept(t.hash):"",this.accept(t.id)+" "+e+i};d.prototype.mustache=function(t){return this.pad("{{ "+this.accept(t.sexpr)+" }}")};d.prototype.partial=function(t){var e=this.accept(t.partialName);return t.context&&(e+=" "+this.accept(t.context)),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")};d.prototype.hash=function(t){for(var e=t.pairs,n=[],i,s,r=0,a=e.length;r<a;r++)i=e[r][0],s=this.accept(e[r][1]),n.push(i+"="+s);return"HASH{"+n.join(", ")+"}"};d.prototype.STRING=function(t){return'"'+t.string+'"'};d.prototype.NUMBER=function(t){return"NUMBER{"+t.number+"}"};d.prototype.BOOLEAN=function(t){return"BOOLEAN{"+t.bool+"}"};d.prototype.ID=function(t){var e=t.parts.join("/");return t.parts.length>1?"PATH:"+e:"ID:"+e};d.prototype.PARTIAL_NAME=function(t){return"PARTIAL:"+t.name};d.prototype.DATA=function(t){return"@"+this.accept(t.id)};d.prototype.content=function(t){return this.pad("CONTENT[ '"+t.string+"' ]")};d.prototype.comment=function(t){return this.pad("{{! '"+t.comment+"' }}")}});var He=m((wi,De)=>{c();var G=Ce().default;G.Visitor=Dt().default;var Ie=Ae();G.PrintVisitor=Ie.PrintVisitor;G.print=Ie.print;De.exports=G;typeof j<"u"&&j.extensions&&(Rt=function(t,e){var n=(ft(),Bt(ut)),i=n.readFileSync(e,"utf8");t.exports=G.compile(i)},j.extensions[".handlebars"]=Rt,j.extensions[".hbs"]=Rt);var Rt});var Te=m((Pi,Me)=>{c();var Re=(ft(),Bt(ut)),Le=He();function Fn(t){var e=Re.readFileSync("//style.css","utf-8"),n=Re.readFileSync("//resume.template","utf-8"),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return Le.registerHelper("date",function(s){var r=new Date(s);return i[r.getMonth()]+" "+r.getFullYear()}),Le.compile(n)({css:e,resume:t})}Me.exports={render:Fn}});c();var L=Ge(Te(),1),qe=L.default??L,Ci=qe.render??L.render,Oi=qe.pdfRenderOptions??L.pdfRenderOptions;export{Oi as pdfRenderOptions,Ci as render};
