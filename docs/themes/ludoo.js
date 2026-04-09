var si=Object.create;var oe=Object.defineProperty;var ci=Object.getOwnPropertyDescriptor;var fi=Object.getOwnPropertyNames;var ui=Object.getPrototypeOf,Fi=Object.prototype.hasOwnProperty;var ye=(e,n)=>()=>(e&&(n=e(e=0)),n);var M=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),mi=(e,n)=>{for(var t in n)oe(e,t,{get:n[t],enumerable:!0})},je=(e,n,t,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let d of fi(n))!Fi.call(e,d)&&d!==t&&oe(e,d,{get:()=>n[d],enumerable:!(s=ci(n,d))||s.enumerable});return e};var gi=(e,n,t)=>(t=e!=null?si(ui(e)):{},je(n||!e||!e.__esModule?oe(t,"default",{value:e,enumerable:!0}):t,e)),pi=e=>je(oe({},"__esModule",{value:!0}),e);var h=ye(()=>{});var Re={};mi(Re,{createReadStream:()=>Pe,createWriteStream:()=>De,default:()=>hi,existsSync:()=>Te,lstatSync:()=>Be,mkdirSync:()=>ke,readFileSync:()=>Se,readdirSync:()=>Ae,rmdirSync:()=>Ie,statSync:()=>ue,unlinkSync:()=>Me,writeFileSync:()=>xe});function fe(e){return String(e).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function we(e){var n=fe(e);if(te[n]!==void 0)return te[n];for(var t=Object.keys(te),s=0;s<t.length;s++)if(n.endsWith("/"+t[s])||n===t[s])return te[t[s]]}function ce(e){var n=fe(e);if(re[n]!==void 0)return re[n];for(var t=Object.keys(re),s=0;s<t.length;s++)if(n.endsWith("/"+t[s])||n===t[s])return re[t[s]]}var te,re,Se,Ae,Te,xe,ke,ue,Be,Me,Ie,Pe,De,hi,Ne=ye(()=>{"use strict";h();te={"package.json":`{
  "name": "jsonresume-theme-ludoo",
  "version": "0.0.4",
  "description": "A JSON Resume theme built with bootstrap",
  "main": "index.js",
  "scripts": {
    "create-html": "resume export public/resume.fr.html --format html --theme . --resume resume.fr.json",
    "create-pdf": "resume export public/resume.fr.pdf --format pdf --theme . --resume resume.fr.json",
    "create-all": "npm run create-html && npm run create-pdf",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "Ludovic Valente",
  "license": "MIT",
  "dependencies": {
    "emoji-flags": "^1.3.0",
    "gravatar": "^1.8.2",
    "mustache": "^4.2.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/ludoo0d0a/jsonresume-theme-ludoo.git"
  },
  "keywords": [
    "json",
    "jsonresume",
    "theme"
  ],
  "bugs": {
    "url": "https://github.com/ludoo0d0a/jsonresume-theme-ludoo/issues"
  },
  "homepage": "https://github.com/ludoo0d0a/jsonresume-theme-ludoo"
}
`,"print.css":`body {
  font-size: .95em;
  -webkit-print-color-adjust: exact;
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

.badge {
  margin: 0;
}

.list-group-item{
  border: none;
  margin: 0;
  padding: 5px 15px;
}
.list-group-item:after{
  content: '';
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
<html lang="{{lang}}">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>{{titles.maintitle}}{{basics.name}}</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet"/>
    <style type="text/css">
    {{{css}}}
    </style>
    <style type="text/css" media="print">
    {{{printcss}}}
    </style>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div id="photo-header" class="text-center">
            <!-- PHOTO (AVATAR) -->
            {{#photo}}
            <div id="photo">
              <img src="{{photo}}" alt="avatar"/>
            </div>
            {{/photo}}
            <div id="text-header" {{^photo}}style="margin-top: 90px;"{{/photo}}>
              <h1>{{basics.name}}<br/>{{#basics.label}}<span>{{basics.label}}</span>{{/basics.label}}</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-7">
          {{#basics.summary}}
          <!-- ABOUT ME -->
          <div class="box me">
            <h2><i class="fas fa-user ico"></i> {{titles.about}}</h2>
            <p>{{{basics.summary}}}</p>
          </div>
          {{/basics.summary}}
          {{#workBool}}
          <!-- WORK EXPERIENCE -->
          <div class="box work">
            <h2><i class= "fas fa-suitcase ico"></i> {{titles.work}}</h2>
            {{#work}}
              <div class="job clearfix">
                <div class="row">
                  <div class="details">
                    <div class="where">
                      {{name}}
                      {{#location}}<div class="pull-right">{{location}}</div>{{/location}}
                    </div>
                    {{#description}}<div class="description">{{description}}</div>{{/description}}
                    {{#url}}
                    <div class="address">
                      <a href="{{url}}" target= "_blank"><i class="fas fa-globe ico"></i> {{url}}</a>
                    </div>
                    {{/url}}
                    <div class="year">{{startDateText}}  \u2013 {{endDateText}} <div class="pull-right">{{duration}}</div></div>
                  </div>
                </div>
                <div class="row">
                  <div class="job-details col-xs-11">
                    <div class="profession">{{position}}</div>
                    <div class="description">
                      {{summary}}
                      {{#boolHighlights}}
<!--                      <div class="highlights">{{titles.highlights}}</div>-->
                      <div class="highlight-skills">
                        {{#highlights}}
                        <span class="skill badge">{{{.}}}</span>
                        {{/highlights}}
                      </div>
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
          <div class="box awards">
            <h2><i class="fas fa-certificate ico"></i> {{titles.awards}}</h2>
            <ul id="awards" class="clearfix">
              {{#awards}}
              <li>
                <div class="year pull-left">{{dateText}}</div>
                <div class="description pull-right">
                  <h3>{{awarder}}</h3>
                  <p><i class="fas fa-trophy ico"></i> {{title}}</p>
                  <p>{{summary}}</p>
                </div>
              </li>
              {{/awards}}
            </ul>
          </div>
          {{/awardsBool}}
          {{#volunteerBool}}
          <!-- VOLUNTEER -->
          <div class="box volunteer ">
            <h2><i class= "fas fa-users ico"></i> {{titles.volunteer}}</h2>
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
                    <div class="year">{{startDateText}}  \u2013 {{endDateText}} </div>
                  </div>
                </div>
                <div class="row">
                  <div class="job-details col-xs-11">
                    <div class="profession">{{position}}</div>
                    <div class="description">
                      {{summary}}
                      {{#boolHighlights}}
                      <div class="highlights">{{title.highlights}}</div>
                      <ul class="list-group">
<!--                      <ul class="col-sm-offset-1 col-sm-12 clearfix">-->
                        {{#highlights}}
                        <li class="list-group-item">{{{.}}}</li>
<!--                            <span class="skill badge">{{{.}}}</span>-->
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
          <div class="box projects">
            <h2><i class= "fas fa-code-branch ico"></i> {{titles.projects}}</h2>
            <ul class="list-group">
              {{#projects}}
              <li class="list-group-item">
                <span style="font-weight:bold">
                  {{#url}}
                  <a href="{{url}}">{{name}}</a>
                  {{/url}}
                  {{^url}}{{name}}{{/url}}
                </span>: {{description}}
              </li>
              {{/projects}}
            </ul>
          </div>
          {{/projectsBool}}
        </div>
        <div class="col-xs-12 col-sm-5">
          <!-- CONTACT -->
          <div class="box contact clearfix">
            <h2><i class="fas fa-address-book ico"></i> {{titles.contact}}</h2>
            {{#basics.location}}
            <div class="contact-item location">
              <div class="icon pull-left text-center"><span class="fas fa-map-marker fa-fw"></span></div>
              {{#basics.location.address}}<div class="title pull-right">{{basics.location.address}}</div>{{/basics.location.address}}
              <div class="title {{^basics.location.address}}only {{/basics.location.address}} pull-right">{{basics.location.city}}{{#basics.location.region}}, {{basics.location.region}}{{/basics.location.region}}{{#basics.location.postalCode}} {{basics.location.postalCode}}{{/basics.location.postalCode}}{{#basics.location.countryCode}} {{basics.location.countryCode}}{{/basics.location.countryCode}}</div>
            </div>
            {{/basics.location}}
            {{#basics.phone}}
            <div class="contact-item phone">
              <div class="icon pull-left text-center"><span class="fas fa-phone fa-fw"></span></div>
              <div class="title only pull-right">{{basics.phone}}</div>
            </div>
            {{/basics.phone}}
            {{#basics.email}}
            <div class="contact-item email">
              <div class="icon pull-left text-center"><span class="fas fa-envelope fa-fw"></span></div>
              <div class="title only pull-right"><a href="mailto:{{basics.email}}" target="_blank">{{basics.email}}</a></div>
            </div>
            {{/basics.email}}
            {{#basics.url}}
            <div class="contact-item url">
              <div class="icon pull-left text-center"><span class="fas fa-globe fa-fw"></span></div>
              <div class="title only pull-right"><a href="{{basics.url}}" target="_blank">{{basics.url}}</a></div>
            </div>
            {{/basics.url}}
            {{#basics.profiles}}
            <div class="contact-item profile">
              <div class="icon pull-left text-center"><span class="{{iconClass}} fa-fw"></span></div>
              <div class="title pull-right">{{text}}</div>
              <div class="description pull-right"><a href="{{url}}" target="_blank">{{#username}}{{username}}{{/username}}{{^username}}{{url}}{{/username}}</a></div>
            </div>
            {{/basics.profiles}}
            {{#basics.links}}
            <div class="contact-item link">
              <div class="icon pull-left text-center"><span class="{{iconClass}} fa-fw"></span></div>
              <div class="title only pull-right"><a href="{{url}}" target="_blank">{{text}}</a></div>
            </div>
            {{/basics.links}}

            {{#basics.translationsBool}}
            <div class="contact-item translations">
              <div class="icon pull-left text-center"><span class="fa fa-language fa-fw"></span></div>
              <div class="title only pull-right">
                {{#basics.translations}}
                <a class="translation" aria-label="{{arialabel}}" title="{{arialabel}}" href="{{url}}" target="_blank">{{text}}</a>
                {{/basics.translations}}
              </div>
            </div>
            {{/basics.translationsBool}}
          </div>
          {{#educationBool}}
          <!-- EDUCATION -->
          <div class="box education">
            <h2><i class="fas fa-university ico"></i> {{titles.education}}</h2>
            <ul id="education" class="clearfix">
              {{#education}}
              <li>
                <div class="year pull-left">{{dateText}}</div>
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
          {{#skillsBool}}
          <!-- SKILLS -->
          <div class="box skills">
            <h2><i class="fas fa-tasks ico"></i> {{titles.skills}}</h2>
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
          <div class="box publications">
            <h2><i class="fas fa-book ico"></i> {{titles.publications}}</h2>
            {{#publications}}
            <div class="publication panel panel-default">
              <div class="panel-heading">
                <div class="name panel-title">{{name}}</div>
              </div>
              <div class="panel-body">
                {{#publisher}}
                <div class="publisher"><i class= "fas fa-bookmark ico"></i> {{publisher}}</div>
                {{/publisher}}
                <div class="year">{{dateText}}</div>
                {{#url}}
                <div class="address">
                  <a href="{{url}}" target= "_blank"><i class="fas fa-globe ico"></i> {{url}}</a>
                </div>
                {{/url}}
                {{#summary}}
                <p>{{summary}}</p>
                {{/summary}}
              </div>
            </div>
            {{/publications}}
          </div>
          {{/publicationsBool}}
          {{#languagesBool}}
          <!-- LANGUAGES -->
          <div class="box languages">
            <h2><i class="fas fa-language ico"></i> {{titles.languages}}</h2>
            <ul class="list-group">
              {{#languages}}
              <li class=" list-group-item">{{language}}<span class="skill badge pull-right">{{fluency}}</span></li>
              {{/languages}}
            </ul>
          </div>
          {{/languagesBool}}
          {{#interestsBool}}
          <!-- HOBBIES -->
          <div class="box hobbies">
            <h2><i class="fas fa-heart ico"></i> {{titles.interests}}</h2>
            {{#interests}}
            <div class="interests clearfix">
              <div class="item-interests">
                  {{name}}
              </div>
              <div class="col-sm-12 clearfix">
                {{#keywords}}
                <span class= "interest badge">{{{.}}}</span>
                {{/keywords}}
              </div>
            </div>
            {{/interests}}
          </div>
          {{/interestsBool}}
          {{#referencesBool}}
          <div class="box references">
            <h2><i class= "fas fa-check-square ico"></i> {{titles.references}}</h2>
            {{#references}}
            <blockquote>
              <div>{{{reference}}}</div>
              <footer>
                {{#url}}<a href="{{url}}" target= "_blank">{{name}}</a>{{/url}}
                {{^url}}{{name}}{{/url}}
              </footer>
            </blockquote><br/>
            {{/references}}
          </div>
          {{/referencesBool}}
        </div>
      </div>
    </div>
  </body>
</html>
`,"style.css":`@charset "utf-8";
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800);
@-webkit-viewport   { width: device-width; }
@-moz-viewport      { width: device-width; }
@-ms-viewport       { width: device-width; }
@-o-viewport        { width: device-width; }
@viewport           { width: device-width; }

body{
  font-family: 'Open Sans', Arial, Tahoma, serif;
  font-weight: 400;
  color: #363636;
  background: #334960;
}
blockquote {
  font-size: 1em;
}

.container{
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
  text-transform: uppercase;
  letter-spacing: -1px;
}
#text-header h1::first-line{
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1.5em;
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
  background: #32475c;
  background: -moz-linear-gradient(top,  #ffffff 0%, #32475c 7%, #32475c 89%, #ffffff 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(7%,#32475c), color-stop(89%,#32475c), color-stop(100%,#ffffff));
  background: -webkit-linear-gradient(top,  #ffffff 0%,#32475c 7%,#32475c 89%,#ffffff 100%);
  background: -o-linear-gradient(top,  #ffffff 0%,#32475c 7%,#32475c 89%,#ffffff 100%);
  background: -ms-linear-gradient(top,  #ffffff 0%,#32475c 7%,#32475c 89%,#ffffff 100%);
  background: linear-gradient(to bottom,  #ffffff 0%,#32475c 7%,#32475c 89%,#ffffff 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0 );
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
  content: '';
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
.job .highlight-skills{
  padding: 5px 0;
}
.job .job-details {
  padding-left: 5%;
  width: 100%;
}
.publication {
  margin-bottom: 10px;
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

.contact .translation{
  padding-left: 5px;
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
`},re={".":["LICENSE","README.md","index.js","package.json","print.css","resume.template","style.css","test.js"]};Se=function(e,n){var t=we(e);return t!==void 0?t:""},Ae=function(e,n){var t=ce(e);return t===void 0&&(t=[]),n&&n.withFileTypes?t.map(function(s){var d=fe(e)+"/"+s,f=ce(d)!==void 0;return{name:s,isFile:function(){return!f},isDirectory:function(){return f}}}):t},Te=function(e){return we(e)!==void 0||ce(e)!==void 0},xe=function(){},ke=function(){},ue=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Be=ue,Me=function(){},Ie=function(){},Pe=function(){return{pipe:function(e){return e},on:function(){return this}}},De=function(){return{write:function(){},end:function(){},on:function(){return this}}},hi={readFileSync:Se,readdirSync:Ae,existsSync:Te,writeFileSync:xe,mkdirSync:ke,statSync:ue,lstatSync:Be,unlinkSync:Me,rmdirSync:Ie,createReadStream:Pe,createWriteStream:De}});var Le=M((Ge,le)=>{h();(function(e){"use strict";function n(c,g){var l=(c&65535)+(g&65535),U=(c>>16)+(g>>16)+(l>>16);return U<<16|l&65535}function t(c,g){return c<<g|c>>>32-g}function s(c,g,l,U,b,P){return n(t(n(n(g,c),n(U,P)),b),l)}function d(c,g,l,U,b,P,F){return s(g&l|~g&U,c,g,b,P,F)}function f(c,g,l,U,b,P,F){return s(g&U|l&~U,c,g,b,P,F)}function m(c,g,l,U,b,P,F){return s(g^l^U,c,g,b,P,F)}function p(c,g,l,U,b,P,F){return s(l^(g|~U),c,g,b,P,F)}function E(c,g){c[g>>5]|=128<<g%32,c[(g+64>>>9<<4)+14]=g;var l,U,b,P,F,i=1732584193,a=-271733879,o=-1732584194,r=271733878;for(l=0;l<c.length;l+=16)U=i,b=a,P=o,F=r,i=d(i,a,o,r,c[l],7,-680876936),r=d(r,i,a,o,c[l+1],12,-389564586),o=d(o,r,i,a,c[l+2],17,606105819),a=d(a,o,r,i,c[l+3],22,-1044525330),i=d(i,a,o,r,c[l+4],7,-176418897),r=d(r,i,a,o,c[l+5],12,1200080426),o=d(o,r,i,a,c[l+6],17,-1473231341),a=d(a,o,r,i,c[l+7],22,-45705983),i=d(i,a,o,r,c[l+8],7,1770035416),r=d(r,i,a,o,c[l+9],12,-1958414417),o=d(o,r,i,a,c[l+10],17,-42063),a=d(a,o,r,i,c[l+11],22,-1990404162),i=d(i,a,o,r,c[l+12],7,1804603682),r=d(r,i,a,o,c[l+13],12,-40341101),o=d(o,r,i,a,c[l+14],17,-1502002290),a=d(a,o,r,i,c[l+15],22,1236535329),i=f(i,a,o,r,c[l+1],5,-165796510),r=f(r,i,a,o,c[l+6],9,-1069501632),o=f(o,r,i,a,c[l+11],14,643717713),a=f(a,o,r,i,c[l],20,-373897302),i=f(i,a,o,r,c[l+5],5,-701558691),r=f(r,i,a,o,c[l+10],9,38016083),o=f(o,r,i,a,c[l+15],14,-660478335),a=f(a,o,r,i,c[l+4],20,-405537848),i=f(i,a,o,r,c[l+9],5,568446438),r=f(r,i,a,o,c[l+14],9,-1019803690),o=f(o,r,i,a,c[l+3],14,-187363961),a=f(a,o,r,i,c[l+8],20,1163531501),i=f(i,a,o,r,c[l+13],5,-1444681467),r=f(r,i,a,o,c[l+2],9,-51403784),o=f(o,r,i,a,c[l+7],14,1735328473),a=f(a,o,r,i,c[l+12],20,-1926607734),i=m(i,a,o,r,c[l+5],4,-378558),r=m(r,i,a,o,c[l+8],11,-2022574463),o=m(o,r,i,a,c[l+11],16,1839030562),a=m(a,o,r,i,c[l+14],23,-35309556),i=m(i,a,o,r,c[l+1],4,-1530992060),r=m(r,i,a,o,c[l+4],11,1272893353),o=m(o,r,i,a,c[l+7],16,-155497632),a=m(a,o,r,i,c[l+10],23,-1094730640),i=m(i,a,o,r,c[l+13],4,681279174),r=m(r,i,a,o,c[l],11,-358537222),o=m(o,r,i,a,c[l+3],16,-722521979),a=m(a,o,r,i,c[l+6],23,76029189),i=m(i,a,o,r,c[l+9],4,-640364487),r=m(r,i,a,o,c[l+12],11,-421815835),o=m(o,r,i,a,c[l+15],16,530742520),a=m(a,o,r,i,c[l+2],23,-995338651),i=p(i,a,o,r,c[l],6,-198630844),r=p(r,i,a,o,c[l+7],10,1126891415),o=p(o,r,i,a,c[l+14],15,-1416354905),a=p(a,o,r,i,c[l+5],21,-57434055),i=p(i,a,o,r,c[l+12],6,1700485571),r=p(r,i,a,o,c[l+3],10,-1894986606),o=p(o,r,i,a,c[l+10],15,-1051523),a=p(a,o,r,i,c[l+1],21,-2054922799),i=p(i,a,o,r,c[l+8],6,1873313359),r=p(r,i,a,o,c[l+15],10,-30611744),o=p(o,r,i,a,c[l+6],15,-1560198380),a=p(a,o,r,i,c[l+13],21,1309151649),i=p(i,a,o,r,c[l+4],6,-145523070),r=p(r,i,a,o,c[l+11],10,-1120210379),o=p(o,r,i,a,c[l+2],15,718787259),a=p(a,o,r,i,c[l+9],21,-343485551),i=n(i,U),a=n(a,b),o=n(o,P),r=n(r,F);return[i,a,o,r]}function T(c){var g,l="",U=c.length*32;for(g=0;g<U;g+=8)l+=String.fromCharCode(c[g>>5]>>>g%32&255);return l}function y(c){var g,l=[];for(l[(c.length>>2)-1]=void 0,g=0;g<l.length;g+=1)l[g]=0;var U=c.length*8;for(g=0;g<U;g+=8)l[g>>5]|=(c.charCodeAt(g/8)&255)<<g%32;return l}function B(c){return T(E(y(c),c.length*8))}function j(c,g){var l,U=y(c),b=[],P=[],F;for(b[15]=P[15]=void 0,U.length>16&&(U=E(U,c.length*8)),l=0;l<16;l+=1)b[l]=U[l]^909522486,P[l]=U[l]^1549556828;return F=E(b.concat(y(g)),512+g.length*8),T(E(P.concat(F),640))}function x(c){var g="0123456789abcdef",l="",U,b;for(b=0;b<c.length;b+=1)U=c.charCodeAt(b),l+=g.charAt(U>>>4&15)+g.charAt(U&15);return l}function D(c){return unescape(encodeURIComponent(c))}function L(c){return B(D(c))}function _(c){return x(L(c))}function u(c,g){return j(D(c),D(g))}function A(c,g){return x(u(c,g))}function R(c,g,l){return g?l?u(g,c):A(g,c):l?L(c):_(c)}typeof define=="function"&&define.amd?define(function(){return R}):typeof le=="object"&&le.exports?le.exports=R:e.md5=R})(Ge)});var qe=M((tt,Ke)=>{"use strict";h();function Ui(e,n){return Object.prototype.hasOwnProperty.call(e,n)}Ke.exports=function(e,n,t,s){n=n||"&",t=t||"=";var d={};if(typeof e!="string"||e.length===0)return d;var f=/\+/g;e=e.split(n);var m=1e3;s&&typeof s.maxKeys=="number"&&(m=s.maxKeys);var p=e.length;m>0&&p>m&&(p=m);for(var E=0;E<p;++E){var T=e[E].replace(f,"%20"),y=T.indexOf(t),B,j,x,D;y>=0?(B=T.substr(0,y),j=T.substr(y+1)):(B=T,j=""),x=decodeURIComponent(B),D=decodeURIComponent(j),Ui(d,x)?Array.isArray(d[x])?d[x].push(D):d[x]=[d[x],D]:d[x]=D}return d}});var Oe=M((lt,_e)=>{"use strict";h();var Q=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};_e.exports=function(e,n,t,s){return n=n||"&",t=t||"=",e===null&&(e=void 0),typeof e=="object"?Object.keys(e).map(function(d){var f=encodeURIComponent(Q(d))+t;return Array.isArray(e[d])?e[d].map(function(m){return f+encodeURIComponent(Q(m))}).join(n):f+encodeURIComponent(Q(e[d]))}).join(n):s?encodeURIComponent(Q(s))+t+encodeURIComponent(Q(e)):""}});var He=M(ee=>{"use strict";h();ee.decode=ee.parse=qe();ee.encode=ee.stringify=Oe()});var Ye=M((ut,$e)=>{h();var vi=Le(),Ci=He(),bi=/^[0-9a-f]{32}$/;function Ei(e){var n={},t={protocol:1,format:1};for(var s in e)t[s]||(n[s]=e[s]);return n}function ze(e,n){if(e)return typeof e.protocol=="boolean"?e.protocol:e.protocol==="http"?!1:e.protocol==="https"?!0:void 0}function We(e){return e=typeof e=="string"?e.trim().toLowerCase():"unspecified",e.match(bi)?e:vi(e)}function Je(e){var n=Ci.stringify(Ei(e));return n&&"?"+n||""}var ft=$e.exports={url:function(e,n,t){var s="//www.gravatar.com/avatar/";n&&n.cdn?(s=n.cdn+"/avatar/",delete n.cdn):(n&&n.protocol&&(t=ze(n)),typeof t<"u"&&(s=t?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var d=Je(n);return s+We(e)+d},profile_url:function(e,n,t){var s=n!=null&&n.format!=null?String(n.format):"json",d;if(n&&n.cdn)d=n.cdn+"/",delete n.cdn;else{n&&n.protocol&&(t=ze(n));var d=t&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var f=Je(n);return d+We(e)+"."+s+f}}});var Ve=M((mt,Ze)=>{h();Ze.exports=Ye()});var Xe=M((Fe,me)=>{h();(function(e,n){typeof Fe=="object"&&typeof me<"u"?me.exports=n():typeof define=="function"&&define.amd?define(n):(e=e||self,e.Mustache=n())})(Fe,(function(){"use strict";var e=Object.prototype.toString,n=Array.isArray||function(i){return e.call(i)==="[object Array]"};function t(F){return typeof F=="function"}function s(F){return n(F)?"array":typeof F}function d(F){return F.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function f(F,i){return F!=null&&typeof F=="object"&&i in F}function m(F,i){return F!=null&&typeof F!="object"&&F.hasOwnProperty&&F.hasOwnProperty(i)}var p=RegExp.prototype.test;function E(F,i){return p.call(F,i)}var T=/\S/;function y(F){return!E(T,F)}var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function j(F){return String(F).replace(/[&<>"'`=\/]/g,function(a){return B[a]})}var x=/\s*/,D=/\s+/,L=/\s*=/,_=/\s*\}/,u=/#|\^|\/|>|\{|&|=|!/;function A(F,i){if(!F)return[];var a=!1,o=[],r=[],v=[],C=!1,w=!1,S="",N=0;function K(){if(C&&!w)for(;v.length;)delete r[v.pop()];else v=[];C=!1,w=!1}var H,J,be;function Ee(z){if(typeof z=="string"&&(z=z.split(D,2)),!n(z)||z.length!==2)throw new Error("Invalid tags: "+z);H=new RegExp(d(z[0])+"\\s*"),J=new RegExp("\\s*"+d(z[1])),be=new RegExp("\\s*"+d("}"+z[1]))}Ee(i||b.tags);for(var G=new g(F),W,q,O,X,ae,$;!G.eos();){if(W=G.pos,O=G.scanUntil(H),O)for(var se=0,di=O.length;se<di;++se)X=O.charAt(se),y(X)?(v.push(r.length),S+=X):(w=!0,a=!0,S+=" "),r.push(["text",X,W,W+1]),W+=1,X===`
`&&(K(),S="",N=0,a=!1);if(!G.scan(H))break;if(C=!0,q=G.scan(u)||"name",G.scan(x),q==="="?(O=G.scanUntil(L),G.scan(L),G.scanUntil(J)):q==="{"?(O=G.scanUntil(be),G.scan(_),G.scanUntil(J),q="&"):O=G.scanUntil(J),!G.scan(J))throw new Error("Unclosed tag at "+G.pos);if(q==">"?ae=[q,O,W,G.pos,S,N,a]:ae=[q,O,W,G.pos],N++,r.push(ae),q==="#"||q==="^")o.push(ae);else if(q==="/"){if($=o.pop(),!$)throw new Error('Unopened section "'+O+'" at '+W);if($[1]!==O)throw new Error('Unclosed section "'+$[1]+'" at '+W)}else q==="name"||q==="{"||q==="&"?w=!0:q==="="&&Ee(O)}if(K(),$=o.pop(),$)throw new Error('Unclosed section "'+$[1]+'" at '+G.pos);return c(R(r))}function R(F){for(var i=[],a,o,r=0,v=F.length;r<v;++r)a=F[r],a&&(a[0]==="text"&&o&&o[0]==="text"?(o[1]+=a[1],o[3]=a[3]):(i.push(a),o=a));return i}function c(F){for(var i=[],a=i,o=[],r,v,C=0,w=F.length;C<w;++C)switch(r=F[C],r[0]){case"#":case"^":a.push(r),o.push(r),a=r[4]=[];break;case"/":v=o.pop(),v[5]=r[2],a=o.length>0?o[o.length-1][4]:i;break;default:a.push(r)}return i}function g(F){this.string=F,this.tail=F,this.pos=0}g.prototype.eos=function(){return this.tail===""},g.prototype.scan=function(i){var a=this.tail.match(i);if(!a||a.index!==0)return"";var o=a[0];return this.tail=this.tail.substring(o.length),this.pos+=o.length,o},g.prototype.scanUntil=function(i){var a=this.tail.search(i),o;switch(a){case-1:o=this.tail,this.tail="";break;case 0:o="";break;default:o=this.tail.substring(0,a),this.tail=this.tail.substring(a)}return this.pos+=o.length,o};function l(F,i){this.view=F,this.cache={".":this.view},this.parent=i}l.prototype.push=function(i){return new l(i,this)},l.prototype.lookup=function(i){var a=this.cache,o;if(a.hasOwnProperty(i))o=a[i];else{for(var r=this,v,C,w,S=!1;r;){if(i.indexOf(".")>0)for(v=r.view,C=i.split("."),w=0;v!=null&&w<C.length;)w===C.length-1&&(S=f(v,C[w])||m(v,C[w])),v=v[C[w++]];else v=r.view[i],S=f(r.view,i);if(S){o=v;break}r=r.parent}a[i]=o}return t(o)&&(o=o.call(this.view)),o};function U(){this.templateCache={_cache:{},set:function(i,a){this._cache[i]=a},get:function(i){return this._cache[i]},clear:function(){this._cache={}}}}U.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()},U.prototype.parse=function(i,a){var o=this.templateCache,r=i+":"+(a||b.tags).join(":"),v=typeof o<"u",C=v?o.get(r):void 0;return C==null&&(C=A(i,a),v&&o.set(r,C)),C},U.prototype.render=function(i,a,o,r){var v=this.getConfigTags(r),C=this.parse(i,v),w=a instanceof l?a:new l(a,void 0);return this.renderTokens(C,w,o,i,r)},U.prototype.renderTokens=function(i,a,o,r,v){for(var C="",w,S,N,K=0,H=i.length;K<H;++K)N=void 0,w=i[K],S=w[0],S==="#"?N=this.renderSection(w,a,o,r,v):S==="^"?N=this.renderInverted(w,a,o,r,v):S===">"?N=this.renderPartial(w,a,o,v):S==="&"?N=this.unescapedValue(w,a):S==="name"?N=this.escapedValue(w,a,v):S==="text"&&(N=this.rawValue(w)),N!==void 0&&(C+=N);return C},U.prototype.renderSection=function(i,a,o,r,v){var C=this,w="",S=a.lookup(i[1]);function N(J){return C.render(J,a,o,v)}if(S){if(n(S))for(var K=0,H=S.length;K<H;++K)w+=this.renderTokens(i[4],a.push(S[K]),o,r,v);else if(typeof S=="object"||typeof S=="string"||typeof S=="number")w+=this.renderTokens(i[4],a.push(S),o,r,v);else if(t(S)){if(typeof r!="string")throw new Error("Cannot use higher-order sections without the original template");S=S.call(a.view,r.slice(i[3],i[5]),N),S!=null&&(w+=S)}else w+=this.renderTokens(i[4],a,o,r,v);return w}},U.prototype.renderInverted=function(i,a,o,r,v){var C=a.lookup(i[1]);if(!C||n(C)&&C.length===0)return this.renderTokens(i[4],a,o,r,v)},U.prototype.indentPartial=function(i,a,o){for(var r=a.replace(/[^ \t]/g,""),v=i.split(`
`),C=0;C<v.length;C++)v[C].length&&(C>0||!o)&&(v[C]=r+v[C]);return v.join(`
`)},U.prototype.renderPartial=function(i,a,o,r){if(o){var v=this.getConfigTags(r),C=t(o)?o(i[1]):o[i[1]];if(C!=null){var w=i[6],S=i[5],N=i[4],K=C;S==0&&N&&(K=this.indentPartial(C,N,w));var H=this.parse(K,v);return this.renderTokens(H,a,o,K,r)}}},U.prototype.unescapedValue=function(i,a){var o=a.lookup(i[1]);if(o!=null)return o},U.prototype.escapedValue=function(i,a,o){var r=this.getConfigEscape(o)||b.escape,v=a.lookup(i[1]);if(v!=null)return typeof v=="number"&&r===b.escape?String(v):r(v)},U.prototype.rawValue=function(i){return i[1]},U.prototype.getConfigTags=function(i){return n(i)?i:i&&typeof i=="object"?i.tags:void 0},U.prototype.getConfigEscape=function(i){if(i&&typeof i=="object"&&!n(i))return i.escape};var b={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(F){P.templateCache=F},get templateCache(){return P.templateCache}},P=new U;return b.clearCache=function(){return P.clearCache()},b.parse=function(i,a){return P.parse(i,a)},b.render=function(i,a,o,r){if(typeof i!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+s(i)+'" was given as the first argument for mustache#render(template, view, partials)');return P.render(i,a,o,r)},b.escape=j,b.Scanner=g,b.Context=l,b.Writer=U,b}))});var Qe=M((ht,yi)=>{yi.exports=[{code:"AD",emoji:"\u{1F1E6}\u{1F1E9}",unicode:"U+1F1E6 U+1F1E9",name:"Andorra",title:"flag for Andorra",dialCode:"+376"},{code:"AE",emoji:"\u{1F1E6}\u{1F1EA}",unicode:"U+1F1E6 U+1F1EA",name:"United Arab Emirates",title:"flag for United Arab Emirates",dialCode:"+971"},{code:"AF",emoji:"\u{1F1E6}\u{1F1EB}",unicode:"U+1F1E6 U+1F1EB",name:"Afghanistan",title:"flag for Afghanistan",dialCode:"+93"},{code:"AG",emoji:"\u{1F1E6}\u{1F1EC}",unicode:"U+1F1E6 U+1F1EC",name:"Antigua and Barbuda",title:"flag for Antigua and Barbuda",dialCode:"+1268"},{code:"AI",emoji:"\u{1F1E6}\u{1F1EE}",unicode:"U+1F1E6 U+1F1EE",name:"Anguilla",title:"flag for Anguilla",dialCode:"+1 264"},{code:"AL",emoji:"\u{1F1E6}\u{1F1F1}",unicode:"U+1F1E6 U+1F1F1",name:"Albania",title:"flag for Albania",dialCode:"+355"},{code:"AM",emoji:"\u{1F1E6}\u{1F1F2}",unicode:"U+1F1E6 U+1F1F2",name:"Armenia",title:"flag for Armenia",dialCode:"+374"},{code:"AO",emoji:"\u{1F1E6}\u{1F1F4}",unicode:"U+1F1E6 U+1F1F4",name:"Angola",title:"flag for Angola",dialCode:"+244"},{code:"AQ",emoji:"\u{1F1E6}\u{1F1F6}",unicode:"U+1F1E6 U+1F1F6",name:"Antarctica",title:"flag for Antarctica",dialCode:null},{code:"AR",emoji:"\u{1F1E6}\u{1F1F7}",unicode:"U+1F1E6 U+1F1F7",name:"Argentina",title:"flag for Argentina",dialCode:"+54"},{code:"AS",emoji:"\u{1F1E6}\u{1F1F8}",unicode:"U+1F1E6 U+1F1F8",name:"American Samoa",title:"flag for American Samoa",dialCode:"+1 684"},{code:"AT",emoji:"\u{1F1E6}\u{1F1F9}",unicode:"U+1F1E6 U+1F1F9",name:"Austria",title:"flag for Austria",dialCode:"+43"},{code:"AU",emoji:"\u{1F1E6}\u{1F1FA}",unicode:"U+1F1E6 U+1F1FA",name:"Australia",title:"flag for Australia",dialCode:"+61"},{code:"AW",emoji:"\u{1F1E6}\u{1F1FC}",unicode:"U+1F1E6 U+1F1FC",name:"Aruba",title:"flag for Aruba",dialCode:"+297"},{code:"AX",emoji:"\u{1F1E6}\u{1F1FD}",unicode:"U+1F1E6 U+1F1FD",name:"\xC5land Islands",title:"flag for \xC5land Islands",dialCode:""},{code:"AZ",emoji:"\u{1F1E6}\u{1F1FF}",unicode:"U+1F1E6 U+1F1FF",name:"Azerbaijan",title:"flag for Azerbaijan",dialCode:"+994"},{code:"BA",emoji:"\u{1F1E7}\u{1F1E6}",unicode:"U+1F1E7 U+1F1E6",name:"Bosnia and Herzegovina",title:"flag for Bosnia and Herzegovina",dialCode:"+387"},{code:"BB",emoji:"\u{1F1E7}\u{1F1E7}",unicode:"U+1F1E7 U+1F1E7",name:"Barbados",title:"flag for Barbados",dialCode:"+1 246"},{code:"BD",emoji:"\u{1F1E7}\u{1F1E9}",unicode:"U+1F1E7 U+1F1E9",name:"Bangladesh",title:"flag for Bangladesh",dialCode:"+880"},{code:"BE",emoji:"\u{1F1E7}\u{1F1EA}",unicode:"U+1F1E7 U+1F1EA",name:"Belgium",title:"flag for Belgium",dialCode:"+32"},{code:"BF",emoji:"\u{1F1E7}\u{1F1EB}",unicode:"U+1F1E7 U+1F1EB",name:"Burkina Faso",title:"flag for Burkina Faso",dialCode:"+226"},{code:"BG",emoji:"\u{1F1E7}\u{1F1EC}",unicode:"U+1F1E7 U+1F1EC",name:"Bulgaria",title:"flag for Bulgaria",dialCode:"+359"},{code:"BH",emoji:"\u{1F1E7}\u{1F1ED}",unicode:"U+1F1E7 U+1F1ED",name:"Bahrain",title:"flag for Bahrain",dialCode:"+973"},{code:"BI",emoji:"\u{1F1E7}\u{1F1EE}",unicode:"U+1F1E7 U+1F1EE",name:"Burundi",title:"flag for Burundi",dialCode:"+257"},{code:"BJ",emoji:"\u{1F1E7}\u{1F1EF}",unicode:"U+1F1E7 U+1F1EF",name:"Benin",title:"flag for Benin",dialCode:"+229"},{code:"BL",emoji:"\u{1F1E7}\u{1F1F1}",unicode:"U+1F1E7 U+1F1F1",name:"Saint Barth\xE9lemy",title:"flag for Saint Barth\xE9lemy",dialCode:"+590"},{code:"BM",emoji:"\u{1F1E7}\u{1F1F2}",unicode:"U+1F1E7 U+1F1F2",name:"Bermuda",title:"flag for Bermuda",dialCode:"+1 441"},{code:"BN",emoji:"\u{1F1E7}\u{1F1F3}",unicode:"U+1F1E7 U+1F1F3",name:"Brunei Darussalam",title:"flag for Brunei Darussalam",dialCode:"+673"},{code:"BO",emoji:"\u{1F1E7}\u{1F1F4}",unicode:"U+1F1E7 U+1F1F4",name:"Bolivia",title:"flag for Bolivia",dialCode:"+591"},{code:"BQ",emoji:"\u{1F1E7}\u{1F1F6}",unicode:"U+1F1E7 U+1F1F6",name:"Bonaire, Sint Eustatius and Saba",title:"flag for Bonaire, Sint Eustatius and Saba"},{code:"BR",emoji:"\u{1F1E7}\u{1F1F7}",unicode:"U+1F1E7 U+1F1F7",name:"Brazil",title:"flag for Brazil",dialCode:"+55"},{code:"BS",emoji:"\u{1F1E7}\u{1F1F8}",unicode:"U+1F1E7 U+1F1F8",name:"Bahamas",title:"flag for Bahamas",dialCode:"+1 242"},{code:"BT",emoji:"\u{1F1E7}\u{1F1F9}",unicode:"U+1F1E7 U+1F1F9",name:"Bhutan",title:"flag for Bhutan",dialCode:"+975"},{code:"BV",emoji:"\u{1F1E7}\u{1F1FB}",unicode:"U+1F1E7 U+1F1FB",name:"Bouvet Island",title:"flag for Bouvet Island"},{code:"BW",emoji:"\u{1F1E7}\u{1F1FC}",unicode:"U+1F1E7 U+1F1FC",name:"Botswana",title:"flag for Botswana",dialCode:"+267"},{code:"BY",emoji:"\u{1F1E7}\u{1F1FE}",unicode:"U+1F1E7 U+1F1FE",name:"Belarus",title:"flag for Belarus",dialCode:"+375"},{code:"BZ",emoji:"\u{1F1E7}\u{1F1FF}",unicode:"U+1F1E7 U+1F1FF",name:"Belize",title:"flag for Belize",dialCode:"+501"},{code:"CA",emoji:"\u{1F1E8}\u{1F1E6}",unicode:"U+1F1E8 U+1F1E6",name:"Canada",title:"flag for Canada",dialCode:"+1"},{code:"CC",emoji:"\u{1F1E8}\u{1F1E8}",unicode:"U+1F1E8 U+1F1E8",name:"Cocos (Keeling) Islands",title:"flag for Cocos (Keeling) Islands",dialCode:"+61"},{code:"CD",emoji:"\u{1F1E8}\u{1F1E9}",unicode:"U+1F1E8 U+1F1E9",name:"Congo",title:"flag for Congo",dialCode:"+243"},{code:"CF",emoji:"\u{1F1E8}\u{1F1EB}",unicode:"U+1F1E8 U+1F1EB",name:"Central African Republic",title:"flag for Central African Republic",dialCode:"+236"},{code:"CG",emoji:"\u{1F1E8}\u{1F1EC}",unicode:"U+1F1E8 U+1F1EC",name:"Congo",title:"flag for Congo",dialCode:"+242"},{code:"CH",emoji:"\u{1F1E8}\u{1F1ED}",unicode:"U+1F1E8 U+1F1ED",name:"Switzerland",title:"flag for Switzerland",dialCode:"+41"},{code:"CI",emoji:"\u{1F1E8}\u{1F1EE}",unicode:"U+1F1E8 U+1F1EE",name:"C\xF4te D'Ivoire",title:"flag for C\xF4te D'Ivoire",dialCode:"+225"},{code:"CK",emoji:"\u{1F1E8}\u{1F1F0}",unicode:"U+1F1E8 U+1F1F0",name:"Cook Islands",title:"flag for Cook Islands",dialCode:"+682"},{code:"CL",emoji:"\u{1F1E8}\u{1F1F1}",unicode:"U+1F1E8 U+1F1F1",name:"Chile",title:"flag for Chile",dialCode:"+56"},{code:"CM",emoji:"\u{1F1E8}\u{1F1F2}",unicode:"U+1F1E8 U+1F1F2",name:"Cameroon",title:"flag for Cameroon",dialCode:"+237"},{code:"CN",emoji:"\u{1F1E8}\u{1F1F3}",unicode:"U+1F1E8 U+1F1F3",name:"China",title:"flag for China",dialCode:"+86"},{code:"CO",emoji:"\u{1F1E8}\u{1F1F4}",unicode:"U+1F1E8 U+1F1F4",name:"Colombia",title:"flag for Colombia",dialCode:"+57"},{code:"CR",emoji:"\u{1F1E8}\u{1F1F7}",unicode:"U+1F1E8 U+1F1F7",name:"Costa Rica",title:"flag for Costa Rica",dialCode:"+506"},{code:"CU",emoji:"\u{1F1E8}\u{1F1FA}",unicode:"U+1F1E8 U+1F1FA",name:"Cuba",title:"flag for Cuba",dialCode:"+53"},{code:"CV",emoji:"\u{1F1E8}\u{1F1FB}",unicode:"U+1F1E8 U+1F1FB",name:"Cape Verde",title:"flag for Cape Verde",dialCode:"+238"},{code:"CW",emoji:"\u{1F1E8}\u{1F1FC}",unicode:"U+1F1E8 U+1F1FC",name:"Cura\xE7ao",title:"flag for Cura\xE7ao"},{code:"CX",emoji:"\u{1F1E8}\u{1F1FD}",unicode:"U+1F1E8 U+1F1FD",name:"Christmas Island",title:"flag for Christmas Island",dialCode:"+61"},{code:"CY",emoji:"\u{1F1E8}\u{1F1FE}",unicode:"U+1F1E8 U+1F1FE",name:"Cyprus",title:"flag for Cyprus",dialCode:"+537"},{code:"CZ",emoji:"\u{1F1E8}\u{1F1FF}",unicode:"U+1F1E8 U+1F1FF",name:"Czech Republic",title:"flag for Czech Republic",dialCode:"+420"},{code:"DE",emoji:"\u{1F1E9}\u{1F1EA}",unicode:"U+1F1E9 U+1F1EA",name:"Germany",title:"flag for Germany",dialCode:"+49"},{code:"DJ",emoji:"\u{1F1E9}\u{1F1EF}",unicode:"U+1F1E9 U+1F1EF",name:"Djibouti",title:"flag for Djibouti",dialCode:"+253"},{code:"DK",emoji:"\u{1F1E9}\u{1F1F0}",unicode:"U+1F1E9 U+1F1F0",name:"Denmark",title:"flag for Denmark",dialCode:"+45"},{code:"DM",emoji:"\u{1F1E9}\u{1F1F2}",unicode:"U+1F1E9 U+1F1F2",name:"Dominica",title:"flag for Dominica",dialCode:"+1 767"},{code:"DO",emoji:"\u{1F1E9}\u{1F1F4}",unicode:"U+1F1E9 U+1F1F4",name:"Dominican Republic",title:"flag for Dominican Republic",dialCode:"+1 849"},{code:"DZ",emoji:"\u{1F1E9}\u{1F1FF}",unicode:"U+1F1E9 U+1F1FF",name:"Algeria",title:"flag for Algeria",dialCode:"+213"},{code:"EC",emoji:"\u{1F1EA}\u{1F1E8}",unicode:"U+1F1EA U+1F1E8",name:"Ecuador",title:"flag for Ecuador",dialCode:"+593"},{code:"EE",emoji:"\u{1F1EA}\u{1F1EA}",unicode:"U+1F1EA U+1F1EA",name:"Estonia",title:"flag for Estonia",dialCode:"+372"},{code:"EG",emoji:"\u{1F1EA}\u{1F1EC}",unicode:"U+1F1EA U+1F1EC",name:"Egypt",title:"flag for Egypt",dialCode:"+20"},{code:"EH",emoji:"\u{1F1EA}\u{1F1ED}",unicode:"U+1F1EA U+1F1ED",name:"Western Sahara",title:"flag for Western Sahara"},{code:"ER",emoji:"\u{1F1EA}\u{1F1F7}",unicode:"U+1F1EA U+1F1F7",name:"Eritrea",title:"flag for Eritrea",dialCode:"+291"},{code:"ES",emoji:"\u{1F1EA}\u{1F1F8}",unicode:"U+1F1EA U+1F1F8",name:"Spain",title:"flag for Spain",dialCode:"+34"},{code:"ET",emoji:"\u{1F1EA}\u{1F1F9}",unicode:"U+1F1EA U+1F1F9",name:"Ethiopia",title:"flag for Ethiopia",dialCode:"+251"},{code:"EU",emoji:"\u{1F1EA}\u{1F1FA}",unicode:"U+1F1EA U+1F1FA",name:"European Union",title:"flag for European Union"},{code:"FI",emoji:"\u{1F1EB}\u{1F1EE}",unicode:"U+1F1EB U+1F1EE",name:"Finland",title:"flag for Finland",dialCode:"+358"},{code:"FJ",emoji:"\u{1F1EB}\u{1F1EF}",unicode:"U+1F1EB U+1F1EF",name:"Fiji",title:"flag for Fiji",dialCode:"+679"},{code:"FK",emoji:"\u{1F1EB}\u{1F1F0}",unicode:"U+1F1EB U+1F1F0",name:"Falkland Islands (Malvinas)",title:"flag for Falkland Islands (Malvinas)",dialCode:"+500"},{code:"FM",emoji:"\u{1F1EB}\u{1F1F2}",unicode:"U+1F1EB U+1F1F2",name:"Micronesia",title:"flag for Micronesia",dialCode:"+691"},{code:"FO",emoji:"\u{1F1EB}\u{1F1F4}",unicode:"U+1F1EB U+1F1F4",name:"Faroe Islands",title:"flag for Faroe Islands",dialCode:"+298"},{code:"FR",emoji:"\u{1F1EB}\u{1F1F7}",unicode:"U+1F1EB U+1F1F7",name:"France",title:"flag for France",dialCode:"+33"},{code:"GA",emoji:"\u{1F1EC}\u{1F1E6}",unicode:"U+1F1EC U+1F1E6",name:"Gabon",title:"flag for Gabon",dialCode:"+241"},{code:"GB",emoji:"\u{1F1EC}\u{1F1E7}",unicode:"U+1F1EC U+1F1E7",name:"United Kingdom",title:"flag for United Kingdom",dialCode:"+44"},{code:"GD",emoji:"\u{1F1EC}\u{1F1E9}",unicode:"U+1F1EC U+1F1E9",name:"Grenada",title:"flag for Grenada",dialCode:"+1 473"},{code:"GE",emoji:"\u{1F1EC}\u{1F1EA}",unicode:"U+1F1EC U+1F1EA",name:"Georgia",title:"flag for Georgia",dialCode:"+995"},{code:"GF",emoji:"\u{1F1EC}\u{1F1EB}",unicode:"U+1F1EC U+1F1EB",name:"French Guiana",title:"flag for French Guiana",dialCode:"+594"},{code:"GG",emoji:"\u{1F1EC}\u{1F1EC}",unicode:"U+1F1EC U+1F1EC",name:"Guernsey",title:"flag for Guernsey",dialCode:"+44"},{code:"GH",emoji:"\u{1F1EC}\u{1F1ED}",unicode:"U+1F1EC U+1F1ED",name:"Ghana",title:"flag for Ghana",dialCode:"+233"},{code:"GI",emoji:"\u{1F1EC}\u{1F1EE}",unicode:"U+1F1EC U+1F1EE",name:"Gibraltar",title:"flag for Gibraltar",dialCode:"+350"},{code:"GL",emoji:"\u{1F1EC}\u{1F1F1}",unicode:"U+1F1EC U+1F1F1",name:"Greenland",title:"flag for Greenland",dialCode:"+299"},{code:"GM",emoji:"\u{1F1EC}\u{1F1F2}",unicode:"U+1F1EC U+1F1F2",name:"Gambia",title:"flag for Gambia",dialCode:"+220"},{code:"GN",emoji:"\u{1F1EC}\u{1F1F3}",unicode:"U+1F1EC U+1F1F3",name:"Guinea",title:"flag for Guinea",dialCode:"+224"},{code:"GP",emoji:"\u{1F1EC}\u{1F1F5}",unicode:"U+1F1EC U+1F1F5",name:"Guadeloupe",title:"flag for Guadeloupe",dialCode:"+590"},{code:"GQ",emoji:"\u{1F1EC}\u{1F1F6}",unicode:"U+1F1EC U+1F1F6",name:"Equatorial Guinea",title:"flag for Equatorial Guinea",dialCode:"+240"},{code:"GR",emoji:"\u{1F1EC}\u{1F1F7}",unicode:"U+1F1EC U+1F1F7",name:"Greece",title:"flag for Greece",dialCode:"+30"},{code:"GS",emoji:"\u{1F1EC}\u{1F1F8}",unicode:"U+1F1EC U+1F1F8",name:"South Georgia",title:"flag for South Georgia",dialCode:"+500"},{code:"GT",emoji:"\u{1F1EC}\u{1F1F9}",unicode:"U+1F1EC U+1F1F9",name:"Guatemala",title:"flag for Guatemala",dialCode:"+502"},{code:"GU",emoji:"\u{1F1EC}\u{1F1FA}",unicode:"U+1F1EC U+1F1FA",name:"Guam",title:"flag for Guam",dialCode:"+1 671"},{code:"GW",emoji:"\u{1F1EC}\u{1F1FC}",unicode:"U+1F1EC U+1F1FC",name:"Guinea-Bissau",title:"flag for Guinea-Bissau",dialCode:"+245"},{code:"GY",emoji:"\u{1F1EC}\u{1F1FE}",unicode:"U+1F1EC U+1F1FE",name:"Guyana",title:"flag for Guyana",dialCode:"+595"},{code:"HK",emoji:"\u{1F1ED}\u{1F1F0}",unicode:"U+1F1ED U+1F1F0",name:"Hong Kong",title:"flag for Hong Kong",dialCode:"+852"},{code:"HM",emoji:"\u{1F1ED}\u{1F1F2}",unicode:"U+1F1ED U+1F1F2",name:"Heard Island and Mcdonald Islands",title:"flag for Heard Island and Mcdonald Islands"},{code:"HN",emoji:"\u{1F1ED}\u{1F1F3}",unicode:"U+1F1ED U+1F1F3",name:"Honduras",title:"flag for Honduras",dialCode:"+504"},{code:"HR",emoji:"\u{1F1ED}\u{1F1F7}",unicode:"U+1F1ED U+1F1F7",name:"Croatia",title:"flag for Croatia",dialCode:"+385"},{code:"HT",emoji:"\u{1F1ED}\u{1F1F9}",unicode:"U+1F1ED U+1F1F9",name:"Haiti",title:"flag for Haiti",dialCode:"+509"},{code:"HU",emoji:"\u{1F1ED}\u{1F1FA}",unicode:"U+1F1ED U+1F1FA",name:"Hungary",title:"flag for Hungary",dialCode:"+36"},{code:"ID",emoji:"\u{1F1EE}\u{1F1E9}",unicode:"U+1F1EE U+1F1E9",name:"Indonesia",title:"flag for Indonesia",dialCode:"+62"},{code:"IE",emoji:"\u{1F1EE}\u{1F1EA}",unicode:"U+1F1EE U+1F1EA",name:"Ireland",title:"flag for Ireland",dialCode:"+353"},{code:"IL",emoji:"\u{1F1EE}\u{1F1F1}",unicode:"U+1F1EE U+1F1F1",name:"Israel",title:"flag for Israel",dialCode:"+972"},{code:"IM",emoji:"\u{1F1EE}\u{1F1F2}",unicode:"U+1F1EE U+1F1F2",name:"Isle of Man",title:"flag for Isle of Man",dialCode:"+44"},{code:"IN",emoji:"\u{1F1EE}\u{1F1F3}",unicode:"U+1F1EE U+1F1F3",name:"India",title:"flag for India",dialCode:"+91"},{code:"IO",emoji:"\u{1F1EE}\u{1F1F4}",unicode:"U+1F1EE U+1F1F4",name:"British Indian Ocean Territory",title:"flag for British Indian Ocean Territory",dialCode:"+246"},{code:"IQ",emoji:"\u{1F1EE}\u{1F1F6}",unicode:"U+1F1EE U+1F1F6",name:"Iraq",title:"flag for Iraq",dialCode:"+964"},{code:"IR",emoji:"\u{1F1EE}\u{1F1F7}",unicode:"U+1F1EE U+1F1F7",name:"Iran",title:"flag for Iran",dialCode:"+98"},{code:"IS",emoji:"\u{1F1EE}\u{1F1F8}",unicode:"U+1F1EE U+1F1F8",name:"Iceland",title:"flag for Iceland",dialCode:"+354"},{code:"IT",emoji:"\u{1F1EE}\u{1F1F9}",unicode:"U+1F1EE U+1F1F9",name:"Italy",title:"flag for Italy",dialCode:"+39"},{code:"JE",emoji:"\u{1F1EF}\u{1F1EA}",unicode:"U+1F1EF U+1F1EA",name:"Jersey",title:"flag for Jersey",dialCode:"+44"},{code:"JM",emoji:"\u{1F1EF}\u{1F1F2}",unicode:"U+1F1EF U+1F1F2",name:"Jamaica",title:"flag for Jamaica",dialCode:"+1 876"},{code:"JO",emoji:"\u{1F1EF}\u{1F1F4}",unicode:"U+1F1EF U+1F1F4",name:"Jordan",title:"flag for Jordan",dialCode:"+962"},{code:"JP",emoji:"\u{1F1EF}\u{1F1F5}",unicode:"U+1F1EF U+1F1F5",name:"Japan",title:"flag for Japan",dialCode:"+81"},{code:"KE",emoji:"\u{1F1F0}\u{1F1EA}",unicode:"U+1F1F0 U+1F1EA",name:"Kenya",title:"flag for Kenya",dialCode:"+254"},{code:"KG",emoji:"\u{1F1F0}\u{1F1EC}",unicode:"U+1F1F0 U+1F1EC",name:"Kyrgyzstan",title:"flag for Kyrgyzstan",dialCode:"+996"},{code:"KH",emoji:"\u{1F1F0}\u{1F1ED}",unicode:"U+1F1F0 U+1F1ED",name:"Cambodia",title:"flag for Cambodia",dialCode:"+855"},{code:"KI",emoji:"\u{1F1F0}\u{1F1EE}",unicode:"U+1F1F0 U+1F1EE",name:"Kiribati",title:"flag for Kiribati",dialCode:"+686"},{code:"KM",emoji:"\u{1F1F0}\u{1F1F2}",unicode:"U+1F1F0 U+1F1F2",name:"Comoros",title:"flag for Comoros",dialCode:"+269"},{code:"KN",emoji:"\u{1F1F0}\u{1F1F3}",unicode:"U+1F1F0 U+1F1F3",name:"Saint Kitts and Nevis",title:"flag for Saint Kitts and Nevis",dialCode:"+1 869"},{code:"KP",emoji:"\u{1F1F0}\u{1F1F5}",unicode:"U+1F1F0 U+1F1F5",name:"North Korea",title:"flag for North Korea",dialCode:"+850"},{code:"KR",emoji:"\u{1F1F0}\u{1F1F7}",unicode:"U+1F1F0 U+1F1F7",name:"South Korea",title:"flag for South Korea",dialCode:"+82"},{code:"KW",emoji:"\u{1F1F0}\u{1F1FC}",unicode:"U+1F1F0 U+1F1FC",name:"Kuwait",title:"flag for Kuwait",dialCode:"+965"},{code:"KY",emoji:"\u{1F1F0}\u{1F1FE}",unicode:"U+1F1F0 U+1F1FE",name:"Cayman Islands",title:"flag for Cayman Islands",dialCode:"+ 345"},{code:"KZ",emoji:"\u{1F1F0}\u{1F1FF}",unicode:"U+1F1F0 U+1F1FF",name:"Kazakhstan",title:"flag for Kazakhstan",dialCode:"+7 7"},{code:"LA",emoji:"\u{1F1F1}\u{1F1E6}",unicode:"U+1F1F1 U+1F1E6",name:"Lao People's Democratic Republic",title:"flag for Lao People's Democratic Republic",dialCode:"+856"},{code:"LB",emoji:"\u{1F1F1}\u{1F1E7}",unicode:"U+1F1F1 U+1F1E7",name:"Lebanon",title:"flag for Lebanon",dialCode:"+961"},{code:"LC",emoji:"\u{1F1F1}\u{1F1E8}",unicode:"U+1F1F1 U+1F1E8",name:"Saint Lucia",title:"flag for Saint Lucia",dialCode:"+1 758"},{code:"LI",emoji:"\u{1F1F1}\u{1F1EE}",unicode:"U+1F1F1 U+1F1EE",name:"Liechtenstein",title:"flag for Liechtenstein",dialCode:"+423"},{code:"LK",emoji:"\u{1F1F1}\u{1F1F0}",unicode:"U+1F1F1 U+1F1F0",name:"Sri Lanka",title:"flag for Sri Lanka",dialCode:"+94"},{code:"LR",emoji:"\u{1F1F1}\u{1F1F7}",unicode:"U+1F1F1 U+1F1F7",name:"Liberia",title:"flag for Liberia",dialCode:"+231"},{code:"LS",emoji:"\u{1F1F1}\u{1F1F8}",unicode:"U+1F1F1 U+1F1F8",name:"Lesotho",title:"flag for Lesotho",dialCode:"+266"},{code:"LT",emoji:"\u{1F1F1}\u{1F1F9}",unicode:"U+1F1F1 U+1F1F9",name:"Lithuania",title:"flag for Lithuania",dialCode:"+370"},{code:"LU",emoji:"\u{1F1F1}\u{1F1FA}",unicode:"U+1F1F1 U+1F1FA",name:"Luxembourg",title:"flag for Luxembourg",dialCode:"+352"},{code:"LV",emoji:"\u{1F1F1}\u{1F1FB}",unicode:"U+1F1F1 U+1F1FB",name:"Latvia",title:"flag for Latvia",dialCode:"+371"},{code:"LY",emoji:"\u{1F1F1}\u{1F1FE}",unicode:"U+1F1F1 U+1F1FE",name:"Libya",title:"flag for Libya",dialCode:"+218"},{code:"MA",emoji:"\u{1F1F2}\u{1F1E6}",unicode:"U+1F1F2 U+1F1E6",name:"Morocco",title:"flag for Morocco",dialCode:"+212"},{code:"MC",emoji:"\u{1F1F2}\u{1F1E8}",unicode:"U+1F1F2 U+1F1E8",name:"Monaco",title:"flag for Monaco",dialCode:"+377"},{code:"MD",emoji:"\u{1F1F2}\u{1F1E9}",unicode:"U+1F1F2 U+1F1E9",name:"Moldova",title:"flag for Moldova",dialCode:"+373"},{code:"ME",emoji:"\u{1F1F2}\u{1F1EA}",unicode:"U+1F1F2 U+1F1EA",name:"Montenegro",title:"flag for Montenegro",dialCode:"+382"},{code:"MF",emoji:"\u{1F1F2}\u{1F1EB}",unicode:"U+1F1F2 U+1F1EB",name:"Saint Martin (French Part)",title:"flag for Saint Martin (French Part)",dialCode:"+590"},{code:"MG",emoji:"\u{1F1F2}\u{1F1EC}",unicode:"U+1F1F2 U+1F1EC",name:"Madagascar",title:"flag for Madagascar",dialCode:"+261"},{code:"MH",emoji:"\u{1F1F2}\u{1F1ED}",unicode:"U+1F1F2 U+1F1ED",name:"Marshall Islands",title:"flag for Marshall Islands",dialCode:"+692"},{code:"MK",emoji:"\u{1F1F2}\u{1F1F0}",unicode:"U+1F1F2 U+1F1F0",name:"Macedonia",title:"flag for Macedonia",dialCode:"+389"},{code:"ML",emoji:"\u{1F1F2}\u{1F1F1}",unicode:"U+1F1F2 U+1F1F1",name:"Mali",title:"flag for Mali",dialCode:"+223"},{code:"MM",emoji:"\u{1F1F2}\u{1F1F2}",unicode:"U+1F1F2 U+1F1F2",name:"Myanmar",title:"flag for Myanmar",dialCode:"+95"},{code:"MN",emoji:"\u{1F1F2}\u{1F1F3}",unicode:"U+1F1F2 U+1F1F3",name:"Mongolia",title:"flag for Mongolia",dialCode:"+976"},{code:"MO",emoji:"\u{1F1F2}\u{1F1F4}",unicode:"U+1F1F2 U+1F1F4",name:"Macao",title:"flag for Macao",dialCode:"+853"},{code:"MP",emoji:"\u{1F1F2}\u{1F1F5}",unicode:"U+1F1F2 U+1F1F5",name:"Northern Mariana Islands",title:"flag for Northern Mariana Islands",dialCode:"+1 670"},{code:"MQ",emoji:"\u{1F1F2}\u{1F1F6}",unicode:"U+1F1F2 U+1F1F6",name:"Martinique",title:"flag for Martinique",dialCode:"+596"},{code:"MR",emoji:"\u{1F1F2}\u{1F1F7}",unicode:"U+1F1F2 U+1F1F7",name:"Mauritania",title:"flag for Mauritania",dialCode:"+222"},{code:"MS",emoji:"\u{1F1F2}\u{1F1F8}",unicode:"U+1F1F2 U+1F1F8",name:"Montserrat",title:"flag for Montserrat",dialCode:"+1664"},{code:"MT",emoji:"\u{1F1F2}\u{1F1F9}",unicode:"U+1F1F2 U+1F1F9",name:"Malta",title:"flag for Malta",dialCode:"+356"},{code:"MU",emoji:"\u{1F1F2}\u{1F1FA}",unicode:"U+1F1F2 U+1F1FA",name:"Mauritius",title:"flag for Mauritius",dialCode:"+230"},{code:"MV",emoji:"\u{1F1F2}\u{1F1FB}",unicode:"U+1F1F2 U+1F1FB",name:"Maldives",title:"flag for Maldives",dialCode:"+960"},{code:"MW",emoji:"\u{1F1F2}\u{1F1FC}",unicode:"U+1F1F2 U+1F1FC",name:"Malawi",title:"flag for Malawi",dialCode:"+265"},{code:"MX",emoji:"\u{1F1F2}\u{1F1FD}",unicode:"U+1F1F2 U+1F1FD",name:"Mexico",title:"flag for Mexico",dialCode:"+52"},{code:"MY",emoji:"\u{1F1F2}\u{1F1FE}",unicode:"U+1F1F2 U+1F1FE",name:"Malaysia",title:"flag for Malaysia",dialCode:"+60"},{code:"MZ",emoji:"\u{1F1F2}\u{1F1FF}",unicode:"U+1F1F2 U+1F1FF",name:"Mozambique",title:"flag for Mozambique",dialCode:"+258"},{code:"NA",emoji:"\u{1F1F3}\u{1F1E6}",unicode:"U+1F1F3 U+1F1E6",name:"Namibia",title:"flag for Namibia",dialCode:"+264"},{code:"NC",emoji:"\u{1F1F3}\u{1F1E8}",unicode:"U+1F1F3 U+1F1E8",name:"New Caledonia",title:"flag for New Caledonia",dialCode:"+687"},{code:"NE",emoji:"\u{1F1F3}\u{1F1EA}",unicode:"U+1F1F3 U+1F1EA",name:"Niger",title:"flag for Niger",dialCode:"+227"},{code:"NF",emoji:"\u{1F1F3}\u{1F1EB}",unicode:"U+1F1F3 U+1F1EB",name:"Norfolk Island",title:"flag for Norfolk Island",dialCode:"+672"},{code:"NG",emoji:"\u{1F1F3}\u{1F1EC}",unicode:"U+1F1F3 U+1F1EC",name:"Nigeria",title:"flag for Nigeria",dialCode:"+234"},{code:"NI",emoji:"\u{1F1F3}\u{1F1EE}",unicode:"U+1F1F3 U+1F1EE",name:"Nicaragua",title:"flag for Nicaragua",dialCode:"+505"},{code:"NL",emoji:"\u{1F1F3}\u{1F1F1}",unicode:"U+1F1F3 U+1F1F1",name:"Netherlands",title:"flag for Netherlands",dialCode:"+31"},{code:"NO",emoji:"\u{1F1F3}\u{1F1F4}",unicode:"U+1F1F3 U+1F1F4",name:"Norway",title:"flag for Norway",dialCode:"+47"},{code:"NP",emoji:"\u{1F1F3}\u{1F1F5}",unicode:"U+1F1F3 U+1F1F5",name:"Nepal",title:"flag for Nepal",dialCode:"+977"},{code:"NR",emoji:"\u{1F1F3}\u{1F1F7}",unicode:"U+1F1F3 U+1F1F7",name:"Nauru",title:"flag for Nauru",dialCode:"+674"},{code:"NU",emoji:"\u{1F1F3}\u{1F1FA}",unicode:"U+1F1F3 U+1F1FA",name:"Niue",title:"flag for Niue",dialCode:"+683"},{code:"NZ",emoji:"\u{1F1F3}\u{1F1FF}",unicode:"U+1F1F3 U+1F1FF",name:"New Zealand",title:"flag for New Zealand",dialCode:"+64"},{code:"OM",emoji:"\u{1F1F4}\u{1F1F2}",unicode:"U+1F1F4 U+1F1F2",name:"Oman",title:"flag for Oman",dialCode:"+968"},{code:"PA",emoji:"\u{1F1F5}\u{1F1E6}",unicode:"U+1F1F5 U+1F1E6",name:"Panama",title:"flag for Panama",dialCode:"+507"},{code:"PE",emoji:"\u{1F1F5}\u{1F1EA}",unicode:"U+1F1F5 U+1F1EA",name:"Peru",title:"flag for Peru",dialCode:"+51"},{code:"PF",emoji:"\u{1F1F5}\u{1F1EB}",unicode:"U+1F1F5 U+1F1EB",name:"French Polynesia",title:"flag for French Polynesia",dialCode:"+689"},{code:"PG",emoji:"\u{1F1F5}\u{1F1EC}",unicode:"U+1F1F5 U+1F1EC",name:"Papua New Guinea",title:"flag for Papua New Guinea",dialCode:"+675"},{code:"PH",emoji:"\u{1F1F5}\u{1F1ED}",unicode:"U+1F1F5 U+1F1ED",name:"Philippines",title:"flag for Philippines",dialCode:"+63"},{code:"PK",emoji:"\u{1F1F5}\u{1F1F0}",unicode:"U+1F1F5 U+1F1F0",name:"Pakistan",title:"flag for Pakistan",dialCode:"+92"},{code:"PL",emoji:"\u{1F1F5}\u{1F1F1}",unicode:"U+1F1F5 U+1F1F1",name:"Poland",title:"flag for Poland",dialCode:"+48"},{code:"PM",emoji:"\u{1F1F5}\u{1F1F2}",unicode:"U+1F1F5 U+1F1F2",name:"Saint Pierre and Miquelon",title:"flag for Saint Pierre and Miquelon",dialCode:"+508"},{code:"PN",emoji:"\u{1F1F5}\u{1F1F3}",unicode:"U+1F1F5 U+1F1F3",name:"Pitcairn",title:"flag for Pitcairn",dialCode:"+872"},{code:"PR",emoji:"\u{1F1F5}\u{1F1F7}",unicode:"U+1F1F5 U+1F1F7",name:"Puerto Rico",title:"flag for Puerto Rico",dialCode:"+1 939"},{code:"PS",emoji:"\u{1F1F5}\u{1F1F8}",unicode:"U+1F1F5 U+1F1F8",name:"Palestinian Territory",title:"flag for Palestinian Territory",dialCode:"+970"},{code:"PT",emoji:"\u{1F1F5}\u{1F1F9}",unicode:"U+1F1F5 U+1F1F9",name:"Portugal",title:"flag for Portugal",dialCode:"+351"},{code:"PW",emoji:"\u{1F1F5}\u{1F1FC}",unicode:"U+1F1F5 U+1F1FC",name:"Palau",title:"flag for Palau",dialCode:"+680"},{code:"PY",emoji:"\u{1F1F5}\u{1F1FE}",unicode:"U+1F1F5 U+1F1FE",name:"Paraguay",title:"flag for Paraguay",dialCode:"+595"},{code:"QA",emoji:"\u{1F1F6}\u{1F1E6}",unicode:"U+1F1F6 U+1F1E6",name:"Qatar",title:"flag for Qatar",dialCode:"+974"},{code:"RE",emoji:"\u{1F1F7}\u{1F1EA}",unicode:"U+1F1F7 U+1F1EA",name:"R\xE9union",title:"flag for R\xE9union",dialCode:"+262"},{code:"RO",emoji:"\u{1F1F7}\u{1F1F4}",unicode:"U+1F1F7 U+1F1F4",name:"Romania",title:"flag for Romania",dialCode:"+40"},{code:"RS",emoji:"\u{1F1F7}\u{1F1F8}",unicode:"U+1F1F7 U+1F1F8",name:"Serbia",title:"flag for Serbia",dialCode:"+381"},{code:"RU",emoji:"\u{1F1F7}\u{1F1FA}",unicode:"U+1F1F7 U+1F1FA",name:"Russia",title:"flag for Russia",dialCode:"+7"},{code:"RW",emoji:"\u{1F1F7}\u{1F1FC}",unicode:"U+1F1F7 U+1F1FC",name:"Rwanda",title:"flag for Rwanda",dialCode:"+250"},{code:"SA",emoji:"\u{1F1F8}\u{1F1E6}",unicode:"U+1F1F8 U+1F1E6",name:"Saudi Arabia",title:"flag for Saudi Arabia",dialCode:"+966"},{code:"SB",emoji:"\u{1F1F8}\u{1F1E7}",unicode:"U+1F1F8 U+1F1E7",name:"Solomon Islands",title:"flag for Solomon Islands",dialCode:"+677"},{code:"SC",emoji:"\u{1F1F8}\u{1F1E8}",unicode:"U+1F1F8 U+1F1E8",name:"Seychelles",title:"flag for Seychelles",dialCode:"+248"},{code:"SD",emoji:"\u{1F1F8}\u{1F1E9}",unicode:"U+1F1F8 U+1F1E9",name:"Sudan",title:"flag for Sudan",dialCode:"+249"},{code:"SE",emoji:"\u{1F1F8}\u{1F1EA}",unicode:"U+1F1F8 U+1F1EA",name:"Sweden",title:"flag for Sweden",dialCode:"+46"},{code:"SG",emoji:"\u{1F1F8}\u{1F1EC}",unicode:"U+1F1F8 U+1F1EC",name:"Singapore",title:"flag for Singapore",dialCode:"+65"},{code:"SH",emoji:"\u{1F1F8}\u{1F1ED}",unicode:"U+1F1F8 U+1F1ED",name:"Saint Helena, Ascension and Tristan Da Cunha",title:"flag for Saint Helena, Ascension and Tristan Da Cunha",dialCode:"+290"},{code:"SI",emoji:"\u{1F1F8}\u{1F1EE}",unicode:"U+1F1F8 U+1F1EE",name:"Slovenia",title:"flag for Slovenia",dialCode:"+386"},{code:"SJ",emoji:"\u{1F1F8}\u{1F1EF}",unicode:"U+1F1F8 U+1F1EF",name:"Svalbard and Jan Mayen",title:"flag for Svalbard and Jan Mayen",dialCode:"+47"},{code:"SK",emoji:"\u{1F1F8}\u{1F1F0}",unicode:"U+1F1F8 U+1F1F0",name:"Slovakia",title:"flag for Slovakia",dialCode:"+421"},{code:"SL",emoji:"\u{1F1F8}\u{1F1F1}",unicode:"U+1F1F8 U+1F1F1",name:"Sierra Leone",title:"flag for Sierra Leone",dialCode:"+232"},{code:"SM",emoji:"\u{1F1F8}\u{1F1F2}",unicode:"U+1F1F8 U+1F1F2",name:"San Marino",title:"flag for San Marino",dialCode:"+378"},{code:"SN",emoji:"\u{1F1F8}\u{1F1F3}",unicode:"U+1F1F8 U+1F1F3",name:"Senegal",title:"flag for Senegal",dialCode:"+221"},{code:"SO",emoji:"\u{1F1F8}\u{1F1F4}",unicode:"U+1F1F8 U+1F1F4",name:"Somalia",title:"flag for Somalia",dialCode:"+252"},{code:"SR",emoji:"\u{1F1F8}\u{1F1F7}",unicode:"U+1F1F8 U+1F1F7",name:"Suriname",title:"flag for Suriname",dialCode:"+597"},{code:"SS",emoji:"\u{1F1F8}\u{1F1F8}",unicode:"U+1F1F8 U+1F1F8",name:"South Sudan",title:"flag for South Sudan"},{code:"ST",emoji:"\u{1F1F8}\u{1F1F9}",unicode:"U+1F1F8 U+1F1F9",name:"Sao Tome and Principe",title:"flag for Sao Tome and Principe",dialCode:"+239"},{code:"SV",emoji:"\u{1F1F8}\u{1F1FB}",unicode:"U+1F1F8 U+1F1FB",name:"El Salvador",title:"flag for El Salvador",dialCode:"+503"},{code:"SX",emoji:"\u{1F1F8}\u{1F1FD}",unicode:"U+1F1F8 U+1F1FD",name:"Sint Maarten (Dutch Part)",title:"flag for Sint Maarten (Dutch Part)"},{code:"SY",emoji:"\u{1F1F8}\u{1F1FE}",unicode:"U+1F1F8 U+1F1FE",name:"Syrian Arab Republic",title:"flag for Syrian Arab Republic",dialCode:"+963"},{code:"SZ",emoji:"\u{1F1F8}\u{1F1FF}",unicode:"U+1F1F8 U+1F1FF",name:"Swaziland",title:"flag for Swaziland",dialCode:"+268"},{code:"TC",emoji:"\u{1F1F9}\u{1F1E8}",unicode:"U+1F1F9 U+1F1E8",name:"Turks and Caicos Islands",title:"flag for Turks and Caicos Islands",dialCode:"+1 649"},{code:"TD",emoji:"\u{1F1F9}\u{1F1E9}",unicode:"U+1F1F9 U+1F1E9",name:"Chad",title:"flag for Chad",dialCode:"+235"},{code:"TF",emoji:"\u{1F1F9}\u{1F1EB}",unicode:"U+1F1F9 U+1F1EB",name:"French Southern Territories",title:"flag for French Southern Territories"},{code:"TG",emoji:"\u{1F1F9}\u{1F1EC}",unicode:"U+1F1F9 U+1F1EC",name:"Togo",title:"flag for Togo",dialCode:"+228"},{code:"TH",emoji:"\u{1F1F9}\u{1F1ED}",unicode:"U+1F1F9 U+1F1ED",name:"Thailand",title:"flag for Thailand",dialCode:"+66"},{code:"TJ",emoji:"\u{1F1F9}\u{1F1EF}",unicode:"U+1F1F9 U+1F1EF",name:"Tajikistan",title:"flag for Tajikistan",dialCode:"+992"},{code:"TK",emoji:"\u{1F1F9}\u{1F1F0}",unicode:"U+1F1F9 U+1F1F0",name:"Tokelau",title:"flag for Tokelau",dialCode:"+690"},{code:"TL",emoji:"\u{1F1F9}\u{1F1F1}",unicode:"U+1F1F9 U+1F1F1",name:"Timor-Leste",title:"flag for Timor-Leste",dialCode:"+670"},{code:"TM",emoji:"\u{1F1F9}\u{1F1F2}",unicode:"U+1F1F9 U+1F1F2",name:"Turkmenistan",title:"flag for Turkmenistan",dialCode:"+993"},{code:"TN",emoji:"\u{1F1F9}\u{1F1F3}",unicode:"U+1F1F9 U+1F1F3",name:"Tunisia",title:"flag for Tunisia",dialCode:"+216"},{code:"TO",emoji:"\u{1F1F9}\u{1F1F4}",unicode:"U+1F1F9 U+1F1F4",name:"Tonga",title:"flag for Tonga",dialCode:"+676"},{code:"TR",emoji:"\u{1F1F9}\u{1F1F7}",unicode:"U+1F1F9 U+1F1F7",name:"Turkey",title:"flag for Turkey",dialCode:"+90"},{code:"TT",emoji:"\u{1F1F9}\u{1F1F9}",unicode:"U+1F1F9 U+1F1F9",name:"Trinidad and Tobago",title:"flag for Trinidad and Tobago",dialCode:"+1 868"},{code:"TV",emoji:"\u{1F1F9}\u{1F1FB}",unicode:"U+1F1F9 U+1F1FB",name:"Tuvalu",title:"flag for Tuvalu",dialCode:"+688"},{code:"TW",emoji:"\u{1F1F9}\u{1F1FC}",unicode:"U+1F1F9 U+1F1FC",name:"Taiwan",title:"flag for Taiwan",dialCode:"+886"},{code:"TZ",emoji:"\u{1F1F9}\u{1F1FF}",unicode:"U+1F1F9 U+1F1FF",name:"Tanzania",title:"flag for Tanzania",dialCode:"+255"},{code:"UA",emoji:"\u{1F1FA}\u{1F1E6}",unicode:"U+1F1FA U+1F1E6",name:"Ukraine",title:"flag for Ukraine",dialCode:"+380"},{code:"UG",emoji:"\u{1F1FA}\u{1F1EC}",unicode:"U+1F1FA U+1F1EC",name:"Uganda",title:"flag for Uganda",dialCode:"+256"},{code:"UM",emoji:"\u{1F1FA}\u{1F1F2}",unicode:"U+1F1FA U+1F1F2",name:"United States Minor Outlying Islands",title:"flag for United States Minor Outlying Islands"},{code:"US",emoji:"\u{1F1FA}\u{1F1F8}",unicode:"U+1F1FA U+1F1F8",name:"United States",title:"flag for United States",dialCode:"+1"},{code:"UY",emoji:"\u{1F1FA}\u{1F1FE}",unicode:"U+1F1FA U+1F1FE",name:"Uruguay",title:"flag for Uruguay",dialCode:"+598"},{code:"UZ",emoji:"\u{1F1FA}\u{1F1FF}",unicode:"U+1F1FA U+1F1FF",name:"Uzbekistan",title:"flag for Uzbekistan",dialCode:"+998"},{code:"VA",emoji:"\u{1F1FB}\u{1F1E6}",unicode:"U+1F1FB U+1F1E6",name:"Vatican City",title:"flag for Vatican City",dialCode:"+379"},{code:"VC",emoji:"\u{1F1FB}\u{1F1E8}",unicode:"U+1F1FB U+1F1E8",name:"Saint Vincent and The Grenadines",title:"flag for Saint Vincent and The Grenadines",dialCode:"+1 784"},{code:"VE",emoji:"\u{1F1FB}\u{1F1EA}",unicode:"U+1F1FB U+1F1EA",name:"Venezuela",title:"flag for Venezuela",dialCode:"+58"},{code:"VG",emoji:"\u{1F1FB}\u{1F1EC}",unicode:"U+1F1FB U+1F1EC",name:"Virgin Islands, British",title:"flag for Virgin Islands, British",dialCode:"+1 284"},{code:"VI",emoji:"\u{1F1FB}\u{1F1EE}",unicode:"U+1F1FB U+1F1EE",name:"Virgin Islands, U.S.",title:"flag for Virgin Islands, U.S.",dialCode:"+1 340"},{code:"VN",emoji:"\u{1F1FB}\u{1F1F3}",unicode:"U+1F1FB U+1F1F3",name:"Viet Nam",title:"flag for Viet Nam",dialCode:"+84"},{code:"VU",emoji:"\u{1F1FB}\u{1F1FA}",unicode:"U+1F1FB U+1F1FA",name:"Vanuatu",title:"flag for Vanuatu",dialCode:"+678"},{code:"WF",emoji:"\u{1F1FC}\u{1F1EB}",unicode:"U+1F1FC U+1F1EB",name:"Wallis and Futuna",title:"flag for Wallis and Futuna",dialCode:"+681"},{code:"WS",emoji:"\u{1F1FC}\u{1F1F8}",unicode:"U+1F1FC U+1F1F8",name:"Samoa",title:"flag for Samoa",dialCode:"+685"},{code:"XK",emoji:"\u{1F1FD}\u{1F1F0}",unicode:"U+1F1FD U+1F1F0",name:"Kosovo",title:"flag for Kosovo",dialCode:"+383"},{code:"YE",emoji:"\u{1F1FE}\u{1F1EA}",unicode:"U+1F1FE U+1F1EA",name:"Yemen",title:"flag for Yemen",dialCode:"+967"},{code:"YT",emoji:"\u{1F1FE}\u{1F1F9}",unicode:"U+1F1FE U+1F1F9",name:"Mayotte",title:"flag for Mayotte",dialCode:"+262"},{code:"ZA",emoji:"\u{1F1FF}\u{1F1E6}",unicode:"U+1F1FF U+1F1E6",name:"South Africa",title:"flag for South Africa",dialCode:"+27"},{code:"ZM",emoji:"\u{1F1FF}\u{1F1F2}",unicode:"U+1F1FF U+1F1F2",name:"Zambia",title:"flag for Zambia",dialCode:"+260"},{code:"ZW",emoji:"\u{1F1FF}\u{1F1FC}",unicode:"U+1F1FF U+1F1FC",name:"Zimbabwe",title:"flag for Zimbabwe",dialCode:"+263"}]});var ne=M((Ut,tn)=>{h();var ji="[object Array]",wi="[object Function]",Si=/^\[object .+?Constructor\]$/;function en(e){return!!e&&typeof e=="object"}var nn=Object.prototype,an=Function.prototype.toString,Ai=nn.hasOwnProperty,on=nn.toString,Ti=RegExp("^"+an.call(Ai).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),xi=Bi(Array,"isArray"),ki=9007199254740991;function Bi(e,n){var t=e?.[n];return Ri(t)?t:void 0}function Mi(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ki}var Ii=xi||function(e){return en(e)&&Mi(e.length)&&on.call(e)==ji};function Pi(e){return Di(e)&&on.call(e)==wi}function Di(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Ri(e){return e==null?!1:Pi(e)?Ti.test(an.call(e)):en(e)&&Si.test(e)}tn.exports=Ii});var ln=M((Ct,rn)=>{h();var Ni=9007199254740991,Gi="[object Arguments]",Li="[object Array]",Ki="[object Boolean]",qi="[object Date]",_i="[object Error]",Oi="[object Function]",Hi="[object Map]",zi="[object Number]",Wi="[object Object]",Ji="[object RegExp]",$i="[object Set]",Yi="[object String]",Zi="[object WeakMap]",Vi="[object ArrayBuffer]",Xi="[object DataView]",Qi="[object Float32Array]",ea="[object Float64Array]",na="[object Int8Array]",ia="[object Int16Array]",aa="[object Int32Array]",oa="[object Uint8Array]",ta="[object Uint8ClampedArray]",ra="[object Uint16Array]",la="[object Uint32Array]",k={};k[Qi]=k[ea]=k[na]=k[ia]=k[aa]=k[oa]=k[ta]=k[ra]=k[la]=!0;k[Gi]=k[Li]=k[Vi]=k[Ki]=k[Xi]=k[qi]=k[_i]=k[Oi]=k[Hi]=k[zi]=k[Wi]=k[Ji]=k[$i]=k[Yi]=k[Zi]=!1;var da=Object.prototype,sa=da.toString;function ca(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ni}function fa(e){return!!e&&typeof e=="object"}function ua(e){return fa(e)&&ca(e.length)&&!!k[sa.call(e)]}rn.exports=ua});var fn=M((Et,cn)=>{h();var Fa="[object Function]",ma=/^\[object .+?Constructor\]$/;function ga(e){return!!e&&typeof e=="object"}var dn=Object.prototype,sn=Function.prototype.toString,pa=dn.hasOwnProperty,ha=dn.toString,Ua=RegExp("^"+sn.call(pa).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function va(e,n){var t=e?.[n];return Ea(t)?t:void 0}function Ca(e){return ba(e)&&ha.call(e)==Fa}function ba(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Ea(e){return e==null?!1:Ca(e)?Ua.test(sn.call(e)):ga(e)&&ma.test(e)}cn.exports=va});var mn=M((jt,Fn)=>{h();var ya=9007199254740991,ja="[object Arguments]",wa="[object Function]",Sa="[object GeneratorFunction]",ge=Object.prototype,Aa=ge.hasOwnProperty,un=ge.toString,Ta=ge.propertyIsEnumerable;function xa(e){return Ba(e)&&Aa.call(e,"callee")&&(!Ta.call(e,"callee")||un.call(e)==ja)}function ka(e){return e!=null&&Ia(e.length)&&!Ma(e)}function Ba(e){return Da(e)&&ka(e)}function Ma(e){var n=Pa(e)?un.call(e):"";return n==wa||n==Sa}function Ia(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ya}function Pa(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Da(e){return!!e&&typeof e=="object"}Fn.exports=xa});var de=M((St,yn)=>{h();var Ra=fn(),hn=mn(),Un=ne(),Na=/^\d+$/,Ga=Object.prototype,vn=Ga.hasOwnProperty,gn=Ra(Object,"keys"),Cn=9007199254740991;function La(e){return function(n){return n?.[e]}}var Ka=La("length");function qa(e){return e!=null&&pe(Ka(e))}function bn(e,n){return e=typeof e=="number"||Na.test(e)?+e:-1,n=n??Cn,e>-1&&e%1==0&&e<n}function pe(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Cn}function pn(e){for(var n=Oa(e),t=n.length,s=t&&e.length,d=!!s&&pe(s)&&(Un(e)||hn(e)),f=-1,m=[];++f<t;){var p=n[f];(d&&bn(p,s)||vn.call(e,p))&&m.push(p)}return m}function En(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}var _a=gn?function(e){var n=e?.constructor;return typeof n=="function"&&n.prototype===e||typeof e!="function"&&qa(e)?pn(e):En(e)?gn(e):[]}:pn;function Oa(e){if(e==null)return[];En(e)||(e=Object(e));var n=e.length;n=n&&pe(n)&&(Un(e)||hn(e))&&n||0;for(var t=e.constructor,s=-1,d=typeof t=="function"&&t.prototype===e,f=Array(n),m=n>0;++s<n;)f[s]=s+"";for(var p in e)!(m&&bn(p,n))&&!(p=="constructor"&&(d||!vn.call(e,p)))&&f.push(p);return f}yn.exports=_a});var In=M((Tt,Mn)=>{h();var jn=ne(),wn=ln(),Sn=de(),An="[object Arguments]",Tn="[object Array]",Ha="[object Boolean]",za="[object Date]",Wa="[object Error]",Ja="[object Number]",Z="[object Object]",$a="[object RegExp]",Ya="[object String]";function Za(e){return!!e&&typeof e=="object"}var kn=Object.prototype,he=kn.hasOwnProperty,xn=kn.toString;function Va(e,n){for(var t=-1,s=e.length;++t<s;)if(n(e[t],t,e))return!0;return!1}function Bn(e,n,t,s,d,f){return e===n?!0:e==null||n==null||!io(e)&&!Za(n)?e!==e&&n!==n:Xa(e,n,Bn,t,s,d,f)}function Xa(e,n,t,s,d,f,m){var p=jn(e),E=jn(n),T=Tn,y=Tn;p||(T=xn.call(e),T==An?T=Z:T!=Z&&(p=wn(e))),E||(y=xn.call(n),y==An?y=Z:y!=Z&&(E=wn(n)));var B=T==Z,j=y==Z,x=T==y;if(x&&!(p||B))return eo(e,n,T);if(!d){var D=B&&he.call(e,"__wrapped__"),L=j&&he.call(n,"__wrapped__");if(D||L)return t(D?e.value():e,L?n.value():n,s,d,f,m)}if(!x)return!1;f||(f=[]),m||(m=[]);for(var _=f.length;_--;)if(f[_]==e)return m[_]==n;f.push(e),m.push(n);var u=(p?Qa:no)(e,n,t,s,d,f,m);return f.pop(),m.pop(),u}function Qa(e,n,t,s,d,f,m){var p=-1,E=e.length,T=n.length;if(E!=T&&!(d&&T>E))return!1;for(;++p<E;){var y=e[p],B=n[p],j=s?s(d?B:y,d?y:B,p):void 0;if(j!==void 0){if(j)continue;return!1}if(d){if(!Va(n,function(x){return y===x||t(y,x,s,d,f,m)}))return!1}else if(!(y===B||t(y,B,s,d,f,m)))return!1}return!0}function eo(e,n,t){switch(t){case Ha:case za:return+e==+n;case Wa:return e.name==n.name&&e.message==n.message;case Ja:return e!=+e?n!=+n:e==+n;case $a:case Ya:return e==n+""}return!1}function no(e,n,t,s,d,f,m){var p=Sn(e),E=p.length,T=Sn(n),y=T.length;if(E!=y&&!d)return!1;for(var B=E;B--;){var j=p[B];if(!(d?j in n:he.call(n,j)))return!1}for(var x=d;++B<E;){j=p[B];var D=e[j],L=n[j],_=s?s(d?L:D,d?D:L,j):void 0;if(!(_===void 0?t(D,L,s,d,f,m):_))return!1;x||(x=j=="constructor")}if(!x){var u=e.constructor,A=n.constructor;if(u!=A&&"constructor"in e&&"constructor"in n&&!(typeof u=="function"&&u instanceof u&&typeof A=="function"&&A instanceof A))return!1}return!0}function io(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}Mn.exports=Bn});var Dn=M((kt,Pn)=>{h();function ao(e,n,t){if(typeof e!="function")return oo;if(n===void 0)return e;switch(t){case 1:return function(s){return e.call(n,s)};case 3:return function(s,d,f){return e.call(n,s,d,f)};case 4:return function(s,d,f,m){return e.call(n,s,d,f,m)};case 5:return function(s,d,f,m,p){return e.call(n,s,d,f,m,p)}}return function(){return e.apply(n,arguments)}}function oo(e){return e}Pn.exports=ao});var Nn=M((Mt,Rn)=>{h();var to=de();function ro(e){return lo(e)?e:Object(e)}function lo(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function so(e){e=ro(e);for(var n=-1,t=to(e),s=t.length,d=Array(s);++n<s;){var f=t[n];d[n]=[f,e[f]]}return d}Rn.exports=so});var zn=M((Pt,Hn)=>{h();var Gn=In(),co=Dn(),Ue=ne(),fo=Nn(),uo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,Fo=/^\w*$/,mo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,go=/\\(\\)?/g;function po(e){return e==null?"":e+""}function ho(e,n,t){var s=typeof e;return s=="function"?n===void 0?e:co(e,n,t):e==null?So:s=="object"?vo(e):n===void 0?Ao(e):Co(e,n)}function Ln(e,n,t){if(e!=null){t!==void 0&&t in V(e)&&(n=[t]);for(var s=0,d=n.length;e!=null&&s<d;)e=e[n[s++]];return s&&s==d?e:void 0}}function Uo(e,n,t){var s=n.length,d=s,f=!t;if(e==null)return!d;for(e=V(e);s--;){var m=n[s];if(f&&m[2]?m[1]!==e[m[0]]:!(m[0]in e))return!1}for(;++s<d;){m=n[s];var p=m[0],E=e[p],T=m[1];if(f&&m[2]){if(E===void 0&&!(p in e))return!1}else{var y=t?t(E,T,p):void 0;if(!(y===void 0?Gn(T,E,t,!0):y))return!1}}return!0}function vo(e){var n=jo(e);if(n.length==1&&n[0][2]){var t=n[0][0],s=n[0][1];return function(d){return d==null?!1:d[t]===s&&(s!==void 0||t in V(d))}}return function(d){return Uo(d,n)}}function Co(e,n){var t=Ue(e),s=Kn(e)&&qn(n),d=e+"";return e=_n(e),function(f){if(f==null)return!1;var m=d;if(f=V(f),(t||!s)&&!(m in f)){if(f=e.length==1?f:Ln(f,yo(e,0,-1)),f==null)return!1;m=wo(e),f=V(f)}return f[m]===n?n!==void 0||m in f:Gn(n,f[m],void 0,!0)}}function bo(e){return function(n){return n?.[e]}}function Eo(e){var n=e+"";return e=_n(e),function(t){return Ln(t,e,n)}}function yo(e,n,t){var s=-1,d=e.length;n=n==null?0:+n||0,n<0&&(n=-n>d?0:d+n),t=t===void 0||t>d?d:+t||0,t<0&&(t+=d),d=n>t?0:t-n>>>0,n>>>=0;for(var f=Array(d);++s<d;)f[s]=e[s+n];return f}function jo(e){for(var n=fo(e),t=n.length;t--;)n[t][2]=qn(n[t][1]);return n}function Kn(e,n){var t=typeof e;if(t=="string"&&Fo.test(e)||t=="number")return!0;if(Ue(e))return!1;var s=!uo.test(e);return s||n!=null&&e in V(n)}function qn(e){return e===e&&!On(e)}function V(e){return On(e)?e:Object(e)}function _n(e){if(Ue(e))return e;var n=[];return po(e).replace(mo,function(t,s,d,f){n.push(d?f.replace(go,"$1"):s||t)}),n}function wo(e){var n=e?e.length:0;return n?e[n-1]:void 0}function On(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function So(e){return e}function Ao(e){return Kn(e)?bo(e):Eo(e)}Hn.exports=ho});var $n=M((Rt,Jn)=>{h();var To=de(),xo=9007199254740991,ko=Po(Mo),Bo=Do();function Mo(e,n){return Bo(e,n,To)}function Io(e){return function(n){return n?.[e]}}function Po(e,n){return function(t,s){var d=t?Ro(t):0;if(!No(d))return e(t,s);for(var f=n?d:-1,m=Wn(t);(n?f--:++f<d)&&s(m[f],f,m)!==!1;);return t}}function Do(e){return function(n,t,s){for(var d=Wn(n),f=s(n),m=f.length,p=e?m:-1;e?p--:++p<m;){var E=f[p];if(t(d[E],E,d)===!1)break}return n}}var Ro=Io("length");function No(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=xo}function Wn(e){return Go(e)?e:Object(e)}function Go(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}Jn.exports=ko});var Zn=M((Gt,Yn)=>{h();function Lo(e,n,t,s){var d;return t(e,function(f,m,p){if(n(f,m,p))return d=s?m:f,!1}),d}Yn.exports=Lo});var Xn=M((Kt,Vn)=>{h();function Ko(e,n,t){for(var s=e.length,d=t?s:-1;t?d--:++d<s;)if(n(e[d],d,e))return d;return-1}Vn.exports=Ko});var ei=M((_t,Qn)=>{h();var qo=zn(),_o=$n(),Oo=Zn(),Ho=Xn(),zo=ne();function Wo(e,n){return function(t,s,d){if(s=qo(s,d,3),zo(t)){var f=Ho(t,s,n);return f>-1?t[f]:void 0}return Oo(t,s,e)}}var Jo=Wo(_o);Qn.exports=Jo});var ii=M((Ht,ni)=>{"use strict";h();var ie=Qe(),$o=ei(),ve={countryCode:function(e){if(!e)throw new Error("Expected 1 country code as the first argument");return $o(ie,function(n){return n.code===e.toUpperCase()})},get data(){return ie}};["emoji","code","name","unicode"].forEach(function(e){Object.defineProperty(ve,e+"s",{get:function(){return ie.map(function(n){return n[e]})}})});ie.forEach(function(e,n){ve[e.code]=ie[n]});ni.exports=ve});var ri=M((Wt,ti)=>{h();var Ce=(Ne(),pi(Re)),Yo=Ve(),Zo=Xe(),Vo=ii(),ai="en-US",Xo="en",oi={"en-US":{present:"Present",expected:" (i18n.expected)",titles:{maintitle:"Resume of ",contact:"Contact",about:"About",work:"Work Experience",volunteer:"Volunteer",projects:"Projects",highlights:"Highlights",awards:"Awards",education:"Education",skills:"skills",publications:"Publications",languages:"Languages",interests:"Interests",references:"References"}},"fr-FR":{present:"Aujourd'hui",expected:" (attendu)",titles:{maintitle:"CV de ",about:"A propos",contact:"Contact",work:"Exp\xE9riences",volunteer:"Volontariat",projects:"Projets",highlights:"R\xE9sum\xE9",awards:"R\xE9compenses",education:"Ecoles",skills:"Comp\xE9tences",publications:"Publications",languages:"Langues",interests:"Centre d'int\xE9r\xEAts",references:"R\xE9f\xE9rences"}}};function Qo(e){let n=e.meta&&e.meta.locale||ai,t=n.split("-")[0]||Xo;e.lang=t;let s=oi[n]||oi[ai];function d(u,A){let R=f(A);return u>1&&!R.endsWith("s")&&(R+="s"),u+" "+R}let f=u=>new Intl.DisplayNames(n,{type:"dateTimeField"}).of(u);function m(u,A){if(!u)return"";let R=E(u),g=(A?E(A):new Date)-R,l=Math.floor(g/(1e3*60*60*24*365)),U=Math.floor(g%(1e3*60*60*24*365)/(1e3*60*60*24*30)),b=[];return l>0&&b.push(d(l,"year")),U>0&&b.push(d(U,"month")),b.join(", ")}function p(u){return u?E(u).getFullYear():""}function E(u){return new Date(u)}function T(u){return B(u,{year:"numeric",month:"long",day:"numeric"})}function y(u){return B(u,{year:"numeric",month:"long"})}function B(u,A){let R=E(u);return new Intl.DateTimeFormat(n,A).format(R)}function j(u,A){return!!(u&&u.length&&(A?u[0][A]:u[0]))}e.titles=s.titles,e.basics.capitalName=e.basics.name.toUpperCase(),e.basics&&e.basics.email&&(e.basics.gravatar=Yo.url(e.basics.email,{s:"200",r:"pg",d:"mm"})),(e.basics.image||e.basics.gravatar)&&(e.photo=e.basics.image?e.basics.image:e.basics.gravatar);var x=[...e.basics.profiles];function D(u){try{let A=Vo.countryCode(u);if(!A)throw new Error(`No emoji for [${u}] ; be careful it should be country, not lang => us, not en`);return A.emoji}catch(A){return console.error(A),""}}x.forEach(u=>{let A=u.network.toLowerCase().split("::"),R=A[0],c=A.length>1?A[1]:"";var g="",l="";switch(R){case"google-plus":case"googleplus":l="fab fa-google-plus";break;case"flickr":case"flicker":l="fab fa-flickr";break;case"dribbble":case"dribble":l="fab fa-dribbble";break;case"codepen":l="fab fa-codepen";break;case"soundcloud":l="fab fa-soundcloud";break;case"reddit":l="fab fa-reddit";break;case"tumblr":case"tumbler":l="fab fa-tumblr";break;case"stack-overflow":case"stackoverflow":l="fab fa-stack-overflow";break;case"blog":case"rss":l="fas fa-rss";break;case"gitlab":l="fab fa-gitlab";break;case"keybase":l="fas fa-key";break;case"pdf":case"doc":case"document":case"cv":case"resume":l="fas fa-file-pdf",g=u.username,u.type="link";break;case"translation":g=D(c),u.arialabel=u.username,u.type="translations";break;default:l=`fab fa-${R}`}u.text=g||u.network,u.iconClass=l}),e.basics.profiles=x.filter(u=>!u.type),e.basics.links=x.filter(u=>u.type==="link"),e.basics.translations=x.filter(u=>u.type==="translations"),e.basics.translationsBool=j(e.basics.translations);function L(u){u.startDate&&(u.startDateText=y(u.startDate)),u.endDateText=u.endDate?y(u.endDate):s.present,u.duration=m(u.startDate,u.endDate),u.boolHighlights=j(u.highlights)}e.work&&e.work.length&&(e.workBool=!0,e.work.forEach(u=>L(u))),e.volunteer&&e.volunteer.length&&(e.volunteerBool=!0,e.volunteer.forEach(u=>L(u))),e.projectsBool=j(e.projects,"name"),j(e.education,"institution")&&(e.educationBool=!0,e.education.forEach(u=>{L(u),u.educationDetail=[u.area,u.studyType].filter(Boolean).join(", "),u.educationCourses=j(u.courses);let A=p(u.startDate),R=p(u.endDate);u.dateText=`${A} ${R}`})),j(e.awards,"title")&&(e.awardsBool=!0,e.awards.forEach(u=>{u.dateText=y(u.date)})),j(e.publications,"name")&&(e.publicationsBool=!0,e.publications.forEach(u=>{u.dateText=T(u.releaseDate)})),e.skillsBool=j(e.skills,"name"),e.interestsBool=j(e.interests,"name"),e.languagesBool=j(e.languages,"language"),e.referencesBool=j(e.references,"name"),e.css=Ce.readFileSync("//style.css","utf-8"),e.printcss=Ce.readFileSync("//print.css","utf-8");var _=Ce.readFileSync("//resume.template","utf8");return Zo.render(_,e)}ti.exports={render:Qo}});h();var Y=gi(ri(),1),li=Y.default??Y,$t=li.render??Y.render,Yt=li.pdfRenderOptions??Y.pdfRenderOptions;export{Yt as pdfRenderOptions,$t as render};
/*! Bundled license information:

mustache/mustache.js:
  (*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   *)
*/
