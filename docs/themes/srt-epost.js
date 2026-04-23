var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Fe=Object.create;var Q=Object.defineProperty;var Ve=Object.getOwnPropertyDescriptor;var qe=Object.getOwnPropertyNames;var Je=Object.getPrototypeOf,We=Object.prototype.hasOwnProperty;var q=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var Ht=(t,e)=>()=>(t&&(e=t(t=0)),e);var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ue=(t,e)=>{for(var r in e)Q(t,r,{get:e[r],enumerable:!0})},Rt=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of qe(e))!We.call(t,i)&&i!==r&&Q(t,i,{get:()=>e[i],enumerable:!(n=Ve(e,i))||n.enumerable});return t};var ze=(t,e,r)=>(r=t!=null?Fe(Je(t)):{},Rt(e||!t||!t.__esModule?Q(r,"default",{value:t,enumerable:!0}):r,t)),Bt=t=>Rt(Q({},"__esModule",{value:!0}),t);var c=Ht(()=>{});var ut={};Ue(ut,{createReadStream:()=>Qt,createWriteStream:()=>Yt,default:()=>Ge,existsSync:()=>Jt,lstatSync:()=>zt,mkdirSync:()=>Ut,readFileSync:()=>Vt,readdirSync:()=>qt,rmdirSync:()=>Kt,statSync:()=>ct,unlinkSync:()=>Gt,writeFileSync:()=>Wt});function pt(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Ft(t){var e=pt(t);if(Y[e]!==void 0)return Y[e];for(var r=Object.keys(Y),n=0;n<r.length;n++)if(e.endsWith("/"+r[n])||e===r[n])return Y[r[n]]}function lt(t){var e=pt(t);if((e===""||e===".")&&R["."]!==void 0)return R["."];if(R[e]!==void 0)return R[e];for(var r=Object.keys(R),n=0;n<r.length;n++)if(e.endsWith("/"+r[n])||e===r[n])return R[r[n]]}var Y,R,Vt,qt,Jt,Wt,Ut,ct,zt,Gt,Kt,Qt,Yt,Ge,dt=Ht(()=>{"use strict";c();Y={"index.html":`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\r
<html>\r
<head>\r
	<title>Erik Post | Software developer | http://www.shinsetsu.nl</title>\r
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />\r
\r
	<meta name="keywords" content="" />\r
	<meta name="description" content="" />\r
\r
	<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" /> \r
	<style>\r
	/*\r
---------------------------------------------------------------------------------\r
	STRIPPED DOWN RESUME TEMPLATE\r
    html resume\r
\r
    v0.9: 5/28/09\r
\r
    design and code by: thingsthatarebrown.com \r
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
#inner { padding: 10px 80px; margin: 80px auto; background: white; border: solid #bbb; border-width: 8px 0 0px 0; }\r
.yui-gf { margin-bottom: 2em; padding-bottom: 2em; border-bottom: 1px solid #ccc; }\r
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
a { \r
    color: #990003; \r
    /* color: #993366; */\r
    /* color: #660066; */\r
    /* color: #669900; */\r
    /* color: #009900; */\r
}\r
a:hover { text-decoration: none; }\r
strong { font-weight: bold; }\r
li { line-height: 24px; border-bottom: 1px solid #ccc; }\r
p.enlarge { font-size: 140%; padding-right: 6.5em; line-height: 24px; }\r
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
/* .job p br#job-summary-newline { margin-bottom: 100px; height: 100px; } */\r
/* .job p div#job-summary-spacer { background: red; margin-bottom: 1px; display: block} */\r
/* &lt;div id=&quot;job-summary-spacer&quot;&gt;xxx&lt;/div&gt; */\r
.job p#job-summary-container { margin-bottom: 0.01em;}\r
.job p#job-highlights-container { margin-top: 0.4em;}\r
\r
.last { border: none; }\r
.skills-list {  }\r
.skills-list ul { margin: 0; }\r
.skills-list li { margin: 3px 0; padding: 3px 0; }\r
.skills-list li span { font-size: 152%; display: block; margin-bottom: -2px; padding: 0 }\r
.talent { width: 32%; float: left; margin-bottom: 12px; }\r
.talent h2 { margin-bottom: 6px; }\r
\r
#srt-ttab { margin-bottom: 100px; text-align: center;  }\r
#srt-ttab img.last { margin-top: 20px }\r
\r
/* --// override to force 1/8th width grids -- */\r
.yui-gf .yui-u{width:80.2%;}\r
.yui-gf div.first{width:12.3%;}\r
\r
\r
.edu h4 { \r
    /* margin-right: 0  */\r
    float: right;\r
}\r
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
					<h1>Erik Post</h1>\r
					<h2>Software developer</h2>\r
				</div>\r
\r
				<div class="yui-u">\r
					<div class="contact-info">\r
						<!-- <h3><a id="pdf" href="#">Download as PDF</a></h3> -->\r
						<h3><a href="mailto:erik@shinsetsu.nl">erik@shinsetsu.nl</a></h3>\r
						<h3>+31 654 976 981</h3>\r
					</div><!--// .contact-info -->\r
				</div>\r
			</div><!--// .yui-gc -->\r
		</div><!--// hd -->\r
\r
		<div id="bd">\r
			<div id="yui-main">\r
				<div class="yui-b">\r
\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Profile</h2>\r
						</div>\r
						<div class="yui-u">\r
							<p class="enlarge">\r
								I have been developing software since I was 8 years old. In the past few years, I have increasingly been using functional programming and algebraic methods to solve real-world problems, and I&#x27;m very excited to see such technology becoming mainstream in today&#x27;s world of distributed big data. I greatly enjoy learning about these subjects, both to build software with and to teach others. \r
							</p>\r
						</div>\r
					</div><!--// .yui-gf -->\r
\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Skills</h2>\r
						</div>\r
						<div class="yui-u">\r
								<div class="talent">\r
									<h2>Frontend</h2>\r
									<p>Play Framework</p>\r
									<p>Lift</p>\r
									<p>HTML + CSS</p>\r
									<p>jQuery</p>\r
									<p>Underscore</p>\r
									<p>Angular</p>\r
									<p>Wicket</p>\r
									<p>Servlets</p>\r
									<p>SWT, Swing</p>\r
								</div>\r
								<div class="talent">\r
									<h2>Backend</h2>\r
									<p>Scalaz</p>\r
									<p>PostgreSQL</p>\r
									<p>MySQL</p>\r
									<p>ElasticSearch</p>\r
									<p>Neo4j</p>\r
									<p>Jetty</p>\r
									<p>Tomcat</p>\r
									<p>Jelastic Cloud</p>\r
									<p>Apache httpd</p>\r
									<p>Microsoft Access</p>\r
								</div>\r
								<div class="talent">\r
									<h2>Languages</h2>\r
									<p>Scala</p>\r
									<p>Haskell</p>\r
									<p>PureScript</p>\r
									<p>JavaScript</p>\r
									<p>Java, C#</p>\r
									<p>Python</p>\r
									<p>MatLab</p>\r
									<p>Lisp</p>\r
									<p>C</p>\r
									<p>x86 and 65xx Assembly</p>\r
									<p>Visual Basic</p>\r
									<p>PHP</p>\r
								</div>\r
								<div class="talent">\r
									<h2>Language technology</h2>\r
									<p>Parser combinators</p>\r
									<p>ASF+SDF</p>\r
									<p>ANTLR</p>\r
								</div>\r
								<div class="talent">\r
									<h2>Tools</h2>\r
									<p>Emacs, IntelliJ IDEA, NetBeans, Eclipse</p>\r
									<p>Maven, SBT</p>\r
								</div>\r
						</div>\r
					</div><!--// .yui-gf -->\r
\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Experience</h2>\r
						</div><!--// .yui-u -->\r
\r
						<div class="yui-u">\r
							<div class="job">\r
								<h2>Shinsetsu</h2>\r
								<h3>Freelance trade name</h3>\r
								<h4>May 2006 - \r
								Present\r
								</h4>\r
								<p id="job-summary-container">Software development, consultancy and training.</p><p id="job-highlights-container">\r
								&bull;&nbsp; Developed and maintained a number of Scala (and to some extent Java) projects, mentioned separately below, involving many different technologies on both the frontend and backend.<br>\r
							        								&bull;&nbsp; Developed and maintained many MS Access projects, some mentioned separately below.<br>\r
							        								&bull;&nbsp; Designed and developed many CMS-based websites, and trained customers to do their own content management. Technologies: PHP, JavaScript, WordPress, CMSimple.<br>\r
							        								&bull;&nbsp; Several consultancy assignments on a variety of software-related topics.<br>\r
							        								&bull;&nbsp; Various text translation and editing jobs, mostly from Dutch to English and vice versa.<br>\r
							        </p>\r
							</div>\r
							<div class="job">\r
								<h2>TweetBeam</h2>\r
								<h3>Sole freelance project developer</h3>\r
								<h4>Feb 2015 - \r
                                                                Jul 2015\r
</h4>\r
								<p id="job-summary-container">Developed a new webapp to complement TweetBeam&#x27;s very successful social media wall with analytics and visualisation features.</p><p id="job-highlights-container">\r
								&bull;&nbsp; Technologies: Scala, ElasticSearch, Play, Scalaz, Doobie, Argonaut, PostgreSQL, JavaScript, echarts, flot, Bootstrap.<br>\r
							        </p>\r
							</div>\r
							<div class="job">\r
								<h2>Zorgom</h2>\r
								<h3>Freelance lead developer</h3>\r
								<h4>Sep 2013 - \r
                                                                Jul 2014\r
</h4>\r
								<p id="job-summary-container">Software concept and development of a web app to connect care receivers to their informal and professional carers. Features include shared agendas and appointment scheduling, messaging, and media sharing, all with fine-grained privacy controls.</p><p id="job-highlights-container">\r
								&bull;&nbsp; Translated initial project concept and sketches into functional specifications and a working product.<br>\r
							        								&bull;&nbsp; Trained co-developer in various JavaScript-related programming tasks.<br>\r
							        								&bull;&nbsp; Technologies: Scala, Scalaz, Slick, JavaScript, jQuery, Angular, Bootstrap.<br>\r
							        </p>\r
							</div>\r
							<div class="job">\r
								<h2>AIMMS</h2>\r
								<h3>R&amp;D developer (employed 0.8 FTE)</h3>\r
								<h4>Nov 2009 - \r
                                                                Jun 2013\r
</h4>\r
								<p id="job-summary-container">Hired to help the AIMMS Mathematical modelling and analytics framework make the transition from a &#x27;90s era Windows desktop application to a modern collaborative web-based platform.</p><p id="job-highlights-container">\r
								&bull;&nbsp; Evaluated and introduced many new technologies to take AIMMS from C++ Windows desktop technology onto the JVM and into the cloud.<br>\r
							        								&bull;&nbsp; Developed web app and middleware for AIMMS PRO, a collaboration and distributed execution platform for mathematical models. Technologies: Scala, Lift, Scalaz, Slick, Jetty, JavaScript, jQuery, D3.js, Bootstrap.<br>\r
							        								&bull;&nbsp; Developed proprietary RPC DSL compiler. Technologies: Scala parser combinators.<br>\r
							        								&bull;&nbsp; Co-developed AIMMS IDE and visual dashboard designer based on Eclipse. Technologies: Scala, Java, Eclipse, Jetty, ANTLR, D3.js, WebSockets, SWT, Tycho.<br>\r
							        								&bull;&nbsp; Developed an experimental LINQ-to-AIMMS implementation. Technologies: C#, LINQ.<br>\r
							        								&bull;&nbsp; Developed basic Emacs editor support for the AIMMS language. Technologies: Emacs LISP.<br>\r
							        </p>\r
							</div>\r
							<div class="job">\r
								<h2>Stichting Jottem!</h2>\r
								<h3>Sole freelance developer and consultant</h3>\r
								<h4>Dec 2008 - \r
								Present\r
								</h4>\r
								<p id="job-summary-container">Designed, developed, maintained and supported a graphical reservations and invoicing system used for rooms and rental equipment.</p><p id="job-highlights-container">\r
								&bull;&nbsp; System has successfully been in everyday use for 7 years now.<br>\r
							        								&bull;&nbsp; Provided network, systems and e-mail administration services.<br>\r
							        								&bull;&nbsp; Technologies: Scala, Java, Swing, JPA, Hibernate, MySQL, Postgres.<br>\r
							        </p>\r
							</div>\r
							<div class="job">\r
								<h2>Arlanet</h2>\r
								<h3>Freelance developer</h3>\r
								<h4>May 2006 - \r
                                                                Dec 2011\r
</h4>\r
								<p id="job-summary-container">Several smaller projects, mostly using Microsoft technology.</p><p id="job-highlights-container">\r
								&bull;&nbsp; Automatic source code transformation of a PHP and Access codebase to use a MySQL and a new currency data type throughout the application. Technologies: Perl<br>\r
							        								&bull;&nbsp; Developed an integration module between AFAS and a bespoke invoicing system. Technologies: MS Access, VBA<br>\r
							        								&bull;&nbsp; Maintained several line-of-business apps for SMBs such as Gebr. Oudejans BV, Tivap, Groen Recycling, KiesTandTechniek, Maarseveen.<br>\r
							        </p>\r
							</div>\r
							<div class="job">\r
								<h2>Martin Schilder Automobielbedrijven</h2>\r
								<h3>Freelance developer</h3>\r
								<h4>Jul 2010 - \r
                                                                Nov 2010\r
</h4>\r
								<p id="job-summary-container">Restructured and extended the functionality of a line-of-business app. Technologies: MS Access, VBA.</p><p id="job-highlights-container">\r
</p>\r
							</div>\r
							<div class="job">\r
								<h2>Lions Clubs</h2>\r
								<h3>Sole freelance developer</h3>\r
								<h4>Jan 1998 - \r
                                                                Jul 2009\r
</h4>\r
								<p id="job-summary-container">Designed and implemented a system for registration, timetabling, race monitoring and invoicing for a fundraising sports event with various competing teams.</p><p id="job-highlights-container">\r
								&bull;&nbsp; System helped to raise around EUR 45,000 in funds over a ten year period. Used by Lions Clubs of Amsterdam, Zaanstreek, Zaanstreek-De Banne, Veenendaal and Hillegom.<br>\r
							        								&bull;&nbsp; Technologies: Microsoft Access, VBA, Excel.<br>\r
							        </p>\r
							</div>\r
							<div class="job">\r
								<h2>Aionion Symbolon, Uitgeverij en Boekhandel</h2>\r
								<h3>Freelance developer and consultant</h3>\r
								<h4>Mar 2009 - \r
                                                                Aug 2009\r
</h4>\r
								<p id="job-summary-container">Helped the company move towards more automated and web-enabled business processes.</p><p id="job-highlights-container">\r
								&bull;&nbsp; Improved business processes by drastically renovating the company&#x27;s bespoke line-of-business software. Technology: MS Access, VBA<br>\r
							        								&bull;&nbsp; Designed and developed a website and webshop, including a custom-made Magento shipping plugin. Technology: PHP, Magento, iDeal API.<br>\r
							        								&bull;&nbsp; Trained staff to use MS Access, Magento, CMSimple, and intranet features.<br>\r
							        </p>\r
							</div>\r
							<div class="job last">\r
								<h2>PEERS Internet</h2>\r
								<h3>Co-founder and developer</h3>\r
								<h4>Jan 2000 - \r
                                                                Jan 2001\r
</h4>\r
								<p id="job-summary-container">We developed business software and websites using mainly PHP, Microsoft Access, MySQL.</p><p id="job-highlights-container">\r
</p>\r
							</div>\r
						</div><!--// .yui-u -->\r
					</div><!--// .yui-gf -->\r
\r
\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Education</h2>\r
						</div>\r
						<div class="yui-u edu">\r
								<h4>Sep 1997 - \r
                                                                Aug 2007\r
</h4>\r
							<h2>University of Amsterdam</h2>\r
\r
							<h3>Computer Science, MSc\r
                                                        </h3>\r
							<br>\r
						</div>\r
						<div class="yui-u edu">\r
								<h4>Sep 1991 - \r
                                                                May 1997\r
</h4>\r
							<h2>St.-Micha\xEBl College, Zaandam</h2>\r
\r
							<h3>Secondary school, VWO (A-levels)\r
                                                        </h3>\r
							<br>\r
						</div>\r
					</div><!--// .yui-gf -->\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Languages</h2>\r
						</div>\r
						<div class="yui-u">\r
								<div class="talent">\r
									<h2>Dutch</h2>\r
									<p>Native speaker</p>\r
								</div>\r
								<div class="talent">\r
									<h2>English</h2>\r
									<p>Near-native</p>\r
								</div>\r
								<div class="talent">\r
									<h2>German</h2>\r
									<p>Fair</p>\r
								</div>\r
								<div class="talent">\r
									<h2>French</h2>\r
									<p>Fair</p>\r
								</div>\r
						</div>\r
					</div><!--// .yui-gf -->\r
\r
\r
					<div class="yui-gf last">\r
						<div class="yui-u first">\r
							<h2>Interests</h2>\r
						</div>\r
						<div class="yui-u">\r
								<div class="talent">\r
									<h2>Music</h2>\r
								</div>\r
								<div class="talent">\r
									<h2>Literature</h2>\r
								</div>\r
								<div class="talent">\r
									<h2>Languages</h2>\r
								</div>\r
						</div>\r
					</div><!--// .yui-gf -->\r
\r
					\r
				</div><!--// .yui-b -->\r
			</div><!--// yui-main -->\r
		</div><!--// bd -->\r
\r
		<!-- <div id="ft"> -->\r
		<!-- 	<p>Erik Post &mdash; <a href="mailto:erik@shinsetsu.nl">erik@shinsetsu.nl</a> &mdash; +31 654 976 981</p> -->\r
		<!-- </div><\\!--// footer -\\-> -->\r
	</div><!-- // inner -->\r
</div><!--// doc -->\r
</body>\r
</html>\r
`,"package.json":`{
  "name": "jsonresume-theme-srt-epost",
  "version": "0.1.6",
  "description": "SRT theme for JSON Resume",
  "author": "Erik Post",
  "repository": {
    "type": "git",
    "url": "https://github.com/epost/jsonresume-theme-srt"
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
	<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" /> \r
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
						<h3><a href="mailto:{{resume.basics.email}}">{{resume.basics.email}}</a></h3>\r
						<h3>{{resume.basics.phone}}</h3>\r
					</div><!--// .contact-info -->\r
				</div>\r
			</div><!--// .yui-gc -->\r
		</div><!--// hd -->\r
\r
		<div id="bd">\r
			<div id="yui-main">\r
				<div class="yui-b">\r
\r
					<div class="yui-gf">\r
						{{#if resume.basics.summary}}\r
						<div class="yui-u first">\r
							<h2>Profile</h2>\r
						</div>\r
						<div class="yui-u">\r
							<p class="enlarge">\r
								{{resume.basics.summary}} \r
							</p>\r
						{{/if}}\r
						</div>\r
					</div><!--// .yui-gf -->\r
\r
					<div class="yui-gf">\r
						{{#if resume.skills.length}}\r
						<div class="yui-u first">\r
							<h2>Skills</h2>\r
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
					{{#if resume.work.length}}\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Experience</h2>\r
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
								<h4>{{date startDate}} - \r
								{{#if endDate}}\r
                                                                {{date endDate}}\r
								{{^}}\r
								Present\r
								{{/if}}</h4>\r
								<p id="job-summary-container">{{summary}}</p><p id="job-highlights-container">\r
							        {{#each highlights}}\r
								&bull;&nbsp; {{.}}<br>\r
							        {{/each}}</p>\r
							</div>\r
							{{/each}}\r
						</div><!--// .yui-u -->\r
					</div><!--// .yui-gf -->\r
					{{/if}}\r
\r
\r
{{#if resume.education}}\r
					<div class="yui-gf">\r
						<div class="yui-u first">\r
							<h2>Education</h2>\r
						</div>\r
						{{#each resume.education}}\r
						<div class="yui-u edu">\r
								<h4>{{date startDate}} - \r
								{{#if endDate}}\r
                                                                {{date endDate}}\r
								{{^}}\r
								Present\r
								{{/if}}</h4>\r
							<h2>{{institution}}</h2>\r
\r
							<h3>{{area}}, {{studyType}}\r
                                                        {{#if gpa}}\r
                                                        &mdash; <strong>{{gpa}}</strong>\r
                                                        {{/if}}\r
                                                        </h3>\r
							{{#each courses}}\r
							<h4>&bull; {{.}}</h4>\r
							{{/each}}\r
							<br>\r
						</div>\r
						{{/each}}\r
					</div><!--// .yui-gf -->\r
					{{/if}}\r
					<div class="yui-gf">\r
						{{#if resume.languages.length}}\r
						<div class="yui-u first">\r
							<h2>Languages</h2>\r
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
\r
					<div class="yui-gf last">\r
						{{#if resume.interests.length}}\r
						<div class="yui-u first">\r
							<h2>Interests</h2>\r
						</div>\r
						<div class="yui-u">\r
							    {{#each resume.interests}}\r
								<div class="talent">\r
								        {{#name}}\r
									<h2>{{.}}</h2>\r
								        {{/name}}\r
								</div>\r
							    {{/each}}\r
						</div>\r
						{{/if}}\r
					</div><!--// .yui-gf -->\r
\r
					\r
				</div><!--// .yui-b -->\r
			</div><!--// yui-main -->\r
		</div><!--// bd -->\r
\r
		<!-- <div id="ft"> -->\r
		<!-- 	<p>{{resume.basics.name}} &mdash; <a href="mailto:{{resume.basics.email}}">{{resume.basics.email}}</a> &mdash; {{resume.basics.phone}}</p> -->\r
		<!-- </div><\\!--// footer -\\-> -->\r
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
    design and code by: thingsthatarebrown.com \r
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
#inner { padding: 10px 80px; margin: 80px auto; background: white; border: solid #bbb; border-width: 8px 0 0px 0; }\r
.yui-gf { margin-bottom: 2em; padding-bottom: 2em; border-bottom: 1px solid #ccc; }\r
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
a { \r
    color: #990003; \r
    /* color: #993366; */\r
    /* color: #660066; */\r
    /* color: #669900; */\r
    /* color: #009900; */\r
}\r
a:hover { text-decoration: none; }\r
strong { font-weight: bold; }\r
li { line-height: 24px; border-bottom: 1px solid #ccc; }\r
p.enlarge { font-size: 140%; padding-right: 6.5em; line-height: 24px; }\r
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
/* .job p br#job-summary-newline { margin-bottom: 100px; height: 100px; } */\r
/* .job p div#job-summary-spacer { background: red; margin-bottom: 1px; display: block} */\r
/* <div id="job-summary-spacer">xxx</div> */\r
.job p#job-summary-container { margin-bottom: 0.01em;}\r
.job p#job-highlights-container { margin-top: 0.4em;}\r
\r
.last { border: none; }\r
.skills-list {  }\r
.skills-list ul { margin: 0; }\r
.skills-list li { margin: 3px 0; padding: 3px 0; }\r
.skills-list li span { font-size: 152%; display: block; margin-bottom: -2px; padding: 0 }\r
.talent { width: 32%; float: left; margin-bottom: 12px; }\r
.talent h2 { margin-bottom: 6px; }\r
\r
#srt-ttab { margin-bottom: 100px; text-align: center;  }\r
#srt-ttab img.last { margin-top: 20px }\r
\r
/* --// override to force 1/8th width grids -- */\r
.yui-gf .yui-u{width:80.2%;}\r
.yui-gf div.first{width:12.3%;}\r
\r
\r
.edu h4 { \r
    /* margin-right: 0  */\r
    float: right;\r
}\r
`},R={".":["LICENSE","README.md","index.html","index.js","package.json","resume.template","style.css"]};Vt=function(t,e){var r=Ft(t);return r!==void 0?r:""},qt=function(t,e){var r=lt(t);return r===void 0&&(r=[]),e&&e.withFileTypes?r.map(function(n){var i=pt(t)+"/"+n,s=lt(i)!==void 0;return{name:n,isFile:function(){return!s},isDirectory:function(){return s}}}):r},Jt=function(t){return Ft(t)!==void 0||lt(t)!==void 0},Wt=function(){},Ut=function(){},ct=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},zt=ct,Gt=function(){},Kt=function(){},Qt=function(){return{pipe:function(t){return t},on:function(){return this}}},Yt=function(){return{write:function(){},end:function(){},on:function(){return this}}},Ge={readFileSync:Vt,readdirSync:qt,existsSync:Jt,writeFileSync:Wt,mkdirSync:Ut,statSync:ct,lstatSync:zt,unlinkSync:Gt,rmdirSync:Kt,createReadStream:Qt,createWriteStream:Yt}});var ft=m(Xt=>{"use strict";c();function Zt(t){this.string=t}Zt.prototype.toString=function(){return""+this.string};Xt.default=Zt});var B=m(P=>{"use strict";c();var Ke=ft().default,Qe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Ye=/[&<>"'`]/g,Ze=/[&<>"'`]/;function Xe(t){return Qe[t]}function $e(t){for(var e=1;e<arguments.length;e++)for(var r in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],r)&&(t[r]=arguments[e][r]);return t}P.extend=$e;var mt=Object.prototype.toString;P.toString=mt;var Z=function(t){return typeof t=="function"};Z(/x/)&&(Z=function(t){return typeof t=="function"&&mt.call(t)==="[object Function]"});var Z;P.isFunction=Z;var $t=Array.isArray||function(t){return t&&typeof t=="object"?mt.call(t)==="[object Array]":!1};P.isArray=$t;function tr(t){return t instanceof Ke?t.toString():t==null?"":t?(t=""+t,Ze.test(t)?t.replace(Ye,Xe):t):t+""}P.escapeExpression=tr;function er(t){return!t&&t!==0?!0:!!($t(t)&&t.length===0)}P.isEmpty=er;function rr(t,e){return(t?t+".":"")+e}P.appendContextPath=rr});var N=m(ee=>{"use strict";c();var gt=["description","fileName","lineNumber","message","name","number","stack"];function te(t,e){var r;e&&e.firstLine&&(r=e.firstLine,t+=" - "+r+":"+e.firstColumn);for(var n=Error.prototype.constructor.call(this,t),i=0;i<gt.length;i++)this[gt[i]]=n[gt[i]];r&&(this.lineNumber=r,this.column=e.firstColumn)}te.prototype=new Error;ee.default=te});var M=m(_=>{"use strict";c();var y=B(),bt=N().default,nr="2.0.0";_.VERSION=nr;var ir=6;_.COMPILER_REVISION=ir;var sr={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};_.REVISION_CHANGES=sr;var re=y.isArray,vt=y.isFunction,ne=y.toString,ie="[object Object]";function yt(t,e){this.helpers=t||{},this.partials=e||{},ar(this)}_.HandlebarsEnvironment=yt;yt.prototype={constructor:yt,logger:J,log:se,registerHelper:function(t,e){if(ne.call(t)===ie){if(e)throw new bt("Arg not supported with multiple helpers");y.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){ne.call(t)===ie?y.extend(this.partials,t):this.partials[t]=e},unregisterPartial:function(t){delete this.partials[t]}};function ar(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new bt("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(e,r){var n=r.inverse,i=r.fn;if(e===!0)return i(this);if(e===!1||e==null)return n(this);if(re(e))return e.length>0?(r.ids&&(r.ids=[r.name]),t.helpers.each(e,r)):n(this);if(r.data&&r.ids){var s=X(r.data);s.contextPath=y.appendContextPath(r.data.contextPath,r.name),r={data:s}}return i(e,r)}),t.registerHelper("each",function(e,r){if(!r)throw new bt("Must pass iterator to #each");var n=r.fn,i=r.inverse,s=0,a="",o,p;if(r.data&&r.ids&&(p=y.appendContextPath(r.data.contextPath,r.ids[0])+"."),vt(e)&&(e=e.call(this)),r.data&&(o=X(r.data)),e&&typeof e=="object")if(re(e))for(var h=e.length;s<h;s++)o&&(o.index=s,o.first=s===0,o.last=s===e.length-1,p&&(o.contextPath=p+s)),a=a+n(e[s],{data:o});else for(var u in e)e.hasOwnProperty(u)&&(o&&(o.key=u,o.index=s,o.first=s===0,p&&(o.contextPath=p+u)),a=a+n(e[u],{data:o}),s++);return s===0&&(a=i(this)),a}),t.registerHelper("if",function(e,r){return vt(e)&&(e=e.call(this)),!r.hash.includeZero&&!e||y.isEmpty(e)?r.inverse(this):r.fn(this)}),t.registerHelper("unless",function(e,r){return t.helpers.if.call(this,e,{fn:r.inverse,inverse:r.fn,hash:r.hash})}),t.registerHelper("with",function(e,r){vt(e)&&(e=e.call(this));var n=r.fn;if(y.isEmpty(e))return r.inverse(this);if(r.data&&r.ids){var i=X(r.data);i.contextPath=y.appendContextPath(r.data.contextPath,r.ids[0]),r={data:i}}return n(e,r)}),t.registerHelper("log",function(e,r){var n=r.data&&r.data.level!=null?parseInt(r.data.level,10):1;t.log(n,e)}),t.registerHelper("lookup",function(e,r){return e&&e[r]})}var J={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(J.level<=t){var r=J.methodMap[t];typeof console<"u"&&console[r]&&console[r].call(console,e)}}};_.logger=J;var se=J.log;_.log=se;var X=function(t){var e=y.extend({},t);return e._parent=t,e};_.createFrame=X});var oe=m(F=>{"use strict";c();var St=B(),D=N().default,or=M().COMPILER_REVISION,ae=M().REVISION_CHANGES,hr=M().createFrame;function lr(t){var e=t&&t[0]||1,r=or;if(e!==r)if(e<r){var n=ae[r],i=ae[e];throw new D("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+i+").")}else throw new D("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}F.checkRevision=lr;function pr(t,e){if(!e)throw new D("No environment passed to template");if(!t||!t.main)throw new D("Unknown template object: "+typeof t);e.VM.checkRevision(t.compiler);var r=function(s,a,o,p,h,u,l,w,j){h&&(p=St.extend({},p,h));var I=e.VM.invokePartial.call(this,s,o,p,u,l,w,j);if(I==null&&e.compile){var Tt={helpers:u,partials:l,data:w,depths:j};l[o]=e.compile(s,{data:w!==void 0,compat:t.compat},e),I=l[o](p,Tt)}if(I!=null){if(a){for(var k=I.split(`
`),E=0,st=k.length;E<st&&!(!k[E]&&E+1===st);E++)k[E]=a+k[E];I=k.join(`
`)}return I}else throw new D("The partial "+o+" could not be compiled when running in runtime-only mode")},n={lookup:function(s,a){for(var o=s.length,p=0;p<o;p++)if(s[p]&&s[p][a]!=null)return s[p][a]},lambda:function(s,a){return typeof s=="function"?s.call(a):s},escapeExpression:St.escapeExpression,invokePartial:r,fn:function(s){return t[s]},programs:[],program:function(s,a,o){var p=this.programs[s],h=this.fn(s);return a||o?p=$(this,s,h,a,o):p||(p=this.programs[s]=$(this,s,h)),p},data:function(s,a){for(;s&&a--;)s=s._parent;return s},merge:function(s,a){var o=s||a;return s&&a&&s!==a&&(o=St.extend({},a,s)),o},noop:e.VM.noop,compilerInfo:t.compiler},i=function(s,a){a=a||{};var o=a.data;i._setup(a),!a.partial&&t.useData&&(o=dr(s,o));var p;return t.useDepths&&(p=a.depths?[s].concat(a.depths):[s]),t.main.call(n,s,n.helpers,n.partials,o,p)};return i.isTop=!0,i._setup=function(s){s.partial?(n.helpers=s.helpers,n.partials=s.partials):(n.helpers=n.merge(s.helpers,e.helpers),t.usePartial&&(n.partials=n.merge(s.partials,e.partials)))},i._child=function(s,a,o){if(t.useDepths&&!o)throw new D("must pass parent depths");return $(n,s,t[s],a,o)},i}F.template=pr;function $(t,e,r,n,i){var s=function(a,o){return o=o||{},r.call(t,a,t.helpers,t.partials,o.data||n,i&&[a].concat(i))};return s.program=e,s.depth=i?i.length:0,s}F.program=$;function cr(t,e,r,n,i,s,a){var o={partial:!0,helpers:n,partials:i,data:s,depths:a};if(t===void 0)throw new D("The partial "+e+" could not be found");if(t instanceof Function)return t(r,o)}F.invokePartial=cr;function ur(){return""}F.noop=ur;function dr(t,e){return(!e||!("root"in e))&&(e=e?hr(e):{},e.root=t),e}});var ue=m(ce=>{"use strict";c();var he=M(),fr=ft().default,mr=N().default,kt=B(),le=oe(),pe=function(){var t=new he.HandlebarsEnvironment;return kt.extend(t,he),t.SafeString=fr,t.Exception=mr,t.Utils=kt,t.escapeExpression=kt.escapeExpression,t.VM=le,t.template=function(e){return le.template(e,t)},t},tt=pe();tt.create=pe;tt.default=tt;ce.default=tt});var xt=m(fe=>{"use strict";c();var de=N().default;function v(t){t=t||{},this.firstLine=t.first_line,this.firstColumn=t.first_column,this.lastColumn=t.last_column,this.lastLine=t.last_line}var W={ProgramNode:function(t,e,r){v.call(this,r),this.type="program",this.statements=t,this.strip=e},MustacheNode:function(t,e,r,n,i){if(v.call(this,i),this.type="mustache",this.strip=n,r!=null&&r.charAt){var s=r.charAt(3)||r.charAt(2);this.escaped=s!=="{"&&s!=="&"}else this.escaped=!!r;t instanceof W.SexprNode?this.sexpr=t:this.sexpr=new W.SexprNode(t,e),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(t,e,r){v.call(this,r),this.type="sexpr",this.hash=e;var n=this.id=t[0],i=this.params=t.slice(1);this.isHelper=!!(i.length||e),this.eligibleHelper=this.isHelper||n.isSimple},PartialNode:function(t,e,r,n,i){v.call(this,i),this.type="partial",this.partialName=t,this.context=e,this.hash=r,this.strip=n,this.strip.inlineStandalone=!0},BlockNode:function(t,e,r,n,i){v.call(this,i),this.type="block",this.mustache=t,this.program=e,this.inverse=r,this.strip=n,r&&!e&&(this.isInverse=!0)},RawBlockNode:function(t,e,r,n){if(v.call(this,n),t.sexpr.id.original!==r)throw new de(t.sexpr.id.original+" doesn't match "+r,this);e=new W.ContentNode(e,n),this.type="block",this.mustache=t,this.program=new W.ProgramNode([e],{},n)},ContentNode:function(t,e){v.call(this,e),this.type="content",this.original=this.string=t},HashNode:function(t,e){v.call(this,e),this.type="hash",this.pairs=t},IdNode:function(t,e){v.call(this,e),this.type="ID";for(var r="",n=[],i=0,s="",a=0,o=t.length;a<o;a++){var p=t[a].part;if(r+=(t[a].separator||"")+p,p===".."||p==="."||p==="this"){if(n.length>0)throw new de("Invalid path: "+r,this);p===".."?(i++,s+="../"):this.isScoped=!0}else n.push(p)}this.original=r,this.parts=n,this.string=n.join("."),this.depth=i,this.idName=s+this.string,this.isSimple=t.length===1&&!this.isScoped&&i===0,this.stringModeValue=this.string},PartialNameNode:function(t,e){v.call(this,e),this.type="PARTIAL_NAME",this.name=t.original},DataNode:function(t,e){v.call(this,e),this.type="DATA",this.id=t,this.stringModeValue=t.stringModeValue,this.idName="@"+t.stringModeValue},StringNode:function(t,e){v.call(this,e),this.type="STRING",this.original=this.string=this.stringModeValue=t},NumberNode:function(t,e){v.call(this,e),this.type="NUMBER",this.original=this.number=t,this.stringModeValue=Number(t)},BooleanNode:function(t,e){v.call(this,e),this.type="BOOLEAN",this.bool=t,this.stringModeValue=t==="true"},CommentNode:function(t,e){v.call(this,e),this.type="comment",this.comment=t,this.strip={inlineStandalone:!0}}};fe.default=W});var ge=m(me=>{"use strict";c();var gr=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(i,s,a,o,p,h,u){var l=h.length-1;switch(p){case 1:return o.prepareProgram(h[l-1].statements,!0),h[l-1];break;case 2:this.$=new o.ProgramNode(o.prepareProgram(h[l]),{},this._$);break;case 3:this.$=h[l];break;case 4:this.$=h[l];break;case 5:this.$=h[l];break;case 6:this.$=h[l];break;case 7:this.$=new o.ContentNode(h[l],this._$);break;case 8:this.$=new o.CommentNode(h[l],this._$);break;case 9:this.$=new o.RawBlockNode(h[l-2],h[l-1],h[l],this._$);break;case 10:this.$=new o.MustacheNode(h[l-1],null,"","",this._$);break;case 11:this.$=o.prepareBlock(h[l-3],h[l-2],h[l-1],h[l],!1,this._$);break;case 12:this.$=o.prepareBlock(h[l-3],h[l-2],h[l-1],h[l],!0,this._$);break;case 13:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 14:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 15:this.$={strip:o.stripFlags(h[l-1],h[l-1]),program:h[l]};break;case 16:this.$={path:h[l-1],strip:o.stripFlags(h[l-2],h[l])};break;case 17:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 18:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 19:this.$=new o.PartialNode(h[l-3],h[l-2],h[l-1],o.stripFlags(h[l-4],h[l]),this._$);break;case 20:this.$=new o.PartialNode(h[l-2],void 0,h[l-1],o.stripFlags(h[l-3],h[l]),this._$);break;case 21:this.$=new o.SexprNode([h[l-2]].concat(h[l-1]),h[l],this._$);break;case 22:this.$=new o.SexprNode([h[l]],null,this._$);break;case 23:this.$=h[l];break;case 24:this.$=new o.StringNode(h[l],this._$);break;case 25:this.$=new o.NumberNode(h[l],this._$);break;case 26:this.$=new o.BooleanNode(h[l],this._$);break;case 27:this.$=h[l];break;case 28:h[l-1].isHelper=!0,this.$=h[l-1];break;case 29:this.$=new o.HashNode(h[l],this._$);break;case 30:this.$=[h[l-2],h[l]];break;case 31:this.$=new o.PartialNameNode(h[l],this._$);break;case 32:this.$=new o.PartialNameNode(new o.StringNode(h[l],this._$),this._$);break;case 33:this.$=new o.PartialNameNode(new o.NumberNode(h[l],this._$));break;case 34:this.$=new o.DataNode(h[l],this._$);break;case 35:this.$=new o.IdNode(h[l],this._$);break;case 36:h[l-2].push({part:h[l],separator:h[l-1]}),this.$=h[l-2];break;case 37:this.$=[{part:h[l]}];break;case 38:this.$=[];break;case 39:h[l-1].push(h[l]);break;case 48:this.$=[];break;case 49:h[l-1].push(h[l]);break;case 52:this.$=[h[l]];break;case 53:h[l-1].push(h[l]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(i,s){throw new Error(i)},parse:function(i){var s=this,a=[0],o=[null],p=[],h=this.table,u="",l=0,w=0,j=0,I=2,Tt=1;this.lexer.setInput(i),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var k=this.lexer.yylloc;p.push(k);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function st(S){a.length=a.length-2*S,o.length=o.length-S,p.length=p.length-S}function Be(){var S;return S=s.lexer.lex()||1,typeof S!="number"&&(S=s.symbols_[S]||S),S}for(var g,at,C,b,Vr,ot,H={},G,x,jt,K;;){if(C=a[a.length-1],this.defaultActions[C]?b=this.defaultActions[C]:((g===null||typeof g>"u")&&(g=Be()),b=h[C]&&h[C][g]),typeof b>"u"||!b.length||!b[0]){var ht="";if(!j){K=[];for(G in h[C])this.terminals_[G]&&G>2&&K.push("'"+this.terminals_[G]+"'");this.lexer.showPosition?ht="Parse error on line "+(l+1)+`:
`+this.lexer.showPosition()+`
Expecting `+K.join(", ")+", got '"+(this.terminals_[g]||g)+"'":ht="Parse error on line "+(l+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(ht,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:k,expected:K})}}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+C+", token: "+g);switch(b[0]){case 1:a.push(g),o.push(this.lexer.yytext),p.push(this.lexer.yylloc),a.push(b[1]),g=null,at?(g=at,at=null):(w=this.lexer.yyleng,u=this.lexer.yytext,l=this.lexer.yylineno,k=this.lexer.yylloc,j>0&&j--);break;case 2:if(x=this.productions_[b[1]][1],H.$=o[o.length-x],H._$={first_line:p[p.length-(x||1)].first_line,last_line:p[p.length-1].last_line,first_column:p[p.length-(x||1)].first_column,last_column:p[p.length-1].last_column},E&&(H._$.range=[p[p.length-(x||1)].range[0],p[p.length-1].range[1]]),ot=this.performAction.call(H,u,w,l,this.yy,b[1],o,p),typeof ot<"u")return ot;x&&(a=a.slice(0,-1*x*2),o=o.slice(0,-1*x),p=p.slice(0,-1*x)),a.push(this.productions_[b[1]][0]),o.push(H.$),p.push(H._$),jt=h[a[a.length-2]][a[a.length-1]],a.push(jt);break;case 3:return!0}}return!0}},e=(function(){var n={EOF:1,parseError:function(s,a){if(this.yy.parser)this.yy.parser.parseError(s,a);else throw new Error(s)},setInput:function(i){return this._input=i,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var s=i.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var s=i.length,a=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s-1),this.offset-=s;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var p=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===o.length?this.yylloc.first_column:0)+o[o.length-a.length].length-a[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-s]),this},more:function(){return this._more=!0,this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),s=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+s+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,s,a,o,p,h;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),l=0;l<u.length&&(a=this._input.match(this.rules[u[l]]),!(a&&(!s||a[0].length>s[0].length)&&(s=a,o=l,!this.options.flex)));l++);return s?(h=s[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],i=this.performAction.call(this,this.yy,this,u[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return typeof s<"u"?s:this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(s){this.begin(s)}};return n.options={},n.performAction=function(s,a,o,p){function h(l,w){return a.yytext=a.yytext.substr(l,a.yyleng-w)}var u=p;switch(o){case 0:if(a.yytext.slice(-2)==="\\\\"?(h(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(h(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return a.yytext=a.yytext.substr(5,a.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return h(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return h(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return a.yytext=h(1,2).replace(/\\"/g,'"'),42;break;case 30:return a.yytext=h(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return a.yytext=h(1,2),50;break;case 37:return"INVALID";case 38:return 5}},n.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],n.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},n})();t.lexer=e;function r(){this.yy={}}return r.prototype=t,t.Parser=r,new r})();me.default=gr});var ve=m(et=>{"use strict";c();var vr=N().default;function br(t,e){return{left:t.charAt(2)==="~",right:e.charAt(e.length-3)==="~"}}et.stripFlags=br;function yr(t,e,r,n,i,s){if(t.sexpr.id.original!==n.path.original)throw new vr(t.sexpr.id.original+" doesn't match "+n.path.original,t);var a=r&&r.program,o={left:t.strip.left,right:n.strip.right,openStandalone:Et(e.statements),closeStandalone:wt((a||e).statements)};if(t.strip.right&&L(e.statements,null,!0),a){var p=r.strip;p.left&&A(e.statements,null,!0),p.right&&L(a.statements,null,!0),n.strip.left&&A(a.statements,null,!0),wt(e.statements)&&Et(a.statements)&&(A(e.statements),L(a.statements))}else n.strip.left&&A(e.statements,null,!0);return i?new this.BlockNode(t,a,e,o,s):new this.BlockNode(t,e,a,o,s)}et.prepareBlock=yr;function Sr(t,e){for(var r=0,n=t.length;r<n;r++){var i=t[r],s=i.strip;if(s){var a=wt(t,r,e,i.type==="partial"),o=Et(t,r,e),p=s.openStandalone&&a,h=s.closeStandalone&&o,u=s.inlineStandalone&&a&&o;s.right&&L(t,r,!0),s.left&&A(t,r,!0),u&&(L(t,r),A(t,r)&&i.type==="partial"&&(i.indent=/([ \t]+$)/.exec(t[r-1].original)?RegExp.$1:"")),p&&(L((i.program||i.inverse).statements),A(t,r)),h&&(L(t,r),A((i.inverse||i.program).statements))}}return t}et.prepareProgram=Sr;function wt(t,e,r){e===void 0&&(e=t.length);var n=t[e-1],i=t[e-2];if(!n)return r;if(n.type==="content")return(i||!r?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(n.original)}function Et(t,e,r){e===void 0&&(e=-1);var n=t[e+1],i=t[e+2];if(!n)return r;if(n.type==="content")return(i||!r?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(n.original)}function L(t,e,r){var n=t[e==null?0:e+1];if(!(!n||n.type!=="content"||!r&&n.rightStripped)){var i=n.string;n.string=n.string.replace(r?/^\s+/:/^[ \t]*\r?\n?/,""),n.rightStripped=n.string!==i}}function A(t,e,r){var n=t[e==null?t.length-1:e-1];if(!(!n||n.type!=="content"||!r&&n.leftStripped)){var i=n.string;return n.string=n.string.replace(r?/\s+$/:/[ \t]+$/,""),n.leftStripped=n.string!==i,n.leftStripped}}});var _t=m(Nt=>{"use strict";c();var Pt=ge().default,be=xt().default,kr=ve(),xr=B().extend;Nt.parser=Pt;var ye={};xr(ye,kr,be);function wr(t){return t.constructor===be.ProgramNode?t:(Pt.yy=ye,Pt.parse(t))}Nt.parse=wr});var nt=m(rt=>{"use strict";c();var It=N().default,Se=B().isArray,Er=[].slice;function At(){}rt.Compiler=At;At.prototype={compiler:At,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var r=0;r<e;r++){var n=this.opcodes[r],i=t.opcodes[r];if(n.opcode!==i.opcode||!ke(n.args,i.args))return!1}for(e=this.children.length,r=0;r<e;r++)if(!this.children[r].equals(t.children[r]))return!1;return!0},guid:0,compile:function(t,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds;var r=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},r)for(var n in r)this.options.knownHelpers[n]=r[n];return this.accept(t)},accept:function(t){return this[t.type](t)},program:function(t){for(var e=t.statements,r=0,n=e.length;r<n;r++)this.accept(e[r]);return this.isSimple=n===1,this.depths.list=this.depths.list.sort(function(i,s){return i-s}),this},compileProgram:function(t){var e=new this.compiler().compile(t,this.options),r=this.guid++,n;this.usePartial=this.usePartial||e.usePartial,this.children[r]=e;for(var i=0,s=e.depths.list.length;i<s;i++)n=e.depths.list[i],!(n<2)&&this.addDepth(n-1);return r},block:function(t){var e=t.mustache,r=t.program,n=t.inverse;r&&(r=this.compileProgram(r)),n&&(n=this.compileProgram(n));var i=e.sexpr,s=this.classifySexpr(i);s==="helper"?this.helperSexpr(i,r,n):s==="simple"?(this.simpleSexpr(i),this.opcode("pushProgram",r),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",i.id.original)):(this.ambiguousSexpr(i,r,n),this.opcode("pushProgram",r),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var e=t.pairs,r,n;for(this.opcode("pushHash"),r=0,n=e.length;r<n;r++)this.pushParam(e[r][1]);for(;r--;)this.opcode("assignToHash",e[r][0]);this.opcode("popHash")},partial:function(t){var e=t.partialName;this.usePartial=!0,t.hash?this.accept(t.hash):this.opcode("push","undefined"),t.context?this.accept(t.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",e.name,t.indent||""),this.opcode("append")},content:function(t){t.string&&this.opcode("appendContent",t.string)},mustache:function(t){this.sexpr(t.sexpr),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(t,e,r){var n=t.id,i=n.parts[0],s=e!=null||r!=null;this.opcode("getContext",n.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",r),this.ID(n),this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(t){var e=t.id;e.type==="DATA"?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,r){var n=this.setupFullMustacheParams(t,e,r),i=t.id,s=i.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",n.length,s);else{if(this.options.knownHelpersOnly)throw new It("You specified knownHelpersOnly, but used the unknown helper "+s,t);i.falsy=!0,this.ID(i),this.opcode("invokeHelper",n.length,i.original,i.isSimple)}},sexpr:function(t){var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0];e?this.opcode("lookupOnContext",t.parts,t.falsy,t.isScoped):this.opcode("pushContext")},DATA:function(t){this.options.data=!0,this.opcode("lookupData",t.id.depth,t.id.parts)},STRING:function(t){this.opcode("pushString",t.string)},NUMBER:function(t){this.opcode("pushLiteral",t.number)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:Er.call(arguments,1)})},addDepth:function(t){t!==0&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifySexpr:function(t){var e=t.isHelper,r=t.eligibleHelper,n=this.options;if(r&&!e){var i=t.id.parts[0];n.knownHelpers[i]?e=!0:n.knownHelpersOnly&&(r=!1)}return e?"helper":r?"ambiguous":"simple"},pushParams:function(t){for(var e=0,r=t.length;e<r;e++)this.pushParam(t[e])},pushParam:function(t){this.stringParams?(t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",t.stringModeValue,t.type),t.type==="sexpr"&&this.sexpr(t)):(this.trackIds&&this.opcode("pushId",t.type,t.idName||t.stringModeValue),this.accept(t))},setupFullMustacheParams:function(t,e,r){var n=t.params;return this.pushParams(n),this.opcode("pushProgram",e),this.opcode("pushProgram",r),t.hash?this.hash(t.hash):this.opcode("emptyHash"),n}};function Pr(t,e,r){if(t==null||typeof t!="string"&&t.constructor!==r.AST.ProgramNode)throw new It("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var n=r.parse(t),i=new r.Compiler().compile(n,e);return new r.JavaScriptCompiler().compile(i,e)}rt.precompile=Pr;function Nr(t,e,r){if(t==null||typeof t!="string"&&t.constructor!==r.AST.ProgramNode)throw new It("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var n;function i(){var a=r.parse(t),o=new r.Compiler().compile(a,e),p=new r.JavaScriptCompiler().compile(o,e,void 0,!0);return r.template(p)}var s=function(a,o){return n||(n=i()),n.call(this,a,o)};return s._setup=function(a){return n||(n=i()),n._setup(a)},s._child=function(a,o,p){return n||(n=i()),n._child(a,o,p)},s}rt.compile=Nr;function ke(t,e){if(t===e)return!0;if(Se(t)&&Se(e)&&t.length===e.length){for(var r=0;r<t.length;r++)if(!ke(t[r],e[r]))return!1;return!0}}});var Pe=m(Ee=>{"use strict";c();var _r=M().COMPILER_REVISION,Ar=M().REVISION_CHANGES,Ct=N().default;function U(t){this.value=t}function O(){}O.prototype={nameLookup:function(t,e){return O.isValidJavaScriptVariableName(e)?t+"."+e:t+"['"+e+"']"},depthedLookup:function(t){return this.aliases.lookup="this.lookup",'lookup(depths, "'+t+'")'},compilerInfo:function(){var t=_r,e=Ar[t];return[t,e]},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,e,r,n){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!n,this.name=this.environment.name,this.isChild=!!r,this.context=r||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.depths.list.length||this.options.compat;var i=t.opcodes,s,a,o;for(a=0,o=i.length;a<o;a++)s=i[a],this[s.opcode].apply(this,s.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Ct("Compile completed with content left on stack");var p=this.createFunctionContext(n);if(this.isChild)return p;var h={compiler:this.compilerInfo(),main:p},u=this.context.programs;for(a=0,o=u.length;a<o;a++)u[a]&&(h[a]=u[a]);return this.environment.usePartial&&(h.usePartial=!0),this.options.data&&(h.useData=!0),this.useDepths&&(h.useDepths=!0),this.options.compat&&(h.compat=!0),n||(h.compiler=JSON.stringify(h.compiler),h=this.objectLiteral(h)),h},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(t){var e="",r=this.stackVars.concat(this.registers.list);r.length>0&&(e+=", "+r.join(", "));for(var n in this.aliases)this.aliases.hasOwnProperty(n)&&(e+=", "+n+"="+this.aliases[n]);var i=["depth0","helpers","partials","data"];this.useDepths&&i.push("depths");var s=this.mergeSource(e);return t?(i.push(s),Function.apply(this,i)):"function("+i.join(",")+`) {
  `+s+"}"},mergeSource:function(t){for(var e="",r,n=!this.forceBuffer,i,s=0,a=this.source.length;s<a;s++){var o=this.source[s];o.appendToBuffer?r?r=r+`
    + `+o.content:r=o.content:(r&&(e?e+="buffer += "+r+`;
  `:(i=!0,e=r+`;
  `),r=void 0),e+=o+`
  `,this.environment.isSimple||(n=!1))}return n?(r||!e)&&(e+="return "+(r||'""')+`;
`):(t+=", buffer = "+(i?"":this.initializeBuffer()),r?e+="return buffer + "+r+`;
`:e+=`return buffer;
`),t&&(e="var "+t.substring(2)+(i?"":`;
  `)+e),e},blockValue:function(t){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams(t,0,e);var r=this.popStack();e.splice(1,0,r),this.push("blockHelperMissing.call("+e.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams("",0,t,!0),this.flushInline();var e=this.topStack();t.splice(1,0,e),this.pushSource("if (!"+this.lastHelper+") { "+e+" = blockHelperMissing.call("+t.join(", ")+"); }")},appendContent:function(t){this.pendingContent&&(t=this.pendingContent+t),this.pendingContent=t},append:function(){this.flushInline();var t=this.popStack();this.pushSource("if ("+t+" != null) { "+this.appendToBuffer(t)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,r){var n=0,i=t.length;for(!r&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[n++])):this.pushContext();n<i;n++)this.replaceStack(function(s){var a=this.nameLookup(s,t[n],"context");return e?" && "+a:" != null ? "+a+" : "+s})},lookupData:function(t,e){t?this.pushStackLiteral("this.data(data, "+t+")"):this.pushStackLiteral("data");for(var r=e.length,n=0;n<r;n++)this.replaceStack(function(i){return" && "+this.nameLookup(i,e[n],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),e!=="sexpr"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+t.ids.join(",")+"}"),this.stringParams&&(this.push("{"+t.contexts.join(",")+"}"),this.push("{"+t.types.join(",")+"}")),this.push(`{
    `+t.values.join(`,
    `)+`
  }`)},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},invokeHelper:function(t,e,r){this.aliases.helperMissing="helpers.helperMissing";var n=this.popStack(),i=this.setupHelper(t,e),s=(r?i.name+" || ":"")+n+" || helperMissing";this.push("(("+s+").call("+i.callParams+"))")},invokeKnownHelper:function(t,e){var r=this.setupHelper(t,e);this.push(r.name+".call("+r.callParams+")")},invokeAmbiguous:function(t,e){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var r=this.popStack();this.emptyHash();var n=this.setupHelper(0,t,e),i=this.lastHelper=this.nameLookup("helpers",t,"helper");this.push("((helper = (helper = "+i+" || "+r+") != null ? helper : helperMissing"+(n.paramsInit?"),("+n.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+n.callParams+") : helper))")},invokePartial:function(t,e){var r=[this.nameLookup("partials",t,"partial"),"'"+e+"'","'"+t+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?r.push("data"):this.options.compat&&r.push("undefined"),this.options.compat&&r.push("depths"),this.push("this.invokePartial("+r.join(", ")+")")},assignToHash:function(t){var e=this.popStack(),r,n,i;this.trackIds&&(i=this.popStack()),this.stringParams&&(n=this.popStack(),r=this.popStack());var s=this.hash;r&&s.contexts.push("'"+t+"': "+r),n&&s.types.push("'"+t+"': "+n),i&&s.ids.push("'"+t+"': "+i),s.values.push("'"+t+"': ("+e+")")},pushId:function(t,e){t==="ID"||t==="DATA"?this.pushString(e):t==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:O,compileChildren:function(t,e){for(var r=t.children,n,i,s=0,a=r.length;s<a;s++){n=r[s],i=new this.compiler;var o=this.matchExistingProgram(n);o==null?(this.context.programs.push(""),o=this.context.programs.length,n.index=o,n.name="program"+o,this.context.programs[o]=i.compile(n,e,this.context,!this.precompile),this.context.environments[o]=n,this.useDepths=this.useDepths||i.useDepths):(n.index=o,n.name="program"+o)}},matchExistingProgram:function(t){for(var e=0,r=this.context.environments.length;e<r;e++){var n=this.context.environments[e];if(n&&n.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],r=e.depths.list,n=this.useDepths,i,s=[e.index,"data"];return n&&s.push("depths"),"this.program("+s.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new U(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var e=this.incrStack();return this.pushSource(e+" = "+t+";"),this.compileStack.push(e),e},replaceStack:function(t){var e="",r=this.isInline(),n,i,s;if(!this.isInline())throw new Ct("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof U)e=n=a.value,s=!0;else{i=!this.stackSlot;var o=i?this.incrStack():this.topStackName();e="("+this.push(o)+" = "+a+")",n=this.topStack()}var p=t.call(this,n);s||this.popStack(),i&&this.stackSlot--,this.push("("+e+p+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var e=0,r=t.length;e<r;e++){var n=t[e];n instanceof U?this.compileStack.push(n):this.pushStack(n)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),r=(e?this.inlineStack:this.compileStack).pop();if(!t&&r instanceof U)return r.value;if(!e){if(!this.stackSlot)throw new Ct("Invalid stack pop");this.stackSlot--}return r},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof U?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(this.quotedString(r)+":"+t[r]);return"{"+e.join(",")+"}"},setupHelper:function(t,e,r){var n=[],i=this.setupParams(e,t,n,r),s=this.nameLookup("helpers",e,"helper");return{params:n,paramsInit:i,name:s,callParams:[this.contextName(0)].concat(n).join(", ")}},setupOptions:function(t,e,r){var n={},i=[],s=[],a=[],o,p,h;n.name=this.quotedString(t),n.hash=this.popStack(),this.trackIds&&(n.hashIds=this.popStack()),this.stringParams&&(n.hashTypes=this.popStack(),n.hashContexts=this.popStack()),p=this.popStack(),h=this.popStack(),(h||p)&&(h||(h="this.noop"),p||(p="this.noop"),n.fn=h,n.inverse=p);for(var u=e;u--;)o=this.popStack(),r[u]=o,this.trackIds&&(a[u]=this.popStack()),this.stringParams&&(s[u]=this.popStack(),i[u]=this.popStack());return this.trackIds&&(n.ids="["+a.join(",")+"]"),this.stringParams&&(n.types="["+s.join(",")+"]",n.contexts="["+i.join(",")+"]"),this.options.data&&(n.data="data"),n},setupParams:function(t,e,r,n){var i=this.objectLiteral(this.setupOptions(t,e,r));return n?(this.useRegister("options"),r.push("options"),"options="+i):(r.push(i),"")}};var xe="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),Ir=O.RESERVED_WORDS={};for(it=0,we=xe.length;it<we;it++)Ir[xe[it]]=!0;var it,we;O.isValidJavaScriptVariableName=function(t){return!O.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};Ee.default=O});var Ae=m(_e=>{"use strict";c();var V=ue().default,Cr=xt().default,Mr=_t().parser,Dr=_t().parse,Lr=nt().Compiler,Or=nt().compile,Tr=nt().precompile,jr=Pe().default,Hr=V.create,Ne=function(){var t=Hr();return t.compile=function(e,r){return Or(e,r,t)},t.precompile=function(e,r){return Tr(e,r,t)},t.AST=Cr,t.Compiler=Lr,t.JavaScriptCompiler=jr,t.Parser=Mr,t.parse=Dr,t};V=Ne();V.create=Ne;V.default=V;_e.default=V});var Dt=m(Ie=>{"use strict";c();function Mt(){}Mt.prototype={constructor:Mt,accept:function(t){return this[t.type](t)}};Ie.default=Mt});var Ce=m(Lt=>{"use strict";c();var Rr=Dt().default;function Br(t){return new f().accept(t)}Lt.print=Br;function f(){this.padding=0}Lt.PrintVisitor=f;f.prototype=new Rr;f.prototype.pad=function(t){for(var e="",r=0,n=this.padding;r<n;r++)e=e+"  ";return e=e+t+`
`,e};f.prototype.program=function(t){var e="",r=t.statements,n,i;for(n=0,i=r.length;n<i;n++)e=e+this.accept(r[n]);return this.padding--,e};f.prototype.block=function(t){var e="";return e=e+this.pad("BLOCK:"),this.padding++,e=e+this.accept(t.mustache),t.program&&(e=e+this.pad("PROGRAM:"),this.padding++,e=e+this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e=e+this.pad("{{^}}"),this.padding++,e=e+this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e};f.prototype.sexpr=function(t){for(var e=t.params,r=[],n,i=0,s=e.length;i<s;i++)r.push(this.accept(e[i]));return e="["+r.join(", ")+"]",n=t.hash?" "+this.accept(t.hash):"",this.accept(t.id)+" "+e+n};f.prototype.mustache=function(t){return this.pad("{{ "+this.accept(t.sexpr)+" }}")};f.prototype.partial=function(t){var e=this.accept(t.partialName);return t.context&&(e+=" "+this.accept(t.context)),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")};f.prototype.hash=function(t){for(var e=t.pairs,r=[],n,i,s=0,a=e.length;s<a;s++)n=e[s][0],i=this.accept(e[s][1]),r.push(n+"="+i);return"HASH{"+r.join(", ")+"}"};f.prototype.STRING=function(t){return'"'+t.string+'"'};f.prototype.NUMBER=function(t){return"NUMBER{"+t.number+"}"};f.prototype.BOOLEAN=function(t){return"BOOLEAN{"+t.bool+"}"};f.prototype.ID=function(t){var e=t.parts.join("/");return t.parts.length>1?"PATH:"+e:"ID:"+e};f.prototype.PARTIAL_NAME=function(t){return"PARTIAL:"+t.name};f.prototype.DATA=function(t){return"@"+this.accept(t.id)};f.prototype.content=function(t){return this.pad("CONTENT[ '"+t.string+"' ]")};f.prototype.comment=function(t){return this.pad("{{! '"+t.comment+"' }}")}});var Le=m((wn,De)=>{c();var z=Ae().default;z.Visitor=Dt().default;var Me=Ce();z.PrintVisitor=Me.PrintVisitor;z.print=Me.print;De.exports=z;typeof q<"u"&&q.extensions&&(Ot=function(t,e){var r=(dt(),Bt(ut)),n=r.readFileSync(e,"utf8");t.exports=z.compile(n)},q.extensions[".handlebars"]=Ot,q.extensions[".hbs"]=Ot);var Ot});var He=m((Nn,je)=>{c();var Oe=(dt(),Bt(ut)),Te=Le();function Fr(t){var e=Oe.readFileSync("//style.css","utf-8"),r=Oe.readFileSync("//resume.template","utf-8"),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return Te.registerHelper("date",function(i){var s=new Date(i);return n[s.getMonth()]+" "+s.getFullYear()}),Te.compile(r)({css:e,resume:t})}je.exports={render:Fr}});c();var T=ze(He(),1),Re=T.default??T,An=Re.render??T.render,In=Re.pdfRenderOptions??T.pdfRenderOptions;export{In as pdfRenderOptions,An as render};
