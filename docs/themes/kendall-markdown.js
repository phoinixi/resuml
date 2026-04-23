var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var n_=Object.create;var Lt=Object.defineProperty;var r_=Object.getOwnPropertyDescriptor;var t_=Object.getOwnPropertyNames;var u_=Object.getPrototypeOf,i_=Object.prototype.hasOwnProperty;var Ba=(s,I)=>()=>(s&&(I=s(s=0)),I);var bn=(s,I)=>()=>(I||s((I={exports:{}}).exports,I),I.exports),d_=(s,I)=>{for(var f in I)Lt(s,f,{get:I[f],enumerable:!0})},Da=(s,I,f,N)=>{if(I&&typeof I=="object"||typeof I=="function")for(let P of t_(I))!i_.call(s,P)&&P!==f&&Lt(s,P,{get:()=>I[P],enumerable:!(N=r_(I,P))||N.enumerable});return s};var a_=(s,I,f)=>(f=s!=null?n_(u_(s)):{},Da(I||!s||!s.__esModule?Lt(f,"default",{value:s,enumerable:!0}):f,s)),s_=s=>Da(Lt({},"__esModule",{value:!0}),s);var pe=Ba(()=>{});var Ya={};d_(Ya,{createReadStream:()=>qa,createWriteStream:()=>ja,default:()=>c_,existsSync:()=>Wa,lstatSync:()=>xa,mkdirSync:()=>Na,readFileSync:()=>Ha,readdirSync:()=>Fa,rmdirSync:()=>Ga,statSync:()=>ri,unlinkSync:()=>$a,writeFileSync:()=>Oa});function ni(s){return String(s).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Ua(s){var I=ni(s);if(Tt[I]!==void 0)return Tt[I];for(var f=Object.keys(Tt),N=0;N<f.length;N++)if(I.endsWith("/"+f[N])||I===f[N])return Tt[f[N]]}function ei(s){var I=ni(s);if((I===""||I===".")&&hr["."]!==void 0)return hr["."];if(hr[I]!==void 0)return hr[I];for(var f=Object.keys(hr),N=0;N<f.length;N++)if(I.endsWith("/"+f[N])||I===f[N])return hr[f[N]]}var Tt,hr,Ha,Fa,Wa,Oa,Na,ri,xa,$a,Ga,qa,ja,c_,Ka=Ba(()=>{"use strict";pe();Tt={"package.json":`{
  "name": "jsonresume-theme-kendall-markdown",
  "version": "0.2.10",
  "description": "A JSON Resume theme built with bootstrap",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/RichardBronosky/jsonresume-theme-kendall-markdown.git"
  },
  "scripts": {
    "rev-patch": "npm --no-git-tag-version version patch --force",
    "rev-minor": "npm --no-git-tag-version version minor --force",
    "rev-major": "npm --no-git-tag-version version major --force",
    "pushlish": "git push || true && npm publish",
    "test": "echo \\"Notice: Itsa Wild Wild West up in this bish\\" && exit 0"
  },
  "author": "Bruno Bronosky",
  "co-authors": [
    "M. Adam Kendall"
  ],
  "license": "MIT",
  "dependencies": {
    "gravatar": "^1.0.6",
    "lodash": "^4.17.20",
    "mustache": "^2.2.1",
    "showdown": "^2.1.0"
  },
  "keywords": [
    "json",
    "jsonresume",
    "theme",
    "markdown"
  ],
  "bugs": {
    "url": "https://github.com/RichardBronosky/jsonresume-theme-kendall-markdown/issues"
  },
  "homepage": "https://github.com/RichardBronosky/jsonresume-theme-kendall-markdown"
}
`,"preloading.template":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="3; url='{{redirect_url}}'" />
    <title>Resume of {{basics.name}}</title>
    <!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"> -->
    <!-- <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"> -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet">
    <style type="text/css">
    {{{css}}}
    </style>
  </head>
  <body>
    <div class="container preload">
      <div class="row">
        <div class="col-xs-12">
          <div id="photo-header" class="text-center">
            <!-- PHOTO (AVATAR) -->
            {{#photo}}
            <div id="photo">
              <a href="{{redirect_url}}">
                <img src="{{photo}}" alt="avatar" class="rotate">
              </a>
            </div>
            {{/photo}}
            <div id="text-header" {{^photo}}style="margin-top: 90px;"{{/photo}}>
              <a href="{{redirect_url}}">
                <h1>{{basics.name}}<br>{{#basics.label}}<span>{{basics.label}}</span>{{/basics.label}}</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-7">
        </div>
        <div class="col-xs-12 col-sm-5">
        </div>
      </div>
    </div>

  </body>
</html>
`,"print.css":`body {
  font-size: .95em;
  -webkit-print-color-adjust: exact;
}

.preload img {
  animation: none;
}

a[href]:after {
  content: none !important;
}

#photo{
  display: none;
}

.box {
  margin-bottom: -10px;
}

blockquote,
#education,
#awards,
.avoid-break,
.contact-item,
.publication,
.skills,
.interests {
  page-break-inside: avoid;
}

.col-sm-5{
  width: 40%;
  padding: 0 15px;
}

.col-sm-7{
  width: 60%;
  padding: 0 15px;
}

.skills .col-sm-offset-1,
.interests .col-sm-offset-1{
  margin-top: -10px;
  margin-bottom: 5px;
}

#education {
  margin: 0;
  margin-bottom: -20px;
}
#awards:before,
#education:before {
  background: none;
}

#awards .description,
#education .description,
.job .details {
  border: 1px solid #eee;
}
.job {
  margin: 0px;
}
.publication,
.publication .panel-heading,
.publication .name{
  margin: 0;
  padding: 0 5px;
  border: none;
}
.publication .panel-body {
  padding: 0 10px;
  margin: 0;
}

.panel-default {
  margin-top: 10px;
}

.badge {
  margin: 0;
}

.list-group {
  margin-bottom: 8px;
  padding-left: 0;
}
.list-group-item{
  border: none;
  padding: 0px;
  margin: 0px 0px -1px 20px;
}
.list-group-item:after{
  content: none;
  position: absolute;
  top: 8px;
  right: 0;
  left: -1px;
  height: 0;
  width: 0;
  border: solid transparent;
  border-right-color: #999;
  border-width: 4px;
  pointer-events: none;
 }
`,"resume.template":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Resume of {{basics.name}}</title>
    <!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"> -->
    <!-- <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"> -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet">
    <style type="text/css">
    {{{css}}}
    </style>
    <style type="text/css" media="print">
    {{{printcss}}}
    </style>
    <script>
      function setPreferredColorScheme(mode = "dark") {
        console.log("changing")
        for (var i = document.styleSheets.length - 1; i >= 0; i--) {
          console.log("i",i)
          document.styleSheets[i];
          if(document.styleSheets[i].href !== null){ continue; }
          for (var j = document.styleSheets[i].rules.length - 1; j >= 0; j--) {
            console.log("j",j)
            media = document.styleSheets[i].rules[j].media;
            if (media && media.mediaText) {
              console.log("includes mediaText")
              if (media.mediaText.includes("dark")){
                console.log("prefers dark")
                console.log("set preference to light")
                if (media.mediaText.includes("light")) media.deleteMedium("(prefers-color-scheme: light)");
                if (media.mediaText.includes("dark"))  media.deleteMedium("(prefers-color-scheme: dark)");
                media.appendMedium("(prefers-color-scheme: light)");
              } else {
                console.log("prefers not dark")
                console.log("set preference to dark")
                if (media.mediaText.includes("light")) media.deleteMedium("(prefers-color-scheme: light)");
                if (media.mediaText.includes("dark"))  media.deleteMedium("(prefers-color-scheme: dark)");
                media.appendMedium("(prefers-color-scheme: dark)");
              }
            }
          }
        }
      }
    <\/script>
  </head>
  <body>
    <div class="container">
      <a class="ribbon" href="https://github.com/RichardBronosky/resume#bruno-bronosky" target="_blank">
<svg
   bruno:ref1="https://editsvgcode.com/"
   xml:space="preserve"
   width="147"
   height="147"
   overflow="visible"
   style="-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,.7));filter:drop-shadow(0 0 5px rgba(0,0,0,.7))"
   viewBox="28.386 1.317 147 147"
   ml-update="aware"
   version="1.1"
   id="svg4"
   sodipodi:docname="github-ribbon-is.svg"
   inkscape:version="1.3 (0e150ed6c4, 2023-07-21)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns:bruno="https://github.com/RichardBronosky/resume"><defs
   id="defs1"><style
   type="text/css"
   id="style1">@import url('https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic');</style></defs><sodipodi:namedview
   id="namedview4"
   pagecolor="#505050"
   bordercolor="#eeeeee"
   borderopacity="1"
   inkscape:showpageshadow="0"
   inkscape:pageopacity="0"
   inkscape:pagecheckerboard="0"
   inkscape:deskcolor="#d1d1d1"
   inkscape:zoom="5.7482993"
   inkscape:cx="94.549704"
   inkscape:cy="10.698817"
   inkscape:window-width="1891"
   inkscape:window-height="1051"
   inkscape:window-x="0"
   inkscape:window-y="0"
   inkscape:window-maximized="1"
   inkscape:current-layer="svg4"
   showgrid="false" /><linearGradient
   id="a"
   x1="125.566"
   x2="105.649"
   y1="662.853"
   y2="682.77"
   gradientTransform="translate(0 -614.771)"
   gradientUnits="userSpaceOnUse"><stop
     offset="0"
     style="stop-color:#6d6d6d"
     id="stop1" /><stop
     offset="1"
     style="stop-color:#5d5d5d"
     id="stop2" /></linearGradient><path
   fill="url(#a)"
   d="M 175.622,137.972 35.676,-1.977 55.591,-21.892 195.539,118.055 Z"
   id="ribbon"
   style="display:inline"
   inkscape:label="ribbon" /><path
   fill="none"
   stroke="#ffffff"
   stroke-dasharray="3, 1.5"
   d="M 30.705,-9.861 185.08,144.514 m -138.5,-172.5 154.375,154.375"
   opacity="0.5"
   id="stitches"
   style="-webkit-filter:drop-shadow(0 0 5px rgba(0, 0, 0, 0.7));filter:drop-shadow(0 0 5px rgba(0, 0, 0, 0.7));display:inline"
   inkscape:label="stitches" /><g
   id="text_group"
   inkscape:label="Text Group"><g
     id="locate"
     inkscape:label="locate"
     transform="translate(113.6, 62.6)"><g
       id="rotate"
       inkscape:label="rotate"
       transform="rotate(45)"><g
         id="scale"
         inkscape:label="scale"
           transform="scale(1,1.1)"><text
           xml:space="preserve"
           id="main_text"
           inkscape:label="main_text"
           text-anchor="middle"
           x="0"
           y="0"
           style="fill:#ffffff;font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:12.5857px;font-family:Roboto,sans-serif;-inkscape-font-specification:'Roboto,sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:1.04881"><tspan
             sodipodi:role="line"
             id="text_span"
             inkscape:label="text_span"
             x="0"
             y="0">View Source on Github</tspan></text></g></g></g></g></svg>
      </a>
      <label class="ribbon" for="dark_mode">Switch to</br><span class="dark-include">light</span><span class="dark-exclude">dark</span></br>mode</label>
      <button id="dark_mode" style="display:none" onclick="setPreferredColorScheme()">foo bar</button>
      <div class="row">
        <div class="col-xs-12">
          <div id="photo-header" class="text-center">
            <!-- PHOTO (AVATAR) -->
            {{#photo}}
            <div id="photo">
              <img src="{{photo}}" alt="avatar">
            </div>
            {{/photo}}
            <div id="text-header" {{^photo}}style="margin-top: 90px;"{{/photo}}>
              <h1>{{basics.name}}<br>{{#basics.label}}<span>{{basics.label}}</span>{{/basics.label}}</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-7">
          {{#basics.summary}}
          <!-- ABOUT ME -->
          <div class="box" id="section_about">
            <h2><i class="fas fa-user ico"></i> About</h2>
            <p>{{{basics.summary}}}</p>
          </div>
          {{/basics.summary}}
          {{#workBool}}
          <!-- WORK EXPERIENCE -->
          <div class="box" id="section_work_experience">
            <h2><i class= "fas fa-suitcase ico"></i> Work Experience</h2>
            {{#work}}
              <div class="job clearfix">
                <div class="row">
                  <div class="details">
                    <div class="where">
                      {{name}}
                      {{#location}}
                      <div class="pull-right">
                        {{location}}
                      </div>
                      {{/location}}
                    </div>
                    {{#description}}
                    <div class="description">
                      {{description}}
                    </div>
                    {{/description}}
                    {{#url}}
                    <div class="address">
                      <a href="{{url}}" target= "_blank"><i class="fas fa-globe ico"></i> {{url}}</a>
                    </div>
                    {{/url}}
                    <div class="year">{{#startDateYear}}{{startDateYear}} {{#endDateYear}}\u2013 {{/endDateYear}}{{/startDateYear}}{{endDateYear}}</div>
                  </div>
                </div>
                <div class="row">
                  <div class="job-details col-xs-11">
                    <div class="profession">{{position}}</div>
                    <div class="description">
                      {{{summary}}}
                      {{#boolHighlights}}
                      <ul class="list-group">
                        {{#highlights}}
                        <li class="list-group-item">{{{.}}}</li>
                        {{/highlights}}
                      </ul>
                      {{/boolHighlights}}
                    </div>
                  </div>
                </div>
              </div>
            {{/work}}
          </div>
          {{/workBool}}
          {{#awardsBool}}
          <!-- AWARDS -->
          <div class="box" id="section_awards">
            <h2><i class="fas fa-certificate ico"></i> Awards</h2>
            <ul id="awards" class="clearfix">
              {{#awards}}
              <li>
                <div class="year pull-left">{{month}} {{year}}</div>
                <div class="description pull-right">
                  <h3>{{awarder}}</h3>
                  <p><i class="fas fa-trophy ico"></i> {{title}}</p>
                  <p>{{{summary}}}</p>
                </div>
              </li>
              {{/awards}}
            </ul>
          </div>
          {{/awardsBool}}
          {{#volunteerBool}}
          <!-- VOLUNTEER -->
          <div class="box" id="section_volunteer">
            <h2><i class= "fas fa-users ico"></i> Volunteer</h2>
            {{#volunteer}}
              <div class="job clearfix">
                <div class="row">
                  <div class="details">
                    <div class="where">{{organization}}</div>
                    {{#url}}
                    <div class="address">
                      <a href="{{url}}" target= "_blank"><i class="fas fa-globe ico"></i> {{url}}</a>
                    </div>
                    {{/url}}
                    <div class="year">{{#startDateYear}}{{startDateYear}} {{#endDateYear}}\u2013 {{/endDateYear}}{{/startDateYear}}{{endDateYear}}</div>
                  </div>
                </div>
                <div class="row">
                  <div class="job-details col-xs-11">
                    <div class="profession">{{position}}</div>
                    <div class="description">
                      {{{summary}}}
                      {{#boolHighlights}}
                      <ul class="list-group">
                        {{#highlights}}
                        <li class="list-group-item">{{{.}}}</li>
                        {{/highlights}}
                      </ul>
                      {{/boolHighlights}}
                    </div>
                  </div>
                </div>
              </div>
            {{/volunteer}}
          </div>
          {{/volunteerBool}}
          {{#projectsBool}}
          <!-- PROJECTS -->
          <div class="box" id="section_projects">
            <h2><i class= "fas fa-code-branch ico"></i> Projects</h2>
            <ul class="list-group">
              {{#projects}}
              <li class="list-group-item">
                <span style="font-weight:bold">{{name}}</span>: {{description}}
              </li>
              {{/projects}}
            </ul>
          </div>
          {{/projectsBool}}
        </div>
        <div class="col-xs-12 col-sm-5">
          <!-- CONTACT -->
          <div class="box clearfix" id="section_contact">
            <h2><i class="fas fa-bullseye ico"></i> Contact</h2>
            {{#basics.location}}
            <div class="contact-item">
              <div class="icon pull-left text-center"><span class="fas fa-map-marker fa-fw"></span></div>
              {{#basics.location.address}}<div class="title pull-right">{{basics.location.address}}</div>{{/basics.location.address}}
              <div class="title {{^basics.location.address}}only {{/basics.location.address}} pull-right">{{basics.location.city}}{{#basics.location.region}}, {{basics.location.region}}{{/basics.location.region}}{{#basics.location.postalCode}} {{basics.location.postalCode}}{{/basics.location.postalCode}}{{#basics.location.countryCode}} {{basics.location.countryCode}}{{/basics.location.countryCode}}</div>
            </div>
            {{/basics.location}}
            {{#basics.phone}}
            <div class="contact-item">
              <div class="icon pull-left text-center"><span class="fas fa-phone fa-fw"></span></div>
              <div class="title only pull-right">{{basics.phone}}</div>
            </div>
            {{/basics.phone}}
            {{#basics.email}}
            <div class="contact-item">
              <div class="icon pull-left text-center"><span class="fas fa-envelope fa-fw"></span></div>
              <div class="title only pull-right"><a href="mailto:{{basics.email}}" target="_blank">{{basics.email}}</a></div>
            </div>
            {{/basics.email}}
            {{^basics.urlPrintable}}
            {{^basics.urlPdf}}
            {{#basics.url}}
            <div class="contact-item">
              <div class="icon pull-left text-center"><span class="fas fa-globe fa-fw"></span></div>
              <div class="title pull-right">Resume</div>
              <div class="description pull-right"><a href="{{basics.url}}" target="_blank">{{basics.url}}</a></div>
            </div>
            {{/basics.url}}
            {{/basics.urlPdf}}
            {{/basics.urlPrintable}}
            {{#basics.urlPdf}}
            <div class="contact-item">
              <div class="icon pull-left text-center"><span class="fas fa-globe fa-fw"></span></div>
              <div class="title pull-right">Resume (pdf)</div>
              <div class="description pull-right"><a href="{{basics.urlPdf}}" target="_blank">{{basics.urlPdf}}</a></div>
            </div>
            {{/basics.urlPdf}}
            {{#basics.urlPrintable}}
            <div class="contact-item">
              <div class="icon pull-left text-center"><span class="fas fa-globe fa-fw"></span></div>
              <div class="title pull-right">Resume (printable)</div>
              <div class="description pull-right"><a href="{{basics.urlPrintable}}" target="_blank">{{basics.urlPrintable}}</a></div>
            </div>
            {{/basics.urlPrintable}}
            {{#basics.profiles}}
            <div class="contact-item">
              <div class="icon pull-left text-center"><span class="{{iconClass}} fa-fw"></span></div>
              <div class="title pull-right">{{network}}</div>
              <div class="description pull-right"><a href="{{url}}" target="_blank">{{#username}}{{username}}{{/username}}{{^username}}{{url}}{{/username}}</a></div>
            </div>
            {{/basics.profiles}}
          </div>
          {{#skillsBool}}
          <!-- SKILLS -->
          <div class="box" id="section_skills">
            <h2><i class="fas fa-tasks ico"></i> Skills</h2>
            {{#skills}}
            <div class="skills clearfix">
              <div class="item-skills">
                  {{name}}
                  {{#level}}<span class="skill-level">{{level}}</span>{{/level}}
              </div>
              <div class="col-sm-offset-1 col-sm-12 clearfix">
                {{#keywords}}
                <span class= "skill badge">{{{.}}}</span>
                {{/keywords}}
              </div>
            </div>
            {{/skills}}
          </div>
          {{/skillsBool}}
          {{#publicationsBool}}
          <!-- PUBLICATIONS -->
          <div class="box" id="section_publications">
            <h2><i class="fas fa-book ico"></i> Publications</h2>
            {{#publications}}
            <div class="publication panel panel-default">
              <div class="panel-heading">
                <div class="name panel-title">{{name}}</div>
              </div>
              <div class="panel-body">
                {{#publisher}}
                <div class="publisher"><i class= "fas fa-bookmark ico"></i> {{publisher}}</div>
                {{/publisher}}
                <div class="year">{{day}} {{month}} {{year}}</div>
                {{#url}}
                <div class="address">
                  <a href="{{url}}" target= "_blank"><i class="fas fa-globe ico"></i> {{url}}</a>
                </div>
                {{/url}}
                {{#summary}}
                <p>{{{summary}}}</p>
                {{/summary}}
              </div>
            </div>
            {{/publications}}
          </div>
          {{/publicationsBool}}
          {{#languagesBool}}
          <!-- LANGUAGES -->
          <div class="box" id="section_languages">
            <h2><i class="fas fa-language ico"></i> Languages</h2>
            <ul class="list-group">
              {{#languages}}
              <li class=" list-group-item">{{language}}<span class="skill badge pull-right">{{fluency}}</span></li>
              {{/languages}}
            </ul>
          </div>
          {{/languagesBool}}
          {{#interestsBool}}
          <!-- HOBBIES -->
          <div class="box" id="section_hobbies">
            <h2><i class="fas fa-heart ico"></i> Interests</h2>
            {{#interests}}
            <div class="interests clearfix">
              <div class="item-interests">
                  {{name}}
              </div>
              <div class="col-sm-offset-1 col-sm-12 clearfix">
                {{#keywords}}
                <span class= "interest badge">{{{.}}}</span>
                {{/keywords}}
              </div>
            </div>
            {{/interests}}
          </div>
          {{/interestsBool}}
          {{#referencesBool}}
          <div class="box">
            <h2><i class= "fas fa-check-square ico"></i> References</h2>
            {{#references}}
            <blockquote>
              <div>{{{reference}}}</div>
              <footer>
                <a href="{{url}}" target= "_blank">{{name}}</a>
              </footer>
            </blockquote><br>
            {{/references}}
          </div>
          {{/referencesBool}}
          {{#educationBool}}
          <!-- EDUCATION -->
          <div class="box" id="section_education">
            <h2><i class="fas fa-university ico"></i> Education</h2>
            <ul id="education" class="clearfix">
              {{#education}}
              <li>
                <div class="year pull-left">{{#startDateYear}}{{startDateYear}} {{#endDateYear}}\u2013 {{/endDateYear}}{{/startDateYear}}{{endDateYear}}</div>
                <div class="description pull-right">
                  <h3>{{institution}}</h3>
                  <div class="where">{{organization}}</div>
                  {{#url}}
                  <div class="address">
                    <a href="{{url}}" target= "_blank"><i class="fas fa-globe ico"></i> {{url}}</a>
                  </div>
                  {{/url}}
                  {{#studyType}}<p><i class= "fas fa-graduation-cap ico"></i> {{studyType}}</p>{{/studyType}}
                  <p>{{area}}</p>
                  {{#score}}
                  <p>
                    Grade: {{score}}
                  </p>
                  {{/score}}
                  {{#educationCourses}}
                    <div>Courses</div>
                    <ul class="list-group">
                      {{#courses}}
                      <li class="list-group-item">{{{.}}}</li>
                      {{/courses}}
                    </ul>
                  {{/educationCourses}}
                </div>
              </li>
              {{/education}}
            </ul>
          </div>
          {{/educationBool}}
        </div>
      </div>
    </div>

  </body>
</html>
`,"style.css":`@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800);
@charset "utf-8";
@-webkit-viewport   { width: device-width; }
@-moz-viewport      { width: device-width; }
@-ms-viewport       { width: device-width; }
@-o-viewport        { width: device-width; }
@viewport           { width: device-width; }

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

body{
  font-family: 'Open Sans', Arial, Tahoma;
  font-weight: 400;
  color: #363636;
  background: #334960;
}

blockquote {
  font-size: 1em;
}

.container{
  position: absolute;
  left: 10px;
  margin-top: 80px;
  margin-bottom: 15px;
  background: #fff;
}

#photo-header{
  margin-top: -75px;
}
#photo{
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  padding: 5px;
  background: #334960;
  display: inline-block;
}
#photo img{
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
#text-header h1{
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: -1px;
}
#text-header h1::first-line{
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1.5em;
  text-transform: uppercase;
}
#text-header h1 span{
  color: #334960;
  opacity: 0.7;
}
#text-header h1 sup{
  opacity: 0.5;
}
#text-header:after{
  width: 100%;
  height: 3px;
  border-bottom: 1px solid #ddd;
  margin-top: 15px;
  content: '';
  display: block;
}

.box{
  padding-bottom: 10px;
  margin-bottom: 25px;
}
.box h2{
  color: #227c74;
  font-size: 1.5em;
  font-weight: 700;
  text-transform: uppercase;
}

#section_about p{
  margin-left: 1.2em;
}
#section_about h1{
  margin-left: 1.0em;
  font-size: 1.2em;
  font-weight: 600;
}
/*#section_work_experience{}*/
/*#section_awards{}*/
/*#section_volunteer{}*/
/*#section_projects{}*/
/*#section_contact{}*/
/*#section_skills{}*/
/*#section_publications{}*/
/*#section_languages{}*/
/*#section_hobbies{}*/
/*#section_education{}*/

#awards,
#education{
  margin-top: 20px;
  margin-bottom: 0;
  position: relative;
  padding: 1em 0;
  list-style: none;
}
#awards:before,
#education:before {
  width: 5px;
  height: 100%;
  position: absolute;
  left: 35px;
  top: 0;
  content: ' ';
  display: block;
  background: none;
}
#awards li,
#education li{
  width: 100%;
  z-index: 2;
  position: relative;
  float: left;
}
#awards .year,
#education .year{
  width: 14%;
  background: #fff;
  padding: 10px;
  font-weight: 700;
  display: inline-block;
}
#awards .description,
#education .description{
  width: 83%;
  display: inline-block;
  background: #eee;
  margin-bottom: 10px;
  position: relative;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
#awards .description:after,
#education .description:after {
  content: none;
  position: absolute;
  top: 15px;
  right: 0;
  left: -16px;
  height: 0;
  width: 0;
  border: solid transparent;
  border-right-color: #eee;
  border-width: 8px;
  pointer-events: none;
}
#awards .description h3,
#education .description h3{
  font-size: 1.2em;
  margin: 0;
  padding: 0;
  font-weight: 700;
}
#awards .description p,
#education .description p{
  margin-top: 5px;
  padding: 0;
}

.job{
  margin-bottom: 15px;
}
.job .details {
  margin-left: 3%;
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  background: #eee;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.job .where{
  font-size: 1.2em;
  font-weight: bold;
}
.job .year{
  opacity: 0.7;
}
.job .profession{
  font-size: 1.2em;
  font-weight: bold;
}
.job .description{
  line-height: 1.5em;
}
.job .highlights{
  padding: 5px 0;
  font-weight: bold;
}
.job .job-details {
  padding-left: 5%;
  width: 100%;
}
.publication {
  margin-bottom: 0;
}
.publication .name{
  font-size: 1em;
  font-weight: bold;
}
.publication .year{
    opacity: 0.7;
}
.publication p{
  margin: 0;
  padding-top: 10px;
}

.contact-item{
  width: 100%;
  float: left;
}
.contact-item .icon{
  padding: 10px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  color: #32475c;
  background: #eee;
}
.contact-item:last-child .icon{
  border-bottom: none;
}
.contact-item .title{
  width: 80%;
  width: calc(100% - 55px);
  font-weight: 700;
  opacity: 0.9;
}
.contact-item .title.only{
  margin-top: 10px;
}
.contact-item .description{
  width: 80%;
  width: calc(100% - 55px);
  color: #334960;
}

.item-interests,
.item-skills{
  height: 30px;
  color: #334960;
  padding: 5px 10px;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.1em;
  font-weight: 600;
}
.interest,
.skill{
  color: #fff;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px 10px;
  background: #32475c;
  position: relative;
  font-size: .85em;
}
.skill-level {
  background-color: #227c74;
  border-radius: 4px;
  color: #fff;
  padding: 1px 8px;
  font-size: .75em;
  position: absolute;
  margin: 1px 10px;
}

#language-skills .skill{
  margin: 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.list-group {
  /*/ No need to set list-style: none; since .list-group-item is block level /*/
  margin-bottom: 20px;
  padding-left: 0; /*/ reset padding because ul and ol /*/
}


/*/ Individual list items //
//
// Use on \`li\`s or \`div\`s within the \`.list-group\` parent. /*/

.list-group-item {
  position: relative;
  display: list-item;
  padding: 0px;
  /*/ Place the border on the list items and negative margin up for better styling /*/
  margin: 0px 0px -1px 20px;
  border: none;
  /*
  background-color: @list-group-bg;
  border: 1px solid @list-group-border;

  // Round the first and last items //
  &:first-child {
    .border-top-radius(@list-group-border-radius);
  }
  &:last-child {
    margin-bottom: 0;
    .border-bottom-radius(@list-group-border-radius);
  }
  */
}

.preload img {
  animation: rotation 3s infinite linear;
}

@media print {
.preload img {
  animation: none;
}
}

.preload a {
    color: #666666;
    text-decoration: none;
}

.ribbon {
    right: 0px;
    position: absolute;
    z-index: 200;
    line-height: 100%;
    text-align: right;
    /* display: none; scale: 0.65; */
}

.dark-include{ display: none; }
.dark-exclude{ display: initial; }

@media (prefers-color-scheme: dark) {
  .dark-include{ display: initial; }
  .dark-exclude{ display: none; }
  body{
    background: #1c2835;
    color: #aaaaaa;
  }

  .container{
    background: #0b0f14;
  }
  #photo{
    background: #1c2835;
  }

  .list-group-item {
    background: #0b0f14;
  }
  #awards .year,
  #education .year{
    background: #0b0f14;
  }
  #text-header h1 span{
    color: #5b7fa9;
  }
  .item-interests,
  .item-skills{
    color: #5b7fa9;
  }

  #awards .description,
  #education .description{
    background: #10171e;
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
  }
  #awards .description:after,
  #education .description:after {
    border-right-color: #10171e;
  }
  .job .details {
    background: #10171e;
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
  }
  .contact-item .icon{
    background: #10171e;
    color: #5b7fa9;
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
  }
  #language-skills .skill{
    border-bottom: 1px solid #10171e;
  }
}
`},hr={".":["LICENSE","README.md","index.js","package.json","preloading.template","print.css","resume.template","style.css"]};Ha=function(s,I){var f=Ua(s);return f!==void 0?f:""},Fa=function(s,I){var f=ei(s);return f===void 0&&(f=[]),I&&I.withFileTypes?f.map(function(N){var P=ni(s)+"/"+N,V=ei(P)!==void 0;return{name:N,isFile:function(){return!V},isDirectory:function(){return V}}}):f},Wa=function(s){return Ua(s)!==void 0||ei(s)!==void 0},Oa=function(){},Na=function(){},ri=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},xa=ri,$a=function(){},Ga=function(){},qa=function(){return{pipe:function(s){return s},on:function(){return this}}},ja=function(){return{write:function(){},end:function(){},on:function(){return this}}},c_={readFileSync:Ha,readdirSync:Fa,existsSync:Wa,writeFileSync:Oa,mkdirSync:Na,statSync:ri,lstatSync:xa,unlinkSync:$a,rmdirSync:Ga,createReadStream:qa,createWriteStream:ja}});var Va=bn((pr,Hr)=>{pe();(function(){var s,I="4.17.21",f=200,N="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",P="Expected a function",V="Invalid `variable` option passed into `_.template`",Q="__lodash_hash_undefined__",te=500,Ae="__lodash_placeholder__",be=1,Ue=2,Me=4,Ie=1,Se=2,fe=1,Oe=2,on=4,Ee=8,Qe=16,t=32,i=64,d=128,c=256,m=512,k=30,v="...",y=800,w=16,g=1,p=2,b=3,h=1/0,R=9007199254740991,B=17976931348623157e292,D=NaN,O=4294967295,F=O-1,_e=O>>>1,re=[["ary",d],["bind",fe],["bindKey",Oe],["curry",Ee],["curryRight",Qe],["flip",m],["partial",t],["partialRight",i],["rearg",c]],ce="[object Arguments]",ee="[object Array]",de="[object AsyncFunction]",le="[object Boolean]",me="[object Date]",je="[object DOMException]",en="[object Error]",yn="[object Function]",ze="[object GeneratorFunction]",Ne="[object Map]",mr="[object Number]",_s="[object Null]",kn="[object Object]",ui="[object Promise]",ms="[object Proxy]",vr="[object RegExp]",fn="[object Set]",wr="[object String]",Or="[object Symbol]",vs="[object Undefined]",br="[object WeakMap]",ws="[object WeakSet]",yr="[object ArrayBuffer]",Qn="[object DataView]",zt="[object Float32Array]",Bt="[object Float64Array]",Dt="[object Int8Array]",Ut="[object Int16Array]",Ht="[object Int32Array]",Ft="[object Uint8Array]",Wt="[object Uint8ClampedArray]",Ot="[object Uint16Array]",Nt="[object Uint32Array]",bs=/\b__p \+= '';/g,ys=/\b(__p \+=) '' \+/g,ks=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ii=/&(?:amp|lt|gt|quot|#39);/g,di=/[&<>"']/g,As=RegExp(ii.source),Ss=RegExp(di.source),Cs=/<%-([\s\S]+?)%>/g,Ps=/<%([\s\S]+?)%>/g,ai=/<%=([\s\S]+?)%>/g,Es=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rs=/^\w*$/,Ls=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xt=/[\\^$.*+?()[\]{}|]/g,Ts=RegExp(xt.source),$t=/^\s+/,Ms=/\s/,Is=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,zs=/\{\n\/\* \[wrapped with (.+)\] \*/,Bs=/,? & /,Ds=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Us=/[()=,{}\[\]\/\s]/,Hs=/\\(\\)?/g,Fs=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,si=/\w*$/,Ws=/^[-+]0x[0-9a-f]+$/i,Os=/^0b[01]+$/i,Ns=/^\[object .+?Constructor\]$/,xs=/^0o[0-7]+$/i,$s=/^(?:0|[1-9]\d*)$/,Gs=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Nr=/($^)/,qs=/['\n\r\u2028\u2029\\]/g,xr="\\ud800-\\udfff",js="\\u0300-\\u036f",Ys="\\ufe20-\\ufe2f",Ks="\\u20d0-\\u20ff",ci=js+Ys+Ks,oi="\\u2700-\\u27bf",fi="a-z\\xdf-\\xf6\\xf8-\\xff",Vs="\\xac\\xb1\\xd7\\xf7",Zs="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Xs="\\u2000-\\u206f",Js=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",li="A-Z\\xc0-\\xd6\\xd8-\\xde",hi="\\ufe0e\\ufe0f",pi=Vs+Zs+Xs+Js,Gt="['\u2019]",Qs="["+xr+"]",gi="["+pi+"]",$r="["+ci+"]",_i="\\d+",ec="["+oi+"]",mi="["+fi+"]",vi="[^"+xr+pi+_i+oi+fi+li+"]",qt="\\ud83c[\\udffb-\\udfff]",nc="(?:"+$r+"|"+qt+")",wi="[^"+xr+"]",jt="(?:\\ud83c[\\udde6-\\uddff]){2}",Yt="[\\ud800-\\udbff][\\udc00-\\udfff]",er="["+li+"]",bi="\\u200d",yi="(?:"+mi+"|"+vi+")",rc="(?:"+er+"|"+vi+")",ki="(?:"+Gt+"(?:d|ll|m|re|s|t|ve))?",Ai="(?:"+Gt+"(?:D|LL|M|RE|S|T|VE))?",Si=nc+"?",Ci="["+hi+"]?",tc="(?:"+bi+"(?:"+[wi,jt,Yt].join("|")+")"+Ci+Si+")*",uc="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ic="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Pi=Ci+Si+tc,dc="(?:"+[ec,jt,Yt].join("|")+")"+Pi,ac="(?:"+[wi+$r+"?",$r,jt,Yt,Qs].join("|")+")",sc=RegExp(Gt,"g"),cc=RegExp($r,"g"),Kt=RegExp(qt+"(?="+qt+")|"+ac+Pi,"g"),oc=RegExp([er+"?"+mi+"+"+ki+"(?="+[gi,er,"$"].join("|")+")",rc+"+"+Ai+"(?="+[gi,er+yi,"$"].join("|")+")",er+"?"+yi+"+"+ki,er+"+"+Ai,ic,uc,_i,dc].join("|"),"g"),fc=RegExp("["+bi+xr+ci+hi+"]"),lc=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,hc=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],pc=-1,he={};he[zt]=he[Bt]=he[Dt]=he[Ut]=he[Ht]=he[Ft]=he[Wt]=he[Ot]=he[Nt]=!0,he[ce]=he[ee]=he[yr]=he[le]=he[Qn]=he[me]=he[en]=he[yn]=he[Ne]=he[mr]=he[kn]=he[vr]=he[fn]=he[wr]=he[br]=!1;var oe={};oe[ce]=oe[ee]=oe[yr]=oe[Qn]=oe[le]=oe[me]=oe[zt]=oe[Bt]=oe[Dt]=oe[Ut]=oe[Ht]=oe[Ne]=oe[mr]=oe[kn]=oe[vr]=oe[fn]=oe[wr]=oe[Or]=oe[Ft]=oe[Wt]=oe[Ot]=oe[Nt]=!0,oe[en]=oe[yn]=oe[br]=!1;var gc={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},_c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},mc={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},vc={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},wc=parseFloat,bc=parseInt,Ei=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,yc=typeof self=="object"&&self&&self.Object===Object&&self,Re=Ei||yc||Function("return this")(),Vt=typeof pr=="object"&&pr&&!pr.nodeType&&pr,$n=Vt&&typeof Hr=="object"&&Hr&&!Hr.nodeType&&Hr,Ri=$n&&$n.exports===Vt,Zt=Ri&&Ei.process,nn=(function(){try{var S=$n&&$n.require&&$n.require("util").types;return S||Zt&&Zt.binding&&Zt.binding("util")}catch{}})(),Li=nn&&nn.isArrayBuffer,Ti=nn&&nn.isDate,Mi=nn&&nn.isMap,Ii=nn&&nn.isRegExp,zi=nn&&nn.isSet,Bi=nn&&nn.isTypedArray;function Ye(S,L,E){switch(E.length){case 0:return S.call(L);case 1:return S.call(L,E[0]);case 2:return S.call(L,E[0],E[1]);case 3:return S.call(L,E[0],E[1],E[2])}return S.apply(L,E)}function kc(S,L,E,H){for(var q=-1,ue=S==null?0:S.length;++q<ue;){var Ce=S[q];L(H,Ce,E(Ce),S)}return H}function rn(S,L){for(var E=-1,H=S==null?0:S.length;++E<H&&L(S[E],E,S)!==!1;);return S}function Ac(S,L){for(var E=S==null?0:S.length;E--&&L(S[E],E,S)!==!1;);return S}function Di(S,L){for(var E=-1,H=S==null?0:S.length;++E<H;)if(!L(S[E],E,S))return!1;return!0}function In(S,L){for(var E=-1,H=S==null?0:S.length,q=0,ue=[];++E<H;){var Ce=S[E];L(Ce,E,S)&&(ue[q++]=Ce)}return ue}function Gr(S,L){var E=S==null?0:S.length;return!!E&&nr(S,L,0)>-1}function Xt(S,L,E){for(var H=-1,q=S==null?0:S.length;++H<q;)if(E(L,S[H]))return!0;return!1}function ge(S,L){for(var E=-1,H=S==null?0:S.length,q=Array(H);++E<H;)q[E]=L(S[E],E,S);return q}function zn(S,L){for(var E=-1,H=L.length,q=S.length;++E<H;)S[q+E]=L[E];return S}function Jt(S,L,E,H){var q=-1,ue=S==null?0:S.length;for(H&&ue&&(E=S[++q]);++q<ue;)E=L(E,S[q],q,S);return E}function Sc(S,L,E,H){var q=S==null?0:S.length;for(H&&q&&(E=S[--q]);q--;)E=L(E,S[q],q,S);return E}function Qt(S,L){for(var E=-1,H=S==null?0:S.length;++E<H;)if(L(S[E],E,S))return!0;return!1}var Cc=eu("length");function Pc(S){return S.split("")}function Ec(S){return S.match(Ds)||[]}function Ui(S,L,E){var H;return E(S,function(q,ue,Ce){if(L(q,ue,Ce))return H=ue,!1}),H}function qr(S,L,E,H){for(var q=S.length,ue=E+(H?1:-1);H?ue--:++ue<q;)if(L(S[ue],ue,S))return ue;return-1}function nr(S,L,E){return L===L?Wc(S,L,E):qr(S,Hi,E)}function Rc(S,L,E,H){for(var q=E-1,ue=S.length;++q<ue;)if(H(S[q],L))return q;return-1}function Hi(S){return S!==S}function Fi(S,L){var E=S==null?0:S.length;return E?ru(S,L)/E:D}function eu(S){return function(L){return L==null?s:L[S]}}function nu(S){return function(L){return S==null?s:S[L]}}function Wi(S,L,E,H,q){return q(S,function(ue,Ce,se){E=H?(H=!1,ue):L(E,ue,Ce,se)}),E}function Lc(S,L){var E=S.length;for(S.sort(L);E--;)S[E]=S[E].value;return S}function ru(S,L){for(var E,H=-1,q=S.length;++H<q;){var ue=L(S[H]);ue!==s&&(E=E===s?ue:E+ue)}return E}function tu(S,L){for(var E=-1,H=Array(S);++E<S;)H[E]=L(E);return H}function Tc(S,L){return ge(L,function(E){return[E,S[E]]})}function Oi(S){return S&&S.slice(0,Gi(S)+1).replace($t,"")}function Ke(S){return function(L){return S(L)}}function uu(S,L){return ge(L,function(E){return S[E]})}function kr(S,L){return S.has(L)}function Ni(S,L){for(var E=-1,H=S.length;++E<H&&nr(L,S[E],0)>-1;);return E}function xi(S,L){for(var E=S.length;E--&&nr(L,S[E],0)>-1;);return E}function Mc(S,L){for(var E=S.length,H=0;E--;)S[E]===L&&++H;return H}var Ic=nu(gc),zc=nu(_c);function Bc(S){return"\\"+vc[S]}function Dc(S,L){return S==null?s:S[L]}function rr(S){return fc.test(S)}function Uc(S){return lc.test(S)}function Hc(S){for(var L,E=[];!(L=S.next()).done;)E.push(L.value);return E}function iu(S){var L=-1,E=Array(S.size);return S.forEach(function(H,q){E[++L]=[q,H]}),E}function $i(S,L){return function(E){return S(L(E))}}function Bn(S,L){for(var E=-1,H=S.length,q=0,ue=[];++E<H;){var Ce=S[E];(Ce===L||Ce===Ae)&&(S[E]=Ae,ue[q++]=E)}return ue}function jr(S){var L=-1,E=Array(S.size);return S.forEach(function(H){E[++L]=H}),E}function Fc(S){var L=-1,E=Array(S.size);return S.forEach(function(H){E[++L]=[H,H]}),E}function Wc(S,L,E){for(var H=E-1,q=S.length;++H<q;)if(S[H]===L)return H;return-1}function Oc(S,L,E){for(var H=E+1;H--;)if(S[H]===L)return H;return H}function tr(S){return rr(S)?xc(S):Cc(S)}function ln(S){return rr(S)?$c(S):Pc(S)}function Gi(S){for(var L=S.length;L--&&Ms.test(S.charAt(L)););return L}var Nc=nu(mc);function xc(S){for(var L=Kt.lastIndex=0;Kt.test(S);)++L;return L}function $c(S){return S.match(Kt)||[]}function Gc(S){return S.match(oc)||[]}var qc=(function S(L){L=L==null?Re:Dn.defaults(Re.Object(),L,Dn.pick(Re,hc));var E=L.Array,H=L.Date,q=L.Error,ue=L.Function,Ce=L.Math,se=L.Object,du=L.RegExp,jc=L.String,tn=L.TypeError,Yr=E.prototype,Yc=ue.prototype,ur=se.prototype,Kr=L["__core-js_shared__"],Vr=Yc.toString,ae=ur.hasOwnProperty,Kc=0,qi=(function(){var e=/[^.]+$/.exec(Kr&&Kr.keys&&Kr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})(),Zr=ur.toString,Vc=Vr.call(se),Zc=Re._,Xc=du("^"+Vr.call(ae).replace(xt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Xr=Ri?L.Buffer:s,Un=L.Symbol,Jr=L.Uint8Array,ji=Xr?Xr.allocUnsafe:s,Qr=$i(se.getPrototypeOf,se),Yi=se.create,Ki=ur.propertyIsEnumerable,et=Yr.splice,Vi=Un?Un.isConcatSpreadable:s,Ar=Un?Un.iterator:s,Gn=Un?Un.toStringTag:s,nt=(function(){try{var e=Vn(se,"defineProperty");return e({},"",{}),e}catch{}})(),Jc=L.clearTimeout!==Re.clearTimeout&&L.clearTimeout,Qc=H&&H.now!==Re.Date.now&&H.now,eo=L.setTimeout!==Re.setTimeout&&L.setTimeout,rt=Ce.ceil,tt=Ce.floor,au=se.getOwnPropertySymbols,no=Xr?Xr.isBuffer:s,Zi=L.isFinite,ro=Yr.join,to=$i(se.keys,se),Pe=Ce.max,Be=Ce.min,uo=H.now,io=L.parseInt,Xi=Ce.random,ao=Yr.reverse,su=Vn(L,"DataView"),Sr=Vn(L,"Map"),cu=Vn(L,"Promise"),ir=Vn(L,"Set"),Cr=Vn(L,"WeakMap"),Pr=Vn(se,"create"),ut=Cr&&new Cr,dr={},so=Zn(su),co=Zn(Sr),oo=Zn(cu),fo=Zn(ir),lo=Zn(Cr),it=Un?Un.prototype:s,Er=it?it.valueOf:s,Ji=it?it.toString:s;function o(e){if(we(e)&&!j(e)&&!(e instanceof J)){if(e instanceof un)return e;if(ae.call(e,"__wrapped__"))return Qd(e)}return new un(e)}var ar=(function(){function e(){}return function(n){if(!ve(n))return{};if(Yi)return Yi(n);e.prototype=n;var r=new e;return e.prototype=s,r}})();function dt(){}function un(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=s}o.templateSettings={escape:Cs,evaluate:Ps,interpolate:ai,variable:"",imports:{_:o}},o.prototype=dt.prototype,o.prototype.constructor=o,un.prototype=ar(dt.prototype),un.prototype.constructor=un;function J(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=O,this.__views__=[]}function ho(){var e=new J(this.__wrapped__);return e.__actions__=xe(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=xe(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=xe(this.__views__),e}function po(){if(this.__filtered__){var e=new J(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function go(){var e=this.__wrapped__.value(),n=this.__dir__,r=j(e),u=n<0,a=r?e.length:0,l=Rf(0,a,this.__views__),_=l.start,A=l.end,C=A-_,T=u?A:_-1,M=this.__iteratees__,z=M.length,U=0,W=Be(C,this.__takeCount__);if(!r||!u&&a==C&&W==C)return kd(e,this.__actions__);var $=[];e:for(;C--&&U<W;){T+=n;for(var K=-1,G=e[T];++K<z;){var X=M[K],ne=X.iteratee,Xe=X.type,We=ne(G);if(Xe==p)G=We;else if(!We){if(Xe==g)continue e;break e}}$[U++]=G}return $}J.prototype=ar(dt.prototype),J.prototype.constructor=J;function qn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var u=e[n];this.set(u[0],u[1])}}function _o(){this.__data__=Pr?Pr(null):{},this.size=0}function mo(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function vo(e){var n=this.__data__;if(Pr){var r=n[e];return r===Q?s:r}return ae.call(n,e)?n[e]:s}function wo(e){var n=this.__data__;return Pr?n[e]!==s:ae.call(n,e)}function bo(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Pr&&n===s?Q:n,this}qn.prototype.clear=_o,qn.prototype.delete=mo,qn.prototype.get=vo,qn.prototype.has=wo,qn.prototype.set=bo;function An(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var u=e[n];this.set(u[0],u[1])}}function yo(){this.__data__=[],this.size=0}function ko(e){var n=this.__data__,r=at(n,e);if(r<0)return!1;var u=n.length-1;return r==u?n.pop():et.call(n,r,1),--this.size,!0}function Ao(e){var n=this.__data__,r=at(n,e);return r<0?s:n[r][1]}function So(e){return at(this.__data__,e)>-1}function Co(e,n){var r=this.__data__,u=at(r,e);return u<0?(++this.size,r.push([e,n])):r[u][1]=n,this}An.prototype.clear=yo,An.prototype.delete=ko,An.prototype.get=Ao,An.prototype.has=So,An.prototype.set=Co;function Sn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var u=e[n];this.set(u[0],u[1])}}function Po(){this.size=0,this.__data__={hash:new qn,map:new(Sr||An),string:new qn}}function Eo(e){var n=wt(this,e).delete(e);return this.size-=n?1:0,n}function Ro(e){return wt(this,e).get(e)}function Lo(e){return wt(this,e).has(e)}function To(e,n){var r=wt(this,e),u=r.size;return r.set(e,n),this.size+=r.size==u?0:1,this}Sn.prototype.clear=Po,Sn.prototype.delete=Eo,Sn.prototype.get=Ro,Sn.prototype.has=Lo,Sn.prototype.set=To;function jn(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new Sn;++n<r;)this.add(e[n])}function Mo(e){return this.__data__.set(e,Q),this}function Io(e){return this.__data__.has(e)}jn.prototype.add=jn.prototype.push=Mo,jn.prototype.has=Io;function hn(e){var n=this.__data__=new An(e);this.size=n.size}function zo(){this.__data__=new An,this.size=0}function Bo(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function Do(e){return this.__data__.get(e)}function Uo(e){return this.__data__.has(e)}function Ho(e,n){var r=this.__data__;if(r instanceof An){var u=r.__data__;if(!Sr||u.length<f-1)return u.push([e,n]),this.size=++r.size,this;r=this.__data__=new Sn(u)}return r.set(e,n),this.size=r.size,this}hn.prototype.clear=zo,hn.prototype.delete=Bo,hn.prototype.get=Do,hn.prototype.has=Uo,hn.prototype.set=Ho;function Qi(e,n){var r=j(e),u=!r&&Xn(e),a=!r&&!u&&Nn(e),l=!r&&!u&&!a&&fr(e),_=r||u||a||l,A=_?tu(e.length,jc):[],C=A.length;for(var T in e)(n||ae.call(e,T))&&!(_&&(T=="length"||a&&(T=="offset"||T=="parent")||l&&(T=="buffer"||T=="byteLength"||T=="byteOffset")||Rn(T,C)))&&A.push(T);return A}function ed(e){var n=e.length;return n?e[bu(0,n-1)]:s}function Fo(e,n){return bt(xe(e),Yn(n,0,e.length))}function Wo(e){return bt(xe(e))}function ou(e,n,r){(r!==s&&!pn(e[n],r)||r===s&&!(n in e))&&Cn(e,n,r)}function Rr(e,n,r){var u=e[n];(!(ae.call(e,n)&&pn(u,r))||r===s&&!(n in e))&&Cn(e,n,r)}function at(e,n){for(var r=e.length;r--;)if(pn(e[r][0],n))return r;return-1}function Oo(e,n,r,u){return Hn(e,function(a,l,_){n(u,a,r(a),_)}),u}function nd(e,n){return e&&vn(n,Le(n),e)}function No(e,n){return e&&vn(n,Ge(n),e)}function Cn(e,n,r){n=="__proto__"&&nt?nt(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function fu(e,n){for(var r=-1,u=n.length,a=E(u),l=e==null;++r<u;)a[r]=l?s:qu(e,n[r]);return a}function Yn(e,n,r){return e===e&&(r!==s&&(e=e<=r?e:r),n!==s&&(e=e>=n?e:n)),e}function dn(e,n,r,u,a,l){var _,A=n&be,C=n&Ue,T=n&Me;if(r&&(_=a?r(e,u,a,l):r(e)),_!==s)return _;if(!ve(e))return e;var M=j(e);if(M){if(_=Tf(e),!A)return xe(e,_)}else{var z=De(e),U=z==yn||z==ze;if(Nn(e))return Cd(e,A);if(z==kn||z==ce||U&&!a){if(_=C||U?{}:Gd(e),!A)return C?wf(e,No(_,e)):vf(e,nd(_,e))}else{if(!oe[z])return a?e:{};_=Mf(e,z,A)}}l||(l=new hn);var W=l.get(e);if(W)return W;l.set(e,_),wa(e)?e.forEach(function(G){_.add(dn(G,n,r,G,e,l))}):ma(e)&&e.forEach(function(G,X){_.set(X,dn(G,n,r,X,e,l))});var $=T?C?Mu:Tu:C?Ge:Le,K=M?s:$(e);return rn(K||e,function(G,X){K&&(X=G,G=e[X]),Rr(_,X,dn(G,n,r,X,e,l))}),_}function xo(e){var n=Le(e);return function(r){return rd(r,e,n)}}function rd(e,n,r){var u=r.length;if(e==null)return!u;for(e=se(e);u--;){var a=r[u],l=n[a],_=e[a];if(_===s&&!(a in e)||!l(_))return!1}return!0}function td(e,n,r){if(typeof e!="function")throw new tn(P);return Dr(function(){e.apply(s,r)},n)}function Lr(e,n,r,u){var a=-1,l=Gr,_=!0,A=e.length,C=[],T=n.length;if(!A)return C;r&&(n=ge(n,Ke(r))),u?(l=Xt,_=!1):n.length>=f&&(l=kr,_=!1,n=new jn(n));e:for(;++a<A;){var M=e[a],z=r==null?M:r(M);if(M=u||M!==0?M:0,_&&z===z){for(var U=T;U--;)if(n[U]===z)continue e;C.push(M)}else l(n,z,u)||C.push(M)}return C}var Hn=Td(mn),ud=Td(hu,!0);function $o(e,n){var r=!0;return Hn(e,function(u,a,l){return r=!!n(u,a,l),r}),r}function st(e,n,r){for(var u=-1,a=e.length;++u<a;){var l=e[u],_=n(l);if(_!=null&&(A===s?_===_&&!Ze(_):r(_,A)))var A=_,C=l}return C}function Go(e,n,r,u){var a=e.length;for(r=Y(r),r<0&&(r=-r>a?0:a+r),u=u===s||u>a?a:Y(u),u<0&&(u+=a),u=r>u?0:ya(u);r<u;)e[r++]=n;return e}function id(e,n){var r=[];return Hn(e,function(u,a,l){n(u,a,l)&&r.push(u)}),r}function Te(e,n,r,u,a){var l=-1,_=e.length;for(r||(r=zf),a||(a=[]);++l<_;){var A=e[l];n>0&&r(A)?n>1?Te(A,n-1,r,u,a):zn(a,A):u||(a[a.length]=A)}return a}var lu=Md(),dd=Md(!0);function mn(e,n){return e&&lu(e,n,Le)}function hu(e,n){return e&&dd(e,n,Le)}function ct(e,n){return In(n,function(r){return Ln(e[r])})}function Kn(e,n){n=Wn(n,e);for(var r=0,u=n.length;e!=null&&r<u;)e=e[wn(n[r++])];return r&&r==u?e:s}function ad(e,n,r){var u=n(e);return j(e)?u:zn(u,r(e))}function He(e){return e==null?e===s?vs:_s:Gn&&Gn in se(e)?Ef(e):Of(e)}function pu(e,n){return e>n}function qo(e,n){return e!=null&&ae.call(e,n)}function jo(e,n){return e!=null&&n in se(e)}function Yo(e,n,r){return e>=Be(n,r)&&e<Pe(n,r)}function gu(e,n,r){for(var u=r?Xt:Gr,a=e[0].length,l=e.length,_=l,A=E(l),C=1/0,T=[];_--;){var M=e[_];_&&n&&(M=ge(M,Ke(n))),C=Be(M.length,C),A[_]=!r&&(n||a>=120&&M.length>=120)?new jn(_&&M):s}M=e[0];var z=-1,U=A[0];e:for(;++z<a&&T.length<C;){var W=M[z],$=n?n(W):W;if(W=r||W!==0?W:0,!(U?kr(U,$):u(T,$,r))){for(_=l;--_;){var K=A[_];if(!(K?kr(K,$):u(e[_],$,r)))continue e}U&&U.push($),T.push(W)}}return T}function Ko(e,n,r,u){return mn(e,function(a,l,_){n(u,r(a),l,_)}),u}function Tr(e,n,r){n=Wn(n,e),e=Kd(e,n);var u=e==null?e:e[wn(sn(n))];return u==null?s:Ye(u,e,r)}function sd(e){return we(e)&&He(e)==ce}function Vo(e){return we(e)&&He(e)==yr}function Zo(e){return we(e)&&He(e)==me}function Mr(e,n,r,u,a){return e===n?!0:e==null||n==null||!we(e)&&!we(n)?e!==e&&n!==n:Xo(e,n,r,u,Mr,a)}function Xo(e,n,r,u,a,l){var _=j(e),A=j(n),C=_?ee:De(e),T=A?ee:De(n);C=C==ce?kn:C,T=T==ce?kn:T;var M=C==kn,z=T==kn,U=C==T;if(U&&Nn(e)){if(!Nn(n))return!1;_=!0,M=!1}if(U&&!M)return l||(l=new hn),_||fr(e)?Nd(e,n,r,u,a,l):Cf(e,n,C,r,u,a,l);if(!(r&Ie)){var W=M&&ae.call(e,"__wrapped__"),$=z&&ae.call(n,"__wrapped__");if(W||$){var K=W?e.value():e,G=$?n.value():n;return l||(l=new hn),a(K,G,r,u,l)}}return U?(l||(l=new hn),Pf(e,n,r,u,a,l)):!1}function Jo(e){return we(e)&&De(e)==Ne}function _u(e,n,r,u){var a=r.length,l=a,_=!u;if(e==null)return!l;for(e=se(e);a--;){var A=r[a];if(_&&A[2]?A[1]!==e[A[0]]:!(A[0]in e))return!1}for(;++a<l;){A=r[a];var C=A[0],T=e[C],M=A[1];if(_&&A[2]){if(T===s&&!(C in e))return!1}else{var z=new hn;if(u)var U=u(T,M,C,e,n,z);if(!(U===s?Mr(M,T,Ie|Se,u,z):U))return!1}}return!0}function cd(e){if(!ve(e)||Df(e))return!1;var n=Ln(e)?Xc:Ns;return n.test(Zn(e))}function Qo(e){return we(e)&&He(e)==vr}function ef(e){return we(e)&&De(e)==fn}function nf(e){return we(e)&&Pt(e.length)&&!!he[He(e)]}function od(e){return typeof e=="function"?e:e==null?qe:typeof e=="object"?j(e)?hd(e[0],e[1]):ld(e):Ia(e)}function mu(e){if(!Br(e))return to(e);var n=[];for(var r in se(e))ae.call(e,r)&&r!="constructor"&&n.push(r);return n}function rf(e){if(!ve(e))return Wf(e);var n=Br(e),r=[];for(var u in e)u=="constructor"&&(n||!ae.call(e,u))||r.push(u);return r}function vu(e,n){return e<n}function fd(e,n){var r=-1,u=$e(e)?E(e.length):[];return Hn(e,function(a,l,_){u[++r]=n(a,l,_)}),u}function ld(e){var n=zu(e);return n.length==1&&n[0][2]?jd(n[0][0],n[0][1]):function(r){return r===e||_u(r,e,n)}}function hd(e,n){return Du(e)&&qd(n)?jd(wn(e),n):function(r){var u=qu(r,e);return u===s&&u===n?ju(r,e):Mr(n,u,Ie|Se)}}function ot(e,n,r,u,a){e!==n&&lu(n,function(l,_){if(a||(a=new hn),ve(l))tf(e,n,_,r,ot,u,a);else{var A=u?u(Hu(e,_),l,_+"",e,n,a):s;A===s&&(A=l),ou(e,_,A)}},Ge)}function tf(e,n,r,u,a,l,_){var A=Hu(e,r),C=Hu(n,r),T=_.get(C);if(T){ou(e,r,T);return}var M=l?l(A,C,r+"",e,n,_):s,z=M===s;if(z){var U=j(C),W=!U&&Nn(C),$=!U&&!W&&fr(C);M=C,U||W||$?j(A)?M=A:ye(A)?M=xe(A):W?(z=!1,M=Cd(C,!0)):$?(z=!1,M=Pd(C,!0)):M=[]:Ur(C)||Xn(C)?(M=A,Xn(A)?M=ka(A):(!ve(A)||Ln(A))&&(M=Gd(C))):z=!1}z&&(_.set(C,M),a(M,C,u,l,_),_.delete(C)),ou(e,r,M)}function pd(e,n){var r=e.length;if(r)return n+=n<0?r:0,Rn(n,r)?e[n]:s}function gd(e,n,r){n.length?n=ge(n,function(l){return j(l)?function(_){return Kn(_,l.length===1?l[0]:l)}:l}):n=[qe];var u=-1;n=ge(n,Ke(x()));var a=fd(e,function(l,_,A){var C=ge(n,function(T){return T(l)});return{criteria:C,index:++u,value:l}});return Lc(a,function(l,_){return mf(l,_,r)})}function uf(e,n){return _d(e,n,function(r,u){return ju(e,u)})}function _d(e,n,r){for(var u=-1,a=n.length,l={};++u<a;){var _=n[u],A=Kn(e,_);r(A,_)&&Ir(l,Wn(_,e),A)}return l}function df(e){return function(n){return Kn(n,e)}}function wu(e,n,r,u){var a=u?Rc:nr,l=-1,_=n.length,A=e;for(e===n&&(n=xe(n)),r&&(A=ge(e,Ke(r)));++l<_;)for(var C=0,T=n[l],M=r?r(T):T;(C=a(A,M,C,u))>-1;)A!==e&&et.call(A,C,1),et.call(e,C,1);return e}function md(e,n){for(var r=e?n.length:0,u=r-1;r--;){var a=n[r];if(r==u||a!==l){var l=a;Rn(a)?et.call(e,a,1):Au(e,a)}}return e}function bu(e,n){return e+tt(Xi()*(n-e+1))}function af(e,n,r,u){for(var a=-1,l=Pe(rt((n-e)/(r||1)),0),_=E(l);l--;)_[u?l:++a]=e,e+=r;return _}function yu(e,n){var r="";if(!e||n<1||n>R)return r;do n%2&&(r+=e),n=tt(n/2),n&&(e+=e);while(n);return r}function Z(e,n){return Fu(Yd(e,n,qe),e+"")}function sf(e){return ed(lr(e))}function cf(e,n){var r=lr(e);return bt(r,Yn(n,0,r.length))}function Ir(e,n,r,u){if(!ve(e))return e;n=Wn(n,e);for(var a=-1,l=n.length,_=l-1,A=e;A!=null&&++a<l;){var C=wn(n[a]),T=r;if(C==="__proto__"||C==="constructor"||C==="prototype")return e;if(a!=_){var M=A[C];T=u?u(M,C,A):s,T===s&&(T=ve(M)?M:Rn(n[a+1])?[]:{})}Rr(A,C,T),A=A[C]}return e}var vd=ut?function(e,n){return ut.set(e,n),e}:qe,of=nt?function(e,n){return nt(e,"toString",{configurable:!0,enumerable:!1,value:Ku(n),writable:!0})}:qe;function ff(e){return bt(lr(e))}function an(e,n,r){var u=-1,a=e.length;n<0&&(n=-n>a?0:a+n),r=r>a?a:r,r<0&&(r+=a),a=n>r?0:r-n>>>0,n>>>=0;for(var l=E(a);++u<a;)l[u]=e[u+n];return l}function lf(e,n){var r;return Hn(e,function(u,a,l){return r=n(u,a,l),!r}),!!r}function ft(e,n,r){var u=0,a=e==null?u:e.length;if(typeof n=="number"&&n===n&&a<=_e){for(;u<a;){var l=u+a>>>1,_=e[l];_!==null&&!Ze(_)&&(r?_<=n:_<n)?u=l+1:a=l}return a}return ku(e,n,qe,r)}function ku(e,n,r,u){var a=0,l=e==null?0:e.length;if(l===0)return 0;n=r(n);for(var _=n!==n,A=n===null,C=Ze(n),T=n===s;a<l;){var M=tt((a+l)/2),z=r(e[M]),U=z!==s,W=z===null,$=z===z,K=Ze(z);if(_)var G=u||$;else T?G=$&&(u||U):A?G=$&&U&&(u||!W):C?G=$&&U&&!W&&(u||!K):W||K?G=!1:G=u?z<=n:z<n;G?a=M+1:l=M}return Be(l,F)}function wd(e,n){for(var r=-1,u=e.length,a=0,l=[];++r<u;){var _=e[r],A=n?n(_):_;if(!r||!pn(A,C)){var C=A;l[a++]=_===0?0:_}}return l}function bd(e){return typeof e=="number"?e:Ze(e)?D:+e}function Ve(e){if(typeof e=="string")return e;if(j(e))return ge(e,Ve)+"";if(Ze(e))return Ji?Ji.call(e):"";var n=e+"";return n=="0"&&1/e==-h?"-0":n}function Fn(e,n,r){var u=-1,a=Gr,l=e.length,_=!0,A=[],C=A;if(r)_=!1,a=Xt;else if(l>=f){var T=n?null:Af(e);if(T)return jr(T);_=!1,a=kr,C=new jn}else C=n?[]:A;e:for(;++u<l;){var M=e[u],z=n?n(M):M;if(M=r||M!==0?M:0,_&&z===z){for(var U=C.length;U--;)if(C[U]===z)continue e;n&&C.push(z),A.push(M)}else a(C,z,r)||(C!==A&&C.push(z),A.push(M))}return A}function Au(e,n){return n=Wn(n,e),e=Kd(e,n),e==null||delete e[wn(sn(n))]}function yd(e,n,r,u){return Ir(e,n,r(Kn(e,n)),u)}function lt(e,n,r,u){for(var a=e.length,l=u?a:-1;(u?l--:++l<a)&&n(e[l],l,e););return r?an(e,u?0:l,u?l+1:a):an(e,u?l+1:0,u?a:l)}function kd(e,n){var r=e;return r instanceof J&&(r=r.value()),Jt(n,function(u,a){return a.func.apply(a.thisArg,zn([u],a.args))},r)}function Su(e,n,r){var u=e.length;if(u<2)return u?Fn(e[0]):[];for(var a=-1,l=E(u);++a<u;)for(var _=e[a],A=-1;++A<u;)A!=a&&(l[a]=Lr(l[a]||_,e[A],n,r));return Fn(Te(l,1),n,r)}function Ad(e,n,r){for(var u=-1,a=e.length,l=n.length,_={};++u<a;){var A=u<l?n[u]:s;r(_,e[u],A)}return _}function Cu(e){return ye(e)?e:[]}function Pu(e){return typeof e=="function"?e:qe}function Wn(e,n){return j(e)?e:Du(e,n)?[e]:Jd(ie(e))}var hf=Z;function On(e,n,r){var u=e.length;return r=r===s?u:r,!n&&r>=u?e:an(e,n,r)}var Sd=Jc||function(e){return Re.clearTimeout(e)};function Cd(e,n){if(n)return e.slice();var r=e.length,u=ji?ji(r):new e.constructor(r);return e.copy(u),u}function Eu(e){var n=new e.constructor(e.byteLength);return new Jr(n).set(new Jr(e)),n}function pf(e,n){var r=n?Eu(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function gf(e){var n=new e.constructor(e.source,si.exec(e));return n.lastIndex=e.lastIndex,n}function _f(e){return Er?se(Er.call(e)):{}}function Pd(e,n){var r=n?Eu(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Ed(e,n){if(e!==n){var r=e!==s,u=e===null,a=e===e,l=Ze(e),_=n!==s,A=n===null,C=n===n,T=Ze(n);if(!A&&!T&&!l&&e>n||l&&_&&C&&!A&&!T||u&&_&&C||!r&&C||!a)return 1;if(!u&&!l&&!T&&e<n||T&&r&&a&&!u&&!l||A&&r&&a||!_&&a||!C)return-1}return 0}function mf(e,n,r){for(var u=-1,a=e.criteria,l=n.criteria,_=a.length,A=r.length;++u<_;){var C=Ed(a[u],l[u]);if(C){if(u>=A)return C;var T=r[u];return C*(T=="desc"?-1:1)}}return e.index-n.index}function Rd(e,n,r,u){for(var a=-1,l=e.length,_=r.length,A=-1,C=n.length,T=Pe(l-_,0),M=E(C+T),z=!u;++A<C;)M[A]=n[A];for(;++a<_;)(z||a<l)&&(M[r[a]]=e[a]);for(;T--;)M[A++]=e[a++];return M}function Ld(e,n,r,u){for(var a=-1,l=e.length,_=-1,A=r.length,C=-1,T=n.length,M=Pe(l-A,0),z=E(M+T),U=!u;++a<M;)z[a]=e[a];for(var W=a;++C<T;)z[W+C]=n[C];for(;++_<A;)(U||a<l)&&(z[W+r[_]]=e[a++]);return z}function xe(e,n){var r=-1,u=e.length;for(n||(n=E(u));++r<u;)n[r]=e[r];return n}function vn(e,n,r,u){var a=!r;r||(r={});for(var l=-1,_=n.length;++l<_;){var A=n[l],C=u?u(r[A],e[A],A,r,e):s;C===s&&(C=e[A]),a?Cn(r,A,C):Rr(r,A,C)}return r}function vf(e,n){return vn(e,Bu(e),n)}function wf(e,n){return vn(e,xd(e),n)}function ht(e,n){return function(r,u){var a=j(r)?kc:Oo,l=n?n():{};return a(r,e,x(u,2),l)}}function sr(e){return Z(function(n,r){var u=-1,a=r.length,l=a>1?r[a-1]:s,_=a>2?r[2]:s;for(l=e.length>3&&typeof l=="function"?(a--,l):s,_&&Fe(r[0],r[1],_)&&(l=a<3?s:l,a=1),n=se(n);++u<a;){var A=r[u];A&&e(n,A,u,l)}return n})}function Td(e,n){return function(r,u){if(r==null)return r;if(!$e(r))return e(r,u);for(var a=r.length,l=n?a:-1,_=se(r);(n?l--:++l<a)&&u(_[l],l,_)!==!1;);return r}}function Md(e){return function(n,r,u){for(var a=-1,l=se(n),_=u(n),A=_.length;A--;){var C=_[e?A:++a];if(r(l[C],C,l)===!1)break}return n}}function bf(e,n,r){var u=n&fe,a=zr(e);function l(){var _=this&&this!==Re&&this instanceof l?a:e;return _.apply(u?r:this,arguments)}return l}function Id(e){return function(n){n=ie(n);var r=rr(n)?ln(n):s,u=r?r[0]:n.charAt(0),a=r?On(r,1).join(""):n.slice(1);return u[e]()+a}}function cr(e){return function(n){return Jt(Ta(La(n).replace(sc,"")),e,"")}}function zr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=ar(e.prototype),u=e.apply(r,n);return ve(u)?u:r}}function yf(e,n,r){var u=zr(e);function a(){for(var l=arguments.length,_=E(l),A=l,C=or(a);A--;)_[A]=arguments[A];var T=l<3&&_[0]!==C&&_[l-1]!==C?[]:Bn(_,C);if(l-=T.length,l<r)return Hd(e,n,pt,a.placeholder,s,_,T,s,s,r-l);var M=this&&this!==Re&&this instanceof a?u:e;return Ye(M,this,_)}return a}function zd(e){return function(n,r,u){var a=se(n);if(!$e(n)){var l=x(r,3);n=Le(n),r=function(A){return l(a[A],A,a)}}var _=e(n,r,u);return _>-1?a[l?n[_]:_]:s}}function Bd(e){return En(function(n){var r=n.length,u=r,a=un.prototype.thru;for(e&&n.reverse();u--;){var l=n[u];if(typeof l!="function")throw new tn(P);if(a&&!_&&vt(l)=="wrapper")var _=new un([],!0)}for(u=_?u:r;++u<r;){l=n[u];var A=vt(l),C=A=="wrapper"?Iu(l):s;C&&Uu(C[0])&&C[1]==(d|Ee|t|c)&&!C[4].length&&C[9]==1?_=_[vt(C[0])].apply(_,C[3]):_=l.length==1&&Uu(l)?_[A]():_.thru(l)}return function(){var T=arguments,M=T[0];if(_&&T.length==1&&j(M))return _.plant(M).value();for(var z=0,U=r?n[z].apply(this,T):M;++z<r;)U=n[z].call(this,U);return U}})}function pt(e,n,r,u,a,l,_,A,C,T){var M=n&d,z=n&fe,U=n&Oe,W=n&(Ee|Qe),$=n&m,K=U?s:zr(e);function G(){for(var X=arguments.length,ne=E(X),Xe=X;Xe--;)ne[Xe]=arguments[Xe];if(W)var We=or(G),Je=Mc(ne,We);if(u&&(ne=Rd(ne,u,a,W)),l&&(ne=Ld(ne,l,_,W)),X-=Je,W&&X<T){var ke=Bn(ne,We);return Hd(e,n,pt,G.placeholder,r,ne,ke,A,C,T-X)}var gn=z?r:this,Mn=U?gn[e]:e;return X=ne.length,A?ne=Nf(ne,A):$&&X>1&&ne.reverse(),M&&C<X&&(ne.length=C),this&&this!==Re&&this instanceof G&&(Mn=K||zr(Mn)),Mn.apply(gn,ne)}return G}function Dd(e,n){return function(r,u){return Ko(r,e,n(u),{})}}function gt(e,n){return function(r,u){var a;if(r===s&&u===s)return n;if(r!==s&&(a=r),u!==s){if(a===s)return u;typeof r=="string"||typeof u=="string"?(r=Ve(r),u=Ve(u)):(r=bd(r),u=bd(u)),a=e(r,u)}return a}}function Ru(e){return En(function(n){return n=ge(n,Ke(x())),Z(function(r){var u=this;return e(n,function(a){return Ye(a,u,r)})})})}function _t(e,n){n=n===s?" ":Ve(n);var r=n.length;if(r<2)return r?yu(n,e):n;var u=yu(n,rt(e/tr(n)));return rr(n)?On(ln(u),0,e).join(""):u.slice(0,e)}function kf(e,n,r,u){var a=n&fe,l=zr(e);function _(){for(var A=-1,C=arguments.length,T=-1,M=u.length,z=E(M+C),U=this&&this!==Re&&this instanceof _?l:e;++T<M;)z[T]=u[T];for(;C--;)z[T++]=arguments[++A];return Ye(U,a?r:this,z)}return _}function Ud(e){return function(n,r,u){return u&&typeof u!="number"&&Fe(n,r,u)&&(r=u=s),n=Tn(n),r===s?(r=n,n=0):r=Tn(r),u=u===s?n<r?1:-1:Tn(u),af(n,r,u,e)}}function mt(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=cn(n),r=cn(r)),e(n,r)}}function Hd(e,n,r,u,a,l,_,A,C,T){var M=n&Ee,z=M?_:s,U=M?s:_,W=M?l:s,$=M?s:l;n|=M?t:i,n&=~(M?i:t),n&on||(n&=~(fe|Oe));var K=[e,n,a,W,z,$,U,A,C,T],G=r.apply(s,K);return Uu(e)&&Vd(G,K),G.placeholder=u,Zd(G,e,n)}function Lu(e){var n=Ce[e];return function(r,u){if(r=cn(r),u=u==null?0:Be(Y(u),292),u&&Zi(r)){var a=(ie(r)+"e").split("e"),l=n(a[0]+"e"+(+a[1]+u));return a=(ie(l)+"e").split("e"),+(a[0]+"e"+(+a[1]-u))}return n(r)}}var Af=ir&&1/jr(new ir([,-0]))[1]==h?function(e){return new ir(e)}:Xu;function Fd(e){return function(n){var r=De(n);return r==Ne?iu(n):r==fn?Fc(n):Tc(n,e(n))}}function Pn(e,n,r,u,a,l,_,A){var C=n&Oe;if(!C&&typeof e!="function")throw new tn(P);var T=u?u.length:0;if(T||(n&=~(t|i),u=a=s),_=_===s?_:Pe(Y(_),0),A=A===s?A:Y(A),T-=a?a.length:0,n&i){var M=u,z=a;u=a=s}var U=C?s:Iu(e),W=[e,n,r,u,a,M,z,l,_,A];if(U&&Ff(W,U),e=W[0],n=W[1],r=W[2],u=W[3],a=W[4],A=W[9]=W[9]===s?C?0:e.length:Pe(W[9]-T,0),!A&&n&(Ee|Qe)&&(n&=~(Ee|Qe)),!n||n==fe)var $=bf(e,n,r);else n==Ee||n==Qe?$=yf(e,n,A):(n==t||n==(fe|t))&&!a.length?$=kf(e,n,r,u):$=pt.apply(s,W);var K=U?vd:Vd;return Zd(K($,W),e,n)}function Wd(e,n,r,u){return e===s||pn(e,ur[r])&&!ae.call(u,r)?n:e}function Od(e,n,r,u,a,l){return ve(e)&&ve(n)&&(l.set(n,e),ot(e,n,s,Od,l),l.delete(n)),e}function Sf(e){return Ur(e)?s:e}function Nd(e,n,r,u,a,l){var _=r&Ie,A=e.length,C=n.length;if(A!=C&&!(_&&C>A))return!1;var T=l.get(e),M=l.get(n);if(T&&M)return T==n&&M==e;var z=-1,U=!0,W=r&Se?new jn:s;for(l.set(e,n),l.set(n,e);++z<A;){var $=e[z],K=n[z];if(u)var G=_?u(K,$,z,n,e,l):u($,K,z,e,n,l);if(G!==s){if(G)continue;U=!1;break}if(W){if(!Qt(n,function(X,ne){if(!kr(W,ne)&&($===X||a($,X,r,u,l)))return W.push(ne)})){U=!1;break}}else if(!($===K||a($,K,r,u,l))){U=!1;break}}return l.delete(e),l.delete(n),U}function Cf(e,n,r,u,a,l,_){switch(r){case Qn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case yr:return!(e.byteLength!=n.byteLength||!l(new Jr(e),new Jr(n)));case le:case me:case mr:return pn(+e,+n);case en:return e.name==n.name&&e.message==n.message;case vr:case wr:return e==n+"";case Ne:var A=iu;case fn:var C=u&Ie;if(A||(A=jr),e.size!=n.size&&!C)return!1;var T=_.get(e);if(T)return T==n;u|=Se,_.set(e,n);var M=Nd(A(e),A(n),u,a,l,_);return _.delete(e),M;case Or:if(Er)return Er.call(e)==Er.call(n)}return!1}function Pf(e,n,r,u,a,l){var _=r&Ie,A=Tu(e),C=A.length,T=Tu(n),M=T.length;if(C!=M&&!_)return!1;for(var z=C;z--;){var U=A[z];if(!(_?U in n:ae.call(n,U)))return!1}var W=l.get(e),$=l.get(n);if(W&&$)return W==n&&$==e;var K=!0;l.set(e,n),l.set(n,e);for(var G=_;++z<C;){U=A[z];var X=e[U],ne=n[U];if(u)var Xe=_?u(ne,X,U,n,e,l):u(X,ne,U,e,n,l);if(!(Xe===s?X===ne||a(X,ne,r,u,l):Xe)){K=!1;break}G||(G=U=="constructor")}if(K&&!G){var We=e.constructor,Je=n.constructor;We!=Je&&"constructor"in e&&"constructor"in n&&!(typeof We=="function"&&We instanceof We&&typeof Je=="function"&&Je instanceof Je)&&(K=!1)}return l.delete(e),l.delete(n),K}function En(e){return Fu(Yd(e,s,ra),e+"")}function Tu(e){return ad(e,Le,Bu)}function Mu(e){return ad(e,Ge,xd)}var Iu=ut?function(e){return ut.get(e)}:Xu;function vt(e){for(var n=e.name+"",r=dr[n],u=ae.call(dr,n)?r.length:0;u--;){var a=r[u],l=a.func;if(l==null||l==e)return a.name}return n}function or(e){var n=ae.call(o,"placeholder")?o:e;return n.placeholder}function x(){var e=o.iteratee||Vu;return e=e===Vu?od:e,arguments.length?e(arguments[0],arguments[1]):e}function wt(e,n){var r=e.__data__;return Bf(n)?r[typeof n=="string"?"string":"hash"]:r.map}function zu(e){for(var n=Le(e),r=n.length;r--;){var u=n[r],a=e[u];n[r]=[u,a,qd(a)]}return n}function Vn(e,n){var r=Dc(e,n);return cd(r)?r:s}function Ef(e){var n=ae.call(e,Gn),r=e[Gn];try{e[Gn]=s;var u=!0}catch{}var a=Zr.call(e);return u&&(n?e[Gn]=r:delete e[Gn]),a}var Bu=au?function(e){return e==null?[]:(e=se(e),In(au(e),function(n){return Ki.call(e,n)}))}:Ju,xd=au?function(e){for(var n=[];e;)zn(n,Bu(e)),e=Qr(e);return n}:Ju,De=He;(su&&De(new su(new ArrayBuffer(1)))!=Qn||Sr&&De(new Sr)!=Ne||cu&&De(cu.resolve())!=ui||ir&&De(new ir)!=fn||Cr&&De(new Cr)!=br)&&(De=function(e){var n=He(e),r=n==kn?e.constructor:s,u=r?Zn(r):"";if(u)switch(u){case so:return Qn;case co:return Ne;case oo:return ui;case fo:return fn;case lo:return br}return n});function Rf(e,n,r){for(var u=-1,a=r.length;++u<a;){var l=r[u],_=l.size;switch(l.type){case"drop":e+=_;break;case"dropRight":n-=_;break;case"take":n=Be(n,e+_);break;case"takeRight":e=Pe(e,n-_);break}}return{start:e,end:n}}function Lf(e){var n=e.match(zs);return n?n[1].split(Bs):[]}function $d(e,n,r){n=Wn(n,e);for(var u=-1,a=n.length,l=!1;++u<a;){var _=wn(n[u]);if(!(l=e!=null&&r(e,_)))break;e=e[_]}return l||++u!=a?l:(a=e==null?0:e.length,!!a&&Pt(a)&&Rn(_,a)&&(j(e)||Xn(e)))}function Tf(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&ae.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function Gd(e){return typeof e.constructor=="function"&&!Br(e)?ar(Qr(e)):{}}function Mf(e,n,r){var u=e.constructor;switch(n){case yr:return Eu(e);case le:case me:return new u(+e);case Qn:return pf(e,r);case zt:case Bt:case Dt:case Ut:case Ht:case Ft:case Wt:case Ot:case Nt:return Pd(e,r);case Ne:return new u;case mr:case wr:return new u(e);case vr:return gf(e);case fn:return new u;case Or:return _f(e)}}function If(e,n){var r=n.length;if(!r)return e;var u=r-1;return n[u]=(r>1?"& ":"")+n[u],n=n.join(r>2?", ":" "),e.replace(Is,`{
/* [wrapped with `+n+`] */
`)}function zf(e){return j(e)||Xn(e)||!!(Vi&&e&&e[Vi])}function Rn(e,n){var r=typeof e;return n=n??R,!!n&&(r=="number"||r!="symbol"&&$s.test(e))&&e>-1&&e%1==0&&e<n}function Fe(e,n,r){if(!ve(r))return!1;var u=typeof n;return(u=="number"?$e(r)&&Rn(n,r.length):u=="string"&&n in r)?pn(r[n],e):!1}function Du(e,n){if(j(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||Ze(e)?!0:Rs.test(e)||!Es.test(e)||n!=null&&e in se(n)}function Bf(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Uu(e){var n=vt(e),r=o[n];if(typeof r!="function"||!(n in J.prototype))return!1;if(e===r)return!0;var u=Iu(r);return!!u&&e===u[0]}function Df(e){return!!qi&&qi in e}var Uf=Kr?Ln:Qu;function Br(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||ur;return e===r}function qd(e){return e===e&&!ve(e)}function jd(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==s||e in se(r))}}function Hf(e){var n=St(e,function(u){return r.size===te&&r.clear(),u}),r=n.cache;return n}function Ff(e,n){var r=e[1],u=n[1],a=r|u,l=a<(fe|Oe|d),_=u==d&&r==Ee||u==d&&r==c&&e[7].length<=n[8]||u==(d|c)&&n[7].length<=n[8]&&r==Ee;if(!(l||_))return e;u&fe&&(e[2]=n[2],a|=r&fe?0:on);var A=n[3];if(A){var C=e[3];e[3]=C?Rd(C,A,n[4]):A,e[4]=C?Bn(e[3],Ae):n[4]}return A=n[5],A&&(C=e[5],e[5]=C?Ld(C,A,n[6]):A,e[6]=C?Bn(e[5],Ae):n[6]),A=n[7],A&&(e[7]=A),u&d&&(e[8]=e[8]==null?n[8]:Be(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=a,e}function Wf(e){var n=[];if(e!=null)for(var r in se(e))n.push(r);return n}function Of(e){return Zr.call(e)}function Yd(e,n,r){return n=Pe(n===s?e.length-1:n,0),function(){for(var u=arguments,a=-1,l=Pe(u.length-n,0),_=E(l);++a<l;)_[a]=u[n+a];a=-1;for(var A=E(n+1);++a<n;)A[a]=u[a];return A[n]=r(_),Ye(e,this,A)}}function Kd(e,n){return n.length<2?e:Kn(e,an(n,0,-1))}function Nf(e,n){for(var r=e.length,u=Be(n.length,r),a=xe(e);u--;){var l=n[u];e[u]=Rn(l,r)?a[l]:s}return e}function Hu(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var Vd=Xd(vd),Dr=eo||function(e,n){return Re.setTimeout(e,n)},Fu=Xd(of);function Zd(e,n,r){var u=n+"";return Fu(e,If(u,xf(Lf(u),r)))}function Xd(e){var n=0,r=0;return function(){var u=uo(),a=w-(u-r);if(r=u,a>0){if(++n>=y)return arguments[0]}else n=0;return e.apply(s,arguments)}}function bt(e,n){var r=-1,u=e.length,a=u-1;for(n=n===s?u:n;++r<n;){var l=bu(r,a),_=e[l];e[l]=e[r],e[r]=_}return e.length=n,e}var Jd=Hf(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Ls,function(r,u,a,l){n.push(a?l.replace(Hs,"$1"):u||r)}),n});function wn(e){if(typeof e=="string"||Ze(e))return e;var n=e+"";return n=="0"&&1/e==-h?"-0":n}function Zn(e){if(e!=null){try{return Vr.call(e)}catch{}try{return e+""}catch{}}return""}function xf(e,n){return rn(re,function(r){var u="_."+r[0];n&r[1]&&!Gr(e,u)&&e.push(u)}),e.sort()}function Qd(e){if(e instanceof J)return e.clone();var n=new un(e.__wrapped__,e.__chain__);return n.__actions__=xe(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function $f(e,n,r){(r?Fe(e,n,r):n===s)?n=1:n=Pe(Y(n),0);var u=e==null?0:e.length;if(!u||n<1)return[];for(var a=0,l=0,_=E(rt(u/n));a<u;)_[l++]=an(e,a,a+=n);return _}function Gf(e){for(var n=-1,r=e==null?0:e.length,u=0,a=[];++n<r;){var l=e[n];l&&(a[u++]=l)}return a}function qf(){var e=arguments.length;if(!e)return[];for(var n=E(e-1),r=arguments[0],u=e;u--;)n[u-1]=arguments[u];return zn(j(r)?xe(r):[r],Te(n,1))}var jf=Z(function(e,n){return ye(e)?Lr(e,Te(n,1,ye,!0)):[]}),Yf=Z(function(e,n){var r=sn(n);return ye(r)&&(r=s),ye(e)?Lr(e,Te(n,1,ye,!0),x(r,2)):[]}),Kf=Z(function(e,n){var r=sn(n);return ye(r)&&(r=s),ye(e)?Lr(e,Te(n,1,ye,!0),s,r):[]});function Vf(e,n,r){var u=e==null?0:e.length;return u?(n=r||n===s?1:Y(n),an(e,n<0?0:n,u)):[]}function Zf(e,n,r){var u=e==null?0:e.length;return u?(n=r||n===s?1:Y(n),n=u-n,an(e,0,n<0?0:n)):[]}function Xf(e,n){return e&&e.length?lt(e,x(n,3),!0,!0):[]}function Jf(e,n){return e&&e.length?lt(e,x(n,3),!0):[]}function Qf(e,n,r,u){var a=e==null?0:e.length;return a?(r&&typeof r!="number"&&Fe(e,n,r)&&(r=0,u=a),Go(e,n,r,u)):[]}function ea(e,n,r){var u=e==null?0:e.length;if(!u)return-1;var a=r==null?0:Y(r);return a<0&&(a=Pe(u+a,0)),qr(e,x(n,3),a)}function na(e,n,r){var u=e==null?0:e.length;if(!u)return-1;var a=u-1;return r!==s&&(a=Y(r),a=r<0?Pe(u+a,0):Be(a,u-1)),qr(e,x(n,3),a,!0)}function ra(e){var n=e==null?0:e.length;return n?Te(e,1):[]}function el(e){var n=e==null?0:e.length;return n?Te(e,h):[]}function nl(e,n){var r=e==null?0:e.length;return r?(n=n===s?1:Y(n),Te(e,n)):[]}function rl(e){for(var n=-1,r=e==null?0:e.length,u={};++n<r;){var a=e[n];u[a[0]]=a[1]}return u}function ta(e){return e&&e.length?e[0]:s}function tl(e,n,r){var u=e==null?0:e.length;if(!u)return-1;var a=r==null?0:Y(r);return a<0&&(a=Pe(u+a,0)),nr(e,n,a)}function ul(e){var n=e==null?0:e.length;return n?an(e,0,-1):[]}var il=Z(function(e){var n=ge(e,Cu);return n.length&&n[0]===e[0]?gu(n):[]}),dl=Z(function(e){var n=sn(e),r=ge(e,Cu);return n===sn(r)?n=s:r.pop(),r.length&&r[0]===e[0]?gu(r,x(n,2)):[]}),al=Z(function(e){var n=sn(e),r=ge(e,Cu);return n=typeof n=="function"?n:s,n&&r.pop(),r.length&&r[0]===e[0]?gu(r,s,n):[]});function sl(e,n){return e==null?"":ro.call(e,n)}function sn(e){var n=e==null?0:e.length;return n?e[n-1]:s}function cl(e,n,r){var u=e==null?0:e.length;if(!u)return-1;var a=u;return r!==s&&(a=Y(r),a=a<0?Pe(u+a,0):Be(a,u-1)),n===n?Oc(e,n,a):qr(e,Hi,a,!0)}function ol(e,n){return e&&e.length?pd(e,Y(n)):s}var fl=Z(ua);function ua(e,n){return e&&e.length&&n&&n.length?wu(e,n):e}function ll(e,n,r){return e&&e.length&&n&&n.length?wu(e,n,x(r,2)):e}function hl(e,n,r){return e&&e.length&&n&&n.length?wu(e,n,s,r):e}var pl=En(function(e,n){var r=e==null?0:e.length,u=fu(e,n);return md(e,ge(n,function(a){return Rn(a,r)?+a:a}).sort(Ed)),u});function gl(e,n){var r=[];if(!(e&&e.length))return r;var u=-1,a=[],l=e.length;for(n=x(n,3);++u<l;){var _=e[u];n(_,u,e)&&(r.push(_),a.push(u))}return md(e,a),r}function Wu(e){return e==null?e:ao.call(e)}function _l(e,n,r){var u=e==null?0:e.length;return u?(r&&typeof r!="number"&&Fe(e,n,r)?(n=0,r=u):(n=n==null?0:Y(n),r=r===s?u:Y(r)),an(e,n,r)):[]}function ml(e,n){return ft(e,n)}function vl(e,n,r){return ku(e,n,x(r,2))}function wl(e,n){var r=e==null?0:e.length;if(r){var u=ft(e,n);if(u<r&&pn(e[u],n))return u}return-1}function bl(e,n){return ft(e,n,!0)}function yl(e,n,r){return ku(e,n,x(r,2),!0)}function kl(e,n){var r=e==null?0:e.length;if(r){var u=ft(e,n,!0)-1;if(pn(e[u],n))return u}return-1}function Al(e){return e&&e.length?wd(e):[]}function Sl(e,n){return e&&e.length?wd(e,x(n,2)):[]}function Cl(e){var n=e==null?0:e.length;return n?an(e,1,n):[]}function Pl(e,n,r){return e&&e.length?(n=r||n===s?1:Y(n),an(e,0,n<0?0:n)):[]}function El(e,n,r){var u=e==null?0:e.length;return u?(n=r||n===s?1:Y(n),n=u-n,an(e,n<0?0:n,u)):[]}function Rl(e,n){return e&&e.length?lt(e,x(n,3),!1,!0):[]}function Ll(e,n){return e&&e.length?lt(e,x(n,3)):[]}var Tl=Z(function(e){return Fn(Te(e,1,ye,!0))}),Ml=Z(function(e){var n=sn(e);return ye(n)&&(n=s),Fn(Te(e,1,ye,!0),x(n,2))}),Il=Z(function(e){var n=sn(e);return n=typeof n=="function"?n:s,Fn(Te(e,1,ye,!0),s,n)});function zl(e){return e&&e.length?Fn(e):[]}function Bl(e,n){return e&&e.length?Fn(e,x(n,2)):[]}function Dl(e,n){return n=typeof n=="function"?n:s,e&&e.length?Fn(e,s,n):[]}function Ou(e){if(!(e&&e.length))return[];var n=0;return e=In(e,function(r){if(ye(r))return n=Pe(r.length,n),!0}),tu(n,function(r){return ge(e,eu(r))})}function ia(e,n){if(!(e&&e.length))return[];var r=Ou(e);return n==null?r:ge(r,function(u){return Ye(n,s,u)})}var Ul=Z(function(e,n){return ye(e)?Lr(e,n):[]}),Hl=Z(function(e){return Su(In(e,ye))}),Fl=Z(function(e){var n=sn(e);return ye(n)&&(n=s),Su(In(e,ye),x(n,2))}),Wl=Z(function(e){var n=sn(e);return n=typeof n=="function"?n:s,Su(In(e,ye),s,n)}),Ol=Z(Ou);function Nl(e,n){return Ad(e||[],n||[],Rr)}function xl(e,n){return Ad(e||[],n||[],Ir)}var $l=Z(function(e){var n=e.length,r=n>1?e[n-1]:s;return r=typeof r=="function"?(e.pop(),r):s,ia(e,r)});function da(e){var n=o(e);return n.__chain__=!0,n}function Gl(e,n){return n(e),e}function yt(e,n){return n(e)}var ql=En(function(e){var n=e.length,r=n?e[0]:0,u=this.__wrapped__,a=function(l){return fu(l,e)};return n>1||this.__actions__.length||!(u instanceof J)||!Rn(r)?this.thru(a):(u=u.slice(r,+r+(n?1:0)),u.__actions__.push({func:yt,args:[a],thisArg:s}),new un(u,this.__chain__).thru(function(l){return n&&!l.length&&l.push(s),l}))});function jl(){return da(this)}function Yl(){return new un(this.value(),this.__chain__)}function Kl(){this.__values__===s&&(this.__values__=ba(this.value()));var e=this.__index__>=this.__values__.length,n=e?s:this.__values__[this.__index__++];return{done:e,value:n}}function Vl(){return this}function Zl(e){for(var n,r=this;r instanceof dt;){var u=Qd(r);u.__index__=0,u.__values__=s,n?a.__wrapped__=u:n=u;var a=u;r=r.__wrapped__}return a.__wrapped__=e,n}function Xl(){var e=this.__wrapped__;if(e instanceof J){var n=e;return this.__actions__.length&&(n=new J(this)),n=n.reverse(),n.__actions__.push({func:yt,args:[Wu],thisArg:s}),new un(n,this.__chain__)}return this.thru(Wu)}function Jl(){return kd(this.__wrapped__,this.__actions__)}var Ql=ht(function(e,n,r){ae.call(e,r)?++e[r]:Cn(e,r,1)});function eh(e,n,r){var u=j(e)?Di:$o;return r&&Fe(e,n,r)&&(n=s),u(e,x(n,3))}function nh(e,n){var r=j(e)?In:id;return r(e,x(n,3))}var rh=zd(ea),th=zd(na);function uh(e,n){return Te(kt(e,n),1)}function ih(e,n){return Te(kt(e,n),h)}function dh(e,n,r){return r=r===s?1:Y(r),Te(kt(e,n),r)}function aa(e,n){var r=j(e)?rn:Hn;return r(e,x(n,3))}function sa(e,n){var r=j(e)?Ac:ud;return r(e,x(n,3))}var ah=ht(function(e,n,r){ae.call(e,r)?e[r].push(n):Cn(e,r,[n])});function sh(e,n,r,u){e=$e(e)?e:lr(e),r=r&&!u?Y(r):0;var a=e.length;return r<0&&(r=Pe(a+r,0)),Et(e)?r<=a&&e.indexOf(n,r)>-1:!!a&&nr(e,n,r)>-1}var ch=Z(function(e,n,r){var u=-1,a=typeof n=="function",l=$e(e)?E(e.length):[];return Hn(e,function(_){l[++u]=a?Ye(n,_,r):Tr(_,n,r)}),l}),oh=ht(function(e,n,r){Cn(e,r,n)});function kt(e,n){var r=j(e)?ge:fd;return r(e,x(n,3))}function fh(e,n,r,u){return e==null?[]:(j(n)||(n=n==null?[]:[n]),r=u?s:r,j(r)||(r=r==null?[]:[r]),gd(e,n,r))}var lh=ht(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function hh(e,n,r){var u=j(e)?Jt:Wi,a=arguments.length<3;return u(e,x(n,4),r,a,Hn)}function ph(e,n,r){var u=j(e)?Sc:Wi,a=arguments.length<3;return u(e,x(n,4),r,a,ud)}function gh(e,n){var r=j(e)?In:id;return r(e,Ct(x(n,3)))}function _h(e){var n=j(e)?ed:sf;return n(e)}function mh(e,n,r){(r?Fe(e,n,r):n===s)?n=1:n=Y(n);var u=j(e)?Fo:cf;return u(e,n)}function vh(e){var n=j(e)?Wo:ff;return n(e)}function wh(e){if(e==null)return 0;if($e(e))return Et(e)?tr(e):e.length;var n=De(e);return n==Ne||n==fn?e.size:mu(e).length}function bh(e,n,r){var u=j(e)?Qt:lf;return r&&Fe(e,n,r)&&(n=s),u(e,x(n,3))}var yh=Z(function(e,n){if(e==null)return[];var r=n.length;return r>1&&Fe(e,n[0],n[1])?n=[]:r>2&&Fe(n[0],n[1],n[2])&&(n=[n[0]]),gd(e,Te(n,1),[])}),At=Qc||function(){return Re.Date.now()};function kh(e,n){if(typeof n!="function")throw new tn(P);return e=Y(e),function(){if(--e<1)return n.apply(this,arguments)}}function ca(e,n,r){return n=r?s:n,n=e&&n==null?e.length:n,Pn(e,d,s,s,s,s,n)}function oa(e,n){var r;if(typeof n!="function")throw new tn(P);return e=Y(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=s),r}}var Nu=Z(function(e,n,r){var u=fe;if(r.length){var a=Bn(r,or(Nu));u|=t}return Pn(e,u,n,r,a)}),fa=Z(function(e,n,r){var u=fe|Oe;if(r.length){var a=Bn(r,or(fa));u|=t}return Pn(n,u,e,r,a)});function la(e,n,r){n=r?s:n;var u=Pn(e,Ee,s,s,s,s,s,n);return u.placeholder=la.placeholder,u}function ha(e,n,r){n=r?s:n;var u=Pn(e,Qe,s,s,s,s,s,n);return u.placeholder=ha.placeholder,u}function pa(e,n,r){var u,a,l,_,A,C,T=0,M=!1,z=!1,U=!0;if(typeof e!="function")throw new tn(P);n=cn(n)||0,ve(r)&&(M=!!r.leading,z="maxWait"in r,l=z?Pe(cn(r.maxWait)||0,n):l,U="trailing"in r?!!r.trailing:U);function W(ke){var gn=u,Mn=a;return u=a=s,T=ke,_=e.apply(Mn,gn),_}function $(ke){return T=ke,A=Dr(X,n),M?W(ke):_}function K(ke){var gn=ke-C,Mn=ke-T,za=n-gn;return z?Be(za,l-Mn):za}function G(ke){var gn=ke-C,Mn=ke-T;return C===s||gn>=n||gn<0||z&&Mn>=l}function X(){var ke=At();if(G(ke))return ne(ke);A=Dr(X,K(ke))}function ne(ke){return A=s,U&&u?W(ke):(u=a=s,_)}function Xe(){A!==s&&Sd(A),T=0,u=C=a=A=s}function We(){return A===s?_:ne(At())}function Je(){var ke=At(),gn=G(ke);if(u=arguments,a=this,C=ke,gn){if(A===s)return $(C);if(z)return Sd(A),A=Dr(X,n),W(C)}return A===s&&(A=Dr(X,n)),_}return Je.cancel=Xe,Je.flush=We,Je}var Ah=Z(function(e,n){return td(e,1,n)}),Sh=Z(function(e,n,r){return td(e,cn(n)||0,r)});function Ch(e){return Pn(e,m)}function St(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new tn(P);var r=function(){var u=arguments,a=n?n.apply(this,u):u[0],l=r.cache;if(l.has(a))return l.get(a);var _=e.apply(this,u);return r.cache=l.set(a,_)||l,_};return r.cache=new(St.Cache||Sn),r}St.Cache=Sn;function Ct(e){if(typeof e!="function")throw new tn(P);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function Ph(e){return oa(2,e)}var Eh=hf(function(e,n){n=n.length==1&&j(n[0])?ge(n[0],Ke(x())):ge(Te(n,1),Ke(x()));var r=n.length;return Z(function(u){for(var a=-1,l=Be(u.length,r);++a<l;)u[a]=n[a].call(this,u[a]);return Ye(e,this,u)})}),xu=Z(function(e,n){var r=Bn(n,or(xu));return Pn(e,t,s,n,r)}),ga=Z(function(e,n){var r=Bn(n,or(ga));return Pn(e,i,s,n,r)}),Rh=En(function(e,n){return Pn(e,c,s,s,s,n)});function Lh(e,n){if(typeof e!="function")throw new tn(P);return n=n===s?n:Y(n),Z(e,n)}function Th(e,n){if(typeof e!="function")throw new tn(P);return n=n==null?0:Pe(Y(n),0),Z(function(r){var u=r[n],a=On(r,0,n);return u&&zn(a,u),Ye(e,this,a)})}function Mh(e,n,r){var u=!0,a=!0;if(typeof e!="function")throw new tn(P);return ve(r)&&(u="leading"in r?!!r.leading:u,a="trailing"in r?!!r.trailing:a),pa(e,n,{leading:u,maxWait:n,trailing:a})}function Ih(e){return ca(e,1)}function zh(e,n){return xu(Pu(n),e)}function Bh(){if(!arguments.length)return[];var e=arguments[0];return j(e)?e:[e]}function Dh(e){return dn(e,Me)}function Uh(e,n){return n=typeof n=="function"?n:s,dn(e,Me,n)}function Hh(e){return dn(e,be|Me)}function Fh(e,n){return n=typeof n=="function"?n:s,dn(e,be|Me,n)}function Wh(e,n){return n==null||rd(e,n,Le(n))}function pn(e,n){return e===n||e!==e&&n!==n}var Oh=mt(pu),Nh=mt(function(e,n){return e>=n}),Xn=sd((function(){return arguments})())?sd:function(e){return we(e)&&ae.call(e,"callee")&&!Ki.call(e,"callee")},j=E.isArray,xh=Li?Ke(Li):Vo;function $e(e){return e!=null&&Pt(e.length)&&!Ln(e)}function ye(e){return we(e)&&$e(e)}function $h(e){return e===!0||e===!1||we(e)&&He(e)==le}var Nn=no||Qu,Gh=Ti?Ke(Ti):Zo;function qh(e){return we(e)&&e.nodeType===1&&!Ur(e)}function jh(e){if(e==null)return!0;if($e(e)&&(j(e)||typeof e=="string"||typeof e.splice=="function"||Nn(e)||fr(e)||Xn(e)))return!e.length;var n=De(e);if(n==Ne||n==fn)return!e.size;if(Br(e))return!mu(e).length;for(var r in e)if(ae.call(e,r))return!1;return!0}function Yh(e,n){return Mr(e,n)}function Kh(e,n,r){r=typeof r=="function"?r:s;var u=r?r(e,n):s;return u===s?Mr(e,n,s,r):!!u}function $u(e){if(!we(e))return!1;var n=He(e);return n==en||n==je||typeof e.message=="string"&&typeof e.name=="string"&&!Ur(e)}function Vh(e){return typeof e=="number"&&Zi(e)}function Ln(e){if(!ve(e))return!1;var n=He(e);return n==yn||n==ze||n==de||n==ms}function _a(e){return typeof e=="number"&&e==Y(e)}function Pt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=R}function ve(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function we(e){return e!=null&&typeof e=="object"}var ma=Mi?Ke(Mi):Jo;function Zh(e,n){return e===n||_u(e,n,zu(n))}function Xh(e,n,r){return r=typeof r=="function"?r:s,_u(e,n,zu(n),r)}function Jh(e){return va(e)&&e!=+e}function Qh(e){if(Uf(e))throw new q(N);return cd(e)}function ep(e){return e===null}function np(e){return e==null}function va(e){return typeof e=="number"||we(e)&&He(e)==mr}function Ur(e){if(!we(e)||He(e)!=kn)return!1;var n=Qr(e);if(n===null)return!0;var r=ae.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&Vr.call(r)==Vc}var Gu=Ii?Ke(Ii):Qo;function rp(e){return _a(e)&&e>=-R&&e<=R}var wa=zi?Ke(zi):ef;function Et(e){return typeof e=="string"||!j(e)&&we(e)&&He(e)==wr}function Ze(e){return typeof e=="symbol"||we(e)&&He(e)==Or}var fr=Bi?Ke(Bi):nf;function tp(e){return e===s}function up(e){return we(e)&&De(e)==br}function ip(e){return we(e)&&He(e)==ws}var dp=mt(vu),ap=mt(function(e,n){return e<=n});function ba(e){if(!e)return[];if($e(e))return Et(e)?ln(e):xe(e);if(Ar&&e[Ar])return Hc(e[Ar]());var n=De(e),r=n==Ne?iu:n==fn?jr:lr;return r(e)}function Tn(e){if(!e)return e===0?e:0;if(e=cn(e),e===h||e===-h){var n=e<0?-1:1;return n*B}return e===e?e:0}function Y(e){var n=Tn(e),r=n%1;return n===n?r?n-r:n:0}function ya(e){return e?Yn(Y(e),0,O):0}function cn(e){if(typeof e=="number")return e;if(Ze(e))return D;if(ve(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ve(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Oi(e);var r=Os.test(e);return r||xs.test(e)?bc(e.slice(2),r?2:8):Ws.test(e)?D:+e}function ka(e){return vn(e,Ge(e))}function sp(e){return e?Yn(Y(e),-R,R):e===0?e:0}function ie(e){return e==null?"":Ve(e)}var cp=sr(function(e,n){if(Br(n)||$e(n)){vn(n,Le(n),e);return}for(var r in n)ae.call(n,r)&&Rr(e,r,n[r])}),Aa=sr(function(e,n){vn(n,Ge(n),e)}),Rt=sr(function(e,n,r,u){vn(n,Ge(n),e,u)}),op=sr(function(e,n,r,u){vn(n,Le(n),e,u)}),fp=En(fu);function lp(e,n){var r=ar(e);return n==null?r:nd(r,n)}var hp=Z(function(e,n){e=se(e);var r=-1,u=n.length,a=u>2?n[2]:s;for(a&&Fe(n[0],n[1],a)&&(u=1);++r<u;)for(var l=n[r],_=Ge(l),A=-1,C=_.length;++A<C;){var T=_[A],M=e[T];(M===s||pn(M,ur[T])&&!ae.call(e,T))&&(e[T]=l[T])}return e}),pp=Z(function(e){return e.push(s,Od),Ye(Sa,s,e)});function gp(e,n){return Ui(e,x(n,3),mn)}function _p(e,n){return Ui(e,x(n,3),hu)}function mp(e,n){return e==null?e:lu(e,x(n,3),Ge)}function vp(e,n){return e==null?e:dd(e,x(n,3),Ge)}function wp(e,n){return e&&mn(e,x(n,3))}function bp(e,n){return e&&hu(e,x(n,3))}function yp(e){return e==null?[]:ct(e,Le(e))}function kp(e){return e==null?[]:ct(e,Ge(e))}function qu(e,n,r){var u=e==null?s:Kn(e,n);return u===s?r:u}function Ap(e,n){return e!=null&&$d(e,n,qo)}function ju(e,n){return e!=null&&$d(e,n,jo)}var Sp=Dd(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Zr.call(n)),e[n]=r},Ku(qe)),Cp=Dd(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Zr.call(n)),ae.call(e,n)?e[n].push(r):e[n]=[r]},x),Pp=Z(Tr);function Le(e){return $e(e)?Qi(e):mu(e)}function Ge(e){return $e(e)?Qi(e,!0):rf(e)}function Ep(e,n){var r={};return n=x(n,3),mn(e,function(u,a,l){Cn(r,n(u,a,l),u)}),r}function Rp(e,n){var r={};return n=x(n,3),mn(e,function(u,a,l){Cn(r,a,n(u,a,l))}),r}var Lp=sr(function(e,n,r){ot(e,n,r)}),Sa=sr(function(e,n,r,u){ot(e,n,r,u)}),Tp=En(function(e,n){var r={};if(e==null)return r;var u=!1;n=ge(n,function(l){return l=Wn(l,e),u||(u=l.length>1),l}),vn(e,Mu(e),r),u&&(r=dn(r,be|Ue|Me,Sf));for(var a=n.length;a--;)Au(r,n[a]);return r});function Mp(e,n){return Ca(e,Ct(x(n)))}var Ip=En(function(e,n){return e==null?{}:uf(e,n)});function Ca(e,n){if(e==null)return{};var r=ge(Mu(e),function(u){return[u]});return n=x(n),_d(e,r,function(u,a){return n(u,a[0])})}function zp(e,n,r){n=Wn(n,e);var u=-1,a=n.length;for(a||(a=1,e=s);++u<a;){var l=e==null?s:e[wn(n[u])];l===s&&(u=a,l=r),e=Ln(l)?l.call(e):l}return e}function Bp(e,n,r){return e==null?e:Ir(e,n,r)}function Dp(e,n,r,u){return u=typeof u=="function"?u:s,e==null?e:Ir(e,n,r,u)}var Pa=Fd(Le),Ea=Fd(Ge);function Up(e,n,r){var u=j(e),a=u||Nn(e)||fr(e);if(n=x(n,4),r==null){var l=e&&e.constructor;a?r=u?new l:[]:ve(e)?r=Ln(l)?ar(Qr(e)):{}:r={}}return(a?rn:mn)(e,function(_,A,C){return n(r,_,A,C)}),r}function Hp(e,n){return e==null?!0:Au(e,n)}function Fp(e,n,r){return e==null?e:yd(e,n,Pu(r))}function Wp(e,n,r,u){return u=typeof u=="function"?u:s,e==null?e:yd(e,n,Pu(r),u)}function lr(e){return e==null?[]:uu(e,Le(e))}function Op(e){return e==null?[]:uu(e,Ge(e))}function Np(e,n,r){return r===s&&(r=n,n=s),r!==s&&(r=cn(r),r=r===r?r:0),n!==s&&(n=cn(n),n=n===n?n:0),Yn(cn(e),n,r)}function xp(e,n,r){return n=Tn(n),r===s?(r=n,n=0):r=Tn(r),e=cn(e),Yo(e,n,r)}function $p(e,n,r){if(r&&typeof r!="boolean"&&Fe(e,n,r)&&(n=r=s),r===s&&(typeof n=="boolean"?(r=n,n=s):typeof e=="boolean"&&(r=e,e=s)),e===s&&n===s?(e=0,n=1):(e=Tn(e),n===s?(n=e,e=0):n=Tn(n)),e>n){var u=e;e=n,n=u}if(r||e%1||n%1){var a=Xi();return Be(e+a*(n-e+wc("1e-"+((a+"").length-1))),n)}return bu(e,n)}var Gp=cr(function(e,n,r){return n=n.toLowerCase(),e+(r?Ra(n):n)});function Ra(e){return Yu(ie(e).toLowerCase())}function La(e){return e=ie(e),e&&e.replace(Gs,Ic).replace(cc,"")}function qp(e,n,r){e=ie(e),n=Ve(n);var u=e.length;r=r===s?u:Yn(Y(r),0,u);var a=r;return r-=n.length,r>=0&&e.slice(r,a)==n}function jp(e){return e=ie(e),e&&Ss.test(e)?e.replace(di,zc):e}function Yp(e){return e=ie(e),e&&Ts.test(e)?e.replace(xt,"\\$&"):e}var Kp=cr(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),Vp=cr(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),Zp=Id("toLowerCase");function Xp(e,n,r){e=ie(e),n=Y(n);var u=n?tr(e):0;if(!n||u>=n)return e;var a=(n-u)/2;return _t(tt(a),r)+e+_t(rt(a),r)}function Jp(e,n,r){e=ie(e),n=Y(n);var u=n?tr(e):0;return n&&u<n?e+_t(n-u,r):e}function Qp(e,n,r){e=ie(e),n=Y(n);var u=n?tr(e):0;return n&&u<n?_t(n-u,r)+e:e}function eg(e,n,r){return r||n==null?n=0:n&&(n=+n),io(ie(e).replace($t,""),n||0)}function ng(e,n,r){return(r?Fe(e,n,r):n===s)?n=1:n=Y(n),yu(ie(e),n)}function rg(){var e=arguments,n=ie(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var tg=cr(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function ug(e,n,r){return r&&typeof r!="number"&&Fe(e,n,r)&&(n=r=s),r=r===s?O:r>>>0,r?(e=ie(e),e&&(typeof n=="string"||n!=null&&!Gu(n))&&(n=Ve(n),!n&&rr(e))?On(ln(e),0,r):e.split(n,r)):[]}var ig=cr(function(e,n,r){return e+(r?" ":"")+Yu(n)});function dg(e,n,r){return e=ie(e),r=r==null?0:Yn(Y(r),0,e.length),n=Ve(n),e.slice(r,r+n.length)==n}function ag(e,n,r){var u=o.templateSettings;r&&Fe(e,n,r)&&(n=s),e=ie(e),n=Rt({},n,u,Wd);var a=Rt({},n.imports,u.imports,Wd),l=Le(a),_=uu(a,l),A,C,T=0,M=n.interpolate||Nr,z="__p += '",U=du((n.escape||Nr).source+"|"+M.source+"|"+(M===ai?Fs:Nr).source+"|"+(n.evaluate||Nr).source+"|$","g"),W="//# sourceURL="+(ae.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++pc+"]")+`
`;e.replace(U,function(G,X,ne,Xe,We,Je){return ne||(ne=Xe),z+=e.slice(T,Je).replace(qs,Bc),X&&(A=!0,z+=`' +
__e(`+X+`) +
'`),We&&(C=!0,z+=`';
`+We+`;
__p += '`),ne&&(z+=`' +
((__t = (`+ne+`)) == null ? '' : __t) +
'`),T=Je+G.length,G}),z+=`';
`;var $=ae.call(n,"variable")&&n.variable;if(!$)z=`with (obj) {
`+z+`
}
`;else if(Us.test($))throw new q(V);z=(C?z.replace(bs,""):z).replace(ys,"$1").replace(ks,"$1;"),z="function("+($||"obj")+`) {
`+($?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(A?", __e = _.escape":"")+(C?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+z+`return __p
}`;var K=Ma(function(){return ue(l,W+"return "+z).apply(s,_)});if(K.source=z,$u(K))throw K;return K}function sg(e){return ie(e).toLowerCase()}function cg(e){return ie(e).toUpperCase()}function og(e,n,r){if(e=ie(e),e&&(r||n===s))return Oi(e);if(!e||!(n=Ve(n)))return e;var u=ln(e),a=ln(n),l=Ni(u,a),_=xi(u,a)+1;return On(u,l,_).join("")}function fg(e,n,r){if(e=ie(e),e&&(r||n===s))return e.slice(0,Gi(e)+1);if(!e||!(n=Ve(n)))return e;var u=ln(e),a=xi(u,ln(n))+1;return On(u,0,a).join("")}function lg(e,n,r){if(e=ie(e),e&&(r||n===s))return e.replace($t,"");if(!e||!(n=Ve(n)))return e;var u=ln(e),a=Ni(u,ln(n));return On(u,a).join("")}function hg(e,n){var r=k,u=v;if(ve(n)){var a="separator"in n?n.separator:a;r="length"in n?Y(n.length):r,u="omission"in n?Ve(n.omission):u}e=ie(e);var l=e.length;if(rr(e)){var _=ln(e);l=_.length}if(r>=l)return e;var A=r-tr(u);if(A<1)return u;var C=_?On(_,0,A).join(""):e.slice(0,A);if(a===s)return C+u;if(_&&(A+=C.length-A),Gu(a)){if(e.slice(A).search(a)){var T,M=C;for(a.global||(a=du(a.source,ie(si.exec(a))+"g")),a.lastIndex=0;T=a.exec(M);)var z=T.index;C=C.slice(0,z===s?A:z)}}else if(e.indexOf(Ve(a),A)!=A){var U=C.lastIndexOf(a);U>-1&&(C=C.slice(0,U))}return C+u}function pg(e){return e=ie(e),e&&As.test(e)?e.replace(ii,Nc):e}var gg=cr(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),Yu=Id("toUpperCase");function Ta(e,n,r){return e=ie(e),n=r?s:n,n===s?Uc(e)?Gc(e):Ec(e):e.match(n)||[]}var Ma=Z(function(e,n){try{return Ye(e,s,n)}catch(r){return $u(r)?r:new q(r)}}),_g=En(function(e,n){return rn(n,function(r){r=wn(r),Cn(e,r,Nu(e[r],e))}),e});function mg(e){var n=e==null?0:e.length,r=x();return e=n?ge(e,function(u){if(typeof u[1]!="function")throw new tn(P);return[r(u[0]),u[1]]}):[],Z(function(u){for(var a=-1;++a<n;){var l=e[a];if(Ye(l[0],this,u))return Ye(l[1],this,u)}})}function vg(e){return xo(dn(e,be))}function Ku(e){return function(){return e}}function wg(e,n){return e==null||e!==e?n:e}var bg=Bd(),yg=Bd(!0);function qe(e){return e}function Vu(e){return od(typeof e=="function"?e:dn(e,be))}function kg(e){return ld(dn(e,be))}function Ag(e,n){return hd(e,dn(n,be))}var Sg=Z(function(e,n){return function(r){return Tr(r,e,n)}}),Cg=Z(function(e,n){return function(r){return Tr(e,r,n)}});function Zu(e,n,r){var u=Le(n),a=ct(n,u);r==null&&!(ve(n)&&(a.length||!u.length))&&(r=n,n=e,e=this,a=ct(n,Le(n)));var l=!(ve(r)&&"chain"in r)||!!r.chain,_=Ln(e);return rn(a,function(A){var C=n[A];e[A]=C,_&&(e.prototype[A]=function(){var T=this.__chain__;if(l||T){var M=e(this.__wrapped__),z=M.__actions__=xe(this.__actions__);return z.push({func:C,args:arguments,thisArg:e}),M.__chain__=T,M}return C.apply(e,zn([this.value()],arguments))})}),e}function Pg(){return Re._===this&&(Re._=Zc),this}function Xu(){}function Eg(e){return e=Y(e),Z(function(n){return pd(n,e)})}var Rg=Ru(ge),Lg=Ru(Di),Tg=Ru(Qt);function Ia(e){return Du(e)?eu(wn(e)):df(e)}function Mg(e){return function(n){return e==null?s:Kn(e,n)}}var Ig=Ud(),zg=Ud(!0);function Ju(){return[]}function Qu(){return!1}function Bg(){return{}}function Dg(){return""}function Ug(){return!0}function Hg(e,n){if(e=Y(e),e<1||e>R)return[];var r=O,u=Be(e,O);n=x(n),e-=O;for(var a=tu(u,n);++r<e;)n(r);return a}function Fg(e){return j(e)?ge(e,wn):Ze(e)?[e]:xe(Jd(ie(e)))}function Wg(e){var n=++Kc;return ie(e)+n}var Og=gt(function(e,n){return e+n},0),Ng=Lu("ceil"),xg=gt(function(e,n){return e/n},1),$g=Lu("floor");function Gg(e){return e&&e.length?st(e,qe,pu):s}function qg(e,n){return e&&e.length?st(e,x(n,2),pu):s}function jg(e){return Fi(e,qe)}function Yg(e,n){return Fi(e,x(n,2))}function Kg(e){return e&&e.length?st(e,qe,vu):s}function Vg(e,n){return e&&e.length?st(e,x(n,2),vu):s}var Zg=gt(function(e,n){return e*n},1),Xg=Lu("round"),Jg=gt(function(e,n){return e-n},0);function Qg(e){return e&&e.length?ru(e,qe):0}function e_(e,n){return e&&e.length?ru(e,x(n,2)):0}return o.after=kh,o.ary=ca,o.assign=cp,o.assignIn=Aa,o.assignInWith=Rt,o.assignWith=op,o.at=fp,o.before=oa,o.bind=Nu,o.bindAll=_g,o.bindKey=fa,o.castArray=Bh,o.chain=da,o.chunk=$f,o.compact=Gf,o.concat=qf,o.cond=mg,o.conforms=vg,o.constant=Ku,o.countBy=Ql,o.create=lp,o.curry=la,o.curryRight=ha,o.debounce=pa,o.defaults=hp,o.defaultsDeep=pp,o.defer=Ah,o.delay=Sh,o.difference=jf,o.differenceBy=Yf,o.differenceWith=Kf,o.drop=Vf,o.dropRight=Zf,o.dropRightWhile=Xf,o.dropWhile=Jf,o.fill=Qf,o.filter=nh,o.flatMap=uh,o.flatMapDeep=ih,o.flatMapDepth=dh,o.flatten=ra,o.flattenDeep=el,o.flattenDepth=nl,o.flip=Ch,o.flow=bg,o.flowRight=yg,o.fromPairs=rl,o.functions=yp,o.functionsIn=kp,o.groupBy=ah,o.initial=ul,o.intersection=il,o.intersectionBy=dl,o.intersectionWith=al,o.invert=Sp,o.invertBy=Cp,o.invokeMap=ch,o.iteratee=Vu,o.keyBy=oh,o.keys=Le,o.keysIn=Ge,o.map=kt,o.mapKeys=Ep,o.mapValues=Rp,o.matches=kg,o.matchesProperty=Ag,o.memoize=St,o.merge=Lp,o.mergeWith=Sa,o.method=Sg,o.methodOf=Cg,o.mixin=Zu,o.negate=Ct,o.nthArg=Eg,o.omit=Tp,o.omitBy=Mp,o.once=Ph,o.orderBy=fh,o.over=Rg,o.overArgs=Eh,o.overEvery=Lg,o.overSome=Tg,o.partial=xu,o.partialRight=ga,o.partition=lh,o.pick=Ip,o.pickBy=Ca,o.property=Ia,o.propertyOf=Mg,o.pull=fl,o.pullAll=ua,o.pullAllBy=ll,o.pullAllWith=hl,o.pullAt=pl,o.range=Ig,o.rangeRight=zg,o.rearg=Rh,o.reject=gh,o.remove=gl,o.rest=Lh,o.reverse=Wu,o.sampleSize=mh,o.set=Bp,o.setWith=Dp,o.shuffle=vh,o.slice=_l,o.sortBy=yh,o.sortedUniq=Al,o.sortedUniqBy=Sl,o.split=ug,o.spread=Th,o.tail=Cl,o.take=Pl,o.takeRight=El,o.takeRightWhile=Rl,o.takeWhile=Ll,o.tap=Gl,o.throttle=Mh,o.thru=yt,o.toArray=ba,o.toPairs=Pa,o.toPairsIn=Ea,o.toPath=Fg,o.toPlainObject=ka,o.transform=Up,o.unary=Ih,o.union=Tl,o.unionBy=Ml,o.unionWith=Il,o.uniq=zl,o.uniqBy=Bl,o.uniqWith=Dl,o.unset=Hp,o.unzip=Ou,o.unzipWith=ia,o.update=Fp,o.updateWith=Wp,o.values=lr,o.valuesIn=Op,o.without=Ul,o.words=Ta,o.wrap=zh,o.xor=Hl,o.xorBy=Fl,o.xorWith=Wl,o.zip=Ol,o.zipObject=Nl,o.zipObjectDeep=xl,o.zipWith=$l,o.entries=Pa,o.entriesIn=Ea,o.extend=Aa,o.extendWith=Rt,Zu(o,o),o.add=Og,o.attempt=Ma,o.camelCase=Gp,o.capitalize=Ra,o.ceil=Ng,o.clamp=Np,o.clone=Dh,o.cloneDeep=Hh,o.cloneDeepWith=Fh,o.cloneWith=Uh,o.conformsTo=Wh,o.deburr=La,o.defaultTo=wg,o.divide=xg,o.endsWith=qp,o.eq=pn,o.escape=jp,o.escapeRegExp=Yp,o.every=eh,o.find=rh,o.findIndex=ea,o.findKey=gp,o.findLast=th,o.findLastIndex=na,o.findLastKey=_p,o.floor=$g,o.forEach=aa,o.forEachRight=sa,o.forIn=mp,o.forInRight=vp,o.forOwn=wp,o.forOwnRight=bp,o.get=qu,o.gt=Oh,o.gte=Nh,o.has=Ap,o.hasIn=ju,o.head=ta,o.identity=qe,o.includes=sh,o.indexOf=tl,o.inRange=xp,o.invoke=Pp,o.isArguments=Xn,o.isArray=j,o.isArrayBuffer=xh,o.isArrayLike=$e,o.isArrayLikeObject=ye,o.isBoolean=$h,o.isBuffer=Nn,o.isDate=Gh,o.isElement=qh,o.isEmpty=jh,o.isEqual=Yh,o.isEqualWith=Kh,o.isError=$u,o.isFinite=Vh,o.isFunction=Ln,o.isInteger=_a,o.isLength=Pt,o.isMap=ma,o.isMatch=Zh,o.isMatchWith=Xh,o.isNaN=Jh,o.isNative=Qh,o.isNil=np,o.isNull=ep,o.isNumber=va,o.isObject=ve,o.isObjectLike=we,o.isPlainObject=Ur,o.isRegExp=Gu,o.isSafeInteger=rp,o.isSet=wa,o.isString=Et,o.isSymbol=Ze,o.isTypedArray=fr,o.isUndefined=tp,o.isWeakMap=up,o.isWeakSet=ip,o.join=sl,o.kebabCase=Kp,o.last=sn,o.lastIndexOf=cl,o.lowerCase=Vp,o.lowerFirst=Zp,o.lt=dp,o.lte=ap,o.max=Gg,o.maxBy=qg,o.mean=jg,o.meanBy=Yg,o.min=Kg,o.minBy=Vg,o.stubArray=Ju,o.stubFalse=Qu,o.stubObject=Bg,o.stubString=Dg,o.stubTrue=Ug,o.multiply=Zg,o.nth=ol,o.noConflict=Pg,o.noop=Xu,o.now=At,o.pad=Xp,o.padEnd=Jp,o.padStart=Qp,o.parseInt=eg,o.random=$p,o.reduce=hh,o.reduceRight=ph,o.repeat=ng,o.replace=rg,o.result=zp,o.round=Xg,o.runInContext=S,o.sample=_h,o.size=wh,o.snakeCase=tg,o.some=bh,o.sortedIndex=ml,o.sortedIndexBy=vl,o.sortedIndexOf=wl,o.sortedLastIndex=bl,o.sortedLastIndexBy=yl,o.sortedLastIndexOf=kl,o.startCase=ig,o.startsWith=dg,o.subtract=Jg,o.sum=Qg,o.sumBy=e_,o.template=ag,o.times=Hg,o.toFinite=Tn,o.toInteger=Y,o.toLength=ya,o.toLower=sg,o.toNumber=cn,o.toSafeInteger=sp,o.toString=ie,o.toUpper=cg,o.trim=og,o.trimEnd=fg,o.trimStart=lg,o.truncate=hg,o.unescape=pg,o.uniqueId=Wg,o.upperCase=gg,o.upperFirst=Yu,o.each=aa,o.eachRight=sa,o.first=ta,Zu(o,(function(){var e={};return mn(o,function(n,r){ae.call(o.prototype,r)||(e[r]=n)}),e})(),{chain:!1}),o.VERSION=I,rn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){o[e].placeholder=o}),rn(["drop","take"],function(e,n){J.prototype[e]=function(r){r=r===s?1:Pe(Y(r),0);var u=this.__filtered__&&!n?new J(this):this.clone();return u.__filtered__?u.__takeCount__=Be(r,u.__takeCount__):u.__views__.push({size:Be(r,O),type:e+(u.__dir__<0?"Right":"")}),u},J.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),rn(["filter","map","takeWhile"],function(e,n){var r=n+1,u=r==g||r==b;J.prototype[e]=function(a){var l=this.clone();return l.__iteratees__.push({iteratee:x(a,3),type:r}),l.__filtered__=l.__filtered__||u,l}}),rn(["head","last"],function(e,n){var r="take"+(n?"Right":"");J.prototype[e]=function(){return this[r](1).value()[0]}}),rn(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");J.prototype[e]=function(){return this.__filtered__?new J(this):this[r](1)}}),J.prototype.compact=function(){return this.filter(qe)},J.prototype.find=function(e){return this.filter(e).head()},J.prototype.findLast=function(e){return this.reverse().find(e)},J.prototype.invokeMap=Z(function(e,n){return typeof e=="function"?new J(this):this.map(function(r){return Tr(r,e,n)})}),J.prototype.reject=function(e){return this.filter(Ct(x(e)))},J.prototype.slice=function(e,n){e=Y(e);var r=this;return r.__filtered__&&(e>0||n<0)?new J(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==s&&(n=Y(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},J.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},J.prototype.toArray=function(){return this.take(O)},mn(J.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),u=/^(?:head|last)$/.test(n),a=o[u?"take"+(n=="last"?"Right":""):n],l=u||/^find/.test(n);a&&(o.prototype[n]=function(){var _=this.__wrapped__,A=u?[1]:arguments,C=_ instanceof J,T=A[0],M=C||j(_),z=function(X){var ne=a.apply(o,zn([X],A));return u&&U?ne[0]:ne};M&&r&&typeof T=="function"&&T.length!=1&&(C=M=!1);var U=this.__chain__,W=!!this.__actions__.length,$=l&&!U,K=C&&!W;if(!l&&M){_=K?_:new J(this);var G=e.apply(_,A);return G.__actions__.push({func:yt,args:[z],thisArg:s}),new un(G,U)}return $&&K?e.apply(this,A):(G=this.thru(z),$?u?G.value()[0]:G.value():G)})}),rn(["pop","push","shift","sort","splice","unshift"],function(e){var n=Yr[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",u=/^(?:pop|shift)$/.test(e);o.prototype[e]=function(){var a=arguments;if(u&&!this.__chain__){var l=this.value();return n.apply(j(l)?l:[],a)}return this[r](function(_){return n.apply(j(_)?_:[],a)})}}),mn(J.prototype,function(e,n){var r=o[n];if(r){var u=r.name+"";ae.call(dr,u)||(dr[u]=[]),dr[u].push({name:n,func:r})}}),dr[pt(s,Oe).name]=[{name:"wrapper",func:s}],J.prototype.clone=ho,J.prototype.reverse=po,J.prototype.value=go,o.prototype.at=ql,o.prototype.chain=jl,o.prototype.commit=Yl,o.prototype.next=Kl,o.prototype.plant=Zl,o.prototype.reverse=Xl,o.prototype.toJSON=o.prototype.valueOf=o.prototype.value=Jl,o.prototype.first=o.prototype.head,Ar&&(o.prototype[Ar]=Vl),o}),Dn=qc();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Re._=Dn,define(function(){return Dn})):$n?(($n.exports=Dn)._=Dn,Vt._=Dn):Re._=Dn}).call(pr)});var Xa=bn((Za,Mt)=>{pe();(function(s){"use strict";function I(i,d){var c=(i&65535)+(d&65535),m=(i>>16)+(d>>16)+(c>>16);return m<<16|c&65535}function f(i,d){return i<<d|i>>>32-d}function N(i,d,c,m,k,v){return I(f(I(I(d,i),I(m,v)),k),c)}function P(i,d,c,m,k,v,y){return N(d&c|~d&m,i,d,k,v,y)}function V(i,d,c,m,k,v,y){return N(d&m|c&~m,i,d,k,v,y)}function Q(i,d,c,m,k,v,y){return N(d^c^m,i,d,k,v,y)}function te(i,d,c,m,k,v,y){return N(c^(d|~m),i,d,k,v,y)}function Ae(i,d){i[d>>5]|=128<<d%32,i[(d+64>>>9<<4)+14]=d;var c,m,k,v,y,w=1732584193,g=-271733879,p=-1732584194,b=271733878;for(c=0;c<i.length;c+=16)m=w,k=g,v=p,y=b,w=P(w,g,p,b,i[c],7,-680876936),b=P(b,w,g,p,i[c+1],12,-389564586),p=P(p,b,w,g,i[c+2],17,606105819),g=P(g,p,b,w,i[c+3],22,-1044525330),w=P(w,g,p,b,i[c+4],7,-176418897),b=P(b,w,g,p,i[c+5],12,1200080426),p=P(p,b,w,g,i[c+6],17,-1473231341),g=P(g,p,b,w,i[c+7],22,-45705983),w=P(w,g,p,b,i[c+8],7,1770035416),b=P(b,w,g,p,i[c+9],12,-1958414417),p=P(p,b,w,g,i[c+10],17,-42063),g=P(g,p,b,w,i[c+11],22,-1990404162),w=P(w,g,p,b,i[c+12],7,1804603682),b=P(b,w,g,p,i[c+13],12,-40341101),p=P(p,b,w,g,i[c+14],17,-1502002290),g=P(g,p,b,w,i[c+15],22,1236535329),w=V(w,g,p,b,i[c+1],5,-165796510),b=V(b,w,g,p,i[c+6],9,-1069501632),p=V(p,b,w,g,i[c+11],14,643717713),g=V(g,p,b,w,i[c],20,-373897302),w=V(w,g,p,b,i[c+5],5,-701558691),b=V(b,w,g,p,i[c+10],9,38016083),p=V(p,b,w,g,i[c+15],14,-660478335),g=V(g,p,b,w,i[c+4],20,-405537848),w=V(w,g,p,b,i[c+9],5,568446438),b=V(b,w,g,p,i[c+14],9,-1019803690),p=V(p,b,w,g,i[c+3],14,-187363961),g=V(g,p,b,w,i[c+8],20,1163531501),w=V(w,g,p,b,i[c+13],5,-1444681467),b=V(b,w,g,p,i[c+2],9,-51403784),p=V(p,b,w,g,i[c+7],14,1735328473),g=V(g,p,b,w,i[c+12],20,-1926607734),w=Q(w,g,p,b,i[c+5],4,-378558),b=Q(b,w,g,p,i[c+8],11,-2022574463),p=Q(p,b,w,g,i[c+11],16,1839030562),g=Q(g,p,b,w,i[c+14],23,-35309556),w=Q(w,g,p,b,i[c+1],4,-1530992060),b=Q(b,w,g,p,i[c+4],11,1272893353),p=Q(p,b,w,g,i[c+7],16,-155497632),g=Q(g,p,b,w,i[c+10],23,-1094730640),w=Q(w,g,p,b,i[c+13],4,681279174),b=Q(b,w,g,p,i[c],11,-358537222),p=Q(p,b,w,g,i[c+3],16,-722521979),g=Q(g,p,b,w,i[c+6],23,76029189),w=Q(w,g,p,b,i[c+9],4,-640364487),b=Q(b,w,g,p,i[c+12],11,-421815835),p=Q(p,b,w,g,i[c+15],16,530742520),g=Q(g,p,b,w,i[c+2],23,-995338651),w=te(w,g,p,b,i[c],6,-198630844),b=te(b,w,g,p,i[c+7],10,1126891415),p=te(p,b,w,g,i[c+14],15,-1416354905),g=te(g,p,b,w,i[c+5],21,-57434055),w=te(w,g,p,b,i[c+12],6,1700485571),b=te(b,w,g,p,i[c+3],10,-1894986606),p=te(p,b,w,g,i[c+10],15,-1051523),g=te(g,p,b,w,i[c+1],21,-2054922799),w=te(w,g,p,b,i[c+8],6,1873313359),b=te(b,w,g,p,i[c+15],10,-30611744),p=te(p,b,w,g,i[c+6],15,-1560198380),g=te(g,p,b,w,i[c+13],21,1309151649),w=te(w,g,p,b,i[c+4],6,-145523070),b=te(b,w,g,p,i[c+11],10,-1120210379),p=te(p,b,w,g,i[c+2],15,718787259),g=te(g,p,b,w,i[c+9],21,-343485551),w=I(w,m),g=I(g,k),p=I(p,v),b=I(b,y);return[w,g,p,b]}function be(i){var d,c="",m=i.length*32;for(d=0;d<m;d+=8)c+=String.fromCharCode(i[d>>5]>>>d%32&255);return c}function Ue(i){var d,c=[];for(c[(i.length>>2)-1]=void 0,d=0;d<c.length;d+=1)c[d]=0;var m=i.length*8;for(d=0;d<m;d+=8)c[d>>5]|=(i.charCodeAt(d/8)&255)<<d%32;return c}function Me(i){return be(Ae(Ue(i),i.length*8))}function Ie(i,d){var c,m=Ue(i),k=[],v=[],y;for(k[15]=v[15]=void 0,m.length>16&&(m=Ae(m,i.length*8)),c=0;c<16;c+=1)k[c]=m[c]^909522486,v[c]=m[c]^1549556828;return y=Ae(k.concat(Ue(d)),512+d.length*8),be(Ae(v.concat(y),640))}function Se(i){var d="0123456789abcdef",c="",m,k;for(k=0;k<i.length;k+=1)m=i.charCodeAt(k),c+=d.charAt(m>>>4&15)+d.charAt(m&15);return c}function fe(i){return unescape(encodeURIComponent(i))}function Oe(i){return Me(fe(i))}function on(i){return Se(Oe(i))}function Ee(i,d){return Ie(fe(i),fe(d))}function Qe(i,d){return Se(Ee(i,d))}function t(i,d,c){return d?c?Ee(d,i):Qe(d,i):c?Oe(i):on(i)}typeof define=="function"&&define.amd?define(function(){return t}):typeof Mt=="object"&&Mt.exports?Mt.exports=t:s.md5=t})(Za)});var Qa=bn((R_,Ja)=>{"use strict";pe();function o_(s,I){return Object.prototype.hasOwnProperty.call(s,I)}Ja.exports=function(s,I,f,N){I=I||"&",f=f||"=";var P={};if(typeof s!="string"||s.length===0)return P;var V=/\+/g;s=s.split(I);var Q=1e3;N&&typeof N.maxKeys=="number"&&(Q=N.maxKeys);var te=s.length;Q>0&&te>Q&&(te=Q);for(var Ae=0;Ae<te;++Ae){var be=s[Ae].replace(V,"%20"),Ue=be.indexOf(f),Me,Ie,Se,fe;Ue>=0?(Me=be.substr(0,Ue),Ie=be.substr(Ue+1)):(Me=be,Ie=""),Se=decodeURIComponent(Me),fe=decodeURIComponent(Ie),o_(P,Se)?Array.isArray(P[Se])?P[Se].push(fe):P[Se]=[P[Se],fe]:P[Se]=fe}return P}});var ns=bn((T_,es)=>{"use strict";pe();var Fr=function(s){switch(typeof s){case"string":return s;case"boolean":return s?"true":"false";case"number":return isFinite(s)?s:"";default:return""}};es.exports=function(s,I,f,N){return I=I||"&",f=f||"=",s===null&&(s=void 0),typeof s=="object"?Object.keys(s).map(function(P){var V=encodeURIComponent(Fr(P))+f;return Array.isArray(s[P])?s[P].map(function(Q){return V+encodeURIComponent(Fr(Q))}).join(I):V+encodeURIComponent(Fr(s[P]))}).join(I):N?encodeURIComponent(Fr(N))+f+encodeURIComponent(Fr(s)):""}});var rs=bn(Wr=>{"use strict";pe();Wr.decode=Wr.parse=Qa();Wr.encode=Wr.stringify=ns()});var as=bn((D_,ds)=>{pe();var f_=Xa(),l_=rs(),h_=/^[0-9a-f]{32}$/;function p_(s){var I={},f={protocol:1,format:1};for(var N in s)f[N]||(I[N]=s[N]);return I}function ts(s,I){if(s)return typeof s.protocol=="boolean"?s.protocol:s.protocol==="http"?!1:s.protocol==="https"?!0:void 0}function us(s){return s=typeof s=="string"?s.trim().toLowerCase():"unspecified",s.match(h_)?s:f_(s)}function is(s){var I=l_.stringify(p_(s));return I&&"?"+I||""}var B_=ds.exports={url:function(s,I,f){var N="//www.gravatar.com/avatar/";I&&I.cdn?(N=I.cdn+"/avatar/",delete I.cdn):(I&&I.protocol&&(f=ts(I)),typeof f<"u"&&(N=f?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var P=is(I);return N+us(s)+P},profile_url:function(s,I,f){var N=I!=null&&I.format!=null?String(I.format):"json",P;if(I&&I.cdn)P=I.cdn+"/",delete I.cdn;else{I&&I.protocol&&(f=ts(I));var P=f&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var V=is(I);return P+us(s)+"."+N+V}}});var cs=bn((H_,ss)=>{pe();ss.exports=as()});var os=bn(gr=>{pe();(function(I,f){typeof gr=="object"&&gr&&typeof gr.nodeName!="string"?f(gr):typeof define=="function"&&define.amd?define(["exports"],f):(I.Mustache={},f(I.Mustache))})(gr,function(I){var f=Object.prototype.toString,N=Array.isArray||function(w){return f.call(w)==="[object Array]"};function P(y){return typeof y=="function"}function V(y){return N(y)?"array":typeof y}function Q(y){return y.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function te(y,w){return y!=null&&typeof y=="object"&&w in y}var Ae=RegExp.prototype.test;function be(y,w){return Ae.call(y,w)}var Ue=/\S/;function Me(y){return!be(Ue,y)}var Ie={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function Se(y){return String(y).replace(/[&<>"'`=\/]/g,function(g){return Ie[g]})}var fe=/\s*/,Oe=/\s+/,on=/\s*=/,Ee=/\s*\}/,Qe=/#|\^|\/|>|\{|&|=|!/;function t(y,w){if(!y)return[];var g=[],p=[],b=[],h=!1,R=!1;function B(){if(h&&!R)for(;b.length;)delete p[b.pop()];else b=[];h=!1,R=!1}var D,O,F;function _e(ze){if(typeof ze=="string"&&(ze=ze.split(Oe,2)),!N(ze)||ze.length!==2)throw new Error("Invalid tags: "+ze);D=new RegExp(Q(ze[0])+"\\s*"),O=new RegExp("\\s*"+Q(ze[1])),F=new RegExp("\\s*"+Q("}"+ze[1]))}_e(w||I.tags);for(var re=new c(y),ce,ee,de,le,me,je;!re.eos();){if(ce=re.pos,de=re.scanUntil(D),de)for(var en=0,yn=de.length;en<yn;++en)le=de.charAt(en),Me(le)?b.push(p.length):R=!0,p.push(["text",le,ce,ce+1]),ce+=1,le===`
`&&B();if(!re.scan(D))break;if(h=!0,ee=re.scan(Qe)||"name",re.scan(fe),ee==="="?(de=re.scanUntil(on),re.scan(on),re.scanUntil(O)):ee==="{"?(de=re.scanUntil(F),re.scan(Ee),re.scanUntil(O),ee="&"):de=re.scanUntil(O),!re.scan(O))throw new Error("Unclosed tag at "+re.pos);if(me=[ee,de,ce,re.pos],p.push(me),ee==="#"||ee==="^")g.push(me);else if(ee==="/"){if(je=g.pop(),!je)throw new Error('Unopened section "'+de+'" at '+ce);if(je[1]!==de)throw new Error('Unclosed section "'+je[1]+'" at '+ce)}else ee==="name"||ee==="{"||ee==="&"?R=!0:ee==="="&&_e(de)}if(je=g.pop(),je)throw new Error('Unclosed section "'+je[1]+'" at '+re.pos);return d(i(p))}function i(y){for(var w=[],g,p,b=0,h=y.length;b<h;++b)g=y[b],g&&(g[0]==="text"&&p&&p[0]==="text"?(p[1]+=g[1],p[3]=g[3]):(w.push(g),p=g));return w}function d(y){for(var w=[],g=w,p=[],b,h,R=0,B=y.length;R<B;++R)switch(b=y[R],b[0]){case"#":case"^":g.push(b),p.push(b),g=b[4]=[];break;case"/":h=p.pop(),h[5]=b[2],g=p.length>0?p[p.length-1][4]:w;break;default:g.push(b)}return w}function c(y){this.string=y,this.tail=y,this.pos=0}c.prototype.eos=function(){return this.tail===""},c.prototype.scan=function(w){var g=this.tail.match(w);if(!g||g.index!==0)return"";var p=g[0];return this.tail=this.tail.substring(p.length),this.pos+=p.length,p},c.prototype.scanUntil=function(w){var g=this.tail.search(w),p;switch(g){case-1:p=this.tail,this.tail="";break;case 0:p="";break;default:p=this.tail.substring(0,g),this.tail=this.tail.substring(g)}return this.pos+=p.length,p};function m(y,w){this.view=y,this.cache={".":this.view},this.parent=w}m.prototype.push=function(w){return new m(w,this)},m.prototype.lookup=function(w){var g=this.cache,p;if(g.hasOwnProperty(w))p=g[w];else{for(var b=this,h,R,B=!1;b;){if(w.indexOf(".")>0)for(p=b.view,h=w.split("."),R=0;p!=null&&R<h.length;)R===h.length-1&&(B=te(p,h[R])),p=p[h[R++]];else p=b.view[w],B=te(b.view,w);if(B)break;b=b.parent}g[w]=p}return P(p)&&(p=p.call(this.view)),p};function k(){this.cache={}}k.prototype.clearCache=function(){this.cache={}},k.prototype.parse=function(w,g){var p=this.cache,b=p[w];return b==null&&(b=p[w]=t(w,g)),b},k.prototype.render=function(w,g,p){var b=this.parse(w),h=g instanceof m?g:new m(g);return this.renderTokens(b,h,p,w)},k.prototype.renderTokens=function(w,g,p,b){for(var h="",R,B,D,O=0,F=w.length;O<F;++O)D=void 0,R=w[O],B=R[0],B==="#"?D=this.renderSection(R,g,p,b):B==="^"?D=this.renderInverted(R,g,p,b):B===">"?D=this.renderPartial(R,g,p,b):B==="&"?D=this.unescapedValue(R,g):B==="name"?D=this.escapedValue(R,g):B==="text"&&(D=this.rawValue(R)),D!==void 0&&(h+=D);return h},k.prototype.renderSection=function(w,g,p,b){var h=this,R="",B=g.lookup(w[1]);function D(_e){return h.render(_e,g,p)}if(B){if(N(B))for(var O=0,F=B.length;O<F;++O)R+=this.renderTokens(w[4],g.push(B[O]),p,b);else if(typeof B=="object"||typeof B=="string"||typeof B=="number")R+=this.renderTokens(w[4],g.push(B),p,b);else if(P(B)){if(typeof b!="string")throw new Error("Cannot use higher-order sections without the original template");B=B.call(g.view,b.slice(w[3],w[5]),D),B!=null&&(R+=B)}else R+=this.renderTokens(w[4],g,p,b);return R}},k.prototype.renderInverted=function(w,g,p,b){var h=g.lookup(w[1]);if(!h||N(h)&&h.length===0)return this.renderTokens(w[4],g,p,b)},k.prototype.renderPartial=function(w,g,p){if(p){var b=P(p)?p(w[1]):p[w[1]];if(b!=null)return this.renderTokens(this.parse(b),g,p,b)}},k.prototype.unescapedValue=function(w,g){var p=g.lookup(w[1]);if(p!=null)return p},k.prototype.escapedValue=function(w,g){var p=g.lookup(w[1]);if(p!=null)return I.escape(p)},k.prototype.rawValue=function(w){return w[1]},I.name="mustache.js",I.version="2.3.2",I.tags=["{{","}}"];var v=new k;return I.clearCache=function(){return v.clearCache()},I.parse=function(w,g){return v.parse(w,g)},I.render=function(w,g,p){if(typeof w!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+V(w)+'" was given as the first argument for mustache#render(template, view, partials)');return v.render(w,g,p)},I.to_html=function(w,g,p,b){var h=I.render(w,g,p);if(P(b))b(h);else return h},I.escape=Se,I.Scanner=c,I.Context=m,I.Writer=k,I})});var ls=bn((fs,It)=>{pe();(function(){function s(t){"use strict";var i={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `\xAB\xAB\xAB` and `\xBB\xBB\xBB` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(t===!1)return JSON.parse(JSON.stringify(i));var d={};for(var c in i)i.hasOwnProperty(c)&&(d[c]=i[c].defaultValue);return d}function I(){"use strict";var t=s(!0),i={};for(var d in t)t.hasOwnProperty(d)&&(i[d]=!0);return i}var f={},N={},P={},V=s(!0),Q="vanilla",te={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:s(!0),allOn:I()};f.helper={},f.extensions={},f.setOption=function(t,i){"use strict";return V[t]=i,this},f.getOption=function(t){"use strict";return V[t]},f.getOptions=function(){"use strict";return V},f.resetOptions=function(){"use strict";V=s(!0)},f.setFlavor=function(t){"use strict";if(!te.hasOwnProperty(t))throw Error(t+" flavor was not found");f.resetOptions();var i=te[t];Q=t;for(var d in i)i.hasOwnProperty(d)&&(V[d]=i[d])},f.getFlavor=function(){"use strict";return Q},f.getFlavorOptions=function(t){"use strict";if(te.hasOwnProperty(t))return te[t]},f.getDefaultOptions=function(t){"use strict";return s(t)},f.subParser=function(t,i){"use strict";if(f.helper.isString(t))if(typeof i<"u")N[t]=i;else{if(N.hasOwnProperty(t))return N[t];throw Error("SubParser named "+t+" not registered!")}},f.extension=function(t,i){"use strict";if(!f.helper.isString(t))throw Error("Extension 'name' must be a string");if(t=f.helper.stdExtName(t),f.helper.isUndefined(i)){if(!P.hasOwnProperty(t))throw Error("Extension named "+t+" is not registered!");return P[t]}else{typeof i=="function"&&(i=i()),f.helper.isArray(i)||(i=[i]);var d=Ae(i,t);if(d.valid)P[t]=i;else throw Error(d.error)}},f.getAllExtensions=function(){"use strict";return P},f.removeExtension=function(t){"use strict";delete P[t]},f.resetExtensions=function(){"use strict";P={}};function Ae(t,i){"use strict";var d=i?"Error in "+i+" extension->":"Error in unnamed extension",c={valid:!0,error:""};f.helper.isArray(t)||(t=[t]);for(var m=0;m<t.length;++m){var k=d+" sub-extension "+m+": ",v=t[m];if(typeof v!="object")return c.valid=!1,c.error=k+"must be an object, but "+typeof v+" given",c;if(!f.helper.isString(v.type))return c.valid=!1,c.error=k+'property "type" must be a string, but '+typeof v.type+" given",c;var y=v.type=v.type.toLowerCase();if(y==="language"&&(y=v.type="lang"),y==="html"&&(y=v.type="output"),y!=="lang"&&y!=="output"&&y!=="listener")return c.valid=!1,c.error=k+"type "+y+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',c;if(y==="listener"){if(f.helper.isUndefined(v.listeners))return c.valid=!1,c.error=k+'. Extensions of type "listener" must have a property called "listeners"',c}else if(f.helper.isUndefined(v.filter)&&f.helper.isUndefined(v.regex))return c.valid=!1,c.error=k+y+' extensions must define either a "regex" property or a "filter" method',c;if(v.listeners){if(typeof v.listeners!="object")return c.valid=!1,c.error=k+'"listeners" property must be an object but '+typeof v.listeners+" given",c;for(var w in v.listeners)if(v.listeners.hasOwnProperty(w)&&typeof v.listeners[w]!="function")return c.valid=!1,c.error=k+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+w+" must be a function but "+typeof v.listeners[w]+" given",c}if(v.filter){if(typeof v.filter!="function")return c.valid=!1,c.error=k+'"filter" must be a function, but '+typeof v.filter+" given",c}else if(v.regex){if(f.helper.isString(v.regex)&&(v.regex=new RegExp(v.regex,"g")),!(v.regex instanceof RegExp))return c.valid=!1,c.error=k+'"regex" property must either be a string or a RegExp object, but '+typeof v.regex+" given",c;if(f.helper.isUndefined(v.replace))return c.valid=!1,c.error=k+'"regex" extensions must implement a replace string or function',c}}return c}f.validateExtension=function(t){"use strict";var i=Ae(t,null);return i.valid?!0:(console.warn(i.error),!1)},f.hasOwnProperty("helper")||(f.helper={}),f.helper.isString=function(t){"use strict";return typeof t=="string"||t instanceof String},f.helper.isFunction=function(t){"use strict";var i={};return t&&i.toString.call(t)==="[object Function]"},f.helper.isArray=function(t){"use strict";return Array.isArray(t)},f.helper.isUndefined=function(t){"use strict";return typeof t>"u"},f.helper.forEach=function(t,i){"use strict";if(f.helper.isUndefined(t))throw new Error("obj param is required");if(f.helper.isUndefined(i))throw new Error("callback param is required");if(!f.helper.isFunction(i))throw new Error("callback param must be a function/closure");if(typeof t.forEach=="function")t.forEach(i);else if(f.helper.isArray(t))for(var d=0;d<t.length;d++)i(t[d],d,t);else if(typeof t=="object")for(var c in t)t.hasOwnProperty(c)&&i(t[c],c,t);else throw new Error("obj does not seem to be an array or an iterable object")},f.helper.stdExtName=function(t){"use strict";return t.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function be(t,i){"use strict";var d=i.charCodeAt(0);return"\xA8E"+d+"E"}f.helper.escapeCharactersCallback=be,f.helper.escapeCharacters=function(t,i,d){"use strict";var c="(["+i.replace(/([\[\]\\])/g,"\\$1")+"])";d&&(c="\\\\"+c);var m=new RegExp(c,"g");return t=t.replace(m,be),t},f.helper.unescapeHTMLEntities=function(t){"use strict";return t.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var Ue=function(t,i,d,c){"use strict";var m=c||"",k=m.indexOf("g")>-1,v=new RegExp(i+"|"+d,"g"+m.replace(/g/g,"")),y=new RegExp(i,m.replace(/g/g,"")),w=[],g,p,b,h,R;do for(g=0;b=v.exec(t);)if(y.test(b[0]))g++||(p=v.lastIndex,h=p-b[0].length);else if(g&&!--g){R=b.index+b[0].length;var B={left:{start:h,end:p},match:{start:p,end:b.index},right:{start:b.index,end:R},wholeMatch:{start:h,end:R}};if(w.push(B),!k)return w}while(g&&(v.lastIndex=p));return w};f.helper.matchRecursiveRegExp=function(t,i,d,c){"use strict";for(var m=Ue(t,i,d,c),k=[],v=0;v<m.length;++v)k.push([t.slice(m[v].wholeMatch.start,m[v].wholeMatch.end),t.slice(m[v].match.start,m[v].match.end),t.slice(m[v].left.start,m[v].left.end),t.slice(m[v].right.start,m[v].right.end)]);return k},f.helper.replaceRecursiveRegExp=function(t,i,d,c,m){"use strict";if(!f.helper.isFunction(i)){var k=i;i=function(){return k}}var v=Ue(t,d,c,m),y=t,w=v.length;if(w>0){var g=[];v[0].wholeMatch.start!==0&&g.push(t.slice(0,v[0].wholeMatch.start));for(var p=0;p<w;++p)g.push(i(t.slice(v[p].wholeMatch.start,v[p].wholeMatch.end),t.slice(v[p].match.start,v[p].match.end),t.slice(v[p].left.start,v[p].left.end),t.slice(v[p].right.start,v[p].right.end))),p<w-1&&g.push(t.slice(v[p].wholeMatch.end,v[p+1].wholeMatch.start));v[w-1].wholeMatch.end<t.length&&g.push(t.slice(v[w-1].wholeMatch.end)),y=g.join("")}return y},f.helper.regexIndexOf=function(t,i,d){"use strict";if(!f.helper.isString(t))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(i instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var c=t.substring(d||0).search(i);return c>=0?c+(d||0):c},f.helper.splitAtIndex=function(t,i){"use strict";if(!f.helper.isString(t))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[t.substring(0,i),t.substring(i)]},f.helper.encodeEmailAddress=function(t){"use strict";var i=[function(d){return"&#"+d.charCodeAt(0)+";"},function(d){return"&#x"+d.charCodeAt(0).toString(16)+";"},function(d){return d}];return t=t.replace(/./g,function(d){if(d==="@")d=i[Math.floor(Math.random()*2)](d);else{var c=Math.random();d=c>.9?i[2](d):c>.45?i[1](d):i[0](d)}return d}),t},f.helper.padEnd=function(i,d,c){"use strict";return d=d>>0,c=String(c||" "),i.length>d?String(i):(d=d-i.length,d>c.length&&(c+=c.repeat(d/c.length)),String(i)+c.slice(0,d))},typeof console>"u"&&(console={warn:function(t){"use strict";alert(t)},log:function(t){"use strict";alert(t)},error:function(t){"use strict";throw t}}),f.helper.regexes={asteriskDashAndColon:/([*_:~])/g},f.helper.emojis={"+1":"\u{1F44D}","-1":"\u{1F44E}",100:"\u{1F4AF}",1234:"\u{1F522}","1st_place_medal":"\u{1F947}","2nd_place_medal":"\u{1F948}","3rd_place_medal":"\u{1F949}","8ball":"\u{1F3B1}",a:"\u{1F170}\uFE0F",ab:"\u{1F18E}",abc:"\u{1F524}",abcd:"\u{1F521}",accept:"\u{1F251}",aerial_tramway:"\u{1F6A1}",airplane:"\u2708\uFE0F",alarm_clock:"\u23F0",alembic:"\u2697\uFE0F",alien:"\u{1F47D}",ambulance:"\u{1F691}",amphora:"\u{1F3FA}",anchor:"\u2693\uFE0F",angel:"\u{1F47C}",anger:"\u{1F4A2}",angry:"\u{1F620}",anguished:"\u{1F627}",ant:"\u{1F41C}",apple:"\u{1F34E}",aquarius:"\u2652\uFE0F",aries:"\u2648\uFE0F",arrow_backward:"\u25C0\uFE0F",arrow_double_down:"\u23EC",arrow_double_up:"\u23EB",arrow_down:"\u2B07\uFE0F",arrow_down_small:"\u{1F53D}",arrow_forward:"\u25B6\uFE0F",arrow_heading_down:"\u2935\uFE0F",arrow_heading_up:"\u2934\uFE0F",arrow_left:"\u2B05\uFE0F",arrow_lower_left:"\u2199\uFE0F",arrow_lower_right:"\u2198\uFE0F",arrow_right:"\u27A1\uFE0F",arrow_right_hook:"\u21AA\uFE0F",arrow_up:"\u2B06\uFE0F",arrow_up_down:"\u2195\uFE0F",arrow_up_small:"\u{1F53C}",arrow_upper_left:"\u2196\uFE0F",arrow_upper_right:"\u2197\uFE0F",arrows_clockwise:"\u{1F503}",arrows_counterclockwise:"\u{1F504}",art:"\u{1F3A8}",articulated_lorry:"\u{1F69B}",artificial_satellite:"\u{1F6F0}",astonished:"\u{1F632}",athletic_shoe:"\u{1F45F}",atm:"\u{1F3E7}",atom_symbol:"\u269B\uFE0F",avocado:"\u{1F951}",b:"\u{1F171}\uFE0F",baby:"\u{1F476}",baby_bottle:"\u{1F37C}",baby_chick:"\u{1F424}",baby_symbol:"\u{1F6BC}",back:"\u{1F519}",bacon:"\u{1F953}",badminton:"\u{1F3F8}",baggage_claim:"\u{1F6C4}",baguette_bread:"\u{1F956}",balance_scale:"\u2696\uFE0F",balloon:"\u{1F388}",ballot_box:"\u{1F5F3}",ballot_box_with_check:"\u2611\uFE0F",bamboo:"\u{1F38D}",banana:"\u{1F34C}",bangbang:"\u203C\uFE0F",bank:"\u{1F3E6}",bar_chart:"\u{1F4CA}",barber:"\u{1F488}",baseball:"\u26BE\uFE0F",basketball:"\u{1F3C0}",basketball_man:"\u26F9\uFE0F",basketball_woman:"\u26F9\uFE0F&zwj;\u2640\uFE0F",bat:"\u{1F987}",bath:"\u{1F6C0}",bathtub:"\u{1F6C1}",battery:"\u{1F50B}",beach_umbrella:"\u{1F3D6}",bear:"\u{1F43B}",bed:"\u{1F6CF}",bee:"\u{1F41D}",beer:"\u{1F37A}",beers:"\u{1F37B}",beetle:"\u{1F41E}",beginner:"\u{1F530}",bell:"\u{1F514}",bellhop_bell:"\u{1F6CE}",bento:"\u{1F371}",biking_man:"\u{1F6B4}",bike:"\u{1F6B2}",biking_woman:"\u{1F6B4}&zwj;\u2640\uFE0F",bikini:"\u{1F459}",biohazard:"\u2623\uFE0F",bird:"\u{1F426}",birthday:"\u{1F382}",black_circle:"\u26AB\uFE0F",black_flag:"\u{1F3F4}",black_heart:"\u{1F5A4}",black_joker:"\u{1F0CF}",black_large_square:"\u2B1B\uFE0F",black_medium_small_square:"\u25FE\uFE0F",black_medium_square:"\u25FC\uFE0F",black_nib:"\u2712\uFE0F",black_small_square:"\u25AA\uFE0F",black_square_button:"\u{1F532}",blonde_man:"\u{1F471}",blonde_woman:"\u{1F471}&zwj;\u2640\uFE0F",blossom:"\u{1F33C}",blowfish:"\u{1F421}",blue_book:"\u{1F4D8}",blue_car:"\u{1F699}",blue_heart:"\u{1F499}",blush:"\u{1F60A}",boar:"\u{1F417}",boat:"\u26F5\uFE0F",bomb:"\u{1F4A3}",book:"\u{1F4D6}",bookmark:"\u{1F516}",bookmark_tabs:"\u{1F4D1}",books:"\u{1F4DA}",boom:"\u{1F4A5}",boot:"\u{1F462}",bouquet:"\u{1F490}",bowing_man:"\u{1F647}",bow_and_arrow:"\u{1F3F9}",bowing_woman:"\u{1F647}&zwj;\u2640\uFE0F",bowling:"\u{1F3B3}",boxing_glove:"\u{1F94A}",boy:"\u{1F466}",bread:"\u{1F35E}",bride_with_veil:"\u{1F470}",bridge_at_night:"\u{1F309}",briefcase:"\u{1F4BC}",broken_heart:"\u{1F494}",bug:"\u{1F41B}",building_construction:"\u{1F3D7}",bulb:"\u{1F4A1}",bullettrain_front:"\u{1F685}",bullettrain_side:"\u{1F684}",burrito:"\u{1F32F}",bus:"\u{1F68C}",business_suit_levitating:"\u{1F574}",busstop:"\u{1F68F}",bust_in_silhouette:"\u{1F464}",busts_in_silhouette:"\u{1F465}",butterfly:"\u{1F98B}",cactus:"\u{1F335}",cake:"\u{1F370}",calendar:"\u{1F4C6}",call_me_hand:"\u{1F919}",calling:"\u{1F4F2}",camel:"\u{1F42B}",camera:"\u{1F4F7}",camera_flash:"\u{1F4F8}",camping:"\u{1F3D5}",cancer:"\u264B\uFE0F",candle:"\u{1F56F}",candy:"\u{1F36C}",canoe:"\u{1F6F6}",capital_abcd:"\u{1F520}",capricorn:"\u2651\uFE0F",car:"\u{1F697}",card_file_box:"\u{1F5C3}",card_index:"\u{1F4C7}",card_index_dividers:"\u{1F5C2}",carousel_horse:"\u{1F3A0}",carrot:"\u{1F955}",cat:"\u{1F431}",cat2:"\u{1F408}",cd:"\u{1F4BF}",chains:"\u26D3",champagne:"\u{1F37E}",chart:"\u{1F4B9}",chart_with_downwards_trend:"\u{1F4C9}",chart_with_upwards_trend:"\u{1F4C8}",checkered_flag:"\u{1F3C1}",cheese:"\u{1F9C0}",cherries:"\u{1F352}",cherry_blossom:"\u{1F338}",chestnut:"\u{1F330}",chicken:"\u{1F414}",children_crossing:"\u{1F6B8}",chipmunk:"\u{1F43F}",chocolate_bar:"\u{1F36B}",christmas_tree:"\u{1F384}",church:"\u26EA\uFE0F",cinema:"\u{1F3A6}",circus_tent:"\u{1F3AA}",city_sunrise:"\u{1F307}",city_sunset:"\u{1F306}",cityscape:"\u{1F3D9}",cl:"\u{1F191}",clamp:"\u{1F5DC}",clap:"\u{1F44F}",clapper:"\u{1F3AC}",classical_building:"\u{1F3DB}",clinking_glasses:"\u{1F942}",clipboard:"\u{1F4CB}",clock1:"\u{1F550}",clock10:"\u{1F559}",clock1030:"\u{1F565}",clock11:"\u{1F55A}",clock1130:"\u{1F566}",clock12:"\u{1F55B}",clock1230:"\u{1F567}",clock130:"\u{1F55C}",clock2:"\u{1F551}",clock230:"\u{1F55D}",clock3:"\u{1F552}",clock330:"\u{1F55E}",clock4:"\u{1F553}",clock430:"\u{1F55F}",clock5:"\u{1F554}",clock530:"\u{1F560}",clock6:"\u{1F555}",clock630:"\u{1F561}",clock7:"\u{1F556}",clock730:"\u{1F562}",clock8:"\u{1F557}",clock830:"\u{1F563}",clock9:"\u{1F558}",clock930:"\u{1F564}",closed_book:"\u{1F4D5}",closed_lock_with_key:"\u{1F510}",closed_umbrella:"\u{1F302}",cloud:"\u2601\uFE0F",cloud_with_lightning:"\u{1F329}",cloud_with_lightning_and_rain:"\u26C8",cloud_with_rain:"\u{1F327}",cloud_with_snow:"\u{1F328}",clown_face:"\u{1F921}",clubs:"\u2663\uFE0F",cocktail:"\u{1F378}",coffee:"\u2615\uFE0F",coffin:"\u26B0\uFE0F",cold_sweat:"\u{1F630}",comet:"\u2604\uFE0F",computer:"\u{1F4BB}",computer_mouse:"\u{1F5B1}",confetti_ball:"\u{1F38A}",confounded:"\u{1F616}",confused:"\u{1F615}",congratulations:"\u3297\uFE0F",construction:"\u{1F6A7}",construction_worker_man:"\u{1F477}",construction_worker_woman:"\u{1F477}&zwj;\u2640\uFE0F",control_knobs:"\u{1F39B}",convenience_store:"\u{1F3EA}",cookie:"\u{1F36A}",cool:"\u{1F192}",policeman:"\u{1F46E}",copyright:"\xA9\uFE0F",corn:"\u{1F33D}",couch_and_lamp:"\u{1F6CB}",couple:"\u{1F46B}",couple_with_heart_woman_man:"\u{1F491}",couple_with_heart_man_man:"\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F468}",couple_with_heart_woman_woman:"\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F469}",couplekiss_man_man:"\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F468}",couplekiss_man_woman:"\u{1F48F}",couplekiss_woman_woman:"\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F469}",cow:"\u{1F42E}",cow2:"\u{1F404}",cowboy_hat_face:"\u{1F920}",crab:"\u{1F980}",crayon:"\u{1F58D}",credit_card:"\u{1F4B3}",crescent_moon:"\u{1F319}",cricket:"\u{1F3CF}",crocodile:"\u{1F40A}",croissant:"\u{1F950}",crossed_fingers:"\u{1F91E}",crossed_flags:"\u{1F38C}",crossed_swords:"\u2694\uFE0F",crown:"\u{1F451}",cry:"\u{1F622}",crying_cat_face:"\u{1F63F}",crystal_ball:"\u{1F52E}",cucumber:"\u{1F952}",cupid:"\u{1F498}",curly_loop:"\u27B0",currency_exchange:"\u{1F4B1}",curry:"\u{1F35B}",custard:"\u{1F36E}",customs:"\u{1F6C3}",cyclone:"\u{1F300}",dagger:"\u{1F5E1}",dancer:"\u{1F483}",dancing_women:"\u{1F46F}",dancing_men:"\u{1F46F}&zwj;\u2642\uFE0F",dango:"\u{1F361}",dark_sunglasses:"\u{1F576}",dart:"\u{1F3AF}",dash:"\u{1F4A8}",date:"\u{1F4C5}",deciduous_tree:"\u{1F333}",deer:"\u{1F98C}",department_store:"\u{1F3EC}",derelict_house:"\u{1F3DA}",desert:"\u{1F3DC}",desert_island:"\u{1F3DD}",desktop_computer:"\u{1F5A5}",male_detective:"\u{1F575}\uFE0F",diamond_shape_with_a_dot_inside:"\u{1F4A0}",diamonds:"\u2666\uFE0F",disappointed:"\u{1F61E}",disappointed_relieved:"\u{1F625}",dizzy:"\u{1F4AB}",dizzy_face:"\u{1F635}",do_not_litter:"\u{1F6AF}",dog:"\u{1F436}",dog2:"\u{1F415}",dollar:"\u{1F4B5}",dolls:"\u{1F38E}",dolphin:"\u{1F42C}",door:"\u{1F6AA}",doughnut:"\u{1F369}",dove:"\u{1F54A}",dragon:"\u{1F409}",dragon_face:"\u{1F432}",dress:"\u{1F457}",dromedary_camel:"\u{1F42A}",drooling_face:"\u{1F924}",droplet:"\u{1F4A7}",drum:"\u{1F941}",duck:"\u{1F986}",dvd:"\u{1F4C0}","e-mail":"\u{1F4E7}",eagle:"\u{1F985}",ear:"\u{1F442}",ear_of_rice:"\u{1F33E}",earth_africa:"\u{1F30D}",earth_americas:"\u{1F30E}",earth_asia:"\u{1F30F}",egg:"\u{1F95A}",eggplant:"\u{1F346}",eight_pointed_black_star:"\u2734\uFE0F",eight_spoked_asterisk:"\u2733\uFE0F",electric_plug:"\u{1F50C}",elephant:"\u{1F418}",email:"\u2709\uFE0F",end:"\u{1F51A}",envelope_with_arrow:"\u{1F4E9}",euro:"\u{1F4B6}",european_castle:"\u{1F3F0}",european_post_office:"\u{1F3E4}",evergreen_tree:"\u{1F332}",exclamation:"\u2757\uFE0F",expressionless:"\u{1F611}",eye:"\u{1F441}",eye_speech_bubble:"\u{1F441}&zwj;\u{1F5E8}",eyeglasses:"\u{1F453}",eyes:"\u{1F440}",face_with_head_bandage:"\u{1F915}",face_with_thermometer:"\u{1F912}",fist_oncoming:"\u{1F44A}",factory:"\u{1F3ED}",fallen_leaf:"\u{1F342}",family_man_woman_boy:"\u{1F46A}",family_man_boy:"\u{1F468}&zwj;\u{1F466}",family_man_boy_boy:"\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",family_man_girl:"\u{1F468}&zwj;\u{1F467}",family_man_girl_boy:"\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",family_man_girl_girl:"\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",family_man_man_boy:"\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}",family_man_man_boy_boy:"\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",family_man_man_girl:"\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}",family_man_man_girl_boy:"\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",family_man_man_girl_girl:"\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",family_man_woman_boy_boy:"\u{1F468}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",family_man_woman_girl:"\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}",family_man_woman_girl_boy:"\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",family_man_woman_girl_girl:"\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",family_woman_boy:"\u{1F469}&zwj;\u{1F466}",family_woman_boy_boy:"\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",family_woman_girl:"\u{1F469}&zwj;\u{1F467}",family_woman_girl_boy:"\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",family_woman_girl_girl:"\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",family_woman_woman_boy:"\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}",family_woman_woman_boy_boy:"\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",family_woman_woman_girl:"\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}",family_woman_woman_girl_boy:"\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",family_woman_woman_girl_girl:"\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",fast_forward:"\u23E9",fax:"\u{1F4E0}",fearful:"\u{1F628}",feet:"\u{1F43E}",female_detective:"\u{1F575}\uFE0F&zwj;\u2640\uFE0F",ferris_wheel:"\u{1F3A1}",ferry:"\u26F4",field_hockey:"\u{1F3D1}",file_cabinet:"\u{1F5C4}",file_folder:"\u{1F4C1}",film_projector:"\u{1F4FD}",film_strip:"\u{1F39E}",fire:"\u{1F525}",fire_engine:"\u{1F692}",fireworks:"\u{1F386}",first_quarter_moon:"\u{1F313}",first_quarter_moon_with_face:"\u{1F31B}",fish:"\u{1F41F}",fish_cake:"\u{1F365}",fishing_pole_and_fish:"\u{1F3A3}",fist_raised:"\u270A",fist_left:"\u{1F91B}",fist_right:"\u{1F91C}",flags:"\u{1F38F}",flashlight:"\u{1F526}",fleur_de_lis:"\u269C\uFE0F",flight_arrival:"\u{1F6EC}",flight_departure:"\u{1F6EB}",floppy_disk:"\u{1F4BE}",flower_playing_cards:"\u{1F3B4}",flushed:"\u{1F633}",fog:"\u{1F32B}",foggy:"\u{1F301}",football:"\u{1F3C8}",footprints:"\u{1F463}",fork_and_knife:"\u{1F374}",fountain:"\u26F2\uFE0F",fountain_pen:"\u{1F58B}",four_leaf_clover:"\u{1F340}",fox_face:"\u{1F98A}",framed_picture:"\u{1F5BC}",free:"\u{1F193}",fried_egg:"\u{1F373}",fried_shrimp:"\u{1F364}",fries:"\u{1F35F}",frog:"\u{1F438}",frowning:"\u{1F626}",frowning_face:"\u2639\uFE0F",frowning_man:"\u{1F64D}&zwj;\u2642\uFE0F",frowning_woman:"\u{1F64D}",middle_finger:"\u{1F595}",fuelpump:"\u26FD\uFE0F",full_moon:"\u{1F315}",full_moon_with_face:"\u{1F31D}",funeral_urn:"\u26B1\uFE0F",game_die:"\u{1F3B2}",gear:"\u2699\uFE0F",gem:"\u{1F48E}",gemini:"\u264A\uFE0F",ghost:"\u{1F47B}",gift:"\u{1F381}",gift_heart:"\u{1F49D}",girl:"\u{1F467}",globe_with_meridians:"\u{1F310}",goal_net:"\u{1F945}",goat:"\u{1F410}",golf:"\u26F3\uFE0F",golfing_man:"\u{1F3CC}\uFE0F",golfing_woman:"\u{1F3CC}\uFE0F&zwj;\u2640\uFE0F",gorilla:"\u{1F98D}",grapes:"\u{1F347}",green_apple:"\u{1F34F}",green_book:"\u{1F4D7}",green_heart:"\u{1F49A}",green_salad:"\u{1F957}",grey_exclamation:"\u2755",grey_question:"\u2754",grimacing:"\u{1F62C}",grin:"\u{1F601}",grinning:"\u{1F600}",guardsman:"\u{1F482}",guardswoman:"\u{1F482}&zwj;\u2640\uFE0F",guitar:"\u{1F3B8}",gun:"\u{1F52B}",haircut_woman:"\u{1F487}",haircut_man:"\u{1F487}&zwj;\u2642\uFE0F",hamburger:"\u{1F354}",hammer:"\u{1F528}",hammer_and_pick:"\u2692",hammer_and_wrench:"\u{1F6E0}",hamster:"\u{1F439}",hand:"\u270B",handbag:"\u{1F45C}",handshake:"\u{1F91D}",hankey:"\u{1F4A9}",hatched_chick:"\u{1F425}",hatching_chick:"\u{1F423}",headphones:"\u{1F3A7}",hear_no_evil:"\u{1F649}",heart:"\u2764\uFE0F",heart_decoration:"\u{1F49F}",heart_eyes:"\u{1F60D}",heart_eyes_cat:"\u{1F63B}",heartbeat:"\u{1F493}",heartpulse:"\u{1F497}",hearts:"\u2665\uFE0F",heavy_check_mark:"\u2714\uFE0F",heavy_division_sign:"\u2797",heavy_dollar_sign:"\u{1F4B2}",heavy_heart_exclamation:"\u2763\uFE0F",heavy_minus_sign:"\u2796",heavy_multiplication_x:"\u2716\uFE0F",heavy_plus_sign:"\u2795",helicopter:"\u{1F681}",herb:"\u{1F33F}",hibiscus:"\u{1F33A}",high_brightness:"\u{1F506}",high_heel:"\u{1F460}",hocho:"\u{1F52A}",hole:"\u{1F573}",honey_pot:"\u{1F36F}",horse:"\u{1F434}",horse_racing:"\u{1F3C7}",hospital:"\u{1F3E5}",hot_pepper:"\u{1F336}",hotdog:"\u{1F32D}",hotel:"\u{1F3E8}",hotsprings:"\u2668\uFE0F",hourglass:"\u231B\uFE0F",hourglass_flowing_sand:"\u23F3",house:"\u{1F3E0}",house_with_garden:"\u{1F3E1}",houses:"\u{1F3D8}",hugs:"\u{1F917}",hushed:"\u{1F62F}",ice_cream:"\u{1F368}",ice_hockey:"\u{1F3D2}",ice_skate:"\u26F8",icecream:"\u{1F366}",id:"\u{1F194}",ideograph_advantage:"\u{1F250}",imp:"\u{1F47F}",inbox_tray:"\u{1F4E5}",incoming_envelope:"\u{1F4E8}",tipping_hand_woman:"\u{1F481}",information_source:"\u2139\uFE0F",innocent:"\u{1F607}",interrobang:"\u2049\uFE0F",iphone:"\u{1F4F1}",izakaya_lantern:"\u{1F3EE}",jack_o_lantern:"\u{1F383}",japan:"\u{1F5FE}",japanese_castle:"\u{1F3EF}",japanese_goblin:"\u{1F47A}",japanese_ogre:"\u{1F479}",jeans:"\u{1F456}",joy:"\u{1F602}",joy_cat:"\u{1F639}",joystick:"\u{1F579}",kaaba:"\u{1F54B}",key:"\u{1F511}",keyboard:"\u2328\uFE0F",keycap_ten:"\u{1F51F}",kick_scooter:"\u{1F6F4}",kimono:"\u{1F458}",kiss:"\u{1F48B}",kissing:"\u{1F617}",kissing_cat:"\u{1F63D}",kissing_closed_eyes:"\u{1F61A}",kissing_heart:"\u{1F618}",kissing_smiling_eyes:"\u{1F619}",kiwi_fruit:"\u{1F95D}",koala:"\u{1F428}",koko:"\u{1F201}",label:"\u{1F3F7}",large_blue_circle:"\u{1F535}",large_blue_diamond:"\u{1F537}",large_orange_diamond:"\u{1F536}",last_quarter_moon:"\u{1F317}",last_quarter_moon_with_face:"\u{1F31C}",latin_cross:"\u271D\uFE0F",laughing:"\u{1F606}",leaves:"\u{1F343}",ledger:"\u{1F4D2}",left_luggage:"\u{1F6C5}",left_right_arrow:"\u2194\uFE0F",leftwards_arrow_with_hook:"\u21A9\uFE0F",lemon:"\u{1F34B}",leo:"\u264C\uFE0F",leopard:"\u{1F406}",level_slider:"\u{1F39A}",libra:"\u264E\uFE0F",light_rail:"\u{1F688}",link:"\u{1F517}",lion:"\u{1F981}",lips:"\u{1F444}",lipstick:"\u{1F484}",lizard:"\u{1F98E}",lock:"\u{1F512}",lock_with_ink_pen:"\u{1F50F}",lollipop:"\u{1F36D}",loop:"\u27BF",loud_sound:"\u{1F50A}",loudspeaker:"\u{1F4E2}",love_hotel:"\u{1F3E9}",love_letter:"\u{1F48C}",low_brightness:"\u{1F505}",lying_face:"\u{1F925}",m:"\u24C2\uFE0F",mag:"\u{1F50D}",mag_right:"\u{1F50E}",mahjong:"\u{1F004}\uFE0F",mailbox:"\u{1F4EB}",mailbox_closed:"\u{1F4EA}",mailbox_with_mail:"\u{1F4EC}",mailbox_with_no_mail:"\u{1F4ED}",man:"\u{1F468}",man_artist:"\u{1F468}&zwj;\u{1F3A8}",man_astronaut:"\u{1F468}&zwj;\u{1F680}",man_cartwheeling:"\u{1F938}&zwj;\u2642\uFE0F",man_cook:"\u{1F468}&zwj;\u{1F373}",man_dancing:"\u{1F57A}",man_facepalming:"\u{1F926}&zwj;\u2642\uFE0F",man_factory_worker:"\u{1F468}&zwj;\u{1F3ED}",man_farmer:"\u{1F468}&zwj;\u{1F33E}",man_firefighter:"\u{1F468}&zwj;\u{1F692}",man_health_worker:"\u{1F468}&zwj;\u2695\uFE0F",man_in_tuxedo:"\u{1F935}",man_judge:"\u{1F468}&zwj;\u2696\uFE0F",man_juggling:"\u{1F939}&zwj;\u2642\uFE0F",man_mechanic:"\u{1F468}&zwj;\u{1F527}",man_office_worker:"\u{1F468}&zwj;\u{1F4BC}",man_pilot:"\u{1F468}&zwj;\u2708\uFE0F",man_playing_handball:"\u{1F93E}&zwj;\u2642\uFE0F",man_playing_water_polo:"\u{1F93D}&zwj;\u2642\uFE0F",man_scientist:"\u{1F468}&zwj;\u{1F52C}",man_shrugging:"\u{1F937}&zwj;\u2642\uFE0F",man_singer:"\u{1F468}&zwj;\u{1F3A4}",man_student:"\u{1F468}&zwj;\u{1F393}",man_teacher:"\u{1F468}&zwj;\u{1F3EB}",man_technologist:"\u{1F468}&zwj;\u{1F4BB}",man_with_gua_pi_mao:"\u{1F472}",man_with_turban:"\u{1F473}",tangerine:"\u{1F34A}",mans_shoe:"\u{1F45E}",mantelpiece_clock:"\u{1F570}",maple_leaf:"\u{1F341}",martial_arts_uniform:"\u{1F94B}",mask:"\u{1F637}",massage_woman:"\u{1F486}",massage_man:"\u{1F486}&zwj;\u2642\uFE0F",meat_on_bone:"\u{1F356}",medal_military:"\u{1F396}",medal_sports:"\u{1F3C5}",mega:"\u{1F4E3}",melon:"\u{1F348}",memo:"\u{1F4DD}",men_wrestling:"\u{1F93C}&zwj;\u2642\uFE0F",menorah:"\u{1F54E}",mens:"\u{1F6B9}",metal:"\u{1F918}",metro:"\u{1F687}",microphone:"\u{1F3A4}",microscope:"\u{1F52C}",milk_glass:"\u{1F95B}",milky_way:"\u{1F30C}",minibus:"\u{1F690}",minidisc:"\u{1F4BD}",mobile_phone_off:"\u{1F4F4}",money_mouth_face:"\u{1F911}",money_with_wings:"\u{1F4B8}",moneybag:"\u{1F4B0}",monkey:"\u{1F412}",monkey_face:"\u{1F435}",monorail:"\u{1F69D}",moon:"\u{1F314}",mortar_board:"\u{1F393}",mosque:"\u{1F54C}",motor_boat:"\u{1F6E5}",motor_scooter:"\u{1F6F5}",motorcycle:"\u{1F3CD}",motorway:"\u{1F6E3}",mount_fuji:"\u{1F5FB}",mountain:"\u26F0",mountain_biking_man:"\u{1F6B5}",mountain_biking_woman:"\u{1F6B5}&zwj;\u2640\uFE0F",mountain_cableway:"\u{1F6A0}",mountain_railway:"\u{1F69E}",mountain_snow:"\u{1F3D4}",mouse:"\u{1F42D}",mouse2:"\u{1F401}",movie_camera:"\u{1F3A5}",moyai:"\u{1F5FF}",mrs_claus:"\u{1F936}",muscle:"\u{1F4AA}",mushroom:"\u{1F344}",musical_keyboard:"\u{1F3B9}",musical_note:"\u{1F3B5}",musical_score:"\u{1F3BC}",mute:"\u{1F507}",nail_care:"\u{1F485}",name_badge:"\u{1F4DB}",national_park:"\u{1F3DE}",nauseated_face:"\u{1F922}",necktie:"\u{1F454}",negative_squared_cross_mark:"\u274E",nerd_face:"\u{1F913}",neutral_face:"\u{1F610}",new:"\u{1F195}",new_moon:"\u{1F311}",new_moon_with_face:"\u{1F31A}",newspaper:"\u{1F4F0}",newspaper_roll:"\u{1F5DE}",next_track_button:"\u23ED",ng:"\u{1F196}",no_good_man:"\u{1F645}&zwj;\u2642\uFE0F",no_good_woman:"\u{1F645}",night_with_stars:"\u{1F303}",no_bell:"\u{1F515}",no_bicycles:"\u{1F6B3}",no_entry:"\u26D4\uFE0F",no_entry_sign:"\u{1F6AB}",no_mobile_phones:"\u{1F4F5}",no_mouth:"\u{1F636}",no_pedestrians:"\u{1F6B7}",no_smoking:"\u{1F6AD}","non-potable_water":"\u{1F6B1}",nose:"\u{1F443}",notebook:"\u{1F4D3}",notebook_with_decorative_cover:"\u{1F4D4}",notes:"\u{1F3B6}",nut_and_bolt:"\u{1F529}",o:"\u2B55\uFE0F",o2:"\u{1F17E}\uFE0F",ocean:"\u{1F30A}",octopus:"\u{1F419}",oden:"\u{1F362}",office:"\u{1F3E2}",oil_drum:"\u{1F6E2}",ok:"\u{1F197}",ok_hand:"\u{1F44C}",ok_man:"\u{1F646}&zwj;\u2642\uFE0F",ok_woman:"\u{1F646}",old_key:"\u{1F5DD}",older_man:"\u{1F474}",older_woman:"\u{1F475}",om:"\u{1F549}",on:"\u{1F51B}",oncoming_automobile:"\u{1F698}",oncoming_bus:"\u{1F68D}",oncoming_police_car:"\u{1F694}",oncoming_taxi:"\u{1F696}",open_file_folder:"\u{1F4C2}",open_hands:"\u{1F450}",open_mouth:"\u{1F62E}",open_umbrella:"\u2602\uFE0F",ophiuchus:"\u26CE",orange_book:"\u{1F4D9}",orthodox_cross:"\u2626\uFE0F",outbox_tray:"\u{1F4E4}",owl:"\u{1F989}",ox:"\u{1F402}",package:"\u{1F4E6}",page_facing_up:"\u{1F4C4}",page_with_curl:"\u{1F4C3}",pager:"\u{1F4DF}",paintbrush:"\u{1F58C}",palm_tree:"\u{1F334}",pancakes:"\u{1F95E}",panda_face:"\u{1F43C}",paperclip:"\u{1F4CE}",paperclips:"\u{1F587}",parasol_on_ground:"\u26F1",parking:"\u{1F17F}\uFE0F",part_alternation_mark:"\u303D\uFE0F",partly_sunny:"\u26C5\uFE0F",passenger_ship:"\u{1F6F3}",passport_control:"\u{1F6C2}",pause_button:"\u23F8",peace_symbol:"\u262E\uFE0F",peach:"\u{1F351}",peanuts:"\u{1F95C}",pear:"\u{1F350}",pen:"\u{1F58A}",pencil2:"\u270F\uFE0F",penguin:"\u{1F427}",pensive:"\u{1F614}",performing_arts:"\u{1F3AD}",persevere:"\u{1F623}",person_fencing:"\u{1F93A}",pouting_woman:"\u{1F64E}",phone:"\u260E\uFE0F",pick:"\u26CF",pig:"\u{1F437}",pig2:"\u{1F416}",pig_nose:"\u{1F43D}",pill:"\u{1F48A}",pineapple:"\u{1F34D}",ping_pong:"\u{1F3D3}",pisces:"\u2653\uFE0F",pizza:"\u{1F355}",place_of_worship:"\u{1F6D0}",plate_with_cutlery:"\u{1F37D}",play_or_pause_button:"\u23EF",point_down:"\u{1F447}",point_left:"\u{1F448}",point_right:"\u{1F449}",point_up:"\u261D\uFE0F",point_up_2:"\u{1F446}",police_car:"\u{1F693}",policewoman:"\u{1F46E}&zwj;\u2640\uFE0F",poodle:"\u{1F429}",popcorn:"\u{1F37F}",post_office:"\u{1F3E3}",postal_horn:"\u{1F4EF}",postbox:"\u{1F4EE}",potable_water:"\u{1F6B0}",potato:"\u{1F954}",pouch:"\u{1F45D}",poultry_leg:"\u{1F357}",pound:"\u{1F4B7}",rage:"\u{1F621}",pouting_cat:"\u{1F63E}",pouting_man:"\u{1F64E}&zwj;\u2642\uFE0F",pray:"\u{1F64F}",prayer_beads:"\u{1F4FF}",pregnant_woman:"\u{1F930}",previous_track_button:"\u23EE",prince:"\u{1F934}",princess:"\u{1F478}",printer:"\u{1F5A8}",purple_heart:"\u{1F49C}",purse:"\u{1F45B}",pushpin:"\u{1F4CC}",put_litter_in_its_place:"\u{1F6AE}",question:"\u2753",rabbit:"\u{1F430}",rabbit2:"\u{1F407}",racehorse:"\u{1F40E}",racing_car:"\u{1F3CE}",radio:"\u{1F4FB}",radio_button:"\u{1F518}",radioactive:"\u2622\uFE0F",railway_car:"\u{1F683}",railway_track:"\u{1F6E4}",rainbow:"\u{1F308}",rainbow_flag:"\u{1F3F3}\uFE0F&zwj;\u{1F308}",raised_back_of_hand:"\u{1F91A}",raised_hand_with_fingers_splayed:"\u{1F590}",raised_hands:"\u{1F64C}",raising_hand_woman:"\u{1F64B}",raising_hand_man:"\u{1F64B}&zwj;\u2642\uFE0F",ram:"\u{1F40F}",ramen:"\u{1F35C}",rat:"\u{1F400}",record_button:"\u23FA",recycle:"\u267B\uFE0F",red_circle:"\u{1F534}",registered:"\xAE\uFE0F",relaxed:"\u263A\uFE0F",relieved:"\u{1F60C}",reminder_ribbon:"\u{1F397}",repeat:"\u{1F501}",repeat_one:"\u{1F502}",rescue_worker_helmet:"\u26D1",restroom:"\u{1F6BB}",revolving_hearts:"\u{1F49E}",rewind:"\u23EA",rhinoceros:"\u{1F98F}",ribbon:"\u{1F380}",rice:"\u{1F35A}",rice_ball:"\u{1F359}",rice_cracker:"\u{1F358}",rice_scene:"\u{1F391}",right_anger_bubble:"\u{1F5EF}",ring:"\u{1F48D}",robot:"\u{1F916}",rocket:"\u{1F680}",rofl:"\u{1F923}",roll_eyes:"\u{1F644}",roller_coaster:"\u{1F3A2}",rooster:"\u{1F413}",rose:"\u{1F339}",rosette:"\u{1F3F5}",rotating_light:"\u{1F6A8}",round_pushpin:"\u{1F4CD}",rowing_man:"\u{1F6A3}",rowing_woman:"\u{1F6A3}&zwj;\u2640\uFE0F",rugby_football:"\u{1F3C9}",running_man:"\u{1F3C3}",running_shirt_with_sash:"\u{1F3BD}",running_woman:"\u{1F3C3}&zwj;\u2640\uFE0F",sa:"\u{1F202}\uFE0F",sagittarius:"\u2650\uFE0F",sake:"\u{1F376}",sandal:"\u{1F461}",santa:"\u{1F385}",satellite:"\u{1F4E1}",saxophone:"\u{1F3B7}",school:"\u{1F3EB}",school_satchel:"\u{1F392}",scissors:"\u2702\uFE0F",scorpion:"\u{1F982}",scorpius:"\u264F\uFE0F",scream:"\u{1F631}",scream_cat:"\u{1F640}",scroll:"\u{1F4DC}",seat:"\u{1F4BA}",secret:"\u3299\uFE0F",see_no_evil:"\u{1F648}",seedling:"\u{1F331}",selfie:"\u{1F933}",shallow_pan_of_food:"\u{1F958}",shamrock:"\u2618\uFE0F",shark:"\u{1F988}",shaved_ice:"\u{1F367}",sheep:"\u{1F411}",shell:"\u{1F41A}",shield:"\u{1F6E1}",shinto_shrine:"\u26E9",ship:"\u{1F6A2}",shirt:"\u{1F455}",shopping:"\u{1F6CD}",shopping_cart:"\u{1F6D2}",shower:"\u{1F6BF}",shrimp:"\u{1F990}",signal_strength:"\u{1F4F6}",six_pointed_star:"\u{1F52F}",ski:"\u{1F3BF}",skier:"\u26F7",skull:"\u{1F480}",skull_and_crossbones:"\u2620\uFE0F",sleeping:"\u{1F634}",sleeping_bed:"\u{1F6CC}",sleepy:"\u{1F62A}",slightly_frowning_face:"\u{1F641}",slightly_smiling_face:"\u{1F642}",slot_machine:"\u{1F3B0}",small_airplane:"\u{1F6E9}",small_blue_diamond:"\u{1F539}",small_orange_diamond:"\u{1F538}",small_red_triangle:"\u{1F53A}",small_red_triangle_down:"\u{1F53B}",smile:"\u{1F604}",smile_cat:"\u{1F638}",smiley:"\u{1F603}",smiley_cat:"\u{1F63A}",smiling_imp:"\u{1F608}",smirk:"\u{1F60F}",smirk_cat:"\u{1F63C}",smoking:"\u{1F6AC}",snail:"\u{1F40C}",snake:"\u{1F40D}",sneezing_face:"\u{1F927}",snowboarder:"\u{1F3C2}",snowflake:"\u2744\uFE0F",snowman:"\u26C4\uFE0F",snowman_with_snow:"\u2603\uFE0F",sob:"\u{1F62D}",soccer:"\u26BD\uFE0F",soon:"\u{1F51C}",sos:"\u{1F198}",sound:"\u{1F509}",space_invader:"\u{1F47E}",spades:"\u2660\uFE0F",spaghetti:"\u{1F35D}",sparkle:"\u2747\uFE0F",sparkler:"\u{1F387}",sparkles:"\u2728",sparkling_heart:"\u{1F496}",speak_no_evil:"\u{1F64A}",speaker:"\u{1F508}",speaking_head:"\u{1F5E3}",speech_balloon:"\u{1F4AC}",speedboat:"\u{1F6A4}",spider:"\u{1F577}",spider_web:"\u{1F578}",spiral_calendar:"\u{1F5D3}",spiral_notepad:"\u{1F5D2}",spoon:"\u{1F944}",squid:"\u{1F991}",stadium:"\u{1F3DF}",star:"\u2B50\uFE0F",star2:"\u{1F31F}",star_and_crescent:"\u262A\uFE0F",star_of_david:"\u2721\uFE0F",stars:"\u{1F320}",station:"\u{1F689}",statue_of_liberty:"\u{1F5FD}",steam_locomotive:"\u{1F682}",stew:"\u{1F372}",stop_button:"\u23F9",stop_sign:"\u{1F6D1}",stopwatch:"\u23F1",straight_ruler:"\u{1F4CF}",strawberry:"\u{1F353}",stuck_out_tongue:"\u{1F61B}",stuck_out_tongue_closed_eyes:"\u{1F61D}",stuck_out_tongue_winking_eye:"\u{1F61C}",studio_microphone:"\u{1F399}",stuffed_flatbread:"\u{1F959}",sun_behind_large_cloud:"\u{1F325}",sun_behind_rain_cloud:"\u{1F326}",sun_behind_small_cloud:"\u{1F324}",sun_with_face:"\u{1F31E}",sunflower:"\u{1F33B}",sunglasses:"\u{1F60E}",sunny:"\u2600\uFE0F",sunrise:"\u{1F305}",sunrise_over_mountains:"\u{1F304}",surfing_man:"\u{1F3C4}",surfing_woman:"\u{1F3C4}&zwj;\u2640\uFE0F",sushi:"\u{1F363}",suspension_railway:"\u{1F69F}",sweat:"\u{1F613}",sweat_drops:"\u{1F4A6}",sweat_smile:"\u{1F605}",sweet_potato:"\u{1F360}",swimming_man:"\u{1F3CA}",swimming_woman:"\u{1F3CA}&zwj;\u2640\uFE0F",symbols:"\u{1F523}",synagogue:"\u{1F54D}",syringe:"\u{1F489}",taco:"\u{1F32E}",tada:"\u{1F389}",tanabata_tree:"\u{1F38B}",taurus:"\u2649\uFE0F",taxi:"\u{1F695}",tea:"\u{1F375}",telephone_receiver:"\u{1F4DE}",telescope:"\u{1F52D}",tennis:"\u{1F3BE}",tent:"\u26FA\uFE0F",thermometer:"\u{1F321}",thinking:"\u{1F914}",thought_balloon:"\u{1F4AD}",ticket:"\u{1F3AB}",tickets:"\u{1F39F}",tiger:"\u{1F42F}",tiger2:"\u{1F405}",timer_clock:"\u23F2",tipping_hand_man:"\u{1F481}&zwj;\u2642\uFE0F",tired_face:"\u{1F62B}",tm:"\u2122\uFE0F",toilet:"\u{1F6BD}",tokyo_tower:"\u{1F5FC}",tomato:"\u{1F345}",tongue:"\u{1F445}",top:"\u{1F51D}",tophat:"\u{1F3A9}",tornado:"\u{1F32A}",trackball:"\u{1F5B2}",tractor:"\u{1F69C}",traffic_light:"\u{1F6A5}",train:"\u{1F68B}",train2:"\u{1F686}",tram:"\u{1F68A}",triangular_flag_on_post:"\u{1F6A9}",triangular_ruler:"\u{1F4D0}",trident:"\u{1F531}",triumph:"\u{1F624}",trolleybus:"\u{1F68E}",trophy:"\u{1F3C6}",tropical_drink:"\u{1F379}",tropical_fish:"\u{1F420}",truck:"\u{1F69A}",trumpet:"\u{1F3BA}",tulip:"\u{1F337}",tumbler_glass:"\u{1F943}",turkey:"\u{1F983}",turtle:"\u{1F422}",tv:"\u{1F4FA}",twisted_rightwards_arrows:"\u{1F500}",two_hearts:"\u{1F495}",two_men_holding_hands:"\u{1F46C}",two_women_holding_hands:"\u{1F46D}",u5272:"\u{1F239}",u5408:"\u{1F234}",u55b6:"\u{1F23A}",u6307:"\u{1F22F}\uFE0F",u6708:"\u{1F237}\uFE0F",u6709:"\u{1F236}",u6e80:"\u{1F235}",u7121:"\u{1F21A}\uFE0F",u7533:"\u{1F238}",u7981:"\u{1F232}",u7a7a:"\u{1F233}",umbrella:"\u2614\uFE0F",unamused:"\u{1F612}",underage:"\u{1F51E}",unicorn:"\u{1F984}",unlock:"\u{1F513}",up:"\u{1F199}",upside_down_face:"\u{1F643}",v:"\u270C\uFE0F",vertical_traffic_light:"\u{1F6A6}",vhs:"\u{1F4FC}",vibration_mode:"\u{1F4F3}",video_camera:"\u{1F4F9}",video_game:"\u{1F3AE}",violin:"\u{1F3BB}",virgo:"\u264D\uFE0F",volcano:"\u{1F30B}",volleyball:"\u{1F3D0}",vs:"\u{1F19A}",vulcan_salute:"\u{1F596}",walking_man:"\u{1F6B6}",walking_woman:"\u{1F6B6}&zwj;\u2640\uFE0F",waning_crescent_moon:"\u{1F318}",waning_gibbous_moon:"\u{1F316}",warning:"\u26A0\uFE0F",wastebasket:"\u{1F5D1}",watch:"\u231A\uFE0F",water_buffalo:"\u{1F403}",watermelon:"\u{1F349}",wave:"\u{1F44B}",wavy_dash:"\u3030\uFE0F",waxing_crescent_moon:"\u{1F312}",wc:"\u{1F6BE}",weary:"\u{1F629}",wedding:"\u{1F492}",weight_lifting_man:"\u{1F3CB}\uFE0F",weight_lifting_woman:"\u{1F3CB}\uFE0F&zwj;\u2640\uFE0F",whale:"\u{1F433}",whale2:"\u{1F40B}",wheel_of_dharma:"\u2638\uFE0F",wheelchair:"\u267F\uFE0F",white_check_mark:"\u2705",white_circle:"\u26AA\uFE0F",white_flag:"\u{1F3F3}\uFE0F",white_flower:"\u{1F4AE}",white_large_square:"\u2B1C\uFE0F",white_medium_small_square:"\u25FD\uFE0F",white_medium_square:"\u25FB\uFE0F",white_small_square:"\u25AB\uFE0F",white_square_button:"\u{1F533}",wilted_flower:"\u{1F940}",wind_chime:"\u{1F390}",wind_face:"\u{1F32C}",wine_glass:"\u{1F377}",wink:"\u{1F609}",wolf:"\u{1F43A}",woman:"\u{1F469}",woman_artist:"\u{1F469}&zwj;\u{1F3A8}",woman_astronaut:"\u{1F469}&zwj;\u{1F680}",woman_cartwheeling:"\u{1F938}&zwj;\u2640\uFE0F",woman_cook:"\u{1F469}&zwj;\u{1F373}",woman_facepalming:"\u{1F926}&zwj;\u2640\uFE0F",woman_factory_worker:"\u{1F469}&zwj;\u{1F3ED}",woman_farmer:"\u{1F469}&zwj;\u{1F33E}",woman_firefighter:"\u{1F469}&zwj;\u{1F692}",woman_health_worker:"\u{1F469}&zwj;\u2695\uFE0F",woman_judge:"\u{1F469}&zwj;\u2696\uFE0F",woman_juggling:"\u{1F939}&zwj;\u2640\uFE0F",woman_mechanic:"\u{1F469}&zwj;\u{1F527}",woman_office_worker:"\u{1F469}&zwj;\u{1F4BC}",woman_pilot:"\u{1F469}&zwj;\u2708\uFE0F",woman_playing_handball:"\u{1F93E}&zwj;\u2640\uFE0F",woman_playing_water_polo:"\u{1F93D}&zwj;\u2640\uFE0F",woman_scientist:"\u{1F469}&zwj;\u{1F52C}",woman_shrugging:"\u{1F937}&zwj;\u2640\uFE0F",woman_singer:"\u{1F469}&zwj;\u{1F3A4}",woman_student:"\u{1F469}&zwj;\u{1F393}",woman_teacher:"\u{1F469}&zwj;\u{1F3EB}",woman_technologist:"\u{1F469}&zwj;\u{1F4BB}",woman_with_turban:"\u{1F473}&zwj;\u2640\uFE0F",womans_clothes:"\u{1F45A}",womans_hat:"\u{1F452}",women_wrestling:"\u{1F93C}&zwj;\u2640\uFE0F",womens:"\u{1F6BA}",world_map:"\u{1F5FA}",worried:"\u{1F61F}",wrench:"\u{1F527}",writing_hand:"\u270D\uFE0F",x:"\u274C",yellow_heart:"\u{1F49B}",yen:"\u{1F4B4}",yin_yang:"\u262F\uFE0F",yum:"\u{1F60B}",zap:"\u26A1\uFE0F",zipper_mouth_face:"\u{1F910}",zzz:"\u{1F4A4}",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},f.Converter=function(t){"use strict";var i={},d=[],c=[],m={},k=Q,v={parsed:{},raw:"",format:""};y();function y(){t=t||{};for(var h in V)V.hasOwnProperty(h)&&(i[h]=V[h]);if(typeof t=="object")for(var R in t)t.hasOwnProperty(R)&&(i[R]=t[R]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof t+" was passed instead.");i.extensions&&f.helper.forEach(i.extensions,w)}function w(h,R){if(R=R||null,f.helper.isString(h))if(h=f.helper.stdExtName(h),R=h,f.extensions[h]){console.warn("DEPRECATION WARNING: "+h+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),g(f.extensions[h],h);return}else if(!f.helper.isUndefined(P[h]))h=P[h];else throw Error('Extension "'+h+'" could not be loaded. It was either not found or is not a valid extension.');typeof h=="function"&&(h=h()),f.helper.isArray(h)||(h=[h]);var B=Ae(h,R);if(!B.valid)throw Error(B.error);for(var D=0;D<h.length;++D){switch(h[D].type){case"lang":d.push(h[D]);break;case"output":c.push(h[D]);break}if(h[D].hasOwnProperty("listeners"))for(var O in h[D].listeners)h[D].listeners.hasOwnProperty(O)&&p(O,h[D].listeners[O])}}function g(h,R){typeof h=="function"&&(h=h(new f.Converter)),f.helper.isArray(h)||(h=[h]);var B=Ae(h,R);if(!B.valid)throw Error(B.error);for(var D=0;D<h.length;++D)switch(h[D].type){case"lang":d.push(h[D]);break;case"output":c.push(h[D]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function p(h,R){if(!f.helper.isString(h))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof h+" given");if(typeof R!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof R+" given");m.hasOwnProperty(h)||(m[h]=[]),m[h].push(R)}function b(h){var R=h.match(/^\s*/)[0].length,B=new RegExp("^\\s{0,"+R+"}","gm");return h.replace(B,"")}this._dispatch=function(R,B,D,O){if(m.hasOwnProperty(R))for(var F=0;F<m[R].length;++F){var _e=m[R][F](R,B,this,D,O);_e&&typeof _e<"u"&&(B=_e)}return B},this.listen=function(h,R){return p(h,R),this},this.makeHtml=function(h){if(!h)return h;var R={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:d,outputModifiers:c,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return h=h.replace(/¨/g,"\xA8T"),h=h.replace(/\$/g,"\xA8D"),h=h.replace(/\r\n/g,`
`),h=h.replace(/\r/g,`
`),h=h.replace(/\u00A0/g,"&nbsp;"),i.smartIndentationFix&&(h=b(h)),h=`

`+h+`

`,h=f.subParser("detab")(h,i,R),h=h.replace(/^[ \t]+$/mg,""),f.helper.forEach(d,function(B){h=f.subParser("runExtension")(B,h,i,R)}),h=f.subParser("metadata")(h,i,R),h=f.subParser("hashPreCodeTags")(h,i,R),h=f.subParser("githubCodeBlocks")(h,i,R),h=f.subParser("hashHTMLBlocks")(h,i,R),h=f.subParser("hashCodeTags")(h,i,R),h=f.subParser("stripLinkDefinitions")(h,i,R),h=f.subParser("blockGamut")(h,i,R),h=f.subParser("unhashHTMLSpans")(h,i,R),h=f.subParser("unescapeSpecialChars")(h,i,R),h=h.replace(/¨D/g,"$$"),h=h.replace(/¨T/g,"\xA8"),h=f.subParser("completeHTMLDocument")(h,i,R),f.helper.forEach(c,function(B){h=f.subParser("runExtension")(B,h,i,R)}),v=R.metadata,h},this.makeMarkdown=this.makeMd=function(h,R){if(h=h.replace(/\r\n/g,`
`),h=h.replace(/\r/g,`
`),h=h.replace(/>[ \t]+</,">\xA8NBSP;<"),!R)if(window&&window.document)R=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var B=R.createElement("div");B.innerHTML=h;var D={preList:ce(B)};re(B);for(var O=B.childNodes,F="",_e=0;_e<O.length;_e++)F+=f.subParser("makeMarkdown.node")(O[_e],D);function re(ee){for(var de=0;de<ee.childNodes.length;++de){var le=ee.childNodes[de];le.nodeType===3?!/\S/.test(le.nodeValue)&&!/^[ ]+$/.test(le.nodeValue)?(ee.removeChild(le),--de):(le.nodeValue=le.nodeValue.split(`
`).join(" "),le.nodeValue=le.nodeValue.replace(/(\s)+/g,"$1")):le.nodeType===1&&re(le)}}function ce(ee){for(var de=ee.querySelectorAll("pre"),le=[],me=0;me<de.length;++me)if(de[me].childElementCount===1&&de[me].firstChild.tagName.toLowerCase()==="code"){var je=de[me].firstChild.innerHTML.trim(),en=de[me].firstChild.getAttribute("data-language")||"";if(en==="")for(var yn=de[me].firstChild.className.split(" "),ze=0;ze<yn.length;++ze){var Ne=yn[ze].match(/^language-(.+)$/);if(Ne!==null){en=Ne[1];break}}je=f.helper.unescapeHTMLEntities(je),le.push(je),de[me].outerHTML='<precode language="'+en+'" precodenum="'+me.toString()+'"></precode>'}else le.push(de[me].innerHTML),de[me].innerHTML="",de[me].setAttribute("prenum",me.toString());return le}return F},this.setOption=function(h,R){i[h]=R},this.getOption=function(h){return i[h]},this.getOptions=function(){return i},this.addExtension=function(h,R){R=R||null,w(h,R)},this.useExtension=function(h){w(h)},this.setFlavor=function(h){if(!te.hasOwnProperty(h))throw Error(h+" flavor was not found");var R=te[h];k=h;for(var B in R)R.hasOwnProperty(B)&&(i[B]=R[B])},this.getFlavor=function(){return k},this.removeExtension=function(h){f.helper.isArray(h)||(h=[h]);for(var R=0;R<h.length;++R){for(var B=h[R],D=0;D<d.length;++D)d[D]===B&&d.splice(D,1);for(var O=0;O<c.length;++O)c[O]===B&&c.splice(O,1)}},this.getAllExtensions=function(){return{language:d,output:c}},this.getMetadata=function(h){return h?v.raw:v.parsed},this.getMetadataFormat=function(){return v.format},this._setMetadataPair=function(h,R){v.parsed[h]=R},this._setMetadataFormat=function(h){v.format=h},this._setMetadataRaw=function(h){v.raw=h}},f.subParser("anchors",function(t,i,d){"use strict";t=d.converter._dispatch("anchors.before",t,i,d);var c=function(m,k,v,y,w,g,p){if(f.helper.isUndefined(p)&&(p=""),v=v.toLowerCase(),m.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)y="";else if(!y)if(v||(v=k.toLowerCase().replace(/ ?\n/g," ")),y="#"+v,!f.helper.isUndefined(d.gUrls[v]))y=d.gUrls[v],f.helper.isUndefined(d.gTitles[v])||(p=d.gTitles[v]);else return m;y=y.replace(f.helper.regexes.asteriskDashAndColon,f.helper.escapeCharactersCallback);var b='<a href="'+y+'"';return p!==""&&p!==null&&(p=p.replace(/"/g,"&quot;"),p=p.replace(f.helper.regexes.asteriskDashAndColon,f.helper.escapeCharactersCallback),b+=' title="'+p+'"'),i.openLinksInNewWindow&&!/^#/.test(y)&&(b+=' rel="noopener noreferrer" target="\xA8E95Eblank"'),b+=">"+k+"</a>",b};return t=t.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,c),t=t.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,c),t=t.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,c),t=t.replace(/\[([^\[\]]+)]()()()()()/g,c),i.ghMentions&&(t=t.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(m,k,v,y,w){if(v==="\\")return k+y;if(!f.helper.isString(i.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var g=i.ghMentionsLink.replace(/\{u}/g,w),p="";return i.openLinksInNewWindow&&(p=' rel="noopener noreferrer" target="\xA8E95Eblank"'),k+'<a href="'+g+'"'+p+">"+y+"</a>"})),t=d.converter._dispatch("anchors.after",t,i,d),t});var Me=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,Ie=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,Se=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,fe=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,Oe=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,on=function(t){"use strict";return function(i,d,c,m,k,v,y){c=c.replace(f.helper.regexes.asteriskDashAndColon,f.helper.escapeCharactersCallback);var w=c,g="",p="",b=d||"",h=y||"";return/^www\./i.test(c)&&(c=c.replace(/^www\./i,"http://www.")),t.excludeTrailingPunctuationFromURLs&&v&&(g=v),t.openLinksInNewWindow&&(p=' rel="noopener noreferrer" target="\xA8E95Eblank"'),b+'<a href="'+c+'"'+p+">"+w+"</a>"+g+h}},Ee=function(t,i){"use strict";return function(d,c,m){var k="mailto:";return c=c||"",m=f.subParser("unescapeSpecialChars")(m,t,i),t.encodeEmails?(k=f.helper.encodeEmailAddress(k+m),m=f.helper.encodeEmailAddress(m)):k=k+m,c+'<a href="'+k+'">'+m+"</a>"}};f.subParser("autoLinks",function(t,i,d){"use strict";return t=d.converter._dispatch("autoLinks.before",t,i,d),t=t.replace(Se,on(i)),t=t.replace(Oe,Ee(i,d)),t=d.converter._dispatch("autoLinks.after",t,i,d),t}),f.subParser("simplifiedAutoLinks",function(t,i,d){"use strict";return i.simplifiedAutoLink&&(t=d.converter._dispatch("simplifiedAutoLinks.before",t,i,d),i.excludeTrailingPunctuationFromURLs?t=t.replace(Ie,on(i)):t=t.replace(Me,on(i)),t=t.replace(fe,Ee(i,d)),t=d.converter._dispatch("simplifiedAutoLinks.after",t,i,d)),t}),f.subParser("blockGamut",function(t,i,d){"use strict";return t=d.converter._dispatch("blockGamut.before",t,i,d),t=f.subParser("blockQuotes")(t,i,d),t=f.subParser("headers")(t,i,d),t=f.subParser("horizontalRule")(t,i,d),t=f.subParser("lists")(t,i,d),t=f.subParser("codeBlocks")(t,i,d),t=f.subParser("tables")(t,i,d),t=f.subParser("hashHTMLBlocks")(t,i,d),t=f.subParser("paragraphs")(t,i,d),t=d.converter._dispatch("blockGamut.after",t,i,d),t}),f.subParser("blockQuotes",function(t,i,d){"use strict";t=d.converter._dispatch("blockQuotes.before",t,i,d),t=t+`

`;var c=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return i.splitAdjacentBlockquotes&&(c=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),t=t.replace(c,function(m){return m=m.replace(/^[ \t]*>[ \t]?/gm,""),m=m.replace(/¨0/g,""),m=m.replace(/^[ \t]+$/gm,""),m=f.subParser("githubCodeBlocks")(m,i,d),m=f.subParser("blockGamut")(m,i,d),m=m.replace(/(^|\n)/g,"$1  "),m=m.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(k,v){var y=v;return y=y.replace(/^  /mg,"\xA80"),y=y.replace(/¨0/g,""),y}),f.subParser("hashBlock")(`<blockquote>
`+m+`
</blockquote>`,i,d)}),t=d.converter._dispatch("blockQuotes.after",t,i,d),t}),f.subParser("codeBlocks",function(t,i,d){"use strict";t=d.converter._dispatch("codeBlocks.before",t,i,d),t+="\xA80";var c=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return t=t.replace(c,function(m,k,v){var y=k,w=v,g=`
`;return y=f.subParser("outdent")(y,i,d),y=f.subParser("encodeCode")(y,i,d),y=f.subParser("detab")(y,i,d),y=y.replace(/^\n+/g,""),y=y.replace(/\n+$/g,""),i.omitExtraWLInCodeBlocks&&(g=""),y="<pre><code>"+y+g+"</code></pre>",f.subParser("hashBlock")(y,i,d)+w}),t=t.replace(/¨0/,""),t=d.converter._dispatch("codeBlocks.after",t,i,d),t}),f.subParser("codeSpans",function(t,i,d){"use strict";return t=d.converter._dispatch("codeSpans.before",t,i,d),typeof t>"u"&&(t=""),t=t.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(c,m,k,v){var y=v;return y=y.replace(/^([ \t]*)/g,""),y=y.replace(/[ \t]*$/g,""),y=f.subParser("encodeCode")(y,i,d),y=m+"<code>"+y+"</code>",y=f.subParser("hashHTMLSpans")(y,i,d),y}),t=d.converter._dispatch("codeSpans.after",t,i,d),t}),f.subParser("completeHTMLDocument",function(t,i,d){"use strict";if(!i.completeHTMLDocument)return t;t=d.converter._dispatch("completeHTMLDocument.before",t,i,d);var c="html",m=`<!DOCTYPE HTML>
`,k="",v=`<meta charset="utf-8">
`,y="",w="";typeof d.metadata.parsed.doctype<"u"&&(m="<!DOCTYPE "+d.metadata.parsed.doctype+`>
`,c=d.metadata.parsed.doctype.toString().toLowerCase(),(c==="html"||c==="html5")&&(v='<meta charset="utf-8">'));for(var g in d.metadata.parsed)if(d.metadata.parsed.hasOwnProperty(g))switch(g.toLowerCase()){case"doctype":break;case"title":k="<title>"+d.metadata.parsed.title+`</title>
`;break;case"charset":c==="html"||c==="html5"?v='<meta charset="'+d.metadata.parsed.charset+`">
`:v='<meta name="charset" content="'+d.metadata.parsed.charset+`">
`;break;case"language":case"lang":y=' lang="'+d.metadata.parsed[g]+'"',w+='<meta name="'+g+'" content="'+d.metadata.parsed[g]+`">
`;break;default:w+='<meta name="'+g+'" content="'+d.metadata.parsed[g]+`">
`}return t=m+"<html"+y+`>
<head>
`+k+v+w+`</head>
<body>
`+t.trim()+`
</body>
</html>`,t=d.converter._dispatch("completeHTMLDocument.after",t,i,d),t}),f.subParser("detab",function(t,i,d){"use strict";return t=d.converter._dispatch("detab.before",t,i,d),t=t.replace(/\t(?=\t)/g,"    "),t=t.replace(/\t/g,"\xA8A\xA8B"),t=t.replace(/¨B(.+?)¨A/g,function(c,m){for(var k=m,v=4-k.length%4,y=0;y<v;y++)k+=" ";return k}),t=t.replace(/¨A/g,"    "),t=t.replace(/¨B/g,""),t=d.converter._dispatch("detab.after",t,i,d),t}),f.subParser("ellipsis",function(t,i,d){"use strict";return i.ellipsis&&(t=d.converter._dispatch("ellipsis.before",t,i,d),t=t.replace(/\.\.\./g,"\u2026"),t=d.converter._dispatch("ellipsis.after",t,i,d)),t}),f.subParser("emoji",function(t,i,d){"use strict";if(!i.emoji)return t;t=d.converter._dispatch("emoji.before",t,i,d);var c=/:([\S]+?):/g;return t=t.replace(c,function(m,k){return f.helper.emojis.hasOwnProperty(k)?f.helper.emojis[k]:m}),t=d.converter._dispatch("emoji.after",t,i,d),t}),f.subParser("encodeAmpsAndAngles",function(t,i,d){"use strict";return t=d.converter._dispatch("encodeAmpsAndAngles.before",t,i,d),t=t.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),t=t.replace(/<(?![a-z\/?$!])/gi,"&lt;"),t=t.replace(/</g,"&lt;"),t=t.replace(/>/g,"&gt;"),t=d.converter._dispatch("encodeAmpsAndAngles.after",t,i,d),t}),f.subParser("encodeBackslashEscapes",function(t,i,d){"use strict";return t=d.converter._dispatch("encodeBackslashEscapes.before",t,i,d),t=t.replace(/\\(\\)/g,f.helper.escapeCharactersCallback),t=t.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,f.helper.escapeCharactersCallback),t=d.converter._dispatch("encodeBackslashEscapes.after",t,i,d),t}),f.subParser("encodeCode",function(t,i,d){"use strict";return t=d.converter._dispatch("encodeCode.before",t,i,d),t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,f.helper.escapeCharactersCallback),t=d.converter._dispatch("encodeCode.after",t,i,d),t}),f.subParser("escapeSpecialCharsWithinTagAttributes",function(t,i,d){"use strict";t=d.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",t,i,d);var c=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,m=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return t=t.replace(c,function(k){return k.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,f.helper.escapeCharactersCallback)}),t=t.replace(m,function(k){return k.replace(/([\\`*_~=|])/g,f.helper.escapeCharactersCallback)}),t=d.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",t,i,d),t}),f.subParser("githubCodeBlocks",function(t,i,d){"use strict";return i.ghCodeBlocks?(t=d.converter._dispatch("githubCodeBlocks.before",t,i,d),t+="\xA80",t=t.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(c,m,k,v){var y=i.omitExtraWLInCodeBlocks?"":`
`;return v=f.subParser("encodeCode")(v,i,d),v=f.subParser("detab")(v,i,d),v=v.replace(/^\n+/g,""),v=v.replace(/\n+$/g,""),v="<pre><code"+(k?' class="'+k+" language-"+k+'"':"")+">"+v+y+"</code></pre>",v=f.subParser("hashBlock")(v,i,d),`

