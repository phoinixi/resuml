var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Xi=Object.create;var Ie=Object.defineProperty;var Gi=Object.getOwnPropertyDescriptor;var Ji=Object.getOwnPropertyNames;var Qi=Object.getPrototypeOf,Zi=Object.prototype.hasOwnProperty;var Mt=(l,y)=>()=>(l&&(y=l(l=0)),y);var kn=(l,y)=>()=>(y||l((y={exports:{}}).exports,y),y.exports),na=(l,y)=>{for(var D in y)Ie(l,D,{get:y[D],enumerable:!0})},At=(l,y,D,d)=>{if(y&&typeof y=="object"||typeof y=="function")for(let E of Ji(y))!Zi.call(l,E)&&E!==D&&Ie(l,E,{get:()=>y[E],enumerable:!(d=Gi(y,E))||d.enumerable});return l};var ea=(l,y,D)=>(D=l!=null?Xi(Qi(l)):{},At(y||!l||!l.__esModule?Ie(D,"default",{value:l,enumerable:!0}):D,l)),ta=l=>At(Ie({},"__esModule",{value:!0}),l);var q=Mt(()=>{});var Bt={};na(Bt,{createReadStream:()=>Wt,createWriteStream:()=>Ot,default:()=>ra,existsSync:()=>Lt,lstatSync:()=>Ut,mkdirSync:()=>Nt,readFileSync:()=>kt,readdirSync:()=>Pt,rmdirSync:()=>jt,statSync:()=>et,unlinkSync:()=>qt,writeFileSync:()=>Ft});function nt(l){return String(l).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function zt(l){var y=nt(l);if(Me[y]!==void 0)return Me[y];for(var D=Object.keys(Me),d=0;d<D.length;d++)if(y.endsWith("/"+D[d])||y===D[d])return Me[D[d]]}function Ze(l){var y=nt(l);if((y===""||y===".")&&Qn["."]!==void 0)return Qn["."];if(Qn[y]!==void 0)return Qn[y];for(var D=Object.keys(Qn),d=0;d<D.length;d++)if(y.endsWith("/"+D[d])||y===D[d])return Qn[D[d]]}var Me,Qn,kt,Pt,Lt,Ft,Nt,et,Ut,qt,jt,Wt,Ot,ra,Kt=Mt(()=>{"use strict";q();Me={"package.json":`{
  "name": "jsonresume-theme-lukemeads",
  "version": "1.0.0",
  "description": "A JSON Resume theme built with bootstrap",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "Luke Meads",
  "license": "MIT",
  "dependencies": {
    "gravatar": "^1.0.6",
    "lodash": "^2.4.1",
    "mustache": "^2.2.1"
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
`,"public/index.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Resume of Luke Meads</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"><\/script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"><\/script>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/04390984cc.js" crossorigin="anonymous"><\/script>
    <style type="text/css">
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800);
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
  display: inline-block;
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

.resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 1px solid #1f5297;
  position: relative;
  margin-left: 30px;
}

.resume-item::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  left: -6px;
  top: 0px;
  background: #334960;
  /* border: 2px solid #1f5297; */
}

h5 {
  font-size: 16px;
  background: #e4edf9;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.section {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  border-bottom: #1f5297 1px solid;
  margin-right: -15px;
  margin-left: -15px;
}

.skills {
  list-style-type: none;
}

.skills li {
  display: flex;
}

.skills-container {
  display: flex;
  justify-content: space-between;
}

.skills-col {
  flex: 50%;
}

.header h1 {
  color: #334960;
}

h2 {
  color: #334960;
  margin-left: -20px;
  margin-bottom: 10px;
}

.contact {
  color: #334960;
}

.hobbies i {
  font-size: 40px;
  color: #334960;
  margin: auto;
}

.hobbies {
  display: flex;
  flex-direction: row;
}

.hobbies span {
  display: inline-flex;
  flex-direction: column;
  padding: 10px;
}

.contact ul {
  width: 270px;
}

.rating-1 span:nth-child(-n+1) {
  color: orange;
}

.rating-2 span:nth-child(-n+2) {
  color: orange;
}

.rating-3 span:nth-child(-n+3) {
  color: orange;
}

.rating-4 span:nth-child(-n+4) {
  color: orange;
}

.rating-5 span:nth-child(-n+5) {
  color: orange;
}
    </style>
    <style type="text/css" media="print">
    body {
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

    </style>
  </head>
  <body>
    <div class="container">

      <!-- HEADER -->
      <div class="header section">

         <div class="col-8">
            <h1>Luke Meads</h1>
          </div>

          <!-- CONTACT -->
          <div class="col contact">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fa fa-calendar-alt fa-fw"></i>
                3rd March, 1995 (age 25)
              </li>
              <li class="list-group-item">
                <i class="fa fa-phone-alt fa-fw"></i>
                (+64) 22 025 9790
              </li>
              <li class="list-group-item">
                <i class="fa fa-envelope fa-fw"></i>
                meads.lukey@gmail.com
              </li>
              <li class="list-group-item">
                <i class="fa fa-github fa-fw"></i>
                lukemeads
              </li>
            </ul>
          </div>
      </div>

      <!-- PROFILE -->
      <div class="section">
        <h2><i class="fa fa-user ico"></i> Profile</h2>
        <p>Creative and hard-working full stack developer, with a passion for creating quality software. Knowledgable in a wide variety of programming languages and frameworks, as well as the principles and techniques of software development. Proven ability to learn and adapt to new technologies quickly, and to effectively work within a team.</p>
      </div>

      <!-- SKILLS -->
      <div class="section">
        <h2><i class="fa fa-tasks ico"></i> Skills</h2>

        <div class="skills-container">

          <div class="skills-col">

            <div class="skills-group">
              <h5>Programming Languages</h5>
              <ul class="skills">
                <li>
                  <span style="width: 60%">C#</span>
                  <div class="rating-5">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">HTML/CSS</span>
                  <div class="rating-5">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">Javascript/Typescript</span>
                  <div class="rating-5">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">SQL</span>
                  <div class="rating-4">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">Python</span>
                  <div class="rating-3">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
              </ul>
            </div>
          

            <div class="skills-group">
              <h5>Web</h5>
              <ul class="skills">
                <li>
                  <span style="width: 60%">React</span>
                  <div class="rating-5">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">jQuery</span>
                  <div class="rating-5">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">Webpack and Babel</span>
                  <div class="rating-3">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">Google Chrome DevTools</span>
                  <div class="rating-4">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
              </ul>
            </div>
          
          </div>

          <div class="skills-col">

            <div class="skills-group">
              <h5>Frameworks</h5>
              <ul class="skills">
                <li>
                  <span style="width: 60%">Microsoft .NET</span>
                  <div class="rating-5">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">ASP.NET</span>
                  <div class="rating-5">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">Entity Framework</span>
                  <div class="rating-4">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">Django</span>
                  <div class="rating-2">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
              </ul>
            </div>
            

            <div class="skills-group">
              <h5>Cloud &amp; DevOps</h5>
              <ul class="skills">
                <li>
                  <span style="width: 60%">Amazon Web Services</span>
                  <div class="rating-4">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">Azure</span>
                  <div class="rating-4">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">Azure DevOps</span>
                  <div class="rating-5">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">Linux</span>
                  <div class="rating-3">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">Windows Server</span>
                  <div class="rating-5">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span style="width: 60%">Docker</span>
                  <div class="rating-2">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>

        </div>
      </div>

      <!-- HOBBIES -->
      <div class="section">
        <h2><i class="fa fa-heart ico"></i> Hobbies</h2>
        <div class="hobbies">
          <span>
            <i class="fas fa-chart-line ico"></i>
            <span>Stock Market</span>
          </span>
          <span>
            <i class="fas fa-snowboarding ico"></i>
            <span>Snowboarding</span>
          </span>
          <span>
            <i class="fas fa-water ico"></i>
            <span>Surfing</span>
          </span>
          <span>
            <i class="fas fa-drum ico"></i>
            <span>Drums</span>
          </span>
        </div>
      </div>

      <!-- WORK EXPERIENCE -->
      <div class="section">
        <h2><i class= "fa fa-suitcase ico"></i> Work Experience</h2>

        <div class="resume-item">
          <h4>Software Engineer</h4>
          <h5>Blujay Solutions</h5>
          <span><em>September 2018 \u2013 Present</em></span>
          <p>Blujay Solutions is a global leader in logistics and transportation software and services. I am a member of a development team based in Christchurch working on the MobileSTAR product, which focuses on the last mile delivery process.  MobileSTAR is an extremely high transaction system with a strong emphasis on performance and code quality.</p>
          <ul>
            <li>Focus is on the large server-side aspects powering the mobile application</li>
            <li>Lead development on a complex large scale React single page application</li>
            <li>Lead development of writing and maintaining integration tests</li>
            <li>Lead development and analysis of regular security scans and penetration testing</li>
            <li>Contribute to wider application architecture</li>
            <li>Manage Azure DevOps infrastructure and build pipelines</li>
            <li>Frequently work with cloud services team to assist with deployment and monitoring</li>
            <li>Frequent and careful code review</li>
            <li>Mentor junior developers and assist QA team</li>
            <li>Assist with recruitment and interview process</li>
            <li>Member of on-call roster for priority 1 incident\u2019s as primary technical escalation point</li>
            <li>Assist with recruitment process and interviews for new developers</li>
          </ul>
        </div>


        <div class="resume-item">
          <h4>Software Engineer (Contractor)</h4>
          <h5>Aportio Technologies</h5>
          <span><em>September 2018 \u2013 January 2020</em></span>
          <p>Aportio Technologies specialises in IT and contact center service automation, using Artificial Intelligence to help IT and customer support teams radically improve their service experience. I was employed through connections at Computer Concepts Ltd to work on a project to integrate the Aportio Virtual Assistant (AVA) product with Microsoft Flow.</p>
          <ul>
            <li>Open source technology stack; Linux, Docker, MySQL/Postgres, Python 3, Django, AWS, Google NLP</li>
            <li>10 hours per week remotely on project</li>
            <li>Regular demonstrations and meetings with CEO and Development Manager</li>
            <li>Invited to participate in regular sprints with Development Team following the project\u2019s completion</li>
          </ul>
        </div>


        <div class="resume-item">
          <h4>Technical Analyst</h4>
          <h5>Computer Concepts Ltd</h5>
          <span><em>April 2018 \u2013 September 2018</em></span>
          <p>I was promoted to Technical Analyst, to lead the internal service desk. In this new role I was focused on supporting the internal users, and had more time to work on automating our internal processes, as well as assisting with our internal development projects.</p>
          <ul>
            <li>Level 3 engineering support for some internal systems</li>
            <li>Design and implement new user onboarding automation using Microsoft Flow, Azure Functions, Sharepoint and Powershell. This reduced user creation time from hours to a few minutes, with the entire process running automatically</li>
            <li>Extend the companies internal birthday application to include also work anniversaries. This involved extending an ASP.NET MVC application, and a SQL Server stored procedure to meet the new requirements</li>
          </ul>
        </div>


        <div class="resume-item">
          <h4>Service Desk Engineer</h4>
          <h5>Computer Concepts Ltd</h5>
          <span><em>April 2017 \u2013 April 2018</em></span>
          <p>Computer Concepts Ltd is an IT services provider based in New Zealand. I worked on the 24/7 managed service desk on a rotating roster based in Christchurch. The job involved managing emails and phone calls from clients to help resolve a wide variety of IT related issues.</p>
          <ul>
            <li>Level 1 and 2 support by email and phone</li>
            <li>Support Microsoft technologies; O365, Azure, Active Directory, Sharepoint, and Exchange</li>
            <li>Support virtualisation technologies; VMWare VDI, Citrix, RDS</li>
            <li>Configure and support servers (Microsoft Server 2016 and below)</li>
            <li>Desktop Support; Windows 10, Microsoft Office Suite, Intune</li>
            <li>Create and maintain Powershell scripts to automate workflow</li>
          </ul>
        </div>


        <div class="resume-item">
          <h4>Software Engineer</h4>
          <h5>Zeal Software Solutions</h5>
          <span><em>December 2016 \u2013 February 2017</em></span>
          <p>Worked on the development of a mobile application for the food industry. It was written in C# and utilized Microsoft's Xamarin framework.</p>
          <ul>
            <li>Exposure to well architected solution with multiple components; two mobile applications built with Xamarin, an ASP.NET Web API, and front-end website</li>
            <li>Contribute several UI screens to the mobile applications</li>
          </ul>
        </div>


        <div class="resume-item">
          <h4>Storeman</h4>
          <h5>New World Supermarket</h5>
          <span><em>April 2017 \u2013 April 2018</em></span>
          <p>Part time role (average 20 hours per week)</p>
          <ul>
            <li>Promotion to Storeman to manage the load/unload of delivery trucks</li>
            <li>Obtained forklift license</li>
            <li>Experience on both standard forklift and stand up forklift</li>
          </ul>
        </div>


        <div class="resume-item">
          <h4>Liquor&#x2F;Grocery Department Assistant</h4>
          <h5>New World Supermarket</h5>
          <span><em>April 2017 \u2013 April 2018</em></span>
          <p>Part time role (average 20 hours per week)</p>
          <ul>
            <li>Restocking shelves in the liquor and grocery departments</li>
          </ul>
        </div>

      </div>

      <!-- VOLUNTEER -->
      <div class="section">
        <h2><i class= "fa fa-group ico"></i> Volunteer Work Experience</h2>

        <div class="resume-item">
          <h4>Tutor</h4>
          <h5>Golden Key Tutoring Programme</h5>
          <span><em>January 2016 \u2013 December 2016</em></span>
          <p>Provided email tutoring support to UC students studying Computer Science.</p>
        </div>


        <div class="resume-item">
          <h4>IT Support</h4>
          <h5>Lyttelton Port Company Ltd</h5>
          <span><em>November 2011 \u2013 November 2011</em></span>
          <p>Assisted in office relocation, which included furniture and computer set-up</p>
        </div>

      </div>

      <!-- EDUCATION -->
      <div class="section">
        <h2><i class="fa fa-university ico"></i> Education</h2>

        <div>
          <h4>University of Canterbury</h4>
          <h5>Bachelor of Science Double Major</h5>
          <span><em>2013 \u2013 2017</em></span>
          <p>Computer Science and Psychology</p>
        </div>
        

        <div>
          <h4>Microsoft Student Accelerator</h4>
          <h5>Software Engineering</h5>
          <span><em>2016 \u2013 2016</em></span>
          <p>A year long programme during university teaching real-life software skills with a placement at a company at the end.</p>
        </div>
        
      </div>

      <!-- CERTIFICATIONS -->
      <div class="section">
        <h2><i class="fa fa-certificate ico"></i> Certifications</h2>

        <div>
          <h4>Amazon Web Services</h4>
          <h5>AWS Cerified Developer - Associate</h5>
          <span><em>2018</em></span>
          <p></p>
        </div>
        

        <div>
          <h4>Microsoft</h4>
          <h5>Azure Developer Associate</h5>
          <span><em></em></span>
          <p>Currently working towards the exam AZ-204: Developing Solutions for Microsoft Azure (beta)</p>
        </div>
        
      </div>

    </div>

  </body>
</html>
`,"resume.template":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Resume of {{basics.name}}</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"><\/script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"><\/script>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/04390984cc.js" crossorigin="anonymous"><\/script>
    <style type="text/css">
    {{{css}}}
    </style>
    <style type="text/css" media="print">
    {{{printcss}}}
    </style>
  </head>
  <body>
    <div class="container">

      <!-- HEADER -->
      <div class="header section">

         <div class="col-8">
            <h1>{{basics.name}}</h1>
          </div>

          <!-- CONTACT -->
          <div class="col contact">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fa fa-calendar-alt fa-fw"></i>
                3rd March, 1995 (age 25)
              </li>
              <li class="list-group-item">
                <i class="fa fa-phone-alt fa-fw"></i>
                {{basics.phone}}
              </li>
              <li class="list-group-item">
                <i class="fa fa-envelope fa-fw"></i>
                {{basics.email}}
              </li>
              <li class="list-group-item">
                {{#basics.profiles}}
                <i class="{{iconClass}} fa-fw"></i>
                {{username}}
                {{/basics.profiles}}
              </li>
            </ul>
          </div>
      </div>

      <!-- PROFILE -->
      <div class="section">
        {{#basics.summary}}
        <h2><i class="fa fa-user ico"></i> Profile</h2>
        <p>{{{basics.summary}}}</p>
        {{/basics.summary}}
      </div>

      <!-- SKILLS -->
      <div class="section">
        <h2><i class="fa fa-tasks ico"></i> Skills</h2>

        <div class="skills-container">

          <div class="skills-col">
          {{#skillsLeft}}

            <div class="skills-group">
              <h5>{{name}}</h5>
              <ul class="skills">
                {{#ratings}}
                <li>
                  <span style="width: 60%">{{{keyword}}}</span>
                  <div class="rating-{{level}}">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                {{/ratings}}
              </ul>
            </div>
          
          {{/skillsLeft}}
          </div>

          <div class="skills-col">
          {{#skillsRight}}

            <div class="skills-group">
              <h5>{{name}}</h5>
              <ul class="skills">
                {{#ratings}}
                <li>
                  <span style="width: 60%">{{{keyword}}}</span>
                  <div class="rating-{{level}}">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                {{/ratings}}
              </ul>
            </div>
            
          {{/skillsRight}}
          </div>

        </div>
      </div>

      <!-- HOBBIES -->
      <div class="section">
        <h2><i class="fa fa-heart ico"></i> Hobbies</h2>
        <div class="hobbies">
          {{#interests}}
          {{#keywords}}
          <span>
            <i class="fas fa-{{.}} ico"></i>
            <span>{{name}}</span>
          </span>
          {{/keywords}}
          {{/interests}}
        </div>
      </div>

      <!-- WORK EXPERIENCE -->
      <div class="section">
        <h2><i class= "fa fa-suitcase ico"></i> Work Experience</h2>
        {{#work}}

        <div class="resume-item">
          <h4>{{position}}</h4>
          <h5>{{company}}</h5>
          <span><em>{{startDateMonth}}{{startDateYear}} \u2013 {{endDateMonth}}{{endDateYear}}</em></span>
          <p>{{{summary}}}</p>
          <ul>
            {{#highlights}}
            <li>{{{.}}}</li>
            {{/highlights}}
          </ul>
        </div>

        {{/work}}
      </div>

      <!-- VOLUNTEER -->
      <div class="section">
        <h2><i class= "fa fa-group ico"></i> Volunteer Work Experience</h2>
        {{#volunteer}}

        <div class="resume-item">
          <h4>{{position}}</h4>
          <h5>{{organization}}</h5>
          <span><em>{{startDateMonth}}{{startDateYear}} \u2013 {{endDateMonth}}{{endDateYear}}</em></span>
          <p>{{{summary}}}</p>
        </div>

        {{/volunteer}}
      </div>

      <!-- EDUCATION -->
      <div class="section">
        <h2><i class="fa fa-university ico"></i> Education</h2>
        {{#education}}

        <div>
          <h4>{{institution}}</h4>
          <h5>{{studyType}}</h5>
          <span><em>{{startDateYear}} \u2013 {{endDateYear}}</em></span>
          <p>{{{area}}}</p>
        </div>
        
        {{/education}}
      </div>

      <!-- CERTIFICATIONS -->
      <div class="section">
        <h2><i class="fa fa-certificate ico"></i> Certifications</h2>
        {{#awards}}

        <div>
          <h4>{{awarder}}</h4>
          <h5>{{title}}</h5>
          <span><em>{{year}}</em></span>
          <p>{{{summary}}}</p>
        </div>
        
        {{/awards}}
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
  display: inline-block;
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

.resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 1px solid #1f5297;
  position: relative;
  margin-left: 30px;
}

.resume-item::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  left: -6px;
  top: 0px;
  background: #334960;
  /* border: 2px solid #1f5297; */
}

h5 {
  font-size: 16px;
  background: #e4edf9;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.section {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  border-bottom: #1f5297 1px solid;
  margin-right: -15px;
  margin-left: -15px;
}

.skills {
  list-style-type: none;
}

.skills li {
  display: flex;
}

.skills-container {
  display: flex;
  justify-content: space-between;
}

.skills-col {
  flex: 50%;
}

.header h1 {
  color: #334960;
}

h2 {
  color: #334960;
  margin-left: -20px;
  margin-bottom: 10px;
}

.contact {
  color: #334960;
}

.hobbies i {
  font-size: 40px;
  color: #334960;
  margin: auto;
}

.hobbies {
  display: flex;
  flex-direction: row;
}

.hobbies span {
  display: inline-flex;
  flex-direction: column;
  padding: 10px;
}

.contact ul {
  width: 270px;
}

.rating-1 span:nth-child(-n+1) {
  color: orange;
}

.rating-2 span:nth-child(-n+2) {
  color: orange;
}

.rating-3 span:nth-child(-n+3) {
  color: orange;
}

.rating-4 span:nth-child(-n+4) {
  color: orange;
}

.rating-5 span:nth-child(-n+5) {
  color: orange;
}`},Qn={public:["index.html"],".":["LICENSE","README.md","index.js","package.json","print.css","public","resume.template","style.css"]};kt=function(l,y){var D=zt(l);return D!==void 0?D:""},Pt=function(l,y){var D=Ze(l);return D===void 0&&(D=[]),y&&y.withFileTypes?D.map(function(d){var E=nt(l)+"/"+d,z=Ze(E)!==void 0;return{name:d,isFile:function(){return!z},isDirectory:function(){return z}}}):D},Lt=function(l){return zt(l)!==void 0||Ze(l)!==void 0},Ft=function(){},Nt=function(){},et=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Ut=et,qt=function(){},jt=function(){},Wt=function(){return{pipe:function(l){return l},on:function(){return this}}},Ot=function(){return{write:function(){},end:function(){},on:function(){return this}}},ra={readFileSync:kt,readdirSync:Pt,existsSync:Lt,writeFileSync:Ft,mkdirSync:Nt,statSync:et,lstatSync:Ut,unlinkSync:qt,rmdirSync:jt,createReadStream:Wt,createWriteStream:Ot}});var Yt=kn((Zn,me)=>{q();(function(){var l,y=[],D=[],d=0,E=+new Date+"",z=75,k=40,N=` 	\v\f\xA0\uFEFF
\r\u2028\u2029\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000`,gn=/\b__p \+= '';/g,yn=/\b(__p \+=) '' \+/g,wn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Dn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,En=/\w*$/,tn=/^\s*function[ \n\r\t]+\w/,un=/<%=([\s\S]+?)%>/g,Vn=RegExp("^["+N+"]*0+(?=.$)"),Tn=/($^)/,jn=/\bthis\b/,ee=/['\n\r\t\u2028\u2029\\]/g,Wn=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],g=0,S="[object Arguments]",m="[object Array]",I="[object Boolean]",M="[object Date]",U="[object Function]",_="[object Number]",f="[object Object]",p="[object RegExp]",o="[object String]",c={};c[U]=!1,c[S]=c[m]=c[I]=c[M]=c[_]=c[f]=c[p]=c[o]=!0;var P={leading:!1,maxWait:0,trailing:!1},L={configurable:!1,enumerable:!1,value:null,writable:!1},R={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1},G={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},B=R[typeof window]&&window||this,bn=R[typeof Zn]&&Zn&&!Zn.nodeType&&Zn,Rn=R[typeof me]&&me&&!me.nodeType&&me,H=Rn&&Rn.exports===bn&&bn,rn=R[typeof globalThis]&&globalThis;rn&&(rn.global===rn||rn.window===rn)&&(B=rn);function $(x,A,F){for(var j=(F||0)-1,O=x?x.length:0;++j<O;)if(x[j]===A)return j;return-1}function nn(x,A){var F=typeof A;if(x=x.cache,F=="boolean"||A==null)return x[A]?0:-1;F!="number"&&F!="string"&&(F="object");var j=F=="number"?A:E+A;return x=(x=x[F])&&x[j],F=="object"?x&&$(x,A)>-1?0:-1:x?0:-1}function Hn(x){var A=this.cache,F=typeof x;if(F=="boolean"||x==null)A[x]=!0;else{F!="number"&&F!="string"&&(F="object");var j=F=="number"?x:E+x,O=A[F]||(A[F]={});F=="object"?(O[j]||(O[j]=[])).push(x):O[j]=!0}}function $n(x){return x.charCodeAt(0)}function In(x,A){for(var F=x.criteria,j=A.criteria,O=-1,dn=F.length;++O<dn;){var mn=F[O],J=j[O];if(mn!==J){if(mn>J||typeof mn>"u")return 1;if(mn<J||typeof J>"u")return-1}}return x.index-A.index}function On(x){var A=-1,F=x.length,j=x[0],O=x[F/2|0],dn=x[F-1];if(j&&typeof j=="object"&&O&&typeof O=="object"&&dn&&typeof dn=="object")return!1;var mn=ke();mn.false=mn.null=mn.true=mn.undefined=!1;var J=ke();for(J.array=x,J.cache=mn,J.push=Hn;++A<F;)J.push(x[A]);return J}function ze(x){return"\\"+G[x]}function K(){return y.pop()||[]}function ke(){return D.pop()||{array:null,cache:null,criteria:null,false:!1,index:0,null:!1,number:null,object:null,push:null,string:null,true:!1,undefined:!1,value:null}}function xn(x){x.length=0,y.length<k&&y.push(x)}function te(x){var A=x.cache;A&&te(A),x.array=x.cache=x.criteria=x.object=x.number=x.string=x.value=null,D.length<k&&D.push(x)}function W(x,A,F){A||(A=0),typeof F>"u"&&(F=x?x.length:0);for(var j=-1,O=F-A||0,dn=Array(O<0?0:O);++j<O;)dn[j]=x[A+j];return dn}function Pe(x){x=x?Pn.defaults(B.Object(),x,Pn.pick(B,Wn)):B;var A=x.Array,F=x.Boolean,j=x.Date,O=x.Function,dn=x.Math,mn=x.Number,J=x.Object,re=x.RegExp,Ln=x.String,Mn=x.TypeError,Xn=[],rt=J.prototype,pr=x._,an=rt.toString,ur=re("^"+Ln(an).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),dr=dn.ceil,we=x.clearTimeout,cr=dn.floor,hr=O.prototype.toString,Gn=Nn(Gn=J.getPrototypeOf)&&Gn,sn=rt.hasOwnProperty,ie=Xn.push,ae=x.setTimeout,it=Xn.splice,gr=Xn.unshift,at=(function(){try{var n={},e=Nn(e=J.defineProperty)&&e,t=e(n,n,n)&&e}catch{}return t})(),be=Nn(be=J.create)&&be,Le=Nn(Le=A.isArray)&&Le,mr=x.isFinite,vr=x.isNaN,xe=Nn(xe=J.keys)&&xe,_n=dn.max,se=dn.min,Fe=x.parseInt,st=dn.random,An={};An[m]=A,An[I]=F,An[M]=j,An[U]=O,An[f]=J,An[_]=mn,An[p]=re,An[o]=Ln;function s(n){return n&&typeof n=="object"&&!en(n)&&sn.call(n,"__wrapped__")?n:new Bn(n)}function Bn(n,e){this.__chain__=!!e,this.__wrapped__=n}Bn.prototype=s.prototype;var oe=s.support={};oe.funcDecomp=!Nn(x.WinRTError)&&jn.test(Pe),oe.funcNames=typeof O.name=="string",s.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:un,variable:"",imports:{_:s}};function yr(n){var e=n[0],t=n[2],r=n[4];function i(){if(t){var a=W(t);ie.apply(a,arguments)}if(this instanceof i){var u=fe(e.prototype),h=e.apply(u,a||arguments);return fn(h)?h:u}return e.apply(r,a||arguments)}return We(i,n),i}function Ne(n,e,t,r,i){if(t){var a=t(n);if(typeof a<"u")return a}var u=fn(n);if(u){var h=an.call(n);if(!c[h])return n;var v=An[h];switch(h){case I:case M:return new v(+n);case _:case o:return new v(n);case p:return a=v(n.source,En.exec(n)),a.lastIndex=n.lastIndex,a}}else return n;var b=en(n);if(e){var w=!r;r||(r=K()),i||(i=K());for(var T=r.length;T--;)if(r[T]==n)return i[T];a=b?v(n.length):{}}else a=b?W(n):Se({},n);return b&&(sn.call(n,"index")&&(a.index=n.index),sn.call(n,"input")&&(a.input=n.input)),e&&(r.push(n),i.push(a),(b?ln:X)(n,function(C,Y){a[Y]=Ne(C,e,t,r,i)}),w&&(xn(r),xn(i))),a}function fe(n,e){return fn(n)?be(n):{}}be||(fe=(function(){function n(){}return function(e){if(fn(e)){n.prototype=e;var t=new n;n.prototype=null}return t||x.Object()}})());function cn(n,e,t){if(typeof n!="function")return Ge;if(typeof e>"u"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r>"u"&&(oe.funcNames&&(r=!n.name),r=r||!oe.funcDecomp,!r)){var i=hr.call(n);oe.funcNames||(r=!tn.test(i)),r||(r=jn.test(i),We(n,r))}if(r===!1||r!==!0&&r[1]&1)return n;switch(t){case 1:return function(a){return n.call(e,a)};case 2:return function(a,u){return n.call(e,a,u)};case 3:return function(a,u,h){return n.call(e,a,u,h)};case 4:return function(a,u,h,v){return n.call(e,a,u,h,v)}}return Dt(n,e)}function ot(n){var e=n[0],t=n[1],r=n[2],i=n[3],a=n[4],u=n[5],h=t&1,v=t&2,b=t&4,w=t&8,T=e;function C(){var Y=h?a:this;if(r){var V=W(r);ie.apply(V,arguments)}if((i||b)&&(V||(V=W(arguments)),i&&ie.apply(V,i),b&&V.length<u))return t|=16,ot([e,w?t:t&-4,V,null,a,u]);if(V||(V=arguments),v&&(e=Y[T]),this instanceof C){Y=fe(e.prototype);var hn=e.apply(Y,V);return fn(hn)?hn:Y}return e.apply(Y,V)}return We(C,n),C}function le(n,e){var t=-1,r=_e(),i=n?n.length:0,a=i>=z&&r===$,u=[];if(a){var h=On(e);h?(r=nn,e=h):a=!1}for(;++t<i;){var v=n[t];r(e,v)<0&&u.push(v)}return a&&te(e),u}function Fn(n,e,t,r){for(var i=(r||0)-1,a=n?n.length:0,u=[];++i<a;){var h=n[i];if(h&&typeof h=="object"&&typeof h.length=="number"&&(en(h)||Ce(h))){e||(h=Fn(h,e,t));var v=-1,b=h.length,w=u.length;for(u.length+=b;++v<b;)u[w++]=h[v]}else t||u.push(h)}return u}function Jn(n,e,t,r,i,a){if(t){var u=t(n,e);if(typeof u<"u")return!!u}if(n===e)return n!==0||1/n==1/e;var h=typeof n,v=typeof e;if(n===n&&!(n&&R[h])&&!(e&&R[v]))return!1;if(n==null||e==null)return n===e;var b=an.call(n),w=an.call(e);if(b==S&&(b=f),w==S&&(w=f),b!=w)return!1;switch(b){case I:case M:return+n==+e;case _:return n!=+n?e!=+e:n==0?1/n==1/e:n==+e;case p:case o:return n==Ln(e)}var T=b==m;if(!T){var C=sn.call(n,"__wrapped__"),Y=sn.call(e,"__wrapped__");if(C||Y)return Jn(C?n.__wrapped__:n,Y?e.__wrapped__:e,t,r,i,a);if(b!=f)return!1;var V=n.constructor,hn=e.constructor;if(V!=hn&&!(Q(V)&&V instanceof V&&Q(hn)&&hn instanceof hn)&&"constructor"in n&&"constructor"in e)return!1}var vn=!i;i||(i=K()),a||(a=K());for(var pn=i.length;pn--;)if(i[pn]==n)return a[pn]==e;var Z=0;if(u=!0,i.push(n),a.push(e),T){if(pn=n.length,Z=e.length,u=Z==pn,u||r)for(;Z--;){var Re=pn,ce=e[Z];if(r)for(;Re--&&!(u=Jn(n[Re],ce,t,r,i,a)););else if(!(u=Jn(n[Z],ce,t,r,i,a)))break}}else zn(e,function(he,ge,Qe){if(sn.call(Qe,ge))return Z++,u=sn.call(n,ge)&&Jn(n[ge],he,t,r,i,a)}),u&&!r&&zn(n,function(he,ge,Qe){if(sn.call(Qe,ge))return u=--Z>-1});return i.pop(),a.pop(),vn&&(xn(i),xn(a)),u}function ft(n,e,t,r,i){(en(e)?ln:X)(e,function(a,u){var h,v,b=a,w=n[u];if(a&&((v=en(a))||Ke(a))){for(var T=r.length;T--;)if(h=r[T]==a){w=i[T];break}if(!h){var C;t&&(b=t(w,a),(C=typeof b<"u")&&(w=b)),C||(w=v?en(w)?w:[]:Ke(w)?w:{}),r.push(a),i.push(w),C||ft(w,a,t,r,i)}}else t&&(b=t(w,a),typeof b>"u"&&(b=a)),typeof b<"u"&&(w=b);n[u]=w})}function Ue(n,e){return n+cr(st()*(e-n+1))}function qe(n,e,t){var r=-1,i=_e(),a=n?n.length:0,u=[],h=!e&&a>=z&&i===$,v=t||h?K():u;if(h){var b=On(v);i=nn,v=b}for(;++r<a;){var w=n[r],T=t?t(w,r,n):w;(e?!r||v[v.length-1]!==T:i(v,T)<0)&&((t||h)&&v.push(T),u.push(w))}return h?(xn(v.array),te(v)):t&&xn(v),u}function je(n){return function(e,t,r){var i={};t=s.createCallback(t,r,3);var a=-1,u=e?e.length:0;if(typeof u=="number")for(;++a<u;){var h=e[a];n(i,h,t(h,a,e),e)}else X(e,function(v,b,w){n(i,v,t(v,b,w),w)});return i}}function Cn(n,e,t,r,i,a){var u=e&1,h=e&2,v=e&4,b=e&8,w=e&16,T=e&32;if(!h&&!Q(n))throw new Mn;w&&!t.length&&(e&=-17,w=t=!1),T&&!r.length&&(e&=-33,T=r=!1);var C=n&&n.__bindData__;if(C&&C!==!0)return C=W(C),C[2]&&(C[2]=W(C[2])),C[3]&&(C[3]=W(C[3])),u&&!(C[1]&1)&&(C[4]=i),!u&&C[1]&1&&(e|=8),v&&!(C[1]&4)&&(C[5]=a),w&&ie.apply(C[2]||(C[2]=[]),t),T&&gr.apply(C[3]||(C[3]=[]),r),C[1]|=e,Cn.apply(null,C);var Y=e==1||e===17?yr:ot;return Y([n,e,t,r,i,a])}function wr(n){return Oe[n]}function _e(){var n=(n=s.indexOf)===bt?$:n;return n}function Nn(n){return typeof n=="function"&&ur.test(n)}var We=at?function(n,e){L.value=e,at(n,"__bindData__",L),L.value=null}:Tt;function lt(n){var e,t;return!(n&&an.call(n)==f)||(e=n.constructor,Q(e)&&!(e instanceof e))?!1:(zn(n,function(r,i){t=i}),typeof t>"u"||sn.call(n,t))}function br(n){return pt[n]}function Ce(n){return n&&typeof n=="object"&&typeof n.length=="number"&&an.call(n)==S||!1}var en=Le||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&an.call(n)==m||!1},xr=function(n){var e,t=n,r=[];if(!t||!R[typeof n])return r;for(e in t)sn.call(t,e)&&r.push(e);return r},on=xe?function(n){return fn(n)?xe(n):[]}:xr,Oe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},pt=dt(Oe),_r=re("("+on(pt).join("|")+")","g"),Cr=re("["+on(Oe).join("")+"]","g"),Se=function(n,e,t){var r,i=n,a=i;if(!i)return a;var u=arguments,h=0,v=typeof t=="number"?2:u.length;if(v>3&&typeof u[v-2]=="function")var b=cn(u[--v-1],u[v--],2);else v>2&&typeof u[v-1]=="function"&&(b=u[--v]);for(;++h<v;)if(i=u[h],i&&R[typeof i])for(var w=-1,T=R[typeof i]&&on(i),C=T?T.length:0;++w<C;)r=T[w],a[r]=b?b(a[r],i[r]):i[r];return a};function Sr(n,e,t,r){return typeof e!="boolean"&&e!=null&&(r=t,t=e,e=!1),Ne(n,e,typeof t=="function"&&cn(t,r,1))}function Dr(n,e,t){return Ne(n,!0,typeof e=="function"&&cn(e,t,1))}function Er(n,e){var t=fe(n);return e?Se(t,e):t}var Be=function(n,e,t){var r,i=n,a=i;if(!i)return a;for(var u=arguments,h=0,v=typeof t=="number"?2:u.length;++h<v;)if(i=u[h],i&&R[typeof i])for(var b=-1,w=R[typeof i]&&on(i),T=w?w.length:0;++b<T;)r=w[b],typeof a[r]>"u"&&(a[r]=i[r]);return a};function Tr(n,e,t){var r;return e=s.createCallback(e,t,3),X(n,function(i,a,u){if(e(i,a,u))return r=a,!1}),r}function Rr(n,e,t){var r;return e=s.createCallback(e,t,3),ut(n,function(i,a,u){if(e(i,a,u))return r=a,!1}),r}var zn=function(n,e,t){var r,i=n,a=i;if(!i||!R[typeof i])return a;e=e&&typeof t>"u"?e:cn(e,t,3);for(r in i)if(e(i[r],r,n)===!1)return a;return a};function Ir(n,e,t){var r=[];zn(n,function(a,u){r.push(u,a)});var i=r.length;for(e=cn(e,t,3);i--&&e(r[i--],r[i],n)!==!1;);return n}var X=function(n,e,t){var r,i=n,a=i;if(!i||!R[typeof i])return a;e=e&&typeof t>"u"?e:cn(e,t,3);for(var u=-1,h=R[typeof i]&&on(i),v=h?h.length:0;++u<v;)if(r=h[u],e(i[r],r,n)===!1)return a;return a};function ut(n,e,t){var r=on(n),i=r.length;for(e=cn(e,t,3);i--;){var a=r[i];if(e(n[a],a,n)===!1)break}return n}function pe(n){var e=[];return zn(n,function(t,r){Q(t)&&e.push(r)}),e.sort()}function Mr(n,e){return n?sn.call(n,e):!1}function dt(n){for(var e=-1,t=on(n),r=t.length,i={};++e<r;){var a=t[e];i[n[a]]=a}return i}function Ar(n){return n===!0||n===!1||n&&typeof n=="object"&&an.call(n)==I||!1}function zr(n){return n&&typeof n=="object"&&an.call(n)==M||!1}function kr(n){return n&&n.nodeType===1||!1}function Pr(n){var e=!0;if(!n)return e;var t=an.call(n),r=n.length;return t==m||t==o||t==S||t==f&&typeof r=="number"&&Q(n.splice)?!r:(X(n,function(){return e=!1}),e)}function Lr(n,e,t,r){return Jn(n,e,typeof t=="function"&&cn(t,r,2))}function Fr(n){return mr(n)&&!vr(parseFloat(n))}function Q(n){return typeof n=="function"}function fn(n){return!!(n&&R[typeof n])}function Nr(n){return ct(n)&&n!=+n}function Ur(n){return n===null}function ct(n){return typeof n=="number"||n&&typeof n=="object"&&an.call(n)==_||!1}var Ke=Gn?function(n){if(!(n&&an.call(n)==f))return!1;var e=n.valueOf,t=Nn(e)&&(t=Gn(e))&&Gn(t);return t?n==t||Gn(n)==t:lt(n)}:lt;function qr(n){return n&&typeof n=="object"&&an.call(n)==p||!1}function ue(n){return typeof n=="string"||n&&typeof n=="object"&&an.call(n)==o||!1}function jr(n){return typeof n>"u"}function Wr(n,e,t){var r={};return e=s.createCallback(e,t,3),X(n,function(i,a,u){r[a]=e(i,a,u)}),r}function Or(n){var e=arguments,t=2;if(!fn(n))return n;if(typeof e[2]!="number"&&(t=e.length),t>3&&typeof e[t-2]=="function")var r=cn(e[--t-1],e[t--],2);else t>2&&typeof e[t-1]=="function"&&(r=e[--t]);for(var i=W(arguments,1,t),a=-1,u=K(),h=K();++a<t;)ft(n,i[a],r,u,h);return xn(u),xn(h),n}function Br(n,e,t){var r={};if(typeof e!="function"){var i=[];zn(n,function(v,b){i.push(b)}),i=le(i,Fn(arguments,!0,!1,1));for(var a=-1,u=i.length;++a<u;){var h=i[a];r[h]=n[h]}}else e=s.createCallback(e,t,3),zn(n,function(v,b,w){e(v,b,w)||(r[b]=v)});return r}function Kr(n){for(var e=-1,t=on(n),r=t.length,i=A(r);++e<r;){var a=t[e];i[e]=[a,n[a]]}return i}function Yr(n,e,t){var r={};if(typeof e!="function")for(var i=-1,a=Fn(arguments,!0,!1,1),u=fn(n)?a.length:0;++i<u;){var h=a[i];h in n&&(r[h]=n[h])}else e=s.createCallback(e,t,3),zn(n,function(v,b,w){e(v,b,w)&&(r[b]=v)});return r}function Vr(n,e,t,r){var i=en(n);if(t==null)if(i)t=[];else{var a=n&&n.constructor,u=a&&a.prototype;t=fe(u)}return e&&(e=s.createCallback(e,r,4),(i?ln:X)(n,function(h,v,b){return e(t,h,v,b)})),t}function De(n){for(var e=-1,t=on(n),r=t.length,i=A(r);++e<r;)i[e]=n[t[e]];return i}function Hr(n){for(var e=arguments,t=-1,r=Fn(e,!0,!1,1),i=e[2]&&e[2][e[1]]===n?1:r.length,a=A(i);++t<i;)a[t]=n[r[t]];return a}function ht(n,e,t){var r=-1,i=_e(),a=n?n.length:0,u=!1;return t=(t<0?_n(0,a+t):t)||0,en(n)?u=i(n,e,t)>-1:typeof a=="number"?u=(ue(n)?n.indexOf(e,t):i(n,e,t))>-1:X(n,function(h){if(++r>=t)return!(u=h===e)}),u}var $r=je(function(n,e,t){sn.call(n,t)?n[t]++:n[t]=1});function gt(n,e,t){var r=!0;e=s.createCallback(e,t,3);var i=-1,a=n?n.length:0;if(typeof a=="number")for(;++i<a&&(r=!!e(n[i],i,n)););else X(n,function(u,h,v){return r=!!e(u,h,v)});return r}function Ee(n,e,t){var r=[];e=s.createCallback(e,t,3);var i=-1,a=n?n.length:0;if(typeof a=="number")for(;++i<a;){var u=n[i];e(u,i,n)&&r.push(u)}else X(n,function(h,v,b){e(h,v,b)&&r.push(h)});return r}function Ye(n,e,t){e=s.createCallback(e,t,3);var r=-1,i=n?n.length:0;if(typeof i=="number")for(;++r<i;){var a=n[r];if(e(a,r,n))return a}else{var u;return X(n,function(h,v,b){if(e(h,v,b))return u=h,!1}),u}}function Xr(n,e,t){var r;return e=s.createCallback(e,t,3),Te(n,function(i,a,u){if(e(i,a,u))return r=i,!1}),r}function ln(n,e,t){var r=-1,i=n?n.length:0;if(e=e&&typeof t>"u"?e:cn(e,t,3),typeof i=="number")for(;++r<i&&e(n[r],r,n)!==!1;);else X(n,e);return n}function Te(n,e,t){var r=n?n.length:0;if(e=e&&typeof t>"u"?e:cn(e,t,3),typeof r=="number")for(;r--&&e(n[r],r,n)!==!1;);else{var i=on(n);r=i.length,X(n,function(a,u,h){return u=i?i[--r]:--r,e(h[u],u,h)})}return n}var Gr=je(function(n,e,t){(sn.call(n,t)?n[t]:n[t]=[]).push(e)}),Jr=je(function(n,e,t){n[t]=e});function Qr(n,e){var t=W(arguments,2),r=-1,i=typeof e=="function",a=n?n.length:0,u=A(typeof a=="number"?a:0);return ln(n,function(h){u[++r]=(i?e:h[e]).apply(h,t)}),u}function de(n,e,t){var r=-1,i=n?n.length:0;if(e=s.createCallback(e,t,3),typeof i=="number")for(var a=A(i);++r<i;)a[r]=e(n[r],r,n);else a=[],X(n,function(u,h,v){a[++r]=e(u,h,v)});return a}function mt(n,e,t){var r=-1/0,i=r;if(typeof e!="function"&&t&&t[e]===n&&(e=null),e==null&&en(n))for(var a=-1,u=n.length;++a<u;){var h=n[a];h>i&&(i=h)}else e=e==null&&ue(n)?$n:s.createCallback(e,t,3),ln(n,function(v,b,w){var T=e(v,b,w);T>r&&(r=T,i=v)});return i}function Zr(n,e,t){var r=1/0,i=r;if(typeof e!="function"&&t&&t[e]===n&&(e=null),e==null&&en(n))for(var a=-1,u=n.length;++a<u;){var h=n[a];h<i&&(i=h)}else e=e==null&&ue(n)?$n:s.createCallback(e,t,3),ln(n,function(v,b,w){var T=e(v,b,w);T<r&&(r=T,i=v)});return i}var Ve=de;function He(n,e,t,r){if(!n)return t;var i=arguments.length<3;e=s.createCallback(e,r,4);var a=-1,u=n.length;if(typeof u=="number")for(i&&(t=n[++a]);++a<u;)t=e(t,n[a],a,n);else X(n,function(h,v,b){t=i?(i=!1,h):e(t,h,v,b)});return t}function vt(n,e,t,r){var i=arguments.length<3;return e=s.createCallback(e,r,4),Te(n,function(a,u,h){t=i?(i=!1,a):e(t,a,u,h)}),t}function ni(n,e,t){return e=s.createCallback(e,t,3),Ee(n,function(r,i,a){return!e(r,i,a)})}function ei(n,e,t){if(n&&typeof n.length!="number"&&(n=De(n)),e==null||t)return n?n[Ue(0,n.length-1)]:l;var r=yt(n);return r.length=se(_n(0,e),r.length),r}function yt(n){var e=-1,t=n?n.length:0,r=A(typeof t=="number"?t:0);return ln(n,function(i){var a=Ue(0,++e);r[e]=r[a],r[a]=i}),r}function ti(n){var e=n?n.length:0;return typeof e=="number"?e:on(n).length}function wt(n,e,t){var r;e=s.createCallback(e,t,3);var i=-1,a=n?n.length:0;if(typeof a=="number")for(;++i<a&&!(r=e(n[i],i,n)););else X(n,function(u,h,v){return!(r=e(u,h,v))});return!!r}function ri(n,e,t){var r=-1,i=en(e),a=n?n.length:0,u=A(typeof a=="number"?a:0);for(i||(e=s.createCallback(e,t,3)),ln(n,function(v,b,w){var T=u[++r]=ke();i?T.criteria=de(e,function(C){return v[C]}):(T.criteria=K())[0]=e(v,b,w),T.index=r,T.value=v}),a=u.length,u.sort(In);a--;){var h=u[a];u[a]=h.value,i||xn(h.criteria),te(h)}return u}function ii(n){return n&&typeof n.length=="number"?W(n):De(n)}var ai=Ee;function si(n){for(var e=-1,t=n?n.length:0,r=[];++e<t;){var i=n[e];i&&r.push(i)}return r}function oi(n){return le(n,Fn(arguments,!0,!0,1))}function fi(n,e,t){var r=-1,i=n?n.length:0;for(e=s.createCallback(e,t,3);++r<i;)if(e(n[r],r,n))return r;return-1}function li(n,e,t){var r=n?n.length:0;for(e=s.createCallback(e,t,3);r--;)if(e(n[r],r,n))return r;return-1}function $e(n,e,t){var r=0,i=n?n.length:0;if(typeof e!="number"&&e!=null){var a=-1;for(e=s.createCallback(e,t,3);++a<i&&e(n[a],a,n);)r++}else if(r=e,r==null||t)return n?n[0]:l;return W(n,0,se(_n(0,r),i))}function pi(n,e,t,r){return typeof e!="boolean"&&e!=null&&(r=t,t=typeof e!="function"&&r&&r[e]===n?null:e,e=!1),t!=null&&(n=de(n,t,r)),Fn(n,e)}function bt(n,e,t){if(typeof t=="number"){var r=n?n.length:0;t=t<0?_n(0,r+t):t||0}else if(t){var i=xt(n,e);return n[i]===e?i:-1}return $(n,e,t)}function ui(n,e,t){var r=0,i=n?n.length:0;if(typeof e!="number"&&e!=null){var a=i;for(e=s.createCallback(e,t,3);a--&&e(n[a],a,n);)r++}else r=e==null||t?1:e||r;return W(n,0,se(_n(0,i-r),i))}function di(){for(var n=[],e=-1,t=arguments.length,r=K(),i=_e(),a=i===$,u=K();++e<t;){var h=arguments[e];(en(h)||Ce(h))&&(n.push(h),r.push(a&&h.length>=z&&On(e?n[e]:u)))}var v=n[0],b=-1,w=v?v.length:0,T=[];n:for(;++b<w;){var C=r[0];if(h=v[b],(C?nn(C,h):i(u,h))<0){for(e=t,(C||u).push(h);--e;)if(C=r[e],(C?nn(C,h):i(n[e],h))<0)continue n;T.push(h)}}for(;t--;)C=r[t],C&&te(C);return xn(r),xn(u),T}function ci(n,e,t){var r=0,i=n?n.length:0;if(typeof e!="number"&&e!=null){var a=i;for(e=s.createCallback(e,t,3);a--&&e(n[a],a,n);)r++}else if(r=e,r==null||t)return n?n[i-1]:l;return W(n,_n(0,i-r))}function hi(n,e,t){var r=n?n.length:0;for(typeof t=="number"&&(r=(t<0?_n(0,r+t):se(t,r-1))+1);r--;)if(n[r]===e)return r;return-1}function gi(n){for(var e=arguments,t=0,r=e.length,i=n?n.length:0;++t<r;)for(var a=-1,u=e[t];++a<i;)n[a]===u&&(it.call(n,a--,1),i--);return n}function mi(n,e,t){n=+n||0,t=typeof t=="number"?t:+t||1,e==null&&(e=n,n=0);for(var r=-1,i=_n(0,dr((e-n)/(t||1))),a=A(i);++r<i;)a[r]=n,n+=t;return a}function vi(n,e,t){var r=-1,i=n?n.length:0,a=[];for(e=s.createCallback(e,t,3);++r<i;){var u=n[r];e(u,r,n)&&(a.push(u),it.call(n,r--,1),i--)}return a}function Xe(n,e,t){if(typeof e!="number"&&e!=null){var r=0,i=-1,a=n?n.length:0;for(e=s.createCallback(e,t,3);++i<a&&e(n[i],i,n);)r++}else r=e==null||t?1:_n(0,e);return W(n,r)}function xt(n,e,t,r){var i=0,a=n?n.length:i;for(t=t?s.createCallback(t,r,1):Ge,e=t(e);i<a;){var u=i+a>>>1;t(n[u])<e?i=u+1:a=u}return i}function yi(){return qe(Fn(arguments,!0,!0))}function _t(n,e,t,r){return typeof e!="boolean"&&e!=null&&(r=t,t=typeof e!="function"&&r&&r[e]===n?null:e,e=!1),t!=null&&(t=s.createCallback(t,r,3)),qe(n,e,t)}function wi(n){return le(n,W(arguments,1))}function bi(){for(var n=-1,e=arguments.length;++n<e;){var t=arguments[n];if(en(t)||Ce(t))var r=r?qe(le(r,t).concat(le(t,r))):t}return r||[]}function Ct(){for(var n=arguments.length>1?arguments:arguments[0],e=-1,t=n?mt(Ve(n,"length")):0,r=A(t<0?0:t);++e<t;)r[e]=Ve(n,e);return r}function St(n,e){var t=-1,r=n?n.length:0,i={};for(!e&&r&&!en(n[0])&&(e=[]);++t<r;){var a=n[t];e?i[a]=e[t]:a&&(i[a[0]]=a[1])}return i}function xi(n,e){if(!Q(e))throw new Mn;return function(){if(--n<1)return e.apply(this,arguments)}}function Dt(n,e){return arguments.length>2?Cn(n,17,W(arguments,2),null,e):Cn(n,1,null,null,e)}function _i(n){for(var e=arguments.length>1?Fn(arguments,!0,!1,1):pe(n),t=-1,r=e.length;++t<r;){var i=e[t];n[i]=Cn(n[i],1,null,null,n)}return n}function Ci(n,e){return arguments.length>2?Cn(e,19,W(arguments,2),null,n):Cn(e,3,null,null,n)}function Si(){for(var n=arguments,e=n.length;e--;)if(!Q(n[e]))throw new Mn;return function(){for(var t=arguments,r=n.length;r--;)t=[n[r].apply(this,t)];return t[0]}}function Di(n,e){return e=typeof e=="number"?e:+e||n.length,Cn(n,4,null,null,null,e)}function Et(n,e,t){var r,i,a,u,h,v,b,w=0,T=!1,C=!0;if(!Q(n))throw new Mn;if(e=_n(0,e)||0,t===!0){var Y=!0;C=!1}else fn(t)&&(Y=t.leading,T="maxWait"in t&&(_n(e,t.maxWait)||0),C="trailing"in t?t.trailing:C);var V=function(){var vn=e-(Kn()-u);if(vn<=0){i&&we(i);var pn=b;i=v=b=l,pn&&(w=Kn(),a=n.apply(h,r),!v&&!i&&(r=h=null))}else v=ae(V,vn)},hn=function(){v&&we(v),i=v=b=l,(C||T!==e)&&(w=Kn(),a=n.apply(h,r),!v&&!i&&(r=h=null))};return function(){if(r=arguments,u=Kn(),h=this,b=C&&(v||!Y),T===!1)var vn=Y&&!v;else{!i&&!Y&&(w=u);var pn=T-(u-w),Z=pn<=0;Z?(i&&(i=we(i)),w=u,a=n.apply(h,r)):i||(i=ae(hn,pn))}return Z&&v?v=we(v):!v&&e!==T&&(v=ae(V,e)),vn&&(Z=!0,a=n.apply(h,r)),Z&&!v&&!i&&(r=h=null),a}}function Ei(n){if(!Q(n))throw new Mn;var e=W(arguments,1);return ae(function(){n.apply(l,e)},1)}function Ti(n,e){if(!Q(n))throw new Mn;var t=W(arguments,2);return ae(function(){n.apply(l,t)},e)}function Ri(n,e){if(!Q(n))throw new Mn;var t=function(){var r=t.cache,i=e?e.apply(this,arguments):E+arguments[0];return sn.call(r,i)?r[i]:r[i]=n.apply(this,arguments)};return t.cache={},t}function Ii(n){var e,t;if(!Q(n))throw new Mn;return function(){return e||(e=!0,t=n.apply(this,arguments),n=null),t}}function Mi(n){return Cn(n,16,W(arguments,1))}function Ai(n){return Cn(n,32,null,W(arguments,1))}function zi(n,e,t){var r=!0,i=!0;if(!Q(n))throw new Mn;return t===!1?r=!1:fn(t)&&(r="leading"in t?t.leading:r,i="trailing"in t?t.trailing:i),P.leading=r,P.maxWait=e,P.trailing=i,Et(n,e,P)}function ki(n,e){return Cn(e,16,[n])}function Pi(n){return function(){return n}}function Li(n,e,t){var r=typeof n;if(n==null||r=="function")return cn(n,e,t);if(r!="object")return Rt(n);var i=on(n),a=i[0],u=n[a];return i.length==1&&u===u&&!fn(u)?function(h){var v=h[a];return u===v&&(u!==0||1/u==1/v)}:function(h){for(var v=i.length,b=!1;v--&&(b=Jn(h[i[v]],n[i[v]],null,!0)););return b}}function Fi(n){return n==null?"":Ln(n).replace(Cr,wr)}function Ge(n){return n}function Je(n,e,t){var r=!0,i=e&&pe(e);(!e||!t&&!i.length)&&(t==null&&(t=e),a=Bn,e=n,n=s,i=pe(e)),t===!1?r=!1:fn(t)&&"chain"in t&&(r=t.chain);var a=n,u=Q(a);ln(i,function(h){var v=n[h]=e[h];u&&(a.prototype[h]=function(){var b=this.__chain__,w=this.__wrapped__,T=[w];ie.apply(T,arguments);var C=v.apply(n,T);if(r||b){if(w===C&&fn(C))return this;C=new a(C),C.__chain__=b}return C})})}function Ni(){return x._=pr,this}function Tt(){}var Kn=Nn(Kn=j.now)&&Kn||function(){return new j().getTime()},Ui=Fe(N+"08")==8?Fe:function(n,e){return Fe(ue(n)?n.replace(Vn,""):n,e||0)};function Rt(n){return function(e){return e[n]}}function qi(n,e,t){var r=n==null,i=e==null;if(t==null&&(typeof n=="boolean"&&i?(t=n,n=1):!i&&typeof e=="boolean"&&(t=e,i=!0)),r&&i&&(e=1),n=+n||0,i?(e=n,n=0):e=+e||0,t||n%1||e%1){var a=st();return se(n+a*(e-n+parseFloat("1e-"+((a+"").length-1))),e)}return Ue(n,e)}function ji(n,e){if(n){var t=n[e];return Q(t)?n[e]():t}}function Wi(n,e,t){var r=s.templateSettings;n=Ln(n||""),t=Be({},t,r);var i=Be({},t.imports,r.imports),a=on(i),u=De(i),h,v=0,b=t.interpolate||Tn,w="__p += '",T=re((t.escape||Tn).source+"|"+b.source+"|"+(b===un?Dn:Tn).source+"|"+(t.evaluate||Tn).source+"|$","g");n.replace(T,function(vn,pn,Z,Re,ce,he){return Z||(Z=Re),w+=n.slice(v,he).replace(ee,ze),pn&&(w+=`' +
__e(`+pn+`) +
'`),ce&&(h=!0,w+=`';
`+ce+`;
__p += '`),Z&&(w+=`' +
((__t = (`+Z+`)) == null ? '' : __t) +
'`),v=he+vn.length,vn}),w+=`';
`;var C=t.variable,Y=C;Y||(C="obj",w="with ("+C+`) {
`+w+`
}
`),w=(h?w.replace(gn,""):w).replace(yn,"$1").replace(wn,"$1;"),w="function("+C+`) {
`+(Y?"":C+" || ("+C+` = {});
`)+"var __t, __p = '', __e = _.escape"+(h?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+w+`return __p
}`;var V=`
/*
//# sourceURL=`+(t.sourceURL||"/lodash/template/source["+g+++"]")+`
*/`;try{var hn=O(a,"return "+w+V).apply(l,u)}catch(vn){throw vn.source=w,vn}return e?hn(e):(hn.source=w,hn)}function Oi(n,e,t){n=(n=+n)>-1?n:0;var r=-1,i=A(n);for(e=cn(e,t,1);++r<n;)i[r]=e(r);return i}function Bi(n){return n==null?"":Ln(n).replace(_r,br)}function Ki(n){var e=++d;return Ln(n??"")+e}function Yi(n){return n=new Bn(n),n.__chain__=!0,n}function Vi(n,e){return e(n),n}function Hi(){return this.__chain__=!0,this}function $i(){return Ln(this.__wrapped__)}function It(){return this.__wrapped__}return s.after=xi,s.assign=Se,s.at=Hr,s.bind=Dt,s.bindAll=_i,s.bindKey=Ci,s.chain=Yi,s.compact=si,s.compose=Si,s.constant=Pi,s.countBy=$r,s.create=Er,s.createCallback=Li,s.curry=Di,s.debounce=Et,s.defaults=Be,s.defer=Ei,s.delay=Ti,s.difference=oi,s.filter=Ee,s.flatten=pi,s.forEach=ln,s.forEachRight=Te,s.forIn=zn,s.forInRight=Ir,s.forOwn=X,s.forOwnRight=ut,s.functions=pe,s.groupBy=Gr,s.indexBy=Jr,s.initial=ui,s.intersection=di,s.invert=dt,s.invoke=Qr,s.keys=on,s.map=de,s.mapValues=Wr,s.max=mt,s.memoize=Ri,s.merge=Or,s.min=Zr,s.omit=Br,s.once=Ii,s.pairs=Kr,s.partial=Mi,s.partialRight=Ai,s.pick=Yr,s.pluck=Ve,s.property=Rt,s.pull=gi,s.range=mi,s.reject=ni,s.remove=vi,s.rest=Xe,s.shuffle=yt,s.sortBy=ri,s.tap=Vi,s.throttle=zi,s.times=Oi,s.toArray=ii,s.transform=Vr,s.union=yi,s.uniq=_t,s.values=De,s.where=ai,s.without=wi,s.wrap=ki,s.xor=bi,s.zip=Ct,s.zipObject=St,s.collect=de,s.drop=Xe,s.each=ln,s.eachRight=Te,s.extend=Se,s.methods=pe,s.object=St,s.select=Ee,s.tail=Xe,s.unique=_t,s.unzip=Ct,Je(s),s.clone=Sr,s.cloneDeep=Dr,s.contains=ht,s.escape=Fi,s.every=gt,s.find=Ye,s.findIndex=fi,s.findKey=Tr,s.findLast=Xr,s.findLastIndex=li,s.findLastKey=Rr,s.has=Mr,s.identity=Ge,s.indexOf=bt,s.isArguments=Ce,s.isArray=en,s.isBoolean=Ar,s.isDate=zr,s.isElement=kr,s.isEmpty=Pr,s.isEqual=Lr,s.isFinite=Fr,s.isFunction=Q,s.isNaN=Nr,s.isNull=Ur,s.isNumber=ct,s.isObject=fn,s.isPlainObject=Ke,s.isRegExp=qr,s.isString=ue,s.isUndefined=jr,s.lastIndexOf=hi,s.mixin=Je,s.noConflict=Ni,s.noop=Tt,s.now=Kn,s.parseInt=Ui,s.random=qi,s.reduce=He,s.reduceRight=vt,s.result=ji,s.runInContext=Pe,s.size=ti,s.some=wt,s.sortedIndex=xt,s.template=Wi,s.unescape=Bi,s.uniqueId=Ki,s.all=gt,s.any=wt,s.detect=Ye,s.findWhere=Ye,s.foldl=He,s.foldr=vt,s.include=ht,s.inject=He,Je((function(){var n={};return X(s,function(e,t){s.prototype[t]||(n[t]=e)}),n})(),!1),s.first=$e,s.last=ci,s.sample=ei,s.take=$e,s.head=$e,X(s,function(n,e){var t=e!=="sample";s.prototype[e]||(s.prototype[e]=function(r,i){var a=this.__chain__,u=n(this.__wrapped__,r,i);return!a&&(r==null||i&&!(t&&typeof r=="function"))?u:new Bn(u,a)})}),s.VERSION="2.4.2",s.prototype.chain=Hi,s.prototype.toString=$i,s.prototype.value=It,s.prototype.valueOf=It,ln(["join","pop","shift"],function(n){var e=Xn[n];s.prototype[n]=function(){var t=this.__chain__,r=e.apply(this.__wrapped__,arguments);return t?new Bn(r,t):r}}),ln(["push","reverse","sort","unshift"],function(n){var e=Xn[n];s.prototype[n]=function(){return e.apply(this.__wrapped__,arguments),this}}),ln(["concat","slice","splice"],function(n){var e=Xn[n];s.prototype[n]=function(){return new Bn(e.apply(this.__wrapped__,arguments),this.__chain__)}}),s}var Pn=Pe();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(B._=Pn,define(function(){return Pn})):bn&&Rn?H?(Rn.exports=Pn)._=Pn:bn._=Pn:B._=Pn}).call(Zn)});var Ht=kn((Vt,Ae)=>{q();(function(l){"use strict";function y(g,S){var m=(g&65535)+(S&65535),I=(g>>16)+(S>>16)+(m>>16);return I<<16|m&65535}function D(g,S){return g<<S|g>>>32-S}function d(g,S,m,I,M,U){return y(D(y(y(S,g),y(I,U)),M),m)}function E(g,S,m,I,M,U,_){return d(S&m|~S&I,g,S,M,U,_)}function z(g,S,m,I,M,U,_){return d(S&I|m&~I,g,S,M,U,_)}function k(g,S,m,I,M,U,_){return d(S^m^I,g,S,M,U,_)}function N(g,S,m,I,M,U,_){return d(m^(S|~I),g,S,M,U,_)}function gn(g,S){g[S>>5]|=128<<S%32,g[(S+64>>>9<<4)+14]=S;var m,I,M,U,_,f=1732584193,p=-271733879,o=-1732584194,c=271733878;for(m=0;m<g.length;m+=16)I=f,M=p,U=o,_=c,f=E(f,p,o,c,g[m],7,-680876936),c=E(c,f,p,o,g[m+1],12,-389564586),o=E(o,c,f,p,g[m+2],17,606105819),p=E(p,o,c,f,g[m+3],22,-1044525330),f=E(f,p,o,c,g[m+4],7,-176418897),c=E(c,f,p,o,g[m+5],12,1200080426),o=E(o,c,f,p,g[m+6],17,-1473231341),p=E(p,o,c,f,g[m+7],22,-45705983),f=E(f,p,o,c,g[m+8],7,1770035416),c=E(c,f,p,o,g[m+9],12,-1958414417),o=E(o,c,f,p,g[m+10],17,-42063),p=E(p,o,c,f,g[m+11],22,-1990404162),f=E(f,p,o,c,g[m+12],7,1804603682),c=E(c,f,p,o,g[m+13],12,-40341101),o=E(o,c,f,p,g[m+14],17,-1502002290),p=E(p,o,c,f,g[m+15],22,1236535329),f=z(f,p,o,c,g[m+1],5,-165796510),c=z(c,f,p,o,g[m+6],9,-1069501632),o=z(o,c,f,p,g[m+11],14,643717713),p=z(p,o,c,f,g[m],20,-373897302),f=z(f,p,o,c,g[m+5],5,-701558691),c=z(c,f,p,o,g[m+10],9,38016083),o=z(o,c,f,p,g[m+15],14,-660478335),p=z(p,o,c,f,g[m+4],20,-405537848),f=z(f,p,o,c,g[m+9],5,568446438),c=z(c,f,p,o,g[m+14],9,-1019803690),o=z(o,c,f,p,g[m+3],14,-187363961),p=z(p,o,c,f,g[m+8],20,1163531501),f=z(f,p,o,c,g[m+13],5,-1444681467),c=z(c,f,p,o,g[m+2],9,-51403784),o=z(o,c,f,p,g[m+7],14,1735328473),p=z(p,o,c,f,g[m+12],20,-1926607734),f=k(f,p,o,c,g[m+5],4,-378558),c=k(c,f,p,o,g[m+8],11,-2022574463),o=k(o,c,f,p,g[m+11],16,1839030562),p=k(p,o,c,f,g[m+14],23,-35309556),f=k(f,p,o,c,g[m+1],4,-1530992060),c=k(c,f,p,o,g[m+4],11,1272893353),o=k(o,c,f,p,g[m+7],16,-155497632),p=k(p,o,c,f,g[m+10],23,-1094730640),f=k(f,p,o,c,g[m+13],4,681279174),c=k(c,f,p,o,g[m],11,-358537222),o=k(o,c,f,p,g[m+3],16,-722521979),p=k(p,o,c,f,g[m+6],23,76029189),f=k(f,p,o,c,g[m+9],4,-640364487),c=k(c,f,p,o,g[m+12],11,-421815835),o=k(o,c,f,p,g[m+15],16,530742520),p=k(p,o,c,f,g[m+2],23,-995338651),f=N(f,p,o,c,g[m],6,-198630844),c=N(c,f,p,o,g[m+7],10,1126891415),o=N(o,c,f,p,g[m+14],15,-1416354905),p=N(p,o,c,f,g[m+5],21,-57434055),f=N(f,p,o,c,g[m+12],6,1700485571),c=N(c,f,p,o,g[m+3],10,-1894986606),o=N(o,c,f,p,g[m+10],15,-1051523),p=N(p,o,c,f,g[m+1],21,-2054922799),f=N(f,p,o,c,g[m+8],6,1873313359),c=N(c,f,p,o,g[m+15],10,-30611744),o=N(o,c,f,p,g[m+6],15,-1560198380),p=N(p,o,c,f,g[m+13],21,1309151649),f=N(f,p,o,c,g[m+4],6,-145523070),c=N(c,f,p,o,g[m+11],10,-1120210379),o=N(o,c,f,p,g[m+2],15,718787259),p=N(p,o,c,f,g[m+9],21,-343485551),f=y(f,I),p=y(p,M),o=y(o,U),c=y(c,_);return[f,p,o,c]}function yn(g){var S,m="",I=g.length*32;for(S=0;S<I;S+=8)m+=String.fromCharCode(g[S>>5]>>>S%32&255);return m}function wn(g){var S,m=[];for(m[(g.length>>2)-1]=void 0,S=0;S<m.length;S+=1)m[S]=0;var I=g.length*8;for(S=0;S<I;S+=8)m[S>>5]|=(g.charCodeAt(S/8)&255)<<S%32;return m}function Dn(g){return yn(gn(wn(g),g.length*8))}function En(g,S){var m,I=wn(g),M=[],U=[],_;for(M[15]=U[15]=void 0,I.length>16&&(I=gn(I,g.length*8)),m=0;m<16;m+=1)M[m]=I[m]^909522486,U[m]=I[m]^1549556828;return _=gn(M.concat(wn(S)),512+S.length*8),yn(gn(U.concat(_),640))}function tn(g){var S="0123456789abcdef",m="",I,M;for(M=0;M<g.length;M+=1)I=g.charCodeAt(M),m+=S.charAt(I>>>4&15)+S.charAt(I&15);return m}function un(g){return unescape(encodeURIComponent(g))}function Vn(g){return Dn(un(g))}function Tn(g){return tn(Vn(g))}function jn(g,S){return En(un(g),un(S))}function ee(g,S){return tn(jn(g,S))}function Wn(g,S,m){return S?m?jn(S,g):ee(S,g):m?Vn(g):Tn(g)}typeof define=="function"&&define.amd?define(function(){return Wn}):typeof Ae=="object"&&Ae.exports?Ae.exports=Wn:l.md5=Wn})(Vt)});var Xt=kn((ba,$t)=>{"use strict";q();function ia(l,y){return Object.prototype.hasOwnProperty.call(l,y)}$t.exports=function(l,y,D,d){y=y||"&",D=D||"=";var E={};if(typeof l!="string"||l.length===0)return E;var z=/\+/g;l=l.split(y);var k=1e3;d&&typeof d.maxKeys=="number"&&(k=d.maxKeys);var N=l.length;k>0&&N>k&&(N=k);for(var gn=0;gn<N;++gn){var yn=l[gn].replace(z,"%20"),wn=yn.indexOf(D),Dn,En,tn,un;wn>=0?(Dn=yn.substr(0,wn),En=yn.substr(wn+1)):(Dn=yn,En=""),tn=decodeURIComponent(Dn),un=decodeURIComponent(En),ia(E,tn)?Array.isArray(E[tn])?E[tn].push(un):E[tn]=[E[tn],un]:E[tn]=un}return E}});var Jt=kn((_a,Gt)=>{"use strict";q();var ve=function(l){switch(typeof l){case"string":return l;case"boolean":return l?"true":"false";case"number":return isFinite(l)?l:"";default:return""}};Gt.exports=function(l,y,D,d){return y=y||"&",D=D||"=",l===null&&(l=void 0),typeof l=="object"?Object.keys(l).map(function(E){var z=encodeURIComponent(ve(E))+D;return Array.isArray(l[E])?l[E].map(function(k){return z+encodeURIComponent(ve(k))}).join(y):z+encodeURIComponent(ve(l[E]))}).join(y):d?encodeURIComponent(ve(d))+D+encodeURIComponent(ve(l)):""}});var Qt=kn(ye=>{"use strict";q();ye.decode=ye.parse=Xt();ye.encode=ye.stringify=Jt()});var rr=kn((Ta,tr)=>{q();var aa=Ht(),sa=Qt(),oa=/^[0-9a-f]{32}$/;function fa(l){var y={},D={protocol:1,format:1};for(var d in l)D[d]||(y[d]=l[d]);return y}function Zt(l,y){if(l)return typeof l.protocol=="boolean"?l.protocol:l.protocol==="http"?!1:l.protocol==="https"?!0:void 0}function nr(l){return l=typeof l=="string"?l.trim().toLowerCase():"unspecified",l.match(oa)?l:aa(l)}function er(l){var y=sa.stringify(fa(l));return y&&"?"+y||""}var Ea=tr.exports={url:function(l,y,D){var d="//www.gravatar.com/avatar/";y&&y.cdn?(d=y.cdn+"/avatar/",delete y.cdn):(y&&y.protocol&&(D=Zt(y)),typeof D<"u"&&(d=D?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var E=er(y);return d+nr(l)+E},profile_url:function(l,y,D){var d=y!=null&&y.format!=null?String(y.format):"json",E;if(y&&y.cdn)E=y.cdn+"/",delete y.cdn;else{y&&y.protocol&&(D=Zt(y));var E=D&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var z=er(y);return E+nr(l)+"."+d+z}}});var ar=kn((Ia,ir)=>{q();ir.exports=rr()});var sr=kn(ne=>{q();(function(y,D){typeof ne=="object"&&ne&&typeof ne.nodeName!="string"?D(ne):typeof define=="function"&&define.amd?define(["exports"],D):(y.Mustache={},D(y.Mustache))})(ne,function(y){var D=Object.prototype.toString,d=Array.isArray||function(f){return D.call(f)==="[object Array]"};function E(_){return typeof _=="function"}function z(_){return d(_)?"array":typeof _}function k(_){return _.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function N(_,f){return _!=null&&typeof _=="object"&&f in _}var gn=RegExp.prototype.test;function yn(_,f){return gn.call(_,f)}var wn=/\S/;function Dn(_){return!yn(wn,_)}var En={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function tn(_){return String(_).replace(/[&<>"'`=\/]/g,function(p){return En[p]})}var un=/\s*/,Vn=/\s+/,Tn=/\s*=/,jn=/\s*\}/,ee=/#|\^|\/|>|\{|&|=|!/;function Wn(_,f){if(!_)return[];var p=[],o=[],c=[],P=!1,L=!1;function R(){if(P&&!L)for(;c.length;)delete o[c.pop()];else c=[];P=!1,L=!1}var G,B,bn;function Rn(K){if(typeof K=="string"&&(K=K.split(Vn,2)),!d(K)||K.length!==2)throw new Error("Invalid tags: "+K);G=new RegExp(k(K[0])+"\\s*"),B=new RegExp("\\s*"+k(K[1])),bn=new RegExp("\\s*"+k("}"+K[1]))}Rn(f||y.tags);for(var H=new m(_),rn,$,nn,Hn,$n,In;!H.eos();){if(rn=H.pos,nn=H.scanUntil(G),nn)for(var On=0,ze=nn.length;On<ze;++On)Hn=nn.charAt(On),Dn(Hn)?c.push(o.length):L=!0,o.push(["text",Hn,rn,rn+1]),rn+=1,Hn===`
`&&R();if(!H.scan(G))break;if(P=!0,$=H.scan(ee)||"name",H.scan(un),$==="="?(nn=H.scanUntil(Tn),H.scan(Tn),H.scanUntil(B)):$==="{"?(nn=H.scanUntil(bn),H.scan(jn),H.scanUntil(B),$="&"):nn=H.scanUntil(B),!H.scan(B))throw new Error("Unclosed tag at "+H.pos);if($n=[$,nn,rn,H.pos],o.push($n),$==="#"||$==="^")p.push($n);else if($==="/"){if(In=p.pop(),!In)throw new Error('Unopened section "'+nn+'" at '+rn);if(In[1]!==nn)throw new Error('Unclosed section "'+In[1]+'" at '+rn)}else $==="name"||$==="{"||$==="&"?L=!0:$==="="&&Rn(nn)}if(In=p.pop(),In)throw new Error('Unclosed section "'+In[1]+'" at '+H.pos);return S(g(o))}function g(_){for(var f=[],p,o,c=0,P=_.length;c<P;++c)p=_[c],p&&(p[0]==="text"&&o&&o[0]==="text"?(o[1]+=p[1],o[3]=p[3]):(f.push(p),o=p));return f}function S(_){for(var f=[],p=f,o=[],c,P,L=0,R=_.length;L<R;++L)switch(c=_[L],c[0]){case"#":case"^":p.push(c),o.push(c),p=c[4]=[];break;case"/":P=o.pop(),P[5]=c[2],p=o.length>0?o[o.length-1][4]:f;break;default:p.push(c)}return f}function m(_){this.string=_,this.tail=_,this.pos=0}m.prototype.eos=function(){return this.tail===""},m.prototype.scan=function(f){var p=this.tail.match(f);if(!p||p.index!==0)return"";var o=p[0];return this.tail=this.tail.substring(o.length),this.pos+=o.length,o},m.prototype.scanUntil=function(f){var p=this.tail.search(f),o;switch(p){case-1:o=this.tail,this.tail="";break;case 0:o="";break;default:o=this.tail.substring(0,p),this.tail=this.tail.substring(p)}return this.pos+=o.length,o};function I(_,f){this.view=_,this.cache={".":this.view},this.parent=f}I.prototype.push=function(f){return new I(f,this)},I.prototype.lookup=function(f){var p=this.cache,o;if(p.hasOwnProperty(f))o=p[f];else{for(var c=this,P,L,R=!1;c;){if(f.indexOf(".")>0)for(o=c.view,P=f.split("."),L=0;o!=null&&L<P.length;)L===P.length-1&&(R=N(o,P[L])),o=o[P[L++]];else o=c.view[f],R=N(c.view,f);if(R)break;c=c.parent}p[f]=o}return E(o)&&(o=o.call(this.view)),o};function M(){this.cache={}}M.prototype.clearCache=function(){this.cache={}},M.prototype.parse=function(f,p){var o=this.cache,c=o[f];return c==null&&(c=o[f]=Wn(f,p)),c},M.prototype.render=function(f,p,o){var c=this.parse(f),P=p instanceof I?p:new I(p);return this.renderTokens(c,P,o,f)},M.prototype.renderTokens=function(f,p,o,c){for(var P="",L,R,G,B=0,bn=f.length;B<bn;++B)G=void 0,L=f[B],R=L[0],R==="#"?G=this.renderSection(L,p,o,c):R==="^"?G=this.renderInverted(L,p,o,c):R===">"?G=this.renderPartial(L,p,o,c):R==="&"?G=this.unescapedValue(L,p):R==="name"?G=this.escapedValue(L,p):R==="text"&&(G=this.rawValue(L)),G!==void 0&&(P+=G);return P},M.prototype.renderSection=function(f,p,o,c){var P=this,L="",R=p.lookup(f[1]);function G(Rn){return P.render(Rn,p,o)}if(R){if(d(R))for(var B=0,bn=R.length;B<bn;++B)L+=this.renderTokens(f[4],p.push(R[B]),o,c);else if(typeof R=="object"||typeof R=="string"||typeof R=="number")L+=this.renderTokens(f[4],p.push(R),o,c);else if(E(R)){if(typeof c!="string")throw new Error("Cannot use higher-order sections without the original template");R=R.call(p.view,c.slice(f[3],f[5]),G),R!=null&&(L+=R)}else L+=this.renderTokens(f[4],p,o,c);return L}},M.prototype.renderInverted=function(f,p,o,c){var P=p.lookup(f[1]);if(!P||d(P)&&P.length===0)return this.renderTokens(f[4],p,o,c)},M.prototype.renderPartial=function(f,p,o){if(o){var c=E(o)?o(f[1]):o[f[1]];if(c!=null)return this.renderTokens(this.parse(c),p,o,c)}},M.prototype.unescapedValue=function(f,p){var o=p.lookup(f[1]);if(o!=null)return o},M.prototype.escapedValue=function(f,p){var o=p.lookup(f[1]);if(o!=null)return y.escape(o)},M.prototype.rawValue=function(f){return f[1]},y.name="mustache.js",y.version="2.3.2",y.tags=["{{","}}"];var U=new M;return y.clearCache=function(){return U.clearCache()},y.parse=function(f,p){return U.parse(f,p)},y.render=function(f,p,o){if(typeof f!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+z(f)+'" was given as the first argument for mustache#render(template, view, partials)');return U.render(f,p,o)},y.to_html=function(f,p,o,c){var P=y.render(f,p,o);if(E(c))c(P);else return P},y.escape=tn,y.Scanner=m,y.Context=I,y.Writer=M,y})});var fr=kn((ka,or)=>{q();var tt=(Kt(),ta(Bt)),Un=Yt(),la=ar(),pa=sr(),ua=new Date,da=ua.getFullYear();function qn(l){switch(l.substr(5,2)){case"01":return"January ";case"02":return"February ";case"03":return"March ";case"04":return"April ";case"05":return"May ";case"06":return"June ";case"07":return"July ";case"08":return"August ";case"09":return"September ";case"10":return"October ";case"11":return"November ";case"12":return"December "}}function ca(l){l.basics.capitalName=l.basics.name.toUpperCase(),l.basics&&l.basics.email&&(l.basics.gravatar=la.url(l.basics.email,{s:"200",r:"pg",d:"mm"})),(l.basics.picture||l.basics.gravatar)&&(l.photo=l.basics.picture?l.basics.picture:l.basics.gravatar),Un.each(l.basics.profiles,function(d){switch(d.network.toLowerCase()){case"google-plus":case"googleplus":d.iconClass="fa fa-google-plus";break;case"flickr":case"flicker":d.iconClass="fa fa-flickr";break;case"dribbble":case"dribble":d.iconClass="fa fa-dribbble";break;case"codepen":d.iconClass="fa fa-codepen";break;case"soundcloud":d.iconClass="fa fa-soundcloud";break;case"reddit":d.iconClass="fa fa-reddit";break;case"tumblr":case"tumbler":d.iconClass="fa fa-tumblr";break;case"stack-overflow":case"stackoverflow":d.iconClass="fa fa-stack-overflow";break;case"blog":case"rss":d.iconClass="fa fa-rss";break;case"gitlab":d.iconClass="fa fa-gitlab";break;case"keybase":d.iconClass="fa fa-key";break;default:d.iconClass="fa fa-"+d.network.toLowerCase()}d.url?d.text=d.url:d.text=d.network+": "+d.username}),l.work&&l.work.length&&(l.workBool=!0,Un.each(l.work,function(d){d.startDate&&(d.startDateYear=(d.startDate||"").substr(0,4),d.startDateMonth=qn(d.startDate||"")),d.endDate?(d.endDateYear=(d.endDate||"").substr(0,4),d.endDateMonth=qn(d.endDate||"")):d.endDateYear="Present",d.highlights&&d.highlights[0]&&d.highlights[0]!=""&&(d.boolHighlights=!0)})),l.volunteer&&l.volunteer.length&&(l.volunteerBool=!0,Un.each(l.volunteer,function(d){d.startDate&&(d.startDateYear=(d.startDate||"").substr(0,4),d.startDateMonth=qn(d.startDate||"")),d.endDate?(d.endDateYear=(d.endDate||"").substr(0,4),d.endDateMonth=qn(d.endDate||"")):d.endDateYear="Present",d.highlights&&d.highlights[0]&&d.highlights[0]!=""&&(d.boolHighlights=!0)})),l.education&&l.education.length&&l.education[0].institution&&(l.educationBool=!0,Un.each(l.education,function(d){!d.area||!d.studyType?d.educationDetail=(d.area==null?"":d.area)+(d.studyType==null?"":d.studyType):d.educationDetail=d.area+", "+d.studyType,d.startDate?(d.startDateYear=d.startDate.substr(0,4),d.startDateMonth=qn(d.startDate||"")):d.endDateMonth="",d.endDate?(d.endDateYear=d.endDate.substr(0,4),d.endDateMonth=qn(d.endDate||""),d.endDateYear>da&&(d.endDateYear+=" (expected)")):(d.endDateYear="Present",d.endDateMonth=""),d.courses&&d.courses[0]&&d.courses[0]!=""&&(d.educationCourses=!0)})),l.awards&&l.awards.length&&l.awards[0].title&&(l.awardsBool=!0,Un.each(l.awards,function(d){d.year=(d.date||"").substr(0,4),d.day=(d.date||"").substr(8,2),d.month=qn(d.date||"")})),l.publications&&l.publications.length&&l.publications[0].name&&(l.publicationsBool=!0,Un.each(l.publications,function(d){d.year=(d.releaseDate||"").substr(0,4),d.day=(d.releaseDate||"").substr(8,2),d.month=qn(d.releaseDate||"")})),l.skills&&l.skills.length&&(l.skills[0].name&&(l.skillsBool=!0),Un.each(l.skills,function(d){let E=[];Un.each(d.keywords,function(z){let k=z.indexOf("-"),N={keyword:k<1?z:z.substr(0,k),level:k<1?"0":z.slice(k+1,z.length)};E.push(N)}),d.ratings=E}),l.skillsLeft=l.skills.slice(0,l.skills.length/2),l.skillsRight=l.skills.slice(l.skills.length/2,l.skills.length)),l.interests&&l.interests.length&&l.interests[0].name&&(l.interestsBool=!0),l.languages&&l.languages.length&&l.languages[0].language&&(l.languagesBool=!0),l.references&&l.references.length&&l.references[0].name&&(l.referencesBool=!0),l.css=tt.readFileSync("//style.css","utf-8"),l.printcss=tt.readFileSync("//print.css","utf-8");var y=tt.readFileSync("//resume.template","utf8"),D=pa.render(y,l);return D}or.exports={render:ca}});q();var Yn=ea(fr(),1),lr=Yn.default??Yn,La=lr.render??Yn.render,Fa=lr.pdfRenderOptions??Yn.pdfRenderOptions;export{Fa as pdfRenderOptions,La as render};
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
