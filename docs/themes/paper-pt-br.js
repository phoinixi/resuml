var Vt=Object.create;var J=Object.defineProperty;var Ft=Object.getOwnPropertyDescriptor;var jt=Object.getOwnPropertyNames;var zt=Object.getPrototypeOf,Ut=Object.prototype.hasOwnProperty;var F=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Be=(e,t)=>()=>(e&&(t=e(e=0)),t);var g=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Wt=(e,t)=>{for(var n in t)J(e,n,{get:t[n],enumerable:!0})},Ve=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of jt(t))!Ut.call(e,r)&&r!==n&&J(e,r,{get:()=>t[r],enumerable:!(i=Ft(t,r))||i.enumerable});return e};var Gt=(e,t,n)=>(n=e!=null?Vt(zt(e)):{},Ve(t||!e||!e.__esModule?J(n,"default",{value:e,enumerable:!0}):n,e)),Fe=e=>Ve(J({},"__esModule",{value:!0}),e);var p=Be(()=>{});var fe={};Wt(fe,{createReadStream:()=>Ze,createWriteStream:()=>Qe,default:()=>Kt,existsSync:()=>We,lstatSync:()=>Je,mkdirSync:()=>Ke,readFileSync:()=>ze,readdirSync:()=>Ue,rmdirSync:()=>Xe,statSync:()=>ue,unlinkSync:()=>Ye,writeFileSync:()=>Ge});function pe(e){return String(e).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function je(e){var t=pe(e);if(Y[t]!==void 0)return Y[t];for(var n=Object.keys(Y),i=0;i<n.length;i++)if(t.endsWith("/"+n[i])||t===n[i])return Y[n[i]]}function ce(e){var t=pe(e);if(X[t]!==void 0)return X[t];for(var n=Object.keys(X),i=0;i<n.length;i++)if(t.endsWith("/"+n[i])||t===n[i])return X[n[i]]}var Y,X,ze,Ue,We,Ge,Ke,ue,Je,Ye,Xe,Ze,Qe,Kt,de=Be(()=>{"use strict";p();Y={"css/print.css":`
body, html {
  background-color: white;
  padding-top: 1.5em;
}

.paper {
  width:100%;
  border: 0;

  padding-top: 0;
}

header p {
  font-size: 1.3em;
}

.subtitle {
  font-size: 0.7em;
}

.header-pic {
  float:left;
}

.profiles {
  display:none;
}

.content {
  page-break-inside:avoid;
  page-break-after:auto;
}

.header-text {
  float:left;
  margin-top: -1.6em;
}

.content-wrapper > .content:first-child {
  padding-top: 2em;
}

.content:last-child {
  padding-bottom: 0;
}

.content-cat {
  width:30%;
  color:black;
  text-align: left;
  padding-left: 0;
}

.content-cat p {
  font-size:0.6em;
  font-weight: 600;
}

header p, .content-text, .work-listing p, .content-text ul li:first-child, .work-listing .highlight, .content-text.skills-listing > ul > li > .highlight {
  color:black;
}

.content-text.skills-listing > ul > li span, .subtitle {
  color:#212121;
}

.content-text ul:last-child {
  margin-bottom: 0.25em;
}

.content-text ul li:first-child {
  width:50%;
}

.profiles-listing ul li:first-child {
  width:32%;
}

div.content-text.skills-listing > ul > li {
  width:33%;
}

.work-listing p {
  margin-bottom: 0.1em;
}

div.content-text.skills-listing > ul > li > p {
  margin-top: 0.4em;
  margin-bottom: 0.5em;
}

div.content-text.skills-listing > ul > li {
  padding-left: 1.5em;
}

div.content-text.skills-listing > ul > li:first-child {
  padding-left: 2em;
}

.note {
  display:none;
}

.content-text:hover {
  border-left:1px solid #eeeeee;
}

.content-text ul li a:hover {
  color:#4fc3f7;
}

.highlight:hover, .content-text.skills-listing > ul > li > .highlight:hover {
  border-left:1px solid #eeeeee;
}

.big-text {
  padding-top: 0;
}

.content.work-content:nth-of-type(n+8) {
    display: none;
}
`,"css/style.css":`body, html {
  padding-top:2.5em;
  margin:0;
  background-color:#fafafa;
}

.note {
  display:block;
  position: absolute;
  top:10px;
  left:10px;

  font-family: "Open Sans";
  font-size: 0.6em;
}

.new {
  background-color: #81C784;

  border: 1px solid #757575;
  padding: 1px;
  border-radius: 4px;

}

/* Header */

header {
  width:100%;
  vertical-align: middle;
  text-align: center;
 
}

.header-content {
  display: inline-block;
}

.pic {
  margin: 0 auto;
  margin-top:-2.5em;
  
  border-radius:10em;
  height:4em;
  width:4em;
  
  border: 2px solid #e0e0e0;
  transition : all 0.5s linear;
  
}

@-webkit-keyframes wiggle {
  0%   {
    transform: rotate(0deg);
  }
  25%  {
    transform: rotate(-30deg);
  }
  50%  {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.pic:hover {
  /*Webkit fix*/
  -webkit-transform: translateZ(0);
  
  cursor:pointer;
  
  -webkit-animation: wiggle 0.7s cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

.header-text {
  margin-top:0.5em;
  margin-left:1em;
}

header p {
  text-align:center;
  font-family: "Merriweather";
  
  margin:0;
  
  color: #212121;
}

.first-name {
   font-size: 1.05em;
}

.subtitle {
  font-family: "Merriweather";
  padding-top:.3em;
  font-size:0.55em;
  font-weight:500;
  color: #424242;
}

/* Information */

.paper {
  margin: 0 auto;
  margin-bottom:1em;
  
  background-color:white;
  width:60%;
  
  padding:0.5em 0 0.5em 0;
  
  border-top: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  border-bottom: 3px solid #e0e0e0;
  border-radius:3px;
}

@media(max-width:992px) {
  .paper {
    width:80%;
  }
}

/* Content Part */

.content-wrapper {
  padding-right:7.25%;
}

.content {
  display:table;
  width:100%;
  
  padding-top:1.5em;
  
  /*border-top: 1px solid #eeeeee;*/
}

.content:last-child {
  margin-bottom: 2em;
}

body > div > article > div > section:last-child {
  padding-bottom:1.5em;
}

.row {
    display:table-row;
}
.row div {
    display:table-cell;
}

.content-cat {
  font-family: "Merriweather";
  font-variant:small-caps;
  font-weight:300;
  letter-spacing: 1px;
  
  color: #212121;
  
  font-size:0.975em;
  
  text-align:center;
  vertical-align:middle;

  padding-left:6.66%;
  width:30%;
}

.content-cat p {
  font-size:0.55em;
  font-weight:600;
  
  margin-bottom:0;
}

.content-text {
  border-left:1px solid #e0e0e0;
  transition: border 0.66s ease-in;
}

.big-text {
  vertical-align:top;
}

.content-text ul {
  padding:0;
  margin:0;
  margin-top:0.15em;
  
  width:85%;
  margin-left:1.5em;
}

.content-text ul:last-child {
  margin-bottom:0.5em;
}

.content-text ul li {
  font-family: "Open Sans";
  font-size:0.7em;
  
  display:inline-block;
  
}

.content-text ul li:first-child {
  width:35%;
  
  color: #424242;
  
  font-weight:600;
}

.content-text ul li a, div.content-text.work-listing.education-listing > p > strong > a {
  text-decoration: none;
  color: #0277bd;
}

.content-text ul li a:hover {
  color:#4fc3f7;
}

.work-listing p {
  font-family: "Open Sans";
  font-size:0.7em;
  
  color: #424242;
  
  margin-left:2em;
  margin-top:0.45em;
  margin-bottom: 0.45em;
}

div.content-text.work-listing.education-listing > p:nth-child(2) {
  margin-top:0.25em;
}

.work-listing .highlight {
  font-family: "Open Sans";
  font-size:0.7em;
  font-weight:400;
  
  color: #424242;
  
  margin-left:3.25em;
  padding-left:0.5em;
  
  border-left:1px solid #e0e0e0;
  
}

.education-listing > .heading {
  font-weight:600;
  
  margin-top:0.75em;
  margin-left:2em;
}

.education-listing > .highlight {
  margin-left:3.25em;
}

.highlight {
  transition: border .33s ease-in;
}

.profiles-listing ul li, .profiles-listing ul li:first-child {
  width:32%;
  font-weight: normal;
}

.work-content, .education-content {
  padding-top: .75em;
}

section.content.education-content > div > div.content-cat {
  vertical-align: top;
}

div.content-text.skills-listing > p {
  font-family: "Open Sans";
  font-size:0.7em;
  font-weight:400;

  margin-left: 2em;
  margin-top: 0.45em;
  margin-bottom: 0.45em;
}

div.content-text.skills-listing > p > {
  color:#212121;
}

`,"package.json":`{
  "name": "jsonresume-theme-paper-pt-br",
  "version": "0.3.3",
  "description": "A theme for JSON Resume in Portuguese (Brazil)",
  "author": "Tim Daubensch\xFCtz",
  "repository": {
    "type": "git",
    "url": "https://github.com/gustavorps/jsonresume-theme-paper-pt-br"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  },
  "homepage": "https://github.com/gustavorps/jsonresume-theme-paper-pt-br",
  "main": "index.js",
  "scripts": {
    "start": "resume serve"
  },
  "devDependencies": {},
  "keywords": [
    "jsonresume",
    "json",
    "resume"
  ]
}
`,"resume.template":`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">
  <title>{{#resume.basics}}{{name}}{{/resume.basics}}</title>
  <link href='http://fonts.googleapis.com/css?family=Merriweather:400,300,700' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>
  <style>{{{css}}}</style>
  <style media="print">{{{print}}}</style>
</head>
<body>
  <div class="resume-wrapper">
    <article class="paper">
      {{#resume.basics}}
        <header>
          <div class="header-content">
            {{#if picture}}
              <div class="header-pic">
                <img src="{{picture}}" class="pic" />
              </div>
            {{/if}}
            <div class="header-text">
              <p>
                {{name}}
              </p>
              <p class="subtitle">{{label}}</p>
              <p class="subtitle">
                {{#location}}
                  {{#ifCond address '||' city}}
                      {{#if address}}
                        {{address}}
                      {{/if}}
                      {{#if city}}
                        {{city}}
                        {{#if region}}
                          , {{region}}
                        {{/if}}
                        {{#if postalCode}}
                           - {{postalCode}}
                        {{/if}}
                      {{/if}}
                  {{/ifCond}}
                {{/location}}
              </p>
            </div>
          </div>
        </header>
        <div class="content-wrapper">
          <!-- CONTACT -->
          <section class="content">
            <div class="row">
              <div class="content-cat">
                Contato
              </div>
              <div class="content-text">
                {{#if website}}
                  <ul>
                    <li>Website</li>
                    <li>{{website}}</li>
                  </ul>
                {{/if}}
                {{#if email}}
                  <ul>
                    <li>Email</li>
                    <li>{{email}}</li>
                  </ul>
                {{/if}}
                {{#if phone}}
                  <ul>
                    <li>Telefone</li>
                    <li>{{phone}}</li>
                  </ul>
                {{/if}}
              </div>
            </div>
          </section>
      {{/resume.basics}}
        <!-- LANGUAGE -->
          {{#if resume.languages.length}}
            <section class="content">
              <div class="row">
                <div class="content-cat">Idiomas</div>
                <div class="content-text">
                  {{#each resume.languages}}
                    <ul>
                      {{#if language}}
                        <li>{{language}}</li>
                      {{/if}}
                      {{#if fluency}}
                        <li>{{fluency}}</li>
                      {{/if}}
                    </ul>
                  {{/each}}
                </div>
              </div>
            </section>
          {{/if}}
          {{#resume.basics}}
            <!-- PROFILES -->
            {{#if profiles.length}}
              <section class="content profiles">
                <div class="row">
                  <div class="content-cat">
                    Perfis
                  </div>
                  <div class="content-text profiles-listing">
                    <ul>
                      {{#each profiles}}
                        {{#if network}}
                          <li>
                            <a href="{{url}}" target="_blank">
                              {{network}}
                            </a>
                          </li>
                        {{/if}}
                      {{/each}}
                    </ul>
                  </div>
                </div>
              </section>
            {{/if}}
          {{/resume.basics}}
          {{#if resume.work.length}}
            {{#foreach resume.work}}
              {{#if $first}}
                <section class="content">
              {{else}}
                <section class="content work-content">
              {{/if}}
                  <div class="row">
                    <div class="content-cat big-text">
                      {{#if $first}}
                        Exp\xEAriencia
                      {{/if}}
                      {{#if startDate}}
                        {{#if endDate}}
                          <p>{{startDate}} at\xE9 {{endDate}}</p>
                        {{/if}}
                      {{/if}}
                    </div>
                    <div class="content-text work-listing education-listing">
                      {{#ifCond company '||' position}}
                        {{#if $first}}
                          <p style="margin-top:2.4em;">
                        {{else}}
                          <p>
                        {{/if}}
                        {{#ifCond website '&&' company}}
                          <strong>{{position}}</strong>
                          | <strong><a href="{{website}}">{{company}}:</a></strong>
                        {{else}}
                          {{#if company.length}}
                            <strong>{{position}}</strong>
                            | <strong>{{company}}:</strong>
                          {{else}}
                            <strong>{{position}}:</strong>
                          {{/if}}
                        {{/ifCond}}
                        </p>
                      {{/ifCond}}
                      {{#if summary}}
                        <p>{{summary}}</p>
                      {{/if}}
                      {{#if highlights.length}}
                        {{#each highlights}}
                          <p class="highlight">{{.}}</p>
                        {{/each}}
                      {{/if}}
                    </div>
                  </div>
                </section>
            {{/foreach}}
          {{/if}}
          {{#if resume.volunteer.length}}
            {{#each resume.volunteer}}
              <section class="content">
                <div class="row">
                  <div class="content-cat big-text">
                    {{#if organization}}
                      {{organization}}
                    {{/if}}
                    {{#if startDate}}
                      {{#if endDate}}
                        <p>{{startDate}} till {{endDate}}</p>
                      {{/if}}
                    {{/if}}
                  </div>
                  <div class="content-text work-listing">
                    {{#if summary}}
                      <p>
                        {{summary}}
                      </p>
                    {{/if}}
                    {{#if highlights.length}}
                      {{#each highlights}}
                        <p class="highlight">{{.}}</p>
                      {{/each}}
                    {{/if}}
                  </div>
                </div>
              </section>
            {{/each}}
          {{/if}}
          {{#if resume.education.length}}
            {{#foreach resume.education}}
              {{#if $first}}
                <section class="content">
              {{else}}
                <section class="content education-content">
              {{/if}}
                  <div class="row">
                    <div class="content-cat big-text">
                      {{#if $first}}
                        Forma\xE7\xE3o
                      {{/if}}
                      {{#if startDate}}
                        {{#if endDate}}
                          <p>{{startDate}} till {{endDate}}</p>
                        {{/if}}
                      {{/if}}
                    </div>
                    <div class="content-text work-listing education-listing">
                      {{#if institution}}
                        {{#if $first}}
                          <p class="heading" style="margin-top:2.35em;">{{institution}}
                        {{else}}
                          <p class="heading">{{institution}}
                        {{/if}}
                        {{#if area}}
                          |
                          <em>
                            {{#if studyType}}
                            {{studyType}}:
                            {{/if}}
                            </strong>{{area}}{{#if gpa}} ({{gpa}}){{/if}}</strong>
                          </em>
                        {{/if}}
                        {{#if courses.length}}
                          <p>{{#commalist courses}}{{.}}{{/commalist}}</p>
                          <!-- <ul class="courses">
                            {{#foreach courses}}
                              <li class="course">{{.}}</li>
                            {{/foreach}}
                          </ul> -->
                        {{/if}}
                          </p>
                      {{/if}}
                    </div>
                  </div>
                </section>
            {{/foreach}}
          {{/if}}
          {{#if resume.awards.length}}
            {{#foreach resume.awards}}
              <section class="content">
                <div class="row">
                  <div class="content-cat big-text">
                    {{#if $first}}
                      Premia\xE7\xF5es & Reconhecimentos
                    {{/if}}
                    {{#if title}}
                      <p>{{title}}</p>
                    {{/if}}
                    {{#if date}}
                      <p style="margin-top:0.25em;">{{date}}</p>
                    {{/if}}
                  </div>
                  <div class="content-text work-listing">
                    {{#if awarder}}
                      <strong><p class="heading">{{awarder}}</p></strong>
                    {{/if}}
                    {{#if summary}}
                      <p class="highlight">{{summary}}</p>
                    {{/if}}
                  </div>
                </div>
              </section>
            {{/foreach}}
          {{/if}}
          {{#if resume.skills.length}}
          <section class="content">
            <div class="row">
              <div class="content-cat">
                H\xE1bilidades
              </div>
              <div class="content-text skills-listing">
                {{#foreach resume.skills}}
                  <p>
                    <span class="name">
                      {{#if name}}
                        <strong>
                          {{name}}{{#if level}}{{else}}:{{/if}}
                        </strong>
                      {{/if}}
                    </span>
                    {{#if level}}
                      <span>({{level}}):</span>
                    {{/if}}
                    {{#if keywords.length}}
                      {{#commalist keywords}}{{.}}{{/commalist}}
                    {{/if}}
                  </p>
                {{/foreach}}
              </div>
            </div>
          </section>
          {{/if}}
          {{#if resume.interests.length}}
            <section class="content">
              <div class="row">
                <div class="content-cat">
                  Interesses
                </div>
                <div class="content-text skills-listing">
                  <p>
                    {{#foreach resume.interests}}
                      {{#if keywords.length}}
                        <span class="name">
                          {{#if name}}
                            <strong>
                              {{name}}
                            </strong>
                          {{/if}}
                        </span></br>
                        {{#if keywords.length}}
                          : {{#commalist keywords}}{{.}}{{/commalist}}
                        {{/if}}
                      {{else}}
                          {{#if $first}}
                            <strong>{{name}}</strong>
                          {{else}}
                             , <strong>{{name}}</strong>
                          {{/if}}
                      {{/if}}
                    {{/foreach}}
                    </p>
                </div>
              </div>
            </section>
          {{/if}}
        </div>
    </article>
  </div>
</body>
</html>
`},X={css:["print.css","style.css"],".":["README.md","css","index.js","package.json","resume.template"]};ze=function(e,t){var n=je(e);return n!==void 0?n:""},Ue=function(e,t){var n=ce(e);return n===void 0&&(n=[]),t&&t.withFileTypes?n.map(function(i){var r=pe(e)+"/"+i,s=ce(r)!==void 0;return{name:i,isFile:function(){return!s},isDirectory:function(){return s}}}):n},We=function(e){return je(e)!==void 0||ce(e)!==void 0},Ge=function(){},Ke=function(){},ue=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Je=ue,Ye=function(){},Xe=function(){},Ze=function(){return{pipe:function(e){return e},on:function(){return this}}},Qe=function(){return{write:function(){},end:function(){},on:function(){return this}}},Kt={readFileSync:ze,readdirSync:Ue,existsSync:We,writeFileSync:Ge,mkdirSync:Ke,statSync:ue,lstatSync:Je,unlinkSync:Ye,rmdirSync:Xe,createReadStream:Ze,createWriteStream:Qe}});var ge=g(et=>{"use strict";p();function $e(e){this.string=e}$e.prototype.toString=function(){return""+this.string};et.default=$e});var q=g(N=>{"use strict";p();var Jt=ge().default,Yt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Xt=/[&<>"'`]/g,Zt=/[&<>"'`]/;function Qt(e){return Yt[e]}function $t(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}N.extend=$t;var me=Object.prototype.toString;N.toString=me;var Z=function(e){return typeof e=="function"};Z(/x/)&&(Z=function(e){return typeof e=="function"&&me.call(e)==="[object Function]"});var Z;N.isFunction=Z;var tt=Array.isArray||function(e){return e&&typeof e=="object"?me.call(e)==="[object Array]":!1};N.isArray=tt;function en(e){return e instanceof Jt?e.toString():e==null?"":e?(e=""+e,Zt.test(e)?e.replace(Xt,Qt):e):e+""}N.escapeExpression=en;function tn(e){return!e&&e!==0?!0:!!(tt(e)&&e.length===0)}N.isEmpty=tn;function nn(e,t){return(e?e+".":"")+t}N.appendContextPath=nn});var _=g(it=>{"use strict";p();var ve=["description","fileName","lineNumber","message","name","number","stack"];function nt(e,t){var n;t&&t.firstLine&&(n=t.firstLine,e+=" - "+n+":"+t.firstColumn);for(var i=Error.prototype.constructor.call(this,e),r=0;r<ve.length;r++)this[ve[r]]=i[ve[r]];n&&(this.lineNumber=n,this.column=t.firstColumn)}nt.prototype=new Error;it.default=nt});var A=g(P=>{"use strict";p();var b=q(),be=_().default,rn="2.0.0";P.VERSION=rn;var sn=6;P.COMPILER_REVISION=sn;var an={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};P.REVISION_CHANGES=an;var rt=b.isArray,ke=b.isFunction,st=b.toString,at="[object Object]";function ye(e,t){this.helpers=e||{},this.partials=t||{},on(this)}P.HandlebarsEnvironment=ye;ye.prototype={constructor:ye,logger:j,log:ot,registerHelper:function(e,t){if(st.call(e)===at){if(t)throw new be("Arg not supported with multiple helpers");b.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){st.call(e)===at?b.extend(this.partials,e):this.partials[e]=t},unregisterPartial:function(e){delete this.partials[e]}};function on(e){e.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new be("Missing helper: '"+arguments[arguments.length-1].name+"'")}),e.registerHelper("blockHelperMissing",function(t,n){var i=n.inverse,r=n.fn;if(t===!0)return r(this);if(t===!1||t==null)return i(this);if(rt(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):i(this);if(n.data&&n.ids){var s=Q(n.data);s.contextPath=b.appendContextPath(n.data.contextPath,n.name),n={data:s}}return r(t,n)}),e.registerHelper("each",function(t,n){if(!n)throw new be("Must pass iterator to #each");var i=n.fn,r=n.inverse,s=0,o="",a,c;if(n.data&&n.ids&&(c=b.appendContextPath(n.data.contextPath,n.ids[0])+"."),ke(t)&&(t=t.call(this)),n.data&&(a=Q(n.data)),t&&typeof t=="object")if(rt(t))for(var l=t.length;s<l;s++)a&&(a.index=s,a.first=s===0,a.last=s===t.length-1,c&&(a.contextPath=c+s)),o=o+i(t[s],{data:a});else for(var u in t)t.hasOwnProperty(u)&&(a&&(a.key=u,a.index=s,a.first=s===0,c&&(a.contextPath=c+u)),o=o+i(t[u],{data:a}),s++);return s===0&&(o=r(this)),o}),e.registerHelper("if",function(t,n){return ke(t)&&(t=t.call(this)),!n.hash.includeZero&&!t||b.isEmpty(t)?n.inverse(this):n.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),e.registerHelper("with",function(t,n){ke(t)&&(t=t.call(this));var i=n.fn;if(b.isEmpty(t))return n.inverse(this);if(n.data&&n.ids){var r=Q(n.data);r.contextPath=b.appendContextPath(n.data.contextPath,n.ids[0]),n={data:r}}return i(t,n)}),e.registerHelper("log",function(t,n){var i=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;e.log(i,t)}),e.registerHelper("lookup",function(t,n){return t&&t[n]})}var j={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(j.level<=e){var n=j.methodMap[e];typeof console<"u"&&console[n]&&console[n].call(console,t)}}};P.logger=j;var ot=j.log;P.log=ot;var Q=function(e){var t=b.extend({},e);return t._parent=e,t};P.createFrame=Q});var ht=g(B=>{"use strict";p();var Se=q(),H=_().default,ln=A().COMPILER_REVISION,lt=A().REVISION_CHANGES,hn=A().createFrame;function cn(e){var t=e&&e[0]||1,n=ln;if(t!==n)if(t<n){var i=lt[n],r=lt[t];throw new H("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+r+").")}else throw new H("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}B.checkRevision=cn;function pn(e,t){if(!t)throw new H("No environment passed to template");if(!e||!e.main)throw new H("Unknown template object: "+typeof e);t.VM.checkRevision(e.compiler);var n=function(s,o,a,c,l,u,h,w,M){l&&(c=Se.extend({},c,l));var O=t.VM.invokePartial.call(this,s,a,c,u,h,w,M);if(O==null&&t.compile){var Te={helpers:u,partials:h,data:w,depths:M};h[a]=t.compile(s,{data:w!==void 0,compat:e.compat},t),O=h[a](c,Te)}if(O!=null){if(o){for(var S=O.split(`
`),E=0,ae=S.length;E<ae&&!(!S[E]&&E+1===ae);E++)S[E]=o+S[E];O=S.join(`
`)}return O}else throw new H("The partial "+a+" could not be compiled when running in runtime-only mode")},i={lookup:function(s,o){for(var a=s.length,c=0;c<a;c++)if(s[c]&&s[c][o]!=null)return s[c][o]},lambda:function(s,o){return typeof s=="function"?s.call(o):s},escapeExpression:Se.escapeExpression,invokePartial:n,fn:function(s){return e[s]},programs:[],program:function(s,o,a){var c=this.programs[s],l=this.fn(s);return o||a?c=$(this,s,l,o,a):c||(c=this.programs[s]=$(this,s,l)),c},data:function(s,o){for(;s&&o--;)s=s._parent;return s},merge:function(s,o){var a=s||o;return s&&o&&s!==o&&(a=Se.extend({},o,s)),a},noop:t.VM.noop,compilerInfo:e.compiler},r=function(s,o){o=o||{};var a=o.data;r._setup(o),!o.partial&&e.useData&&(a=dn(s,a));var c;return e.useDepths&&(c=o.depths?[s].concat(o.depths):[s]),e.main.call(i,s,i.helpers,i.partials,a,c)};return r.isTop=!0,r._setup=function(s){s.partial?(i.helpers=s.helpers,i.partials=s.partials):(i.helpers=i.merge(s.helpers,t.helpers),e.usePartial&&(i.partials=i.merge(s.partials,t.partials)))},r._child=function(s,o,a){if(e.useDepths&&!a)throw new H("must pass parent depths");return $(i,s,e[s],o,a)},r}B.template=pn;function $(e,t,n,i,r){var s=function(o,a){return a=a||{},n.call(e,o,e.helpers,e.partials,a.data||i,r&&[o].concat(r))};return s.program=t,s.depth=r?r.length:0,s}B.program=$;function un(e,t,n,i,r,s,o){var a={partial:!0,helpers:i,partials:r,data:s,depths:o};if(e===void 0)throw new H("The partial "+t+" could not be found");if(e instanceof Function)return e(n,a)}B.invokePartial=un;function fn(){return""}B.noop=fn;function dn(e,t){return(!t||!("root"in t))&&(t=t?hn(t):{},t.root=e),t}});var dt=g(ft=>{"use strict";p();var ct=A(),gn=ge().default,mn=_().default,xe=q(),pt=ht(),ut=function(){var e=new ct.HandlebarsEnvironment;return xe.extend(e,ct),e.SafeString=gn,e.Exception=mn,e.Utils=xe,e.escapeExpression=xe.escapeExpression,e.VM=pt,e.template=function(t){return pt.template(t,e)},e},ee=ut();ee.create=ut;ee.default=ee;ft.default=ee});var we=g(mt=>{"use strict";p();var gt=_().default;function v(e){e=e||{},this.firstLine=e.first_line,this.firstColumn=e.first_column,this.lastColumn=e.last_column,this.lastLine=e.last_line}var z={ProgramNode:function(e,t,n){v.call(this,n),this.type="program",this.statements=e,this.strip=t},MustacheNode:function(e,t,n,i,r){if(v.call(this,r),this.type="mustache",this.strip=i,n!=null&&n.charAt){var s=n.charAt(3)||n.charAt(2);this.escaped=s!=="{"&&s!=="&"}else this.escaped=!!n;e instanceof z.SexprNode?this.sexpr=e:this.sexpr=new z.SexprNode(e,t),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(e,t,n){v.call(this,n),this.type="sexpr",this.hash=t;var i=this.id=e[0],r=this.params=e.slice(1);this.isHelper=!!(r.length||t),this.eligibleHelper=this.isHelper||i.isSimple},PartialNode:function(e,t,n,i,r){v.call(this,r),this.type="partial",this.partialName=e,this.context=t,this.hash=n,this.strip=i,this.strip.inlineStandalone=!0},BlockNode:function(e,t,n,i,r){v.call(this,r),this.type="block",this.mustache=e,this.program=t,this.inverse=n,this.strip=i,n&&!t&&(this.isInverse=!0)},RawBlockNode:function(e,t,n,i){if(v.call(this,i),e.sexpr.id.original!==n)throw new gt(e.sexpr.id.original+" doesn't match "+n,this);t=new z.ContentNode(t,i),this.type="block",this.mustache=e,this.program=new z.ProgramNode([t],{},i)},ContentNode:function(e,t){v.call(this,t),this.type="content",this.original=this.string=e},HashNode:function(e,t){v.call(this,t),this.type="hash",this.pairs=e},IdNode:function(e,t){v.call(this,t),this.type="ID";for(var n="",i=[],r=0,s="",o=0,a=e.length;o<a;o++){var c=e[o].part;if(n+=(e[o].separator||"")+c,c===".."||c==="."||c==="this"){if(i.length>0)throw new gt("Invalid path: "+n,this);c===".."?(r++,s+="../"):this.isScoped=!0}else i.push(c)}this.original=n,this.parts=i,this.string=i.join("."),this.depth=r,this.idName=s+this.string,this.isSimple=e.length===1&&!this.isScoped&&r===0,this.stringModeValue=this.string},PartialNameNode:function(e,t){v.call(this,t),this.type="PARTIAL_NAME",this.name=e.original},DataNode:function(e,t){v.call(this,t),this.type="DATA",this.id=e,this.stringModeValue=e.stringModeValue,this.idName="@"+e.stringModeValue},StringNode:function(e,t){v.call(this,t),this.type="STRING",this.original=this.string=this.stringModeValue=e},NumberNode:function(e,t){v.call(this,t),this.type="NUMBER",this.original=this.number=e,this.stringModeValue=Number(e)},BooleanNode:function(e,t){v.call(this,t),this.type="BOOLEAN",this.bool=e,this.stringModeValue=e==="true"},CommentNode:function(e,t){v.call(this,t),this.type="comment",this.comment=e,this.strip={inlineStandalone:!0}}};mt.default=z});var kt=g(vt=>{"use strict";p();var vn=(function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(r,s,o,a,c,l,u){var h=l.length-1;switch(c){case 1:return a.prepareProgram(l[h-1].statements,!0),l[h-1];break;case 2:this.$=new a.ProgramNode(a.prepareProgram(l[h]),{},this._$);break;case 3:this.$=l[h];break;case 4:this.$=l[h];break;case 5:this.$=l[h];break;case 6:this.$=l[h];break;case 7:this.$=new a.ContentNode(l[h],this._$);break;case 8:this.$=new a.CommentNode(l[h],this._$);break;case 9:this.$=new a.RawBlockNode(l[h-2],l[h-1],l[h],this._$);break;case 10:this.$=new a.MustacheNode(l[h-1],null,"","",this._$);break;case 11:this.$=a.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!1,this._$);break;case 12:this.$=a.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!0,this._$);break;case 13:this.$=new a.MustacheNode(l[h-1],null,l[h-2],a.stripFlags(l[h-2],l[h]),this._$);break;case 14:this.$=new a.MustacheNode(l[h-1],null,l[h-2],a.stripFlags(l[h-2],l[h]),this._$);break;case 15:this.$={strip:a.stripFlags(l[h-1],l[h-1]),program:l[h]};break;case 16:this.$={path:l[h-1],strip:a.stripFlags(l[h-2],l[h])};break;case 17:this.$=new a.MustacheNode(l[h-1],null,l[h-2],a.stripFlags(l[h-2],l[h]),this._$);break;case 18:this.$=new a.MustacheNode(l[h-1],null,l[h-2],a.stripFlags(l[h-2],l[h]),this._$);break;case 19:this.$=new a.PartialNode(l[h-3],l[h-2],l[h-1],a.stripFlags(l[h-4],l[h]),this._$);break;case 20:this.$=new a.PartialNode(l[h-2],void 0,l[h-1],a.stripFlags(l[h-3],l[h]),this._$);break;case 21:this.$=new a.SexprNode([l[h-2]].concat(l[h-1]),l[h],this._$);break;case 22:this.$=new a.SexprNode([l[h]],null,this._$);break;case 23:this.$=l[h];break;case 24:this.$=new a.StringNode(l[h],this._$);break;case 25:this.$=new a.NumberNode(l[h],this._$);break;case 26:this.$=new a.BooleanNode(l[h],this._$);break;case 27:this.$=l[h];break;case 28:l[h-1].isHelper=!0,this.$=l[h-1];break;case 29:this.$=new a.HashNode(l[h],this._$);break;case 30:this.$=[l[h-2],l[h]];break;case 31:this.$=new a.PartialNameNode(l[h],this._$);break;case 32:this.$=new a.PartialNameNode(new a.StringNode(l[h],this._$),this._$);break;case 33:this.$=new a.PartialNameNode(new a.NumberNode(l[h],this._$));break;case 34:this.$=new a.DataNode(l[h],this._$);break;case 35:this.$=new a.IdNode(l[h],this._$);break;case 36:l[h-2].push({part:l[h],separator:l[h-1]}),this.$=l[h-2];break;case 37:this.$=[{part:l[h]}];break;case 38:this.$=[];break;case 39:l[h-1].push(l[h]);break;case 48:this.$=[];break;case 49:l[h-1].push(l[h]);break;case 52:this.$=[l[h]];break;case 53:l[h-1].push(l[h]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(r,s){throw new Error(r)},parse:function(r){var s=this,o=[0],a=[null],c=[],l=this.table,u="",h=0,w=0,M=0,O=2,Te=1;this.lexer.setInput(r),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var S=this.lexer.yylloc;c.push(S);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function ae(y){o.length=o.length-2*y,a.length=a.length-y,c.length=c.length-y}function Bt(){var y;return y=s.lexer.lex()||1,typeof y!="number"&&(y=s.symbols_[y]||y),y}for(var m,oe,I,k,jn,le,T={},G,x,qe,K;;){if(I=o[o.length-1],this.defaultActions[I]?k=this.defaultActions[I]:((m===null||typeof m>"u")&&(m=Bt()),k=l[I]&&l[I][m]),typeof k>"u"||!k.length||!k[0]){var he="";if(!M){K=[];for(G in l[I])this.terminals_[G]&&G>2&&K.push("'"+this.terminals_[G]+"'");this.lexer.showPosition?he="Parse error on line "+(h+1)+`:
`+this.lexer.showPosition()+`
Expecting `+K.join(", ")+", got '"+(this.terminals_[m]||m)+"'":he="Parse error on line "+(h+1)+": Unexpected "+(m==1?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(he,{text:this.lexer.match,token:this.terminals_[m]||m,line:this.lexer.yylineno,loc:S,expected:K})}}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+m);switch(k[0]){case 1:o.push(m),a.push(this.lexer.yytext),c.push(this.lexer.yylloc),o.push(k[1]),m=null,oe?(m=oe,oe=null):(w=this.lexer.yyleng,u=this.lexer.yytext,h=this.lexer.yylineno,S=this.lexer.yylloc,M>0&&M--);break;case 2:if(x=this.productions_[k[1]][1],T.$=a[a.length-x],T._$={first_line:c[c.length-(x||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(x||1)].first_column,last_column:c[c.length-1].last_column},E&&(T._$.range=[c[c.length-(x||1)].range[0],c[c.length-1].range[1]]),le=this.performAction.call(T,u,w,h,this.yy,k[1],a,c),typeof le<"u")return le;x&&(o=o.slice(0,-1*x*2),a=a.slice(0,-1*x),c=c.slice(0,-1*x)),o.push(this.productions_[k[1]][0]),a.push(T.$),c.push(T._$),qe=l[o[o.length-2]][o[o.length-1]],o.push(qe);break;case 3:return!0}}return!0}},t=(function(){var i={EOF:1,parseError:function(s,o){if(this.yy.parser)this.yy.parser.parseError(s,o);else throw new Error(s)},setInput:function(r){return this._input=r,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var s=r.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},unput:function(r){var s=r.length,o=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s-1),this.offset-=s;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===a.length?this.yylloc.first_column:0)+a[a.length-o.length].length-o[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-s]),this},more:function(){return this._more=!0,this},less:function(r){this.unput(this.match.slice(r))},pastInput:function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var r=this.pastInput(),s=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+s+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,s,o,a,c,l;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),h=0;h<u.length&&(o=this._input.match(this.rules[u[h]]),!(o&&(!s||o[0].length>s[0].length)&&(s=o,a=h,!this.options.flex)));h++);return s?(l=s[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],r=this.performAction.call(this,this.yy,this,u[a],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return typeof s<"u"?s:this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(s){this.begin(s)}};return i.options={},i.performAction=function(s,o,a,c){function l(h,w){return o.yytext=o.yytext.substr(h,o.yyleng-w)}var u=c;switch(a){case 0:if(o.yytext.slice(-2)==="\\\\"?(l(0,1),this.begin("mu")):o.yytext.slice(-1)==="\\"?(l(0,1),this.begin("emu")):this.begin("mu"),o.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return o.yytext=o.yytext.substr(5,o.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return l(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return l(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return o.yytext=l(1,2).replace(/\\"/g,'"'),42;break;case 30:return o.yytext=l(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return o.yytext=l(1,2),50;break;case 37:return"INVALID";case 38:return 5}},i.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],i.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},i})();e.lexer=t;function n(){this.yy={}}return n.prototype=e,e.Parser=n,new n})();vt.default=vn});var bt=g(te=>{"use strict";p();var kn=_().default;function bn(e,t){return{left:e.charAt(2)==="~",right:t.charAt(t.length-3)==="~"}}te.stripFlags=bn;function yn(e,t,n,i,r,s){if(e.sexpr.id.original!==i.path.original)throw new kn(e.sexpr.id.original+" doesn't match "+i.path.original,e);var o=n&&n.program,a={left:e.strip.left,right:i.strip.right,openStandalone:Ne(t.statements),closeStandalone:Ee((o||t).statements)};if(e.strip.right&&R(t.statements,null,!0),o){var c=n.strip;c.left&&C(t.statements,null,!0),c.right&&R(o.statements,null,!0),i.strip.left&&C(o.statements,null,!0),Ee(t.statements)&&Ne(o.statements)&&(C(t.statements),R(o.statements))}else i.strip.left&&C(t.statements,null,!0);return r?new this.BlockNode(e,o,t,a,s):new this.BlockNode(e,t,o,a,s)}te.prepareBlock=yn;function Sn(e,t){for(var n=0,i=e.length;n<i;n++){var r=e[n],s=r.strip;if(s){var o=Ee(e,n,t,r.type==="partial"),a=Ne(e,n,t),c=s.openStandalone&&o,l=s.closeStandalone&&a,u=s.inlineStandalone&&o&&a;s.right&&R(e,n,!0),s.left&&C(e,n,!0),u&&(R(e,n),C(e,n)&&r.type==="partial"&&(r.indent=/([ \t]+$)/.exec(e[n-1].original)?RegExp.$1:"")),c&&(R((r.program||r.inverse).statements),C(e,n)),l&&(R(e,n),C((r.inverse||r.program).statements))}}return e}te.prepareProgram=Sn;function Ee(e,t,n){t===void 0&&(t=e.length);var i=e[t-1],r=e[t-2];if(!i)return n;if(i.type==="content")return(r||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}function Ne(e,t,n){t===void 0&&(t=-1);var i=e[t+1],r=e[t+2];if(!i)return n;if(i.type==="content")return(r||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}function R(e,t,n){var i=e[t==null?0:t+1];if(!(!i||i.type!=="content"||!n&&i.rightStripped)){var r=i.string;i.string=i.string.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.string!==r}}function C(e,t,n){var i=e[t==null?e.length-1:t-1];if(!(!i||i.type!=="content"||!n&&i.leftStripped)){var r=i.string;return i.string=i.string.replace(n?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.string!==r,i.leftStripped}}});var Ce=g(Pe=>{"use strict";p();var _e=kt().default,yt=we().default,xn=bt(),wn=q().extend;Pe.parser=_e;var St={};wn(St,xn,yt);function En(e){return e.constructor===yt.ProgramNode?e:(_e.yy=St,_e.parse(e))}Pe.parse=En});var ie=g(ne=>{"use strict";p();var Ie=_().default,xt=q().isArray,Nn=[].slice;function Oe(){}ne.Compiler=Oe;Oe.prototype={compiler:Oe,equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t)return!1;for(var n=0;n<t;n++){var i=this.opcodes[n],r=e.opcodes[n];if(i.opcode!==r.opcode||!wt(i.args,r.args))return!1}for(t=this.children.length,n=0;n<t;n++)if(!this.children[n].equals(e.children[n]))return!1;return!0},guid:0,compile:function(e,t){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds;var n=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},n)for(var i in n)this.options.knownHelpers[i]=n[i];return this.accept(e)},accept:function(e){return this[e.type](e)},program:function(e){for(var t=e.statements,n=0,i=t.length;n<i;n++)this.accept(t[n]);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(r,s){return r-s}),this},compileProgram:function(e){var t=new this.compiler().compile(e,this.options),n=this.guid++,i;this.usePartial=this.usePartial||t.usePartial,this.children[n]=t;for(var r=0,s=t.depths.list.length;r<s;r++)i=t.depths.list[r],!(i<2)&&this.addDepth(i-1);return n},block:function(e){var t=e.mustache,n=e.program,i=e.inverse;n&&(n=this.compileProgram(n)),i&&(i=this.compileProgram(i));var r=t.sexpr,s=this.classifySexpr(r);s==="helper"?this.helperSexpr(r,n,i):s==="simple"?(this.simpleSexpr(r),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("blockValue",r.id.original)):(this.ambiguousSexpr(r,n,i),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(e){var t=e.pairs,n,i;for(this.opcode("pushHash"),n=0,i=t.length;n<i;n++)this.pushParam(t[n][1]);for(;n--;)this.opcode("assignToHash",t[n][0]);this.opcode("popHash")},partial:function(e){var t=e.partialName;this.usePartial=!0,e.hash?this.accept(e.hash):this.opcode("push","undefined"),e.context?this.accept(e.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",t.name,e.indent||""),this.opcode("append")},content:function(e){e.string&&this.opcode("appendContent",e.string)},mustache:function(e){this.sexpr(e.sexpr),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(e,t,n){var i=e.id,r=i.parts[0],s=t!=null||n!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.ID(i),this.opcode("invokeAmbiguous",r,s)},simpleSexpr:function(e){var t=e.id;t.type==="DATA"?this.DATA(t):t.parts.length?this.ID(t):(this.addDepth(t.depth),this.opcode("getContext",t.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,n){var i=this.setupFullMustacheParams(e,t,n),r=e.id,s=r.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",i.length,s);else{if(this.options.knownHelpersOnly)throw new Ie("You specified knownHelpersOnly, but used the unknown helper "+s,e);r.falsy=!0,this.ID(r),this.opcode("invokeHelper",i.length,r.original,r.isSimple)}},sexpr:function(e){var t=this.classifySexpr(e);t==="simple"?this.simpleSexpr(e):t==="helper"?this.helperSexpr(e):this.ambiguousSexpr(e)},ID:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var t=e.parts[0];t?this.opcode("lookupOnContext",e.parts,e.falsy,e.isScoped):this.opcode("pushContext")},DATA:function(e){this.options.data=!0,this.opcode("lookupData",e.id.depth,e.id.parts)},STRING:function(e){this.opcode("pushString",e.string)},NUMBER:function(e){this.opcode("pushLiteral",e.number)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:Nn.call(arguments,1)})},addDepth:function(e){e!==0&&(this.depths[e]||(this.depths[e]=!0,this.depths.list.push(e)))},classifySexpr:function(e){var t=e.isHelper,n=e.eligibleHelper,i=this.options;if(n&&!t){var r=e.id.parts[0];i.knownHelpers[r]?t=!0:i.knownHelpersOnly&&(n=!1)}return t?"helper":n?"ambiguous":"simple"},pushParams:function(e){for(var t=0,n=e.length;t<n;t++)this.pushParam(e[t])},pushParam:function(e){this.stringParams?(e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",e.stringModeValue,e.type),e.type==="sexpr"&&this.sexpr(e)):(this.trackIds&&this.opcode("pushId",e.type,e.idName||e.stringModeValue),this.accept(e))},setupFullMustacheParams:function(e,t,n){var i=e.params;return this.pushParams(i),this.opcode("pushProgram",t),this.opcode("pushProgram",n),e.hash?this.hash(e.hash):this.opcode("emptyHash"),i}};function _n(e,t,n){if(e==null||typeof e!="string"&&e.constructor!==n.AST.ProgramNode)throw new Ie("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var i=n.parse(e),r=new n.Compiler().compile(i,t);return new n.JavaScriptCompiler().compile(r,t)}ne.precompile=_n;function Pn(e,t,n){if(e==null||typeof e!="string"&&e.constructor!==n.AST.ProgramNode)throw new Ie("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var i;function r(){var o=n.parse(e),a=new n.Compiler().compile(o,t),c=new n.JavaScriptCompiler().compile(a,t,void 0,!0);return n.template(c)}var s=function(o,a){return i||(i=r()),i.call(this,o,a)};return s._setup=function(o){return i||(i=r()),i._setup(o)},s._child=function(o,a,c){return i||(i=r()),i._child(o,a,c)},s}ne.compile=Pn;function wt(e,t){if(e===t)return!0;if(xt(e)&&xt(t)&&e.length===t.length){for(var n=0;n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}}});var Pt=g(_t=>{"use strict";p();var Cn=A().COMPILER_REVISION,On=A().REVISION_CHANGES,Ae=_().default;function U(e){this.value=e}function L(){}L.prototype={nameLookup:function(e,t){return L.isValidJavaScriptVariableName(t)?e+"."+t:e+"['"+t+"']"},depthedLookup:function(e){return this.aliases.lookup="this.lookup",'lookup(depths, "'+e+'")'},compilerInfo:function(){var e=Cn,t=On[e];return[e,t]},appendToBuffer:function(e){return this.environment.isSimple?"return "+e+";":{appendToBuffer:!0,content:e,toString:function(){return"buffer += "+e+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,t,n,i){this.environment=e,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!n,this.context=n||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(e,t),this.useDepths=this.useDepths||e.depths.list.length||this.options.compat;var r=e.opcodes,s,o,a;for(o=0,a=r.length;o<a;o++)s=r[o],this[s.opcode].apply(this,s.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Ae("Compile completed with content left on stack");var c=this.createFunctionContext(i);if(this.isChild)return c;var l={compiler:this.compilerInfo(),main:c},u=this.context.programs;for(o=0,a=u.length;o<a;o++)u[o]&&(l[o]=u[o]);return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.options.compat&&(l.compat=!0),i||(l.compiler=JSON.stringify(l.compiler),l=this.objectLiteral(l)),l},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(e){var t="",n=this.stackVars.concat(this.registers.list);n.length>0&&(t+=", "+n.join(", "));for(var i in this.aliases)this.aliases.hasOwnProperty(i)&&(t+=", "+i+"="+this.aliases[i]);var r=["depth0","helpers","partials","data"];this.useDepths&&r.push("depths");var s=this.mergeSource(t);return e?(r.push(s),Function.apply(this,r)):"function("+r.join(",")+`) {
  `+s+"}"},mergeSource:function(e){for(var t="",n,i=!this.forceBuffer,r,s=0,o=this.source.length;s<o;s++){var a=this.source[s];a.appendToBuffer?n?n=n+`
    + `+a.content:n=a.content:(n&&(t?t+="buffer += "+n+`;
  `:(r=!0,t=n+`;
  `),n=void 0),t+=a+`
  `,this.environment.isSimple||(i=!1))}return i?(n||!t)&&(t+="return "+(n||'""')+`;
`):(e+=", buffer = "+(r?"":this.initializeBuffer()),n?t+="return buffer + "+n+`;
`:t+=`return buffer;
`),e&&(t="var "+e.substring(2)+(r?"":`;
  `)+t),t},blockValue:function(e){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams(e,0,t);var n=this.popStack();t.splice(1,0,n),this.push("blockHelperMissing.call("+t.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams("",0,e,!0),this.flushInline();var t=this.topStack();e.splice(1,0,t),this.pushSource("if (!"+this.lastHelper+") { "+t+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){this.pendingContent&&(e=this.pendingContent+e),this.pendingContent=e},append:function(){this.flushInline();var e=this.popStack();this.pushSource("if ("+e+" != null) { "+this.appendToBuffer(e)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,t,n){var i=0,r=e.length;for(!n&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(e[i++])):this.pushContext();i<r;i++)this.replaceStack(function(s){var o=this.nameLookup(s,e[i],"context");return t?" && "+o:" != null ? "+o+" : "+s})},lookupData:function(e,t){e?this.pushStackLiteral("this.data(data, "+e+")"):this.pushStackLiteral("data");for(var n=t.length,i=0;i<n;i++)this.replaceStack(function(r){return" && "+this.nameLookup(r,t[i],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(e,t){this.pushContext(),this.pushString(t),t!=="sexpr"&&(typeof e=="string"?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+e.ids.join(",")+"}"),this.stringParams&&(this.push("{"+e.contexts.join(",")+"}"),this.push("{"+e.types.join(",")+"}")),this.push(`{
    `+e.values.join(`,
    `)+`
  }`)},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){return this.inlineStack.push(e),e},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){e!=null?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},invokeHelper:function(e,t,n){this.aliases.helperMissing="helpers.helperMissing";var i=this.popStack(),r=this.setupHelper(e,t),s=(n?r.name+" || ":"")+i+" || helperMissing";this.push("(("+s+").call("+r.callParams+"))")},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(e,t){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var n=this.popStack();this.emptyHash();var i=this.setupHelper(0,e,t),r=this.lastHelper=this.nameLookup("helpers",e,"helper");this.push("((helper = (helper = "+r+" || "+n+") != null ? helper : helperMissing"+(i.paramsInit?"),("+i.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+i.callParams+") : helper))")},invokePartial:function(e,t){var n=[this.nameLookup("partials",e,"partial"),"'"+t+"'","'"+e+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?n.push("data"):this.options.compat&&n.push("undefined"),this.options.compat&&n.push("depths"),this.push("this.invokePartial("+n.join(", ")+")")},assignToHash:function(e){var t=this.popStack(),n,i,r;this.trackIds&&(r=this.popStack()),this.stringParams&&(i=this.popStack(),n=this.popStack());var s=this.hash;n&&s.contexts.push("'"+e+"': "+n),i&&s.types.push("'"+e+"': "+i),r&&s.ids.push("'"+e+"': "+r),s.values.push("'"+e+"': ("+t+")")},pushId:function(e,t){e==="ID"||e==="DATA"?this.pushString(t):e==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:L,compileChildren:function(e,t){for(var n=e.children,i,r,s=0,o=n.length;s<o;s++){i=n[s],r=new this.compiler;var a=this.matchExistingProgram(i);a==null?(this.context.programs.push(""),a=this.context.programs.length,i.index=a,i.name="program"+a,this.context.programs[a]=r.compile(i,t,this.context,!this.precompile),this.context.environments[a]=i,this.useDepths=this.useDepths||r.useDepths):(i.index=a,i.name="program"+a)}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var i=this.context.environments[t];if(i&&i.equals(e))return t}},programExpression:function(e){var t=this.environment.children[e],n=t.depths.list,i=this.useDepths,r,s=[t.index,"data"];return i&&s.push("depths"),"this.program("+s.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},pushStackLiteral:function(e){return this.push(new U(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),e&&this.source.push(e)},pushStack:function(e){this.flushInline();var t=this.incrStack();return this.pushSource(t+" = "+e+";"),this.compileStack.push(t),t},replaceStack:function(e){var t="",n=this.isInline(),i,r,s;if(!this.isInline())throw new Ae("replaceStack on non-inline");var o=this.popStack(!0);if(o instanceof U)t=i=o.value,s=!0;else{r=!this.stackSlot;var a=r?this.incrStack():this.topStackName();t="("+this.push(a)+" = "+o+")",i=this.topStack()}var c=e.call(this,i);s||this.popStack(),r&&this.stackSlot--,this.push("("+t+c+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;if(e.length){this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var i=e[t];i instanceof U?this.compileStack.push(i):this.pushStack(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof U)return n.value;if(!t){if(!this.stackSlot)throw new Ae("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,t=e[e.length-1];return t instanceof U?t.value:t},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(this.quotedString(n)+":"+e[n]);return"{"+t.join(",")+"}"},setupHelper:function(e,t,n){var i=[],r=this.setupParams(t,e,i,n),s=this.nameLookup("helpers",t,"helper");return{params:i,paramsInit:r,name:s,callParams:[this.contextName(0)].concat(i).join(", ")}},setupOptions:function(e,t,n){var i={},r=[],s=[],o=[],a,c,l;i.name=this.quotedString(e),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack()),c=this.popStack(),l=this.popStack(),(l||c)&&(l||(l="this.noop"),c||(c="this.noop"),i.fn=l,i.inverse=c);for(var u=t;u--;)a=this.popStack(),n[u]=a,this.trackIds&&(o[u]=this.popStack()),this.stringParams&&(s[u]=this.popStack(),r[u]=this.popStack());return this.trackIds&&(i.ids="["+o.join(",")+"]"),this.stringParams&&(i.types="["+s.join(",")+"]",i.contexts="["+r.join(",")+"]"),this.options.data&&(i.data="data"),i},setupParams:function(e,t,n,i){var r=this.objectLiteral(this.setupOptions(e,t,n));return i?(this.useRegister("options"),n.push("options"),"options="+r):(n.push(r),"")}};var Et="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),In=L.RESERVED_WORDS={};for(re=0,Nt=Et.length;re<Nt;re++)In[Et[re]]=!0;var re,Nt;L.isValidJavaScriptVariableName=function(e){return!L.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)};_t.default=L});var It=g(Ot=>{"use strict";p();var V=dt().default,An=we().default,Hn=Ce().parser,Rn=Ce().parse,Ln=ie().Compiler,Dn=ie().compile,Mn=ie().precompile,Tn=Pt().default,qn=V.create,Ct=function(){var e=qn();return e.compile=function(t,n){return Dn(t,n,e)},e.precompile=function(t,n){return Mn(t,n,e)},e.AST=An,e.Compiler=Ln,e.JavaScriptCompiler=Tn,e.Parser=Hn,e.parse=Rn,e};V=Ct();V.create=Ct;V.default=V;Ot.default=V});var Re=g(At=>{"use strict";p();function He(){}He.prototype={constructor:He,accept:function(e){return this[e.type](e)}};At.default=He});var Ht=g(Le=>{"use strict";p();var Bn=Re().default;function Vn(e){return new d().accept(e)}Le.print=Vn;function d(){this.padding=0}Le.PrintVisitor=d;d.prototype=new Bn;d.prototype.pad=function(e){for(var t="",n=0,i=this.padding;n<i;n++)t=t+"  ";return t=t+e+`
`,t};d.prototype.program=function(e){var t="",n=e.statements,i,r;for(i=0,r=n.length;i<r;i++)t=t+this.accept(n[i]);return this.padding--,t};d.prototype.block=function(e){var t="";return t=t+this.pad("BLOCK:"),this.padding++,t=t+this.accept(e.mustache),e.program&&(t=t+this.pad("PROGRAM:"),this.padding++,t=t+this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,t=t+this.pad("{{^}}"),this.padding++,t=t+this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,t};d.prototype.sexpr=function(e){for(var t=e.params,n=[],i,r=0,s=t.length;r<s;r++)n.push(this.accept(t[r]));return t="["+n.join(", ")+"]",i=e.hash?" "+this.accept(e.hash):"",this.accept(e.id)+" "+t+i};d.prototype.mustache=function(e){return this.pad("{{ "+this.accept(e.sexpr)+" }}")};d.prototype.partial=function(e){var t=this.accept(e.partialName);return e.context&&(t+=" "+this.accept(e.context)),e.hash&&(t+=" "+this.accept(e.hash)),this.pad("{{> "+t+" }}")};d.prototype.hash=function(e){for(var t=e.pairs,n=[],i,r,s=0,o=t.length;s<o;s++)i=t[s][0],r=this.accept(t[s][1]),n.push(i+"="+r);return"HASH{"+n.join(", ")+"}"};d.prototype.STRING=function(e){return'"'+e.string+'"'};d.prototype.NUMBER=function(e){return"NUMBER{"+e.number+"}"};d.prototype.BOOLEAN=function(e){return"BOOLEAN{"+e.bool+"}"};d.prototype.ID=function(e){var t=e.parts.join("/");return e.parts.length>1?"PATH:"+t:"ID:"+t};d.prototype.PARTIAL_NAME=function(e){return"PARTIAL:"+e.name};d.prototype.DATA=function(e){return"@"+this.accept(e.id)};d.prototype.content=function(e){return this.pad("CONTENT[ '"+e.string+"' ]")};d.prototype.comment=function(e){return this.pad("{{! '"+e.comment+"' }}")}});var Dt=g((wi,Lt)=>{p();var W=It().default;W.Visitor=Re().default;var Rt=Ht();W.PrintVisitor=Rt.PrintVisitor;W.print=Rt.print;Lt.exports=W;typeof F<"u"&&F.extensions&&(De=function(e,t){var n=(de(),Fe(fe)),i=n.readFileSync(t,"utf8");e.exports=W.compile(i)},F.extensions[".handlebars"]=De,F.extensions[".hbs"]=De);var De});var Tt=g((_i,Mt)=>{p();var Me=(de(),Fe(fe)),se=Dt();function Fn(e){var t=Me.readFileSync("//css/style.css","utf-8"),n=Me.readFileSync("//resume.template","utf-8"),i=Me.readFileSync("//css/print.css","utf-8");return se.registerHelper("foreach",function(r,s){return s.inverse&&!r.length?s.inverse(this):r.map(function(o,a){return o.$index=a,o.$first=a===0,o.$notfirst=a!==0,o.$last=a===r.length-1,s.fn(o)}).join("")}),se.registerHelper("ifCond",function(r,s,o,a){switch(s){case"==":return r==o?a.fn(this):a.inverse(this);case"===":return r===o?a.fn(this):a.inverse(this);case"<":return r<o?a.fn(this):a.inverse(this);case"<=":return r<=o?a.fn(this):a.inverse(this);case">":return r>o?a.fn(this):a.inverse(this);case">=":return r>=o?a.fn(this):a.inverse(this);case"&&":return r&&o?a.fn(this):a.inverse(this);case"||":return r||o?a.fn(this):a.inverse(this);default:return a.inverse(this)}}),se.registerHelper("commalist",function(r,s){return s.fn(r.join(", "))}),se.compile(n)({css:t,print:i,resume:e})}Mt.exports={render:Fn}});p();var D=Gt(Tt(),1),qt=D.default??D,Ci=qt.render??D.render,Oi=qt.pdfRenderOptions??D.pdfRenderOptions;export{Oi as pdfRenderOptions,Ci as render};