\xA8G`+(d.ghCodeBlocks.push({text:c,codeblock:v})-1)+`G

`}),t=t.replace(/¨0/,""),d.converter._dispatch("githubCodeBlocks.after",t,i,d)):t}),f.subParser("hashBlock",function(t,i,d){"use strict";return t=d.converter._dispatch("hashBlock.before",t,i,d),t=t.replace(/(^\n+|\n+$)/g,""),t=`

\xA8K`+(d.gHtmlBlocks.push(t)-1)+`K

`,t=d.converter._dispatch("hashBlock.after",t,i,d),t}),f.subParser("hashCodeTags",function(t,i,d){"use strict";t=d.converter._dispatch("hashCodeTags.before",t,i,d);var c=function(m,k,v,y){var w=v+f.subParser("encodeCode")(k,i,d)+y;return"\xA8C"+(d.gHtmlSpans.push(w)-1)+"C"};return t=f.helper.replaceRecursiveRegExp(t,c,"<code\\b[^>]*>","</code>","gim"),t=d.converter._dispatch("hashCodeTags.after",t,i,d),t}),f.subParser("hashElement",function(t,i,d){"use strict";return function(c,m){var k=m;return k=k.replace(/\n\n/g,`
`),k=k.replace(/^\n/,""),k=k.replace(/\n+$/g,""),k=`

