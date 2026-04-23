var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Mi=Object.create;var dn=Object.defineProperty;var Pi=Object.getOwnPropertyDescriptor;var Ri=Object.getOwnPropertyNames;var Ti=Object.getPrototypeOf,Ui=Object.prototype.hasOwnProperty;var Fe=(c,x)=>()=>(c&&(x=c(c=0)),x);var Gn=(c,x)=>()=>(x||c((x={exports:{}}).exports,x),x.exports),qi=(c,x)=>{for(var _ in x)dn(c,_,{get:x[_],enumerable:!0})},_e=(c,x,_,f)=>{if(x&&typeof x=="object"||typeof x=="function")for(let $ of Ri(x))!Ui.call(c,$)&&$!==_&&dn(c,$,{get:()=>x[$],enumerable:!(f=Pi(x,$))||f.enumerable});return c};var Oi=(c,x,_)=>(_=c!=null?Mi(Ti(c)):{},_e(x||!c||!c.__esModule?dn(_,"default",{value:c,enumerable:!0}):_,c)),Li=c=>_e(dn({},"__esModule",{value:!0}),c);var lt=Fe(()=>{});var Ue={};qi(Ue,{createReadStream:()=>Re,createWriteStream:()=>Te,default:()=>Ni,existsSync:()=>Ae,lstatSync:()=>ke,mkdirSync:()=>je,readFileSync:()=>Ce,readdirSync:()=>Ee,rmdirSync:()=>Pe,statSync:()=>Vn,unlinkSync:()=>Me,writeFileSync:()=>Ie});function Wn(c){return String(c).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function De(c){var x=Wn(c);if(gn[x]!==void 0)return gn[x];for(var _=Object.keys(gn),f=0;f<_.length;f++)if(x.endsWith("/"+_[f])||x===_[f])return gn[_[f]]}function Kn(c){var x=Wn(c);if((x===""||x===".")&&Mt["."]!==void 0)return Mt["."];if(Mt[x]!==void 0)return Mt[x];for(var _=Object.keys(Mt),f=0;f<_.length;f++)if(x.endsWith("/"+_[f])||x===_[f])return Mt[_[f]]}var gn,Mt,Ce,Ee,Ae,Ie,je,Vn,ke,Me,Pe,Re,Te,Ni,qe=Fe(()=>{"use strict";lt();gn={"index.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>James &#39;J.C.&#39; Jones</title>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.css" rel="stylesheet">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">   
    <style>
		#contactHeader {
			font-size:1em;
		}
		#contactHeader .fa {
			margin-left: 5px;
			margin-right: 5px;
			font-size: 1.7em;
		}
		.fa {
			font-size:2em;
		}
		.fa-facebook-square {
			color: #3b5998;
		}
		.fa-youtube-square {
			color: #bb0000;
		}
		.fa-google-plus-square {
			color: #d34836;
		}
		.fa-behance-square {
			color: #1769ff;
		}
		.fa-vimeo-square {
			color: #1ab7ea;
		}
		.fa-linkedin-square {
			color: #007bb6;
		}
		.fa-pinterest-square {
			color: #cb2027;
		}
		.fa-envelope-square {
			color: #1ab7ea;
		}
		.fa-pencil-square {
			color: #cb2027;	
		}
		.fa-codepen {
			font-size: 1em;
			padding-left: 0.35em;
		}
		.fa-stack {
			font-size:1em;
			display:inline;
		}
		.fa-twitter-square {
			color: #4099FF;
		}
		.fa-github-square {
			color: #000;
		}
		.fa-flickr {
			color: #ff0084
		}
		.fa-rss-square {
			color: #FF6600;
		}
		.ico {
			font-size: 1em;
		}
		.main {
			margin 0 auto;
			margin-left: 10%;
			margin-right: 10%;
			margin-bottom: 50px;
		}
		.skills {
			margin-bottom: 10px;
		}
		.keywords {
			background-color: #333333;
			color:#fff;
			padding: 6px;
			font-size: 1.2em;
		}
		.job .glyphicon {
			padding-right: 5px;	
		}
		.summary {
			border-left: 2px solid #AAAAAA;
			padding-left: 5px;
			font-size: 1.0em;
		}
		#references blockquote {
			font-size: 1.0em;
		}
		h2 {
			font-size: 26px;
		}
		body {
			margin-bottom: 1em;
		}
		.skilllabel {
			color: #000;
			background-color: #CCC;
		}

		@media print {
		  a[href]:after {
		    content:none;
		  }

		  body {
		  	margin: 0;
		  	padding: 0;
		  }

		  .printblock {
		  	page-break-inside: avoid;
		  }
		}
  
    </style>
  </head>
  <body>
	<div class="container-fluid">
		<div class="row">
			<div class="col-xs-12 text-center">
					<h1 class="text-uppercase">James &#39;J.C.&#39; Jones
						<br/>
						<small>Software Engineer</small>
					</h1>
			</div>
		</div>		
		<div class="row" id="contactHeader">
			<div id="contact" class="col-xs-6 text-right">
				<address>
					<strong>Tempe</strong>, Arizona <i class="fa fa-map-marker"></i><br/>
						+1.361.433.5521 <i class="fa fa-phone"></i><br/>
				  		<a href= "mailto:james.jc.jones@gmail.com" target= "_blanks">james.jc.jones@gmail.com</a> <i class="fa fa-envelope-square"></i><br/>
						<a href="https:&#x2F;&#x2F;tacticalsecret.com&#x2F;" target="_blank">https:&#x2F;&#x2F;tacticalsecret.com&#x2F;</a> <i class="fa fa-pencil-square"></i></br>
				</address>
			</div>
			<div id="profiles" class="col-xs-6">
				<a href="https:&#x2F;&#x2F;github.com&#x2F;jcjones&#x2F;" target="_blank"><i class="fa fa-github-square"></i>https:&#x2F;&#x2F;github.com&#x2F;jcjones&#x2F;</a></br>
				<a href="https:&#x2F;&#x2F;www.twitter.com&#x2F;jamespugjones" target="_blank"><i class="fa fa-twitter-square"></i>https:&#x2F;&#x2F;www.twitter.com&#x2F;jamespugjones</a></br>
				<a href="https:&#x2F;&#x2F;www.linkedin.com&#x2F;in&#x2F;jamesjcjones" target="_blank"><i class="fa fa-linkedin-square"></i>https:&#x2F;&#x2F;www.linkedin.com&#x2F;in&#x2F;jamesjcjones</a></br>
				<a href="https:&#x2F;&#x2F;angel.co&#x2F;james-jc-jones" target="_blank"><i class="fa fa-angellist"></i>https:&#x2F;&#x2F;angel.co&#x2F;james-jc-jones</a></br>
			</div>
		</div>

		<div id="about" class="row">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<h2><i class="fa fa-user ico"></i> ABOUT</h2>
				<p>
					J.C. is a distributed computing and cryptography geek. He co-founded an information security startup in Chandler, AZ; worked for the Air Force Research Lab, ViaSat, and General Dynamics C4S as a software engineer; and has been an active contributor to the Open Source Software community. Additionally, he holds several U.S. patents in the information security field. His goal in any project is to design away complexity wherever possible. Overall, J.C. loves solving hard problems with computer systems and making the world a better place through software.
				</p>
			</div>
		</div>
		<div id="work" class="row">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<h2><i class="fa fa-suitcase ico"></i> WORK EXPERIENCE</h2>
					<div class="job printblock">
						<h3>Security Engineer, Mozilla</h3>
						<h4>
							August 2014 \u2013 Present

							<small class="pull-right"><a href="https:&#x2F;&#x2F;www.mozilla.org" target= "_blank"><i class="
	glyphicon glyphicon-globe"></i>https:&#x2F;&#x2F;www.mozilla.org</a></small>
						</h4>
						
						<p>J.C. is developing next-generation PKI functionality to increase user soverignity online.</p>
						<h4>HIGHLIGHTS</h4>
						<ul>
							<li>Maintaining the NSS security library used by Google, RedHat, Mozilla, and others.</li>
							<li>Providing support to the Internet Security Research Group on behalf of Mozilla.</li>
						</ul>
					</div>
					<div class="job printblock">
						<h3>Security Architect, Internet Security Research Group</h3>
						<h4>
							August 2014 \u2013 Present

							<small class="pull-right"><a href="https:&#x2F;&#x2F;letsencrypt.org" target= "_blank"><i class="
	glyphicon glyphicon-globe"></i>https:&#x2F;&#x2F;letsencrypt.org</a></small>
						</h4>
						
						<p>J.C. is responsibile for the design and implementation of the Let&#39;s Encrypt Certificate Authority network architecture, removing the barriers to secure communication over the Web.</p>
					</div>
					<div class="job printblock">
						<h3>Co-Founder and Lead Software Engineer, SAIFE, Inc.</h3>
						<h4>
							May 2008 \u2013 November 2014

							<small class="pull-right"><a href="https:&#x2F;&#x2F;saifeinc.com" target= "_blank"><i class="
	glyphicon glyphicon-globe"></i>https:&#x2F;&#x2F;saifeinc.com</a></small>
						</h4>
						
						<p>J.C. designed and is responsible for the SAIFE framework, the core technology around which SAIFE, Inc. was built. J.C. provides leadership for the product&#39;s software and systems architecture, and is responsible for the availability of SAIFE&#39;s worldwide Internet security infrastructure, TIPRNET, used by the growing SAIFE partner community.</p>
						<h4>HIGHLIGHTS</h4>
						<ul>
							<li>Built the company on technology from a project in graduate school.</li>
							<li>Re-imagined Public Key Infrastructures to blend Web of Trust techniques to increase usability without compromising security.</li>
							<li>Designed, and hired the DevOps team to build, a globally-redundant all-black information security architecture.</li>
							<li>Built upon SELinux, Puppet, and Ansible technologies using CentOS on respected cloud providers.</li>
							<li>Led internal red-team testing on the network and follow-on improvements, resulting in &#39;all-clear&#39; analysis from US DoD JVAB (Joint Vulnerability Assessment Branch).</li>
							<li>Sold the technology into U.S. Special Operations Command and similar communities.</li>
						</ul>
					</div>
					<div class="job printblock">
						<h3>Software Engineer Consultant, ViaSat</h3>
						<h4>
							May 2008 \u2013 June 2009

							<small class="pull-right"><a href="http:&#x2F;&#x2F;www.viasat.com" target= "_blank"><i class="
	glyphicon glyphicon-globe"></i>http:&#x2F;&#x2F;www.viasat.com</a></small>
						</h4>
						
						<p>During the infancy of the SAIFE technology, J.C. consulted at ViaSat, providing expertise to help with one of their embedded cryptography products destined for Department of Defense use.</p>
					</div>
					<div class="job printblock">
						<h3>Software Engineer, General Dynamics C4 Systems</h3>
						<h4>
							January 2007 \u2013 May 2008

							<small class="pull-right"><a href="http:&#x2F;&#x2F;www.gdc4s.com" target= "_blank"><i class="
	glyphicon glyphicon-globe"></i>http:&#x2F;&#x2F;www.gdc4s.com</a></small>
						</h4>
						
						<p>After completing his Master&#39;s degree, J.C. moved to Arizona to work at General Dynamics C4S, taking with him his experience from working at the US Air Force Research Laboratory on military encryption projects.</p>
						<h4>HIGHLIGHTS</h4>
						<ul>
							<li>Re-designed and re-implemented a malfunctioning cryptographic management system late in the MUOS project. The resulting system was substantially less complex and helped ensure an on-time delivery.</li>
						</ul>
					</div>
					<div class="job printblock">
						<h3>Research Assistant, Bureau of Economic and Business Research</h3>
						<h4>
							May 2006 \u2013 December 2006

							<small class="pull-right"><a href="http:&#x2F;&#x2F;www.bebr.ufl.edu&#x2F;" target= "_blank"><i class="
	glyphicon glyphicon-globe"></i>http:&#x2F;&#x2F;www.bebr.ufl.edu&#x2F;</a></small>
						</h4>
						
						<p></p>
					</div>
					<div class="job printblock">
						<h3>Software Engineer, Jacobs Technology &#x2F; US Air Force Research Lab</h3>
						<h4>
							May 2002 \u2013 April 2006

							<small class="pull-right"><a href="http:&#x2F;&#x2F;www.eglin.af.mil&#x2F;units&#x2F;afrlmunitionsdirectorate&#x2F;" target= "_blank"><i class="
	glyphicon glyphicon-globe"></i>http:&#x2F;&#x2F;www.eglin.af.mil&#x2F;units&#x2F;afrlmunitionsdirectorate&#x2F;</a></small>
						</h4>
						
						<p></p>
					</div>
			</div>
		</div>
		<div id="skills" class="row">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<h2><i class="fa fa-tasks ico"></i> SKILLS</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<div class="row printblock">
					<div class="col-xs-4 col-md-4 col-lg-6">
						<h5 class="skills">Distributed Computing</h5>
						<span class="label skilllabel">Distributed Design</span>
						<span class="label skilllabel">Hadoop</span>
						<span class="label skilllabel">CouchDB</span>
						<span class="label skilllabel">Concurrent Programming</span>
						<span class="label skilllabel">HornetQ</span>
					</div>
					<div class="col-xs-4 col-md-4 col-lg-6">
						<h5 class="skills">Cryptography</h5>
						<span class="label skilllabel">FIPS 140-2</span>
						<span class="label skilllabel">Information Security</span>
						<span class="label skilllabel">OpenSSL Development</span>
						<span class="label skilllabel">Asymmetric Cryptography</span>
						<span class="label skilllabel">Symmetric Cryptography</span>
					</div>
					<div class="col-xs-4 col-md-4 col-lg-6">
						<h5 class="skills">Software Engineering</h5>
						<span class="label skilllabel">Git</span>
						<span class="label skilllabel">Subversion</span>
						<span class="label skilllabel">Gerrit &#x2F; Code Review Process</span>
						<span class="label skilllabel">Agile Development Process</span>
						<span class="label skilllabel">Rational Unified Process</span>
						<span class="label skilllabel">Test Driven Development</span>
						<span class="label skilllabel">Design Patterns</span>
						<span class="label skilllabel">UML</span>
					</div>
					<div class="col-xs-4 col-md-4 col-lg-6">
						<h5 class="skills">Web Development</h5>
						<span class="label skilllabel">Spring MVC</span>
						<span class="label skilllabel">REST API Design</span>
						<span class="label skilllabel">MySQL</span>
						<span class="label skilllabel">PostgreSQL</span>
						<span class="label skilllabel">Python</span>
					</div>
					<div class="col-xs-4 col-md-4 col-lg-6">
						<h5 class="skills">Linux Administration</h5>
						<span class="label skilllabel">CentOS</span>
						<span class="label skilllabel">RPM Development</span>
						<span class="label skilllabel">Kernel Driver Development</span>
						<span class="label skilllabel">Puppet</span>
						<span class="label skilllabel">Ansible</span>
						<span class="label skilllabel">IPTables</span>
					</div>
					<div class="col-xs-4 col-md-4 col-lg-6">
						<h5 class="skills">Network Administration</h5>
						<span class="label skilllabel">SonicWALL Firewalls</span>
						<span class="label skilllabel">VMWare vSphere 5</span>
						<span class="label skilllabel">Windows Server 2008R2</span>
						<span class="label skilllabel">Misuse of Cat6</span>
					</div>
				</div>
			</div>
		</div>
		<div id="education" class="row printblock">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<h2><i class="fa fa-university ico"></i> EDUCATION</h2>
				<div>
					<h4>
						Master of Science 
						<small>in Computer Science</small>
					</h4>
					<p class="pull-right"><i class="fa fa-graduation-cap ico"></i> University of Florida</p>
					<h5>August 2005 \u2013 December 2006</h5>
					
				</div>
				<div>
					<h4>
						Bachelor of Science 
						<small>in Computer Science</small>
					</h4>
					<p class="pull-right"><i class="fa fa-graduation-cap ico"></i> University of Florida</p>
					<h5>August 2002 \u2013 December 2005</h5>
					
				</div>
				<div>
					<h4>
						International Baccalaureate Diploma 
						
					</h4>
					<p class="pull-right"><i class="fa fa-graduation-cap ico"></i> International Baccalaureate Organization</p>
					<h5>August 2000 \u2013 May 2002</h5>
					
				</div>
			</div>
		</div>
		<div id="publications" class="row">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<h2><i class="fa fa-book ico"></i> PUBLICATIONS / PATENTS</h2>
					<div class="row printblock">
						<div class="col-xs-8">
							<h4>
								<small>Patent:</small>
								Secure Communication System for Mobile Devices
							</h4>
							<p class="summary">A system for improving PKI performance and reliability by re-imagining the standard protocols into a disadvantaged and unreliable network architecture. This is a core technology of SAIFE\xAE.</p>
							<footer>
								<a href= "http:&#x2F;&#x2F;www.google.com&#x2F;patents&#x2F;US8392699" target= "_blank">http:&#x2F;&#x2F;www.google.com&#x2F;patents&#x2F;US8392699</a>
							</footer>
						</div>
						<div class="col-xs-4 text-right">
							<h5>Issued 05 March  2013</h5>
								<p>
									<i class="fa fa-lightbulb-o ico"></i> US 8,392,699
								</p>
						</div>								
					</div>
					<div class="row printblock">
						<div class="col-xs-8">
							<h4>
								<small>Patent:</small>
								Technique for Bypassing an IP PBX
							</h4>
							<p class="summary">A system for establishing tunnels for data transmission without requiring a central look-up database, such as DNS, a PBX, or HLR.</p>
							<footer>
								<a href= "http:&#x2F;&#x2F;www.google.com&#x2F;patents&#x2F;US8588746" target= "_blank">http:&#x2F;&#x2F;www.google.com&#x2F;patents&#x2F;US8588746</a>
							</footer>
						</div>
						<div class="col-xs-4 text-right">
							<h5>Issued 19 November  2013</h5>
								<p>
									<i class="fa fa-lightbulb-o ico"></i> US 8,588,746
								</p>
						</div>								
					</div>
					<div class="row printblock">
						<div class="col-xs-8">
							<h4>
								<small>Article:</small>
								Agile Certificate Management and Trust Federation for Large Mobile Deployments
							</h4>
							<p class="summary"></p>
							<footer>
								<a href= "http:&#x2F;&#x2F;t.co&#x2F;raVcdGAK" target= "_blank">http:&#x2F;&#x2F;t.co&#x2F;raVcdGAK</a>
							</footer>
						</div>
						<div class="col-xs-4 text-right">
							<h5> 24 August  2012</h5>
								<p>
									<i class="fa fa-bookmark ico"></i> IEEE Computing Now
								</p>
						</div>								
					</div>
					<div class="row printblock">
						<div class="col-xs-8">
							<h4>
								<small>Patent:</small>
								Field Provisioning a Device to a Secure Enclave
							</h4>
							<p class="summary"></p>
							<footer>
								<a href= "https:&#x2F;&#x2F;www.google.com&#x2F;patents&#x2F;US20130191897" target= "_blank">https:&#x2F;&#x2F;www.google.com&#x2F;patents&#x2F;US20130191897</a>
							</footer>
						</div>
						<div class="col-xs-4 text-right">
							<h5>Filed 28 December  2012</h5>
								<p>
									<i class="fa fa-lightbulb-o ico"></i> US 20130191897
								</p>
						</div>								
					</div>
					<div class="row printblock">
						<div class="col-xs-8">
							<h4>
								<small>Patent:</small>
								Geospatial Cryptography
							</h4>
							<p class="summary"></p>
							<footer>
								<a href= "https:&#x2F;&#x2F;www.google.com&#x2F;patents&#x2F;US20140112472" target= "_blank">https:&#x2F;&#x2F;www.google.com&#x2F;patents&#x2F;US20140112472</a>
							</footer>
						</div>
						<div class="col-xs-4 text-right">
							<h5>Filed 19 October  2012</h5>
								<p>
									<i class="fa fa-lightbulb-o ico"></i> US 20140112472
								</p>
						</div>								
					</div>
					<div class="row printblock">
						<div class="col-xs-8">
							<h4>
								<small>Patent:</small>
								Certificate Authority Server Protection
							</h4>
							<p class="summary"></p>
							<footer>
								<a href= "https:&#x2F;&#x2F;www.google.com&#x2F;patents&#x2F;US20140108785" target= "_blank">https:&#x2F;&#x2F;www.google.com&#x2F;patents&#x2F;US20140108785</a>
							</footer>
						</div>
						<div class="col-xs-4 text-right">
							<h5>Filed 17 June  2012</h5>
								<p>
									<i class="fa fa-lightbulb-o ico"></i> US 20140108785
								</p>
						</div>								
					</div>
					<div class="row printblock">
						<div class="col-xs-8">
							<h4>
								<small>Patent:</small>
								Secure Non-Geospatially Derived Device Presence Information
							</h4>
							<p class="summary"></p>
							<footer>
								<a href= "https:&#x2F;&#x2F;www.google.com&#x2F;patents&#x2F;US20140053255" target= "_blank">https:&#x2F;&#x2F;www.google.com&#x2F;patents&#x2F;US20140053255</a>
							</footer>
						</div>
						<div class="col-xs-4 text-right">
							<h5>Filed 17 August  2013</h5>
								<p>
									<i class="fa fa-lightbulb-o ico"></i> US 20140053255
								</p>
						</div>								
					</div>
			</div>
		</div>
	</div> <!-- container -->

  	<script src="//code.jquery.com/jquery-2.1.1.min.js"><\/script>
  	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"><\/script>
  </body>
</html>
`,"package.json":`{
  "name": "jsonresume-theme-bootstrap-icons",
  "version": "0.2.1",
  "description": "A JSON Resume theme built with bootstrap and fontAwesome",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "James Jones (forked from Jared Cubilla)",
  "license": "MIT",
  "dependencies": {
    "lodash": "^2.4.1",
    "mustache": "^0.8.2",
    "resume-schema": "^0.0.15"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/jcjones/jsonresume-theme-bootstrap-icons.git"
  },
  "keywords": [
    "json", "jsonresume", "theme"
  ],
  "bugs": {
    "url": "https://github.com/jcjones/jsonresume-theme-bootstrap-icons/issues"
  },
  "homepage": "https://github.com/jcjones/jsonresume-theme-bootstrap-icons"
}`,"resume.json":`{
  "basics": {
    "name": "James 'J.C.' Jones",
    "label": "Software Engineer",
    "email": "james.jc.jones@gmail.com",
    "phone": "+1.361.433.5521",
    "summary": "J.C. is a distributed computing and cryptography geek. He co-founded an information security startup in Chandler, AZ; worked for the Air Force Research Lab, ViaSat, and General Dynamics C4S as a software engineer; and has been an active contributor to the Open Source Software community. Additionally, he holds several U.S. patents in the information security field. His goal in any project is to design away complexity wherever possible. Overall, J.C. loves solving hard problems with computer systems and making the world a better place through software.",
    "location": {
      "city": "Tempe",
      "countryCode": "US",
      "region": "Arizona"
    },
    "website": "https://tacticalsecret.com/",      
    "profiles": [
      { "network": "github",
        "username": "jcjones",
        "url": "https://github.com/jcjones/" },
      { "network": "twitter",
        "username": "jamespugjones",
        "url": "https://www.twitter.com/jamespugjones" },
      { "network": "linkedin",
        "username": "jamesjcjones",
        "url": "https://www.linkedin.com/in/jamesjcjones" },
      { "network": "angellist",
        "username": "james-jc-jones",
        "url": "https://angel.co/james-jc-jones" }
      ]
  },
  "work": [
    {
      "company": "Mozilla",
      "position": "Security Engineer",
      "website": "https://www.mozilla.org",
      "startDate": "2014-08-01",
      "summary": "J.C. is developing next-generation PKI functionality to increase user soverignity online.",
      "highlights": [
        "Maintaining the NSS security library used by Google, RedHat, Mozilla, and others.",
        "Providing support to the Internet Security Research Group on behalf of Mozilla."
      ]
    },
    {
      "company": "Internet Security Research Group",
      "position": "Security Architect",
      "website": "https://letsencrypt.org",
      "startDate": "2014-08-01",
      "summary": "J.C. is responsibile for the design and implementation of the Let's Encrypt Certificate Authority network architecture, removing the barriers to secure communication over the Web."
    },
    {
      "company": "SAIFE, Inc.",
      "position": "Co-Founder and Lead Software Engineer",
      "website": "https://saifeinc.com",
      "startDate": "2008-05-01",
      "endDate": "2014-11-30",
      "summary": "J.C. designed and is responsible for the SAIFE framework, the core technology around which SAIFE, Inc. was built. J.C. provides leadership for the product's software and systems architecture, and is responsible for the availability of SAIFE's worldwide Internet security infrastructure, TIPRNET, used by the growing SAIFE partner community.",
      "highlights": [
        "Built the company on technology from a project in graduate school.",
        "Re-imagined Public Key Infrastructures to blend Web of Trust techniques to increase usability without compromising security.",
        "Designed, and hired the DevOps team to build, a globally-redundant all-black information security architecture.",
        "Built upon SELinux, Puppet, and Ansible technologies using CentOS on respected cloud providers.",
        "Led internal red-team testing on the network and follow-on improvements, resulting in 'all-clear' analysis from US DoD JVAB (Joint Vulnerability Assessment Branch).",
        "Sold the technology into U.S. Special Operations Command and similar communities."
      ]
    },{
      "company": "ViaSat",
      "position": "Software Engineer Consultant",
      "website": "http://www.viasat.com",
      "startDate": "2008-05-01",
      "endDate": "2009-06-30",
      "summary": "During the infancy of the SAIFE technology, J.C. consulted at ViaSat, providing expertise to help with one of their embedded cryptography products destined for Department of Defense use."
    },{
      "company": "General Dynamics C4 Systems",
      "position": "Software Engineer",
      "website": "http://www.gdc4s.com",
      "startDate": "2007-01-01",
      "endDate": "2008-05-01",
      "summary": "After completing his Master's degree, J.C. moved to Arizona to work at General Dynamics C4S, taking with him his experience from working at the US Air Force Research Laboratory on military encryption projects.",
      "highlights": [        
        "Re-designed and re-implemented a malfunctioning cryptographic management system late in the MUOS project. The resulting system was substantially less complex and helped ensure an on-time delivery."
      ]
    },{
      "company": "Bureau of Economic and Business Research",
      "position": "Research Assistant",
      "website": "http://www.bebr.ufl.edu/",
      "startDate": "2006-05-01",
      "endDate": "2006-12-15"      
    },{
      "company": "Jacobs Technology / US Air Force Research Lab",
      "position": "Software Engineer",
      "website": "http://www.eglin.af.mil/units/afrlmunitionsdirectorate/",
      "startDate": "2002-05-24",
      "endDate": "2006-04-31",
      "_summary": "The day after graduating from high school, J.C. started full-time as a software engineer co-op at Jacobs Technology, working on-site at the Air Force Research Lab. For the next four years, J.C. alternated semesters studying for his undergraduate degree with working with the engineers and researchers at the Munitions Directorate.",
      "_highlights": [
        "Developed software for supercomputers and distributed computers performing fluid dynamics simulations.",
        "Contributed C++ code to open source software projects on behalf of the Air Force, such as PLIB, Freeglut, the Units of Measure Library and others.",
        "Contributed to several airborne weapon systems developed in C++ and Ada."
      ]
    }
  ],
  "education": [
    {
      "institution": "University of Florida",
      "startDate": "2005-08-15",
      "endDate": "2006-12-15",
      "area": "Computer Science",
      "studyType": "Master of Science"
    },
    {
      "institution": "University of Florida",
      "startDate": "2002-08-15",
      "endDate": "2005-12-15",
      "area": "Computer Science",
      "studyType": "Bachelor of Science"
    },
    {
      "institution": "International Baccalaureate Organization",
      "startDate": "2000-08-15",
      "endDate": "2002-05-30",
      "studyType": "International Baccalaureate Diploma"
    }
  ],
  "publications": [
    {
      "name": "Secure Communication System for Mobile Devices",
      "patentNumber": "US 8,392,699",
      "_summary": "A re-imagining of standard PKI protocols into the Internet of Things.",
      "summary": "A system for improving PKI performance and reliability by re-imagining the standard protocols into a disadvantaged and unreliable network architecture. This is a core technology of SAIFE\xAE.",
      "status": "Issued",
      "releaseDate": "2013-03-05",
      "website": "http://www.google.com/patents/US8392699"
    },{
      "name": "Technique for Bypassing an IP PBX",
      "patentNumber": "US 8,588,746",
      "summary": "A system for establishing tunnels for data transmission without requiring a central look-up database, such as DNS, a PBX, or HLR.",
      "status": "Issued",
      "releaseDate": "2013-11-19",
      "website": "http://www.google.com/patents/US8588746"
    },{
      "name": "Agile Certificate Management and Trust Federation for Large Mobile Deployments",
      "publisher": "IEEE Computing Now",
      "releaseDate": "2012-08-24",
      "_summary": "These are some of the core ideas behind SAIFE's flagship products; they were some of what first appeared during J.C.'s 'spare time' in graduate school.",
      "website": "http://t.co/raVcdGAK"
    },{
      "name": "Field Provisioning a Device to a Secure Enclave",
      "patentNumber":"US 20130191897",
      "_summary": "A technique for decreasing risks associated with signing the digital certificate of an already-fielded device.",   
      "status": "Filed",
      "releaseDate": "2012-12-28",
      "website": "https://www.google.com/patents/US20130191897"
    },{
      "name": "Geospatial Cryptography",
      "patentNumber":"US 20140112472",
      "_summary": "A technique extending the well-known peer model for PKI certificate distribution to provide peer introductions via geospatial proximity.",
      "status": "Filed",
      "releaseDate": "2012-10-19",
      "website": "https://www.google.com/patents/US20140112472"
    },{
      "name": "Certificate Authority Server Protection",
      "patentNumber":"US 20140108785",
      "_summary": "An inexpensive technique for interacting with a high value computer system while minimizing the possibility of malicious activity through the use of digital cameras and displays.",
      "status": "Filed",
      "releaseDate": "2012-06-17",
      "website": "https://www.google.com/patents/US20140108785"
    },{
      "name": "Secure Non-Geospatially Derived Device Presence Information",
      "patentNumber": "US 20140053255",
      "_summary": "A system for maintaining a decentralized look-up database of discontinuous devices which uses asymmetric and symmetric cryptographic techniques together to communicate efficiently with those devices.",
      "status": "Filed",
      "releaseDate": "2013-08-17",
      "website": "https://www.google.com/patents/US20140053255"
    }
  ],
  "skills": [
    {
      "name": "Distributed Computing",
      "level": "Master",
      "keywords": [
        "Distributed Design",
        "Hadoop",
        "CouchDB",
        "Concurrent Programming",
        "HornetQ"
      ]
    },
    {
      "name": "Cryptography",
      "level": "Master",
      "keywords": [
        "FIPS 140-2",
        "Information Security",
        "OpenSSL Development",
        "Asymmetric Cryptography",
        "Symmetric Cryptography"
      ]
    },{
      "name": "Software Engineering",
      "level": "Master",
      "keywords": [
        "Git",
        "Subversion",
        "Gerrit / Code Review Process",
        "Agile Development Process",
        "Rational Unified Process",
        "Test Driven Development",
        "Design Patterns",
        "UML"
      ]
    },{
      "name": "Web Development",
      "level": "Adept",
      "keywords": [
        "Spring MVC",
        "REST API Design",
        "MySQL",
        "PostgreSQL",
        "Python"
      ]
    },{
      "name": "Linux Administration",
      "level": "Adept",
      "keywords": [
        "CentOS",
        "RPM Development",
        "Kernel Driver Development",
        "Puppet",
        "Ansible",
        "IPTables"
      ]
    },{
      "name": "Network Administration",
      "level": "Adept",
      "keywords": [
        "SonicWALL Firewalls",
        "VMWare vSphere 5",
        "Windows Server 2008R2",
        "Misuse of Cat6"
      ]
    }
  ],
  "interests":[
    {
      "name": "Private Pilot",
      "keywords": []
    }
  ]
}`,"resume.template":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{basics.name}}</title>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.css" rel="stylesheet">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">   
    <style>
		#contactHeader {
			font-size:1em;
		}
		#contactHeader .fa {
			margin-left: 5px;
			margin-right: 5px;
			font-size: 1.7em;
		}
		.fa {
			font-size:2em;
		}
		.fa-facebook-square {
			color: #3b5998;
		}
		.fa-youtube-square {
			color: #bb0000;
		}
		.fa-google-plus-square {
			color: #d34836;
		}
		.fa-behance-square {
			color: #1769ff;
		}
		.fa-vimeo-square {
			color: #1ab7ea;
		}
		.fa-linkedin-square {
			color: #007bb6;
		}
		.fa-pinterest-square {
			color: #cb2027;
		}
		.fa-envelope-square {
			color: #1ab7ea;
		}
		.fa-pencil-square {
			color: #cb2027;	
		}
		.fa-codepen {
			font-size: 1em;
			padding-left: 0.35em;
		}
		.fa-stack {
			font-size:1em;
			display:inline;
		}
		.fa-twitter-square {
			color: #4099FF;
		}
		.fa-github-square {
			color: #000;
		}
		.fa-flickr {
			color: #ff0084
		}
		.fa-rss-square {
			color: #FF6600;
		}
		.ico {
			font-size: 1em;
		}
		.main {
			margin 0 auto;
			margin-left: 10%;
			margin-right: 10%;
			margin-bottom: 50px;
		}
		.skills {
			margin-bottom: 10px;
		}
		.keywords {
			background-color: #333333;
			color:#fff;
			padding: 6px;
			font-size: 1.2em;
		}
		.job .glyphicon {
			padding-right: 5px;	
		}
		.summary {
			border-left: 2px solid #AAAAAA;
			padding-left: 5px;
			font-size: 1.0em;
		}
		#references blockquote {
			font-size: 1.0em;
		}
		h2 {
			font-size: 26px;
		}
		body {
			margin-bottom: 1em;
		}
		.skilllabel {
			color: #000;
			background-color: #CCC;
		}

		@media print {
		  a[href]:after {
		    content:none;
		  }

		  body {
		  	margin: 0;
		  	padding: 0;
		  }

		  .printblock {
		  	page-break-inside: avoid;
		  }
		}
  
    </style>
  </head>
  <body>
	<div class="container-fluid">
		<div class="row">
			<div class="col-xs-12 text-center">
					<h1 class="text-uppercase">{{basics.name}}
						{{#basics.label}}
						<br/>
						<small>{{basics.label}}</small>
						{{/basics.label}}
					</h1>
			</div>
		</div>		
		<div class="row" id="contactHeader">
			<div id="contact" class="col-xs-6 text-right">
				<address>
					<strong>{{basics.location.city}}</strong>
					{{#basics.location.region}}
						{{basics.location.region}}
					{{/basics.location.region}} <i class="fa fa-map-marker"></i><br/>

					{{#basics.phone}}
						{{basics.phone}} <i class="fa fa-phone"></i><br/>
					{{/basics.phone}}
	  			{{#basics.email}}
				  		<a href= "mailto:{{basics.email}}" target= "_blanks">{{basics.email}}</a> <i class="fa fa-envelope-square"></i><br/>
		  		{{/basics.email}}
					{{#basics.website}}
						<a href="{{basics.website}}" target="_blank">{{basics.website}}</a> <i class="fa fa-pencil-square"></i></br>
					{{/basics.website}}		  		
				</address>
			</div>
			<div id="profiles" class="col-xs-6">
				{{#basics.profiles}}
				<a href="{{url}}" target="_blank"><i class="fa {{icon}}"></i>{{url}}</a></br>
				{{/basics.profiles}}
			</div>
		</div>

		{{#basics.summary}}
		<div id="about" class="row">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<h2><i class="fa fa-user ico"></i> ABOUT</h2>
				<p>
					{{basics.summary}}
				</p>
			</div>
		</div>
		{{/basics.summary}}
		{{#work.length}}
		<div id="work" class="row">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<h2><i class="fa fa-suitcase ico"></i> WORK EXPERIENCE</h2>
				{{#work}}
					<div class="job printblock">
						<h3>{{position}}, {{company}}</h3>
						<h4>
							{{startDateMonth}}{{startDateYear}} \u2013 {{endDateMonth}}{{endDateYear}}

							<small class="pull-right"><a href="{{website}}" target= "_blank"><i class="
	glyphicon glyphicon-globe"></i>{{website}}</a></small>
						</h4>
						
						<p>{{summary}}</p>
						{{#highlights.length}}
						<h4>HIGHLIGHTS</h4>
						<ul>
							{{#highlights}}
							<li>{{.}}</li>
							{{/highlights}}
						</ul>
						{{/highlights.length}}
					</div>
				{{/work}}
			</div>
		</div>
		{{/work.length}}
		{{#skills.length}}
		<div id="skills" class="row">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<h2><i class="fa fa-tasks ico"></i> SKILLS</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<div class="row printblock">
					{{#skills}}
					<div class="col-xs-4 col-md-4 col-lg-6">
						<h5 class="skills">{{name}}</h5>
						{{#keywords}}
						<span class="label skilllabel">{{.}}</span>
						{{/keywords}}
					</div>
					{{/skills}}
				</div>
			</div>
		</div>
		{{/skills.length}}
		{{#education.length}}
		<div id="education" class="row printblock">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<h2><i class="fa fa-university ico"></i> EDUCATION</h2>
				{{#education}}
				<div>
					<h4>
						{{studyType}} 
						{{#area}}<small>in {{area}}</small>{{/area}}
					</h4>
					<p class="pull-right"><i class="fa fa-graduation-cap ico"></i> {{institution}}</p>
					<h5>{{startDateMonth}}{{startDateYear}} \u2013 {{endDateMonth}}{{endDateYear}}</h5>
					
						{{#educationCourses}}
						<h4>COURSES</h4>
						<ul>
							{{#courses}}
							<li>{{.}}</li>
							{{/courses}}
						</ul>
					{{/educationCourses}}
				</div>
				{{/education}}
			</div>
		</div>
		{{/education.length}}
		{{#awards.length}}
		<div id="awards" class="row">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<h2><i class="fa fa-trophy ico"></i> AWARDS</h2>
				{{#awards}}
					<h3>{{title}}</h3>
					<h4>{{day}} {{month}} {{year}} \u2013 {{awarder}}</h4>
				{{/awards}}
			</div>
		</div>
		{{/awards.length}}
		{{#publications.length}}
		<div id="publications" class="row">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<h2><i class="fa fa-book ico"></i> PUBLICATIONS / PATENTS</h2>
				{{#publications}}
					<div class="row printblock">
						<div class="col-xs-8">
							<h4>
							{{#patentNumber}}
								<small>Patent:</small>
							{{/patentNumber}}
							{{#publisher}}
								<small>Article:</small>
							{{/publisher}}	
								{{name}}
							</h4>
							<p class="summary">{{summary}}</p>
							<footer>
								<a href= "{{website}}" target= "_blank">{{website}}</a>
							</footer>
						</div>
						<div class="col-xs-4 text-right">
							<h5>{{status}} {{day}} {{month}} {{year}}</h5>
							{{#patentNumber}}
								<p>
									<i class="fa fa-lightbulb-o ico"></i> {{patentNumber}}
								</p>
							{{/patentNumber}}
							{{#publisher}}
								<p>
									<i class="fa fa-bookmark ico"></i> {{publisher}}
								</p>
							{{/publisher}}
						</div>								
					</div>
				{{/publications}}
			</div>
		</div>
		{{/publications.length}}
		{{#references.length}}
		<div id="references" class="row">
			<div class="col-xs-12 col-md-10 col-md-offset-1">
				<h2><i class="fa fa-thumbs-up ico"></i> REFERENCES</h2>
				{{#references}}
				<blockquote>
					<p>{{reference}}</p>
					<footer>
						<a href= "{{website}}" target= "_blank">{{name}}</a>
					</footer>
				</blockquote><br>
				{{/references}}
			</div>
		</div>
		{{/references.length}}
	</div> <!-- container -->

  	<script src="//code.jquery.com/jquery-2.1.1.min.js"><\/script>
  	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"><\/script>
  </body>
</html>
`},Mt={".":["LICENSE","README.md","index.html","index.js","package.json","publish.sh","resume.json","resume.pdf","resume.template"]};Ce=function(c,x){var _=De(c);return _!==void 0?_:""},Ee=function(c,x){var _=Kn(c);return _===void 0&&(_=[]),x&&x.withFileTypes?_.map(function(f){var $=Wn(c)+"/"+f,mt=Kn($)!==void 0;return{name:f,isFile:function(){return!mt},isDirectory:function(){return mt}}}):_},Ae=function(c){return De(c)!==void 0||Kn(c)!==void 0},Ie=function(){},je=function(){},Vn=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},ke=Vn,Me=function(){},Pe=function(){},Re=function(){return{pipe:function(c){return c},on:function(){return this}}},Te=function(){return{write:function(){},end:function(){},on:function(){return this}}},Ni={readFileSync:Ce,readdirSync:Ee,existsSync:Ae,writeFileSync:Ie,mkdirSync:je,statSync:Vn,lstatSync:ke,unlinkSync:Me,rmdirSync:Pe,createReadStream:Re,createWriteStream:Te}});var Oe=Gn((Pt,Xt)=>{lt();(function(){var c,x=[],_=[],f=0,$=+new Date+"",mt=75,Ct=40,xt=` 	\v\f\xA0\uFEFF
\r\u2028\u2029\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000`,Rt=/\b__p \+= '';/g,yn=/\b(__p \+=) '' \+/g,bn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,tn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,wn=/\w*$/,nn=/^\s*function[ \n\r\t]+\w/,Tt=/<%=([\s\S]+?)%>/g,xn=RegExp("^["+xt+"]*0+(?=.$)"),Et=/($^)/,en=/\bthis\b/,Sn=/['\n\r\t\u2028\u2029\\]/g,Fn=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],St=0,tt="[object Arguments]",nt="[object Array]",pt="[object Boolean]",m="[object Date]",g="[object Function]",y="[object Number]",b="[object Object]",S="[object RegExp]",U="[object String]",j={};j[g]=!1,j[tt]=j[nt]=j[pt]=j[m]=j[y]=j[b]=j[S]=j[U]=!0;var E={leading:!1,maxWait:0,trailing:!1},D={configurable:!1,enumerable:!1,value:null,writable:!1},k={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1},it={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},A=k[typeof window]&&window||this,O=k[typeof Pt]&&Pt&&!Pt.nodeType&&Pt,st=k[typeof Xt]&&Xt&&!Xt.nodeType&&Xt,Ut=st&&st.exports===O&&O,B=k[typeof globalThis]&&globalThis;B&&(B.global===B||B.window===B)&&(A=B);function ut(d,F,C){for(var I=(C||0)-1,P=d?d.length:0;++I<P;)if(d[I]===F)return I;return-1}function At(d,F){var C=typeof F;if(d=d.cache,C=="boolean"||F==null)return d[F]?0:-1;C!="number"&&C!="string"&&(C="object");var I=C=="number"?F:$+F;return d=(d=d[C])&&d[I],C=="object"?d&&ut(d,F)>-1?0:-1:d?0:-1}function He(d){var F=this.cache,C=typeof d;if(C=="boolean"||d==null)F[d]=!0;else{C!="number"&&C!="string"&&(C="object");var I=C=="number"?d:$+d,P=F[C]||(F[C]={});C=="object"?(P[I]||(P[I]=[])).push(d):P[I]=!0}}function Yn(d){return d.charCodeAt(0)}function Ge(d,F){for(var C=d.criteria,I=F.criteria,P=-1,X=C.length;++P<X;){var et=C[P],L=I[P];if(et!==L){if(et>L||typeof et>"u")return 1;if(et<L||typeof L>"u")return-1}}return d.index-F.index}function _n(d){var F=-1,C=d.length,I=d[0],P=d[C/2|0],X=d[C-1];if(I&&typeof I=="object"&&P&&typeof P=="object"&&X&&typeof X=="object")return!1;var et=Dn();et.false=et.null=et.true=et.undefined=!1;var L=Dn();for(L.array=d,L.cache=et,L.push=He;++F<C;)L.push(d[F]);return L}function Ke(d){return"\\"+it[d]}function ft(){return x.pop()||[]}function Dn(){return _.pop()||{array:null,cache:null,criteria:null,false:!1,index:0,null:!1,number:null,object:null,push:null,string:null,true:!1,undefined:!1,value:null}}function at(d){d.length=0,x.length<Ct&&x.push(d)}function qt(d){var F=d.cache;F&&qt(F),d.array=d.cache=d.criteria=d.object=d.number=d.string=d.value=null,_.length<Ct&&_.push(d)}function M(d,F,C){F||(F=0),typeof C>"u"&&(C=d?d.length:0);for(var I=-1,P=C-F||0,X=Array(P<0?0:P);++I<P;)X[I]=d[F+I];return X}function Cn(d){d=d?vt.defaults(A.Object(),d,vt.pick(A,Fn)):A;var F=d.Array,C=d.Boolean,I=d.Date,P=d.Function,X=d.Math,et=d.Number,L=d.Object,Ot=d.RegExp,yt=d.String,ht=d.TypeError,It=[],$n=L.prototype,We=d._,H=$n.toString,Ve=Ot("^"+yt(H).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Ye=X.ceil,rn=d.clearTimeout,$e=X.floor,Xe=P.prototype.toString,jt=wt(jt=L.getPrototypeOf)&&jt,G=$n.hasOwnProperty,Lt=It.push,Nt=d.setTimeout,Xn=It.splice,Qe=It.unshift,Qn=(function(){try{var t={},n=wt(n=L.defineProperty)&&n,e=n(t,t,t)&&n}catch{}return e})(),sn=wt(sn=L.create)&&sn,En=wt(En=F.isArray)&&En,Ze=d.isFinite,tr=d.isNaN,an=wt(an=L.keys)&&an,ot=X.max,zt=X.min,An=d.parseInt,Zn=X.random,dt={};dt[nt]=F,dt[pt]=C,dt[m]=I,dt[g]=P,dt[b]=L,dt[y]=et,dt[S]=Ot,dt[U]=yt;function a(t){return t&&typeof t=="object"&&!J(t)&&G.call(t,"__wrapped__")?t:new Ft(t)}function Ft(t,n){this.__chain__=!!n,this.__wrapped__=t}Ft.prototype=a.prototype;var Jt=a.support={};Jt.funcDecomp=!wt(d.WinRTError)&&en.test(Cn),Jt.funcNames=typeof P.name=="string",a.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:Tt,variable:"",imports:{_:a}};function nr(t){var n=t[0],e=t[2],r=t[4];function i(){if(e){var s=M(e);Lt.apply(s,arguments)}if(this instanceof i){var o=Bt(n.prototype),l=n.apply(o,s||arguments);return W(l)?l:o}return n.apply(r,s||arguments)}return Pn(i,t),i}function In(t,n,e,r,i){if(e){var s=e(t);if(typeof s<"u")return s}var o=W(t);if(o){var l=H.call(t);if(!j[l])return t;var u=dt[l];switch(l){case pt:case m:return new u(+t);case y:case U:return new u(t);case S:return s=u(t.source,wn.exec(t)),s.lastIndex=t.lastIndex,s}}else return t;var h=J(t);if(n){var p=!r;r||(r=ft()),i||(i=ft());for(var w=r.length;w--;)if(r[w]==t)return i[w];s=h?u(t.length):{}}else s=h?M(t):un({},t);return h&&(G.call(t,"index")&&(s.index=t.index),G.call(t,"input")&&(s.input=t.input)),n&&(r.push(t),i.push(s),(h?V:q)(t,function(v,R){s[R]=In(v,n,e,r,i)}),p&&(at(r),at(i))),s}function Bt(t,n){return W(t)?sn(t):{}}sn||(Bt=(function(){function t(){}return function(n){if(W(n)){t.prototype=n;var e=new t;t.prototype=null}return e||d.Object()}})());function Q(t,n,e){if(typeof t!="function")return Jn;if(typeof n>"u"||!("prototype"in t))return t;var r=t.__bindData__;if(typeof r>"u"&&(Jt.funcNames&&(r=!t.name),r=r||!Jt.funcDecomp,!r)){var i=Xe.call(t);Jt.funcNames||(r=!nn.test(i)),r||(r=en.test(i),Pn(t,r))}if(r===!1||r!==!0&&r[1]&1)return t;switch(e){case 1:return function(s){return t.call(n,s)};case 2:return function(s,o){return t.call(n,s,o)};case 3:return function(s,o,l){return t.call(n,s,o,l)};case 4:return function(s,o,l,u){return t.call(n,s,o,l,u)}}return ye(t,n)}function te(t){var n=t[0],e=t[1],r=t[2],i=t[3],s=t[4],o=t[5],l=e&1,u=e&2,h=e&4,p=e&8,w=n;function v(){var R=l?s:this;if(r){var T=M(r);Lt.apply(T,arguments)}if((i||h)&&(T||(T=M(arguments)),i&&Lt.apply(T,i),h&&T.length<o))return e|=16,te([n,p?e:e&-4,T,null,s,o]);if(T||(T=arguments),u&&(n=R[w]),this instanceof v){R=Bt(n.prototype);var Z=n.apply(R,T);return W(Z)?Z:R}return n.apply(R,T)}return Pn(v,t),v}function Ht(t,n){var e=-1,r=on(),i=t?t.length:0,s=i>=mt&&r===ut,o=[];if(s){var l=_n(n);l?(r=At,n=l):s=!1}for(;++e<i;){var u=t[e];r(n,u)<0&&o.push(u)}return s&&qt(n),o}function bt(t,n,e,r){for(var i=(r||0)-1,s=t?t.length:0,o=[];++i<s;){var l=t[i];if(l&&typeof l=="object"&&typeof l.length=="number"&&(J(l)||ln(l))){n||(l=bt(l,n,e));var u=-1,h=l.length,p=o.length;for(o.length+=h;++u<h;)o[p++]=l[u]}else e||o.push(l)}return o}function kt(t,n,e,r,i,s){if(e){var o=e(t,n);if(typeof o<"u")return!!o}if(t===n)return t!==0||1/t==1/n;var l=typeof t,u=typeof n;if(t===t&&!(t&&k[l])&&!(n&&k[u]))return!1;if(t==null||n==null)return t===n;var h=H.call(t),p=H.call(n);if(h==tt&&(h=b),p==tt&&(p=b),h!=p)return!1;switch(h){case pt:case m:return+t==+n;case y:return t!=+t?n!=+n:t==0?1/t==1/n:t==+n;case S:case U:return t==yt(n)}var w=h==nt;if(!w){var v=G.call(t,"__wrapped__"),R=G.call(n,"__wrapped__");if(v||R)return kt(v?t.__wrapped__:t,R?n.__wrapped__:n,e,r,i,s);if(h!=b)return!1;var T=t.constructor,Z=n.constructor;if(T!=Z&&!(N(T)&&T instanceof T&&N(Z)&&Z instanceof Z)&&"constructor"in t&&"constructor"in n)return!1}var rt=!i;i||(i=ft()),s||(s=ft());for(var Y=i.length;Y--;)if(i[Y]==t)return s[Y]==n;var z=0;if(o=!0,i.push(t),s.push(n),w){if(Y=t.length,z=n.length,o=z==Y,o||r)for(;z--;){var hn=Y,Vt=n[z];if(r)for(;hn--&&!(o=kt(t[hn],Vt,e,r,i,s)););else if(!(o=kt(t[z],Vt,e,r,i,s)))break}}else gt(n,function(Yt,$t,Hn){if(G.call(Hn,$t))return z++,o=G.call(t,$t)&&kt(t[$t],Yt,e,r,i,s)}),o&&!r&&gt(t,function(Yt,$t,Hn){if(G.call(Hn,$t))return o=--z>-1});return i.pop(),s.pop(),rt&&(at(i),at(s)),o}function ne(t,n,e,r,i){(J(n)?V:q)(n,function(s,o){var l,u,h=s,p=t[o];if(s&&((u=J(s))||Un(s))){for(var w=r.length;w--;)if(l=r[w]==s){p=i[w];break}if(!l){var v;e&&(h=e(p,s),(v=typeof h<"u")&&(p=h)),v||(p=u?J(p)?p:[]:Un(p)?p:{}),r.push(s),i.push(p),v||ne(p,s,e,r,i)}}else e&&(h=e(p,s),typeof h>"u"&&(h=s)),typeof h<"u"&&(p=h);t[o]=p})}function jn(t,n){return t+$e(Zn()*(n-t+1))}function kn(t,n,e){var r=-1,i=on(),s=t?t.length:0,o=[],l=!n&&s>=mt&&i===ut,u=e||l?ft():o;if(l){var h=_n(u);i=At,u=h}for(;++r<s;){var p=t[r],w=e?e(p,r,t):p;(n?!r||u[u.length-1]!==w:i(u,w)<0)&&((e||l)&&u.push(w),o.push(p))}return l?(at(u.array),qt(u)):e&&at(u),o}function Mn(t){return function(n,e,r){var i={};e=a.createCallback(e,r,3);var s=-1,o=n?n.length:0;if(typeof o=="number")for(;++s<o;){var l=n[s];t(i,l,e(l,s,n),n)}else q(n,function(u,h,p){t(i,u,e(u,h,p),p)});return i}}function ct(t,n,e,r,i,s){var o=n&1,l=n&2,u=n&4,h=n&8,p=n&16,w=n&32;if(!l&&!N(t))throw new ht;p&&!e.length&&(n&=-17,p=e=!1),w&&!r.length&&(n&=-33,w=r=!1);var v=t&&t.__bindData__;if(v&&v!==!0)return v=M(v),v[2]&&(v[2]=M(v[2])),v[3]&&(v[3]=M(v[3])),o&&!(v[1]&1)&&(v[4]=i),!o&&v[1]&1&&(n|=8),u&&!(v[1]&4)&&(v[5]=s),p&&Lt.apply(v[2]||(v[2]=[]),e),w&&Qe.apply(v[3]||(v[3]=[]),r),v[1]|=n,ct.apply(null,v);var R=n==1||n===17?nr:te;return R([t,n,e,r,i,s])}function er(t){return Rn[t]}function on(){var t=(t=a.indexOf)===he?ut:t;return t}function wt(t){return typeof t=="function"&&Ve.test(t)}var Pn=Qn?function(t,n){D.value=n,Qn(t,"__bindData__",D),D.value=null}:we;function ee(t){var n,e;return!(t&&H.call(t)==b)||(n=t.constructor,N(n)&&!(n instanceof n))?!1:(gt(t,function(r,i){e=i}),typeof e>"u"||G.call(t,e))}function rr(t){return re[t]}function ln(t){return t&&typeof t=="object"&&typeof t.length=="number"&&H.call(t)==tt||!1}var J=En||function(t){return t&&typeof t=="object"&&typeof t.length=="number"&&H.call(t)==nt||!1},ir=function(t){var n,e=t,r=[];if(!e||!k[typeof t])return r;for(n in e)G.call(e,n)&&r.push(n);return r},K=an?function(t){return W(t)?an(t):[]}:ir,Rn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},re=se(Rn),sr=Ot("("+K(re).join("|")+")","g"),ar=Ot("["+K(Rn).join("")+"]","g"),un=function(t,n,e){var r,i=t,s=i;if(!i)return s;var o=arguments,l=0,u=typeof e=="number"?2:o.length;if(u>3&&typeof o[u-2]=="function")var h=Q(o[--u-1],o[u--],2);else u>2&&typeof o[u-1]=="function"&&(h=o[--u]);for(;++l<u;)if(i=o[l],i&&k[typeof i])for(var p=-1,w=k[typeof i]&&K(i),v=w?w.length:0;++p<v;)r=w[p],s[r]=h?h(s[r],i[r]):i[r];return s};function or(t,n,e,r){return typeof n!="boolean"&&n!=null&&(r=e,e=n,n=!1),In(t,n,typeof e=="function"&&Q(e,r,1))}function lr(t,n,e){return In(t,!0,typeof n=="function"&&Q(n,e,1))}function ur(t,n){var e=Bt(t);return n?un(e,n):e}var Tn=function(t,n,e){var r,i=t,s=i;if(!i)return s;for(var o=arguments,l=0,u=typeof e=="number"?2:o.length;++l<u;)if(i=o[l],i&&k[typeof i])for(var h=-1,p=k[typeof i]&&K(i),w=p?p.length:0;++h<w;)r=p[h],typeof s[r]>"u"&&(s[r]=i[r]);return s};function fr(t,n,e){var r;return n=a.createCallback(n,e,3),q(t,function(i,s,o){if(n(i,s,o))return r=s,!1}),r}function cr(t,n,e){var r;return n=a.createCallback(n,e,3),ie(t,function(i,s,o){if(n(i,s,o))return r=s,!1}),r}var gt=function(t,n,e){var r,i=t,s=i;if(!i||!k[typeof i])return s;n=n&&typeof e>"u"?n:Q(n,e,3);for(r in i)if(n(i[r],r,t)===!1)return s;return s};function pr(t,n,e){var r=[];gt(t,function(s,o){r.push(o,s)});var i=r.length;for(n=Q(n,e,3);i--&&n(r[i--],r[i],t)!==!1;);return t}var q=function(t,n,e){var r,i=t,s=i;if(!i||!k[typeof i])return s;n=n&&typeof e>"u"?n:Q(n,e,3);for(var o=-1,l=k[typeof i]&&K(i),u=l?l.length:0;++o<u;)if(r=l[o],n(i[r],r,t)===!1)return s;return s};function ie(t,n,e){var r=K(t),i=r.length;for(n=Q(n,e,3);i--;){var s=r[i];if(n(t[s],s,t)===!1)break}return t}function Gt(t){var n=[];return gt(t,function(e,r){N(e)&&n.push(r)}),n.sort()}function hr(t,n){return t?G.call(t,n):!1}function se(t){for(var n=-1,e=K(t),r=e.length,i={};++n<r;){var s=e[n];i[t[s]]=s}return i}function dr(t){return t===!0||t===!1||t&&typeof t=="object"&&H.call(t)==pt||!1}function gr(t){return t&&typeof t=="object"&&H.call(t)==m||!1}function mr(t){return t&&t.nodeType===1||!1}function vr(t){var n=!0;if(!t)return n;var e=H.call(t),r=t.length;return e==nt||e==U||e==tt||e==b&&typeof r=="number"&&N(t.splice)?!r:(q(t,function(){return n=!1}),n)}function yr(t,n,e,r){return kt(t,n,typeof e=="function"&&Q(e,r,2))}function br(t){return Ze(t)&&!tr(parseFloat(t))}function N(t){return typeof t=="function"}function W(t){return!!(t&&k[typeof t])}function wr(t){return ae(t)&&t!=+t}function xr(t){return t===null}function ae(t){return typeof t=="number"||t&&typeof t=="object"&&H.call(t)==y||!1}var Un=jt?function(t){if(!(t&&H.call(t)==b))return!1;var n=t.valueOf,e=wt(n)&&(e=jt(n))&&jt(e);return e?t==e||jt(t)==e:ee(t)}:ee;function Sr(t){return t&&typeof t=="object"&&H.call(t)==S||!1}function Kt(t){return typeof t=="string"||t&&typeof t=="object"&&H.call(t)==U||!1}function Fr(t){return typeof t>"u"}function _r(t,n,e){var r={};return n=a.createCallback(n,e,3),q(t,function(i,s,o){r[s]=n(i,s,o)}),r}function Dr(t){var n=arguments,e=2;if(!W(t))return t;if(typeof n[2]!="number"&&(e=n.length),e>3&&typeof n[e-2]=="function")var r=Q(n[--e-1],n[e--],2);else e>2&&typeof n[e-1]=="function"&&(r=n[--e]);for(var i=M(arguments,1,e),s=-1,o=ft(),l=ft();++s<e;)ne(t,i[s],r,o,l);return at(o),at(l),t}function Cr(t,n,e){var r={};if(typeof n!="function"){var i=[];gt(t,function(u,h){i.push(h)}),i=Ht(i,bt(arguments,!0,!1,1));for(var s=-1,o=i.length;++s<o;){var l=i[s];r[l]=t[l]}}else n=a.createCallback(n,e,3),gt(t,function(u,h,p){n(u,h,p)||(r[h]=u)});return r}function Er(t){for(var n=-1,e=K(t),r=e.length,i=F(r);++n<r;){var s=e[n];i[n]=[s,t[s]]}return i}function Ar(t,n,e){var r={};if(typeof n!="function")for(var i=-1,s=bt(arguments,!0,!1,1),o=W(t)?s.length:0;++i<o;){var l=s[i];l in t&&(r[l]=t[l])}else n=a.createCallback(n,e,3),gt(t,function(u,h,p){n(u,h,p)&&(r[h]=u)});return r}function Ir(t,n,e,r){var i=J(t);if(e==null)if(i)e=[];else{var s=t&&t.constructor,o=s&&s.prototype;e=Bt(o)}return n&&(n=a.createCallback(n,r,4),(i?V:q)(t,function(l,u,h){return n(e,l,u,h)})),e}function fn(t){for(var n=-1,e=K(t),r=e.length,i=F(r);++n<r;)i[n]=t[e[n]];return i}function jr(t){for(var n=arguments,e=-1,r=bt(n,!0,!1,1),i=n[2]&&n[2][n[1]]===t?1:r.length,s=F(i);++e<i;)s[e]=t[r[e]];return s}function oe(t,n,e){var r=-1,i=on(),s=t?t.length:0,o=!1;return e=(e<0?ot(0,s+e):e)||0,J(t)?o=i(t,n,e)>-1:typeof s=="number"?o=(Kt(t)?t.indexOf(n,e):i(t,n,e))>-1:q(t,function(l){if(++r>=e)return!(o=l===n)}),o}var kr=Mn(function(t,n,e){G.call(t,e)?t[e]++:t[e]=1});function le(t,n,e){var r=!0;n=a.createCallback(n,e,3);var i=-1,s=t?t.length:0;if(typeof s=="number")for(;++i<s&&(r=!!n(t[i],i,t)););else q(t,function(o,l,u){return r=!!n(o,l,u)});return r}function cn(t,n,e){var r=[];n=a.createCallback(n,e,3);var i=-1,s=t?t.length:0;if(typeof s=="number")for(;++i<s;){var o=t[i];n(o,i,t)&&r.push(o)}else q(t,function(l,u,h){n(l,u,h)&&r.push(l)});return r}function qn(t,n,e){n=a.createCallback(n,e,3);var r=-1,i=t?t.length:0;if(typeof i=="number")for(;++r<i;){var s=t[r];if(n(s,r,t))return s}else{var o;return q(t,function(l,u,h){if(n(l,u,h))return o=l,!1}),o}}function Mr(t,n,e){var r;return n=a.createCallback(n,e,3),pn(t,function(i,s,o){if(n(i,s,o))return r=i,!1}),r}function V(t,n,e){var r=-1,i=t?t.length:0;if(n=n&&typeof e>"u"?n:Q(n,e,3),typeof i=="number")for(;++r<i&&n(t[r],r,t)!==!1;);else q(t,n);return t}function pn(t,n,e){var r=t?t.length:0;if(n=n&&typeof e>"u"?n:Q(n,e,3),typeof r=="number")for(;r--&&n(t[r],r,t)!==!1;);else{var i=K(t);r=i.length,q(t,function(s,o,l){return o=i?i[--r]:--r,n(l[o],o,l)})}return t}var Pr=Mn(function(t,n,e){(G.call(t,e)?t[e]:t[e]=[]).push(n)}),Rr=Mn(function(t,n,e){t[e]=n});function Tr(t,n){var e=M(arguments,2),r=-1,i=typeof n=="function",s=t?t.length:0,o=F(typeof s=="number"?s:0);return V(t,function(l){o[++r]=(i?n:l[n]).apply(l,e)}),o}function Wt(t,n,e){var r=-1,i=t?t.length:0;if(n=a.createCallback(n,e,3),typeof i=="number")for(var s=F(i);++r<i;)s[r]=n(t[r],r,t);else s=[],q(t,function(o,l,u){s[++r]=n(o,l,u)});return s}function ue(t,n,e){var r=-1/0,i=r;if(typeof n!="function"&&e&&e[n]===t&&(n=null),n==null&&J(t))for(var s=-1,o=t.length;++s<o;){var l=t[s];l>i&&(i=l)}else n=n==null&&Kt(t)?Yn:a.createCallback(n,e,3),V(t,function(u,h,p){var w=n(u,h,p);w>r&&(r=w,i=u)});return i}function Ur(t,n,e){var r=1/0,i=r;if(typeof n!="function"&&e&&e[n]===t&&(n=null),n==null&&J(t))for(var s=-1,o=t.length;++s<o;){var l=t[s];l<i&&(i=l)}else n=n==null&&Kt(t)?Yn:a.createCallback(n,e,3),V(t,function(u,h,p){var w=n(u,h,p);w<r&&(r=w,i=u)});return i}var On=Wt;function Ln(t,n,e,r){if(!t)return e;var i=arguments.length<3;n=a.createCallback(n,r,4);var s=-1,o=t.length;if(typeof o=="number")for(i&&(e=t[++s]);++s<o;)e=n(e,t[s],s,t);else q(t,function(l,u,h){e=i?(i=!1,l):n(e,l,u,h)});return e}function fe(t,n,e,r){var i=arguments.length<3;return n=a.createCallback(n,r,4),pn(t,function(s,o,l){e=i?(i=!1,s):n(e,s,o,l)}),e}function qr(t,n,e){return n=a.createCallback(n,e,3),cn(t,function(r,i,s){return!n(r,i,s)})}function Or(t,n,e){if(t&&typeof t.length!="number"&&(t=fn(t)),n==null||e)return t?t[jn(0,t.length-1)]:c;var r=ce(t);return r.length=zt(ot(0,n),r.length),r}function ce(t){var n=-1,e=t?t.length:0,r=F(typeof e=="number"?e:0);return V(t,function(i){var s=jn(0,++n);r[n]=r[s],r[s]=i}),r}function Lr(t){var n=t?t.length:0;return typeof n=="number"?n:K(t).length}function pe(t,n,e){var r;n=a.createCallback(n,e,3);var i=-1,s=t?t.length:0;if(typeof s=="number")for(;++i<s&&!(r=n(t[i],i,t)););else q(t,function(o,l,u){return!(r=n(o,l,u))});return!!r}function Nr(t,n,e){var r=-1,i=J(n),s=t?t.length:0,o=F(typeof s=="number"?s:0);for(i||(n=a.createCallback(n,e,3)),V(t,function(u,h,p){var w=o[++r]=Dn();i?w.criteria=Wt(n,function(v){return u[v]}):(w.criteria=ft())[0]=n(u,h,p),w.index=r,w.value=u}),s=o.length,o.sort(Ge);s--;){var l=o[s];o[s]=l.value,i||at(l.criteria),qt(l)}return o}function zr(t){return t&&typeof t.length=="number"?M(t):fn(t)}var Jr=cn;function Br(t){for(var n=-1,e=t?t.length:0,r=[];++n<e;){var i=t[n];i&&r.push(i)}return r}function Hr(t){return Ht(t,bt(arguments,!0,!0,1))}function Gr(t,n,e){var r=-1,i=t?t.length:0;for(n=a.createCallback(n,e,3);++r<i;)if(n(t[r],r,t))return r;return-1}function Kr(t,n,e){var r=t?t.length:0;for(n=a.createCallback(n,e,3);r--;)if(n(t[r],r,t))return r;return-1}function Nn(t,n,e){var r=0,i=t?t.length:0;if(typeof n!="number"&&n!=null){var s=-1;for(n=a.createCallback(n,e,3);++s<i&&n(t[s],s,t);)r++}else if(r=n,r==null||e)return t?t[0]:c;return M(t,0,zt(ot(0,r),i))}function Wr(t,n,e,r){return typeof n!="boolean"&&n!=null&&(r=e,e=typeof n!="function"&&r&&r[n]===t?null:n,n=!1),e!=null&&(t=Wt(t,e,r)),bt(t,n)}function he(t,n,e){if(typeof e=="number"){var r=t?t.length:0;e=e<0?ot(0,r+e):e||0}else if(e){var i=de(t,n);return t[i]===n?i:-1}return ut(t,n,e)}function Vr(t,n,e){var r=0,i=t?t.length:0;if(typeof n!="number"&&n!=null){var s=i;for(n=a.createCallback(n,e,3);s--&&n(t[s],s,t);)r++}else r=n==null||e?1:n||r;return M(t,0,zt(ot(0,i-r),i))}function Yr(){for(var t=[],n=-1,e=arguments.length,r=ft(),i=on(),s=i===ut,o=ft();++n<e;){var l=arguments[n];(J(l)||ln(l))&&(t.push(l),r.push(s&&l.length>=mt&&_n(n?t[n]:o)))}var u=t[0],h=-1,p=u?u.length:0,w=[];t:for(;++h<p;){var v=r[0];if(l=u[h],(v?At(v,l):i(o,l))<0){for(n=e,(v||o).push(l);--n;)if(v=r[n],(v?At(v,l):i(t[n],l))<0)continue t;w.push(l)}}for(;e--;)v=r[e],v&&qt(v);return at(r),at(o),w}function $r(t,n,e){var r=0,i=t?t.length:0;if(typeof n!="number"&&n!=null){var s=i;for(n=a.createCallback(n,e,3);s--&&n(t[s],s,t);)r++}else if(r=n,r==null||e)return t?t[i-1]:c;return M(t,ot(0,i-r))}function Xr(t,n,e){var r=t?t.length:0;for(typeof e=="number"&&(r=(e<0?ot(0,r+e):zt(e,r-1))+1);r--;)if(t[r]===n)return r;return-1}function Qr(t){for(var n=arguments,e=0,r=n.length,i=t?t.length:0;++e<r;)for(var s=-1,o=n[e];++s<i;)t[s]===o&&(Xn.call(t,s--,1),i--);return t}function Zr(t,n,e){t=+t||0,e=typeof e=="number"?e:+e||1,n==null&&(n=t,t=0);for(var r=-1,i=ot(0,Ye((n-t)/(e||1))),s=F(i);++r<i;)s[r]=t,t+=e;return s}function ti(t,n,e){var r=-1,i=t?t.length:0,s=[];for(n=a.createCallback(n,e,3);++r<i;){var o=t[r];n(o,r,t)&&(s.push(o),Xn.call(t,r--,1),i--)}return s}function zn(t,n,e){if(typeof n!="number"&&n!=null){var r=0,i=-1,s=t?t.length:0;for(n=a.createCallback(n,e,3);++i<s&&n(t[i],i,t);)r++}else r=n==null||e?1:ot(0,n);return M(t,r)}function de(t,n,e,r){var i=0,s=t?t.length:i;for(e=e?a.createCallback(e,r,1):Jn,n=e(n);i<s;){var o=i+s>>>1;e(t[o])<n?i=o+1:s=o}return i}function ni(){return kn(bt(arguments,!0,!0))}function ge(t,n,e,r){return typeof n!="boolean"&&n!=null&&(r=e,e=typeof n!="function"&&r&&r[n]===t?null:n,n=!1),e!=null&&(e=a.createCallback(e,r,3)),kn(t,n,e)}function ei(t){return Ht(t,M(arguments,1))}function ri(){for(var t=-1,n=arguments.length;++t<n;){var e=arguments[t];if(J(e)||ln(e))var r=r?kn(Ht(r,e).concat(Ht(e,r))):e}return r||[]}function me(){for(var t=arguments.length>1?arguments:arguments[0],n=-1,e=t?ue(On(t,"length")):0,r=F(e<0?0:e);++n<e;)r[n]=On(t,n);return r}function ve(t,n){var e=-1,r=t?t.length:0,i={};for(!n&&r&&!J(t[0])&&(n=[]);++e<r;){var s=t[e];n?i[s]=n[e]:s&&(i[s[0]]=s[1])}return i}function ii(t,n){if(!N(n))throw new ht;return function(){if(--t<1)return n.apply(this,arguments)}}function ye(t,n){return arguments.length>2?ct(t,17,M(arguments,2),null,n):ct(t,1,null,null,n)}function si(t){for(var n=arguments.length>1?bt(arguments,!0,!1,1):Gt(t),e=-1,r=n.length;++e<r;){var i=n[e];t[i]=ct(t[i],1,null,null,t)}return t}function ai(t,n){return arguments.length>2?ct(n,19,M(arguments,2),null,t):ct(n,3,null,null,t)}function oi(){for(var t=arguments,n=t.length;n--;)if(!N(t[n]))throw new ht;return function(){for(var e=arguments,r=t.length;r--;)e=[t[r].apply(this,e)];return e[0]}}function li(t,n){return n=typeof n=="number"?n:+n||t.length,ct(t,4,null,null,null,n)}function be(t,n,e){var r,i,s,o,l,u,h,p=0,w=!1,v=!0;if(!N(t))throw new ht;if(n=ot(0,n)||0,e===!0){var R=!0;v=!1}else W(e)&&(R=e.leading,w="maxWait"in e&&(ot(n,e.maxWait)||0),v="trailing"in e?e.trailing:v);var T=function(){var rt=n-(_t()-o);if(rt<=0){i&&rn(i);var Y=h;i=u=h=c,Y&&(p=_t(),s=t.apply(l,r),!u&&!i&&(r=l=null))}else u=Nt(T,rt)},Z=function(){u&&rn(u),i=u=h=c,(v||w!==n)&&(p=_t(),s=t.apply(l,r),!u&&!i&&(r=l=null))};return function(){if(r=arguments,o=_t(),l=this,h=v&&(u||!R),w===!1)var rt=R&&!u;else{!i&&!R&&(p=o);var Y=w-(o-p),z=Y<=0;z?(i&&(i=rn(i)),p=o,s=t.apply(l,r)):i||(i=Nt(Z,Y))}return z&&u?u=rn(u):!u&&n!==w&&(u=Nt(T,n)),rt&&(z=!0,s=t.apply(l,r)),z&&!u&&!i&&(r=l=null),s}}function ui(t){if(!N(t))throw new ht;var n=M(arguments,1);return Nt(function(){t.apply(c,n)},1)}function fi(t,n){if(!N(t))throw new ht;var e=M(arguments,2);return Nt(function(){t.apply(c,e)},n)}function ci(t,n){if(!N(t))throw new ht;var e=function(){var r=e.cache,i=n?n.apply(this,arguments):$+arguments[0];return G.call(r,i)?r[i]:r[i]=t.apply(this,arguments)};return e.cache={},e}function pi(t){var n,e;if(!N(t))throw new ht;return function(){return n||(n=!0,e=t.apply(this,arguments),t=null),e}}function hi(t){return ct(t,16,M(arguments,1))}function di(t){return ct(t,32,null,M(arguments,1))}function gi(t,n,e){var r=!0,i=!0;if(!N(t))throw new ht;return e===!1?r=!1:W(e)&&(r="leading"in e?e.leading:r,i="trailing"in e?e.trailing:i),E.leading=r,E.maxWait=n,E.trailing=i,be(t,n,E)}function mi(t,n){return ct(n,16,[t])}function vi(t){return function(){return t}}function yi(t,n,e){var r=typeof t;if(t==null||r=="function")return Q(t,n,e);if(r!="object")return xe(t);var i=K(t),s=i[0],o=t[s];return i.length==1&&o===o&&!W(o)?function(l){var u=l[s];return o===u&&(o!==0||1/o==1/u)}:function(l){for(var u=i.length,h=!1;u--&&(h=kt(l[i[u]],t[i[u]],null,!0)););return h}}function bi(t){return t==null?"":yt(t).replace(ar,er)}function Jn(t){return t}function Bn(t,n,e){var r=!0,i=n&&Gt(n);(!n||!e&&!i.length)&&(e==null&&(e=n),s=Ft,n=t,t=a,i=Gt(n)),e===!1?r=!1:W(e)&&"chain"in e&&(r=e.chain);var s=t,o=N(s);V(i,function(l){var u=t[l]=n[l];o&&(s.prototype[l]=function(){var h=this.__chain__,p=this.__wrapped__,w=[p];Lt.apply(w,arguments);var v=u.apply(t,w);if(r||h){if(p===v&&W(v))return this;v=new s(v),v.__chain__=h}return v})})}function wi(){return d._=We,this}function we(){}var _t=wt(_t=I.now)&&_t||function(){return new I().getTime()},xi=An(xt+"08")==8?An:function(t,n){return An(Kt(t)?t.replace(xn,""):t,n||0)};function xe(t){return function(n){return n[t]}}function Si(t,n,e){var r=t==null,i=n==null;if(e==null&&(typeof t=="boolean"&&i?(e=t,t=1):!i&&typeof n=="boolean"&&(e=n,i=!0)),r&&i&&(n=1),t=+t||0,i?(n=t,t=0):n=+n||0,e||t%1||n%1){var s=Zn();return zt(t+s*(n-t+parseFloat("1e-"+((s+"").length-1))),n)}return jn(t,n)}function Fi(t,n){if(t){var e=t[n];return N(e)?t[n]():e}}function _i(t,n,e){var r=a.templateSettings;t=yt(t||""),e=Tn({},e,r);var i=Tn({},e.imports,r.imports),s=K(i),o=fn(i),l,u=0,h=e.interpolate||Et,p="__p += '",w=Ot((e.escape||Et).source+"|"+h.source+"|"+(h===Tt?tn:Et).source+"|"+(e.evaluate||Et).source+"|$","g");t.replace(w,function(rt,Y,z,hn,Vt,Yt){return z||(z=hn),p+=t.slice(u,Yt).replace(Sn,Ke),Y&&(p+=`' +
__e(`+Y+`) +
'`),Vt&&(l=!0,p+=`';
`+Vt+`;
__p += '`),z&&(p+=`' +
((__t = (`+z+`)) == null ? '' : __t) +
'`),u=Yt+rt.length,rt}),p+=`';
`;var v=e.variable,R=v;R||(v="obj",p="with ("+v+`) {
`+p+`
}
`),p=(l?p.replace(Rt,""):p).replace(yn,"$1").replace(bn,"$1;"),p="function("+v+`) {
`+(R?"":v+" || ("+v+` = {});
`)+"var __t, __p = '', __e = _.escape"+(l?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+p+`return __p
}`;var T=`
/*
//# sourceURL=`+(e.sourceURL||"/lodash/template/source["+St+++"]")+`
*/`;try{var Z=P(s,"return "+p+T).apply(c,o)}catch(rt){throw rt.source=p,rt}return n?Z(n):(Z.source=p,Z)}function Di(t,n,e){t=(t=+t)>-1?t:0;var r=-1,i=F(t);for(n=Q(n,e,1);++r<t;)i[r]=n(r);return i}function Ci(t){return t==null?"":yt(t).replace(sr,rr)}function Ei(t){var n=++f;return yt(t??"")+n}function Ai(t){return t=new Ft(t),t.__chain__=!0,t}function Ii(t,n){return n(t),t}function ji(){return this.__chain__=!0,this}function ki(){return yt(this.__wrapped__)}function Se(){return this.__wrapped__}return a.after=ii,a.assign=un,a.at=jr,a.bind=ye,a.bindAll=si,a.bindKey=ai,a.chain=Ai,a.compact=Br,a.compose=oi,a.constant=vi,a.countBy=kr,a.create=ur,a.createCallback=yi,a.curry=li,a.debounce=be,a.defaults=Tn,a.defer=ui,a.delay=fi,a.difference=Hr,a.filter=cn,a.flatten=Wr,a.forEach=V,a.forEachRight=pn,a.forIn=gt,a.forInRight=pr,a.forOwn=q,a.forOwnRight=ie,a.functions=Gt,a.groupBy=Pr,a.indexBy=Rr,a.initial=Vr,a.intersection=Yr,a.invert=se,a.invoke=Tr,a.keys=K,a.map=Wt,a.mapValues=_r,a.max=ue,a.memoize=ci,a.merge=Dr,a.min=Ur,a.omit=Cr,a.once=pi,a.pairs=Er,a.partial=hi,a.partialRight=di,a.pick=Ar,a.pluck=On,a.property=xe,a.pull=Qr,a.range=Zr,a.reject=qr,a.remove=ti,a.rest=zn,a.shuffle=ce,a.sortBy=Nr,a.tap=Ii,a.throttle=gi,a.times=Di,a.toArray=zr,a.transform=Ir,a.union=ni,a.uniq=ge,a.values=fn,a.where=Jr,a.without=ei,a.wrap=mi,a.xor=ri,a.zip=me,a.zipObject=ve,a.collect=Wt,a.drop=zn,a.each=V,a.eachRight=pn,a.extend=un,a.methods=Gt,a.object=ve,a.select=cn,a.tail=zn,a.unique=ge,a.unzip=me,Bn(a),a.clone=or,a.cloneDeep=lr,a.contains=oe,a.escape=bi,a.every=le,a.find=qn,a.findIndex=Gr,a.findKey=fr,a.findLast=Mr,a.findLastIndex=Kr,a.findLastKey=cr,a.has=hr,a.identity=Jn,a.indexOf=he,a.isArguments=ln,a.isArray=J,a.isBoolean=dr,a.isDate=gr,a.isElement=mr,a.isEmpty=vr,a.isEqual=yr,a.isFinite=br,a.isFunction=N,a.isNaN=wr,a.isNull=xr,a.isNumber=ae,a.isObject=W,a.isPlainObject=Un,a.isRegExp=Sr,a.isString=Kt,a.isUndefined=Fr,a.lastIndexOf=Xr,a.mixin=Bn,a.noConflict=wi,a.noop=we,a.now=_t,a.parseInt=xi,a.random=Si,a.reduce=Ln,a.reduceRight=fe,a.result=Fi,a.runInContext=Cn,a.size=Lr,a.some=pe,a.sortedIndex=de,a.template=_i,a.unescape=Ci,a.uniqueId=Ei,a.all=le,a.any=pe,a.detect=qn,a.findWhere=qn,a.foldl=Ln,a.foldr=fe,a.include=oe,a.inject=Ln,Bn((function(){var t={};return q(a,function(n,e){a.prototype[e]||(t[e]=n)}),t})(),!1),a.first=Nn,a.last=$r,a.sample=Or,a.take=Nn,a.head=Nn,q(a,function(t,n){var e=n!=="sample";a.prototype[n]||(a.prototype[n]=function(r,i){var s=this.__chain__,o=t(this.__wrapped__,r,i);return!s&&(r==null||i&&!(e&&typeof r=="function"))?o:new Ft(o,s)})}),a.VERSION="2.4.2",a.prototype.chain=ji,a.prototype.toString=ki,a.prototype.value=Se,a.prototype.valueOf=Se,V(["join","pop","shift"],function(t){var n=It[t];a.prototype[t]=function(){var e=this.__chain__,r=n.apply(this.__wrapped__,arguments);return e?new Ft(r,e):r}}),V(["push","reverse","sort","unshift"],function(t){var n=It[t];a.prototype[t]=function(){return n.apply(this.__wrapped__,arguments),this}}),V(["concat","slice","splice"],function(t){var n=It[t];a.prototype[t]=function(){return new Ft(n.apply(this.__wrapped__,arguments),this.__chain__)}}),a}var vt=Cn();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(A._=vt,define(function(){return vt})):O&&st?Ut?(st.exports=vt)._=vt:O._=vt:A._=vt}).call(Pt)});var Le=Gn(Qt=>{lt();(function(c,x){if(typeof Qt=="object"&&Qt)x(Qt);else{var _={};x(_),typeof define=="function"&&define.amd?define(_):c.Mustache=_}})(Qt,function(c){var x=RegExp.prototype.test;function _(m,g){return x.call(m,g)}var f=/\S/;function $(m){return!_(f,m)}var mt=Object.prototype.toString,Ct=Array.isArray||function(m){return mt.call(m)==="[object Array]"};function xt(m){return typeof m=="function"}function Rt(m){return m.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var yn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function bn(m){return String(m).replace(/[&<>"'\/]/g,function(g){return yn[g]})}function tn(m){if(!Ct(m)||m.length!==2)throw new Error("Invalid tags: "+m);return[new RegExp(Rt(m[0])+"\\s*"),new RegExp("\\s*"+Rt(m[1]))]}var wn=/\s*/,nn=/\s+/,Tt=/\s*=/,xn=/\s*\}/,Et=/#|\^|\/|>|\{|&|=|!/;function en(m,g){g=g||c.tags,m=m||"",typeof g=="string"&&(g=g.split(nn));var y=tn(g),b=new St(m),S=[],U=[],j=[],E=!1,D=!1;function k(){if(E&&!D)for(;j.length;)delete U[j.pop()];else j=[];E=!1,D=!1}for(var it,A,O,st,Ut,B;!b.eos();){if(it=b.pos,O=b.scanUntil(y[0]),O)for(var ut=0,At=O.length;ut<At;++ut)st=O.charAt(ut),$(st)?j.push(U.length):D=!0,U.push(["text",st,it,it+1]),it+=1,st===`
`&&k();if(!b.scan(y[0]))break;if(E=!0,A=b.scan(Et)||"name",b.scan(wn),A==="="?(O=b.scanUntil(Tt),b.scan(Tt),b.scanUntil(y[1])):A==="{"?(O=b.scanUntil(new RegExp("\\s*"+Rt("}"+g[1]))),b.scan(xn),b.scanUntil(y[1]),A="&"):O=b.scanUntil(y[1]),!b.scan(y[1]))throw new Error("Unclosed tag at "+b.pos);if(Ut=[A,O,it,b.pos],U.push(Ut),A==="#"||A==="^")S.push(Ut);else if(A==="/"){if(B=S.pop(),!B)throw new Error('Unopened section "'+O+'" at '+it);if(B[1]!==O)throw new Error('Unclosed section "'+B[1]+'" at '+it)}else A==="name"||A==="{"||A==="&"?D=!0:A==="="&&(y=tn(g=O.split(nn)))}if(B=S.pop(),B)throw new Error('Unclosed section "'+B[1]+'" at '+b.pos);return Fn(Sn(U))}function Sn(m){for(var g=[],y,b,S=0,U=m.length;S<U;++S)y=m[S],y&&(y[0]==="text"&&b&&b[0]==="text"?(b[1]+=y[1],b[3]=y[3]):(g.push(y),b=y));return g}function Fn(m){for(var g=[],y=g,b=[],S,U,j=0,E=m.length;j<E;++j)switch(S=m[j],S[0]){case"#":case"^":y.push(S),b.push(S),y=S[4]=[];break;case"/":U=b.pop(),U[5]=S[2],y=b.length>0?b[b.length-1][4]:g;break;default:y.push(S)}return g}function St(m){this.string=m,this.tail=m,this.pos=0}St.prototype.eos=function(){return this.tail===""},St.prototype.scan=function(m){var g=this.tail.match(m);if(g&&g.index===0){var y=g[0];return this.tail=this.tail.substring(y.length),this.pos+=y.length,y}return""},St.prototype.scanUntil=function(m){var g=this.tail.search(m),y;switch(g){case-1:y=this.tail,this.tail="";break;case 0:y="";break;default:y=this.tail.substring(0,g),this.tail=this.tail.substring(g)}return this.pos+=y.length,y};function tt(m,g){this.view=m??{},this.cache={".":this.view},this.parent=g}tt.prototype.push=function(m){return new tt(m,this)},tt.prototype.lookup=function(m){var g;if(m in this.cache)g=this.cache[m];else{for(var y=this;y;){if(m.indexOf(".")>0){g=y.view;for(var b=m.split("."),S=0;g!=null&&S<b.length;)g=g[b[S++]]}else g=y.view[m];if(g!=null)break;y=y.parent}this.cache[m]=g}return xt(g)&&(g=g.call(this.view)),g};function nt(){this.cache={}}nt.prototype.clearCache=function(){this.cache={}},nt.prototype.parse=function(m,g){var y=this.cache,b=y[m];return b==null&&(b=y[m]=en(m,g)),b},nt.prototype.render=function(m,g,y){var b=this.parse(m),S=g instanceof tt?g:new tt(g);return this.renderTokens(b,S,y,m)},nt.prototype.renderTokens=function(m,g,y,b){var S="",U=this;function j(st){return U.render(st,g,y)}for(var E,D,k=0,it=m.length;k<it;++k)switch(E=m[k],E[0]){case"#":if(D=g.lookup(E[1]),!D)continue;if(Ct(D))for(var A=0,O=D.length;A<O;++A)S+=this.renderTokens(E[4],g.push(D[A]),y,b);else if(typeof D=="object"||typeof D=="string")S+=this.renderTokens(E[4],g.push(D),y,b);else if(xt(D)){if(typeof b!="string")throw new Error("Cannot use higher-order sections without the original template");D=D.call(g.view,b.slice(E[3],E[5]),j),D!=null&&(S+=D)}else S+=this.renderTokens(E[4],g,y,b);break;case"^":D=g.lookup(E[1]),(!D||Ct(D)&&D.length===0)&&(S+=this.renderTokens(E[4],g,y,b));break;case">":if(!y)continue;D=xt(y)?y(E[1]):y[E[1]],D!=null&&(S+=this.renderTokens(this.parse(D),g,y,D));break;case"&":D=g.lookup(E[1]),D!=null&&(S+=D);break;case"name":D=g.lookup(E[1]),D!=null&&(S+=c.escape(D));break;case"text":S+=E[1];break}return S},c.name="mustache.js",c.version="0.8.1",c.tags=["{{","}}"];var pt=new nt;c.clearCache=function(){return pt.clearCache()},c.parse=function(m,g){return pt.parse(m,g)},c.render=function(m,g,y){return pt.render(m,g,y)},c.to_html=function(m,g,y,b){var S=c.render(m,g,y);if(xt(b))b(S);else return S},c.escape=bn,c.Scanner=St,c.Context=tt,c.Writer=nt})});var Je=Gn((Zi,ze)=>{lt();var zi=(qe(),Li(Ue)),Zt=Oe(),Ji=Le(),Bi=new Date,Hi=Bi.getFullYear();function vn(c){switch(c.substr(5,2)){case"01":return"January ";case"02":return"February ";case"03":return"March ";case"04":return"April ";case"05":return"May ";case"06":return"June ";case"07":return"July ";case"08":return"August ";case"09":return"September ";case"10":return"October ";case"11":return"November ";case"12":return"December "}}var Ne={twitter:"fa-twitter-square",facebook:"fa-facebook-square",github:"fa-github-square","google-plus":"fa-google-plus-square",youtube:"fa-youtube-square",vimeo:"fa-vimeo-square",linkedin:"fa-linkedin-square",pinterest:"fa-pinterest-square",angellist:"fa-angellist",flickr:"fa-flickr",behance:"fa-behance-square",codepen:"fa-codepen",blog:"fa-rss-square"};function Gi(c){Zt.each(c.basics.profiles,function(f){Ne[f.network]&&(f.icon=Ne[f.network])}),c.work&&c.work[0].company&&(c.workBool=!0,Zt.each(c.work,function(f){if(f.startDate)switch(f.startDateYear=(f.startDate||"").substr(0,4),f.startDate.substr(5,2)){case"01":f.startDateMonth="January ";break;case"02":f.startDateMonth="February ";break;case"03":f.startDateMonth="March ";break;case"04":f.startDateMonth="April ";break;case"05":f.startDateMonth="May ";break;case"06":f.startDateMonth="June ";break;case"07":f.startDateMonth="July ";break;case"08":f.startDateMonth="August ";break;case"09":f.startDateMonth="September ";break;case"10":f.startDateMonth="October ";break;case"11":f.startDateMonth="November ";break;case"12":f.startDateMonth="December ";break}if(f.endDate)switch(f.endDateYear=(f.endDate||"").substr(0,4),(f.endDate||"").substr(5,2)){case"01":f.endDateMonth="January ";break;case"02":f.endDateMonth="February ";break;case"03":f.endDateMonth="March ";break;case"04":f.endDateMonth="April ";break;case"05":f.endDateMonth="May ";break;case"06":f.endDateMonth="June ";break;case"07":f.endDateMonth="July ";break;case"08":f.endDateMonth="August ";break;case"09":f.endDateMonth="September ";break;case"10":f.endDateMonth="October ";break;case"11":f.endDateMonth="November ";break;case"12":f.endDateMonth="December ";break}else f.endDateYear="Present"})),c.education&&c.education[0].institution&&Zt.each(c.education,function(f){!f.area||!f.studyType?f.educationDetail=(f.area==null?"":f.area)+(f.studyType==null?"":f.studyType):f.educationDetail=f.area+", "+f.studyType,f.startDate?(f.startDateYear=f.startDate.substr(0,4),f.startDateMonth=vn(f.startDate||"")):f.endDateMonth="",f.endDate?(f.endDateYear=f.endDate.substr(0,4),f.endDateMonth=vn(f.endDate||""),f.endDateYear>Hi&&(f.endDateYear+=" (expected)")):(f.endDateYear="Present",f.endDateMonth=""),f.courses&&f.courses[0]&&f.courses[0]!=""&&(f.educationCourses=!0)}),c.awards&&c.awards[0].title&&(c.awardsBool=!0,Zt.each(c.awards,function(f){f.year=(f.date||"").substr(0,4),f.day=(f.date||"").substr(8,2),f.month=vn(f.date||"")})),c.publications&&c.publications[0].name&&(c.publicationsBool=!0,Zt.each(c.publications,function(f){f.year=(f.releaseDate||"").substr(0,4),f.day=(f.releaseDate||"").substr(8,2),f.month=vn(f.releaseDate||"")}));var x=zi.readFileSync("//resume.template","utf8"),_=Ji.render(x,c);return _}ze.exports={render:Gi}});lt();var Dt=Oi(Je(),1),Be=Dt.default??Dt,ns=Be.render??Dt.render,es=Be.pdfRenderOptions??Dt.pdfRenderOptions;export{es as pdfRenderOptions,ns as render};
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
