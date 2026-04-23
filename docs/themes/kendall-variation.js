var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Xi=Object.create;var Re=Object.defineProperty;var Qi=Object.getOwnPropertyDescriptor;var Zi=Object.getOwnPropertyNames;var ji=Object.getPrototypeOf,ki=Object.prototype.hasOwnProperty;var St=(f,y)=>()=>(f&&(y=f(f=0)),y);var Mn=(f,y)=>()=>(y||f((y={exports:{}}).exports,y),y.exports),ns=(f,y)=>{for(var S in y)Re(f,S,{get:y[S],enumerable:!0})},Tt=(f,y,S,u)=>{if(y&&typeof y=="object"||typeof y=="function")for(let M of Zi(y))!ki.call(f,M)&&M!==S&&Re(f,M,{get:()=>y[M],enumerable:!(u=Qi(y,M))||u.enumerable});return f};var es=(f,y,S)=>(S=f!=null?Xi(ji(f)):{},Tt(y||!f||!f.__esModule?Re(S,"default",{value:f,enumerable:!0}):S,f)),ts=f=>Tt(Re({},"__esModule",{value:!0}),f);var A=St(()=>{});var Ot={};ns(Ot,{createReadStream:()=>Lt,createWriteStream:()=>At,default:()=>rs,existsSync:()=>Bt,lstatSync:()=>Pt,mkdirSync:()=>qt,readFileSync:()=>It,readdirSync:()=>Ut,rmdirSync:()=>Nt,statSync:()=>Ze,unlinkSync:()=>zt,writeFileSync:()=>Ft});function Qe(f){return String(f).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Mt(f){var y=Qe(f);if(Ee[y]!==void 0)return Ee[y];for(var S=Object.keys(Ee),u=0;u<S.length;u++)if(y.endsWith("/"+S[u])||y===S[u])return Ee[S[u]]}function Xe(f){var y=Qe(f);if((y===""||y===".")&&Gn["."]!==void 0)return Gn["."];if(Gn[y]!==void 0)return Gn[y];for(var S=Object.keys(Gn),u=0;u<S.length;u++)if(y.endsWith("/"+S[u])||y===S[u])return Gn[S[u]]}var Ee,Gn,It,Ut,Bt,Ft,qt,Ze,Pt,zt,Nt,Lt,At,rs,Yt=St(()=>{"use strict";A();Ee={"package.json":`{
  "name": "jsonresume-theme-kendall-variation",
  "version": "0.0.5",
  "description": "A JSON Resume theme built with bootstrap",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "M. Adam Kendall",
  "license": "MIT",
  "dependencies": {
    "gravatar": "^1.0.6",
    "lodash": "^2.4.1",
    "mustache": "^0.8.2"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/Fenntasy/jsonresume-theme-kendall-variation.git"
  },
  "keywords": [
    "json", "jsonresume", "theme"
  ],
  "bugs": {
    "url": "https://github.com/linuxbozo/jsonresume-theme-kendall-variation/issues"
  },
  "homepage": "https://github.com/Fenntasy/jsonresume-theme-kendall-variation"
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
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Resume of {{basics.name}}</title>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
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
          <div class="box">
            <h2><i class="fa fa-user ico"></i> About</h2>
            <p>{{{basics.summary}}}</p>
          </div>
          {{/basics.summary}}
          {{#educationBool}}
          {{#workBool}}
          <!-- WORK EXPERIENCE -->
          <div class="box">
            <h2><i class= "fa fa-suitcase ico"></i> Work Experience</h2>
            {{#work}}
              <div class="job clearfix">
                <div class="row">
                  <div class="details">
                    <div class="where">{{company}}</div>
                    {{#website}}
                    <div class="address">
                      <a href="{{website}}" target= "_blank"><i class="fa fa-globe ico"></i> {{website}}</a>
                    </div>
                    {{/website}}
                    <div class="year">{{startDateMonth}}{{startDateYear}} \u2013 {{endDateMonth}}{{endDateYear}}</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-offset-1 col-xs-11">
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
          <div class="box">
            <h2><i class="fa fa-certificate ico"></i> Awards</h2>
            <ul id="awards" class="clearfix">
              {{#awards}}
              <li>
                <div class="year pull-left">{{month}} {{year}}</div>
                <div class="description pull-right">
                  <h3>{{awarder}}</h3>
                  <p><i class="fa fa-trophy ico"></i> {{title}}</p>
                  <p>{{{summary}}}</p>
                </div>
              </li>
              {{/awards}}
            </ul>
          </div>
          {{/awardsBool}}
          {{#volunteerBool}}
          <!-- VOLUNTEER -->
          <div class="box">
            <h2><i class= "fa fa-group ico"></i> Volunteer</h2>
            {{#volunteer}}
              <div class="job clearfix">
                <div class="row">
                  <div class="details">
                    <div class="where">{{organization}}</div>
                    {{#website}}
                    <div class="address">
                      <a href="{{website}}" target= "_blank"><i class="fa fa-globe ico"></i> {{website}}</a>
                    </div>
                    {{/website}}
                    <div class="year">{{startDateMonth}}{{startDateYear}} \u2013 {{endDateMonth}}{{endDateYear}}</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-11 pull-right">
                    <div class="profession">{{position}}</div>
                    <div class="description">
                      {{{summary}}}
                      {{#boolHighlights}}
                      <div class="highlights">Highlights</div>
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
        </div>
        <div class="col-xs-12 col-sm-5">
          <!-- CONTACT -->
          <div class="box clearfix">
            <h2><i class="fa fa-bullseye ico"></i> Contact</h2>
            {{#basics.location}}
            <div class="contact-item">
              <div class="icon pull-left text-center"><span class="fa fa-map-marker fa-fw"></span></div>
              <div class="title pull-right">{{basics.location.address}}</div>
              <div class="description pull-right">{{basics.location.city}}{{#basics.location.postalCode}}, {{basics.location.postalCode}}{{/basics.location.postalCode}}{{#basics.location.countryCode}} {{basics.location.countryCode}}{{/basics.location.countryCode}}</div>
            </div>
            {{/basics.location}}
            {{#basics.phone}}
            <div class="contact-item">
              <div class="icon pull-left text-center"><span class="fa fa-phone fa-fw"></span></div>
              <div class="title only pull-right">{{basics.phone}}</div>
            </div>
            {{/basics.phone}}
            {{#basics.email}}
            <div class="contact-item">
              <div class="icon pull-left text-center"><span class="fa fa-envelope fa-fw"></span></div>
              <div class="title only pull-right"><a href="mailto:{{basics.email}}" target="_blank">{{basics.email}}</a></div>
            </div>
            {{/basics.email}}
            {{#basics.website}}
            <div class="contact-item">
              <div class="icon pull-left text-center"><span class="fa fa-globe fa-fw"></span></div>
              <div class="title only pull-right"><a href="{{basics.website}}" target="_blank">{{basics.website}}</a></div>
            </div>
            {{/basics.website}}
            {{#basics.profiles}}
            <div class="contact-item">
              <div class="icon pull-left text-center"><span class="{{iconClass}} fa-fw"></span></div>
              <div class="title pull-right">{{network}}</div>
              <div class="description pull-right"><a href="{{url}}" target="_blank">{{#username}}{{username}}{{/username}}{{^username}}{{url}}{{/username}}</a></div>
            </div>
            {{/basics.profiles}}
          </div>
          <!-- EDUCATION -->
          <div class="box">
            <h2><i class="fa fa-university ico"></i> Education</h2>
            <ul id="education" class="clearfix">
              {{#education}}
              <li>
                <div class="year pull-left">{{startDateYear}} {{endDateYear}}</div>
                <div class="description pull-right">
                  <h3>{{institution}}</h3>
                  {{#studyType}}<p><i class= "fa fa-graduation-cap ico"></i> {{studyType}}</p>{{/studyType}}
                  <p>{{area}}</p>
                  {{#gpa}}
                  <p>
                    GPA: {{gpa}}
                  </p>
                  {{/gpa}}
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
          <div class="box">
            <h2><i class="fa fa-tasks ico"></i> Skills</h2>
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
          <div class="box">
            <h2><i class="fa fa-book ico"></i> Publications</h2>
            {{#publications}}
            <div class="publication panel panel-default">
              <div class="panel-heading">
                <div class="name panel-title">{{name}}</div>
              </div>
              <div class="panel-body">
                {{#publisher}}
                <div class="publisher"><i class= "fa fa-bookmark ico"></i> {{publisher}}</div>
                {{/publisher}}
                <div class="year">{{day}} {{month}} {{year}}</div>
                {{#website}}
                <div class="address">
                  <a href="{{website}}" target= "_blank"><i class="fa fa-globe ico"></i> {{website}}</a>
                </div>
                {{/website}}
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
          <div class="box">
            <h2><i class="fa fa-language ico"></i> Languages</h2>
            <ul class="list-group">
              {{#languages}}
              <li class=" list-group-item">{{language}}<span class="skill badge pull-right">{{fluency}}</span></li>
              {{/languages}}
            </ul>
          </div>
          {{/languagesBool}}
          {{#interestsBool}}
          <!-- HOBBIES -->
          <div class="box">
            <h2><i class="fa fa-heart ico"></i> Interests</h2>
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
            <h2><i class= "fa fa-check-square ico"></i> References</h2>
            {{#references}}
            <blockquote>
              <div>{{{reference}}}</div>
              <footer>
                <a href="{{website}}" target= "_blank">{{name}}</a>
              </footer>
            </blockquote><br>
            {{/references}}
          </div>
          {{/referencesBool}}
        </div>
      </div>
    </div>
    <!-- JQUERY -->
    <script src="//code.jquery.com/jquery-2.1.1.min.js"><\/script>
    <!-- BOOTSTRAP -->
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"><\/script>

  </body>
</html>
`,"style.css":`@import url(//fonts.googleapis.com/css?family=Open+Sans:400,600,700,800);
@charset "utf-8";
@-webkit-viewport   { width: device-width; }
@-moz-viewport      { width: device-width; }
@-ms-viewport       { width: device-width; }
@-o-viewport        { width: device-width; }
@viewport           { width: device-width; }

body{
  font-family: 'Open Sans', Arial, Tahoma;
  font-weight: 400;
  color: #363636;
  background: #9fa8da;
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
  background: #333;
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
  color: #1a237e;
  font-size: 1.5em;
  font-weight: 700;
  text-transform: uppercase;
}

#awards,
#education{
  margin-top: 20px;
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
  width: 15%;
  background: #fff;
  padding: 10px;
  font-weight: 700;
  display: inline-block;
}
#awards .description,
#education .description{
  width: 85%;
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
.job .list-group {
  margin-top: 10px;
}
.job .description{
  line-height: 1.5em;
}
.job .highlights{
  padding: 10px 0;
  font-weight: bold;
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
  background: #3f51b5;
  position: relative;
  font-size: .85em;
  border-radius: 5px;
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

@media (min-width: 500px) {
  #education .description{
    width: 85%;
  }
}
@media (min-width: 768px) {
  #education .description{
    width: 85%;
  }
}
@media (min-width: 992px) {
  #education .description{
    width: 85%;
  }
}
@media (min-width: 1200px) {
  #education .description{
    width: 85%;
  }
}
`},Gn={".":["LICENSE","README.md","index.js","package.json","print.css","resume.template","style.css"]};It=function(f,y){var S=Mt(f);return S!==void 0?S:""},Ut=function(f,y){var S=Xe(f);return S===void 0&&(S=[]),y&&y.withFileTypes?S.map(function(u){var M=Qe(f)+"/"+u,F=Xe(M)!==void 0;return{name:u,isFile:function(){return!F},isDirectory:function(){return F}}}):S},Bt=function(f){return Mt(f)!==void 0||Xe(f)!==void 0},Ft=function(){},qt=function(){},Ze=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Pt=Ze,zt=function(){},Nt=function(){},Lt=function(){return{pipe:function(f){return f},on:function(){return this}}},At=function(){return{write:function(){},end:function(){},on:function(){return this}}},rs={readFileSync:It,readdirSync:Ut,existsSync:Bt,writeFileSync:Ft,mkdirSync:qt,statSync:Ze,lstatSync:Pt,unlinkSync:zt,rmdirSync:Nt,createReadStream:Lt,createWriteStream:At}});var Ht=Mn((Jn,de)=>{A();(function(){var f,y=[],S=[],u=0,M=+new Date+"",F=75,P=40,z=` 	\v\f\xA0\uFEFF
\r\u2028\u2029\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000`,k=/\b__p \+= '';/g,hn=/\b(__p \+=) '' \+/g,gn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,bn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Rn=/\w*$/,Z=/^\s*function[ \n\r\t]+\w/,nn=/<%=([\s\S]+?)%>/g,Yn=RegExp("^["+z+"]*0+(?=.$)"),In=/($^)/,zn=/\bthis\b/,Xn=/['\n\r\t\u2028\u2029\\]/g,Nn=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],c=0,R="[object Arguments]",h="[object Array]",I="[object Boolean]",w="[object Date]",b="[object Function]",C="[object Number]",l="[object Object]",p="[object RegExp]",m="[object String]",v={};v[b]=!1,v[R]=v[h]=v[I]=v[w]=v[C]=v[l]=v[p]=v[m]=!0;var N={leading:!1,maxWait:0,trailing:!1},B={configurable:!1,enumerable:!1,value:null,writable:!1},Y={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1},vn={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},L=Y[typeof window]&&window||this,J=Y[typeof Jn]&&Jn&&!Jn.nodeType&&Jn,mn=Y[typeof de]&&de&&!de.nodeType&&de,Qn=mn&&mn.exports===J&&J,en=Y[typeof globalThis]&&globalThis;en&&(en.global===en||en.window===en)&&(L=en);function _n(D,U,q){for(var O=(q||0)-1,K=D?D.length:0;++O<K;)if(D[O]===U)return O;return-1}function Hn(D,U){var q=typeof U;if(D=D.cache,q=="boolean"||U==null)return D[U]?0:-1;q!="number"&&q!="string"&&(q="object");var O=q=="number"?U:M+U;return D=(D=D[q])&&D[O],q=="object"?D&&_n(D,U)>-1?0:-1:D?0:-1}function fr(D){var U=this.cache,q=typeof D;if(q=="boolean"||D==null)U[D]=!0;else{q!="number"&&q!="string"&&(q="object");var O=q=="number"?D:M+D,K=U[q]||(U[q]={});q=="object"?(K[O]||(K[O]=[])).push(D):K[O]=!0}}function ke(D){return D.charCodeAt(0)}function or(D,U){for(var q=D.criteria,O=U.criteria,K=-1,un=q.length;++K<un;){var pn=q[K],V=O[K];if(pn!==V){if(pn>V||typeof pn>"u")return 1;if(pn<V||typeof V>"u")return-1}}return D.index-U.index}function Te(D){var U=-1,q=D.length,O=D[0],K=D[q/2|0],un=D[q-1];if(O&&typeof O=="object"&&K&&typeof K=="object"&&un&&typeof un=="object")return!1;var pn=Me();pn.false=pn.null=pn.true=pn.undefined=!1;var V=Me();for(V.array=D,V.cache=pn,V.push=fr;++U<q;)V.push(D[U]);return V}function ur(D){return"\\"+vn[D]}function xn(){return y.pop()||[]}function Me(){return S.pop()||{array:null,cache:null,criteria:null,false:!1,index:0,null:!1,number:null,object:null,push:null,string:null,true:!1,undefined:!1,value:null}}function yn(D){D.length=0,y.length<P&&y.push(D)}function Zn(D){var U=D.cache;U&&Zn(U),D.array=D.cache=D.criteria=D.object=D.number=D.string=D.value=null,S.length<P&&S.push(D)}function H(D,U,q){U||(U=0),typeof q>"u"&&(q=D?D.length:0);for(var O=-1,K=q-U||0,un=Array(K<0?0:K);++O<K;)un[O]=D[U+O];return un}function Ie(D){D=D?Un.defaults(L.Object(),D,Un.pick(L,Nn)):L;var U=D.Array,q=D.Boolean,O=D.Date,K=D.Function,un=D.Math,pn=D.Number,V=D.Object,jn=D.RegExp,Bn=D.String,En=D.TypeError,Kn=[],nt=V.prototype,lr=D._,tn=nt.toString,dr=jn("^"+Bn(tn).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),pr=un.ceil,ge=D.clearTimeout,cr=un.floor,hr=K.prototype.toString,Wn=qn(Wn=V.getPrototypeOf)&&Wn,rn=nt.hasOwnProperty,kn=Kn.push,ne=D.setTimeout,et=Kn.splice,gr=Kn.unshift,tt=(function(){try{var n={},e=qn(e=V.defineProperty)&&e,t=e(n,n,n)&&e}catch{}return t})(),ve=qn(ve=V.create)&&ve,Ue=qn(Ue=U.isArray)&&Ue,vr=D.isFinite,mr=D.isNaN,me=qn(me=V.keys)&&me,wn=un.max,ee=un.min,Be=D.parseInt,rt=un.random,Sn={};Sn[h]=U,Sn[I]=q,Sn[w]=O,Sn[b]=K,Sn[l]=V,Sn[C]=pn,Sn[p]=jn,Sn[m]=Bn;function a(n){return n&&typeof n=="object"&&!j(n)&&rn.call(n,"__wrapped__")?n:new Ln(n)}function Ln(n,e){this.__chain__=!!e,this.__wrapped__=n}Ln.prototype=a.prototype;var te=a.support={};te.funcDecomp=!qn(D.WinRTError)&&zn.test(Ie),te.funcNames=typeof K.name=="string",a.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:nn,variable:"",imports:{_:a}};function yr(n){var e=n[0],t=n[2],r=n[4];function i(){if(t){var s=H(t);kn.apply(s,arguments)}if(this instanceof i){var o=re(e.prototype),d=e.apply(o,s||arguments);return an(d)?d:o}return e.apply(r,s||arguments)}return Ne(i,n),i}function Fe(n,e,t,r,i){if(t){var s=t(n);if(typeof s<"u")return s}var o=an(n);if(o){var d=tn.call(n);if(!v[d])return n;var g=Sn[d];switch(d){case I:case w:return new g(+n);case C:case m:return new g(n);case p:return s=g(n.source,Rn.exec(n)),s.lastIndex=n.lastIndex,s}}else return n;var x=j(n);if(e){var _=!r;r||(r=xn()),i||(i=xn());for(var T=r.length;T--;)if(r[T]==n)return i[T];s=x?g(n.length):{}}else s=x?H(n):be({},n);return x&&(rn.call(n,"index")&&(s.index=n.index),rn.call(n,"input")&&(s.input=n.input)),e&&(r.push(n),i.push(s),(x?fn:G)(n,function(E,W){s[W]=Fe(E,e,t,r,i)}),_&&(yn(r),yn(i))),s}function re(n,e){return an(n)?ve(n):{}}ve||(re=(function(){function n(){}return function(e){if(an(e)){n.prototype=e;var t=new n;n.prototype=null}return t||D.Object()}})());function ln(n,e,t){if(typeof n!="function")return Ge;if(typeof e>"u"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r>"u"&&(te.funcNames&&(r=!n.name),r=r||!te.funcDecomp,!r)){var i=hr.call(n);te.funcNames||(r=!Z.test(i)),r||(r=zn.test(i),Ne(n,r))}if(r===!1||r!==!0&&r[1]&1)return n;switch(t){case 1:return function(s){return n.call(e,s)};case 2:return function(s,o){return n.call(e,s,o)};case 3:return function(s,o,d){return n.call(e,s,o,d)};case 4:return function(s,o,d,g){return n.call(e,s,o,d,g)}}return xt(n,e)}function it(n){var e=n[0],t=n[1],r=n[2],i=n[3],s=n[4],o=n[5],d=t&1,g=t&2,x=t&4,_=t&8,T=e;function E(){var W=d?s:this;if(r){var $=H(r);kn.apply($,arguments)}if((i||x)&&($||($=H(arguments)),i&&kn.apply($,i),x&&$.length<o))return t|=16,it([e,_?t:t&-4,$,null,s,o]);if($||($=arguments),g&&(e=W[T]),this instanceof E){W=re(e.prototype);var dn=e.apply(W,$);return an(dn)?dn:W}return e.apply(W,$)}return Ne(E,n),E}function ie(n,e){var t=-1,r=ye(),i=n?n.length:0,s=i>=F&&r===_n,o=[];if(s){var d=Te(e);d?(r=Hn,e=d):s=!1}for(;++t<i;){var g=n[t];r(e,g)<0&&o.push(g)}return s&&Zn(e),o}function Fn(n,e,t,r){for(var i=(r||0)-1,s=n?n.length:0,o=[];++i<s;){var d=n[i];if(d&&typeof d=="object"&&typeof d.length=="number"&&(j(d)||we(d))){e||(d=Fn(d,e,t));var g=-1,x=d.length,_=o.length;for(o.length+=x;++g<x;)o[_++]=d[g]}else t||o.push(d)}return o}function $n(n,e,t,r,i,s){if(t){var o=t(n,e);if(typeof o<"u")return!!o}if(n===e)return n!==0||1/n==1/e;var d=typeof n,g=typeof e;if(n===n&&!(n&&Y[d])&&!(e&&Y[g]))return!1;if(n==null||e==null)return n===e;var x=tn.call(n),_=tn.call(e);if(x==R&&(x=l),_==R&&(_=l),x!=_)return!1;switch(x){case I:case w:return+n==+e;case C:return n!=+n?e!=+e:n==0?1/n==1/e:n==+e;case p:case m:return n==Bn(e)}var T=x==h;if(!T){var E=rn.call(n,"__wrapped__"),W=rn.call(e,"__wrapped__");if(E||W)return $n(E?n.__wrapped__:n,W?e.__wrapped__:e,t,r,i,s);if(x!=l)return!1;var $=n.constructor,dn=e.constructor;if($!=dn&&!(X($)&&$ instanceof $&&X(dn)&&dn instanceof dn)&&"constructor"in n&&"constructor"in e)return!1}var cn=!i;i||(i=xn()),s||(s=xn());for(var on=i.length;on--;)if(i[on]==n)return s[on]==e;var Q=0;if(o=!0,i.push(n),s.push(e),T){if(on=n.length,Q=e.length,o=Q==on,o||r)for(;Q--;){var De=on,oe=e[Q];if(r)for(;De--&&!(o=$n(n[De],oe,t,r,i,s)););else if(!(o=$n(n[Q],oe,t,r,i,s)))break}}else Tn(e,function(ue,le,Ve){if(rn.call(Ve,le))return Q++,o=rn.call(n,le)&&$n(n[le],ue,t,r,i,s)}),o&&!r&&Tn(n,function(ue,le,Ve){if(rn.call(Ve,le))return o=--Q>-1});return i.pop(),s.pop(),cn&&(yn(i),yn(s)),o}function st(n,e,t,r,i){(j(e)?fn:G)(e,function(s,o){var d,g,x=s,_=n[o];if(s&&((g=j(s))||Oe(s))){for(var T=r.length;T--;)if(d=r[T]==s){_=i[T];break}if(!d){var E;t&&(x=t(_,s),(E=typeof x<"u")&&(_=x)),E||(_=g?j(_)?_:[]:Oe(_)?_:{}),r.push(s),i.push(_),E||st(_,s,t,r,i)}}else t&&(x=t(_,s),typeof x>"u"&&(x=s)),typeof x<"u"&&(_=x);n[o]=_})}function qe(n,e){return n+cr(rt()*(e-n+1))}function Pe(n,e,t){var r=-1,i=ye(),s=n?n.length:0,o=[],d=!e&&s>=F&&i===_n,g=t||d?xn():o;if(d){var x=Te(g);i=Hn,g=x}for(;++r<s;){var _=n[r],T=t?t(_,r,n):_;(e?!r||g[g.length-1]!==T:i(g,T)<0)&&((t||d)&&g.push(T),o.push(_))}return d?(yn(g.array),Zn(g)):t&&yn(g),o}function ze(n){return function(e,t,r){var i={};t=a.createCallback(t,r,3);var s=-1,o=e?e.length:0;if(typeof o=="number")for(;++s<o;){var d=e[s];n(i,d,t(d,s,e),e)}else G(e,function(g,x,_){n(i,g,t(g,x,_),_)});return i}}function Cn(n,e,t,r,i,s){var o=e&1,d=e&2,g=e&4,x=e&8,_=e&16,T=e&32;if(!d&&!X(n))throw new En;_&&!t.length&&(e&=-17,_=t=!1),T&&!r.length&&(e&=-33,T=r=!1);var E=n&&n.__bindData__;if(E&&E!==!0)return E=H(E),E[2]&&(E[2]=H(E[2])),E[3]&&(E[3]=H(E[3])),o&&!(E[1]&1)&&(E[4]=i),!o&&E[1]&1&&(e|=8),g&&!(E[1]&4)&&(E[5]=s),_&&kn.apply(E[2]||(E[2]=[]),t),T&&gr.apply(E[3]||(E[3]=[]),r),E[1]|=e,Cn.apply(null,E);var W=e==1||e===17?yr:it;return W([n,e,t,r,i,s])}function wr(n){return Le[n]}function ye(){var n=(n=a.indexOf)===mt?_n:n;return n}function qn(n){return typeof n=="function"&&dr.test(n)}var Ne=tt?function(n,e){B.value=e,tt(n,"__bindData__",B),B.value=null}:Dt;function at(n){var e,t;return!(n&&tn.call(n)==l)||(e=n.constructor,X(e)&&!(e instanceof e))?!1:(Tn(n,function(r,i){t=i}),typeof t>"u"||rn.call(n,t))}function br(n){return ft[n]}function we(n){return n&&typeof n=="object"&&typeof n.length=="number"&&tn.call(n)==R||!1}var j=Ue||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&tn.call(n)==h||!1},_r=function(n){var e,t=n,r=[];if(!t||!Y[typeof n])return r;for(e in t)rn.call(t,e)&&r.push(e);return r},sn=me?function(n){return an(n)?me(n):[]}:_r,Le={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ft=ut(Le),xr=jn("("+sn(ft).join("|")+")","g"),Cr=jn("["+sn(Le).join("")+"]","g"),be=function(n,e,t){var r,i=n,s=i;if(!i)return s;var o=arguments,d=0,g=typeof t=="number"?2:o.length;if(g>3&&typeof o[g-2]=="function")var x=ln(o[--g-1],o[g--],2);else g>2&&typeof o[g-1]=="function"&&(x=o[--g]);for(;++d<g;)if(i=o[d],i&&Y[typeof i])for(var _=-1,T=Y[typeof i]&&sn(i),E=T?T.length:0;++_<E;)r=T[_],s[r]=x?x(s[r],i[r]):i[r];return s};function Dr(n,e,t,r){return typeof e!="boolean"&&e!=null&&(r=t,t=e,e=!1),Fe(n,e,typeof t=="function"&&ln(t,r,1))}function Rr(n,e,t){return Fe(n,!0,typeof e=="function"&&ln(e,t,1))}function Er(n,e){var t=re(n);return e?be(t,e):t}var Ae=function(n,e,t){var r,i=n,s=i;if(!i)return s;for(var o=arguments,d=0,g=typeof t=="number"?2:o.length;++d<g;)if(i=o[d],i&&Y[typeof i])for(var x=-1,_=Y[typeof i]&&sn(i),T=_?_.length:0;++x<T;)r=_[x],typeof s[r]>"u"&&(s[r]=i[r]);return s};function Sr(n,e,t){var r;return e=a.createCallback(e,t,3),G(n,function(i,s,o){if(e(i,s,o))return r=s,!1}),r}function Tr(n,e,t){var r;return e=a.createCallback(e,t,3),ot(n,function(i,s,o){if(e(i,s,o))return r=s,!1}),r}var Tn=function(n,e,t){var r,i=n,s=i;if(!i||!Y[typeof i])return s;e=e&&typeof t>"u"?e:ln(e,t,3);for(r in i)if(e(i[r],r,n)===!1)return s;return s};function Mr(n,e,t){var r=[];Tn(n,function(s,o){r.push(o,s)});var i=r.length;for(e=ln(e,t,3);i--&&e(r[i--],r[i],n)!==!1;);return n}var G=function(n,e,t){var r,i=n,s=i;if(!i||!Y[typeof i])return s;e=e&&typeof t>"u"?e:ln(e,t,3);for(var o=-1,d=Y[typeof i]&&sn(i),g=d?d.length:0;++o<g;)if(r=d[o],e(i[r],r,n)===!1)return s;return s};function ot(n,e,t){var r=sn(n),i=r.length;for(e=ln(e,t,3);i--;){var s=r[i];if(e(n[s],s,n)===!1)break}return n}function se(n){var e=[];return Tn(n,function(t,r){X(t)&&e.push(r)}),e.sort()}function Ir(n,e){return n?rn.call(n,e):!1}function ut(n){for(var e=-1,t=sn(n),r=t.length,i={};++e<r;){var s=t[e];i[n[s]]=s}return i}function Ur(n){return n===!0||n===!1||n&&typeof n=="object"&&tn.call(n)==I||!1}function Br(n){return n&&typeof n=="object"&&tn.call(n)==w||!1}function Fr(n){return n&&n.nodeType===1||!1}function qr(n){var e=!0;if(!n)return e;var t=tn.call(n),r=n.length;return t==h||t==m||t==R||t==l&&typeof r=="number"&&X(n.splice)?!r:(G(n,function(){return e=!1}),e)}function Pr(n,e,t,r){return $n(n,e,typeof t=="function"&&ln(t,r,2))}function zr(n){return vr(n)&&!mr(parseFloat(n))}function X(n){return typeof n=="function"}function an(n){return!!(n&&Y[typeof n])}function Nr(n){return lt(n)&&n!=+n}function Lr(n){return n===null}function lt(n){return typeof n=="number"||n&&typeof n=="object"&&tn.call(n)==C||!1}var Oe=Wn?function(n){if(!(n&&tn.call(n)==l))return!1;var e=n.valueOf,t=qn(e)&&(t=Wn(e))&&Wn(t);return t?n==t||Wn(n)==t:at(n)}:at;function Ar(n){return n&&typeof n=="object"&&tn.call(n)==p||!1}function ae(n){return typeof n=="string"||n&&typeof n=="object"&&tn.call(n)==m||!1}function Or(n){return typeof n>"u"}function Yr(n,e,t){var r={};return e=a.createCallback(e,t,3),G(n,function(i,s,o){r[s]=e(i,s,o)}),r}function Hr(n){var e=arguments,t=2;if(!an(n))return n;if(typeof e[2]!="number"&&(t=e.length),t>3&&typeof e[t-2]=="function")var r=ln(e[--t-1],e[t--],2);else t>2&&typeof e[t-1]=="function"&&(r=e[--t]);for(var i=H(arguments,1,t),s=-1,o=xn(),d=xn();++s<t;)st(n,i[s],r,o,d);return yn(o),yn(d),n}function Kr(n,e,t){var r={};if(typeof e!="function"){var i=[];Tn(n,function(g,x){i.push(x)}),i=ie(i,Fn(arguments,!0,!1,1));for(var s=-1,o=i.length;++s<o;){var d=i[s];r[d]=n[d]}}else e=a.createCallback(e,t,3),Tn(n,function(g,x,_){e(g,x,_)||(r[x]=g)});return r}function Wr(n){for(var e=-1,t=sn(n),r=t.length,i=U(r);++e<r;){var s=t[e];i[e]=[s,n[s]]}return i}function $r(n,e,t){var r={};if(typeof e!="function")for(var i=-1,s=Fn(arguments,!0,!1,1),o=an(n)?s.length:0;++i<o;){var d=s[i];d in n&&(r[d]=n[d])}else e=a.createCallback(e,t,3),Tn(n,function(g,x,_){e(g,x,_)&&(r[x]=g)});return r}function Gr(n,e,t,r){var i=j(n);if(t==null)if(i)t=[];else{var s=n&&n.constructor,o=s&&s.prototype;t=re(o)}return e&&(e=a.createCallback(e,r,4),(i?fn:G)(n,function(d,g,x){return e(t,d,g,x)})),t}function _e(n){for(var e=-1,t=sn(n),r=t.length,i=U(r);++e<r;)i[e]=n[t[e]];return i}function Jr(n){for(var e=arguments,t=-1,r=Fn(e,!0,!1,1),i=e[2]&&e[2][e[1]]===n?1:r.length,s=U(i);++t<i;)s[t]=n[r[t]];return s}function dt(n,e,t){var r=-1,i=ye(),s=n?n.length:0,o=!1;return t=(t<0?wn(0,s+t):t)||0,j(n)?o=i(n,e,t)>-1:typeof s=="number"?o=(ae(n)?n.indexOf(e,t):i(n,e,t))>-1:G(n,function(d){if(++r>=t)return!(o=d===e)}),o}var Vr=ze(function(n,e,t){rn.call(n,t)?n[t]++:n[t]=1});function pt(n,e,t){var r=!0;e=a.createCallback(e,t,3);var i=-1,s=n?n.length:0;if(typeof s=="number")for(;++i<s&&(r=!!e(n[i],i,n)););else G(n,function(o,d,g){return r=!!e(o,d,g)});return r}function xe(n,e,t){var r=[];e=a.createCallback(e,t,3);var i=-1,s=n?n.length:0;if(typeof s=="number")for(;++i<s;){var o=n[i];e(o,i,n)&&r.push(o)}else G(n,function(d,g,x){e(d,g,x)&&r.push(d)});return r}function Ye(n,e,t){e=a.createCallback(e,t,3);var r=-1,i=n?n.length:0;if(typeof i=="number")for(;++r<i;){var s=n[r];if(e(s,r,n))return s}else{var o;return G(n,function(d,g,x){if(e(d,g,x))return o=d,!1}),o}}function Xr(n,e,t){var r;return e=a.createCallback(e,t,3),Ce(n,function(i,s,o){if(e(i,s,o))return r=i,!1}),r}function fn(n,e,t){var r=-1,i=n?n.length:0;if(e=e&&typeof t>"u"?e:ln(e,t,3),typeof i=="number")for(;++r<i&&e(n[r],r,n)!==!1;);else G(n,e);return n}function Ce(n,e,t){var r=n?n.length:0;if(e=e&&typeof t>"u"?e:ln(e,t,3),typeof r=="number")for(;r--&&e(n[r],r,n)!==!1;);else{var i=sn(n);r=i.length,G(n,function(s,o,d){return o=i?i[--r]:--r,e(d[o],o,d)})}return n}var Qr=ze(function(n,e,t){(rn.call(n,t)?n[t]:n[t]=[]).push(e)}),Zr=ze(function(n,e,t){n[t]=e});function jr(n,e){var t=H(arguments,2),r=-1,i=typeof e=="function",s=n?n.length:0,o=U(typeof s=="number"?s:0);return fn(n,function(d){o[++r]=(i?e:d[e]).apply(d,t)}),o}function fe(n,e,t){var r=-1,i=n?n.length:0;if(e=a.createCallback(e,t,3),typeof i=="number")for(var s=U(i);++r<i;)s[r]=e(n[r],r,n);else s=[],G(n,function(o,d,g){s[++r]=e(o,d,g)});return s}function ct(n,e,t){var r=-1/0,i=r;if(typeof e!="function"&&t&&t[e]===n&&(e=null),e==null&&j(n))for(var s=-1,o=n.length;++s<o;){var d=n[s];d>i&&(i=d)}else e=e==null&&ae(n)?ke:a.createCallback(e,t,3),fn(n,function(g,x,_){var T=e(g,x,_);T>r&&(r=T,i=g)});return i}function kr(n,e,t){var r=1/0,i=r;if(typeof e!="function"&&t&&t[e]===n&&(e=null),e==null&&j(n))for(var s=-1,o=n.length;++s<o;){var d=n[s];d<i&&(i=d)}else e=e==null&&ae(n)?ke:a.createCallback(e,t,3),fn(n,function(g,x,_){var T=e(g,x,_);T<r&&(r=T,i=g)});return i}var He=fe;function Ke(n,e,t,r){if(!n)return t;var i=arguments.length<3;e=a.createCallback(e,r,4);var s=-1,o=n.length;if(typeof o=="number")for(i&&(t=n[++s]);++s<o;)t=e(t,n[s],s,n);else G(n,function(d,g,x){t=i?(i=!1,d):e(t,d,g,x)});return t}function ht(n,e,t,r){var i=arguments.length<3;return e=a.createCallback(e,r,4),Ce(n,function(s,o,d){t=i?(i=!1,s):e(t,s,o,d)}),t}function ni(n,e,t){return e=a.createCallback(e,t,3),xe(n,function(r,i,s){return!e(r,i,s)})}function ei(n,e,t){if(n&&typeof n.length!="number"&&(n=_e(n)),e==null||t)return n?n[qe(0,n.length-1)]:f;var r=gt(n);return r.length=ee(wn(0,e),r.length),r}function gt(n){var e=-1,t=n?n.length:0,r=U(typeof t=="number"?t:0);return fn(n,function(i){var s=qe(0,++e);r[e]=r[s],r[s]=i}),r}function ti(n){var e=n?n.length:0;return typeof e=="number"?e:sn(n).length}function vt(n,e,t){var r;e=a.createCallback(e,t,3);var i=-1,s=n?n.length:0;if(typeof s=="number")for(;++i<s&&!(r=e(n[i],i,n)););else G(n,function(o,d,g){return!(r=e(o,d,g))});return!!r}function ri(n,e,t){var r=-1,i=j(e),s=n?n.length:0,o=U(typeof s=="number"?s:0);for(i||(e=a.createCallback(e,t,3)),fn(n,function(g,x,_){var T=o[++r]=Me();i?T.criteria=fe(e,function(E){return g[E]}):(T.criteria=xn())[0]=e(g,x,_),T.index=r,T.value=g}),s=o.length,o.sort(or);s--;){var d=o[s];o[s]=d.value,i||yn(d.criteria),Zn(d)}return o}function ii(n){return n&&typeof n.length=="number"?H(n):_e(n)}var si=xe;function ai(n){for(var e=-1,t=n?n.length:0,r=[];++e<t;){var i=n[e];i&&r.push(i)}return r}function fi(n){return ie(n,Fn(arguments,!0,!0,1))}function oi(n,e,t){var r=-1,i=n?n.length:0;for(e=a.createCallback(e,t,3);++r<i;)if(e(n[r],r,n))return r;return-1}function ui(n,e,t){var r=n?n.length:0;for(e=a.createCallback(e,t,3);r--;)if(e(n[r],r,n))return r;return-1}function We(n,e,t){var r=0,i=n?n.length:0;if(typeof e!="number"&&e!=null){var s=-1;for(e=a.createCallback(e,t,3);++s<i&&e(n[s],s,n);)r++}else if(r=e,r==null||t)return n?n[0]:f;return H(n,0,ee(wn(0,r),i))}function li(n,e,t,r){return typeof e!="boolean"&&e!=null&&(r=t,t=typeof e!="function"&&r&&r[e]===n?null:e,e=!1),t!=null&&(n=fe(n,t,r)),Fn(n,e)}function mt(n,e,t){if(typeof t=="number"){var r=n?n.length:0;t=t<0?wn(0,r+t):t||0}else if(t){var i=yt(n,e);return n[i]===e?i:-1}return _n(n,e,t)}function di(n,e,t){var r=0,i=n?n.length:0;if(typeof e!="number"&&e!=null){var s=i;for(e=a.createCallback(e,t,3);s--&&e(n[s],s,n);)r++}else r=e==null||t?1:e||r;return H(n,0,ee(wn(0,i-r),i))}function pi(){for(var n=[],e=-1,t=arguments.length,r=xn(),i=ye(),s=i===_n,o=xn();++e<t;){var d=arguments[e];(j(d)||we(d))&&(n.push(d),r.push(s&&d.length>=F&&Te(e?n[e]:o)))}var g=n[0],x=-1,_=g?g.length:0,T=[];n:for(;++x<_;){var E=r[0];if(d=g[x],(E?Hn(E,d):i(o,d))<0){for(e=t,(E||o).push(d);--e;)if(E=r[e],(E?Hn(E,d):i(n[e],d))<0)continue n;T.push(d)}}for(;t--;)E=r[t],E&&Zn(E);return yn(r),yn(o),T}function ci(n,e,t){var r=0,i=n?n.length:0;if(typeof e!="number"&&e!=null){var s=i;for(e=a.createCallback(e,t,3);s--&&e(n[s],s,n);)r++}else if(r=e,r==null||t)return n?n[i-1]:f;return H(n,wn(0,i-r))}function hi(n,e,t){var r=n?n.length:0;for(typeof t=="number"&&(r=(t<0?wn(0,r+t):ee(t,r-1))+1);r--;)if(n[r]===e)return r;return-1}function gi(n){for(var e=arguments,t=0,r=e.length,i=n?n.length:0;++t<r;)for(var s=-1,o=e[t];++s<i;)n[s]===o&&(et.call(n,s--,1),i--);return n}function vi(n,e,t){n=+n||0,t=typeof t=="number"?t:+t||1,e==null&&(e=n,n=0);for(var r=-1,i=wn(0,pr((e-n)/(t||1))),s=U(i);++r<i;)s[r]=n,n+=t;return s}function mi(n,e,t){var r=-1,i=n?n.length:0,s=[];for(e=a.createCallback(e,t,3);++r<i;){var o=n[r];e(o,r,n)&&(s.push(o),et.call(n,r--,1),i--)}return s}function $e(n,e,t){if(typeof e!="number"&&e!=null){var r=0,i=-1,s=n?n.length:0;for(e=a.createCallback(e,t,3);++i<s&&e(n[i],i,n);)r++}else r=e==null||t?1:wn(0,e);return H(n,r)}function yt(n,e,t,r){var i=0,s=n?n.length:i;for(t=t?a.createCallback(t,r,1):Ge,e=t(e);i<s;){var o=i+s>>>1;t(n[o])<e?i=o+1:s=o}return i}function yi(){return Pe(Fn(arguments,!0,!0))}function wt(n,e,t,r){return typeof e!="boolean"&&e!=null&&(r=t,t=typeof e!="function"&&r&&r[e]===n?null:e,e=!1),t!=null&&(t=a.createCallback(t,r,3)),Pe(n,e,t)}function wi(n){return ie(n,H(arguments,1))}function bi(){for(var n=-1,e=arguments.length;++n<e;){var t=arguments[n];if(j(t)||we(t))var r=r?Pe(ie(r,t).concat(ie(t,r))):t}return r||[]}function bt(){for(var n=arguments.length>1?arguments:arguments[0],e=-1,t=n?ct(He(n,"length")):0,r=U(t<0?0:t);++e<t;)r[e]=He(n,e);return r}function _t(n,e){var t=-1,r=n?n.length:0,i={};for(!e&&r&&!j(n[0])&&(e=[]);++t<r;){var s=n[t];e?i[s]=e[t]:s&&(i[s[0]]=s[1])}return i}function _i(n,e){if(!X(e))throw new En;return function(){if(--n<1)return e.apply(this,arguments)}}function xt(n,e){return arguments.length>2?Cn(n,17,H(arguments,2),null,e):Cn(n,1,null,null,e)}function xi(n){for(var e=arguments.length>1?Fn(arguments,!0,!1,1):se(n),t=-1,r=e.length;++t<r;){var i=e[t];n[i]=Cn(n[i],1,null,null,n)}return n}function Ci(n,e){return arguments.length>2?Cn(e,19,H(arguments,2),null,n):Cn(e,3,null,null,n)}function Di(){for(var n=arguments,e=n.length;e--;)if(!X(n[e]))throw new En;return function(){for(var t=arguments,r=n.length;r--;)t=[n[r].apply(this,t)];return t[0]}}function Ri(n,e){return e=typeof e=="number"?e:+e||n.length,Cn(n,4,null,null,null,e)}function Ct(n,e,t){var r,i,s,o,d,g,x,_=0,T=!1,E=!0;if(!X(n))throw new En;if(e=wn(0,e)||0,t===!0){var W=!0;E=!1}else an(t)&&(W=t.leading,T="maxWait"in t&&(wn(e,t.maxWait)||0),E="trailing"in t?t.trailing:E);var $=function(){var cn=e-(An()-o);if(cn<=0){i&&ge(i);var on=x;i=g=x=f,on&&(_=An(),s=n.apply(d,r),!g&&!i&&(r=d=null))}else g=ne($,cn)},dn=function(){g&&ge(g),i=g=x=f,(E||T!==e)&&(_=An(),s=n.apply(d,r),!g&&!i&&(r=d=null))};return function(){if(r=arguments,o=An(),d=this,x=E&&(g||!W),T===!1)var cn=W&&!g;else{!i&&!W&&(_=o);var on=T-(o-_),Q=on<=0;Q?(i&&(i=ge(i)),_=o,s=n.apply(d,r)):i||(i=ne(dn,on))}return Q&&g?g=ge(g):!g&&e!==T&&(g=ne($,e)),cn&&(Q=!0,s=n.apply(d,r)),Q&&!g&&!i&&(r=d=null),s}}function Ei(n){if(!X(n))throw new En;var e=H(arguments,1);return ne(function(){n.apply(f,e)},1)}function Si(n,e){if(!X(n))throw new En;var t=H(arguments,2);return ne(function(){n.apply(f,t)},e)}function Ti(n,e){if(!X(n))throw new En;var t=function(){var r=t.cache,i=e?e.apply(this,arguments):M+arguments[0];return rn.call(r,i)?r[i]:r[i]=n.apply(this,arguments)};return t.cache={},t}function Mi(n){var e,t;if(!X(n))throw new En;return function(){return e||(e=!0,t=n.apply(this,arguments),n=null),t}}function Ii(n){return Cn(n,16,H(arguments,1))}function Ui(n){return Cn(n,32,null,H(arguments,1))}function Bi(n,e,t){var r=!0,i=!0;if(!X(n))throw new En;return t===!1?r=!1:an(t)&&(r="leading"in t?t.leading:r,i="trailing"in t?t.trailing:i),N.leading=r,N.maxWait=e,N.trailing=i,Ct(n,e,N)}function Fi(n,e){return Cn(e,16,[n])}function qi(n){return function(){return n}}function Pi(n,e,t){var r=typeof n;if(n==null||r=="function")return ln(n,e,t);if(r!="object")return Rt(n);var i=sn(n),s=i[0],o=n[s];return i.length==1&&o===o&&!an(o)?function(d){var g=d[s];return o===g&&(o!==0||1/o==1/g)}:function(d){for(var g=i.length,x=!1;g--&&(x=$n(d[i[g]],n[i[g]],null,!0)););return x}}function zi(n){return n==null?"":Bn(n).replace(Cr,wr)}function Ge(n){return n}function Je(n,e,t){var r=!0,i=e&&se(e);(!e||!t&&!i.length)&&(t==null&&(t=e),s=Ln,e=n,n=a,i=se(e)),t===!1?r=!1:an(t)&&"chain"in t&&(r=t.chain);var s=n,o=X(s);fn(i,function(d){var g=n[d]=e[d];o&&(s.prototype[d]=function(){var x=this.__chain__,_=this.__wrapped__,T=[_];kn.apply(T,arguments);var E=g.apply(n,T);if(r||x){if(_===E&&an(E))return this;E=new s(E),E.__chain__=x}return E})})}function Ni(){return D._=lr,this}function Dt(){}var An=qn(An=O.now)&&An||function(){return new O().getTime()},Li=Be(z+"08")==8?Be:function(n,e){return Be(ae(n)?n.replace(Yn,""):n,e||0)};function Rt(n){return function(e){return e[n]}}function Ai(n,e,t){var r=n==null,i=e==null;if(t==null&&(typeof n=="boolean"&&i?(t=n,n=1):!i&&typeof e=="boolean"&&(t=e,i=!0)),r&&i&&(e=1),n=+n||0,i?(e=n,n=0):e=+e||0,t||n%1||e%1){var s=rt();return ee(n+s*(e-n+parseFloat("1e-"+((s+"").length-1))),e)}return qe(n,e)}function Oi(n,e){if(n){var t=n[e];return X(t)?n[e]():t}}function Yi(n,e,t){var r=a.templateSettings;n=Bn(n||""),t=Ae({},t,r);var i=Ae({},t.imports,r.imports),s=sn(i),o=_e(i),d,g=0,x=t.interpolate||In,_="__p += '",T=jn((t.escape||In).source+"|"+x.source+"|"+(x===nn?bn:In).source+"|"+(t.evaluate||In).source+"|$","g");n.replace(T,function(cn,on,Q,De,oe,ue){return Q||(Q=De),_+=n.slice(g,ue).replace(Xn,ur),on&&(_+=`' +
__e(`+on+`) +
'`),oe&&(d=!0,_+=`';
`+oe+`;
__p += '`),Q&&(_+=`' +
((__t = (`+Q+`)) == null ? '' : __t) +
'`),g=ue+cn.length,cn}),_+=`';
`;var E=t.variable,W=E;W||(E="obj",_="with ("+E+`) {
`+_+`
}
`),_=(d?_.replace(k,""):_).replace(hn,"$1").replace(gn,"$1;"),_="function("+E+`) {
`+(W?"":E+" || ("+E+` = {});
`)+"var __t, __p = '', __e = _.escape"+(d?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_+`return __p
}`;var $=`
/*
//# sourceURL=`+(t.sourceURL||"/lodash/template/source["+c+++"]")+`
*/`;try{var dn=K(s,"return "+_+$).apply(f,o)}catch(cn){throw cn.source=_,cn}return e?dn(e):(dn.source=_,dn)}function Hi(n,e,t){n=(n=+n)>-1?n:0;var r=-1,i=U(n);for(e=ln(e,t,1);++r<n;)i[r]=e(r);return i}function Ki(n){return n==null?"":Bn(n).replace(xr,br)}function Wi(n){var e=++u;return Bn(n??"")+e}function $i(n){return n=new Ln(n),n.__chain__=!0,n}function Gi(n,e){return e(n),n}function Ji(){return this.__chain__=!0,this}function Vi(){return Bn(this.__wrapped__)}function Et(){return this.__wrapped__}return a.after=_i,a.assign=be,a.at=Jr,a.bind=xt,a.bindAll=xi,a.bindKey=Ci,a.chain=$i,a.compact=ai,a.compose=Di,a.constant=qi,a.countBy=Vr,a.create=Er,a.createCallback=Pi,a.curry=Ri,a.debounce=Ct,a.defaults=Ae,a.defer=Ei,a.delay=Si,a.difference=fi,a.filter=xe,a.flatten=li,a.forEach=fn,a.forEachRight=Ce,a.forIn=Tn,a.forInRight=Mr,a.forOwn=G,a.forOwnRight=ot,a.functions=se,a.groupBy=Qr,a.indexBy=Zr,a.initial=di,a.intersection=pi,a.invert=ut,a.invoke=jr,a.keys=sn,a.map=fe,a.mapValues=Yr,a.max=ct,a.memoize=Ti,a.merge=Hr,a.min=kr,a.omit=Kr,a.once=Mi,a.pairs=Wr,a.partial=Ii,a.partialRight=Ui,a.pick=$r,a.pluck=He,a.property=Rt,a.pull=gi,a.range=vi,a.reject=ni,a.remove=mi,a.rest=$e,a.shuffle=gt,a.sortBy=ri,a.tap=Gi,a.throttle=Bi,a.times=Hi,a.toArray=ii,a.transform=Gr,a.union=yi,a.uniq=wt,a.values=_e,a.where=si,a.without=wi,a.wrap=Fi,a.xor=bi,a.zip=bt,a.zipObject=_t,a.collect=fe,a.drop=$e,a.each=fn,a.eachRight=Ce,a.extend=be,a.methods=se,a.object=_t,a.select=xe,a.tail=$e,a.unique=wt,a.unzip=bt,Je(a),a.clone=Dr,a.cloneDeep=Rr,a.contains=dt,a.escape=zi,a.every=pt,a.find=Ye,a.findIndex=oi,a.findKey=Sr,a.findLast=Xr,a.findLastIndex=ui,a.findLastKey=Tr,a.has=Ir,a.identity=Ge,a.indexOf=mt,a.isArguments=we,a.isArray=j,a.isBoolean=Ur,a.isDate=Br,a.isElement=Fr,a.isEmpty=qr,a.isEqual=Pr,a.isFinite=zr,a.isFunction=X,a.isNaN=Nr,a.isNull=Lr,a.isNumber=lt,a.isObject=an,a.isPlainObject=Oe,a.isRegExp=Ar,a.isString=ae,a.isUndefined=Or,a.lastIndexOf=hi,a.mixin=Je,a.noConflict=Ni,a.noop=Dt,a.now=An,a.parseInt=Li,a.random=Ai,a.reduce=Ke,a.reduceRight=ht,a.result=Oi,a.runInContext=Ie,a.size=ti,a.some=vt,a.sortedIndex=yt,a.template=Yi,a.unescape=Ki,a.uniqueId=Wi,a.all=pt,a.any=vt,a.detect=Ye,a.findWhere=Ye,a.foldl=Ke,a.foldr=ht,a.include=dt,a.inject=Ke,Je((function(){var n={};return G(a,function(e,t){a.prototype[t]||(n[t]=e)}),n})(),!1),a.first=We,a.last=ci,a.sample=ei,a.take=We,a.head=We,G(a,function(n,e){var t=e!=="sample";a.prototype[e]||(a.prototype[e]=function(r,i){var s=this.__chain__,o=n(this.__wrapped__,r,i);return!s&&(r==null||i&&!(t&&typeof r=="function"))?o:new Ln(o,s)})}),a.VERSION="2.4.2",a.prototype.chain=Ji,a.prototype.toString=Vi,a.prototype.value=Et,a.prototype.valueOf=Et,fn(["join","pop","shift"],function(n){var e=Kn[n];a.prototype[n]=function(){var t=this.__chain__,r=e.apply(this.__wrapped__,arguments);return t?new Ln(r,t):r}}),fn(["push","reverse","sort","unshift"],function(n){var e=Kn[n];a.prototype[n]=function(){return e.apply(this.__wrapped__,arguments),this}}),fn(["concat","slice","splice"],function(n){var e=Kn[n];a.prototype[n]=function(){return new Ln(e.apply(this.__wrapped__,arguments),this.__chain__)}}),a}var Un=Ie();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(L._=Un,define(function(){return Un})):J&&mn?Qn?(mn.exports=Un)._=Un:J._=Un:L._=Un}).call(Jn)});var Wt=Mn((Kt,Se)=>{A();(function(f){"use strict";function y(c,R){var h=(c&65535)+(R&65535),I=(c>>16)+(R>>16)+(h>>16);return I<<16|h&65535}function S(c,R){return c<<R|c>>>32-R}function u(c,R,h,I,w,b){return y(S(y(y(R,c),y(I,b)),w),h)}function M(c,R,h,I,w,b,C){return u(R&h|~R&I,c,R,w,b,C)}function F(c,R,h,I,w,b,C){return u(R&I|h&~I,c,R,w,b,C)}function P(c,R,h,I,w,b,C){return u(R^h^I,c,R,w,b,C)}function z(c,R,h,I,w,b,C){return u(h^(R|~I),c,R,w,b,C)}function k(c,R){c[R>>5]|=128<<R%32,c[(R+64>>>9<<4)+14]=R;var h,I,w,b,C,l=1732584193,p=-271733879,m=-1732584194,v=271733878;for(h=0;h<c.length;h+=16)I=l,w=p,b=m,C=v,l=M(l,p,m,v,c[h],7,-680876936),v=M(v,l,p,m,c[h+1],12,-389564586),m=M(m,v,l,p,c[h+2],17,606105819),p=M(p,m,v,l,c[h+3],22,-1044525330),l=M(l,p,m,v,c[h+4],7,-176418897),v=M(v,l,p,m,c[h+5],12,1200080426),m=M(m,v,l,p,c[h+6],17,-1473231341),p=M(p,m,v,l,c[h+7],22,-45705983),l=M(l,p,m,v,c[h+8],7,1770035416),v=M(v,l,p,m,c[h+9],12,-1958414417),m=M(m,v,l,p,c[h+10],17,-42063),p=M(p,m,v,l,c[h+11],22,-1990404162),l=M(l,p,m,v,c[h+12],7,1804603682),v=M(v,l,p,m,c[h+13],12,-40341101),m=M(m,v,l,p,c[h+14],17,-1502002290),p=M(p,m,v,l,c[h+15],22,1236535329),l=F(l,p,m,v,c[h+1],5,-165796510),v=F(v,l,p,m,c[h+6],9,-1069501632),m=F(m,v,l,p,c[h+11],14,643717713),p=F(p,m,v,l,c[h],20,-373897302),l=F(l,p,m,v,c[h+5],5,-701558691),v=F(v,l,p,m,c[h+10],9,38016083),m=F(m,v,l,p,c[h+15],14,-660478335),p=F(p,m,v,l,c[h+4],20,-405537848),l=F(l,p,m,v,c[h+9],5,568446438),v=F(v,l,p,m,c[h+14],9,-1019803690),m=F(m,v,l,p,c[h+3],14,-187363961),p=F(p,m,v,l,c[h+8],20,1163531501),l=F(l,p,m,v,c[h+13],5,-1444681467),v=F(v,l,p,m,c[h+2],9,-51403784),m=F(m,v,l,p,c[h+7],14,1735328473),p=F(p,m,v,l,c[h+12],20,-1926607734),l=P(l,p,m,v,c[h+5],4,-378558),v=P(v,l,p,m,c[h+8],11,-2022574463),m=P(m,v,l,p,c[h+11],16,1839030562),p=P(p,m,v,l,c[h+14],23,-35309556),l=P(l,p,m,v,c[h+1],4,-1530992060),v=P(v,l,p,m,c[h+4],11,1272893353),m=P(m,v,l,p,c[h+7],16,-155497632),p=P(p,m,v,l,c[h+10],23,-1094730640),l=P(l,p,m,v,c[h+13],4,681279174),v=P(v,l,p,m,c[h],11,-358537222),m=P(m,v,l,p,c[h+3],16,-722521979),p=P(p,m,v,l,c[h+6],23,76029189),l=P(l,p,m,v,c[h+9],4,-640364487),v=P(v,l,p,m,c[h+12],11,-421815835),m=P(m,v,l,p,c[h+15],16,530742520),p=P(p,m,v,l,c[h+2],23,-995338651),l=z(l,p,m,v,c[h],6,-198630844),v=z(v,l,p,m,c[h+7],10,1126891415),m=z(m,v,l,p,c[h+14],15,-1416354905),p=z(p,m,v,l,c[h+5],21,-57434055),l=z(l,p,m,v,c[h+12],6,1700485571),v=z(v,l,p,m,c[h+3],10,-1894986606),m=z(m,v,l,p,c[h+10],15,-1051523),p=z(p,m,v,l,c[h+1],21,-2054922799),l=z(l,p,m,v,c[h+8],6,1873313359),v=z(v,l,p,m,c[h+15],10,-30611744),m=z(m,v,l,p,c[h+6],15,-1560198380),p=z(p,m,v,l,c[h+13],21,1309151649),l=z(l,p,m,v,c[h+4],6,-145523070),v=z(v,l,p,m,c[h+11],10,-1120210379),m=z(m,v,l,p,c[h+2],15,718787259),p=z(p,m,v,l,c[h+9],21,-343485551),l=y(l,I),p=y(p,w),m=y(m,b),v=y(v,C);return[l,p,m,v]}function hn(c){var R,h="",I=c.length*32;for(R=0;R<I;R+=8)h+=String.fromCharCode(c[R>>5]>>>R%32&255);return h}function gn(c){var R,h=[];for(h[(c.length>>2)-1]=void 0,R=0;R<h.length;R+=1)h[R]=0;var I=c.length*8;for(R=0;R<I;R+=8)h[R>>5]|=(c.charCodeAt(R/8)&255)<<R%32;return h}function bn(c){return hn(k(gn(c),c.length*8))}function Rn(c,R){var h,I=gn(c),w=[],b=[],C;for(w[15]=b[15]=void 0,I.length>16&&(I=k(I,c.length*8)),h=0;h<16;h+=1)w[h]=I[h]^909522486,b[h]=I[h]^1549556828;return C=k(w.concat(gn(R)),512+R.length*8),hn(k(b.concat(C),640))}function Z(c){var R="0123456789abcdef",h="",I,w;for(w=0;w<c.length;w+=1)I=c.charCodeAt(w),h+=R.charAt(I>>>4&15)+R.charAt(I&15);return h}function nn(c){return unescape(encodeURIComponent(c))}function Yn(c){return bn(nn(c))}function In(c){return Z(Yn(c))}function zn(c,R){return Rn(nn(c),nn(R))}function Xn(c,R){return Z(zn(c,R))}function Nn(c,R,h){return R?h?zn(R,c):Xn(R,c):h?Yn(c):In(c)}typeof define=="function"&&define.amd?define(function(){return Nn}):typeof Se=="object"&&Se.exports?Se.exports=Nn:f.md5=Nn})(Kt)});var Gt=Mn((bs,$t)=>{"use strict";A();function is(f,y){return Object.prototype.hasOwnProperty.call(f,y)}$t.exports=function(f,y,S,u){y=y||"&",S=S||"=";var M={};if(typeof f!="string"||f.length===0)return M;var F=/\+/g;f=f.split(y);var P=1e3;u&&typeof u.maxKeys=="number"&&(P=u.maxKeys);var z=f.length;P>0&&z>P&&(z=P);for(var k=0;k<z;++k){var hn=f[k].replace(F,"%20"),gn=hn.indexOf(S),bn,Rn,Z,nn;gn>=0?(bn=hn.substr(0,gn),Rn=hn.substr(gn+1)):(bn=hn,Rn=""),Z=decodeURIComponent(bn),nn=decodeURIComponent(Rn),is(M,Z)?Array.isArray(M[Z])?M[Z].push(nn):M[Z]=[M[Z],nn]:M[Z]=nn}return M}});var Vt=Mn((xs,Jt)=>{"use strict";A();var pe=function(f){switch(typeof f){case"string":return f;case"boolean":return f?"true":"false";case"number":return isFinite(f)?f:"";default:return""}};Jt.exports=function(f,y,S,u){return y=y||"&",S=S||"=",f===null&&(f=void 0),typeof f=="object"?Object.keys(f).map(function(M){var F=encodeURIComponent(pe(M))+S;return Array.isArray(f[M])?f[M].map(function(P){return F+encodeURIComponent(pe(P))}).join(y):F+encodeURIComponent(pe(f[M]))}).join(y):u?encodeURIComponent(pe(u))+S+encodeURIComponent(pe(f)):""}});var Xt=Mn(ce=>{"use strict";A();ce.decode=ce.parse=Gt();ce.encode=ce.stringify=Vt()});var nr=Mn((Ss,kt)=>{A();var ss=Wt(),as=Xt(),fs=/^[0-9a-f]{32}$/;function os(f){var y={},S={protocol:1,format:1};for(var u in f)S[u]||(y[u]=f[u]);return y}function Qt(f,y){if(f)return typeof f.protocol=="boolean"?f.protocol:f.protocol==="http"?!1:f.protocol==="https"?!0:void 0}function Zt(f){return f=typeof f=="string"?f.trim().toLowerCase():"unspecified",f.match(fs)?f:ss(f)}function jt(f){var y=as.stringify(os(f));return y&&"?"+y||""}var Es=kt.exports={url:function(f,y,S){var u="//www.gravatar.com/avatar/";y&&y.cdn?(u=y.cdn+"/avatar/",delete y.cdn):(y&&y.protocol&&(S=Qt(y)),typeof S<"u"&&(u=S?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var M=jt(y);return u+Zt(f)+M},profile_url:function(f,y,S){var u=y!=null&&y.format!=null?String(y.format):"json",M;if(y&&y.cdn)M=y.cdn+"/",delete y.cdn;else{y&&y.protocol&&(S=Qt(y));var M=S&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var F=jt(y);return M+Zt(f)+"."+u+F}}});var tr=Mn((Ms,er)=>{A();er.exports=nr()});var rr=Mn(he=>{A();(function(f,y){if(typeof he=="object"&&he)y(he);else{var S={};y(S),typeof define=="function"&&define.amd?define(S):f.Mustache=S}})(he,function(f){var y=RegExp.prototype.test;function S(w,b){return y.call(w,b)}var u=/\S/;function M(w){return!S(u,w)}var F=Object.prototype.toString,P=Array.isArray||function(w){return F.call(w)==="[object Array]"};function z(w){return typeof w=="function"}function k(w){return w.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var hn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function gn(w){return String(w).replace(/[&<>"'\/]/g,function(b){return hn[b]})}function bn(w){if(!P(w)||w.length!==2)throw new Error("Invalid tags: "+w);return[new RegExp(k(w[0])+"\\s*"),new RegExp("\\s*"+k(w[1]))]}var Rn=/\s*/,Z=/\s+/,nn=/\s*=/,Yn=/\s*\}/,In=/#|\^|\/|>|\{|&|=|!/;function zn(w,b){b=b||f.tags,w=w||"",typeof b=="string"&&(b=b.split(Z));var C=bn(b),l=new c(w),p=[],m=[],v=[],N=!1,B=!1;function Y(){if(N&&!B)for(;v.length;)delete m[v.pop()];else v=[];N=!1,B=!1}for(var vn,L,J,mn,Qn,en;!l.eos();){if(vn=l.pos,J=l.scanUntil(C[0]),J)for(var _n=0,Hn=J.length;_n<Hn;++_n)mn=J.charAt(_n),M(mn)?v.push(m.length):B=!0,m.push(["text",mn,vn,vn+1]),vn+=1,mn===`
`&&Y();if(!l.scan(C[0]))break;if(N=!0,L=l.scan(In)||"name",l.scan(Rn),L==="="?(J=l.scanUntil(nn),l.scan(nn),l.scanUntil(C[1])):L==="{"?(J=l.scanUntil(new RegExp("\\s*"+k("}"+b[1]))),l.scan(Yn),l.scanUntil(C[1]),L="&"):J=l.scanUntil(C[1]),!l.scan(C[1]))throw new Error("Unclosed tag at "+l.pos);if(Qn=[L,J,vn,l.pos],m.push(Qn),L==="#"||L==="^")p.push(Qn);else if(L==="/"){if(en=p.pop(),!en)throw new Error('Unopened section "'+J+'" at '+vn);if(en[1]!==J)throw new Error('Unclosed section "'+en[1]+'" at '+vn)}else L==="name"||L==="{"||L==="&"?B=!0:L==="="&&(C=bn(b=J.split(Z)))}if(en=p.pop(),en)throw new Error('Unclosed section "'+en[1]+'" at '+l.pos);return Nn(Xn(m))}function Xn(w){for(var b=[],C,l,p=0,m=w.length;p<m;++p)C=w[p],C&&(C[0]==="text"&&l&&l[0]==="text"?(l[1]+=C[1],l[3]=C[3]):(b.push(C),l=C));return b}function Nn(w){for(var b=[],C=b,l=[],p,m,v=0,N=w.length;v<N;++v)switch(p=w[v],p[0]){case"#":case"^":C.push(p),l.push(p),C=p[4]=[];break;case"/":m=l.pop(),m[5]=p[2],C=l.length>0?l[l.length-1][4]:b;break;default:C.push(p)}return b}function c(w){this.string=w,this.tail=w,this.pos=0}c.prototype.eos=function(){return this.tail===""},c.prototype.scan=function(w){var b=this.tail.match(w);if(b&&b.index===0){var C=b[0];return this.tail=this.tail.substring(C.length),this.pos+=C.length,C}return""},c.prototype.scanUntil=function(w){var b=this.tail.search(w),C;switch(b){case-1:C=this.tail,this.tail="";break;case 0:C="";break;default:C=this.tail.substring(0,b),this.tail=this.tail.substring(b)}return this.pos+=C.length,C};function R(w,b){this.view=w??{},this.cache={".":this.view},this.parent=b}R.prototype.push=function(w){return new R(w,this)},R.prototype.lookup=function(w){var b;if(w in this.cache)b=this.cache[w];else{for(var C=this;C;){if(w.indexOf(".")>0){b=C.view;for(var l=w.split("."),p=0;b!=null&&p<l.length;)b=b[l[p++]]}else b=C.view[w];if(b!=null)break;C=C.parent}this.cache[w]=b}return z(b)&&(b=b.call(this.view)),b};function h(){this.cache={}}h.prototype.clearCache=function(){this.cache={}},h.prototype.parse=function(w,b){var C=this.cache,l=C[w];return l==null&&(l=C[w]=zn(w,b)),l},h.prototype.render=function(w,b,C){var l=this.parse(w),p=b instanceof R?b:new R(b);return this.renderTokens(l,p,C,w)},h.prototype.renderTokens=function(w,b,C,l){var p="",m=this;function v(mn){return m.render(mn,b,C)}for(var N,B,Y=0,vn=w.length;Y<vn;++Y)switch(N=w[Y],N[0]){case"#":if(B=b.lookup(N[1]),!B)continue;if(P(B))for(var L=0,J=B.length;L<J;++L)p+=this.renderTokens(N[4],b.push(B[L]),C,l);else if(typeof B=="object"||typeof B=="string")p+=this.renderTokens(N[4],b.push(B),C,l);else if(z(B)){if(typeof l!="string")throw new Error("Cannot use higher-order sections without the original template");B=B.call(b.view,l.slice(N[3],N[5]),v),B!=null&&(p+=B)}else p+=this.renderTokens(N[4],b,C,l);break;case"^":B=b.lookup(N[1]),(!B||P(B)&&B.length===0)&&(p+=this.renderTokens(N[4],b,C,l));break;case">":if(!C)continue;B=z(C)?C(N[1]):C[N[1]],B!=null&&(p+=this.renderTokens(this.parse(B),b,C,B));break;case"&":B=b.lookup(N[1]),B!=null&&(p+=B);break;case"name":B=b.lookup(N[1]),B!=null&&(p+=f.escape(B));break;case"text":p+=N[1];break}return p},f.name="mustache.js",f.version="0.8.1",f.tags=["{{","}}"];var I=new h;f.clearCache=function(){return I.clearCache()},f.parse=function(w,b){return I.parse(w,b)},f.render=function(w,b,C){return I.render(w,b,C)},f.to_html=function(w,b,C,l){var p=f.render(w,b,C);if(z(l))l(p);else return p},f.escape=gn,f.Scanner=c,f.Context=R,f.Writer=h})});var sr=Mn((Fs,ir)=>{A();var je=(Yt(),ts(Ot)),Vn=Ht(),us=tr(),ls=rr(),ds=new Date,ps=ds.getFullYear();function Pn(f){switch(f.substr(5,2)){case"01":return"January ";case"02":return"February ";case"03":return"March ";case"04":return"April ";case"05":return"May ";case"06":return"June ";case"07":return"July ";case"08":return"August ";case"09":return"September ";case"10":return"October ";case"11":return"November ";case"12":return"December "}}function cs(f){f.basics.capitalName=f.basics.name.toUpperCase(),f.basics&&f.basics.email&&(f.basics.gravatar=us.url(f.basics.email,{s:"200",r:"pg",d:"mm"})),(f.basics.picture||f.basics.gravatar)&&(f.photo=f.basics.picture?f.basics.picture:f.basics.gravatar),Vn.each(f.basics.profiles,function(u){switch(u.network.toLowerCase()){case"facebook":u.iconClass="fa fa-facebook-square";break;case"github":u.iconClass="fa fa-github-square";break;case"twitter":u.iconClass="fa fa-twitter-square";break;case"googlePlus":case"google-plus":case"googleplus":u.iconClass="fa fa-google-plus-square";break;case"youtube":case"YouTube":u.iconClass="fa fa-youtube-square";break;case"vimeo":u.iconClass="fa fa-vimeo-square";break;case"linkedin":u.iconClass="fa fa-linkedin-square";break;case"pinterest":u.iconClass="fa fa-pinterest-square";break;case"flickr":case"flicker":u.iconClass="fa fa-flickr";break;case"behance":u.iconClass="fa fa-behance-square";break;case"dribbble":case"dribble":u.iconClass="fa fa-dribbble";break;case"codepen":case"codePen":u.iconClass="fa fa-codepen";break;case"soundcloud":case"soundCloud":u.iconClass="fa fa-soundcloud";break;case"steam":u.iconClass="fa fa-steam";break;case"reddit":u.iconClass="fa fa-reddit";break;case"tumblr":case"tumbler":u.iconClass="fa fa-tumblr-square";break;case"stack-overflow":case"stackOverflow":u.iconClass="fa fa-stack-overflow";break;case"bitbucket":u.iconClass="fa fa-bitbucket";break;case"blog":case"rss":u.iconClass="fa fa-rss-square";break}u.url?u.text=u.url:u.text=u.network+": "+u.username}),f.work&&f.work.length&&(f.workBool=!0,Vn.each(f.work,function(u){u.startDate&&(u.startDateYear=(u.startDate||"").substr(0,4),u.startDateMonth=Pn(u.startDate||"")),u.endDate?(u.endDateYear=(u.endDate||"").substr(0,4),u.endDateMonth=Pn(u.endDate||"")):u.endDateYear="Present",u.highlights&&u.highlights[0]&&u.highlights[0]!=""&&(u.boolHighlights=!0)})),f.volunteer&&f.volunteer.length&&(f.volunteerBool=!0,Vn.each(f.volunteer,function(u){u.startDate&&(u.startDateYear=(u.startDate||"").substr(0,4),u.startDateMonth=Pn(u.startDate||"")),u.endDate?(u.endDateYear=(u.endDate||"").substr(0,4),u.endDateMonth=Pn(u.endDate||"")):u.endDateYear="Present",u.highlights&&u.highlights[0]&&u.highlights[0]!=""&&(u.boolHighlights=!0)})),f.education&&f.education.length&&f.education[0].institution&&(f.educationBool=!0,Vn.each(f.education,function(u){!u.area||!u.studyType?u.educationDetail=(u.area==null?"":u.area)+(u.studyType==null?"":u.studyType):u.educationDetail=u.area+", "+u.studyType,u.startDate?(u.startDateYear=u.startDate.substr(0,4),u.startDateMonth=Pn(u.startDate||"")):u.endDateMonth="",u.endDate?(u.endDateYear=u.endDate.substr(0,4),u.endDateMonth=Pn(u.endDate||""),u.endDateYear>ps&&(u.endDateYear+=" (expected)")):(u.endDateYear="Present",u.endDateMonth=""),u.courses&&u.courses[0]&&u.courses[0]!=""&&(u.educationCourses=!0)})),f.awards&&f.awards.length&&f.awards[0].title&&(f.awardsBool=!0,Vn.each(f.awards,function(u){u.year=(u.date||"").substr(0,4),u.day=(u.date||"").substr(8,2),u.month=Pn(u.date||"")})),f.publications&&f.publications.length&&f.publications[0].name&&(f.publicationsBool=!0,Vn.each(f.publications,function(u){u.year=(u.releaseDate||"").substr(0,4),u.day=(u.releaseDate||"").substr(8,2),u.month=Pn(u.releaseDate||"")})),f.skills&&f.skills.length&&f.skills[0].name&&(f.skillsBool=!0),f.interests&&f.interests.length&&f.interests[0].name&&(f.interestsBool=!0),f.languages&&f.languages.length&&f.languages[0].language&&(f.languagesBool=!0),f.references&&f.references.length&&f.references[0].name&&(f.referencesBool=!0),f.css=je.readFileSync("//style.css","utf-8"),f.printcss=je.readFileSync("//print.css","utf-8");var y=je.readFileSync("//resume.template","utf8"),S=ls.render(y,f);return S}ir.exports={render:cs}});A();var On=es(sr(),1),ar=On.default??On,Ps=ar.render??On.render,zs=ar.pdfRenderOptions??On.pdfRenderOptions;export{zs as pdfRenderOptions,Ps as render};
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