\xA8K`+(d.gHtmlBlocks.push(k)-1)+`K

`,k}}),f.subParser("hashHTMLBlocks",function(t,i,d){"use strict";t=d.converter._dispatch("hashHTMLBlocks.before",t,i,d);var c=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],m=function(h,R,B,D){var O=h;return B.search(/\bmarkdown\b/)!==-1&&(O=B+d.converter.makeHtml(R)+D),`

\xA8K`+(d.gHtmlBlocks.push(O)-1)+`K

`};i.backslashEscapesHTMLTags&&(t=t.replace(/\\<(\/?[^>]+?)>/g,function(h,R){return"&lt;"+R+"&gt;"}));for(var k=0;k<c.length;++k)for(var v,y=new RegExp("^ {0,3}(<"+c[k]+"\\b[^>]*>)","im"),w="<"+c[k]+"\\b[^>]*>",g="</"+c[k]+">";(v=f.helper.regexIndexOf(t,y))!==-1;){var p=f.helper.splitAtIndex(t,v),b=f.helper.replaceRecursiveRegExp(p[1],m,w,g,"im");if(b===p[1])break;t=p[0].concat(b)}return t=t.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,f.subParser("hashElement")(t,i,d)),t=f.helper.replaceRecursiveRegExp(t,function(h){return`

