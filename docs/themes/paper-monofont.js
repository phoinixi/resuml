var Be=Object.create;var J=Object.defineProperty;var Fe=Object.getOwnPropertyDescriptor;var je=Object.getOwnPropertyNames;var ze=Object.getPrototypeOf,We=Object.prototype.hasOwnProperty;var F=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var Vt=(t,e)=>()=>(t&&(e=t(t=0)),e);var g=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ue=(t,e)=>{for(var n in e)J(t,n,{get:e[n],enumerable:!0})},Bt=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of je(e))!We.call(t,r)&&r!==n&&J(t,r,{get:()=>e[r],enumerable:!(i=Fe(e,r))||i.enumerable});return t};var Ge=(t,e,n)=>(n=t!=null?Be(ze(t)):{},Bt(e||!t||!t.__esModule?J(n,"default",{value:t,enumerable:!0}):n,t)),Ft=t=>Bt(J({},"__esModule",{value:!0}),t);var p=Vt(()=>{});var ft={};Ue(ft,{createReadStream:()=>Zt,createWriteStream:()=>Qt,default:()=>Ke,existsSync:()=>Ut,lstatSync:()=>Jt,mkdirSync:()=>Kt,readFileSync:()=>zt,readdirSync:()=>Wt,rmdirSync:()=>Xt,statSync:()=>ut,unlinkSync:()=>Yt,writeFileSync:()=>Gt});function pt(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function jt(t){var e=pt(t);if(Y[e]!==void 0)return Y[e];for(var n=Object.keys(Y),i=0;i<n.length;i++)if(e.endsWith("/"+n[i])||e===n[i])return Y[n[i]]}function ct(t){var e=pt(t);if(X[e]!==void 0)return X[e];for(var n=Object.keys(X),i=0;i<n.length;i++)if(e.endsWith("/"+n[i])||e===n[i])return X[n[i]]}var Y,X,zt,Wt,Ut,Gt,Kt,ut,Jt,Yt,Xt,Zt,Qt,Ke,dt=Vt(()=>{"use strict";p();Y={"css/print.css":`
body, html {
  background-color: white;
  padding-top: 1.5em;
}

.content-text ul li a, div.content-text.work-listing.education-listing > p > strong > a {
  color: #000;
}

.paper {
  width:100%;
  border: 0;

  padding-top: 0;
}

header p {
  font-size: 1.3em;
}

.subtitle {
  font-size: 0.7em;
}

.header-pic {
  float:left;
}

.profiles-url {
  display: inline-block;
}

.profiles-listing ul li {
    display: block;
    margin-top: 10px;
}
.profiles-listing ul li a{
  font-weight: bold;
}
.content {
  page-break-inside:avoid;
  page-break-after:auto;
}

.content {
  padding-top: 10px;
}

.header-text {
  float:left;
  margin-top: -1.6em;
}

.content-wrapper > .content:first-child {
  padding-top: 2em;
}

.content:last-child {
  padding-bottom: 0;
}

.content-cat {
  width:33%;
  color:black;
  text-align: left;
}

.content-cat p {
  font-size:0.6em;
  font-weight: 600;
}

header p, .content-text, .work-listing p, .content-text ul li:first-child, .work-listing .highlight, .content-text.skills-listing > ul > li > .highlight {
  color:black;
}

.content-text.skills-listing > ul > li span, .subtitle {
  color:#212121;
}

.content-text ul:last-child {
  margin-bottom: 0.25em;
}

.content-text ul li:first-child {
  width:50%;
}

.profiles-listing ul li:first-child {
  width:32%;
}

div.content-text.skills-listing > ul > li {
  width:33%;
}

.work-listing p {
  margin-bottom: 0.1em;
}

div.content-text.skills-listing > ul > li > p {
  margin-top: 0.4em;
  margin-bottom: 0.5em;
}

div.content-text.skills-listing > ul > li {
  padding-left: 1.5em;
}

div.content-text.skills-listing > ul > li:first-child {
  padding-left: 2em;
}

.note {
  display:none;
}

.content-text:hover {
  border-left:1px solid #eeeeee;
}

.content-text ul li a:hover {
  color:#4fc3f7;
}

.highlight:hover, .content-text.skills-listing > ul > li > .highlight:hover {
  border-left:1px solid #eeeeee;
}

.big-text {
  padding-top: 0;
}
`,"css/style.css":`body, html {
  padding-top:2.5em;
  margin:0;
  background-color:#fafafa;
  font-size: 19px;
}

.note {
  display:block;
  position: absolute;
  top:10px;
  left:10px;

  font-family: "Open Sans";
  font-size: 0.6em;
}

.new {
  background-color: #81C784;

  border: 1px solid #757575;
  padding: 1px;
  border-radius: 4px;

}

/* Header */

header {
  width:100%;
  vertical-align: middle;
  text-align: center;

}

.header-content {
  display: inline-block;
}

.pic {
  margin: 0 auto;
  margin-top:-2.5em;

  border-radius:10em;
  height:4em;
  width:4em;

  border: 2px solid #e0e0e0;
  transition : all 0.5s linear;

}

@-webkit-keyframes wiggle {
  0%   {
    transform: rotate(0deg);
  }
  25%  {
    transform: rotate(-30deg);
  }
  50%  {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.pic:hover {
  /*Webkit fix*/
  -webkit-transform: translateZ(0);

  cursor:pointer;

  -webkit-animation: wiggle 0.7s cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

.header-text {
  margin-top:0.5em;
  margin-left:1em;
}

header p {
  text-align:center;
  font-family: "Open Sans";

  margin:0;

  color: #212121;
}

.first-name {
   font-size: 1.05em;
}

.subtitle {
  font-family: "Open Sans";
  padding-top:.3em;
  font-size:0.55em;
  font-weight:500;
  color: #424242;
}

/* Information */

.paper {
  margin: 0 auto;
  margin-bottom:1em;

  background-color:white;
  width:60%;

  padding:0.5em 0 0.5em 0;

  border-top: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  border-bottom: 3px solid #e0e0e0;
  border-radius:3px;
}

@media(max-width:992px) {
  .paper {
    width:80%;
  }
}

/* Content Part */

.content-wrapper {
  padding-right:7.25%;
}

.content {
  display:table;
  width:100%;

  padding-top:1.5em;

  /*border-top: 1px solid #eeeeee;*/
}

.content:last-child {
  margin-bottom: 2em;
}

body > div > article > div > section:last-child {
  padding-bottom:1.5em;
}

.row {
    display:table-row;
}
.row div {
    display:table-cell;
}

.content-cat {
  font-family: "Open Sans";
  font-variant:small-caps;
  font-weight:300;
  letter-spacing: 1px;

  color: #212121;

  font-size:0.975em;

  text-align:center;
  vertical-align:middle;

  padding-left:6.66%;
  width:30%;
}

.content-cat p {
  font-size:0.7em;
  font-weight:600;
  margin-top: 0;
  margin-bottom:0;
}

.content-text {
  border-left:1px solid #e0e0e0;
  transition: border 0.66s ease-in;
}

.big-text {
  vertical-align:top;
}

.content-text ul {
  padding:0;
  margin:0;
  margin-top:0.15em;

  width:85%;
  margin-left:1.5em;
}

.content-text ul:last-child {
  margin-bottom:0.5em;
}

.content-text ul li {
  font-family: "Open Sans";
  font-size:0.7em;

  display:inline-block;

}

.content-text ul li:first-child {
  width:35%;

  color: #424242;

  font-weight:600;
}

.content-text ul li a, div.content-text.work-listing.education-listing > p > strong > a {
  text-decoration: none;
  color: #0277bd;
}

.content-text ul li a:hover {
  color:#4fc3f7;
}

.work-listing p {
  font-family: "Open Sans";
  font-size:0.7em;

  color: #424242;

  margin-left:2em;
  margin-top:0.45em;
  margin-bottom: 0.45em;
}

div.content-text.work-listing.education-listing > p:nth-child(2) {
  margin-top:0.25em;
}

.work-listing .highlight {
  font-family: "Open Sans";
  font-size:0.7em;
  font-weight:400;

  color: #424242;

  margin-left:3.25em;
  padding-left:0.5em;

  border-left:1px solid #e0e0e0;

}

.education-listing > .heading {
  font-weight:600;

  margin-top:0.75em;
  margin-left:2em;
}

.education-listing > .highlight {
  margin-left:3.25em;
}

.highlight {
  transition: border .33s ease-in;
}

.profiles-listing ul li, .profiles-listing ul li:first-child {
  width:32%;
  font-weight: normal;
}

.profiles-url {
  display:none;
}

.work-content, .education-content {
  padding-top: .75em;
}

section.content.education-content > div > div.content-cat {
  vertical-align: top;
}

div.content-text.skills-listing > p {
  font-family: "Open Sans";
  font-size:0.7em;
  font-weight:400;

  margin-left: 2em;
  margin-top: 0.45em;
  margin-bottom: 0.45em;
}

div.content-text.skills-listing > p > {
  color:#212121;
}

.content-cat p:first-child {
    margin-top: 10px;
`,"package.json":`{
  "name": "jsonresume-theme-paper-monofont",
  "version": "0.1.0",
  "description": "A theme for JSON Resume based on Paper Theme by Tim Daubensch\xFCtz",
  "author": "Roberto Serra",
  "repository": {
    "type": "git",
    "url": "https://github.com/obiSerra/jsonresume-theme-paper-monofont.git"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  },
  "homepage": "https://github.com/obiSerra/jsonresume-theme-paper-monofont.git",
  "main": "index.js",
  "scripts": {
    "start": "resume serve"
  },
  "devDependencies": {},
  "keywords": [
    "jsonresume",
    "json",
    "resume"
  ]
}
`,"resume.template":`<!doctype html>
<html>
	<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">

	<title>{{#resume.basics}}{{name}}{{/resume.basics}}</title>
	<link href='http://fonts.googleapis.com/css?family=Merriweather:400,300,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>


	<style>
	{{{css}}}
	</style>

	<style media="print">
	{{{print}}}
	</style>

	</head>
	<body>
		<div class="resume-wrapper">
		  <article class="paper">
		  	{{#resume.basics}}
			    <header>
			      <div class="header-content">
			      	{{#if picture}}
			        <div class="header-pic" title="Wiggle Wiggle">
			          <img src="{{picture}}" class="pic" />
			        </div>
			        {{/if}}
			        <div class="header-text">
			          <p>
			            {{name}}
			          </p>
			          <p class="subtitle">{{label}}</p>
			        </div>
			      </div>
			    </header>
			    <div class="content-wrapper">

			      <!-- CONTACT -->
			      <section class="content">
			        <div class="row">
			          <div class="content-cat">
			           Contact
			          </div>
			          <div class="content-text">
			          	{{#if website}}
				            <ul>
				              <li>Website</li>
				              <li>{{website}}</li>
				            </ul>
			            {{/if}}

			            {{#if email}}
				            <ul>
				              <li>Email</li>
				              <li>{{email}}</li>
				            </ul>
			            {{/if}}

			            {{#if phone}}
				            <ul>
				              <li>Phone</li>
				              <li>{{phone}}</li>
				            </ul>
			            {{/if}}
			          </div>
			        </div>
			      </section>

			      <!-- LOCATION -->
			      {{#location}}
				      {{#ifCond address '||' city}}
					      <section class="content">
					        <div class="row">
					          <div class="content-cat">
					           Location
					          </div>
					          <div class="content-text">

					          	{{#if address}}
						            <ul>
						              <li>Address</li>
						              <li>{{address}}</li>
						            </ul>
					            {{/if}}

					            {{#if city}}
					            	{{#if postalCode}}
							            <ul>
							              <li>Postal Code & City</li>
							              <li>{{postalCode}} {{city}}</li>
							            </ul>
						            {{/if}}
					            {{/if}}

					            {{#if region}}
						            <ul>
						              <li>Region</li>
						              <li>{{region}}</li>
						            </ul>
											{{/if}}

					          </div>
					        </div>
					      </section>
			      	{{/ifCond}}
		      	{{/location}}
		      {{/resume.basics}}


						<!-- LANGUAGE -->
			      {{#if resume.languages.length}}
			      <section class="content">
			        <div class="row">
			          <div class="content-cat">
			           Languages
			          </div>
			          <div class="content-text">

			          	{{#each resume.languages}}
				            <ul>

											{{#if language}}
				              	<li>{{language}}</li>
											{{/if}}

											{{#if fluency}}
				              <li>{{fluency}}</li>
											{{/if}}

				            </ul>
			            {{/each}}

			          </div>
			        </div>
			      </section>
			      {{/if}}

					{{#resume.basics}}
			      <!-- PROFILES -->
			      {{#if profiles.length}}
				      <section class="content profiles">
				        <div class="row">
				          <div class="content-cat">
				           Profiles
				          </div>
				          <div class="content-text profiles-listing">
				            <ul>
					            {{#each profiles}}
					            	{{#if network}}
					              	<li>
					              	<a href="{{url}}" target="_blank">{{network}}</a>
													<span class="profiles-url">{{url}}</span>
							            </li>
					              {{/if}}
					            {{/each}}
				            </ul>
				          </div>
				        </div>
				      </section>
			      {{/if}}
					{{/resume.basics}}

					{{#if resume.work.length}}
						{{#foreach resume.work}}
						{{#if $first}}
								<section class="content">
						{{else}}
								<section class="content work-content">
          	{{/if}}
			        <div class="row">
			          <div class="content-cat big-text">
			          	{{#if $first}}
											Work	Experience
			          	{{/if}}

								 {{#if startDate}}
										{{#if endDate}}
			            		<p>{{startDate}}</p>

											<p>{{endDate}}</p>
			            	{{/if}}
									{{/if}}

			          </div>
			          <div class="content-text work-listing education-listing">
										{{#ifCond company '&&' position}}
										{{#if $first}}
					            <p style="margin-top:2.4em;">
					            {{else}}
					            <p>
					          {{/if}}
					            	{{#if website}}
													<strong>{{position}}</strong> at <strong><a href="{{website}}">{{company}}:</a></strong>
												{{else}}
					            		<strong>{{position}}</strong> at <strong>{{company}}:</strong>
					            	{{/if}}
					            </p>
										{{/ifCond}}

										{{#if summary}}
											<p>{{summary}}</p>
										{{/if}}

										{{#if highlights.length}}
											{{#each highlights}}
												<p class="highlight">{{.}}</p>
											{{/each}}
										{{/if}}


			          </div>
			        </div>
			      </section>
			      {{/foreach}}
					{{/if}}

					{{#if resume.volunteer.length}}
						{{#each resume.volunteer}}
				      <section class="content">
				        <div class="row">
				          <div class="content-cat big-text">
				          {{#if organization}}
				          	{{organization}}
				          {{/if}}

									{{#if startDate}}
			            		<p>{{startDate}}</p>

											{{/if}}
										{{#if endDate}}
											<p>{{endDate}}</p>
			            	{{/if}}

									</div>
				          <div class="content-text work-listing">

										{{#if summary}}
					            <p>
					            	{{summary}}
					            </p>
										{{/if}}

										{{#if highlights.length}}
											{{#each highlights}}
												<p class="highlight">{{.}}</p>
											{{/each}}
										{{/if}}
				          </div>
				        </div>
				      </section>
			      {{/each}}
					{{/if}}


					{{#if resume.education.length}}
						{{#foreach resume.education}}
							{{#if $first}}
								<section class="content">
							{{else}}
								<section class="content education-content">
							{{/if}}
				        <div class="row">
				          <div class="content-cat big-text">

				          	{{#if $first}}
				            	Education
										{{/if}}

										{{#if startDate}}
				            		<p>{{startDate}}</p>

												{{/if}}
											{{#if endDate}}
												<p>{{endDate}}</p>
				            	{{/if}}

				          </div>
				          <div class="content-text work-listing education-listing">
										{{#if institution}}
											{{#if $first}}
						            <p class="heading" style="margin-top:2.35em;">{{institution}}</p>
						            {{else}}
						            <p class="heading">{{institution}}</p>
						          {{/if}}
										{{/if}}
										{{#if area}}
				            		<p class="highlight">
				            		{{#if studyType}}
													{{studyType}}:
				            		{{/if}}
				            		<i>{{area}}</i>
				            		</p>
										{{/if}}

				          </div>
				        </div>
				      </section>
			      {{/foreach}}
		      {{/if}}

					{{#if resume.awards.length}}
						{{#foreach resume.awards}}
				      <section class="content">
				        <div class="row">
				          <div class="content-cat big-text">
				            {{#if $first}}
				            	Awards
										{{/if}}

										{{#if title}}
				            	<p>{{title}}</p>
										{{/if}}

										{{#if date}}
				            	<p style="margin-top:0.25em;">{{date}}</p>
										{{/if}}

				          </div>
				          <div class="content-text work-listing">

										{{#if awarder}}
					         		<strong><p class="heading">{{awarder}}</p></strong>
										{{/if}}

										{{#if summary}}
				            	<p class="highlight">{{summary}}</p>
										{{/if}}
				          </div>
				        </div>
				      </section>
			      {{/foreach}}
		      {{/if}}

					{{#if resume.skills.length}}
			      <section class="content">
			        <div class="row">
			          <div class="content-cat">
			            Skills
			          </div>
			          <div class="content-text skills-listing">
			          	{{#foreach resume.skills}}
			            	<p>
			            	<span class="name">
			              {{#if name}}
											<strong>
											{{name}}{{#if level}}{{else}}:{{/if}}

											</strong>
			            	{{/if}}
			            	</span>

										{{#if level}}
		                	<span>({{level}}):</span>
		                {{/if}}

											{{#if keywords.length}}
												{{#commalist keywords}}{{.}}{{/commalist}}
											{{/if}}
			            	</p>
			            {{/foreach}}
			          </div>
			        </div>
			      </section>
		    	{{/if}}

		    	{{#if resume.interests.length}}
			      <section class="content">
			        <div class="row">
			          <div class="content-cat">
			            Interests
			          </div>
			          <div class="content-text skills-listing">
			          	{{#foreach resume.interests}}
			            	<p>
			            	<span class="name">
			              {{#if name}}
											<strong>
												{{name}}:
											</strong>
			            	{{/if}}
			            	</span>
											{{#if keywords.length}}
												{{#commalist keywords}}{{.}}{{/commalist}}
											{{/if}}
			            	</p>
			            {{/foreach}}
			          </div>
			        </div>
			      </section>
		    	{{/if}}

		    </div>

		  </article>

		</div>
	</body>
</html>
`},X={css:["print.css","style.css"],".":["README.md","css","index.js","package.json","resume.template"]};zt=function(t,e){var n=jt(t);return n!==void 0?n:""},Wt=function(t,e){var n=ct(t);return n===void 0&&(n=[]),e&&e.withFileTypes?n.map(function(i){var r=pt(t)+"/"+i,s=ct(r)!==void 0;return{name:i,isFile:function(){return!s},isDirectory:function(){return s}}}):n},Ut=function(t){return jt(t)!==void 0||ct(t)!==void 0},Gt=function(){},Kt=function(){},ut=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Jt=ut,Yt=function(){},Xt=function(){},Zt=function(){return{pipe:function(t){return t},on:function(){return this}}},Qt=function(){return{write:function(){},end:function(){},on:function(){return this}}},Ke={readFileSync:zt,readdirSync:Wt,existsSync:Ut,writeFileSync:Gt,mkdirSync:Kt,statSync:ut,lstatSync:Jt,unlinkSync:Yt,rmdirSync:Xt,createReadStream:Zt,createWriteStream:Qt}});var gt=g(te=>{"use strict";p();function $t(t){this.string=t}$t.prototype.toString=function(){return""+this.string};te.default=$t});var q=g(N=>{"use strict";p();var Je=gt().default,Ye={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Xe=/[&<>"'`]/g,Ze=/[&<>"'`]/;function Qe(t){return Ye[t]}function $e(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}N.extend=$e;var mt=Object.prototype.toString;N.toString=mt;var Z=function(t){return typeof t=="function"};Z(/x/)&&(Z=function(t){return typeof t=="function"&&mt.call(t)==="[object Function]"});var Z;N.isFunction=Z;var ee=Array.isArray||function(t){return t&&typeof t=="object"?mt.call(t)==="[object Array]":!1};N.isArray=ee;function tn(t){return t instanceof Je?t.toString():t==null?"":t?(t=""+t,Ze.test(t)?t.replace(Xe,Qe):t):t+""}N.escapeExpression=tn;function en(t){return!t&&t!==0?!0:!!(ee(t)&&t.length===0)}N.isEmpty=en;function nn(t,e){return(t?t+".":"")+e}N.appendContextPath=nn});var _=g(ie=>{"use strict";p();var vt=["description","fileName","lineNumber","message","name","number","stack"];function ne(t,e){var n;e&&e.firstLine&&(n=e.firstLine,t+=" - "+n+":"+e.firstColumn);for(var i=Error.prototype.constructor.call(this,t),r=0;r<vt.length;r++)this[vt[r]]=i[vt[r]];n&&(this.lineNumber=n,this.column=e.firstColumn)}ne.prototype=new Error;ie.default=ne});var A=g(P=>{"use strict";p();var b=q(),bt=_().default,rn="2.0.0";P.VERSION=rn;var sn=6;P.COMPILER_REVISION=sn;var an={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};P.REVISION_CHANGES=an;var re=b.isArray,kt=b.isFunction,se=b.toString,ae="[object Object]";function yt(t,e){this.helpers=t||{},this.partials=e||{},on(this)}P.HandlebarsEnvironment=yt;yt.prototype={constructor:yt,logger:j,log:oe,registerHelper:function(t,e){if(se.call(t)===ae){if(e)throw new bt("Arg not supported with multiple helpers");b.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){se.call(t)===ae?b.extend(this.partials,t):this.partials[t]=e},unregisterPartial:function(t){delete this.partials[t]}};function on(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new bt("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(e,n){var i=n.inverse,r=n.fn;if(e===!0)return r(this);if(e===!1||e==null)return i(this);if(re(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):i(this);if(n.data&&n.ids){var s=Q(n.data);s.contextPath=b.appendContextPath(n.data.contextPath,n.name),n={data:s}}return r(e,n)}),t.registerHelper("each",function(e,n){if(!n)throw new bt("Must pass iterator to #each");var i=n.fn,r=n.inverse,s=0,o="",a,c;if(n.data&&n.ids&&(c=b.appendContextPath(n.data.contextPath,n.ids[0])+"."),kt(e)&&(e=e.call(this)),n.data&&(a=Q(n.data)),e&&typeof e=="object")if(re(e))for(var l=e.length;s<l;s++)a&&(a.index=s,a.first=s===0,a.last=s===e.length-1,c&&(a.contextPath=c+s)),o=o+i(e[s],{data:a});else for(var u in e)e.hasOwnProperty(u)&&(a&&(a.key=u,a.index=s,a.first=s===0,c&&(a.contextPath=c+u)),o=o+i(e[u],{data:a}),s++);return s===0&&(o=r(this)),o}),t.registerHelper("if",function(e,n){return kt(e)&&(e=e.call(this)),!n.hash.includeZero&&!e||b.isEmpty(e)?n.inverse(this):n.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),t.registerHelper("with",function(e,n){kt(e)&&(e=e.call(this));var i=n.fn;if(b.isEmpty(e))return n.inverse(this);if(n.data&&n.ids){var r=Q(n.data);r.contextPath=b.appendContextPath(n.data.contextPath,n.ids[0]),n={data:r}}return i(e,n)}),t.registerHelper("log",function(e,n){var i=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;t.log(i,e)}),t.registerHelper("lookup",function(e,n){return e&&e[n]})}var j={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(j.level<=t){var n=j.methodMap[t];typeof console<"u"&&console[n]&&console[n].call(console,e)}}};P.logger=j;var oe=j.log;P.log=oe;var Q=function(t){var e=b.extend({},t);return e._parent=t,e};P.createFrame=Q});var he=g(V=>{"use strict";p();var St=q(),H=_().default,ln=A().COMPILER_REVISION,le=A().REVISION_CHANGES,hn=A().createFrame;function cn(t){var e=t&&t[0]||1,n=ln;if(e!==n)if(e<n){var i=le[n],r=le[e];throw new H("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+r+").")}else throw new H("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}V.checkRevision=cn;function pn(t,e){if(!e)throw new H("No environment passed to template");if(!t||!t.main)throw new H("Unknown template object: "+typeof t);e.VM.checkRevision(t.compiler);var n=function(s,o,a,c,l,u,h,w,T){l&&(c=St.extend({},c,l));var O=e.VM.invokePartial.call(this,s,a,c,u,h,w,T);if(O==null&&e.compile){var Mt={helpers:u,partials:h,data:w,depths:T};h[a]=e.compile(s,{data:w!==void 0,compat:t.compat},e),O=h[a](c,Mt)}if(O!=null){if(o){for(var S=O.split(`
`),E=0,at=S.length;E<at&&!(!S[E]&&E+1===at);E++)S[E]=o+S[E];O=S.join(`
`)}return O}else throw new H("The partial "+a+" could not be compiled when running in runtime-only mode")},i={lookup:function(s,o){for(var a=s.length,c=0;c<a;c++)if(s[c]&&s[c][o]!=null)return s[c][o]},lambda:function(s,o){return typeof s=="function"?s.call(o):s},escapeExpression:St.escapeExpression,invokePartial:n,fn:function(s){return t[s]},programs:[],program:function(s,o,a){var c=this.programs[s],l=this.fn(s);return o||a?c=$(this,s,l,o,a):c||(c=this.programs[s]=$(this,s,l)),c},data:function(s,o){for(;s&&o--;)s=s._parent;return s},merge:function(s,o){var a=s||o;return s&&o&&s!==o&&(a=St.extend({},o,s)),a},noop:e.VM.noop,compilerInfo:t.compiler},r=function(s,o){o=o||{};var a=o.data;r._setup(o),!o.partial&&t.useData&&(a=dn(s,a));var c;return t.useDepths&&(c=o.depths?[s].concat(o.depths):[s]),t.main.call(i,s,i.helpers,i.partials,a,c)};return r.isTop=!0,r._setup=function(s){s.partial?(i.helpers=s.helpers,i.partials=s.partials):(i.helpers=i.merge(s.helpers,e.helpers),t.usePartial&&(i.partials=i.merge(s.partials,e.partials)))},r._child=function(s,o,a){if(t.useDepths&&!a)throw new H("must pass parent depths");return $(i,s,t[s],o,a)},r}V.template=pn;function $(t,e,n,i,r){var s=function(o,a){return a=a||{},n.call(t,o,t.helpers,t.partials,a.data||i,r&&[o].concat(r))};return s.program=e,s.depth=r?r.length:0,s}V.program=$;function un(t,e,n,i,r,s,o){var a={partial:!0,helpers:i,partials:r,data:s,depths:o};if(t===void 0)throw new H("The partial "+e+" could not be found");if(t instanceof Function)return t(n,a)}V.invokePartial=un;function fn(){return""}V.noop=fn;function dn(t,e){return(!e||!("root"in e))&&(e=e?hn(e):{},e.root=t),e}});var de=g(fe=>{"use strict";p();var ce=A(),gn=gt().default,mn=_().default,xt=q(),pe=he(),ue=function(){var t=new ce.HandlebarsEnvironment;return xt.extend(t,ce),t.SafeString=gn,t.Exception=mn,t.Utils=xt,t.escapeExpression=xt.escapeExpression,t.VM=pe,t.template=function(e){return pe.template(e,t)},t},tt=ue();tt.create=ue;tt.default=tt;fe.default=tt});var wt=g(me=>{"use strict";p();var ge=_().default;function v(t){t=t||{},this.firstLine=t.first_line,this.firstColumn=t.first_column,this.lastColumn=t.last_column,this.lastLine=t.last_line}var z={ProgramNode:function(t,e,n){v.call(this,n),this.type="program",this.statements=t,this.strip=e},MustacheNode:function(t,e,n,i,r){if(v.call(this,r),this.type="mustache",this.strip=i,n!=null&&n.charAt){var s=n.charAt(3)||n.charAt(2);this.escaped=s!=="{"&&s!=="&"}else this.escaped=!!n;t instanceof z.SexprNode?this.sexpr=t:this.sexpr=new z.SexprNode(t,e),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(t,e,n){v.call(this,n),this.type="sexpr",this.hash=e;var i=this.id=t[0],r=this.params=t.slice(1);this.isHelper=!!(r.length||e),this.eligibleHelper=this.isHelper||i.isSimple},PartialNode:function(t,e,n,i,r){v.call(this,r),this.type="partial",this.partialName=t,this.context=e,this.hash=n,this.strip=i,this.strip.inlineStandalone=!0},BlockNode:function(t,e,n,i,r){v.call(this,r),this.type="block",this.mustache=t,this.program=e,this.inverse=n,this.strip=i,n&&!e&&(this.isInverse=!0)},RawBlockNode:function(t,e,n,i){if(v.call(this,i),t.sexpr.id.original!==n)throw new ge(t.sexpr.id.original+" doesn't match "+n,this);e=new z.ContentNode(e,i),this.type="block",this.mustache=t,this.program=new z.ProgramNode([e],{},i)},ContentNode:function(t,e){v.call(this,e),this.type="content",this.original=this.string=t},HashNode:function(t,e){v.call(this,e),this.type="hash",this.pairs=t},IdNode:function(t,e){v.call(this,e),this.type="ID";for(var n="",i=[],r=0,s="",o=0,a=t.length;o<a;o++){var c=t[o].part;if(n+=(t[o].separator||"")+c,c===".."||c==="."||c==="this"){if(i.length>0)throw new ge("Invalid path: "+n,this);c===".."?(r++,s+="../"):this.isScoped=!0}else i.push(c)}this.original=n,this.parts=i,this.string=i.join("."),this.depth=r,this.idName=s+this.string,this.isSimple=t.length===1&&!this.isScoped&&r===0,this.stringModeValue=this.string},PartialNameNode:function(t,e){v.call(this,e),this.type="PARTIAL_NAME",this.name=t.original},DataNode:function(t,e){v.call(this,e),this.type="DATA",this.id=t,this.stringModeValue=t.stringModeValue,this.idName="@"+t.stringModeValue},StringNode:function(t,e){v.call(this,e),this.type="STRING",this.original=this.string=this.stringModeValue=t},NumberNode:function(t,e){v.call(this,e),this.type="NUMBER",this.original=this.number=t,this.stringModeValue=Number(t)},BooleanNode:function(t,e){v.call(this,e),this.type="BOOLEAN",this.bool=t,this.stringModeValue=t==="true"},CommentNode:function(t,e){v.call(this,e),this.type="comment",this.comment=t,this.strip={inlineStandalone:!0}}};me.default=z});var ke=g(ve=>{"use strict";p();var vn=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(r,s,o,a,c,l,u){var h=l.length-1;switch(c){case 1:return a.prepareProgram(l[h-1].statements,!0),l[h-1];break;case 2:this.$=new a.ProgramNode(a.prepareProgram(l[h]),{},this._$);break;case 3:this.$=l[h];break;case 4:this.$=l[h];break;case 5:this.$=l[h];break;case 6:this.$=l[h];break;case 7:this.$=new a.ContentNode(l[h],this._$);break;case 8:this.$=new a.CommentNode(l[h],this._$);break;case 9:this.$=new a.RawBlockNode(l[h-2],l[h-1],l[h],this._$);break;case 10:this.$=new a.MustacheNode(l[h-1],null,"","",this._$);break;case 11:this.$=a.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!1,this._$);break;case 12:this.$=a.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!0,this._$);break;case 13:this.$=new a.MustacheNode(l[h-1],null,l[h-2],a.stripFlags(l[h-2],l[h]),this._$);break;case 14:this.$=new a.MustacheNode(l[h-1],null,l[h-2],a.stripFlags(l[h-2],l[h]),this._$);break;case 15:this.$={strip:a.stripFlags(l[h-1],l[h-1]),program:l[h]};break;case 16:this.$={path:l[h-1],strip:a.stripFlags(l[h-2],l[h])};break;case 17:this.$=new a.MustacheNode(l[h-1],null,l[h-2],a.stripFlags(l[h-2],l[h]),this._$);break;case 18:this.$=new a.MustacheNode(l[h-1],null,l[h-2],a.stripFlags(l[h-2],l[h]),this._$);break;case 19:this.$=new a.PartialNode(l[h-3],l[h-2],l[h-1],a.stripFlags(l[h-4],l[h]),this._$);break;case 20:this.$=new a.PartialNode(l[h-2],void 0,l[h-1],a.stripFlags(l[h-3],l[h]),this._$);break;case 21:this.$=new a.SexprNode([l[h-2]].concat(l[h-1]),l[h],this._$);break;case 22:this.$=new a.SexprNode([l[h]],null,this._$);break;case 23:this.$=l[h];break;case 24:this.$=new a.StringNode(l[h],this._$);break;case 25:this.$=new a.NumberNode(l[h],this._$);break;case 26:this.$=new a.BooleanNode(l[h],this._$);break;case 27:this.$=l[h];break;case 28:l[h-1].isHelper=!0,this.$=l[h-1];break;case 29:this.$=new a.HashNode(l[h],this._$);break;case 30:this.$=[l[h-2],l[h]];break;case 31:this.$=new a.PartialNameNode(l[h],this._$);break;case 32:this.$=new a.PartialNameNode(new a.StringNode(l[h],this._$),this._$);break;case 33:this.$=new a.PartialNameNode(new a.NumberNode(l[h],this._$));break;case 34:this.$=new a.DataNode(l[h],this._$);break;case 35:this.$=new a.IdNode(l[h],this._$);break;case 36:l[h-2].push({part:l[h],separator:l[h-1]}),this.$=l[h-2];break;case 37:this.$=[{part:l[h]}];break;case 38:this.$=[];break;case 39:l[h-1].push(l[h]);break;case 48:this.$=[];break;case 49:l[h-1].push(l[h]);break;case 52:this.$=[l[h]];break;case 53:l[h-1].push(l[h]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(r,s){throw new Error(r)},parse:function(r){var s=this,o=[0],a=[null],c=[],l=this.table,u="",h=0,w=0,T=0,O=2,Mt=1;this.lexer.setInput(r),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var S=this.lexer.yylloc;c.push(S);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function at(y){o.length=o.length-2*y,a.length=a.length-y,c.length=c.length-y}function Ve(){var y;return y=s.lexer.lex()||1,typeof y!="number"&&(y=s.symbols_[y]||y),y}for(var m,ot,I,k,jn,lt,M={},G,x,qt,K;;){if(I=o[o.length-1],this.defaultActions[I]?k=this.defaultActions[I]:((m===null||typeof m>"u")&&(m=Ve()),k=l[I]&&l[I][m]),typeof k>"u"||!k.length||!k[0]){var ht="";if(!T){K=[];for(G in l[I])this.terminals_[G]&&G>2&&K.push("'"+this.terminals_[G]+"'");this.lexer.showPosition?ht="Parse error on line "+(h+1)+`:
`+this.lexer.showPosition()+`
Expecting `+K.join(", ")+", got '"+(this.terminals_[m]||m)+"'":ht="Parse error on line "+(h+1)+": Unexpected "+(m==1?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(ht,{text:this.lexer.match,token:this.terminals_[m]||m,line:this.lexer.yylineno,loc:S,expected:K})}}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+m);switch(k[0]){case 1:o.push(m),a.push(this.lexer.yytext),c.push(this.lexer.yylloc),o.push(k[1]),m=null,ot?(m=ot,ot=null):(w=this.lexer.yyleng,u=this.lexer.yytext,h=this.lexer.yylineno,S=this.lexer.yylloc,T>0&&T--);break;case 2:if(x=this.productions_[k[1]][1],M.$=a[a.length-x],M._$={first_line:c[c.length-(x||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(x||1)].first_column,last_column:c[c.length-1].last_column},E&&(M._$.range=[c[c.length-(x||1)].range[0],c[c.length-1].range[1]]),lt=this.performAction.call(M,u,w,h,this.yy,k[1],a,c),typeof lt<"u")return lt;x&&(o=o.slice(0,-1*x*2),a=a.slice(0,-1*x),c=c.slice(0,-1*x)),o.push(this.productions_[k[1]][0]),a.push(M.$),c.push(M._$),qt=l[o[o.length-2]][o[o.length-1]],o.push(qt);break;case 3:return!0}}return!0}},e=(function(){var i={EOF:1,parseError:function(s,o){if(this.yy.parser)this.yy.parser.parseError(s,o);else throw new Error(s)},setInput:function(r){return this._input=r,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var s=r.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},unput:function(r){var s=r.length,o=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s-1),this.offset-=s;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===a.length?this.yylloc.first_column:0)+a[a.length-o.length].length-o[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-s]),this},more:function(){return this._more=!0,this},less:function(r){this.unput(this.match.slice(r))},pastInput:function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var r=this.pastInput(),s=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+s+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,s,o,a,c,l;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),h=0;h<u.length&&(o=this._input.match(this.rules[u[h]]),!(o&&(!s||o[0].length>s[0].length)&&(s=o,a=h,!this.options.flex)));h++);return s?(l=s[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],r=this.performAction.call(this,this.yy,this,u[a],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return typeof s<"u"?s:this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(s){this.begin(s)}};return i.options={},i.performAction=function(s,o,a,c){function l(h,w){return o.yytext=o.yytext.substr(h,o.yyleng-w)}var u=c;switch(a){case 0:if(o.yytext.slice(-2)==="\\\\"?(l(0,1),this.begin("mu")):o.yytext.slice(-1)==="\\"?(l(0,1),this.begin("emu")):this.begin("mu"),o.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return o.yytext=o.yytext.substr(5,o.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return l(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return l(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return o.yytext=l(1,2).replace(/\\"/g,'"'),42;break;case 30:return o.yytext=l(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return o.yytext=l(1,2),50;break;case 37:return"INVALID";case 38:return 5}},i.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],i.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},i})();t.lexer=e;function n(){this.yy={}}return n.prototype=t,t.Parser=n,new n})();ve.default=vn});var be=g(et=>{"use strict";p();var kn=_().default;function bn(t,e){return{left:t.charAt(2)==="~",right:e.charAt(e.length-3)==="~"}}et.stripFlags=bn;function yn(t,e,n,i,r,s){if(t.sexpr.id.original!==i.path.original)throw new kn(t.sexpr.id.original+" doesn't match "+i.path.original,t);var o=n&&n.program,a={left:t.strip.left,right:i.strip.right,openStandalone:Nt(e.statements),closeStandalone:Et((o||e).statements)};if(t.strip.right&&R(e.statements,null,!0),o){var c=n.strip;c.left&&C(e.statements,null,!0),c.right&&R(o.statements,null,!0),i.strip.left&&C(o.statements,null,!0),Et(e.statements)&&Nt(o.statements)&&(C(e.statements),R(o.statements))}else i.strip.left&&C(e.statements,null,!0);return r?new this.BlockNode(t,o,e,a,s):new this.BlockNode(t,e,o,a,s)}et.prepareBlock=yn;function Sn(t,e){for(var n=0,i=t.length;n<i;n++){var r=t[n],s=r.strip;if(s){var o=Et(t,n,e,r.type==="partial"),a=Nt(t,n,e),c=s.openStandalone&&o,l=s.closeStandalone&&a,u=s.inlineStandalone&&o&&a;s.right&&R(t,n,!0),s.left&&C(t,n,!0),u&&(R(t,n),C(t,n)&&r.type==="partial"&&(r.indent=/([ \t]+$)/.exec(t[n-1].original)?RegExp.$1:"")),c&&(R((r.program||r.inverse).statements),C(t,n)),l&&(R(t,n),C((r.inverse||r.program).statements))}}return t}et.prepareProgram=Sn;function Et(t,e,n){e===void 0&&(e=t.length);var i=t[e-1],r=t[e-2];if(!i)return n;if(i.type==="content")return(r||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}function Nt(t,e,n){e===void 0&&(e=-1);var i=t[e+1],r=t[e+2];if(!i)return n;if(i.type==="content")return(r||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}function R(t,e,n){var i=t[e==null?0:e+1];if(!(!i||i.type!=="content"||!n&&i.rightStripped)){var r=i.string;i.string=i.string.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.string!==r}}function C(t,e,n){var i=t[e==null?t.length-1:e-1];if(!(!i||i.type!=="content"||!n&&i.leftStripped)){var r=i.string;return i.string=i.string.replace(n?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.string!==r,i.leftStripped}}});var Ct=g(Pt=>{"use strict";p();var _t=ke().default,ye=wt().default,xn=be(),wn=q().extend;Pt.parser=_t;var Se={};wn(Se,xn,ye);function En(t){return t.constructor===ye.ProgramNode?t:(_t.yy=Se,_t.parse(t))}Pt.parse=En});var it=g(nt=>{"use strict";p();var It=_().default,xe=q().isArray,Nn=[].slice;function Ot(){}nt.Compiler=Ot;Ot.prototype={compiler:Ot,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var n=0;n<e;n++){var i=this.opcodes[n],r=t.opcodes[n];if(i.opcode!==r.opcode||!we(i.args,r.args))return!1}for(e=this.children.length,n=0;n<e;n++)if(!this.children[n].equals(t.children[n]))return!1;return!0},guid:0,compile:function(t,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds;var n=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},n)for(var i in n)this.options.knownHelpers[i]=n[i];return this.accept(t)},accept:function(t){return this[t.type](t)},program:function(t){for(var e=t.statements,n=0,i=e.length;n<i;n++)this.accept(e[n]);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(r,s){return r-s}),this},compileProgram:function(t){var e=new this.compiler().compile(t,this.options),n=this.guid++,i;this.usePartial=this.usePartial||e.usePartial,this.children[n]=e;for(var r=0,s=e.depths.list.length;r<s;r++)i=e.depths.list[r],!(i<2)&&this.addDepth(i-1);return n},block:function(t){var e=t.mustache,n=t.program,i=t.inverse;n&&(n=this.compileProgram(n)),i&&(i=this.compileProgram(i));var r=e.sexpr,s=this.classifySexpr(r);s==="helper"?this.helperSexpr(r,n,i):s==="simple"?(this.simpleSexpr(r),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("blockValue",r.id.original)):(this.ambiguousSexpr(r,n,i),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var e=t.pairs,n,i;for(this.opcode("pushHash"),n=0,i=e.length;n<i;n++)this.pushParam(e[n][1]);for(;n--;)this.opcode("assignToHash",e[n][0]);this.opcode("popHash")},partial:function(t){var e=t.partialName;this.usePartial=!0,t.hash?this.accept(t.hash):this.opcode("push","undefined"),t.context?this.accept(t.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",e.name,t.indent||""),this.opcode("append")},content:function(t){t.string&&this.opcode("appendContent",t.string)},mustache:function(t){this.sexpr(t.sexpr),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(t,e,n){var i=t.id,r=i.parts[0],s=e!=null||n!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.ID(i),this.opcode("invokeAmbiguous",r,s)},simpleSexpr:function(t){var e=t.id;e.type==="DATA"?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,n){var i=this.setupFullMustacheParams(t,e,n),r=t.id,s=r.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",i.length,s);else{if(this.options.knownHelpersOnly)throw new It("You specified knownHelpersOnly, but used the unknown helper "+s,t);r.falsy=!0,this.ID(r),this.opcode("invokeHelper",i.length,r.original,r.isSimple)}},sexpr:function(t){var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0];e?this.opcode("lookupOnContext",t.parts,t.falsy,t.isScoped):this.opcode("pushContext")},DATA:function(t){this.options.data=!0,this.opcode("lookupData",t.id.depth,t.id.parts)},STRING:function(t){this.opcode("pushString",t.string)},NUMBER:function(t){this.opcode("pushLiteral",t.number)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:Nn.call(arguments,1)})},addDepth:function(t){t!==0&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifySexpr:function(t){var e=t.isHelper,n=t.eligibleHelper,i=this.options;if(n&&!e){var r=t.id.parts[0];i.knownHelpers[r]?e=!0:i.knownHelpersOnly&&(n=!1)}return e?"helper":n?"ambiguous":"simple"},pushParams:function(t){for(var e=0,n=t.length;e<n;e++)this.pushParam(t[e])},pushParam:function(t){this.stringParams?(t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",t.stringModeValue,t.type),t.type==="sexpr"&&this.sexpr(t)):(this.trackIds&&this.opcode("pushId",t.type,t.idName||t.stringModeValue),this.accept(t))},setupFullMustacheParams:function(t,e,n){var i=t.params;return this.pushParams(i),this.opcode("pushProgram",e),this.opcode("pushProgram",n),t.hash?this.hash(t.hash):this.opcode("emptyHash"),i}};function _n(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new It("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i=n.parse(t),r=new n.Compiler().compile(i,e);return new n.JavaScriptCompiler().compile(r,e)}nt.precompile=_n;function Pn(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new It("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i;function r(){var o=n.parse(t),a=new n.Compiler().compile(o,e),c=new n.JavaScriptCompiler().compile(a,e,void 0,!0);return n.template(c)}var s=function(o,a){return i||(i=r()),i.call(this,o,a)};return s._setup=function(o){return i||(i=r()),i._setup(o)},s._child=function(o,a,c){return i||(i=r()),i._child(o,a,c)},s}nt.compile=Pn;function we(t,e){if(t===e)return!0;if(xe(t)&&xe(e)&&t.length===e.length){for(var n=0;n<t.length;n++)if(!we(t[n],e[n]))return!1;return!0}}});var Pe=g(_e=>{"use strict";p();var Cn=A().COMPILER_REVISION,On=A().REVISION_CHANGES,At=_().default;function W(t){this.value=t}function L(){}L.prototype={nameLookup:function(t,e){return L.isValidJavaScriptVariableName(e)?t+"."+e:t+"['"+e+"']"},depthedLookup:function(t){return this.aliases.lookup="this.lookup",'lookup(depths, "'+t+'")'},compilerInfo:function(){var t=Cn,e=On[t];return[t,e]},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,e,n,i){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!n,this.context=n||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.depths.list.length||this.options.compat;var r=t.opcodes,s,o,a;for(o=0,a=r.length;o<a;o++)s=r[o],this[s.opcode].apply(this,s.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new At("Compile completed with content left on stack");var c=this.createFunctionContext(i);if(this.isChild)return c;var l={compiler:this.compilerInfo(),main:c},u=this.context.programs;for(o=0,a=u.length;o<a;o++)u[o]&&(l[o]=u[o]);return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.options.compat&&(l.compat=!0),i||(l.compiler=JSON.stringify(l.compiler),l=this.objectLiteral(l)),l},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(t){var e="",n=this.stackVars.concat(this.registers.list);n.length>0&&(e+=", "+n.join(", "));for(var i in this.aliases)this.aliases.hasOwnProperty(i)&&(e+=", "+i+"="+this.aliases[i]);var r=["depth0","helpers","partials","data"];this.useDepths&&r.push("depths");var s=this.mergeSource(e);return t?(r.push(s),Function.apply(this,r)):"function("+r.join(",")+`) {
  `+s+"}"},mergeSource:function(t){for(var e="",n,i=!this.forceBuffer,r,s=0,o=this.source.length;s<o;s++){var a=this.source[s];a.appendToBuffer?n?n=n+`
    + `+a.content:n=a.content:(n&&(e?e+="buffer += "+n+`;
  `:(r=!0,e=n+`;
  `),n=void 0),e+=a+`
  `,this.environment.isSimple||(i=!1))}return i?(n||!e)&&(e+="return "+(n||'""')+`;
`):(t+=", buffer = "+(r?"":this.initializeBuffer()),n?e+="return buffer + "+n+`;
`:e+=`return buffer;
`),t&&(e="var "+t.substring(2)+(r?"":`;
  `)+e),e},blockValue:function(t){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams(t,0,e);var n=this.popStack();e.splice(1,0,n),this.push("blockHelperMissing.call("+e.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams("",0,t,!0),this.flushInline();var e=this.topStack();t.splice(1,0,e),this.pushSource("if (!"+this.lastHelper+") { "+e+" = blockHelperMissing.call("+t.join(", ")+"); }")},appendContent:function(t){this.pendingContent&&(t=this.pendingContent+t),this.pendingContent=t},append:function(){this.flushInline();var t=this.popStack();this.pushSource("if ("+t+" != null) { "+this.appendToBuffer(t)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,n){var i=0,r=t.length;for(!n&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[i++])):this.pushContext();i<r;i++)this.replaceStack(function(s){var o=this.nameLookup(s,t[i],"context");return e?" && "+o:" != null ? "+o+" : "+s})},lookupData:function(t,e){t?this.pushStackLiteral("this.data(data, "+t+")"):this.pushStackLiteral("data");for(var n=e.length,i=0;i<n;i++)this.replaceStack(function(r){return" && "+this.nameLookup(r,e[i],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),e!=="sexpr"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+t.ids.join(",")+"}"),this.stringParams&&(this.push("{"+t.contexts.join(",")+"}"),this.push("{"+t.types.join(",")+"}")),this.push(`{
    `+t.values.join(`,
    `)+`
  }`)},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},invokeHelper:function(t,e,n){this.aliases.helperMissing="helpers.helperMissing";var i=this.popStack(),r=this.setupHelper(t,e),s=(n?r.name+" || ":"")+i+" || helperMissing";this.push("(("+s+").call("+r.callParams+"))")},invokeKnownHelper:function(t,e){var n=this.setupHelper(t,e);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(t,e){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var n=this.popStack();this.emptyHash();var i=this.setupHelper(0,t,e),r=this.lastHelper=this.nameLookup("helpers",t,"helper");this.push("((helper = (helper = "+r+" || "+n+") != null ? helper : helperMissing"+(i.paramsInit?"),("+i.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+i.callParams+") : helper))")},invokePartial:function(t,e){var n=[this.nameLookup("partials",t,"partial"),"'"+e+"'","'"+t+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?n.push("data"):this.options.compat&&n.push("undefined"),this.options.compat&&n.push("depths"),this.push("this.invokePartial("+n.join(", ")+")")},assignToHash:function(t){var e=this.popStack(),n,i,r;this.trackIds&&(r=this.popStack()),this.stringParams&&(i=this.popStack(),n=this.popStack());var s=this.hash;n&&s.contexts.push("'"+t+"': "+n),i&&s.types.push("'"+t+"': "+i),r&&s.ids.push("'"+t+"': "+r),s.values.push("'"+t+"': ("+e+")")},pushId:function(t,e){t==="ID"||t==="DATA"?this.pushString(e):t==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:L,compileChildren:function(t,e){for(var n=t.children,i,r,s=0,o=n.length;s<o;s++){i=n[s],r=new this.compiler;var a=this.matchExistingProgram(i);a==null?(this.context.programs.push(""),a=this.context.programs.length,i.index=a,i.name="program"+a,this.context.programs[a]=r.compile(i,e,this.context,!this.precompile),this.context.environments[a]=i,this.useDepths=this.useDepths||r.useDepths):(i.index=a,i.name="program"+a)}},matchExistingProgram:function(t){for(var e=0,n=this.context.environments.length;e<n;e++){var i=this.context.environments[e];if(i&&i.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],n=e.depths.list,i=this.useDepths,r,s=[e.index,"data"];return i&&s.push("depths"),"this.program("+s.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new W(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var e=this.incrStack();return this.pushSource(e+" = "+t+";"),this.compileStack.push(e),e},replaceStack:function(t){var e="",n=this.isInline(),i,r,s;if(!this.isInline())throw new At("replaceStack on non-inline");var o=this.popStack(!0);if(o instanceof W)e=i=o.value,s=!0;else{r=!this.stackSlot;var a=r?this.incrStack():this.topStackName();e="("+this.push(a)+" = "+o+")",i=this.topStack()}var c=t.call(this,i);s||this.popStack(),r&&this.stackSlot--,this.push("("+e+c+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var e=0,n=t.length;e<n;e++){var i=t[e];i instanceof W?this.compileStack.push(i):this.pushStack(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),n=(e?this.inlineStack:this.compileStack).pop();if(!t&&n instanceof W)return n.value;if(!e){if(!this.stackSlot)throw new At("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof W?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(this.quotedString(n)+":"+t[n]);return"{"+e.join(",")+"}"},setupHelper:function(t,e,n){var i=[],r=this.setupParams(e,t,i,n),s=this.nameLookup("helpers",e,"helper");return{params:i,paramsInit:r,name:s,callParams:[this.contextName(0)].concat(i).join(", ")}},setupOptions:function(t,e,n){var i={},r=[],s=[],o=[],a,c,l;i.name=this.quotedString(t),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack()),c=this.popStack(),l=this.popStack(),(l||c)&&(l||(l="this.noop"),c||(c="this.noop"),i.fn=l,i.inverse=c);for(var u=e;u--;)a=this.popStack(),n[u]=a,this.trackIds&&(o[u]=this.popStack()),this.stringParams&&(s[u]=this.popStack(),r[u]=this.popStack());return this.trackIds&&(i.ids="["+o.join(",")+"]"),this.stringParams&&(i.types="["+s.join(",")+"]",i.contexts="["+r.join(",")+"]"),this.options.data&&(i.data="data"),i},setupParams:function(t,e,n,i){var r=this.objectLiteral(this.setupOptions(t,e,n));return i?(this.useRegister("options"),n.push("options"),"options="+r):(n.push(r),"")}};var Ee="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),In=L.RESERVED_WORDS={};for(rt=0,Ne=Ee.length;rt<Ne;rt++)In[Ee[rt]]=!0;var rt,Ne;L.isValidJavaScriptVariableName=function(t){return!L.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};_e.default=L});var Ie=g(Oe=>{"use strict";p();var B=de().default,An=wt().default,Hn=Ct().parser,Rn=Ct().parse,Ln=it().Compiler,Dn=it().compile,Tn=it().precompile,Mn=Pe().default,qn=B.create,Ce=function(){var t=qn();return t.compile=function(e,n){return Dn(e,n,t)},t.precompile=function(e,n){return Tn(e,n,t)},t.AST=An,t.Compiler=Ln,t.JavaScriptCompiler=Mn,t.Parser=Hn,t.parse=Rn,t};B=Ce();B.create=Ce;B.default=B;Oe.default=B});var Rt=g(Ae=>{"use strict";p();function Ht(){}Ht.prototype={constructor:Ht,accept:function(t){return this[t.type](t)}};Ae.default=Ht});var He=g(Lt=>{"use strict";p();var Vn=Rt().default;function Bn(t){return new d().accept(t)}Lt.print=Bn;function d(){this.padding=0}Lt.PrintVisitor=d;d.prototype=new Vn;d.prototype.pad=function(t){for(var e="",n=0,i=this.padding;n<i;n++)e=e+"  ";return e=e+t+`
`,e};d.prototype.program=function(t){var e="",n=t.statements,i,r;for(i=0,r=n.length;i<r;i++)e=e+this.accept(n[i]);return this.padding--,e};d.prototype.block=function(t){var e="";return e=e+this.pad("BLOCK:"),this.padding++,e=e+this.accept(t.mustache),t.program&&(e=e+this.pad("PROGRAM:"),this.padding++,e=e+this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e=e+this.pad("{{^}}"),this.padding++,e=e+this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e};d.prototype.sexpr=function(t){for(var e=t.params,n=[],i,r=0,s=e.length;r<s;r++)n.push(this.accept(e[r]));return e="["+n.join(", ")+"]",i=t.hash?" "+this.accept(t.hash):"",this.accept(t.id)+" "+e+i};d.prototype.mustache=function(t){return this.pad("{{ "+this.accept(t.sexpr)+" }}")};d.prototype.partial=function(t){var e=this.accept(t.partialName);return t.context&&(e+=" "+this.accept(t.context)),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")};d.prototype.hash=function(t){for(var e=t.pairs,n=[],i,r,s=0,o=e.length;s<o;s++)i=e[s][0],r=this.accept(e[s][1]),n.push(i+"="+r);return"HASH{"+n.join(", ")+"}"};d.prototype.STRING=function(t){return'"'+t.string+'"'};d.prototype.NUMBER=function(t){return"NUMBER{"+t.number+"}"};d.prototype.BOOLEAN=function(t){return"BOOLEAN{"+t.bool+"}"};d.prototype.ID=function(t){var e=t.parts.join("/");return t.parts.length>1?"PATH:"+e:"ID:"+e};d.prototype.PARTIAL_NAME=function(t){return"PARTIAL:"+t.name};d.prototype.DATA=function(t){return"@"+this.accept(t.id)};d.prototype.content=function(t){return this.pad("CONTENT[ '"+t.string+"' ]")};d.prototype.comment=function(t){return this.pad("{{! '"+t.comment+"' }}")}});var De=g((wi,Le)=>{p();var U=Ie().default;U.Visitor=Rt().default;var Re=He();U.PrintVisitor=Re.PrintVisitor;U.print=Re.print;Le.exports=U;typeof F<"u"&&F.extensions&&(Dt=function(t,e){var n=(dt(),Ft(ft)),i=n.readFileSync(e,"utf8");t.exports=U.compile(i)},F.extensions[".handlebars"]=Dt,F.extensions[".hbs"]=Dt);var Dt});var Me=g((_i,Te)=>{p();var Tt=(dt(),Ft(ft)),st=De();function Fn(t){var e=Tt.readFileSync("//css/style.css","utf-8"),n=Tt.readFileSync("//resume.template","utf-8"),i=Tt.readFileSync("//css/print.css","utf-8");return st.registerHelper("foreach",function(r,s){return s.inverse&&!r.length?s.inverse(this):r.map(function(o,a){return o.$index=a,o.$first=a===0,o.$notfirst=a!==0,o.$last=a===r.length-1,s.fn(o)}).join("")}),st.registerHelper("ifCond",function(r,s,o,a){switch(s){case"==":return r==o?a.fn(this):a.inverse(this);case"===":return r===o?a.fn(this):a.inverse(this);case"<":return r<o?a.fn(this):a.inverse(this);case"<=":return r<=o?a.fn(this):a.inverse(this);case">":return r>o?a.fn(this):a.inverse(this);case">=":return r>=o?a.fn(this):a.inverse(this);case"&&":return r&&o?a.fn(this):a.inverse(this);case"||":return r||o?a.fn(this):a.inverse(this);default:return a.inverse(this)}}),st.registerHelper("commalist",function(r,s){return s.fn(r.join(", "))}),st.compile(n)({css:e,print:i,resume:t})}Te.exports={render:Fn}});p();var D=Ge(Me(),1),qe=D.default??D,Ci=qe.render??D.render,Oi=qe.pdfRenderOptions??D.pdfRenderOptions;export{Oi as pdfRenderOptions,Ci as render};
