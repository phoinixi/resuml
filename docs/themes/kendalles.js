var Ji=Object.create;var Te=Object.defineProperty;var Qi=Object.getOwnPropertyDescriptor;var Zi=Object.getOwnPropertyNames;var ji=Object.getPrototypeOf,ki=Object.prototype.hasOwnProperty;var It=(d,y)=>()=>(d&&(y=d(d=0)),y);var Fn=(d,y)=>()=>(y||d((y={exports:{}}).exports,y),y.exports),ns=(d,y)=>{for(var E in y)Te(d,E,{get:y[E],enumerable:!0})},Ut=(d,y,E,p)=>{if(y&&typeof y=="object"||typeof y=="function")for(let R of Zi(y))!ki.call(d,R)&&R!==E&&Te(d,R,{get:()=>y[R],enumerable:!(p=Qi(y,R))||p.enumerable});return d};var es=(d,y,E)=>(E=d!=null?Ji(ji(d)):{},Ut(y||!d||!d.__esModule?Te(E,"default",{value:d,enumerable:!0}):E,d)),ts=d=>Ut(Te({},"__esModule",{value:!0}),d);var q=It(()=>{});var Kt={};ns(Kt,{createReadStream:()=>Ot,createWriteStream:()=>Ht,default:()=>rs,existsSync:()=>Pt,lstatSync:()=>At,mkdirSync:()=>Lt,readFileSync:()=>Ft,readdirSync:()=>zt,rmdirSync:()=>Yt,statSync:()=>et,unlinkSync:()=>qt,writeFileSync:()=>Nt});function nt(d){return String(d).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Bt(d){var y=nt(d);if(Me[y]!==void 0)return Me[y];for(var E=Object.keys(Me),p=0;p<E.length;p++)if(y.endsWith("/"+E[p])||y===E[p])return Me[E[p]]}function ke(d){var y=nt(d);if(Ie[y]!==void 0)return Ie[y];for(var E=Object.keys(Ie),p=0;p<E.length;p++)if(y.endsWith("/"+E[p])||y===E[p])return Ie[E[p]]}var Me,Ie,Ft,zt,Pt,Nt,Lt,et,At,qt,Yt,Ot,Ht,rs,Vt=It(()=>{"use strict";q();Me={"package.json":`{
  "name": "jsonresume-theme-kendalles",
  "version": "0.0.1",
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
    "mustache": "^2.2.1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/liherc/jsonresume-theme-kendallEes.git"
  },
  "keywords": [
    "json",
    "jsonresume",
    "theme"
  ],
  "bugs": {
    "url": "https://github.com/linuxbozo/jsonresume-theme-kendall/issues"
  },
  "homepage": "https://github.com/linuxbozo/jsonresume-theme-kendall"
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
.interests,
.job-details,
.job {
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
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Resume of {{basics.name}}</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
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
            <h2><i class="fa fa-user ico"></i> Sobre mi</h2>
            <p>{{{basics.summary}}}</p>
          </div>
          {{/basics.summary}}
          {{#workBool}}
          <!-- WORK EXPERIENCE -->
          <div class="box">
            <h2><i class= "fa fa-suitcase ico"></i> Experiencia Laboral</h2>
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
                  <div class="job-details col-xs-11">
                    <div class="profession">{{position}}</div>
                    <div class="description">
                      {{{summary}}}
                      {{#boolHighlights}}
                      <div class="highlights">Logros</div>
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
            <h2><i class="fa fa-certificate ico"></i> Reconocimientos</h2>
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
            <h2><i class= "fa fa-group ico"></i> Voluntario</h2>
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
                      <div class="highlights">Destacados</div>
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
            <h2><i class="fa fa-bullseye ico"></i> Contacto</h2>
            {{#basics.location}}
            <div class="contact-item">
              <div class="icon pull-left text-center"><span class="fa fa-map-marker fa-fw"></span></div>
              {{#basics.location.address}}<div class="title pull-right">{{basics.location.address}}</div>{{/basics.location.address}}
              <div class="title {{^basics.location.address}}only {{/basics.location.address}} pull-right">{{basics.location.city}}{{#basics.location.region}}, {{basics.location.region}}{{/basics.location.region}}{{#basics.location.postalCode}} {{basics.location.postalCode}}{{/basics.location.postalCode}}{{#basics.location.countryCode}} {{basics.location.countryCode}}{{/basics.location.countryCode}}</div>
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
          {{#educationBool}}
          <!-- EDUCATION -->
          <div class="box">
            <h2><i class="fa fa-university ico"></i> Educaci\xF3n</h2>
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
            <h2><i class="fa fa-tasks ico"></i> Habilidades</h2>
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
            <h2><i class="fa fa-book ico"></i> Publicaciones</h2>
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
            <h2><i class="fa fa-language ico"></i> Idiomas</h2>
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
            <h2><i class="fa fa-heart ico"></i> Intereses</h2>
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
            <h2><i class= "fa fa-check-square ico"></i> Referencias</h2>
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

  </body>
</html>
`,"style.css":`@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800);
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
`},Ie={".":["LICENSE","README.md","index.js","package.json","print.css","resume.template","style.css"]};Ft=function(d,y){var E=Bt(d);return E!==void 0?E:""},zt=function(d,y){var E=ke(d);return E===void 0&&(E=[]),y&&y.withFileTypes?E.map(function(p){var R=nt(d)+"/"+p,z=ke(R)!==void 0;return{name:p,isFile:function(){return!z},isDirectory:function(){return z}}}):E},Pt=function(d){return Bt(d)!==void 0||ke(d)!==void 0},Nt=function(){},Lt=function(){},et=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},At=et,qt=function(){},Yt=function(){},Ot=function(){return{pipe:function(d){return d},on:function(){return this}}},Ht=function(){return{write:function(){},end:function(){},on:function(){return this}}},rs={readFileSync:Ft,readdirSync:zt,existsSync:Pt,writeFileSync:Nt,mkdirSync:Lt,statSync:et,lstatSync:At,unlinkSync:qt,rmdirSync:Yt,createReadStream:Ot,createWriteStream:Ht}});var $t=Fn((Zn,ge)=>{q();(function(){var d,y=[],E=[],p=0,R=+new Date+"",z=75,N=40,L=` 	\v\f\xA0\uFEFF
\r\u2028\u2029\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000`,gn=/\b__p \+= '';/g,yn=/\b(__p \+=) '' \+/g,wn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,En=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Rn=/\w*$/,tn=/^\s*function[ \n\r\t]+\w/,dn=/<%=([\s\S]+?)%>/g,$n=RegExp("^["+L+"]*0+(?=.$)"),Sn=/($^)/,qn=/\bthis\b/,ne=/['\n\r\t\u2028\u2029\\]/g,Yn=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],g=0,D="[object Arguments]",v="[object Array]",M="[object Boolean]",I="[object Date]",A="[object Function]",x="[object Number]",f="[object Object]",u="[object RegExp]",o="[object String]",c={};c[A]=!1,c[D]=c[v]=c[M]=c[I]=c[x]=c[f]=c[u]=c[o]=!0;var B={leading:!1,maxWait:0,trailing:!1},F={configurable:!1,enumerable:!1,value:null,writable:!1},T={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1},Q={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},K=T[typeof window]&&window||this,bn=T[typeof Zn]&&Zn&&!Zn.nodeType&&Zn,Tn=T[typeof ge]&&ge&&!ge.nodeType&&ge,G=Tn&&Tn.exports===bn&&bn,rn=T[typeof globalThis]&&globalThis;rn&&(rn.global===rn||rn.window===rn)&&(K=rn);function X(_,U,P){for(var Y=(P||0)-1,H=_?_.length:0;++Y<H;)if(_[Y]===U)return Y;return-1}function nn(_,U){var P=typeof U;if(_=_.cache,P=="boolean"||U==null)return _[U]?0:-1;P!="number"&&P!="string"&&(P="object");var Y=P=="number"?U:R+U;return _=(_=_[P])&&_[Y],P=="object"?_&&X(_,U)>-1?0:-1:_?0:-1}function Wn(_){var U=this.cache,P=typeof _;if(P=="boolean"||_==null)U[_]=!0;else{P!="number"&&P!="string"&&(P="object");var Y=P=="number"?_:R+_,H=U[P]||(U[P]={});P=="object"?(H[Y]||(H[Y]=[])).push(_):H[Y]=!0}}function Gn(_){return _.charCodeAt(0)}function Mn(_,U){for(var P=_.criteria,Y=U.criteria,H=-1,pn=P.length;++H<pn;){var vn=P[H],Z=Y[H];if(vn!==Z){if(vn>Z||typeof vn>"u")return 1;if(vn<Z||typeof Z>"u")return-1}}return _.index-U.index}function On(_){var U=-1,P=_.length,Y=_[0],H=_[P/2|0],pn=_[P-1];if(Y&&typeof Y=="object"&&H&&typeof H=="object"&&pn&&typeof pn=="object")return!1;var vn=Fe();vn.false=vn.null=vn.true=vn.undefined=!1;var Z=Fe();for(Z.array=_,Z.cache=vn,Z.push=Wn;++U<P;)Z.push(_[U]);return Z}function Be(_){return"\\"+Q[_]}function V(){return y.pop()||[]}function Fe(){return E.pop()||{array:null,cache:null,criteria:null,false:!1,index:0,null:!1,number:null,object:null,push:null,string:null,true:!1,undefined:!1,value:null}}function _n(_){_.length=0,y.length<N&&y.push(_)}function ee(_){var U=_.cache;U&&ee(U),_.array=_.cache=_.criteria=_.object=_.number=_.string=_.value=null,E.length<N&&E.push(_)}function O(_,U,P){U||(U=0),typeof P>"u"&&(P=_?_.length:0);for(var Y=-1,H=P-U||0,pn=Array(H<0?0:H);++Y<H;)pn[Y]=_[U+Y];return pn}function ze(_){_=_?zn.defaults(K.Object(),_,zn.pick(K,Yn)):K;var U=_.Array,P=_.Boolean,Y=_.Date,H=_.Function,pn=_.Math,vn=_.Number,Z=_.Object,te=_.RegExp,Pn=_.String,In=_.TypeError,Xn=[],rt=Z.prototype,lr=_._,sn=rt.toString,dr=te("^"+Pn(sn).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),pr=pn.ceil,ye=_.clearTimeout,cr=pn.floor,hr=H.prototype.toString,Jn=Ln(Jn=Z.getPrototypeOf)&&Jn,an=rt.hasOwnProperty,re=Xn.push,ie=_.setTimeout,it=Xn.splice,gr=Xn.unshift,st=(function(){try{var n={},e=Ln(e=Z.defineProperty)&&e,t=e(n,n,n)&&e}catch{}return t})(),we=Ln(we=Z.create)&&we,Pe=Ln(Pe=U.isArray)&&Pe,vr=_.isFinite,mr=_.isNaN,be=Ln(be=Z.keys)&&be,xn=pn.max,se=pn.min,Ne=_.parseInt,at=pn.random,Un={};Un[v]=U,Un[M]=P,Un[I]=Y,Un[A]=H,Un[f]=Z,Un[x]=vn,Un[u]=te,Un[o]=Pn;function a(n){return n&&typeof n=="object"&&!en(n)&&an.call(n,"__wrapped__")?n:new Hn(n)}function Hn(n,e){this.__chain__=!!e,this.__wrapped__=n}Hn.prototype=a.prototype;var ae=a.support={};ae.funcDecomp=!Ln(_.WinRTError)&&qn.test(ze),ae.funcNames=typeof H.name=="string",a.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:dn,variable:"",imports:{_:a}};function yr(n){var e=n[0],t=n[2],r=n[4];function i(){if(t){var s=O(t);re.apply(s,arguments)}if(this instanceof i){var l=oe(e.prototype),h=e.apply(l,s||arguments);return fn(h)?h:l}return e.apply(r,s||arguments)}return Oe(i,n),i}function Le(n,e,t,r,i){if(t){var s=t(n);if(typeof s<"u")return s}var l=fn(n);if(l){var h=sn.call(n);if(!c[h])return n;var m=Un[h];switch(h){case M:case I:return new m(+n);case x:case o:return new m(n);case u:return s=m(n.source,Rn.exec(n)),s.lastIndex=n.lastIndex,s}}else return n;var b=en(n);if(e){var w=!r;r||(r=V()),i||(i=V());for(var S=r.length;S--;)if(r[S]==n)return i[S];s=b?m(n.length):{}}else s=b?O(n):Ce({},n);return b&&(an.call(n,"index")&&(s.index=n.index),an.call(n,"input")&&(s.input=n.input)),e&&(r.push(n),i.push(s),(b?un:J)(n,function(C,$){s[$]=Le(C,e,t,r,i)}),w&&(_n(r),_n(i))),s}function oe(n,e){return fn(n)?we(n):{}}we||(oe=(function(){function n(){}return function(e){if(fn(e)){n.prototype=e;var t=new n;n.prototype=null}return t||_.Object()}})());function cn(n,e,t){if(typeof n!="function")return Qe;if(typeof e>"u"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r>"u"&&(ae.funcNames&&(r=!n.name),r=r||!ae.funcDecomp,!r)){var i=hr.call(n);ae.funcNames||(r=!tn.test(i)),r||(r=qn.test(i),Oe(n,r))}if(r===!1||r!==!0&&r[1]&1)return n;switch(t){case 1:return function(s){return n.call(e,s)};case 2:return function(s,l){return n.call(e,s,l)};case 3:return function(s,l,h){return n.call(e,s,l,h)};case 4:return function(s,l,h,m){return n.call(e,s,l,h,m)}}return Et(n,e)}function ot(n){var e=n[0],t=n[1],r=n[2],i=n[3],s=n[4],l=n[5],h=t&1,m=t&2,b=t&4,w=t&8,S=e;function C(){var $=h?s:this;if(r){var W=O(r);re.apply(W,arguments)}if((i||b)&&(W||(W=O(arguments)),i&&re.apply(W,i),b&&W.length<l))return t|=16,ot([e,w?t:t&-4,W,null,s,l]);if(W||(W=arguments),m&&(e=$[S]),this instanceof C){$=oe(e.prototype);var hn=e.apply($,W);return fn(hn)?hn:$}return e.apply($,W)}return Oe(C,n),C}function fe(n,e){var t=-1,r=_e(),i=n?n.length:0,s=i>=z&&r===X,l=[];if(s){var h=On(e);h?(r=nn,e=h):s=!1}for(;++t<i;){var m=n[t];r(e,m)<0&&l.push(m)}return s&&ee(e),l}function Nn(n,e,t,r){for(var i=(r||0)-1,s=n?n.length:0,l=[];++i<s;){var h=n[i];if(h&&typeof h=="object"&&typeof h.length=="number"&&(en(h)||xe(h))){e||(h=Nn(h,e,t));var m=-1,b=h.length,w=l.length;for(l.length+=b;++m<b;)l[w++]=h[m]}else t||l.push(h)}return l}function Qn(n,e,t,r,i,s){if(t){var l=t(n,e);if(typeof l<"u")return!!l}if(n===e)return n!==0||1/n==1/e;var h=typeof n,m=typeof e;if(n===n&&!(n&&T[h])&&!(e&&T[m]))return!1;if(n==null||e==null)return n===e;var b=sn.call(n),w=sn.call(e);if(b==D&&(b=f),w==D&&(w=f),b!=w)return!1;switch(b){case M:case I:return+n==+e;case x:return n!=+n?e!=+e:n==0?1/n==1/e:n==+e;case u:case o:return n==Pn(e)}var S=b==v;if(!S){var C=an.call(n,"__wrapped__"),$=an.call(e,"__wrapped__");if(C||$)return Qn(C?n.__wrapped__:n,$?e.__wrapped__:e,t,r,i,s);if(b!=f)return!1;var W=n.constructor,hn=e.constructor;if(W!=hn&&!(j(W)&&W instanceof W&&j(hn)&&hn instanceof hn)&&"constructor"in n&&"constructor"in e)return!1}var mn=!i;i||(i=V()),s||(s=V());for(var ln=i.length;ln--;)if(i[ln]==n)return s[ln]==e;var k=0;if(l=!0,i.push(n),s.push(e),S){if(ln=n.length,k=e.length,l=k==ln,l||r)for(;k--;){var Se=ln,pe=e[k];if(r)for(;Se--&&!(l=Qn(n[Se],pe,t,r,i,s)););else if(!(l=Qn(n[k],pe,t,r,i,s)))break}}else Bn(e,function(ce,he,je){if(an.call(je,he))return k++,l=an.call(n,he)&&Qn(n[he],ce,t,r,i,s)}),l&&!r&&Bn(n,function(ce,he,je){if(an.call(je,he))return l=--k>-1});return i.pop(),s.pop(),mn&&(_n(i),_n(s)),l}function ft(n,e,t,r,i){(en(e)?un:J)(e,function(s,l){var h,m,b=s,w=n[l];if(s&&((m=en(s))||Ve(s))){for(var S=r.length;S--;)if(h=r[S]==s){w=i[S];break}if(!h){var C;t&&(b=t(w,s),(C=typeof b<"u")&&(w=b)),C||(w=m?en(w)?w:[]:Ve(w)?w:{}),r.push(s),i.push(w),C||ft(w,s,t,r,i)}}else t&&(b=t(w,s),typeof b>"u"&&(b=s)),typeof b<"u"&&(w=b);n[l]=w})}function Ae(n,e){return n+cr(at()*(e-n+1))}function qe(n,e,t){var r=-1,i=_e(),s=n?n.length:0,l=[],h=!e&&s>=z&&i===X,m=t||h?V():l;if(h){var b=On(m);i=nn,m=b}for(;++r<s;){var w=n[r],S=t?t(w,r,n):w;(e?!r||m[m.length-1]!==S:i(m,S)<0)&&((t||h)&&m.push(S),l.push(w))}return h?(_n(m.array),ee(m)):t&&_n(m),l}function Ye(n){return function(e,t,r){var i={};t=a.createCallback(t,r,3);var s=-1,l=e?e.length:0;if(typeof l=="number")for(;++s<l;){var h=e[s];n(i,h,t(h,s,e),e)}else J(e,function(m,b,w){n(i,m,t(m,b,w),w)});return i}}function Cn(n,e,t,r,i,s){var l=e&1,h=e&2,m=e&4,b=e&8,w=e&16,S=e&32;if(!h&&!j(n))throw new In;w&&!t.length&&(e&=-17,w=t=!1),S&&!r.length&&(e&=-33,S=r=!1);var C=n&&n.__bindData__;if(C&&C!==!0)return C=O(C),C[2]&&(C[2]=O(C[2])),C[3]&&(C[3]=O(C[3])),l&&!(C[1]&1)&&(C[4]=i),!l&&C[1]&1&&(e|=8),m&&!(C[1]&4)&&(C[5]=s),w&&re.apply(C[2]||(C[2]=[]),t),S&&gr.apply(C[3]||(C[3]=[]),r),C[1]|=e,Cn.apply(null,C);var $=e==1||e===17?yr:ot;return $([n,e,t,r,i,s])}function wr(n){return He[n]}function _e(){var n=(n=a.indexOf)===bt?X:n;return n}function Ln(n){return typeof n=="function"&&dr.test(n)}var Oe=st?function(n,e){F.value=e,st(n,"__bindData__",F),F.value=null}:St;function ut(n){var e,t;return!(n&&sn.call(n)==f)||(e=n.constructor,j(e)&&!(e instanceof e))?!1:(Bn(n,function(r,i){t=i}),typeof t>"u"||an.call(n,t))}function br(n){return lt[n]}function xe(n){return n&&typeof n=="object"&&typeof n.length=="number"&&sn.call(n)==D||!1}var en=Pe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&sn.call(n)==v||!1},_r=function(n){var e,t=n,r=[];if(!t||!T[typeof n])return r;for(e in t)an.call(t,e)&&r.push(e);return r},on=be?function(n){return fn(n)?be(n):[]}:_r,He={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lt=pt(He),xr=te("("+on(lt).join("|")+")","g"),Cr=te("["+on(He).join("")+"]","g"),Ce=function(n,e,t){var r,i=n,s=i;if(!i)return s;var l=arguments,h=0,m=typeof t=="number"?2:l.length;if(m>3&&typeof l[m-2]=="function")var b=cn(l[--m-1],l[m--],2);else m>2&&typeof l[m-1]=="function"&&(b=l[--m]);for(;++h<m;)if(i=l[h],i&&T[typeof i])for(var w=-1,S=T[typeof i]&&on(i),C=S?S.length:0;++w<C;)r=S[w],s[r]=b?b(s[r],i[r]):i[r];return s};function Dr(n,e,t,r){return typeof e!="boolean"&&e!=null&&(r=t,t=e,e=!1),Le(n,e,typeof t=="function"&&cn(t,r,1))}function Er(n,e,t){return Le(n,!0,typeof e=="function"&&cn(e,t,1))}function Rr(n,e){var t=oe(n);return e?Ce(t,e):t}var Ke=function(n,e,t){var r,i=n,s=i;if(!i)return s;for(var l=arguments,h=0,m=typeof t=="number"?2:l.length;++h<m;)if(i=l[h],i&&T[typeof i])for(var b=-1,w=T[typeof i]&&on(i),S=w?w.length:0;++b<S;)r=w[b],typeof s[r]>"u"&&(s[r]=i[r]);return s};function Sr(n,e,t){var r;return e=a.createCallback(e,t,3),J(n,function(i,s,l){if(e(i,s,l))return r=s,!1}),r}function Tr(n,e,t){var r;return e=a.createCallback(e,t,3),dt(n,function(i,s,l){if(e(i,s,l))return r=s,!1}),r}var Bn=function(n,e,t){var r,i=n,s=i;if(!i||!T[typeof i])return s;e=e&&typeof t>"u"?e:cn(e,t,3);for(r in i)if(e(i[r],r,n)===!1)return s;return s};function Mr(n,e,t){var r=[];Bn(n,function(s,l){r.push(l,s)});var i=r.length;for(e=cn(e,t,3);i--&&e(r[i--],r[i],n)!==!1;);return n}var J=function(n,e,t){var r,i=n,s=i;if(!i||!T[typeof i])return s;e=e&&typeof t>"u"?e:cn(e,t,3);for(var l=-1,h=T[typeof i]&&on(i),m=h?h.length:0;++l<m;)if(r=h[l],e(i[r],r,n)===!1)return s;return s};function dt(n,e,t){var r=on(n),i=r.length;for(e=cn(e,t,3);i--;){var s=r[i];if(e(n[s],s,n)===!1)break}return n}function ue(n){var e=[];return Bn(n,function(t,r){j(t)&&e.push(r)}),e.sort()}function Ir(n,e){return n?an.call(n,e):!1}function pt(n){for(var e=-1,t=on(n),r=t.length,i={};++e<r;){var s=t[e];i[n[s]]=s}return i}function Ur(n){return n===!0||n===!1||n&&typeof n=="object"&&sn.call(n)==M||!1}function Br(n){return n&&typeof n=="object"&&sn.call(n)==I||!1}function Fr(n){return n&&n.nodeType===1||!1}function zr(n){var e=!0;if(!n)return e;var t=sn.call(n),r=n.length;return t==v||t==o||t==D||t==f&&typeof r=="number"&&j(n.splice)?!r:(J(n,function(){return e=!1}),e)}function Pr(n,e,t,r){return Qn(n,e,typeof t=="function"&&cn(t,r,2))}function Nr(n){return vr(n)&&!mr(parseFloat(n))}function j(n){return typeof n=="function"}function fn(n){return!!(n&&T[typeof n])}function Lr(n){return ct(n)&&n!=+n}function Ar(n){return n===null}function ct(n){return typeof n=="number"||n&&typeof n=="object"&&sn.call(n)==x||!1}var Ve=Jn?function(n){if(!(n&&sn.call(n)==f))return!1;var e=n.valueOf,t=Ln(e)&&(t=Jn(e))&&Jn(t);return t?n==t||Jn(n)==t:ut(n)}:ut;function qr(n){return n&&typeof n=="object"&&sn.call(n)==u||!1}function le(n){return typeof n=="string"||n&&typeof n=="object"&&sn.call(n)==o||!1}function Yr(n){return typeof n>"u"}function Or(n,e,t){var r={};return e=a.createCallback(e,t,3),J(n,function(i,s,l){r[s]=e(i,s,l)}),r}function Hr(n){var e=arguments,t=2;if(!fn(n))return n;if(typeof e[2]!="number"&&(t=e.length),t>3&&typeof e[t-2]=="function")var r=cn(e[--t-1],e[t--],2);else t>2&&typeof e[t-1]=="function"&&(r=e[--t]);for(var i=O(arguments,1,t),s=-1,l=V(),h=V();++s<t;)ft(n,i[s],r,l,h);return _n(l),_n(h),n}function Kr(n,e,t){var r={};if(typeof e!="function"){var i=[];Bn(n,function(m,b){i.push(b)}),i=fe(i,Nn(arguments,!0,!1,1));for(var s=-1,l=i.length;++s<l;){var h=i[s];r[h]=n[h]}}else e=a.createCallback(e,t,3),Bn(n,function(m,b,w){e(m,b,w)||(r[b]=m)});return r}function Vr(n){for(var e=-1,t=on(n),r=t.length,i=U(r);++e<r;){var s=t[e];i[e]=[s,n[s]]}return i}function $r(n,e,t){var r={};if(typeof e!="function")for(var i=-1,s=Nn(arguments,!0,!1,1),l=fn(n)?s.length:0;++i<l;){var h=s[i];h in n&&(r[h]=n[h])}else e=a.createCallback(e,t,3),Bn(n,function(m,b,w){e(m,b,w)&&(r[b]=m)});return r}function Wr(n,e,t,r){var i=en(n);if(t==null)if(i)t=[];else{var s=n&&n.constructor,l=s&&s.prototype;t=oe(l)}return e&&(e=a.createCallback(e,r,4),(i?un:J)(n,function(h,m,b){return e(t,h,m,b)})),t}function De(n){for(var e=-1,t=on(n),r=t.length,i=U(r);++e<r;)i[e]=n[t[e]];return i}function Gr(n){for(var e=arguments,t=-1,r=Nn(e,!0,!1,1),i=e[2]&&e[2][e[1]]===n?1:r.length,s=U(i);++t<i;)s[t]=n[r[t]];return s}function ht(n,e,t){var r=-1,i=_e(),s=n?n.length:0,l=!1;return t=(t<0?xn(0,s+t):t)||0,en(n)?l=i(n,e,t)>-1:typeof s=="number"?l=(le(n)?n.indexOf(e,t):i(n,e,t))>-1:J(n,function(h){if(++r>=t)return!(l=h===e)}),l}var Xr=Ye(function(n,e,t){an.call(n,t)?n[t]++:n[t]=1});function gt(n,e,t){var r=!0;e=a.createCallback(e,t,3);var i=-1,s=n?n.length:0;if(typeof s=="number")for(;++i<s&&(r=!!e(n[i],i,n)););else J(n,function(l,h,m){return r=!!e(l,h,m)});return r}function Ee(n,e,t){var r=[];e=a.createCallback(e,t,3);var i=-1,s=n?n.length:0;if(typeof s=="number")for(;++i<s;){var l=n[i];e(l,i,n)&&r.push(l)}else J(n,function(h,m,b){e(h,m,b)&&r.push(h)});return r}function $e(n,e,t){e=a.createCallback(e,t,3);var r=-1,i=n?n.length:0;if(typeof i=="number")for(;++r<i;){var s=n[r];if(e(s,r,n))return s}else{var l;return J(n,function(h,m,b){if(e(h,m,b))return l=h,!1}),l}}function Jr(n,e,t){var r;return e=a.createCallback(e,t,3),Re(n,function(i,s,l){if(e(i,s,l))return r=i,!1}),r}function un(n,e,t){var r=-1,i=n?n.length:0;if(e=e&&typeof t>"u"?e:cn(e,t,3),typeof i=="number")for(;++r<i&&e(n[r],r,n)!==!1;);else J(n,e);return n}function Re(n,e,t){var r=n?n.length:0;if(e=e&&typeof t>"u"?e:cn(e,t,3),typeof r=="number")for(;r--&&e(n[r],r,n)!==!1;);else{var i=on(n);r=i.length,J(n,function(s,l,h){return l=i?i[--r]:--r,e(h[l],l,h)})}return n}var Qr=Ye(function(n,e,t){(an.call(n,t)?n[t]:n[t]=[]).push(e)}),Zr=Ye(function(n,e,t){n[t]=e});function jr(n,e){var t=O(arguments,2),r=-1,i=typeof e=="function",s=n?n.length:0,l=U(typeof s=="number"?s:0);return un(n,function(h){l[++r]=(i?e:h[e]).apply(h,t)}),l}function de(n,e,t){var r=-1,i=n?n.length:0;if(e=a.createCallback(e,t,3),typeof i=="number")for(var s=U(i);++r<i;)s[r]=e(n[r],r,n);else s=[],J(n,function(l,h,m){s[++r]=e(l,h,m)});return s}function vt(n,e,t){var r=-1/0,i=r;if(typeof e!="function"&&t&&t[e]===n&&(e=null),e==null&&en(n))for(var s=-1,l=n.length;++s<l;){var h=n[s];h>i&&(i=h)}else e=e==null&&le(n)?Gn:a.createCallback(e,t,3),un(n,function(m,b,w){var S=e(m,b,w);S>r&&(r=S,i=m)});return i}function kr(n,e,t){var r=1/0,i=r;if(typeof e!="function"&&t&&t[e]===n&&(e=null),e==null&&en(n))for(var s=-1,l=n.length;++s<l;){var h=n[s];h<i&&(i=h)}else e=e==null&&le(n)?Gn:a.createCallback(e,t,3),un(n,function(m,b,w){var S=e(m,b,w);S<r&&(r=S,i=m)});return i}var We=de;function Ge(n,e,t,r){if(!n)return t;var i=arguments.length<3;e=a.createCallback(e,r,4);var s=-1,l=n.length;if(typeof l=="number")for(i&&(t=n[++s]);++s<l;)t=e(t,n[s],s,n);else J(n,function(h,m,b){t=i?(i=!1,h):e(t,h,m,b)});return t}function mt(n,e,t,r){var i=arguments.length<3;return e=a.createCallback(e,r,4),Re(n,function(s,l,h){t=i?(i=!1,s):e(t,s,l,h)}),t}function ni(n,e,t){return e=a.createCallback(e,t,3),Ee(n,function(r,i,s){return!e(r,i,s)})}function ei(n,e,t){if(n&&typeof n.length!="number"&&(n=De(n)),e==null||t)return n?n[Ae(0,n.length-1)]:d;var r=yt(n);return r.length=se(xn(0,e),r.length),r}function yt(n){var e=-1,t=n?n.length:0,r=U(typeof t=="number"?t:0);return un(n,function(i){var s=Ae(0,++e);r[e]=r[s],r[s]=i}),r}function ti(n){var e=n?n.length:0;return typeof e=="number"?e:on(n).length}function wt(n,e,t){var r;e=a.createCallback(e,t,3);var i=-1,s=n?n.length:0;if(typeof s=="number")for(;++i<s&&!(r=e(n[i],i,n)););else J(n,function(l,h,m){return!(r=e(l,h,m))});return!!r}function ri(n,e,t){var r=-1,i=en(e),s=n?n.length:0,l=U(typeof s=="number"?s:0);for(i||(e=a.createCallback(e,t,3)),un(n,function(m,b,w){var S=l[++r]=Fe();i?S.criteria=de(e,function(C){return m[C]}):(S.criteria=V())[0]=e(m,b,w),S.index=r,S.value=m}),s=l.length,l.sort(Mn);s--;){var h=l[s];l[s]=h.value,i||_n(h.criteria),ee(h)}return l}function ii(n){return n&&typeof n.length=="number"?O(n):De(n)}var si=Ee;function ai(n){for(var e=-1,t=n?n.length:0,r=[];++e<t;){var i=n[e];i&&r.push(i)}return r}function oi(n){return fe(n,Nn(arguments,!0,!0,1))}function fi(n,e,t){var r=-1,i=n?n.length:0;for(e=a.createCallback(e,t,3);++r<i;)if(e(n[r],r,n))return r;return-1}function ui(n,e,t){var r=n?n.length:0;for(e=a.createCallback(e,t,3);r--;)if(e(n[r],r,n))return r;return-1}function Xe(n,e,t){var r=0,i=n?n.length:0;if(typeof e!="number"&&e!=null){var s=-1;for(e=a.createCallback(e,t,3);++s<i&&e(n[s],s,n);)r++}else if(r=e,r==null||t)return n?n[0]:d;return O(n,0,se(xn(0,r),i))}function li(n,e,t,r){return typeof e!="boolean"&&e!=null&&(r=t,t=typeof e!="function"&&r&&r[e]===n?null:e,e=!1),t!=null&&(n=de(n,t,r)),Nn(n,e)}function bt(n,e,t){if(typeof t=="number"){var r=n?n.length:0;t=t<0?xn(0,r+t):t||0}else if(t){var i=_t(n,e);return n[i]===e?i:-1}return X(n,e,t)}function di(n,e,t){var r=0,i=n?n.length:0;if(typeof e!="number"&&e!=null){var s=i;for(e=a.createCallback(e,t,3);s--&&e(n[s],s,n);)r++}else r=e==null||t?1:e||r;return O(n,0,se(xn(0,i-r),i))}function pi(){for(var n=[],e=-1,t=arguments.length,r=V(),i=_e(),s=i===X,l=V();++e<t;){var h=arguments[e];(en(h)||xe(h))&&(n.push(h),r.push(s&&h.length>=z&&On(e?n[e]:l)))}var m=n[0],b=-1,w=m?m.length:0,S=[];n:for(;++b<w;){var C=r[0];if(h=m[b],(C?nn(C,h):i(l,h))<0){for(e=t,(C||l).push(h);--e;)if(C=r[e],(C?nn(C,h):i(n[e],h))<0)continue n;S.push(h)}}for(;t--;)C=r[t],C&&ee(C);return _n(r),_n(l),S}function ci(n,e,t){var r=0,i=n?n.length:0;if(typeof e!="number"&&e!=null){var s=i;for(e=a.createCallback(e,t,3);s--&&e(n[s],s,n);)r++}else if(r=e,r==null||t)return n?n[i-1]:d;return O(n,xn(0,i-r))}function hi(n,e,t){var r=n?n.length:0;for(typeof t=="number"&&(r=(t<0?xn(0,r+t):se(t,r-1))+1);r--;)if(n[r]===e)return r;return-1}function gi(n){for(var e=arguments,t=0,r=e.length,i=n?n.length:0;++t<r;)for(var s=-1,l=e[t];++s<i;)n[s]===l&&(it.call(n,s--,1),i--);return n}function vi(n,e,t){n=+n||0,t=typeof t=="number"?t:+t||1,e==null&&(e=n,n=0);for(var r=-1,i=xn(0,pr((e-n)/(t||1))),s=U(i);++r<i;)s[r]=n,n+=t;return s}function mi(n,e,t){var r=-1,i=n?n.length:0,s=[];for(e=a.createCallback(e,t,3);++r<i;){var l=n[r];e(l,r,n)&&(s.push(l),it.call(n,r--,1),i--)}return s}function Je(n,e,t){if(typeof e!="number"&&e!=null){var r=0,i=-1,s=n?n.length:0;for(e=a.createCallback(e,t,3);++i<s&&e(n[i],i,n);)r++}else r=e==null||t?1:xn(0,e);return O(n,r)}function _t(n,e,t,r){var i=0,s=n?n.length:i;for(t=t?a.createCallback(t,r,1):Qe,e=t(e);i<s;){var l=i+s>>>1;t(n[l])<e?i=l+1:s=l}return i}function yi(){return qe(Nn(arguments,!0,!0))}function xt(n,e,t,r){return typeof e!="boolean"&&e!=null&&(r=t,t=typeof e!="function"&&r&&r[e]===n?null:e,e=!1),t!=null&&(t=a.createCallback(t,r,3)),qe(n,e,t)}function wi(n){return fe(n,O(arguments,1))}function bi(){for(var n=-1,e=arguments.length;++n<e;){var t=arguments[n];if(en(t)||xe(t))var r=r?qe(fe(r,t).concat(fe(t,r))):t}return r||[]}function Ct(){for(var n=arguments.length>1?arguments:arguments[0],e=-1,t=n?vt(We(n,"length")):0,r=U(t<0?0:t);++e<t;)r[e]=We(n,e);return r}function Dt(n,e){var t=-1,r=n?n.length:0,i={};for(!e&&r&&!en(n[0])&&(e=[]);++t<r;){var s=n[t];e?i[s]=e[t]:s&&(i[s[0]]=s[1])}return i}function _i(n,e){if(!j(e))throw new In;return function(){if(--n<1)return e.apply(this,arguments)}}function Et(n,e){return arguments.length>2?Cn(n,17,O(arguments,2),null,e):Cn(n,1,null,null,e)}function xi(n){for(var e=arguments.length>1?Nn(arguments,!0,!1,1):ue(n),t=-1,r=e.length;++t<r;){var i=e[t];n[i]=Cn(n[i],1,null,null,n)}return n}function Ci(n,e){return arguments.length>2?Cn(e,19,O(arguments,2),null,n):Cn(e,3,null,null,n)}function Di(){for(var n=arguments,e=n.length;e--;)if(!j(n[e]))throw new In;return function(){for(var t=arguments,r=n.length;r--;)t=[n[r].apply(this,t)];return t[0]}}function Ei(n,e){return e=typeof e=="number"?e:+e||n.length,Cn(n,4,null,null,null,e)}function Rt(n,e,t){var r,i,s,l,h,m,b,w=0,S=!1,C=!0;if(!j(n))throw new In;if(e=xn(0,e)||0,t===!0){var $=!0;C=!1}else fn(t)&&($=t.leading,S="maxWait"in t&&(xn(e,t.maxWait)||0),C="trailing"in t?t.trailing:C);var W=function(){var mn=e-(Kn()-l);if(mn<=0){i&&ye(i);var ln=b;i=m=b=d,ln&&(w=Kn(),s=n.apply(h,r),!m&&!i&&(r=h=null))}else m=ie(W,mn)},hn=function(){m&&ye(m),i=m=b=d,(C||S!==e)&&(w=Kn(),s=n.apply(h,r),!m&&!i&&(r=h=null))};return function(){if(r=arguments,l=Kn(),h=this,b=C&&(m||!$),S===!1)var mn=$&&!m;else{!i&&!$&&(w=l);var ln=S-(l-w),k=ln<=0;k?(i&&(i=ye(i)),w=l,s=n.apply(h,r)):i||(i=ie(hn,ln))}return k&&m?m=ye(m):!m&&e!==S&&(m=ie(W,e)),mn&&(k=!0,s=n.apply(h,r)),k&&!m&&!i&&(r=h=null),s}}function Ri(n){if(!j(n))throw new In;var e=O(arguments,1);return ie(function(){n.apply(d,e)},1)}function Si(n,e){if(!j(n))throw new In;var t=O(arguments,2);return ie(function(){n.apply(d,t)},e)}function Ti(n,e){if(!j(n))throw new In;var t=function(){var r=t.cache,i=e?e.apply(this,arguments):R+arguments[0];return an.call(r,i)?r[i]:r[i]=n.apply(this,arguments)};return t.cache={},t}function Mi(n){var e,t;if(!j(n))throw new In;return function(){return e||(e=!0,t=n.apply(this,arguments),n=null),t}}function Ii(n){return Cn(n,16,O(arguments,1))}function Ui(n){return Cn(n,32,null,O(arguments,1))}function Bi(n,e,t){var r=!0,i=!0;if(!j(n))throw new In;return t===!1?r=!1:fn(t)&&(r="leading"in t?t.leading:r,i="trailing"in t?t.trailing:i),B.leading=r,B.maxWait=e,B.trailing=i,Rt(n,e,B)}function Fi(n,e){return Cn(e,16,[n])}function zi(n){return function(){return n}}function Pi(n,e,t){var r=typeof n;if(n==null||r=="function")return cn(n,e,t);if(r!="object")return Tt(n);var i=on(n),s=i[0],l=n[s];return i.length==1&&l===l&&!fn(l)?function(h){var m=h[s];return l===m&&(l!==0||1/l==1/m)}:function(h){for(var m=i.length,b=!1;m--&&(b=Qn(h[i[m]],n[i[m]],null,!0)););return b}}function Ni(n){return n==null?"":Pn(n).replace(Cr,wr)}function Qe(n){return n}function Ze(n,e,t){var r=!0,i=e&&ue(e);(!e||!t&&!i.length)&&(t==null&&(t=e),s=Hn,e=n,n=a,i=ue(e)),t===!1?r=!1:fn(t)&&"chain"in t&&(r=t.chain);var s=n,l=j(s);un(i,function(h){var m=n[h]=e[h];l&&(s.prototype[h]=function(){var b=this.__chain__,w=this.__wrapped__,S=[w];re.apply(S,arguments);var C=m.apply(n,S);if(r||b){if(w===C&&fn(C))return this;C=new s(C),C.__chain__=b}return C})})}function Li(){return _._=lr,this}function St(){}var Kn=Ln(Kn=Y.now)&&Kn||function(){return new Y().getTime()},Ai=Ne(L+"08")==8?Ne:function(n,e){return Ne(le(n)?n.replace($n,""):n,e||0)};function Tt(n){return function(e){return e[n]}}function qi(n,e,t){var r=n==null,i=e==null;if(t==null&&(typeof n=="boolean"&&i?(t=n,n=1):!i&&typeof e=="boolean"&&(t=e,i=!0)),r&&i&&(e=1),n=+n||0,i?(e=n,n=0):e=+e||0,t||n%1||e%1){var s=at();return se(n+s*(e-n+parseFloat("1e-"+((s+"").length-1))),e)}return Ae(n,e)}function Yi(n,e){if(n){var t=n[e];return j(t)?n[e]():t}}function Oi(n,e,t){var r=a.templateSettings;n=Pn(n||""),t=Ke({},t,r);var i=Ke({},t.imports,r.imports),s=on(i),l=De(i),h,m=0,b=t.interpolate||Sn,w="__p += '",S=te((t.escape||Sn).source+"|"+b.source+"|"+(b===dn?En:Sn).source+"|"+(t.evaluate||Sn).source+"|$","g");n.replace(S,function(mn,ln,k,Se,pe,ce){return k||(k=Se),w+=n.slice(m,ce).replace(ne,Be),ln&&(w+=`' +
__e(`+ln+`) +
'`),pe&&(h=!0,w+=`';
`+pe+`;
__p += '`),k&&(w+=`' +
((__t = (`+k+`)) == null ? '' : __t) +
'`),m=ce+mn.length,mn}),w+=`';
`;var C=t.variable,$=C;$||(C="obj",w="with ("+C+`) {
`+w+`
}
`),w=(h?w.replace(gn,""):w).replace(yn,"$1").replace(wn,"$1;"),w="function("+C+`) {
`+($?"":C+" || ("+C+` = {});
`)+"var __t, __p = '', __e = _.escape"+(h?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+w+`return __p
}`;var W=`
/*
//# sourceURL=`+(t.sourceURL||"/lodash/template/source["+g+++"]")+`
*/`;try{var hn=H(s,"return "+w+W).apply(d,l)}catch(mn){throw mn.source=w,mn}return e?hn(e):(hn.source=w,hn)}function Hi(n,e,t){n=(n=+n)>-1?n:0;var r=-1,i=U(n);for(e=cn(e,t,1);++r<n;)i[r]=e(r);return i}function Ki(n){return n==null?"":Pn(n).replace(xr,br)}function Vi(n){var e=++p;return Pn(n??"")+e}function $i(n){return n=new Hn(n),n.__chain__=!0,n}function Wi(n,e){return e(n),n}function Gi(){return this.__chain__=!0,this}function Xi(){return Pn(this.__wrapped__)}function Mt(){return this.__wrapped__}return a.after=_i,a.assign=Ce,a.at=Gr,a.bind=Et,a.bindAll=xi,a.bindKey=Ci,a.chain=$i,a.compact=ai,a.compose=Di,a.constant=zi,a.countBy=Xr,a.create=Rr,a.createCallback=Pi,a.curry=Ei,a.debounce=Rt,a.defaults=Ke,a.defer=Ri,a.delay=Si,a.difference=oi,a.filter=Ee,a.flatten=li,a.forEach=un,a.forEachRight=Re,a.forIn=Bn,a.forInRight=Mr,a.forOwn=J,a.forOwnRight=dt,a.functions=ue,a.groupBy=Qr,a.indexBy=Zr,a.initial=di,a.intersection=pi,a.invert=pt,a.invoke=jr,a.keys=on,a.map=de,a.mapValues=Or,a.max=vt,a.memoize=Ti,a.merge=Hr,a.min=kr,a.omit=Kr,a.once=Mi,a.pairs=Vr,a.partial=Ii,a.partialRight=Ui,a.pick=$r,a.pluck=We,a.property=Tt,a.pull=gi,a.range=vi,a.reject=ni,a.remove=mi,a.rest=Je,a.shuffle=yt,a.sortBy=ri,a.tap=Wi,a.throttle=Bi,a.times=Hi,a.toArray=ii,a.transform=Wr,a.union=yi,a.uniq=xt,a.values=De,a.where=si,a.without=wi,a.wrap=Fi,a.xor=bi,a.zip=Ct,a.zipObject=Dt,a.collect=de,a.drop=Je,a.each=un,a.eachRight=Re,a.extend=Ce,a.methods=ue,a.object=Dt,a.select=Ee,a.tail=Je,a.unique=xt,a.unzip=Ct,Ze(a),a.clone=Dr,a.cloneDeep=Er,a.contains=ht,a.escape=Ni,a.every=gt,a.find=$e,a.findIndex=fi,a.findKey=Sr,a.findLast=Jr,a.findLastIndex=ui,a.findLastKey=Tr,a.has=Ir,a.identity=Qe,a.indexOf=bt,a.isArguments=xe,a.isArray=en,a.isBoolean=Ur,a.isDate=Br,a.isElement=Fr,a.isEmpty=zr,a.isEqual=Pr,a.isFinite=Nr,a.isFunction=j,a.isNaN=Lr,a.isNull=Ar,a.isNumber=ct,a.isObject=fn,a.isPlainObject=Ve,a.isRegExp=qr,a.isString=le,a.isUndefined=Yr,a.lastIndexOf=hi,a.mixin=Ze,a.noConflict=Li,a.noop=St,a.now=Kn,a.parseInt=Ai,a.random=qi,a.reduce=Ge,a.reduceRight=mt,a.result=Yi,a.runInContext=ze,a.size=ti,a.some=wt,a.sortedIndex=_t,a.template=Oi,a.unescape=Ki,a.uniqueId=Vi,a.all=gt,a.any=wt,a.detect=$e,a.findWhere=$e,a.foldl=Ge,a.foldr=mt,a.include=ht,a.inject=Ge,Ze((function(){var n={};return J(a,function(e,t){a.prototype[t]||(n[t]=e)}),n})(),!1),a.first=Xe,a.last=ci,a.sample=ei,a.take=Xe,a.head=Xe,J(a,function(n,e){var t=e!=="sample";a.prototype[e]||(a.prototype[e]=function(r,i){var s=this.__chain__,l=n(this.__wrapped__,r,i);return!s&&(r==null||i&&!(t&&typeof r=="function"))?l:new Hn(l,s)})}),a.VERSION="2.4.2",a.prototype.chain=Gi,a.prototype.toString=Xi,a.prototype.value=Mt,a.prototype.valueOf=Mt,un(["join","pop","shift"],function(n){var e=Xn[n];a.prototype[n]=function(){var t=this.__chain__,r=e.apply(this.__wrapped__,arguments);return t?new Hn(r,t):r}}),un(["push","reverse","sort","unshift"],function(n){var e=Xn[n];a.prototype[n]=function(){return e.apply(this.__wrapped__,arguments),this}}),un(["concat","slice","splice"],function(n){var e=Xn[n];a.prototype[n]=function(){return new Hn(e.apply(this.__wrapped__,arguments),this.__chain__)}}),a}var zn=ze();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(K._=zn,define(function(){return zn})):bn&&Tn?G?(Tn.exports=zn)._=zn:bn._=zn:K._=zn}).call(Zn)});var Gt=Fn((Wt,Ue)=>{q();(function(d){"use strict";function y(g,D){var v=(g&65535)+(D&65535),M=(g>>16)+(D>>16)+(v>>16);return M<<16|v&65535}function E(g,D){return g<<D|g>>>32-D}function p(g,D,v,M,I,A){return y(E(y(y(D,g),y(M,A)),I),v)}function R(g,D,v,M,I,A,x){return p(D&v|~D&M,g,D,I,A,x)}function z(g,D,v,M,I,A,x){return p(D&M|v&~M,g,D,I,A,x)}function N(g,D,v,M,I,A,x){return p(D^v^M,g,D,I,A,x)}function L(g,D,v,M,I,A,x){return p(v^(D|~M),g,D,I,A,x)}function gn(g,D){g[D>>5]|=128<<D%32,g[(D+64>>>9<<4)+14]=D;var v,M,I,A,x,f=1732584193,u=-271733879,o=-1732584194,c=271733878;for(v=0;v<g.length;v+=16)M=f,I=u,A=o,x=c,f=R(f,u,o,c,g[v],7,-680876936),c=R(c,f,u,o,g[v+1],12,-389564586),o=R(o,c,f,u,g[v+2],17,606105819),u=R(u,o,c,f,g[v+3],22,-1044525330),f=R(f,u,o,c,g[v+4],7,-176418897),c=R(c,f,u,o,g[v+5],12,1200080426),o=R(o,c,f,u,g[v+6],17,-1473231341),u=R(u,o,c,f,g[v+7],22,-45705983),f=R(f,u,o,c,g[v+8],7,1770035416),c=R(c,f,u,o,g[v+9],12,-1958414417),o=R(o,c,f,u,g[v+10],17,-42063),u=R(u,o,c,f,g[v+11],22,-1990404162),f=R(f,u,o,c,g[v+12],7,1804603682),c=R(c,f,u,o,g[v+13],12,-40341101),o=R(o,c,f,u,g[v+14],17,-1502002290),u=R(u,o,c,f,g[v+15],22,1236535329),f=z(f,u,o,c,g[v+1],5,-165796510),c=z(c,f,u,o,g[v+6],9,-1069501632),o=z(o,c,f,u,g[v+11],14,643717713),u=z(u,o,c,f,g[v],20,-373897302),f=z(f,u,o,c,g[v+5],5,-701558691),c=z(c,f,u,o,g[v+10],9,38016083),o=z(o,c,f,u,g[v+15],14,-660478335),u=z(u,o,c,f,g[v+4],20,-405537848),f=z(f,u,o,c,g[v+9],5,568446438),c=z(c,f,u,o,g[v+14],9,-1019803690),o=z(o,c,f,u,g[v+3],14,-187363961),u=z(u,o,c,f,g[v+8],20,1163531501),f=z(f,u,o,c,g[v+13],5,-1444681467),c=z(c,f,u,o,g[v+2],9,-51403784),o=z(o,c,f,u,g[v+7],14,1735328473),u=z(u,o,c,f,g[v+12],20,-1926607734),f=N(f,u,o,c,g[v+5],4,-378558),c=N(c,f,u,o,g[v+8],11,-2022574463),o=N(o,c,f,u,g[v+11],16,1839030562),u=N(u,o,c,f,g[v+14],23,-35309556),f=N(f,u,o,c,g[v+1],4,-1530992060),c=N(c,f,u,o,g[v+4],11,1272893353),o=N(o,c,f,u,g[v+7],16,-155497632),u=N(u,o,c,f,g[v+10],23,-1094730640),f=N(f,u,o,c,g[v+13],4,681279174),c=N(c,f,u,o,g[v],11,-358537222),o=N(o,c,f,u,g[v+3],16,-722521979),u=N(u,o,c,f,g[v+6],23,76029189),f=N(f,u,o,c,g[v+9],4,-640364487),c=N(c,f,u,o,g[v+12],11,-421815835),o=N(o,c,f,u,g[v+15],16,530742520),u=N(u,o,c,f,g[v+2],23,-995338651),f=L(f,u,o,c,g[v],6,-198630844),c=L(c,f,u,o,g[v+7],10,1126891415),o=L(o,c,f,u,g[v+14],15,-1416354905),u=L(u,o,c,f,g[v+5],21,-57434055),f=L(f,u,o,c,g[v+12],6,1700485571),c=L(c,f,u,o,g[v+3],10,-1894986606),o=L(o,c,f,u,g[v+10],15,-1051523),u=L(u,o,c,f,g[v+1],21,-2054922799),f=L(f,u,o,c,g[v+8],6,1873313359),c=L(c,f,u,o,g[v+15],10,-30611744),o=L(o,c,f,u,g[v+6],15,-1560198380),u=L(u,o,c,f,g[v+13],21,1309151649),f=L(f,u,o,c,g[v+4],6,-145523070),c=L(c,f,u,o,g[v+11],10,-1120210379),o=L(o,c,f,u,g[v+2],15,718787259),u=L(u,o,c,f,g[v+9],21,-343485551),f=y(f,M),u=y(u,I),o=y(o,A),c=y(c,x);return[f,u,o,c]}function yn(g){var D,v="",M=g.length*32;for(D=0;D<M;D+=8)v+=String.fromCharCode(g[D>>5]>>>D%32&255);return v}function wn(g){var D,v=[];for(v[(g.length>>2)-1]=void 0,D=0;D<v.length;D+=1)v[D]=0;var M=g.length*8;for(D=0;D<M;D+=8)v[D>>5]|=(g.charCodeAt(D/8)&255)<<D%32;return v}function En(g){return yn(gn(wn(g),g.length*8))}function Rn(g,D){var v,M=wn(g),I=[],A=[],x;for(I[15]=A[15]=void 0,M.length>16&&(M=gn(M,g.length*8)),v=0;v<16;v+=1)I[v]=M[v]^909522486,A[v]=M[v]^1549556828;return x=gn(I.concat(wn(D)),512+D.length*8),yn(gn(A.concat(x),640))}function tn(g){var D="0123456789abcdef",v="",M,I;for(I=0;I<g.length;I+=1)M=g.charCodeAt(I),v+=D.charAt(M>>>4&15)+D.charAt(M&15);return v}function dn(g){return unescape(encodeURIComponent(g))}function $n(g){return En(dn(g))}function Sn(g){return tn($n(g))}function qn(g,D){return Rn(dn(g),dn(D))}function ne(g,D){return tn(qn(g,D))}function Yn(g,D,v){return D?v?qn(D,g):ne(D,g):v?$n(g):Sn(g)}typeof define=="function"&&define.amd?define(function(){return Yn}):typeof Ue=="object"&&Ue.exports?Ue.exports=Yn:d.md5=Yn})(Wt)});var Jt=Fn((bs,Xt)=>{"use strict";q();function is(d,y){return Object.prototype.hasOwnProperty.call(d,y)}Xt.exports=function(d,y,E,p){y=y||"&",E=E||"=";var R={};if(typeof d!="string"||d.length===0)return R;var z=/\+/g;d=d.split(y);var N=1e3;p&&typeof p.maxKeys=="number"&&(N=p.maxKeys);var L=d.length;N>0&&L>N&&(L=N);for(var gn=0;gn<L;++gn){var yn=d[gn].replace(z,"%20"),wn=yn.indexOf(E),En,Rn,tn,dn;wn>=0?(En=yn.substr(0,wn),Rn=yn.substr(wn+1)):(En=yn,Rn=""),tn=decodeURIComponent(En),dn=decodeURIComponent(Rn),is(R,tn)?Array.isArray(R[tn])?R[tn].push(dn):R[tn]=[R[tn],dn]:R[tn]=dn}return R}});var Zt=Fn((xs,Qt)=>{"use strict";q();var ve=function(d){switch(typeof d){case"string":return d;case"boolean":return d?"true":"false";case"number":return isFinite(d)?d:"";default:return""}};Qt.exports=function(d,y,E,p){return y=y||"&",E=E||"=",d===null&&(d=void 0),typeof d=="object"?Object.keys(d).map(function(R){var z=encodeURIComponent(ve(R))+E;return Array.isArray(d[R])?d[R].map(function(N){return z+encodeURIComponent(ve(N))}).join(y):z+encodeURIComponent(ve(d[R]))}).join(y):p?encodeURIComponent(ve(p))+E+encodeURIComponent(ve(d)):""}});var jt=Fn(me=>{"use strict";q();me.decode=me.parse=Jt();me.encode=me.stringify=Zt()});var rr=Fn((Ss,tr)=>{q();var ss=Gt(),as=jt(),os=/^[0-9a-f]{32}$/;function fs(d){var y={},E={protocol:1,format:1};for(var p in d)E[p]||(y[p]=d[p]);return y}function kt(d,y){if(d)return typeof d.protocol=="boolean"?d.protocol:d.protocol==="http"?!1:d.protocol==="https"?!0:void 0}function nr(d){return d=typeof d=="string"?d.trim().toLowerCase():"unspecified",d.match(os)?d:ss(d)}function er(d){var y=as.stringify(fs(d));return y&&"?"+y||""}var Rs=tr.exports={url:function(d,y,E){var p="//www.gravatar.com/avatar/";y&&y.cdn?(p=y.cdn+"/avatar/",delete y.cdn):(y&&y.protocol&&(E=kt(y)),typeof E<"u"&&(p=E?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var R=er(y);return p+nr(d)+R},profile_url:function(d,y,E){var p=y!=null&&y.format!=null?String(y.format):"json",R;if(y&&y.cdn)R=y.cdn+"/",delete y.cdn;else{y&&y.protocol&&(E=kt(y));var R=E&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var z=er(y);return R+nr(d)+"."+p+z}}});var sr=Fn((Ms,ir)=>{q();ir.exports=rr()});var ar=Fn(jn=>{q();(function(y,E){typeof jn=="object"&&jn&&typeof jn.nodeName!="string"?E(jn):typeof define=="function"&&define.amd?define(["exports"],E):(y.Mustache={},E(y.Mustache))})(jn,function(y){var E=Object.prototype.toString,p=Array.isArray||function(f){return E.call(f)==="[object Array]"};function R(x){return typeof x=="function"}function z(x){return p(x)?"array":typeof x}function N(x){return x.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function L(x,f){return x!=null&&typeof x=="object"&&f in x}var gn=RegExp.prototype.test;function yn(x,f){return gn.call(x,f)}var wn=/\S/;function En(x){return!yn(wn,x)}var Rn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function tn(x){return String(x).replace(/[&<>"'`=\/]/g,function(u){return Rn[u]})}var dn=/\s*/,$n=/\s+/,Sn=/\s*=/,qn=/\s*\}/,ne=/#|\^|\/|>|\{|&|=|!/;function Yn(x,f){if(!x)return[];var u=[],o=[],c=[],B=!1,F=!1;function T(){if(B&&!F)for(;c.length;)delete o[c.pop()];else c=[];B=!1,F=!1}var Q,K,bn;function Tn(V){if(typeof V=="string"&&(V=V.split($n,2)),!p(V)||V.length!==2)throw new Error("Invalid tags: "+V);Q=new RegExp(N(V[0])+"\\s*"),K=new RegExp("\\s*"+N(V[1])),bn=new RegExp("\\s*"+N("}"+V[1]))}Tn(f||y.tags);for(var G=new v(x),rn,X,nn,Wn,Gn,Mn;!G.eos();){if(rn=G.pos,nn=G.scanUntil(Q),nn)for(var On=0,Be=nn.length;On<Be;++On)Wn=nn.charAt(On),En(Wn)?c.push(o.length):F=!0,o.push(["text",Wn,rn,rn+1]),rn+=1,Wn===`
`&&T();if(!G.scan(Q))break;if(B=!0,X=G.scan(ne)||"name",G.scan(dn),X==="="?(nn=G.scanUntil(Sn),G.scan(Sn),G.scanUntil(K)):X==="{"?(nn=G.scanUntil(bn),G.scan(qn),G.scanUntil(K),X="&"):nn=G.scanUntil(K),!G.scan(K))throw new Error("Unclosed tag at "+G.pos);if(Gn=[X,nn,rn,G.pos],o.push(Gn),X==="#"||X==="^")u.push(Gn);else if(X==="/"){if(Mn=u.pop(),!Mn)throw new Error('Unopened section "'+nn+'" at '+rn);if(Mn[1]!==nn)throw new Error('Unclosed section "'+Mn[1]+'" at '+rn)}else X==="name"||X==="{"||X==="&"?F=!0:X==="="&&Tn(nn)}if(Mn=u.pop(),Mn)throw new Error('Unclosed section "'+Mn[1]+'" at '+G.pos);return D(g(o))}function g(x){for(var f=[],u,o,c=0,B=x.length;c<B;++c)u=x[c],u&&(u[0]==="text"&&o&&o[0]==="text"?(o[1]+=u[1],o[3]=u[3]):(f.push(u),o=u));return f}function D(x){for(var f=[],u=f,o=[],c,B,F=0,T=x.length;F<T;++F)switch(c=x[F],c[0]){case"#":case"^":u.push(c),o.push(c),u=c[4]=[];break;case"/":B=o.pop(),B[5]=c[2],u=o.length>0?o[o.length-1][4]:f;break;default:u.push(c)}return f}function v(x){this.string=x,this.tail=x,this.pos=0}v.prototype.eos=function(){return this.tail===""},v.prototype.scan=function(f){var u=this.tail.match(f);if(!u||u.index!==0)return"";var o=u[0];return this.tail=this.tail.substring(o.length),this.pos+=o.length,o},v.prototype.scanUntil=function(f){var u=this.tail.search(f),o;switch(u){case-1:o=this.tail,this.tail="";break;case 0:o="";break;default:o=this.tail.substring(0,u),this.tail=this.tail.substring(u)}return this.pos+=o.length,o};function M(x,f){this.view=x,this.cache={".":this.view},this.parent=f}M.prototype.push=function(f){return new M(f,this)},M.prototype.lookup=function(f){var u=this.cache,o;if(u.hasOwnProperty(f))o=u[f];else{for(var c=this,B,F,T=!1;c;){if(f.indexOf(".")>0)for(o=c.view,B=f.split("."),F=0;o!=null&&F<B.length;)F===B.length-1&&(T=L(o,B[F])),o=o[B[F++]];else o=c.view[f],T=L(c.view,f);if(T)break;c=c.parent}u[f]=o}return R(o)&&(o=o.call(this.view)),o};function I(){this.cache={}}I.prototype.clearCache=function(){this.cache={}},I.prototype.parse=function(f,u){var o=this.cache,c=o[f];return c==null&&(c=o[f]=Yn(f,u)),c},I.prototype.render=function(f,u,o){var c=this.parse(f),B=u instanceof M?u:new M(u);return this.renderTokens(c,B,o,f)},I.prototype.renderTokens=function(f,u,o,c){for(var B="",F,T,Q,K=0,bn=f.length;K<bn;++K)Q=void 0,F=f[K],T=F[0],T==="#"?Q=this.renderSection(F,u,o,c):T==="^"?Q=this.renderInverted(F,u,o,c):T===">"?Q=this.renderPartial(F,u,o,c):T==="&"?Q=this.unescapedValue(F,u):T==="name"?Q=this.escapedValue(F,u):T==="text"&&(Q=this.rawValue(F)),Q!==void 0&&(B+=Q);return B},I.prototype.renderSection=function(f,u,o,c){var B=this,F="",T=u.lookup(f[1]);function Q(Tn){return B.render(Tn,u,o)}if(T){if(p(T))for(var K=0,bn=T.length;K<bn;++K)F+=this.renderTokens(f[4],u.push(T[K]),o,c);else if(typeof T=="object"||typeof T=="string"||typeof T=="number")F+=this.renderTokens(f[4],u.push(T),o,c);else if(R(T)){if(typeof c!="string")throw new Error("Cannot use higher-order sections without the original template");T=T.call(u.view,c.slice(f[3],f[5]),Q),T!=null&&(F+=T)}else F+=this.renderTokens(f[4],u,o,c);return F}},I.prototype.renderInverted=function(f,u,o,c){var B=u.lookup(f[1]);if(!B||p(B)&&B.length===0)return this.renderTokens(f[4],u,o,c)},I.prototype.renderPartial=function(f,u,o){if(o){var c=R(o)?o(f[1]):o[f[1]];if(c!=null)return this.renderTokens(this.parse(c),u,o,c)}},I.prototype.unescapedValue=function(f,u){var o=u.lookup(f[1]);if(o!=null)return o},I.prototype.escapedValue=function(f,u){var o=u.lookup(f[1]);if(o!=null)return y.escape(o)},I.prototype.rawValue=function(f){return f[1]},y.name="mustache.js",y.version="2.3.2",y.tags=["{{","}}"];var A=new I;return y.clearCache=function(){return A.clearCache()},y.parse=function(f,u){return A.parse(f,u)},y.render=function(f,u,o){if(typeof f!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+z(f)+'" was given as the first argument for mustache#render(template, view, partials)');return A.render(f,u,o)},y.to_html=function(f,u,o,c){var B=y.render(f,u,o);if(R(c))c(B);else return B},y.escape=tn,y.Scanner=v,y.Context=M,y.Writer=I,y})});var fr=Fn((Fs,or)=>{q();var tt=(Vt(),ts(Kt)),kn=$t(),us=sr(),ls=ar(),ds=new Date,ps=ds.getFullYear();function An(d){switch(d.substr(0,2)){case"01":return"Enero ";case"02":return"Febrero ";case"03":return"Marzo ";case"04":return"Abril ";case"05":return"Mayo ";case"06":return"Junio ";case"07":return"Julio ";case"08":return"Agosto ";case"09":return"Septiembre ";case"10":return"Octubre ";case"11":return"Noviembre ";case"12":return"Diciembre "}}function cs(d){d.basics.capitalName=d.basics.name.toUpperCase(),d.basics&&d.basics.email&&(d.basics.gravatar=us.url(d.basics.email,{s:"200",r:"pg",d:"mm"})),(d.basics.picture||d.basics.gravatar)&&(d.photo=d.basics.picture?d.basics.picture:d.basics.gravatar),kn.each(d.basics.profiles,function(p){switch(p.network.toLowerCase()){case"google-plus":case"googleplus":p.iconClass="fa fa-google-plus";break;case"flickr":case"flicker":p.iconClass="fa fa-flickr";break;case"dribbble":case"dribble":p.iconClass="fa fa-dribbble";break;case"codepen":p.iconClass="fa fa-codepen";break;case"soundcloud":p.iconClass="fa fa-soundcloud";break;case"reddit":p.iconClass="fa fa-reddit";break;case"tumblr":case"tumbler":p.iconClass="fa fa-tumblr";break;case"stack-overflow":case"stackoverflow":p.iconClass="fa fa-stack-overflow";break;case"blog":case"rss":p.iconClass="fa fa-rss";break;case"gitlab":p.iconClass="fa fa-gitlab";break;case"keybase":p.iconClass="fa fa-key";break;default:p.iconClass="fa fa-"+p.network.toLowerCase()}p.url?p.text=p.url:p.text=p.network+": "+p.username}),d.work&&d.work.length&&(d.workBool=!0,kn.each(d.work,function(p){p.startDate&&(p.startDateYear=(p.startDate||"").substr(3,4),p.startDateMonth=An(p.startDate||"")),p.endDate?(p.endDateYear=(p.endDate||"").substr(3,4),p.endDateMonth=An(p.endDate||"")):p.endDateYear="Ahora",p.highlights&&p.highlights[0]&&p.highlights[0]!=""&&(p.boolHighlights=!0)})),d.volunteer&&d.volunteer.length&&(d.volunteerBool=!0,kn.each(d.volunteer,function(p){p.startDate&&(p.startDateYear=(p.startDate||"").substr(3,4),p.startDateMonth=An(p.startDate||"")),p.endDate?(p.endDateYear=(p.endDate||"").substr(3,4),p.endDateMonth=An(p.endDate||"")):p.endDateYear="Ahora",p.highlights&&p.highlights[0]&&p.highlights[0]!=""&&(p.boolHighlights=!0)})),d.education&&d.education.length&&d.education[0].institution&&(d.educationBool=!0,kn.each(d.education,function(p){!p.area||!p.studyType?p.educationDetail=(p.area==null?"":p.area)+(p.studyType==null?"":p.studyType):p.educationDetail=p.area+", "+p.studyType,p.startDate?(p.startDateYear=p.startDate.substr(3,4),console.log(p.startDateYear),p.startDateMonth=An(p.startDate||""),console.log(p.startDateMonth)):p.endDateMonth="",p.endDate?(p.endDateYear=p.endDate.substr(3,4),p.endDateMonth=An(p.endDate||""),p.endDateYear>ps&&(p.endDateYear+=" (esperado)")):(p.endDateYear="Ahora",p.endDateMonth=""),p.courses&&p.courses[0]&&p.courses[0]!=""&&(p.educationCourses=!0)})),d.awards&&d.awards.length&&d.awards[0].title&&(d.awardsBool=!0,kn.each(d.awards,function(p){p.year=(p.date||"").substr(0,4),p.day=(p.date||"").substr(8,2),p.month=An(p.date||"")})),d.publications&&d.publications.length&&d.publications[0].name&&(d.publicationsBool=!0,kn.each(d.publications,function(p){p.year=(p.releaseDate||"").substr(0,4),p.day=(p.releaseDate||"").substr(8,2),p.month=An(p.releaseDate||"")})),d.skills&&d.skills.length&&d.skills[0].name&&(d.skillsBool=!0),d.interests&&d.interests.length&&d.interests[0].name&&(d.interestsBool=!0),d.languages&&d.languages.length&&d.languages[0].language&&(d.languagesBool=!0),d.references&&d.references.length&&d.references[0].name&&(d.referencesBool=!0),d.css=tt.readFileSync("//style.css","utf-8"),d.printcss=tt.readFileSync("//print.css","utf-8");var y=tt.readFileSync("//resume.template","utf8"),E=ls.render(y,d);return E}or.exports={render:cs}});q();var Vn=es(fr(),1),ur=Vn.default??Vn,Ps=ur.render??Vn.render,Ns=ur.pdfRenderOptions??Vn.pdfRenderOptions;export{Ns as pdfRenderOptions,Ps as render};
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