\xA8K`+(d.gHtmlBlocks.push(h)-1)+`K

`},"^ {0,3}<!--","-->","gm"),t=t.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,f.subParser("hashElement")(t,i,d)),t=d.converter._dispatch("hashHTMLBlocks.after",t,i,d),t}),f.subParser("hashHTMLSpans",function(t,i,d){"use strict";t=d.converter._dispatch("hashHTMLSpans.before",t,i,d);function c(m){return"\xA8C"+(d.gHtmlSpans.push(m)-1)+"C"}return t=t.replace(/<[^>]+?\/>/gi,function(m){return c(m)}),t=t.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(m){return c(m)}),t=t.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(m){return c(m)}),t=t.replace(/<[^>]+?>/gi,function(m){return c(m)}),t=d.converter._dispatch("hashHTMLSpans.after",t,i,d),t}),f.subParser("unhashHTMLSpans",function(t,i,d){"use strict";t=d.converter._dispatch("unhashHTMLSpans.before",t,i,d);for(var c=0;c<d.gHtmlSpans.length;++c){for(var m=d.gHtmlSpans[c],k=0;/¨C(\d+)C/.test(m);){var v=RegExp.$1;if(m=m.replace("\xA8C"+v+"C",d.gHtmlSpans[v]),k===10){console.error("maximum nesting of 10 spans reached!!!");break}++k}t=t.replace("\xA8C"+c+"C",m)}return t=d.converter._dispatch("unhashHTMLSpans.after",t,i,d),t}),f.subParser("hashPreCodeTags",function(t,i,d){"use strict";t=d.converter._dispatch("hashPreCodeTags.before",t,i,d);var c=function(m,k,v,y){var w=v+f.subParser("encodeCode")(k,i,d)+y;return`

