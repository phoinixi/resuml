var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var hl=Object.create;var Pr=Object.defineProperty;var ml=Object.getOwnPropertyDescriptor;var bl=Object.getOwnPropertyNames;var vl=Object.getPrototypeOf,kl=Object.prototype.hasOwnProperty;var aa=(a=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(a,{get:(e,o)=>(typeof require<"u"?require:e)[o]}):a)(function(a){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+a+'" is not supported')});var sa=(a,e)=>()=>(a&&(e=a(a=0)),e);var $=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports),xl=(a,e)=>{for(var o in e)Pr(a,o,{get:e[o],enumerable:!0})},oa=(a,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of bl(e))!kl.call(a,t)&&t!==o&&Pr(a,t,{get:()=>e[t],enumerable:!(s=ml(e,t))||s.enumerable});return a};var yl=(a,e,o)=>(o=a!=null?hl(vl(a)):{},oa(e||!a||!a.__esModule?Pr(o,"default",{value:a,enumerable:!0}):o,a)),ua=a=>oa(Pr({},"__esModule",{value:!0}),a);var M=sa(()=>{});var s1={};xl(s1,{createReadStream:()=>va,createWriteStream:()=>ka,default:()=>Fl,existsSync:()=>pa,lstatSync:()=>ha,mkdirSync:()=>ga,readFileSync:()=>ca,readdirSync:()=>da,rmdirSync:()=>ba,statSync:()=>a1,unlinkSync:()=>ma,writeFileSync:()=>fa});function i1(a){return String(a).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function la(a){var e=i1(a);if(Yr[e]!==void 0)return Yr[e];for(var o=Object.keys(Yr),s=0;s<o.length;s++)if(e.endsWith("/"+o[s])||e===o[s])return Yr[o[s]]}function r1(a){var e=i1(a);if((e===""||e===".")&&pt["."]!==void 0)return pt["."];if(pt[e]!==void 0)return pt[e];for(var o=Object.keys(pt),s=0;s<o.length;s++)if(e.endsWith("/"+o[s])||e===o[s])return pt[o[s]]}var Yr,pt,ca,da,pa,fa,ga,a1,ha,ma,ba,va,ka,Fl,o1=sa(()=>{"use strict";M();Yr={"assets/css/theme.css":`@font-face {
  font-family: 'icomoon';
  src:  url('fonts/icomoon.eot?z1lat9');
  src:  url('fonts/icomoon.eot?z1lat9#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?z1lat9') format('truetype'),
    url('fonts/icomoon.woff?z1lat9') format('woff'),
    url('fonts/icomoon.svg?z1lat9#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-gitlab .path1:before {
  content: "\\e906";
  color: rgb(252, 109, 38);
}
.icon-gitlab .path2:before {
  content: "\\e907";
  margin-left: -1em;
  color: rgb(226, 67, 41);
}
.icon-gitlab .path3:before {
  content: "\\e908";
  margin-left: -1em;
  color: rgb(252, 109, 38);
}
.icon-gitlab .path4:before {
  content: "\\e909";
  margin-left: -1em;
  color: rgb(252, 163, 38);
}
.icon-gitlab .path5:before {
  content: "\\e90a";
  margin-left: -1em;
  color: rgb(226, 67, 41);
}
.icon-gitlab .path6:before {
  content: "\\e90b";
  margin-left: -1em;
  color: rgb(252, 109, 38);
}
.icon-gitlab .path7:before {
  content: "\\e90c";
  margin-left: -1em;
  color: rgb(252, 163, 38);
}
.icon-gitlab .path8:before {
  content: "\\e90d";
  margin-left: -1em;
  color: rgb(226, 67, 41);
}
.icon-meetup .path1:before {
  content: "\\e901";
  color: rgb(255, 255, 255);
}
.icon-meetup .path2:before {
  content: "\\e902";
  margin-left: -1.5em;
  color: rgb(240, 1, 1);
}
.icon-meetup .path3:before {
  content: "\\e903";
  margin-left: -1.5em;
  color: rgb(3, 3, 3);
}
.icon-blogger:before {
  content: "\\e900";
}
.icon-exercism:before {
  content: "\\e601";
}
.icon-telegram:before {
  content: "\\e904";
}
.icon-flickr:before {
  content: "\\f16e";
}
.icon-medium:before {
  content: "\\f23a";
}
.icon-heart:before {
  content: "\\f004";
}
.icon-book:before {
  content: "\\f02d";
}
.icon-linkedin:before {
  content: "\\f08c";
}
.icon-twitter:before {
  content: "\\f099";
}
.icon-github:before {
  content: "\\f09b";
}
.icon-link:before {
  content: "\\f0c1";
}
.icon-bars:before {
  content: "\\f0c9";
}
.icon-pinterest:before {
  content: "\\f0d2";
}
.icon-googleplus:before {
  content: "\\f0d5";
}
.icon-circle:before {
  content: "\\f111";
}
.icon-code:before {
  content: "\\f121";
}
.icon-youtube:before {
  content: "\\f167";
}
.icon-stackoverflow:before {
  content: "\\f16c";
}
.icon-bitbucket:before {
  content: "\\f171";
}
.icon-tumblr:before {
  content: "\\f173";
}
.icon-dribbble:before {
  content: "\\f17d";
}
.icon-skype:before {
  content: "\\f17e";
}
.icon-foursquare:before {
  content: "\\f180";
}
.icon-gittip:before {
  content: "\\f184";
}
.icon-gratipay:before {
  content: "\\f184";
}
.icon-stackexchange:before {
  content: "\\f18d";
}
.icon-vimeo:before {
  content: "\\f194";
}
.icon-graduation-cap:before {
  content: "\\f19d";
}
.icon-language:before {
  content: "\\f1ab";
}
.icon-child:before {
  content: "\\f1ae";
}
.icon-behance:before {
  content: "\\f1b5";
}
.icon-spotify:before {
  content: "\\f1bc";
}
.icon-soundcloud:before {
  content: "\\f1be";
}
.icon-codepen:before {
  content: "\\f1cb";
}
.icon-hackernews:before {
  content: "\\f1d4";
}
.icon-lastfm:before {
  content: "\\f202";
}
.icon-angellist:before {
  content: "\\f209";
}
.icon-facebook:before {
  content: "\\f230";
}
.icon-instagram:before {
  content: "\\e905";
}
.icon-trophy:before {
  content: "\\e605";
}
.icon-office:before {
  content: "\\e606";
}
.icon-clock:before {
  content: "\\e60a";
}
.icon-reddit:before {
  content: "\\e609";
}
.icon-profile:before {
  content: "\\e600";
}
.icon-tools:before {
  content: "\\e034";
}
.icon-location:before {
  content: "\\e602";
}
.icon-mail:before {
  content: "\\e603";
}
.icon-phone:before {
  content: "\\e03f";
}
.icon-newspaper:before {
  content: "\\e607";
}
.icon-chevron-down:before {
  content: "\\e60c";
}
.icon-chevron-up:before {
  content: "\\e60d";
}
.icon-dots-three-horizontal:before {
  content: "\\e60b";
}
.icon-thumbs-up:before {
  content: "\\e604";
}
.icon-board:before {
  content: "\\e608";
}

.relative {
  position: relative;
}
.clear-margin {
  margin: 0;
}
.space-top {
  margin-top: 10px;
}
.space-right {
  margin-right: 10px;
}
.space-bottom {
  margin-bottom: 10px;
}
.mr-5 {
  margin-right: 5px;
}
.mr-10 {
  margin-right: 10px;
}
.ml-5 {
  margin-left: 5px;
}
.labels {
  line-height: 2;
}
.label-keyword {
  display: inline-block;
  background: #7eb0db;
  color: white;
  font-size: 0.9em;
  padding: 5px;
  border: 1px solid #357ebd;
  margin-right: 5px;
}
.label-keyword:last-child {
  margin-right: 0;
}
.link-disguise {
  color: inherit;
}
.link-disguise:hover {
  color: inherit;
}
.clear-margin {
  margin: 0;
}
@media (max-width: 992px) {
  .clear-margin-sm {
    margin-bottom: 0;
  }
}
.fs-lg {
  font-size: 1.33333333em;
  line-height: 0.75em;
  vertical-align: -15%;
}
.fs-2x {
  font-size: 2em;
}
.fs-3x {
  font-size: 3em;
}
.fs-4x {
  font-size: 4em;
}
.btn-circle-sm {
  width: 28px;
  height: 28px;
  line-height: 28px;
  border-radius: 50%;
  text-align: center;
  padding: 0;
  outline: none !important;
}
/* the version when the icon file is last updated */
@font-face {
  font-family: 'jst-elegant';
  src: url("//unpkg.com/jsonresume-theme-elegant@1.12.0/assets/icomoon/fonts/icomoon.eot?f218wo");
  src: url("//unpkg.com/jsonresume-theme-elegant@1.12.0/assets/icomoon/fonts/icomoon.eot?f218wo#iefix") format('embedded-opentype'), url("//unpkg.com/jsonresume-theme-elegant@1.12.0/assets/icomoon/fonts/icomoon.ttf?f218wo") format('truetype'), url("//unpkg.com/jsonresume-theme-elegant@1.12.0/assets/icomoon/fonts/icomoon.woff?f218wo") format('woff'), url("//unpkg.com/jsonresume-theme-elegant@1.12.0/assets/icomoon/fonts/icomoon.svg?f218wo#icomoon") format('svg');
  font-weight: normal;
  font-style: normal;
}
[class^="icon-"],
[class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'jst-elegant' !important;
}
body {
  font-family: 'Lato';
  background: #f0f0f0;
  color: #333;
}
.main {
  padding: 5px;
}
.card {
  background: white;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  min-height: 300px;
  padding: 10px 0;
}
.card-nested {
  min-height: 0;
  border-width: 1px 0 0 0;
}
.card-nested:before,
.card-nested:after {
  content: " ";
  display: table;
}
.card-nested:after {
  clear: both;
}
@media (max-width: 480px) {
  .card-nested {
    padding: 5px 0;
  }
}
.background-card {
  padding: 10px 20px;
}
.card-wrapper {
  padding: 5px;
}
@media (max-width: 992px) {
  .card-wrapper {
    float: none !important;
  }
}
.background-details .detail {
  display: table;
}
.background-details .detail .icon {
  min-width: 45px;
  max-width: 45px;
  text-align: center;
}
.background-details .detail .info {
  width: 100%;
}
.background-details .detail .title,
.background-details .detail .icon {
  color: #707070;
}
.background-details .detail .mobile-title {
  display: none;
}
@media (max-width: 480px) {
  .background-details .detail .mobile-title {
    display: inline-block;
    margin-left: 5px;
    font-weight: bold;
    text-transform: uppercase;
    vertical-align: middle;
  }
}
.background-details .detail .icon,
.background-details .detail .info {
  display: table-cell;
  padding: 0 10px;
}
@media (max-width: 480px) {
  .background-details .detail {
    display: block;
  }
  .background-details .detail .icon {
    max-width: inherit;
    min-width: inherit;
    text-align: left;
  }
  .background-details .detail .icon,
  .background-details .detail .info {
    display: block;
    padding: 10px 0;
  }
  .background-details .detail .title {
    display: none;
  }
}
.info .content.has-sidebar {
  width: 80%;
  box-sizing: border-box;
  float: left;
  padding: 0 10px;
  border-right: 1px solid #cdcdcd;
}
@media (max-width: 992px) {
  .info .content.has-sidebar {
    width: 100%;
    border-right: 0;
  }
}
@media (max-width: 480px) {
  .info .content.has-sidebar {
    padding: 0 2px;
  }
}
.info .sidebar {
  margin-left: 80%;
  box-sizing: border-box;
  padding: 10px;
}
@media (max-width: 480px) {
  ul {
    padding-left: 25px;
  }
}
.current-event {
  font-size: 8px;
  color: #5ACE24;
  position: absolute;
  right: 100%;
  top: 4px;
  left: -10px;
}
.mop-wrapper > p:last-child {
  margin: 0;
}
/*
    Credits: http://codyhouse.co/demo/smart-fixed-navigation/index.html
*/
.floating-nav-trigger {
  width: 50px;
  height: 50px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.24);
  -webkit-transition: background-color 0.5s ease;
  -o-transition: background-color 0.5s ease;
  transition: background-color 0.5s ease;
  display: block;
  border-radius: 50%;
  text-align: center;
  background-color: white;
  font-size: 1.5em;
  color: #357ebd;
  z-index: 100;
  position: fixed;
  bottom: 10px;
  right: 10px;
  text-decoration: none !important;
}
.floating-nav-trigger > [class^="icon-"],
.floating-nav-trigger [class*=" icon-"],
.floating-nav-trigger > .close-icon {
  line-height: 50px;
}
.floating-nav-trigger .close-icon {
  display: none;
}
.floating-nav-trigger:hover {
  color: #1f496e;
  background-color: #e6e6e6;
}
.floating-nav-trigger.is-open {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.floating-nav-trigger.is-open .close-icon {
  display: inherit;
}
.floating-nav-trigger.is-open .icon-bars {
  display: none;
}
.floating-nav-trigger.is-open:hover {
  background-color: white;
}
.floating-nav {
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
  -webkit-transform-origin: 100% 100%;
  -moz-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
  -webkit-transition: transform 0.3s, visibility 0s 0.3s;
  -o-transition: transform 0.3s, visibility 0s 0.3s;
  transition: transform 0.3s, visibility 0s 0.3s;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.24);
  position: fixed;
  z-index: 50;
  right: 10px;
  bottom: 10px;
  background-color: white;
  width: 90%;
  max-width: 400px;
  visibility: hidden;
  overflow: hidden;
}
.floating-nav ul {
  font-size: 1.2em;
  margin: 0;
}
.floating-nav ul li {
  border-bottom: 1px solid #eff2f6;
}
.floating-nav ul li a {
  padding: 20px;
  text-decoration: none;
  color: #357ebd;
  display: block;
}
.floating-nav ul li a:hover {
  color: #1f496e;
}
.floating-nav ul li:last-child {
  border-bottom: 0;
}
.floating-nav.is-visible {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: transform 0.3s, visibility 0s 0s;
  -o-transition: transform 0.3s, visibility 0s 0s;
  transition: transform 0.3s, visibility 0s 0s;
  visibility: visible;
}
@media (max-width: 992px) {
  .profile-card-wrapper {
    position: relative;
  }
}
.profile-card-wrapper .profile-card {
  padding: 10px;
}
.profile-pic {
  padding: 20px 0;
}
@media (max-width: 992px) {
  .profile-pic {
    padding: 10px 0;
  }
}
.profile-pic img {
  width: 100px;
  height: 100px;
}
@media (max-width: 992px) {
  .name {
    margin-top: 10px;
  }
}
@media (max-width: 768px) {
  .contact-details {
    text-align: center;
  }
}
.contact-details .detail {
  display: table;
  padding: 10px 0;
}
.contact-details .detail .icon {
  padding: 0 10px;
  color: #707070;
}
@media (max-width: 992px) {
  .contact-details .detail .icon {
    padding: 0 5px 0 0;
  }
}
.contact-details .detail .info {
  font-size: 0.8em;
}
.contact-details .detail .icon,
.contact-details .detail .info {
  display: table-cell;
  vertical-align: middle;
}
@media (max-width: 768px) {
  .contact-details .detail {
    position: relative;
    float: left;
    width: 100%;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media (max-width: 992px) {
  .contact-details .detail {
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    padding: 10px;
  }
  .contact-details .detail .icon,
  .contact-details .detail .info {
    display: inline-block;
  }
}
@media (max-width: 992px) and (min-width: 768px) {
  .contact-details .detail {
    float: left;
    width: 25%;
  }
}
.social-links {
  line-height: 2.5;
}
.social-link {
  margin-left: 5px;
  min-width: 35px;
  display: inline-block;
}
.social-link:first-child {
  margin-left: 0;
}
.social-link:hover {
  text-decoration: none;
}
.link-github {
  color: #454545;
}
.link-github:hover,
.link-github:focus {
  text-decoration: none;
  color: #2b2b2b;
}
.link-twitter {
  color: #33ccff;
}
.link-twitter:hover,
.link-twitter:focus {
  text-decoration: none;
  color: #00bfff;
}
.link-blog {
  color: #f36f24;
}
.link-blog:hover,
.link-blog:focus {
  text-decoration: none;
  color: #d8560c;
}
.link-linkedin {
  color: #007bb6;
}
.link-linkedin:hover,
.link-linkedin:focus {
  text-decoration: none;
  color: #005983;
}
.link-skype {
  color: #12A5F4;
}
.link-skype:hover,
.link-skype:focus {
  text-decoration: none;
  color: #0986ca;
}
.link-instagram {
  color: #e4405f;
}
.link-instagram:hover,
.link-instagram:focus {
  text-decoration: none;
  color: #d31e40;
}
.link-stackoverflow {
  color: #8e8e92;
}
.link-stackoverflow:hover,
.link-stackoverflow:focus {
  text-decoration: none;
  color: #747479;
}
.link-stackexchange {
  color: #62b0df;
}
.link-stackexchange:hover,
.link-stackexchange:focus {
  text-decoration: none;
  color: #389bd6;
}
.link-lastfm {
  color: #d12127;
}
.link-lastfm:hover,
.link-lastfm:focus {
  text-decoration: none;
  color: #a51a1f;
}
.link-soundcloud {
  color: #e8822d;
}
.link-soundcloud:hover,
.link-soundcloud:focus {
  text-decoration: none;
  color: #cc6916;
}
.link-googleplus {
  color: #dd4b39;
}
.link-googleplus:hover,
.link-googleplus:focus {
  text-decoration: none;
  color: #c23321;
}
.link-youtube {
  color: #dd4b39;
}
.link-youtube:hover,
.link-youtube:focus {
  text-decoration: none;
  color: #c23321;
}
.link-pinterest {
  color: #bd091f;
}
.link-pinterest:hover,
.link-pinterest:focus {
  text-decoration: none;
  color: #8c0717;
}
.link-gratipay {
  color: #630;
}
.link-gratipay:hover,
.link-gratipay:focus {
  text-decoration: none;
  color: #331a00;
}
.link-vimeo {
  color: #17b3e8;
}
.link-vimeo:hover,
.link-vimeo:focus {
  text-decoration: none;
  color: #128fba;
}
.link-behance {
  color: #2c98cf;
}
.link-behance:hover,
.link-behance:focus {
  text-decoration: none;
  color: #2379a5;
}
.link-codepen {
  color: #1c1c1c;
}
.link-codepen:hover,
.link-codepen:focus {
  text-decoration: none;
  color: #020202;
}
.link-foursquare {
  color: #fa4778;
}
.link-foursquare:hover,
.link-foursquare:focus {
  text-decoration: none;
  color: #f91554;
}
.link-reddit {
  color: #545454;
}
.link-reddit:hover,
.link-reddit:focus {
  text-decoration: none;
  color: #3b3b3b;
}
.link-spotify {
  color: #acd200;
}
.link-spotify:hover,
.link-spotify:focus {
  text-decoration: none;
  color: #829f00;
}
.link-tumblr {
  color: #2d4661;
}
.link-tumblr:hover,
.link-tumblr:focus {
  text-decoration: none;
  color: #1d2d3e;
}
.link-dribbble {
  color: #ce366f;
}
.link-dribbble:hover,
.link-dribbble:focus {
  text-decoration: none;
  color: #a82959;
}
.link-facebook {
  color: #4b6daa;
}
.link-facebook:hover,
.link-facebook:focus {
  text-decoration: none;
  color: #3b5687;
}
.link-angellist {
  color: black;
}
.link-angellist:hover,
.link-angellist:focus {
  text-decoration: none;
  color: #000000;
}
.link-bitbucket {
  color: #205081;
}
.link-bitbucket:hover,
.link-bitbucket:focus {
  text-decoration: none;
  color: #163758;
}
.link-hackernews {
  color: #ff6600;
}
.link-hackernews:hover,
.link-hackernews:focus {
  text-decoration: none;
  color: #cc5200;
}
.link-exercism {
  color: #d81d4e;
}
.link-exercism:hover,
.link-exercism:focus {
  text-decoration: none;
  color: #ab173e;
}
.link-blogger {
  color: #FF9234;
}
.link-blogger:hover,
.link-blogger:focus {
  text-decoration: none;
  color: #ff7701;
}
.link-medium {
  color: #00AB6C;
}
.link-medium:hover,
.link-medium:focus {
  text-decoration: none;
  color: #00784c;
}
.link-flickr {
  color: black;
}
.link-flickr:hover,
.link-flickr:focus {
  text-decoration: none;
  color: #000000;
}
.link-telegram {
  color: #3BABDD;
}
.link-telegram:hover,
.link-telegram:focus {
  text-decoration: none;
  color: #2291c3;
}
.card-skills {
  position: relative;
}
.skill-level {
  border-radius: 3px;
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 0;
  width: 10px;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.2);
}
.skill-level .skill-progress {
  position: absolute;
  border-radius: 3px;
  bottom: 0;
  width: 100%;
  -webkit-transition: height 1s ease;
}
.skill-level .skill-progress.beginner {
  height: 50%;
  background: #e74c3c;
}
.skill-level .skill-progress.intermediate {
  height: 70%;
  background: #f1c40f;
}
.skill-level .skill-progress.advanced {
  height: 80%;
  background: #428bca;
}
.skill-level .skill-progress.master {
  height: 95%;
  background: #5cb85c;
}
.skill-info {
  margin-left: 15px;
}
@media (max-width: 480px) {
  .skill-info {
    margin-left: 20px;
  }
}
@media (max-width: 768px) {
  .quote {
    font-size: inherit;
  }
}
.icon-meetup .path2:before {
  margin-left: 0;
}
@media print {
  a[href]:after {
    content: none !important;
  }
  .profile-card {
    text-align: center;
  }
  .profile-pic {
    display: inline-block;
    vertical-align: middle;
  }
  .profile-pic img {
    border-radius: 0;
  }
  .name-and-profession {
    display: inline-block;
    vertical-align: middle;
    margin-left: 15px;
  }
  .contact-details .detail {
    position: relative;
    float: left;
    width: 25%;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    padding: 0;
  }
  .floating-nav,
  .floating-nav-trigger {
    display: none;
  }
  .pagebreak {
    page-break-before: always;
  }
}

@media print {
  .card.profile-card hr,
  .card.profile-card .profile-pic,
  .card.profile-card .social-links {
    display: none;
  }

  .card.profile-card {
    min-height: initial;
  }

  .contact-details {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
`,"assets/icomoon/Read Me.txt":`Open *demo.html* to see a list of all the glyphs in your font along with their codes/ligatures.

To use the generated font in desktop programs, you can install the TTF font. In order to copy the character associated with each icon, refer to the text box at the bottom right corner of each glyph in demo.html. The character inside this text box may be invisible; but it can still be copied. See this guide for more info: https://icomoon.io/#docs/local-fonts

You won't need any of the files located under the *demo-files* directory when including the generated font in your own projects.

You can import *selection.json* back to the IcoMoon app using the *Import Icons* button (or via Main Menu \u2192 Manage Projects) to retrieve your icon selection.
`,"assets/icomoon/demo-files/demo.css":`body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  font-size: 1em;
  line-height: 1.5;
  color: #555;
  background: #fff;
}
h1 {
  font-size: 1.5em;
  font-weight: normal;
}
small {
  font-size: .66666667em;
}
a {
  color: #e74c3c;
  text-decoration: none;
}
a:hover, a:focus {
  box-shadow: 0 1px #e74c3c;
}
.bshadow0, input {
  box-shadow: inset 0 -2px #e7e7e7;
}
input:hover {
  box-shadow: inset 0 -2px #ccc;
}
input, fieldset {
  font-family: sans-serif;
  font-size: 1em;
  margin: 0;
  padding: 0;
  border: 0;
}
input {
  color: inherit;
  line-height: 1.5;
  height: 1.5em;
  padding: .25em 0;
}
input:focus {
  outline: none;
  box-shadow: inset 0 -2px #449fdb;
}
.glyph {
  font-size: 16px;
  width: 15em;
  padding-bottom: 1em;
  margin-right: 4em;
  margin-bottom: 1em;
  float: left;
  overflow: hidden;
}
.liga {
  width: 80%;
  width: calc(100% - 2.5em);
}
.talign-right {
  text-align: right;
}
.talign-center {
  text-align: center;
}
.bgc1 {
  background: #f1f1f1;
}
.fgc1 {
  color: #999;
}
.fgc0 {
  color: #000;
}
p {
  margin-top: 1em;
  margin-bottom: 1em;
}
.mvm {
  margin-top: .75em;
  margin-bottom: .75em;
}
.mtn {
  margin-top: 0;
}
.mtl, .mal {
  margin-top: 1.5em;
}
.mbl, .mal {
  margin-bottom: 1.5em;
}
.mal, .mhl {
  margin-left: 1.5em;
  margin-right: 1.5em;
}
.mhmm {
  margin-left: 1em;
  margin-right: 1em;
}
.mls {
  margin-left: .25em;
}
.ptl {
  padding-top: 1.5em;
}
.pbs, .pvs {
  padding-bottom: .25em;
}
.pvs, .pts {
  padding-top: .25em;
}
.unit {
  float: left;
}
.unitRight {
  float: right;
}
.size1of2 {
  width: 50%;
}
.size1of1 {
  width: 100%;
}
.clearfix:before, .clearfix:after {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
}
.hidden-true {
  display: none;
}
.textbox0 {
  width: 3em;
  background: #f1f1f1;
  padding: .25em .5em;
  line-height: 1.5;
  height: 1.5em;
}
#testDrive {
  display: block;
  padding-top: 24px;
  line-height: 1.5;
}
.fs0 {
  font-size: 16px;
}
.fs1 {
  font-size: 32px;
}
.fs2 {
  font-size: 28px;
}
.fs3 {
  font-size: 32px;
}
.fs4 {
  font-size: 32px;
}
.fs5 {
  font-size: 24px;
}
.fs6 {
  font-size: 20px;
}
.fs7 {
  font-size: 48px;
}

`,"assets/icomoon/demo.html":`<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>IcoMoon Demo</title>
    <meta name="description" content="An Icon Font Generated By IcoMoon.io">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="demo-files/demo.css">
    <link rel="stylesheet" href="style.css"></head>
<body>
    <div class="bgc1 clearfix">
        <h1 class="mhmm mvm"><span class="fgc1">Font Name:</span> icomoon <small class="fgc1">(Glyphs:&nbsp;55)</small></h1>
    </div>
    <div class="clearfix mhl ptl">
        <h1 class="mvm mtn fgc1">Grid Size: Unknown</h1>
        <div class="glyph fs1">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-gitlab">
                <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span>
                </span>
                <span class="mls"> icon-gitlab</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e906" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe906;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs1">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-meetup">
                <span class="path1"></span><span class="path2"></span><span class="path3"></span>
                </span>
                <span class="mls"> icon-meetup</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e901" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe901;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs1">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-blogger">
                
                </span>
                <span class="mls"> icon-blogger</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e900" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe900;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs1">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-exercism">
                
                </span>
                <span class="mls"> icon-exercism</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e601" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe601;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
    </div>
    <div class="clearfix mhl ptl">
        <h1 class="mvm mtn fgc1">Grid Size: 14</h1>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-telegram">
                
                </span>
                <span class="mls"> icon-telegram</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e904" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe904;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-flickr">
                
                </span>
                <span class="mls"> icon-flickr</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f16e" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf16e;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-medium">
                
                </span>
                <span class="mls"> icon-medium</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f23a" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf23a;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-heart">
                
                </span>
                <span class="mls"> icon-heart</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f004" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf004;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-book">
                
                </span>
                <span class="mls"> icon-book</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f02d" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf02d;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-linkedin">
                
                </span>
                <span class="mls"> icon-linkedin</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f08c" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf08c;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-twitter">
                
                </span>
                <span class="mls"> icon-twitter</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f099" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf099;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-github">
                
                </span>
                <span class="mls"> icon-github</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f09b" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf09b;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-link">
                
                </span>
                <span class="mls"> icon-link</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f0c1" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf0c1;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-bars">
                
                </span>
                <span class="mls"> icon-bars</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f0c9" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf0c9;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-pinterest">
                
                </span>
                <span class="mls"> icon-pinterest</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f0d2" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf0d2;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-googleplus">
                
                </span>
                <span class="mls"> icon-googleplus</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f0d5" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf0d5;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-circle">
                
                </span>
                <span class="mls"> icon-circle</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f111" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf111;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-code">
                
                </span>
                <span class="mls"> icon-code</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f121" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf121;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-youtube">
                
                </span>
                <span class="mls"> icon-youtube</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f167" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf167;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-stackoverflow">
                
                </span>
                <span class="mls"> icon-stackoverflow</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f16c" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf16c;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-bitbucket">
                
                </span>
                <span class="mls"> icon-bitbucket</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f171" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf171;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-tumblr">
                
                </span>
                <span class="mls"> icon-tumblr</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f173" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf173;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-dribbble">
                
                </span>
                <span class="mls"> icon-dribbble</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f17d" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf17d;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-skype">
                
                </span>
                <span class="mls"> icon-skype</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f17e" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf17e;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-foursquare">
                
                </span>
                <span class="mls"> icon-foursquare</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f180" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf180;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-gittip">
                
                </span>
                <span class="mls"> icon-gittip</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f184" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf184;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-gratipay">
                
                </span>
                <span class="mls"> icon-gratipay</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f184" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf184;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-stackexchange">
                
                </span>
                <span class="mls"> icon-stackexchange</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f18d" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf18d;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-vimeo">
                
                </span>
                <span class="mls"> icon-vimeo</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f194" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf194;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-graduation-cap">
                
                </span>
                <span class="mls"> icon-graduation-cap</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f19d" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf19d;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-language">
                
                </span>
                <span class="mls"> icon-language</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f1ab" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf1ab;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-child">
                
                </span>
                <span class="mls"> icon-child</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f1ae" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf1ae;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-behance">
                
                </span>
                <span class="mls"> icon-behance</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f1b5" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf1b5;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-spotify">
                
                </span>
                <span class="mls"> icon-spotify</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f1bc" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf1bc;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-soundcloud">
                
                </span>
                <span class="mls"> icon-soundcloud</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f1be" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf1be;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-codepen">
                
                </span>
                <span class="mls"> icon-codepen</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f1cb" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf1cb;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-hackernews">
                
                </span>
                <span class="mls"> icon-hackernews</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f1d4" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf1d4;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-lastfm">
                
                </span>
                <span class="mls"> icon-lastfm</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f202" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf202;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-angellist">
                
                </span>
                <span class="mls"> icon-angellist</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f209" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf209;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs2">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-facebook">
                
                </span>
                <span class="mls"> icon-facebook</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="f230" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xf230;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
    </div>
    <div class="clearfix mhl ptl">
        <h1 class="mvm mtn fgc1">Grid Size: 16</h1>
        <div class="glyph fs3">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-instagram">
                
                </span>
                <span class="mls"> icon-instagram</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e905" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe905;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs3">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-trophy">
                
                </span>
                <span class="mls"> icon-trophy</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e605" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe605;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs3">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-office">
                
                </span>
                <span class="mls"> icon-office</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e606" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe606;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="office, buildings" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs3">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-clock">
                
                </span>
                <span class="mls"> icon-clock</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e60a" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe60a;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="clock, time2" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs3">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-reddit">
                
                </span>
                <span class="mls"> icon-reddit</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e609" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe609;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="reddit, brand62" class="liga unitRight" />
            </div>
        </div>
    </div>
    <div class="clearfix mhl ptl">
        <h1 class="mvm mtn fgc1">Grid Size: 32</h1>
        <div class="glyph fs4">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-profile">
                
                </span>
                <span class="mls"> icon-profile</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e600" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe600;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs4">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-tools">
                
                </span>
                <span class="mls"> icon-tools</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e034" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe034;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs4">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-location">
                
                </span>
                <span class="mls"> icon-location</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e602" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe602;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs4">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-mail">
                
                </span>
                <span class="mls"> icon-mail</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e603" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe603;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
    </div>
    <div class="clearfix mhl ptl">
        <h1 class="mvm mtn fgc1">Grid Size: 24</h1>
        <div class="glyph fs5">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-phone">
                
                </span>
                <span class="mls"> icon-phone</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e03f" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe03f;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="call" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs5">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-newspaper">
                
                </span>
                <span class="mls"> icon-newspaper</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e607" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe607;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
    </div>
    <div class="clearfix mhl ptl">
        <h1 class="mvm mtn fgc1">Grid Size: 20</h1>
        <div class="glyph fs6">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-chevron-down">
                
                </span>
                <span class="mls"> icon-chevron-down</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e60c" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe60c;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs6">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-chevron-up">
                
                </span>
                <span class="mls"> icon-chevron-up</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e60d" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe60d;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs6">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-dots-three-horizontal">
                
                </span>
                <span class="mls"> icon-dots-three-horizontal</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e60b" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe60b;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
        <div class="glyph fs6">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-thumbs-up">
                
                </span>
                <span class="mls"> icon-thumbs-up</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e604" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe604;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
    </div>
    <div class="clearfix mhl ptl">
        <h1 class="mvm mtn fgc1">Grid Size: 48</h1>
        <div class="glyph fs7">
            <div class="clearfix bshadow0 pbs">
                <span class="icon-board">
                
                </span>
                <span class="mls"> icon-board</span>
            </div>
            <fieldset class="fs0 size1of1 clearfix hidden-false">
                <input type="text" readonly value="e608" class="unit size1of2" />
                <input type="text" maxlength="1" readonly value="&#xe608;" class="unitRight size1of2 talign-right" />
            </fieldset>
            <div class="fs0 bshadow0 clearfix hidden-true">
                <span class="unit pvs fgc1">liga: </span>
                <input type="text" readonly value="" class="liga unitRight" />
            </div>
        </div>
    </div>

    <!--[if gt IE 8]><!-->
    <div class="mhl clearfix mbl">
        <h1>Font Test Drive</h1>
        <label>
            Font Size: <input id="fontSize" type="number" class="textbox0 mbm"
            min="8" value="48" />
            px
        </label>
        <input id="testText" type="text" class="phl size1of1 mvl"
        placeholder="Type some text to test..." value=""/>
        <div id="testDrive" class="icon-">&nbsp;
        </div>
    </div>
    <!--<![endif]-->
    <div class="bgc1 clearfix">
        <p class="mhl">Generated by <a href="https://icomoon.io/app">IcoMoon</a></p>
    </div>

    <script src="demo-files/demo.js"><\/script>
</body>
</html>
`,"assets/icomoon/fonts/icomoon.svg":`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" >
<svg xmlns="http://www.w3.org/2000/svg">
<metadata>Generated by IcoMoon</metadata>
<defs>
<font id="icomoon" horiz-adv-x="1024">
<font-face units-per-em="1024" ascent="960" descent="-64" />
<missing-glyph horiz-adv-x="1024" />
<glyph unicode="&#x20;" horiz-adv-x="512" d="" />
<glyph unicode="&#xe034;" glyph-name="tools" d="M907.328 916.672c3.68 3.68 5.344 8.928 4.448 14.048s-4.224 9.504-8.96 11.712c-73.312 34.56-160.32 19.392-217.536-38.112-54.336-54.688-73.312-140.576-47.968-212.384l-369.248-369.248c-20.064 7.168-41.504 10.752-63.872 10.752-54.848 0-108.032-21.824-145.888-59.904-57.024-57.344-73.088-142.080-40.992-215.904 2.112-4.864 6.496-8.384 11.712-9.344 5.248-0.992 10.592 0.672 14.304 4.448l111.712 112.288c7.36 7.424 19.232 8.416 25.376 2.176l48.224-50.464c7.008-7.072 6.688-17.984-0.704-25.44l-111.296-112c-3.68-3.68-5.312-8.928-4.416-14.048s4.224-9.472 8.928-11.68c26.528-12.512 54.432-18.816 82.912-18.816 50.304 0 98.080 20.224 134.624 56.96 54.336 54.656 73.312 140.544 47.936 212.352l369.248 369.28c20.096-7.168 41.536-10.752 63.904-10.752 54.848 0 108.032 21.824 145.888 59.904 57.024 57.344 73.088 142.080 40.992 215.904-2.112 4.864-6.496 8.384-11.712 9.344-5.152 0.896-10.56-0.672-14.304-4.448l-111.712-112.288c-6.88-6.912-18.56-6.848-25.632 0.32l-47.968 47.968c-7.232 7.264-7.2 18.176-0.032 25.408l112.032 111.968zM772.672 756.672l47.968-47.968c19.168-19.264 52-19.36 70.976-0.288l93.76 94.208c15.008-55.712-0.512-115.488-42.368-157.632-31.904-32.096-76.768-50.464-123.2-50.464-21.856 0-42.56 4.096-61.536 12.16-6.016 2.592-12.96 1.184-17.568-3.392l-384-384c-4.608-4.608-5.952-11.52-3.424-17.504 25.696-61.12 10.048-140-37.216-187.552-42.272-42.496-103.808-57.632-159.52-40.256l94.112 94.72c19.872 20 20.192 51.008 0.928 70.336l-48.192 50.464c-18.592 18.72-51.648 17.568-70.976-1.984l-93.76-94.208c-15.008 55.712 0.512 115.488 42.368 157.632 31.904 32.096 76.768 50.464 123.2 50.464 21.856 0 42.56-4.096 61.536-12.16 5.984-2.624 12.96-1.184 17.568 3.392l384 384c4.608 4.608 5.952 11.52 3.424 17.504-25.696 61.12-10.048 140.032 37.216 187.584 42.24 42.496 103.744 57.536 159.424 40.256l-94.72-94.752c-19.712-19.744-19.712-50.72 0-70.56zM934.72-20.704c-7.072-7.104-19.328-7.104-26.464 0.064l-320.96 320c-6.24 6.176-16.384 6.208-22.624-0.064-6.24-6.24-6.208-16.384 0.032-22.624l320.928-319.936c9.6-9.632 22.336-14.944 35.904-14.944 0 0 0 0 0 0 13.568 0 26.304 5.312 36.096 15.168l45.728 47.776c19.68 19.776 19.68 50.784-0.032 70.592l-320 320c-6.24 6.24-16.384 6.24-22.624 0s-6.24-16.384 0-22.624l319.968-319.968c7.328-7.36 7.328-18.048-0.224-25.664l-45.728-47.776zM187.328 859.328l-96 96c-6.24 6.24-16.384 6.24-22.624 0l-64-64c-6.24-6.24-6.24-16.384 0-22.624l96-96c3.104-3.136 7.2-4.704 11.296-4.704s8.192 1.568 11.328 4.672l20.672 20.704 244.672-244.672c3.136-3.136 7.232-4.704 11.328-4.704s8.192 1.568 11.328 4.672c6.24 6.24 6.24 16.384 0 22.624l-244.704 244.704 20.672 20.672c6.272 6.272 6.272 16.384 0.032 22.656zM112 806.624l-73.376 73.376 41.376 41.376 73.376-73.376-41.376-41.376z" />
<glyph unicode="&#xe03f;" glyph-name="phone" d="M282 478.667q96-186 282-282l94 94q20 20 44 10 72-24 152-24 18 0 30-12t12-30v-150q0-18-12-30t-30-12q-300 0-513 213t-213 513q0 18 12 30t30 12h150q18 0 30-12t12-30q0-80 24-152 8-26-10-44z" />
<glyph unicode="&#xe600;" glyph-name="profile" d="M896 672h-62.656v94.016l-129.344 1.984 0.672-96h-388.672l2.656 96-126.656-1.984v-96l-64 1.984c-35.328 0-64-28.672-64-64v-448c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64v448c0 35.328-28.672 64-64 64zM736 736h64v-128h-64v128zM320 518.016c38.656 0 70.016-41.184 70.016-92s-31.36-92-70.016-92-70.016 41.184-70.016 92 31.36 92 70.016 92zM224 736h64v-128h-64v128zM181.344 225.664c0 0 7.584 60.864 24.832 72.352 17.216 11.488 66.88 19.136 66.88 19.136s32.192-34.4 45.888-34.4c13.664 0 45.856 34.4 45.856 34.4s49.664-7.616 66.912-19.136c20.256-13.504 25.312-72.352 25.312-72.352h-275.68zM832 256h-288v32h288v-32zM832 320h-288v32h288v-32zM832 384h-288v32h288v-32zM832 448h-288v32h288v-32z" />
<glyph unicode="&#xe601;" glyph-name="exercism" d="M616.2 629s6.6-67.6-36.6-104.2c-17.4 11-39.2 17.2-65 17.2-23.8 0-47.2-6.8-67.4-19.4-46.2 36.2-39.2 106.4-39.2 106.4-51.2-99.8 2.6-138.8 3.8-139.8-14.2-20.4-23-46.2-23-76.4 0-81 59.4-128.8 133.4-128.8 37.8 0 70 12.6 95.6 28.6l-17.6 31.6c-22.2-13-44.8-21.2-71.4-21.2-49.4 0-85.6 28.6-88.6 77h185.2c1 6 2.6 15.6 2.6 25.6 0 24.2-5.2 45.8-15.2 63.6 4.8 3.8 52.6 43.8 3.4 139.8zM439.6 434.4c6.6 43.8 39.2 68.4 76 68.4 42.2 0 66-24.6 66-68.4h-142zM512 64c-211.8 0-384 172.2-384 384s172.2 384 384 384 384-172.2 384-384-172.2-384-384-384zM512 782.2c-184.4 0-334.2-150-334.2-334.2 0-184.4 150-334.2 334.2-334.2 184.4 0 334.2 150 334.2 334.2 0 184.4-149.8 334.2-334.2 334.2z" />
<glyph unicode="&#xe602;" glyph-name="location" d="M512.064 392.128c105.888 0 192 86.144 192 192s-86.112 192-192 192c-105.888 0-192-86.112-192-192s86.112-192 192-192zM512.064 744.128c88.256 0 160-71.744 160-160s-71.744-160-160-160c-88.256 0-160 71.744-160 160s71.744 160 160 160zM512 960c-211.776 0-384-170.112-384-384.032 0-224 192.032-453.152 332.032-614.208 0.512-0.64 22.976-25.76 50.752-25.76 0.064 0 2.336 0 2.464 0 27.744 0 50.24 25.12 50.752 25.76 140.064 161.056 332.064 390.176 332.064 614.208 0 213.92-172.256 384.032-384.064 384.032zM515.744 3.744c-0.672-0.64-2.624-2.048-4.32-3.136-0.32 0.864-2.688 2.752-4.128 4.256-117.28 134.944-315.296 362.688-315.296 571.104 0 176.448 143.584 320.032 320 320.032 176.512 0 320.064-143.584 320.064-320.064 0-208.384-198.016-436.128-316.32-572.192z" />
<glyph unicode="&#xe603;" glyph-name="mail" d="M896 800h-768c-70.688 0-128-57.344-128-128v-416c0-70.688 57.312-128 128-128h768c70.688 0 128 57.312 128 128v416c0 70.656-57.312 128-128 128zM64 632l223.968-168-223.968-168v336zM960 256c0-35.328-28.736-64-64-64h-768c-35.296 0-64 28.672-64 64l250.624 188 139.776-104.864c17.056-12.736 37.312-19.2 57.6-19.2 20.256 0 40.512 6.432 57.568 19.2l139.808 104.864 250.624-188zM960 296l-224 168 224 168v-336zM550.368 364.736c-11.168-8.384-24.416-12.8-38.368-12.8s-27.232 4.448-38.4 12.8l-409.6 307.264c0 35.296 28.704 64 64 64h768c35.264 0 64-28.704 64-64l-409.632-307.264z" />
<glyph unicode="&#xe604;" glyph-name="thumbs-up" d="M698.778 595.866c-6.81 18.176 181.197 186.061 71.578 322.099-25.651 31.795-112.691-152.32-236.288-235.674-68.198-45.978-226.867-143.872-226.867-197.99v-350.31c0-65.075 251.597-133.99 442.778-133.99 70.093 0 171.622 439.091 171.622 508.826 0 70.042-216.115 68.813-222.822 87.040zM256 591.002c-33.69 0-153.6-20.48-153.6-159.898v-248.218c0-139.315 119.91-154.675 153.6-154.675 33.638 0-51.2 29.286-51.2 115.712v326.298c0 90.522 84.838 120.781 51.2 120.781z" />
<glyph unicode="&#xe605;" glyph-name="trophy" d="M784 960h-544c-132.576 0-240-107.424-240-240s107.424-240 240-240h43.648c51.072-52.032 119.68-86.72 196.352-94.336v-321.664h-96l-128-128h512l-128 128h-96v321.664c76.672 7.616 145.28 42.304 196.352 94.336h43.648c132.576 0 240 107.424 240 240s-107.424 240-240 240zM64 720c0 80.448 54.272 147.52 128 168.544v-184.544c0-58.112 15.744-112.512 42.848-159.456-94.752 2.784-170.848 80.032-170.848 175.456zM789.152 544.544c27.104 46.944 42.848 101.344 42.848 159.456v184.544c73.728-20.992 128-88.096 128-168.544 0-95.424-76.096-172.672-170.848-175.456z" />
<glyph unicode="&#xe606;" glyph-name="office" d="M0-64h512v1024h-512v-1024zM320 832h128v-128h-128v128zM320 576h128v-128h-128v128zM320 320h128v-128h-128v128zM64 832h128v-128h-128v128zM64 576h128v-128h-128v128zM64 320h128v-128h-128v128zM576 640h448v-64h-448zM576-64h128v256h192v-256h128v576h-448z" />
<glyph unicode="&#xe607;" glyph-name="newspaper" d="M256 256h512v256h-512v-256zM298.667 469.334h426.667v-170.667h-426.667v170.667zM256 597.334h512v-42.667h-512zM256 213.334h213.333v-42.667h-213.333zM256 128h128v-42.667h-128zM428.16 125.483h42.667v-42.667h-42.667zM554.667 213.334h213.333v-42.667h-213.333zM554.667 128h213.333v-42.667h-213.333zM853.333 768v40.149c0 49.451-42.581 87.851-147.84 87.851h-512c-70.571 0-108.16-59.904-108.16-130.517v-725.333c0-70.571 37.589-125.483 108.16-125.483h597.333c70.571 0 62.507 0 147.84 0v853.333h-85.333zM853.333-0h-659.84c-23.509 0-22.827 16.683-22.827 40.149v725.333c0 23.509-0.683 45.184 22.827 45.184h574.507v-42.667h-512v-85.333h597.333v-682.667z" />
<glyph unicode="&#xe608;" glyph-name="board" d="M501.334 277.974c-23.894 30.294-44.8 45.226-96.64 50.326-9.386 1.706-16.214 9.814-16.214 19.414 0 7.040 23.040 28.16 22.806 28.374 23.914 24.126 36.714 63.166 36.714 93.246 0 46.698-41.366 85.334-96 85.334-55.68 0-96-38.634-96-85.334 0-30.294 12.586-69.546 36.48-93.674 0 0 23.040-20.886 23.040-27.946 0-10.026-7.68-18.56-17.92-19.84-50.794-5.12-71.274-20.054-94.934-49.92-6.634-8.746-10.454-26.026-10.666-35.2v-40.106c0-17.706 14.698-32 32.854-32h254.294c18.154 0 32.854 14.294 32.854 32v40.106c-0.216 9.214-3.864 26.472-10.668 35.22zM757.334 512h-106.666c-29.44 0-53.334-23.894-53.334-53.334s23.894-53.334 53.334-53.334h106.666c29.44 0 53.334 23.894 53.334 53.334s-23.894 53.334-53.334 53.334zM757.334 320h-106.666c-29.44 0-53.334-23.894-53.334-53.334s23.894-53.334 53.334-53.334h106.666c29.44 0 53.334 23.894 53.334 53.334s-23.894 53.334-53.334 53.334zM0 64c0-47.146 38.186-85.334 85.334-85.334h853.334c47.146 0 85.334 38.186 85.334 85.334l-0.002 682.666c0 47.146-38.186 85.334-85.334 85.334h-256v38.4c0 26.026-20.906 46.934-46.932 46.934h-247.468c-26.026 0-46.932-20.908-46.932-46.934v-38.4h-256c-47.146 0-85.334-38.186-85.334-85.334v-682.666zM153.6 725.334h187.734v-38.4c0-26.026 20.906-46.934 46.934-46.934h247.466c26.026 0 46.934 20.906 46.934 46.934l-0.002 38.4h187.734c26.026 0 46.934-20.906 46.934-46.934v-546.134c0-26.026-20.906-46.934-46.934-46.934l-716.8 0.002c-26.026 0-46.934 20.906-46.934 46.932v546.134c0 26.026 20.908 46.934 46.934 46.934z" />
<glyph unicode="&#xe609;" glyph-name="reddit" d="M256 320c0 35.346 28.654 64 64 64s64-28.654 64-64c0-35.346-28.654-64-64-64s-64 28.654-64 64zM640 320c0 35.346 28.654 64 64 64s64-28.654 64-64c0-35.346-28.654-64-64-64s-64 28.654-64 64zM643.112 183.222c16.482 12.986 40.376 10.154 53.364-6.332s10.152-40.378-6.334-53.366c-45.896-36.158-115.822-59.524-178.142-59.524-62.322 0-132.248 23.366-178.144 59.522-16.486 12.99-19.32 36.882-6.332 53.368 12.99 16.482 36.882 19.318 53.366 6.332 26.422-20.818 78.722-43.222 131.11-43.222s104.688 22.404 131.112 43.222zM1024 448c0 70.692-57.308 128-128 128-48.116 0-89.992-26.57-111.852-65.82-65.792 35.994-145.952 59.246-233.28 64.608l76.382 171.526 146.194-42.2c13.152-37.342 48.718-64.114 90.556-64.114 53.020 0 96 42.98 96 96s-42.98 96-96 96c-36.56 0-68.342-20.442-84.554-50.514l-162.906 47.024c-18.224 5.258-37.538-3.722-45.252-21.052l-103.77-233.026c-85.138-5.996-163.262-29.022-227.636-64.236-21.864 39.25-63.766 65.804-111.882 65.804-70.692 0-128-57.308-128-128 0-52.312 31.402-97.254 76.372-117.102-8.070-24.028-12.372-49.104-12.372-74.898 0-176.73 200.576-320 448-320 247.422 0 448 143.27 448 320 0 25.792-4.3 50.862-12.368 74.886 44.97 19.85 76.368 64.802 76.368 117.114zM864 772c19.882 0 36-16.118 36-36s-16.118-36-36-36-36 16.118-36 36 16.118 36 36 36zM64 448c0 35.29 28.71 64 64 64 25.508 0 47.572-15.004 57.846-36.646-33.448-25.366-61.166-54.626-81.666-86.738-23.524 9.47-40.18 32.512-40.18 59.384zM512 12c-205.45 0-372 109.242-372 244s166.55 244 372 244c205.45 0 372-109.242 372-244s-166.55-244-372-244zM919.82 388.616c-20.5 32.112-48.218 61.372-81.666 86.738 10.276 21.642 32.338 36.646 57.846 36.646 35.29 0 64-28.71 64-64 0-26.872-16.656-49.914-40.18-59.384z" />
<glyph unicode="&#xe60a;" glyph-name="clock" d="M658.744 210.744l-210.744 210.746v282.51h128v-229.49l173.256-173.254zM512 960c-282.77 0-512-229.23-512-512s229.23-512 512-512 512 229.23 512 512-229.23 512-512 512zM512 64c-212.078 0-384 171.922-384 384s171.922 384 384 384c212.078 0 384-171.922 384-384s-171.922-384-384-384z" />
<glyph unicode="&#xe60b;" glyph-name="dots-three-horizontal" d="M512.051 573.44c-62.208 0-112.691-50.432-112.691-112.64s50.483-112.64 112.691-112.64c62.208 0 112.589 50.432 112.589 112.64s-50.381 112.64-112.589 112.64zM153.651 573.44c-62.208 0-112.691-50.432-112.691-112.64s50.483-112.64 112.691-112.64c62.208 0 112.589 50.483 112.589 112.64s-50.381 112.64-112.589 112.64zM870.451 573.44c-62.208 0-112.691-50.432-112.691-112.64s50.483-112.64 112.691-112.64c62.208 0 112.589 50.432 112.589 112.64s-50.381 112.64-112.589 112.64z" />
<glyph unicode="&#xe60c;" glyph-name="chevron-down" d="M231.219 586.342c22.323 22.835 53.402 24.627 80.691 0l200.090-191.846 200.090 191.846c27.29 24.627 58.419 22.835 80.589 0 22.323-22.784 20.89-61.286 0-82.688-20.787-21.402-240.384-230.502-240.384-230.502-11.11-11.418-25.702-17.152-40.294-17.152s-29.184 5.734-40.397 17.152c0 0-219.494 209.101-240.384 230.502-20.941 21.402-22.323 59.904 0 82.688z" />
<glyph unicode="&#xe60d;" glyph-name="chevron-up" d="M792.781 335.258c-22.323-22.835-53.402-24.627-80.691 0l-200.090 191.846-200.090-191.846c-27.29-24.627-58.419-22.835-80.589 0-22.323 22.784-20.89 61.286 0 82.688 20.787 21.402 240.384 230.502 240.384 230.502 11.11 11.418 25.702 17.152 40.294 17.152s29.184-5.734 40.397-17.152c0 0 219.494-209.101 240.384-230.502 20.941-21.402 22.323-59.904 0-82.688z" />
<glyph unicode="&#xe900;" glyph-name="blogger" d="M928 960h-832c-52.8 0-96-43.2-96-96v-832c0-52.8 43.2-96 96-96h832c52.8 0 96 43.2 96 96v832c0 52.8-43.2 96-96 96zM896 312c0-137-111.4-248-249.4-248h-268.8c-138 0-249.8 111-249.8 248v272c0 137 111.8 248 249.8 248h125.8c138 0 248.4-103 248.4-240 1.8-25.6 25-48 51.2-48h43c27.6 0 49.6-29 49.6-56.4v-175.6zM704 320c0-35.2-28.8-64-64-64h-256c-35.2 0-64 28.8-64 64v0c0 35.2 28.8 64 64 64h256c35.2 0 64-28.8 64-64v0zM576 576c0-35.2-28.8-64-64-64h-128c-35.2 0-64 28.8-64 64v0c0 35.2 28.8 64 64 64h128c35.2 0 64-28.8 64-64v0z" />
<glyph unicode="&#xe901;" horiz-adv-x="1536" d="M7.088 701.831h1514.305v-657.357h-1514.305v657.357z" />
<glyph unicode="&#xe902;" horiz-adv-x="1536" d="M62.779-57.242c-20.502 7.884-44.267 30.405-54.946 52.075l-7.833 15.901v874.534l7.833 15.901c10.997 22.315 34.403 44.204 55.853 52.23l17.647 6.602h1373.337l18.219-6.815c21.895-8.195 46.010-30.892 56.158-52.863l6.955-15.055v-874.534l-6.958-15.055c-10.148-21.968-34.263-44.668-56.158-52.86l-18.216-6.818-687.584 0.169c-682.108 0.162-687.715 0.213-704.305 6.589zM1518.509 379.627v306.882h-1501.019v-613.764h1501.019v306.882zM1207.299 117.267c-6.109 4.535-16.785 62.963-21.199 116.001-2.15 25.81-3.25 29.365-11.48 37.052-13.070 12.212-10.86 28.214 3.899 28.214 5.559 0 8.853 10.758 11.2 36.571 3.132 34.492 17.589 88.506 30.59 114.306 15.688 31.133 55.983 65.371 76.937 65.371 6.869 0 25.32-6.001 47.947-15.592 3.498-1.482 10.377-4.312 15.287-6.287 11.528-4.637 23.434-30.154 26.172-56.085 2.43-23.008-2.662-53.63-12.609-75.859-15.36-34.32-80.578-92.554-112.942-100.848l-16.082-4.121 0.095-30.408c0.121-37.719 4.624-73.604 11.49-91.584 2.875-7.531 4.188-14.737 2.916-16.009-2.582-2.579-48.856-3.218-52.221-0.722v0zM1278.156 333.69c12.991 12.342 27.254 29.388 31.699 37.885 9.788 18.725 15.233 49.804 12.619 72.052-2.983 25.374-5.775 27.2-18.925 12.348-21.73-24.538-34.784-53.264-44.744-98.447-8.882-40.295-9.785-46.277-7.006-46.277 1.507 0.003 13.369 10.1 26.357 22.439zM876.779 287.738c-2.051 32.409-4.427 60.060-5.282 61.443s-12.647 3.524-26.201 4.754c-27.874 2.525-32.774 5.209-32.774 17.952 0 14.256 10.211 19.303 34.12 16.855l19.943-2.045-0.14 12.364c-0.076 6.802-1.507 23.1-3.177 36.218-12.234 96.068-14.514 164.231-6.23 186.025 2.544 6.691 5.088 7.963 15.932 7.963 12.466 0 41.787-12.123 46.061-19.043 1.11-1.794 2.729-42.251 3.603-89.899 2.045-111.578 2.073-104.089-0.49-116.052-1.972-9.184-1.444-10.335 4.729-10.335 5.708 0 6.767 1.558 5.925 8.745-0.865 7.422 0.261 8.895 7.47 9.728 6.729 0.779 12.819-3.142 29.413-18.944 11.509-10.962 20.928-21.615 20.928-23.676 0-4.557-11.277-7.098-56.307-12.695l-13.379-1.663 1.584-59.856c1.794-67.889 3.644-63.218-25.905-65.511l-16.098-1.25-3.724 58.921zM410.576 236.783c-1.062 2.764-1.962 7.416-2.007 10.335-0.041 2.916-3.74 13.891-8.214 24.385-9.079 21.278-24.808 71.057-30.144 95.404-5.985 27.292-12.956 49.839-14.832 47.963-0.992-0.989-2.964-30.074-4.385-64.633-1.418-34.558-4.465-69.273-6.767-77.143l-4.185-14.311-62.82-5.81-7.044 8.834c-3.877 4.859-16.021 23.721-26.993 41.911s-20.35 32.666-20.846 32.176c-0.49-0.493 1.065-14.943 3.463-32.11 2.401-17.166 3.651-33.061 2.783-35.325-2.792-7.273-34.25-18.74-50.166-18.289-14.683 0.42-17.815 6.516-22.522 43.873-7.88 62.524-8.749 80.727-6.437 134.596l2.283 53.203 14.015 3.749c22.547 6.030 47.61 4.875 54.491-2.512 3.206-3.444 18.581-30.99 34.164-61.217l28.335-54.956 4.013 30.211c6.045 45.53 26.7 114.090 40.9 135.756 5.308 8.103 5.813 8.198 32.676 6.134 32.049-2.465 36.845-5.642 43.281-28.688 14.361-51.404 19.252-72.036 33.719-142.244 3.473-16.848 8.453-36.705 11.070-44.127 2.62-7.422 4.764-16.133 4.764-19.357s3.578-16.823 7.95-30.218c8.036-24.624 9.674-32.685 5.858-28.872-1.151 1.151-4.016 0.496-6.37-1.453-3.396-2.824-36.899-11.687-46.055-12.186-1.129-0.060-2.916 2.153-3.978 4.92v0zM538.048 238.423c-15.099 3.552-21.663 7.028-43.075 22.811-24.624 18.152-28.535 28.977-28.965 80.231-0.439 51.9 1.52 70.669 10.256 98.31 8.011 25.342 25.454 46.713 54.383 66.62 19.644 13.519 21.418 13.608 60.225 2.973 14.737-4.042 19.431-6.964 23.358-14.562 10.097-19.523 13.414-127.482 4.366-142.12-3.142-5.088-51.241-5.378-73.191-0.452-6.828 1.536-13.201 2.003-14.164 1.043-0.96-0.96-1.714-11.884-1.676-24.271 0.083-26.716 6.891-44.146 22.312-57.121 9.4-7.909 12.164-8.65 25.101-6.72 7.995 1.193 18.209 4.335 22.703 6.98 11.045 6.507 40.397 0.738 50.389-9.897l6.936-7.381-16.845-6.395c-30.92-11.738-76.075-16.184-102.114-10.052v0zM558.112 419.379c0 17.491-1.266 31.801-2.811 31.801-3.282 0-15.684-29.403-19.456-46.131-2.283-10.119-1.759-11.868 4.268-14.298 17.217-6.945 18-5.702 18 28.627zM740.969 243.461c-47.104 5.995-64.045 14.826-83.481 43.517-14.393 21.243-15.188 23.568-16.934 49.521-1.504 22.391-0.506 32.313 5.613 55.849 18.279 70.293 24.496 82.75 59.526 119.216 15.955 16.607 19.895 19.109 30.004 19.049 6.402-0.038 17.872-2.9 25.501-6.36 7.623-3.46 15.579-6.29 17.685-6.29s7.146-3.094 11.204-6.875c7.152-6.666 7.311-7.953 5.152-42.070-1.224-19.357-3.527-36.769-5.117-38.683-1.593-1.918-3.282-22.191-3.759-45.046l-0.865-41.564-17.92-5.012c-15.821-4.43-20.655-4.494-41.291-0.56-27.149 5.171-29.209 3.924-27.196-16.448 1.622-16.39 18.569-43.898 31.013-50.332 17.64-9.121 53.607-3.202 62.439 10.272 5.896 8.993 12.078 9.241 25.552 1.024 13.318-8.122 14.034-19.555 1.59-25.339-30.408-14.123-49.833-17.548-78.714-13.869v0zM734.192 378.832c1.056 3.934 1.883 22.897 1.835 42.137-0.080 33.522-0.293 34.6-5.050 25.816-6.112-11.283-23.399-60.699-23.399-66.888 0-5.298 4.757-7.623 16.324-7.969 6.112-0.184 8.895 1.679 10.291 6.904v0zM1033.054 249.147c-16.394 11.48-30.055 59.618-35.716 125.866-3.11 36.406-2.655 53.995 1.574 60.839 2.996 4.843 20.060 2.652 35.338-4.548 28.246-13.306 27.394-11.15 30.148-76.406 2.795-66.112 4.494-79.564 9.833-77.779 7.044 2.347 32.927 44.013 36.848 59.316 2.245 8.764 3.625 30.981 3.237 52.154-0.938 51.070 2.49 54.31 39.392 37.23 29.426-13.62 29.642-14.043 25.177-49.406-4.010-31.747-8.211-44.55-17.344-52.879-3.145-2.862-9.016-11.452-13.051-19.081-4.036-7.626-9.245-13.869-11.585-13.869-2.334 0-4.834-2.147-5.549-4.77-1.158-4.242-0.929-4.242 2.070 0 1.854 2.624 3.374 3.339 3.374 1.59 0-7.006-31.098-36.842-41.517-39.828-16.807-4.821-54.463-3.87-62.229 1.571v0z" />
<glyph unicode="&#xe903;" horiz-adv-x="1536" d="M1207.299 117.267c-5.956 4.424-16.769 63.99-21.351 117.626-2.058 24.093-3.282 27.906-11.369 35.465-13.080 12.218-10.793 28.173 4.042 28.173 5.724 0 8.593 8.268 10.647 30.695 3.67 40.063 17.341 92.987 31.044 120.183 15.688 31.133 55.983 65.371 76.937 65.371 6.869 0 25.32-6.001 47.947-15.592 3.498-1.482 10.377-4.312 15.287-6.287 6.185-2.487 11.254-8.714 16.502-20.273 13.837-30.475 13.388-68.401-1.259-107.396-12.949-34.469-80.368-96.342-114.51-105.090l-16.196-4.15 0.095-30.408c0.121-37.719 4.624-73.604 11.49-91.584 2.875-7.531 4.188-14.737 2.916-16.009-2.582-2.579-48.856-3.218-52.221-0.722v0zM1278.156 333.69c13.163 12.501 27.387 29.645 32.132 38.715 9.89 18.912 14.845 47.975 12.148 71.282-2.977 25.743-5.696 27.209-20.117 10.828-22.080-25.078-33.604-52.154-46.083-108.28-2.916-13.118-6.017-26.354-6.885-29.416-2.942-10.358 5.104-5.645 28.806 16.871v0zM876.779 287.738c-2.051 32.409-4.427 60.060-5.282 61.443s-12.647 3.524-26.201 4.754c-27.874 2.525-32.774 5.209-32.774 17.952 0 14.256 10.211 19.303 34.12 16.855l19.943-2.045-0.14 12.364c-0.076 6.802-1.507 23.1-3.177 36.218-12.234 96.068-14.514 164.231-6.23 186.025 2.544 6.691 5.088 7.963 15.932 7.963 12.482 0 41.787-12.123 46.074-19.062 1.581-2.557 4.242-97.639 5.212-186.056 0.060-5.247-0.89-14.193-2.112-19.876-1.972-9.184-1.444-10.335 4.729-10.335 5.708 0 6.767 1.558 5.925 8.745-0.868 7.438 0.254 8.895 7.527 9.734 6.85 0.789 12.838-3.136 30.097-19.726 11.849-11.391 20.496-21.762 19.214-23.043-4.837-4.837-26.599-10.596-40.368-10.682-30.45-0.197-28.551 4.309-26.754-63.552 1.787-67.702 3.635-63.056-25.912-65.348l-16.098-1.25-3.724 58.921zM408.808 246.857c-2.073 8.306-7.238 22.976-11.477 32.596-8.281 18.791-18.96 54.285-30.144 100.174-3.835 15.742-8.109 30.71-9.493 33.264-3.574 6.592-5.702-14.263-7.607-74.606-0.884-27.985-3.508-57.322-5.826-65.193l-4.22-14.311-62.82-5.81-7.044 8.834c-3.877 4.859-16.021 23.721-26.993 41.911s-20.34 32.679-20.823 32.196c-0.483-0.48 0.973-14.326 3.234-30.765 2.258-16.438 3.463-32.361 2.671-35.385-2.175-8.31-32.157-20.092-49.848-19.593-14.692 0.42-17.818 6.51-22.493 43.873-7.982 63.723-8.691 78.505-6.408 133.32l2.271 54.495 13.989 3.743c22.528 6.026 47.591 4.866 54.469-2.519 3.206-3.444 18.581-30.99 34.164-61.217l28.335-54.956 4.013 30.211c5.912 44.525 23.527 104.133 38.705 130.97l5.963 10.545 28.080-0.687c23.104-0.566 29.19-1.797 34.339-6.945 7.979-7.979 23.046-65.027 45.212-171.161 2.636-12.638 6.891-28.917 9.458-36.18 2.563-7.26 4.659-15.84 4.659-19.065s3.578-16.823 7.95-30.218c8.036-24.624 9.674-32.685 5.858-28.872-1.151 1.151-4.016 0.496-6.37-1.453-3.39-2.814-36.854-11.677-46.020-12.186-1.107-0.067-3.711 6.681-5.785 14.988v0zM538.048 238.423c-15.099 3.552-21.663 7.028-43.075 22.811-24.455 18.028-28.573 29.181-29.047 78.641-0.48 50.602 1.775 72.628 10.167 99.328 7.823 24.869 26.595 48.099 53.76 66.515 16.4 11.118 17.866 11.503 34.619 9.073 29.887-4.338 44.678-10.275 49.712-19.952 9.897-19.027 13.328-127.714 4.484-142.024-3.155-5.104-55.573-5.295-73.124-0.261-5.829 1.67-11.827 2.28-13.325 1.355s-2.697-11.976-2.659-24.554c0.083-27.082 6.821-44.43 22.312-57.462 9.4-7.909 12.164-8.65 25.101-6.72 7.995 1.193 18.209 4.335 22.703 6.98 11.045 6.503 40.397 0.738 50.389-9.897l6.936-7.381-16.845-6.395c-30.914-11.744-76.069-16.19-102.107-10.059v0zM558.716 399.503c1.523 18.41-0.849 51.677-3.686 51.677-3.059 0-15.554-30.046-19.183-46.131-2.28-10.119-1.759-11.868 4.268-14.298 13.881-5.6 17.557-3.87 18.601 8.752zM740.969 243.461c-47.11 5.998-64.045 14.823-83.481 43.523-14.584 21.533-15.169 23.291-17.010 51.111-1.31 19.857-0.636 32.272 2.172 39.946 2.242 6.122 6.328 21.485 9.086 34.135 9.808 45.015 20.391 64.448 54.367 99.818 15.551 16.187 19.51 18.683 29.591 18.62 6.402-0.038 17.872-2.9 25.501-6.36 7.623-3.46 15.579-6.29 17.688-6.29 2.102 0 7.143-3.094 11.2-6.875 7.152-6.666 7.311-7.953 5.152-42.070-1.224-19.357-3.527-36.769-5.117-38.683-1.593-1.918-3.282-22.191-3.759-45.046l-0.865-41.564-17.92-5.012c-15.821-4.43-20.655-4.494-41.291-0.56-25.858 4.926-28.109 3.937-28.195-12.377-0.067-12.692 11.289-35.182 24.36-48.255 9.136-9.133 13.026-10.787 25.416-10.787 20.369 0 38.976 6.211 44.674 14.908 5.896 8.993 12.078 9.241 25.552 1.024 16.025-9.769 14.215-19.841-5.060-28.135-27.037-11.627-45.46-14.457-72.062-11.070v0zM734.192 378.832c1.056 3.934 1.883 22.897 1.835 42.137-0.080 33.522-0.293 34.6-5.050 25.816-6.112-11.283-23.399-60.699-23.399-66.888 0-5.298 4.757-7.623 16.324-7.969 6.112-0.184 8.895 1.679 10.291 6.904v0zM1033.089 249.121c-16.537 11.585-30.068 60.009-36.018 128.916-2.897 33.553-2.337 51.047 1.841 57.815 2.996 4.843 20.060 2.652 35.338-4.548 28.246-13.306 27.394-11.15 30.148-76.406 2.795-66.112 4.494-79.564 9.833-77.779 7.041 2.344 32.927 44.007 36.845 59.3 2.15 8.389 3.679 28.691 3.406 45.126-0.277 16.435-0.506 33.134-0.509 37.106-0.006 9.136 6.099 16.629 13.547 16.629 8.004 0 45.708-17.815 50.869-24.035 3.476-4.188 3.565-10.52 0.493-34.832-4.010-31.747-8.211-44.55-17.344-52.879-3.145-2.862-9.019-11.452-13.051-19.081-4.036-7.626-9.245-13.869-11.585-13.869-2.334 0-4.834-2.147-5.549-4.77-1.158-4.242-0.929-4.242 2.070 0 1.854 2.624 3.374 3.339 3.374 1.59 0-7.006-31.098-36.842-41.517-39.828-16.759-4.808-54.46-3.87-62.191 1.546v0z" />
<glyph unicode="&#xe904;" glyph-name="telegram" d="M679.429 204l84 396c7.429 34.857-12.571 48.571-35.429 40l-493.714-190.286c-33.714-13.143-33.143-32-5.714-40.571l126.286-39.429 293.143 184.571c13.714 9.143 26.286 4 16-5.143l-237.143-214.286-9.143-130.286c13.143 0 18.857 5.714 25.714 12.571l61.714 59.429 128-94.286c23.429-13.143 40-6.286 46.286 21.714zM1024 438.857c0-282.857-229.143-512-512-512s-512 229.143-512 512 229.143 512 512 512 512-229.143 512-512z" />
<glyph unicode="&#xe905;" glyph-name="instagram" d="M512 867.8c136.8 0 153-0.6 206.8-3 50-2.2 77-10.6 95-17.6 23.8-9.2 41-20.4 58.8-38.2 18-18 29-35 38.4-58.8 7-18 15.4-45.2 17.6-95 2.4-54 3-70.2 3-206.8s-0.6-153-3-206.8c-2.2-50-10.6-77-17.6-95-9.2-23.8-20.4-41-38.2-58.8-18-18-35-29-58.8-38.4-18-7-45.2-15.4-95-17.6-54-2.4-70.2-3-206.8-3s-153 0.6-206.8 3c-50 2.2-77 10.6-95 17.6-23.8 9.2-41 20.4-58.8 38.2-18 18-29 35-38.4 58.8-7 18-15.4 45.2-17.6 95-2.4 54-3 70.2-3 206.8s0.6 153 3 206.8c2.2 50 10.6 77 17.6 95 9.2 23.8 20.4 41 38.2 58.8 18 18 35 29 58.8 38.4 18 7 45.2 15.4 95 17.6 53.8 2.4 70 3 206.8 3zM512 960c-139 0-156.4-0.6-211-3-54.4-2.4-91.8-11.2-124.2-23.8-33.8-13.2-62.4-30.6-90.8-59.2-28.6-28.4-46-57-59.2-90.6-12.6-32.6-21.4-69.8-23.8-124.2-2.4-54.8-3-72.2-3-211.2s0.6-156.4 3-211c2.4-54.4 11.2-91.8 23.8-124.2 13.2-33.8 30.6-62.4 59.2-90.8 28.4-28.4 57-46 90.6-59 32.6-12.6 69.8-21.4 124.2-23.8 54.6-2.4 72-3 211-3s156.4 0.6 211 3c54.4 2.4 91.8 11.2 124.2 23.8 33.6 13 62.2 30.6 90.6 59s46 57 59 90.6c12.6 32.6 21.4 69.8 23.8 124.2 2.4 54.6 3 72 3 211s-0.6 156.4-3 211c-2.4 54.4-11.2 91.8-23.8 124.2-12.6 34-30 62.6-58.6 91-28.4 28.4-57 46-90.6 59-32.6 12.6-69.8 21.4-124.2 23.8-54.8 2.6-72.2 3.2-211.2 3.2v0zM512 711c-145.2 0-263-117.8-263-263s117.8-263 263-263 263 117.8 263 263c0 145.2-117.8 263-263 263zM512 277.4c-94.2 0-170.6 76.4-170.6 170.6s76.4 170.6 170.6 170.6c94.2 0 170.6-76.4 170.6-170.6s-76.4-170.6-170.6-170.6zM846.8 721.4c0-33.91-27.49-61.4-61.4-61.4s-61.4 27.49-61.4 61.4c0 33.91 27.49 61.4 61.4 61.4s61.4-27.49 61.4-61.4z" />
<glyph unicode="&#xe906;" d="M1014.168 386.099l-168.296 517.964c-5.755 17.711-30.814 17.711-36.569 0l-111.86-344.263h-371.44l-111.862 344.263c-5.753 17.711-30.812 17.711-36.569 0l-168.292-517.964c-1.194-3.549-1.883-7.636-1.883-11.884 0-12.742 6.197-24.036 15.742-31.032l0.108-0.075 488.475-354.898 488.479 354.898c9.652 7.073 15.849 18.367 15.849 31.109 0 4.247-0.689 8.334-1.96 12.154l0.078-0.271z" />
<glyph unicode="&#xe907;" d="M511.724-11.788l185.721 571.589h-371.444l185.721-571.589z" />
<glyph unicode="&#xe908;" d="M511.724-11.788l-185.723 571.589h-260.282l446.005-571.587z" />
<glyph unicode="&#xe909;" d="M65.718 559.8l-56.443-173.701c-1.193-3.548-1.882-7.635-1.882-11.882 0-12.742 6.199-24.037 15.746-31.033l0.108-0.075 488.477-354.898-446.005 571.589z" />
<glyph unicode="&#xe90a;" d="M65.718 559.798h260.282l-111.862 344.263c-5.755 17.715-30.814 17.715-36.567 0l-111.854-344.261z" />
<glyph unicode="&#xe90b;" d="M511.724-11.788l185.721 571.587h260.282l-446.003-571.587z" />
<glyph unicode="&#xe90c;" d="M957.727 559.8l56.441-173.701c1.194-3.549 1.882-7.635 1.882-11.883 0-12.742-6.198-24.036-15.744-31.031l-0.108-0.075-488.477-354.898 446.005 571.589z" />
<glyph unicode="&#xe90d;" d="M957.727 559.798h-260.284l111.86 344.263c5.755 17.715 30.816 17.715 36.569 0l111.856-344.261z" />
<glyph unicode="&#xf004;" glyph-name="heart" d="M512 0q-14.857 0-25.143 10.286l-356.571 344q-5.714 4.571-15.714 14.857t-31.714 37.429-38.857 55.714-30.571 69.143-13.429 78.857q0 125.714 72.571 196.571t200.571 70.857q35.429 0 72.286-12.286t68.571-33.143 54.571-39.143 43.429-38.857q20.571 20.571 43.429 38.857t54.571 39.143 68.571 33.143 72.286 12.286q128 0 200.571-70.857t72.571-196.571q0-126.286-130.857-257.143l-356-342.857q-10.286-10.286-25.143-10.286z" />
<glyph unicode="&#xf02d;" glyph-name="book" horiz-adv-x="951" d="M936.571 677.714q22.857-32.571 10.286-73.714l-157.143-517.714q-10.857-36.571-43.714-61.429t-70-24.857h-527.429q-44 0-84.857 30.571t-56.857 75.143q-13.714 38.286-1.143 72.571 0 2.286 1.714 15.429t2.286 21.143q0.571 4.571-1.714 12.286t-1.714 11.143q1.143 6.286 4.571 12t9.429 13.429 9.429 13.429q13.143 21.714 25.714 52.286t17.143 52.286q1.714 5.714 0.286 17.143t-0.286 16q1.714 6.286 9.714 16t9.714 13.143q12 20.571 24 52.571t14.286 51.429q0.571 5.143-1.429 18.286t0.286 16q2.286 7.429 12.571 17.429t12.571 12.857q10.857 14.857 24.286 48.286t15.714 55.143q0.571 4.571-1.714 14.571t-1.143 15.143q1.143 4.571 5.143 10.286t10.286 13.143 9.714 12q4.571 6.857 9.429 17.429t8.571 20 9.143 20.571 11.143 18.286 15.143 13.429 20.571 6.571 27.143-3.143l-0.571-1.714q21.714 5.143 29.143 5.143h434.857q42.286 0 65.143-32t10.286-74.286l-156.571-517.714q-20.571-68-40.857-87.714t-73.429-19.714h-496.571q-15.429 0-21.714-8.571-6.286-9.143-0.571-24.571 13.714-40 82.286-40h527.429q16.571 0 32 8.857t20 23.714l171.429 564q4 12.571 2.857 32.571 21.714-8.571 33.714-24.571zM328.571 676.571q-2.286-7.429 1.143-12.857t11.429-5.429h347.429q7.429 0 14.571 5.429t9.429 12.857l12 36.571q2.286 7.429-1.143 12.857t-11.429 5.429h-347.429q-7.429 0-14.571-5.429t-9.429-12.857zM281.143 530.286q-2.286-7.429 1.143-12.857t11.429-5.429h347.429q7.429 0 14.571 5.429t9.429 12.857l12 36.571q2.286 7.429-1.143 12.857t-11.429 5.429h-347.429q-7.429 0-14.571-5.429t-9.429-12.857z" />
<glyph unicode="&#xf08c;" glyph-name="linkedin" horiz-adv-x="878" d="M135.429 142.857h132v396.571h-132v-396.571zM276 661.714q-0.571 29.714-20.571 49.143t-53.143 19.429-54-19.429-20.857-49.143q0-29.143 20.286-48.857t52.857-19.714h0.571q33.714 0 54.286 19.714t20.571 48.857zM610.286 142.857h132v227.429q0 88-41.714 133.143t-110.286 45.143q-77.714 0-119.429-66.857h1.143v57.714h-132q1.714-37.714 0-396.571h132v221.714q0 21.714 4 32 8.571 20 25.714 34t42.286 14q66.286 0 66.286-89.714v-212zM877.714 713.143v-548.571q0-68-48.286-116.286t-116.286-48.286h-548.571q-68 0-116.286 48.286t-48.286 116.286v548.571q0 68 48.286 116.286t116.286 48.286h548.571q68 0 116.286-48.286t48.286-116.286z" />
<glyph unicode="&#xf099;" glyph-name="twitter" horiz-adv-x="951" d="M925.714 717.714q-38.286-56-92.571-95.429 0.571-8 0.571-24 0-74.286-21.714-148.286t-66-142-105.429-120.286-147.429-83.429-184.571-31.143q-154.857 0-283.429 82.857 20-2.286 44.571-2.286 128.571 0 229.143 78.857-60 1.143-107.429 36.857t-65.143 91.143q18.857-2.857 34.857-2.857 24.571 0 48.571 6.286-64 13.143-106 63.714t-42 117.429v2.286q38.857-21.714 83.429-23.429-37.714 25.143-60 65.714t-22.286 88q0 50.286 25.143 93.143 69.143-85.143 168.286-136.286t212.286-56.857q-4.571 21.714-4.571 42.286 0 76.571 54 130.571t130.571 54q80 0 134.857-58.286 62.286 12 117.143 44.571-21.143-65.714-81.143-101.714 53.143 5.714 106.286 28.571z" />
<glyph unicode="&#xf09b;" glyph-name="github" horiz-adv-x="878" d="M877.714 438.857q0-143.429-83.714-258t-216.286-158.571q-15.429-2.857-22.571 4t-7.143 17.143v120.571q0 55.429-29.714 81.143 32.571 3.429 58.571 10.286t53.714 22.286 46.286 38 30.286 60 11.714 86q0 69.143-45.143 117.714 21.143 52-4.571 116.571-16 5.143-46.286-6.286t-52.571-25.143l-21.714-13.714q-53.143 14.857-109.714 14.857t-109.714-14.857q-9.143 6.286-24.286 15.429t-47.714 22-49.143 7.714q-25.143-64.571-4-116.571-45.143-48.571-45.143-117.714 0-48.571 11.714-85.714t30-60 46-38.286 53.714-22.286 58.571-10.286q-22.857-20.571-28-58.857-12-5.714-25.714-8.571t-32.571-2.857-37.429 12.286-31.714 35.714q-10.857 18.286-27.714 29.714t-28.286 13.714l-11.429 1.714q-12 0-16.571-2.571t-2.857-6.571 5.143-8 7.429-6.857l4-2.857q12.571-5.714 24.857-21.714t18-29.143l5.714-13.143q7.429-21.714 25.143-35.143t38.286-17.143 39.714-4 31.714 2l13.143 2.286q0-21.714 0.286-50.857t0.286-30.857q0-10.286-7.429-17.143t-22.857-4q-132.571 44-216.286 158.571t-83.714 258q0 119.429 58.857 220.286t159.714 159.714 220.286 58.857 220.286-58.857 159.714-159.714 58.857-220.286z" />
<glyph unicode="&#xf0c1;" glyph-name="link" horiz-adv-x="951" d="M832 256q0 22.857-16 38.857l-118.857 118.857q-16 16-38.857 16-24 0-41.143-18.286 1.714-1.714 10.857-10.571t12.286-12.286 8.571-10.857 7.429-14.571 2-15.714q0-22.857-16-38.857t-38.857-16q-8.571 0-15.714 2t-14.571 7.429-10.857 8.571-12.286 12.286-10.571 10.857q-18.857-17.714-18.857-41.714 0-22.857 16-38.857l117.714-118.286q15.429-15.429 38.857-15.429 22.857 0 38.857 14.857l84 83.429q16 16 16 38.286zM430.286 658.857q0 22.857-16 38.857l-117.714 118.286q-16 16-38.857 16-22.286 0-38.857-15.429l-84-83.429q-16-16-16-38.286 0-22.857 16-38.857l118.857-118.857q15.429-15.429 38.857-15.429 24 0 41.143 17.714-1.714 1.714-10.857 10.571t-12.286 12.286-8.571 10.857-7.429 14.571-2 15.714q0 22.857 16 38.857t38.857 16q8.571 0 15.714-2t14.571-7.429 10.857-8.571 12.286-12.286 10.571-10.857q18.857 17.714 18.857 41.714zM941.714 256q0-68.571-48.571-116l-84-83.429q-47.429-47.429-116-47.429-69.143 0-116.571 48.571l-117.714 118.286q-47.429 47.429-47.429 116 0 70.286 50.286 119.429l-50.286 50.286q-49.143-50.286-118.857-50.286-68.571 0-116.571 48l-118.857 118.857q-48 48-48 116.571t48.571 116l84 83.429q47.429 47.429 116 47.429 69.143 0 116.571-48.571l117.714-118.286q47.429-47.429 47.429-116 0-70.286-50.286-119.429l50.286-50.286q49.143 50.286 118.857 50.286 68.571 0 116.571-48l118.857-118.857q48-48 48-116.571z" />
<glyph unicode="&#xf0c9;" glyph-name="bars" horiz-adv-x="878" d="M877.714 182.857v-73.143q0-14.857-10.857-25.714t-25.714-10.857h-804.571q-14.857 0-25.714 10.857t-10.857 25.714v73.143q0 14.857 10.857 25.714t25.714 10.857h804.571q14.857 0 25.714-10.857t10.857-25.714zM877.714 475.428v-73.143q0-14.857-10.857-25.714t-25.714-10.857h-804.571q-14.857 0-25.714 10.857t-10.857 25.714v73.143q0 14.857 10.857 25.714t25.714 10.857h804.571q14.857 0 25.714-10.857t10.857-25.714zM877.714 768v-73.143q0-14.857-10.857-25.714t-25.714-10.857h-804.571q-14.857 0-25.714 10.857t-10.857 25.714v73.143q0 14.857 10.857 25.714t25.714 10.857h804.571q14.857 0 25.714-10.857t10.857-25.714z" />
<glyph unicode="&#xf0d2;" glyph-name="pinterest" horiz-adv-x="878" d="M877.714 438.857q0-119.429-58.857-220.286t-159.714-159.714-220.286-58.857q-63.429 0-124.571 18.286 33.714 53.143 44.571 93.714 5.143 19.429 30.857 120.571 11.429-22.286 41.714-38.571t65.143-16.286q69.143 0 123.429 39.143t84 107.714 29.714 154.286q0 65.143-34 122.286t-98.571 93.143-145.714 36q-60 0-112-16.571t-88.286-44-62.286-63.143-38.286-74-12.286-76.571q0-59.429 22.857-104.571t66.857-63.429q17.143-6.857 21.714 11.429 1.143 4 4.571 17.714t4.571 17.143q3.429 13.143-6.286 24.571-29.143 34.857-29.143 86.286 0 86.286 59.714 148.286t156.286 62q86.286 0 134.571-46.857t48.286-121.714q0-97.143-39.143-165.143t-100.286-68q-34.857 0-56 24.857t-13.143 59.714q4.571 20 15.143 53.429t17.143 58.857 6.571 43.143q0 28.571-15.429 47.429t-44 18.857q-35.429 0-60-32.571t-24.571-81.143q0-41.714 14.286-69.714l-56.571-238.857q-9.714-40-7.429-101.143-117.714 52-190.286 160.571t-72.571 241.714q0 119.429 58.857 220.286t159.714 159.714 220.286 58.857 220.286-58.857 159.714-159.714 58.857-220.286z" />
<glyph unicode="&#xf0d5;" glyph-name="googleplus" horiz-adv-x="951" d="M420 496q0-20.571 18.286-40.286t44.286-38.857 51.714-42 44-59.429 18.286-81.143q0-51.429-27.429-98.857-41.143-69.714-120.571-102.571t-170.286-32.857q-75.429 0-140.857 23.714t-98 78.571q-21.143 34.286-21.143 74.857 0 46.286 25.429 85.714t67.714 65.714q74.857 46.857 230.857 57.143-18.286 24-27.143 42.286t-8.857 41.714q0 20.571 12 48.571-26.286-2.286-38.857-2.286-84.571 0-142.571 55.143t-58 139.714q0 46.857 20.571 90.857t56.571 74.857q44 37.714 104.286 56t124.286 18.286h238.857l-78.857-50.286h-74.857q42.286-36 64-76t21.714-91.429q0-41.143-14-74t-33.714-53.143-39.714-37.143-34-35.143-14-37.714zM336.571 550.857q21.714 0 44.571 9.429t37.714 24.857q30.286 32.571 30.286 90.857 0 33.143-9.714 71.429t-27.714 74-48.286 59.143-66.857 23.429q-24 0-47.143-11.143t-37.429-30q-26.857-33.714-26.857-91.429 0-26.286 5.714-55.714t18-58.857 29.714-52.857 42.857-38.286 55.143-14.857zM337.714 52q33.143 0 63.714 7.429t56.571 22.286 41.714 41.714 15.714 62.286q0 14.286-4 28t-8.286 24-15.429 23.714-16.857 20-22 19.714-20.857 16.571-23.714 17.143-20.857 14.857q-9.143 1.143-27.429 1.143-30.286 0-60-4t-61.429-14.286-55.429-26.286-39.143-42.571-15.429-60.286q0-40 20-70.571t52.286-47.429 68-25.143 72.857-8.286zM800.571 552.571h121.714v-61.714h-121.714v-125.143h-60v125.143h-121.143v61.714h121.143v124h60v-124z" />
<glyph unicode="&#xf111;" glyph-name="circle" horiz-adv-x="878" d="M877.714 438.857q0-119.429-58.857-220.286t-159.714-159.714-220.286-58.857-220.286 58.857-159.714 159.714-58.857 220.286 58.857 220.286 159.714 159.714 220.286 58.857 220.286-58.857 159.714-159.714 58.857-220.286z" />
<glyph unicode="&#xf121;" glyph-name="code" horiz-adv-x="1097" d="M352.571 151.428l-28.571-28.571q-5.714-5.714-13.143-5.714t-13.143 5.714l-266.286 266.286q-5.714 5.714-5.714 13.143t5.714 13.143l266.286 266.286q5.714 5.714 13.143 5.714t13.143-5.714l28.571-28.571q5.714-5.714 5.714-13.143t-5.714-13.143l-224.571-224.571 224.571-224.571q5.714-5.714 5.714-13.143t-5.714-13.143zM690.286 761.143l-213.143-737.714q-2.286-7.429-8.857-11.143t-13.429-1.429l-35.429 9.714q-7.429 2.286-11.143 8.857t-1.429 14l213.143 737.714q2.286 7.429 8.857 11.143t13.429 1.429l35.429-9.714q7.429-2.286 11.143-8.857t1.429-14zM1065.714 389.143l-266.286-266.286q-5.714-5.714-13.143-5.714t-13.143 5.714l-28.571 28.571q-5.714 5.714-5.714 13.143t5.714 13.143l224.571 224.571-224.571 224.571q-5.714 5.714-5.714 13.143t5.714 13.143l28.571 28.571q5.714 5.714 13.143 5.714t13.143-5.714l266.286-266.286q5.714-5.714 5.714-13.143t-5.714-13.143z" />
<glyph unicode="&#xf167;" glyph-name="youtube" horiz-adv-x="878" d="M554.857 240v-120.571q0-38.286-22.286-38.286-13.143 0-25.714 12.571v172q12.571 12.571 25.714 12.571 22.286 0 22.286-38.286zM748 239.428v-26.286h-51.429v26.286q0 38.857 25.714 38.857t25.714-38.857zM196 364h61.143v53.714h-178.286v-53.714h60v-325.143h57.143v325.143zM360.571 38.857h50.857v282.286h-50.857v-216q-17.143-24-32.571-24-10.286 0-12 12-0.571 1.714-0.571 20v208h-50.857v-223.429q0-28 4.571-41.714 6.857-21.143 33.143-21.143 27.429 0 58.286 34.857v-30.857zM605.714 123.428v112.571q0 41.714-5.143 56.571-9.714 32-40.571 32-28.571 0-53.143-30.857v124h-50.857v-378.857h50.857v27.429q25.714-31.429 53.143-31.429 30.857 0 40.571 31.429 5.143 15.429 5.143 57.143zM798.857 129.143v7.429h-52q0-29.143-1.143-34.857-4-20.571-22.857-20.571-26.286 0-26.286 39.429v49.714h102.286v58.857q0 45.143-15.429 66.286-22.286 29.143-60.571 29.143-38.857 0-61.143-29.143-16-21.143-16-66.286v-98.857q0-45.143 16.571-66.286 22.286-29.143 61.714-29.143 41.143 0 61.714 30.286 10.286 15.429 12 30.857 1.143 5.143 1.143 33.143zM451.429 650.857v120q0 39.429-24.571 39.429t-24.571-39.429v-120q0-40 24.571-40t24.571 40zM862.286 221.714q0-133.714-14.857-200-8-33.714-33.143-56.571t-58.286-26.286q-105.143-12-317.143-12t-317.143 12q-33.143 3.429-58.571 26.286t-32.857 56.571q-14.857 64-14.857 200 0 133.714 14.857 200 8 33.714 33.143 56.571t58.857 26.857q104.571 11.429 316.571 11.429t317.143-11.429q33.143-4 58.571-26.857t32.857-56.571q14.857-64 14.857-200zM292 950.857h58.286l-69.143-228v-154.857h-57.143v154.857q-8 42.286-34.857 121.143-21.143 58.857-37.143 106.857h60.571l40.571-150.286zM503.429 760.571v-100q0-46.286-16-67.429-21.143-29.143-60.571-29.143-38.286 0-60 29.143-16 21.714-16 67.429v100q0 45.714 16 66.857 21.714 29.143 60 29.143 39.429 0 60.571-29.143 16-21.143 16-66.857zM694.857 853.143v-285.143h-52v31.429q-30.286-35.429-58.857-35.429-26.286 0-33.714 21.143-4.571 13.714-4.571 42.857v225.143h52v-209.714q0-18.857 0.571-20 1.714-12.571 12-12.571 15.429 0 32.571 24.571v217.714h52z" />
<glyph unicode="&#xf16c;" glyph-name="stackoverflow" horiz-adv-x="805" d="M530.286 150.286v-86.286l-404-0.571v86.286zM668 348v-400.571l-0.571-20v-0.571l-667.429 0.571v420.571h69.143v-353.143h530.286v353.143h68.571zM137.714 297.714l402.286-37.143-7.429-85.714-402.857 37.143zM176.571 478.286l390.286-104.571-22.286-83.429-390.286 104.571zM269.714 677.714l348-205.714-44-74.286-348 205.714zM475.429 866.857l227.429-334.286-70.857-48.571-228 333.714zM734.286 950.857l69.143-398.286-85.143-14.857-69.143 398.286z" />
<glyph unicode="&#xf16e;" glyph-name="flickr" horiz-adv-x="878" d="M713.143 877.714q68 0 116.286-48.286t48.286-116.286v-548.571q0-68-48.286-116.286t-116.286-48.286h-548.571q-68 0-116.286 48.286t-48.286 116.286v548.571q0 68 48.286 116.286t116.286 48.286h548.571zM398.857 438.857q0 50.286-35.429 85.714t-85.714 35.429-85.714-35.429-35.429-85.714 35.429-85.714 85.714-35.429 85.714 35.429 35.429 85.714zM721.143 438.857q0 50.286-35.429 85.714t-85.714 35.429-85.714-35.429-35.429-85.714 35.429-85.714 85.714-35.429 85.714 35.429 35.429 85.714z" />
<glyph unicode="&#xf171;" glyph-name="bitbucket" horiz-adv-x="805" d="M465.714 460q4.571-36-28.857-57.714t-63.714-3.429q-22.286 9.714-30.571 33.143t-0.286 46.857 29.714 33.143q20.571 10.286 41.429 6.857t36.571-20.286 15.714-38.571zM529.143 472q-8 61.143-64.571 93.714t-112.571 7.429q-36-16-57.429-50.571t-19.714-74q2.286-52 44.286-88.571t94.571-32q52 4.571 86.857 48t28.571 96zM665.714 781.714q-11.429 15.429-32 25.429t-33.143 12.571-40.571 7.143q-166.286 26.857-323.429-1.143-24.571-4-37.714-6.857t-31.429-12.571-28.571-24.571q17.143-16 43.429-26t42-12.571 50-6.571q130.286-16.571 256-0.571 36 4.571 51.143 6.857t41.429 12.286 42.857 26.571zM698.286 190.286q-4.571-14.857-8.857-43.714t-8-48-16.286-40-33.143-32.286q-49.143-27.429-108.286-40.857t-115.429-12.571-115.143 10.571q-26.286 4.571-46.571 10.286t-43.714 15.429-41.714 24.857-29.714 35.143q-14.286 54.857-32.571 166.857l3.429 9.143 10.286 5.143q127.429-84.571 289.429-84.571t290 84.571q12-3.429 13.714-13.143t-2.857-25.714-4.571-21.143zM801.714 739.428q-14.857-95.429-63.429-374.286-2.857-17.143-15.429-32t-24.857-22.857-31.143-17.714q-144-72-348.571-50.286-141.714 15.429-225.143 79.429-8.571 6.857-14.571 15.143t-9.714 20-5.143 19.429-3.429 22.571-3.143 20q-5.143 28.571-15.143 85.714t-16 92.286-13.429 84.286-12.571 90.286q1.714 14.857 10 27.714t18 21.429 25.714 17.143 26.286 12.857 27.429 10.571q71.429 26.286 178.857 36.571 216.571 21.143 386.286-28.571 88.571-26.286 122.857-69.714 9.143-11.429 9.429-29.143t-3.143-30.857z" />
<glyph unicode="&#xf173;" glyph-name="tumblr" horiz-adv-x="585" d="M539.429 191.428l45.714-135.429q-13.143-20-63.429-37.714t-101.143-18.286q-59.429-1.143-108.857 14.857t-81.429 42.286-54.286 60.571-31.714 68.571-9.429 67.429v310.857h-96v122.857q41.143 14.857 73.714 39.714t52 51.429 33.143 58.286 19.429 56.571 8.571 50.571q0.571 2.857 2.571 4.857t4.286 2h139.429v-242.286h190.286v-144h-190.857v-296q0-17.143 3.714-32t12.857-30 28.286-23.714 46.571-8q44.571 1.143 76.571 16.571z" />
<glyph unicode="&#xf17d;" glyph-name="dribbble" horiz-adv-x="878" d="M585.143 93.714q-24 137.714-80 284.571h-1.143l-1.143-0.571q-9.143-3.429-24.571-9.429t-57.714-28-78.286-46.857-74.857-65.429-58.857-84.571l-8.571 6.286q105.143-85.714 238.857-85.714 75.429 0 146.286 29.714zM479.429 440.571q-12 28-30.286 63.429-177.714-53.143-384.571-53.143-0.571-4-0.571-12 0-70.857 25.143-135.143t70.857-115.143q28.571 50.857 70.571 95.143t81.429 71.143 74.571 46.286 56.857 27.429l21.143 7.429q2.286 0.571 7.429 2t7.429 2.571zM418.286 561.714q-68.571 121.714-139.429 216-78.857-37.143-133.714-106.286t-73.143-155.429q172.571 0 346.286 45.714zM809.143 379.428q-120 34.286-233.714 16.571 49.714-136.571 73.143-268 63.429 42.857 105.714 108.286t54.857 143.143zM349.143 802.857q-0.571 0-1.143-0.571 0.571 0.571 1.143 0.571zM686.286 720q-105.714 93.714-247.429 93.714-43.429 0-88.571-10.857 74.857-97.143 140.571-218.286 39.429 14.857 74.286 34.571t55.143 35.143 37.429 32.571 21.429 23.143zM813.714 442.857q-1.714 132.571-85.143 234.286l-0.571-0.571q-5.143-6.857-10.857-14t-24.857-25.429-40.571-34.571-57.143-37.143-75.143-36.857q14.286-30.286 25.143-54.286 1.143-3.429 3.714-10t4.286-9.429q20.571 2.857 42.571 4t42 1.143 39.429-0.857 36.571-2.286 32.286-3.143 27.429-3.714 20.857-3.429 14.286-2.571zM877.714 438.857q0-119.429-58.857-220.286t-159.714-159.714-220.286-58.857-220.286 58.857-159.714 159.714-58.857 220.286 58.857 220.286 159.714 159.714 220.286 58.857 220.286-58.857 159.714-159.714 58.857-220.286z" />
<glyph unicode="&#xf17e;" glyph-name="skype" horiz-adv-x="878" d="M670.286 343.428q0 28.571-11.143 52.286t-27.714 39.143-41.714 28-47.143 19.429-50 13.143l-59.429 13.714q-17.143 4-25.143 6t-20 6.571-17.143 9.143-9.429 12-4.286 17.143q0 44 82.286 44 24.571 0 44-6.857t30.857-16.286 21.714-19.143 22.857-16.571 27.429-6.857q26.857 0 43.143 18.286t16.286 44q0 31.429-32 56.857t-81.143 38.571-104 13.143q-38.857 0-75.429-8.857t-68.286-26.857-50.857-49.714-19.143-73.429q0-34.857 10.857-60.857t32-43.143 45.714-27.714 58.857-18.571l83.429-20.571q51.429-12.571 64-20.571 18.286-11.429 18.286-34.286 0-22.286-22.857-36.857t-60-14.571q-29.143 0-52.286 9.143t-37.143 22-26 25.714-26.286 22-30.857 9.143q-28.571 0-43.143-17.143t-14.571-42.857q0-52.571 69.714-90t166.286-37.429q41.714 0 80 10.571t70 30.571 50.571 53.429 18.857 75.143zM877.714 219.428q0-90.857-64.286-155.143t-155.143-64.286q-74.286 0-133.714 45.714-44-9.143-85.714-9.143-81.714 0-156.286 31.714t-128.571 85.714-85.714 128.571-31.714 156.286q0 41.714 9.143 85.714-45.714 59.429-45.714 133.714 0 90.857 64.286 155.143t155.143 64.286q74.286 0 133.714-45.714 44 9.143 85.714 9.143 81.714 0 156.286-31.714t128.571-85.714 85.714-128.571 31.714-156.286q0-41.714-9.143-85.714 45.714-59.429 45.714-133.714z" />
<glyph unicode="&#xf180;" glyph-name="foursquare" horiz-adv-x="731" d="M571.429 702.857l21.143 110.857q2.857 13.143-5.143 22.857t-20 9.714h-406.857q-13.143 0-22-9.714t-8.857-21.143v-629.143q0-4 3.429-0.571l166.286 201.143q13.143 14.857 21.714 19.143t27.429 4.286h136.571q12.571 0 21.143 8.286t10.286 16.857q13.714 74.286 21.143 109.143 2.286 12-6.571 22.857t-20.857 10.857h-168q-16.571 0-27.429 10.857t-10.857 27.429v24q0 16.571 10.857 27.143t27.429 10.571h197.714q10.286 0 20 7.714t11.429 16.857zM701.143 829.714q-8.571-41.714-30.571-152.286t-39.714-200-20-99.143q-3.429-12.571-5.143-18.571t-8-18.571-14-18.857-22-12-33.143-5.714h-154.857q-7.429 0-12.571-5.714-4.571-5.143-243.429-282.286-12.571-14.286-33.429-16.286t-27.714 3.143q-31.429 12.571-31.429 56v805.714q0 31.429 21.714 58.571t68.571 27.143h507.429q54.286 0 72.571-30.286t5.714-90.857zM701.143 829.714l-90.286-451.429q2.286 9.714 20 99.143t39.714 200 30.571 152.286z" />
<glyph unicode="&#xf184;" glyph-name="gittip, gratipay" horiz-adv-x="878" d="M441.714 206.857l200 270.286q9.143 12.571 14 33.714t-3.429 48.571-35.143 45.143q-22.857 14.857-47.429 14.571t-42-10-31.143-25.714q-20.571-22.857-54.857-22.857-33.714 0-54.286 22.857-13.714 16-31.143 25.714t-42 10-48-14.571q-26.286-17.714-34.571-45.143t-3.429-48.571 14-33.714zM877.714 438.857q0-119.429-58.857-220.286t-159.714-159.714-220.286-58.857-220.286 58.857-159.714 159.714-58.857 220.286 58.857 220.286 159.714 159.714 220.286 58.857 220.286-58.857 159.714-159.714 58.857-220.286z" />
<glyph unicode="&#xf18d;" glyph-name="stackexchange" horiz-adv-x="731" d="M719.429 234.857v-37.714q0-48.571-32.857-82.571t-79.143-34h-32.571l-148.571-153.714v153.714h-302.286q-46.286 0-79.143 34t-32.857 82.571v37.714h707.429zM719.429 421.143v-145.714h-707.429v145.714h707.429zM719.429 608.571v-145.714h-707.429v145.714h707.429zM719.429 688.571v-38.286h-707.429v38.286q0 48 32.857 82t79.143 34h483.429q46.286 0 79.143-34t32.857-82z" />
<glyph unicode="&#xf194;" glyph-name="vimeo" horiz-adv-x="878" d="M738.286 586.286q5.714 123.429-92 126.857-132 4.571-178.286-149.143 25.143 10.857 46.857 10.857 48.571 0 42.286-54.857-2.286-32.571-42.286-95.429t-60-62.857q-24.571 0-46.857 96.571-7.429 30.857-25.714 145.714-17.143 108-91.429 101.143-33.714-4-93.714-57.143l-92.571-82.286 29.714-38.286q43.429 29.714 49.714 29.714 32.571 0 61.143-102.286 8.571-31.429 25.714-94t25.714-94q38.857-102.286 93.714-102.286 89.714 0 218.857 168 125.714 161.714 129.143 253.714zM877.714 713.143v-548.571q0-68-48.286-116.286t-116.286-48.286h-548.571q-68 0-116.286 48.286t-48.286 116.286v548.571q0 68 48.286 116.286t116.286 48.286h548.571q68 0 116.286-48.286t48.286-116.286z" />
<glyph unicode="&#xf19d;" glyph-name="graduation-cap" horiz-adv-x="1317" d="M1013.714 473.143l10.286-180.571q2.286-39.429-46.857-73.143t-134.286-53.429-184.571-19.714-184.571 19.714-134.286 53.429-46.857 73.143l10.286 180.571 328-103.429q12.571-4 27.429-4t27.429 4zM1316.571 658.286q0-13.143-12.571-17.714l-640-201.143q-2.286-0.571-5.714-0.571t-5.714 0.571l-372.571 117.714q-24.571-19.429-40.571-63.714t-19.429-102q36-20.571 36-62.286 0-39.429-33.143-61.143l33.143-247.429q1.143-8-4.571-14.286-5.143-6.286-13.714-6.286h-109.714q-8.571 0-13.714 6.286-5.714 6.286-4.571 14.286l33.143 247.429q-33.143 21.714-33.143 61.143 0 41.714 37.143 63.429 6.286 118.286 56 188.571l-190.286 59.429q-12.571 4.571-12.571 17.714t12.571 17.714l640 201.143q2.286 0.571 5.714 0.571t5.714-0.571l640-201.143q12.571-4.571 12.571-17.714z" />
<glyph unicode="&#xf1ab;" glyph-name="language" horiz-adv-x="878" d="M373.714 334.857q-0.571-1.714-7.143 0.286t-18 6.571l-11.429 5.143q-25.143 11.429-49.714 28-4 2.857-23.429 18t-21.714 16.286q-38.286-58.857-76.571-103.429-46.286-54.286-60-62.857-2.286-1.143-11.143-2.286t-10.571 0q3.429 2.286 46.857 52.571 12 13.714 48.857 65.714t44.857 67.429q9.714 17.143 29.143 56.286t20.571 44.286q-4.571 0.571-62.857-18.857-4.571-1.143-15.714-4.286t-19.714-5.429-9.714-2.857q-1.143-1.143-1.143-6t-0.571-5.429q-2.857-5.714-17.714-8.571-13.143-4-26.857 0-10.286 2.286-16 12-2.286 3.429-2.857 13.143 3.429 1.143 14 2.857t16.857 3.429q33.143 9.143 60 18.286 57.143 20 58.286 20 5.714 1.143 24.571 11.143t25.143 12.286q5.143 1.714 12.286 4.571t8.286 3.143 3.429-0.286q1.143-6.857-0.571-18.857 0-1.143-7.143-15.429t-15.143-30.571-9.714-19.143q-14.286-28.571-44-74.857l36.571-16q6.857-3.429 42.571-18.286t38.571-16q2.286-0.571 6-14.571t2.571-17.429zM256.571 612.571q1.714-8.571-2.286-16-6.857-13.143-28.571-21.714-17.143-6.857-34.286-6.857-14.857 1.714-28 14.857-8 8.571-10.286 23.429l0.571 1.714q1.714-1.714 11.143-2.857t15.143 0 33.143 9.143q20.571 6.857 31.429 8 9.714 0 12-9.714zM655.429 538.857l36-129.714-79.429 24zM22.286 81.714l396.571 132.571v589.714l-396.571-133.143v-589.143zM731.429 262.857l58.286-17.714-103.429 375.429-57.143 17.714-123.429-306.286 58.286-17.714 25.714 62.857 120.571-37.143zM444 812.571l327.429-105.143v217.143zM621.714 56.571l90.286-7.429-30.857-91.429-22.857 37.714q-74.286-47.429-157.714-61.714-33.143-6.857-52-6.857h-48q-45.143 0-114 22.286t-104.857 48.571q-4.571 4-4.571 9.143 0 4.571 2.857 7.714t7.429 3.143q2.286 0 10.286-4.286t17.429-9.429 11.714-6.286q41.714-21.143 91.143-35.143t90-14q54.286 0 95.429 8.286t89.714 28.857q8.571 4 17.429 8.857t19.429 10.857 16.286 9.429zM877.714 673.143v-616.571l-442.286 140.571q-8-3.429-214.286-72.857t-210.286-69.429q-7.429 0-10.286 7.429 0 0.571-0.571 1.714v616q1.714 5.143 2.286 5.714 2.857 3.429 11.429 6.286 60.571 20 85.143 28.571v219.429l318.857-113.143q1.143 0 91.714 31.429t180.571 62 92.286 30.571q11.429 0 11.429-12v-238.857z" />
<glyph unicode="&#xf1ae;" glyph-name="child" horiz-adv-x="731" d="M678.857 637.714l-166.857-166.857v-470.857q0-26.286-18.857-45.143t-45.143-18.857-45.143 18.857-18.857 45.143v219.429h-36.571v-219.429q0-26.286-18.857-45.143t-45.143-18.857-45.143 18.857-18.857 45.143v470.857l-166.857 166.857q-16 16-16 38.857t16 38.857 38.857 16 38.857-16l130.286-130.286h210.286l130.286 130.286q16 16 38.857 16t38.857-16 16-38.857-16-38.857zM493.714 731.428q0-53.143-37.429-90.571t-90.571-37.429-90.571 37.429-37.429 90.571 37.429 90.571 90.571 37.429 90.571-37.429 37.429-90.571z" />
<glyph unicode="&#xf1b5;" glyph-name="behance" horiz-adv-x="878" d="M713.143 877.714q68 0 116.286-48.286t48.286-116.286v-548.571q0-68-48.286-116.286t-116.286-48.286h-548.571q-68 0-116.286 48.286t-48.286 116.286v548.571q0 68 48.286 116.286t116.286 48.286h548.571zM285.143 668h-212v-449.714h218.286q66.857 0 112.571 32.857t45.714 97.429q0 90.286-81.714 114.286 61.143 29.714 61.143 93.714 0 32.571-11.143 55.143t-32.286 34.571-45.143 16.857-55.429 4.857zM272.571 486.286h-100.571v105.143h93.143q68 0 68-51.429 0-53.714-60.571-53.714zM277.714 294.857h-105.714v124h108q70.857 0 70.857-64.571 0-59.429-73.143-59.429zM649.143 276.571q-38.857 0-59.429 21.714t-20.571 61.143h234.857q0.571 5.714 0.571 17.143 0 75.429-42.571 126t-116.286 50.571q-73.143 0-120-49.143t-46.857-123.429q0-77.143 45.143-124t121.714-46.857q117.143 0 152.571 109.143h-78.857q-6.286-19.429-27.143-30.857t-43.143-11.429zM643.429 485.714q64.571 0 70.857-69.714h-145.143q2.286 32 22.286 50.857t52 18.857zM550.857 637.714h182.286v-44h-182.286v44z" />
<glyph unicode="&#xf1bc;" glyph-name="spotify" horiz-adv-x="878" d="M644 259.428q0 18.286-17.143 29.143-110.286 65.714-255.429 65.714-76 0-164-19.429-24-5.143-24-29.714 0-11.429 7.714-19.714t20.286-8.286q2.857 0 21.143 4.571 75.429 15.429 138.857 15.429 129.143 0 226.857-58.857 10.857-6.286 18.857-6.286 10.857 0 18.857 7.714t8 19.714zM698.857 382.286q0 22.857-20 34.857-135.429 80.571-313.143 80.571-87.429 0-173.143-24-27.429-7.429-27.429-36.571 0-14.286 10-24.286t24.286-10q4 0 21.143 4.571 69.714 18.857 143.429 18.857 159.429 0 278.857-70.857 13.714-7.429 21.714-7.429 14.286 0 24.286 10t10 24.286zM760.571 524q0 26.857-22.857 40-72 41.714-167.429 63.143t-196 21.429q-116.571 0-208-26.857-13.143-4-22-14.571t-8.857-27.714q0-17.714 11.714-29.714t29.429-12q6.286 0 22.857 4.571 76 21.143 175.429 21.143 90.857 0 176.857-19.429t144.857-54.286q12-6.857 22.857-6.857 16.571 0 28.857 11.714t12.286 29.429zM877.714 438.857q0-119.429-58.857-220.286t-159.714-159.714-220.286-58.857-220.286 58.857-159.714 159.714-58.857 220.286 58.857 220.286 159.714 159.714 220.286 58.857 220.286-58.857 159.714-159.714 58.857-220.286z" />
<glyph unicode="&#xf1be;" glyph-name="soundcloud" horiz-adv-x="1317" d="M448 166.857l9.143 137.714-9.143 298.857q-0.571 5.714-4.286 9.714t-9.429 4q-5.143 0-9.143-4t-4-9.714l-8-298.857 8-137.714q0.571-5.714 4.286-9.429t8.857-3.714q12.571 0 13.714 13.143zM617.143 183.428l6.286 120.571-6.857 334.857q0 9.143-7.429 13.714-4.571 2.857-9.143 2.857t-9.143-2.857q-7.429-4.571-7.429-13.714l-0.571-3.429-5.714-330.857q0-0.571 6.286-134.857v-0.571q0-5.714 3.429-9.714 5.143-6.286 13.143-6.286 6.286 0 11.429 5.143 5.143 4 5.143 11.429zM20 377.714l11.429-73.143-11.429-72q-1.143-5.143-5.143-5.143t-5.143 5.143l-9.714 72 9.714 73.143q1.143 5.143 5.143 5.143t5.143-5.143zM69.143 422.857l14.857-118.286-14.857-116q-1.143-5.143-5.714-5.143-5.143 0-5.143 5.714l-13.143 115.429 13.143 118.286q0 5.143 5.143 5.143 4.571 0 5.714-5.143zM121.714 444.571l14.286-140-14.286-135.429q0-6.286-6.286-6.286-5.714 0-6.857 6.286l-12 135.429 12 140q1.143 6.857 6.857 6.857 6.286 0 6.286-6.857zM175.429 448.571l13.143-144-13.143-139.429q-1.143-7.429-8-7.429-7.429 0-7.429 7.429l-12 139.429 12 144q0 7.429 7.429 7.429 6.857 0 8-7.429zM229.143 438.286l12-133.714-12-140.571q-1.143-9.143-9.143-9.143-3.429 0-6 2.571t-2.571 6.571l-11.429 140.571 11.429 133.714q0 3.429 2.571 6t6 2.571q8 0 9.143-8.571zM282.857 521.714l12-217.143-12-140.571q0-4-2.857-7.143t-6.857-3.143q-9.143 0-10.286 10.286l-10.286 140.571 10.286 217.143q1.143 10.286 10.286 10.286 4 0 6.857-3.143t2.857-7.143zM336.571 570.857l10.857-267.429-10.857-139.429q0-4.571-3.143-7.714t-7.714-3.143q-10.286 0-11.429 10.857l-9.143 139.429 9.143 267.429q1.143 10.857 11.429 10.857 4.571 0 7.714-3.143t3.143-7.714zM392.571 593.714l10.286-289.143-10.286-138.286q-1.143-12-12.571-12-10.857 0-12 12l-9.143 138.286 9.143 289.143q0 5.143 3.714 8.857t8.286 3.714q5.143 0 8.571-3.714t4-8.857zM616.571 169.714v0 0zM503.429 596l8.571-291.429-8.571-136.571q0-5.714-4.286-10t-10-4.286-9.714 4-4.571 10.286l-8 136.571 8 291.429q0 6.286 4.286 10.286t10 4 10-4 4.286-10.286zM560 585.143l8-281.143-8-134.857q0-6.286-4.571-10.857t-10.857-4.571-10.857 4.571-5.143 10.857l-6.857 134.857 6.857 281.143q0.571 6.857 5.143 11.429t10.857 4.571 10.571-4.571 4.857-11.429zM681.143 304l-8-132q0-7.429-5.143-12.571t-12.571-5.143-12.571 5.143-5.714 12.571l-3.429 65.143-3.429 66.857 6.857 363.429v1.714q1.143 8.571 6.857 13.714 5.143 4 11.429 4 4.571 0 8.571-2.857 8-4.571 9.143-14.857zM1316.571 314.857q0-66.857-47.429-114t-114.286-47.143h-449.143q-7.429 1.143-12.571 6.286t-5.143 12.571v513.714q0 13.143 16 18.857 48.571 19.429 103.429 19.429 111.429 0 193.143-75.143t91.429-184.857q30.286 12.571 62.857 12.571 66.857 0 114.286-47.429t47.429-114.857z" />
<glyph unicode="&#xf1cb;" glyph-name="codepen" d="M123.429 282.857l344.571-229.714v205.143l-190.857 127.429zM88 365.143l110.286 73.714-110.286 73.714v-147.429zM556 53.143l344.571 229.714-153.714 102.857-190.857-127.429v-205.143zM512 334.857l155.429 104-155.429 104-155.429-104zM277.143 492l190.857 127.429v205.143l-344.571-229.714zM825.714 438.857l110.286-73.714v147.429zM746.857 492l153.714 102.857-344.571 229.714v-205.143zM1024 594.857v-312q0-23.429-19.429-36.571l-468-312q-12-7.429-24.571-7.429t-24.571 7.429l-468 312q-19.429 13.143-19.429 36.571v312q0 23.429 19.429 36.571l468 312q12 7.429 24.571 7.429t24.571-7.429l468-312q19.429-13.143 19.429-36.571z" />
<glyph unicode="&#xf1d4;" glyph-name="hackernews" horiz-adv-x="878" d="M462.286 377.143l152 285.143h-64l-89.714-178.286q-13.714-27.429-25.143-52.571l-24 52.571-88.571 178.286h-68.571l150.286-281.714v-185.143h57.714v181.714zM877.714 713.143v-548.571q0-68-48.286-116.286t-116.286-48.286h-548.571q-68 0-116.286 48.286t-48.286 116.286v548.571q0 68 48.286 116.286t116.286 48.286h548.571q68 0 116.286-48.286t48.286-116.286z" />
<glyph unicode="&#xf202;" glyph-name="lastfm" d="M738.286 548.571q0-3.429 5.714-23.429 5.714-16.571 14.286-28.286t23.429-19.429 25.143-11.429 31.429-9.429q185.714-52 185.714-189.714 0-83.429-60.286-138.571t-145.429-55.143q-33.714 0-63.714 10.571t-52.286 26-44 42.571-36 50-30.571 59.143-24.857 58.857-22.571 60.857-20.286 54.286q-18.286 46.286-35.143 76.286t-42 55.143-59.429 36.571-81.143 11.429q-54.857 0-104.571-31.714t-78.857-82.571-29.143-105.714q0-91.429 60.857-159.714t150.571-68.286q101.143 0 147.429 54.286 32 36 47.429 66.286l48-86.857q-8.571-19.429-25.143-40l0.571-0.571q-74.857-86.857-221.714-86.857-84 0-154 45.143t-108.857 118.571-38.857 156.857q0 60 24.857 117.714t66.286 100.857 98.286 69.429 116.857 26.286q49.714 0 90.857-10.857t70.571-28.571 54.286-45.714 41.429-56.571 33.429-66.857 28.857-71.143 28.571-74.571 31.429-72.571q54.857-114.286 133.143-114.286 46.286 0 79.143 27.714t32.857 73.429q0 24-10.857 41.143t-28.857 26.286-41.429 18-48.286 15.429-50 19.429-46.286 29.714-37.143 46.857-22.286 70q-1.714 9.143-1.714 18.857 0 62.857 50 109.714t113.429 44.571q44.571-1.714 68.857-8.286t51.714-30.571h-0.571q6.857-6.286 13.143-14t14.857-20.571 10.857-15.714l-73.714-56.571q-14.857 28-30.857 40v0.571q-13.143 12-55.429 12-28 0-48-18.857t-20-47.429z" />
<glyph unicode="&#xf209;" glyph-name="angellist" horiz-adv-x="731" d="M544.571 734.857l-65.143-187.429 66.857-12q94.286 257.714 94.286 296 0 32-21.714 32-32.571 0-74.286-128.571zM373.714 342.286l18.857-50.286q21.143 24 40.571 38.286l-18.857 3.143t-22 4-18.571 4.857zM206.857 854.286q0-56 90.857-297.714 10.286 5.714 28 5.714 8.571 0 42.857-2.857l-69.143 200.571q-42.857 125.714-70.286 125.714-10.857 0-16.571-10t-5.714-21.429zM161.714 420.571q0-20.571 29.429-68t67.143-87.429 57.143-40q8 0 14.571 7.429t6.571 15.429q0 13.714-18.286 58.286-7.429 18.286-18.286 41.143t-27.143 50.857-35.143 46.286-35.429 18.286q-11.429 0-26-15.429t-14.571-26.857zM71.429 229.143q0-23.429 14.286-59.429 33.714-82.857 104.857-129.714t160.857-46.857q129.714 0 218.286 97.143 86.857 96.571 86.857 244 0 24.571-0.571 38.286t-6.571 35.429-17.429 32q-32 28-120.857 43.143t-154.571 15.143q-21.143 0-28-6.286-6.857-2.857-6.857-20 0-19.429 12.286-34.286t31.714-22.857 44.286-13.429 50-6.571 48.571-2.286 40 0h13.143q13.714 0 22.857-10.857 8.571-10.857 10.857-31.429-16-16-54.857-30.857-34.857-12.571-53.143-26.286-36.571-26.286-62-65.143t-25.429-78.286q0-17.714 10.571-50.571t10.571-50l-1.714-6.857q-2.286-6.857-2.286-8-78.286 5.714-83.429 123.429-4.571-1.143-23.429-1.143 1.143-4 1.143-12 0-30.286-23.143-51.143t-54-20.857q-46.857 0-95.143 44.571t-48.286 90.857q0 19.429 18.857 38.286 29.714-36.571 34.286-43.429 44-59.429 76-59.429 6.857 0 15.143 4.857t8.286 11.714q0 19.429-50 82.857t-66.571 63.429q-24.571 0-40-25.429t-15.429-51.714zM6.286 224q0 57.714 24.286 93.143t78 50.286q-16 42.286-16 59.429 0 35.429 34.857 70.286t69.714 34.857q16.571 0 40-8.571-93.143 264-93.143 324 0 45.714 23.429 74.571t68 28.857q74.857 0 185.714-332 3.429-9.714 4.571-13.143 3.429 9.143 16.571 45.429t24.857 67.714 30.857 72.857 36.857 70.286 40.286 49.429 43.714 20.571q40.571 0 64-28t23.429-69.714q0-61.714-90.857-314.286 34.857-8.571 57.429-26.286t33.429-44.571 14.857-53.429 4-63.143q0-85.714-26.857-160t-75.429-128.571-120.571-85.714-158.857-31.429q-63.429 0-127.429 24-85.143 32.571-147.429 109.429t-62.286 163.714z" />
<glyph unicode="&#xf230;" glyph-name="facebook" horiz-adv-x="878" d="M829.143 877.714q20 0 34.286-14.286t14.286-34.286v-780.571q0-20-14.286-34.286t-34.286-14.286h-223.429v340h113.714l17.143 132.571h-130.857v84.571q0 32 13.429 48t52.286 16l69.714 0.571v118.286q-36 5.143-101.714 5.143-77.714 0-124.286-45.714t-46.571-129.143v-97.714h-114.286v-132.571h114.286v-340h-420q-20 0-34.286 14.286t-14.286 34.286v780.571q0 20 14.286 34.286t34.286 14.286h780.571z" />
<glyph unicode="&#xf23a;" glyph-name="medium" d="M341.143 710.286v-670.286q0-14.286-7.143-24.286t-20.857-10q-9.714 0-18.857 4.571l-265.714 133.143q-12 5.714-20.286 19.143t-8.286 26.571v651.429q0 11.429 5.714 19.429t16.571 8q8 0 25.143-8.571l292-146.286q1.714-1.714 1.714-2.857zM377.714 652.571l305.143-494.857-305.143 152v342.857zM1024 642.286v-602.286q0-14.286-8-23.143t-21.714-8.857-26.857 7.429l-252 125.714zM1022.286 710.857q0-1.714-146.571-239.714t-171.714-278.571l-222.857 362.286 185.143 301.143q9.714 16 29.714 16 8 0 14.857-3.429l309.143-154.286q2.286-1.143 2.286-3.429z" />
</font></defs></svg>`,"assets/icomoon/selection.json":'{"IcoMoonType":"selection","icons":[{"icon":{"paths":["M1014.168 573.901l-168.296-517.964c-5.755-17.711-30.814-17.711-36.569 0l-111.86 344.263h-371.44l-111.862-344.263c-5.753-17.711-30.812-17.711-36.569 0l-168.292 517.964c-1.194 3.549-1.883 7.636-1.883 11.884 0 12.742 6.197 24.036 15.742 31.032l0.108 0.075 488.475 354.898 488.479-354.898c9.652-7.073 15.849-18.367 15.849-31.109 0-4.247-0.689-8.334-1.96-12.154l0.078 0.271z","M511.724 971.788l185.721-571.589h-371.444l185.721 571.589z","M511.724 971.788l-185.723-571.589h-260.282l446.005 571.587z","M65.718 400.2l-56.443 173.701c-1.193 3.548-1.882 7.635-1.882 11.882 0 12.742 6.199 24.037 15.746 31.033l0.108 0.075 488.477 354.898-446.005-571.589z","M65.718 400.202h260.282l-111.862-344.263c-5.755-17.715-30.814-17.715-36.567 0l-111.854 344.261z","M511.724 971.788l185.721-571.587h260.282l-446.003 571.587z","M957.727 400.2l56.441 173.701c1.194 3.549 1.882 7.635 1.882 11.883 0 12.742-6.198 24.036-15.744 31.031l-0.108 0.075-488.477 354.898 446.005-571.589z","M957.727 400.202h-260.284l111.86-344.263c5.755-17.715 30.816-17.715 36.569 0l111.856 344.261z"],"attrs":[{"fill":"rgb(252, 109, 38)"},{"fill":"rgb(226, 67, 41)"},{"fill":"rgb(252, 109, 38)"},{"fill":"rgb(252, 163, 38)"},{"fill":"rgb(226, 67, 41)"},{"fill":"rgb(252, 109, 38)"},{"fill":"rgb(252, 163, 38)"},{"fill":"rgb(226, 67, 41)"}],"isMulticolor":true,"isMulticolor2":false,"grid":0,"tags":["gitlab"],"colorPermutations":{"22667411252109381252163381":[{"f":1},{"f":0},{"f":1},{"f":2},{"f":0},{"f":1},{"f":2},{"f":0}]}},"attrs":[{"fill":"rgb(252, 109, 38)"},{"fill":"rgb(226, 67, 41)"},{"fill":"rgb(252, 109, 38)"},{"fill":"rgb(252, 163, 38)"},{"fill":"rgb(226, 67, 41)"},{"fill":"rgb(252, 109, 38)"},{"fill":"rgb(252, 163, 38)"},{"fill":"rgb(226, 67, 41)"}],"properties":{"order":68,"id":0,"name":"gitlab","prevSize":32,"code":59654,"codes":[59654,59655,59656,59657,59658,59659,59660,59661]},"setIdx":0,"setId":2,"iconIdx":0},{"icon":{"paths":["M7.088 258.169h1514.305v657.357h-1514.305v-657.357z","M62.779 1017.242c-20.502-7.884-44.267-30.405-54.946-52.075l-7.833-15.901v-874.534l7.833-15.901c10.997-22.315 34.403-44.204 55.853-52.23l17.647-6.602h1373.337l18.219 6.815c21.895 8.195 46.010 30.892 56.158 52.863l6.955 15.055v874.534l-6.958 15.055c-10.148 21.968-34.263 44.668-56.158 52.86l-18.216 6.818-687.584-0.169c-682.108-0.162-687.715-0.213-704.305-6.589zM1518.509 580.373v-306.882h-1501.019v613.764h1501.019v-306.882zM1207.299 842.733c-6.109-4.535-16.785-62.963-21.199-116.001-2.15-25.81-3.25-29.365-11.48-37.052-13.070-12.212-10.86-28.214 3.899-28.214 5.559 0 8.853-10.758 11.2-36.571 3.132-34.492 17.589-88.506 30.59-114.306 15.688-31.133 55.983-65.371 76.937-65.371 6.869 0 25.32 6.001 47.947 15.592 3.498 1.482 10.377 4.312 15.287 6.287 11.528 4.637 23.434 30.154 26.172 56.085 2.43 23.008-2.662 53.63-12.609 75.859-15.36 34.32-80.578 92.554-112.942 100.848l-16.082 4.121 0.095 30.408c0.121 37.719 4.624 73.604 11.49 91.584 2.875 7.531 4.188 14.737 2.916 16.009-2.582 2.579-48.856 3.218-52.221 0.722v0zM1278.156 626.31c12.991-12.342 27.254-29.388 31.699-37.885 9.788-18.725 15.233-49.804 12.619-72.052-2.983-25.374-5.775-27.2-18.925-12.348-21.73 24.538-34.784 53.264-44.744 98.447-8.882 40.295-9.785 46.277-7.006 46.277 1.507-0.003 13.369-10.1 26.357-22.439zM876.779 672.262c-2.051-32.409-4.427-60.060-5.282-61.443s-12.647-3.524-26.201-4.754c-27.874-2.525-32.774-5.209-32.774-17.952 0-14.256 10.211-19.303 34.12-16.855l19.943 2.045-0.14-12.364c-0.076-6.802-1.507-23.1-3.177-36.218-12.234-96.068-14.514-164.231-6.23-186.025 2.544-6.691 5.088-7.963 15.932-7.963 12.466 0 41.787 12.123 46.061 19.043 1.11 1.794 2.729 42.251 3.603 89.899 2.045 111.578 2.073 104.089-0.49 116.052-1.972 9.184-1.444 10.335 4.729 10.335 5.708 0 6.767-1.558 5.925-8.745-0.865-7.422 0.261-8.895 7.47-9.728 6.729-0.779 12.819 3.142 29.413 18.944 11.509 10.962 20.928 21.615 20.928 23.676 0 4.557-11.277 7.098-56.307 12.695l-13.379 1.663 1.584 59.856c1.794 67.889 3.644 63.218-25.905 65.511l-16.098 1.25-3.724-58.921zM410.576 723.217c-1.062-2.764-1.962-7.416-2.007-10.335-0.041-2.916-3.74-13.891-8.214-24.385-9.079-21.278-24.808-71.057-30.144-95.404-5.985-27.292-12.956-49.839-14.832-47.963-0.992 0.989-2.964 30.074-4.385 64.633-1.418 34.558-4.465 69.273-6.767 77.143l-4.185 14.311-62.82 5.81-7.044-8.834c-3.877-4.859-16.021-23.721-26.993-41.911s-20.35-32.666-20.846-32.176c-0.49 0.493 1.065 14.943 3.463 32.11 2.401 17.166 3.651 33.061 2.783 35.325-2.792 7.273-34.25 18.74-50.166 18.289-14.683-0.42-17.815-6.516-22.522-43.873-7.88-62.524-8.749-80.727-6.437-134.596l2.283-53.203 14.015-3.749c22.547-6.030 47.61-4.875 54.491 2.512 3.206 3.444 18.581 30.99 34.164 61.217l28.335 54.956 4.013-30.211c6.045-45.53 26.7-114.090 40.9-135.756 5.308-8.103 5.813-8.198 32.676-6.134 32.049 2.465 36.845 5.642 43.281 28.688 14.361 51.404 19.252 72.036 33.719 142.244 3.473 16.848 8.453 36.705 11.070 44.127 2.62 7.422 4.764 16.133 4.764 19.357s3.578 16.823 7.95 30.218c8.036 24.624 9.674 32.685 5.858 28.872-1.151-1.151-4.016-0.496-6.37 1.453-3.396 2.824-36.899 11.687-46.055 12.186-1.129 0.060-2.916-2.153-3.978-4.92v0zM538.048 721.577c-15.099-3.552-21.663-7.028-43.075-22.811-24.624-18.152-28.535-28.977-28.965-80.231-0.439-51.9 1.52-70.669 10.256-98.31 8.011-25.342 25.454-46.713 54.383-66.62 19.644-13.519 21.418-13.608 60.225-2.973 14.737 4.042 19.431 6.964 23.358 14.562 10.097 19.523 13.414 127.482 4.366 142.12-3.142 5.088-51.241 5.378-73.191 0.452-6.828-1.536-13.201-2.003-14.164-1.043-0.96 0.96-1.714 11.884-1.676 24.271 0.083 26.716 6.891 44.146 22.312 57.121 9.4 7.909 12.164 8.65 25.101 6.72 7.995-1.193 18.209-4.335 22.703-6.98 11.045-6.507 40.397-0.738 50.389 9.897l6.936 7.381-16.845 6.395c-30.92 11.738-76.075 16.184-102.114 10.052v0zM558.112 540.621c0-17.491-1.266-31.801-2.811-31.801-3.282 0-15.684 29.403-19.456 46.131-2.283 10.119-1.759 11.868 4.268 14.298 17.217 6.945 18 5.702 18-28.627zM740.969 716.539c-47.104-5.995-64.045-14.826-83.481-43.517-14.393-21.243-15.188-23.568-16.934-49.521-1.504-22.391-0.506-32.313 5.613-55.849 18.279-70.293 24.496-82.75 59.526-119.216 15.955-16.607 19.895-19.109 30.004-19.049 6.402 0.038 17.872 2.9 25.501 6.36 7.623 3.46 15.579 6.29 17.685 6.29s7.146 3.094 11.204 6.875c7.152 6.666 7.311 7.953 5.152 42.070-1.224 19.357-3.527 36.769-5.117 38.683-1.593 1.918-3.282 22.191-3.759 45.046l-0.865 41.564-17.92 5.012c-15.821 4.43-20.655 4.494-41.291 0.56-27.149-5.171-29.209-3.924-27.196 16.448 1.622 16.39 18.569 43.898 31.013 50.332 17.64 9.121 53.607 3.202 62.439-10.272 5.896-8.993 12.078-9.241 25.552-1.024 13.318 8.122 14.034 19.555 1.59 25.339-30.408 14.123-49.833 17.548-78.714 13.869v0zM734.192 581.168c1.056-3.934 1.883-22.897 1.835-42.137-0.080-33.522-0.293-34.6-5.050-25.816-6.112 11.283-23.399 60.699-23.399 66.888 0 5.298 4.757 7.623 16.324 7.969 6.112 0.184 8.895-1.679 10.291-6.904v0zM1033.054 710.853c-16.394-11.48-30.055-59.618-35.716-125.866-3.11-36.406-2.655-53.995 1.574-60.839 2.996-4.843 20.060-2.652 35.338 4.548 28.246 13.306 27.394 11.15 30.148 76.406 2.795 66.112 4.494 79.564 9.833 77.779 7.044-2.347 32.927-44.013 36.848-59.316 2.245-8.764 3.625-30.981 3.237-52.154-0.938-51.070 2.49-54.31 39.392-37.23 29.426 13.62 29.642 14.043 25.177 49.406-4.010 31.747-8.211 44.55-17.344 52.879-3.145 2.862-9.016 11.452-13.051 19.081-4.036 7.626-9.245 13.869-11.585 13.869-2.334 0-4.834 2.147-5.549 4.77-1.158 4.242-0.929 4.242 2.070 0 1.854-2.624 3.374-3.339 3.374-1.59 0 7.006-31.098 36.842-41.517 39.828-16.807 4.821-54.463 3.87-62.229-1.571v0z","M1207.299 842.733c-5.956-4.424-16.769-63.99-21.351-117.626-2.058-24.093-3.282-27.906-11.369-35.465-13.080-12.218-10.793-28.173 4.042-28.173 5.724 0 8.593-8.268 10.647-30.695 3.67-40.063 17.341-92.987 31.044-120.183 15.688-31.133 55.983-65.371 76.937-65.371 6.869 0 25.32 6.001 47.947 15.592 3.498 1.482 10.377 4.312 15.287 6.287 6.185 2.487 11.254 8.714 16.502 20.273 13.837 30.475 13.388 68.401-1.259 107.396-12.949 34.469-80.368 96.342-114.51 105.090l-16.196 4.15 0.095 30.408c0.121 37.719 4.624 73.604 11.49 91.584 2.875 7.531 4.188 14.737 2.916 16.009-2.582 2.579-48.856 3.218-52.221 0.722v0zM1278.156 626.31c13.163-12.501 27.387-29.645 32.132-38.715 9.89-18.912 14.845-47.975 12.148-71.282-2.977-25.743-5.696-27.209-20.117-10.828-22.080 25.078-33.604 52.154-46.083 108.28-2.916 13.118-6.017 26.354-6.885 29.416-2.942 10.358 5.104 5.645 28.806-16.871v0zM876.779 672.262c-2.051-32.409-4.427-60.060-5.282-61.443s-12.647-3.524-26.201-4.754c-27.874-2.525-32.774-5.209-32.774-17.952 0-14.256 10.211-19.303 34.12-16.855l19.943 2.045-0.14-12.364c-0.076-6.802-1.507-23.1-3.177-36.218-12.234-96.068-14.514-164.231-6.23-186.025 2.544-6.691 5.088-7.963 15.932-7.963 12.482 0 41.787 12.123 46.074 19.062 1.581 2.557 4.242 97.639 5.212 186.056 0.060 5.247-0.89 14.193-2.112 19.876-1.972 9.184-1.444 10.335 4.729 10.335 5.708 0 6.767-1.558 5.925-8.745-0.868-7.438 0.254-8.895 7.527-9.734 6.85-0.789 12.838 3.136 30.097 19.726 11.849 11.391 20.496 21.762 19.214 23.043-4.837 4.837-26.599 10.596-40.368 10.682-30.45 0.197-28.551-4.309-26.754 63.552 1.787 67.702 3.635 63.056-25.912 65.348l-16.098 1.25-3.724-58.921zM408.808 713.143c-2.073-8.306-7.238-22.976-11.477-32.596-8.281-18.791-18.96-54.285-30.144-100.174-3.835-15.742-8.109-30.71-9.493-33.264-3.574-6.592-5.702 14.263-7.607 74.606-0.884 27.985-3.508 57.322-5.826 65.193l-4.22 14.311-62.82 5.81-7.044-8.834c-3.877-4.859-16.021-23.721-26.993-41.911s-20.34-32.679-20.823-32.196c-0.483 0.48 0.973 14.326 3.234 30.765 2.258 16.438 3.463 32.361 2.671 35.385-2.175 8.31-32.157 20.092-49.848 19.593-14.692-0.42-17.818-6.51-22.493-43.873-7.982-63.723-8.691-78.505-6.408-133.32l2.271-54.495 13.989-3.743c22.528-6.026 47.591-4.866 54.469 2.519 3.206 3.444 18.581 30.99 34.164 61.217l28.335 54.956 4.013-30.211c5.912-44.525 23.527-104.133 38.705-130.97l5.963-10.545 28.080 0.687c23.104 0.566 29.19 1.797 34.339 6.945 7.979 7.979 23.046 65.027 45.212 171.161 2.636 12.638 6.891 28.917 9.458 36.18 2.563 7.26 4.659 15.84 4.659 19.065s3.578 16.823 7.95 30.218c8.036 24.624 9.674 32.685 5.858 28.872-1.151-1.151-4.016-0.496-6.37 1.453-3.39 2.814-36.854 11.677-46.020 12.186-1.107 0.067-3.711-6.681-5.785-14.988v0zM538.048 721.577c-15.099-3.552-21.663-7.028-43.075-22.811-24.455-18.028-28.573-29.181-29.047-78.641-0.48-50.602 1.775-72.628 10.167-99.328 7.823-24.869 26.595-48.099 53.76-66.515 16.4-11.118 17.866-11.503 34.619-9.073 29.887 4.338 44.678 10.275 49.712 19.952 9.897 19.027 13.328 127.714 4.484 142.024-3.155 5.104-55.573 5.295-73.124 0.261-5.829-1.67-11.827-2.28-13.325-1.355s-2.697 11.976-2.659 24.554c0.083 27.082 6.821 44.43 22.312 57.462 9.4 7.909 12.164 8.65 25.101 6.72 7.995-1.193 18.209-4.335 22.703-6.98 11.045-6.503 40.397-0.738 50.389 9.897l6.936 7.381-16.845 6.395c-30.914 11.744-76.069 16.19-102.107 10.059v0zM558.716 560.497c1.523-18.41-0.849-51.677-3.686-51.677-3.059 0-15.554 30.046-19.183 46.131-2.28 10.119-1.759 11.868 4.268 14.298 13.881 5.6 17.557 3.87 18.601-8.752zM740.969 716.539c-47.11-5.998-64.045-14.823-83.481-43.523-14.584-21.533-15.169-23.291-17.010-51.111-1.31-19.857-0.636-32.272 2.172-39.946 2.242-6.122 6.328-21.485 9.086-34.135 9.808-45.015 20.391-64.448 54.367-99.818 15.551-16.187 19.51-18.683 29.591-18.62 6.402 0.038 17.872 2.9 25.501 6.36 7.623 3.46 15.579 6.29 17.688 6.29 2.102 0 7.143 3.094 11.2 6.875 7.152 6.666 7.311 7.953 5.152 42.070-1.224 19.357-3.527 36.769-5.117 38.683-1.593 1.918-3.282 22.191-3.759 45.046l-0.865 41.564-17.92 5.012c-15.821 4.43-20.655 4.494-41.291 0.56-25.858-4.926-28.109-3.937-28.195 12.377-0.067 12.692 11.289 35.182 24.36 48.255 9.136 9.133 13.026 10.787 25.416 10.787 20.369 0 38.976-6.211 44.674-14.908 5.896-8.993 12.078-9.241 25.552-1.024 16.025 9.769 14.215 19.841-5.060 28.135-27.037 11.627-45.46 14.457-72.062 11.070v0zM734.192 581.168c1.056-3.934 1.883-22.897 1.835-42.137-0.080-33.522-0.293-34.6-5.050-25.816-6.112 11.283-23.399 60.699-23.399 66.888 0 5.298 4.757 7.623 16.324 7.969 6.112 0.184 8.895-1.679 10.291-6.904v0zM1033.089 710.879c-16.537-11.585-30.068-60.009-36.018-128.916-2.897-33.553-2.337-51.047 1.841-57.815 2.996-4.843 20.060-2.652 35.338 4.548 28.246 13.306 27.394 11.15 30.148 76.406 2.795 66.112 4.494 79.564 9.833 77.779 7.041-2.344 32.927-44.007 36.845-59.3 2.15-8.389 3.679-28.691 3.406-45.126-0.277-16.435-0.506-33.134-0.509-37.106-0.006-9.136 6.099-16.629 13.547-16.629 8.004 0 45.708 17.815 50.869 24.035 3.476 4.188 3.565 10.52 0.493 34.832-4.010 31.747-8.211 44.55-17.344 52.879-3.145 2.862-9.019 11.452-13.051 19.081-4.036 7.626-9.245 13.869-11.585 13.869-2.334 0-4.834 2.147-5.549 4.77-1.158 4.242-0.929 4.242 2.070 0 1.854-2.624 3.374-3.339 3.374-1.59 0 7.006-31.098 36.842-41.517 39.828-16.759 4.808-54.46 3.87-62.191-1.546v0z"],"attrs":[{"fill":"rgb(255, 255, 255)"},{"fill":"rgb(240, 1, 1)"},{"fill":"rgb(3, 3, 3)"}],"isMulticolor":true,"width":1536,"grid":0,"tags":["meetup"],"colorPermutations":{"24011125525525513331":[{"f":2},{"f":1},{"f":0}]}},"attrs":[{"fill":"rgb(255, 255, 255)"},{"fill":"rgb(240, 1, 1)"},{"fill":"rgb(3, 3, 3)"}],"properties":{"order":63,"id":0,"prevSize":32,"code":59649,"codes":[59649,59650,59651],"name":"meetup"},"setIdx":1,"setId":1,"iconIdx":41},{"icon":{"paths":["M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM896 648c0 137-111.4 248-249.4 248h-268.8c-138 0-249.8-111-249.8-248v-272c0-137 111.8-248 249.8-248h125.8c138 0 248.4 103 248.4 240 1.8 25.6 25 48 51.2 48h43c27.6 0 49.6 29 49.6 56.4v175.6z","M704 640c0 35.2-28.8 64-64 64h-256c-35.2 0-64-28.8-64-64v0c0-35.2 28.8-64 64-64h256c35.2 0 64 28.8 64 64v0z","M576 384c0 35.2-28.8 64-64 64h-128c-35.2 0-64-28.8-64-64v0c0-35.2 28.8-64 64-64h128c35.2 0 64 28.8 64 64v0z"],"attrs":[],"isMulticolor":false,"grid":0,"tags":["blogger"]},"attrs":[],"properties":{"order":61,"id":1,"prevSize":32,"code":59648,"name":"blogger"},"setIdx":1,"setId":1,"iconIdx":42},{"icon":{"paths":["M616.2 331s6.6 67.6-36.6 104.2c-17.4-11-39.2-17.2-65-17.2-23.8 0-47.2 6.8-67.4 19.4-46.2-36.2-39.2-106.4-39.2-106.4-51.2 99.8 2.6 138.8 3.8 139.8-14.2 20.4-23 46.2-23 76.4 0 81 59.4 128.8 133.4 128.8 37.8 0 70-12.6 95.6-28.6l-17.6-31.6c-22.2 13-44.8 21.2-71.4 21.2-49.4 0-85.6-28.6-88.6-77h185.2c1-6 2.6-15.6 2.6-25.6 0-24.2-5.2-45.8-15.2-63.6 4.8-3.8 52.6-43.8 3.4-139.8zM439.6 525.6c6.6-43.8 39.2-68.4 76-68.4 42.2 0 66 24.6 66 68.4h-142zM512 896c-211.8 0-384-172.2-384-384s172.2-384 384-384 384 172.2 384 384-172.2 384-384 384zM512 177.8c-184.4 0-334.2 150-334.2 334.2 0 184.4 150 334.2 334.2 334.2 184.4 0 334.2-150 334.2-334.2 0-184.4-149.8-334.2-334.2-334.2z"],"attrs":[],"isMulticolor":false,"grid":0,"tags":["logo"]},"attrs":[],"properties":{"order":48,"id":0,"prevSize":32,"code":58881,"name":"exercism"},"setIdx":1,"setId":1,"iconIdx":43},{"icon":{"paths":["M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"],"attrs":[{}],"isMulticolor":false,"isMulticolor2":false,"tags":["telegram"],"grid":14},"attrs":[{}],"properties":{"order":1,"id":0,"prevSize":28,"code":59652,"name":"telegram"},"setIdx":1,"setId":1,"iconIdx":1},{"icon":{"paths":["M713.143 73.143q68 0 116.286 48.286t48.286 116.286v548.571q0 68-48.286 116.286t-116.286 48.286h-548.571q-68 0-116.286-48.286t-48.286-116.286v-548.571q0-68 48.286-116.286t116.286-48.286h548.571zM398.857 512q0-50.286-35.429-85.714t-85.714-35.429-85.714 35.429-35.429 85.714 35.429 85.714 85.714 35.429 85.714-35.429 35.429-85.714zM721.143 512q0-50.286-35.429-85.714t-85.714-35.429-85.714 35.429-35.429 85.714 35.429 85.714 85.714 35.429 85.714-35.429 35.429-85.714z"],"width":877.7150573730469,"attrs":[],"isMulticolor":false,"tags":["flickr"],"defaultCode":61806,"grid":14},"attrs":[],"properties":{"name":"flickr","id":330,"order":64,"prevSize":28,"code":61806},"setIdx":1,"setId":1,"iconIdx":2},{"icon":{"paths":["M341.143 240.571v670.286q0 14.286-7.143 24.286t-20.857 10q-9.714 0-18.857-4.571l-265.714-133.143q-12-5.714-20.286-19.143t-8.286-26.571v-651.429q0-11.429 5.714-19.429t16.571-8q8 0 25.143 8.571l292 146.286q1.714 1.714 1.714 2.857zM377.714 298.286l305.143 494.857-305.143-152v-342.857zM1024 308.571v602.286q0 14.286-8 23.143t-21.714 8.857-26.857-7.429l-252-125.714zM1022.286 240q0 1.714-146.571 239.714t-171.714 278.571l-222.857-362.286 185.143-301.143q9.714-16 29.714-16 8 0 14.857 3.429l309.143 154.286q2.286 1.143 2.286 3.429z"],"width":1024.0000438690186,"attrs":[],"isMulticolor":false,"tags":["medium"],"defaultCode":62010,"grid":14},"attrs":[],"properties":{"name":"medium","id":519,"order":62,"prevSize":28,"code":62010},"setIdx":1,"setId":1,"iconIdx":3},{"icon":{"paths":["M512 950.857q-14.857 0-25.143-10.286l-356.571-344q-5.714-4.571-15.714-14.857t-31.714-37.429-38.857-55.714-30.571-69.143-13.429-78.857q0-125.714 72.571-196.571t200.571-70.857q35.429 0 72.286 12.286t68.571 33.143 54.571 39.143 43.429 38.857q20.571-20.571 43.429-38.857t54.571-39.143 68.571-33.143 72.286-12.286q128 0 200.571 70.857t72.571 196.571q0 126.286-130.857 257.143l-356 342.857q-10.286 10.286-25.143 10.286z"],"attrs":[],"isMulticolor":false,"tags":["heart"],"defaultCode":61444,"grid":14},"attrs":[],"properties":{"id":0,"order":22,"prevSize":28,"code":61444,"name":"heart"},"setIdx":1,"setId":1,"iconIdx":4},{"icon":{"width":951,"paths":["M936.571 273.143q22.857 32.571 10.286 73.714l-157.143 517.714q-10.857 36.571-43.714 61.429t-70 24.857h-527.429q-44 0-84.857-30.571t-56.857-75.143q-13.714-38.286-1.143-72.571 0-2.286 1.714-15.429t2.286-21.143q0.571-4.571-1.714-12.286t-1.714-11.143q1.143-6.286 4.571-12t9.429-13.429 9.429-13.429q13.143-21.714 25.714-52.286t17.143-52.286q1.714-5.714 0.286-17.143t-0.286-16q1.714-6.286 9.714-16t9.714-13.143q12-20.571 24-52.571t14.286-51.429q0.571-5.143-1.429-18.286t0.286-16q2.286-7.429 12.571-17.429t12.571-12.857q10.857-14.857 24.286-48.286t15.714-55.143q0.571-4.571-1.714-14.571t-1.143-15.143q1.143-4.571 5.143-10.286t10.286-13.143 9.714-12q4.571-6.857 9.429-17.429t8.571-20 9.143-20.571 11.143-18.286 15.143-13.429 20.571-6.571 27.143 3.143l-0.571 1.714q21.714-5.143 29.143-5.143h434.857q42.286 0 65.143 32t10.286 74.286l-156.571 517.714q-20.571 68-40.857 87.714t-73.429 19.714h-496.571q-15.429 0-21.714 8.571-6.286 9.143-0.571 24.571 13.714 40 82.286 40h527.429q16.571 0 32-8.857t20-23.714l171.429-564q4-12.571 2.857-32.571 21.714 8.571 33.714 24.571zM328.571 274.286q-2.286 7.429 1.143 12.857t11.429 5.429h347.429q7.429 0 14.571-5.429t9.429-12.857l12-36.571q2.286-7.429-1.143-12.857t-11.429-5.429h-347.429q-7.429 0-14.571 5.429t-9.429 12.857zM281.143 420.571q-2.286 7.429 1.143 12.857t11.429 5.429h347.429q7.429 0 14.571-5.429t9.429-12.857l12-36.571q2.286-7.429-1.143-12.857t-11.429-5.429h-347.429q-7.429 0-14.571 5.429t-9.429 12.857z"],"attrs":[],"isMulticolor":false,"tags":["book"],"defaultCode":61485,"grid":14},"attrs":[],"properties":{"id":1,"order":20,"prevSize":28,"code":61485,"name":"book"},"setIdx":1,"setId":1,"iconIdx":5},{"icon":{"width":877.7142857142858,"paths":["M135.429 808h132v-396.571h-132v396.571zM276 289.143q-0.571-29.714-20.571-49.143t-53.143-19.429-54 19.429-20.857 49.143q0 29.143 20.286 48.857t52.857 19.714h0.571q33.714 0 54.286-19.714t20.571-48.857zM610.286 808h132v-227.429q0-88-41.714-133.143t-110.286-45.143q-77.714 0-119.429 66.857h1.143v-57.714h-132q1.714 37.714 0 396.571h132v-221.714q0-21.714 4-32 8.571-20 25.714-34t42.286-14q66.286 0 66.286 89.714v212zM877.714 237.714v548.571q0 68-48.286 116.286t-116.286 48.286h-548.571q-68 0-116.286-48.286t-48.286-116.286v-548.571q0-68 48.286-116.286t116.286-48.286h548.571q68 0 116.286 48.286t48.286 116.286z"],"attrs":[],"isMulticolor":false,"tags":["linkedin-square"],"defaultCode":61580,"grid":14},"attrs":[],"properties":{"id":2,"order":8,"prevSize":28,"code":61580,"name":"linkedin"},"setIdx":1,"setId":1,"iconIdx":6},{"icon":{"width":951,"paths":["M925.714 233.143q-38.286 56-92.571 95.429 0.571 8 0.571 24 0 74.286-21.714 148.286t-66 142-105.429 120.286-147.429 83.429-184.571 31.143q-154.857 0-283.429-82.857 20 2.286 44.571 2.286 128.571 0 229.143-78.857-60-1.143-107.429-36.857t-65.143-91.143q18.857 2.857 34.857 2.857 24.571 0 48.571-6.286-64-13.143-106-63.714t-42-117.429v-2.286q38.857 21.714 83.429 23.429-37.714-25.143-60-65.714t-22.286-88q0-50.286 25.143-93.143 69.143 85.143 168.286 136.286t212.286 56.857q-4.571-21.714-4.571-42.286 0-76.571 54-130.571t130.571-54q80 0 134.857 58.286 62.286-12 117.143-44.571-21.143 65.714-81.143 101.714 53.143-5.714 106.286-28.571z"],"attrs":[],"isMulticolor":false,"tags":["twitter"],"defaultCode":61593,"grid":14},"attrs":[],"properties":{"id":3,"order":44,"prevSize":28,"code":61593,"name":"twitter"},"setIdx":1,"setId":1,"iconIdx":7},{"icon":{"width":877.7142857142858,"paths":["M877.714 512q0 143.429-83.714 258t-216.286 158.571q-15.429 2.857-22.571-4t-7.143-17.143v-120.571q0-55.429-29.714-81.143 32.571-3.429 58.571-10.286t53.714-22.286 46.286-38 30.286-60 11.714-86q0-69.143-45.143-117.714 21.143-52-4.571-116.571-16-5.143-46.286 6.286t-52.571 25.143l-21.714 13.714q-53.143-14.857-109.714-14.857t-109.714 14.857q-9.143-6.286-24.286-15.429t-47.714-22-49.143-7.714q-25.143 64.571-4 116.571-45.143 48.571-45.143 117.714 0 48.571 11.714 85.714t30 60 46 38.286 53.714 22.286 58.571 10.286q-22.857 20.571-28 58.857-12 5.714-25.714 8.571t-32.571 2.857-37.429-12.286-31.714-35.714q-10.857-18.286-27.714-29.714t-28.286-13.714l-11.429-1.714q-12 0-16.571 2.571t-2.857 6.571 5.143 8 7.429 6.857l4 2.857q12.571 5.714 24.857 21.714t18 29.143l5.714 13.143q7.429 21.714 25.143 35.143t38.286 17.143 39.714 4 31.714-2l13.143-2.286q0 21.714 0.286 50.857t0.286 30.857q0 10.286-7.429 17.143t-22.857 4q-132.571-44-216.286-158.571t-83.714-258q0-119.429 58.857-220.286t159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"],"attrs":[],"isMulticolor":false,"tags":["github"],"defaultCode":61595,"grid":14},"attrs":[],"properties":{"id":4,"order":9,"prevSize":28,"code":61595,"name":"github"},"setIdx":1,"setId":1,"iconIdx":8},{"icon":{"width":951,"paths":["M832 694.857q0-22.857-16-38.857l-118.857-118.857q-16-16-38.857-16-24 0-41.143 18.286 1.714 1.714 10.857 10.571t12.286 12.286 8.571 10.857 7.429 14.571 2 15.714q0 22.857-16 38.857t-38.857 16q-8.571 0-15.714-2t-14.571-7.429-10.857-8.571-12.286-12.286-10.571-10.857q-18.857 17.714-18.857 41.714 0 22.857 16 38.857l117.714 118.286q15.429 15.429 38.857 15.429 22.857 0 38.857-14.857l84-83.429q16-16 16-38.286zM430.286 292q0-22.857-16-38.857l-117.714-118.286q-16-16-38.857-16-22.286 0-38.857 15.429l-84 83.429q-16 16-16 38.286 0 22.857 16 38.857l118.857 118.857q15.429 15.429 38.857 15.429 24 0 41.143-17.714-1.714-1.714-10.857-10.571t-12.286-12.286-8.571-10.857-7.429-14.571-2-15.714q0-22.857 16-38.857t38.857-16q8.571 0 15.714 2t14.571 7.429 10.857 8.571 12.286 12.286 10.571 10.857q18.857-17.714 18.857-41.714zM941.714 694.857q0 68.571-48.571 116l-84 83.429q-47.429 47.429-116 47.429-69.143 0-116.571-48.571l-117.714-118.286q-47.429-47.429-47.429-116 0-70.286 50.286-119.429l-50.286-50.286q-49.143 50.286-118.857 50.286-68.571 0-116.571-48l-118.857-118.857q-48-48-48-116.571t48.571-116l84-83.429q47.429-47.429 116-47.429 69.143 0 116.571 48.571l117.714 118.286q47.429 47.429 47.429 116 0 70.286-50.286 119.429l50.286 50.286q49.143-50.286 118.857-50.286 68.571 0 116.571 48l118.857 118.857q48 48 48 116.571z"],"attrs":[],"isMulticolor":false,"tags":["chain","link"],"defaultCode":61633,"grid":14},"attrs":[],"properties":{"id":5,"order":5,"prevSize":28,"code":61633,"name":"link"},"setIdx":1,"setId":1,"iconIdx":9},{"icon":{"width":877.7142857142858,"paths":["M877.714 768v73.143q0 14.857-10.857 25.714t-25.714 10.857h-804.571q-14.857 0-25.714-10.857t-10.857-25.714v-73.143q0-14.857 10.857-25.714t25.714-10.857h804.571q14.857 0 25.714 10.857t10.857 25.714zM877.714 475.429v73.143q0 14.857-10.857 25.714t-25.714 10.857h-804.571q-14.857 0-25.714-10.857t-10.857-25.714v-73.143q0-14.857 10.857-25.714t25.714-10.857h804.571q14.857 0 25.714 10.857t10.857 25.714zM877.714 182.857v73.143q0 14.857-10.857 25.714t-25.714 10.857h-804.571q-14.857 0-25.714-10.857t-10.857-25.714v-73.143q0-14.857 10.857-25.714t25.714-10.857h804.571q14.857 0 25.714 10.857t10.857 25.714z"],"attrs":[],"isMulticolor":false,"tags":["bars","navicon","reorder"],"defaultCode":61641,"grid":14},"attrs":[],"properties":{"id":6,"order":52,"prevSize":28,"code":61641,"name":"bars"},"setIdx":1,"setId":1,"iconIdx":10},{"icon":{"width":877.7142857142858,"paths":["M877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857q-63.429 0-124.571-18.286 33.714-53.143 44.571-93.714 5.143-19.429 30.857-120.571 11.429 22.286 41.714 38.571t65.143 16.286q69.143 0 123.429-39.143t84-107.714 29.714-154.286q0-65.143-34-122.286t-98.571-93.143-145.714-36q-60 0-112 16.571t-88.286 44-62.286 63.143-38.286 74-12.286 76.571q0 59.429 22.857 104.571t66.857 63.429q17.143 6.857 21.714-11.429 1.143-4 4.571-17.714t4.571-17.143q3.429-13.143-6.286-24.571-29.143-34.857-29.143-86.286 0-86.286 59.714-148.286t156.286-62q86.286 0 134.571 46.857t48.286 121.714q0 97.143-39.143 165.143t-100.286 68q-34.857 0-56-24.857t-13.143-59.714q4.571-20 15.143-53.429t17.143-58.857 6.571-43.143q0-28.571-15.429-47.429t-44-18.857q-35.429 0-60 32.571t-24.571 81.143q0 41.714 14.286 69.714l-56.571 238.857q-9.714 40-7.429 101.143-117.714-52-190.286-160.571t-72.571-241.714q0-119.429 58.857-220.286t159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"],"attrs":[],"isMulticolor":false,"tags":["pinterest"],"defaultCode":61650,"grid":14},"attrs":[],"properties":{"id":7,"order":34,"prevSize":28,"code":61650,"name":"pinterest"},"setIdx":1,"setId":1,"iconIdx":11},{"icon":{"width":951,"paths":["M420 454.857q0 20.571 18.286 40.286t44.286 38.857 51.714 42 44 59.429 18.286 81.143q0 51.429-27.429 98.857-41.143 69.714-120.571 102.571t-170.286 32.857q-75.429 0-140.857-23.714t-98-78.571q-21.143-34.286-21.143-74.857 0-46.286 25.429-85.714t67.714-65.714q74.857-46.857 230.857-57.143-18.286-24-27.143-42.286t-8.857-41.714q0-20.571 12-48.571-26.286 2.286-38.857 2.286-84.571 0-142.571-55.143t-58-139.714q0-46.857 20.571-90.857t56.571-74.857q44-37.714 104.286-56t124.286-18.286h238.857l-78.857 50.286h-74.857q42.286 36 64 76t21.714 91.429q0 41.143-14 74t-33.714 53.143-39.714 37.143-34 35.143-14 37.714zM336.571 400q21.714 0 44.571-9.429t37.714-24.857q30.286-32.571 30.286-90.857 0-33.143-9.714-71.429t-27.714-74-48.286-59.143-66.857-23.429q-24 0-47.143 11.143t-37.429 30q-26.857 33.714-26.857 91.429 0 26.286 5.714 55.714t18 58.857 29.714 52.857 42.857 38.286 55.143 14.857zM337.714 898.857q33.143 0 63.714-7.429t56.571-22.286 41.714-41.714 15.714-62.286q0-14.286-4-28t-8.286-24-15.429-23.714-16.857-20-22-19.714-20.857-16.571-23.714-17.143-20.857-14.857q-9.143-1.143-27.429-1.143-30.286 0-60 4t-61.429 14.286-55.429 26.286-39.143 42.571-15.429 60.286q0 40 20 70.571t52.286 47.429 68 25.143 72.857 8.286zM800.571 398.286h121.714v61.714h-121.714v125.143h-60v-125.143h-121.143v-61.714h121.143v-124h60v124z"],"attrs":[],"isMulticolor":false,"tags":["google-plus"],"defaultCode":61653,"grid":14},"attrs":[],"properties":{"id":8,"order":30,"prevSize":28,"code":61653,"name":"googleplus"},"setIdx":1,"setId":1,"iconIdx":12},{"icon":{"width":877.7142857142858,"paths":["M877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"],"attrs":[],"isMulticolor":false,"tags":["circle"],"defaultCode":61713,"grid":14},"attrs":[],"properties":{"id":9,"order":51,"prevSize":28,"code":61713,"name":"circle"},"setIdx":1,"setId":1,"iconIdx":13},{"icon":{"width":1097,"paths":["M352.571 799.429l-28.571 28.571q-5.714 5.714-13.143 5.714t-13.143-5.714l-266.286-266.286q-5.714-5.714-5.714-13.143t5.714-13.143l266.286-266.286q5.714-5.714 13.143-5.714t13.143 5.714l28.571 28.571q5.714 5.714 5.714 13.143t-5.714 13.143l-224.571 224.571 224.571 224.571q5.714 5.714 5.714 13.143t-5.714 13.143zM690.286 189.714l-213.143 737.714q-2.286 7.429-8.857 11.143t-13.429 1.429l-35.429-9.714q-7.429-2.286-11.143-8.857t-1.429-14l213.143-737.714q2.286-7.429 8.857-11.143t13.429-1.429l35.429 9.714q7.429 2.286 11.143 8.857t1.429 14zM1065.714 561.714l-266.286 266.286q-5.714 5.714-13.143 5.714t-13.143-5.714l-28.571-28.571q-5.714-5.714-5.714-13.143t5.714-13.143l224.571-224.571-224.571-224.571q-5.714-5.714-5.714-13.143t5.714-13.143l28.571-28.571q5.714-5.714 13.143-5.714t13.143 5.714l266.286 266.286q5.714 5.714 5.714 13.143t-5.714 13.143z"],"attrs":[],"isMulticolor":false,"tags":["code"],"defaultCode":61729,"grid":14},"attrs":[],"properties":{"id":10,"order":15,"prevSize":28,"code":61729,"name":"code"},"setIdx":1,"setId":1,"iconIdx":14},{"icon":{"width":877.7142857142858,"paths":["M554.857 710.857v120.571q0 38.286-22.286 38.286-13.143 0-25.714-12.571v-172q12.571-12.571 25.714-12.571 22.286 0 22.286 38.286zM748 711.429v26.286h-51.429v-26.286q0-38.857 25.714-38.857t25.714 38.857zM196 586.857h61.143v-53.714h-178.286v53.714h60v325.143h57.143v-325.143zM360.571 912h50.857v-282.286h-50.857v216q-17.143 24-32.571 24-10.286 0-12-12-0.571-1.714-0.571-20v-208h-50.857v223.429q0 28 4.571 41.714 6.857 21.143 33.143 21.143 27.429 0 58.286-34.857v30.857zM605.714 827.429v-112.571q0-41.714-5.143-56.571-9.714-32-40.571-32-28.571 0-53.143 30.857v-124h-50.857v378.857h50.857v-27.429q25.714 31.429 53.143 31.429 30.857 0 40.571-31.429 5.143-15.429 5.143-57.143zM798.857 821.714v-7.429h-52q0 29.143-1.143 34.857-4 20.571-22.857 20.571-26.286 0-26.286-39.429v-49.714h102.286v-58.857q0-45.143-15.429-66.286-22.286-29.143-60.571-29.143-38.857 0-61.143 29.143-16 21.143-16 66.286v98.857q0 45.143 16.571 66.286 22.286 29.143 61.714 29.143 41.143 0 61.714-30.286 10.286-15.429 12-30.857 1.143-5.143 1.143-33.143zM451.429 300v-120q0-39.429-24.571-39.429t-24.571 39.429v120q0 40 24.571 40t24.571-40zM862.286 729.143q0 133.714-14.857 200-8 33.714-33.143 56.571t-58.286 26.286q-105.143 12-317.143 12t-317.143-12q-33.143-3.429-58.571-26.286t-32.857-56.571q-14.857-64-14.857-200 0-133.714 14.857-200 8-33.714 33.143-56.571t58.857-26.857q104.571-11.429 316.571-11.429t317.143 11.429q33.143 4 58.571 26.857t32.857 56.571q14.857 64 14.857 200zM292 0h58.286l-69.143 228v154.857h-57.143v-154.857q-8-42.286-34.857-121.143-21.143-58.857-37.143-106.857h60.571l40.571 150.286zM503.429 190.286v100q0 46.286-16 67.429-21.143 29.143-60.571 29.143-38.286 0-60-29.143-16-21.714-16-67.429v-100q0-45.714 16-66.857 21.714-29.143 60-29.143 39.429 0 60.571 29.143 16 21.143 16 66.857zM694.857 97.714v285.143h-52v-31.429q-30.286 35.429-58.857 35.429-26.286 0-33.714-21.143-4.571-13.714-4.571-42.857v-225.143h52v209.714q0 18.857 0.571 20 1.714 12.571 12 12.571 15.429 0 32.571-24.571v-217.714h52z"],"attrs":[],"isMulticolor":false,"tags":["youtube"],"defaultCode":61799,"grid":14},"attrs":[],"properties":{"id":11,"order":46,"prevSize":28,"code":61799,"name":"youtube"},"setIdx":1,"setId":1,"iconIdx":15},{"icon":{"width":805,"paths":["M530.286 800.571v86.286l-404 0.571v-86.286zM668 602.857v400.571l-0.571 20v0.571l-667.429-0.571v-420.571h69.143v353.143h530.286v-353.143h68.571zM137.714 653.143l402.286 37.143-7.429 85.714-402.857-37.143zM176.571 472.571l390.286 104.571-22.286 83.429-390.286-104.571zM269.714 273.143l348 205.714-44 74.286-348-205.714zM475.429 84l227.429 334.286-70.857 48.571-228-333.714zM734.286 0l69.143 398.286-85.143 14.857-69.143-398.286z"],"attrs":[],"isMulticolor":false,"tags":["stack-overflow"],"defaultCode":61804,"grid":14},"attrs":[],"properties":{"id":12,"order":42,"prevSize":28,"code":61804,"name":"stackoverflow"},"setIdx":1,"setId":1,"iconIdx":16},{"icon":{"width":805,"paths":["M465.714 490.857q4.571 36-28.857 57.714t-63.714 3.429q-22.286-9.714-30.571-33.143t-0.286-46.857 29.714-33.143q20.571-10.286 41.429-6.857t36.571 20.286 15.714 38.571zM529.143 478.857q-8-61.143-64.571-93.714t-112.571-7.429q-36 16-57.429 50.571t-19.714 74q2.286 52 44.286 88.571t94.571 32q52-4.571 86.857-48t28.571-96zM665.714 169.143q-11.429-15.429-32-25.429t-33.143-12.571-40.571-7.143q-166.286-26.857-323.429 1.143-24.571 4-37.714 6.857t-31.429 12.571-28.571 24.571q17.143 16 43.429 26t42 12.571 50 6.571q130.286 16.571 256 0.571 36-4.571 51.143-6.857t41.429-12.286 42.857-26.571zM698.286 760.571q-4.571 14.857-8.857 43.714t-8 48-16.286 40-33.143 32.286q-49.143 27.429-108.286 40.857t-115.429 12.571-115.143-10.571q-26.286-4.571-46.571-10.286t-43.714-15.429-41.714-24.857-29.714-35.143q-14.286-54.857-32.571-166.857l3.429-9.143 10.286-5.143q127.429 84.571 289.429 84.571t290-84.571q12 3.429 13.714 13.143t-2.857 25.714-4.571 21.143zM801.714 211.429q-14.857 95.429-63.429 374.286-2.857 17.143-15.429 32t-24.857 22.857-31.143 17.714q-144 72-348.571 50.286-141.714-15.429-225.143-79.429-8.571-6.857-14.571-15.143t-9.714-20-5.143-19.429-3.429-22.571-3.143-20q-5.143-28.571-15.143-85.714t-16-92.286-13.429-84.286-12.571-90.286q1.714-14.857 10-27.714t18-21.429 25.714-17.143 26.286-12.857 27.429-10.571q71.429-26.286 178.857-36.571 216.571-21.143 386.286 28.571 88.571 26.286 122.857 69.714 9.143 11.429 9.429 29.143t-3.143 30.857z"],"attrs":[],"isMulticolor":false,"tags":["bitbucket"],"defaultCode":61809,"grid":14},"attrs":[],"properties":{"id":14,"order":10,"prevSize":28,"code":61809,"name":"bitbucket"},"setIdx":1,"setId":1,"iconIdx":17},{"icon":{"width":585,"paths":["M539.429 759.429l45.714 135.429q-13.143 20-63.429 37.714t-101.143 18.286q-59.429 1.143-108.857-14.857t-81.429-42.286-54.286-60.571-31.714-68.571-9.429-67.429v-310.857h-96v-122.857q41.143-14.857 73.714-39.714t52-51.429 33.143-58.286 19.429-56.571 8.571-50.571q0.571-2.857 2.571-4.857t4.286-2h139.429v242.286h190.286v144h-190.857v296q0 17.143 3.714 32t12.857 30 28.286 23.714 46.571 8q44.571-1.143 76.571-16.571z"],"attrs":[],"isMulticolor":false,"tags":["tumblr"],"defaultCode":61811,"grid":14},"attrs":[],"properties":{"id":15,"order":43,"prevSize":28,"code":61811,"name":"tumblr"},"setIdx":1,"setId":1,"iconIdx":18},{"icon":{"width":877.7142857142858,"paths":["M585.143 857.143q-24-137.714-80-284.571h-1.143l-1.143 0.571q-9.143 3.429-24.571 9.429t-57.714 28-78.286 46.857-74.857 65.429-58.857 84.571l-8.571-6.286q105.143 85.714 238.857 85.714 75.429 0 146.286-29.714zM479.429 510.286q-12-28-30.286-63.429-177.714 53.143-384.571 53.143-0.571 4-0.571 12 0 70.857 25.143 135.143t70.857 115.143q28.571-50.857 70.571-95.143t81.429-71.143 74.571-46.286 56.857-27.429l21.143-7.429q2.286-0.571 7.429-2t7.429-2.571zM418.286 389.143q-68.571-121.714-139.429-216-78.857 37.143-133.714 106.286t-73.143 155.429q172.571 0 346.286-45.714zM809.143 571.429q-120-34.286-233.714-16.571 49.714 136.571 73.143 268 63.429-42.857 105.714-108.286t54.857-143.143zM349.143 148q-0.571 0-1.143 0.571 0.571-0.571 1.143-0.571zM686.286 230.857q-105.714-93.714-247.429-93.714-43.429 0-88.571 10.857 74.857 97.143 140.571 218.286 39.429-14.857 74.286-34.571t55.143-35.143 37.429-32.571 21.429-23.143zM813.714 508q-1.714-132.571-85.143-234.286l-0.571 0.571q-5.143 6.857-10.857 14t-24.857 25.429-40.571 34.571-57.143 37.143-75.143 36.857q14.286 30.286 25.143 54.286 1.143 3.429 3.714 10t4.286 9.429q20.571-2.857 42.571-4t42-1.143 39.429 0.857 36.571 2.286 32.286 3.143 27.429 3.714 20.857 3.429 14.286 2.571zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"],"attrs":[],"isMulticolor":false,"tags":["dribbble"],"defaultCode":61821,"grid":14},"attrs":[],"properties":{"id":16,"order":26,"prevSize":28,"code":61821,"name":"dribbble"},"setIdx":1,"setId":1,"iconIdx":19},{"icon":{"width":877.7142857142858,"paths":["M670.286 607.429q0-28.571-11.143-52.286t-27.714-39.143-41.714-28-47.143-19.429-50-13.143l-59.429-13.714q-17.143-4-25.143-6t-20-6.571-17.143-9.143-9.429-12-4.286-17.143q0-44 82.286-44 24.571 0 44 6.857t30.857 16.286 21.714 19.143 22.857 16.571 27.429 6.857q26.857 0 43.143-18.286t16.286-44q0-31.429-32-56.857t-81.143-38.571-104-13.143q-38.857 0-75.429 8.857t-68.286 26.857-50.857 49.714-19.143 73.429q0 34.857 10.857 60.857t32 43.143 45.714 27.714 58.857 18.571l83.429 20.571q51.429 12.571 64 20.571 18.286 11.429 18.286 34.286 0 22.286-22.857 36.857t-60 14.571q-29.143 0-52.286-9.143t-37.143-22-26-25.714-26.286-22-30.857-9.143q-28.571 0-43.143 17.143t-14.571 42.857q0 52.571 69.714 90t166.286 37.429q41.714 0 80-10.571t70-30.571 50.571-53.429 18.857-75.143zM877.714 731.429q0 90.857-64.286 155.143t-155.143 64.286q-74.286 0-133.714-45.714-44 9.143-85.714 9.143-81.714 0-156.286-31.714t-128.571-85.714-85.714-128.571-31.714-156.286q0-41.714 9.143-85.714-45.714-59.429-45.714-133.714 0-90.857 64.286-155.143t155.143-64.286q74.286 0 133.714 45.714 44-9.143 85.714-9.143 81.714 0 156.286 31.714t128.571 85.714 85.714 128.571 31.714 156.286q0 41.714-9.143 85.714 45.714 59.429 45.714 133.714z"],"attrs":[],"isMulticolor":false,"tags":["skype"],"defaultCode":61822,"grid":14},"attrs":[],"properties":{"id":17,"order":38,"prevSize":28,"code":61822,"name":"skype"},"setIdx":1,"setId":1,"iconIdx":20},{"icon":{"width":731,"paths":["M571.429 248l21.143-110.857q2.857-13.143-5.143-22.857t-20-9.714h-406.857q-13.143 0-22 9.714t-8.857 21.143v629.143q0 4 3.429 0.571l166.286-201.143q13.143-14.857 21.714-19.143t27.429-4.286h136.571q12.571 0 21.143-8.286t10.286-16.857q13.714-74.286 21.143-109.143 2.286-12-6.571-22.857t-20.857-10.857h-168q-16.571 0-27.429-10.857t-10.857-27.429v-24q0-16.571 10.857-27.143t27.429-10.571h197.714q10.286 0 20-7.714t11.429-16.857zM701.143 121.143q-8.571 41.714-30.571 152.286t-39.714 200-20 99.143q-3.429 12.571-5.143 18.571t-8 18.571-14 18.857-22 12-33.143 5.714h-154.857q-7.429 0-12.571 5.714-4.571 5.143-243.429 282.286-12.571 14.286-33.429 16.286t-27.714-3.143q-31.429-12.571-31.429-56v-805.714q0-31.429 21.714-58.571t68.571-27.143h507.429q54.286 0 72.571 30.286t5.714 90.857zM701.143 121.143l-90.286 451.429q2.286-9.714 20-99.143t39.714-200 30.571-152.286z"],"attrs":[],"isMulticolor":false,"tags":["foursquare"],"defaultCode":61824,"grid":14},"attrs":[],"properties":{"id":18,"order":28,"prevSize":28,"code":61824,"name":"foursquare"},"setIdx":1,"setId":1,"iconIdx":21},{"icon":{"width":877.7142857142858,"paths":["M441.714 744l200-270.286q9.143-12.571 14-33.714t-3.429-48.571-35.143-45.143q-22.857-14.857-47.429-14.571t-42 10-31.143 25.714q-20.571 22.857-54.857 22.857-33.714 0-54.286-22.857-13.714-16-31.143-25.714t-42-10-48 14.571q-26.286 17.714-34.571 45.143t-3.429 48.571 14 33.714zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"],"attrs":[],"isMulticolor":false,"tags":["gittip","gratipay"],"defaultCode":61828,"grid":14},"attrs":[],"properties":{"id":19,"order":31,"prevSize":28,"code":61828,"name":"gittip, gratipay"},"setIdx":1,"setId":1,"iconIdx":22},{"icon":{"width":731,"paths":["M719.429 716v37.714q0 48.571-32.857 82.571t-79.143 34h-32.571l-148.571 153.714v-153.714h-302.286q-46.286 0-79.143-34t-32.857-82.571v-37.714h707.429zM719.429 529.714v145.714h-707.429v-145.714h707.429zM719.429 342.286v145.714h-707.429v-145.714h707.429zM719.429 262.286v38.286h-707.429v-38.286q0-48 32.857-82t79.143-34h483.429q46.286 0 79.143 34t32.857 82z"],"attrs":[],"isMulticolor":false,"tags":["stack-exchange"],"defaultCode":61837,"grid":14},"attrs":[],"properties":{"id":20,"order":41,"prevSize":28,"code":61837,"name":"stackexchange"},"setIdx":1,"setId":1,"iconIdx":23},{"icon":{"width":877.7142857142858,"paths":["M738.286 364.571q5.714-123.429-92-126.857-132-4.571-178.286 149.143 25.143-10.857 46.857-10.857 48.571 0 42.286 54.857-2.286 32.571-42.286 95.429t-60 62.857q-24.571 0-46.857-96.571-7.429-30.857-25.714-145.714-17.143-108-91.429-101.143-33.714 4-93.714 57.143l-92.571 82.286 29.714 38.286q43.429-29.714 49.714-29.714 32.571 0 61.143 102.286 8.571 31.429 25.714 94t25.714 94q38.857 102.286 93.714 102.286 89.714 0 218.857-168 125.714-161.714 129.143-253.714zM877.714 237.714v548.571q0 68-48.286 116.286t-116.286 48.286h-548.571q-68 0-116.286-48.286t-48.286-116.286v-548.571q0-68 48.286-116.286t116.286-48.286h548.571q68 0 116.286 48.286t48.286 116.286z"],"attrs":[],"isMulticolor":false,"tags":["vimeo-square"],"defaultCode":61844,"grid":14},"attrs":[],"properties":{"id":21,"order":47,"prevSize":28,"code":61844,"name":"vimeo"},"setIdx":1,"setId":1,"iconIdx":24},{"icon":{"width":1317,"paths":["M1013.714 477.714l10.286 180.571q2.286 39.429-46.857 73.143t-134.286 53.429-184.571 19.714-184.571-19.714-134.286-53.429-46.857-73.143l10.286-180.571 328 103.429q12.571 4 27.429 4t27.429-4zM1316.571 292.571q0 13.143-12.571 17.714l-640 201.143q-2.286 0.571-5.714 0.571t-5.714-0.571l-372.571-117.714q-24.571 19.429-40.571 63.714t-19.429 102q36 20.571 36 62.286 0 39.429-33.143 61.143l33.143 247.429q1.143 8-4.571 14.286-5.143 6.286-13.714 6.286h-109.714q-8.571 0-13.714-6.286-5.714-6.286-4.571-14.286l33.143-247.429q-33.143-21.714-33.143-61.143 0-41.714 37.143-63.429 6.286-118.286 56-188.571l-190.286-59.429q-12.571-4.571-12.571-17.714t12.571-17.714l640-201.143q2.286-0.571 5.714-0.571t5.714 0.571l640 201.143q12.571 4.571 12.571 17.714z"],"attrs":[],"isMulticolor":false,"tags":["graduation-cap","mortar-board"],"defaultCode":61853,"grid":14},"attrs":[],"properties":{"id":22,"order":16,"prevSize":28,"code":61853,"name":"graduation-cap"},"setIdx":1,"setId":1,"iconIdx":25},{"icon":{"width":877.7142857142858,"paths":["M373.714 616q-0.571 1.714-7.143-0.286t-18-6.571l-11.429-5.143q-25.143-11.429-49.714-28-4-2.857-23.429-18t-21.714-16.286q-38.286 58.857-76.571 103.429-46.286 54.286-60 62.857-2.286 1.143-11.143 2.286t-10.571 0q3.429-2.286 46.857-52.571 12-13.714 48.857-65.714t44.857-67.429q9.714-17.143 29.143-56.286t20.571-44.286q-4.571-0.571-62.857 18.857-4.571 1.143-15.714 4.286t-19.714 5.429-9.714 2.857q-1.143 1.143-1.143 6t-0.571 5.429q-2.857 5.714-17.714 8.571-13.143 4-26.857 0-10.286-2.286-16-12-2.286-3.429-2.857-13.143 3.429-1.143 14-2.857t16.857-3.429q33.143-9.143 60-18.286 57.143-20 58.286-20 5.714-1.143 24.571-11.143t25.143-12.286q5.143-1.714 12.286-4.571t8.286-3.143 3.429 0.286q1.143 6.857-0.571 18.857 0 1.143-7.143 15.429t-15.143 30.571-9.714 19.143q-14.286 28.571-44 74.857l36.571 16q6.857 3.429 42.571 18.286t38.571 16q2.286 0.571 6 14.571t2.571 17.429zM256.571 338.286q1.714 8.571-2.286 16-6.857 13.143-28.571 21.714-17.143 6.857-34.286 6.857-14.857-1.714-28-14.857-8-8.571-10.286-23.429l0.571-1.714q1.714 1.714 11.143 2.857t15.143 0 33.143-9.143q20.571-6.857 31.429-8 9.714 0 12 9.714zM655.429 412l36 129.714-79.429-24zM22.286 869.143l396.571-132.571v-589.714l-396.571 133.143v589.143zM731.429 688l58.286 17.714-103.429-375.429-57.143-17.714-123.429 306.286 58.286 17.714 25.714-62.857 120.571 37.143zM444 138.286l327.429 105.143v-217.143zM621.714 894.286l90.286 7.429-30.857 91.429-22.857-37.714q-74.286 47.429-157.714 61.714-33.143 6.857-52 6.857h-48q-45.143 0-114-22.286t-104.857-48.571q-4.571-4-4.571-9.143 0-4.571 2.857-7.714t7.429-3.143q2.286 0 10.286 4.286t17.429 9.429 11.714 6.286q41.714 21.143 91.143 35.143t90 14q54.286 0 95.429-8.286t89.714-28.857q8.571-4 17.429-8.857t19.429-10.857 16.286-9.429zM877.714 277.714v616.571l-442.286-140.571q-8 3.429-214.286 72.857t-210.286 69.429q-7.429 0-10.286-7.429 0-0.571-0.571-1.714v-616q1.714-5.143 2.286-5.714 2.857-3.429 11.429-6.286 60.571-20 85.143-28.571v-219.429l318.857 113.143q1.143 0 91.714-31.429t180.571-62 92.286-30.571q11.429 0 11.429 12v238.857z"],"attrs":[],"isMulticolor":false,"tags":["language"],"defaultCode":61867,"grid":14},"attrs":[],"properties":{"id":23,"order":6,"prevSize":28,"code":61867,"name":"language"},"setIdx":1,"setId":1,"iconIdx":26},{"icon":{"width":731,"paths":["M678.857 313.143l-166.857 166.857v470.857q0 26.286-18.857 45.143t-45.143 18.857-45.143-18.857-18.857-45.143v-219.429h-36.571v219.429q0 26.286-18.857 45.143t-45.143 18.857-45.143-18.857-18.857-45.143v-470.857l-166.857-166.857q-16-16-16-38.857t16-38.857 38.857-16 38.857 16l130.286 130.286h210.286l130.286-130.286q16-16 38.857-16t38.857 16 16 38.857-16 38.857zM493.714 219.429q0 53.143-37.429 90.571t-90.571 37.429-90.571-37.429-37.429-90.571 37.429-90.571 90.571-37.429 90.571 37.429 37.429 90.571z"],"attrs":[],"isMulticolor":false,"tags":["child"],"defaultCode":61870,"grid":14},"attrs":[],"properties":{"id":24,"order":18,"prevSize":28,"code":61870,"name":"child"},"setIdx":1,"setId":1,"iconIdx":27},{"icon":{"width":877.7142857142858,"paths":["M713.143 73.143q68 0 116.286 48.286t48.286 116.286v548.571q0 68-48.286 116.286t-116.286 48.286h-548.571q-68 0-116.286-48.286t-48.286-116.286v-548.571q0-68 48.286-116.286t116.286-48.286h548.571zM285.143 282.857h-212v449.714h218.286q66.857 0 112.571-32.857t45.714-97.429q0-90.286-81.714-114.286 61.143-29.714 61.143-93.714 0-32.571-11.143-55.143t-32.286-34.571-45.143-16.857-55.429-4.857zM272.571 464.571h-100.571v-105.143h93.143q68 0 68 51.429 0 53.714-60.571 53.714zM277.714 656h-105.714v-124h108q70.857 0 70.857 64.571 0 59.429-73.143 59.429zM649.143 674.286q-38.857 0-59.429-21.714t-20.571-61.143h234.857q0.571-5.714 0.571-17.143 0-75.429-42.571-126t-116.286-50.571q-73.143 0-120 49.143t-46.857 123.429q0 77.143 45.143 124t121.714 46.857q117.143 0 152.571-109.143h-78.857q-6.286 19.429-27.143 30.857t-43.143 11.429zM643.429 465.143q64.571 0 70.857 69.714h-145.143q2.286-32 22.286-50.857t52-18.857zM550.857 313.143h182.286v44h-182.286v-44z"],"attrs":[],"isMulticolor":false,"tags":["behance-square"],"defaultCode":61877,"grid":14},"attrs":[],"properties":{"id":25,"order":24,"prevSize":28,"code":61877,"name":"behance"},"setIdx":1,"setId":1,"iconIdx":28},{"icon":{"width":877.7142857142858,"paths":["M644 691.429q0-18.286-17.143-29.143-110.286-65.714-255.429-65.714-76 0-164 19.429-24 5.143-24 29.714 0 11.429 7.714 19.714t20.286 8.286q2.857 0 21.143-4.571 75.429-15.429 138.857-15.429 129.143 0 226.857 58.857 10.857 6.286 18.857 6.286 10.857 0 18.857-7.714t8-19.714zM698.857 568.571q0-22.857-20-34.857-135.429-80.571-313.143-80.571-87.429 0-173.143 24-27.429 7.429-27.429 36.571 0 14.286 10 24.286t24.286 10q4 0 21.143-4.571 69.714-18.857 143.429-18.857 159.429 0 278.857 70.857 13.714 7.429 21.714 7.429 14.286 0 24.286-10t10-24.286zM760.571 426.857q0-26.857-22.857-40-72-41.714-167.429-63.143t-196-21.429q-116.571 0-208 26.857-13.143 4-22 14.571t-8.857 27.714q0 17.714 11.714 29.714t29.429 12q6.286 0 22.857-4.571 76-21.143 175.429-21.143 90.857 0 176.857 19.429t144.857 54.286q12 6.857 22.857 6.857 16.571 0 28.857-11.714t12.286-29.429zM877.714 512q0 119.429-58.857 220.286t-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286 58.857-220.286 159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286z"],"attrs":[],"isMulticolor":false,"tags":["spotify"],"defaultCode":61884,"grid":14},"attrs":[],"properties":{"id":26,"order":40,"prevSize":28,"code":61884,"name":"spotify"},"setIdx":1,"setId":1,"iconIdx":29},{"icon":{"width":1317,"paths":["M448 784l9.143-137.714-9.143-298.857q-0.571-5.714-4.286-9.714t-9.429-4q-5.143 0-9.143 4t-4 9.714l-8 298.857 8 137.714q0.571 5.714 4.286 9.429t8.857 3.714q12.571 0 13.714-13.143zM617.143 767.429l6.286-120.571-6.857-334.857q0-9.143-7.429-13.714-4.571-2.857-9.143-2.857t-9.143 2.857q-7.429 4.571-7.429 13.714l-0.571 3.429-5.714 330.857q0 0.571 6.286 134.857v0.571q0 5.714 3.429 9.714 5.143 6.286 13.143 6.286 6.286 0 11.429-5.143 5.143-4 5.143-11.429zM20 573.143l11.429 73.143-11.429 72q-1.143 5.143-5.143 5.143t-5.143-5.143l-9.714-72 9.714-73.143q1.143-5.143 5.143-5.143t5.143 5.143zM69.143 528l14.857 118.286-14.857 116q-1.143 5.143-5.714 5.143-5.143 0-5.143-5.714l-13.143-115.429 13.143-118.286q0-5.143 5.143-5.143 4.571 0 5.714 5.143zM121.714 506.286l14.286 140-14.286 135.429q0 6.286-6.286 6.286-5.714 0-6.857-6.286l-12-135.429 12-140q1.143-6.857 6.857-6.857 6.286 0 6.286 6.857zM175.429 502.286l13.143 144-13.143 139.429q-1.143 7.429-8 7.429-7.429 0-7.429-7.429l-12-139.429 12-144q0-7.429 7.429-7.429 6.857 0 8 7.429zM229.143 512.571l12 133.714-12 140.571q-1.143 9.143-9.143 9.143-3.429 0-6-2.571t-2.571-6.571l-11.429-140.571 11.429-133.714q0-3.429 2.571-6t6-2.571q8 0 9.143 8.571zM282.857 429.143l12 217.143-12 140.571q0 4-2.857 7.143t-6.857 3.143q-9.143 0-10.286-10.286l-10.286-140.571 10.286-217.143q1.143-10.286 10.286-10.286 4 0 6.857 3.143t2.857 7.143zM336.571 380l10.857 267.429-10.857 139.429q0 4.571-3.143 7.714t-7.714 3.143q-10.286 0-11.429-10.857l-9.143-139.429 9.143-267.429q1.143-10.857 11.429-10.857 4.571 0 7.714 3.143t3.143 7.714zM392.571 357.143l10.286 289.143-10.286 138.286q-1.143 12-12.571 12-10.857 0-12-12l-9.143-138.286 9.143-289.143q0-5.143 3.714-8.857t8.286-3.714q5.143 0 8.571 3.714t4 8.857zM616.571 781.143v0 0zM503.429 354.857l8.571 291.429-8.571 136.571q0 5.714-4.286 10t-10 4.286-9.714-4-4.571-10.286l-8-136.571 8-291.429q0-6.286 4.286-10.286t10-4 10 4 4.286 10.286zM560 365.714l8 281.143-8 134.857q0 6.286-4.571 10.857t-10.857 4.571-10.857-4.571-5.143-10.857l-6.857-134.857 6.857-281.143q0.571-6.857 5.143-11.429t10.857-4.571 10.571 4.571 4.857 11.429zM681.143 646.857l-8 132q0 7.429-5.143 12.571t-12.571 5.143-12.571-5.143-5.714-12.571l-3.429-65.143-3.429-66.857 6.857-363.429v-1.714q1.143-8.571 6.857-13.714 5.143-4 11.429-4 4.571 0 8.571 2.857 8 4.571 9.143 14.857zM1316.571 636q0 66.857-47.429 114t-114.286 47.143h-449.143q-7.429-1.143-12.571-6.286t-5.143-12.571v-513.714q0-13.143 16-18.857 48.571-19.429 103.429-19.429 111.429 0 193.143 75.143t91.429 184.857q30.286-12.571 62.857-12.571 66.857 0 114.286 47.429t47.429 114.857z"],"attrs":[],"isMulticolor":false,"tags":["soundcloud"],"defaultCode":61886,"grid":14},"attrs":[],"properties":{"id":27,"order":39,"prevSize":28,"code":61886,"name":"soundcloud"},"setIdx":1,"setId":1,"iconIdx":30},{"icon":{"paths":["M123.429 668l344.571 229.714v-205.143l-190.857-127.429zM88 585.714l110.286-73.714-110.286-73.714v147.429zM556 897.714l344.571-229.714-153.714-102.857-190.857 127.429v205.143zM512 616l155.429-104-155.429-104-155.429 104zM277.143 458.857l190.857-127.429v-205.143l-344.571 229.714zM825.714 512l110.286 73.714v-147.429zM746.857 458.857l153.714-102.857-344.571-229.714v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312q-12 7.429-24.571 7.429t-24.571-7.429l-468-312q-19.429-13.143-19.429-36.571v-312q0-23.429 19.429-36.571l468-312q12-7.429 24.571-7.429t24.571 7.429l468 312q19.429 13.143 19.429 36.571z"],"attrs":[],"isMulticolor":false,"tags":["codepen"],"defaultCode":61899,"grid":14},"attrs":[],"properties":{"id":28,"order":25,"prevSize":28,"code":61899,"name":"codepen"},"setIdx":1,"setId":1,"iconIdx":31},{"icon":{"width":877.7142857142858,"paths":["M462.286 573.714l152-285.143h-64l-89.714 178.286q-13.714 27.429-25.143 52.571l-24-52.571-88.571-178.286h-68.571l150.286 281.714v185.143h57.714v-181.714zM877.714 237.714v548.571q0 68-48.286 116.286t-116.286 48.286h-548.571q-68 0-116.286-48.286t-48.286-116.286v-548.571q0-68 48.286-116.286t116.286-48.286h548.571q68 0 116.286 48.286t48.286 116.286z"],"attrs":[],"isMulticolor":false,"tags":["hacker-news","y-combinator-square","yc-square"],"defaultCode":61908,"grid":14},"attrs":[],"properties":{"id":29,"order":32,"prevSize":28,"code":61908,"name":"hackernews"},"setIdx":1,"setId":1,"iconIdx":32},{"icon":{"paths":["M738.286 402.286q0 3.429 5.714 23.429 5.714 16.571 14.286 28.286t23.429 19.429 25.143 11.429 31.429 9.429q185.714 52 185.714 189.714 0 83.429-60.286 138.571t-145.429 55.143q-33.714 0-63.714-10.571t-52.286-26-44-42.571-36-50-30.571-59.143-24.857-58.857-22.571-60.857-20.286-54.286q-18.286-46.286-35.143-76.286t-42-55.143-59.429-36.571-81.143-11.429q-54.857 0-104.571 31.714t-78.857 82.571-29.143 105.714q0 91.429 60.857 159.714t150.571 68.286q101.143 0 147.429-54.286 32-36 47.429-66.286l48 86.857q-8.571 19.429-25.143 40l0.571 0.571q-74.857 86.857-221.714 86.857-84 0-154-45.143t-108.857-118.571-38.857-156.857q0-60 24.857-117.714t66.286-100.857 98.286-69.429 116.857-26.286q49.714 0 90.857 10.857t70.571 28.571 54.286 45.714 41.429 56.571 33.429 66.857 28.857 71.143 28.571 74.571 31.429 72.571q54.857 114.286 133.143 114.286 46.286 0 79.143-27.714t32.857-73.429q0-24-10.857-41.143t-28.857-26.286-41.429-18-48.286-15.429-50-19.429-46.286-29.714-37.143-46.857-22.286-70q-1.714-9.143-1.714-18.857 0-62.857 50-109.714t113.429-44.571q44.571 1.714 68.857 8.286t51.714 30.571h-0.571q6.857 6.286 13.143 14t14.857 20.571 10.857 15.714l-73.714 56.571q-14.857-28-30.857-40v-0.571q-13.143-12-55.429-12-28 0-48 18.857t-20 47.429z"],"attrs":[],"isMulticolor":false,"tags":["lastfm"],"defaultCode":61954,"grid":14},"attrs":[],"properties":{"id":30,"order":33,"prevSize":28,"code":61954,"name":"lastfm"},"setIdx":1,"setId":1,"iconIdx":33},{"icon":{"width":731,"paths":["M544.571 216l-65.143 187.429 66.857 12q94.286-257.714 94.286-296 0-32-21.714-32-32.571 0-74.286 128.571zM373.714 608.571l18.857 50.286q21.143-24 40.571-38.286l-18.857-3.143t-22-4-18.571-4.857zM206.857 96.571q0 56 90.857 297.714 10.286-5.714 28-5.714 8.571 0 42.857 2.857l-69.143-200.571q-42.857-125.714-70.286-125.714-10.857 0-16.571 10t-5.714 21.429zM161.714 530.286q0 20.571 29.429 68t67.143 87.429 57.143 40q8 0 14.571-7.429t6.571-15.429q0-13.714-18.286-58.286-7.429-18.286-18.286-41.143t-27.143-50.857-35.143-46.286-35.429-18.286q-11.429 0-26 15.429t-14.571 26.857zM71.429 721.714q0 23.429 14.286 59.429 33.714 82.857 104.857 129.714t160.857 46.857q129.714 0 218.286-97.143 86.857-96.571 86.857-244 0-24.571-0.571-38.286t-6.571-35.429-17.429-32q-32-28-120.857-43.143t-154.571-15.143q-21.143 0-28 6.286-6.857 2.857-6.857 20 0 19.429 12.286 34.286t31.714 22.857 44.286 13.429 50 6.571 48.571 2.286 40 0h13.143q13.714 0 22.857 10.857 8.571 10.857 10.857 31.429-16 16-54.857 30.857-34.857 12.571-53.143 26.286-36.571 26.286-62 65.143t-25.429 78.286q0 17.714 10.571 50.571t10.571 50l-1.714 6.857q-2.286 6.857-2.286 8-78.286-5.714-83.429-123.429-4.571 1.143-23.429 1.143 1.143 4 1.143 12 0 30.286-23.143 51.143t-54 20.857q-46.857 0-95.143-44.571t-48.286-90.857q0-19.429 18.857-38.286 29.714 36.571 34.286 43.429 44 59.429 76 59.429 6.857 0 15.143-4.857t8.286-11.714q0-19.429-50-82.857t-66.571-63.429q-24.571 0-40 25.429t-15.429 51.714zM6.286 726.857q0-57.714 24.286-93.143t78-50.286q-16-42.286-16-59.429 0-35.429 34.857-70.286t69.714-34.857q16.571 0 40 8.571-93.143-264-93.143-324 0-45.714 23.429-74.571t68-28.857q74.857 0 185.714 332 3.429 9.714 4.571 13.143 3.429-9.143 16.571-45.429t24.857-67.714 30.857-72.857 36.857-70.286 40.286-49.429 43.714-20.571q40.571 0 64 28t23.429 69.714q0 61.714-90.857 314.286 34.857 8.571 57.429 26.286t33.429 44.571 14.857 53.429 4 63.143q0 85.714-26.857 160t-75.429 128.571-120.571 85.714-158.857 31.429q-63.429 0-127.429-24-85.143-32.571-147.429-109.429t-62.286-163.714z"],"attrs":[],"isMulticolor":false,"tags":["angellist"],"defaultCode":61961,"grid":14},"attrs":[],"properties":{"id":31,"order":23,"prevSize":28,"code":61961,"name":"angellist"},"setIdx":1,"setId":1,"iconIdx":34},{"icon":{"width":877.7142857142858,"paths":["M829.143 73.143q20 0 34.286 14.286t14.286 34.286v780.571q0 20-14.286 34.286t-34.286 14.286h-223.429v-340h113.714l17.143-132.571h-130.857v-84.571q0-32 13.429-48t52.286-16l69.714-0.571v-118.286q-36-5.143-101.714-5.143-77.714 0-124.286 45.714t-46.571 129.143v97.714h-114.286v132.571h114.286v340h-420q-20 0-34.286-14.286t-14.286-34.286v-780.571q0-20 14.286-34.286t34.286-14.286h780.571z"],"attrs":[],"isMulticolor":false,"tags":["facebook-official"],"defaultCode":62000,"grid":14},"attrs":[],"properties":{"id":32,"order":27,"prevSize":28,"code":62000,"name":"facebook"},"setIdx":1,"setId":1,"iconIdx":35},{"icon":{"paths":["M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z","M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z","M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"],"attrs":[{},{},{}],"isMulticolor":false,"isMulticolor2":false,"tags":["instagram","brand","social"],"grid":16},"attrs":[{},{},{}],"properties":{"order":1,"id":0,"prevSize":32,"code":59653,"name":"instagram"},"setIdx":1,"setId":1,"iconIdx":36},{"icon":{"paths":["M784 0h-544c-132.576 0-240 107.424-240 240s107.424 240 240 240h43.648c51.072 52.032 119.68 86.72 196.352 94.336v321.664h-96l-128 128h512l-128-128h-96v-321.664c76.672-7.616 145.28-42.304 196.352-94.336h43.648c132.576 0 240-107.424 240-240s-107.424-240-240-240zM64 240c0-80.448 54.272-147.52 128-168.544v24.544 32 128c0 58.112 15.744 112.512 42.848 159.456-94.752-2.784-170.848-80.032-170.848-175.456zM789.152 415.456c27.104-46.944 42.848-101.344 42.848-159.456v-128-32-24.544c73.728 20.992 128 88.096 128 168.544 0 95.424-76.096 172.672-170.848 175.456z"],"attrs":[],"isMulticolor":false,"tags":["trophy","cup","prize","tournament"],"grid":16},"attrs":[],"properties":{"id":90,"order":17,"prevSize":32,"code":58885,"name":"trophy"},"setIdx":1,"setId":1,"iconIdx":37},{"icon":{"paths":["M0 1024h512v-1024h-512v1024zM320 128h128v128h-128v-128zM320 384h128v128h-128v-128zM320 640h128v128h-128v-128zM64 128h128v128h-128v-128zM64 384h128v128h-128v-128zM64 640h128v128h-128v-128zM576 320h448v64h-448zM576 1024h128v-256h192v256h128v-576h-448z"],"attrs":[],"isMulticolor":false,"tags":["office","buildings","work"],"grid":16},"attrs":[],"properties":{"order":13,"id":1739,"prevSize":32,"ligatures":"office, buildings","name":"office","code":58886},"setIdx":1,"setId":1,"iconIdx":38},{"icon":{"paths":["M658.744 749.256l-210.744-210.746v-282.51h128v229.49l173.256 173.254zM512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 896c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384z"],"attrs":[],"isMulticolor":false,"tags":["clock","time","schedule"],"grid":16},"attrs":[],"properties":{"id":324,"order":50,"prevSize":32,"ligatures":"clock, time2","name":"clock","code":58890},"setIdx":1,"setId":1,"iconIdx":39},{"icon":{"paths":["M256 640c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zM640 640c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zM643.112 776.778c16.482-12.986 40.376-10.154 53.364 6.332s10.152 40.378-6.334 53.366c-45.896 36.158-115.822 59.524-178.142 59.524-62.322 0-132.248-23.366-178.144-59.522-16.486-12.99-19.32-36.882-6.332-53.368 12.99-16.482 36.882-19.318 53.366-6.332 26.422 20.818 78.722 43.222 131.11 43.222s104.688-22.404 131.112-43.222zM1024 512c0-70.692-57.308-128-128-128-48.116 0-89.992 26.57-111.852 65.82-65.792-35.994-145.952-59.246-233.28-64.608l76.382-171.526 146.194 42.2c13.152 37.342 48.718 64.114 90.556 64.114 53.020 0 96-42.98 96-96s-42.98-96-96-96c-36.56 0-68.342 20.442-84.554 50.514l-162.906-47.024c-18.224-5.258-37.538 3.722-45.252 21.052l-103.77 233.026c-85.138 5.996-163.262 29.022-227.636 64.236-21.864-39.25-63.766-65.804-111.882-65.804-70.692 0-128 57.308-128 128 0 52.312 31.402 97.254 76.372 117.102-8.070 24.028-12.372 49.104-12.372 74.898 0 176.73 200.576 320 448 320 247.422 0 448-143.27 448-320 0-25.792-4.3-50.862-12.368-74.886 44.97-19.85 76.368-64.802 76.368-117.114zM864 188c19.882 0 36 16.118 36 36s-16.118 36-36 36-36-16.118-36-36 16.118-36 36-36zM64 512c0-35.29 28.71-64 64-64 25.508 0 47.572 15.004 57.846 36.646-33.448 25.366-61.166 54.626-81.666 86.738-23.524-9.47-40.18-32.512-40.18-59.384zM512 948c-205.45 0-372-109.242-372-244s166.55-244 372-244c205.45 0 372 109.242 372 244s-166.55 244-372 244zM919.82 571.384c-20.5-32.112-48.218-61.372-81.666-86.738 10.276-21.642 32.338-36.646 57.846-36.646 35.29 0 64 28.71 64 64 0 26.872-16.656 49.914-40.18 59.384z"],"attrs":[],"isMulticolor":false,"tags":["reddit","brand","social"],"grid":16},"attrs":[],"properties":{"id":1356,"order":36,"prevSize":32,"ligatures":"reddit, brand62","name":"reddit","code":58889},"setIdx":1,"setId":1,"iconIdx":40},{"icon":{"paths":["M896 288h-62.656v-94.016l-129.344-1.984 0.672 96h-388.672l2.656-96-126.656 1.984v96l-64-1.984c-35.328 0-64 28.672-64 64v448c0 35.328 28.672 64 64 64h768c35.328 0 64-28.672 64-64v-448c0-35.328-28.672-64-64-64zM736 224h64v128h-64v-128zM320 441.984c38.656 0 70.016 41.184 70.016 92s-31.36 92-70.016 92-70.016-41.184-70.016-92 31.36-92 70.016-92zM224 224h64v128h-64v-128zM181.344 734.336c0 0 7.584-60.864 24.832-72.352 17.216-11.488 66.88-19.136 66.88-19.136s32.192 34.4 45.888 34.4c13.664 0 45.856-34.4 45.856-34.4s49.664 7.616 66.912 19.136c20.256 13.504 25.312 72.352 25.312 72.352h-275.68zM832 704h-288v-32h288v32zM832 640h-288v-32h288v32zM832 576h-288v-32h288v32zM832 512h-288v-32h288v32z"],"attrs":[],"isMulticolor":false,"tags":["profile","card","id","vcard"],"grid":32},"attrs":[],"properties":{"id":250,"order":11,"prevSize":32,"code":58880,"name":"profile"},"setIdx":1,"setId":1,"iconIdx":44},{"icon":{"paths":["M907.328 43.328c3.68-3.68 5.344-8.928 4.448-14.048-0.896-5.12-4.224-9.504-8.96-11.712-73.312-34.56-160.32-19.392-217.536 38.112-54.336 54.688-73.312 140.576-47.968 212.384l-369.248 369.248c-20.064-7.168-41.504-10.752-63.872-10.752-54.848 0-108.032 21.824-145.888 59.904-57.024 57.344-73.088 142.080-40.992 215.904 2.112 4.864 6.496 8.384 11.712 9.344 5.248 0.992 10.592-0.672 14.304-4.448l111.712-112.288c7.36-7.424 19.232-8.416 25.376-2.176l48.224 50.464c7.008 7.072 6.688 17.984-0.704 25.44l-111.296 112c-3.68 3.68-5.312 8.928-4.416 14.048 0.896 5.12 4.224 9.472 8.928 11.68 26.528 12.512 54.432 18.816 82.912 18.816 50.304 0 98.080-20.224 134.624-56.96 54.336-54.656 73.312-140.544 47.936-212.352l369.248-369.28c20.096 7.168 41.536 10.752 63.904 10.752 54.848 0 108.032-21.824 145.888-59.904 57.024-57.344 73.088-142.080 40.992-215.904-2.112-4.864-6.496-8.384-11.712-9.344-5.152-0.896-10.56 0.672-14.304 4.448l-111.712 112.288c-6.88 6.912-18.56 6.848-25.632-0.32l-47.968-47.968c-7.232-7.264-7.2-18.176-0.032-25.408l112.032-111.968zM772.672 203.328l47.968 47.968c19.168 19.264 52 19.36 70.976 0.288l93.76-94.208c15.008 55.712-0.512 115.488-42.368 157.632-31.904 32.096-76.768 50.464-123.2 50.464-21.856 0-42.56-4.096-61.536-12.16-6.016-2.592-12.96-1.184-17.568 3.392l-384 384c-4.608 4.608-5.952 11.52-3.424 17.504 25.696 61.12 10.048 140-37.216 187.552-42.272 42.496-103.808 57.632-159.52 40.256l94.112-94.72c19.872-20 20.192-51.008 0.928-70.336l-48.192-50.464c-18.592-18.72-51.648-17.568-70.976 1.984l-93.76 94.208c-15.008-55.712 0.512-115.488 42.368-157.632 31.904-32.096 76.768-50.464 123.2-50.464 21.856 0 42.56 4.096 61.536 12.16 5.984 2.624 12.96 1.184 17.568-3.392l384-384c4.608-4.608 5.952-11.52 3.424-17.504-25.696-61.12-10.048-140.032 37.216-187.584 42.24-42.496 103.744-57.536 159.424-40.256l-94.72 94.752c-19.712 19.744-19.712 50.72 0 70.56zM934.72 980.704c-7.072 7.104-19.328 7.104-26.464-0.064l-320.96-320c-6.24-6.176-16.384-6.208-22.624 0.064-6.24 6.24-6.208 16.384 0.032 22.624l320.928 319.936c9.6 9.632 22.336 14.944 35.904 14.944 0 0 0 0 0 0 13.568 0 26.304-5.312 36.096-15.168l45.728-47.776c19.68-19.776 19.68-50.784-0.032-70.592l-320-320c-6.24-6.24-16.384-6.24-22.624 0s-6.24 16.384 0 22.624l319.968 319.968c7.328 7.36 7.328 18.048-0.224 25.664l-45.728 47.776zM187.328 100.672l-96-96c-6.24-6.24-16.384-6.24-22.624 0l-64 64c-6.24 6.24-6.24 16.384 0 22.624l96 96c3.104 3.136 7.2 4.704 11.296 4.704s8.192-1.568 11.328-4.672l20.672-20.704 244.672 244.672c3.136 3.136 7.232 4.704 11.328 4.704s8.192-1.568 11.328-4.672c6.24-6.24 6.24-16.384 0-22.624l-244.704-244.704 20.672-20.672c6.272-6.272 6.272-16.384 0.032-22.656zM112 153.376l-73.376-73.376 41.376-41.376 73.376 73.376-41.376 41.376z"],"attrs":[],"isMulticolor":false,"tags":["tools-2","wrench","screwdriver"],"defaultCode":57396,"grid":32},"attrs":[],"properties":{"id":52,"order":14,"prevSize":32,"code":57396,"name":"tools"},"setIdx":1,"setId":1,"iconIdx":45},{"icon":{"paths":["M512.064 567.872c105.888 0 192-86.144 192-192s-86.112-192-192-192c-105.888 0-192 86.112-192 192s86.112 192 192 192zM512.064 215.872c88.256 0 160 71.744 160 160s-71.744 160-160 160c-88.256 0-160-71.744-160-160s71.744-160 160-160zM512 0c-211.776 0-384 170.112-384 384.032 0 224 192.032 453.152 332.032 614.208 0.512 0.64 22.976 25.76 50.752 25.76 0.064 0 2.336 0 2.464 0 27.744 0 50.24-25.12 50.752-25.76 140.064-161.056 332.064-390.176 332.064-614.208-0-213.92-172.256-384.032-384.064-384.032zM515.744 956.256c-0.672 0.64-2.624 2.048-4.32 3.136-0.32-0.864-2.688-2.752-4.128-4.256-117.28-134.944-315.296-362.688-315.296-571.104 0-176.448 143.584-320.032 320-320.032 176.512 0 320.064 143.584 320.064 320.064-0 208.384-198.016 436.128-316.32 572.192z"],"attrs":[],"isMulticolor":false,"tags":["location","map"],"grid":32},"attrs":[],"properties":{"id":18,"order":3,"prevSize":32,"code":58882,"name":"location"},"setIdx":1,"setId":1,"iconIdx":46},{"icon":{"paths":["M896 160h-768c-70.688 0-128 57.344-128 128v416c0 70.688 57.312 128 128 128h768c70.688 0 128-57.312 128-128v-416c0-70.656-57.312-128-128-128zM64 328l223.968 168-223.968 168v-336zM960 704c0 35.328-28.736 64-64 64h-768c-35.296 0-64-28.672-64-64l250.624-188 139.776 104.864c17.056 12.736 37.312 19.2 57.6 19.2 20.256 0 40.512-6.432 57.568-19.2l139.808-104.864 250.624 188zM960 664l-224-168 224-168v336zM550.368 595.264c-11.168 8.384-24.416 12.8-38.368 12.8s-27.232-4.448-38.4-12.8l-409.6-307.264c0-35.296 28.704-64 64-64h768c35.264 0 64 28.704 64 64l-409.632 307.264z"],"attrs":[],"isMulticolor":false,"tags":["mail","email","letter","envelope","contact"],"grid":32},"attrs":[],"properties":{"id":25,"order":4,"prevSize":32,"code":58883,"name":"mail"},"setIdx":1,"setId":1,"iconIdx":47},{"icon":{"paths":["M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"],"attrs":[{}],"isMulticolor":false,"tags":["call"],"defaultCode":57407,"grid":24},"attrs":[{}],"properties":{"order":53,"id":63,"prevSize":24,"code":57407,"name":"phone","ligatures":"call"},"setIdx":1,"setId":1,"iconIdx":48},{"icon":{"paths":["M256 682.667h512v-256h-512v256zM298.667 469.333h426.667v170.667h-426.667v-170.667zM256 341.333h512v42.667h-512zM256 725.333h213.333v42.667h-213.333zM256 810.667h128v42.667h-128zM428.16 813.184h42.667v42.667h-42.667zM554.667 725.333h213.333v42.667h-213.333zM554.667 810.667h213.333v42.667h-213.333zM853.333 170.667v-40.149c0-49.451-42.581-87.851-147.84-87.851h-512c-70.571 0-108.16 59.904-108.16 130.517v725.333c0 70.571 37.589 125.483 108.16 125.483h597.333c70.571 0 62.507 0 147.84 0v-853.333h-85.333zM853.333 938.667h-659.84c-23.509 0-22.827-16.683-22.827-40.149v-725.333c0-23.509-0.683-45.184 22.827-45.184h574.507v42.667h-512v85.333h597.333v682.667z"],"attrs":[],"isMulticolor":false,"tags":["newspaper","paper","magazine","document","file"],"grid":24},"attrs":[],"properties":{"id":112,"order":19,"prevSize":24,"code":58887,"name":"newspaper"},"setIdx":1,"setId":1,"iconIdx":49},{"icon":{"paths":["M231.219 386.458c22.323-22.835 53.402-24.627 80.691 0l200.090 191.846 200.090-191.846c27.29-24.627 58.419-22.835 80.589 0 22.323 22.784 20.89 61.286 0 82.688-20.787 21.402-240.384 230.502-240.384 230.502-11.11 11.418-25.702 17.152-40.294 17.152s-29.184-5.734-40.397-17.152c0 0-219.494-209.101-240.384-230.502-20.941-21.402-22.323-59.904 0-82.688z"],"attrs":[],"isMulticolor":false,"tags":["chevron-down"],"grid":20},"attrs":[],"properties":{"id":33,"order":59,"prevSize":20,"code":58892,"name":"chevron-down"},"setIdx":1,"setId":1,"iconIdx":50},{"icon":{"paths":["M792.781 637.542c-22.323 22.835-53.402 24.627-80.691 0l-200.090-191.846-200.090 191.846c-27.29 24.627-58.419 22.835-80.589 0-22.323-22.784-20.89-61.286 0-82.688 20.787-21.402 240.384-230.502 240.384-230.502 11.11-11.418 25.702-17.152 40.294-17.152s29.184 5.734 40.397 17.152c0 0 219.494 209.101 240.384 230.502 20.941 21.402 22.323 59.904 0 82.688z"],"attrs":[],"isMulticolor":false,"tags":["chevron-up"],"grid":20},"attrs":[],"properties":{"id":44,"order":60,"prevSize":20,"code":58893,"name":"chevron-up"},"setIdx":1,"setId":1,"iconIdx":51},{"icon":{"paths":["M512.051 399.36c-62.208 0-112.691 50.432-112.691 112.64s50.483 112.64 112.691 112.64c62.208 0 112.589-50.432 112.589-112.64s-50.381-112.64-112.589-112.64zM153.651 399.36c-62.208 0-112.691 50.432-112.691 112.64s50.483 112.64 112.691 112.64c62.208 0 112.589-50.483 112.589-112.64s-50.381-112.64-112.589-112.64zM870.451 399.36c-62.208 0-112.691 50.432-112.691 112.64s50.483 112.64 112.691 112.64c62.208 0 112.589-50.432 112.589-112.64s-50.381-112.64-112.589-112.64z"],"attrs":[],"isMulticolor":false,"tags":["dots-three-horizontal"],"grid":20},"attrs":[],"properties":{"id":59,"order":54,"prevSize":20,"code":58891,"name":"dots-three-horizontal"},"setIdx":1,"setId":1,"iconIdx":52},{"icon":{"paths":["M698.778 376.934c-6.81-18.176 181.197-186.061 71.578-322.099-25.651-31.795-112.691 152.32-236.288 235.674-68.198 45.978-226.867 143.872-226.867 197.99v350.31c0 65.075 251.597 133.99 442.778 133.99 70.093 0 171.622-439.091 171.622-508.826 0-70.042-216.115-68.813-222.822-87.040zM256 381.798c-33.69 0-153.6 20.48-153.6 159.898v248.218c0 139.315 119.91 154.675 153.6 154.675 33.638 0-51.2-29.286-51.2-115.712v-326.298c0-90.522 84.838-120.781 51.2-120.781z"],"attrs":[],"isMulticolor":false,"tags":["thumbs-up"],"grid":20},"attrs":[],"properties":{"id":298,"order":21,"prevSize":20,"code":58884,"name":"thumbs-up"},"setIdx":1,"setId":1,"iconIdx":53},{"icon":{"paths":["M501.334 682.026c-23.894-30.294-44.8-45.226-96.64-50.326-9.386-1.706-16.214-9.814-16.214-19.414 0-7.040 23.040-28.16 22.806-28.374 23.914-24.126 36.714-63.166 36.714-93.246 0-46.698-41.366-85.334-96-85.334-55.68 0-96 38.634-96 85.334 0 30.294 12.586 69.546 36.48 93.674 0 0 23.040 20.886 23.040 27.946 0 10.026-7.68 18.56-17.92 19.84-50.794 5.12-71.274 20.054-94.934 49.92-6.634 8.746-10.454 26.026-10.666 35.2v40.106c0 17.706 14.698 32 32.854 32h254.294c18.154 0 32.854-14.294 32.854-32v-40.106c-0.216-9.214-3.864-26.472-10.668-35.22zM757.334 448h-106.666c-29.44 0-53.334 23.894-53.334 53.334s23.894 53.334 53.334 53.334h106.666c29.44 0 53.334-23.894 53.334-53.334s-23.894-53.334-53.334-53.334zM757.334 640h-106.666c-29.44 0-53.334 23.894-53.334 53.334s23.894 53.334 53.334 53.334h106.666c29.44 0 53.334-23.894 53.334-53.334s-23.894-53.334-53.334-53.334zM0 896c0 47.146 38.186 85.334 85.334 85.334h853.334c47.146 0 85.334-38.186 85.334-85.334l-0.002-682.666c0-47.146-38.186-85.334-85.334-85.334h-256v-38.4c0-26.026-20.906-46.934-46.932-46.934h-247.468c-26.026 0-46.932 20.908-46.932 46.934v38.4h-256c-47.146 0-85.334 38.186-85.334 85.334v682.666zM153.6 234.666h187.734v38.4c0 26.026 20.906 46.934 46.934 46.934h247.466c26.026 0 46.934-20.906 46.934-46.934l-0.002-38.4h187.734c26.026 0 46.934 20.906 46.934 46.934v546.134c0 26.026-20.906 46.934-46.934 46.934l-716.8-0.002c-26.026 0-46.934-20.906-46.934-46.932v-546.134c0-26.026 20.908-46.934 46.934-46.934z"],"attrs":[],"isMulticolor":false,"tags":["board","profile","clipboard"],"grid":48},"attrs":[],"properties":{"id":83,"order":12,"prevSize":48,"code":58888,"name":"board"},"setIdx":1,"setId":1,"iconIdx":54}],"height":1024,"metadata":{"name":"icomoon"},"preferences":{"showGlyphs":true,"showQuickUse":true,"showQuickUse2":true,"showSVGs":true,"fontPref":{"prefix":"icon-","metadata":{"fontFamily":"icomoon","majorVersion":1,"minorVersion":0},"metrics":{"emSize":1024,"baseline":6.25,"whitespace":50},"embed":false,"cssVars":true,"cssVarsFormat":"less","showSelector":true,"selector":"","classSelector":".jste-icon","showMetrics":true,"showMetadata":true,"showVersion":true},"imagePref":{"prefix":"icon-","png":true,"useClassSelector":true,"color":4473924,"bgColor":16777215},"historySize":100,"showCodes":false,"showLiga":false}}',"assets/icomoon/style.css":`@font-face {
  font-family: 'icomoon';
  src:  url('fonts/icomoon.eot?z1lat9');
  src:  url('fonts/icomoon.eot?z1lat9#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?z1lat9') format('truetype'),
    url('fonts/icomoon.woff?z1lat9') format('woff'),
    url('fonts/icomoon.svg?z1lat9#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-gitlab .path1:before {
  content: "\\e906";
  color: rgb(252, 109, 38);
}
.icon-gitlab .path2:before {
  content: "\\e907";
  margin-left: -1em;
  color: rgb(226, 67, 41);
}
.icon-gitlab .path3:before {
  content: "\\e908";
  margin-left: -1em;
  color: rgb(252, 109, 38);
}
.icon-gitlab .path4:before {
  content: "\\e909";
  margin-left: -1em;
  color: rgb(252, 163, 38);
}
.icon-gitlab .path5:before {
  content: "\\e90a";
  margin-left: -1em;
  color: rgb(226, 67, 41);
}
.icon-gitlab .path6:before {
  content: "\\e90b";
  margin-left: -1em;
  color: rgb(252, 109, 38);
}
.icon-gitlab .path7:before {
  content: "\\e90c";
  margin-left: -1em;
  color: rgb(252, 163, 38);
}
.icon-gitlab .path8:before {
  content: "\\e90d";
  margin-left: -1em;
  color: rgb(226, 67, 41);
}
.icon-meetup .path1:before {
  content: "\\e901";
  color: rgb(255, 255, 255);
}
.icon-meetup .path2:before {
  content: "\\e902";
  margin-left: -1.5em;
  color: rgb(240, 1, 1);
}
.icon-meetup .path3:before {
  content: "\\e903";
  margin-left: -1.5em;
  color: rgb(3, 3, 3);
}
.icon-blogger:before {
  content: "\\e900";
}
.icon-exercism:before {
  content: "\\e601";
}
.icon-telegram:before {
  content: "\\e904";
}
.icon-flickr:before {
  content: "\\f16e";
}
.icon-medium:before {
  content: "\\f23a";
}
.icon-heart:before {
  content: "\\f004";
}
.icon-book:before {
  content: "\\f02d";
}
.icon-linkedin:before {
  content: "\\f08c";
}
.icon-twitter:before {
  content: "\\f099";
}
.icon-github:before {
  content: "\\f09b";
}
.icon-link:before {
  content: "\\f0c1";
}
.icon-bars:before {
  content: "\\f0c9";
}
.icon-pinterest:before {
  content: "\\f0d2";
}
.icon-googleplus:before {
  content: "\\f0d5";
}
.icon-circle:before {
  content: "\\f111";
}
.icon-code:before {
  content: "\\f121";
}
.icon-youtube:before {
  content: "\\f167";
}
.icon-stackoverflow:before {
  content: "\\f16c";
}
.icon-bitbucket:before {
  content: "\\f171";
}
.icon-tumblr:before {
  content: "\\f173";
}
.icon-dribbble:before {
  content: "\\f17d";
}
.icon-skype:before {
  content: "\\f17e";
}
.icon-foursquare:before {
  content: "\\f180";
}
.icon-gittip:before {
  content: "\\f184";
}
.icon-gratipay:before {
  content: "\\f184";
}
.icon-stackexchange:before {
  content: "\\f18d";
}
.icon-vimeo:before {
  content: "\\f194";
}
.icon-graduation-cap:before {
  content: "\\f19d";
}
.icon-language:before {
  content: "\\f1ab";
}
.icon-child:before {
  content: "\\f1ae";
}
.icon-behance:before {
  content: "\\f1b5";
}
.icon-spotify:before {
  content: "\\f1bc";
}
.icon-soundcloud:before {
  content: "\\f1be";
}
.icon-codepen:before {
  content: "\\f1cb";
}
.icon-hackernews:before {
  content: "\\f1d4";
}
.icon-lastfm:before {
  content: "\\f202";
}
.icon-angellist:before {
  content: "\\f209";
}
.icon-facebook:before {
  content: "\\f230";
}
.icon-instagram:before {
  content: "\\e905";
}
.icon-trophy:before {
  content: "\\e605";
}
.icon-office:before {
  content: "\\e606";
}
.icon-clock:before {
  content: "\\e60a";
}
.icon-reddit:before {
  content: "\\e609";
}
.icon-profile:before {
  content: "\\e600";
}
.icon-tools:before {
  content: "\\e034";
}
.icon-location:before {
  content: "\\e602";
}
.icon-mail:before {
  content: "\\e603";
}
.icon-phone:before {
  content: "\\e03f";
}
.icon-newspaper:before {
  content: "\\e607";
}
.icon-chevron-down:before {
  content: "\\e60c";
}
.icon-chevron-up:before {
  content: "\\e60d";
}
.icon-dots-three-horizontal:before {
  content: "\\e60b";
}
.icon-thumbs-up:before {
  content: "\\e604";
}
.icon-board:before {
  content: "\\e608";
}
`,"assets/icomoon/style.less":`@import "variables";

@font-face {
  font-family: '@{icomoon-font-family}';
  src:  url('@{icomoon-font-path}/@{icomoon-font-family}.eot?z1lat9');
  src:  url('@{icomoon-font-path}/@{icomoon-font-family}.eot?z1lat9#iefix') format('embedded-opentype'),
    url('@{icomoon-font-path}/@{icomoon-font-family}.ttf?z1lat9') format('truetype'),
    url('@{icomoon-font-path}/@{icomoon-font-family}.woff?z1lat9') format('woff'),
    url('@{icomoon-font-path}/@{icomoon-font-family}.svg?z1lat9#@{icomoon-font-family}') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: '@{icomoon-font-family}' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-gitlab .path1 {
  &:before {
    content: @icon-gitlab-path1;  
    color: rgb(252, 109, 38);
  }
}
.icon-gitlab .path2 {
  &:before {
    content: @icon-gitlab-path2;  
    margin-left: -1em;  
    color: rgb(226, 67, 41);
  }
}
.icon-gitlab .path3 {
  &:before {
    content: @icon-gitlab-path3;  
    margin-left: -1em;  
    color: rgb(252, 109, 38);
  }
}
.icon-gitlab .path4 {
  &:before {
    content: @icon-gitlab-path4;  
    margin-left: -1em;  
    color: rgb(252, 163, 38);
  }
}
.icon-gitlab .path5 {
  &:before {
    content: @icon-gitlab-path5;  
    margin-left: -1em;  
    color: rgb(226, 67, 41);
  }
}
.icon-gitlab .path6 {
  &:before {
    content: @icon-gitlab-path6;  
    margin-left: -1em;  
    color: rgb(252, 109, 38);
  }
}
.icon-gitlab .path7 {
  &:before {
    content: @icon-gitlab-path7;  
    margin-left: -1em;  
    color: rgb(252, 163, 38);
  }
}
.icon-gitlab .path8 {
  &:before {
    content: @icon-gitlab-path8;  
    margin-left: -1em;  
    color: rgb(226, 67, 41);
  }
}
.icon-meetup .path1 {
  &:before {
    content: @icon-meetup-path1;  
    color: rgb(255, 255, 255);
  }
}
.icon-meetup .path2 {
  &:before {
    content: @icon-meetup-path2;  
    margin-left: -1.5em;  
    color: rgb(240, 1, 1);
  }
}
.icon-meetup .path3 {
  &:before {
    content: @icon-meetup-path3;  
    margin-left: -1.5em;  
    color: rgb(3, 3, 3);
  }
}
.icon-blogger {
  &:before {
    content: @icon-blogger; 
  }
}
.icon-exercism {
  &:before {
    content: @icon-exercism; 
  }
}
.icon-telegram {
  &:before {
    content: @icon-telegram; 
  }
}
.icon-flickr {
  &:before {
    content: @icon-flickr; 
  }
}
.icon-medium {
  &:before {
    content: @icon-medium; 
  }
}
.icon-heart {
  &:before {
    content: @icon-heart; 
  }
}
.icon-book {
  &:before {
    content: @icon-book; 
  }
}
.icon-linkedin {
  &:before {
    content: @icon-linkedin; 
  }
}
.icon-twitter {
  &:before {
    content: @icon-twitter; 
  }
}
.icon-github {
  &:before {
    content: @icon-github; 
  }
}
.icon-link {
  &:before {
    content: @icon-link; 
  }
}
.icon-bars {
  &:before {
    content: @icon-bars; 
  }
}
.icon-pinterest {
  &:before {
    content: @icon-pinterest; 
  }
}
.icon-googleplus {
  &:before {
    content: @icon-googleplus; 
  }
}
.icon-circle {
  &:before {
    content: @icon-circle; 
  }
}
.icon-code {
  &:before {
    content: @icon-code; 
  }
}
.icon-youtube {
  &:before {
    content: @icon-youtube; 
  }
}
.icon-stackoverflow {
  &:before {
    content: @icon-stackoverflow; 
  }
}
.icon-bitbucket {
  &:before {
    content: @icon-bitbucket; 
  }
}
.icon-tumblr {
  &:before {
    content: @icon-tumblr; 
  }
}
.icon-dribbble {
  &:before {
    content: @icon-dribbble; 
  }
}
.icon-skype {
  &:before {
    content: @icon-skype; 
  }
}
.icon-foursquare {
  &:before {
    content: @icon-foursquare; 
  }
}
.icon-gittip {
  &:before {
    content: @icon-gittip; 
  }
}
.icon-gratipay {
  &:before {
    content: @icon-gratipay; 
  }
}
.icon-stackexchange {
  &:before {
    content: @icon-stackexchange; 
  }
}
.icon-vimeo {
  &:before {
    content: @icon-vimeo; 
  }
}
.icon-graduation-cap {
  &:before {
    content: @icon-graduation-cap; 
  }
}
.icon-language {
  &:before {
    content: @icon-language; 
  }
}
.icon-child {
  &:before {
    content: @icon-child; 
  }
}
.icon-behance {
  &:before {
    content: @icon-behance; 
  }
}
.icon-spotify {
  &:before {
    content: @icon-spotify; 
  }
}
.icon-soundcloud {
  &:before {
    content: @icon-soundcloud; 
  }
}
.icon-codepen {
  &:before {
    content: @icon-codepen; 
  }
}
.icon-hackernews {
  &:before {
    content: @icon-hackernews; 
  }
}
.icon-lastfm {
  &:before {
    content: @icon-lastfm; 
  }
}
.icon-angellist {
  &:before {
    content: @icon-angellist; 
  }
}
.icon-facebook {
  &:before {
    content: @icon-facebook; 
  }
}
.icon-instagram {
  &:before {
    content: @icon-instagram; 
  }
}
.icon-trophy {
  &:before {
    content: @icon-trophy; 
  }
}
.icon-office {
  &:before {
    content: @icon-office; 
  }
}
.icon-clock {
  &:before {
    content: @icon-clock; 
  }
}
.icon-reddit {
  &:before {
    content: @icon-reddit; 
  }
}
.icon-profile {
  &:before {
    content: @icon-profile; 
  }
}
.icon-tools {
  &:before {
    content: @icon-tools; 
  }
}
.icon-location {
  &:before {
    content: @icon-location; 
  }
}
.icon-mail {
  &:before {
    content: @icon-mail; 
  }
}
.icon-phone {
  &:before {
    content: @icon-phone; 
  }
}
.icon-newspaper {
  &:before {
    content: @icon-newspaper; 
  }
}
.icon-chevron-down {
  &:before {
    content: @icon-chevron-down; 
  }
}
.icon-chevron-up {
  &:before {
    content: @icon-chevron-up; 
  }
}
.icon-dots-three-horizontal {
  &:before {
    content: @icon-dots-three-horizontal; 
  }
}
.icon-thumbs-up {
  &:before {
    content: @icon-thumbs-up; 
  }
}
.icon-board {
  &:before {
    content: @icon-board; 
  }
}

`,"assets/icomoon/variables.less":`@icomoon-font-family: "icomoon";
@icomoon-font-path: "fonts";

@icon-gitlab-path1: "\\e906";
@icon-gitlab-path2: "\\e907";
@icon-gitlab-path3: "\\e908";
@icon-gitlab-path4: "\\e909";
@icon-gitlab-path5: "\\e90a";
@icon-gitlab-path6: "\\e90b";
@icon-gitlab-path7: "\\e90c";
@icon-gitlab-path8: "\\e90d";
@icon-meetup-path1: "\\e901";
@icon-meetup-path2: "\\e902";
@icon-meetup-path3: "\\e903";
@icon-blogger: "\\e900";
@icon-exercism: "\\e601";
@icon-telegram: "\\e904";
@icon-flickr: "\\f16e";
@icon-medium: "\\f23a";
@icon-heart: "\\f004";
@icon-book: "\\f02d";
@icon-linkedin: "\\f08c";
@icon-twitter: "\\f099";
@icon-github: "\\f09b";
@icon-link: "\\f0c1";
@icon-bars: "\\f0c9";
@icon-pinterest: "\\f0d2";
@icon-googleplus: "\\f0d5";
@icon-circle: "\\f111";
@icon-code: "\\f121";
@icon-youtube: "\\f167";
@icon-stackoverflow: "\\f16c";
@icon-bitbucket: "\\f171";
@icon-tumblr: "\\f173";
@icon-dribbble: "\\f17d";
@icon-skype: "\\f17e";
@icon-foursquare: "\\f180";
@icon-gittip: "\\f184";
@icon-gratipay: "\\f184";
@icon-stackexchange: "\\f18d";
@icon-vimeo: "\\f194";
@icon-graduation-cap: "\\f19d";
@icon-language: "\\f1ab";
@icon-child: "\\f1ae";
@icon-behance: "\\f1b5";
@icon-spotify: "\\f1bc";
@icon-soundcloud: "\\f1be";
@icon-codepen: "\\f1cb";
@icon-hackernews: "\\f1d4";
@icon-lastfm: "\\f202";
@icon-angellist: "\\f209";
@icon-facebook: "\\f230";
@icon-instagram: "\\e905";
@icon-trophy: "\\e605";
@icon-office: "\\e606";
@icon-clock: "\\e60a";
@icon-reddit: "\\e609";
@icon-profile: "\\e600";
@icon-tools: "\\e034";
@icon-location: "\\e602";
@icon-mail: "\\e603";
@icon-phone: "\\e03f";
@icon-newspaper: "\\e607";
@icon-chevron-down: "\\e60c";
@icon-chevron-up: "\\e60d";
@icon-dots-three-horizontal: "\\e60b";
@icon-thumbs-up: "\\e604";
@icon-board: "\\e608";

`,"assets/less/base.less":`@import "variables";
@import "mixins";
@import "icon";

body {
    font-family: 'Lato';
    background: @theme-bg;
    color: @theme-font-color;
}

.main {
    padding: 5px;
}

.card {
    background: @card-bg;
    border: 1px solid @card-border-color;
    border-radius: @card-border-radius;
    min-height: 300px;
    padding: 10px 0;
}

.card-nested {
    .clearfix();
    min-height: 0;
    border-width: 1px 0 0 0;

    @media (max-width: @screen-phone) {
        padding: 5px 0;
    }
}

.background-card {
    padding: 10px 20px;
}

.card-wrapper {
    padding: 5px;

    @media (max-width: @screen-desktop) {
        float: none !important;
    }
}

.background-details {
    .detail {
        display: table;

        .icon {
            min-width: 45px;
            max-width: 45px;
            text-align: center;
        }

        .info {
            width: 100%;
        }

        .title, .icon {
            color: @icon-color;
        }

        .mobile-title {
            display: none;
            @media (max-width: @screen-phone) {
                display: inline-block;
                margin-left: 5px;
                font-weight: bold;
                text-transform: uppercase;
                vertical-align: middle;
            }
        }

        .icon, .info {
            display: table-cell;
            padding: 0 10px;
        }

        @media (max-width: @screen-phone) {
            display: block;

            .icon {
                max-width: inherit;
                min-width: inherit;
                text-align: left;
            }

            .icon, .info {
                display: block;
                padding: 10px 0;
            }

            .title {
                display: none;
            }
        }
    }
}

.info {
    .content.has-sidebar {
        width: 80%;
        box-sizing: border-box;
        float: left;
        padding: 0 10px;
        border-right: 1px solid darken(@card-border-color, 10%);

        @media (max-width: @screen-desktop) {
            width: 100%;
            border-right: 0;
        }
        @media (max-width: @screen-phone) {
            padding: 0 2px;
        }
    }

    .sidebar {
        margin-left: 80%;
        box-sizing: border-box;
        padding: 10px;
    }
}

ul {
    @media (max-width: @screen-phone) {
        padding-left: 25px;
    }
}

.current-event {
    font-size: 8px;
    color: #5ACE24;
    position: absolute;
    right: 100%;
    top: 4px;
    left: -10px;
}

.mop-wrapper { //mardown output wrapper
    > p { // markdown outputs the result wrapped in a <p> tag, bootstrap has default margin for this tag, so negating it
        &:last-child {
            margin: 0;
        }
    }
}
`,"assets/less/floating-nav.less":`/*
    Credits: http://codyhouse.co/demo/smart-fixed-navigation/index.html
*/

.floating-nav-trigger {
    @color: darken(@theme-label-bg, 20%);
    .square(50px);
    .box-shadow(0 1px 4px rgba(0, 0, 0, 0.24));
    .transition(background-color 0.5s ease);
    display: block;
    border-radius: 50%;
    text-align: center;
    background-color: white;
    font-size: 1.5em;
    color: @color;
    z-index: 100;
    position: fixed;
    bottom: 10px;
    right: 10px;
    text-decoration: none !important;

    > [class^="icon-"], [class*=" icon-"], > .close-icon {
        line-height: 50px;
    }

    .close-icon {
        display: none;
    }

    &:hover {
        color: darken(@color, 20%);
        background-color: #e6e6e6;
    }

    &.is-open {
        .box-shadow(none);
        .close-icon {
            display: inherit;
        }
        .icon-bars {
            display: none;
        }
        &:hover {
            background-color: white;
        }
    }
}

.floating-nav {
    .scale(0);
    .transform-origin(100% 100%);
    .transition(transform 0.3s, visibility 0s 0.3s;);
    @color: darken(@theme-label-bg, 20%);
    .box-shadow(0 1px 4px rgba(0, 0, 0, 0.24));
    position: fixed;
    z-index: 50;
    right: 10px;
    bottom: 10px;
    background-color: white;
    width: 90%;
    max-width: 400px;
    visibility: hidden;
    overflow: hidden;

    ul {
        font-size: 1.2em;
        margin: 0;

        li {
            border-bottom: 1px solid #eff2f6;

            a {
                padding: 20px;
                text-decoration: none;
                color: @color;
                display: block;

                &:hover {
                    color: darken(@color, 20%);
                }
            }

            &:last-child {
                border-bottom: 0;
            }
        }
    }

    &.is-visible {
        .scale(1);
        .transition(transform 0.3s, visibility 0s 0s;);
        visibility: visible;
    }
}
`,"assets/less/icon.less":`@theme-version: '1.12.0'; /* the version when the icon file is last updated */
@font-base-path: "//unpkg.com/jsonresume-theme-elegant@@{theme-version}/assets/icomoon/fonts";

@font-face {
  font-family: 'jst-elegant';
  src:  url("@{font-base-path}/icomoon.eot?f218wo");
  src:  url("@{font-base-path}/icomoon.eot?f218wo#iefix") format('embedded-opentype'),
    url("@{font-base-path}/icomoon.ttf?f218wo") format('truetype'),
    url("@{font-base-path}/icomoon.woff?f218wo") format('woff'),
    url("@{font-base-path}/icomoon.svg?f218wo#icomoon") format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'jst-elegant' !important;
}
`,"assets/less/info_card_styles.less":`.profile-card-wrapper {
    @media (max-width: @screen-desktop) {
        position: relative;
    }

    .profile-card {
        padding: 10px;
    }
}

.profile-pic {
    padding: 20px 0;

    @media (max-width: @screen-desktop) {
        padding: 10px 0;
    }
}

.profile-pic img {
    width: 100px;
    height: 100px;
}

.name {
    @media (max-width: @screen-desktop) {
        margin-top: 10px;
    }
}

.contact-details {
    @media (max-width: @screen-tablet) {
        text-align: center;
    }

    .detail {
        display: table;
        padding: 10px 0;

        .icon {
            padding: 0 10px;
            color: @icon-color;

            @media (max-width: @screen-desktop) {
                padding: 0 5px 0 0;
            }
        }

        .info {
            font-size: 0.8em;
        }

        .icon, .info {
            display: table-cell;
            vertical-align: middle;
        }

        @media (max-width: @screen-tablet) {
            .make-xs-column(12);
        }

        @media (max-width: @screen-desktop) {
            .make-sm-column(3);
            padding: 10px;

            .icon, .info {
                display: inline-block;
            }
        }
    }
}

.social-links {
    line-height: 2.5;
}

.social-link {
    margin-left: 5px;
    min-width: 35px;
    display: inline-block;

    &:first-child {
        margin-left: 0;
    }

    &:hover {
        text-decoration: none;
    }
}

.link-github { .make-social-link(@github-color); }
.link-twitter { .make-social-link(@twitter-color); }
.link-blog { .make-social-link(@rss-feed-color); }
.link-linkedin { .make-social-link(@linkedin-color); }
.link-skype { .make-social-link(@skype-color); }
.link-instagram { .make-social-link(@instagram-color); }
.link-stackoverflow { .make-social-link(@stackoverflow-color); }
.link-stackexchange { .make-social-link(@stackexchange-color); }
.link-lastfm { .make-social-link(@lastfm-color); }
.link-soundcloud { .make-social-link(@soundcloud-color); }
.link-googleplus { .make-social-link(@googleplus-color); }
.link-youtube { .make-social-link(@youtube-color); }
.link-pinterest { .make-social-link(@pinterest-color); }
.link-gratipay { .make-social-link(@gratipay-color); }
.link-vimeo { .make-social-link(@vimeo-color); }
.link-behance { .make-social-link(@behance-color); }
.link-codepen { .make-social-link(@codepen-color); }
.link-foursquare { .make-social-link(@foursquare-color); }
.link-reddit { .make-social-link(@reddit-color); }
.link-spotify { .make-social-link(@spotify-color); }
.link-tumblr { .make-social-link(@tumblr-color); }
.link-dribbble { .make-social-link(@dribbble-color); }
.link-facebook { .make-social-link(@facebook-color); }
.link-angellist { .make-social-link(@angellist-color); }
.link-bitbucket { .make-social-link(@bitbucket-color); }
.link-hackernews { .make-social-link(@hackernews-color); }
.link-exercism { .make-social-link(@exercism-color); }
.link-blogger { .make-social-link(@blogger-color); }
.link-medium { .make-social-link(@medium-color); }
.link-flickr { .make-social-link(@flickr-color); }
.link-telegram { .make-social-link(@telegram-color); }
`,"assets/less/lib/bootstrap/mixins/alerts.less":`// Alerts

.alert-variant(@background; @border; @text-color) {
  background-color: @background;
  border-color: @border;
  color: @text-color;

  hr {
    border-top-color: darken(@border, 5%);
  }
  .alert-link {
    color: darken(@text-color, 10%);
  }
}
`,"assets/less/lib/bootstrap/mixins/background-variant.less":`// Contextual backgrounds

.bg-variant(@color) {
  background-color: @color;
  a&:hover,
  a&:focus {
    background-color: darken(@color, 10%);
  }
}
`,"assets/less/lib/bootstrap/mixins/border-radius.less":`// Single side border-radius

.border-top-radius(@radius) {
  border-top-right-radius: @radius;
   border-top-left-radius: @radius;
}
.border-right-radius(@radius) {
  border-bottom-right-radius: @radius;
     border-top-right-radius: @radius;
}
.border-bottom-radius(@radius) {
  border-bottom-right-radius: @radius;
   border-bottom-left-radius: @radius;
}
.border-left-radius(@radius) {
  border-bottom-left-radius: @radius;
     border-top-left-radius: @radius;
}
`,"assets/less/lib/bootstrap/mixins/buttons.less":`// Button variants
//
// Easily pump out default styles, as well as :hover, :focus, :active,
// and disabled options for all buttons

.button-variant(@color; @background; @border) {
  color: @color;
  background-color: @background;
  border-color: @border;

  &:focus,
  &.focus {
    color: @color;
    background-color: darken(@background, 10%);
        border-color: darken(@border, 25%);
  }
  &:hover {
    color: @color;
    background-color: darken(@background, 10%);
        border-color: darken(@border, 12%);
  }
  &:active,
  &.active,
  .open > .dropdown-toggle& {
    color: @color;
    background-color: darken(@background, 10%);
        border-color: darken(@border, 12%);

    &:hover,
    &:focus,
    &.focus {
      color: @color;
      background-color: darken(@background, 17%);
          border-color: darken(@border, 25%);
    }
  }
  &:active,
  &.active,
  .open > .dropdown-toggle& {
    background-image: none;
  }
  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    &:hover,
    &:focus,
    &.focus {
      background-color: @background;
          border-color: @border;
    }
  }

  .badge {
    color: @background;
    background-color: @color;
  }
}

// Button sizes
.button-size(@padding-vertical; @padding-horizontal; @font-size; @line-height; @border-radius) {
  padding: @padding-vertical @padding-horizontal;
  font-size: @font-size;
  line-height: @line-height;
  border-radius: @border-radius;
}
`,"assets/less/lib/bootstrap/mixins/center-block.less":`// Center-align a block level element

.center-block() {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
`,"assets/less/lib/bootstrap/mixins/clearfix.less":`// Clearfix
//
// For modern browsers
// 1. The space content is one way to avoid an Opera bug when the
//    contenteditable attribute is included anywhere else in the document.
//    Otherwise it causes space to appear at the top and bottom of elements
//    that are clearfixed.
// 2. The use of \`table\` rather than \`block\` is only necessary if using
//    \`:before\` to contain the top-margins of child elements.
//
// Source: http://nicolasgallagher.com/micro-clearfix-hack/

.clearfix() {
  &:before,
  &:after {
    content: " "; // 1
    display: table; // 2
  }
  &:after {
    clear: both;
  }
}
`,"assets/less/lib/bootstrap/mixins/forms.less":`// Form validation states
//
// Used in forms.less to generate the form validation CSS for warnings, errors,
// and successes.

.form-control-validation(@text-color: #555; @border-color: #ccc; @background-color: #f5f5f5) {
  // Color the label and help text
  .help-block,
  .control-label,
  .radio,
  .checkbox,
  .radio-inline,
  .checkbox-inline,
  &.radio label,
  &.checkbox label,
  &.radio-inline label,
  &.checkbox-inline label  {
    color: @text-color;
  }
  // Set the border and box shadow on specific inputs to match
  .form-control {
    border-color: @border-color;
    .box-shadow(inset 0 1px 1px rgba(0,0,0,.075)); // Redeclare so transitions work
    &:focus {
      border-color: darken(@border-color, 10%);
      @shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px lighten(@border-color, 20%);
      .box-shadow(@shadow);
    }
  }
  // Set validation states also for addons
  .input-group-addon {
    color: @text-color;
    border-color: @border-color;
    background-color: @background-color;
  }
  // Optional feedback icon
  .form-control-feedback {
    color: @text-color;
  }
}


// Form control focus state
//
// Generate a customized focus state and for any input with the specified color,
// which defaults to the \`@input-border-focus\` variable.
//
// We highly encourage you to not customize the default value, but instead use
// this to tweak colors on an as-needed basis. This aesthetic change is based on
// WebKit's default styles, but applicable to a wider range of browsers. Its
// usability and accessibility should be taken into account with any change.
//
// Example usage: change the default blue border and shadow to white for better
// contrast against a dark gray background.
.form-control-focus(@color: @input-border-focus) {
  @color-rgba: rgba(red(@color), green(@color), blue(@color), .6);
  &:focus {
    border-color: @color;
    outline: 0;
    .box-shadow(~"inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px @{color-rgba}");
  }
}

// Form control sizing
//
// Relative text size, padding, and border-radii changes for form controls. For
// horizontal sizing, wrap controls in the predefined grid classes. \`<select>\`
// element gets special love because it's special, and that's a fact!
.input-size(@input-height; @padding-vertical; @padding-horizontal; @font-size; @line-height; @border-radius) {
  height: @input-height;
  padding: @padding-vertical @padding-horizontal;
  font-size: @font-size;
  line-height: @line-height;
  border-radius: @border-radius;

  select& {
    height: @input-height;
    line-height: @input-height;
  }

  textarea&,
  select[multiple]& {
    height: auto;
  }
}
`,"assets/less/lib/bootstrap/mixins/gradients.less":`// Gradients

#gradient {

  // Horizontal gradient, from left to right
  //
  // Creates two color stops, start and end, by specifying a color and position for each color stop.
  // Color stops are not available in IE9 and below.
  .horizontal(@start-color: #555; @end-color: #333; @start-percent: 0%; @end-percent: 100%) {
    background-image: -webkit-linear-gradient(left, @start-color @start-percent, @end-color @end-percent); // Safari 5.1-6, Chrome 10+
    background-image: -o-linear-gradient(left, @start-color @start-percent, @end-color @end-percent); // Opera 12
    background-image: linear-gradient(to right, @start-color @start-percent, @end-color @end-percent); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+
    background-repeat: repeat-x;
    filter: e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=1)",argb(@start-color),argb(@end-color))); // IE9 and down
  }

  // Vertical gradient, from top to bottom
  //
  // Creates two color stops, start and end, by specifying a color and position for each color stop.
  // Color stops are not available in IE9 and below.
  .vertical(@start-color: #555; @end-color: #333; @start-percent: 0%; @end-percent: 100%) {
    background-image: -webkit-linear-gradient(top, @start-color @start-percent, @end-color @end-percent);  // Safari 5.1-6, Chrome 10+
    background-image: -o-linear-gradient(top, @start-color @start-percent, @end-color @end-percent);  // Opera 12
    background-image: linear-gradient(to bottom, @start-color @start-percent, @end-color @end-percent); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+
    background-repeat: repeat-x;
    filter: e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=0)",argb(@start-color),argb(@end-color))); // IE9 and down
  }

  .directional(@start-color: #555; @end-color: #333; @deg: 45deg) {
    background-repeat: repeat-x;
    background-image: -webkit-linear-gradient(@deg, @start-color, @end-color); // Safari 5.1-6, Chrome 10+
    background-image: -o-linear-gradient(@deg, @start-color, @end-color); // Opera 12
    background-image: linear-gradient(@deg, @start-color, @end-color); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+
  }
  .horizontal-three-colors(@start-color: #00b3ee; @mid-color: #7a43b6; @color-stop: 50%; @end-color: #c3325f) {
    background-image: -webkit-linear-gradient(left, @start-color, @mid-color @color-stop, @end-color);
    background-image: -o-linear-gradient(left, @start-color, @mid-color @color-stop, @end-color);
    background-image: linear-gradient(to right, @start-color, @mid-color @color-stop, @end-color);
    background-repeat: no-repeat;
    filter: e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=1)",argb(@start-color),argb(@end-color))); // IE9 and down, gets no color-stop at all for proper fallback
  }
  .vertical-three-colors(@start-color: #00b3ee; @mid-color: #7a43b6; @color-stop: 50%; @end-color: #c3325f) {
    background-image: -webkit-linear-gradient(@start-color, @mid-color @color-stop, @end-color);
    background-image: -o-linear-gradient(@start-color, @mid-color @color-stop, @end-color);
    background-image: linear-gradient(@start-color, @mid-color @color-stop, @end-color);
    background-repeat: no-repeat;
    filter: e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=0)",argb(@start-color),argb(@end-color))); // IE9 and down, gets no color-stop at all for proper fallback
  }
  .radial(@inner-color: #555; @outer-color: #333) {
    background-image: -webkit-radial-gradient(circle, @inner-color, @outer-color);
    background-image: radial-gradient(circle, @inner-color, @outer-color);
    background-repeat: no-repeat;
  }
  .striped(@color: rgba(255,255,255,.15); @angle: 45deg) {
    background-image: -webkit-linear-gradient(@angle, @color 25%, transparent 25%, transparent 50%, @color 50%, @color 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(@angle, @color 25%, transparent 25%, transparent 50%, @color 50%, @color 75%, transparent 75%, transparent);
    background-image: linear-gradient(@angle, @color 25%, transparent 25%, transparent 50%, @color 50%, @color 75%, transparent 75%, transparent);
  }
}
`,"assets/less/lib/bootstrap/mixins/grid-framework.less":`// Framework grid generation
//
// Used only by Bootstrap to generate the correct number of grid classes given
// any value of \`@grid-columns\`.

.make-grid-columns() {
  // Common styles for all sizes of grid columns, widths 1-12
  .col(@index) { // initial
    @item: ~".col-xs-@{index}, .col-sm-@{index}, .col-md-@{index}, .col-lg-@{index}";
    .col((@index + 1), @item);
  }
  .col(@index, @list) when (@index =< @grid-columns) { // general; "=<" isn't a typo
    @item: ~".col-xs-@{index}, .col-sm-@{index}, .col-md-@{index}, .col-lg-@{index}";
    .col((@index + 1), ~"@{list}, @{item}");
  }
  .col(@index, @list) when (@index > @grid-columns) { // terminal
    @{list} {
      position: relative;
      // Prevent columns from collapsing when empty
      min-height: 1px;
      // Inner gutter via padding
      padding-left:  ceil((@grid-gutter-width / 2));
      padding-right: floor((@grid-gutter-width / 2));
    }
  }
  .col(1); // kickstart it
}

.float-grid-columns(@class) {
  .col(@index) { // initial
    @item: ~".col-@{class}-@{index}";
    .col((@index + 1), @item);
  }
  .col(@index, @list) when (@index =< @grid-columns) { // general
    @item: ~".col-@{class}-@{index}";
    .col((@index + 1), ~"@{list}, @{item}");
  }
  .col(@index, @list) when (@index > @grid-columns) { // terminal
    @{list} {
      float: left;
    }
  }
  .col(1); // kickstart it
}

.calc-grid-column(@index, @class, @type) when (@type = width) and (@index > 0) {
  .col-@{class}-@{index} {
    width: percentage((@index / @grid-columns));
  }
}
.calc-grid-column(@index, @class, @type) when (@type = push) and (@index > 0) {
  .col-@{class}-push-@{index} {
    left: percentage((@index / @grid-columns));
  }
}
.calc-grid-column(@index, @class, @type) when (@type = push) and (@index = 0) {
  .col-@{class}-push-0 {
    left: auto;
  }
}
.calc-grid-column(@index, @class, @type) when (@type = pull) and (@index > 0) {
  .col-@{class}-pull-@{index} {
    right: percentage((@index / @grid-columns));
  }
}
.calc-grid-column(@index, @class, @type) when (@type = pull) and (@index = 0) {
  .col-@{class}-pull-0 {
    right: auto;
  }
}
.calc-grid-column(@index, @class, @type) when (@type = offset) {
  .col-@{class}-offset-@{index} {
    margin-left: percentage((@index / @grid-columns));
  }
}

// Basic looping in LESS
.loop-grid-columns(@index, @class, @type) when (@index >= 0) {
  .calc-grid-column(@index, @class, @type);
  // next iteration
  .loop-grid-columns((@index - 1), @class, @type);
}

// Create grid for specific class
.make-grid(@class) {
  .float-grid-columns(@class);
  .loop-grid-columns(@grid-columns, @class, width);
  .loop-grid-columns(@grid-columns, @class, pull);
  .loop-grid-columns(@grid-columns, @class, push);
  .loop-grid-columns(@grid-columns, @class, offset);
}
`,"assets/less/lib/bootstrap/mixins/grid.less":`// Grid system
//
// Generate semantic grid columns with these mixins.

// Centered container element
.container-fixed(@gutter: @grid-gutter-width) {
  margin-right: auto;
  margin-left: auto;
  padding-left:  floor((@gutter / 2));
  padding-right: ceil((@gutter / 2));
  &:extend(.clearfix all);
}

// Creates a wrapper for a series of columns
.make-row(@gutter: @grid-gutter-width) {
  margin-left:  ceil((@gutter / -2));
  margin-right: floor((@gutter / -2));
  &:extend(.clearfix all);
}

// Generate the extra small columns
.make-xs-column(@columns; @gutter: @grid-gutter-width) {
  position: relative;
  float: left;
  width: percentage((@columns / @grid-columns));
  min-height: 1px;
  padding-left:  (@gutter / 2);
  padding-right: (@gutter / 2);
}
.make-xs-column-offset(@columns) {
  margin-left: percentage((@columns / @grid-columns));
}
.make-xs-column-push(@columns) {
  left: percentage((@columns / @grid-columns));
}
.make-xs-column-pull(@columns) {
  right: percentage((@columns / @grid-columns));
}

// Generate the small columns
.make-sm-column(@columns; @gutter: @grid-gutter-width) {
  position: relative;
  min-height: 1px;
  padding-left:  (@gutter / 2);
  padding-right: (@gutter / 2);

  @media (min-width: @screen-sm-min) {
    float: left;
    width: percentage((@columns / @grid-columns));
  }
}
.make-sm-column-offset(@columns) {
  @media (min-width: @screen-sm-min) {
    margin-left: percentage((@columns / @grid-columns));
  }
}
.make-sm-column-push(@columns) {
  @media (min-width: @screen-sm-min) {
    left: percentage((@columns / @grid-columns));
  }
}
.make-sm-column-pull(@columns) {
  @media (min-width: @screen-sm-min) {
    right: percentage((@columns / @grid-columns));
  }
}

// Generate the medium columns
.make-md-column(@columns; @gutter: @grid-gutter-width) {
  position: relative;
  min-height: 1px;
  padding-left:  (@gutter / 2);
  padding-right: (@gutter / 2);

  @media (min-width: @screen-md-min) {
    float: left;
    width: percentage((@columns / @grid-columns));
  }
}
.make-md-column-offset(@columns) {
  @media (min-width: @screen-md-min) {
    margin-left: percentage((@columns / @grid-columns));
  }
}
.make-md-column-push(@columns) {
  @media (min-width: @screen-md-min) {
    left: percentage((@columns / @grid-columns));
  }
}
.make-md-column-pull(@columns) {
  @media (min-width: @screen-md-min) {
    right: percentage((@columns / @grid-columns));
  }
}

// Generate the large columns
.make-lg-column(@columns; @gutter: @grid-gutter-width) {
  position: relative;
  min-height: 1px;
  padding-left:  (@gutter / 2);
  padding-right: (@gutter / 2);

  @media (min-width: @screen-lg-min) {
    float: left;
    width: percentage((@columns / @grid-columns));
  }
}
.make-lg-column-offset(@columns) {
  @media (min-width: @screen-lg-min) {
    margin-left: percentage((@columns / @grid-columns));
  }
}
.make-lg-column-push(@columns) {
  @media (min-width: @screen-lg-min) {
    left: percentage((@columns / @grid-columns));
  }
}
.make-lg-column-pull(@columns) {
  @media (min-width: @screen-lg-min) {
    right: percentage((@columns / @grid-columns));
  }
}
`,"assets/less/lib/bootstrap/mixins/hide-text.less":`// CSS image replacement
//
// Heads up! v3 launched with only \`.hide-text()\`, but per our pattern for
// mixins being reused as classes with the same name, this doesn't hold up. As
// of v3.0.1 we have added \`.text-hide()\` and deprecated \`.hide-text()\`.
//
// Source: https://github.com/h5bp/html5-boilerplate/commit/aa0396eae757

// Deprecated as of v3.0.1 (has been removed in v4)
.hide-text() {
  font: ~"0/0" a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

// New mixin to use as of v3.0.1
.text-hide() {
  .hide-text();
}
`,"assets/less/lib/bootstrap/mixins/image.less":`// Image Mixins
// - Responsive image
// - Retina image


// Responsive image
//
// Keep images from scaling beyond the width of their parents.
.img-responsive(@display: block) {
  display: @display;
  max-width: 100%; // Part 1: Set a maximum relative to the parent
  height: auto; // Part 2: Scale the height according to the width, otherwise you get stretching
}


// Retina image
//
// Short retina mixin for setting background-image and -size. Note that the
// spelling of \`min--moz-device-pixel-ratio\` is intentional.
.img-retina(@file-1x; @file-2x; @width-1x; @height-1x) {
  background-image: url("@{file-1x}");

  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (   min--moz-device-pixel-ratio: 2),
  only screen and (     -o-min-device-pixel-ratio: 2/1),
  only screen and (        min-device-pixel-ratio: 2),
  only screen and (                min-resolution: 192dpi),
  only screen and (                min-resolution: 2dppx) {
    background-image: url("@{file-2x}");
    background-size: @width-1x @height-1x;
  }
}
`,"assets/less/lib/bootstrap/mixins/labels.less":`// Labels

.label-variant(@color) {
  background-color: @color;

  &[href] {
    &:hover,
    &:focus {
      background-color: darken(@color, 10%);
    }
  }
}
`,"assets/less/lib/bootstrap/mixins/list-group.less":`// List Groups

.list-group-item-variant(@state; @background; @color) {
  .list-group-item-@{state} {
    color: @color;
    background-color: @background;

    a&,
    button& {
      color: @color;

      .list-group-item-heading {
        color: inherit;
      }

      &:hover,
      &:focus {
        color: @color;
        background-color: darken(@background, 5%);
      }
      &.active,
      &.active:hover,
      &.active:focus {
        color: #fff;
        background-color: @color;
        border-color: @color;
      }
    }
  }
}
`,"assets/less/lib/bootstrap/mixins/nav-divider.less":`// Horizontal dividers
//
// Dividers (basically an hr) within dropdowns and nav lists

.nav-divider(@color: #e5e5e5) {
  height: 1px;
  margin: ((@line-height-computed / 2) - 1) 0;
  overflow: hidden;
  background-color: @color;
}
`,"assets/less/lib/bootstrap/mixins/nav-vertical-align.less":`// Navbar vertical align
//
// Vertically center elements in the navbar.
// Example: an element has a height of 30px, so write out \`.navbar-vertical-align(30px);\` to calculate the appropriate top margin.

.navbar-vertical-align(@element-height) {
  margin-top: ((@navbar-height - @element-height) / 2);
  margin-bottom: ((@navbar-height - @element-height) / 2);
}
`,"assets/less/lib/bootstrap/mixins/opacity.less":`// Opacity

.opacity(@opacity) {
  opacity: @opacity;
  // IE8 filter
  @opacity-ie: (@opacity * 100);
  filter: ~"alpha(opacity=@{opacity-ie})";
}
`,"assets/less/lib/bootstrap/mixins/pagination.less":`// Pagination

.pagination-size(@padding-vertical; @padding-horizontal; @font-size; @line-height; @border-radius) {
  > li {
    > a,
    > span {
      padding: @padding-vertical @padding-horizontal;
      font-size: @font-size;
      line-height: @line-height;
    }
    &:first-child {
      > a,
      > span {
        .border-left-radius(@border-radius);
      }
    }
    &:last-child {
      > a,
      > span {
        .border-right-radius(@border-radius);
      }
    }
  }
}
`,"assets/less/lib/bootstrap/mixins/panels.less":`// Panels

.panel-variant(@border; @heading-text-color; @heading-bg-color; @heading-border) {
  border-color: @border;

  & > .panel-heading {
    color: @heading-text-color;
    background-color: @heading-bg-color;
    border-color: @heading-border;

    + .panel-collapse > .panel-body {
      border-top-color: @border;
    }
    .badge {
      color: @heading-bg-color;
      background-color: @heading-text-color;
    }
  }
  & > .panel-footer {
    + .panel-collapse > .panel-body {
      border-bottom-color: @border;
    }
  }
}
`,"assets/less/lib/bootstrap/mixins/progress-bar.less":`// Progress bars

.progress-bar-variant(@color) {
  background-color: @color;

  // Deprecated parent class requirement as of v3.2.0
  .progress-striped & {
    #gradient > .striped();
  }
}
`,"assets/less/lib/bootstrap/mixins/reset-filter.less":`// Reset filters for IE
//
// When you need to remove a gradient background, do not forget to use this to reset
// the IE filter for IE9 and below.

.reset-filter() {
  filter: e(%("progid:DXImageTransform.Microsoft.gradient(enabled = false)"));
}
`,"assets/less/lib/bootstrap/mixins/reset-text.less":`.reset-text() {
  font-family: @font-family-base;
  // We deliberately do NOT reset font-size.
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-break: auto;
  line-height: @line-height-base;
  text-align: left; // Fallback for where \`start\` is not supported
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
}
`,"assets/less/lib/bootstrap/mixins/resize.less":"// Resize anything\n\n.resizable(@direction) {\n  resize: @direction; // Options: horizontal, vertical, both\n  overflow: auto; // Per CSS3 UI, `resize` only applies when `overflow` isn't `visible`\n}\n","assets/less/lib/bootstrap/mixins/responsive-visibility.less":`// Responsive utilities

//
// More easily include all the states for responsive-utilities.less.
.responsive-visibility() {
  display: block !important;
  table&  { display: table !important; }
  tr&     { display: table-row !important; }
  th&,
  td&     { display: table-cell !important; }
}

.responsive-invisibility() {
  display: none !important;
}
`,"assets/less/lib/bootstrap/mixins/size.less":`// Sizing shortcuts

.size(@width; @height) {
  width: @width;
  height: @height;
}

.square(@size) {
  .size(@size; @size);
}
`,"assets/less/lib/bootstrap/mixins/tab-focus.less":`// WebKit-style focus

.tab-focus() {
  // Default
  outline: thin dotted;
  // WebKit
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
`,"assets/less/lib/bootstrap/mixins/table-row.less":`// Tables

.table-row-variant(@state; @background) {
  // Exact selectors below required to override \`.table-striped\` and prevent
  // inheritance to nested tables.
  .table > thead > tr,
  .table > tbody > tr,
  .table > tfoot > tr {
    > td.@{state},
    > th.@{state},
    &.@{state} > td,
    &.@{state} > th {
      background-color: @background;
    }
  }

  // Hover states for \`.table-hover\`
  // Note: this is not available for cells or rows within \`thead\` or \`tfoot\`.
  .table-hover > tbody > tr {
    > td.@{state}:hover,
    > th.@{state}:hover,
    &.@{state}:hover > td,
    &:hover > .@{state},
    &.@{state}:hover > th {
      background-color: darken(@background, 5%);
    }
  }
}
`,"assets/less/lib/bootstrap/mixins/text-emphasis.less":`// Typography

.text-emphasis-variant(@color) {
  color: @color;
  a&:hover,
  a&:focus {
    color: darken(@color, 10%);
  }
}
`,"assets/less/lib/bootstrap/mixins/text-overflow.less":`// Text overflow
// Requires inline-block or block for proper styling

.text-overflow() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`,"assets/less/lib/bootstrap/mixins/vendor-prefixes.less":`// Vendor Prefixes
//
// All vendor mixins are deprecated as of v3.2.0 due to the introduction of
// Autoprefixer in our Gruntfile. They have been removed in v4.

// - Animations
// - Backface visibility
// - Box shadow
// - Box sizing
// - Content columns
// - Hyphens
// - Placeholder text
// - Transformations
// - Transitions
// - User Select


// Animations
.animation(@animation) {
  -webkit-animation: @animation;
       -o-animation: @animation;
          animation: @animation;
}
.animation-name(@name) {
  -webkit-animation-name: @name;
          animation-name: @name;
}
.animation-duration(@duration) {
  -webkit-animation-duration: @duration;
          animation-duration: @duration;
}
.animation-timing-function(@timing-function) {
  -webkit-animation-timing-function: @timing-function;
          animation-timing-function: @timing-function;
}
.animation-delay(@delay) {
  -webkit-animation-delay: @delay;
          animation-delay: @delay;
}
.animation-iteration-count(@iteration-count) {
  -webkit-animation-iteration-count: @iteration-count;
          animation-iteration-count: @iteration-count;
}
.animation-direction(@direction) {
  -webkit-animation-direction: @direction;
          animation-direction: @direction;
}
.animation-fill-mode(@fill-mode) {
  -webkit-animation-fill-mode: @fill-mode;
          animation-fill-mode: @fill-mode;
}

// Backface visibility
// Prevent browsers from flickering when using CSS 3D transforms.
// Default value is \`visible\`, but can be changed to \`hidden\`

.backface-visibility(@visibility) {
  -webkit-backface-visibility: @visibility;
     -moz-backface-visibility: @visibility;
          backface-visibility: @visibility;
}

// Drop shadows
//
// Note: Deprecated \`.box-shadow()\` as of v3.1.0 since all of Bootstrap's
// supported browsers that have box shadow capabilities now support it.

.box-shadow(@shadow) {
  -webkit-box-shadow: @shadow; // iOS <4.3 & Android <4.1
          box-shadow: @shadow;
}

// Box sizing
.box-sizing(@boxmodel) {
  -webkit-box-sizing: @boxmodel;
     -moz-box-sizing: @boxmodel;
          box-sizing: @boxmodel;
}

// CSS3 Content Columns
.content-columns(@column-count; @column-gap: @grid-gutter-width) {
  -webkit-column-count: @column-count;
     -moz-column-count: @column-count;
          column-count: @column-count;
  -webkit-column-gap: @column-gap;
     -moz-column-gap: @column-gap;
          column-gap: @column-gap;
}

// Optional hyphenation
.hyphens(@mode: auto) {
  word-wrap: break-word;
  -webkit-hyphens: @mode;
     -moz-hyphens: @mode;
      -ms-hyphens: @mode; // IE10+
       -o-hyphens: @mode;
          hyphens: @mode;
}

// Placeholder text
.placeholder(@color: @input-color-placeholder) {
  // Firefox
  &::-moz-placeholder {
    color: @color;
    opacity: 1; // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526
  }
  &:-ms-input-placeholder { color: @color; } // Internet Explorer 10+
  &::-webkit-input-placeholder  { color: @color; } // Safari and Chrome
}

// Transformations
.scale(@ratio) {
  -webkit-transform: scale(@ratio);
      -ms-transform: scale(@ratio); // IE9 only
       -o-transform: scale(@ratio);
          transform: scale(@ratio);
}
.scale(@ratioX; @ratioY) {
  -webkit-transform: scale(@ratioX, @ratioY);
      -ms-transform: scale(@ratioX, @ratioY); // IE9 only
       -o-transform: scale(@ratioX, @ratioY);
          transform: scale(@ratioX, @ratioY);
}
.scaleX(@ratio) {
  -webkit-transform: scaleX(@ratio);
      -ms-transform: scaleX(@ratio); // IE9 only
       -o-transform: scaleX(@ratio);
          transform: scaleX(@ratio);
}
.scaleY(@ratio) {
  -webkit-transform: scaleY(@ratio);
      -ms-transform: scaleY(@ratio); // IE9 only
       -o-transform: scaleY(@ratio);
          transform: scaleY(@ratio);
}
.skew(@x; @y) {
  -webkit-transform: skewX(@x) skewY(@y);
      -ms-transform: skewX(@x) skewY(@y); // See https://github.com/twbs/bootstrap/issues/4885; IE9+
       -o-transform: skewX(@x) skewY(@y);
          transform: skewX(@x) skewY(@y);
}
.translate(@x; @y) {
  -webkit-transform: translate(@x, @y);
      -ms-transform: translate(@x, @y); // IE9 only
       -o-transform: translate(@x, @y);
          transform: translate(@x, @y);
}
.translate3d(@x; @y; @z) {
  -webkit-transform: translate3d(@x, @y, @z);
          transform: translate3d(@x, @y, @z);
}
.rotate(@degrees) {
  -webkit-transform: rotate(@degrees);
      -ms-transform: rotate(@degrees); // IE9 only
       -o-transform: rotate(@degrees);
          transform: rotate(@degrees);
}
.rotateX(@degrees) {
  -webkit-transform: rotateX(@degrees);
      -ms-transform: rotateX(@degrees); // IE9 only
       -o-transform: rotateX(@degrees);
          transform: rotateX(@degrees);
}
.rotateY(@degrees) {
  -webkit-transform: rotateY(@degrees);
      -ms-transform: rotateY(@degrees); // IE9 only
       -o-transform: rotateY(@degrees);
          transform: rotateY(@degrees);
}
.perspective(@perspective) {
  -webkit-perspective: @perspective;
     -moz-perspective: @perspective;
          perspective: @perspective;
}
.perspective-origin(@perspective) {
  -webkit-perspective-origin: @perspective;
     -moz-perspective-origin: @perspective;
          perspective-origin: @perspective;
}
.transform-origin(@origin) {
  -webkit-transform-origin: @origin;
     -moz-transform-origin: @origin;
      -ms-transform-origin: @origin; // IE9 only
          transform-origin: @origin;
}


// Transitions

.transition(@transition) {
  -webkit-transition: @transition;
       -o-transition: @transition;
          transition: @transition;
}
.transition-property(@transition-property) {
  -webkit-transition-property: @transition-property;
          transition-property: @transition-property;
}
.transition-delay(@transition-delay) {
  -webkit-transition-delay: @transition-delay;
          transition-delay: @transition-delay;
}
.transition-duration(@transition-duration) {
  -webkit-transition-duration: @transition-duration;
          transition-duration: @transition-duration;
}
.transition-timing-function(@timing-function) {
  -webkit-transition-timing-function: @timing-function;
          transition-timing-function: @timing-function;
}
.transition-transform(@transition) {
  -webkit-transition: -webkit-transform @transition;
     -moz-transition: -moz-transform @transition;
       -o-transition: -o-transform @transition;
          transition: transform @transition;
}


// User select
// For selecting text on the page

.user-select(@select) {
  -webkit-user-select: @select;
     -moz-user-select: @select;
      -ms-user-select: @select; // IE10+
          user-select: @select;
}
`,"assets/less/lib/bootstrap/mixins.less":`// Mixins
// --------------------------------------------------

// Utilities
@import "mixins/hide-text.less";
@import "mixins/opacity.less";
@import "mixins/image.less";
@import "mixins/labels.less";
@import "mixins/reset-filter.less";
@import "mixins/resize.less";
@import "mixins/responsive-visibility.less";
@import "mixins/size.less";
@import "mixins/tab-focus.less";
@import "mixins/reset-text.less";
@import "mixins/text-emphasis.less";
@import "mixins/text-overflow.less";
@import "mixins/vendor-prefixes.less";

// Components
@import "mixins/alerts.less";
@import "mixins/buttons.less";
@import "mixins/panels.less";
@import "mixins/pagination.less";
@import "mixins/list-group.less";
@import "mixins/nav-divider.less";
@import "mixins/forms.less";
@import "mixins/progress-bar.less";
@import "mixins/table-row.less";

// Skins
@import "mixins/background-variant.less";
@import "mixins/border-radius.less";
@import "mixins/gradients.less";

// Layout
@import "mixins/clearfix.less";
@import "mixins/center-block.less";
@import "mixins/nav-vertical-align.less";
@import "mixins/grid-framework.less";
@import "mixins/grid.less";
`,"assets/less/lib/bootstrap/variables.less":`//
// Variables
// --------------------------------------------------


//== Colors
//
//## Gray and brand colors for use across Bootstrap.

@gray-base:              #000;
@gray-darker:            lighten(@gray-base, 13.5%); // #222
@gray-dark:              lighten(@gray-base, 20%);   // #333
@gray:                   lighten(@gray-base, 33.5%); // #555
@gray-light:             lighten(@gray-base, 46.7%); // #777
@gray-lighter:           lighten(@gray-base, 93.5%); // #eee

@brand-primary:         darken(#428bca, 6.5%); // #337ab7
@brand-success:         #5cb85c;
@brand-info:            #5bc0de;
@brand-warning:         #f0ad4e;
@brand-danger:          #d9534f;


//== Scaffolding
//
//## Settings for some of the most global styles.

//** Background color for \`<body>\`.
@body-bg:               #fff;
//** Global text color on \`<body>\`.
@text-color:            @gray-dark;

//** Global textual link color.
@link-color:            @brand-primary;
//** Link hover color set via \`darken()\` function.
@link-hover-color:      darken(@link-color, 15%);
//** Link hover decoration.
@link-hover-decoration: underline;


//== Typography
//
//## Font, line-height, and color for body text, headings, and more.

@font-family-sans-serif:  "Helvetica Neue", Helvetica, Arial, sans-serif;
@font-family-serif:       Georgia, "Times New Roman", Times, serif;
//** Default monospace fonts for \`<code>\`, \`<kbd>\`, and \`<pre>\`.
@font-family-monospace:   Menlo, Monaco, Consolas, "Courier New", monospace;
@font-family-base:        @font-family-sans-serif;

@font-size-base:          14px;
@font-size-large:         ceil((@font-size-base * 1.25)); // ~18px
@font-size-small:         ceil((@font-size-base * 0.85)); // ~12px

@font-size-h1:            floor((@font-size-base * 2.6)); // ~36px
@font-size-h2:            floor((@font-size-base * 2.15)); // ~30px
@font-size-h3:            ceil((@font-size-base * 1.7)); // ~24px
@font-size-h4:            ceil((@font-size-base * 1.25)); // ~18px
@font-size-h5:            @font-size-base;
@font-size-h6:            ceil((@font-size-base * 0.85)); // ~12px

//** Unit-less \`line-height\` for use in components like buttons.
@line-height-base:        1.428571429; // 20/14
//** Computed "line-height" (\`font-size\` * \`line-height\`) for use with \`margin\`, \`padding\`, etc.
@line-height-computed:    floor((@font-size-base * @line-height-base)); // ~20px

//** By default, this inherits from the \`<body>\`.
@headings-font-family:    inherit;
@headings-font-weight:    500;
@headings-line-height:    1.1;
@headings-color:          inherit;


//== Iconography
//
//## Specify custom location and filename of the included Glyphicons icon font. Useful for those including Bootstrap via Bower.

//** Load fonts from this directory.
@icon-font-path:          "../fonts/";
//** File name for all font files.
@icon-font-name:          "glyphicons-halflings-regular";
//** Element ID within SVG icon file.
@icon-font-svg-id:        "glyphicons_halflingsregular";


//== Components
//
//## Define common padding and border radius sizes and more. Values based on 14px text and 1.428 line-height (~20px to start).

@padding-base-vertical:     6px;
@padding-base-horizontal:   12px;

@padding-large-vertical:    10px;
@padding-large-horizontal:  16px;

@padding-small-vertical:    5px;
@padding-small-horizontal:  10px;

@padding-xs-vertical:       1px;
@padding-xs-horizontal:     5px;

@line-height-large:         1.3333333; // extra decimals for Win 8.1 Chrome
@line-height-small:         1.5;

@border-radius-base:        4px;
@border-radius-large:       6px;
@border-radius-small:       3px;

//** Global color for active items (e.g., navs or dropdowns).
@component-active-color:    #fff;
//** Global background color for active items (e.g., navs or dropdowns).
@component-active-bg:       @brand-primary;

//** Width of the \`border\` for generating carets that indicator dropdowns.
@caret-width-base:          4px;
//** Carets increase slightly in size for larger components.
@caret-width-large:         5px;


//== Tables
//
//## Customizes the \`.table\` component with basic values, each used across all table variations.

//** Padding for \`<th>\`s and \`<td>\`s.
@table-cell-padding:            8px;
//** Padding for cells in \`.table-condensed\`.
@table-condensed-cell-padding:  5px;

//** Default background color used for all tables.
@table-bg:                      transparent;
//** Background color used for \`.table-striped\`.
@table-bg-accent:               #f9f9f9;
//** Background color used for \`.table-hover\`.
@table-bg-hover:                #f5f5f5;
@table-bg-active:               @table-bg-hover;

//** Border color for table and cell borders.
@table-border-color:            #ddd;


//== Buttons
//
//## For each of Bootstrap's buttons, define text, background and border color.

@btn-font-weight:                normal;

@btn-default-color:              #333;
@btn-default-bg:                 #fff;
@btn-default-border:             #ccc;

@btn-primary-color:              #fff;
@btn-primary-bg:                 @brand-primary;
@btn-primary-border:             darken(@btn-primary-bg, 5%);

@btn-success-color:              #fff;
@btn-success-bg:                 @brand-success;
@btn-success-border:             darken(@btn-success-bg, 5%);

@btn-info-color:                 #fff;
@btn-info-bg:                    @brand-info;
@btn-info-border:                darken(@btn-info-bg, 5%);

@btn-warning-color:              #fff;
@btn-warning-bg:                 @brand-warning;
@btn-warning-border:             darken(@btn-warning-bg, 5%);

@btn-danger-color:               #fff;
@btn-danger-bg:                  @brand-danger;
@btn-danger-border:              darken(@btn-danger-bg, 5%);

@btn-link-disabled-color:        @gray-light;

// Allows for customizing button radius independently from global border radius
@btn-border-radius-base:         @border-radius-base;
@btn-border-radius-large:        @border-radius-large;
@btn-border-radius-small:        @border-radius-small;


//== Forms
//
//##

//** \`<input>\` background color
@input-bg:                       #fff;
//** \`<input disabled>\` background color
@input-bg-disabled:              @gray-lighter;

//** Text color for \`<input>\`s
@input-color:                    @gray;
//** \`<input>\` border color
@input-border:                   #ccc;

// TODO: Rename \`@input-border-radius\` to \`@input-border-radius-base\` in v4
//** Default \`.form-control\` border radius
// This has no effect on \`<select>\`s in some browsers, due to the limited stylability of \`<select>\`s in CSS.
@input-border-radius:            @border-radius-base;
//** Large \`.form-control\` border radius
@input-border-radius-large:      @border-radius-large;
//** Small \`.form-control\` border radius
@input-border-radius-small:      @border-radius-small;

//** Border color for inputs on focus
@input-border-focus:             #66afe9;

//** Placeholder text color
@input-color-placeholder:        #999;

//** Default \`.form-control\` height
@input-height-base:              (@line-height-computed + (@padding-base-vertical * 2) + 2);
//** Large \`.form-control\` height
@input-height-large:             (ceil(@font-size-large * @line-height-large) + (@padding-large-vertical * 2) + 2);
//** Small \`.form-control\` height
@input-height-small:             (floor(@font-size-small * @line-height-small) + (@padding-small-vertical * 2) + 2);

//** \`.form-group\` margin
@form-group-margin-bottom:       15px;

@legend-color:                   @gray-dark;
@legend-border-color:            #e5e5e5;

//** Background color for textual input addons
@input-group-addon-bg:           @gray-lighter;
//** Border color for textual input addons
@input-group-addon-border-color: @input-border;

//** Disabled cursor for form controls and buttons.
@cursor-disabled:                not-allowed;


//== Dropdowns
//
//## Dropdown menu container and contents.

//** Background for the dropdown menu.
@dropdown-bg:                    #fff;
//** Dropdown menu \`border-color\`.
@dropdown-border:                rgba(0,0,0,.15);
//** Dropdown menu \`border-color\` **for IE8**.
@dropdown-fallback-border:       #ccc;
//** Divider color for between dropdown items.
@dropdown-divider-bg:            #e5e5e5;

//** Dropdown link text color.
@dropdown-link-color:            @gray-dark;
//** Hover color for dropdown links.
@dropdown-link-hover-color:      darken(@gray-dark, 5%);
//** Hover background for dropdown links.
@dropdown-link-hover-bg:         #f5f5f5;

//** Active dropdown menu item text color.
@dropdown-link-active-color:     @component-active-color;
//** Active dropdown menu item background color.
@dropdown-link-active-bg:        @component-active-bg;

//** Disabled dropdown menu item background color.
@dropdown-link-disabled-color:   @gray-light;

//** Text color for headers within dropdown menus.
@dropdown-header-color:          @gray-light;

//** Deprecated \`@dropdown-caret-color\` as of v3.1.0
@dropdown-caret-color:           #000;


//-- Z-index master list
//
// Warning: Avoid customizing these values. They're used for a bird's eye view
// of components dependent on the z-axis and are designed to all work together.
//
// Note: These variables are not generated into the Customizer.

@zindex-navbar:            1000;
@zindex-dropdown:          1000;
@zindex-popover:           1060;
@zindex-tooltip:           1070;
@zindex-navbar-fixed:      1030;
@zindex-modal-background:  1040;
@zindex-modal:             1050;


//== Media queries breakpoints
//
//## Define the breakpoints at which your layout will change, adapting to different screen sizes.

// Extra small screen / phone
//** Deprecated \`@screen-xs\` as of v3.0.1
@screen-xs:                  480px;
//** Deprecated \`@screen-xs-min\` as of v3.2.0
@screen-xs-min:              @screen-xs;
//** Deprecated \`@screen-phone\` as of v3.0.1
@screen-phone:               @screen-xs-min;

// Small screen / tablet
//** Deprecated \`@screen-sm\` as of v3.0.1
@screen-sm:                  768px;
@screen-sm-min:              @screen-sm;
//** Deprecated \`@screen-tablet\` as of v3.0.1
@screen-tablet:              @screen-sm-min;

// Medium screen / desktop
//** Deprecated \`@screen-md\` as of v3.0.1
@screen-md:                  992px;
@screen-md-min:              @screen-md;
//** Deprecated \`@screen-desktop\` as of v3.0.1
@screen-desktop:             @screen-md-min;

// Large screen / wide desktop
//** Deprecated \`@screen-lg\` as of v3.0.1
@screen-lg:                  1200px;
@screen-lg-min:              @screen-lg;
//** Deprecated \`@screen-lg-desktop\` as of v3.0.1
@screen-lg-desktop:          @screen-lg-min;

// So media queries don't overlap when required, provide a maximum
@screen-xs-max:              (@screen-sm-min - 1);
@screen-sm-max:              (@screen-md-min - 1);
@screen-md-max:              (@screen-lg-min - 1);


//== Grid system
//
//## Define your custom responsive grid.

//** Number of columns in the grid.
@grid-columns:              12;
//** Padding between columns. Gets divided in half for the left and right.
@grid-gutter-width:         30px;
// Navbar collapse
//** Point at which the navbar becomes uncollapsed.
@grid-float-breakpoint:     @screen-sm-min;
//** Point at which the navbar begins collapsing.
@grid-float-breakpoint-max: (@grid-float-breakpoint - 1);


//== Container sizes
//
//## Define the maximum width of \`.container\` for different screen sizes.

// Small screen / tablet
@container-tablet:             (720px + @grid-gutter-width);
//** For \`@screen-sm-min\` and up.
@container-sm:                 @container-tablet;

// Medium screen / desktop
@container-desktop:            (940px + @grid-gutter-width);
//** For \`@screen-md-min\` and up.
@container-md:                 @container-desktop;

// Large screen / wide desktop
@container-large-desktop:      (1140px + @grid-gutter-width);
//** For \`@screen-lg-min\` and up.
@container-lg:                 @container-large-desktop;


//== Navbar
//
//##

// Basics of a navbar
@navbar-height:                    50px;
@navbar-margin-bottom:             @line-height-computed;
@navbar-border-radius:             @border-radius-base;
@navbar-padding-horizontal:        floor((@grid-gutter-width / 2));
@navbar-padding-vertical:          ((@navbar-height - @line-height-computed) / 2);
@navbar-collapse-max-height:       340px;

@navbar-default-color:             #777;
@navbar-default-bg:                #f8f8f8;
@navbar-default-border:            darken(@navbar-default-bg, 6.5%);

// Navbar links
@navbar-default-link-color:                #777;
@navbar-default-link-hover-color:          #333;
@navbar-default-link-hover-bg:             transparent;
@navbar-default-link-active-color:         #555;
@navbar-default-link-active-bg:            darken(@navbar-default-bg, 6.5%);
@navbar-default-link-disabled-color:       #ccc;
@navbar-default-link-disabled-bg:          transparent;

// Navbar brand label
@navbar-default-brand-color:               @navbar-default-link-color;
@navbar-default-brand-hover-color:         darken(@navbar-default-brand-color, 10%);
@navbar-default-brand-hover-bg:            transparent;

// Navbar toggle
@navbar-default-toggle-hover-bg:           #ddd;
@navbar-default-toggle-icon-bar-bg:        #888;
@navbar-default-toggle-border-color:       #ddd;


//=== Inverted navbar
// Reset inverted navbar basics
@navbar-inverse-color:                      lighten(@gray-light, 15%);
@navbar-inverse-bg:                         #222;
@navbar-inverse-border:                     darken(@navbar-inverse-bg, 10%);

// Inverted navbar links
@navbar-inverse-link-color:                 lighten(@gray-light, 15%);
@navbar-inverse-link-hover-color:           #fff;
@navbar-inverse-link-hover-bg:              transparent;
@navbar-inverse-link-active-color:          @navbar-inverse-link-hover-color;
@navbar-inverse-link-active-bg:             darken(@navbar-inverse-bg, 10%);
@navbar-inverse-link-disabled-color:        #444;
@navbar-inverse-link-disabled-bg:           transparent;

// Inverted navbar brand label
@navbar-inverse-brand-color:                @navbar-inverse-link-color;
@navbar-inverse-brand-hover-color:          #fff;
@navbar-inverse-brand-hover-bg:             transparent;

// Inverted navbar toggle
@navbar-inverse-toggle-hover-bg:            #333;
@navbar-inverse-toggle-icon-bar-bg:         #fff;
@navbar-inverse-toggle-border-color:        #333;


//== Navs
//
//##

//=== Shared nav styles
@nav-link-padding:                          10px 15px;
@nav-link-hover-bg:                         @gray-lighter;

@nav-disabled-link-color:                   @gray-light;
@nav-disabled-link-hover-color:             @gray-light;

//== Tabs
@nav-tabs-border-color:                     #ddd;

@nav-tabs-link-hover-border-color:          @gray-lighter;

@nav-tabs-active-link-hover-bg:             @body-bg;
@nav-tabs-active-link-hover-color:          @gray;
@nav-tabs-active-link-hover-border-color:   #ddd;

@nav-tabs-justified-link-border-color:            #ddd;
@nav-tabs-justified-active-link-border-color:     @body-bg;

//== Pills
@nav-pills-border-radius:                   @border-radius-base;
@nav-pills-active-link-hover-bg:            @component-active-bg;
@nav-pills-active-link-hover-color:         @component-active-color;


//== Pagination
//
//##

@pagination-color:                     @link-color;
@pagination-bg:                        #fff;
@pagination-border:                    #ddd;

@pagination-hover-color:               @link-hover-color;
@pagination-hover-bg:                  @gray-lighter;
@pagination-hover-border:              #ddd;

@pagination-active-color:              #fff;
@pagination-active-bg:                 @brand-primary;
@pagination-active-border:             @brand-primary;

@pagination-disabled-color:            @gray-light;
@pagination-disabled-bg:               #fff;
@pagination-disabled-border:           #ddd;


//== Pager
//
//##

@pager-bg:                             @pagination-bg;
@pager-border:                         @pagination-border;
@pager-border-radius:                  15px;

@pager-hover-bg:                       @pagination-hover-bg;

@pager-active-bg:                      @pagination-active-bg;
@pager-active-color:                   @pagination-active-color;

@pager-disabled-color:                 @pagination-disabled-color;


//== Jumbotron
//
//##

@jumbotron-padding:              30px;
@jumbotron-color:                inherit;
@jumbotron-bg:                   @gray-lighter;
@jumbotron-heading-color:        inherit;
@jumbotron-font-size:            ceil((@font-size-base * 1.5));
@jumbotron-heading-font-size:    ceil((@font-size-base * 4.5));


//== Form states and alerts
//
//## Define colors for form feedback states and, by default, alerts.

@state-success-text:             #3c763d;
@state-success-bg:               #dff0d8;
@state-success-border:           darken(spin(@state-success-bg, -10), 5%);

@state-info-text:                #31708f;
@state-info-bg:                  #d9edf7;
@state-info-border:              darken(spin(@state-info-bg, -10), 7%);

@state-warning-text:             #8a6d3b;
@state-warning-bg:               #fcf8e3;
@state-warning-border:           darken(spin(@state-warning-bg, -10), 5%);

@state-danger-text:              #a94442;
@state-danger-bg:                #f2dede;
@state-danger-border:            darken(spin(@state-danger-bg, -10), 5%);


//== Tooltips
//
//##

//** Tooltip max width
@tooltip-max-width:           200px;
//** Tooltip text color
@tooltip-color:               #fff;
//** Tooltip background color
@tooltip-bg:                  #000;
@tooltip-opacity:             .9;

//** Tooltip arrow width
@tooltip-arrow-width:         5px;
//** Tooltip arrow color
@tooltip-arrow-color:         @tooltip-bg;


//== Popovers
//
//##

//** Popover body background color
@popover-bg:                          #fff;
//** Popover maximum width
@popover-max-width:                   276px;
//** Popover border color
@popover-border-color:                rgba(0,0,0,.2);
//** Popover fallback border color
@popover-fallback-border-color:       #ccc;

//** Popover title background color
@popover-title-bg:                    darken(@popover-bg, 3%);

//** Popover arrow width
@popover-arrow-width:                 10px;
//** Popover arrow color
@popover-arrow-color:                 @popover-bg;

//** Popover outer arrow width
@popover-arrow-outer-width:           (@popover-arrow-width + 1);
//** Popover outer arrow color
@popover-arrow-outer-color:           fadein(@popover-border-color, 5%);
//** Popover outer arrow fallback color
@popover-arrow-outer-fallback-color:  darken(@popover-fallback-border-color, 20%);


//== Labels
//
//##

//** Default label background color
@label-default-bg:            @gray-light;
//** Primary label background color
@label-primary-bg:            @brand-primary;
//** Success label background color
@label-success-bg:            @brand-success;
//** Info label background color
@label-info-bg:               @brand-info;
//** Warning label background color
@label-warning-bg:            @brand-warning;
//** Danger label background color
@label-danger-bg:             @brand-danger;

//** Default label text color
@label-color:                 #fff;
//** Default text color of a linked label
@label-link-hover-color:      #fff;


//== Modals
//
//##

//** Padding applied to the modal body
@modal-inner-padding:         15px;

//** Padding applied to the modal title
@modal-title-padding:         15px;
//** Modal title line-height
@modal-title-line-height:     @line-height-base;

//** Background color of modal content area
@modal-content-bg:                             #fff;
//** Modal content border color
@modal-content-border-color:                   rgba(0,0,0,.2);
//** Modal content border color **for IE8**
@modal-content-fallback-border-color:          #999;

//** Modal backdrop background color
@modal-backdrop-bg:           #000;
//** Modal backdrop opacity
@modal-backdrop-opacity:      .5;
//** Modal header border color
@modal-header-border-color:   #e5e5e5;
//** Modal footer border color
@modal-footer-border-color:   @modal-header-border-color;

@modal-lg:                    900px;
@modal-md:                    600px;
@modal-sm:                    300px;


//== Alerts
//
//## Define alert colors, border radius, and padding.

@alert-padding:               15px;
@alert-border-radius:         @border-radius-base;
@alert-link-font-weight:      bold;

@alert-success-bg:            @state-success-bg;
@alert-success-text:          @state-success-text;
@alert-success-border:        @state-success-border;

@alert-info-bg:               @state-info-bg;
@alert-info-text:             @state-info-text;
@alert-info-border:           @state-info-border;

@alert-warning-bg:            @state-warning-bg;
@alert-warning-text:          @state-warning-text;
@alert-warning-border:        @state-warning-border;

@alert-danger-bg:             @state-danger-bg;
@alert-danger-text:           @state-danger-text;
@alert-danger-border:         @state-danger-border;


//== Progress bars
//
//##

//** Background color of the whole progress component
@progress-bg:                 #f5f5f5;
//** Progress bar text color
@progress-bar-color:          #fff;
//** Variable for setting rounded corners on progress bar.
@progress-border-radius:      @border-radius-base;

//** Default progress bar color
@progress-bar-bg:             @brand-primary;
//** Success progress bar color
@progress-bar-success-bg:     @brand-success;
//** Warning progress bar color
@progress-bar-warning-bg:     @brand-warning;
//** Danger progress bar color
@progress-bar-danger-bg:      @brand-danger;
//** Info progress bar color
@progress-bar-info-bg:        @brand-info;


//== List group
//
//##

//** Background color on \`.list-group-item\`
@list-group-bg:                 #fff;
//** \`.list-group-item\` border color
@list-group-border:             #ddd;
//** List group border radius
@list-group-border-radius:      @border-radius-base;

//** Background color of single list items on hover
@list-group-hover-bg:           #f5f5f5;
//** Text color of active list items
@list-group-active-color:       @component-active-color;
//** Background color of active list items
@list-group-active-bg:          @component-active-bg;
//** Border color of active list elements
@list-group-active-border:      @list-group-active-bg;
//** Text color for content within active list items
@list-group-active-text-color:  lighten(@list-group-active-bg, 40%);

//** Text color of disabled list items
@list-group-disabled-color:      @gray-light;
//** Background color of disabled list items
@list-group-disabled-bg:         @gray-lighter;
//** Text color for content within disabled list items
@list-group-disabled-text-color: @list-group-disabled-color;

@list-group-link-color:         #555;
@list-group-link-hover-color:   @list-group-link-color;
@list-group-link-heading-color: #333;


//== Panels
//
//##

@panel-bg:                    #fff;
@panel-body-padding:          15px;
@panel-heading-padding:       10px 15px;
@panel-footer-padding:        @panel-heading-padding;
@panel-border-radius:         @border-radius-base;

//** Border color for elements within panels
@panel-inner-border:          #ddd;
@panel-footer-bg:             #f5f5f5;

@panel-default-text:          @gray-dark;
@panel-default-border:        #ddd;
@panel-default-heading-bg:    #f5f5f5;

@panel-primary-text:          #fff;
@panel-primary-border:        @brand-primary;
@panel-primary-heading-bg:    @brand-primary;

@panel-success-text:          @state-success-text;
@panel-success-border:        @state-success-border;
@panel-success-heading-bg:    @state-success-bg;

@panel-info-text:             @state-info-text;
@panel-info-border:           @state-info-border;
@panel-info-heading-bg:       @state-info-bg;

@panel-warning-text:          @state-warning-text;
@panel-warning-border:        @state-warning-border;
@panel-warning-heading-bg:    @state-warning-bg;

@panel-danger-text:           @state-danger-text;
@panel-danger-border:         @state-danger-border;
@panel-danger-heading-bg:     @state-danger-bg;


//== Thumbnails
//
//##

//** Padding around the thumbnail image
@thumbnail-padding:           4px;
//** Thumbnail background color
@thumbnail-bg:                @body-bg;
//** Thumbnail border color
@thumbnail-border:            #ddd;
//** Thumbnail border radius
@thumbnail-border-radius:     @border-radius-base;

//** Custom text color for thumbnail captions
@thumbnail-caption-color:     @text-color;
//** Padding around the thumbnail caption
@thumbnail-caption-padding:   9px;


//== Wells
//
//##

@well-bg:                     #f5f5f5;
@well-border:                 darken(@well-bg, 7%);


//== Badges
//
//##

@badge-color:                 #fff;
//** Linked badge text color on hover
@badge-link-hover-color:      #fff;
@badge-bg:                    @gray-light;

//** Badge text color in active nav link
@badge-active-color:          @link-color;
//** Badge background color in active nav link
@badge-active-bg:             #fff;

@badge-font-weight:           bold;
@badge-line-height:           1;
@badge-border-radius:         10px;


//== Breadcrumbs
//
//##

@breadcrumb-padding-vertical:   8px;
@breadcrumb-padding-horizontal: 15px;
//** Breadcrumb background color
@breadcrumb-bg:                 #f5f5f5;
//** Breadcrumb text color
@breadcrumb-color:              #ccc;
//** Text color of current page in the breadcrumb
@breadcrumb-active-color:       @gray-light;
//** Textual separator for between breadcrumb elements
@breadcrumb-separator:          "/";


//== Carousel
//
//##

@carousel-text-shadow:                        0 1px 2px rgba(0,0,0,.6);

@carousel-control-color:                      #fff;
@carousel-control-width:                      15%;
@carousel-control-opacity:                    .5;
@carousel-control-font-size:                  20px;

@carousel-indicator-active-bg:                #fff;
@carousel-indicator-border-color:             #fff;

@carousel-caption-color:                      #fff;


//== Close
//
//##

@close-font-weight:           bold;
@close-color:                 #000;
@close-text-shadow:           0 1px 0 #fff;


//== Code
//
//##

@code-color:                  #c7254e;
@code-bg:                     #f9f2f4;

@kbd-color:                   #fff;
@kbd-bg:                      #333;

@pre-bg:                      #f5f5f5;
@pre-color:                   @gray-dark;
@pre-border-color:            #ccc;
@pre-scrollable-max-height:   340px;


//== Type
//
//##

//** Horizontal offset for forms and lists.
@component-offset-horizontal: 180px;
//** Text muted color
@text-muted:                  @gray-light;
//** Abbreviations and acronyms border color
@abbr-border-color:           @gray-light;
//** Headings small color
@headings-small-color:        @gray-light;
//** Blockquote small color
@blockquote-small-color:      @gray-light;
//** Blockquote font size
@blockquote-font-size:        (@font-size-base * 1.25);
//** Blockquote border color
@blockquote-border-color:     @gray-lighter;
//** Page header border color
@page-header-border-color:    @gray-lighter;
//** Width of horizontal description list titles
@dl-horizontal-offset:        @component-offset-horizontal;
//** Point at which .dl-horizontal becomes horizontal
@dl-horizontal-breakpoint:    @grid-float-breakpoint;
//** Horizontal line color.
@hr-border:                   @gray-lighter;
`,"assets/less/mixins.less":`@import 'lib/bootstrap/mixins.less';

.make-social-link(@color){
    color: @color;

    &:hover, &:focus {
        text-decoration: none;
        color: darken(@color, 10%);
    }
}
`,"assets/less/print.less":`@media print {
    a[href]:after {
        content: none !important;
    }

    .profile-card {
        text-align: center;
    }

    .profile-pic {
        display: inline-block;
        vertical-align: middle;
        img {
            border-radius: 0;
        }
    }

    .name-and-profession {
        display: inline-block;
        vertical-align: middle;
        margin-left: 15px;
    }

    .contact-details {
        .detail {
            .make-xs-column(3);
            padding: 0;
        }
    }

    .floating-nav, .floating-nav-trigger {
        display: none;
    }

    .pagebreak {
        page-break-before: always;
    }
}`,"assets/less/sections/awards.less":`@import "../variables";
@import "../mixins";`,"assets/less/sections/education.less":`@import "../variables";
@import "../mixins";`,"assets/less/sections/interests.less":`@import "../variables";
@import "../mixins";`,"assets/less/sections/projects_experience.less":`@import "../variables";
@import "../mixins";`,"assets/less/sections/publications.less":`@import "../variables";
@import "../mixins";`,"assets/less/sections/references.less":`@import "../variables";
@import "../mixins";

.quote {
    @media (max-width: @screen-tablet) {
        font-size: inherit;
    }
}`,"assets/less/sections/skills.less":`@import "../variables";
@import "../mixins";


.card-skills {
    position: relative;
}

.skill-level {
    border-radius: 3px;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    width: 10px;
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.2);
    .skill-progress {
        position: absolute;
        border-radius: 3px;
        bottom: 0;
        width: 100%;
        -webkit-transition: height 1s ease;

        &.beginner {
            height: 50%; //Because, well begun is half done ;-)
            background: @skill-beginner-color;
        }

        &.intermediate {
            height: 70%;
            background: @skill-intermediate-color;
        }

        &.advanced {
            height: 80%;
            background: @skill-advanced-color;
        }

        &.master {
            height: 95%;
            background: @skill-master-color;
        }
    }
}

.skill-info {
    margin-left: 15px;
    @media (max-width: @screen-phone) {
        margin-left: 20px;
    }
}
`,"assets/less/sections/volunteer_work.less":`@import "../variables";
@import "../mixins";`,"assets/less/sections/work_experience.less":`@import "../variables";
@import "../mixins";`,"assets/less/theme.less":`@import (inline) "../icomoon/style.css";

// All the variables utilized across files go here
@import "variables";

// All the mixins go here
@import "mixins";

// Utility classes go here
@import "utilities";

// All the base styles go here
@import "base.less"; // PUN intended ;-)

// Floating Nav Styles
@import "floating-nav.less";

// All the styles related to the info card seen on the left goes here
@import "info_card_styles";

// Styles related to each section on the background card seen on the right
@import "sections/work_experience";
@import "sections/skills";
@import "sections/education";
@import "sections/awards";
@import "sections/volunteer_work";
@import "sections/publications";
@import "sections/interests";
@import "sections/references";

// All overriding styles go here
@import 'vendor-overrides';

// Print-related styles
@import "print";
`,"assets/less/utilities.less":`.relative {
    position: relative;
}

.clear-margin {
    margin: 0;
}

.space-top {
    margin-top: 10px;
}

.space-right {
    margin-right: 10px;
}

.space-bottom {
    margin-bottom: 10px;
}

.mr-5 {
    margin-right: 5px;
}

.mr-10 {
    margin-right: 10px;
}

.ml-5 {
    margin-left: 5px;
}

.labels {
    line-height: 2;
}

.label-keyword {
    display: inline-block;
    background: @theme-label-bg;
    color: white;
    font-size: 0.9em;
    padding: 5px;
    border: 1px solid @theme-label-border-color;
    margin-right: 5px;

    &:last-child {
        margin-right: 0;
    }
}

.link-disguise {
    color: inherit;

    &:hover {
        color: inherit
    }
}

.clear-margin {
    margin: 0;
}

.clear-margin-sm {
    @media (max-width: @screen-desktop) {
        margin-bottom: 0;
    }
}

.fs-lg { // fs => font-size
    font-size: 1.33333333em;
    line-height: .75em;
    vertical-align: -15%;
}

.fs-2x {
    font-size: 2em;
}

.fs-3x {
    font-size: 3em;
}

.fs-4x {
    font-size: 4em;
}

.btn-circle-sm {
    @width: 28px;

    width: @width;
    height: @width;
    line-height: @width;
    border-radius: 50%;
    text-align: center;
    padding: 0;
    outline: none !important;
}
`,"assets/less/variables.less":`@import "lib/bootstrap/variables.less";
@import "../icomoon/variables.less";

@theme-bg: #f0f0f0;
@theme-font-color: #333;
@theme-red: #e74c3c;
@theme-blue: #428bca;
@theme-yellow: #f1c40f;
@theme-green: #5cb85c;

//Icon styles
@icon-color: #707070;

// card variables
@card-bg: white;
@card-border-color: #e6e6e6;
@card-border-radius: 3px;

// Social variables;
@github-color: #454545;
@twitter-color: #33ccff;
@soundcloud-color: rgb(232, 130, 45);
@rss-feed-color: #f36f24;
@linkedin-color: #007bb6;
@youtube-color: #dd4b39;
@skype-color: #12A5F4;
@googleplus-color: #dd4b39;
@tumblr-color: #2d4661;
@instagram-color: #e4405f;
@gratipay-color: #630;
@stackoverflow-color: rgb(142, 142, 146);
@stackexchange-color: rgb(98, 176, 223);
@lastfm-color: #d12127;
@pinterest-color: rgb(189, 9, 31);
@vimeo-color: rgb(23, 179, 232);
@behance-color: rgb(44, 152, 207);
@codepen-color: rgb(28, 28, 28);
@foursquare-color: rgb(250, 71, 120);
@reddit-color: rgb(84, 84, 84);
@spotify-color: rgb(172, 210, 0);
@dribbble-color: rgb(206, 54, 111);
@facebook-color: rgb(75, 109, 170);
@angellist-color: black;
@bitbucket-color: rgb(32, 80, 129);
@hackernews-color: rgb(255, 102, 0);
@exercism-color: #d81d4e;
@blogger-color: #FF9234;
@medium-color: #00AB6C;
@flickr-color: black;
@telegram-color: #3BABDD;
@gitlab-color: #E14328;

// Skill related colors
@skill-beginner-color: @theme-red;
@skill-intermediate-color: @theme-yellow;
@skill-advanced-color: @theme-blue;
@skill-master-color: @theme-green;

// Label styles
@theme-label-border-color: darken(@theme-label-bg, 20%);
@theme-label-bg: lighten(@theme-blue, 15%);
`,"assets/less/vendor-overrides.less":`.icon-meetup .path2:before {
  margin-left: 0;
}
`,"index.pug":`|<!DOCTYPE html>
html(lang="en")
  head
    meta(charset="utf-8")
    meta(http-equiv="X-UA-Compatible", content="IE=edge")
    meta(name="viewport", content="width=device-width, initial-scale=1")
    title= resume.basics.name
    include pug/stylesheets.pug

  body(itemscope, itemtype="http://schema.org/Person")
    .container-fluid
      .row.main.clearfix
        include pug/floating-nav.pug
        include pug/profile-card.pug
        include pug/background-card.pug

    include pug/scripts.pug
`,"package.json":`{
  "name": "jsonresume-theme-elegant-pdf",
  "version": "1.0.0",
  "main": "index.js",
  "description": "Elegant theme for jsonresume - optimized for printing to pdf",
  "scripts": {
    "watch": "yarn grunt watch",
    "serve": "yarn grunt exec:run_server",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/marclundgren/jsonresume-theme-elegant-pdf.git"
  },
  "keywords": [
    "jsonresume",
    "theme",
    "elegant",
    "pdf"
  ],
  "author": "Marc Lundgren <marcrlundgren@gmail.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/marclundgren/jsonresume-theme-elegant-pdf/issues"
  },
  "homepage": "https://github.com/marclundgren/jsonresume-theme-elegant-pdf",
  "dependencies": {
    "gravatar": "^1.0.6",
    "handlebars": ">=4.0.14",
    "jsonresume-themeutils": "^1.4.3",
    "markdown-it": "^6.0.1",
    "markdown-it-abbr": "^1.0.3",
    "moment": "^2.22.2",
    "pug": "^2.0.4",
    "resume-schema": "0.1.3",
    "tarball-extract": "0.0.3",
    "sshpk": ">=1.13.2",
    "underscore": "^1.6.0"
  },
  "devDependencies": {
    "grunt": "^1.0.4",
    "grunt-contrib-clean": "0.5.x",
    "grunt-contrib-copy": "0.4.x",
    "grunt-contrib-less": "^2.0.0",
    "grunt-contrib-watch": "^1.1.0",
    "grunt-exec": "^0.4.6",
    "less": "^3.8.1"
  }
}
`,"pug/background/about.pug":`unless _.isEmpty(resume.basics.summary)
  .detail#about
    .icon
      i.fs-lg.icon-board
      span.mobile-title About
    .info
      h4.title.text-uppercase About

      .card.card-nested
        .content.mop-wrapper(itemprop="description")!= resume.basics.summary
`,"pug/background/awards.pug":`unless _.isEmpty(resume.awards)
  .detail#awards
    .icon
      i.fs-lg.icon-trophy
      span.mobile-title Awards

    .info
      h4.title.text-uppercase Awards

      .content
        ul.list-unstyled.clear-margin
          each award in resume.awards
            li.card.card-nested
              .content
                p.clear-margin(itemprop="award")
                  strong= award.title + " "
                  |#{award.awarder}

                p.text-muted
                  small
                    |Awarded on: #{award.date}

                .mop-wrapper!= award.summary
`,"pug/background/education.pug":`unless _.isEmpty(resume.education)
  .detail#education
    .icon
      i.fs-lg.icon-graduation-cap
      span.mobile-title Education

    .info
      h4.title.text-uppercase Education

      .content
        ul.list-unstyled.clear-margin
          each education_info in resume.education
            li.card.card-nested
              .content
                p.clear-margin.relative
                  if !education_info.endDate
                    i.icon-circle.current-event(
                      rel="tooltip",
                      title="Currently Pursuing",
                      data-placement="left"
                    )

                  strong
                    |#{education_info.area}, #{education_info.studyType},&nbsp;
                  |#{education_info.institution}

                p.text-muted(class=!education_info.gpa && _.isEmpty(education_info.courses) ? 'clear-margin' : '')
                  small
                    |#{education_info.startDate} - #{education_info.endDate || 'Present'}
                i= education_info.gpa

                unless _.isEmpty(education_info.courses)
                  .space-top.labels
                    each course in education_info.courses
                      span.label.label-keyword= course
`,"pug/background/interests.pug":`unless _.isEmpty(resume.interests)
  .detail#interests
    .icon
      i.fs-lg.icon-heart
      span.mobile-title Interests

    .info
      h4.title.text-uppercase Interests

      .content
        ul.list-unstyled.clear-margin
          each interest in resume.interests
            li.card.card-nested
              p
                strong= interest.name

              unless _.isEmpty(interest.keywords)
                .space-top.labels
                  each keyword in interest.keywords
                    span.label.label-keyword= keyword
`,"pug/background/projects-experience.pug":`unless _.isEmpty(resume.projects)
  .detail#projects-experience
    .icon
      i.fs-lg.icon-code
      span.mobile-title Projects Experience

    .info
      h4.title.text-uppercase Projects Experience

      ul.list-unstyled.clear-margin
        each project in resume.projects
          li.card.card-nested.clearfix
            .content
              p.clear-margin.relative
                if !project.endDate
                  i.icon-circle.current-event(
                    rel="tooltip",
                    title="Currently Working",
                    data-placement="left"
                  )
                strong=project.name
                |,&nbsp;
                if project.website
                  a(href=project.website, target="_blank")= project.company
                else
                  |#{project.company}

              p.text-muted
                small
                  span.space-right
                    |#{project.startDate} - #{project.endDate || 'Present'}

                  if project.duration
                    span
                      i.icon-clock.mr-5
                      |#{project.duration}

              .mop-wrapper.space-bottom!= project.summary

              unless _.isEmpty(project.highlights)
                ul
                  each highlight in project.highlights
                    li.mop-wrapper!= highlight
`,"pug/background/publications.pug":`
unless _.isEmpty(resume.publications)
  .detail#publications
    .icon
      i.fs-lg.icon-newspaper
      span.mobile-title Publications

    .info
      h4.title.text-uppercase Publications

      .content
        ul.list-unstyled.clear-margin
          each publication in resume.publications
            li.card.card-nested
              .content
                p.clear-margin
                  strong
                    if publication.website
                      a(href=publication.website, target="_blank")= publication.name
                      |&nbsp;,&nbsp;
                    else
                      |#{publication.name + ', '}
                  |#{publication.publisher}

                p.text-muted
                  small= 'Published on: ' + publication.releaseDate

                .mop-wrapper!= publication.summary
`,"pug/background/references.pug":`unless _.isEmpty(resume.references)
  .detail#references
    .icon
      i.fs-lg.icon-thumbs-up
      span.mobile-title References

    .info
      h4.title.text-uppercase References

      .content
        ul.list-unstyled.clear-margin
          each reference_info in resume.references
            li.card.card-nested
              if reference_info.website
                a(href=reference_info.website, target="_blank")= reference_info.name
              else
                |#{reference_info.name}

              blockquote.quote
                .mop-wrapper!= reference_info.reference
`,"pug/background/skills.pug":`unless _.isEmpty(resume.skills)
  .detail#skills
    .icon
      i.fs-lg.icon-tools
      span.mobile-title Skills

    .info
      h4.title.text-uppercase Skills

      .content
        ul.list-unstyled.clear-margin
          each skill in resume.skills
            li.card.card-nested.card-skills
              if skill.display_progress_bar
                .skill-level(data-toggle="tooltip", title=skill.level, data-placement="left")
                  .skill-progress(class=skill.skill_class)

              .skill-info
                strong= skill.name

                unless _.isEmpty(skill.keywords)
                  .space-top.labels
                    each keyword in skill.keywords
                      span.label.label-keyword= keyword
`,"pug/background/volunteer-work.pug":`unless _.isEmpty(resume.volunteer)
  .detail#volunteer-work
    .icon
      i.fs-lg.icon-child
      span.mobile-title Volunteer Work

    .info
      h4.title.text-uppercase Volunteer Work

      .content
        ul.list-unstyled.clear-margin
          each volunteer_info in resume.volunteer
            li.card.card-nested
              .content
                p.clear-margin.relative
                  if !volunteer_info.endDate
                    i.icon-circle.current-event(
                      rel="tooltip",
                      title="Currently Volunteering",
                      data-placement="left"
                    )

                  strong= volunteer_info.position + ', '
                  if volunteer_info.website
                    a(href=volunteer_info.website, target="_blank")= volunteer_info.organization
                  else
                    |#{volunteer_info.organization}

                p.text-muted
                  small
                    |#{volunteer_info.startDate} - #{volunteer_info.endDate || 'Present'}

                .mop-wrapper!= volunteer_info.summary

                unless _.isEmpty(volunteer_info.highlights)
                  ul
                    each highlight in volunteer_info.highlights
                      li.mop-wrapper!= highlight
`,"pug/background/work-experience.pug":`unless _.isEmpty(resume.work)
  .detail#work-experience
    .icon
      i.fs-lg.icon-office
      span.mobile-title Work Experience

    .info
      h4.title.text-uppercase Work Experience

      ul.list-unstyled.clear-margin
        each experience in resume.work
          li.card.card-nested.clearfix
            .content
              p.clear-margin.relative
                if !experience.endDate
                  i.icon-circle.current-event(
                    rel="tooltip",
                    title="Currently Working",
                    data-placement="left"
                  )
                strong= experience.position
                |,&nbsp;
                if experience.website
                  a(href=experience.website, target="_blank")= experience.company
                else
                  |#{experience.company}

              p.text-muted
                small
                  span.space-right
                    |#{experience.startDate} - #{experience.endDate || 'Present'}

                  if experience.duration
                    span
                      i.icon-clock.mr-5
                      |#{experience.duration}

              .mop-wrapper.space-bottom!= experience.summary

              unless _.isEmpty(experience.highlights)
                ul
                  each highlight in experience.highlights
                    li.mop-wrapper!= highlight
`,"pug/background-card.pug":`section.col-md-9.card-wrapper.pull-right
  .card.background-card
    h4.text-uppercase Background
    hr

    .background-details
      include background/about.pug
      include background/work-experience.pug
      include background/projects-experience.pug
      include background/skills.pug
      include background/education.pug
      include background/awards.pug
      include background/volunteer-work.pug
      include background/publications.pug
      include background/interests.pug
      include background/references.pug
`,"pug/floating-nav.pug":`mixin make_nav_link(nav_item)
  li
    a(href="#" + nav_item.target)
      i.mr-10(class='icon-' + nav_item.icon)
      | #{nav_item.label}

a(href="#").js-floating-nav-trigger.floating-nav-trigger
  i.icon-bars
  span.close-icon &times;

nav.floating-nav.js-floating-nav
  ul.list-unstyled
    each nav_item in floating_nav_items
      +make_nav_link(nav_item)
`,"pug/profile-card.pug":`mixin profile_card_detail(icon, info, itemprop, icon_title)
  .detail
    span.icon(title=icon_title)
      i.icon.fs-lg(class=icon)
    span.info(itemprop=itemprop)
      if block
        block
      else
        |#{info}

mixin render_links(profiles)
  each profile in profiles
    a.fs-2x.social-link(
      href=profile.url,
      target="_blank",
      data-toggle="tooltip",
      title= resume.basics.name + " on " + profile.network,
      class="link-" + profile.label + " icon-" + profile.label)
      if profile.network.toLowerCase() == 'meetup'
        span.path2
        span.path3
      if profile.network.toLowerCase() == 'gitlab'
        span.path1
        span.path2
        span.path3
        span.path4
        span.path5
        span.path6
        span.path7
        span.path8

section.col-md-3.card-wrapper.profile-card-wrapper.affix
  .card.profile-card
    span.profile-pic-container
      .profile-pic
        img.media-object.img-circle.center-block(
          data-src="holder.js/100x100",
          alt=resume.basics.name,
          src=resume.basics.picture,
          itemprop="image")

      .name-and-profession.text-center
        h3(itemprop="name"): b= resume.basics.name
        h5.text-muted(itemprop="jobTitle")= resume.basics.label

    hr

    .contact-details.clearfix
      if resume.basics.computed_location
        +profile_card_detail("icon-location", resume.basics.computed_location)
      if resume.basics.phone
        +profile_card_detail("icon-phone", resume.basics.phone, "telephone")
      if resume.basics.email
        +profile_card_detail("icon-mail")
          a.link-disguise(href="mailto:" + resume.basics.email, itemprop="email")= resume.basics.email
      if resume.basics.website
        +profile_card_detail("icon-link")
          a(href=resume.basics.website, target="_blank")= resume.basics.website
      if resume.basics.languages
        +profile_card_detail('icon-language', resume.basics.languages, null, 'Languages I speak')

    hr

    .social-links.text-center
      div
        +render_links(resume.basics.top_five_profiles)

        if resume.basics.remaining_profiles.length > 0
          button.btn.btn-default.btn-sm.btn-circle-sm.pull-right.js-profiles-collapse(
            data-toggle="collapse",
            data-target="#remaining-profiles")
            i.icon-chevron-down.fs-lg

          #remaining-profiles.collapse.text-left
            +render_links(resume.basics.remaining_profiles)
`,"pug/scripts.pug":`script(src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js")
script(src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js")

script.
  $(function () {
    var toggleFloatingMenu = function() {
      $( '.js-floating-nav' ).toggleClass( 'is-visible' );
      $( '.js-floating-nav-trigger' ).toggleClass( 'is-open' );
    };

    $( ".background-card" ).css( "min-height", window.screen.availHeight + "px" );
    $( "[data-toggle=tooltip]" ).tooltip();
    $( '.js-floating-nav-trigger' ).on( 'click', function(e) {
      e.preventDefault();
      toggleFloatingMenu();
    });
    $( '.js-floating-nav a' ).on( 'click', toggleFloatingMenu );

    $("#remaining-profiles").on('show.bs.collapse', function() {
      $( '.js-profiles-collapse > i' )
        .removeClass( 'icon-chevron-down' )
        .addClass( 'icon-chevron-up' );
    });

    $("#remaining-profiles").on('hidden.bs.collapse', function() {
      $( '.js-profiles-collapse > i' )
        .removeClass( 'icon-chevron-up' )
        .addClass( 'icon-chevron-down' );
    });
  });

script.
  WebFontConfig = {
    google: { families: [ 'Lato:300,400,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
`,"pug/stylesheets.pug":`link(rel="stylesheet", href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css")
style!= css
`},pt={"assets/css":["theme.css"],"assets/icomoon/demo-files":["demo.css","demo.js"],"assets/icomoon/fonts":["icomoon.eot","icomoon.svg","icomoon.ttf","icomoon.woff"],"assets/icomoon":["Read Me.txt","demo-files","demo.html","fonts","selection.json","style.css","style.less","variables.less"],"assets/less/lib/bootstrap/mixins":["alerts.less","background-variant.less","border-radius.less","buttons.less","center-block.less","clearfix.less","forms.less","gradients.less","grid-framework.less","grid.less","hide-text.less","image.less","labels.less","list-group.less","nav-divider.less","nav-vertical-align.less","opacity.less","pagination.less","panels.less","progress-bar.less","reset-filter.less","reset-text.less","resize.less","responsive-visibility.less","size.less","tab-focus.less","table-row.less","text-emphasis.less","text-overflow.less","vendor-prefixes.less"],"assets/less/lib/bootstrap":["mixins","mixins.less","variables.less"],"assets/less/lib":["bootstrap"],"assets/less/sections":["awards.less","education.less","interests.less","projects_experience.less","publications.less","references.less","skills.less","volunteer_work.less","work_experience.less"],"assets/less":["base.less","floating-nav.less","icon.less","info_card_styles.less","lib","mixins.less","print.less","sections","theme.less","utilities.less","variables.less","vendor-overrides.less"],assets:["css","icomoon","less"],"pug/background":["about.pug","awards.pug","education.pug","interests.pug","projects-experience.pug","publications.pug","references.pug","skills.pug","volunteer-work.pug","work-experience.pug"],pug:["background","background-card.pug","floating-nav.pug","profile-card.pug","scripts.pug","stylesheets.pug"],screenshots:["profile.png"],tpl:["index.js"],".":["Gruntfile.js","README.md","assets","index.js","index.pug","moment-precise-range.js","package.json","pug","render.js","screenshots","serve.js","tpl"]};ca=function(a,e){var o=la(a);return o!==void 0?o:""},da=function(a,e){var o=r1(a);return o===void 0&&(o=[]),e&&e.withFileTypes?o.map(function(s){var t=i1(a)+"/"+s,r=r1(t)!==void 0;return{name:s,isFile:function(){return!r},isDirectory:function(){return r}}}):o},pa=function(a){return la(a)!==void 0||r1(a)!==void 0},fa=function(){},ga=function(){},a1=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},ha=a1,ma=function(){},ba=function(){},va=function(){return{pipe:function(a){return a},on:function(){return this}}},ka=function(){return{write:function(){},end:function(){},on:function(){return this}}},Fl={readFileSync:ca,readdirSync:da,existsSync:pa,writeFileSync:fa,mkdirSync:ga,statSync:a1,lstatSync:ha,unlinkSync:ma,rmdirSync:ba,createReadStream:va,createWriteStream:ka}});var Ut=$((u1,l1)=>{M();(function(a,e){typeof u1=="object"&&typeof l1<"u"?l1.exports=e():typeof define=="function"&&define.amd?define("underscore",e):(a=typeof globalThis<"u"?globalThis:a||self,(function(){var o=a._,s=a._=e();s.noConflict=function(){return a._=o,s}})())})(u1,(function(){var a="1.13.8",e=typeof self=="object"&&self.self===self&&self||typeof globalThis=="object"&&globalThis.global===globalThis&&globalThis||Function("return this")()||{},o=Array.prototype,s=Object.prototype,t=typeof Symbol<"u"?Symbol.prototype:null,r=o.push,g=o.slice,p=s.toString,h=s.hasOwnProperty,m=typeof ArrayBuffer<"u",q=typeof DataView<"u",S=Array.isArray,F=Object.keys,D=Object.create,C=m&&ArrayBuffer.isView,b=isNaN,R=isFinite,P=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],O=Math.pow(2,53)-1;function y(c,d){return d=d==null?c.length-1:+d,function(){for(var v=Math.max(arguments.length-d,0),k=Array(v),A=0;A<v;A++)k[A]=arguments[A+d];switch(d){case 0:return c.call(this,k);case 1:return c.call(this,arguments[0],k);case 2:return c.call(this,arguments[0],arguments[1],k)}var w=Array(d+1);for(A=0;A<d;A++)w[A]=arguments[A];return w[d]=k,c.apply(this,w)}}function z(c){var d=typeof c;return d==="function"||d==="object"&&!!c}function E(c){return c===null}function J(c){return c===void 0}function Q(c){return c===!0||c===!1||p.call(c)==="[object Boolean]"}function pe(c){return!!(c&&c.nodeType===1)}function re(c){var d="[object "+c+"]";return function(v){return p.call(v)===d}}var N=re("String"),j=re("Number"),L=re("Date"),Y=re("RegExp"),Ge=re("Error"),In=re("Symbol"),kn=re("ArrayBuffer"),Se=re("Function"),yt=e.document&&e.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof yt!="function"&&(Se=function(c){return typeof c=="function"||!1});var xe=Se,Qn=re("Object"),sn=q&&(!/\[native code\]/.test(String(DataView))||Qn(new DataView(new ArrayBuffer(8)))),X=typeof Map<"u"&&Qn(new Map),ai=re("DataView");function si(c){return c!=null&&xe(c.getInt8)&&kn(c.buffer)}var on=sn?si:ai,Ze=S||re("Array");function Xe(c,d){return c!=null&&h.call(c,d)}var Ft=re("Arguments");(function(){Ft(arguments)||(Ft=function(c){return Xe(c,"callee")})})();var wt=Ft;function oi(c){return!In(c)&&R(c)&&!isNaN(parseFloat(c))}function Kt(c){return j(c)&&b(c)}function er(c){return function(){return c}}function nr(c){return function(d){var v=c(d);return typeof v=="number"&&v>=0&&v<=O}}function tr(c){return function(d){return d?.[c]}}var Kn=tr("byteLength"),ui=nr(Kn),rr=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function Me(c){return C?C(c)&&!on(c):ui(c)&&rr.test(p.call(c))}var et=m?Me:er(!1),Fe=tr("length");function li(c){for(var d={},v=c.length,k=0;k<v;++k)d[c[k]]=!0;return{contains:function(A){return d[A]===!0},push:function(A){return d[A]=!0,c.push(A)}}}function Ct(c,d){d=li(d);var v=T.length,k=c.constructor,A=xe(k)&&k.prototype||s,w="constructor";for(Xe(c,w)&&!d.contains(w)&&d.push(w);v--;)w=T[v],w in c&&c[w]!==A[w]&&!d.contains(w)&&d.push(w)}function ue(c){if(!z(c))return[];if(F)return F(c);var d=[];for(var v in c)Xe(c,v)&&d.push(v);return P&&Ct(c,d),d}function ir(c){if(c==null)return!0;var d=Fe(c);return typeof d=="number"&&(Ze(c)||N(c)||wt(c))?d===0:Fe(ue(c))===0}function nt(c,d){var v=ue(d),k=v.length;if(c==null)return!k;for(var A=Object(c),w=0;w<k;w++){var B=v[w];if(d[B]!==A[B]||!(B in A))return!1}return!0}function ie(c){if(c instanceof ie)return c;if(!(this instanceof ie))return new ie(c);this._wrapped=c}ie.VERSION=a,ie.prototype.value=function(){return this._wrapped},ie.prototype.valueOf=ie.prototype.toJSON=ie.prototype.value,ie.prototype.toString=function(){return String(this._wrapped)};function fe(c){return new Uint8Array(c.buffer||c,c.byteOffset||0,Kn(c))}var _t="[object DataView]";function ar(c,d){for(var v=[{a:c,b:d}],k=[],A=[];v.length;){var w=v.pop();if(w===!0){k.pop(),A.pop();continue}if(c=w.a,d=w.b,c===d){if(c!==0||1/c===1/d)continue;return!1}if(c==null||d==null)return!1;if(c!==c){if(d!==d)continue;return!1}var B=typeof c;if(B!=="function"&&B!=="object"&&typeof d!="object")return!1;c instanceof ie&&(c=c._wrapped),d instanceof ie&&(d=d._wrapped);var H=p.call(c);if(H!==p.call(d))return!1;if(sn&&H=="[object Object]"&&on(c)){if(!on(d))return!1;H=_t}switch(H){case"[object RegExp]":case"[object String]":if(""+c==""+d)continue;return!1;case"[object Number]":v.push({a:+c,b:+d});continue;case"[object Date]":case"[object Boolean]":if(+c==+d)continue;return!1;case"[object Symbol]":if(t.valueOf.call(c)===t.valueOf.call(d))continue;return!1;case"[object ArrayBuffer]":case _t:v.push({a:fe(c),b:fe(d)});continue}var ee=H==="[object Array]";if(!ee&&et(c)){var ne=Kn(c);if(ne!==Kn(d))return!1;if(c.buffer===d.buffer&&c.byteOffset===d.byteOffset)continue;ee=!0}if(!ee){if(typeof c!="object"||typeof d!="object")return!1;var ke=c.constructor,qe=d.constructor;if(ke!==qe&&!(xe(ke)&&ke instanceof ke&&xe(qe)&&qe instanceof qe)&&"constructor"in c&&"constructor"in d)return!1}for(var Ce=k.length;Ce--;)if(k[Ce]===c){if(A[Ce]===d)break;return!1}if(!(Ce>=0))if(k.push(c),A.push(d),v.push(!0),ee){if(Ce=c.length,Ce!==d.length)return!1;for(;Ce--;)v.push({a:c[Ce],b:d[Ce]})}else{var Ue=ue(c),ot;if(Ce=Ue.length,ue(d).length!==Ce)return!1;for(;Ce--;){if(ot=Ue[Ce],!Xe(d,ot))return!1;v.push({a:c[ot],b:d[ot]})}}}return!0}function Je(c){if(!z(c))return[];var d=[];for(var v in c)d.push(v);return P&&Ct(c,d),d}function Tn(c){var d=Fe(c);return function(v){if(v==null)return!1;var k=Je(v);if(Fe(k))return!1;for(var A=0;A<d;A++)if(!xe(v[c[A]]))return!1;return c!==or||!xe(v[xn])}}var xn="forEach",un="has",yn=["clear","delete"],sr=["get",un,"set"],tt=yn.concat(xn,sr),or=yn.concat(sr),Rn=["add"].concat(yn,xn,un),Fn=X?Tn(tt):re("Map"),Dt=X?Tn(or):re("WeakMap"),rt=X?Tn(Rn):re("Set"),G=re("WeakSet");function wn(c){for(var d=ue(c),v=d.length,k=Array(v),A=0;A<v;A++)k[A]=c[d[A]];return k}function ci(c){for(var d=ue(c),v=d.length,k=Array(v),A=0;A<v;A++)k[A]=[d[A],c[d[A]]];return k}function Ie(c){for(var d={},v=ue(c),k=0,A=v.length;k<A;k++)d[c[v[k]]]=v[k];return d}function ze(c){var d=[];for(var v in c)xe(c[v])&&d.push(v);return d.sort()}function te(c,d){return function(v){var k=arguments.length;if(d&&(v=Object(v)),k<2||v==null)return v;for(var A=1;A<k;A++)for(var w=arguments[A],B=c(w),H=B.length,ee=0;ee<H;ee++){var ne=B[ee];(!d||v[ne]===void 0)&&(v[ne]=w[ne])}return v}}var it=te(Je),oe=te(ue),Cn=te(Je,!0);function di(){return function(){}}function On(c){if(!z(c))return{};if(D)return D(c);var d=di();d.prototype=c;var v=new d;return d.prototype=null,v}function we(c,d){var v=On(c);return d&&oe(v,d),v}function Pe(c){return z(c)?Ze(c)?c.slice():it({},c):c}function Te(c,d){return d(c),c}function ve(c){return Ze(c)?c:[c]}ie.toPath=ve;function De(c){return ie.toPath(c)}function Be(c,d){for(var v=d.length,k=0;k<v;k++){if(c==null)return;c=c[d[k]]}return v?c:void 0}function Qe(c,d,v){var k=Be(c,De(d));return J(k)?v:k}function pi(c,d){d=De(d);for(var v=d.length,k=0;k<v;k++){var A=d[k];if(!Xe(c,A))return!1;c=c[A]}return!!v}function Et(c){return c}function Ye(c){return c=oe({},c),function(d){return nt(d,c)}}function at(c){return c=De(c),function(d){return Be(d,c)}}function Pn(c,d,v){if(d===void 0)return c;switch(v??3){case 1:return function(k){return c.call(d,k)};case 3:return function(k,A,w){return c.call(d,k,A,w)};case 4:return function(k,A,w,B){return c.call(d,k,A,w,B)}}return function(){return c.apply(d,arguments)}}function ln(c,d,v){return c==null?Et:xe(c)?Pn(c,d,v):z(c)&&!Ze(c)?Ye(c):at(c)}function cn(c,d){return ln(c,d,1/0)}ie.iteratee=cn;function Ee(c,d,v){return ie.iteratee!==cn?ie.iteratee(c,d):ln(c,d,v)}function fi(c,d,v){d=Ee(d,v);for(var k=ue(c),A=k.length,w={},B=0;B<A;B++){var H=k[B];w[H]=d(c[H],H,c)}return w}function ur(){}function gi(c){return c==null?ur:function(d){return Qe(c,d)}}function me(c,d,v){var k=Array(Math.max(0,c));d=Pn(d,v,1);for(var A=0;A<c;A++)k[A]=d(A);return k}function Yn(c,d){return d==null&&(d=c,c=0),c+Math.floor(Math.random()*(d-c+1))}var Nn=Date.now||function(){return new Date().getTime()};function qt(c){var d=function(w){return c[w]},v="(?:"+ue(c).join("|")+")",k=RegExp(v),A=RegExp(v,"g");return function(w){return w=w==null?"":""+w,k.test(w)?w.replace(A,d):w}}var zt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},hi=qt(zt),mi=Ie(zt),bi=qt(mi),vi=ie.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},At=/(.)^/,ki={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},lr=/\\|'|\r|\n|\u2028|\u2029/g;function cr(c){return"\\"+ki[c]}var xi=/^\s*(\w|\$)+\s*$/;function yi(c,d,v){!d&&v&&(d=v),d=Cn({},d,ie.templateSettings);var k=RegExp([(d.escape||At).source,(d.interpolate||At).source,(d.evaluate||At).source].join("|")+"|$","g"),A=0,w="__p+='";c.replace(k,function(ne,ke,qe,Ce,Ue){return w+=c.slice(A,Ue).replace(lr,cr),A=Ue+ne.length,ke?w+=`'+
((__t=(`+ke+`))==null?'':_.escape(__t))+
'`:qe?w+=`'+
((__t=(`+qe+`))==null?'':__t)+
'`:Ce&&(w+=`';
`+Ce+`
__p+='`),ne}),w+=`';
`;var B=d.variable;if(B){if(!xi.test(B))throw new Error("variable is not a bare identifier: "+B)}else w=`with(obj||{}){
`+w+`}
`,B="obj";w=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+w+`return __p;
`;var H;try{H=new Function(B,"_",w)}catch(ne){throw ne.source=w,ne}var ee=function(ne){return H.call(this,ne,ie)};return ee.source="function("+B+`){
`+w+"}",ee}function Fi(c,d,v){d=De(d);var k=d.length;if(!k)return xe(v)?v.call(c):v;for(var A=0;A<k;A++){var w=c?.[d[A]];w===void 0&&(w=v,A=k),c=xe(w)?w.call(c):w}return c}var dr=0;function wi(c){var d=++dr+"";return c?c+d:d}function Ln(c){var d=ie(c);return d._chain=!0,d}function jn(c,d,v,k,A){if(!(k instanceof d))return c.apply(v,A);var w=On(c.prototype),B=c.apply(w,A);return z(B)?B:w}var dn=y(function(c,d){var v=dn.placeholder,k=function(){for(var A=0,w=d.length,B=Array(w),H=0;H<w;H++)B[H]=d[H]===v?arguments[A++]:d[H];for(;A<arguments.length;)B.push(arguments[A++]);return jn(c,k,this,this,B)};return k});dn.placeholder=ie;var _n=y(function(c,d,v){if(!xe(c))throw new TypeError("Bind must be called on a function");var k=y(function(A){return jn(c,k,d,this,v.concat(A))});return k}),be=nr(Fe);function Dn(c,d,v){!d&&d!==0&&(d=1/0);for(var k=[],A=0,w=0,B=Fe(c)||0,H=[];;){if(w>=B){if(!H.length)break;var ee=H.pop();w=ee.i,c=ee.v,B=Fe(c);continue}var ne=c[w++];H.length>=d?k[A++]=ne:be(ne)&&(Ze(ne)||wt(ne))?(H.push({i:w,v:c}),w=0,c=ne,B=Fe(c)):v||(k[A++]=ne)}return k}var Ci=y(function(c,d){d=Dn(d,!1,!1);var v=d.length;if(v<1)throw new Error("bindAll must be passed function names");for(;v--;){var k=d[v];c[k]=_n(c[k],c)}return c});function _i(c,d){var v=function(k){var A=v.cache,w=""+(d?d.apply(this,arguments):k);return Xe(A,w)||(A[w]=c.apply(this,arguments)),A[w]};return v.cache={},v}var pr=y(function(c,d,v){return setTimeout(function(){return c.apply(null,v)},d)}),Di=dn(pr,ie,1);function Ei(c,d,v){var k,A,w,B,H=0;v||(v={});var ee=function(){H=v.leading===!1?0:Nn(),k=null,B=c.apply(A,w),k||(A=w=null)},ne=function(){var ke=Nn();!H&&v.leading===!1&&(H=ke);var qe=d-(ke-H);return A=this,w=arguments,qe<=0||qe>d?(k&&(clearTimeout(k),k=null),H=ke,B=c.apply(A,w),k||(A=w=null)):!k&&v.trailing!==!1&&(k=setTimeout(ee,qe)),B};return ne.cancel=function(){clearTimeout(k),H=0,k=A=w=null},ne}function qi(c,d,v){var k,A,w,B,H,ee=function(){var ke=Nn()-A;d>ke?k=setTimeout(ee,d-ke):(k=null,v||(B=c.apply(H,w)),k||(w=H=null))},ne=y(function(ke){return H=this,w=ke,A=Nn(),k||(k=setTimeout(ee,d),v&&(B=c.apply(H,w))),B});return ne.cancel=function(){clearTimeout(k),k=w=H=null},ne}function zi(c,d){return dn(d,c)}function Un(c){return function(){return!c.apply(this,arguments)}}function Ai(){var c=arguments,d=c.length-1;return function(){for(var v=d,k=c[d].apply(this,arguments);v--;)k=c[v].call(this,k);return k}}function fr(c,d){return function(){if(--c<1)return d.apply(this,arguments)}}function gr(c,d){var v;return function(){return--c>0&&(v=d.apply(this,arguments)),c<=1&&(d=null),v}}var Mi=dn(gr,2);function hr(c,d,v){d=Ee(d,v);for(var k=ue(c),A,w=0,B=k.length;w<B;w++)if(A=k[w],d(c[A],A,c))return A}function mr(c){return function(d,v,k){v=Ee(v,k);for(var A=Fe(d),w=c>0?0:A-1;w>=0&&w<A;w+=c)if(v(d[w],w,d))return w;return-1}}var Mt=mr(1),br=mr(-1);function vr(c,d,v,k){v=Ee(v,k,1);for(var A=v(d),w=0,B=Fe(c);w<B;){var H=Math.floor((w+B)/2);v(c[H])<A?w=H+1:B=H}return w}function kr(c,d,v){return function(k,A,w){var B=0,H=Fe(k);if(typeof w=="number")c>0?B=w>=0?w:Math.max(w+H,B):H=w>=0?Math.min(w+1,H):w+H+1;else if(v&&w&&H)return w=v(k,A),k[w]===A?w:-1;if(A!==A)return w=d(g.call(k,B,H),Kt),w>=0?w+B:-1;for(w=c>0?B:H-1;w>=0&&w<H;w+=c)if(k[w]===A)return w;return-1}}var xr=kr(1,Mt,vr),Si=kr(-1,br);function St(c,d,v){var k=be(c)?Mt:hr,A=k(c,d,v);if(A!==void 0&&A!==-1)return c[A]}function Bi(c,d){return St(c,Ye(d))}function Ne(c,d,v){d=Pn(d,v);var k,A;if(be(c))for(k=0,A=c.length;k<A;k++)d(c[k],k,c);else{var w=ue(c);for(k=0,A=w.length;k<A;k++)d(c[w[k]],w[k],c)}return c}function pn(c,d,v){d=Ee(d,v);for(var k=!be(c)&&ue(c),A=(k||c).length,w=Array(A),B=0;B<A;B++){var H=k?k[B]:B;w[B]=d(c[H],H,c)}return w}function yr(c){var d=function(v,k,A,w){var B=!be(v)&&ue(v),H=(B||v).length,ee=c>0?0:H-1;for(w||(A=v[B?B[ee]:ee],ee+=c);ee>=0&&ee<H;ee+=c){var ne=B?B[ee]:ee;A=k(A,v[ne],ne,v)}return A};return function(v,k,A,w){var B=arguments.length>=3;return d(v,Pn(k,w,4),A,B)}}var Wn=yr(1),st=yr(-1);function En(c,d,v){var k=[];return d=Ee(d,v),Ne(c,function(A,w,B){d(A,w,B)&&k.push(A)}),k}function Fr(c,d,v){return En(c,Un(Ee(d)),v)}function Bt(c,d,v){d=Ee(d,v);for(var k=!be(c)&&ue(c),A=(k||c).length,w=0;w<A;w++){var B=k?k[w]:w;if(!d(c[B],B,c))return!1}return!0}function wr(c,d,v){d=Ee(d,v);for(var k=!be(c)&&ue(c),A=(k||c).length,w=0;w<A;w++){var B=k?k[w]:w;if(d(c[B],B,c))return!0}return!1}function Le(c,d,v,k){return be(c)||(c=wn(c)),(typeof v!="number"||k)&&(v=0),xr(c,d,v)>=0}var Ii=y(function(c,d,v){var k,A;return xe(d)?A=d:(d=De(d),k=d.slice(0,-1),d=d[d.length-1]),pn(c,function(w){var B=A;if(!B){if(k&&k.length&&(w=Be(w,k)),w==null)return;B=w[d]}return B==null?B:B.apply(w,v)})});function It(c,d){return pn(c,at(d))}function Cr(c,d){return En(c,Ye(d))}function he(c,d,v){var k=-1/0,A=-1/0,w,B;if(d==null||typeof d=="number"&&typeof c[0]!="object"&&c!=null){c=be(c)?c:wn(c);for(var H=0,ee=c.length;H<ee;H++)w=c[H],w!=null&&w>k&&(k=w)}else d=Ee(d,v),Ne(c,function(ne,ke,qe){B=d(ne,ke,qe),(B>A||B===-1/0&&k===-1/0)&&(k=ne,A=B)});return k}function $n(c,d,v){var k=1/0,A=1/0,w,B;if(d==null||typeof d=="number"&&typeof c[0]!="object"&&c!=null){c=be(c)?c:wn(c);for(var H=0,ee=c.length;H<ee;H++)w=c[H],w!=null&&w<k&&(k=w)}else d=Ee(d,v),Ne(c,function(ne,ke,qe){B=d(ne,ke,qe),(B<A||B===1/0&&k===1/0)&&(k=ne,A=B)});return k}var Vn=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function _r(c){return c?Ze(c)?g.call(c):N(c)?c.match(Vn):be(c)?pn(c,Et):wn(c):[]}function Tt(c,d,v){if(d==null||v)return be(c)||(c=wn(c)),c[Yn(c.length-1)];var k=_r(c),A=Fe(k);d=Math.max(Math.min(d,A),0);for(var w=A-1,B=0;B<d;B++){var H=Yn(B,w),ee=k[B];k[B]=k[H],k[H]=ee}return k.slice(0,d)}function Ti(c){return Tt(c,1/0)}function Ri(c,d,v){var k=0;return d=Ee(d,v),It(pn(c,function(A,w,B){return{value:A,index:k++,criteria:d(A,w,B)}}).sort(function(A,w){var B=A.criteria,H=w.criteria;if(B!==H){if(B>H||B===void 0)return 1;if(B<H||H===void 0)return-1}return A.index-w.index}),"value")}function fn(c,d){return function(v,k,A){var w=d?[[],[]]:{};return k=Ee(k,A),Ne(v,function(B,H){var ee=k(B,H,v);c(w,B,ee)}),w}}var Ke=fn(function(c,d,v){Xe(c,v)?c[v].push(d):c[v]=[d]}),Rt=fn(function(c,d,v){c[v]=d}),Oi=fn(function(c,d,v){Xe(c,v)?c[v]++:c[v]=1}),je=fn(function(c,d,v){c[v?0:1].push(d)},!0);function Pi(c){return c==null?0:be(c)?c.length:ue(c).length}function Ot(c,d,v){return d in v}var Dr=y(function(c,d){var v={},k=d[0];if(c==null)return v;xe(k)?(d.length>1&&(k=Pn(k,d[1])),d=Je(c)):(k=Ot,d=Dn(d,!1,!1),c=Object(c));for(var A=0,w=d.length;A<w;A++){var B=d[A],H=c[B];k(H,B,c)&&(v[B]=H)}return v}),Yi=y(function(c,d){var v=d[0],k;return xe(v)?(v=Un(v),d.length>1&&(k=d[1])):(d=pn(Dn(d,!1,!1),String),v=function(A,w){return!Le(d,w)}),Dr(c,v,k)});function Er(c,d,v){return g.call(c,0,Math.max(0,c.length-(d==null||v?1:d)))}function qn(c,d,v){return c==null||c.length<1?d==null||v?void 0:[]:d==null||v?c[0]:Er(c,c.length-d)}function zn(c,d,v){return g.call(c,d==null||v?1:d)}function Ni(c,d,v){return c==null||c.length<1?d==null||v?void 0:[]:d==null||v?c[c.length-1]:zn(c,Math.max(0,c.length-d))}function Li(c){return En(c,Boolean)}function ji(c,d){return Dn(c,d,!1)}var Pt=y(function(c,d){return d=Dn(d,!0,!0),En(c,function(v){return!Le(d,v)})}),Ui=y(function(c,d){return Pt(c,d)});function Yt(c,d,v,k){Q(d)||(k=v,v=d,d=!1),v!=null&&(v=Ee(v,k));for(var A=[],w=[],B=0,H=Fe(c);B<H;B++){var ee=c[B],ne=v?v(ee,B,c):ee;d&&!v?((!B||w!==ne)&&A.push(ee),w=ne):v?Le(w,ne)||(w.push(ne),A.push(ee)):Le(A,ee)||A.push(ee)}return A}var Wi=y(function(c){return Yt(Dn(c,!0,!0))});function $i(c){for(var d=[],v=arguments.length,k=0,A=Fe(c);k<A;k++){var w=c[k];if(!Le(d,w)){var B;for(B=1;B<v&&Le(arguments[B],w);B++);B===v&&d.push(w)}}return d}function Nt(c){for(var d=c&&he(c,Fe).length||0,v=Array(d),k=0;k<d;k++)v[k]=It(c,k);return v}var qr=y(Nt);function Vi(c,d){for(var v={},k=0,A=Fe(c);k<A;k++)d?v[c[k]]=d[k]:v[c[k][0]]=c[k][1];return v}function An(c,d,v){d==null&&(d=c||0,c=0),v||(v=d<c?-1:1);for(var k=Math.max(Math.ceil((d-c)/v),0),A=Array(k),w=0;w<k;w++,c+=v)A[w]=c;return A}function Hi(c,d){if(d==null||d<1)return[];for(var v=[],k=0,A=c.length;k<A;)v.push(g.call(c,k,k+=d));return v}function Hn(c,d){return c._chain?ie(d).chain():d}function zr(c){return Ne(ze(c),function(d){var v=ie[d]=c[d];ie.prototype[d]=function(){var k=[this._wrapped];return r.apply(k,arguments),Hn(this,v.apply(ie,k))}}),ie}Ne(["pop","push","reverse","shift","sort","splice","unshift"],function(c){var d=o[c];ie.prototype[c]=function(){var v=this._wrapped;return v!=null&&(d.apply(v,arguments),(c==="shift"||c==="splice")&&v.length===0&&delete v[0]),Hn(this,v)}}),Ne(["concat","join","slice"],function(c){var d=o[c];ie.prototype[c]=function(){var v=this._wrapped;return v!=null&&(v=d.apply(v,arguments)),Hn(this,v)}});var Lt={__proto__:null,VERSION:a,restArguments:y,isObject:z,isNull:E,isUndefined:J,isBoolean:Q,isElement:pe,isString:N,isNumber:j,isDate:L,isRegExp:Y,isError:Ge,isSymbol:In,isArrayBuffer:kn,isDataView:on,isArray:Ze,isFunction:xe,isArguments:wt,isFinite:oi,isNaN:Kt,isTypedArray:et,isEmpty:ir,isMatch:nt,isEqual:ar,isMap:Fn,isWeakMap:Dt,isSet:rt,isWeakSet:G,keys:ue,allKeys:Je,values:wn,pairs:ci,invert:Ie,functions:ze,methods:ze,extend:it,extendOwn:oe,assign:oe,defaults:Cn,create:we,clone:Pe,tap:Te,get:Qe,has:pi,mapObject:fi,identity:Et,constant:er,noop:ur,toPath:ve,property:at,propertyOf:gi,matcher:Ye,matches:Ye,times:me,random:Yn,now:Nn,escape:hi,unescape:bi,templateSettings:vi,template:yi,result:Fi,uniqueId:wi,chain:Ln,iteratee:cn,partial:dn,bind:_n,bindAll:Ci,memoize:_i,delay:pr,defer:Di,throttle:Ei,debounce:qi,wrap:zi,negate:Un,compose:Ai,after:fr,before:gr,once:Mi,findKey:hr,findIndex:Mt,findLastIndex:br,sortedIndex:vr,indexOf:xr,lastIndexOf:Si,find:St,detect:St,findWhere:Bi,each:Ne,forEach:Ne,map:pn,collect:pn,reduce:Wn,foldl:Wn,inject:Wn,reduceRight:st,foldr:st,filter:En,select:En,reject:Fr,every:Bt,all:Bt,some:wr,any:wr,contains:Le,includes:Le,include:Le,invoke:Ii,pluck:It,where:Cr,max:he,min:$n,shuffle:Ti,sample:Tt,sortBy:Ri,groupBy:Ke,indexBy:Rt,countBy:Oi,partition:je,toArray:_r,size:Pi,pick:Dr,omit:Yi,first:qn,head:qn,take:qn,initial:Er,last:Ni,rest:zn,tail:zn,drop:zn,compact:Li,flatten:ji,without:Ui,uniq:Yt,unique:Yt,union:Wi,intersection:$i,difference:Pt,unzip:Nt,transpose:Nt,zip:qr,object:Vi,range:An,chunk:Hi,mixin:zr,default:ie},jt=zr(Lt);return jt._=jt,jt}))});var Wt=$((S3,xa)=>{M();xa.exports={date_format:"MMM DD, YYYY",gravatar:{s:"100",r:"pg",d:"mm"}}});var Fa=$((ya,Nr)=>{M();(function(a){"use strict";function e(y,z){var E=(y&65535)+(z&65535),J=(y>>16)+(z>>16)+(E>>16);return J<<16|E&65535}function o(y,z){return y<<z|y>>>32-z}function s(y,z,E,J,Q,pe){return e(o(e(e(z,y),e(J,pe)),Q),E)}function t(y,z,E,J,Q,pe,re){return s(z&E|~z&J,y,z,Q,pe,re)}function r(y,z,E,J,Q,pe,re){return s(z&J|E&~J,y,z,Q,pe,re)}function g(y,z,E,J,Q,pe,re){return s(z^E^J,y,z,Q,pe,re)}function p(y,z,E,J,Q,pe,re){return s(E^(z|~J),y,z,Q,pe,re)}function h(y,z){y[z>>5]|=128<<z%32,y[(z+64>>>9<<4)+14]=z;var E,J,Q,pe,re,N=1732584193,j=-271733879,L=-1732584194,Y=271733878;for(E=0;E<y.length;E+=16)J=N,Q=j,pe=L,re=Y,N=t(N,j,L,Y,y[E],7,-680876936),Y=t(Y,N,j,L,y[E+1],12,-389564586),L=t(L,Y,N,j,y[E+2],17,606105819),j=t(j,L,Y,N,y[E+3],22,-1044525330),N=t(N,j,L,Y,y[E+4],7,-176418897),Y=t(Y,N,j,L,y[E+5],12,1200080426),L=t(L,Y,N,j,y[E+6],17,-1473231341),j=t(j,L,Y,N,y[E+7],22,-45705983),N=t(N,j,L,Y,y[E+8],7,1770035416),Y=t(Y,N,j,L,y[E+9],12,-1958414417),L=t(L,Y,N,j,y[E+10],17,-42063),j=t(j,L,Y,N,y[E+11],22,-1990404162),N=t(N,j,L,Y,y[E+12],7,1804603682),Y=t(Y,N,j,L,y[E+13],12,-40341101),L=t(L,Y,N,j,y[E+14],17,-1502002290),j=t(j,L,Y,N,y[E+15],22,1236535329),N=r(N,j,L,Y,y[E+1],5,-165796510),Y=r(Y,N,j,L,y[E+6],9,-1069501632),L=r(L,Y,N,j,y[E+11],14,643717713),j=r(j,L,Y,N,y[E],20,-373897302),N=r(N,j,L,Y,y[E+5],5,-701558691),Y=r(Y,N,j,L,y[E+10],9,38016083),L=r(L,Y,N,j,y[E+15],14,-660478335),j=r(j,L,Y,N,y[E+4],20,-405537848),N=r(N,j,L,Y,y[E+9],5,568446438),Y=r(Y,N,j,L,y[E+14],9,-1019803690),L=r(L,Y,N,j,y[E+3],14,-187363961),j=r(j,L,Y,N,y[E+8],20,1163531501),N=r(N,j,L,Y,y[E+13],5,-1444681467),Y=r(Y,N,j,L,y[E+2],9,-51403784),L=r(L,Y,N,j,y[E+7],14,1735328473),j=r(j,L,Y,N,y[E+12],20,-1926607734),N=g(N,j,L,Y,y[E+5],4,-378558),Y=g(Y,N,j,L,y[E+8],11,-2022574463),L=g(L,Y,N,j,y[E+11],16,1839030562),j=g(j,L,Y,N,y[E+14],23,-35309556),N=g(N,j,L,Y,y[E+1],4,-1530992060),Y=g(Y,N,j,L,y[E+4],11,1272893353),L=g(L,Y,N,j,y[E+7],16,-155497632),j=g(j,L,Y,N,y[E+10],23,-1094730640),N=g(N,j,L,Y,y[E+13],4,681279174),Y=g(Y,N,j,L,y[E],11,-358537222),L=g(L,Y,N,j,y[E+3],16,-722521979),j=g(j,L,Y,N,y[E+6],23,76029189),N=g(N,j,L,Y,y[E+9],4,-640364487),Y=g(Y,N,j,L,y[E+12],11,-421815835),L=g(L,Y,N,j,y[E+15],16,530742520),j=g(j,L,Y,N,y[E+2],23,-995338651),N=p(N,j,L,Y,y[E],6,-198630844),Y=p(Y,N,j,L,y[E+7],10,1126891415),L=p(L,Y,N,j,y[E+14],15,-1416354905),j=p(j,L,Y,N,y[E+5],21,-57434055),N=p(N,j,L,Y,y[E+12],6,1700485571),Y=p(Y,N,j,L,y[E+3],10,-1894986606),L=p(L,Y,N,j,y[E+10],15,-1051523),j=p(j,L,Y,N,y[E+1],21,-2054922799),N=p(N,j,L,Y,y[E+8],6,1873313359),Y=p(Y,N,j,L,y[E+15],10,-30611744),L=p(L,Y,N,j,y[E+6],15,-1560198380),j=p(j,L,Y,N,y[E+13],21,1309151649),N=p(N,j,L,Y,y[E+4],6,-145523070),Y=p(Y,N,j,L,y[E+11],10,-1120210379),L=p(L,Y,N,j,y[E+2],15,718787259),j=p(j,L,Y,N,y[E+9],21,-343485551),N=e(N,J),j=e(j,Q),L=e(L,pe),Y=e(Y,re);return[N,j,L,Y]}function m(y){var z,E="",J=y.length*32;for(z=0;z<J;z+=8)E+=String.fromCharCode(y[z>>5]>>>z%32&255);return E}function q(y){var z,E=[];for(E[(y.length>>2)-1]=void 0,z=0;z<E.length;z+=1)E[z]=0;var J=y.length*8;for(z=0;z<J;z+=8)E[z>>5]|=(y.charCodeAt(z/8)&255)<<z%32;return E}function S(y){return m(h(q(y),y.length*8))}function F(y,z){var E,J=q(y),Q=[],pe=[],re;for(Q[15]=pe[15]=void 0,J.length>16&&(J=h(J,y.length*8)),E=0;E<16;E+=1)Q[E]=J[E]^909522486,pe[E]=J[E]^1549556828;return re=h(Q.concat(q(z)),512+z.length*8),m(h(pe.concat(re),640))}function D(y){var z="0123456789abcdef",E="",J,Q;for(Q=0;Q<y.length;Q+=1)J=y.charCodeAt(Q),E+=z.charAt(J>>>4&15)+z.charAt(J&15);return E}function C(y){return unescape(encodeURIComponent(y))}function b(y){return S(C(y))}function R(y){return D(b(y))}function P(y,z){return F(C(y),C(z))}function T(y,z){return D(P(y,z))}function O(y,z,E){return z?E?P(z,y):T(z,y):E?b(y):R(y)}typeof define=="function"&&define.amd?define(function(){return O}):typeof Nr=="object"&&Nr.exports?Nr.exports=O:a.md5=O})(ya)});var Ca=$((T3,wa)=>{"use strict";M();function wl(a,e){return Object.prototype.hasOwnProperty.call(a,e)}wa.exports=function(a,e,o,s){e=e||"&",o=o||"=";var t={};if(typeof a!="string"||a.length===0)return t;var r=/\+/g;a=a.split(e);var g=1e3;s&&typeof s.maxKeys=="number"&&(g=s.maxKeys);var p=a.length;g>0&&p>g&&(p=g);for(var h=0;h<p;++h){var m=a[h].replace(r,"%20"),q=m.indexOf(o),S,F,D,C;q>=0?(S=m.substr(0,q),F=m.substr(q+1)):(S=m,F=""),D=decodeURIComponent(S),C=decodeURIComponent(F),wl(t,D)?Array.isArray(t[D])?t[D].push(C):t[D]=[t[D],C]:t[D]=C}return t}});var Da=$((O3,_a)=>{"use strict";M();var $t=function(a){switch(typeof a){case"string":return a;case"boolean":return a?"true":"false";case"number":return isFinite(a)?a:"";default:return""}};_a.exports=function(a,e,o,s){return e=e||"&",o=o||"=",a===null&&(a=void 0),typeof a=="object"?Object.keys(a).map(function(t){var r=encodeURIComponent($t(t))+o;return Array.isArray(a[t])?a[t].map(function(g){return r+encodeURIComponent($t(g))}).join(e):r+encodeURIComponent($t(a[t]))}).join(e):s?encodeURIComponent($t(s))+o+encodeURIComponent($t(a)):""}});var Ea=$(Vt=>{"use strict";M();Vt.decode=Vt.parse=Ca();Vt.encode=Vt.stringify=Da()});var Sa=$((j3,Ma)=>{M();var Cl=Fa(),_l=Ea(),Dl=/^[0-9a-f]{32}$/;function El(a){var e={},o={protocol:1,format:1};for(var s in a)o[s]||(e[s]=a[s]);return e}function qa(a,e){if(a)return typeof a.protocol=="boolean"?a.protocol:a.protocol==="http"?!1:a.protocol==="https"?!0:void 0}function za(a){return a=typeof a=="string"?a.trim().toLowerCase():"unspecified",a.match(Dl)?a:Cl(a)}function Aa(a){var e=_l.stringify(El(a));return e&&"?"+e||""}var L3=Ma.exports={url:function(a,e,o){var s="//www.gravatar.com/avatar/";e&&e.cdn?(s=e.cdn+"/avatar/",delete e.cdn):(e&&e.protocol&&(o=qa(e)),typeof o<"u"&&(s=o?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var t=Aa(e);return s+za(a)+t},profile_url:function(a,e,o){var s=e!=null&&e.format!=null?String(e.format):"json",t;if(e&&e.cdn)t=e.cdn+"/",delete e.cdn;else{e&&e.protocol&&(o=qa(e));var t=o&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var r=Aa(e);return t+za(a)+"."+s+r}}});var Ia=$((W3,Ba)=>{M();Ba.exports=Sa()});var Oa=$((V3,Ra)=>{M();var ql=Wt(),zl=Ut(),Al=Ia(),Ml={github:"github.com",twitter:"twitter.com",soundcloud:"soundcloud.com",pinterest:"pinterest.com",vimeo:"vimeo.com",behance:"behance.net",codepen:"codepen.io",foursquare:"foursquare.com",reddit:"reddit.com",spotify:"open.spotify.com",dribble:"dribbble.com",dribbble:"dribbble.com",facebook:"facebook.com",angellist:"angel.co",bitbucket:"bitbucket.org",exercism:"exercism.io",instagram:"instagram.com",googleplus:"plus.google.com",gratipay:"gratipay.com",hackernews:"news.ycombinator.com",lastfm:"last.fm",stackexchange:"stackexchange.com",stackoverflow:"stackoverflow.com",tumblr:"tumblr.com",youtube:"youtube.com",medium:"medium.com",blogger:"blogspot.com",meetup:"meetup.com",flickr:"flickr.com",telegram:"telegram.me"};function Sl(a){return Al.url(a,ql.gravatar,"https")}function Bl(a){return a.basics.picture||Sl(a.basics.email)}function Ta(a,e){var o=a.basics.profiles;return zl.find(o,function(s){return s.network.toLowerCase()===e.toLowerCase()})}function Il(a,e){var o,s,t=Ta(a,e);if(t.url)return t.url;if(s=t.username,o=Ml[e],!(!s&&!o))switch(e==="medium"&&!/^@.*/.test(s)&&(s="@"+s),e){case"skype":return"skype:"+s+"?call";case"reddit":case"spotify":case"lastfm":case"foursquare":case"youtube":return"//"+o+"/user/"+s;case"hackernews":return"//"+o+"/user?id="+s;case"stackexchange":case"stackoverflow":return"//"+o+"/users/"+s;case"tumblr":case"blogger":return"//"+s+"."+o;case"meetup":return"//"+o+"/members/"+s;case"flickr":return"//"+o+"/people/"+s;default:return"//"+o+"/"+s}}Ra.exports={getUrlForPicture:Bl,getProfile:Ta,getUrlForProfile:Il}});var Lr=$((c1,ft)=>{M();(function(a,e){typeof c1=="object"&&typeof ft<"u"?ft.exports=e():typeof define=="function"&&define.amd?define(e):a.moment=e()})(c1,(function(){"use strict";var a;function e(){return a.apply(null,arguments)}function o(n){a=n}function s(n){return n instanceof Array||Object.prototype.toString.call(n)==="[object Array]"}function t(n){return n!=null&&Object.prototype.toString.call(n)==="[object Object]"}function r(n,i){return Object.prototype.hasOwnProperty.call(n,i)}function g(n){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(n).length===0;var i;for(i in n)if(r(n,i))return!1;return!0}function p(n){return n===void 0}function h(n){return typeof n=="number"||Object.prototype.toString.call(n)==="[object Number]"}function m(n){return n instanceof Date||Object.prototype.toString.call(n)==="[object Date]"}function q(n,i){var u=[],l,f=n.length;for(l=0;l<f;++l)u.push(i(n[l],l));return u}function S(n,i){for(var u in i)r(i,u)&&(n[u]=i[u]);return r(i,"toString")&&(n.toString=i.toString),r(i,"valueOf")&&(n.valueOf=i.valueOf),n}function F(n,i,u,l){return w(n,i,u,l,!0).utc()}function D(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function C(n){return n._pf==null&&(n._pf=D()),n._pf}var b;Array.prototype.some?b=Array.prototype.some:b=function(n){var i=Object(this),u=i.length>>>0,l;for(l=0;l<u;l++)if(l in i&&n.call(this,i[l],l,i))return!0;return!1};function R(n){var i=null,u=!1,l=n._d&&!isNaN(n._d.getTime());if(l&&(i=C(n),u=b.call(i.parsedDateParts,function(f){return f!=null}),l=i.overflow<0&&!i.empty&&!i.invalidEra&&!i.invalidMonth&&!i.invalidWeekday&&!i.weekdayMismatch&&!i.nullInput&&!i.invalidFormat&&!i.userInvalidated&&(!i.meridiem||i.meridiem&&u),n._strict&&(l=l&&i.charsLeftOver===0&&i.unusedTokens.length===0&&i.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(n))n._isValid=l;else return l;return n._isValid}function P(n){var i=F(NaN);return n!=null?S(C(i),n):C(i).userInvalidated=!0,i}var T=e.momentProperties=[],O=!1;function y(n,i){var u,l,f,x=T.length;if(p(i._isAMomentObject)||(n._isAMomentObject=i._isAMomentObject),p(i._i)||(n._i=i._i),p(i._f)||(n._f=i._f),p(i._l)||(n._l=i._l),p(i._strict)||(n._strict=i._strict),p(i._tzm)||(n._tzm=i._tzm),p(i._isUTC)||(n._isUTC=i._isUTC),p(i._offset)||(n._offset=i._offset),p(i._pf)||(n._pf=C(i)),p(i._locale)||(n._locale=i._locale),x>0)for(u=0;u<x;u++)l=T[u],f=i[l],p(f)||(n[l]=f);return n}function z(n){y(this,n),this._d=new Date(n._d!=null?n._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),O===!1&&(O=!0,e.updateOffset(this),O=!1)}function E(n){return n instanceof z||n!=null&&n._isAMomentObject!=null}function J(n){e.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+n)}function Q(n,i){var u=!0;return S(function(){if(e.deprecationHandler!=null&&e.deprecationHandler(null,n),u){var l=[],f,x,I,Z=arguments.length;for(x=0;x<Z;x++){if(f="",typeof arguments[x]=="object"){f+=`
[`+x+"] ";for(I in arguments[0])r(arguments[0],I)&&(f+=I+": "+arguments[0][I]+", ");f=f.slice(0,-2)}else f=arguments[x];l.push(f)}J(n+`
Arguments: `+Array.prototype.slice.call(l).join("")+`
`+new Error().stack),u=!1}return i.apply(this,arguments)},i)}var pe={};function re(n,i){e.deprecationHandler!=null&&e.deprecationHandler(n,i),pe[n]||(J(i),pe[n]=!0)}e.suppressDeprecationWarnings=!1,e.deprecationHandler=null;function N(n){return typeof Function<"u"&&n instanceof Function||Object.prototype.toString.call(n)==="[object Function]"}function j(n){var i,u;for(u in n)r(n,u)&&(i=n[u],N(i)?this[u]=i:this["_"+u]=i);this._config=n,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function L(n,i){var u=S({},n),l;for(l in i)r(i,l)&&(t(n[l])&&t(i[l])?(u[l]={},S(u[l],n[l]),S(u[l],i[l])):i[l]!=null?u[l]=i[l]:delete u[l]);for(l in n)r(n,l)&&!r(i,l)&&t(n[l])&&(u[l]=S({},u[l]));return u}function Y(n){n!=null&&this.set(n)}var Ge;Object.keys?Ge=Object.keys:Ge=function(n){var i,u=[];for(i in n)r(n,i)&&u.push(i);return u};var In={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function kn(n,i,u){var l=this._calendar[n]||this._calendar.sameElse;return N(l)?l.call(i,u):l}function Se(n,i,u){var l=""+Math.abs(n),f=i-l.length,x=n>=0;return(x?u?"+":"":"-")+Math.pow(10,Math.max(0,f)).toString().substr(1)+l}var yt=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,xe=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Qn={},sn={};function X(n,i,u,l){var f=l;typeof l=="string"&&(f=function(){return this[l]()}),n&&(sn[n]=f),i&&(sn[i[0]]=function(){return Se(f.apply(this,arguments),i[1],i[2])}),u&&(sn[u]=function(){return this.localeData().ordinal(f.apply(this,arguments),n)})}function ai(n){return n.match(/\[[\s\S]/)?n.replace(/^\[|\]$/g,""):n.replace(/\\/g,"")}function si(n){var i=n.match(yt),u,l;for(u=0,l=i.length;u<l;u++)sn[i[u]]?i[u]=sn[i[u]]:i[u]=ai(i[u]);return function(f){var x="",I;for(I=0;I<l;I++)x+=N(i[I])?i[I].call(f,n):i[I];return x}}function on(n,i){return n.isValid()?(i=Ze(i,n.localeData()),Qn[i]=Qn[i]||si(i),Qn[i](n)):n.localeData().invalidDate()}function Ze(n,i){var u=5;function l(f){return i.longDateFormat(f)||f}for(xe.lastIndex=0;u>=0&&xe.test(n);)n=n.replace(xe,l),xe.lastIndex=0,u-=1;return n}var Xe={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ft(n){var i=this._longDateFormat[n],u=this._longDateFormat[n.toUpperCase()];return i||!u?i:(this._longDateFormat[n]=u.match(yt).map(function(l){return l==="MMMM"||l==="MM"||l==="DD"||l==="dddd"?l.slice(1):l}).join(""),this._longDateFormat[n])}var wt="Invalid date";function oi(){return this._invalidDate}var Kt="%d",er=/\d{1,2}/;function nr(n){return this._ordinal.replace("%d",n)}var tr={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Kn(n,i,u,l){var f=this._relativeTime[u];return N(f)?f(n,i,u,l):f.replace(/%d/i,n)}function ui(n,i){var u=this._relativeTime[n>0?"future":"past"];return N(u)?u(i):u.replace(/%s/i,i)}var rr={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Me(n){return typeof n=="string"?rr[n]||rr[n.toLowerCase()]:void 0}function et(n){var i={},u,l;for(l in n)r(n,l)&&(u=Me(l),u&&(i[u]=n[l]));return i}var Fe={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function li(n){var i=[],u;for(u in n)r(n,u)&&i.push({unit:u,priority:Fe[u]});return i.sort(function(l,f){return l.priority-f.priority}),i}var Ct=/\d/,ue=/\d\d/,ir=/\d{3}/,nt=/\d{4}/,ie=/[+-]?\d{6}/,fe=/\d\d?/,_t=/\d\d\d\d?/,ar=/\d\d\d\d\d\d?/,Je=/\d{1,3}/,Tn=/\d{1,4}/,xn=/[+-]?\d{1,6}/,un=/\d+/,yn=/[+-]?\d+/,sr=/Z|[+-]\d\d:?\d\d/gi,tt=/Z|[+-]\d\d(?::?\d\d)?/gi,or=/[+-]?\d+(\.\d{1,3})?/,Rn=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Fn=/^[1-9]\d?/,Dt=/^([1-9]\d|\d)/,rt;rt={};function G(n,i,u){rt[n]=N(i)?i:function(l,f){return l&&u?u:i}}function wn(n,i){return r(rt,n)?rt[n](i._strict,i._locale):new RegExp(ci(n))}function ci(n){return Ie(n.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(i,u,l,f,x){return u||l||f||x}))}function Ie(n){return n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ze(n){return n<0?Math.ceil(n)||0:Math.floor(n)}function te(n){var i=+n,u=0;return i!==0&&isFinite(i)&&(u=ze(i)),u}var it={};function oe(n,i){var u,l=i,f;for(typeof n=="string"&&(n=[n]),h(i)&&(l=function(x,I){I[i]=te(x)}),f=n.length,u=0;u<f;u++)it[n[u]]=l}function Cn(n,i){oe(n,function(u,l,f,x){f._w=f._w||{},i(u,f._w,f,x)})}function di(n,i,u){i!=null&&r(it,n)&&it[n](i,u._a,u,n)}function On(n){return n%4===0&&n%100!==0||n%400===0}var we=0,Pe=1,Te=2,ve=3,De=4,Be=5,Qe=6,pi=7,Et=8;X("Y",0,0,function(){var n=this.year();return n<=9999?Se(n,4):"+"+n}),X(0,["YY",2],0,function(){return this.year()%100}),X(0,["YYYY",4],0,"year"),X(0,["YYYYY",5],0,"year"),X(0,["YYYYYY",6,!0],0,"year"),G("Y",yn),G("YY",fe,ue),G("YYYY",Tn,nt),G("YYYYY",xn,ie),G("YYYYYY",xn,ie),oe(["YYYYY","YYYYYY"],we),oe("YYYY",function(n,i){i[we]=n.length===2?e.parseTwoDigitYear(n):te(n)}),oe("YY",function(n,i){i[we]=e.parseTwoDigitYear(n)}),oe("Y",function(n,i){i[we]=parseInt(n,10)});function Ye(n){return On(n)?366:365}e.parseTwoDigitYear=function(n){return te(n)+(te(n)>68?1900:2e3)};var at=ln("FullYear",!0);function Pn(){return On(this.year())}function ln(n,i){return function(u){return u!=null?(Ee(this,n,u),e.updateOffset(this,i),this):cn(this,n)}}function cn(n,i){if(!n.isValid())return NaN;var u=n._d,l=n._isUTC;switch(i){case"Milliseconds":return l?u.getUTCMilliseconds():u.getMilliseconds();case"Seconds":return l?u.getUTCSeconds():u.getSeconds();case"Minutes":return l?u.getUTCMinutes():u.getMinutes();case"Hours":return l?u.getUTCHours():u.getHours();case"Date":return l?u.getUTCDate():u.getDate();case"Day":return l?u.getUTCDay():u.getDay();case"Month":return l?u.getUTCMonth():u.getMonth();case"FullYear":return l?u.getUTCFullYear():u.getFullYear();default:return NaN}}function Ee(n,i,u){var l,f,x,I,Z;if(!(!n.isValid()||isNaN(u))){switch(l=n._d,f=n._isUTC,i){case"Milliseconds":return void(f?l.setUTCMilliseconds(u):l.setMilliseconds(u));case"Seconds":return void(f?l.setUTCSeconds(u):l.setSeconds(u));case"Minutes":return void(f?l.setUTCMinutes(u):l.setMinutes(u));case"Hours":return void(f?l.setUTCHours(u):l.setHours(u));case"Date":return void(f?l.setUTCDate(u):l.setDate(u));case"FullYear":break;default:return}x=u,I=n.month(),Z=n.date(),Z=Z===29&&I===1&&!On(x)?28:Z,f?l.setUTCFullYear(x,I,Z):l.setFullYear(x,I,Z)}}function fi(n){return n=Me(n),N(this[n])?this[n]():this}function ur(n,i){if(typeof n=="object"){n=et(n);var u=li(n),l,f=u.length;for(l=0;l<f;l++)this[u[l].unit](n[u[l].unit])}else if(n=Me(n),N(this[n]))return this[n](i);return this}function gi(n,i){return(n%i+i)%i}var me;Array.prototype.indexOf?me=Array.prototype.indexOf:me=function(n){var i;for(i=0;i<this.length;++i)if(this[i]===n)return i;return-1};function Yn(n,i){if(isNaN(n)||isNaN(i))return NaN;var u=gi(i,12);return n+=(i-u)/12,u===1?On(n)?29:28:31-u%7%2}X("M",["MM",2],"Mo",function(){return this.month()+1}),X("MMM",0,0,function(n){return this.localeData().monthsShort(this,n)}),X("MMMM",0,0,function(n){return this.localeData().months(this,n)}),G("M",fe,Fn),G("MM",fe,ue),G("MMM",function(n,i){return i.monthsShortRegex(n)}),G("MMMM",function(n,i){return i.monthsRegex(n)}),oe(["M","MM"],function(n,i){i[Pe]=te(n)-1}),oe(["MMM","MMMM"],function(n,i,u,l){var f=u._locale.monthsParse(n,l,u._strict);f!=null?i[Pe]=f:C(u).invalidMonth=n});var Nn="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),zt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,hi=Rn,mi=Rn;function bi(n,i){return n?s(this._months)?this._months[n.month()]:this._months[(this._months.isFormat||zt).test(i)?"format":"standalone"][n.month()]:s(this._months)?this._months:this._months.standalone}function vi(n,i){return n?s(this._monthsShort)?this._monthsShort[n.month()]:this._monthsShort[zt.test(i)?"format":"standalone"][n.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function At(n,i,u){var l,f,x,I=n.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],l=0;l<12;++l)x=F([2e3,l]),this._shortMonthsParse[l]=this.monthsShort(x,"").toLocaleLowerCase(),this._longMonthsParse[l]=this.months(x,"").toLocaleLowerCase();return u?i==="MMM"?(f=me.call(this._shortMonthsParse,I),f!==-1?f:null):(f=me.call(this._longMonthsParse,I),f!==-1?f:null):i==="MMM"?(f=me.call(this._shortMonthsParse,I),f!==-1?f:(f=me.call(this._longMonthsParse,I),f!==-1?f:null)):(f=me.call(this._longMonthsParse,I),f!==-1?f:(f=me.call(this._shortMonthsParse,I),f!==-1?f:null))}function ki(n,i,u){var l,f,x;if(this._monthsParseExact)return At.call(this,n,i,u);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),l=0;l<12;l++){if(f=F([2e3,l]),u&&!this._longMonthsParse[l]&&(this._longMonthsParse[l]=new RegExp("^"+this.months(f,"").replace(".","")+"$","i"),this._shortMonthsParse[l]=new RegExp("^"+this.monthsShort(f,"").replace(".","")+"$","i")),!u&&!this._monthsParse[l]&&(x="^"+this.months(f,"")+"|^"+this.monthsShort(f,""),this._monthsParse[l]=new RegExp(x.replace(".",""),"i")),u&&i==="MMMM"&&this._longMonthsParse[l].test(n))return l;if(u&&i==="MMM"&&this._shortMonthsParse[l].test(n))return l;if(!u&&this._monthsParse[l].test(n))return l}}function lr(n,i){if(!n.isValid())return n;if(typeof i=="string"){if(/^\d+$/.test(i))i=te(i);else if(i=n.localeData().monthsParse(i),!h(i))return n}var u=i,l=n.date();return l=l<29?l:Math.min(l,Yn(n.year(),u)),n._isUTC?n._d.setUTCMonth(u,l):n._d.setMonth(u,l),n}function cr(n){return n!=null?(lr(this,n),e.updateOffset(this,!0),this):cn(this,"Month")}function xi(){return Yn(this.year(),this.month())}function yi(n){return this._monthsParseExact?(r(this,"_monthsRegex")||dr.call(this),n?this._monthsShortStrictRegex:this._monthsShortRegex):(r(this,"_monthsShortRegex")||(this._monthsShortRegex=hi),this._monthsShortStrictRegex&&n?this._monthsShortStrictRegex:this._monthsShortRegex)}function Fi(n){return this._monthsParseExact?(r(this,"_monthsRegex")||dr.call(this),n?this._monthsStrictRegex:this._monthsRegex):(r(this,"_monthsRegex")||(this._monthsRegex=mi),this._monthsStrictRegex&&n?this._monthsStrictRegex:this._monthsRegex)}function dr(){function n(K,ae){return ae.length-K.length}var i=[],u=[],l=[],f,x,I,Z;for(f=0;f<12;f++)x=F([2e3,f]),I=Ie(this.monthsShort(x,"")),Z=Ie(this.months(x,"")),i.push(I),u.push(Z),l.push(Z),l.push(I);i.sort(n),u.sort(n),l.sort(n),this._monthsRegex=new RegExp("^("+l.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function wi(n,i,u,l,f,x,I){var Z;return n<100&&n>=0?(Z=new Date(n+400,i,u,l,f,x,I),isFinite(Z.getFullYear())&&Z.setFullYear(n)):Z=new Date(n,i,u,l,f,x,I),Z}function Ln(n){var i,u;return n<100&&n>=0?(u=Array.prototype.slice.call(arguments),u[0]=n+400,i=new Date(Date.UTC.apply(null,u)),isFinite(i.getUTCFullYear())&&i.setUTCFullYear(n)):i=new Date(Date.UTC.apply(null,arguments)),i}function jn(n,i,u){var l=7+i-u,f=(7+Ln(n,0,l).getUTCDay()-i)%7;return-f+l-1}function dn(n,i,u,l,f){var x=(7+u-l)%7,I=jn(n,l,f),Z=1+7*(i-1)+x+I,K,ae;return Z<=0?(K=n-1,ae=Ye(K)+Z):Z>Ye(n)?(K=n+1,ae=Z-Ye(n)):(K=n,ae=Z),{year:K,dayOfYear:ae}}function _n(n,i,u){var l=jn(n.year(),i,u),f=Math.floor((n.dayOfYear()-l-1)/7)+1,x,I;return f<1?(I=n.year()-1,x=f+be(I,i,u)):f>be(n.year(),i,u)?(x=f-be(n.year(),i,u),I=n.year()+1):(I=n.year(),x=f),{week:x,year:I}}function be(n,i,u){var l=jn(n,i,u),f=jn(n+1,i,u);return(Ye(n)-l+f)/7}X("w",["ww",2],"wo","week"),X("W",["WW",2],"Wo","isoWeek"),G("w",fe,Fn),G("ww",fe,ue),G("W",fe,Fn),G("WW",fe,ue),Cn(["w","ww","W","WW"],function(n,i,u,l){i[l.substr(0,1)]=te(n)});function Dn(n){return _n(n,this._week.dow,this._week.doy).week}var Ci={dow:0,doy:6};function _i(){return this._week.dow}function pr(){return this._week.doy}function Di(n){var i=this.localeData().week(this);return n==null?i:this.add((n-i)*7,"d")}function Ei(n){var i=_n(this,1,4).week;return n==null?i:this.add((n-i)*7,"d")}X("d",0,"do","day"),X("dd",0,0,function(n){return this.localeData().weekdaysMin(this,n)}),X("ddd",0,0,function(n){return this.localeData().weekdaysShort(this,n)}),X("dddd",0,0,function(n){return this.localeData().weekdays(this,n)}),X("e",0,0,"weekday"),X("E",0,0,"isoWeekday"),G("d",fe),G("e",fe),G("E",fe),G("dd",function(n,i){return i.weekdaysMinRegex(n)}),G("ddd",function(n,i){return i.weekdaysShortRegex(n)}),G("dddd",function(n,i){return i.weekdaysRegex(n)}),Cn(["dd","ddd","dddd"],function(n,i,u,l){var f=u._locale.weekdaysParse(n,l,u._strict);f!=null?i.d=f:C(u).invalidWeekday=n}),Cn(["d","e","E"],function(n,i,u,l){i[l]=te(n)});function qi(n,i){return typeof n!="string"?n:isNaN(n)?(n=i.weekdaysParse(n),typeof n=="number"?n:null):parseInt(n,10)}function zi(n,i){return typeof n=="string"?i.weekdaysParse(n)%7||7:isNaN(n)?null:n}function Un(n,i){return n.slice(i,7).concat(n.slice(0,i))}var Ai="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),fr="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),gr="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Mi=Rn,hr=Rn,mr=Rn;function Mt(n,i){var u=s(this._weekdays)?this._weekdays:this._weekdays[n&&n!==!0&&this._weekdays.isFormat.test(i)?"format":"standalone"];return n===!0?Un(u,this._week.dow):n?u[n.day()]:u}function br(n){return n===!0?Un(this._weekdaysShort,this._week.dow):n?this._weekdaysShort[n.day()]:this._weekdaysShort}function vr(n){return n===!0?Un(this._weekdaysMin,this._week.dow):n?this._weekdaysMin[n.day()]:this._weekdaysMin}function kr(n,i,u){var l,f,x,I=n.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],l=0;l<7;++l)x=F([2e3,1]).day(l),this._minWeekdaysParse[l]=this.weekdaysMin(x,"").toLocaleLowerCase(),this._shortWeekdaysParse[l]=this.weekdaysShort(x,"").toLocaleLowerCase(),this._weekdaysParse[l]=this.weekdays(x,"").toLocaleLowerCase();return u?i==="dddd"?(f=me.call(this._weekdaysParse,I),f!==-1?f:null):i==="ddd"?(f=me.call(this._shortWeekdaysParse,I),f!==-1?f:null):(f=me.call(this._minWeekdaysParse,I),f!==-1?f:null):i==="dddd"?(f=me.call(this._weekdaysParse,I),f!==-1||(f=me.call(this._shortWeekdaysParse,I),f!==-1)?f:(f=me.call(this._minWeekdaysParse,I),f!==-1?f:null)):i==="ddd"?(f=me.call(this._shortWeekdaysParse,I),f!==-1||(f=me.call(this._weekdaysParse,I),f!==-1)?f:(f=me.call(this._minWeekdaysParse,I),f!==-1?f:null)):(f=me.call(this._minWeekdaysParse,I),f!==-1||(f=me.call(this._weekdaysParse,I),f!==-1)?f:(f=me.call(this._shortWeekdaysParse,I),f!==-1?f:null))}function xr(n,i,u){var l,f,x;if(this._weekdaysParseExact)return kr.call(this,n,i,u);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),l=0;l<7;l++){if(f=F([2e3,1]).day(l),u&&!this._fullWeekdaysParse[l]&&(this._fullWeekdaysParse[l]=new RegExp("^"+this.weekdays(f,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[l]=new RegExp("^"+this.weekdaysShort(f,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[l]=new RegExp("^"+this.weekdaysMin(f,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[l]||(x="^"+this.weekdays(f,"")+"|^"+this.weekdaysShort(f,"")+"|^"+this.weekdaysMin(f,""),this._weekdaysParse[l]=new RegExp(x.replace(".",""),"i")),u&&i==="dddd"&&this._fullWeekdaysParse[l].test(n))return l;if(u&&i==="ddd"&&this._shortWeekdaysParse[l].test(n))return l;if(u&&i==="dd"&&this._minWeekdaysParse[l].test(n))return l;if(!u&&this._weekdaysParse[l].test(n))return l}}function Si(n){if(!this.isValid())return n!=null?this:NaN;var i=cn(this,"Day");return n!=null?(n=qi(n,this.localeData()),this.add(n-i,"d")):i}function St(n){if(!this.isValid())return n!=null?this:NaN;var i=(this.day()+7-this.localeData()._week.dow)%7;return n==null?i:this.add(n-i,"d")}function Bi(n){if(!this.isValid())return n!=null?this:NaN;if(n!=null){var i=zi(n,this.localeData());return this.day(this.day()%7?i:i-7)}else return this.day()||7}function Ne(n){return this._weekdaysParseExact?(r(this,"_weekdaysRegex")||Wn.call(this),n?this._weekdaysStrictRegex:this._weekdaysRegex):(r(this,"_weekdaysRegex")||(this._weekdaysRegex=Mi),this._weekdaysStrictRegex&&n?this._weekdaysStrictRegex:this._weekdaysRegex)}function pn(n){return this._weekdaysParseExact?(r(this,"_weekdaysRegex")||Wn.call(this),n?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(r(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=hr),this._weekdaysShortStrictRegex&&n?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function yr(n){return this._weekdaysParseExact?(r(this,"_weekdaysRegex")||Wn.call(this),n?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(r(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=mr),this._weekdaysMinStrictRegex&&n?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Wn(){function n(Ae,bn){return bn.length-Ae.length}var i=[],u=[],l=[],f=[],x,I,Z,K,ae;for(x=0;x<7;x++)I=F([2e3,1]).day(x),Z=Ie(this.weekdaysMin(I,"")),K=Ie(this.weekdaysShort(I,"")),ae=Ie(this.weekdays(I,"")),i.push(Z),u.push(K),l.push(ae),f.push(Z),f.push(K),f.push(ae);i.sort(n),u.sort(n),l.sort(n),f.sort(n),this._weekdaysRegex=new RegExp("^("+f.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+i.join("|")+")","i")}function st(){return this.hours()%12||12}function En(){return this.hours()||24}X("H",["HH",2],0,"hour"),X("h",["hh",2],0,st),X("k",["kk",2],0,En),X("hmm",0,0,function(){return""+st.apply(this)+Se(this.minutes(),2)}),X("hmmss",0,0,function(){return""+st.apply(this)+Se(this.minutes(),2)+Se(this.seconds(),2)}),X("Hmm",0,0,function(){return""+this.hours()+Se(this.minutes(),2)}),X("Hmmss",0,0,function(){return""+this.hours()+Se(this.minutes(),2)+Se(this.seconds(),2)});function Fr(n,i){X(n,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),i)})}Fr("a",!0),Fr("A",!1);function Bt(n,i){return i._meridiemParse}G("a",Bt),G("A",Bt),G("H",fe,Dt),G("h",fe,Fn),G("k",fe,Fn),G("HH",fe,ue),G("hh",fe,ue),G("kk",fe,ue),G("hmm",_t),G("hmmss",ar),G("Hmm",_t),G("Hmmss",ar),oe(["H","HH"],ve),oe(["k","kk"],function(n,i,u){var l=te(n);i[ve]=l===24?0:l}),oe(["a","A"],function(n,i,u){u._isPm=u._locale.isPM(n),u._meridiem=n}),oe(["h","hh"],function(n,i,u){i[ve]=te(n),C(u).bigHour=!0}),oe("hmm",function(n,i,u){var l=n.length-2;i[ve]=te(n.substr(0,l)),i[De]=te(n.substr(l)),C(u).bigHour=!0}),oe("hmmss",function(n,i,u){var l=n.length-4,f=n.length-2;i[ve]=te(n.substr(0,l)),i[De]=te(n.substr(l,2)),i[Be]=te(n.substr(f)),C(u).bigHour=!0}),oe("Hmm",function(n,i,u){var l=n.length-2;i[ve]=te(n.substr(0,l)),i[De]=te(n.substr(l))}),oe("Hmmss",function(n,i,u){var l=n.length-4,f=n.length-2;i[ve]=te(n.substr(0,l)),i[De]=te(n.substr(l,2)),i[Be]=te(n.substr(f))});function wr(n){return(n+"").toLowerCase().charAt(0)==="p"}var Le=/[ap]\.?m?\.?/i,Ii=ln("Hours",!0);function It(n,i,u){return n>11?u?"pm":"PM":u?"am":"AM"}var Cr={calendar:In,longDateFormat:Xe,invalidDate:wt,ordinal:Kt,dayOfMonthOrdinalParse:er,relativeTime:tr,months:Nn,monthsShort:qt,week:Ci,weekdays:Ai,weekdaysMin:gr,weekdaysShort:fr,meridiemParse:Le},he={},$n={},Vn;function _r(n,i){var u,l=Math.min(n.length,i.length);for(u=0;u<l;u+=1)if(n[u]!==i[u])return u;return l}function Tt(n){return n&&n.toLowerCase().replace("_","-")}function Ti(n){for(var i=0,u,l,f,x;i<n.length;){for(x=Tt(n[i]).split("-"),u=x.length,l=Tt(n[i+1]),l=l?l.split("-"):null;u>0;){if(f=fn(x.slice(0,u).join("-")),f)return f;if(l&&l.length>=u&&_r(x,l)>=u-1)break;u--}i++}return Vn}function Ri(n){return!!(n&&n.match("^[^/\\\\]*$"))}function fn(n){var i=null,u;if(he[n]===void 0&&typeof ft<"u"&&ft&&ft.exports&&Ri(n))try{i=Vn._abbr,u=aa,u("./locale/"+n),Ke(i)}catch{he[n]=null}return he[n]}function Ke(n,i){var u;return n&&(p(i)?u=je(n):u=Rt(n,i),u?Vn=u:typeof console<"u"&&console.warn&&console.warn("Locale "+n+" not found. Did you forget to load it?")),Vn._abbr}function Rt(n,i){if(i!==null){var u,l=Cr;if(i.abbr=n,he[n]!=null)re("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),l=he[n]._config;else if(i.parentLocale!=null)if(he[i.parentLocale]!=null)l=he[i.parentLocale]._config;else if(u=fn(i.parentLocale),u!=null)l=u._config;else return $n[i.parentLocale]||($n[i.parentLocale]=[]),$n[i.parentLocale].push({name:n,config:i}),null;return he[n]=new Y(L(l,i)),$n[n]&&$n[n].forEach(function(f){Rt(f.name,f.config)}),Ke(n),he[n]}else return delete he[n],null}function Oi(n,i){if(i!=null){var u,l,f=Cr;he[n]!=null&&he[n].parentLocale!=null?he[n].set(L(he[n]._config,i)):(l=fn(n),l!=null&&(f=l._config),i=L(f,i),l==null&&(i.abbr=n),u=new Y(i),u.parentLocale=he[n],he[n]=u),Ke(n)}else he[n]!=null&&(he[n].parentLocale!=null?(he[n]=he[n].parentLocale,n===Ke()&&Ke(n)):he[n]!=null&&delete he[n]);return he[n]}function je(n){var i;if(n&&n._locale&&n._locale._abbr&&(n=n._locale._abbr),!n)return Vn;if(!s(n)){if(i=fn(n),i)return i;n=[n]}return Ti(n)}function Pi(){return Ge(he)}function Ot(n){var i,u=n._a;return u&&C(n).overflow===-2&&(i=u[Pe]<0||u[Pe]>11?Pe:u[Te]<1||u[Te]>Yn(u[we],u[Pe])?Te:u[ve]<0||u[ve]>24||u[ve]===24&&(u[De]!==0||u[Be]!==0||u[Qe]!==0)?ve:u[De]<0||u[De]>59?De:u[Be]<0||u[Be]>59?Be:u[Qe]<0||u[Qe]>999?Qe:-1,C(n)._overflowDayOfYear&&(i<we||i>Te)&&(i=Te),C(n)._overflowWeeks&&i===-1&&(i=pi),C(n)._overflowWeekday&&i===-1&&(i=Et),C(n).overflow=i),n}var Dr=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Yi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Er=/Z|[+-]\d\d(?::?\d\d)?/,qn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],zn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ni=/^\/?Date\((-?\d+)/i,Li=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,ji={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Pt(n){var i,u,l=n._i,f=Dr.exec(l)||Yi.exec(l),x,I,Z,K,ae=qn.length,Ae=zn.length;if(f){for(C(n).iso=!0,i=0,u=ae;i<u;i++)if(qn[i][1].exec(f[1])){I=qn[i][0],x=qn[i][2]!==!1;break}if(I==null){n._isValid=!1;return}if(f[3]){for(i=0,u=Ae;i<u;i++)if(zn[i][1].exec(f[3])){Z=(f[2]||" ")+zn[i][0];break}if(Z==null){n._isValid=!1;return}}if(!x&&Z!=null){n._isValid=!1;return}if(f[4])if(Er.exec(f[4]))K="Z";else{n._isValid=!1;return}n._f=I+(Z||"")+(K||""),Lt(n)}else n._isValid=!1}function Ui(n,i,u,l,f,x){var I=[Yt(n),qt.indexOf(i),parseInt(u,10),parseInt(l,10),parseInt(f,10)];return x&&I.push(parseInt(x,10)),I}function Yt(n){var i=parseInt(n,10);return i<=49?2e3+i:i<=999?1900+i:i}function Wi(n){return n.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function $i(n,i,u){if(n){var l=fr.indexOf(n),f=new Date(i[0],i[1],i[2]).getDay();if(l!==f)return C(u).weekdayMismatch=!0,u._isValid=!1,!1}return!0}function Nt(n,i,u){if(n)return ji[n];if(i)return 0;var l=parseInt(u,10),f=l%100,x=(l-f)/100;return x*60+f}function qr(n){var i=Li.exec(Wi(n._i)),u;if(i){if(u=Ui(i[4],i[3],i[2],i[5],i[6],i[7]),!$i(i[1],u,n))return;n._a=u,n._tzm=Nt(i[8],i[9],i[10]),n._d=Ln.apply(null,n._a),n._d.setUTCMinutes(n._d.getUTCMinutes()-n._tzm),C(n).rfc2822=!0}else n._isValid=!1}function Vi(n){var i=Ni.exec(n._i);if(i!==null){n._d=new Date(+i[1]);return}if(Pt(n),n._isValid===!1)delete n._isValid;else return;if(qr(n),n._isValid===!1)delete n._isValid;else return;n._strict?n._isValid=!1:e.createFromInputFallback(n)}e.createFromInputFallback=Q("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(n){n._d=new Date(n._i+(n._useUTC?" UTC":""))});function An(n,i,u){return n??i??u}function Hi(n){var i=new Date(e.now());return n._useUTC?[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]:[i.getFullYear(),i.getMonth(),i.getDate()]}function Hn(n){var i,u,l=[],f,x,I;if(!n._d){for(f=Hi(n),n._w&&n._a[Te]==null&&n._a[Pe]==null&&zr(n),n._dayOfYear!=null&&(I=An(n._a[we],f[we]),(n._dayOfYear>Ye(I)||n._dayOfYear===0)&&(C(n)._overflowDayOfYear=!0),u=Ln(I,0,n._dayOfYear),n._a[Pe]=u.getUTCMonth(),n._a[Te]=u.getUTCDate()),i=0;i<3&&n._a[i]==null;++i)n._a[i]=l[i]=f[i];for(;i<7;i++)n._a[i]=l[i]=n._a[i]==null?i===2?1:0:n._a[i];n._a[ve]===24&&n._a[De]===0&&n._a[Be]===0&&n._a[Qe]===0&&(n._nextDay=!0,n._a[ve]=0),n._d=(n._useUTC?Ln:wi).apply(null,l),x=n._useUTC?n._d.getUTCDay():n._d.getDay(),n._tzm!=null&&n._d.setUTCMinutes(n._d.getUTCMinutes()-n._tzm),n._nextDay&&(n._a[ve]=24),n._w&&typeof n._w.d<"u"&&n._w.d!==x&&(C(n).weekdayMismatch=!0)}}function zr(n){var i,u,l,f,x,I,Z,K,ae;i=n._w,i.GG!=null||i.W!=null||i.E!=null?(x=1,I=4,u=An(i.GG,n._a[we],_n(B(),1,4).year),l=An(i.W,1),f=An(i.E,1),(f<1||f>7)&&(K=!0)):(x=n._locale._week.dow,I=n._locale._week.doy,ae=_n(B(),x,I),u=An(i.gg,n._a[we],ae.year),l=An(i.w,ae.week),i.d!=null?(f=i.d,(f<0||f>6)&&(K=!0)):i.e!=null?(f=i.e+x,(i.e<0||i.e>6)&&(K=!0)):f=x),l<1||l>be(u,x,I)?C(n)._overflowWeeks=!0:K!=null?C(n)._overflowWeekday=!0:(Z=dn(u,l,f,x,I),n._a[we]=Z.year,n._dayOfYear=Z.dayOfYear)}e.ISO_8601=function(){},e.RFC_2822=function(){};function Lt(n){if(n._f===e.ISO_8601){Pt(n);return}if(n._f===e.RFC_2822){qr(n);return}n._a=[],C(n).empty=!0;var i=""+n._i,u,l,f,x,I,Z=i.length,K=0,ae,Ae;for(f=Ze(n._f,n._locale).match(yt)||[],Ae=f.length,u=0;u<Ae;u++)x=f[u],l=(i.match(wn(x,n))||[])[0],l&&(I=i.substr(0,i.indexOf(l)),I.length>0&&C(n).unusedInput.push(I),i=i.slice(i.indexOf(l)+l.length),K+=l.length),sn[x]?(l?C(n).empty=!1:C(n).unusedTokens.push(x),di(x,l,n)):n._strict&&!l&&C(n).unusedTokens.push(x);C(n).charsLeftOver=Z-K,i.length>0&&C(n).unusedInput.push(i),n._a[ve]<=12&&C(n).bigHour===!0&&n._a[ve]>0&&(C(n).bigHour=void 0),C(n).parsedDateParts=n._a.slice(0),C(n).meridiem=n._meridiem,n._a[ve]=jt(n._locale,n._a[ve],n._meridiem),ae=C(n).era,ae!==null&&(n._a[we]=n._locale.erasConvertYear(ae,n._a[we])),Hn(n),Ot(n)}function jt(n,i,u){var l;return u==null?i:n.meridiemHour!=null?n.meridiemHour(i,u):(n.isPM!=null&&(l=n.isPM(u),l&&i<12&&(i+=12),!l&&i===12&&(i=0)),i)}function c(n){var i,u,l,f,x,I,Z=!1,K=n._f.length;if(K===0){C(n).invalidFormat=!0,n._d=new Date(NaN);return}for(f=0;f<K;f++)x=0,I=!1,i=y({},n),n._useUTC!=null&&(i._useUTC=n._useUTC),i._f=n._f[f],Lt(i),R(i)&&(I=!0),x+=C(i).charsLeftOver,x+=C(i).unusedTokens.length*10,C(i).score=x,Z?x<l&&(l=x,u=i):(l==null||x<l||I)&&(l=x,u=i,I&&(Z=!0));S(n,u||i)}function d(n){if(!n._d){var i=et(n._i),u=i.day===void 0?i.date:i.day;n._a=q([i.year,i.month,u,i.hour,i.minute,i.second,i.millisecond],function(l){return l&&parseInt(l,10)}),Hn(n)}}function v(n){var i=new z(Ot(k(n)));return i._nextDay&&(i.add(1,"d"),i._nextDay=void 0),i}function k(n){var i=n._i,u=n._f;return n._locale=n._locale||je(n._l),i===null||u===void 0&&i===""?P({nullInput:!0}):(typeof i=="string"&&(n._i=i=n._locale.preparse(i)),E(i)?new z(Ot(i)):(m(i)?n._d=i:s(u)?c(n):u?Lt(n):A(n),R(n)||(n._d=null),n))}function A(n){var i=n._i;p(i)?n._d=new Date(e.now()):m(i)?n._d=new Date(i.valueOf()):typeof i=="string"?Vi(n):s(i)?(n._a=q(i.slice(0),function(u){return parseInt(u,10)}),Hn(n)):t(i)?d(n):h(i)?n._d=new Date(i):e.createFromInputFallback(n)}function w(n,i,u,l,f){var x={};return(i===!0||i===!1)&&(l=i,i=void 0),(u===!0||u===!1)&&(l=u,u=void 0),(t(n)&&g(n)||s(n)&&n.length===0)&&(n=void 0),x._isAMomentObject=!0,x._useUTC=x._isUTC=f,x._l=u,x._i=n,x._f=i,x._strict=l,v(x)}function B(n,i,u,l){return w(n,i,u,l,!1)}var H=Q("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var n=B.apply(null,arguments);return this.isValid()&&n.isValid()?n<this?this:n:P()}),ee=Q("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var n=B.apply(null,arguments);return this.isValid()&&n.isValid()?n>this?this:n:P()});function ne(n,i){var u,l;if(i.length===1&&s(i[0])&&(i=i[0]),!i.length)return B();for(u=i[0],l=1;l<i.length;++l)(!i[l].isValid()||i[l][n](u))&&(u=i[l]);return u}function ke(){var n=[].slice.call(arguments,0);return ne("isBefore",n)}function qe(){var n=[].slice.call(arguments,0);return ne("isAfter",n)}var Ce=function(){return Date.now?Date.now():+new Date},Ue=["year","quarter","month","week","day","hour","minute","second","millisecond"];function ot(n){var i,u=!1,l,f=Ue.length;for(i in n)if(r(n,i)&&!(me.call(Ue,i)!==-1&&(n[i]==null||!isNaN(n[i]))))return!1;for(l=0;l<f;++l)if(n[Ue[l]]){if(u)return!1;parseFloat(n[Ue[l]])!==te(n[Ue[l]])&&(u=!0)}return!0}function ou(){return this._isValid}function uu(){return We(NaN)}function Ar(n){var i=et(n),u=i.year||0,l=i.quarter||0,f=i.month||0,x=i.week||i.isoWeek||0,I=i.day||0,Z=i.hour||0,K=i.minute||0,ae=i.second||0,Ae=i.millisecond||0;this._isValid=ot(i),this._milliseconds=+Ae+ae*1e3+K*6e4+Z*1e3*60*60,this._days=+I+x*7,this._months=+f+l*3+u*12,this._data={},this._locale=je(),this._bubble()}function Mr(n){return n instanceof Ar}function Gi(n){return n<0?Math.round(-1*n)*-1:Math.round(n)}function lu(n,i,u){var l=Math.min(n.length,i.length),f=Math.abs(n.length-i.length),x=0,I;for(I=0;I<l;I++)(u&&n[I]!==i[I]||!u&&te(n[I])!==te(i[I]))&&x++;return x+f}function P1(n,i){X(n,0,0,function(){var u=this.utcOffset(),l="+";return u<0&&(u=-u,l="-"),l+Se(~~(u/60),2)+i+Se(~~u%60,2)})}P1("Z",":"),P1("ZZ",""),G("Z",tt),G("ZZ",tt),oe(["Z","ZZ"],function(n,i,u){u._useUTC=!0,u._tzm=Zi(tt,n)});var cu=/([\+\-]|\d\d)/gi;function Zi(n,i){var u=(i||"").match(n),l,f,x;return u===null?null:(l=u[u.length-1]||[],f=(l+"").match(cu)||["-",0,0],x=+(f[1]*60)+te(f[2]),x===0?0:f[0]==="+"?x:-x)}function Xi(n,i){var u,l;return i._isUTC?(u=i.clone(),l=(E(n)||m(n)?n.valueOf():B(n).valueOf())-u.valueOf(),u._d.setTime(u._d.valueOf()+l),e.updateOffset(u,!1),u):B(n).local()}function Ji(n){return-Math.round(n._d.getTimezoneOffset())}e.updateOffset=function(){};function du(n,i,u){var l=this._offset||0,f;if(!this.isValid())return n!=null?this:NaN;if(n!=null){if(typeof n=="string"){if(n=Zi(tt,n),n===null)return this}else Math.abs(n)<16&&!u&&(n=n*60);return!this._isUTC&&i&&(f=Ji(this)),this._offset=n,this._isUTC=!0,f!=null&&this.add(f,"m"),l!==n&&(!i||this._changeInProgress?j1(this,We(n-l,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?l:Ji(this)}function pu(n,i){return n!=null?(typeof n!="string"&&(n=-n),this.utcOffset(n,i),this):-this.utcOffset()}function fu(n){return this.utcOffset(0,n)}function gu(n){return this._isUTC&&(this.utcOffset(0,n),this._isUTC=!1,n&&this.subtract(Ji(this),"m")),this}function hu(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var n=Zi(sr,this._i);n!=null?this.utcOffset(n):this.utcOffset(0,!0)}return this}function mu(n){return this.isValid()?(n=n?B(n).utcOffset():0,(this.utcOffset()-n)%60===0):!1}function bu(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function vu(){if(!p(this._isDSTShifted))return this._isDSTShifted;var n={},i;return y(n,this),n=k(n),n._a?(i=n._isUTC?F(n._a):B(n._a),this._isDSTShifted=this.isValid()&&lu(n._a,i.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function ku(){return this.isValid()?!this._isUTC:!1}function xu(){return this.isValid()?this._isUTC:!1}function Y1(){return this.isValid()?this._isUTC&&this._offset===0:!1}var yu=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Fu=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function We(n,i){var u=n,l=null,f,x,I;return Mr(n)?u={ms:n._milliseconds,d:n._days,M:n._months}:h(n)||!isNaN(+n)?(u={},i?u[i]=+n:u.milliseconds=+n):(l=yu.exec(n))?(f=l[1]==="-"?-1:1,u={y:0,d:te(l[Te])*f,h:te(l[ve])*f,m:te(l[De])*f,s:te(l[Be])*f,ms:te(Gi(l[Qe]*1e3))*f}):(l=Fu.exec(n))?(f=l[1]==="-"?-1:1,u={y:Gn(l[2],f),M:Gn(l[3],f),w:Gn(l[4],f),d:Gn(l[5],f),h:Gn(l[6],f),m:Gn(l[7],f),s:Gn(l[8],f)}):u==null?u={}:typeof u=="object"&&("from"in u||"to"in u)&&(I=wu(B(u.from),B(u.to)),u={},u.ms=I.milliseconds,u.M=I.months),x=new Ar(u),Mr(n)&&r(n,"_locale")&&(x._locale=n._locale),Mr(n)&&r(n,"_isValid")&&(x._isValid=n._isValid),x}We.fn=Ar.prototype,We.invalid=uu;function Gn(n,i){var u=n&&parseFloat(n.replace(",","."));return(isNaN(u)?0:u)*i}function N1(n,i){var u={};return u.months=i.month()-n.month()+(i.year()-n.year())*12,n.clone().add(u.months,"M").isAfter(i)&&--u.months,u.milliseconds=+i-+n.clone().add(u.months,"M"),u}function wu(n,i){var u;return n.isValid()&&i.isValid()?(i=Xi(i,n),n.isBefore(i)?u=N1(n,i):(u=N1(i,n),u.milliseconds=-u.milliseconds,u.months=-u.months),u):{milliseconds:0,months:0}}function L1(n,i){return function(u,l){var f,x;return l!==null&&!isNaN(+l)&&(re(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),x=u,u=l,l=x),f=We(u,l),j1(this,f,n),this}}function j1(n,i,u,l){var f=i._milliseconds,x=Gi(i._days),I=Gi(i._months);n.isValid()&&(l=l??!0,I&&lr(n,cn(n,"Month")+I*u),x&&Ee(n,"Date",cn(n,"Date")+x*u),f&&n._d.setTime(n._d.valueOf()+f*u),l&&e.updateOffset(n,x||I))}var Cu=L1(1,"add"),_u=L1(-1,"subtract");function U1(n){return typeof n=="string"||n instanceof String}function Du(n){return E(n)||m(n)||U1(n)||h(n)||qu(n)||Eu(n)||n===null||n===void 0}function Eu(n){var i=t(n)&&!g(n),u=!1,l=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],f,x,I=l.length;for(f=0;f<I;f+=1)x=l[f],u=u||r(n,x);return i&&u}function qu(n){var i=s(n),u=!1;return i&&(u=n.filter(function(l){return!h(l)&&U1(n)}).length===0),i&&u}function zu(n){var i=t(n)&&!g(n),u=!1,l=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],f,x;for(f=0;f<l.length;f+=1)x=l[f],u=u||r(n,x);return i&&u}function Au(n,i){var u=n.diff(i,"days",!0);return u<-6?"sameElse":u<-1?"lastWeek":u<0?"lastDay":u<1?"sameDay":u<2?"nextDay":u<7?"nextWeek":"sameElse"}function Mu(n,i){arguments.length===1&&(arguments[0]?Du(arguments[0])?(n=arguments[0],i=void 0):zu(arguments[0])&&(i=arguments[0],n=void 0):(n=void 0,i=void 0));var u=n||B(),l=Xi(u,this).startOf("day"),f=e.calendarFormat(this,l)||"sameElse",x=i&&(N(i[f])?i[f].call(this,u):i[f]);return this.format(x||this.localeData().calendar(f,this,B(u)))}function Su(){return new z(this)}function Bu(n,i){var u=E(n)?n:B(n);return this.isValid()&&u.isValid()?(i=Me(i)||"millisecond",i==="millisecond"?this.valueOf()>u.valueOf():u.valueOf()<this.clone().startOf(i).valueOf()):!1}function Iu(n,i){var u=E(n)?n:B(n);return this.isValid()&&u.isValid()?(i=Me(i)||"millisecond",i==="millisecond"?this.valueOf()<u.valueOf():this.clone().endOf(i).valueOf()<u.valueOf()):!1}function Tu(n,i,u,l){var f=E(n)?n:B(n),x=E(i)?i:B(i);return this.isValid()&&f.isValid()&&x.isValid()?(l=l||"()",(l[0]==="("?this.isAfter(f,u):!this.isBefore(f,u))&&(l[1]===")"?this.isBefore(x,u):!this.isAfter(x,u))):!1}function Ru(n,i){var u=E(n)?n:B(n),l;return this.isValid()&&u.isValid()?(i=Me(i)||"millisecond",i==="millisecond"?this.valueOf()===u.valueOf():(l=u.valueOf(),this.clone().startOf(i).valueOf()<=l&&l<=this.clone().endOf(i).valueOf())):!1}function Ou(n,i){return this.isSame(n,i)||this.isAfter(n,i)}function Pu(n,i){return this.isSame(n,i)||this.isBefore(n,i)}function Yu(n,i,u){var l,f,x;if(!this.isValid())return NaN;if(l=Xi(n,this),!l.isValid())return NaN;switch(f=(l.utcOffset()-this.utcOffset())*6e4,i=Me(i),i){case"year":x=Sr(this,l)/12;break;case"month":x=Sr(this,l);break;case"quarter":x=Sr(this,l)/3;break;case"second":x=(this-l)/1e3;break;case"minute":x=(this-l)/6e4;break;case"hour":x=(this-l)/36e5;break;case"day":x=(this-l-f)/864e5;break;case"week":x=(this-l-f)/6048e5;break;default:x=this-l}return u?x:ze(x)}function Sr(n,i){if(n.date()<i.date())return-Sr(i,n);var u=(i.year()-n.year())*12+(i.month()-n.month()),l=n.clone().add(u,"months"),f,x;return i-l<0?(f=n.clone().add(u-1,"months"),x=(i-l)/(l-f)):(f=n.clone().add(u+1,"months"),x=(i-l)/(f-l)),-(u+x)||0}e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Nu(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Lu(n){if(!this.isValid())return null;var i=n!==!0,u=i?this.clone().utc():this;return u.year()<0||u.year()>9999?on(u,i?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):N(Date.prototype.toISOString)?i?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",on(u,"Z")):on(u,i?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function ju(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var n="moment",i="",u,l,f,x;return this.isLocal()||(n=this.utcOffset()===0?"moment.utc":"moment.parseZone",i="Z"),u="["+n+'("]',l=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",f="-MM-DD[T]HH:mm:ss.SSS",x=i+'[")]',this.format(u+l+f+x)}function Uu(n){n||(n=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var i=on(this,n);return this.localeData().postformat(i)}function Wu(n,i){return this.isValid()&&(E(n)&&n.isValid()||B(n).isValid())?We({to:this,from:n}).locale(this.locale()).humanize(!i):this.localeData().invalidDate()}function $u(n){return this.from(B(),n)}function Vu(n,i){return this.isValid()&&(E(n)&&n.isValid()||B(n).isValid())?We({from:this,to:n}).locale(this.locale()).humanize(!i):this.localeData().invalidDate()}function Hu(n){return this.to(B(),n)}function W1(n){var i;return n===void 0?this._locale._abbr:(i=je(n),i!=null&&(this._locale=i),this)}var $1=Q("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(n){return n===void 0?this.localeData():this.locale(n)});function V1(){return this._locale}var Br=1e3,ut=60*Br,Ir=60*ut,H1=(365*400+97)*24*Ir;function lt(n,i){return(n%i+i)%i}function G1(n,i,u){return n<100&&n>=0?new Date(n+400,i,u)-H1:new Date(n,i,u).valueOf()}function Z1(n,i,u){return n<100&&n>=0?Date.UTC(n+400,i,u)-H1:Date.UTC(n,i,u)}function Gu(n){var i,u;if(n=Me(n),n===void 0||n==="millisecond"||!this.isValid())return this;switch(u=this._isUTC?Z1:G1,n){case"year":i=u(this.year(),0,1);break;case"quarter":i=u(this.year(),this.month()-this.month()%3,1);break;case"month":i=u(this.year(),this.month(),1);break;case"week":i=u(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":i=u(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":i=u(this.year(),this.month(),this.date());break;case"hour":i=this._d.valueOf(),i-=lt(i+(this._isUTC?0:this.utcOffset()*ut),Ir);break;case"minute":i=this._d.valueOf(),i-=lt(i,ut);break;case"second":i=this._d.valueOf(),i-=lt(i,Br);break}return this._d.setTime(i),e.updateOffset(this,!0),this}function Zu(n){var i,u;if(n=Me(n),n===void 0||n==="millisecond"||!this.isValid())return this;switch(u=this._isUTC?Z1:G1,n){case"year":i=u(this.year()+1,0,1)-1;break;case"quarter":i=u(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":i=u(this.year(),this.month()+1,1)-1;break;case"week":i=u(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":i=u(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":i=u(this.year(),this.month(),this.date()+1)-1;break;case"hour":i=this._d.valueOf(),i+=Ir-lt(i+(this._isUTC?0:this.utcOffset()*ut),Ir)-1;break;case"minute":i=this._d.valueOf(),i+=ut-lt(i,ut)-1;break;case"second":i=this._d.valueOf(),i+=Br-lt(i,Br)-1;break}return this._d.setTime(i),e.updateOffset(this,!0),this}function Xu(){return this._d.valueOf()-(this._offset||0)*6e4}function Ju(){return Math.floor(this.valueOf()/1e3)}function Qu(){return new Date(this.valueOf())}function Ku(){var n=this;return[n.year(),n.month(),n.date(),n.hour(),n.minute(),n.second(),n.millisecond()]}function e0(){var n=this;return{years:n.year(),months:n.month(),date:n.date(),hours:n.hours(),minutes:n.minutes(),seconds:n.seconds(),milliseconds:n.milliseconds()}}function n0(){return this.isValid()?this.toISOString():null}function t0(){return R(this)}function r0(){return S({},C(this))}function i0(){return C(this).overflow}function a0(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}X("N",0,0,"eraAbbr"),X("NN",0,0,"eraAbbr"),X("NNN",0,0,"eraAbbr"),X("NNNN",0,0,"eraName"),X("NNNNN",0,0,"eraNarrow"),X("y",["y",1],"yo","eraYear"),X("y",["yy",2],0,"eraYear"),X("y",["yyy",3],0,"eraYear"),X("y",["yyyy",4],0,"eraYear"),G("N",Qi),G("NN",Qi),G("NNN",Qi),G("NNNN",m0),G("NNNNN",b0),oe(["N","NN","NNN","NNNN","NNNNN"],function(n,i,u,l){var f=u._locale.erasParse(n,l,u._strict);f?C(u).era=f:C(u).invalidEra=n}),G("y",un),G("yy",un),G("yyy",un),G("yyyy",un),G("yo",v0),oe(["y","yy","yyy","yyyy"],we),oe(["yo"],function(n,i,u,l){var f;u._locale._eraYearOrdinalRegex&&(f=n.match(u._locale._eraYearOrdinalRegex)),u._locale.eraYearOrdinalParse?i[we]=u._locale.eraYearOrdinalParse(n,f):i[we]=parseInt(n,10)});function s0(n,i){var u,l,f,x=this._eras||je("en")._eras;for(u=0,l=x.length;u<l;++u)switch(typeof x[u].since==="string"&&(f=e(x[u].since).startOf("day"),x[u].since=f.valueOf()),typeof x[u].until){case"undefined":x[u].until=1/0;break;case"string":f=e(x[u].until).startOf("day").valueOf(),x[u].until=f.valueOf();break}return x}function o0(n,i,u){var l,f,x=this.eras(),I,Z,K;for(n=n.toUpperCase(),l=0,f=x.length;l<f;++l)if(I=x[l].name.toUpperCase(),Z=x[l].abbr.toUpperCase(),K=x[l].narrow.toUpperCase(),u)switch(i){case"N":case"NN":case"NNN":if(Z===n)return x[l];break;case"NNNN":if(I===n)return x[l];break;case"NNNNN":if(K===n)return x[l];break}else if([I,Z,K].indexOf(n)>=0)return x[l]}function u0(n,i){var u=n.since<=n.until?1:-1;return i===void 0?e(n.since).year():e(n.since).year()+(i-n.offset)*u}function l0(){var n,i,u,l=this.localeData().eras();for(n=0,i=l.length;n<i;++n)if(u=this.clone().startOf("day").valueOf(),l[n].since<=u&&u<=l[n].until||l[n].until<=u&&u<=l[n].since)return l[n].name;return""}function c0(){var n,i,u,l=this.localeData().eras();for(n=0,i=l.length;n<i;++n)if(u=this.clone().startOf("day").valueOf(),l[n].since<=u&&u<=l[n].until||l[n].until<=u&&u<=l[n].since)return l[n].narrow;return""}function d0(){var n,i,u,l=this.localeData().eras();for(n=0,i=l.length;n<i;++n)if(u=this.clone().startOf("day").valueOf(),l[n].since<=u&&u<=l[n].until||l[n].until<=u&&u<=l[n].since)return l[n].abbr;return""}function p0(){var n,i,u,l,f=this.localeData().eras();for(n=0,i=f.length;n<i;++n)if(u=f[n].since<=f[n].until?1:-1,l=this.clone().startOf("day").valueOf(),f[n].since<=l&&l<=f[n].until||f[n].until<=l&&l<=f[n].since)return(this.year()-e(f[n].since).year())*u+f[n].offset;return this.year()}function f0(n){return r(this,"_erasNameRegex")||Ki.call(this),n?this._erasNameRegex:this._erasRegex}function g0(n){return r(this,"_erasAbbrRegex")||Ki.call(this),n?this._erasAbbrRegex:this._erasRegex}function h0(n){return r(this,"_erasNarrowRegex")||Ki.call(this),n?this._erasNarrowRegex:this._erasRegex}function Qi(n,i){return i.erasAbbrRegex(n)}function m0(n,i){return i.erasNameRegex(n)}function b0(n,i){return i.erasNarrowRegex(n)}function v0(n,i){return i._eraYearOrdinalRegex||un}function Ki(){var n=[],i=[],u=[],l=[],f,x,I,Z,K,ae=this.eras();for(f=0,x=ae.length;f<x;++f)I=Ie(ae[f].name),Z=Ie(ae[f].abbr),K=Ie(ae[f].narrow),i.push(I),n.push(Z),u.push(K),l.push(I),l.push(Z),l.push(K);this._erasRegex=new RegExp("^("+l.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+i.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+u.join("|")+")","i")}X(0,["gg",2],0,function(){return this.weekYear()%100}),X(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Tr(n,i){X(0,[n,n.length],0,i)}Tr("gggg","weekYear"),Tr("ggggg","weekYear"),Tr("GGGG","isoWeekYear"),Tr("GGGGG","isoWeekYear"),G("G",yn),G("g",yn),G("GG",fe,ue),G("gg",fe,ue),G("GGGG",Tn,nt),G("gggg",Tn,nt),G("GGGGG",xn,ie),G("ggggg",xn,ie),Cn(["gggg","ggggg","GGGG","GGGGG"],function(n,i,u,l){i[l.substr(0,2)]=te(n)}),Cn(["gg","GG"],function(n,i,u,l){i[l]=e.parseTwoDigitYear(n)});function k0(n){return X1.call(this,n,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function x0(n){return X1.call(this,n,this.isoWeek(),this.isoWeekday(),1,4)}function y0(){return be(this.year(),1,4)}function F0(){return be(this.isoWeekYear(),1,4)}function w0(){var n=this.localeData()._week;return be(this.year(),n.dow,n.doy)}function C0(){var n=this.localeData()._week;return be(this.weekYear(),n.dow,n.doy)}function X1(n,i,u,l,f){var x;return n==null?_n(this,l,f).year:(x=be(n,l,f),i>x&&(i=x),_0.call(this,n,i,u,l,f))}function _0(n,i,u,l,f){var x=dn(n,i,u,l,f),I=Ln(x.year,0,x.dayOfYear);return this.year(I.getUTCFullYear()),this.month(I.getUTCMonth()),this.date(I.getUTCDate()),this}X("Q",0,"Qo","quarter"),G("Q",Ct),oe("Q",function(n,i){i[Pe]=(te(n)-1)*3});function D0(n){return n==null?Math.ceil((this.month()+1)/3):this.month((n-1)*3+this.month()%3)}X("D",["DD",2],"Do","date"),G("D",fe,Fn),G("DD",fe,ue),G("Do",function(n,i){return n?i._dayOfMonthOrdinalParse||i._ordinalParse:i._dayOfMonthOrdinalParseLenient}),oe(["D","DD"],Te),oe("Do",function(n,i){i[Te]=te(n.match(fe)[0])});var J1=ln("Date",!0);X("DDD",["DDDD",3],"DDDo","dayOfYear"),G("DDD",Je),G("DDDD",ir),oe(["DDD","DDDD"],function(n,i,u){u._dayOfYear=te(n)});function E0(n){var i=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return n==null?i:this.add(n-i,"d")}X("m",["mm",2],0,"minute"),G("m",fe,Dt),G("mm",fe,ue),oe(["m","mm"],De);var q0=ln("Minutes",!1);X("s",["ss",2],0,"second"),G("s",fe,Dt),G("ss",fe,ue),oe(["s","ss"],Be);var z0=ln("Seconds",!1);X("S",0,0,function(){return~~(this.millisecond()/100)}),X(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),X(0,["SSS",3],0,"millisecond"),X(0,["SSSS",4],0,function(){return this.millisecond()*10}),X(0,["SSSSS",5],0,function(){return this.millisecond()*100}),X(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),X(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),X(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),X(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),G("S",Je,Ct),G("SS",Je,ue),G("SSS",Je,ir);var Mn,Q1;for(Mn="SSSS";Mn.length<=9;Mn+="S")G(Mn,un);function A0(n,i){i[Qe]=te(("0."+n)*1e3)}for(Mn="S";Mn.length<=9;Mn+="S")oe(Mn,A0);Q1=ln("Milliseconds",!1),X("z",0,0,"zoneAbbr"),X("zz",0,0,"zoneName");function M0(){return this._isUTC?"UTC":""}function S0(){return this._isUTC?"Coordinated Universal Time":""}var U=z.prototype;U.add=Cu,U.calendar=Mu,U.clone=Su,U.diff=Yu,U.endOf=Zu,U.format=Uu,U.from=Wu,U.fromNow=$u,U.to=Vu,U.toNow=Hu,U.get=fi,U.invalidAt=i0,U.isAfter=Bu,U.isBefore=Iu,U.isBetween=Tu,U.isSame=Ru,U.isSameOrAfter=Ou,U.isSameOrBefore=Pu,U.isValid=t0,U.lang=$1,U.locale=W1,U.localeData=V1,U.max=ee,U.min=H,U.parsingFlags=r0,U.set=ur,U.startOf=Gu,U.subtract=_u,U.toArray=Ku,U.toObject=e0,U.toDate=Qu,U.toISOString=Lu,U.inspect=ju,typeof Symbol<"u"&&Symbol.for!=null&&(U[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),U.toJSON=n0,U.toString=Nu,U.unix=Ju,U.valueOf=Xu,U.creationData=a0,U.eraName=l0,U.eraNarrow=c0,U.eraAbbr=d0,U.eraYear=p0,U.year=at,U.isLeapYear=Pn,U.weekYear=k0,U.isoWeekYear=x0,U.quarter=U.quarters=D0,U.month=cr,U.daysInMonth=xi,U.week=U.weeks=Di,U.isoWeek=U.isoWeeks=Ei,U.weeksInYear=w0,U.weeksInWeekYear=C0,U.isoWeeksInYear=y0,U.isoWeeksInISOWeekYear=F0,U.date=J1,U.day=U.days=Si,U.weekday=St,U.isoWeekday=Bi,U.dayOfYear=E0,U.hour=U.hours=Ii,U.minute=U.minutes=q0,U.second=U.seconds=z0,U.millisecond=U.milliseconds=Q1,U.utcOffset=du,U.utc=fu,U.local=gu,U.parseZone=hu,U.hasAlignedHourOffset=mu,U.isDST=bu,U.isLocal=ku,U.isUtcOffset=xu,U.isUtc=Y1,U.isUTC=Y1,U.zoneAbbr=M0,U.zoneName=S0,U.dates=Q("dates accessor is deprecated. Use date instead.",J1),U.months=Q("months accessor is deprecated. Use month instead",cr),U.years=Q("years accessor is deprecated. Use year instead",at),U.zone=Q("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",pu),U.isDSTShifted=Q("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",vu);function B0(n){return B(n*1e3)}function I0(){return B.apply(null,arguments).parseZone()}function K1(n){return n}var le=Y.prototype;le.calendar=kn,le.longDateFormat=Ft,le.invalidDate=oi,le.ordinal=nr,le.preparse=K1,le.postformat=K1,le.relativeTime=Kn,le.pastFuture=ui,le.set=j,le.eras=s0,le.erasParse=o0,le.erasConvertYear=u0,le.erasAbbrRegex=g0,le.erasNameRegex=f0,le.erasNarrowRegex=h0,le.months=bi,le.monthsShort=vi,le.monthsParse=ki,le.monthsRegex=Fi,le.monthsShortRegex=yi,le.week=Dn,le.firstDayOfYear=pr,le.firstDayOfWeek=_i,le.weekdays=Mt,le.weekdaysMin=vr,le.weekdaysShort=br,le.weekdaysParse=xr,le.weekdaysRegex=Ne,le.weekdaysShortRegex=pn,le.weekdaysMinRegex=yr,le.isPM=wr,le.meridiem=It;function Rr(n,i,u,l){var f=je(),x=F().set(l,i);return f[u](x,n)}function ea(n,i,u){if(h(n)&&(i=n,n=void 0),n=n||"",i!=null)return Rr(n,i,u,"month");var l,f=[];for(l=0;l<12;l++)f[l]=Rr(n,l,u,"month");return f}function e1(n,i,u,l){typeof n=="boolean"?(h(i)&&(u=i,i=void 0),i=i||""):(i=n,u=i,n=!1,h(i)&&(u=i,i=void 0),i=i||"");var f=je(),x=n?f._week.dow:0,I,Z=[];if(u!=null)return Rr(i,(u+x)%7,l,"day");for(I=0;I<7;I++)Z[I]=Rr(i,(I+x)%7,l,"day");return Z}function T0(n,i){return ea(n,i,"months")}function R0(n,i){return ea(n,i,"monthsShort")}function O0(n,i,u){return e1(n,i,u,"weekdays")}function P0(n,i,u){return e1(n,i,u,"weekdaysShort")}function Y0(n,i,u){return e1(n,i,u,"weekdaysMin")}Ke("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(n){var i=n%10,u=te(n%100/10)===1?"th":i===1?"st":i===2?"nd":i===3?"rd":"th";return n+u}}),e.lang=Q("moment.lang is deprecated. Use moment.locale instead.",Ke),e.langData=Q("moment.langData is deprecated. Use moment.localeData instead.",je);var gn=Math.abs;function N0(){var n=this._data;return this._milliseconds=gn(this._milliseconds),this._days=gn(this._days),this._months=gn(this._months),n.milliseconds=gn(n.milliseconds),n.seconds=gn(n.seconds),n.minutes=gn(n.minutes),n.hours=gn(n.hours),n.months=gn(n.months),n.years=gn(n.years),this}function na(n,i,u,l){var f=We(i,u);return n._milliseconds+=l*f._milliseconds,n._days+=l*f._days,n._months+=l*f._months,n._bubble()}function L0(n,i){return na(this,n,i,1)}function j0(n,i){return na(this,n,i,-1)}function ta(n){return n<0?Math.floor(n):Math.ceil(n)}function U0(){var n=this._milliseconds,i=this._days,u=this._months,l=this._data,f,x,I,Z,K;return n>=0&&i>=0&&u>=0||n<=0&&i<=0&&u<=0||(n+=ta(n1(u)+i)*864e5,i=0,u=0),l.milliseconds=n%1e3,f=ze(n/1e3),l.seconds=f%60,x=ze(f/60),l.minutes=x%60,I=ze(x/60),l.hours=I%24,i+=ze(I/24),K=ze(ra(i)),u+=K,i-=ta(n1(K)),Z=ze(u/12),u%=12,l.days=i,l.months=u,l.years=Z,this}function ra(n){return n*4800/146097}function n1(n){return n*146097/4800}function W0(n){if(!this.isValid())return NaN;var i,u,l=this._milliseconds;if(n=Me(n),n==="month"||n==="quarter"||n==="year")switch(i=this._days+l/864e5,u=this._months+ra(i),n){case"month":return u;case"quarter":return u/3;case"year":return u/12}else switch(i=this._days+Math.round(n1(this._months)),n){case"week":return i/7+l/6048e5;case"day":return i+l/864e5;case"hour":return i*24+l/36e5;case"minute":return i*1440+l/6e4;case"second":return i*86400+l/1e3;case"millisecond":return Math.floor(i*864e5)+l;default:throw new Error("Unknown unit "+n)}}function hn(n){return function(){return this.as(n)}}var ia=hn("ms"),$0=hn("s"),V0=hn("m"),H0=hn("h"),G0=hn("d"),Z0=hn("w"),X0=hn("M"),J0=hn("Q"),Q0=hn("y"),K0=ia;function el(){return We(this)}function nl(n){return n=Me(n),this.isValid()?this[n+"s"]():NaN}function Zn(n){return function(){return this.isValid()?this._data[n]:NaN}}var tl=Zn("milliseconds"),rl=Zn("seconds"),il=Zn("minutes"),al=Zn("hours"),sl=Zn("days"),ol=Zn("months"),ul=Zn("years");function ll(){return ze(this.days()/7)}var mn=Math.round,ct={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function cl(n,i,u,l,f){return f.relativeTime(i||1,!!u,n,l)}function dl(n,i,u,l){var f=We(n).abs(),x=mn(f.as("s")),I=mn(f.as("m")),Z=mn(f.as("h")),K=mn(f.as("d")),ae=mn(f.as("M")),Ae=mn(f.as("w")),bn=mn(f.as("y")),Sn=x<=u.ss&&["s",x]||x<u.s&&["ss",x]||I<=1&&["m"]||I<u.m&&["mm",I]||Z<=1&&["h"]||Z<u.h&&["hh",Z]||K<=1&&["d"]||K<u.d&&["dd",K];return u.w!=null&&(Sn=Sn||Ae<=1&&["w"]||Ae<u.w&&["ww",Ae]),Sn=Sn||ae<=1&&["M"]||ae<u.M&&["MM",ae]||bn<=1&&["y"]||["yy",bn],Sn[2]=i,Sn[3]=+n>0,Sn[4]=l,cl.apply(null,Sn)}function pl(n){return n===void 0?mn:typeof n=="function"?(mn=n,!0):!1}function fl(n,i){return ct[n]===void 0?!1:i===void 0?ct[n]:(ct[n]=i,n==="s"&&(ct.ss=i-1),!0)}function gl(n,i){if(!this.isValid())return this.localeData().invalidDate();var u=!1,l=ct,f,x;return typeof n=="object"&&(i=n,n=!1),typeof n=="boolean"&&(u=n),typeof i=="object"&&(l=Object.assign({},ct,i),i.s!=null&&i.ss==null&&(l.ss=i.s-1)),f=this.localeData(),x=dl(this,!u,l,f),u&&(x=f.pastFuture(+this,x)),f.postformat(x)}var t1=Math.abs;function dt(n){return(n>0)-(n<0)||+n}function Or(){if(!this.isValid())return this.localeData().invalidDate();var n=t1(this._milliseconds)/1e3,i=t1(this._days),u=t1(this._months),l,f,x,I,Z=this.asSeconds(),K,ae,Ae,bn;return Z?(l=ze(n/60),f=ze(l/60),n%=60,l%=60,x=ze(u/12),u%=12,I=n?n.toFixed(3).replace(/\.?0+$/,""):"",K=Z<0?"-":"",ae=dt(this._months)!==dt(Z)?"-":"",Ae=dt(this._days)!==dt(Z)?"-":"",bn=dt(this._milliseconds)!==dt(Z)?"-":"",K+"P"+(x?ae+x+"Y":"")+(u?ae+u+"M":"")+(i?Ae+i+"D":"")+(f||l||n?"T":"")+(f?bn+f+"H":"")+(l?bn+l+"M":"")+(n?bn+I+"S":"")):"P0D"}var se=Ar.prototype;se.isValid=ou,se.abs=N0,se.add=L0,se.subtract=j0,se.as=W0,se.asMilliseconds=ia,se.asSeconds=$0,se.asMinutes=V0,se.asHours=H0,se.asDays=G0,se.asWeeks=Z0,se.asMonths=X0,se.asQuarters=J0,se.asYears=Q0,se.valueOf=K0,se._bubble=U0,se.clone=el,se.get=nl,se.milliseconds=tl,se.seconds=rl,se.minutes=il,se.hours=al,se.days=sl,se.weeks=ll,se.months=ol,se.years=ul,se.humanize=gl,se.toISOString=Or,se.toString=Or,se.toJSON=Or,se.locale=W1,se.localeData=V1,se.toIsoString=Q("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Or),se.lang=$1,X("X",0,0,"unix"),X("x",0,0,"valueOf"),G("x",yn),G("X",or),oe("X",function(n,i,u){u._d=new Date(parseFloat(n)*1e3)}),oe("x",function(n,i,u){u._d=new Date(te(n))});return e.version="2.30.1",o(B),e.fn=U,e.min=ke,e.max=qe,e.now=Ce,e.utc=F,e.unix=B0,e.months=T0,e.isDate=m,e.locale=Ke,e.invalid=P,e.duration=We,e.isMoment=E,e.weekdays=O0,e.parseZone=I0,e.localeData=je,e.isDuration=Mr,e.monthsShort=R0,e.weekdaysMin=Y0,e.defineLocale=Rt,e.updateLocale=Oi,e.locales=Pi,e.weekdaysShort=P0,e.normalizeUnits=Me,e.relativeTimeRounding=pl,e.relativeTimeThreshold=fl,e.calendarFormat=Au,e.prototype=U,e.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},e}))});var Na=$((X3,Ya)=>{M();var Tl=Wt(),Pa=Lr();function Rl(a,e){var o="YYYY-MM-DD";return e=e||Tl.date_format,Pa(a,o).format(e)}function Ol(a){var e,o=a.months(),s=a.years(),t=o>1?"months":"month",r=s>1?"years":"year";return o&&s?s+" "+r+" "+o+" "+t:o?o+" "+t:s?s+" "+r:(e=a.days(),e>1?e+" days":e+" day")}function Pl(a,e,o){var s;return a=new Date(a),e=new Date(e),s=Pa.duration(e.getTime()-a.getTime()),o?Ol(s):s}Ya.exports={getFormattedDate:Rl,getDuration:Pl}});var ja=$((K3,La)=>{M();var Q3=Wt(),Yl=Ut();function Nl(a){var e=a.languages;return Yl.find(e,function(o){return o.fluency==="Native speaker"})}La.exports={getNativeLanguage:Nl}});var $a=$((n5,Wa)=>{M();var Ll=Wt(),d1=Oa(),Ua=Na(),jl=ja(),Ul=Ut();function Wl(a){Ul.extend(Ll,a||{})}Wa.exports={setConfig:Wl,getUrlForPicture:d1.getUrlForPicture,getProfile:d1.getProfile,getUrlForProfile:d1.getUrlForProfile,getFormattedDate:Ua.getFormattedDate,getDuration:Ua.getDuration,getNativeLanguage:jl.getNativeLanguage}});var Va=$((r5,$l)=>{$l.exports={Aacute:"\xC1",aacute:"\xE1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223E",acd:"\u223F",acE:"\u223E\u0333",Acirc:"\xC2",acirc:"\xE2",acute:"\xB4",Acy:"\u0410",acy:"\u0430",AElig:"\xC6",aelig:"\xE6",af:"\u2061",Afr:"\u{1D504}",afr:"\u{1D51E}",Agrave:"\xC0",agrave:"\xE0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03B1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2A3F",amp:"&",AMP:"&",andand:"\u2A55",And:"\u2A53",and:"\u2227",andd:"\u2A5C",andslope:"\u2A58",andv:"\u2A5A",ang:"\u2220",ange:"\u29A4",angle:"\u2220",angmsdaa:"\u29A8",angmsdab:"\u29A9",angmsdac:"\u29AA",angmsdad:"\u29AB",angmsdae:"\u29AC",angmsdaf:"\u29AD",angmsdag:"\u29AE",angmsdah:"\u29AF",angmsd:"\u2221",angrt:"\u221F",angrtvb:"\u22BE",angrtvbd:"\u299D",angsph:"\u2222",angst:"\xC5",angzarr:"\u237C",Aogon:"\u0104",aogon:"\u0105",Aopf:"\u{1D538}",aopf:"\u{1D552}",apacir:"\u2A6F",ap:"\u2248",apE:"\u2A70",ape:"\u224A",apid:"\u224B",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224A",Aring:"\xC5",aring:"\xE5",Ascr:"\u{1D49C}",ascr:"\u{1D4B6}",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224D",Atilde:"\xC3",atilde:"\xE3",Auml:"\xC4",auml:"\xE4",awconint:"\u2233",awint:"\u2A11",backcong:"\u224C",backepsilon:"\u03F6",backprime:"\u2035",backsim:"\u223D",backsimeq:"\u22CD",Backslash:"\u2216",Barv:"\u2AE7",barvee:"\u22BD",barwed:"\u2305",Barwed:"\u2306",barwedge:"\u2305",bbrk:"\u23B5",bbrktbrk:"\u23B6",bcong:"\u224C",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201E",becaus:"\u2235",because:"\u2235",Because:"\u2235",bemptyv:"\u29B0",bepsi:"\u03F6",bernou:"\u212C",Bernoullis:"\u212C",Beta:"\u0392",beta:"\u03B2",beth:"\u2136",between:"\u226C",Bfr:"\u{1D505}",bfr:"\u{1D51F}",bigcap:"\u22C2",bigcirc:"\u25EF",bigcup:"\u22C3",bigodot:"\u2A00",bigoplus:"\u2A01",bigotimes:"\u2A02",bigsqcup:"\u2A06",bigstar:"\u2605",bigtriangledown:"\u25BD",bigtriangleup:"\u25B3",biguplus:"\u2A04",bigvee:"\u22C1",bigwedge:"\u22C0",bkarow:"\u290D",blacklozenge:"\u29EB",blacksquare:"\u25AA",blacktriangle:"\u25B4",blacktriangledown:"\u25BE",blacktriangleleft:"\u25C2",blacktriangleright:"\u25B8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20E5",bnequiv:"\u2261\u20E5",bNot:"\u2AED",bnot:"\u2310",Bopf:"\u{1D539}",bopf:"\u{1D553}",bot:"\u22A5",bottom:"\u22A5",bowtie:"\u22C8",boxbox:"\u29C9",boxdl:"\u2510",boxdL:"\u2555",boxDl:"\u2556",boxDL:"\u2557",boxdr:"\u250C",boxdR:"\u2552",boxDr:"\u2553",boxDR:"\u2554",boxh:"\u2500",boxH:"\u2550",boxhd:"\u252C",boxHd:"\u2564",boxhD:"\u2565",boxHD:"\u2566",boxhu:"\u2534",boxHu:"\u2567",boxhU:"\u2568",boxHU:"\u2569",boxminus:"\u229F",boxplus:"\u229E",boxtimes:"\u22A0",boxul:"\u2518",boxuL:"\u255B",boxUl:"\u255C",boxUL:"\u255D",boxur:"\u2514",boxuR:"\u2558",boxUr:"\u2559",boxUR:"\u255A",boxv:"\u2502",boxV:"\u2551",boxvh:"\u253C",boxvH:"\u256A",boxVh:"\u256B",boxVH:"\u256C",boxvl:"\u2524",boxvL:"\u2561",boxVl:"\u2562",boxVL:"\u2563",boxvr:"\u251C",boxvR:"\u255E",boxVr:"\u255F",boxVR:"\u2560",bprime:"\u2035",breve:"\u02D8",Breve:"\u02D8",brvbar:"\xA6",bscr:"\u{1D4B7}",Bscr:"\u212C",bsemi:"\u204F",bsim:"\u223D",bsime:"\u22CD",bsolb:"\u29C5",bsol:"\\",bsolhsub:"\u27C8",bull:"\u2022",bullet:"\u2022",bump:"\u224E",bumpE:"\u2AAE",bumpe:"\u224F",Bumpeq:"\u224E",bumpeq:"\u224F",Cacute:"\u0106",cacute:"\u0107",capand:"\u2A44",capbrcup:"\u2A49",capcap:"\u2A4B",cap:"\u2229",Cap:"\u22D2",capcup:"\u2A47",capdot:"\u2A40",CapitalDifferentialD:"\u2145",caps:"\u2229\uFE00",caret:"\u2041",caron:"\u02C7",Cayleys:"\u212D",ccaps:"\u2A4D",Ccaron:"\u010C",ccaron:"\u010D",Ccedil:"\xC7",ccedil:"\xE7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2A4C",ccupssm:"\u2A50",Cdot:"\u010A",cdot:"\u010B",cedil:"\xB8",Cedilla:"\xB8",cemptyv:"\u29B2",cent:"\xA2",centerdot:"\xB7",CenterDot:"\xB7",cfr:"\u{1D520}",Cfr:"\u212D",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03A7",chi:"\u03C7",circ:"\u02C6",circeq:"\u2257",circlearrowleft:"\u21BA",circlearrowright:"\u21BB",circledast:"\u229B",circledcirc:"\u229A",circleddash:"\u229D",CircleDot:"\u2299",circledR:"\xAE",circledS:"\u24C8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cir:"\u25CB",cirE:"\u29C3",cire:"\u2257",cirfnint:"\u2A10",cirmid:"\u2AEF",cirscir:"\u29C2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201D",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",colon:":",Colon:"\u2237",Colone:"\u2A74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2A6D",Congruent:"\u2261",conint:"\u222E",Conint:"\u222F",ContourIntegral:"\u222E",copf:"\u{1D554}",Copf:"\u2102",coprod:"\u2210",Coproduct:"\u2210",copy:"\xA9",COPY:"\xA9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21B5",cross:"\u2717",Cross:"\u2A2F",Cscr:"\u{1D49E}",cscr:"\u{1D4B8}",csub:"\u2ACF",csube:"\u2AD1",csup:"\u2AD0",csupe:"\u2AD2",ctdot:"\u22EF",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22DE",cuesc:"\u22DF",cularr:"\u21B6",cularrp:"\u293D",cupbrcap:"\u2A48",cupcap:"\u2A46",CupCap:"\u224D",cup:"\u222A",Cup:"\u22D3",cupcup:"\u2A4A",cupdot:"\u228D",cupor:"\u2A45",cups:"\u222A\uFE00",curarr:"\u21B7",curarrm:"\u293C",curlyeqprec:"\u22DE",curlyeqsucc:"\u22DF",curlyvee:"\u22CE",curlywedge:"\u22CF",curren:"\xA4",curvearrowleft:"\u21B6",curvearrowright:"\u21B7",cuvee:"\u22CE",cuwed:"\u22CF",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232D",dagger:"\u2020",Dagger:"\u2021",daleth:"\u2138",darr:"\u2193",Darr:"\u21A1",dArr:"\u21D3",dash:"\u2010",Dashv:"\u2AE4",dashv:"\u22A3",dbkarow:"\u290F",dblac:"\u02DD",Dcaron:"\u010E",dcaron:"\u010F",Dcy:"\u0414",dcy:"\u0434",ddagger:"\u2021",ddarr:"\u21CA",DD:"\u2145",dd:"\u2146",DDotrahd:"\u2911",ddotseq:"\u2A77",deg:"\xB0",Del:"\u2207",Delta:"\u0394",delta:"\u03B4",demptyv:"\u29B1",dfisht:"\u297F",Dfr:"\u{1D507}",dfr:"\u{1D521}",dHar:"\u2965",dharl:"\u21C3",dharr:"\u21C2",DiacriticalAcute:"\xB4",DiacriticalDot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",DiacriticalGrave:"`",DiacriticalTilde:"\u02DC",diam:"\u22C4",diamond:"\u22C4",Diamond:"\u22C4",diamondsuit:"\u2666",diams:"\u2666",die:"\xA8",DifferentialD:"\u2146",digamma:"\u03DD",disin:"\u22F2",div:"\xF7",divide:"\xF7",divideontimes:"\u22C7",divonx:"\u22C7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231E",dlcrop:"\u230D",dollar:"$",Dopf:"\u{1D53B}",dopf:"\u{1D555}",Dot:"\xA8",dot:"\u02D9",DotDot:"\u20DC",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22A1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222F",DoubleDot:"\xA8",DoubleDownArrow:"\u21D3",DoubleLeftArrow:"\u21D0",DoubleLeftRightArrow:"\u21D4",DoubleLeftTee:"\u2AE4",DoubleLongLeftArrow:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",DoubleLongRightArrow:"\u27F9",DoubleRightArrow:"\u21D2",DoubleRightTee:"\u22A8",DoubleUpArrow:"\u21D1",DoubleUpDownArrow:"\u21D5",DoubleVerticalBar:"\u2225",DownArrowBar:"\u2913",downarrow:"\u2193",DownArrow:"\u2193",Downarrow:"\u21D3",DownArrowUpArrow:"\u21F5",DownBreve:"\u0311",downdownarrows:"\u21CA",downharpoonleft:"\u21C3",downharpoonright:"\u21C2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVectorBar:"\u2956",DownLeftVector:"\u21BD",DownRightTeeVector:"\u295F",DownRightVectorBar:"\u2957",DownRightVector:"\u21C1",DownTeeArrow:"\u21A7",DownTee:"\u22A4",drbkarow:"\u2910",drcorn:"\u231F",drcrop:"\u230C",Dscr:"\u{1D49F}",dscr:"\u{1D4B9}",DScy:"\u0405",dscy:"\u0455",dsol:"\u29F6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22F1",dtri:"\u25BF",dtrif:"\u25BE",duarr:"\u21F5",duhar:"\u296F",dwangle:"\u29A6",DZcy:"\u040F",dzcy:"\u045F",dzigrarr:"\u27FF",Eacute:"\xC9",eacute:"\xE9",easter:"\u2A6E",Ecaron:"\u011A",ecaron:"\u011B",Ecirc:"\xCA",ecirc:"\xEA",ecir:"\u2256",ecolon:"\u2255",Ecy:"\u042D",ecy:"\u044D",eDDot:"\u2A77",Edot:"\u0116",edot:"\u0117",eDot:"\u2251",ee:"\u2147",efDot:"\u2252",Efr:"\u{1D508}",efr:"\u{1D522}",eg:"\u2A9A",Egrave:"\xC8",egrave:"\xE8",egs:"\u2A96",egsdot:"\u2A98",el:"\u2A99",Element:"\u2208",elinters:"\u23E7",ell:"\u2113",els:"\u2A95",elsdot:"\u2A97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25FB",emptyv:"\u2205",EmptyVerySmallSquare:"\u25AB",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",ENG:"\u014A",eng:"\u014B",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\u{1D53C}",eopf:"\u{1D556}",epar:"\u22D5",eparsl:"\u29E3",eplus:"\u2A71",epsi:"\u03B5",Epsilon:"\u0395",epsilon:"\u03B5",epsiv:"\u03F5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2A96",eqslantless:"\u2A95",Equal:"\u2A75",equals:"=",EqualTilde:"\u2242",equest:"\u225F",Equilibrium:"\u21CC",equiv:"\u2261",equivDD:"\u2A78",eqvparsl:"\u29E5",erarr:"\u2971",erDot:"\u2253",escr:"\u212F",Escr:"\u2130",esdot:"\u2250",Esim:"\u2A73",esim:"\u2242",Eta:"\u0397",eta:"\u03B7",ETH:"\xD0",eth:"\xF0",Euml:"\xCB",euml:"\xEB",euro:"\u20AC",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",exponentiale:"\u2147",ExponentialE:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\uFB03",fflig:"\uFB00",ffllig:"\uFB04",Ffr:"\u{1D509}",ffr:"\u{1D523}",filig:"\uFB01",FilledSmallSquare:"\u25FC",FilledVerySmallSquare:"\u25AA",fjlig:"fj",flat:"\u266D",fllig:"\uFB02",fltns:"\u25B1",fnof:"\u0192",Fopf:"\u{1D53D}",fopf:"\u{1D557}",forall:"\u2200",ForAll:"\u2200",fork:"\u22D4",forkv:"\u2AD9",Fouriertrf:"\u2131",fpartint:"\u2A0D",frac12:"\xBD",frac13:"\u2153",frac14:"\xBC",frac15:"\u2155",frac16:"\u2159",frac18:"\u215B",frac23:"\u2154",frac25:"\u2156",frac34:"\xBE",frac35:"\u2157",frac38:"\u215C",frac45:"\u2158",frac56:"\u215A",frac58:"\u215D",frac78:"\u215E",frasl:"\u2044",frown:"\u2322",fscr:"\u{1D4BB}",Fscr:"\u2131",gacute:"\u01F5",Gamma:"\u0393",gamma:"\u03B3",Gammad:"\u03DC",gammad:"\u03DD",gap:"\u2A86",Gbreve:"\u011E",gbreve:"\u011F",Gcedil:"\u0122",Gcirc:"\u011C",gcirc:"\u011D",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",ge:"\u2265",gE:"\u2267",gEl:"\u2A8C",gel:"\u22DB",geq:"\u2265",geqq:"\u2267",geqslant:"\u2A7E",gescc:"\u2AA9",ges:"\u2A7E",gesdot:"\u2A80",gesdoto:"\u2A82",gesdotol:"\u2A84",gesl:"\u22DB\uFE00",gesles:"\u2A94",Gfr:"\u{1D50A}",gfr:"\u{1D524}",gg:"\u226B",Gg:"\u22D9",ggg:"\u22D9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gla:"\u2AA5",gl:"\u2277",glE:"\u2A92",glj:"\u2AA4",gnap:"\u2A8A",gnapprox:"\u2A8A",gne:"\u2A88",gnE:"\u2269",gneq:"\u2A88",gneqq:"\u2269",gnsim:"\u22E7",Gopf:"\u{1D53E}",gopf:"\u{1D558}",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22DB",GreaterFullEqual:"\u2267",GreaterGreater:"\u2AA2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2A7E",GreaterTilde:"\u2273",Gscr:"\u{1D4A2}",gscr:"\u210A",gsim:"\u2273",gsime:"\u2A8E",gsiml:"\u2A90",gtcc:"\u2AA7",gtcir:"\u2A7A",gt:">",GT:">",Gt:"\u226B",gtdot:"\u22D7",gtlPar:"\u2995",gtquest:"\u2A7C",gtrapprox:"\u2A86",gtrarr:"\u2978",gtrdot:"\u22D7",gtreqless:"\u22DB",gtreqqless:"\u2A8C",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\uFE00",gvnE:"\u2269\uFE00",Hacek:"\u02C7",hairsp:"\u200A",half:"\xBD",hamilt:"\u210B",HARDcy:"\u042A",hardcy:"\u044A",harrcir:"\u2948",harr:"\u2194",hArr:"\u21D4",harrw:"\u21AD",Hat:"^",hbar:"\u210F",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22B9",hfr:"\u{1D525}",Hfr:"\u210C",HilbertSpace:"\u210B",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21FF",homtht:"\u223B",hookleftarrow:"\u21A9",hookrightarrow:"\u21AA",hopf:"\u{1D559}",Hopf:"\u210D",horbar:"\u2015",HorizontalLine:"\u2500",hscr:"\u{1D4BD}",Hscr:"\u210B",hslash:"\u210F",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224E",HumpEqual:"\u224F",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xCD",iacute:"\xED",ic:"\u2063",Icirc:"\xCE",icirc:"\xEE",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xA1",iff:"\u21D4",ifr:"\u{1D526}",Ifr:"\u2111",Igrave:"\xCC",igrave:"\xEC",ii:"\u2148",iiiint:"\u2A0C",iiint:"\u222D",iinfin:"\u29DC",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Imacr:"\u012A",imacr:"\u012B",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",Im:"\u2111",imof:"\u22B7",imped:"\u01B5",Implies:"\u21D2",incare:"\u2105",in:"\u2208",infin:"\u221E",infintie:"\u29DD",inodot:"\u0131",intcal:"\u22BA",int:"\u222B",Int:"\u222C",integers:"\u2124",Integral:"\u222B",intercal:"\u22BA",Intersection:"\u22C2",intlarhk:"\u2A17",intprod:"\u2A3C",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012E",iogon:"\u012F",Iopf:"\u{1D540}",iopf:"\u{1D55A}",Iota:"\u0399",iota:"\u03B9",iprod:"\u2A3C",iquest:"\xBF",iscr:"\u{1D4BE}",Iscr:"\u2110",isin:"\u2208",isindot:"\u22F5",isinE:"\u22F9",isins:"\u22F4",isinsv:"\u22F3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xCF",iuml:"\xEF",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\u{1D50D}",jfr:"\u{1D527}",jmath:"\u0237",Jopf:"\u{1D541}",jopf:"\u{1D55B}",Jscr:"\u{1D4A5}",jscr:"\u{1D4BF}",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039A",kappa:"\u03BA",kappav:"\u03F0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041A",kcy:"\u043A",Kfr:"\u{1D50E}",kfr:"\u{1D528}",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040C",kjcy:"\u045C",Kopf:"\u{1D542}",kopf:"\u{1D55C}",Kscr:"\u{1D4A6}",kscr:"\u{1D4C0}",lAarr:"\u21DA",Lacute:"\u0139",lacute:"\u013A",laemptyv:"\u29B4",lagran:"\u2112",Lambda:"\u039B",lambda:"\u03BB",lang:"\u27E8",Lang:"\u27EA",langd:"\u2991",langle:"\u27E8",lap:"\u2A85",Laplacetrf:"\u2112",laquo:"\xAB",larrb:"\u21E4",larrbfs:"\u291F",larr:"\u2190",Larr:"\u219E",lArr:"\u21D0",larrfs:"\u291D",larrhk:"\u21A9",larrlp:"\u21AB",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21A2",latail:"\u2919",lAtail:"\u291B",lat:"\u2AAB",late:"\u2AAD",lates:"\u2AAD\uFE00",lbarr:"\u290C",lBarr:"\u290E",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298B",lbrksld:"\u298F",lbrkslu:"\u298D",Lcaron:"\u013D",lcaron:"\u013E",Lcedil:"\u013B",lcedil:"\u013C",lceil:"\u2308",lcub:"{",Lcy:"\u041B",lcy:"\u043B",ldca:"\u2936",ldquo:"\u201C",ldquor:"\u201E",ldrdhar:"\u2967",ldrushar:"\u294B",ldsh:"\u21B2",le:"\u2264",lE:"\u2266",LeftAngleBracket:"\u27E8",LeftArrowBar:"\u21E4",leftarrow:"\u2190",LeftArrow:"\u2190",Leftarrow:"\u21D0",LeftArrowRightArrow:"\u21C6",leftarrowtail:"\u21A2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27E6",LeftDownTeeVector:"\u2961",LeftDownVectorBar:"\u2959",LeftDownVector:"\u21C3",LeftFloor:"\u230A",leftharpoondown:"\u21BD",leftharpoonup:"\u21BC",leftleftarrows:"\u21C7",leftrightarrow:"\u2194",LeftRightArrow:"\u2194",Leftrightarrow:"\u21D4",leftrightarrows:"\u21C6",leftrightharpoons:"\u21CB",leftrightsquigarrow:"\u21AD",LeftRightVector:"\u294E",LeftTeeArrow:"\u21A4",LeftTee:"\u22A3",LeftTeeVector:"\u295A",leftthreetimes:"\u22CB",LeftTriangleBar:"\u29CF",LeftTriangle:"\u22B2",LeftTriangleEqual:"\u22B4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVectorBar:"\u2958",LeftUpVector:"\u21BF",LeftVectorBar:"\u2952",LeftVector:"\u21BC",lEg:"\u2A8B",leg:"\u22DA",leq:"\u2264",leqq:"\u2266",leqslant:"\u2A7D",lescc:"\u2AA8",les:"\u2A7D",lesdot:"\u2A7F",lesdoto:"\u2A81",lesdotor:"\u2A83",lesg:"\u22DA\uFE00",lesges:"\u2A93",lessapprox:"\u2A85",lessdot:"\u22D6",lesseqgtr:"\u22DA",lesseqqgtr:"\u2A8B",LessEqualGreater:"\u22DA",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2AA1",lesssim:"\u2272",LessSlantEqual:"\u2A7D",LessTilde:"\u2272",lfisht:"\u297C",lfloor:"\u230A",Lfr:"\u{1D50F}",lfr:"\u{1D529}",lg:"\u2276",lgE:"\u2A91",lHar:"\u2962",lhard:"\u21BD",lharu:"\u21BC",lharul:"\u296A",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",llarr:"\u21C7",ll:"\u226A",Ll:"\u22D8",llcorner:"\u231E",Lleftarrow:"\u21DA",llhard:"\u296B",lltri:"\u25FA",Lmidot:"\u013F",lmidot:"\u0140",lmoustache:"\u23B0",lmoust:"\u23B0",lnap:"\u2A89",lnapprox:"\u2A89",lne:"\u2A87",lnE:"\u2268",lneq:"\u2A87",lneqq:"\u2268",lnsim:"\u22E6",loang:"\u27EC",loarr:"\u21FD",lobrk:"\u27E6",longleftarrow:"\u27F5",LongLeftArrow:"\u27F5",Longleftarrow:"\u27F8",longleftrightarrow:"\u27F7",LongLeftRightArrow:"\u27F7",Longleftrightarrow:"\u27FA",longmapsto:"\u27FC",longrightarrow:"\u27F6",LongRightArrow:"\u27F6",Longrightarrow:"\u27F9",looparrowleft:"\u21AB",looparrowright:"\u21AC",lopar:"\u2985",Lopf:"\u{1D543}",lopf:"\u{1D55D}",loplus:"\u2A2D",lotimes:"\u2A34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25CA",lozenge:"\u25CA",lozf:"\u29EB",lpar:"(",lparlt:"\u2993",lrarr:"\u21C6",lrcorner:"\u231F",lrhar:"\u21CB",lrhard:"\u296D",lrm:"\u200E",lrtri:"\u22BF",lsaquo:"\u2039",lscr:"\u{1D4C1}",Lscr:"\u2112",lsh:"\u21B0",Lsh:"\u21B0",lsim:"\u2272",lsime:"\u2A8D",lsimg:"\u2A8F",lsqb:"[",lsquo:"\u2018",lsquor:"\u201A",Lstrok:"\u0141",lstrok:"\u0142",ltcc:"\u2AA6",ltcir:"\u2A79",lt:"<",LT:"<",Lt:"\u226A",ltdot:"\u22D6",lthree:"\u22CB",ltimes:"\u22C9",ltlarr:"\u2976",ltquest:"\u2A7B",ltri:"\u25C3",ltrie:"\u22B4",ltrif:"\u25C2",ltrPar:"\u2996",lurdshar:"\u294A",luruhar:"\u2966",lvertneqq:"\u2268\uFE00",lvnE:"\u2268\uFE00",macr:"\xAF",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21A6",mapsto:"\u21A6",mapstodown:"\u21A7",mapstoleft:"\u21A4",mapstoup:"\u21A5",marker:"\u25AE",mcomma:"\u2A29",Mcy:"\u041C",mcy:"\u043C",mdash:"\u2014",mDDot:"\u223A",measuredangle:"\u2221",MediumSpace:"\u205F",Mellintrf:"\u2133",Mfr:"\u{1D510}",mfr:"\u{1D52A}",mho:"\u2127",micro:"\xB5",midast:"*",midcir:"\u2AF0",mid:"\u2223",middot:"\xB7",minusb:"\u229F",minus:"\u2212",minusd:"\u2238",minusdu:"\u2A2A",MinusPlus:"\u2213",mlcp:"\u2ADB",mldr:"\u2026",mnplus:"\u2213",models:"\u22A7",Mopf:"\u{1D544}",mopf:"\u{1D55E}",mp:"\u2213",mscr:"\u{1D4C2}",Mscr:"\u2133",mstpos:"\u223E",Mu:"\u039C",mu:"\u03BC",multimap:"\u22B8",mumap:"\u22B8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20D2",nap:"\u2249",napE:"\u2A70\u0338",napid:"\u224B\u0338",napos:"\u0149",napprox:"\u2249",natural:"\u266E",naturals:"\u2115",natur:"\u266E",nbsp:"\xA0",nbump:"\u224E\u0338",nbumpe:"\u224F\u0338",ncap:"\u2A43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2A6D\u0338",ncup:"\u2A42",Ncy:"\u041D",ncy:"\u043D",ndash:"\u2013",nearhk:"\u2924",nearr:"\u2197",neArr:"\u21D7",nearrow:"\u2197",ne:"\u2260",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200B",NegativeThickSpace:"\u200B",NegativeThinSpace:"\u200B",NegativeVeryThinSpace:"\u200B",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226B",NestedLessLess:"\u226A",NewLine:`
`,nexist:"\u2204",nexists:"\u2204",Nfr:"\u{1D511}",nfr:"\u{1D52B}",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2A7E\u0338",nges:"\u2A7E\u0338",nGg:"\u22D9\u0338",ngsim:"\u2275",nGt:"\u226B\u20D2",ngt:"\u226F",ngtr:"\u226F",nGtv:"\u226B\u0338",nharr:"\u21AE",nhArr:"\u21CE",nhpar:"\u2AF2",ni:"\u220B",nis:"\u22FC",nisd:"\u22FA",niv:"\u220B",NJcy:"\u040A",njcy:"\u045A",nlarr:"\u219A",nlArr:"\u21CD",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nleftarrow:"\u219A",nLeftarrow:"\u21CD",nleftrightarrow:"\u21AE",nLeftrightarrow:"\u21CE",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2A7D\u0338",nles:"\u2A7D\u0338",nless:"\u226E",nLl:"\u22D8\u0338",nlsim:"\u2274",nLt:"\u226A\u20D2",nlt:"\u226E",nltri:"\u22EA",nltrie:"\u22EC",nLtv:"\u226A\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xA0",nopf:"\u{1D55F}",Nopf:"\u2115",Not:"\u2AEC",not:"\xAC",NotCongruent:"\u2262",NotCupCap:"\u226D",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226F",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226B\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2A7E\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224E\u0338",NotHumpEqual:"\u224F\u0338",notin:"\u2209",notindot:"\u22F5\u0338",notinE:"\u22F9\u0338",notinva:"\u2209",notinvb:"\u22F7",notinvc:"\u22F6",NotLeftTriangleBar:"\u29CF\u0338",NotLeftTriangle:"\u22EA",NotLeftTriangleEqual:"\u22EC",NotLess:"\u226E",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226A\u0338",NotLessSlantEqual:"\u2A7D\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2AA2\u0338",NotNestedLessLess:"\u2AA1\u0338",notni:"\u220C",notniva:"\u220C",notnivb:"\u22FE",notnivc:"\u22FD",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2AAF\u0338",NotPrecedesSlantEqual:"\u22E0",NotReverseElement:"\u220C",NotRightTriangleBar:"\u29D0\u0338",NotRightTriangle:"\u22EB",NotRightTriangleEqual:"\u22ED",NotSquareSubset:"\u228F\u0338",NotSquareSubsetEqual:"\u22E2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22E3",NotSubset:"\u2282\u20D2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2AB0\u0338",NotSucceedsSlantEqual:"\u22E1",NotSucceedsTilde:"\u227F\u0338",NotSuperset:"\u2283\u20D2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",nparallel:"\u2226",npar:"\u2226",nparsl:"\u2AFD\u20E5",npart:"\u2202\u0338",npolint:"\u2A14",npr:"\u2280",nprcue:"\u22E0",nprec:"\u2280",npreceq:"\u2AAF\u0338",npre:"\u2AAF\u0338",nrarrc:"\u2933\u0338",nrarr:"\u219B",nrArr:"\u21CF",nrarrw:"\u219D\u0338",nrightarrow:"\u219B",nRightarrow:"\u21CF",nrtri:"\u22EB",nrtrie:"\u22ED",nsc:"\u2281",nsccue:"\u22E1",nsce:"\u2AB0\u0338",Nscr:"\u{1D4A9}",nscr:"\u{1D4C3}",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22E2",nsqsupe:"\u22E3",nsub:"\u2284",nsubE:"\u2AC5\u0338",nsube:"\u2288",nsubset:"\u2282\u20D2",nsubseteq:"\u2288",nsubseteqq:"\u2AC5\u0338",nsucc:"\u2281",nsucceq:"\u2AB0\u0338",nsup:"\u2285",nsupE:"\u2AC6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20D2",nsupseteq:"\u2289",nsupseteqq:"\u2AC6\u0338",ntgl:"\u2279",Ntilde:"\xD1",ntilde:"\xF1",ntlg:"\u2278",ntriangleleft:"\u22EA",ntrianglelefteq:"\u22EC",ntriangleright:"\u22EB",ntrianglerighteq:"\u22ED",Nu:"\u039D",nu:"\u03BD",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224D\u20D2",nvdash:"\u22AC",nvDash:"\u22AD",nVdash:"\u22AE",nVDash:"\u22AF",nvge:"\u2265\u20D2",nvgt:">\u20D2",nvHarr:"\u2904",nvinfin:"\u29DE",nvlArr:"\u2902",nvle:"\u2264\u20D2",nvlt:"<\u20D2",nvltrie:"\u22B4\u20D2",nvrArr:"\u2903",nvrtrie:"\u22B5\u20D2",nvsim:"\u223C\u20D2",nwarhk:"\u2923",nwarr:"\u2196",nwArr:"\u21D6",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xD3",oacute:"\xF3",oast:"\u229B",Ocirc:"\xD4",ocirc:"\xF4",ocir:"\u229A",Ocy:"\u041E",ocy:"\u043E",odash:"\u229D",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2A38",odot:"\u2299",odsold:"\u29BC",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29BF",Ofr:"\u{1D512}",ofr:"\u{1D52C}",ogon:"\u02DB",Ograve:"\xD2",ograve:"\xF2",ogt:"\u29C1",ohbar:"\u29B5",ohm:"\u03A9",oint:"\u222E",olarr:"\u21BA",olcir:"\u29BE",olcross:"\u29BB",oline:"\u203E",olt:"\u29C0",Omacr:"\u014C",omacr:"\u014D",Omega:"\u03A9",omega:"\u03C9",Omicron:"\u039F",omicron:"\u03BF",omid:"\u29B6",ominus:"\u2296",Oopf:"\u{1D546}",oopf:"\u{1D560}",opar:"\u29B7",OpenCurlyDoubleQuote:"\u201C",OpenCurlyQuote:"\u2018",operp:"\u29B9",oplus:"\u2295",orarr:"\u21BB",Or:"\u2A54",or:"\u2228",ord:"\u2A5D",order:"\u2134",orderof:"\u2134",ordf:"\xAA",ordm:"\xBA",origof:"\u22B6",oror:"\u2A56",orslope:"\u2A57",orv:"\u2A5B",oS:"\u24C8",Oscr:"\u{1D4AA}",oscr:"\u2134",Oslash:"\xD8",oslash:"\xF8",osol:"\u2298",Otilde:"\xD5",otilde:"\xF5",otimesas:"\u2A36",Otimes:"\u2A37",otimes:"\u2297",Ouml:"\xD6",ouml:"\xF6",ovbar:"\u233D",OverBar:"\u203E",OverBrace:"\u23DE",OverBracket:"\u23B4",OverParenthesis:"\u23DC",para:"\xB6",parallel:"\u2225",par:"\u2225",parsim:"\u2AF3",parsl:"\u2AFD",part:"\u2202",PartialD:"\u2202",Pcy:"\u041F",pcy:"\u043F",percnt:"%",period:".",permil:"\u2030",perp:"\u22A5",pertenk:"\u2031",Pfr:"\u{1D513}",pfr:"\u{1D52D}",Phi:"\u03A6",phi:"\u03C6",phiv:"\u03D5",phmmat:"\u2133",phone:"\u260E",Pi:"\u03A0",pi:"\u03C0",pitchfork:"\u22D4",piv:"\u03D6",planck:"\u210F",planckh:"\u210E",plankv:"\u210F",plusacir:"\u2A23",plusb:"\u229E",pluscir:"\u2A22",plus:"+",plusdo:"\u2214",plusdu:"\u2A25",pluse:"\u2A72",PlusMinus:"\xB1",plusmn:"\xB1",plussim:"\u2A26",plustwo:"\u2A27",pm:"\xB1",Poincareplane:"\u210C",pointint:"\u2A15",popf:"\u{1D561}",Popf:"\u2119",pound:"\xA3",prap:"\u2AB7",Pr:"\u2ABB",pr:"\u227A",prcue:"\u227C",precapprox:"\u2AB7",prec:"\u227A",preccurlyeq:"\u227C",Precedes:"\u227A",PrecedesEqual:"\u2AAF",PrecedesSlantEqual:"\u227C",PrecedesTilde:"\u227E",preceq:"\u2AAF",precnapprox:"\u2AB9",precneqq:"\u2AB5",precnsim:"\u22E8",pre:"\u2AAF",prE:"\u2AB3",precsim:"\u227E",prime:"\u2032",Prime:"\u2033",primes:"\u2119",prnap:"\u2AB9",prnE:"\u2AB5",prnsim:"\u22E8",prod:"\u220F",Product:"\u220F",profalar:"\u232E",profline:"\u2312",profsurf:"\u2313",prop:"\u221D",Proportional:"\u221D",Proportion:"\u2237",propto:"\u221D",prsim:"\u227E",prurel:"\u22B0",Pscr:"\u{1D4AB}",pscr:"\u{1D4C5}",Psi:"\u03A8",psi:"\u03C8",puncsp:"\u2008",Qfr:"\u{1D514}",qfr:"\u{1D52E}",qint:"\u2A0C",qopf:"\u{1D562}",Qopf:"\u211A",qprime:"\u2057",Qscr:"\u{1D4AC}",qscr:"\u{1D4C6}",quaternions:"\u210D",quatint:"\u2A16",quest:"?",questeq:"\u225F",quot:'"',QUOT:'"',rAarr:"\u21DB",race:"\u223D\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221A",raemptyv:"\u29B3",rang:"\u27E9",Rang:"\u27EB",rangd:"\u2992",range:"\u29A5",rangle:"\u27E9",raquo:"\xBB",rarrap:"\u2975",rarrb:"\u21E5",rarrbfs:"\u2920",rarrc:"\u2933",rarr:"\u2192",Rarr:"\u21A0",rArr:"\u21D2",rarrfs:"\u291E",rarrhk:"\u21AA",rarrlp:"\u21AC",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21A3",rarrw:"\u219D",ratail:"\u291A",rAtail:"\u291C",ratio:"\u2236",rationals:"\u211A",rbarr:"\u290D",rBarr:"\u290F",RBarr:"\u2910",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298C",rbrksld:"\u298E",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201D",rdquor:"\u201D",rdsh:"\u21B3",real:"\u211C",realine:"\u211B",realpart:"\u211C",reals:"\u211D",Re:"\u211C",rect:"\u25AD",reg:"\xAE",REG:"\xAE",ReverseElement:"\u220B",ReverseEquilibrium:"\u21CB",ReverseUpEquilibrium:"\u296F",rfisht:"\u297D",rfloor:"\u230B",rfr:"\u{1D52F}",Rfr:"\u211C",rHar:"\u2964",rhard:"\u21C1",rharu:"\u21C0",rharul:"\u296C",Rho:"\u03A1",rho:"\u03C1",rhov:"\u03F1",RightAngleBracket:"\u27E9",RightArrowBar:"\u21E5",rightarrow:"\u2192",RightArrow:"\u2192",Rightarrow:"\u21D2",RightArrowLeftArrow:"\u21C4",rightarrowtail:"\u21A3",RightCeiling:"\u2309",RightDoubleBracket:"\u27E7",RightDownTeeVector:"\u295D",RightDownVectorBar:"\u2955",RightDownVector:"\u21C2",RightFloor:"\u230B",rightharpoondown:"\u21C1",rightharpoonup:"\u21C0",rightleftarrows:"\u21C4",rightleftharpoons:"\u21CC",rightrightarrows:"\u21C9",rightsquigarrow:"\u219D",RightTeeArrow:"\u21A6",RightTee:"\u22A2",RightTeeVector:"\u295B",rightthreetimes:"\u22CC",RightTriangleBar:"\u29D0",RightTriangle:"\u22B3",RightTriangleEqual:"\u22B5",RightUpDownVector:"\u294F",RightUpTeeVector:"\u295C",RightUpVectorBar:"\u2954",RightUpVector:"\u21BE",RightVectorBar:"\u2953",RightVector:"\u21C0",ring:"\u02DA",risingdotseq:"\u2253",rlarr:"\u21C4",rlhar:"\u21CC",rlm:"\u200F",rmoustache:"\u23B1",rmoust:"\u23B1",rnmid:"\u2AEE",roang:"\u27ED",roarr:"\u21FE",robrk:"\u27E7",ropar:"\u2986",ropf:"\u{1D563}",Ropf:"\u211D",roplus:"\u2A2E",rotimes:"\u2A35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2A12",rrarr:"\u21C9",Rrightarrow:"\u21DB",rsaquo:"\u203A",rscr:"\u{1D4C7}",Rscr:"\u211B",rsh:"\u21B1",Rsh:"\u21B1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22CC",rtimes:"\u22CA",rtri:"\u25B9",rtrie:"\u22B5",rtrif:"\u25B8",rtriltri:"\u29CE",RuleDelayed:"\u29F4",ruluhar:"\u2968",rx:"\u211E",Sacute:"\u015A",sacute:"\u015B",sbquo:"\u201A",scap:"\u2AB8",Scaron:"\u0160",scaron:"\u0161",Sc:"\u2ABC",sc:"\u227B",sccue:"\u227D",sce:"\u2AB0",scE:"\u2AB4",Scedil:"\u015E",scedil:"\u015F",Scirc:"\u015C",scirc:"\u015D",scnap:"\u2ABA",scnE:"\u2AB6",scnsim:"\u22E9",scpolint:"\u2A13",scsim:"\u227F",Scy:"\u0421",scy:"\u0441",sdotb:"\u22A1",sdot:"\u22C5",sdote:"\u2A66",searhk:"\u2925",searr:"\u2198",seArr:"\u21D8",searrow:"\u2198",sect:"\xA7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\u{1D516}",sfr:"\u{1D530}",sfrown:"\u2322",sharp:"\u266F",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xAD",Sigma:"\u03A3",sigma:"\u03C3",sigmaf:"\u03C2",sigmav:"\u03C2",sim:"\u223C",simdot:"\u2A6A",sime:"\u2243",simeq:"\u2243",simg:"\u2A9E",simgE:"\u2AA0",siml:"\u2A9D",simlE:"\u2A9F",simne:"\u2246",simplus:"\u2A24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2A33",smeparsl:"\u29E4",smid:"\u2223",smile:"\u2323",smt:"\u2AAA",smte:"\u2AAC",smtes:"\u2AAC\uFE00",SOFTcy:"\u042C",softcy:"\u044C",solbar:"\u233F",solb:"\u29C4",sol:"/",Sopf:"\u{1D54A}",sopf:"\u{1D564}",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\uFE00",sqcup:"\u2294",sqcups:"\u2294\uFE00",Sqrt:"\u221A",sqsub:"\u228F",sqsube:"\u2291",sqsubset:"\u228F",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",square:"\u25A1",Square:"\u25A1",SquareIntersection:"\u2293",SquareSubset:"\u228F",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25AA",squ:"\u25A1",squf:"\u25AA",srarr:"\u2192",Sscr:"\u{1D4AE}",sscr:"\u{1D4C8}",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22C6",Star:"\u22C6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03F5",straightphi:"\u03D5",strns:"\xAF",sub:"\u2282",Sub:"\u22D0",subdot:"\u2ABD",subE:"\u2AC5",sube:"\u2286",subedot:"\u2AC3",submult:"\u2AC1",subnE:"\u2ACB",subne:"\u228A",subplus:"\u2ABF",subrarr:"\u2979",subset:"\u2282",Subset:"\u22D0",subseteq:"\u2286",subseteqq:"\u2AC5",SubsetEqual:"\u2286",subsetneq:"\u228A",subsetneqq:"\u2ACB",subsim:"\u2AC7",subsub:"\u2AD5",subsup:"\u2AD3",succapprox:"\u2AB8",succ:"\u227B",succcurlyeq:"\u227D",Succeeds:"\u227B",SucceedsEqual:"\u2AB0",SucceedsSlantEqual:"\u227D",SucceedsTilde:"\u227F",succeq:"\u2AB0",succnapprox:"\u2ABA",succneqq:"\u2AB6",succnsim:"\u22E9",succsim:"\u227F",SuchThat:"\u220B",sum:"\u2211",Sum:"\u2211",sung:"\u266A",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",sup:"\u2283",Sup:"\u22D1",supdot:"\u2ABE",supdsub:"\u2AD8",supE:"\u2AC6",supe:"\u2287",supedot:"\u2AC4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27C9",suphsub:"\u2AD7",suplarr:"\u297B",supmult:"\u2AC2",supnE:"\u2ACC",supne:"\u228B",supplus:"\u2AC0",supset:"\u2283",Supset:"\u22D1",supseteq:"\u2287",supseteqq:"\u2AC6",supsetneq:"\u228B",supsetneqq:"\u2ACC",supsim:"\u2AC8",supsub:"\u2AD4",supsup:"\u2AD6",swarhk:"\u2926",swarr:"\u2199",swArr:"\u21D9",swarrow:"\u2199",swnwar:"\u292A",szlig:"\xDF",Tab:"	",target:"\u2316",Tau:"\u03A4",tau:"\u03C4",tbrk:"\u23B4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20DB",telrec:"\u2315",Tfr:"\u{1D517}",tfr:"\u{1D531}",there4:"\u2234",therefore:"\u2234",Therefore:"\u2234",Theta:"\u0398",theta:"\u03B8",thetasym:"\u03D1",thetav:"\u03D1",thickapprox:"\u2248",thicksim:"\u223C",ThickSpace:"\u205F\u200A",ThinSpace:"\u2009",thinsp:"\u2009",thkap:"\u2248",thksim:"\u223C",THORN:"\xDE",thorn:"\xFE",tilde:"\u02DC",Tilde:"\u223C",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",timesbar:"\u2A31",timesb:"\u22A0",times:"\xD7",timesd:"\u2A30",tint:"\u222D",toea:"\u2928",topbot:"\u2336",topcir:"\u2AF1",top:"\u22A4",Topf:"\u{1D54B}",topf:"\u{1D565}",topfork:"\u2ADA",tosa:"\u2929",tprime:"\u2034",trade:"\u2122",TRADE:"\u2122",triangle:"\u25B5",triangledown:"\u25BF",triangleleft:"\u25C3",trianglelefteq:"\u22B4",triangleq:"\u225C",triangleright:"\u25B9",trianglerighteq:"\u22B5",tridot:"\u25EC",trie:"\u225C",triminus:"\u2A3A",TripleDot:"\u20DB",triplus:"\u2A39",trisb:"\u29CD",tritime:"\u2A3B",trpezium:"\u23E2",Tscr:"\u{1D4AF}",tscr:"\u{1D4C9}",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040B",tshcy:"\u045B",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226C",twoheadleftarrow:"\u219E",twoheadrightarrow:"\u21A0",Uacute:"\xDA",uacute:"\xFA",uarr:"\u2191",Uarr:"\u219F",uArr:"\u21D1",Uarrocir:"\u2949",Ubrcy:"\u040E",ubrcy:"\u045E",Ubreve:"\u016C",ubreve:"\u016D",Ucirc:"\xDB",ucirc:"\xFB",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21C5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296E",ufisht:"\u297E",Ufr:"\u{1D518}",ufr:"\u{1D532}",Ugrave:"\xD9",ugrave:"\xF9",uHar:"\u2963",uharl:"\u21BF",uharr:"\u21BE",uhblk:"\u2580",ulcorn:"\u231C",ulcorner:"\u231C",ulcrop:"\u230F",ultri:"\u25F8",Umacr:"\u016A",umacr:"\u016B",uml:"\xA8",UnderBar:"_",UnderBrace:"\u23DF",UnderBracket:"\u23B5",UnderParenthesis:"\u23DD",Union:"\u22C3",UnionPlus:"\u228E",Uogon:"\u0172",uogon:"\u0173",Uopf:"\u{1D54C}",uopf:"\u{1D566}",UpArrowBar:"\u2912",uparrow:"\u2191",UpArrow:"\u2191",Uparrow:"\u21D1",UpArrowDownArrow:"\u21C5",updownarrow:"\u2195",UpDownArrow:"\u2195",Updownarrow:"\u21D5",UpEquilibrium:"\u296E",upharpoonleft:"\u21BF",upharpoonright:"\u21BE",uplus:"\u228E",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",upsi:"\u03C5",Upsi:"\u03D2",upsih:"\u03D2",Upsilon:"\u03A5",upsilon:"\u03C5",UpTeeArrow:"\u21A5",UpTee:"\u22A5",upuparrows:"\u21C8",urcorn:"\u231D",urcorner:"\u231D",urcrop:"\u230E",Uring:"\u016E",uring:"\u016F",urtri:"\u25F9",Uscr:"\u{1D4B0}",uscr:"\u{1D4CA}",utdot:"\u22F0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25B5",utrif:"\u25B4",uuarr:"\u21C8",Uuml:"\xDC",uuml:"\xFC",uwangle:"\u29A7",vangrt:"\u299C",varepsilon:"\u03F5",varkappa:"\u03F0",varnothing:"\u2205",varphi:"\u03D5",varpi:"\u03D6",varpropto:"\u221D",varr:"\u2195",vArr:"\u21D5",varrho:"\u03F1",varsigma:"\u03C2",varsubsetneq:"\u228A\uFE00",varsubsetneqq:"\u2ACB\uFE00",varsupsetneq:"\u228B\uFE00",varsupsetneqq:"\u2ACC\uFE00",vartheta:"\u03D1",vartriangleleft:"\u22B2",vartriangleright:"\u22B3",vBar:"\u2AE8",Vbar:"\u2AEB",vBarv:"\u2AE9",Vcy:"\u0412",vcy:"\u0432",vdash:"\u22A2",vDash:"\u22A8",Vdash:"\u22A9",VDash:"\u22AB",Vdashl:"\u2AE6",veebar:"\u22BB",vee:"\u2228",Vee:"\u22C1",veeeq:"\u225A",vellip:"\u22EE",verbar:"|",Verbar:"\u2016",vert:"|",Vert:"\u2016",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200A",Vfr:"\u{1D519}",vfr:"\u{1D533}",vltri:"\u22B2",vnsub:"\u2282\u20D2",vnsup:"\u2283\u20D2",Vopf:"\u{1D54D}",vopf:"\u{1D567}",vprop:"\u221D",vrtri:"\u22B3",Vscr:"\u{1D4B1}",vscr:"\u{1D4CB}",vsubnE:"\u2ACB\uFE00",vsubne:"\u228A\uFE00",vsupnE:"\u2ACC\uFE00",vsupne:"\u228B\uFE00",Vvdash:"\u22AA",vzigzag:"\u299A",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2A5F",wedge:"\u2227",Wedge:"\u22C0",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\u{1D51A}",wfr:"\u{1D534}",Wopf:"\u{1D54E}",wopf:"\u{1D568}",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\u{1D4B2}",wscr:"\u{1D4CC}",xcap:"\u22C2",xcirc:"\u25EF",xcup:"\u22C3",xdtri:"\u25BD",Xfr:"\u{1D51B}",xfr:"\u{1D535}",xharr:"\u27F7",xhArr:"\u27FA",Xi:"\u039E",xi:"\u03BE",xlarr:"\u27F5",xlArr:"\u27F8",xmap:"\u27FC",xnis:"\u22FB",xodot:"\u2A00",Xopf:"\u{1D54F}",xopf:"\u{1D569}",xoplus:"\u2A01",xotime:"\u2A02",xrarr:"\u27F6",xrArr:"\u27F9",Xscr:"\u{1D4B3}",xscr:"\u{1D4CD}",xsqcup:"\u2A06",xuplus:"\u2A04",xutri:"\u25B3",xvee:"\u22C1",xwedge:"\u22C0",Yacute:"\xDD",yacute:"\xFD",YAcy:"\u042F",yacy:"\u044F",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042B",ycy:"\u044B",yen:"\xA5",Yfr:"\u{1D51C}",yfr:"\u{1D536}",YIcy:"\u0407",yicy:"\u0457",Yopf:"\u{1D550}",yopf:"\u{1D56A}",Yscr:"\u{1D4B4}",yscr:"\u{1D4CE}",YUcy:"\u042E",yucy:"\u044E",yuml:"\xFF",Yuml:"\u0178",Zacute:"\u0179",zacute:"\u017A",Zcaron:"\u017D",zcaron:"\u017E",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017B",zdot:"\u017C",zeetrf:"\u2128",ZeroWidthSpace:"\u200B",Zeta:"\u0396",zeta:"\u03B6",zfr:"\u{1D537}",Zfr:"\u2128",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21DD",zopf:"\u{1D56B}",Zopf:"\u2124",Zscr:"\u{1D4B5}",zscr:"\u{1D4CF}",zwj:"\u200D",zwnj:"\u200C"}});var p1=$((i5,Ha)=>{"use strict";M();Ha.exports=Va()});var jr=$((s5,Ga)=>{M();Ga.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/});var Ja=$((u5,Xa)=>{"use strict";M();var Za={};function Vl(a){var e,o,s=Za[a];if(s)return s;for(s=Za[a]=[],e=0;e<128;e++)o=String.fromCharCode(e),/^[0-9a-z]$/i.test(o)?s.push(o):s.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<a.length;e++)s[a.charCodeAt(e)]=a[e];return s}function Ur(a,e,o){var s,t,r,g,p,h="";for(typeof e!="string"&&(o=e,e=Ur.defaultChars),typeof o>"u"&&(o=!0),p=Vl(e),s=0,t=a.length;s<t;s++){if(r=a.charCodeAt(s),o&&r===37&&s+2<t&&/^[0-9a-f]{2}$/i.test(a.slice(s+1,s+3))){h+=a.slice(s,s+3),s+=2;continue}if(r<128){h+=p[r];continue}if(r>=55296&&r<=57343){if(r>=55296&&r<=56319&&s+1<t&&(g=a.charCodeAt(s+1),g>=56320&&g<=57343)){h+=encodeURIComponent(a[s]+a[s+1]),s++;continue}h+="%EF%BF%BD";continue}h+=encodeURIComponent(a[s])}return h}Ur.defaultChars=";/?:@&=+$,-_.!~*'()#";Ur.componentChars="-_.!~*'()";Xa.exports=Ur});var e2=$((c5,Ka)=>{"use strict";M();var Qa={};function Hl(a){var e,o,s=Qa[a];if(s)return s;for(s=Qa[a]=[],e=0;e<128;e++)o=String.fromCharCode(e),s.push(o);for(e=0;e<a.length;e++)o=a.charCodeAt(e),s[o]="%"+("0"+o.toString(16).toUpperCase()).slice(-2);return s}function Wr(a,e){var o;return typeof e!="string"&&(e=Wr.defaultChars),o=Hl(e),a.replace(/(%[a-f0-9]{2})+/gi,function(s){var t,r,g,p,h,m,q,S="";for(t=0,r=s.length;t<r;t+=3){if(g=parseInt(s.slice(t+1,t+3),16),g<128){S+=o[g];continue}if((g&224)===192&&t+3<r&&(p=parseInt(s.slice(t+4,t+6),16),(p&192)===128)){q=g<<6&1984|p&63,q<128?S+="\uFFFD\uFFFD":S+=String.fromCharCode(q),t+=3;continue}if((g&240)===224&&t+6<r&&(p=parseInt(s.slice(t+4,t+6),16),h=parseInt(s.slice(t+7,t+9),16),(p&192)===128&&(h&192)===128)){q=g<<12&61440|p<<6&4032|h&63,q<2048||q>=55296&&q<=57343?S+="\uFFFD\uFFFD\uFFFD":S+=String.fromCharCode(q),t+=6;continue}if((g&248)===240&&t+9<r&&(p=parseInt(s.slice(t+4,t+6),16),h=parseInt(s.slice(t+7,t+9),16),m=parseInt(s.slice(t+10,t+12),16),(p&192)===128&&(h&192)===128&&(m&192)===128)){q=g<<18&1835008|p<<12&258048|h<<6&4032|m&63,q<65536||q>1114111?S+="\uFFFD\uFFFD\uFFFD\uFFFD":(q-=65536,S+=String.fromCharCode(55296+(q>>10),56320+(q&1023))),t+=9;continue}S+="\uFFFD"}return S})}Wr.defaultChars=";/?:@&=+$,#";Wr.componentChars="";Ka.exports=Wr});var t2=$((p5,n2)=>{"use strict";M();n2.exports=function(e){var o="";return o+=e.protocol||"",o+=e.slashes?"//":"",o+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?o+="["+e.hostname+"]":o+=e.hostname||"",o+=e.port?":"+e.port:"",o+=e.pathname||"",o+=e.search||"",o+=e.hash||"",o}});var l2=$((g5,u2)=>{"use strict";M();function $r(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var Gl=/^([a-z0-9.+-]+:)/i,Zl=/:[0-9]*$/,Xl=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Jl=["<",">",'"',"`"," ","\r",`
`,"	"],Ql=["{","}","|","\\","^","`"].concat(Jl),Kl=["'"].concat(Ql),r2=["%","/","?",";","#"].concat(Kl),i2=["/","?","#"],ec=255,a2=/^[+a-z0-9A-Z_-]{0,63}$/,nc=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,s2={javascript:!0,"javascript:":!0},o2={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function tc(a,e){if(a&&a instanceof $r)return a;var o=new $r;return o.parse(a,e),o}$r.prototype.parse=function(a,e){var o,s,t,r,g,p=a;if(p=p.trim(),!e&&a.split("#").length===1){var h=Xl.exec(p);if(h)return this.pathname=h[1],h[2]&&(this.search=h[2]),this}var m=Gl.exec(p);if(m&&(m=m[0],t=m.toLowerCase(),this.protocol=m,p=p.substr(m.length)),(e||m||p.match(/^\/\/[^@\/]+@[^@\/]+/))&&(g=p.substr(0,2)==="//",g&&!(m&&s2[m])&&(p=p.substr(2),this.slashes=!0)),!s2[m]&&(g||m&&!o2[m])){var q=-1;for(o=0;o<i2.length;o++)r=p.indexOf(i2[o]),r!==-1&&(q===-1||r<q)&&(q=r);var S,F;for(q===-1?F=p.lastIndexOf("@"):F=p.lastIndexOf("@",q),F!==-1&&(S=p.slice(0,F),p=p.slice(F+1),this.auth=S),q=-1,o=0;o<r2.length;o++)r=p.indexOf(r2[o]),r!==-1&&(q===-1||r<q)&&(q=r);q===-1&&(q=p.length),p[q-1]===":"&&q--;var D=p.slice(0,q);p=p.slice(q),this.parseHost(D),this.hostname=this.hostname||"";var C=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!C){var b=this.hostname.split(/\./);for(o=0,s=b.length;o<s;o++){var R=b[o];if(R&&!R.match(a2)){for(var P="",T=0,O=R.length;T<O;T++)R.charCodeAt(T)>127?P+="x":P+=R[T];if(!P.match(a2)){var y=b.slice(0,o),z=b.slice(o+1),E=R.match(nc);E&&(y.push(E[1]),z.unshift(E[2])),z.length&&(p=z.join(".")+p),this.hostname=y.join(".");break}}}}this.hostname.length>ec&&(this.hostname=""),C&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var J=p.indexOf("#");J!==-1&&(this.hash=p.substr(J),p=p.slice(0,J));var Q=p.indexOf("?");return Q!==-1&&(this.search=p.substr(Q),p=p.slice(0,Q)),p&&(this.pathname=p),o2[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};$r.prototype.parseHost=function(a){var e=Zl.exec(a);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),a=a.substr(0,a.length-e.length)),a&&(this.hostname=a)};u2.exports=tc});var f1=$((m5,Ht)=>{"use strict";M();Ht.exports.encode=Ja();Ht.exports.decode=e2();Ht.exports.format=t2();Ht.exports.parse=l2()});var g1=$((v5,c2)=>{M();c2.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/});var h1=$((x5,d2)=>{M();d2.exports=/[\0-\x1F\x7F-\x9F]/});var f2=$((F5,p2)=>{M();p2.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/});var m1=$((C5,g2)=>{M();g2.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/});var h2=$(gt=>{"use strict";M();gt.Any=g1();gt.Cc=h1();gt.Cf=f2();gt.P=jr();gt.Z=m1()});var de=$(ye=>{"use strict";M();function rc(a){return Object.prototype.toString.call(a)}function ic(a){return rc(a)==="[object String]"}var ac=Object.prototype.hasOwnProperty;function b2(a,e){return ac.call(a,e)}function sc(a){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(o){if(o){if(typeof o!="object")throw new TypeError(o+"must be object");Object.keys(o).forEach(function(s){a[s]=o[s]})}}),a}function oc(a,e,o){return[].concat(a.slice(0,e),o,a.slice(e+1))}function v2(a){return!(a>=55296&&a<=57343||a>=64976&&a<=65007||(a&65535)===65535||(a&65535)===65534||a>=0&&a<=8||a===11||a>=14&&a<=31||a>=127&&a<=159||a>1114111)}function k2(a){if(a>65535){a-=65536;var e=55296+(a>>10),o=56320+(a&1023);return String.fromCharCode(e,o)}return String.fromCharCode(a)}var x2=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,uc=/&([a-z#][a-z0-9]{1,31});/gi,lc=new RegExp(x2.source+"|"+uc.source,"gi"),cc=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,m2=p1();function dc(a,e){var o=0;return b2(m2,e)?m2[e]:e.charCodeAt(0)===35&&cc.test(e)&&(o=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10),v2(o))?k2(o):a}function pc(a){return a.indexOf("\\")<0?a:a.replace(x2,"$1")}function fc(a){return a.indexOf("\\")<0&&a.indexOf("&")<0?a:a.replace(lc,function(e,o,s){return o||dc(e,s)})}var gc=/[&<>"]/,hc=/[&<>"]/g,mc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function bc(a){return mc[a]}function vc(a){return gc.test(a)?a.replace(hc,bc):a}var kc=/[.?*+^$[\]\\(){}|-]/g;function xc(a){return a.replace(kc,"\\$&")}function yc(a){switch(a){case 9:case 32:return!0}return!1}function Fc(a){if(a>=8192&&a<=8202)return!0;switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var wc=jr();function Cc(a){return wc.test(a)}function _c(a){switch(a){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Dc(a){return a.trim().replace(/\s+/g," ").toUpperCase()}ye.lib={};ye.lib.mdurl=f1();ye.lib.ucmicro=h2();ye.assign=sc;ye.isString=ic;ye.has=b2;ye.unescapeMd=pc;ye.unescapeAll=fc;ye.isValidEntityCode=v2;ye.fromCodePoint=k2;ye.escapeHtml=vc;ye.arrayReplaceAt=oc;ye.isSpace=yc;ye.isWhiteSpace=Fc;ye.isMdAsciiPunct=_c;ye.isPunctChar=Cc;ye.escapeRE=xc;ye.normalizeReference=Dc});var Vr=$((A5,y2)=>{"use strict";M();y2.exports=function(e,o,s){var t,r,g,p,h=-1,m=e.posMax,q=e.pos;for(e.pos=o+1,t=1;e.pos<m;){if(g=e.src.charCodeAt(e.pos),g===93&&(t--,t===0)){r=!0;break}if(p=e.pos,e.md.inline.skipToken(e),g===91){if(p===e.pos-1)t++;else if(s)return e.pos=q,-1}}return r&&(h=e.pos),e.pos=q,h}});var Gt=$((S5,w2)=>{"use strict";M();var Ec=de().isSpace,F2=de().unescapeAll;w2.exports=function(e,o,s){var t,r,g=0,p=o,h={ok:!1,pos:0,lines:0,str:""};if(e.charCodeAt(o)===60){for(o++;o<s;){if(t=e.charCodeAt(o),t===10||Ec(t))return h;if(t===62)return h.pos=o+1,h.str=F2(e.slice(p+1,o)),h.ok=!0,h;if(t===92&&o+1<s){o+=2;continue}o++}return h}for(r=0;o<s&&(t=e.charCodeAt(o),!(t===32||t<32||t===127));){if(t===92&&o+1<s){o+=2;continue}if(t===40&&(r++,r>1)||t===41&&(r--,r<0))break;o++}return p===o||(h.str=F2(e.slice(p,o)),h.lines=g,h.pos=o,h.ok=!0),h}});var Zt=$((I5,C2)=>{"use strict";M();var qc=de().unescapeAll;C2.exports=function(e,o,s){var t,r,g=0,p=o,h={ok:!1,pos:0,lines:0,str:""};if(o>=s||(r=e.charCodeAt(o),r!==34&&r!==39&&r!==40))return h;for(o++,r===40&&(r=41);o<s;){if(t=e.charCodeAt(o),t===r)return h.pos=o+1,h.lines=g,h.str=qc(e.slice(p+1,o)),h.ok=!0,h;t===10?g++:t===92&&o+1<s&&(o++,e.charCodeAt(o)===10&&g++),o++}return h}});var _2=$(Hr=>{"use strict";M();Hr.parseLinkLabel=Vr();Hr.parseLinkDestination=Gt();Hr.parseLinkTitle=Zt()});var E2=$((P5,D2)=>{"use strict";M();var zc=de().assign,Ac=de().unescapeAll,Xn=de().escapeHtml,en={};en.code_inline=function(a,e,o,s,t){var r=a[e],g=t.renderAttrs(r);return"<code"+(g?" "+g:"")+">"+Xn(a[e].content)+"</code>"};en.code_block=function(a,e,o,s,t){var r=a[e],g=t.renderAttrs(r);return"<pre"+(g?" "+g:"")+"><code>"+Xn(a[e].content)+`</code></pre>
`};en.fence=function(a,e,o,s,t){var r=a[e],g=r.info?Ac(r.info).trim():"",p="",h,m,q,S;return g&&(p=g.split(/\s+/g)[0]),o.highlight?h=o.highlight(r.content,p)||Xn(r.content):h=Xn(r.content),h.indexOf("<pre")===0?h+`
`:g?(m=r.attrIndex("class"),q=r.attrs?r.attrs.slice():[],m<0?q.push(["class",o.langPrefix+p]):q[m]+=" "+o.langPrefix+p,S={attrs:q},"<pre><code"+t.renderAttrs(S)+">"+h+`</code></pre>
`):"<pre><code"+t.renderAttrs(r)+">"+h+`</code></pre>
`};en.image=function(a,e,o,s,t){var r=a[e];return r.attrs[r.attrIndex("alt")][1]=t.renderInlineAsText(r.children,o,s),t.renderToken(a,e,o)};en.hardbreak=function(a,e,o){return o.xhtmlOut?`<br />
`:`<br>
`};en.softbreak=function(a,e,o){return o.breaks?o.xhtmlOut?`<br />
`:`<br>
`:`
`};en.text=function(a,e){return Xn(a[e].content)};en.html_block=function(a,e){return a[e].content};en.html_inline=function(a,e){return a[e].content};function ht(){this.rules=zc({},en)}ht.prototype.renderAttrs=function(e){var o,s,t;if(!e.attrs)return"";for(t="",o=0,s=e.attrs.length;o<s;o++)t+=" "+Xn(e.attrs[o][0])+'="'+Xn(e.attrs[o][1])+'"';return t};ht.prototype.renderToken=function(e,o,s){var t,r="",g=!1,p=e[o];return p.hidden?"":(p.block&&p.nesting!==-1&&o&&e[o-1].hidden&&(r+=`
`),r+=(p.nesting===-1?"</":"<")+p.tag,r+=this.renderAttrs(p),p.nesting===0&&s.xhtmlOut&&(r+=" /"),p.block&&(g=!0,p.nesting===1&&o+1<e.length&&(t=e[o+1],(t.type==="inline"||t.hidden||t.nesting===-1&&t.tag===p.tag)&&(g=!1))),r+=g?`>
`:">",r)};ht.prototype.renderInline=function(a,e,o){for(var s,t="",r=this.rules,g=0,p=a.length;g<p;g++)s=a[g].type,typeof r[s]<"u"?t+=r[s](a,g,e,o,this):t+=this.renderToken(a,g,e);return t};ht.prototype.renderInlineAsText=function(a,e,o){for(var s="",t=0,r=a.length;t<r;t++)a[t].type==="text"?s+=a[t].content:a[t].type==="image"&&(s+=this.renderInlineAsText(a[t].children,e,o));return s};ht.prototype.render=function(a,e,o){var s,t,r,g="",p=this.rules;for(s=0,t=a.length;s<t;s++)r=a[s].type,r==="inline"?g+=this.renderInline(a[s].children,e,o):typeof p[r]<"u"?g+=p[a[s].type](a,s,e,o,this):g+=this.renderToken(a,s,e,o);return g};D2.exports=ht});var Gr=$((N5,q2)=>{"use strict";M();function $e(){this.__rules__=[],this.__cache__=null}$e.prototype.__find__=function(a){for(var e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===a)return e;return-1};$e.prototype.__compile__=function(){var a=this,e=[""];a.__rules__.forEach(function(o){o.enabled&&o.alt.forEach(function(s){e.indexOf(s)<0&&e.push(s)})}),a.__cache__={},e.forEach(function(o){a.__cache__[o]=[],a.__rules__.forEach(function(s){s.enabled&&(o&&s.alt.indexOf(o)<0||a.__cache__[o].push(s.fn))})})};$e.prototype.at=function(a,e,o){var s=this.__find__(a),t=o||{};if(s===-1)throw new Error("Parser rule not found: "+a);this.__rules__[s].fn=e,this.__rules__[s].alt=t.alt||[],this.__cache__=null};$e.prototype.before=function(a,e,o,s){var t=this.__find__(a),r=s||{};if(t===-1)throw new Error("Parser rule not found: "+a);this.__rules__.splice(t,0,{name:e,enabled:!0,fn:o,alt:r.alt||[]}),this.__cache__=null};$e.prototype.after=function(a,e,o,s){var t=this.__find__(a),r=s||{};if(t===-1)throw new Error("Parser rule not found: "+a);this.__rules__.splice(t+1,0,{name:e,enabled:!0,fn:o,alt:r.alt||[]}),this.__cache__=null};$e.prototype.push=function(a,e,o){var s=o||{};this.__rules__.push({name:a,enabled:!0,fn:e,alt:s.alt||[]}),this.__cache__=null};$e.prototype.enable=function(a,e){Array.isArray(a)||(a=[a]);var o=[];return a.forEach(function(s){var t=this.__find__(s);if(t<0){if(e)return;throw new Error("Rules manager: invalid rule name "+s)}this.__rules__[t].enabled=!0,o.push(s)},this),this.__cache__=null,o};$e.prototype.enableOnly=function(a,e){Array.isArray(a)||(a=[a]),this.__rules__.forEach(function(o){o.enabled=!1}),this.enable(a,e)};$e.prototype.disable=function(a,e){Array.isArray(a)||(a=[a]);var o=[];return a.forEach(function(s){var t=this.__find__(s);if(t<0){if(e)return;throw new Error("Rules manager: invalid rule name "+s)}this.__rules__[t].enabled=!1,o.push(s)},this),this.__cache__=null,o};$e.prototype.getRules=function(a){return this.__cache__===null&&this.__compile__(),this.__cache__[a]||[]};q2.exports=$e});var A2=$((j5,z2)=>{"use strict";M();var Mc=/\r[\n\u0085]?|[\u2424\u2028\u0085]/g,Sc=/\u0000/g;z2.exports=function(e){var o;o=e.src.replace(Mc,`
`),o=o.replace(Sc,"\uFFFD"),e.src=o}});var S2=$((W5,M2)=>{"use strict";M();M2.exports=function(e){var o;e.inlineMode?(o=new e.Token("inline","",0),o.content=e.src,o.map=[0,1],o.children=[],e.tokens.push(o)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}});var I2=$((V5,B2)=>{"use strict";M();B2.exports=function(e){var o=e.tokens,s,t,r;for(t=0,r=o.length;t<r;t++)s=o[t],s.type==="inline"&&e.md.inline.parse(s.content,e.md,e.env,s.children)}});var R2=$((G5,T2)=>{"use strict";M();var Bc=de().arrayReplaceAt;function Ic(a){return/^<a[>\s]/i.test(a)}function Tc(a){return/^<\/a\s*>/i.test(a)}T2.exports=function(e){var o,s,t,r,g,p,h,m,q,S,F,D,C,b,R,P,T=e.tokens,O;if(e.md.options.linkify){for(s=0,t=T.length;s<t;s++)if(!(T[s].type!=="inline"||!e.md.linkify.pretest(T[s].content)))for(r=T[s].children,C=0,o=r.length-1;o>=0;o--){if(p=r[o],p.type==="link_close"){for(o--;r[o].level!==p.level&&r[o].type!=="link_open";)o--;continue}if(p.type==="html_inline"&&(Ic(p.content)&&C>0&&C--,Tc(p.content)&&C++),!(C>0)&&p.type==="text"&&e.md.linkify.test(p.content)){for(q=p.content,O=e.md.linkify.match(q),h=[],D=p.level,F=0,m=0;m<O.length;m++)b=O[m].url,R=e.md.normalizeLink(b),e.md.validateLink(R)&&(P=O[m].text,O[m].schema?O[m].schema==="mailto:"&&!/^mailto:/i.test(P)?P=e.md.normalizeLinkText("mailto:"+P).replace(/^mailto:/,""):P=e.md.normalizeLinkText(P):P=e.md.normalizeLinkText("http://"+P).replace(/^http:\/\//,""),S=O[m].index,S>F&&(g=new e.Token("text","",0),g.content=q.slice(F,S),g.level=D,h.push(g)),g=new e.Token("link_open","a",1),g.attrs=[["href",R]],g.level=D++,g.markup="linkify",g.info="auto",h.push(g),g=new e.Token("text","",0),g.content=P,g.level=D,h.push(g),g=new e.Token("link_close","a",-1),g.level=--D,g.markup="linkify",g.info="auto",h.push(g),F=O[m].lastIndex);F<q.length&&(g=new e.Token("text","",0),g.content=q.slice(F),g.level=D,h.push(g)),T[s].children=r=Bc(r,o,h)}}}}});var Y2=$((X5,P2)=>{"use strict";M();var O2=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Rc=/\((c|tm|r|p)\)/i,Oc=/\((c|tm|r|p)\)/ig,Pc={c:"\xA9",r:"\xAE",p:"\xA7",tm:"\u2122"};function Yc(a,e){return Pc[e.toLowerCase()]}function Nc(a){var e,o;for(e=a.length-1;e>=0;e--)o=a[e],o.type==="text"&&(o.content=o.content.replace(Oc,Yc))}function Lc(a){var e,o;for(e=a.length-1;e>=0;e--)o=a[e],o.type==="text"&&O2.test(o.content)&&(o.content=o.content.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/mg,"$1\u2014$2").replace(/(^|\s)--(\s|$)/mg,"$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/mg,"$1\u2013$2"))}P2.exports=function(e){var o;if(e.md.options.typographer)for(o=e.tokens.length-1;o>=0;o--)e.tokens[o].type==="inline"&&(Rc.test(e.tokens[o].content)&&Nc(e.tokens[o].children),O2.test(e.tokens[o].content)&&Lc(e.tokens[o].children))}});var V2=$((Q5,$2)=>{"use strict";M();var N2=de().isWhiteSpace,L2=de().isPunctChar,j2=de().isMdAsciiPunct,jc=/['"]/,U2=/['"]/g,W2="\u2019";function Zr(a,e,o){return a.substr(0,e)+o+a.substr(e+1)}function Uc(a,e){var o,s,t,r,g,p,h,m,q,S,F,D,C,b,R,P,T,O,y,z,E;for(y=[],o=0;o<a.length;o++){for(s=a[o],h=a[o].level,T=y.length-1;T>=0&&!(y[T].level<=h);T--);if(y.length=T+1,s.type==="text"){t=s.content,g=0,p=t.length;e:for(;g<p&&(U2.lastIndex=g,r=U2.exec(t),!!r);){if(R=P=!0,g=r.index+1,O=r[0]==="'",q=32,r.index-1>=0)q=t.charCodeAt(r.index-1);else for(T=o-1;T>=0;T--)if(a[T].type==="text"){q=a[T].content.charCodeAt(a[T].content.length-1);break}if(S=32,g<p)S=t.charCodeAt(g);else for(T=o+1;T<a.length;T++)if(a[T].type==="text"){S=a[T].content.charCodeAt(0);break}if(F=j2(q)||L2(String.fromCharCode(q)),D=j2(S)||L2(String.fromCharCode(S)),C=N2(q),b=N2(S),b?R=!1:D&&(C||F||(R=!1)),C?P=!1:F&&(b||D||(P=!1)),S===34&&r[0]==='"'&&q>=48&&q<=57&&(P=R=!1),R&&P&&(R=!1,P=D),!R&&!P){O&&(s.content=Zr(s.content,r.index,W2));continue}if(P){for(T=y.length-1;T>=0&&(m=y[T],!(y[T].level<h));T--)if(m.single===O&&y[T].level===h){m=y[T],O?(z=e.md.options.quotes[2],E=e.md.options.quotes[3]):(z=e.md.options.quotes[0],E=e.md.options.quotes[1]),s.content=Zr(s.content,r.index,E),a[m.token].content=Zr(a[m.token].content,m.pos,z),g+=E.length-1,m.token===o&&(g+=z.length-1),t=s.content,p=t.length,y.length=T;continue e}}R?y.push({token:o,pos:r.index,single:O,level:h}):P&&O&&(s.content=Zr(s.content,r.index,W2))}}}}$2.exports=function(e){var o;if(e.md.options.typographer)for(o=e.tokens.length-1;o>=0;o--)e.tokens[o].type!=="inline"||!jc.test(e.tokens[o].content)||Uc(e.tokens[o].children,e)}});var Xr=$((e8,H2)=>{"use strict";M();function mt(a,e,o){this.type=a,this.tag=e,this.attrs=null,this.map=null,this.nesting=o,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}mt.prototype.attrIndex=function(e){var o,s,t;if(!this.attrs)return-1;for(o=this.attrs,s=0,t=o.length;s<t;s++)if(o[s][0]===e)return s;return-1};mt.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};mt.prototype.attrSet=function(e,o){var s=this.attrIndex(e),t=[e,o];s<0?this.attrPush(t):this.attrs[s]=t};mt.prototype.attrGet=function(e){var o=this.attrIndex(e),s=null;return o>=0&&(s=this.attrs[o][1]),s};mt.prototype.attrJoin=function(e,o){var s=this.attrIndex(e);s<0?this.attrPush([e,o]):this.attrs[s][1]=this.attrs[s][1]+" "+o};H2.exports=mt});var X2=$((t8,Z2)=>{"use strict";M();var Wc=Xr();function G2(a,e,o){this.src=a,this.env=o,this.tokens=[],this.inlineMode=!1,this.md=e}G2.prototype.Token=Wc;Z2.exports=G2});var Q2=$((i8,J2)=>{"use strict";M();var $c=Gr(),b1=[["normalize",A2()],["block",S2()],["inline",I2()],["linkify",R2()],["replacements",Y2()],["smartquotes",V2()]];function v1(){this.ruler=new $c;for(var a=0;a<b1.length;a++)this.ruler.push(b1[a][0],b1[a][1])}v1.prototype.process=function(a){var e,o,s;for(s=this.ruler.getRules(""),e=0,o=s.length;e<o;e++)s[e](a)};v1.prototype.State=X2();J2.exports=v1});var ns=$((s8,es)=>{"use strict";M();function k1(a,e){var o=a.bMarks[e]+a.blkIndent,s=a.eMarks[e];return a.src.substr(o,s-o)}function K2(a){var e=[],o=0,s=a.length,t,r=0,g=0,p=!1,h=0;for(t=a.charCodeAt(o);o<s;)t===96&&r%2===0?(p=!p,h=o):t===124&&r%2===0&&!p?(e.push(a.substring(g,o)),g=o+1):t===92?r++:r=0,o++,o===s&&p&&(p=!1,o=h+1),t=a.charCodeAt(o);return e.push(a.substring(g)),e}es.exports=function(e,o,s,t){var r,g,p,h,m,q,S,F,D,C,b,R;if(o+2>s||(m=o+1,e.sCount[m]<e.blkIndent)||(p=e.bMarks[m]+e.tShift[m],p>=e.eMarks[m])||(r=e.src.charCodeAt(p),r!==124&&r!==45&&r!==58)||(g=k1(e,o+1),!/^[-:| ]+$/.test(g)))return!1;for(q=g.split("|"),D=[],h=0;h<q.length;h++){if(C=q[h].trim(),!C){if(h===0||h===q.length-1)continue;return!1}if(!/^:?-+:?$/.test(C))return!1;C.charCodeAt(C.length-1)===58?D.push(C.charCodeAt(0)===58?"center":"right"):C.charCodeAt(0)===58?D.push("left"):D.push("")}if(g=k1(e,o).trim(),g.indexOf("|")===-1||(q=K2(g.replace(/^\||\|$/g,"")),S=q.length,S>D.length))return!1;if(t)return!0;for(F=e.push("table_open","table",1),F.map=b=[o,0],F=e.push("thead_open","thead",1),F.map=[o,o+1],F=e.push("tr_open","tr",1),F.map=[o,o+1],h=0;h<q.length;h++)F=e.push("th_open","th",1),F.map=[o,o+1],D[h]&&(F.attrs=[["style","text-align:"+D[h]]]),F=e.push("inline","",0),F.content=q[h].trim(),F.map=[o,o+1],F.children=[],F=e.push("th_close","th",-1);for(F=e.push("tr_close","tr",-1),F=e.push("thead_close","thead",-1),F=e.push("tbody_open","tbody",1),F.map=R=[o+2,0],m=o+2;m<s&&!(e.sCount[m]<e.blkIndent||(g=k1(e,m),g.indexOf("|")===-1));m++){for(q=K2(g.replace(/^\||\|\s*$/g,"")),F=e.push("tr_open","tr",1),h=0;h<S;h++)F=e.push("td_open","td",1),D[h]&&(F.attrs=[["style","text-align:"+D[h]]]),F=e.push("inline","",0),F.content=q[h]?q[h].trim():"",F.children=[],F=e.push("td_close","td",-1);F=e.push("tr_close","tr",-1)}return F=e.push("tbody_close","tbody",-1),F=e.push("table_close","table",-1),b[1]=R[1]=m,e.line=m,!0}});var rs=$((u8,ts)=>{"use strict";M();ts.exports=function(e,o,s){var t,r,g,p=0;if(e.sCount[o]-e.blkIndent<4)return!1;for(r=t=o+1;t<s;){if(e.isEmpty(t)){if(p++,p>=2&&e.parentType==="list")break;t++;continue}if(p=0,e.sCount[t]-e.blkIndent>=4){t++,r=t;continue}break}return e.line=r,g=e.push("code_block","code",0),g.content=e.getLines(o,r,4+e.blkIndent,!0),g.map=[o,e.line],!0}});var as=$((c8,is)=>{"use strict";M();is.exports=function(e,o,s,t){var r,g,p,h,m,q,S,F=!1,D=e.bMarks[o]+e.tShift[o],C=e.eMarks[o];if(D+3>C||(r=e.src.charCodeAt(D),r!==126&&r!==96)||(m=D,D=e.skipChars(D,r),g=D-m,g<3)||(S=e.src.slice(m,D),p=e.src.slice(D,C),p.indexOf("`")>=0))return!1;if(t)return!0;for(h=o;h++,!(h>=s||(D=m=e.bMarks[h]+e.tShift[h],C=e.eMarks[h],D<C&&e.sCount[h]<e.blkIndent));)if(e.src.charCodeAt(D)===r&&!(e.sCount[h]-e.blkIndent>=4)&&(D=e.skipChars(D,r),!(D-m<g)&&(D=e.skipSpaces(D),!(D<C)))){F=!0;break}return g=e.sCount[o],e.line=h+(F?1:0),q=e.push("fence","code",0),q.info=p,q.content=e.getLines(o+1,h,g,!0),q.markup=S,q.map=[o,e.line],!0}});var us=$((p8,os)=>{"use strict";M();var ss=de().isSpace;os.exports=function(e,o,s,t){var r,g,p,h,m,q,S,F,D,C,b,R,P,T,O,y,z=e.bMarks[o]+e.tShift[o],E=e.eMarks[o];if(e.src.charCodeAt(z++)!==62)return!1;if(t)return!0;for(e.src.charCodeAt(z)===32&&z++,q=e.blkIndent,e.blkIndent=0,D=C=e.sCount[o]+z-(e.bMarks[o]+e.tShift[o]),m=[e.bMarks[o]],e.bMarks[o]=z;z<E&&(b=e.src.charCodeAt(z),ss(b));){b===9?C+=4-C%4:C++;z++}for(g=z>=E,h=[e.sCount[o]],e.sCount[o]=C-D,p=[e.tShift[o]],e.tShift[o]=z-e.bMarks[o],R=e.md.block.ruler.getRules("blockquote"),r=o+1;r<s&&!(e.sCount[r]<q||(z=e.bMarks[r]+e.tShift[r],E=e.eMarks[r],z>=E));r++){if(e.src.charCodeAt(z++)===62){for(e.src.charCodeAt(z)===32&&z++,D=C=e.sCount[r]+z-(e.bMarks[r]+e.tShift[r]),m.push(e.bMarks[r]),e.bMarks[r]=z;z<E&&(b=e.src.charCodeAt(z),ss(b));){b===9?C+=4-C%4:C++;z++}g=z>=E,h.push(e.sCount[r]),e.sCount[r]=C-D,p.push(e.tShift[r]),e.tShift[r]=z-e.bMarks[r];continue}if(g)break;for(y=!1,T=0,O=R.length;T<O;T++)if(R[T](e,r,s,!0)){y=!0;break}if(y)break;m.push(e.bMarks[r]),p.push(e.tShift[r]),h.push(e.sCount[r]),e.sCount[r]=-1}for(S=e.parentType,e.parentType="blockquote",P=e.push("blockquote_open","blockquote",1),P.markup=">",P.map=F=[o,0],e.md.block.tokenize(e,o,r),P=e.push("blockquote_close","blockquote",-1),P.markup=">",e.parentType=S,F[1]=e.line,T=0;T<p.length;T++)e.bMarks[T+o]=m[T],e.tShift[T+o]=p[T],e.sCount[T+o]=h[T];return e.blkIndent=q,!0}});var cs=$((g8,ls)=>{"use strict";M();var Vc=de().isSpace;ls.exports=function(e,o,s,t){var r,g,p,h,m=e.bMarks[o]+e.tShift[o],q=e.eMarks[o];if(r=e.src.charCodeAt(m++),r!==42&&r!==45&&r!==95)return!1;for(g=1;m<q;){if(p=e.src.charCodeAt(m++),p!==r&&!Vc(p))return!1;p===r&&g++}return g<3?!1:(t||(e.line=o+1,h=e.push("hr","hr",0),h.map=[o,e.line],h.markup=Array(g+1).join(String.fromCharCode(r))),!0)}});var gs=$((m8,fs)=>{"use strict";M();var x1=de().isSpace;function ds(a,e){var o,s,t,r;return s=a.bMarks[e]+a.tShift[e],t=a.eMarks[e],o=a.src.charCodeAt(s++),o!==42&&o!==45&&o!==43||s<t&&(r=a.src.charCodeAt(s),!x1(r))?-1:s}function ps(a,e){var o,s=a.bMarks[e]+a.tShift[e],t=s,r=a.eMarks[e];if(t+1>=r||(o=a.src.charCodeAt(t++),o<48||o>57))return-1;for(;;){if(t>=r)return-1;if(o=a.src.charCodeAt(t++),o>=48&&o<=57){if(t-s>=10)return-1;continue}if(o===41||o===46)break;return-1}return t<r&&(o=a.src.charCodeAt(t),!x1(o))?-1:t}function Hc(a,e){var o,s,t=a.level+2;for(o=e+2,s=a.tokens.length-2;o<s;o++)a.tokens[o].level===t&&a.tokens[o].type==="paragraph_open"&&(a.tokens[o+2].hidden=!0,a.tokens[o].hidden=!0,o+=2)}fs.exports=function(e,o,s,t){var r,g,p,h,m,q,S,F,D,C,b,R,P,T,O,y,z,E,J,Q,pe,re,N,j=!0,L,Y,Ge,In,kn;if((b=ps(e,o))>=0)E=!0;else if((b=ds(e,o))>=0)E=!1;else return!1;if(z=e.src.charCodeAt(b-1),t)return!0;for(Q=e.tokens.length,E?(C=e.bMarks[o]+e.tShift[o],y=Number(e.src.substr(C,b-C-1)),Y=e.push("ordered_list_open","ol",1),y!==1&&(Y.attrs=[["start",y]])):Y=e.push("bullet_list_open","ul",1),Y.map=re=[o,0],Y.markup=String.fromCharCode(z),r=o,pe=!1,L=e.md.block.ruler.getRules("list");r<s;){for(P=b,T=e.eMarks[r],g=p=e.sCount[r]+b-(e.bMarks[o]+e.tShift[o]);P<T&&(R=e.src.charCodeAt(P),x1(R));){R===9?p+=4-p%4:p++;P++}if(J=P,J>=T?O=1:O=p-g,O>4&&(O=1),h=g+O,Y=e.push("list_item_open","li",1),Y.markup=String.fromCharCode(z),Y.map=N=[o,0],q=e.blkIndent,F=e.tight,m=e.tShift[o],S=e.sCount[o],D=e.parentType,e.blkIndent=h,e.tight=!0,e.parentType="list",e.tShift[o]=J-e.bMarks[o],e.sCount[o]=p,J>=T&&e.isEmpty(o+1)?e.line=Math.min(e.line+2,s):e.md.block.tokenize(e,o,s,!0),(!e.tight||pe)&&(j=!1),pe=e.line-o>1&&e.isEmpty(e.line-1),e.blkIndent=q,e.tShift[o]=m,e.sCount[o]=S,e.tight=F,e.parentType=D,Y=e.push("list_item_close","li",-1),Y.markup=String.fromCharCode(z),r=o=e.line,N[1]=r,J=e.bMarks[o],r>=s||e.isEmpty(r)||e.sCount[r]<e.blkIndent)break;for(kn=!1,Ge=0,In=L.length;Ge<In;Ge++)if(L[Ge](e,r,s,!0)){kn=!0;break}if(kn)break;if(E){if(b=ps(e,r),b<0)break}else if(b=ds(e,r),b<0)break;if(z!==e.src.charCodeAt(b-1))break}return E?Y=e.push("ordered_list_close","ol",-1):Y=e.push("bullet_list_close","ul",-1),Y.markup=String.fromCharCode(z),re[1]=r,e.line=r,j&&Hc(e,Q),!0}});var ms=$((v8,hs)=>{"use strict";M();var Gc=Gt(),Zc=Zt(),Xc=de().normalizeReference,Jr=de().isSpace;hs.exports=function(e,o,s,t){var r,g,p,h,m,q,S,F,D,C,b,R,P,T,O,y=0,z=e.bMarks[o]+e.tShift[o],E=e.eMarks[o],J=o+1;if(e.src.charCodeAt(z)!==91)return!1;for(;++z<E;)if(e.src.charCodeAt(z)===93&&e.src.charCodeAt(z-1)!==92){if(z+1===E||e.src.charCodeAt(z+1)!==58)return!1;break}for(h=e.lineMax,T=e.md.block.ruler.getRules("reference");J<h&&!e.isEmpty(J);J++)if(!(e.sCount[J]-e.blkIndent>3)&&!(e.sCount[J]<0)){for(P=!1,q=0,S=T.length;q<S;q++)if(T[q](e,J,h,!0)){P=!0;break}if(P)break}for(R=e.getLines(o,J,e.blkIndent,!1).trim(),E=R.length,z=1;z<E;z++){if(r=R.charCodeAt(z),r===91)return!1;if(r===93){D=z;break}else r===10?y++:r===92&&(z++,z<E&&R.charCodeAt(z)===10&&y++)}if(D<0||R.charCodeAt(D+1)!==58)return!1;for(z=D+2;z<E;z++)if(r=R.charCodeAt(z),r===10)y++;else if(!Jr(r))break;if(C=Gc(R,z,E),!C.ok||(m=e.md.normalizeLink(C.str),!e.md.validateLink(m)))return!1;for(z=C.pos,y+=C.lines,g=z,p=y,b=z;z<E;z++)if(r=R.charCodeAt(z),r===10)y++;else if(!Jr(r))break;for(C=Zc(R,z,E),z<E&&b!==z&&C.ok?(O=C.str,z=C.pos,y+=C.lines):(O="",z=g,y=p);z<E&&(r=R.charCodeAt(z),!!Jr(r));)z++;if(z<E&&R.charCodeAt(z)!==10&&O)for(O="",z=g,y=p;z<E&&(r=R.charCodeAt(z),!!Jr(r));)z++;return z<E&&R.charCodeAt(z)!==10||(F=Xc(R.slice(1,D)),!F)?!1:(t||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[F]>"u"&&(e.env.references[F]={title:O,href:m}),e.line=o+y+1),!0)}});var vs=$((x8,bs)=>{"use strict";M();var Jc=de().isSpace;bs.exports=function(e,o,s,t){var r,g,p,h,m=e.bMarks[o]+e.tShift[o],q=e.eMarks[o];if(r=e.src.charCodeAt(m),r!==35||m>=q)return!1;for(g=1,r=e.src.charCodeAt(++m);r===35&&m<q&&g<=6;)g++,r=e.src.charCodeAt(++m);return g>6||m<q&&r!==32?!1:(t||(q=e.skipSpacesBack(q,m),p=e.skipCharsBack(q,35,m),p>m&&Jc(e.src.charCodeAt(p-1))&&(q=p),e.line=o+1,h=e.push("heading_open","h"+String(g),1),h.markup="########".slice(0,g),h.map=[o,e.line],h=e.push("inline","",0),h.content=e.src.slice(m,q).trim(),h.map=[o,e.line],h.children=[],h=e.push("heading_close","h"+String(g),-1),h.markup="########".slice(0,g)),!0)}});var xs=$((F8,ks)=>{"use strict";M();ks.exports=function(e,o,s){for(var t,r,g,p,h,m,q,S,F,D=o+1,C=e.md.block.ruler.getRules("paragraph");D<s&&!e.isEmpty(D);D++)if(!(e.sCount[D]-e.blkIndent>3)){if(e.sCount[D]>=e.blkIndent&&(m=e.bMarks[D]+e.tShift[D],q=e.eMarks[D],m<q&&(F=e.src.charCodeAt(m),(F===45||F===61)&&(m=e.skipChars(m,F),m=e.skipSpaces(m),m>=q)))){S=F===61?1:2;break}if(!(e.sCount[D]<0)){for(r=!1,g=0,p=C.length;g<p;g++)if(C[g](e,D,s,!0)){r=!0;break}if(r)break}}return S?(t=e.getLines(o,D,e.blkIndent,!1).trim(),e.line=D+1,h=e.push("heading_open","h"+String(S),1),h.markup=String.fromCharCode(F),h.map=[o,e.line],h=e.push("inline","",0),h.content=t,h.map=[o,e.line-1],h.children=[],h=e.push("heading_close","h"+String(S),-1),h.markup=String.fromCharCode(F),!0):!1}});var Fs=$((C8,ys)=>{"use strict";M();ys.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]});var F1=$((D8,y1)=>{"use strict";M();var Qc="[a-zA-Z_:][a-zA-Z0-9:._-]*",Kc="[^\"'=<>`\\x00-\\x20]+",e4="'[^']*'",n4='"[^"]*"',t4="(?:"+Kc+"|"+e4+"|"+n4+")",r4="(?:\\s+"+Qc+"(?:\\s*=\\s*"+t4+")?)",ws="<[A-Za-z][A-Za-z0-9\\-]*"+r4+"*\\s*\\/?>",Cs="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",i4="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",a4="<[?].*?[?]>",s4="<![A-Z]+\\s+[^>]*>",o4="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",u4=new RegExp("^(?:"+ws+"|"+Cs+"|"+i4+"|"+a4+"|"+s4+"|"+o4+")"),l4=new RegExp("^(?:"+ws+"|"+Cs+")");y1.exports.HTML_TAG_RE=u4;y1.exports.HTML_OPEN_CLOSE_TAG_RE=l4});var Ds=$((q8,_s)=>{"use strict";M();var c4=Fs(),d4=F1().HTML_OPEN_CLOSE_TAG_RE,bt=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+c4.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(d4.source+"\\s*$"),/^$/,!1]];_s.exports=function(e,o,s,t){var r,g,p,h,m=e.bMarks[o]+e.tShift[o],q=e.eMarks[o];if(!e.md.options.html||e.src.charCodeAt(m)!==60)return!1;for(h=e.src.slice(m,q),r=0;r<bt.length&&!bt[r][0].test(h);r++);if(r===bt.length)return!1;if(t)return bt[r][2];if(g=o+1,!bt[r][1].test(h)){for(;g<s&&!(e.sCount[g]<e.blkIndent);g++)if(m=e.bMarks[g]+e.tShift[g],q=e.eMarks[g],h=e.src.slice(m,q),bt[r][1].test(h)){h.length!==0&&g++;break}}return e.line=g,p=e.push("html_block","",0),p.map=[o,g],p.content=e.getLines(o,g,e.blkIndent,!0),!0}});var qs=$((A8,Es)=>{"use strict";M();Es.exports=function(e,o){for(var s,t,r,g,p,h=o+1,m=e.md.block.ruler.getRules("paragraph"),q=e.lineMax;h<q&&!e.isEmpty(h);h++)if(!(e.sCount[h]-e.blkIndent>3)&&!(e.sCount[h]<0)){for(t=!1,r=0,g=m.length;r<g;r++)if(m[r](e,h,q,!0)){t=!0;break}if(t)break}return s=e.getLines(o,h,e.blkIndent,!1).trim(),e.line=h,p=e.push("paragraph_open","p",1),p.map=[o,e.line],p=e.push("inline","",0),p.content=s,p.map=[o,e.line],p.children=[],p=e.push("paragraph_close","p",-1),!0}});var Ms=$((S8,As)=>{"use strict";M();var zs=Xr(),Qr=de().isSpace;function nn(a,e,o,s){var t,r,g,p,h,m,q,S;for(this.src=a,this.md=e,this.env=o,this.tokens=s,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.parentType="root",this.ddIndent=-1,this.level=0,this.result="",r=this.src,S=!1,g=p=m=q=0,h=r.length;p<h;p++){if(t=r.charCodeAt(p),!S)if(Qr(t)){m++,t===9?q+=4-q%4:q++;continue}else S=!0;(t===10||p===h-1)&&(t!==10&&p++,this.bMarks.push(g),this.eMarks.push(p),this.tShift.push(m),this.sCount.push(q),S=!1,m=0,q=0,g=p+1)}this.bMarks.push(r.length),this.eMarks.push(r.length),this.tShift.push(0),this.sCount.push(0),this.lineMax=this.bMarks.length-1}nn.prototype.push=function(a,e,o){var s=new zs(a,e,o);return s.block=!0,o<0&&this.level--,s.level=this.level,o>0&&this.level++,this.tokens.push(s),s};nn.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};nn.prototype.skipEmptyLines=function(e){for(var o=this.lineMax;e<o&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};nn.prototype.skipSpaces=function(e){for(var o,s=this.src.length;e<s&&(o=this.src.charCodeAt(e),!!Qr(o));e++);return e};nn.prototype.skipSpacesBack=function(e,o){if(e<=o)return e;for(;e>o;)if(!Qr(this.src.charCodeAt(--e)))return e+1;return e};nn.prototype.skipChars=function(e,o){for(var s=this.src.length;e<s&&this.src.charCodeAt(e)===o;e++);return e};nn.prototype.skipCharsBack=function(e,o,s){if(e<=s)return e;for(;e>s;)if(o!==this.src.charCodeAt(--e))return e+1;return e};nn.prototype.getLines=function(e,o,s,t){var r,g,p,h,m,q,S,F=e;if(e>=o)return"";for(q=new Array(o-e),r=0;F<o;F++,r++){for(g=0,S=h=this.bMarks[F],F+1<o||t?m=this.eMarks[F]+1:m=this.eMarks[F];h<m&&g<s;){if(p=this.src.charCodeAt(h),Qr(p))p===9?g+=4-g%4:g++;else if(h-S<this.tShift[F])g++;else break;h++}q[r]=this.src.slice(h,m)}return q.join("")};nn.prototype.Token=zs;As.exports=nn});var Bs=$((I8,Ss)=>{"use strict";M();var p4=Gr(),Kr=[["table",ns(),["paragraph","reference"]],["code",rs()],["fence",as(),["paragraph","reference","blockquote","list"]],["blockquote",us(),["paragraph","reference","list"]],["hr",cs(),["paragraph","reference","blockquote","list"]],["list",gs(),["paragraph","reference","blockquote"]],["reference",ms()],["heading",vs(),["paragraph","reference","blockquote"]],["lheading",xs()],["html_block",Ds(),["paragraph","reference","blockquote"]],["paragraph",qs()]];function ei(){this.ruler=new p4;for(var a=0;a<Kr.length;a++)this.ruler.push(Kr[a][0],Kr[a][1],{alt:(Kr[a][2]||[]).slice()})}ei.prototype.tokenize=function(a,e,o){for(var s,t,r=this.ruler.getRules(""),g=r.length,p=e,h=!1,m=a.md.options.maxNesting;p<o&&(a.line=p=a.skipEmptyLines(p),!(p>=o||a.sCount[p]<a.blkIndent));){if(a.level>=m){a.line=o;break}for(t=0;t<g&&(s=r[t](a,p,o,!1),!s);t++);if(a.tight=!h,a.isEmpty(a.line-1)&&(h=!0),p=a.line,p<o&&a.isEmpty(p)){if(h=!0,p++,p<o&&a.parentType==="list"&&a.isEmpty(p))break;a.line=p}}};ei.prototype.parse=function(a,e,o,s){var t;a&&(t=new this.State(a,e,o,s),this.tokenize(t,t.line,t.lineMax))};ei.prototype.State=Ms();Ss.exports=ei});var Ts=$((R8,Is)=>{"use strict";M();function f4(a){switch(a){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}Is.exports=function(e,o){for(var s=e.pos;s<e.posMax&&!f4(e.src.charCodeAt(s));)s++;return s===e.pos?!1:(o||(e.pending+=e.src.slice(e.pos,s)),e.pos=s,!0)}});var Os=$((P8,Rs)=>{"use strict";M();Rs.exports=function(e,o){var s,t,r=e.pos;if(e.src.charCodeAt(r)!==10)return!1;for(s=e.pending.length-1,t=e.posMax,o||(s>=0&&e.pending.charCodeAt(s)===32?s>=1&&e.pending.charCodeAt(s-1)===32?(e.pending=e.pending.replace(/ +$/,""),e.push("hardbreak","br",0)):(e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0)):e.push("softbreak","br",0)),r++;r<t&&e.src.charCodeAt(r)===32;)r++;return e.pos=r,!0}});var Ys=$((N8,Ps)=>{"use strict";M();var g4=de().isSpace,C1=[];for(w1=0;w1<256;w1++)C1.push(0);var w1;"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(a){C1[a.charCodeAt(0)]=1});Ps.exports=function(e,o){var s,t=e.pos,r=e.posMax;if(e.src.charCodeAt(t)!==92)return!1;if(t++,t<r){if(s=e.src.charCodeAt(t),s<256&&C1[s]!==0)return o||(e.pending+=e.src[t]),e.pos+=2,!0;if(s===10){for(o||e.push("hardbreak","br",0),t++;t<r&&(s=e.src.charCodeAt(t),!!g4(s));)t++;return e.pos=t,!0}}return o||(e.pending+="\\"),e.pos++,!0}});var Ls=$((j8,Ns)=>{"use strict";M();Ns.exports=function(e,o){var s,t,r,g,p,h,m=e.pos,q=e.src.charCodeAt(m);if(q!==96)return!1;for(s=m,m++,t=e.posMax;m<t&&e.src.charCodeAt(m)===96;)m++;for(r=e.src.slice(s,m),g=p=m;(g=e.src.indexOf("`",p))!==-1;){for(p=g+1;p<t&&e.src.charCodeAt(p)===96;)p++;if(p-g===r.length)return o||(h=e.push("code_inline","code",0),h.markup=r,h.content=e.src.slice(m,g).replace(/[ \n]+/g," ").trim()),e.pos=p,!0}return o||(e.pending+=r),e.pos+=r.length,!0}});var D1=$((W8,_1)=>{"use strict";M();_1.exports.tokenize=function(e,o){var s,t,r,g,p,h=e.pos,m=e.src.charCodeAt(h);if(o||m!==126||(t=e.scanDelims(e.pos,!0),g=t.length,p=String.fromCharCode(m),g<2))return!1;for(g%2&&(r=e.push("text","",0),r.content=p,g--),s=0;s<g;s+=2)r=e.push("text","",0),r.content=p+p,e.delimiters.push({marker:m,jump:s,token:e.tokens.length-1,level:e.level,end:-1,open:t.can_open,close:t.can_close});return e.pos+=t.length,!0};_1.exports.postProcess=function(e){var o,s,t,r,g,p=[],h=e.delimiters,m=e.delimiters.length;for(o=0;o<m;o++)t=h[o],t.marker===126&&t.end!==-1&&(r=h[t.end],g=e.tokens[t.token],g.type="s_open",g.tag="s",g.nesting=1,g.markup="~~",g.content="",g=e.tokens[r.token],g.type="s_close",g.tag="s",g.nesting=-1,g.markup="~~",g.content="",e.tokens[r.token-1].type==="text"&&e.tokens[r.token-1].content==="~"&&p.push(r.token-1));for(;p.length;){for(o=p.pop(),s=o+1;s<e.tokens.length&&e.tokens[s].type==="s_close";)s++;s--,o!==s&&(g=e.tokens[s],e.tokens[s]=e.tokens[o],e.tokens[o]=g)}}});var q1=$((V8,E1)=>{"use strict";M();E1.exports.tokenize=function(e,o){var s,t,r,g=e.pos,p=e.src.charCodeAt(g);if(o||p!==95&&p!==42)return!1;for(t=e.scanDelims(e.pos,p===42),s=0;s<t.length;s++)r=e.push("text","",0),r.content=String.fromCharCode(p),e.delimiters.push({marker:p,jump:s,token:e.tokens.length-1,level:e.level,end:-1,open:t.can_open,close:t.can_close});return e.pos+=t.length,!0};E1.exports.postProcess=function(e){var o,s,t,r,g,p,h=e.delimiters,m=e.delimiters.length;for(o=0;o<m;o++)s=h[o],!(s.marker!==95&&s.marker!==42)&&s.end!==-1&&(t=h[s.end],p=o+1<m&&h[o+1].end===s.end-1&&h[o+1].token===s.token+1&&h[s.end-1].token===t.token-1&&h[o+1].marker===s.marker,g=String.fromCharCode(s.marker),r=e.tokens[s.token],r.type=p?"strong_open":"em_open",r.tag=p?"strong":"em",r.nesting=1,r.markup=p?g+g:g,r.content="",r=e.tokens[t.token],r.type=p?"strong_close":"em_close",r.tag=p?"strong":"em",r.nesting=-1,r.markup=p?g+g:g,r.content="",p&&(e.tokens[h[o+1].token].content="",e.tokens[h[s.end-1].token].content="",o++))}});var Ws=$((G8,Us)=>{"use strict";M();var js=Vr(),h4=Gt(),m4=Zt(),b4=de().normalizeReference,z1=de().isSpace;Us.exports=function(e,o){var s,t,r,g,p,h,m,q,S,F,D="",C=e.pos,b=e.posMax,R=e.pos;if(e.src.charCodeAt(e.pos)!==91||(p=e.pos+1,g=js(e,e.pos,!0),g<0))return!1;if(h=g+1,h<b&&e.src.charCodeAt(h)===40){for(h++;h<b&&(t=e.src.charCodeAt(h),!(!z1(t)&&t!==10));h++);if(h>=b)return!1;for(R=h,m=h4(e.src,h,e.posMax),m.ok&&(D=e.md.normalizeLink(m.str),e.md.validateLink(D)?h=m.pos:D=""),R=h;h<b&&(t=e.src.charCodeAt(h),!(!z1(t)&&t!==10));h++);if(m=m4(e.src,h,e.posMax),h<b&&R!==h&&m.ok)for(S=m.str,h=m.pos;h<b&&(t=e.src.charCodeAt(h),!(!z1(t)&&t!==10));h++);else S="";if(h>=b||e.src.charCodeAt(h)!==41)return e.pos=C,!1;h++}else{if(typeof e.env.references>"u")return!1;if(h<b&&e.src.charCodeAt(h)===91?(R=h+1,h=js(e,h),h>=0?r=e.src.slice(R,h++):h=g+1):h=g+1,r||(r=e.src.slice(p,g)),q=e.env.references[b4(r)],!q)return e.pos=C,!1;D=q.href,S=q.title}return o||(e.pos=p,e.posMax=g,F=e.push("link_open","a",1),F.attrs=s=[["href",D]],S&&s.push(["title",S]),e.md.inline.tokenize(e),F=e.push("link_close","a",-1)),e.pos=h,e.posMax=b,!0}});var Hs=$((X8,Vs)=>{"use strict";M();var $s=Vr(),v4=Gt(),k4=Zt(),x4=de().normalizeReference,A1=de().isSpace;Vs.exports=function(e,o){var s,t,r,g,p,h,m,q,S,F,D,C,b,R="",P=e.pos,T=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91||(h=e.pos+2,p=$s(e,e.pos+1,!1),p<0))return!1;if(m=p+1,m<T&&e.src.charCodeAt(m)===40){for(m++;m<T&&(t=e.src.charCodeAt(m),!(!A1(t)&&t!==10));m++);if(m>=T)return!1;for(b=m,S=v4(e.src,m,e.posMax),S.ok&&(R=e.md.normalizeLink(S.str),e.md.validateLink(R)?m=S.pos:R=""),b=m;m<T&&(t=e.src.charCodeAt(m),!(!A1(t)&&t!==10));m++);if(S=k4(e.src,m,e.posMax),m<T&&b!==m&&S.ok)for(F=S.str,m=S.pos;m<T&&(t=e.src.charCodeAt(m),!(!A1(t)&&t!==10));m++);else F="";if(m>=T||e.src.charCodeAt(m)!==41)return e.pos=P,!1;m++}else{if(typeof e.env.references>"u")return!1;if(m<T&&e.src.charCodeAt(m)===91?(b=m+1,m=$s(e,m),m>=0?g=e.src.slice(b,m++):m=p+1):m=p+1,g||(g=e.src.slice(h,p)),q=e.env.references[x4(g)],!q)return e.pos=P,!1;R=q.href,F=q.title}return o||(r=e.src.slice(h,p),e.md.inline.parse(r,e.md,e.env,C=[]),D=e.push("image","img",0),D.attrs=s=[["src",R],["alt",""]],D.children=C,D.content=r,F&&s.push(["title",F])),e.pos=m,e.posMax=T,!0}});var Js=$((Q8,Xs)=>{"use strict";M();var Gs=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,Zs=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;Xs.exports=function(e,o){var s,t,r,g,p,h,m=e.pos;return e.src.charCodeAt(m)!==60||(s=e.src.slice(m),s.indexOf(">")<0)?!1:Zs.test(s)?(t=s.match(Zs),g=t[0].slice(1,-1),p=e.md.normalizeLink(g),e.md.validateLink(p)?(o||(h=e.push("link_open","a",1),h.attrs=[["href",p]],h.markup="autolink",h.info="auto",h=e.push("text","",0),h.content=e.md.normalizeLinkText(g),h=e.push("link_close","a",-1),h.markup="autolink",h.info="auto"),e.pos+=t[0].length,!0):!1):Gs.test(s)?(r=s.match(Gs),g=r[0].slice(1,-1),p=e.md.normalizeLink("mailto:"+g),e.md.validateLink(p)?(o||(h=e.push("link_open","a",1),h.attrs=[["href",p]],h.markup="autolink",h.info="auto",h=e.push("text","",0),h.content=e.md.normalizeLinkText(g),h=e.push("link_close","a",-1),h.markup="autolink",h.info="auto"),e.pos+=r[0].length,!0):!1):!1}});var Ks=$((ed,Qs)=>{"use strict";M();var y4=F1().HTML_TAG_RE;function F4(a){var e=a|32;return e>=97&&e<=122}Qs.exports=function(e,o){var s,t,r,g,p=e.pos;return!e.md.options.html||(r=e.posMax,e.src.charCodeAt(p)!==60||p+2>=r)||(s=e.src.charCodeAt(p+1),s!==33&&s!==63&&s!==47&&!F4(s))||(t=e.src.slice(p).match(y4),!t)?!1:(o||(g=e.push("html_inline","",0),g.content=e.src.slice(p,p+t[0].length)),e.pos+=t[0].length,!0)}});var ro=$((td,to)=>{"use strict";M();var eo=p1(),w4=de().has,C4=de().isValidEntityCode,no=de().fromCodePoint,_4=/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,D4=/^&([a-z][a-z0-9]{1,31});/i;to.exports=function(e,o){var s,t,r,g=e.pos,p=e.posMax;if(e.src.charCodeAt(g)!==38)return!1;if(g+1<p){if(s=e.src.charCodeAt(g+1),s===35){if(r=e.src.slice(g).match(_4),r)return o||(t=r[1][0].toLowerCase()==="x"?parseInt(r[1].slice(1),16):parseInt(r[1],10),e.pending+=C4(t)?no(t):no(65533)),e.pos+=r[0].length,!0}else if(r=e.src.slice(g).match(D4),r&&w4(eo,r[1]))return o||(e.pending+=eo[r[1]]),e.pos+=r[0].length,!0}return o||(e.pending+="&"),e.pos++,!0}});var ao=$((id,io)=>{"use strict";M();io.exports=function(e){var o,s,t,r,g=e.delimiters,p=e.delimiters.length;for(o=0;o<p;o++)if(t=g[o],!!t.close)for(s=o-t.jump-1;s>=0;){if(r=g[s],r.open&&r.marker===t.marker&&r.end<0&&r.level===t.level){t.jump=o-s,t.open=!1,r.end=o,r.jump=0;break}s-=r.jump+1}}});var oo=$((sd,so)=>{"use strict";M();so.exports=function(e){var o,s,t=0,r=e.tokens,g=e.tokens.length;for(o=s=0;o<g;o++)t+=r[o].nesting,r[o].level=t,r[o].type==="text"&&o+1<g&&r[o+1].type==="text"?r[o+1].content=r[o].content+r[o+1].content:(o!==s&&(r[s]=r[o]),s++);o!==s&&(r.length=s)}});var fo=$((ud,po)=>{"use strict";M();var M1=Xr(),uo=de().isWhiteSpace,lo=de().isPunctChar,co=de().isMdAsciiPunct;function Xt(a,e,o,s){this.src=a,this.env=o,this.md=e,this.tokens=s,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[]}Xt.prototype.pushPending=function(){var a=new M1("text","",0);return a.content=this.pending,a.level=this.pendingLevel,this.tokens.push(a),this.pending="",a};Xt.prototype.push=function(a,e,o){this.pending&&this.pushPending();var s=new M1(a,e,o);return o<0&&this.level--,s.level=this.level,o>0&&this.level++,this.pendingLevel=this.level,this.tokens.push(s),s};Xt.prototype.scanDelims=function(a,e){var o=a,s,t,r,g,p,h,m,q,S,F=!0,D=!0,C=this.posMax,b=this.src.charCodeAt(a);for(s=a>0?this.src.charCodeAt(a-1):32;o<C&&this.src.charCodeAt(o)===b;)o++;return r=o-a,t=o<C?this.src.charCodeAt(o):32,m=co(s)||lo(String.fromCharCode(s)),S=co(t)||lo(String.fromCharCode(t)),h=uo(s),q=uo(t),q?F=!1:S&&(h||m||(F=!1)),h?D=!1:m&&(q||S||(D=!1)),e?(g=F,p=D):(g=F&&(!D||m),p=D&&(!F||S)),{can_open:g,can_close:p,length:r}};Xt.prototype.Token=M1;po.exports=Xt});var mo=$((cd,ho)=>{"use strict";M();var go=Gr(),S1=[["text",Ts()],["newline",Os()],["escape",Ys()],["backticks",Ls()],["strikethrough",D1().tokenize],["emphasis",q1().tokenize],["link",Ws()],["image",Hs()],["autolink",Js()],["html_inline",Ks()],["entity",ro()]],B1=[["balance_pairs",ao()],["strikethrough",D1().postProcess],["emphasis",q1().postProcess],["text_collapse",oo()]];function Jt(){var a;for(this.ruler=new go,a=0;a<S1.length;a++)this.ruler.push(S1[a][0],S1[a][1]);for(this.ruler2=new go,a=0;a<B1.length;a++)this.ruler2.push(B1[a][0],B1[a][1])}Jt.prototype.skipToken=function(a){var e,o,s=a.pos,t=this.ruler.getRules(""),r=t.length,g=a.md.options.maxNesting,p=a.cache;if(typeof p[s]<"u"){a.pos=p[s];return}if(a.level<g)for(o=0;o<r&&(a.level++,e=t[o](a,!0),a.level--,!e);o++);else a.pos=a.posMax;e||a.pos++,p[s]=a.pos};Jt.prototype.tokenize=function(a){for(var e,o,s=this.ruler.getRules(""),t=s.length,r=a.posMax,g=a.md.options.maxNesting;a.pos<r;){if(a.level<g)for(o=0;o<t&&(e=s[o](a,!1),!e);o++);if(e){if(a.pos>=r)break;continue}a.pending+=a.src[a.pos++]}a.pending&&a.pushPending()};Jt.prototype.parse=function(a,e,o,s){var t,r,g,p=new this.State(a,e,o,s);for(this.tokenize(p),r=this.ruler2.getRules(""),g=r.length,t=0;t<g;t++)r[t](p)};Jt.prototype.State=fo();ho.exports=Jt});var wo=$(ge=>{"use strict";M();var E4=ge.src_Any=g1().source,bo=ge.src_Cc=h1().source,vo=ge.src_Z=m1().source,q4=ge.src_P=jr().source,kt=ge.src_ZPCc=[vo,q4,bo].join("|"),Re=ge.src_ZCc=[vo,bo].join("|"),vt="(?:(?!>|<|"+kt+")"+E4+")",z4=ge.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";ge.src_auth="(?:(?:(?!"+Re+"|[@/]).)+@)?";var I1=ge.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",Qt=ge.src_host_terminator="(?=$|>|<|"+kt+")(?!-|_|:\\d|\\.-|\\.(?!$|"+kt+"))",ko=ge.src_path="(?:[/?#](?:(?!"+Re+`|[()[\\]{}.,"'?!\\-<>]).|\\[(?:(?!`+Re+"|\\]).)*\\]|\\((?:(?!"+Re+"|[)]).)*\\)|\\{(?:(?!"+Re+'|[}]).)*\\}|\\"(?:(?!'+Re+`|["]).)+\\"|\\'(?:(?!`+Re+"|[']).)+\\'|\\'(?="+vt+").|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!"+Re+"|[.]).|\\-(?!--(?:[^-]|$))(?:-*)|\\,(?!"+Re+").|\\!(?!"+Re+"|[!]).|\\?(?!"+Re+"|[?]).)+|\\/)?",A4=ge.src_email_name='[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+',xo=ge.src_xn="xn--[a-z0-9\\-]{1,59}",M4=ge.src_domain_root="(?:"+xo+"|"+vt+"{1,63})",T1=ge.src_domain="(?:"+xo+"|(?:"+vt+")|(?:"+vt+"(?:-(?!-)|"+vt+"){0,61}"+vt+"))",yo=ge.src_host="(?:(?:(?:(?:"+T1+")\\.)*"+M4+"))",Fo=ge.tpl_host_fuzzy="(?:"+z4+"|(?:(?:(?:"+T1+")\\.)+(?:%TLDS%)))",S4=ge.tpl_host_no_ip_fuzzy="(?:(?:(?:"+T1+")\\.)+(?:%TLDS%))";ge.src_host_strict=yo+Qt;var B4=ge.tpl_host_fuzzy_strict=Fo+Qt;ge.src_host_port_strict=yo+I1+Qt;var I4=ge.tpl_host_port_fuzzy_strict=Fo+I1+Qt,T4=ge.tpl_host_port_no_ip_fuzzy_strict=S4+I1+Qt;ge.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+kt+"|>|$))";ge.tpl_email_fuzzy="(^|<|>|\\(|"+Re+")("+A4+"@"+B4+")";ge.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|]|"+kt+"))((?![$+<=>^`|])"+I4+ko+")";ge.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|]|"+kt+"))((?![$+<=>^`|])"+T4+ko+")"});var zo=$((gd,qo)=>{"use strict";M();function ni(a){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(o){o&&Object.keys(o).forEach(function(s){a[s]=o[s]})}),a}function ri(a){return Object.prototype.toString.call(a)}function R4(a){return ri(a)==="[object String]"}function O4(a){return ri(a)==="[object Object]"}function P4(a){return ri(a)==="[object RegExp]"}function Co(a){return ri(a)==="[object Function]"}function Y4(a){return a.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var Eo={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function N4(a){return Object.keys(a||{}).reduce(function(e,o){return e||Eo.hasOwnProperty(o)},!1)}var L4={"http:":{validate:function(a,e,o){var s=a.slice(e);return o.re.http||(o.re.http=new RegExp("^\\/\\/"+o.re.src_auth+o.re.src_host_port_strict+o.re.src_path,"i")),o.re.http.test(s)?s.match(o.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(a,e,o){var s=a.slice(e);return o.re.no_http||(o.re.no_http=new RegExp("^"+o.re.src_auth+"(?:localhost|(?:(?:"+o.re.src_domain+")\\.)+"+o.re.src_domain_root+")"+o.re.src_port+o.re.src_host_terminator+o.re.src_path,"i")),o.re.no_http.test(s)?e>=3&&a[e-3]===":"||e>=3&&a[e-3]==="/"?0:s.match(o.re.no_http)[0].length:0}},"mailto:":{validate:function(a,e,o){var s=a.slice(e);return o.re.mailto||(o.re.mailto=new RegExp("^"+o.re.src_email_name+"@"+o.re.src_host_strict,"i")),o.re.mailto.test(s)?s.match(o.re.mailto)[0].length:0}}},j4="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",U4="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function W4(a){a.__index__=-1,a.__text_cache__=""}function $4(a){return function(e,o){var s=e.slice(o);return a.test(s)?s.match(a)[0].length:0}}function _o(){return function(a,e){e.normalize(a)}}function ti(a){var e=a.re=ni({},wo()),o=a.__tlds__.slice();a.__tlds_replaced__||o.push(j4),o.push(e.src_xn),e.src_tlds=o.join("|");function s(p){return p.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(s(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(s(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(s(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(s(e.tpl_host_fuzzy_test),"i");var t=[];a.__compiled__={};function r(p,h){throw new Error('(LinkifyIt) Invalid schema "'+p+'": '+h)}Object.keys(a.__schemas__).forEach(function(p){var h=a.__schemas__[p];if(h!==null){var m={validate:null,link:null};if(a.__compiled__[p]=m,O4(h)){P4(h.validate)?m.validate=$4(h.validate):Co(h.validate)?m.validate=h.validate:r(p,h),Co(h.normalize)?m.normalize=h.normalize:h.normalize?r(p,h):m.normalize=_o();return}if(R4(h)){t.push(p);return}r(p,h)}}),t.forEach(function(p){a.__compiled__[a.__schemas__[p]]&&(a.__compiled__[p].validate=a.__compiled__[a.__schemas__[p]].validate,a.__compiled__[p].normalize=a.__compiled__[a.__schemas__[p]].normalize)}),a.__compiled__[""]={validate:null,normalize:_o()};var g=Object.keys(a.__compiled__).filter(function(p){return p.length>0&&a.__compiled__[p]}).map(Y4).join("|");a.re.schema_test=RegExp("(^|(?!_)(?:[><]|"+e.src_ZPCc+"))("+g+")","i"),a.re.schema_search=RegExp("(^|(?!_)(?:[><]|"+e.src_ZPCc+"))("+g+")","ig"),a.re.pretest=RegExp("("+a.re.schema_test.source+")|("+a.re.host_fuzzy_test.source+")|@","i"),W4(a)}function V4(a,e){var o=a.__index__,s=a.__last_index__,t=a.__text_cache__.slice(o,s);this.schema=a.__schema__.toLowerCase(),this.index=o+e,this.lastIndex=s+e,this.raw=t,this.text=t,this.url=t}function Do(a,e){var o=new V4(a,e);return a.__compiled__[o.schema].normalize(o,a),o}function Ve(a,e){if(!(this instanceof Ve))return new Ve(a,e);e||N4(a)&&(e=a,a={}),this.__opts__=ni({},Eo,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=ni({},L4,a),this.__compiled__={},this.__tlds__=U4,this.__tlds_replaced__=!1,this.re={},ti(this)}Ve.prototype.add=function(e,o){return this.__schemas__[e]=o,ti(this),this};Ve.prototype.set=function(e){return this.__opts__=ni(this.__opts__,e),this};Ve.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var o,s,t,r,g,p,h,m,q;if(this.re.schema_test.test(e)){for(h=this.re.schema_search,h.lastIndex=0;(o=h.exec(e))!==null;)if(r=this.testSchemaAt(e,o[2],h.lastIndex),r){this.__schema__=o[2],this.__index__=o.index+o[1].length,this.__last_index__=o.index+o[0].length+r;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(m=e.search(this.re.host_fuzzy_test),m>=0&&(this.__index__<0||m<this.__index__)&&(s=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(g=s.index+s[1].length,(this.__index__<0||g<this.__index__)&&(this.__schema__="",this.__index__=g,this.__last_index__=s.index+s[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(q=e.indexOf("@"),q>=0&&(t=e.match(this.re.email_fuzzy))!==null&&(g=t.index+t[1].length,p=t.index+t[0].length,(this.__index__<0||g<this.__index__||g===this.__index__&&p>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=g,this.__last_index__=p))),this.__index__>=0};Ve.prototype.pretest=function(e){return this.re.pretest.test(e)};Ve.prototype.testSchemaAt=function(e,o,s){return this.__compiled__[o.toLowerCase()]?this.__compiled__[o.toLowerCase()].validate(e,s,this):0};Ve.prototype.match=function(e){var o=0,s=[];this.__index__>=0&&this.__text_cache__===e&&(s.push(Do(this,o)),o=this.__last_index__);for(var t=o?e.slice(o):e;this.test(t);)s.push(Do(this,o)),t=t.slice(this.__last_index__),o+=this.__last_index__;return s.length?s:null};Ve.prototype.tlds=function(e,o){return e=Array.isArray(e)?e:[e],o?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(s,t,r){return s!==r[t-1]}).reverse(),ti(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,ti(this),this)};Ve.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};qo.exports=Ve});var Oo=$((md,Ro)=>{"use strict";M();var H4=/^xn--/,G4=/[^\0-\x7F]/,Z4=/[\x2E\u3002\uFF0E\uFF61]/g,X4={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},R1=35,tn=Math.floor,O1=String.fromCharCode;function Bn(a){throw new RangeError(X4[a])}function J4(a,e){let o=[],s=a.length;for(;s--;)o[s]=e(a[s]);return o}function Mo(a,e){let o=a.split("@"),s="";o.length>1&&(s=o[0]+"@",a=o[1]),a=a.replace(Z4,".");let t=a.split("."),r=J4(t,e).join(".");return s+r}function So(a){let e=[],o=0,s=a.length;for(;o<s;){let t=a.charCodeAt(o++);if(t>=55296&&t<=56319&&o<s){let r=a.charCodeAt(o++);(r&64512)==56320?e.push(((t&1023)<<10)+(r&1023)+65536):(e.push(t),o--)}else e.push(t)}return e}var Q4=a=>String.fromCodePoint(...a),K4=function(a){return a>=48&&a<58?26+(a-48):a>=65&&a<91?a-65:a>=97&&a<123?a-97:36},Ao=function(a,e){return a+22+75*(a<26)-((e!=0)<<5)},Bo=function(a,e,o){let s=0;for(a=o?tn(a/700):a>>1,a+=tn(a/e);a>R1*26>>1;s+=36)a=tn(a/R1);return tn(s+(R1+1)*a/(a+38))},Io=function(a){let e=[],o=a.length,s=0,t=128,r=72,g=a.lastIndexOf("-");g<0&&(g=0);for(let p=0;p<g;++p)a.charCodeAt(p)>=128&&Bn("not-basic"),e.push(a.charCodeAt(p));for(let p=g>0?g+1:0;p<o;){let h=s;for(let q=1,S=36;;S+=36){p>=o&&Bn("invalid-input");let F=K4(a.charCodeAt(p++));F>=36&&Bn("invalid-input"),F>tn((2147483647-s)/q)&&Bn("overflow"),s+=F*q;let D=S<=r?1:S>=r+26?26:S-r;if(F<D)break;let C=36-D;q>tn(2147483647/C)&&Bn("overflow"),q*=C}let m=e.length+1;r=Bo(s-h,m,h==0),tn(s/m)>2147483647-t&&Bn("overflow"),t+=tn(s/m),s%=m,e.splice(s++,0,t)}return String.fromCodePoint(...e)},To=function(a){let e=[];a=So(a);let o=a.length,s=128,t=0,r=72;for(let h of a)h<128&&e.push(O1(h));let g=e.length,p=g;for(g&&e.push("-");p<o;){let h=2147483647;for(let q of a)q>=s&&q<h&&(h=q);let m=p+1;h-s>tn((2147483647-t)/m)&&Bn("overflow"),t+=(h-s)*m,s=h;for(let q of a)if(q<s&&++t>2147483647&&Bn("overflow"),q===s){let S=t;for(let F=36;;F+=36){let D=F<=r?1:F>=r+26?26:F-r;if(S<D)break;let C=S-D,b=36-D;e.push(O1(Ao(D+C%b,0))),S=tn(C/b)}e.push(O1(Ao(S,0))),r=Bo(t,m,p===g),t=0,++p}++t,++s}return e.join("")},e3=function(a){return Mo(a,function(e){return H4.test(e)?Io(e.slice(4).toLowerCase()):e})},n3=function(a){return Mo(a,function(e){return G4.test(e)?"xn--"+To(e):e})},t3={version:"2.3.1",ucs2:{decode:So,encode:Q4},decode:Io,encode:To,toASCII:n3,toUnicode:e3};Ro.exports=t3});var Yo=$((vd,Po)=>{"use strict";M();Po.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}});var Lo=$((xd,No)=>{"use strict";M();No.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}}});var Uo=$((Fd,jo)=>{"use strict";M();jo.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}}});var Ho=$((Cd,Vo)=>{"use strict";M();var ii=de(),r3=_2(),i3=E2(),a3=Q2(),s3=Bs(),o3=mo(),u3=zo(),xt=f1(),Wo=Oo(),l3={default:Yo(),zero:Lo(),commonmark:Uo()},c3=/^(vbscript|javascript|file|data):/,d3=/^data:image\/(gif|png|jpeg|webp);/;function p3(a){var e=a.trim().toLowerCase();return c3.test(e)?!!d3.test(e):!0}var $o=["http:","https:","mailto:"];function f3(a){var e=xt.parse(a,!0);if(e.hostname&&(!e.protocol||$o.indexOf(e.protocol)>=0))try{e.hostname=Wo.toASCII(e.hostname)}catch{}return xt.encode(xt.format(e))}function g3(a){var e=xt.parse(a,!0);if(e.hostname&&(!e.protocol||$o.indexOf(e.protocol)>=0))try{e.hostname=Wo.toUnicode(e.hostname)}catch{}return xt.decode(xt.format(e))}function Oe(a,e){if(!(this instanceof Oe))return new Oe(a,e);e||ii.isString(a)||(e=a||{},a="default"),this.inline=new o3,this.block=new s3,this.core=new a3,this.renderer=new i3,this.linkify=new u3,this.validateLink=p3,this.normalizeLink=f3,this.normalizeLinkText=g3,this.utils=ii,this.helpers=r3,this.options={},this.configure(a),e&&this.set(e)}Oe.prototype.set=function(a){return ii.assign(this.options,a),this};Oe.prototype.configure=function(a){var e=this,o;if(ii.isString(a)&&(o=a,a=l3[o],!a))throw new Error('Wrong `markdown-it` preset "'+o+'", check name');if(!a)throw new Error("Wrong `markdown-it` preset, can't be empty");return a.options&&e.set(a.options),a.components&&Object.keys(a.components).forEach(function(s){a.components[s].rules&&e[s].ruler.enableOnly(a.components[s].rules),a.components[s].rules2&&e[s].ruler2.enableOnly(a.components[s].rules2)}),this};Oe.prototype.enable=function(a,e){var o=[];Array.isArray(a)||(a=[a]),["core","block","inline"].forEach(function(t){o=o.concat(this[t].ruler.enable(a,!0))},this),o=o.concat(this.inline.ruler2.enable(a,!0));var s=a.filter(function(t){return o.indexOf(t)<0});if(s.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+s);return this};Oe.prototype.disable=function(a,e){var o=[];Array.isArray(a)||(a=[a]),["core","block","inline"].forEach(function(t){o=o.concat(this[t].ruler.disable(a,!0))},this),o=o.concat(this.inline.ruler2.disable(a,!0));var s=a.filter(function(t){return o.indexOf(t)<0});if(s.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+s);return this};Oe.prototype.use=function(a){var e=[this].concat(Array.prototype.slice.call(arguments,1));return a.apply(a,e),this};Oe.prototype.parse=function(a,e){var o=new this.core.State(a,this,e);return this.core.process(o),o.tokens};Oe.prototype.render=function(a,e){return e=e||{},this.renderer.render(this.parse(a,e),this.options,e)};Oe.prototype.parseInline=function(a,e){var o=new this.core.State(a,this,e);return o.inlineMode=!0,this.core.process(o),o.tokens};Oe.prototype.renderInline=function(a,e){return e=e||{},this.renderer.render(this.parseInline(a,e),this.options,e)};Vo.exports=Oe});var Zo=$((Dd,Go)=>{"use strict";M();Go.exports=Ho()});var Jo=$((qd,Xo)=>{"use strict";M();Xo.exports=function(e){var o=e.utils.escapeRE,s=e.utils.arrayReplaceAt,t=" \r\n$+<=>^`|~",r=e.utils.lib.ucmicro.P.source,g=e.utils.lib.ucmicro.Z.source;function p(m,q,S,F){var D,C,b,R,P,T=m.bMarks[q]+m.tShift[q],O=m.eMarks[q];if(T+2>=O||m.src.charCodeAt(T++)!==42||m.src.charCodeAt(T++)!==91)return!1;for(R=T;T<O;T++){if(b=m.src.charCodeAt(T),b===91)return!1;if(b===93){P=T;break}else b===92&&T++}return P<0||m.src.charCodeAt(P+1)!==58?!1:F?!0:(D=m.src.slice(R,P).replace(/\\(.)/g,"$1"),C=m.src.slice(P+2,O).trim(),D.length===0||C.length===0?!1:(m.env.abbreviations||(m.env.abbreviations={}),typeof m.env.abbreviations[":"+D]>"u"&&(m.env.abbreviations[":"+D]=C),m.line=q+1,!0))}function h(m){var q,S,F,D,C,b,R,P,T,O,y,z,E,J=m.tokens;if(m.env.abbreviations){for(z=new RegExp("(?:"+Object.keys(m.env.abbreviations).map(function(Q){return Q.substr(1)}).sort(function(Q,pe){return pe.length-Q.length}).map(o).join("|")+")"),y="(^|"+r+"|"+g+"|["+t.split("").map(o).join("")+"])("+Object.keys(m.env.abbreviations).map(function(Q){return Q.substr(1)}).sort(function(Q,pe){return pe.length-Q.length}).map(o).join("|")+")($|"+r+"|"+g+"|["+t.split("").map(o).join("")+"])",T=new RegExp(y,"g"),S=0,F=J.length;S<F;S++)if(J[S].type==="inline"){for(D=J[S].children,q=D.length-1;q>=0;q--)if(E=D[q],E.type==="text"&&(P=0,b=E.content,T.lastIndex=0,R=[],!!z.test(b))){for(;O=T.exec(b);)(O.index>0||O[1].length>0)&&(C=new m.Token("text","",0),C.content=b.slice(P,O.index+O[1].length),R.push(C)),C=new m.Token("abbr_open","abbr",1),C.attrs=[["title",m.env.abbreviations[":"+O[2]]]],R.push(C),C=new m.Token("text","",0),C.content=O[2],R.push(C),C=new m.Token("abbr_close","abbr",-1),R.push(C),T.lastIndex-=O[3].length,P=T.lastIndex;R.length&&(P<b.length&&(C=new m.Token("text","",0),C.content=b.slice(P),R.push(C)),J[S].children=D=s(D,q,R))}}}}e.block.ruler.before("reference","abbr_def",p,{alt:["paragraph","reference"]}),e.core.ruler.after("linkify","abbr_replace",h)}});var eu=$((Ad,Ko)=>{M();function ce(a,e,o,s){if(e===!1||e==null||!e&&(a==="class"||a==="style"))return"";if(e===!0)return" "+(s?a:a+'="'+a+'"');var t=typeof e;return t!=="object"&&t!=="function"||typeof e.toJSON!="function"||(e=e.toJSON()),typeof e=="string"||(e=JSON.stringify(e),o||e.indexOf('"')===-1)?(o&&(e=W(e))," "+a+'="'+e+'"'):" "+a+"='"+e.replace(/'/g,"&#39;")+"'"}function vn(a,e){return Array.isArray(a)?h3(a,e):a&&typeof a=="object"?m3(a):a||""}function h3(a,e){for(var o,s="",t="",r=Array.isArray(e),g=0;g<a.length;g++)(o=vn(a[g]))&&(r&&e[g]&&(o=W(o)),s=s+t+o,t=" ");return s}function m3(a){var e="",o="";for(var s in a)s&&a[s]&&b3.call(a,s)&&(e=e+o+s,o=" ");return e}function W(a){var e=""+a,o=v3.exec(e);if(!o)return a;var s,t,r,g="";for(s=o.index,t=0;s<e.length;s++){switch(e.charCodeAt(s)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}t!==s&&(g+=e.substring(t,s)),t=s+1,g+=r}return t!==s?g+e.substring(t,s):g}var b3=Object.prototype.hasOwnProperty,v3=/["&<>]/;function Qo(a,e,o,s){if(!(a instanceof Error))throw a;if(!(typeof window>"u"&&e||s))throw a.message+=" on line "+o,a;try{s=s||(o1(),ua(s1)).readFileSync(e,"utf8")}catch{Qo(a,null,o)}var p=3,t=s.split(`
`),r=Math.max(o-p,0),g=Math.min(t.length,o+p),p=t.slice(r,g).map(function(h,m){var q=m+r+1;return(q==o?"  > ":"    ")+q+"| "+h}).join(`
`);throw a.path=e,a.message=(e||"Pug")+":"+o+`
`+p+`

`+a.message,a}function k3(a){var e="",o={},s,t,r;try{var g={"index.pug":`|<!DOCTYPE html>
html(lang="en")
  head
    meta(charset="utf-8")
    meta(http-equiv="X-UA-Compatible", content="IE=edge")
    meta(name="viewport", content="width=device-width, initial-scale=1")
    title= resume.basics.name
    include pug/stylesheets.pug

  body(itemscope, itemtype="http://schema.org/Person")
    .container-fluid
      .row.main.clearfix
        include pug/floating-nav.pug
        include pug/profile-card.pug
        include pug/background-card.pug

    include pug/scripts.pug
`,"pug/stylesheets.pug":`link(rel="stylesheet", href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css")
style!= css
`,"pug/floating-nav.pug":`mixin make_nav_link(nav_item)
  li
    a(href="#" + nav_item.target)
      i.mr-10(class='icon-' + nav_item.icon)
      | #{nav_item.label}

a(href="#").js-floating-nav-trigger.floating-nav-trigger
  i.icon-bars
  span.close-icon &times;

nav.floating-nav.js-floating-nav
  ul.list-unstyled
    each nav_item in floating_nav_items
      +make_nav_link(nav_item)
`,"pug/profile-card.pug":`mixin profile_card_detail(icon, info, itemprop, icon_title)
  .detail
    span.icon(title=icon_title)
      i.icon.fs-lg(class=icon)
    span.info(itemprop=itemprop)
      if block
        block
      else
        |#{info}

mixin render_links(profiles)
  each profile in profiles
    a.fs-2x.social-link(
      href=profile.url,
      target="_blank",
      data-toggle="tooltip",
      title= resume.basics.name + " on " + profile.network,
      class="link-" + profile.label + " icon-" + profile.label)
      if profile.network.toLowerCase() == 'meetup'
        span.path2
        span.path3
      if profile.network.toLowerCase() == 'gitlab'
        span.path1
        span.path2
        span.path3
        span.path4
        span.path5
        span.path6
        span.path7
        span.path8

section.col-md-3.card-wrapper.profile-card-wrapper.affix
  .card.profile-card
    span.profile-pic-container
      .profile-pic
        img.media-object.img-circle.center-block(
          data-src="holder.js/100x100",
          alt=resume.basics.name,
          src=resume.basics.picture,
          itemprop="image")

      .name-and-profession.text-center
        h3(itemprop="name"): b= resume.basics.name
        h5.text-muted(itemprop="jobTitle")= resume.basics.label

    hr

    .contact-details.clearfix
      if resume.basics.computed_location
        +profile_card_detail("icon-location", resume.basics.computed_location)
      if resume.basics.phone
        +profile_card_detail("icon-phone", resume.basics.phone, "telephone")
      if resume.basics.email
        +profile_card_detail("icon-mail")
          a.link-disguise(href="mailto:" + resume.basics.email, itemprop="email")= resume.basics.email
      if resume.basics.website
        +profile_card_detail("icon-link")
          a(href=resume.basics.website, target="_blank")= resume.basics.website
      if resume.basics.languages
        +profile_card_detail('icon-language', resume.basics.languages, null, 'Languages I speak')

    hr

    .social-links.text-center
      div
        +render_links(resume.basics.top_five_profiles)

        if resume.basics.remaining_profiles.length > 0
          button.btn.btn-default.btn-sm.btn-circle-sm.pull-right.js-profiles-collapse(
            data-toggle="collapse",
            data-target="#remaining-profiles")
            i.icon-chevron-down.fs-lg

          #remaining-profiles.collapse.text-left
            +render_links(resume.basics.remaining_profiles)
`,"pug/background-card.pug":`section.col-md-9.card-wrapper.pull-right
  .card.background-card
    h4.text-uppercase Background
    hr

    .background-details
      include background/about.pug
      include background/work-experience.pug
      include background/projects-experience.pug
      include background/skills.pug
      include background/education.pug
      include background/awards.pug
      include background/volunteer-work.pug
      include background/publications.pug
      include background/interests.pug
      include background/references.pug
`,"pug/background/about.pug":`unless _.isEmpty(resume.basics.summary)
  .detail#about
    .icon
      i.fs-lg.icon-board
      span.mobile-title About
    .info
      h4.title.text-uppercase About

      .card.card-nested
        .content.mop-wrapper(itemprop="description")!= resume.basics.summary
`,"pug/background/work-experience.pug":`unless _.isEmpty(resume.work)
  .detail#work-experience
    .icon
      i.fs-lg.icon-office
      span.mobile-title Work Experience

    .info
      h4.title.text-uppercase Work Experience

      ul.list-unstyled.clear-margin
        each experience in resume.work
          li.card.card-nested.clearfix
            .content
              p.clear-margin.relative
                if !experience.endDate
                  i.icon-circle.current-event(
                    rel="tooltip",
                    title="Currently Working",
                    data-placement="left"
                  )
                strong= experience.position
                |,&nbsp;
                if experience.website
                  a(href=experience.website, target="_blank")= experience.company
                else
                  |#{experience.company}

              p.text-muted
                small
                  span.space-right
                    |#{experience.startDate} - #{experience.endDate || 'Present'}

                  if experience.duration
                    span
                      i.icon-clock.mr-5
                      |#{experience.duration}

              .mop-wrapper.space-bottom!= experience.summary

              unless _.isEmpty(experience.highlights)
                ul
                  each highlight in experience.highlights
                    li.mop-wrapper!= highlight
`,"pug/background/projects-experience.pug":`unless _.isEmpty(resume.projects)
  .detail#projects-experience
    .icon
      i.fs-lg.icon-code
      span.mobile-title Projects Experience

    .info
      h4.title.text-uppercase Projects Experience

      ul.list-unstyled.clear-margin
        each project in resume.projects
          li.card.card-nested.clearfix
            .content
              p.clear-margin.relative
                if !project.endDate
                  i.icon-circle.current-event(
                    rel="tooltip",
                    title="Currently Working",
                    data-placement="left"
                  )
                strong=project.name
                |,&nbsp;
                if project.website
                  a(href=project.website, target="_blank")= project.company
                else
                  |#{project.company}

              p.text-muted
                small
                  span.space-right
                    |#{project.startDate} - #{project.endDate || 'Present'}

                  if project.duration
                    span
                      i.icon-clock.mr-5
                      |#{project.duration}

              .mop-wrapper.space-bottom!= project.summary

              unless _.isEmpty(project.highlights)
                ul
                  each highlight in project.highlights
                    li.mop-wrapper!= highlight
`,"pug/background/skills.pug":`unless _.isEmpty(resume.skills)
  .detail#skills
    .icon
      i.fs-lg.icon-tools
      span.mobile-title Skills

    .info
      h4.title.text-uppercase Skills

      .content
        ul.list-unstyled.clear-margin
          each skill in resume.skills
            li.card.card-nested.card-skills
              if skill.display_progress_bar
                .skill-level(data-toggle="tooltip", title=skill.level, data-placement="left")
                  .skill-progress(class=skill.skill_class)

              .skill-info
                strong= skill.name

                unless _.isEmpty(skill.keywords)
                  .space-top.labels
                    each keyword in skill.keywords
                      span.label.label-keyword= keyword
`,"pug/background/education.pug":`unless _.isEmpty(resume.education)
  .detail#education
    .icon
      i.fs-lg.icon-graduation-cap
      span.mobile-title Education

    .info
      h4.title.text-uppercase Education

      .content
        ul.list-unstyled.clear-margin
          each education_info in resume.education
            li.card.card-nested
              .content
                p.clear-margin.relative
                  if !education_info.endDate
                    i.icon-circle.current-event(
                      rel="tooltip",
                      title="Currently Pursuing",
                      data-placement="left"
                    )

                  strong
                    |#{education_info.area}, #{education_info.studyType},&nbsp;
                  |#{education_info.institution}

                p.text-muted(class=!education_info.gpa && _.isEmpty(education_info.courses) ? 'clear-margin' : '')
                  small
                    |#{education_info.startDate} - #{education_info.endDate || 'Present'}
                i= education_info.gpa

                unless _.isEmpty(education_info.courses)
                  .space-top.labels
                    each course in education_info.courses
                      span.label.label-keyword= course
`,"pug/background/awards.pug":`unless _.isEmpty(resume.awards)
  .detail#awards
    .icon
      i.fs-lg.icon-trophy
      span.mobile-title Awards

    .info
      h4.title.text-uppercase Awards

      .content
        ul.list-unstyled.clear-margin
          each award in resume.awards
            li.card.card-nested
              .content
                p.clear-margin(itemprop="award")
                  strong= award.title + " "
                  |#{award.awarder}

                p.text-muted
                  small
                    |Awarded on: #{award.date}

                .mop-wrapper!= award.summary
`,"pug/background/volunteer-work.pug":`unless _.isEmpty(resume.volunteer)
  .detail#volunteer-work
    .icon
      i.fs-lg.icon-child
      span.mobile-title Volunteer Work

    .info
      h4.title.text-uppercase Volunteer Work

      .content
        ul.list-unstyled.clear-margin
          each volunteer_info in resume.volunteer
            li.card.card-nested
              .content
                p.clear-margin.relative
                  if !volunteer_info.endDate
                    i.icon-circle.current-event(
                      rel="tooltip",
                      title="Currently Volunteering",
                      data-placement="left"
                    )

                  strong= volunteer_info.position + ', '
                  if volunteer_info.website
                    a(href=volunteer_info.website, target="_blank")= volunteer_info.organization
                  else
                    |#{volunteer_info.organization}

                p.text-muted
                  small
                    |#{volunteer_info.startDate} - #{volunteer_info.endDate || 'Present'}

                .mop-wrapper!= volunteer_info.summary

                unless _.isEmpty(volunteer_info.highlights)
                  ul
                    each highlight in volunteer_info.highlights
                      li.mop-wrapper!= highlight
`,"pug/background/publications.pug":`
unless _.isEmpty(resume.publications)
  .detail#publications
    .icon
      i.fs-lg.icon-newspaper
      span.mobile-title Publications

    .info
      h4.title.text-uppercase Publications

      .content
        ul.list-unstyled.clear-margin
          each publication in resume.publications
            li.card.card-nested
              .content
                p.clear-margin
                  strong
                    if publication.website
                      a(href=publication.website, target="_blank")= publication.name
                      |&nbsp;,&nbsp;
                    else
                      |#{publication.name + ', '}
                  |#{publication.publisher}

                p.text-muted
                  small= 'Published on: ' + publication.releaseDate

                .mop-wrapper!= publication.summary
`,"pug/background/interests.pug":`unless _.isEmpty(resume.interests)
  .detail#interests
    .icon
      i.fs-lg.icon-heart
      span.mobile-title Interests

    .info
      h4.title.text-uppercase Interests

      .content
        ul.list-unstyled.clear-margin
          each interest in resume.interests
            li.card.card-nested
              p
                strong= interest.name

              unless _.isEmpty(interest.keywords)
                .space-top.labels
                  each keyword in interest.keywords
                    span.label.label-keyword= keyword
`,"pug/background/references.pug":`unless _.isEmpty(resume.references)
  .detail#references
    .icon
      i.fs-lg.icon-thumbs-up
      span.mobile-title References

    .info
      h4.title.text-uppercase References

      .content
        ul.list-unstyled.clear-margin
          each reference_info in resume.references
            li.card.card-nested
              if reference_info.website
                a(href=reference_info.website, target="_blank")= reference_info.name
              else
                |#{reference_info.name}

              blockquote.quote
                .mop-wrapper!= reference_info.reference
`,"pug/scripts.pug":`script(src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js")
script(src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js")

script.
  $(function () {
    var toggleFloatingMenu = function() {
      $( '.js-floating-nav' ).toggleClass( 'is-visible' );
      $( '.js-floating-nav-trigger' ).toggleClass( 'is-open' );
    };

    $( ".background-card" ).css( "min-height", window.screen.availHeight + "px" );
    $( "[data-toggle=tooltip]" ).tooltip();
    $( '.js-floating-nav-trigger' ).on( 'click', function(e) {
      e.preventDefault();
      toggleFloatingMenu();
    });
    $( '.js-floating-nav a' ).on( 'click', toggleFloatingMenu );

    $("#remaining-profiles").on('show.bs.collapse', function() {
      $( '.js-profiles-collapse > i' )
        .removeClass( 'icon-chevron-down' )
        .addClass( 'icon-chevron-up' );
    });

    $("#remaining-profiles").on('hidden.bs.collapse', function() {
      $( '.js-profiles-collapse > i' )
        .removeClass( 'icon-chevron-up' )
        .addClass( 'icon-chevron-down' );
    });
  });

script.
  WebFontConfig = {
    google: { families: [ 'Lato:300,400,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
`},p=a||{};(function(h,m,q,S){r=1,t="index.pug",e=e+"<!DOCTYPE html>",r=2,t="index.pug",e=e+'<html lang="en">',r=3,t="index.pug",e=e+"<head>",r=4,t="index.pug",e=e+'<meta charset="utf-8"/>',r=5,t="index.pug",e=e+'<meta http-equiv="X-UA-Compatible" content="IE=edge"/>',r=6,t="index.pug",e=e+'<meta name="viewport" content="width=device-width, initial-scale=1"/>',r=7,t="index.pug",e=e+"<title>",r=7,t="index.pug",e=e+W((s=S.basics.name)==null?"":s)+"</title>",r=1,t="pug/stylesheets.pug",e=e+'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>',r=2,t="pug/stylesheets.pug",e=e+"<style>",r=2,t="pug/stylesheets.pug",e=e+((s=m)==null?"":s)+"</style></head>",r=10,t="index.pug",e=e+"<body"+(ce("itemscope",!0,!0,!1)+' itemtype="http://schema.org/Person"')+">",r=11,t="index.pug",e=e+'<div class="container-fluid">',r=12,t="index.pug",e=e+'<div class="row main clearfix">',r=1,t="pug/floating-nav.pug",o.make_nav_link=s=function(F){var D=this&&this.block,C=this&&this.attributes||{};r=2,t="pug/floating-nav.pug",e=e+"<li>",r=3,t="pug/floating-nav.pug",e=e+"<a"+ce("href","#"+F.target,!0,!1)+">",r=4,t="pug/floating-nav.pug",e=e+"<i"+ce("class",vn(["mr-10","icon-"+F.icon],[!1,!0]),!1,!1)+"></i>",r=5,t="pug/floating-nav.pug",e=e+W((s=F.label)==null?"":s)+"</a></li>"},r=7,t="pug/floating-nav.pug",e=e+'<a class="js-floating-nav-trigger floating-nav-trigger" href="#">',r=8,t="pug/floating-nav.pug",e=e+'<i class="icon-bars"></i>',r=9,t="pug/floating-nav.pug",e=e+'<span class="close-icon">',r=9,t="pug/floating-nav.pug",e=e+"&times;</span></a>",r=11,t="pug/floating-nav.pug",e=e+'<nav class="floating-nav js-floating-nav">',r=12,t="pug/floating-nav.pug",e=e+'<ul class="list-unstyled">',r=13,t="pug/floating-nav.pug",(function(){var F=q;if(typeof F.length=="number")for(var D=0,C=F.length;D<C;D++){var b=F[D];r=14,t="pug/floating-nav.pug",o.make_nav_link(b)}else{var C=0;for(var D in F){C++;var b=F[D];r=14,t="pug/floating-nav.pug",o.make_nav_link(b)}}}).call(this),e=e+"</ul></nav>",r=1,t="pug/profile-card.pug",o.profile_card_detail=s=function(F,D,C,b){var R=this&&this.block,P=this&&this.attributes||{};r=2,t="pug/profile-card.pug",e=e+'<div class="detail">',r=3,t="pug/profile-card.pug",e=e+"<span"+(' class="icon"'+ce("title",b,!0,!1))+">",r=4,t="pug/profile-card.pug",e=e+"<i"+ce("class",vn(["icon","fs-lg",F],[!1,!1,!0]),!1,!1)+"></i></span>",r=5,t="pug/profile-card.pug",e=e+"<span"+(' class="info"'+ce("itemprop",C,!0,!1))+">",r=6,t="pug/profile-card.pug",R?(r=7,t="pug/profile-card.pug",R&&R()):(r=9,t="pug/profile-card.pug",e=e+W((s=D)==null?"":s)),e=e+"</span></div>"},r=11,t="pug/profile-card.pug",o.render_links=s=function(F){var D=this&&this.block,C=this&&this.attributes||{};r=12,t="pug/profile-card.pug",(function(){var b=F;if(typeof b.length=="number")for(var R=0,P=b.length;R<P;R++){var T=b[R];r=13,t="pug/profile-card.pug",e=e+"<a"+(ce("class",vn(["fs-2x","social-link","link-"+T.label+" icon-"+T.label],[!1,!1,!0]),!1,!1)+ce("href",T.url,!0,!1)+' target="_blank" data-toggle="tooltip"'+ce("title",S.basics.name+" on "+T.network,!0,!1))+">",r=19,t="pug/profile-card.pug",T.network.toLowerCase()=="meetup"&&(r=20,t="pug/profile-card.pug",e=e+'<span class="path2"></span>',r=21,t="pug/profile-card.pug",e=e+'<span class="path3"></span>'),r=22,t="pug/profile-card.pug",T.network.toLowerCase()=="gitlab"&&(r=23,t="pug/profile-card.pug",e=e+'<span class="path1"></span>',r=24,t="pug/profile-card.pug",e=e+'<span class="path2"></span>',r=25,t="pug/profile-card.pug",e=e+'<span class="path3"></span>',r=26,t="pug/profile-card.pug",e=e+'<span class="path4"></span>',r=27,t="pug/profile-card.pug",e=e+'<span class="path5"></span>',r=28,t="pug/profile-card.pug",e=e+'<span class="path6"></span>',r=29,t="pug/profile-card.pug",e=e+'<span class="path7"></span>',r=30,t="pug/profile-card.pug",e=e+'<span class="path8"></span>'),e=e+"</a>"}else{var P=0;for(var R in b){P++;var T=b[R];r=13,t="pug/profile-card.pug",e=e+"<a"+(ce("class",vn(["fs-2x","social-link","link-"+T.label+" icon-"+T.label],[!1,!1,!0]),!1,!1)+ce("href",T.url,!0,!1)+' target="_blank" data-toggle="tooltip"'+ce("title",S.basics.name+" on "+T.network,!0,!1))+">",r=19,t="pug/profile-card.pug",T.network.toLowerCase()=="meetup"&&(r=20,t="pug/profile-card.pug",e=e+'<span class="path2"></span>',r=21,t="pug/profile-card.pug",e=e+'<span class="path3"></span>'),r=22,t="pug/profile-card.pug",T.network.toLowerCase()=="gitlab"&&(r=23,t="pug/profile-card.pug",e=e+'<span class="path1"></span>',r=24,t="pug/profile-card.pug",e=e+'<span class="path2"></span>',r=25,t="pug/profile-card.pug",e=e+'<span class="path3"></span>',r=26,t="pug/profile-card.pug",e=e+'<span class="path4"></span>',r=27,t="pug/profile-card.pug",e=e+'<span class="path5"></span>',r=28,t="pug/profile-card.pug",e=e+'<span class="path6"></span>',r=29,t="pug/profile-card.pug",e=e+'<span class="path7"></span>',r=30,t="pug/profile-card.pug",e=e+'<span class="path8"></span>'),e=e+"</a>"}}}).call(this)},r=32,t="pug/profile-card.pug",e=e+'<section class="col-md-3 card-wrapper profile-card-wrapper affix">',r=33,t="pug/profile-card.pug",e=e+'<div class="card profile-card">',r=34,t="pug/profile-card.pug",e=e+'<span class="profile-pic-container">',r=35,t="pug/profile-card.pug",e=e+'<div class="profile-pic">',r=36,t="pug/profile-card.pug",e=e+"<img"+(' class="media-object img-circle center-block" data-src="holder.js/100x100"'+ce("alt",S.basics.name,!0,!1)+ce("src",S.basics.picture,!0,!1)+' itemprop="image"')+"/></div>",r=42,t="pug/profile-card.pug",e=e+'<div class="name-and-profession text-center">',r=43,t="pug/profile-card.pug",e=e+'<h3 itemprop="name">',r=43,t="pug/profile-card.pug",e=e+"<b>",r=43,t="pug/profile-card.pug",e=e+W((s=S.basics.name)==null?"":s)+"</b></h3>",r=44,t="pug/profile-card.pug",e=e+'<h5 class="text-muted" itemprop="jobTitle">',r=44,t="pug/profile-card.pug",e=e+W((s=S.basics.label)==null?"":s)+"</h5></div></span>",r=46,t="pug/profile-card.pug",e=e+"<hr/>",r=48,t="pug/profile-card.pug",e=e+'<div class="contact-details clearfix">',r=49,t="pug/profile-card.pug",S.basics.computed_location&&(r=50,t="pug/profile-card.pug",o.profile_card_detail("icon-location",S.basics.computed_location)),r=51,t="pug/profile-card.pug",S.basics.phone&&(r=52,t="pug/profile-card.pug",o.profile_card_detail("icon-phone",S.basics.phone,"telephone")),r=53,t="pug/profile-card.pug",S.basics.email&&(r=54,t="pug/profile-card.pug",o.profile_card_detail.call({block:function(){r=55,t="pug/profile-card.pug",e=e+"<a"+(' class="link-disguise"'+ce("href","mailto:"+S.basics.email,!0,!1)+' itemprop="email"')+">",r=55,t="pug/profile-card.pug",e=e+W((s=S.basics.email)==null?"":s)+"</a>"}},"icon-mail")),r=56,t="pug/profile-card.pug",S.basics.website&&(r=57,t="pug/profile-card.pug",o.profile_card_detail.call({block:function(){r=58,t="pug/profile-card.pug",e=e+"<a"+(ce("href",S.basics.website,!0,!1)+' target="_blank"')+">",r=58,t="pug/profile-card.pug",e=e+W((s=S.basics.website)==null?"":s)+"</a>"}},"icon-link")),r=59,t="pug/profile-card.pug",S.basics.languages&&(r=60,t="pug/profile-card.pug",o.profile_card_detail("icon-language",S.basics.languages,null,"Languages I speak")),e=e+"</div>",r=62,t="pug/profile-card.pug",e=e+"<hr/>",r=64,t="pug/profile-card.pug",e=e+'<div class="social-links text-center">',r=65,t="pug/profile-card.pug",e=e+"<div>",r=66,t="pug/profile-card.pug",o.render_links(S.basics.top_five_profiles),r=68,t="pug/profile-card.pug",S.basics.remaining_profiles.length>0&&(r=69,t="pug/profile-card.pug",e=e+'<button class="btn btn-default btn-sm btn-circle-sm pull-right js-profiles-collapse" data-toggle="collapse" data-target="#remaining-profiles">',r=72,t="pug/profile-card.pug",e=e+'<i class="icon-chevron-down fs-lg"></i></button>',r=74,t="pug/profile-card.pug",e=e+'<div class="collapse text-left" id="remaining-profiles">',r=75,t="pug/profile-card.pug",o.render_links(S.basics.remaining_profiles),e=e+"</div>"),e=e+"</div></div></div></section>",r=1,t="pug/background-card.pug",e=e+'<section class="col-md-9 card-wrapper pull-right">',r=2,t="pug/background-card.pug",e=e+'<div class="card background-card">',r=3,t="pug/background-card.pug",e=e+'<h4 class="text-uppercase">',r=3,t="pug/background-card.pug",e=e+"Background</h4>",r=4,t="pug/background-card.pug",e=e+"<hr/>",r=6,t="pug/background-card.pug",e=e+'<div class="background-details">',r=1,t="pug/background/about.pug",h.isEmpty(S.basics.summary)||(r=2,t="pug/background/about.pug",e=e+'<div class="detail" id="about">',r=3,t="pug/background/about.pug",e=e+'<div class="icon">',r=4,t="pug/background/about.pug",e=e+'<i class="fs-lg icon-board"></i>',r=5,t="pug/background/about.pug",e=e+'<span class="mobile-title">',r=5,t="pug/background/about.pug",e=e+"About</span></div>",r=6,t="pug/background/about.pug",e=e+'<div class="info">',r=7,t="pug/background/about.pug",e=e+'<h4 class="title text-uppercase">',r=7,t="pug/background/about.pug",e=e+"About</h4>",r=9,t="pug/background/about.pug",e=e+'<div class="card card-nested">',r=10,t="pug/background/about.pug",e=e+'<div class="content mop-wrapper" itemprop="description">',r=10,t="pug/background/about.pug",e=e+((s=S.basics.summary)==null?"":s)+"</div></div></div></div>"),r=1,t="pug/background/work-experience.pug",h.isEmpty(S.work)||(r=2,t="pug/background/work-experience.pug",e=e+'<div class="detail" id="work-experience">',r=3,t="pug/background/work-experience.pug",e=e+'<div class="icon">',r=4,t="pug/background/work-experience.pug",e=e+'<i class="fs-lg icon-office"></i>',r=5,t="pug/background/work-experience.pug",e=e+'<span class="mobile-title">',r=5,t="pug/background/work-experience.pug",e=e+"Work Experience</span></div>",r=7,t="pug/background/work-experience.pug",e=e+'<div class="info">',r=8,t="pug/background/work-experience.pug",e=e+'<h4 class="title text-uppercase">',r=8,t="pug/background/work-experience.pug",e=e+"Work Experience</h4>",r=10,t="pug/background/work-experience.pug",e=e+'<ul class="list-unstyled clear-margin">',r=11,t="pug/background/work-experience.pug",(function(){var F=S.work;if(typeof F.length=="number")for(var D=0,C=F.length;D<C;D++){var b=F[D];r=12,t="pug/background/work-experience.pug",e=e+'<li class="card card-nested clearfix">',r=13,t="pug/background/work-experience.pug",e=e+'<div class="content">',r=14,t="pug/background/work-experience.pug",e=e+'<p class="clear-margin relative">',r=15,t="pug/background/work-experience.pug",b.endDate||(r=16,t="pug/background/work-experience.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),r=21,t="pug/background/work-experience.pug",e=e+"<strong>",r=21,t="pug/background/work-experience.pug",e=e+W((s=b.position)==null?"":s)+"</strong>",r=22,t="pug/background/work-experience.pug",e=e+",&nbsp;",r=23,t="pug/background/work-experience.pug",b.website?(r=24,t="pug/background/work-experience.pug",e=e+"<a"+(ce("href",b.website,!0,!1)+' target="_blank"')+">",r=24,t="pug/background/work-experience.pug",e=e+W((s=b.company)==null?"":s)+"</a>"):(r=26,t="pug/background/work-experience.pug",e=e+W((s=b.company)==null?"":s)),e=e+"</p>",r=28,t="pug/background/work-experience.pug",e=e+'<p class="text-muted">',r=29,t="pug/background/work-experience.pug",e=e+"<small>",r=30,t="pug/background/work-experience.pug",e=e+'<span class="space-right">',r=31,t="pug/background/work-experience.pug",e=e+W((s=b.startDate)==null?"":s),r=31,t="pug/background/work-experience.pug",e=e+" - ",r=31,t="pug/background/work-experience.pug",e=e+W((s=b.endDate||"Present")==null?"":s)+"</span>",r=33,t="pug/background/work-experience.pug",b.duration&&(r=34,t="pug/background/work-experience.pug",e=e+"<span>",r=35,t="pug/background/work-experience.pug",e=e+'<i class="icon-clock mr-5"></i>',r=36,t="pug/background/work-experience.pug",e=e+W((s=b.duration)==null?"":s)+"</span>"),e=e+"</small></p>",r=38,t="pug/background/work-experience.pug",e=e+'<div class="mop-wrapper space-bottom">',r=38,t="pug/background/work-experience.pug",e=e+((s=b.summary)==null?"":s)+"</div>",r=40,t="pug/background/work-experience.pug",h.isEmpty(b.highlights)||(r=41,t="pug/background/work-experience.pug",e=e+"<ul>",r=42,t="pug/background/work-experience.pug",(function(){var R=b.highlights;if(typeof R.length=="number")for(var P=0,T=R.length;P<T;P++){var O=R[P];r=43,t="pug/background/work-experience.pug",e=e+'<li class="mop-wrapper">',r=43,t="pug/background/work-experience.pug",e=e+((s=O)==null?"":s)+"</li>"}else{var T=0;for(var P in R){T++;var O=R[P];r=43,t="pug/background/work-experience.pug",e=e+'<li class="mop-wrapper">',r=43,t="pug/background/work-experience.pug",e=e+((s=O)==null?"":s)+"</li>"}}}).call(this),e=e+"</ul>"),e=e+"</div></li>"}else{var C=0;for(var D in F){C++;var b=F[D];r=12,t="pug/background/work-experience.pug",e=e+'<li class="card card-nested clearfix">',r=13,t="pug/background/work-experience.pug",e=e+'<div class="content">',r=14,t="pug/background/work-experience.pug",e=e+'<p class="clear-margin relative">',r=15,t="pug/background/work-experience.pug",b.endDate||(r=16,t="pug/background/work-experience.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),r=21,t="pug/background/work-experience.pug",e=e+"<strong>",r=21,t="pug/background/work-experience.pug",e=e+W((s=b.position)==null?"":s)+"</strong>",r=22,t="pug/background/work-experience.pug",e=e+",&nbsp;",r=23,t="pug/background/work-experience.pug",b.website?(r=24,t="pug/background/work-experience.pug",e=e+"<a"+(ce("href",b.website,!0,!1)+' target="_blank"')+">",r=24,t="pug/background/work-experience.pug",e=e+W((s=b.company)==null?"":s)+"</a>"):(r=26,t="pug/background/work-experience.pug",e=e+W((s=b.company)==null?"":s)),e=e+"</p>",r=28,t="pug/background/work-experience.pug",e=e+'<p class="text-muted">',r=29,t="pug/background/work-experience.pug",e=e+"<small>",r=30,t="pug/background/work-experience.pug",e=e+'<span class="space-right">',r=31,t="pug/background/work-experience.pug",e=e+W((s=b.startDate)==null?"":s),r=31,t="pug/background/work-experience.pug",e=e+" - ",r=31,t="pug/background/work-experience.pug",e=e+W((s=b.endDate||"Present")==null?"":s)+"</span>",r=33,t="pug/background/work-experience.pug",b.duration&&(r=34,t="pug/background/work-experience.pug",e=e+"<span>",r=35,t="pug/background/work-experience.pug",e=e+'<i class="icon-clock mr-5"></i>',r=36,t="pug/background/work-experience.pug",e=e+W((s=b.duration)==null?"":s)+"</span>"),e=e+"</small></p>",r=38,t="pug/background/work-experience.pug",e=e+'<div class="mop-wrapper space-bottom">',r=38,t="pug/background/work-experience.pug",e=e+((s=b.summary)==null?"":s)+"</div>",r=40,t="pug/background/work-experience.pug",h.isEmpty(b.highlights)||(r=41,t="pug/background/work-experience.pug",e=e+"<ul>",r=42,t="pug/background/work-experience.pug",(function(){var O=b.highlights;if(typeof O.length=="number")for(var y=0,z=O.length;y<z;y++){var E=O[y];r=43,t="pug/background/work-experience.pug",e=e+'<li class="mop-wrapper">',r=43,t="pug/background/work-experience.pug",e=e+((s=E)==null?"":s)+"</li>"}else{var z=0;for(var y in O){z++;var E=O[y];r=43,t="pug/background/work-experience.pug",e=e+'<li class="mop-wrapper">',r=43,t="pug/background/work-experience.pug",e=e+((s=E)==null?"":s)+"</li>"}}}).call(this),e=e+"</ul>"),e=e+"</div></li>"}}}).call(this),e=e+"</ul></div></div>"),r=1,t="pug/background/projects-experience.pug",h.isEmpty(S.projects)||(r=2,t="pug/background/projects-experience.pug",e=e+'<div class="detail" id="projects-experience">',r=3,t="pug/background/projects-experience.pug",e=e+'<div class="icon">',r=4,t="pug/background/projects-experience.pug",e=e+'<i class="fs-lg icon-code"></i>',r=5,t="pug/background/projects-experience.pug",e=e+'<span class="mobile-title">',r=5,t="pug/background/projects-experience.pug",e=e+"Projects Experience</span></div>",r=7,t="pug/background/projects-experience.pug",e=e+'<div class="info">',r=8,t="pug/background/projects-experience.pug",e=e+'<h4 class="title text-uppercase">',r=8,t="pug/background/projects-experience.pug",e=e+"Projects Experience</h4>",r=10,t="pug/background/projects-experience.pug",e=e+'<ul class="list-unstyled clear-margin">',r=11,t="pug/background/projects-experience.pug",(function(){var F=S.projects;if(typeof F.length=="number")for(var D=0,C=F.length;D<C;D++){var b=F[D];r=12,t="pug/background/projects-experience.pug",e=e+'<li class="card card-nested clearfix">',r=13,t="pug/background/projects-experience.pug",e=e+'<div class="content">',r=14,t="pug/background/projects-experience.pug",e=e+'<p class="clear-margin relative">',r=15,t="pug/background/projects-experience.pug",b.endDate||(r=16,t="pug/background/projects-experience.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),r=21,t="pug/background/projects-experience.pug",e=e+"<strong>",r=21,t="pug/background/projects-experience.pug",e=e+W((s=b.name)==null?"":s)+"</strong>",r=22,t="pug/background/projects-experience.pug",e=e+",&nbsp;",r=23,t="pug/background/projects-experience.pug",b.website?(r=24,t="pug/background/projects-experience.pug",e=e+"<a"+(ce("href",b.website,!0,!1)+' target="_blank"')+">",r=24,t="pug/background/projects-experience.pug",e=e+W((s=b.company)==null?"":s)+"</a>"):(r=26,t="pug/background/projects-experience.pug",e=e+W((s=b.company)==null?"":s)),e=e+"</p>",r=28,t="pug/background/projects-experience.pug",e=e+'<p class="text-muted">',r=29,t="pug/background/projects-experience.pug",e=e+"<small>",r=30,t="pug/background/projects-experience.pug",e=e+'<span class="space-right">',r=31,t="pug/background/projects-experience.pug",e=e+W((s=b.startDate)==null?"":s),r=31,t="pug/background/projects-experience.pug",e=e+" - ",r=31,t="pug/background/projects-experience.pug",e=e+W((s=b.endDate||"Present")==null?"":s)+"</span>",r=33,t="pug/background/projects-experience.pug",b.duration&&(r=34,t="pug/background/projects-experience.pug",e=e+"<span>",r=35,t="pug/background/projects-experience.pug",e=e+'<i class="icon-clock mr-5"></i>',r=36,t="pug/background/projects-experience.pug",e=e+W((s=b.duration)==null?"":s)+"</span>"),e=e+"</small></p>",r=38,t="pug/background/projects-experience.pug",e=e+'<div class="mop-wrapper space-bottom">',r=38,t="pug/background/projects-experience.pug",e=e+((s=b.summary)==null?"":s)+"</div>",r=40,t="pug/background/projects-experience.pug",h.isEmpty(b.highlights)||(r=41,t="pug/background/projects-experience.pug",e=e+"<ul>",r=42,t="pug/background/projects-experience.pug",(function(){var R=b.highlights;if(typeof R.length=="number")for(var P=0,T=R.length;P<T;P++){var O=R[P];r=43,t="pug/background/projects-experience.pug",e=e+'<li class="mop-wrapper">',r=43,t="pug/background/projects-experience.pug",e=e+((s=O)==null?"":s)+"</li>"}else{var T=0;for(var P in R){T++;var O=R[P];r=43,t="pug/background/projects-experience.pug",e=e+'<li class="mop-wrapper">',r=43,t="pug/background/projects-experience.pug",e=e+((s=O)==null?"":s)+"</li>"}}}).call(this),e=e+"</ul>"),e=e+"</div></li>"}else{var C=0;for(var D in F){C++;var b=F[D];r=12,t="pug/background/projects-experience.pug",e=e+'<li class="card card-nested clearfix">',r=13,t="pug/background/projects-experience.pug",e=e+'<div class="content">',r=14,t="pug/background/projects-experience.pug",e=e+'<p class="clear-margin relative">',r=15,t="pug/background/projects-experience.pug",b.endDate||(r=16,t="pug/background/projects-experience.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),r=21,t="pug/background/projects-experience.pug",e=e+"<strong>",r=21,t="pug/background/projects-experience.pug",e=e+W((s=b.name)==null?"":s)+"</strong>",r=22,t="pug/background/projects-experience.pug",e=e+",&nbsp;",r=23,t="pug/background/projects-experience.pug",b.website?(r=24,t="pug/background/projects-experience.pug",e=e+"<a"+(ce("href",b.website,!0,!1)+' target="_blank"')+">",r=24,t="pug/background/projects-experience.pug",e=e+W((s=b.company)==null?"":s)+"</a>"):(r=26,t="pug/background/projects-experience.pug",e=e+W((s=b.company)==null?"":s)),e=e+"</p>",r=28,t="pug/background/projects-experience.pug",e=e+'<p class="text-muted">',r=29,t="pug/background/projects-experience.pug",e=e+"<small>",r=30,t="pug/background/projects-experience.pug",e=e+'<span class="space-right">',r=31,t="pug/background/projects-experience.pug",e=e+W((s=b.startDate)==null?"":s),r=31,t="pug/background/projects-experience.pug",e=e+" - ",r=31,t="pug/background/projects-experience.pug",e=e+W((s=b.endDate||"Present")==null?"":s)+"</span>",r=33,t="pug/background/projects-experience.pug",b.duration&&(r=34,t="pug/background/projects-experience.pug",e=e+"<span>",r=35,t="pug/background/projects-experience.pug",e=e+'<i class="icon-clock mr-5"></i>',r=36,t="pug/background/projects-experience.pug",e=e+W((s=b.duration)==null?"":s)+"</span>"),e=e+"</small></p>",r=38,t="pug/background/projects-experience.pug",e=e+'<div class="mop-wrapper space-bottom">',r=38,t="pug/background/projects-experience.pug",e=e+((s=b.summary)==null?"":s)+"</div>",r=40,t="pug/background/projects-experience.pug",h.isEmpty(b.highlights)||(r=41,t="pug/background/projects-experience.pug",e=e+"<ul>",r=42,t="pug/background/projects-experience.pug",(function(){var O=b.highlights;if(typeof O.length=="number")for(var y=0,z=O.length;y<z;y++){var E=O[y];r=43,t="pug/background/projects-experience.pug",e=e+'<li class="mop-wrapper">',r=43,t="pug/background/projects-experience.pug",e=e+((s=E)==null?"":s)+"</li>"}else{var z=0;for(var y in O){z++;var E=O[y];r=43,t="pug/background/projects-experience.pug",e=e+'<li class="mop-wrapper">',r=43,t="pug/background/projects-experience.pug",e=e+((s=E)==null?"":s)+"</li>"}}}).call(this),e=e+"</ul>"),e=e+"</div></li>"}}}).call(this),e=e+"</ul></div></div>"),r=1,t="pug/background/skills.pug",h.isEmpty(S.skills)||(r=2,t="pug/background/skills.pug",e=e+'<div class="detail" id="skills">',r=3,t="pug/background/skills.pug",e=e+'<div class="icon">',r=4,t="pug/background/skills.pug",e=e+'<i class="fs-lg icon-tools"></i>',r=5,t="pug/background/skills.pug",e=e+'<span class="mobile-title">',r=5,t="pug/background/skills.pug",e=e+"Skills</span></div>",r=7,t="pug/background/skills.pug",e=e+'<div class="info">',r=8,t="pug/background/skills.pug",e=e+'<h4 class="title text-uppercase">',r=8,t="pug/background/skills.pug",e=e+"Skills</h4>",r=10,t="pug/background/skills.pug",e=e+'<div class="content">',r=11,t="pug/background/skills.pug",e=e+'<ul class="list-unstyled clear-margin">',r=12,t="pug/background/skills.pug",(function(){var F=S.skills;if(typeof F.length=="number")for(var D=0,C=F.length;D<C;D++){var b=F[D];r=13,t="pug/background/skills.pug",e=e+'<li class="card card-nested card-skills">',r=14,t="pug/background/skills.pug",b.display_progress_bar&&(r=15,t="pug/background/skills.pug",e=e+"<div"+(' class="skill-level" data-toggle="tooltip"'+ce("title",b.level,!0,!1)+' data-placement="left"')+">",r=16,t="pug/background/skills.pug",e=e+"<div"+ce("class",vn(["skill-progress",b.skill_class],[!1,!0]),!1,!1)+"></div></div>"),r=18,t="pug/background/skills.pug",e=e+'<div class="skill-info">',r=19,t="pug/background/skills.pug",e=e+"<strong>",r=19,t="pug/background/skills.pug",e=e+W((s=b.name)==null?"":s)+"</strong>",r=21,t="pug/background/skills.pug",h.isEmpty(b.keywords)||(r=22,t="pug/background/skills.pug",e=e+'<div class="space-top labels">',r=23,t="pug/background/skills.pug",(function(){var R=b.keywords;if(typeof R.length=="number")for(var P=0,T=R.length;P<T;P++){var O=R[P];r=24,t="pug/background/skills.pug",e=e+'<span class="label label-keyword">',r=24,t="pug/background/skills.pug",e=e+W((s=O)==null?"":s)+"</span>"}else{var T=0;for(var P in R){T++;var O=R[P];r=24,t="pug/background/skills.pug",e=e+'<span class="label label-keyword">',r=24,t="pug/background/skills.pug",e=e+W((s=O)==null?"":s)+"</span>"}}}).call(this),e=e+"</div>"),e=e+"</div></li>"}else{var C=0;for(var D in F){C++;var b=F[D];r=13,t="pug/background/skills.pug",e=e+'<li class="card card-nested card-skills">',r=14,t="pug/background/skills.pug",b.display_progress_bar&&(r=15,t="pug/background/skills.pug",e=e+"<div"+(' class="skill-level" data-toggle="tooltip"'+ce("title",b.level,!0,!1)+' data-placement="left"')+">",r=16,t="pug/background/skills.pug",e=e+"<div"+ce("class",vn(["skill-progress",b.skill_class],[!1,!0]),!1,!1)+"></div></div>"),r=18,t="pug/background/skills.pug",e=e+'<div class="skill-info">',r=19,t="pug/background/skills.pug",e=e+"<strong>",r=19,t="pug/background/skills.pug",e=e+W((s=b.name)==null?"":s)+"</strong>",r=21,t="pug/background/skills.pug",h.isEmpty(b.keywords)||(r=22,t="pug/background/skills.pug",e=e+'<div class="space-top labels">',r=23,t="pug/background/skills.pug",(function(){var O=b.keywords;if(typeof O.length=="number")for(var y=0,z=O.length;y<z;y++){var E=O[y];r=24,t="pug/background/skills.pug",e=e+'<span class="label label-keyword">',r=24,t="pug/background/skills.pug",e=e+W((s=E)==null?"":s)+"</span>"}else{var z=0;for(var y in O){z++;var E=O[y];r=24,t="pug/background/skills.pug",e=e+'<span class="label label-keyword">',r=24,t="pug/background/skills.pug",e=e+W((s=E)==null?"":s)+"</span>"}}}).call(this),e=e+"</div>"),e=e+"</div></li>"}}}).call(this),e=e+"</ul></div></div></div>"),r=1,t="pug/background/education.pug",h.isEmpty(S.education)||(r=2,t="pug/background/education.pug",e=e+'<div class="detail" id="education">',r=3,t="pug/background/education.pug",e=e+'<div class="icon">',r=4,t="pug/background/education.pug",e=e+'<i class="fs-lg icon-graduation-cap"></i>',r=5,t="pug/background/education.pug",e=e+'<span class="mobile-title">',r=5,t="pug/background/education.pug",e=e+"Education</span></div>",r=7,t="pug/background/education.pug",e=e+'<div class="info">',r=8,t="pug/background/education.pug",e=e+'<h4 class="title text-uppercase">',r=8,t="pug/background/education.pug",e=e+"Education</h4>",r=10,t="pug/background/education.pug",e=e+'<div class="content">',r=11,t="pug/background/education.pug",e=e+'<ul class="list-unstyled clear-margin">',r=12,t="pug/background/education.pug",(function(){var F=S.education;if(typeof F.length=="number")for(var D=0,C=F.length;D<C;D++){var b=F[D];r=13,t="pug/background/education.pug",e=e+'<li class="card card-nested">',r=14,t="pug/background/education.pug",e=e+'<div class="content">',r=15,t="pug/background/education.pug",e=e+'<p class="clear-margin relative">',r=16,t="pug/background/education.pug",b.endDate||(r=17,t="pug/background/education.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Pursuing" data-placement="left"></i>'),r=23,t="pug/background/education.pug",e=e+"<strong>",r=24,t="pug/background/education.pug",e=e+W((s=b.area)==null?"":s),r=24,t="pug/background/education.pug",e=e+", ",r=24,t="pug/background/education.pug",e=e+W((s=b.studyType)==null?"":s),r=24,t="pug/background/education.pug",e=e+",&nbsp;</strong>",r=25,t="pug/background/education.pug",e=e+W((s=b.institution)==null?"":s)+"</p>",r=27,t="pug/background/education.pug",e=e+"<p"+ce("class",vn(["text-muted",!b.gpa&&h.isEmpty(b.courses)?"clear-margin":""],[!1,!0]),!1,!1)+">",r=28,t="pug/background/education.pug",e=e+"<small>",r=29,t="pug/background/education.pug",e=e+W((s=b.startDate)==null?"":s),r=29,t="pug/background/education.pug",e=e+" - ",r=29,t="pug/background/education.pug",e=e+W((s=b.endDate||"Present")==null?"":s)+"</small></p>",r=30,t="pug/background/education.pug",e=e+"<i>",r=30,t="pug/background/education.pug",e=e+W((s=b.gpa)==null?"":s)+"</i>",r=32,t="pug/background/education.pug",h.isEmpty(b.courses)||(r=33,t="pug/background/education.pug",e=e+'<div class="space-top labels">',r=34,t="pug/background/education.pug",(function(){var R=b.courses;if(typeof R.length=="number")for(var P=0,T=R.length;P<T;P++){var O=R[P];r=35,t="pug/background/education.pug",e=e+'<span class="label label-keyword">',r=35,t="pug/background/education.pug",e=e+W((s=O)==null?"":s)+"</span>"}else{var T=0;for(var P in R){T++;var O=R[P];r=35,t="pug/background/education.pug",e=e+'<span class="label label-keyword">',r=35,t="pug/background/education.pug",e=e+W((s=O)==null?"":s)+"</span>"}}}).call(this),e=e+"</div>"),e=e+"</div></li>"}else{var C=0;for(var D in F){C++;var b=F[D];r=13,t="pug/background/education.pug",e=e+'<li class="card card-nested">',r=14,t="pug/background/education.pug",e=e+'<div class="content">',r=15,t="pug/background/education.pug",e=e+'<p class="clear-margin relative">',r=16,t="pug/background/education.pug",b.endDate||(r=17,t="pug/background/education.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Pursuing" data-placement="left"></i>'),r=23,t="pug/background/education.pug",e=e+"<strong>",r=24,t="pug/background/education.pug",e=e+W((s=b.area)==null?"":s),r=24,t="pug/background/education.pug",e=e+", ",r=24,t="pug/background/education.pug",e=e+W((s=b.studyType)==null?"":s),r=24,t="pug/background/education.pug",e=e+",&nbsp;</strong>",r=25,t="pug/background/education.pug",e=e+W((s=b.institution)==null?"":s)+"</p>",r=27,t="pug/background/education.pug",e=e+"<p"+ce("class",vn(["text-muted",!b.gpa&&h.isEmpty(b.courses)?"clear-margin":""],[!1,!0]),!1,!1)+">",r=28,t="pug/background/education.pug",e=e+"<small>",r=29,t="pug/background/education.pug",e=e+W((s=b.startDate)==null?"":s),r=29,t="pug/background/education.pug",e=e+" - ",r=29,t="pug/background/education.pug",e=e+W((s=b.endDate||"Present")==null?"":s)+"</small></p>",r=30,t="pug/background/education.pug",e=e+"<i>",r=30,t="pug/background/education.pug",e=e+W((s=b.gpa)==null?"":s)+"</i>",r=32,t="pug/background/education.pug",h.isEmpty(b.courses)||(r=33,t="pug/background/education.pug",e=e+'<div class="space-top labels">',r=34,t="pug/background/education.pug",(function(){var O=b.courses;if(typeof O.length=="number")for(var y=0,z=O.length;y<z;y++){var E=O[y];r=35,t="pug/background/education.pug",e=e+'<span class="label label-keyword">',r=35,t="pug/background/education.pug",e=e+W((s=E)==null?"":s)+"</span>"}else{var z=0;for(var y in O){z++;var E=O[y];r=35,t="pug/background/education.pug",e=e+'<span class="label label-keyword">',r=35,t="pug/background/education.pug",e=e+W((s=E)==null?"":s)+"</span>"}}}).call(this),e=e+"</div>"),e=e+"</div></li>"}}}).call(this),e=e+"</ul></div></div></div>"),r=1,t="pug/background/awards.pug",h.isEmpty(S.awards)||(r=2,t="pug/background/awards.pug",e=e+'<div class="detail" id="awards">',r=3,t="pug/background/awards.pug",e=e+'<div class="icon">',r=4,t="pug/background/awards.pug",e=e+'<i class="fs-lg icon-trophy"></i>',r=5,t="pug/background/awards.pug",e=e+'<span class="mobile-title">',r=5,t="pug/background/awards.pug",e=e+"Awards</span></div>",r=7,t="pug/background/awards.pug",e=e+'<div class="info">',r=8,t="pug/background/awards.pug",e=e+'<h4 class="title text-uppercase">',r=8,t="pug/background/awards.pug",e=e+"Awards</h4>",r=10,t="pug/background/awards.pug",e=e+'<div class="content">',r=11,t="pug/background/awards.pug",e=e+'<ul class="list-unstyled clear-margin">',r=12,t="pug/background/awards.pug",(function(){var F=S.awards;if(typeof F.length=="number")for(var D=0,C=F.length;D<C;D++){var b=F[D];r=13,t="pug/background/awards.pug",e=e+'<li class="card card-nested">',r=14,t="pug/background/awards.pug",e=e+'<div class="content">',r=15,t="pug/background/awards.pug",e=e+'<p class="clear-margin" itemprop="award">',r=16,t="pug/background/awards.pug",e=e+"<strong>",r=16,t="pug/background/awards.pug",e=e+W((s=b.title+" ")==null?"":s)+"</strong>",r=17,t="pug/background/awards.pug",e=e+W((s=b.awarder)==null?"":s)+"</p>",r=19,t="pug/background/awards.pug",e=e+'<p class="text-muted">',r=20,t="pug/background/awards.pug",e=e+"<small>",r=21,t="pug/background/awards.pug",e=e+"Awarded on: ",r=21,t="pug/background/awards.pug",e=e+W((s=b.date)==null?"":s)+"</small></p>",r=23,t="pug/background/awards.pug",e=e+'<div class="mop-wrapper">',r=23,t="pug/background/awards.pug",e=e+((s=b.summary)==null?"":s)+"</div></div></li>"}else{var C=0;for(var D in F){C++;var b=F[D];r=13,t="pug/background/awards.pug",e=e+'<li class="card card-nested">',r=14,t="pug/background/awards.pug",e=e+'<div class="content">',r=15,t="pug/background/awards.pug",e=e+'<p class="clear-margin" itemprop="award">',r=16,t="pug/background/awards.pug",e=e+"<strong>",r=16,t="pug/background/awards.pug",e=e+W((s=b.title+" ")==null?"":s)+"</strong>",r=17,t="pug/background/awards.pug",e=e+W((s=b.awarder)==null?"":s)+"</p>",r=19,t="pug/background/awards.pug",e=e+'<p class="text-muted">',r=20,t="pug/background/awards.pug",e=e+"<small>",r=21,t="pug/background/awards.pug",e=e+"Awarded on: ",r=21,t="pug/background/awards.pug",e=e+W((s=b.date)==null?"":s)+"</small></p>",r=23,t="pug/background/awards.pug",e=e+'<div class="mop-wrapper">',r=23,t="pug/background/awards.pug",e=e+((s=b.summary)==null?"":s)+"</div></div></li>"}}}).call(this),e=e+"</ul></div></div></div>"),r=1,t="pug/background/volunteer-work.pug",h.isEmpty(S.volunteer)||(r=2,t="pug/background/volunteer-work.pug",e=e+'<div class="detail" id="volunteer-work">',r=3,t="pug/background/volunteer-work.pug",e=e+'<div class="icon">',r=4,t="pug/background/volunteer-work.pug",e=e+'<i class="fs-lg icon-child"></i>',r=5,t="pug/background/volunteer-work.pug",e=e+'<span class="mobile-title">',r=5,t="pug/background/volunteer-work.pug",e=e+"Volunteer Work</span></div>",r=7,t="pug/background/volunteer-work.pug",e=e+'<div class="info">',r=8,t="pug/background/volunteer-work.pug",e=e+'<h4 class="title text-uppercase">',r=8,t="pug/background/volunteer-work.pug",e=e+"Volunteer Work</h4>",r=10,t="pug/background/volunteer-work.pug",e=e+'<div class="content">',r=11,t="pug/background/volunteer-work.pug",e=e+'<ul class="list-unstyled clear-margin">',r=12,t="pug/background/volunteer-work.pug",(function(){var F=S.volunteer;if(typeof F.length=="number")for(var D=0,C=F.length;D<C;D++){var b=F[D];r=13,t="pug/background/volunteer-work.pug",e=e+'<li class="card card-nested">',r=14,t="pug/background/volunteer-work.pug",e=e+'<div class="content">',r=15,t="pug/background/volunteer-work.pug",e=e+'<p class="clear-margin relative">',r=16,t="pug/background/volunteer-work.pug",b.endDate||(r=17,t="pug/background/volunteer-work.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Volunteering" data-placement="left"></i>'),r=23,t="pug/background/volunteer-work.pug",e=e+"<strong>",r=23,t="pug/background/volunteer-work.pug",e=e+W((s=b.position+", ")==null?"":s)+"</strong>",r=24,t="pug/background/volunteer-work.pug",b.website?(r=25,t="pug/background/volunteer-work.pug",e=e+"<a"+(ce("href",b.website,!0,!1)+' target="_blank"')+">",r=25,t="pug/background/volunteer-work.pug",e=e+W((s=b.organization)==null?"":s)+"</a>"):(r=27,t="pug/background/volunteer-work.pug",e=e+W((s=b.organization)==null?"":s)),e=e+"</p>",r=29,t="pug/background/volunteer-work.pug",e=e+'<p class="text-muted">',r=30,t="pug/background/volunteer-work.pug",e=e+"<small>",r=31,t="pug/background/volunteer-work.pug",e=e+W((s=b.startDate)==null?"":s),r=31,t="pug/background/volunteer-work.pug",e=e+" - ",r=31,t="pug/background/volunteer-work.pug",e=e+W((s=b.endDate||"Present")==null?"":s)+"</small></p>",r=33,t="pug/background/volunteer-work.pug",e=e+'<div class="mop-wrapper">',r=33,t="pug/background/volunteer-work.pug",e=e+((s=b.summary)==null?"":s)+"</div>",r=35,t="pug/background/volunteer-work.pug",h.isEmpty(b.highlights)||(r=36,t="pug/background/volunteer-work.pug",e=e+"<ul>",r=37,t="pug/background/volunteer-work.pug",(function(){var R=b.highlights;if(typeof R.length=="number")for(var P=0,T=R.length;P<T;P++){var O=R[P];r=38,t="pug/background/volunteer-work.pug",e=e+'<li class="mop-wrapper">',r=38,t="pug/background/volunteer-work.pug",e=e+((s=O)==null?"":s)+"</li>"}else{var T=0;for(var P in R){T++;var O=R[P];r=38,t="pug/background/volunteer-work.pug",e=e+'<li class="mop-wrapper">',r=38,t="pug/background/volunteer-work.pug",e=e+((s=O)==null?"":s)+"</li>"}}}).call(this),e=e+"</ul>"),e=e+"</div></li>"}else{var C=0;for(var D in F){C++;var b=F[D];r=13,t="pug/background/volunteer-work.pug",e=e+'<li class="card card-nested">',r=14,t="pug/background/volunteer-work.pug",e=e+'<div class="content">',r=15,t="pug/background/volunteer-work.pug",e=e+'<p class="clear-margin relative">',r=16,t="pug/background/volunteer-work.pug",b.endDate||(r=17,t="pug/background/volunteer-work.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Volunteering" data-placement="left"></i>'),r=23,t="pug/background/volunteer-work.pug",e=e+"<strong>",r=23,t="pug/background/volunteer-work.pug",e=e+W((s=b.position+", ")==null?"":s)+"</strong>",r=24,t="pug/background/volunteer-work.pug",b.website?(r=25,t="pug/background/volunteer-work.pug",e=e+"<a"+(ce("href",b.website,!0,!1)+' target="_blank"')+">",r=25,t="pug/background/volunteer-work.pug",e=e+W((s=b.organization)==null?"":s)+"</a>"):(r=27,t="pug/background/volunteer-work.pug",e=e+W((s=b.organization)==null?"":s)),e=e+"</p>",r=29,t="pug/background/volunteer-work.pug",e=e+'<p class="text-muted">',r=30,t="pug/background/volunteer-work.pug",e=e+"<small>",r=31,t="pug/background/volunteer-work.pug",e=e+W((s=b.startDate)==null?"":s),r=31,t="pug/background/volunteer-work.pug",e=e+" - ",r=31,t="pug/background/volunteer-work.pug",e=e+W((s=b.endDate||"Present")==null?"":s)+"</small></p>",r=33,t="pug/background/volunteer-work.pug",e=e+'<div class="mop-wrapper">',r=33,t="pug/background/volunteer-work.pug",e=e+((s=b.summary)==null?"":s)+"</div>",r=35,t="pug/background/volunteer-work.pug",h.isEmpty(b.highlights)||(r=36,t="pug/background/volunteer-work.pug",e=e+"<ul>",r=37,t="pug/background/volunteer-work.pug",(function(){var O=b.highlights;if(typeof O.length=="number")for(var y=0,z=O.length;y<z;y++){var E=O[y];r=38,t="pug/background/volunteer-work.pug",e=e+'<li class="mop-wrapper">',r=38,t="pug/background/volunteer-work.pug",e=e+((s=E)==null?"":s)+"</li>"}else{var z=0;for(var y in O){z++;var E=O[y];r=38,t="pug/background/volunteer-work.pug",e=e+'<li class="mop-wrapper">',r=38,t="pug/background/volunteer-work.pug",e=e+((s=E)==null?"":s)+"</li>"}}}).call(this),e=e+"</ul>"),e=e+"</div></li>"}}}).call(this),e=e+"</ul></div></div></div>"),r=2,t="pug/background/publications.pug",h.isEmpty(S.publications)||(r=3,t="pug/background/publications.pug",e=e+'<div class="detail" id="publications">',r=4,t="pug/background/publications.pug",e=e+'<div class="icon">',r=5,t="pug/background/publications.pug",e=e+'<i class="fs-lg icon-newspaper"></i>',r=6,t="pug/background/publications.pug",e=e+'<span class="mobile-title">',r=6,t="pug/background/publications.pug",e=e+"Publications</span></div>",r=8,t="pug/background/publications.pug",e=e+'<div class="info">',r=9,t="pug/background/publications.pug",e=e+'<h4 class="title text-uppercase">',r=9,t="pug/background/publications.pug",e=e+"Publications</h4>",r=11,t="pug/background/publications.pug",e=e+'<div class="content">',r=12,t="pug/background/publications.pug",e=e+'<ul class="list-unstyled clear-margin">',r=13,t="pug/background/publications.pug",(function(){var F=S.publications;if(typeof F.length=="number")for(var D=0,C=F.length;D<C;D++){var b=F[D];r=14,t="pug/background/publications.pug",e=e+'<li class="card card-nested">',r=15,t="pug/background/publications.pug",e=e+'<div class="content">',r=16,t="pug/background/publications.pug",e=e+'<p class="clear-margin">',r=17,t="pug/background/publications.pug",e=e+"<strong>",r=18,t="pug/background/publications.pug",b.website?(r=19,t="pug/background/publications.pug",e=e+"<a"+(ce("href",b.website,!0,!1)+' target="_blank"')+">",r=19,t="pug/background/publications.pug",e=e+W((s=b.name)==null?"":s)+"</a>",r=20,t="pug/background/publications.pug",e=e+"&nbsp;,&nbsp;"):(r=22,t="pug/background/publications.pug",e=e+W((s=b.name+", ")==null?"":s)),e=e+"</strong>",r=23,t="pug/background/publications.pug",e=e+W((s=b.publisher)==null?"":s)+"</p>",r=25,t="pug/background/publications.pug",e=e+'<p class="text-muted">',r=26,t="pug/background/publications.pug",e=e+"<small>",r=26,t="pug/background/publications.pug",e=e+W((s="Published on: "+b.releaseDate)==null?"":s)+"</small></p>",r=28,t="pug/background/publications.pug",e=e+'<div class="mop-wrapper">',r=28,t="pug/background/publications.pug",e=e+((s=b.summary)==null?"":s)+"</div></div></li>"}else{var C=0;for(var D in F){C++;var b=F[D];r=14,t="pug/background/publications.pug",e=e+'<li class="card card-nested">',r=15,t="pug/background/publications.pug",e=e+'<div class="content">',r=16,t="pug/background/publications.pug",e=e+'<p class="clear-margin">',r=17,t="pug/background/publications.pug",e=e+"<strong>",r=18,t="pug/background/publications.pug",b.website?(r=19,t="pug/background/publications.pug",e=e+"<a"+(ce("href",b.website,!0,!1)+' target="_blank"')+">",r=19,t="pug/background/publications.pug",e=e+W((s=b.name)==null?"":s)+"</a>",r=20,t="pug/background/publications.pug",e=e+"&nbsp;,&nbsp;"):(r=22,t="pug/background/publications.pug",e=e+W((s=b.name+", ")==null?"":s)),e=e+"</strong>",r=23,t="pug/background/publications.pug",e=e+W((s=b.publisher)==null?"":s)+"</p>",r=25,t="pug/background/publications.pug",e=e+'<p class="text-muted">',r=26,t="pug/background/publications.pug",e=e+"<small>",r=26,t="pug/background/publications.pug",e=e+W((s="Published on: "+b.releaseDate)==null?"":s)+"</small></p>",r=28,t="pug/background/publications.pug",e=e+'<div class="mop-wrapper">',r=28,t="pug/background/publications.pug",e=e+((s=b.summary)==null?"":s)+"</div></div></li>"}}}).call(this),e=e+"</ul></div></div></div>"),r=1,t="pug/background/interests.pug",h.isEmpty(S.interests)||(r=2,t="pug/background/interests.pug",e=e+'<div class="detail" id="interests">',r=3,t="pug/background/interests.pug",e=e+'<div class="icon">',r=4,t="pug/background/interests.pug",e=e+'<i class="fs-lg icon-heart"></i>',r=5,t="pug/background/interests.pug",e=e+'<span class="mobile-title">',r=5,t="pug/background/interests.pug",e=e+"Interests</span></div>",r=7,t="pug/background/interests.pug",e=e+'<div class="info">',r=8,t="pug/background/interests.pug",e=e+'<h4 class="title text-uppercase">',r=8,t="pug/background/interests.pug",e=e+"Interests</h4>",r=10,t="pug/background/interests.pug",e=e+'<div class="content">',r=11,t="pug/background/interests.pug",e=e+'<ul class="list-unstyled clear-margin">',r=12,t="pug/background/interests.pug",(function(){var F=S.interests;if(typeof F.length=="number")for(var D=0,C=F.length;D<C;D++){var b=F[D];r=13,t="pug/background/interests.pug",e=e+'<li class="card card-nested">',r=14,t="pug/background/interests.pug",e=e+"<p>",r=15,t="pug/background/interests.pug",e=e+"<strong>",r=15,t="pug/background/interests.pug",e=e+W((s=b.name)==null?"":s)+"</strong></p>",r=17,t="pug/background/interests.pug",h.isEmpty(b.keywords)||(r=18,t="pug/background/interests.pug",e=e+'<div class="space-top labels">',r=19,t="pug/background/interests.pug",(function(){var R=b.keywords;if(typeof R.length=="number")for(var P=0,T=R.length;P<T;P++){var O=R[P];r=20,t="pug/background/interests.pug",e=e+'<span class="label label-keyword">',r=20,t="pug/background/interests.pug",e=e+W((s=O)==null?"":s)+"</span>"}else{var T=0;for(var P in R){T++;var O=R[P];r=20,t="pug/background/interests.pug",e=e+'<span class="label label-keyword">',r=20,t="pug/background/interests.pug",e=e+W((s=O)==null?"":s)+"</span>"}}}).call(this),e=e+"</div>"),e=e+"</li>"}else{var C=0;for(var D in F){C++;var b=F[D];r=13,t="pug/background/interests.pug",e=e+'<li class="card card-nested">',r=14,t="pug/background/interests.pug",e=e+"<p>",r=15,t="pug/background/interests.pug",e=e+"<strong>",r=15,t="pug/background/interests.pug",e=e+W((s=b.name)==null?"":s)+"</strong></p>",r=17,t="pug/background/interests.pug",h.isEmpty(b.keywords)||(r=18,t="pug/background/interests.pug",e=e+'<div class="space-top labels">',r=19,t="pug/background/interests.pug",(function(){var O=b.keywords;if(typeof O.length=="number")for(var y=0,z=O.length;y<z;y++){var E=O[y];r=20,t="pug/background/interests.pug",e=e+'<span class="label label-keyword">',r=20,t="pug/background/interests.pug",e=e+W((s=E)==null?"":s)+"</span>"}else{var z=0;for(var y in O){z++;var E=O[y];r=20,t="pug/background/interests.pug",e=e+'<span class="label label-keyword">',r=20,t="pug/background/interests.pug",e=e+W((s=E)==null?"":s)+"</span>"}}}).call(this),e=e+"</div>"),e=e+"</li>"}}}).call(this),e=e+"</ul></div></div></div>"),r=1,t="pug/background/references.pug",h.isEmpty(S.references)||(r=2,t="pug/background/references.pug",e=e+'<div class="detail" id="references">',r=3,t="pug/background/references.pug",e=e+'<div class="icon">',r=4,t="pug/background/references.pug",e=e+'<i class="fs-lg icon-thumbs-up"></i>',r=5,t="pug/background/references.pug",e=e+'<span class="mobile-title">',r=5,t="pug/background/references.pug",e=e+"References</span></div>",r=7,t="pug/background/references.pug",e=e+'<div class="info">',r=8,t="pug/background/references.pug",e=e+'<h4 class="title text-uppercase">',r=8,t="pug/background/references.pug",e=e+"References</h4>",r=10,t="pug/background/references.pug",e=e+'<div class="content">',r=11,t="pug/background/references.pug",e=e+'<ul class="list-unstyled clear-margin">',r=12,t="pug/background/references.pug",(function(){var F=S.references;if(typeof F.length=="number")for(var D=0,C=F.length;D<C;D++){var b=F[D];r=13,t="pug/background/references.pug",e=e+'<li class="card card-nested">',r=14,t="pug/background/references.pug",b.website?(r=15,t="pug/background/references.pug",e=e+"<a"+(ce("href",b.website,!0,!1)+' target="_blank"')+">",r=15,t="pug/background/references.pug",e=e+W((s=b.name)==null?"":s)+"</a>"):(r=17,t="pug/background/references.pug",e=e+W((s=b.name)==null?"":s)),r=19,t="pug/background/references.pug",e=e+'<blockquote class="quote">',r=20,t="pug/background/references.pug",e=e+'<div class="mop-wrapper">',r=20,t="pug/background/references.pug",e=e+((s=b.reference)==null?"":s)+"</div></blockquote></li>"}else{var C=0;for(var D in F){C++;var b=F[D];r=13,t="pug/background/references.pug",e=e+'<li class="card card-nested">',r=14,t="pug/background/references.pug",b.website?(r=15,t="pug/background/references.pug",e=e+"<a"+(ce("href",b.website,!0,!1)+' target="_blank"')+">",r=15,t="pug/background/references.pug",e=e+W((s=b.name)==null?"":s)+"</a>"):(r=17,t="pug/background/references.pug",e=e+W((s=b.name)==null?"":s)),r=19,t="pug/background/references.pug",e=e+'<blockquote class="quote">',r=20,t="pug/background/references.pug",e=e+'<div class="mop-wrapper">',r=20,t="pug/background/references.pug",e=e+((s=b.reference)==null?"":s)+"</div></blockquote></li>"}}}).call(this),e=e+"</ul></div></div></div>"),e=e+"</div></div></section></div></div>",r=1,t="pug/scripts.pug",e=e+'<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"><\/script>',r=2,t="pug/scripts.pug",e=e+'<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"><\/script>',r=4,t="pug/scripts.pug",e=e+"<script>",r=5,t="pug/scripts.pug",e=e+"$(function () {",r=6,t="pug/scripts.pug",e=e+`
`,r=6,t="pug/scripts.pug",e=e+"  var toggleFloatingMenu = function() {",r=7,t="pug/scripts.pug",e=e+`
`,r=7,t="pug/scripts.pug",e=e+"    $( '.js-floating-nav' ).toggleClass( 'is-visible' );",r=8,t="pug/scripts.pug",e=e+`
`,r=8,t="pug/scripts.pug",e=e+"    $( '.js-floating-nav-trigger' ).toggleClass( 'is-open' );",r=9,t="pug/scripts.pug",e=e+`
`,r=9,t="pug/scripts.pug",e=e+"  };",r=10,t="pug/scripts.pug",e=e+`
`,r=10,t="pug/scripts.pug",e=e+"",r=11,t="pug/scripts.pug",e=e+`
`,r=11,t="pug/scripts.pug",e=e+'  $( ".background-card" ).css( "min-height", window.screen.availHeight + "px" );',r=12,t="pug/scripts.pug",e=e+`
`,r=12,t="pug/scripts.pug",e=e+'  $( "[data-toggle=tooltip]" ).tooltip();',r=13,t="pug/scripts.pug",e=e+`
`,r=13,t="pug/scripts.pug",e=e+"  $( '.js-floating-nav-trigger' ).on( 'click', function(e) {",r=14,t="pug/scripts.pug",e=e+`
`,r=14,t="pug/scripts.pug",e=e+"    e.preventDefault();",r=15,t="pug/scripts.pug",e=e+`
`,r=15,t="pug/scripts.pug",e=e+"    toggleFloatingMenu();",r=16,t="pug/scripts.pug",e=e+`
`,r=16,t="pug/scripts.pug",e=e+"  });",r=17,t="pug/scripts.pug",e=e+`
`,r=17,t="pug/scripts.pug",e=e+"  $( '.js-floating-nav a' ).on( 'click', toggleFloatingMenu );",r=18,t="pug/scripts.pug",e=e+`
`,r=18,t="pug/scripts.pug",e=e+"",r=19,t="pug/scripts.pug",e=e+`
`,r=19,t="pug/scripts.pug",e=e+`  $("#remaining-profiles").on('show.bs.collapse', function() {`,r=20,t="pug/scripts.pug",e=e+`
`,r=20,t="pug/scripts.pug",e=e+"    $( '.js-profiles-collapse > i' )",r=21,t="pug/scripts.pug",e=e+`
`,r=21,t="pug/scripts.pug",e=e+"      .removeClass( 'icon-chevron-down' )",r=22,t="pug/scripts.pug",e=e+`
`,r=22,t="pug/scripts.pug",e=e+"      .addClass( 'icon-chevron-up' );",r=23,t="pug/scripts.pug",e=e+`
`,r=23,t="pug/scripts.pug",e=e+"  });",r=24,t="pug/scripts.pug",e=e+`
`,r=24,t="pug/scripts.pug",e=e+"",r=25,t="pug/scripts.pug",e=e+`
`,r=25,t="pug/scripts.pug",e=e+`  $("#remaining-profiles").on('hidden.bs.collapse', function() {`,r=26,t="pug/scripts.pug",e=e+`
`,r=26,t="pug/scripts.pug",e=e+"    $( '.js-profiles-collapse > i' )",r=27,t="pug/scripts.pug",e=e+`
`,r=27,t="pug/scripts.pug",e=e+"      .removeClass( 'icon-chevron-up' )",r=28,t="pug/scripts.pug",e=e+`
`,r=28,t="pug/scripts.pug",e=e+"      .addClass( 'icon-chevron-down' );",r=29,t="pug/scripts.pug",e=e+`
`,r=29,t="pug/scripts.pug",e=e+"  });",r=30,t="pug/scripts.pug",e=e+`
`,r=30,t="pug/scripts.pug",e=e+"});",r=31,t="pug/scripts.pug",e=e+`
`,r=31,t="pug/scripts.pug",e=e+"<\/script>",r=32,t="pug/scripts.pug",e=e+"<script>",r=33,t="pug/scripts.pug",e=e+"WebFontConfig = {",r=34,t="pug/scripts.pug",e=e+`
`,r=34,t="pug/scripts.pug",e=e+"  google: { families: [ 'Lato:300,400,700:latin' ] }",r=35,t="pug/scripts.pug",e=e+`
`,r=35,t="pug/scripts.pug",e=e+"};",r=36,t="pug/scripts.pug",e=e+`
`,r=36,t="pug/scripts.pug",e=e+"(function() {",r=37,t="pug/scripts.pug",e=e+`
`,r=37,t="pug/scripts.pug",e=e+"  var wf = document.createElement('script');",r=38,t="pug/scripts.pug",e=e+`
`,r=38,t="pug/scripts.pug",e=e+"  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +",r=39,t="pug/scripts.pug",e=e+`
`,r=39,t="pug/scripts.pug",e=e+"    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';",r=40,t="pug/scripts.pug",e=e+`
`,r=40,t="pug/scripts.pug",e=e+"  wf.type = 'text/javascript';",r=41,t="pug/scripts.pug",e=e+`
`,r=41,t="pug/scripts.pug",e=e+"  wf.async = 'true';",r=42,t="pug/scripts.pug",e=e+`
`,r=42,t="pug/scripts.pug",e=e+"  var s = document.getElementsByTagName('script')[0];",r=43,t="pug/scripts.pug",e=e+`
`,r=43,t="pug/scripts.pug",e=e+"  s.parentNode.insertBefore(wf, s);",r=44,t="pug/scripts.pug",e=e+`
`,r=44,t="pug/scripts.pug",e=e+"})();<\/script></body></html>"}).call(this,"_"in p?p._:typeof _<"u"?_:void 0,"css"in p?p.css:typeof css<"u"?css:void 0,"floating_nav_items"in p?p.floating_nav_items:typeof floating_nav_items<"u"?floating_nav_items:void 0,"resume"in p?p.resume:typeof resume<"u"?resume:void 0)}catch(h){Qo(h,t,r,g[t])}return e}Ko.exports={renderResume:k3}});var ru=$((Sd,tu)=>{M();var nu=Lr();(function(a){var e={nodiff:"",year:"year",years:"years",month:"month",months:"months",day:"day",days:"days",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds",delimiter:" "};a.fn.preciseDiff=function(o){return a.preciseDiff(this,o)},a.preciseDiff=function(o,s){var t=a(o),r=a(s),t=t.startOf("day"),r=r.add(1,"day").startOf("day");if(t.isSame(r))return e.nodiff;if(t.isAfter(r))var g=t,t=r,r=g;var p=r.year()-t.year(),h=r.month()-t.month(),m=r.date()-t.date(),q=r.hour()-t.hour(),S=r.minute()-t.minute(),F=r.second()-t.second();if(F<0){var F=60+F;S--}if(S<0){var S=60+S;q--}if(q<0){var q=24+q;m--}if(m<0){var D=a(r.year()+"-"+(r.month()+1),"YYYY-MM").subtract(1,"M").daysInMonth();if(D<t.date())var m=D+m+(t.date()-D);else var m=D+m;h--}if(h<0){var h=12+h;p--}function C(R,P){return R+" "+e[P+(R===1?"":"s")]}if(!p&&!h)return m>=1?C(m,"day"):"Joined Today";var b=[];return p&&b.push(C(p,"year")),h&&b.push(C(h,"month")),b.join(e.delimiter)}})(nu);tu.exports=nu});var au=$((Id,iu)=>{M();var x3=(o1(),ua(s1)),_e=Ut(),He=$a(),rn=Lr(),y3=Zo()({breaks:!0}).use(Jo()),{renderResume:F3}=eu();ru();He.setConfig({date_format:"MMM, YYYY"});function w3(a){let o=["address","city","region","countryCode","postalCode"].map(t=>a.basics.location[t]),s=x3.readFileSync("//assets/css/theme.css","utf-8");return a.basics.picture=He.getUrlForPicture(a),a.basics.summary=an(a.basics.summary),a.basics.computed_location=_e.compact(o).join(", "),a.languages&&(a.basics.languages=_e.pluck(a.languages,"language").join(", ")),_e(a.basics.profiles).forEach(t=>{let r=t.network.toLowerCase();t.url=He.getUrlForProfile(a,r),t.label=r}),a.basics.top_five_profiles=a.basics.profiles.slice(0,5),a.basics.remaining_profiles=a.basics.profiles.slice(5),_e(a.projects).forEach(t=>{let r=rn(t.startDate,"YYYY-MM-DD"),g=rn(t.endDate,"YYYY-MM-DD");r.isValid()&&g.isValid()&&(t.duration=t.endDate!=null&&g.isValid()?rn.preciseDiff(r,g):rn.preciseDiff(r,rn())),r.isValid()&&(t.startDate=He.getFormattedDate(r)),g.isValid()&&(t.endDate=He.getFormattedDate(g)),t.summary=an(t.summary),t.highlights=_e(t.highlights).map(h=>an(h))}),_e(a.work).forEach(t=>{let r=rn(t.startDate,"YYYY-MM-DD"),g=rn(t.endDate,"YYYY-MM-DD");r.isValid()&&g.isValid()&&(t.duration=t.endDate!=null&&g.isValid()?rn.preciseDiff(r,g):rn.preciseDiff(r,rn())),r.isValid()&&(t.startDate=He.getFormattedDate(r)),g.isValid()&&(t.endDate=He.getFormattedDate(g)),t.summary=an(t.summary),t.highlights=_e(t.highlights).map(h=>an(h))}),_e(a.skills).forEach(t=>{let r=["Beginner","Intermediate","Advanced","Master"];t.level&&(t.skill_class=t.level.toLowerCase(),t.level=_3(t.level.trim()),t.display_progress_bar=_e.contains(r,t.level))}),_e(a.education).forEach(t=>{["startDate","endDate"].forEach(r=>{let g=t[r];g&&(t[r]=He.getFormattedDate(g))})}),_e(a.awards).forEach(t=>{let r=t.date;t.summary=an(t.summary),r&&(t.date=He.getFormattedDate(r,"MMM DD, YYYY"))}),_e(a.volunteer).forEach(t=>{t.summary=an(t.summary),["startDate","endDate"].forEach(r=>{let g=t[r];g&&(t[r]=He.getFormattedDate(g))}),t.highlights=_e(t.highlights).map(an)}),_e(a.publications).forEach(t=>{let r=t.releaseDate;t.summary=an(t.summary),r&&(t.releaseDate=He.getFormattedDate(r,"MMM DD, YYYY"))}),_e(a.references).forEach(t=>{t.reference=an(t.reference)}),F3({resume:a,floating_nav_items:D3(a),css:s,_:_e})}function C3(a,e){return e.split(".").reduce((s,t)=>(s||{})[t],a)}function _3(a){if(a){var a=a.toString();return a[0].toUpperCase()+a.slice(1).toLowerCase()}return a}function an(a){if(a!=null)return y3.render(a)}function D3(a){return _e([{label:"About",target:"about",icon:"board",requires:"basics.summary"},{label:"Work Experience",target:"work-experience",icon:"office",requires:"work"},{label:"Projects Experience",target:"projects-experience",icon:"code",requires:"projects"},{label:"Skills",target:"skills",icon:"tools",requires:"skills"},{label:"Education",target:"education",icon:"graduation-cap",requires:"education"},{label:"Awards",target:"awards",icon:"trophy",requires:"awards"},{label:"Volunteer Work",target:"volunteer-work",icon:"child",requires:"volunteer"},{label:"Publications",target:"publications",icon:"newspaper",requires:"publications"},{label:"Interests",target:"interests",icon:"heart",requires:"interests"},{label:"References",target:"references",icon:"thumbs-up",requires:"references"}]).filter(o=>{let s=C3(a,o.requires);return!_e.isEmpty(s)})}iu.exports={render:w3}});M();var Jn=yl(au(),1),su=Jn.default??Jn,Rd=su.render??Jn.render,Od=su.pdfRenderOptions??Jn.pdfRenderOptions;export{Od as pdfRenderOptions,Rd as render};
/*! Bundled license information:

moment/moment.js:
  (*! moment.js *)
  (*! version : 2.30.1 *)
  (*! authors : Tim Wood, Iskren Chernev, Moment.js contributors *)
  (*! license : MIT *)
  (*! momentjs.com *)
*/
