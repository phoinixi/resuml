var Bt=Object.create;var J=Object.defineProperty;var Vt=Object.getOwnPropertyDescriptor;var Ft=Object.getOwnPropertyNames;var Ut=Object.getPrototypeOf,Wt=Object.prototype.hasOwnProperty;var B=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var Tn=(n,t)=>()=>(n&&(t=n(n=0)),t);var w=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),Gt=(n,t)=>{for(var e in t)J(n,e,{get:t[e],enumerable:!0})},Mn=(n,t,e,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Ft(t))!Wt.call(n,r)&&r!==e&&J(n,r,{get:()=>t[r],enumerable:!(o=Vt(t,r))||o.enumerable});return n};var Kt=(n,t,e)=>(e=n!=null?Bt(Ut(n)):{},Mn(t||!n||!n.__esModule?J(e,"default",{value:n,enumerable:!0}):e,n)),Bn=n=>Mn(J({},"__esModule",{value:!0}),n);var c=Tn(()=>{});var hn={};Gt(hn,{createReadStream:()=>Qn,createWriteStream:()=>Zn,default:()=>Jt,existsSync:()=>Wn,lstatSync:()=>Jn,mkdirSync:()=>Kn,readFileSync:()=>Fn,readdirSync:()=>Un,rmdirSync:()=>Yn,statSync:()=>pn,unlinkSync:()=>Xn,writeFileSync:()=>Gn});function cn(n){return String(n).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Vn(n){var t=cn(n);if(X[t]!==void 0)return X[t];for(var e=Object.keys(X),o=0;o<e.length;o++)if(t.endsWith("/"+e[o])||t===e[o])return X[e[o]]}function dn(n){var t=cn(n);if(Y[t]!==void 0)return Y[t];for(var e=Object.keys(Y),o=0;o<e.length;o++)if(t.endsWith("/"+e[o])||t===e[o])return Y[e[o]]}var X,Y,Fn,Un,Wn,Gn,Kn,pn,Jn,Xn,Yn,Qn,Zn,Jt,fn=Tn(()=>{"use strict";c();X={"package.json":`{
  "name": "jsonresume-theme-joomla-flats",
  "version": "0.4.3",
  "description": "A theme for JSON Resume",
  "author": "Phillip Moore",
  "repository": {
    "type": "git",
    "url": "http://github.com/djengineerllc/jsonresume-theme-joomla-flats"
  },
  "scripts": {
    "start": "node serve"
  },
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  },
  "license": "MIT"
}
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
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css">
	<style type="text/css">
	{{{twbscss}}}
	{{{css}}}
	</style>
	
	</head>
	<body>
	<div class="tw-bs">
	<header id="header">
		<div class="header-container">
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
	<div id="content" class="content-container">

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
				<strong>Phone</strong>
				<div class="phone">{{.}}</div>
			</div>
			{{/phone}}
			{{#website}}
			<div class="col-sm-6">
				<strong>Website</strong>
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
			<h3>About</h3>
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
			<h3>Profiles</h3>
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
			<h3>Work</h3>
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

	{{#if resume.volunteer.length}}
	<section id="volunteer" class="row">
		<aside class="col-sm-3">
			<h3>Volunteer</h3>
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
	
	{{#if resume.education.length}}
	<section id="education" class="row">
		<aside class="col-sm-3">
			<h3>Education</h3>
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
				<h4>Courses</h4>
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
	
	{{#if resume.awards.length}}
	<section id="awards" class="row">
		<aside class="col-sm-3">
			<h3>Awards</h3>
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
					<em>Awarded</em>
					{{.}}
				</div>
				{{/date}}
				{{#awarder}}
				<div class="awarder">
					<em>by</em>
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
					<em>Published by</em>
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
			<h3>Skills</h3>
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

	<!--
	{{#if resume.languages.length}}
	<section id="languages" class="row">
		<aside class="col-sm-3">
			<h3>Languages</h3>
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
	-->

	{{#if resume.interests.length}}
	<section id="interests" class="row">
		<aside class="col-sm-3">
			<h3>Interests</h3>
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
			<h3>References</h3>
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
	</div>
	</body>
</html>
`,"style.css":`@import url(
	https://fonts.googleapis.com/css?family=Lato:400,700
);
.tw-bs {
	background: #fff;
	font-family: Lato, sans-serif;
	margin: 0 0 80px;
}
.tw-bs a {
	color: #2ecc71;
}
.tw-bs a:focus,
.tw-bs a:hover {
	color: #f1c40f;
	text-decoration: none;
}
.tw-bs p {
	line-height: 1.5;
	margin: 0;
	text-align: justify;
}
.tw-bs p + p {
	margin-top: 10px;
}
.tw-bs h1,
.tw-bs h2,
.tw-bs h3,
.tw-bs h4 {
	margin-top: 0
}
.tw-bs section {
	margin-top: 30px;
}
.tw-bs li {
	line-height: 1.8;
	list-style: none;
	text-align: justify;
}
.tw-bs li:before {
	content: "\\f052";
	float: left;
	font: 13px Octicons;
	margin-top: 6px;
	margin-left: -20px;
	opacity: .1;
	position: absolute;
}
.tw-bs blockquote {
	border-left: 5px solid #e7e9ec;
	font-size: 14px;
}
.tw-bs em {
	color: #95a5a6;
	font-weight: normal;
	font-style: normal;
}
.tw-bs h4 span:first-child {
	color: #000;
	font-weight: bold;
}
.tw-bs .header-container,
.tw-bs .content-container{
	max-width: 750px;
	padding: 0 30px;
}
.tw-bs .col-sm-6 {
	margin-bottom: 10px;
}
.tw-bs .col-sm-12 h4 {
	margin-top: 12px; 
}
.tw-bs .col-sm-12 + .col-sm-12 {
	margin-top: 30px;
}
.tw-bs #header {
	background: #f4f6f6;
	padding: 50px 0;
	margin-bottom: 30px;
}
.tw-bs #header h2 {
	color: #95a5a6;
	font-size: 24px;
}
.tw-bs #content h3 {
	color: #f1c40f;
	font-size: 26px;
	margin-top: -4px;
}
.tw-bs #content aside {
	text-align: right;
	padding-right: 30px;
}
.tw-bs #profiles .network {
	text-transform: capitalize;
}
.tw-bs #work .position,
.tw-bs #volunteer .position {
	font-weight: bold;
	margin-bottom: 8px;
}
.tw-bs #education .area {
	font-weight: bold;
}
.tw-bs #education .area:before {
	content: "\\f0d7";
	font: 16px Octicons;
	margin-right: 6px;
}
.tw-bs #education .studyType {
	margin-left: 25px;
}
.tw-bs #awards .summary,
.tw-bs #publications .summary {
	margin-top: 8px;
}
.tw-bs #publications .website a:before {
	content: attr(href);
}

@media (min-width: 480px) {
	.tw-bs .strike-through {
		border-top: 1px solid #f4f6f6;
		height: 20px;
		margin-top: 12px;
		margin-bottom: -2px;
		position: relative;
	}
	.tw-bs .strike-through span,
	.tw-bs .strike-through a {
		background: #fff;
		position: absolute;
	}
	.tw-bs .strike-through span:first-child {
		padding-right: 20px;
		margin-top: -12px;
	}
	.tw-bs .strike-through span + span {
		font-size: 14px;
		margin-top: -10px;
		padding-left: 20px;
		right: 0;
	}
}
@media (max-width: 768px) {
	.tw-bs .col-sm-6:last-child {
		margin-bottom: 0px;
	}
	.tw-bs #content aside {
		margin-bottom: 20px;
		padding-right: 0;
		text-align: left;
	}
	.tw-bs #publications .website a:before {
		content: "View publication";
	}
}
@media (max-width: 480px) {
	.tw-bs h1 {
		font-size: 26px;
	}
	.tw-bs .date {
		font-size: 14px;
		margin-bottom: 5px;
	}
	.tw-bs .strike-through span:first-child {
		margin-bottom: 7px;
	}
	.tw-bs .strike-through span {
		display: block;
	}	
	.tw-bs #header {
		margin-bottom: 10px;
		padding: 40px 0;
	}
	.tw-bs #actions {
		display: none;
	}
}
`,"tw-bs.css":`.tw-bs {
  /*! normalize.css v3.0.1 | MIT License | git.io/normalize */
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
.tw-bs article,
.tw-bs aside,
.tw-bs details,
.tw-bs figcaption,
.tw-bs figure,
.tw-bs footer,
.tw-bs header,
.tw-bs hgroup,
.tw-bs main,
.tw-bs nav,
.tw-bs section,
.tw-bs summary {
  display: block;
}
.tw-bs audio,
.tw-bs canvas,
.tw-bs progress,
.tw-bs video {
  display: inline-block;
  vertical-align: baseline;
}
.tw-bs audio:not([controls]) {
  display: none;
  height: 0;
}
.tw-bs [hidden],
.tw-bs template {
  display: none;
}
.tw-bs a {
  background: transparent;
}
.tw-bs a:active,
.tw-bs a:hover {
  outline: 0;
}
.tw-bs abbr[title] {
  border-bottom: 1px dotted;
}
.tw-bs b,
.tw-bs strong {
  font-weight: bold;
}
.tw-bs dfn {
  font-style: italic;
}
.tw-bs h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
.tw-bs mark {
  background: #ff0;
  color: #000;
}
.tw-bs small {
  font-size: 80%;
}
.tw-bs sub,
.tw-bs sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
.tw-bs sup {
  top: -0.5em;
}
.tw-bs sub {
  bottom: -0.25em;
}
.tw-bs img {
  border: 0;
}
.tw-bs svg:not(:root) {
  overflow: hidden;
}
.tw-bs figure {
  margin: 1em 40px;
}
.tw-bs hr {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}
.tw-bs pre {
  overflow: auto;
}
.tw-bs code,
.tw-bs kbd,
.tw-bs pre,
.tw-bs samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
.tw-bs button,
.tw-bs input,
.tw-bs optgroup,
.tw-bs select,
.tw-bs textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
.tw-bs button {
  overflow: visible;
}
.tw-bs button,
.tw-bs select {
  text-transform: none;
}
.tw-bs button,
html .tw-bs input[type="button"],
.tw-bs input[type="reset"],
.tw-bs input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
.tw-bs button[disabled],
html .tw-bs input[disabled] {
  cursor: default;
}
.tw-bs button::-moz-focus-inner,
.tw-bs input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
.tw-bs input {
  line-height: normal;
}
.tw-bs input[type="checkbox"],
.tw-bs input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
.tw-bs input[type="number"]::-webkit-inner-spin-button,
.tw-bs input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
.tw-bs input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.tw-bs input[type="search"]::-webkit-search-cancel-button,
.tw-bs input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
.tw-bs fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
.tw-bs legend {
  border: 0;
  padding: 0;
}
.tw-bs textarea {
  overflow: auto;
}
.tw-bs optgroup {
  font-weight: bold;
}
.tw-bs table {
  border-collapse: collapse;
  border-spacing: 0;
}
.tw-bs td,
.tw-bs th {
  padding: 0;
}
@media print {
  .tw-bs * {
    text-shadow: none !important;
    color: #000 !important;
    background: transparent !important;
    box-shadow: none !important;
  }
  .tw-bs a,
  .tw-bs a:visited {
    text-decoration: underline;
  }
  .tw-bs a[href]:after {
    content: " (" attr(href) ")";
  }
  .tw-bs abbr[title]:after {
    content: " (" attr(title) ")";
  }
  .tw-bs a[href^="javascript:"]:after,
  .tw-bs a[href^="#"]:after {
    content: "";
  }
  .tw-bs pre,
  .tw-bs blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  .tw-bs thead {
    display: table-header-group;
  }
  .tw-bs tr,
  .tw-bs img {
    page-break-inside: avoid;
  }
  .tw-bs img {
    max-width: 100% !important;
  }
  .tw-bs p,
  .tw-bs h2,
  .tw-bs h3 {
    orphans: 3;
    widows: 3;
  }
  .tw-bs h2,
  .tw-bs h3 {
    page-break-after: avoid;
  }
  .tw-bs select {
    background: #fff !important;
  }
  .tw-bs .navbar {
    display: none;
  }
  .tw-bs .table td,
  .tw-bs .table th {
    background-color: #fff !important;
  }
  .tw-bs .btn > .caret,
  .tw-bs .dropup > .btn > .caret {
    border-top-color: #000 !important;
  }
  .tw-bs .label {
    border: 1px solid #000;
  }
  .tw-bs .table {
    border-collapse: collapse !important;
  }
  .tw-bs .table-bordered th,
  .tw-bs .table-bordered td {
    border: 1px solid #ddd !important;
  }
}
@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('../fonts/glyphicons-halflings-regular.eot');
  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}
.tw-bs .glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.tw-bs .glyphicon-asterisk:before {
  content: "\\2a";
}
.tw-bs .glyphicon-plus:before {
  content: "\\2b";
}
.tw-bs .glyphicon-euro:before {
  content: "\\20ac";
}
.tw-bs .glyphicon-minus:before {
  content: "\\2212";
}
.tw-bs .glyphicon-cloud:before {
  content: "\\2601";
}
.tw-bs .glyphicon-envelope:before {
  content: "\\2709";
}
.tw-bs .glyphicon-pencil:before {
  content: "\\270f";
}
.tw-bs .glyphicon-glass:before {
  content: "\\e001";
}
.tw-bs .glyphicon-music:before {
  content: "\\e002";
}
.tw-bs .glyphicon-search:before {
  content: "\\e003";
}
.tw-bs .glyphicon-heart:before {
  content: "\\e005";
}
.tw-bs .glyphicon-star:before {
  content: "\\e006";
}
.tw-bs .glyphicon-star-empty:before {
  content: "\\e007";
}
.tw-bs .glyphicon-user:before {
  content: "\\e008";
}
.tw-bs .glyphicon-film:before {
  content: "\\e009";
}
.tw-bs .glyphicon-th-large:before {
  content: "\\e010";
}
.tw-bs .glyphicon-th:before {
  content: "\\e011";
}
.tw-bs .glyphicon-th-list:before {
  content: "\\e012";
}
.tw-bs .glyphicon-ok:before {
  content: "\\e013";
}
.tw-bs .glyphicon-remove:before {
  content: "\\e014";
}
.tw-bs .glyphicon-zoom-in:before {
  content: "\\e015";
}
.tw-bs .glyphicon-zoom-out:before {
  content: "\\e016";
}
.tw-bs .glyphicon-off:before {
  content: "\\e017";
}
.tw-bs .glyphicon-signal:before {
  content: "\\e018";
}
.tw-bs .glyphicon-cog:before {
  content: "\\e019";
}
.tw-bs .glyphicon-trash:before {
  content: "\\e020";
}
.tw-bs .glyphicon-home:before {
  content: "\\e021";
}
.tw-bs .glyphicon-file:before {
  content: "\\e022";
}
.tw-bs .glyphicon-time:before {
  content: "\\e023";
}
.tw-bs .glyphicon-road:before {
  content: "\\e024";
}
.tw-bs .glyphicon-download-alt:before {
  content: "\\e025";
}
.tw-bs .glyphicon-download:before {
  content: "\\e026";
}
.tw-bs .glyphicon-upload:before {
  content: "\\e027";
}
.tw-bs .glyphicon-inbox:before {
  content: "\\e028";
}
.tw-bs .glyphicon-play-circle:before {
  content: "\\e029";
}
.tw-bs .glyphicon-repeat:before {
  content: "\\e030";
}
.tw-bs .glyphicon-refresh:before {
  content: "\\e031";
}
.tw-bs .glyphicon-list-alt:before {
  content: "\\e032";
}
.tw-bs .glyphicon-lock:before {
  content: "\\e033";
}
.tw-bs .glyphicon-flag:before {
  content: "\\e034";
}
.tw-bs .glyphicon-headphones:before {
  content: "\\e035";
}
.tw-bs .glyphicon-volume-off:before {
  content: "\\e036";
}
.tw-bs .glyphicon-volume-down:before {
  content: "\\e037";
}
.tw-bs .glyphicon-volume-up:before {
  content: "\\e038";
}
.tw-bs .glyphicon-qrcode:before {
  content: "\\e039";
}
.tw-bs .glyphicon-barcode:before {
  content: "\\e040";
}
.tw-bs .glyphicon-tag:before {
  content: "\\e041";
}
.tw-bs .glyphicon-tags:before {
  content: "\\e042";
}
.tw-bs .glyphicon-book:before {
  content: "\\e043";
}
.tw-bs .glyphicon-bookmark:before {
  content: "\\e044";
}
.tw-bs .glyphicon-print:before {
  content: "\\e045";
}
.tw-bs .glyphicon-camera:before {
  content: "\\e046";
}
.tw-bs .glyphicon-font:before {
  content: "\\e047";
}
.tw-bs .glyphicon-bold:before {
  content: "\\e048";
}
.tw-bs .glyphicon-italic:before {
  content: "\\e049";
}
.tw-bs .glyphicon-text-height:before {
  content: "\\e050";
}
.tw-bs .glyphicon-text-width:before {
  content: "\\e051";
}
.tw-bs .glyphicon-align-left:before {
  content: "\\e052";
}
.tw-bs .glyphicon-align-center:before {
  content: "\\e053";
}
.tw-bs .glyphicon-align-right:before {
  content: "\\e054";
}
.tw-bs .glyphicon-align-justify:before {
  content: "\\e055";
}
.tw-bs .glyphicon-list:before {
  content: "\\e056";
}
.tw-bs .glyphicon-indent-left:before {
  content: "\\e057";
}
.tw-bs .glyphicon-indent-right:before {
  content: "\\e058";
}
.tw-bs .glyphicon-facetime-video:before {
  content: "\\e059";
}
.tw-bs .glyphicon-picture:before {
  content: "\\e060";
}
.tw-bs .glyphicon-map-marker:before {
  content: "\\e062";
}
.tw-bs .glyphicon-adjust:before {
  content: "\\e063";
}
.tw-bs .glyphicon-tint:before {
  content: "\\e064";
}
.tw-bs .glyphicon-edit:before {
  content: "\\e065";
}
.tw-bs .glyphicon-share:before {
  content: "\\e066";
}
.tw-bs .glyphicon-check:before {
  content: "\\e067";
}
.tw-bs .glyphicon-move:before {
  content: "\\e068";
}
.tw-bs .glyphicon-step-backward:before {
  content: "\\e069";
}
.tw-bs .glyphicon-fast-backward:before {
  content: "\\e070";
}
.tw-bs .glyphicon-backward:before {
  content: "\\e071";
}
.tw-bs .glyphicon-play:before {
  content: "\\e072";
}
.tw-bs .glyphicon-pause:before {
  content: "\\e073";
}
.tw-bs .glyphicon-stop:before {
  content: "\\e074";
}
.tw-bs .glyphicon-forward:before {
  content: "\\e075";
}
.tw-bs .glyphicon-fast-forward:before {
  content: "\\e076";
}
.tw-bs .glyphicon-step-forward:before {
  content: "\\e077";
}
.tw-bs .glyphicon-eject:before {
  content: "\\e078";
}
.tw-bs .glyphicon-chevron-left:before {
  content: "\\e079";
}
.tw-bs .glyphicon-chevron-right:before {
  content: "\\e080";
}
.tw-bs .glyphicon-plus-sign:before {
  content: "\\e081";
}
.tw-bs .glyphicon-minus-sign:before {
  content: "\\e082";
}
.tw-bs .glyphicon-remove-sign:before {
  content: "\\e083";
}
.tw-bs .glyphicon-ok-sign:before {
  content: "\\e084";
}
.tw-bs .glyphicon-question-sign:before {
  content: "\\e085";
}
.tw-bs .glyphicon-info-sign:before {
  content: "\\e086";
}
.tw-bs .glyphicon-screenshot:before {
  content: "\\e087";
}
.tw-bs .glyphicon-remove-circle:before {
  content: "\\e088";
}
.tw-bs .glyphicon-ok-circle:before {
  content: "\\e089";
}
.tw-bs .glyphicon-ban-circle:before {
  content: "\\e090";
}
.tw-bs .glyphicon-arrow-left:before {
  content: "\\e091";
}
.tw-bs .glyphicon-arrow-right:before {
  content: "\\e092";
}
.tw-bs .glyphicon-arrow-up:before {
  content: "\\e093";
}
.tw-bs .glyphicon-arrow-down:before {
  content: "\\e094";
}
.tw-bs .glyphicon-share-alt:before {
  content: "\\e095";
}
.tw-bs .glyphicon-resize-full:before {
  content: "\\e096";
}
.tw-bs .glyphicon-resize-small:before {
  content: "\\e097";
}
.tw-bs .glyphicon-exclamation-sign:before {
  content: "\\e101";
}
.tw-bs .glyphicon-gift:before {
  content: "\\e102";
}
.tw-bs .glyphicon-leaf:before {
  content: "\\e103";
}
.tw-bs .glyphicon-fire:before {
  content: "\\e104";
}
.tw-bs .glyphicon-eye-open:before {
  content: "\\e105";
}
.tw-bs .glyphicon-eye-close:before {
  content: "\\e106";
}
.tw-bs .glyphicon-warning-sign:before {
  content: "\\e107";
}
.tw-bs .glyphicon-plane:before {
  content: "\\e108";
}
.tw-bs .glyphicon-calendar:before {
  content: "\\e109";
}
.tw-bs .glyphicon-random:before {
  content: "\\e110";
}
.tw-bs .glyphicon-comment:before {
  content: "\\e111";
}
.tw-bs .glyphicon-magnet:before {
  content: "\\e112";
}
.tw-bs .glyphicon-chevron-up:before {
  content: "\\e113";
}
.tw-bs .glyphicon-chevron-down:before {
  content: "\\e114";
}
.tw-bs .glyphicon-retweet:before {
  content: "\\e115";
}
.tw-bs .glyphicon-shopping-cart:before {
  content: "\\e116";
}
.tw-bs .glyphicon-folder-close:before {
  content: "\\e117";
}
.tw-bs .glyphicon-folder-open:before {
  content: "\\e118";
}
.tw-bs .glyphicon-resize-vertical:before {
  content: "\\e119";
}
.tw-bs .glyphicon-resize-horizontal:before {
  content: "\\e120";
}
.tw-bs .glyphicon-hdd:before {
  content: "\\e121";
}
.tw-bs .glyphicon-bullhorn:before {
  content: "\\e122";
}
.tw-bs .glyphicon-bell:before {
  content: "\\e123";
}
.tw-bs .glyphicon-certificate:before {
  content: "\\e124";
}
.tw-bs .glyphicon-thumbs-up:before {
  content: "\\e125";
}
.tw-bs .glyphicon-thumbs-down:before {
  content: "\\e126";
}
.tw-bs .glyphicon-hand-right:before {
  content: "\\e127";
}
.tw-bs .glyphicon-hand-left:before {
  content: "\\e128";
}
.tw-bs .glyphicon-hand-up:before {
  content: "\\e129";
}
.tw-bs .glyphicon-hand-down:before {
  content: "\\e130";
}
.tw-bs .glyphicon-circle-arrow-right:before {
  content: "\\e131";
}
.tw-bs .glyphicon-circle-arrow-left:before {
  content: "\\e132";
}
.tw-bs .glyphicon-circle-arrow-up:before {
  content: "\\e133";
}
.tw-bs .glyphicon-circle-arrow-down:before {
  content: "\\e134";
}
.tw-bs .glyphicon-globe:before {
  content: "\\e135";
}
.tw-bs .glyphicon-wrench:before {
  content: "\\e136";
}
.tw-bs .glyphicon-tasks:before {
  content: "\\e137";
}
.tw-bs .glyphicon-filter:before {
  content: "\\e138";
}
.tw-bs .glyphicon-briefcase:before {
  content: "\\e139";
}
.tw-bs .glyphicon-fullscreen:before {
  content: "\\e140";
}
.tw-bs .glyphicon-dashboard:before {
  content: "\\e141";
}
.tw-bs .glyphicon-paperclip:before {
  content: "\\e142";
}
.tw-bs .glyphicon-heart-empty:before {
  content: "\\e143";
}
.tw-bs .glyphicon-link:before {
  content: "\\e144";
}
.tw-bs .glyphicon-phone:before {
  content: "\\e145";
}
.tw-bs .glyphicon-pushpin:before {
  content: "\\e146";
}
.tw-bs .glyphicon-usd:before {
  content: "\\e148";
}
.tw-bs .glyphicon-gbp:before {
  content: "\\e149";
}
.tw-bs .glyphicon-sort:before {
  content: "\\e150";
}
.tw-bs .glyphicon-sort-by-alphabet:before {
  content: "\\e151";
}
.tw-bs .glyphicon-sort-by-alphabet-alt:before {
  content: "\\e152";
}
.tw-bs .glyphicon-sort-by-order:before {
  content: "\\e153";
}
.tw-bs .glyphicon-sort-by-order-alt:before {
  content: "\\e154";
}
.tw-bs .glyphicon-sort-by-attributes:before {
  content: "\\e155";
}
.tw-bs .glyphicon-sort-by-attributes-alt:before {
  content: "\\e156";
}
.tw-bs .glyphicon-unchecked:before {
  content: "\\e157";
}
.tw-bs .glyphicon-expand:before {
  content: "\\e158";
}
.tw-bs .glyphicon-collapse-down:before {
  content: "\\e159";
}
.tw-bs .glyphicon-collapse-up:before {
  content: "\\e160";
}
.tw-bs .glyphicon-log-in:before {
  content: "\\e161";
}
.tw-bs .glyphicon-flash:before {
  content: "\\e162";
}
.tw-bs .glyphicon-log-out:before {
  content: "\\e163";
}
.tw-bs .glyphicon-new-window:before {
  content: "\\e164";
}
.tw-bs .glyphicon-record:before {
  content: "\\e165";
}
.tw-bs .glyphicon-save:before {
  content: "\\e166";
}
.tw-bs .glyphicon-open:before {
  content: "\\e167";
}
.tw-bs .glyphicon-saved:before {
  content: "\\e168";
}
.tw-bs .glyphicon-import:before {
  content: "\\e169";
}
.tw-bs .glyphicon-export:before {
  content: "\\e170";
}
.tw-bs .glyphicon-send:before {
  content: "\\e171";
}
.tw-bs .glyphicon-floppy-disk:before {
  content: "\\e172";
}
.tw-bs .glyphicon-floppy-saved:before {
  content: "\\e173";
}
.tw-bs .glyphicon-floppy-remove:before {
  content: "\\e174";
}
.tw-bs .glyphicon-floppy-save:before {
  content: "\\e175";
}
.tw-bs .glyphicon-floppy-open:before {
  content: "\\e176";
}
.tw-bs .glyphicon-credit-card:before {
  content: "\\e177";
}
.tw-bs .glyphicon-transfer:before {
  content: "\\e178";
}
.tw-bs .glyphicon-cutlery:before {
  content: "\\e179";
}
.tw-bs .glyphicon-header:before {
  content: "\\e180";
}
.tw-bs .glyphicon-compressed:before {
  content: "\\e181";
}
.tw-bs .glyphicon-earphone:before {
  content: "\\e182";
}
.tw-bs .glyphicon-phone-alt:before {
  content: "\\e183";
}
.tw-bs .glyphicon-tower:before {
  content: "\\e184";
}
.tw-bs .glyphicon-stats:before {
  content: "\\e185";
}
.tw-bs .glyphicon-sd-video:before {
  content: "\\e186";
}
.tw-bs .glyphicon-hd-video:before {
  content: "\\e187";
}
.tw-bs .glyphicon-subtitles:before {
  content: "\\e188";
}
.tw-bs .glyphicon-sound-stereo:before {
  content: "\\e189";
}
.tw-bs .glyphicon-sound-dolby:before {
  content: "\\e190";
}
.tw-bs .glyphicon-sound-5-1:before {
  content: "\\e191";
}
.tw-bs .glyphicon-sound-6-1:before {
  content: "\\e192";
}
.tw-bs .glyphicon-sound-7-1:before {
  content: "\\e193";
}
.tw-bs .glyphicon-copyright-mark:before {
  content: "\\e194";
}
.tw-bs .glyphicon-registration-mark:before {
  content: "\\e195";
}
.tw-bs .glyphicon-cloud-download:before {
  content: "\\e197";
}
.tw-bs .glyphicon-cloud-upload:before {
  content: "\\e198";
}
.tw-bs .glyphicon-tree-conifer:before {
  content: "\\e199";
}
.tw-bs .glyphicon-tree-deciduous:before {
  content: "\\e200";
}
.tw-bs * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.tw-bs *:before,
.tw-bs *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html .tw-bs {
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body .tw-bs {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
  background-color: #ffffff;
}
.tw-bs input,
.tw-bs button,
.tw-bs select,
.tw-bs textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.tw-bs a {
  color: #428bca;
  text-decoration: none;
}
.tw-bs a:hover,
.tw-bs a:focus {
  color: #2a6496;
  text-decoration: underline;
}
.tw-bs a:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.tw-bs figure {
  margin: 0;
}
.tw-bs img {
  vertical-align: middle;
}
.tw-bs .img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}
.tw-bs .img-rounded {
  border-radius: 6px;
}
.tw-bs .img-thumbnail {
  padding: 4px;
  line-height: 1.42857143;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  max-width: 100%;
  height: auto;
}
.tw-bs .img-circle {
  border-radius: 50%;
}
.tw-bs hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eeeeee;
}
.tw-bs .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.tw-bs .sr-only-focusable:active,
.tw-bs .sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}
.tw-bs h1,
.tw-bs h2,
.tw-bs h3,
.tw-bs h4,
.tw-bs h5,
.tw-bs h6,
.tw-bs .h1,
.tw-bs .h2,
.tw-bs .h3,
.tw-bs .h4,
.tw-bs .h5,
.tw-bs .h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
.tw-bs h1 small,
.tw-bs h2 small,
.tw-bs h3 small,
.tw-bs h4 small,
.tw-bs h5 small,
.tw-bs h6 small,
.tw-bs .h1 small,
.tw-bs .h2 small,
.tw-bs .h3 small,
.tw-bs .h4 small,
.tw-bs .h5 small,
.tw-bs .h6 small,
.tw-bs h1 .small,
.tw-bs h2 .small,
.tw-bs h3 .small,
.tw-bs h4 .small,
.tw-bs h5 .small,
.tw-bs h6 .small,
.tw-bs .h1 .small,
.tw-bs .h2 .small,
.tw-bs .h3 .small,
.tw-bs .h4 .small,
.tw-bs .h5 .small,
.tw-bs .h6 .small {
  font-weight: normal;
  line-height: 1;
  color: #777777;
}
.tw-bs h1,
.tw-bs .h1,
.tw-bs h2,
.tw-bs .h2,
.tw-bs h3,
.tw-bs .h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
.tw-bs h1 small,
.tw-bs .h1 small,
.tw-bs h2 small,
.tw-bs .h2 small,
.tw-bs h3 small,
.tw-bs .h3 small,
.tw-bs h1 .small,
.tw-bs .h1 .small,
.tw-bs h2 .small,
.tw-bs .h2 .small,
.tw-bs h3 .small,
.tw-bs .h3 .small {
  font-size: 65%;
}
.tw-bs h4,
.tw-bs .h4,
.tw-bs h5,
.tw-bs .h5,
.tw-bs h6,
.tw-bs .h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.tw-bs h4 small,
.tw-bs .h4 small,
.tw-bs h5 small,
.tw-bs .h5 small,
.tw-bs h6 small,
.tw-bs .h6 small,
.tw-bs h4 .small,
.tw-bs .h4 .small,
.tw-bs h5 .small,
.tw-bs .h5 .small,
.tw-bs h6 .small,
.tw-bs .h6 .small {
  font-size: 75%;
}
.tw-bs h1,
.tw-bs .h1 {
  font-size: 36px;
}
.tw-bs h2,
.tw-bs .h2 {
  font-size: 30px;
}
.tw-bs h3,
.tw-bs .h3 {
  font-size: 24px;
}
.tw-bs h4,
.tw-bs .h4 {
  font-size: 18px;
}
.tw-bs h5,
.tw-bs .h5 {
  font-size: 14px;
}
.tw-bs h6,
.tw-bs .h6 {
  font-size: 12px;
}
.tw-bs p {
  margin: 0 0 10px;
}
.tw-bs .lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .tw-bs .lead {
    font-size: 21px;
  }
}
.tw-bs small,
.tw-bs .small {
  font-size: 85%;
}
.tw-bs mark,
.tw-bs .mark {
  background-color: #fcf8e3;
  padding: .2em;
}
.tw-bs .text-left {
  text-align: left;
}
.tw-bs .text-right {
  text-align: right;
}
.tw-bs .text-center {
  text-align: center;
}
.tw-bs .text-justify {
  text-align: justify;
}
.tw-bs .text-nowrap {
  white-space: nowrap;
}
.tw-bs .text-lowercase {
  text-transform: lowercase;
}
.tw-bs .text-uppercase {
  text-transform: uppercase;
}
.tw-bs .text-capitalize {
  text-transform: capitalize;
}
.tw-bs .text-muted {
  color: #777777;
}
.tw-bs .text-primary {
  color: #428bca;
}
a.tw-bs .text-primary:hover {
  color: #3071a9;
}
.tw-bs .text-success {
  color: #3c763d;
}
a.tw-bs .text-success:hover {
  color: #2b542c;
}
.tw-bs .text-info {
  color: #31708f;
}
a.tw-bs .text-info:hover {
  color: #245269;
}
.tw-bs .text-warning {
  color: #8a6d3b;
}
a.tw-bs .text-warning:hover {
  color: #66512c;
}
.tw-bs .text-danger {
  color: #a94442;
}
a.tw-bs .text-danger:hover {
  color: #843534;
}
.tw-bs .bg-primary {
  color: #fff;
  background-color: #428bca;
}
a.tw-bs .bg-primary:hover {
  background-color: #3071a9;
}
.tw-bs .bg-success {
  background-color: #dff0d8;
}
a.tw-bs .bg-success:hover {
  background-color: #c1e2b3;
}
.tw-bs .bg-info {
  background-color: #d9edf7;
}
a.tw-bs .bg-info:hover {
  background-color: #afd9ee;
}
.tw-bs .bg-warning {
  background-color: #fcf8e3;
}
a.tw-bs .bg-warning:hover {
  background-color: #f7ecb5;
}
.tw-bs .bg-danger {
  background-color: #f2dede;
}
a.tw-bs .bg-danger:hover {
  background-color: #e4b9b9;
}
.tw-bs .page-header {
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eeeeee;
}
.tw-bs ul,
.tw-bs ol {
  margin-top: 0;
  margin-bottom: 10px;
}
.tw-bs ul ul,
.tw-bs ol ul,
.tw-bs ul ol,
.tw-bs ol ol {
  margin-bottom: 0;
}
.tw-bs .list-unstyled {
  padding-left: 0;
  list-style: none;
}
.tw-bs .list-inline {
  padding-left: 0;
  list-style: none;
  margin-left: -5px;
}
.tw-bs .list-inline > li {
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}
.tw-bs dl {
  margin-top: 0;
  margin-bottom: 20px;
}
.tw-bs dt,
.tw-bs dd {
  line-height: 1.42857143;
}
.tw-bs dt {
  font-weight: bold;
}
.tw-bs dd {
  margin-left: 0;
}
@media (min-width: 768px) {
  .tw-bs .dl-horizontal dt {
    float: left;
    width: 160px;
    clear: left;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tw-bs .dl-horizontal dd {
    margin-left: 180px;
  }
}
.tw-bs abbr[title],
.tw-bs abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted #777777;
}
.tw-bs .initialism {
  font-size: 90%;
  text-transform: uppercase;
}
.tw-bs blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eeeeee;
}
.tw-bs blockquote p:last-child,
.tw-bs blockquote ul:last-child,
.tw-bs blockquote ol:last-child {
  margin-bottom: 0;
}
.tw-bs blockquote footer,
.tw-bs blockquote small,
.tw-bs blockquote .small {
  display: block;
  font-size: 80%;
  line-height: 1.42857143;
  color: #777777;
}
.tw-bs blockquote footer:before,
.tw-bs blockquote small:before,
.tw-bs blockquote .small:before {
  content: '\\2014 \\00A0';
}
.tw-bs .blockquote-reverse,
.tw-bs blockquote.pull-right {
  padding-right: 15px;
  padding-left: 0;
  border-right: 5px solid #eeeeee;
  border-left: 0;
  text-align: right;
}
.tw-bs .blockquote-reverse footer:before,
.tw-bs blockquote.pull-right footer:before,
.tw-bs .blockquote-reverse small:before,
.tw-bs blockquote.pull-right small:before,
.tw-bs .blockquote-reverse .small:before,
.tw-bs blockquote.pull-right .small:before {
  content: '';
}
.tw-bs .blockquote-reverse footer:after,
.tw-bs blockquote.pull-right footer:after,
.tw-bs .blockquote-reverse small:after,
.tw-bs blockquote.pull-right small:after,
.tw-bs .blockquote-reverse .small:after,
.tw-bs blockquote.pull-right .small:after {
  content: '\\00A0 \\2014';
}
.tw-bs blockquote:before,
.tw-bs blockquote:after {
  content: "";
}
.tw-bs address {
  margin-bottom: 20px;
  font-style: normal;
  line-height: 1.42857143;
}
.tw-bs code,
.tw-bs kbd,
.tw-bs pre,
.tw-bs samp {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
}
.tw-bs code {
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 4px;
}
.tw-bs kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #ffffff;
  background-color: #333333;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.tw-bs kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: bold;
  box-shadow: none;
}
.tw-bs pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  word-break: break-all;
  word-wrap: break-word;
  color: #333333;
  background-color: #f5f5f5;
  border: 1px solid #cccccc;
  border-radius: 4px;
}
.tw-bs pre code {
  padding: 0;
  font-size: inherit;
  color: inherit;
  white-space: pre-wrap;
  background-color: transparent;
  border-radius: 0;
}
.tw-bs .pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}
.tw-bs .container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 768px) {
  .tw-bs .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .tw-bs .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .tw-bs .container {
    width: 1170px;
  }
}
.tw-bs .container-fluid {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
.tw-bs .row {
  margin-left: -15px;
  margin-right: -15px;
}
.tw-bs .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
.tw-bs .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
  float: left;
}
.tw-bs .col-xs-12 {
  width: 100%;
}
.tw-bs .col-xs-11 {
  width: 91.66666667%;
}
.tw-bs .col-xs-10 {
  width: 83.33333333%;
}
.tw-bs .col-xs-9 {
  width: 75%;
}
.tw-bs .col-xs-8 {
  width: 66.66666667%;
}
.tw-bs .col-xs-7 {
  width: 58.33333333%;
}
.tw-bs .col-xs-6 {
  width: 50%;
}
.tw-bs .col-xs-5 {
  width: 41.66666667%;
}
.tw-bs .col-xs-4 {
  width: 33.33333333%;
}
.tw-bs .col-xs-3 {
  width: 25%;
}
.tw-bs .col-xs-2 {
  width: 16.66666667%;
}
.tw-bs .col-xs-1 {
  width: 8.33333333%;
}
.tw-bs .col-xs-pull-12 {
  right: 100%;
}
.tw-bs .col-xs-pull-11 {
  right: 91.66666667%;
}
.tw-bs .col-xs-pull-10 {
  right: 83.33333333%;
}
.tw-bs .col-xs-pull-9 {
  right: 75%;
}
.tw-bs .col-xs-pull-8 {
  right: 66.66666667%;
}
.tw-bs .col-xs-pull-7 {
  right: 58.33333333%;
}
.tw-bs .col-xs-pull-6 {
  right: 50%;
}
.tw-bs .col-xs-pull-5 {
  right: 41.66666667%;
}
.tw-bs .col-xs-pull-4 {
  right: 33.33333333%;
}
.tw-bs .col-xs-pull-3 {
  right: 25%;
}
.tw-bs .col-xs-pull-2 {
  right: 16.66666667%;
}
.tw-bs .col-xs-pull-1 {
  right: 8.33333333%;
}
.tw-bs .col-xs-pull-0 {
  right: auto;
}
.tw-bs .col-xs-push-12 {
  left: 100%;
}
.tw-bs .col-xs-push-11 {
  left: 91.66666667%;
}
.tw-bs .col-xs-push-10 {
  left: 83.33333333%;
}
.tw-bs .col-xs-push-9 {
  left: 75%;
}
.tw-bs .col-xs-push-8 {
  left: 66.66666667%;
}
.tw-bs .col-xs-push-7 {
  left: 58.33333333%;
}
.tw-bs .col-xs-push-6 {
  left: 50%;
}
.tw-bs .col-xs-push-5 {
  left: 41.66666667%;
}
.tw-bs .col-xs-push-4 {
  left: 33.33333333%;
}
.tw-bs .col-xs-push-3 {
  left: 25%;
}
.tw-bs .col-xs-push-2 {
  left: 16.66666667%;
}
.tw-bs .col-xs-push-1 {
  left: 8.33333333%;
}
.tw-bs .col-xs-push-0 {
  left: auto;
}
.tw-bs .col-xs-offset-12 {
  margin-left: 100%;
}
.tw-bs .col-xs-offset-11 {
  margin-left: 91.66666667%;
}
.tw-bs .col-xs-offset-10 {
  margin-left: 83.33333333%;
}
.tw-bs .col-xs-offset-9 {
  margin-left: 75%;
}
.tw-bs .col-xs-offset-8 {
  margin-left: 66.66666667%;
}
.tw-bs .col-xs-offset-7 {
  margin-left: 58.33333333%;
}
.tw-bs .col-xs-offset-6 {
  margin-left: 50%;
}
.tw-bs .col-xs-offset-5 {
  margin-left: 41.66666667%;
}
.tw-bs .col-xs-offset-4 {
  margin-left: 33.33333333%;
}
.tw-bs .col-xs-offset-3 {
  margin-left: 25%;
}
.tw-bs .col-xs-offset-2 {
  margin-left: 16.66666667%;
}
.tw-bs .col-xs-offset-1 {
  margin-left: 8.33333333%;
}
.tw-bs .col-xs-offset-0 {
  margin-left: 0%;
}
@media (min-width: 768px) {
  .tw-bs .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
    float: left;
  }
  .tw-bs .col-sm-12 {
    width: 100%;
  }
  .tw-bs .col-sm-11 {
    width: 91.66666667%;
  }
  .tw-bs .col-sm-10 {
    width: 83.33333333%;
  }
  .tw-bs .col-sm-9 {
    width: 75%;
  }
  .tw-bs .col-sm-8 {
    width: 66.66666667%;
  }
  .tw-bs .col-sm-7 {
    width: 58.33333333%;
  }
  .tw-bs .col-sm-6 {
    width: 50%;
  }
  .tw-bs .col-sm-5 {
    width: 41.66666667%;
  }
  .tw-bs .col-sm-4 {
    width: 33.33333333%;
  }
  .tw-bs .col-sm-3 {
    width: 25%;
  }
  .tw-bs .col-sm-2 {
    width: 16.66666667%;
  }
  .tw-bs .col-sm-1 {
    width: 8.33333333%;
  }
  .tw-bs .col-sm-pull-12 {
    right: 100%;
  }
  .tw-bs .col-sm-pull-11 {
    right: 91.66666667%;
  }
  .tw-bs .col-sm-pull-10 {
    right: 83.33333333%;
  }
  .tw-bs .col-sm-pull-9 {
    right: 75%;
  }
  .tw-bs .col-sm-pull-8 {
    right: 66.66666667%;
  }
  .tw-bs .col-sm-pull-7 {
    right: 58.33333333%;
  }
  .tw-bs .col-sm-pull-6 {
    right: 50%;
  }
  .tw-bs .col-sm-pull-5 {
    right: 41.66666667%;
  }
  .tw-bs .col-sm-pull-4 {
    right: 33.33333333%;
  }
  .tw-bs .col-sm-pull-3 {
    right: 25%;
  }
  .tw-bs .col-sm-pull-2 {
    right: 16.66666667%;
  }
  .tw-bs .col-sm-pull-1 {
    right: 8.33333333%;
  }
  .tw-bs .col-sm-pull-0 {
    right: auto;
  }
  .tw-bs .col-sm-push-12 {
    left: 100%;
  }
  .tw-bs .col-sm-push-11 {
    left: 91.66666667%;
  }
  .tw-bs .col-sm-push-10 {
    left: 83.33333333%;
  }
  .tw-bs .col-sm-push-9 {
    left: 75%;
  }
  .tw-bs .col-sm-push-8 {
    left: 66.66666667%;
  }
  .tw-bs .col-sm-push-7 {
    left: 58.33333333%;
  }
  .tw-bs .col-sm-push-6 {
    left: 50%;
  }
  .tw-bs .col-sm-push-5 {
    left: 41.66666667%;
  }
  .tw-bs .col-sm-push-4 {
    left: 33.33333333%;
  }
  .tw-bs .col-sm-push-3 {
    left: 25%;
  }
  .tw-bs .col-sm-push-2 {
    left: 16.66666667%;
  }
  .tw-bs .col-sm-push-1 {
    left: 8.33333333%;
  }
  .tw-bs .col-sm-push-0 {
    left: auto;
  }
  .tw-bs .col-sm-offset-12 {
    margin-left: 100%;
  }
  .tw-bs .col-sm-offset-11 {
    margin-left: 91.66666667%;
  }
  .tw-bs .col-sm-offset-10 {
    margin-left: 83.33333333%;
  }
  .tw-bs .col-sm-offset-9 {
    margin-left: 75%;
  }
  .tw-bs .col-sm-offset-8 {
    margin-left: 66.66666667%;
  }
  .tw-bs .col-sm-offset-7 {
    margin-left: 58.33333333%;
  }
  .tw-bs .col-sm-offset-6 {
    margin-left: 50%;
  }
  .tw-bs .col-sm-offset-5 {
    margin-left: 41.66666667%;
  }
  .tw-bs .col-sm-offset-4 {
    margin-left: 33.33333333%;
  }
  .tw-bs .col-sm-offset-3 {
    margin-left: 25%;
  }
  .tw-bs .col-sm-offset-2 {
    margin-left: 16.66666667%;
  }
  .tw-bs .col-sm-offset-1 {
    margin-left: 8.33333333%;
  }
  .tw-bs .col-sm-offset-0 {
    margin-left: 0%;
  }
}
@media (min-width: 992px) {
  .tw-bs .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
    float: left;
  }
  .tw-bs .col-md-12 {
    width: 100%;
  }
  .tw-bs .col-md-11 {
    width: 91.66666667%;
  }
  .tw-bs .col-md-10 {
    width: 83.33333333%;
  }
  .tw-bs .col-md-9 {
    width: 75%;
  }
  .tw-bs .col-md-8 {
    width: 66.66666667%;
  }
  .tw-bs .col-md-7 {
    width: 58.33333333%;
  }
  .tw-bs .col-md-6 {
    width: 50%;
  }
  .tw-bs .col-md-5 {
    width: 41.66666667%;
  }
  .tw-bs .col-md-4 {
    width: 33.33333333%;
  }
  .tw-bs .col-md-3 {
    width: 25%;
  }
  .tw-bs .col-md-2 {
    width: 16.66666667%;
  }
  .tw-bs .col-md-1 {
    width: 8.33333333%;
  }
  .tw-bs .col-md-pull-12 {
    right: 100%;
  }
  .tw-bs .col-md-pull-11 {
    right: 91.66666667%;
  }
  .tw-bs .col-md-pull-10 {
    right: 83.33333333%;
  }
  .tw-bs .col-md-pull-9 {
    right: 75%;
  }
  .tw-bs .col-md-pull-8 {
    right: 66.66666667%;
  }
  .tw-bs .col-md-pull-7 {
    right: 58.33333333%;
  }
  .tw-bs .col-md-pull-6 {
    right: 50%;
  }
  .tw-bs .col-md-pull-5 {
    right: 41.66666667%;
  }
  .tw-bs .col-md-pull-4 {
    right: 33.33333333%;
  }
  .tw-bs .col-md-pull-3 {
    right: 25%;
  }
  .tw-bs .col-md-pull-2 {
    right: 16.66666667%;
  }
  .tw-bs .col-md-pull-1 {
    right: 8.33333333%;
  }
  .tw-bs .col-md-pull-0 {
    right: auto;
  }
  .tw-bs .col-md-push-12 {
    left: 100%;
  }
  .tw-bs .col-md-push-11 {
    left: 91.66666667%;
  }
  .tw-bs .col-md-push-10 {
    left: 83.33333333%;
  }
  .tw-bs .col-md-push-9 {
    left: 75%;
  }
  .tw-bs .col-md-push-8 {
    left: 66.66666667%;
  }
  .tw-bs .col-md-push-7 {
    left: 58.33333333%;
  }
  .tw-bs .col-md-push-6 {
    left: 50%;
  }
  .tw-bs .col-md-push-5 {
    left: 41.66666667%;
  }
  .tw-bs .col-md-push-4 {
    left: 33.33333333%;
  }
  .tw-bs .col-md-push-3 {
    left: 25%;
  }
  .tw-bs .col-md-push-2 {
    left: 16.66666667%;
  }
  .tw-bs .col-md-push-1 {
    left: 8.33333333%;
  }
  .tw-bs .col-md-push-0 {
    left: auto;
  }
  .tw-bs .col-md-offset-12 {
    margin-left: 100%;
  }
  .tw-bs .col-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .tw-bs .col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .tw-bs .col-md-offset-9 {
    margin-left: 75%;
  }
  .tw-bs .col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .tw-bs .col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .tw-bs .col-md-offset-6 {
    margin-left: 50%;
  }
  .tw-bs .col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .tw-bs .col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .tw-bs .col-md-offset-3 {
    margin-left: 25%;
  }
  .tw-bs .col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .tw-bs .col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .tw-bs .col-md-offset-0 {
    margin-left: 0%;
  }
}
@media (min-width: 1200px) {
  .tw-bs .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
    float: left;
  }
  .tw-bs .col-lg-12 {
    width: 100%;
  }
  .tw-bs .col-lg-11 {
    width: 91.66666667%;
  }
  .tw-bs .col-lg-10 {
    width: 83.33333333%;
  }
  .tw-bs .col-lg-9 {
    width: 75%;
  }
  .tw-bs .col-lg-8 {
    width: 66.66666667%;
  }
  .tw-bs .col-lg-7 {
    width: 58.33333333%;
  }
  .tw-bs .col-lg-6 {
    width: 50%;
  }
  .tw-bs .col-lg-5 {
    width: 41.66666667%;
  }
  .tw-bs .col-lg-4 {
    width: 33.33333333%;
  }
  .tw-bs .col-lg-3 {
    width: 25%;
  }
  .tw-bs .col-lg-2 {
    width: 16.66666667%;
  }
  .tw-bs .col-lg-1 {
    width: 8.33333333%;
  }
  .tw-bs .col-lg-pull-12 {
    right: 100%;
  }
  .tw-bs .col-lg-pull-11 {
    right: 91.66666667%;
  }
  .tw-bs .col-lg-pull-10 {
    right: 83.33333333%;
  }
  .tw-bs .col-lg-pull-9 {
    right: 75%;
  }
  .tw-bs .col-lg-pull-8 {
    right: 66.66666667%;
  }
  .tw-bs .col-lg-pull-7 {
    right: 58.33333333%;
  }
  .tw-bs .col-lg-pull-6 {
    right: 50%;
  }
  .tw-bs .col-lg-pull-5 {
    right: 41.66666667%;
  }
  .tw-bs .col-lg-pull-4 {
    right: 33.33333333%;
  }
  .tw-bs .col-lg-pull-3 {
    right: 25%;
  }
  .tw-bs .col-lg-pull-2 {
    right: 16.66666667%;
  }
  .tw-bs .col-lg-pull-1 {
    right: 8.33333333%;
  }
  .tw-bs .col-lg-pull-0 {
    right: auto;
  }
  .tw-bs .col-lg-push-12 {
    left: 100%;
  }
  .tw-bs .col-lg-push-11 {
    left: 91.66666667%;
  }
  .tw-bs .col-lg-push-10 {
    left: 83.33333333%;
  }
  .tw-bs .col-lg-push-9 {
    left: 75%;
  }
  .tw-bs .col-lg-push-8 {
    left: 66.66666667%;
  }
  .tw-bs .col-lg-push-7 {
    left: 58.33333333%;
  }
  .tw-bs .col-lg-push-6 {
    left: 50%;
  }
  .tw-bs .col-lg-push-5 {
    left: 41.66666667%;
  }
  .tw-bs .col-lg-push-4 {
    left: 33.33333333%;
  }
  .tw-bs .col-lg-push-3 {
    left: 25%;
  }
  .tw-bs .col-lg-push-2 {
    left: 16.66666667%;
  }
  .tw-bs .col-lg-push-1 {
    left: 8.33333333%;
  }
  .tw-bs .col-lg-push-0 {
    left: auto;
  }
  .tw-bs .col-lg-offset-12 {
    margin-left: 100%;
  }
  .tw-bs .col-lg-offset-11 {
    margin-left: 91.66666667%;
  }
  .tw-bs .col-lg-offset-10 {
    margin-left: 83.33333333%;
  }
  .tw-bs .col-lg-offset-9 {
    margin-left: 75%;
  }
  .tw-bs .col-lg-offset-8 {
    margin-left: 66.66666667%;
  }
  .tw-bs .col-lg-offset-7 {
    margin-left: 58.33333333%;
  }
  .tw-bs .col-lg-offset-6 {
    margin-left: 50%;
  }
  .tw-bs .col-lg-offset-5 {
    margin-left: 41.66666667%;
  }
  .tw-bs .col-lg-offset-4 {
    margin-left: 33.33333333%;
  }
  .tw-bs .col-lg-offset-3 {
    margin-left: 25%;
  }
  .tw-bs .col-lg-offset-2 {
    margin-left: 16.66666667%;
  }
  .tw-bs .col-lg-offset-1 {
    margin-left: 8.33333333%;
  }
  .tw-bs .col-lg-offset-0 {
    margin-left: 0%;
  }
}
.tw-bs table {
  background-color: transparent;
}
.tw-bs caption {
  padding-top: 8px;
  padding-bottom: 8px;
  color: #777777;
  text-align: left;
}
.tw-bs th {
  text-align: left;
}
.tw-bs .table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
.tw-bs .table > thead > tr > th,
.tw-bs .table > tbody > tr > th,
.tw-bs .table > tfoot > tr > th,
.tw-bs .table > thead > tr > td,
.tw-bs .table > tbody > tr > td,
.tw-bs .table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #dddddd;
}
.tw-bs .table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #dddddd;
}
.tw-bs .table > caption + thead > tr:first-child > th,
.tw-bs .table > colgroup + thead > tr:first-child > th,
.tw-bs .table > thead:first-child > tr:first-child > th,
.tw-bs .table > caption + thead > tr:first-child > td,
.tw-bs .table > colgroup + thead > tr:first-child > td,
.tw-bs .table > thead:first-child > tr:first-child > td {
  border-top: 0;
}
.tw-bs .table > tbody + tbody {
  border-top: 2px solid #dddddd;
}
.tw-bs .table .table {
  background-color: #ffffff;
}
.tw-bs .table-condensed > thead > tr > th,
.tw-bs .table-condensed > tbody > tr > th,
.tw-bs .table-condensed > tfoot > tr > th,
.tw-bs .table-condensed > thead > tr > td,
.tw-bs .table-condensed > tbody > tr > td,
.tw-bs .table-condensed > tfoot > tr > td {
  padding: 5px;
}
.tw-bs .table-bordered {
  border: 1px solid #dddddd;
}
.tw-bs .table-bordered > thead > tr > th,
.tw-bs .table-bordered > tbody > tr > th,
.tw-bs .table-bordered > tfoot > tr > th,
.tw-bs .table-bordered > thead > tr > td,
.tw-bs .table-bordered > tbody > tr > td,
.tw-bs .table-bordered > tfoot > tr > td {
  border: 1px solid #dddddd;
}
.tw-bs .table-bordered > thead > tr > th,
.tw-bs .table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}
.tw-bs .table-striped > tbody > tr:nth-child(odd) {
  background-color: #f9f9f9;
}
.tw-bs .table-hover > tbody > tr:hover {
  background-color: #f5f5f5;
}
.tw-bs table col[class*="col-"] {
  position: static;
  float: none;
  display: table-column;
}
.tw-bs table td[class*="col-"],
.tw-bs table th[class*="col-"] {
  position: static;
  float: none;
  display: table-cell;
}
.tw-bs .table > thead > tr > td.active,
.tw-bs .table > tbody > tr > td.active,
.tw-bs .table > tfoot > tr > td.active,
.tw-bs .table > thead > tr > th.active,
.tw-bs .table > tbody > tr > th.active,
.tw-bs .table > tfoot > tr > th.active,
.tw-bs .table > thead > tr.active > td,
.tw-bs .table > tbody > tr.active > td,
.tw-bs .table > tfoot > tr.active > td,
.tw-bs .table > thead > tr.active > th,
.tw-bs .table > tbody > tr.active > th,
.tw-bs .table > tfoot > tr.active > th {
  background-color: #f5f5f5;
}
.tw-bs .table-hover > tbody > tr > td.active:hover,
.tw-bs .table-hover > tbody > tr > th.active:hover,
.tw-bs .table-hover > tbody > tr.active:hover > td,
.tw-bs .table-hover > tbody > tr:hover > .active,
.tw-bs .table-hover > tbody > tr.active:hover > th {
  background-color: #e8e8e8;
}
.tw-bs .table > thead > tr > td.success,
.tw-bs .table > tbody > tr > td.success,
.tw-bs .table > tfoot > tr > td.success,
.tw-bs .table > thead > tr > th.success,
.tw-bs .table > tbody > tr > th.success,
.tw-bs .table > tfoot > tr > th.success,
.tw-bs .table > thead > tr.success > td,
.tw-bs .table > tbody > tr.success > td,
.tw-bs .table > tfoot > tr.success > td,
.tw-bs .table > thead > tr.success > th,
.tw-bs .table > tbody > tr.success > th,
.tw-bs .table > tfoot > tr.success > th {
  background-color: #dff0d8;
}
.tw-bs .table-hover > tbody > tr > td.success:hover,
.tw-bs .table-hover > tbody > tr > th.success:hover,
.tw-bs .table-hover > tbody > tr.success:hover > td,
.tw-bs .table-hover > tbody > tr:hover > .success,
.tw-bs .table-hover > tbody > tr.success:hover > th {
  background-color: #d0e9c6;
}
.tw-bs .table > thead > tr > td.info,
.tw-bs .table > tbody > tr > td.info,
.tw-bs .table > tfoot > tr > td.info,
.tw-bs .table > thead > tr > th.info,
.tw-bs .table > tbody > tr > th.info,
.tw-bs .table > tfoot > tr > th.info,
.tw-bs .table > thead > tr.info > td,
.tw-bs .table > tbody > tr.info > td,
.tw-bs .table > tfoot > tr.info > td,
.tw-bs .table > thead > tr.info > th,
.tw-bs .table > tbody > tr.info > th,
.tw-bs .table > tfoot > tr.info > th {
  background-color: #d9edf7;
}
.tw-bs .table-hover > tbody > tr > td.info:hover,
.tw-bs .table-hover > tbody > tr > th.info:hover,
.tw-bs .table-hover > tbody > tr.info:hover > td,
.tw-bs .table-hover > tbody > tr:hover > .info,
.tw-bs .table-hover > tbody > tr.info:hover > th {
  background-color: #c4e3f3;
}
.tw-bs .table > thead > tr > td.warning,
.tw-bs .table > tbody > tr > td.warning,
.tw-bs .table > tfoot > tr > td.warning,
.tw-bs .table > thead > tr > th.warning,
.tw-bs .table > tbody > tr > th.warning,
.tw-bs .table > tfoot > tr > th.warning,
.tw-bs .table > thead > tr.warning > td,
.tw-bs .table > tbody > tr.warning > td,
.tw-bs .table > tfoot > tr.warning > td,
.tw-bs .table > thead > tr.warning > th,
.tw-bs .table > tbody > tr.warning > th,
.tw-bs .table > tfoot > tr.warning > th {
  background-color: #fcf8e3;
}
.tw-bs .table-hover > tbody > tr > td.warning:hover,
.tw-bs .table-hover > tbody > tr > th.warning:hover,
.tw-bs .table-hover > tbody > tr.warning:hover > td,
.tw-bs .table-hover > tbody > tr:hover > .warning,
.tw-bs .table-hover > tbody > tr.warning:hover > th {
  background-color: #faf2cc;
}
.tw-bs .table > thead > tr > td.danger,
.tw-bs .table > tbody > tr > td.danger,
.tw-bs .table > tfoot > tr > td.danger,
.tw-bs .table > thead > tr > th.danger,
.tw-bs .table > tbody > tr > th.danger,
.tw-bs .table > tfoot > tr > th.danger,
.tw-bs .table > thead > tr.danger > td,
.tw-bs .table > tbody > tr.danger > td,
.tw-bs .table > tfoot > tr.danger > td,
.tw-bs .table > thead > tr.danger > th,
.tw-bs .table > tbody > tr.danger > th,
.tw-bs .table > tfoot > tr.danger > th {
  background-color: #f2dede;
}
.tw-bs .table-hover > tbody > tr > td.danger:hover,
.tw-bs .table-hover > tbody > tr > th.danger:hover,
.tw-bs .table-hover > tbody > tr.danger:hover > td,
.tw-bs .table-hover > tbody > tr:hover > .danger,
.tw-bs .table-hover > tbody > tr.danger:hover > th {
  background-color: #ebcccc;
}
.tw-bs .table-responsive {
  overflow-x: auto;
}
@media screen and (max-width: 767px) {
  .tw-bs .table-responsive {
    width: 100%;
    margin-bottom: 15px;
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #dddddd;
  }
  .tw-bs .table-responsive > .table {
    margin-bottom: 0;
  }
  .tw-bs .table-responsive > .table > thead > tr > th,
  .tw-bs .table-responsive > .table > tbody > tr > th,
  .tw-bs .table-responsive > .table > tfoot > tr > th,
  .tw-bs .table-responsive > .table > thead > tr > td,
  .tw-bs .table-responsive > .table > tbody > tr > td,
  .tw-bs .table-responsive > .table > tfoot > tr > td {
    white-space: nowrap;
  }
  .tw-bs .table-responsive > .table-bordered {
    border: 0;
  }
  .tw-bs .table-responsive > .table-bordered > thead > tr > th:first-child,
  .tw-bs .table-responsive > .table-bordered > tbody > tr > th:first-child,
  .tw-bs .table-responsive > .table-bordered > tfoot > tr > th:first-child,
  .tw-bs .table-responsive > .table-bordered > thead > tr > td:first-child,
  .tw-bs .table-responsive > .table-bordered > tbody > tr > td:first-child,
  .tw-bs .table-responsive > .table-bordered > tfoot > tr > td:first-child {
    border-left: 0;
  }
  .tw-bs .table-responsive > .table-bordered > thead > tr > th:last-child,
  .tw-bs .table-responsive > .table-bordered > tbody > tr > th:last-child,
  .tw-bs .table-responsive > .table-bordered > tfoot > tr > th:last-child,
  .tw-bs .table-responsive > .table-bordered > thead > tr > td:last-child,
  .tw-bs .table-responsive > .table-bordered > tbody > tr > td:last-child,
  .tw-bs .table-responsive > .table-bordered > tfoot > tr > td:last-child {
    border-right: 0;
  }
  .tw-bs .table-responsive > .table-bordered > tbody > tr:last-child > th,
  .tw-bs .table-responsive > .table-bordered > tfoot > tr:last-child > th,
  .tw-bs .table-responsive > .table-bordered > tbody > tr:last-child > td,
  .tw-bs .table-responsive > .table-bordered > tfoot > tr:last-child > td {
    border-bottom: 0;
  }
}
.tw-bs fieldset {
  padding: 0;
  margin: 0;
  border: 0;
  min-width: 0;
}
.tw-bs legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: inherit;
  color: #333333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}
.tw-bs label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}
.tw-bs input[type="search"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.tw-bs input[type="radio"],
.tw-bs input[type="checkbox"] {
  margin: 4px 0 0;
  margin-top: 1px \\9;
  line-height: normal;
}
.tw-bs input[type="file"] {
  display: block;
}
.tw-bs input[type="range"] {
  display: block;
  width: 100%;
}
.tw-bs select[multiple],
.tw-bs select[size] {
  height: auto;
}
.tw-bs input[type="file"]:focus,
.tw-bs input[type="radio"]:focus,
.tw-bs input[type="checkbox"]:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.tw-bs output {
  display: block;
  padding-top: 7px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555555;
}
.tw-bs .form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555555;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #cccccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.tw-bs .form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
.tw-bs .form-control::-moz-placeholder {
  color: #999999;
  opacity: 1;
}
.tw-bs .form-control:-ms-input-placeholder {
  color: #999999;
}
.tw-bs .form-control::-webkit-input-placeholder {
  color: #999999;
}
.tw-bs .form-control[disabled],
.tw-bs .form-control[readonly],
fieldset[disabled] .tw-bs .form-control {
  cursor: not-allowed;
  background-color: #eeeeee;
  opacity: 1;
}
textarea.tw-bs .form-control {
  height: auto;
}
.tw-bs input[type="search"] {
  -webkit-appearance: none;
}
.tw-bs input[type="date"],
.tw-bs input[type="time"],
.tw-bs input[type="datetime-local"],
.tw-bs input[type="month"] {
  line-height: 34px;
  line-height: 1.42857143 \\0;
}
.tw-bs input[type="date"].input-sm,
.tw-bs input[type="time"].input-sm,
.tw-bs input[type="datetime-local"].input-sm,
.tw-bs input[type="month"].input-sm {
  line-height: 30px;
  line-height: 1.5 \\0;
}
.tw-bs input[type="date"].input-lg,
.tw-bs input[type="time"].input-lg,
.tw-bs input[type="datetime-local"].input-lg,
.tw-bs input[type="month"].input-lg {
  line-height: 46px;
  line-height: 1.33 \\0;
}
.tw-bs _:-ms-fullscreen,
.tw-bs :root input[type="date"],
.tw-bs _:-ms-fullscreen,
.tw-bs :root input[type="time"],
.tw-bs _:-ms-fullscreen,
.tw-bs :root input[type="datetime-local"],
.tw-bs _:-ms-fullscreen,
.tw-bs :root input[type="month"] {
  line-height: 1.42857143;
}
.tw-bs _:-ms-fullscreen.input-sm,
.tw-bs :root input[type="date"].input-sm,
.tw-bs _:-ms-fullscreen.input-sm,
.tw-bs :root input[type="time"].input-sm,
.tw-bs _:-ms-fullscreen.input-sm,
.tw-bs :root input[type="datetime-local"].input-sm,
.tw-bs _:-ms-fullscreen.input-sm,
.tw-bs :root input[type="month"].input-sm {
  line-height: 1.5;
}
.tw-bs _:-ms-fullscreen.input-lg,
.tw-bs :root input[type="date"].input-lg,
.tw-bs _:-ms-fullscreen.input-lg,
.tw-bs :root input[type="time"].input-lg,
.tw-bs _:-ms-fullscreen.input-lg,
.tw-bs :root input[type="datetime-local"].input-lg,
.tw-bs _:-ms-fullscreen.input-lg,
.tw-bs :root input[type="month"].input-lg {
  line-height: 1.33;
}
.tw-bs .form-group {
  margin-bottom: 15px;
}
.tw-bs .radio,
.tw-bs .checkbox {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.tw-bs .radio label,
.tw-bs .checkbox label {
  min-height: 20px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
}
.tw-bs .radio input[type="radio"],
.tw-bs .radio-inline input[type="radio"],
.tw-bs .checkbox input[type="checkbox"],
.tw-bs .checkbox-inline input[type="checkbox"] {
  position: absolute;
  margin-left: -20px;
  margin-top: 4px \\9;
}
.tw-bs .radio + .radio,
.tw-bs .checkbox + .checkbox {
  margin-top: -5px;
}
.tw-bs .radio-inline,
.tw-bs .checkbox-inline {
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  vertical-align: middle;
  font-weight: normal;
  cursor: pointer;
}
.tw-bs .radio-inline + .radio-inline,
.tw-bs .checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
.tw-bs input[type="radio"][disabled],
.tw-bs input[type="checkbox"][disabled],
.tw-bs input[type="radio"].disabled,
.tw-bs input[type="checkbox"].disabled,
fieldset[disabled] .tw-bs input[type="radio"],
fieldset[disabled] .tw-bs input[type="checkbox"] {
  cursor: not-allowed;
}
.tw-bs .radio-inline.disabled,
.tw-bs .checkbox-inline.disabled,
fieldset[disabled] .tw-bs .radio-inline,
fieldset[disabled] .tw-bs .checkbox-inline {
  cursor: not-allowed;
}
.tw-bs .radio.disabled label,
.tw-bs .checkbox.disabled label,
fieldset[disabled] .tw-bs .radio label,
fieldset[disabled] .tw-bs .checkbox label {
  cursor: not-allowed;
}
.tw-bs .form-control-static {
  padding-top: 7px;
  padding-bottom: 7px;
  margin-bottom: 0;
}
.tw-bs .form-control-static.input-lg,
.tw-bs .form-control-static.input-sm {
  padding-left: 0;
  padding-right: 0;
}
.tw-bs .input-sm,
.tw-bs .form-group-sm .form-control {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.tw-bs .input-sm,
select.tw-bs .form-group-sm .form-control {
  height: 30px;
  line-height: 30px;
}
textarea.tw-bs .input-sm,
textarea.tw-bs .form-group-sm .form-control,
select[multiple].tw-bs .input-sm,
select[multiple].tw-bs .form-group-sm .form-control {
  height: auto;
}
.tw-bs .input-lg,
.tw-bs .form-group-lg .form-control {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
select.tw-bs .input-lg,
select.tw-bs .form-group-lg .form-control {
  height: 46px;
  line-height: 46px;
}
textarea.tw-bs .input-lg,
textarea.tw-bs .form-group-lg .form-control,
select[multiple].tw-bs .input-lg,
select[multiple].tw-bs .form-group-lg .form-control {
  height: auto;
}
.tw-bs .has-feedback {
  position: relative;
}
.tw-bs .has-feedback .form-control {
  padding-right: 42.5px;
}
.tw-bs .form-control-feedback {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  pointer-events: none;
}
.tw-bs .input-lg + .form-control-feedback {
  width: 46px;
  height: 46px;
  line-height: 46px;
}
.tw-bs .input-sm + .form-control-feedback {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.tw-bs .has-success .help-block,
.tw-bs .has-success .control-label,
.tw-bs .has-success .radio,
.tw-bs .has-success .checkbox,
.tw-bs .has-success .radio-inline,
.tw-bs .has-success .checkbox-inline,
.tw-bs .has-success.radio label,
.tw-bs .has-success.checkbox label,
.tw-bs .has-success.radio-inline label,
.tw-bs .has-success.checkbox-inline label {
  color: #3c763d;
}
.tw-bs .has-success .form-control {
  border-color: #3c763d;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.tw-bs .has-success .form-control:focus {
  border-color: #2b542c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
}
.tw-bs .has-success .input-group-addon {
  color: #3c763d;
  border-color: #3c763d;
  background-color: #dff0d8;
}
.tw-bs .has-success .form-control-feedback {
  color: #3c763d;
}
.tw-bs .has-warning .help-block,
.tw-bs .has-warning .control-label,
.tw-bs .has-warning .radio,
.tw-bs .has-warning .checkbox,
.tw-bs .has-warning .radio-inline,
.tw-bs .has-warning .checkbox-inline,
.tw-bs .has-warning.radio label,
.tw-bs .has-warning.checkbox label,
.tw-bs .has-warning.radio-inline label,
.tw-bs .has-warning.checkbox-inline label {
  color: #8a6d3b;
}
.tw-bs .has-warning .form-control {
  border-color: #8a6d3b;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.tw-bs .has-warning .form-control:focus {
  border-color: #66512c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
}
.tw-bs .has-warning .input-group-addon {
  color: #8a6d3b;
  border-color: #8a6d3b;
  background-color: #fcf8e3;
}
.tw-bs .has-warning .form-control-feedback {
  color: #8a6d3b;
}
.tw-bs .has-error .help-block,
.tw-bs .has-error .control-label,
.tw-bs .has-error .radio,
.tw-bs .has-error .checkbox,
.tw-bs .has-error .radio-inline,
.tw-bs .has-error .checkbox-inline,
.tw-bs .has-error.radio label,
.tw-bs .has-error.checkbox label,
.tw-bs .has-error.radio-inline label,
.tw-bs .has-error.checkbox-inline label {
  color: #a94442;
}
.tw-bs .has-error .form-control {
  border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.tw-bs .has-error .form-control:focus {
  border-color: #843534;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
}
.tw-bs .has-error .input-group-addon {
  color: #a94442;
  border-color: #a94442;
  background-color: #f2dede;
}
.tw-bs .has-error .form-control-feedback {
  color: #a94442;
}
.tw-bs .has-feedback label ~ .form-control-feedback {
  top: 25px;
}
.tw-bs .has-feedback label.sr-only ~ .form-control-feedback {
  top: 0;
}
.tw-bs .help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
}
@media (min-width: 768px) {
  .tw-bs .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .tw-bs .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .tw-bs .form-inline .form-control-static {
    display: inline-block;
  }
  .tw-bs .form-inline .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .tw-bs .form-inline .input-group .input-group-addon,
  .tw-bs .form-inline .input-group .input-group-btn,
  .tw-bs .form-inline .input-group .form-control {
    width: auto;
  }
  .tw-bs .form-inline .input-group > .form-control {
    width: 100%;
  }
  .tw-bs .form-inline .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .tw-bs .form-inline .radio,
  .tw-bs .form-inline .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .tw-bs .form-inline .radio label,
  .tw-bs .form-inline .checkbox label {
    padding-left: 0;
  }
  .tw-bs .form-inline .radio input[type="radio"],
  .tw-bs .form-inline .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .tw-bs .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}
.tw-bs .form-horizontal .radio,
.tw-bs .form-horizontal .checkbox,
.tw-bs .form-horizontal .radio-inline,
.tw-bs .form-horizontal .checkbox-inline {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 7px;
}
.tw-bs .form-horizontal .radio,
.tw-bs .form-horizontal .checkbox {
  min-height: 27px;
}
.tw-bs .form-horizontal .form-group {
  margin-left: -15px;
  margin-right: -15px;
}
@media (min-width: 768px) {
  .tw-bs .form-horizontal .control-label {
    text-align: right;
    margin-bottom: 0;
    padding-top: 7px;
  }
}
.tw-bs .form-horizontal .has-feedback .form-control-feedback {
  right: 15px;
}
@media (min-width: 768px) {
  .tw-bs .form-horizontal .form-group-lg .control-label {
    padding-top: 14.3px;
  }
}
@media (min-width: 768px) {
  .tw-bs .form-horizontal .form-group-sm .control-label {
    padding-top: 6px;
  }
}
.tw-bs .btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.tw-bs .btn:focus,
.tw-bs .btn:active:focus,
.tw-bs .btn.active:focus,
.tw-bs .btn.focus,
.tw-bs .btn:active.focus,
.tw-bs .btn.active.focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.tw-bs .btn:hover,
.tw-bs .btn:focus,
.tw-bs .btn.focus {
  color: #333333;
  text-decoration: none;
}
.tw-bs .btn:active,
.tw-bs .btn.active {
  outline: 0;
  background-image: none;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.tw-bs .btn.disabled,
.tw-bs .btn[disabled],
fieldset[disabled] .tw-bs .btn {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.65;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  box-shadow: none;
}
.tw-bs .btn-default {
  color: #333333;
  background-color: #ffffff;
  border-color: #cccccc;
}
.tw-bs .btn-default:hover,
.tw-bs .btn-default:focus,
.tw-bs .btn-default.focus,
.tw-bs .btn-default:active,
.tw-bs .btn-default.active,
.open > .dropdown-toggle.tw-bs .btn-default {
  color: #333333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.tw-bs .btn-default:active,
.tw-bs .btn-default.active,
.open > .dropdown-toggle.tw-bs .btn-default {
  background-image: none;
}
.tw-bs .btn-default.disabled,
.tw-bs .btn-default[disabled],
fieldset[disabled] .tw-bs .btn-default,
.tw-bs .btn-default.disabled:hover,
.tw-bs .btn-default[disabled]:hover,
fieldset[disabled] .tw-bs .btn-default:hover,
.tw-bs .btn-default.disabled:focus,
.tw-bs .btn-default[disabled]:focus,
fieldset[disabled] .tw-bs .btn-default:focus,
.tw-bs .btn-default.disabled.focus,
.tw-bs .btn-default[disabled].focus,
fieldset[disabled] .tw-bs .btn-default.focus,
.tw-bs .btn-default.disabled:active,
.tw-bs .btn-default[disabled]:active,
fieldset[disabled] .tw-bs .btn-default:active,
.tw-bs .btn-default.disabled.active,
.tw-bs .btn-default[disabled].active,
fieldset[disabled] .tw-bs .btn-default.active {
  background-color: #ffffff;
  border-color: #cccccc;
}
.tw-bs .btn-default .badge {
  color: #ffffff;
  background-color: #333333;
}
.tw-bs .btn-primary {
  color: #ffffff;
  background-color: #428bca;
  border-color: #357ebd;
}
.tw-bs .btn-primary:hover,
.tw-bs .btn-primary:focus,
.tw-bs .btn-primary.focus,
.tw-bs .btn-primary:active,
.tw-bs .btn-primary.active,
.open > .dropdown-toggle.tw-bs .btn-primary {
  color: #ffffff;
  background-color: #3071a9;
  border-color: #285e8e;
}
.tw-bs .btn-primary:active,
.tw-bs .btn-primary.active,
.open > .dropdown-toggle.tw-bs .btn-primary {
  background-image: none;
}
.tw-bs .btn-primary.disabled,
.tw-bs .btn-primary[disabled],
fieldset[disabled] .tw-bs .btn-primary,
.tw-bs .btn-primary.disabled:hover,
.tw-bs .btn-primary[disabled]:hover,
fieldset[disabled] .tw-bs .btn-primary:hover,
.tw-bs .btn-primary.disabled:focus,
.tw-bs .btn-primary[disabled]:focus,
fieldset[disabled] .tw-bs .btn-primary:focus,
.tw-bs .btn-primary.disabled.focus,
.tw-bs .btn-primary[disabled].focus,
fieldset[disabled] .tw-bs .btn-primary.focus,
.tw-bs .btn-primary.disabled:active,
.tw-bs .btn-primary[disabled]:active,
fieldset[disabled] .tw-bs .btn-primary:active,
.tw-bs .btn-primary.disabled.active,
.tw-bs .btn-primary[disabled].active,
fieldset[disabled] .tw-bs .btn-primary.active {
  background-color: #428bca;
  border-color: #357ebd;
}
.tw-bs .btn-primary .badge {
  color: #428bca;
  background-color: #ffffff;
}
.tw-bs .btn-success {
  color: #ffffff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.tw-bs .btn-success:hover,
.tw-bs .btn-success:focus,
.tw-bs .btn-success.focus,
.tw-bs .btn-success:active,
.tw-bs .btn-success.active,
.open > .dropdown-toggle.tw-bs .btn-success {
  color: #ffffff;
  background-color: #449d44;
  border-color: #398439;
}
.tw-bs .btn-success:active,
.tw-bs .btn-success.active,
.open > .dropdown-toggle.tw-bs .btn-success {
  background-image: none;
}
.tw-bs .btn-success.disabled,
.tw-bs .btn-success[disabled],
fieldset[disabled] .tw-bs .btn-success,
.tw-bs .btn-success.disabled:hover,
.tw-bs .btn-success[disabled]:hover,
fieldset[disabled] .tw-bs .btn-success:hover,
.tw-bs .btn-success.disabled:focus,
.tw-bs .btn-success[disabled]:focus,
fieldset[disabled] .tw-bs .btn-success:focus,
.tw-bs .btn-success.disabled.focus,
.tw-bs .btn-success[disabled].focus,
fieldset[disabled] .tw-bs .btn-success.focus,
.tw-bs .btn-success.disabled:active,
.tw-bs .btn-success[disabled]:active,
fieldset[disabled] .tw-bs .btn-success:active,
.tw-bs .btn-success.disabled.active,
.tw-bs .btn-success[disabled].active,
fieldset[disabled] .tw-bs .btn-success.active {
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.tw-bs .btn-success .badge {
  color: #5cb85c;
  background-color: #ffffff;
}
.tw-bs .btn-info {
  color: #ffffff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.tw-bs .btn-info:hover,
.tw-bs .btn-info:focus,
.tw-bs .btn-info.focus,
.tw-bs .btn-info:active,
.tw-bs .btn-info.active,
.open > .dropdown-toggle.tw-bs .btn-info {
  color: #ffffff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.tw-bs .btn-info:active,
.tw-bs .btn-info.active,
.open > .dropdown-toggle.tw-bs .btn-info {
  background-image: none;
}
.tw-bs .btn-info.disabled,
.tw-bs .btn-info[disabled],
fieldset[disabled] .tw-bs .btn-info,
.tw-bs .btn-info.disabled:hover,
.tw-bs .btn-info[disabled]:hover,
fieldset[disabled] .tw-bs .btn-info:hover,
.tw-bs .btn-info.disabled:focus,
.tw-bs .btn-info[disabled]:focus,
fieldset[disabled] .tw-bs .btn-info:focus,
.tw-bs .btn-info.disabled.focus,
.tw-bs .btn-info[disabled].focus,
fieldset[disabled] .tw-bs .btn-info.focus,
.tw-bs .btn-info.disabled:active,
.tw-bs .btn-info[disabled]:active,
fieldset[disabled] .tw-bs .btn-info:active,
.tw-bs .btn-info.disabled.active,
.tw-bs .btn-info[disabled].active,
fieldset[disabled] .tw-bs .btn-info.active {
  background-color: #5bc0de;
  border-color: #46b8da;
}
.tw-bs .btn-info .badge {
  color: #5bc0de;
  background-color: #ffffff;
}
.tw-bs .btn-warning {
  color: #ffffff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.tw-bs .btn-warning:hover,
.tw-bs .btn-warning:focus,
.tw-bs .btn-warning.focus,
.tw-bs .btn-warning:active,
.tw-bs .btn-warning.active,
.open > .dropdown-toggle.tw-bs .btn-warning {
  color: #ffffff;
  background-color: #ec971f;
  border-color: #d58512;
}
.tw-bs .btn-warning:active,
.tw-bs .btn-warning.active,
.open > .dropdown-toggle.tw-bs .btn-warning {
  background-image: none;
}
.tw-bs .btn-warning.disabled,
.tw-bs .btn-warning[disabled],
fieldset[disabled] .tw-bs .btn-warning,
.tw-bs .btn-warning.disabled:hover,
.tw-bs .btn-warning[disabled]:hover,
fieldset[disabled] .tw-bs .btn-warning:hover,
.tw-bs .btn-warning.disabled:focus,
.tw-bs .btn-warning[disabled]:focus,
fieldset[disabled] .tw-bs .btn-warning:focus,
.tw-bs .btn-warning.disabled.focus,
.tw-bs .btn-warning[disabled].focus,
fieldset[disabled] .tw-bs .btn-warning.focus,
.tw-bs .btn-warning.disabled:active,
.tw-bs .btn-warning[disabled]:active,
fieldset[disabled] .tw-bs .btn-warning:active,
.tw-bs .btn-warning.disabled.active,
.tw-bs .btn-warning[disabled].active,
fieldset[disabled] .tw-bs .btn-warning.active {
  background-color: #f0ad4e;
  border-color: #eea236;
}
.tw-bs .btn-warning .badge {
  color: #f0ad4e;
  background-color: #ffffff;
}
.tw-bs .btn-danger {
  color: #ffffff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.tw-bs .btn-danger:hover,
.tw-bs .btn-danger:focus,
.tw-bs .btn-danger.focus,
.tw-bs .btn-danger:active,
.tw-bs .btn-danger.active,
.open > .dropdown-toggle.tw-bs .btn-danger {
  color: #ffffff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.tw-bs .btn-danger:active,
.tw-bs .btn-danger.active,
.open > .dropdown-toggle.tw-bs .btn-danger {
  background-image: none;
}
.tw-bs .btn-danger.disabled,
.tw-bs .btn-danger[disabled],
fieldset[disabled] .tw-bs .btn-danger,
.tw-bs .btn-danger.disabled:hover,
.tw-bs .btn-danger[disabled]:hover,
fieldset[disabled] .tw-bs .btn-danger:hover,
.tw-bs .btn-danger.disabled:focus,
.tw-bs .btn-danger[disabled]:focus,
fieldset[disabled] .tw-bs .btn-danger:focus,
.tw-bs .btn-danger.disabled.focus,
.tw-bs .btn-danger[disabled].focus,
fieldset[disabled] .tw-bs .btn-danger.focus,
.tw-bs .btn-danger.disabled:active,
.tw-bs .btn-danger[disabled]:active,
fieldset[disabled] .tw-bs .btn-danger:active,
.tw-bs .btn-danger.disabled.active,
.tw-bs .btn-danger[disabled].active,
fieldset[disabled] .tw-bs .btn-danger.active {
  background-color: #d9534f;
  border-color: #d43f3a;
}
.tw-bs .btn-danger .badge {
  color: #d9534f;
  background-color: #ffffff;
}
.tw-bs .btn-link {
  color: #428bca;
  font-weight: normal;
  border-radius: 0;
}
.tw-bs .btn-link,
.tw-bs .btn-link:active,
.tw-bs .btn-link.active,
.tw-bs .btn-link[disabled],
fieldset[disabled] .tw-bs .btn-link {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.tw-bs .btn-link,
.tw-bs .btn-link:hover,
.tw-bs .btn-link:focus,
.tw-bs .btn-link:active {
  border-color: transparent;
}
.tw-bs .btn-link:hover,
.tw-bs .btn-link:focus {
  color: #2a6496;
  text-decoration: underline;
  background-color: transparent;
}
.tw-bs .btn-link[disabled]:hover,
fieldset[disabled] .tw-bs .btn-link:hover,
.tw-bs .btn-link[disabled]:focus,
fieldset[disabled] .tw-bs .btn-link:focus {
  color: #777777;
  text-decoration: none;
}
.tw-bs .btn-lg {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
.tw-bs .btn-sm {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.tw-bs .btn-xs {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.tw-bs .btn-block {
  display: block;
  width: 100%;
}
.tw-bs .btn-block + .btn-block {
  margin-top: 5px;
}
.tw-bs input[type="submit"].btn-block,
.tw-bs input[type="reset"].btn-block,
.tw-bs input[type="button"].btn-block {
  width: 100%;
}
.tw-bs .fade {
  opacity: 0;
  -webkit-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}
.tw-bs .fade.in {
  opacity: 1;
}
.tw-bs .collapse {
  display: none;
}
.tw-bs .collapse.in {
  display: block;
}
tr.tw-bs .collapse.in {
  display: table-row;
}
tbody.tw-bs .collapse.in {
  display: table-row-group;
}
.tw-bs .collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height 0.35s ease;
  -o-transition: height 0.35s ease;
  transition: height 0.35s ease;
}
.tw-bs .caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.tw-bs .dropdown {
  position: relative;
}
.tw-bs .dropdown-toggle:focus {
  outline: 0;
}
.tw-bs .dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}
.tw-bs .dropdown-menu.pull-right {
  right: 0;
  left: auto;
}
.tw-bs .dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.tw-bs .dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333333;
  white-space: nowrap;
}
.tw-bs .dropdown-menu > li > a:hover,
.tw-bs .dropdown-menu > li > a:focus {
  text-decoration: none;
  color: #262626;
  background-color: #f5f5f5;
}
.tw-bs .dropdown-menu > .active > a,
.tw-bs .dropdown-menu > .active > a:hover,
.tw-bs .dropdown-menu > .active > a:focus {
  color: #ffffff;
  text-decoration: none;
  outline: 0;
  background-color: #428bca;
}
.tw-bs .dropdown-menu > .disabled > a,
.tw-bs .dropdown-menu > .disabled > a:hover,
.tw-bs .dropdown-menu > .disabled > a:focus {
  color: #777777;
}
.tw-bs .dropdown-menu > .disabled > a:hover,
.tw-bs .dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  cursor: not-allowed;
}
.tw-bs .open > .dropdown-menu {
  display: block;
}
.tw-bs .open > a {
  outline: 0;
}
.tw-bs .dropdown-menu-right {
  left: auto;
  right: 0;
}
.tw-bs .dropdown-menu-left {
  left: 0;
  right: auto;
}
.tw-bs .dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #777777;
  white-space: nowrap;
}
.tw-bs .dropdown-backdrop {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 990;
}
.tw-bs .pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}
.tw-bs .dropup .caret,
.tw-bs .navbar-fixed-bottom .dropdown .caret {
  border-top: 0;
  border-bottom: 4px solid;
  content: "";
}
.tw-bs .dropup .dropdown-menu,
.tw-bs .navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 1px;
}
@media (min-width: 768px) {
  .tw-bs .navbar-right .dropdown-menu {
    left: auto;
    right: 0;
  }
  .tw-bs .navbar-right .dropdown-menu-left {
    left: 0;
    right: auto;
  }
}
.tw-bs .btn-group,
.tw-bs .btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.tw-bs .btn-group > .btn,
.tw-bs .btn-group-vertical > .btn {
  position: relative;
  float: left;
}
.tw-bs .btn-group > .btn:hover,
.tw-bs .btn-group-vertical > .btn:hover,
.tw-bs .btn-group > .btn:focus,
.tw-bs .btn-group-vertical > .btn:focus,
.tw-bs .btn-group > .btn:active,
.tw-bs .btn-group-vertical > .btn:active,
.tw-bs .btn-group > .btn.active,
.tw-bs .btn-group-vertical > .btn.active {
  z-index: 2;
}
.tw-bs .btn-group > .btn:focus,
.tw-bs .btn-group-vertical > .btn:focus {
  outline: 0;
}
.tw-bs .btn-group .btn + .btn,
.tw-bs .btn-group .btn + .btn-group,
.tw-bs .btn-group .btn-group + .btn,
.tw-bs .btn-group .btn-group + .btn-group {
  margin-left: -1px;
}
.tw-bs .btn-toolbar {
  margin-left: -5px;
}
.tw-bs .btn-toolbar .btn-group,
.tw-bs .btn-toolbar .input-group {
  float: left;
}
.tw-bs .btn-toolbar > .btn,
.tw-bs .btn-toolbar > .btn-group,
.tw-bs .btn-toolbar > .input-group {
  margin-left: 5px;
}
.tw-bs .btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}
.tw-bs .btn-group > .btn:first-child {
  margin-left: 0;
}
.tw-bs .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.tw-bs .btn-group > .btn:last-child:not(:first-child),
.tw-bs .btn-group > .dropdown-toggle:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.tw-bs .btn-group > .btn-group {
  float: left;
}
.tw-bs .btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.tw-bs .btn-group > .btn-group:first-child > .btn:last-child,
.tw-bs .btn-group > .btn-group:first-child > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.tw-bs .btn-group > .btn-group:last-child > .btn:first-child {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.tw-bs .btn-group .dropdown-toggle:active,
.tw-bs .btn-group.open .dropdown-toggle {
  outline: 0;
}
.tw-bs .btn-group > .btn + .dropdown-toggle {
  padding-left: 8px;
  padding-right: 8px;
}
.tw-bs .btn-group > .btn-lg + .dropdown-toggle {
  padding-left: 12px;
  padding-right: 12px;
}
.tw-bs .btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.tw-bs .btn-group.open .dropdown-toggle.btn-link {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.tw-bs .btn .caret {
  margin-left: 0;
}
.tw-bs .btn-lg .caret {
  border-width: 5px 5px 0;
  border-bottom-width: 0;
}
.tw-bs .dropup .btn-lg .caret {
  border-width: 0 5px 5px;
}
.tw-bs .btn-group-vertical > .btn,
.tw-bs .btn-group-vertical > .btn-group,
.tw-bs .btn-group-vertical > .btn-group > .btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%;
}
.tw-bs .btn-group-vertical > .btn-group > .btn {
  float: none;
}
.tw-bs .btn-group-vertical > .btn + .btn,
.tw-bs .btn-group-vertical > .btn + .btn-group,
.tw-bs .btn-group-vertical > .btn-group + .btn,
.tw-bs .btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0;
}
.tw-bs .btn-group-vertical > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.tw-bs .btn-group-vertical > .btn:first-child:not(:last-child) {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.tw-bs .btn-group-vertical > .btn:last-child:not(:first-child) {
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.tw-bs .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.tw-bs .btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.tw-bs .btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.tw-bs .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.tw-bs .btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.tw-bs .btn-group-justified > .btn,
.tw-bs .btn-group-justified > .btn-group {
  float: none;
  display: table-cell;
  width: 1%;
}
.tw-bs .btn-group-justified > .btn-group .btn {
  width: 100%;
}
.tw-bs .btn-group-justified > .btn-group .dropdown-menu {
  left: auto;
}
.tw-bs [data-toggle="buttons"] > .btn input[type="radio"],
.tw-bs [data-toggle="buttons"] > .btn-group > .btn input[type="radio"],
.tw-bs [data-toggle="buttons"] > .btn input[type="checkbox"],
.tw-bs [data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  filter: alpha(opacity=0);
}
.tw-bs .input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.tw-bs .input-group[class*="col-"] {
  float: none;
  padding-left: 0;
  padding-right: 0;
}
.tw-bs .input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.tw-bs .input-group-lg > .form-control,
.tw-bs .input-group-lg > .input-group-addon,
.tw-bs .input-group-lg > .input-group-btn > .btn {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
select.tw-bs .input-group-lg > .form-control,
select.tw-bs .input-group-lg > .input-group-addon,
select.tw-bs .input-group-lg > .input-group-btn > .btn {
  height: 46px;
  line-height: 46px;
}
textarea.tw-bs .input-group-lg > .form-control,
textarea.tw-bs .input-group-lg > .input-group-addon,
textarea.tw-bs .input-group-lg > .input-group-btn > .btn,
select[multiple].tw-bs .input-group-lg > .form-control,
select[multiple].tw-bs .input-group-lg > .input-group-addon,
select[multiple].tw-bs .input-group-lg > .input-group-btn > .btn {
  height: auto;
}
.tw-bs .input-group-sm > .form-control,
.tw-bs .input-group-sm > .input-group-addon,
.tw-bs .input-group-sm > .input-group-btn > .btn {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.tw-bs .input-group-sm > .form-control,
select.tw-bs .input-group-sm > .input-group-addon,
select.tw-bs .input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
}
textarea.tw-bs .input-group-sm > .form-control,
textarea.tw-bs .input-group-sm > .input-group-addon,
textarea.tw-bs .input-group-sm > .input-group-btn > .btn,
select[multiple].tw-bs .input-group-sm > .form-control,
select[multiple].tw-bs .input-group-sm > .input-group-addon,
select[multiple].tw-bs .input-group-sm > .input-group-btn > .btn {
  height: auto;
}
.tw-bs .input-group-addon,
.tw-bs .input-group-btn,
.tw-bs .input-group .form-control {
  display: table-cell;
}
.tw-bs .input-group-addon:not(:first-child):not(:last-child),
.tw-bs .input-group-btn:not(:first-child):not(:last-child),
.tw-bs .input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.tw-bs .input-group-addon,
.tw-bs .input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}
.tw-bs .input-group-addon {
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #555555;
  text-align: center;
  background-color: #eeeeee;
  border: 1px solid #cccccc;
  border-radius: 4px;
}
.tw-bs .input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}
.tw-bs .input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 18px;
  border-radius: 6px;
}
.tw-bs .input-group-addon input[type="radio"],
.tw-bs .input-group-addon input[type="checkbox"] {
  margin-top: 0;
}
.tw-bs .input-group .form-control:first-child,
.tw-bs .input-group-addon:first-child,
.tw-bs .input-group-btn:first-child > .btn,
.tw-bs .input-group-btn:first-child > .btn-group > .btn,
.tw-bs .input-group-btn:first-child > .dropdown-toggle,
.tw-bs .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.tw-bs .input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.tw-bs .input-group-addon:first-child {
  border-right: 0;
}
.tw-bs .input-group .form-control:last-child,
.tw-bs .input-group-addon:last-child,
.tw-bs .input-group-btn:last-child > .btn,
.tw-bs .input-group-btn:last-child > .btn-group > .btn,
.tw-bs .input-group-btn:last-child > .dropdown-toggle,
.tw-bs .input-group-btn:first-child > .btn:not(:first-child),
.tw-bs .input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.tw-bs .input-group-addon:last-child {
  border-left: 0;
}
.tw-bs .input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap;
}
.tw-bs .input-group-btn > .btn {
  position: relative;
}
.tw-bs .input-group-btn > .btn + .btn {
  margin-left: -1px;
}
.tw-bs .input-group-btn > .btn:hover,
.tw-bs .input-group-btn > .btn:focus,
.tw-bs .input-group-btn > .btn:active {
  z-index: 2;
}
.tw-bs .input-group-btn:first-child > .btn,
.tw-bs .input-group-btn:first-child > .btn-group {
  margin-right: -1px;
}
.tw-bs .input-group-btn:last-child > .btn,
.tw-bs .input-group-btn:last-child > .btn-group {
  margin-left: -1px;
}
.tw-bs .nav {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.tw-bs .nav > li {
  position: relative;
  display: block;
}
.tw-bs .nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}
.tw-bs .nav > li > a:hover,
.tw-bs .nav > li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.tw-bs .nav > li.disabled > a {
  color: #777777;
}
.tw-bs .nav > li.disabled > a:hover,
.tw-bs .nav > li.disabled > a:focus {
  color: #777777;
  text-decoration: none;
  background-color: transparent;
  cursor: not-allowed;
}
.tw-bs .nav .open > a,
.tw-bs .nav .open > a:hover,
.tw-bs .nav .open > a:focus {
  background-color: #eeeeee;
  border-color: #428bca;
}
.tw-bs .nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.tw-bs .nav > li > a > img {
  max-width: none;
}
.tw-bs .nav-tabs {
  border-bottom: 1px solid #dddddd;
}
.tw-bs .nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}
.tw-bs .nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}
.tw-bs .nav-tabs > li > a:hover {
  border-color: #eeeeee #eeeeee #dddddd;
}
.tw-bs .nav-tabs > li.active > a,
.tw-bs .nav-tabs > li.active > a:hover,
.tw-bs .nav-tabs > li.active > a:focus {
  color: #555555;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-bottom-color: transparent;
  cursor: default;
}
.tw-bs .nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.tw-bs .nav-tabs.nav-justified > li {
  float: none;
}
.tw-bs .nav-tabs.nav-justified > li > a {
  text-align: center;
  margin-bottom: 5px;
}
.tw-bs .nav-tabs.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .tw-bs .nav-tabs.nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .tw-bs .nav-tabs.nav-justified > li > a {
    margin-bottom: 0;
  }
}
.tw-bs .nav-tabs.nav-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}
.tw-bs .nav-tabs.nav-justified > .active > a,
.tw-bs .nav-tabs.nav-justified > .active > a:hover,
.tw-bs .nav-tabs.nav-justified > .active > a:focus {
  border: 1px solid #dddddd;
}
@media (min-width: 768px) {
  .tw-bs .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #dddddd;
    border-radius: 4px 4px 0 0;
  }
  .tw-bs .nav-tabs.nav-justified > .active > a,
  .tw-bs .nav-tabs.nav-justified > .active > a:hover,
  .tw-bs .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #ffffff;
  }
}
.tw-bs .nav-pills > li {
  float: left;
}
.tw-bs .nav-pills > li > a {
  border-radius: 4px;
}
.tw-bs .nav-pills > li + li {
  margin-left: 2px;
}
.tw-bs .nav-pills > li.active > a,
.tw-bs .nav-pills > li.active > a:hover,
.tw-bs .nav-pills > li.active > a:focus {
  color: #ffffff;
  background-color: #428bca;
}
.tw-bs .nav-stacked > li {
  float: none;
}
.tw-bs .nav-stacked > li + li {
  margin-top: 2px;
  margin-left: 0;
}
.tw-bs .nav-justified {
  width: 100%;
}
.tw-bs .nav-justified > li {
  float: none;
}
.tw-bs .nav-justified > li > a {
  text-align: center;
  margin-bottom: 5px;
}
.tw-bs .nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .tw-bs .nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .tw-bs .nav-justified > li > a {
    margin-bottom: 0;
  }
}
.tw-bs .nav-tabs-justified {
  border-bottom: 0;
}
.tw-bs .nav-tabs-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}
.tw-bs .nav-tabs-justified > .active > a,
.tw-bs .nav-tabs-justified > .active > a:hover,
.tw-bs .nav-tabs-justified > .active > a:focus {
  border: 1px solid #dddddd;
}
@media (min-width: 768px) {
  .tw-bs .nav-tabs-justified > li > a {
    border-bottom: 1px solid #dddddd;
    border-radius: 4px 4px 0 0;
  }
  .tw-bs .nav-tabs-justified > .active > a,
  .tw-bs .nav-tabs-justified > .active > a:hover,
  .tw-bs .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #ffffff;
  }
}
.tw-bs .tab-content > .tab-pane {
  display: none;
}
.tw-bs .tab-content > .active {
  display: block;
}
.tw-bs .nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.tw-bs .navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}
@media (min-width: 768px) {
  .tw-bs .navbar {
    border-radius: 4px;
  }
}
@media (min-width: 768px) {
  .tw-bs .navbar-header {
    float: left;
  }
}
.tw-bs .navbar-collapse {
  overflow-x: visible;
  padding-right: 15px;
  padding-left: 15px;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  -webkit-overflow-scrolling: touch;
}
.tw-bs .navbar-collapse.in {
  overflow-y: auto;
}
@media (min-width: 768px) {
  .tw-bs .navbar-collapse {
    width: auto;
    border-top: 0;
    box-shadow: none;
  }
  .tw-bs .navbar-collapse.collapse {
    display: block !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
  }
  .tw-bs .navbar-collapse.in {
    overflow-y: visible;
  }
  .navbar-fixed-top .tw-bs .navbar-collapse,
  .navbar-static-top .tw-bs .navbar-collapse,
  .navbar-fixed-bottom .tw-bs .navbar-collapse {
    padding-left: 0;
    padding-right: 0;
  }
}
.tw-bs .navbar-fixed-top .navbar-collapse,
.tw-bs .navbar-fixed-bottom .navbar-collapse {
  max-height: 340px;
}
@media (max-device-width: 480px) and (orientation: landscape) {
  .tw-bs .navbar-fixed-top .navbar-collapse,
  .tw-bs .navbar-fixed-bottom .navbar-collapse {
    max-height: 200px;
  }
}
.tw-bs .container > .navbar-header,
.tw-bs .container-fluid > .navbar-header,
.tw-bs .container > .navbar-collapse,
.tw-bs .container-fluid > .navbar-collapse {
  margin-right: -15px;
  margin-left: -15px;
}
@media (min-width: 768px) {
  .tw-bs .container > .navbar-header,
  .tw-bs .container-fluid > .navbar-header,
  .tw-bs .container > .navbar-collapse,
  .tw-bs .container-fluid > .navbar-collapse {
    margin-right: 0;
    margin-left: 0;
  }
}
.tw-bs .navbar-static-top {
  z-index: 1000;
  border-width: 0 0 1px;
}
@media (min-width: 768px) {
  .tw-bs .navbar-static-top {
    border-radius: 0;
  }
}
.tw-bs .navbar-fixed-top,
.tw-bs .navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
@media (min-width: 768px) {
  .tw-bs .navbar-fixed-top,
  .tw-bs .navbar-fixed-bottom {
    border-radius: 0;
  }
}
.tw-bs .navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}
.tw-bs .navbar-fixed-bottom {
  bottom: 0;
  margin-bottom: 0;
  border-width: 1px 0 0;
}
.tw-bs .navbar-brand {
  float: left;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
  height: 50px;
}
.tw-bs .navbar-brand:hover,
.tw-bs .navbar-brand:focus {
  text-decoration: none;
}
.tw-bs .navbar-brand > img {
  display: block;
}
@media (min-width: 768px) {
  .navbar > .container .tw-bs .navbar-brand,
  .navbar > .container-fluid .tw-bs .navbar-brand {
    margin-left: -15px;
  }
}
.tw-bs .navbar-toggle {
  position: relative;
  float: right;
  margin-right: 15px;
  padding: 9px 10px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.tw-bs .navbar-toggle:focus {
  outline: 0;
}
.tw-bs .navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}
.tw-bs .navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}
@media (min-width: 768px) {
  .tw-bs .navbar-toggle {
    display: none;
  }
}
.tw-bs .navbar-nav {
  margin: 7.5px -15px;
}
.tw-bs .navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}
@media (max-width: 767px) {
  .tw-bs .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }
  .tw-bs .navbar-nav .open .dropdown-menu > li > a,
  .tw-bs .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }
  .tw-bs .navbar-nav .open .dropdown-menu > li > a {
    line-height: 20px;
  }
  .tw-bs .navbar-nav .open .dropdown-menu > li > a:hover,
  .tw-bs .navbar-nav .open .dropdown-menu > li > a:focus {
    background-image: none;
  }
}
@media (min-width: 768px) {
  .tw-bs .navbar-nav {
    float: left;
    margin: 0;
  }
  .tw-bs .navbar-nav > li {
    float: left;
  }
  .tw-bs .navbar-nav > li > a {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
.tw-bs .navbar-form {
  margin-left: -15px;
  margin-right: -15px;
  padding: 10px 15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  margin-top: 8px;
  margin-bottom: 8px;
}
@media (min-width: 768px) {
  .tw-bs .navbar-form .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .tw-bs .navbar-form .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .tw-bs .navbar-form .form-control-static {
    display: inline-block;
  }
  .tw-bs .navbar-form .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .tw-bs .navbar-form .input-group .input-group-addon,
  .tw-bs .navbar-form .input-group .input-group-btn,
  .tw-bs .navbar-form .input-group .form-control {
    width: auto;
  }
  .tw-bs .navbar-form .input-group > .form-control {
    width: 100%;
  }
  .tw-bs .navbar-form .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .tw-bs .navbar-form .radio,
  .tw-bs .navbar-form .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .tw-bs .navbar-form .radio label,
  .tw-bs .navbar-form .checkbox label {
    padding-left: 0;
  }
  .tw-bs .navbar-form .radio input[type="radio"],
  .tw-bs .navbar-form .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .tw-bs .navbar-form .has-feedback .form-control-feedback {
    top: 0;
  }
}
@media (max-width: 767px) {
  .tw-bs .navbar-form .form-group {
    margin-bottom: 5px;
  }
}
@media (min-width: 768px) {
  .tw-bs .navbar-form {
    width: auto;
    border: 0;
    margin-left: 0;
    margin-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
.tw-bs .navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.tw-bs .navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.tw-bs .navbar-btn {
  margin-top: 8px;
  margin-bottom: 8px;
}
.tw-bs .navbar-btn.btn-sm {
  margin-top: 10px;
  margin-bottom: 10px;
}
.tw-bs .navbar-btn.btn-xs {
  margin-top: 14px;
  margin-bottom: 14px;
}
.tw-bs .navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .tw-bs .navbar-text {
    float: left;
    margin-left: 15px;
    margin-right: 15px;
  }
}
@media (min-width: 768px) {
  .tw-bs .navbar-left {
    float: left !important;
  }
  .tw-bs .navbar-right {
    float: right !important;
    margin-right: -15px;
  }
  .tw-bs .navbar-right ~ .navbar-right {
    margin-right: 0;
  }
}
.tw-bs .navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
.tw-bs .navbar-default .navbar-brand {
  color: #777777;
}
.tw-bs .navbar-default .navbar-brand:hover,
.tw-bs .navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
.tw-bs .navbar-default .navbar-text {
  color: #777777;
}
.tw-bs .navbar-default .navbar-nav > li > a {
  color: #777777;
}
.tw-bs .navbar-default .navbar-nav > li > a:hover,
.tw-bs .navbar-default .navbar-nav > li > a:focus {
  color: #333333;
  background-color: transparent;
}
.tw-bs .navbar-default .navbar-nav > .active > a,
.tw-bs .navbar-default .navbar-nav > .active > a:hover,
.tw-bs .navbar-default .navbar-nav > .active > a:focus {
  color: #555555;
  background-color: #e7e7e7;
}
.tw-bs .navbar-default .navbar-nav > .disabled > a,
.tw-bs .navbar-default .navbar-nav > .disabled > a:hover,
.tw-bs .navbar-default .navbar-nav > .disabled > a:focus {
  color: #cccccc;
  background-color: transparent;
}
.tw-bs .navbar-default .navbar-toggle {
  border-color: #dddddd;
}
.tw-bs .navbar-default .navbar-toggle:hover,
.tw-bs .navbar-default .navbar-toggle:focus {
  background-color: #dddddd;
}
.tw-bs .navbar-default .navbar-toggle .icon-bar {
  background-color: #888888;
}
.tw-bs .navbar-default .navbar-collapse,
.tw-bs .navbar-default .navbar-form {
  border-color: #e7e7e7;
}
.tw-bs .navbar-default .navbar-nav > .open > a,
.tw-bs .navbar-default .navbar-nav > .open > a:hover,
.tw-bs .navbar-default .navbar-nav > .open > a:focus {
  background-color: #e7e7e7;
  color: #555555;
}
@media (max-width: 767px) {
  .tw-bs .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777777;
  }
  .tw-bs .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .tw-bs .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333333;
    background-color: transparent;
  }
  .tw-bs .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .tw-bs .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .tw-bs .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555555;
    background-color: #e7e7e7;
  }
  .tw-bs .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .tw-bs .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .tw-bs .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #cccccc;
    background-color: transparent;
  }
}
.tw-bs .navbar-default .navbar-link {
  color: #777777;
}
.tw-bs .navbar-default .navbar-link:hover {
  color: #333333;
}
.tw-bs .navbar-default .btn-link {
  color: #777777;
}
.tw-bs .navbar-default .btn-link:hover,
.tw-bs .navbar-default .btn-link:focus {
  color: #333333;
}
.tw-bs .navbar-default .btn-link[disabled]:hover,
fieldset[disabled] .tw-bs .navbar-default .btn-link:hover,
.tw-bs .navbar-default .btn-link[disabled]:focus,
fieldset[disabled] .tw-bs .navbar-default .btn-link:focus {
  color: #cccccc;
}
.tw-bs .navbar-inverse {
  background-color: #222222;
  border-color: #080808;
}
.tw-bs .navbar-inverse .navbar-brand {
  color: #777777;
}
.tw-bs .navbar-inverse .navbar-brand:hover,
.tw-bs .navbar-inverse .navbar-brand:focus {
  color: #ffffff;
  background-color: transparent;
}
.tw-bs .navbar-inverse .navbar-text {
  color: #969696;
}
.tw-bs .navbar-inverse .navbar-nav > li > a {
  color: #777777;
}
.tw-bs .navbar-inverse .navbar-nav > li > a:hover,
.tw-bs .navbar-inverse .navbar-nav > li > a:focus {
  color: #ffffff;
  background-color: transparent;
}
.tw-bs .navbar-inverse .navbar-nav > .active > a,
.tw-bs .navbar-inverse .navbar-nav > .active > a:hover,
.tw-bs .navbar-inverse .navbar-nav > .active > a:focus {
  color: #ffffff;
  background-color: #080808;
}
.tw-bs .navbar-inverse .navbar-nav > .disabled > a,
.tw-bs .navbar-inverse .navbar-nav > .disabled > a:hover,
.tw-bs .navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444444;
  background-color: transparent;
}
.tw-bs .navbar-inverse .navbar-toggle {
  border-color: #333333;
}
.tw-bs .navbar-inverse .navbar-toggle:hover,
.tw-bs .navbar-inverse .navbar-toggle:focus {
  background-color: #333333;
}
.tw-bs .navbar-inverse .navbar-toggle .icon-bar {
  background-color: #ffffff;
}
.tw-bs .navbar-inverse .navbar-collapse,
.tw-bs .navbar-inverse .navbar-form {
  border-color: #101010;
}
.tw-bs .navbar-inverse .navbar-nav > .open > a,
.tw-bs .navbar-inverse .navbar-nav > .open > a:hover,
.tw-bs .navbar-inverse .navbar-nav > .open > a:focus {
  background-color: #080808;
  color: #ffffff;
}
@media (max-width: 767px) {
  .tw-bs .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #080808;
  }
  .tw-bs .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #080808;
  }
  .tw-bs .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #777777;
  }
  .tw-bs .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .tw-bs .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #ffffff;
    background-color: transparent;
  }
  .tw-bs .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .tw-bs .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .tw-bs .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #ffffff;
    background-color: #080808;
  }
  .tw-bs .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .tw-bs .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .tw-bs .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444444;
    background-color: transparent;
  }
}
.tw-bs .navbar-inverse .navbar-link {
  color: #777777;
}
.tw-bs .navbar-inverse .navbar-link:hover {
  color: #ffffff;
}
.tw-bs .navbar-inverse .btn-link {
  color: #777777;
}
.tw-bs .navbar-inverse .btn-link:hover,
.tw-bs .navbar-inverse .btn-link:focus {
  color: #ffffff;
}
.tw-bs .navbar-inverse .btn-link[disabled]:hover,
fieldset[disabled] .tw-bs .navbar-inverse .btn-link:hover,
.tw-bs .navbar-inverse .btn-link[disabled]:focus,
fieldset[disabled] .tw-bs .navbar-inverse .btn-link:focus {
  color: #444444;
}
.tw-bs .breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.tw-bs .breadcrumb > li {
  display: inline-block;
}
.tw-bs .breadcrumb > li + li:before {
  content: "/\\00a0";
  padding: 0 5px;
  color: #cccccc;
}
.tw-bs .breadcrumb > .active {
  color: #777777;
}
.tw-bs .pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}
.tw-bs .pagination > li {
  display: inline;
}
.tw-bs .pagination > li > a,
.tw-bs .pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  line-height: 1.42857143;
  text-decoration: none;
  color: #428bca;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  margin-left: -1px;
}
.tw-bs .pagination > li:first-child > a,
.tw-bs .pagination > li:first-child > span {
  margin-left: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}
.tw-bs .pagination > li:last-child > a,
.tw-bs .pagination > li:last-child > span {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}
.tw-bs .pagination > li > a:hover,
.tw-bs .pagination > li > span:hover,
.tw-bs .pagination > li > a:focus,
.tw-bs .pagination > li > span:focus {
  color: #2a6496;
  background-color: #eeeeee;
  border-color: #dddddd;
}
.tw-bs .pagination > .active > a,
.tw-bs .pagination > .active > span,
.tw-bs .pagination > .active > a:hover,
.tw-bs .pagination > .active > span:hover,
.tw-bs .pagination > .active > a:focus,
.tw-bs .pagination > .active > span:focus {
  z-index: 2;
  color: #ffffff;
  background-color: #428bca;
  border-color: #428bca;
  cursor: default;
}
.tw-bs .pagination > .disabled > span,
.tw-bs .pagination > .disabled > span:hover,
.tw-bs .pagination > .disabled > span:focus,
.tw-bs .pagination > .disabled > a,
.tw-bs .pagination > .disabled > a:hover,
.tw-bs .pagination > .disabled > a:focus {
  color: #777777;
  background-color: #ffffff;
  border-color: #dddddd;
  cursor: not-allowed;
}
.tw-bs .pagination-lg > li > a,
.tw-bs .pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 18px;
}
.tw-bs .pagination-lg > li:first-child > a,
.tw-bs .pagination-lg > li:first-child > span {
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
}
.tw-bs .pagination-lg > li:last-child > a,
.tw-bs .pagination-lg > li:last-child > span {
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
}
.tw-bs .pagination-sm > li > a,
.tw-bs .pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
}
.tw-bs .pagination-sm > li:first-child > a,
.tw-bs .pagination-sm > li:first-child > span {
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
}
.tw-bs .pagination-sm > li:last-child > a,
.tw-bs .pagination-sm > li:last-child > span {
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
}
.tw-bs .pager {
  padding-left: 0;
  margin: 20px 0;
  list-style: none;
  text-align: center;
}
.tw-bs .pager li {
  display: inline;
}
.tw-bs .pager li > a,
.tw-bs .pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 15px;
}
.tw-bs .pager li > a:hover,
.tw-bs .pager li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.tw-bs .pager .next > a,
.tw-bs .pager .next > span {
  float: right;
}
.tw-bs .pager .previous > a,
.tw-bs .pager .previous > span {
  float: left;
}
.tw-bs .pager .disabled > a,
.tw-bs .pager .disabled > a:hover,
.tw-bs .pager .disabled > a:focus,
.tw-bs .pager .disabled > span {
  color: #777777;
  background-color: #ffffff;
  cursor: not-allowed;
}
.tw-bs .label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}
a.tw-bs .label:hover,
a.tw-bs .label:focus {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
.tw-bs .label:empty {
  display: none;
}
.btn .tw-bs .label {
  position: relative;
  top: -1px;
}
.tw-bs .label-default {
  background-color: #777777;
}
.tw-bs .label-default[href]:hover,
.tw-bs .label-default[href]:focus {
  background-color: #5e5e5e;
}
.tw-bs .label-primary {
  background-color: #428bca;
}
.tw-bs .label-primary[href]:hover,
.tw-bs .label-primary[href]:focus {
  background-color: #3071a9;
}
.tw-bs .label-success {
  background-color: #5cb85c;
}
.tw-bs .label-success[href]:hover,
.tw-bs .label-success[href]:focus {
  background-color: #449d44;
}
.tw-bs .label-info {
  background-color: #5bc0de;
}
.tw-bs .label-info[href]:hover,
.tw-bs .label-info[href]:focus {
  background-color: #31b0d5;
}
.tw-bs .label-warning {
  background-color: #f0ad4e;
}
.tw-bs .label-warning[href]:hover,
.tw-bs .label-warning[href]:focus {
  background-color: #ec971f;
}
.tw-bs .label-danger {
  background-color: #d9534f;
}
.tw-bs .label-danger[href]:hover,
.tw-bs .label-danger[href]:focus {
  background-color: #c9302c;
}
.tw-bs .badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  line-height: 1;
  vertical-align: baseline;
  white-space: nowrap;
  text-align: center;
  background-color: #777777;
  border-radius: 10px;
}
.tw-bs .badge:empty {
  display: none;
}
.btn .tw-bs .badge {
  position: relative;
  top: -1px;
}
.btn-xs .tw-bs .badge {
  top: 0;
  padding: 1px 5px;
}
a.tw-bs .badge:hover,
a.tw-bs .badge:focus {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
a.list-group-item.active > .tw-bs .badge,
.nav-pills > .active > a > .tw-bs .badge {
  color: #428bca;
  background-color: #ffffff;
}
.nav-pills > li > a > .tw-bs .badge {
  margin-left: 3px;
}
.tw-bs .jumbotron {
  padding: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eeeeee;
}
.tw-bs .jumbotron h1,
.tw-bs .jumbotron .h1 {
  color: inherit;
}
.tw-bs .jumbotron p {
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
}
.tw-bs .jumbotron > hr {
  border-top-color: #d5d5d5;
}
.container .tw-bs .jumbotron {
  border-radius: 6px;
}
.tw-bs .jumbotron .container {
  max-width: 100%;
}
@media screen and (min-width: 768px) {
  .tw-bs .jumbotron {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .container .tw-bs .jumbotron {
    padding-left: 60px;
    padding-right: 60px;
  }
  .tw-bs .jumbotron h1,
  .tw-bs .jumbotron .h1 {
    font-size: 63px;
  }
}
.tw-bs .thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.tw-bs .thumbnail > img,
.tw-bs .thumbnail a > img {
  margin-left: auto;
  margin-right: auto;
}
a.tw-bs .thumbnail:hover,
a.tw-bs .thumbnail:focus,
a.tw-bs .thumbnail.active {
  border-color: #428bca;
}
.tw-bs .thumbnail .caption {
  padding: 9px;
  color: #333333;
}
.tw-bs .alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.tw-bs .alert h4 {
  margin-top: 0;
  color: inherit;
}
.tw-bs .alert .alert-link {
  font-weight: bold;
}
.tw-bs .alert > p,
.tw-bs .alert > ul {
  margin-bottom: 0;
}
.tw-bs .alert > p + p {
  margin-top: 5px;
}
.tw-bs .alert-dismissable,
.tw-bs .alert-dismissible {
  padding-right: 35px;
}
.tw-bs .alert-dismissable .close,
.tw-bs .alert-dismissible .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.tw-bs .alert-success {
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #3c763d;
}
.tw-bs .alert-success hr {
  border-top-color: #c9e2b3;
}
.tw-bs .alert-success .alert-link {
  color: #2b542c;
}
.tw-bs .alert-info {
  background-color: #d9edf7;
  border-color: #bce8f1;
  color: #31708f;
}
.tw-bs .alert-info hr {
  border-top-color: #a6e1ec;
}
.tw-bs .alert-info .alert-link {
  color: #245269;
}
.tw-bs .alert-warning {
  background-color: #fcf8e3;
  border-color: #faebcc;
  color: #8a6d3b;
}
.tw-bs .alert-warning hr {
  border-top-color: #f7e1b5;
}
.tw-bs .alert-warning .alert-link {
  color: #66512c;
}
.tw-bs .alert-danger {
  background-color: #f2dede;
  border-color: #ebccd1;
  color: #a94442;
}
.tw-bs .alert-danger hr {
  border-top-color: #e4b9c0;
}
.tw-bs .alert-danger .alert-link {
  color: #843534;
}
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
.tw-bs .progress {
  overflow: hidden;
  height: 20px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
.tw-bs .progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  text-align: center;
  background-color: #428bca;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
}
.tw-bs .progress-striped .progress-bar,
.tw-bs .progress-bar-striped {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 40px 40px;
}
.tw-bs .progress.active .progress-bar,
.tw-bs .progress-bar.active {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite;
}
.tw-bs .progress-bar[aria-valuenow="0"] {
  color: #777777;
  min-width: 30px;
  background-color: transparent;
  background-image: none;
  box-shadow: none;
}
.tw-bs .progress-bar-success {
  background-color: #5cb85c;
}
.progress-striped .tw-bs .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.tw-bs .progress-bar-info {
  background-color: #5bc0de;
}
.progress-striped .tw-bs .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.tw-bs .progress-bar-warning {
  background-color: #f0ad4e;
}
.progress-striped .tw-bs .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.tw-bs .progress-bar-danger {
  background-color: #d9534f;
}
.progress-striped .tw-bs .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.tw-bs .media,
.tw-bs .media-body {
  overflow: hidden;
  zoom: 1;
}
.tw-bs .media,
.tw-bs .media .media {
  margin-top: 15px;
}
.tw-bs .media:first-child {
  margin-top: 0;
}
.tw-bs .media-object {
  display: block;
}
.tw-bs .media-heading {
  margin: 0 0 5px;
}
.tw-bs .media > .pull-left {
  margin-right: 10px;
}
.tw-bs .media > .pull-right {
  margin-left: 10px;
}
.tw-bs .media-list {
  padding-left: 0;
  list-style: none;
}
.tw-bs .list-group {
  margin-bottom: 20px;
  padding-left: 0;
}
.tw-bs .list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
}
.tw-bs .list-group-item:first-child {
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}
.tw-bs .list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.tw-bs .list-group-item > .badge {
  float: right;
}
.tw-bs .list-group-item > .badge + .badge {
  margin-right: 5px;
}
.tw-bs a.list-group-item {
  color: #555555;
}
.tw-bs a.list-group-item .list-group-item-heading {
  color: #333333;
}
.tw-bs a.list-group-item:hover,
.tw-bs a.list-group-item:focus {
  text-decoration: none;
  color: #555555;
  background-color: #f5f5f5;
}
.tw-bs .list-group-item.disabled,
.tw-bs .list-group-item.disabled:hover,
.tw-bs .list-group-item.disabled:focus {
  background-color: #eeeeee;
  color: #777777;
  cursor: not-allowed;
}
.tw-bs .list-group-item.disabled .list-group-item-heading,
.tw-bs .list-group-item.disabled:hover .list-group-item-heading,
.tw-bs .list-group-item.disabled:focus .list-group-item-heading {
  color: inherit;
}
.tw-bs .list-group-item.disabled .list-group-item-text,
.tw-bs .list-group-item.disabled:hover .list-group-item-text,
.tw-bs .list-group-item.disabled:focus .list-group-item-text {
  color: #777777;
}
.tw-bs .list-group-item.active,
.tw-bs .list-group-item.active:hover,
.tw-bs .list-group-item.active:focus {
  z-index: 2;
  color: #ffffff;
  background-color: #428bca;
  border-color: #428bca;
}
.tw-bs .list-group-item.active .list-group-item-heading,
.tw-bs .list-group-item.active:hover .list-group-item-heading,
.tw-bs .list-group-item.active:focus .list-group-item-heading,
.tw-bs .list-group-item.active .list-group-item-heading > small,
.tw-bs .list-group-item.active:hover .list-group-item-heading > small,
.tw-bs .list-group-item.active:focus .list-group-item-heading > small,
.tw-bs .list-group-item.active .list-group-item-heading > .small,
.tw-bs .list-group-item.active:hover .list-group-item-heading > .small,
.tw-bs .list-group-item.active:focus .list-group-item-heading > .small {
  color: inherit;
}
.tw-bs .list-group-item.active .list-group-item-text,
.tw-bs .list-group-item.active:hover .list-group-item-text,
.tw-bs .list-group-item.active:focus .list-group-item-text {
  color: #e1edf7;
}
.tw-bs .list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}
a.tw-bs .list-group-item-success {
  color: #3c763d;
}
a.tw-bs .list-group-item-success .list-group-item-heading {
  color: inherit;
}
a.tw-bs .list-group-item-success:hover,
a.tw-bs .list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}
a.tw-bs .list-group-item-success.active,
a.tw-bs .list-group-item-success.active:hover,
a.tw-bs .list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}
.tw-bs .list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}
a.tw-bs .list-group-item-info {
  color: #31708f;
}
a.tw-bs .list-group-item-info .list-group-item-heading {
  color: inherit;
}
a.tw-bs .list-group-item-info:hover,
a.tw-bs .list-group-item-info:focus {
  color: #31708f;
  background-color: #c4e3f3;
}
a.tw-bs .list-group-item-info.active,
a.tw-bs .list-group-item-info.active:hover,
a.tw-bs .list-group-item-info.active:focus {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}
.tw-bs .list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}
a.tw-bs .list-group-item-warning {
  color: #8a6d3b;
}
a.tw-bs .list-group-item-warning .list-group-item-heading {
  color: inherit;
}
a.tw-bs .list-group-item-warning:hover,
a.tw-bs .list-group-item-warning:focus {
  color: #8a6d3b;
  background-color: #faf2cc;
}
a.tw-bs .list-group-item-warning.active,
a.tw-bs .list-group-item-warning.active:hover,
a.tw-bs .list-group-item-warning.active:focus {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}
.tw-bs .list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}
a.tw-bs .list-group-item-danger {
  color: #a94442;
}
a.tw-bs .list-group-item-danger .list-group-item-heading {
  color: inherit;
}
a.tw-bs .list-group-item-danger:hover,
a.tw-bs .list-group-item-danger:focus {
  color: #a94442;
  background-color: #ebcccc;
}
a.tw-bs .list-group-item-danger.active,
a.tw-bs .list-group-item-danger.active:hover,
a.tw-bs .list-group-item-danger.active:focus {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
}
.tw-bs .list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.tw-bs .list-group-item-text {
  margin-bottom: 0;
  line-height: 1.3;
}
.tw-bs .panel {
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.tw-bs .panel-body {
  padding: 15px;
}
.tw-bs .panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.tw-bs .panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.tw-bs .panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}
.tw-bs .panel-title > a {
  color: inherit;
}
.tw-bs .panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #dddddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.tw-bs .panel > .list-group {
  margin-bottom: 0;
}
.tw-bs .panel > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.tw-bs .panel > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.tw-bs .panel > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.tw-bs .panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.tw-bs .list-group + .panel-footer {
  border-top-width: 0;
}
.tw-bs .panel > .table,
.tw-bs .panel > .table-responsive > .table,
.tw-bs .panel > .panel-collapse > .table {
  margin-bottom: 0;
}
.tw-bs .panel > .table caption,
.tw-bs .panel > .table-responsive > .table caption,
.tw-bs .panel > .panel-collapse > .table caption {
  padding-left: 15px;
  padding-right: 15px;
}
.tw-bs .panel > .table:first-child,
.tw-bs .panel > .table-responsive:first-child > .table:first-child {
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.tw-bs .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,
.tw-bs .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,
.tw-bs .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.tw-bs .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.tw-bs .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,
.tw-bs .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,
.tw-bs .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,
.tw-bs .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {
  border-top-left-radius: 3px;
}
.tw-bs .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,
.tw-bs .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,
.tw-bs .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.tw-bs .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.tw-bs .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,
.tw-bs .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,
.tw-bs .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,
.tw-bs .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {
  border-top-right-radius: 3px;
}
.tw-bs .panel > .table:last-child,
.tw-bs .panel > .table-responsive:last-child > .table:last-child {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.tw-bs .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.tw-bs .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.tw-bs .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.tw-bs .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.tw-bs .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.tw-bs .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.tw-bs .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,
.tw-bs .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
  border-bottom-left-radius: 3px;
}
.tw-bs .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.tw-bs .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.tw-bs .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.tw-bs .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.tw-bs .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.tw-bs .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.tw-bs .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,
.tw-bs .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
  border-bottom-right-radius: 3px;
}
.tw-bs .panel > .panel-body + .table,
.tw-bs .panel > .panel-body + .table-responsive,
.tw-bs .panel > .table + .panel-body,
.tw-bs .panel > .table-responsive + .panel-body {
  border-top: 1px solid #dddddd;
}
.tw-bs .panel > .table > tbody:first-child > tr:first-child th,
.tw-bs .panel > .table > tbody:first-child > tr:first-child td {
  border-top: 0;
}
.tw-bs .panel > .table-bordered,
.tw-bs .panel > .table-responsive > .table-bordered {
  border: 0;
}
.tw-bs .panel > .table-bordered > thead > tr > th:first-child,
.tw-bs .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,
.tw-bs .panel > .table-bordered > tbody > tr > th:first-child,
.tw-bs .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,
.tw-bs .panel > .table-bordered > tfoot > tr > th:first-child,
.tw-bs .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,
.tw-bs .panel > .table-bordered > thead > tr > td:first-child,
.tw-bs .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,
.tw-bs .panel > .table-bordered > tbody > tr > td:first-child,
.tw-bs .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,
.tw-bs .panel > .table-bordered > tfoot > tr > td:first-child,
.tw-bs .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {
  border-left: 0;
}
.tw-bs .panel > .table-bordered > thead > tr > th:last-child,
.tw-bs .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,
.tw-bs .panel > .table-bordered > tbody > tr > th:last-child,
.tw-bs .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,
.tw-bs .panel > .table-bordered > tfoot > tr > th:last-child,
.tw-bs .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,
.tw-bs .panel > .table-bordered > thead > tr > td:last-child,
.tw-bs .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,
.tw-bs .panel > .table-bordered > tbody > tr > td:last-child,
.tw-bs .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,
.tw-bs .panel > .table-bordered > tfoot > tr > td:last-child,
.tw-bs .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {
  border-right: 0;
}
.tw-bs .panel > .table-bordered > thead > tr:first-child > td,
.tw-bs .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,
.tw-bs .panel > .table-bordered > tbody > tr:first-child > td,
.tw-bs .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,
.tw-bs .panel > .table-bordered > thead > tr:first-child > th,
.tw-bs .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,
.tw-bs .panel > .table-bordered > tbody > tr:first-child > th,
.tw-bs .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {
  border-bottom: 0;
}
.tw-bs .panel > .table-bordered > tbody > tr:last-child > td,
.tw-bs .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,
.tw-bs .panel > .table-bordered > tfoot > tr:last-child > td,
.tw-bs .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,
.tw-bs .panel > .table-bordered > tbody > tr:last-child > th,
.tw-bs .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,
.tw-bs .panel > .table-bordered > tfoot > tr:last-child > th,
.tw-bs .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {
  border-bottom: 0;
}
.tw-bs .panel > .table-responsive {
  border: 0;
  margin-bottom: 0;
}
.tw-bs .panel-group {
  margin-bottom: 20px;
}
.tw-bs .panel-group .panel {
  margin-bottom: 0;
  border-radius: 4px;
}
.tw-bs .panel-group .panel + .panel {
  margin-top: 5px;
}
.tw-bs .panel-group .panel-heading {
  border-bottom: 0;
}
.tw-bs .panel-group .panel-heading + .panel-collapse > .panel-body {
  border-top: 1px solid #dddddd;
}
.tw-bs .panel-group .panel-footer {
  border-top: 0;
}
.tw-bs .panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #dddddd;
}
.tw-bs .panel-default {
  border-color: #dddddd;
}
.tw-bs .panel-default > .panel-heading {
  color: #333333;
  background-color: #f5f5f5;
  border-color: #dddddd;
}
.tw-bs .panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #dddddd;
}
.tw-bs .panel-default > .panel-heading .badge {
  color: #f5f5f5;
  background-color: #333333;
}
.tw-bs .panel-default > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #dddddd;
}
.tw-bs .panel-primary {
  border-color: #428bca;
}
.tw-bs .panel-primary > .panel-heading {
  color: #ffffff;
  background-color: #428bca;
  border-color: #428bca;
}
.tw-bs .panel-primary > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #428bca;
}
.tw-bs .panel-primary > .panel-heading .badge {
  color: #428bca;
  background-color: #ffffff;
}
.tw-bs .panel-primary > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #428bca;
}
.tw-bs .panel-success {
  border-color: #d6e9c6;
}
.tw-bs .panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.tw-bs .panel-success > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #d6e9c6;
}
.tw-bs .panel-success > .panel-heading .badge {
  color: #dff0d8;
  background-color: #3c763d;
}
.tw-bs .panel-success > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #d6e9c6;
}
.tw-bs .panel-info {
  border-color: #bce8f1;
}
.tw-bs .panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.tw-bs .panel-info > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #bce8f1;
}
.tw-bs .panel-info > .panel-heading .badge {
  color: #d9edf7;
  background-color: #31708f;
}
.tw-bs .panel-info > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #bce8f1;
}
.tw-bs .panel-warning {
  border-color: #faebcc;
}
.tw-bs .panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.tw-bs .panel-warning > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #faebcc;
}
.tw-bs .panel-warning > .panel-heading .badge {
  color: #fcf8e3;
  background-color: #8a6d3b;
}
.tw-bs .panel-warning > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #faebcc;
}
.tw-bs .panel-danger {
  border-color: #ebccd1;
}
.tw-bs .panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.tw-bs .panel-danger > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ebccd1;
}
.tw-bs .panel-danger > .panel-heading .badge {
  color: #f2dede;
  background-color: #a94442;
}
.tw-bs .panel-danger > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ebccd1;
}
.tw-bs .embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}
.tw-bs .embed-responsive .embed-responsive-item,
.tw-bs .embed-responsive iframe,
.tw-bs .embed-responsive embed,
.tw-bs .embed-responsive object {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border: 0;
}
.tw-bs .embed-responsive.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}
.tw-bs .embed-responsive.embed-responsive-4by3 {
  padding-bottom: 75%;
}
.tw-bs .well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
.tw-bs .well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, 0.15);
}
.tw-bs .well-lg {
  padding: 24px;
  border-radius: 6px;
}
.tw-bs .well-sm {
  padding: 9px;
  border-radius: 3px;
}
.tw-bs .close {
  float: right;
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000000;
  text-shadow: 0 1px 0 #ffffff;
  opacity: 0.2;
  filter: alpha(opacity=20);
}
.tw-bs .close:hover,
.tw-bs .close:focus {
  color: #000000;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.5;
  filter: alpha(opacity=50);
}
button.tw-bs .close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}
.tw-bs .modal-open {
  overflow: hidden;
}
.tw-bs .modal {
  display: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.tw-bs .modal.fade .modal-dialog {
  -webkit-transform: translate3d(0, -25%, 0);
  transform: translate3d(0, -25%, 0);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -moz-transition: -moz-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
}
.tw-bs .modal.in .modal-dialog {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.tw-bs .modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.tw-bs .modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
.tw-bs .modal-content {
  position: relative;
  background-color: #ffffff;
  border: 1px solid #999999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  outline: 0;
}
.tw-bs .modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000000;
}
.tw-bs .modal-backdrop.fade {
  opacity: 0;
  filter: alpha(opacity=0);
}
.tw-bs .modal-backdrop.in {
  opacity: 0.5;
  filter: alpha(opacity=50);
}
.tw-bs .modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  min-height: 16.42857143px;
}
.tw-bs .modal-header .close {
  margin-top: -2px;
}
.tw-bs .modal-title {
  margin: 0;
  line-height: 1.42857143;
}
.tw-bs .modal-body {
  position: relative;
  padding: 15px;
}
.tw-bs .modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.tw-bs .modal-footer .btn + .btn {
  margin-left: 5px;
  margin-bottom: 0;
}
.tw-bs .modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
.tw-bs .modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
.tw-bs .modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}
@media (min-width: 768px) {
  .tw-bs .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .tw-bs .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  .tw-bs .modal-sm {
    width: 300px;
  }
}
@media (min-width: 992px) {
  .tw-bs .modal-lg {
    width: 900px;
  }
}
.tw-bs .tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  visibility: visible;
  font-size: 12px;
  line-height: 1.4;
  opacity: 0;
  filter: alpha(opacity=0);
}
.tw-bs .tooltip.in {
  opacity: 0.9;
  filter: alpha(opacity=90);
}
.tw-bs .tooltip.top {
  margin-top: -3px;
  padding: 5px 0;
}
.tw-bs .tooltip.right {
  margin-left: 3px;
  padding: 0 5px;
}
.tw-bs .tooltip.bottom {
  margin-top: 3px;
  padding: 5px 0;
}
.tw-bs .tooltip.left {
  margin-left: -3px;
  padding: 0 5px;
}
.tw-bs .tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  background-color: #000000;
  border-radius: 4px;
}
.tw-bs .tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.tw-bs .tooltip.top .tooltip-arrow {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000000;
}
.tw-bs .tooltip.top-left .tooltip-arrow {
  bottom: 0;
  left: 5px;
  border-width: 5px 5px 0;
  border-top-color: #000000;
}
.tw-bs .tooltip.top-right .tooltip-arrow {
  bottom: 0;
  right: 5px;
  border-width: 5px 5px 0;
  border-top-color: #000000;
}
.tw-bs .tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000000;
}
.tw-bs .tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000000;
}
.tw-bs .tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000000;
}
.tw-bs .tooltip.bottom-left .tooltip-arrow {
  top: 0;
  left: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000000;
}
.tw-bs .tooltip.bottom-right .tooltip-arrow {
  top: 0;
  right: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000000;
}
.tw-bs .popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  max-width: 276px;
  padding: 1px;
  text-align: left;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #cccccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  white-space: normal;
}
.tw-bs .popover.top {
  margin-top: -10px;
}
.tw-bs .popover.right {
  margin-left: 10px;
}
.tw-bs .popover.bottom {
  margin-top: 10px;
}
.tw-bs .popover.left {
  margin-left: -10px;
}
.tw-bs .popover-title {
  margin: 0;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 5px 5px 0 0;
}
.tw-bs .popover-content {
  padding: 9px 14px;
}
.tw-bs .popover > .arrow,
.tw-bs .popover > .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.tw-bs .popover > .arrow {
  border-width: 11px;
}
.tw-bs .popover > .arrow:after {
  border-width: 10px;
  content: "";
}
.tw-bs .popover.top > .arrow {
  left: 50%;
  margin-left: -11px;
  border-bottom-width: 0;
  border-top-color: #999999;
  border-top-color: rgba(0, 0, 0, 0.25);
  bottom: -11px;
}
.tw-bs .popover.top > .arrow:after {
  content: " ";
  bottom: 1px;
  margin-left: -10px;
  border-bottom-width: 0;
  border-top-color: #ffffff;
}
.tw-bs .popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-left-width: 0;
  border-right-color: #999999;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.tw-bs .popover.right > .arrow:after {
  content: " ";
  left: 1px;
  bottom: -10px;
  border-left-width: 0;
  border-right-color: #ffffff;
}
.tw-bs .popover.bottom > .arrow {
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999999;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  top: -11px;
}
.tw-bs .popover.bottom > .arrow:after {
  content: " ";
  top: 1px;
  margin-left: -10px;
  border-top-width: 0;
  border-bottom-color: #ffffff;
}
.tw-bs .popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999999;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.tw-bs .popover.left > .arrow:after {
  content: " ";
  right: 1px;
  border-right-width: 0;
  border-left-color: #ffffff;
  bottom: -10px;
}
.tw-bs .carousel {
  position: relative;
}
.tw-bs .carousel-inner {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.tw-bs .carousel-inner > .item {
  display: none;
  position: relative;
  -webkit-transition: 0.6s ease-in-out left;
  -o-transition: 0.6s ease-in-out left;
  transition: 0.6s ease-in-out left;
}
.tw-bs .carousel-inner > .item > img,
.tw-bs .carousel-inner > .item > a > img {
  line-height: 1;
}
@media all and (transform-3d), (-webkit-transform-3d) {
  .tw-bs .carousel-inner > .item {
    transition: transform 0.6s ease-in-out;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .tw-bs .carousel-inner > .item.next,
  .tw-bs .carousel-inner > .item.active.right {
    transform: translate3d(100%, 0, 0);
    left: 0;
  }
  .tw-bs .carousel-inner > .item.prev,
  .tw-bs .carousel-inner > .item.active.left {
    transform: translate3d(-100%, 0, 0);
    left: 0;
  }
  .tw-bs .carousel-inner > .item.next.left,
  .tw-bs .carousel-inner > .item.prev.right,
  .tw-bs .carousel-inner > .item.active {
    transform: translate3d(0, 0, 0);
    left: 0;
  }
}
.tw-bs .carousel-inner > .active,
.tw-bs .carousel-inner > .next,
.tw-bs .carousel-inner > .prev {
  display: block;
}
.tw-bs .carousel-inner > .active {
  left: 0;
}
.tw-bs .carousel-inner > .next,
.tw-bs .carousel-inner > .prev {
  position: absolute;
  top: 0;
  width: 100%;
}
.tw-bs .carousel-inner > .next {
  left: 100%;
}
.tw-bs .carousel-inner > .prev {
  left: -100%;
}
.tw-bs .carousel-inner > .next.left,
.tw-bs .carousel-inner > .prev.right {
  left: 0;
}
.tw-bs .carousel-inner > .active.left {
  left: -100%;
}
.tw-bs .carousel-inner > .active.right {
  left: 100%;
}
.tw-bs .carousel-control {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 15%;
  opacity: 0.5;
  filter: alpha(opacity=50);
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}
.tw-bs .carousel-control.left {
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
}
.tw-bs .carousel-control.right {
  left: auto;
  right: 0;
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
}
.tw-bs .carousel-control:hover,
.tw-bs .carousel-control:focus {
  outline: 0;
  color: #ffffff;
  text-decoration: none;
  opacity: 0.9;
  filter: alpha(opacity=90);
}
.tw-bs .carousel-control .icon-prev,
.tw-bs .carousel-control .icon-next,
.tw-bs .carousel-control .glyphicon-chevron-left,
.tw-bs .carousel-control .glyphicon-chevron-right {
  position: absolute;
  top: 50%;
  z-index: 5;
  display: inline-block;
}
.tw-bs .carousel-control .icon-prev,
.tw-bs .carousel-control .glyphicon-chevron-left {
  left: 50%;
  margin-left: -10px;
}
.tw-bs .carousel-control .icon-next,
.tw-bs .carousel-control .glyphicon-chevron-right {
  right: 50%;
  margin-right: -10px;
}
.tw-bs .carousel-control .icon-prev,
.tw-bs .carousel-control .icon-next {
  width: 20px;
  height: 20px;
  margin-top: -10px;
  font-family: serif;
}
.tw-bs .carousel-control .icon-prev:before {
  content: '\\2039';
}
.tw-bs .carousel-control .icon-next:before {
  content: '\\203a';
}
.tw-bs .carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 15;
  width: 60%;
  margin-left: -30%;
  padding-left: 0;
  list-style: none;
  text-align: center;
}
.tw-bs .carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  cursor: pointer;
  background-color: #000 \\9;
  background-color: rgba(0, 0, 0, 0);
}
.tw-bs .carousel-indicators .active {
  margin: 0;
  width: 12px;
  height: 12px;
  background-color: #ffffff;
}
.tw-bs .carousel-caption {
  position: absolute;
  left: 15%;
  right: 15%;
  bottom: 20px;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}
.tw-bs .carousel-caption .btn {
  text-shadow: none;
}
@media screen and (min-width: 768px) {
  .tw-bs .carousel-control .glyphicon-chevron-left,
  .tw-bs .carousel-control .glyphicon-chevron-right,
  .tw-bs .carousel-control .icon-prev,
  .tw-bs .carousel-control .icon-next {
    width: 30px;
    height: 30px;
    margin-top: -15px;
    font-size: 30px;
  }
  .tw-bs .carousel-control .glyphicon-chevron-left,
  .tw-bs .carousel-control .icon-prev {
    margin-left: -15px;
  }
  .tw-bs .carousel-control .glyphicon-chevron-right,
  .tw-bs .carousel-control .icon-next {
    margin-right: -15px;
  }
  .tw-bs .carousel-caption {
    left: 20%;
    right: 20%;
    padding-bottom: 30px;
  }
  .tw-bs .carousel-indicators {
    bottom: 20px;
  }
}
.tw-bs .clearfix:before,
.tw-bs .clearfix:after,
.tw-bs .tw-bs .dl-horizontal dd:before,
.tw-bs .tw-bs .dl-horizontal dd:after,
.tw-bs .tw-bs .container:before,
.tw-bs .tw-bs .container:after,
.tw-bs .tw-bs .container-fluid:before,
.tw-bs .tw-bs .container-fluid:after,
.tw-bs .tw-bs .row:before,
.tw-bs .tw-bs .row:after,
.tw-bs .tw-bs .form-horizontal .form-group:before,
.tw-bs .tw-bs .form-horizontal .form-group:after,
.tw-bs .tw-bs .btn-toolbar:before,
.tw-bs .tw-bs .btn-toolbar:after,
.tw-bs .tw-bs .btn-group-vertical > .btn-group:before,
.tw-bs .tw-bs .btn-group-vertical > .btn-group:after,
.tw-bs .tw-bs .nav:before,
.tw-bs .tw-bs .nav:after,
.tw-bs .tw-bs .navbar:before,
.tw-bs .tw-bs .navbar:after,
.tw-bs .tw-bs .navbar-header:before,
.tw-bs .tw-bs .navbar-header:after,
.tw-bs .tw-bs .navbar-collapse:before,
.tw-bs .tw-bs .navbar-collapse:after,
.tw-bs .tw-bs .pager:before,
.tw-bs .tw-bs .pager:after,
.tw-bs .tw-bs .panel-body:before,
.tw-bs .tw-bs .panel-body:after,
.tw-bs .tw-bs .modal-footer:before,
.tw-bs .tw-bs .modal-footer:after {
  content: " ";
  display: table;
}
.tw-bs .clearfix:after,
.tw-bs .tw-bs .dl-horizontal dd:after,
.tw-bs .tw-bs .container:after,
.tw-bs .tw-bs .container-fluid:after,
.tw-bs .tw-bs .row:after,
.tw-bs .tw-bs .form-horizontal .form-group:after,
.tw-bs .tw-bs .btn-toolbar:after,
.tw-bs .tw-bs .btn-group-vertical > .btn-group:after,
.tw-bs .tw-bs .nav:after,
.tw-bs .tw-bs .navbar:after,
.tw-bs .tw-bs .navbar-header:after,
.tw-bs .tw-bs .navbar-collapse:after,
.tw-bs .tw-bs .pager:after,
.tw-bs .tw-bs .panel-body:after,
.tw-bs .tw-bs .modal-footer:after {
  clear: both;
}
.tw-bs .center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.tw-bs .pull-right {
  float: right !important;
}
.tw-bs .pull-left {
  float: left !important;
}
.tw-bs .hide {
  display: none !important;
}
.tw-bs .show {
  display: block !important;
}
.tw-bs .invisible {
  visibility: hidden;
}
.tw-bs .text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
.tw-bs .hidden {
  display: none !important;
  visibility: hidden !important;
}
.tw-bs .affix {
  position: fixed;
}
@-ms-viewport {
  width: device-width;
}
.tw-bs .visible-xs,
.tw-bs .visible-sm,
.tw-bs .visible-md,
.tw-bs .visible-lg {
  display: none !important;
}
.tw-bs .visible-xs-block,
.tw-bs .visible-xs-inline,
.tw-bs .visible-xs-inline-block,
.tw-bs .visible-sm-block,
.tw-bs .visible-sm-inline,
.tw-bs .visible-sm-inline-block,
.tw-bs .visible-md-block,
.tw-bs .visible-md-inline,
.tw-bs .visible-md-inline-block,
.tw-bs .visible-lg-block,
.tw-bs .visible-lg-inline,
.tw-bs .visible-lg-inline-block {
  display: none !important;
}
@media (max-width: 767px) {
  .tw-bs .visible-xs {
    display: block !important;
  }
  table.tw-bs .visible-xs {
    display: table;
  }
  tr.tw-bs .visible-xs {
    display: table-row !important;
  }
  th.tw-bs .visible-xs,
  td.tw-bs .visible-xs {
    display: table-cell !important;
  }
}
@media (max-width: 767px) {
  .tw-bs .visible-xs-block {
    display: block !important;
  }
}
@media (max-width: 767px) {
  .tw-bs .visible-xs-inline {
    display: inline !important;
  }
}
@media (max-width: 767px) {
  .tw-bs .visible-xs-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .tw-bs .visible-sm {
    display: block !important;
  }
  table.tw-bs .visible-sm {
    display: table;
  }
  tr.tw-bs .visible-sm {
    display: table-row !important;
  }
  th.tw-bs .visible-sm,
  td.tw-bs .visible-sm {
    display: table-cell !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .tw-bs .visible-sm-block {
    display: block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .tw-bs .visible-sm-inline {
    display: inline !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .tw-bs .visible-sm-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .tw-bs .visible-md {
    display: block !important;
  }
  table.tw-bs .visible-md {
    display: table;
  }
  tr.tw-bs .visible-md {
    display: table-row !important;
  }
  th.tw-bs .visible-md,
  td.tw-bs .visible-md {
    display: table-cell !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .tw-bs .visible-md-block {
    display: block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .tw-bs .visible-md-inline {
    display: inline !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .tw-bs .visible-md-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 1200px) {
  .tw-bs .visible-lg {
    display: block !important;
  }
  table.tw-bs .visible-lg {
    display: table;
  }
  tr.tw-bs .visible-lg {
    display: table-row !important;
  }
  th.tw-bs .visible-lg,
  td.tw-bs .visible-lg {
    display: table-cell !important;
  }
}
@media (min-width: 1200px) {
  .tw-bs .visible-lg-block {
    display: block !important;
  }
}
@media (min-width: 1200px) {
  .tw-bs .visible-lg-inline {
    display: inline !important;
  }
}
@media (min-width: 1200px) {
  .tw-bs .visible-lg-inline-block {
    display: inline-block !important;
  }
}
@media (max-width: 767px) {
  .tw-bs .hidden-xs {
    display: none !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .tw-bs .hidden-sm {
    display: none !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .tw-bs .hidden-md {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .tw-bs .hidden-lg {
    display: none !important;
  }
}
.tw-bs .visible-print {
  display: none !important;
}
@media print {
  .tw-bs .visible-print {
    display: block !important;
  }
  table.tw-bs .visible-print {
    display: table;
  }
  tr.tw-bs .visible-print {
    display: table-row !important;
  }
  th.tw-bs .visible-print,
  td.tw-bs .visible-print {
    display: table-cell !important;
  }
}
.tw-bs .visible-print-block {
  display: none !important;
}
@media print {
  .tw-bs .visible-print-block {
    display: block !important;
  }
}
.tw-bs .visible-print-inline {
  display: none !important;
}
@media print {
  .tw-bs .visible-print-inline {
    display: inline !important;
  }
}
.tw-bs .visible-print-inline-block {
  display: none !important;
}
@media print {
  .tw-bs .visible-print-inline-block {
    display: inline-block !important;
  }
}
@media print {
  .tw-bs .hidden-print {
    display: none !important;
  }
}
`},Y={".":["README.md","index.js","package.json","resume.json","resume.template","style.css","tw-bs.css"]};Fn=function(n,t){var e=Vn(n);return e!==void 0?e:""},Un=function(n,t){var e=dn(n);return e===void 0&&(e=[]),t&&t.withFileTypes?e.map(function(o){var r=cn(n)+"/"+o,s=dn(r)!==void 0;return{name:o,isFile:function(){return!s},isDirectory:function(){return s}}}):e},Wn=function(n){return Vn(n)!==void 0||dn(n)!==void 0},Gn=function(){},Kn=function(){},pn=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Jn=pn,Xn=function(){},Yn=function(){},Qn=function(){return{pipe:function(n){return n},on:function(){return this}}},Zn=function(){return{write:function(){},end:function(){},on:function(){return this}}},Jt={readFileSync:Fn,readdirSync:Un,existsSync:Wn,writeFileSync:Gn,mkdirSync:Kn,statSync:pn,lstatSync:Jn,unlinkSync:Xn,rmdirSync:Yn,createReadStream:Qn,createWriteStream:Zn}});var wn=w(nt=>{"use strict";c();function $n(n){this.string=n}$n.prototype.toString=function(){return""+this.string};nt.default=$n});var L=w(_=>{"use strict";c();var Xt=wn().default,Yt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Qt=/[&<>"'`]/g,Zt=/[&<>"'`]/;function $t(n){return Yt[n]}function ne(n){for(var t=1;t<arguments.length;t++)for(var e in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],e)&&(n[e]=arguments[t][e]);return n}_.extend=ne;var un=Object.prototype.toString;_.toString=un;var Q=function(n){return typeof n=="function"};Q(/x/)&&(Q=function(n){return typeof n=="function"&&un.call(n)==="[object Function]"});var Q;_.isFunction=Q;var tt=Array.isArray||function(n){return n&&typeof n=="object"?un.call(n)==="[object Array]":!1};_.isArray=tt;function te(n){return n instanceof Xt?n.toString():n==null?"":n?(n=""+n,Zt.test(n)?n.replace(Qt,$t):n):n+""}_.escapeExpression=te;function ee(n){return!n&&n!==0?!0:!!(tt(n)&&n.length===0)}_.isEmpty=ee;function oe(n,t){return(n?n+".":"")+t}_.appendContextPath=oe});var N=w(ot=>{"use strict";c();var gn=["description","fileName","lineNumber","message","name","number","stack"];function et(n,t){var e;t&&t.firstLine&&(e=t.firstLine,n+=" - "+e+":"+t.firstColumn);for(var o=Error.prototype.constructor.call(this,n),r=0;r<gn.length;r++)this[gn[r]]=o[gn[r]];e&&(this.lineNumber=e,this.column=t.firstColumn)}et.prototype=new Error;ot.default=et});var O=w(P=>{"use strict";c();var v=L(),vn=N().default,re="2.0.0";P.VERSION=re;var se=6;P.COMPILER_REVISION=se;var ie={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};P.REVISION_CHANGES=ie;var rt=v.isArray,mn=v.isFunction,st=v.toString,it="[object Object]";function xn(n,t){this.helpers=n||{},this.partials=t||{},ae(this)}P.HandlebarsEnvironment=xn;xn.prototype={constructor:xn,logger:V,log:at,registerHelper:function(n,t){if(st.call(n)===it){if(t)throw new vn("Arg not supported with multiple helpers");v.extend(this.helpers,n)}else this.helpers[n]=t},unregisterHelper:function(n){delete this.helpers[n]},registerPartial:function(n,t){st.call(n)===it?v.extend(this.partials,n):this.partials[n]=t},unregisterPartial:function(n){delete this.partials[n]}};function ae(n){n.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new vn("Missing helper: '"+arguments[arguments.length-1].name+"'")}),n.registerHelper("blockHelperMissing",function(t,e){var o=e.inverse,r=e.fn;if(t===!0)return r(this);if(t===!1||t==null)return o(this);if(rt(t))return t.length>0?(e.ids&&(e.ids=[e.name]),n.helpers.each(t,e)):o(this);if(e.data&&e.ids){var s=Z(e.data);s.contextPath=v.appendContextPath(e.data.contextPath,e.name),e={data:s}}return r(t,e)}),n.registerHelper("each",function(t,e){if(!e)throw new vn("Must pass iterator to #each");var o=e.fn,r=e.inverse,s=0,i="",a,d;if(e.data&&e.ids&&(d=v.appendContextPath(e.data.contextPath,e.ids[0])+"."),mn(t)&&(t=t.call(this)),e.data&&(a=Z(e.data)),t&&typeof t=="object")if(rt(t))for(var l=t.length;s<l;s++)a&&(a.index=s,a.first=s===0,a.last=s===t.length-1,d&&(a.contextPath=d+s)),i=i+o(t[s],{data:a});else for(var p in t)t.hasOwnProperty(p)&&(a&&(a.key=p,a.index=s,a.first=s===0,d&&(a.contextPath=d+p)),i=i+o(t[p],{data:a}),s++);return s===0&&(i=r(this)),i}),n.registerHelper("if",function(t,e){return mn(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||v.isEmpty(t)?e.inverse(this):e.fn(this)}),n.registerHelper("unless",function(t,e){return n.helpers.if.call(this,t,{fn:e.inverse,inverse:e.fn,hash:e.hash})}),n.registerHelper("with",function(t,e){mn(t)&&(t=t.call(this));var o=e.fn;if(v.isEmpty(t))return e.inverse(this);if(e.data&&e.ids){var r=Z(e.data);r.contextPath=v.appendContextPath(e.data.contextPath,e.ids[0]),e={data:r}}return o(t,e)}),n.registerHelper("log",function(t,e){var o=e.data&&e.data.level!=null?parseInt(e.data.level,10):1;n.log(o,t)}),n.registerHelper("lookup",function(t,e){return t&&t[e]})}var V={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(n,t){if(V.level<=n){var e=V.methodMap[n];typeof console<"u"&&console[e]&&console[e].call(console,t)}}};P.logger=V;var at=V.log;P.log=at;var Z=function(n){var t=v.extend({},n);return t._parent=n,t};P.createFrame=Z});var bt=w(T=>{"use strict";c();var yn=L(),A=N().default,le=O().COMPILER_REVISION,lt=O().REVISION_CHANGES,be=O().createFrame;function de(n){var t=n&&n[0]||1,e=le;if(t!==e)if(t<e){var o=lt[e],r=lt[t];throw new A("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+o+") or downgrade your runtime to an older version ("+r+").")}else throw new A("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+n[1]+").")}T.checkRevision=de;function ce(n,t){if(!t)throw new A("No environment passed to template");if(!n||!n.main)throw new A("Unknown template object: "+typeof n);t.VM.checkRevision(n.compiler);var e=function(s,i,a,d,l,p,b,S,q){l&&(d=yn.extend({},d,l));var C=t.VM.invokePartial.call(this,s,a,d,p,b,S,q);if(C==null&&t.compile){var Dn={helpers:p,partials:b,data:S,depths:q};b[a]=t.compile(s,{data:S!==void 0,compat:n.compat},t),C=b[a](d,Dn)}if(C!=null){if(i){for(var y=C.split(`
`),E=0,sn=y.length;E<sn&&!(!y[E]&&E+1===sn);E++)y[E]=i+y[E];C=y.join(`
`)}return C}else throw new A("The partial "+a+" could not be compiled when running in runtime-only mode")},o={lookup:function(s,i){for(var a=s.length,d=0;d<a;d++)if(s[d]&&s[d][i]!=null)return s[d][i]},lambda:function(s,i){return typeof s=="function"?s.call(i):s},escapeExpression:yn.escapeExpression,invokePartial:e,fn:function(s){return n[s]},programs:[],program:function(s,i,a){var d=this.programs[s],l=this.fn(s);return i||a?d=$(this,s,l,i,a):d||(d=this.programs[s]=$(this,s,l)),d},data:function(s,i){for(;s&&i--;)s=s._parent;return s},merge:function(s,i){var a=s||i;return s&&i&&s!==i&&(a=yn.extend({},i,s)),a},noop:t.VM.noop,compilerInfo:n.compiler},r=function(s,i){i=i||{};var a=i.data;r._setup(i),!i.partial&&n.useData&&(a=fe(s,a));var d;return n.useDepths&&(d=i.depths?[s].concat(i.depths):[s]),n.main.call(o,s,o.helpers,o.partials,a,d)};return r.isTop=!0,r._setup=function(s){s.partial?(o.helpers=s.helpers,o.partials=s.partials):(o.helpers=o.merge(s.helpers,t.helpers),n.usePartial&&(o.partials=o.merge(s.partials,t.partials)))},r._child=function(s,i,a){if(n.useDepths&&!a)throw new A("must pass parent depths");return $(o,s,n[s],i,a)},r}T.template=ce;function $(n,t,e,o,r){var s=function(i,a){return a=a||{},e.call(n,i,n.helpers,n.partials,a.data||o,r&&[i].concat(r))};return s.program=t,s.depth=r?r.length:0,s}T.program=$;function pe(n,t,e,o,r,s,i){var a={partial:!0,helpers:o,partials:r,data:s,depths:i};if(n===void 0)throw new A("The partial "+t+" could not be found");if(n instanceof Function)return n(e,a)}T.invokePartial=pe;function he(){return""}T.noop=he;function fe(n,t){return(!t||!("root"in t))&&(t=t?be(t):{},t.root=n),t}});var ft=w(ht=>{"use strict";c();var dt=O(),we=wn().default,ue=N().default,kn=L(),ct=bt(),pt=function(){var n=new dt.HandlebarsEnvironment;return kn.extend(n,dt),n.SafeString=we,n.Exception=ue,n.Utils=kn,n.escapeExpression=kn.escapeExpression,n.VM=ct,n.template=function(t){return ct.template(t,n)},n},nn=pt();nn.create=pt;nn.default=nn;ht.default=nn});var Sn=w(ut=>{"use strict";c();var wt=N().default;function g(n){n=n||{},this.firstLine=n.first_line,this.firstColumn=n.first_column,this.lastColumn=n.last_column,this.lastLine=n.last_line}var F={ProgramNode:function(n,t,e){g.call(this,e),this.type="program",this.statements=n,this.strip=t},MustacheNode:function(n,t,e,o,r){if(g.call(this,r),this.type="mustache",this.strip=o,e!=null&&e.charAt){var s=e.charAt(3)||e.charAt(2);this.escaped=s!=="{"&&s!=="&"}else this.escaped=!!e;n instanceof F.SexprNode?this.sexpr=n:this.sexpr=new F.SexprNode(n,t),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(n,t,e){g.call(this,e),this.type="sexpr",this.hash=t;var o=this.id=n[0],r=this.params=n.slice(1);this.isHelper=!!(r.length||t),this.eligibleHelper=this.isHelper||o.isSimple},PartialNode:function(n,t,e,o,r){g.call(this,r),this.type="partial",this.partialName=n,this.context=t,this.hash=e,this.strip=o,this.strip.inlineStandalone=!0},BlockNode:function(n,t,e,o,r){g.call(this,r),this.type="block",this.mustache=n,this.program=t,this.inverse=e,this.strip=o,e&&!t&&(this.isInverse=!0)},RawBlockNode:function(n,t,e,o){if(g.call(this,o),n.sexpr.id.original!==e)throw new wt(n.sexpr.id.original+" doesn't match "+e,this);t=new F.ContentNode(t,o),this.type="block",this.mustache=n,this.program=new F.ProgramNode([t],{},o)},ContentNode:function(n,t){g.call(this,t),this.type="content",this.original=this.string=n},HashNode:function(n,t){g.call(this,t),this.type="hash",this.pairs=n},IdNode:function(n,t){g.call(this,t),this.type="ID";for(var e="",o=[],r=0,s="",i=0,a=n.length;i<a;i++){var d=n[i].part;if(e+=(n[i].separator||"")+d,d===".."||d==="."||d==="this"){if(o.length>0)throw new wt("Invalid path: "+e,this);d===".."?(r++,s+="../"):this.isScoped=!0}else o.push(d)}this.original=e,this.parts=o,this.string=o.join("."),this.depth=r,this.idName=s+this.string,this.isSimple=n.length===1&&!this.isScoped&&r===0,this.stringModeValue=this.string},PartialNameNode:function(n,t){g.call(this,t),this.type="PARTIAL_NAME",this.name=n.original},DataNode:function(n,t){g.call(this,t),this.type="DATA",this.id=n,this.stringModeValue=n.stringModeValue,this.idName="@"+n.stringModeValue},StringNode:function(n,t){g.call(this,t),this.type="STRING",this.original=this.string=this.stringModeValue=n},NumberNode:function(n,t){g.call(this,t),this.type="NUMBER",this.original=this.number=n,this.stringModeValue=Number(n)},BooleanNode:function(n,t){g.call(this,t),this.type="BOOLEAN",this.bool=n,this.stringModeValue=n==="true"},CommentNode:function(n,t){g.call(this,t),this.type="comment",this.comment=n,this.strip={inlineStandalone:!0}}};ut.default=F});var mt=w(gt=>{"use strict";c();var ge=(function(){var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(r,s,i,a,d,l,p){var b=l.length-1;switch(d){case 1:return a.prepareProgram(l[b-1].statements,!0),l[b-1];break;case 2:this.$=new a.ProgramNode(a.prepareProgram(l[b]),{},this._$);break;case 3:this.$=l[b];break;case 4:this.$=l[b];break;case 5:this.$=l[b];break;case 6:this.$=l[b];break;case 7:this.$=new a.ContentNode(l[b],this._$);break;case 8:this.$=new a.CommentNode(l[b],this._$);break;case 9:this.$=new a.RawBlockNode(l[b-2],l[b-1],l[b],this._$);break;case 10:this.$=new a.MustacheNode(l[b-1],null,"","",this._$);break;case 11:this.$=a.prepareBlock(l[b-3],l[b-2],l[b-1],l[b],!1,this._$);break;case 12:this.$=a.prepareBlock(l[b-3],l[b-2],l[b-1],l[b],!0,this._$);break;case 13:this.$=new a.MustacheNode(l[b-1],null,l[b-2],a.stripFlags(l[b-2],l[b]),this._$);break;case 14:this.$=new a.MustacheNode(l[b-1],null,l[b-2],a.stripFlags(l[b-2],l[b]),this._$);break;case 15:this.$={strip:a.stripFlags(l[b-1],l[b-1]),program:l[b]};break;case 16:this.$={path:l[b-1],strip:a.stripFlags(l[b-2],l[b])};break;case 17:this.$=new a.MustacheNode(l[b-1],null,l[b-2],a.stripFlags(l[b-2],l[b]),this._$);break;case 18:this.$=new a.MustacheNode(l[b-1],null,l[b-2],a.stripFlags(l[b-2],l[b]),this._$);break;case 19:this.$=new a.PartialNode(l[b-3],l[b-2],l[b-1],a.stripFlags(l[b-4],l[b]),this._$);break;case 20:this.$=new a.PartialNode(l[b-2],void 0,l[b-1],a.stripFlags(l[b-3],l[b]),this._$);break;case 21:this.$=new a.SexprNode([l[b-2]].concat(l[b-1]),l[b],this._$);break;case 22:this.$=new a.SexprNode([l[b]],null,this._$);break;case 23:this.$=l[b];break;case 24:this.$=new a.StringNode(l[b],this._$);break;case 25:this.$=new a.NumberNode(l[b],this._$);break;case 26:this.$=new a.BooleanNode(l[b],this._$);break;case 27:this.$=l[b];break;case 28:l[b-1].isHelper=!0,this.$=l[b-1];break;case 29:this.$=new a.HashNode(l[b],this._$);break;case 30:this.$=[l[b-2],l[b]];break;case 31:this.$=new a.PartialNameNode(l[b],this._$);break;case 32:this.$=new a.PartialNameNode(new a.StringNode(l[b],this._$),this._$);break;case 33:this.$=new a.PartialNameNode(new a.NumberNode(l[b],this._$));break;case 34:this.$=new a.DataNode(l[b],this._$);break;case 35:this.$=new a.IdNode(l[b],this._$);break;case 36:l[b-2].push({part:l[b],separator:l[b-1]}),this.$=l[b-2];break;case 37:this.$=[{part:l[b]}];break;case 38:this.$=[];break;case 39:l[b-1].push(l[b]);break;case 48:this.$=[];break;case 49:l[b-1].push(l[b]);break;case 52:this.$=[l[b]];break;case 53:l[b-1].push(l[b]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(r,s){throw new Error(r)},parse:function(r){var s=this,i=[0],a=[null],d=[],l=this.table,p="",b=0,S=0,q=0,C=2,Dn=1;this.lexer.setInput(r),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var y=this.lexer.yylloc;d.push(y);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function sn(x){i.length=i.length-2*x,a.length=a.length-x,d.length=d.length-x}function Mt(){var x;return x=s.lexer.lex()||1,typeof x!="number"&&(x=s.symbols_[x]||x),x}for(var u,an,I,m,Ve,ln,D={},G,k,Ln,K;;){if(I=i[i.length-1],this.defaultActions[I]?m=this.defaultActions[I]:((u===null||typeof u>"u")&&(u=Mt()),m=l[I]&&l[I][u]),typeof m>"u"||!m.length||!m[0]){var bn="";if(!q){K=[];for(G in l[I])this.terminals_[G]&&G>2&&K.push("'"+this.terminals_[G]+"'");this.lexer.showPosition?bn="Parse error on line "+(b+1)+`:
`+this.lexer.showPosition()+`
Expecting `+K.join(", ")+", got '"+(this.terminals_[u]||u)+"'":bn="Parse error on line "+(b+1)+": Unexpected "+(u==1?"end of input":"'"+(this.terminals_[u]||u)+"'"),this.parseError(bn,{text:this.lexer.match,token:this.terminals_[u]||u,line:this.lexer.yylineno,loc:y,expected:K})}}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+u);switch(m[0]){case 1:i.push(u),a.push(this.lexer.yytext),d.push(this.lexer.yylloc),i.push(m[1]),u=null,an?(u=an,an=null):(S=this.lexer.yyleng,p=this.lexer.yytext,b=this.lexer.yylineno,y=this.lexer.yylloc,q>0&&q--);break;case 2:if(k=this.productions_[m[1]][1],D.$=a[a.length-k],D._$={first_line:d[d.length-(k||1)].first_line,last_line:d[d.length-1].last_line,first_column:d[d.length-(k||1)].first_column,last_column:d[d.length-1].last_column},E&&(D._$.range=[d[d.length-(k||1)].range[0],d[d.length-1].range[1]]),ln=this.performAction.call(D,p,S,b,this.yy,m[1],a,d),typeof ln<"u")return ln;k&&(i=i.slice(0,-1*k*2),a=a.slice(0,-1*k),d=d.slice(0,-1*k)),i.push(this.productions_[m[1]][0]),a.push(D.$),d.push(D._$),Ln=l[i[i.length-2]][i[i.length-1]],i.push(Ln);break;case 3:return!0}}return!0}},t=(function(){var o={EOF:1,parseError:function(s,i){if(this.yy.parser)this.yy.parser.parseError(s,i);else throw new Error(s)},setInput:function(r){return this._input=r,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var s=r.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},unput:function(r){var s=r.length,i=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s-1),this.offset-=s;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var d=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===a.length?this.yylloc.first_column:0)+a[a.length-i.length].length-i[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[d[0],d[0]+this.yyleng-s]),this},more:function(){return this._more=!0,this},less:function(r){this.unput(this.match.slice(r))},pastInput:function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var r=this.pastInput(),s=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+s+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,s,i,a,d,l;this._more||(this.yytext="",this.match="");for(var p=this._currentRules(),b=0;b<p.length&&(i=this._input.match(this.rules[p[b]]),!(i&&(!s||i[0].length>s[0].length)&&(s=i,a=b,!this.options.flex)));b++);return s?(l=s[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],r=this.performAction.call(this,this.yy,this,p[a],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return typeof s<"u"?s:this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(s){this.begin(s)}};return o.options={},o.performAction=function(s,i,a,d){function l(b,S){return i.yytext=i.yytext.substr(b,i.yyleng-S)}var p=d;switch(a){case 0:if(i.yytext.slice(-2)==="\\\\"?(l(0,1),this.begin("mu")):i.yytext.slice(-1)==="\\"?(l(0,1),this.begin("emu")):this.begin("mu"),i.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return i.yytext=i.yytext.substr(5,i.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return l(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return l(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return i.yytext=l(1,2).replace(/\\"/g,'"'),42;break;case 30:return i.yytext=l(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return i.yytext=l(1,2),50;break;case 37:return"INVALID";case 38:return 5}},o.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],o.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},o})();n.lexer=t;function e(){this.yy={}}return e.prototype=n,n.Parser=e,new e})();gt.default=ge});var vt=w(tn=>{"use strict";c();var me=N().default;function ve(n,t){return{left:n.charAt(2)==="~",right:t.charAt(t.length-3)==="~"}}tn.stripFlags=ve;function xe(n,t,e,o,r,s){if(n.sexpr.id.original!==o.path.original)throw new me(n.sexpr.id.original+" doesn't match "+o.path.original,n);var i=e&&e.program,a={left:n.strip.left,right:o.strip.right,openStandalone:_n(t.statements),closeStandalone:En((i||t).statements)};if(n.strip.right&&H(t.statements,null,!0),i){var d=e.strip;d.left&&z(t.statements,null,!0),d.right&&H(i.statements,null,!0),o.strip.left&&z(i.statements,null,!0),En(t.statements)&&_n(i.statements)&&(z(t.statements),H(i.statements))}else o.strip.left&&z(t.statements,null,!0);return r?new this.BlockNode(n,i,t,a,s):new this.BlockNode(n,t,i,a,s)}tn.prepareBlock=xe;function ye(n,t){for(var e=0,o=n.length;e<o;e++){var r=n[e],s=r.strip;if(s){var i=En(n,e,t,r.type==="partial"),a=_n(n,e,t),d=s.openStandalone&&i,l=s.closeStandalone&&a,p=s.inlineStandalone&&i&&a;s.right&&H(n,e,!0),s.left&&z(n,e,!0),p&&(H(n,e),z(n,e)&&r.type==="partial"&&(r.indent=/([ \t]+$)/.exec(n[e-1].original)?RegExp.$1:"")),d&&(H((r.program||r.inverse).statements),z(n,e)),l&&(H(n,e),z((r.inverse||r.program).statements))}}return n}tn.prepareProgram=ye;function En(n,t,e){t===void 0&&(t=n.length);var o=n[t-1],r=n[t-2];if(!o)return e;if(o.type==="content")return(r||!e?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(o.original)}function _n(n,t,e){t===void 0&&(t=-1);var o=n[t+1],r=n[t+2];if(!o)return e;if(o.type==="content")return(r||!e?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(o.original)}function H(n,t,e){var o=n[t==null?0:t+1];if(!(!o||o.type!=="content"||!e&&o.rightStripped)){var r=o.string;o.string=o.string.replace(e?/^\s+/:/^[ \t]*\r?\n?/,""),o.rightStripped=o.string!==r}}function z(n,t,e){var o=n[t==null?n.length-1:t-1];if(!(!o||o.type!=="content"||!e&&o.leftStripped)){var r=o.string;return o.string=o.string.replace(e?/\s+$/:/[ \t]+$/,""),o.leftStripped=o.string!==r,o.leftStripped}}});var zn=w(Pn=>{"use strict";c();var Nn=mt().default,xt=Sn().default,ke=vt(),Se=L().extend;Pn.parser=Nn;var yt={};Se(yt,ke,xt);function Ee(n){return n.constructor===xt.ProgramNode?n:(Nn.yy=yt,Nn.parse(n))}Pn.parse=Ee});var on=w(en=>{"use strict";c();var In=N().default,kt=L().isArray,_e=[].slice;function Cn(){}en.Compiler=Cn;Cn.prototype={compiler:Cn,equals:function(n){var t=this.opcodes.length;if(n.opcodes.length!==t)return!1;for(var e=0;e<t;e++){var o=this.opcodes[e],r=n.opcodes[e];if(o.opcode!==r.opcode||!St(o.args,r.args))return!1}for(t=this.children.length,e=0;e<t;e++)if(!this.children[e].equals(n.children[e]))return!1;return!0},guid:0,compile:function(n,t){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds;var e=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},e)for(var o in e)this.options.knownHelpers[o]=e[o];return this.accept(n)},accept:function(n){return this[n.type](n)},program:function(n){for(var t=n.statements,e=0,o=t.length;e<o;e++)this.accept(t[e]);return this.isSimple=o===1,this.depths.list=this.depths.list.sort(function(r,s){return r-s}),this},compileProgram:function(n){var t=new this.compiler().compile(n,this.options),e=this.guid++,o;this.usePartial=this.usePartial||t.usePartial,this.children[e]=t;for(var r=0,s=t.depths.list.length;r<s;r++)o=t.depths.list[r],!(o<2)&&this.addDepth(o-1);return e},block:function(n){var t=n.mustache,e=n.program,o=n.inverse;e&&(e=this.compileProgram(e)),o&&(o=this.compileProgram(o));var r=t.sexpr,s=this.classifySexpr(r);s==="helper"?this.helperSexpr(r,e,o):s==="simple"?(this.simpleSexpr(r),this.opcode("pushProgram",e),this.opcode("pushProgram",o),this.opcode("emptyHash"),this.opcode("blockValue",r.id.original)):(this.ambiguousSexpr(r,e,o),this.opcode("pushProgram",e),this.opcode("pushProgram",o),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(n){var t=n.pairs,e,o;for(this.opcode("pushHash"),e=0,o=t.length;e<o;e++)this.pushParam(t[e][1]);for(;e--;)this.opcode("assignToHash",t[e][0]);this.opcode("popHash")},partial:function(n){var t=n.partialName;this.usePartial=!0,n.hash?this.accept(n.hash):this.opcode("push","undefined"),n.context?this.accept(n.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",t.name,n.indent||""),this.opcode("append")},content:function(n){n.string&&this.opcode("appendContent",n.string)},mustache:function(n){this.sexpr(n.sexpr),n.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(n,t,e){var o=n.id,r=o.parts[0],s=t!=null||e!=null;this.opcode("getContext",o.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",e),this.ID(o),this.opcode("invokeAmbiguous",r,s)},simpleSexpr:function(n){var t=n.id;t.type==="DATA"?this.DATA(t):t.parts.length?this.ID(t):(this.addDepth(t.depth),this.opcode("getContext",t.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(n,t,e){var o=this.setupFullMustacheParams(n,t,e),r=n.id,s=r.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",o.length,s);else{if(this.options.knownHelpersOnly)throw new In("You specified knownHelpersOnly, but used the unknown helper "+s,n);r.falsy=!0,this.ID(r),this.opcode("invokeHelper",o.length,r.original,r.isSimple)}},sexpr:function(n){var t=this.classifySexpr(n);t==="simple"?this.simpleSexpr(n):t==="helper"?this.helperSexpr(n):this.ambiguousSexpr(n)},ID:function(n){this.addDepth(n.depth),this.opcode("getContext",n.depth);var t=n.parts[0];t?this.opcode("lookupOnContext",n.parts,n.falsy,n.isScoped):this.opcode("pushContext")},DATA:function(n){this.options.data=!0,this.opcode("lookupData",n.id.depth,n.id.parts)},STRING:function(n){this.opcode("pushString",n.string)},NUMBER:function(n){this.opcode("pushLiteral",n.number)},BOOLEAN:function(n){this.opcode("pushLiteral",n.bool)},comment:function(){},opcode:function(n){this.opcodes.push({opcode:n,args:_e.call(arguments,1)})},addDepth:function(n){n!==0&&(this.depths[n]||(this.depths[n]=!0,this.depths.list.push(n)))},classifySexpr:function(n){var t=n.isHelper,e=n.eligibleHelper,o=this.options;if(e&&!t){var r=n.id.parts[0];o.knownHelpers[r]?t=!0:o.knownHelpersOnly&&(e=!1)}return t?"helper":e?"ambiguous":"simple"},pushParams:function(n){for(var t=0,e=n.length;t<e;t++)this.pushParam(n[t])},pushParam:function(n){this.stringParams?(n.depth&&this.addDepth(n.depth),this.opcode("getContext",n.depth||0),this.opcode("pushStringParam",n.stringModeValue,n.type),n.type==="sexpr"&&this.sexpr(n)):(this.trackIds&&this.opcode("pushId",n.type,n.idName||n.stringModeValue),this.accept(n))},setupFullMustacheParams:function(n,t,e){var o=n.params;return this.pushParams(o),this.opcode("pushProgram",t),this.opcode("pushProgram",e),n.hash?this.hash(n.hash):this.opcode("emptyHash"),o}};function Ne(n,t,e){if(n==null||typeof n!="string"&&n.constructor!==e.AST.ProgramNode)throw new In("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+n);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var o=e.parse(n),r=new e.Compiler().compile(o,t);return new e.JavaScriptCompiler().compile(r,t)}en.precompile=Ne;function Pe(n,t,e){if(n==null||typeof n!="string"&&n.constructor!==e.AST.ProgramNode)throw new In("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+n);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var o;function r(){var i=e.parse(n),a=new e.Compiler().compile(i,t),d=new e.JavaScriptCompiler().compile(a,t,void 0,!0);return e.template(d)}var s=function(i,a){return o||(o=r()),o.call(this,i,a)};return s._setup=function(i){return o||(o=r()),o._setup(i)},s._child=function(i,a,d){return o||(o=r()),o._child(i,a,d)},s}en.compile=Pe;function St(n,t){if(n===t)return!0;if(kt(n)&&kt(t)&&n.length===t.length){for(var e=0;e<n.length;e++)if(!St(n[e],t[e]))return!1;return!0}}});var Pt=w(Nt=>{"use strict";c();var ze=O().COMPILER_REVISION,Ce=O().REVISION_CHANGES,On=N().default;function U(n){this.value=n}function j(){}j.prototype={nameLookup:function(n,t){return j.isValidJavaScriptVariableName(t)?n+"."+t:n+"['"+t+"']"},depthedLookup:function(n){return this.aliases.lookup="this.lookup",'lookup(depths, "'+n+'")'},compilerInfo:function(){var n=ze,t=Ce[n];return[n,t]},appendToBuffer:function(n){return this.environment.isSimple?"return "+n+";":{appendToBuffer:!0,content:n,toString:function(){return"buffer += "+n+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(n,t,e,o){this.environment=n,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!o,this.name=this.environment.name,this.isChild=!!e,this.context=e||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(n,t),this.useDepths=this.useDepths||n.depths.list.length||this.options.compat;var r=n.opcodes,s,i,a;for(i=0,a=r.length;i<a;i++)s=r[i],this[s.opcode].apply(this,s.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new On("Compile completed with content left on stack");var d=this.createFunctionContext(o);if(this.isChild)return d;var l={compiler:this.compilerInfo(),main:d},p=this.context.programs;for(i=0,a=p.length;i<a;i++)p[i]&&(l[i]=p[i]);return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.options.compat&&(l.compat=!0),o||(l.compiler=JSON.stringify(l.compiler),l=this.objectLiteral(l)),l},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(n){var t="",e=this.stackVars.concat(this.registers.list);e.length>0&&(t+=", "+e.join(", "));for(var o in this.aliases)this.aliases.hasOwnProperty(o)&&(t+=", "+o+"="+this.aliases[o]);var r=["depth0","helpers","partials","data"];this.useDepths&&r.push("depths");var s=this.mergeSource(t);return n?(r.push(s),Function.apply(this,r)):"function("+r.join(",")+`) {
  `+s+"}"},mergeSource:function(n){for(var t="",e,o=!this.forceBuffer,r,s=0,i=this.source.length;s<i;s++){var a=this.source[s];a.appendToBuffer?e?e=e+`
    + `+a.content:e=a.content:(e&&(t?t+="buffer += "+e+`;
  `:(r=!0,t=e+`;
  `),e=void 0),t+=a+`
  `,this.environment.isSimple||(o=!1))}return o?(e||!t)&&(t+="return "+(e||'""')+`;
`):(n+=", buffer = "+(r?"":this.initializeBuffer()),e?t+="return buffer + "+e+`;
`:t+=`return buffer;
`),n&&(t="var "+n.substring(2)+(r?"":`;
  `)+t),t},blockValue:function(n){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams(n,0,t);var e=this.popStack();t.splice(1,0,e),this.push("blockHelperMissing.call("+t.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var n=[this.contextName(0)];this.setupParams("",0,n,!0),this.flushInline();var t=this.topStack();n.splice(1,0,t),this.pushSource("if (!"+this.lastHelper+") { "+t+" = blockHelperMissing.call("+n.join(", ")+"); }")},appendContent:function(n){this.pendingContent&&(n=this.pendingContent+n),this.pendingContent=n},append:function(){this.flushInline();var n=this.popStack();this.pushSource("if ("+n+" != null) { "+this.appendToBuffer(n)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(n){this.lastContext=n},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(n,t,e){var o=0,r=n.length;for(!e&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(n[o++])):this.pushContext();o<r;o++)this.replaceStack(function(s){var i=this.nameLookup(s,n[o],"context");return t?" && "+i:" != null ? "+i+" : "+s})},lookupData:function(n,t){n?this.pushStackLiteral("this.data(data, "+n+")"):this.pushStackLiteral("data");for(var e=t.length,o=0;o<e;o++)this.replaceStack(function(r){return" && "+this.nameLookup(r,t[o],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(n,t){this.pushContext(),this.pushString(t),t!=="sexpr"&&(typeof n=="string"?this.pushString(n):this.pushStackLiteral(n))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var n=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+n.ids.join(",")+"}"),this.stringParams&&(this.push("{"+n.contexts.join(",")+"}"),this.push("{"+n.types.join(",")+"}")),this.push(`{
    `+n.values.join(`,
    `)+`
  }`)},pushString:function(n){this.pushStackLiteral(this.quotedString(n))},push:function(n){return this.inlineStack.push(n),n},pushLiteral:function(n){this.pushStackLiteral(n)},pushProgram:function(n){n!=null?this.pushStackLiteral(this.programExpression(n)):this.pushStackLiteral(null)},invokeHelper:function(n,t,e){this.aliases.helperMissing="helpers.helperMissing";var o=this.popStack(),r=this.setupHelper(n,t),s=(e?r.name+" || ":"")+o+" || helperMissing";this.push("(("+s+").call("+r.callParams+"))")},invokeKnownHelper:function(n,t){var e=this.setupHelper(n,t);this.push(e.name+".call("+e.callParams+")")},invokeAmbiguous:function(n,t){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var e=this.popStack();this.emptyHash();var o=this.setupHelper(0,n,t),r=this.lastHelper=this.nameLookup("helpers",n,"helper");this.push("((helper = (helper = "+r+" || "+e+") != null ? helper : helperMissing"+(o.paramsInit?"),("+o.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+o.callParams+") : helper))")},invokePartial:function(n,t){var e=[this.nameLookup("partials",n,"partial"),"'"+t+"'","'"+n+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?e.push("data"):this.options.compat&&e.push("undefined"),this.options.compat&&e.push("depths"),this.push("this.invokePartial("+e.join(", ")+")")},assignToHash:function(n){var t=this.popStack(),e,o,r;this.trackIds&&(r=this.popStack()),this.stringParams&&(o=this.popStack(),e=this.popStack());var s=this.hash;e&&s.contexts.push("'"+n+"': "+e),o&&s.types.push("'"+n+"': "+o),r&&s.ids.push("'"+n+"': "+r),s.values.push("'"+n+"': ("+t+")")},pushId:function(n,t){n==="ID"||n==="DATA"?this.pushString(t):n==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:j,compileChildren:function(n,t){for(var e=n.children,o,r,s=0,i=e.length;s<i;s++){o=e[s],r=new this.compiler;var a=this.matchExistingProgram(o);a==null?(this.context.programs.push(""),a=this.context.programs.length,o.index=a,o.name="program"+a,this.context.programs[a]=r.compile(o,t,this.context,!this.precompile),this.context.environments[a]=o,this.useDepths=this.useDepths||r.useDepths):(o.index=a,o.name="program"+a)}},matchExistingProgram:function(n){for(var t=0,e=this.context.environments.length;t<e;t++){var o=this.context.environments[t];if(o&&o.equals(n))return t}},programExpression:function(n){var t=this.environment.children[n],e=t.depths.list,o=this.useDepths,r,s=[t.index,"data"];return o&&s.push("depths"),"this.program("+s.join(", ")+")"},useRegister:function(n){this.registers[n]||(this.registers[n]=!0,this.registers.list.push(n))},pushStackLiteral:function(n){return this.push(new U(n))},pushSource:function(n){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),n&&this.source.push(n)},pushStack:function(n){this.flushInline();var t=this.incrStack();return this.pushSource(t+" = "+n+";"),this.compileStack.push(t),t},replaceStack:function(n){var t="",e=this.isInline(),o,r,s;if(!this.isInline())throw new On("replaceStack on non-inline");var i=this.popStack(!0);if(i instanceof U)t=o=i.value,s=!0;else{r=!this.stackSlot;var a=r?this.incrStack():this.topStackName();t="("+this.push(a)+" = "+i+")",o=this.topStack()}var d=n.call(this,o);s||this.popStack(),r&&this.stackSlot--,this.push("("+t+d+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var n=this.inlineStack;if(n.length){this.inlineStack=[];for(var t=0,e=n.length;t<e;t++){var o=n[t];o instanceof U?this.compileStack.push(o):this.pushStack(o)}}},isInline:function(){return this.inlineStack.length},popStack:function(n){var t=this.isInline(),e=(t?this.inlineStack:this.compileStack).pop();if(!n&&e instanceof U)return e.value;if(!t){if(!this.stackSlot)throw new On("Invalid stack pop");this.stackSlot--}return e},topStack:function(){var n=this.isInline()?this.inlineStack:this.compileStack,t=n[n.length-1];return t instanceof U?t.value:t},contextName:function(n){return this.useDepths&&n?"depths["+n+"]":"depth"+n},quotedString:function(n){return'"'+n.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(n){var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push(this.quotedString(e)+":"+n[e]);return"{"+t.join(",")+"}"},setupHelper:function(n,t,e){var o=[],r=this.setupParams(t,n,o,e),s=this.nameLookup("helpers",t,"helper");return{params:o,paramsInit:r,name:s,callParams:[this.contextName(0)].concat(o).join(", ")}},setupOptions:function(n,t,e){var o={},r=[],s=[],i=[],a,d,l;o.name=this.quotedString(n),o.hash=this.popStack(),this.trackIds&&(o.hashIds=this.popStack()),this.stringParams&&(o.hashTypes=this.popStack(),o.hashContexts=this.popStack()),d=this.popStack(),l=this.popStack(),(l||d)&&(l||(l="this.noop"),d||(d="this.noop"),o.fn=l,o.inverse=d);for(var p=t;p--;)a=this.popStack(),e[p]=a,this.trackIds&&(i[p]=this.popStack()),this.stringParams&&(s[p]=this.popStack(),r[p]=this.popStack());return this.trackIds&&(o.ids="["+i.join(",")+"]"),this.stringParams&&(o.types="["+s.join(",")+"]",o.contexts="["+r.join(",")+"]"),this.options.data&&(o.data="data"),o},setupParams:function(n,t,e,o){var r=this.objectLiteral(this.setupOptions(n,t,e));return o?(this.useRegister("options"),e.push("options"),"options="+r):(e.push(r),"")}};var Et="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),Ie=j.RESERVED_WORDS={};for(rn=0,_t=Et.length;rn<_t;rn++)Ie[Et[rn]]=!0;var rn,_t;j.isValidJavaScriptVariableName=function(n){return!j.RESERVED_WORDS[n]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(n)};Nt.default=j});var It=w(Ct=>{"use strict";c();var M=ft().default,Oe=Sn().default,Ae=zn().parser,He=zn().parse,je=on().Compiler,Re=on().compile,qe=on().precompile,De=Pt().default,Le=M.create,zt=function(){var n=Le();return n.compile=function(t,e){return Re(t,e,n)},n.precompile=function(t,e){return qe(t,e,n)},n.AST=Oe,n.Compiler=je,n.JavaScriptCompiler=De,n.Parser=Ae,n.parse=He,n};M=zt();M.create=zt;M.default=M;Ct.default=M});var Hn=w(Ot=>{"use strict";c();function An(){}An.prototype={constructor:An,accept:function(n){return this[n.type](n)}};Ot.default=An});var At=w(jn=>{"use strict";c();var Te=Hn().default;function Me(n){return new f().accept(n)}jn.print=Me;function f(){this.padding=0}jn.PrintVisitor=f;f.prototype=new Te;f.prototype.pad=function(n){for(var t="",e=0,o=this.padding;e<o;e++)t=t+"  ";return t=t+n+`
`,t};f.prototype.program=function(n){var t="",e=n.statements,o,r;for(o=0,r=e.length;o<r;o++)t=t+this.accept(e[o]);return this.padding--,t};f.prototype.block=function(n){var t="";return t=t+this.pad("BLOCK:"),this.padding++,t=t+this.accept(n.mustache),n.program&&(t=t+this.pad("PROGRAM:"),this.padding++,t=t+this.accept(n.program),this.padding--),n.inverse&&(n.program&&this.padding++,t=t+this.pad("{{^}}"),this.padding++,t=t+this.accept(n.inverse),this.padding--,n.program&&this.padding--),this.padding--,t};f.prototype.sexpr=function(n){for(var t=n.params,e=[],o,r=0,s=t.length;r<s;r++)e.push(this.accept(t[r]));return t="["+e.join(", ")+"]",o=n.hash?" "+this.accept(n.hash):"",this.accept(n.id)+" "+t+o};f.prototype.mustache=function(n){return this.pad("{{ "+this.accept(n.sexpr)+" }}")};f.prototype.partial=function(n){var t=this.accept(n.partialName);return n.context&&(t+=" "+this.accept(n.context)),n.hash&&(t+=" "+this.accept(n.hash)),this.pad("{{> "+t+" }}")};f.prototype.hash=function(n){for(var t=n.pairs,e=[],o,r,s=0,i=t.length;s<i;s++)o=t[s][0],r=this.accept(t[s][1]),e.push(o+"="+r);return"HASH{"+e.join(", ")+"}"};f.prototype.STRING=function(n){return'"'+n.string+'"'};f.prototype.NUMBER=function(n){return"NUMBER{"+n.number+"}"};f.prototype.BOOLEAN=function(n){return"BOOLEAN{"+n.bool+"}"};f.prototype.ID=function(n){var t=n.parts.join("/");return n.parts.length>1?"PATH:"+t:"ID:"+t};f.prototype.PARTIAL_NAME=function(n){return"PARTIAL:"+n.name};f.prototype.DATA=function(n){return"@"+this.accept(n.id)};f.prototype.content=function(n){return this.pad("CONTENT[ '"+n.string+"' ]")};f.prototype.comment=function(n){return this.pad("{{! '"+n.comment+"' }}")}});var Rt=w((Eo,jt)=>{c();var W=It().default;W.Visitor=Hn().default;var Ht=At();W.PrintVisitor=Ht.PrintVisitor;W.print=Ht.print;jt.exports=W;typeof B<"u"&&B.extensions&&(Rn=function(n,t){var e=(fn(),Bn(hn)),o=e.readFileSync(t,"utf8");n.exports=W.compile(o)},B.extensions[".handlebars"]=Rn,B.extensions[".hbs"]=Rn);var Rn});var Lt=w((Po,Dt)=>{c();var qn=(fn(),Bn(hn)),qt=Rt();Dt.exports={render:Be};function Be(n){var t=qn.readFileSync("//tw-bs.css","utf-8"),e=qn.readFileSync("//style.css","utf-8"),o=qn.readFileSync("//resume.template","utf-8");return qt.compile(o)({twbscss:t,css:e,resume:n})}qt.registerHelper("nl2br",function(n){return(n||"").replace(/\n/g,"</p><p>")})});c();var R=Kt(Lt(),1),Tt=R.default??R,Co=Tt.render??R.render,Io=Tt.pdfRenderOptions??R.pdfRenderOptions;export{Io as pdfRenderOptions,Co as render};