\xA8G`+(d.ghCodeBlocks.push({text:m,codeblock:w})-1)+`G

`};return t=f.helper.replaceRecursiveRegExp(t,c,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),t=d.converter._dispatch("hashPreCodeTags.after",t,i,d),t}),f.subParser("headers",function(t,i,d){"use strict";t=d.converter._dispatch("headers.before",t,i,d);var c=isNaN(parseInt(i.headerLevelStart))?1:parseInt(i.headerLevelStart),m=i.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,k=i.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;t=t.replace(m,function(w,g){var p=f.subParser("spanGamut")(g,i,d),b=i.noHeaderId?"":' id="'+y(g)+'"',h=c,R="<h"+h+b+">"+p+"</h"+h+">";return f.subParser("hashBlock")(R,i,d)}),t=t.replace(k,function(w,g){var p=f.subParser("spanGamut")(g,i,d),b=i.noHeaderId?"":' id="'+y(g)+'"',h=c+1,R="<h"+h+b+">"+p+"</h"+h+">";return f.subParser("hashBlock")(R,i,d)});var v=i.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;t=t.replace(v,function(w,g,p){var b=p;i.customizedHeaderId&&(b=p.replace(/\s?\{([^{]+?)}\s*$/,""));var h=f.subParser("spanGamut")(b,i,d),R=i.noHeaderId?"":' id="'+y(p)+'"',B=c-1+g.length,D="<h"+B+R+">"+h+"</h"+B+">";return f.subParser("hashBlock")(D,i,d)});function y(w){var g,p;if(i.customizedHeaderId){var b=w.match(/\{([^{]+?)}\s*$/);b&&b[1]&&(w=b[1])}return g=w,f.helper.isString(i.prefixHeaderId)?p=i.prefixHeaderId:i.prefixHeaderId===!0?p="section-":p="",i.rawPrefixHeaderId||(g=p+g),i.ghCompatibleHeaderId?g=g.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():i.rawHeaderId?g=g.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"\xA8").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():g=g.replace(/[^\w]/g,"").toLowerCase(),i.rawPrefixHeaderId&&(g=p+g),d.hashLinkCounts[g]?g=g+"-"+d.hashLinkCounts[g]++:d.hashLinkCounts[g]=1,g}return t=d.converter._dispatch("headers.after",t,i,d),t}),f.subParser("horizontalRule",function(t,i,d){"use strict";t=d.converter._dispatch("horizontalRule.before",t,i,d);var c=f.subParser("hashBlock")("<hr />",i,d);return t=t.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,c),t=t.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,c),t=t.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,c),t=d.converter._dispatch("horizontalRule.after",t,i,d),t}),f.subParser("images",function(t,i,d){"use strict";t=d.converter._dispatch("images.before",t,i,d);var c=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,m=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,k=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,v=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,y=/!\[([^\[\]]+)]()()()()()/g;function w(p,b,h,R,B,D,O,F){return R=R.replace(/\s/g,""),g(p,b,h,R,B,D,O,F)}function g(p,b,h,R,B,D,O,F){var _e=d.gUrls,re=d.gTitles,ce=d.gDimensions;if(h=h.toLowerCase(),F||(F=""),p.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)R="";else if(R===""||R===null)if((h===""||h===null)&&(h=b.toLowerCase().replace(/ ?\n/g," ")),R="#"+h,!f.helper.isUndefined(_e[h]))R=_e[h],f.helper.isUndefined(re[h])||(F=re[h]),f.helper.isUndefined(ce[h])||(B=ce[h].width,D=ce[h].height);else return p;b=b.replace(/"/g,"&quot;").replace(f.helper.regexes.asteriskDashAndColon,f.helper.escapeCharactersCallback),R=R.replace(f.helper.regexes.asteriskDashAndColon,f.helper.escapeCharactersCallback);var ee='<img src="'+R+'" alt="'+b+'"';return F&&f.helper.isString(F)&&(F=F.replace(/"/g,"&quot;").replace(f.helper.regexes.asteriskDashAndColon,f.helper.escapeCharactersCallback),ee+=' title="'+F+'"'),B&&D&&(B=B==="*"?"auto":B,D=D==="*"?"auto":D,ee+=' width="'+B+'"',ee+=' height="'+D+'"'),ee+=" />",ee}return t=t.replace(v,g),t=t.replace(k,w),t=t.replace(m,g),t=t.replace(c,g),t=t.replace(y,g),t=d.converter._dispatch("images.after",t,i,d),t}),f.subParser("italicsAndBold",function(t,i,d){"use strict";t=d.converter._dispatch("italicsAndBold.before",t,i,d);function c(m,k,v){return k+m+v}return i.literalMidWordUnderscores?(t=t.replace(/\b___(\S[\s\S]*?)___\b/g,function(m,k){return c(k,"<strong><em>","</em></strong>")}),t=t.replace(/\b__(\S[\s\S]*?)__\b/g,function(m,k){return c(k,"<strong>","</strong>")}),t=t.replace(/\b_(\S[\s\S]*?)_\b/g,function(m,k){return c(k,"<em>","</em>")})):(t=t.replace(/___(\S[\s\S]*?)___/g,function(m,k){return/\S$/.test(k)?c(k,"<strong><em>","</em></strong>"):m}),t=t.replace(/__(\S[\s\S]*?)__/g,function(m,k){return/\S$/.test(k)?c(k,"<strong>","</strong>"):m}),t=t.replace(/_([^\s_][\s\S]*?)_/g,function(m,k){return/\S$/.test(k)?c(k,"<em>","</em>"):m})),i.literalMidWordAsterisks?(t=t.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(m,k,v){return c(v,k+"<strong><em>","</em></strong>")}),t=t.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(m,k,v){return c(v,k+"<strong>","</strong>")}),t=t.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(m,k,v){return c(v,k+"<em>","</em>")})):(t=t.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(m,k){return/\S$/.test(k)?c(k,"<strong><em>","</em></strong>"):m}),t=t.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(m,k){return/\S$/.test(k)?c(k,"<strong>","</strong>"):m}),t=t.replace(/\*([^\s*][\s\S]*?)\*/g,function(m,k){return/\S$/.test(k)?c(k,"<em>","</em>"):m})),t=d.converter._dispatch("italicsAndBold.after",t,i,d),t}),f.subParser("lists",function(t,i,d){"use strict";function c(v,y){d.gListLevel++,v=v.replace(/\n{2,}$/,`
`),v+="\xA80";var w=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,g=/\n[ \t]*\n(?!¨0)/.test(v);return i.disableForced4SpacesIndentedSublists&&(w=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),v=v.replace(w,function(p,b,h,R,B,D,O){O=O&&O.trim()!=="";var F=f.subParser("outdent")(B,i,d),_e="";return D&&i.tasklists&&(_e=' class="task-list-item" style="list-style-type: none;"',F=F.replace(/^[ \t]*\[(x|X| )?]/m,function(){var re='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return O&&(re+=" checked"),re+=">",re})),F=F.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(re){return"\xA8A"+re}),b||F.search(/\n{2,}/)>-1?(F=f.subParser("githubCodeBlocks")(F,i,d),F=f.subParser("blockGamut")(F,i,d)):(F=f.subParser("lists")(F,i,d),F=F.replace(/\n$/,""),F=f.subParser("hashHTMLBlocks")(F,i,d),F=F.replace(/\n\n+/g,`

