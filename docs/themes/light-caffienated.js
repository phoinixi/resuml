var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Vi=Object.create;var Ce=Object.defineProperty;var Yi=Object.getOwnPropertyDescriptor;var Zi=Object.getOwnPropertyNames;var ki=Object.getPrototypeOf,nf=Object.prototype.hasOwnProperty;var Ot=(l,v)=>()=>(l&&(v=l(l=0)),v);var On=(l,v)=>()=>(v||l((v={exports:{}}).exports,v),v.exports),ef=(l,v)=>{for(var S in v)Ce(l,S,{get:v[S],enumerable:!0})},Rt=(l,v,S,D)=>{if(v&&typeof v=="object"||typeof v=="function")for(let R of Zi(v))!nf.call(l,R)&&R!==S&&Ce(l,R,{get:()=>v[R],enumerable:!(D=Yi(v,R))||D.enumerable});return l};var tf=(l,v,S)=>(S=l!=null?Vi(ki(l)):{},Rt(v||!l||!l.__esModule?Ce(S,"default",{value:l,enumerable:!0}):S,l)),rf=l=>Rt(Ce({},"__esModule",{value:!0}),l);var A=Ot(()=>{});var At={};ef(At,{createReadStream:()=>zt,createWriteStream:()=>Nt,default:()=>ff,existsSync:()=>Tt,lstatSync:()=>Mt,mkdirSync:()=>It,readFileSync:()=>St,readdirSync:()=>Ft,rmdirSync:()=>Pt,statSync:()=>Je,unlinkSync:()=>Ut,writeFileSync:()=>jt});function Qe(l){return String(l).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Dt(l){var v=Qe(l);if(Ee[v]!==void 0)return Ee[v];for(var S=Object.keys(Ee),D=0;D<S.length;D++)if(v.endsWith("/"+S[D])||v===S[D])return Ee[S[D]]}function Ge(l){var v=Qe(l);if((v===""||v===".")&&Wn["."]!==void 0)return Wn["."];if(Wn[v]!==void 0)return Wn[v];for(var S=Object.keys(Wn),D=0;D<S.length;D++)if(v.endsWith("/"+S[D])||v===S[D])return Wn[S[D]]}var Ee,Wn,St,Ft,Tt,jt,It,Je,Mt,Ut,Pt,zt,Nt,ff,qt=Ot(()=>{"use strict";A();Ee={"package.json":`{
  "name": "jsonresume-theme-light-caffienated",
  "version": "0.0.6",
  "description": "A theme for JSONResume",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/cranesandcaff/jsonresume-theme-light"
  },
  "keywords": [
    "json",
    "resume",
    "jsonresume",
    "theme"
  ],
  "author": "Anthony Reinette && Patrick Cauley",
  "license": "ISC",
  "dependencies": {
    "gravatar": "^1.0.6",
    "lodash": "^2.4.1",
    "mustache": "^0.8.2",
    "tarball-extract": "0.0.3"
  }
}
`,"resume.css":`@import url(http://fonts.googleapis.com/css?family=Montserrat);
@import url(http://fonts.googleapis.com/css?family=Open+Sans);


body
{
  font-family : Open Sans;
  line-height : 23px;
}

img
{
  max-height : 150px;
}

h1,h2,h3,h4,h5,h6
{
  font-family : Montserrat;
}

.section-title
{
  border-bottom-style : solid;
  border-bottom-width : 1px;
  border-bottom-color : #EAEDF1;
  padding-bottom : 0.5em;
  margin-bottom : 0.5em;
  margin-top : 1em;
}
.browsehappy {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
}

.navbar
{
  background-color :white;
  color : #6C7A89;
}

.name
{
  margin-top : 8px;
}

/*
* Professional Experiences
*/

.cbp_tmtimeline {
    margin: 30px 0 0 0;
    padding: 0;
    list-style: none;
    position: relative;
}

/* The line */
.cbp_tmtimeline:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10px;
    //background:#bdc3c7;
    background : #EAEDF1;
    left: 20%;
    margin-left: -10px;
}

.cbp_tmtimeline > li {
    position: relative;
}

/* The date/time */
.cbp_tmtimeline > li .cbp_tmtime {
    display: block;
    width: 25%;
    padding-right: 100px;
    position: absolute;
}

.cbp_tmtimeline > li .cbp_tmtime span {
    display: block;
    text-align: right;
}

.cbp_tmtimeline > li .cbp_tmtime span:first-child {
    font-size: 1em;
    color: #bdd0db;
}

.cbp_tmtimeline > li .cbp_tmtime span:last-child {
    font-size: 2em;
    color: #1abc9c;
}

.cbp_tmtimeline > li:nth-child(odd) .cbp_tmtime span:last-child {
    color: #67809F ;
}

/* Right content */
.cbp_tmtimeline > li .cbp_tmlabel {
    margin: 0 0 15px 25%;
    background : white;
    font-weight: 300;
    line-height: 1.4;
    position: relative;
    border-radius: 4px;
    border-color : #EAEDF1;
    border-style : solid;
}

.cbp_tmtimeline > li .cbp_tmlabel h2 {
    margin-top: 0px;
    font-size : 1.3em;
    text-transform : uppercase;
    padding: 0.5em 0.5em 5px 0.5em;
    background : #EAEDF1;
    border-bottom: 1px solid rgba(255,255,255,0.4);
}

.cbp_tmtimeline > li .cbp_tmlabel .company{
  font-size : 0.7em;
  float : right;
}

.cbp_tmtimeline > li .cbp_tmlabel .tags{

  padding: 0.5em 0.5em 5px 0.5em;
}

.cbp_tmtimeline > li .cbp_tmlabel .tags .taggroup{
  text-align : right;
}

.cbp_tmtimeline > li .cbp_tmlabel .tags .taggroup .greenbadge{
  background-color : #1abc9c;
}
.cbp_tmtimeline > li .cbp_tmlabel p {
    padding: 0 0 5px 1em;
}

.cbp_tmtimeline > li .cbp_tmlabel a {
    color : #67809F;
}


/* The triangle */
.cbp_tmtimeline > li .cbp_tmlabel:after {
    right: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;

    border-right-color : #EAEDF1;
    border-width: 10px;
    top: 10px;
}

/* The icons */
.cbp_tmtimeline > li .cbp_tmicon {
    width: 40px;
    height: 40px;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    font-size: 1.4em;
    line-height: 40px;
    -webkit-font-smoothing: antialiased;
    position: absolute;
    color: #fff;
    background: #bdc3c7;
    border-radius: 50%;
    box-shadow: 0 0 0 5px #95a5a6;
    text-align: center;
    left: 20%;
    top: 0;
    margin: 0 0 0 -25px;
}

/* Example Media Queries */
@media screen and (max-width: 65.375em) {

    .cbp_tmtimeline > li .cbp_tmtime span:last-child {
        font-size: 1.5em;
    }
}

@media screen and (max-width: 47.2em) {
    .cbp_tmtimeline:before {
        display: none;
    }

    .cbp_tmtimeline > li .cbp_tmtime {
        width: 100%;
        position: relative;
        padding: 0 0 20px 0;
    }

    .cbp_tmtimeline > li .cbp_tmtime span {
        text-align: left;
    }

    .cbp_tmtimeline > li .cbp_tmlabel {
        margin: 0 0 30px 0;
        padding: 1em;
        font-weight: 400;
        font-size: 95%;
    }

    .cbp_tmtimeline > li .cbp_tmlabel:after {
        right: auto;
        left: 20px;
        border-right-color: transparent;
        border-bottom-color: #3594cb;
        top: -20px;
    }

    .cbp_tmtimeline > li:nth-child(odd) .cbp_tmlabel:after {
        border-right-color: transparent;
        border-bottom-color: #6cbfee;
    }

    .cbp_tmtimeline > li .cbp_tmicon {
        position: relative;
        float: right;
        left: auto;
        margin: -55px 5px 0 0px;
    }
}

#experience
{
  margin-top : 50px;
}

#projects
{

}

#projects .tagsgroup
{
  text-align : right;
}

.greenbadge
{
  background : #67809F;
}

.darkgreenbadge
{
  background : #67809F;
}

.greybadge 
{
    background: #6C7A89;
}`,"resume.template":`<!doctype html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <title>{{bio.firstName}} {{bio.lastName}}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <!-- build:css styles/vendor.css -->
        <!-- bower:css -->
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
        <!-- endbower -->
        <!-- endbuild -->

        <!-- build:css styles/main.css -->
        <link rel="stylesheet" href="resume.css">
        <!-- endbuild -->
        <style type="text/css">
        @import url(http://fonts.googleapis.com/css?family=Montserrat);
        @import url(http://fonts.googleapis.com/css?family=Open+Sans);


        body
        {
          font-family : Open Sans;
          line-height : 23px;
        }

        img
        {
          max-height : 150px;
        }

        h1,h2,h3,h4,h5,h6
        {
          font-family : Montserrat;
        }

        .section-title
        {
          border-bottom-style : solid;
          border-bottom-width : 1px;
          border-bottom-color : #EAEDF1;
          padding-bottom : 0.5em;
          margin-bottom : 0.5em;
          margin-top : 1em;
        }
        .browsehappy {
            margin: 0.2em 0;
            background: #ccc;
            color: #000;
            padding: 0.2em 0;
        }

        .navbar
        {
          background-color :white;
          color : #6C7A89;
        }

        .name
        {
          margin-top : 8px;
        }

        /*
        * Professional Experiences
        */

        .cbp_tmtimeline {
            margin: 30px 0 0 0;
            padding: 0;
            list-style: none;
            position: relative;
        }

        /* The line */
        .cbp_tmtimeline:before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 10px;
            //background:#bdc3c7;
            background : #EAEDF1;
            left: 20%;
            margin-left: -10px;
        }

        .cbp_tmtimeline > li {
            position: relative;
        }

        /* The date/time */
        .cbp_tmtimeline > li .cbp_tmtime {
            display: block;
            width: 25%;
            padding-right: 100px;
            position: absolute;
        }

        .cbp_tmtimeline > li .cbp_tmtime span {
            display: block;
            text-align: right;
        }

        .cbp_tmtimeline > li .cbp_tmtime span:first-child {
            font-size: 1em;
            color: #bdd0db;
        }

        .cbp_tmtimeline > li .cbp_tmtime span:last-child {
            font-size: 2em;
            color: #67809F;
        }

        .cbp_tmtimeline > li:nth-child(odd) .cbp_tmtime span:last-child {
            color: #67809F ;
        }

        /* Right content */
        .cbp_tmtimeline > li .cbp_tmlabel {
            margin: 0 0 15px 25%;
            background : white;
            font-weight: 300;
            line-height: 1.4;
            position: relative;
            border-radius: 4px;
            border-color : #EAEDF1;
            border-style : solid;
        }

        .cbp_tmtimeline > li .cbp_tmlabel h2 {
            margin-top: 0px;
            font-size : 1.3em;
            text-transform : uppercase;
            padding: 0.5em 0.5em 5px 0.5em;
            background : #EAEDF1;
            border-bottom: 1px solid rgba(255,255,255,0.4);
        }

        .cbp_tmtimeline > li .cbp_tmlabel .company{
          font-size : 0.7em;
          float : right;
        }

        .cbp_tmtimeline > li .cbp_tmlabel .tags{

          padding: 0.5em 0.5em 5px 0.5em;
        }

        .cbp_tmtimeline > li .cbp_tmlabel .tags .taggroup{
          text-align : right;
        }

        .cbp_tmtimeline > li .cbp_tmlabel .tags .taggroup .greenbadge{
          background-color : #1abc9c;
        }
        .cbp_tmtimeline > li .cbp_tmlabel p {
            padding: 0 0 5px 1em;
        }

        .cbp_tmtimeline > li .cbp_tmlabel a {
            color : #67809F;
        }


        /* The triangle */
        .cbp_tmtimeline > li .cbp_tmlabel:after {
            right: 100%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;

            border-right-color : #EAEDF1;
            border-width: 10px;
            top: 10px;
        }

        /* The icons */
        .cbp_tmtimeline > li .cbp_tmicon {
            width: 40px;
            height: 40px;
            speak: none;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            font-size: 1.4em;
            line-height: 40px;
            -webkit-font-smoothing: antialiased;
            position: absolute;
            color: #fff;
            background: #bdc3c7;
            border-radius: 50%;
            box-shadow: 0 0 0 5px #95a5a6;
            text-align: center;
            left: 20%;
            top: 0;
            margin: 0 0 0 -25px;
        }

        /* Example Media Queries */
        @media screen and (max-width: 65.375em) {

            .cbp_tmtimeline > li .cbp_tmtime span:last-child {
                font-size: 1.5em;
            }
        }

        @media screen and (max-width: 47.2em) {
            .cbp_tmtimeline:before {
                display: none;
            }

            .cbp_tmtimeline > li .cbp_tmtime {
                width: 100%;
                position: relative;
                padding: 0 0 20px 0;
            }

            .cbp_tmtimeline > li .cbp_tmtime span {
                text-align: left;
            }

            .cbp_tmtimeline > li .cbp_tmlabel {
                margin: 0 0 30px 0;
                padding: 1em;
                font-weight: 400;
                font-size: 95%;
            }

            .cbp_tmtimeline > li .cbp_tmlabel:after {
                right: auto;
                left: 20px;
                border-right-color: transparent;
                border-bottom-color: #3594cb;
                top: -20px;
            }

            .cbp_tmtimeline > li:nth-child(odd) .cbp_tmlabel:after {
                border-right-color: transparent;
                border-bottom-color: #6cbfee;
            }

            .cbp_tmtimeline > li .cbp_tmicon {
                position: relative;
                float: right;
                left: auto;
                margin: -55px 5px 0 0px;
            }
        }

        #experience
        {
          margin-top : 50px;
        }

        #projects
        {

        }

        #projects .tagsgroup
        {
          text-align : right;
        }

        .greenbadge
        {
          background : #67809F;
        }

        .darkgreenbadge
        {
          background : #67809F;
        }

        .greybadge
        {
            background: #6C7A89;
        }


        </style>
    </head>
    <body>
        <!--[if lt IE 10]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div class="container-fluid">
        <nav class="navbar navbar-default" role="navigation">
          <div class="container-fluid">
      <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse">
                <h2 class="nav navbar-nav navbar-left name">{{bio.firstName}} {{bio.lastName}}</h2>
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="#experience">Professional experience</a></li>
                  <li><a href="#skills">Skills</a></li>
                </ul>
              </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
      </div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h2 class="section-title">About me</h2>
            </div>
          </div>
          <div class="row">

            <div class="col-xs-2">
              <a class="text-center" href="#">
                <img class="media-object img-circle" src="{{bio.gravatar}}">
              </a>
            </div>
            <div class="col-xs-10">
              <div class="media">
                <div class="media-body">
                  <h3>Bio</h3>
                  <p>
                    {{bio.summary}}
                  </p>
                  <h3>Email</h3>
                  <p>
                    {{bio.email.personal}}
                  </p>
                  <h3>Phone Number</h3>
                  <p>
                    {{bio.phone.personal}}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="container" id="experience">
          <h2 class="section-title">Professional Experience</h2>
            <ul class="cbp_tmtimeline">
{{#work}}
              <li>
                  <time class="cbp_tmtime" datetime=""><span>{{duration}}</span> <span>{{startDate}}</span></time>
                  <div class="cbp_tmicon cbp_tmicon-phone"></div>
                  <div class="cbp_tmlabel">
                      <h2>{{position}}<span class="company"><a href="{{website}}">{{company}}</a></span></h2>
                      <p>
                      <i>{{summary}}</i>
                        <ul>
                        {{#highlights}}
                          <li>{{.}}</li>
                        {{/highlights}}
                        </ul>
                      </p>
                  </div>
              </li>
{{/work}}
            </ul>

        </div>
        <br>
        <div class="container" id="skills">
          <h2 class="section-title">Skills</h2>
          <div class="row">
{{#skills}}
            <div class="col-xs-12 col-md-6">

              <h4> {{name}} </h4>
                <h5><b>{{level}}</b></h5>
                {{#keywords}}
                <span class="badge greenbadge">{{.}}</span>
                {{/keywords}}
            </div>
            <br>
{{/skills}}

          </div>
        </div>
<br>
<br>
<br>
<br>
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        <\/script>

</body>
</html>
`},Wn={".":["README.md","datehelper.js","index.js","package.json","profile.png","resume.css","resume.template"]};St=function(l,v){var S=Dt(l);return S!==void 0?S:""},Ft=function(l,v){var S=Ge(l);return S===void 0&&(S=[]),v&&v.withFileTypes?S.map(function(D){var R=Qe(l)+"/"+D,M=Ge(R)!==void 0;return{name:D,isFile:function(){return!M},isDirectory:function(){return M}}}):S},Tt=function(l){return Dt(l)!==void 0||Ge(l)!==void 0},jt=function(){},It=function(){},Je=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Mt=Je,Ut=function(){},Pt=function(){},zt=function(){return{pipe:function(l){return l},on:function(){return this}}},Nt=function(){return{write:function(){},end:function(){},on:function(){return this}}},ff={readFileSync:St,readdirSync:Ft,existsSync:Tt,writeFileSync:jt,mkdirSync:It,statSync:Je,lstatSync:Mt,unlinkSync:Ut,rmdirSync:Pt,createReadStream:zt,createWriteStream:Nt}});var Kt=On((Lt,Oe)=>{A();(function(l){"use strict";function v(h,E){var d=(h&65535)+(E&65535),T=(h>>16)+(E>>16)+(d>>16);return T<<16|d&65535}function S(h,E){return h<<E|h>>>32-E}function D(h,E,d,T,b,y){return v(S(v(v(E,h),v(T,y)),b),d)}function R(h,E,d,T,b,y,x){return D(E&d|~E&T,h,E,b,y,x)}function M(h,E,d,T,b,y,x){return D(E&T|d&~T,h,E,b,y,x)}function U(h,E,d,T,b,y,x){return D(E^d^T,h,E,b,y,x)}function P(h,E,d,T,b,y,x){return D(d^(E|~T),h,E,b,y,x)}function k(h,E){h[E>>5]|=128<<E%32,h[(E+64>>>9<<4)+14]=E;var d,T,b,y,x,a=1732584193,p=-271733879,m=-1732584194,g=271733878;for(d=0;d<h.length;d+=16)T=a,b=p,y=m,x=g,a=R(a,p,m,g,h[d],7,-680876936),g=R(g,a,p,m,h[d+1],12,-389564586),m=R(m,g,a,p,h[d+2],17,606105819),p=R(p,m,g,a,h[d+3],22,-1044525330),a=R(a,p,m,g,h[d+4],7,-176418897),g=R(g,a,p,m,h[d+5],12,1200080426),m=R(m,g,a,p,h[d+6],17,-1473231341),p=R(p,m,g,a,h[d+7],22,-45705983),a=R(a,p,m,g,h[d+8],7,1770035416),g=R(g,a,p,m,h[d+9],12,-1958414417),m=R(m,g,a,p,h[d+10],17,-42063),p=R(p,m,g,a,h[d+11],22,-1990404162),a=R(a,p,m,g,h[d+12],7,1804603682),g=R(g,a,p,m,h[d+13],12,-40341101),m=R(m,g,a,p,h[d+14],17,-1502002290),p=R(p,m,g,a,h[d+15],22,1236535329),a=M(a,p,m,g,h[d+1],5,-165796510),g=M(g,a,p,m,h[d+6],9,-1069501632),m=M(m,g,a,p,h[d+11],14,643717713),p=M(p,m,g,a,h[d],20,-373897302),a=M(a,p,m,g,h[d+5],5,-701558691),g=M(g,a,p,m,h[d+10],9,38016083),m=M(m,g,a,p,h[d+15],14,-660478335),p=M(p,m,g,a,h[d+4],20,-405537848),a=M(a,p,m,g,h[d+9],5,568446438),g=M(g,a,p,m,h[d+14],9,-1019803690),m=M(m,g,a,p,h[d+3],14,-187363961),p=M(p,m,g,a,h[d+8],20,1163531501),a=M(a,p,m,g,h[d+13],5,-1444681467),g=M(g,a,p,m,h[d+2],9,-51403784),m=M(m,g,a,p,h[d+7],14,1735328473),p=M(p,m,g,a,h[d+12],20,-1926607734),a=U(a,p,m,g,h[d+5],4,-378558),g=U(g,a,p,m,h[d+8],11,-2022574463),m=U(m,g,a,p,h[d+11],16,1839030562),p=U(p,m,g,a,h[d+14],23,-35309556),a=U(a,p,m,g,h[d+1],4,-1530992060),g=U(g,a,p,m,h[d+4],11,1272893353),m=U(m,g,a,p,h[d+7],16,-155497632),p=U(p,m,g,a,h[d+10],23,-1094730640),a=U(a,p,m,g,h[d+13],4,681279174),g=U(g,a,p,m,h[d],11,-358537222),m=U(m,g,a,p,h[d+3],16,-722521979),p=U(p,m,g,a,h[d+6],23,76029189),a=U(a,p,m,g,h[d+9],4,-640364487),g=U(g,a,p,m,h[d+12],11,-421815835),m=U(m,g,a,p,h[d+15],16,530742520),p=U(p,m,g,a,h[d+2],23,-995338651),a=P(a,p,m,g,h[d],6,-198630844),g=P(g,a,p,m,h[d+7],10,1126891415),m=P(m,g,a,p,h[d+14],15,-1416354905),p=P(p,m,g,a,h[d+5],21,-57434055),a=P(a,p,m,g,h[d+12],6,1700485571),g=P(g,a,p,m,h[d+3],10,-1894986606),m=P(m,g,a,p,h[d+10],15,-1051523),p=P(p,m,g,a,h[d+1],21,-2054922799),a=P(a,p,m,g,h[d+8],6,1873313359),g=P(g,a,p,m,h[d+15],10,-30611744),m=P(m,g,a,p,h[d+6],15,-1560198380),p=P(p,m,g,a,h[d+13],21,1309151649),a=P(a,p,m,g,h[d+4],6,-145523070),g=P(g,a,p,m,h[d+11],10,-1120210379),m=P(m,g,a,p,h[d+2],15,718787259),p=P(p,m,g,a,h[d+9],21,-343485551),a=v(a,T),p=v(p,b),m=v(m,y),g=v(g,x);return[a,p,m,g]}function cn(h){var E,d="",T=h.length*32;for(E=0;E<T;E+=8)d+=String.fromCharCode(h[E>>5]>>>E%32&255);return d}function gn(h){var E,d=[];for(d[(h.length>>2)-1]=void 0,E=0;E<d.length;E+=1)d[E]=0;var T=h.length*8;for(E=0;E<T;E+=8)d[E>>5]|=(h.charCodeAt(E/8)&255)<<E%32;return d}function wn(h){return cn(k(gn(h),h.length*8))}function Rn(h,E){var d,T=gn(h),b=[],y=[],x;for(b[15]=y[15]=void 0,T.length>16&&(T=k(T,h.length*8)),d=0;d<16;d+=1)b[d]=T[d]^909522486,y[d]=T[d]^1549556828;return x=k(b.concat(gn(E)),512+E.length*8),cn(k(y.concat(x),640))}function Y(h){var E="0123456789abcdef",d="",T,b;for(b=0;b<h.length;b+=1)T=h.charCodeAt(b),d+=E.charAt(T>>>4&15)+E.charAt(T&15);return d}function nn(h){return unescape(encodeURIComponent(h))}function Ln(h){return wn(nn(h))}function Tn(h){return Y(Ln(h))}function Pn(h,E){return Rn(nn(h),nn(E))}function Gn(h,E){return Y(Pn(h,E))}function zn(h,E,d){return E?d?Pn(E,h):Gn(E,h):d?Ln(h):Tn(h)}typeof define=="function"&&define.amd?define(function(){return zn}):typeof Oe=="object"&&Oe.exports?Oe.exports=zn:l.md5=zn})(Lt)});var $t=On((wf,Xt)=>{"use strict";A();function of(l,v){return Object.prototype.hasOwnProperty.call(l,v)}Xt.exports=function(l,v,S,D){v=v||"&",S=S||"=";var R={};if(typeof l!="string"||l.length===0)return R;var M=/\+/g;l=l.split(v);var U=1e3;D&&typeof D.maxKeys=="number"&&(U=D.maxKeys);var P=l.length;U>0&&P>U&&(P=U);for(var k=0;k<P;++k){var cn=l[k].replace(M,"%20"),gn=cn.indexOf(S),wn,Rn,Y,nn;gn>=0?(wn=cn.substr(0,gn),Rn=cn.substr(gn+1)):(wn=cn,Rn=""),Y=decodeURIComponent(wn),nn=decodeURIComponent(Rn),of(R,Y)?Array.isArray(R[Y])?R[Y].push(nn):R[Y]=[R[Y],nn]:R[Y]=nn}return R}});var Wt=On((Cf,Ht)=>{"use strict";A();var se=function(l){switch(typeof l){case"string":return l;case"boolean":return l?"true":"false";case"number":return isFinite(l)?l:"";default:return""}};Ht.exports=function(l,v,S,D){return v=v||"&",S=S||"=",l===null&&(l=void 0),typeof l=="object"?Object.keys(l).map(function(R){var M=encodeURIComponent(se(R))+S;return Array.isArray(l[R])?l[R].map(function(U){return M+encodeURIComponent(se(U))}).join(v):M+encodeURIComponent(se(l[R]))}).join(v):D?encodeURIComponent(se(D))+S+encodeURIComponent(se(l)):""}});var Bt=On(le=>{"use strict";A();le.decode=le.parse=$t();le.encode=le.stringify=Wt()});var Yt=On((Sf,Vt)=>{A();var uf=Kt(),af=Bt(),sf=/^[0-9a-f]{32}$/;function lf(l){var v={},S={protocol:1,format:1};for(var D in l)S[D]||(v[D]=l[D]);return v}function Gt(l,v){if(l)return typeof l.protocol=="boolean"?l.protocol:l.protocol==="http"?!1:l.protocol==="https"?!0:void 0}function Qt(l){return l=typeof l=="string"?l.trim().toLowerCase():"unspecified",l.match(sf)?l:uf(l)}function Jt(l){var v=af.stringify(lf(l));return v&&"?"+v||""}var Df=Vt.exports={url:function(l,v,S){var D="//www.gravatar.com/avatar/";v&&v.cdn?(D=v.cdn+"/avatar/",delete v.cdn):(v&&v.protocol&&(S=Gt(v)),typeof S<"u"&&(D=S?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var R=Jt(v);return D+Qt(l)+R},profile_url:function(l,v,S){var D=v!=null&&v.format!=null?String(v.format):"json",R;if(v&&v.cdn)R=v.cdn+"/",delete v.cdn;else{v&&v.protocol&&(S=Gt(v));var R=S&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var M=Jt(v);return R+Qt(l)+"."+D+M}}});var kt=On((Tf,Zt)=>{A();Zt.exports=Yt()});var nr=On((Bn,pe)=>{A();(function(){var l,v=[],S=[],D=0,R=+new Date+"",M=75,U=40,P=` 	\v\f\xA0\uFEFF
\r\u2028\u2029\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000`,k=/\b__p \+= '';/g,cn=/\b(__p \+=) '' \+/g,gn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Rn=/\w*$/,Y=/^\s*function[ \n\r\t]+\w/,nn=/<%=([\s\S]+?)%>/g,Ln=RegExp("^["+P+"]*0+(?=.$)"),Tn=/($^)/,Pn=/\bthis\b/,Gn=/['\n\r\t\u2028\u2029\\]/g,zn=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],h=0,E="[object Arguments]",d="[object Array]",T="[object Boolean]",b="[object Date]",y="[object Function]",x="[object Number]",a="[object Object]",p="[object RegExp]",m="[object String]",g={};g[y]=!1,g[E]=g[d]=g[T]=g[b]=g[x]=g[a]=g[p]=g[m]=!0;var N={leading:!1,maxWait:0,trailing:!1},I={configurable:!1,enumerable:!1,value:null,writable:!1},K={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1},mn={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},q=K[typeof window]&&window||this,G=K[typeof Bn]&&Bn&&!Bn.nodeType&&Bn,vn=K[typeof pe]&&pe&&!pe.nodeType&&pe,Qn=vn&&vn.exports===G&&G,en=K[typeof globalThis]&&globalThis;en&&(en.global===en||en.window===en)&&(q=en);function xn(C,j,z){for(var L=(z||0)-1,$=C?C.length:0;++L<$;)if(C[L]===j)return L;return-1}function Kn(C,j){var z=typeof j;if(C=C.cache,z=="boolean"||j==null)return C[j]?0:-1;z!="number"&&z!="string"&&(z="object");var L=z=="number"?j:R+j;return C=(C=C[z])&&C[L],z=="object"?C&&xn(C,j)>-1?0:-1:C?0:-1}function ar(C){var j=this.cache,z=typeof C;if(z=="boolean"||C==null)j[C]=!0;else{z!="number"&&z!="string"&&(z="object");var L=z=="number"?C:R+C,$=j[z]||(j[z]={});z=="object"?($[L]||($[L]=[])).push(C):$[L]=!0}}function Ye(C){return C.charCodeAt(0)}function sr(C,j){for(var z=C.criteria,L=j.criteria,$=-1,sn=z.length;++$<sn;){var hn=z[$],Q=L[$];if(hn!==Q){if(hn>Q||typeof hn>"u")return 1;if(hn<Q||typeof Q>"u")return-1}}return C.index-j.index}function Re(C){var j=-1,z=C.length,L=C[0],$=C[z/2|0],sn=C[z-1];if(L&&typeof L=="object"&&$&&typeof $=="object"&&sn&&typeof sn=="object")return!1;var hn=De();hn.false=hn.null=hn.true=hn.undefined=!1;var Q=De();for(Q.array=C,Q.cache=hn,Q.push=ar;++j<z;)Q.push(C[j]);return Q}function lr(C){return"\\"+mn[C]}function Cn(){return v.pop()||[]}function De(){return S.pop()||{array:null,cache:null,criteria:null,false:!1,index:0,null:!1,number:null,object:null,push:null,string:null,true:!1,undefined:!1,value:null}}function bn(C){C.length=0,v.length<U&&v.push(C)}function Jn(C){var j=C.cache;j&&Jn(j),C.array=C.cache=C.criteria=C.object=C.number=C.string=C.value=null,S.length<U&&S.push(C)}function X(C,j,z){j||(j=0),typeof z>"u"&&(z=C?C.length:0);for(var L=-1,$=z-j||0,sn=Array($<0?0:$);++L<$;)sn[L]=C[j+L];return sn}function Se(C){C=C?jn.defaults(q.Object(),C,jn.pick(q,zn)):q;var j=C.Array,z=C.Boolean,L=C.Date,$=C.Function,sn=C.Math,hn=C.Number,Q=C.Object,Vn=C.RegExp,In=C.String,Dn=C.TypeError,Xn=[],Ze=Q.prototype,pr=C._,tn=Ze.toString,hr=Vn("^"+In(tn).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),dr=sn.ceil,de=C.clearTimeout,cr=sn.floor,gr=$.prototype.toString,$n=Un($n=Q.getPrototypeOf)&&$n,rn=Ze.hasOwnProperty,Yn=Xn.push,Zn=C.setTimeout,ke=Xn.splice,mr=Xn.unshift,nt=(function(){try{var n={},e=Un(e=Q.defineProperty)&&e,t=e(n,n,n)&&e}catch{}return t})(),ce=Un(ce=Q.create)&&ce,Fe=Un(Fe=j.isArray)&&Fe,vr=C.isFinite,br=C.isNaN,ge=Un(ge=Q.keys)&&ge,yn=sn.max,kn=sn.min,Te=C.parseInt,et=sn.random,Sn={};Sn[d]=j,Sn[T]=z,Sn[b]=L,Sn[y]=$,Sn[a]=Q,Sn[x]=hn,Sn[p]=Vn,Sn[m]=In;function o(n){return n&&typeof n=="object"&&!Z(n)&&rn.call(n,"__wrapped__")?n:new Nn(n)}function Nn(n,e){this.__chain__=!!e,this.__wrapped__=n}Nn.prototype=o.prototype;var ne=o.support={};ne.funcDecomp=!Un(C.WinRTError)&&Pn.test(Se),ne.funcNames=typeof $.name=="string",o.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:nn,variable:"",imports:{_:o}};function yr(n){var e=n[0],t=n[2],r=n[4];function i(){if(t){var f=X(t);Yn.apply(f,arguments)}if(this instanceof i){var u=ee(e.prototype),s=e.apply(u,f||arguments);return on(s)?s:u}return e.apply(r,f||arguments)}return Pe(i,n),i}function je(n,e,t,r,i){if(t){var f=t(n);if(typeof f<"u")return f}var u=on(n);if(u){var s=tn.call(n);if(!g[s])return n;var c=Sn[s];switch(s){case T:case b:return new c(+n);case x:case m:return new c(n);case p:return f=c(n.source,Rn.exec(n)),f.lastIndex=n.lastIndex,f}}else return n;var w=Z(n);if(e){var _=!r;r||(r=Cn()),i||(i=Cn());for(var F=r.length;F--;)if(r[F]==n)return i[F];f=w?c(n.length):{}}else f=w?X(n):be({},n);return w&&(rn.call(n,"index")&&(f.index=n.index),rn.call(n,"input")&&(f.input=n.input)),e&&(r.push(n),i.push(f),(w?un:B)(n,function(O,H){f[H]=je(O,e,t,r,i)}),_&&(bn(r),bn(i))),f}function ee(n,e){return on(n)?ce(n):{}}ce||(ee=(function(){function n(){}return function(e){if(on(e)){n.prototype=e;var t=new n;n.prototype=null}return t||C.Object()}})());function ln(n,e,t){if(typeof n!="function")return He;if(typeof e>"u"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r>"u"&&(ne.funcNames&&(r=!n.name),r=r||!ne.funcDecomp,!r)){var i=gr.call(n);ne.funcNames||(r=!Y.test(i)),r||(r=Pn.test(i),Pe(n,r))}if(r===!1||r!==!0&&r[1]&1)return n;switch(t){case 1:return function(f){return n.call(e,f)};case 2:return function(f,u){return n.call(e,f,u)};case 3:return function(f,u,s){return n.call(e,f,u,s)};case 4:return function(f,u,s,c){return n.call(e,f,u,s,c)}}return _t(n,e)}function tt(n){var e=n[0],t=n[1],r=n[2],i=n[3],f=n[4],u=n[5],s=t&1,c=t&2,w=t&4,_=t&8,F=e;function O(){var H=s?f:this;if(r){var W=X(r);Yn.apply(W,arguments)}if((i||w)&&(W||(W=X(arguments)),i&&Yn.apply(W,i),w&&W.length<u))return t|=16,tt([e,_?t:t&-4,W,null,f,u]);if(W||(W=arguments),c&&(e=H[F]),this instanceof O){H=ee(e.prototype);var pn=e.apply(H,W);return on(pn)?pn:H}return e.apply(H,W)}return Pe(O,n),O}function te(n,e){var t=-1,r=me(),i=n?n.length:0,f=i>=M&&r===xn,u=[];if(f){var s=Re(e);s?(r=Kn,e=s):f=!1}for(;++t<i;){var c=n[t];r(e,c)<0&&u.push(c)}return f&&Jn(e),u}function Mn(n,e,t,r){for(var i=(r||0)-1,f=n?n.length:0,u=[];++i<f;){var s=n[i];if(s&&typeof s=="object"&&typeof s.length=="number"&&(Z(s)||ve(s))){e||(s=Mn(s,e,t));var c=-1,w=s.length,_=u.length;for(u.length+=w;++c<w;)u[_++]=s[c]}else t||u.push(s)}return u}function Hn(n,e,t,r,i,f){if(t){var u=t(n,e);if(typeof u<"u")return!!u}if(n===e)return n!==0||1/n==1/e;var s=typeof n,c=typeof e;if(n===n&&!(n&&K[s])&&!(e&&K[c]))return!1;if(n==null||e==null)return n===e;var w=tn.call(n),_=tn.call(e);if(w==E&&(w=a),_==E&&(_=a),w!=_)return!1;switch(w){case T:case b:return+n==+e;case x:return n!=+n?e!=+e:n==0?1/n==1/e:n==+e;case p:case m:return n==In(e)}var F=w==d;if(!F){var O=rn.call(n,"__wrapped__"),H=rn.call(e,"__wrapped__");if(O||H)return Hn(O?n.__wrapped__:n,H?e.__wrapped__:e,t,r,i,f);if(w!=a)return!1;var W=n.constructor,pn=e.constructor;if(W!=pn&&!(J(W)&&W instanceof W&&J(pn)&&pn instanceof pn)&&"constructor"in n&&"constructor"in e)return!1}var dn=!i;i||(i=Cn()),f||(f=Cn());for(var an=i.length;an--;)if(i[an]==n)return f[an]==e;var V=0;if(u=!0,i.push(n),f.push(e),F){if(an=n.length,V=e.length,u=V==an,u||r)for(;V--;){var xe=an,oe=e[V];if(r)for(;xe--&&!(u=Hn(n[xe],oe,t,r,i,f)););else if(!(u=Hn(n[V],oe,t,r,i,f)))break}}else Fn(e,function(ue,ae,Be){if(rn.call(Be,ae))return V++,u=rn.call(n,ae)&&Hn(n[ae],ue,t,r,i,f)}),u&&!r&&Fn(n,function(ue,ae,Be){if(rn.call(Be,ae))return u=--V>-1});return i.pop(),f.pop(),dn&&(bn(i),bn(f)),u}function rt(n,e,t,r,i){(Z(e)?un:B)(e,function(f,u){var s,c,w=f,_=n[u];if(f&&((c=Z(f))||Ae(f))){for(var F=r.length;F--;)if(s=r[F]==f){_=i[F];break}if(!s){var O;t&&(w=t(_,f),(O=typeof w<"u")&&(_=w)),O||(_=c?Z(_)?_:[]:Ae(_)?_:{}),r.push(f),i.push(_),O||rt(_,f,t,r,i)}}else t&&(w=t(_,f),typeof w>"u"&&(w=f)),typeof w<"u"&&(_=w);n[u]=_})}function Ie(n,e){return n+cr(et()*(e-n+1))}function Me(n,e,t){var r=-1,i=me(),f=n?n.length:0,u=[],s=!e&&f>=M&&i===xn,c=t||s?Cn():u;if(s){var w=Re(c);i=Kn,c=w}for(;++r<f;){var _=n[r],F=t?t(_,r,n):_;(e?!r||c[c.length-1]!==F:i(c,F)<0)&&((t||s)&&c.push(F),u.push(_))}return s?(bn(c.array),Jn(c)):t&&bn(c),u}function Ue(n){return function(e,t,r){var i={};t=o.createCallback(t,r,3);var f=-1,u=e?e.length:0;if(typeof u=="number")for(;++f<u;){var s=e[f];n(i,s,t(s,f,e),e)}else B(e,function(c,w,_){n(i,c,t(c,w,_),_)});return i}}function En(n,e,t,r,i,f){var u=e&1,s=e&2,c=e&4,w=e&8,_=e&16,F=e&32;if(!s&&!J(n))throw new Dn;_&&!t.length&&(e&=-17,_=t=!1),F&&!r.length&&(e&=-33,F=r=!1);var O=n&&n.__bindData__;if(O&&O!==!0)return O=X(O),O[2]&&(O[2]=X(O[2])),O[3]&&(O[3]=X(O[3])),u&&!(O[1]&1)&&(O[4]=i),!u&&O[1]&1&&(e|=8),c&&!(O[1]&4)&&(O[5]=f),_&&Yn.apply(O[2]||(O[2]=[]),t),F&&mr.apply(O[3]||(O[3]=[]),r),O[1]|=e,En.apply(null,O);var H=e==1||e===17?yr:tt;return H([n,e,t,r,i,f])}function _r(n){return ze[n]}function me(){var n=(n=o.indexOf)===gt?xn:n;return n}function Un(n){return typeof n=="function"&&hr.test(n)}var Pe=nt?function(n,e){I.value=e,nt(n,"__bindData__",I),I.value=null}:xt;function it(n){var e,t;return!(n&&tn.call(n)==a)||(e=n.constructor,J(e)&&!(e instanceof e))?!1:(Fn(n,function(r,i){t=i}),typeof t>"u"||rn.call(n,t))}function wr(n){return ft[n]}function ve(n){return n&&typeof n=="object"&&typeof n.length=="number"&&tn.call(n)==E||!1}var Z=Fe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&tn.call(n)==d||!1},xr=function(n){var e,t=n,r=[];if(!t||!K[typeof n])return r;for(e in t)rn.call(t,e)&&r.push(e);return r},fn=ge?function(n){return on(n)?ge(n):[]}:xr,ze={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ft=ut(ze),Cr=Vn("("+fn(ft).join("|")+")","g"),Er=Vn("["+fn(ze).join("")+"]","g"),be=function(n,e,t){var r,i=n,f=i;if(!i)return f;var u=arguments,s=0,c=typeof t=="number"?2:u.length;if(c>3&&typeof u[c-2]=="function")var w=ln(u[--c-1],u[c--],2);else c>2&&typeof u[c-1]=="function"&&(w=u[--c]);for(;++s<c;)if(i=u[s],i&&K[typeof i])for(var _=-1,F=K[typeof i]&&fn(i),O=F?F.length:0;++_<O;)r=F[_],f[r]=w?w(f[r],i[r]):i[r];return f};function Or(n,e,t,r){return typeof e!="boolean"&&e!=null&&(r=t,t=e,e=!1),je(n,e,typeof t=="function"&&ln(t,r,1))}function Rr(n,e,t){return je(n,!0,typeof e=="function"&&ln(e,t,1))}function Dr(n,e){var t=ee(n);return e?be(t,e):t}var Ne=function(n,e,t){var r,i=n,f=i;if(!i)return f;for(var u=arguments,s=0,c=typeof t=="number"?2:u.length;++s<c;)if(i=u[s],i&&K[typeof i])for(var w=-1,_=K[typeof i]&&fn(i),F=_?_.length:0;++w<F;)r=_[w],typeof f[r]>"u"&&(f[r]=i[r]);return f};function Sr(n,e,t){var r;return e=o.createCallback(e,t,3),B(n,function(i,f,u){if(e(i,f,u))return r=f,!1}),r}function Fr(n,e,t){var r;return e=o.createCallback(e,t,3),ot(n,function(i,f,u){if(e(i,f,u))return r=f,!1}),r}var Fn=function(n,e,t){var r,i=n,f=i;if(!i||!K[typeof i])return f;e=e&&typeof t>"u"?e:ln(e,t,3);for(r in i)if(e(i[r],r,n)===!1)return f;return f};function Tr(n,e,t){var r=[];Fn(n,function(f,u){r.push(u,f)});var i=r.length;for(e=ln(e,t,3);i--&&e(r[i--],r[i],n)!==!1;);return n}var B=function(n,e,t){var r,i=n,f=i;if(!i||!K[typeof i])return f;e=e&&typeof t>"u"?e:ln(e,t,3);for(var u=-1,s=K[typeof i]&&fn(i),c=s?s.length:0;++u<c;)if(r=s[u],e(i[r],r,n)===!1)return f;return f};function ot(n,e,t){var r=fn(n),i=r.length;for(e=ln(e,t,3);i--;){var f=r[i];if(e(n[f],f,n)===!1)break}return n}function re(n){var e=[];return Fn(n,function(t,r){J(t)&&e.push(r)}),e.sort()}function jr(n,e){return n?rn.call(n,e):!1}function ut(n){for(var e=-1,t=fn(n),r=t.length,i={};++e<r;){var f=t[e];i[n[f]]=f}return i}function Ir(n){return n===!0||n===!1||n&&typeof n=="object"&&tn.call(n)==T||!1}function Mr(n){return n&&typeof n=="object"&&tn.call(n)==b||!1}function Ur(n){return n&&n.nodeType===1||!1}function Pr(n){var e=!0;if(!n)return e;var t=tn.call(n),r=n.length;return t==d||t==m||t==E||t==a&&typeof r=="number"&&J(n.splice)?!r:(B(n,function(){return e=!1}),e)}function zr(n,e,t,r){return Hn(n,e,typeof t=="function"&&ln(t,r,2))}function Nr(n){return vr(n)&&!br(parseFloat(n))}function J(n){return typeof n=="function"}function on(n){return!!(n&&K[typeof n])}function Ar(n){return at(n)&&n!=+n}function qr(n){return n===null}function at(n){return typeof n=="number"||n&&typeof n=="object"&&tn.call(n)==x||!1}var Ae=$n?function(n){if(!(n&&tn.call(n)==a))return!1;var e=n.valueOf,t=Un(e)&&(t=$n(e))&&$n(t);return t?n==t||$n(n)==t:it(n)}:it;function Lr(n){return n&&typeof n=="object"&&tn.call(n)==p||!1}function ie(n){return typeof n=="string"||n&&typeof n=="object"&&tn.call(n)==m||!1}function Kr(n){return typeof n>"u"}function Xr(n,e,t){var r={};return e=o.createCallback(e,t,3),B(n,function(i,f,u){r[f]=e(i,f,u)}),r}function $r(n){var e=arguments,t=2;if(!on(n))return n;if(typeof e[2]!="number"&&(t=e.length),t>3&&typeof e[t-2]=="function")var r=ln(e[--t-1],e[t--],2);else t>2&&typeof e[t-1]=="function"&&(r=e[--t]);for(var i=X(arguments,1,t),f=-1,u=Cn(),s=Cn();++f<t;)rt(n,i[f],r,u,s);return bn(u),bn(s),n}function Hr(n,e,t){var r={};if(typeof e!="function"){var i=[];Fn(n,function(c,w){i.push(w)}),i=te(i,Mn(arguments,!0,!1,1));for(var f=-1,u=i.length;++f<u;){var s=i[f];r[s]=n[s]}}else e=o.createCallback(e,t,3),Fn(n,function(c,w,_){e(c,w,_)||(r[w]=c)});return r}function Wr(n){for(var e=-1,t=fn(n),r=t.length,i=j(r);++e<r;){var f=t[e];i[e]=[f,n[f]]}return i}function Br(n,e,t){var r={};if(typeof e!="function")for(var i=-1,f=Mn(arguments,!0,!1,1),u=on(n)?f.length:0;++i<u;){var s=f[i];s in n&&(r[s]=n[s])}else e=o.createCallback(e,t,3),Fn(n,function(c,w,_){e(c,w,_)&&(r[w]=c)});return r}function Gr(n,e,t,r){var i=Z(n);if(t==null)if(i)t=[];else{var f=n&&n.constructor,u=f&&f.prototype;t=ee(u)}return e&&(e=o.createCallback(e,r,4),(i?un:B)(n,function(s,c,w){return e(t,s,c,w)})),t}function ye(n){for(var e=-1,t=fn(n),r=t.length,i=j(r);++e<r;)i[e]=n[t[e]];return i}function Qr(n){for(var e=arguments,t=-1,r=Mn(e,!0,!1,1),i=e[2]&&e[2][e[1]]===n?1:r.length,f=j(i);++t<i;)f[t]=n[r[t]];return f}function st(n,e,t){var r=-1,i=me(),f=n?n.length:0,u=!1;return t=(t<0?yn(0,f+t):t)||0,Z(n)?u=i(n,e,t)>-1:typeof f=="number"?u=(ie(n)?n.indexOf(e,t):i(n,e,t))>-1:B(n,function(s){if(++r>=t)return!(u=s===e)}),u}var Jr=Ue(function(n,e,t){rn.call(n,t)?n[t]++:n[t]=1});function lt(n,e,t){var r=!0;e=o.createCallback(e,t,3);var i=-1,f=n?n.length:0;if(typeof f=="number")for(;++i<f&&(r=!!e(n[i],i,n)););else B(n,function(u,s,c){return r=!!e(u,s,c)});return r}function _e(n,e,t){var r=[];e=o.createCallback(e,t,3);var i=-1,f=n?n.length:0;if(typeof f=="number")for(;++i<f;){var u=n[i];e(u,i,n)&&r.push(u)}else B(n,function(s,c,w){e(s,c,w)&&r.push(s)});return r}function qe(n,e,t){e=o.createCallback(e,t,3);var r=-1,i=n?n.length:0;if(typeof i=="number")for(;++r<i;){var f=n[r];if(e(f,r,n))return f}else{var u;return B(n,function(s,c,w){if(e(s,c,w))return u=s,!1}),u}}function Vr(n,e,t){var r;return e=o.createCallback(e,t,3),we(n,function(i,f,u){if(e(i,f,u))return r=i,!1}),r}function un(n,e,t){var r=-1,i=n?n.length:0;if(e=e&&typeof t>"u"?e:ln(e,t,3),typeof i=="number")for(;++r<i&&e(n[r],r,n)!==!1;);else B(n,e);return n}function we(n,e,t){var r=n?n.length:0;if(e=e&&typeof t>"u"?e:ln(e,t,3),typeof r=="number")for(;r--&&e(n[r],r,n)!==!1;);else{var i=fn(n);r=i.length,B(n,function(f,u,s){return u=i?i[--r]:--r,e(s[u],u,s)})}return n}var Yr=Ue(function(n,e,t){(rn.call(n,t)?n[t]:n[t]=[]).push(e)}),Zr=Ue(function(n,e,t){n[t]=e});function kr(n,e){var t=X(arguments,2),r=-1,i=typeof e=="function",f=n?n.length:0,u=j(typeof f=="number"?f:0);return un(n,function(s){u[++r]=(i?e:s[e]).apply(s,t)}),u}function fe(n,e,t){var r=-1,i=n?n.length:0;if(e=o.createCallback(e,t,3),typeof i=="number")for(var f=j(i);++r<i;)f[r]=e(n[r],r,n);else f=[],B(n,function(u,s,c){f[++r]=e(u,s,c)});return f}function pt(n,e,t){var r=-1/0,i=r;if(typeof e!="function"&&t&&t[e]===n&&(e=null),e==null&&Z(n))for(var f=-1,u=n.length;++f<u;){var s=n[f];s>i&&(i=s)}else e=e==null&&ie(n)?Ye:o.createCallback(e,t,3),un(n,function(c,w,_){var F=e(c,w,_);F>r&&(r=F,i=c)});return i}function ni(n,e,t){var r=1/0,i=r;if(typeof e!="function"&&t&&t[e]===n&&(e=null),e==null&&Z(n))for(var f=-1,u=n.length;++f<u;){var s=n[f];s<i&&(i=s)}else e=e==null&&ie(n)?Ye:o.createCallback(e,t,3),un(n,function(c,w,_){var F=e(c,w,_);F<r&&(r=F,i=c)});return i}var Le=fe;function Ke(n,e,t,r){if(!n)return t;var i=arguments.length<3;e=o.createCallback(e,r,4);var f=-1,u=n.length;if(typeof u=="number")for(i&&(t=n[++f]);++f<u;)t=e(t,n[f],f,n);else B(n,function(s,c,w){t=i?(i=!1,s):e(t,s,c,w)});return t}function ht(n,e,t,r){var i=arguments.length<3;return e=o.createCallback(e,r,4),we(n,function(f,u,s){t=i?(i=!1,f):e(t,f,u,s)}),t}function ei(n,e,t){return e=o.createCallback(e,t,3),_e(n,function(r,i,f){return!e(r,i,f)})}function ti(n,e,t){if(n&&typeof n.length!="number"&&(n=ye(n)),e==null||t)return n?n[Ie(0,n.length-1)]:l;var r=dt(n);return r.length=kn(yn(0,e),r.length),r}function dt(n){var e=-1,t=n?n.length:0,r=j(typeof t=="number"?t:0);return un(n,function(i){var f=Ie(0,++e);r[e]=r[f],r[f]=i}),r}function ri(n){var e=n?n.length:0;return typeof e=="number"?e:fn(n).length}function ct(n,e,t){var r;e=o.createCallback(e,t,3);var i=-1,f=n?n.length:0;if(typeof f=="number")for(;++i<f&&!(r=e(n[i],i,n)););else B(n,function(u,s,c){return!(r=e(u,s,c))});return!!r}function ii(n,e,t){var r=-1,i=Z(e),f=n?n.length:0,u=j(typeof f=="number"?f:0);for(i||(e=o.createCallback(e,t,3)),un(n,function(c,w,_){var F=u[++r]=De();i?F.criteria=fe(e,function(O){return c[O]}):(F.criteria=Cn())[0]=e(c,w,_),F.index=r,F.value=c}),f=u.length,u.sort(sr);f--;){var s=u[f];u[f]=s.value,i||bn(s.criteria),Jn(s)}return u}function fi(n){return n&&typeof n.length=="number"?X(n):ye(n)}var oi=_e;function ui(n){for(var e=-1,t=n?n.length:0,r=[];++e<t;){var i=n[e];i&&r.push(i)}return r}function ai(n){return te(n,Mn(arguments,!0,!0,1))}function si(n,e,t){var r=-1,i=n?n.length:0;for(e=o.createCallback(e,t,3);++r<i;)if(e(n[r],r,n))return r;return-1}function li(n,e,t){var r=n?n.length:0;for(e=o.createCallback(e,t,3);r--;)if(e(n[r],r,n))return r;return-1}function Xe(n,e,t){var r=0,i=n?n.length:0;if(typeof e!="number"&&e!=null){var f=-1;for(e=o.createCallback(e,t,3);++f<i&&e(n[f],f,n);)r++}else if(r=e,r==null||t)return n?n[0]:l;return X(n,0,kn(yn(0,r),i))}function pi(n,e,t,r){return typeof e!="boolean"&&e!=null&&(r=t,t=typeof e!="function"&&r&&r[e]===n?null:e,e=!1),t!=null&&(n=fe(n,t,r)),Mn(n,e)}function gt(n,e,t){if(typeof t=="number"){var r=n?n.length:0;t=t<0?yn(0,r+t):t||0}else if(t){var i=mt(n,e);return n[i]===e?i:-1}return xn(n,e,t)}function hi(n,e,t){var r=0,i=n?n.length:0;if(typeof e!="number"&&e!=null){var f=i;for(e=o.createCallback(e,t,3);f--&&e(n[f],f,n);)r++}else r=e==null||t?1:e||r;return X(n,0,kn(yn(0,i-r),i))}function di(){for(var n=[],e=-1,t=arguments.length,r=Cn(),i=me(),f=i===xn,u=Cn();++e<t;){var s=arguments[e];(Z(s)||ve(s))&&(n.push(s),r.push(f&&s.length>=M&&Re(e?n[e]:u)))}var c=n[0],w=-1,_=c?c.length:0,F=[];n:for(;++w<_;){var O=r[0];if(s=c[w],(O?Kn(O,s):i(u,s))<0){for(e=t,(O||u).push(s);--e;)if(O=r[e],(O?Kn(O,s):i(n[e],s))<0)continue n;F.push(s)}}for(;t--;)O=r[t],O&&Jn(O);return bn(r),bn(u),F}function ci(n,e,t){var r=0,i=n?n.length:0;if(typeof e!="number"&&e!=null){var f=i;for(e=o.createCallback(e,t,3);f--&&e(n[f],f,n);)r++}else if(r=e,r==null||t)return n?n[i-1]:l;return X(n,yn(0,i-r))}function gi(n,e,t){var r=n?n.length:0;for(typeof t=="number"&&(r=(t<0?yn(0,r+t):kn(t,r-1))+1);r--;)if(n[r]===e)return r;return-1}function mi(n){for(var e=arguments,t=0,r=e.length,i=n?n.length:0;++t<r;)for(var f=-1,u=e[t];++f<i;)n[f]===u&&(ke.call(n,f--,1),i--);return n}function vi(n,e,t){n=+n||0,t=typeof t=="number"?t:+t||1,e==null&&(e=n,n=0);for(var r=-1,i=yn(0,dr((e-n)/(t||1))),f=j(i);++r<i;)f[r]=n,n+=t;return f}function bi(n,e,t){var r=-1,i=n?n.length:0,f=[];for(e=o.createCallback(e,t,3);++r<i;){var u=n[r];e(u,r,n)&&(f.push(u),ke.call(n,r--,1),i--)}return f}function $e(n,e,t){if(typeof e!="number"&&e!=null){var r=0,i=-1,f=n?n.length:0;for(e=o.createCallback(e,t,3);++i<f&&e(n[i],i,n);)r++}else r=e==null||t?1:yn(0,e);return X(n,r)}function mt(n,e,t,r){var i=0,f=n?n.length:i;for(t=t?o.createCallback(t,r,1):He,e=t(e);i<f;){var u=i+f>>>1;t(n[u])<e?i=u+1:f=u}return i}function yi(){return Me(Mn(arguments,!0,!0))}function vt(n,e,t,r){return typeof e!="boolean"&&e!=null&&(r=t,t=typeof e!="function"&&r&&r[e]===n?null:e,e=!1),t!=null&&(t=o.createCallback(t,r,3)),Me(n,e,t)}function _i(n){return te(n,X(arguments,1))}function wi(){for(var n=-1,e=arguments.length;++n<e;){var t=arguments[n];if(Z(t)||ve(t))var r=r?Me(te(r,t).concat(te(t,r))):t}return r||[]}function bt(){for(var n=arguments.length>1?arguments:arguments[0],e=-1,t=n?pt(Le(n,"length")):0,r=j(t<0?0:t);++e<t;)r[e]=Le(n,e);return r}function yt(n,e){var t=-1,r=n?n.length:0,i={};for(!e&&r&&!Z(n[0])&&(e=[]);++t<r;){var f=n[t];e?i[f]=e[t]:f&&(i[f[0]]=f[1])}return i}function xi(n,e){if(!J(e))throw new Dn;return function(){if(--n<1)return e.apply(this,arguments)}}function _t(n,e){return arguments.length>2?En(n,17,X(arguments,2),null,e):En(n,1,null,null,e)}function Ci(n){for(var e=arguments.length>1?Mn(arguments,!0,!1,1):re(n),t=-1,r=e.length;++t<r;){var i=e[t];n[i]=En(n[i],1,null,null,n)}return n}function Ei(n,e){return arguments.length>2?En(e,19,X(arguments,2),null,n):En(e,3,null,null,n)}function Oi(){for(var n=arguments,e=n.length;e--;)if(!J(n[e]))throw new Dn;return function(){for(var t=arguments,r=n.length;r--;)t=[n[r].apply(this,t)];return t[0]}}function Ri(n,e){return e=typeof e=="number"?e:+e||n.length,En(n,4,null,null,null,e)}function wt(n,e,t){var r,i,f,u,s,c,w,_=0,F=!1,O=!0;if(!J(n))throw new Dn;if(e=yn(0,e)||0,t===!0){var H=!0;O=!1}else on(t)&&(H=t.leading,F="maxWait"in t&&(yn(e,t.maxWait)||0),O="trailing"in t?t.trailing:O);var W=function(){var dn=e-(An()-u);if(dn<=0){i&&de(i);var an=w;i=c=w=l,an&&(_=An(),f=n.apply(s,r),!c&&!i&&(r=s=null))}else c=Zn(W,dn)},pn=function(){c&&de(c),i=c=w=l,(O||F!==e)&&(_=An(),f=n.apply(s,r),!c&&!i&&(r=s=null))};return function(){if(r=arguments,u=An(),s=this,w=O&&(c||!H),F===!1)var dn=H&&!c;else{!i&&!H&&(_=u);var an=F-(u-_),V=an<=0;V?(i&&(i=de(i)),_=u,f=n.apply(s,r)):i||(i=Zn(pn,an))}return V&&c?c=de(c):!c&&e!==F&&(c=Zn(W,e)),dn&&(V=!0,f=n.apply(s,r)),V&&!c&&!i&&(r=s=null),f}}function Di(n){if(!J(n))throw new Dn;var e=X(arguments,1);return Zn(function(){n.apply(l,e)},1)}function Si(n,e){if(!J(n))throw new Dn;var t=X(arguments,2);return Zn(function(){n.apply(l,t)},e)}function Fi(n,e){if(!J(n))throw new Dn;var t=function(){var r=t.cache,i=e?e.apply(this,arguments):R+arguments[0];return rn.call(r,i)?r[i]:r[i]=n.apply(this,arguments)};return t.cache={},t}function Ti(n){var e,t;if(!J(n))throw new Dn;return function(){return e||(e=!0,t=n.apply(this,arguments),n=null),t}}function ji(n){return En(n,16,X(arguments,1))}function Ii(n){return En(n,32,null,X(arguments,1))}function Mi(n,e,t){var r=!0,i=!0;if(!J(n))throw new Dn;return t===!1?r=!1:on(t)&&(r="leading"in t?t.leading:r,i="trailing"in t?t.trailing:i),N.leading=r,N.maxWait=e,N.trailing=i,wt(n,e,N)}function Ui(n,e){return En(e,16,[n])}function Pi(n){return function(){return n}}function zi(n,e,t){var r=typeof n;if(n==null||r=="function")return ln(n,e,t);if(r!="object")return Ct(n);var i=fn(n),f=i[0],u=n[f];return i.length==1&&u===u&&!on(u)?function(s){var c=s[f];return u===c&&(u!==0||1/u==1/c)}:function(s){for(var c=i.length,w=!1;c--&&(w=Hn(s[i[c]],n[i[c]],null,!0)););return w}}function Ni(n){return n==null?"":In(n).replace(Er,_r)}function He(n){return n}function We(n,e,t){var r=!0,i=e&&re(e);(!e||!t&&!i.length)&&(t==null&&(t=e),f=Nn,e=n,n=o,i=re(e)),t===!1?r=!1:on(t)&&"chain"in t&&(r=t.chain);var f=n,u=J(f);un(i,function(s){var c=n[s]=e[s];u&&(f.prototype[s]=function(){var w=this.__chain__,_=this.__wrapped__,F=[_];Yn.apply(F,arguments);var O=c.apply(n,F);if(r||w){if(_===O&&on(O))return this;O=new f(O),O.__chain__=w}return O})})}function Ai(){return C._=pr,this}function xt(){}var An=Un(An=L.now)&&An||function(){return new L().getTime()},qi=Te(P+"08")==8?Te:function(n,e){return Te(ie(n)?n.replace(Ln,""):n,e||0)};function Ct(n){return function(e){return e[n]}}function Li(n,e,t){var r=n==null,i=e==null;if(t==null&&(typeof n=="boolean"&&i?(t=n,n=1):!i&&typeof e=="boolean"&&(t=e,i=!0)),r&&i&&(e=1),n=+n||0,i?(e=n,n=0):e=+e||0,t||n%1||e%1){var f=et();return kn(n+f*(e-n+parseFloat("1e-"+((f+"").length-1))),e)}return Ie(n,e)}function Ki(n,e){if(n){var t=n[e];return J(t)?n[e]():t}}function Xi(n,e,t){var r=o.templateSettings;n=In(n||""),t=Ne({},t,r);var i=Ne({},t.imports,r.imports),f=fn(i),u=ye(i),s,c=0,w=t.interpolate||Tn,_="__p += '",F=Vn((t.escape||Tn).source+"|"+w.source+"|"+(w===nn?wn:Tn).source+"|"+(t.evaluate||Tn).source+"|$","g");n.replace(F,function(dn,an,V,xe,oe,ue){return V||(V=xe),_+=n.slice(c,ue).replace(Gn,lr),an&&(_+=`' +
__e(`+an+`) +
'`),oe&&(s=!0,_+=`';
`+oe+`;
__p += '`),V&&(_+=`' +
((__t = (`+V+`)) == null ? '' : __t) +
'`),c=ue+dn.length,dn}),_+=`';
`;var O=t.variable,H=O;H||(O="obj",_="with ("+O+`) {
`+_+`
}
`),_=(s?_.replace(k,""):_).replace(cn,"$1").replace(gn,"$1;"),_="function("+O+`) {
`+(H?"":O+" || ("+O+` = {});
`)+"var __t, __p = '', __e = _.escape"+(s?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_+`return __p
}`;var W=`
/*
//# sourceURL=`+(t.sourceURL||"/lodash/template/source["+h+++"]")+`
*/`;try{var pn=$(f,"return "+_+W).apply(l,u)}catch(dn){throw dn.source=_,dn}return e?pn(e):(pn.source=_,pn)}function $i(n,e,t){n=(n=+n)>-1?n:0;var r=-1,i=j(n);for(e=ln(e,t,1);++r<n;)i[r]=e(r);return i}function Hi(n){return n==null?"":In(n).replace(Cr,wr)}function Wi(n){var e=++D;return In(n??"")+e}function Bi(n){return n=new Nn(n),n.__chain__=!0,n}function Gi(n,e){return e(n),n}function Qi(){return this.__chain__=!0,this}function Ji(){return In(this.__wrapped__)}function Et(){return this.__wrapped__}return o.after=xi,o.assign=be,o.at=Qr,o.bind=_t,o.bindAll=Ci,o.bindKey=Ei,o.chain=Bi,o.compact=ui,o.compose=Oi,o.constant=Pi,o.countBy=Jr,o.create=Dr,o.createCallback=zi,o.curry=Ri,o.debounce=wt,o.defaults=Ne,o.defer=Di,o.delay=Si,o.difference=ai,o.filter=_e,o.flatten=pi,o.forEach=un,o.forEachRight=we,o.forIn=Fn,o.forInRight=Tr,o.forOwn=B,o.forOwnRight=ot,o.functions=re,o.groupBy=Yr,o.indexBy=Zr,o.initial=hi,o.intersection=di,o.invert=ut,o.invoke=kr,o.keys=fn,o.map=fe,o.mapValues=Xr,o.max=pt,o.memoize=Fi,o.merge=$r,o.min=ni,o.omit=Hr,o.once=Ti,o.pairs=Wr,o.partial=ji,o.partialRight=Ii,o.pick=Br,o.pluck=Le,o.property=Ct,o.pull=mi,o.range=vi,o.reject=ei,o.remove=bi,o.rest=$e,o.shuffle=dt,o.sortBy=ii,o.tap=Gi,o.throttle=Mi,o.times=$i,o.toArray=fi,o.transform=Gr,o.union=yi,o.uniq=vt,o.values=ye,o.where=oi,o.without=_i,o.wrap=Ui,o.xor=wi,o.zip=bt,o.zipObject=yt,o.collect=fe,o.drop=$e,o.each=un,o.eachRight=we,o.extend=be,o.methods=re,o.object=yt,o.select=_e,o.tail=$e,o.unique=vt,o.unzip=bt,We(o),o.clone=Or,o.cloneDeep=Rr,o.contains=st,o.escape=Ni,o.every=lt,o.find=qe,o.findIndex=si,o.findKey=Sr,o.findLast=Vr,o.findLastIndex=li,o.findLastKey=Fr,o.has=jr,o.identity=He,o.indexOf=gt,o.isArguments=ve,o.isArray=Z,o.isBoolean=Ir,o.isDate=Mr,o.isElement=Ur,o.isEmpty=Pr,o.isEqual=zr,o.isFinite=Nr,o.isFunction=J,o.isNaN=Ar,o.isNull=qr,o.isNumber=at,o.isObject=on,o.isPlainObject=Ae,o.isRegExp=Lr,o.isString=ie,o.isUndefined=Kr,o.lastIndexOf=gi,o.mixin=We,o.noConflict=Ai,o.noop=xt,o.now=An,o.parseInt=qi,o.random=Li,o.reduce=Ke,o.reduceRight=ht,o.result=Ki,o.runInContext=Se,o.size=ri,o.some=ct,o.sortedIndex=mt,o.template=Xi,o.unescape=Hi,o.uniqueId=Wi,o.all=lt,o.any=ct,o.detect=qe,o.findWhere=qe,o.foldl=Ke,o.foldr=ht,o.include=st,o.inject=Ke,We((function(){var n={};return B(o,function(e,t){o.prototype[t]||(n[t]=e)}),n})(),!1),o.first=Xe,o.last=ci,o.sample=ti,o.take=Xe,o.head=Xe,B(o,function(n,e){var t=e!=="sample";o.prototype[e]||(o.prototype[e]=function(r,i){var f=this.__chain__,u=n(this.__wrapped__,r,i);return!f&&(r==null||i&&!(t&&typeof r=="function"))?u:new Nn(u,f)})}),o.VERSION="2.4.2",o.prototype.chain=Qi,o.prototype.toString=Ji,o.prototype.value=Et,o.prototype.valueOf=Et,un(["join","pop","shift"],function(n){var e=Xn[n];o.prototype[n]=function(){var t=this.__chain__,r=e.apply(this.__wrapped__,arguments);return t?new Nn(r,t):r}}),un(["push","reverse","sort","unshift"],function(n){var e=Xn[n];o.prototype[n]=function(){return e.apply(this.__wrapped__,arguments),this}}),un(["concat","slice","splice"],function(n){var e=Xn[n];o.prototype[n]=function(){return new Nn(e.apply(this.__wrapped__,arguments),this.__chain__)}}),o}var jn=Se();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(q._=jn,define(function(){return jn})):G&&vn?Qn?(vn.exports=jn)._=jn:G._=jn:q._=jn}).call(Bn)});var er=On(he=>{A();(function(l,v){if(typeof he=="object"&&he)v(he);else{var S={};v(S),typeof define=="function"&&define.amd?define(S):l.Mustache=S}})(he,function(l){var v=RegExp.prototype.test;function S(b,y){return v.call(b,y)}var D=/\S/;function R(b){return!S(D,b)}var M=Object.prototype.toString,U=Array.isArray||function(b){return M.call(b)==="[object Array]"};function P(b){return typeof b=="function"}function k(b){return b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var cn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function gn(b){return String(b).replace(/[&<>"'\/]/g,function(y){return cn[y]})}function wn(b){if(!U(b)||b.length!==2)throw new Error("Invalid tags: "+b);return[new RegExp(k(b[0])+"\\s*"),new RegExp("\\s*"+k(b[1]))]}var Rn=/\s*/,Y=/\s+/,nn=/\s*=/,Ln=/\s*\}/,Tn=/#|\^|\/|>|\{|&|=|!/;function Pn(b,y){y=y||l.tags,b=b||"",typeof y=="string"&&(y=y.split(Y));var x=wn(y),a=new h(b),p=[],m=[],g=[],N=!1,I=!1;function K(){if(N&&!I)for(;g.length;)delete m[g.pop()];else g=[];N=!1,I=!1}for(var mn,q,G,vn,Qn,en;!a.eos();){if(mn=a.pos,G=a.scanUntil(x[0]),G)for(var xn=0,Kn=G.length;xn<Kn;++xn)vn=G.charAt(xn),R(vn)?g.push(m.length):I=!0,m.push(["text",vn,mn,mn+1]),mn+=1,vn===`
`&&K();if(!a.scan(x[0]))break;if(N=!0,q=a.scan(Tn)||"name",a.scan(Rn),q==="="?(G=a.scanUntil(nn),a.scan(nn),a.scanUntil(x[1])):q==="{"?(G=a.scanUntil(new RegExp("\\s*"+k("}"+y[1]))),a.scan(Ln),a.scanUntil(x[1]),q="&"):G=a.scanUntil(x[1]),!a.scan(x[1]))throw new Error("Unclosed tag at "+a.pos);if(Qn=[q,G,mn,a.pos],m.push(Qn),q==="#"||q==="^")p.push(Qn);else if(q==="/"){if(en=p.pop(),!en)throw new Error('Unopened section "'+G+'" at '+mn);if(en[1]!==G)throw new Error('Unclosed section "'+en[1]+'" at '+mn)}else q==="name"||q==="{"||q==="&"?I=!0:q==="="&&(x=wn(y=G.split(Y)))}if(en=p.pop(),en)throw new Error('Unclosed section "'+en[1]+'" at '+a.pos);return zn(Gn(m))}function Gn(b){for(var y=[],x,a,p=0,m=b.length;p<m;++p)x=b[p],x&&(x[0]==="text"&&a&&a[0]==="text"?(a[1]+=x[1],a[3]=x[3]):(y.push(x),a=x));return y}function zn(b){for(var y=[],x=y,a=[],p,m,g=0,N=b.length;g<N;++g)switch(p=b[g],p[0]){case"#":case"^":x.push(p),a.push(p),x=p[4]=[];break;case"/":m=a.pop(),m[5]=p[2],x=a.length>0?a[a.length-1][4]:y;break;default:x.push(p)}return y}function h(b){this.string=b,this.tail=b,this.pos=0}h.prototype.eos=function(){return this.tail===""},h.prototype.scan=function(b){var y=this.tail.match(b);if(y&&y.index===0){var x=y[0];return this.tail=this.tail.substring(x.length),this.pos+=x.length,x}return""},h.prototype.scanUntil=function(b){var y=this.tail.search(b),x;switch(y){case-1:x=this.tail,this.tail="";break;case 0:x="";break;default:x=this.tail.substring(0,y),this.tail=this.tail.substring(y)}return this.pos+=x.length,x};function E(b,y){this.view=b??{},this.cache={".":this.view},this.parent=y}E.prototype.push=function(b){return new E(b,this)},E.prototype.lookup=function(b){var y;if(b in this.cache)y=this.cache[b];else{for(var x=this;x;){if(b.indexOf(".")>0){y=x.view;for(var a=b.split("."),p=0;y!=null&&p<a.length;)y=y[a[p++]]}else y=x.view[b];if(y!=null)break;x=x.parent}this.cache[b]=y}return P(y)&&(y=y.call(this.view)),y};function d(){this.cache={}}d.prototype.clearCache=function(){this.cache={}},d.prototype.parse=function(b,y){var x=this.cache,a=x[b];return a==null&&(a=x[b]=Pn(b,y)),a},d.prototype.render=function(b,y,x){var a=this.parse(b),p=y instanceof E?y:new E(y);return this.renderTokens(a,p,x,b)},d.prototype.renderTokens=function(b,y,x,a){var p="",m=this;function g(vn){return m.render(vn,y,x)}for(var N,I,K=0,mn=b.length;K<mn;++K)switch(N=b[K],N[0]){case"#":if(I=y.lookup(N[1]),!I)continue;if(U(I))for(var q=0,G=I.length;q<G;++q)p+=this.renderTokens(N[4],y.push(I[q]),x,a);else if(typeof I=="object"||typeof I=="string")p+=this.renderTokens(N[4],y.push(I),x,a);else if(P(I)){if(typeof a!="string")throw new Error("Cannot use higher-order sections without the original template");I=I.call(y.view,a.slice(N[3],N[5]),g),I!=null&&(p+=I)}else p+=this.renderTokens(N[4],y,x,a);break;case"^":I=y.lookup(N[1]),(!I||U(I)&&I.length===0)&&(p+=this.renderTokens(N[4],y,x,a));break;case">":if(!x)continue;I=P(x)?x(N[1]):x[N[1]],I!=null&&(p+=this.renderTokens(this.parse(I),y,x,I));break;case"&":I=y.lookup(N[1]),I!=null&&(p+=I);break;case"name":I=y.lookup(N[1]),I!=null&&(p+=l.escape(I));break;case"text":p+=N[1];break}return p},l.name="mustache.js",l.version="0.8.1",l.tags=["{{","}}"];var T=new d;l.clearCache=function(){return T.clearCache()},l.parse=function(b,y){return T.parse(b,y)},l.render=function(b,y,x){return T.render(b,y,x)},l.to_html=function(b,y,x,a){var p=l.render(b,y,x);if(P(a))a(p);else return p},l.escape=gn,l.Scanner=h,l.Context=E,l.Writer=d})});var rr=On((Pf,tr)=>{A();function pf(l,v){var S=new Date(l).getTime(),D=new Date(v).getTime(),R=(D-S)/1e3,M=Math.ceil(R/3600*24),U=Math.floor(R/(3600*24*30.5)),P=Math.floor(R/(3600*24*365.25));return P>0?P+" years":U+" months"}tr.exports.duration=pf});var or=On((Nf,fr)=>{A();var hf=(qt(),rf(At)),df=kt(),ir=nr(),cf=er(),Ve=rr();function gf(l){l.bio&&l.bio.email&&l.bio.email.personal&&(l.bio.gravatar=df.url(l.bio.email.personal,{s:"100",r:"pg",d:"mm"})),ir.each(l.work,function(D,R){D.endDate&&D.startDate?(console.log("work",D.endDate),l.work[R].duration=Ve.duration(D.startDate,D.endDate),l.work[R].startDate=D.startDate.substr(0,4)):(console.log("work",D.startDate.substr(0,4)),l.work[R].duration=Ve.duration(D.startDate,Date.now()),l.work[R].startDate=D.startDate.substr(0,4))}),ir.each(l.education,function(D,R){D.endDate&&D.startDate&&(l.education[R].duration=Ve.duration(D.startDate,D.endDate),l.education[R].startDate=D.startDate.substr(0,4),l.education[R].endDate=D.endDate.substr(0,4))});var v=hf.readFileSync("//resume.template","utf8"),S=cf.render(v,l);return S}fr.exports={render:gf}});A();var qn=tf(or(),1),ur=qn.default??qn,qf=ur.render??qn.render,Lf=ur.pdfRenderOptions??qn.pdfRenderOptions;export{Lf as pdfRenderOptions,qf as render};
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
