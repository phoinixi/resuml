var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var tn=Object.create;var Y=Object.defineProperty;var en=Object.getOwnPropertyDescriptor;var nn=Object.getOwnPropertyNames;var sn=Object.getPrototypeOf,rn=Object.prototype.hasOwnProperty;var F=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var pt=(t,e)=>()=>(t&&(e=t(t=0)),e);var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),zt=(t,e)=>{for(var n in e)Y(t,n,{get:e[n],enumerable:!0})},Wt=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of nn(e))!rn.call(t,s)&&s!==n&&Y(t,s,{get:()=>e[s],enumerable:!(i=en(e,s))||i.enumerable});return t};var an=(t,e,n)=>(n=t!=null?tn(sn(t)):{},Wt(e||!t||!t.__esModule?Y(n,"default",{value:t,enumerable:!0}):n,t)),dt=t=>Wt(Y({},"__esModule",{value:!0}),t);var u=pt(()=>{});var vt={};zt(vt,{createReadStream:()=>te,createWriteStream:()=>ee,default:()=>on,existsSync:()=>Kt,lstatSync:()=>Zt,mkdirSync:()=>Xt,readFileSync:()=>Gt,readdirSync:()=>Jt,rmdirSync:()=>$t,statSync:()=>gt,unlinkSync:()=>Qt,writeFileSync:()=>Yt});function mt(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Ut(t){var e=mt(t);if(X[e]!==void 0)return X[e];for(var n=Object.keys(X),i=0;i<n.length;i++)if(e.endsWith("/"+n[i])||e===n[i])return X[n[i]]}function ft(t){var e=mt(t);if((e===""||e===".")&&B["."]!==void 0)return B["."];if(B[e]!==void 0)return B[e];for(var n=Object.keys(B),i=0;i<n.length;i++)if(e.endsWith("/"+n[i])||e===n[i])return B[n[i]]}var X,B,Gt,Jt,Kt,Yt,Xt,gt,Zt,Qt,$t,te,ee,on,bt=pt(()=>{"use strict";u();X={"package.json":`{
  "name": "jsonresume-theme-hyperfocus",
  "version": "0.1.5",
  "description": "Boilerplate theme for JSON Resume",
  "author": "Mattias Erming",
  "repository": {
    "type": "git",
    "url": "https://github.com/erming/jsonresume-theme-boilerplate"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  }
}
`,"partials/awards.hbs":`{{#if resume.awards.length}}
<section id="awards">
	<h2>Awards</h2>
	{{#each resume.awards}}
	<div class="item">
		{{#if title}}
		<div class="title">
			{{title}}
		</div>
		{{/if}}
		{{#if date}}
		<div class="date">
			{{date}}
		</div>
		{{/if}}
		{{#if awarder}}
		<div class="awarder">
			{{awarder}}
		</div>
		{{/if}}
		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"partials/basics.hbs":`{{#resume.basics}}
	<h1>{{name}}</h1>
	<h2>{{label}}</h2>
	<section id="basics">
		<div class="contact">
		{{#if website}}
		<div class="website">
			<strong>Website</strong>
			{{website}}
		</div>
		{{/if}}
		{{#if email}}
		<div class="email">
			<strong>Email</strong>
			{{email}}
		</div>
		{{/if}}
		{{#if phone}}
		<div class="phone">
			<strong>Phone</strong>
			{{phone}}
		</div>
		{{/if}}
		</div>
		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
		{{#location}}
		<h3>Location</h3>
		<section id="location">
			{{#if address}}
			<div class="address">
				<strong>Address</strong>
				{{address}}
			</div>
			{{/if}}
			{{#if postalCode}}
			<div class="postalCode">
				<strong>Postal code</strong>
				{{postalCode}}
			</div>
			{{/if}}
			{{#if city}}
			<div class="city">
				<strong>City</strong>
				{{city}}
			</div>
			{{/if}}
			{{#if countryCode}}
			<div class="countryCode">
				<strong>Country code</strong>
				{{countryCode}}
			</div>
			{{/if}}
			{{#if region}}
			<div class="region">
				<strong>Region</strong>
				{{region}}
			</div>
			{{/if}}
		</section>
		{{/location}}
		{{#if profiles.length}}
		<h3>Profiles</h3>
		<section id="profiles">
			{{#each profiles}}
			<div class="item">
				{{#if network}}
				<strong class="network">
					{{network}}
				</strong>
				{{/if}}
				{{#if username}}
				<div class="username">
					{{username}}
				</div>
				{{/if}}
				{{#if url}}
				<div class="url">
					<a href="{{url}}">Link</a>
				</div>
				{{/if}}
			</div>
			{{/each}}
		</section>
		{{/if}}
	</section>
{{/resume.basics}}`,"partials/education.hbs":`{{#if resume.education.length}}
<section id="education">
	<h2>Education</h2>
	{{#each resume.education}}
	<div class="item">
		<div class="date">
			{{#if startDate}}
			<span class="startDate">
				{{startDate}}
			</span>
			{{/if}}
			{{#if endDate}}
			<span class="endDate">
				- {{endDate}}
			</span>
			{{else}}
			<span class="endDate">
				- Present
			</span>
			{{/if}}
		</div>
		{{#if institution}}
		<div class="institution">
			{{institution}}
		</div>
		{{/if}}
		{{#if area}}
		<div class="area">
			{{area}}
		</div>
		{{/if}}
		{{#if studyType}}
		<div class="studyType">
			{{studyType}}
		</div>
		{{/if}}
		{{#if gpa}}
		<div class="gpa">
			GPA: {{gpa}}
		</div>
		{{/if}}
		{{#if courses.length}}
		<ul class="courses">
			{{#each courses}}
			<li>{{.}}</li>
			{{/each}}
		</ul>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"partials/interests.hbs":`{{#if resume.interests.length}}
<section id="interests">
	<h2>Interests</h2>
	{{#each resume.interests}}
	<div class="item">
		{{#if name}}
		<div class="name">
			{{name}}
		</div>
		{{/if}}
		{{#if keywords.length}}
		<ul class="keywords">
			{{#each keywords}}
			<li>{{.}}</li>
			{{/each}}
		</ul>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"partials/languages.hbs":`{{#if resume.languages.length}}
<section id="languages">
	<h2>Languages</h2>
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
{{/if}}`,"partials/publications.hbs":`{{#if resume.publications.length}}
<section id="publications">
	<h2>Publications</h2>
	{{#each resume.publications}}
	<div class="item">
		{{#if name}}
		<div class="name">
			{{name}}
		</div>
		{{/if}}
		{{#if publisher}}
		<div class="publisher">
			{{publisher}}
		</div>
		{{/if}}
		{{#if releaseDate}}
		<div class="releaseDate">
			{{releaseDate}}
		</div>
		{{/if}}
		{{#if website}}
		<div class="website">
			<a href="{{website}}">Link</a>
		</div>
		{{/if}}
		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"partials/references.hbs":`{{#if resume.references.length}}
<section id="references">
	<h2>References</h2>
	{{#each resume.references}}
	<div class="item">
		{{#if reference}}
		<blockquote class="reference">
			{{reference}}
		</blockquote>
		{{/if}}
		{{#if name}}
		<div class="name">
			\u2014 {{name}}
		</div>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"partials/skills.hbs":`{{#if resume.skills.length}}
<section id="skills">
	<h2>Skills</h2>
	{{#each resume.skills}}
	<div class="item">
		{{#if name}}
		<div class="name">
			{{name}}
		</div>
		{{/if}}
		{{#if level}}
		<div class="level">
			<em>{{level}}</em>
		</div>
		{{/if}}
		{{#if keywords.length}}
		<ul class="keywords">
			{{#each keywords}}
			<li>{{.}}</li>
			{{/each}}
		</ul>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"partials/volunteer.hbs":`{{#if resume.volunteer.length}}
<section id="volunteer">
	<h2>Volunteer</h2>
	{{#each resume.volunteer}}
	<div class="item">
		{{#if organization}}
		<h3 class="company">
			{{organization}}
		</h3>
		{{/if}}
		<div class="date">
			{{#if startDate}}
			<span class="startDate">
				{{startDate}}
			</span>
			{{/if}}
			{{#if endDate}}
			<span class="endDate">
				- {{endDate}}
			</span>
			{{else}}
			<span class="endDate">
				- Present
			</span>
			{{/if}}
		</div>
		{{#if position}}
		<div class="position">
			{{position}}
		</div>
		{{/if}}
		{{#if website}}
		<div class="website">
			<a href="{{website}}">{{website}}</a>
		</div>
		{{/if}}
		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
		{{#if highlights.length}}
		<ul class="highlights">
			{{#each highlights}}
			<li>{{.}}</li>
			{{/each}}
		</ul>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"partials/work.hbs":`{{#if resume.work.length}}
<section id="work">
	<h2>Work</h2>
	{{#each resume.work}}
	<div class="item">
		{{#if company}}
		<h3 class="name">
			{{company}}
		</h3>
		{{/if}}
		<div class="date">
			{{#if startDate}}
			<span class="startDate">
				{{startDate}}
			</span>
			{{/if}}
			{{#if endDate}}
			<span class="endDate">
				- {{endDate}}
			</span>
			{{else}}
			<span class="endDate">
				- Present
			</span>
			{{/if}}
		</div>
		{{#if position}}
		<div class="position">
			{{position}}
		</div>
		{{/if}}
		{{#if website}}
		<div class="website">
			<a href="{{website}}">{{website}}</a>
		</div>
		{{/if}}
		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
		{{#if highlights.length}}
		<ul class="highlights">
			{{#each highlights}}
			<li>{{.}}</li>
			{{/each}}
		</ul>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`,"public/index.html":`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Sjors Buitenhuis</title>
    <meta name="description" content="Experienced DevOps engineer with an entrepreneurial mindset. Playing with (the latest) technologies and working on digital business ideas has always been a hobby from a young age. I thoroughly enjoy both development and operations, as well as working on exciting web related projects. Coding every day in order to reach expert level proficiency in automation engineering and full stack web development." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
    <style>:root {
  /* Colors */
  --primaryColor: #212529;
  --secondaryColor: #95a5a6;
  --accentColor: #f1c40f;
  --linkColor: #2ecc71;
  --mutedColor: #f4f6f6;

  /* Typography */
  --ratio: 1.25;
  --scale0: 1rem;
  --scale1: calc(var(--scale0) * var(--ratio));
  --scale2: calc(var(--scale1) * var(--ratio));
  --scale3: calc(var(--scale2) * var(--ratio));
  --scale4: calc(var(--scale3) * var(--ratio));
  --scale5: calc(var(--scale4) * var(--ratio));
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 14px;
}

body {
  color: var(--primaryColor);
  display: grid;
  font: 1em/1.5 Lato, sans-serif;
  gap: 2em;
  grid-template-columns:
    [full-start]
    1fr
    [main-start side-start]
    minmax(min-content, 12em)
    [side-end content-start]
    minmax(min-content, 36em)
    [main-end content-end]
    1fr
    [full-end];
  grid-template-rows: auto [content] 0;
  margin-bottom: 4em;
}

body::before {
  content: '';
  grid-column: full;
  grid-row: content;
}

ol,
ul {
  padding-left: 1em;
}

li + li {
  margin-top: 0.2em;
}

li::marker {
  color: var(--mutedColor);
}

a {
  color: var(--linkColor);
  text-decoration: none;
  transition: color 0.2s;
}

a:focus,
a:hover {
  color: var(--accentColor);
}

h1,
h2,
h3,
h5 {
  font-weight: normal;
}

h1,
h2,
h3 {
  line-height: 1.2;
}

h1 {
  font-size: var(--scale5);
}

h2 {
  color: var(--secondaryColor);
  font-size: var(--scale4);
}

h3 {
  color: var(--accentColor);
  font-size: var(--scale3);
  grid-column: side;
  margin-bottom: 1rem;
}

h4 {
  font-size: var(--scale2);
}

h5 {
  font-size: var(--scale1);
}

h6 {
  font-size: var(--scale0);
}

blockquote {
  border-left: 0.2em solid var(--mutedColor);
  padding-left: 1em;
}

cite {
  color: var(--secondaryColor);
  font-style: inherit;
}

cite::before {
  content: '\u2014 ';
}

.masthead {
  background: var(--mutedColor);
  display: inherit;
  gap: inherit;
  grid-column: full;
  grid-template-columns: inherit;
  padding: 4em 0;
  row-gap: 0;
}

.masthead > *,
section {
  grid-column: main;
}

article > * + *,
blockquote > * + * {
  margin-top: 0.6em;
}

.stack {
  display: grid;
  gap: 1.5em;
}

.grid-list {
  display: grid;
  gap: 1em;
}

.spaced-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.spaced-list:first-child::before {
  border-bottom: 1px solid var(--mutedColor);
  content: '';
  flex-grow: 1;
  margin: 0 1em;
  order: 1;
}

.spaced-list > :nth-child(2) {
  order: 2;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

.tag-list > li {
  background: var(--mutedColor);
  margin: 0 0.2em 0.2em 0;
  padding: 0.2em 0.6em;
}

@media print, (min-width: 48em) {
  h3 {
    text-align: right;
    margin-bottom: inherit;
  }

  .masthead > *,
  section {
    grid-column: content;
  }

  section {
    display: contents;
  }

  .grid-list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
  </head>
  <body>
      <header class="masthead">
          <h1>Sjors Buitenhuis</h1>
          <h2>DevOps engineer</h2>
      </header>
      <section id="contact">
        <h3>Contact</h3>
        <div class="grid-list">
            <div>
              <h4>Email</h4>
              <a href="mailto:sjorsbuitenhuis@hotmail.com">sjorsbuitenhuis@hotmail.com</a>
            </div>
            <div>
              <h4>Phone</h4>
              (+316)40417617
            </div>
        </div>
      </section>
        <section id="about">
          <h3>About</h3>
          <article>
            <p>Experienced DevOps engineer with an entrepreneurial mindset. Playing with (the latest) technologies and working on digital business ideas has always been a hobby from a young age. I thoroughly enjoy both development and operations, as well as working on exciting web related projects. Coding every day in order to reach expert level proficiency in automation engineering and full stack web development.</p>
          </article>
        </section>
        <section id="profiles">
          <h3>Profiles</h3>
          <div class="grid-list">
              <div>
                  <h4>Github</h4>
                    <a href="https://github.com/hyperfocus1337">Hyperfocus1337</a>
              </div>
              <div>
                  <h4>Gitlab</h4>
                    <a href="https://gitlab.com/hyperfocus">Hyperfocus</a>
              </div>
              <div>
                  <h4>Twitter</h4>
                    <a href="http://twitter.com/hyperfocus1337">Hyperfocus</a>
              </div>
              <div>
                  <h4>StackOverflow</h4>
                    <a href="https://stackoverflow.com/users/1018719/hyperfocus">Hyperfocus</a>
              </div>
              <div>
                  <h4>StackOverflow</h4>
                    <a href="https://stackoverflow.com/users/7225998/hyperfocus1337">Hyperfocus1337</a>
              </div>
              <div>
                  <h4>ServerFault</h4>
                    <a href="https://serverfault.com/users/109800/hyperfocus">Hyperfocus</a>
              </div>
              <div>
                  <h4>Drupal Answers</h4>
                    <a href="https://drupal.stackexchange.com/users/70512/hyperfocus1337">Hyperfocus</a>
              </div>
          </div>
        </section>

      <section id="work">
        <h3>Work</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4></h4>
                  <span>
                    <time datetime="2020-01-01">Jan 2020</time> \u2013
                    <time datetime="2014-01-01">Jan 2014</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>DevOps engineer</strong>
                </div>
              </header>
                <p>Built several Kubernetes clusters with EKS and Rancher for millions of British citizens using Gov verify UK</p>
                <h5>Highlights</h5>
                <ul>
                    <li>Saved 25% on the total infrastructure costs</li>
                </ul>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4></h4>
                  <span>
                    <time datetime="2019-11-01">Nov 2019</time> \u2013
                    <time datetime="2020-04-01">Apr 2020</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Cloud Computing Researcher</strong>
                </div>
              </header>
                <p>Researched, designed and compared different high availability architecture designs on Amazon Web Services, Microsoft Azure and Google Cloud. Compared SLA terms and pricing from different managed hosting companies. Discovered monthly savings of ~1500 euro compared to previous hosting arrangement. Scored an 8 on my graduation thesis</p>
                <h5>Highlights</h5>
                <ul>
                    <li>Started the company</li>
                </ul>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4></h4>
                  <span>
                    <time datetime="2019-11-01">Nov 2019</time> \u2013
                    <time datetime="2020-04-01">Apr 2020</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Co-founder</strong>
                </div>
              </header>
                <p>Startup Co-founder and Developer of a Sri Lankan product review website. Led general business development and built the websites with Nuxt.js and decoupled Drupal 8.</p>
                <h5>Highlights</h5>
                <ul>
                    <li>Lived and worked in Sri Lanka</li>
                </ul>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4></h4>
                  <span>
                    <time datetime="2019-11-01">Nov 2019</time> \u2013
                    <time datetime="2020-04-01">Apr 2020</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Co-founder</strong>
                </div>
              </header>
                <p>Startup Co-founder and Developer. Affiliate marketing network I worked on during my study. Led general business development and built the websites with Next.js.</p>
                <h5>Highlights</h5>
                <ul>
                    <li>Lived and worked in Sri Lanka</li>
                </ul>
            </article>
        </div>
      </section>
      <section id="education">
        <h3>Education</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Hogeschool Utrecht</h4>
                  <span>
                    <time datetime="2011-01-01">Jan 2011</time> \u2013
                    <time datetime="2013-01-01">Jan 2013</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Business IT &amp; Management</strong>
                </div>
              </header>
                <p>Bachelors Degree</p>
                <h5>Courses</h5>
                <ul>
                    <li>Analyzing, advising and designing business processes</li>
                </ul>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Hogeschool van Arnhem en Nijmegen</h4>
                  <span>
                    <time datetime="2011-09-01">Sep 2011</time> \u2013
                    <time datetime="2013-07-01">Jul 2013</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Communication and multimedia design</strong>
                </div>
              </header>
                <p>Propaedeutic degree</p>
                <h5>Courses</h5>
                <ul>
                    <li>Adobe tools</li>
                    <li>Design thinking</li>
                </ul>
            </article>
        </div>
      </section>
      <section id="awards">
        <h3>Awards</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>FreeCodeCamp JavaScript curriculum</h4>
                    <time datetime="2019-11-01">Nov 2019</time>
                </div>
                <div class="spaced-list">
                    <div>
                      Awarded by <strong>FreeCodeCamp</strong>
                    </div>
                </div>
              </header>
                <p>Finished the course curriculum</p>
            </article>
        </div>
      </section>
      <section id="publications">
        <h3>Publications</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Personal Blog</h4>
                    <time datetime="2017-10-01">Oct 2017</time>
                </div>
                <div class="spaced-list">
                    <span>
                      Published by <strong>Hyperfocus1337</strong>
                    </span>
                </div>
              </header>
                <p>Personal blog about workflow optimization</p>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Ansible Galaxy Roles</h4>
                    <time datetime="2014-10-01">Oct 2014</time>
                </div>
                <div class="spaced-list">
                    <span>
                      Published by <strong>Ansible</strong>
                    </span>
                </div>
              </header>
                <p>Developed 36 Ansible playbooks (for personal usage). Deploy a fast and secure (Wordpress) VPS with Nginx, PHP-FPM and Percona, with additional utilities for backups, security and logging.</p>
            </article>
        </div>
      </section>
      <section id="skills">
        <h3>Skills</h3>
        <div class="grid-list">
            <div>
                <h4>DevOps engineering</h4>
                <ul class="tag-list">
                    <li>Gitlab</li>
                    <li>Bash</li>
                    <li>Kubernetes</li>
                    <li>Amazon Web Services</li>
                    <li>Google Cloud</li>
                </ul>
            </div>
            <div>
                <h4>Front-end development</h4>
                <ul class="tag-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            </div>
        </div>
      </section>
      <section id="languages">
        <h3>Languages</h3>
        <div class="grid-list">
            <div>
                <h4>Dutch</h4>
              Native speaker
            </div>
            <div>
                <h4>English</h4>
              Professional level
            </div>
        </div>
      </section>
      <section id="interests">
        <h3>Interests</h3>
        <div class="grid-list">
            <div>
                <h4>Workflow automation</h4>
                <ul class="tag-list">
                    <li>Emacs</li>
                    <li>Bash</li>
                </ul>
            </div>
        </div>
      </section>
      <section id="references">
        <h3>References</h3>
        <div class="stack">
              <blockquote>
                <p>Reference...</p>
                  <p>
                    <cite>Jane Doe</cite>
                  </p>
              </blockquote>
        </div>
      </section>
  </body>
</html>
`,"resume.hbs":`<!doctype html>
<html>
	<head>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">
	
	<title>{{#resume.basics}}{{name}}{{/resume.basics}}</title>

	<style>
	{{{css}}}
	</style>
	
	</head>
	<body>
	
	<div id="resume">
		{{> basics }}
		{{> work }}
		{{> volunteer }}
		{{> education }}
		{{> awards }}
		{{> publications }}
		{{> skills }}
		{{> languages }}
		{{> interests }}
		{{> references }}
	</body>
</html>
`,"style.css":`
`},B={partials:["awards.hbs","basics.hbs","education.hbs","interests.hbs","languages.hbs","publications.hbs","references.hbs","skills.hbs","volunteer.hbs","work.hbs"],public:["index.html"],".":["README.md","index.js","package.json","partials","public","resume.hbs","style.css"]};Gt=function(t,e){var n=Ut(t);return n!==void 0?n:""},Jt=function(t,e){var n=ft(t);return n===void 0&&(n=[]),e&&e.withFileTypes?n.map(function(i){var s=mt(t)+"/"+i,r=ft(s)!==void 0;return{name:i,isFile:function(){return!r},isDirectory:function(){return r}}}):n},Kt=function(t){return Ut(t)!==void 0||ft(t)!==void 0},Yt=function(){},Xt=function(){},gt=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Zt=gt,Qt=function(){},$t=function(){},te=function(){return{pipe:function(t){return t},on:function(){return this}}},ee=function(){return{write:function(){},end:function(){},on:function(){return this}}},on={readFileSync:Gt,readdirSync:Jt,existsSync:Kt,writeFileSync:Yt,mkdirSync:Xt,statSync:gt,lstatSync:Zt,unlinkSync:Qt,rmdirSync:$t,createReadStream:te,createWriteStream:ee}});var he={};zt(he,{basename:()=>Z,default:()=>ln,dirname:()=>kt,extname:()=>Q,isAbsolute:()=>re,join:()=>ne,normalize:()=>ae,parse:()=>le,relative:()=>oe,resolve:()=>ie,sep:()=>se});var ne,ie,kt,Z,Q,se,re,ae,oe,le,ln,ce=pt(()=>{"use strict";u();ne=function(){return[].slice.call(arguments).join("/")},ie=function(){return[].slice.call(arguments).join("/")},kt=function(t){return t.split("/").slice(0,-1).join("/")},Z=function(t,e){var n=t.split("/").pop()||"";return e&&n.endsWith(e)?n.slice(0,-e.length):n},Q=function(t){var e=t.match(/\.[^.]+$/);return e?e[0]:""},se="/",re=function(t){return t.charAt(0)==="/"},ae=function(t){return t},oe=function(t,e){return e},le=function(t){return{root:"",dir:kt(t),base:Z(t),ext:Q(t),name:Z(t,Q(t))}},ln={join:ne,resolve:ie,dirname:kt,basename:Z,extname:Q,sep:se,isAbsolute:re,normalize:ae,relative:oe,parse:le}});var yt=m(pe=>{"use strict";u();function ue(t){this.string=t}ue.prototype.toString=function(){return""+this.string};pe.default=ue});var q=m(N=>{"use strict";u();var hn=yt().default,cn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},un=/[&<>"'`]/g,pn=/[&<>"'`]/;function dn(t){return cn[t]}function fn(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}N.extend=fn;var St=Object.prototype.toString;N.toString=St;var $=function(t){return typeof t=="function"};$(/x/)&&($=function(t){return typeof t=="function"&&St.call(t)==="[object Function]"});var $;N.isFunction=$;var de=Array.isArray||function(t){return t&&typeof t=="object"?St.call(t)==="[object Array]":!1};N.isArray=de;function mn(t){return t instanceof hn?t.toString():t==null?"":t?(t=""+t,pn.test(t)?t.replace(un,dn):t):t+""}N.escapeExpression=mn;function gn(t){return!t&&t!==0?!0:!!(de(t)&&t.length===0)}N.isEmpty=gn;function vn(t,e){return(t?t+".":"")+e}N.appendContextPath=vn});var P=m(me=>{"use strict";u();var wt=["description","fileName","lineNumber","message","name","number","stack"];function fe(t,e){var n;e&&e.firstLine&&(n=e.firstLine,t+=" - "+n+":"+e.firstColumn);for(var i=Error.prototype.constructor.call(this,t),s=0;s<wt.length;s++)this[wt[s]]=i[wt[s]];n&&(this.lineNumber=n,this.column=e.firstColumn)}fe.prototype=new Error;me.default=fe});var I=m(_=>{"use strict";u();var k=q(),Et=P().default,bn="2.0.0";_.VERSION=bn;var kn=6;_.COMPILER_REVISION=kn;var yn={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};_.REVISION_CHANGES=yn;var ge=k.isArray,xt=k.isFunction,ve=k.toString,be="[object Object]";function Nt(t,e){this.helpers=t||{},this.partials=e||{},Sn(this)}_.HandlebarsEnvironment=Nt;Nt.prototype={constructor:Nt,logger:z,log:ke,registerHelper:function(t,e){if(ve.call(t)===be){if(e)throw new Et("Arg not supported with multiple helpers");k.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){ve.call(t)===be?k.extend(this.partials,t):this.partials[t]=e},unregisterPartial:function(t){delete this.partials[t]}};function Sn(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new Et("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(e,n){var i=n.inverse,s=n.fn;if(e===!0)return s(this);if(e===!1||e==null)return i(this);if(ge(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):i(this);if(n.data&&n.ids){var r=tt(n.data);r.contextPath=k.appendContextPath(n.data.contextPath,n.name),n={data:r}}return s(e,n)}),t.registerHelper("each",function(e,n){if(!n)throw new Et("Must pass iterator to #each");var i=n.fn,s=n.inverse,r=0,a="",o,c;if(n.data&&n.ids&&(c=k.appendContextPath(n.data.contextPath,n.ids[0])+"."),xt(e)&&(e=e.call(this)),n.data&&(o=tt(n.data)),e&&typeof e=="object")if(ge(e))for(var l=e.length;r<l;r++)o&&(o.index=r,o.first=r===0,o.last=r===e.length-1,c&&(o.contextPath=c+r)),a=a+i(e[r],{data:o});else for(var p in e)e.hasOwnProperty(p)&&(o&&(o.key=p,o.index=r,o.first=r===0,c&&(o.contextPath=c+p)),a=a+i(e[p],{data:o}),r++);return r===0&&(a=s(this)),a}),t.registerHelper("if",function(e,n){return xt(e)&&(e=e.call(this)),!n.hash.includeZero&&!e||k.isEmpty(e)?n.inverse(this):n.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),t.registerHelper("with",function(e,n){xt(e)&&(e=e.call(this));var i=n.fn;if(k.isEmpty(e))return n.inverse(this);if(n.data&&n.ids){var s=tt(n.data);s.contextPath=k.appendContextPath(n.data.contextPath,n.ids[0]),n={data:s}}return i(e,n)}),t.registerHelper("log",function(e,n){var i=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;t.log(i,e)}),t.registerHelper("lookup",function(e,n){return e&&e[n]})}var z={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(z.level<=t){var n=z.methodMap[t];typeof console<"u"&&console[n]&&console[n].call(console,e)}}};_.logger=z;var ke=z.log;_.log=ke;var tt=function(t){var e=k.extend({},t);return e._parent=t,e};_.createFrame=tt});var Se=m(V=>{"use strict";u();var Pt=q(),D=P().default,wn=I().COMPILER_REVISION,ye=I().REVISION_CHANGES,xn=I().createFrame;function En(t){var e=t&&t[0]||1,n=wn;if(e!==n)if(e<n){var i=ye[n],s=ye[e];throw new D("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+s+").")}else throw new D("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}V.checkRevision=En;function Nn(t,e){if(!e)throw new D("No environment passed to template");if(!t||!t.main)throw new D("Unknown template object: "+typeof t);e.VM.checkRevision(t.compiler);var n=function(r,a,o,c,l,p,h,x,M){l&&(c=Pt.extend({},c,l));var A=e.VM.invokePartial.call(this,r,o,c,p,h,x,M);if(A==null&&e.compile){var jt={helpers:p,partials:h,data:x,depths:M};h[o]=e.compile(r,{data:x!==void 0,compat:t.compat},e),A=h[o](c,jt)}if(A!=null){if(a){for(var S=A.split(`
`),E=0,lt=S.length;E<lt&&!(!S[E]&&E+1===lt);E++)S[E]=a+S[E];A=S.join(`
`)}return A}else throw new D("The partial "+o+" could not be compiled when running in runtime-only mode")},i={lookup:function(r,a){for(var o=r.length,c=0;c<o;c++)if(r[c]&&r[c][a]!=null)return r[c][a]},lambda:function(r,a){return typeof r=="function"?r.call(a):r},escapeExpression:Pt.escapeExpression,invokePartial:n,fn:function(r){return t[r]},programs:[],program:function(r,a,o){var c=this.programs[r],l=this.fn(r);return a||o?c=et(this,r,l,a,o):c||(c=this.programs[r]=et(this,r,l)),c},data:function(r,a){for(;r&&a--;)r=r._parent;return r},merge:function(r,a){var o=r||a;return r&&a&&r!==a&&(o=Pt.extend({},a,r)),o},noop:e.VM.noop,compilerInfo:t.compiler},s=function(r,a){a=a||{};var o=a.data;s._setup(a),!a.partial&&t.useData&&(o=Cn(r,o));var c;return t.useDepths&&(c=a.depths?[r].concat(a.depths):[r]),t.main.call(i,r,i.helpers,i.partials,o,c)};return s.isTop=!0,s._setup=function(r){r.partial?(i.helpers=r.helpers,i.partials=r.partials):(i.helpers=i.merge(r.helpers,e.helpers),t.usePartial&&(i.partials=i.merge(r.partials,e.partials)))},s._child=function(r,a,o){if(t.useDepths&&!o)throw new D("must pass parent depths");return et(i,r,t[r],a,o)},s}V.template=Nn;function et(t,e,n,i,s){var r=function(a,o){return o=o||{},n.call(t,a,t.helpers,t.partials,o.data||i,s&&[a].concat(s))};return r.program=e,r.depth=s?s.length:0,r}V.program=et;function Pn(t,e,n,i,s,r,a){var o={partial:!0,helpers:i,partials:s,data:r,depths:a};if(t===void 0)throw new D("The partial "+e+" could not be found");if(t instanceof Function)return t(n,o)}V.invokePartial=Pn;function _n(){return""}V.noop=_n;function Cn(t,e){return(!e||!("root"in e))&&(e=e?xn(e):{},e.root=t),e}});var Pe=m(Ne=>{"use strict";u();var we=I(),An=yt().default,On=P().default,_t=q(),xe=Se(),Ee=function(){var t=new we.HandlebarsEnvironment;return _t.extend(t,we),t.SafeString=An,t.Exception=On,t.Utils=_t,t.escapeExpression=_t.escapeExpression,t.VM=xe,t.template=function(e){return xe.template(e,t)},t},nt=Ee();nt.create=Ee;nt.default=nt;Ne.default=nt});var Ct=m(Ce=>{"use strict";u();var _e=P().default;function v(t){t=t||{},this.firstLine=t.first_line,this.firstColumn=t.first_column,this.lastColumn=t.last_column,this.lastLine=t.last_line}var W={ProgramNode:function(t,e,n){v.call(this,n),this.type="program",this.statements=t,this.strip=e},MustacheNode:function(t,e,n,i,s){if(v.call(this,s),this.type="mustache",this.strip=i,n!=null&&n.charAt){var r=n.charAt(3)||n.charAt(2);this.escaped=r!=="{"&&r!=="&"}else this.escaped=!!n;t instanceof W.SexprNode?this.sexpr=t:this.sexpr=new W.SexprNode(t,e),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(t,e,n){v.call(this,n),this.type="sexpr",this.hash=e;var i=this.id=t[0],s=this.params=t.slice(1);this.isHelper=!!(s.length||e),this.eligibleHelper=this.isHelper||i.isSimple},PartialNode:function(t,e,n,i,s){v.call(this,s),this.type="partial",this.partialName=t,this.context=e,this.hash=n,this.strip=i,this.strip.inlineStandalone=!0},BlockNode:function(t,e,n,i,s){v.call(this,s),this.type="block",this.mustache=t,this.program=e,this.inverse=n,this.strip=i,n&&!e&&(this.isInverse=!0)},RawBlockNode:function(t,e,n,i){if(v.call(this,i),t.sexpr.id.original!==n)throw new _e(t.sexpr.id.original+" doesn't match "+n,this);e=new W.ContentNode(e,i),this.type="block",this.mustache=t,this.program=new W.ProgramNode([e],{},i)},ContentNode:function(t,e){v.call(this,e),this.type="content",this.original=this.string=t},HashNode:function(t,e){v.call(this,e),this.type="hash",this.pairs=t},IdNode:function(t,e){v.call(this,e),this.type="ID";for(var n="",i=[],s=0,r="",a=0,o=t.length;a<o;a++){var c=t[a].part;if(n+=(t[a].separator||"")+c,c===".."||c==="."||c==="this"){if(i.length>0)throw new _e("Invalid path: "+n,this);c===".."?(s++,r+="../"):this.isScoped=!0}else i.push(c)}this.original=n,this.parts=i,this.string=i.join("."),this.depth=s,this.idName=r+this.string,this.isSimple=t.length===1&&!this.isScoped&&s===0,this.stringModeValue=this.string},PartialNameNode:function(t,e){v.call(this,e),this.type="PARTIAL_NAME",this.name=t.original},DataNode:function(t,e){v.call(this,e),this.type="DATA",this.id=t,this.stringModeValue=t.stringModeValue,this.idName="@"+t.stringModeValue},StringNode:function(t,e){v.call(this,e),this.type="STRING",this.original=this.string=this.stringModeValue=t},NumberNode:function(t,e){v.call(this,e),this.type="NUMBER",this.original=this.number=t,this.stringModeValue=Number(t)},BooleanNode:function(t,e){v.call(this,e),this.type="BOOLEAN",this.bool=t,this.stringModeValue=t==="true"},CommentNode:function(t,e){v.call(this,e),this.type="comment",this.comment=t,this.strip={inlineStandalone:!0}}};Ce.default=W});var Oe=m(Ae=>{"use strict";u();var In=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(s,r,a,o,c,l,p){var h=l.length-1;switch(c){case 1:return o.prepareProgram(l[h-1].statements,!0),l[h-1];break;case 2:this.$=new o.ProgramNode(o.prepareProgram(l[h]),{},this._$);break;case 3:this.$=l[h];break;case 4:this.$=l[h];break;case 5:this.$=l[h];break;case 6:this.$=l[h];break;case 7:this.$=new o.ContentNode(l[h],this._$);break;case 8:this.$=new o.CommentNode(l[h],this._$);break;case 9:this.$=new o.RawBlockNode(l[h-2],l[h-1],l[h],this._$);break;case 10:this.$=new o.MustacheNode(l[h-1],null,"","",this._$);break;case 11:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!1,this._$);break;case 12:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!0,this._$);break;case 13:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 14:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 15:this.$={strip:o.stripFlags(l[h-1],l[h-1]),program:l[h]};break;case 16:this.$={path:l[h-1],strip:o.stripFlags(l[h-2],l[h])};break;case 17:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 18:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 19:this.$=new o.PartialNode(l[h-3],l[h-2],l[h-1],o.stripFlags(l[h-4],l[h]),this._$);break;case 20:this.$=new o.PartialNode(l[h-2],void 0,l[h-1],o.stripFlags(l[h-3],l[h]),this._$);break;case 21:this.$=new o.SexprNode([l[h-2]].concat(l[h-1]),l[h],this._$);break;case 22:this.$=new o.SexprNode([l[h]],null,this._$);break;case 23:this.$=l[h];break;case 24:this.$=new o.StringNode(l[h],this._$);break;case 25:this.$=new o.NumberNode(l[h],this._$);break;case 26:this.$=new o.BooleanNode(l[h],this._$);break;case 27:this.$=l[h];break;case 28:l[h-1].isHelper=!0,this.$=l[h-1];break;case 29:this.$=new o.HashNode(l[h],this._$);break;case 30:this.$=[l[h-2],l[h]];break;case 31:this.$=new o.PartialNameNode(l[h],this._$);break;case 32:this.$=new o.PartialNameNode(new o.StringNode(l[h],this._$),this._$);break;case 33:this.$=new o.PartialNameNode(new o.NumberNode(l[h],this._$));break;case 34:this.$=new o.DataNode(l[h],this._$);break;case 35:this.$=new o.IdNode(l[h],this._$);break;case 36:l[h-2].push({part:l[h],separator:l[h-1]}),this.$=l[h-2];break;case 37:this.$=[{part:l[h]}];break;case 38:this.$=[];break;case 39:l[h-1].push(l[h]);break;case 48:this.$=[];break;case 49:l[h-1].push(l[h]);break;case 52:this.$=[l[h]];break;case 53:l[h-1].push(l[h]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(s,r){throw new Error(s)},parse:function(s){var r=this,a=[0],o=[null],c=[],l=this.table,p="",h=0,x=0,M=0,A=2,jt=1;this.lexer.setInput(s),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var S=this.lexer.yylloc;c.push(S);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function lt(y){a.length=a.length-2*y,o.length=o.length-y,c.length=c.length-y}function $e(){var y;return y=r.lexer.lex()||1,typeof y!="number"&&(y=r.symbols_[y]||y),y}for(var g,ht,O,b,ni,ct,T={},J,w,Ft,K;;){if(O=a[a.length-1],this.defaultActions[O]?b=this.defaultActions[O]:((g===null||typeof g>"u")&&(g=$e()),b=l[O]&&l[O][g]),typeof b>"u"||!b.length||!b[0]){var ut="";if(!M){K=[];for(J in l[O])this.terminals_[J]&&J>2&&K.push("'"+this.terminals_[J]+"'");this.lexer.showPosition?ut="Parse error on line "+(h+1)+`:
`+this.lexer.showPosition()+`
Expecting `+K.join(", ")+", got '"+(this.terminals_[g]||g)+"'":ut="Parse error on line "+(h+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(ut,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:S,expected:K})}}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+g);switch(b[0]){case 1:a.push(g),o.push(this.lexer.yytext),c.push(this.lexer.yylloc),a.push(b[1]),g=null,ht?(g=ht,ht=null):(x=this.lexer.yyleng,p=this.lexer.yytext,h=this.lexer.yylineno,S=this.lexer.yylloc,M>0&&M--);break;case 2:if(w=this.productions_[b[1]][1],T.$=o[o.length-w],T._$={first_line:c[c.length-(w||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(w||1)].first_column,last_column:c[c.length-1].last_column},E&&(T._$.range=[c[c.length-(w||1)].range[0],c[c.length-1].range[1]]),ct=this.performAction.call(T,p,x,h,this.yy,b[1],o,c),typeof ct<"u")return ct;w&&(a=a.slice(0,-1*w*2),o=o.slice(0,-1*w),c=c.slice(0,-1*w)),a.push(this.productions_[b[1]][0]),o.push(T.$),c.push(T._$),Ft=l[a[a.length-2]][a[a.length-1]],a.push(Ft);break;case 3:return!0}}return!0}},e=(function(){var i={EOF:1,parseError:function(r,a){if(this.yy.parser)this.yy.parser.parseError(r,a);else throw new Error(r)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var r=s.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var r=s.length,a=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===o.length?this.yylloc.first_column:0)+o[o.length-a.length].length-a[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),r=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,r,a,o,c,l;this._more||(this.yytext="",this.match="");for(var p=this._currentRules(),h=0;h<p.length&&(a=this._input.match(this.rules[p[h]]),!(a&&(!r||a[0].length>r[0].length)&&(r=a,o=h,!this.options.flex)));h++);return r?(l=r[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],s=this.performAction.call(this,this.yy,this,p[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return typeof r<"u"?r:this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(r){this.begin(r)}};return i.options={},i.performAction=function(r,a,o,c){function l(h,x){return a.yytext=a.yytext.substr(h,a.yyleng-x)}var p=c;switch(o){case 0:if(a.yytext.slice(-2)==="\\\\"?(l(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(l(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return a.yytext=a.yytext.substr(5,a.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return l(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return l(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return a.yytext=l(1,2).replace(/\\"/g,'"'),42;break;case 30:return a.yytext=l(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return a.yytext=l(1,2),50;break;case 37:return"INVALID";case 38:return 5}},i.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],i.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},i})();t.lexer=e;function n(){this.yy={}}return n.prototype=t,t.Parser=n,new n})();Ae.default=In});var Ie=m(it=>{"use strict";u();var Dn=P().default;function Hn(t,e){return{left:t.charAt(2)==="~",right:e.charAt(e.length-3)==="~"}}it.stripFlags=Hn;function Ln(t,e,n,i,s,r){if(t.sexpr.id.original!==i.path.original)throw new Dn(t.sexpr.id.original+" doesn't match "+i.path.original,t);var a=n&&n.program,o={left:t.strip.left,right:i.strip.right,openStandalone:Ot(e.statements),closeStandalone:At((a||e).statements)};if(t.strip.right&&H(e.statements,null,!0),a){var c=n.strip;c.left&&C(e.statements,null,!0),c.right&&H(a.statements,null,!0),i.strip.left&&C(a.statements,null,!0),At(e.statements)&&Ot(a.statements)&&(C(e.statements),H(a.statements))}else i.strip.left&&C(e.statements,null,!0);return s?new this.BlockNode(t,a,e,o,r):new this.BlockNode(t,e,a,o,r)}it.prepareBlock=Ln;function Rn(t,e){for(var n=0,i=t.length;n<i;n++){var s=t[n],r=s.strip;if(r){var a=At(t,n,e,s.type==="partial"),o=Ot(t,n,e),c=r.openStandalone&&a,l=r.closeStandalone&&o,p=r.inlineStandalone&&a&&o;r.right&&H(t,n,!0),r.left&&C(t,n,!0),p&&(H(t,n),C(t,n)&&s.type==="partial"&&(s.indent=/([ \t]+$)/.exec(t[n-1].original)?RegExp.$1:"")),c&&(H((s.program||s.inverse).statements),C(t,n)),l&&(H(t,n),C((s.inverse||s.program).statements))}}return t}it.prepareProgram=Rn;function At(t,e,n){e===void 0&&(e=t.length);var i=t[e-1],s=t[e-2];if(!i)return n;if(i.type==="content")return(s||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}function Ot(t,e,n){e===void 0&&(e=-1);var i=t[e+1],s=t[e+2];if(!i)return n;if(i.type==="content")return(s||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}function H(t,e,n){var i=t[e==null?0:e+1];if(!(!i||i.type!=="content"||!n&&i.rightStripped)){var s=i.string;i.string=i.string.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.string!==s}}function C(t,e,n){var i=t[e==null?t.length-1:e-1];if(!(!i||i.type!=="content"||!n&&i.leftStripped)){var s=i.string;return i.string=i.string.replace(n?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.string!==s,i.leftStripped}}});var Ht=m(Dt=>{"use strict";u();var It=Oe().default,De=Ct().default,Mn=Ie(),Tn=q().extend;Dt.parser=It;var He={};Tn(He,Mn,De);function Bn(t){return t.constructor===De.ProgramNode?t:(It.yy=He,It.parse(t))}Dt.parse=Bn});var rt=m(st=>{"use strict";u();var Rt=P().default,Le=q().isArray,qn=[].slice;function Lt(){}st.Compiler=Lt;Lt.prototype={compiler:Lt,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var n=0;n<e;n++){var i=this.opcodes[n],s=t.opcodes[n];if(i.opcode!==s.opcode||!Re(i.args,s.args))return!1}for(e=this.children.length,n=0;n<e;n++)if(!this.children[n].equals(t.children[n]))return!1;return!0},guid:0,compile:function(t,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds;var n=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},n)for(var i in n)this.options.knownHelpers[i]=n[i];return this.accept(t)},accept:function(t){return this[t.type](t)},program:function(t){for(var e=t.statements,n=0,i=e.length;n<i;n++)this.accept(e[n]);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(s,r){return s-r}),this},compileProgram:function(t){var e=new this.compiler().compile(t,this.options),n=this.guid++,i;this.usePartial=this.usePartial||e.usePartial,this.children[n]=e;for(var s=0,r=e.depths.list.length;s<r;s++)i=e.depths.list[s],!(i<2)&&this.addDepth(i-1);return n},block:function(t){var e=t.mustache,n=t.program,i=t.inverse;n&&(n=this.compileProgram(n)),i&&(i=this.compileProgram(i));var s=e.sexpr,r=this.classifySexpr(s);r==="helper"?this.helperSexpr(s,n,i):r==="simple"?(this.simpleSexpr(s),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("blockValue",s.id.original)):(this.ambiguousSexpr(s,n,i),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var e=t.pairs,n,i;for(this.opcode("pushHash"),n=0,i=e.length;n<i;n++)this.pushParam(e[n][1]);for(;n--;)this.opcode("assignToHash",e[n][0]);this.opcode("popHash")},partial:function(t){var e=t.partialName;this.usePartial=!0,t.hash?this.accept(t.hash):this.opcode("push","undefined"),t.context?this.accept(t.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",e.name,t.indent||""),this.opcode("append")},content:function(t){t.string&&this.opcode("appendContent",t.string)},mustache:function(t){this.sexpr(t.sexpr),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(t,e,n){var i=t.id,s=i.parts[0],r=e!=null||n!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.ID(i),this.opcode("invokeAmbiguous",s,r)},simpleSexpr:function(t){var e=t.id;e.type==="DATA"?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,n){var i=this.setupFullMustacheParams(t,e,n),s=t.id,r=s.parts[0];if(this.options.knownHelpers[r])this.opcode("invokeKnownHelper",i.length,r);else{if(this.options.knownHelpersOnly)throw new Rt("You specified knownHelpersOnly, but used the unknown helper "+r,t);s.falsy=!0,this.ID(s),this.opcode("invokeHelper",i.length,s.original,s.isSimple)}},sexpr:function(t){var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0];e?this.opcode("lookupOnContext",t.parts,t.falsy,t.isScoped):this.opcode("pushContext")},DATA:function(t){this.options.data=!0,this.opcode("lookupData",t.id.depth,t.id.parts)},STRING:function(t){this.opcode("pushString",t.string)},NUMBER:function(t){this.opcode("pushLiteral",t.number)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:qn.call(arguments,1)})},addDepth:function(t){t!==0&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifySexpr:function(t){var e=t.isHelper,n=t.eligibleHelper,i=this.options;if(n&&!e){var s=t.id.parts[0];i.knownHelpers[s]?e=!0:i.knownHelpersOnly&&(n=!1)}return e?"helper":n?"ambiguous":"simple"},pushParams:function(t){for(var e=0,n=t.length;e<n;e++)this.pushParam(t[e])},pushParam:function(t){this.stringParams?(t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",t.stringModeValue,t.type),t.type==="sexpr"&&this.sexpr(t)):(this.trackIds&&this.opcode("pushId",t.type,t.idName||t.stringModeValue),this.accept(t))},setupFullMustacheParams:function(t,e,n){var i=t.params;return this.pushParams(i),this.opcode("pushProgram",e),this.opcode("pushProgram",n),t.hash?this.hash(t.hash):this.opcode("emptyHash"),i}};function Vn(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new Rt("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i=n.parse(t),s=new n.Compiler().compile(i,e);return new n.JavaScriptCompiler().compile(s,e)}st.precompile=Vn;function jn(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new Rt("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i;function s(){var a=n.parse(t),o=new n.Compiler().compile(a,e),c=new n.JavaScriptCompiler().compile(o,e,void 0,!0);return n.template(c)}var r=function(a,o){return i||(i=s()),i.call(this,a,o)};return r._setup=function(a){return i||(i=s()),i._setup(a)},r._child=function(a,o,c){return i||(i=s()),i._child(a,o,c)},r}st.compile=jn;function Re(t,e){if(t===e)return!0;if(Le(t)&&Le(e)&&t.length===e.length){for(var n=0;n<t.length;n++)if(!Re(t[n],e[n]))return!1;return!0}}});var qe=m(Be=>{"use strict";u();var Fn=I().COMPILER_REVISION,zn=I().REVISION_CHANGES,Mt=P().default;function U(t){this.value=t}function L(){}L.prototype={nameLookup:function(t,e){return L.isValidJavaScriptVariableName(e)?t+"."+e:t+"['"+e+"']"},depthedLookup:function(t){return this.aliases.lookup="this.lookup",'lookup(depths, "'+t+'")'},compilerInfo:function(){var t=Fn,e=zn[t];return[t,e]},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,e,n,i){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!n,this.context=n||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.depths.list.length||this.options.compat;var s=t.opcodes,r,a,o;for(a=0,o=s.length;a<o;a++)r=s[a],this[r.opcode].apply(this,r.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Mt("Compile completed with content left on stack");var c=this.createFunctionContext(i);if(this.isChild)return c;var l={compiler:this.compilerInfo(),main:c},p=this.context.programs;for(a=0,o=p.length;a<o;a++)p[a]&&(l[a]=p[a]);return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.options.compat&&(l.compat=!0),i||(l.compiler=JSON.stringify(l.compiler),l=this.objectLiteral(l)),l},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(t){var e="",n=this.stackVars.concat(this.registers.list);n.length>0&&(e+=", "+n.join(", "));for(var i in this.aliases)this.aliases.hasOwnProperty(i)&&(e+=", "+i+"="+this.aliases[i]);var s=["depth0","helpers","partials","data"];this.useDepths&&s.push("depths");var r=this.mergeSource(e);return t?(s.push(r),Function.apply(this,s)):"function("+s.join(",")+`) {
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
  }`)},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},invokeHelper:function(t,e,n){this.aliases.helperMissing="helpers.helperMissing";var i=this.popStack(),s=this.setupHelper(t,e),r=(n?s.name+" || ":"")+i+" || helperMissing";this.push("(("+r+").call("+s.callParams+"))")},invokeKnownHelper:function(t,e){var n=this.setupHelper(t,e);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(t,e){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var n=this.popStack();this.emptyHash();var i=this.setupHelper(0,t,e),s=this.lastHelper=this.nameLookup("helpers",t,"helper");this.push("((helper = (helper = "+s+" || "+n+") != null ? helper : helperMissing"+(i.paramsInit?"),("+i.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+i.callParams+") : helper))")},invokePartial:function(t,e){var n=[this.nameLookup("partials",t,"partial"),"'"+e+"'","'"+t+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?n.push("data"):this.options.compat&&n.push("undefined"),this.options.compat&&n.push("depths"),this.push("this.invokePartial("+n.join(", ")+")")},assignToHash:function(t){var e=this.popStack(),n,i,s;this.trackIds&&(s=this.popStack()),this.stringParams&&(i=this.popStack(),n=this.popStack());var r=this.hash;n&&r.contexts.push("'"+t+"': "+n),i&&r.types.push("'"+t+"': "+i),s&&r.ids.push("'"+t+"': "+s),r.values.push("'"+t+"': ("+e+")")},pushId:function(t,e){t==="ID"||t==="DATA"?this.pushString(e):t==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:L,compileChildren:function(t,e){for(var n=t.children,i,s,r=0,a=n.length;r<a;r++){i=n[r],s=new this.compiler;var o=this.matchExistingProgram(i);o==null?(this.context.programs.push(""),o=this.context.programs.length,i.index=o,i.name="program"+o,this.context.programs[o]=s.compile(i,e,this.context,!this.precompile),this.context.environments[o]=i,this.useDepths=this.useDepths||s.useDepths):(i.index=o,i.name="program"+o)}},matchExistingProgram:function(t){for(var e=0,n=this.context.environments.length;e<n;e++){var i=this.context.environments[e];if(i&&i.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],n=e.depths.list,i=this.useDepths,s,r=[e.index,"data"];return i&&r.push("depths"),"this.program("+r.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new U(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var e=this.incrStack();return this.pushSource(e+" = "+t+";"),this.compileStack.push(e),e},replaceStack:function(t){var e="",n=this.isInline(),i,s,r;if(!this.isInline())throw new Mt("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof U)e=i=a.value,r=!0;else{s=!this.stackSlot;var o=s?this.incrStack():this.topStackName();e="("+this.push(o)+" = "+a+")",i=this.topStack()}var c=t.call(this,i);r||this.popStack(),s&&this.stackSlot--,this.push("("+e+c+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var e=0,n=t.length;e<n;e++){var i=t[e];i instanceof U?this.compileStack.push(i):this.pushStack(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),n=(e?this.inlineStack:this.compileStack).pop();if(!t&&n instanceof U)return n.value;if(!e){if(!this.stackSlot)throw new Mt("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof U?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(this.quotedString(n)+":"+t[n]);return"{"+e.join(",")+"}"},setupHelper:function(t,e,n){var i=[],s=this.setupParams(e,t,i,n),r=this.nameLookup("helpers",e,"helper");return{params:i,paramsInit:s,name:r,callParams:[this.contextName(0)].concat(i).join(", ")}},setupOptions:function(t,e,n){var i={},s=[],r=[],a=[],o,c,l;i.name=this.quotedString(t),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack()),c=this.popStack(),l=this.popStack(),(l||c)&&(l||(l="this.noop"),c||(c="this.noop"),i.fn=l,i.inverse=c);for(var p=e;p--;)o=this.popStack(),n[p]=o,this.trackIds&&(a[p]=this.popStack()),this.stringParams&&(r[p]=this.popStack(),s[p]=this.popStack());return this.trackIds&&(i.ids="["+a.join(",")+"]"),this.stringParams&&(i.types="["+r.join(",")+"]",i.contexts="["+s.join(",")+"]"),this.options.data&&(i.data="data"),i},setupParams:function(t,e,n,i){var s=this.objectLiteral(this.setupOptions(t,e,n));return i?(this.useRegister("options"),n.push("options"),"options="+s):(n.push(s),"")}};var Me="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),Wn=L.RESERVED_WORDS={};for(at=0,Te=Me.length;at<Te;at++)Wn[Me[at]]=!0;var at,Te;L.isValidJavaScriptVariableName=function(t){return!L.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};Be.default=L});var Fe=m(je=>{"use strict";u();var j=Pe().default,Un=Ct().default,Gn=Ht().parser,Jn=Ht().parse,Kn=rt().Compiler,Yn=rt().compile,Xn=rt().precompile,Zn=qe().default,Qn=j.create,Ve=function(){var t=Qn();return t.compile=function(e,n){return Yn(e,n,t)},t.precompile=function(e,n){return Xn(e,n,t)},t.AST=Un,t.Compiler=Kn,t.JavaScriptCompiler=Zn,t.Parser=Gn,t.parse=Jn,t};j=Ve();j.create=Ve;j.default=j;je.default=j});var Bt=m(ze=>{"use strict";u();function Tt(){}Tt.prototype={constructor:Tt,accept:function(t){return this[t.type](t)}};ze.default=Tt});var We=m(qt=>{"use strict";u();var $n=Bt().default;function ti(t){return new f().accept(t)}qt.print=ti;function f(){this.padding=0}qt.PrintVisitor=f;f.prototype=new $n;f.prototype.pad=function(t){for(var e="",n=0,i=this.padding;n<i;n++)e=e+"  ";return e=e+t+`
`,e};f.prototype.program=function(t){var e="",n=t.statements,i,s;for(i=0,s=n.length;i<s;i++)e=e+this.accept(n[i]);return this.padding--,e};f.prototype.block=function(t){var e="";return e=e+this.pad("BLOCK:"),this.padding++,e=e+this.accept(t.mustache),t.program&&(e=e+this.pad("PROGRAM:"),this.padding++,e=e+this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e=e+this.pad("{{^}}"),this.padding++,e=e+this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e};f.prototype.sexpr=function(t){for(var e=t.params,n=[],i,s=0,r=e.length;s<r;s++)n.push(this.accept(e[s]));return e="["+n.join(", ")+"]",i=t.hash?" "+this.accept(t.hash):"",this.accept(t.id)+" "+e+i};f.prototype.mustache=function(t){return this.pad("{{ "+this.accept(t.sexpr)+" }}")};f.prototype.partial=function(t){var e=this.accept(t.partialName);return t.context&&(e+=" "+this.accept(t.context)),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")};f.prototype.hash=function(t){for(var e=t.pairs,n=[],i,s,r=0,a=e.length;r<a;r++)i=e[r][0],s=this.accept(e[r][1]),n.push(i+"="+s);return"HASH{"+n.join(", ")+"}"};f.prototype.STRING=function(t){return'"'+t.string+'"'};f.prototype.NUMBER=function(t){return"NUMBER{"+t.number+"}"};f.prototype.BOOLEAN=function(t){return"BOOLEAN{"+t.bool+"}"};f.prototype.ID=function(t){var e=t.parts.join("/");return t.parts.length>1?"PATH:"+e:"ID:"+e};f.prototype.PARTIAL_NAME=function(t){return"PARTIAL:"+t.name};f.prototype.DATA=function(t){return"@"+this.accept(t.id)};f.prototype.content=function(t){return this.pad("CONTENT[ '"+t.string+"' ]")};f.prototype.comment=function(t){return this.pad("{{! '"+t.comment+"' }}")}});var Je=m((Bi,Ge)=>{u();var G=Fe().default;G.Visitor=Bt().default;var Ue=We();G.PrintVisitor=Ue.PrintVisitor;G.print=Ue.print;Ge.exports=G;typeof F<"u"&&F.extensions&&(Vt=function(t,e){var n=(bt(),dt(vt)),i=n.readFileSync(e,"utf8");t.exports=G.compile(i)},F.extensions[".handlebars"]=Vt,F.extensions[".hbs"]=Vt);var Vt});var Ze=m((ji,Xe)=>{u();var ot=(bt(),dt(vt)),Ke=(ce(),dt(he)),Ye=Je();function ei(t){var e=ot.readFileSync("//style.css","utf-8"),n=ot.readFileSync("//resume.hbs","utf-8"),i=Ke.join("/","partials"),s=ot.readdirSync(i);return s.forEach(function(r){var a=/^([^.]+).hbs$/.exec(r);if(a){var o=a[1],c=Ke.join(i,r),l=ot.readFileSync(c,"utf8");Ye.registerPartial(o,l)}}),Ye.compile(n)({css:e,resume:t})}Xe.exports={render:ei}});u();var R=an(Ze(),1),Qe=R.default??R,zi=Qe.render??R.render,Wi=Qe.pdfRenderOptions??R.pdfRenderOptions;export{Wi as pdfRenderOptions,zi as render};
