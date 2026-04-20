var ta=Object.create;var Bt=Object.defineProperty;var na=Object.getOwnPropertyDescriptor;var ra=Object.getOwnPropertyNames;var ea=Object.getPrototypeOf,aa=Object.prototype.hasOwnProperty;var er=(o,p)=>()=>(o&&(p=o(o=0)),p);var nt=(o,p)=>()=>(p||o((p={exports:{}}).exports,p),p.exports),ia=(o,p)=>{for(var D in p)Bt(o,D,{get:p[D],enumerable:!0})},ar=(o,p,D,y)=>{if(p&&typeof p=="object"||typeof p=="function")for(let A of ra(p))!aa.call(o,A)&&A!==D&&Bt(o,A,{get:()=>p[A],enumerable:!(y=na(p,A))||y.enumerable});return o};var ua=(o,p,D)=>(D=o!=null?ta(ea(o)):{},ar(p||!o||!o.__esModule?Bt(D,"default",{value:o,enumerable:!0}):D,o)),sa=o=>ar(Bt({},"__esModule",{value:!0}),o);var B=er(()=>{});var gr={};ia(gr,{createReadStream:()=>pr,createWriteStream:()=>dr,default:()=>fa,existsSync:()=>fr,lstatSync:()=>cr,mkdirSync:()=>lr,readFileSync:()=>ur,readdirSync:()=>sr,rmdirSync:()=>vr,statSync:()=>ln,unlinkSync:()=>hr,writeFileSync:()=>or});function on(o){return String(o).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function ir(o){var p=on(o);if(Pt[p]!==void 0)return Pt[p];for(var D=Object.keys(Pt),y=0;y<D.length;y++)if(p.endsWith("/"+D[y])||p===D[y])return Pt[D[y]]}function fn(o){var p=on(o);if(Ft[p]!==void 0)return Ft[p];for(var D=Object.keys(Ft),y=0;y<D.length;y++)if(p.endsWith("/"+D[y])||p===D[y])return Ft[D[y]]}var Pt,Ft,ur,sr,fr,or,lr,ln,cr,hr,vr,pr,dr,fa,mr=er(()=>{"use strict";B();Pt={"package.json":`{
  "name": "jsonresume-theme-elegant_sargefork_no_volunteer",
  "version": "0.0.3",
  "description": "Fork of Elegant theme for jsonresume w/o volunteer section",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/AlexBrandes/jsonresume-theme-elegant"
  },
  "keywords": [
    "jsonresume",
    "theme",
    "elegant_fork",
    "elegant_sargefork"
  ],
  "author": "Alex Brandes <alex@alexbrandes.io>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/AlexBrandes/jsonresume-theme-elegant/issues"
  },
  "homepage": "https://github.com/AlexBrandes/jsonresume-theme-elegant",
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
        font-size: 'small'
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
</html>
`},Ft={".":["README.md","index.js","package.json","resume.template","serve.js"]};ur=function(o,p){var D=ir(o);return D!==void 0?D:""},sr=function(o,p){var D=fn(o);return D===void 0&&(D=[]),p&&p.withFileTypes?D.map(function(y){var A=on(o)+"/"+y,O=fn(A)!==void 0;return{name:y,isFile:function(){return!O},isDirectory:function(){return O}}}):D},fr=function(o){return ir(o)!==void 0||fn(o)!==void 0},or=function(){},lr=function(){},ln=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},cr=ln,hr=function(){},vr=function(){},pr=function(){return{pipe:function(o){return o},on:function(){return this}}},dr=function(){return{write:function(){},end:function(){},on:function(){return this}}},fa={readFileSync:ur,readdirSync:sr,existsSync:fr,writeFileSync:or,mkdirSync:lr,statSync:ln,lstatSync:cr,unlinkSync:hr,rmdirSync:vr,createReadStream:pr,createWriteStream:dr}});var wr=nt((yr,Ut)=>{B();(function(o){"use strict";function p(s,S){var c=(s&65535)+(S&65535),_=(s>>16)+(S>>16)+(c>>16);return _<<16|c&65535}function D(s,S){return s<<S|s>>>32-S}function y(s,S,c,_,d,m){return p(D(p(p(S,s),p(_,m)),d),c)}function A(s,S,c,_,d,m,g){return y(S&c|~S&_,s,S,d,m,g)}function O(s,S,c,_,d,m,g){return y(S&_|c&~_,s,S,d,m,g)}function M(s,S,c,_,d,m,g){return y(S^c^_,s,S,d,m,g)}function b(s,S,c,_,d,m,g){return y(c^(S|~_),s,S,d,m,g)}function W(s,S){s[S>>5]|=128<<S%32,s[(S+64>>>9<<4)+14]=S;var c,_,d,m,g,u=1732584193,l=-271733879,h=-1732584194,v=271733878;for(c=0;c<s.length;c+=16)_=u,d=l,m=h,g=v,u=A(u,l,h,v,s[c],7,-680876936),v=A(v,u,l,h,s[c+1],12,-389564586),h=A(h,v,u,l,s[c+2],17,606105819),l=A(l,h,v,u,s[c+3],22,-1044525330),u=A(u,l,h,v,s[c+4],7,-176418897),v=A(v,u,l,h,s[c+5],12,1200080426),h=A(h,v,u,l,s[c+6],17,-1473231341),l=A(l,h,v,u,s[c+7],22,-45705983),u=A(u,l,h,v,s[c+8],7,1770035416),v=A(v,u,l,h,s[c+9],12,-1958414417),h=A(h,v,u,l,s[c+10],17,-42063),l=A(l,h,v,u,s[c+11],22,-1990404162),u=A(u,l,h,v,s[c+12],7,1804603682),v=A(v,u,l,h,s[c+13],12,-40341101),h=A(h,v,u,l,s[c+14],17,-1502002290),l=A(l,h,v,u,s[c+15],22,1236535329),u=O(u,l,h,v,s[c+1],5,-165796510),v=O(v,u,l,h,s[c+6],9,-1069501632),h=O(h,v,u,l,s[c+11],14,643717713),l=O(l,h,v,u,s[c],20,-373897302),u=O(u,l,h,v,s[c+5],5,-701558691),v=O(v,u,l,h,s[c+10],9,38016083),h=O(h,v,u,l,s[c+15],14,-660478335),l=O(l,h,v,u,s[c+4],20,-405537848),u=O(u,l,h,v,s[c+9],5,568446438),v=O(v,u,l,h,s[c+14],9,-1019803690),h=O(h,v,u,l,s[c+3],14,-187363961),l=O(l,h,v,u,s[c+8],20,1163531501),u=O(u,l,h,v,s[c+13],5,-1444681467),v=O(v,u,l,h,s[c+2],9,-51403784),h=O(h,v,u,l,s[c+7],14,1735328473),l=O(l,h,v,u,s[c+12],20,-1926607734),u=M(u,l,h,v,s[c+5],4,-378558),v=M(v,u,l,h,s[c+8],11,-2022574463),h=M(h,v,u,l,s[c+11],16,1839030562),l=M(l,h,v,u,s[c+14],23,-35309556),u=M(u,l,h,v,s[c+1],4,-1530992060),v=M(v,u,l,h,s[c+4],11,1272893353),h=M(h,v,u,l,s[c+7],16,-155497632),l=M(l,h,v,u,s[c+10],23,-1094730640),u=M(u,l,h,v,s[c+13],4,681279174),v=M(v,u,l,h,s[c],11,-358537222),h=M(h,v,u,l,s[c+3],16,-722521979),l=M(l,h,v,u,s[c+6],23,76029189),u=M(u,l,h,v,s[c+9],4,-640364487),v=M(v,u,l,h,s[c+12],11,-421815835),h=M(h,v,u,l,s[c+15],16,530742520),l=M(l,h,v,u,s[c+2],23,-995338651),u=b(u,l,h,v,s[c],6,-198630844),v=b(v,u,l,h,s[c+7],10,1126891415),h=b(h,v,u,l,s[c+14],15,-1416354905),l=b(l,h,v,u,s[c+5],21,-57434055),u=b(u,l,h,v,s[c+12],6,1700485571),v=b(v,u,l,h,s[c+3],10,-1894986606),h=b(h,v,u,l,s[c+10],15,-1051523),l=b(l,h,v,u,s[c+1],21,-2054922799),u=b(u,l,h,v,s[c+8],6,1873313359),v=b(v,u,l,h,s[c+15],10,-30611744),h=b(h,v,u,l,s[c+6],15,-1560198380),l=b(l,h,v,u,s[c+13],21,1309151649),u=b(u,l,h,v,s[c+4],6,-145523070),v=b(v,u,l,h,s[c+11],10,-1120210379),h=b(h,v,u,l,s[c+2],15,718787259),l=b(l,h,v,u,s[c+9],21,-343485551),u=p(u,_),l=p(l,d),h=p(h,m),v=p(v,g);return[u,l,h,v]}function X(s){var S,c="",_=s.length*32;for(S=0;S<_;S+=8)c+=String.fromCharCode(s[S>>5]>>>S%32&255);return c}function K(s){var S,c=[];for(c[(s.length>>2)-1]=void 0,S=0;S<c.length;S+=1)c[S]=0;var _=s.length*8;for(S=0;S<_;S+=8)c[S>>5]|=(s.charCodeAt(S/8)&255)<<S%32;return c}function J(s){return X(W(K(s),s.length*8))}function Q(s,S){var c,_=K(s),d=[],m=[],g;for(d[15]=m[15]=void 0,_.length>16&&(_=W(_,s.length*8)),c=0;c<16;c+=1)d[c]=_[c]^909522486,m[c]=_[c]^1549556828;return g=W(d.concat(K(S)),512+S.length*8),X(W(m.concat(g),640))}function N(s){var S="0123456789abcdef",c="",_,d;for(d=0;d<s.length;d+=1)_=s.charCodeAt(d),c+=S.charAt(_>>>4&15)+S.charAt(_&15);return c}function z(s){return unescape(encodeURIComponent(s))}function ot(s){return J(z(s))}function gt(s){return N(ot(s))}function at(s,S){return Q(z(s),z(S))}function lt(s,S){return N(at(s,S))}function it(s,S,c){return S?c?at(S,s):lt(S,s):c?ot(s):gt(s)}typeof define=="function"&&define.amd?define(function(){return it}):typeof Ut=="object"&&Ut.exports?Ut.exports=it:o.md5=it})(yr)});var Dr=nt((ka,Sr)=>{"use strict";B();function oa(o,p){return Object.prototype.hasOwnProperty.call(o,p)}Sr.exports=function(o,p,D,y){p=p||"&",D=D||"=";var A={};if(typeof o!="string"||o.length===0)return A;var O=/\+/g;o=o.split(p);var M=1e3;y&&typeof y.maxKeys=="number"&&(M=y.maxKeys);var b=o.length;M>0&&b>M&&(b=M);for(var W=0;W<b;++W){var X=o[W].replace(O,"%20"),K=X.indexOf(D),J,Q,N,z;K>=0?(J=X.substr(0,K),Q=X.substr(K+1)):(J=X,Q=""),N=decodeURIComponent(J),z=decodeURIComponent(Q),oa(A,N)?Array.isArray(A[N])?A[N].push(z):A[N]=[A[N],z]:A[N]=z}return A}});var Er=nt((Ra,Ar)=>{"use strict";B();var kt=function(o){switch(typeof o){case"string":return o;case"boolean":return o?"true":"false";case"number":return isFinite(o)?o:"";default:return""}};Ar.exports=function(o,p,D,y){return p=p||"&",D=D||"=",o===null&&(o=void 0),typeof o=="object"?Object.keys(o).map(function(A){var O=encodeURIComponent(kt(A))+D;return Array.isArray(o[A])?o[A].map(function(M){return O+encodeURIComponent(kt(M))}).join(p):O+encodeURIComponent(kt(o[A]))}).join(p):y?encodeURIComponent(kt(y))+D+encodeURIComponent(kt(o)):""}});var kr=nt(_t=>{"use strict";B();_t.decode=_t.parse=Dr();_t.encode=_t.stringify=Er()});var Or=nt((Ta,br)=>{B();var la=wr(),ca=kr(),ha=/^[0-9a-f]{32}$/;function va(o){var p={},D={protocol:1,format:1};for(var y in o)D[y]||(p[y]=o[y]);return p}function _r(o,p){if(o)return typeof o.protocol=="boolean"?o.protocol:o.protocol==="http"?!1:o.protocol==="https"?!0:void 0}function Rr(o){return o=typeof o=="string"?o.trim().toLowerCase():"unspecified",o.match(ha)?o:la(o)}function Mr(o){var p=ca.stringify(va(o));return p&&"?"+p||""}var Ia=br.exports={url:function(o,p,D){var y="//www.gravatar.com/avatar/";p&&p.cdn?(y=p.cdn+"/avatar/",delete p.cdn):(p&&p.protocol&&(D=_r(p)),typeof D<"u"&&(y=D?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var A=Mr(p);return y+Rr(o)+A},profile_url:function(o,p,D){var y=p!=null&&p.format!=null?String(p.format):"json",A;if(p&&p.cdn)A=p.cdn+"/",delete p.cdn;else{p&&p.protocol&&(D=_r(p));var A=D&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var O=Mr(p);return A+Rr(o)+"."+y+O}}});var Tr=nt((Ba,Ir)=>{B();Ir.exports=Or()});var Cr=nt(Rt=>{B();(function(o,p){if(typeof Rt=="object"&&Rt)p(Rt);else{var D={};p(D),typeof define=="function"&&define.amd?define(D):o.Mustache=D}})(Rt,function(o){var p=RegExp.prototype.test;function D(d,m){return p.call(d,m)}var y=/\S/;function A(d){return!D(y,d)}var O=Object.prototype.toString,M=Array.isArray||function(d){return O.call(d)==="[object Array]"};function b(d){return typeof d=="function"}function W(d){return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var X={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function K(d){return String(d).replace(/[&<>"'\/]/g,function(m){return X[m]})}function J(d){if(!M(d)||d.length!==2)throw new Error("Invalid tags: "+d);return[new RegExp(W(d[0])+"\\s*"),new RegExp("\\s*"+W(d[1]))]}var Q=/\s*/,N=/\s+/,z=/\s*=/,ot=/\s*\}/,gt=/#|\^|\/|>|\{|&|=|!/;function at(d,m){m=m||o.tags,d=d||"",typeof m=="string"&&(m=m.split(N));var g=J(m),u=new s(d),l=[],h=[],v=[],C=!1,R=!1;function rt(){if(C&&!R)for(;v.length;)delete h[v.pop()];else v=[];C=!1,R=!1}for(var G,F,T,x,ct,Y;!u.eos();){if(G=u.pos,T=u.scanUntil(g[0]),T)for(var mt=0,Nt=T.length;mt<Nt;++mt)x=T.charAt(mt),A(x)?v.push(h.length):R=!0,h.push(["text",x,G,G+1]),G+=1,x===`
`&&rt();if(!u.scan(g[0]))break;if(C=!0,F=u.scan(gt)||"name",u.scan(Q),F==="="?(T=u.scanUntil(z),u.scan(z),u.scanUntil(g[1])):F==="{"?(T=u.scanUntil(new RegExp("\\s*"+W("}"+m[1]))),u.scan(ot),u.scanUntil(g[1]),F="&"):T=u.scanUntil(g[1]),!u.scan(g[1]))throw new Error("Unclosed tag at "+u.pos);if(ct=[F,T,G,u.pos],h.push(ct),F==="#"||F==="^")l.push(ct);else if(F==="/"){if(Y=l.pop(),!Y)throw new Error('Unopened section "'+T+'" at '+G);if(Y[1]!==T)throw new Error('Unclosed section "'+Y[1]+'" at '+G)}else F==="name"||F==="{"||F==="&"?R=!0:F==="="&&(g=J(m=T.split(N)))}if(Y=l.pop(),Y)throw new Error('Unclosed section "'+Y[1]+'" at '+u.pos);return it(lt(h))}function lt(d){for(var m=[],g,u,l=0,h=d.length;l<h;++l)g=d[l],g&&(g[0]==="text"&&u&&u[0]==="text"?(u[1]+=g[1],u[3]=g[3]):(m.push(g),u=g));return m}function it(d){for(var m=[],g=m,u=[],l,h,v=0,C=d.length;v<C;++v)switch(l=d[v],l[0]){case"#":case"^":g.push(l),u.push(l),g=l[4]=[];break;case"/":h=u.pop(),h[5]=l[2],g=u.length>0?u[u.length-1][4]:m;break;default:g.push(l)}return m}function s(d){this.string=d,this.tail=d,this.pos=0}s.prototype.eos=function(){return this.tail===""},s.prototype.scan=function(d){var m=this.tail.match(d);if(m&&m.index===0){var g=m[0];return this.tail=this.tail.substring(g.length),this.pos+=g.length,g}return""},s.prototype.scanUntil=function(d){var m=this.tail.search(d),g;switch(m){case-1:g=this.tail,this.tail="";break;case 0:g="";break;default:g=this.tail.substring(0,m),this.tail=this.tail.substring(m)}return this.pos+=g.length,g};function S(d,m){this.view=d??{},this.cache={".":this.view},this.parent=m}S.prototype.push=function(d){return new S(d,this)},S.prototype.lookup=function(d){var m;if(d in this.cache)m=this.cache[d];else{for(var g=this;g;){if(d.indexOf(".")>0){m=g.view;for(var u=d.split("."),l=0;m!=null&&l<u.length;)m=m[u[l++]]}else m=g.view[d];if(m!=null)break;g=g.parent}this.cache[d]=m}return b(m)&&(m=m.call(this.view)),m};function c(){this.cache={}}c.prototype.clearCache=function(){this.cache={}},c.prototype.parse=function(d,m){var g=this.cache,u=g[d];return u==null&&(u=g[d]=at(d,m)),u},c.prototype.render=function(d,m,g){var u=this.parse(d),l=m instanceof S?m:new S(m);return this.renderTokens(u,l,g,d)},c.prototype.renderTokens=function(d,m,g,u){var l="",h=this;function v(x){return h.render(x,m,g)}for(var C,R,rt=0,G=d.length;rt<G;++rt)switch(C=d[rt],C[0]){case"#":if(R=m.lookup(C[1]),!R)continue;if(M(R))for(var F=0,T=R.length;F<T;++F)l+=this.renderTokens(C[4],m.push(R[F]),g,u);else if(typeof R=="object"||typeof R=="string")l+=this.renderTokens(C[4],m.push(R),g,u);else if(b(R)){if(typeof u!="string")throw new Error("Cannot use higher-order sections without the original template");R=R.call(m.view,u.slice(C[3],C[5]),v),R!=null&&(l+=R)}else l+=this.renderTokens(C[4],m,g,u);break;case"^":R=m.lookup(C[1]),(!R||M(R)&&R.length===0)&&(l+=this.renderTokens(C[4],m,g,u));break;case">":if(!g)continue;R=b(g)?g(C[1]):g[C[1]],R!=null&&(l+=this.renderTokens(this.parse(R),m,g,R));break;case"&":R=m.lookup(C[1]),R!=null&&(l+=R);break;case"name":R=m.lookup(C[1]),R!=null&&(l+=o.escape(R));break;case"text":l+=C[1];break}return l},o.name="mustache.js",o.version="0.8.1",o.tags=["{{","}}"];var _=new c;o.clearCache=function(){return _.clearCache()},o.parse=function(d,m){return _.parse(d,m)},o.render=function(d,m,g){return _.render(d,m,g)},o.to_html=function(d,m,g,u){var l=o.render(d,m,g);if(b(u))u(l);else return l},o.escape=K,o.Scanner=s,o.Context=S,o.Writer=c})});var Br=nt((cn,hn)=>{B();(function(o,p){typeof cn=="object"&&typeof hn<"u"?hn.exports=p():typeof define=="function"&&define.amd?define("underscore",p):(o=typeof globalThis<"u"?globalThis:o||self,(function(){var D=o._,y=o._=p();y.noConflict=function(){return o._=D,y}})())})(cn,(function(){var o="1.13.8",p=typeof self=="object"&&self.self===self&&self||typeof globalThis=="object"&&globalThis.global===globalThis&&globalThis||Function("return this")()||{},D=Array.prototype,y=Object.prototype,A=typeof Symbol<"u"?Symbol.prototype:null,O=D.push,M=D.slice,b=y.toString,W=y.hasOwnProperty,X=typeof ArrayBuffer<"u",K=typeof DataView<"u",J=Array.isArray,Q=Object.keys,N=Object.create,z=X&&ArrayBuffer.isView,ot=isNaN,gt=isFinite,at=!{toString:null}.propertyIsEnumerable("toString"),lt=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],it=Math.pow(2,53)-1;function s(t,n){return n=n==null?t.length-1:+n,function(){for(var r=Math.max(arguments.length-n,0),e=Array(r),i=0;i<r;i++)e[i]=arguments[i+n];switch(n){case 0:return t.call(this,e);case 1:return t.call(this,arguments[0],e);case 2:return t.call(this,arguments[0],arguments[1],e)}var a=Array(n+1);for(i=0;i<n;i++)a[i]=arguments[i];return a[n]=e,t.apply(this,a)}}function S(t){var n=typeof t;return n==="function"||n==="object"&&!!t}function c(t){return t===null}function _(t){return t===void 0}function d(t){return t===!0||t===!1||b.call(t)==="[object Boolean]"}function m(t){return!!(t&&t.nodeType===1)}function g(t){var n="[object "+t+"]";return function(r){return b.call(r)===n}}var u=g("String"),l=g("Number"),h=g("Date"),v=g("RegExp"),C=g("Error"),R=g("Symbol"),rt=g("ArrayBuffer"),G=g("Function"),F=p.document&&p.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof F!="function"&&(G=function(t){return typeof t=="function"||!1});var T=G,x=g("Object"),ct=K&&(!/\[native code\]/.test(String(DataView))||x(new DataView(new ArrayBuffer(8)))),Y=typeof Map<"u"&&x(new Map),mt=g("DataView");function Nt(t){return t!=null&&T(t.getInt8)&&rt(t.buffer)}var Mt=ct?Nt:mt,ut=J||g("Array");function et(t,n){return t!=null&&W.call(t,n)}var qt=g("Arguments");(function(){qt(arguments)||(qt=function(t){return et(t,"callee")})})();var Vt=qt;function Nr(t){return!R(t)&&gt(t)&&!isNaN(parseFloat(t))}function pn(t){return l(t)&&ot(t)}function dn(t){return function(){return t}}function gn(t){return function(n){var r=t(n);return typeof r=="number"&&r>=0&&r<=it}}function mn(t){return function(n){return n?.[t]}}var bt=mn("byteLength"),qr=gn(bt),Vr=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function Lr(t){return z?z(t)&&!Mt(t):qr(t)&&Vr.test(b.call(t))}var yn=X?Lr:dn(!1),q=mn("length");function Wr(t){for(var n={},r=t.length,e=0;e<r;++e)n[t[e]]=!0;return{contains:function(i){return n[i]===!0},push:function(i){return n[i]=!0,t.push(i)}}}function wn(t,n){n=Wr(n);var r=lt.length,e=t.constructor,i=T(e)&&e.prototype||y,a="constructor";for(et(t,a)&&!n.contains(a)&&n.push(a);r--;)a=lt[r],a in t&&t[a]!==i[a]&&!n.contains(a)&&n.push(a)}function U(t){if(!S(t))return[];if(Q)return Q(t);var n=[];for(var r in t)et(t,r)&&n.push(r);return at&&wn(t,n),n}function zr(t){if(t==null)return!0;var n=q(t);return typeof n=="number"&&(ut(t)||u(t)||Vt(t))?n===0:q(U(t))===0}function Sn(t,n){var r=U(n),e=r.length;if(t==null)return!e;for(var i=Object(t),a=0;a<e;a++){var f=r[a];if(n[f]!==i[f]||!(f in i))return!1}return!0}function I(t){if(t instanceof I)return t;if(!(this instanceof I))return new I(t);this._wrapped=t}I.VERSION=o,I.prototype.value=function(){return this._wrapped},I.prototype.valueOf=I.prototype.toJSON=I.prototype.value,I.prototype.toString=function(){return String(this._wrapped)};function Dn(t){return new Uint8Array(t.buffer||t,t.byteOffset||0,bt(t))}var An="[object DataView]";function $r(t,n){for(var r=[{a:t,b:n}],e=[],i=[];r.length;){var a=r.pop();if(a===!0){e.pop(),i.pop();continue}if(t=a.a,n=a.b,t===n){if(t!==0||1/t===1/n)continue;return!1}if(t==null||n==null)return!1;if(t!==t){if(n!==n)continue;return!1}var f=typeof t;if(f!=="function"&&f!=="object"&&typeof n!="object")return!1;t instanceof I&&(t=t._wrapped),n instanceof I&&(n=n._wrapped);var w=b.call(t);if(w!==b.call(n))return!1;if(ct&&w=="[object Object]"&&Mt(t)){if(!Mt(n))return!1;w=An}switch(w){case"[object RegExp]":case"[object String]":if(""+t==""+n)continue;return!1;case"[object Number]":r.push({a:+t,b:+n});continue;case"[object Date]":case"[object Boolean]":if(+t==+n)continue;return!1;case"[object Symbol]":if(A.valueOf.call(t)===A.valueOf.call(n))continue;return!1;case"[object ArrayBuffer]":case An:r.push({a:Dn(t),b:Dn(n)});continue}var E=w==="[object Array]";if(!E&&yn(t)){var k=bt(t);if(k!==bt(n))return!1;if(t.buffer===n.buffer&&t.byteOffset===n.byteOffset)continue;E=!0}if(!E){if(typeof t!="object"||typeof n!="object")return!1;var P=t.constructor,L=n.constructor;if(P!==L&&!(T(P)&&P instanceof P&&T(L)&&L instanceof L)&&"constructor"in t&&"constructor"in n)return!1}for(var V=e.length;V--;)if(e[V]===t){if(i[V]===n)break;return!1}if(!(V>=0))if(e.push(t),i.push(n),r.push(!0),E){if(V=t.length,V!==n.length)return!1;for(;V--;)r.push({a:t[V],b:n[V]})}else{var Et=U(t),Ct;if(V=Et.length,U(n).length!==V)return!1;for(;V--;){if(Ct=Et[V],!et(n,Ct))return!1;r.push({a:t[Ct],b:n[Ct]})}}}return!0}function yt(t){if(!S(t))return[];var n=[];for(var r in t)n.push(r);return at&&wn(t,n),n}function Lt(t){var n=q(t);return function(r){if(r==null)return!1;var e=yt(r);if(q(e))return!1;for(var i=0;i<n;i++)if(!T(r[t[i]]))return!1;return t!==_n||!T(r[Wt])}}var Wt="forEach",En="has",zt=["clear","delete"],kn=["get",En,"set"],Hr=zt.concat(Wt,kn),_n=zt.concat(kn),Xr=["add"].concat(zt,Wt,En),Gr=Y?Lt(Hr):g("Map"),Kr=Y?Lt(_n):g("WeakMap"),Yr=Y?Lt(Xr):g("Set"),Jr=g("WeakSet");function ht(t){for(var n=U(t),r=n.length,e=Array(r),i=0;i<r;i++)e[i]=t[n[i]];return e}function Qr(t){for(var n=U(t),r=n.length,e=Array(r),i=0;i<r;i++)e[i]=[n[i],t[n[i]]];return e}function Rn(t){for(var n={},r=U(t),e=0,i=r.length;e<i;e++)n[t[r[e]]]=r[e];return n}function $t(t){var n=[];for(var r in t)T(t[r])&&n.push(r);return n.sort()}function Ht(t,n){return function(r){var e=arguments.length;if(n&&(r=Object(r)),e<2||r==null)return r;for(var i=1;i<e;i++)for(var a=arguments[i],f=t(a),w=f.length,E=0;E<w;E++){var k=f[E];(!n||r[k]===void 0)&&(r[k]=a[k])}return r}}var Mn=Ht(yt),Ot=Ht(U),bn=Ht(yt,!0);function Zr(){return function(){}}function On(t){if(!S(t))return{};if(N)return N(t);var n=Zr();n.prototype=t;var r=new n;return n.prototype=null,r}function xr(t,n){var r=On(t);return n&&Ot(r,n),r}function jr(t){return S(t)?ut(t)?t.slice():Mn({},t):t}function te(t,n){return n(t),t}function In(t){return ut(t)?t:[t]}I.toPath=In;function wt(t){return I.toPath(t)}function Xt(t,n){for(var r=n.length,e=0;e<r;e++){if(t==null)return;t=t[n[e]]}return r?t:void 0}function Tn(t,n,r){var e=Xt(t,wt(n));return _(e)?r:e}function ne(t,n){n=wt(n);for(var r=n.length,e=0;e<r;e++){var i=n[e];if(!et(t,i))return!1;t=t[i]}return!!r}function Gt(t){return t}function St(t){return t=Ot({},t),function(n){return Sn(n,t)}}function Kt(t){return t=wt(t),function(n){return Xt(n,t)}}function Dt(t,n,r){if(n===void 0)return t;switch(r??3){case 1:return function(e){return t.call(n,e)};case 3:return function(e,i,a){return t.call(n,e,i,a)};case 4:return function(e,i,a,f){return t.call(n,e,i,a,f)}}return function(){return t.apply(n,arguments)}}function Cn(t,n,r){return t==null?Gt:T(t)?Dt(t,n,r):S(t)&&!ut(t)?St(t):Kt(t)}function Yt(t,n){return Cn(t,n,1/0)}I.iteratee=Yt;function $(t,n,r){return I.iteratee!==Yt?I.iteratee(t,n):Cn(t,n,r)}function re(t,n,r){n=$(n,r);for(var e=U(t),i=e.length,a={},f=0;f<i;f++){var w=e[f];a[w]=n(t[w],w,t)}return a}function Bn(){}function ee(t){return t==null?Bn:function(n){return Tn(t,n)}}function ae(t,n,r){var e=Array(Math.max(0,t));n=Dt(n,r,1);for(var i=0;i<t;i++)e[i]=n(i);return e}function Jt(t,n){return n==null&&(n=t,t=0),t+Math.floor(Math.random()*(n-t+1))}var At=Date.now||function(){return new Date().getTime()};function Pn(t){var n=function(a){return t[a]},r="(?:"+U(t).join("|")+")",e=RegExp(r),i=RegExp(r,"g");return function(a){return a=a==null?"":""+a,e.test(a)?a.replace(i,n):a}}var Fn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},ie=Pn(Fn),ue=Rn(Fn),se=Pn(ue),fe=I.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Qt=/(.)^/,oe={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},le=/\\|'|\r|\n|\u2028|\u2029/g;function ce(t){return"\\"+oe[t]}var he=/^\s*(\w|\$)+\s*$/;function ve(t,n,r){!n&&r&&(n=r),n=bn({},n,I.templateSettings);var e=RegExp([(n.escape||Qt).source,(n.interpolate||Qt).source,(n.evaluate||Qt).source].join("|")+"|$","g"),i=0,a="__p+='";t.replace(e,function(k,P,L,V,Et){return a+=t.slice(i,Et).replace(le,ce),i=Et+k.length,P?a+=`'+
((__t=(`+P+`))==null?'':_.escape(__t))+
'`:L?a+=`'+
((__t=(`+L+`))==null?'':__t)+
'`:V&&(a+=`';
`+V+`
__p+='`),k}),a+=`';
`;var f=n.variable;if(f){if(!he.test(f))throw new Error("variable is not a bare identifier: "+f)}else a=`with(obj||{}){
`+a+`}
`,f="obj";a=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+a+`return __p;
`;var w;try{w=new Function(f,"_",a)}catch(k){throw k.source=a,k}var E=function(k){return w.call(this,k,I)};return E.source="function("+f+`){
`+a+"}",E}function pe(t,n,r){n=wt(n);var e=n.length;if(!e)return T(r)?r.call(t):r;for(var i=0;i<e;i++){var a=t?.[n[i]];a===void 0&&(a=r,i=e),t=T(a)?a.call(t):a}return t}var de=0;function ge(t){var n=++de+"";return t?t+n:n}function me(t){var n=I(t);return n._chain=!0,n}function Un(t,n,r,e,i){if(!(e instanceof n))return t.apply(r,i);var a=On(t.prototype),f=t.apply(a,i);return S(f)?f:a}var vt=s(function(t,n){var r=vt.placeholder,e=function(){for(var i=0,a=n.length,f=Array(a),w=0;w<a;w++)f[w]=n[w]===r?arguments[i++]:n[w];for(;i<arguments.length;)f.push(arguments[i++]);return Un(t,e,this,this,f)};return e});vt.placeholder=I;var Nn=s(function(t,n,r){if(!T(t))throw new TypeError("Bind must be called on a function");var e=s(function(i){return Un(t,e,n,this,r.concat(i))});return e}),H=gn(q);function pt(t,n,r){!n&&n!==0&&(n=1/0);for(var e=[],i=0,a=0,f=q(t)||0,w=[];;){if(a>=f){if(!w.length)break;var E=w.pop();a=E.i,t=E.v,f=q(t);continue}var k=t[a++];w.length>=n?e[i++]=k:H(k)&&(ut(k)||Vt(k))?(w.push({i:a,v:t}),a=0,t=k,f=q(t)):r||(e[i++]=k)}return e}var ye=s(function(t,n){n=pt(n,!1,!1);var r=n.length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=n[r];t[e]=Nn(t[e],t)}return t});function we(t,n){var r=function(e){var i=r.cache,a=""+(n?n.apply(this,arguments):e);return et(i,a)||(i[a]=t.apply(this,arguments)),i[a]};return r.cache={},r}var qn=s(function(t,n,r){return setTimeout(function(){return t.apply(null,r)},n)}),Se=vt(qn,I,1);function De(t,n,r){var e,i,a,f,w=0;r||(r={});var E=function(){w=r.leading===!1?0:At(),e=null,f=t.apply(i,a),e||(i=a=null)},k=function(){var P=At();!w&&r.leading===!1&&(w=P);var L=n-(P-w);return i=this,a=arguments,L<=0||L>n?(e&&(clearTimeout(e),e=null),w=P,f=t.apply(i,a),e||(i=a=null)):!e&&r.trailing!==!1&&(e=setTimeout(E,L)),f};return k.cancel=function(){clearTimeout(e),w=0,e=i=a=null},k}function Ae(t,n,r){var e,i,a,f,w,E=function(){var P=At()-i;n>P?e=setTimeout(E,n-P):(e=null,r||(f=t.apply(w,a)),e||(a=w=null))},k=s(function(P){return w=this,a=P,i=At(),e||(e=setTimeout(E,n),r&&(f=t.apply(w,a))),f});return k.cancel=function(){clearTimeout(e),e=a=w=null},k}function Ee(t,n){return vt(n,t)}function Zt(t){return function(){return!t.apply(this,arguments)}}function ke(){var t=arguments,n=t.length-1;return function(){for(var r=n,e=t[n].apply(this,arguments);r--;)e=t[r].call(this,e);return e}}function _e(t,n){return function(){if(--t<1)return n.apply(this,arguments)}}function Vn(t,n){var r;return function(){return--t>0&&(r=n.apply(this,arguments)),t<=1&&(n=null),r}}var Re=vt(Vn,2);function Ln(t,n,r){n=$(n,r);for(var e=U(t),i,a=0,f=e.length;a<f;a++)if(i=e[a],n(t[i],i,t))return i}function Wn(t){return function(n,r,e){r=$(r,e);for(var i=q(n),a=t>0?0:i-1;a>=0&&a<i;a+=t)if(r(n[a],a,n))return a;return-1}}var xt=Wn(1),zn=Wn(-1);function $n(t,n,r,e){r=$(r,e,1);for(var i=r(n),a=0,f=q(t);a<f;){var w=Math.floor((a+f)/2);r(t[w])<i?a=w+1:f=w}return a}function Hn(t,n,r){return function(e,i,a){var f=0,w=q(e);if(typeof a=="number")t>0?f=a>=0?a:Math.max(a+w,f):w=a>=0?Math.min(a+1,w):a+w+1;else if(r&&a&&w)return a=r(e,i),e[a]===i?a:-1;if(i!==i)return a=n(M.call(e,f,w),pn),a>=0?a+f:-1;for(a=t>0?f:w-1;a>=0&&a<w;a+=t)if(e[a]===i)return a;return-1}}var Xn=Hn(1,xt,$n),Me=Hn(-1,zn);function jt(t,n,r){var e=H(t)?xt:Ln,i=e(t,n,r);if(i!==void 0&&i!==-1)return t[i]}function be(t,n){return jt(t,St(n))}function j(t,n,r){n=Dt(n,r);var e,i;if(H(t))for(e=0,i=t.length;e<i;e++)n(t[e],e,t);else{var a=U(t);for(e=0,i=a.length;e<i;e++)n(t[a[e]],a[e],t)}return t}function st(t,n,r){n=$(n,r);for(var e=!H(t)&&U(t),i=(e||t).length,a=Array(i),f=0;f<i;f++){var w=e?e[f]:f;a[f]=n(t[w],w,t)}return a}function Gn(t){var n=function(r,e,i,a){var f=!H(r)&&U(r),w=(f||r).length,E=t>0?0:w-1;for(a||(i=r[f?f[E]:E],E+=t);E>=0&&E<w;E+=t){var k=f?f[E]:E;i=e(i,r[k],k,r)}return i};return function(r,e,i,a){var f=arguments.length>=3;return n(r,Dt(e,a,4),i,f)}}var tn=Gn(1),Kn=Gn(-1);function dt(t,n,r){var e=[];return n=$(n,r),j(t,function(i,a,f){n(i,a,f)&&e.push(i)}),e}function Oe(t,n,r){return dt(t,Zt($(n)),r)}function Yn(t,n,r){n=$(n,r);for(var e=!H(t)&&U(t),i=(e||t).length,a=0;a<i;a++){var f=e?e[a]:a;if(!n(t[f],f,t))return!1}return!0}function Jn(t,n,r){n=$(n,r);for(var e=!H(t)&&U(t),i=(e||t).length,a=0;a<i;a++){var f=e?e[a]:a;if(n(t[f],f,t))return!0}return!1}function tt(t,n,r,e){return H(t)||(t=ht(t)),(typeof r!="number"||e)&&(r=0),Xn(t,n,r)>=0}var Ie=s(function(t,n,r){var e,i;return T(n)?i=n:(n=wt(n),e=n.slice(0,-1),n=n[n.length-1]),st(t,function(a){var f=i;if(!f){if(e&&e.length&&(a=Xt(a,e)),a==null)return;f=a[n]}return f==null?f:f.apply(a,r)})});function nn(t,n){return st(t,Kt(n))}function Te(t,n){return dt(t,St(n))}function Qn(t,n,r){var e=-1/0,i=-1/0,a,f;if(n==null||typeof n=="number"&&typeof t[0]!="object"&&t!=null){t=H(t)?t:ht(t);for(var w=0,E=t.length;w<E;w++)a=t[w],a!=null&&a>e&&(e=a)}else n=$(n,r),j(t,function(k,P,L){f=n(k,P,L),(f>i||f===-1/0&&e===-1/0)&&(e=k,i=f)});return e}function Ce(t,n,r){var e=1/0,i=1/0,a,f;if(n==null||typeof n=="number"&&typeof t[0]!="object"&&t!=null){t=H(t)?t:ht(t);for(var w=0,E=t.length;w<E;w++)a=t[w],a!=null&&a<e&&(e=a)}else n=$(n,r),j(t,function(k,P,L){f=n(k,P,L),(f<i||f===1/0&&e===1/0)&&(e=k,i=f)});return e}var Be=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Zn(t){return t?ut(t)?M.call(t):u(t)?t.match(Be):H(t)?st(t,Gt):ht(t):[]}function xn(t,n,r){if(n==null||r)return H(t)||(t=ht(t)),t[Jt(t.length-1)];var e=Zn(t),i=q(e);n=Math.max(Math.min(n,i),0);for(var a=i-1,f=0;f<n;f++){var w=Jt(f,a),E=e[f];e[f]=e[w],e[w]=E}return e.slice(0,n)}function Pe(t){return xn(t,1/0)}function Fe(t,n,r){var e=0;return n=$(n,r),nn(st(t,function(i,a,f){return{value:i,index:e++,criteria:n(i,a,f)}}).sort(function(i,a){var f=i.criteria,w=a.criteria;if(f!==w){if(f>w||f===void 0)return 1;if(f<w||w===void 0)return-1}return i.index-a.index}),"value")}function It(t,n){return function(r,e,i){var a=n?[[],[]]:{};return e=$(e,i),j(r,function(f,w){var E=e(f,w,r);t(a,f,E)}),a}}var Ue=It(function(t,n,r){et(t,r)?t[r].push(n):t[r]=[n]}),Ne=It(function(t,n,r){t[r]=n}),qe=It(function(t,n,r){et(t,r)?t[r]++:t[r]=1}),Ve=It(function(t,n,r){t[r?0:1].push(n)},!0);function Le(t){return t==null?0:H(t)?t.length:U(t).length}function We(t,n,r){return n in r}var jn=s(function(t,n){var r={},e=n[0];if(t==null)return r;T(e)?(n.length>1&&(e=Dt(e,n[1])),n=yt(t)):(e=We,n=pt(n,!1,!1),t=Object(t));for(var i=0,a=n.length;i<a;i++){var f=n[i],w=t[f];e(w,f,t)&&(r[f]=w)}return r}),ze=s(function(t,n){var r=n[0],e;return T(r)?(r=Zt(r),n.length>1&&(e=n[1])):(n=st(pt(n,!1,!1),String),r=function(i,a){return!tt(n,a)}),jn(t,r,e)});function tr(t,n,r){return M.call(t,0,Math.max(0,t.length-(n==null||r?1:n)))}function rn(t,n,r){return t==null||t.length<1?n==null||r?void 0:[]:n==null||r?t[0]:tr(t,t.length-n)}function Tt(t,n,r){return M.call(t,n==null||r?1:n)}function $e(t,n,r){return t==null||t.length<1?n==null||r?void 0:[]:n==null||r?t[t.length-1]:Tt(t,Math.max(0,t.length-n))}function He(t){return dt(t,Boolean)}function Xe(t,n){return pt(t,n,!1)}var nr=s(function(t,n){return n=pt(n,!0,!0),dt(t,function(r){return!tt(n,r)})}),Ge=s(function(t,n){return nr(t,n)});function en(t,n,r,e){d(n)||(e=r,r=n,n=!1),r!=null&&(r=$(r,e));for(var i=[],a=[],f=0,w=q(t);f<w;f++){var E=t[f],k=r?r(E,f,t):E;n&&!r?((!f||a!==k)&&i.push(E),a=k):r?tt(a,k)||(a.push(k),i.push(E)):tt(i,E)||i.push(E)}return i}var Ke=s(function(t){return en(pt(t,!0,!0))});function Ye(t){for(var n=[],r=arguments.length,e=0,i=q(t);e<i;e++){var a=t[e];if(!tt(n,a)){var f;for(f=1;f<r&&tt(arguments[f],a);f++);f===r&&n.push(a)}}return n}function an(t){for(var n=t&&Qn(t,q).length||0,r=Array(n),e=0;e<n;e++)r[e]=nn(t,e);return r}var Je=s(an);function Qe(t,n){for(var r={},e=0,i=q(t);e<i;e++)n?r[t[e]]=n[e]:r[t[e][0]]=t[e][1];return r}function Ze(t,n,r){n==null&&(n=t||0,t=0),r||(r=n<t?-1:1);for(var e=Math.max(Math.ceil((n-t)/r),0),i=Array(e),a=0;a<e;a++,t+=r)i[a]=t;return i}function xe(t,n){if(n==null||n<1)return[];for(var r=[],e=0,i=t.length;e<i;)r.push(M.call(t,e,e+=n));return r}function un(t,n){return t._chain?I(n).chain():n}function rr(t){return j($t(t),function(n){var r=I[n]=t[n];I.prototype[n]=function(){var e=[this._wrapped];return O.apply(e,arguments),un(this,r.apply(I,e))}}),I}j(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var n=D[t];I.prototype[t]=function(){var r=this._wrapped;return r!=null&&(n.apply(r,arguments),(t==="shift"||t==="splice")&&r.length===0&&delete r[0]),un(this,r)}}),j(["concat","join","slice"],function(t){var n=D[t];I.prototype[t]=function(){var r=this._wrapped;return r!=null&&(r=n.apply(r,arguments)),un(this,r)}});var je={__proto__:null,VERSION:o,restArguments:s,isObject:S,isNull:c,isUndefined:_,isBoolean:d,isElement:m,isString:u,isNumber:l,isDate:h,isRegExp:v,isError:C,isSymbol:R,isArrayBuffer:rt,isDataView:Mt,isArray:ut,isFunction:T,isArguments:Vt,isFinite:Nr,isNaN:pn,isTypedArray:yn,isEmpty:zr,isMatch:Sn,isEqual:$r,isMap:Gr,isWeakMap:Kr,isSet:Yr,isWeakSet:Jr,keys:U,allKeys:yt,values:ht,pairs:Qr,invert:Rn,functions:$t,methods:$t,extend:Mn,extendOwn:Ot,assign:Ot,defaults:bn,create:xr,clone:jr,tap:te,get:Tn,has:ne,mapObject:re,identity:Gt,constant:dn,noop:Bn,toPath:In,property:Kt,propertyOf:ee,matcher:St,matches:St,times:ae,random:Jt,now:At,escape:ie,unescape:se,templateSettings:fe,template:ve,result:pe,uniqueId:ge,chain:me,iteratee:Yt,partial:vt,bind:Nn,bindAll:ye,memoize:we,delay:qn,defer:Se,throttle:De,debounce:Ae,wrap:Ee,negate:Zt,compose:ke,after:_e,before:Vn,once:Re,findKey:Ln,findIndex:xt,findLastIndex:zn,sortedIndex:$n,indexOf:Xn,lastIndexOf:Me,find:jt,detect:jt,findWhere:be,each:j,forEach:j,map:st,collect:st,reduce:tn,foldl:tn,inject:tn,reduceRight:Kn,foldr:Kn,filter:dt,select:dt,reject:Oe,every:Yn,all:Yn,some:Jn,any:Jn,contains:tt,includes:tt,include:tt,invoke:Ie,pluck:nn,where:Te,max:Qn,min:Ce,shuffle:Pe,sample:xn,sortBy:Fe,groupBy:Ue,indexBy:Ne,countBy:qe,partition:Ve,toArray:Zn,size:Le,pick:jn,omit:ze,first:rn,head:rn,take:rn,initial:tr,last:$e,rest:Tt,tail:Tt,drop:Tt,compact:He,flatten:Xe,without:Ge,uniq:en,unique:en,union:Ke,intersection:Ye,difference:nr,unzip:an,transpose:an,zip:Je,object:Qe,range:Ze,chunk:xe,mixin:rr,default:I},sn=rr(je);return sn._=sn,sn}))});var Fr=nt((qa,Pr)=>{B();var pa=(mr(),sa(gr)),da=Tr(),ga=Cr(),vn=Br();function ma(o){return o.bio&&o.bio.email&&o.bio.email.personal}function ya(o){ma(o)&&(o.bio.gravatar=da.url(o.bio.email.personal,{s:"100",r:"pg",d:"mm"})),vn.each(o.work,function(y){y.startDate=y.startDate,y.endDate&&y.startDate?y.endDate==y.startDate?y.endDate="":y.endDate=y.endDate:y.endDate="Present"}),vn.each(o.education,function(y){y.startDate=y.startDate,y.endDate&&y.startDate?y.endDate==y.startDate?y.endDate="":y.endDate=y.endDate:y.endDate="Present"}),vn.each(o.volunteer,function(y){y.startDate=y.startDate,y.endDate&&y.startDate?y.endDate==y.startDate?y.endDate="":y.endDate=y.endDate:y.endDate="Present"});var p=pa.readFileSync("//resume.template","utf8"),D=ga.render(p,o);return D}Pr.exports={render:ya}});B();var ft=ua(Fr(),1),Ur=ft.default??ft,La=Ur.render??ft.render,Wa=Ur.pdfRenderOptions??ft.pdfRenderOptions;export{Wa as pdfRenderOptions,La as render};
/*! Bundled license information:

mustache/mustache.js:
  (*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   *)
*/
