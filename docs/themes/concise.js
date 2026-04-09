var tn=Object.create;var Z=Object.defineProperty;var en=Object.getOwnPropertyDescriptor;var nn=Object.getOwnPropertyNames;var sn=Object.getPrototypeOf,rn=Object.prototype.hasOwnProperty;var B=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var ft=(t,e)=>()=>(t&&(e=t(t=0)),e);var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),zt=(t,e)=>{for(var n in e)Z(t,n,{get:e[n],enumerable:!0})},Wt=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of nn(e))!rn.call(t,s)&&s!==n&&Z(t,s,{get:()=>e[s],enumerable:!(i=en(e,s))||i.enumerable});return t};var an=(t,e,n)=>(n=t!=null?tn(sn(t)):{},Wt(e||!t||!t.__esModule?Z(n,"default",{value:t,enumerable:!0}):n,t)),dt=t=>Wt(Z({},"__esModule",{value:!0}),t);var u=ft(()=>{});var bt={};zt(bt,{createReadStream:()=>ee,createWriteStream:()=>ne,default:()=>on,existsSync:()=>Yt,lstatSync:()=>Qt,mkdirSync:()=>Xt,readFileSync:()=>Kt,readdirSync:()=>Jt,rmdirSync:()=>te,statSync:()=>vt,unlinkSync:()=>$t,writeFileSync:()=>Zt});function gt(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Gt(t){var e=gt(t);if(X[e]!==void 0)return X[e];for(var n=Object.keys(X),i=0;i<n.length;i++)if(e.endsWith("/"+n[i])||e===n[i])return X[n[i]]}function mt(t){var e=gt(t);if(Q[e]!==void 0)return Q[e];for(var n=Object.keys(Q),i=0;i<n.length;i++)if(e.endsWith("/"+n[i])||e===n[i])return Q[n[i]]}var X,Q,Kt,Jt,Yt,Zt,Xt,vt,Qt,$t,te,ee,ne,on,yt=ft(()=>{"use strict";u();X={"TODOS.txt":"","package.json":`{
  "name": "jsonresume-theme-concise",
  "version": "0.0.7",
  "description": "Custom 'concise' theme for JSON Resume",
  "author": "Mckenna Cisler",
  "repository": {
    "type": "git",
    "url": "https://github.com/MckennaCisler/jsonresume-theme-concise"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4",
    "normalize.css": "^7.0.0"
  }
}
`,"partials/awards.hbs":`{{#if resume.awards.length}}
<section id="awards">
	{{> cross-heading title="Awards"}}
	{{#each resume.awards}}
	<div class="item section-container">
		<div class="summary-section">
			{{#if title}}
			<div class="title">
				<strong>{{{title}}}</strong>
			</div>
			{{/if}}
			{{> singleDate}}
			{{#if awarder}}
			<div class="awarder">
				{{awarder}}
			</div>
			{{/if}}
		</div>
		<div class="full-section">
			{{#if summary}}
			<div class="summary">
				<p>{{{summary}}}</p>
			</div>
			{{/if}}
		</div>
	</div>
	{{/each}}
</section>
{{/if}}
`,"partials/basics.hbs":`{{#resume.basics}}
	<section id="basics">
		<div id="basics-header-container">
			<div id="contact" class="section-container no-hinter-section">
				<div class="summary-section">
					{{#if email}}
						<div class="email">
							<a href="mailto:{{email}}">{{email}}</a>
						</div>
					{{else}}
						{{#if phone}}
							<div class="phone">
								{{phone}}
							</div>
						{{else}}
							{{#if website}}
								<div class="website">
									<a href="{{website}}">{{cleanUrl website}}</a>
								</div>
							{{/if}}
						{{/if}}
					{{/if}}
				</div>
				<div class="full-section">
					{{#if website}}
						<div class="website">
							<a href="{{website}}">{{cleanUrl website}}</a>
						</div>
					{{/if}}
					{{#if phone}}
					<div class="phone">
						{{phone}}
					</div>
					{{/if}}
				</div>
			</div>
			{{#location}}
			<div id="location" class="section-container no-hinter-section">
				<div class="summary-section">
					{{#if countryCode}}
					<div class="countryCode">
						{{countryCode}}
						{{#if region}}
							<span class="region">
								({{region}})
							</span>
						{{/if}}
					</div>
					{{/if}}
				</div>
				<div class="full-section">
					{{#if address}}
						<div class="address">
							{{address}}
						</div>
					{{/if}}
					{{#if city}}
						<div class="city">
							{{city}}
						</div>
					{{/if}}
					{{#if postalCode}}
					<div class="postalCode">
						{{postalCode}}
					</div>
					{{/if}}
				</div>
			</div>
			{{/location}}
		</div>
		{{#if summary}}
		<div class="summary">
			<p><em>{{{summary}}}</em></p>
		</div>
		{{/if}}
		{{#if profiles.length}}
		<section id="profiles">
			{{#each profiles}}
			<span class="item">
				{{#if username}}
					{{#if network}}
					<icon title="{{network}}" class="fa fa-{{lowercase network}}"></icon>
					<!-- <strong class="network">
						{{network}}
					</strong> -->
					{{/if}}
					<span class="username">
						<a href="{{absoluteUrl url}}">{{username}}</a>
					</span>
				{{else}}
					{{#if network}}
					<strong class="network">
						<a href="{{absoluteUrl url}}">{{network}}</a>
					</strong>
					{{/if}}
				{{/if}}
			</span>
			{{/each}}
		</section>
		{{/if}}
	</section>
{{/resume.basics}}
`,"partials/cross-heading.hbs":`<div class="cross-heading"><p>{{title}}</p></div>
`,"partials/dateRange.hbs":`{{#if obj.startDate}}
  <div class="date" title="{{#if endDate}} {{niceDate obj.startDate}} \u2014 {{niceDate obj.endDate}} {{else}} {{niceDate obj.startDate}} \u2014 Present {{/if}}">
    <icon class="fa fa-calendar" aria-hidden="true"></icon>
    <strong>{{durationOf obj}}</strong>
    {{#unless obj.endDate}}
      <strong>(ongoing)</strong>
    {{/unless}}
    <em>Started {{shortDate obj.startDate}}</em>
  </div>
{{/if}}
`,"partials/education.hbs":`{{#if resume.education.length}}
<section id="education">
	{{> cross-heading title="Education"}}
	{{#each resume.education}}
	<div class="item section-container">
		<div class="summary-section">
			{{#if institution}}
			<div class="institution">
				<icon class="fa fa-graduation-cap" aria-hidden="true"></icon>
				{{institution}}
			</div>
			{{/if}}
			{{> simpleDateRange}}
			{{#if area}}
			<div class="area">
				{{#if studyType}}
				<span class="studyType">
					<strong>{{studyType}}</strong>
				</span>
				{{/if}}
				({{area}})
			</div>
			{{/if}}
		</div>
		<div class="full-section">
			{{#if gpa}}
			<div class="gpa">
				<strong>GPA</strong> {{gpa}}
			</div>
				{{/if}}
				<div class="courses">
				{{#if courses.length}}
				<em>Courses</em>
				<ul>
					{{#each courses}}
					<li>{{.}}</li>
					{{/each}}
				</ul>
				{{/if}}
			</div>
		</div>
	</div>
	{{/each}}
</section>
{{/if}}
`,"partials/header.hbs":`{{#resume.basics}}
  <h1>{{name}}</h1>
  <h3>{{label}}</h3>
{{/resume.basics}}
`,"partials/interests.hbs":`{{#if resume.interests.length}}
<section id="interests">
	{{> cross-heading title="Interests"}}
	{{#each resume.interests}}
	<div class="item section-container">
		<div class="summary-section">
			{{#if name}}
			<div class="title">
				{{name}}
			</div>
			{{/if}}
		</div>
		{{#if keywords.length}}
			<div class="full-section">
				{{> keywords}}
			</div>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}
`,"partials/keywords.hbs":`{{#if keywords.length}}
  <div class="keywords container">
    {{#each keywords}}
      <span class="keyword col-xs-1">{{.}}</span>
    {{/each}}
  </div>
{{/if}}
`,"partials/languages.hbs":`{{#if resume.languages.length}}
<section id="languages">
	{{> cross-heading title="Languages"}}
	{{#each resume.languages}}
	<div class="item">
		{{#if language}}
		<div class="language">
			{{language}}
		</div>
		{{/if}}
		{{#if fluency}}
		<div class="fluency">
			<em>{{fluency}}</em>
		</div>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}
`,"partials/projects.hbs":`{{#if resume.projects.length}}
<section id="work">
	{{> cross-heading title="Projects"}}
	{{#each resume.projects}}
	<div class="item section-container">
		<div class="summary-section">
			{{#if name}}
			<h3 class="title">
				{{#if type}}
					<icon title="{{type}}" class="project-icon fa {{projectTypeIcon type}}" aria-hidden="true"></icon>
				{{/if}}
				{{name}}
			</h3>
			{{/if}}
			{{#if description}}
			<div class="description">
				<em>{{{description}}}</em>
			</div>
			{{/if}}
			{{#if url}}
			<div class="url">
				<a href="{{absoluteUrl url}}">{{cleanUrl url}}</a>
			</div>
			{{/if}}
			{{#if entity}}
			<div class="entity">
				{{{entity}}}
			</div>
			{{/if}}
		</div>
		<div class="full-section">
			<!-- For spacing  -->
			<p></p>
			{{> dateRange obj=this }}
			{{#if roles.length}}
			<ul class="roles">
				{{#each roles}}
				<li>{{.}}</li>
				{{/each}}
			</ul>
			{{/if}}
			{{#if highlights.length}}
			<ul class="highlights">
				{{#each highlights}}
				<li>{{{.}}}</li>
				{{/each}}
			</ul>
			{{/if}}
			{{> keywords}}
		</div>
	</div>
	{{/each}}
</section>
{{/if}}
`,"partials/publications.hbs":`{{#if resume.publications.length}}
<section id="publications">
	<p class="cross-heading">Publications</p class="cross-heading">
	{{#each resume.publications}}
	<div class="item section-container">
			<div class="summary-section">
			{{#if name}}
				{{#if website}}
					<a href="{{absoluteUrl website}}"><strong>{{name}}</strong></a>
				{{else}}
					<strong>{{name}}</strong>
				{{/if}}
			{{/if}}
			{{> singleDate date=releaseDate}}
			{{#if publisher}}
				<div class="publisher">
					{{{publisher}}}
				</div>
			{{/if}}
		</div>
		<div class="full-section">
			{{#if summary}}
			<div class="summary">
				<p>{{{summary}}}</p>
			</div>
			{{/if}}
		</div>
	</div>
	{{/each}}
</section>
{{/if}}
`,"partials/references.hbs":`{{#if resume.references.length}}
<section id="references">
	{{> cross-heading title="References"}}
	{{#each resume.references}}
	<div class="item">
		{{#if reference}}
		<blockquote class="reference">
			{{{reference}}}
			{{#if name}}
			<strong> \u2014 {{name}}</strong>
			{{/if}}
		</blockquote>
		{{else}}
			{{#if name}}
			<strong>{{name}}</strong>
			{{/if}}
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}
`,"partials/simpleDateRange.hbs":`{{#if startDate}}
  <div class="date">
    <icon class="fa fa-calendar" aria-hidden="true"></icon>
    {{#if endDate}}
      {{niceDate startDate}} \u2014 {{niceDate endDate}}
    {{else}}
      {{niceDate startDate}} \u2014 Present
    {{/if}}
  </div>
{{/if}}
`,"partials/singleDate.hbs":`{{#if date}}
  <div class="date">
    <icon class="fa fa-clock-o" aria-hidden="true"></icon>
    {{niceDate date}}
  </div>
{{/if}}
`,"partials/skills.hbs":`{{#if resume.skills.length}}
<section id="skills">
	{{> cross-heading title="Skills"}}
	{{#each resume.skills}}
	<div class="item section-container">
		<div class="summary-section">
			{{#if name}}
			<div class="skill-name">
				{{name}}
			</div>
			{{/if}}
			{{#if level}}
			<div class="level">
				<em>{{level}}</em>
			</div>
			{{/if}}
		</div>
		{{#if keywords.length}}
			<div class="full-section">
				{{> keywords}}
			</div>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}
`,"partials/volunteer.hbs":`{{#if resume.volunteer.length}}
<section id="volunteer">
	{{> cross-heading title="Volunteer"}}
	{{#each resume.volunteer}}
	<div class="item section-container">
		<div class="summary-section">
			{{#if position}}
			<div class="position">
				{{position}}
			</div>
			{{/if}}
			{{#if organization}}
			<h3 class="name">
				{{{organization}}}
			</h3>
			{{/if}}
			{{> dateRange obj=this}}
			{{#if website}}
			<div class="website">
				<a href="{{absoluteUrl website}}">{{cleanUrl website}}</a>
			</div>
			{{/if}}
		</div>
		<div class="full-section">
			{{#if summary}}
			<div class="summary">
				<p>{{{summary}}}</p>
			</div>
			{{/if}}
			{{#if highlights.length}}
			<ul class="highlights">
				{{#each highlights}}
				<li>{{{.}}}</li>
				{{/each}}
			</ul>
			{{/if}}
		</div>
	</div>
	{{/each}}
</section>
{{/if}}
`,"partials/work.hbs":`{{#if resume.work.length}}
<section id="work">
	{{> cross-heading title="Work"}}
	{{#each resume.work}}
	<div class="item section-container">
		<div class="summary-section">
			{{#if position}}
			<div class="position">
				{{position}}
			</div>
			{{/if}}
			{{#if company}}
			<h3 class="name">
				{{company}}
			</h3>
			{{/if}}
			{{> dateRange obj=this }}
			{{#if website}}
			<div class="website">
				<a href="{{absoluteUrl website}}">{{cleanUrl website}}</a>
			</div>
			{{/if}}
		</div>
		<div class="full-section">
			{{#if summary}}
			<div class="summary">
				<p><em>{{summary}}</em></p>
			</div>
			{{/if}}
			{{#if highlights.length}}
			<ul class="highlights">
				{{#each highlights}}
				<li>{{{.}}}</li>
				{{/each}}
			</ul>
			{{/if}}
		</div>
	</div>
	{{/each}}
</section>
{{/if}}
`,"resume.hbs":`<!doctype html>
<html>
	<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui, initial-scale=1.0">

	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

	<script src="https://code.jquery.com/jquery-3.2.1.min.js"><\/script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"><\/script>

	<meta name="description" content="{{#resume.basics}}{{summary}}{{/resume.basics}}">

	<title>{{#resume.basics}}{{name}} | {{label}}{{/resume.basics}}</title>

	<style>
		{{{normalizeCss}}}
		{{{css}}}
	</style>

	</head>
	<body>

	<div class=".container-fluid">
		<div class="concise-full-switch">
			<a href="#" id="concise-activate" title="Hide detailed information until hovered over">Concise</a>
			|
			<a href="#" id="full-activate" title="Show all information">Full</a>
		</div>

		<div id="header-container" class="col-xs-10 col-lg-7">
			<div id="header">
				{{> header}}
			</div>
		</div>

		<div id="resume" class="col-xs-10 col-lg-7">
			{{> basics }}
			{{> work }}
			{{> volunteer }}
			{{> projects }}
			{{> education }}
			{{> awards }}
			{{> publications }}
			{{> skills }}
			{{> languages }}
			{{> interests }}
			{{> references }}
		</div>
	</div>

	<div id="footer">
		<em><a href="https://www.npmjs.com/package/jsonresume-theme-concise">Theme</a> for <a href="https://jsonresume.org/">JSON Resume</a></em>
	</div>
	</body>

	<script>
		// set to true to remove all interactivity and just display all info
		var SHOW_FULL_SECTIONS = false;

		// how long a user must hover over a summary before it expands
		var HOVER_ACTIVATE_TIME = 600; // ms

		// for dynamic changing of showing everything
		var full_mode = true;

		var hinter_removed = false;

		var otherSlidingDownTimeout = null;
		revealSection = function(activateTimeout) {
			$(this).addClass("section-container-hover");
			var $dropdownIndicator = $(this).children(".summary-section-dropdown-indicator");
			$dropdownIndicator.text("\\uf107"); // down arrow

			if (otherSlidingDownTimeout === null) {
				var $fullSection = $(this).children(".full-section");
				otherSlidingDownTimeout = window.setTimeout(function() {
					$fullSection.slideDown("med", function() {
						window.clearTimeout(otherSlidingDownTimeout);
						otherSlidingDownTimeout = null;

						// only CHANGE it from a down arrow
						// (the whole action may have been cancelled and we don't want to re-add)
						if ($dropdownIndicator.text() !== "") {
							$dropdownIndicator.text("\\uf106"); // up arrow
						}
					});

				}, activateTimeout);
			} else {
				window.clearTimeout(otherSlidingDownTimeout);
				otherSlidingDownTimeout = null;
			}
		}

		hideSection = function() {
			$(this).removeClass("section-container-hover");
			// instead of emptying, put in \\uf107 if we want to always show indicators
			$(this).children(".summary-section-dropdown-indicator").text("");

			$(this).children(".full-section").slideUp("med");
			window.clearTimeout(otherSlidingDownTimeout);
			otherSlidingDownTimeout = null;
		}

		set_full_mode = function() {
			$("#full-activate").css("text-decoration", "underline");
			$("#concise-activate").css("text-decoration", "none");

			// disable handlers and show everything
			$(".section-container").off("mouseenter mouseleave");
			$(".section-container").off("blur");
			$(".section-container").off("click");

			$(".summary-section-dropdown-hinter").hide();
			$(".full-section").show();
			$(".summary-section").show();
		}

		set_concise_mode = function() {
			$("#concise-activate").css("text-decoration", "underline");
			$("#full-activate").css("text-decoration", "none");

			// make sure to re-show and re-activate hover option on hinter
			// (never show again once removed; i.e. hovered over once)
			$(".summary-section-dropdown-hinter").show();
			if (!hinter_removed) {
				$(".section-container").not(".no-hinter-section").first()
				.hover(() => {
					hinter_removed = true;
					$(".summary-section-dropdown-hinter").remove();
				});
			}

			// desktop reveal method
			$(".section-container").hover(function() {
				revealSection.apply(this, [HOVER_ACTIVATE_TIME]);
			}, hideSection);

			// mobile reveal method
			$(".section-container").on("blur", hideSection);
			$(".section-container").on("click", function() {
				// blur all those EXCEPT this one
				var current = $(this);
				$(".section-container").filter(function() {
					return !$(this).is(current);
				}).blur();

				revealSection.apply(this, [0]);
			});

			$(".full-section").hide();
			$(".summary-section").show();
		}

		if (!SHOW_FULL_SECTIONS) {
			// toggle handlers
			$("#concise-activate").click(set_concise_mode);
			$("#full-activate").click(set_full_mode);

			// add a hinter to the dropdown function that disappears on first parent hover
			$(".section-container").not(".no-hinter-section").first()
			.append("<span class='summary-section-dropdown-hinter'>\\uf107</span>")

			// instead of being empty, put in \\uf107 if we want to always show indicators
			$(".section-container").append(
				"<span class='summary-section-dropdown-indicator'></span>");

			$(".full-section").hide();
			$(".summary-section").show();

			// set concise by default
			set_concise_mode()
		} else {
			$(".concise-full-switch").hide();
			$(".full-section").show();
			$(".summary-section").show();
		}

	<\/script>
</html>
`,"style.css":`body {
	background: #fafafa;
	font: 15px "Open Sans", sans-serif;
	line-height: 1.4;
	position: relative;
	margin: 0;
	padding-bottom: 6rem;
	min-height: 100%;
}
h1, h2, h3, h4, h5, h6 {
	font-family: "Lato", sans-serif;
	margin-bottom: 0.1rem;
}

em {
	color: #999;
}
p {
	line-height: 1.4;
	margin: 0.5rem 0;
}
ul {
	margin-bottom: 0;
	list-style-type: '\u2014 ';
}
section {
	margin-bottom: 1rem;
}
blockquote {
	margin: 0;
	margin-bottom: 1em;
}

.cross-heading {
	width: 100%;
	margin-top: 1.25em;
	text-align: center;
}

.cross-heading > p {
	margin: 0;
	font-size:1.4rem;
	font-family: "Lato", sans-serif;
	text-transform: uppercase;
	display: inline-block;

	background: #fafafa;
	padding: 0 0.75em;
}

.cross-heading::after {
	height: 1px;
	content: "";
	background: #aaa;
	width: 100%;
	display: block;
	position: relative;
	z-index: -100;
	top: -1em;
}

.item {
	margin-bottom: 1em;
}

.name {
	font-size: 1.1rem;
}

.position, .title {
	font-size: 1.3rem;
}

.section-container {
	padding: 0.25em;
	margin: 0.5em;
	margin-bottom: 1em;
	border-left-style: solid;
	border-color: rgba(170, 170, 170, 0); /* #aaa0 */
	border-width: 1px;
}

.section-container-hover {
	border-color: rgba(170, 170, 170, 255);
}

.summary-section-dropdown-indicator {
	font-family: FontAwesome;
	top: -0.25rem;
	position: relative;
	left: 50%;
	margin-left: -0.5rem;
	display: block;
	width: 0;
	height: 0;
}

@keyframes bounce {
	 0% {
		 top: -0.5rem;
	 }
	 50% {
		 top: -0.1rem;
	 }
	 100% {
		 top: -0.5rem;
	 }
}

.summary-section-dropdown-hinter {
	font-family: FontAwesome;
	top: -0.25rem;
	position: relative;
	left: 50%;
	font-size: 1.2rem;
	margin-left: -0.6rem; /* 1/2 of font-size */
	display: block;
	width: 0;
	height: 0;

	animation: bounce 1.3s infinite;
	/*animation-timing-function: ease-in-out;*/
}

.concise-full-switch {
	text-align: center;
	font-size: 0.7rem;

	margin: 0;
	margin-top: 0.3rem;
}

.concise-full-switch a {
	padding: 0.1rem;
}

#header-container {
	margin: 0 auto;
	padding: 0;
}

#header {
	border-bottom-style: solid;
	border-width: 1px;
	border-color: #aaa;
	text-align: center;
	margin: 0 auto;
	margin-bottom: 	0.75rem;
	margin-top: 		0.75rem;
	padding: 0.5em;
}
#header h1 {
	font-size: 2.7em;
}
#header h1, #header h2, #header h3, #header h4 {
	padding: 0;
	margin: 0.1rem;
}
#resume {
	margin: 0 auto;
	/*max-width: 60%;*/
	/*padding: 0.25rem;*/
}

#basics {
	margin-bottom: -10px;
}
#basics h3 {
	margin-top: 1.5em;
}
#basics-header-container {
	overflow:hidden;
}
#basics .full-section {
	margin: 0;
}
#basics .summary {
	text-align: center;
}
#contact {
	float: left;
	text-align: left;
}
#location {
	float: right;
	text-align: right;
	border-left-style: none;
	border-right-style: solid;
}
#contact, #location {
	margin: 0;
	margin-bottom: 0.5rem;
}
#profiles,
#skills {
	overflow: hidden;
	margin: 0.5rem 0;
}
#profiles .item,
#skills .item {
	float: left;
	margin: 0.5rem 0.25rem;
}

#skills .item {
	width: 33%;
}

.keywords {
	margin: 0.1rem 0.25rem;
}

.keyword {
	padding: 0.15rem 0.6rem;
	margin: 0.2rem 0.1rem;
	display: inline-block;

	color: #aaa;
	border-radius: 1rem;
	border-style: solid;
	border-width: 1px;
	border-color: #aaa;
}

.reference {
	font-style: italic;
	font-size-adjust: 0.48;
}

#footer {
	text-align: center;
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 1rem;
	font-size: smaller;
}

@media only screen and (max-width: 992px) {
	#contact {
		width: 100%;
		float: none;
		text-align: center;
		margin: 0;
		margin-bottom: 0.25rem;
	}

	#location {
		width: 100%;
		float: none;
		text-align: center;
		margin: 0;
		margin-bottom: 0.25rem;
		border-left-style: solid;
		border-right-style: none;
	}

	#skills .item {
		width: 100%;
	}
}
`},Q={partials:["awards.hbs","basics.hbs","cross-heading.hbs","dateRange.hbs","education.hbs","header.hbs","interests.hbs","keywords.hbs","languages.hbs","projects.hbs","publications.hbs","references.hbs","simpleDateRange.hbs","singleDate.hbs","skills.hbs","volunteer.hbs","work.hbs"],".":["README.md","TODOS.txt","index.js","package.json","partials","resume.hbs","style.css"]};Kt=function(t,e){var n=Gt(t);return n!==void 0?n:""},Jt=function(t,e){var n=mt(t);return n===void 0&&(n=[]),e&&e.withFileTypes?n.map(function(i){var s=gt(t)+"/"+i,r=mt(s)!==void 0;return{name:i,isFile:function(){return!r},isDirectory:function(){return r}}}):n},Yt=function(t){return Gt(t)!==void 0||mt(t)!==void 0},Zt=function(){},Xt=function(){},vt=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Qt=vt,$t=function(){},te=function(){},ee=function(){return{pipe:function(t){return t},on:function(){return this}}},ne=function(){return{write:function(){},end:function(){},on:function(){return this}}},on={readFileSync:Kt,readdirSync:Jt,existsSync:Yt,writeFileSync:Zt,mkdirSync:Xt,statSync:vt,lstatSync:Qt,unlinkSync:$t,rmdirSync:te,createReadStream:ee,createWriteStream:ne}});var ce={};zt(ce,{basename:()=>$,default:()=>ln,dirname:()=>kt,extname:()=>tt,isAbsolute:()=>ae,join:()=>ie,normalize:()=>oe,parse:()=>he,relative:()=>le,resolve:()=>se,sep:()=>re});var ie,se,kt,$,tt,re,ae,oe,le,he,ln,ue=ft(()=>{"use strict";u();ie=function(){return[].slice.call(arguments).join("/")},se=function(){return[].slice.call(arguments).join("/")},kt=function(t){return t.split("/").slice(0,-1).join("/")},$=function(t,e){var n=t.split("/").pop()||"";return e&&n.endsWith(e)?n.slice(0,-e.length):n},tt=function(t){var e=t.match(/\.[^.]+$/);return e?e[0]:""},re="/",ae=function(t){return t.charAt(0)==="/"},oe=function(t){return t},le=function(t,e){return e},he=function(t){return{root:"",dir:kt(t),base:$(t),ext:tt(t),name:$(t,tt(t))}},ln={join:ie,resolve:se,dirname:kt,basename:$,extname:tt,sep:re,isAbsolute:ae,normalize:oe,relative:le,parse:he}});var St=m(fe=>{"use strict";u();function pe(t){this.string=t}pe.prototype.toString=function(){return""+this.string};fe.default=pe});var V=m(N=>{"use strict";u();var hn=St().default,cn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},un=/[&<>"'`]/g,pn=/[&<>"'`]/;function fn(t){return cn[t]}function dn(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}N.extend=dn;var wt=Object.prototype.toString;N.toString=wt;var et=function(t){return typeof t=="function"};et(/x/)&&(et=function(t){return typeof t=="function"&&wt.call(t)==="[object Function]"});var et;N.isFunction=et;var de=Array.isArray||function(t){return t&&typeof t=="object"?wt.call(t)==="[object Array]":!1};N.isArray=de;function mn(t){return t instanceof hn?t.toString():t==null?"":t?(t=""+t,pn.test(t)?t.replace(un,fn):t):t+""}N.escapeExpression=mn;function gn(t){return!t&&t!==0?!0:!!(de(t)&&t.length===0)}N.isEmpty=gn;function vn(t,e){return(t?t+".":"")+e}N.appendContextPath=vn});var P=m(ge=>{"use strict";u();var xt=["description","fileName","lineNumber","message","name","number","stack"];function me(t,e){var n;e&&e.firstLine&&(n=e.firstLine,t+=" - "+n+":"+e.firstColumn);for(var i=Error.prototype.constructor.call(this,t),s=0;s<xt.length;s++)this[xt[s]]=i[xt[s]];n&&(this.lineNumber=n,this.column=e.firstColumn)}me.prototype=new Error;ge.default=me});var A=m(C=>{"use strict";u();var y=V(),_t=P().default,bn="2.0.0";C.VERSION=bn;var yn=6;C.COMPILER_REVISION=yn;var kn={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};C.REVISION_CHANGES=kn;var ve=y.isArray,Et=y.isFunction,be=y.toString,ye="[object Object]";function Nt(t,e){this.helpers=t||{},this.partials=e||{},Sn(this)}C.HandlebarsEnvironment=Nt;Nt.prototype={constructor:Nt,logger:U,log:ke,registerHelper:function(t,e){if(be.call(t)===ye){if(e)throw new _t("Arg not supported with multiple helpers");y.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){be.call(t)===ye?y.extend(this.partials,t):this.partials[t]=e},unregisterPartial:function(t){delete this.partials[t]}};function Sn(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new _t("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(e,n){var i=n.inverse,s=n.fn;if(e===!0)return s(this);if(e===!1||e==null)return i(this);if(ve(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):i(this);if(n.data&&n.ids){var r=nt(n.data);r.contextPath=y.appendContextPath(n.data.contextPath,n.name),n={data:r}}return s(e,n)}),t.registerHelper("each",function(e,n){if(!n)throw new _t("Must pass iterator to #each");var i=n.fn,s=n.inverse,r=0,a="",o,c;if(n.data&&n.ids&&(c=y.appendContextPath(n.data.contextPath,n.ids[0])+"."),Et(e)&&(e=e.call(this)),n.data&&(o=nt(n.data)),e&&typeof e=="object")if(ve(e))for(var l=e.length;r<l;r++)o&&(o.index=r,o.first=r===0,o.last=r===e.length-1,c&&(o.contextPath=c+r)),a=a+i(e[r],{data:o});else for(var p in e)e.hasOwnProperty(p)&&(o&&(o.key=p,o.index=r,o.first=r===0,c&&(o.contextPath=c+p)),a=a+i(e[p],{data:o}),r++);return r===0&&(a=s(this)),a}),t.registerHelper("if",function(e,n){return Et(e)&&(e=e.call(this)),!n.hash.includeZero&&!e||y.isEmpty(e)?n.inverse(this):n.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),t.registerHelper("with",function(e,n){Et(e)&&(e=e.call(this));var i=n.fn;if(y.isEmpty(e))return n.inverse(this);if(n.data&&n.ids){var s=nt(n.data);s.contextPath=y.appendContextPath(n.data.contextPath,n.ids[0]),n={data:s}}return i(e,n)}),t.registerHelper("log",function(e,n){var i=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;t.log(i,e)}),t.registerHelper("lookup",function(e,n){return e&&e[n]})}var U={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(U.level<=t){var n=U.methodMap[t];typeof console<"u"&&console[n]&&console[n].call(console,e)}}};C.logger=U;var ke=U.log;C.log=ke;var nt=function(t){var e=y.extend({},t);return e._parent=t,e};C.createFrame=nt});var we=m(q=>{"use strict";u();var Pt=V(),H=P().default,wn=A().COMPILER_REVISION,Se=A().REVISION_CHANGES,xn=A().createFrame;function En(t){var e=t&&t[0]||1,n=wn;if(e!==n)if(e<n){var i=Se[n],s=Se[e];throw new H("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+s+").")}else throw new H("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}q.checkRevision=En;function _n(t,e){if(!e)throw new H("No environment passed to template");if(!t||!t.main)throw new H("Unknown template object: "+typeof t);e.VM.checkRevision(t.compiler);var n=function(r,a,o,c,l,p,h,E,j){l&&(c=Pt.extend({},c,l));var O=e.VM.invokePartial.call(this,r,o,c,p,h,E,j);if(O==null&&e.compile){var Bt={helpers:p,partials:h,data:E,depths:j};h[o]=e.compile(r,{data:E!==void 0,compat:t.compat},e),O=h[o](c,Bt)}if(O!=null){if(a){for(var S=O.split(`
`),_=0,ht=S.length;_<ht&&!(!S[_]&&_+1===ht);_++)S[_]=a+S[_];O=S.join(`
`)}return O}else throw new H("The partial "+o+" could not be compiled when running in runtime-only mode")},i={lookup:function(r,a){for(var o=r.length,c=0;c<o;c++)if(r[c]&&r[c][a]!=null)return r[c][a]},lambda:function(r,a){return typeof r=="function"?r.call(a):r},escapeExpression:Pt.escapeExpression,invokePartial:n,fn:function(r){return t[r]},programs:[],program:function(r,a,o){var c=this.programs[r],l=this.fn(r);return a||o?c=it(this,r,l,a,o):c||(c=this.programs[r]=it(this,r,l)),c},data:function(r,a){for(;r&&a--;)r=r._parent;return r},merge:function(r,a){var o=r||a;return r&&a&&r!==a&&(o=Pt.extend({},a,r)),o},noop:e.VM.noop,compilerInfo:t.compiler},s=function(r,a){a=a||{};var o=a.data;s._setup(a),!a.partial&&t.useData&&(o=Cn(r,o));var c;return t.useDepths&&(c=a.depths?[r].concat(a.depths):[r]),t.main.call(i,r,i.helpers,i.partials,o,c)};return s.isTop=!0,s._setup=function(r){r.partial?(i.helpers=r.helpers,i.partials=r.partials):(i.helpers=i.merge(r.helpers,e.helpers),t.usePartial&&(i.partials=i.merge(r.partials,e.partials)))},s._child=function(r,a,o){if(t.useDepths&&!o)throw new H("must pass parent depths");return it(i,r,t[r],a,o)},s}q.template=_n;function it(t,e,n,i,s){var r=function(a,o){return o=o||{},n.call(t,a,t.helpers,t.partials,o.data||i,s&&[a].concat(s))};return r.program=e,r.depth=s?s.length:0,r}q.program=it;function Nn(t,e,n,i,s,r,a){var o={partial:!0,helpers:i,partials:s,data:r,depths:a};if(t===void 0)throw new H("The partial "+e+" could not be found");if(t instanceof Function)return t(n,o)}q.invokePartial=Nn;function Pn(){return""}q.noop=Pn;function Cn(t,e){return(!e||!("root"in e))&&(e=e?xn(e):{},e.root=t),e}});var Pe=m(Ne=>{"use strict";u();var xe=A(),Dn=St().default,On=P().default,Ct=V(),Ee=we(),_e=function(){var t=new xe.HandlebarsEnvironment;return Ct.extend(t,xe),t.SafeString=Dn,t.Exception=On,t.Utils=Ct,t.escapeExpression=Ct.escapeExpression,t.VM=Ee,t.template=function(e){return Ee.template(e,t)},t},st=_e();st.create=_e;st.default=st;Ne.default=st});var Dt=m(De=>{"use strict";u();var Ce=P().default;function v(t){t=t||{},this.firstLine=t.first_line,this.firstColumn=t.first_column,this.lastColumn=t.last_column,this.lastLine=t.last_line}var z={ProgramNode:function(t,e,n){v.call(this,n),this.type="program",this.statements=t,this.strip=e},MustacheNode:function(t,e,n,i,s){if(v.call(this,s),this.type="mustache",this.strip=i,n!=null&&n.charAt){var r=n.charAt(3)||n.charAt(2);this.escaped=r!=="{"&&r!=="&"}else this.escaped=!!n;t instanceof z.SexprNode?this.sexpr=t:this.sexpr=new z.SexprNode(t,e),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(t,e,n){v.call(this,n),this.type="sexpr",this.hash=e;var i=this.id=t[0],s=this.params=t.slice(1);this.isHelper=!!(s.length||e),this.eligibleHelper=this.isHelper||i.isSimple},PartialNode:function(t,e,n,i,s){v.call(this,s),this.type="partial",this.partialName=t,this.context=e,this.hash=n,this.strip=i,this.strip.inlineStandalone=!0},BlockNode:function(t,e,n,i,s){v.call(this,s),this.type="block",this.mustache=t,this.program=e,this.inverse=n,this.strip=i,n&&!e&&(this.isInverse=!0)},RawBlockNode:function(t,e,n,i){if(v.call(this,i),t.sexpr.id.original!==n)throw new Ce(t.sexpr.id.original+" doesn't match "+n,this);e=new z.ContentNode(e,i),this.type="block",this.mustache=t,this.program=new z.ProgramNode([e],{},i)},ContentNode:function(t,e){v.call(this,e),this.type="content",this.original=this.string=t},HashNode:function(t,e){v.call(this,e),this.type="hash",this.pairs=t},IdNode:function(t,e){v.call(this,e),this.type="ID";for(var n="",i=[],s=0,r="",a=0,o=t.length;a<o;a++){var c=t[a].part;if(n+=(t[a].separator||"")+c,c===".."||c==="."||c==="this"){if(i.length>0)throw new Ce("Invalid path: "+n,this);c===".."?(s++,r+="../"):this.isScoped=!0}else i.push(c)}this.original=n,this.parts=i,this.string=i.join("."),this.depth=s,this.idName=r+this.string,this.isSimple=t.length===1&&!this.isScoped&&s===0,this.stringModeValue=this.string},PartialNameNode:function(t,e){v.call(this,e),this.type="PARTIAL_NAME",this.name=t.original},DataNode:function(t,e){v.call(this,e),this.type="DATA",this.id=t,this.stringModeValue=t.stringModeValue,this.idName="@"+t.stringModeValue},StringNode:function(t,e){v.call(this,e),this.type="STRING",this.original=this.string=this.stringModeValue=t},NumberNode:function(t,e){v.call(this,e),this.type="NUMBER",this.original=this.number=t,this.stringModeValue=Number(t)},BooleanNode:function(t,e){v.call(this,e),this.type="BOOLEAN",this.bool=t,this.stringModeValue=t==="true"},CommentNode:function(t,e){v.call(this,e),this.type="comment",this.comment=t,this.strip={inlineStandalone:!0}}};De.default=z});var Ie=m(Oe=>{"use strict";u();var In=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(s,r,a,o,c,l,p){var h=l.length-1;switch(c){case 1:return o.prepareProgram(l[h-1].statements,!0),l[h-1];break;case 2:this.$=new o.ProgramNode(o.prepareProgram(l[h]),{},this._$);break;case 3:this.$=l[h];break;case 4:this.$=l[h];break;case 5:this.$=l[h];break;case 6:this.$=l[h];break;case 7:this.$=new o.ContentNode(l[h],this._$);break;case 8:this.$=new o.CommentNode(l[h],this._$);break;case 9:this.$=new o.RawBlockNode(l[h-2],l[h-1],l[h],this._$);break;case 10:this.$=new o.MustacheNode(l[h-1],null,"","",this._$);break;case 11:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!1,this._$);break;case 12:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!0,this._$);break;case 13:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 14:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 15:this.$={strip:o.stripFlags(l[h-1],l[h-1]),program:l[h]};break;case 16:this.$={path:l[h-1],strip:o.stripFlags(l[h-2],l[h])};break;case 17:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 18:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 19:this.$=new o.PartialNode(l[h-3],l[h-2],l[h-1],o.stripFlags(l[h-4],l[h]),this._$);break;case 20:this.$=new o.PartialNode(l[h-2],void 0,l[h-1],o.stripFlags(l[h-3],l[h]),this._$);break;case 21:this.$=new o.SexprNode([l[h-2]].concat(l[h-1]),l[h],this._$);break;case 22:this.$=new o.SexprNode([l[h]],null,this._$);break;case 23:this.$=l[h];break;case 24:this.$=new o.StringNode(l[h],this._$);break;case 25:this.$=new o.NumberNode(l[h],this._$);break;case 26:this.$=new o.BooleanNode(l[h],this._$);break;case 27:this.$=l[h];break;case 28:l[h-1].isHelper=!0,this.$=l[h-1];break;case 29:this.$=new o.HashNode(l[h],this._$);break;case 30:this.$=[l[h-2],l[h]];break;case 31:this.$=new o.PartialNameNode(l[h],this._$);break;case 32:this.$=new o.PartialNameNode(new o.StringNode(l[h],this._$),this._$);break;case 33:this.$=new o.PartialNameNode(new o.NumberNode(l[h],this._$));break;case 34:this.$=new o.DataNode(l[h],this._$);break;case 35:this.$=new o.IdNode(l[h],this._$);break;case 36:l[h-2].push({part:l[h],separator:l[h-1]}),this.$=l[h-2];break;case 37:this.$=[{part:l[h]}];break;case 38:this.$=[];break;case 39:l[h-1].push(l[h]);break;case 48:this.$=[];break;case 49:l[h-1].push(l[h]);break;case 52:this.$=[l[h]];break;case 53:l[h-1].push(l[h]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(s,r){throw new Error(s)},parse:function(s){var r=this,a=[0],o=[null],c=[],l=this.table,p="",h=0,E=0,j=0,O=2,Bt=1;this.lexer.setInput(s),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var S=this.lexer.yylloc;c.push(S);var _=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function ht(k){a.length=a.length-2*k,o.length=o.length-k,c.length=c.length-k}function $e(){var k;return k=r.lexer.lex()||1,typeof k!="number"&&(k=r.symbols_[k]||k),k}for(var g,ct,I,b,ni,ut,M={},J,w,Ut,Y;;){if(I=a[a.length-1],this.defaultActions[I]?b=this.defaultActions[I]:((g===null||typeof g>"u")&&(g=$e()),b=l[I]&&l[I][g]),typeof b>"u"||!b.length||!b[0]){var pt="";if(!j){Y=[];for(J in l[I])this.terminals_[J]&&J>2&&Y.push("'"+this.terminals_[J]+"'");this.lexer.showPosition?pt="Parse error on line "+(h+1)+`:
`+this.lexer.showPosition()+`
Expecting `+Y.join(", ")+", got '"+(this.terminals_[g]||g)+"'":pt="Parse error on line "+(h+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(pt,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:S,expected:Y})}}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+g);switch(b[0]){case 1:a.push(g),o.push(this.lexer.yytext),c.push(this.lexer.yylloc),a.push(b[1]),g=null,ct?(g=ct,ct=null):(E=this.lexer.yyleng,p=this.lexer.yytext,h=this.lexer.yylineno,S=this.lexer.yylloc,j>0&&j--);break;case 2:if(w=this.productions_[b[1]][1],M.$=o[o.length-w],M._$={first_line:c[c.length-(w||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(w||1)].first_column,last_column:c[c.length-1].last_column},_&&(M._$.range=[c[c.length-(w||1)].range[0],c[c.length-1].range[1]]),ut=this.performAction.call(M,p,E,h,this.yy,b[1],o,c),typeof ut<"u")return ut;w&&(a=a.slice(0,-1*w*2),o=o.slice(0,-1*w),c=c.slice(0,-1*w)),a.push(this.productions_[b[1]][0]),o.push(M.$),c.push(M._$),Ut=l[a[a.length-2]][a[a.length-1]],a.push(Ut);break;case 3:return!0}}return!0}},e=(function(){var i={EOF:1,parseError:function(r,a){if(this.yy.parser)this.yy.parser.parseError(r,a);else throw new Error(r)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var r=s.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var r=s.length,a=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===o.length?this.yylloc.first_column:0)+o[o.length-a.length].length-a[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),r=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,r,a,o,c,l;this._more||(this.yytext="",this.match="");for(var p=this._currentRules(),h=0;h<p.length&&(a=this._input.match(this.rules[p[h]]),!(a&&(!r||a[0].length>r[0].length)&&(r=a,o=h,!this.options.flex)));h++);return r?(l=r[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],s=this.performAction.call(this,this.yy,this,p[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return typeof r<"u"?r:this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(r){this.begin(r)}};return i.options={},i.performAction=function(r,a,o,c){function l(h,E){return a.yytext=a.yytext.substr(h,a.yyleng-E)}var p=c;switch(o){case 0:if(a.yytext.slice(-2)==="\\\\"?(l(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(l(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return a.yytext=a.yytext.substr(5,a.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return l(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return l(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return a.yytext=l(1,2).replace(/\\"/g,'"'),42;break;case 30:return a.yytext=l(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return a.yytext=l(1,2),50;break;case 37:return"INVALID";case 38:return 5}},i.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],i.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},i})();t.lexer=e;function n(){this.yy={}}return n.prototype=t,t.Parser=n,new n})();Oe.default=In});var Ae=m(rt=>{"use strict";u();var An=P().default;function Hn(t,e){return{left:t.charAt(2)==="~",right:e.charAt(e.length-3)==="~"}}rt.stripFlags=Hn;function Rn(t,e,n,i,s,r){if(t.sexpr.id.original!==i.path.original)throw new An(t.sexpr.id.original+" doesn't match "+i.path.original,t);var a=n&&n.program,o={left:t.strip.left,right:i.strip.right,openStandalone:It(e.statements),closeStandalone:Ot((a||e).statements)};if(t.strip.right&&R(e.statements,null,!0),a){var c=n.strip;c.left&&D(e.statements,null,!0),c.right&&R(a.statements,null,!0),i.strip.left&&D(a.statements,null,!0),Ot(e.statements)&&It(a.statements)&&(D(e.statements),R(a.statements))}else i.strip.left&&D(e.statements,null,!0);return s?new this.BlockNode(t,a,e,o,r):new this.BlockNode(t,e,a,o,r)}rt.prepareBlock=Rn;function Tn(t,e){for(var n=0,i=t.length;n<i;n++){var s=t[n],r=s.strip;if(r){var a=Ot(t,n,e,s.type==="partial"),o=It(t,n,e),c=r.openStandalone&&a,l=r.closeStandalone&&o,p=r.inlineStandalone&&a&&o;r.right&&R(t,n,!0),r.left&&D(t,n,!0),p&&(R(t,n),D(t,n)&&s.type==="partial"&&(s.indent=/([ \t]+$)/.exec(t[n-1].original)?RegExp.$1:"")),c&&(R((s.program||s.inverse).statements),D(t,n)),l&&(R(t,n),D((s.inverse||s.program).statements))}}return t}rt.prepareProgram=Tn;function Ot(t,e,n){e===void 0&&(e=t.length);var i=t[e-1],s=t[e-2];if(!i)return n;if(i.type==="content")return(s||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}function It(t,e,n){e===void 0&&(e=-1);var i=t[e+1],s=t[e+2];if(!i)return n;if(i.type==="content")return(s||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}function R(t,e,n){var i=t[e==null?0:e+1];if(!(!i||i.type!=="content"||!n&&i.rightStripped)){var s=i.string;i.string=i.string.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.string!==s}}function D(t,e,n){var i=t[e==null?t.length-1:e-1];if(!(!i||i.type!=="content"||!n&&i.leftStripped)){var s=i.string;return i.string=i.string.replace(n?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.string!==s,i.leftStripped}}});var Rt=m(Ht=>{"use strict";u();var At=Ie().default,He=Dt().default,Ln=Ae(),jn=V().extend;Ht.parser=At;var Re={};jn(Re,Ln,He);function Mn(t){return t.constructor===He.ProgramNode?t:(At.yy=Re,At.parse(t))}Ht.parse=Mn});var ot=m(at=>{"use strict";u();var Lt=P().default,Te=V().isArray,Vn=[].slice;function Tt(){}at.Compiler=Tt;Tt.prototype={compiler:Tt,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var n=0;n<e;n++){var i=this.opcodes[n],s=t.opcodes[n];if(i.opcode!==s.opcode||!Le(i.args,s.args))return!1}for(e=this.children.length,n=0;n<e;n++)if(!this.children[n].equals(t.children[n]))return!1;return!0},guid:0,compile:function(t,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds;var n=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},n)for(var i in n)this.options.knownHelpers[i]=n[i];return this.accept(t)},accept:function(t){return this[t.type](t)},program:function(t){for(var e=t.statements,n=0,i=e.length;n<i;n++)this.accept(e[n]);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(s,r){return s-r}),this},compileProgram:function(t){var e=new this.compiler().compile(t,this.options),n=this.guid++,i;this.usePartial=this.usePartial||e.usePartial,this.children[n]=e;for(var s=0,r=e.depths.list.length;s<r;s++)i=e.depths.list[s],!(i<2)&&this.addDepth(i-1);return n},block:function(t){var e=t.mustache,n=t.program,i=t.inverse;n&&(n=this.compileProgram(n)),i&&(i=this.compileProgram(i));var s=e.sexpr,r=this.classifySexpr(s);r==="helper"?this.helperSexpr(s,n,i):r==="simple"?(this.simpleSexpr(s),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("blockValue",s.id.original)):(this.ambiguousSexpr(s,n,i),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var e=t.pairs,n,i;for(this.opcode("pushHash"),n=0,i=e.length;n<i;n++)this.pushParam(e[n][1]);for(;n--;)this.opcode("assignToHash",e[n][0]);this.opcode("popHash")},partial:function(t){var e=t.partialName;this.usePartial=!0,t.hash?this.accept(t.hash):this.opcode("push","undefined"),t.context?this.accept(t.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",e.name,t.indent||""),this.opcode("append")},content:function(t){t.string&&this.opcode("appendContent",t.string)},mustache:function(t){this.sexpr(t.sexpr),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(t,e,n){var i=t.id,s=i.parts[0],r=e!=null||n!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.ID(i),this.opcode("invokeAmbiguous",s,r)},simpleSexpr:function(t){var e=t.id;e.type==="DATA"?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,n){var i=this.setupFullMustacheParams(t,e,n),s=t.id,r=s.parts[0];if(this.options.knownHelpers[r])this.opcode("invokeKnownHelper",i.length,r);else{if(this.options.knownHelpersOnly)throw new Lt("You specified knownHelpersOnly, but used the unknown helper "+r,t);s.falsy=!0,this.ID(s),this.opcode("invokeHelper",i.length,s.original,s.isSimple)}},sexpr:function(t){var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0];e?this.opcode("lookupOnContext",t.parts,t.falsy,t.isScoped):this.opcode("pushContext")},DATA:function(t){this.options.data=!0,this.opcode("lookupData",t.id.depth,t.id.parts)},STRING:function(t){this.opcode("pushString",t.string)},NUMBER:function(t){this.opcode("pushLiteral",t.number)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:Vn.call(arguments,1)})},addDepth:function(t){t!==0&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifySexpr:function(t){var e=t.isHelper,n=t.eligibleHelper,i=this.options;if(n&&!e){var s=t.id.parts[0];i.knownHelpers[s]?e=!0:i.knownHelpersOnly&&(n=!1)}return e?"helper":n?"ambiguous":"simple"},pushParams:function(t){for(var e=0,n=t.length;e<n;e++)this.pushParam(t[e])},pushParam:function(t){this.stringParams?(t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",t.stringModeValue,t.type),t.type==="sexpr"&&this.sexpr(t)):(this.trackIds&&this.opcode("pushId",t.type,t.idName||t.stringModeValue),this.accept(t))},setupFullMustacheParams:function(t,e,n){var i=t.params;return this.pushParams(i),this.opcode("pushProgram",e),this.opcode("pushProgram",n),t.hash?this.hash(t.hash):this.opcode("emptyHash"),i}};function qn(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new Lt("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i=n.parse(t),s=new n.Compiler().compile(i,e);return new n.JavaScriptCompiler().compile(s,e)}at.precompile=qn;function Fn(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new Lt("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i;function s(){var a=n.parse(t),o=new n.Compiler().compile(a,e),c=new n.JavaScriptCompiler().compile(o,e,void 0,!0);return n.template(c)}var r=function(a,o){return i||(i=s()),i.call(this,a,o)};return r._setup=function(a){return i||(i=s()),i._setup(a)},r._child=function(a,o,c){return i||(i=s()),i._child(a,o,c)},r}at.compile=Fn;function Le(t,e){if(t===e)return!0;if(Te(t)&&Te(e)&&t.length===e.length){for(var n=0;n<t.length;n++)if(!Le(t[n],e[n]))return!1;return!0}}});var qe=m(Ve=>{"use strict";u();var Bn=A().COMPILER_REVISION,Un=A().REVISION_CHANGES,jt=P().default;function W(t){this.value=t}function T(){}T.prototype={nameLookup:function(t,e){return T.isValidJavaScriptVariableName(e)?t+"."+e:t+"['"+e+"']"},depthedLookup:function(t){return this.aliases.lookup="this.lookup",'lookup(depths, "'+t+'")'},compilerInfo:function(){var t=Bn,e=Un[t];return[t,e]},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,e,n,i){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!n,this.context=n||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.depths.list.length||this.options.compat;var s=t.opcodes,r,a,o;for(a=0,o=s.length;a<o;a++)r=s[a],this[r.opcode].apply(this,r.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new jt("Compile completed with content left on stack");var c=this.createFunctionContext(i);if(this.isChild)return c;var l={compiler:this.compilerInfo(),main:c},p=this.context.programs;for(a=0,o=p.length;a<o;a++)p[a]&&(l[a]=p[a]);return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.options.compat&&(l.compat=!0),i||(l.compiler=JSON.stringify(l.compiler),l=this.objectLiteral(l)),l},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(t){var e="",n=this.stackVars.concat(this.registers.list);n.length>0&&(e+=", "+n.join(", "));for(var i in this.aliases)this.aliases.hasOwnProperty(i)&&(e+=", "+i+"="+this.aliases[i]);var s=["depth0","helpers","partials","data"];this.useDepths&&s.push("depths");var r=this.mergeSource(e);return t?(s.push(r),Function.apply(this,s)):"function("+s.join(",")+`) {
  `+r+"}"},mergeSource:function(t){for(var e="",n,i=!this.forceBuffer,s,r=0,a=this.source.length;r<a;r++){var o=this.source[r];o.appendToBuffer?n?n=n+`
    + `+o.content:n=o.content:(n&&(e?e+="buffer += "+n+`;
  `:(s=!0,e=n+`;
  `),n=void 0),e+=o+`
  `,this.environment.isSimple||(i=!1))}return i?(n||!e)&&(e+="return "+(n||'""')+`;
`):(t+=", buffer = "+(s?"":this.initializeBuffer()),n?e+="return buffer + "+n+`;
`:e+=`return buffer;
`),t&&(e="var "+t.substring(2)+(s?"":`;
  `)+e),e},blockValue:function(t){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams(t,0,e);var n=this.popStack();e.splice(1,0,n),this.push("blockHelperMissing.call("+e.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams("",0,t,!0),this.flushInline();var e=this.topStack();t.splice(1,0,e),this.pushSource("if (!"+this.lastHelper+") { "+e+" = blockHelperMissing.call("+t.join(", ")+"); }")},appendContent:function(t){this.pendingContent&&(t=this.pendingContent+t),this.pendingContent=t},append:function(){this.flushInline();var t=this.popStack();this.pushSource("if ("+t+" != null) { "+this.appendToBuffer(t)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,n){var i=0,s=t.length;for(!n&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[i++])):this.pushContext();i<s;i++)this.replaceStack(function(r){var a=this.nameLookup(r,t[i],"context");return e?" && "+a:" != null ? "+a+" : "+r})},lookupData:function(t,e){t?this.pushStackLiteral("this.data(data, "+t+")"):this.pushStackLiteral("data");for(var n=e.length,i=0;i<n;i++)this.replaceStack(function(s){return" && "+this.nameLookup(s,e[i],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),e!=="sexpr"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+t.ids.join(",")+"}"),this.stringParams&&(this.push("{"+t.contexts.join(",")+"}"),this.push("{"+t.types.join(",")+"}")),this.push(`{
    `+t.values.join(`,
    `)+`
  }`)},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},invokeHelper:function(t,e,n){this.aliases.helperMissing="helpers.helperMissing";var i=this.popStack(),s=this.setupHelper(t,e),r=(n?s.name+" || ":"")+i+" || helperMissing";this.push("(("+r+").call("+s.callParams+"))")},invokeKnownHelper:function(t,e){var n=this.setupHelper(t,e);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(t,e){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var n=this.popStack();this.emptyHash();var i=this.setupHelper(0,t,e),s=this.lastHelper=this.nameLookup("helpers",t,"helper");this.push("((helper = (helper = "+s+" || "+n+") != null ? helper : helperMissing"+(i.paramsInit?"),("+i.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+i.callParams+") : helper))")},invokePartial:function(t,e){var n=[this.nameLookup("partials",t,"partial"),"'"+e+"'","'"+t+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?n.push("data"):this.options.compat&&n.push("undefined"),this.options.compat&&n.push("depths"),this.push("this.invokePartial("+n.join(", ")+")")},assignToHash:function(t){var e=this.popStack(),n,i,s;this.trackIds&&(s=this.popStack()),this.stringParams&&(i=this.popStack(),n=this.popStack());var r=this.hash;n&&r.contexts.push("'"+t+"': "+n),i&&r.types.push("'"+t+"': "+i),s&&r.ids.push("'"+t+"': "+s),r.values.push("'"+t+"': ("+e+")")},pushId:function(t,e){t==="ID"||t==="DATA"?this.pushString(e):t==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:T,compileChildren:function(t,e){for(var n=t.children,i,s,r=0,a=n.length;r<a;r++){i=n[r],s=new this.compiler;var o=this.matchExistingProgram(i);o==null?(this.context.programs.push(""),o=this.context.programs.length,i.index=o,i.name="program"+o,this.context.programs[o]=s.compile(i,e,this.context,!this.precompile),this.context.environments[o]=i,this.useDepths=this.useDepths||s.useDepths):(i.index=o,i.name="program"+o)}},matchExistingProgram:function(t){for(var e=0,n=this.context.environments.length;e<n;e++){var i=this.context.environments[e];if(i&&i.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],n=e.depths.list,i=this.useDepths,s,r=[e.index,"data"];return i&&r.push("depths"),"this.program("+r.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new W(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var e=this.incrStack();return this.pushSource(e+" = "+t+";"),this.compileStack.push(e),e},replaceStack:function(t){var e="",n=this.isInline(),i,s,r;if(!this.isInline())throw new jt("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof W)e=i=a.value,r=!0;else{s=!this.stackSlot;var o=s?this.incrStack():this.topStackName();e="("+this.push(o)+" = "+a+")",i=this.topStack()}var c=t.call(this,i);r||this.popStack(),s&&this.stackSlot--,this.push("("+e+c+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var e=0,n=t.length;e<n;e++){var i=t[e];i instanceof W?this.compileStack.push(i):this.pushStack(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),n=(e?this.inlineStack:this.compileStack).pop();if(!t&&n instanceof W)return n.value;if(!e){if(!this.stackSlot)throw new jt("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof W?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(this.quotedString(n)+":"+t[n]);return"{"+e.join(",")+"}"},setupHelper:function(t,e,n){var i=[],s=this.setupParams(e,t,i,n),r=this.nameLookup("helpers",e,"helper");return{params:i,paramsInit:s,name:r,callParams:[this.contextName(0)].concat(i).join(", ")}},setupOptions:function(t,e,n){var i={},s=[],r=[],a=[],o,c,l;i.name=this.quotedString(t),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack()),c=this.popStack(),l=this.popStack(),(l||c)&&(l||(l="this.noop"),c||(c="this.noop"),i.fn=l,i.inverse=c);for(var p=e;p--;)o=this.popStack(),n[p]=o,this.trackIds&&(a[p]=this.popStack()),this.stringParams&&(r[p]=this.popStack(),s[p]=this.popStack());return this.trackIds&&(i.ids="["+a.join(",")+"]"),this.stringParams&&(i.types="["+r.join(",")+"]",i.contexts="["+s.join(",")+"]"),this.options.data&&(i.data="data"),i},setupParams:function(t,e,n,i){var s=this.objectLiteral(this.setupOptions(t,e,n));return i?(this.useRegister("options"),n.push("options"),"options="+s):(n.push(s),"")}};var je="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),zn=T.RESERVED_WORDS={};for(lt=0,Me=je.length;lt<Me;lt++)zn[je[lt]]=!0;var lt,Me;T.isValidJavaScriptVariableName=function(t){return!T.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};Ve.default=T});var Ue=m(Be=>{"use strict";u();var F=Pe().default,Wn=Dt().default,Gn=Rt().parser,Kn=Rt().parse,Jn=ot().Compiler,Yn=ot().compile,Zn=ot().precompile,Xn=qe().default,Qn=F.create,Fe=function(){var t=Qn();return t.compile=function(e,n){return Yn(e,n,t)},t.precompile=function(e,n){return Zn(e,n,t)},t.AST=Wn,t.Compiler=Jn,t.JavaScriptCompiler=Xn,t.Parser=Gn,t.parse=Kn,t};F=Fe();F.create=Fe;F.default=F;Be.default=F});var Vt=m(ze=>{"use strict";u();function Mt(){}Mt.prototype={constructor:Mt,accept:function(t){return this[t.type](t)}};ze.default=Mt});var We=m(qt=>{"use strict";u();var $n=Vt().default;function ti(t){return new d().accept(t)}qt.print=ti;function d(){this.padding=0}qt.PrintVisitor=d;d.prototype=new $n;d.prototype.pad=function(t){for(var e="",n=0,i=this.padding;n<i;n++)e=e+"  ";return e=e+t+`
`,e};d.prototype.program=function(t){var e="",n=t.statements,i,s;for(i=0,s=n.length;i<s;i++)e=e+this.accept(n[i]);return this.padding--,e};d.prototype.block=function(t){var e="";return e=e+this.pad("BLOCK:"),this.padding++,e=e+this.accept(t.mustache),t.program&&(e=e+this.pad("PROGRAM:"),this.padding++,e=e+this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e=e+this.pad("{{^}}"),this.padding++,e=e+this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e};d.prototype.sexpr=function(t){for(var e=t.params,n=[],i,s=0,r=e.length;s<r;s++)n.push(this.accept(e[s]));return e="["+n.join(", ")+"]",i=t.hash?" "+this.accept(t.hash):"",this.accept(t.id)+" "+e+i};d.prototype.mustache=function(t){return this.pad("{{ "+this.accept(t.sexpr)+" }}")};d.prototype.partial=function(t){var e=this.accept(t.partialName);return t.context&&(e+=" "+this.accept(t.context)),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")};d.prototype.hash=function(t){for(var e=t.pairs,n=[],i,s,r=0,a=e.length;r<a;r++)i=e[r][0],s=this.accept(e[r][1]),n.push(i+"="+s);return"HASH{"+n.join(", ")+"}"};d.prototype.STRING=function(t){return'"'+t.string+'"'};d.prototype.NUMBER=function(t){return"NUMBER{"+t.number+"}"};d.prototype.BOOLEAN=function(t){return"BOOLEAN{"+t.bool+"}"};d.prototype.ID=function(t){var e=t.parts.join("/");return t.parts.length>1?"PATH:"+e:"ID:"+e};d.prototype.PARTIAL_NAME=function(t){return"PARTIAL:"+t.name};d.prototype.DATA=function(t){return"@"+this.accept(t.id)};d.prototype.content=function(t){return this.pad("CONTENT[ '"+t.string+"' ]")};d.prototype.comment=function(t){return this.pad("{{! '"+t.comment+"' }}")}});var Je=m((Mi,Ke)=>{u();var G=Ue().default;G.Visitor=Vt().default;var Ge=We();G.PrintVisitor=Ge.PrintVisitor;G.print=Ge.print;Ke.exports=G;typeof B<"u"&&B.extensions&&(Ft=function(t,e){var n=(yt(),dt(bt)),i=n.readFileSync(e,"utf8");t.exports=G.compile(i)},B.extensions[".handlebars"]=Ft,B.extensions[".hbs"]=Ft);var Ft});var Xe=m((Fi,Ze)=>{"use strict";u();var K=(yt(),dt(bt)),Ye=(ue(),dt(ce)),x=Je();x.registerHelper("cleanUrl",function(t){let e=t;return t.search("^http://")!=-1?e=t.slice(7):t.search("^https://")!=-1&&(e=t.slice(8)),e.charAt(e.length-1)==="/"&&(e=e.slice(0,e.length-1)),e});x.registerHelper("lowercase",function(t){return t.toLowerCase()});x.registerHelper("projectTypeIcon",function(t){switch(t.toLowerCase()){case"volunteering":return"fa-life-bouy";case"presentation":return"fa-pie-chart";case"talk":return"fa-signing";case"application":return"fa-code";case"conference":return"fa-building"}});x.registerHelper("absoluteUrl",function(t){return t.search("^http://")!=-1||t.search("^https://")!=-1?t:"http://"+t});x.registerHelper("durationOf",function(t){let e=new Date;t.endDate!=null&&(e=new Date(t.endDate));let n=new Date(e-new Date(t.startDate)),i=n.getFullYear()-1970;if(i<=0){let s=n.getMonth();if(s<=0){let r=n.getDate();return r+" day"+(r==1?"":"s")}else return s+" month"+(s==1?"":"s")}else return i+" year"+(i==1?"":"s")});x.registerHelper("shortDate",function(t){let e=new Date(t);return e.toDateString().split(" ")[1]+" "+e.getFullYear()});x.registerHelper("niceDate",function(t){let e=new Date(t).toDateString().split(" ");return`${e[1]} ${e[2]} ${e[3]}`});function ei(t){var e="";try{e=K.readFileSync("//node_modules/normalize.css/normalize.css","utf-8")}catch{console.log("WARNING: Normalize.css is not installed. Have you run 'npm install'?")}var n=K.readFileSync("//style.css","utf-8"),i=K.readFileSync("//resume.hbs","utf-8"),s=Ye.join("/","partials"),r=K.readdirSync(s);return r.forEach(function(a){var o=/^([^.]+).hbs$/.exec(a);if(o){var c=o[1],l=Ye.join(s,a),p=K.readFileSync(l,"utf8");x.registerPartial(c,p)}}),x.compile(i)({normalizeCss:e,css:n,resume:t})}Ze.exports={render:ei}});u();var L=an(Xe(),1),Qe=L.default??L,Ui=Qe.render??L.render,zi=Qe.pdfRenderOptions??L.pdfRenderOptions;export{zi as pdfRenderOptions,Ui as render};
