var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Xi=Object.create;var Er=Object.defineProperty;var Qi=Object.getOwnPropertyDescriptor;var Zi=Object.getOwnPropertyNames;var ji=Object.getPrototypeOf,ki=Object.prototype.hasOwnProperty;var Se=(f,y)=>()=>(f&&(y=f(f=0)),y);var Mn=(f,y)=>()=>(y||f((y={exports:{}}).exports,y),y.exports),ns=(f,y)=>{for(var S in y)Er(f,S,{get:y[S],enumerable:!0})},Te=(f,y,S,u)=>{if(y&&typeof y=="object"||typeof y=="function")for(let M of Zi(y))!ki.call(f,M)&&M!==S&&Er(f,M,{get:()=>y[M],enumerable:!(u=Qi(y,M))||u.enumerable});return f};var rs=(f,y,S)=>(S=f!=null?Xi(ji(f)):{},Te(y||!f||!f.__esModule?Er(S,"default",{value:f,enumerable:!0}):S,f)),es=f=>Te(Er({},"__esModule",{value:!0}),f);var A=Se(()=>{});var Ye={};ns(Ye,{createReadStream:()=>Le,createWriteStream:()=>Ae,default:()=>ts,existsSync:()=>Be,lstatSync:()=>Pe,mkdirSync:()=>qe,readFileSync:()=>Ie,readdirSync:()=>Ue,rmdirSync:()=>Ne,statSync:()=>Zr,unlinkSync:()=>ze,writeFileSync:()=>Fe});function Qr(f){return String(f).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Me(f){var y=Qr(f);if(Rr[y]!==void 0)return Rr[y];for(var S=Object.keys(Rr),u=0;u<S.length;u++)if(y.endsWith("/"+S[u])||y===S[u])return Rr[S[u]]}function Xr(f){var y=Qr(f);if((y===""||y===".")&&Jn["."]!==void 0)return Jn["."];if(Jn[y]!==void 0)return Jn[y];for(var S=Object.keys(Jn),u=0;u<S.length;u++)if(y.endsWith("/"+S[u])||y===S[u])return Jn[S[u]]}var Rr,Jn,Ie,Ue,Be,Fe,qe,Zr,Pe,ze,Ne,Le,Ae,ts,He=Se(()=>{"use strict";A();Rr={"package.json":`{\r
  "name": "jsonresume-theme-kendall-fork",\r
  "version": "0.0.0",\r
  "description": "Fork of kendall theme",\r
  "main": "index.js",\r
  "scripts": {\r
    "test": "echo \\"Error: no test specified\\" && exit 1"\r
  },\r
  "author": "Jaroslav B\xF6hmer",\r
  "license": "MIT",\r
  "dependencies": {\r
    "gravatar": "^1.0.6",\r
    "lodash": "^2.4.1",\r
    "mustache": "^0.8.2"\r
  },\r
  "repository": {\r
    "type": "git",\r
    "url": "https://github.com/Joas1988/jsonresume-theme-kendall.git"\r
  },\r
  "keywords": [\r
    "json", "jsonresume", "theme"\r
  ],\r
  "bugs": {\r
    "url": "https://github.com/Joas1988/jsonresume-theme-kendall/issues"\r
  },\r
  "homepage": "https://github.com/Joas1988/jsonresume-theme-kendall"\r
}\r
`,"print.css":`body {\r
  font-size: .95em;\r
  -webkit-print-color-adjust: exact;\r
}\r
\r
a[href]:after {\r
  content: none !important;\r
}\r
\r
#photo{\r
  display: none;\r
}\r
\r
.box {\r
  margin-bottom: -10px;\r
}\r
.col-sm-5{\r
  width: 40%;\r
  padding: 0 15px;\r
}\r
\r
.col-sm-7{\r
  width: 60%;\r
  padding: 0 15px;\r
}\r
\r
.skills .col-sm-offset-1,\r
.interests .col-sm-offset-1{\r
  margin-top: -10px;\r
  margin-bottom: 5px;\r
}\r
\r
#awards:before,\r
#education:before {\r
  background: none;\r
}\r
\r
#awards .description,\r
#education .description,\r
.job .details {\r
  border: 1px solid #eee;\r
}\r
.publication,\r
.publication .panel-heading,\r
.publication .name{\r
  margin: 0;\r
  padding: 0 5px;\r
  border: none;\r
}\r
.publication .panel-body {\r
  padding: 0 10px;\r
  margin: 0;\r
}\r
\r
.badge {\r
  margin: 0;\r
}\r
\r
.list-group-item{\r
  border: none;\r
  margin: 0;\r
  padding: 5px 15px;\r
}\r
.list-group-item:after{\r
  content: '';\r
  position: absolute;\r
  top: 8px;\r
  right: 0;\r
  left: -1px;\r
  height: 0;\r
  width: 0;\r
  border: solid transparent;\r
  border-right-color: #999;\r
  border-width: 4px;\r
  pointer-events: none;\r
 }\r
`,"resume.template":`<!DOCTYPE html>\r
<html lang="en">\r
  <head>\r
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\r
    <meta charset="utf-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\r
    <meta name="viewport" content="width=device-width, initial-scale=1">\r
    <title>Resume of {{basics.name}}</title>\r
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">\r
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">\r
    <style type="text/css">\r
    {{{css}}}\r
    </style>\r
    <style type="text/css" media="print">\r
    {{{printcss}}}\r
    </style>\r
  </head>\r
  <body>\r
    <div class="container">\r
      <div class="row">\r
        <div class="col-xs-12">\r
          <div id="photo-header" class="text-center">\r
            <!-- PHOTO (AVATAR) -->\r
            {{#photo}}\r
            <div id="photo">\r
              <img src="{{photo}}" alt="avatar">\r
            </div>\r
            {{/photo}}\r
            <div id="text-header" {{^photo}}style="margin-top: 90px;"{{/photo}}>\r
              <h1>{{basics.name}}<br>{{#basics.label}}<span>{{basics.label}}</span>{{/basics.label}}</h1>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="row">\r
        <div class="col-xs-12 col-sm-7">\r
          {{#basics.summary}}\r
          <!-- ABOUT ME -->\r
          <div class="box">\r
            <h2><i class="fa fa-user ico"></i> About</h2>\r
            <p>{{{basics.summary}}}</p>\r
          </div>\r
          {{/basics.summary}}\r
          {{#educationBool}}\r
          <!-- EDUCATION -->\r
          <div class="box">\r
            <h2><i class="fa fa-university ico"></i> Education</h2>\r
            <ul id="education" class="clearfix">\r
              {{#education}}\r
              <li>\r
                <div class="year pull-left">{{startDateYear}} {{endDateYear}}</div>\r
                <div class="description pull-right">\r
                  <h3>{{institution}}</h3>\r
                  {{#studyType}}<p><i class= "fa fa-graduation-cap ico"></i> {{studyType}}</p>{{/studyType}}\r
                  <p>{{area}}</p>\r
                  {{#gpa}}\r
                  <p>\r
                    GPA: {{gpa}}\r
                  </p>\r
                  {{/gpa}}\r
                  {{#educationCourses}}\r
                    <div>Courses</div>\r
                    <ul class="list-group">\r
                      {{#courses}}\r
                      <li class="list-group-item">{{{.}}}</li>\r
                      {{/courses}}\r
                    </ul>\r
                  {{/educationCourses}}\r
                </div>\r
              </li>\r
              {{/education}}\r
            </ul>\r
          </div>\r
          {{/educationBool}}\r
          {{#workBool}}\r
          <!-- WORK EXPERIENCE -->\r
          <div class="box">\r
            <h2><i class= "fa fa-suitcase ico"></i> Work Experience</h2>\r
            {{#work}}\r
              <div class="job clearfix">\r
                <div class="row">\r
                  <div class="details">\r
                    <div class="where">{{company}}</div>\r
                    {{#website}}\r
                    <div class="address">\r
                      <a href="{{website}}" target= "_blank"><i class="fa fa-globe ico"></i> {{website}}</a>\r
                    </div>\r
                    {{/website}}\r
                    <div class="year">{{startDateMonth}}{{startDateYear}} \u2013 {{endDateMonth}}{{endDateYear}}</div>\r
                  </div>\r
                </div>\r
                <div class="row">\r
                  <div class="col-xs-offset-1 col-xs-11">\r
                    <div class="profession">{{position}}</div>\r
                    <div class="description">\r
                      {{{summary}}}\r
                      {{#boolHighlights}}\r
                      <div class="highlights">Highlights</div>\r
                      <ul class="list-group">\r
                        {{#highlights}}\r
                        <li class="list-group-item">{{{.}}}</li>\r
                        {{/highlights}}\r
                      </ul>\r
                      {{/boolHighlights}}\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            {{/work}}\r
          </div>\r
          {{/workBool}}\r
          {{#awardsBool}}\r
          <!-- AWARDS -->\r
          <div class="box">\r
            <h2><i class="fa fa-certificate ico"></i> Awards</h2>\r
            <ul id="awards" class="clearfix">\r
              {{#awards}}\r
              <li>\r
                <div class="year pull-left">{{month}} {{year}}</div>\r
                <div class="description pull-right">\r
                  <h3>{{awarder}}</h3>\r
                  <p><i class="fa fa-trophy ico"></i> {{title}}</p>\r
                  <p>{{{summary}}}</p>\r
                </div>\r
              </li>\r
              {{/awards}}\r
            </ul>\r
          </div>\r
          {{/awardsBool}}\r
          {{#volunteerBool}}\r
          <!-- VOLUNTEER -->\r
          <div class="box">\r
            <h2><i class= "fa fa-group ico"></i> Volunteer</h2>\r
            {{#volunteer}}\r
              <div class="job clearfix">\r
                <div class="row">\r
                  <div class="details">\r
                    <div class="where">{{organization}}</div>\r
                    {{#website}}\r
                    <div class="address">\r
                      <a href="{{website}}" target= "_blank"><i class="fa fa-globe ico"></i> {{website}}</a>\r
                    </div>\r
                    {{/website}}\r
                    <div class="year">{{startDateMonth}}{{startDateYear}} \u2013 {{endDateMonth}}{{endDateYear}}</div>\r
                  </div>\r
                </div>\r
                <div class="row">\r
                  <div class="col-xs-11 pull-right">\r
                    <div class="profession">{{position}}</div>\r
                    <div class="description">\r
                      {{{summary}}}\r
                      {{#boolHighlights}}\r
                      <div class="highlights">Highlights</div>\r
                      <ul class="list-group">\r
                        {{#highlights}}\r
                        <li class="list-group-item">{{{.}}}</li>\r
                        {{/highlights}}\r
                      </ul>\r
                      {{/boolHighlights}}\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            {{/volunteer}}\r
          </div>\r
          {{/volunteerBool}}\r
        </div>\r
        <div class="col-xs-12 col-sm-5">\r
          <!-- CONTACT -->\r
          <div class="box clearfix">\r
            <h2><i class="fa fa-bullseye ico"></i> Contact</h2>\r
            {{#basics.location}}\r
            <div class="contact-item">\r
              <div class="icon pull-left text-center"><span class="fa fa-map-marker fa-fw"></span></div>\r
              <div class="title pull-right">{{basics.location.address}}</div>\r
              <div class="description pull-right">{{basics.location.city}}{{#basics.location.postalCode}}, {{basics.location.postalCode}}{{/basics.location.postalCode}}{{#basics.location.countryCode}} {{basics.location.countryCode}}{{/basics.location.countryCode}}</div>\r
            </div>\r
            {{/basics.location}}\r
            {{#basics.phone}}\r
            <div class="contact-item">\r
              <div class="icon pull-left text-center"><span class="fa fa-phone fa-fw"></span></div>\r
              <div class="title only pull-right">{{basics.phone}}</div>\r
            </div>\r
            {{/basics.phone}}\r
            {{#basics.email}}\r
            <div class="contact-item">\r
              <div class="icon pull-left text-center"><span class="fa fa-envelope fa-fw"></span></div>\r
              <div class="title only pull-right"><a href="mailto:{{basics.email}}" target="_blank">{{basics.email}}</a></div>\r
            </div>\r
            {{/basics.email}}\r
            {{#basics.website}}\r
            <div class="contact-item">\r
              <div class="icon pull-left text-center"><span class="fa fa-globe fa-fw"></span></div>\r
              <div class="title only pull-right"><a href="{{basics.website}}" target="_blank">{{basics.website}}</a></div>\r
            </div>\r
            {{/basics.website}}\r
            {{#basics.profiles}}\r
            <div class="contact-item">\r
              <div class="icon pull-left text-center"><span class="{{iconClass}} fa-fw"></span></div>\r
              <div class="title pull-right">{{network}}</div>\r
              <div class="description pull-right"><a href="{{url}}" target="_blank">{{#username}}{{username}}{{/username}}{{^username}}{{url}}{{/username}}</a></div>\r
            </div>\r
            {{/basics.profiles}}\r
          </div>\r
          {{#skillsBool}}\r
          <!-- SKILLS -->\r
          <div class="box">\r
            <h2><i class="fa fa-tasks ico"></i> Skills</h2>\r
            {{#skills}}\r
            <div class="skills clearfix">\r
              <div class="item-skills">\r
                  {{name}}\r
                  {{#level}}<span class="skill-level">{{level}}</span>{{/level}}\r
              </div>\r
              <div class="col-sm-offset-1 col-sm-12 clearfix">\r
                {{#keywords}}\r
                <span class= "skill badge">{{{.}}}</span>\r
                {{/keywords}}\r
              </div>\r
            </div>\r
            {{/skills}}\r
          </div>\r
          {{/skillsBool}}\r
          {{#publicationsBool}}\r
          <!-- PUBLICATIONS -->\r
          <div class="box">\r
            <h2><i class="fa fa-book ico"></i> Publications</h2>\r
            {{#publications}}\r
            <div class="publication panel panel-default">\r
              <div class="panel-heading">\r
                <div class="name panel-title">{{name}}</div>\r
              </div>\r
              <div class="panel-body">\r
                {{#publisher}}\r
                <div class="publisher"><i class= "fa fa-bookmark ico"></i> {{publisher}}</div>\r
                {{/publisher}}\r
                <div class="year">{{day}} {{month}} {{year}}</div>\r
                {{#website}}\r
                <div class="address">\r
                  <a href="{{website}}" target= "_blank"><i class="fa fa-globe ico"></i> {{website}}</a>\r
                </div>\r
                {{/website}}\r
                {{#summary}}\r
                <p>{{{summary}}}</p>\r
                {{/summary}}\r
              </div>\r
            </div>\r
            {{/publications}}\r
          </div>\r
          {{/publicationsBool}}\r
          {{#languagesBool}}\r
          <!-- LANGUAGES -->\r
          <div class="box">\r
            <h2><i class="fa fa-language ico"></i> Languages</h2>\r
            <ul class="list-group">\r
              {{#languages}}\r
              <li class=" list-group-item">{{language}}<span class="skill badge pull-right">{{fluency}}</span></li>\r
              {{/languages}}\r
            </ul>\r
          </div>\r
          {{/languagesBool}}\r
          {{#interestsBool}}\r
          <!-- HOBBIES -->\r
          <div class="box">\r
            <h2><i class="fa fa-heart ico"></i> Interests</h2>\r
            {{#interests}}\r
            <div class="interests clearfix">\r
              <div class="item-interests">\r
                  {{name}}\r
              </div>\r
              <div class="col-sm-offset-1 col-sm-12 clearfix">\r
                {{#keywords}}\r
                <span class= "interest badge">{{{.}}}</span>\r
                {{/keywords}}\r
              </div>\r
            </div>\r
            {{/interests}}\r
          </div>\r
          {{/interestsBool}}\r
          {{#referencesBool}}\r
          <div class="box">\r
            <h2><i class= "fa fa-check-square ico"></i> References</h2>\r
            {{#references}}\r
            <blockquote>\r
              <div>{{{reference}}}</div>\r
              <footer>\r
                <a href="{{website}}" target= "_blank">{{name}}</a>\r
              </footer>\r
            </blockquote><br>\r
            {{/references}}\r
          </div>\r
          {{/referencesBool}}\r
        </div>\r
      </div>\r
    </div>\r
    <!-- JQUERY -->\r
    <script src="//code.jquery.com/jquery-2.1.1.min.js"><\/script>\r
    <!-- BOOTSTRAP -->\r
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"><\/script>\r
\r
  </body>\r
</html>\r
`,"style.css":`@import url(//fonts.googleapis.com/css?family=Open+Sans:400,600,700,800);\r
@charset "utf-8";\r
@-webkit-viewport   { width: device-width; }\r
@-moz-viewport      { width: device-width; }\r
@-ms-viewport       { width: device-width; }\r
@-o-viewport        { width: device-width; }\r
@viewport           { width: device-width; }\r
\r
body{\r
  font-family: 'Open Sans', Arial, Tahoma;\r
  font-weight: 400;\r
  color: #363636;\r
  background: #334960;\r
}\r
blockquote {\r
  font-size: 1em;\r
}\r
\r
.container{\r
  margin-top: 80px;\r
  margin-bottom: 15px;\r
  background: #fff;\r
}\r
\r
#photo-header{\r
  margin-top: -75px;\r
}\r
#photo{\r
  width: 160px;\r
  height: 160px;\r
  border-radius: 50%;\r
  overflow: hidden;\r
  padding: 5px;\r
  background: #334960;\r
  display: inline-block;\r
}\r
#photo img{\r
  width: 150px;\r
  height: 150px;\r
  border-radius: 50%;\r
}\r
#text-header h1{\r
  margin: 0;\r
  padding: 0;\r
  font-size: 1.5em;\r
  font-weight: 700;\r
  text-transform: uppercase;\r
  letter-spacing: -1px;\r
}\r
#text-header h1::first-line{\r
  font-size: 1.5em;\r
  font-weight: 800;\r
  line-height: 1.5em;\r
}\r
#text-header h1 span{\r
  color: #334960;\r
  opacity: 0.7;\r
}\r
#text-header h1 sup{\r
  opacity: 0.5;\r
}\r
#text-header:after{\r
  width: 100%;\r
  height: 3px;\r
  border-bottom: 1px solid #ddd;\r
  margin-top: 15px;\r
  content: '';\r
  display: block;\r
}\r
\r
.box{\r
  padding-bottom: 10px;\r
  margin-bottom: 25px;\r
}\r
.box h2{\r
  color: #227c74;\r
  font-size: 1.5em;\r
  font-weight: 700;\r
  text-transform: uppercase;\r
}\r
\r
#awards,\r
#education{\r
  margin-top: 20px;\r
  position: relative;\r
  padding: 1em 0;\r
  list-style: none;\r
}\r
#awards:before,\r
#education:before {\r
  width: 5px;\r
  height: 100%;\r
  position: absolute;\r
  left: 35px;\r
  top: 0;\r
  content: ' ';\r
  display: block;\r
  background: #32475c;\r
  background: -moz-linear-gradient(top,  #ffffff 0%, #32475c 7%, #32475c 89%, #ffffff 100%);\r
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(7%,#32475c), color-stop(89%,#32475c), color-stop(100%,#ffffff));\r
  background: -webkit-linear-gradient(top,  #ffffff 0%,#32475c 7%,#32475c 89%,#ffffff 100%);\r
  background: -o-linear-gradient(top,  #ffffff 0%,#32475c 7%,#32475c 89%,#ffffff 100%);\r
  background: -ms-linear-gradient(top,  #ffffff 0%,#32475c 7%,#32475c 89%,#ffffff 100%);\r
  background: linear-gradient(to bottom,  #ffffff 0%,#32475c 7%,#32475c 89%,#ffffff 100%);\r
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0 );\r
}\r
#awards li,\r
#education li{\r
  width: 100%;\r
  z-index: 2;\r
  position: relative;\r
  float: left;\r
}\r
#awards .year,\r
#education .year{\r
  width: 10%;\r
  background: #fff;\r
  padding: 10px;\r
  font-weight: 700;\r
  display: inline-block;\r
}\r
#awards .description,\r
#education .description{\r
  width: 85%;\r
  display: inline-block;\r
  background: #eee;\r
  margin-bottom: 10px;\r
  position: relative;\r
  padding: 10px;\r
  border-bottom: 1px solid #ccc;\r
  border-right: 1px solid #ccc;\r
}\r
#awards .description:after,\r
#education .description:after {\r
  content: '';\r
  position: absolute;\r
  top: 15px;\r
  right: 0;\r
  left: -16px;\r
  height: 0;\r
  width: 0;\r
  border: solid transparent;\r
  border-right-color: #eee;\r
  border-width: 8px;\r
  pointer-events: none;\r
}\r
#awards .description h3,\r
#education .description h3{\r
  font-size: 1.2em;\r
  margin: 0;\r
  padding: 0;\r
  font-weight: 700;\r
}\r
#awards .description p,\r
#education .description p{\r
  margin-top: 5px;\r
  padding: 0;\r
}\r
\r
.job{\r
  margin-bottom: 15px;\r
}\r
.job .details {\r
  margin-left: 3%;\r
  width: 95%;\r
  padding: 10px;\r
  margin-bottom: 10px;\r
  background: #eee;\r
  border-bottom: 1px solid #ccc;\r
  border-right: 1px solid #ccc;\r
}\r
.job .where{\r
  font-size: 1.2em;\r
  font-weight: bold;\r
}\r
.job .year{\r
  opacity: 0.7;\r
}\r
.job .profession{\r
  font-size: 1.2em;\r
  font-weight: bold;\r
}\r
.job .description{\r
  line-height: 1.5em;\r
}\r
.job .highlights{\r
  padding: 10px 0;\r
  font-weight: bold;\r
}\r
.publication .name{\r
  font-size: 1em;\r
  font-weight: bold;\r
}\r
.publication .year{\r
    opacity: 0.7;\r
}\r
.publication p{\r
  margin: 0;\r
  padding-top: 10px;\r
}\r
\r
.contact-item{\r
  width: 100%;\r
  float: left;\r
}\r
.contact-item .icon{\r
  padding: 10px;\r
  border-right: 1px solid #ccc;\r
  border-bottom: 1px solid #ccc;\r
  color: #32475c;\r
  background: #eee;\r
}\r
.contact-item:last-child .icon{\r
  border-bottom: none;\r
}\r
.contact-item .title{\r
  width: 80%;\r
  width: calc(100% - 55px);\r
  font-weight: 700;\r
  opacity: 0.9;\r
}\r
.contact-item .title.only{\r
  margin-top: 10px;\r
}\r
.contact-item .description{\r
  width: 80%;\r
  width: calc(100% - 55px);\r
  color: #334960;\r
}\r
\r
.item-interests,\r
.item-skills{\r
  height: 30px;\r
  color: #334960;\r
  padding: 5px 10px;\r
  margin-bottom: 5px;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  font-size: 1.1em;\r
  font-weight: 600;\r
}\r
.interest,\r
.skill{\r
  color: #fff;\r
  display: inline-block;\r
  margin-right: 5px;\r
  margin-bottom: 5px;\r
  padding: 5px 10px;\r
  background: #32475c;\r
  position: relative;\r
  font-size: .85em;\r
}\r
.skill-level {\r
  background-color: #227c74;\r
  border-radius: 4px;\r
  color: #fff;\r
  padding: 1px 8px;\r
  font-size: .75em;\r
  position: absolute;\r
  margin: 1px 10px;\r
}\r
\r
#language-skills .skill{\r
  margin: 10px 0;\r
  padding-bottom: 10px;\r
  border-bottom: 1px solid #eee;\r
}\r
\r
@media (min-width: 500px) {\r
  #education .description{\r
    width: 85%;\r
  }\r
}\r
@media (min-width: 768px) {\r
  #education .description{\r
    width: 85%;\r
  }\r
}\r
@media (min-width: 992px) {\r
  #education .description{\r
    width: 87%;\r
  }\r
}\r
@media (min-width: 1200px) {\r
  #education .description{\r
    width: 90%;\r
  }\r
}\r
`},Jn={".":["LICENSE","README.md","export.js","index.js","package.json","print.css","resume.template","style.css"]};Ie=function(f,y){var S=Me(f);return S!==void 0?S:""},Ue=function(f,y){var S=Xr(f);return S===void 0&&(S=[]),y&&y.withFileTypes?S.map(function(u){var M=Qr(f)+"/"+u,F=Xr(M)!==void 0;return{name:u,isFile:function(){return!F},isDirectory:function(){return F}}}):S},Be=function(f){return Me(f)!==void 0||Xr(f)!==void 0},Fe=function(){},qe=function(){},Zr=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Pe=Zr,ze=function(){},Ne=function(){},Le=function(){return{pipe:function(f){return f},on:function(){return this}}},Ae=function(){return{write:function(){},end:function(){},on:function(){return this}}},ts={readFileSync:Ie,readdirSync:Ue,existsSync:Be,writeFileSync:Fe,mkdirSync:qe,statSync:Zr,lstatSync:Pe,unlinkSync:ze,rmdirSync:Ne,createReadStream:Le,createWriteStream:Ae}});var Oe=Mn((Gn,dr)=>{A();(function(){var f,y=[],S=[],u=0,M=+new Date+"",F=75,P=40,z=` 	\v\f\xA0\uFEFF
\r\u2028\u2029\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000`,k=/\b__p \+= '';/g,hn=/\b(__p \+=) '' \+/g,gn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,bn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,En=/\w*$/,Z=/^\s*function[ \n\r\t]+\w/,nn=/<%=([\s\S]+?)%>/g,Hn=RegExp("^["+z+"]*0+(?=.$)"),In=/($^)/,zn=/\bthis\b/,Xn=/['\n\r\t\u2028\u2029\\]/g,Nn=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],c=0,E="[object Arguments]",h="[object Array]",I="[object Boolean]",w="[object Date]",b="[object Function]",C="[object Number]",l="[object Object]",p="[object RegExp]",m="[object String]",v={};v[b]=!1,v[E]=v[h]=v[I]=v[w]=v[C]=v[l]=v[p]=v[m]=!0;var N={leading:!1,maxWait:0,trailing:!1},B={configurable:!1,enumerable:!1,value:null,writable:!1},H={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1},vn={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},L=H[typeof window]&&window||this,G=H[typeof Gn]&&Gn&&!Gn.nodeType&&Gn,mn=H[typeof dr]&&dr&&!dr.nodeType&&dr,Qn=mn&&mn.exports===G&&G,rn=H[typeof globalThis]&&globalThis;rn&&(rn.global===rn||rn.window===rn)&&(L=rn);function _n(D,U,q){for(var Y=(q||0)-1,K=D?D.length:0;++Y<K;)if(D[Y]===U)return Y;return-1}function On(D,U){var q=typeof U;if(D=D.cache,q=="boolean"||U==null)return D[U]?0:-1;q!="number"&&q!="string"&&(q="object");var Y=q=="number"?U:M+U;return D=(D=D[q])&&D[Y],q=="object"?D&&_n(D,U)>-1?0:-1:D?0:-1}function ft(D){var U=this.cache,q=typeof D;if(q=="boolean"||D==null)U[D]=!0;else{q!="number"&&q!="string"&&(q="object");var Y=q=="number"?D:M+D,K=U[q]||(U[q]={});q=="object"?(K[Y]||(K[Y]=[])).push(D):K[Y]=!0}}function kr(D){return D.charCodeAt(0)}function ot(D,U){for(var q=D.criteria,Y=U.criteria,K=-1,un=q.length;++K<un;){var pn=q[K],V=Y[K];if(pn!==V){if(pn>V||typeof pn>"u")return 1;if(pn<V||typeof V>"u")return-1}}return D.index-U.index}function Tr(D){var U=-1,q=D.length,Y=D[0],K=D[q/2|0],un=D[q-1];if(Y&&typeof Y=="object"&&K&&typeof K=="object"&&un&&typeof un=="object")return!1;var pn=Mr();pn.false=pn.null=pn.true=pn.undefined=!1;var V=Mr();for(V.array=D,V.cache=pn,V.push=ft;++U<q;)V.push(D[U]);return V}function ut(D){return"\\"+vn[D]}function xn(){return y.pop()||[]}function Mr(){return S.pop()||{array:null,cache:null,criteria:null,false:!1,index:0,null:!1,number:null,object:null,push:null,string:null,true:!1,undefined:!1,value:null}}function yn(D){D.length=0,y.length<P&&y.push(D)}function Zn(D){var U=D.cache;U&&Zn(U),D.array=D.cache=D.criteria=D.object=D.number=D.string=D.value=null,S.length<P&&S.push(D)}function O(D,U,q){U||(U=0),typeof q>"u"&&(q=D?D.length:0);for(var Y=-1,K=q-U||0,un=Array(K<0?0:K);++Y<K;)un[Y]=D[U+Y];return un}function Ir(D){D=D?Un.defaults(L.Object(),D,Un.pick(L,Nn)):L;var U=D.Array,q=D.Boolean,Y=D.Date,K=D.Function,un=D.Math,pn=D.Number,V=D.Object,jn=D.RegExp,Bn=D.String,Rn=D.TypeError,Kn=[],ne=V.prototype,lt=D._,en=ne.toString,dt=jn("^"+Bn(en).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),pt=un.ceil,gr=D.clearTimeout,ct=un.floor,ht=K.prototype.toString,Wn=qn(Wn=V.getPrototypeOf)&&Wn,tn=ne.hasOwnProperty,kn=Kn.push,nr=D.setTimeout,re=Kn.splice,gt=Kn.unshift,ee=(function(){try{var n={},r=qn(r=V.defineProperty)&&r,e=r(n,n,n)&&r}catch{}return e})(),vr=qn(vr=V.create)&&vr,Ur=qn(Ur=U.isArray)&&Ur,vt=D.isFinite,mt=D.isNaN,mr=qn(mr=V.keys)&&mr,wn=un.max,rr=un.min,Br=D.parseInt,te=un.random,Sn={};Sn[h]=U,Sn[I]=q,Sn[w]=Y,Sn[b]=K,Sn[l]=V,Sn[C]=pn,Sn[p]=jn,Sn[m]=Bn;function a(n){return n&&typeof n=="object"&&!j(n)&&tn.call(n,"__wrapped__")?n:new Ln(n)}function Ln(n,r){this.__chain__=!!r,this.__wrapped__=n}Ln.prototype=a.prototype;var er=a.support={};er.funcDecomp=!qn(D.WinRTError)&&zn.test(Ir),er.funcNames=typeof K.name=="string",a.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:nn,variable:"",imports:{_:a}};function yt(n){var r=n[0],e=n[2],t=n[4];function i(){if(e){var s=O(e);kn.apply(s,arguments)}if(this instanceof i){var o=tr(r.prototype),d=r.apply(o,s||arguments);return an(d)?d:o}return r.apply(t,s||arguments)}return Nr(i,n),i}function Fr(n,r,e,t,i){if(e){var s=e(n);if(typeof s<"u")return s}var o=an(n);if(o){var d=en.call(n);if(!v[d])return n;var g=Sn[d];switch(d){case I:case w:return new g(+n);case C:case m:return new g(n);case p:return s=g(n.source,En.exec(n)),s.lastIndex=n.lastIndex,s}}else return n;var x=j(n);if(r){var _=!t;t||(t=xn()),i||(i=xn());for(var T=t.length;T--;)if(t[T]==n)return i[T];s=x?g(n.length):{}}else s=x?O(n):br({},n);return x&&(tn.call(n,"index")&&(s.index=n.index),tn.call(n,"input")&&(s.input=n.input)),r&&(t.push(n),i.push(s),(x?fn:J)(n,function(R,W){s[W]=Fr(R,r,e,t,i)}),_&&(yn(t),yn(i))),s}function tr(n,r){return an(n)?vr(n):{}}vr||(tr=(function(){function n(){}return function(r){if(an(r)){n.prototype=r;var e=new n;n.prototype=null}return e||D.Object()}})());function ln(n,r,e){if(typeof n!="function")return Jr;if(typeof r>"u"||!("prototype"in n))return n;var t=n.__bindData__;if(typeof t>"u"&&(er.funcNames&&(t=!n.name),t=t||!er.funcDecomp,!t)){var i=ht.call(n);er.funcNames||(t=!Z.test(i)),t||(t=zn.test(i),Nr(n,t))}if(t===!1||t!==!0&&t[1]&1)return n;switch(e){case 1:return function(s){return n.call(r,s)};case 2:return function(s,o){return n.call(r,s,o)};case 3:return function(s,o,d){return n.call(r,s,o,d)};case 4:return function(s,o,d,g){return n.call(r,s,o,d,g)}}return xe(n,r)}function ie(n){var r=n[0],e=n[1],t=n[2],i=n[3],s=n[4],o=n[5],d=e&1,g=e&2,x=e&4,_=e&8,T=r;function R(){var W=d?s:this;if(t){var $=O(t);kn.apply($,arguments)}if((i||x)&&($||($=O(arguments)),i&&kn.apply($,i),x&&$.length<o))return e|=16,ie([r,_?e:e&-4,$,null,s,o]);if($||($=arguments),g&&(r=W[T]),this instanceof R){W=tr(r.prototype);var dn=r.apply(W,$);return an(dn)?dn:W}return r.apply(W,$)}return Nr(R,n),R}function ir(n,r){var e=-1,t=yr(),i=n?n.length:0,s=i>=F&&t===_n,o=[];if(s){var d=Tr(r);d?(t=On,r=d):s=!1}for(;++e<i;){var g=n[e];t(r,g)<0&&o.push(g)}return s&&Zn(r),o}function Fn(n,r,e,t){for(var i=(t||0)-1,s=n?n.length:0,o=[];++i<s;){var d=n[i];if(d&&typeof d=="object"&&typeof d.length=="number"&&(j(d)||wr(d))){r||(d=Fn(d,r,e));var g=-1,x=d.length,_=o.length;for(o.length+=x;++g<x;)o[_++]=d[g]}else e||o.push(d)}return o}function $n(n,r,e,t,i,s){if(e){var o=e(n,r);if(typeof o<"u")return!!o}if(n===r)return n!==0||1/n==1/r;var d=typeof n,g=typeof r;if(n===n&&!(n&&H[d])&&!(r&&H[g]))return!1;if(n==null||r==null)return n===r;var x=en.call(n),_=en.call(r);if(x==E&&(x=l),_==E&&(_=l),x!=_)return!1;switch(x){case I:case w:return+n==+r;case C:return n!=+n?r!=+r:n==0?1/n==1/r:n==+r;case p:case m:return n==Bn(r)}var T=x==h;if(!T){var R=tn.call(n,"__wrapped__"),W=tn.call(r,"__wrapped__");if(R||W)return $n(R?n.__wrapped__:n,W?r.__wrapped__:r,e,t,i,s);if(x!=l)return!1;var $=n.constructor,dn=r.constructor;if($!=dn&&!(X($)&&$ instanceof $&&X(dn)&&dn instanceof dn)&&"constructor"in n&&"constructor"in r)return!1}var cn=!i;i||(i=xn()),s||(s=xn());for(var on=i.length;on--;)if(i[on]==n)return s[on]==r;var Q=0;if(o=!0,i.push(n),s.push(r),T){if(on=n.length,Q=r.length,o=Q==on,o||t)for(;Q--;){var Dr=on,or=r[Q];if(t)for(;Dr--&&!(o=$n(n[Dr],or,e,t,i,s)););else if(!(o=$n(n[Q],or,e,t,i,s)))break}}else Tn(r,function(ur,lr,Vr){if(tn.call(Vr,lr))return Q++,o=tn.call(n,lr)&&$n(n[lr],ur,e,t,i,s)}),o&&!t&&Tn(n,function(ur,lr,Vr){if(tn.call(Vr,lr))return o=--Q>-1});return i.pop(),s.pop(),cn&&(yn(i),yn(s)),o}function se(n,r,e,t,i){(j(r)?fn:J)(r,function(s,o){var d,g,x=s,_=n[o];if(s&&((g=j(s))||Yr(s))){for(var T=t.length;T--;)if(d=t[T]==s){_=i[T];break}if(!d){var R;e&&(x=e(_,s),(R=typeof x<"u")&&(_=x)),R||(_=g?j(_)?_:[]:Yr(_)?_:{}),t.push(s),i.push(_),R||se(_,s,e,t,i)}}else e&&(x=e(_,s),typeof x>"u"&&(x=s)),typeof x<"u"&&(_=x);n[o]=_})}function qr(n,r){return n+ct(te()*(r-n+1))}function Pr(n,r,e){var t=-1,i=yr(),s=n?n.length:0,o=[],d=!r&&s>=F&&i===_n,g=e||d?xn():o;if(d){var x=Tr(g);i=On,g=x}for(;++t<s;){var _=n[t],T=e?e(_,t,n):_;(r?!t||g[g.length-1]!==T:i(g,T)<0)&&((e||d)&&g.push(T),o.push(_))}return d?(yn(g.array),Zn(g)):e&&yn(g),o}function zr(n){return function(r,e,t){var i={};e=a.createCallback(e,t,3);var s=-1,o=r?r.length:0;if(typeof o=="number")for(;++s<o;){var d=r[s];n(i,d,e(d,s,r),r)}else J(r,function(g,x,_){n(i,g,e(g,x,_),_)});return i}}function Cn(n,r,e,t,i,s){var o=r&1,d=r&2,g=r&4,x=r&8,_=r&16,T=r&32;if(!d&&!X(n))throw new Rn;_&&!e.length&&(r&=-17,_=e=!1),T&&!t.length&&(r&=-33,T=t=!1);var R=n&&n.__bindData__;if(R&&R!==!0)return R=O(R),R[2]&&(R[2]=O(R[2])),R[3]&&(R[3]=O(R[3])),o&&!(R[1]&1)&&(R[4]=i),!o&&R[1]&1&&(r|=8),g&&!(R[1]&4)&&(R[5]=s),_&&kn.apply(R[2]||(R[2]=[]),e),T&&gt.apply(R[3]||(R[3]=[]),t),R[1]|=r,Cn.apply(null,R);var W=r==1||r===17?yt:ie;return W([n,r,e,t,i,s])}function wt(n){return Lr[n]}function yr(){var n=(n=a.indexOf)===me?_n:n;return n}function qn(n){return typeof n=="function"&&dt.test(n)}var Nr=ee?function(n,r){B.value=r,ee(n,"__bindData__",B),B.value=null}:De;function ae(n){var r,e;return!(n&&en.call(n)==l)||(r=n.constructor,X(r)&&!(r instanceof r))?!1:(Tn(n,function(t,i){e=i}),typeof e>"u"||tn.call(n,e))}function bt(n){return fe[n]}function wr(n){return n&&typeof n=="object"&&typeof n.length=="number"&&en.call(n)==E||!1}var j=Ur||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&en.call(n)==h||!1},_t=function(n){var r,e=n,t=[];if(!e||!H[typeof n])return t;for(r in e)tn.call(e,r)&&t.push(r);return t},sn=mr?function(n){return an(n)?mr(n):[]}:_t,Lr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},fe=ue(Lr),xt=jn("("+sn(fe).join("|")+")","g"),Ct=jn("["+sn(Lr).join("")+"]","g"),br=function(n,r,e){var t,i=n,s=i;if(!i)return s;var o=arguments,d=0,g=typeof e=="number"?2:o.length;if(g>3&&typeof o[g-2]=="function")var x=ln(o[--g-1],o[g--],2);else g>2&&typeof o[g-1]=="function"&&(x=o[--g]);for(;++d<g;)if(i=o[d],i&&H[typeof i])for(var _=-1,T=H[typeof i]&&sn(i),R=T?T.length:0;++_<R;)t=T[_],s[t]=x?x(s[t],i[t]):i[t];return s};function Dt(n,r,e,t){return typeof r!="boolean"&&r!=null&&(t=e,e=r,r=!1),Fr(n,r,typeof e=="function"&&ln(e,t,1))}function Et(n,r,e){return Fr(n,!0,typeof r=="function"&&ln(r,e,1))}function Rt(n,r){var e=tr(n);return r?br(e,r):e}var Ar=function(n,r,e){var t,i=n,s=i;if(!i)return s;for(var o=arguments,d=0,g=typeof e=="number"?2:o.length;++d<g;)if(i=o[d],i&&H[typeof i])for(var x=-1,_=H[typeof i]&&sn(i),T=_?_.length:0;++x<T;)t=_[x],typeof s[t]>"u"&&(s[t]=i[t]);return s};function St(n,r,e){var t;return r=a.createCallback(r,e,3),J(n,function(i,s,o){if(r(i,s,o))return t=s,!1}),t}function Tt(n,r,e){var t;return r=a.createCallback(r,e,3),oe(n,function(i,s,o){if(r(i,s,o))return t=s,!1}),t}var Tn=function(n,r,e){var t,i=n,s=i;if(!i||!H[typeof i])return s;r=r&&typeof e>"u"?r:ln(r,e,3);for(t in i)if(r(i[t],t,n)===!1)return s;return s};function Mt(n,r,e){var t=[];Tn(n,function(s,o){t.push(o,s)});var i=t.length;for(r=ln(r,e,3);i--&&r(t[i--],t[i],n)!==!1;);return n}var J=function(n,r,e){var t,i=n,s=i;if(!i||!H[typeof i])return s;r=r&&typeof e>"u"?r:ln(r,e,3);for(var o=-1,d=H[typeof i]&&sn(i),g=d?d.length:0;++o<g;)if(t=d[o],r(i[t],t,n)===!1)return s;return s};function oe(n,r,e){var t=sn(n),i=t.length;for(r=ln(r,e,3);i--;){var s=t[i];if(r(n[s],s,n)===!1)break}return n}function sr(n){var r=[];return Tn(n,function(e,t){X(e)&&r.push(t)}),r.sort()}function It(n,r){return n?tn.call(n,r):!1}function ue(n){for(var r=-1,e=sn(n),t=e.length,i={};++r<t;){var s=e[r];i[n[s]]=s}return i}function Ut(n){return n===!0||n===!1||n&&typeof n=="object"&&en.call(n)==I||!1}function Bt(n){return n&&typeof n=="object"&&en.call(n)==w||!1}function Ft(n){return n&&n.nodeType===1||!1}function qt(n){var r=!0;if(!n)return r;var e=en.call(n),t=n.length;return e==h||e==m||e==E||e==l&&typeof t=="number"&&X(n.splice)?!t:(J(n,function(){return r=!1}),r)}function Pt(n,r,e,t){return $n(n,r,typeof e=="function"&&ln(e,t,2))}function zt(n){return vt(n)&&!mt(parseFloat(n))}function X(n){return typeof n=="function"}function an(n){return!!(n&&H[typeof n])}function Nt(n){return le(n)&&n!=+n}function Lt(n){return n===null}function le(n){return typeof n=="number"||n&&typeof n=="object"&&en.call(n)==C||!1}var Yr=Wn?function(n){if(!(n&&en.call(n)==l))return!1;var r=n.valueOf,e=qn(r)&&(e=Wn(r))&&Wn(e);return e?n==e||Wn(n)==e:ae(n)}:ae;function At(n){return n&&typeof n=="object"&&en.call(n)==p||!1}function ar(n){return typeof n=="string"||n&&typeof n=="object"&&en.call(n)==m||!1}function Yt(n){return typeof n>"u"}function Ht(n,r,e){var t={};return r=a.createCallback(r,e,3),J(n,function(i,s,o){t[s]=r(i,s,o)}),t}function Ot(n){var r=arguments,e=2;if(!an(n))return n;if(typeof r[2]!="number"&&(e=r.length),e>3&&typeof r[e-2]=="function")var t=ln(r[--e-1],r[e--],2);else e>2&&typeof r[e-1]=="function"&&(t=r[--e]);for(var i=O(arguments,1,e),s=-1,o=xn(),d=xn();++s<e;)se(n,i[s],t,o,d);return yn(o),yn(d),n}function Kt(n,r,e){var t={};if(typeof r!="function"){var i=[];Tn(n,function(g,x){i.push(x)}),i=ir(i,Fn(arguments,!0,!1,1));for(var s=-1,o=i.length;++s<o;){var d=i[s];t[d]=n[d]}}else r=a.createCallback(r,e,3),Tn(n,function(g,x,_){r(g,x,_)||(t[x]=g)});return t}function Wt(n){for(var r=-1,e=sn(n),t=e.length,i=U(t);++r<t;){var s=e[r];i[r]=[s,n[s]]}return i}function $t(n,r,e){var t={};if(typeof r!="function")for(var i=-1,s=Fn(arguments,!0,!1,1),o=an(n)?s.length:0;++i<o;){var d=s[i];d in n&&(t[d]=n[d])}else r=a.createCallback(r,e,3),Tn(n,function(g,x,_){r(g,x,_)&&(t[x]=g)});return t}function Jt(n,r,e,t){var i=j(n);if(e==null)if(i)e=[];else{var s=n&&n.constructor,o=s&&s.prototype;e=tr(o)}return r&&(r=a.createCallback(r,t,4),(i?fn:J)(n,function(d,g,x){return r(e,d,g,x)})),e}function _r(n){for(var r=-1,e=sn(n),t=e.length,i=U(t);++r<t;)i[r]=n[e[r]];return i}function Gt(n){for(var r=arguments,e=-1,t=Fn(r,!0,!1,1),i=r[2]&&r[2][r[1]]===n?1:t.length,s=U(i);++e<i;)s[e]=n[t[e]];return s}function de(n,r,e){var t=-1,i=yr(),s=n?n.length:0,o=!1;return e=(e<0?wn(0,s+e):e)||0,j(n)?o=i(n,r,e)>-1:typeof s=="number"?o=(ar(n)?n.indexOf(r,e):i(n,r,e))>-1:J(n,function(d){if(++t>=e)return!(o=d===r)}),o}var Vt=zr(function(n,r,e){tn.call(n,e)?n[e]++:n[e]=1});function pe(n,r,e){var t=!0;r=a.createCallback(r,e,3);var i=-1,s=n?n.length:0;if(typeof s=="number")for(;++i<s&&(t=!!r(n[i],i,n)););else J(n,function(o,d,g){return t=!!r(o,d,g)});return t}function xr(n,r,e){var t=[];r=a.createCallback(r,e,3);var i=-1,s=n?n.length:0;if(typeof s=="number")for(;++i<s;){var o=n[i];r(o,i,n)&&t.push(o)}else J(n,function(d,g,x){r(d,g,x)&&t.push(d)});return t}function Hr(n,r,e){r=a.createCallback(r,e,3);var t=-1,i=n?n.length:0;if(typeof i=="number")for(;++t<i;){var s=n[t];if(r(s,t,n))return s}else{var o;return J(n,function(d,g,x){if(r(d,g,x))return o=d,!1}),o}}function Xt(n,r,e){var t;return r=a.createCallback(r,e,3),Cr(n,function(i,s,o){if(r(i,s,o))return t=i,!1}),t}function fn(n,r,e){var t=-1,i=n?n.length:0;if(r=r&&typeof e>"u"?r:ln(r,e,3),typeof i=="number")for(;++t<i&&r(n[t],t,n)!==!1;);else J(n,r);return n}function Cr(n,r,e){var t=n?n.length:0;if(r=r&&typeof e>"u"?r:ln(r,e,3),typeof t=="number")for(;t--&&r(n[t],t,n)!==!1;);else{var i=sn(n);t=i.length,J(n,function(s,o,d){return o=i?i[--t]:--t,r(d[o],o,d)})}return n}var Qt=zr(function(n,r,e){(tn.call(n,e)?n[e]:n[e]=[]).push(r)}),Zt=zr(function(n,r,e){n[e]=r});function jt(n,r){var e=O(arguments,2),t=-1,i=typeof r=="function",s=n?n.length:0,o=U(typeof s=="number"?s:0);return fn(n,function(d){o[++t]=(i?r:d[r]).apply(d,e)}),o}function fr(n,r,e){var t=-1,i=n?n.length:0;if(r=a.createCallback(r,e,3),typeof i=="number")for(var s=U(i);++t<i;)s[t]=r(n[t],t,n);else s=[],J(n,function(o,d,g){s[++t]=r(o,d,g)});return s}function ce(n,r,e){var t=-1/0,i=t;if(typeof r!="function"&&e&&e[r]===n&&(r=null),r==null&&j(n))for(var s=-1,o=n.length;++s<o;){var d=n[s];d>i&&(i=d)}else r=r==null&&ar(n)?kr:a.createCallback(r,e,3),fn(n,function(g,x,_){var T=r(g,x,_);T>t&&(t=T,i=g)});return i}function kt(n,r,e){var t=1/0,i=t;if(typeof r!="function"&&e&&e[r]===n&&(r=null),r==null&&j(n))for(var s=-1,o=n.length;++s<o;){var d=n[s];d<i&&(i=d)}else r=r==null&&ar(n)?kr:a.createCallback(r,e,3),fn(n,function(g,x,_){var T=r(g,x,_);T<t&&(t=T,i=g)});return i}var Or=fr;function Kr(n,r,e,t){if(!n)return e;var i=arguments.length<3;r=a.createCallback(r,t,4);var s=-1,o=n.length;if(typeof o=="number")for(i&&(e=n[++s]);++s<o;)e=r(e,n[s],s,n);else J(n,function(d,g,x){e=i?(i=!1,d):r(e,d,g,x)});return e}function he(n,r,e,t){var i=arguments.length<3;return r=a.createCallback(r,t,4),Cr(n,function(s,o,d){e=i?(i=!1,s):r(e,s,o,d)}),e}function ni(n,r,e){return r=a.createCallback(r,e,3),xr(n,function(t,i,s){return!r(t,i,s)})}function ri(n,r,e){if(n&&typeof n.length!="number"&&(n=_r(n)),r==null||e)return n?n[qr(0,n.length-1)]:f;var t=ge(n);return t.length=rr(wn(0,r),t.length),t}function ge(n){var r=-1,e=n?n.length:0,t=U(typeof e=="number"?e:0);return fn(n,function(i){var s=qr(0,++r);t[r]=t[s],t[s]=i}),t}function ei(n){var r=n?n.length:0;return typeof r=="number"?r:sn(n).length}function ve(n,r,e){var t;r=a.createCallback(r,e,3);var i=-1,s=n?n.length:0;if(typeof s=="number")for(;++i<s&&!(t=r(n[i],i,n)););else J(n,function(o,d,g){return!(t=r(o,d,g))});return!!t}function ti(n,r,e){var t=-1,i=j(r),s=n?n.length:0,o=U(typeof s=="number"?s:0);for(i||(r=a.createCallback(r,e,3)),fn(n,function(g,x,_){var T=o[++t]=Mr();i?T.criteria=fr(r,function(R){return g[R]}):(T.criteria=xn())[0]=r(g,x,_),T.index=t,T.value=g}),s=o.length,o.sort(ot);s--;){var d=o[s];o[s]=d.value,i||yn(d.criteria),Zn(d)}return o}function ii(n){return n&&typeof n.length=="number"?O(n):_r(n)}var si=xr;function ai(n){for(var r=-1,e=n?n.length:0,t=[];++r<e;){var i=n[r];i&&t.push(i)}return t}function fi(n){return ir(n,Fn(arguments,!0,!0,1))}function oi(n,r,e){var t=-1,i=n?n.length:0;for(r=a.createCallback(r,e,3);++t<i;)if(r(n[t],t,n))return t;return-1}function ui(n,r,e){var t=n?n.length:0;for(r=a.createCallback(r,e,3);t--;)if(r(n[t],t,n))return t;return-1}function Wr(n,r,e){var t=0,i=n?n.length:0;if(typeof r!="number"&&r!=null){var s=-1;for(r=a.createCallback(r,e,3);++s<i&&r(n[s],s,n);)t++}else if(t=r,t==null||e)return n?n[0]:f;return O(n,0,rr(wn(0,t),i))}function li(n,r,e,t){return typeof r!="boolean"&&r!=null&&(t=e,e=typeof r!="function"&&t&&t[r]===n?null:r,r=!1),e!=null&&(n=fr(n,e,t)),Fn(n,r)}function me(n,r,e){if(typeof e=="number"){var t=n?n.length:0;e=e<0?wn(0,t+e):e||0}else if(e){var i=ye(n,r);return n[i]===r?i:-1}return _n(n,r,e)}function di(n,r,e){var t=0,i=n?n.length:0;if(typeof r!="number"&&r!=null){var s=i;for(r=a.createCallback(r,e,3);s--&&r(n[s],s,n);)t++}else t=r==null||e?1:r||t;return O(n,0,rr(wn(0,i-t),i))}function pi(){for(var n=[],r=-1,e=arguments.length,t=xn(),i=yr(),s=i===_n,o=xn();++r<e;){var d=arguments[r];(j(d)||wr(d))&&(n.push(d),t.push(s&&d.length>=F&&Tr(r?n[r]:o)))}var g=n[0],x=-1,_=g?g.length:0,T=[];n:for(;++x<_;){var R=t[0];if(d=g[x],(R?On(R,d):i(o,d))<0){for(r=e,(R||o).push(d);--r;)if(R=t[r],(R?On(R,d):i(n[r],d))<0)continue n;T.push(d)}}for(;e--;)R=t[e],R&&Zn(R);return yn(t),yn(o),T}function ci(n,r,e){var t=0,i=n?n.length:0;if(typeof r!="number"&&r!=null){var s=i;for(r=a.createCallback(r,e,3);s--&&r(n[s],s,n);)t++}else if(t=r,t==null||e)return n?n[i-1]:f;return O(n,wn(0,i-t))}function hi(n,r,e){var t=n?n.length:0;for(typeof e=="number"&&(t=(e<0?wn(0,t+e):rr(e,t-1))+1);t--;)if(n[t]===r)return t;return-1}function gi(n){for(var r=arguments,e=0,t=r.length,i=n?n.length:0;++e<t;)for(var s=-1,o=r[e];++s<i;)n[s]===o&&(re.call(n,s--,1),i--);return n}function vi(n,r,e){n=+n||0,e=typeof e=="number"?e:+e||1,r==null&&(r=n,n=0);for(var t=-1,i=wn(0,pt((r-n)/(e||1))),s=U(i);++t<i;)s[t]=n,n+=e;return s}function mi(n,r,e){var t=-1,i=n?n.length:0,s=[];for(r=a.createCallback(r,e,3);++t<i;){var o=n[t];r(o,t,n)&&(s.push(o),re.call(n,t--,1),i--)}return s}function $r(n,r,e){if(typeof r!="number"&&r!=null){var t=0,i=-1,s=n?n.length:0;for(r=a.createCallback(r,e,3);++i<s&&r(n[i],i,n);)t++}else t=r==null||e?1:wn(0,r);return O(n,t)}function ye(n,r,e,t){var i=0,s=n?n.length:i;for(e=e?a.createCallback(e,t,1):Jr,r=e(r);i<s;){var o=i+s>>>1;e(n[o])<r?i=o+1:s=o}return i}function yi(){return Pr(Fn(arguments,!0,!0))}function we(n,r,e,t){return typeof r!="boolean"&&r!=null&&(t=e,e=typeof r!="function"&&t&&t[r]===n?null:r,r=!1),e!=null&&(e=a.createCallback(e,t,3)),Pr(n,r,e)}function wi(n){return ir(n,O(arguments,1))}function bi(){for(var n=-1,r=arguments.length;++n<r;){var e=arguments[n];if(j(e)||wr(e))var t=t?Pr(ir(t,e).concat(ir(e,t))):e}return t||[]}function be(){for(var n=arguments.length>1?arguments:arguments[0],r=-1,e=n?ce(Or(n,"length")):0,t=U(e<0?0:e);++r<e;)t[r]=Or(n,r);return t}function _e(n,r){var e=-1,t=n?n.length:0,i={};for(!r&&t&&!j(n[0])&&(r=[]);++e<t;){var s=n[e];r?i[s]=r[e]:s&&(i[s[0]]=s[1])}return i}function _i(n,r){if(!X(r))throw new Rn;return function(){if(--n<1)return r.apply(this,arguments)}}function xe(n,r){return arguments.length>2?Cn(n,17,O(arguments,2),null,r):Cn(n,1,null,null,r)}function xi(n){for(var r=arguments.length>1?Fn(arguments,!0,!1,1):sr(n),e=-1,t=r.length;++e<t;){var i=r[e];n[i]=Cn(n[i],1,null,null,n)}return n}function Ci(n,r){return arguments.length>2?Cn(r,19,O(arguments,2),null,n):Cn(r,3,null,null,n)}function Di(){for(var n=arguments,r=n.length;r--;)if(!X(n[r]))throw new Rn;return function(){for(var e=arguments,t=n.length;t--;)e=[n[t].apply(this,e)];return e[0]}}function Ei(n,r){return r=typeof r=="number"?r:+r||n.length,Cn(n,4,null,null,null,r)}function Ce(n,r,e){var t,i,s,o,d,g,x,_=0,T=!1,R=!0;if(!X(n))throw new Rn;if(r=wn(0,r)||0,e===!0){var W=!0;R=!1}else an(e)&&(W=e.leading,T="maxWait"in e&&(wn(r,e.maxWait)||0),R="trailing"in e?e.trailing:R);var $=function(){var cn=r-(An()-o);if(cn<=0){i&&gr(i);var on=x;i=g=x=f,on&&(_=An(),s=n.apply(d,t),!g&&!i&&(t=d=null))}else g=nr($,cn)},dn=function(){g&&gr(g),i=g=x=f,(R||T!==r)&&(_=An(),s=n.apply(d,t),!g&&!i&&(t=d=null))};return function(){if(t=arguments,o=An(),d=this,x=R&&(g||!W),T===!1)var cn=W&&!g;else{!i&&!W&&(_=o);var on=T-(o-_),Q=on<=0;Q?(i&&(i=gr(i)),_=o,s=n.apply(d,t)):i||(i=nr(dn,on))}return Q&&g?g=gr(g):!g&&r!==T&&(g=nr($,r)),cn&&(Q=!0,s=n.apply(d,t)),Q&&!g&&!i&&(t=d=null),s}}function Ri(n){if(!X(n))throw new Rn;var r=O(arguments,1);return nr(function(){n.apply(f,r)},1)}function Si(n,r){if(!X(n))throw new Rn;var e=O(arguments,2);return nr(function(){n.apply(f,e)},r)}function Ti(n,r){if(!X(n))throw new Rn;var e=function(){var t=e.cache,i=r?r.apply(this,arguments):M+arguments[0];return tn.call(t,i)?t[i]:t[i]=n.apply(this,arguments)};return e.cache={},e}function Mi(n){var r,e;if(!X(n))throw new Rn;return function(){return r||(r=!0,e=n.apply(this,arguments),n=null),e}}function Ii(n){return Cn(n,16,O(arguments,1))}function Ui(n){return Cn(n,32,null,O(arguments,1))}function Bi(n,r,e){var t=!0,i=!0;if(!X(n))throw new Rn;return e===!1?t=!1:an(e)&&(t="leading"in e?e.leading:t,i="trailing"in e?e.trailing:i),N.leading=t,N.maxWait=r,N.trailing=i,Ce(n,r,N)}function Fi(n,r){return Cn(r,16,[n])}function qi(n){return function(){return n}}function Pi(n,r,e){var t=typeof n;if(n==null||t=="function")return ln(n,r,e);if(t!="object")return Ee(n);var i=sn(n),s=i[0],o=n[s];return i.length==1&&o===o&&!an(o)?function(d){var g=d[s];return o===g&&(o!==0||1/o==1/g)}:function(d){for(var g=i.length,x=!1;g--&&(x=$n(d[i[g]],n[i[g]],null,!0)););return x}}function zi(n){return n==null?"":Bn(n).replace(Ct,wt)}function Jr(n){return n}function Gr(n,r,e){var t=!0,i=r&&sr(r);(!r||!e&&!i.length)&&(e==null&&(e=r),s=Ln,r=n,n=a,i=sr(r)),e===!1?t=!1:an(e)&&"chain"in e&&(t=e.chain);var s=n,o=X(s);fn(i,function(d){var g=n[d]=r[d];o&&(s.prototype[d]=function(){var x=this.__chain__,_=this.__wrapped__,T=[_];kn.apply(T,arguments);var R=g.apply(n,T);if(t||x){if(_===R&&an(R))return this;R=new s(R),R.__chain__=x}return R})})}function Ni(){return D._=lt,this}function De(){}var An=qn(An=Y.now)&&An||function(){return new Y().getTime()},Li=Br(z+"08")==8?Br:function(n,r){return Br(ar(n)?n.replace(Hn,""):n,r||0)};function Ee(n){return function(r){return r[n]}}function Ai(n,r,e){var t=n==null,i=r==null;if(e==null&&(typeof n=="boolean"&&i?(e=n,n=1):!i&&typeof r=="boolean"&&(e=r,i=!0)),t&&i&&(r=1),n=+n||0,i?(r=n,n=0):r=+r||0,e||n%1||r%1){var s=te();return rr(n+s*(r-n+parseFloat("1e-"+((s+"").length-1))),r)}return qr(n,r)}function Yi(n,r){if(n){var e=n[r];return X(e)?n[r]():e}}function Hi(n,r,e){var t=a.templateSettings;n=Bn(n||""),e=Ar({},e,t);var i=Ar({},e.imports,t.imports),s=sn(i),o=_r(i),d,g=0,x=e.interpolate||In,_="__p += '",T=jn((e.escape||In).source+"|"+x.source+"|"+(x===nn?bn:In).source+"|"+(e.evaluate||In).source+"|$","g");n.replace(T,function(cn,on,Q,Dr,or,ur){return Q||(Q=Dr),_+=n.slice(g,ur).replace(Xn,ut),on&&(_+=`' +
__e(`+on+`) +
'`),or&&(d=!0,_+=`';
`+or+`;
__p += '`),Q&&(_+=`' +
((__t = (`+Q+`)) == null ? '' : __t) +
'`),g=ur+cn.length,cn}),_+=`';
`;var R=e.variable,W=R;W||(R="obj",_="with ("+R+`) {
`+_+`
}
`),_=(d?_.replace(k,""):_).replace(hn,"$1").replace(gn,"$1;"),_="function("+R+`) {
`+(W?"":R+" || ("+R+` = {});
`)+"var __t, __p = '', __e = _.escape"+(d?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_+`return __p
}`;var $=`
/*
//# sourceURL=`+(e.sourceURL||"/lodash/template/source["+c+++"]")+`
*/`;try{var dn=K(s,"return "+_+$).apply(f,o)}catch(cn){throw cn.source=_,cn}return r?dn(r):(dn.source=_,dn)}function Oi(n,r,e){n=(n=+n)>-1?n:0;var t=-1,i=U(n);for(r=ln(r,e,1);++t<n;)i[t]=r(t);return i}function Ki(n){return n==null?"":Bn(n).replace(xt,bt)}function Wi(n){var r=++u;return Bn(n??"")+r}function $i(n){return n=new Ln(n),n.__chain__=!0,n}function Ji(n,r){return r(n),n}function Gi(){return this.__chain__=!0,this}function Vi(){return Bn(this.__wrapped__)}function Re(){return this.__wrapped__}return a.after=_i,a.assign=br,a.at=Gt,a.bind=xe,a.bindAll=xi,a.bindKey=Ci,a.chain=$i,a.compact=ai,a.compose=Di,a.constant=qi,a.countBy=Vt,a.create=Rt,a.createCallback=Pi,a.curry=Ei,a.debounce=Ce,a.defaults=Ar,a.defer=Ri,a.delay=Si,a.difference=fi,a.filter=xr,a.flatten=li,a.forEach=fn,a.forEachRight=Cr,a.forIn=Tn,a.forInRight=Mt,a.forOwn=J,a.forOwnRight=oe,a.functions=sr,a.groupBy=Qt,a.indexBy=Zt,a.initial=di,a.intersection=pi,a.invert=ue,a.invoke=jt,a.keys=sn,a.map=fr,a.mapValues=Ht,a.max=ce,a.memoize=Ti,a.merge=Ot,a.min=kt,a.omit=Kt,a.once=Mi,a.pairs=Wt,a.partial=Ii,a.partialRight=Ui,a.pick=$t,a.pluck=Or,a.property=Ee,a.pull=gi,a.range=vi,a.reject=ni,a.remove=mi,a.rest=$r,a.shuffle=ge,a.sortBy=ti,a.tap=Ji,a.throttle=Bi,a.times=Oi,a.toArray=ii,a.transform=Jt,a.union=yi,a.uniq=we,a.values=_r,a.where=si,a.without=wi,a.wrap=Fi,a.xor=bi,a.zip=be,a.zipObject=_e,a.collect=fr,a.drop=$r,a.each=fn,a.eachRight=Cr,a.extend=br,a.methods=sr,a.object=_e,a.select=xr,a.tail=$r,a.unique=we,a.unzip=be,Gr(a),a.clone=Dt,a.cloneDeep=Et,a.contains=de,a.escape=zi,a.every=pe,a.find=Hr,a.findIndex=oi,a.findKey=St,a.findLast=Xt,a.findLastIndex=ui,a.findLastKey=Tt,a.has=It,a.identity=Jr,a.indexOf=me,a.isArguments=wr,a.isArray=j,a.isBoolean=Ut,a.isDate=Bt,a.isElement=Ft,a.isEmpty=qt,a.isEqual=Pt,a.isFinite=zt,a.isFunction=X,a.isNaN=Nt,a.isNull=Lt,a.isNumber=le,a.isObject=an,a.isPlainObject=Yr,a.isRegExp=At,a.isString=ar,a.isUndefined=Yt,a.lastIndexOf=hi,a.mixin=Gr,a.noConflict=Ni,a.noop=De,a.now=An,a.parseInt=Li,a.random=Ai,a.reduce=Kr,a.reduceRight=he,a.result=Yi,a.runInContext=Ir,a.size=ei,a.some=ve,a.sortedIndex=ye,a.template=Hi,a.unescape=Ki,a.uniqueId=Wi,a.all=pe,a.any=ve,a.detect=Hr,a.findWhere=Hr,a.foldl=Kr,a.foldr=he,a.include=de,a.inject=Kr,Gr((function(){var n={};return J(a,function(r,e){a.prototype[e]||(n[e]=r)}),n})(),!1),a.first=Wr,a.last=ci,a.sample=ri,a.take=Wr,a.head=Wr,J(a,function(n,r){var e=r!=="sample";a.prototype[r]||(a.prototype[r]=function(t,i){var s=this.__chain__,o=n(this.__wrapped__,t,i);return!s&&(t==null||i&&!(e&&typeof t=="function"))?o:new Ln(o,s)})}),a.VERSION="2.4.2",a.prototype.chain=Gi,a.prototype.toString=Vi,a.prototype.value=Re,a.prototype.valueOf=Re,fn(["join","pop","shift"],function(n){var r=Kn[n];a.prototype[n]=function(){var e=this.__chain__,t=r.apply(this.__wrapped__,arguments);return e?new Ln(t,e):t}}),fn(["push","reverse","sort","unshift"],function(n){var r=Kn[n];a.prototype[n]=function(){return r.apply(this.__wrapped__,arguments),this}}),fn(["concat","slice","splice"],function(n){var r=Kn[n];a.prototype[n]=function(){return new Ln(r.apply(this.__wrapped__,arguments),this.__chain__)}}),a}var Un=Ir();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(L._=Un,define(function(){return Un})):G&&mn?Qn?(mn.exports=Un)._=Un:G._=Un:L._=Un}).call(Gn)});var We=Mn((Ke,Sr)=>{A();(function(f){"use strict";function y(c,E){var h=(c&65535)+(E&65535),I=(c>>16)+(E>>16)+(h>>16);return I<<16|h&65535}function S(c,E){return c<<E|c>>>32-E}function u(c,E,h,I,w,b){return y(S(y(y(E,c),y(I,b)),w),h)}function M(c,E,h,I,w,b,C){return u(E&h|~E&I,c,E,w,b,C)}function F(c,E,h,I,w,b,C){return u(E&I|h&~I,c,E,w,b,C)}function P(c,E,h,I,w,b,C){return u(E^h^I,c,E,w,b,C)}function z(c,E,h,I,w,b,C){return u(h^(E|~I),c,E,w,b,C)}function k(c,E){c[E>>5]|=128<<E%32,c[(E+64>>>9<<4)+14]=E;var h,I,w,b,C,l=1732584193,p=-271733879,m=-1732584194,v=271733878;for(h=0;h<c.length;h+=16)I=l,w=p,b=m,C=v,l=M(l,p,m,v,c[h],7,-680876936),v=M(v,l,p,m,c[h+1],12,-389564586),m=M(m,v,l,p,c[h+2],17,606105819),p=M(p,m,v,l,c[h+3],22,-1044525330),l=M(l,p,m,v,c[h+4],7,-176418897),v=M(v,l,p,m,c[h+5],12,1200080426),m=M(m,v,l,p,c[h+6],17,-1473231341),p=M(p,m,v,l,c[h+7],22,-45705983),l=M(l,p,m,v,c[h+8],7,1770035416),v=M(v,l,p,m,c[h+9],12,-1958414417),m=M(m,v,l,p,c[h+10],17,-42063),p=M(p,m,v,l,c[h+11],22,-1990404162),l=M(l,p,m,v,c[h+12],7,1804603682),v=M(v,l,p,m,c[h+13],12,-40341101),m=M(m,v,l,p,c[h+14],17,-1502002290),p=M(p,m,v,l,c[h+15],22,1236535329),l=F(l,p,m,v,c[h+1],5,-165796510),v=F(v,l,p,m,c[h+6],9,-1069501632),m=F(m,v,l,p,c[h+11],14,643717713),p=F(p,m,v,l,c[h],20,-373897302),l=F(l,p,m,v,c[h+5],5,-701558691),v=F(v,l,p,m,c[h+10],9,38016083),m=F(m,v,l,p,c[h+15],14,-660478335),p=F(p,m,v,l,c[h+4],20,-405537848),l=F(l,p,m,v,c[h+9],5,568446438),v=F(v,l,p,m,c[h+14],9,-1019803690),m=F(m,v,l,p,c[h+3],14,-187363961),p=F(p,m,v,l,c[h+8],20,1163531501),l=F(l,p,m,v,c[h+13],5,-1444681467),v=F(v,l,p,m,c[h+2],9,-51403784),m=F(m,v,l,p,c[h+7],14,1735328473),p=F(p,m,v,l,c[h+12],20,-1926607734),l=P(l,p,m,v,c[h+5],4,-378558),v=P(v,l,p,m,c[h+8],11,-2022574463),m=P(m,v,l,p,c[h+11],16,1839030562),p=P(p,m,v,l,c[h+14],23,-35309556),l=P(l,p,m,v,c[h+1],4,-1530992060),v=P(v,l,p,m,c[h+4],11,1272893353),m=P(m,v,l,p,c[h+7],16,-155497632),p=P(p,m,v,l,c[h+10],23,-1094730640),l=P(l,p,m,v,c[h+13],4,681279174),v=P(v,l,p,m,c[h],11,-358537222),m=P(m,v,l,p,c[h+3],16,-722521979),p=P(p,m,v,l,c[h+6],23,76029189),l=P(l,p,m,v,c[h+9],4,-640364487),v=P(v,l,p,m,c[h+12],11,-421815835),m=P(m,v,l,p,c[h+15],16,530742520),p=P(p,m,v,l,c[h+2],23,-995338651),l=z(l,p,m,v,c[h],6,-198630844),v=z(v,l,p,m,c[h+7],10,1126891415),m=z(m,v,l,p,c[h+14],15,-1416354905),p=z(p,m,v,l,c[h+5],21,-57434055),l=z(l,p,m,v,c[h+12],6,1700485571),v=z(v,l,p,m,c[h+3],10,-1894986606),m=z(m,v,l,p,c[h+10],15,-1051523),p=z(p,m,v,l,c[h+1],21,-2054922799),l=z(l,p,m,v,c[h+8],6,1873313359),v=z(v,l,p,m,c[h+15],10,-30611744),m=z(m,v,l,p,c[h+6],15,-1560198380),p=z(p,m,v,l,c[h+13],21,1309151649),l=z(l,p,m,v,c[h+4],6,-145523070),v=z(v,l,p,m,c[h+11],10,-1120210379),m=z(m,v,l,p,c[h+2],15,718787259),p=z(p,m,v,l,c[h+9],21,-343485551),l=y(l,I),p=y(p,w),m=y(m,b),v=y(v,C);return[l,p,m,v]}function hn(c){var E,h="",I=c.length*32;for(E=0;E<I;E+=8)h+=String.fromCharCode(c[E>>5]>>>E%32&255);return h}function gn(c){var E,h=[];for(h[(c.length>>2)-1]=void 0,E=0;E<h.length;E+=1)h[E]=0;var I=c.length*8;for(E=0;E<I;E+=8)h[E>>5]|=(c.charCodeAt(E/8)&255)<<E%32;return h}function bn(c){return hn(k(gn(c),c.length*8))}function En(c,E){var h,I=gn(c),w=[],b=[],C;for(w[15]=b[15]=void 0,I.length>16&&(I=k(I,c.length*8)),h=0;h<16;h+=1)w[h]=I[h]^909522486,b[h]=I[h]^1549556828;return C=k(w.concat(gn(E)),512+E.length*8),hn(k(b.concat(C),640))}function Z(c){var E="0123456789abcdef",h="",I,w;for(w=0;w<c.length;w+=1)I=c.charCodeAt(w),h+=E.charAt(I>>>4&15)+E.charAt(I&15);return h}function nn(c){return unescape(encodeURIComponent(c))}function Hn(c){return bn(nn(c))}function In(c){return Z(Hn(c))}function zn(c,E){return En(nn(c),nn(E))}function Xn(c,E){return Z(zn(c,E))}function Nn(c,E,h){return E?h?zn(E,c):Xn(E,c):h?Hn(c):In(c)}typeof define=="function"&&define.amd?define(function(){return Nn}):typeof Sr=="object"&&Sr.exports?Sr.exports=Nn:f.md5=Nn})(Ke)});var Je=Mn((bs,$e)=>{"use strict";A();function is(f,y){return Object.prototype.hasOwnProperty.call(f,y)}$e.exports=function(f,y,S,u){y=y||"&",S=S||"=";var M={};if(typeof f!="string"||f.length===0)return M;var F=/\+/g;f=f.split(y);var P=1e3;u&&typeof u.maxKeys=="number"&&(P=u.maxKeys);var z=f.length;P>0&&z>P&&(z=P);for(var k=0;k<z;++k){var hn=f[k].replace(F,"%20"),gn=hn.indexOf(S),bn,En,Z,nn;gn>=0?(bn=hn.substr(0,gn),En=hn.substr(gn+1)):(bn=hn,En=""),Z=decodeURIComponent(bn),nn=decodeURIComponent(En),is(M,Z)?Array.isArray(M[Z])?M[Z].push(nn):M[Z]=[M[Z],nn]:M[Z]=nn}return M}});var Ve=Mn((xs,Ge)=>{"use strict";A();var pr=function(f){switch(typeof f){case"string":return f;case"boolean":return f?"true":"false";case"number":return isFinite(f)?f:"";default:return""}};Ge.exports=function(f,y,S,u){return y=y||"&",S=S||"=",f===null&&(f=void 0),typeof f=="object"?Object.keys(f).map(function(M){var F=encodeURIComponent(pr(M))+S;return Array.isArray(f[M])?f[M].map(function(P){return F+encodeURIComponent(pr(P))}).join(y):F+encodeURIComponent(pr(f[M]))}).join(y):u?encodeURIComponent(pr(u))+S+encodeURIComponent(pr(f)):""}});var Xe=Mn(cr=>{"use strict";A();cr.decode=cr.parse=Je();cr.encode=cr.stringify=Ve()});var nt=Mn((Ss,ke)=>{A();var ss=We(),as=Xe(),fs=/^[0-9a-f]{32}$/;function os(f){var y={},S={protocol:1,format:1};for(var u in f)S[u]||(y[u]=f[u]);return y}function Qe(f,y){if(f)return typeof f.protocol=="boolean"?f.protocol:f.protocol==="http"?!1:f.protocol==="https"?!0:void 0}function Ze(f){return f=typeof f=="string"?f.trim().toLowerCase():"unspecified",f.match(fs)?f:ss(f)}function je(f){var y=as.stringify(os(f));return y&&"?"+y||""}var Rs=ke.exports={url:function(f,y,S){var u="//www.gravatar.com/avatar/";y&&y.cdn?(u=y.cdn+"/avatar/",delete y.cdn):(y&&y.protocol&&(S=Qe(y)),typeof S<"u"&&(u=S?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var M=je(y);return u+Ze(f)+M},profile_url:function(f,y,S){var u=y!=null&&y.format!=null?String(y.format):"json",M;if(y&&y.cdn)M=y.cdn+"/",delete y.cdn;else{y&&y.protocol&&(S=Qe(y));var M=S&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var F=je(y);return M+Ze(f)+"."+u+F}}});var et=Mn((Ms,rt)=>{A();rt.exports=nt()});var tt=Mn(hr=>{A();(function(f,y){if(typeof hr=="object"&&hr)y(hr);else{var S={};y(S),typeof define=="function"&&define.amd?define(S):f.Mustache=S}})(hr,function(f){var y=RegExp.prototype.test;function S(w,b){return y.call(w,b)}var u=/\S/;function M(w){return!S(u,w)}var F=Object.prototype.toString,P=Array.isArray||function(w){return F.call(w)==="[object Array]"};function z(w){return typeof w=="function"}function k(w){return w.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var hn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function gn(w){return String(w).replace(/[&<>"'\/]/g,function(b){return hn[b]})}function bn(w){if(!P(w)||w.length!==2)throw new Error("Invalid tags: "+w);return[new RegExp(k(w[0])+"\\s*"),new RegExp("\\s*"+k(w[1]))]}var En=/\s*/,Z=/\s+/,nn=/\s*=/,Hn=/\s*\}/,In=/#|\^|\/|>|\{|&|=|!/;function zn(w,b){b=b||f.tags,w=w||"",typeof b=="string"&&(b=b.split(Z));var C=bn(b),l=new c(w),p=[],m=[],v=[],N=!1,B=!1;function H(){if(N&&!B)for(;v.length;)delete m[v.pop()];else v=[];N=!1,B=!1}for(var vn,L,G,mn,Qn,rn;!l.eos();){if(vn=l.pos,G=l.scanUntil(C[0]),G)for(var _n=0,On=G.length;_n<On;++_n)mn=G.charAt(_n),M(mn)?v.push(m.length):B=!0,m.push(["text",mn,vn,vn+1]),vn+=1,mn===`
`&&H();if(!l.scan(C[0]))break;if(N=!0,L=l.scan(In)||"name",l.scan(En),L==="="?(G=l.scanUntil(nn),l.scan(nn),l.scanUntil(C[1])):L==="{"?(G=l.scanUntil(new RegExp("\\s*"+k("}"+b[1]))),l.scan(Hn),l.scanUntil(C[1]),L="&"):G=l.scanUntil(C[1]),!l.scan(C[1]))throw new Error("Unclosed tag at "+l.pos);if(Qn=[L,G,vn,l.pos],m.push(Qn),L==="#"||L==="^")p.push(Qn);else if(L==="/"){if(rn=p.pop(),!rn)throw new Error('Unopened section "'+G+'" at '+vn);if(rn[1]!==G)throw new Error('Unclosed section "'+rn[1]+'" at '+vn)}else L==="name"||L==="{"||L==="&"?B=!0:L==="="&&(C=bn(b=G.split(Z)))}if(rn=p.pop(),rn)throw new Error('Unclosed section "'+rn[1]+'" at '+l.pos);return Nn(Xn(m))}function Xn(w){for(var b=[],C,l,p=0,m=w.length;p<m;++p)C=w[p],C&&(C[0]==="text"&&l&&l[0]==="text"?(l[1]+=C[1],l[3]=C[3]):(b.push(C),l=C));return b}function Nn(w){for(var b=[],C=b,l=[],p,m,v=0,N=w.length;v<N;++v)switch(p=w[v],p[0]){case"#":case"^":C.push(p),l.push(p),C=p[4]=[];break;case"/":m=l.pop(),m[5]=p[2],C=l.length>0?l[l.length-1][4]:b;break;default:C.push(p)}return b}function c(w){this.string=w,this.tail=w,this.pos=0}c.prototype.eos=function(){return this.tail===""},c.prototype.scan=function(w){var b=this.tail.match(w);if(b&&b.index===0){var C=b[0];return this.tail=this.tail.substring(C.length),this.pos+=C.length,C}return""},c.prototype.scanUntil=function(w){var b=this.tail.search(w),C;switch(b){case-1:C=this.tail,this.tail="";break;case 0:C="";break;default:C=this.tail.substring(0,b),this.tail=this.tail.substring(b)}return this.pos+=C.length,C};function E(w,b){this.view=w??{},this.cache={".":this.view},this.parent=b}E.prototype.push=function(w){return new E(w,this)},E.prototype.lookup=function(w){var b;if(w in this.cache)b=this.cache[w];else{for(var C=this;C;){if(w.indexOf(".")>0){b=C.view;for(var l=w.split("."),p=0;b!=null&&p<l.length;)b=b[l[p++]]}else b=C.view[w];if(b!=null)break;C=C.parent}this.cache[w]=b}return z(b)&&(b=b.call(this.view)),b};function h(){this.cache={}}h.prototype.clearCache=function(){this.cache={}},h.prototype.parse=function(w,b){var C=this.cache,l=C[w];return l==null&&(l=C[w]=zn(w,b)),l},h.prototype.render=function(w,b,C){var l=this.parse(w),p=b instanceof E?b:new E(b);return this.renderTokens(l,p,C,w)},h.prototype.renderTokens=function(w,b,C,l){var p="",m=this;function v(mn){return m.render(mn,b,C)}for(var N,B,H=0,vn=w.length;H<vn;++H)switch(N=w[H],N[0]){case"#":if(B=b.lookup(N[1]),!B)continue;if(P(B))for(var L=0,G=B.length;L<G;++L)p+=this.renderTokens(N[4],b.push(B[L]),C,l);else if(typeof B=="object"||typeof B=="string")p+=this.renderTokens(N[4],b.push(B),C,l);else if(z(B)){if(typeof l!="string")throw new Error("Cannot use higher-order sections without the original template");B=B.call(b.view,l.slice(N[3],N[5]),v),B!=null&&(p+=B)}else p+=this.renderTokens(N[4],b,C,l);break;case"^":B=b.lookup(N[1]),(!B||P(B)&&B.length===0)&&(p+=this.renderTokens(N[4],b,C,l));break;case">":if(!C)continue;B=z(C)?C(N[1]):C[N[1]],B!=null&&(p+=this.renderTokens(this.parse(B),b,C,B));break;case"&":B=b.lookup(N[1]),B!=null&&(p+=B);break;case"name":B=b.lookup(N[1]),B!=null&&(p+=f.escape(B));break;case"text":p+=N[1];break}return p},f.name="mustache.js",f.version="0.8.1",f.tags=["{{","}}"];var I=new h;f.clearCache=function(){return I.clearCache()},f.parse=function(w,b){return I.parse(w,b)},f.render=function(w,b,C){return I.render(w,b,C)},f.to_html=function(w,b,C,l){var p=f.render(w,b,C);if(z(l))l(p);else return p},f.escape=gn,f.Scanner=c,f.Context=E,f.Writer=h})});var st=Mn((Fs,it)=>{A();var jr=(He(),es(Ye)),Vn=Oe(),us=et(),ls=tt(),ds=new Date,ps=ds.getFullYear();function Pn(f){switch(f.substr(5,2)){case"01":return"January ";case"02":return"February ";case"03":return"March ";case"04":return"April ";case"05":return"May ";case"06":return"June ";case"07":return"July ";case"08":return"August ";case"09":return"September ";case"10":return"October ";case"11":return"November ";case"12":return"December "}}function cs(f){f.basics.capitalName=f.basics.name.toUpperCase(),f.basics&&f.basics.email&&(f.basics.gravatar=us.url(f.basics.email,{s:"200",r:"pg",d:"mm"})),(f.basics.picture||f.basics.gravatar)&&(f.photo=f.basics.picture?f.basics.picture:f.basics.gravatar),Vn.each(f.basics.profiles,function(u){switch(u.network.toLowerCase()){case"facebook":u.iconClass="fa fa-facebook-square";break;case"github":u.iconClass="fa fa-github-square";break;case"twitter":u.iconClass="fa fa-twitter-square";break;case"googlePlus":case"google-plus":case"googleplus":u.iconClass="fa fa-google-plus-square";break;case"youtube":case"YouTube":u.iconClass="fa fa-youtube-square";break;case"vimeo":u.iconClass="fa fa-vimeo-square";break;case"linkedin":u.iconClass="fa fa-linkedin-square";break;case"pinterest":u.iconClass="fa fa-pinterest-square";break;case"flickr":case"flicker":u.iconClass="fa fa-flickr";break;case"behance":u.iconClass="fa fa-behance-square";break;case"dribbble":case"dribble":u.iconClass="fa fa-dribbble";break;case"codepen":case"codePen":u.iconClass="fa fa-codepen";break;case"soundcloud":case"soundCloud":u.iconClass="fa fa-soundcloud";break;case"steam":u.iconClass="fa fa-steam";break;case"reddit":u.iconClass="fa fa-reddit";break;case"tumblr":case"tumbler":u.iconClass="fa fa-tumblr-square";break;case"stack-overflow":case"stackOverflow":u.iconClass="fa fa-stack-overflow";break;case"bitbucket":u.iconClass="fa fa-bitbucket";break;case"skype":u.iconClass="fa fa-skype";break;case"blog":case"rss":u.iconClass="fa fa-rss-square";break}u.url?u.text=u.url:u.text=u.network+": "+u.username}),f.work&&f.work.length&&(f.workBool=!0,Vn.each(f.work,function(u){u.startDate&&(u.startDateYear=(u.startDate||"").substr(0,4),u.startDateMonth=Pn(u.startDate||"")),u.endDate?(u.endDateYear=(u.endDate||"").substr(0,4),u.endDateMonth=Pn(u.endDate||"")):u.endDateYear="Present",u.highlights&&u.highlights[0]&&u.highlights[0]!=""&&(u.boolHighlights=!0)})),f.volunteer&&f.volunteer.length&&(f.volunteerBool=!0,Vn.each(f.volunteer,function(u){u.startDate&&(u.startDateYear=(u.startDate||"").substr(0,4),u.startDateMonth=Pn(u.startDate||"")),u.endDate?(u.endDateYear=(u.endDate||"").substr(0,4),u.endDateMonth=Pn(u.endDate||"")):u.endDateYear="Present",u.highlights&&u.highlights[0]&&u.highlights[0]!=""&&(u.boolHighlights=!0)})),f.education&&f.education.length&&f.education[0].institution&&(f.educationBool=!0,Vn.each(f.education,function(u){!u.area||!u.studyType?u.educationDetail=(u.area==null?"":u.area)+(u.studyType==null?"":u.studyType):u.educationDetail=u.area+", "+u.studyType,u.startDate?(u.startDateYear=u.startDate.substr(0,4),u.startDateMonth=Pn(u.startDate||"")):u.endDateMonth="",u.endDate?(u.endDateYear=u.endDate.substr(0,4),u.endDateMonth=Pn(u.endDate||""),u.endDateYear>ps&&(u.endDateYear+=" (expected)")):(u.endDateYear="Present",u.endDateMonth=""),u.courses&&u.courses[0]&&u.courses[0]!=""&&(u.educationCourses=!0)})),f.awards&&f.awards.length&&f.awards[0].title&&(f.awardsBool=!0,Vn.each(f.awards,function(u){u.year=(u.date||"").substr(0,4),u.day=(u.date||"").substr(8,2),u.month=Pn(u.date||"")})),f.publications&&f.publications.length&&f.publications[0].name&&(f.publicationsBool=!0,Vn.each(f.publications,function(u){u.year=(u.releaseDate||"").substr(0,4),u.day=(u.releaseDate||"").substr(8,2),u.month=Pn(u.releaseDate||"")})),f.skills&&f.skills.length&&f.skills[0].name&&(f.skillsBool=!0),f.interests&&f.interests.length&&f.interests[0].name&&(f.interestsBool=!0),f.languages&&f.languages.length&&f.languages[0].language&&(f.languagesBool=!0),f.references&&f.references.length&&f.references[0].name&&(f.referencesBool=!0),f.css=jr.readFileSync("//style.css","utf-8"),f.printcss=jr.readFileSync("//print.css","utf-8");var y=jr.readFileSync("//resume.template","utf8"),S=ls.render(y,f);return S}it.exports={render:cs}});A();var Yn=rs(st(),1),at=Yn.default??Yn,Ps=at.render??Yn.render,zs=at.pdfRenderOptions??Yn.pdfRenderOptions;export{zs as pdfRenderOptions,Ps as render};
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
