var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var qe=Object.create;var Y=Object.defineProperty;var Ve=Object.getOwnPropertyDescriptor;var je=Object.getOwnPropertyNames;var Fe=Object.getPrototypeOf,ze=Object.prototype.hasOwnProperty;var F=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var Mt=(t,e)=>()=>(t&&(e=t(t=0)),e);var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ue=(t,e)=>{for(var r in e)Y(t,r,{get:e[r],enumerable:!0})},Bt=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of je(e))!ze.call(t,n)&&n!==r&&Y(t,n,{get:()=>e[n],enumerable:!(i=Ve(e,n))||i.enumerable});return t};var We=(t,e,r)=>(r=t!=null?qe(Fe(t)):{},Bt(e||!t||!t.__esModule?Y(r,"default",{value:t,enumerable:!0}):r,t)),qt=t=>Bt(Y({},"__esModule",{value:!0}),t);var p=Mt(()=>{});var ct={};Ue(ct,{createReadStream:()=>Yt,createWriteStream:()=>Xt,default:()=>Ge,existsSync:()=>zt,lstatSync:()=>Gt,mkdirSync:()=>Wt,readFileSync:()=>jt,readdirSync:()=>Ft,rmdirSync:()=>Jt,statSync:()=>pt,unlinkSync:()=>Kt,writeFileSync:()=>Ut});function ut(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Vt(t){var e=ut(t);if(X[e]!==void 0)return X[e];for(var r=Object.keys(X),i=0;i<r.length;i++)if(e.endsWith("/"+r[i])||e===r[i])return X[r[i]]}function lt(t){var e=ut(t);if((e===""||e===".")&&B["."]!==void 0)return B["."];if(B[e]!==void 0)return B[e];for(var r=Object.keys(B),i=0;i<r.length;i++)if(e.endsWith("/"+r[i])||e===r[i])return B[r[i]]}var X,B,jt,Ft,zt,Ut,Wt,pt,Gt,Kt,Jt,Yt,Xt,Ge,ft=Mt(()=>{"use strict";p();X={"index.html":`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\r
<html>\r
<head>\r
	<title>Richard Hendriks | Programmer | http://richardhendricks.com</title>\r
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />\r
\r
	<meta name="keywords" content="" />\r
	<meta name="description" content="" />\r
\r
	<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" />\r
	<style>\r
	/*\r
---------------------------------------------------------------------------------\r
	STRIPPED DOWN RESUME TEMPLATE\r
    html resume\r
\r
    v0.9: 5/28/09\r
\r
    design and code by: thingsthatarebrown.com\r
                        (matt brown)\r
---------------------------------------------------------------------------------\r
*/\r
\r
\r
.msg { padding: 10px; background: #222; position: relative; }\r
.msg h1 { color: #fff;  }\r
.msg a { margin-left: 20px; background: #408814; color: white; padding: 4px 8px; text-decoration: none; }\r
.msg a:hover { background: #266400; }\r
\r
/* //-- yui-grids style overrides -- */\r
body { font-family: Georgia; color: #444; }\r
#inner { padding: 10px 80px; margin: 80px auto; background: #f5f5f5; border: solid #666; border-width: 8px 0 2px 0; }\r
.yui-gf { margin-bottom: 1em; padding-bottom: 1em; border-bottom: 1px solid #ccc; }\r
\r
/* //-- header, body, footer -- */\r
#hd { margin: 2.5em 0 3em 0; padding-bottom: 1.5em; border-bottom: 1px solid #ccc }\r
#hd h2 { text-transform: uppercase; letter-spacing: 2px; }\r
#bd, #ft { margin-bottom: 2em; }\r
\r
/* //-- footer -- */\r
#ft { padding: 1em 0 5em 0; font-size: 92%; border-top: 1px solid #ccc; text-align: center; }\r
#ft p { margin-bottom: 0; text-align: center;   }\r
\r
/* //-- core typography and style -- */\r
#hd h1 { font-size: 48px; text-transform: uppercase; letter-spacing: 3px; }\r
h2 { font-size: 152% }\r
h3, h4 { font-size: 122%; }\r
h1, h2, h3, h4 { color: #333; }\r
p { font-size: 100%; line-height: 18px; padding-right: 3em; }\r
a { color: #990003 }\r
a:hover { text-decoration: none; }\r
strong { font-weight: bold; }\r
li { line-height: 24px; border-bottom: 1px solid #ccc; }\r
p.enlarge { font-size: 144%; padding-right: 6.5em; line-height: 24px; }\r
p.enlarge span { color: #000 }\r
.contact-info { margin-top: 7px; }\r
.first h2 { font-style: italic; }\r
.last { border-bottom: 0 }\r
\r
\r
/* //-- section styles -- */\r
\r
a#pdf { display: block; float: left; background: #666; color: white; padding: 6px 50px 6px 12px; margin-bottom: 6px; text-decoration: none;  }\r
a#pdf:hover { background: #222; }\r
\r
.job { position: relative; margin-bottom: 1em; padding-bottom: 1em; border-bottom: 1px solid #ccc; }\r
.job h4 { position: absolute; top: 0.35em; right: 0 }\r
.job p { margin: 0.75em 0 3em 0; }\r
\r
.last { border: none; }\r
.skills-list {  }\r
.skills-list ul { margin: 0; }\r
.skills-list li { margin: 3px 0; padding: 3px 0; }\r
.skills-list li span { font-size: 152%; display: block; margin-bottom: -2px; padding: 0 }\r
.talent { width: 32%; float: left }\r
.talent h2 { margin-bottom: 6px; }\r
\r
#srt-ttab { margin-bottom: 100px; text-align: center;  }\r
#srt-ttab img.last { margin-top: 20px }\r
\r
/* --// override to force 1/8th width grids -- */\r
.yui-gf .yui-u{width:80.2%;}\r
.yui-gf div.first{width:12.3%;}\r
\r
	</style>\r
</head>\r
<body>\r
\r
<div id="doc2" class="yui-t7">\r
	<div id="inner">\r
		<div id="hd">\r
			<div class="yui-gc">\r
				<div class="yui-u first">\r
					<h1>Richard Hendriks</h1>\r
					<h2>Programmer</h2>\r
				</div>\r
\r
				<div class="yui-u">\r
					<div class="contact-info">\r
						<!-- <h3><a id="pdf" href="#">Download as PDF</a></h3> -->\r
						<h3>2712 Broadway St, CA 94115 San Francisco</h3>\r
						<h3>(912) 555-4321</h3>\r
						<h3><a href="mailto:richard.hendriks@mail.com">richard.hendriks@mail.com</a></h3>\r
						<h3><a href=""></a></h3>\r
						<h3><a href="https://soundcloud.com/dandymusicnl">https://soundcloud.com/dandymusicnl</a></h3>\r
					</div><!--// .contact-info -->\r
				</div>\r
			</div><!--// .yui-gc -->\r
		</div><!--// hd -->\r
\r
		<div id="bd">\r
			<div id="yui-main">\r
				<div class="yui-b">\r
\r
					<!-- <div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Profile</h2>\r
						</div>\r
						<div class="yui-u">\r
							<p class="enlarge">\r
								Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a \u201Clength-limited\u201D conversation!\r
							</p>\r
						</div>\r
					</div><!--// .yui-gf -->\r
\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Esperienza lavorativa</h2>\r
						</div><!--// .yui-u -->\r
\r
						<div class="yui-u">\r
							<div class="job last">\r
								<h2>Pied Piper</h2>\r
								<h3>CEO/President</h3>\r
								<h4>2013-12-01 -\r
                                                                2014-12-01\r
</h4>\r
								<p>Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores\u2122 that are not merely competitive, but approach the theoretical limit of lossless compression.<br>\r
								&bull; Build an algorithm for artist to detect if their music was violating copy right infringement laws<br>\r
							        								&bull; Successfully won Techcrunch Disrupt<br>\r
							        								&bull; Optimized an algorithm that holds the current world record for Weisman Scores<br>\r
							        </p>\r
							</div>\r
						</div><!--// .yui-u -->\r
					</div><!--// .yui-gf -->\r
\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Educazione</h2>\r
						</div>\r
						<div class="yui-u">\r
							<h2>University of Oklahoma</h2>\r
							<h3>Information Technology, Bachelor\r
                &mdash; <strong>4.0</strong>\r
                </h3>\r
							<p>&bull; DB1101 - Basic SQL</p>\r
							<p>&bull; CS2011 - Java Introduction</p>\r
							<br>\r
						</div>\r
					</div><!--// .yui-gf -->\r
\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Volontariato</h2>\r
						</div><!--// .yui-u -->\r
\r
						<div class="yui-u">\r
							<div class="job last">\r
								<h2>CoderDojo</h2>\r
								<h3>Teacher</h3>\r
								<h4>2012-01-01 -\r
                                                                2013-01-01\r
</h4>\r
								<p>Global movement of free coding clubs for young people.<br>\r
								&bull; Awarded &#x27;Teacher of the Month&#x27;<br>\r
							        </p>\r
							</div>\r
						</div><!--// .yui-u -->\r
					</div><!--// .yui-gf -->\r
\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Lingue</h2>\r
						</div>\r
						<div class="yui-u">\r
								<div class="talent">\r
									<h2>English</h2>\r
									<p>Native speaker</p>\r
								</div>\r
						</div>\r
					</div><!--// .yui-gf -->\r
\r
					<div class="yui-gf last">\r
						<div class="yui-u first">\r
							<h2>Abilit\xE0 informatiche</h2>\r
						</div>\r
						<div class="yui-u">\r
								<div class="talent">\r
									<h2>Web Development</h2>\r
									<p>HTML</p>\r
									<p>CSS</p>\r
									<p>Javascript</p>\r
								</div>\r
								<div class="talent">\r
									<h2>Compression</h2>\r
									<p>Mpeg</p>\r
									<p>MP4</p>\r
									<p>GIF</p>\r
								</div>\r
						</div>\r
					</div><!--// .yui-gf -->\r
\r
				</div><!--// .yui-b -->\r
			</div><!--// yui-main -->\r
		</div><!--// bd -->\r
\r
		<div id="ft">\r
			<p>Richard Hendriks &mdash; <a href="mailto:richard.hendriks@mail.com">richard.hendriks@mail.com</a> &mdash; (912) 555-4321</p>\r
		</br>\r
			<p>Autorizzo il trattamento dei miei dati personali ai sensi del Decreto Legislativo </br> 30 giugno 2003, n. 196 "Codice in materia di protezione dei dati personali\u201D.</p>\r
		</div><!--// footer -->\r
	</div><!-- // inner -->\r
</div><!--// doc -->\r
</body>\r
</html>\r
`,"package.json":`{
  "name": "jsonresume-theme-srt-it",
  "version": "0.0.3",
  "description": "Italian version of SRT theme for JSON Resume",
  "author": "Dario Prandi",
  "repository": {
    "type": "git",
    "url": "https://github.com/dprn/jsonresume-theme-srt-it"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  }
}
`,"resume.template":`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\r
<html>\r
<head>\r
	<title>{{resume.basics.name}} | {{resume.basics.label}} | {{resume.basics.website}}</title>\r
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />\r
\r
	<meta name="keywords" content="" />\r
	<meta name="description" content="" />\r
\r
	<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" />\r
	<style>\r
	{{css}}\r
	</style>\r
</head>\r
<body>\r
\r
<div id="doc2" class="yui-t7">\r
	<div id="inner">\r
		<div id="hd">\r
			<div class="yui-gc">\r
				<div class="yui-u first">\r
					<h1>{{resume.basics.name}}</h1>\r
					<h2>{{resume.basics.label}}</h2>\r
				</div>\r
\r
				<div class="yui-u">\r
					<div class="contact-info">\r
						<!-- <h3><a id="pdf" href="#">Download as PDF</a></h3> -->\r
						<h3>{{resume.basics.location.address}}, {{resume.basics.location.postalCode}} {{resume.basics.location.city}}</h3>\r
						<h3>{{resume.basics.phone}}</h3>\r
						<h3><a href="mailto:{{resume.basics.email}}">{{resume.basics.email}}</a></h3>\r
						{{#if resume.basics.profiles.length}}\r
						{{#each resume.basics.profiles}}\r
						<h3><a href="{{url}}">{{url}}</a></h3>\r
						{{/each}}\r
						{{/if}}\r
					</div><!--// .contact-info -->\r
				</div>\r
			</div><!--// .yui-gc -->\r
		</div><!--// hd -->\r
\r
		<div id="bd">\r
			<div id="yui-main">\r
				<div class="yui-b">\r
\r
					<!-- <div class="yui-gf">\r
						{{#if resume.basics.summary}}\r
						<div class="yui-u first">\r
							<h2>Profile</h2>\r
						</div>\r
						<div class="yui-u">\r
							<p class="enlarge">\r
								{{resume.basics.summary}}\r
							</p>\r
						{{/if}}\r
						</div>\r
					</div><!--// .yui-gf -->\r
\r
					{{#if resume.work.length}}\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Esperienza lavorativa</h2>\r
						</div><!--// .yui-u -->\r
\r
						<div class="yui-u">\r
							{{#each resume.work}}\r
							{{#if @last}}\r
							<div class="job last">\r
							{{else}}\r
							<div class="job">\r
							{{/if}}\r
								<h2>{{company}}</h2>\r
								<h3>{{position}}</h3>\r
								<h4>{{startDate}} -\r
								{{#if endDate}}\r
                                                                {{endDate}}\r
								{{^}}\r
								Presente\r
								{{/if}}</h4>\r
								<p>{{summary}}<br>\r
							        {{#each highlights}}\r
								&bull; {{.}}<br>\r
							        {{/each}}</p>\r
							</div>\r
							{{/each}}\r
						</div><!--// .yui-u -->\r
					</div><!--// .yui-gf -->\r
					{{/if}}\r
\r
					{{#if resume.education}}\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Educazione</h2>\r
						</div>\r
						{{#each resume.education}}\r
						<div class="yui-u">\r
							<h2>{{institution}}</h2>\r
							<h3>{{area}}, {{studyType}}\r
                {{#if gpa}}\r
                &mdash; <strong>{{gpa}}</strong>\r
                {{/if}}\r
                </h3>\r
							{{#each courses}}\r
							<p>&bull; {{.}}</p>\r
							{{/each}}\r
							<br>\r
						</div>\r
						{{/each}}\r
					</div><!--// .yui-gf -->\r
					{{/if}}\r
\r
					<div class="yui-gf">\r
						{{#if resume.languages.length}}\r
						<div class="yui-u first">\r
							<h2>Lingue</h2>\r
						</div>\r
						<div class="yui-u">\r
									{{#each resume.languages}}\r
								<div class="talent">\r
												{{#language}}\r
									<h2>{{.}}</h2>\r
												{{/language}}\r
															{{#fluency}}\r
									<p>{{.}}</p>\r
															{{/fluency}}\r
								</div>\r
									{{/each}}\r
						</div>\r
						{{/if}}\r
					</div><!--// .yui-gf -->\r
\r
					{{#if resume.volunteer.length}}\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Volontariato</h2>\r
						</div><!--// .yui-u -->\r
\r
						<div class="yui-u">\r
							{{#each resume.volunteer}}\r
							{{#if @last}}\r
							<div class="job last">\r
							{{else}}\r
							<div class="job">\r
							{{/if}}\r
								<h2>{{organization}}</h2>\r
								<h3>{{position}}</h3>\r
								<h4>{{startDate}} -\r
								{{#if endDate}}\r
                                                                {{endDate}}\r
								{{^}}\r
								Present\r
								{{/if}}</h4>\r
								<p>{{summary}}<br>\r
							        {{#each highlights}}\r
								&bull; {{.}}<br>\r
							        {{/each}}</p>\r
							</div>\r
							{{/each}}\r
						</div><!--// .yui-u -->\r
					</div><!--// .yui-gf -->\r
					{{/if}}\r
\r
					<div class="yui-gf last">\r
						{{#if resume.skills.length}}\r
						<div class="yui-u first">\r
							<h2>Abilit\xE0 informatiche</h2>\r
						</div>\r
						<div class="yui-u">\r
									{{#each resume.skills}}\r
								<div class="talent">\r
												{{#name}}\r
									<h2>{{.}}</h2>\r
												{{/name}}\r
															{{#if keywords.length}}\r
															{{#keywords}}\r
									<p>{{.}}</p>\r
															{{/keywords}}\r
																		{{/if}}\r
								</div>\r
									{{/each}}\r
						</div>\r
						{{/if}}\r
					</div><!--// .yui-gf -->\r
\r
				</div><!--// .yui-b -->\r
			</div><!--// yui-main -->\r
		</div><!--// bd -->\r
\r
		<div id="ft">\r
			<p>{{resume.basics.name}} &mdash; <a href="mailto:{{resume.basics.email}}">{{resume.basics.email}}</a> &mdash; {{resume.basics.phone}}</p>\r
		</br>\r
			<p>Autorizzo il trattamento dei miei dati personali ai sensi del Decreto Legislativo </br> 30 giugno 2003, n. 196 "Codice in materia di protezione dei dati personali\u201D.</p>\r
		</div><!--// footer -->\r
	</div><!-- // inner -->\r
</div><!--// doc -->\r
</body>\r
</html>\r
`,"style.css":`/*\r
---------------------------------------------------------------------------------\r
	STRIPPED DOWN RESUME TEMPLATE\r
    html resume\r
\r
    v0.9: 5/28/09\r
\r
    design and code by: thingsthatarebrown.com\r
                        (matt brown)\r
---------------------------------------------------------------------------------\r
*/\r
\r
\r
.msg { padding: 10px; background: #222; position: relative; }\r
.msg h1 { color: #fff;  }\r
.msg a { margin-left: 20px; background: #408814; color: white; padding: 4px 8px; text-decoration: none; }\r
.msg a:hover { background: #266400; }\r
\r
/* //-- yui-grids style overrides -- */\r
body { font-family: Georgia; color: #444; }\r
#inner { padding: 10px 80px; margin: 80px auto; background: #f5f5f5; border: solid #666; border-width: 8px 0 2px 0; }\r
.yui-gf { margin-bottom: 1em; padding-bottom: 1em; border-bottom: 1px solid #ccc; }\r
\r
/* //-- header, body, footer -- */\r
#hd { margin: 2.5em 0 3em 0; padding-bottom: 1.5em; border-bottom: 1px solid #ccc }\r
#hd h2 { text-transform: uppercase; letter-spacing: 2px; }\r
#bd, #ft { margin-bottom: 2em; }\r
\r
/* //-- footer -- */\r
#ft { padding: 1em 0 5em 0; font-size: 92%; border-top: 1px solid #ccc; text-align: center; }\r
#ft p { margin-bottom: 0; text-align: center;   }\r
\r
/* //-- core typography and style -- */\r
#hd h1 { font-size: 48px; text-transform: uppercase; letter-spacing: 3px; }\r
h2 { font-size: 152% }\r
h3, h4 { font-size: 122%; }\r
h1, h2, h3, h4 { color: #333; }\r
p { font-size: 100%; line-height: 18px; padding-right: 3em; }\r
a { color: #990003 }\r
a:hover { text-decoration: none; }\r
strong { font-weight: bold; }\r
li { line-height: 24px; border-bottom: 1px solid #ccc; }\r
p.enlarge { font-size: 144%; padding-right: 6.5em; line-height: 24px; }\r
p.enlarge span { color: #000 }\r
.contact-info { margin-top: 7px; }\r
.first h2 { font-style: italic; }\r
.last { border-bottom: 0 }\r
\r
\r
/* //-- section styles -- */\r
\r
a#pdf { display: block; float: left; background: #666; color: white; padding: 6px 50px 6px 12px; margin-bottom: 6px; text-decoration: none;  }\r
a#pdf:hover { background: #222; }\r
\r
.job { position: relative; margin-bottom: 1em; padding-bottom: 1em; border-bottom: 1px solid #ccc; }\r
.job h4 { position: absolute; top: 0.35em; right: 0 }\r
.job p { margin: 0.75em 0 3em 0; }\r
\r
.last { border: none; }\r
.skills-list {  }\r
.skills-list ul { margin: 0; }\r
.skills-list li { margin: 3px 0; padding: 3px 0; }\r
.skills-list li span { font-size: 152%; display: block; margin-bottom: -2px; padding: 0 }\r
.talent { width: 32%; float: left }\r
.talent h2 { margin-bottom: 6px; }\r
\r
#srt-ttab { margin-bottom: 100px; text-align: center;  }\r
#srt-ttab img.last { margin-top: 20px }\r
\r
/* --// override to force 1/8th width grids -- */\r
.yui-gf .yui-u{width:80.2%;}\r
.yui-gf div.first{width:12.3%;}\r
`},B={".":["LICENSE","README.md","index.html","index.js","package.json","resume.template","style.css"]};jt=function(t,e){var r=Vt(t);return r!==void 0?r:""},Ft=function(t,e){var r=lt(t);return r===void 0&&(r=[]),e&&e.withFileTypes?r.map(function(i){var n=ut(t)+"/"+i,s=lt(n)!==void 0;return{name:i,isFile:function(){return!s},isDirectory:function(){return s}}}):r},zt=function(t){return Vt(t)!==void 0||lt(t)!==void 0},Ut=function(){},Wt=function(){},pt=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Gt=pt,Kt=function(){},Jt=function(){},Yt=function(){return{pipe:function(t){return t},on:function(){return this}}},Xt=function(){return{write:function(){},end:function(){},on:function(){return this}}},Ge={readFileSync:jt,readdirSync:Ft,existsSync:zt,writeFileSync:Ut,mkdirSync:Wt,statSync:pt,lstatSync:Gt,unlinkSync:Kt,rmdirSync:Jt,createReadStream:Yt,createWriteStream:Xt}});var dt=m(Zt=>{"use strict";p();function Qt(t){this.string=t}Qt.prototype.toString=function(){return""+this.string};Zt.default=Qt});var q=m(P=>{"use strict";p();var Ke=dt().default,Je={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Ye=/[&<>"'`]/g,Xe=/[&<>"'`]/;function Qe(t){return Je[t]}function Ze(t){for(var e=1;e<arguments.length;e++)for(var r in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],r)&&(t[r]=arguments[e][r]);return t}P.extend=Ze;var mt=Object.prototype.toString;P.toString=mt;var Q=function(t){return typeof t=="function"};Q(/x/)&&(Q=function(t){return typeof t=="function"&&mt.call(t)==="[object Function]"});var Q;P.isFunction=Q;var $t=Array.isArray||function(t){return t&&typeof t=="object"?mt.call(t)==="[object Array]":!1};P.isArray=$t;function $e(t){return t instanceof Ke?t.toString():t==null?"":t?(t=""+t,Xe.test(t)?t.replace(Ye,Qe):t):t+""}P.escapeExpression=$e;function tr(t){return!t&&t!==0?!0:!!($t(t)&&t.length===0)}P.isEmpty=tr;function er(t,e){return(t?t+".":"")+e}P.appendContextPath=er});var N=m(ee=>{"use strict";p();var gt=["description","fileName","lineNumber","message","name","number","stack"];function te(t,e){var r;e&&e.firstLine&&(r=e.firstLine,t+=" - "+r+":"+e.firstColumn);for(var i=Error.prototype.constructor.call(this,t),n=0;n<gt.length;n++)this[gt[n]]=i[gt[n]];r&&(this.lineNumber=r,this.column=e.firstColumn)}te.prototype=new Error;ee.default=te});var A=m(_=>{"use strict";p();var b=q(),yt=N().default,rr="2.0.0";_.VERSION=rr;var ir=6;_.COMPILER_REVISION=ir;var nr={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};_.REVISION_CHANGES=nr;var re=b.isArray,vt=b.isFunction,ie=b.toString,ne="[object Object]";function bt(t,e){this.helpers=t||{},this.partials=e||{},sr(this)}_.HandlebarsEnvironment=bt;bt.prototype={constructor:bt,logger:z,log:se,registerHelper:function(t,e){if(ie.call(t)===ne){if(e)throw new yt("Arg not supported with multiple helpers");b.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){ie.call(t)===ne?b.extend(this.partials,t):this.partials[t]=e},unregisterPartial:function(t){delete this.partials[t]}};function sr(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new yt("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(e,r){var i=r.inverse,n=r.fn;if(e===!0)return n(this);if(e===!1||e==null)return i(this);if(re(e))return e.length>0?(r.ids&&(r.ids=[r.name]),t.helpers.each(e,r)):i(this);if(r.data&&r.ids){var s=Z(r.data);s.contextPath=b.appendContextPath(r.data.contextPath,r.name),r={data:s}}return n(e,r)}),t.registerHelper("each",function(e,r){if(!r)throw new yt("Must pass iterator to #each");var i=r.fn,n=r.inverse,s=0,a="",o,u;if(r.data&&r.ids&&(u=b.appendContextPath(r.data.contextPath,r.ids[0])+"."),vt(e)&&(e=e.call(this)),r.data&&(o=Z(r.data)),e&&typeof e=="object")if(re(e))for(var h=e.length;s<h;s++)o&&(o.index=s,o.first=s===0,o.last=s===e.length-1,u&&(o.contextPath=u+s)),a=a+i(e[s],{data:o});else for(var c in e)e.hasOwnProperty(c)&&(o&&(o.key=c,o.index=s,o.first=s===0,u&&(o.contextPath=u+c)),a=a+i(e[c],{data:o}),s++);return s===0&&(a=n(this)),a}),t.registerHelper("if",function(e,r){return vt(e)&&(e=e.call(this)),!r.hash.includeZero&&!e||b.isEmpty(e)?r.inverse(this):r.fn(this)}),t.registerHelper("unless",function(e,r){return t.helpers.if.call(this,e,{fn:r.inverse,inverse:r.fn,hash:r.hash})}),t.registerHelper("with",function(e,r){vt(e)&&(e=e.call(this));var i=r.fn;if(b.isEmpty(e))return r.inverse(this);if(r.data&&r.ids){var n=Z(r.data);n.contextPath=b.appendContextPath(r.data.contextPath,r.ids[0]),r={data:n}}return i(e,r)}),t.registerHelper("log",function(e,r){var i=r.data&&r.data.level!=null?parseInt(r.data.level,10):1;t.log(i,e)}),t.registerHelper("lookup",function(e,r){return e&&e[r]})}var z={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(z.level<=t){var r=z.methodMap[t];typeof console<"u"&&console[r]&&console[r].call(console,e)}}};_.logger=z;var se=z.log;_.log=se;var Z=function(t){var e=b.extend({},t);return e._parent=t,e};_.createFrame=Z});var oe=m(V=>{"use strict";p();var kt=q(),H=N().default,ar=A().COMPILER_REVISION,ae=A().REVISION_CHANGES,or=A().createFrame;function hr(t){var e=t&&t[0]||1,r=ar;if(e!==r)if(e<r){var i=ae[r],n=ae[e];throw new H("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+n+").")}else throw new H("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}V.checkRevision=hr;function lr(t,e){if(!e)throw new H("No environment passed to template");if(!t||!t.main)throw new H("Unknown template object: "+typeof t);e.VM.checkRevision(t.compiler);var r=function(s,a,o,u,h,c,l,w,T){h&&(u=kt.extend({},u,h));var O=e.VM.invokePartial.call(this,s,o,u,c,l,w,T);if(O==null&&e.compile){var Lt={helpers:c,partials:l,data:w,depths:T};l[o]=e.compile(s,{data:w!==void 0,compat:t.compat},e),O=l[o](u,Lt)}if(O!=null){if(a){for(var S=O.split(`
`),E=0,st=S.length;E<st&&!(!S[E]&&E+1===st);E++)S[E]=a+S[E];O=S.join(`
`)}return O}else throw new H("The partial "+o+" could not be compiled when running in runtime-only mode")},i={lookup:function(s,a){for(var o=s.length,u=0;u<o;u++)if(s[u]&&s[u][a]!=null)return s[u][a]},lambda:function(s,a){return typeof s=="function"?s.call(a):s},escapeExpression:kt.escapeExpression,invokePartial:r,fn:function(s){return t[s]},programs:[],program:function(s,a,o){var u=this.programs[s],h=this.fn(s);return a||o?u=$(this,s,h,a,o):u||(u=this.programs[s]=$(this,s,h)),u},data:function(s,a){for(;s&&a--;)s=s._parent;return s},merge:function(s,a){var o=s||a;return s&&a&&s!==a&&(o=kt.extend({},a,s)),o},noop:e.VM.noop,compilerInfo:t.compiler},n=function(s,a){a=a||{};var o=a.data;n._setup(a),!a.partial&&t.useData&&(o=cr(s,o));var u;return t.useDepths&&(u=a.depths?[s].concat(a.depths):[s]),t.main.call(i,s,i.helpers,i.partials,o,u)};return n.isTop=!0,n._setup=function(s){s.partial?(i.helpers=s.helpers,i.partials=s.partials):(i.helpers=i.merge(s.helpers,e.helpers),t.usePartial&&(i.partials=i.merge(s.partials,e.partials)))},n._child=function(s,a,o){if(t.useDepths&&!o)throw new H("must pass parent depths");return $(i,s,t[s],a,o)},n}V.template=lr;function $(t,e,r,i,n){var s=function(a,o){return o=o||{},r.call(t,a,t.helpers,t.partials,o.data||i,n&&[a].concat(n))};return s.program=e,s.depth=n?n.length:0,s}V.program=$;function ur(t,e,r,i,n,s,a){var o={partial:!0,helpers:i,partials:n,data:s,depths:a};if(t===void 0)throw new H("The partial "+e+" could not be found");if(t instanceof Function)return t(r,o)}V.invokePartial=ur;function pr(){return""}V.noop=pr;function cr(t,e){return(!e||!("root"in e))&&(e=e?or(e):{},e.root=t),e}});var ce=m(pe=>{"use strict";p();var he=A(),fr=dt().default,dr=N().default,St=q(),le=oe(),ue=function(){var t=new he.HandlebarsEnvironment;return St.extend(t,he),t.SafeString=fr,t.Exception=dr,t.Utils=St,t.escapeExpression=St.escapeExpression,t.VM=le,t.template=function(e){return le.template(e,t)},t},tt=ue();tt.create=ue;tt.default=tt;pe.default=tt});var xt=m(de=>{"use strict";p();var fe=N().default;function v(t){t=t||{},this.firstLine=t.first_line,this.firstColumn=t.first_column,this.lastColumn=t.last_column,this.lastLine=t.last_line}var U={ProgramNode:function(t,e,r){v.call(this,r),this.type="program",this.statements=t,this.strip=e},MustacheNode:function(t,e,r,i,n){if(v.call(this,n),this.type="mustache",this.strip=i,r!=null&&r.charAt){var s=r.charAt(3)||r.charAt(2);this.escaped=s!=="{"&&s!=="&"}else this.escaped=!!r;t instanceof U.SexprNode?this.sexpr=t:this.sexpr=new U.SexprNode(t,e),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(t,e,r){v.call(this,r),this.type="sexpr",this.hash=e;var i=this.id=t[0],n=this.params=t.slice(1);this.isHelper=!!(n.length||e),this.eligibleHelper=this.isHelper||i.isSimple},PartialNode:function(t,e,r,i,n){v.call(this,n),this.type="partial",this.partialName=t,this.context=e,this.hash=r,this.strip=i,this.strip.inlineStandalone=!0},BlockNode:function(t,e,r,i,n){v.call(this,n),this.type="block",this.mustache=t,this.program=e,this.inverse=r,this.strip=i,r&&!e&&(this.isInverse=!0)},RawBlockNode:function(t,e,r,i){if(v.call(this,i),t.sexpr.id.original!==r)throw new fe(t.sexpr.id.original+" doesn't match "+r,this);e=new U.ContentNode(e,i),this.type="block",this.mustache=t,this.program=new U.ProgramNode([e],{},i)},ContentNode:function(t,e){v.call(this,e),this.type="content",this.original=this.string=t},HashNode:function(t,e){v.call(this,e),this.type="hash",this.pairs=t},IdNode:function(t,e){v.call(this,e),this.type="ID";for(var r="",i=[],n=0,s="",a=0,o=t.length;a<o;a++){var u=t[a].part;if(r+=(t[a].separator||"")+u,u===".."||u==="."||u==="this"){if(i.length>0)throw new fe("Invalid path: "+r,this);u===".."?(n++,s+="../"):this.isScoped=!0}else i.push(u)}this.original=r,this.parts=i,this.string=i.join("."),this.depth=n,this.idName=s+this.string,this.isSimple=t.length===1&&!this.isScoped&&n===0,this.stringModeValue=this.string},PartialNameNode:function(t,e){v.call(this,e),this.type="PARTIAL_NAME",this.name=t.original},DataNode:function(t,e){v.call(this,e),this.type="DATA",this.id=t,this.stringModeValue=t.stringModeValue,this.idName="@"+t.stringModeValue},StringNode:function(t,e){v.call(this,e),this.type="STRING",this.original=this.string=this.stringModeValue=t},NumberNode:function(t,e){v.call(this,e),this.type="NUMBER",this.original=this.number=t,this.stringModeValue=Number(t)},BooleanNode:function(t,e){v.call(this,e),this.type="BOOLEAN",this.bool=t,this.stringModeValue=t==="true"},CommentNode:function(t,e){v.call(this,e),this.type="comment",this.comment=t,this.strip={inlineStandalone:!0}}};de.default=U});var ge=m(me=>{"use strict";p();var mr=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(n,s,a,o,u,h,c){var l=h.length-1;switch(u){case 1:return o.prepareProgram(h[l-1].statements,!0),h[l-1];break;case 2:this.$=new o.ProgramNode(o.prepareProgram(h[l]),{},this._$);break;case 3:this.$=h[l];break;case 4:this.$=h[l];break;case 5:this.$=h[l];break;case 6:this.$=h[l];break;case 7:this.$=new o.ContentNode(h[l],this._$);break;case 8:this.$=new o.CommentNode(h[l],this._$);break;case 9:this.$=new o.RawBlockNode(h[l-2],h[l-1],h[l],this._$);break;case 10:this.$=new o.MustacheNode(h[l-1],null,"","",this._$);break;case 11:this.$=o.prepareBlock(h[l-3],h[l-2],h[l-1],h[l],!1,this._$);break;case 12:this.$=o.prepareBlock(h[l-3],h[l-2],h[l-1],h[l],!0,this._$);break;case 13:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 14:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 15:this.$={strip:o.stripFlags(h[l-1],h[l-1]),program:h[l]};break;case 16:this.$={path:h[l-1],strip:o.stripFlags(h[l-2],h[l])};break;case 17:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 18:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 19:this.$=new o.PartialNode(h[l-3],h[l-2],h[l-1],o.stripFlags(h[l-4],h[l]),this._$);break;case 20:this.$=new o.PartialNode(h[l-2],void 0,h[l-1],o.stripFlags(h[l-3],h[l]),this._$);break;case 21:this.$=new o.SexprNode([h[l-2]].concat(h[l-1]),h[l],this._$);break;case 22:this.$=new o.SexprNode([h[l]],null,this._$);break;case 23:this.$=h[l];break;case 24:this.$=new o.StringNode(h[l],this._$);break;case 25:this.$=new o.NumberNode(h[l],this._$);break;case 26:this.$=new o.BooleanNode(h[l],this._$);break;case 27:this.$=h[l];break;case 28:h[l-1].isHelper=!0,this.$=h[l-1];break;case 29:this.$=new o.HashNode(h[l],this._$);break;case 30:this.$=[h[l-2],h[l]];break;case 31:this.$=new o.PartialNameNode(h[l],this._$);break;case 32:this.$=new o.PartialNameNode(new o.StringNode(h[l],this._$),this._$);break;case 33:this.$=new o.PartialNameNode(new o.NumberNode(h[l],this._$));break;case 34:this.$=new o.DataNode(h[l],this._$);break;case 35:this.$=new o.IdNode(h[l],this._$);break;case 36:h[l-2].push({part:h[l],separator:h[l-1]}),this.$=h[l-2];break;case 37:this.$=[{part:h[l]}];break;case 38:this.$=[];break;case 39:h[l-1].push(h[l]);break;case 48:this.$=[];break;case 49:h[l-1].push(h[l]);break;case 52:this.$=[h[l]];break;case 53:h[l-1].push(h[l]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(n,s){throw new Error(n)},parse:function(n){var s=this,a=[0],o=[null],u=[],h=this.table,c="",l=0,w=0,T=0,O=2,Lt=1;this.lexer.setInput(n),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var S=this.lexer.yylloc;u.push(S);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function st(k){a.length=a.length-2*k,o.length=o.length-k,u.length=u.length-k}function Be(){var k;return k=s.lexer.lex()||1,typeof k!="number"&&(k=s.symbols_[k]||k),k}for(var g,at,I,y,jr,ot,M={},K,x,Tt,J;;){if(I=a[a.length-1],this.defaultActions[I]?y=this.defaultActions[I]:((g===null||typeof g>"u")&&(g=Be()),y=h[I]&&h[I][g]),typeof y>"u"||!y.length||!y[0]){var ht="";if(!T){J=[];for(K in h[I])this.terminals_[K]&&K>2&&J.push("'"+this.terminals_[K]+"'");this.lexer.showPosition?ht="Parse error on line "+(l+1)+`:
`+this.lexer.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[g]||g)+"'":ht="Parse error on line "+(l+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(ht,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:S,expected:J})}}if(y[0]instanceof Array&&y.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+g);switch(y[0]){case 1:a.push(g),o.push(this.lexer.yytext),u.push(this.lexer.yylloc),a.push(y[1]),g=null,at?(g=at,at=null):(w=this.lexer.yyleng,c=this.lexer.yytext,l=this.lexer.yylineno,S=this.lexer.yylloc,T>0&&T--);break;case 2:if(x=this.productions_[y[1]][1],M.$=o[o.length-x],M._$={first_line:u[u.length-(x||1)].first_line,last_line:u[u.length-1].last_line,first_column:u[u.length-(x||1)].first_column,last_column:u[u.length-1].last_column},E&&(M._$.range=[u[u.length-(x||1)].range[0],u[u.length-1].range[1]]),ot=this.performAction.call(M,c,w,l,this.yy,y[1],o,u),typeof ot<"u")return ot;x&&(a=a.slice(0,-1*x*2),o=o.slice(0,-1*x),u=u.slice(0,-1*x)),a.push(this.productions_[y[1]][0]),o.push(M.$),u.push(M._$),Tt=h[a[a.length-2]][a[a.length-1]],a.push(Tt);break;case 3:return!0}}return!0}},e=(function(){var i={EOF:1,parseError:function(s,a){if(this.yy.parser)this.yy.parser.parseError(s,a);else throw new Error(s)},setInput:function(n){return this._input=n,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var n=this._input[0];this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n;var s=n.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},unput:function(n){var s=n.length,a=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s-1),this.offset-=s;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var u=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===o.length?this.yylloc.first_column:0)+o[o.length-a.length].length-a[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[u[0],u[0]+this.yyleng-s]),this},more:function(){return this._more=!0,this},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput(),s=new Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+s+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var n,s,a,o,u,h;this._more||(this.yytext="",this.match="");for(var c=this._currentRules(),l=0;l<c.length&&(a=this._input.match(this.rules[c[l]]),!(a&&(!s||a[0].length>s[0].length)&&(s=a,o=l,!this.options.flex)));l++);return s?(h=s[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],n=this.performAction.call(this,this.yy,this,c[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return typeof s<"u"?s:this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(s){this.begin(s)}};return i.options={},i.performAction=function(s,a,o,u){function h(l,w){return a.yytext=a.yytext.substr(l,a.yyleng-w)}var c=u;switch(o){case 0:if(a.yytext.slice(-2)==="\\\\"?(h(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(h(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return a.yytext=a.yytext.substr(5,a.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return h(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return h(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return a.yytext=h(1,2).replace(/\\"/g,'"'),42;break;case 30:return a.yytext=h(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return a.yytext=h(1,2),50;break;case 37:return"INVALID";case 38:return 5}},i.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],i.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},i})();t.lexer=e;function r(){this.yy={}}return r.prototype=t,t.Parser=r,new r})();me.default=mr});var ve=m(et=>{"use strict";p();var gr=N().default;function vr(t,e){return{left:t.charAt(2)==="~",right:e.charAt(e.length-3)==="~"}}et.stripFlags=vr;function yr(t,e,r,i,n,s){if(t.sexpr.id.original!==i.path.original)throw new gr(t.sexpr.id.original+" doesn't match "+i.path.original,t);var a=r&&r.program,o={left:t.strip.left,right:i.strip.right,openStandalone:Et(e.statements),closeStandalone:wt((a||e).statements)};if(t.strip.right&&D(e.statements,null,!0),a){var u=r.strip;u.left&&C(e.statements,null,!0),u.right&&D(a.statements,null,!0),i.strip.left&&C(a.statements,null,!0),wt(e.statements)&&Et(a.statements)&&(C(e.statements),D(a.statements))}else i.strip.left&&C(e.statements,null,!0);return n?new this.BlockNode(t,a,e,o,s):new this.BlockNode(t,e,a,o,s)}et.prepareBlock=yr;function br(t,e){for(var r=0,i=t.length;r<i;r++){var n=t[r],s=n.strip;if(s){var a=wt(t,r,e,n.type==="partial"),o=Et(t,r,e),u=s.openStandalone&&a,h=s.closeStandalone&&o,c=s.inlineStandalone&&a&&o;s.right&&D(t,r,!0),s.left&&C(t,r,!0),c&&(D(t,r),C(t,r)&&n.type==="partial"&&(n.indent=/([ \t]+$)/.exec(t[r-1].original)?RegExp.$1:"")),u&&(D((n.program||n.inverse).statements),C(t,r)),h&&(D(t,r),C((n.inverse||n.program).statements))}}return t}et.prepareProgram=br;function wt(t,e,r){e===void 0&&(e=t.length);var i=t[e-1],n=t[e-2];if(!i)return r;if(i.type==="content")return(n||!r?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}function Et(t,e,r){e===void 0&&(e=-1);var i=t[e+1],n=t[e+2];if(!i)return r;if(i.type==="content")return(n||!r?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}function D(t,e,r){var i=t[e==null?0:e+1];if(!(!i||i.type!=="content"||!r&&i.rightStripped)){var n=i.string;i.string=i.string.replace(r?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.string!==n}}function C(t,e,r){var i=t[e==null?t.length-1:e-1];if(!(!i||i.type!=="content"||!r&&i.leftStripped)){var n=i.string;return i.string=i.string.replace(r?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.string!==n,i.leftStripped}}});var _t=m(Nt=>{"use strict";p();var Pt=ge().default,ye=xt().default,kr=ve(),Sr=q().extend;Nt.parser=Pt;var be={};Sr(be,kr,ye);function xr(t){return t.constructor===ye.ProgramNode?t:(Pt.yy=be,Pt.parse(t))}Nt.parse=xr});var it=m(rt=>{"use strict";p();var Ot=N().default,ke=q().isArray,wr=[].slice;function Ct(){}rt.Compiler=Ct;Ct.prototype={compiler:Ct,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var r=0;r<e;r++){var i=this.opcodes[r],n=t.opcodes[r];if(i.opcode!==n.opcode||!Se(i.args,n.args))return!1}for(e=this.children.length,r=0;r<e;r++)if(!this.children[r].equals(t.children[r]))return!1;return!0},guid:0,compile:function(t,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds;var r=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},r)for(var i in r)this.options.knownHelpers[i]=r[i];return this.accept(t)},accept:function(t){return this[t.type](t)},program:function(t){for(var e=t.statements,r=0,i=e.length;r<i;r++)this.accept(e[r]);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(n,s){return n-s}),this},compileProgram:function(t){var e=new this.compiler().compile(t,this.options),r=this.guid++,i;this.usePartial=this.usePartial||e.usePartial,this.children[r]=e;for(var n=0,s=e.depths.list.length;n<s;n++)i=e.depths.list[n],!(i<2)&&this.addDepth(i-1);return r},block:function(t){var e=t.mustache,r=t.program,i=t.inverse;r&&(r=this.compileProgram(r)),i&&(i=this.compileProgram(i));var n=e.sexpr,s=this.classifySexpr(n);s==="helper"?this.helperSexpr(n,r,i):s==="simple"?(this.simpleSexpr(n),this.opcode("pushProgram",r),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("blockValue",n.id.original)):(this.ambiguousSexpr(n,r,i),this.opcode("pushProgram",r),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var e=t.pairs,r,i;for(this.opcode("pushHash"),r=0,i=e.length;r<i;r++)this.pushParam(e[r][1]);for(;r--;)this.opcode("assignToHash",e[r][0]);this.opcode("popHash")},partial:function(t){var e=t.partialName;this.usePartial=!0,t.hash?this.accept(t.hash):this.opcode("push","undefined"),t.context?this.accept(t.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",e.name,t.indent||""),this.opcode("append")},content:function(t){t.string&&this.opcode("appendContent",t.string)},mustache:function(t){this.sexpr(t.sexpr),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(t,e,r){var i=t.id,n=i.parts[0],s=e!=null||r!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",r),this.ID(i),this.opcode("invokeAmbiguous",n,s)},simpleSexpr:function(t){var e=t.id;e.type==="DATA"?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,r){var i=this.setupFullMustacheParams(t,e,r),n=t.id,s=n.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",i.length,s);else{if(this.options.knownHelpersOnly)throw new Ot("You specified knownHelpersOnly, but used the unknown helper "+s,t);n.falsy=!0,this.ID(n),this.opcode("invokeHelper",i.length,n.original,n.isSimple)}},sexpr:function(t){var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0];e?this.opcode("lookupOnContext",t.parts,t.falsy,t.isScoped):this.opcode("pushContext")},DATA:function(t){this.options.data=!0,this.opcode("lookupData",t.id.depth,t.id.parts)},STRING:function(t){this.opcode("pushString",t.string)},NUMBER:function(t){this.opcode("pushLiteral",t.number)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:wr.call(arguments,1)})},addDepth:function(t){t!==0&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifySexpr:function(t){var e=t.isHelper,r=t.eligibleHelper,i=this.options;if(r&&!e){var n=t.id.parts[0];i.knownHelpers[n]?e=!0:i.knownHelpersOnly&&(r=!1)}return e?"helper":r?"ambiguous":"simple"},pushParams:function(t){for(var e=0,r=t.length;e<r;e++)this.pushParam(t[e])},pushParam:function(t){this.stringParams?(t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",t.stringModeValue,t.type),t.type==="sexpr"&&this.sexpr(t)):(this.trackIds&&this.opcode("pushId",t.type,t.idName||t.stringModeValue),this.accept(t))},setupFullMustacheParams:function(t,e,r){var i=t.params;return this.pushParams(i),this.opcode("pushProgram",e),this.opcode("pushProgram",r),t.hash?this.hash(t.hash):this.opcode("emptyHash"),i}};function Er(t,e,r){if(t==null||typeof t!="string"&&t.constructor!==r.AST.ProgramNode)throw new Ot("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i=r.parse(t),n=new r.Compiler().compile(i,e);return new r.JavaScriptCompiler().compile(n,e)}rt.precompile=Er;function Pr(t,e,r){if(t==null||typeof t!="string"&&t.constructor!==r.AST.ProgramNode)throw new Ot("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i;function n(){var a=r.parse(t),o=new r.Compiler().compile(a,e),u=new r.JavaScriptCompiler().compile(o,e,void 0,!0);return r.template(u)}var s=function(a,o){return i||(i=n()),i.call(this,a,o)};return s._setup=function(a){return i||(i=n()),i._setup(a)},s._child=function(a,o,u){return i||(i=n()),i._child(a,o,u)},s}rt.compile=Pr;function Se(t,e){if(t===e)return!0;if(ke(t)&&ke(e)&&t.length===e.length){for(var r=0;r<t.length;r++)if(!Se(t[r],e[r]))return!1;return!0}}});var Pe=m(Ee=>{"use strict";p();var Nr=A().COMPILER_REVISION,_r=A().REVISION_CHANGES,It=N().default;function W(t){this.value=t}function R(){}R.prototype={nameLookup:function(t,e){return R.isValidJavaScriptVariableName(e)?t+"."+e:t+"['"+e+"']"},depthedLookup:function(t){return this.aliases.lookup="this.lookup",'lookup(depths, "'+t+'")'},compilerInfo:function(){var t=Nr,e=_r[t];return[t,e]},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,e,r,i){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!r,this.context=r||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.depths.list.length||this.options.compat;var n=t.opcodes,s,a,o;for(a=0,o=n.length;a<o;a++)s=n[a],this[s.opcode].apply(this,s.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new It("Compile completed with content left on stack");var u=this.createFunctionContext(i);if(this.isChild)return u;var h={compiler:this.compilerInfo(),main:u},c=this.context.programs;for(a=0,o=c.length;a<o;a++)c[a]&&(h[a]=c[a]);return this.environment.usePartial&&(h.usePartial=!0),this.options.data&&(h.useData=!0),this.useDepths&&(h.useDepths=!0),this.options.compat&&(h.compat=!0),i||(h.compiler=JSON.stringify(h.compiler),h=this.objectLiteral(h)),h},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(t){var e="",r=this.stackVars.concat(this.registers.list);r.length>0&&(e+=", "+r.join(", "));for(var i in this.aliases)this.aliases.hasOwnProperty(i)&&(e+=", "+i+"="+this.aliases[i]);var n=["depth0","helpers","partials","data"];this.useDepths&&n.push("depths");var s=this.mergeSource(e);return t?(n.push(s),Function.apply(this,n)):"function("+n.join(",")+`) {
  `+s+"}"},mergeSource:function(t){for(var e="",r,i=!this.forceBuffer,n,s=0,a=this.source.length;s<a;s++){var o=this.source[s];o.appendToBuffer?r?r=r+`
    + `+o.content:r=o.content:(r&&(e?e+="buffer += "+r+`;
  `:(n=!0,e=r+`;
  `),r=void 0),e+=o+`
  `,this.environment.isSimple||(i=!1))}return i?(r||!e)&&(e+="return "+(r||'""')+`;
`):(t+=", buffer = "+(n?"":this.initializeBuffer()),r?e+="return buffer + "+r+`;
`:e+=`return buffer;
`),t&&(e="var "+t.substring(2)+(n?"":`;
  `)+e),e},blockValue:function(t){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams(t,0,e);var r=this.popStack();e.splice(1,0,r),this.push("blockHelperMissing.call("+e.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams("",0,t,!0),this.flushInline();var e=this.topStack();t.splice(1,0,e),this.pushSource("if (!"+this.lastHelper+") { "+e+" = blockHelperMissing.call("+t.join(", ")+"); }")},appendContent:function(t){this.pendingContent&&(t=this.pendingContent+t),this.pendingContent=t},append:function(){this.flushInline();var t=this.popStack();this.pushSource("if ("+t+" != null) { "+this.appendToBuffer(t)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,r){var i=0,n=t.length;for(!r&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[i++])):this.pushContext();i<n;i++)this.replaceStack(function(s){var a=this.nameLookup(s,t[i],"context");return e?" && "+a:" != null ? "+a+" : "+s})},lookupData:function(t,e){t?this.pushStackLiteral("this.data(data, "+t+")"):this.pushStackLiteral("data");for(var r=e.length,i=0;i<r;i++)this.replaceStack(function(n){return" && "+this.nameLookup(n,e[i],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),e!=="sexpr"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+t.ids.join(",")+"}"),this.stringParams&&(this.push("{"+t.contexts.join(",")+"}"),this.push("{"+t.types.join(",")+"}")),this.push(`{
    `+t.values.join(`,
    `)+`
  }`)},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},invokeHelper:function(t,e,r){this.aliases.helperMissing="helpers.helperMissing";var i=this.popStack(),n=this.setupHelper(t,e),s=(r?n.name+" || ":"")+i+" || helperMissing";this.push("(("+s+").call("+n.callParams+"))")},invokeKnownHelper:function(t,e){var r=this.setupHelper(t,e);this.push(r.name+".call("+r.callParams+")")},invokeAmbiguous:function(t,e){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var r=this.popStack();this.emptyHash();var i=this.setupHelper(0,t,e),n=this.lastHelper=this.nameLookup("helpers",t,"helper");this.push("((helper = (helper = "+n+" || "+r+") != null ? helper : helperMissing"+(i.paramsInit?"),("+i.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+i.callParams+") : helper))")},invokePartial:function(t,e){var r=[this.nameLookup("partials",t,"partial"),"'"+e+"'","'"+t+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?r.push("data"):this.options.compat&&r.push("undefined"),this.options.compat&&r.push("depths"),this.push("this.invokePartial("+r.join(", ")+")")},assignToHash:function(t){var e=this.popStack(),r,i,n;this.trackIds&&(n=this.popStack()),this.stringParams&&(i=this.popStack(),r=this.popStack());var s=this.hash;r&&s.contexts.push("'"+t+"': "+r),i&&s.types.push("'"+t+"': "+i),n&&s.ids.push("'"+t+"': "+n),s.values.push("'"+t+"': ("+e+")")},pushId:function(t,e){t==="ID"||t==="DATA"?this.pushString(e):t==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:R,compileChildren:function(t,e){for(var r=t.children,i,n,s=0,a=r.length;s<a;s++){i=r[s],n=new this.compiler;var o=this.matchExistingProgram(i);o==null?(this.context.programs.push(""),o=this.context.programs.length,i.index=o,i.name="program"+o,this.context.programs[o]=n.compile(i,e,this.context,!this.precompile),this.context.environments[o]=i,this.useDepths=this.useDepths||n.useDepths):(i.index=o,i.name="program"+o)}},matchExistingProgram:function(t){for(var e=0,r=this.context.environments.length;e<r;e++){var i=this.context.environments[e];if(i&&i.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],r=e.depths.list,i=this.useDepths,n,s=[e.index,"data"];return i&&s.push("depths"),"this.program("+s.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new W(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var e=this.incrStack();return this.pushSource(e+" = "+t+";"),this.compileStack.push(e),e},replaceStack:function(t){var e="",r=this.isInline(),i,n,s;if(!this.isInline())throw new It("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof W)e=i=a.value,s=!0;else{n=!this.stackSlot;var o=n?this.incrStack():this.topStackName();e="("+this.push(o)+" = "+a+")",i=this.topStack()}var u=t.call(this,i);s||this.popStack(),n&&this.stackSlot--,this.push("("+e+u+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var e=0,r=t.length;e<r;e++){var i=t[e];i instanceof W?this.compileStack.push(i):this.pushStack(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),r=(e?this.inlineStack:this.compileStack).pop();if(!t&&r instanceof W)return r.value;if(!e){if(!this.stackSlot)throw new It("Invalid stack pop");this.stackSlot--}return r},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof W?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(this.quotedString(r)+":"+t[r]);return"{"+e.join(",")+"}"},setupHelper:function(t,e,r){var i=[],n=this.setupParams(e,t,i,r),s=this.nameLookup("helpers",e,"helper");return{params:i,paramsInit:n,name:s,callParams:[this.contextName(0)].concat(i).join(", ")}},setupOptions:function(t,e,r){var i={},n=[],s=[],a=[],o,u,h;i.name=this.quotedString(t),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack()),u=this.popStack(),h=this.popStack(),(h||u)&&(h||(h="this.noop"),u||(u="this.noop"),i.fn=h,i.inverse=u);for(var c=e;c--;)o=this.popStack(),r[c]=o,this.trackIds&&(a[c]=this.popStack()),this.stringParams&&(s[c]=this.popStack(),n[c]=this.popStack());return this.trackIds&&(i.ids="["+a.join(",")+"]"),this.stringParams&&(i.types="["+s.join(",")+"]",i.contexts="["+n.join(",")+"]"),this.options.data&&(i.data="data"),i},setupParams:function(t,e,r,i){var n=this.objectLiteral(this.setupOptions(t,e,r));return i?(this.useRegister("options"),r.push("options"),"options="+n):(r.push(n),"")}};var xe="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),Cr=R.RESERVED_WORDS={};for(nt=0,we=xe.length;nt<we;nt++)Cr[xe[nt]]=!0;var nt,we;R.isValidJavaScriptVariableName=function(t){return!R.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};Ee.default=R});var Ce=m(_e=>{"use strict";p();var j=ce().default,Or=xt().default,Ir=_t().parser,Ar=_t().parse,Hr=it().Compiler,Dr=it().compile,Rr=it().precompile,Lr=Pe().default,Tr=j.create,Ne=function(){var t=Tr();return t.compile=function(e,r){return Dr(e,r,t)},t.precompile=function(e,r){return Rr(e,r,t)},t.AST=Or,t.Compiler=Hr,t.JavaScriptCompiler=Lr,t.Parser=Ir,t.parse=Ar,t};j=Ne();j.create=Ne;j.default=j;_e.default=j});var Ht=m(Oe=>{"use strict";p();function At(){}At.prototype={constructor:At,accept:function(t){return this[t.type](t)}};Oe.default=At});var Ie=m(Dt=>{"use strict";p();var Mr=Ht().default;function Br(t){return new d().accept(t)}Dt.print=Br;function d(){this.padding=0}Dt.PrintVisitor=d;d.prototype=new Mr;d.prototype.pad=function(t){for(var e="",r=0,i=this.padding;r<i;r++)e=e+"  ";return e=e+t+`
`,e};d.prototype.program=function(t){var e="",r=t.statements,i,n;for(i=0,n=r.length;i<n;i++)e=e+this.accept(r[i]);return this.padding--,e};d.prototype.block=function(t){var e="";return e=e+this.pad("BLOCK:"),this.padding++,e=e+this.accept(t.mustache),t.program&&(e=e+this.pad("PROGRAM:"),this.padding++,e=e+this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e=e+this.pad("{{^}}"),this.padding++,e=e+this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e};d.prototype.sexpr=function(t){for(var e=t.params,r=[],i,n=0,s=e.length;n<s;n++)r.push(this.accept(e[n]));return e="["+r.join(", ")+"]",i=t.hash?" "+this.accept(t.hash):"",this.accept(t.id)+" "+e+i};d.prototype.mustache=function(t){return this.pad("{{ "+this.accept(t.sexpr)+" }}")};d.prototype.partial=function(t){var e=this.accept(t.partialName);return t.context&&(e+=" "+this.accept(t.context)),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")};d.prototype.hash=function(t){for(var e=t.pairs,r=[],i,n,s=0,a=e.length;s<a;s++)i=e[s][0],n=this.accept(e[s][1]),r.push(i+"="+n);return"HASH{"+r.join(", ")+"}"};d.prototype.STRING=function(t){return'"'+t.string+'"'};d.prototype.NUMBER=function(t){return"NUMBER{"+t.number+"}"};d.prototype.BOOLEAN=function(t){return"BOOLEAN{"+t.bool+"}"};d.prototype.ID=function(t){var e=t.parts.join("/");return t.parts.length>1?"PATH:"+e:"ID:"+e};d.prototype.PARTIAL_NAME=function(t){return"PARTIAL:"+t.name};d.prototype.DATA=function(t){return"@"+this.accept(t.id)};d.prototype.content=function(t){return this.pad("CONTENT[ '"+t.string+"' ]")};d.prototype.comment=function(t){return this.pad("{{! '"+t.comment+"' }}")}});var De=m((xi,He)=>{p();var G=Ce().default;G.Visitor=Ht().default;var Ae=Ie();G.PrintVisitor=Ae.PrintVisitor;G.print=Ae.print;He.exports=G;typeof F<"u"&&F.extensions&&(Rt=function(t,e){var r=(ft(),qt(ct)),i=r.readFileSync(e,"utf8");t.exports=G.compile(i)},F.extensions[".handlebars"]=Rt,F.extensions[".hbs"]=Rt);var Rt});var Te=m((Pi,Le)=>{p();var Re=(ft(),qt(ct)),qr=De();function Vr(t){var e=Re.readFileSync("//style.css","utf-8"),r=Re.readFileSync("//resume.template","utf-8");return qr.compile(r)({css:e,resume:t})}Le.exports={render:Vr}});p();var L=We(Te(),1),Me=L.default??L,_i=Me.render??L.render,Ci=Me.pdfRenderOptions??L.pdfRenderOptions;export{Ci as pdfRenderOptions,_i as render};