`),g?F=f.subParser("paragraphs")(F,i,d):F=f.subParser("spanGamut")(F,i,d)),F=F.replace("\xA8A",""),F="<li"+_e+">"+F+`</li>
`,F}),v=v.replace(/¨0/g,""),d.gListLevel--,y&&(v=v.replace(/\s+$/,"")),v}function m(v,y){if(y==="ol"){var w=v.match(/^ *(\d+)\./);if(w&&w[1]!=="1")return' start="'+w[1]+'"'}return""}function k(v,y,w){var g=i.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,p=i.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,b=y==="ul"?g:p,h="";if(v.search(b)!==-1)(function B(D){var O=D.search(b),F=m(v,y);O!==-1?(h+=`

<`+y+F+`>
`+c(D.slice(0,O),!!w)+"</"+y+`>
`,y=y==="ul"?"ol":"ul",b=y==="ul"?g:p,B(D.slice(O))):h+=`

<`+y+F+`>
`+c(D,!!w)+"</"+y+`>
`})(v);else{var R=m(v,y);h=`

<`+y+R+`>
`+c(v,!!w)+"</"+y+`>
`}return h}return t=d.converter._dispatch("lists.before",t,i,d),t+="\xA80",d.gListLevel?t=t.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(v,y,w){var g=w.search(/[*+-]/g)>-1?"ul":"ol";return k(y,g,!0)}):t=t.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(v,y,w,g){var p=g.search(/[*+-]/g)>-1?"ul":"ol";return k(w,p,!1)}),t=t.replace(/¨0/,""),t=d.converter._dispatch("lists.after",t,i,d),t}),f.subParser("metadata",function(t,i,d){"use strict";if(!i.metadata)return t;t=d.converter._dispatch("metadata.before",t,i,d);function c(m){d.metadata.raw=m,m=m.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),m=m.replace(/\n {4}/g," "),m.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(k,v,y){return d.metadata.parsed[v]=y,""})}return t=t.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(m,k,v){return c(v),"\xA8M"}),t=t.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(m,k,v){return k&&(d.metadata.format=k),c(v),"\xA8M"}),t=t.replace(/¨M/g,""),t=d.converter._dispatch("metadata.after",t,i,d),t}),f.subParser("outdent",function(t,i,d){"use strict";return t=d.converter._dispatch("outdent.before",t,i,d),t=t.replace(/^(\t|[ ]{1,4})/gm,"\xA80"),t=t.replace(/¨0/g,""),t=d.converter._dispatch("outdent.after",t,i,d),t}),f.subParser("paragraphs",function(t,i,d){"use strict";t=d.converter._dispatch("paragraphs.before",t,i,d),t=t.replace(/^\n+/g,""),t=t.replace(/\n+$/g,"");for(var c=t.split(/\n{2,}/g),m=[],k=c.length,v=0;v<k;v++){var y=c[v];y.search(/¨(K|G)(\d+)\1/g)>=0?m.push(y):y.search(/\S/)>=0&&(y=f.subParser("spanGamut")(y,i,d),y=y.replace(/^([ \t]*)/g,"<p>"),y+="</p>",m.push(y))}for(k=m.length,v=0;v<k;v++){for(var w="",g=m[v],p=!1;/¨(K|G)(\d+)\1/.test(g);){var b=RegExp.$1,h=RegExp.$2;b==="K"?w=d.gHtmlBlocks[h]:p?w=f.subParser("encodeCode")(d.ghCodeBlocks[h].text,i,d):w=d.ghCodeBlocks[h].codeblock,w=w.replace(/\$/g,"$$$$"),g=g.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,w),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(g)&&(p=!0)}m[v]=g}return t=m.join(`
`),t=t.replace(/^\n+/g,""),t=t.replace(/\n+$/g,""),d.converter._dispatch("paragraphs.after",t,i,d)}),f.subParser("runExtension",function(t,i,d,c){"use strict";if(t.filter)i=t.filter(i,c.converter,d);else if(t.regex){var m=t.regex;m instanceof RegExp||(m=new RegExp(m,"g")),i=i.replace(m,t.replace)}return i}),f.subParser("spanGamut",function(t,i,d){"use strict";return t=d.converter._dispatch("spanGamut.before",t,i,d),t=f.subParser("codeSpans")(t,i,d),t=f.subParser("escapeSpecialCharsWithinTagAttributes")(t,i,d),t=f.subParser("encodeBackslashEscapes")(t,i,d),t=f.subParser("images")(t,i,d),t=f.subParser("anchors")(t,i,d),t=f.subParser("autoLinks")(t,i,d),t=f.subParser("simplifiedAutoLinks")(t,i,d),t=f.subParser("emoji")(t,i,d),t=f.subParser("underline")(t,i,d),t=f.subParser("italicsAndBold")(t,i,d),t=f.subParser("strikethrough")(t,i,d),t=f.subParser("ellipsis")(t,i,d),t=f.subParser("hashHTMLSpans")(t,i,d),t=f.subParser("encodeAmpsAndAngles")(t,i,d),i.simpleLineBreaks?/\n\n¨K/.test(t)||(t=t.replace(/\n+/g,`<br />
`)):t=t.replace(/  +\n/g,`<br />
`),t=d.converter._dispatch("spanGamut.after",t,i,d),t}),f.subParser("strikethrough",function(t,i,d){"use strict";function c(m){return i.simplifiedAutoLink&&(m=f.subParser("simplifiedAutoLinks")(m,i,d)),"<del>"+m+"</del>"}return i.strikethrough&&(t=d.converter._dispatch("strikethrough.before",t,i,d),t=t.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(m,k){return c(k)}),t=d.converter._dispatch("strikethrough.after",t,i,d)),t}),f.subParser("stripLinkDefinitions",function(t,i,d){"use strict";var c=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,m=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;t+="\xA80";var k=function(v,y,w,g,p,b,h){return y=y.toLowerCase(),t.toLowerCase().split(y).length-1<2?v:(w.match(/^data:.+?\/.+?;base64,/)?d.gUrls[y]=w.replace(/\s/g,""):d.gUrls[y]=f.subParser("encodeAmpsAndAngles")(w,i,d),b?b+h:(h&&(d.gTitles[y]=h.replace(/"|'/g,"&quot;")),i.parseImgDimensions&&g&&p&&(d.gDimensions[y]={width:g,height:p}),""))};return t=t.replace(m,k),t=t.replace(c,k),t=t.replace(/¨0/,""),t}),f.subParser("tables",function(t,i,d){"use strict";if(!i.tables)return t;var c=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,m=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function k(p){return/^:[ \t]*--*$/.test(p)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(p)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(p)?' style="text-align:center;"':""}function v(p,b){var h="";return p=p.trim(),(i.tablesHeaderId||i.tableHeaderId)&&(h=' id="'+p.replace(/ /g,"_").toLowerCase()+'"'),p=f.subParser("spanGamut")(p,i,d),"<th"+h+b+">"+p+`</th>
`}function y(p,b){var h=f.subParser("spanGamut")(p,i,d);return"<td"+b+">"+h+`</td>
`}function w(p,b){for(var h=`<table>
<thead>
<tr>
`,R=p.length,B=0;B<R;++B)h+=p[B];for(h+=`</tr>
</thead>
<tbody>
`,B=0;B<b.length;++B){h+=`<tr>
`;for(var D=0;D<R;++D)h+=b[B][D];h+=`</tr>
`}return h+=`</tbody>
</table>
`,h}function g(p){var b,h=p.split(`
`);for(b=0;b<h.length;++b)/^ {0,3}\|/.test(h[b])&&(h[b]=h[b].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(h[b])&&(h[b]=h[b].replace(/\|[ \t]*$/,"")),h[b]=f.subParser("codeSpans")(h[b],i,d);var R=h[0].split("|").map(function(ee){return ee.trim()}),B=h[1].split("|").map(function(ee){return ee.trim()}),D=[],O=[],F=[],_e=[];for(h.shift(),h.shift(),b=0;b<h.length;++b)h[b].trim()!==""&&D.push(h[b].split("|").map(function(ee){return ee.trim()}));if(R.length<B.length)return p;for(b=0;b<B.length;++b)F.push(k(B[b]));for(b=0;b<R.length;++b)f.helper.isUndefined(F[b])&&(F[b]=""),O.push(v(R[b],F[b]));for(b=0;b<D.length;++b){for(var re=[],ce=0;ce<O.length;++ce)f.helper.isUndefined(D[b][ce]),re.push(y(D[b][ce],F[ce]));_e.push(re)}return w(O,_e)}return t=d.converter._dispatch("tables.before",t,i,d),t=t.replace(/\\(\|)/g,f.helper.escapeCharactersCallback),t=t.replace(c,g),t=t.replace(m,g),t=d.converter._dispatch("tables.after",t,i,d),t}),f.subParser("underline",function(t,i,d){"use strict";return i.underline&&(t=d.converter._dispatch("underline.before",t,i,d),i.literalMidWordUnderscores?(t=t.replace(/\b___(\S[\s\S]*?)___\b/g,function(c,m){return"<u>"+m+"</u>"}),t=t.replace(/\b__(\S[\s\S]*?)__\b/g,function(c,m){return"<u>"+m+"</u>"})):(t=t.replace(/___(\S[\s\S]*?)___/g,function(c,m){return/\S$/.test(m)?"<u>"+m+"</u>":c}),t=t.replace(/__(\S[\s\S]*?)__/g,function(c,m){return/\S$/.test(m)?"<u>"+m+"</u>":c})),t=t.replace(/(_)/g,f.helper.escapeCharactersCallback),t=d.converter._dispatch("underline.after",t,i,d)),t}),f.subParser("unescapeSpecialChars",function(t,i,d){"use strict";return t=d.converter._dispatch("unescapeSpecialChars.before",t,i,d),t=t.replace(/¨E(\d+)E/g,function(c,m){var k=parseInt(m);return String.fromCharCode(k)}),t=d.converter._dispatch("unescapeSpecialChars.after",t,i,d),t}),f.subParser("makeMarkdown.blockquote",function(t,i){"use strict";var d="";if(t.hasChildNodes())for(var c=t.childNodes,m=c.length,k=0;k<m;++k){var v=f.subParser("makeMarkdown.node")(c[k],i);v!==""&&(d+=v)}return d=d.trim(),d="> "+d.split(`
`).join(`
> `),d}),f.subParser("makeMarkdown.codeBlock",function(t,i){"use strict";var d=t.getAttribute("language"),c=t.getAttribute("precodenum");return"```"+d+`
`+i.preList[c]+"\n```"}),f.subParser("makeMarkdown.codeSpan",function(t){"use strict";return"`"+t.innerHTML+"`"}),f.subParser("makeMarkdown.emphasis",function(t,i){"use strict";var d="";if(t.hasChildNodes()){d+="*";for(var c=t.childNodes,m=c.length,k=0;k<m;++k)d+=f.subParser("makeMarkdown.node")(c[k],i);d+="*"}return d}),f.subParser("makeMarkdown.header",function(t,i,d){"use strict";var c=new Array(d+1).join("#"),m="";if(t.hasChildNodes()){m=c+" ";for(var k=t.childNodes,v=k.length,y=0;y<v;++y)m+=f.subParser("makeMarkdown.node")(k[y],i)}return m}),f.subParser("makeMarkdown.hr",function(){"use strict";return"---"}),f.subParser("makeMarkdown.image",function(t){"use strict";var i="";return t.hasAttribute("src")&&(i+="!["+t.getAttribute("alt")+"](",i+="<"+t.getAttribute("src")+">",t.hasAttribute("width")&&t.hasAttribute("height")&&(i+=" ="+t.getAttribute("width")+"x"+t.getAttribute("height")),t.hasAttribute("title")&&(i+=' "'+t.getAttribute("title")+'"'),i+=")"),i}),f.subParser("makeMarkdown.links",function(t,i){"use strict";var d="";if(t.hasChildNodes()&&t.hasAttribute("href")){var c=t.childNodes,m=c.length;d="[";for(var k=0;k<m;++k)d+=f.subParser("makeMarkdown.node")(c[k],i);d+="](",d+="<"+t.getAttribute("href")+">",t.hasAttribute("title")&&(d+=' "'+t.getAttribute("title")+'"'),d+=")"}return d}),f.subParser("makeMarkdown.list",function(t,i,d){"use strict";var c="";if(!t.hasChildNodes())return"";for(var m=t.childNodes,k=m.length,v=t.getAttribute("start")||1,y=0;y<k;++y)if(!(typeof m[y].tagName>"u"||m[y].tagName.toLowerCase()!=="li")){var w="";d==="ol"?w=v.toString()+". ":w="- ",c+=w+f.subParser("makeMarkdown.listItem")(m[y],i),++v}return c+=`
<!-- -->
`,c.trim()}),f.subParser("makeMarkdown.listItem",function(t,i){"use strict";for(var d="",c=t.childNodes,m=c.length,k=0;k<m;++k)d+=f.subParser("makeMarkdown.node")(c[k],i);return/\n$/.test(d)?d=d.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):d+=`
`,d}),f.subParser("makeMarkdown.node",function(t,i,d){"use strict";d=d||!1;var c="";if(t.nodeType===3)return f.subParser("makeMarkdown.txt")(t,i);if(t.nodeType===8)return"<!--"+t.data+`-->

