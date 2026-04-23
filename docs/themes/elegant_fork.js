var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var ta=Object.create;var Ft=Object.defineProperty;var na=Object.getOwnPropertyDescriptor;var ra=Object.getOwnPropertyNames;var ea=Object.getPrototypeOf,aa=Object.prototype.hasOwnProperty;var er=(o,v)=>()=>(o&&(v=o(o=0)),v);var nt=(o,v)=>()=>(v||o((v={exports:{}}).exports,v),v.exports),ia=(o,v)=>{for(var S in v)Ft(o,S,{get:v[S],enumerable:!0})},ar=(o,v,S,y)=>{if(v&&typeof v=="object"||typeof v=="function")for(let A of ra(v))!aa.call(o,A)&&A!==S&&Ft(o,A,{get:()=>v[A],enumerable:!(y=na(v,A))||y.enumerable});return o};var ua=(o,v,S)=>(S=o!=null?ta(ea(o)):{},ar(v||!o||!o.__esModule?Ft(S,"default",{value:o,enumerable:!0}):S,o)),sa=o=>ar(Ft({},"__esModule",{value:!0}),o);var P=er(()=>{});var gr={};ia(gr,{createReadStream:()=>pr,createWriteStream:()=>dr,default:()=>fa,existsSync:()=>fr,lstatSync:()=>cr,mkdirSync:()=>lr,readFileSync:()=>ur,readdirSync:()=>sr,rmdirSync:()=>vr,statSync:()=>ln,unlinkSync:()=>hr,writeFileSync:()=>or});function on(o){return String(o).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function ir(o){var v=on(o);if(Ut[v]!==void 0)return Ut[v];for(var S=Object.keys(Ut),y=0;y<S.length;y++)if(v.endsWith("/"+S[y])||v===S[y])return Ut[S[y]]}function fn(o){var v=on(o);if((v===""||v===".")&&gt["."]!==void 0)return gt["."];if(gt[v]!==void 0)return gt[v];for(var S=Object.keys(gt),y=0;y<S.length;y++)if(v.endsWith("/"+S[y])||v===S[y])return gt[S[y]]}var Ut,gt,ur,sr,fr,or,lr,ln,cr,hr,vr,pr,dr,fa,mr=er(()=>{"use strict";P();Ut={"package.json":`{
  "name": "jsonresume-theme-elegant_fork",
  "version": "0.0.5",
  "description": "Fork of Elegant theme for jsonresume",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/umrysh/jsonresume-theme-elegant.git"
  },
  "keywords": [
    "jsonresume",
    "theme",
    "elegant_fork"
  ],
  "author": "Mudassir Ali <mudassir.dev@gmail.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/umrysh/jsonresume-theme-elegant/issues"
  },
  "homepage": "https://github.com/umrysh/jsonresume-theme-elegant",
  "dependencies": {
    "resume-schema": "0.0.11",
    "gravatar": "^1.0.6",
    "mustache": "^0.8.2",
    "tarball-extract": "0.0.3",
    "underscore": "^1.6.0"
  }
}
`,"resume.template":`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>{{basics.name}}</title>
		<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
		<style>
			body {
				font-family: 'Lato';
				background-image: url("http://cdn.backgroundhost.com/backgrounds/subtlepatterns/snow.png");
			}

			.oswald-font {
				font-family: 'oswald';
				vertical-align: bottom;
			}

			.name {
				text-transform: uppercase;
			}
			
			a:hover {
				text-decoration: none;
			}
			
			.link-github {
				color: #454545;
			}
			
			.link-github:hover {
				color: black;
			}
			
			.link-twitter {
				color: #33CCFF;
			}
			
			.social-link {
				margin-left: 5px;
			}
			
			.social-link:first-child {
				margin-left: 0;
			}
			
			.link-blog {
				color: rgb(243, 111, 36);
			}
			
			.link-blog:hover {
				color: rgb(211, 97, 32);
			}
			
			.summary {
				font-family: "Pt mono";
				font-size: 1.2em;
			}
			
			.wip {
				position: absolute;
				right: 0;
			}
			
			.item-detail h3 {
				margin-top: 0;
			}
		</style>
	</head>
	
	<body>
		<div class="container">

			<div class="col-md-10 col-md-offset-1">
			<br>
				<div class="col-md-2">
        				<img class="media-object img-circle pull-right" 
							data-src="holder.js/64x64" alt="64x64" src="{{basics.picture}}"
							style="width: 150px; height: 150px;">
				</div>
				<div class="col-md-10">
					<h1 class="name oswald-font">{{basics.name}}</h1>
					<hr>
					<p class="location text col-md-6">
						<span class="fa fa-location-arrow"></span>
						{{#basics.location.address}}{{basics.location.address}}, {{/basics.location.address}}{{basics.location.city}}, {{basics.location.region}}, {{basics.location.countryCode}}{{#basics.location.postalCode}} {{basics.location.postalCode}}{{/basics.location.postalCode}}
						<br>
						<span class="social-links-wrapper">
							{{#basics.profiles}}
							<a href="{{url}}" target="_blank">{{network}}</a>&nbsp;&nbsp;
							{{/basics.profiles}}
						</span>
					</p>
					<p class="location text-right col-md-6">
						{{#basics.email}}
						<span class="fa fa-envelope"></span>
						{{basics.email}}
						{{/basics.email}}
						{{#basics.phone}}
						<br>
						<span class="fa fa-phone"></span>
						{{basics.phone}}
						{{/basics.phone}}
						{{#basics.website}}
						<br>
						<span class="fa fa-rss-square"></span>
						<a target="_blank" href="{{basics.website}}">{{basics.website}}</a>
						{{/basics.website}}
						<br>
					</p>
				</div>
				<div class="col-md-12">
					<hr>
					<p class="summary">
						<sup class="fa fa-quote-left"></sup>
						{{basics.summary}}
						<sup class="fa fa-quote-right"></sup>
					</p>
				</div>
				<div class="col-md-12">
					<h2 class="oswald-font"><span class="fa fa-building-o"></span>&nbsp; Work Experience</h3>
					<hr>
					<div class="col-md-10">
						{{#work}}
							<div class="item-detail">
								<h3>
									<span>{{position}}</span> 
									<span class="pull-right">( {{startDate}}{{#endDate}} - {{endDate}}{{/endDate}} )</span>
								</h3>
								<h4>
									<a target="_blank" href="{{website}}">
										@{{company}} 
									</a>
								</h4>
								<p class="text-muted">{{summary}}</p>
							</div>
							<ul>
            					{{#highlights}}
								<li>{{.}}</li>
              					{{/highlights}}
							</ul>
							<hr>
						{{/work}}
					</div>
				</div>
				<div class="col-md-12">
					<h2 class="oswald-font"><span class="fa fa-university"></span>&nbsp; Education</h2>
					<hr>
					<div class="col-md-10">			
						{{#education}}
							<div class="item-detail">
								<h3>{{institution}}</h3>
								<h4>{{area}}, {{studyType}}</h4>
								{{#gpa}}<h5>{{gpa}}</h5>{{/gpa}}
								<h5>{{startDate}}{{#endDate}} - {{endDate}}{{/endDate}}</h5>
							</div>
							<ul>
								{{#courses}}
								<li>{{.}}</li>
								{{/courses}}
							</ul>
							<hr>
						{{/education}}
					</div>
				</div>
				<div class="col-md-12">
					<h2 class="oswald-font"><span class="fa fa-mortar-board"></span>&nbsp; Skills</h2>
					<hr>
					<div class="col-md-10">
						{{#skills}}
							<h4> {{name}} </h4>
							<h5><b>{{level}}</b></h5>
							{{#keywords}}
								<span class="badge" style="background-color : #67809F;padding: 0.5em 0.5em 5px 0.5em;margin: 0 0 5px 0;">{{.}}</span> 
							{{/keywords}}
							<hr>
						{{/skills}}
					</div>
				</div>
				<div class="col-md-12">
					<h2 class="oswald-font"><span class="fa fa-group"></span>&nbsp; Volunteerism</h3>
					<hr>
					<div class="col-md-10">
						{{#volunteer}}
							<div class="item-detail">
								<h3>
									{{#website}}<a target="_blank" href="{{website}}">
										@{{/website}}{{organization}} 
									{{#website}}</a>{{/website}}
								</h3>
								{{#summary}}<p class="text-muted">{{summary}}</p>{{/summary}}
								<h5>{{startDate}}{{#endDate}} - {{endDate}}{{/endDate}}</h5>
								<h4>
									{{#position}}<span>{{position}}</span>{{/position}}
								</h4>
							</div>
							<ul>
            					{{#highlights}}
								<li>{{.}}</li>
              					{{/highlights}}
							</ul>
							<hr>
						{{/volunteer}}
					</div>
				</div>
				<div class="col-md-12">
					<h2 class="oswald-font"><span class="fa fa-book"></span>&nbsp; Hobbies</h2>
					<hr>
					<div class="col-md-10">
						<ul>
							{{#interests}}
								<li><div class="item-detail">
									<h5>{{name}}</h5>
								</div>
								<ul>
									{{#keywords}}
									<li>{{.}}</li>
									{{/keywords}}
								</ul></li>
							{{/interests}}
						</ul>
						<hr>
					</div>
				</div>
			</div>
		</div>

		<link href='http://fonts.googleapis.com/css?family=PT+Mono' rel='stylesheet' type='text/css'>		
		<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"><\/script>
	</body>
</html>`},gt={".":["README.md","index.js","package.json","resume.template"]};ur=function(o,v){var S=ir(o);return S!==void 0?S:""},sr=function(o,v){var S=fn(o);return S===void 0&&(S=[]),v&&v.withFileTypes?S.map(function(y){var A=on(o)+"/"+y,O=fn(A)!==void 0;return{name:y,isFile:function(){return!O},isDirectory:function(){return O}}}):S},fr=function(o){return ir(o)!==void 0||fn(o)!==void 0},or=function(){},lr=function(){},ln=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},cr=ln,hr=function(){},vr=function(){},pr=function(){return{pipe:function(o){return o},on:function(){return this}}},dr=function(){return{write:function(){},end:function(){},on:function(){return this}}},fa={readFileSync:ur,readdirSync:sr,existsSync:fr,writeFileSync:or,mkdirSync:lr,statSync:ln,lstatSync:cr,unlinkSync:hr,rmdirSync:vr,createReadStream:pr,createWriteStream:dr}});var wr=nt((yr,Bt)=>{P();(function(o){"use strict";function v(s,D){var c=(s&65535)+(D&65535),k=(s>>16)+(D>>16)+(c>>16);return k<<16|c&65535}function S(s,D){return s<<D|s>>>32-D}function y(s,D,c,k,d,m){return v(S(v(v(D,s),v(k,m)),d),c)}function A(s,D,c,k,d,m,g){return y(D&c|~D&k,s,D,d,m,g)}function O(s,D,c,k,d,m,g){return y(D&k|c&~k,s,D,d,m,g)}function _(s,D,c,k,d,m,g){return y(D^c^k,s,D,d,m,g)}function M(s,D,c,k,d,m,g){return y(c^(D|~k),s,D,d,m,g)}function W(s,D){s[D>>5]|=128<<D%32,s[(D+64>>>9<<4)+14]=D;var c,k,d,m,g,u=1732584193,l=-271733879,h=-1732584194,p=271733878;for(c=0;c<s.length;c+=16)k=u,d=l,m=h,g=p,u=A(u,l,h,p,s[c],7,-680876936),p=A(p,u,l,h,s[c+1],12,-389564586),h=A(h,p,u,l,s[c+2],17,606105819),l=A(l,h,p,u,s[c+3],22,-1044525330),u=A(u,l,h,p,s[c+4],7,-176418897),p=A(p,u,l,h,s[c+5],12,1200080426),h=A(h,p,u,l,s[c+6],17,-1473231341),l=A(l,h,p,u,s[c+7],22,-45705983),u=A(u,l,h,p,s[c+8],7,1770035416),p=A(p,u,l,h,s[c+9],12,-1958414417),h=A(h,p,u,l,s[c+10],17,-42063),l=A(l,h,p,u,s[c+11],22,-1990404162),u=A(u,l,h,p,s[c+12],7,1804603682),p=A(p,u,l,h,s[c+13],12,-40341101),h=A(h,p,u,l,s[c+14],17,-1502002290),l=A(l,h,p,u,s[c+15],22,1236535329),u=O(u,l,h,p,s[c+1],5,-165796510),p=O(p,u,l,h,s[c+6],9,-1069501632),h=O(h,p,u,l,s[c+11],14,643717713),l=O(l,h,p,u,s[c],20,-373897302),u=O(u,l,h,p,s[c+5],5,-701558691),p=O(p,u,l,h,s[c+10],9,38016083),h=O(h,p,u,l,s[c+15],14,-660478335),l=O(l,h,p,u,s[c+4],20,-405537848),u=O(u,l,h,p,s[c+9],5,568446438),p=O(p,u,l,h,s[c+14],9,-1019803690),h=O(h,p,u,l,s[c+3],14,-187363961),l=O(l,h,p,u,s[c+8],20,1163531501),u=O(u,l,h,p,s[c+13],5,-1444681467),p=O(p,u,l,h,s[c+2],9,-51403784),h=O(h,p,u,l,s[c+7],14,1735328473),l=O(l,h,p,u,s[c+12],20,-1926607734),u=_(u,l,h,p,s[c+5],4,-378558),p=_(p,u,l,h,s[c+8],11,-2022574463),h=_(h,p,u,l,s[c+11],16,1839030562),l=_(l,h,p,u,s[c+14],23,-35309556),u=_(u,l,h,p,s[c+1],4,-1530992060),p=_(p,u,l,h,s[c+4],11,1272893353),h=_(h,p,u,l,s[c+7],16,-155497632),l=_(l,h,p,u,s[c+10],23,-1094730640),u=_(u,l,h,p,s[c+13],4,681279174),p=_(p,u,l,h,s[c],11,-358537222),h=_(h,p,u,l,s[c+3],16,-722521979),l=_(l,h,p,u,s[c+6],23,76029189),u=_(u,l,h,p,s[c+9],4,-640364487),p=_(p,u,l,h,s[c+12],11,-421815835),h=_(h,p,u,l,s[c+15],16,530742520),l=_(l,h,p,u,s[c+2],23,-995338651),u=M(u,l,h,p,s[c],6,-198630844),p=M(p,u,l,h,s[c+7],10,1126891415),h=M(h,p,u,l,s[c+14],15,-1416354905),l=M(l,h,p,u,s[c+5],21,-57434055),u=M(u,l,h,p,s[c+12],6,1700485571),p=M(p,u,l,h,s[c+3],10,-1894986606),h=M(h,p,u,l,s[c+10],15,-1051523),l=M(l,h,p,u,s[c+1],21,-2054922799),u=M(u,l,h,p,s[c+8],6,1873313359),p=M(p,u,l,h,s[c+15],10,-30611744),h=M(h,p,u,l,s[c+6],15,-1560198380),l=M(l,h,p,u,s[c+13],21,1309151649),u=M(u,l,h,p,s[c+4],6,-145523070),p=M(p,u,l,h,s[c+11],10,-1120210379),h=M(h,p,u,l,s[c+2],15,718787259),l=M(l,h,p,u,s[c+9],21,-343485551),u=v(u,k),l=v(l,d),h=v(h,m),p=v(p,g);return[u,l,h,p]}function X(s){var D,c="",k=s.length*32;for(D=0;D<k;D+=8)c+=String.fromCharCode(s[D>>5]>>>D%32&255);return c}function K(s){var D,c=[];for(c[(s.length>>2)-1]=void 0,D=0;D<c.length;D+=1)c[D]=0;var k=s.length*8;for(D=0;D<k;D+=8)c[D>>5]|=(s.charCodeAt(D/8)&255)<<D%32;return c}function J(s){return X(W(K(s),s.length*8))}function Q(s,D){var c,k=K(s),d=[],m=[],g;for(d[15]=m[15]=void 0,k.length>16&&(k=W(k,s.length*8)),c=0;c<16;c+=1)d[c]=k[c]^909522486,m[c]=k[c]^1549556828;return g=W(d.concat(K(D)),512+D.length*8),X(W(m.concat(g),640))}function N(s){var D="0123456789abcdef",c="",k,d;for(d=0;d<s.length;d+=1)k=s.charCodeAt(d),c+=D.charAt(k>>>4&15)+D.charAt(k&15);return c}function z(s){return unescape(encodeURIComponent(s))}function ot(s){return J(z(s))}function mt(s){return N(ot(s))}function at(s,D){return Q(z(s),z(D))}function lt(s,D){return N(at(s,D))}function it(s,D,c){return D?c?at(D,s):lt(D,s):c?ot(s):mt(s)}typeof define=="function"&&define.amd?define(function(){return it}):typeof Bt=="object"&&Bt.exports?Bt.exports=it:o.md5=it})(yr)});var Sr=nt((Ea,Dr)=>{"use strict";P();function oa(o,v){return Object.prototype.hasOwnProperty.call(o,v)}Dr.exports=function(o,v,S,y){v=v||"&",S=S||"=";var A={};if(typeof o!="string"||o.length===0)return A;var O=/\+/g;o=o.split(v);var _=1e3;y&&typeof y.maxKeys=="number"&&(_=y.maxKeys);var M=o.length;_>0&&M>_&&(M=_);for(var W=0;W<M;++W){var X=o[W].replace(O,"%20"),K=X.indexOf(S),J,Q,N,z;K>=0?(J=X.substr(0,K),Q=X.substr(K+1)):(J=X,Q=""),N=decodeURIComponent(J),z=decodeURIComponent(Q),oa(A,N)?Array.isArray(A[N])?A[N].push(z):A[N]=[A[N],z]:A[N]=z}return A}});var br=nt((Ra,Ar)=>{"use strict";P();var kt=function(o){switch(typeof o){case"string":return o;case"boolean":return o?"true":"false";case"number":return isFinite(o)?o:"";default:return""}};Ar.exports=function(o,v,S,y){return v=v||"&",S=S||"=",o===null&&(o=void 0),typeof o=="object"?Object.keys(o).map(function(A){var O=encodeURIComponent(kt(A))+S;return Array.isArray(o[A])?o[A].map(function(_){return O+encodeURIComponent(kt(_))}).join(v):O+encodeURIComponent(kt(o[A]))}).join(v):y?encodeURIComponent(kt(y))+S+encodeURIComponent(kt(o)):""}});var Er=nt(Rt=>{"use strict";P();Rt.decode=Rt.parse=Sr();Rt.encode=Rt.stringify=br()});var Or=nt((Ta,Mr)=>{P();var la=wr(),ca=Er(),ha=/^[0-9a-f]{32}$/;function va(o){var v={},S={protocol:1,format:1};for(var y in o)S[y]||(v[y]=o[y]);return v}function kr(o,v){if(o)return typeof o.protocol=="boolean"?o.protocol:o.protocol==="http"?!1:o.protocol==="https"?!0:void 0}function Rr(o){return o=typeof o=="string"?o.trim().toLowerCase():"unspecified",o.match(ha)?o:la(o)}function _r(o){var v=ca.stringify(va(o));return v&&"?"+v||""}var Ia=Mr.exports={url:function(o,v,S){var y="//www.gravatar.com/avatar/";v&&v.cdn?(y=v.cdn+"/avatar/",delete v.cdn):(v&&v.protocol&&(S=kr(v)),typeof S<"u"&&(y=S?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var A=_r(v);return y+Rr(o)+A},profile_url:function(o,v,S){var y=v!=null&&v.format!=null?String(v.format):"json",A;if(v&&v.cdn)A=v.cdn+"/",delete v.cdn;else{v&&v.protocol&&(S=kr(v));var A=S&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var O=_r(v);return A+Rr(o)+"."+y+O}}});var Tr=nt((Pa,Ir)=>{P();Ir.exports=Or()});var Cr=nt(_t=>{P();(function(o,v){if(typeof _t=="object"&&_t)v(_t);else{var S={};v(S),typeof define=="function"&&define.amd?define(S):o.Mustache=S}})(_t,function(o){var v=RegExp.prototype.test;function S(d,m){return v.call(d,m)}var y=/\S/;function A(d){return!S(y,d)}var O=Object.prototype.toString,_=Array.isArray||function(d){return O.call(d)==="[object Array]"};function M(d){return typeof d=="function"}function W(d){return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var X={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function K(d){return String(d).replace(/[&<>"'\/]/g,function(m){return X[m]})}function J(d){if(!_(d)||d.length!==2)throw new Error("Invalid tags: "+d);return[new RegExp(W(d[0])+"\\s*"),new RegExp("\\s*"+W(d[1]))]}var Q=/\s*/,N=/\s+/,z=/\s*=/,ot=/\s*\}/,mt=/#|\^|\/|>|\{|&|=|!/;function at(d,m){m=m||o.tags,d=d||"",typeof m=="string"&&(m=m.split(N));var g=J(m),u=new s(d),l=[],h=[],p=[],C=!1,R=!1;function rt(){if(C&&!R)for(;p.length;)delete h[p.pop()];else p=[];C=!1,R=!1}for(var G,U,T,x,ct,Y;!u.eos();){if(G=u.pos,T=u.scanUntil(g[0]),T)for(var yt=0,Nt=T.length;yt<Nt;++yt)x=T.charAt(yt),A(x)?p.push(h.length):R=!0,h.push(["text",x,G,G+1]),G+=1,x===`
`&&rt();if(!u.scan(g[0]))break;if(C=!0,U=u.scan(mt)||"name",u.scan(Q),U==="="?(T=u.scanUntil(z),u.scan(z),u.scanUntil(g[1])):U==="{"?(T=u.scanUntil(new RegExp("\\s*"+W("}"+m[1]))),u.scan(ot),u.scanUntil(g[1]),U="&"):T=u.scanUntil(g[1]),!u.scan(g[1]))throw new Error("Unclosed tag at "+u.pos);if(ct=[U,T,G,u.pos],h.push(ct),U==="#"||U==="^")l.push(ct);else if(U==="/"){if(Y=l.pop(),!Y)throw new Error('Unopened section "'+T+'" at '+G);if(Y[1]!==T)throw new Error('Unclosed section "'+Y[1]+'" at '+G)}else U==="name"||U==="{"||U==="&"?R=!0:U==="="&&(g=J(m=T.split(N)))}if(Y=l.pop(),Y)throw new Error('Unclosed section "'+Y[1]+'" at '+u.pos);return it(lt(h))}function lt(d){for(var m=[],g,u,l=0,h=d.length;l<h;++l)g=d[l],g&&(g[0]==="text"&&u&&u[0]==="text"?(u[1]+=g[1],u[3]=g[3]):(m.push(g),u=g));return m}function it(d){for(var m=[],g=m,u=[],l,h,p=0,C=d.length;p<C;++p)switch(l=d[p],l[0]){case"#":case"^":g.push(l),u.push(l),g=l[4]=[];break;case"/":h=u.pop(),h[5]=l[2],g=u.length>0?u[u.length-1][4]:m;break;default:g.push(l)}return m}function s(d){this.string=d,this.tail=d,this.pos=0}s.prototype.eos=function(){return this.tail===""},s.prototype.scan=function(d){var m=this.tail.match(d);if(m&&m.index===0){var g=m[0];return this.tail=this.tail.substring(g.length),this.pos+=g.length,g}return""},s.prototype.scanUntil=function(d){var m=this.tail.search(d),g;switch(m){case-1:g=this.tail,this.tail="";break;case 0:g="";break;default:g=this.tail.substring(0,m),this.tail=this.tail.substring(m)}return this.pos+=g.length,g};function D(d,m){this.view=d??{},this.cache={".":this.view},this.parent=m}D.prototype.push=function(d){return new D(d,this)},D.prototype.lookup=function(d){var m;if(d in this.cache)m=this.cache[d];else{for(var g=this;g;){if(d.indexOf(".")>0){m=g.view;for(var u=d.split("."),l=0;m!=null&&l<u.length;)m=m[u[l++]]}else m=g.view[d];if(m!=null)break;g=g.parent}this.cache[d]=m}return M(m)&&(m=m.call(this.view)),m};function c(){this.cache={}}c.prototype.clearCache=function(){this.cache={}},c.prototype.parse=function(d,m){var g=this.cache,u=g[d];return u==null&&(u=g[d]=at(d,m)),u},c.prototype.render=function(d,m,g){var u=this.parse(d),l=m instanceof D?m:new D(m);return this.renderTokens(u,l,g,d)},c.prototype.renderTokens=function(d,m,g,u){var l="",h=this;function p(x){return h.render(x,m,g)}for(var C,R,rt=0,G=d.length;rt<G;++rt)switch(C=d[rt],C[0]){case"#":if(R=m.lookup(C[1]),!R)continue;if(_(R))for(var U=0,T=R.length;U<T;++U)l+=this.renderTokens(C[4],m.push(R[U]),g,u);else if(typeof R=="object"||typeof R=="string")l+=this.renderTokens(C[4],m.push(R),g,u);else if(M(R)){if(typeof u!="string")throw new Error("Cannot use higher-order sections without the original template");R=R.call(m.view,u.slice(C[3],C[5]),p),R!=null&&(l+=R)}else l+=this.renderTokens(C[4],m,g,u);break;case"^":R=m.lookup(C[1]),(!R||_(R)&&R.length===0)&&(l+=this.renderTokens(C[4],m,g,u));break;case">":if(!g)continue;R=M(g)?g(C[1]):g[C[1]],R!=null&&(l+=this.renderTokens(this.parse(R),m,g,R));break;case"&":R=m.lookup(C[1]),R!=null&&(l+=R);break;case"name":R=m.lookup(C[1]),R!=null&&(l+=o.escape(R));break;case"text":l+=C[1];break}return l},o.name="mustache.js",o.version="0.8.1",o.tags=["{{","}}"];var k=new c;o.clearCache=function(){return k.clearCache()},o.parse=function(d,m){return k.parse(d,m)},o.render=function(d,m,g){return k.render(d,m,g)},o.to_html=function(d,m,g,u){var l=o.render(d,m,g);if(M(u))u(l);else return l},o.escape=K,o.Scanner=s,o.Context=D,o.Writer=c})});var Pr=nt((cn,hn)=>{P();(function(o,v){typeof cn=="object"&&typeof hn<"u"?hn.exports=v():typeof define=="function"&&define.amd?define("underscore",v):(o=typeof globalThis<"u"?globalThis:o||self,(function(){var S=o._,y=o._=v();y.noConflict=function(){return o._=S,y}})())})(cn,(function(){var o="1.13.8",v=typeof self=="object"&&self.self===self&&self||typeof globalThis=="object"&&globalThis.global===globalThis&&globalThis||Function("return this")()||{},S=Array.prototype,y=Object.prototype,A=typeof Symbol<"u"?Symbol.prototype:null,O=S.push,_=S.slice,M=y.toString,W=y.hasOwnProperty,X=typeof ArrayBuffer<"u",K=typeof DataView<"u",J=Array.isArray,Q=Object.keys,N=Object.create,z=X&&ArrayBuffer.isView,ot=isNaN,mt=isFinite,at=!{toString:null}.propertyIsEnumerable("toString"),lt=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],it=Math.pow(2,53)-1;function s(t,n){return n=n==null?t.length-1:+n,function(){for(var r=Math.max(arguments.length-n,0),e=Array(r),i=0;i<r;i++)e[i]=arguments[i+n];switch(n){case 0:return t.call(this,e);case 1:return t.call(this,arguments[0],e);case 2:return t.call(this,arguments[0],arguments[1],e)}var a=Array(n+1);for(i=0;i<n;i++)a[i]=arguments[i];return a[n]=e,t.apply(this,a)}}function D(t){var n=typeof t;return n==="function"||n==="object"&&!!t}function c(t){return t===null}function k(t){return t===void 0}function d(t){return t===!0||t===!1||M.call(t)==="[object Boolean]"}function m(t){return!!(t&&t.nodeType===1)}function g(t){var n="[object "+t+"]";return function(r){return M.call(r)===n}}var u=g("String"),l=g("Number"),h=g("Date"),p=g("RegExp"),C=g("Error"),R=g("Symbol"),rt=g("ArrayBuffer"),G=g("Function"),U=v.document&&v.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof U!="function"&&(G=function(t){return typeof t=="function"||!1});var T=G,x=g("Object"),ct=K&&(!/\[native code\]/.test(String(DataView))||x(new DataView(new ArrayBuffer(8)))),Y=typeof Map<"u"&&x(new Map),yt=g("DataView");function Nt(t){return t!=null&&T(t.getInt8)&&rt(t.buffer)}var Mt=ct?Nt:yt,ut=J||g("Array");function et(t,n){return t!=null&&W.call(t,n)}var qt=g("Arguments");(function(){qt(arguments)||(qt=function(t){return et(t,"callee")})})();var Vt=qt;function Nr(t){return!R(t)&&mt(t)&&!isNaN(parseFloat(t))}function pn(t){return l(t)&&ot(t)}function dn(t){return function(){return t}}function gn(t){return function(n){var r=t(n);return typeof r=="number"&&r>=0&&r<=it}}function mn(t){return function(n){return n?.[t]}}var Ot=mn("byteLength"),qr=gn(Ot),Vr=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function Lr(t){return z?z(t)&&!Mt(t):qr(t)&&Vr.test(M.call(t))}var yn=X?Lr:dn(!1),q=mn("length");function Wr(t){for(var n={},r=t.length,e=0;e<r;++e)n[t[e]]=!0;return{contains:function(i){return n[i]===!0},push:function(i){return n[i]=!0,t.push(i)}}}function wn(t,n){n=Wr(n);var r=lt.length,e=t.constructor,i=T(e)&&e.prototype||y,a="constructor";for(et(t,a)&&!n.contains(a)&&n.push(a);r--;)a=lt[r],a in t&&t[a]!==i[a]&&!n.contains(a)&&n.push(a)}function B(t){if(!D(t))return[];if(Q)return Q(t);var n=[];for(var r in t)et(t,r)&&n.push(r);return at&&wn(t,n),n}function zr(t){if(t==null)return!0;var n=q(t);return typeof n=="number"&&(ut(t)||u(t)||Vt(t))?n===0:q(B(t))===0}function Dn(t,n){var r=B(n),e=r.length;if(t==null)return!e;for(var i=Object(t),a=0;a<e;a++){var f=r[a];if(n[f]!==i[f]||!(f in i))return!1}return!0}function I(t){if(t instanceof I)return t;if(!(this instanceof I))return new I(t);this._wrapped=t}I.VERSION=o,I.prototype.value=function(){return this._wrapped},I.prototype.valueOf=I.prototype.toJSON=I.prototype.value,I.prototype.toString=function(){return String(this._wrapped)};function Sn(t){return new Uint8Array(t.buffer||t,t.byteOffset||0,Ot(t))}var An="[object DataView]";function $r(t,n){for(var r=[{a:t,b:n}],e=[],i=[];r.length;){var a=r.pop();if(a===!0){e.pop(),i.pop();continue}if(t=a.a,n=a.b,t===n){if(t!==0||1/t===1/n)continue;return!1}if(t==null||n==null)return!1;if(t!==t){if(n!==n)continue;return!1}var f=typeof t;if(f!=="function"&&f!=="object"&&typeof n!="object")return!1;t instanceof I&&(t=t._wrapped),n instanceof I&&(n=n._wrapped);var w=M.call(t);if(w!==M.call(n))return!1;if(ct&&w=="[object Object]"&&Mt(t)){if(!Mt(n))return!1;w=An}switch(w){case"[object RegExp]":case"[object String]":if(""+t==""+n)continue;return!1;case"[object Number]":r.push({a:+t,b:+n});continue;case"[object Date]":case"[object Boolean]":if(+t==+n)continue;return!1;case"[object Symbol]":if(A.valueOf.call(t)===A.valueOf.call(n))continue;return!1;case"[object ArrayBuffer]":case An:r.push({a:Sn(t),b:Sn(n)});continue}var b=w==="[object Array]";if(!b&&yn(t)){var E=Ot(t);if(E!==Ot(n))return!1;if(t.buffer===n.buffer&&t.byteOffset===n.byteOffset)continue;b=!0}if(!b){if(typeof t!="object"||typeof n!="object")return!1;var F=t.constructor,L=n.constructor;if(F!==L&&!(T(F)&&F instanceof F&&T(L)&&L instanceof L)&&"constructor"in t&&"constructor"in n)return!1}for(var V=e.length;V--;)if(e[V]===t){if(i[V]===n)break;return!1}if(!(V>=0))if(e.push(t),i.push(n),r.push(!0),b){if(V=t.length,V!==n.length)return!1;for(;V--;)r.push({a:t[V],b:n[V]})}else{var Et=B(t),Pt;if(V=Et.length,B(n).length!==V)return!1;for(;V--;){if(Pt=Et[V],!et(n,Pt))return!1;r.push({a:t[Pt],b:n[Pt]})}}}return!0}function wt(t){if(!D(t))return[];var n=[];for(var r in t)n.push(r);return at&&wn(t,n),n}function Lt(t){var n=q(t);return function(r){if(r==null)return!1;var e=wt(r);if(q(e))return!1;for(var i=0;i<n;i++)if(!T(r[t[i]]))return!1;return t!==kn||!T(r[Wt])}}var Wt="forEach",bn="has",zt=["clear","delete"],En=["get",bn,"set"],Hr=zt.concat(Wt,En),kn=zt.concat(En),Xr=["add"].concat(zt,Wt,bn),Gr=Y?Lt(Hr):g("Map"),Kr=Y?Lt(kn):g("WeakMap"),Yr=Y?Lt(Xr):g("Set"),Jr=g("WeakSet");function ht(t){for(var n=B(t),r=n.length,e=Array(r),i=0;i<r;i++)e[i]=t[n[i]];return e}function Qr(t){for(var n=B(t),r=n.length,e=Array(r),i=0;i<r;i++)e[i]=[n[i],t[n[i]]];return e}function Rn(t){for(var n={},r=B(t),e=0,i=r.length;e<i;e++)n[t[r[e]]]=r[e];return n}function $t(t){var n=[];for(var r in t)T(t[r])&&n.push(r);return n.sort()}function Ht(t,n){return function(r){var e=arguments.length;if(n&&(r=Object(r)),e<2||r==null)return r;for(var i=1;i<e;i++)for(var a=arguments[i],f=t(a),w=f.length,b=0;b<w;b++){var E=f[b];(!n||r[E]===void 0)&&(r[E]=a[E])}return r}}var _n=Ht(wt),It=Ht(B),Mn=Ht(wt,!0);function Zr(){return function(){}}function On(t){if(!D(t))return{};if(N)return N(t);var n=Zr();n.prototype=t;var r=new n;return n.prototype=null,r}function xr(t,n){var r=On(t);return n&&It(r,n),r}function jr(t){return D(t)?ut(t)?t.slice():_n({},t):t}function te(t,n){return n(t),t}function In(t){return ut(t)?t:[t]}I.toPath=In;function Dt(t){return I.toPath(t)}function Xt(t,n){for(var r=n.length,e=0;e<r;e++){if(t==null)return;t=t[n[e]]}return r?t:void 0}function Tn(t,n,r){var e=Xt(t,Dt(n));return k(e)?r:e}function ne(t,n){n=Dt(n);for(var r=n.length,e=0;e<r;e++){var i=n[e];if(!et(t,i))return!1;t=t[i]}return!!r}function Gt(t){return t}function St(t){return t=It({},t),function(n){return Dn(n,t)}}function Kt(t){return t=Dt(t),function(n){return Xt(n,t)}}function At(t,n,r){if(n===void 0)return t;switch(r??3){case 1:return function(e){return t.call(n,e)};case 3:return function(e,i,a){return t.call(n,e,i,a)};case 4:return function(e,i,a,f){return t.call(n,e,i,a,f)}}return function(){return t.apply(n,arguments)}}function Cn(t,n,r){return t==null?Gt:T(t)?At(t,n,r):D(t)&&!ut(t)?St(t):Kt(t)}function Yt(t,n){return Cn(t,n,1/0)}I.iteratee=Yt;function $(t,n,r){return I.iteratee!==Yt?I.iteratee(t,n):Cn(t,n,r)}function re(t,n,r){n=$(n,r);for(var e=B(t),i=e.length,a={},f=0;f<i;f++){var w=e[f];a[w]=n(t[w],w,t)}return a}function Pn(){}function ee(t){return t==null?Pn:function(n){return Tn(t,n)}}function ae(t,n,r){var e=Array(Math.max(0,t));n=At(n,r,1);for(var i=0;i<t;i++)e[i]=n(i);return e}function Jt(t,n){return n==null&&(n=t,t=0),t+Math.floor(Math.random()*(n-t+1))}var bt=Date.now||function(){return new Date().getTime()};function Fn(t){var n=function(a){return t[a]},r="(?:"+B(t).join("|")+")",e=RegExp(r),i=RegExp(r,"g");return function(a){return a=a==null?"":""+a,e.test(a)?a.replace(i,n):a}}var Un={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},ie=Fn(Un),ue=Rn(Un),se=Fn(ue),fe=I.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Qt=/(.)^/,oe={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},le=/\\|'|\r|\n|\u2028|\u2029/g;function ce(t){return"\\"+oe[t]}var he=/^\s*(\w|\$)+\s*$/;function ve(t,n,r){!n&&r&&(n=r),n=Mn({},n,I.templateSettings);var e=RegExp([(n.escape||Qt).source,(n.interpolate||Qt).source,(n.evaluate||Qt).source].join("|")+"|$","g"),i=0,a="__p+='";t.replace(e,function(E,F,L,V,Et){return a+=t.slice(i,Et).replace(le,ce),i=Et+E.length,F?a+=`'+
((__t=(`+F+`))==null?'':_.escape(__t))+
'`:L?a+=`'+
((__t=(`+L+`))==null?'':__t)+
'`:V&&(a+=`';
`+V+`
__p+='`),E}),a+=`';
`;var f=n.variable;if(f){if(!he.test(f))throw new Error("variable is not a bare identifier: "+f)}else a=`with(obj||{}){
`+a+`}
`,f="obj";a=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+a+`return __p;
`;var w;try{w=new Function(f,"_",a)}catch(E){throw E.source=a,E}var b=function(E){return w.call(this,E,I)};return b.source="function("+f+`){
`+a+"}",b}function pe(t,n,r){n=Dt(n);var e=n.length;if(!e)return T(r)?r.call(t):r;for(var i=0;i<e;i++){var a=t?.[n[i]];a===void 0&&(a=r,i=e),t=T(a)?a.call(t):a}return t}var de=0;function ge(t){var n=++de+"";return t?t+n:n}function me(t){var n=I(t);return n._chain=!0,n}function Bn(t,n,r,e,i){if(!(e instanceof n))return t.apply(r,i);var a=On(t.prototype),f=t.apply(a,i);return D(f)?f:a}var vt=s(function(t,n){var r=vt.placeholder,e=function(){for(var i=0,a=n.length,f=Array(a),w=0;w<a;w++)f[w]=n[w]===r?arguments[i++]:n[w];for(;i<arguments.length;)f.push(arguments[i++]);return Bn(t,e,this,this,f)};return e});vt.placeholder=I;var Nn=s(function(t,n,r){if(!T(t))throw new TypeError("Bind must be called on a function");var e=s(function(i){return Bn(t,e,n,this,r.concat(i))});return e}),H=gn(q);function pt(t,n,r){!n&&n!==0&&(n=1/0);for(var e=[],i=0,a=0,f=q(t)||0,w=[];;){if(a>=f){if(!w.length)break;var b=w.pop();a=b.i,t=b.v,f=q(t);continue}var E=t[a++];w.length>=n?e[i++]=E:H(E)&&(ut(E)||Vt(E))?(w.push({i:a,v:t}),a=0,t=E,f=q(t)):r||(e[i++]=E)}return e}var ye=s(function(t,n){n=pt(n,!1,!1);var r=n.length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=n[r];t[e]=Nn(t[e],t)}return t});function we(t,n){var r=function(e){var i=r.cache,a=""+(n?n.apply(this,arguments):e);return et(i,a)||(i[a]=t.apply(this,arguments)),i[a]};return r.cache={},r}var qn=s(function(t,n,r){return setTimeout(function(){return t.apply(null,r)},n)}),De=vt(qn,I,1);function Se(t,n,r){var e,i,a,f,w=0;r||(r={});var b=function(){w=r.leading===!1?0:bt(),e=null,f=t.apply(i,a),e||(i=a=null)},E=function(){var F=bt();!w&&r.leading===!1&&(w=F);var L=n-(F-w);return i=this,a=arguments,L<=0||L>n?(e&&(clearTimeout(e),e=null),w=F,f=t.apply(i,a),e||(i=a=null)):!e&&r.trailing!==!1&&(e=setTimeout(b,L)),f};return E.cancel=function(){clearTimeout(e),w=0,e=i=a=null},E}function Ae(t,n,r){var e,i,a,f,w,b=function(){var F=bt()-i;n>F?e=setTimeout(b,n-F):(e=null,r||(f=t.apply(w,a)),e||(a=w=null))},E=s(function(F){return w=this,a=F,i=bt(),e||(e=setTimeout(b,n),r&&(f=t.apply(w,a))),f});return E.cancel=function(){clearTimeout(e),e=a=w=null},E}function be(t,n){return vt(n,t)}function Zt(t){return function(){return!t.apply(this,arguments)}}function Ee(){var t=arguments,n=t.length-1;return function(){for(var r=n,e=t[n].apply(this,arguments);r--;)e=t[r].call(this,e);return e}}function ke(t,n){return function(){if(--t<1)return n.apply(this,arguments)}}function Vn(t,n){var r;return function(){return--t>0&&(r=n.apply(this,arguments)),t<=1&&(n=null),r}}var Re=vt(Vn,2);function Ln(t,n,r){n=$(n,r);for(var e=B(t),i,a=0,f=e.length;a<f;a++)if(i=e[a],n(t[i],i,t))return i}function Wn(t){return function(n,r,e){r=$(r,e);for(var i=q(n),a=t>0?0:i-1;a>=0&&a<i;a+=t)if(r(n[a],a,n))return a;return-1}}var xt=Wn(1),zn=Wn(-1);function $n(t,n,r,e){r=$(r,e,1);for(var i=r(n),a=0,f=q(t);a<f;){var w=Math.floor((a+f)/2);r(t[w])<i?a=w+1:f=w}return a}function Hn(t,n,r){return function(e,i,a){var f=0,w=q(e);if(typeof a=="number")t>0?f=a>=0?a:Math.max(a+w,f):w=a>=0?Math.min(a+1,w):a+w+1;else if(r&&a&&w)return a=r(e,i),e[a]===i?a:-1;if(i!==i)return a=n(_.call(e,f,w),pn),a>=0?a+f:-1;for(a=t>0?f:w-1;a>=0&&a<w;a+=t)if(e[a]===i)return a;return-1}}var Xn=Hn(1,xt,$n),_e=Hn(-1,zn);function jt(t,n,r){var e=H(t)?xt:Ln,i=e(t,n,r);if(i!==void 0&&i!==-1)return t[i]}function Me(t,n){return jt(t,St(n))}function j(t,n,r){n=At(n,r);var e,i;if(H(t))for(e=0,i=t.length;e<i;e++)n(t[e],e,t);else{var a=B(t);for(e=0,i=a.length;e<i;e++)n(t[a[e]],a[e],t)}return t}function st(t,n,r){n=$(n,r);for(var e=!H(t)&&B(t),i=(e||t).length,a=Array(i),f=0;f<i;f++){var w=e?e[f]:f;a[f]=n(t[w],w,t)}return a}function Gn(t){var n=function(r,e,i,a){var f=!H(r)&&B(r),w=(f||r).length,b=t>0?0:w-1;for(a||(i=r[f?f[b]:b],b+=t);b>=0&&b<w;b+=t){var E=f?f[b]:b;i=e(i,r[E],E,r)}return i};return function(r,e,i,a){var f=arguments.length>=3;return n(r,At(e,a,4),i,f)}}var tn=Gn(1),Kn=Gn(-1);function dt(t,n,r){var e=[];return n=$(n,r),j(t,function(i,a,f){n(i,a,f)&&e.push(i)}),e}function Oe(t,n,r){return dt(t,Zt($(n)),r)}function Yn(t,n,r){n=$(n,r);for(var e=!H(t)&&B(t),i=(e||t).length,a=0;a<i;a++){var f=e?e[a]:a;if(!n(t[f],f,t))return!1}return!0}function Jn(t,n,r){n=$(n,r);for(var e=!H(t)&&B(t),i=(e||t).length,a=0;a<i;a++){var f=e?e[a]:a;if(n(t[f],f,t))return!0}return!1}function tt(t,n,r,e){return H(t)||(t=ht(t)),(typeof r!="number"||e)&&(r=0),Xn(t,n,r)>=0}var Ie=s(function(t,n,r){var e,i;return T(n)?i=n:(n=Dt(n),e=n.slice(0,-1),n=n[n.length-1]),st(t,function(a){var f=i;if(!f){if(e&&e.length&&(a=Xt(a,e)),a==null)return;f=a[n]}return f==null?f:f.apply(a,r)})});function nn(t,n){return st(t,Kt(n))}function Te(t,n){return dt(t,St(n))}function Qn(t,n,r){var e=-1/0,i=-1/0,a,f;if(n==null||typeof n=="number"&&typeof t[0]!="object"&&t!=null){t=H(t)?t:ht(t);for(var w=0,b=t.length;w<b;w++)a=t[w],a!=null&&a>e&&(e=a)}else n=$(n,r),j(t,function(E,F,L){f=n(E,F,L),(f>i||f===-1/0&&e===-1/0)&&(e=E,i=f)});return e}function Ce(t,n,r){var e=1/0,i=1/0,a,f;if(n==null||typeof n=="number"&&typeof t[0]!="object"&&t!=null){t=H(t)?t:ht(t);for(var w=0,b=t.length;w<b;w++)a=t[w],a!=null&&a<e&&(e=a)}else n=$(n,r),j(t,function(E,F,L){f=n(E,F,L),(f<i||f===1/0&&e===1/0)&&(e=E,i=f)});return e}var Pe=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Zn(t){return t?ut(t)?_.call(t):u(t)?t.match(Pe):H(t)?st(t,Gt):ht(t):[]}function xn(t,n,r){if(n==null||r)return H(t)||(t=ht(t)),t[Jt(t.length-1)];var e=Zn(t),i=q(e);n=Math.max(Math.min(n,i),0);for(var a=i-1,f=0;f<n;f++){var w=Jt(f,a),b=e[f];e[f]=e[w],e[w]=b}return e.slice(0,n)}function Fe(t){return xn(t,1/0)}function Ue(t,n,r){var e=0;return n=$(n,r),nn(st(t,function(i,a,f){return{value:i,index:e++,criteria:n(i,a,f)}}).sort(function(i,a){var f=i.criteria,w=a.criteria;if(f!==w){if(f>w||f===void 0)return 1;if(f<w||w===void 0)return-1}return i.index-a.index}),"value")}function Tt(t,n){return function(r,e,i){var a=n?[[],[]]:{};return e=$(e,i),j(r,function(f,w){var b=e(f,w,r);t(a,f,b)}),a}}var Be=Tt(function(t,n,r){et(t,r)?t[r].push(n):t[r]=[n]}),Ne=Tt(function(t,n,r){t[r]=n}),qe=Tt(function(t,n,r){et(t,r)?t[r]++:t[r]=1}),Ve=Tt(function(t,n,r){t[r?0:1].push(n)},!0);function Le(t){return t==null?0:H(t)?t.length:B(t).length}function We(t,n,r){return n in r}var jn=s(function(t,n){var r={},e=n[0];if(t==null)return r;T(e)?(n.length>1&&(e=At(e,n[1])),n=wt(t)):(e=We,n=pt(n,!1,!1),t=Object(t));for(var i=0,a=n.length;i<a;i++){var f=n[i],w=t[f];e(w,f,t)&&(r[f]=w)}return r}),ze=s(function(t,n){var r=n[0],e;return T(r)?(r=Zt(r),n.length>1&&(e=n[1])):(n=st(pt(n,!1,!1),String),r=function(i,a){return!tt(n,a)}),jn(t,r,e)});function tr(t,n,r){return _.call(t,0,Math.max(0,t.length-(n==null||r?1:n)))}function rn(t,n,r){return t==null||t.length<1?n==null||r?void 0:[]:n==null||r?t[0]:tr(t,t.length-n)}function Ct(t,n,r){return _.call(t,n==null||r?1:n)}function $e(t,n,r){return t==null||t.length<1?n==null||r?void 0:[]:n==null||r?t[t.length-1]:Ct(t,Math.max(0,t.length-n))}function He(t){return dt(t,Boolean)}function Xe(t,n){return pt(t,n,!1)}var nr=s(function(t,n){return n=pt(n,!0,!0),dt(t,function(r){return!tt(n,r)})}),Ge=s(function(t,n){return nr(t,n)});function en(t,n,r,e){d(n)||(e=r,r=n,n=!1),r!=null&&(r=$(r,e));for(var i=[],a=[],f=0,w=q(t);f<w;f++){var b=t[f],E=r?r(b,f,t):b;n&&!r?((!f||a!==E)&&i.push(b),a=E):r?tt(a,E)||(a.push(E),i.push(b)):tt(i,b)||i.push(b)}return i}var Ke=s(function(t){return en(pt(t,!0,!0))});function Ye(t){for(var n=[],r=arguments.length,e=0,i=q(t);e<i;e++){var a=t[e];if(!tt(n,a)){var f;for(f=1;f<r&&tt(arguments[f],a);f++);f===r&&n.push(a)}}return n}function an(t){for(var n=t&&Qn(t,q).length||0,r=Array(n),e=0;e<n;e++)r[e]=nn(t,e);return r}var Je=s(an);function Qe(t,n){for(var r={},e=0,i=q(t);e<i;e++)n?r[t[e]]=n[e]:r[t[e][0]]=t[e][1];return r}function Ze(t,n,r){n==null&&(n=t||0,t=0),r||(r=n<t?-1:1);for(var e=Math.max(Math.ceil((n-t)/r),0),i=Array(e),a=0;a<e;a++,t+=r)i[a]=t;return i}function xe(t,n){if(n==null||n<1)return[];for(var r=[],e=0,i=t.length;e<i;)r.push(_.call(t,e,e+=n));return r}function un(t,n){return t._chain?I(n).chain():n}function rr(t){return j($t(t),function(n){var r=I[n]=t[n];I.prototype[n]=function(){var e=[this._wrapped];return O.apply(e,arguments),un(this,r.apply(I,e))}}),I}j(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var n=S[t];I.prototype[t]=function(){var r=this._wrapped;return r!=null&&(n.apply(r,arguments),(t==="shift"||t==="splice")&&r.length===0&&delete r[0]),un(this,r)}}),j(["concat","join","slice"],function(t){var n=S[t];I.prototype[t]=function(){var r=this._wrapped;return r!=null&&(r=n.apply(r,arguments)),un(this,r)}});var je={__proto__:null,VERSION:o,restArguments:s,isObject:D,isNull:c,isUndefined:k,isBoolean:d,isElement:m,isString:u,isNumber:l,isDate:h,isRegExp:p,isError:C,isSymbol:R,isArrayBuffer:rt,isDataView:Mt,isArray:ut,isFunction:T,isArguments:Vt,isFinite:Nr,isNaN:pn,isTypedArray:yn,isEmpty:zr,isMatch:Dn,isEqual:$r,isMap:Gr,isWeakMap:Kr,isSet:Yr,isWeakSet:Jr,keys:B,allKeys:wt,values:ht,pairs:Qr,invert:Rn,functions:$t,methods:$t,extend:_n,extendOwn:It,assign:It,defaults:Mn,create:xr,clone:jr,tap:te,get:Tn,has:ne,mapObject:re,identity:Gt,constant:dn,noop:Pn,toPath:In,property:Kt,propertyOf:ee,matcher:St,matches:St,times:ae,random:Jt,now:bt,escape:ie,unescape:se,templateSettings:fe,template:ve,result:pe,uniqueId:ge,chain:me,iteratee:Yt,partial:vt,bind:Nn,bindAll:ye,memoize:we,delay:qn,defer:De,throttle:Se,debounce:Ae,wrap:be,negate:Zt,compose:Ee,after:ke,before:Vn,once:Re,findKey:Ln,findIndex:xt,findLastIndex:zn,sortedIndex:$n,indexOf:Xn,lastIndexOf:_e,find:jt,detect:jt,findWhere:Me,each:j,forEach:j,map:st,collect:st,reduce:tn,foldl:tn,inject:tn,reduceRight:Kn,foldr:Kn,filter:dt,select:dt,reject:Oe,every:Yn,all:Yn,some:Jn,any:Jn,contains:tt,includes:tt,include:tt,invoke:Ie,pluck:nn,where:Te,max:Qn,min:Ce,shuffle:Fe,sample:xn,sortBy:Ue,groupBy:Be,indexBy:Ne,countBy:qe,partition:Ve,toArray:Zn,size:Le,pick:jn,omit:ze,first:rn,head:rn,take:rn,initial:tr,last:$e,rest:Ct,tail:Ct,drop:Ct,compact:He,flatten:Xe,without:Ge,uniq:en,unique:en,union:Ke,intersection:Ye,difference:nr,unzip:an,transpose:an,zip:Je,object:Qe,range:Ze,chunk:xe,mixin:rr,default:I},sn=rr(je);return sn._=sn,sn}))});var Ur=nt((qa,Fr)=>{P();var pa=(mr(),sa(gr)),da=Tr(),ga=Cr(),vn=Pr();function ma(o){return o.bio&&o.bio.email&&o.bio.email.personal}function ya(o){ma(o)&&(o.bio.gravatar=da.url(o.bio.email.personal,{s:"100",r:"pg",d:"mm"})),vn.each(o.work,function(y){y.startDate=y.startDate.substr(0,4),y.endDate&&y.startDate?y.endDate.substr(0,4)==y.startDate?y.endDate="":y.endDate=y.endDate.substr(0,4):y.endDate="Present"}),vn.each(o.education,function(y){y.startDate=y.startDate.substr(0,4),y.endDate&&y.startDate?y.endDate.substr(0,4)==y.startDate?y.endDate="":y.endDate=y.endDate.substr(0,4):y.endDate="Present"}),vn.each(o.volunteer,function(y){y.startDate=y.startDate.substr(0,4),y.endDate&&y.startDate?y.endDate.substr(0,4)==y.startDate?y.endDate="":y.endDate=y.endDate.substr(0,4):y.endDate="Present"});var v=pa.readFileSync("//resume.template","utf8"),S=ga.render(v,o);return S}Fr.exports={render:ya}});P();var ft=ua(Ur(),1),Br=ft.default??ft,La=Br.render??ft.render,Wa=Br.pdfRenderOptions??ft.pdfRenderOptions;export{Wa as pdfRenderOptions,La as render};
/*! Bundled license information:

mustache/mustache.js:
  (*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   *)
*/
