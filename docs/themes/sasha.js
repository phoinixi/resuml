var Gi=Object.create;var bn=Object.defineProperty;var Ji=Object.getOwnPropertyDescriptor;var Qi=Object.getOwnPropertyNames;var Xi=Object.getPrototypeOf,Zi=Object.prototype.hasOwnProperty;var Oe=(p,m)=>()=>(p&&(m=p(p=0)),m);var xt=(p,m)=>()=>(m||p((m={exports:{}}).exports,m),m.exports),ki=(p,m)=>{for(var D in m)bn(p,D,{get:m[D],enumerable:!0})},Se=(p,m,D,T)=>{if(m&&typeof m=="object"||typeof m=="function")for(let _ of Qi(m))!Zi.call(p,_)&&_!==D&&bn(p,_,{get:()=>m[_],enumerable:!(T=Ji(m,_))||T.enumerable});return p};var tu=(p,m,D)=>(D=p!=null?Gi(Xi(p)):{},Se(m||!p||!p.__esModule?bn(D,"default",{value:p,enumerable:!0}):D,p)),nu=p=>Se(bn({},"__esModule",{value:!0}),p);var q=Oe(()=>{});var Le={};ki(Le,{createReadStream:()=>Ne,createWriteStream:()=>ze,default:()=>eu,existsSync:()=>Ie,lstatSync:()=>Ue,mkdirSync:()=>Fe,readFileSync:()=>xe,readdirSync:()=>Te,rmdirSync:()=>Pe,statSync:()=>Jn,unlinkSync:()=>Me,writeFileSync:()=>je});function Gn(p){return String(p).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function De(p){var m=Gn(p);if(Rn[m]!==void 0)return Rn[m];for(var D=Object.keys(Rn),T=0;T<D.length;T++)if(m.endsWith("/"+D[T])||m===D[T])return Rn[D[T]]}function Vn(p){var m=Gn(p);if(En[m]!==void 0)return En[m];for(var D=Object.keys(En),T=0;T<D.length;T++)if(m.endsWith("/"+D[T])||m===D[T])return En[D[T]]}var Rn,En,xe,Te,Ie,je,Fe,Jn,Ue,Me,Pe,Ne,ze,eu,qe=Oe(()=>{"use strict";q();Rn={"package.json":`{
  "name": "jsonresume-theme-sasha",
  "version": "0.0.1",
  "description": "Sasha JSON Resume theme.",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/drkyro/jsonresume-theme-sasha"
  },
  "author": "Dan Vera",
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
  }
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
						<h3>{{company}}<span class="date pull-right">{{startDateYear}} - {{endDateYear}}</span></h3>
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
`},En={".":["LICENSE","README.md","index.js","package.json","resume.css","resume.template"]};xe=function(p,m){var D=De(p);return D!==void 0?D:""},Te=function(p,m){var D=Vn(p);return D===void 0&&(D=[]),m&&m.withFileTypes?D.map(function(T){var _=Gn(p)+"/"+T,U=Vn(_)!==void 0;return{name:T,isFile:function(){return!U},isDirectory:function(){return U}}}):D},Ie=function(p){return De(p)!==void 0||Vn(p)!==void 0},je=function(){},Fe=function(){},Jn=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Ue=Jn,Me=function(){},Pe=function(){},Ne=function(){return{pipe:function(p){return p},on:function(){return this}}},ze=function(){return{write:function(){},end:function(){},on:function(){return this}}},eu={readFileSync:xe,readdirSync:Te,existsSync:Ie,writeFileSync:je,mkdirSync:Fe,statSync:Jn,lstatSync:Ue,unlinkSync:Me,rmdirSync:Pe,createReadStream:Ne,createWriteStream:ze}});var Ke=xt((Ye,On)=>{q();(function(p){"use strict";function m(h,O){var d=(h&65535)+(O&65535),I=(h>>16)+(O>>16)+(d>>16);return I<<16|d&65535}function D(h,O){return h<<O|h>>>32-O}function T(h,O,d,I,y,w){return m(D(m(m(O,h),m(I,w)),y),d)}function _(h,O,d,I,y,w,R){return T(O&d|~O&I,h,O,y,w,R)}function U(h,O,d,I,y,w,R){return T(O&I|d&~I,h,O,y,w,R)}function P(h,O,d,I,y,w,R){return T(O^d^I,h,O,y,w,R)}function N(h,O,d,I,y,w,R){return T(d^(O|~I),h,O,y,w,R)}function k(h,O){h[O>>5]|=128<<O%32,h[(O+64>>>9<<4)+14]=O;var d,I,y,w,R,a=1732584193,l=-271733879,v=-1732584194,g=271733878;for(d=0;d<h.length;d+=16)I=a,y=l,w=v,R=g,a=_(a,l,v,g,h[d],7,-680876936),g=_(g,a,l,v,h[d+1],12,-389564586),v=_(v,g,a,l,h[d+2],17,606105819),l=_(l,v,g,a,h[d+3],22,-1044525330),a=_(a,l,v,g,h[d+4],7,-176418897),g=_(g,a,l,v,h[d+5],12,1200080426),v=_(v,g,a,l,h[d+6],17,-1473231341),l=_(l,v,g,a,h[d+7],22,-45705983),a=_(a,l,v,g,h[d+8],7,1770035416),g=_(g,a,l,v,h[d+9],12,-1958414417),v=_(v,g,a,l,h[d+10],17,-42063),l=_(l,v,g,a,h[d+11],22,-1990404162),a=_(a,l,v,g,h[d+12],7,1804603682),g=_(g,a,l,v,h[d+13],12,-40341101),v=_(v,g,a,l,h[d+14],17,-1502002290),l=_(l,v,g,a,h[d+15],22,1236535329),a=U(a,l,v,g,h[d+1],5,-165796510),g=U(g,a,l,v,h[d+6],9,-1069501632),v=U(v,g,a,l,h[d+11],14,643717713),l=U(l,v,g,a,h[d],20,-373897302),a=U(a,l,v,g,h[d+5],5,-701558691),g=U(g,a,l,v,h[d+10],9,38016083),v=U(v,g,a,l,h[d+15],14,-660478335),l=U(l,v,g,a,h[d+4],20,-405537848),a=U(a,l,v,g,h[d+9],5,568446438),g=U(g,a,l,v,h[d+14],9,-1019803690),v=U(v,g,a,l,h[d+3],14,-187363961),l=U(l,v,g,a,h[d+8],20,1163531501),a=U(a,l,v,g,h[d+13],5,-1444681467),g=U(g,a,l,v,h[d+2],9,-51403784),v=U(v,g,a,l,h[d+7],14,1735328473),l=U(l,v,g,a,h[d+12],20,-1926607734),a=P(a,l,v,g,h[d+5],4,-378558),g=P(g,a,l,v,h[d+8],11,-2022574463),v=P(v,g,a,l,h[d+11],16,1839030562),l=P(l,v,g,a,h[d+14],23,-35309556),a=P(a,l,v,g,h[d+1],4,-1530992060),g=P(g,a,l,v,h[d+4],11,1272893353),v=P(v,g,a,l,h[d+7],16,-155497632),l=P(l,v,g,a,h[d+10],23,-1094730640),a=P(a,l,v,g,h[d+13],4,681279174),g=P(g,a,l,v,h[d],11,-358537222),v=P(v,g,a,l,h[d+3],16,-722521979),l=P(l,v,g,a,h[d+6],23,76029189),a=P(a,l,v,g,h[d+9],4,-640364487),g=P(g,a,l,v,h[d+12],11,-421815835),v=P(v,g,a,l,h[d+15],16,530742520),l=P(l,v,g,a,h[d+2],23,-995338651),a=N(a,l,v,g,h[d],6,-198630844),g=N(g,a,l,v,h[d+7],10,1126891415),v=N(v,g,a,l,h[d+14],15,-1416354905),l=N(l,v,g,a,h[d+5],21,-57434055),a=N(a,l,v,g,h[d+12],6,1700485571),g=N(g,a,l,v,h[d+3],10,-1894986606),v=N(v,g,a,l,h[d+10],15,-1051523),l=N(l,v,g,a,h[d+1],21,-2054922799),a=N(a,l,v,g,h[d+8],6,1873313359),g=N(g,a,l,v,h[d+15],10,-30611744),v=N(v,g,a,l,h[d+6],15,-1560198380),l=N(l,v,g,a,h[d+13],21,1309151649),a=N(a,l,v,g,h[d+4],6,-145523070),g=N(g,a,l,v,h[d+11],10,-1120210379),v=N(v,g,a,l,h[d+2],15,718787259),l=N(l,v,g,a,h[d+9],21,-343485551),a=m(a,I),l=m(l,y),v=m(v,w),g=m(g,R);return[a,l,v,g]}function dt(h){var O,d="",I=h.length*32;for(O=0;O<I;O+=8)d+=String.fromCharCode(h[O>>5]>>>O%32&255);return d}function ct(h){var O,d=[];for(d[(h.length>>2)-1]=void 0,O=0;O<d.length;O+=1)d[O]=0;var I=h.length*8;for(O=0;O<I;O+=8)d[O>>5]|=(h.charCodeAt(O/8)&255)<<O%32;return d}function wt(h){return dt(k(ct(h),h.length*8))}function Et(h,O){var d,I=ct(h),y=[],w=[],R;for(y[15]=w[15]=void 0,I.length>16&&(I=k(I,h.length*8)),d=0;d<16;d+=1)y[d]=I[d]^909522486,w[d]=I[d]^1549556828;return R=k(y.concat(ct(O)),512+O.length*8),dt(k(w.concat(R),640))}function X(h){var O="0123456789abcdef",d="",I,y;for(y=0;y<h.length;y+=1)I=h.charCodeAt(y),d+=O.charAt(I>>>4&15)+O.charAt(I&15);return d}function tt(h){return unescape(encodeURIComponent(h))}function qt(h){return wt(tt(h))}function Tt(h){return X(qt(h))}function Mt(h,O){return Et(tt(h),tt(O))}function Bt(h,O){return X(Mt(h,O))}function Pt(h,O,d){return O?d?Mt(O,h):Bt(O,h):d?qt(h):Tt(h)}typeof define=="function"&&define.amd?define(function(){return Pt}):typeof On=="object"&&On.exports?On.exports=Pt:p.md5=Pt})(Ye)});var We=xt((vu,$e)=>{"use strict";q();function ru(p,m){return Object.prototype.hasOwnProperty.call(p,m)}$e.exports=function(p,m,D,T){m=m||"&",D=D||"=";var _={};if(typeof p!="string"||p.length===0)return _;var U=/\+/g;p=p.split(m);var P=1e3;T&&typeof T.maxKeys=="number"&&(P=T.maxKeys);var N=p.length;P>0&&N>P&&(N=P);for(var k=0;k<N;++k){var dt=p[k].replace(U,"%20"),ct=dt.indexOf(D),wt,Et,X,tt;ct>=0?(wt=dt.substr(0,ct),Et=dt.substr(ct+1)):(wt=dt,Et=""),X=decodeURIComponent(wt),tt=decodeURIComponent(Et),ru(_,X)?Array.isArray(_[X])?_[X].push(tt):_[X]=[_[X],tt]:_[X]=tt}return _}});var Be=xt((yu,He)=>{"use strict";q();var an=function(p){switch(typeof p){case"string":return p;case"boolean":return p?"true":"false";case"number":return isFinite(p)?p:"";default:return""}};He.exports=function(p,m,D,T){return m=m||"&",D=D||"=",p===null&&(p=void 0),typeof p=="object"?Object.keys(p).map(function(_){var U=encodeURIComponent(an(_))+D;return Array.isArray(p[_])?p[_].map(function(P){return U+encodeURIComponent(an(P))}).join(m):U+encodeURIComponent(an(p[_]))}).join(m):T?encodeURIComponent(an(T))+D+encodeURIComponent(an(p)):""}});var Ae=xt(on=>{"use strict";q();on.decode=on.parse=We();on.encode=on.stringify=Be()});var Xe=xt((Ru,Qe)=>{q();var iu=Ke(),uu=Ae(),fu=/^[0-9a-f]{32}$/;function su(p){var m={},D={protocol:1,format:1};for(var T in p)D[T]||(m[T]=p[T]);return m}function Ve(p,m){if(p)return typeof p.protocol=="boolean"?p.protocol:p.protocol==="http"?!1:p.protocol==="https"?!0:void 0}function Ge(p){return p=typeof p=="string"?p.trim().toLowerCase():"unspecified",p.match(fu)?p:iu(p)}function Je(p){var m=uu.stringify(su(p));return m&&"?"+m||""}var bu=Qe.exports={url:function(p,m,D){var T="//www.gravatar.com/avatar/";m&&m.cdn?(T=m.cdn+"/avatar/",delete m.cdn):(m&&m.protocol&&(D=Ve(m)),typeof D<"u"&&(T=D?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var _=Je(m);return T+Ge(p)+_},profile_url:function(p,m,D){var T=m!=null&&m.format!=null?String(m.format):"json",_;if(m&&m.cdn)_=m.cdn+"/",delete m.cdn;else{m&&m.protocol&&(D=Ve(m));var _=D&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var U=Je(m);return _+Ge(p)+"."+T+U}}});var ke=xt((Ou,Ze)=>{q();Ze.exports=Xe()});var tr=xt((Ht,ln)=>{q();(function(){var p,m=[],D=[],T=0,_=+new Date+"",U=75,P=40,N=` 	\v\f\xA0\uFEFF
\r\u2028\u2029\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000`,k=/\b__p \+= '';/g,dt=/\b(__p \+=) '' \+/g,ct=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Et=/\w*$/,X=/^\s*function[ \n\r\t]+\w/,tt=/<%=([\s\S]+?)%>/g,qt=RegExp("^["+N+"]*0+(?=.$)"),Tt=/($^)/,Mt=/\bthis\b/,Bt=/['\n\r\t\u2028\u2029\\]/g,Pt=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],h=0,O="[object Arguments]",d="[object Array]",I="[object Boolean]",y="[object Date]",w="[object Function]",R="[object Number]",a="[object Object]",l="[object RegExp]",v="[object String]",g={};g[w]=!1,g[O]=g[d]=g[I]=g[y]=g[R]=g[a]=g[l]=g[v]=!0;var z={leading:!1,maxWait:0,trailing:!1},F={configurable:!1,enumerable:!1,value:null,writable:!1},K={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1},gt={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},L=K[typeof window]&&window||this,V=K[typeof Ht]&&Ht&&!Ht.nodeType&&Ht,vt=K[typeof ln]&&ln&&!ln.nodeType&&ln,At=vt&&vt.exports===V&&V,nt=K[typeof globalThis]&&globalThis;nt&&(nt.global===nt||nt.window===nt)&&(L=nt);function _t(E,j,M){for(var Y=(M||0)-1,W=E?E.length:0;++Y<W;)if(E[Y]===j)return Y;return-1}function Yt(E,j){var M=typeof j;if(E=E.cache,M=="boolean"||j==null)return E[j]?0:-1;M!="number"&&M!="string"&&(M="object");var Y=M=="number"?j:_+j;return E=(E=E[M])&&E[Y],M=="object"?E&&_t(E,j)>-1?0:-1:E?0:-1}function fr(E){var j=this.cache,M=typeof E;if(M=="boolean"||E==null)j[E]=!0;else{M!="number"&&M!="string"&&(M="object");var Y=M=="number"?E:_+E,W=j[M]||(j[M]={});M=="object"?(W[Y]||(W[Y]=[])).push(E):W[Y]=!0}}function Xn(E){return E.charCodeAt(0)}function sr(E,j){for(var M=E.criteria,Y=j.criteria,W=-1,at=M.length;++W<at;){var ht=M[W],G=Y[W];if(ht!==G){if(ht>G||typeof ht>"u")return 1;if(ht<G||typeof G>"u")return-1}}return E.index-j.index}function Sn(E){var j=-1,M=E.length,Y=E[0],W=E[M/2|0],at=E[M-1];if(Y&&typeof Y=="object"&&W&&typeof W=="object"&&at&&typeof at=="object")return!1;var ht=Dn();ht.false=ht.null=ht.true=ht.undefined=!1;var G=Dn();for(G.array=E,G.cache=ht,G.push=fr;++j<M;)G.push(E[j]);return G}function ar(E){return"\\"+gt[E]}function Ct(){return m.pop()||[]}function Dn(){return D.pop()||{array:null,cache:null,criteria:null,false:!1,index:0,null:!1,number:null,object:null,push:null,string:null,true:!1,undefined:!1,value:null}}function mt(E){E.length=0,m.length<P&&m.push(E)}function Vt(E){var j=E.cache;j&&Vt(j),E.array=E.cache=E.criteria=E.object=E.number=E.string=E.value=null,D.length<P&&D.push(E)}function $(E,j,M){j||(j=0),typeof M>"u"&&(M=E?E.length:0);for(var Y=-1,W=M-j||0,at=Array(W<0?0:W);++Y<W;)at[Y]=E[j+Y];return at}function xn(E){E=E?It.defaults(L.Object(),E,It.pick(L,Pt)):L;var j=E.Array,M=E.Boolean,Y=E.Date,W=E.Function,at=E.Math,ht=E.Number,G=E.Object,Gt=E.RegExp,jt=E.String,Ot=E.TypeError,Kt=[],Zn=G.prototype,or=E._,et=Zn.toString,lr=Gt("^"+jt(et).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),hr=at.ceil,pn=E.clearTimeout,pr=at.floor,dr=W.prototype.toString,$t=Ut($t=G.getPrototypeOf)&&$t,rt=Zn.hasOwnProperty,Jt=Kt.push,Qt=E.setTimeout,kn=Kt.splice,cr=Kt.unshift,te=(function(){try{var t={},n=Ut(n=G.defineProperty)&&n,e=n(t,t,t)&&n}catch{}return e})(),dn=Ut(dn=G.create)&&dn,Tn=Ut(Tn=j.isArray)&&Tn,gr=E.isFinite,vr=E.isNaN,cn=Ut(cn=G.keys)&&cn,yt=at.max,Xt=at.min,In=E.parseInt,ne=at.random,St={};St[d]=j,St[I]=M,St[y]=Y,St[w]=W,St[a]=G,St[R]=ht,St[l]=Gt,St[v]=jt;function f(t){return t&&typeof t=="object"&&!Z(t)&&rt.call(t,"__wrapped__")?t:new Nt(t)}function Nt(t,n){this.__chain__=!!n,this.__wrapped__=t}Nt.prototype=f.prototype;var Zt=f.support={};Zt.funcDecomp=!Ut(E.WinRTError)&&Mt.test(xn),Zt.funcNames=typeof W.name=="string",f.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:tt,variable:"",imports:{_:f}};function mr(t){var n=t[0],e=t[2],r=t[4];function i(){if(e){var u=$(e);Jt.apply(u,arguments)}if(this instanceof i){var s=kt(n.prototype),o=n.apply(s,u||arguments);return ut(o)?o:s}return n.apply(r,u||arguments)}return Pn(i,t),i}function jn(t,n,e,r,i){if(e){var u=e(t);if(typeof u<"u")return u}var s=ut(t);if(s){var o=et.call(t);if(!g[o])return t;var c=St[o];switch(o){case I:case y:return new c(+t);case R:case v:return new c(t);case l:return u=c(t.source,Et.exec(t)),u.lastIndex=t.lastIndex,u}}else return t;var b=Z(t);if(n){var C=!r;r||(r=Ct()),i||(i=Ct());for(var x=r.length;x--;)if(r[x]==t)return i[x];u=b?c(t.length):{}}else u=b?$(t):mn({},t);return b&&(rt.call(t,"index")&&(u.index=t.index),rt.call(t,"input")&&(u.input=t.input)),n&&(r.push(t),i.push(u),(b?ft:A)(t,function(S,H){u[H]=jn(S,n,e,r,i)}),C&&(mt(r),mt(i))),u}function kt(t,n){return ut(t)?dn(t):{}}dn||(kt=(function(){function t(){}return function(n){if(ut(n)){t.prototype=n;var e=new t;t.prototype=null}return e||E.Object()}})());function ot(t,n,e){if(typeof t!="function")return Hn;if(typeof n>"u"||!("prototype"in t))return t;var r=t.__bindData__;if(typeof r>"u"&&(Zt.funcNames&&(r=!t.name),r=r||!Zt.funcDecomp,!r)){var i=dr.call(t);Zt.funcNames||(r=!X.test(i)),r||(r=Mt.test(i),Pn(t,r))}if(r===!1||r!==!0&&r[1]&1)return t;switch(e){case 1:return function(u){return t.call(n,u)};case 2:return function(u,s){return t.call(n,u,s)};case 3:return function(u,s,o){return t.call(n,u,s,o)};case 4:return function(u,s,o,c){return t.call(n,u,s,o,c)}}return _e(t,n)}function ee(t){var n=t[0],e=t[1],r=t[2],i=t[3],u=t[4],s=t[5],o=e&1,c=e&2,b=e&4,C=e&8,x=n;function S(){var H=o?u:this;if(r){var B=$(r);Jt.apply(B,arguments)}if((i||b)&&(B||(B=$(arguments)),i&&Jt.apply(B,i),b&&B.length<s))return e|=16,ee([n,C?e:e&-4,B,null,u,s]);if(B||(B=arguments),c&&(n=H[x]),this instanceof S){H=kt(n.prototype);var lt=n.apply(H,B);return ut(lt)?lt:H}return n.apply(H,B)}return Pn(S,t),S}function tn(t,n){var e=-1,r=gn(),i=t?t.length:0,u=i>=U&&r===_t,s=[];if(u){var o=Sn(n);o?(r=Yt,n=o):u=!1}for(;++e<i;){var c=t[e];r(n,c)<0&&s.push(c)}return u&&Vt(n),s}function Ft(t,n,e,r){for(var i=(r||0)-1,u=t?t.length:0,s=[];++i<u;){var o=t[i];if(o&&typeof o=="object"&&typeof o.length=="number"&&(Z(o)||vn(o))){n||(o=Ft(o,n,e));var c=-1,b=o.length,C=s.length;for(s.length+=b;++c<b;)s[C++]=o[c]}else e||s.push(o)}return s}function Wt(t,n,e,r,i,u){if(e){var s=e(t,n);if(typeof s<"u")return!!s}if(t===n)return t!==0||1/t==1/n;var o=typeof t,c=typeof n;if(t===t&&!(t&&K[o])&&!(n&&K[c]))return!1;if(t==null||n==null)return t===n;var b=et.call(t),C=et.call(n);if(b==O&&(b=a),C==O&&(C=a),b!=C)return!1;switch(b){case I:case y:return+t==+n;case R:return t!=+t?n!=+n:t==0?1/t==1/n:t==+n;case l:case v:return t==jt(n)}var x=b==d;if(!x){var S=rt.call(t,"__wrapped__"),H=rt.call(n,"__wrapped__");if(S||H)return Wt(S?t.__wrapped__:t,H?n.__wrapped__:n,e,r,i,u);if(b!=a)return!1;var B=t.constructor,lt=n.constructor;if(B!=lt&&!(J(B)&&B instanceof B&&J(lt)&&lt instanceof lt)&&"constructor"in t&&"constructor"in n)return!1}var pt=!i;i||(i=Ct()),u||(u=Ct());for(var st=i.length;st--;)if(i[st]==t)return u[st]==n;var Q=0;if(s=!0,i.push(t),u.push(n),x){if(st=t.length,Q=n.length,s=Q==st,s||r)for(;Q--;){var Cn=st,un=n[Q];if(r)for(;Cn--&&!(s=Wt(t[Cn],un,e,r,i,u)););else if(!(s=Wt(t[Q],un,e,r,i,u)))break}}else Dt(n,function(fn,sn,An){if(rt.call(An,sn))return Q++,s=rt.call(t,sn)&&Wt(t[sn],fn,e,r,i,u)}),s&&!r&&Dt(t,function(fn,sn,An){if(rt.call(An,sn))return s=--Q>-1});return i.pop(),u.pop(),pt&&(mt(i),mt(u)),s}function re(t,n,e,r,i){(Z(n)?ft:A)(n,function(u,s){var o,c,b=u,C=t[s];if(u&&((c=Z(u))||Ln(u))){for(var x=r.length;x--;)if(o=r[x]==u){C=i[x];break}if(!o){var S;e&&(b=e(C,u),(S=typeof b<"u")&&(C=b)),S||(C=c?Z(C)?C:[]:Ln(C)?C:{}),r.push(u),i.push(C),S||re(C,u,e,r,i)}}else e&&(b=e(C,u),typeof b>"u"&&(b=u)),typeof b<"u"&&(C=b);t[s]=C})}function Fn(t,n){return t+pr(ne()*(n-t+1))}function Un(t,n,e){var r=-1,i=gn(),u=t?t.length:0,s=[],o=!n&&u>=U&&i===_t,c=e||o?Ct():s;if(o){var b=Sn(c);i=Yt,c=b}for(;++r<u;){var C=t[r],x=e?e(C,r,t):C;(n?!r||c[c.length-1]!==x:i(c,x)<0)&&((e||o)&&c.push(x),s.push(C))}return o?(mt(c.array),Vt(c)):e&&mt(c),s}function Mn(t){return function(n,e,r){var i={};e=f.createCallback(e,r,3);var u=-1,s=n?n.length:0;if(typeof s=="number")for(;++u<s;){var o=n[u];t(i,o,e(o,u,n),n)}else A(n,function(c,b,C){t(i,c,e(c,b,C),C)});return i}}function bt(t,n,e,r,i,u){var s=n&1,o=n&2,c=n&4,b=n&8,C=n&16,x=n&32;if(!o&&!J(t))throw new Ot;C&&!e.length&&(n&=-17,C=e=!1),x&&!r.length&&(n&=-33,x=r=!1);var S=t&&t.__bindData__;if(S&&S!==!0)return S=$(S),S[2]&&(S[2]=$(S[2])),S[3]&&(S[3]=$(S[3])),s&&!(S[1]&1)&&(S[4]=i),!s&&S[1]&1&&(n|=8),c&&!(S[1]&4)&&(S[5]=u),C&&Jt.apply(S[2]||(S[2]=[]),e),x&&cr.apply(S[3]||(S[3]=[]),r),S[1]|=n,bt.apply(null,S);var H=n==1||n===17?mr:ee;return H([t,n,e,r,i,u])}function yr(t){return Nn[t]}function gn(){var t=(t=f.indexOf)===ge?_t:t;return t}function Ut(t){return typeof t=="function"&&lr.test(t)}var Pn=te?function(t,n){F.value=n,te(t,"__bindData__",F),F.value=null}:be;function ie(t){var n,e;return!(t&&et.call(t)==a)||(n=t.constructor,J(n)&&!(n instanceof n))?!1:(Dt(t,function(r,i){e=i}),typeof e>"u"||rt.call(t,e))}function wr(t){return ue[t]}function vn(t){return t&&typeof t=="object"&&typeof t.length=="number"&&et.call(t)==O||!1}var Z=Tn||function(t){return t&&typeof t=="object"&&typeof t.length=="number"&&et.call(t)==d||!1},_r=function(t){var n,e=t,r=[];if(!e||!K[typeof t])return r;for(n in e)rt.call(e,n)&&r.push(n);return r},it=cn?function(t){return ut(t)?cn(t):[]}:_r,Nn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ue=se(Nn),Cr=Gt("("+it(ue).join("|")+")","g"),br=Gt("["+it(Nn).join("")+"]","g"),mn=function(t,n,e){var r,i=t,u=i;if(!i)return u;var s=arguments,o=0,c=typeof e=="number"?2:s.length;if(c>3&&typeof s[c-2]=="function")var b=ot(s[--c-1],s[c--],2);else c>2&&typeof s[c-1]=="function"&&(b=s[--c]);for(;++o<c;)if(i=s[o],i&&K[typeof i])for(var C=-1,x=K[typeof i]&&it(i),S=x?x.length:0;++C<S;)r=x[C],u[r]=b?b(u[r],i[r]):i[r];return u};function Rr(t,n,e,r){return typeof n!="boolean"&&n!=null&&(r=e,e=n,n=!1),jn(t,n,typeof e=="function"&&ot(e,r,1))}function Er(t,n,e){return jn(t,!0,typeof n=="function"&&ot(n,e,1))}function Or(t,n){var e=kt(t);return n?mn(e,n):e}var zn=function(t,n,e){var r,i=t,u=i;if(!i)return u;for(var s=arguments,o=0,c=typeof e=="number"?2:s.length;++o<c;)if(i=s[o],i&&K[typeof i])for(var b=-1,C=K[typeof i]&&it(i),x=C?C.length:0;++b<x;)r=C[b],typeof u[r]>"u"&&(u[r]=i[r]);return u};function Sr(t,n,e){var r;return n=f.createCallback(n,e,3),A(t,function(i,u,s){if(n(i,u,s))return r=u,!1}),r}function Dr(t,n,e){var r;return n=f.createCallback(n,e,3),fe(t,function(i,u,s){if(n(i,u,s))return r=u,!1}),r}var Dt=function(t,n,e){var r,i=t,u=i;if(!i||!K[typeof i])return u;n=n&&typeof e>"u"?n:ot(n,e,3);for(r in i)if(n(i[r],r,t)===!1)return u;return u};function xr(t,n,e){var r=[];Dt(t,function(u,s){r.push(s,u)});var i=r.length;for(n=ot(n,e,3);i--&&n(r[i--],r[i],t)!==!1;);return t}var A=function(t,n,e){var r,i=t,u=i;if(!i||!K[typeof i])return u;n=n&&typeof e>"u"?n:ot(n,e,3);for(var s=-1,o=K[typeof i]&&it(i),c=o?o.length:0;++s<c;)if(r=o[s],n(i[r],r,t)===!1)return u;return u};function fe(t,n,e){var r=it(t),i=r.length;for(n=ot(n,e,3);i--;){var u=r[i];if(n(t[u],u,t)===!1)break}return t}function nn(t){var n=[];return Dt(t,function(e,r){J(e)&&n.push(r)}),n.sort()}function Tr(t,n){return t?rt.call(t,n):!1}function se(t){for(var n=-1,e=it(t),r=e.length,i={};++n<r;){var u=e[n];i[t[u]]=u}return i}function Ir(t){return t===!0||t===!1||t&&typeof t=="object"&&et.call(t)==I||!1}function jr(t){return t&&typeof t=="object"&&et.call(t)==y||!1}function Fr(t){return t&&t.nodeType===1||!1}function Ur(t){var n=!0;if(!t)return n;var e=et.call(t),r=t.length;return e==d||e==v||e==O||e==a&&typeof r=="number"&&J(t.splice)?!r:(A(t,function(){return n=!1}),n)}function Mr(t,n,e,r){return Wt(t,n,typeof e=="function"&&ot(e,r,2))}function Pr(t){return gr(t)&&!vr(parseFloat(t))}function J(t){return typeof t=="function"}function ut(t){return!!(t&&K[typeof t])}function Nr(t){return ae(t)&&t!=+t}function zr(t){return t===null}function ae(t){return typeof t=="number"||t&&typeof t=="object"&&et.call(t)==R||!1}var Ln=$t?function(t){if(!(t&&et.call(t)==a))return!1;var n=t.valueOf,e=Ut(n)&&(e=$t(n))&&$t(e);return e?t==e||$t(t)==e:ie(t)}:ie;function Lr(t){return t&&typeof t=="object"&&et.call(t)==l||!1}function en(t){return typeof t=="string"||t&&typeof t=="object"&&et.call(t)==v||!1}function qr(t){return typeof t>"u"}function Yr(t,n,e){var r={};return n=f.createCallback(n,e,3),A(t,function(i,u,s){r[u]=n(i,u,s)}),r}function Kr(t){var n=arguments,e=2;if(!ut(t))return t;if(typeof n[2]!="number"&&(e=n.length),e>3&&typeof n[e-2]=="function")var r=ot(n[--e-1],n[e--],2);else e>2&&typeof n[e-1]=="function"&&(r=n[--e]);for(var i=$(arguments,1,e),u=-1,s=Ct(),o=Ct();++u<e;)re(t,i[u],r,s,o);return mt(s),mt(o),t}function $r(t,n,e){var r={};if(typeof n!="function"){var i=[];Dt(t,function(c,b){i.push(b)}),i=tn(i,Ft(arguments,!0,!1,1));for(var u=-1,s=i.length;++u<s;){var o=i[u];r[o]=t[o]}}else n=f.createCallback(n,e,3),Dt(t,function(c,b,C){n(c,b,C)||(r[b]=c)});return r}function Wr(t){for(var n=-1,e=it(t),r=e.length,i=j(r);++n<r;){var u=e[n];i[n]=[u,t[u]]}return i}function Hr(t,n,e){var r={};if(typeof n!="function")for(var i=-1,u=Ft(arguments,!0,!1,1),s=ut(t)?u.length:0;++i<s;){var o=u[i];o in t&&(r[o]=t[o])}else n=f.createCallback(n,e,3),Dt(t,function(c,b,C){n(c,b,C)&&(r[b]=c)});return r}function Br(t,n,e,r){var i=Z(t);if(e==null)if(i)e=[];else{var u=t&&t.constructor,s=u&&u.prototype;e=kt(s)}return n&&(n=f.createCallback(n,r,4),(i?ft:A)(t,function(o,c,b){return n(e,o,c,b)})),e}function yn(t){for(var n=-1,e=it(t),r=e.length,i=j(r);++n<r;)i[n]=t[e[n]];return i}function Ar(t){for(var n=arguments,e=-1,r=Ft(n,!0,!1,1),i=n[2]&&n[2][n[1]]===t?1:r.length,u=j(i);++e<i;)u[e]=t[r[e]];return u}function oe(t,n,e){var r=-1,i=gn(),u=t?t.length:0,s=!1;return e=(e<0?yt(0,u+e):e)||0,Z(t)?s=i(t,n,e)>-1:typeof u=="number"?s=(en(t)?t.indexOf(n,e):i(t,n,e))>-1:A(t,function(o){if(++r>=e)return!(s=o===n)}),s}var Vr=Mn(function(t,n,e){rt.call(t,e)?t[e]++:t[e]=1});function le(t,n,e){var r=!0;n=f.createCallback(n,e,3);var i=-1,u=t?t.length:0;if(typeof u=="number")for(;++i<u&&(r=!!n(t[i],i,t)););else A(t,function(s,o,c){return r=!!n(s,o,c)});return r}function wn(t,n,e){var r=[];n=f.createCallback(n,e,3);var i=-1,u=t?t.length:0;if(typeof u=="number")for(;++i<u;){var s=t[i];n(s,i,t)&&r.push(s)}else A(t,function(o,c,b){n(o,c,b)&&r.push(o)});return r}function qn(t,n,e){n=f.createCallback(n,e,3);var r=-1,i=t?t.length:0;if(typeof i=="number")for(;++r<i;){var u=t[r];if(n(u,r,t))return u}else{var s;return A(t,function(o,c,b){if(n(o,c,b))return s=o,!1}),s}}function Gr(t,n,e){var r;return n=f.createCallback(n,e,3),_n(t,function(i,u,s){if(n(i,u,s))return r=i,!1}),r}function ft(t,n,e){var r=-1,i=t?t.length:0;if(n=n&&typeof e>"u"?n:ot(n,e,3),typeof i=="number")for(;++r<i&&n(t[r],r,t)!==!1;);else A(t,n);return t}function _n(t,n,e){var r=t?t.length:0;if(n=n&&typeof e>"u"?n:ot(n,e,3),typeof r=="number")for(;r--&&n(t[r],r,t)!==!1;);else{var i=it(t);r=i.length,A(t,function(u,s,o){return s=i?i[--r]:--r,n(o[s],s,o)})}return t}var Jr=Mn(function(t,n,e){(rt.call(t,e)?t[e]:t[e]=[]).push(n)}),Qr=Mn(function(t,n,e){t[e]=n});function Xr(t,n){var e=$(arguments,2),r=-1,i=typeof n=="function",u=t?t.length:0,s=j(typeof u=="number"?u:0);return ft(t,function(o){s[++r]=(i?n:o[n]).apply(o,e)}),s}function rn(t,n,e){var r=-1,i=t?t.length:0;if(n=f.createCallback(n,e,3),typeof i=="number")for(var u=j(i);++r<i;)u[r]=n(t[r],r,t);else u=[],A(t,function(s,o,c){u[++r]=n(s,o,c)});return u}function he(t,n,e){var r=-1/0,i=r;if(typeof n!="function"&&e&&e[n]===t&&(n=null),n==null&&Z(t))for(var u=-1,s=t.length;++u<s;){var o=t[u];o>i&&(i=o)}else n=n==null&&en(t)?Xn:f.createCallback(n,e,3),ft(t,function(c,b,C){var x=n(c,b,C);x>r&&(r=x,i=c)});return i}function Zr(t,n,e){var r=1/0,i=r;if(typeof n!="function"&&e&&e[n]===t&&(n=null),n==null&&Z(t))for(var u=-1,s=t.length;++u<s;){var o=t[u];o<i&&(i=o)}else n=n==null&&en(t)?Xn:f.createCallback(n,e,3),ft(t,function(c,b,C){var x=n(c,b,C);x<r&&(r=x,i=c)});return i}var Yn=rn;function Kn(t,n,e,r){if(!t)return e;var i=arguments.length<3;n=f.createCallback(n,r,4);var u=-1,s=t.length;if(typeof s=="number")for(i&&(e=t[++u]);++u<s;)e=n(e,t[u],u,t);else A(t,function(o,c,b){e=i?(i=!1,o):n(e,o,c,b)});return e}function pe(t,n,e,r){var i=arguments.length<3;return n=f.createCallback(n,r,4),_n(t,function(u,s,o){e=i?(i=!1,u):n(e,u,s,o)}),e}function kr(t,n,e){return n=f.createCallback(n,e,3),wn(t,function(r,i,u){return!n(r,i,u)})}function ti(t,n,e){if(t&&typeof t.length!="number"&&(t=yn(t)),n==null||e)return t?t[Fn(0,t.length-1)]:p;var r=de(t);return r.length=Xt(yt(0,n),r.length),r}function de(t){var n=-1,e=t?t.length:0,r=j(typeof e=="number"?e:0);return ft(t,function(i){var u=Fn(0,++n);r[n]=r[u],r[u]=i}),r}function ni(t){var n=t?t.length:0;return typeof n=="number"?n:it(t).length}function ce(t,n,e){var r;n=f.createCallback(n,e,3);var i=-1,u=t?t.length:0;if(typeof u=="number")for(;++i<u&&!(r=n(t[i],i,t)););else A(t,function(s,o,c){return!(r=n(s,o,c))});return!!r}function ei(t,n,e){var r=-1,i=Z(n),u=t?t.length:0,s=j(typeof u=="number"?u:0);for(i||(n=f.createCallback(n,e,3)),ft(t,function(c,b,C){var x=s[++r]=Dn();i?x.criteria=rn(n,function(S){return c[S]}):(x.criteria=Ct())[0]=n(c,b,C),x.index=r,x.value=c}),u=s.length,s.sort(sr);u--;){var o=s[u];s[u]=o.value,i||mt(o.criteria),Vt(o)}return s}function ri(t){return t&&typeof t.length=="number"?$(t):yn(t)}var ii=wn;function ui(t){for(var n=-1,e=t?t.length:0,r=[];++n<e;){var i=t[n];i&&r.push(i)}return r}function fi(t){return tn(t,Ft(arguments,!0,!0,1))}function si(t,n,e){var r=-1,i=t?t.length:0;for(n=f.createCallback(n,e,3);++r<i;)if(n(t[r],r,t))return r;return-1}function ai(t,n,e){var r=t?t.length:0;for(n=f.createCallback(n,e,3);r--;)if(n(t[r],r,t))return r;return-1}function $n(t,n,e){var r=0,i=t?t.length:0;if(typeof n!="number"&&n!=null){var u=-1;for(n=f.createCallback(n,e,3);++u<i&&n(t[u],u,t);)r++}else if(r=n,r==null||e)return t?t[0]:p;return $(t,0,Xt(yt(0,r),i))}function oi(t,n,e,r){return typeof n!="boolean"&&n!=null&&(r=e,e=typeof n!="function"&&r&&r[n]===t?null:n,n=!1),e!=null&&(t=rn(t,e,r)),Ft(t,n)}function ge(t,n,e){if(typeof e=="number"){var r=t?t.length:0;e=e<0?yt(0,r+e):e||0}else if(e){var i=ve(t,n);return t[i]===n?i:-1}return _t(t,n,e)}function li(t,n,e){var r=0,i=t?t.length:0;if(typeof n!="number"&&n!=null){var u=i;for(n=f.createCallback(n,e,3);u--&&n(t[u],u,t);)r++}else r=n==null||e?1:n||r;return $(t,0,Xt(yt(0,i-r),i))}function hi(){for(var t=[],n=-1,e=arguments.length,r=Ct(),i=gn(),u=i===_t,s=Ct();++n<e;){var o=arguments[n];(Z(o)||vn(o))&&(t.push(o),r.push(u&&o.length>=U&&Sn(n?t[n]:s)))}var c=t[0],b=-1,C=c?c.length:0,x=[];t:for(;++b<C;){var S=r[0];if(o=c[b],(S?Yt(S,o):i(s,o))<0){for(n=e,(S||s).push(o);--n;)if(S=r[n],(S?Yt(S,o):i(t[n],o))<0)continue t;x.push(o)}}for(;e--;)S=r[e],S&&Vt(S);return mt(r),mt(s),x}function pi(t,n,e){var r=0,i=t?t.length:0;if(typeof n!="number"&&n!=null){var u=i;for(n=f.createCallback(n,e,3);u--&&n(t[u],u,t);)r++}else if(r=n,r==null||e)return t?t[i-1]:p;return $(t,yt(0,i-r))}function di(t,n,e){var r=t?t.length:0;for(typeof e=="number"&&(r=(e<0?yt(0,r+e):Xt(e,r-1))+1);r--;)if(t[r]===n)return r;return-1}function ci(t){for(var n=arguments,e=0,r=n.length,i=t?t.length:0;++e<r;)for(var u=-1,s=n[e];++u<i;)t[u]===s&&(kn.call(t,u--,1),i--);return t}function gi(t,n,e){t=+t||0,e=typeof e=="number"?e:+e||1,n==null&&(n=t,t=0);for(var r=-1,i=yt(0,hr((n-t)/(e||1))),u=j(i);++r<i;)u[r]=t,t+=e;return u}function vi(t,n,e){var r=-1,i=t?t.length:0,u=[];for(n=f.createCallback(n,e,3);++r<i;){var s=t[r];n(s,r,t)&&(u.push(s),kn.call(t,r--,1),i--)}return u}function Wn(t,n,e){if(typeof n!="number"&&n!=null){var r=0,i=-1,u=t?t.length:0;for(n=f.createCallback(n,e,3);++i<u&&n(t[i],i,t);)r++}else r=n==null||e?1:yt(0,n);return $(t,r)}function ve(t,n,e,r){var i=0,u=t?t.length:i;for(e=e?f.createCallback(e,r,1):Hn,n=e(n);i<u;){var s=i+u>>>1;e(t[s])<n?i=s+1:u=s}return i}function mi(){return Un(Ft(arguments,!0,!0))}function me(t,n,e,r){return typeof n!="boolean"&&n!=null&&(r=e,e=typeof n!="function"&&r&&r[n]===t?null:n,n=!1),e!=null&&(e=f.createCallback(e,r,3)),Un(t,n,e)}function yi(t){return tn(t,$(arguments,1))}function wi(){for(var t=-1,n=arguments.length;++t<n;){var e=arguments[t];if(Z(e)||vn(e))var r=r?Un(tn(r,e).concat(tn(e,r))):e}return r||[]}function ye(){for(var t=arguments.length>1?arguments:arguments[0],n=-1,e=t?he(Yn(t,"length")):0,r=j(e<0?0:e);++n<e;)r[n]=Yn(t,n);return r}function we(t,n){var e=-1,r=t?t.length:0,i={};for(!n&&r&&!Z(t[0])&&(n=[]);++e<r;){var u=t[e];n?i[u]=n[e]:u&&(i[u[0]]=u[1])}return i}function _i(t,n){if(!J(n))throw new Ot;return function(){if(--t<1)return n.apply(this,arguments)}}function _e(t,n){return arguments.length>2?bt(t,17,$(arguments,2),null,n):bt(t,1,null,null,n)}function Ci(t){for(var n=arguments.length>1?Ft(arguments,!0,!1,1):nn(t),e=-1,r=n.length;++e<r;){var i=n[e];t[i]=bt(t[i],1,null,null,t)}return t}function bi(t,n){return arguments.length>2?bt(n,19,$(arguments,2),null,t):bt(n,3,null,null,t)}function Ri(){for(var t=arguments,n=t.length;n--;)if(!J(t[n]))throw new Ot;return function(){for(var e=arguments,r=t.length;r--;)e=[t[r].apply(this,e)];return e[0]}}function Ei(t,n){return n=typeof n=="number"?n:+n||t.length,bt(t,4,null,null,null,n)}function Ce(t,n,e){var r,i,u,s,o,c,b,C=0,x=!1,S=!0;if(!J(t))throw new Ot;if(n=yt(0,n)||0,e===!0){var H=!0;S=!1}else ut(e)&&(H=e.leading,x="maxWait"in e&&(yt(n,e.maxWait)||0),S="trailing"in e?e.trailing:S);var B=function(){var pt=n-(zt()-s);if(pt<=0){i&&pn(i);var st=b;i=c=b=p,st&&(C=zt(),u=t.apply(o,r),!c&&!i&&(r=o=null))}else c=Qt(B,pt)},lt=function(){c&&pn(c),i=c=b=p,(S||x!==n)&&(C=zt(),u=t.apply(o,r),!c&&!i&&(r=o=null))};return function(){if(r=arguments,s=zt(),o=this,b=S&&(c||!H),x===!1)var pt=H&&!c;else{!i&&!H&&(C=s);var st=x-(s-C),Q=st<=0;Q?(i&&(i=pn(i)),C=s,u=t.apply(o,r)):i||(i=Qt(lt,st))}return Q&&c?c=pn(c):!c&&n!==x&&(c=Qt(B,n)),pt&&(Q=!0,u=t.apply(o,r)),Q&&!c&&!i&&(r=o=null),u}}function Oi(t){if(!J(t))throw new Ot;var n=$(arguments,1);return Qt(function(){t.apply(p,n)},1)}function Si(t,n){if(!J(t))throw new Ot;var e=$(arguments,2);return Qt(function(){t.apply(p,e)},n)}function Di(t,n){if(!J(t))throw new Ot;var e=function(){var r=e.cache,i=n?n.apply(this,arguments):_+arguments[0];return rt.call(r,i)?r[i]:r[i]=t.apply(this,arguments)};return e.cache={},e}function xi(t){var n,e;if(!J(t))throw new Ot;return function(){return n||(n=!0,e=t.apply(this,arguments),t=null),e}}function Ti(t){return bt(t,16,$(arguments,1))}function Ii(t){return bt(t,32,null,$(arguments,1))}function ji(t,n,e){var r=!0,i=!0;if(!J(t))throw new Ot;return e===!1?r=!1:ut(e)&&(r="leading"in e?e.leading:r,i="trailing"in e?e.trailing:i),z.leading=r,z.maxWait=n,z.trailing=i,Ce(t,n,z)}function Fi(t,n){return bt(n,16,[t])}function Ui(t){return function(){return t}}function Mi(t,n,e){var r=typeof t;if(t==null||r=="function")return ot(t,n,e);if(r!="object")return Re(t);var i=it(t),u=i[0],s=t[u];return i.length==1&&s===s&&!ut(s)?function(o){var c=o[u];return s===c&&(s!==0||1/s==1/c)}:function(o){for(var c=i.length,b=!1;c--&&(b=Wt(o[i[c]],t[i[c]],null,!0)););return b}}function Pi(t){return t==null?"":jt(t).replace(br,yr)}function Hn(t){return t}function Bn(t,n,e){var r=!0,i=n&&nn(n);(!n||!e&&!i.length)&&(e==null&&(e=n),u=Nt,n=t,t=f,i=nn(n)),e===!1?r=!1:ut(e)&&"chain"in e&&(r=e.chain);var u=t,s=J(u);ft(i,function(o){var c=t[o]=n[o];s&&(u.prototype[o]=function(){var b=this.__chain__,C=this.__wrapped__,x=[C];Jt.apply(x,arguments);var S=c.apply(t,x);if(r||b){if(C===S&&ut(S))return this;S=new u(S),S.__chain__=b}return S})})}function Ni(){return E._=or,this}function be(){}var zt=Ut(zt=Y.now)&&zt||function(){return new Y().getTime()},zi=In(N+"08")==8?In:function(t,n){return In(en(t)?t.replace(qt,""):t,n||0)};function Re(t){return function(n){return n[t]}}function Li(t,n,e){var r=t==null,i=n==null;if(e==null&&(typeof t=="boolean"&&i?(e=t,t=1):!i&&typeof n=="boolean"&&(e=n,i=!0)),r&&i&&(n=1),t=+t||0,i?(n=t,t=0):n=+n||0,e||t%1||n%1){var u=ne();return Xt(t+u*(n-t+parseFloat("1e-"+((u+"").length-1))),n)}return Fn(t,n)}function qi(t,n){if(t){var e=t[n];return J(e)?t[n]():e}}function Yi(t,n,e){var r=f.templateSettings;t=jt(t||""),e=zn({},e,r);var i=zn({},e.imports,r.imports),u=it(i),s=yn(i),o,c=0,b=e.interpolate||Tt,C="__p += '",x=Gt((e.escape||Tt).source+"|"+b.source+"|"+(b===tt?wt:Tt).source+"|"+(e.evaluate||Tt).source+"|$","g");t.replace(x,function(pt,st,Q,Cn,un,fn){return Q||(Q=Cn),C+=t.slice(c,fn).replace(Bt,ar),st&&(C+=`' +
__e(`+st+`) +
'`),un&&(o=!0,C+=`';
`+un+`;
__p += '`),Q&&(C+=`' +
((__t = (`+Q+`)) == null ? '' : __t) +
'`),c=fn+pt.length,pt}),C+=`';
`;var S=e.variable,H=S;H||(S="obj",C="with ("+S+`) {
`+C+`
}
`),C=(o?C.replace(k,""):C).replace(dt,"$1").replace(ct,"$1;"),C="function("+S+`) {
`+(H?"":S+" || ("+S+` = {});
`)+"var __t, __p = '', __e = _.escape"+(o?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+C+`return __p
}`;var B=`
/*
//# sourceURL=`+(e.sourceURL||"/lodash/template/source["+h+++"]")+`
*/`;try{var lt=W(u,"return "+C+B).apply(p,s)}catch(pt){throw pt.source=C,pt}return n?lt(n):(lt.source=C,lt)}function Ki(t,n,e){t=(t=+t)>-1?t:0;var r=-1,i=j(t);for(n=ot(n,e,1);++r<t;)i[r]=n(r);return i}function $i(t){return t==null?"":jt(t).replace(Cr,wr)}function Wi(t){var n=++T;return jt(t??"")+n}function Hi(t){return t=new Nt(t),t.__chain__=!0,t}function Bi(t,n){return n(t),t}function Ai(){return this.__chain__=!0,this}function Vi(){return jt(this.__wrapped__)}function Ee(){return this.__wrapped__}return f.after=_i,f.assign=mn,f.at=Ar,f.bind=_e,f.bindAll=Ci,f.bindKey=bi,f.chain=Hi,f.compact=ui,f.compose=Ri,f.constant=Ui,f.countBy=Vr,f.create=Or,f.createCallback=Mi,f.curry=Ei,f.debounce=Ce,f.defaults=zn,f.defer=Oi,f.delay=Si,f.difference=fi,f.filter=wn,f.flatten=oi,f.forEach=ft,f.forEachRight=_n,f.forIn=Dt,f.forInRight=xr,f.forOwn=A,f.forOwnRight=fe,f.functions=nn,f.groupBy=Jr,f.indexBy=Qr,f.initial=li,f.intersection=hi,f.invert=se,f.invoke=Xr,f.keys=it,f.map=rn,f.mapValues=Yr,f.max=he,f.memoize=Di,f.merge=Kr,f.min=Zr,f.omit=$r,f.once=xi,f.pairs=Wr,f.partial=Ti,f.partialRight=Ii,f.pick=Hr,f.pluck=Yn,f.property=Re,f.pull=ci,f.range=gi,f.reject=kr,f.remove=vi,f.rest=Wn,f.shuffle=de,f.sortBy=ei,f.tap=Bi,f.throttle=ji,f.times=Ki,f.toArray=ri,f.transform=Br,f.union=mi,f.uniq=me,f.values=yn,f.where=ii,f.without=yi,f.wrap=Fi,f.xor=wi,f.zip=ye,f.zipObject=we,f.collect=rn,f.drop=Wn,f.each=ft,f.eachRight=_n,f.extend=mn,f.methods=nn,f.object=we,f.select=wn,f.tail=Wn,f.unique=me,f.unzip=ye,Bn(f),f.clone=Rr,f.cloneDeep=Er,f.contains=oe,f.escape=Pi,f.every=le,f.find=qn,f.findIndex=si,f.findKey=Sr,f.findLast=Gr,f.findLastIndex=ai,f.findLastKey=Dr,f.has=Tr,f.identity=Hn,f.indexOf=ge,f.isArguments=vn,f.isArray=Z,f.isBoolean=Ir,f.isDate=jr,f.isElement=Fr,f.isEmpty=Ur,f.isEqual=Mr,f.isFinite=Pr,f.isFunction=J,f.isNaN=Nr,f.isNull=zr,f.isNumber=ae,f.isObject=ut,f.isPlainObject=Ln,f.isRegExp=Lr,f.isString=en,f.isUndefined=qr,f.lastIndexOf=di,f.mixin=Bn,f.noConflict=Ni,f.noop=be,f.now=zt,f.parseInt=zi,f.random=Li,f.reduce=Kn,f.reduceRight=pe,f.result=qi,f.runInContext=xn,f.size=ni,f.some=ce,f.sortedIndex=ve,f.template=Yi,f.unescape=$i,f.uniqueId=Wi,f.all=le,f.any=ce,f.detect=qn,f.findWhere=qn,f.foldl=Kn,f.foldr=pe,f.include=oe,f.inject=Kn,Bn((function(){var t={};return A(f,function(n,e){f.prototype[e]||(t[e]=n)}),t})(),!1),f.first=$n,f.last=pi,f.sample=ti,f.take=$n,f.head=$n,A(f,function(t,n){var e=n!=="sample";f.prototype[n]||(f.prototype[n]=function(r,i){var u=this.__chain__,s=t(this.__wrapped__,r,i);return!u&&(r==null||i&&!(e&&typeof r=="function"))?s:new Nt(s,u)})}),f.VERSION="2.4.2",f.prototype.chain=Ai,f.prototype.toString=Vi,f.prototype.value=Ee,f.prototype.valueOf=Ee,ft(["join","pop","shift"],function(t){var n=Kt[t];f.prototype[t]=function(){var e=this.__chain__,r=n.apply(this.__wrapped__,arguments);return e?new Nt(r,e):r}}),ft(["push","reverse","sort","unshift"],function(t){var n=Kt[t];f.prototype[t]=function(){return n.apply(this.__wrapped__,arguments),this}}),ft(["concat","slice","splice"],function(t){var n=Kt[t];f.prototype[t]=function(){return new Nt(n.apply(this.__wrapped__,arguments),this.__chain__)}}),f}var It=xn();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(L._=It,define(function(){return It})):V&&vt?At?(vt.exports=It)._=It:V._=It:L._=It}).call(Ht)});var nr=xt(hn=>{q();(function(p,m){if(typeof hn=="object"&&hn)m(hn);else{var D={};m(D),typeof define=="function"&&define.amd?define(D):p.Mustache=D}})(hn,function(p){var m=RegExp.prototype.test;function D(y,w){return m.call(y,w)}var T=/\S/;function _(y){return!D(T,y)}var U=Object.prototype.toString,P=Array.isArray||function(y){return U.call(y)==="[object Array]"};function N(y){return typeof y=="function"}function k(y){return y.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var dt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function ct(y){return String(y).replace(/[&<>"'\/]/g,function(w){return dt[w]})}function wt(y){if(!P(y)||y.length!==2)throw new Error("Invalid tags: "+y);return[new RegExp(k(y[0])+"\\s*"),new RegExp("\\s*"+k(y[1]))]}var Et=/\s*/,X=/\s+/,tt=/\s*=/,qt=/\s*\}/,Tt=/#|\^|\/|>|\{|&|=|!/;function Mt(y,w){w=w||p.tags,y=y||"",typeof w=="string"&&(w=w.split(X));var R=wt(w),a=new h(y),l=[],v=[],g=[],z=!1,F=!1;function K(){if(z&&!F)for(;g.length;)delete v[g.pop()];else g=[];z=!1,F=!1}for(var gt,L,V,vt,At,nt;!a.eos();){if(gt=a.pos,V=a.scanUntil(R[0]),V)for(var _t=0,Yt=V.length;_t<Yt;++_t)vt=V.charAt(_t),_(vt)?g.push(v.length):F=!0,v.push(["text",vt,gt,gt+1]),gt+=1,vt===`
`&&K();if(!a.scan(R[0]))break;if(z=!0,L=a.scan(Tt)||"name",a.scan(Et),L==="="?(V=a.scanUntil(tt),a.scan(tt),a.scanUntil(R[1])):L==="{"?(V=a.scanUntil(new RegExp("\\s*"+k("}"+w[1]))),a.scan(qt),a.scanUntil(R[1]),L="&"):V=a.scanUntil(R[1]),!a.scan(R[1]))throw new Error("Unclosed tag at "+a.pos);if(At=[L,V,gt,a.pos],v.push(At),L==="#"||L==="^")l.push(At);else if(L==="/"){if(nt=l.pop(),!nt)throw new Error('Unopened section "'+V+'" at '+gt);if(nt[1]!==V)throw new Error('Unclosed section "'+nt[1]+'" at '+gt)}else L==="name"||L==="{"||L==="&"?F=!0:L==="="&&(R=wt(w=V.split(X)))}if(nt=l.pop(),nt)throw new Error('Unclosed section "'+nt[1]+'" at '+a.pos);return Pt(Bt(v))}function Bt(y){for(var w=[],R,a,l=0,v=y.length;l<v;++l)R=y[l],R&&(R[0]==="text"&&a&&a[0]==="text"?(a[1]+=R[1],a[3]=R[3]):(w.push(R),a=R));return w}function Pt(y){for(var w=[],R=w,a=[],l,v,g=0,z=y.length;g<z;++g)switch(l=y[g],l[0]){case"#":case"^":R.push(l),a.push(l),R=l[4]=[];break;case"/":v=a.pop(),v[5]=l[2],R=a.length>0?a[a.length-1][4]:w;break;default:R.push(l)}return w}function h(y){this.string=y,this.tail=y,this.pos=0}h.prototype.eos=function(){return this.tail===""},h.prototype.scan=function(y){var w=this.tail.match(y);if(w&&w.index===0){var R=w[0];return this.tail=this.tail.substring(R.length),this.pos+=R.length,R}return""},h.prototype.scanUntil=function(y){var w=this.tail.search(y),R;switch(w){case-1:R=this.tail,this.tail="";break;case 0:R="";break;default:R=this.tail.substring(0,w),this.tail=this.tail.substring(w)}return this.pos+=R.length,R};function O(y,w){this.view=y??{},this.cache={".":this.view},this.parent=w}O.prototype.push=function(y){return new O(y,this)},O.prototype.lookup=function(y){var w;if(y in this.cache)w=this.cache[y];else{for(var R=this;R;){if(y.indexOf(".")>0){w=R.view;for(var a=y.split("."),l=0;w!=null&&l<a.length;)w=w[a[l++]]}else w=R.view[y];if(w!=null)break;R=R.parent}this.cache[y]=w}return N(w)&&(w=w.call(this.view)),w};function d(){this.cache={}}d.prototype.clearCache=function(){this.cache={}},d.prototype.parse=function(y,w){var R=this.cache,a=R[y];return a==null&&(a=R[y]=Mt(y,w)),a},d.prototype.render=function(y,w,R){var a=this.parse(y),l=w instanceof O?w:new O(w);return this.renderTokens(a,l,R,y)},d.prototype.renderTokens=function(y,w,R,a){var l="",v=this;function g(vt){return v.render(vt,w,R)}for(var z,F,K=0,gt=y.length;K<gt;++K)switch(z=y[K],z[0]){case"#":if(F=w.lookup(z[1]),!F)continue;if(P(F))for(var L=0,V=F.length;L<V;++L)l+=this.renderTokens(z[4],w.push(F[L]),R,a);else if(typeof F=="object"||typeof F=="string")l+=this.renderTokens(z[4],w.push(F),R,a);else if(N(F)){if(typeof a!="string")throw new Error("Cannot use higher-order sections without the original template");F=F.call(w.view,a.slice(z[3],z[5]),g),F!=null&&(l+=F)}else l+=this.renderTokens(z[4],w,R,a);break;case"^":F=w.lookup(z[1]),(!F||P(F)&&F.length===0)&&(l+=this.renderTokens(z[4],w,R,a));break;case">":if(!R)continue;F=N(R)?R(z[1]):R[z[1]],F!=null&&(l+=this.renderTokens(this.parse(F),w,R,F));break;case"&":F=w.lookup(z[1]),F!=null&&(l+=F);break;case"name":F=w.lookup(z[1]),F!=null&&(l+=p.escape(F));break;case"text":l+=z[1];break}return l},p.name="mustache.js",p.version="0.8.1",p.tags=["{{","}}"];var I=new d;p.clearCache=function(){return I.clearCache()},p.parse=function(y,w){return I.parse(y,w)},p.render=function(y,w,R){return I.render(y,w,R)},p.to_html=function(y,w,R,a){var l=p.render(y,w,R);if(N(a))a(l);else return l},p.escape=ct,p.Scanner=h,p.Context=O,p.Writer=d})});var ir=xt((Iu,rr)=>{q();var er=(qe(),nu(Le)),au=ke(),Qn=tr(),ou=nr();function lu(p){Qn.each(p.work,function(_){_.startDateYear=_.startDate.substr(0,4),_.endDate?_.endDateYear=_.endDate.substr(0,4):_.endDateYear="Present"}),Qn.each(p.volunteer,function(_){_.startDateYear=_.startDate.substr(0,4),_.endDate?_.endDateYear=_.endDate.substr(0,4):_.endDateYear="Present"}),Qn.each(p.education,function(_){!_.area||!_.studyType?_.educationDetail=(_.area==null?"":_.area)+(_.studyType==null?"":_.studyType):_.educationDetail=_.area+", "+_.studyType,_.startDateYear=_.startDate.substr(0,4),_.endDate?_.endDateYear=_.endDate.substr(0,4):_.endDateYear="Present"}),p.basics&&p.basics.email&&(p.basics.gravatar=au.url(p.basics.email,{size:"100",rating:"g",default:"blank"}));var m=er.readFileSync("//resume.template","utf8"),D=er.readFileSync("//resume.css","utf-8");p.css=D;var T=ou.render(m,p);return T}rr.exports={render:lu}});q();var Lt=tu(ir(),1),ur=Lt.default??Lt,Fu=ur.render??Lt.render,Uu=ur.pdfRenderOptions??Lt.pdfRenderOptions;export{Uu as pdfRenderOptions,Fu as render};
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
