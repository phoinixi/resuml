var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Ve=Object.create;var Y=Object.defineProperty;var Be=Object.getOwnPropertyDescriptor;var Fe=Object.getOwnPropertyNames;var je=Object.getPrototypeOf,Ue=Object.prototype.hasOwnProperty;var j=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,i)=>(typeof require<"u"?require:e)[i]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var Tt=(t,e)=>()=>(t&&(e=t(t=0)),e);var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),We=(t,e)=>{for(var i in e)Y(t,i,{get:e[i],enumerable:!0})},qt=(t,e,i,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Fe(e))!Ue.call(t,s)&&s!==i&&Y(t,s,{get:()=>e[s],enumerable:!(n=Be(e,s))||n.enumerable});return t};var Ge=(t,e,i)=>(i=t!=null?Ve(je(t)):{},qt(e||!t||!t.__esModule?Y(i,"default",{value:t,enumerable:!0}):i,t)),Vt=t=>qt(Y({},"__esModule",{value:!0}),t);var c=Tt(()=>{});var pt={};We(pt,{createReadStream:()=>Yt,createWriteStream:()=>Xt,default:()=>Ke,existsSync:()=>Ut,lstatSync:()=>Kt,mkdirSync:()=>Gt,readFileSync:()=>Ft,readdirSync:()=>jt,rmdirSync:()=>Jt,statSync:()=>ct,unlinkSync:()=>zt,writeFileSync:()=>Wt});function ut(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Bt(t){var e=ut(t);if(X[e]!==void 0)return X[e];for(var i=Object.keys(X),n=0;n<i.length;n++)if(e.endsWith("/"+i[n])||e===i[n])return X[i[n]]}function lt(t){var e=ut(t);if((e===""||e===".")&&q["."]!==void 0)return q["."];if(q[e]!==void 0)return q[e];for(var i=Object.keys(q),n=0;n<i.length;n++)if(e.endsWith("/"+i[n])||e===i[n])return q[i[n]]}var X,q,Ft,jt,Ut,Wt,Gt,ct,Kt,zt,Jt,Yt,Xt,Ke,ft=Tt(()=>{"use strict";c();X={"package.json":`{
  "name": "jsonresume-theme-boilerplate",
  "version": "0.1.2",
  "description": "Boilerplate theme for JSON Resume",
  "author": "Mattias Erming",
  "repository": {
    "type": "git",
    "url": "https://github.com/erming/jsonresume-theme-boilerplate"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  }
}
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

	{{#resume.basics}}
	<h1>{{name}}</h1>
	<h2>{{label}}</h2>
	<section id="basics">
		<div class="contact">
		{{#if website}}
		<div class="website">
			<strong>Website</strong>
			{{website}}
		</div>
		{{/if}}
		{{#if email}}
		<div class="email">
			<strong>Email</strong>
			{{email}}
		</div>
		{{/if}}
		{{#if phone}}
		<div class="phone">
			<strong>Phone</strong>
			{{phone}}
		</div>
		{{/if}}
		</div>
		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
		{{#location}}
		<h3>Location</h3>
		<section id="location">
			{{#if address}}
			<div class="address">
				<strong>Address</strong>
				{{address}}
			</div>
			{{/if}}
			{{#if postalCode}}
			<div class="postalCode">
				<strong>Postal code</strong>
				{{postalCode}}
			</div>
			{{/if}}
			{{#if city}}
			<div class="city">
				<strong>City</strong>
				{{city}}
			</div>
			{{/if}}
			{{#if countryCode}}
			<div class="countryCode">
				<strong>Country code</strong>
				{{countryCode}}
			</div>
			{{/if}}
			{{#if region}}
			<div class="region">
				<strong>Region</strong>
				{{region}}
			</div>
			{{/if}}
		</section>
		{{/location}}
		{{#if profiles.length}}
		<h3>Profiles</h3>
		<section id="profiles">
			{{#each profiles}}
			<div class="item">
				{{#if network}}
				<strong class="network">
					{{network}}
				</strong>
				{{/if}}
				{{#if username}}
				<div class="username">
					{{username}}
				</div>
				{{/if}}
				{{#if url}}
				<div class="url">
					<a href="{{url}}">Link</a>
				</div>
				{{/if}}
			</div>
			{{/each}}
		</section>
		{{/if}}
	</section>
	{{/resume.basics}}

	{{#if resume.work.length}}
	<section id="work">
		<h2>Work</h2>
		{{#each resume.work}}
		<div class="item">
			{{#if company}}
			<h3 class="name">
				{{company}}
			</h3>
			{{/if}}
			<div class="date">
				{{#if startDate}}
				<span class="startDate">
					{{startDate}}
				</span>
				{{/if}}
				{{#if endDate}}
				<span class="endDate">
					- {{endDate}}
				</span>
				{{else}}
				<span class="endDate">
					- Present
				</span>
				{{/if}}
			</div>
			{{#if position}}
			<div class="position">
				{{position}}
			</div>
			{{/if}}
			{{#if website}}
			<div class="website">
				<a href="{{website}}">{{website}}</a>
			</div>
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
			<div class="date">
				{{#if startDate}}
				<span class="startDate">
					{{startDate}}
				</span>
				{{/if}}
				{{#if endDate}}
				<span class="endDate">
					- {{endDate}}
				</span>
				{{else}}
				<span class="endDate">
					- Present
				</span>
				{{/if}}
			</div>
			{{#if position}}
			<div class="position">
				{{position}}
			</div>
			{{/if}}
			{{#if website}}
			<div class="website">
				<a href="{{website}}">{{website}}</a>
			</div>
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
			<div class="date">
				{{#if startDate}}
				<span class="startDate">
					{{startDate}}
				</span>
				{{/if}}
				{{#if endDate}}
				<span class="endDate">
					- {{endDate}}
				</span>
				{{else}}
				<span class="endDate">
					- Present
				</span>
				{{/if}}
			</div>
			{{#if institution}}
			<div class="institution">
				{{institution}}
			</div>
			{{/if}}
			{{#if area}}
			<div class="area">
				{{area}}
			</div>
			{{/if}}
			{{#if studyType}}
			<div class="studyType">
				{{studyType}}
			</div>
			{{/if}}
			{{#if gpa}}
			<div class="gpa">
				GPA: {{gpa}}
			</div>
			{{/if}}
			{{#if courses.length}}
			<ul class="courses">
				{{#each courses}}
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
		<h2>Awards</h2>
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

`},q={".":["README.md","index.js","package.json","resume.hbs","style.css"]};Ft=function(t,e){var i=Bt(t);return i!==void 0?i:""},jt=function(t,e){var i=lt(t);return i===void 0&&(i=[]),e&&e.withFileTypes?i.map(function(n){var s=ut(t)+"/"+n,r=lt(s)!==void 0;return{name:n,isFile:function(){return!r},isDirectory:function(){return r}}}):i},Ut=function(t){return Bt(t)!==void 0||lt(t)!==void 0},Wt=function(){},Gt=function(){},ct=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Kt=ct,zt=function(){},Jt=function(){},Yt=function(){return{pipe:function(t){return t},on:function(){return this}}},Xt=function(){return{write:function(){},end:function(){},on:function(){return this}}},Ke={readFileSync:Ft,readdirSync:jt,existsSync:Ut,writeFileSync:Wt,mkdirSync:Gt,statSync:ct,lstatSync:Kt,unlinkSync:zt,rmdirSync:Jt,createReadStream:Yt,createWriteStream:Xt}});var dt=m(Qt=>{"use strict";c();function Zt(t){this.string=t}Zt.prototype.toString=function(){return""+this.string};Qt.default=Zt});var V=m(N=>{"use strict";c();var ze=dt().default,Je={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Ye=/[&<>"'`]/g,Xe=/[&<>"'`]/;function Ze(t){return Je[t]}function Qe(t){for(var e=1;e<arguments.length;e++)for(var i in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],i)&&(t[i]=arguments[e][i]);return t}N.extend=Qe;var mt=Object.prototype.toString;N.toString=mt;var Z=function(t){return typeof t=="function"};Z(/x/)&&(Z=function(t){return typeof t=="function"&&mt.call(t)==="[object Function]"});var Z;N.isFunction=Z;var $t=Array.isArray||function(t){return t&&typeof t=="object"?mt.call(t)==="[object Array]":!1};N.isArray=$t;function $e(t){return t instanceof ze?t.toString():t==null?"":t?(t=""+t,Xe.test(t)?t.replace(Ye,Ze):t):t+""}N.escapeExpression=$e;function ti(t){return!t&&t!==0?!0:!!($t(t)&&t.length===0)}N.isEmpty=ti;function ei(t,e){return(t?t+".":"")+e}N.appendContextPath=ei});var P=m(ee=>{"use strict";c();var gt=["description","fileName","lineNumber","message","name","number","stack"];function te(t,e){var i;e&&e.firstLine&&(i=e.firstLine,t+=" - "+i+":"+e.firstColumn);for(var n=Error.prototype.constructor.call(this,t),s=0;s<gt.length;s++)this[gt[s]]=n[gt[s]];i&&(this.lineNumber=i,this.column=e.firstColumn)}te.prototype=new Error;ee.default=te});var A=m(_=>{"use strict";c();var y=V(),kt=P().default,ii="2.0.0";_.VERSION=ii;var ni=6;_.COMPILER_REVISION=ni;var si={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};_.REVISION_CHANGES=si;var ie=y.isArray,vt=y.isFunction,ne=y.toString,se="[object Object]";function yt(t,e){this.helpers=t||{},this.partials=e||{},ri(this)}_.HandlebarsEnvironment=yt;yt.prototype={constructor:yt,logger:U,log:re,registerHelper:function(t,e){if(ne.call(t)===se){if(e)throw new kt("Arg not supported with multiple helpers");y.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){ne.call(t)===se?y.extend(this.partials,t):this.partials[t]=e},unregisterPartial:function(t){delete this.partials[t]}};function ri(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new kt("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(e,i){var n=i.inverse,s=i.fn;if(e===!0)return s(this);if(e===!1||e==null)return n(this);if(ie(e))return e.length>0?(i.ids&&(i.ids=[i.name]),t.helpers.each(e,i)):n(this);if(i.data&&i.ids){var r=Q(i.data);r.contextPath=y.appendContextPath(i.data.contextPath,i.name),i={data:r}}return s(e,i)}),t.registerHelper("each",function(e,i){if(!i)throw new kt("Must pass iterator to #each");var n=i.fn,s=i.inverse,r=0,a="",o,u;if(i.data&&i.ids&&(u=y.appendContextPath(i.data.contextPath,i.ids[0])+"."),vt(e)&&(e=e.call(this)),i.data&&(o=Q(i.data)),e&&typeof e=="object")if(ie(e))for(var h=e.length;r<h;r++)o&&(o.index=r,o.first=r===0,o.last=r===e.length-1,u&&(o.contextPath=u+r)),a=a+n(e[r],{data:o});else for(var p in e)e.hasOwnProperty(p)&&(o&&(o.key=p,o.index=r,o.first=r===0,u&&(o.contextPath=u+p)),a=a+n(e[p],{data:o}),r++);return r===0&&(a=s(this)),a}),t.registerHelper("if",function(e,i){return vt(e)&&(e=e.call(this)),!i.hash.includeZero&&!e||y.isEmpty(e)?i.inverse(this):i.fn(this)}),t.registerHelper("unless",function(e,i){return t.helpers.if.call(this,e,{fn:i.inverse,inverse:i.fn,hash:i.hash})}),t.registerHelper("with",function(e,i){vt(e)&&(e=e.call(this));var n=i.fn;if(y.isEmpty(e))return i.inverse(this);if(i.data&&i.ids){var s=Q(i.data);s.contextPath=y.appendContextPath(i.data.contextPath,i.ids[0]),i={data:s}}return n(e,i)}),t.registerHelper("log",function(e,i){var n=i.data&&i.data.level!=null?parseInt(i.data.level,10):1;t.log(n,e)}),t.registerHelper("lookup",function(e,i){return e&&e[i]})}var U={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(U.level<=t){var i=U.methodMap[t];typeof console<"u"&&console[i]&&console[i].call(console,e)}}};_.logger=U;var re=U.log;_.log=re;var Q=function(t){var e=y.extend({},t);return e._parent=t,e};_.createFrame=Q});var oe=m(B=>{"use strict";c();var St=V(),D=P().default,ai=A().COMPILER_REVISION,ae=A().REVISION_CHANGES,oi=A().createFrame;function hi(t){var e=t&&t[0]||1,i=ai;if(e!==i)if(e<i){var n=ae[i],s=ae[e];throw new D("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+s+").")}else throw new D("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}B.checkRevision=hi;function li(t,e){if(!e)throw new D("No environment passed to template");if(!t||!t.main)throw new D("Unknown template object: "+typeof t);e.VM.checkRevision(t.compiler);var i=function(r,a,o,u,h,p,l,w,M){h&&(u=St.extend({},u,h));var O=e.VM.invokePartial.call(this,r,o,u,p,l,w,M);if(O==null&&e.compile){var Lt={helpers:p,partials:l,data:w,depths:M};l[o]=e.compile(r,{data:w!==void 0,compat:t.compat},e),O=l[o](u,Lt)}if(O!=null){if(a){for(var b=O.split(`
`),E=0,rt=b.length;E<rt&&!(!b[E]&&E+1===rt);E++)b[E]=a+b[E];O=b.join(`
`)}return O}else throw new D("The partial "+o+" could not be compiled when running in runtime-only mode")},n={lookup:function(r,a){for(var o=r.length,u=0;u<o;u++)if(r[u]&&r[u][a]!=null)return r[u][a]},lambda:function(r,a){return typeof r=="function"?r.call(a):r},escapeExpression:St.escapeExpression,invokePartial:i,fn:function(r){return t[r]},programs:[],program:function(r,a,o){var u=this.programs[r],h=this.fn(r);return a||o?u=$(this,r,h,a,o):u||(u=this.programs[r]=$(this,r,h)),u},data:function(r,a){for(;r&&a--;)r=r._parent;return r},merge:function(r,a){var o=r||a;return r&&a&&r!==a&&(o=St.extend({},a,r)),o},noop:e.VM.noop,compilerInfo:t.compiler},s=function(r,a){a=a||{};var o=a.data;s._setup(a),!a.partial&&t.useData&&(o=pi(r,o));var u;return t.useDepths&&(u=a.depths?[r].concat(a.depths):[r]),t.main.call(n,r,n.helpers,n.partials,o,u)};return s.isTop=!0,s._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials):(n.helpers=n.merge(r.helpers,e.helpers),t.usePartial&&(n.partials=n.merge(r.partials,e.partials)))},s._child=function(r,a,o){if(t.useDepths&&!o)throw new D("must pass parent depths");return $(n,r,t[r],a,o)},s}B.template=li;function $(t,e,i,n,s){var r=function(a,o){return o=o||{},i.call(t,a,t.helpers,t.partials,o.data||n,s&&[a].concat(s))};return r.program=e,r.depth=s?s.length:0,r}B.program=$;function ui(t,e,i,n,s,r,a){var o={partial:!0,helpers:n,partials:s,data:r,depths:a};if(t===void 0)throw new D("The partial "+e+" could not be found");if(t instanceof Function)return t(i,o)}B.invokePartial=ui;function ci(){return""}B.noop=ci;function pi(t,e){return(!e||!("root"in e))&&(e=e?oi(e):{},e.root=t),e}});var pe=m(ce=>{"use strict";c();var he=A(),fi=dt().default,di=P().default,bt=V(),le=oe(),ue=function(){var t=new he.HandlebarsEnvironment;return bt.extend(t,he),t.SafeString=fi,t.Exception=di,t.Utils=bt,t.escapeExpression=bt.escapeExpression,t.VM=le,t.template=function(e){return le.template(e,t)},t},tt=ue();tt.create=ue;tt.default=tt;ce.default=tt});var xt=m(de=>{"use strict";c();var fe=P().default;function v(t){t=t||{},this.firstLine=t.first_line,this.firstColumn=t.first_column,this.lastColumn=t.last_column,this.lastLine=t.last_line}var W={ProgramNode:function(t,e,i){v.call(this,i),this.type="program",this.statements=t,this.strip=e},MustacheNode:function(t,e,i,n,s){if(v.call(this,s),this.type="mustache",this.strip=n,i!=null&&i.charAt){var r=i.charAt(3)||i.charAt(2);this.escaped=r!=="{"&&r!=="&"}else this.escaped=!!i;t instanceof W.SexprNode?this.sexpr=t:this.sexpr=new W.SexprNode(t,e),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(t,e,i){v.call(this,i),this.type="sexpr",this.hash=e;var n=this.id=t[0],s=this.params=t.slice(1);this.isHelper=!!(s.length||e),this.eligibleHelper=this.isHelper||n.isSimple},PartialNode:function(t,e,i,n,s){v.call(this,s),this.type="partial",this.partialName=t,this.context=e,this.hash=i,this.strip=n,this.strip.inlineStandalone=!0},BlockNode:function(t,e,i,n,s){v.call(this,s),this.type="block",this.mustache=t,this.program=e,this.inverse=i,this.strip=n,i&&!e&&(this.isInverse=!0)},RawBlockNode:function(t,e,i,n){if(v.call(this,n),t.sexpr.id.original!==i)throw new fe(t.sexpr.id.original+" doesn't match "+i,this);e=new W.ContentNode(e,n),this.type="block",this.mustache=t,this.program=new W.ProgramNode([e],{},n)},ContentNode:function(t,e){v.call(this,e),this.type="content",this.original=this.string=t},HashNode:function(t,e){v.call(this,e),this.type="hash",this.pairs=t},IdNode:function(t,e){v.call(this,e),this.type="ID";for(var i="",n=[],s=0,r="",a=0,o=t.length;a<o;a++){var u=t[a].part;if(i+=(t[a].separator||"")+u,u===".."||u==="."||u==="this"){if(n.length>0)throw new fe("Invalid path: "+i,this);u===".."?(s++,r+="../"):this.isScoped=!0}else n.push(u)}this.original=i,this.parts=n,this.string=n.join("."),this.depth=s,this.idName=r+this.string,this.isSimple=t.length===1&&!this.isScoped&&s===0,this.stringModeValue=this.string},PartialNameNode:function(t,e){v.call(this,e),this.type="PARTIAL_NAME",this.name=t.original},DataNode:function(t,e){v.call(this,e),this.type="DATA",this.id=t,this.stringModeValue=t.stringModeValue,this.idName="@"+t.stringModeValue},StringNode:function(t,e){v.call(this,e),this.type="STRING",this.original=this.string=this.stringModeValue=t},NumberNode:function(t,e){v.call(this,e),this.type="NUMBER",this.original=this.number=t,this.stringModeValue=Number(t)},BooleanNode:function(t,e){v.call(this,e),this.type="BOOLEAN",this.bool=t,this.stringModeValue=t==="true"},CommentNode:function(t,e){v.call(this,e),this.type="comment",this.comment=t,this.strip={inlineStandalone:!0}}};de.default=W});var ge=m(me=>{"use strict";c();var mi=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(s,r,a,o,u,h,p){var l=h.length-1;switch(u){case 1:return o.prepareProgram(h[l-1].statements,!0),h[l-1];break;case 2:this.$=new o.ProgramNode(o.prepareProgram(h[l]),{},this._$);break;case 3:this.$=h[l];break;case 4:this.$=h[l];break;case 5:this.$=h[l];break;case 6:this.$=h[l];break;case 7:this.$=new o.ContentNode(h[l],this._$);break;case 8:this.$=new o.CommentNode(h[l],this._$);break;case 9:this.$=new o.RawBlockNode(h[l-2],h[l-1],h[l],this._$);break;case 10:this.$=new o.MustacheNode(h[l-1],null,"","",this._$);break;case 11:this.$=o.prepareBlock(h[l-3],h[l-2],h[l-1],h[l],!1,this._$);break;case 12:this.$=o.prepareBlock(h[l-3],h[l-2],h[l-1],h[l],!0,this._$);break;case 13:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 14:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 15:this.$={strip:o.stripFlags(h[l-1],h[l-1]),program:h[l]};break;case 16:this.$={path:h[l-1],strip:o.stripFlags(h[l-2],h[l])};break;case 17:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 18:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 19:this.$=new o.PartialNode(h[l-3],h[l-2],h[l-1],o.stripFlags(h[l-4],h[l]),this._$);break;case 20:this.$=new o.PartialNode(h[l-2],void 0,h[l-1],o.stripFlags(h[l-3],h[l]),this._$);break;case 21:this.$=new o.SexprNode([h[l-2]].concat(h[l-1]),h[l],this._$);break;case 22:this.$=new o.SexprNode([h[l]],null,this._$);break;case 23:this.$=h[l];break;case 24:this.$=new o.StringNode(h[l],this._$);break;case 25:this.$=new o.NumberNode(h[l],this._$);break;case 26:this.$=new o.BooleanNode(h[l],this._$);break;case 27:this.$=h[l];break;case 28:h[l-1].isHelper=!0,this.$=h[l-1];break;case 29:this.$=new o.HashNode(h[l],this._$);break;case 30:this.$=[h[l-2],h[l]];break;case 31:this.$=new o.PartialNameNode(h[l],this._$);break;case 32:this.$=new o.PartialNameNode(new o.StringNode(h[l],this._$),this._$);break;case 33:this.$=new o.PartialNameNode(new o.NumberNode(h[l],this._$));break;case 34:this.$=new o.DataNode(h[l],this._$);break;case 35:this.$=new o.IdNode(h[l],this._$);break;case 36:h[l-2].push({part:h[l],separator:h[l-1]}),this.$=h[l-2];break;case 37:this.$=[{part:h[l]}];break;case 38:this.$=[];break;case 39:h[l-1].push(h[l]);break;case 48:this.$=[];break;case 49:h[l-1].push(h[l]);break;case 52:this.$=[h[l]];break;case 53:h[l-1].push(h[l]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(s,r){throw new Error(s)},parse:function(s){var r=this,a=[0],o=[null],u=[],h=this.table,p="",l=0,w=0,M=0,O=2,Lt=1;this.lexer.setInput(s),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var b=this.lexer.yylloc;u.push(b);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function rt(S){a.length=a.length-2*S,o.length=o.length-S,u.length=u.length-S}function qe(){var S;return S=r.lexer.lex()||1,typeof S!="number"&&(S=r.symbols_[S]||S),S}for(var g,at,I,k,Fi,ot,T={},z,x,Mt,J;;){if(I=a[a.length-1],this.defaultActions[I]?k=this.defaultActions[I]:((g===null||typeof g>"u")&&(g=qe()),k=h[I]&&h[I][g]),typeof k>"u"||!k.length||!k[0]){var ht="";if(!M){J=[];for(z in h[I])this.terminals_[z]&&z>2&&J.push("'"+this.terminals_[z]+"'");this.lexer.showPosition?ht="Parse error on line "+(l+1)+`:
`+this.lexer.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[g]||g)+"'":ht="Parse error on line "+(l+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(ht,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:b,expected:J})}}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+g);switch(k[0]){case 1:a.push(g),o.push(this.lexer.yytext),u.push(this.lexer.yylloc),a.push(k[1]),g=null,at?(g=at,at=null):(w=this.lexer.yyleng,p=this.lexer.yytext,l=this.lexer.yylineno,b=this.lexer.yylloc,M>0&&M--);break;case 2:if(x=this.productions_[k[1]][1],T.$=o[o.length-x],T._$={first_line:u[u.length-(x||1)].first_line,last_line:u[u.length-1].last_line,first_column:u[u.length-(x||1)].first_column,last_column:u[u.length-1].last_column},E&&(T._$.range=[u[u.length-(x||1)].range[0],u[u.length-1].range[1]]),ot=this.performAction.call(T,p,w,l,this.yy,k[1],o,u),typeof ot<"u")return ot;x&&(a=a.slice(0,-1*x*2),o=o.slice(0,-1*x),u=u.slice(0,-1*x)),a.push(this.productions_[k[1]][0]),o.push(T.$),u.push(T._$),Mt=h[a[a.length-2]][a[a.length-1]],a.push(Mt);break;case 3:return!0}}return!0}},e=(function(){var n={EOF:1,parseError:function(r,a){if(this.yy.parser)this.yy.parser.parseError(r,a);else throw new Error(r)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var r=s.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var r=s.length,a=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var u=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===o.length?this.yylloc.first_column:0)+o[o.length-a.length].length-a[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[u[0],u[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),r=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,r,a,o,u,h;this._more||(this.yytext="",this.match="");for(var p=this._currentRules(),l=0;l<p.length&&(a=this._input.match(this.rules[p[l]]),!(a&&(!r||a[0].length>r[0].length)&&(r=a,o=l,!this.options.flex)));l++);return r?(h=r[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],s=this.performAction.call(this,this.yy,this,p[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return typeof r<"u"?r:this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(r){this.begin(r)}};return n.options={},n.performAction=function(r,a,o,u){function h(l,w){return a.yytext=a.yytext.substr(l,a.yyleng-w)}var p=u;switch(o){case 0:if(a.yytext.slice(-2)==="\\\\"?(h(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(h(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return a.yytext=a.yytext.substr(5,a.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return h(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return h(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return a.yytext=h(1,2).replace(/\\"/g,'"'),42;break;case 30:return a.yytext=h(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return a.yytext=h(1,2),50;break;case 37:return"INVALID";case 38:return 5}},n.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],n.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},n})();t.lexer=e;function i(){this.yy={}}return i.prototype=t,t.Parser=i,new i})();me.default=mi});var ve=m(et=>{"use strict";c();var gi=P().default;function vi(t,e){return{left:t.charAt(2)==="~",right:e.charAt(e.length-3)==="~"}}et.stripFlags=vi;function ki(t,e,i,n,s,r){if(t.sexpr.id.original!==n.path.original)throw new gi(t.sexpr.id.original+" doesn't match "+n.path.original,t);var a=i&&i.program,o={left:t.strip.left,right:n.strip.right,openStandalone:Et(e.statements),closeStandalone:wt((a||e).statements)};if(t.strip.right&&H(e.statements,null,!0),a){var u=i.strip;u.left&&C(e.statements,null,!0),u.right&&H(a.statements,null,!0),n.strip.left&&C(a.statements,null,!0),wt(e.statements)&&Et(a.statements)&&(C(e.statements),H(a.statements))}else n.strip.left&&C(e.statements,null,!0);return s?new this.BlockNode(t,a,e,o,r):new this.BlockNode(t,e,a,o,r)}et.prepareBlock=ki;function yi(t,e){for(var i=0,n=t.length;i<n;i++){var s=t[i],r=s.strip;if(r){var a=wt(t,i,e,s.type==="partial"),o=Et(t,i,e),u=r.openStandalone&&a,h=r.closeStandalone&&o,p=r.inlineStandalone&&a&&o;r.right&&H(t,i,!0),r.left&&C(t,i,!0),p&&(H(t,i),C(t,i)&&s.type==="partial"&&(s.indent=/([ \t]+$)/.exec(t[i-1].original)?RegExp.$1:"")),u&&(H((s.program||s.inverse).statements),C(t,i)),h&&(H(t,i),C((s.inverse||s.program).statements))}}return t}et.prepareProgram=yi;function wt(t,e,i){e===void 0&&(e=t.length);var n=t[e-1],s=t[e-2];if(!n)return i;if(n.type==="content")return(s||!i?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(n.original)}function Et(t,e,i){e===void 0&&(e=-1);var n=t[e+1],s=t[e+2];if(!n)return i;if(n.type==="content")return(s||!i?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(n.original)}function H(t,e,i){var n=t[e==null?0:e+1];if(!(!n||n.type!=="content"||!i&&n.rightStripped)){var s=n.string;n.string=n.string.replace(i?/^\s+/:/^[ \t]*\r?\n?/,""),n.rightStripped=n.string!==s}}function C(t,e,i){var n=t[e==null?t.length-1:e-1];if(!(!n||n.type!=="content"||!i&&n.leftStripped)){var s=n.string;return n.string=n.string.replace(i?/\s+$/:/[ \t]+$/,""),n.leftStripped=n.string!==s,n.leftStripped}}});var _t=m(Pt=>{"use strict";c();var Nt=ge().default,ke=xt().default,Si=ve(),bi=V().extend;Pt.parser=Nt;var ye={};bi(ye,Si,ke);function xi(t){return t.constructor===ke.ProgramNode?t:(Nt.yy=ye,Nt.parse(t))}Pt.parse=xi});var nt=m(it=>{"use strict";c();var Ot=P().default,Se=V().isArray,wi=[].slice;function Ct(){}it.Compiler=Ct;Ct.prototype={compiler:Ct,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var i=0;i<e;i++){var n=this.opcodes[i],s=t.opcodes[i];if(n.opcode!==s.opcode||!be(n.args,s.args))return!1}for(e=this.children.length,i=0;i<e;i++)if(!this.children[i].equals(t.children[i]))return!1;return!0},guid:0,compile:function(t,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds;var i=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},i)for(var n in i)this.options.knownHelpers[n]=i[n];return this.accept(t)},accept:function(t){return this[t.type](t)},program:function(t){for(var e=t.statements,i=0,n=e.length;i<n;i++)this.accept(e[i]);return this.isSimple=n===1,this.depths.list=this.depths.list.sort(function(s,r){return s-r}),this},compileProgram:function(t){var e=new this.compiler().compile(t,this.options),i=this.guid++,n;this.usePartial=this.usePartial||e.usePartial,this.children[i]=e;for(var s=0,r=e.depths.list.length;s<r;s++)n=e.depths.list[s],!(n<2)&&this.addDepth(n-1);return i},block:function(t){var e=t.mustache,i=t.program,n=t.inverse;i&&(i=this.compileProgram(i)),n&&(n=this.compileProgram(n));var s=e.sexpr,r=this.classifySexpr(s);r==="helper"?this.helperSexpr(s,i,n):r==="simple"?(this.simpleSexpr(s),this.opcode("pushProgram",i),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",s.id.original)):(this.ambiguousSexpr(s,i,n),this.opcode("pushProgram",i),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var e=t.pairs,i,n;for(this.opcode("pushHash"),i=0,n=e.length;i<n;i++)this.pushParam(e[i][1]);for(;i--;)this.opcode("assignToHash",e[i][0]);this.opcode("popHash")},partial:function(t){var e=t.partialName;this.usePartial=!0,t.hash?this.accept(t.hash):this.opcode("push","undefined"),t.context?this.accept(t.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",e.name,t.indent||""),this.opcode("append")},content:function(t){t.string&&this.opcode("appendContent",t.string)},mustache:function(t){this.sexpr(t.sexpr),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(t,e,i){var n=t.id,s=n.parts[0],r=e!=null||i!=null;this.opcode("getContext",n.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",i),this.ID(n),this.opcode("invokeAmbiguous",s,r)},simpleSexpr:function(t){var e=t.id;e.type==="DATA"?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,i){var n=this.setupFullMustacheParams(t,e,i),s=t.id,r=s.parts[0];if(this.options.knownHelpers[r])this.opcode("invokeKnownHelper",n.length,r);else{if(this.options.knownHelpersOnly)throw new Ot("You specified knownHelpersOnly, but used the unknown helper "+r,t);s.falsy=!0,this.ID(s),this.opcode("invokeHelper",n.length,s.original,s.isSimple)}},sexpr:function(t){var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0];e?this.opcode("lookupOnContext",t.parts,t.falsy,t.isScoped):this.opcode("pushContext")},DATA:function(t){this.options.data=!0,this.opcode("lookupData",t.id.depth,t.id.parts)},STRING:function(t){this.opcode("pushString",t.string)},NUMBER:function(t){this.opcode("pushLiteral",t.number)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:wi.call(arguments,1)})},addDepth:function(t){t!==0&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifySexpr:function(t){var e=t.isHelper,i=t.eligibleHelper,n=this.options;if(i&&!e){var s=t.id.parts[0];n.knownHelpers[s]?e=!0:n.knownHelpersOnly&&(i=!1)}return e?"helper":i?"ambiguous":"simple"},pushParams:function(t){for(var e=0,i=t.length;e<i;e++)this.pushParam(t[e])},pushParam:function(t){this.stringParams?(t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",t.stringModeValue,t.type),t.type==="sexpr"&&this.sexpr(t)):(this.trackIds&&this.opcode("pushId",t.type,t.idName||t.stringModeValue),this.accept(t))},setupFullMustacheParams:function(t,e,i){var n=t.params;return this.pushParams(n),this.opcode("pushProgram",e),this.opcode("pushProgram",i),t.hash?this.hash(t.hash):this.opcode("emptyHash"),n}};function Ei(t,e,i){if(t==null||typeof t!="string"&&t.constructor!==i.AST.ProgramNode)throw new Ot("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var n=i.parse(t),s=new i.Compiler().compile(n,e);return new i.JavaScriptCompiler().compile(s,e)}it.precompile=Ei;function Ni(t,e,i){if(t==null||typeof t!="string"&&t.constructor!==i.AST.ProgramNode)throw new Ot("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var n;function s(){var a=i.parse(t),o=new i.Compiler().compile(a,e),u=new i.JavaScriptCompiler().compile(o,e,void 0,!0);return i.template(u)}var r=function(a,o){return n||(n=s()),n.call(this,a,o)};return r._setup=function(a){return n||(n=s()),n._setup(a)},r._child=function(a,o,u){return n||(n=s()),n._child(a,o,u)},r}it.compile=Ni;function be(t,e){if(t===e)return!0;if(Se(t)&&Se(e)&&t.length===e.length){for(var i=0;i<t.length;i++)if(!be(t[i],e[i]))return!1;return!0}}});var Ne=m(Ee=>{"use strict";c();var Pi=A().COMPILER_REVISION,_i=A().REVISION_CHANGES,It=P().default;function G(t){this.value=t}function R(){}R.prototype={nameLookup:function(t,e){return R.isValidJavaScriptVariableName(e)?t+"."+e:t+"['"+e+"']"},depthedLookup:function(t){return this.aliases.lookup="this.lookup",'lookup(depths, "'+t+'")'},compilerInfo:function(){var t=Pi,e=_i[t];return[t,e]},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,e,i,n){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!n,this.name=this.environment.name,this.isChild=!!i,this.context=i||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.depths.list.length||this.options.compat;var s=t.opcodes,r,a,o;for(a=0,o=s.length;a<o;a++)r=s[a],this[r.opcode].apply(this,r.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new It("Compile completed with content left on stack");var u=this.createFunctionContext(n);if(this.isChild)return u;var h={compiler:this.compilerInfo(),main:u},p=this.context.programs;for(a=0,o=p.length;a<o;a++)p[a]&&(h[a]=p[a]);return this.environment.usePartial&&(h.usePartial=!0),this.options.data&&(h.useData=!0),this.useDepths&&(h.useDepths=!0),this.options.compat&&(h.compat=!0),n||(h.compiler=JSON.stringify(h.compiler),h=this.objectLiteral(h)),h},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(t){var e="",i=this.stackVars.concat(this.registers.list);i.length>0&&(e+=", "+i.join(", "));for(var n in this.aliases)this.aliases.hasOwnProperty(n)&&(e+=", "+n+"="+this.aliases[n]);var s=["depth0","helpers","partials","data"];this.useDepths&&s.push("depths");var r=this.mergeSource(e);return t?(s.push(r),Function.apply(this,s)):"function("+s.join(",")+`) {
  `+r+"}"},mergeSource:function(t){for(var e="",i,n=!this.forceBuffer,s,r=0,a=this.source.length;r<a;r++){var o=this.source[r];o.appendToBuffer?i?i=i+`
    + `+o.content:i=o.content:(i&&(e?e+="buffer += "+i+`;
  `:(s=!0,e=i+`;
  `),i=void 0),e+=o+`
  `,this.environment.isSimple||(n=!1))}return n?(i||!e)&&(e+="return "+(i||'""')+`;
`):(t+=", buffer = "+(s?"":this.initializeBuffer()),i?e+="return buffer + "+i+`;
`:e+=`return buffer;
`),t&&(e="var "+t.substring(2)+(s?"":`;
  `)+e),e},blockValue:function(t){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams(t,0,e);var i=this.popStack();e.splice(1,0,i),this.push("blockHelperMissing.call("+e.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams("",0,t,!0),this.flushInline();var e=this.topStack();t.splice(1,0,e),this.pushSource("if (!"+this.lastHelper+") { "+e+" = blockHelperMissing.call("+t.join(", ")+"); }")},appendContent:function(t){this.pendingContent&&(t=this.pendingContent+t),this.pendingContent=t},append:function(){this.flushInline();var t=this.popStack();this.pushSource("if ("+t+" != null) { "+this.appendToBuffer(t)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,i){var n=0,s=t.length;for(!i&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[n++])):this.pushContext();n<s;n++)this.replaceStack(function(r){var a=this.nameLookup(r,t[n],"context");return e?" && "+a:" != null ? "+a+" : "+r})},lookupData:function(t,e){t?this.pushStackLiteral("this.data(data, "+t+")"):this.pushStackLiteral("data");for(var i=e.length,n=0;n<i;n++)this.replaceStack(function(s){return" && "+this.nameLookup(s,e[n],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),e!=="sexpr"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+t.ids.join(",")+"}"),this.stringParams&&(this.push("{"+t.contexts.join(",")+"}"),this.push("{"+t.types.join(",")+"}")),this.push(`{
    `+t.values.join(`,
    `)+`
  }`)},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},invokeHelper:function(t,e,i){this.aliases.helperMissing="helpers.helperMissing";var n=this.popStack(),s=this.setupHelper(t,e),r=(i?s.name+" || ":"")+n+" || helperMissing";this.push("(("+r+").call("+s.callParams+"))")},invokeKnownHelper:function(t,e){var i=this.setupHelper(t,e);this.push(i.name+".call("+i.callParams+")")},invokeAmbiguous:function(t,e){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var i=this.popStack();this.emptyHash();var n=this.setupHelper(0,t,e),s=this.lastHelper=this.nameLookup("helpers",t,"helper");this.push("((helper = (helper = "+s+" || "+i+") != null ? helper : helperMissing"+(n.paramsInit?"),("+n.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+n.callParams+") : helper))")},invokePartial:function(t,e){var i=[this.nameLookup("partials",t,"partial"),"'"+e+"'","'"+t+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?i.push("data"):this.options.compat&&i.push("undefined"),this.options.compat&&i.push("depths"),this.push("this.invokePartial("+i.join(", ")+")")},assignToHash:function(t){var e=this.popStack(),i,n,s;this.trackIds&&(s=this.popStack()),this.stringParams&&(n=this.popStack(),i=this.popStack());var r=this.hash;i&&r.contexts.push("'"+t+"': "+i),n&&r.types.push("'"+t+"': "+n),s&&r.ids.push("'"+t+"': "+s),r.values.push("'"+t+"': ("+e+")")},pushId:function(t,e){t==="ID"||t==="DATA"?this.pushString(e):t==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:R,compileChildren:function(t,e){for(var i=t.children,n,s,r=0,a=i.length;r<a;r++){n=i[r],s=new this.compiler;var o=this.matchExistingProgram(n);o==null?(this.context.programs.push(""),o=this.context.programs.length,n.index=o,n.name="program"+o,this.context.programs[o]=s.compile(n,e,this.context,!this.precompile),this.context.environments[o]=n,this.useDepths=this.useDepths||s.useDepths):(n.index=o,n.name="program"+o)}},matchExistingProgram:function(t){for(var e=0,i=this.context.environments.length;e<i;e++){var n=this.context.environments[e];if(n&&n.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],i=e.depths.list,n=this.useDepths,s,r=[e.index,"data"];return n&&r.push("depths"),"this.program("+r.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new G(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var e=this.incrStack();return this.pushSource(e+" = "+t+";"),this.compileStack.push(e),e},replaceStack:function(t){var e="",i=this.isInline(),n,s,r;if(!this.isInline())throw new It("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof G)e=n=a.value,r=!0;else{s=!this.stackSlot;var o=s?this.incrStack():this.topStackName();e="("+this.push(o)+" = "+a+")",n=this.topStack()}var u=t.call(this,n);r||this.popStack(),s&&this.stackSlot--,this.push("("+e+u+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var e=0,i=t.length;e<i;e++){var n=t[e];n instanceof G?this.compileStack.push(n):this.pushStack(n)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),i=(e?this.inlineStack:this.compileStack).pop();if(!t&&i instanceof G)return i.value;if(!e){if(!this.stackSlot)throw new It("Invalid stack pop");this.stackSlot--}return i},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof G?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=[];for(var i in t)t.hasOwnProperty(i)&&e.push(this.quotedString(i)+":"+t[i]);return"{"+e.join(",")+"}"},setupHelper:function(t,e,i){var n=[],s=this.setupParams(e,t,n,i),r=this.nameLookup("helpers",e,"helper");return{params:n,paramsInit:s,name:r,callParams:[this.contextName(0)].concat(n).join(", ")}},setupOptions:function(t,e,i){var n={},s=[],r=[],a=[],o,u,h;n.name=this.quotedString(t),n.hash=this.popStack(),this.trackIds&&(n.hashIds=this.popStack()),this.stringParams&&(n.hashTypes=this.popStack(),n.hashContexts=this.popStack()),u=this.popStack(),h=this.popStack(),(h||u)&&(h||(h="this.noop"),u||(u="this.noop"),n.fn=h,n.inverse=u);for(var p=e;p--;)o=this.popStack(),i[p]=o,this.trackIds&&(a[p]=this.popStack()),this.stringParams&&(r[p]=this.popStack(),s[p]=this.popStack());return this.trackIds&&(n.ids="["+a.join(",")+"]"),this.stringParams&&(n.types="["+r.join(",")+"]",n.contexts="["+s.join(",")+"]"),this.options.data&&(n.data="data"),n},setupParams:function(t,e,i,n){var s=this.objectLiteral(this.setupOptions(t,e,i));return n?(this.useRegister("options"),i.push("options"),"options="+s):(i.push(s),"")}};var xe="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),Ci=R.RESERVED_WORDS={};for(st=0,we=xe.length;st<we;st++)Ci[xe[st]]=!0;var st,we;R.isValidJavaScriptVariableName=function(t){return!R.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};Ee.default=R});var Ce=m(_e=>{"use strict";c();var F=pe().default,Oi=xt().default,Ii=_t().parser,Ai=_t().parse,Di=nt().Compiler,Hi=nt().compile,Ri=nt().precompile,Li=Ne().default,Mi=F.create,Pe=function(){var t=Mi();return t.compile=function(e,i){return Hi(e,i,t)},t.precompile=function(e,i){return Ri(e,i,t)},t.AST=Oi,t.Compiler=Di,t.JavaScriptCompiler=Li,t.Parser=Ii,t.parse=Ai,t};F=Pe();F.create=Pe;F.default=F;_e.default=F});var Dt=m(Oe=>{"use strict";c();function At(){}At.prototype={constructor:At,accept:function(t){return this[t.type](t)}};Oe.default=At});var Ie=m(Ht=>{"use strict";c();var Ti=Dt().default;function qi(t){return new d().accept(t)}Ht.print=qi;function d(){this.padding=0}Ht.PrintVisitor=d;d.prototype=new Ti;d.prototype.pad=function(t){for(var e="",i=0,n=this.padding;i<n;i++)e=e+"  ";return e=e+t+`
`,e};d.prototype.program=function(t){var e="",i=t.statements,n,s;for(n=0,s=i.length;n<s;n++)e=e+this.accept(i[n]);return this.padding--,e};d.prototype.block=function(t){var e="";return e=e+this.pad("BLOCK:"),this.padding++,e=e+this.accept(t.mustache),t.program&&(e=e+this.pad("PROGRAM:"),this.padding++,e=e+this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e=e+this.pad("{{^}}"),this.padding++,e=e+this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e};d.prototype.sexpr=function(t){for(var e=t.params,i=[],n,s=0,r=e.length;s<r;s++)i.push(this.accept(e[s]));return e="["+i.join(", ")+"]",n=t.hash?" "+this.accept(t.hash):"",this.accept(t.id)+" "+e+n};d.prototype.mustache=function(t){return this.pad("{{ "+this.accept(t.sexpr)+" }}")};d.prototype.partial=function(t){var e=this.accept(t.partialName);return t.context&&(e+=" "+this.accept(t.context)),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")};d.prototype.hash=function(t){for(var e=t.pairs,i=[],n,s,r=0,a=e.length;r<a;r++)n=e[r][0],s=this.accept(e[r][1]),i.push(n+"="+s);return"HASH{"+i.join(", ")+"}"};d.prototype.STRING=function(t){return'"'+t.string+'"'};d.prototype.NUMBER=function(t){return"NUMBER{"+t.number+"}"};d.prototype.BOOLEAN=function(t){return"BOOLEAN{"+t.bool+"}"};d.prototype.ID=function(t){var e=t.parts.join("/");return t.parts.length>1?"PATH:"+e:"ID:"+e};d.prototype.PARTIAL_NAME=function(t){return"PARTIAL:"+t.name};d.prototype.DATA=function(t){return"@"+this.accept(t.id)};d.prototype.content=function(t){return this.pad("CONTENT[ '"+t.string+"' ]")};d.prototype.comment=function(t){return this.pad("{{! '"+t.comment+"' }}")}});var He=m((wn,De)=>{c();var K=Ce().default;K.Visitor=Dt().default;var Ae=Ie();K.PrintVisitor=Ae.PrintVisitor;K.print=Ae.print;De.exports=K;typeof j<"u"&&j.extensions&&(Rt=function(t,e){var i=(ft(),Vt(pt)),n=i.readFileSync(e,"utf8");t.exports=K.compile(n)},j.extensions[".handlebars"]=Rt,j.extensions[".hbs"]=Rt);var Rt});var Me=m((Pn,Le)=>{c();var Re=(ft(),Vt(pt)),Vi=He();function Bi(t){var e=Re.readFileSync("//style.css","utf-8"),i=Re.readFileSync("//resume.hbs","utf-8");return Vi.compile(i)({css:e,resume:t})}Le.exports={render:Bi}});c();var L=Ge(Me(),1),Te=L.default??L,Cn=Te.render??L.render,On=Te.pdfRenderOptions??L.pdfRenderOptions;export{On as pdfRenderOptions,Cn as render};
