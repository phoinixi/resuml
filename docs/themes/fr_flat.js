var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Ve=Object.create;var Y=Object.defineProperty;var je=Object.getOwnPropertyDescriptor;var Fe=Object.getOwnPropertyNames;var Ue=Object.getPrototypeOf,ze=Object.prototype.hasOwnProperty;var F=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var Mt=(t,e)=>()=>(t&&(e=t(t=0)),e);var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),We=(t,e)=>{for(var n in e)Y(t,n,{get:e[n],enumerable:!0})},qt=(t,e,n,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Fe(e))!ze.call(t,i)&&i!==n&&Y(t,i,{get:()=>e[i],enumerable:!(s=je(e,i))||s.enumerable});return t};var Ge=(t,e,n)=>(n=t!=null?Ve(Ue(t)):{},qt(e||!t||!t.__esModule?Y(n,"default",{value:t,enumerable:!0}):n,t)),Bt=t=>qt(Y({},"__esModule",{value:!0}),t);var u=Mt(()=>{});var pt={};We(pt,{createReadStream:()=>Yt,createWriteStream:()=>Xt,default:()=>Ke,existsSync:()=>Ut,lstatSync:()=>Gt,mkdirSync:()=>Wt,readFileSync:()=>jt,readdirSync:()=>Ft,rmdirSync:()=>Jt,statSync:()=>ut,unlinkSync:()=>Kt,writeFileSync:()=>zt});function ct(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Vt(t){var e=ct(t);if(X[e]!==void 0)return X[e];for(var n=Object.keys(X),s=0;s<n.length;s++)if(e.endsWith("/"+n[s])||e===n[s])return X[n[s]]}function ht(t){var e=ct(t);if((e===""||e===".")&&q["."]!==void 0)return q["."];if(q[e]!==void 0)return q[e];for(var n=Object.keys(q),s=0;s<n.length;s++)if(e.endsWith("/"+n[s])||e===n[s])return q[n[s]]}var X,q,jt,Ft,Ut,zt,Wt,ut,Gt,Kt,Jt,Yt,Xt,Ke,dt=Mt(()=>{"use strict";u();X={"package.json":`{
  "name": "jsonresume-theme-fr_flat",
  "version": "0.2.1",
  "description": "Mattias Erming Flat theme for jsonresume translated in French",
  "author": "Ga\xEBtan Richard",
  "repository": {
    "type": "git",
    "url": "http://github.com/gaetanr/jsonresume-theme-flat"
  },
  "scripts": {
    "start": "node serve"
  },
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  },
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/gaetanr/jsonresume-theme-flat/issues"
  },
  "homepage": "https://github.com/gaetanr/jsonresume-theme-flat",
  "main": "index.js",
  "keywords": [
    "french",
    "flat"
  ]
}
`,"resume-old.template":`<!doctype html>
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
				<strong>T\xE9l\xE9phone</strong>
				<div class="phone">{{.}}</div>
			</div>
			{{/phone}}
			{{#website}}
			<div class="col-sm-6">
				<strong>Site web</strong>
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
			<h3>\xC0 propos</h3>
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
			<h3>Profils</h3>
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
			<h3>Exp\xE9rience professionnelle</h3>
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
	
	{{#if resume.education.length}}
	<section id="education" class="row">
		<aside class="col-sm-3">
			<h3>Formation</h3>
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
				<h4>Cours</h4>
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

	{{#if resume.volunteer.length}}
	<section id="volunteer" class="row">
		<aside class="col-sm-3">
			<h3>Volontariat</h3>
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
	
	{{#if resume.awards.length}}
	<section id="awards" class="row">
		<aside class="col-sm-3">
			<h3>R\xE9compenses</h3>
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
					<em>Attribu\xE9</em>
					{{.}}
				</div>
				{{/date}}
				{{#awarder}}
				<div class="awarder">
					<em>par</em>
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
					<em>Publi\xE9 par</em>
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
			<h3>Comp\xE9tences</h3>
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
			<h3>Langues</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			{{#each resume.languages}}
			<div class="col-sm-4">
				{{#language}}
				<div class="language">
					{{.}}
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
			<h3>Int\xE9r\xEAts</h3>
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
			<h3>R\xE9f\xE9rences</h3>
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
`,"resume.json":`{
  "basics": {
    "name": "Richard Hendriks",
    "label": "Programmer",
    "picture": "",
    "email": "richard.hendriks@gmail.com",
    "phone": "(912) 555-4321",
    "website": "http://richardhendricks.com",
    "summary": "Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a \u201Clength-limited\u201D conversation!",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "Twitter",
        "username": "neutralthoughts",
        "url": ""
      },
      {
        "network": "SoundCloud",
        "username": "dandymusicnl",
        "url": "https://soundcloud.com/dandymusicnl"
      }
    ]
  },
  "work": [
    {
      "company": "Pied Piper",
      "position": "CEO/President",
      "website": "http://piedpiper.com",
      "startDate": "2013-12-01",
      "endDate": "2014-12-01",
      "summary": "Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores\u2122 that are not merely competitive, but approach the theoretical limit of lossless compression.",
      "highlights": [
        "Build an algorithm for artist to detect if their music was violating copy right infringement laws",
        "Successfully won Techcrunch Disrupt",
        "Optimized an algorithm that holds the current world record for Weisman Scores"
      ]
    }
  ],
  "volunteer": [
    {
      "organization": "CoderDojo",
      "position": "Teacher",
      "website": "http://coderdojo.com/",
      "startDate": "2012-01-01",
      "endDate": "2013-01-01",
      "summary": "Global movement of free coding clubs for young people.",
      "highlights": [
        "Awarded 'Teacher of the Month'"
      ]
    }
  ],
  "education": [
    {
      "institution": "University of Oklahoma",
      "area": "Information Technology",
      "studyType": "Bachelor",
      "startDate": "2011-06-01",
      "endDate": "2014-01-01",
      "gpa": "4.0",
      "courses": [
        "DB1101 - Basic SQL",
        "CS2011 - Java Introduction"
      ]
    }
  ],
  "awards": [
    {
      "title": "Digital Compression Pioneer Award",
      "date": "2014-11-01",
      "awarder": "Techcrunch",
      "summary": "There is no spoon."
    }
  ],
  "publications": [
    {
      "name": "Video compression for 3d media",
      "publisher": "Hooli",
      "releaseDate": "2014-10-01",
      "website": "http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)",
      "summary": "Innovative middle-out compression algorithm that changes the way we store data."
    }
  ],
  "skills": [
    {
      "name": "Web Development",
      "level": "Master",
      "keywords": [
        "HTML",
        "CSS",
        "Javascript"
      ]
    },
    {
      "name": "Compression",
      "level": "Master",
      "keywords": [
        "Mpeg",
        "MP4",
        "GIF"
      ]
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native speaker"
    }
  ],
  "interests": [
    {
      "name": "Wildlife",
      "keywords": [
        "Ferrets",
        "Unicorns"
      ]
    }
  ],
  "references": [
    {
      "name": "Erlich Bachman",
      "reference": "It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company."
    }
  ]
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
				<strong>T\xE9l\xE9phone</strong>
				<div class="phone">{{.}}</div>
			</div>
			{{/phone}}
			{{#website}}
			<div class="col-sm-6">
				<strong>Site web</strong>
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
			<h3>\xC0 propos</h3>
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
			<h3>Profils</h3>
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
			<h3>Exp\xE9rience professionnelle</h3>
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
	
	{{#if resume.education.length}}
	<section id="education" class="row">
		<aside class="col-sm-3">
			<h3>Formation</h3>
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
				<h4>Cours</h4>
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

	{{#if resume.volunteer.length}}
	<section id="volunteer" class="row">
		<aside class="col-sm-3">
			<h3>Volontariat</h3>
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
	
	{{#if resume.awards.length}}
	<section id="awards" class="row">
		<aside class="col-sm-3">
			<h3>R\xE9compenses</h3>
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
					<em>Attribu\xE9</em>
					{{.}}
				</div>
				{{/date}}
				{{#awarder}}
				<div class="awarder">
					<em>par</em>
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
					<em>Publi\xE9 par</em>
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
			<h3>Comp\xE9tences</h3>
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
			<h3>Langues</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			{{#each resume.languages}}
			<div class="col-sm-4">
				{{#language}}
				<div class="language">
					{{.}}
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
			<h3>Int\xE9r\xEAts</h3>
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
			<h3>R\xE9f\xE9rences</h3>
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
	http://fonts.googleapis.com/css?family=Lato:400,700
);
body {
	background: #fff;
	font-family: Lato, sans-serif;
	margin: 0 0 80px;
}
a {
	color: #2ecc71;
}
a:focus,
a:hover {
	color: #f1c40f;
	text-decoration: none;
}
p {
	line-height: 1.5;
	margin: 0;
	text-align: justify;
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
ul ul li {
	line-height: 1.5;
}
li {
	line-height: 1.8;
	list-style: none;
	text-align: justify;
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
	max-width: 900px;
	padding: 0 30px;
}
.col-sm-4 {
	margin-bottom:5px;
}
.col-sm-4 div.language{
	font-weight: bold;
}
.col-sm-6 {
	margin-bottom: 0;
}
.col-sm-6 h4 {
	font-weight: bold;
}
.col-sm-12 h4 {
	margin-top:12px; 
	font-size:15px;
}
.col-sm-12 h4:after {
	content:" :";
}
.col-sm-12 h4.strike-through {
	font-size:18px;
}
.col-sm-12 h4.strike-through:after {
	display:none;
}
.col-sm-12 + .col-sm-12 {
	margin-top: 30px;
}
#header {
	background: #f4f6f6;
	padding: 50px 0;
	margin-bottom: 30px;
}
#header h2 {
	color: #95a5a6;
	font-size: 24px;
}
#content h3 {
	color: #f1c40f;
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
div.summary {
	font-style: italic;
	color: #666;
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
		font-size: 12px;
		margin-top: 1px;
		padding-left: 20px;
		right: 0;
		background: transparent;
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
		content: "Voir les publications";
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
}`},q={".":["README.md","index.js","package.json","resume-old.template","resume.json","resume.template","style.css"]};jt=function(t,e){var n=Vt(t);return n!==void 0?n:""},Ft=function(t,e){var n=ht(t);return n===void 0&&(n=[]),e&&e.withFileTypes?n.map(function(s){var i=ct(t)+"/"+s,r=ht(i)!==void 0;return{name:s,isFile:function(){return!r},isDirectory:function(){return r}}}):n},Ut=function(t){return Vt(t)!==void 0||ht(t)!==void 0},zt=function(){},Wt=function(){},ut=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Gt=ut,Kt=function(){},Jt=function(){},Yt=function(){return{pipe:function(t){return t},on:function(){return this}}},Xt=function(){return{write:function(){},end:function(){},on:function(){return this}}},Ke={readFileSync:jt,readdirSync:Ft,existsSync:Ut,writeFileSync:zt,mkdirSync:Wt,statSync:ut,lstatSync:Gt,unlinkSync:Kt,rmdirSync:Jt,createReadStream:Yt,createWriteStream:Xt}});var ft=m(Zt=>{"use strict";u();function Qt(t){this.string=t}Qt.prototype.toString=function(){return""+this.string};Zt.default=Qt});var B=m(N=>{"use strict";u();var Je=ft().default,Ye={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Xe=/[&<>"'`]/g,Qe=/[&<>"'`]/;function Ze(t){return Ye[t]}function $e(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}N.extend=$e;var mt=Object.prototype.toString;N.toString=mt;var Q=function(t){return typeof t=="function"};Q(/x/)&&(Q=function(t){return typeof t=="function"&&mt.call(t)==="[object Function]"});var Q;N.isFunction=Q;var $t=Array.isArray||function(t){return t&&typeof t=="object"?mt.call(t)==="[object Array]":!1};N.isArray=$t;function tn(t){return t instanceof Je?t.toString():t==null?"":t?(t=""+t,Qe.test(t)?t.replace(Xe,Ze):t):t+""}N.escapeExpression=tn;function en(t){return!t&&t!==0?!0:!!($t(t)&&t.length===0)}N.isEmpty=en;function nn(t,e){return(t?t+".":"")+e}N.appendContextPath=nn});var P=m(ee=>{"use strict";u();var gt=["description","fileName","lineNumber","message","name","number","stack"];function te(t,e){var n;e&&e.firstLine&&(n=e.firstLine,t+=" - "+n+":"+e.firstColumn);for(var s=Error.prototype.constructor.call(this,t),i=0;i<gt.length;i++)this[gt[i]]=s[gt[i]];n&&(this.lineNumber=n,this.column=e.firstColumn)}te.prototype=new Error;ee.default=te});var A=m(_=>{"use strict";u();var y=B(),kt=P().default,sn="2.0.0";_.VERSION=sn;var rn=6;_.COMPILER_REVISION=rn;var an={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};_.REVISION_CHANGES=an;var ne=y.isArray,vt=y.isFunction,se=y.toString,ie="[object Object]";function yt(t,e){this.helpers=t||{},this.partials=e||{},on(this)}_.HandlebarsEnvironment=yt;yt.prototype={constructor:yt,logger:U,log:re,registerHelper:function(t,e){if(se.call(t)===ie){if(e)throw new kt("Arg not supported with multiple helpers");y.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){se.call(t)===ie?y.extend(this.partials,t):this.partials[t]=e},unregisterPartial:function(t){delete this.partials[t]}};function on(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new kt("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(e,n){var s=n.inverse,i=n.fn;if(e===!0)return i(this);if(e===!1||e==null)return s(this);if(ne(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):s(this);if(n.data&&n.ids){var r=Z(n.data);r.contextPath=y.appendContextPath(n.data.contextPath,n.name),n={data:r}}return i(e,n)}),t.registerHelper("each",function(e,n){if(!n)throw new kt("Must pass iterator to #each");var s=n.fn,i=n.inverse,r=0,a="",o,c;if(n.data&&n.ids&&(c=y.appendContextPath(n.data.contextPath,n.ids[0])+"."),vt(e)&&(e=e.call(this)),n.data&&(o=Z(n.data)),e&&typeof e=="object")if(ne(e))for(var l=e.length;r<l;r++)o&&(o.index=r,o.first=r===0,o.last=r===e.length-1,c&&(o.contextPath=c+r)),a=a+s(e[r],{data:o});else for(var p in e)e.hasOwnProperty(p)&&(o&&(o.key=p,o.index=r,o.first=r===0,c&&(o.contextPath=c+p)),a=a+s(e[p],{data:o}),r++);return r===0&&(a=i(this)),a}),t.registerHelper("if",function(e,n){return vt(e)&&(e=e.call(this)),!n.hash.includeZero&&!e||y.isEmpty(e)?n.inverse(this):n.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),t.registerHelper("with",function(e,n){vt(e)&&(e=e.call(this));var s=n.fn;if(y.isEmpty(e))return n.inverse(this);if(n.data&&n.ids){var i=Z(n.data);i.contextPath=y.appendContextPath(n.data.contextPath,n.ids[0]),n={data:i}}return s(e,n)}),t.registerHelper("log",function(e,n){var s=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;t.log(s,e)}),t.registerHelper("lookup",function(e,n){return e&&e[n]})}var U={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(U.level<=t){var n=U.methodMap[t];typeof console<"u"&&console[n]&&console[n].call(console,e)}}};_.logger=U;var re=U.log;_.log=re;var Z=function(t){var e=y.extend({},t);return e._parent=t,e};_.createFrame=Z});var oe=m(V=>{"use strict";u();var bt=B(),H=P().default,ln=A().COMPILER_REVISION,ae=A().REVISION_CHANGES,hn=A().createFrame;function cn(t){var e=t&&t[0]||1,n=ln;if(e!==n)if(e<n){var s=ae[n],i=ae[e];throw new H("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+s+") or downgrade your runtime to an older version ("+i+").")}else throw new H("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}V.checkRevision=cn;function un(t,e){if(!e)throw new H("No environment passed to template");if(!t||!t.main)throw new H("Unknown template object: "+typeof t);e.VM.checkRevision(t.compiler);var n=function(r,a,o,c,l,p,h,x,T){l&&(c=bt.extend({},c,l));var O=e.VM.invokePartial.call(this,r,o,c,p,h,x,T);if(O==null&&e.compile){var Lt={helpers:p,partials:h,data:x,depths:T};h[o]=e.compile(r,{data:x!==void 0,compat:t.compat},e),O=h[o](c,Lt)}if(O!=null){if(a){for(var w=O.split(`
`),E=0,rt=w.length;E<rt&&!(!w[E]&&E+1===rt);E++)w[E]=a+w[E];O=w.join(`
`)}return O}else throw new H("The partial "+o+" could not be compiled when running in runtime-only mode")},s={lookup:function(r,a){for(var o=r.length,c=0;c<o;c++)if(r[c]&&r[c][a]!=null)return r[c][a]},lambda:function(r,a){return typeof r=="function"?r.call(a):r},escapeExpression:bt.escapeExpression,invokePartial:n,fn:function(r){return t[r]},programs:[],program:function(r,a,o){var c=this.programs[r],l=this.fn(r);return a||o?c=$(this,r,l,a,o):c||(c=this.programs[r]=$(this,r,l)),c},data:function(r,a){for(;r&&a--;)r=r._parent;return r},merge:function(r,a){var o=r||a;return r&&a&&r!==a&&(o=bt.extend({},a,r)),o},noop:e.VM.noop,compilerInfo:t.compiler},i=function(r,a){a=a||{};var o=a.data;i._setup(a),!a.partial&&t.useData&&(o=fn(r,o));var c;return t.useDepths&&(c=a.depths?[r].concat(a.depths):[r]),t.main.call(s,r,s.helpers,s.partials,o,c)};return i.isTop=!0,i._setup=function(r){r.partial?(s.helpers=r.helpers,s.partials=r.partials):(s.helpers=s.merge(r.helpers,e.helpers),t.usePartial&&(s.partials=s.merge(r.partials,e.partials)))},i._child=function(r,a,o){if(t.useDepths&&!o)throw new H("must pass parent depths");return $(s,r,t[r],a,o)},i}V.template=un;function $(t,e,n,s,i){var r=function(a,o){return o=o||{},n.call(t,a,t.helpers,t.partials,o.data||s,i&&[a].concat(i))};return r.program=e,r.depth=i?i.length:0,r}V.program=$;function pn(t,e,n,s,i,r,a){var o={partial:!0,helpers:s,partials:i,data:r,depths:a};if(t===void 0)throw new H("The partial "+e+" could not be found");if(t instanceof Function)return t(n,o)}V.invokePartial=pn;function dn(){return""}V.noop=dn;function fn(t,e){return(!e||!("root"in e))&&(e=e?hn(e):{},e.root=t),e}});var pe=m(ue=>{"use strict";u();var le=A(),mn=ft().default,gn=P().default,wt=B(),he=oe(),ce=function(){var t=new le.HandlebarsEnvironment;return wt.extend(t,le),t.SafeString=mn,t.Exception=gn,t.Utils=wt,t.escapeExpression=wt.escapeExpression,t.VM=he,t.template=function(e){return he.template(e,t)},t},tt=ce();tt.create=ce;tt.default=tt;ue.default=tt});var St=m(fe=>{"use strict";u();var de=P().default;function v(t){t=t||{},this.firstLine=t.first_line,this.firstColumn=t.first_column,this.lastColumn=t.last_column,this.lastLine=t.last_line}var z={ProgramNode:function(t,e,n){v.call(this,n),this.type="program",this.statements=t,this.strip=e},MustacheNode:function(t,e,n,s,i){if(v.call(this,i),this.type="mustache",this.strip=s,n!=null&&n.charAt){var r=n.charAt(3)||n.charAt(2);this.escaped=r!=="{"&&r!=="&"}else this.escaped=!!n;t instanceof z.SexprNode?this.sexpr=t:this.sexpr=new z.SexprNode(t,e),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(t,e,n){v.call(this,n),this.type="sexpr",this.hash=e;var s=this.id=t[0],i=this.params=t.slice(1);this.isHelper=!!(i.length||e),this.eligibleHelper=this.isHelper||s.isSimple},PartialNode:function(t,e,n,s,i){v.call(this,i),this.type="partial",this.partialName=t,this.context=e,this.hash=n,this.strip=s,this.strip.inlineStandalone=!0},BlockNode:function(t,e,n,s,i){v.call(this,i),this.type="block",this.mustache=t,this.program=e,this.inverse=n,this.strip=s,n&&!e&&(this.isInverse=!0)},RawBlockNode:function(t,e,n,s){if(v.call(this,s),t.sexpr.id.original!==n)throw new de(t.sexpr.id.original+" doesn't match "+n,this);e=new z.ContentNode(e,s),this.type="block",this.mustache=t,this.program=new z.ProgramNode([e],{},s)},ContentNode:function(t,e){v.call(this,e),this.type="content",this.original=this.string=t},HashNode:function(t,e){v.call(this,e),this.type="hash",this.pairs=t},IdNode:function(t,e){v.call(this,e),this.type="ID";for(var n="",s=[],i=0,r="",a=0,o=t.length;a<o;a++){var c=t[a].part;if(n+=(t[a].separator||"")+c,c===".."||c==="."||c==="this"){if(s.length>0)throw new de("Invalid path: "+n,this);c===".."?(i++,r+="../"):this.isScoped=!0}else s.push(c)}this.original=n,this.parts=s,this.string=s.join("."),this.depth=i,this.idName=r+this.string,this.isSimple=t.length===1&&!this.isScoped&&i===0,this.stringModeValue=this.string},PartialNameNode:function(t,e){v.call(this,e),this.type="PARTIAL_NAME",this.name=t.original},DataNode:function(t,e){v.call(this,e),this.type="DATA",this.id=t,this.stringModeValue=t.stringModeValue,this.idName="@"+t.stringModeValue},StringNode:function(t,e){v.call(this,e),this.type="STRING",this.original=this.string=this.stringModeValue=t},NumberNode:function(t,e){v.call(this,e),this.type="NUMBER",this.original=this.number=t,this.stringModeValue=Number(t)},BooleanNode:function(t,e){v.call(this,e),this.type="BOOLEAN",this.bool=t,this.stringModeValue=t==="true"},CommentNode:function(t,e){v.call(this,e),this.type="comment",this.comment=t,this.strip={inlineStandalone:!0}}};fe.default=z});var ge=m(me=>{"use strict";u();var vn=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(i,r,a,o,c,l,p){var h=l.length-1;switch(c){case 1:return o.prepareProgram(l[h-1].statements,!0),l[h-1];break;case 2:this.$=new o.ProgramNode(o.prepareProgram(l[h]),{},this._$);break;case 3:this.$=l[h];break;case 4:this.$=l[h];break;case 5:this.$=l[h];break;case 6:this.$=l[h];break;case 7:this.$=new o.ContentNode(l[h],this._$);break;case 8:this.$=new o.CommentNode(l[h],this._$);break;case 9:this.$=new o.RawBlockNode(l[h-2],l[h-1],l[h],this._$);break;case 10:this.$=new o.MustacheNode(l[h-1],null,"","",this._$);break;case 11:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!1,this._$);break;case 12:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!0,this._$);break;case 13:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 14:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 15:this.$={strip:o.stripFlags(l[h-1],l[h-1]),program:l[h]};break;case 16:this.$={path:l[h-1],strip:o.stripFlags(l[h-2],l[h])};break;case 17:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 18:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 19:this.$=new o.PartialNode(l[h-3],l[h-2],l[h-1],o.stripFlags(l[h-4],l[h]),this._$);break;case 20:this.$=new o.PartialNode(l[h-2],void 0,l[h-1],o.stripFlags(l[h-3],l[h]),this._$);break;case 21:this.$=new o.SexprNode([l[h-2]].concat(l[h-1]),l[h],this._$);break;case 22:this.$=new o.SexprNode([l[h]],null,this._$);break;case 23:this.$=l[h];break;case 24:this.$=new o.StringNode(l[h],this._$);break;case 25:this.$=new o.NumberNode(l[h],this._$);break;case 26:this.$=new o.BooleanNode(l[h],this._$);break;case 27:this.$=l[h];break;case 28:l[h-1].isHelper=!0,this.$=l[h-1];break;case 29:this.$=new o.HashNode(l[h],this._$);break;case 30:this.$=[l[h-2],l[h]];break;case 31:this.$=new o.PartialNameNode(l[h],this._$);break;case 32:this.$=new o.PartialNameNode(new o.StringNode(l[h],this._$),this._$);break;case 33:this.$=new o.PartialNameNode(new o.NumberNode(l[h],this._$));break;case 34:this.$=new o.DataNode(l[h],this._$);break;case 35:this.$=new o.IdNode(l[h],this._$);break;case 36:l[h-2].push({part:l[h],separator:l[h-1]}),this.$=l[h-2];break;case 37:this.$=[{part:l[h]}];break;case 38:this.$=[];break;case 39:l[h-1].push(l[h]);break;case 48:this.$=[];break;case 49:l[h-1].push(l[h]);break;case 52:this.$=[l[h]];break;case 53:l[h-1].push(l[h]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(i,r){throw new Error(i)},parse:function(i){var r=this,a=[0],o=[null],c=[],l=this.table,p="",h=0,x=0,T=0,O=2,Lt=1;this.lexer.setInput(i),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var w=this.lexer.yylloc;c.push(w);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function rt(b){a.length=a.length-2*b,o.length=o.length-b,c.length=c.length-b}function Be(){var b;return b=r.lexer.lex()||1,typeof b!="number"&&(b=r.symbols_[b]||b),b}for(var g,at,I,k,Fn,ot,M={},K,S,Tt,J;;){if(I=a[a.length-1],this.defaultActions[I]?k=this.defaultActions[I]:((g===null||typeof g>"u")&&(g=Be()),k=l[I]&&l[I][g]),typeof k>"u"||!k.length||!k[0]){var lt="";if(!T){J=[];for(K in l[I])this.terminals_[K]&&K>2&&J.push("'"+this.terminals_[K]+"'");this.lexer.showPosition?lt="Parse error on line "+(h+1)+`:
`+this.lexer.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[g]||g)+"'":lt="Parse error on line "+(h+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(lt,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:w,expected:J})}}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+g);switch(k[0]){case 1:a.push(g),o.push(this.lexer.yytext),c.push(this.lexer.yylloc),a.push(k[1]),g=null,at?(g=at,at=null):(x=this.lexer.yyleng,p=this.lexer.yytext,h=this.lexer.yylineno,w=this.lexer.yylloc,T>0&&T--);break;case 2:if(S=this.productions_[k[1]][1],M.$=o[o.length-S],M._$={first_line:c[c.length-(S||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(S||1)].first_column,last_column:c[c.length-1].last_column},E&&(M._$.range=[c[c.length-(S||1)].range[0],c[c.length-1].range[1]]),ot=this.performAction.call(M,p,x,h,this.yy,k[1],o,c),typeof ot<"u")return ot;S&&(a=a.slice(0,-1*S*2),o=o.slice(0,-1*S),c=c.slice(0,-1*S)),a.push(this.productions_[k[1]][0]),o.push(M.$),c.push(M._$),Tt=l[a[a.length-2]][a[a.length-1]],a.push(Tt);break;case 3:return!0}}return!0}},e=(function(){var s={EOF:1,parseError:function(r,a){if(this.yy.parser)this.yy.parser.parseError(r,a);else throw new Error(r)},setInput:function(i){return this._input=i,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var r=i.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var r=i.length,a=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===o.length?this.yylloc.first_column:0)+o[o.length-a.length].length-a[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),r=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,r,a,o,c,l;this._more||(this.yytext="",this.match="");for(var p=this._currentRules(),h=0;h<p.length&&(a=this._input.match(this.rules[p[h]]),!(a&&(!r||a[0].length>r[0].length)&&(r=a,o=h,!this.options.flex)));h++);return r?(l=r[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],i=this.performAction.call(this,this.yy,this,p[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return typeof r<"u"?r:this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(r){this.begin(r)}};return s.options={},s.performAction=function(r,a,o,c){function l(h,x){return a.yytext=a.yytext.substr(h,a.yyleng-x)}var p=c;switch(o){case 0:if(a.yytext.slice(-2)==="\\\\"?(l(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(l(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return a.yytext=a.yytext.substr(5,a.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return l(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return l(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return a.yytext=l(1,2).replace(/\\"/g,'"'),42;break;case 30:return a.yytext=l(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return a.yytext=l(1,2),50;break;case 37:return"INVALID";case 38:return 5}},s.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],s.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},s})();t.lexer=e;function n(){this.yy={}}return n.prototype=t,t.Parser=n,new n})();me.default=vn});var ve=m(et=>{"use strict";u();var kn=P().default;function yn(t,e){return{left:t.charAt(2)==="~",right:e.charAt(e.length-3)==="~"}}et.stripFlags=yn;function bn(t,e,n,s,i,r){if(t.sexpr.id.original!==s.path.original)throw new kn(t.sexpr.id.original+" doesn't match "+s.path.original,t);var a=n&&n.program,o={left:t.strip.left,right:s.strip.right,openStandalone:Et(e.statements),closeStandalone:xt((a||e).statements)};if(t.strip.right&&R(e.statements,null,!0),a){var c=n.strip;c.left&&C(e.statements,null,!0),c.right&&R(a.statements,null,!0),s.strip.left&&C(a.statements,null,!0),xt(e.statements)&&Et(a.statements)&&(C(e.statements),R(a.statements))}else s.strip.left&&C(e.statements,null,!0);return i?new this.BlockNode(t,a,e,o,r):new this.BlockNode(t,e,a,o,r)}et.prepareBlock=bn;function wn(t,e){for(var n=0,s=t.length;n<s;n++){var i=t[n],r=i.strip;if(r){var a=xt(t,n,e,i.type==="partial"),o=Et(t,n,e),c=r.openStandalone&&a,l=r.closeStandalone&&o,p=r.inlineStandalone&&a&&o;r.right&&R(t,n,!0),r.left&&C(t,n,!0),p&&(R(t,n),C(t,n)&&i.type==="partial"&&(i.indent=/([ \t]+$)/.exec(t[n-1].original)?RegExp.$1:"")),c&&(R((i.program||i.inverse).statements),C(t,n)),l&&(R(t,n),C((i.inverse||i.program).statements))}}return t}et.prepareProgram=wn;function xt(t,e,n){e===void 0&&(e=t.length);var s=t[e-1],i=t[e-2];if(!s)return n;if(s.type==="content")return(i||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(s.original)}function Et(t,e,n){e===void 0&&(e=-1);var s=t[e+1],i=t[e+2];if(!s)return n;if(s.type==="content")return(i||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(s.original)}function R(t,e,n){var s=t[e==null?0:e+1];if(!(!s||s.type!=="content"||!n&&s.rightStripped)){var i=s.string;s.string=s.string.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),s.rightStripped=s.string!==i}}function C(t,e,n){var s=t[e==null?t.length-1:e-1];if(!(!s||s.type!=="content"||!n&&s.leftStripped)){var i=s.string;return s.string=s.string.replace(n?/\s+$/:/[ \t]+$/,""),s.leftStripped=s.string!==i,s.leftStripped}}});var _t=m(Pt=>{"use strict";u();var Nt=ge().default,ke=St().default,Sn=ve(),xn=B().extend;Pt.parser=Nt;var ye={};xn(ye,Sn,ke);function En(t){return t.constructor===ke.ProgramNode?t:(Nt.yy=ye,Nt.parse(t))}Pt.parse=En});var st=m(nt=>{"use strict";u();var Ot=P().default,be=B().isArray,Nn=[].slice;function Ct(){}nt.Compiler=Ct;Ct.prototype={compiler:Ct,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var n=0;n<e;n++){var s=this.opcodes[n],i=t.opcodes[n];if(s.opcode!==i.opcode||!we(s.args,i.args))return!1}for(e=this.children.length,n=0;n<e;n++)if(!this.children[n].equals(t.children[n]))return!1;return!0},guid:0,compile:function(t,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds;var n=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},n)for(var s in n)this.options.knownHelpers[s]=n[s];return this.accept(t)},accept:function(t){return this[t.type](t)},program:function(t){for(var e=t.statements,n=0,s=e.length;n<s;n++)this.accept(e[n]);return this.isSimple=s===1,this.depths.list=this.depths.list.sort(function(i,r){return i-r}),this},compileProgram:function(t){var e=new this.compiler().compile(t,this.options),n=this.guid++,s;this.usePartial=this.usePartial||e.usePartial,this.children[n]=e;for(var i=0,r=e.depths.list.length;i<r;i++)s=e.depths.list[i],!(s<2)&&this.addDepth(s-1);return n},block:function(t){var e=t.mustache,n=t.program,s=t.inverse;n&&(n=this.compileProgram(n)),s&&(s=this.compileProgram(s));var i=e.sexpr,r=this.classifySexpr(i);r==="helper"?this.helperSexpr(i,n,s):r==="simple"?(this.simpleSexpr(i),this.opcode("pushProgram",n),this.opcode("pushProgram",s),this.opcode("emptyHash"),this.opcode("blockValue",i.id.original)):(this.ambiguousSexpr(i,n,s),this.opcode("pushProgram",n),this.opcode("pushProgram",s),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var e=t.pairs,n,s;for(this.opcode("pushHash"),n=0,s=e.length;n<s;n++)this.pushParam(e[n][1]);for(;n--;)this.opcode("assignToHash",e[n][0]);this.opcode("popHash")},partial:function(t){var e=t.partialName;this.usePartial=!0,t.hash?this.accept(t.hash):this.opcode("push","undefined"),t.context?this.accept(t.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",e.name,t.indent||""),this.opcode("append")},content:function(t){t.string&&this.opcode("appendContent",t.string)},mustache:function(t){this.sexpr(t.sexpr),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(t,e,n){var s=t.id,i=s.parts[0],r=e!=null||n!=null;this.opcode("getContext",s.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.ID(s),this.opcode("invokeAmbiguous",i,r)},simpleSexpr:function(t){var e=t.id;e.type==="DATA"?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,n){var s=this.setupFullMustacheParams(t,e,n),i=t.id,r=i.parts[0];if(this.options.knownHelpers[r])this.opcode("invokeKnownHelper",s.length,r);else{if(this.options.knownHelpersOnly)throw new Ot("You specified knownHelpersOnly, but used the unknown helper "+r,t);i.falsy=!0,this.ID(i),this.opcode("invokeHelper",s.length,i.original,i.isSimple)}},sexpr:function(t){var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0];e?this.opcode("lookupOnContext",t.parts,t.falsy,t.isScoped):this.opcode("pushContext")},DATA:function(t){this.options.data=!0,this.opcode("lookupData",t.id.depth,t.id.parts)},STRING:function(t){this.opcode("pushString",t.string)},NUMBER:function(t){this.opcode("pushLiteral",t.number)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:Nn.call(arguments,1)})},addDepth:function(t){t!==0&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifySexpr:function(t){var e=t.isHelper,n=t.eligibleHelper,s=this.options;if(n&&!e){var i=t.id.parts[0];s.knownHelpers[i]?e=!0:s.knownHelpersOnly&&(n=!1)}return e?"helper":n?"ambiguous":"simple"},pushParams:function(t){for(var e=0,n=t.length;e<n;e++)this.pushParam(t[e])},pushParam:function(t){this.stringParams?(t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",t.stringModeValue,t.type),t.type==="sexpr"&&this.sexpr(t)):(this.trackIds&&this.opcode("pushId",t.type,t.idName||t.stringModeValue),this.accept(t))},setupFullMustacheParams:function(t,e,n){var s=t.params;return this.pushParams(s),this.opcode("pushProgram",e),this.opcode("pushProgram",n),t.hash?this.hash(t.hash):this.opcode("emptyHash"),s}};function Pn(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new Ot("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var s=n.parse(t),i=new n.Compiler().compile(s,e);return new n.JavaScriptCompiler().compile(i,e)}nt.precompile=Pn;function _n(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new Ot("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var s;function i(){var a=n.parse(t),o=new n.Compiler().compile(a,e),c=new n.JavaScriptCompiler().compile(o,e,void 0,!0);return n.template(c)}var r=function(a,o){return s||(s=i()),s.call(this,a,o)};return r._setup=function(a){return s||(s=i()),s._setup(a)},r._child=function(a,o,c){return s||(s=i()),s._child(a,o,c)},r}nt.compile=_n;function we(t,e){if(t===e)return!0;if(be(t)&&be(e)&&t.length===e.length){for(var n=0;n<t.length;n++)if(!we(t[n],e[n]))return!1;return!0}}});var Ne=m(Ee=>{"use strict";u();var Cn=A().COMPILER_REVISION,On=A().REVISION_CHANGES,It=P().default;function W(t){this.value=t}function D(){}D.prototype={nameLookup:function(t,e){return D.isValidJavaScriptVariableName(e)?t+"."+e:t+"['"+e+"']"},depthedLookup:function(t){return this.aliases.lookup="this.lookup",'lookup(depths, "'+t+'")'},compilerInfo:function(){var t=Cn,e=On[t];return[t,e]},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,e,n,s){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!s,this.name=this.environment.name,this.isChild=!!n,this.context=n||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.depths.list.length||this.options.compat;var i=t.opcodes,r,a,o;for(a=0,o=i.length;a<o;a++)r=i[a],this[r.opcode].apply(this,r.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new It("Compile completed with content left on stack");var c=this.createFunctionContext(s);if(this.isChild)return c;var l={compiler:this.compilerInfo(),main:c},p=this.context.programs;for(a=0,o=p.length;a<o;a++)p[a]&&(l[a]=p[a]);return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.options.compat&&(l.compat=!0),s||(l.compiler=JSON.stringify(l.compiler),l=this.objectLiteral(l)),l},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(t){var e="",n=this.stackVars.concat(this.registers.list);n.length>0&&(e+=", "+n.join(", "));for(var s in this.aliases)this.aliases.hasOwnProperty(s)&&(e+=", "+s+"="+this.aliases[s]);var i=["depth0","helpers","partials","data"];this.useDepths&&i.push("depths");var r=this.mergeSource(e);return t?(i.push(r),Function.apply(this,i)):"function("+i.join(",")+`) {
  `+r+"}"},mergeSource:function(t){for(var e="",n,s=!this.forceBuffer,i,r=0,a=this.source.length;r<a;r++){var o=this.source[r];o.appendToBuffer?n?n=n+`
    + `+o.content:n=o.content:(n&&(e?e+="buffer += "+n+`;
  `:(i=!0,e=n+`;
  `),n=void 0),e+=o+`
  `,this.environment.isSimple||(s=!1))}return s?(n||!e)&&(e+="return "+(n||'""')+`;
`):(t+=", buffer = "+(i?"":this.initializeBuffer()),n?e+="return buffer + "+n+`;
`:e+=`return buffer;
`),t&&(e="var "+t.substring(2)+(i?"":`;
  `)+e),e},blockValue:function(t){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams(t,0,e);var n=this.popStack();e.splice(1,0,n),this.push("blockHelperMissing.call("+e.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams("",0,t,!0),this.flushInline();var e=this.topStack();t.splice(1,0,e),this.pushSource("if (!"+this.lastHelper+") { "+e+" = blockHelperMissing.call("+t.join(", ")+"); }")},appendContent:function(t){this.pendingContent&&(t=this.pendingContent+t),this.pendingContent=t},append:function(){this.flushInline();var t=this.popStack();this.pushSource("if ("+t+" != null) { "+this.appendToBuffer(t)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,n){var s=0,i=t.length;for(!n&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[s++])):this.pushContext();s<i;s++)this.replaceStack(function(r){var a=this.nameLookup(r,t[s],"context");return e?" && "+a:" != null ? "+a+" : "+r})},lookupData:function(t,e){t?this.pushStackLiteral("this.data(data, "+t+")"):this.pushStackLiteral("data");for(var n=e.length,s=0;s<n;s++)this.replaceStack(function(i){return" && "+this.nameLookup(i,e[s],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),e!=="sexpr"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+t.ids.join(",")+"}"),this.stringParams&&(this.push("{"+t.contexts.join(",")+"}"),this.push("{"+t.types.join(",")+"}")),this.push(`{
    `+t.values.join(`,
    `)+`
  }`)},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},invokeHelper:function(t,e,n){this.aliases.helperMissing="helpers.helperMissing";var s=this.popStack(),i=this.setupHelper(t,e),r=(n?i.name+" || ":"")+s+" || helperMissing";this.push("(("+r+").call("+i.callParams+"))")},invokeKnownHelper:function(t,e){var n=this.setupHelper(t,e);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(t,e){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var n=this.popStack();this.emptyHash();var s=this.setupHelper(0,t,e),i=this.lastHelper=this.nameLookup("helpers",t,"helper");this.push("((helper = (helper = "+i+" || "+n+") != null ? helper : helperMissing"+(s.paramsInit?"),("+s.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+s.callParams+") : helper))")},invokePartial:function(t,e){var n=[this.nameLookup("partials",t,"partial"),"'"+e+"'","'"+t+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?n.push("data"):this.options.compat&&n.push("undefined"),this.options.compat&&n.push("depths"),this.push("this.invokePartial("+n.join(", ")+")")},assignToHash:function(t){var e=this.popStack(),n,s,i;this.trackIds&&(i=this.popStack()),this.stringParams&&(s=this.popStack(),n=this.popStack());var r=this.hash;n&&r.contexts.push("'"+t+"': "+n),s&&r.types.push("'"+t+"': "+s),i&&r.ids.push("'"+t+"': "+i),r.values.push("'"+t+"': ("+e+")")},pushId:function(t,e){t==="ID"||t==="DATA"?this.pushString(e):t==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:D,compileChildren:function(t,e){for(var n=t.children,s,i,r=0,a=n.length;r<a;r++){s=n[r],i=new this.compiler;var o=this.matchExistingProgram(s);o==null?(this.context.programs.push(""),o=this.context.programs.length,s.index=o,s.name="program"+o,this.context.programs[o]=i.compile(s,e,this.context,!this.precompile),this.context.environments[o]=s,this.useDepths=this.useDepths||i.useDepths):(s.index=o,s.name="program"+o)}},matchExistingProgram:function(t){for(var e=0,n=this.context.environments.length;e<n;e++){var s=this.context.environments[e];if(s&&s.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],n=e.depths.list,s=this.useDepths,i,r=[e.index,"data"];return s&&r.push("depths"),"this.program("+r.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new W(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var e=this.incrStack();return this.pushSource(e+" = "+t+";"),this.compileStack.push(e),e},replaceStack:function(t){var e="",n=this.isInline(),s,i,r;if(!this.isInline())throw new It("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof W)e=s=a.value,r=!0;else{i=!this.stackSlot;var o=i?this.incrStack():this.topStackName();e="("+this.push(o)+" = "+a+")",s=this.topStack()}var c=t.call(this,s);r||this.popStack(),i&&this.stackSlot--,this.push("("+e+c+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var e=0,n=t.length;e<n;e++){var s=t[e];s instanceof W?this.compileStack.push(s):this.pushStack(s)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),n=(e?this.inlineStack:this.compileStack).pop();if(!t&&n instanceof W)return n.value;if(!e){if(!this.stackSlot)throw new It("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof W?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(this.quotedString(n)+":"+t[n]);return"{"+e.join(",")+"}"},setupHelper:function(t,e,n){var s=[],i=this.setupParams(e,t,s,n),r=this.nameLookup("helpers",e,"helper");return{params:s,paramsInit:i,name:r,callParams:[this.contextName(0)].concat(s).join(", ")}},setupOptions:function(t,e,n){var s={},i=[],r=[],a=[],o,c,l;s.name=this.quotedString(t),s.hash=this.popStack(),this.trackIds&&(s.hashIds=this.popStack()),this.stringParams&&(s.hashTypes=this.popStack(),s.hashContexts=this.popStack()),c=this.popStack(),l=this.popStack(),(l||c)&&(l||(l="this.noop"),c||(c="this.noop"),s.fn=l,s.inverse=c);for(var p=e;p--;)o=this.popStack(),n[p]=o,this.trackIds&&(a[p]=this.popStack()),this.stringParams&&(r[p]=this.popStack(),i[p]=this.popStack());return this.trackIds&&(s.ids="["+a.join(",")+"]"),this.stringParams&&(s.types="["+r.join(",")+"]",s.contexts="["+i.join(",")+"]"),this.options.data&&(s.data="data"),s},setupParams:function(t,e,n,s){var i=this.objectLiteral(this.setupOptions(t,e,n));return s?(this.useRegister("options"),n.push("options"),"options="+i):(n.push(i),"")}};var Se="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),In=D.RESERVED_WORDS={};for(it=0,xe=Se.length;it<xe;it++)In[Se[it]]=!0;var it,xe;D.isValidJavaScriptVariableName=function(t){return!D.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};Ee.default=D});var Ce=m(_e=>{"use strict";u();var j=pe().default,An=St().default,Hn=_t().parser,Rn=_t().parse,Dn=st().Compiler,Ln=st().compile,Tn=st().precompile,Mn=Ne().default,qn=j.create,Pe=function(){var t=qn();return t.compile=function(e,n){return Ln(e,n,t)},t.precompile=function(e,n){return Tn(e,n,t)},t.AST=An,t.Compiler=Dn,t.JavaScriptCompiler=Mn,t.Parser=Hn,t.parse=Rn,t};j=Pe();j.create=Pe;j.default=j;_e.default=j});var Ht=m(Oe=>{"use strict";u();function At(){}At.prototype={constructor:At,accept:function(t){return this[t.type](t)}};Oe.default=At});var Ie=m(Rt=>{"use strict";u();var Bn=Ht().default;function Vn(t){return new f().accept(t)}Rt.print=Vn;function f(){this.padding=0}Rt.PrintVisitor=f;f.prototype=new Bn;f.prototype.pad=function(t){for(var e="",n=0,s=this.padding;n<s;n++)e=e+"  ";return e=e+t+`
`,e};f.prototype.program=function(t){var e="",n=t.statements,s,i;for(s=0,i=n.length;s<i;s++)e=e+this.accept(n[s]);return this.padding--,e};f.prototype.block=function(t){var e="";return e=e+this.pad("BLOCK:"),this.padding++,e=e+this.accept(t.mustache),t.program&&(e=e+this.pad("PROGRAM:"),this.padding++,e=e+this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e=e+this.pad("{{^}}"),this.padding++,e=e+this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e};f.prototype.sexpr=function(t){for(var e=t.params,n=[],s,i=0,r=e.length;i<r;i++)n.push(this.accept(e[i]));return e="["+n.join(", ")+"]",s=t.hash?" "+this.accept(t.hash):"",this.accept(t.id)+" "+e+s};f.prototype.mustache=function(t){return this.pad("{{ "+this.accept(t.sexpr)+" }}")};f.prototype.partial=function(t){var e=this.accept(t.partialName);return t.context&&(e+=" "+this.accept(t.context)),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")};f.prototype.hash=function(t){for(var e=t.pairs,n=[],s,i,r=0,a=e.length;r<a;r++)s=e[r][0],i=this.accept(e[r][1]),n.push(s+"="+i);return"HASH{"+n.join(", ")+"}"};f.prototype.STRING=function(t){return'"'+t.string+'"'};f.prototype.NUMBER=function(t){return"NUMBER{"+t.number+"}"};f.prototype.BOOLEAN=function(t){return"BOOLEAN{"+t.bool+"}"};f.prototype.ID=function(t){var e=t.parts.join("/");return t.parts.length>1?"PATH:"+e:"ID:"+e};f.prototype.PARTIAL_NAME=function(t){return"PARTIAL:"+t.name};f.prototype.DATA=function(t){return"@"+this.accept(t.id)};f.prototype.content=function(t){return this.pad("CONTENT[ '"+t.string+"' ]")};f.prototype.comment=function(t){return this.pad("{{! '"+t.comment+"' }}")}});var Re=m((xs,He)=>{u();var G=Ce().default;G.Visitor=Ht().default;var Ae=Ie();G.PrintVisitor=Ae.PrintVisitor;G.print=Ae.print;He.exports=G;typeof F<"u"&&F.extensions&&(Dt=function(t,e){var n=(dt(),Bt(pt)),s=n.readFileSync(e,"utf8");t.exports=G.compile(s)},F.extensions[".handlebars"]=Dt,F.extensions[".hbs"]=Dt);var Dt});var Me=m((Ps,Te)=>{u();var De=(dt(),Bt(pt)),Le=Re();Te.exports={render:jn};function jn(t){var e=De.readFileSync("//style.css","utf-8"),n=De.readFileSync("//resume.template","utf-8");return Le.compile(n)({css:e,resume:t})}Le.registerHelper("nl2br",function(t){return(t||"").replace(/\n/g,"</p><p>")})});u();var L=Ge(Me(),1),qe=L.default??L,Cs=qe.render??L.render,Os=qe.pdfRenderOptions??L.pdfRenderOptions;export{Os as pdfRenderOptions,Cs as render};
