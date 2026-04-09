var qt=Object.create;var Y=Object.defineProperty;var Ft=Object.getOwnPropertyDescriptor;var jt=Object.getOwnPropertyNames;var Ut=Object.getPrototypeOf,Wt=Object.prototype.hasOwnProperty;var F=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Be=(e,t)=>()=>(e&&(t=e(e=0)),t);var g=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Kt=(e,t)=>{for(var i in t)Y(e,i,{get:t[i],enumerable:!0})},Ve=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of jt(t))!Wt.call(e,s)&&s!==i&&Y(e,s,{get:()=>t[s],enumerable:!(n=Ft(t,s))||n.enumerable});return e};var Gt=(e,t,i)=>(i=e!=null?qt(Ut(e)):{},Ve(t||!e||!e.__esModule?Y(i,"default",{value:e,enumerable:!0}):i,e)),qe=e=>Ve(Y({},"__esModule",{value:!0}),e);var p=Be(()=>{});var ue={};Kt(ue,{createReadStream:()=>Xe,createWriteStream:()=>Ze,default:()=>zt,existsSync:()=>We,lstatSync:()=>ze,mkdirSync:()=>Ge,readFileSync:()=>je,readdirSync:()=>Ue,rmdirSync:()=>Je,statSync:()=>pe,unlinkSync:()=>Ye,writeFileSync:()=>Ke});function ce(e){return String(e).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Fe(e){var t=ce(e);if(J[t]!==void 0)return J[t];for(var i=Object.keys(J),n=0;n<i.length;n++)if(t.endsWith("/"+i[n])||t===i[n])return J[i[n]]}function he(e){var t=ce(e);if(X[t]!==void 0)return X[t];for(var i=Object.keys(X),n=0;n<i.length;n++)if(t.endsWith("/"+i[n])||t===i[n])return X[i[n]]}var J,X,je,Ue,We,Ke,Ge,pe,ze,Ye,Je,Xe,Ze,zt,fe=Be(()=>{"use strict";p();J={"package.json":`{
  "name": "jsonresume-theme-kate",
  "version": "1.0.1",
  "description": "A modified version of Ainsley Chong's onepage; a compact, printable theme for JSON Resume",
  "author": "Dave Tacker",
  "repository": {
    "type": "git",
    "url": "https://github.com/kneeki/jsonresume-theme-Kate.git"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4",
    "css": "2.2.x"
  },
  "bugs": {
    "url": "https://github.com/kneeki/jsonresume-theme-Kate/issues"
  },
  "homepage": "https://github.com/kneeki/jsonresume-theme-Kate",
  "main": "index.js",
  "devDependencies": {}
}
`,"resume.hbs":`<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">
        <title>{{resume.basics.name}}</title>
        <style>
            {{{css}}}
        </style>
    </head>
    <body>
        <div class="controls">
            <h3>Display</h3>
            <hr>
            <ul style="list-style-type: none;">
                <li>
                    <h4>Experience</h4>
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('experience')" checked> Block
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('experience_salary')" checked> Salary
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('experience_hours')" checked> Hours
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('experience_dates')" checked> Dates
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('experience_address')" checked> Address
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('experience_website')" checked> Website
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('experience_supervisor')" checked> Supervisor
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('experience_contact_phone')" checked> Contact Phone
                </li>
                <li>
                    <h4>Volunteer</h4>
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('volunteer')" checked> Block
                </li>
                <li>
                    <h4>Awards</h4>
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('awards')" checked> Block
                </li>
                <li>
                    <h4>Education</h4>
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('education')" checked> Block
                </li>
                <li>
                    <h4>Publications</h4>
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('publications')" checked> Block
                </li>
                <li>
                    <h4>Languages</h4>
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('languages')" checked> Block
                </li>
                <li>
                    <h4>References</h4>
                </li>
                <li>
                    <input type="checkbox" onclick="toggle('references')" checked> Block
                </li>
            </ul>
        </div>
        <div class="resume">
            {{#resume.basics}}
            <div class="largeFont">
                {{name}}{{#if label}}, {{label}}{{/if}}
            </div>
            <div class="smallFont">
                {{#if email}}
                <span class="email"><a href="mailto:{{email}}">{{email}}</a></span>
                {{/if}}
                {{#if phone}}
                <span class="divider">|</span>
                <span class="phone">{{phone}}</span>
                {{/if}}
                {{#location}}
                <span class="divider">|</span>
                <span class="address">
                    {{#if city}}{{city}}{{/if}}{{#if region}}, {{region}}{{/if}}
                </span>
                {{/location}}
                {{#if profiles.length}}
                {{#each profiles}}
                {{#if url}}
                <span class="url">
                    <a href="{{url}}">{{url}}</a>
                </span>
                {{#unless @last}}<span class="divider">|</span>{{/unless}}
                {{/if}}
                {{/each}}
                {{/if}}
            </div>
            <div class="sectionLine"></div>
            {{/resume.basics}}

            {{#if resume.basics.summary}}
            <div class="sectionName">
                <span>SUMMARY</span>
            </div>
            <span>{{resume.basics.summary}}</span>
            <div class="sectionLine"></div>
            {{/if}}

            {{#if resume.skills.length}}
            <div class="sectionName">
                <span>SKILLS</span>
            </div>
            {{#each resume.skills}}
            <div class="skillBlock">
                <span class="title">{{#if name}}{{name}}{{/if}}:</span>
                {{#if keywords.length}}
                {{#each keywords}}
                <span>{{.}}</span>{{#unless @last}}, {{/unless}}
                {{/each}}
                {{/if}}
            </div>
            {{/each}}
            <div class="sectionLine"></div>
            {{/if}}

            {{#if resume.interests.length}}
            {{#each resume.optional_section_titles.interests}}
            <div class="sectionName">
                {{.}}
            </div>
            {{/each}}

            {{#each resume.interests}}
            <div style="float: left; width: 50%;">
                <div class="sectionName" style="font-size: 1em; color: #000;">
                    {{name}}
                </div>

                <ul style="margin-top: 0;">
                    {{#each keywords}}
                    <li>{{.}}</li>
                    {{/each}}
                </ul>
            </div>
            {{/each}}

            <div class="clearfix"></div>
            <div class="sectionLine"></div>
            {{/if}}


            <div class="clearfix"></div>

            {{#if resume.work.length}}
            <span section='true' toggle='true' data-id="experience">
                <div class="sectionName">
                    <span>PROFESSIONAL EXPERIENCE</span>
                </div>
                {{#each resume.work}}
                <span class="title">
                    {{#if position}}{{position}}{{/if}}

                    <span style="float: right;">
                        <span style="font-weight: normal">
                            <span toggle='true' data-id="experience_hours">
                                {{#if hours}}{{hours}}{{#if salary}},{{/if}}{{/if}}
                            </span>
                            <span toggle='true' data-id="experience_salary">
                                {{#if salary}}{{salary}}{{#if startDate}}, {{/if}}{{/if}}
                            </span>
                        </span>

                        <span toggle='true' data-id="experience_dates">
                            {{#if startDate}}{{startDate}}{{/if}}
                            {{#if endDate}}to{{/if}}
                            {{#if endDate}}{{endDate}}{{/if}}
                        </span>
                    </span>

                    {{#if company}}<br />{{company}}{{/if}}

                    <span style="font-weight: normal; float: right;">
                        <span toggle='true' data-id="experience_website">
                            <a href="{{website}}">{{website}}</a>
                        </span>
                        <span toggle='true' data-id="experience_address">
                            {{#if address}}{{address}}{{#if supervisor}}, {{/if}}{{/if}}
                        </span>
                        <span toggle='true' data-id="experience_supervisor">
                            {{#if supervisor}}{{supervisor}}{{#if contact_phone}}: {{/if}}{{/if}}
                        </span>
                        <span toggle='true' data-id="experience_contact_phone">
                            {{#if contact_phone}}{{contact_phone}}{{/if}}
                        </span>
                    </span>
                </span>

                {{#if summary}}
                <p class="worksummary">{{summary}}</p>
                {{/if}}
                {{#if highlights.length}}
                <ul class="highlights">
                    {{#each highlights}}
                    <li>{{.}}</li>
                    {{/each}}
                </ul>
                {{/if}}
                {{#unless @last}}<div class="separator"></div>{{/unless}}
                {{/each}}
                <div class="sectionLine"></div>
            </span>

            <div class="clearfix"></div>
            {{/if}}


            {{#if resume.volunteer.length}}
            <span section='true' toggle='true' data-id="volunteer">
                <div class="sectionName">
                    <span>VOLUNTEER EXPERIENCE</span>
                </div>
                {{#each resume.volunteer}}
                <span class="title">
                    {{#if organization}}{{organization}}{{/if}}{{#if position}}, {{position}}{{/if}}
                    {{#if startDate}}
                    <span class="date">
                        {{#if startDate}}{{startDate}}{{/if}} to {{#if endDate}}{{endDate}}{{else}}Present{{/if}}
                    </span>
                    {{/if}}
                </span>
                {{#if website}}
                <div class="website"><a href="{{website}}">{{website}}</a></div>
                {{/if}}
                {{#if summary}}
                <p class="volunteersummary">{{summary}}</p>
                {{/if}}

                {{#if highlights.length}}
                <ul class="highlights">
                    {{#each highlights}}
                    <li>{{.}}</li>
                    {{/each}}
                </ul>
                {{/if}}

                {{#unless @last}}<div class="separator"></div>{{/unless}}
                {{/each}}
                <div class="sectionLine"></div>
            </span>

            <div class="clearfix"></div>
            {{/if}}


            {{#if resume.publications.length}}
            <span section='true' toggle='true' data-id="publications">
                <div class="sectionName">
                    <span>PUBLICATIONS</span>
                </div>
                {{#each resume.publications}}
                <span class="title">
                    {{#if name}}{{name}}{{/if}}{{#if publisher}}, {{publisher}}{{/if}}
                </span>
                {{#if releaseDate}}
                <span class="date">
                    <span class="releaseDate">{{releaseDate}}</span>
                </span>
                {{/if}}
                {{#if website}}
                <div class="website">
                    <a href="{{website}}">{{website}}</a>
                </div>
                {{/if}}
                {{#if summary}}{{summary}}{{/if}}
                {{#unless @last}}<div class="separator"></div>{{/unless}}
                {{/each}}
                <div class="sectionLine"></div>
            </span>

            <div class="clearfix"></div>
            {{/if}}


            {{#if resume.education.length}}
            <span section='true' toggle='true' data-id="education" style="display: block">
                <div class="sectionName">
                    <span>EDUCATION</span>
                </div>
                {{#each resume.education}}
                <span class="title">
                    {{#if studyType}}{{studyType}} {{/if}} - {{#if area}}{{area}}{{/if}}{{#if gpa}}, GPA: {{gpa}}{{/if}}
                    {{#if startDate}}
                    <span class="date">
                        {{#if startDate}}{{startDate}}{{/if}} to {{#if endDate}}{{endDate}}{{else}}Present{{/if}}
                    </span>
                    {{/if}}
                </span>
                {{#if institution}}<br />{{institution}}{{/if}}
                {{#if courses.length}}
                {{#each courses}}
                <ul class="coursesList">
                    {{#each .}}
                    <li class="course">{{.}}</li>
                    {{/each}}
                </ul>
                {{/each}}
                {{/if}}
                {{#unless @last}}<div class="separator"></div>{{/unless}}
                {{/each}}
                <div class="sectionLine"></div>
            </span>

            <div class="clearfix"></div>
            {{/if}}


            {{#if resume.awards.length}}
            <span section='true' toggle='true' data-id="awards">
                <div class="sectionName">
                    <span>AWARDS</span>
                </div>
                {{#each resume.awards}}
                <span class="title">
                    {{#if title}}{{title}}{{/if}}
                </span>


                {{#if date}}
                <span class="date">
                    {{date}}
                </span>
                {{/if}}


                {{#if highlights}}
                <ul class="highlights">
                    <li>{{highlights}}</li>
                </ul>
                {{/if}}

                {{#unless @last}}<div class="separator"></div>{{/unless}}
                {{/each}}


                <div class="sectionLine"></div>
            </span>

            <div class="clearfix"></div>
            {{/if}}


            {{#if resume.languages.length}}
            <span section='true' toggle='true' data-id="languages">
                <div class="sectionName">
                    <span>LANGUAGES</span>
                </div>
                {{#each resume.languages}}
                <span class="language">{{language}}</span>
                {{#if fluency}}
                <span class="fluency"><em>({{fluency}})</em></span>
                {{/if}}
                {{#unless @last}}<span>,</span>{{/unless}}
                {{/each}}
                <div class="sectionLine"></div>
            </span>

            <div class="clearfix"></div>
            {{/if}}


            {{#if resume.references.length}}
            <span section='true' toggle='true' data-id="references">
                <div class="sectionName">
                    <span>REFERENCES</span>
                </div>
                {{#each resume.references}}
                <span class="name">{{name}}</span> - <em class="reference">{{reference}}</em>
                {{#unless @last}}<div class="separator"></div>{{/unless}}
                {{/each}}
            </span>
            {{/if}}
        </div> <!-- // Container -->

        <script type="text/javascript">
            function toggle(selector) {
                var elements = document.querySelectorAll('[data-id="' + selector + '"]');

                if (elements.length > 0) {
                    elements.forEach(function (spanBlock) {
                        var style = window.getComputedStyle(spanBlock),
                            display = style.getPropertyValue('display');

                        if (display === "inline-block") {
                            spanBlock.style.display = "none";
                        } else {
                            spanBlock.style.display = "inline-block";
                        }
                    })
                }
            }
        <\/script>
    </body>
</html>
`,"style.css":`body {
    background: #EEEEEE;
    font: 12px "Times New Roman", Times, sans-serif;
    line-height: 1.4;
    margin: 40px 0;
}
ul {
    margin-bottom: 0;
    padding-left: 20px;
    margin-top: 2px;
    list-style-type: circle;
}
li {
    margin-bottom: 2px;
}
a {
    text-decoration: underline;
    color: #000;
}
.resume {
    margin: 0 auto;
    max-width: 600px;
    padding: 80px 100px;
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 4px #aaa;
    -webkit-box-shadow: 2px 2px 4px #aaa;
}
.largeFont {
    font: 20px Helvetica;
}
.smallFont {
    font: 12px Verdana;
}
.sectionName {
    width: 100%;
    vertical-align: top;
    display: inline-block;
    font: 120% Helvetica, Arial;
    text-transform: uppercase;
}
.title {
    font-weight: bold;
}
.date {
    float: right;
    font-weight: bold;
}
.separator {
    height: 5px;
}
.sectionLine {
    border-style: dashed;
    border-width: 1px;
    border-color: #CFCFCF;
    margin-top: 10px;
    margin-bottom: 10px;
}
.divider {
    font-weight: bold;
    margin-left: 5px;
    margin-right: 5px;
}
span[toggle='true'] {
    display: inline-block;
}
span[section='true'] {
    display: block;
}
.controls {
    position: fixed;
    top: 20px;
    left: 20px;
    max-width: 300px;
    width: 300px;
}
ul > li > h4 {
    margin-bottom: 0;
}
.clearfix {
    clear: both;
}
/*
 * Set some print settings. We're going to try and enforce 1" margins.
*/
@media print {
    @page {
        size: letter portrait;
        margin: 25mm 25mm 25mm 25mm;
    }
    .resume {
        max-width: 100%;
        border: 0px;
        background: #fff;
        box-shadow: none;
        -webkit-box-shadow: none;
    }
    body,
    html,
    .resume {
        margin: 0px;
        padding: 0px;
    }
    .controls {
        display: none;
    }
}
`},X={".":["README.md","index.js","package.json","preview.png","resume.hbs","style.css"]};je=function(e,t){var i=Fe(e);return i!==void 0?i:""},Ue=function(e,t){var i=he(e);return i===void 0&&(i=[]),t&&t.withFileTypes?i.map(function(n){var s=ce(e)+"/"+n,r=he(s)!==void 0;return{name:n,isFile:function(){return!r},isDirectory:function(){return r}}}):i},We=function(e){return Fe(e)!==void 0||he(e)!==void 0},Ke=function(){},Ge=function(){},pe=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},ze=pe,Ye=function(){},Je=function(){},Xe=function(){return{pipe:function(e){return e},on:function(){return this}}},Ze=function(){return{write:function(){},end:function(){},on:function(){return this}}},zt={readFileSync:je,readdirSync:Ue,existsSync:We,writeFileSync:Ke,mkdirSync:Ge,statSync:pe,lstatSync:ze,unlinkSync:Ye,rmdirSync:Je,createReadStream:Xe,createWriteStream:Ze}});var de=g($e=>{"use strict";p();function Qe(e){this.string=e}Qe.prototype.toString=function(){return""+this.string};$e.default=Qe});var B=g(N=>{"use strict";p();var Yt=de().default,Jt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Xt=/[&<>"'`]/g,Zt=/[&<>"'`]/;function Qt(e){return Jt[e]}function $t(e){for(var t=1;t<arguments.length;t++)for(var i in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],i)&&(e[i]=arguments[t][i]);return e}N.extend=$t;var ge=Object.prototype.toString;N.toString=ge;var Z=function(e){return typeof e=="function"};Z(/x/)&&(Z=function(e){return typeof e=="function"&&ge.call(e)==="[object Function]"});var Z;N.isFunction=Z;var et=Array.isArray||function(e){return e&&typeof e=="object"?ge.call(e)==="[object Array]":!1};N.isArray=et;function ei(e){return e instanceof Yt?e.toString():e==null?"":e?(e=""+e,Zt.test(e)?e.replace(Xt,Qt):e):e+""}N.escapeExpression=ei;function ti(e){return!e&&e!==0?!0:!!(et(e)&&e.length===0)}N.isEmpty=ti;function ii(e,t){return(e?e+".":"")+t}N.appendContextPath=ii});var _=g(it=>{"use strict";p();var me=["description","fileName","lineNumber","message","name","number","stack"];function tt(e,t){var i;t&&t.firstLine&&(i=t.firstLine,e+=" - "+i+":"+t.firstColumn);for(var n=Error.prototype.constructor.call(this,e),s=0;s<me.length;s++)this[me[s]]=n[me[s]];i&&(this.lineNumber=i,this.column=t.firstColumn)}tt.prototype=new Error;it.default=tt});var I=g(P=>{"use strict";p();var y=B(),ke=_().default,ni="2.0.0";P.VERSION=ni;var si=6;P.COMPILER_REVISION=si;var ri={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};P.REVISION_CHANGES=ri;var nt=y.isArray,ve=y.isFunction,st=y.toString,rt="[object Object]";function ye(e,t){this.helpers=e||{},this.partials=t||{},ai(this)}P.HandlebarsEnvironment=ye;ye.prototype={constructor:ye,logger:j,log:at,registerHelper:function(e,t){if(st.call(e)===rt){if(t)throw new ke("Arg not supported with multiple helpers");y.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){st.call(e)===rt?y.extend(this.partials,e):this.partials[e]=t},unregisterPartial:function(e){delete this.partials[e]}};function ai(e){e.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new ke("Missing helper: '"+arguments[arguments.length-1].name+"'")}),e.registerHelper("blockHelperMissing",function(t,i){var n=i.inverse,s=i.fn;if(t===!0)return s(this);if(t===!1||t==null)return n(this);if(nt(t))return t.length>0?(i.ids&&(i.ids=[i.name]),e.helpers.each(t,i)):n(this);if(i.data&&i.ids){var r=Q(i.data);r.contextPath=y.appendContextPath(i.data.contextPath,i.name),i={data:r}}return s(t,i)}),e.registerHelper("each",function(t,i){if(!i)throw new ke("Must pass iterator to #each");var n=i.fn,s=i.inverse,r=0,o="",a,c;if(i.data&&i.ids&&(c=y.appendContextPath(i.data.contextPath,i.ids[0])+"."),ve(t)&&(t=t.call(this)),i.data&&(a=Q(i.data)),t&&typeof t=="object")if(nt(t))for(var l=t.length;r<l;r++)a&&(a.index=r,a.first=r===0,a.last=r===t.length-1,c&&(a.contextPath=c+r)),o=o+n(t[r],{data:a});else for(var u in t)t.hasOwnProperty(u)&&(a&&(a.key=u,a.index=r,a.first=r===0,c&&(a.contextPath=c+u)),o=o+n(t[u],{data:a}),r++);return r===0&&(o=s(this)),o}),e.registerHelper("if",function(t,i){return ve(t)&&(t=t.call(this)),!i.hash.includeZero&&!t||y.isEmpty(t)?i.inverse(this):i.fn(this)}),e.registerHelper("unless",function(t,i){return e.helpers.if.call(this,t,{fn:i.inverse,inverse:i.fn,hash:i.hash})}),e.registerHelper("with",function(t,i){ve(t)&&(t=t.call(this));var n=i.fn;if(y.isEmpty(t))return i.inverse(this);if(i.data&&i.ids){var s=Q(i.data);s.contextPath=y.appendContextPath(i.data.contextPath,i.ids[0]),i={data:s}}return n(t,i)}),e.registerHelper("log",function(t,i){var n=i.data&&i.data.level!=null?parseInt(i.data.level,10):1;e.log(n,t)}),e.registerHelper("lookup",function(t,i){return t&&t[i]})}var j={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(j.level<=e){var i=j.methodMap[e];typeof console<"u"&&console[i]&&console[i].call(console,t)}}};P.logger=j;var at=j.log;P.log=at;var Q=function(e){var t=y.extend({},e);return t._parent=e,t};P.createFrame=Q});var lt=g(V=>{"use strict";p();var Se=B(),R=_().default,oi=I().COMPILER_REVISION,ot=I().REVISION_CHANGES,li=I().createFrame;function hi(e){var t=e&&e[0]||1,i=oi;if(t!==i)if(t<i){var n=ot[i],s=ot[t];throw new R("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+s+").")}else throw new R("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}V.checkRevision=hi;function ci(e,t){if(!t)throw new R("No environment passed to template");if(!e||!e.main)throw new R("Unknown template object: "+typeof e);t.VM.checkRevision(e.compiler);var i=function(r,o,a,c,l,u,h,E,T){l&&(c=Se.extend({},c,l));var A=t.VM.invokePartial.call(this,r,a,c,u,h,E,T);if(A==null&&t.compile){var Te={helpers:u,partials:h,data:E,depths:T};h[a]=t.compile(r,{data:E!==void 0,compat:e.compat},t),A=h[a](c,Te)}if(A!=null){if(o){for(var b=A.split(`
`),w=0,re=b.length;w<re&&!(!b[w]&&w+1===re);w++)b[w]=o+b[w];A=b.join(`
`)}return A}else throw new R("The partial "+a+" could not be compiled when running in runtime-only mode")},n={lookup:function(r,o){for(var a=r.length,c=0;c<a;c++)if(r[c]&&r[c][o]!=null)return r[c][o]},lambda:function(r,o){return typeof r=="function"?r.call(o):r},escapeExpression:Se.escapeExpression,invokePartial:i,fn:function(r){return e[r]},programs:[],program:function(r,o,a){var c=this.programs[r],l=this.fn(r);return o||a?c=$(this,r,l,o,a):c||(c=this.programs[r]=$(this,r,l)),c},data:function(r,o){for(;r&&o--;)r=r._parent;return r},merge:function(r,o){var a=r||o;return r&&o&&r!==o&&(a=Se.extend({},o,r)),a},noop:t.VM.noop,compilerInfo:e.compiler},s=function(r,o){o=o||{};var a=o.data;s._setup(o),!o.partial&&e.useData&&(a=fi(r,a));var c;return e.useDepths&&(c=o.depths?[r].concat(o.depths):[r]),e.main.call(n,r,n.helpers,n.partials,a,c)};return s.isTop=!0,s._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials):(n.helpers=n.merge(r.helpers,t.helpers),e.usePartial&&(n.partials=n.merge(r.partials,t.partials)))},s._child=function(r,o,a){if(e.useDepths&&!a)throw new R("must pass parent depths");return $(n,r,e[r],o,a)},s}V.template=ci;function $(e,t,i,n,s){var r=function(o,a){return a=a||{},i.call(e,o,e.helpers,e.partials,a.data||n,s&&[o].concat(s))};return r.program=t,r.depth=s?s.length:0,r}V.program=$;function pi(e,t,i,n,s,r,o){var a={partial:!0,helpers:n,partials:s,data:r,depths:o};if(e===void 0)throw new R("The partial "+t+" could not be found");if(e instanceof Function)return e(i,a)}V.invokePartial=pi;function ui(){return""}V.noop=ui;function fi(e,t){return(!t||!("root"in t))&&(t=t?li(t):{},t.root=e),t}});var ft=g(ut=>{"use strict";p();var ht=I(),di=de().default,gi=_().default,be=B(),ct=lt(),pt=function(){var e=new ht.HandlebarsEnvironment;return be.extend(e,ht),e.SafeString=di,e.Exception=gi,e.Utils=be,e.escapeExpression=be.escapeExpression,e.VM=ct,e.template=function(t){return ct.template(t,e)},e},ee=pt();ee.create=pt;ee.default=ee;ut.default=ee});var xe=g(gt=>{"use strict";p();var dt=_().default;function v(e){e=e||{},this.firstLine=e.first_line,this.firstColumn=e.first_column,this.lastColumn=e.last_column,this.lastLine=e.last_line}var U={ProgramNode:function(e,t,i){v.call(this,i),this.type="program",this.statements=e,this.strip=t},MustacheNode:function(e,t,i,n,s){if(v.call(this,s),this.type="mustache",this.strip=n,i!=null&&i.charAt){var r=i.charAt(3)||i.charAt(2);this.escaped=r!=="{"&&r!=="&"}else this.escaped=!!i;e instanceof U.SexprNode?this.sexpr=e:this.sexpr=new U.SexprNode(e,t),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(e,t,i){v.call(this,i),this.type="sexpr",this.hash=t;var n=this.id=e[0],s=this.params=e.slice(1);this.isHelper=!!(s.length||t),this.eligibleHelper=this.isHelper||n.isSimple},PartialNode:function(e,t,i,n,s){v.call(this,s),this.type="partial",this.partialName=e,this.context=t,this.hash=i,this.strip=n,this.strip.inlineStandalone=!0},BlockNode:function(e,t,i,n,s){v.call(this,s),this.type="block",this.mustache=e,this.program=t,this.inverse=i,this.strip=n,i&&!t&&(this.isInverse=!0)},RawBlockNode:function(e,t,i,n){if(v.call(this,n),e.sexpr.id.original!==i)throw new dt(e.sexpr.id.original+" doesn't match "+i,this);t=new U.ContentNode(t,n),this.type="block",this.mustache=e,this.program=new U.ProgramNode([t],{},n)},ContentNode:function(e,t){v.call(this,t),this.type="content",this.original=this.string=e},HashNode:function(e,t){v.call(this,t),this.type="hash",this.pairs=e},IdNode:function(e,t){v.call(this,t),this.type="ID";for(var i="",n=[],s=0,r="",o=0,a=e.length;o<a;o++){var c=e[o].part;if(i+=(e[o].separator||"")+c,c===".."||c==="."||c==="this"){if(n.length>0)throw new dt("Invalid path: "+i,this);c===".."?(s++,r+="../"):this.isScoped=!0}else n.push(c)}this.original=i,this.parts=n,this.string=n.join("."),this.depth=s,this.idName=r+this.string,this.isSimple=e.length===1&&!this.isScoped&&s===0,this.stringModeValue=this.string},PartialNameNode:function(e,t){v.call(this,t),this.type="PARTIAL_NAME",this.name=e.original},DataNode:function(e,t){v.call(this,t),this.type="DATA",this.id=e,this.stringModeValue=e.stringModeValue,this.idName="@"+e.stringModeValue},StringNode:function(e,t){v.call(this,t),this.type="STRING",this.original=this.string=this.stringModeValue=e},NumberNode:function(e,t){v.call(this,t),this.type="NUMBER",this.original=this.number=e,this.stringModeValue=Number(e)},BooleanNode:function(e,t){v.call(this,t),this.type="BOOLEAN",this.bool=e,this.stringModeValue=e==="true"},CommentNode:function(e,t){v.call(this,t),this.type="comment",this.comment=e,this.strip={inlineStandalone:!0}}};gt.default=U});var vt=g(mt=>{"use strict";p();var mi=(function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(s,r,o,a,c,l,u){var h=l.length-1;switch(c){case 1:return a.prepareProgram(l[h-1].statements,!0),l[h-1];break;case 2:this.$=new a.ProgramNode(a.prepareProgram(l[h]),{},this._$);break;case 3:this.$=l[h];break;case 4:this.$=l[h];break;case 5:this.$=l[h];break;case 6:this.$=l[h];break;case 7:this.$=new a.ContentNode(l[h],this._$);break;case 8:this.$=new a.CommentNode(l[h],this._$);break;case 9:this.$=new a.RawBlockNode(l[h-2],l[h-1],l[h],this._$);break;case 10:this.$=new a.MustacheNode(l[h-1],null,"","",this._$);break;case 11:this.$=a.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!1,this._$);break;case 12:this.$=a.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!0,this._$);break;case 13:this.$=new a.MustacheNode(l[h-1],null,l[h-2],a.stripFlags(l[h-2],l[h]),this._$);break;case 14:this.$=new a.MustacheNode(l[h-1],null,l[h-2],a.stripFlags(l[h-2],l[h]),this._$);break;case 15:this.$={strip:a.stripFlags(l[h-1],l[h-1]),program:l[h]};break;case 16:this.$={path:l[h-1],strip:a.stripFlags(l[h-2],l[h])};break;case 17:this.$=new a.MustacheNode(l[h-1],null,l[h-2],a.stripFlags(l[h-2],l[h]),this._$);break;case 18:this.$=new a.MustacheNode(l[h-1],null,l[h-2],a.stripFlags(l[h-2],l[h]),this._$);break;case 19:this.$=new a.PartialNode(l[h-3],l[h-2],l[h-1],a.stripFlags(l[h-4],l[h]),this._$);break;case 20:this.$=new a.PartialNode(l[h-2],void 0,l[h-1],a.stripFlags(l[h-3],l[h]),this._$);break;case 21:this.$=new a.SexprNode([l[h-2]].concat(l[h-1]),l[h],this._$);break;case 22:this.$=new a.SexprNode([l[h]],null,this._$);break;case 23:this.$=l[h];break;case 24:this.$=new a.StringNode(l[h],this._$);break;case 25:this.$=new a.NumberNode(l[h],this._$);break;case 26:this.$=new a.BooleanNode(l[h],this._$);break;case 27:this.$=l[h];break;case 28:l[h-1].isHelper=!0,this.$=l[h-1];break;case 29:this.$=new a.HashNode(l[h],this._$);break;case 30:this.$=[l[h-2],l[h]];break;case 31:this.$=new a.PartialNameNode(l[h],this._$);break;case 32:this.$=new a.PartialNameNode(new a.StringNode(l[h],this._$),this._$);break;case 33:this.$=new a.PartialNameNode(new a.NumberNode(l[h],this._$));break;case 34:this.$=new a.DataNode(l[h],this._$);break;case 35:this.$=new a.IdNode(l[h],this._$);break;case 36:l[h-2].push({part:l[h],separator:l[h-1]}),this.$=l[h-2];break;case 37:this.$=[{part:l[h]}];break;case 38:this.$=[];break;case 39:l[h-1].push(l[h]);break;case 48:this.$=[];break;case 49:l[h-1].push(l[h]);break;case 52:this.$=[l[h]];break;case 53:l[h-1].push(l[h]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(s,r){throw new Error(s)},parse:function(s){var r=this,o=[0],a=[null],c=[],l=this.table,u="",h=0,E=0,T=0,A=2,Te=1;this.lexer.setInput(s),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var b=this.lexer.yylloc;c.push(b);var w=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function re(S){o.length=o.length-2*S,a.length=a.length-S,c.length=c.length-S}function Vt(){var S;return S=r.lexer.lex()||1,typeof S!="number"&&(S=r.symbols_[S]||S),S}for(var m,ae,O,k,ji,oe,M={},G,x,Me,z;;){if(O=o[o.length-1],this.defaultActions[O]?k=this.defaultActions[O]:((m===null||typeof m>"u")&&(m=Vt()),k=l[O]&&l[O][m]),typeof k>"u"||!k.length||!k[0]){var le="";if(!T){z=[];for(G in l[O])this.terminals_[G]&&G>2&&z.push("'"+this.terminals_[G]+"'");this.lexer.showPosition?le="Parse error on line "+(h+1)+`:
`+this.lexer.showPosition()+`
Expecting `+z.join(", ")+", got '"+(this.terminals_[m]||m)+"'":le="Parse error on line "+(h+1)+": Unexpected "+(m==1?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(le,{text:this.lexer.match,token:this.terminals_[m]||m,line:this.lexer.yylineno,loc:b,expected:z})}}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+m);switch(k[0]){case 1:o.push(m),a.push(this.lexer.yytext),c.push(this.lexer.yylloc),o.push(k[1]),m=null,ae?(m=ae,ae=null):(E=this.lexer.yyleng,u=this.lexer.yytext,h=this.lexer.yylineno,b=this.lexer.yylloc,T>0&&T--);break;case 2:if(x=this.productions_[k[1]][1],M.$=a[a.length-x],M._$={first_line:c[c.length-(x||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(x||1)].first_column,last_column:c[c.length-1].last_column},w&&(M._$.range=[c[c.length-(x||1)].range[0],c[c.length-1].range[1]]),oe=this.performAction.call(M,u,E,h,this.yy,k[1],a,c),typeof oe<"u")return oe;x&&(o=o.slice(0,-1*x*2),a=a.slice(0,-1*x),c=c.slice(0,-1*x)),o.push(this.productions_[k[1]][0]),a.push(M.$),c.push(M._$),Me=l[o[o.length-2]][o[o.length-1]],o.push(Me);break;case 3:return!0}}return!0}},t=(function(){var n={EOF:1,parseError:function(r,o){if(this.yy.parser)this.yy.parser.parseError(r,o);else throw new Error(r)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var r=s.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var r=s.length,o=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===a.length?this.yylloc.first_column:0)+a[a.length-o.length].length-o[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),r=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,r,o,a,c,l;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),h=0;h<u.length&&(o=this._input.match(this.rules[u[h]]),!(o&&(!r||o[0].length>r[0].length)&&(r=o,a=h,!this.options.flex)));h++);return r?(l=r[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],s=this.performAction.call(this,this.yy,this,u[a],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return typeof r<"u"?r:this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(r){this.begin(r)}};return n.options={},n.performAction=function(r,o,a,c){function l(h,E){return o.yytext=o.yytext.substr(h,o.yyleng-E)}var u=c;switch(a){case 0:if(o.yytext.slice(-2)==="\\\\"?(l(0,1),this.begin("mu")):o.yytext.slice(-1)==="\\"?(l(0,1),this.begin("emu")):this.begin("mu"),o.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return o.yytext=o.yytext.substr(5,o.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return l(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return l(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return o.yytext=l(1,2).replace(/\\"/g,'"'),42;break;case 30:return o.yytext=l(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return o.yytext=l(1,2),50;break;case 37:return"INVALID";case 38:return 5}},n.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],n.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},n})();e.lexer=t;function i(){this.yy={}}return i.prototype=e,e.Parser=i,new i})();mt.default=mi});var kt=g(te=>{"use strict";p();var vi=_().default;function ki(e,t){return{left:e.charAt(2)==="~",right:t.charAt(t.length-3)==="~"}}te.stripFlags=ki;function yi(e,t,i,n,s,r){if(e.sexpr.id.original!==n.path.original)throw new vi(e.sexpr.id.original+" doesn't match "+n.path.original,e);var o=i&&i.program,a={left:e.strip.left,right:n.strip.right,openStandalone:we(t.statements),closeStandalone:Ee((o||t).statements)};if(e.strip.right&&L(t.statements,null,!0),o){var c=i.strip;c.left&&C(t.statements,null,!0),c.right&&L(o.statements,null,!0),n.strip.left&&C(o.statements,null,!0),Ee(t.statements)&&we(o.statements)&&(C(t.statements),L(o.statements))}else n.strip.left&&C(t.statements,null,!0);return s?new this.BlockNode(e,o,t,a,r):new this.BlockNode(e,t,o,a,r)}te.prepareBlock=yi;function Si(e,t){for(var i=0,n=e.length;i<n;i++){var s=e[i],r=s.strip;if(r){var o=Ee(e,i,t,s.type==="partial"),a=we(e,i,t),c=r.openStandalone&&o,l=r.closeStandalone&&a,u=r.inlineStandalone&&o&&a;r.right&&L(e,i,!0),r.left&&C(e,i,!0),u&&(L(e,i),C(e,i)&&s.type==="partial"&&(s.indent=/([ \t]+$)/.exec(e[i-1].original)?RegExp.$1:"")),c&&(L((s.program||s.inverse).statements),C(e,i)),l&&(L(e,i),C((s.inverse||s.program).statements))}}return e}te.prepareProgram=Si;function Ee(e,t,i){t===void 0&&(t=e.length);var n=e[t-1],s=e[t-2];if(!n)return i;if(n.type==="content")return(s||!i?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(n.original)}function we(e,t,i){t===void 0&&(t=-1);var n=e[t+1],s=e[t+2];if(!n)return i;if(n.type==="content")return(s||!i?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(n.original)}function L(e,t,i){var n=e[t==null?0:t+1];if(!(!n||n.type!=="content"||!i&&n.rightStripped)){var s=n.string;n.string=n.string.replace(i?/^\s+/:/^[ \t]*\r?\n?/,""),n.rightStripped=n.string!==s}}function C(e,t,i){var n=e[t==null?e.length-1:t-1];if(!(!n||n.type!=="content"||!i&&n.leftStripped)){var s=n.string;return n.string=n.string.replace(i?/\s+$/:/[ \t]+$/,""),n.leftStripped=n.string!==s,n.leftStripped}}});var Pe=g(_e=>{"use strict";p();var Ne=vt().default,yt=xe().default,bi=kt(),xi=B().extend;_e.parser=Ne;var St={};xi(St,bi,yt);function Ei(e){return e.constructor===yt.ProgramNode?e:(Ne.yy=St,Ne.parse(e))}_e.parse=Ei});var ne=g(ie=>{"use strict";p();var Ae=_().default,bt=B().isArray,wi=[].slice;function Ce(){}ie.Compiler=Ce;Ce.prototype={compiler:Ce,equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t)return!1;for(var i=0;i<t;i++){var n=this.opcodes[i],s=e.opcodes[i];if(n.opcode!==s.opcode||!xt(n.args,s.args))return!1}for(t=this.children.length,i=0;i<t;i++)if(!this.children[i].equals(e.children[i]))return!1;return!0},guid:0,compile:function(e,t){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds;var i=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},i)for(var n in i)this.options.knownHelpers[n]=i[n];return this.accept(e)},accept:function(e){return this[e.type](e)},program:function(e){for(var t=e.statements,i=0,n=t.length;i<n;i++)this.accept(t[i]);return this.isSimple=n===1,this.depths.list=this.depths.list.sort(function(s,r){return s-r}),this},compileProgram:function(e){var t=new this.compiler().compile(e,this.options),i=this.guid++,n;this.usePartial=this.usePartial||t.usePartial,this.children[i]=t;for(var s=0,r=t.depths.list.length;s<r;s++)n=t.depths.list[s],!(n<2)&&this.addDepth(n-1);return i},block:function(e){var t=e.mustache,i=e.program,n=e.inverse;i&&(i=this.compileProgram(i)),n&&(n=this.compileProgram(n));var s=t.sexpr,r=this.classifySexpr(s);r==="helper"?this.helperSexpr(s,i,n):r==="simple"?(this.simpleSexpr(s),this.opcode("pushProgram",i),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",s.id.original)):(this.ambiguousSexpr(s,i,n),this.opcode("pushProgram",i),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(e){var t=e.pairs,i,n;for(this.opcode("pushHash"),i=0,n=t.length;i<n;i++)this.pushParam(t[i][1]);for(;i--;)this.opcode("assignToHash",t[i][0]);this.opcode("popHash")},partial:function(e){var t=e.partialName;this.usePartial=!0,e.hash?this.accept(e.hash):this.opcode("push","undefined"),e.context?this.accept(e.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",t.name,e.indent||""),this.opcode("append")},content:function(e){e.string&&this.opcode("appendContent",e.string)},mustache:function(e){this.sexpr(e.sexpr),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(e,t,i){var n=e.id,s=n.parts[0],r=t!=null||i!=null;this.opcode("getContext",n.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",i),this.ID(n),this.opcode("invokeAmbiguous",s,r)},simpleSexpr:function(e){var t=e.id;t.type==="DATA"?this.DATA(t):t.parts.length?this.ID(t):(this.addDepth(t.depth),this.opcode("getContext",t.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,i){var n=this.setupFullMustacheParams(e,t,i),s=e.id,r=s.parts[0];if(this.options.knownHelpers[r])this.opcode("invokeKnownHelper",n.length,r);else{if(this.options.knownHelpersOnly)throw new Ae("You specified knownHelpersOnly, but used the unknown helper "+r,e);s.falsy=!0,this.ID(s),this.opcode("invokeHelper",n.length,s.original,s.isSimple)}},sexpr:function(e){var t=this.classifySexpr(e);t==="simple"?this.simpleSexpr(e):t==="helper"?this.helperSexpr(e):this.ambiguousSexpr(e)},ID:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var t=e.parts[0];t?this.opcode("lookupOnContext",e.parts,e.falsy,e.isScoped):this.opcode("pushContext")},DATA:function(e){this.options.data=!0,this.opcode("lookupData",e.id.depth,e.id.parts)},STRING:function(e){this.opcode("pushString",e.string)},NUMBER:function(e){this.opcode("pushLiteral",e.number)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:wi.call(arguments,1)})},addDepth:function(e){e!==0&&(this.depths[e]||(this.depths[e]=!0,this.depths.list.push(e)))},classifySexpr:function(e){var t=e.isHelper,i=e.eligibleHelper,n=this.options;if(i&&!t){var s=e.id.parts[0];n.knownHelpers[s]?t=!0:n.knownHelpersOnly&&(i=!1)}return t?"helper":i?"ambiguous":"simple"},pushParams:function(e){for(var t=0,i=e.length;t<i;t++)this.pushParam(e[t])},pushParam:function(e){this.stringParams?(e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",e.stringModeValue,e.type),e.type==="sexpr"&&this.sexpr(e)):(this.trackIds&&this.opcode("pushId",e.type,e.idName||e.stringModeValue),this.accept(e))},setupFullMustacheParams:function(e,t,i){var n=e.params;return this.pushParams(n),this.opcode("pushProgram",t),this.opcode("pushProgram",i),e.hash?this.hash(e.hash):this.opcode("emptyHash"),n}};function Ni(e,t,i){if(e==null||typeof e!="string"&&e.constructor!==i.AST.ProgramNode)throw new Ae("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var n=i.parse(e),s=new i.Compiler().compile(n,t);return new i.JavaScriptCompiler().compile(s,t)}ie.precompile=Ni;function _i(e,t,i){if(e==null||typeof e!="string"&&e.constructor!==i.AST.ProgramNode)throw new Ae("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var n;function s(){var o=i.parse(e),a=new i.Compiler().compile(o,t),c=new i.JavaScriptCompiler().compile(a,t,void 0,!0);return i.template(c)}var r=function(o,a){return n||(n=s()),n.call(this,o,a)};return r._setup=function(o){return n||(n=s()),n._setup(o)},r._child=function(o,a,c){return n||(n=s()),n._child(o,a,c)},r}ie.compile=_i;function xt(e,t){if(e===t)return!0;if(bt(e)&&bt(t)&&e.length===t.length){for(var i=0;i<e.length;i++)if(!xt(e[i],t[i]))return!1;return!0}}});var _t=g(Nt=>{"use strict";p();var Pi=I().COMPILER_REVISION,Ci=I().REVISION_CHANGES,Oe=_().default;function W(e){this.value=e}function D(){}D.prototype={nameLookup:function(e,t){return D.isValidJavaScriptVariableName(t)?e+"."+t:e+"['"+t+"']"},depthedLookup:function(e){return this.aliases.lookup="this.lookup",'lookup(depths, "'+e+'")'},compilerInfo:function(){var e=Pi,t=Ci[e];return[e,t]},appendToBuffer:function(e){return this.environment.isSimple?"return "+e+";":{appendToBuffer:!0,content:e,toString:function(){return"buffer += "+e+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,t,i,n){this.environment=e,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!n,this.name=this.environment.name,this.isChild=!!i,this.context=i||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(e,t),this.useDepths=this.useDepths||e.depths.list.length||this.options.compat;var s=e.opcodes,r,o,a;for(o=0,a=s.length;o<a;o++)r=s[o],this[r.opcode].apply(this,r.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Oe("Compile completed with content left on stack");var c=this.createFunctionContext(n);if(this.isChild)return c;var l={compiler:this.compilerInfo(),main:c},u=this.context.programs;for(o=0,a=u.length;o<a;o++)u[o]&&(l[o]=u[o]);return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.options.compat&&(l.compat=!0),n||(l.compiler=JSON.stringify(l.compiler),l=this.objectLiteral(l)),l},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(e){var t="",i=this.stackVars.concat(this.registers.list);i.length>0&&(t+=", "+i.join(", "));for(var n in this.aliases)this.aliases.hasOwnProperty(n)&&(t+=", "+n+"="+this.aliases[n]);var s=["depth0","helpers","partials","data"];this.useDepths&&s.push("depths");var r=this.mergeSource(t);return e?(s.push(r),Function.apply(this,s)):"function("+s.join(",")+`) {
  `+r+"}"},mergeSource:function(e){for(var t="",i,n=!this.forceBuffer,s,r=0,o=this.source.length;r<o;r++){var a=this.source[r];a.appendToBuffer?i?i=i+`
    + `+a.content:i=a.content:(i&&(t?t+="buffer += "+i+`;
  `:(s=!0,t=i+`;
  `),i=void 0),t+=a+`
  `,this.environment.isSimple||(n=!1))}return n?(i||!t)&&(t+="return "+(i||'""')+`;
`):(e+=", buffer = "+(s?"":this.initializeBuffer()),i?t+="return buffer + "+i+`;
`:t+=`return buffer;
`),e&&(t="var "+e.substring(2)+(s?"":`;
  `)+t),t},blockValue:function(e){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams(e,0,t);var i=this.popStack();t.splice(1,0,i),this.push("blockHelperMissing.call("+t.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams("",0,e,!0),this.flushInline();var t=this.topStack();e.splice(1,0,t),this.pushSource("if (!"+this.lastHelper+") { "+t+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){this.pendingContent&&(e=this.pendingContent+e),this.pendingContent=e},append:function(){this.flushInline();var e=this.popStack();this.pushSource("if ("+e+" != null) { "+this.appendToBuffer(e)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,t,i){var n=0,s=e.length;for(!i&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(e[n++])):this.pushContext();n<s;n++)this.replaceStack(function(r){var o=this.nameLookup(r,e[n],"context");return t?" && "+o:" != null ? "+o+" : "+r})},lookupData:function(e,t){e?this.pushStackLiteral("this.data(data, "+e+")"):this.pushStackLiteral("data");for(var i=t.length,n=0;n<i;n++)this.replaceStack(function(s){return" && "+this.nameLookup(s,t[n],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(e,t){this.pushContext(),this.pushString(t),t!=="sexpr"&&(typeof e=="string"?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+e.ids.join(",")+"}"),this.stringParams&&(this.push("{"+e.contexts.join(",")+"}"),this.push("{"+e.types.join(",")+"}")),this.push(`{
    `+e.values.join(`,
    `)+`
  }`)},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){return this.inlineStack.push(e),e},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){e!=null?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},invokeHelper:function(e,t,i){this.aliases.helperMissing="helpers.helperMissing";var n=this.popStack(),s=this.setupHelper(e,t),r=(i?s.name+" || ":"")+n+" || helperMissing";this.push("(("+r+").call("+s.callParams+"))")},invokeKnownHelper:function(e,t){var i=this.setupHelper(e,t);this.push(i.name+".call("+i.callParams+")")},invokeAmbiguous:function(e,t){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var i=this.popStack();this.emptyHash();var n=this.setupHelper(0,e,t),s=this.lastHelper=this.nameLookup("helpers",e,"helper");this.push("((helper = (helper = "+s+" || "+i+") != null ? helper : helperMissing"+(n.paramsInit?"),("+n.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+n.callParams+") : helper))")},invokePartial:function(e,t){var i=[this.nameLookup("partials",e,"partial"),"'"+t+"'","'"+e+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?i.push("data"):this.options.compat&&i.push("undefined"),this.options.compat&&i.push("depths"),this.push("this.invokePartial("+i.join(", ")+")")},assignToHash:function(e){var t=this.popStack(),i,n,s;this.trackIds&&(s=this.popStack()),this.stringParams&&(n=this.popStack(),i=this.popStack());var r=this.hash;i&&r.contexts.push("'"+e+"': "+i),n&&r.types.push("'"+e+"': "+n),s&&r.ids.push("'"+e+"': "+s),r.values.push("'"+e+"': ("+t+")")},pushId:function(e,t){e==="ID"||e==="DATA"?this.pushString(t):e==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:D,compileChildren:function(e,t){for(var i=e.children,n,s,r=0,o=i.length;r<o;r++){n=i[r],s=new this.compiler;var a=this.matchExistingProgram(n);a==null?(this.context.programs.push(""),a=this.context.programs.length,n.index=a,n.name="program"+a,this.context.programs[a]=s.compile(n,t,this.context,!this.precompile),this.context.environments[a]=n,this.useDepths=this.useDepths||s.useDepths):(n.index=a,n.name="program"+a)}},matchExistingProgram:function(e){for(var t=0,i=this.context.environments.length;t<i;t++){var n=this.context.environments[t];if(n&&n.equals(e))return t}},programExpression:function(e){var t=this.environment.children[e],i=t.depths.list,n=this.useDepths,s,r=[t.index,"data"];return n&&r.push("depths"),"this.program("+r.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},pushStackLiteral:function(e){return this.push(new W(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),e&&this.source.push(e)},pushStack:function(e){this.flushInline();var t=this.incrStack();return this.pushSource(t+" = "+e+";"),this.compileStack.push(t),t},replaceStack:function(e){var t="",i=this.isInline(),n,s,r;if(!this.isInline())throw new Oe("replaceStack on non-inline");var o=this.popStack(!0);if(o instanceof W)t=n=o.value,r=!0;else{s=!this.stackSlot;var a=s?this.incrStack():this.topStackName();t="("+this.push(a)+" = "+o+")",n=this.topStack()}var c=e.call(this,n);r||this.popStack(),s&&this.stackSlot--,this.push("("+t+c+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;if(e.length){this.inlineStack=[];for(var t=0,i=e.length;t<i;t++){var n=e[t];n instanceof W?this.compileStack.push(n):this.pushStack(n)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),i=(t?this.inlineStack:this.compileStack).pop();if(!e&&i instanceof W)return i.value;if(!t){if(!this.stackSlot)throw new Oe("Invalid stack pop");this.stackSlot--}return i},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,t=e[e.length-1];return t instanceof W?t.value:t},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var t=[];for(var i in e)e.hasOwnProperty(i)&&t.push(this.quotedString(i)+":"+e[i]);return"{"+t.join(",")+"}"},setupHelper:function(e,t,i){var n=[],s=this.setupParams(t,e,n,i),r=this.nameLookup("helpers",t,"helper");return{params:n,paramsInit:s,name:r,callParams:[this.contextName(0)].concat(n).join(", ")}},setupOptions:function(e,t,i){var n={},s=[],r=[],o=[],a,c,l;n.name=this.quotedString(e),n.hash=this.popStack(),this.trackIds&&(n.hashIds=this.popStack()),this.stringParams&&(n.hashTypes=this.popStack(),n.hashContexts=this.popStack()),c=this.popStack(),l=this.popStack(),(l||c)&&(l||(l="this.noop"),c||(c="this.noop"),n.fn=l,n.inverse=c);for(var u=t;u--;)a=this.popStack(),i[u]=a,this.trackIds&&(o[u]=this.popStack()),this.stringParams&&(r[u]=this.popStack(),s[u]=this.popStack());return this.trackIds&&(n.ids="["+o.join(",")+"]"),this.stringParams&&(n.types="["+r.join(",")+"]",n.contexts="["+s.join(",")+"]"),this.options.data&&(n.data="data"),n},setupParams:function(e,t,i,n){var s=this.objectLiteral(this.setupOptions(e,t,i));return n?(this.useRegister("options"),i.push("options"),"options="+s):(i.push(s),"")}};var Et="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),Ai=D.RESERVED_WORDS={};for(se=0,wt=Et.length;se<wt;se++)Ai[Et[se]]=!0;var se,wt;D.isValidJavaScriptVariableName=function(e){return!D.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)};Nt.default=D});var At=g(Ct=>{"use strict";p();var q=ft().default,Oi=xe().default,Ii=Pe().parser,Ri=Pe().parse,Li=ne().Compiler,Di=ne().compile,Hi=ne().precompile,Ti=_t().default,Mi=q.create,Pt=function(){var e=Mi();return e.compile=function(t,i){return Di(t,i,e)},e.precompile=function(t,i){return Hi(t,i,e)},e.AST=Oi,e.Compiler=Li,e.JavaScriptCompiler=Ti,e.Parser=Ii,e.parse=Ri,e};q=Pt();q.create=Pt;q.default=q;Ct.default=q});var Re=g(Ot=>{"use strict";p();function Ie(){}Ie.prototype={constructor:Ie,accept:function(e){return this[e.type](e)}};Ot.default=Ie});var It=g(Le=>{"use strict";p();var Bi=Re().default;function Vi(e){return new d().accept(e)}Le.print=Vi;function d(){this.padding=0}Le.PrintVisitor=d;d.prototype=new Bi;d.prototype.pad=function(e){for(var t="",i=0,n=this.padding;i<n;i++)t=t+"  ";return t=t+e+`
`,t};d.prototype.program=function(e){var t="",i=e.statements,n,s;for(n=0,s=i.length;n<s;n++)t=t+this.accept(i[n]);return this.padding--,t};d.prototype.block=function(e){var t="";return t=t+this.pad("BLOCK:"),this.padding++,t=t+this.accept(e.mustache),e.program&&(t=t+this.pad("PROGRAM:"),this.padding++,t=t+this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,t=t+this.pad("{{^}}"),this.padding++,t=t+this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,t};d.prototype.sexpr=function(e){for(var t=e.params,i=[],n,s=0,r=t.length;s<r;s++)i.push(this.accept(t[s]));return t="["+i.join(", ")+"]",n=e.hash?" "+this.accept(e.hash):"",this.accept(e.id)+" "+t+n};d.prototype.mustache=function(e){return this.pad("{{ "+this.accept(e.sexpr)+" }}")};d.prototype.partial=function(e){var t=this.accept(e.partialName);return e.context&&(t+=" "+this.accept(e.context)),e.hash&&(t+=" "+this.accept(e.hash)),this.pad("{{> "+t+" }}")};d.prototype.hash=function(e){for(var t=e.pairs,i=[],n,s,r=0,o=t.length;r<o;r++)n=t[r][0],s=this.accept(t[r][1]),i.push(n+"="+s);return"HASH{"+i.join(", ")+"}"};d.prototype.STRING=function(e){return'"'+e.string+'"'};d.prototype.NUMBER=function(e){return"NUMBER{"+e.number+"}"};d.prototype.BOOLEAN=function(e){return"BOOLEAN{"+e.bool+"}"};d.prototype.ID=function(e){var t=e.parts.join("/");return e.parts.length>1?"PATH:"+t:"ID:"+t};d.prototype.PARTIAL_NAME=function(e){return"PARTIAL:"+e.name};d.prototype.DATA=function(e){return"@"+this.accept(e.id)};d.prototype.content=function(e){return this.pad("CONTENT[ '"+e.string+"' ]")};d.prototype.comment=function(e){return this.pad("{{! '"+e.comment+"' }}")}});var Dt=g((wn,Lt)=>{p();var K=At().default;K.Visitor=Re().default;var Rt=It();K.PrintVisitor=Rt.PrintVisitor;K.print=Rt.print;Lt.exports=K;typeof F<"u"&&F.extensions&&(De=function(e,t){var i=(fe(),qe(ue)),n=i.readFileSync(t,"utf8");e.exports=K.compile(n)},F.extensions[".handlebars"]=De,F.extensions[".hbs"]=De);var De});var Mt=g((Pn,Tt)=>{p();var Ht=(fe(),qe(ue)),qi=Dt();function He(e){return e!=null&&e instanceof Array&&e.length>0}function Fi(e){var t=3,i=!0,n=["awards","publications"],s=Ht.readFileSync("//style.css","utf-8"),r=Ht.readFileSync("//resume.hbs","utf-8");return He(e.education)&&e.education.forEach(function(o){if(He(o.courses)){var a=[],c=0,l;for(l=0;l<t;l++)a.push([]);o.courses.forEach(function(u){a[c].push(u),c++,c>=t&&(c=0)}),o.courses=a}}),i&&He(e.interests)&&e.interests.forEach(function(o){o.keywords.sort()}),n.forEach(function(o){e[o]!==void 0&&e[o].forEach(function(a){a.highlights===void 0&&(a.highlights=[]),a.summary&&(a.highlights.unshift(a.summary),delete a.summary)})}),qi.compile(r)({css:s,resume:e})}Tt.exports={render:Fi}});p();var H=Gt(Mt(),1),Bt=H.default??H,An=Bt.render??H.render,On=Bt.pdfRenderOptions??H.pdfRenderOptions;export{On as pdfRenderOptions,An as render};