`;if(t.nodeType!==1)return"";var m=t.tagName.toLowerCase();switch(m){case"h1":d||(c=f.subParser("makeMarkdown.header")(t,i,1)+`

`);break;case"h2":d||(c=f.subParser("makeMarkdown.header")(t,i,2)+`

`);break;case"h3":d||(c=f.subParser("makeMarkdown.header")(t,i,3)+`

`);break;case"h4":d||(c=f.subParser("makeMarkdown.header")(t,i,4)+`

`);break;case"h5":d||(c=f.subParser("makeMarkdown.header")(t,i,5)+`

`);break;case"h6":d||(c=f.subParser("makeMarkdown.header")(t,i,6)+`

`);break;case"p":d||(c=f.subParser("makeMarkdown.paragraph")(t,i)+`

`);break;case"blockquote":d||(c=f.subParser("makeMarkdown.blockquote")(t,i)+`

`);break;case"hr":d||(c=f.subParser("makeMarkdown.hr")(t,i)+`

`);break;case"ol":d||(c=f.subParser("makeMarkdown.list")(t,i,"ol")+`

`);break;case"ul":d||(c=f.subParser("makeMarkdown.list")(t,i,"ul")+`

`);break;case"precode":d||(c=f.subParser("makeMarkdown.codeBlock")(t,i)+`

