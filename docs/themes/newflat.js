var Bt=Object.create;var Y=Object.defineProperty;var Ft=Object.getOwnPropertyDescriptor;var jt=Object.getOwnPropertyNames;var Ut=Object.getPrototypeOf,zt=Object.prototype.hasOwnProperty;var F=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Ve=(e,t)=>()=>(e&&(t=e(e=0)),t);var m=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Wt=(e,t)=>{for(var n in t)Y(e,n,{get:t[n],enumerable:!0})},qe=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of jt(t))!zt.call(e,s)&&s!==n&&Y(e,s,{get:()=>t[s],enumerable:!(i=Ft(t,s))||i.enumerable});return e};var Gt=(e,t,n)=>(n=e!=null?Bt(Ut(e)):{},qe(t||!e||!e.__esModule?Y(n,"default",{value:e,enumerable:!0}):n,e)),Be=e=>qe(Y({},"__esModule",{value:!0}),e);var p=Ve(()=>{});var fe={};Wt(fe,{createReadStream:()=>Xe,createWriteStream:()=>Ze,default:()=>Kt,existsSync:()=>ze,lstatSync:()=>Ke,mkdirSync:()=>Ge,readFileSync:()=>je,readdirSync:()=>Ue,rmdirSync:()=>Ye,statSync:()=>ue,unlinkSync:()=>Je,writeFileSync:()=>We});function pe(e){return String(e).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Fe(e){var t=pe(e);if(X[t]!==void 0)return X[t];for(var n=Object.keys(X),i=0;i<n.length;i++)if(t.endsWith("/"+n[i])||t===n[i])return X[n[i]]}function ce(e){var t=pe(e);if(Z[t]!==void 0)return Z[t];for(var n=Object.keys(Z),i=0;i<n.length;i++)if(t.endsWith("/"+n[i])||t===n[i])return Z[n[i]]}var X,Z,je,Ue,ze,We,Ge,ue,Ke,Je,Ye,Xe,Ze,Kt,de=Ve(()=>{"use strict";p();X={"package.json":`{
  "name": "jsonresume-theme-newflat",
  "version": "0.1.0",
  "description": "A theme for JSON Resume",
  "author": "Naum Azeredo",
  "repository": {
    "type": "git",
    "url": "http://github.com/naumazeredo/jsonresume-theme-newflat"
  },
  "scripts": {
    "start": "resume serve"
  },
  "dependencies": {
    "handlebars": "^2.0.0"
  },
  "license": "MIT"
}
`,"resume.template":`<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">

    <title>{{resume.basics.name}} - Curriculum Vitae</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

    <style type="text/css">
    {{{css}}}
    </style>
</head>
<body>
    <header id="header">
        <div class="container">
            <div class="row">
                {{#resume.basics}}
                <div class="col-xs-6">
                    <h1>
                        {{firstName name}} <strong>{{lastName name}}</strong>
                    </h1>
                    <h2><i>Curriculum Vitae</i></h2>
                </div>
                <div class="col-xs-6 text-right">
                    <p>
                        {{#location}}
                        {{address}}<br>
                        {{city}} {{postalCode}}<br>
                        {{/location}}
                        {{#phone}}<i class="fa fa-mobile fa-fw"></i> {{.}}<br>{{/phone}}
                        {{#email}}<i class="fa fa-envelope-o fa-fw"></i> {{.}}<br>{{/email}}
                        {{!-- TODO: Verify profiles, etc --}}
                        {{#profiles}}<i class="fa fa-github fa-fw"></i> {{url}}{{/profiles}}
                    </p>
                </div>
                {{/resume.basics}}
            </div>
        </div>
    </header>
    <div id="content" class="container">
        {{#if resume.interests.length}}
        <section id="interests" class="row">
            <aside class="col-sm-3">
                <h3>Interests</h3>
            </aside>
            <div class="col-sm-9">
                <div class="row">
                    <ul class="keywords">
                        {{#each resume.interests}}
                        <li>
                            {{name}}
                            {{#if keywords.length}}
                                {{keywordsList keywords}}
                            {{/if}}
                        </li>
                        {{/each}}
                    </ul>
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
                            <span>{{area}}</span>
                            <span class="date">
                                {{startDate}} \u2014 {{endDate}}
                            </span>
                        </h4>
                        {{#institution}}
                        <div class="area">
                            {{.}}
                        </div>
                        {{/institution}}
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
                            <span class="date">
                                {{date}}
                            </span>
                        </h4>
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

        {{#if resume.projects.length}}
        <section id="awards" class="row">
            <aside class="col-sm-3">
                <h3>Projects</h3>
            </aside>
            <div class="col-sm-9">
                <div class="row">
                    {{#each resume.projects}}
                    <div class="col-sm-12">
                        <h4 class="strike-through">
                            <span>{{name}}</span>
                            <span class="date">
                                {{startDate}} - {{endDate}}
                            </span>
                        </h4>
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

        {{#if resume.work.length}}
        <section id="work" class="row">
            <aside class="col-sm-3">
                <h3>Professional Experience</h3>
            </aside>
            <div class="col-sm-9">
                <div class="row">
                    {{#each resume.work}}
                    <div class="col-sm-12">
                        <h4 class="strike-through">
                            <span>{{position}}</span>
                            <span class="date">
                                {{startDate}} \u2014 {{endDate}}
                            </span>
                        </h4>
                        {{#website}}
                        <div class="website pull-right">
                            <a href="{{.}}">{{.}}</a>
                        </div>
                        {{/website}}
                        {{#company}}
                        <div class="company">
                            {{.}}
                        </div>
                        {{/company}}
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
                    <div class="col-xs-6">
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

        {{#if resume.languages.length}}
        <section id="languages" class="row">
            <aside class="col-sm-3">
                <h3>Languages</h3>
            </aside>
            <div class="col-sm-9">
                <div class="row">
                    {{#each resume.languages}}
                    <div class="col-xs-6">
                        {{#language}}
                        <div class="language">
                            <strong>{{.}}</strong>
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

</body>
</html>
`,"style.css":`@import url(
  https://fonts.googleapis.com/css?family=Lato:400,700
);
body {
  background: #fff;
  font-family: Lato, sans-serif;
  margin: 0 0 80px;
}
a {
  color: #2ecc71;
}
a:focus,
a:hover {
  color: #f1c40f;
  text-decoration: none;
}
p {
  line-height: 1.5;
  margin: 0;
}
p + p {
  margin-top: 10px;
}
h1,
h2,
h3,
h4 {
  margin-top: 0
}
section {
  margin-top: 30px;
}
li {
  line-height: 1.8;
  list-style: none;
}
li:before {
  content: "\\f052";
  float: left;
  font: 13px Octicons;
  margin-top: 6px;
  margin-left: -20px;
  opacity: .1;
  position: absolute;
}
blockquote {
  border-left: 5px solid #e7e9ec;
  font-size: 14px;
}
em {
  color: #95a5a6;
  font-weight: normal;
  font-style: normal;
}
h4 span:first-child {
  color: #000;
  font-weight: bold;
}
.container {
  max-width: 750px;
  padding: 0 30px;
}
.col-sm-6 {
  margin-bottom: 10px;
}
.col-sm-12 h4 {
  margin-top: 12px; 
}
.col-sm-12 + .col-sm-12 {
  margin-top: 30px;
}
#header {
  background: #f4f6f6;
  padding: 50px 0;
  margin-bottom: 30px;
}
#header h2 {
  color: #95a5a6;
  font-size: 24px;
}
#content h3 {
  color: #f1c40f;
  font-size: 26px;
  margin-top: -4px;
}
#content aside {
  text-align: right;
  padding-right: 30px;
}
#profiles .network {
  text-transform: capitalize;
}
#work .company,
#volunteer .company{
  font-weight: bold;
  margin-bottom: 8px;
}
#education .area {
  font-weight: bold;
}
#education .area:before {
  content: "\\f0d7";
  font: 16px Octicons;
  margin-right: 6px;
}
#education .studyType {
  margin-left: 25px;
}
#awards .summary,
#publications .summary {
  margin-top: 8px;
}
#publications .website a:before {
  content: attr(href);
}

@media (min-width: 480px) {
  .strike-through {
    border-top: 1px solid #f4f6f6;
    height: 20px;
    margin-top: 12px;
    margin-bottom: -2px;
    position: relative;
  }
  .strike-through span,
  .strike-through a {
    background: #fff;
    position: absolute;
  }
  .strike-through span:first-child {
    padding-right: 20px;
    margin-top: -12px;
  }
  .strike-through span + span {
    font-size: 14px;
    margin-top: -10px;
    padding-left: 20px;
    right: 0;
  }
}
@media (max-width: 768px) {
  .col-sm-6:last-child {
    margin-bottom: 0px;
  }
  #content aside {
    margin-bottom: 20px;
    padding-right: 0;
    text-align: left;
  }
  #publications .website a:before {
    content: "View publication";
  }
}
@media (max-width: 480px) {
  h1 {
    font-size: 26px;
  }
  .date {
    font-size: 14px;
    margin-bottom: 5px;
  }
  .strike-through span:first-child {
    margin-bottom: 7px;
  }
  .strike-through span {
    display: block;
  }	
  #header {
    margin-bottom: 10px;
    padding: 40px 0;
  }
  #actions {
    display: none;
  }
}
`},Z={".":["README.md","index.js","package.json","resume.template","style.css"]};je=function(e,t){var n=Fe(e);return n!==void 0?n:""},Ue=function(e,t){var n=ce(e);return n===void 0&&(n=[]),t&&t.withFileTypes?n.map(function(i){var s=pe(e)+"/"+i,r=ce(s)!==void 0;return{name:i,isFile:function(){return!r},isDirectory:function(){return r}}}):n},ze=function(e){return Fe(e)!==void 0||ce(e)!==void 0},We=function(){},Ge=function(){},ue=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Ke=ue,Je=function(){},Ye=function(){},Xe=function(){return{pipe:function(e){return e},on:function(){return this}}},Ze=function(){return{write:function(){},end:function(){},on:function(){return this}}},Kt={readFileSync:je,readdirSync:Ue,existsSync:ze,writeFileSync:We,mkdirSync:Ge,statSync:ue,lstatSync:Ke,unlinkSync:Je,rmdirSync:Ye,createReadStream:Xe,createWriteStream:Ze}});var me=m($e=>{"use strict";p();function Qe(e){this.string=e}Qe.prototype.toString=function(){return""+this.string};$e.default=Qe});var V=m(E=>{"use strict";p();var Jt=me().default,Yt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Xt=/[&<>"'`]/g,Zt=/[&<>"'`]/;function Qt(e){return Yt[e]}function $t(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}E.extend=$t;var ge=Object.prototype.toString;E.toString=ge;var Q=function(e){return typeof e=="function"};Q(/x/)&&(Q=function(e){return typeof e=="function"&&ge.call(e)==="[object Function]"});var Q;E.isFunction=Q;var et=Array.isArray||function(e){return e&&typeof e=="object"?ge.call(e)==="[object Array]":!1};E.isArray=et;function en(e){return e instanceof Jt?e.toString():e==null?"":e?(e=""+e,Zt.test(e)?e.replace(Xt,Qt):e):e+""}E.escapeExpression=en;function tn(e){return!e&&e!==0?!0:!!(et(e)&&e.length===0)}E.isEmpty=tn;function nn(e,t){return(e?e+".":"")+t}E.appendContextPath=nn});var P=m(nt=>{"use strict";p();var ve=["description","fileName","lineNumber","message","name","number","stack"];function tt(e,t){var n;t&&t.firstLine&&(n=t.firstLine,e+=" - "+n+":"+t.firstColumn);for(var i=Error.prototype.constructor.call(this,e),s=0;s<ve.length;s++)this[ve[s]]=i[ve[s]];n&&(this.lineNumber=n,this.column=t.firstColumn)}tt.prototype=new Error;nt.default=tt});var A=m(_=>{"use strict";p();var y=V(),ye=P().default,sn="2.0.0";_.VERSION=sn;var rn=6;_.COMPILER_REVISION=rn;var an={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};_.REVISION_CHANGES=an;var it=y.isArray,ke=y.isFunction,st=y.toString,rt="[object Object]";function be(e,t){this.helpers=e||{},this.partials=t||{},on(this)}_.HandlebarsEnvironment=be;be.prototype={constructor:be,logger:j,log:at,registerHelper:function(e,t){if(st.call(e)===rt){if(t)throw new ye("Arg not supported with multiple helpers");y.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){st.call(e)===rt?y.extend(this.partials,e):this.partials[e]=t},unregisterPartial:function(e){delete this.partials[e]}};function on(e){e.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new ye("Missing helper: '"+arguments[arguments.length-1].name+"'")}),e.registerHelper("blockHelperMissing",function(t,n){var i=n.inverse,s=n.fn;if(t===!0)return s(this);if(t===!1||t==null)return i(this);if(it(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):i(this);if(n.data&&n.ids){var r=$(n.data);r.contextPath=y.appendContextPath(n.data.contextPath,n.name),n={data:r}}return s(t,n)}),e.registerHelper("each",function(t,n){if(!n)throw new ye("Must pass iterator to #each");var i=n.fn,s=n.inverse,r=0,a="",o,c;if(n.data&&n.ids&&(c=y.appendContextPath(n.data.contextPath,n.ids[0])+"."),ke(t)&&(t=t.call(this)),n.data&&(o=$(n.data)),t&&typeof t=="object")if(it(t))for(var h=t.length;r<h;r++)o&&(o.index=r,o.first=r===0,o.last=r===t.length-1,c&&(o.contextPath=c+r)),a=a+i(t[r],{data:o});else for(var u in t)t.hasOwnProperty(u)&&(o&&(o.key=u,o.index=r,o.first=r===0,c&&(o.contextPath=c+u)),a=a+i(t[u],{data:o}),r++);return r===0&&(a=s(this)),a}),e.registerHelper("if",function(t,n){return ke(t)&&(t=t.call(this)),!n.hash.includeZero&&!t||y.isEmpty(t)?n.inverse(this):n.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),e.registerHelper("with",function(t,n){ke(t)&&(t=t.call(this));var i=n.fn;if(y.isEmpty(t))return n.inverse(this);if(n.data&&n.ids){var s=$(n.data);s.contextPath=y.appendContextPath(n.data.contextPath,n.ids[0]),n={data:s}}return i(t,n)}),e.registerHelper("log",function(t,n){var i=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;e.log(i,t)}),e.registerHelper("lookup",function(t,n){return t&&t[n]})}var j={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(j.level<=e){var n=j.methodMap[e];typeof console<"u"&&console[n]&&console[n].call(console,t)}}};_.logger=j;var at=j.log;_.log=at;var $=function(e){var t=y.extend({},e);return t._parent=e,t};_.createFrame=$});var ht=m(q=>{"use strict";p();var Se=V(),H=P().default,hn=A().COMPILER_REVISION,ot=A().REVISION_CHANGES,ln=A().createFrame;function cn(e){var t=e&&e[0]||1,n=hn;if(t!==n)if(t<n){var i=ot[n],s=ot[t];throw new H("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+s+").")}else throw new H("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}q.checkRevision=cn;function pn(e,t){if(!t)throw new H("No environment passed to template");if(!e||!e.main)throw new H("Unknown template object: "+typeof e);t.VM.checkRevision(e.compiler);var n=function(r,a,o,c,h,u,l,w,T){h&&(c=Se.extend({},c,h));var C=t.VM.invokePartial.call(this,r,o,c,u,l,w,T);if(C==null&&t.compile){var Te={helpers:u,partials:l,data:w,depths:T};l[o]=t.compile(r,{data:w!==void 0,compat:e.compat},t),C=l[o](c,Te)}if(C!=null){if(a){for(var S=C.split(`
`),N=0,ae=S.length;N<ae&&!(!S[N]&&N+1===ae);N++)S[N]=a+S[N];C=S.join(`
`)}return C}else throw new H("The partial "+o+" could not be compiled when running in runtime-only mode")},i={lookup:function(r,a){for(var o=r.length,c=0;c<o;c++)if(r[c]&&r[c][a]!=null)return r[c][a]},lambda:function(r,a){return typeof r=="function"?r.call(a):r},escapeExpression:Se.escapeExpression,invokePartial:n,fn:function(r){return e[r]},programs:[],program:function(r,a,o){var c=this.programs[r],h=this.fn(r);return a||o?c=ee(this,r,h,a,o):c||(c=this.programs[r]=ee(this,r,h)),c},data:function(r,a){for(;r&&a--;)r=r._parent;return r},merge:function(r,a){var o=r||a;return r&&a&&r!==a&&(o=Se.extend({},a,r)),o},noop:t.VM.noop,compilerInfo:e.compiler},s=function(r,a){a=a||{};var o=a.data;s._setup(a),!a.partial&&e.useData&&(o=dn(r,o));var c;return e.useDepths&&(c=a.depths?[r].concat(a.depths):[r]),e.main.call(i,r,i.helpers,i.partials,o,c)};return s.isTop=!0,s._setup=function(r){r.partial?(i.helpers=r.helpers,i.partials=r.partials):(i.helpers=i.merge(r.helpers,t.helpers),e.usePartial&&(i.partials=i.merge(r.partials,t.partials)))},s._child=function(r,a,o){if(e.useDepths&&!o)throw new H("must pass parent depths");return ee(i,r,e[r],a,o)},s}q.template=pn;function ee(e,t,n,i,s){var r=function(a,o){return o=o||{},n.call(e,a,e.helpers,e.partials,o.data||i,s&&[a].concat(s))};return r.program=t,r.depth=s?s.length:0,r}q.program=ee;function un(e,t,n,i,s,r,a){var o={partial:!0,helpers:i,partials:s,data:r,depths:a};if(e===void 0)throw new H("The partial "+t+" could not be found");if(e instanceof Function)return e(n,o)}q.invokePartial=un;function fn(){return""}q.noop=fn;function dn(e,t){return(!t||!("root"in t))&&(t=t?ln(t):{},t.root=e),t}});var ft=m(ut=>{"use strict";p();var lt=A(),mn=me().default,gn=P().default,xe=V(),ct=ht(),pt=function(){var e=new lt.HandlebarsEnvironment;return xe.extend(e,lt),e.SafeString=mn,e.Exception=gn,e.Utils=xe,e.escapeExpression=xe.escapeExpression,e.VM=ct,e.template=function(t){return ct.template(t,e)},e},te=pt();te.create=pt;te.default=te;ut.default=te});var we=m(mt=>{"use strict";p();var dt=P().default;function v(e){e=e||{},this.firstLine=e.first_line,this.firstColumn=e.first_column,this.lastColumn=e.last_column,this.lastLine=e.last_line}var U={ProgramNode:function(e,t,n){v.call(this,n),this.type="program",this.statements=e,this.strip=t},MustacheNode:function(e,t,n,i,s){if(v.call(this,s),this.type="mustache",this.strip=i,n!=null&&n.charAt){var r=n.charAt(3)||n.charAt(2);this.escaped=r!=="{"&&r!=="&"}else this.escaped=!!n;e instanceof U.SexprNode?this.sexpr=e:this.sexpr=new U.SexprNode(e,t),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(e,t,n){v.call(this,n),this.type="sexpr",this.hash=t;var i=this.id=e[0],s=this.params=e.slice(1);this.isHelper=!!(s.length||t),this.eligibleHelper=this.isHelper||i.isSimple},PartialNode:function(e,t,n,i,s){v.call(this,s),this.type="partial",this.partialName=e,this.context=t,this.hash=n,this.strip=i,this.strip.inlineStandalone=!0},BlockNode:function(e,t,n,i,s){v.call(this,s),this.type="block",this.mustache=e,this.program=t,this.inverse=n,this.strip=i,n&&!t&&(this.isInverse=!0)},RawBlockNode:function(e,t,n,i){if(v.call(this,i),e.sexpr.id.original!==n)throw new dt(e.sexpr.id.original+" doesn't match "+n,this);t=new U.ContentNode(t,i),this.type="block",this.mustache=e,this.program=new U.ProgramNode([t],{},i)},ContentNode:function(e,t){v.call(this,t),this.type="content",this.original=this.string=e},HashNode:function(e,t){v.call(this,t),this.type="hash",this.pairs=e},IdNode:function(e,t){v.call(this,t),this.type="ID";for(var n="",i=[],s=0,r="",a=0,o=e.length;a<o;a++){var c=e[a].part;if(n+=(e[a].separator||"")+c,c===".."||c==="."||c==="this"){if(i.length>0)throw new dt("Invalid path: "+n,this);c===".."?(s++,r+="../"):this.isScoped=!0}else i.push(c)}this.original=n,this.parts=i,this.string=i.join("."),this.depth=s,this.idName=r+this.string,this.isSimple=e.length===1&&!this.isScoped&&s===0,this.stringModeValue=this.string},PartialNameNode:function(e,t){v.call(this,t),this.type="PARTIAL_NAME",this.name=e.original},DataNode:function(e,t){v.call(this,t),this.type="DATA",this.id=e,this.stringModeValue=e.stringModeValue,this.idName="@"+e.stringModeValue},StringNode:function(e,t){v.call(this,t),this.type="STRING",this.original=this.string=this.stringModeValue=e},NumberNode:function(e,t){v.call(this,t),this.type="NUMBER",this.original=this.number=e,this.stringModeValue=Number(e)},BooleanNode:function(e,t){v.call(this,t),this.type="BOOLEAN",this.bool=e,this.stringModeValue=e==="true"},CommentNode:function(e,t){v.call(this,t),this.type="comment",this.comment=e,this.strip={inlineStandalone:!0}}};mt.default=U});var vt=m(gt=>{"use strict";p();var vn=(function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(s,r,a,o,c,h,u){var l=h.length-1;switch(c){case 1:return o.prepareProgram(h[l-1].statements,!0),h[l-1];break;case 2:this.$=new o.ProgramNode(o.prepareProgram(h[l]),{},this._$);break;case 3:this.$=h[l];break;case 4:this.$=h[l];break;case 5:this.$=h[l];break;case 6:this.$=h[l];break;case 7:this.$=new o.ContentNode(h[l],this._$);break;case 8:this.$=new o.CommentNode(h[l],this._$);break;case 9:this.$=new o.RawBlockNode(h[l-2],h[l-1],h[l],this._$);break;case 10:this.$=new o.MustacheNode(h[l-1],null,"","",this._$);break;case 11:this.$=o.prepareBlock(h[l-3],h[l-2],h[l-1],h[l],!1,this._$);break;case 12:this.$=o.prepareBlock(h[l-3],h[l-2],h[l-1],h[l],!0,this._$);break;case 13:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 14:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 15:this.$={strip:o.stripFlags(h[l-1],h[l-1]),program:h[l]};break;case 16:this.$={path:h[l-1],strip:o.stripFlags(h[l-2],h[l])};break;case 17:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 18:this.$=new o.MustacheNode(h[l-1],null,h[l-2],o.stripFlags(h[l-2],h[l]),this._$);break;case 19:this.$=new o.PartialNode(h[l-3],h[l-2],h[l-1],o.stripFlags(h[l-4],h[l]),this._$);break;case 20:this.$=new o.PartialNode(h[l-2],void 0,h[l-1],o.stripFlags(h[l-3],h[l]),this._$);break;case 21:this.$=new o.SexprNode([h[l-2]].concat(h[l-1]),h[l],this._$);break;case 22:this.$=new o.SexprNode([h[l]],null,this._$);break;case 23:this.$=h[l];break;case 24:this.$=new o.StringNode(h[l],this._$);break;case 25:this.$=new o.NumberNode(h[l],this._$);break;case 26:this.$=new o.BooleanNode(h[l],this._$);break;case 27:this.$=h[l];break;case 28:h[l-1].isHelper=!0,this.$=h[l-1];break;case 29:this.$=new o.HashNode(h[l],this._$);break;case 30:this.$=[h[l-2],h[l]];break;case 31:this.$=new o.PartialNameNode(h[l],this._$);break;case 32:this.$=new o.PartialNameNode(new o.StringNode(h[l],this._$),this._$);break;case 33:this.$=new o.PartialNameNode(new o.NumberNode(h[l],this._$));break;case 34:this.$=new o.DataNode(h[l],this._$);break;case 35:this.$=new o.IdNode(h[l],this._$);break;case 36:h[l-2].push({part:h[l],separator:h[l-1]}),this.$=h[l-2];break;case 37:this.$=[{part:h[l]}];break;case 38:this.$=[];break;case 39:h[l-1].push(h[l]);break;case 48:this.$=[];break;case 49:h[l-1].push(h[l]);break;case 52:this.$=[h[l]];break;case 53:h[l-1].push(h[l]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(s,r){throw new Error(s)},parse:function(s){var r=this,a=[0],o=[null],c=[],h=this.table,u="",l=0,w=0,T=0,C=2,Te=1;this.lexer.setInput(s),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var S=this.lexer.yylloc;c.push(S);var N=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function ae(b){a.length=a.length-2*b,o.length=o.length-b,c.length=c.length-b}function qt(){var b;return b=r.lexer.lex()||1,typeof b!="number"&&(b=r.symbols_[b]||b),b}for(var g,oe,I,k,jn,he,M={},K,x,Me,J;;){if(I=a[a.length-1],this.defaultActions[I]?k=this.defaultActions[I]:((g===null||typeof g>"u")&&(g=qt()),k=h[I]&&h[I][g]),typeof k>"u"||!k.length||!k[0]){var le="";if(!T){J=[];for(K in h[I])this.terminals_[K]&&K>2&&J.push("'"+this.terminals_[K]+"'");this.lexer.showPosition?le="Parse error on line "+(l+1)+`:
`+this.lexer.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[g]||g)+"'":le="Parse error on line "+(l+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(le,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:S,expected:J})}}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+g);switch(k[0]){case 1:a.push(g),o.push(this.lexer.yytext),c.push(this.lexer.yylloc),a.push(k[1]),g=null,oe?(g=oe,oe=null):(w=this.lexer.yyleng,u=this.lexer.yytext,l=this.lexer.yylineno,S=this.lexer.yylloc,T>0&&T--);break;case 2:if(x=this.productions_[k[1]][1],M.$=o[o.length-x],M._$={first_line:c[c.length-(x||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(x||1)].first_column,last_column:c[c.length-1].last_column},N&&(M._$.range=[c[c.length-(x||1)].range[0],c[c.length-1].range[1]]),he=this.performAction.call(M,u,w,l,this.yy,k[1],o,c),typeof he<"u")return he;x&&(a=a.slice(0,-1*x*2),o=o.slice(0,-1*x),c=c.slice(0,-1*x)),a.push(this.productions_[k[1]][0]),o.push(M.$),c.push(M._$),Me=h[a[a.length-2]][a[a.length-1]],a.push(Me);break;case 3:return!0}}return!0}},t=(function(){var i={EOF:1,parseError:function(r,a){if(this.yy.parser)this.yy.parser.parseError(r,a);else throw new Error(r)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var r=s.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var r=s.length,a=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===o.length?this.yylloc.first_column:0)+o[o.length-a.length].length-a[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),r=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,r,a,o,c,h;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),l=0;l<u.length&&(a=this._input.match(this.rules[u[l]]),!(a&&(!r||a[0].length>r[0].length)&&(r=a,o=l,!this.options.flex)));l++);return r?(h=r[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],s=this.performAction.call(this,this.yy,this,u[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return typeof r<"u"?r:this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(r){this.begin(r)}};return i.options={},i.performAction=function(r,a,o,c){function h(l,w){return a.yytext=a.yytext.substr(l,a.yyleng-w)}var u=c;switch(o){case 0:if(a.yytext.slice(-2)==="\\\\"?(h(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(h(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return a.yytext=a.yytext.substr(5,a.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return h(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return h(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return a.yytext=h(1,2).replace(/\\"/g,'"'),42;break;case 30:return a.yytext=h(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return a.yytext=h(1,2),50;break;case 37:return"INVALID";case 38:return 5}},i.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],i.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},i})();e.lexer=t;function n(){this.yy={}}return n.prototype=e,e.Parser=n,new n})();gt.default=vn});var kt=m(ne=>{"use strict";p();var kn=P().default;function yn(e,t){return{left:e.charAt(2)==="~",right:t.charAt(t.length-3)==="~"}}ne.stripFlags=yn;function bn(e,t,n,i,s,r){if(e.sexpr.id.original!==i.path.original)throw new kn(e.sexpr.id.original+" doesn't match "+i.path.original,e);var a=n&&n.program,o={left:e.strip.left,right:i.strip.right,openStandalone:Ee(t.statements),closeStandalone:Ne((a||t).statements)};if(e.strip.right&&R(t.statements,null,!0),a){var c=n.strip;c.left&&O(t.statements,null,!0),c.right&&R(a.statements,null,!0),i.strip.left&&O(a.statements,null,!0),Ne(t.statements)&&Ee(a.statements)&&(O(t.statements),R(a.statements))}else i.strip.left&&O(t.statements,null,!0);return s?new this.BlockNode(e,a,t,o,r):new this.BlockNode(e,t,a,o,r)}ne.prepareBlock=bn;function Sn(e,t){for(var n=0,i=e.length;n<i;n++){var s=e[n],r=s.strip;if(r){var a=Ne(e,n,t,s.type==="partial"),o=Ee(e,n,t),c=r.openStandalone&&a,h=r.closeStandalone&&o,u=r.inlineStandalone&&a&&o;r.right&&R(e,n,!0),r.left&&O(e,n,!0),u&&(R(e,n),O(e,n)&&s.type==="partial"&&(s.indent=/([ \t]+$)/.exec(e[n-1].original)?RegExp.$1:"")),c&&(R((s.program||s.inverse).statements),O(e,n)),h&&(R(e,n),O((s.inverse||s.program).statements))}}return e}ne.prepareProgram=Sn;function Ne(e,t,n){t===void 0&&(t=e.length);var i=e[t-1],s=e[t-2];if(!i)return n;if(i.type==="content")return(s||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}function Ee(e,t,n){t===void 0&&(t=-1);var i=e[t+1],s=e[t+2];if(!i)return n;if(i.type==="content")return(s||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}function R(e,t,n){var i=e[t==null?0:t+1];if(!(!i||i.type!=="content"||!n&&i.rightStripped)){var s=i.string;i.string=i.string.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.string!==s}}function O(e,t,n){var i=e[t==null?e.length-1:t-1];if(!(!i||i.type!=="content"||!n&&i.leftStripped)){var s=i.string;return i.string=i.string.replace(n?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.string!==s,i.leftStripped}}});var Oe=m(_e=>{"use strict";p();var Pe=vt().default,yt=we().default,xn=kt(),wn=V().extend;_e.parser=Pe;var bt={};wn(bt,xn,yt);function Nn(e){return e.constructor===yt.ProgramNode?e:(Pe.yy=bt,Pe.parse(e))}_e.parse=Nn});var se=m(ie=>{"use strict";p();var Ie=P().default,St=V().isArray,En=[].slice;function Ce(){}ie.Compiler=Ce;Ce.prototype={compiler:Ce,equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t)return!1;for(var n=0;n<t;n++){var i=this.opcodes[n],s=e.opcodes[n];if(i.opcode!==s.opcode||!xt(i.args,s.args))return!1}for(t=this.children.length,n=0;n<t;n++)if(!this.children[n].equals(e.children[n]))return!1;return!0},guid:0,compile:function(e,t){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds;var n=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},n)for(var i in n)this.options.knownHelpers[i]=n[i];return this.accept(e)},accept:function(e){return this[e.type](e)},program:function(e){for(var t=e.statements,n=0,i=t.length;n<i;n++)this.accept(t[n]);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(s,r){return s-r}),this},compileProgram:function(e){var t=new this.compiler().compile(e,this.options),n=this.guid++,i;this.usePartial=this.usePartial||t.usePartial,this.children[n]=t;for(var s=0,r=t.depths.list.length;s<r;s++)i=t.depths.list[s],!(i<2)&&this.addDepth(i-1);return n},block:function(e){var t=e.mustache,n=e.program,i=e.inverse;n&&(n=this.compileProgram(n)),i&&(i=this.compileProgram(i));var s=t.sexpr,r=this.classifySexpr(s);r==="helper"?this.helperSexpr(s,n,i):r==="simple"?(this.simpleSexpr(s),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("blockValue",s.id.original)):(this.ambiguousSexpr(s,n,i),this.opcode("pushProgram",n),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(e){var t=e.pairs,n,i;for(this.opcode("pushHash"),n=0,i=t.length;n<i;n++)this.pushParam(t[n][1]);for(;n--;)this.opcode("assignToHash",t[n][0]);this.opcode("popHash")},partial:function(e){var t=e.partialName;this.usePartial=!0,e.hash?this.accept(e.hash):this.opcode("push","undefined"),e.context?this.accept(e.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",t.name,e.indent||""),this.opcode("append")},content:function(e){e.string&&this.opcode("appendContent",e.string)},mustache:function(e){this.sexpr(e.sexpr),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(e,t,n){var i=e.id,s=i.parts[0],r=t!=null||n!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.ID(i),this.opcode("invokeAmbiguous",s,r)},simpleSexpr:function(e){var t=e.id;t.type==="DATA"?this.DATA(t):t.parts.length?this.ID(t):(this.addDepth(t.depth),this.opcode("getContext",t.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,n){var i=this.setupFullMustacheParams(e,t,n),s=e.id,r=s.parts[0];if(this.options.knownHelpers[r])this.opcode("invokeKnownHelper",i.length,r);else{if(this.options.knownHelpersOnly)throw new Ie("You specified knownHelpersOnly, but used the unknown helper "+r,e);s.falsy=!0,this.ID(s),this.opcode("invokeHelper",i.length,s.original,s.isSimple)}},sexpr:function(e){var t=this.classifySexpr(e);t==="simple"?this.simpleSexpr(e):t==="helper"?this.helperSexpr(e):this.ambiguousSexpr(e)},ID:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var t=e.parts[0];t?this.opcode("lookupOnContext",e.parts,e.falsy,e.isScoped):this.opcode("pushContext")},DATA:function(e){this.options.data=!0,this.opcode("lookupData",e.id.depth,e.id.parts)},STRING:function(e){this.opcode("pushString",e.string)},NUMBER:function(e){this.opcode("pushLiteral",e.number)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:En.call(arguments,1)})},addDepth:function(e){e!==0&&(this.depths[e]||(this.depths[e]=!0,this.depths.list.push(e)))},classifySexpr:function(e){var t=e.isHelper,n=e.eligibleHelper,i=this.options;if(n&&!t){var s=e.id.parts[0];i.knownHelpers[s]?t=!0:i.knownHelpersOnly&&(n=!1)}return t?"helper":n?"ambiguous":"simple"},pushParams:function(e){for(var t=0,n=e.length;t<n;t++)this.pushParam(e[t])},pushParam:function(e){this.stringParams?(e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",e.stringModeValue,e.type),e.type==="sexpr"&&this.sexpr(e)):(this.trackIds&&this.opcode("pushId",e.type,e.idName||e.stringModeValue),this.accept(e))},setupFullMustacheParams:function(e,t,n){var i=e.params;return this.pushParams(i),this.opcode("pushProgram",t),this.opcode("pushProgram",n),e.hash?this.hash(e.hash):this.opcode("emptyHash"),i}};function Pn(e,t,n){if(e==null||typeof e!="string"&&e.constructor!==n.AST.ProgramNode)throw new Ie("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var i=n.parse(e),s=new n.Compiler().compile(i,t);return new n.JavaScriptCompiler().compile(s,t)}ie.precompile=Pn;function _n(e,t,n){if(e==null||typeof e!="string"&&e.constructor!==n.AST.ProgramNode)throw new Ie("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var i;function s(){var a=n.parse(e),o=new n.Compiler().compile(a,t),c=new n.JavaScriptCompiler().compile(o,t,void 0,!0);return n.template(c)}var r=function(a,o){return i||(i=s()),i.call(this,a,o)};return r._setup=function(a){return i||(i=s()),i._setup(a)},r._child=function(a,o,c){return i||(i=s()),i._child(a,o,c)},r}ie.compile=_n;function xt(e,t){if(e===t)return!0;if(St(e)&&St(t)&&e.length===t.length){for(var n=0;n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}}});var Pt=m(Et=>{"use strict";p();var On=A().COMPILER_REVISION,Cn=A().REVISION_CHANGES,Ae=P().default;function z(e){this.value=e}function L(){}L.prototype={nameLookup:function(e,t){return L.isValidJavaScriptVariableName(t)?e+"."+t:e+"['"+t+"']"},depthedLookup:function(e){return this.aliases.lookup="this.lookup",'lookup(depths, "'+e+'")'},compilerInfo:function(){var e=On,t=Cn[e];return[e,t]},appendToBuffer:function(e){return this.environment.isSimple?"return "+e+";":{appendToBuffer:!0,content:e,toString:function(){return"buffer += "+e+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,t,n,i){this.environment=e,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!n,this.context=n||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(e,t),this.useDepths=this.useDepths||e.depths.list.length||this.options.compat;var s=e.opcodes,r,a,o;for(a=0,o=s.length;a<o;a++)r=s[a],this[r.opcode].apply(this,r.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Ae("Compile completed with content left on stack");var c=this.createFunctionContext(i);if(this.isChild)return c;var h={compiler:this.compilerInfo(),main:c},u=this.context.programs;for(a=0,o=u.length;a<o;a++)u[a]&&(h[a]=u[a]);return this.environment.usePartial&&(h.usePartial=!0),this.options.data&&(h.useData=!0),this.useDepths&&(h.useDepths=!0),this.options.compat&&(h.compat=!0),i||(h.compiler=JSON.stringify(h.compiler),h=this.objectLiteral(h)),h},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(e){var t="",n=this.stackVars.concat(this.registers.list);n.length>0&&(t+=", "+n.join(", "));for(var i in this.aliases)this.aliases.hasOwnProperty(i)&&(t+=", "+i+"="+this.aliases[i]);var s=["depth0","helpers","partials","data"];this.useDepths&&s.push("depths");var r=this.mergeSource(t);return e?(s.push(r),Function.apply(this,s)):"function("+s.join(",")+`) {
  `+r+"}"},mergeSource:function(e){for(var t="",n,i=!this.forceBuffer,s,r=0,a=this.source.length;r<a;r++){var o=this.source[r];o.appendToBuffer?n?n=n+`
    + `+o.content:n=o.content:(n&&(t?t+="buffer += "+n+`;
  `:(s=!0,t=n+`;
  `),n=void 0),t+=o+`
  `,this.environment.isSimple||(i=!1))}return i?(n||!t)&&(t+="return "+(n||'""')+`;
`):(e+=", buffer = "+(s?"":this.initializeBuffer()),n?t+="return buffer + "+n+`;
`:t+=`return buffer;
`),e&&(t="var "+e.substring(2)+(s?"":`;
  `)+t),t},blockValue:function(e){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams(e,0,t);var n=this.popStack();t.splice(1,0,n),this.push("blockHelperMissing.call("+t.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams("",0,e,!0),this.flushInline();var t=this.topStack();e.splice(1,0,t),this.pushSource("if (!"+this.lastHelper+") { "+t+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){this.pendingContent&&(e=this.pendingContent+e),this.pendingContent=e},append:function(){this.flushInline();var e=this.popStack();this.pushSource("if ("+e+" != null) { "+this.appendToBuffer(e)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,t,n){var i=0,s=e.length;for(!n&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(e[i++])):this.pushContext();i<s;i++)this.replaceStack(function(r){var a=this.nameLookup(r,e[i],"context");return t?" && "+a:" != null ? "+a+" : "+r})},lookupData:function(e,t){e?this.pushStackLiteral("this.data(data, "+e+")"):this.pushStackLiteral("data");for(var n=t.length,i=0;i<n;i++)this.replaceStack(function(s){return" && "+this.nameLookup(s,t[i],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(e,t){this.pushContext(),this.pushString(t),t!=="sexpr"&&(typeof e=="string"?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+e.ids.join(",")+"}"),this.stringParams&&(this.push("{"+e.contexts.join(",")+"}"),this.push("{"+e.types.join(",")+"}")),this.push(`{
    `+e.values.join(`,
    `)+`
  }`)},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){return this.inlineStack.push(e),e},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){e!=null?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},invokeHelper:function(e,t,n){this.aliases.helperMissing="helpers.helperMissing";var i=this.popStack(),s=this.setupHelper(e,t),r=(n?s.name+" || ":"")+i+" || helperMissing";this.push("(("+r+").call("+s.callParams+"))")},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(e,t){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var n=this.popStack();this.emptyHash();var i=this.setupHelper(0,e,t),s=this.lastHelper=this.nameLookup("helpers",e,"helper");this.push("((helper = (helper = "+s+" || "+n+") != null ? helper : helperMissing"+(i.paramsInit?"),("+i.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+i.callParams+") : helper))")},invokePartial:function(e,t){var n=[this.nameLookup("partials",e,"partial"),"'"+t+"'","'"+e+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?n.push("data"):this.options.compat&&n.push("undefined"),this.options.compat&&n.push("depths"),this.push("this.invokePartial("+n.join(", ")+")")},assignToHash:function(e){var t=this.popStack(),n,i,s;this.trackIds&&(s=this.popStack()),this.stringParams&&(i=this.popStack(),n=this.popStack());var r=this.hash;n&&r.contexts.push("'"+e+"': "+n),i&&r.types.push("'"+e+"': "+i),s&&r.ids.push("'"+e+"': "+s),r.values.push("'"+e+"': ("+t+")")},pushId:function(e,t){e==="ID"||e==="DATA"?this.pushString(t):e==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:L,compileChildren:function(e,t){for(var n=e.children,i,s,r=0,a=n.length;r<a;r++){i=n[r],s=new this.compiler;var o=this.matchExistingProgram(i);o==null?(this.context.programs.push(""),o=this.context.programs.length,i.index=o,i.name="program"+o,this.context.programs[o]=s.compile(i,t,this.context,!this.precompile),this.context.environments[o]=i,this.useDepths=this.useDepths||s.useDepths):(i.index=o,i.name="program"+o)}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var i=this.context.environments[t];if(i&&i.equals(e))return t}},programExpression:function(e){var t=this.environment.children[e],n=t.depths.list,i=this.useDepths,s,r=[t.index,"data"];return i&&r.push("depths"),"this.program("+r.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},pushStackLiteral:function(e){return this.push(new z(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),e&&this.source.push(e)},pushStack:function(e){this.flushInline();var t=this.incrStack();return this.pushSource(t+" = "+e+";"),this.compileStack.push(t),t},replaceStack:function(e){var t="",n=this.isInline(),i,s,r;if(!this.isInline())throw new Ae("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof z)t=i=a.value,r=!0;else{s=!this.stackSlot;var o=s?this.incrStack():this.topStackName();t="("+this.push(o)+" = "+a+")",i=this.topStack()}var c=e.call(this,i);r||this.popStack(),s&&this.stackSlot--,this.push("("+t+c+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;if(e.length){this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var i=e[t];i instanceof z?this.compileStack.push(i):this.pushStack(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof z)return n.value;if(!t){if(!this.stackSlot)throw new Ae("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,t=e[e.length-1];return t instanceof z?t.value:t},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(this.quotedString(n)+":"+e[n]);return"{"+t.join(",")+"}"},setupHelper:function(e,t,n){var i=[],s=this.setupParams(t,e,i,n),r=this.nameLookup("helpers",t,"helper");return{params:i,paramsInit:s,name:r,callParams:[this.contextName(0)].concat(i).join(", ")}},setupOptions:function(e,t,n){var i={},s=[],r=[],a=[],o,c,h;i.name=this.quotedString(e),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack()),c=this.popStack(),h=this.popStack(),(h||c)&&(h||(h="this.noop"),c||(c="this.noop"),i.fn=h,i.inverse=c);for(var u=t;u--;)o=this.popStack(),n[u]=o,this.trackIds&&(a[u]=this.popStack()),this.stringParams&&(r[u]=this.popStack(),s[u]=this.popStack());return this.trackIds&&(i.ids="["+a.join(",")+"]"),this.stringParams&&(i.types="["+r.join(",")+"]",i.contexts="["+s.join(",")+"]"),this.options.data&&(i.data="data"),i},setupParams:function(e,t,n,i){var s=this.objectLiteral(this.setupOptions(e,t,n));return i?(this.useRegister("options"),n.push("options"),"options="+s):(n.push(s),"")}};var wt="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),In=L.RESERVED_WORDS={};for(re=0,Nt=wt.length;re<Nt;re++)In[wt[re]]=!0;var re,Nt;L.isValidJavaScriptVariableName=function(e){return!L.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)};Et.default=L});var Ct=m(Ot=>{"use strict";p();var B=ft().default,An=we().default,Hn=Oe().parser,Rn=Oe().parse,Ln=se().Compiler,Dn=se().compile,Tn=se().precompile,Mn=Pt().default,Vn=B.create,_t=function(){var e=Vn();return e.compile=function(t,n){return Dn(t,n,e)},e.precompile=function(t,n){return Tn(t,n,e)},e.AST=An,e.Compiler=Ln,e.JavaScriptCompiler=Mn,e.Parser=Hn,e.parse=Rn,e};B=_t();B.create=_t;B.default=B;Ot.default=B});var Re=m(It=>{"use strict";p();function He(){}He.prototype={constructor:He,accept:function(e){return this[e.type](e)}};It.default=He});var At=m(Le=>{"use strict";p();var qn=Re().default;function Bn(e){return new d().accept(e)}Le.print=Bn;function d(){this.padding=0}Le.PrintVisitor=d;d.prototype=new qn;d.prototype.pad=function(e){for(var t="",n=0,i=this.padding;n<i;n++)t=t+"  ";return t=t+e+`
`,t};d.prototype.program=function(e){var t="",n=e.statements,i,s;for(i=0,s=n.length;i<s;i++)t=t+this.accept(n[i]);return this.padding--,t};d.prototype.block=function(e){var t="";return t=t+this.pad("BLOCK:"),this.padding++,t=t+this.accept(e.mustache),e.program&&(t=t+this.pad("PROGRAM:"),this.padding++,t=t+this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,t=t+this.pad("{{^}}"),this.padding++,t=t+this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,t};d.prototype.sexpr=function(e){for(var t=e.params,n=[],i,s=0,r=t.length;s<r;s++)n.push(this.accept(t[s]));return t="["+n.join(", ")+"]",i=e.hash?" "+this.accept(e.hash):"",this.accept(e.id)+" "+t+i};d.prototype.mustache=function(e){return this.pad("{{ "+this.accept(e.sexpr)+" }}")};d.prototype.partial=function(e){var t=this.accept(e.partialName);return e.context&&(t+=" "+this.accept(e.context)),e.hash&&(t+=" "+this.accept(e.hash)),this.pad("{{> "+t+" }}")};d.prototype.hash=function(e){for(var t=e.pairs,n=[],i,s,r=0,a=t.length;r<a;r++)i=t[r][0],s=this.accept(t[r][1]),n.push(i+"="+s);return"HASH{"+n.join(", ")+"}"};d.prototype.STRING=function(e){return'"'+e.string+'"'};d.prototype.NUMBER=function(e){return"NUMBER{"+e.number+"}"};d.prototype.BOOLEAN=function(e){return"BOOLEAN{"+e.bool+"}"};d.prototype.ID=function(e){var t=e.parts.join("/");return e.parts.length>1?"PATH:"+t:"ID:"+t};d.prototype.PARTIAL_NAME=function(e){return"PARTIAL:"+e.name};d.prototype.DATA=function(e){return"@"+this.accept(e.id)};d.prototype.content=function(e){return this.pad("CONTENT[ '"+e.string+"' ]")};d.prototype.comment=function(e){return this.pad("{{! '"+e.comment+"' }}")}});var Lt=m((wi,Rt)=>{p();var W=Ct().default;W.Visitor=Re().default;var Ht=At();W.PrintVisitor=Ht.PrintVisitor;W.print=Ht.print;Rt.exports=W;typeof F<"u"&&F.extensions&&(De=function(e,t){var n=(de(),Be(fe)),i=n.readFileSync(t,"utf8");e.exports=W.compile(i)},F.extensions[".handlebars"]=De,F.extensions[".hbs"]=De);var De});var Mt=m((Pi,Tt)=>{p();var Dt=(de(),Be(fe)),G=Lt();Tt.exports={render:Fn};function Fn(e){var t=Dt.readFileSync("//style.css","utf-8"),n=Dt.readFileSync("//resume.template","utf-8");return G.compile(n)({css:t,resume:e})}G.registerHelper("nl2br",function(e){return(e||"").replace(/\n/g,"</p><p>")});G.registerHelper("firstName",function(e){return e.split(" ")[0]});G.registerHelper("lastName",function(e){return e.split(" ")[1]});G.registerHelper("keywordsList",function(e){return"("+e.join(", ")+")"})});p();var D=Gt(Mt(),1),Vt=D.default??D,Oi=Vt.render??D.render,Ci=Vt.pdfRenderOptions??D.pdfRenderOptions;export{Ci as pdfRenderOptions,Oi as render};
