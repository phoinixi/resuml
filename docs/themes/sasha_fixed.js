var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Gi=Object.create;var Rn=Object.defineProperty;var Ji=Object.getOwnPropertyDescriptor;var Qi=Object.getOwnPropertyNames;var Xi=Object.getPrototypeOf,Zi=Object.prototype.hasOwnProperty;var Oe=(p,m)=>()=>(p&&(m=p(p=0)),m);var Dt=(p,m)=>()=>(m||p((m={exports:{}}).exports,m),m.exports),ki=(p,m)=>{for(var x in m)Rn(p,x,{get:m[x],enumerable:!0})},Se=(p,m,x,j)=>{if(m&&typeof m=="object"||typeof m=="function")for(let _ of Qi(m))!Zi.call(p,_)&&_!==x&&Rn(p,_,{get:()=>m[_],enumerable:!(j=Ji(m,_))||j.enumerable});return p};var tu=(p,m,x)=>(x=p!=null?Gi(Xi(p)):{},Se(m||!p||!p.__esModule?Rn(x,"default",{value:p,enumerable:!0}):x,p)),nu=p=>Se(Rn({},"__esModule",{value:!0}),p);var q=Oe(()=>{});var Le={};ki(Le,{createReadStream:()=>ze,createWriteStream:()=>Ne,default:()=>eu,existsSync:()=>Te,lstatSync:()=>Fe,mkdirSync:()=>Ue,readFileSync:()=>De,readdirSync:()=>je,rmdirSync:()=>Pe,statSync:()=>Jn,unlinkSync:()=>Me,writeFileSync:()=>Ie});function Gn(p){return String(p).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function xe(p){var m=Gn(p);if(En[m]!==void 0)return En[m];for(var x=Object.keys(En),j=0;j<x.length;j++)if(m.endsWith("/"+x[j])||m===x[j])return En[x[j]]}function Vn(p){var m=Gn(p);if((m===""||m===".")&&Wt["."]!==void 0)return Wt["."];if(Wt[m]!==void 0)return Wt[m];for(var x=Object.keys(Wt),j=0;j<x.length;j++)if(m.endsWith("/"+x[j])||m===x[j])return Wt[x[j]]}var En,Wt,De,je,Te,Ie,Ue,Jn,Fe,Me,Pe,ze,Ne,eu,qe=Oe(()=>{"use strict";q();En={"package.json":`{
  "name": "jsonresume-theme-sasha_fixed",
  "version": "0.0.9",
  "description": "Sasha JSON Resume theme.",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/drkyro/jsonresume-theme-sasha"
  },
  "author": {
    "name": "Dan Vera"
  },
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/drkyro/jsonresume-theme-sasha/issues"
  },
  "homepage": "https://github.com/drkyro/jsonresume-theme-sasha",
  "dependencies": {
    "gravatar": "^1.0.6",
    "lodash": "^2.4.1",
    "mustache": "^0.8.2",
    "tarball-extract": "0.0.3"
  },
  "gitHead": "966c25179632cf32780c34c6a3c98a1f23448ffa",
  "_id": "jsonresume-theme-sasha@0.0.1",
  "_shasum": "9b3221680b9931b66e2f8af87cb58051018274bd",
  "_from": "jsonresume-theme-sasha@",
  "_npmVersion": "2.5.1",
  "_nodeVersion": "0.12.0",
  "_npmUser": {
    "name": "arubinofaux",
    "email": "dan@yovu.co"
  },
  "dist": {
    "shasum": "9b3221680b9931b66e2f8af87cb58051018274bd",
    "tarball": "http://registry.npmjs.org/jsonresume-theme-sasha/-/jsonresume-theme-sasha-0.0.1.tgz"
  },
  "maintainers": [
    {
      "name": "arubinofaux",
      "email": "dan@yovu.co"
    }
  ],
  "directories": {},
  "_resolved": "https://registry.npmjs.org/jsonresume-theme-sasha/-/jsonresume-theme-sasha-0.0.1.tgz"
}
`,"resume.css":`@import url(http://fonts.googleapis.com/css?family=Open+Sans:300|Oswald:300);

body {
	font-family: 'Open Sans', 'Helvetica Neue Light', sans-serif;
	font-weight: 300;
}

h1,h2,h3 {
	font-family: 'Oswald', sans-serif;
}

h1 {
	font-weight: 700;
}

h2,h3 {
	font-weight: 300;
}

main {
	padding: 20px 0;
}

.vr {
	display: inline;
	margin: 0.5em 0px;
	width: 1px;
	height: 1em;
	border-left: 1px solid gray;
}


section#header img {
	padding: 20px;
}

section#header .title .vr {
	display: none;;
}
	
@media(min-width:768px), print {
	section#header img {
		width: 4em;
		height: 4em;
		padding: 0px;
		float: right;
	}
	section#header .title h1,h2 {
		display: inline !important;
		padding-right: 20px;
	}
	section#header .title .vr {
		display: inline;
	}
}

section#skills .details {
	-moz-column-count: 2;
	-moz-column-gap: 0px;
	-webkit-column-count: 2;
	-webkit-column-gap: 0px;
	column-count: 2;
	column-gap: 0px;
}

.details h4 {
	margin-top: 20px;
	margin-bottom: 5px;
}
.date {
	font-size: 15px;
	line-height: 24px;
}
.website {
	line-height: 18px;
}


/* Fix for print */
@media print {

	a[href]:after {
		content: none !important;
	}

	body {
		font-size: 9px;
	}
	h1 {
		font-size: 31px;
	}
	h2 {
		font-size: 25px;
	}
	h3 {
		font-size: 19px;
	}

	.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
		float: left;
	}
	.col-sm-12 {
		width: 100%;
	}
	.col-sm-11 {
		width: 91.66666666666666%;
	}
	.col-sm-10 {
		width: 83.33333333333334%;
	}
	.col-sm-9 {
		width: 75%;
	}
	.col-sm-8 {
		width: 66.66666666666666%;
	}
	.col-sm-7 {
		width: 58.333333333333336%;
	}
	.col-sm-6 {
		width: 50%;
	}
	.col-sm-5 {
		width: 41.66666666666667%;
	}
	.col-sm-4 {
		width: 33.33333333333333%;
	}
	.col-sm-3 {
		width: 25%;
	}
	.col-sm-2 {
		width: 16.666666666666664%;
	}
	.col-sm-1 {
		width: 8.333333333333332%;
	}

}
`,"resume.template":`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>{{basics.firstName}} {{basics.lastName}}</title>
		<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet" />
		<style>
			{{{css}}}
		</style>


	</head>
	<body>
		<div class='container-fluid'>
			<main class="row">
			<div class="col-sm-12 col-md-10 col-md-offset-1">
				<section id='header' class="row">
				<div class="col-sm-9 col-xs-12 title">
					<h1>{{basics.name}}</h1>
					<h2 class='vr'></h2>
					<h2>{{basics.label}}</h2>
				</div>
				<div class="col-sm-3 col-xs-12 text-center photo">
				</div>
				</section>
				<hr style="color: #ccc; height: 4px;" />
				<section id='about' class="row">
				<header class="col-sm-3">
				<h3>About</h3>
				</header>
				<div class="col-sm-9">
					{{#basics.summary}}
					<p>{{basics.summary}}</p>
					{{/basics.summary}}
					{{#basics.website}}
					<strong>Website:</strong> <a href="{{basics.website}}">{{basics.website}}</a> <br />
					{{/basics.website}}
					{{#basics.phone}}
					<strong>Phone:</strong> {{basics.phone}} <br />
					{{/basics.phone}}
					{{#basics.email}}
					<strong>Email:</strong> <a href="mailto:{{basics.email}}">{{basics.email}}</a><br />
					{{/basics.email}}
					{{#basics.profiles.length}}
						<section id="profiles">
						{{#basics.profiles}}
							{{#network}}
							<strong class="network">
								{{.}}:
							</strong>
							{{/network}}
							{{#username}}
							{{#url}}
							<a target="_blank" href="{{url}}">{{username}}</a>
							{{/url}}
							{{^url}}
							{{username}}
							{{/url}}
							{{/username}}
							{{^username}}
							{{#url}}
							<a target="_blank" href="{{url}}">{{url}}</a>
							{{/url}}
							{{/username}}
							<br />
						{{/basics.profiles}}
						</section>
					{{/basics.profiles.length}}
				</div>
				</section>
				<hr />
				{{#work.length}}
				<section id='work' class="row">
				<header class="col-sm-3">
				<h3>Work Experience</h3>
				</header>
				<div class="col-sm-9">
					<div class="details">
						{{#work}}
						<h3>{{institution}}<span class="date pull-right">{{startDate}} - {{endDate}}</span></h3>
						<strong>{{position}}</strong>
						{{#website}}
						<div class="website pull-right">
							<a target="_blank" href="{{.}}">{{.}}</a>
						</div>
						{{/website}}
						<p>{{summary}}</p>
						<ul>
							{{#highlights}}
							<li>{{.}}</li>
							{{/highlights}}
						</ul>
						{{/work}}
					</div>
				</div>
				</section>
				<hr />
				{{/work.length}} 

				{{#education.length}}
				<section id='education' class="row">
				<header class="col-sm-3">
				<h3>Education</h3>
				</header>
				<div class="col-sm-9">
					<div class="details">
						{{#education}}
						<h3>{{institution}}<span class="date pull-right">{{startDateYear}} - {{endDateYear}}</span></h3>			
						<strong>{{educationDetail}}</strong>
						<p>{{summary}}</p>
						{{#courses.length}}
						<ul class="courses">
							{{#courses}}
							<li>{{.}}</li>
							{{/courses}}
						</ul>
						{{/courses.length}}
						{{/education}}
					</div>
				</div>
				</section>
				<hr />
				{{/education.length}}
				{{#skills.length}}
				<section id='skills' class="row">
				<header class="col-sm-3">
				<h3>Skills</h3>
				</header>
				<div class="col-sm-9">
					<div class="details row">
						{{#skills}}
						<div class='col-sm-12'>
							<ul>
								<li>
								<h4>{{name}} <span class="pull-right">{{level}}</span></h4>
								<ul>
									{{#keywords}}
									<li>{{.}}</li>
									{{/keywords}}
								</ul>
								</li>
							</ul>
						</div>
						{{/skills}}
					</div>
				</div>
				</section>
				<hr />
				{{/skills.length}}
				{{#volunteer.length}}
				<section id='volunteer' class="row">
				<header class="col-sm-3">
				<h3>Volunteer</h3>
				</header>
				<div class="col-sm-9">
					<div class="details">
						{{#volunteer}}
						<h3>{{organization}}<span class="date pull-right">{{startDateYear}} - {{endDateYear}}</span></h3>
						<strong>{{position}}</strong>
						{{#website}}
						<div class="website pull-right">
							<a target="_blank" href="{{.}}">{{.}}</a>
						</div>
						{{/website}}
						<p>{{summary}}</p>
						<ul>
							{{#highlights}}
							<li>{{.}}</li>
							{{/highlights}}
						</ul>
						{{/volunteer}}
					</div>
				</div>
				</section>
				<hr />
				{{/volunteer.length}}
				{{#languages.length}}
				<section id='languages' class="row">
				<header class="col-sm-3">
				<h3>Languages</h3>
				</header>
				<div class="col-sm-9">
					<div class="details">
						{{#languages}}
						<ul>
							<li>
							<h4>{{language}} <span class="pull-right">{{fluency}}</span></h4>
							</li>
						</ul>
						{{/languages}}
					</div>
				</div>
				</section>
				<hr />
				{{/languages.length}}
				{{#references.length}}
				<section id='references' class="row">
				<header class="col-sm-3">
				<h3>References</h3>
				</header>
				<div class="col-sm-9">
					<div class="details row">
						{{#references}}

						<p>{{reference}} -
						<strong>{{name}}</strong>
						</p>
						{{/references}}
					</div>
				</div>
				</section>
				{{/references.length}}
				<footer></footer>
			</div>
			</main>
		</div>

		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"><\/script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
	</body>
</html>
`},Wt={".":["LICENSE","README.md","index.js","package.json","resume.css","resume.template"]};De=function(p,m){var x=xe(p);return x!==void 0?x:""},je=function(p,m){var x=Vn(p);return x===void 0&&(x=[]),m&&m.withFileTypes?x.map(function(j){var _=Gn(p)+"/"+j,F=Vn(_)!==void 0;return{name:j,isFile:function(){return!F},isDirectory:function(){return F}}}):x},Te=function(p){return xe(p)!==void 0||Vn(p)!==void 0},Ie=function(){},Ue=function(){},Jn=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Fe=Jn,Me=function(){},Pe=function(){},ze=function(){return{pipe:function(p){return p},on:function(){return this}}},Ne=function(){return{write:function(){},end:function(){},on:function(){return this}}},eu={readFileSync:De,readdirSync:je,existsSync:Te,writeFileSync:Ie,mkdirSync:Ue,statSync:Jn,lstatSync:Fe,unlinkSync:Me,rmdirSync:Pe,createReadStream:ze,createWriteStream:Ne}});var Ye=Dt((Ke,On)=>{q();(function(p){"use strict";function m(h,O){var d=(h&65535)+(O&65535),T=(h>>16)+(O>>16)+(d>>16);return T<<16|d&65535}function x(h,O){return h<<O|h>>>32-O}function j(h,O,d,T,y,w){return m(x(m(m(O,h),m(T,w)),y),d)}function _(h,O,d,T,y,w,R){return j(O&d|~O&T,h,O,y,w,R)}function F(h,O,d,T,y,w,R){return j(O&T|d&~T,h,O,y,w,R)}function P(h,O,d,T,y,w,R){return j(O^d^T,h,O,y,w,R)}function z(h,O,d,T,y,w,R){return j(d^(O|~T),h,O,y,w,R)}function k(h,O){h[O>>5]|=128<<O%32,h[(O+64>>>9<<4)+14]=O;var d,T,y,w,R,a=1732584193,l=-271733879,v=-1732584194,g=271733878;for(d=0;d<h.length;d+=16)T=a,y=l,w=v,R=g,a=_(a,l,v,g,h[d],7,-680876936),g=_(g,a,l,v,h[d+1],12,-389564586),v=_(v,g,a,l,h[d+2],17,606105819),l=_(l,v,g,a,h[d+3],22,-1044525330),a=_(a,l,v,g,h[d+4],7,-176418897),g=_(g,a,l,v,h[d+5],12,1200080426),v=_(v,g,a,l,h[d+6],17,-1473231341),l=_(l,v,g,a,h[d+7],22,-45705983),a=_(a,l,v,g,h[d+8],7,1770035416),g=_(g,a,l,v,h[d+9],12,-1958414417),v=_(v,g,a,l,h[d+10],17,-42063),l=_(l,v,g,a,h[d+11],22,-1990404162),a=_(a,l,v,g,h[d+12],7,1804603682),g=_(g,a,l,v,h[d+13],12,-40341101),v=_(v,g,a,l,h[d+14],17,-1502002290),l=_(l,v,g,a,h[d+15],22,1236535329),a=F(a,l,v,g,h[d+1],5,-165796510),g=F(g,a,l,v,h[d+6],9,-1069501632),v=F(v,g,a,l,h[d+11],14,643717713),l=F(l,v,g,a,h[d],20,-373897302),a=F(a,l,v,g,h[d+5],5,-701558691),g=F(g,a,l,v,h[d+10],9,38016083),v=F(v,g,a,l,h[d+15],14,-660478335),l=F(l,v,g,a,h[d+4],20,-405537848),a=F(a,l,v,g,h[d+9],5,568446438),g=F(g,a,l,v,h[d+14],9,-1019803690),v=F(v,g,a,l,h[d+3],14,-187363961),l=F(l,v,g,a,h[d+8],20,1163531501),a=F(a,l,v,g,h[d+13],5,-1444681467),g=F(g,a,l,v,h[d+2],9,-51403784),v=F(v,g,a,l,h[d+7],14,1735328473),l=F(l,v,g,a,h[d+12],20,-1926607734),a=P(a,l,v,g,h[d+5],4,-378558),g=P(g,a,l,v,h[d+8],11,-2022574463),v=P(v,g,a,l,h[d+11],16,1839030562),l=P(l,v,g,a,h[d+14],23,-35309556),a=P(a,l,v,g,h[d+1],4,-1530992060),g=P(g,a,l,v,h[d+4],11,1272893353),v=P(v,g,a,l,h[d+7],16,-155497632),l=P(l,v,g,a,h[d+10],23,-1094730640),a=P(a,l,v,g,h[d+13],4,681279174),g=P(g,a,l,v,h[d],11,-358537222),v=P(v,g,a,l,h[d+3],16,-722521979),l=P(l,v,g,a,h[d+6],23,76029189),a=P(a,l,v,g,h[d+9],4,-640364487),g=P(g,a,l,v,h[d+12],11,-421815835),v=P(v,g,a,l,h[d+15],16,530742520),l=P(l,v,g,a,h[d+2],23,-995338651),a=z(a,l,v,g,h[d],6,-198630844),g=z(g,a,l,v,h[d+7],10,1126891415),v=z(v,g,a,l,h[d+14],15,-1416354905),l=z(l,v,g,a,h[d+5],21,-57434055),a=z(a,l,v,g,h[d+12],6,1700485571),g=z(g,a,l,v,h[d+3],10,-1894986606),v=z(v,g,a,l,h[d+10],15,-1051523),l=z(l,v,g,a,h[d+1],21,-2054922799),a=z(a,l,v,g,h[d+8],6,1873313359),g=z(g,a,l,v,h[d+15],10,-30611744),v=z(v,g,a,l,h[d+6],15,-1560198380),l=z(l,v,g,a,h[d+13],21,1309151649),a=z(a,l,v,g,h[d+4],6,-145523070),g=z(g,a,l,v,h[d+11],10,-1120210379),v=z(v,g,a,l,h[d+2],15,718787259),l=z(l,v,g,a,h[d+9],21,-343485551),a=m(a,T),l=m(l,y),v=m(v,w),g=m(g,R);return[a,l,v,g]}function dt(h){var O,d="",T=h.length*32;for(O=0;O<T;O+=8)d+=String.fromCharCode(h[O>>5]>>>O%32&255);return d}function ct(h){var O,d=[];for(d[(h.length>>2)-1]=void 0,O=0;O<d.length;O+=1)d[O]=0;var T=h.length*8;for(O=0;O<T;O+=8)d[O>>5]|=(h.charCodeAt(O/8)&255)<<O%32;return d}function wt(h){return dt(k(ct(h),h.length*8))}function Et(h,O){var d,T=ct(h),y=[],w=[],R;for(y[15]=w[15]=void 0,T.length>16&&(T=k(T,h.length*8)),d=0;d<16;d+=1)y[d]=T[d]^909522486,w[d]=T[d]^1549556828;return R=k(y.concat(ct(O)),512+O.length*8),dt(k(w.concat(R),640))}function X(h){var O="0123456789abcdef",d="",T,y;for(y=0;y<h.length;y+=1)T=h.charCodeAt(y),d+=O.charAt(T>>>4&15)+O.charAt(T&15);return d}function tt(h){return unescape(encodeURIComponent(h))}function qt(h){return wt(tt(h))}function jt(h){return X(qt(h))}function Mt(h,O){return Et(tt(h),tt(O))}function At(h,O){return X(Mt(h,O))}function Pt(h,O,d){return O?d?Mt(O,h):At(O,h):d?qt(h):jt(h)}typeof define=="function"&&define.amd?define(function(){return Pt}):typeof On=="object"&&On.exports?On.exports=Pt:p.md5=Pt})(Ke)});var He=Dt((vu,$e)=>{"use strict";q();function ru(p,m){return Object.prototype.hasOwnProperty.call(p,m)}$e.exports=function(p,m,x,j){m=m||"&",x=x||"=";var _={};if(typeof p!="string"||p.length===0)return _;var F=/\+/g;p=p.split(m);var P=1e3;j&&typeof j.maxKeys=="number"&&(P=j.maxKeys);var z=p.length;P>0&&z>P&&(z=P);for(var k=0;k<z;++k){var dt=p[k].replace(F,"%20"),ct=dt.indexOf(x),wt,Et,X,tt;ct>=0?(wt=dt.substr(0,ct),Et=dt.substr(ct+1)):(wt=dt,Et=""),X=decodeURIComponent(wt),tt=decodeURIComponent(Et),ru(_,X)?Array.isArray(_[X])?_[X].push(tt):_[X]=[_[X],tt]:_[X]=tt}return _}});var Be=Dt((yu,We)=>{"use strict";q();var on=function(p){switch(typeof p){case"string":return p;case"boolean":return p?"true":"false";case"number":return isFinite(p)?p:"";default:return""}};We.exports=function(p,m,x,j){return m=m||"&",x=x||"=",p===null&&(p=void 0),typeof p=="object"?Object.keys(p).map(function(_){var F=encodeURIComponent(on(_))+x;return Array.isArray(p[_])?p[_].map(function(P){return F+encodeURIComponent(on(P))}).join(m):F+encodeURIComponent(on(p[_]))}).join(m):j?encodeURIComponent(on(j))+x+encodeURIComponent(on(p)):""}});var Ae=Dt(ln=>{"use strict";q();ln.decode=ln.parse=He();ln.encode=ln.stringify=Be()});var Xe=Dt((Ru,Qe)=>{q();var iu=Ye(),uu=Ae(),su=/^[0-9a-f]{32}$/;function fu(p){var m={},x={protocol:1,format:1};for(var j in p)x[j]||(m[j]=p[j]);return m}function Ve(p,m){if(p)return typeof p.protocol=="boolean"?p.protocol:p.protocol==="http"?!1:p.protocol==="https"?!0:void 0}function Ge(p){return p=typeof p=="string"?p.trim().toLowerCase():"unspecified",p.match(su)?p:iu(p)}function Je(p){var m=uu.stringify(fu(p));return m&&"?"+m||""}var bu=Qe.exports={url:function(p,m,x){var j="//www.gravatar.com/avatar/";m&&m.cdn?(j=m.cdn+"/avatar/",delete m.cdn):(m&&m.protocol&&(x=Ve(m)),typeof x<"u"&&(j=x?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var _=Je(m);return j+Ge(p)+_},profile_url:function(p,m,x){var j=m!=null&&m.format!=null?String(m.format):"json",_;if(m&&m.cdn)_=m.cdn+"/",delete m.cdn;else{m&&m.protocol&&(x=Ve(m));var _=x&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var F=Je(m);return _+Ge(p)+"."+j+F}}});var ke=Dt((Ou,Ze)=>{q();Ze.exports=Xe()});var tr=Dt((Bt,hn)=>{q();(function(){var p,m=[],x=[],j=0,_=+new Date+"",F=75,P=40,z=` 	\v\f\xA0\uFEFF
\r\u2028\u2029\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000`,k=/\b__p \+= '';/g,dt=/\b(__p \+=) '' \+/g,ct=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Et=/\w*$/,X=/^\s*function[ \n\r\t]+\w/,tt=/<%=([\s\S]+?)%>/g,qt=RegExp("^["+z+"]*0+(?=.$)"),jt=/($^)/,Mt=/\bthis\b/,At=/['\n\r\t\u2028\u2029\\]/g,Pt=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],h=0,O="[object Arguments]",d="[object Array]",T="[object Boolean]",y="[object Date]",w="[object Function]",R="[object Number]",a="[object Object]",l="[object RegExp]",v="[object String]",g={};g[w]=!1,g[O]=g[d]=g[T]=g[y]=g[R]=g[a]=g[l]=g[v]=!0;var N={leading:!1,maxWait:0,trailing:!1},U={configurable:!1,enumerable:!1,value:null,writable:!1},Y={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1},gt={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},L=Y[typeof window]&&window||this,V=Y[typeof Bt]&&Bt&&!Bt.nodeType&&Bt,vt=Y[typeof hn]&&hn&&!hn.nodeType&&hn,Vt=vt&&vt.exports===V&&V,nt=Y[typeof globalThis]&&globalThis;nt&&(nt.global===nt||nt.window===nt)&&(L=nt);function _t(E,I,M){for(var K=(M||0)-1,H=E?E.length:0;++K<H;)if(E[K]===I)return K;return-1}function Kt(E,I){var M=typeof I;if(E=E.cache,M=="boolean"||I==null)return E[I]?0:-1;M!="number"&&M!="string"&&(M="object");var K=M=="number"?I:_+I;return E=(E=E[M])&&E[K],M=="object"?E&&_t(E,I)>-1?0:-1:E?0:-1}function sr(E){var I=this.cache,M=typeof E;if(M=="boolean"||E==null)I[E]=!0;else{M!="number"&&M!="string"&&(M="object");var K=M=="number"?E:_+E,H=I[M]||(I[M]={});M=="object"?(H[K]||(H[K]=[])).push(E):H[K]=!0}}function Xn(E){return E.charCodeAt(0)}function fr(E,I){for(var M=E.criteria,K=I.criteria,H=-1,at=M.length;++H<at;){var ht=M[H],G=K[H];if(ht!==G){if(ht>G||typeof ht>"u")return 1;if(ht<G||typeof G>"u")return-1}}return E.index-I.index}function Sn(E){var I=-1,M=E.length,K=E[0],H=E[M/2|0],at=E[M-1];if(K&&typeof K=="object"&&H&&typeof H=="object"&&at&&typeof at=="object")return!1;var ht=xn();ht.false=ht.null=ht.true=ht.undefined=!1;var G=xn();for(G.array=E,G.cache=ht,G.push=sr;++I<M;)G.push(E[I]);return G}function ar(E){return"\\"+gt[E]}function Ct(){return m.pop()||[]}function xn(){return x.pop()||{array:null,cache:null,criteria:null,false:!1,index:0,null:!1,number:null,object:null,push:null,string:null,true:!1,undefined:!1,value:null}}function mt(E){E.length=0,m.length<P&&m.push(E)}function Gt(E){var I=E.cache;I&&Gt(I),E.array=E.cache=E.criteria=E.object=E.number=E.string=E.value=null,x.length<P&&x.push(E)}function $(E,I,M){I||(I=0),typeof M>"u"&&(M=E?E.length:0);for(var K=-1,H=M-I||0,at=Array(H<0?0:H);++K<H;)at[K]=E[I+K];return at}function Dn(E){E=E?Tt.defaults(L.Object(),E,Tt.pick(L,Pt)):L;var I=E.Array,M=E.Boolean,K=E.Date,H=E.Function,at=E.Math,ht=E.Number,G=E.Object,Jt=E.RegExp,It=E.String,Ot=E.TypeError,Yt=[],Zn=G.prototype,or=E._,et=Zn.toString,lr=Jt("^"+It(et).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),hr=at.ceil,dn=E.clearTimeout,pr=at.floor,dr=H.prototype.toString,$t=Ft($t=G.getPrototypeOf)&&$t,rt=Zn.hasOwnProperty,Qt=Yt.push,Xt=E.setTimeout,kn=Yt.splice,cr=Yt.unshift,te=(function(){try{var t={},n=Ft(n=G.defineProperty)&&n,e=n(t,t,t)&&n}catch{}return e})(),cn=Ft(cn=G.create)&&cn,jn=Ft(jn=I.isArray)&&jn,gr=E.isFinite,vr=E.isNaN,gn=Ft(gn=G.keys)&&gn,yt=at.max,Zt=at.min,Tn=E.parseInt,ne=at.random,St={};St[d]=I,St[T]=M,St[y]=K,St[w]=H,St[a]=G,St[R]=ht,St[l]=Jt,St[v]=It;function s(t){return t&&typeof t=="object"&&!Z(t)&&rt.call(t,"__wrapped__")?t:new zt(t)}function zt(t,n){this.__chain__=!!n,this.__wrapped__=t}zt.prototype=s.prototype;var kt=s.support={};kt.funcDecomp=!Ft(E.WinRTError)&&Mt.test(Dn),kt.funcNames=typeof H.name=="string",s.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:tt,variable:"",imports:{_:s}};function mr(t){var n=t[0],e=t[2],r=t[4];function i(){if(e){var u=$(e);Qt.apply(u,arguments)}if(this instanceof i){var f=tn(n.prototype),o=n.apply(f,u||arguments);return ut(o)?o:f}return n.apply(r,u||arguments)}return Pn(i,t),i}function In(t,n,e,r,i){if(e){var u=e(t);if(typeof u<"u")return u}var f=ut(t);if(f){var o=et.call(t);if(!g[o])return t;var c=St[o];switch(o){case T:case y:return new c(+t);case R:case v:return new c(t);case l:return u=c(t.source,Et.exec(t)),u.lastIndex=t.lastIndex,u}}else return t;var b=Z(t);if(n){var C=!r;r||(r=Ct()),i||(i=Ct());for(var D=r.length;D--;)if(r[D]==t)return i[D];u=b?c(t.length):{}}else u=b?$(t):yn({},t);return b&&(rt.call(t,"index")&&(u.index=t.index),rt.call(t,"input")&&(u.input=t.input)),n&&(r.push(t),i.push(u),(b?st:A)(t,function(S,W){u[W]=In(S,n,e,r,i)}),C&&(mt(r),mt(i))),u}function tn(t,n){return ut(t)?cn(t):{}}cn||(tn=(function(){function t(){}return function(n){if(ut(n)){t.prototype=n;var e=new t;t.prototype=null}return e||E.Object()}})());function ot(t,n,e){if(typeof t!="function")return Wn;if(typeof n>"u"||!("prototype"in t))return t;var r=t.__bindData__;if(typeof r>"u"&&(kt.funcNames&&(r=!t.name),r=r||!kt.funcDecomp,!r)){var i=dr.call(t);kt.funcNames||(r=!X.test(i)),r||(r=Mt.test(i),Pn(t,r))}if(r===!1||r!==!0&&r[1]&1)return t;switch(e){case 1:return function(u){return t.call(n,u)};case 2:return function(u,f){return t.call(n,u,f)};case 3:return function(u,f,o){return t.call(n,u,f,o)};case 4:return function(u,f,o,c){return t.call(n,u,f,o,c)}}return _e(t,n)}function ee(t){var n=t[0],e=t[1],r=t[2],i=t[3],u=t[4],f=t[5],o=e&1,c=e&2,b=e&4,C=e&8,D=n;function S(){var W=o?u:this;if(r){var B=$(r);Qt.apply(B,arguments)}if((i||b)&&(B||(B=$(arguments)),i&&Qt.apply(B,i),b&&B.length<f))return e|=16,ee([n,C?e:e&-4,B,null,u,f]);if(B||(B=arguments),c&&(n=W[D]),this instanceof S){W=tn(n.prototype);var lt=n.apply(W,B);return ut(lt)?lt:W}return n.apply(W,B)}return Pn(S,t),S}function nn(t,n){var e=-1,r=vn(),i=t?t.length:0,u=i>=F&&r===_t,f=[];if(u){var o=Sn(n);o?(r=Kt,n=o):u=!1}for(;++e<i;){var c=t[e];r(n,c)<0&&f.push(c)}return u&&Gt(n),f}function Ut(t,n,e,r){for(var i=(r||0)-1,u=t?t.length:0,f=[];++i<u;){var o=t[i];if(o&&typeof o=="object"&&typeof o.length=="number"&&(Z(o)||mn(o))){n||(o=Ut(o,n,e));var c=-1,b=o.length,C=f.length;for(f.length+=b;++c<b;)f[C++]=o[c]}else e||f.push(o)}return f}function Ht(t,n,e,r,i,u){if(e){var f=e(t,n);if(typeof f<"u")return!!f}if(t===n)return t!==0||1/t==1/n;var o=typeof t,c=typeof n;if(t===t&&!(t&&Y[o])&&!(n&&Y[c]))return!1;if(t==null||n==null)return t===n;var b=et.call(t),C=et.call(n);if(b==O&&(b=a),C==O&&(C=a),b!=C)return!1;switch(b){case T:case y:return+t==+n;case R:return t!=+t?n!=+n:t==0?1/t==1/n:t==+n;case l:case v:return t==It(n)}var D=b==d;if(!D){var S=rt.call(t,"__wrapped__"),W=rt.call(n,"__wrapped__");if(S||W)return Ht(S?t.__wrapped__:t,W?n.__wrapped__:n,e,r,i,u);if(b!=a)return!1;var B=t.constructor,lt=n.constructor;if(B!=lt&&!(J(B)&&B instanceof B&&J(lt)&&lt instanceof lt)&&"constructor"in t&&"constructor"in n)return!1}var pt=!i;i||(i=Ct()),u||(u=Ct());for(var ft=i.length;ft--;)if(i[ft]==t)return u[ft]==n;var Q=0;if(f=!0,i.push(t),u.push(n),D){if(ft=t.length,Q=n.length,f=Q==ft,f||r)for(;Q--;){var bn=ft,sn=n[Q];if(r)for(;bn--&&!(f=Ht(t[bn],sn,e,r,i,u)););else if(!(f=Ht(t[Q],sn,e,r,i,u)))break}}else xt(n,function(fn,an,An){if(rt.call(An,an))return Q++,f=rt.call(t,an)&&Ht(t[an],fn,e,r,i,u)}),f&&!r&&xt(t,function(fn,an,An){if(rt.call(An,an))return f=--Q>-1});return i.pop(),u.pop(),pt&&(mt(i),mt(u)),f}function re(t,n,e,r,i){(Z(n)?st:A)(n,function(u,f){var o,c,b=u,C=t[f];if(u&&((c=Z(u))||Ln(u))){for(var D=r.length;D--;)if(o=r[D]==u){C=i[D];break}if(!o){var S;e&&(b=e(C,u),(S=typeof b<"u")&&(C=b)),S||(C=c?Z(C)?C:[]:Ln(C)?C:{}),r.push(u),i.push(C),S||re(C,u,e,r,i)}}else e&&(b=e(C,u),typeof b>"u"&&(b=u)),typeof b<"u"&&(C=b);t[f]=C})}function Un(t,n){return t+pr(ne()*(n-t+1))}function Fn(t,n,e){var r=-1,i=vn(),u=t?t.length:0,f=[],o=!n&&u>=F&&i===_t,c=e||o?Ct():f;if(o){var b=Sn(c);i=Kt,c=b}for(;++r<u;){var C=t[r],D=e?e(C,r,t):C;(n?!r||c[c.length-1]!==D:i(c,D)<0)&&((e||o)&&c.push(D),f.push(C))}return o?(mt(c.array),Gt(c)):e&&mt(c),f}function Mn(t){return function(n,e,r){var i={};e=s.createCallback(e,r,3);var u=-1,f=n?n.length:0;if(typeof f=="number")for(;++u<f;){var o=n[u];t(i,o,e(o,u,n),n)}else A(n,function(c,b,C){t(i,c,e(c,b,C),C)});return i}}function bt(t,n,e,r,i,u){var f=n&1,o=n&2,c=n&4,b=n&8,C=n&16,D=n&32;if(!o&&!J(t))throw new Ot;C&&!e.length&&(n&=-17,C=e=!1),D&&!r.length&&(n&=-33,D=r=!1);var S=t&&t.__bindData__;if(S&&S!==!0)return S=$(S),S[2]&&(S[2]=$(S[2])),S[3]&&(S[3]=$(S[3])),f&&!(S[1]&1)&&(S[4]=i),!f&&S[1]&1&&(n|=8),c&&!(S[1]&4)&&(S[5]=u),C&&Qt.apply(S[2]||(S[2]=[]),e),D&&cr.apply(S[3]||(S[3]=[]),r),S[1]|=n,bt.apply(null,S);var W=n==1||n===17?mr:ee;return W([t,n,e,r,i,u])}function yr(t){return zn[t]}function vn(){var t=(t=s.indexOf)===ge?_t:t;return t}function Ft(t){return typeof t=="function"&&lr.test(t)}var Pn=te?function(t,n){U.value=n,te(t,"__bindData__",U),U.value=null}:be;function ie(t){var n,e;return!(t&&et.call(t)==a)||(n=t.constructor,J(n)&&!(n instanceof n))?!1:(xt(t,function(r,i){e=i}),typeof e>"u"||rt.call(t,e))}function wr(t){return ue[t]}function mn(t){return t&&typeof t=="object"&&typeof t.length=="number"&&et.call(t)==O||!1}var Z=jn||function(t){return t&&typeof t=="object"&&typeof t.length=="number"&&et.call(t)==d||!1},_r=function(t){var n,e=t,r=[];if(!e||!Y[typeof t])return r;for(n in e)rt.call(e,n)&&r.push(n);return r},it=gn?function(t){return ut(t)?gn(t):[]}:_r,zn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ue=fe(zn),Cr=Jt("("+it(ue).join("|")+")","g"),br=Jt("["+it(zn).join("")+"]","g"),yn=function(t,n,e){var r,i=t,u=i;if(!i)return u;var f=arguments,o=0,c=typeof e=="number"?2:f.length;if(c>3&&typeof f[c-2]=="function")var b=ot(f[--c-1],f[c--],2);else c>2&&typeof f[c-1]=="function"&&(b=f[--c]);for(;++o<c;)if(i=f[o],i&&Y[typeof i])for(var C=-1,D=Y[typeof i]&&it(i),S=D?D.length:0;++C<S;)r=D[C],u[r]=b?b(u[r],i[r]):i[r];return u};function Rr(t,n,e,r){return typeof n!="boolean"&&n!=null&&(r=e,e=n,n=!1),In(t,n,typeof e=="function"&&ot(e,r,1))}function Er(t,n,e){return In(t,!0,typeof n=="function"&&ot(n,e,1))}function Or(t,n){var e=tn(t);return n?yn(e,n):e}var Nn=function(t,n,e){var r,i=t,u=i;if(!i)return u;for(var f=arguments,o=0,c=typeof e=="number"?2:f.length;++o<c;)if(i=f[o],i&&Y[typeof i])for(var b=-1,C=Y[typeof i]&&it(i),D=C?C.length:0;++b<D;)r=C[b],typeof u[r]>"u"&&(u[r]=i[r]);return u};function Sr(t,n,e){var r;return n=s.createCallback(n,e,3),A(t,function(i,u,f){if(n(i,u,f))return r=u,!1}),r}function xr(t,n,e){var r;return n=s.createCallback(n,e,3),se(t,function(i,u,f){if(n(i,u,f))return r=u,!1}),r}var xt=function(t,n,e){var r,i=t,u=i;if(!i||!Y[typeof i])return u;n=n&&typeof e>"u"?n:ot(n,e,3);for(r in i)if(n(i[r],r,t)===!1)return u;return u};function Dr(t,n,e){var r=[];xt(t,function(u,f){r.push(f,u)});var i=r.length;for(n=ot(n,e,3);i--&&n(r[i--],r[i],t)!==!1;);return t}var A=function(t,n,e){var r,i=t,u=i;if(!i||!Y[typeof i])return u;n=n&&typeof e>"u"?n:ot(n,e,3);for(var f=-1,o=Y[typeof i]&&it(i),c=o?o.length:0;++f<c;)if(r=o[f],n(i[r],r,t)===!1)return u;return u};function se(t,n,e){var r=it(t),i=r.length;for(n=ot(n,e,3);i--;){var u=r[i];if(n(t[u],u,t)===!1)break}return t}function en(t){var n=[];return xt(t,function(e,r){J(e)&&n.push(r)}),n.sort()}function jr(t,n){return t?rt.call(t,n):!1}function fe(t){for(var n=-1,e=it(t),r=e.length,i={};++n<r;){var u=e[n];i[t[u]]=u}return i}function Tr(t){return t===!0||t===!1||t&&typeof t=="object"&&et.call(t)==T||!1}function Ir(t){return t&&typeof t=="object"&&et.call(t)==y||!1}function Ur(t){return t&&t.nodeType===1||!1}function Fr(t){var n=!0;if(!t)return n;var e=et.call(t),r=t.length;return e==d||e==v||e==O||e==a&&typeof r=="number"&&J(t.splice)?!r:(A(t,function(){return n=!1}),n)}function Mr(t,n,e,r){return Ht(t,n,typeof e=="function"&&ot(e,r,2))}function Pr(t){return gr(t)&&!vr(parseFloat(t))}function J(t){return typeof t=="function"}function ut(t){return!!(t&&Y[typeof t])}function zr(t){return ae(t)&&t!=+t}function Nr(t){return t===null}function ae(t){return typeof t=="number"||t&&typeof t=="object"&&et.call(t)==R||!1}var Ln=$t?function(t){if(!(t&&et.call(t)==a))return!1;var n=t.valueOf,e=Ft(n)&&(e=$t(n))&&$t(e);return e?t==e||$t(t)==e:ie(t)}:ie;function Lr(t){return t&&typeof t=="object"&&et.call(t)==l||!1}function rn(t){return typeof t=="string"||t&&typeof t=="object"&&et.call(t)==v||!1}function qr(t){return typeof t>"u"}function Kr(t,n,e){var r={};return n=s.createCallback(n,e,3),A(t,function(i,u,f){r[u]=n(i,u,f)}),r}function Yr(t){var n=arguments,e=2;if(!ut(t))return t;if(typeof n[2]!="number"&&(e=n.length),e>3&&typeof n[e-2]=="function")var r=ot(n[--e-1],n[e--],2);else e>2&&typeof n[e-1]=="function"&&(r=n[--e]);for(var i=$(arguments,1,e),u=-1,f=Ct(),o=Ct();++u<e;)re(t,i[u],r,f,o);return mt(f),mt(o),t}function $r(t,n,e){var r={};if(typeof n!="function"){var i=[];xt(t,function(c,b){i.push(b)}),i=nn(i,Ut(arguments,!0,!1,1));for(var u=-1,f=i.length;++u<f;){var o=i[u];r[o]=t[o]}}else n=s.createCallback(n,e,3),xt(t,function(c,b,C){n(c,b,C)||(r[b]=c)});return r}function Hr(t){for(var n=-1,e=it(t),r=e.length,i=I(r);++n<r;){var u=e[n];i[n]=[u,t[u]]}return i}function Wr(t,n,e){var r={};if(typeof n!="function")for(var i=-1,u=Ut(arguments,!0,!1,1),f=ut(t)?u.length:0;++i<f;){var o=u[i];o in t&&(r[o]=t[o])}else n=s.createCallback(n,e,3),xt(t,function(c,b,C){n(c,b,C)&&(r[b]=c)});return r}function Br(t,n,e,r){var i=Z(t);if(e==null)if(i)e=[];else{var u=t&&t.constructor,f=u&&u.prototype;e=tn(f)}return n&&(n=s.createCallback(n,r,4),(i?st:A)(t,function(o,c,b){return n(e,o,c,b)})),e}function wn(t){for(var n=-1,e=it(t),r=e.length,i=I(r);++n<r;)i[n]=t[e[n]];return i}function Ar(t){for(var n=arguments,e=-1,r=Ut(n,!0,!1,1),i=n[2]&&n[2][n[1]]===t?1:r.length,u=I(i);++e<i;)u[e]=t[r[e]];return u}function oe(t,n,e){var r=-1,i=vn(),u=t?t.length:0,f=!1;return e=(e<0?yt(0,u+e):e)||0,Z(t)?f=i(t,n,e)>-1:typeof u=="number"?f=(rn(t)?t.indexOf(n,e):i(t,n,e))>-1:A(t,function(o){if(++r>=e)return!(f=o===n)}),f}var Vr=Mn(function(t,n,e){rt.call(t,e)?t[e]++:t[e]=1});function le(t,n,e){var r=!0;n=s.createCallback(n,e,3);var i=-1,u=t?t.length:0;if(typeof u=="number")for(;++i<u&&(r=!!n(t[i],i,t)););else A(t,function(f,o,c){return r=!!n(f,o,c)});return r}function _n(t,n,e){var r=[];n=s.createCallback(n,e,3);var i=-1,u=t?t.length:0;if(typeof u=="number")for(;++i<u;){var f=t[i];n(f,i,t)&&r.push(f)}else A(t,function(o,c,b){n(o,c,b)&&r.push(o)});return r}function qn(t,n,e){n=s.createCallback(n,e,3);var r=-1,i=t?t.length:0;if(typeof i=="number")for(;++r<i;){var u=t[r];if(n(u,r,t))return u}else{var f;return A(t,function(o,c,b){if(n(o,c,b))return f=o,!1}),f}}function Gr(t,n,e){var r;return n=s.createCallback(n,e,3),Cn(t,function(i,u,f){if(n(i,u,f))return r=i,!1}),r}function st(t,n,e){var r=-1,i=t?t.length:0;if(n=n&&typeof e>"u"?n:ot(n,e,3),typeof i=="number")for(;++r<i&&n(t[r],r,t)!==!1;);else A(t,n);return t}function Cn(t,n,e){var r=t?t.length:0;if(n=n&&typeof e>"u"?n:ot(n,e,3),typeof r=="number")for(;r--&&n(t[r],r,t)!==!1;);else{var i=it(t);r=i.length,A(t,function(u,f,o){return f=i?i[--r]:--r,n(o[f],f,o)})}return t}var Jr=Mn(function(t,n,e){(rt.call(t,e)?t[e]:t[e]=[]).push(n)}),Qr=Mn(function(t,n,e){t[e]=n});function Xr(t,n){var e=$(arguments,2),r=-1,i=typeof n=="function",u=t?t.length:0,f=I(typeof u=="number"?u:0);return st(t,function(o){f[++r]=(i?n:o[n]).apply(o,e)}),f}function un(t,n,e){var r=-1,i=t?t.length:0;if(n=s.createCallback(n,e,3),typeof i=="number")for(var u=I(i);++r<i;)u[r]=n(t[r],r,t);else u=[],A(t,function(f,o,c){u[++r]=n(f,o,c)});return u}function he(t,n,e){var r=-1/0,i=r;if(typeof n!="function"&&e&&e[n]===t&&(n=null),n==null&&Z(t))for(var u=-1,f=t.length;++u<f;){var o=t[u];o>i&&(i=o)}else n=n==null&&rn(t)?Xn:s.createCallback(n,e,3),st(t,function(c,b,C){var D=n(c,b,C);D>r&&(r=D,i=c)});return i}function Zr(t,n,e){var r=1/0,i=r;if(typeof n!="function"&&e&&e[n]===t&&(n=null),n==null&&Z(t))for(var u=-1,f=t.length;++u<f;){var o=t[u];o<i&&(i=o)}else n=n==null&&rn(t)?Xn:s.createCallback(n,e,3),st(t,function(c,b,C){var D=n(c,b,C);D<r&&(r=D,i=c)});return i}var Kn=un;function Yn(t,n,e,r){if(!t)return e;var i=arguments.length<3;n=s.createCallback(n,r,4);var u=-1,f=t.length;if(typeof f=="number")for(i&&(e=t[++u]);++u<f;)e=n(e,t[u],u,t);else A(t,function(o,c,b){e=i?(i=!1,o):n(e,o,c,b)});return e}function pe(t,n,e,r){var i=arguments.length<3;return n=s.createCallback(n,r,4),Cn(t,function(u,f,o){e=i?(i=!1,u):n(e,u,f,o)}),e}function kr(t,n,e){return n=s.createCallback(n,e,3),_n(t,function(r,i,u){return!n(r,i,u)})}function ti(t,n,e){if(t&&typeof t.length!="number"&&(t=wn(t)),n==null||e)return t?t[Un(0,t.length-1)]:p;var r=de(t);return r.length=Zt(yt(0,n),r.length),r}function de(t){var n=-1,e=t?t.length:0,r=I(typeof e=="number"?e:0);return st(t,function(i){var u=Un(0,++n);r[n]=r[u],r[u]=i}),r}function ni(t){var n=t?t.length:0;return typeof n=="number"?n:it(t).length}function ce(t,n,e){var r;n=s.createCallback(n,e,3);var i=-1,u=t?t.length:0;if(typeof u=="number")for(;++i<u&&!(r=n(t[i],i,t)););else A(t,function(f,o,c){return!(r=n(f,o,c))});return!!r}function ei(t,n,e){var r=-1,i=Z(n),u=t?t.length:0,f=I(typeof u=="number"?u:0);for(i||(n=s.createCallback(n,e,3)),st(t,function(c,b,C){var D=f[++r]=xn();i?D.criteria=un(n,function(S){return c[S]}):(D.criteria=Ct())[0]=n(c,b,C),D.index=r,D.value=c}),u=f.length,f.sort(fr);u--;){var o=f[u];f[u]=o.value,i||mt(o.criteria),Gt(o)}return f}function ri(t){return t&&typeof t.length=="number"?$(t):wn(t)}var ii=_n;function ui(t){for(var n=-1,e=t?t.length:0,r=[];++n<e;){var i=t[n];i&&r.push(i)}return r}function si(t){return nn(t,Ut(arguments,!0,!0,1))}function fi(t,n,e){var r=-1,i=t?t.length:0;for(n=s.createCallback(n,e,3);++r<i;)if(n(t[r],r,t))return r;return-1}function ai(t,n,e){var r=t?t.length:0;for(n=s.createCallback(n,e,3);r--;)if(n(t[r],r,t))return r;return-1}function $n(t,n,e){var r=0,i=t?t.length:0;if(typeof n!="number"&&n!=null){var u=-1;for(n=s.createCallback(n,e,3);++u<i&&n(t[u],u,t);)r++}else if(r=n,r==null||e)return t?t[0]:p;return $(t,0,Zt(yt(0,r),i))}function oi(t,n,e,r){return typeof n!="boolean"&&n!=null&&(r=e,e=typeof n!="function"&&r&&r[n]===t?null:n,n=!1),e!=null&&(t=un(t,e,r)),Ut(t,n)}function ge(t,n,e){if(typeof e=="number"){var r=t?t.length:0;e=e<0?yt(0,r+e):e||0}else if(e){var i=ve(t,n);return t[i]===n?i:-1}return _t(t,n,e)}function li(t,n,e){var r=0,i=t?t.length:0;if(typeof n!="number"&&n!=null){var u=i;for(n=s.createCallback(n,e,3);u--&&n(t[u],u,t);)r++}else r=n==null||e?1:n||r;return $(t,0,Zt(yt(0,i-r),i))}function hi(){for(var t=[],n=-1,e=arguments.length,r=Ct(),i=vn(),u=i===_t,f=Ct();++n<e;){var o=arguments[n];(Z(o)||mn(o))&&(t.push(o),r.push(u&&o.length>=F&&Sn(n?t[n]:f)))}var c=t[0],b=-1,C=c?c.length:0,D=[];t:for(;++b<C;){var S=r[0];if(o=c[b],(S?Kt(S,o):i(f,o))<0){for(n=e,(S||f).push(o);--n;)if(S=r[n],(S?Kt(S,o):i(t[n],o))<0)continue t;D.push(o)}}for(;e--;)S=r[e],S&&Gt(S);return mt(r),mt(f),D}function pi(t,n,e){var r=0,i=t?t.length:0;if(typeof n!="number"&&n!=null){var u=i;for(n=s.createCallback(n,e,3);u--&&n(t[u],u,t);)r++}else if(r=n,r==null||e)return t?t[i-1]:p;return $(t,yt(0,i-r))}function di(t,n,e){var r=t?t.length:0;for(typeof e=="number"&&(r=(e<0?yt(0,r+e):Zt(e,r-1))+1);r--;)if(t[r]===n)return r;return-1}function ci(t){for(var n=arguments,e=0,r=n.length,i=t?t.length:0;++e<r;)for(var u=-1,f=n[e];++u<i;)t[u]===f&&(kn.call(t,u--,1),i--);return t}function gi(t,n,e){t=+t||0,e=typeof e=="number"?e:+e||1,n==null&&(n=t,t=0);for(var r=-1,i=yt(0,hr((n-t)/(e||1))),u=I(i);++r<i;)u[r]=t,t+=e;return u}function vi(t,n,e){var r=-1,i=t?t.length:0,u=[];for(n=s.createCallback(n,e,3);++r<i;){var f=t[r];n(f,r,t)&&(u.push(f),kn.call(t,r--,1),i--)}return u}function Hn(t,n,e){if(typeof n!="number"&&n!=null){var r=0,i=-1,u=t?t.length:0;for(n=s.createCallback(n,e,3);++i<u&&n(t[i],i,t);)r++}else r=n==null||e?1:yt(0,n);return $(t,r)}function ve(t,n,e,r){var i=0,u=t?t.length:i;for(e=e?s.createCallback(e,r,1):Wn,n=e(n);i<u;){var f=i+u>>>1;e(t[f])<n?i=f+1:u=f}return i}function mi(){return Fn(Ut(arguments,!0,!0))}function me(t,n,e,r){return typeof n!="boolean"&&n!=null&&(r=e,e=typeof n!="function"&&r&&r[n]===t?null:n,n=!1),e!=null&&(e=s.createCallback(e,r,3)),Fn(t,n,e)}function yi(t){return nn(t,$(arguments,1))}function wi(){for(var t=-1,n=arguments.length;++t<n;){var e=arguments[t];if(Z(e)||mn(e))var r=r?Fn(nn(r,e).concat(nn(e,r))):e}return r||[]}function ye(){for(var t=arguments.length>1?arguments:arguments[0],n=-1,e=t?he(Kn(t,"length")):0,r=I(e<0?0:e);++n<e;)r[n]=Kn(t,n);return r}function we(t,n){var e=-1,r=t?t.length:0,i={};for(!n&&r&&!Z(t[0])&&(n=[]);++e<r;){var u=t[e];n?i[u]=n[e]:u&&(i[u[0]]=u[1])}return i}function _i(t,n){if(!J(n))throw new Ot;return function(){if(--t<1)return n.apply(this,arguments)}}function _e(t,n){return arguments.length>2?bt(t,17,$(arguments,2),null,n):bt(t,1,null,null,n)}function Ci(t){for(var n=arguments.length>1?Ut(arguments,!0,!1,1):en(t),e=-1,r=n.length;++e<r;){var i=n[e];t[i]=bt(t[i],1,null,null,t)}return t}function bi(t,n){return arguments.length>2?bt(n,19,$(arguments,2),null,t):bt(n,3,null,null,t)}function Ri(){for(var t=arguments,n=t.length;n--;)if(!J(t[n]))throw new Ot;return function(){for(var e=arguments,r=t.length;r--;)e=[t[r].apply(this,e)];return e[0]}}function Ei(t,n){return n=typeof n=="number"?n:+n||t.length,bt(t,4,null,null,null,n)}function Ce(t,n,e){var r,i,u,f,o,c,b,C=0,D=!1,S=!0;if(!J(t))throw new Ot;if(n=yt(0,n)||0,e===!0){var W=!0;S=!1}else ut(e)&&(W=e.leading,D="maxWait"in e&&(yt(n,e.maxWait)||0),S="trailing"in e?e.trailing:S);var B=function(){var pt=n-(Nt()-f);if(pt<=0){i&&dn(i);var ft=b;i=c=b=p,ft&&(C=Nt(),u=t.apply(o,r),!c&&!i&&(r=o=null))}else c=Xt(B,pt)},lt=function(){c&&dn(c),i=c=b=p,(S||D!==n)&&(C=Nt(),u=t.apply(o,r),!c&&!i&&(r=o=null))};return function(){if(r=arguments,f=Nt(),o=this,b=S&&(c||!W),D===!1)var pt=W&&!c;else{!i&&!W&&(C=f);var ft=D-(f-C),Q=ft<=0;Q?(i&&(i=dn(i)),C=f,u=t.apply(o,r)):i||(i=Xt(lt,ft))}return Q&&c?c=dn(c):!c&&n!==D&&(c=Xt(B,n)),pt&&(Q=!0,u=t.apply(o,r)),Q&&!c&&!i&&(r=o=null),u}}function Oi(t){if(!J(t))throw new Ot;var n=$(arguments,1);return Xt(function(){t.apply(p,n)},1)}function Si(t,n){if(!J(t))throw new Ot;var e=$(arguments,2);return Xt(function(){t.apply(p,e)},n)}function xi(t,n){if(!J(t))throw new Ot;var e=function(){var r=e.cache,i=n?n.apply(this,arguments):_+arguments[0];return rt.call(r,i)?r[i]:r[i]=t.apply(this,arguments)};return e.cache={},e}function Di(t){var n,e;if(!J(t))throw new Ot;return function(){return n||(n=!0,e=t.apply(this,arguments),t=null),e}}function ji(t){return bt(t,16,$(arguments,1))}function Ti(t){return bt(t,32,null,$(arguments,1))}function Ii(t,n,e){var r=!0,i=!0;if(!J(t))throw new Ot;return e===!1?r=!1:ut(e)&&(r="leading"in e?e.leading:r,i="trailing"in e?e.trailing:i),N.leading=r,N.maxWait=n,N.trailing=i,Ce(t,n,N)}function Ui(t,n){return bt(n,16,[t])}function Fi(t){return function(){return t}}function Mi(t,n,e){var r=typeof t;if(t==null||r=="function")return ot(t,n,e);if(r!="object")return Re(t);var i=it(t),u=i[0],f=t[u];return i.length==1&&f===f&&!ut(f)?function(o){var c=o[u];return f===c&&(f!==0||1/f==1/c)}:function(o){for(var c=i.length,b=!1;c--&&(b=Ht(o[i[c]],t[i[c]],null,!0)););return b}}function Pi(t){return t==null?"":It(t).replace(br,yr)}function Wn(t){return t}function Bn(t,n,e){var r=!0,i=n&&en(n);(!n||!e&&!i.length)&&(e==null&&(e=n),u=zt,n=t,t=s,i=en(n)),e===!1?r=!1:ut(e)&&"chain"in e&&(r=e.chain);var u=t,f=J(u);st(i,function(o){var c=t[o]=n[o];f&&(u.prototype[o]=function(){var b=this.__chain__,C=this.__wrapped__,D=[C];Qt.apply(D,arguments);var S=c.apply(t,D);if(r||b){if(C===S&&ut(S))return this;S=new u(S),S.__chain__=b}return S})})}function zi(){return E._=or,this}function be(){}var Nt=Ft(Nt=K.now)&&Nt||function(){return new K().getTime()},Ni=Tn(z+"08")==8?Tn:function(t,n){return Tn(rn(t)?t.replace(qt,""):t,n||0)};function Re(t){return function(n){return n[t]}}function Li(t,n,e){var r=t==null,i=n==null;if(e==null&&(typeof t=="boolean"&&i?(e=t,t=1):!i&&typeof n=="boolean"&&(e=n,i=!0)),r&&i&&(n=1),t=+t||0,i?(n=t,t=0):n=+n||0,e||t%1||n%1){var u=ne();return Zt(t+u*(n-t+parseFloat("1e-"+((u+"").length-1))),n)}return Un(t,n)}function qi(t,n){if(t){var e=t[n];return J(e)?t[n]():e}}function Ki(t,n,e){var r=s.templateSettings;t=It(t||""),e=Nn({},e,r);var i=Nn({},e.imports,r.imports),u=it(i),f=wn(i),o,c=0,b=e.interpolate||jt,C="__p += '",D=Jt((e.escape||jt).source+"|"+b.source+"|"+(b===tt?wt:jt).source+"|"+(e.evaluate||jt).source+"|$","g");t.replace(D,function(pt,ft,Q,bn,sn,fn){return Q||(Q=bn),C+=t.slice(c,fn).replace(At,ar),ft&&(C+=`' +
__e(`+ft+`) +
'`),sn&&(o=!0,C+=`';
`+sn+`;
__p += '`),Q&&(C+=`' +
((__t = (`+Q+`)) == null ? '' : __t) +
'`),c=fn+pt.length,pt}),C+=`';
`;var S=e.variable,W=S;W||(S="obj",C="with ("+S+`) {
`+C+`
}
`),C=(o?C.replace(k,""):C).replace(dt,"$1").replace(ct,"$1;"),C="function("+S+`) {
`+(W?"":S+" || ("+S+` = {});
`)+"var __t, __p = '', __e = _.escape"+(o?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+C+`return __p
}`;var B=`
/*
//# sourceURL=`+(e.sourceURL||"/lodash/template/source["+h+++"]")+`
*/`;try{var lt=H(u,"return "+C+B).apply(p,f)}catch(pt){throw pt.source=C,pt}return n?lt(n):(lt.source=C,lt)}function Yi(t,n,e){t=(t=+t)>-1?t:0;var r=-1,i=I(t);for(n=ot(n,e,1);++r<t;)i[r]=n(r);return i}function $i(t){return t==null?"":It(t).replace(Cr,wr)}function Hi(t){var n=++j;return It(t??"")+n}function Wi(t){return t=new zt(t),t.__chain__=!0,t}function Bi(t,n){return n(t),t}function Ai(){return this.__chain__=!0,this}function Vi(){return It(this.__wrapped__)}function Ee(){return this.__wrapped__}return s.after=_i,s.assign=yn,s.at=Ar,s.bind=_e,s.bindAll=Ci,s.bindKey=bi,s.chain=Wi,s.compact=ui,s.compose=Ri,s.constant=Fi,s.countBy=Vr,s.create=Or,s.createCallback=Mi,s.curry=Ei,s.debounce=Ce,s.defaults=Nn,s.defer=Oi,s.delay=Si,s.difference=si,s.filter=_n,s.flatten=oi,s.forEach=st,s.forEachRight=Cn,s.forIn=xt,s.forInRight=Dr,s.forOwn=A,s.forOwnRight=se,s.functions=en,s.groupBy=Jr,s.indexBy=Qr,s.initial=li,s.intersection=hi,s.invert=fe,s.invoke=Xr,s.keys=it,s.map=un,s.mapValues=Kr,s.max=he,s.memoize=xi,s.merge=Yr,s.min=Zr,s.omit=$r,s.once=Di,s.pairs=Hr,s.partial=ji,s.partialRight=Ti,s.pick=Wr,s.pluck=Kn,s.property=Re,s.pull=ci,s.range=gi,s.reject=kr,s.remove=vi,s.rest=Hn,s.shuffle=de,s.sortBy=ei,s.tap=Bi,s.throttle=Ii,s.times=Yi,s.toArray=ri,s.transform=Br,s.union=mi,s.uniq=me,s.values=wn,s.where=ii,s.without=yi,s.wrap=Ui,s.xor=wi,s.zip=ye,s.zipObject=we,s.collect=un,s.drop=Hn,s.each=st,s.eachRight=Cn,s.extend=yn,s.methods=en,s.object=we,s.select=_n,s.tail=Hn,s.unique=me,s.unzip=ye,Bn(s),s.clone=Rr,s.cloneDeep=Er,s.contains=oe,s.escape=Pi,s.every=le,s.find=qn,s.findIndex=fi,s.findKey=Sr,s.findLast=Gr,s.findLastIndex=ai,s.findLastKey=xr,s.has=jr,s.identity=Wn,s.indexOf=ge,s.isArguments=mn,s.isArray=Z,s.isBoolean=Tr,s.isDate=Ir,s.isElement=Ur,s.isEmpty=Fr,s.isEqual=Mr,s.isFinite=Pr,s.isFunction=J,s.isNaN=zr,s.isNull=Nr,s.isNumber=ae,s.isObject=ut,s.isPlainObject=Ln,s.isRegExp=Lr,s.isString=rn,s.isUndefined=qr,s.lastIndexOf=di,s.mixin=Bn,s.noConflict=zi,s.noop=be,s.now=Nt,s.parseInt=Ni,s.random=Li,s.reduce=Yn,s.reduceRight=pe,s.result=qi,s.runInContext=Dn,s.size=ni,s.some=ce,s.sortedIndex=ve,s.template=Ki,s.unescape=$i,s.uniqueId=Hi,s.all=le,s.any=ce,s.detect=qn,s.findWhere=qn,s.foldl=Yn,s.foldr=pe,s.include=oe,s.inject=Yn,Bn((function(){var t={};return A(s,function(n,e){s.prototype[e]||(t[e]=n)}),t})(),!1),s.first=$n,s.last=pi,s.sample=ti,s.take=$n,s.head=$n,A(s,function(t,n){var e=n!=="sample";s.prototype[n]||(s.prototype[n]=function(r,i){var u=this.__chain__,f=t(this.__wrapped__,r,i);return!u&&(r==null||i&&!(e&&typeof r=="function"))?f:new zt(f,u)})}),s.VERSION="2.4.2",s.prototype.chain=Ai,s.prototype.toString=Vi,s.prototype.value=Ee,s.prototype.valueOf=Ee,st(["join","pop","shift"],function(t){var n=Yt[t];s.prototype[t]=function(){var e=this.__chain__,r=n.apply(this.__wrapped__,arguments);return e?new zt(r,e):r}}),st(["push","reverse","sort","unshift"],function(t){var n=Yt[t];s.prototype[t]=function(){return n.apply(this.__wrapped__,arguments),this}}),st(["concat","slice","splice"],function(t){var n=Yt[t];s.prototype[t]=function(){return new zt(n.apply(this.__wrapped__,arguments),this.__chain__)}}),s}var Tt=Dn();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(L._=Tt,define(function(){return Tt})):V&&vt?Vt?(vt.exports=Tt)._=Tt:V._=Tt:L._=Tt}).call(Bt)});var nr=Dt(pn=>{q();(function(p,m){if(typeof pn=="object"&&pn)m(pn);else{var x={};m(x),typeof define=="function"&&define.amd?define(x):p.Mustache=x}})(pn,function(p){var m=RegExp.prototype.test;function x(y,w){return m.call(y,w)}var j=/\S/;function _(y){return!x(j,y)}var F=Object.prototype.toString,P=Array.isArray||function(y){return F.call(y)==="[object Array]"};function z(y){return typeof y=="function"}function k(y){return y.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var dt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function ct(y){return String(y).replace(/[&<>"'\/]/g,function(w){return dt[w]})}function wt(y){if(!P(y)||y.length!==2)throw new Error("Invalid tags: "+y);return[new RegExp(k(y[0])+"\\s*"),new RegExp("\\s*"+k(y[1]))]}var Et=/\s*/,X=/\s+/,tt=/\s*=/,qt=/\s*\}/,jt=/#|\^|\/|>|\{|&|=|!/;function Mt(y,w){w=w||p.tags,y=y||"",typeof w=="string"&&(w=w.split(X));var R=wt(w),a=new h(y),l=[],v=[],g=[],N=!1,U=!1;function Y(){if(N&&!U)for(;g.length;)delete v[g.pop()];else g=[];N=!1,U=!1}for(var gt,L,V,vt,Vt,nt;!a.eos();){if(gt=a.pos,V=a.scanUntil(R[0]),V)for(var _t=0,Kt=V.length;_t<Kt;++_t)vt=V.charAt(_t),_(vt)?g.push(v.length):U=!0,v.push(["text",vt,gt,gt+1]),gt+=1,vt===`
`&&Y();if(!a.scan(R[0]))break;if(N=!0,L=a.scan(jt)||"name",a.scan(Et),L==="="?(V=a.scanUntil(tt),a.scan(tt),a.scanUntil(R[1])):L==="{"?(V=a.scanUntil(new RegExp("\\s*"+k("}"+w[1]))),a.scan(qt),a.scanUntil(R[1]),L="&"):V=a.scanUntil(R[1]),!a.scan(R[1]))throw new Error("Unclosed tag at "+a.pos);if(Vt=[L,V,gt,a.pos],v.push(Vt),L==="#"||L==="^")l.push(Vt);else if(L==="/"){if(nt=l.pop(),!nt)throw new Error('Unopened section "'+V+'" at '+gt);if(nt[1]!==V)throw new Error('Unclosed section "'+nt[1]+'" at '+gt)}else L==="name"||L==="{"||L==="&"?U=!0:L==="="&&(R=wt(w=V.split(X)))}if(nt=l.pop(),nt)throw new Error('Unclosed section "'+nt[1]+'" at '+a.pos);return Pt(At(v))}function At(y){for(var w=[],R,a,l=0,v=y.length;l<v;++l)R=y[l],R&&(R[0]==="text"&&a&&a[0]==="text"?(a[1]+=R[1],a[3]=R[3]):(w.push(R),a=R));return w}function Pt(y){for(var w=[],R=w,a=[],l,v,g=0,N=y.length;g<N;++g)switch(l=y[g],l[0]){case"#":case"^":R.push(l),a.push(l),R=l[4]=[];break;case"/":v=a.pop(),v[5]=l[2],R=a.length>0?a[a.length-1][4]:w;break;default:R.push(l)}return w}function h(y){this.string=y,this.tail=y,this.pos=0}h.prototype.eos=function(){return this.tail===""},h.prototype.scan=function(y){var w=this.tail.match(y);if(w&&w.index===0){var R=w[0];return this.tail=this.tail.substring(R.length),this.pos+=R.length,R}return""},h.prototype.scanUntil=function(y){var w=this.tail.search(y),R;switch(w){case-1:R=this.tail,this.tail="";break;case 0:R="";break;default:R=this.tail.substring(0,w),this.tail=this.tail.substring(w)}return this.pos+=R.length,R};function O(y,w){this.view=y??{},this.cache={".":this.view},this.parent=w}O.prototype.push=function(y){return new O(y,this)},O.prototype.lookup=function(y){var w;if(y in this.cache)w=this.cache[y];else{for(var R=this;R;){if(y.indexOf(".")>0){w=R.view;for(var a=y.split("."),l=0;w!=null&&l<a.length;)w=w[a[l++]]}else w=R.view[y];if(w!=null)break;R=R.parent}this.cache[y]=w}return z(w)&&(w=w.call(this.view)),w};function d(){this.cache={}}d.prototype.clearCache=function(){this.cache={}},d.prototype.parse=function(y,w){var R=this.cache,a=R[y];return a==null&&(a=R[y]=Mt(y,w)),a},d.prototype.render=function(y,w,R){var a=this.parse(y),l=w instanceof O?w:new O(w);return this.renderTokens(a,l,R,y)},d.prototype.renderTokens=function(y,w,R,a){var l="",v=this;function g(vt){return v.render(vt,w,R)}for(var N,U,Y=0,gt=y.length;Y<gt;++Y)switch(N=y[Y],N[0]){case"#":if(U=w.lookup(N[1]),!U)continue;if(P(U))for(var L=0,V=U.length;L<V;++L)l+=this.renderTokens(N[4],w.push(U[L]),R,a);else if(typeof U=="object"||typeof U=="string")l+=this.renderTokens(N[4],w.push(U),R,a);else if(z(U)){if(typeof a!="string")throw new Error("Cannot use higher-order sections without the original template");U=U.call(w.view,a.slice(N[3],N[5]),g),U!=null&&(l+=U)}else l+=this.renderTokens(N[4],w,R,a);break;case"^":U=w.lookup(N[1]),(!U||P(U)&&U.length===0)&&(l+=this.renderTokens(N[4],w,R,a));break;case">":if(!R)continue;U=z(R)?R(N[1]):R[N[1]],U!=null&&(l+=this.renderTokens(this.parse(U),w,R,U));break;case"&":U=w.lookup(N[1]),U!=null&&(l+=U);break;case"name":U=w.lookup(N[1]),U!=null&&(l+=p.escape(U));break;case"text":l+=N[1];break}return l},p.name="mustache.js",p.version="0.8.1",p.tags=["{{","}}"];var T=new d;p.clearCache=function(){return T.clearCache()},p.parse=function(y,w){return T.parse(y,w)},p.render=function(y,w,R){return T.render(y,w,R)},p.to_html=function(y,w,R,a){var l=p.render(y,w,R);if(z(a))a(l);else return l},p.escape=ct,p.Scanner=h,p.Context=O,p.Writer=d})});var ir=Dt((Tu,rr)=>{q();var er=(qe(),nu(Le)),au=ke(),Qn=tr(),ou=nr();function lu(p){Qn.each(p.work,function(_){_.startDateYear=_.startDate.substr(0,4),_.endDate?_.endDateYear=_.endDate.substr(0,4):_.endDateYear="Present"}),Qn.each(p.volunteer,function(_){_.startDateYear=_.startDate.substr(0,4),_.endDate?_.endDateYear=_.endDate.substr(0,4):_.endDateYear="Present"}),Qn.each(p.education,function(_){!_.area||!_.studyType?_.educationDetail=(_.area==null?"":_.area)+(_.studyType==null?"":_.studyType):_.educationDetail=_.area+", "+_.studyType,_.startDateYear=_.startDate.substr(0,4),_.endDate?_.endDateYear=_.endDate.substr(0,4):_.endDateYear="Present"}),p.basics&&p.basics.email&&(p.basics.gravatar=au.url(p.basics.email,{size:"100",rating:"g",default:"blank"}));var m=er.readFileSync("//resume.template","utf8"),x=er.readFileSync("//resume.css","utf-8");p.css=x;var j=ou.render(m,p);return j}rr.exports={render:lu}});q();var Lt=tu(ir(),1),ur=Lt.default??Lt,Uu=ur.render??Lt.render,Fu=ur.pdfRenderOptions??Lt.pdfRenderOptions;export{Fu as pdfRenderOptions,Uu as render};
/*! Bundled license information:

lodash/dist/lodash.js:
  (**
   * @license
   * Lo-Dash 2.4.2 (Custom Build) <https://lodash.com/>
   * Build: `lodash modern -o ./dist/lodash.js`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <https://lodash.com/license>
   *)

mustache/mustache.js:
  (*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   *)
*/