`);break;case"pre":d||(c=f.subParser("makeMarkdown.pre")(t,i)+`

`);break;case"table":d||(c=f.subParser("makeMarkdown.table")(t,i)+`

`);break;case"code":c=f.subParser("makeMarkdown.codeSpan")(t,i);break;case"em":case"i":c=f.subParser("makeMarkdown.emphasis")(t,i);break;case"strong":case"b":c=f.subParser("makeMarkdown.strong")(t,i);break;case"del":c=f.subParser("makeMarkdown.strikethrough")(t,i);break;case"a":c=f.subParser("makeMarkdown.links")(t,i);break;case"img":c=f.subParser("makeMarkdown.image")(t,i);break;default:c=t.outerHTML+`

`}return c}),f.subParser("makeMarkdown.paragraph",function(t,i){"use strict";var d="";if(t.hasChildNodes())for(var c=t.childNodes,m=c.length,k=0;k<m;++k)d+=f.subParser("makeMarkdown.node")(c[k],i);return d=d.trim(),d}),f.subParser("makeMarkdown.pre",function(t,i){"use strict";var d=t.getAttribute("prenum");return"<pre>"+i.preList[d]+"</pre>"}),f.subParser("makeMarkdown.strikethrough",function(t,i){"use strict";var d="";if(t.hasChildNodes()){d+="~~";for(var c=t.childNodes,m=c.length,k=0;k<m;++k)d+=f.subParser("makeMarkdown.node")(c[k],i);d+="~~"}return d}),f.subParser("makeMarkdown.strong",function(t,i){"use strict";var d="";if(t.hasChildNodes()){d+="**";for(var c=t.childNodes,m=c.length,k=0;k<m;++k)d+=f.subParser("makeMarkdown.node")(c[k],i);d+="**"}return d}),f.subParser("makeMarkdown.table",function(t,i){"use strict";var d="",c=[[],[]],m=t.querySelectorAll("thead>tr>th"),k=t.querySelectorAll("tbody>tr"),v,y;for(v=0;v<m.length;++v){var w=f.subParser("makeMarkdown.tableCell")(m[v],i),g="---";if(m[v].hasAttribute("style")){var p=m[v].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(p){case"text-align:left;":g=":---";break;case"text-align:right;":g="---:";break;case"text-align:center;":g=":---:";break}}c[0][v]=w.trim(),c[1][v]=g}for(v=0;v<k.length;++v){var b=c.push([])-1,h=k[v].getElementsByTagName("td");for(y=0;y<m.length;++y){var R=" ";typeof h[y]<"u"&&(R=f.subParser("makeMarkdown.tableCell")(h[y],i)),c[b].push(R)}}var B=3;for(v=0;v<c.length;++v)for(y=0;y<c[v].length;++y){var D=c[v][y].length;D>B&&(B=D)}for(v=0;v<c.length;++v){for(y=0;y<c[v].length;++y)v===1?c[v][y].slice(-1)===":"?c[v][y]=f.helper.padEnd(c[v][y].slice(-1),B-1,"-")+":":c[v][y]=f.helper.padEnd(c[v][y],B,"-"):c[v][y]=f.helper.padEnd(c[v][y],B);d+="| "+c[v].join(" | ")+` |
`}return d.trim()}),f.subParser("makeMarkdown.tableCell",function(t,i){"use strict";var d="";if(!t.hasChildNodes())return"";for(var c=t.childNodes,m=c.length,k=0;k<m;++k)d+=f.subParser("makeMarkdown.node")(c[k],i,!0);return d.trim()}),f.subParser("makeMarkdown.txt",function(t){"use strict";var i=t.nodeValue;return i=i.replace(/ +/g," "),i=i.replace(/¨NBSP;/g," "),i=f.helper.unescapeHTMLEntities(i),i=i.replace(/([*_~|`])/g,"\\$1"),i=i.replace(/^(\s*)>/g,"\\$1>"),i=i.replace(/^#/gm,"\\#"),i=i.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),i=i.replace(/^( {0,3}\d+)\./gm,"$1\\."),i=i.replace(/^( {0,3})([+-])/gm,"$1\\$2"),i=i.replace(/]([\s]*)\(/g,"\\]$1\\("),i=i.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),i});var Qe=this;typeof define=="function"&&define.amd?define(function(){"use strict";return f}):typeof It<"u"&&It.exports?It.exports=f:Qe.showdown=f}).call(fs)});var ps=bn((x_,hs)=>{pe();var ti=(Ka(),s_(Ya)),_r=Va(),g_=cs(),__=os(),m_=ls(),v_=new m_.Converter,w_=new Date,b_=w_.getFullYear();function xn(s){switch(s.substr(5,2)){case"01":return"January ";case"02":return"February ";case"03":return"March ";case"04":return"April ";case"05":return"May ";case"06":return"June ";case"07":return"July ";case"08":return"August ";case"09":return"September ";case"10":return"October ";case"11":return"November ";case"12":return"December "}}function y_(s){s.basics.summary=v_.makeHtml(s.basics.summary),s.basics.capitalName=s.basics.name.toUpperCase(),s.basics&&s.basics.email&&(s.basics.gravatar=g_.url(s.basics.email,{s:"200",r:"pg",d:"mm"})),(s.basics.image||s.basics.gravatar)&&(s.photo=s.basics.image?s.basics.image:s.basics.gravatar),_r.each(s.basics.profiles,function(P){switch(P.network.toLowerCase().replaceAll(/[^a-z]/gi,"")){case"twitter":case"x":case"xtwitter":case"twitterx":P.iconClass="fab fa-x-twitter";break;case"googleplus":P.iconClass="fab fa-google-plus";break;case"flickr":case"flicker":P.iconClass="fab fa-flickr";break;case"dribbble":case"dribble":P.iconClass="fab fa-dribbble";break;case"codepen":P.iconClass="fab fa-codepen";break;case"soundcloud":P.iconClass="fab fa-soundcloud";break;case"reddit":P.iconClass="fab fa-reddit";break;case"tumblr":case"tumbler":P.iconClass="fab fa-tumblr";break;case"stackoverflow":P.iconClass="fab fa-stack-overflow";break;case"blog":case"rss":case"cover letter".replaceAll(" ",""):case"not a cover letter".replaceAll(" ",""):P.iconClass="fas fa-rss";break;case"gitlab":P.iconClass="fab fa-gitlab";break;case"keybase":P.iconClass="fas fa-key";break;default:P.iconClass="fab fa-"+P.network.toLowerCase()}P.url?P.text=P.url:P.text=P.network+": "+P.username}),s.work&&s.work.length&&(s.workBool=!0,_r.each(s.work,function(P){P.startDate&&(P.startDateYear=(P.startDate||"").substr(0,4),P.startDateMonth=xn(P.startDate||"")),P.endDate?(P.endDateYear=(P.endDate||"").substr(0,4),P.endDateMonth=xn(P.endDate||"")):P.endDateYear="Present",P.highlights&&P.highlights[0]&&P.highlights[0]!=""&&(P.boolHighlights=!0)})),s.volunteer&&s.volunteer.length&&(s.volunteerBool=!0,_r.each(s.volunteer,function(P){P.startDate&&(P.startDateYear=(P.startDate||"").substr(0,4),P.startDateMonth=xn(P.startDate||"")),P.endDate?(P.endDateYear=(P.endDate||"").substr(0,4),P.endDateMonth=xn(P.endDate||"")):P.endDateYear="Present",P.highlights&&P.highlights[0]&&P.highlights[0]!=""&&(P.boolHighlights=!0)})),s.projects&&s.projects.length&&s.projects[0].name&&(s.projectsBool=!0),s.education&&s.education.length&&s.education[0].institution&&(s.educationBool=!0,_r.each(s.education,function(P){!P.area||!P.studyType?P.educationDetail=(P.area==null?"":P.area)+(P.studyType==null?"":P.studyType):P.educationDetail=P.area+", "+P.studyType,P.startDate?(P.startDateYear=P.startDate.substr(0,4),P.startDateMonth=xn(P.startDate||"")):P.endDateMonth="",P.endDate?(P.endDateYear=P.endDate.substr(0,4),P.endDateMonth=xn(P.endDate||""),P.endDateYear>b_&&(P.endDateYear+=" (expected)"),P.endDateYear==P.startDateYear&&(P.endDateYear="")):(P.endDateYear="Present",P.endDateMonth=""),P.courses&&P.courses[0]&&P.courses[0]!=""&&(P.educationCourses=!0)})),s.awards&&s.awards.length&&s.awards[0].title&&(s.awardsBool=!0,_r.each(s.awards,function(P){P.year=(P.date||"").substr(0,4),P.day=(P.date||"").substr(8,2),P.month=xn(P.date||"")})),s.publications&&s.publications.length&&s.publications[0].name&&(s.publicationsBool=!0,_r.each(s.publications,function(P){P.year=(P.releaseDate||"").substr(0,4),P.day=(P.releaseDate||"").substr(8,2),P.month=xn(P.releaseDate||"")})),s.skills&&s.skills.length&&s.skills[0].name&&(s.skillsBool=!0),s.interests&&s.interests.length&&s.interests[0].name&&(s.interestsBool=!0),s.languages&&s.languages.length&&s.languages[0].language&&(s.languagesBool=!0),s.references&&s.references.length&&s.references[0].name&&(s.referencesBool=!0),s.css=ti.readFileSync("//style.css","utf-8"),s.printcss=ti.readFileSync("//print.css","utf-8");let I=process.env.RENDER_TEMPLATE!==void 0?process.env.RENDER_TEMPLATE:"/resume.template";var f=ti.readFileSync("/"+I,"utf8"),N=__.render(f,s);return N}hs.exports={render:y_,pdfRenderOptions:{format:void 0,width:1600/.75,height:"105in",preferCSSPageSize:!0,scale:1/.75,mediaType:"screen"}}});pe();var Jn=a_(ps(),1),gs=Jn.default??Jn,G_=gs.render??Jn.render,q_=gs.pdfRenderOptions??Jn.pdfRenderOptions;export{q_ as pdfRenderOptions,G_ as render};
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

mustache/mustache.js:
  (*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   *)

showdown/dist/showdown.js:
  (*! showdown v 2.1.0 - 21-04-2022 *)
*/
