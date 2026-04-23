var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Gt=Object.create;var Ir=Object.defineProperty;var $t=Object.getOwnPropertyDescriptor;var Qt=Object.getOwnPropertyNames;var Xt=Object.getPrototypeOf,Zt=Object.prototype.hasOwnProperty;var Re=(u,b)=>()=>(u&&(b=u(u=0)),b);var kn=(u,b)=>()=>(b||u((b={exports:{}}).exports,b),b.exports),ns=(u,b)=>{for(var S in b)Ir(u,S,{get:b[S],enumerable:!0})},Me=(u,b,S,p)=>{if(b&&typeof b=="object"||typeof b=="function")for(let E of Qt(b))!Zt.call(u,E)&&E!==S&&Ir(u,E,{get:()=>b[E],enumerable:!(p=$t(b,E))||p.enumerable});return u};var rs=(u,b,S)=>(S=u!=null?Gt(Xt(u)):{},Me(b||!u||!u.__esModule?Ir(S,"default",{value:u,enumerable:!0}):S,u)),es=u=>Me(Ir({},"__esModule",{value:!0}),u);var U=Re(()=>{});var Ke={};ns(Ke,{createReadStream:()=>Oe,createWriteStream:()=>je,default:()=>is,existsSync:()=>Ne,lstatSync:()=>ze,mkdirSync:()=>Pe,readFileSync:()=>ke,readdirSync:()=>Ae,rmdirSync:()=>qe,statSync:()=>re,unlinkSync:()=>Ue,writeFileSync:()=>Be});function ne(u){return String(u).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Le(u){var b=ne(u);if(Rr[b]!==void 0)return Rr[b];for(var S=Object.keys(Rr),p=0;p<S.length;p++)if(b.endsWith("/"+S[p])||b===S[p])return Rr[S[p]]}function Zr(u){var b=ne(u);if((b===""||b===".")&&Qn["."]!==void 0)return Qn["."];if(Qn[b]!==void 0)return Qn[b];for(var S=Object.keys(Qn),p=0;p<S.length;p++)if(b.endsWith("/"+S[p])||b===S[p])return Qn[S[p]]}var Rr,Qn,ke,Ae,Ne,Be,Pe,re,ze,Ue,qe,Oe,je,is,Ve=Re(()=>{"use strict";U();Rr={"package.json":`{\r
  "name": "jsonresume-theme-kendall-fr",\r
  "version": "0.1.1",\r
  "description": "A French JSON Resume theme built with bootstrap. Original from Adam Kendall : https://github.com/linuxbozo/jsonresume-theme-kendall.git",\r
  "main": "index.js",\r
  "scripts": {\r
    "test": "echo \\"Error: no test specified\\" && exit 1"\r
  },\r
  "author": "M. Doitteau Lo\xEFc",\r
  "license": "MIT",\r
  "dependencies": {\r
    "gravatar": "^1.0.6",\r
    "lodash": "^2.4.1",\r
    "mustache": "^2.2.1"\r
  },\r
  "repository": {\r
    "type": "git",\r
    "url": "https://github.com/LoicDoitteau/jsonresume-theme-kendall-fr.git"\r
  },\r
  "keywords": [\r
    "json",\r
    "jsonresume",\r
    "theme"\r
  ],\r
  "bugs": {\r
    "url": "https://github.com/LoicDoitteau/jsonresume-theme-kendall-fr/issues"\r
  },\r
  "homepage": "https://github.com/LoicDoitteau/jsonresume-theme-kendall-fr"\r
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
\r
blockquote,\r
#education,\r
#awards,\r
.contact-item,\r
.publication,\r
.skills,\r
.interests {\r
  page-break-inside: avoid;\r
}\r
\r
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
#education {\r
  margin: 0;\r
  margin-bottom: -20px;\r
}\r
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
`,"public/index.html":`<!DOCTYPE html>\r
<html lang="en">\r
  <head>\r
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\r
    <meta charset="utf-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\r
    <meta name="viewport" content="width=device-width, initial-scale=1">\r
    <title>CV de Lo\xEFc DOITTEAU</title>\r
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">\r
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">\r
    <style type="text/css">\r
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800);\r
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
  margin-bottom: 0;\r
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
  width: 14%;\r
  background: #fff;\r
  padding: 10px;\r
  font-weight: 700;\r
  display: inline-block;\r
}\r
#awards .description,\r
#education .description{\r
  width: 83%;\r
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
  padding: 5px 0;\r
  font-weight: bold;\r
}\r
.job .job-details {\r
  padding-left: 5%;\r
  width: 100%;\r
}\r
.publication {\r
  margin-bottom: 0;\r
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
    </style>\r
    <style type="text/css" media="print">\r
    body {\r
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
\r
blockquote,\r
#education,\r
#awards,\r
.contact-item,\r
.publication,\r
.skills,\r
.interests {\r
  page-break-inside: avoid;\r
}\r
\r
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
#education {\r
  margin: 0;\r
  margin-bottom: -20px;\r
}\r
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
\r
    </style>\r
  </head>\r
  <body>\r
    <div class="container">\r
      <div class="row">\r
        <div class="col-xs-12">\r
          <div id="photo-header" class="text-center">\r
            <!-- PHOTO (AVATAR) -->\r
            <div id="photo">\r
              <img src="http:&#x2F;&#x2F;puu.sh&#x2F;FhQ4S&#x2F;3178c4ae7c.jpg" alt="avatar">\r
            </div>\r
            <div id="text-header" >\r
              <h1>Lo\xEFc DOITTEAU<br><span>Ing\xE9nieur logiciel</span></h1>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="row">\r
        <div class="col-xs-12 col-sm-7">\r
          <!-- ABOUT ME -->\r
          <div class="box">\r
            <h2><i class="fa fa-user ico"></i> A propos</h2>\r
            <p>Je suis de par nature quelqu'un de curieux, autonome et passionn\xE9 par le d\xE9veloppement logiciel. J'aime particuli\xE8rement r\xE9fl\xE9chir \xE0 des probl\xE8mes, chercher un moyen de les r\xE9soudre, puis mettre en \u0153uvre les solutions.</p>\r
          </div>\r
          <!-- WORK EXPERIENCE -->\r
          <div class="box">\r
            <h2><i class= "fa fa-suitcase ico"></i> Experience professionnelle</h2>\r
              <div class="job clearfix">\r
                <div class="row">\r
                  <div class="details">\r
                    <div class="where">Econocom</div>\r
                    <div class="address">\r
                      <a href="https:&#x2F;&#x2F;www.econocom.com&#x2F;fr" target= "_blank"><i class="fa fa-globe ico"></i> https:&#x2F;&#x2F;www.econocom.com&#x2F;fr</a>\r
                    </div>\r
                    <div class="year">F\xE9vrier 2020 \u2013 Maintenant</div>\r
                  </div>\r
                </div>\r
                <div class="row">\r
                  <div class="job-details col-xs-11">\r
                    <div class="profession">Ing\xE9nieur d\xE9veloppement logiciels</div>\r
                    <div class="description">\r
                      Client : Seiitra - Contexte : Refonte du progiciel Thetrawin permettant la gestion de biens immobiliers\r
                      <div class="highlights">Notes</div>\r
                      <ul class="list-group">\r
                        <li class="list-group-item">Environnement technique : NodeJS, Angular 8, Typescript, Jenkins</li>\r
                      </ul>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="job clearfix">\r
                <div class="row">\r
                  <div class="details">\r
                    <div class="where">Econocom</div>\r
                    <div class="address">\r
                      <a href="https:&#x2F;&#x2F;www.econocom.com&#x2F;fr" target= "_blank"><i class="fa fa-globe ico"></i> https:&#x2F;&#x2F;www.econocom.com&#x2F;fr</a>\r
                    </div>\r
                    <div class="year">Novembre 2018 \u2013 F\xE9vrier 2020</div>\r
                  </div>\r
                </div>\r
                <div class="row">\r
                  <div class="job-details col-xs-11">\r
                    <div class="profession">Ing\xE9nieur d\xE9veloppement logiciels</div>\r
                    <div class="description">\r
                      Client : EDF ENR - Contexte : Refonte du syst\xE8me applicatif permettant intervenant dans le processus de vente des panneaux solaires pour l\u2019activit\xE9 B2C\r
                      <div class="highlights">Notes</div>\r
                      <ul class="list-group">\r
                        <li class="list-group-item">Front office - Interface de la gestion commerciale</li>\r
                        <li class="list-group-item">Syst\xE8me de repr\xE9sentation 2D de l'installation des panneaux solaires</li>\r
                        <li class="list-group-item">Environnement technique : C#, WPF, MVC, NoSQL Couchbase, Kendo, OpenCV</li>\r
                        <li class="list-group-item">Back office - Interface d\u2019administration de la base de donn\xE9es</li>\r
                        <li class="list-group-item">Environnement technique : C#, .Net Core Web App, NoSQL Couchbase, Kendo</li>\r
                      </ul>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="job clearfix">\r
                <div class="row">\r
                  <div class="details">\r
                    <div class="where">Econocom</div>\r
                    <div class="address">\r
                      <a href="https:&#x2F;&#x2F;www.econocom.com&#x2F;fr" target= "_blank"><i class="fa fa-globe ico"></i> https:&#x2F;&#x2F;www.econocom.com&#x2F;fr</a>\r
                    </div>\r
                    <div class="year">Ao\xFBt 2016 \u2013 Novembre 2018</div>\r
                  </div>\r
                </div>\r
                <div class="row">\r
                  <div class="job-details col-xs-11">\r
                    <div class="profession">Ing\xE9nieur d\xE9veloppement logiciels</div>\r
                    <div class="description">\r
                      Client : Autorit\xE9 des March\xE9s Financiers - Contexte : TMA et \xE9volution de l\u2019application BIO/Geco pour le contr\xF4le des produits financiers\r
                      <div class="highlights">Notes</div>\r
                      <ul class="list-group">\r
                        <li class="list-group-item">Sites Intranet/Extranet, Batchs, Services Windows, Web Services</li>\r
                        <li class="list-group-item">VB .NET, ASP, SQLServer, Azure DevOps</li>\r
                      </ul>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="job clearfix">\r
                <div class="row">\r
                  <div class="details">\r
                    <div class="where">Econocom</div>\r
                    <div class="address">\r
                      <a href="https:&#x2F;&#x2F;www.econocom.com&#x2F;fr" target= "_blank"><i class="fa fa-globe ico"></i> https:&#x2F;&#x2F;www.econocom.com&#x2F;fr</a>\r
                    </div>\r
                    <div class="year">F\xE9vrier 2016 \u2013 Ao\xFBt 2016</div>\r
                  </div>\r
                </div>\r
                <div class="row">\r
                  <div class="job-details col-xs-11">\r
                    <div class="profession">Ing\xE9nieur logiciel stagiaire</div>\r
                    <div class="description">\r
                      Client : BNP Paribas - Contexte : D\xE9veloppement d\u2019application pour le contr\xF4le des flux des places de march\xE9\r
                      <div class="highlights">Notes</div>\r
                      <ul class="list-group">\r
                        <li class="list-group-item">Environnement technique : ASP.NET MVC5, SQLServer</li>\r
                      </ul>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="job clearfix">\r
                <div class="row">\r
                  <div class="details">\r
                    <div class="where">CESI Recherche</div>\r
                    <div class="address">\r
                      <a href="https:&#x2F;&#x2F;recherche.cesi.fr&#x2F;" target= "_blank"><i class="fa fa-globe ico"></i> https:&#x2F;&#x2F;recherche.cesi.fr&#x2F;</a>\r
                    </div>\r
                    <div class="year">Septembre 2014 \u2013 F\xE9vrier 2015</div>\r
                  </div>\r
                </div>\r
                <div class="row">\r
                  <div class="job-details col-xs-11">\r
                    <div class="profession">Stagiaire d\xE9veloppeur d&#39;applications</div>\r
                    <div class="description">\r
                      D\xE9veloppement d\u2019un jeu s\xE9rieux pour l\u2019apprentissage de la maintenance d\u2019un parc \xE9olien offshore dans le cadre du projet Mer-Innovate\r
                      <div class="highlights">Notes</div>\r
                      <ul class="list-group">\r
                        <li class="list-group-item">Environnement technique : Unity3D</li>\r
                        <li class="list-group-item">Publication scientifique</li>\r
                      </ul>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="job clearfix">\r
                <div class="row">\r
                  <div class="details">\r
                    <div class="where">Sokrate</div>\r
                    <div class="year">Janvier 2014 \u2013 Mars 2014</div>\r
                  </div>\r
                </div>\r
                <div class="row">\r
                  <div class="job-details col-xs-11">\r
                    <div class="profession">Stagiaire d\xE9veloppeur d&#39;applications</div>\r
                    <div class="description">\r
                      Cr\xE9ation d\u2019applications Windows 8.1 en 3D (visites virtuelles, catalogue de produits virtuel, home designer) utilisant la technologie WebGL, et le moteur 3D BabylonJS.\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
          </div>\r
        </div>\r
        <div class="col-xs-12 col-sm-5">\r
          <!-- CONTACT -->\r
          <div class="box clearfix">\r
            <h2><i class="fa fa-bullseye ico"></i> Contact</h2>\r
            <div class="contact-item">\r
              <div class="icon pull-left text-center"><span class="fa fa-map-marker fa-fw"></span></div>\r
              <div class="title pull-right">36 All\xE9e Jean-Paul II</div>\r
              <div class="title  pull-right">Sainte-Foy-les-Lyons 69 110 FR</div>\r
            </div>\r
            <div class="contact-item">\r
              <div class="icon pull-left text-center"><span class="fa fa-phone fa-fw"></span></div>\r
              <div class="title only pull-right">+33 6 26 01 61 34</div>\r
            </div>\r
            <div class="contact-item">\r
              <div class="icon pull-left text-center"><span class="fa fa-envelope fa-fw"></span></div>\r
              <div class="title only pull-right"><a href="mailto:loic.doitteau@gmail.com" target="_blank">loic.doitteau@gmail.com</a></div>\r
            </div>\r
            <div class="contact-item">\r
              <div class="icon pull-left text-center"><span class="fa fa-globe fa-fw"></span></div>\r
              <div class="title only pull-right"><a href="https:&#x2F;&#x2F;loicdoitteau.github.io&#x2F;JS-Projects&#x2F;" target="_blank">https:&#x2F;&#x2F;loicdoitteau.github.io&#x2F;JS-Projects&#x2F;</a></div>\r
            </div>\r
            <div class="contact-item">\r
              <div class="icon pull-left text-center"><span class="fa fa-twitter fa-fw"></span></div>\r
              <div class="title pull-right">Twitter</div>\r
              <div class="description pull-right"><a href="http:&#x2F;&#x2F;twitter.com&#x2F;LoicDoitteau" target="_blank">LoicDoitteau</a></div>\r
            </div>\r
            <div class="contact-item">\r
              <div class="icon pull-left text-center"><span class="fa fa-github fa-fw"></span></div>\r
              <div class="title pull-right">Github</div>\r
              <div class="description pull-right"><a href="https:&#x2F;&#x2F;github.com&#x2F;LoicDoitteau" target="_blank">LoicDoitteau</a></div>\r
            </div>\r
            <div class="contact-item">\r
              <div class="icon pull-left text-center"><span class="fa fa-linkedin fa-fw"></span></div>\r
              <div class="title pull-right">Linkedin</div>\r
              <div class="description pull-right"><a href="https:&#x2F;&#x2F;www.linkedin.com&#x2F;in&#x2F;lo%C3%AFc-doitteau-3096a7bb&#x2F;" target="_blank">Lo\xEFc-doitteau</a></div>\r
            </div>\r
          </div>\r
          <!-- EDUCATION -->\r
          <div class="box">\r
            <h2><i class="fa fa-university ico"></i> Education</h2>\r
            <ul id="education" class="clearfix">\r
              <li>\r
                <div class="year pull-left">2013 2016</div>\r
                <div class="description pull-right">\r
                  <h3>CESI \xC9code d&#39;ing\xE9nieurs</h3>\r
                  <p><i class= "fa fa-graduation-cap ico"></i> Ing\xE9ni\xE9rie logielle</p>\r
                  <p>Exia - Manager des syst\xE8mes d&#39;information</p>\r
                </div>\r
              </li>\r
              <li>\r
                <div class="year pull-left">2011 2012</div>\r
                <div class="description pull-right">\r
                  <h3>EPITA Ing\xE9ni\xE9rie Informatique</h3>\r
                  <p><i class= "fa fa-graduation-cap ico"></i> Ing\xE9ni\xE9rie logielle</p>\r
                  <p>Ann\xE9e de pr\xE9paration int\xE9gr\xE9e</p>\r
                </div>\r
              </li>\r
              <li>\r
                <div class="year pull-left">2009 2011</div>\r
                <div class="description pull-right">\r
                  <h3>Lyc\xE9e Louis Modeste Leroy</h3>\r
                  <p><i class= "fa fa-graduation-cap ico"></i> Informatique et r\xE9seaux pour l&#39;industrie et les services techniques</p>\r
                  <p>BTS IRIS</p>\r
                </div>\r
              </li>\r
              <li>\r
                <div class="year pull-left">2008 2009</div>\r
                <div class="description pull-right">\r
                  <h3>Lyc\xE9e L\xE9opold S\xE9dar Senghor</h3>\r
                  <p><i class= "fa fa-graduation-cap ico"></i> Scientifique, Mention assez-bien</p>\r
                  <p>Baccalaur\xE9at</p>\r
                </div>\r
              </li>\r
            </ul>\r
          </div>\r
          <!-- SKILLS -->\r
          <div class="box">\r
            <h2><i class="fa fa-tasks ico"></i> Competences</h2>\r
            <div class="skills clearfix">\r
              <div class="item-skills">\r
                  Langages\r
                  <span class="skill-level">Maitrise</span>\r
              </div>\r
              <div class="col-sm-offset-1 col-sm-12 clearfix">\r
                <span class= "skill badge">.Net C# & VB</span>\r
                <span class= "skill badge">HTML</span>\r
                <span class= "skill badge">Javascript</span>\r
                <span class= "skill badge">Typescript</span>\r
                <span class= "skill badge">C</span>\r
              </div>\r
            </div>\r
            <div class="skills clearfix">\r
              <div class="item-skills">\r
                  Bases de donn\xE9es\r
                  <span class="skill-level">Maitrise</span>\r
              </div>\r
              <div class="col-sm-offset-1 col-sm-12 clearfix">\r
                <span class= "skill badge">Microsoft SQL Server</span>\r
                <span class= "skill badge">MySQL</span>\r
                <span class= "skill badge">Couchbase</span>\r
              </div>\r
            </div>\r
            <div class="skills clearfix">\r
              <div class="item-skills">\r
                  Outils collaboratifs\r
                  <span class="skill-level">Maitrise</span>\r
              </div>\r
              <div class="col-sm-offset-1 col-sm-12 clearfix">\r
                <span class= "skill badge">Git</span>\r
                <span class= "skill badge">Azure DevOps</span>\r
                <span class= "skill badge">Github</span>\r
                <span class= "skill badge">BitBucket</span>\r
              </div>\r
            </div>\r
            <div class="skills clearfix">\r
              <div class="item-skills">\r
                  Technologies\r
                  <span class="skill-level">Maitrise</span>\r
              </div>\r
              <div class="col-sm-offset-1 col-sm-12 clearfix">\r
                <span class= "skill badge">.Net Core</span>\r
                <span class= "skill badge">WPF</span>\r
                <span class= "skill badge">ASP</span>\r
                <span class= "skill badge">Linq</span>\r
                <span class= "skill badge">Telerik Kendo</span>\r
                <span class= "skill badge">SQL</span>\r
                <span class= "skill badge">Angular 8</span>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- PUBLICATIONS -->\r
          <div class="box">\r
            <h2><i class="fa fa-book ico"></i> Publications</h2>\r
            <div class="publication panel panel-default">\r
              <div class="panel-heading">\r
                <div class="name panel-title">Mer Innovate</div>\r
              </div>\r
              <div class="panel-body">\r
                <div class="publisher"><i class= "fa fa-bookmark ico"></i> CESI Recherche</div>\r
                <div class="year">01 Juillet  2015</div>\r
                <div class="address">\r
                  <a href="https:&#x2F;&#x2F;tinyurl.com&#x2F;t686kxp" target= "_blank"><i class="fa fa-globe ico"></i> https:&#x2F;&#x2F;tinyurl.com&#x2F;t686kxp</a>\r
                </div>\r
                <p>Jeu serieux pour l\u2019apprentissage de la maintenance d\u2019un parc \xE9olien offshore bas\xE9 sur les systemes multi-agents</p>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- LANGUAGES -->\r
          <div class="box">\r
            <h2><i class="fa fa-language ico"></i> Langages</h2>\r
            <ul class="list-group">\r
              <li class=" list-group-item">Fran\xE7ais<span class="skill badge pull-right"></span></li>\r
              <li class=" list-group-item">Anglais<span class="skill badge pull-right">TOEIC 840</span></li>\r
            </ul>\r
          </div>\r
          <!-- HOBBIES -->\r
          <div class="box">\r
            <h2><i class="fa fa-heart ico"></i> Interets</h2>\r
            <div class="interests clearfix">\r
              <div class="item-interests">\r
                  Animaux\r
              </div>\r
              <div class="col-sm-offset-1 col-sm-12 clearfix">\r
              </div>\r
            </div>\r
            <div class="interests clearfix">\r
              <div class="item-interests">\r
                  Lecture\r
              </div>\r
              <div class="col-sm-offset-1 col-sm-12 clearfix">\r
              </div>\r
            </div>\r
            <div class="interests clearfix">\r
              <div class="item-interests">\r
                  Jeux-Vid\xE9os\r
              </div>\r
              <div class="col-sm-offset-1 col-sm-12 clearfix">\r
              </div>\r
            </div>\r
            <div class="interests clearfix">\r
              <div class="item-interests">\r
                  Creative Coding\r
              </div>\r
              <div class="col-sm-offset-1 col-sm-12 clearfix">\r
              </div>\r
            </div>\r
            <div class="interests clearfix">\r
              <div class="item-interests">\r
                  Algorithmie\r
              </div>\r
              <div class="col-sm-offset-1 col-sm-12 clearfix">\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </body>\r
</html>\r
`,"resume.template":`<!DOCTYPE html>\r
<html lang="en">\r
  <head>\r
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\r
    <meta charset="utf-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\r
    <meta name="viewport" content="width=device-width, initial-scale=1">\r
    <title>CV de {{basics.name}}</title>\r
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">\r
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">\r
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
            <h2><i class="fa fa-user ico"></i> A propos</h2>\r
            <p>{{{basics.summary}}}</p>\r
          </div>\r
          {{/basics.summary}}\r
          {{#workBool}}\r
          <!-- WORK EXPERIENCE -->\r
          <div class="box">\r
            <h2><i class= "fa fa-suitcase ico"></i> Experience professionnelle</h2>\r
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
                  <div class="job-details col-xs-11">\r
                    <div class="profession">{{position}}</div>\r
                    <div class="description">\r
                      {{{summary}}}\r
                      {{#boolHighlights}}\r
                      <div class="highlights">Notes</div>\r
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
            <h2><i class="fa fa-certificate ico"></i> R\xE9compenses</h2>\r
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
            <h2><i class= "fa fa-group ico"></i> Volontariat</h2>\r
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
              {{#basics.location.address}}<div class="title pull-right">{{basics.location.address}}</div>{{/basics.location.address}}\r
              <div class="title {{^basics.location.address}}only {{/basics.location.address}} pull-right">{{basics.location.city}}{{#basics.location.region}}, {{basics.location.region}}{{/basics.location.region}}{{#basics.location.postalCode}} {{basics.location.postalCode}}{{/basics.location.postalCode}}{{#basics.location.countryCode}} {{basics.location.countryCode}}{{/basics.location.countryCode}}</div>\r
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
          {{#skillsBool}}\r
          <!-- SKILLS -->\r
          <div class="box">\r
            <h2><i class="fa fa-tasks ico"></i> Competences</h2>\r
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
            <h2><i class="fa fa-language ico"></i> Langages</h2>\r
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
            <h2><i class="fa fa-heart ico"></i> Interets</h2>\r
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
\r
  </body>\r
</html>\r
`,"style.css":`@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800);\r
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
  margin-bottom: 0;\r
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
  width: 14%;\r
  background: #fff;\r
  padding: 10px;\r
  font-weight: 700;\r
  display: inline-block;\r
}\r
#awards .description,\r
#education .description{\r
  width: 83%;\r
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
  padding: 5px 0;\r
  font-weight: bold;\r
}\r
.job .job-details {\r
  padding-left: 5%;\r
  width: 100%;\r
}\r
.publication {\r
  margin-bottom: 0;\r
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
`},Qn={public:["index.html"],".":["LICENSE","README.md","index.js","package.json","print.css","public","resume.template","style.css"]};ke=function(u,b){var S=Le(u);return S!==void 0?S:""},Ae=function(u,b){var S=Zr(u);return S===void 0&&(S=[]),b&&b.withFileTypes?S.map(function(p){var E=ne(u)+"/"+p,A=Zr(E)!==void 0;return{name:p,isFile:function(){return!A},isDirectory:function(){return A}}}):S},Ne=function(u){return Le(u)!==void 0||Zr(u)!==void 0},Be=function(){},Pe=function(){},re=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},ze=re,Ue=function(){},qe=function(){},Oe=function(){return{pipe:function(u){return u},on:function(){return this}}},je=function(){return{write:function(){},end:function(){},on:function(){return this}}},is={readFileSync:ke,readdirSync:Ae,existsSync:Ne,writeFileSync:Be,mkdirSync:Pe,statSync:re,lstatSync:ze,unlinkSync:Ue,rmdirSync:qe,createReadStream:Oe,createWriteStream:je}});var He=kn((Xn,gr)=>{U();(function(){var u,b=[],S=[],p=0,E=+new Date+"",A=75,B=40,P=` 	\v\f\xA0\uFEFF
\r\u2028\u2029\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000`,vn=/\b__p \+= '';/g,bn=/\b(__p \+=) '' \+/g,wn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Sn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,En=/\w*$/,en=/^\s*function[ \n\r\t]+\w/,un=/<%=([\s\S]+?)%>/g,Hn=RegExp("^["+P+"]*0+(?=.$)"),Dn=/($^)/,Un=/\bthis\b/,rr=/['\n\r\t\u2028\u2029\\]/g,qn=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],v=0,F="[object Arguments]",g="[object Array]",I="[object Boolean]",R="[object Date]",z="[object Function]",_="[object Number]",l="[object Object]",f="[object RegExp]",o="[object String]",c={};c[z]=!1,c[F]=c[g]=c[I]=c[R]=c[_]=c[l]=c[f]=c[o]=!0;var L={leading:!1,maxWait:0,trailing:!1},k={configurable:!1,enumerable:!1,value:null,writable:!1},T={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1},$={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},K=T[typeof window]&&window||this,yn=T[typeof Xn]&&Xn&&!Xn.nodeType&&Xn,Tn=T[typeof gr]&&gr&&!gr.nodeType&&gr,Y=Tn&&Tn.exports===yn&&yn,tn=T[typeof globalThis]&&globalThis;tn&&(tn.global===tn||tn.window===tn)&&(K=tn);function J(x,M,N){for(var q=(N||0)-1,j=x?x.length:0;++q<j;)if(x[q]===M)return q;return-1}function nn(x,M){var N=typeof M;if(x=x.cache,N=="boolean"||M==null)return x[M]?0:-1;N!="number"&&N!="string"&&(N="object");var q=N=="number"?M:E+M;return x=(x=x[N])&&x[q],N=="object"?x&&J(x,M)>-1?0:-1:x?0:-1}function Wn(x){var M=this.cache,N=typeof x;if(N=="boolean"||x==null)M[x]=!0;else{N!="number"&&N!="string"&&(N="object");var q=N=="number"?x:E+x,j=M[N]||(M[N]={});N=="object"?(j[q]||(j[q]=[])).push(x):j[q]=!0}}function Yn(x){return x.charCodeAt(0)}function In(x,M){for(var N=x.criteria,q=M.criteria,j=-1,cn=N.length;++j<cn;){var gn=N[j],Q=q[j];if(gn!==Q){if(gn>Q||typeof gn>"u")return 1;if(gn<Q||typeof Q>"u")return-1}}return x.index-M.index}function On(x){var M=-1,N=x.length,q=x[0],j=x[N/2|0],cn=x[N-1];if(q&&typeof q=="object"&&j&&typeof j=="object"&&cn&&typeof cn=="object")return!1;var gn=kr();gn.false=gn.null=gn.true=gn.undefined=!1;var Q=kr();for(Q.array=x,Q.cache=gn,Q.push=Wn;++M<N;)Q.push(x[M]);return Q}function Lr(x){return"\\"+$[x]}function V(){return b.pop()||[]}function kr(){return S.pop()||{array:null,cache:null,criteria:null,false:!1,index:0,null:!1,number:null,object:null,push:null,string:null,true:!1,undefined:!1,value:null}}function xn(x){x.length=0,b.length<B&&b.push(x)}function er(x){var M=x.cache;M&&er(M),x.array=x.cache=x.criteria=x.object=x.number=x.string=x.value=null,S.length<B&&S.push(x)}function O(x,M,N){M||(M=0),typeof N>"u"&&(N=x?x.length:0);for(var q=-1,j=N-M||0,cn=Array(j<0?0:j);++q<j;)cn[q]=x[M+q];return cn}function Ar(x){x=x?An.defaults(K.Object(),x,An.pick(K,qn)):K;var M=x.Array,N=x.Boolean,q=x.Date,j=x.Function,cn=x.Math,gn=x.Number,Q=x.Object,ir=x.RegExp,Nn=x.String,Rn=x.TypeError,Jn=[],ie=Q.prototype,di=x._,sn=ie.toString,ui=ir("^"+Nn(sn).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),ci=cn.ceil,wr=x.clearTimeout,pi=cn.floor,hi=j.prototype.toString,Gn=Pn(Gn=Q.getPrototypeOf)&&Gn,an=ie.hasOwnProperty,tr=Jn.push,sr=x.setTimeout,te=Jn.splice,vi=Jn.unshift,se=(function(){try{var n={},r=Pn(r=Q.defineProperty)&&r,e=r(n,n,n)&&r}catch{}return e})(),yr=Pn(yr=Q.create)&&yr,Nr=Pn(Nr=M.isArray)&&Nr,gi=x.isFinite,mi=x.isNaN,xr=Pn(xr=Q.keys)&&xr,_n=cn.max,ar=cn.min,Br=x.parseInt,ae=cn.random,Mn={};Mn[g]=M,Mn[I]=N,Mn[R]=q,Mn[z]=j,Mn[l]=Q,Mn[_]=gn,Mn[f]=ir,Mn[o]=Nn;function a(n){return n&&typeof n=="object"&&!rn(n)&&an.call(n,"__wrapped__")?n:new jn(n)}function jn(n,r){this.__chain__=!!r,this.__wrapped__=n}jn.prototype=a.prototype;var or=a.support={};or.funcDecomp=!Pn(x.WinRTError)&&Un.test(Ar),or.funcNames=typeof j.name=="string",a.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:un,variable:"",imports:{_:a}};function bi(n){var r=n[0],e=n[2],i=n[4];function t(){if(e){var s=O(e);tr.apply(s,arguments)}if(this instanceof t){var d=lr(r.prototype),h=r.apply(d,s||arguments);return ln(h)?h:d}return r.apply(i,s||arguments)}return Or(t,n),t}function Pr(n,r,e,i,t){if(e){var s=e(n);if(typeof s<"u")return s}var d=ln(n);if(d){var h=sn.call(n);if(!c[h])return n;var m=Mn[h];switch(h){case I:case R:return new m(+n);case _:case o:return new m(n);case f:return s=m(n.source,En.exec(n)),s.lastIndex=n.lastIndex,s}}else return n;var y=rn(n);if(r){var w=!i;i||(i=V()),t||(t=V());for(var D=i.length;D--;)if(i[D]==n)return t[D];s=y?m(n.length):{}}else s=y?O(n):Fr({},n);return y&&(an.call(n,"index")&&(s.index=n.index),an.call(n,"input")&&(s.input=n.input)),r&&(i.push(n),t.push(s),(y?fn:G)(n,function(C,H){s[H]=Pr(C,r,e,i,t)}),w&&(xn(i),xn(t))),s}function lr(n,r){return ln(n)?yr(n):{}}yr||(lr=(function(){function n(){}return function(r){if(ln(r)){n.prototype=r;var e=new n;n.prototype=null}return e||x.Object()}})());function pn(n,r,e){if(typeof n!="function")return $r;if(typeof r>"u"||!("prototype"in n))return n;var i=n.__bindData__;if(typeof i>"u"&&(or.funcNames&&(i=!n.name),i=i||!or.funcDecomp,!i)){var t=hi.call(n);or.funcNames||(i=!en.test(t)),i||(i=Un.test(t),Or(n,i))}if(i===!1||i!==!0&&i[1]&1)return n;switch(e){case 1:return function(s){return n.call(r,s)};case 2:return function(s,d){return n.call(r,s,d)};case 3:return function(s,d,h){return n.call(r,s,d,h)};case 4:return function(s,d,h,m){return n.call(r,s,d,h,m)}}return Se(n,r)}function oe(n){var r=n[0],e=n[1],i=n[2],t=n[3],s=n[4],d=n[5],h=e&1,m=e&2,y=e&4,w=e&8,D=r;function C(){var H=h?s:this;if(i){var W=O(i);tr.apply(W,arguments)}if((t||y)&&(W||(W=O(arguments)),t&&tr.apply(W,t),y&&W.length<d))return e|=16,oe([r,w?e:e&-4,W,null,s,d]);if(W||(W=arguments),m&&(r=H[D]),this instanceof C){H=lr(r.prototype);var hn=r.apply(H,W);return ln(hn)?hn:H}return r.apply(H,W)}return Or(C,n),C}function fr(n,r){var e=-1,i=_r(),t=n?n.length:0,s=t>=A&&i===J,d=[];if(s){var h=On(r);h?(i=nn,r=h):s=!1}for(;++e<t;){var m=n[e];i(r,m)<0&&d.push(m)}return s&&er(r),d}function Bn(n,r,e,i){for(var t=(i||0)-1,s=n?n.length:0,d=[];++t<s;){var h=n[t];if(h&&typeof h=="object"&&typeof h.length=="number"&&(rn(h)||Cr(h))){r||(h=Bn(h,r,e));var m=-1,y=h.length,w=d.length;for(d.length+=y;++m<y;)d[w++]=h[m]}else e||d.push(h)}return d}function $n(n,r,e,i,t,s){if(e){var d=e(n,r);if(typeof d<"u")return!!d}if(n===r)return n!==0||1/n==1/r;var h=typeof n,m=typeof r;if(n===n&&!(n&&T[h])&&!(r&&T[m]))return!1;if(n==null||r==null)return n===r;var y=sn.call(n),w=sn.call(r);if(y==F&&(y=l),w==F&&(w=l),y!=w)return!1;switch(y){case I:case R:return+n==+r;case _:return n!=+n?r!=+r:n==0?1/n==1/r:n==+r;case f:case o:return n==Nn(r)}var D=y==g;if(!D){var C=an.call(n,"__wrapped__"),H=an.call(r,"__wrapped__");if(C||H)return $n(C?n.__wrapped__:n,H?r.__wrapped__:r,e,i,t,s);if(y!=l)return!1;var W=n.constructor,hn=r.constructor;if(W!=hn&&!(X(W)&&W instanceof W&&X(hn)&&hn instanceof hn)&&"constructor"in n&&"constructor"in r)return!1}var mn=!t;t||(t=V()),s||(s=V());for(var dn=t.length;dn--;)if(t[dn]==n)return s[dn]==r;var Z=0;if(d=!0,t.push(n),s.push(r),D){if(dn=n.length,Z=r.length,d=Z==dn,d||i)for(;Z--;){var Tr=dn,pr=r[Z];if(i)for(;Tr--&&!(d=$n(n[Tr],pr,e,i,t,s)););else if(!(d=$n(n[Z],pr,e,i,t,s)))break}}else Ln(r,function(hr,vr,Xr){if(an.call(Xr,vr))return Z++,d=an.call(n,vr)&&$n(n[vr],hr,e,i,t,s)}),d&&!i&&Ln(n,function(hr,vr,Xr){if(an.call(Xr,vr))return d=--Z>-1});return t.pop(),s.pop(),mn&&(xn(t),xn(s)),d}function le(n,r,e,i,t){(rn(r)?fn:G)(r,function(s,d){var h,m,y=s,w=n[d];if(s&&((m=rn(s))||Vr(s))){for(var D=i.length;D--;)if(h=i[D]==s){w=t[D];break}if(!h){var C;e&&(y=e(w,s),(C=typeof y<"u")&&(w=y)),C||(w=m?rn(w)?w:[]:Vr(w)?w:{}),i.push(s),t.push(w),C||le(w,s,e,i,t)}}else e&&(y=e(w,s),typeof y>"u"&&(y=s)),typeof y<"u"&&(w=y);n[d]=w})}function zr(n,r){return n+pi(ae()*(r-n+1))}function Ur(n,r,e){var i=-1,t=_r(),s=n?n.length:0,d=[],h=!r&&s>=A&&t===J,m=e||h?V():d;if(h){var y=On(m);t=nn,m=y}for(;++i<s;){var w=n[i],D=e?e(w,i,n):w;(r?!i||m[m.length-1]!==D:t(m,D)<0)&&((e||h)&&m.push(D),d.push(w))}return h?(xn(m.array),er(m)):e&&xn(m),d}function qr(n){return function(r,e,i){var t={};e=a.createCallback(e,i,3);var s=-1,d=r?r.length:0;if(typeof d=="number")for(;++s<d;){var h=r[s];n(t,h,e(h,s,r),r)}else G(r,function(m,y,w){n(t,m,e(m,y,w),w)});return t}}function Cn(n,r,e,i,t,s){var d=r&1,h=r&2,m=r&4,y=r&8,w=r&16,D=r&32;if(!h&&!X(n))throw new Rn;w&&!e.length&&(r&=-17,w=e=!1),D&&!i.length&&(r&=-33,D=i=!1);var C=n&&n.__bindData__;if(C&&C!==!0)return C=O(C),C[2]&&(C[2]=O(C[2])),C[3]&&(C[3]=O(C[3])),d&&!(C[1]&1)&&(C[4]=t),!d&&C[1]&1&&(r|=8),m&&!(C[1]&4)&&(C[5]=s),w&&tr.apply(C[2]||(C[2]=[]),e),D&&vi.apply(C[3]||(C[3]=[]),i),C[1]|=r,Cn.apply(null,C);var H=r==1||r===17?bi:oe;return H([n,r,e,i,t,s])}function wi(n){return jr[n]}function _r(){var n=(n=a.indexOf)===ye?J:n;return n}function Pn(n){return typeof n=="function"&&ui.test(n)}var Or=se?function(n,r){k.value=r,se(n,"__bindData__",k),k.value=null}:De;function fe(n){var r,e;return!(n&&sn.call(n)==l)||(r=n.constructor,X(r)&&!(r instanceof r))?!1:(Ln(n,function(i,t){e=t}),typeof e>"u"||an.call(n,e))}function yi(n){return de[n]}function Cr(n){return n&&typeof n=="object"&&typeof n.length=="number"&&sn.call(n)==F||!1}var rn=Nr||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&sn.call(n)==g||!1},xi=function(n){var r,e=n,i=[];if(!e||!T[typeof n])return i;for(r in e)an.call(e,r)&&i.push(r);return i},on=xr?function(n){return ln(n)?xr(n):[]}:xi,jr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},de=ce(jr),_i=ir("("+on(de).join("|")+")","g"),Ci=ir("["+on(jr).join("")+"]","g"),Fr=function(n,r,e){var i,t=n,s=t;if(!t)return s;var d=arguments,h=0,m=typeof e=="number"?2:d.length;if(m>3&&typeof d[m-2]=="function")var y=pn(d[--m-1],d[m--],2);else m>2&&typeof d[m-1]=="function"&&(y=d[--m]);for(;++h<m;)if(t=d[h],t&&T[typeof t])for(var w=-1,D=T[typeof t]&&on(t),C=D?D.length:0;++w<C;)i=D[w],s[i]=y?y(s[i],t[i]):t[i];return s};function Fi(n,r,e,i){return typeof r!="boolean"&&r!=null&&(i=e,e=r,r=!1),Pr(n,r,typeof e=="function"&&pn(e,i,1))}function Si(n,r,e){return Pr(n,!0,typeof r=="function"&&pn(r,e,1))}function Ei(n,r){var e=lr(n);return r?Fr(e,r):e}var Kr=function(n,r,e){var i,t=n,s=t;if(!t)return s;for(var d=arguments,h=0,m=typeof e=="number"?2:d.length;++h<m;)if(t=d[h],t&&T[typeof t])for(var y=-1,w=T[typeof t]&&on(t),D=w?w.length:0;++y<D;)i=w[y],typeof s[i]>"u"&&(s[i]=t[i]);return s};function Di(n,r,e){var i;return r=a.createCallback(r,e,3),G(n,function(t,s,d){if(r(t,s,d))return i=s,!1}),i}function Ti(n,r,e){var i;return r=a.createCallback(r,e,3),ue(n,function(t,s,d){if(r(t,s,d))return i=s,!1}),i}var Ln=function(n,r,e){var i,t=n,s=t;if(!t||!T[typeof t])return s;r=r&&typeof e>"u"?r:pn(r,e,3);for(i in t)if(r(t[i],i,n)===!1)return s;return s};function Ii(n,r,e){var i=[];Ln(n,function(s,d){i.push(d,s)});var t=i.length;for(r=pn(r,e,3);t--&&r(i[t--],i[t],n)!==!1;);return n}var G=function(n,r,e){var i,t=n,s=t;if(!t||!T[typeof t])return s;r=r&&typeof e>"u"?r:pn(r,e,3);for(var d=-1,h=T[typeof t]&&on(t),m=h?h.length:0;++d<m;)if(i=h[d],r(t[i],i,n)===!1)return s;return s};function ue(n,r,e){var i=on(n),t=i.length;for(r=pn(r,e,3);t--;){var s=i[t];if(r(n[s],s,n)===!1)break}return n}function dr(n){var r=[];return Ln(n,function(e,i){X(e)&&r.push(i)}),r.sort()}function Ri(n,r){return n?an.call(n,r):!1}function ce(n){for(var r=-1,e=on(n),i=e.length,t={};++r<i;){var s=e[r];t[n[s]]=s}return t}function Mi(n){return n===!0||n===!1||n&&typeof n=="object"&&sn.call(n)==I||!1}function Li(n){return n&&typeof n=="object"&&sn.call(n)==R||!1}function ki(n){return n&&n.nodeType===1||!1}function Ai(n){var r=!0;if(!n)return r;var e=sn.call(n),i=n.length;return e==g||e==o||e==F||e==l&&typeof i=="number"&&X(n.splice)?!i:(G(n,function(){return r=!1}),r)}function Ni(n,r,e,i){return $n(n,r,typeof e=="function"&&pn(e,i,2))}function Bi(n){return gi(n)&&!mi(parseFloat(n))}function X(n){return typeof n=="function"}function ln(n){return!!(n&&T[typeof n])}function Pi(n){return pe(n)&&n!=+n}function zi(n){return n===null}function pe(n){return typeof n=="number"||n&&typeof n=="object"&&sn.call(n)==_||!1}var Vr=Gn?function(n){if(!(n&&sn.call(n)==l))return!1;var r=n.valueOf,e=Pn(r)&&(e=Gn(r))&&Gn(e);return e?n==e||Gn(n)==e:fe(n)}:fe;function Ui(n){return n&&typeof n=="object"&&sn.call(n)==f||!1}function ur(n){return typeof n=="string"||n&&typeof n=="object"&&sn.call(n)==o||!1}function qi(n){return typeof n>"u"}function Oi(n,r,e){var i={};return r=a.createCallback(r,e,3),G(n,function(t,s,d){i[s]=r(t,s,d)}),i}function ji(n){var r=arguments,e=2;if(!ln(n))return n;if(typeof r[2]!="number"&&(e=r.length),e>3&&typeof r[e-2]=="function")var i=pn(r[--e-1],r[e--],2);else e>2&&typeof r[e-1]=="function"&&(i=r[--e]);for(var t=O(arguments,1,e),s=-1,d=V(),h=V();++s<e;)le(n,t[s],i,d,h);return xn(d),xn(h),n}function Ki(n,r,e){var i={};if(typeof r!="function"){var t=[];Ln(n,function(m,y){t.push(y)}),t=fr(t,Bn(arguments,!0,!1,1));for(var s=-1,d=t.length;++s<d;){var h=t[s];i[h]=n[h]}}else r=a.createCallback(r,e,3),Ln(n,function(m,y,w){r(m,y,w)||(i[y]=m)});return i}function Vi(n){for(var r=-1,e=on(n),i=e.length,t=M(i);++r<i;){var s=e[r];t[r]=[s,n[s]]}return t}function Hi(n,r,e){var i={};if(typeof r!="function")for(var t=-1,s=Bn(arguments,!0,!1,1),d=ln(n)?s.length:0;++t<d;){var h=s[t];h in n&&(i[h]=n[h])}else r=a.createCallback(r,e,3),Ln(n,function(m,y,w){r(m,y,w)&&(i[y]=m)});return i}function Wi(n,r,e,i){var t=rn(n);if(e==null)if(t)e=[];else{var s=n&&n.constructor,d=s&&s.prototype;e=lr(d)}return r&&(r=a.createCallback(r,i,4),(t?fn:G)(n,function(h,m,y){return r(e,h,m,y)})),e}function Sr(n){for(var r=-1,e=on(n),i=e.length,t=M(i);++r<i;)t[r]=n[e[r]];return t}function Yi(n){for(var r=arguments,e=-1,i=Bn(r,!0,!1,1),t=r[2]&&r[2][r[1]]===n?1:i.length,s=M(t);++e<t;)s[e]=n[i[e]];return s}function he(n,r,e){var i=-1,t=_r(),s=n?n.length:0,d=!1;return e=(e<0?_n(0,s+e):e)||0,rn(n)?d=t(n,r,e)>-1:typeof s=="number"?d=(ur(n)?n.indexOf(r,e):t(n,r,e))>-1:G(n,function(h){if(++i>=e)return!(d=h===r)}),d}var Ji=qr(function(n,r,e){an.call(n,e)?n[e]++:n[e]=1});function ve(n,r,e){var i=!0;r=a.createCallback(r,e,3);var t=-1,s=n?n.length:0;if(typeof s=="number")for(;++t<s&&(i=!!r(n[t],t,n)););else G(n,function(d,h,m){return i=!!r(d,h,m)});return i}function Er(n,r,e){var i=[];r=a.createCallback(r,e,3);var t=-1,s=n?n.length:0;if(typeof s=="number")for(;++t<s;){var d=n[t];r(d,t,n)&&i.push(d)}else G(n,function(h,m,y){r(h,m,y)&&i.push(h)});return i}function Hr(n,r,e){r=a.createCallback(r,e,3);var i=-1,t=n?n.length:0;if(typeof t=="number")for(;++i<t;){var s=n[i];if(r(s,i,n))return s}else{var d;return G(n,function(h,m,y){if(r(h,m,y))return d=h,!1}),d}}function Gi(n,r,e){var i;return r=a.createCallback(r,e,3),Dr(n,function(t,s,d){if(r(t,s,d))return i=t,!1}),i}function fn(n,r,e){var i=-1,t=n?n.length:0;if(r=r&&typeof e>"u"?r:pn(r,e,3),typeof t=="number")for(;++i<t&&r(n[i],i,n)!==!1;);else G(n,r);return n}function Dr(n,r,e){var i=n?n.length:0;if(r=r&&typeof e>"u"?r:pn(r,e,3),typeof i=="number")for(;i--&&r(n[i],i,n)!==!1;);else{var t=on(n);i=t.length,G(n,function(s,d,h){return d=t?t[--i]:--i,r(h[d],d,h)})}return n}var $i=qr(function(n,r,e){(an.call(n,e)?n[e]:n[e]=[]).push(r)}),Qi=qr(function(n,r,e){n[e]=r});function Xi(n,r){var e=O(arguments,2),i=-1,t=typeof r=="function",s=n?n.length:0,d=M(typeof s=="number"?s:0);return fn(n,function(h){d[++i]=(t?r:h[r]).apply(h,e)}),d}function cr(n,r,e){var i=-1,t=n?n.length:0;if(r=a.createCallback(r,e,3),typeof t=="number")for(var s=M(t);++i<t;)s[i]=r(n[i],i,n);else s=[],G(n,function(d,h,m){s[++i]=r(d,h,m)});return s}function ge(n,r,e){var i=-1/0,t=i;if(typeof r!="function"&&e&&e[r]===n&&(r=null),r==null&&rn(n))for(var s=-1,d=n.length;++s<d;){var h=n[s];h>t&&(t=h)}else r=r==null&&ur(n)?Yn:a.createCallback(r,e,3),fn(n,function(m,y,w){var D=r(m,y,w);D>i&&(i=D,t=m)});return t}function Zi(n,r,e){var i=1/0,t=i;if(typeof r!="function"&&e&&e[r]===n&&(r=null),r==null&&rn(n))for(var s=-1,d=n.length;++s<d;){var h=n[s];h<t&&(t=h)}else r=r==null&&ur(n)?Yn:a.createCallback(r,e,3),fn(n,function(m,y,w){var D=r(m,y,w);D<i&&(i=D,t=m)});return t}var Wr=cr;function Yr(n,r,e,i){if(!n)return e;var t=arguments.length<3;r=a.createCallback(r,i,4);var s=-1,d=n.length;if(typeof d=="number")for(t&&(e=n[++s]);++s<d;)e=r(e,n[s],s,n);else G(n,function(h,m,y){e=t?(t=!1,h):r(e,h,m,y)});return e}function me(n,r,e,i){var t=arguments.length<3;return r=a.createCallback(r,i,4),Dr(n,function(s,d,h){e=t?(t=!1,s):r(e,s,d,h)}),e}function nt(n,r,e){return r=a.createCallback(r,e,3),Er(n,function(i,t,s){return!r(i,t,s)})}function rt(n,r,e){if(n&&typeof n.length!="number"&&(n=Sr(n)),r==null||e)return n?n[zr(0,n.length-1)]:u;var i=be(n);return i.length=ar(_n(0,r),i.length),i}function be(n){var r=-1,e=n?n.length:0,i=M(typeof e=="number"?e:0);return fn(n,function(t){var s=zr(0,++r);i[r]=i[s],i[s]=t}),i}function et(n){var r=n?n.length:0;return typeof r=="number"?r:on(n).length}function we(n,r,e){var i;r=a.createCallback(r,e,3);var t=-1,s=n?n.length:0;if(typeof s=="number")for(;++t<s&&!(i=r(n[t],t,n)););else G(n,function(d,h,m){return!(i=r(d,h,m))});return!!i}function it(n,r,e){var i=-1,t=rn(r),s=n?n.length:0,d=M(typeof s=="number"?s:0);for(t||(r=a.createCallback(r,e,3)),fn(n,function(m,y,w){var D=d[++i]=kr();t?D.criteria=cr(r,function(C){return m[C]}):(D.criteria=V())[0]=r(m,y,w),D.index=i,D.value=m}),s=d.length,d.sort(In);s--;){var h=d[s];d[s]=h.value,t||xn(h.criteria),er(h)}return d}function tt(n){return n&&typeof n.length=="number"?O(n):Sr(n)}var st=Er;function at(n){for(var r=-1,e=n?n.length:0,i=[];++r<e;){var t=n[r];t&&i.push(t)}return i}function ot(n){return fr(n,Bn(arguments,!0,!0,1))}function lt(n,r,e){var i=-1,t=n?n.length:0;for(r=a.createCallback(r,e,3);++i<t;)if(r(n[i],i,n))return i;return-1}function ft(n,r,e){var i=n?n.length:0;for(r=a.createCallback(r,e,3);i--;)if(r(n[i],i,n))return i;return-1}function Jr(n,r,e){var i=0,t=n?n.length:0;if(typeof r!="number"&&r!=null){var s=-1;for(r=a.createCallback(r,e,3);++s<t&&r(n[s],s,n);)i++}else if(i=r,i==null||e)return n?n[0]:u;return O(n,0,ar(_n(0,i),t))}function dt(n,r,e,i){return typeof r!="boolean"&&r!=null&&(i=e,e=typeof r!="function"&&i&&i[r]===n?null:r,r=!1),e!=null&&(n=cr(n,e,i)),Bn(n,r)}function ye(n,r,e){if(typeof e=="number"){var i=n?n.length:0;e=e<0?_n(0,i+e):e||0}else if(e){var t=xe(n,r);return n[t]===r?t:-1}return J(n,r,e)}function ut(n,r,e){var i=0,t=n?n.length:0;if(typeof r!="number"&&r!=null){var s=t;for(r=a.createCallback(r,e,3);s--&&r(n[s],s,n);)i++}else i=r==null||e?1:r||i;return O(n,0,ar(_n(0,t-i),t))}function ct(){for(var n=[],r=-1,e=arguments.length,i=V(),t=_r(),s=t===J,d=V();++r<e;){var h=arguments[r];(rn(h)||Cr(h))&&(n.push(h),i.push(s&&h.length>=A&&On(r?n[r]:d)))}var m=n[0],y=-1,w=m?m.length:0,D=[];n:for(;++y<w;){var C=i[0];if(h=m[y],(C?nn(C,h):t(d,h))<0){for(r=e,(C||d).push(h);--r;)if(C=i[r],(C?nn(C,h):t(n[r],h))<0)continue n;D.push(h)}}for(;e--;)C=i[e],C&&er(C);return xn(i),xn(d),D}function pt(n,r,e){var i=0,t=n?n.length:0;if(typeof r!="number"&&r!=null){var s=t;for(r=a.createCallback(r,e,3);s--&&r(n[s],s,n);)i++}else if(i=r,i==null||e)return n?n[t-1]:u;return O(n,_n(0,t-i))}function ht(n,r,e){var i=n?n.length:0;for(typeof e=="number"&&(i=(e<0?_n(0,i+e):ar(e,i-1))+1);i--;)if(n[i]===r)return i;return-1}function vt(n){for(var r=arguments,e=0,i=r.length,t=n?n.length:0;++e<i;)for(var s=-1,d=r[e];++s<t;)n[s]===d&&(te.call(n,s--,1),t--);return n}function gt(n,r,e){n=+n||0,e=typeof e=="number"?e:+e||1,r==null&&(r=n,n=0);for(var i=-1,t=_n(0,ci((r-n)/(e||1))),s=M(t);++i<t;)s[i]=n,n+=e;return s}function mt(n,r,e){var i=-1,t=n?n.length:0,s=[];for(r=a.createCallback(r,e,3);++i<t;){var d=n[i];r(d,i,n)&&(s.push(d),te.call(n,i--,1),t--)}return s}function Gr(n,r,e){if(typeof r!="number"&&r!=null){var i=0,t=-1,s=n?n.length:0;for(r=a.createCallback(r,e,3);++t<s&&r(n[t],t,n);)i++}else i=r==null||e?1:_n(0,r);return O(n,i)}function xe(n,r,e,i){var t=0,s=n?n.length:t;for(e=e?a.createCallback(e,i,1):$r,r=e(r);t<s;){var d=t+s>>>1;e(n[d])<r?t=d+1:s=d}return t}function bt(){return Ur(Bn(arguments,!0,!0))}function _e(n,r,e,i){return typeof r!="boolean"&&r!=null&&(i=e,e=typeof r!="function"&&i&&i[r]===n?null:r,r=!1),e!=null&&(e=a.createCallback(e,i,3)),Ur(n,r,e)}function wt(n){return fr(n,O(arguments,1))}function yt(){for(var n=-1,r=arguments.length;++n<r;){var e=arguments[n];if(rn(e)||Cr(e))var i=i?Ur(fr(i,e).concat(fr(e,i))):e}return i||[]}function Ce(){for(var n=arguments.length>1?arguments:arguments[0],r=-1,e=n?ge(Wr(n,"length")):0,i=M(e<0?0:e);++r<e;)i[r]=Wr(n,r);return i}function Fe(n,r){var e=-1,i=n?n.length:0,t={};for(!r&&i&&!rn(n[0])&&(r=[]);++e<i;){var s=n[e];r?t[s]=r[e]:s&&(t[s[0]]=s[1])}return t}function xt(n,r){if(!X(r))throw new Rn;return function(){if(--n<1)return r.apply(this,arguments)}}function Se(n,r){return arguments.length>2?Cn(n,17,O(arguments,2),null,r):Cn(n,1,null,null,r)}function _t(n){for(var r=arguments.length>1?Bn(arguments,!0,!1,1):dr(n),e=-1,i=r.length;++e<i;){var t=r[e];n[t]=Cn(n[t],1,null,null,n)}return n}function Ct(n,r){return arguments.length>2?Cn(r,19,O(arguments,2),null,n):Cn(r,3,null,null,n)}function Ft(){for(var n=arguments,r=n.length;r--;)if(!X(n[r]))throw new Rn;return function(){for(var e=arguments,i=n.length;i--;)e=[n[i].apply(this,e)];return e[0]}}function St(n,r){return r=typeof r=="number"?r:+r||n.length,Cn(n,4,null,null,null,r)}function Ee(n,r,e){var i,t,s,d,h,m,y,w=0,D=!1,C=!0;if(!X(n))throw new Rn;if(r=_n(0,r)||0,e===!0){var H=!0;C=!1}else ln(e)&&(H=e.leading,D="maxWait"in e&&(_n(r,e.maxWait)||0),C="trailing"in e?e.trailing:C);var W=function(){var mn=r-(Kn()-d);if(mn<=0){t&&wr(t);var dn=y;t=m=y=u,dn&&(w=Kn(),s=n.apply(h,i),!m&&!t&&(i=h=null))}else m=sr(W,mn)},hn=function(){m&&wr(m),t=m=y=u,(C||D!==r)&&(w=Kn(),s=n.apply(h,i),!m&&!t&&(i=h=null))};return function(){if(i=arguments,d=Kn(),h=this,y=C&&(m||!H),D===!1)var mn=H&&!m;else{!t&&!H&&(w=d);var dn=D-(d-w),Z=dn<=0;Z?(t&&(t=wr(t)),w=d,s=n.apply(h,i)):t||(t=sr(hn,dn))}return Z&&m?m=wr(m):!m&&r!==D&&(m=sr(W,r)),mn&&(Z=!0,s=n.apply(h,i)),Z&&!m&&!t&&(i=h=null),s}}function Et(n){if(!X(n))throw new Rn;var r=O(arguments,1);return sr(function(){n.apply(u,r)},1)}function Dt(n,r){if(!X(n))throw new Rn;var e=O(arguments,2);return sr(function(){n.apply(u,e)},r)}function Tt(n,r){if(!X(n))throw new Rn;var e=function(){var i=e.cache,t=r?r.apply(this,arguments):E+arguments[0];return an.call(i,t)?i[t]:i[t]=n.apply(this,arguments)};return e.cache={},e}function It(n){var r,e;if(!X(n))throw new Rn;return function(){return r||(r=!0,e=n.apply(this,arguments),n=null),e}}function Rt(n){return Cn(n,16,O(arguments,1))}function Mt(n){return Cn(n,32,null,O(arguments,1))}function Lt(n,r,e){var i=!0,t=!0;if(!X(n))throw new Rn;return e===!1?i=!1:ln(e)&&(i="leading"in e?e.leading:i,t="trailing"in e?e.trailing:t),L.leading=i,L.maxWait=r,L.trailing=t,Ee(n,r,L)}function kt(n,r){return Cn(r,16,[n])}function At(n){return function(){return n}}function Nt(n,r,e){var i=typeof n;if(n==null||i=="function")return pn(n,r,e);if(i!="object")return Te(n);var t=on(n),s=t[0],d=n[s];return t.length==1&&d===d&&!ln(d)?function(h){var m=h[s];return d===m&&(d!==0||1/d==1/m)}:function(h){for(var m=t.length,y=!1;m--&&(y=$n(h[t[m]],n[t[m]],null,!0)););return y}}function Bt(n){return n==null?"":Nn(n).replace(Ci,wi)}function $r(n){return n}function Qr(n,r,e){var i=!0,t=r&&dr(r);(!r||!e&&!t.length)&&(e==null&&(e=r),s=jn,r=n,n=a,t=dr(r)),e===!1?i=!1:ln(e)&&"chain"in e&&(i=e.chain);var s=n,d=X(s);fn(t,function(h){var m=n[h]=r[h];d&&(s.prototype[h]=function(){var y=this.__chain__,w=this.__wrapped__,D=[w];tr.apply(D,arguments);var C=m.apply(n,D);if(i||y){if(w===C&&ln(C))return this;C=new s(C),C.__chain__=y}return C})})}function Pt(){return x._=di,this}function De(){}var Kn=Pn(Kn=q.now)&&Kn||function(){return new q().getTime()},zt=Br(P+"08")==8?Br:function(n,r){return Br(ur(n)?n.replace(Hn,""):n,r||0)};function Te(n){return function(r){return r[n]}}function Ut(n,r,e){var i=n==null,t=r==null;if(e==null&&(typeof n=="boolean"&&t?(e=n,n=1):!t&&typeof r=="boolean"&&(e=r,t=!0)),i&&t&&(r=1),n=+n||0,t?(r=n,n=0):r=+r||0,e||n%1||r%1){var s=ae();return ar(n+s*(r-n+parseFloat("1e-"+((s+"").length-1))),r)}return zr(n,r)}function qt(n,r){if(n){var e=n[r];return X(e)?n[r]():e}}function Ot(n,r,e){var i=a.templateSettings;n=Nn(n||""),e=Kr({},e,i);var t=Kr({},e.imports,i.imports),s=on(t),d=Sr(t),h,m=0,y=e.interpolate||Dn,w="__p += '",D=ir((e.escape||Dn).source+"|"+y.source+"|"+(y===un?Sn:Dn).source+"|"+(e.evaluate||Dn).source+"|$","g");n.replace(D,function(mn,dn,Z,Tr,pr,hr){return Z||(Z=Tr),w+=n.slice(m,hr).replace(rr,Lr),dn&&(w+=`' +
__e(`+dn+`) +
'`),pr&&(h=!0,w+=`';
`+pr+`;
__p += '`),Z&&(w+=`' +
((__t = (`+Z+`)) == null ? '' : __t) +
'`),m=hr+mn.length,mn}),w+=`';
`;var C=e.variable,H=C;H||(C="obj",w="with ("+C+`) {
`+w+`
}
`),w=(h?w.replace(vn,""):w).replace(bn,"$1").replace(wn,"$1;"),w="function("+C+`) {
`+(H?"":C+" || ("+C+` = {});
`)+"var __t, __p = '', __e = _.escape"+(h?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+w+`return __p
}`;var W=`
/*
//# sourceURL=`+(e.sourceURL||"/lodash/template/source["+v+++"]")+`
*/`;try{var hn=j(s,"return "+w+W).apply(u,d)}catch(mn){throw mn.source=w,mn}return r?hn(r):(hn.source=w,hn)}function jt(n,r,e){n=(n=+n)>-1?n:0;var i=-1,t=M(n);for(r=pn(r,e,1);++i<n;)t[i]=r(i);return t}function Kt(n){return n==null?"":Nn(n).replace(_i,yi)}function Vt(n){var r=++p;return Nn(n??"")+r}function Ht(n){return n=new jn(n),n.__chain__=!0,n}function Wt(n,r){return r(n),n}function Yt(){return this.__chain__=!0,this}function Jt(){return Nn(this.__wrapped__)}function Ie(){return this.__wrapped__}return a.after=xt,a.assign=Fr,a.at=Yi,a.bind=Se,a.bindAll=_t,a.bindKey=Ct,a.chain=Ht,a.compact=at,a.compose=Ft,a.constant=At,a.countBy=Ji,a.create=Ei,a.createCallback=Nt,a.curry=St,a.debounce=Ee,a.defaults=Kr,a.defer=Et,a.delay=Dt,a.difference=ot,a.filter=Er,a.flatten=dt,a.forEach=fn,a.forEachRight=Dr,a.forIn=Ln,a.forInRight=Ii,a.forOwn=G,a.forOwnRight=ue,a.functions=dr,a.groupBy=$i,a.indexBy=Qi,a.initial=ut,a.intersection=ct,a.invert=ce,a.invoke=Xi,a.keys=on,a.map=cr,a.mapValues=Oi,a.max=ge,a.memoize=Tt,a.merge=ji,a.min=Zi,a.omit=Ki,a.once=It,a.pairs=Vi,a.partial=Rt,a.partialRight=Mt,a.pick=Hi,a.pluck=Wr,a.property=Te,a.pull=vt,a.range=gt,a.reject=nt,a.remove=mt,a.rest=Gr,a.shuffle=be,a.sortBy=it,a.tap=Wt,a.throttle=Lt,a.times=jt,a.toArray=tt,a.transform=Wi,a.union=bt,a.uniq=_e,a.values=Sr,a.where=st,a.without=wt,a.wrap=kt,a.xor=yt,a.zip=Ce,a.zipObject=Fe,a.collect=cr,a.drop=Gr,a.each=fn,a.eachRight=Dr,a.extend=Fr,a.methods=dr,a.object=Fe,a.select=Er,a.tail=Gr,a.unique=_e,a.unzip=Ce,Qr(a),a.clone=Fi,a.cloneDeep=Si,a.contains=he,a.escape=Bt,a.every=ve,a.find=Hr,a.findIndex=lt,a.findKey=Di,a.findLast=Gi,a.findLastIndex=ft,a.findLastKey=Ti,a.has=Ri,a.identity=$r,a.indexOf=ye,a.isArguments=Cr,a.isArray=rn,a.isBoolean=Mi,a.isDate=Li,a.isElement=ki,a.isEmpty=Ai,a.isEqual=Ni,a.isFinite=Bi,a.isFunction=X,a.isNaN=Pi,a.isNull=zi,a.isNumber=pe,a.isObject=ln,a.isPlainObject=Vr,a.isRegExp=Ui,a.isString=ur,a.isUndefined=qi,a.lastIndexOf=ht,a.mixin=Qr,a.noConflict=Pt,a.noop=De,a.now=Kn,a.parseInt=zt,a.random=Ut,a.reduce=Yr,a.reduceRight=me,a.result=qt,a.runInContext=Ar,a.size=et,a.some=we,a.sortedIndex=xe,a.template=Ot,a.unescape=Kt,a.uniqueId=Vt,a.all=ve,a.any=we,a.detect=Hr,a.findWhere=Hr,a.foldl=Yr,a.foldr=me,a.include=he,a.inject=Yr,Qr((function(){var n={};return G(a,function(r,e){a.prototype[e]||(n[e]=r)}),n})(),!1),a.first=Jr,a.last=pt,a.sample=rt,a.take=Jr,a.head=Jr,G(a,function(n,r){var e=r!=="sample";a.prototype[r]||(a.prototype[r]=function(i,t){var s=this.__chain__,d=n(this.__wrapped__,i,t);return!s&&(i==null||t&&!(e&&typeof i=="function"))?d:new jn(d,s)})}),a.VERSION="2.4.2",a.prototype.chain=Yt,a.prototype.toString=Jt,a.prototype.value=Ie,a.prototype.valueOf=Ie,fn(["join","pop","shift"],function(n){var r=Jn[n];a.prototype[n]=function(){var e=this.__chain__,i=r.apply(this.__wrapped__,arguments);return e?new jn(i,e):i}}),fn(["push","reverse","sort","unshift"],function(n){var r=Jn[n];a.prototype[n]=function(){return r.apply(this.__wrapped__,arguments),this}}),fn(["concat","slice","splice"],function(n){var r=Jn[n];a.prototype[n]=function(){return new jn(r.apply(this.__wrapped__,arguments),this.__chain__)}}),a}var An=Ar();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(K._=An,define(function(){return An})):yn&&Tn?Y?(Tn.exports=An)._=An:yn._=An:K._=An}).call(Xn)});var Ye=kn((We,Mr)=>{U();(function(u){"use strict";function b(v,F){var g=(v&65535)+(F&65535),I=(v>>16)+(F>>16)+(g>>16);return I<<16|g&65535}function S(v,F){return v<<F|v>>>32-F}function p(v,F,g,I,R,z){return b(S(b(b(F,v),b(I,z)),R),g)}function E(v,F,g,I,R,z,_){return p(F&g|~F&I,v,F,R,z,_)}function A(v,F,g,I,R,z,_){return p(F&I|g&~I,v,F,R,z,_)}function B(v,F,g,I,R,z,_){return p(F^g^I,v,F,R,z,_)}function P(v,F,g,I,R,z,_){return p(g^(F|~I),v,F,R,z,_)}function vn(v,F){v[F>>5]|=128<<F%32,v[(F+64>>>9<<4)+14]=F;var g,I,R,z,_,l=1732584193,f=-271733879,o=-1732584194,c=271733878;for(g=0;g<v.length;g+=16)I=l,R=f,z=o,_=c,l=E(l,f,o,c,v[g],7,-680876936),c=E(c,l,f,o,v[g+1],12,-389564586),o=E(o,c,l,f,v[g+2],17,606105819),f=E(f,o,c,l,v[g+3],22,-1044525330),l=E(l,f,o,c,v[g+4],7,-176418897),c=E(c,l,f,o,v[g+5],12,1200080426),o=E(o,c,l,f,v[g+6],17,-1473231341),f=E(f,o,c,l,v[g+7],22,-45705983),l=E(l,f,o,c,v[g+8],7,1770035416),c=E(c,l,f,o,v[g+9],12,-1958414417),o=E(o,c,l,f,v[g+10],17,-42063),f=E(f,o,c,l,v[g+11],22,-1990404162),l=E(l,f,o,c,v[g+12],7,1804603682),c=E(c,l,f,o,v[g+13],12,-40341101),o=E(o,c,l,f,v[g+14],17,-1502002290),f=E(f,o,c,l,v[g+15],22,1236535329),l=A(l,f,o,c,v[g+1],5,-165796510),c=A(c,l,f,o,v[g+6],9,-1069501632),o=A(o,c,l,f,v[g+11],14,643717713),f=A(f,o,c,l,v[g],20,-373897302),l=A(l,f,o,c,v[g+5],5,-701558691),c=A(c,l,f,o,v[g+10],9,38016083),o=A(o,c,l,f,v[g+15],14,-660478335),f=A(f,o,c,l,v[g+4],20,-405537848),l=A(l,f,o,c,v[g+9],5,568446438),c=A(c,l,f,o,v[g+14],9,-1019803690),o=A(o,c,l,f,v[g+3],14,-187363961),f=A(f,o,c,l,v[g+8],20,1163531501),l=A(l,f,o,c,v[g+13],5,-1444681467),c=A(c,l,f,o,v[g+2],9,-51403784),o=A(o,c,l,f,v[g+7],14,1735328473),f=A(f,o,c,l,v[g+12],20,-1926607734),l=B(l,f,o,c,v[g+5],4,-378558),c=B(c,l,f,o,v[g+8],11,-2022574463),o=B(o,c,l,f,v[g+11],16,1839030562),f=B(f,o,c,l,v[g+14],23,-35309556),l=B(l,f,o,c,v[g+1],4,-1530992060),c=B(c,l,f,o,v[g+4],11,1272893353),o=B(o,c,l,f,v[g+7],16,-155497632),f=B(f,o,c,l,v[g+10],23,-1094730640),l=B(l,f,o,c,v[g+13],4,681279174),c=B(c,l,f,o,v[g],11,-358537222),o=B(o,c,l,f,v[g+3],16,-722521979),f=B(f,o,c,l,v[g+6],23,76029189),l=B(l,f,o,c,v[g+9],4,-640364487),c=B(c,l,f,o,v[g+12],11,-421815835),o=B(o,c,l,f,v[g+15],16,530742520),f=B(f,o,c,l,v[g+2],23,-995338651),l=P(l,f,o,c,v[g],6,-198630844),c=P(c,l,f,o,v[g+7],10,1126891415),o=P(o,c,l,f,v[g+14],15,-1416354905),f=P(f,o,c,l,v[g+5],21,-57434055),l=P(l,f,o,c,v[g+12],6,1700485571),c=P(c,l,f,o,v[g+3],10,-1894986606),o=P(o,c,l,f,v[g+10],15,-1051523),f=P(f,o,c,l,v[g+1],21,-2054922799),l=P(l,f,o,c,v[g+8],6,1873313359),c=P(c,l,f,o,v[g+15],10,-30611744),o=P(o,c,l,f,v[g+6],15,-1560198380),f=P(f,o,c,l,v[g+13],21,1309151649),l=P(l,f,o,c,v[g+4],6,-145523070),c=P(c,l,f,o,v[g+11],10,-1120210379),o=P(o,c,l,f,v[g+2],15,718787259),f=P(f,o,c,l,v[g+9],21,-343485551),l=b(l,I),f=b(f,R),o=b(o,z),c=b(c,_);return[l,f,o,c]}function bn(v){var F,g="",I=v.length*32;for(F=0;F<I;F+=8)g+=String.fromCharCode(v[F>>5]>>>F%32&255);return g}function wn(v){var F,g=[];for(g[(v.length>>2)-1]=void 0,F=0;F<g.length;F+=1)g[F]=0;var I=v.length*8;for(F=0;F<I;F+=8)g[F>>5]|=(v.charCodeAt(F/8)&255)<<F%32;return g}function Sn(v){return bn(vn(wn(v),v.length*8))}function En(v,F){var g,I=wn(v),R=[],z=[],_;for(R[15]=z[15]=void 0,I.length>16&&(I=vn(I,v.length*8)),g=0;g<16;g+=1)R[g]=I[g]^909522486,z[g]=I[g]^1549556828;return _=vn(R.concat(wn(F)),512+F.length*8),bn(vn(z.concat(_),640))}function en(v){var F="0123456789abcdef",g="",I,R;for(R=0;R<v.length;R+=1)I=v.charCodeAt(R),g+=F.charAt(I>>>4&15)+F.charAt(I&15);return g}function un(v){return unescape(encodeURIComponent(v))}function Hn(v){return Sn(un(v))}function Dn(v){return en(Hn(v))}function Un(v,F){return En(un(v),un(F))}function rr(v,F){return en(Un(v,F))}function qn(v,F,g){return F?g?Un(F,v):rr(F,v):g?Hn(v):Dn(v)}typeof define=="function"&&define.amd?define(function(){return qn}):typeof Mr=="object"&&Mr.exports?Mr.exports=qn:u.md5=qn})(We)});var Ge=kn((ys,Je)=>{"use strict";U();function ts(u,b){return Object.prototype.hasOwnProperty.call(u,b)}Je.exports=function(u,b,S,p){b=b||"&",S=S||"=";var E={};if(typeof u!="string"||u.length===0)return E;var A=/\+/g;u=u.split(b);var B=1e3;p&&typeof p.maxKeys=="number"&&(B=p.maxKeys);var P=u.length;B>0&&P>B&&(P=B);for(var vn=0;vn<P;++vn){var bn=u[vn].replace(A,"%20"),wn=bn.indexOf(S),Sn,En,en,un;wn>=0?(Sn=bn.substr(0,wn),En=bn.substr(wn+1)):(Sn=bn,En=""),en=decodeURIComponent(Sn),un=decodeURIComponent(En),ts(E,en)?Array.isArray(E[en])?E[en].push(un):E[en]=[E[en],un]:E[en]=un}return E}});var Qe=kn((_s,$e)=>{"use strict";U();var mr=function(u){switch(typeof u){case"string":return u;case"boolean":return u?"true":"false";case"number":return isFinite(u)?u:"";default:return""}};$e.exports=function(u,b,S,p){return b=b||"&",S=S||"=",u===null&&(u=void 0),typeof u=="object"?Object.keys(u).map(function(E){var A=encodeURIComponent(mr(E))+S;return Array.isArray(u[E])?u[E].map(function(B){return A+encodeURIComponent(mr(B))}).join(b):A+encodeURIComponent(mr(u[E]))}).join(b):p?encodeURIComponent(mr(p))+S+encodeURIComponent(mr(u)):""}});var Xe=kn(br=>{"use strict";U();br.decode=br.parse=Ge();br.encode=br.stringify=Qe()});var ii=kn((Ds,ei)=>{U();var ss=Ye(),as=Xe(),os=/^[0-9a-f]{32}$/;function ls(u){var b={},S={protocol:1,format:1};for(var p in u)S[p]||(b[p]=u[p]);return b}function Ze(u,b){if(u)return typeof u.protocol=="boolean"?u.protocol:u.protocol==="http"?!1:u.protocol==="https"?!0:void 0}function ni(u){return u=typeof u=="string"?u.trim().toLowerCase():"unspecified",u.match(os)?u:ss(u)}function ri(u){var b=as.stringify(ls(u));return b&&"?"+b||""}var Es=ei.exports={url:function(u,b,S){var p="//www.gravatar.com/avatar/";b&&b.cdn?(p=b.cdn+"/avatar/",delete b.cdn):(b&&b.protocol&&(S=Ze(b)),typeof S<"u"&&(p=S?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var E=ri(b);return p+ni(u)+E},profile_url:function(u,b,S){var p=b!=null&&b.format!=null?String(b.format):"json",E;if(b&&b.cdn)E=b.cdn+"/",delete b.cdn;else{b&&b.protocol&&(S=Ze(b));var E=S&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var A=ri(b);return E+ni(u)+"."+p+A}}});var si=kn((Is,ti)=>{U();ti.exports=ii()});var ai=kn(Zn=>{U();(function(b,S){typeof Zn=="object"&&Zn&&typeof Zn.nodeName!="string"?S(Zn):typeof define=="function"&&define.amd?define(["exports"],S):(b.Mustache={},S(b.Mustache))})(Zn,function(b){var S=Object.prototype.toString,p=Array.isArray||function(l){return S.call(l)==="[object Array]"};function E(_){return typeof _=="function"}function A(_){return p(_)?"array":typeof _}function B(_){return _.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function P(_,l){return _!=null&&typeof _=="object"&&l in _}var vn=RegExp.prototype.test;function bn(_,l){return vn.call(_,l)}var wn=/\S/;function Sn(_){return!bn(wn,_)}var En={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function en(_){return String(_).replace(/[&<>"'`=\/]/g,function(f){return En[f]})}var un=/\s*/,Hn=/\s+/,Dn=/\s*=/,Un=/\s*\}/,rr=/#|\^|\/|>|\{|&|=|!/;function qn(_,l){if(!_)return[];var f=[],o=[],c=[],L=!1,k=!1;function T(){if(L&&!k)for(;c.length;)delete o[c.pop()];else c=[];L=!1,k=!1}var $,K,yn;function Tn(V){if(typeof V=="string"&&(V=V.split(Hn,2)),!p(V)||V.length!==2)throw new Error("Invalid tags: "+V);$=new RegExp(B(V[0])+"\\s*"),K=new RegExp("\\s*"+B(V[1])),yn=new RegExp("\\s*"+B("}"+V[1]))}Tn(l||b.tags);for(var Y=new g(_),tn,J,nn,Wn,Yn,In;!Y.eos();){if(tn=Y.pos,nn=Y.scanUntil($),nn)for(var On=0,Lr=nn.length;On<Lr;++On)Wn=nn.charAt(On),Sn(Wn)?c.push(o.length):k=!0,o.push(["text",Wn,tn,tn+1]),tn+=1,Wn===`
`&&T();if(!Y.scan($))break;if(L=!0,J=Y.scan(rr)||"name",Y.scan(un),J==="="?(nn=Y.scanUntil(Dn),Y.scan(Dn),Y.scanUntil(K)):J==="{"?(nn=Y.scanUntil(yn),Y.scan(Un),Y.scanUntil(K),J="&"):nn=Y.scanUntil(K),!Y.scan(K))throw new Error("Unclosed tag at "+Y.pos);if(Yn=[J,nn,tn,Y.pos],o.push(Yn),J==="#"||J==="^")f.push(Yn);else if(J==="/"){if(In=f.pop(),!In)throw new Error('Unopened section "'+nn+'" at '+tn);if(In[1]!==nn)throw new Error('Unclosed section "'+In[1]+'" at '+tn)}else J==="name"||J==="{"||J==="&"?k=!0:J==="="&&Tn(nn)}if(In=f.pop(),In)throw new Error('Unclosed section "'+In[1]+'" at '+Y.pos);return F(v(o))}function v(_){for(var l=[],f,o,c=0,L=_.length;c<L;++c)f=_[c],f&&(f[0]==="text"&&o&&o[0]==="text"?(o[1]+=f[1],o[3]=f[3]):(l.push(f),o=f));return l}function F(_){for(var l=[],f=l,o=[],c,L,k=0,T=_.length;k<T;++k)switch(c=_[k],c[0]){case"#":case"^":f.push(c),o.push(c),f=c[4]=[];break;case"/":L=o.pop(),L[5]=c[2],f=o.length>0?o[o.length-1][4]:l;break;default:f.push(c)}return l}function g(_){this.string=_,this.tail=_,this.pos=0}g.prototype.eos=function(){return this.tail===""},g.prototype.scan=function(l){var f=this.tail.match(l);if(!f||f.index!==0)return"";var o=f[0];return this.tail=this.tail.substring(o.length),this.pos+=o.length,o},g.prototype.scanUntil=function(l){var f=this.tail.search(l),o;switch(f){case-1:o=this.tail,this.tail="";break;case 0:o="";break;default:o=this.tail.substring(0,f),this.tail=this.tail.substring(f)}return this.pos+=o.length,o};function I(_,l){this.view=_,this.cache={".":this.view},this.parent=l}I.prototype.push=function(l){return new I(l,this)},I.prototype.lookup=function(l){var f=this.cache,o;if(f.hasOwnProperty(l))o=f[l];else{for(var c=this,L,k,T=!1;c;){if(l.indexOf(".")>0)for(o=c.view,L=l.split("."),k=0;o!=null&&k<L.length;)k===L.length-1&&(T=P(o,L[k])),o=o[L[k++]];else o=c.view[l],T=P(c.view,l);if(T)break;c=c.parent}f[l]=o}return E(o)&&(o=o.call(this.view)),o};function R(){this.cache={}}R.prototype.clearCache=function(){this.cache={}},R.prototype.parse=function(l,f){var o=this.cache,c=o[l];return c==null&&(c=o[l]=qn(l,f)),c},R.prototype.render=function(l,f,o){var c=this.parse(l),L=f instanceof I?f:new I(f);return this.renderTokens(c,L,o,l)},R.prototype.renderTokens=function(l,f,o,c){for(var L="",k,T,$,K=0,yn=l.length;K<yn;++K)$=void 0,k=l[K],T=k[0],T==="#"?$=this.renderSection(k,f,o,c):T==="^"?$=this.renderInverted(k,f,o,c):T===">"?$=this.renderPartial(k,f,o,c):T==="&"?$=this.unescapedValue(k,f):T==="name"?$=this.escapedValue(k,f):T==="text"&&($=this.rawValue(k)),$!==void 0&&(L+=$);return L},R.prototype.renderSection=function(l,f,o,c){var L=this,k="",T=f.lookup(l[1]);function $(Tn){return L.render(Tn,f,o)}if(T){if(p(T))for(var K=0,yn=T.length;K<yn;++K)k+=this.renderTokens(l[4],f.push(T[K]),o,c);else if(typeof T=="object"||typeof T=="string"||typeof T=="number")k+=this.renderTokens(l[4],f.push(T),o,c);else if(E(T)){if(typeof c!="string")throw new Error("Cannot use higher-order sections without the original template");T=T.call(f.view,c.slice(l[3],l[5]),$),T!=null&&(k+=T)}else k+=this.renderTokens(l[4],f,o,c);return k}},R.prototype.renderInverted=function(l,f,o,c){var L=f.lookup(l[1]);if(!L||p(L)&&L.length===0)return this.renderTokens(l[4],f,o,c)},R.prototype.renderPartial=function(l,f,o){if(o){var c=E(o)?o(l[1]):o[l[1]];if(c!=null)return this.renderTokens(this.parse(c),f,o,c)}},R.prototype.unescapedValue=function(l,f){var o=f.lookup(l[1]);if(o!=null)return o},R.prototype.escapedValue=function(l,f){var o=f.lookup(l[1]);if(o!=null)return b.escape(o)},R.prototype.rawValue=function(l){return l[1]},b.name="mustache.js",b.version="2.3.2",b.tags=["{{","}}"];var z=new R;return b.clearCache=function(){return z.clearCache()},b.parse=function(l,f){return z.parse(l,f)},b.render=function(l,f,o){if(typeof l!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+A(l)+'" was given as the first argument for mustache#render(template, view, partials)');return z.render(l,f,o)},b.to_html=function(l,f,o,c){var L=b.render(l,f,o);if(E(c))c(L);else return L},b.escape=en,b.Scanner=g,b.Context=I,b.Writer=R,b})});var li=kn((ks,oi)=>{U();var ee=(Ve(),es(Ke)),nr=He(),fs=si(),ds=ai(),us=new Date,cs=us.getFullYear();function zn(u){switch(u.substr(5,2)){case"01":return"Janvier ";case"02":return"F\xE9vrier ";case"03":return"Mars ";case"04":return"Avril ";case"05":return"Mai ";case"06":return"Juin ";case"07":return"Juillet ";case"08":return"Ao\xFBt ";case"09":return"Septembre ";case"10":return"Octobre ";case"11":return"Novembre ";case"12":return"D\xE9cembre "}}function ps(u){u.basics.capitalName=u.basics.name.toUpperCase(),u.basics&&u.basics.email&&(u.basics.gravatar=fs.url(u.basics.email,{s:"200",r:"pg",d:"mm"})),(u.basics.picture||u.basics.gravatar)&&(u.photo=u.basics.picture?u.basics.picture:u.basics.gravatar),nr.each(u.basics.profiles,function(p){switch(p.network.toLowerCase()){case"google-plus":case"googleplus":p.iconClass="fa fa-google-plus";break;case"flickr":case"flicker":p.iconClass="fa fa-flickr";break;case"dribbble":case"dribble":p.iconClass="fa fa-dribbble";break;case"codepen":p.iconClass="fa fa-codepen";break;case"soundcloud":p.iconClass="fa fa-soundcloud";break;case"reddit":p.iconClass="fa fa-reddit";break;case"tumblr":case"tumbler":p.iconClass="fa fa-tumblr";break;case"stack-overflow":case"stackoverflow":p.iconClass="fa fa-stack-overflow";break;case"blog":case"rss":p.iconClass="fa fa-rss";break;case"gitlab":p.iconClass="fa fa-gitlab";break;case"keybase":p.iconClass="fa fa-key";break;default:p.iconClass="fa fa-"+p.network.toLowerCase()}p.url?p.text=p.url:p.text=p.network+": "+p.username}),u.work&&u.work.length&&(u.workBool=!0,nr.each(u.work,function(p){p.startDate&&(p.startDateYear=(p.startDate||"").substr(0,4),p.startDateMonth=zn(p.startDate||"")),p.endDate?(p.endDateYear=(p.endDate||"").substr(0,4),p.endDateMonth=zn(p.endDate||"")):p.endDateYear="Maintenant",p.highlights&&p.highlights[0]&&p.highlights[0]!=""&&(p.boolHighlights=!0)})),u.volunteer&&u.volunteer.length&&(u.volunteerBool=!0,nr.each(u.volunteer,function(p){p.startDate&&(p.startDateYear=(p.startDate||"").substr(0,4),p.startDateMonth=zn(p.startDate||"")),p.endDate?(p.endDateYear=(p.endDate||"").substr(0,4),p.endDateMonth=zn(p.endDate||"")):p.endDateYear="Maintenant",p.highlights&&p.highlights[0]&&p.highlights[0]!=""&&(p.boolHighlights=!0)})),u.education&&u.education.length&&u.education[0].institution&&(u.educationBool=!0,nr.each(u.education,function(p){!p.area||!p.studyType?p.educationDetail=(p.area==null?"":p.area)+(p.studyType==null?"":p.studyType):p.educationDetail=p.area+", "+p.studyType,p.startDate?(p.startDateYear=p.startDate.substr(0,4),p.startDateMonth=zn(p.startDate||"")):p.endDateMonth="",p.endDate?(p.endDateYear=p.endDate.substr(0,4),p.endDateMonth=zn(p.endDate||""),p.endDateYear>cs&&(p.endDateYear+=" (expected)")):(p.endDateYear="Maintenant",p.endDateMonth=""),p.courses&&p.courses[0]&&p.courses[0]!=""&&(p.educationCourses=!0)})),u.awards&&u.awards.length&&u.awards[0].title&&(u.awardsBool=!0,nr.each(u.awards,function(p){p.year=(p.date||"").substr(0,4),p.day=(p.date||"").substr(8,2),p.month=zn(p.date||"")})),u.publications&&u.publications.length&&u.publications[0].name&&(u.publicationsBool=!0,nr.each(u.publications,function(p){p.year=(p.releaseDate||"").substr(0,4),p.day=(p.releaseDate||"").substr(8,2),p.month=zn(p.releaseDate||"")})),u.skills&&u.skills.length&&u.skills[0].name&&(u.skillsBool=!0),u.interests&&u.interests.length&&u.interests[0].name&&(u.interestsBool=!0),u.languages&&u.languages.length&&u.languages[0].language&&(u.languagesBool=!0),u.references&&u.references.length&&u.references[0].name&&(u.referencesBool=!0),u.css=ee.readFileSync("//style.css","utf-8"),u.printcss=ee.readFileSync("//print.css","utf-8");var b=ee.readFileSync("//resume.template","utf8"),S=ds.render(b,u);return S}oi.exports={render:ps}});U();var Vn=rs(li(),1),fi=Vn.default??Vn,Ns=fi.render??Vn.render,Bs=fi.pdfRenderOptions??Vn.pdfRenderOptions;export{Bs as pdfRenderOptions,Ns as render};
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
