var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Be=Object.create;var Y=Object.defineProperty;var Fe=Object.getOwnPropertyDescriptor;var je=Object.getOwnPropertyNames;var Ue=Object.getPrototypeOf,We=Object.prototype.hasOwnProperty;var j=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var Tt=(t,e)=>()=>(t&&(e=t(t=0)),e);var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),ze=(t,e)=>{for(var n in e)Y(t,n,{get:e[n],enumerable:!0})},qt=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of je(e))!We.call(t,s)&&s!==n&&Y(t,s,{get:()=>e[s],enumerable:!(i=Fe(e,s))||i.enumerable});return t};var Ge=(t,e,n)=>(n=t!=null?Be(Ue(t)):{},qt(e||!t||!t.__esModule?Y(n,"default",{value:t,enumerable:!0}):n,t)),Vt=t=>qt(Y({},"__esModule",{value:!0}),t);var p=Tt(()=>{});var ut={};ze(ut,{createReadStream:()=>Yt,createWriteStream:()=>Xt,default:()=>Ke,existsSync:()=>Ut,lstatSync:()=>Gt,mkdirSync:()=>zt,readFileSync:()=>Ft,readdirSync:()=>jt,rmdirSync:()=>Jt,statSync:()=>pt,unlinkSync:()=>Kt,writeFileSync:()=>Wt});function ct(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Bt(t){var e=ct(t);if(X[e]!==void 0)return X[e];for(var n=Object.keys(X),i=0;i<n.length;i++)if(e.endsWith("/"+n[i])||e===n[i])return X[n[i]]}function lt(t){var e=ct(t);if((e===""||e===".")&&q["."]!==void 0)return q["."];if(q[e]!==void 0)return q[e];for(var n=Object.keys(q),i=0;i<n.length;i++)if(e.endsWith("/"+n[i])||e===n[i])return q[n[i]]}var X,q,Ft,jt,Ut,Wt,zt,pt,Gt,Kt,Jt,Yt,Xt,Ke,ft=Tt(()=>{"use strict";p();X={"package.json":`{
  "name": "jsonresume-theme-flat-davidgwking",
  "version": "0.3.7",
  "description": "davidgwking's fork of erming's jsonresume-theme-flat",
  "author": "Mattias Erming",
  "repository": {
    "type": "git",
    "url": "http://github.com/davidgwking/jsonresume-theme-flat"
  },
  "scripts": {
    "start": "resume serve"
  },
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  },
  "license": "MIT"
}
`,"resume.template":`<!doctype html>
<html>
	<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">

	<title>{{#resume.basics}}{{name}}{{/resume.basics}}</title>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css">

	<style type="text/css">
	{{{css}}}
	</style>

	</head>
	<body>

	<header id="header">
		<div class="container">
			<div class="row">
				<div class="col-sm-9 col-sm-push-3">
					{{#resume.basics}}
					{{#name}}
					<h1>
						{{.}}
					</h1>
					{{/name}}
					{{#label}}
					<h2>
						{{.}}
					</h2>
					{{/label}}
					{{/resume.basics}}
				</div>
			</div>
		</div>
	</header>
	<div id="content" class="container">

	{{#resume.basics}}
	<section id="contact" class="row">
		<aside class="col-sm-3">
			<h3>Contact</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			{{#email}}
			<div class="col-sm-6">
				<strong>Email</strong>
				<div class="email">{{.}}</div>
			</div>
			{{/email}}
			{{#phone}}
			<div class="col-sm-6">
				<strong>Phone</strong>
				<div class="phone">{{.}}</div>
			</div>
			{{/phone}}
			{{#website}}
			<div class="col-sm-6">
				<strong>Website</strong>
				<div class="website">
					<a href="{{.}}">{{.}}</a>
				</div>
			</div>
			{{/website}}
			</div>
		</div>
	</section>
	<section id="about" class="row">
		<aside class="col-sm-3">
			<h3>About</h3>
		</aside>
		<div class="col-sm-9">
		{{#summary}}
			<p>{{.}}</p>
		{{/summary}}
		</div>
	</section>
	{{#if profiles.length}}
	<section id="profiles" class="row">
		<aside class="col-sm-3">
			<h3>Profiles</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
				{{#profiles}}
				<div class="col-sm-6">
					{{#network}}
					<strong class="network">
						{{.}}
					</strong>
					{{/network}}
					{{#if username}}
					<div class="username">
						{{#if url}}
						<div class="url">
							<a href="{{url}}">{{username}}</a>
						</div>
						{{else}}
							{{username}}
						{{/if}}
					</div>
					{{else}}
						{{#if url}}
						<div class="url">
							<a href="{{url}}">{{url}}</a>
						</div>
						{{/if}}
					{{/if}}
				</div>
				{{/profiles}}
			</div>
		</div>
	</section>
	{{/if}}
	{{/resume.basics}}

	{{#if resume.work.length}}
	<section id="work" class="row">
		<aside class="col-sm-3">
			<h3>Work</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			{{#each resume.work}}
			<div class="col-sm-12">
				<h4 class="strike-through">
					<span>{{company}}</span>
					<span class="date">
						{{startDate}} \u2014 {{endDate}}
					</span>
				</h4>
				{{#website}}
				<div class="website pull-right">
					<a href="{{.}}">{{.}}</a>
				</div>
				{{/website}}
				{{#position}}
				<div class="position">
					{{.}}
				</div>
				{{/position}}
				{{#summary}}
				<div class="summary">
					<p>{{.}}</p>
				</div>
				{{/summary}}
				{{#if highlights.length}}
				<h4>Highlights</h4>
				<ul class="highlights">
					{{#highlights}}
					<li class="bullet">{{.}}</li>
					{{/highlights}}
				</ul>
				{{/if}}
			</div>
			{{/each}}
			</div>
		</div>
	</section>
	{{/if}}

	{{#if resume.volunteer.length}}
	<section id="volunteer" class="row">
		<aside class="col-sm-3">
			<h3>Volunteer</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			{{#each resume.volunteer}}
			<div class="col-sm-12">
				<h4 class="strike-through">
					<span>{{organization}}</span>
					<span class="date">
						{{startDate}} \u2014 {{endDate}}
					</span>
				</h4>
				{{#website}}
				<div class="website pull-right">
					<a href="{{.}}">{{.}}</a>
				</div>
				{{/website}}
				{{#position}}
				<div class="position">
					{{.}}
				</div>
				{{/position}}
				{{#summary}}
				<div class="summary">
					<p>{{.}}</p>
				</div>
				{{/summary}}
				{{#if highlights.length}}
				<h4>Highlights</h4>
				<ul class="highlights">
					{{#highlights}}
					<li class="bullet">{{.}}</li>
					{{/highlights}}
				</ul>
				{{/if}}
			</div>
			{{/each}}
			</div>
		</div>
	</section>
	{{/if}}

	{{#if resume.education.length}}
	<section id="education" class="row">
		<aside class="col-sm-3">
			<h3>Education</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			{{#each resume.education}}
			<div class="col-sm-12">
				<h4 class="strike-through">
					<span>{{institution}}</span>
					<span class="date">
						{{startDate}} \u2014 {{endDate}}
					</span>
				</h4>
				{{#area}}
				<div class="area">
					{{.}}
				</div>
				{{/area}}
				{{#studyType}}
				<div class="studyType">
					{{.}}
				</div>
				{{/studyType}}
				{{#if courses.length}}
				<h4>Courses</h4>
				<ul class="courses">
					{{#courses}}
					<li>{{.}}</li>
					{{/courses}}
				</ul>
				{{/if}}
			</div>
			{{/each}}
			</div>
		</div>
	</section>
	{{/if}}

	{{#if resume.awards.length}}
	<section id="awards" class="row">
		<aside class="col-sm-3">
			<h3>Awards</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			{{#each resume.awards}}
			<div class="col-sm-12">
				<h4 class="strike-through">
					<span>{{title}}</span>
				</h4>
				{{#date}}
				<div class="date pull-right">
					<em>Awarded</em>
					{{.}}
				</div>
				{{/date}}
				{{#awarder}}
				<div class="awarder">
					<em>by</em>
					<strong>{{.}}</strong>
				</div>
				{{/awarder}}
				{{#summary}}
				<div class="summary">
					{{.}}
				</div>
				{{/summary}}
			</div>
			{{/each}}
			</div>
		</div>
	</section>
	{{/if}}

	{{#if resume.publications.length}}
	<section id="publications" class="row">
		<aside class="col-sm-3">
			<h3>Publications</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			{{#each resume.publications}}
			<div class="col-sm-12">
				<h4 class="strike-through">
					<span>{{name}}</span>
					<span class="date">
						{{releaseDate}}
					</span>
				</h4>
				{{#website}}
				<div class="website pull-right">
					<a href="{{.}}"></a>
				</div>
				{{/website}}
				{{#publisher}}
				<div class="publisher">
					<em>Published by</em>
					<strong>{{.}}</strong>
				</div>
				{{/publisher}}
				{{#summary}}
				<div class="summary">
					<p>{{.}}</p>
				</div>
				{{/summary}}
			</div>
			{{/each}}
			</div>
		</div>
	</section>
	{{/if}}

	{{#if resume.skills.length}}
	<section id="skills" class="row">
		<aside class="col-sm-3">
			<h3>Skills</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			{{#each resume.skills}}
			<div class="col-sm-6">
				{{#name}}
				<div class="name">
					<h4>{{.}}</h4>
				</div>
				{{/name}}
				{{#if keywords.length}}
				<ul class="keywords">
					{{#keywords}}
					<li>{{.}}</li>
					{{/keywords}}
				</ul>
				{{/if}}
			</div>
			{{/each}}
			</div>
		</div>
	</section>
	{{/if}}

	{{#if resume.languages.length}}
	<section id="languages" class="row">
		<aside class="col-sm-3">
			<h3>Languages</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			{{#each resume.languages}}
			<div class="col-sm-6">
				{{#language}}
				<div class="language">
					<strong>{{.}}</strong>
				</div>
				{{/language}}
				{{#fluency}}
				<div class="fluency">
					{{.}}
				</div>
				{{/fluency}}
			</div>
			{{/each}}
			</div>
		</div>
	</section>
	{{/if}}

	{{#if resume.interests.length}}
	<section id="interests" class="row">
		<aside class="col-sm-3">
			<h3>Interests</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			{{#each resume.interests}}
			<div class="col-sm-6">
				{{#name}}
				<div class="name">
					<h4>{{.}}</h4>
				</div>
				{{/name}}
				{{#if keywords.length}}
				<ul class="keywords">
					{{#keywords}}
					<li>{{.}}</li>
					{{/keywords}}
				</ul>
				{{/if}}
			</div>
			{{/each}}
			</div>
		</div>
	</section>
	{{/if}}

	{{#if resume.references.length}}
	<section id="references" class="row">
		<aside class="col-sm-3">
			<h3>References</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			{{#each resume.references}}
			<div class="col-sm-12">
				{{#if reference}}
				<blockquote class="reference">
					<p>{{reference}}</p>
					{{#name}}
					<p class="name">
						<strong>\u2014 {{.}}</strong>
					</p>
					{{/name}}
				</blockquote>
				{{/if}}
			</div>
			{{/each}}
			</div>
		</div>
	</section>
	{{/if}}

	</div>

	</body>
</html>
`,"style.css":`@import url(
	https://fonts.googleapis.com/css?family=Lato:400,700
);
body {
	background: #fff;
	font-family: Lato, sans-serif;
	margin: 0 0 80px;
}
a {
	color: #1DD3B0;
}
a:focus,
a:hover {
	color: #EACBD2;
	text-decoration: none;
}
p {
	line-height: 1.5;
	margin: 0;\`\`
}
p + p {
	margin-top: 10px;
}
h1,
h2,
h3,
h4 {
	margin-top: 0
}
section {
	margin-top: 30px;
}
li {
	line-height: 1.8;
	list-style: none;
}
li:before {
	content: "\\f052";
	float: left;
	font: 13px Octicons;
	margin-top: 6px;
	margin-left: -20px;
	opacity: .1;
	position: absolute;
}
blockquote {
	border-left: 5px solid #e7e9ec;
	font-size: 14px;
}
em {
	color: #95a5a6;
	font-weight: normal;
	font-style: normal;
}
h4 span:first-child {
	color: #000;
	font-weight: bold;
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
	background: #f4f6f6;
	padding: 25px 0;
	margin-bottom: 15px;
}
#header h2 {
	color: #565554;
	font-size: 24px;
}
#content h3 {
	color: #1C9CC7;
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
	font-weight: bold;
	margin-bottom: 8px;
}
#education .area {
	font-weight: bold;
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
		font-size: 26px;
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
		margin-bottom: 10px;
		padding: 40px 0;
	}
	#actions {
		display: none;
	}
}
`},q={".":["README.md","index.js","package.json","resume.template","style.css"]};Ft=function(t,e){var n=Bt(t);return n!==void 0?n:""},jt=function(t,e){var n=lt(t);return n===void 0&&(n=[]),e&&e.withFileTypes?n.map(function(i){var s=ct(t)+"/"+i,r=lt(s)!==void 0;return{name:i,isFile:function(){return!r},isDirectory:function(){return r}}}):n},Ut=function(t){return Bt(t)!==void 0||lt(t)!==void 0},Wt=function(){},zt=function(){},pt=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Gt=pt,Kt=function(){},Jt=function(){},Yt=function(){return{pipe:function(t){return t},on:function(){return this}}},Xt=function(){return{write:function(){},end:function(){},on:function(){return this}}},Ke={readFileSync:Ft,readdirSync:jt,existsSync:Ut,writeFileSync:Wt,mkdirSync:zt,statSync:pt,lstatSync:Gt,unlinkSync:Kt,rmdirSync:Jt,createReadStream:Yt,createWriteStream:Xt}});var dt=m(Qt=>{"use strict";p();function Zt(t){this.string=t}Zt.prototype.toString=function(){return""+this.string};Qt.default=Zt});var V=m(N=>{"use strict";p();var Je=dt().default,Ye={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Xe=/[&<>"'`]/g,Ze=/[&<>"'`]/;function Qe(t){return Ye[t]}function $e(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}N.extend=$e;var mt=Object.prototype.toString;N.toString=mt;var Z=function(t){return typeof t=="function"};Z(/x/)&&(Z=function(t){return typeof t=="function"&&mt.call(t)==="[object Function]"});var Z;N.isFunction=Z;var $t=Array.isArray||function(t){return t&&typeof t=="object"?mt.call(t)==="[object Array]":!1};N.isArray=$t;function tn(t){return t instanceof Je?t.toString():t==null?"":t?(t=""+t,Ze.test(t)?t.replace(Xe,Qe):t):t+""}N.escapeExpression=tn;function en(t){return!t&&t!==0?!0:!!($t(t)&&t.length===0)}N.isEmpty=en;function nn(t,e){return(t?t+".":"")+e}N.appendContextPath=nn});var P=m(ee=>{"use strict";p();var gt=["description","fileName","lineNumber","message","name","number","stack"];function te(t,e){var n;e&&e.firstLine&&(n=e.firstLine,t+=" - "+n+":"+e.firstColumn);for(var i=Error.prototype.constructor.call(this,t),s=0;s<gt.length;s++)this[gt[s]]=i[gt[s]];n&&(this.lineNumber=n,this.column=e.firstColumn)}te.prototype=new Error;ee.default=te});var A=m(_=>{"use strict";p();var b=V(),kt=P().default,sn="2.0.0";_.VERSION=sn;var rn=6;_.COMPILER_REVISION=rn;var an={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};_.REVISION_CHANGES=an;var ne=b.isArray,vt=b.isFunction,ie=b.toString,se="[object Object]";function bt(t,e){this.helpers=t||{},this.partials=e||{},on(this)}_.HandlebarsEnvironment=bt;bt.prototype={constructor:bt,logger:U,log:re,registerHelper:function(t,e){if(ie.call(t)===se){if(e)throw new kt("Arg not supported with multiple helpers");b.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){ie.call(t)===se?b.extend(this.partials,t):this.partials[t]=e},unregisterPartial:function(t){delete this.partials[t]}};function on(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new kt("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(e,n){var i=n.inverse,s=n.fn;if(e===!0)return s(this);if(e===!1||e==null)return i(this);if(ne(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):i(this);if(n.data&&n.ids){var r=Q(n.data);r.contextPath=b.appendContextPath(n.data.contextPath,n.name),n={data:r}}return s(e,n)}),t.registerHelper("each",function(e,n){if(!n)throw new kt("Must pass iterator to #each");var i=n.fn,s=n.inverse,r=0,a="",o,c;if(n.data&&n.ids&&(c=b.appendContextPath(n.data.contextPath,n.ids[0])+"."),vt(e)&&(e=e.call(this)),n.data&&(o=Q(n.data)),e&&typeof e=="object")if(ne(e))for(var h=e.length;r<h;r++)o&&(o.index=r,o.first=r===0,o.last=r===e.length-1,c&&(o.contextPath=c+r)),a=a+i(e[r],{data:o});else for(var u in e)e.hasOwnProperty(u)&&(o&&(o.key=u,o.index=r,o.first=r===0,c&&(o.contextPath=c+u)),a=a+i(e[u],{data:o}),r++);return r===0&&(a=s(this)),a}),t.registerHelper("if",function(e,n){return vt(e)&&(e=e.call(this)),!n.hash.includeZero&&!e||b.isEmpty(e)?n.inverse(this):n.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),t.registerHelper("with",function(e,n){vt(e)&&(e=e.call(this));var i=n.fn;if(b.isEmpty(e))return n.inverse(this);if(n.data&&n.ids){var s=Q(n.data);s.contextPath=b.appendContextPath(n.data.contextPath,n.ids[0]),n={data:s}}return i(e,n)}),t.registerHelper("log",function(e,n){var i=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;t.log(i,e)}),t.registerHelper("lookup",function(e,n){return e&&e[n]})}var U={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(U.level<=t){var n=U.methodMap[t];typeof console<"u"&&console[n]&&console[n].call(console,e)}}};_.logger=U;var re=U.log;_.log=re;var Q=function(t){var e=b.extend({},t);return e._parent=t,e};_.createFrame=Q});var oe=m(B=>{"use strict";p();var yt=V(),H=P().default,hn=A().COMPILER_REVISION,ae=A().REVISION_CHANGES,ln=A().createFrame;function cn(t){var e=t&&t[0]||1,n=hn;if(e!==n)if(e<n){var i=ae[n],s=ae[e];throw new H("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+s+").")}else throw new H("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}B.checkRevision=cn;function pn(t,e){if(!e)throw new H("No environment passed to template");if(!t||!t.main)throw new H("Unknown template object: "+typeof t);e.VM.checkRevision(t.compiler);var n=function(r,a,o,c,h,u,l,w,M){h&&(c=yt.extend({},c,h));var O=e.VM.invokePartial.call(this,r,o,c,u,l,w,M);if(O==null&&e.compile){var Dt={helpers:u,partials:l,data:w,depths:M};l[o]=e.compile(r,{data:w!==void 0,compat:t.compat},e),O=l[o](c,Dt)}if(O!=null){if(a){for(var S=O.split(`
`),E=0,rt=S.length;E<rt&&!(!S[E]&&E+1===rt);E++)S[E]=a+S[E];O=S.join(`
`)}return O}else throw new H("The partial "+o+" could not be compiled when running in runtime-only mode")},i={lookup:function(r,a){for(var o=r.length,c=0;c<o;c++)if(r[c]&&r[c][a]!=null)return r[c][a]},lambda:function(r,a){return typeof r=="function"?r.call(a):r},escapeExpression:yt.escapeExpression,invokePartial:n,fn:function(r){return t[r]},programs:[],program:function(r,a,o){var c=this.programs[r],h=this.fn(r);return a||o?c=$(this,r,h,a,o):c||(c=this.programs[r]=$(this,r,h)),c},data:function(r,a){for(;r&&a--;)r=r._parent;return r},merge:function(r,a){var o=r||a;return r&&a&&r!==a&&(o=yt.extend({},a,r)),o},noop:e.VM.noop,compilerInfo:t.compiler},s=function(r,a){a=a||{};var o=a.data;s._setup(a),!a.partial&&t.useData&&(o=dn(r,o));var c;return t.useDepths&&(c=a.depths?[r].concat(a.depths):[r]),t.main.call(i,r,i.helpers,i.partials,o,c)};return s.isTop=!0,s._setup=function(r){r.partial?(i.helpers=r.helpers,i.partials=r.partials):(i.helpers=i.merge(r.helpers,e.helpers),t.usePartial&&(i.partials=i.merge(r.partials,e.partials)))},s._child=function(r,a,o){if(t.useDepths&&!o)throw new H("must pass parent depths");return $(i,r,t[r],a,o)},s}B.template=pn;function $(t,e,n,i,s){var r=function(a,o){return o=o||{},n.call(t,a,t.helpers,t.partials,o.data||i,s&&[a].concat(s))};return r.program=e,r.depth=s?s.length:0,r}B.program=$;function un(t,e,n,i,s,r,a){var o={partial:!0,helpers:i,partials:s,data:r,depths:a};if(t===void 0)throw new H("The partial "+e+" could not be found");if(t instanceof Function)return t(n,o)}B.invokePartial=un;function fn(){return""}B.noop=fn;function dn(t,e){return(!e||!("root"in e))&&(e=e?ln(e):{},e.root=t),e}});var ue=m(pe=>{"use strict";p();var he=A(),mn=dt().default,gn=P().default,St=V(),le=oe(),ce=function(){var t=new he.HandlebarsEnvironment;return St.extend(t,he),t.SafeString=mn,t.Exception=gn,t.Utils=St,t.escapeExpression=St.escapeExpression,t.VM=le,t.template=function(e){return le.template(e,t)},t},tt=ce();tt.create=ce;tt.default=tt;pe.default=tt});var xt=m(de=>{"use strict";p();var fe=P().default;function v(t){t=t||{},this.firstLine=t.first_line,this.firstColumn=t.first_column,this.lastColumn=t.last_column,this.lastLine=t.last_line}var W={ProgramNode:function(t,e,n){v.call(this,n),this.type="program",this.statements=t,this.strip=e},MustacheNode:function(t,e,n,i,s){if(v.call(this,s),this.type="mustache",this.strip=i,n!=null&&n.charAt){var r=n.charAt(3)||n.charAt(2);this.escaped=r!=="{"&&r!=="&"}else this.escaped=!!n;t instanceof W.SexprNode?this.sexpr=t:this.sexpr=new W.SexprNode(t,e),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(t,e,n){v.call(this,n),this.type="sexpr",this.hash=e;var i=this.id=t[0],s=this.params=t.slice(1);this.isHelper=!!(s.length||e),this.eligibleHelper=this.isHelper||i.isSimple},PartialNode:function(t,e,n,i,s){v.call(this,s),this.type="partial",this.partialName=t,this.context=e,this.hash=n,this.strip=i,this.strip.inlineStandalone=!0},BlockNode:function(t,e,n,i,s){v.call(this,s),this.type="block",this.mustache=t,this.program=e,this.inverse=n,this.strip=i,n&&!e&&(this.isInverse=!0)},RawBlockNode:function(t,e,n,i){if(v.call(this,i),t.sexpr.id.original!==n)throw new fe(t.sexpr.id.original+" doesn't match "+n,this);e=new W.ContentNode(e,i),this.type="block",this.mustache=t,this.program=new W.ProgramNode([e],{},i)},ContentNode:function(t,e){v.call(this,e),this.type="content",this.original=this.string=t},HashNode:function(t,e){v.call(this,e),this.type="hash",this.pairs=t},IdNode:function(t,e){v.call(this,e),this.type="ID";for(var n="",i=[],s=0,r="",a=0,o=t.length;a<o;a++){var c=t[a].part;if(n+=(t[a].separator||"")+c,c===".."||c==="."||c==="this"){if(i.length>0)throw new fe("Invalid path: "+n,this);c===".."?(s++,r+="../"):this.isScoped=!0}else i.push(c)}this.original=n,this.parts=i,this.string=i.join("."),this.depth=s,this.idName=r+this.string,this.isSimple=t.length===1&&!this.isScoped&&s===0,this.stringModeValue=this.string},PartialNameNode:function(t,e){v.call(this,e),this.type="PARTIAL_NAME",this.name=t.original},DataNode:function(t,e){v.call(this,e),this.type="DATA",this.id=t,this.stringModeValue=t.stringModeValue,this.idName="@"+t.stringModeValue},StringNode:function(t,e){v.call(this,e),this.type="STRING",this.original=this.string=this.stringModeValue=t},NumberNode:function(t,e){v.call(this,e),this.type="NUMBER",this.original=this.number=t,this.stringModeValue=Number(t)},BooleanNode:function(t,e){v.call(this,e),this.type="BOOLEAN",this.bool=t,this.stringModeValue=t==="true"},CommentNode:function(t,e){v.call(this,e),this.type="comment",this.comment=t,this.strip={inlineStandalone:!0}}};de.default=W});var ge=m(me=>{"use strict";p();var vn=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(s,r,a,o,c,h,u){var l=h.length-1;switch(c){case 1:return o.prepareProgram(h[l-1].statements,!0),h[l-1];break;case 2:this.$=new o.ProgramNode(o.prepareProgram(h[l]),{},this._$);break;case 3:this.$=h[l];break;case 4:this.$=h[l];break;case 5:this.$=h[l];break;case 6:this.$=h[l];break;case 7:this.$=new o.ContentNode(h[l],this._$);break;case 8:this.$=new o.CommentNode(h[l],this._$);break;case 9:this.$=new o.RawBlockNode(h[l-2],h[l-1],h[l],this._$);break;case 10:this.$=new o.MustacheNode(h[l-1],null,"","",this._$);break;case 11:this.$=o.prepareBlock(h[l-3],h[l-2],h[l-1],h[l],!1,this._$);break;case 12:this.$=o.prepareBlock(h[l-3],h[l-2],h[l-1],h[l],!0,this._$);break;case 13:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 14:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 15:this.$={strip:o.stripFlags(h[l-1],h[l-1]),program:h[l]};break;case 16:this.$={path:h[l-1],strip:o.stripFlags(h[l-2],h[l])};break;case 17:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 18:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 19:this.$=new o.PartialNode(h[l-3],h[l-2],h[l-1],o.stripFlags(h[l-4],h[l]),this._$);break;case 20:this.$=new o.PartialNode(h[l-2],void 0,h[l-1],o.stripFlags(h[l-3],h[l]),this._$);break;case 21:this.$=new o.SexprNode([h[l-2]].concat(h[l-1]),h[l],this._$);break;case 22:this.$=new o.SexprNode([h[l]],null,this._$);break;case 23:this.$=h[l];break;case 24:this.$=new o.StringNode(h[l],this._$);break;case 25:this.$=new o.NumberNode(h[l],this._$);break;case 26:this.$=new o.BooleanNode(h[l],this._$);break;case 27:this.$=h[l];break;case 28:h[l-1].isHelper=!0,this.$=h[l-1];break;case 29:this.$=new o.HashNode(h[l],this._$);break;case 30:this.$=[h[l-2],h[l]];break;case 31:this.$=new o.PartialNameNode(h[l],this._$);break;case 32:this.$=new o.PartialNameNode(new o.StringNode(h[l],this._$),this._$);break;case 33:this.$=new o.PartialNameNode(new o.NumberNode(h[l],this._$));break;case 34:this.$=new o.DataNode(h[l],this._$);break;case 35:this.$=new o.IdNode(h[l],this._$);break;case 36:h[l-2].push({part:h[l],separator:h[l-1]}),this.$=h[l-2];break;case 37:this.$=[{part:h[l]}];break;case 38:this.$=[];break;case 39:h[l-1].push(h[l]);break;case 48:this.$=[];break;case 49:h[l-1].push(h[l]);break;case 52:this.$=[h[l]];break;case 53:h[l-1].push(h[l]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(s,r){throw new Error(s)},parse:function(s){var r=this,a=[0],o=[null],c=[],h=this.table,u="",l=0,w=0,M=0,O=2,Dt=1;this.lexer.setInput(s),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var S=this.lexer.yylloc;c.push(S);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function rt(y){a.length=a.length-2*y,o.length=o.length-y,c.length=c.length-y}function Ve(){var y;return y=r.lexer.lex()||1,typeof y!="number"&&(y=r.symbols_[y]||y),y}for(var g,at,I,k,jn,ot,T={},K,x,Mt,J;;){if(I=a[a.length-1],this.defaultActions[I]?k=this.defaultActions[I]:((g===null||typeof g>"u")&&(g=Ve()),k=h[I]&&h[I][g]),typeof k>"u"||!k.length||!k[0]){var ht="";if(!M){J=[];for(K in h[I])this.terminals_[K]&&K>2&&J.push("'"+this.terminals_[K]+"'");this.lexer.showPosition?ht="Parse error on line "+(l+1)+`:
`+this.lexer.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[g]||g)+"'":ht="Parse error on line "+(l+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(ht,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:S,expected:J})}}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+g);switch(k[0]){case 1:a.push(g),o.push(this.lexer.yytext),c.push(this.lexer.yylloc),a.push(k[1]),g=null,at?(g=at,at=null):(w=this.lexer.yyleng,u=this.lexer.yytext,l=this.lexer.yylineno,S=this.lexer.yylloc,M>0&&M--);break;case 2:if(x=this.productions_[k[1]][1],T.$=o[o.length-x],T._$={first_line:c[c.length-(x||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(x||1)].first_column,last_column:c[c.length-1].last_column},E&&(T._$.range=[c[c.length-(x||1)].range[0],c[c.length-1].range[1]]),ot=this.performAction.call(T,u,w,l,this.yy,k[1],o,c),typeof ot<"u")return ot;x&&(a=a.slice(0,-1*x*2),o=o.slice(0,-1*x),c=c.slice(0,-1*x)),a.push(this.productions_[k[1]][0]),o.push(T.$),c.push(T._$),Mt=h[a[a.length-2]][a[a.length-1]],a.push(Mt);break;case 3:return!0}}return!0}},e=(function(){var i={EOF:1,parseError:function(r,a){if(this.yy.parser)this.yy.parser.parseError(r,a);else throw new Error(r)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var r=s.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var r=s.length,a=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===o.length?this.yylloc.first_column:0)+o[o.length-a.length].length-a[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),r=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,r,a,o,c,h;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),l=0;l<u.length&&(a=this._input.match(this.rules[u[l]]),!(a&&(!r||a[0].length>r[0].length)&&(r=a,o=l,!this.options.flex)));l++);return r?(h=r[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],s=this.performAction.call(this,this.yy,this,u[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return typeof r<"u"?r:this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(r){this.begin(r)}};return i.options={},i.performAction=function(r,a,o,c){function h(l,w){return a.yytext=a.yytext.substr(l,a.yyleng-w)}var u=c;switch(o){case 0:if(a.yytext.slice(-2)==="\\\\"?(h(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(h(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return a.yytext=a.yytext.substr(5,a.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return h(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return h(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return a.yytext=h(1,2).replace(/\\"/g,'"'),42;break;case 30:return a.yytext=h(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return a.yytext=h(1,2),50;break;case 37:return"INVALID";case 38:return 5}},i.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],i.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},i})();t.lexer=e;function n(){this.yy={}}return n.prototype=t,t.Parser=n,new n})();me.default=vn});var ve=m(et=>{"use strict";p();var kn=P().default;function bn(t,e){return{left:t.charAt(2)==="~",right:e.charAt(e.length-3)==="~"}}et.stripFlags=bn;function yn(t,e,n,i,s,r){if(t.sexpr.id.original!==i.path.original)throw new kn(t.sexpr.id.original+" doesn't match "+i.path.original,t);var a=n&&n.program,o={left:t.strip.left,right:i.strip.right,openStandalone:Et(e.statements),closeStandalone:wt((a||e).statements)};if(t.strip.right&&R(e.statements,null,!0),a){var c=n.strip;c.left&&C(e.statements,null,!0),c.right&&R(a.statements,null,!0),i.strip.left&&C(a.statements,null,!0),wt(e.statements)&&Et(a.statements)&&(C(e.statements),R(a.statements))}else i.strip.left&&C(e.statements,null,!0);return s?new this.BlockNode(t,a,e,o,r):new this.BlockNode(t,e,a,o,r)}et.prepareBlock=yn;function Sn(t,e){for(var n=0,i=t.length;n<i;n++){var s=t[n],r=s.strip;if(r){var a=wt(t,n,e,s.type==="partial"),o=Et(t,n,e),c=r.openStandalone&&a,h=r.closeStandalone&&o,u=r.inlineStandalone&&a&&o;r.right&&R(t,n,!0),r.left&&C(t,n,!0),u&&(R(t,n),C(t,n)&&s.type==="partial"&&(s.indent=/([ \t]+$)/.exec(t[n-1].original)?RegExp.$1:"")),c&&(R((s.program||s.inverse).statements),C(t,n)),h&&(R(t,n),C((s.inverse||s.program).statements))}}return t}et.prepareProgram=Sn;function wt(t,e,n){e===void 0&&(e=t.length);var i=t[e-1],s=t[e-2];if(!i)return n;if(i.type==="content")return(s||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}function Et(t,e,n){e===void 0&&(e=-1);var i=t[e+1],s=t[e+2];if(!i)return n;if(i.type==="content")return(s||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}function R(t,e,n){var i=t[e==null?0:e+1];if(!(!i||i.type!=="content"||!n&&i.rightStripped)){var s=i.string;i.string=i.string.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.string!==s}}function C(t,e,n){var i=t[e==null?t.length-1:e-1];if(!(!i||i.type!=="content"||!n&&i.leftStripped)){var s=i.string;return i.string=i.string.replace(n?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.string!==s,i.leftStripped}}});var _t=m(Pt=>{"use strict";p();var Nt=ge().default,ke=xt().default,xn=ve(),wn=V().extend;Pt.parser=Nt;var be={};wn(be,xn,ke);function En(t){return t.constructor===ke.ProgramNode?t:(Nt.yy=be,Nt.parse(t))}Pt.parse=En});var it=m(nt=>{"use strict";p();var Ot=P().default,ye=V().isArray,Nn=[].slice;function Ct(){}nt.Compiler=Ct;Ct.prototype={compiler:Ct,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var n=0;n<e;n++){var i=this.opcodes[n],s=t.opcodes[n];if(i.opcode!==s.opcode||!Se(i.args,s.args))return!1}for(e=this.children.length,n=0;n<e;n++)if(!this.children[n].equals(t.children[n]))return!1;return!0},guid:0,compile:function(t,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds;var n=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},n)for(var i in n)this.options.knownHelpers[i]=n[i];return this.accept(t)},accept:function(t){return this[t.type](t)},program:function(t){for(var e=t.statements,n=0,i=e.length;n<i;n++)this.accept(e[n]);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(s,r){return s-r}),this},compileProgram:function(t){var e=new this.compiler().compile(t,this.options),n=this.guid++,i;this.usePartial=this.usePartial||e.usePartial,this.children[n]=e;for(var s=0,r=e.depths.list.length;s<r;s++)i=e.depths.list[s],!(i<2)&&this.addDepth(i-1);return n},block:function(t){var e=t.mustache,n=t.program,i=t.inverse;n&&(n=this.compileProgram(n)),i&&(i=this.compileProgram(i));var s=e.sexpr,r=this.classifySexpr(s);r==="helper"?this.helperSexpr(s,n,i):r==="simple"?(this.simpleSexpr(s),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("blockValue",s.id.original)):(this.ambiguousSexpr(s,n,i),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var e=t.pairs,n,i;for(this.opcode("pushHash"),n=0,i=e.length;n<i;n++)this.pushParam(e[n][1]);for(;n--;)this.opcode("assignToHash",e[n][0]);this.opcode("popHash")},partial:function(t){var e=t.partialName;this.usePartial=!0,t.hash?this.accept(t.hash):this.opcode("push","undefined"),t.context?this.accept(t.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",e.name,t.indent||""),this.opcode("append")},content:function(t){t.string&&this.opcode("appendContent",t.string)},mustache:function(t){this.sexpr(t.sexpr),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(t,e,n){var i=t.id,s=i.parts[0],r=e!=null||n!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.ID(i),this.opcode("invokeAmbiguous",s,r)},simpleSexpr:function(t){var e=t.id;e.type==="DATA"?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,n){var i=this.setupFullMustacheParams(t,e,n),s=t.id,r=s.parts[0];if(this.options.knownHelpers[r])this.opcode("invokeKnownHelper",i.length,r);else{if(this.options.knownHelpersOnly)throw new Ot("You specified knownHelpersOnly, but used the unknown helper "+r,t);s.falsy=!0,this.ID(s),this.opcode("invokeHelper",i.length,s.original,s.isSimple)}},sexpr:function(t){var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0];e?this.opcode("lookupOnContext",t.parts,t.falsy,t.isScoped):this.opcode("pushContext")},DATA:function(t){this.options.data=!0,this.opcode("lookupData",t.id.depth,t.id.parts)},STRING:function(t){this.opcode("pushString",t.string)},NUMBER:function(t){this.opcode("pushLiteral",t.number)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:Nn.call(arguments,1)})},addDepth:function(t){t!==0&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifySexpr:function(t){var e=t.isHelper,n=t.eligibleHelper,i=this.options;if(n&&!e){var s=t.id.parts[0];i.knownHelpers[s]?e=!0:i.knownHelpersOnly&&(n=!1)}return e?"helper":n?"ambiguous":"simple"},pushParams:function(t){for(var e=0,n=t.length;e<n;e++)this.pushParam(t[e])},pushParam:function(t){this.stringParams?(t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",t.stringModeValue,t.type),t.type==="sexpr"&&this.sexpr(t)):(this.trackIds&&this.opcode("pushId",t.type,t.idName||t.stringModeValue),this.accept(t))},setupFullMustacheParams:function(t,e,n){var i=t.params;return this.pushParams(i),this.opcode("pushProgram",e),this.opcode("pushProgram",n),t.hash?this.hash(t.hash):this.opcode("emptyHash"),i}};function Pn(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new Ot("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i=n.parse(t),s=new n.Compiler().compile(i,e);return new n.JavaScriptCompiler().compile(s,e)}nt.precompile=Pn;function _n(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new Ot("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i;function s(){var a=n.parse(t),o=new n.Compiler().compile(a,e),c=new n.JavaScriptCompiler().compile(o,e,void 0,!0);return n.template(c)}var r=function(a,o){return i||(i=s()),i.call(this,a,o)};return r._setup=function(a){return i||(i=s()),i._setup(a)},r._child=function(a,o,c){return i||(i=s()),i._child(a,o,c)},r}nt.compile=_n;function Se(t,e){if(t===e)return!0;if(ye(t)&&ye(e)&&t.length===e.length){for(var n=0;n<t.length;n++)if(!Se(t[n],e[n]))return!1;return!0}}});var Ne=m(Ee=>{"use strict";p();var Cn=A().COMPILER_REVISION,On=A().REVISION_CHANGES,It=P().default;function z(t){this.value=t}function L(){}L.prototype={nameLookup:function(t,e){return L.isValidJavaScriptVariableName(e)?t+"."+e:t+"['"+e+"']"},depthedLookup:function(t){return this.aliases.lookup="this.lookup",'lookup(depths, "'+t+'")'},compilerInfo:function(){var t=Cn,e=On[t];return[t,e]},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,e,n,i){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!n,this.context=n||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.depths.list.length||this.options.compat;var s=t.opcodes,r,a,o;for(a=0,o=s.length;a<o;a++)r=s[a],this[r.opcode].apply(this,r.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new It("Compile completed with content left on stack");var c=this.createFunctionContext(i);if(this.isChild)return c;var h={compiler:this.compilerInfo(),main:c},u=this.context.programs;for(a=0,o=u.length;a<o;a++)u[a]&&(h[a]=u[a]);return this.environment.usePartial&&(h.usePartial=!0),this.options.data&&(h.useData=!0),this.useDepths&&(h.useDepths=!0),this.options.compat&&(h.compat=!0),i||(h.compiler=JSON.stringify(h.compiler),h=this.objectLiteral(h)),h},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(t){var e="",n=this.stackVars.concat(this.registers.list);n.length>0&&(e+=", "+n.join(", "));for(var i in this.aliases)this.aliases.hasOwnProperty(i)&&(e+=", "+i+"="+this.aliases[i]);var s=["depth0","helpers","partials","data"];this.useDepths&&s.push("depths");var r=this.mergeSource(e);return t?(s.push(r),Function.apply(this,s)):"function("+s.join(",")+`) {
  `+r+"}"},mergeSource:function(t){for(var e="",n,i=!this.forceBuffer,s,r=0,a=this.source.length;r<a;r++){var o=this.source[r];o.appendToBuffer?n?n=n+`
    + `+o.content:n=o.content:(n&&(e?e+="buffer += "+n+`;
  `:(s=!0,e=n+`;
  `),n=void 0),e+=o+`
  `,this.environment.isSimple||(i=!1))}return i?(n||!e)&&(e+="return "+(n||'""')+`;
`):(t+=", buffer = "+(s?"":this.initializeBuffer()),n?e+="return buffer + "+n+`;
`:e+=`return buffer;
`),t&&(e="var "+t.substring(2)+(s?"":`;
  `)+e),e},blockValue:function(t){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams(t,0,e);var n=this.popStack();e.splice(1,0,n),this.push("blockHelperMissing.call("+e.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams("",0,t,!0),this.flushInline();var e=this.topStack();t.splice(1,0,e),this.pushSource("if (!"+this.lastHelper+") { "+e+" = blockHelperMissing.call("+t.join(", ")+"); }")},appendContent:function(t){this.pendingContent&&(t=this.pendingContent+t),this.pendingContent=t},append:function(){this.flushInline();var t=this.popStack();this.pushSource("if ("+t+" != null) { "+this.appendToBuffer(t)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,n){var i=0,s=t.length;for(!n&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[i++])):this.pushContext();i<s;i++)this.replaceStack(function(r){var a=this.nameLookup(r,t[i],"context");return e?" && "+a:" != null ? "+a+" : "+r})},lookupData:function(t,e){t?this.pushStackLiteral("this.data(data, "+t+")"):this.pushStackLiteral("data");for(var n=e.length,i=0;i<n;i++)this.replaceStack(function(s){return" && "+this.nameLookup(s,e[i],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),e!=="sexpr"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+t.ids.join(",")+"}"),this.stringParams&&(this.push("{"+t.contexts.join(",")+"}"),this.push("{"+t.types.join(",")+"}")),this.push(`{
    `+t.values.join(`,
    `)+`
  }`)},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},invokeHelper:function(t,e,n){this.aliases.helperMissing="helpers.helperMissing";var i=this.popStack(),s=this.setupHelper(t,e),r=(n?s.name+" || ":"")+i+" || helperMissing";this.push("(("+r+").call("+s.callParams+"))")},invokeKnownHelper:function(t,e){var n=this.setupHelper(t,e);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(t,e){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var n=this.popStack();this.emptyHash();var i=this.setupHelper(0,t,e),s=this.lastHelper=this.nameLookup("helpers",t,"helper");this.push("((helper = (helper = "+s+" || "+n+") != null ? helper : helperMissing"+(i.paramsInit?"),("+i.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+i.callParams+") : helper))")},invokePartial:function(t,e){var n=[this.nameLookup("partials",t,"partial"),"'"+e+"'","'"+t+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?n.push("data"):this.options.compat&&n.push("undefined"),this.options.compat&&n.push("depths"),this.push("this.invokePartial("+n.join(", ")+")")},assignToHash:function(t){var e=this.popStack(),n,i,s;this.trackIds&&(s=this.popStack()),this.stringParams&&(i=this.popStack(),n=this.popStack());var r=this.hash;n&&r.contexts.push("'"+t+"': "+n),i&&r.types.push("'"+t+"': "+i),s&&r.ids.push("'"+t+"': "+s),r.values.push("'"+t+"': ("+e+")")},pushId:function(t,e){t==="ID"||t==="DATA"?this.pushString(e):t==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:L,compileChildren:function(t,e){for(var n=t.children,i,s,r=0,a=n.length;r<a;r++){i=n[r],s=new this.compiler;var o=this.matchExistingProgram(i);o==null?(this.context.programs.push(""),o=this.context.programs.length,i.index=o,i.name="program"+o,this.context.programs[o]=s.compile(i,e,this.context,!this.precompile),this.context.environments[o]=i,this.useDepths=this.useDepths||s.useDepths):(i.index=o,i.name="program"+o)}},matchExistingProgram:function(t){for(var e=0,n=this.context.environments.length;e<n;e++){var i=this.context.environments[e];if(i&&i.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],n=e.depths.list,i=this.useDepths,s,r=[e.index,"data"];return i&&r.push("depths"),"this.program("+r.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new z(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var e=this.incrStack();return this.pushSource(e+" = "+t+";"),this.compileStack.push(e),e},replaceStack:function(t){var e="",n=this.isInline(),i,s,r;if(!this.isInline())throw new It("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof z)e=i=a.value,r=!0;else{s=!this.stackSlot;var o=s?this.incrStack():this.topStackName();e="("+this.push(o)+" = "+a+")",i=this.topStack()}var c=t.call(this,i);r||this.popStack(),s&&this.stackSlot--,this.push("("+e+c+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var e=0,n=t.length;e<n;e++){var i=t[e];i instanceof z?this.compileStack.push(i):this.pushStack(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),n=(e?this.inlineStack:this.compileStack).pop();if(!t&&n instanceof z)return n.value;if(!e){if(!this.stackSlot)throw new It("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof z?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(this.quotedString(n)+":"+t[n]);return"{"+e.join(",")+"}"},setupHelper:function(t,e,n){var i=[],s=this.setupParams(e,t,i,n),r=this.nameLookup("helpers",e,"helper");return{params:i,paramsInit:s,name:r,callParams:[this.contextName(0)].concat(i).join(", ")}},setupOptions:function(t,e,n){var i={},s=[],r=[],a=[],o,c,h;i.name=this.quotedString(t),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack()),c=this.popStack(),h=this.popStack(),(h||c)&&(h||(h="this.noop"),c||(c="this.noop"),i.fn=h,i.inverse=c);for(var u=e;u--;)o=this.popStack(),n[u]=o,this.trackIds&&(a[u]=this.popStack()),this.stringParams&&(r[u]=this.popStack(),s[u]=this.popStack());return this.trackIds&&(i.ids="["+a.join(",")+"]"),this.stringParams&&(i.types="["+r.join(",")+"]",i.contexts="["+s.join(",")+"]"),this.options.data&&(i.data="data"),i},setupParams:function(t,e,n,i){var s=this.objectLiteral(this.setupOptions(t,e,n));return i?(this.useRegister("options"),n.push("options"),"options="+s):(n.push(s),"")}};var xe="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),In=L.RESERVED_WORDS={};for(st=0,we=xe.length;st<we;st++)In[xe[st]]=!0;var st,we;L.isValidJavaScriptVariableName=function(t){return!L.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};Ee.default=L});var Ce=m(_e=>{"use strict";p();var F=ue().default,An=xt().default,Hn=_t().parser,Rn=_t().parse,Ln=it().Compiler,Dn=it().compile,Mn=it().precompile,Tn=Ne().default,qn=F.create,Pe=function(){var t=qn();return t.compile=function(e,n){return Dn(e,n,t)},t.precompile=function(e,n){return Mn(e,n,t)},t.AST=An,t.Compiler=Ln,t.JavaScriptCompiler=Tn,t.Parser=Hn,t.parse=Rn,t};F=Pe();F.create=Pe;F.default=F;_e.default=F});var Ht=m(Oe=>{"use strict";p();function At(){}At.prototype={constructor:At,accept:function(t){return this[t.type](t)}};Oe.default=At});var Ie=m(Rt=>{"use strict";p();var Vn=Ht().default;function Bn(t){return new d().accept(t)}Rt.print=Bn;function d(){this.padding=0}Rt.PrintVisitor=d;d.prototype=new Vn;d.prototype.pad=function(t){for(var e="",n=0,i=this.padding;n<i;n++)e=e+"  ";return e=e+t+`
`,e};d.prototype.program=function(t){var e="",n=t.statements,i,s;for(i=0,s=n.length;i<s;i++)e=e+this.accept(n[i]);return this.padding--,e};d.prototype.block=function(t){var e="";return e=e+this.pad("BLOCK:"),this.padding++,e=e+this.accept(t.mustache),t.program&&(e=e+this.pad("PROGRAM:"),this.padding++,e=e+this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e=e+this.pad("{{^}}"),this.padding++,e=e+this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e};d.prototype.sexpr=function(t){for(var e=t.params,n=[],i,s=0,r=e.length;s<r;s++)n.push(this.accept(e[s]));return e="["+n.join(", ")+"]",i=t.hash?" "+this.accept(t.hash):"",this.accept(t.id)+" "+e+i};d.prototype.mustache=function(t){return this.pad("{{ "+this.accept(t.sexpr)+" }}")};d.prototype.partial=function(t){var e=this.accept(t.partialName);return t.context&&(e+=" "+this.accept(t.context)),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")};d.prototype.hash=function(t){for(var e=t.pairs,n=[],i,s,r=0,a=e.length;r<a;r++)i=e[r][0],s=this.accept(e[r][1]),n.push(i+"="+s);return"HASH{"+n.join(", ")+"}"};d.prototype.STRING=function(t){return'"'+t.string+'"'};d.prototype.NUMBER=function(t){return"NUMBER{"+t.number+"}"};d.prototype.BOOLEAN=function(t){return"BOOLEAN{"+t.bool+"}"};d.prototype.ID=function(t){var e=t.parts.join("/");return t.parts.length>1?"PATH:"+e:"ID:"+e};d.prototype.PARTIAL_NAME=function(t){return"PARTIAL:"+t.name};d.prototype.DATA=function(t){return"@"+this.accept(t.id)};d.prototype.content=function(t){return this.pad("CONTENT[ '"+t.string+"' ]")};d.prototype.comment=function(t){return this.pad("{{! '"+t.comment+"' }}")}});var Re=m((wi,He)=>{p();var G=Ce().default;G.Visitor=Ht().default;var Ae=Ie();G.PrintVisitor=Ae.PrintVisitor;G.print=Ae.print;He.exports=G;typeof j<"u"&&j.extensions&&(Lt=function(t,e){var n=(ft(),Vt(ut)),i=n.readFileSync(e,"utf8");t.exports=G.compile(i)},j.extensions[".handlebars"]=Lt,j.extensions[".hbs"]=Lt);var Lt});var Te=m((Pi,Me)=>{p();var Le=(ft(),Vt(ut)),De=Re();Me.exports={render:Fn};function Fn(t){var e=Le.readFileSync("//style.css","utf-8"),n=Le.readFileSync("//resume.template","utf-8");return De.compile(n)({css:e,resume:t})}De.registerHelper("nl2br",function(t){return(t||"").replace(/\n/g,"</p><p>")})});p();var D=Ge(Te(),1),qe=D.default??D,Ci=qe.render??D.render,Oi=qe.pdfRenderOptions??D.pdfRenderOptions;export{Oi as pdfRenderOptions,Ci as render};
