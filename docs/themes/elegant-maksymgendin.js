var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var qs=Object.create;var Vt=Object.defineProperty;var Ms=Object.getOwnPropertyDescriptor;var zs=Object.getOwnPropertyNames;var Ds=Object.getPrototypeOf,Ss=Object.prototype.hasOwnProperty;var p1=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,o)=>(typeof require<"u"?require:e)[o]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var g1=(n,e)=>()=>(n&&(e=n(n=0)),e);var pe=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),As=(n,e)=>{for(var o in e)Vt(n,o,{get:e[o],enumerable:!0})},h1=(n,e,o,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of zs(e))!Ss.call(n,t)&&t!==o&&Vt(n,t,{get:()=>e[t],enumerable:!(i=Ms(e,t))||i.enumerable});return n};var Ts=(n,e,o)=>(o=n!=null?qs(Ds(n)):{},h1(e||!n||!n.__esModule?Vt(o,"default",{value:n,enumerable:!0}):o,n)),b1=n=>h1(Vt({},"__esModule",{value:!0}),n);var V=g1(()=>{});var gr={};As(gr,{createReadStream:()=>E1,createWriteStream:()=>q1,default:()=>Is,existsSync:()=>k1,lstatSync:()=>w1,mkdirSync:()=>F1,readFileSync:()=>v1,readdirSync:()=>x1,rmdirSync:()=>C1,statSync:()=>pr,unlinkSync:()=>_1,writeFileSync:()=>y1});function fr(n){return String(n).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function m1(n){var e=fr(n);if(Gt[e]!==void 0)return Gt[e];for(var o=Object.keys(Gt),i=0;i<o.length;i++)if(e.endsWith("/"+o[i])||e===o[i])return Gt[o[i]]}function dr(n){var e=fr(n);if((e===""||e===".")&&y0["."]!==void 0)return y0["."];if(y0[e]!==void 0)return y0[e];for(var o=Object.keys(y0),i=0;i<o.length;i++)if(e.endsWith("/"+o[i])||e===o[i])return y0[o[i]]}var Gt,y0,v1,x1,k1,y1,F1,pr,w1,_1,C1,E1,q1,Is,hr=g1(()=>{"use strict";V();Gt={"assets/css/theme.css":`@font-face {
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
.label-keyword p {
  margin: 0;
}
.label-keyword a {
  color: white;
}
.label-keyword a:hover {
  text-decoration: none;
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
  font-family: 'Raleway', sans-serif;
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
    font-family: 'Raleway', sans-serif;
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

    p {
        margin: 0;
    }

    a {
        color: white;
    }

    a:hover {
        text-decoration: none;
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
  "name": "jsonresume-theme-elegant-maksymgendin",
  "version": "1.4.0",
  "description": "Customized Elegant theme for JSON resume",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/maksymgendin/jsonresume-theme-elegant.git"
  },
  "keywords": [
    "jsonresume",
    "theme",
    "elegant"
  ],
  "author": "Maksym Gendin <maksym.gendin@gmail.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/maksymgendin/jsonresume-theme-elegant/issues"
  },
  "homepage": "https://github.com/maksymgendin/jsonresume-theme-elegant",
  "dependencies": {
    "gravatar": "1.x",
    "handlebars": "4.x",
    "jsonresume-themeutils": "1.x",
    "markdown-it": "14.x",
    "markdown-it-abbr": "2.x",
    "moment": "2.x",
    "pug": "3.x",
    "resume-schema": "1.x",
    "sshpk": "1.x",
    "underscore": "1.x"
  },
  "devDependencies": {
    "grunt": "1.x",
    "grunt-contrib-clean": "2.x",
    "grunt-contrib-copy": "1.x",
    "grunt-contrib-less": "3.x",
    "grunt-contrib-watch": "1.x",
    "grunt-exec": "3.x",
    "less": "4.x"
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
                  |,&nbsp;#{award.awarder}

                p.text-muted
                  small
                    |Awarded on: #{award.date}

                .mop-wrapper!= award.summary
`,"pug/background/certificates.pug":`unless _.isEmpty(resume.certificates)
  .detail#certificates
    .icon
      i.fs-lg.icon-profile
      span.mobile-title Certificates

    .info
      h4.title.text-uppercase Certificates

      .content
        ul.list-unstyled.clear-margin
          each certificate in resume.certificates
            li.card.card-nested
              .content
                p.clear-margin(itemprop="certificate")
                  strong
                    if certificate.url
                      a(href=certificate.url, target="_blank")= certificate.name
                      |,&nbsp;
                    else
                      |#{certificate.name + ', '}
                  |#{certificate.issuer}

                p.text-muted
                  small
                    |Issued on: #{certificate.date}
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
                      span.label.label-keyword!= course

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
                if project.url
                  a(href=project.url, target="_blank")
                    strong=project.name
                else
                  strong=project.name
                if project.entity
                  span
                    |,&nbsp;#{project.entity}

              p.text-muted
                small
                  span.space-right
                    |#{project.startDate} - #{project.endDate || 'Present'}

                  if project.duration
                    span
                      i.icon-clock.mr-5
                      |#{project.duration}

              .mop-wrapper.space-bottom!= project.description

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
                    if publication.url
                      a(href=publication.url, target="_blank")= publication.name
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
                      span.label.label-keyword!= keyword
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
                if experience.url
                  a(href=experience.url, target="_blank")= experience.name
                else
                  |#{experience.name}

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
      include background/certificates.pug
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
    google: { families: [ 'Raleway' ] }
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
`},y0={"assets/css":["theme.css"],"assets/icomoon/demo-files":["demo.css","demo.js"],"assets/icomoon/fonts":["icomoon.eot","icomoon.svg","icomoon.ttf","icomoon.woff"],"assets/icomoon":["Read Me.txt","demo-files","demo.html","fonts","selection.json","style.css","style.less","variables.less"],"assets/less/lib/bootstrap/mixins":["alerts.less","background-variant.less","border-radius.less","buttons.less","center-block.less","clearfix.less","forms.less","gradients.less","grid-framework.less","grid.less","hide-text.less","image.less","labels.less","list-group.less","nav-divider.less","nav-vertical-align.less","opacity.less","pagination.less","panels.less","progress-bar.less","reset-filter.less","reset-text.less","resize.less","responsive-visibility.less","size.less","tab-focus.less","table-row.less","text-emphasis.less","text-overflow.less","vendor-prefixes.less"],"assets/less/lib/bootstrap":["mixins","mixins.less","variables.less"],"assets/less/lib":["bootstrap"],"assets/less/sections":["awards.less","education.less","interests.less","projects_experience.less","publications.less","references.less","skills.less","volunteer_work.less","work_experience.less"],"assets/less":["base.less","floating-nav.less","icon.less","info_card_styles.less","lib","mixins.less","print.less","sections","theme.less","utilities.less","variables.less","vendor-overrides.less"],assets:["css","icomoon","less"],"pug/background":["about.pug","awards.pug","certificates.pug","education.pug","interests.pug","projects-experience.pug","publications.pug","references.pug","skills.pug","volunteer-work.pug","work-experience.pug"],pug:["background","background-card.pug","floating-nav.pug","profile-card.pug","scripts.pug","stylesheets.pug"],screenshots:["profile.png"],tpl:["index.js"],".":["Gruntfile.js","README.md","assets","index.js","index.pug","moment-precise-range.js","package.json","pug","render.js","screenshots","serve.js","tpl"]};v1=function(n,e){var o=m1(n);return o!==void 0?o:""},x1=function(n,e){var o=dr(n);return o===void 0&&(o=[]),e&&e.withFileTypes?o.map(function(i){var t=fr(n)+"/"+i,u=dr(t)!==void 0;return{name:i,isFile:function(){return!u},isDirectory:function(){return u}}}):o},k1=function(n){return m1(n)!==void 0||dr(n)!==void 0},y1=function(){},F1=function(){},pr=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},w1=pr,_1=function(){},C1=function(){},E1=function(){return{pipe:function(n){return n},on:function(){return this}}},q1=function(){return{write:function(){},end:function(){},on:function(){return this}}},Is={readFileSync:v1,readdirSync:x1,existsSync:k1,writeFileSync:y1,mkdirSync:F1,statSync:pr,lstatSync:w1,unlinkSync:_1,rmdirSync:C1,createReadStream:E1,createWriteStream:q1}});var Z0=pe((br,mr)=>{V();(function(n,e){typeof br=="object"&&typeof mr<"u"?mr.exports=e():typeof define=="function"&&define.amd?define("underscore",e):(n=typeof globalThis<"u"?globalThis:n||self,(function(){var o=n._,i=n._=e();i.noConflict=function(){return n._=o,i}})())})(br,(function(){var n="1.13.8",e=typeof self=="object"&&self.self===self&&self||typeof globalThis=="object"&&globalThis.global===globalThis&&globalThis||Function("return this")()||{},o=Array.prototype,i=Object.prototype,t=typeof Symbol<"u"?Symbol.prototype:null,u=o.push,f=o.slice,d=i.toString,h=i.hasOwnProperty,v=typeof ArrayBuffer<"u",D=typeof DataView<"u",E=Array.isArray,M=Object.keys,w=Object.create,x=v&&ArrayBuffer.isView,m=isNaN,P=isFinite,U=!{toString:null}.propertyIsEnumerable("toString"),R=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],I=Math.pow(2,53)-1;function k(c,p){return p=p==null?c.length-1:+p,function(){for(var b=Math.max(arguments.length-p,0),y=Array(b),z=0;z<b;z++)y[z]=arguments[z+p];switch(p){case 0:return c.call(this,y);case 1:return c.call(this,arguments[0],y);case 2:return c.call(this,arguments[0],arguments[1],y)}var C=Array(p+1);for(z=0;z<p;z++)C[z]=arguments[z];return C[p]=y,c.apply(this,C)}}function A(c){var p=typeof c;return p==="function"||p==="object"&&!!c}function q(c){return c===null}function Z(c){return c===void 0}function J(c){return c===!0||c===!1||d.call(c)==="[object Boolean]"}function se(c){return!!(c&&c.nodeType===1)}function te(c){var p="[object "+c+"]";return function(b){return d.call(b)===p}}var O=te("String"),Y=te("Number"),N=te("Date"),L=te("RegExp"),Ne=te("Error"),a0=te("Symbol"),ot=te("ArrayBuffer"),Oe=te("Function"),q0=e.document&&e.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof q0!="function"&&(Oe=function(c){return typeof c=="function"||!1});var Fe=Oe,o0=te("Object"),dn=D&&(!/\[native code\]/.test(String(DataView))||o0(new DataView(new ArrayBuffer(8)))),G=typeof Map<"u"&&o0(new Map),pu=te("DataView");function gu(c){return c!=null&&Fe(c.getInt8)&&ot(c.buffer)}var fn=dn?gu:pu,en=E||te("Array");function nn(c,p){return c!=null&&h.call(c,p)}var M0=te("Arguments");(function(){M0(arguments)||(M0=function(c){return nn(c,"callee")})})();var z0=M0;function hu(c){return!a0(c)&&P(c)&&!isNaN(parseFloat(c))}function st(c){return Y(c)&&m(c)}function lt(c){return function(){return c}}function ct(c){return function(p){var b=c(p);return typeof b=="number"&&b>=0&&b<=I}}function dt(c){return function(p){return p?.[c]}}var s0=dt("byteLength"),bu=ct(s0),ft=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function Ie(c){return x?x(c)&&!fn(c):bu(c)&&ft.test(d.call(c))}var l0=v?Ie:lt(!1),_e=dt("length");function mu(c){for(var p={},b=c.length,y=0;y<b;++y)p[c[y]]=!0;return{contains:function(z){return p[z]===!0},push:function(z){return p[z]=!0,c.push(z)}}}function D0(c,p){p=mu(p);var b=R.length,y=c.constructor,z=Fe(y)&&y.prototype||i,C="constructor";for(nn(c,C)&&!p.contains(C)&&p.push(C);b--;)C=R[b],C in c&&c[C]!==z[C]&&!p.contains(C)&&p.push(C)}function ce(c){if(!A(c))return[];if(M)return M(c);var p=[];for(var b in c)nn(c,b)&&p.push(b);return U&&D0(c,p),p}function pt(c){if(c==null)return!0;var p=_e(c);return typeof p=="number"&&(en(c)||O(c)||z0(c))?p===0:_e(ce(c))===0}function c0(c,p){var b=ce(p),y=b.length;if(c==null)return!y;for(var z=Object(c),C=0;C<y;C++){var S=b[C];if(p[S]!==z[S]||!(S in z))return!1}return!0}function re(c){if(c instanceof re)return c;if(!(this instanceof re))return new re(c);this._wrapped=c}re.VERSION=n,re.prototype.value=function(){return this._wrapped},re.prototype.valueOf=re.prototype.toJSON=re.prototype.value,re.prototype.toString=function(){return String(this._wrapped)};function ge(c){return new Uint8Array(c.buffer||c,c.byteOffset||0,s0(c))}var S0="[object DataView]";function gt(c,p){for(var b=[{a:c,b:p}],y=[],z=[];b.length;){var C=b.pop();if(C===!0){y.pop(),z.pop();continue}if(c=C.a,p=C.b,c===p){if(c!==0||1/c===1/p)continue;return!1}if(c==null||p==null)return!1;if(c!==c){if(p!==p)continue;return!1}var S=typeof c;if(S!=="function"&&S!=="object"&&typeof p!="object")return!1;c instanceof re&&(c=c._wrapped),p instanceof re&&(p=p._wrapped);var H=d.call(c);if(H!==d.call(p))return!1;if(dn&&H=="[object Object]"&&fn(c)){if(!fn(p))return!1;H=S0}switch(H){case"[object RegExp]":case"[object String]":if(""+c==""+p)continue;return!1;case"[object Number]":b.push({a:+c,b:+p});continue;case"[object Date]":case"[object Boolean]":if(+c==+p)continue;return!1;case"[object Symbol]":if(t.valueOf.call(c)===t.valueOf.call(p))continue;return!1;case"[object ArrayBuffer]":case S0:b.push({a:ge(c),b:ge(p)});continue}var K=H==="[object Array]";if(!K&&l0(c)){var ee=s0(c);if(ee!==s0(p))return!1;if(c.buffer===p.buffer&&c.byteOffset===p.byteOffset)continue;K=!0}if(!K){if(typeof c!="object"||typeof p!="object")return!1;var ke=c.constructor,Se=p.constructor;if(ke!==Se&&!(Fe(ke)&&ke instanceof ke&&Fe(Se)&&Se instanceof Se)&&"constructor"in c&&"constructor"in p)return!1}for(var Ee=y.length;Ee--;)if(y[Ee]===c){if(z[Ee]===p)break;return!1}if(!(Ee>=0))if(y.push(c),z.push(p),b.push(!0),K){if(Ee=c.length,Ee!==p.length)return!1;for(;Ee--;)b.push({a:c[Ee],b:p[Ee]})}else{var Xe=ce(c),b0;if(Ee=Xe.length,ce(p).length!==Ee)return!1;for(;Ee--;){if(b0=Xe[Ee],!nn(p,b0))return!1;b.push({a:c[b0],b:p[b0]})}}}return!0}function tn(c){if(!A(c))return[];var p=[];for(var b in c)p.push(b);return U&&D0(c,p),p}function Bn(c){var p=_e(c);return function(b){if(b==null)return!1;var y=tn(b);if(_e(y))return!1;for(var z=0;z<p;z++)if(!Fe(b[c[z]]))return!1;return c!==bt||!Fe(b[_n])}}var _n="forEach",pn="has",Cn=["clear","delete"],ht=["get",pn,"set"],d0=Cn.concat(_n,ht),bt=Cn.concat(ht),Un=["add"].concat(Cn,_n,pn),En=G?Bn(d0):te("Map"),A0=G?Bn(bt):te("WeakMap"),f0=G?Bn(Un):te("Set"),$=te("WeakSet");function qn(c){for(var p=ce(c),b=p.length,y=Array(b),z=0;z<b;z++)y[z]=c[p[z]];return y}function vu(c){for(var p=ce(c),b=p.length,y=Array(b),z=0;z<b;z++)y[z]=[p[z],c[p[z]]];return y}function je(c){for(var p={},b=ce(c),y=0,z=b.length;y<z;y++)p[c[b[y]]]=b[y];return p}function Ae(c){var p=[];for(var b in c)Fe(c[b])&&p.push(b);return p.sort()}function ne(c,p){return function(b){var y=arguments.length;if(p&&(b=Object(b)),y<2||b==null)return b;for(var z=1;z<y;z++)for(var C=arguments[z],S=c(C),H=S.length,K=0;K<H;K++){var ee=S[K];(!p||b[ee]===void 0)&&(b[ee]=C[ee])}return b}}var p0=ne(tn),le=ne(ce),Mn=ne(tn,!0);function xu(){return function(){}}function Hn(c){if(!A(c))return{};if(w)return w(c);var p=xu();p.prototype=c;var b=new p;return p.prototype=null,b}function Ce(c,p){var b=Hn(c);return p&&le(b,p),b}function $e(c){return A(c)?en(c)?c.slice():p0({},c):c}function Ye(c,p){return p(c),c}function xe(c){return en(c)?c:[c]}re.toPath=xe;function ze(c){return re.toPath(c)}function Pe(c,p){for(var b=p.length,y=0;y<b;y++){if(c==null)return;c=c[p[y]]}return b?c:void 0}function un(c,p,b){var y=Pe(c,ze(p));return Z(y)?b:y}function ku(c,p){p=ze(p);for(var b=p.length,y=0;y<b;y++){var z=p[y];if(!nn(c,z))return!1;c=c[z]}return!!b}function T0(c){return c}function We(c){return c=le({},c),function(p){return c0(p,c)}}function g0(c){return c=ze(c),function(p){return Pe(p,c)}}function $n(c,p,b){if(p===void 0)return c;switch(b??3){case 1:return function(y){return c.call(p,y)};case 3:return function(y,z,C){return c.call(p,y,z,C)};case 4:return function(y,z,C,S){return c.call(p,y,z,C,S)}}return function(){return c.apply(p,arguments)}}function gn(c,p,b){return c==null?T0:Fe(c)?$n(c,p,b):A(c)&&!en(c)?We(c):g0(c)}function hn(c,p){return gn(c,p,1/0)}re.iteratee=hn;function De(c,p,b){return re.iteratee!==hn?re.iteratee(c,p):gn(c,p,b)}function yu(c,p,b){p=De(p,b);for(var y=ce(c),z=y.length,C={},S=0;S<z;S++){var H=y[S];C[H]=p(c[H],H,c)}return C}function mt(){}function Fu(c){return c==null?mt:function(p){return un(c,p)}}function me(c,p,b){var y=Array(Math.max(0,c));p=$n(p,b,1);for(var z=0;z<c;z++)y[z]=p(z);return y}function Wn(c,p){return p==null&&(p=c,c=0),c+Math.floor(Math.random()*(p-c+1))}var Vn=Date.now||function(){return new Date().getTime()};function I0(c){var p=function(C){return c[C]},b="(?:"+ce(c).join("|")+")",y=RegExp(b),z=RegExp(b,"g");return function(C){return C=C==null?"":""+C,y.test(C)?C.replace(z,p):C}}var R0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},wu=I0(R0),_u=je(R0),Cu=I0(_u),Eu=re.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},O0=/(.)^/,qu={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},vt=/\\|'|\r|\n|\u2028|\u2029/g;function xt(c){return"\\"+qu[c]}var Mu=/^\s*(\w|\$)+\s*$/;function zu(c,p,b){!p&&b&&(p=b),p=Mn({},p,re.templateSettings);var y=RegExp([(p.escape||O0).source,(p.interpolate||O0).source,(p.evaluate||O0).source].join("|")+"|$","g"),z=0,C="__p+='";c.replace(y,function(ee,ke,Se,Ee,Xe){return C+=c.slice(z,Xe).replace(vt,xt),z=Xe+ee.length,ke?C+=`'+
((__t=(`+ke+`))==null?'':_.escape(__t))+
'`:Se?C+=`'+
((__t=(`+Se+`))==null?'':__t)+
'`:Ee&&(C+=`';
`+Ee+`
__p+='`),ee}),C+=`';
`;var S=p.variable;if(S){if(!Mu.test(S))throw new Error("variable is not a bare identifier: "+S)}else C=`with(obj||{}){
`+C+`}
`,S="obj";C=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+C+`return __p;
`;var H;try{H=new Function(S,"_",C)}catch(ee){throw ee.source=C,ee}var K=function(ee){return H.call(this,ee,re)};return K.source="function("+S+`){
`+C+"}",K}function Du(c,p,b){p=ze(p);var y=p.length;if(!y)return Fe(b)?b.call(c):b;for(var z=0;z<y;z++){var C=c?.[p[z]];C===void 0&&(C=b,z=y),c=Fe(C)?C.call(c):C}return c}var kt=0;function Su(c){var p=++kt+"";return c?c+p:p}function Gn(c){var p=re(c);return p._chain=!0,p}function Zn(c,p,b,y,z){if(!(y instanceof p))return c.apply(b,z);var C=Hn(c.prototype),S=c.apply(C,z);return A(S)?S:C}var bn=k(function(c,p){var b=bn.placeholder,y=function(){for(var z=0,C=p.length,S=Array(C),H=0;H<C;H++)S[H]=p[H]===b?arguments[z++]:p[H];for(;z<arguments.length;)S.push(arguments[z++]);return Zn(c,y,this,this,S)};return y});bn.placeholder=re;var zn=k(function(c,p,b){if(!Fe(c))throw new TypeError("Bind must be called on a function");var y=k(function(z){return Zn(c,y,p,this,b.concat(z))});return y}),ve=ct(_e);function Dn(c,p,b){!p&&p!==0&&(p=1/0);for(var y=[],z=0,C=0,S=_e(c)||0,H=[];;){if(C>=S){if(!H.length)break;var K=H.pop();C=K.i,c=K.v,S=_e(c);continue}var ee=c[C++];H.length>=p?y[z++]=ee:ve(ee)&&(en(ee)||z0(ee))?(H.push({i:C,v:c}),C=0,c=ee,S=_e(c)):b||(y[z++]=ee)}return y}var Au=k(function(c,p){p=Dn(p,!1,!1);var b=p.length;if(b<1)throw new Error("bindAll must be passed function names");for(;b--;){var y=p[b];c[y]=zn(c[y],c)}return c});function Tu(c,p){var b=function(y){var z=b.cache,C=""+(p?p.apply(this,arguments):y);return nn(z,C)||(z[C]=c.apply(this,arguments)),z[C]};return b.cache={},b}var yt=k(function(c,p,b){return setTimeout(function(){return c.apply(null,b)},p)}),Iu=bn(yt,re,1);function Ru(c,p,b){var y,z,C,S,H=0;b||(b={});var K=function(){H=b.leading===!1?0:Vn(),y=null,S=c.apply(z,C),y||(z=C=null)},ee=function(){var ke=Vn();!H&&b.leading===!1&&(H=ke);var Se=p-(ke-H);return z=this,C=arguments,Se<=0||Se>p?(y&&(clearTimeout(y),y=null),H=ke,S=c.apply(z,C),y||(z=C=null)):!y&&b.trailing!==!1&&(y=setTimeout(K,Se)),S};return ee.cancel=function(){clearTimeout(y),H=0,y=z=C=null},ee}function Ou(c,p,b){var y,z,C,S,H,K=function(){var ke=Vn()-z;p>ke?y=setTimeout(K,p-ke):(y=null,b||(S=c.apply(H,C)),y||(C=H=null))},ee=k(function(ke){return H=this,C=ke,z=Vn(),y||(y=setTimeout(K,p),b&&(S=c.apply(H,C))),S});return ee.cancel=function(){clearTimeout(y),y=C=H=null},ee}function Pu(c,p){return bn(p,c)}function Xn(c){return function(){return!c.apply(this,arguments)}}function Lu(){var c=arguments,p=c.length-1;return function(){for(var b=p,y=c[p].apply(this,arguments);b--;)y=c[b].call(this,y);return y}}function Ft(c,p){return function(){if(--c<1)return p.apply(this,arguments)}}function wt(c,p){var b;return function(){return--c>0&&(b=p.apply(this,arguments)),c<=1&&(p=null),b}}var Nu=bn(wt,2);function _t(c,p,b){p=De(p,b);for(var y=ce(c),z,C=0,S=y.length;C<S;C++)if(z=y[C],p(c[z],z,c))return z}function Ct(c){return function(p,b,y){b=De(b,y);for(var z=_e(p),C=c>0?0:z-1;C>=0&&C<z;C+=c)if(b(p[C],C,p))return C;return-1}}var P0=Ct(1),Et=Ct(-1);function qt(c,p,b,y){b=De(b,y,1);for(var z=b(p),C=0,S=_e(c);C<S;){var H=Math.floor((C+S)/2);b(c[H])<z?C=H+1:S=H}return C}function Mt(c,p,b){return function(y,z,C){var S=0,H=_e(y);if(typeof C=="number")c>0?S=C>=0?C:Math.max(C+H,S):H=C>=0?Math.min(C+1,H):C+H+1;else if(b&&C&&H)return C=b(y,z),y[C]===z?C:-1;if(z!==z)return C=p(f.call(y,S,H),st),C>=0?C+S:-1;for(C=c>0?S:H-1;C>=0&&C<H;C+=c)if(y[C]===z)return C;return-1}}var zt=Mt(1,P0,qt),ju=Mt(-1,Et);function L0(c,p,b){var y=ve(c)?P0:_t,z=y(c,p,b);if(z!==void 0&&z!==-1)return c[z]}function Yu(c,p){return L0(c,We(p))}function Ve(c,p,b){p=$n(p,b);var y,z;if(ve(c))for(y=0,z=c.length;y<z;y++)p(c[y],y,c);else{var C=ce(c);for(y=0,z=C.length;y<z;y++)p(c[C[y]],C[y],c)}return c}function mn(c,p,b){p=De(p,b);for(var y=!ve(c)&&ce(c),z=(y||c).length,C=Array(z),S=0;S<z;S++){var H=y?y[S]:S;C[S]=p(c[H],H,c)}return C}function Dt(c){var p=function(b,y,z,C){var S=!ve(b)&&ce(b),H=(S||b).length,K=c>0?0:H-1;for(C||(z=b[S?S[K]:K],K+=c);K>=0&&K<H;K+=c){var ee=S?S[K]:K;z=y(z,b[ee],ee,b)}return z};return function(b,y,z,C){var S=arguments.length>=3;return p(b,$n(y,C,4),z,S)}}var Jn=Dt(1),h0=Dt(-1);function Sn(c,p,b){var y=[];return p=De(p,b),Ve(c,function(z,C,S){p(z,C,S)&&y.push(z)}),y}function St(c,p,b){return Sn(c,Xn(De(p)),b)}function N0(c,p,b){p=De(p,b);for(var y=!ve(c)&&ce(c),z=(y||c).length,C=0;C<z;C++){var S=y?y[C]:C;if(!p(c[S],S,c))return!1}return!0}function At(c,p,b){p=De(p,b);for(var y=!ve(c)&&ce(c),z=(y||c).length,C=0;C<z;C++){var S=y?y[C]:C;if(p(c[S],S,c))return!0}return!1}function Ge(c,p,b,y){return ve(c)||(c=qn(c)),(typeof b!="number"||y)&&(b=0),zt(c,p,b)>=0}var Bu=k(function(c,p,b){var y,z;return Fe(p)?z=p:(p=ze(p),y=p.slice(0,-1),p=p[p.length-1]),mn(c,function(C){var S=z;if(!S){if(y&&y.length&&(C=Pe(C,y)),C==null)return;S=C[p]}return S==null?S:S.apply(C,b)})});function j0(c,p){return mn(c,g0(p))}function Tt(c,p){return Sn(c,We(p))}function he(c,p,b){var y=-1/0,z=-1/0,C,S;if(p==null||typeof p=="number"&&typeof c[0]!="object"&&c!=null){c=ve(c)?c:qn(c);for(var H=0,K=c.length;H<K;H++)C=c[H],C!=null&&C>y&&(y=C)}else p=De(p,b),Ve(c,function(ee,ke,Se){S=p(ee,ke,Se),(S>z||S===-1/0&&y===-1/0)&&(y=ee,z=S)});return y}function Qn(c,p,b){var y=1/0,z=1/0,C,S;if(p==null||typeof p=="number"&&typeof c[0]!="object"&&c!=null){c=ve(c)?c:qn(c);for(var H=0,K=c.length;H<K;H++)C=c[H],C!=null&&C<y&&(y=C)}else p=De(p,b),Ve(c,function(ee,ke,Se){S=p(ee,ke,Se),(S<z||S===1/0&&y===1/0)&&(y=ee,z=S)});return y}var Kn=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function It(c){return c?en(c)?f.call(c):O(c)?c.match(Kn):ve(c)?mn(c,T0):qn(c):[]}function Y0(c,p,b){if(p==null||b)return ve(c)||(c=qn(c)),c[Wn(c.length-1)];var y=It(c),z=_e(y);p=Math.max(Math.min(p,z),0);for(var C=z-1,S=0;S<p;S++){var H=Wn(S,C),K=y[S];y[S]=y[H],y[H]=K}return y.slice(0,p)}function Uu(c){return Y0(c,1/0)}function Hu(c,p,b){var y=0;return p=De(p,b),j0(mn(c,function(z,C,S){return{value:z,index:y++,criteria:p(z,C,S)}}).sort(function(z,C){var S=z.criteria,H=C.criteria;if(S!==H){if(S>H||S===void 0)return 1;if(S<H||H===void 0)return-1}return z.index-C.index}),"value")}function vn(c,p){return function(b,y,z){var C=p?[[],[]]:{};return y=De(y,z),Ve(b,function(S,H){var K=y(S,H,b);c(C,S,K)}),C}}var rn=vn(function(c,p,b){nn(c,b)?c[b].push(p):c[b]=[p]}),B0=vn(function(c,p,b){c[b]=p}),$u=vn(function(c,p,b){nn(c,b)?c[b]++:c[b]=1}),Ze=vn(function(c,p,b){c[b?0:1].push(p)},!0);function Wu(c){return c==null?0:ve(c)?c.length:ce(c).length}function U0(c,p,b){return p in b}var Rt=k(function(c,p){var b={},y=p[0];if(c==null)return b;Fe(y)?(p.length>1&&(y=$n(y,p[1])),p=tn(c)):(y=U0,p=Dn(p,!1,!1),c=Object(c));for(var z=0,C=p.length;z<C;z++){var S=p[z],H=c[S];y(H,S,c)&&(b[S]=H)}return b}),Vu=k(function(c,p){var b=p[0],y;return Fe(b)?(b=Xn(b),p.length>1&&(y=p[1])):(p=mn(Dn(p,!1,!1),String),b=function(z,C){return!Ge(p,C)}),Rt(c,b,y)});function Ot(c,p,b){return f.call(c,0,Math.max(0,c.length-(p==null||b?1:p)))}function An(c,p,b){return c==null||c.length<1?p==null||b?void 0:[]:p==null||b?c[0]:Ot(c,c.length-p)}function Tn(c,p,b){return f.call(c,p==null||b?1:p)}function Gu(c,p,b){return c==null||c.length<1?p==null||b?void 0:[]:p==null||b?c[c.length-1]:Tn(c,Math.max(0,c.length-p))}function Zu(c){return Sn(c,Boolean)}function Xu(c,p){return Dn(c,p,!1)}var H0=k(function(c,p){return p=Dn(p,!0,!0),Sn(c,function(b){return!Ge(p,b)})}),Ju=k(function(c,p){return H0(c,p)});function $0(c,p,b,y){J(p)||(y=b,b=p,p=!1),b!=null&&(b=De(b,y));for(var z=[],C=[],S=0,H=_e(c);S<H;S++){var K=c[S],ee=b?b(K,S,c):K;p&&!b?((!S||C!==ee)&&z.push(K),C=ee):b?Ge(C,ee)||(C.push(ee),z.push(K)):Ge(z,K)||z.push(K)}return z}var Qu=k(function(c){return $0(Dn(c,!0,!0))});function Ku(c){for(var p=[],b=arguments.length,y=0,z=_e(c);y<z;y++){var C=c[y];if(!Ge(p,C)){var S;for(S=1;S<b&&Ge(arguments[S],C);S++);S===b&&p.push(C)}}return p}function W0(c){for(var p=c&&he(c,_e).length||0,b=Array(p),y=0;y<p;y++)b[y]=j0(c,y);return b}var Pt=k(W0);function er(c,p){for(var b={},y=0,z=_e(c);y<z;y++)p?b[c[y]]=p[y]:b[c[y][0]]=c[y][1];return b}function In(c,p,b){p==null&&(p=c||0,c=0),b||(b=p<c?-1:1);for(var y=Math.max(Math.ceil((p-c)/b),0),z=Array(y),C=0;C<y;C++,c+=b)z[C]=c;return z}function nr(c,p){if(p==null||p<1)return[];for(var b=[],y=0,z=c.length;y<z;)b.push(f.call(c,y,y+=p));return b}function e0(c,p){return c._chain?re(p).chain():p}function Lt(c){return Ve(Ae(c),function(p){var b=re[p]=c[p];re.prototype[p]=function(){var y=[this._wrapped];return u.apply(y,arguments),e0(this,b.apply(re,y))}}),re}Ve(["pop","push","reverse","shift","sort","splice","unshift"],function(c){var p=o[c];re.prototype[c]=function(){var b=this._wrapped;return b!=null&&(p.apply(b,arguments),(c==="shift"||c==="splice")&&b.length===0&&delete b[0]),e0(this,b)}}),Ve(["concat","join","slice"],function(c){var p=o[c];re.prototype[c]=function(){var b=this._wrapped;return b!=null&&(b=p.apply(b,arguments)),e0(this,b)}});var V0={__proto__:null,VERSION:n,restArguments:k,isObject:A,isNull:q,isUndefined:Z,isBoolean:J,isElement:se,isString:O,isNumber:Y,isDate:N,isRegExp:L,isError:Ne,isSymbol:a0,isArrayBuffer:ot,isDataView:fn,isArray:en,isFunction:Fe,isArguments:z0,isFinite:hu,isNaN:st,isTypedArray:l0,isEmpty:pt,isMatch:c0,isEqual:gt,isMap:En,isWeakMap:A0,isSet:f0,isWeakSet:$,keys:ce,allKeys:tn,values:qn,pairs:vu,invert:je,functions:Ae,methods:Ae,extend:p0,extendOwn:le,assign:le,defaults:Mn,create:Ce,clone:$e,tap:Ye,get:un,has:ku,mapObject:yu,identity:T0,constant:lt,noop:mt,toPath:xe,property:g0,propertyOf:Fu,matcher:We,matches:We,times:me,random:Wn,now:Vn,escape:wu,unescape:Cu,templateSettings:Eu,template:zu,result:Du,uniqueId:Su,chain:Gn,iteratee:hn,partial:bn,bind:zn,bindAll:Au,memoize:Tu,delay:yt,defer:Iu,throttle:Ru,debounce:Ou,wrap:Pu,negate:Xn,compose:Lu,after:Ft,before:wt,once:Nu,findKey:_t,findIndex:P0,findLastIndex:Et,sortedIndex:qt,indexOf:zt,lastIndexOf:ju,find:L0,detect:L0,findWhere:Yu,each:Ve,forEach:Ve,map:mn,collect:mn,reduce:Jn,foldl:Jn,inject:Jn,reduceRight:h0,foldr:h0,filter:Sn,select:Sn,reject:St,every:N0,all:N0,some:At,any:At,contains:Ge,includes:Ge,include:Ge,invoke:Bu,pluck:j0,where:Tt,max:he,min:Qn,shuffle:Uu,sample:Y0,sortBy:Hu,groupBy:rn,indexBy:B0,countBy:$u,partition:Ze,toArray:It,size:Wu,pick:Rt,omit:Vu,first:An,head:An,take:An,initial:Ot,last:Gu,rest:Tn,tail:Tn,drop:Tn,compact:Zu,flatten:Xu,without:Ju,uniq:$0,unique:$0,union:Qu,intersection:Ku,difference:H0,unzip:W0,transpose:W0,zip:Pt,object:er,range:In,chunk:nr,mixin:Lt,default:re},G0=Lt(V0);return G0._=G0,G0}))});var X0=pe((F4,M1)=>{V();M1.exports={date_format:"MMM DD, YYYY",gravatar:{s:"100",r:"pg",d:"mm"}}});var D1=pe((z1,Zt)=>{V();(function(n){"use strict";function e(k,A){var q=(k&65535)+(A&65535),Z=(k>>16)+(A>>16)+(q>>16);return Z<<16|q&65535}function o(k,A){return k<<A|k>>>32-A}function i(k,A,q,Z,J,se){return e(o(e(e(A,k),e(Z,se)),J),q)}function t(k,A,q,Z,J,se,te){return i(A&q|~A&Z,k,A,J,se,te)}function u(k,A,q,Z,J,se,te){return i(A&Z|q&~Z,k,A,J,se,te)}function f(k,A,q,Z,J,se,te){return i(A^q^Z,k,A,J,se,te)}function d(k,A,q,Z,J,se,te){return i(q^(A|~Z),k,A,J,se,te)}function h(k,A){k[A>>5]|=128<<A%32,k[(A+64>>>9<<4)+14]=A;var q,Z,J,se,te,O=1732584193,Y=-271733879,N=-1732584194,L=271733878;for(q=0;q<k.length;q+=16)Z=O,J=Y,se=N,te=L,O=t(O,Y,N,L,k[q],7,-680876936),L=t(L,O,Y,N,k[q+1],12,-389564586),N=t(N,L,O,Y,k[q+2],17,606105819),Y=t(Y,N,L,O,k[q+3],22,-1044525330),O=t(O,Y,N,L,k[q+4],7,-176418897),L=t(L,O,Y,N,k[q+5],12,1200080426),N=t(N,L,O,Y,k[q+6],17,-1473231341),Y=t(Y,N,L,O,k[q+7],22,-45705983),O=t(O,Y,N,L,k[q+8],7,1770035416),L=t(L,O,Y,N,k[q+9],12,-1958414417),N=t(N,L,O,Y,k[q+10],17,-42063),Y=t(Y,N,L,O,k[q+11],22,-1990404162),O=t(O,Y,N,L,k[q+12],7,1804603682),L=t(L,O,Y,N,k[q+13],12,-40341101),N=t(N,L,O,Y,k[q+14],17,-1502002290),Y=t(Y,N,L,O,k[q+15],22,1236535329),O=u(O,Y,N,L,k[q+1],5,-165796510),L=u(L,O,Y,N,k[q+6],9,-1069501632),N=u(N,L,O,Y,k[q+11],14,643717713),Y=u(Y,N,L,O,k[q],20,-373897302),O=u(O,Y,N,L,k[q+5],5,-701558691),L=u(L,O,Y,N,k[q+10],9,38016083),N=u(N,L,O,Y,k[q+15],14,-660478335),Y=u(Y,N,L,O,k[q+4],20,-405537848),O=u(O,Y,N,L,k[q+9],5,568446438),L=u(L,O,Y,N,k[q+14],9,-1019803690),N=u(N,L,O,Y,k[q+3],14,-187363961),Y=u(Y,N,L,O,k[q+8],20,1163531501),O=u(O,Y,N,L,k[q+13],5,-1444681467),L=u(L,O,Y,N,k[q+2],9,-51403784),N=u(N,L,O,Y,k[q+7],14,1735328473),Y=u(Y,N,L,O,k[q+12],20,-1926607734),O=f(O,Y,N,L,k[q+5],4,-378558),L=f(L,O,Y,N,k[q+8],11,-2022574463),N=f(N,L,O,Y,k[q+11],16,1839030562),Y=f(Y,N,L,O,k[q+14],23,-35309556),O=f(O,Y,N,L,k[q+1],4,-1530992060),L=f(L,O,Y,N,k[q+4],11,1272893353),N=f(N,L,O,Y,k[q+7],16,-155497632),Y=f(Y,N,L,O,k[q+10],23,-1094730640),O=f(O,Y,N,L,k[q+13],4,681279174),L=f(L,O,Y,N,k[q],11,-358537222),N=f(N,L,O,Y,k[q+3],16,-722521979),Y=f(Y,N,L,O,k[q+6],23,76029189),O=f(O,Y,N,L,k[q+9],4,-640364487),L=f(L,O,Y,N,k[q+12],11,-421815835),N=f(N,L,O,Y,k[q+15],16,530742520),Y=f(Y,N,L,O,k[q+2],23,-995338651),O=d(O,Y,N,L,k[q],6,-198630844),L=d(L,O,Y,N,k[q+7],10,1126891415),N=d(N,L,O,Y,k[q+14],15,-1416354905),Y=d(Y,N,L,O,k[q+5],21,-57434055),O=d(O,Y,N,L,k[q+12],6,1700485571),L=d(L,O,Y,N,k[q+3],10,-1894986606),N=d(N,L,O,Y,k[q+10],15,-1051523),Y=d(Y,N,L,O,k[q+1],21,-2054922799),O=d(O,Y,N,L,k[q+8],6,1873313359),L=d(L,O,Y,N,k[q+15],10,-30611744),N=d(N,L,O,Y,k[q+6],15,-1560198380),Y=d(Y,N,L,O,k[q+13],21,1309151649),O=d(O,Y,N,L,k[q+4],6,-145523070),L=d(L,O,Y,N,k[q+11],10,-1120210379),N=d(N,L,O,Y,k[q+2],15,718787259),Y=d(Y,N,L,O,k[q+9],21,-343485551),O=e(O,Z),Y=e(Y,J),N=e(N,se),L=e(L,te);return[O,Y,N,L]}function v(k){var A,q="",Z=k.length*32;for(A=0;A<Z;A+=8)q+=String.fromCharCode(k[A>>5]>>>A%32&255);return q}function D(k){var A,q=[];for(q[(k.length>>2)-1]=void 0,A=0;A<q.length;A+=1)q[A]=0;var Z=k.length*8;for(A=0;A<Z;A+=8)q[A>>5]|=(k.charCodeAt(A/8)&255)<<A%32;return q}function E(k){return v(h(D(k),k.length*8))}function M(k,A){var q,Z=D(k),J=[],se=[],te;for(J[15]=se[15]=void 0,Z.length>16&&(Z=h(Z,k.length*8)),q=0;q<16;q+=1)J[q]=Z[q]^909522486,se[q]=Z[q]^1549556828;return te=h(J.concat(D(A)),512+A.length*8),v(h(se.concat(te),640))}function w(k){var A="0123456789abcdef",q="",Z,J;for(J=0;J<k.length;J+=1)Z=k.charCodeAt(J),q+=A.charAt(Z>>>4&15)+A.charAt(Z&15);return q}function x(k){return unescape(encodeURIComponent(k))}function m(k){return E(x(k))}function P(k){return w(m(k))}function U(k,A){return M(x(k),x(A))}function R(k,A){return w(U(k,A))}function I(k,A,q){return A?q?U(A,k):R(A,k):q?m(k):P(k)}typeof define=="function"&&define.amd?define(function(){return I}):typeof Zt=="object"&&Zt.exports?Zt.exports=I:n.md5=I})(z1)});var A1=pe((C4,S1)=>{"use strict";V();function Rs(n,e){return Object.prototype.hasOwnProperty.call(n,e)}S1.exports=function(n,e,o,i){e=e||"&",o=o||"=";var t={};if(typeof n!="string"||n.length===0)return t;var u=/\+/g;n=n.split(e);var f=1e3;i&&typeof i.maxKeys=="number"&&(f=i.maxKeys);var d=n.length;f>0&&d>f&&(d=f);for(var h=0;h<d;++h){var v=n[h].replace(u,"%20"),D=v.indexOf(o),E,M,w,x;D>=0?(E=v.substr(0,D),M=v.substr(D+1)):(E=v,M=""),w=decodeURIComponent(E),x=decodeURIComponent(M),Rs(t,w)?Array.isArray(t[w])?t[w].push(x):t[w]=[t[w],x]:t[w]=x}return t}});var I1=pe((q4,T1)=>{"use strict";V();var J0=function(n){switch(typeof n){case"string":return n;case"boolean":return n?"true":"false";case"number":return isFinite(n)?n:"";default:return""}};T1.exports=function(n,e,o,i){return e=e||"&",o=o||"=",n===null&&(n=void 0),typeof n=="object"?Object.keys(n).map(function(t){var u=encodeURIComponent(J0(t))+o;return Array.isArray(n[t])?n[t].map(function(f){return u+encodeURIComponent(J0(f))}).join(e):u+encodeURIComponent(J0(n[t]))}).join(e):i?encodeURIComponent(J0(i))+o+encodeURIComponent(J0(n)):""}});var R1=pe(Q0=>{"use strict";V();Q0.decode=Q0.parse=A1();Q0.encode=Q0.stringify=I1()});var j1=pe((A4,N1)=>{V();var Os=D1(),Ps=R1(),Ls=/^[0-9a-f]{32}$/;function Ns(n){var e={},o={protocol:1,format:1};for(var i in n)o[i]||(e[i]=n[i]);return e}function O1(n,e){if(n)return typeof n.protocol=="boolean"?n.protocol:n.protocol==="http"?!1:n.protocol==="https"?!0:void 0}function P1(n){return n=typeof n=="string"?n.trim().toLowerCase():"unspecified",n.match(Ls)?n:Os(n)}function L1(n){var e=Ps.stringify(Ns(n));return e&&"?"+e||""}var S4=N1.exports={url:function(n,e,o){var i="//www.gravatar.com/avatar/";e&&e.cdn?(i=e.cdn+"/avatar/",delete e.cdn):(e&&e.protocol&&(o=O1(e)),typeof o<"u"&&(i=o?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var t=L1(e);return i+P1(n)+t},profile_url:function(n,e,o){var i=e!=null&&e.format!=null?String(e.format):"json",t;if(e&&e.cdn)t=e.cdn+"/",delete e.cdn;else{e&&e.protocol&&(o=O1(e));var t=o&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var u=L1(e);return t+P1(n)+"."+i+u}}});var B1=pe((I4,Y1)=>{V();Y1.exports=j1()});var $1=pe((O4,H1)=>{V();var js=X0(),Ys=Z0(),Bs=B1(),Us={github:"github.com",twitter:"twitter.com",soundcloud:"soundcloud.com",pinterest:"pinterest.com",vimeo:"vimeo.com",behance:"behance.net",codepen:"codepen.io",foursquare:"foursquare.com",reddit:"reddit.com",spotify:"open.spotify.com",dribble:"dribbble.com",dribbble:"dribbble.com",facebook:"facebook.com",angellist:"angel.co",bitbucket:"bitbucket.org",exercism:"exercism.io",instagram:"instagram.com",googleplus:"plus.google.com",gratipay:"gratipay.com",hackernews:"news.ycombinator.com",lastfm:"last.fm",stackexchange:"stackexchange.com",stackoverflow:"stackoverflow.com",tumblr:"tumblr.com",youtube:"youtube.com",medium:"medium.com",blogger:"blogspot.com",meetup:"meetup.com",flickr:"flickr.com",telegram:"telegram.me"};function Hs(n){return Bs.url(n,js.gravatar,"https")}function $s(n){return n.basics.picture||Hs(n.basics.email)}function U1(n,e){var o=n.basics.profiles;return Ys.find(o,function(i){return i.network.toLowerCase()===e.toLowerCase()})}function Ws(n,e){var o,i,t=U1(n,e);if(t.url)return t.url;if(i=t.username,o=Us[e],!(!i&&!o))switch(e==="medium"&&!/^@.*/.test(i)&&(i="@"+i),e){case"skype":return"skype:"+i+"?call";case"reddit":case"spotify":case"lastfm":case"foursquare":case"youtube":return"//"+o+"/user/"+i;case"hackernews":return"//"+o+"/user?id="+i;case"stackexchange":case"stackoverflow":return"//"+o+"/users/"+i;case"tumblr":case"blogger":return"//"+i+"."+o;case"meetup":return"//"+o+"/members/"+i;case"flickr":return"//"+o+"/people/"+i;default:return"//"+o+"/"+i}}H1.exports={getUrlForPicture:$s,getProfile:U1,getUrlForProfile:Ws}});var Xt=pe((vr,F0)=>{V();(function(n,e){typeof vr=="object"&&typeof F0<"u"?F0.exports=e():typeof define=="function"&&define.amd?define(e):n.moment=e()})(vr,(function(){"use strict";var n;function e(){return n.apply(null,arguments)}function o(r){n=r}function i(r){return r instanceof Array||Object.prototype.toString.call(r)==="[object Array]"}function t(r){return r!=null&&Object.prototype.toString.call(r)==="[object Object]"}function u(r,a){return Object.prototype.hasOwnProperty.call(r,a)}function f(r){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(r).length===0;var a;for(a in r)if(u(r,a))return!1;return!0}function d(r){return r===void 0}function h(r){return typeof r=="number"||Object.prototype.toString.call(r)==="[object Number]"}function v(r){return r instanceof Date||Object.prototype.toString.call(r)==="[object Date]"}function D(r,a){var s=[],l,g=r.length;for(l=0;l<g;++l)s.push(a(r[l],l));return s}function E(r,a){for(var s in a)u(a,s)&&(r[s]=a[s]);return u(a,"toString")&&(r.toString=a.toString),u(a,"valueOf")&&(r.valueOf=a.valueOf),r}function M(r,a,s,l){return C(r,a,s,l,!0).utc()}function w(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function x(r){return r._pf==null&&(r._pf=w()),r._pf}var m;Array.prototype.some?m=Array.prototype.some:m=function(r){var a=Object(this),s=a.length>>>0,l;for(l=0;l<s;l++)if(l in a&&r.call(this,a[l],l,a))return!0;return!1};function P(r){var a=null,s=!1,l=r._d&&!isNaN(r._d.getTime());if(l&&(a=x(r),s=m.call(a.parsedDateParts,function(g){return g!=null}),l=a.overflow<0&&!a.empty&&!a.invalidEra&&!a.invalidMonth&&!a.invalidWeekday&&!a.weekdayMismatch&&!a.nullInput&&!a.invalidFormat&&!a.userInvalidated&&(!a.meridiem||a.meridiem&&s),r._strict&&(l=l&&a.charsLeftOver===0&&a.unusedTokens.length===0&&a.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(r))r._isValid=l;else return l;return r._isValid}function U(r){var a=M(NaN);return r!=null?E(x(a),r):x(a).userInvalidated=!0,a}var R=e.momentProperties=[],I=!1;function k(r,a){var s,l,g,F=R.length;if(d(a._isAMomentObject)||(r._isAMomentObject=a._isAMomentObject),d(a._i)||(r._i=a._i),d(a._f)||(r._f=a._f),d(a._l)||(r._l=a._l),d(a._strict)||(r._strict=a._strict),d(a._tzm)||(r._tzm=a._tzm),d(a._isUTC)||(r._isUTC=a._isUTC),d(a._offset)||(r._offset=a._offset),d(a._pf)||(r._pf=x(a)),d(a._locale)||(r._locale=a._locale),F>0)for(s=0;s<F;s++)l=R[s],g=a[l],d(g)||(r[l]=g);return r}function A(r){k(this,r),this._d=new Date(r._d!=null?r._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),I===!1&&(I=!0,e.updateOffset(this),I=!1)}function q(r){return r instanceof A||r!=null&&r._isAMomentObject!=null}function Z(r){e.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+r)}function J(r,a){var s=!0;return E(function(){if(e.deprecationHandler!=null&&e.deprecationHandler(null,r),s){var l=[],g,F,T,W=arguments.length;for(F=0;F<W;F++){if(g="",typeof arguments[F]=="object"){g+=`
[`+F+"] ";for(T in arguments[0])u(arguments[0],T)&&(g+=T+": "+arguments[0][T]+", ");g=g.slice(0,-2)}else g=arguments[F];l.push(g)}Z(r+`
Arguments: `+Array.prototype.slice.call(l).join("")+`
`+new Error().stack),s=!1}return a.apply(this,arguments)},a)}var se={};function te(r,a){e.deprecationHandler!=null&&e.deprecationHandler(r,a),se[r]||(Z(a),se[r]=!0)}e.suppressDeprecationWarnings=!1,e.deprecationHandler=null;function O(r){return typeof Function<"u"&&r instanceof Function||Object.prototype.toString.call(r)==="[object Function]"}function Y(r){var a,s;for(s in r)u(r,s)&&(a=r[s],O(a)?this[s]=a:this["_"+s]=a);this._config=r,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function N(r,a){var s=E({},r),l;for(l in a)u(a,l)&&(t(r[l])&&t(a[l])?(s[l]={},E(s[l],r[l]),E(s[l],a[l])):a[l]!=null?s[l]=a[l]:delete s[l]);for(l in r)u(r,l)&&!u(a,l)&&t(r[l])&&(s[l]=E({},s[l]));return s}function L(r){r!=null&&this.set(r)}var Ne;Object.keys?Ne=Object.keys:Ne=function(r){var a,s=[];for(a in r)u(r,a)&&s.push(a);return s};var a0={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function ot(r,a,s){var l=this._calendar[r]||this._calendar.sameElse;return O(l)?l.call(a,s):l}function Oe(r,a,s){var l=""+Math.abs(r),g=a-l.length,F=r>=0;return(F?s?"+":"":"-")+Math.pow(10,Math.max(0,g)).toString().substr(1)+l}var q0=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Fe=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,o0={},dn={};function G(r,a,s,l){var g=l;typeof l=="string"&&(g=function(){return this[l]()}),r&&(dn[r]=g),a&&(dn[a[0]]=function(){return Oe(g.apply(this,arguments),a[1],a[2])}),s&&(dn[s]=function(){return this.localeData().ordinal(g.apply(this,arguments),r)})}function pu(r){return r.match(/\[[\s\S]/)?r.replace(/^\[|\]$/g,""):r.replace(/\\/g,"")}function gu(r){var a=r.match(q0),s,l;for(s=0,l=a.length;s<l;s++)dn[a[s]]?a[s]=dn[a[s]]:a[s]=pu(a[s]);return function(g){var F="",T;for(T=0;T<l;T++)F+=O(a[T])?a[T].call(g,r):a[T];return F}}function fn(r,a){return r.isValid()?(a=en(a,r.localeData()),o0[a]=o0[a]||gu(a),o0[a](r)):r.localeData().invalidDate()}function en(r,a){var s=5;function l(g){return a.longDateFormat(g)||g}for(Fe.lastIndex=0;s>=0&&Fe.test(r);)r=r.replace(Fe,l),Fe.lastIndex=0,s-=1;return r}var nn={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function M0(r){var a=this._longDateFormat[r],s=this._longDateFormat[r.toUpperCase()];return a||!s?a:(this._longDateFormat[r]=s.match(q0).map(function(l){return l==="MMMM"||l==="MM"||l==="DD"||l==="dddd"?l.slice(1):l}).join(""),this._longDateFormat[r])}var z0="Invalid date";function hu(){return this._invalidDate}var st="%d",lt=/\d{1,2}/;function ct(r){return this._ordinal.replace("%d",r)}var dt={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s0(r,a,s,l){var g=this._relativeTime[s];return O(g)?g(r,a,s,l):g.replace(/%d/i,r)}function bu(r,a){var s=this._relativeTime[r>0?"future":"past"];return O(s)?s(a):s.replace(/%s/i,a)}var ft={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Ie(r){return typeof r=="string"?ft[r]||ft[r.toLowerCase()]:void 0}function l0(r){var a={},s,l;for(l in r)u(r,l)&&(s=Ie(l),s&&(a[s]=r[l]));return a}var _e={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function mu(r){var a=[],s;for(s in r)u(r,s)&&a.push({unit:s,priority:_e[s]});return a.sort(function(l,g){return l.priority-g.priority}),a}var D0=/\d/,ce=/\d\d/,pt=/\d{3}/,c0=/\d{4}/,re=/[+-]?\d{6}/,ge=/\d\d?/,S0=/\d\d\d\d?/,gt=/\d\d\d\d\d\d?/,tn=/\d{1,3}/,Bn=/\d{1,4}/,_n=/[+-]?\d{1,6}/,pn=/\d+/,Cn=/[+-]?\d+/,ht=/Z|[+-]\d\d:?\d\d/gi,d0=/Z|[+-]\d\d(?::?\d\d)?/gi,bt=/[+-]?\d+(\.\d{1,3})?/,Un=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,En=/^[1-9]\d?/,A0=/^([1-9]\d|\d)/,f0;f0={};function $(r,a,s){f0[r]=O(a)?a:function(l,g){return l&&s?s:a}}function qn(r,a){return u(f0,r)?f0[r](a._strict,a._locale):new RegExp(vu(r))}function vu(r){return je(r.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,s,l,g,F){return s||l||g||F}))}function je(r){return r.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Ae(r){return r<0?Math.ceil(r)||0:Math.floor(r)}function ne(r){var a=+r,s=0;return a!==0&&isFinite(a)&&(s=Ae(a)),s}var p0={};function le(r,a){var s,l=a,g;for(typeof r=="string"&&(r=[r]),h(a)&&(l=function(F,T){T[a]=ne(F)}),g=r.length,s=0;s<g;s++)p0[r[s]]=l}function Mn(r,a){le(r,function(s,l,g,F){g._w=g._w||{},a(s,g._w,g,F)})}function xu(r,a,s){a!=null&&u(p0,r)&&p0[r](a,s._a,s,r)}function Hn(r){return r%4===0&&r%100!==0||r%400===0}var Ce=0,$e=1,Ye=2,xe=3,ze=4,Pe=5,un=6,ku=7,T0=8;G("Y",0,0,function(){var r=this.year();return r<=9999?Oe(r,4):"+"+r}),G(0,["YY",2],0,function(){return this.year()%100}),G(0,["YYYY",4],0,"year"),G(0,["YYYYY",5],0,"year"),G(0,["YYYYYY",6,!0],0,"year"),$("Y",Cn),$("YY",ge,ce),$("YYYY",Bn,c0),$("YYYYY",_n,re),$("YYYYYY",_n,re),le(["YYYYY","YYYYYY"],Ce),le("YYYY",function(r,a){a[Ce]=r.length===2?e.parseTwoDigitYear(r):ne(r)}),le("YY",function(r,a){a[Ce]=e.parseTwoDigitYear(r)}),le("Y",function(r,a){a[Ce]=parseInt(r,10)});function We(r){return Hn(r)?366:365}e.parseTwoDigitYear=function(r){return ne(r)+(ne(r)>68?1900:2e3)};var g0=gn("FullYear",!0);function $n(){return Hn(this.year())}function gn(r,a){return function(s){return s!=null?(De(this,r,s),e.updateOffset(this,a),this):hn(this,r)}}function hn(r,a){if(!r.isValid())return NaN;var s=r._d,l=r._isUTC;switch(a){case"Milliseconds":return l?s.getUTCMilliseconds():s.getMilliseconds();case"Seconds":return l?s.getUTCSeconds():s.getSeconds();case"Minutes":return l?s.getUTCMinutes():s.getMinutes();case"Hours":return l?s.getUTCHours():s.getHours();case"Date":return l?s.getUTCDate():s.getDate();case"Day":return l?s.getUTCDay():s.getDay();case"Month":return l?s.getUTCMonth():s.getMonth();case"FullYear":return l?s.getUTCFullYear():s.getFullYear();default:return NaN}}function De(r,a,s){var l,g,F,T,W;if(!(!r.isValid()||isNaN(s))){switch(l=r._d,g=r._isUTC,a){case"Milliseconds":return void(g?l.setUTCMilliseconds(s):l.setMilliseconds(s));case"Seconds":return void(g?l.setUTCSeconds(s):l.setSeconds(s));case"Minutes":return void(g?l.setUTCMinutes(s):l.setMinutes(s));case"Hours":return void(g?l.setUTCHours(s):l.setHours(s));case"Date":return void(g?l.setUTCDate(s):l.setDate(s));case"FullYear":break;default:return}F=s,T=r.month(),W=r.date(),W=W===29&&T===1&&!Hn(F)?28:W,g?l.setUTCFullYear(F,T,W):l.setFullYear(F,T,W)}}function yu(r){return r=Ie(r),O(this[r])?this[r]():this}function mt(r,a){if(typeof r=="object"){r=l0(r);var s=mu(r),l,g=s.length;for(l=0;l<g;l++)this[s[l].unit](r[s[l].unit])}else if(r=Ie(r),O(this[r]))return this[r](a);return this}function Fu(r,a){return(r%a+a)%a}var me;Array.prototype.indexOf?me=Array.prototype.indexOf:me=function(r){var a;for(a=0;a<this.length;++a)if(this[a]===r)return a;return-1};function Wn(r,a){if(isNaN(r)||isNaN(a))return NaN;var s=Fu(a,12);return r+=(a-s)/12,s===1?Hn(r)?29:28:31-s%7%2}G("M",["MM",2],"Mo",function(){return this.month()+1}),G("MMM",0,0,function(r){return this.localeData().monthsShort(this,r)}),G("MMMM",0,0,function(r){return this.localeData().months(this,r)}),$("M",ge,En),$("MM",ge,ce),$("MMM",function(r,a){return a.monthsShortRegex(r)}),$("MMMM",function(r,a){return a.monthsRegex(r)}),le(["M","MM"],function(r,a){a[$e]=ne(r)-1}),le(["MMM","MMMM"],function(r,a,s,l){var g=s._locale.monthsParse(r,l,s._strict);g!=null?a[$e]=g:x(s).invalidMonth=r});var Vn="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),I0="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),R0=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,wu=Un,_u=Un;function Cu(r,a){return r?i(this._months)?this._months[r.month()]:this._months[(this._months.isFormat||R0).test(a)?"format":"standalone"][r.month()]:i(this._months)?this._months:this._months.standalone}function Eu(r,a){return r?i(this._monthsShort)?this._monthsShort[r.month()]:this._monthsShort[R0.test(a)?"format":"standalone"][r.month()]:i(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function O0(r,a,s){var l,g,F,T=r.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],l=0;l<12;++l)F=M([2e3,l]),this._shortMonthsParse[l]=this.monthsShort(F,"").toLocaleLowerCase(),this._longMonthsParse[l]=this.months(F,"").toLocaleLowerCase();return s?a==="MMM"?(g=me.call(this._shortMonthsParse,T),g!==-1?g:null):(g=me.call(this._longMonthsParse,T),g!==-1?g:null):a==="MMM"?(g=me.call(this._shortMonthsParse,T),g!==-1?g:(g=me.call(this._longMonthsParse,T),g!==-1?g:null)):(g=me.call(this._longMonthsParse,T),g!==-1?g:(g=me.call(this._shortMonthsParse,T),g!==-1?g:null))}function qu(r,a,s){var l,g,F;if(this._monthsParseExact)return O0.call(this,r,a,s);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),l=0;l<12;l++){if(g=M([2e3,l]),s&&!this._longMonthsParse[l]&&(this._longMonthsParse[l]=new RegExp("^"+this.months(g,"").replace(".","")+"$","i"),this._shortMonthsParse[l]=new RegExp("^"+this.monthsShort(g,"").replace(".","")+"$","i")),!s&&!this._monthsParse[l]&&(F="^"+this.months(g,"")+"|^"+this.monthsShort(g,""),this._monthsParse[l]=new RegExp(F.replace(".",""),"i")),s&&a==="MMMM"&&this._longMonthsParse[l].test(r))return l;if(s&&a==="MMM"&&this._shortMonthsParse[l].test(r))return l;if(!s&&this._monthsParse[l].test(r))return l}}function vt(r,a){if(!r.isValid())return r;if(typeof a=="string"){if(/^\d+$/.test(a))a=ne(a);else if(a=r.localeData().monthsParse(a),!h(a))return r}var s=a,l=r.date();return l=l<29?l:Math.min(l,Wn(r.year(),s)),r._isUTC?r._d.setUTCMonth(s,l):r._d.setMonth(s,l),r}function xt(r){return r!=null?(vt(this,r),e.updateOffset(this,!0),this):hn(this,"Month")}function Mu(){return Wn(this.year(),this.month())}function zu(r){return this._monthsParseExact?(u(this,"_monthsRegex")||kt.call(this),r?this._monthsShortStrictRegex:this._monthsShortRegex):(u(this,"_monthsShortRegex")||(this._monthsShortRegex=wu),this._monthsShortStrictRegex&&r?this._monthsShortStrictRegex:this._monthsShortRegex)}function Du(r){return this._monthsParseExact?(u(this,"_monthsRegex")||kt.call(this),r?this._monthsStrictRegex:this._monthsRegex):(u(this,"_monthsRegex")||(this._monthsRegex=_u),this._monthsStrictRegex&&r?this._monthsStrictRegex:this._monthsRegex)}function kt(){function r(Q,ie){return ie.length-Q.length}var a=[],s=[],l=[],g,F,T,W;for(g=0;g<12;g++)F=M([2e3,g]),T=je(this.monthsShort(F,"")),W=je(this.months(F,"")),a.push(T),s.push(W),l.push(W),l.push(T);a.sort(r),s.sort(r),l.sort(r),this._monthsRegex=new RegExp("^("+l.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Su(r,a,s,l,g,F,T){var W;return r<100&&r>=0?(W=new Date(r+400,a,s,l,g,F,T),isFinite(W.getFullYear())&&W.setFullYear(r)):W=new Date(r,a,s,l,g,F,T),W}function Gn(r){var a,s;return r<100&&r>=0?(s=Array.prototype.slice.call(arguments),s[0]=r+400,a=new Date(Date.UTC.apply(null,s)),isFinite(a.getUTCFullYear())&&a.setUTCFullYear(r)):a=new Date(Date.UTC.apply(null,arguments)),a}function Zn(r,a,s){var l=7+a-s,g=(7+Gn(r,0,l).getUTCDay()-a)%7;return-g+l-1}function bn(r,a,s,l,g){var F=(7+s-l)%7,T=Zn(r,l,g),W=1+7*(a-1)+F+T,Q,ie;return W<=0?(Q=r-1,ie=We(Q)+W):W>We(r)?(Q=r+1,ie=W-We(r)):(Q=r,ie=W),{year:Q,dayOfYear:ie}}function zn(r,a,s){var l=Zn(r.year(),a,s),g=Math.floor((r.dayOfYear()-l-1)/7)+1,F,T;return g<1?(T=r.year()-1,F=g+ve(T,a,s)):g>ve(r.year(),a,s)?(F=g-ve(r.year(),a,s),T=r.year()+1):(T=r.year(),F=g),{week:F,year:T}}function ve(r,a,s){var l=Zn(r,a,s),g=Zn(r+1,a,s);return(We(r)-l+g)/7}G("w",["ww",2],"wo","week"),G("W",["WW",2],"Wo","isoWeek"),$("w",ge,En),$("ww",ge,ce),$("W",ge,En),$("WW",ge,ce),Mn(["w","ww","W","WW"],function(r,a,s,l){a[l.substr(0,1)]=ne(r)});function Dn(r){return zn(r,this._week.dow,this._week.doy).week}var Au={dow:0,doy:6};function Tu(){return this._week.dow}function yt(){return this._week.doy}function Iu(r){var a=this.localeData().week(this);return r==null?a:this.add((r-a)*7,"d")}function Ru(r){var a=zn(this,1,4).week;return r==null?a:this.add((r-a)*7,"d")}G("d",0,"do","day"),G("dd",0,0,function(r){return this.localeData().weekdaysMin(this,r)}),G("ddd",0,0,function(r){return this.localeData().weekdaysShort(this,r)}),G("dddd",0,0,function(r){return this.localeData().weekdays(this,r)}),G("e",0,0,"weekday"),G("E",0,0,"isoWeekday"),$("d",ge),$("e",ge),$("E",ge),$("dd",function(r,a){return a.weekdaysMinRegex(r)}),$("ddd",function(r,a){return a.weekdaysShortRegex(r)}),$("dddd",function(r,a){return a.weekdaysRegex(r)}),Mn(["dd","ddd","dddd"],function(r,a,s,l){var g=s._locale.weekdaysParse(r,l,s._strict);g!=null?a.d=g:x(s).invalidWeekday=r}),Mn(["d","e","E"],function(r,a,s,l){a[l]=ne(r)});function Ou(r,a){return typeof r!="string"?r:isNaN(r)?(r=a.weekdaysParse(r),typeof r=="number"?r:null):parseInt(r,10)}function Pu(r,a){return typeof r=="string"?a.weekdaysParse(r)%7||7:isNaN(r)?null:r}function Xn(r,a){return r.slice(a,7).concat(r.slice(0,a))}var Lu="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Ft="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),wt="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Nu=Un,_t=Un,Ct=Un;function P0(r,a){var s=i(this._weekdays)?this._weekdays:this._weekdays[r&&r!==!0&&this._weekdays.isFormat.test(a)?"format":"standalone"];return r===!0?Xn(s,this._week.dow):r?s[r.day()]:s}function Et(r){return r===!0?Xn(this._weekdaysShort,this._week.dow):r?this._weekdaysShort[r.day()]:this._weekdaysShort}function qt(r){return r===!0?Xn(this._weekdaysMin,this._week.dow):r?this._weekdaysMin[r.day()]:this._weekdaysMin}function Mt(r,a,s){var l,g,F,T=r.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],l=0;l<7;++l)F=M([2e3,1]).day(l),this._minWeekdaysParse[l]=this.weekdaysMin(F,"").toLocaleLowerCase(),this._shortWeekdaysParse[l]=this.weekdaysShort(F,"").toLocaleLowerCase(),this._weekdaysParse[l]=this.weekdays(F,"").toLocaleLowerCase();return s?a==="dddd"?(g=me.call(this._weekdaysParse,T),g!==-1?g:null):a==="ddd"?(g=me.call(this._shortWeekdaysParse,T),g!==-1?g:null):(g=me.call(this._minWeekdaysParse,T),g!==-1?g:null):a==="dddd"?(g=me.call(this._weekdaysParse,T),g!==-1||(g=me.call(this._shortWeekdaysParse,T),g!==-1)?g:(g=me.call(this._minWeekdaysParse,T),g!==-1?g:null)):a==="ddd"?(g=me.call(this._shortWeekdaysParse,T),g!==-1||(g=me.call(this._weekdaysParse,T),g!==-1)?g:(g=me.call(this._minWeekdaysParse,T),g!==-1?g:null)):(g=me.call(this._minWeekdaysParse,T),g!==-1||(g=me.call(this._weekdaysParse,T),g!==-1)?g:(g=me.call(this._shortWeekdaysParse,T),g!==-1?g:null))}function zt(r,a,s){var l,g,F;if(this._weekdaysParseExact)return Mt.call(this,r,a,s);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),l=0;l<7;l++){if(g=M([2e3,1]).day(l),s&&!this._fullWeekdaysParse[l]&&(this._fullWeekdaysParse[l]=new RegExp("^"+this.weekdays(g,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[l]=new RegExp("^"+this.weekdaysShort(g,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[l]=new RegExp("^"+this.weekdaysMin(g,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[l]||(F="^"+this.weekdays(g,"")+"|^"+this.weekdaysShort(g,"")+"|^"+this.weekdaysMin(g,""),this._weekdaysParse[l]=new RegExp(F.replace(".",""),"i")),s&&a==="dddd"&&this._fullWeekdaysParse[l].test(r))return l;if(s&&a==="ddd"&&this._shortWeekdaysParse[l].test(r))return l;if(s&&a==="dd"&&this._minWeekdaysParse[l].test(r))return l;if(!s&&this._weekdaysParse[l].test(r))return l}}function ju(r){if(!this.isValid())return r!=null?this:NaN;var a=hn(this,"Day");return r!=null?(r=Ou(r,this.localeData()),this.add(r-a,"d")):a}function L0(r){if(!this.isValid())return r!=null?this:NaN;var a=(this.day()+7-this.localeData()._week.dow)%7;return r==null?a:this.add(r-a,"d")}function Yu(r){if(!this.isValid())return r!=null?this:NaN;if(r!=null){var a=Pu(r,this.localeData());return this.day(this.day()%7?a:a-7)}else return this.day()||7}function Ve(r){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||Jn.call(this),r?this._weekdaysStrictRegex:this._weekdaysRegex):(u(this,"_weekdaysRegex")||(this._weekdaysRegex=Nu),this._weekdaysStrictRegex&&r?this._weekdaysStrictRegex:this._weekdaysRegex)}function mn(r){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||Jn.call(this),r?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(u(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=_t),this._weekdaysShortStrictRegex&&r?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Dt(r){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||Jn.call(this),r?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(u(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ct),this._weekdaysMinStrictRegex&&r?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Jn(){function r(Te,Fn){return Fn.length-Te.length}var a=[],s=[],l=[],g=[],F,T,W,Q,ie;for(F=0;F<7;F++)T=M([2e3,1]).day(F),W=je(this.weekdaysMin(T,"")),Q=je(this.weekdaysShort(T,"")),ie=je(this.weekdays(T,"")),a.push(W),s.push(Q),l.push(ie),g.push(W),g.push(Q),g.push(ie);a.sort(r),s.sort(r),l.sort(r),g.sort(r),this._weekdaysRegex=new RegExp("^("+g.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function h0(){return this.hours()%12||12}function Sn(){return this.hours()||24}G("H",["HH",2],0,"hour"),G("h",["hh",2],0,h0),G("k",["kk",2],0,Sn),G("hmm",0,0,function(){return""+h0.apply(this)+Oe(this.minutes(),2)}),G("hmmss",0,0,function(){return""+h0.apply(this)+Oe(this.minutes(),2)+Oe(this.seconds(),2)}),G("Hmm",0,0,function(){return""+this.hours()+Oe(this.minutes(),2)}),G("Hmmss",0,0,function(){return""+this.hours()+Oe(this.minutes(),2)+Oe(this.seconds(),2)});function St(r,a){G(r,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),a)})}St("a",!0),St("A",!1);function N0(r,a){return a._meridiemParse}$("a",N0),$("A",N0),$("H",ge,A0),$("h",ge,En),$("k",ge,En),$("HH",ge,ce),$("hh",ge,ce),$("kk",ge,ce),$("hmm",S0),$("hmmss",gt),$("Hmm",S0),$("Hmmss",gt),le(["H","HH"],xe),le(["k","kk"],function(r,a,s){var l=ne(r);a[xe]=l===24?0:l}),le(["a","A"],function(r,a,s){s._isPm=s._locale.isPM(r),s._meridiem=r}),le(["h","hh"],function(r,a,s){a[xe]=ne(r),x(s).bigHour=!0}),le("hmm",function(r,a,s){var l=r.length-2;a[xe]=ne(r.substr(0,l)),a[ze]=ne(r.substr(l)),x(s).bigHour=!0}),le("hmmss",function(r,a,s){var l=r.length-4,g=r.length-2;a[xe]=ne(r.substr(0,l)),a[ze]=ne(r.substr(l,2)),a[Pe]=ne(r.substr(g)),x(s).bigHour=!0}),le("Hmm",function(r,a,s){var l=r.length-2;a[xe]=ne(r.substr(0,l)),a[ze]=ne(r.substr(l))}),le("Hmmss",function(r,a,s){var l=r.length-4,g=r.length-2;a[xe]=ne(r.substr(0,l)),a[ze]=ne(r.substr(l,2)),a[Pe]=ne(r.substr(g))});function At(r){return(r+"").toLowerCase().charAt(0)==="p"}var Ge=/[ap]\.?m?\.?/i,Bu=gn("Hours",!0);function j0(r,a,s){return r>11?s?"pm":"PM":s?"am":"AM"}var Tt={calendar:a0,longDateFormat:nn,invalidDate:z0,ordinal:st,dayOfMonthOrdinalParse:lt,relativeTime:dt,months:Vn,monthsShort:I0,week:Au,weekdays:Lu,weekdaysMin:wt,weekdaysShort:Ft,meridiemParse:Ge},he={},Qn={},Kn;function It(r,a){var s,l=Math.min(r.length,a.length);for(s=0;s<l;s+=1)if(r[s]!==a[s])return s;return l}function Y0(r){return r&&r.toLowerCase().replace("_","-")}function Uu(r){for(var a=0,s,l,g,F;a<r.length;){for(F=Y0(r[a]).split("-"),s=F.length,l=Y0(r[a+1]),l=l?l.split("-"):null;s>0;){if(g=vn(F.slice(0,s).join("-")),g)return g;if(l&&l.length>=s&&It(F,l)>=s-1)break;s--}a++}return Kn}function Hu(r){return!!(r&&r.match("^[^/\\\\]*$"))}function vn(r){var a=null,s;if(he[r]===void 0&&typeof F0<"u"&&F0&&F0.exports&&Hu(r))try{a=Kn._abbr,s=p1,s("./locale/"+r),rn(a)}catch{he[r]=null}return he[r]}function rn(r,a){var s;return r&&(d(a)?s=Ze(r):s=B0(r,a),s?Kn=s:typeof console<"u"&&console.warn&&console.warn("Locale "+r+" not found. Did you forget to load it?")),Kn._abbr}function B0(r,a){if(a!==null){var s,l=Tt;if(a.abbr=r,he[r]!=null)te("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),l=he[r]._config;else if(a.parentLocale!=null)if(he[a.parentLocale]!=null)l=he[a.parentLocale]._config;else if(s=vn(a.parentLocale),s!=null)l=s._config;else return Qn[a.parentLocale]||(Qn[a.parentLocale]=[]),Qn[a.parentLocale].push({name:r,config:a}),null;return he[r]=new L(N(l,a)),Qn[r]&&Qn[r].forEach(function(g){B0(g.name,g.config)}),rn(r),he[r]}else return delete he[r],null}function $u(r,a){if(a!=null){var s,l,g=Tt;he[r]!=null&&he[r].parentLocale!=null?he[r].set(N(he[r]._config,a)):(l=vn(r),l!=null&&(g=l._config),a=N(g,a),l==null&&(a.abbr=r),s=new L(a),s.parentLocale=he[r],he[r]=s),rn(r)}else he[r]!=null&&(he[r].parentLocale!=null?(he[r]=he[r].parentLocale,r===rn()&&rn(r)):he[r]!=null&&delete he[r]);return he[r]}function Ze(r){var a;if(r&&r._locale&&r._locale._abbr&&(r=r._locale._abbr),!r)return Kn;if(!i(r)){if(a=vn(r),a)return a;r=[r]}return Uu(r)}function Wu(){return Ne(he)}function U0(r){var a,s=r._a;return s&&x(r).overflow===-2&&(a=s[$e]<0||s[$e]>11?$e:s[Ye]<1||s[Ye]>Wn(s[Ce],s[$e])?Ye:s[xe]<0||s[xe]>24||s[xe]===24&&(s[ze]!==0||s[Pe]!==0||s[un]!==0)?xe:s[ze]<0||s[ze]>59?ze:s[Pe]<0||s[Pe]>59?Pe:s[un]<0||s[un]>999?un:-1,x(r)._overflowDayOfYear&&(a<Ce||a>Ye)&&(a=Ye),x(r)._overflowWeeks&&a===-1&&(a=ku),x(r)._overflowWeekday&&a===-1&&(a=T0),x(r).overflow=a),r}var Rt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Vu=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ot=/Z|[+-]\d\d(?::?\d\d)?/,An=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Tn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Gu=/^\/?Date\((-?\d+)/i,Zu=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Xu={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function H0(r){var a,s,l=r._i,g=Rt.exec(l)||Vu.exec(l),F,T,W,Q,ie=An.length,Te=Tn.length;if(g){for(x(r).iso=!0,a=0,s=ie;a<s;a++)if(An[a][1].exec(g[1])){T=An[a][0],F=An[a][2]!==!1;break}if(T==null){r._isValid=!1;return}if(g[3]){for(a=0,s=Te;a<s;a++)if(Tn[a][1].exec(g[3])){W=(g[2]||" ")+Tn[a][0];break}if(W==null){r._isValid=!1;return}}if(!F&&W!=null){r._isValid=!1;return}if(g[4])if(Ot.exec(g[4]))Q="Z";else{r._isValid=!1;return}r._f=T+(W||"")+(Q||""),V0(r)}else r._isValid=!1}function Ju(r,a,s,l,g,F){var T=[$0(r),I0.indexOf(a),parseInt(s,10),parseInt(l,10),parseInt(g,10)];return F&&T.push(parseInt(F,10)),T}function $0(r){var a=parseInt(r,10);return a<=49?2e3+a:a<=999?1900+a:a}function Qu(r){return r.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Ku(r,a,s){if(r){var l=Ft.indexOf(r),g=new Date(a[0],a[1],a[2]).getDay();if(l!==g)return x(s).weekdayMismatch=!0,s._isValid=!1,!1}return!0}function W0(r,a,s){if(r)return Xu[r];if(a)return 0;var l=parseInt(s,10),g=l%100,F=(l-g)/100;return F*60+g}function Pt(r){var a=Zu.exec(Qu(r._i)),s;if(a){if(s=Ju(a[4],a[3],a[2],a[5],a[6],a[7]),!Ku(a[1],s,r))return;r._a=s,r._tzm=W0(a[8],a[9],a[10]),r._d=Gn.apply(null,r._a),r._d.setUTCMinutes(r._d.getUTCMinutes()-r._tzm),x(r).rfc2822=!0}else r._isValid=!1}function er(r){var a=Gu.exec(r._i);if(a!==null){r._d=new Date(+a[1]);return}if(H0(r),r._isValid===!1)delete r._isValid;else return;if(Pt(r),r._isValid===!1)delete r._isValid;else return;r._strict?r._isValid=!1:e.createFromInputFallback(r)}e.createFromInputFallback=J("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(r){r._d=new Date(r._i+(r._useUTC?" UTC":""))});function In(r,a,s){return r??a??s}function nr(r){var a=new Date(e.now());return r._useUTC?[a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()]:[a.getFullYear(),a.getMonth(),a.getDate()]}function e0(r){var a,s,l=[],g,F,T;if(!r._d){for(g=nr(r),r._w&&r._a[Ye]==null&&r._a[$e]==null&&Lt(r),r._dayOfYear!=null&&(T=In(r._a[Ce],g[Ce]),(r._dayOfYear>We(T)||r._dayOfYear===0)&&(x(r)._overflowDayOfYear=!0),s=Gn(T,0,r._dayOfYear),r._a[$e]=s.getUTCMonth(),r._a[Ye]=s.getUTCDate()),a=0;a<3&&r._a[a]==null;++a)r._a[a]=l[a]=g[a];for(;a<7;a++)r._a[a]=l[a]=r._a[a]==null?a===2?1:0:r._a[a];r._a[xe]===24&&r._a[ze]===0&&r._a[Pe]===0&&r._a[un]===0&&(r._nextDay=!0,r._a[xe]=0),r._d=(r._useUTC?Gn:Su).apply(null,l),F=r._useUTC?r._d.getUTCDay():r._d.getDay(),r._tzm!=null&&r._d.setUTCMinutes(r._d.getUTCMinutes()-r._tzm),r._nextDay&&(r._a[xe]=24),r._w&&typeof r._w.d<"u"&&r._w.d!==F&&(x(r).weekdayMismatch=!0)}}function Lt(r){var a,s,l,g,F,T,W,Q,ie;a=r._w,a.GG!=null||a.W!=null||a.E!=null?(F=1,T=4,s=In(a.GG,r._a[Ce],zn(S(),1,4).year),l=In(a.W,1),g=In(a.E,1),(g<1||g>7)&&(Q=!0)):(F=r._locale._week.dow,T=r._locale._week.doy,ie=zn(S(),F,T),s=In(a.gg,r._a[Ce],ie.year),l=In(a.w,ie.week),a.d!=null?(g=a.d,(g<0||g>6)&&(Q=!0)):a.e!=null?(g=a.e+F,(a.e<0||a.e>6)&&(Q=!0)):g=F),l<1||l>ve(s,F,T)?x(r)._overflowWeeks=!0:Q!=null?x(r)._overflowWeekday=!0:(W=bn(s,l,g,F,T),r._a[Ce]=W.year,r._dayOfYear=W.dayOfYear)}e.ISO_8601=function(){},e.RFC_2822=function(){};function V0(r){if(r._f===e.ISO_8601){H0(r);return}if(r._f===e.RFC_2822){Pt(r);return}r._a=[],x(r).empty=!0;var a=""+r._i,s,l,g,F,T,W=a.length,Q=0,ie,Te;for(g=en(r._f,r._locale).match(q0)||[],Te=g.length,s=0;s<Te;s++)F=g[s],l=(a.match(qn(F,r))||[])[0],l&&(T=a.substr(0,a.indexOf(l)),T.length>0&&x(r).unusedInput.push(T),a=a.slice(a.indexOf(l)+l.length),Q+=l.length),dn[F]?(l?x(r).empty=!1:x(r).unusedTokens.push(F),xu(F,l,r)):r._strict&&!l&&x(r).unusedTokens.push(F);x(r).charsLeftOver=W-Q,a.length>0&&x(r).unusedInput.push(a),r._a[xe]<=12&&x(r).bigHour===!0&&r._a[xe]>0&&(x(r).bigHour=void 0),x(r).parsedDateParts=r._a.slice(0),x(r).meridiem=r._meridiem,r._a[xe]=G0(r._locale,r._a[xe],r._meridiem),ie=x(r).era,ie!==null&&(r._a[Ce]=r._locale.erasConvertYear(ie,r._a[Ce])),e0(r),U0(r)}function G0(r,a,s){var l;return s==null?a:r.meridiemHour!=null?r.meridiemHour(a,s):(r.isPM!=null&&(l=r.isPM(s),l&&a<12&&(a+=12),!l&&a===12&&(a=0)),a)}function c(r){var a,s,l,g,F,T,W=!1,Q=r._f.length;if(Q===0){x(r).invalidFormat=!0,r._d=new Date(NaN);return}for(g=0;g<Q;g++)F=0,T=!1,a=k({},r),r._useUTC!=null&&(a._useUTC=r._useUTC),a._f=r._f[g],V0(a),P(a)&&(T=!0),F+=x(a).charsLeftOver,F+=x(a).unusedTokens.length*10,x(a).score=F,W?F<l&&(l=F,s=a):(l==null||F<l||T)&&(l=F,s=a,T&&(W=!0));E(r,s||a)}function p(r){if(!r._d){var a=l0(r._i),s=a.day===void 0?a.date:a.day;r._a=D([a.year,a.month,s,a.hour,a.minute,a.second,a.millisecond],function(l){return l&&parseInt(l,10)}),e0(r)}}function b(r){var a=new A(U0(y(r)));return a._nextDay&&(a.add(1,"d"),a._nextDay=void 0),a}function y(r){var a=r._i,s=r._f;return r._locale=r._locale||Ze(r._l),a===null||s===void 0&&a===""?U({nullInput:!0}):(typeof a=="string"&&(r._i=a=r._locale.preparse(a)),q(a)?new A(U0(a)):(v(a)?r._d=a:i(s)?c(r):s?V0(r):z(r),P(r)||(r._d=null),r))}function z(r){var a=r._i;d(a)?r._d=new Date(e.now()):v(a)?r._d=new Date(a.valueOf()):typeof a=="string"?er(r):i(a)?(r._a=D(a.slice(0),function(s){return parseInt(s,10)}),e0(r)):t(a)?p(r):h(a)?r._d=new Date(a):e.createFromInputFallback(r)}function C(r,a,s,l,g){var F={};return(a===!0||a===!1)&&(l=a,a=void 0),(s===!0||s===!1)&&(l=s,s=void 0),(t(r)&&f(r)||i(r)&&r.length===0)&&(r=void 0),F._isAMomentObject=!0,F._useUTC=F._isUTC=g,F._l=s,F._i=r,F._f=a,F._strict=l,b(F)}function S(r,a,s,l){return C(r,a,s,l,!1)}var H=J("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var r=S.apply(null,arguments);return this.isValid()&&r.isValid()?r<this?this:r:U()}),K=J("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var r=S.apply(null,arguments);return this.isValid()&&r.isValid()?r>this?this:r:U()});function ee(r,a){var s,l;if(a.length===1&&i(a[0])&&(a=a[0]),!a.length)return S();for(s=a[0],l=1;l<a.length;++l)(!a[l].isValid()||a[l][r](s))&&(s=a[l]);return s}function ke(){var r=[].slice.call(arguments,0);return ee("isBefore",r)}function Se(){var r=[].slice.call(arguments,0);return ee("isAfter",r)}var Ee=function(){return Date.now?Date.now():+new Date},Xe=["year","quarter","month","week","day","hour","minute","second","millisecond"];function b0(r){var a,s=!1,l,g=Xe.length;for(a in r)if(u(r,a)&&!(me.call(Xe,a)!==-1&&(r[a]==null||!isNaN(r[a]))))return!1;for(l=0;l<g;++l)if(r[Xe[l]]){if(s)return!1;parseFloat(r[Xe[l]])!==ne(r[Xe[l]])&&(s=!0)}return!0}function va(){return this._isValid}function xa(){return Je(NaN)}function Nt(r){var a=l0(r),s=a.year||0,l=a.quarter||0,g=a.month||0,F=a.week||a.isoWeek||0,T=a.day||0,W=a.hour||0,Q=a.minute||0,ie=a.second||0,Te=a.millisecond||0;this._isValid=b0(a),this._milliseconds=+Te+ie*1e3+Q*6e4+W*1e3*60*60,this._days=+T+F*7,this._months=+g+l*3+s*12,this._data={},this._locale=Ze(),this._bubble()}function jt(r){return r instanceof Nt}function tr(r){return r<0?Math.round(-1*r)*-1:Math.round(r)}function ka(r,a,s){var l=Math.min(r.length,a.length),g=Math.abs(r.length-a.length),F=0,T;for(T=0;T<l;T++)(s&&r[T]!==a[T]||!s&&ne(r[T])!==ne(a[T]))&&F++;return F+g}function Wr(r,a){G(r,0,0,function(){var s=this.utcOffset(),l="+";return s<0&&(s=-s,l="-"),l+Oe(~~(s/60),2)+a+Oe(~~s%60,2)})}Wr("Z",":"),Wr("ZZ",""),$("Z",d0),$("ZZ",d0),le(["Z","ZZ"],function(r,a,s){s._useUTC=!0,s._tzm=ur(d0,r)});var ya=/([\+\-]|\d\d)/gi;function ur(r,a){var s=(a||"").match(r),l,g,F;return s===null?null:(l=s[s.length-1]||[],g=(l+"").match(ya)||["-",0,0],F=+(g[1]*60)+ne(g[2]),F===0?0:g[0]==="+"?F:-F)}function rr(r,a){var s,l;return a._isUTC?(s=a.clone(),l=(q(r)||v(r)?r.valueOf():S(r).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+l),e.updateOffset(s,!1),s):S(r).local()}function ir(r){return-Math.round(r._d.getTimezoneOffset())}e.updateOffset=function(){};function Fa(r,a,s){var l=this._offset||0,g;if(!this.isValid())return r!=null?this:NaN;if(r!=null){if(typeof r=="string"){if(r=ur(d0,r),r===null)return this}else Math.abs(r)<16&&!s&&(r=r*60);return!this._isUTC&&a&&(g=ir(this)),this._offset=r,this._isUTC=!0,g!=null&&this.add(g,"m"),l!==r&&(!a||this._changeInProgress?Xr(this,Je(r-l,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?l:ir(this)}function wa(r,a){return r!=null?(typeof r!="string"&&(r=-r),this.utcOffset(r,a),this):-this.utcOffset()}function _a(r){return this.utcOffset(0,r)}function Ca(r){return this._isUTC&&(this.utcOffset(0,r),this._isUTC=!1,r&&this.subtract(ir(this),"m")),this}function Ea(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var r=ur(ht,this._i);r!=null?this.utcOffset(r):this.utcOffset(0,!0)}return this}function qa(r){return this.isValid()?(r=r?S(r).utcOffset():0,(this.utcOffset()-r)%60===0):!1}function Ma(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function za(){if(!d(this._isDSTShifted))return this._isDSTShifted;var r={},a;return k(r,this),r=y(r),r._a?(a=r._isUTC?M(r._a):S(r._a),this._isDSTShifted=this.isValid()&&ka(r._a,a.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Da(){return this.isValid()?!this._isUTC:!1}function Sa(){return this.isValid()?this._isUTC:!1}function Vr(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Aa=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Ta=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Je(r,a){var s=r,l=null,g,F,T;return jt(r)?s={ms:r._milliseconds,d:r._days,M:r._months}:h(r)||!isNaN(+r)?(s={},a?s[a]=+r:s.milliseconds=+r):(l=Aa.exec(r))?(g=l[1]==="-"?-1:1,s={y:0,d:ne(l[Ye])*g,h:ne(l[xe])*g,m:ne(l[ze])*g,s:ne(l[Pe])*g,ms:ne(tr(l[un]*1e3))*g}):(l=Ta.exec(r))?(g=l[1]==="-"?-1:1,s={y:n0(l[2],g),M:n0(l[3],g),w:n0(l[4],g),d:n0(l[5],g),h:n0(l[6],g),m:n0(l[7],g),s:n0(l[8],g)}):s==null?s={}:typeof s=="object"&&("from"in s||"to"in s)&&(T=Ia(S(s.from),S(s.to)),s={},s.ms=T.milliseconds,s.M=T.months),F=new Nt(s),jt(r)&&u(r,"_locale")&&(F._locale=r._locale),jt(r)&&u(r,"_isValid")&&(F._isValid=r._isValid),F}Je.fn=Nt.prototype,Je.invalid=xa;function n0(r,a){var s=r&&parseFloat(r.replace(",","."));return(isNaN(s)?0:s)*a}function Gr(r,a){var s={};return s.months=a.month()-r.month()+(a.year()-r.year())*12,r.clone().add(s.months,"M").isAfter(a)&&--s.months,s.milliseconds=+a-+r.clone().add(s.months,"M"),s}function Ia(r,a){var s;return r.isValid()&&a.isValid()?(a=rr(a,r),r.isBefore(a)?s=Gr(r,a):(s=Gr(a,r),s.milliseconds=-s.milliseconds,s.months=-s.months),s):{milliseconds:0,months:0}}function Zr(r,a){return function(s,l){var g,F;return l!==null&&!isNaN(+l)&&(te(a,"moment()."+a+"(period, number) is deprecated. Please use moment()."+a+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),F=s,s=l,l=F),g=Je(s,l),Xr(this,g,r),this}}function Xr(r,a,s,l){var g=a._milliseconds,F=tr(a._days),T=tr(a._months);r.isValid()&&(l=l??!0,T&&vt(r,hn(r,"Month")+T*s),F&&De(r,"Date",hn(r,"Date")+F*s),g&&r._d.setTime(r._d.valueOf()+g*s),l&&e.updateOffset(r,F||T))}var Ra=Zr(1,"add"),Oa=Zr(-1,"subtract");function Jr(r){return typeof r=="string"||r instanceof String}function Pa(r){return q(r)||v(r)||Jr(r)||h(r)||Na(r)||La(r)||r===null||r===void 0}function La(r){var a=t(r)&&!f(r),s=!1,l=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],g,F,T=l.length;for(g=0;g<T;g+=1)F=l[g],s=s||u(r,F);return a&&s}function Na(r){var a=i(r),s=!1;return a&&(s=r.filter(function(l){return!h(l)&&Jr(r)}).length===0),a&&s}function ja(r){var a=t(r)&&!f(r),s=!1,l=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],g,F;for(g=0;g<l.length;g+=1)F=l[g],s=s||u(r,F);return a&&s}function Ya(r,a){var s=r.diff(a,"days",!0);return s<-6?"sameElse":s<-1?"lastWeek":s<0?"lastDay":s<1?"sameDay":s<2?"nextDay":s<7?"nextWeek":"sameElse"}function Ba(r,a){arguments.length===1&&(arguments[0]?Pa(arguments[0])?(r=arguments[0],a=void 0):ja(arguments[0])&&(a=arguments[0],r=void 0):(r=void 0,a=void 0));var s=r||S(),l=rr(s,this).startOf("day"),g=e.calendarFormat(this,l)||"sameElse",F=a&&(O(a[g])?a[g].call(this,s):a[g]);return this.format(F||this.localeData().calendar(g,this,S(s)))}function Ua(){return new A(this)}function Ha(r,a){var s=q(r)?r:S(r);return this.isValid()&&s.isValid()?(a=Ie(a)||"millisecond",a==="millisecond"?this.valueOf()>s.valueOf():s.valueOf()<this.clone().startOf(a).valueOf()):!1}function $a(r,a){var s=q(r)?r:S(r);return this.isValid()&&s.isValid()?(a=Ie(a)||"millisecond",a==="millisecond"?this.valueOf()<s.valueOf():this.clone().endOf(a).valueOf()<s.valueOf()):!1}function Wa(r,a,s,l){var g=q(r)?r:S(r),F=q(a)?a:S(a);return this.isValid()&&g.isValid()&&F.isValid()?(l=l||"()",(l[0]==="("?this.isAfter(g,s):!this.isBefore(g,s))&&(l[1]===")"?this.isBefore(F,s):!this.isAfter(F,s))):!1}function Va(r,a){var s=q(r)?r:S(r),l;return this.isValid()&&s.isValid()?(a=Ie(a)||"millisecond",a==="millisecond"?this.valueOf()===s.valueOf():(l=s.valueOf(),this.clone().startOf(a).valueOf()<=l&&l<=this.clone().endOf(a).valueOf())):!1}function Ga(r,a){return this.isSame(r,a)||this.isAfter(r,a)}function Za(r,a){return this.isSame(r,a)||this.isBefore(r,a)}function Xa(r,a,s){var l,g,F;if(!this.isValid())return NaN;if(l=rr(r,this),!l.isValid())return NaN;switch(g=(l.utcOffset()-this.utcOffset())*6e4,a=Ie(a),a){case"year":F=Yt(this,l)/12;break;case"month":F=Yt(this,l);break;case"quarter":F=Yt(this,l)/3;break;case"second":F=(this-l)/1e3;break;case"minute":F=(this-l)/6e4;break;case"hour":F=(this-l)/36e5;break;case"day":F=(this-l-g)/864e5;break;case"week":F=(this-l-g)/6048e5;break;default:F=this-l}return s?F:Ae(F)}function Yt(r,a){if(r.date()<a.date())return-Yt(a,r);var s=(a.year()-r.year())*12+(a.month()-r.month()),l=r.clone().add(s,"months"),g,F;return a-l<0?(g=r.clone().add(s-1,"months"),F=(a-l)/(l-g)):(g=r.clone().add(s+1,"months"),F=(a-l)/(g-l)),-(s+F)||0}e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Ja(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Qa(r){if(!this.isValid())return null;var a=r!==!0,s=a?this.clone().utc():this;return s.year()<0||s.year()>9999?fn(s,a?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):O(Date.prototype.toISOString)?a?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",fn(s,"Z")):fn(s,a?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Ka(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var r="moment",a="",s,l,g,F;return this.isLocal()||(r=this.utcOffset()===0?"moment.utc":"moment.parseZone",a="Z"),s="["+r+'("]',l=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",g="-MM-DD[T]HH:mm:ss.SSS",F=a+'[")]',this.format(s+l+g+F)}function eo(r){r||(r=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var a=fn(this,r);return this.localeData().postformat(a)}function no(r,a){return this.isValid()&&(q(r)&&r.isValid()||S(r).isValid())?Je({to:this,from:r}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()}function to(r){return this.from(S(),r)}function uo(r,a){return this.isValid()&&(q(r)&&r.isValid()||S(r).isValid())?Je({from:this,to:r}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()}function ro(r){return this.to(S(),r)}function Qr(r){var a;return r===void 0?this._locale._abbr:(a=Ze(r),a!=null&&(this._locale=a),this)}var Kr=J("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(r){return r===void 0?this.localeData():this.locale(r)});function e1(){return this._locale}var Bt=1e3,m0=60*Bt,Ut=60*m0,n1=(365*400+97)*24*Ut;function v0(r,a){return(r%a+a)%a}function t1(r,a,s){return r<100&&r>=0?new Date(r+400,a,s)-n1:new Date(r,a,s).valueOf()}function u1(r,a,s){return r<100&&r>=0?Date.UTC(r+400,a,s)-n1:Date.UTC(r,a,s)}function io(r){var a,s;if(r=Ie(r),r===void 0||r==="millisecond"||!this.isValid())return this;switch(s=this._isUTC?u1:t1,r){case"year":a=s(this.year(),0,1);break;case"quarter":a=s(this.year(),this.month()-this.month()%3,1);break;case"month":a=s(this.year(),this.month(),1);break;case"week":a=s(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":a=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":a=s(this.year(),this.month(),this.date());break;case"hour":a=this._d.valueOf(),a-=v0(a+(this._isUTC?0:this.utcOffset()*m0),Ut);break;case"minute":a=this._d.valueOf(),a-=v0(a,m0);break;case"second":a=this._d.valueOf(),a-=v0(a,Bt);break}return this._d.setTime(a),e.updateOffset(this,!0),this}function ao(r){var a,s;if(r=Ie(r),r===void 0||r==="millisecond"||!this.isValid())return this;switch(s=this._isUTC?u1:t1,r){case"year":a=s(this.year()+1,0,1)-1;break;case"quarter":a=s(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":a=s(this.year(),this.month()+1,1)-1;break;case"week":a=s(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":a=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":a=s(this.year(),this.month(),this.date()+1)-1;break;case"hour":a=this._d.valueOf(),a+=Ut-v0(a+(this._isUTC?0:this.utcOffset()*m0),Ut)-1;break;case"minute":a=this._d.valueOf(),a+=m0-v0(a,m0)-1;break;case"second":a=this._d.valueOf(),a+=Bt-v0(a,Bt)-1;break}return this._d.setTime(a),e.updateOffset(this,!0),this}function oo(){return this._d.valueOf()-(this._offset||0)*6e4}function so(){return Math.floor(this.valueOf()/1e3)}function lo(){return new Date(this.valueOf())}function co(){var r=this;return[r.year(),r.month(),r.date(),r.hour(),r.minute(),r.second(),r.millisecond()]}function fo(){var r=this;return{years:r.year(),months:r.month(),date:r.date(),hours:r.hours(),minutes:r.minutes(),seconds:r.seconds(),milliseconds:r.milliseconds()}}function po(){return this.isValid()?this.toISOString():null}function go(){return P(this)}function ho(){return E({},x(this))}function bo(){return x(this).overflow}function mo(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}G("N",0,0,"eraAbbr"),G("NN",0,0,"eraAbbr"),G("NNN",0,0,"eraAbbr"),G("NNNN",0,0,"eraName"),G("NNNNN",0,0,"eraNarrow"),G("y",["y",1],"yo","eraYear"),G("y",["yy",2],0,"eraYear"),G("y",["yyy",3],0,"eraYear"),G("y",["yyyy",4],0,"eraYear"),$("N",ar),$("NN",ar),$("NNN",ar),$("NNNN",Mo),$("NNNNN",zo),le(["N","NN","NNN","NNNN","NNNNN"],function(r,a,s,l){var g=s._locale.erasParse(r,l,s._strict);g?x(s).era=g:x(s).invalidEra=r}),$("y",pn),$("yy",pn),$("yyy",pn),$("yyyy",pn),$("yo",Do),le(["y","yy","yyy","yyyy"],Ce),le(["yo"],function(r,a,s,l){var g;s._locale._eraYearOrdinalRegex&&(g=r.match(s._locale._eraYearOrdinalRegex)),s._locale.eraYearOrdinalParse?a[Ce]=s._locale.eraYearOrdinalParse(r,g):a[Ce]=parseInt(r,10)});function vo(r,a){var s,l,g,F=this._eras||Ze("en")._eras;for(s=0,l=F.length;s<l;++s)switch(typeof F[s].since==="string"&&(g=e(F[s].since).startOf("day"),F[s].since=g.valueOf()),typeof F[s].until){case"undefined":F[s].until=1/0;break;case"string":g=e(F[s].until).startOf("day").valueOf(),F[s].until=g.valueOf();break}return F}function xo(r,a,s){var l,g,F=this.eras(),T,W,Q;for(r=r.toUpperCase(),l=0,g=F.length;l<g;++l)if(T=F[l].name.toUpperCase(),W=F[l].abbr.toUpperCase(),Q=F[l].narrow.toUpperCase(),s)switch(a){case"N":case"NN":case"NNN":if(W===r)return F[l];break;case"NNNN":if(T===r)return F[l];break;case"NNNNN":if(Q===r)return F[l];break}else if([T,W,Q].indexOf(r)>=0)return F[l]}function ko(r,a){var s=r.since<=r.until?1:-1;return a===void 0?e(r.since).year():e(r.since).year()+(a-r.offset)*s}function yo(){var r,a,s,l=this.localeData().eras();for(r=0,a=l.length;r<a;++r)if(s=this.clone().startOf("day").valueOf(),l[r].since<=s&&s<=l[r].until||l[r].until<=s&&s<=l[r].since)return l[r].name;return""}function Fo(){var r,a,s,l=this.localeData().eras();for(r=0,a=l.length;r<a;++r)if(s=this.clone().startOf("day").valueOf(),l[r].since<=s&&s<=l[r].until||l[r].until<=s&&s<=l[r].since)return l[r].narrow;return""}function wo(){var r,a,s,l=this.localeData().eras();for(r=0,a=l.length;r<a;++r)if(s=this.clone().startOf("day").valueOf(),l[r].since<=s&&s<=l[r].until||l[r].until<=s&&s<=l[r].since)return l[r].abbr;return""}function _o(){var r,a,s,l,g=this.localeData().eras();for(r=0,a=g.length;r<a;++r)if(s=g[r].since<=g[r].until?1:-1,l=this.clone().startOf("day").valueOf(),g[r].since<=l&&l<=g[r].until||g[r].until<=l&&l<=g[r].since)return(this.year()-e(g[r].since).year())*s+g[r].offset;return this.year()}function Co(r){return u(this,"_erasNameRegex")||or.call(this),r?this._erasNameRegex:this._erasRegex}function Eo(r){return u(this,"_erasAbbrRegex")||or.call(this),r?this._erasAbbrRegex:this._erasRegex}function qo(r){return u(this,"_erasNarrowRegex")||or.call(this),r?this._erasNarrowRegex:this._erasRegex}function ar(r,a){return a.erasAbbrRegex(r)}function Mo(r,a){return a.erasNameRegex(r)}function zo(r,a){return a.erasNarrowRegex(r)}function Do(r,a){return a._eraYearOrdinalRegex||pn}function or(){var r=[],a=[],s=[],l=[],g,F,T,W,Q,ie=this.eras();for(g=0,F=ie.length;g<F;++g)T=je(ie[g].name),W=je(ie[g].abbr),Q=je(ie[g].narrow),a.push(T),r.push(W),s.push(Q),l.push(T),l.push(W),l.push(Q);this._erasRegex=new RegExp("^("+l.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+a.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+s.join("|")+")","i")}G(0,["gg",2],0,function(){return this.weekYear()%100}),G(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Ht(r,a){G(0,[r,r.length],0,a)}Ht("gggg","weekYear"),Ht("ggggg","weekYear"),Ht("GGGG","isoWeekYear"),Ht("GGGGG","isoWeekYear"),$("G",Cn),$("g",Cn),$("GG",ge,ce),$("gg",ge,ce),$("GGGG",Bn,c0),$("gggg",Bn,c0),$("GGGGG",_n,re),$("ggggg",_n,re),Mn(["gggg","ggggg","GGGG","GGGGG"],function(r,a,s,l){a[l.substr(0,2)]=ne(r)}),Mn(["gg","GG"],function(r,a,s,l){a[l]=e.parseTwoDigitYear(r)});function So(r){return r1.call(this,r,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Ao(r){return r1.call(this,r,this.isoWeek(),this.isoWeekday(),1,4)}function To(){return ve(this.year(),1,4)}function Io(){return ve(this.isoWeekYear(),1,4)}function Ro(){var r=this.localeData()._week;return ve(this.year(),r.dow,r.doy)}function Oo(){var r=this.localeData()._week;return ve(this.weekYear(),r.dow,r.doy)}function r1(r,a,s,l,g){var F;return r==null?zn(this,l,g).year:(F=ve(r,l,g),a>F&&(a=F),Po.call(this,r,a,s,l,g))}function Po(r,a,s,l,g){var F=bn(r,a,s,l,g),T=Gn(F.year,0,F.dayOfYear);return this.year(T.getUTCFullYear()),this.month(T.getUTCMonth()),this.date(T.getUTCDate()),this}G("Q",0,"Qo","quarter"),$("Q",D0),le("Q",function(r,a){a[$e]=(ne(r)-1)*3});function Lo(r){return r==null?Math.ceil((this.month()+1)/3):this.month((r-1)*3+this.month()%3)}G("D",["DD",2],"Do","date"),$("D",ge,En),$("DD",ge,ce),$("Do",function(r,a){return r?a._dayOfMonthOrdinalParse||a._ordinalParse:a._dayOfMonthOrdinalParseLenient}),le(["D","DD"],Ye),le("Do",function(r,a){a[Ye]=ne(r.match(ge)[0])});var i1=gn("Date",!0);G("DDD",["DDDD",3],"DDDo","dayOfYear"),$("DDD",tn),$("DDDD",pt),le(["DDD","DDDD"],function(r,a,s){s._dayOfYear=ne(r)});function No(r){var a=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return r==null?a:this.add(r-a,"d")}G("m",["mm",2],0,"minute"),$("m",ge,A0),$("mm",ge,ce),le(["m","mm"],ze);var jo=gn("Minutes",!1);G("s",["ss",2],0,"second"),$("s",ge,A0),$("ss",ge,ce),le(["s","ss"],Pe);var Yo=gn("Seconds",!1);G("S",0,0,function(){return~~(this.millisecond()/100)}),G(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),G(0,["SSS",3],0,"millisecond"),G(0,["SSSS",4],0,function(){return this.millisecond()*10}),G(0,["SSSSS",5],0,function(){return this.millisecond()*100}),G(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),G(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),G(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),G(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),$("S",tn,D0),$("SS",tn,ce),$("SSS",tn,pt);var Rn,a1;for(Rn="SSSS";Rn.length<=9;Rn+="S")$(Rn,pn);function Bo(r,a){a[un]=ne(("0."+r)*1e3)}for(Rn="S";Rn.length<=9;Rn+="S")le(Rn,Bo);a1=gn("Milliseconds",!1),G("z",0,0,"zoneAbbr"),G("zz",0,0,"zoneName");function Uo(){return this._isUTC?"UTC":""}function Ho(){return this._isUTC?"Coordinated Universal Time":""}var j=A.prototype;j.add=Ra,j.calendar=Ba,j.clone=Ua,j.diff=Xa,j.endOf=ao,j.format=eo,j.from=no,j.fromNow=to,j.to=uo,j.toNow=ro,j.get=yu,j.invalidAt=bo,j.isAfter=Ha,j.isBefore=$a,j.isBetween=Wa,j.isSame=Va,j.isSameOrAfter=Ga,j.isSameOrBefore=Za,j.isValid=go,j.lang=Kr,j.locale=Qr,j.localeData=e1,j.max=K,j.min=H,j.parsingFlags=ho,j.set=mt,j.startOf=io,j.subtract=Oa,j.toArray=co,j.toObject=fo,j.toDate=lo,j.toISOString=Qa,j.inspect=Ka,typeof Symbol<"u"&&Symbol.for!=null&&(j[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),j.toJSON=po,j.toString=Ja,j.unix=so,j.valueOf=oo,j.creationData=mo,j.eraName=yo,j.eraNarrow=Fo,j.eraAbbr=wo,j.eraYear=_o,j.year=g0,j.isLeapYear=$n,j.weekYear=So,j.isoWeekYear=Ao,j.quarter=j.quarters=Lo,j.month=xt,j.daysInMonth=Mu,j.week=j.weeks=Iu,j.isoWeek=j.isoWeeks=Ru,j.weeksInYear=Ro,j.weeksInWeekYear=Oo,j.isoWeeksInYear=To,j.isoWeeksInISOWeekYear=Io,j.date=i1,j.day=j.days=ju,j.weekday=L0,j.isoWeekday=Yu,j.dayOfYear=No,j.hour=j.hours=Bu,j.minute=j.minutes=jo,j.second=j.seconds=Yo,j.millisecond=j.milliseconds=a1,j.utcOffset=Fa,j.utc=_a,j.local=Ca,j.parseZone=Ea,j.hasAlignedHourOffset=qa,j.isDST=Ma,j.isLocal=Da,j.isUtcOffset=Sa,j.isUtc=Vr,j.isUTC=Vr,j.zoneAbbr=Uo,j.zoneName=Ho,j.dates=J("dates accessor is deprecated. Use date instead.",i1),j.months=J("months accessor is deprecated. Use month instead",xt),j.years=J("years accessor is deprecated. Use year instead",g0),j.zone=J("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",wa),j.isDSTShifted=J("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",za);function $o(r){return S(r*1e3)}function Wo(){return S.apply(null,arguments).parseZone()}function o1(r){return r}var de=L.prototype;de.calendar=ot,de.longDateFormat=M0,de.invalidDate=hu,de.ordinal=ct,de.preparse=o1,de.postformat=o1,de.relativeTime=s0,de.pastFuture=bu,de.set=Y,de.eras=vo,de.erasParse=xo,de.erasConvertYear=ko,de.erasAbbrRegex=Eo,de.erasNameRegex=Co,de.erasNarrowRegex=qo,de.months=Cu,de.monthsShort=Eu,de.monthsParse=qu,de.monthsRegex=Du,de.monthsShortRegex=zu,de.week=Dn,de.firstDayOfYear=yt,de.firstDayOfWeek=Tu,de.weekdays=P0,de.weekdaysMin=qt,de.weekdaysShort=Et,de.weekdaysParse=zt,de.weekdaysRegex=Ve,de.weekdaysShortRegex=mn,de.weekdaysMinRegex=Dt,de.isPM=At,de.meridiem=j0;function $t(r,a,s,l){var g=Ze(),F=M().set(l,a);return g[s](F,r)}function s1(r,a,s){if(h(r)&&(a=r,r=void 0),r=r||"",a!=null)return $t(r,a,s,"month");var l,g=[];for(l=0;l<12;l++)g[l]=$t(r,l,s,"month");return g}function sr(r,a,s,l){typeof r=="boolean"?(h(a)&&(s=a,a=void 0),a=a||""):(a=r,s=a,r=!1,h(a)&&(s=a,a=void 0),a=a||"");var g=Ze(),F=r?g._week.dow:0,T,W=[];if(s!=null)return $t(a,(s+F)%7,l,"day");for(T=0;T<7;T++)W[T]=$t(a,(T+F)%7,l,"day");return W}function Vo(r,a){return s1(r,a,"months")}function Go(r,a){return s1(r,a,"monthsShort")}function Zo(r,a,s){return sr(r,a,s,"weekdays")}function Xo(r,a,s){return sr(r,a,s,"weekdaysShort")}function Jo(r,a,s){return sr(r,a,s,"weekdaysMin")}rn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(r){var a=r%10,s=ne(r%100/10)===1?"th":a===1?"st":a===2?"nd":a===3?"rd":"th";return r+s}}),e.lang=J("moment.lang is deprecated. Use moment.locale instead.",rn),e.langData=J("moment.langData is deprecated. Use moment.localeData instead.",Ze);var xn=Math.abs;function Qo(){var r=this._data;return this._milliseconds=xn(this._milliseconds),this._days=xn(this._days),this._months=xn(this._months),r.milliseconds=xn(r.milliseconds),r.seconds=xn(r.seconds),r.minutes=xn(r.minutes),r.hours=xn(r.hours),r.months=xn(r.months),r.years=xn(r.years),this}function l1(r,a,s,l){var g=Je(a,s);return r._milliseconds+=l*g._milliseconds,r._days+=l*g._days,r._months+=l*g._months,r._bubble()}function Ko(r,a){return l1(this,r,a,1)}function es(r,a){return l1(this,r,a,-1)}function c1(r){return r<0?Math.floor(r):Math.ceil(r)}function ns(){var r=this._milliseconds,a=this._days,s=this._months,l=this._data,g,F,T,W,Q;return r>=0&&a>=0&&s>=0||r<=0&&a<=0&&s<=0||(r+=c1(lr(s)+a)*864e5,a=0,s=0),l.milliseconds=r%1e3,g=Ae(r/1e3),l.seconds=g%60,F=Ae(g/60),l.minutes=F%60,T=Ae(F/60),l.hours=T%24,a+=Ae(T/24),Q=Ae(d1(a)),s+=Q,a-=c1(lr(Q)),W=Ae(s/12),s%=12,l.days=a,l.months=s,l.years=W,this}function d1(r){return r*4800/146097}function lr(r){return r*146097/4800}function ts(r){if(!this.isValid())return NaN;var a,s,l=this._milliseconds;if(r=Ie(r),r==="month"||r==="quarter"||r==="year")switch(a=this._days+l/864e5,s=this._months+d1(a),r){case"month":return s;case"quarter":return s/3;case"year":return s/12}else switch(a=this._days+Math.round(lr(this._months)),r){case"week":return a/7+l/6048e5;case"day":return a+l/864e5;case"hour":return a*24+l/36e5;case"minute":return a*1440+l/6e4;case"second":return a*86400+l/1e3;case"millisecond":return Math.floor(a*864e5)+l;default:throw new Error("Unknown unit "+r)}}function kn(r){return function(){return this.as(r)}}var f1=kn("ms"),us=kn("s"),rs=kn("m"),is=kn("h"),as=kn("d"),os=kn("w"),ss=kn("M"),ls=kn("Q"),cs=kn("y"),ds=f1;function fs(){return Je(this)}function ps(r){return r=Ie(r),this.isValid()?this[r+"s"]():NaN}function t0(r){return function(){return this.isValid()?this._data[r]:NaN}}var gs=t0("milliseconds"),hs=t0("seconds"),bs=t0("minutes"),ms=t0("hours"),vs=t0("days"),xs=t0("months"),ks=t0("years");function ys(){return Ae(this.days()/7)}var yn=Math.round,x0={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Fs(r,a,s,l,g){return g.relativeTime(a||1,!!s,r,l)}function ws(r,a,s,l){var g=Je(r).abs(),F=yn(g.as("s")),T=yn(g.as("m")),W=yn(g.as("h")),Q=yn(g.as("d")),ie=yn(g.as("M")),Te=yn(g.as("w")),Fn=yn(g.as("y")),On=F<=s.ss&&["s",F]||F<s.s&&["ss",F]||T<=1&&["m"]||T<s.m&&["mm",T]||W<=1&&["h"]||W<s.h&&["hh",W]||Q<=1&&["d"]||Q<s.d&&["dd",Q];return s.w!=null&&(On=On||Te<=1&&["w"]||Te<s.w&&["ww",Te]),On=On||ie<=1&&["M"]||ie<s.M&&["MM",ie]||Fn<=1&&["y"]||["yy",Fn],On[2]=a,On[3]=+r>0,On[4]=l,Fs.apply(null,On)}function _s(r){return r===void 0?yn:typeof r=="function"?(yn=r,!0):!1}function Cs(r,a){return x0[r]===void 0?!1:a===void 0?x0[r]:(x0[r]=a,r==="s"&&(x0.ss=a-1),!0)}function Es(r,a){if(!this.isValid())return this.localeData().invalidDate();var s=!1,l=x0,g,F;return typeof r=="object"&&(a=r,r=!1),typeof r=="boolean"&&(s=r),typeof a=="object"&&(l=Object.assign({},x0,a),a.s!=null&&a.ss==null&&(l.ss=a.s-1)),g=this.localeData(),F=ws(this,!s,l,g),s&&(F=g.pastFuture(+this,F)),g.postformat(F)}var cr=Math.abs;function k0(r){return(r>0)-(r<0)||+r}function Wt(){if(!this.isValid())return this.localeData().invalidDate();var r=cr(this._milliseconds)/1e3,a=cr(this._days),s=cr(this._months),l,g,F,T,W=this.asSeconds(),Q,ie,Te,Fn;return W?(l=Ae(r/60),g=Ae(l/60),r%=60,l%=60,F=Ae(s/12),s%=12,T=r?r.toFixed(3).replace(/\.?0+$/,""):"",Q=W<0?"-":"",ie=k0(this._months)!==k0(W)?"-":"",Te=k0(this._days)!==k0(W)?"-":"",Fn=k0(this._milliseconds)!==k0(W)?"-":"",Q+"P"+(F?ie+F+"Y":"")+(s?ie+s+"M":"")+(a?Te+a+"D":"")+(g||l||r?"T":"")+(g?Fn+g+"H":"")+(l?Fn+l+"M":"")+(r?Fn+T+"S":"")):"P0D"}var ae=Nt.prototype;ae.isValid=va,ae.abs=Qo,ae.add=Ko,ae.subtract=es,ae.as=ts,ae.asMilliseconds=f1,ae.asSeconds=us,ae.asMinutes=rs,ae.asHours=is,ae.asDays=as,ae.asWeeks=os,ae.asMonths=ss,ae.asQuarters=ls,ae.asYears=cs,ae.valueOf=ds,ae._bubble=ns,ae.clone=fs,ae.get=ps,ae.milliseconds=gs,ae.seconds=hs,ae.minutes=bs,ae.hours=ms,ae.days=vs,ae.weeks=ys,ae.months=xs,ae.years=ks,ae.humanize=Es,ae.toISOString=Wt,ae.toString=Wt,ae.toJSON=Wt,ae.locale=Qr,ae.localeData=e1,ae.toIsoString=J("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Wt),ae.lang=Kr,G("X",0,0,"unix"),G("x",0,0,"valueOf"),$("x",Cn),$("X",bt),le("X",function(r,a,s){s._d=new Date(parseFloat(r)*1e3)}),le("x",function(r,a,s){s._d=new Date(ne(r))});return e.version="2.30.1",o(S),e.fn=j,e.min=ke,e.max=Se,e.now=Ee,e.utc=M,e.unix=$o,e.months=Vo,e.isDate=v,e.locale=rn,e.invalid=U,e.duration=Je,e.isMoment=q,e.weekdays=Zo,e.parseZone=Wo,e.localeData=Ze,e.isDuration=jt,e.monthsShort=Go,e.weekdaysMin=Jo,e.defineLocale=B0,e.updateLocale=$u,e.locales=Wu,e.weekdaysShort=Xo,e.normalizeUnits=Ie,e.relativeTimeRounding=_s,e.relativeTimeThreshold=Cs,e.calendarFormat=Ya,e.prototype=j,e.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},e}))});var G1=pe((j4,V1)=>{V();var Vs=X0(),W1=Xt();function Gs(n,e){var o="YYYY-MM-DD";return e=e||Vs.date_format,W1(n,o).format(e)}function Zs(n){var e,o=n.months(),i=n.years(),t=o>1?"months":"month",u=i>1?"years":"year";return o&&i?i+" "+u+" "+o+" "+t:o?o+" "+t:i?i+" "+u:(e=n.days(),e>1?e+" days":e+" day")}function Xs(n,e,o){var i;return n=new Date(n),e=new Date(e),i=W1.duration(e.getTime()-n.getTime()),o?Zs(i):i}V1.exports={getFormattedDate:Gs,getDuration:Xs}});var X1=pe((U4,Z1)=>{V();var B4=X0(),Js=Z0();function Qs(n){var e=n.languages;return Js.find(e,function(o){return o.fluency==="Native speaker"})}Z1.exports={getNativeLanguage:Qs}});var K1=pe(($4,Q1)=>{V();var Ks=X0(),xr=$1(),J1=G1(),e2=X1(),n2=Z0();function t2(n){n2.extend(Ks,n||{})}Q1.exports={setConfig:t2,getUrlForPicture:xr.getUrlForPicture,getProfile:xr.getProfile,getUrlForProfile:xr.getUrlForProfile,getFormattedDate:J1.getFormattedDate,getDuration:J1.getDuration,getNativeLanguage:e2.getNativeLanguage}});var oi=pe(K0=>{"use strict";V();var ei={};function u2(n){let e=ei[n];if(e)return e;e=ei[n]=[];for(let o=0;o<128;o++){let i=String.fromCharCode(o);e.push(i)}for(let o=0;o<n.length;o++){let i=n.charCodeAt(o);e[i]="%"+("0"+i.toString(16).toUpperCase()).slice(-2)}return e}function Qt(n,e){typeof e!="string"&&(e=Qt.defaultChars);let o=u2(e);return n.replace(/(%[a-f0-9]{2})+/gi,function(i){let t="";for(let u=0,f=i.length;u<f;u+=3){let d=parseInt(i.slice(u+1,u+3),16);if(d<128){t+=o[d];continue}if((d&224)===192&&u+3<f){let h=parseInt(i.slice(u+4,u+6),16);if((h&192)===128){let v=d<<6&1984|h&63;v<128?t+="\uFFFD\uFFFD":t+=String.fromCharCode(v),u+=3;continue}}if((d&240)===224&&u+6<f){let h=parseInt(i.slice(u+4,u+6),16),v=parseInt(i.slice(u+7,u+9),16);if((h&192)===128&&(v&192)===128){let D=d<<12&61440|h<<6&4032|v&63;D<2048||D>=55296&&D<=57343?t+="\uFFFD\uFFFD\uFFFD":t+=String.fromCharCode(D),u+=6;continue}}if((d&248)===240&&u+9<f){let h=parseInt(i.slice(u+4,u+6),16),v=parseInt(i.slice(u+7,u+9),16),D=parseInt(i.slice(u+10,u+12),16);if((h&192)===128&&(v&192)===128&&(D&192)===128){let E=d<<18&1835008|h<<12&258048|v<<6&4032|D&63;E<65536||E>1114111?t+="\uFFFD\uFFFD\uFFFD\uFFFD":(E-=65536,t+=String.fromCharCode(55296+(E>>10),56320+(E&1023))),u+=9;continue}}t+="\uFFFD"}return t})}Qt.defaultChars=";/?:@&=+$,#";Qt.componentChars="";var ni={};function r2(n){let e=ni[n];if(e)return e;e=ni[n]=[];for(let o=0;o<128;o++){let i=String.fromCharCode(o);/^[0-9a-z]$/i.test(i)?e.push(i):e.push("%"+("0"+o.toString(16).toUpperCase()).slice(-2))}for(let o=0;o<n.length;o++)e[n.charCodeAt(o)]=n[o];return e}function Kt(n,e,o){typeof e!="string"&&(o=e,e=Kt.defaultChars),typeof o>"u"&&(o=!0);let i=r2(e),t="";for(let u=0,f=n.length;u<f;u++){let d=n.charCodeAt(u);if(o&&d===37&&u+2<f&&/^[0-9a-f]{2}$/i.test(n.slice(u+1,u+3))){t+=n.slice(u,u+3),u+=2;continue}if(d<128){t+=i[d];continue}if(d>=55296&&d<=57343){if(d>=55296&&d<=56319&&u+1<f){let h=n.charCodeAt(u+1);if(h>=56320&&h<=57343){t+=encodeURIComponent(n[u]+n[u+1]),u++;continue}}t+="%EF%BF%BD";continue}t+=encodeURIComponent(n[u])}return t}Kt.defaultChars=";/?:@&=+$,-_.!~*'()#";Kt.componentChars="-_.!~*'()";function i2(n){let e="";return e+=n.protocol||"",e+=n.slashes?"//":"",e+=n.auth?n.auth+"@":"",n.hostname&&n.hostname.indexOf(":")!==-1?e+="["+n.hostname+"]":e+=n.hostname||"",e+=n.port?":"+n.port:"",e+=n.pathname||"",e+=n.search||"",e+=n.hash||"",e}function Jt(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var a2=/^([a-z0-9.+-]+:)/i,o2=/:[0-9]*$/,s2=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l2=["<",">",'"',"`"," ","\r",`
`,"	"],c2=["{","}","|","\\","^","`"].concat(l2),d2=["'"].concat(c2),ti=["%","/","?",";","#"].concat(d2),ui=["/","?","#"],f2=255,ri=/^[+a-z0-9A-Z_-]{0,63}$/,p2=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,ii={javascript:!0,"javascript:":!0},ai={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function g2(n,e){if(n&&n instanceof Jt)return n;let o=new Jt;return o.parse(n,e),o}Jt.prototype.parse=function(n,e){let o,i,t,u=n;if(u=u.trim(),!e&&n.split("#").length===1){let v=s2.exec(u);if(v)return this.pathname=v[1],v[2]&&(this.search=v[2]),this}let f=a2.exec(u);if(f&&(f=f[0],o=f.toLowerCase(),this.protocol=f,u=u.substr(f.length)),(e||f||u.match(/^\/\/[^@\/]+@[^@\/]+/))&&(t=u.substr(0,2)==="//",t&&!(f&&ii[f])&&(u=u.substr(2),this.slashes=!0)),!ii[f]&&(t||f&&!ai[f])){let v=-1;for(let x=0;x<ui.length;x++)i=u.indexOf(ui[x]),i!==-1&&(v===-1||i<v)&&(v=i);let D,E;v===-1?E=u.lastIndexOf("@"):E=u.lastIndexOf("@",v),E!==-1&&(D=u.slice(0,E),u=u.slice(E+1),this.auth=D),v=-1;for(let x=0;x<ti.length;x++)i=u.indexOf(ti[x]),i!==-1&&(v===-1||i<v)&&(v=i);v===-1&&(v=u.length),u[v-1]===":"&&v--;let M=u.slice(0,v);u=u.slice(v),this.parseHost(M),this.hostname=this.hostname||"";let w=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!w){let x=this.hostname.split(/\./);for(let m=0,P=x.length;m<P;m++){let U=x[m];if(U&&!U.match(ri)){let R="";for(let I=0,k=U.length;I<k;I++)U.charCodeAt(I)>127?R+="x":R+=U[I];if(!R.match(ri)){let I=x.slice(0,m),k=x.slice(m+1),A=U.match(p2);A&&(I.push(A[1]),k.unshift(A[2])),k.length&&(u=k.join(".")+u),this.hostname=I.join(".");break}}}}this.hostname.length>f2&&(this.hostname=""),w&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let d=u.indexOf("#");d!==-1&&(this.hash=u.substr(d),u=u.slice(0,d));let h=u.indexOf("?");return h!==-1&&(this.search=u.substr(h),u=u.slice(0,h)),u&&(this.pathname=u),ai[o]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Jt.prototype.parseHost=function(n){let e=o2.exec(n);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),n=n.substr(0,n.length-e.length)),n&&(this.hostname=n)};K0.decode=Qt;K0.encode=Kt;K0.format=i2;K0.parse=g2});var kr=pe(u0=>{"use strict";V();var h2=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,b2=/[\0-\x1F\x7F-\x9F]/,m2=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,v2=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,x2=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,k2=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;u0.Any=h2;u0.Cc=b2;u0.Cf=m2;u0.P=v2;u0.S=x2;u0.Z=k2});var si=pe(yr=>{"use strict";V();Object.defineProperty(yr,"__esModule",{value:!0});yr.default=new Uint16Array('\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(function(n){return n.charCodeAt(0)}))});var li=pe(Fr=>{"use strict";V();Object.defineProperty(Fr,"__esModule",{value:!0});Fr.default=new Uint16Array("\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function(n){return n.charCodeAt(0)}))});var _r=pe(Pn=>{"use strict";V();var wr;Object.defineProperty(Pn,"__esModule",{value:!0});Pn.replaceCodePoint=Pn.fromCodePoint=void 0;var y2=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);Pn.fromCodePoint=(wr=String.fromCodePoint)!==null&&wr!==void 0?wr:function(n){var e="";return n>65535&&(n-=65536,e+=String.fromCharCode(n>>>10&1023|55296),n=56320|n&1023),e+=String.fromCharCode(n),e};function ci(n){var e;return n>=55296&&n<=57343||n>1114111?65533:(e=y2.get(n))!==null&&e!==void 0?e:n}Pn.replaceCodePoint=ci;function F2(n){return(0,Pn.fromCodePoint)(ci(n))}Pn.default=F2});var Mr=pe(ue=>{"use strict";V();var w2=ue&&ue.__createBinding||(Object.create?(function(n,e,o,i){i===void 0&&(i=o);var t=Object.getOwnPropertyDescriptor(e,o);(!t||("get"in t?!e.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return e[o]}}),Object.defineProperty(n,i,t)}):(function(n,e,o,i){i===void 0&&(i=o),n[i]=e[o]})),_2=ue&&ue.__setModuleDefault||(Object.create?(function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}):function(n,e){n.default=e}),C2=ue&&ue.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var o in n)o!=="default"&&Object.prototype.hasOwnProperty.call(n,o)&&w2(e,n,o);return _2(e,n),e},di=ue&&ue.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(ue,"__esModule",{value:!0});ue.decodeXML=ue.decodeHTMLStrict=ue.decodeHTMLAttribute=ue.decodeHTML=ue.determineBranch=ue.EntityDecoder=ue.DecodingMode=ue.BinTrieFlags=ue.fromCodePoint=ue.replaceCodePoint=ue.decodeCodePoint=ue.xmlDecodeTree=ue.htmlDecodeTree=void 0;var fi=di(si());ue.htmlDecodeTree=fi.default;var pi=di(li());ue.xmlDecodeTree=pi.default;var Er=C2(_r());ue.decodeCodePoint=Er.default;var gi=_r();Object.defineProperty(ue,"replaceCodePoint",{enumerable:!0,get:function(){return gi.replaceCodePoint}});Object.defineProperty(ue,"fromCodePoint",{enumerable:!0,get:function(){return gi.fromCodePoint}});var Me;(function(n){n[n.NUM=35]="NUM",n[n.SEMI=59]="SEMI",n[n.EQUALS=61]="EQUALS",n[n.ZERO=48]="ZERO",n[n.NINE=57]="NINE",n[n.LOWER_A=97]="LOWER_A",n[n.LOWER_F=102]="LOWER_F",n[n.LOWER_X=120]="LOWER_X",n[n.LOWER_Z=122]="LOWER_Z",n[n.UPPER_A=65]="UPPER_A",n[n.UPPER_F=70]="UPPER_F",n[n.UPPER_Z=90]="UPPER_Z"})(Me||(Me={}));var E2=32,r0;(function(n){n[n.VALUE_LENGTH=49152]="VALUE_LENGTH",n[n.BRANCH_LENGTH=16256]="BRANCH_LENGTH",n[n.JUMP_TABLE=127]="JUMP_TABLE"})(r0=ue.BinTrieFlags||(ue.BinTrieFlags={}));function Cr(n){return n>=Me.ZERO&&n<=Me.NINE}function q2(n){return n>=Me.UPPER_A&&n<=Me.UPPER_F||n>=Me.LOWER_A&&n<=Me.LOWER_F}function M2(n){return n>=Me.UPPER_A&&n<=Me.UPPER_Z||n>=Me.LOWER_A&&n<=Me.LOWER_Z||Cr(n)}function z2(n){return n===Me.EQUALS||M2(n)}var qe;(function(n){n[n.EntityStart=0]="EntityStart",n[n.NumericStart=1]="NumericStart",n[n.NumericDecimal=2]="NumericDecimal",n[n.NumericHex=3]="NumericHex",n[n.NamedEntity=4]="NamedEntity"})(qe||(qe={}));var an;(function(n){n[n.Legacy=0]="Legacy",n[n.Strict=1]="Strict",n[n.Attribute=2]="Attribute"})(an=ue.DecodingMode||(ue.DecodingMode={}));var hi=(function(){function n(e,o,i){this.decodeTree=e,this.emitCodePoint=o,this.errors=i,this.state=qe.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=an.Strict}return n.prototype.startEntity=function(e){this.decodeMode=e,this.state=qe.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1},n.prototype.write=function(e,o){switch(this.state){case qe.EntityStart:return e.charCodeAt(o)===Me.NUM?(this.state=qe.NumericStart,this.consumed+=1,this.stateNumericStart(e,o+1)):(this.state=qe.NamedEntity,this.stateNamedEntity(e,o));case qe.NumericStart:return this.stateNumericStart(e,o);case qe.NumericDecimal:return this.stateNumericDecimal(e,o);case qe.NumericHex:return this.stateNumericHex(e,o);case qe.NamedEntity:return this.stateNamedEntity(e,o)}},n.prototype.stateNumericStart=function(e,o){return o>=e.length?-1:(e.charCodeAt(o)|E2)===Me.LOWER_X?(this.state=qe.NumericHex,this.consumed+=1,this.stateNumericHex(e,o+1)):(this.state=qe.NumericDecimal,this.stateNumericDecimal(e,o))},n.prototype.addToNumericResult=function(e,o,i,t){if(o!==i){var u=i-o;this.result=this.result*Math.pow(t,u)+parseInt(e.substr(o,u),t),this.consumed+=u}},n.prototype.stateNumericHex=function(e,o){for(var i=o;o<e.length;){var t=e.charCodeAt(o);if(Cr(t)||q2(t))o+=1;else return this.addToNumericResult(e,i,o,16),this.emitNumericEntity(t,3)}return this.addToNumericResult(e,i,o,16),-1},n.prototype.stateNumericDecimal=function(e,o){for(var i=o;o<e.length;){var t=e.charCodeAt(o);if(Cr(t))o+=1;else return this.addToNumericResult(e,i,o,10),this.emitNumericEntity(t,2)}return this.addToNumericResult(e,i,o,10),-1},n.prototype.emitNumericEntity=function(e,o){var i;if(this.consumed<=o)return(i=this.errors)===null||i===void 0||i.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===Me.SEMI)this.consumed+=1;else if(this.decodeMode===an.Strict)return 0;return this.emitCodePoint((0,Er.replaceCodePoint)(this.result),this.consumed),this.errors&&(e!==Me.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed},n.prototype.stateNamedEntity=function(e,o){for(var i=this.decodeTree,t=i[this.treeIndex],u=(t&r0.VALUE_LENGTH)>>14;o<e.length;o++,this.excess++){var f=e.charCodeAt(o);if(this.treeIndex=mi(i,t,this.treeIndex+Math.max(1,u),f),this.treeIndex<0)return this.result===0||this.decodeMode===an.Attribute&&(u===0||z2(f))?0:this.emitNotTerminatedNamedEntity();if(t=i[this.treeIndex],u=(t&r0.VALUE_LENGTH)>>14,u!==0){if(f===Me.SEMI)return this.emitNamedEntityData(this.treeIndex,u,this.consumed+this.excess);this.decodeMode!==an.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1},n.prototype.emitNotTerminatedNamedEntity=function(){var e,o=this,i=o.result,t=o.decodeTree,u=(t[i]&r0.VALUE_LENGTH)>>14;return this.emitNamedEntityData(i,u,this.consumed),(e=this.errors)===null||e===void 0||e.missingSemicolonAfterCharacterReference(),this.consumed},n.prototype.emitNamedEntityData=function(e,o,i){var t=this.decodeTree;return this.emitCodePoint(o===1?t[e]&~r0.VALUE_LENGTH:t[e+1],i),o===3&&this.emitCodePoint(t[e+2],i),i},n.prototype.end=function(){var e;switch(this.state){case qe.NamedEntity:return this.result!==0&&(this.decodeMode!==an.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case qe.NumericDecimal:return this.emitNumericEntity(0,2);case qe.NumericHex:return this.emitNumericEntity(0,3);case qe.NumericStart:return(e=this.errors)===null||e===void 0||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case qe.EntityStart:return 0}},n})();ue.EntityDecoder=hi;function bi(n){var e="",o=new hi(n,function(i){return e+=(0,Er.fromCodePoint)(i)});return function(t,u){for(var f=0,d=0;(d=t.indexOf("&",d))>=0;){e+=t.slice(f,d),o.startEntity(u);var h=o.write(t,d+1);if(h<0){f=d+o.end();break}f=d+h,d=h===0?f+1:f}var v=e+t.slice(f);return e="",v}}function mi(n,e,o,i){var t=(e&r0.BRANCH_LENGTH)>>7,u=e&r0.JUMP_TABLE;if(t===0)return u!==0&&i===u?o:-1;if(u){var f=i-u;return f<0||f>=t?-1:n[o+f]-1}for(var d=o,h=d+t-1;d<=h;){var v=d+h>>>1,D=n[v];if(D<i)d=v+1;else if(D>i)h=v-1;else return n[v+t]}return-1}ue.determineBranch=mi;var qr=bi(fi.default),D2=bi(pi.default);function S2(n,e){return e===void 0&&(e=an.Legacy),qr(n,e)}ue.decodeHTML=S2;function A2(n){return qr(n,an.Attribute)}ue.decodeHTMLAttribute=A2;function T2(n){return qr(n,an.Strict)}ue.decodeHTMLStrict=T2;function I2(n){return D2(n,an.Strict)}ue.decodeXML=I2});var vi=pe(zr=>{"use strict";V();Object.defineProperty(zr,"__esModule",{value:!0});function eu(n){for(var e=1;e<n.length;e++)n[e][0]+=n[e-1][0]+1;return n}zr.default=new Map(eu([[9,"&Tab;"],[0,"&NewLine;"],[22,"&excl;"],[0,"&quot;"],[0,"&num;"],[0,"&dollar;"],[0,"&percnt;"],[0,"&amp;"],[0,"&apos;"],[0,"&lpar;"],[0,"&rpar;"],[0,"&ast;"],[0,"&plus;"],[0,"&comma;"],[1,"&period;"],[0,"&sol;"],[10,"&colon;"],[0,"&semi;"],[0,{v:"&lt;",n:8402,o:"&nvlt;"}],[0,{v:"&equals;",n:8421,o:"&bne;"}],[0,{v:"&gt;",n:8402,o:"&nvgt;"}],[0,"&quest;"],[0,"&commat;"],[26,"&lbrack;"],[0,"&bsol;"],[0,"&rbrack;"],[0,"&Hat;"],[0,"&lowbar;"],[0,"&DiacriticalGrave;"],[5,{n:106,o:"&fjlig;"}],[20,"&lbrace;"],[0,"&verbar;"],[0,"&rbrace;"],[34,"&nbsp;"],[0,"&iexcl;"],[0,"&cent;"],[0,"&pound;"],[0,"&curren;"],[0,"&yen;"],[0,"&brvbar;"],[0,"&sect;"],[0,"&die;"],[0,"&copy;"],[0,"&ordf;"],[0,"&laquo;"],[0,"&not;"],[0,"&shy;"],[0,"&circledR;"],[0,"&macr;"],[0,"&deg;"],[0,"&PlusMinus;"],[0,"&sup2;"],[0,"&sup3;"],[0,"&acute;"],[0,"&micro;"],[0,"&para;"],[0,"&centerdot;"],[0,"&cedil;"],[0,"&sup1;"],[0,"&ordm;"],[0,"&raquo;"],[0,"&frac14;"],[0,"&frac12;"],[0,"&frac34;"],[0,"&iquest;"],[0,"&Agrave;"],[0,"&Aacute;"],[0,"&Acirc;"],[0,"&Atilde;"],[0,"&Auml;"],[0,"&angst;"],[0,"&AElig;"],[0,"&Ccedil;"],[0,"&Egrave;"],[0,"&Eacute;"],[0,"&Ecirc;"],[0,"&Euml;"],[0,"&Igrave;"],[0,"&Iacute;"],[0,"&Icirc;"],[0,"&Iuml;"],[0,"&ETH;"],[0,"&Ntilde;"],[0,"&Ograve;"],[0,"&Oacute;"],[0,"&Ocirc;"],[0,"&Otilde;"],[0,"&Ouml;"],[0,"&times;"],[0,"&Oslash;"],[0,"&Ugrave;"],[0,"&Uacute;"],[0,"&Ucirc;"],[0,"&Uuml;"],[0,"&Yacute;"],[0,"&THORN;"],[0,"&szlig;"],[0,"&agrave;"],[0,"&aacute;"],[0,"&acirc;"],[0,"&atilde;"],[0,"&auml;"],[0,"&aring;"],[0,"&aelig;"],[0,"&ccedil;"],[0,"&egrave;"],[0,"&eacute;"],[0,"&ecirc;"],[0,"&euml;"],[0,"&igrave;"],[0,"&iacute;"],[0,"&icirc;"],[0,"&iuml;"],[0,"&eth;"],[0,"&ntilde;"],[0,"&ograve;"],[0,"&oacute;"],[0,"&ocirc;"],[0,"&otilde;"],[0,"&ouml;"],[0,"&div;"],[0,"&oslash;"],[0,"&ugrave;"],[0,"&uacute;"],[0,"&ucirc;"],[0,"&uuml;"],[0,"&yacute;"],[0,"&thorn;"],[0,"&yuml;"],[0,"&Amacr;"],[0,"&amacr;"],[0,"&Abreve;"],[0,"&abreve;"],[0,"&Aogon;"],[0,"&aogon;"],[0,"&Cacute;"],[0,"&cacute;"],[0,"&Ccirc;"],[0,"&ccirc;"],[0,"&Cdot;"],[0,"&cdot;"],[0,"&Ccaron;"],[0,"&ccaron;"],[0,"&Dcaron;"],[0,"&dcaron;"],[0,"&Dstrok;"],[0,"&dstrok;"],[0,"&Emacr;"],[0,"&emacr;"],[2,"&Edot;"],[0,"&edot;"],[0,"&Eogon;"],[0,"&eogon;"],[0,"&Ecaron;"],[0,"&ecaron;"],[0,"&Gcirc;"],[0,"&gcirc;"],[0,"&Gbreve;"],[0,"&gbreve;"],[0,"&Gdot;"],[0,"&gdot;"],[0,"&Gcedil;"],[1,"&Hcirc;"],[0,"&hcirc;"],[0,"&Hstrok;"],[0,"&hstrok;"],[0,"&Itilde;"],[0,"&itilde;"],[0,"&Imacr;"],[0,"&imacr;"],[2,"&Iogon;"],[0,"&iogon;"],[0,"&Idot;"],[0,"&imath;"],[0,"&IJlig;"],[0,"&ijlig;"],[0,"&Jcirc;"],[0,"&jcirc;"],[0,"&Kcedil;"],[0,"&kcedil;"],[0,"&kgreen;"],[0,"&Lacute;"],[0,"&lacute;"],[0,"&Lcedil;"],[0,"&lcedil;"],[0,"&Lcaron;"],[0,"&lcaron;"],[0,"&Lmidot;"],[0,"&lmidot;"],[0,"&Lstrok;"],[0,"&lstrok;"],[0,"&Nacute;"],[0,"&nacute;"],[0,"&Ncedil;"],[0,"&ncedil;"],[0,"&Ncaron;"],[0,"&ncaron;"],[0,"&napos;"],[0,"&ENG;"],[0,"&eng;"],[0,"&Omacr;"],[0,"&omacr;"],[2,"&Odblac;"],[0,"&odblac;"],[0,"&OElig;"],[0,"&oelig;"],[0,"&Racute;"],[0,"&racute;"],[0,"&Rcedil;"],[0,"&rcedil;"],[0,"&Rcaron;"],[0,"&rcaron;"],[0,"&Sacute;"],[0,"&sacute;"],[0,"&Scirc;"],[0,"&scirc;"],[0,"&Scedil;"],[0,"&scedil;"],[0,"&Scaron;"],[0,"&scaron;"],[0,"&Tcedil;"],[0,"&tcedil;"],[0,"&Tcaron;"],[0,"&tcaron;"],[0,"&Tstrok;"],[0,"&tstrok;"],[0,"&Utilde;"],[0,"&utilde;"],[0,"&Umacr;"],[0,"&umacr;"],[0,"&Ubreve;"],[0,"&ubreve;"],[0,"&Uring;"],[0,"&uring;"],[0,"&Udblac;"],[0,"&udblac;"],[0,"&Uogon;"],[0,"&uogon;"],[0,"&Wcirc;"],[0,"&wcirc;"],[0,"&Ycirc;"],[0,"&ycirc;"],[0,"&Yuml;"],[0,"&Zacute;"],[0,"&zacute;"],[0,"&Zdot;"],[0,"&zdot;"],[0,"&Zcaron;"],[0,"&zcaron;"],[19,"&fnof;"],[34,"&imped;"],[63,"&gacute;"],[65,"&jmath;"],[142,"&circ;"],[0,"&caron;"],[16,"&breve;"],[0,"&DiacriticalDot;"],[0,"&ring;"],[0,"&ogon;"],[0,"&DiacriticalTilde;"],[0,"&dblac;"],[51,"&DownBreve;"],[127,"&Alpha;"],[0,"&Beta;"],[0,"&Gamma;"],[0,"&Delta;"],[0,"&Epsilon;"],[0,"&Zeta;"],[0,"&Eta;"],[0,"&Theta;"],[0,"&Iota;"],[0,"&Kappa;"],[0,"&Lambda;"],[0,"&Mu;"],[0,"&Nu;"],[0,"&Xi;"],[0,"&Omicron;"],[0,"&Pi;"],[0,"&Rho;"],[1,"&Sigma;"],[0,"&Tau;"],[0,"&Upsilon;"],[0,"&Phi;"],[0,"&Chi;"],[0,"&Psi;"],[0,"&ohm;"],[7,"&alpha;"],[0,"&beta;"],[0,"&gamma;"],[0,"&delta;"],[0,"&epsi;"],[0,"&zeta;"],[0,"&eta;"],[0,"&theta;"],[0,"&iota;"],[0,"&kappa;"],[0,"&lambda;"],[0,"&mu;"],[0,"&nu;"],[0,"&xi;"],[0,"&omicron;"],[0,"&pi;"],[0,"&rho;"],[0,"&sigmaf;"],[0,"&sigma;"],[0,"&tau;"],[0,"&upsi;"],[0,"&phi;"],[0,"&chi;"],[0,"&psi;"],[0,"&omega;"],[7,"&thetasym;"],[0,"&Upsi;"],[2,"&phiv;"],[0,"&piv;"],[5,"&Gammad;"],[0,"&digamma;"],[18,"&kappav;"],[0,"&rhov;"],[3,"&epsiv;"],[0,"&backepsilon;"],[10,"&IOcy;"],[0,"&DJcy;"],[0,"&GJcy;"],[0,"&Jukcy;"],[0,"&DScy;"],[0,"&Iukcy;"],[0,"&YIcy;"],[0,"&Jsercy;"],[0,"&LJcy;"],[0,"&NJcy;"],[0,"&TSHcy;"],[0,"&KJcy;"],[1,"&Ubrcy;"],[0,"&DZcy;"],[0,"&Acy;"],[0,"&Bcy;"],[0,"&Vcy;"],[0,"&Gcy;"],[0,"&Dcy;"],[0,"&IEcy;"],[0,"&ZHcy;"],[0,"&Zcy;"],[0,"&Icy;"],[0,"&Jcy;"],[0,"&Kcy;"],[0,"&Lcy;"],[0,"&Mcy;"],[0,"&Ncy;"],[0,"&Ocy;"],[0,"&Pcy;"],[0,"&Rcy;"],[0,"&Scy;"],[0,"&Tcy;"],[0,"&Ucy;"],[0,"&Fcy;"],[0,"&KHcy;"],[0,"&TScy;"],[0,"&CHcy;"],[0,"&SHcy;"],[0,"&SHCHcy;"],[0,"&HARDcy;"],[0,"&Ycy;"],[0,"&SOFTcy;"],[0,"&Ecy;"],[0,"&YUcy;"],[0,"&YAcy;"],[0,"&acy;"],[0,"&bcy;"],[0,"&vcy;"],[0,"&gcy;"],[0,"&dcy;"],[0,"&iecy;"],[0,"&zhcy;"],[0,"&zcy;"],[0,"&icy;"],[0,"&jcy;"],[0,"&kcy;"],[0,"&lcy;"],[0,"&mcy;"],[0,"&ncy;"],[0,"&ocy;"],[0,"&pcy;"],[0,"&rcy;"],[0,"&scy;"],[0,"&tcy;"],[0,"&ucy;"],[0,"&fcy;"],[0,"&khcy;"],[0,"&tscy;"],[0,"&chcy;"],[0,"&shcy;"],[0,"&shchcy;"],[0,"&hardcy;"],[0,"&ycy;"],[0,"&softcy;"],[0,"&ecy;"],[0,"&yucy;"],[0,"&yacy;"],[1,"&iocy;"],[0,"&djcy;"],[0,"&gjcy;"],[0,"&jukcy;"],[0,"&dscy;"],[0,"&iukcy;"],[0,"&yicy;"],[0,"&jsercy;"],[0,"&ljcy;"],[0,"&njcy;"],[0,"&tshcy;"],[0,"&kjcy;"],[1,"&ubrcy;"],[0,"&dzcy;"],[7074,"&ensp;"],[0,"&emsp;"],[0,"&emsp13;"],[0,"&emsp14;"],[1,"&numsp;"],[0,"&puncsp;"],[0,"&ThinSpace;"],[0,"&hairsp;"],[0,"&NegativeMediumSpace;"],[0,"&zwnj;"],[0,"&zwj;"],[0,"&lrm;"],[0,"&rlm;"],[0,"&dash;"],[2,"&ndash;"],[0,"&mdash;"],[0,"&horbar;"],[0,"&Verbar;"],[1,"&lsquo;"],[0,"&CloseCurlyQuote;"],[0,"&lsquor;"],[1,"&ldquo;"],[0,"&CloseCurlyDoubleQuote;"],[0,"&bdquo;"],[1,"&dagger;"],[0,"&Dagger;"],[0,"&bull;"],[2,"&nldr;"],[0,"&hellip;"],[9,"&permil;"],[0,"&pertenk;"],[0,"&prime;"],[0,"&Prime;"],[0,"&tprime;"],[0,"&backprime;"],[3,"&lsaquo;"],[0,"&rsaquo;"],[3,"&oline;"],[2,"&caret;"],[1,"&hybull;"],[0,"&frasl;"],[10,"&bsemi;"],[7,"&qprime;"],[7,{v:"&MediumSpace;",n:8202,o:"&ThickSpace;"}],[0,"&NoBreak;"],[0,"&af;"],[0,"&InvisibleTimes;"],[0,"&ic;"],[72,"&euro;"],[46,"&tdot;"],[0,"&DotDot;"],[37,"&complexes;"],[2,"&incare;"],[4,"&gscr;"],[0,"&hamilt;"],[0,"&Hfr;"],[0,"&Hopf;"],[0,"&planckh;"],[0,"&hbar;"],[0,"&imagline;"],[0,"&Ifr;"],[0,"&lagran;"],[0,"&ell;"],[1,"&naturals;"],[0,"&numero;"],[0,"&copysr;"],[0,"&weierp;"],[0,"&Popf;"],[0,"&Qopf;"],[0,"&realine;"],[0,"&real;"],[0,"&reals;"],[0,"&rx;"],[3,"&trade;"],[1,"&integers;"],[2,"&mho;"],[0,"&zeetrf;"],[0,"&iiota;"],[2,"&bernou;"],[0,"&Cayleys;"],[1,"&escr;"],[0,"&Escr;"],[0,"&Fouriertrf;"],[1,"&Mellintrf;"],[0,"&order;"],[0,"&alefsym;"],[0,"&beth;"],[0,"&gimel;"],[0,"&daleth;"],[12,"&CapitalDifferentialD;"],[0,"&dd;"],[0,"&ee;"],[0,"&ii;"],[10,"&frac13;"],[0,"&frac23;"],[0,"&frac15;"],[0,"&frac25;"],[0,"&frac35;"],[0,"&frac45;"],[0,"&frac16;"],[0,"&frac56;"],[0,"&frac18;"],[0,"&frac38;"],[0,"&frac58;"],[0,"&frac78;"],[49,"&larr;"],[0,"&ShortUpArrow;"],[0,"&rarr;"],[0,"&darr;"],[0,"&harr;"],[0,"&updownarrow;"],[0,"&nwarr;"],[0,"&nearr;"],[0,"&LowerRightArrow;"],[0,"&LowerLeftArrow;"],[0,"&nlarr;"],[0,"&nrarr;"],[1,{v:"&rarrw;",n:824,o:"&nrarrw;"}],[0,"&Larr;"],[0,"&Uarr;"],[0,"&Rarr;"],[0,"&Darr;"],[0,"&larrtl;"],[0,"&rarrtl;"],[0,"&LeftTeeArrow;"],[0,"&mapstoup;"],[0,"&map;"],[0,"&DownTeeArrow;"],[1,"&hookleftarrow;"],[0,"&hookrightarrow;"],[0,"&larrlp;"],[0,"&looparrowright;"],[0,"&harrw;"],[0,"&nharr;"],[1,"&lsh;"],[0,"&rsh;"],[0,"&ldsh;"],[0,"&rdsh;"],[1,"&crarr;"],[0,"&cularr;"],[0,"&curarr;"],[2,"&circlearrowleft;"],[0,"&circlearrowright;"],[0,"&leftharpoonup;"],[0,"&DownLeftVector;"],[0,"&RightUpVector;"],[0,"&LeftUpVector;"],[0,"&rharu;"],[0,"&DownRightVector;"],[0,"&dharr;"],[0,"&dharl;"],[0,"&RightArrowLeftArrow;"],[0,"&udarr;"],[0,"&LeftArrowRightArrow;"],[0,"&leftleftarrows;"],[0,"&upuparrows;"],[0,"&rightrightarrows;"],[0,"&ddarr;"],[0,"&leftrightharpoons;"],[0,"&Equilibrium;"],[0,"&nlArr;"],[0,"&nhArr;"],[0,"&nrArr;"],[0,"&DoubleLeftArrow;"],[0,"&DoubleUpArrow;"],[0,"&DoubleRightArrow;"],[0,"&dArr;"],[0,"&DoubleLeftRightArrow;"],[0,"&DoubleUpDownArrow;"],[0,"&nwArr;"],[0,"&neArr;"],[0,"&seArr;"],[0,"&swArr;"],[0,"&lAarr;"],[0,"&rAarr;"],[1,"&zigrarr;"],[6,"&larrb;"],[0,"&rarrb;"],[15,"&DownArrowUpArrow;"],[7,"&loarr;"],[0,"&roarr;"],[0,"&hoarr;"],[0,"&forall;"],[0,"&comp;"],[0,{v:"&part;",n:824,o:"&npart;"}],[0,"&exist;"],[0,"&nexist;"],[0,"&empty;"],[1,"&Del;"],[0,"&Element;"],[0,"&NotElement;"],[1,"&ni;"],[0,"&notni;"],[2,"&prod;"],[0,"&coprod;"],[0,"&sum;"],[0,"&minus;"],[0,"&MinusPlus;"],[0,"&dotplus;"],[1,"&Backslash;"],[0,"&lowast;"],[0,"&compfn;"],[1,"&radic;"],[2,"&prop;"],[0,"&infin;"],[0,"&angrt;"],[0,{v:"&ang;",n:8402,o:"&nang;"}],[0,"&angmsd;"],[0,"&angsph;"],[0,"&mid;"],[0,"&nmid;"],[0,"&DoubleVerticalBar;"],[0,"&NotDoubleVerticalBar;"],[0,"&and;"],[0,"&or;"],[0,{v:"&cap;",n:65024,o:"&caps;"}],[0,{v:"&cup;",n:65024,o:"&cups;"}],[0,"&int;"],[0,"&Int;"],[0,"&iiint;"],[0,"&conint;"],[0,"&Conint;"],[0,"&Cconint;"],[0,"&cwint;"],[0,"&ClockwiseContourIntegral;"],[0,"&awconint;"],[0,"&there4;"],[0,"&becaus;"],[0,"&ratio;"],[0,"&Colon;"],[0,"&dotminus;"],[1,"&mDDot;"],[0,"&homtht;"],[0,{v:"&sim;",n:8402,o:"&nvsim;"}],[0,{v:"&backsim;",n:817,o:"&race;"}],[0,{v:"&ac;",n:819,o:"&acE;"}],[0,"&acd;"],[0,"&VerticalTilde;"],[0,"&NotTilde;"],[0,{v:"&eqsim;",n:824,o:"&nesim;"}],[0,"&sime;"],[0,"&NotTildeEqual;"],[0,"&cong;"],[0,"&simne;"],[0,"&ncong;"],[0,"&ap;"],[0,"&nap;"],[0,"&ape;"],[0,{v:"&apid;",n:824,o:"&napid;"}],[0,"&backcong;"],[0,{v:"&asympeq;",n:8402,o:"&nvap;"}],[0,{v:"&bump;",n:824,o:"&nbump;"}],[0,{v:"&bumpe;",n:824,o:"&nbumpe;"}],[0,{v:"&doteq;",n:824,o:"&nedot;"}],[0,"&doteqdot;"],[0,"&efDot;"],[0,"&erDot;"],[0,"&Assign;"],[0,"&ecolon;"],[0,"&ecir;"],[0,"&circeq;"],[1,"&wedgeq;"],[0,"&veeeq;"],[1,"&triangleq;"],[2,"&equest;"],[0,"&ne;"],[0,{v:"&Congruent;",n:8421,o:"&bnequiv;"}],[0,"&nequiv;"],[1,{v:"&le;",n:8402,o:"&nvle;"}],[0,{v:"&ge;",n:8402,o:"&nvge;"}],[0,{v:"&lE;",n:824,o:"&nlE;"}],[0,{v:"&gE;",n:824,o:"&ngE;"}],[0,{v:"&lnE;",n:65024,o:"&lvertneqq;"}],[0,{v:"&gnE;",n:65024,o:"&gvertneqq;"}],[0,{v:"&ll;",n:new Map(eu([[824,"&nLtv;"],[7577,"&nLt;"]]))}],[0,{v:"&gg;",n:new Map(eu([[824,"&nGtv;"],[7577,"&nGt;"]]))}],[0,"&between;"],[0,"&NotCupCap;"],[0,"&nless;"],[0,"&ngt;"],[0,"&nle;"],[0,"&nge;"],[0,"&lesssim;"],[0,"&GreaterTilde;"],[0,"&nlsim;"],[0,"&ngsim;"],[0,"&LessGreater;"],[0,"&gl;"],[0,"&NotLessGreater;"],[0,"&NotGreaterLess;"],[0,"&pr;"],[0,"&sc;"],[0,"&prcue;"],[0,"&sccue;"],[0,"&PrecedesTilde;"],[0,{v:"&scsim;",n:824,o:"&NotSucceedsTilde;"}],[0,"&NotPrecedes;"],[0,"&NotSucceeds;"],[0,{v:"&sub;",n:8402,o:"&NotSubset;"}],[0,{v:"&sup;",n:8402,o:"&NotSuperset;"}],[0,"&nsub;"],[0,"&nsup;"],[0,"&sube;"],[0,"&supe;"],[0,"&NotSubsetEqual;"],[0,"&NotSupersetEqual;"],[0,{v:"&subne;",n:65024,o:"&varsubsetneq;"}],[0,{v:"&supne;",n:65024,o:"&varsupsetneq;"}],[1,"&cupdot;"],[0,"&UnionPlus;"],[0,{v:"&sqsub;",n:824,o:"&NotSquareSubset;"}],[0,{v:"&sqsup;",n:824,o:"&NotSquareSuperset;"}],[0,"&sqsube;"],[0,"&sqsupe;"],[0,{v:"&sqcap;",n:65024,o:"&sqcaps;"}],[0,{v:"&sqcup;",n:65024,o:"&sqcups;"}],[0,"&CirclePlus;"],[0,"&CircleMinus;"],[0,"&CircleTimes;"],[0,"&osol;"],[0,"&CircleDot;"],[0,"&circledcirc;"],[0,"&circledast;"],[1,"&circleddash;"],[0,"&boxplus;"],[0,"&boxminus;"],[0,"&boxtimes;"],[0,"&dotsquare;"],[0,"&RightTee;"],[0,"&dashv;"],[0,"&DownTee;"],[0,"&bot;"],[1,"&models;"],[0,"&DoubleRightTee;"],[0,"&Vdash;"],[0,"&Vvdash;"],[0,"&VDash;"],[0,"&nvdash;"],[0,"&nvDash;"],[0,"&nVdash;"],[0,"&nVDash;"],[0,"&prurel;"],[1,"&LeftTriangle;"],[0,"&RightTriangle;"],[0,{v:"&LeftTriangleEqual;",n:8402,o:"&nvltrie;"}],[0,{v:"&RightTriangleEqual;",n:8402,o:"&nvrtrie;"}],[0,"&origof;"],[0,"&imof;"],[0,"&multimap;"],[0,"&hercon;"],[0,"&intcal;"],[0,"&veebar;"],[1,"&barvee;"],[0,"&angrtvb;"],[0,"&lrtri;"],[0,"&bigwedge;"],[0,"&bigvee;"],[0,"&bigcap;"],[0,"&bigcup;"],[0,"&diam;"],[0,"&sdot;"],[0,"&sstarf;"],[0,"&divideontimes;"],[0,"&bowtie;"],[0,"&ltimes;"],[0,"&rtimes;"],[0,"&leftthreetimes;"],[0,"&rightthreetimes;"],[0,"&backsimeq;"],[0,"&curlyvee;"],[0,"&curlywedge;"],[0,"&Sub;"],[0,"&Sup;"],[0,"&Cap;"],[0,"&Cup;"],[0,"&fork;"],[0,"&epar;"],[0,"&lessdot;"],[0,"&gtdot;"],[0,{v:"&Ll;",n:824,o:"&nLl;"}],[0,{v:"&Gg;",n:824,o:"&nGg;"}],[0,{v:"&leg;",n:65024,o:"&lesg;"}],[0,{v:"&gel;",n:65024,o:"&gesl;"}],[2,"&cuepr;"],[0,"&cuesc;"],[0,"&NotPrecedesSlantEqual;"],[0,"&NotSucceedsSlantEqual;"],[0,"&NotSquareSubsetEqual;"],[0,"&NotSquareSupersetEqual;"],[2,"&lnsim;"],[0,"&gnsim;"],[0,"&precnsim;"],[0,"&scnsim;"],[0,"&nltri;"],[0,"&NotRightTriangle;"],[0,"&nltrie;"],[0,"&NotRightTriangleEqual;"],[0,"&vellip;"],[0,"&ctdot;"],[0,"&utdot;"],[0,"&dtdot;"],[0,"&disin;"],[0,"&isinsv;"],[0,"&isins;"],[0,{v:"&isindot;",n:824,o:"&notindot;"}],[0,"&notinvc;"],[0,"&notinvb;"],[1,{v:"&isinE;",n:824,o:"&notinE;"}],[0,"&nisd;"],[0,"&xnis;"],[0,"&nis;"],[0,"&notnivc;"],[0,"&notnivb;"],[6,"&barwed;"],[0,"&Barwed;"],[1,"&lceil;"],[0,"&rceil;"],[0,"&LeftFloor;"],[0,"&rfloor;"],[0,"&drcrop;"],[0,"&dlcrop;"],[0,"&urcrop;"],[0,"&ulcrop;"],[0,"&bnot;"],[1,"&profline;"],[0,"&profsurf;"],[1,"&telrec;"],[0,"&target;"],[5,"&ulcorn;"],[0,"&urcorn;"],[0,"&dlcorn;"],[0,"&drcorn;"],[2,"&frown;"],[0,"&smile;"],[9,"&cylcty;"],[0,"&profalar;"],[7,"&topbot;"],[6,"&ovbar;"],[1,"&solbar;"],[60,"&angzarr;"],[51,"&lmoustache;"],[0,"&rmoustache;"],[2,"&OverBracket;"],[0,"&bbrk;"],[0,"&bbrktbrk;"],[37,"&OverParenthesis;"],[0,"&UnderParenthesis;"],[0,"&OverBrace;"],[0,"&UnderBrace;"],[2,"&trpezium;"],[4,"&elinters;"],[59,"&blank;"],[164,"&circledS;"],[55,"&boxh;"],[1,"&boxv;"],[9,"&boxdr;"],[3,"&boxdl;"],[3,"&boxur;"],[3,"&boxul;"],[3,"&boxvr;"],[7,"&boxvl;"],[7,"&boxhd;"],[7,"&boxhu;"],[7,"&boxvh;"],[19,"&boxH;"],[0,"&boxV;"],[0,"&boxdR;"],[0,"&boxDr;"],[0,"&boxDR;"],[0,"&boxdL;"],[0,"&boxDl;"],[0,"&boxDL;"],[0,"&boxuR;"],[0,"&boxUr;"],[0,"&boxUR;"],[0,"&boxuL;"],[0,"&boxUl;"],[0,"&boxUL;"],[0,"&boxvR;"],[0,"&boxVr;"],[0,"&boxVR;"],[0,"&boxvL;"],[0,"&boxVl;"],[0,"&boxVL;"],[0,"&boxHd;"],[0,"&boxhD;"],[0,"&boxHD;"],[0,"&boxHu;"],[0,"&boxhU;"],[0,"&boxHU;"],[0,"&boxvH;"],[0,"&boxVh;"],[0,"&boxVH;"],[19,"&uhblk;"],[3,"&lhblk;"],[3,"&block;"],[8,"&blk14;"],[0,"&blk12;"],[0,"&blk34;"],[13,"&square;"],[8,"&blacksquare;"],[0,"&EmptyVerySmallSquare;"],[1,"&rect;"],[0,"&marker;"],[2,"&fltns;"],[1,"&bigtriangleup;"],[0,"&blacktriangle;"],[0,"&triangle;"],[2,"&blacktriangleright;"],[0,"&rtri;"],[3,"&bigtriangledown;"],[0,"&blacktriangledown;"],[0,"&dtri;"],[2,"&blacktriangleleft;"],[0,"&ltri;"],[6,"&loz;"],[0,"&cir;"],[32,"&tridot;"],[2,"&bigcirc;"],[8,"&ultri;"],[0,"&urtri;"],[0,"&lltri;"],[0,"&EmptySmallSquare;"],[0,"&FilledSmallSquare;"],[8,"&bigstar;"],[0,"&star;"],[7,"&phone;"],[49,"&female;"],[1,"&male;"],[29,"&spades;"],[2,"&clubs;"],[1,"&hearts;"],[0,"&diamondsuit;"],[3,"&sung;"],[2,"&flat;"],[0,"&natural;"],[0,"&sharp;"],[163,"&check;"],[3,"&cross;"],[8,"&malt;"],[21,"&sext;"],[33,"&VerticalSeparator;"],[25,"&lbbrk;"],[0,"&rbbrk;"],[84,"&bsolhsub;"],[0,"&suphsol;"],[28,"&LeftDoubleBracket;"],[0,"&RightDoubleBracket;"],[0,"&lang;"],[0,"&rang;"],[0,"&Lang;"],[0,"&Rang;"],[0,"&loang;"],[0,"&roang;"],[7,"&longleftarrow;"],[0,"&longrightarrow;"],[0,"&longleftrightarrow;"],[0,"&DoubleLongLeftArrow;"],[0,"&DoubleLongRightArrow;"],[0,"&DoubleLongLeftRightArrow;"],[1,"&longmapsto;"],[2,"&dzigrarr;"],[258,"&nvlArr;"],[0,"&nvrArr;"],[0,"&nvHarr;"],[0,"&Map;"],[6,"&lbarr;"],[0,"&bkarow;"],[0,"&lBarr;"],[0,"&dbkarow;"],[0,"&drbkarow;"],[0,"&DDotrahd;"],[0,"&UpArrowBar;"],[0,"&DownArrowBar;"],[2,"&Rarrtl;"],[2,"&latail;"],[0,"&ratail;"],[0,"&lAtail;"],[0,"&rAtail;"],[0,"&larrfs;"],[0,"&rarrfs;"],[0,"&larrbfs;"],[0,"&rarrbfs;"],[2,"&nwarhk;"],[0,"&nearhk;"],[0,"&hksearow;"],[0,"&hkswarow;"],[0,"&nwnear;"],[0,"&nesear;"],[0,"&seswar;"],[0,"&swnwar;"],[8,{v:"&rarrc;",n:824,o:"&nrarrc;"}],[1,"&cudarrr;"],[0,"&ldca;"],[0,"&rdca;"],[0,"&cudarrl;"],[0,"&larrpl;"],[2,"&curarrm;"],[0,"&cularrp;"],[7,"&rarrpl;"],[2,"&harrcir;"],[0,"&Uarrocir;"],[0,"&lurdshar;"],[0,"&ldrushar;"],[2,"&LeftRightVector;"],[0,"&RightUpDownVector;"],[0,"&DownLeftRightVector;"],[0,"&LeftUpDownVector;"],[0,"&LeftVectorBar;"],[0,"&RightVectorBar;"],[0,"&RightUpVectorBar;"],[0,"&RightDownVectorBar;"],[0,"&DownLeftVectorBar;"],[0,"&DownRightVectorBar;"],[0,"&LeftUpVectorBar;"],[0,"&LeftDownVectorBar;"],[0,"&LeftTeeVector;"],[0,"&RightTeeVector;"],[0,"&RightUpTeeVector;"],[0,"&RightDownTeeVector;"],[0,"&DownLeftTeeVector;"],[0,"&DownRightTeeVector;"],[0,"&LeftUpTeeVector;"],[0,"&LeftDownTeeVector;"],[0,"&lHar;"],[0,"&uHar;"],[0,"&rHar;"],[0,"&dHar;"],[0,"&luruhar;"],[0,"&ldrdhar;"],[0,"&ruluhar;"],[0,"&rdldhar;"],[0,"&lharul;"],[0,"&llhard;"],[0,"&rharul;"],[0,"&lrhard;"],[0,"&udhar;"],[0,"&duhar;"],[0,"&RoundImplies;"],[0,"&erarr;"],[0,"&simrarr;"],[0,"&larrsim;"],[0,"&rarrsim;"],[0,"&rarrap;"],[0,"&ltlarr;"],[1,"&gtrarr;"],[0,"&subrarr;"],[1,"&suplarr;"],[0,"&lfisht;"],[0,"&rfisht;"],[0,"&ufisht;"],[0,"&dfisht;"],[5,"&lopar;"],[0,"&ropar;"],[4,"&lbrke;"],[0,"&rbrke;"],[0,"&lbrkslu;"],[0,"&rbrksld;"],[0,"&lbrksld;"],[0,"&rbrkslu;"],[0,"&langd;"],[0,"&rangd;"],[0,"&lparlt;"],[0,"&rpargt;"],[0,"&gtlPar;"],[0,"&ltrPar;"],[3,"&vzigzag;"],[1,"&vangrt;"],[0,"&angrtvbd;"],[6,"&ange;"],[0,"&range;"],[0,"&dwangle;"],[0,"&uwangle;"],[0,"&angmsdaa;"],[0,"&angmsdab;"],[0,"&angmsdac;"],[0,"&angmsdad;"],[0,"&angmsdae;"],[0,"&angmsdaf;"],[0,"&angmsdag;"],[0,"&angmsdah;"],[0,"&bemptyv;"],[0,"&demptyv;"],[0,"&cemptyv;"],[0,"&raemptyv;"],[0,"&laemptyv;"],[0,"&ohbar;"],[0,"&omid;"],[0,"&opar;"],[1,"&operp;"],[1,"&olcross;"],[0,"&odsold;"],[1,"&olcir;"],[0,"&ofcir;"],[0,"&olt;"],[0,"&ogt;"],[0,"&cirscir;"],[0,"&cirE;"],[0,"&solb;"],[0,"&bsolb;"],[3,"&boxbox;"],[3,"&trisb;"],[0,"&rtriltri;"],[0,{v:"&LeftTriangleBar;",n:824,o:"&NotLeftTriangleBar;"}],[0,{v:"&RightTriangleBar;",n:824,o:"&NotRightTriangleBar;"}],[11,"&iinfin;"],[0,"&infintie;"],[0,"&nvinfin;"],[4,"&eparsl;"],[0,"&smeparsl;"],[0,"&eqvparsl;"],[5,"&blacklozenge;"],[8,"&RuleDelayed;"],[1,"&dsol;"],[9,"&bigodot;"],[0,"&bigoplus;"],[0,"&bigotimes;"],[1,"&biguplus;"],[1,"&bigsqcup;"],[5,"&iiiint;"],[0,"&fpartint;"],[2,"&cirfnint;"],[0,"&awint;"],[0,"&rppolint;"],[0,"&scpolint;"],[0,"&npolint;"],[0,"&pointint;"],[0,"&quatint;"],[0,"&intlarhk;"],[10,"&pluscir;"],[0,"&plusacir;"],[0,"&simplus;"],[0,"&plusdu;"],[0,"&plussim;"],[0,"&plustwo;"],[1,"&mcomma;"],[0,"&minusdu;"],[2,"&loplus;"],[0,"&roplus;"],[0,"&Cross;"],[0,"&timesd;"],[0,"&timesbar;"],[1,"&smashp;"],[0,"&lotimes;"],[0,"&rotimes;"],[0,"&otimesas;"],[0,"&Otimes;"],[0,"&odiv;"],[0,"&triplus;"],[0,"&triminus;"],[0,"&tritime;"],[0,"&intprod;"],[2,"&amalg;"],[0,"&capdot;"],[1,"&ncup;"],[0,"&ncap;"],[0,"&capand;"],[0,"&cupor;"],[0,"&cupcap;"],[0,"&capcup;"],[0,"&cupbrcap;"],[0,"&capbrcup;"],[0,"&cupcup;"],[0,"&capcap;"],[0,"&ccups;"],[0,"&ccaps;"],[2,"&ccupssm;"],[2,"&And;"],[0,"&Or;"],[0,"&andand;"],[0,"&oror;"],[0,"&orslope;"],[0,"&andslope;"],[1,"&andv;"],[0,"&orv;"],[0,"&andd;"],[0,"&ord;"],[1,"&wedbar;"],[6,"&sdote;"],[3,"&simdot;"],[2,{v:"&congdot;",n:824,o:"&ncongdot;"}],[0,"&easter;"],[0,"&apacir;"],[0,{v:"&apE;",n:824,o:"&napE;"}],[0,"&eplus;"],[0,"&pluse;"],[0,"&Esim;"],[0,"&Colone;"],[0,"&Equal;"],[1,"&ddotseq;"],[0,"&equivDD;"],[0,"&ltcir;"],[0,"&gtcir;"],[0,"&ltquest;"],[0,"&gtquest;"],[0,{v:"&leqslant;",n:824,o:"&nleqslant;"}],[0,{v:"&geqslant;",n:824,o:"&ngeqslant;"}],[0,"&lesdot;"],[0,"&gesdot;"],[0,"&lesdoto;"],[0,"&gesdoto;"],[0,"&lesdotor;"],[0,"&gesdotol;"],[0,"&lap;"],[0,"&gap;"],[0,"&lne;"],[0,"&gne;"],[0,"&lnap;"],[0,"&gnap;"],[0,"&lEg;"],[0,"&gEl;"],[0,"&lsime;"],[0,"&gsime;"],[0,"&lsimg;"],[0,"&gsiml;"],[0,"&lgE;"],[0,"&glE;"],[0,"&lesges;"],[0,"&gesles;"],[0,"&els;"],[0,"&egs;"],[0,"&elsdot;"],[0,"&egsdot;"],[0,"&el;"],[0,"&eg;"],[2,"&siml;"],[0,"&simg;"],[0,"&simlE;"],[0,"&simgE;"],[0,{v:"&LessLess;",n:824,o:"&NotNestedLessLess;"}],[0,{v:"&GreaterGreater;",n:824,o:"&NotNestedGreaterGreater;"}],[1,"&glj;"],[0,"&gla;"],[0,"&ltcc;"],[0,"&gtcc;"],[0,"&lescc;"],[0,"&gescc;"],[0,"&smt;"],[0,"&lat;"],[0,{v:"&smte;",n:65024,o:"&smtes;"}],[0,{v:"&late;",n:65024,o:"&lates;"}],[0,"&bumpE;"],[0,{v:"&PrecedesEqual;",n:824,o:"&NotPrecedesEqual;"}],[0,{v:"&sce;",n:824,o:"&NotSucceedsEqual;"}],[2,"&prE;"],[0,"&scE;"],[0,"&precneqq;"],[0,"&scnE;"],[0,"&prap;"],[0,"&scap;"],[0,"&precnapprox;"],[0,"&scnap;"],[0,"&Pr;"],[0,"&Sc;"],[0,"&subdot;"],[0,"&supdot;"],[0,"&subplus;"],[0,"&supplus;"],[0,"&submult;"],[0,"&supmult;"],[0,"&subedot;"],[0,"&supedot;"],[0,{v:"&subE;",n:824,o:"&nsubE;"}],[0,{v:"&supE;",n:824,o:"&nsupE;"}],[0,"&subsim;"],[0,"&supsim;"],[2,{v:"&subnE;",n:65024,o:"&varsubsetneqq;"}],[0,{v:"&supnE;",n:65024,o:"&varsupsetneqq;"}],[2,"&csub;"],[0,"&csup;"],[0,"&csube;"],[0,"&csupe;"],[0,"&subsup;"],[0,"&supsub;"],[0,"&subsub;"],[0,"&supsup;"],[0,"&suphsub;"],[0,"&supdsub;"],[0,"&forkv;"],[0,"&topfork;"],[0,"&mlcp;"],[8,"&Dashv;"],[1,"&Vdashl;"],[0,"&Barv;"],[0,"&vBar;"],[0,"&vBarv;"],[1,"&Vbar;"],[0,"&Not;"],[0,"&bNot;"],[0,"&rnmid;"],[0,"&cirmid;"],[0,"&midcir;"],[0,"&topcir;"],[0,"&nhpar;"],[0,"&parsim;"],[9,{v:"&parsl;",n:8421,o:"&nparsl;"}],[44343,{n:new Map(eu([[56476,"&Ascr;"],[1,"&Cscr;"],[0,"&Dscr;"],[2,"&Gscr;"],[2,"&Jscr;"],[0,"&Kscr;"],[2,"&Nscr;"],[0,"&Oscr;"],[0,"&Pscr;"],[0,"&Qscr;"],[1,"&Sscr;"],[0,"&Tscr;"],[0,"&Uscr;"],[0,"&Vscr;"],[0,"&Wscr;"],[0,"&Xscr;"],[0,"&Yscr;"],[0,"&Zscr;"],[0,"&ascr;"],[0,"&bscr;"],[0,"&cscr;"],[0,"&dscr;"],[1,"&fscr;"],[1,"&hscr;"],[0,"&iscr;"],[0,"&jscr;"],[0,"&kscr;"],[0,"&lscr;"],[0,"&mscr;"],[0,"&nscr;"],[1,"&pscr;"],[0,"&qscr;"],[0,"&rscr;"],[0,"&sscr;"],[0,"&tscr;"],[0,"&uscr;"],[0,"&vscr;"],[0,"&wscr;"],[0,"&xscr;"],[0,"&yscr;"],[0,"&zscr;"],[52,"&Afr;"],[0,"&Bfr;"],[1,"&Dfr;"],[0,"&Efr;"],[0,"&Ffr;"],[0,"&Gfr;"],[2,"&Jfr;"],[0,"&Kfr;"],[0,"&Lfr;"],[0,"&Mfr;"],[0,"&Nfr;"],[0,"&Ofr;"],[0,"&Pfr;"],[0,"&Qfr;"],[1,"&Sfr;"],[0,"&Tfr;"],[0,"&Ufr;"],[0,"&Vfr;"],[0,"&Wfr;"],[0,"&Xfr;"],[0,"&Yfr;"],[1,"&afr;"],[0,"&bfr;"],[0,"&cfr;"],[0,"&dfr;"],[0,"&efr;"],[0,"&ffr;"],[0,"&gfr;"],[0,"&hfr;"],[0,"&ifr;"],[0,"&jfr;"],[0,"&kfr;"],[0,"&lfr;"],[0,"&mfr;"],[0,"&nfr;"],[0,"&ofr;"],[0,"&pfr;"],[0,"&qfr;"],[0,"&rfr;"],[0,"&sfr;"],[0,"&tfr;"],[0,"&ufr;"],[0,"&vfr;"],[0,"&wfr;"],[0,"&xfr;"],[0,"&yfr;"],[0,"&zfr;"],[0,"&Aopf;"],[0,"&Bopf;"],[1,"&Dopf;"],[0,"&Eopf;"],[0,"&Fopf;"],[0,"&Gopf;"],[1,"&Iopf;"],[0,"&Jopf;"],[0,"&Kopf;"],[0,"&Lopf;"],[0,"&Mopf;"],[1,"&Oopf;"],[3,"&Sopf;"],[0,"&Topf;"],[0,"&Uopf;"],[0,"&Vopf;"],[0,"&Wopf;"],[0,"&Xopf;"],[0,"&Yopf;"],[1,"&aopf;"],[0,"&bopf;"],[0,"&copf;"],[0,"&dopf;"],[0,"&eopf;"],[0,"&fopf;"],[0,"&gopf;"],[0,"&hopf;"],[0,"&iopf;"],[0,"&jopf;"],[0,"&kopf;"],[0,"&lopf;"],[0,"&mopf;"],[0,"&nopf;"],[0,"&oopf;"],[0,"&popf;"],[0,"&qopf;"],[0,"&ropf;"],[0,"&sopf;"],[0,"&topf;"],[0,"&uopf;"],[0,"&vopf;"],[0,"&wopf;"],[0,"&xopf;"],[0,"&yopf;"],[0,"&zopf;"]]))}],[8906,"&fflig;"],[0,"&filig;"],[0,"&fllig;"],[0,"&ffilig;"],[0,"&ffllig;"]]))});var nu=pe(we=>{"use strict";V();Object.defineProperty(we,"__esModule",{value:!0});we.escapeText=we.escapeAttribute=we.escapeUTF8=we.escape=we.encodeXML=we.getCodePoint=we.xmlReplacer=void 0;we.xmlReplacer=/["&'<>$\x80-\uFFFF]/g;var xi=new Map([[34,"&quot;"],[38,"&amp;"],[39,"&apos;"],[60,"&lt;"],[62,"&gt;"]]);we.getCodePoint=String.prototype.codePointAt!=null?function(n,e){return n.codePointAt(e)}:function(n,e){return(n.charCodeAt(e)&64512)===55296?(n.charCodeAt(e)-55296)*1024+n.charCodeAt(e+1)-56320+65536:n.charCodeAt(e)};function ki(n){for(var e="",o=0,i;(i=we.xmlReplacer.exec(n))!==null;){var t=i.index,u=n.charCodeAt(t),f=xi.get(u);f!==void 0?(e+=n.substring(o,t)+f,o=t+1):(e+="".concat(n.substring(o,t),"&#x").concat((0,we.getCodePoint)(n,t).toString(16),";"),o=we.xmlReplacer.lastIndex+=+((u&64512)===55296))}return e+n.substr(o)}we.encodeXML=ki;we.escape=ki;function Dr(n,e){return function(i){for(var t,u=0,f="";t=n.exec(i);)u!==t.index&&(f+=i.substring(u,t.index)),f+=e.get(t[0].charCodeAt(0)),u=t.index+1;return f+i.substring(u)}}we.escapeUTF8=Dr(/[&<>'"]/g,xi);we.escapeAttribute=Dr(/["&\u00A0]/g,new Map([[34,"&quot;"],[38,"&amp;"],[160,"&nbsp;"]]));we.escapeText=Dr(/[&<>\u00A0]/g,new Map([[38,"&amp;"],[60,"&lt;"],[62,"&gt;"],[160,"&nbsp;"]]))});var Sr=pe(Ln=>{"use strict";V();var R2=Ln&&Ln.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Ln,"__esModule",{value:!0});Ln.encodeNonAsciiHTML=Ln.encodeHTML=void 0;var O2=R2(vi()),yi=nu(),P2=/[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;function L2(n){return Fi(P2,n)}Ln.encodeHTML=L2;function N2(n){return Fi(yi.xmlReplacer,n)}Ln.encodeNonAsciiHTML=N2;function Fi(n,e){for(var o="",i=0,t;(t=n.exec(e))!==null;){var u=t.index;o+=e.substring(i,u);var f=e.charCodeAt(u),d=O2.default.get(f);if(typeof d=="object"){if(u+1<e.length){var h=e.charCodeAt(u+1),v=typeof d.n=="number"?d.n===h?d.o:void 0:d.n.get(h);if(v!==void 0){o+=v,i=n.lastIndex+=1;continue}}d=d.v}if(d!==void 0)o+=d,i=u+1;else{var D=(0,yi.getCodePoint)(e,u);o+="&#x".concat(D.toString(16),";"),i=n.lastIndex+=+(D!==f)}}return o+e.substr(i)}});var Ci=pe(X=>{"use strict";V();Object.defineProperty(X,"__esModule",{value:!0});X.decodeXMLStrict=X.decodeHTML5Strict=X.decodeHTML4Strict=X.decodeHTML5=X.decodeHTML4=X.decodeHTMLAttribute=X.decodeHTMLStrict=X.decodeHTML=X.decodeXML=X.DecodingMode=X.EntityDecoder=X.encodeHTML5=X.encodeHTML4=X.encodeNonAsciiHTML=X.encodeHTML=X.escapeText=X.escapeAttribute=X.escapeUTF8=X.escape=X.encodeXML=X.encode=X.decodeStrict=X.decode=X.EncodingMode=X.EntityLevel=void 0;var Ar=Mr(),wi=Sr(),tu=nu(),w0;(function(n){n[n.XML=0]="XML",n[n.HTML=1]="HTML"})(w0=X.EntityLevel||(X.EntityLevel={}));var et;(function(n){n[n.UTF8=0]="UTF8",n[n.ASCII=1]="ASCII",n[n.Extensive=2]="Extensive",n[n.Attribute=3]="Attribute",n[n.Text=4]="Text"})(et=X.EncodingMode||(X.EncodingMode={}));function _i(n,e){e===void 0&&(e=w0.XML);var o=typeof e=="number"?e:e.level;if(o===w0.HTML){var i=typeof e=="object"?e.mode:void 0;return(0,Ar.decodeHTML)(n,i)}return(0,Ar.decodeXML)(n)}X.decode=_i;function j2(n,e){var o;e===void 0&&(e=w0.XML);var i=typeof e=="number"?{level:e}:e;return(o=i.mode)!==null&&o!==void 0||(i.mode=Ar.DecodingMode.Strict),_i(n,i)}X.decodeStrict=j2;function Y2(n,e){e===void 0&&(e=w0.XML);var o=typeof e=="number"?{level:e}:e;return o.mode===et.UTF8?(0,tu.escapeUTF8)(n):o.mode===et.Attribute?(0,tu.escapeAttribute)(n):o.mode===et.Text?(0,tu.escapeText)(n):o.level===w0.HTML?o.mode===et.ASCII?(0,wi.encodeNonAsciiHTML)(n):(0,wi.encodeHTML)(n):(0,tu.encodeXML)(n)}X.encode=Y2;var nt=nu();Object.defineProperty(X,"encodeXML",{enumerable:!0,get:function(){return nt.encodeXML}});Object.defineProperty(X,"escape",{enumerable:!0,get:function(){return nt.escape}});Object.defineProperty(X,"escapeUTF8",{enumerable:!0,get:function(){return nt.escapeUTF8}});Object.defineProperty(X,"escapeAttribute",{enumerable:!0,get:function(){return nt.escapeAttribute}});Object.defineProperty(X,"escapeText",{enumerable:!0,get:function(){return nt.escapeText}});var uu=Sr();Object.defineProperty(X,"encodeHTML",{enumerable:!0,get:function(){return uu.encodeHTML}});Object.defineProperty(X,"encodeNonAsciiHTML",{enumerable:!0,get:function(){return uu.encodeNonAsciiHTML}});Object.defineProperty(X,"encodeHTML4",{enumerable:!0,get:function(){return uu.encodeHTML}});Object.defineProperty(X,"encodeHTML5",{enumerable:!0,get:function(){return uu.encodeHTML}});var Qe=Mr();Object.defineProperty(X,"EntityDecoder",{enumerable:!0,get:function(){return Qe.EntityDecoder}});Object.defineProperty(X,"DecodingMode",{enumerable:!0,get:function(){return Qe.DecodingMode}});Object.defineProperty(X,"decodeXML",{enumerable:!0,get:function(){return Qe.decodeXML}});Object.defineProperty(X,"decodeHTML",{enumerable:!0,get:function(){return Qe.decodeHTML}});Object.defineProperty(X,"decodeHTMLStrict",{enumerable:!0,get:function(){return Qe.decodeHTMLStrict}});Object.defineProperty(X,"decodeHTMLAttribute",{enumerable:!0,get:function(){return Qe.decodeHTMLAttribute}});Object.defineProperty(X,"decodeHTML4",{enumerable:!0,get:function(){return Qe.decodeHTML}});Object.defineProperty(X,"decodeHTML5",{enumerable:!0,get:function(){return Qe.decodeHTML}});Object.defineProperty(X,"decodeHTML4Strict",{enumerable:!0,get:function(){return Qe.decodeHTMLStrict}});Object.defineProperty(X,"decodeHTML5Strict",{enumerable:!0,get:function(){return Qe.decodeHTMLStrict}});Object.defineProperty(X,"decodeXMLStrict",{enumerable:!0,get:function(){return Qe.decodeXML}})});var Di=pe((p3,zi)=>{"use strict";V();var ru=kr();function B2(n){let e={};n=n||{},e.src_Any=ru.Any.source,e.src_Cc=ru.Cc.source,e.src_Z=ru.Z.source,e.src_P=ru.P.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");let o="[><\uFF5C]";return e.src_pseudo_letter="(?:(?!"+o+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+o+"|"+e.src_ZPCc+")(?!"+(n["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+o+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(n["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+o+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}function Tr(n){return Array.prototype.slice.call(arguments,1).forEach(function(o){o&&Object.keys(o).forEach(function(i){n[i]=o[i]})}),n}function au(n){return Object.prototype.toString.call(n)}function U2(n){return au(n)==="[object String]"}function H2(n){return au(n)==="[object Object]"}function $2(n){return au(n)==="[object RegExp]"}function Ei(n){return au(n)==="[object Function]"}function W2(n){return n.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var Mi={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function V2(n){return Object.keys(n||{}).reduce(function(e,o){return e||Mi.hasOwnProperty(o)},!1)}var G2={"http:":{validate:function(n,e,o){let i=n.slice(e);return o.re.http||(o.re.http=new RegExp("^\\/\\/"+o.re.src_auth+o.re.src_host_port_strict+o.re.src_path,"i")),o.re.http.test(i)?i.match(o.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(n,e,o){let i=n.slice(e);return o.re.no_http||(o.re.no_http=new RegExp("^"+o.re.src_auth+"(?:localhost|(?:(?:"+o.re.src_domain+")\\.)+"+o.re.src_domain_root+")"+o.re.src_port+o.re.src_host_terminator+o.re.src_path,"i")),o.re.no_http.test(i)?e>=3&&n[e-3]===":"||e>=3&&n[e-3]==="/"?0:i.match(o.re.no_http)[0].length:0}},"mailto:":{validate:function(n,e,o){let i=n.slice(e);return o.re.mailto||(o.re.mailto=new RegExp("^"+o.re.src_email_name+"@"+o.re.src_host_strict,"i")),o.re.mailto.test(i)?i.match(o.re.mailto)[0].length:0}}},Z2="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",X2="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function J2(n){n.__index__=-1,n.__text_cache__=""}function Q2(n){return function(e,o){let i=e.slice(o);return n.test(i)?i.match(n)[0].length:0}}function qi(){return function(n,e){e.normalize(n)}}function iu(n){let e=n.re=B2(n.__opts__),o=n.__tlds__.slice();n.onCompile(),n.__tlds_replaced__||o.push(Z2),o.push(e.src_xn),e.src_tlds=o.join("|");function i(d){return d.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(i(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(i(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(i(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(i(e.tpl_host_fuzzy_test),"i");let t=[];n.__compiled__={};function u(d,h){throw new Error('(LinkifyIt) Invalid schema "'+d+'": '+h)}Object.keys(n.__schemas__).forEach(function(d){let h=n.__schemas__[d];if(h===null)return;let v={validate:null,link:null};if(n.__compiled__[d]=v,H2(h)){$2(h.validate)?v.validate=Q2(h.validate):Ei(h.validate)?v.validate=h.validate:u(d,h),Ei(h.normalize)?v.normalize=h.normalize:h.normalize?u(d,h):v.normalize=qi();return}if(U2(h)){t.push(d);return}u(d,h)}),t.forEach(function(d){n.__compiled__[n.__schemas__[d]]&&(n.__compiled__[d].validate=n.__compiled__[n.__schemas__[d]].validate,n.__compiled__[d].normalize=n.__compiled__[n.__schemas__[d]].normalize)}),n.__compiled__[""]={validate:null,normalize:qi()};let f=Object.keys(n.__compiled__).filter(function(d){return d.length>0&&n.__compiled__[d]}).map(W2).join("|");n.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+f+")","i"),n.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+f+")","ig"),n.re.schema_at_start=RegExp("^"+n.re.schema_search.source,"i"),n.re.pretest=RegExp("("+n.re.schema_test.source+")|("+n.re.host_fuzzy_test.source+")|@","i"),J2(n)}function K2(n,e){let o=n.__index__,i=n.__last_index__,t=n.__text_cache__.slice(o,i);this.schema=n.__schema__.toLowerCase(),this.index=o+e,this.lastIndex=i+e,this.raw=t,this.text=t,this.url=t}function Ir(n,e){let o=new K2(n,e);return n.__compiled__[o.schema].normalize(o,n),o}function Le(n,e){if(!(this instanceof Le))return new Le(n,e);e||V2(n)&&(e=n,n={}),this.__opts__=Tr({},Mi,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Tr({},G2,n),this.__compiled__={},this.__tlds__=X2,this.__tlds_replaced__=!1,this.re={},iu(this)}Le.prototype.add=function(e,o){return this.__schemas__[e]=o,iu(this),this};Le.prototype.set=function(e){return this.__opts__=Tr(this.__opts__,e),this};Le.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let o,i,t,u,f,d,h,v,D;if(this.re.schema_test.test(e)){for(h=this.re.schema_search,h.lastIndex=0;(o=h.exec(e))!==null;)if(u=this.testSchemaAt(e,o[2],h.lastIndex),u){this.__schema__=o[2],this.__index__=o.index+o[1].length,this.__last_index__=o.index+o[0].length+u;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(v=e.search(this.re.host_fuzzy_test),v>=0&&(this.__index__<0||v<this.__index__)&&(i=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(f=i.index+i[1].length,(this.__index__<0||f<this.__index__)&&(this.__schema__="",this.__index__=f,this.__last_index__=i.index+i[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(D=e.indexOf("@"),D>=0&&(t=e.match(this.re.email_fuzzy))!==null&&(f=t.index+t[1].length,d=t.index+t[0].length,(this.__index__<0||f<this.__index__||f===this.__index__&&d>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=f,this.__last_index__=d))),this.__index__>=0};Le.prototype.pretest=function(e){return this.re.pretest.test(e)};Le.prototype.testSchemaAt=function(e,o,i){return this.__compiled__[o.toLowerCase()]?this.__compiled__[o.toLowerCase()].validate(e,i,this):0};Le.prototype.match=function(e){let o=[],i=0;this.__index__>=0&&this.__text_cache__===e&&(o.push(Ir(this,i)),i=this.__last_index__);let t=i?e.slice(i):e;for(;this.test(t);)o.push(Ir(this,i)),t=t.slice(this.__last_index__),i+=this.__last_index__;return o.length?o:null};Le.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;let o=this.re.schema_at_start.exec(e);if(!o)return null;let i=this.testSchemaAt(e,o[2],o[0].length);return i?(this.__schema__=o[2],this.__index__=o.index+o[1].length,this.__last_index__=o.index+o[0].length+i,Ir(this,0)):null};Le.prototype.tlds=function(e,o){return e=Array.isArray(e)?e:[e],o?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(i,t,u){return i!==u[t-1]}).reverse(),iu(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,iu(this),this)};Le.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};Le.prototype.onCompile=function(){};zi.exports=Le});var Li=pe((h3,Pi)=>{"use strict";V();var el=/^xn--/,nl=/[^\0-\x7F]/,tl=/[\x2E\u3002\uFF0E\uFF61]/g,ul={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Rr=35,on=Math.floor,Or=String.fromCharCode;function Nn(n){throw new RangeError(ul[n])}function rl(n,e){let o=[],i=n.length;for(;i--;)o[i]=e(n[i]);return o}function Ai(n,e){let o=n.split("@"),i="";o.length>1&&(i=o[0]+"@",n=o[1]),n=n.replace(tl,".");let t=n.split("."),u=rl(t,e).join(".");return i+u}function Ti(n){let e=[],o=0,i=n.length;for(;o<i;){let t=n.charCodeAt(o++);if(t>=55296&&t<=56319&&o<i){let u=n.charCodeAt(o++);(u&64512)==56320?e.push(((t&1023)<<10)+(u&1023)+65536):(e.push(t),o--)}else e.push(t)}return e}var il=n=>String.fromCodePoint(...n),al=function(n){return n>=48&&n<58?26+(n-48):n>=65&&n<91?n-65:n>=97&&n<123?n-97:36},Si=function(n,e){return n+22+75*(n<26)-((e!=0)<<5)},Ii=function(n,e,o){let i=0;for(n=o?on(n/700):n>>1,n+=on(n/e);n>Rr*26>>1;i+=36)n=on(n/Rr);return on(i+(Rr+1)*n/(n+38))},Ri=function(n){let e=[],o=n.length,i=0,t=128,u=72,f=n.lastIndexOf("-");f<0&&(f=0);for(let d=0;d<f;++d)n.charCodeAt(d)>=128&&Nn("not-basic"),e.push(n.charCodeAt(d));for(let d=f>0?f+1:0;d<o;){let h=i;for(let D=1,E=36;;E+=36){d>=o&&Nn("invalid-input");let M=al(n.charCodeAt(d++));M>=36&&Nn("invalid-input"),M>on((2147483647-i)/D)&&Nn("overflow"),i+=M*D;let w=E<=u?1:E>=u+26?26:E-u;if(M<w)break;let x=36-w;D>on(2147483647/x)&&Nn("overflow"),D*=x}let v=e.length+1;u=Ii(i-h,v,h==0),on(i/v)>2147483647-t&&Nn("overflow"),t+=on(i/v),i%=v,e.splice(i++,0,t)}return String.fromCodePoint(...e)},Oi=function(n){let e=[];n=Ti(n);let o=n.length,i=128,t=0,u=72;for(let h of n)h<128&&e.push(Or(h));let f=e.length,d=f;for(f&&e.push("-");d<o;){let h=2147483647;for(let D of n)D>=i&&D<h&&(h=D);let v=d+1;h-i>on((2147483647-t)/v)&&Nn("overflow"),t+=(h-i)*v,i=h;for(let D of n)if(D<i&&++t>2147483647&&Nn("overflow"),D===i){let E=t;for(let M=36;;M+=36){let w=M<=u?1:M>=u+26?26:M-u;if(E<w)break;let x=E-w,m=36-w;e.push(Or(Si(w+x%m,0))),E=on(x/m)}e.push(Or(Si(E,0))),u=Ii(t,v,d===f),t=0,++d}++t,++i}return e.join("")},ol=function(n){return Ai(n,function(e){return el.test(e)?Ri(e.slice(4).toLowerCase()):e})},sl=function(n){return Ai(n,function(e){return nl.test(e)?"xn--"+Oi(e):e})},ll={version:"2.3.1",ucs2:{decode:Ti,encode:il},decode:Ri,encode:Oi,toASCII:sl,toUnicode:ol};Pi.exports=ll});var aa=pe((m3,ia)=>{"use strict";V();var cl=oi(),dl=kr(),Vi=Ci(),fl=Di(),Gi=Li();function Zi(n){var e=Object.create(null);return n&&Object.keys(n).forEach(function(o){if(o!=="default"){var i=Object.getOwnPropertyDescriptor(n,o);Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:function(){return n[o]}})}}),e.default=n,Object.freeze(e)}var jn=Zi(cl),Yr=Zi(dl);function pl(n){return Object.prototype.toString.call(n)}function Br(n){return pl(n)==="[object String]"}var gl=Object.prototype.hasOwnProperty;function hl(n,e){return gl.call(n,e)}function cu(n){return Array.prototype.slice.call(arguments,1).forEach(function(o){if(o){if(typeof o!="object")throw new TypeError(o+"must be object");Object.keys(o).forEach(function(i){n[i]=o[i]})}}),n}function Xi(n,e,o){return[].concat(n.slice(0,e),o,n.slice(e+1))}function Ur(n){return!(n>=55296&&n<=57343||n>=64976&&n<=65007||(n&65535)===65535||(n&65535)===65534||n>=0&&n<=8||n===11||n>=14&&n<=31||n>=127&&n<=159||n>1114111)}function lu(n){if(n>65535){n-=65536;let e=55296+(n>>10),o=56320+(n&1023);return String.fromCharCode(e,o)}return String.fromCharCode(n)}var Ji=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,bl=/&([a-z#][a-z0-9]{1,31});/gi,ml=new RegExp(Ji.source+"|"+bl.source,"gi"),vl=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function xl(n,e){if(e.charCodeAt(0)===35&&vl.test(e)){let i=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10);return Ur(i)?lu(i):n}let o=Vi.decodeHTML(n);return o!==n?o:n}function kl(n){return n.indexOf("\\")<0?n:n.replace(Ji,"$1")}function C0(n){return n.indexOf("\\")<0&&n.indexOf("&")<0?n:n.replace(ml,function(e,o,i){return o||xl(e,i)})}var yl=/[&<>"]/,Fl=/[&<>"]/g,wl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function _l(n){return wl[n]}function Yn(n){return yl.test(n)?n.replace(Fl,_l):n}var Cl=/[.?*+^$[\]\\(){}|-]/g;function El(n){return n.replace(Cl,"\\$&")}function be(n){switch(n){case 9:case 32:return!0}return!1}function tt(n){if(n>=8192&&n<=8202)return!0;switch(n){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function ut(n){return Yr.P.test(n)||Yr.S.test(n)}function rt(n){switch(n){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function du(n){return n=n.trim().replace(/\s+/g," "),"\u1E9E".toLowerCase()==="\u1E7E"&&(n=n.replace(/ẞ/g,"\xDF")),n.toLowerCase().toUpperCase()}var ql={mdurl:jn,ucmicro:Yr},Ml=Object.freeze({__proto__:null,arrayReplaceAt:Xi,assign:cu,escapeHtml:Yn,escapeRE:El,fromCodePoint:lu,has:hl,isMdAsciiPunct:rt,isPunctChar:ut,isSpace:be,isString:Br,isValidEntityCode:Ur,isWhiteSpace:tt,lib:ql,normalizeReference:du,unescapeAll:C0,unescapeMd:kl});function zl(n,e,o){let i,t,u,f,d=n.posMax,h=n.pos;for(n.pos=e+1,i=1;n.pos<d;){if(u=n.src.charCodeAt(n.pos),u===93&&(i--,i===0)){t=!0;break}if(f=n.pos,n.md.inline.skipToken(n),u===91){if(f===n.pos-1)i++;else if(o)return n.pos=h,-1}}let v=-1;return t&&(v=n.pos),n.pos=h,v}function Dl(n,e,o){let i,t=e,u={ok:!1,pos:0,str:""};if(n.charCodeAt(t)===60){for(t++;t<o;){if(i=n.charCodeAt(t),i===10||i===60)return u;if(i===62)return u.pos=t+1,u.str=C0(n.slice(e+1,t)),u.ok=!0,u;if(i===92&&t+1<o){t+=2;continue}t++}return u}let f=0;for(;t<o&&(i=n.charCodeAt(t),!(i===32||i<32||i===127));){if(i===92&&t+1<o){if(n.charCodeAt(t+1)===32)break;t+=2;continue}if(i===40&&(f++,f>32))return u;if(i===41){if(f===0)break;f--}t++}return e===t||f!==0||(u.str=C0(n.slice(e,t)),u.pos=t,u.ok=!0),u}function Sl(n,e,o,i){let t,u=e,f={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(i)f.str=i.str,f.marker=i.marker;else{if(u>=o)return f;let d=n.charCodeAt(u);if(d!==34&&d!==39&&d!==40)return f;e++,u++,d===40&&(d=41),f.marker=d}for(;u<o;){if(t=n.charCodeAt(u),t===f.marker)return f.pos=u+1,f.str+=C0(n.slice(e,u)),f.ok=!0,f;if(t===40&&f.marker===41)return f;t===92&&u+1<o&&u++,u++}return f.can_continue=!0,f.str+=C0(n.slice(e,u)),f}var Al=Object.freeze({__proto__:null,parseLinkDestination:Dl,parseLinkLabel:zl,parseLinkTitle:Sl}),sn={};sn.code_inline=function(n,e,o,i,t){let u=n[e];return"<code"+t.renderAttrs(u)+">"+Yn(u.content)+"</code>"};sn.code_block=function(n,e,o,i,t){let u=n[e];return"<pre"+t.renderAttrs(u)+"><code>"+Yn(n[e].content)+`</code></pre>
`};sn.fence=function(n,e,o,i,t){let u=n[e],f=u.info?C0(u.info).trim():"",d="",h="";if(f){let D=f.split(/(\s+)/g);d=D[0],h=D.slice(2).join("")}let v;if(o.highlight?v=o.highlight(u.content,d,h)||Yn(u.content):v=Yn(u.content),v.indexOf("<pre")===0)return v+`
`;if(f){let D=u.attrIndex("class"),E=u.attrs?u.attrs.slice():[];D<0?E.push(["class",o.langPrefix+d]):(E[D]=E[D].slice(),E[D][1]+=" "+o.langPrefix+d);let M={attrs:E};return`<pre><code${t.renderAttrs(M)}>${v}</code></pre>
`}return`<pre><code${t.renderAttrs(u)}>${v}</code></pre>
`};sn.image=function(n,e,o,i,t){let u=n[e];return u.attrs[u.attrIndex("alt")][1]=t.renderInlineAsText(u.children,o,i),t.renderToken(n,e,o)};sn.hardbreak=function(n,e,o){return o.xhtmlOut?`<br />
`:`<br>
`};sn.softbreak=function(n,e,o){return o.breaks?o.xhtmlOut?`<br />
`:`<br>
`:`
`};sn.text=function(n,e){return Yn(n[e].content)};sn.html_block=function(n,e){return n[e].content};sn.html_inline=function(n,e){return n[e].content};function E0(){this.rules=cu({},sn)}E0.prototype.renderAttrs=function(e){let o,i,t;if(!e.attrs)return"";for(t="",o=0,i=e.attrs.length;o<i;o++)t+=" "+Yn(e.attrs[o][0])+'="'+Yn(e.attrs[o][1])+'"';return t};E0.prototype.renderToken=function(e,o,i){let t=e[o],u="";if(t.hidden)return"";t.block&&t.nesting!==-1&&o&&e[o-1].hidden&&(u+=`
`),u+=(t.nesting===-1?"</":"<")+t.tag,u+=this.renderAttrs(t),t.nesting===0&&i.xhtmlOut&&(u+=" /");let f=!1;if(t.block&&(f=!0,t.nesting===1&&o+1<e.length)){let d=e[o+1];(d.type==="inline"||d.hidden||d.nesting===-1&&d.tag===t.tag)&&(f=!1)}return u+=f?`>
`:">",u};E0.prototype.renderInline=function(n,e,o){let i="",t=this.rules;for(let u=0,f=n.length;u<f;u++){let d=n[u].type;typeof t[d]<"u"?i+=t[d](n,u,e,o,this):i+=this.renderToken(n,u,e)}return i};E0.prototype.renderInlineAsText=function(n,e,o){let i="";for(let t=0,u=n.length;t<u;t++)switch(n[t].type){case"text":i+=n[t].content;break;case"image":i+=this.renderInlineAsText(n[t].children,e,o);break;case"html_inline":case"html_block":i+=n[t].content;break;case"softbreak":case"hardbreak":i+=`
`;break}return i};E0.prototype.render=function(n,e,o){let i="",t=this.rules;for(let u=0,f=n.length;u<f;u++){let d=n[u].type;d==="inline"?i+=this.renderInline(n[u].children,e,o):typeof t[d]<"u"?i+=t[d](n,u,e,o,this):i+=this.renderToken(n,u,e,o)}return i};function Re(){this.__rules__=[],this.__cache__=null}Re.prototype.__find__=function(n){for(let e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===n)return e;return-1};Re.prototype.__compile__=function(){let n=this,e=[""];n.__rules__.forEach(function(o){o.enabled&&o.alt.forEach(function(i){e.indexOf(i)<0&&e.push(i)})}),n.__cache__={},e.forEach(function(o){n.__cache__[o]=[],n.__rules__.forEach(function(i){i.enabled&&(o&&i.alt.indexOf(o)<0||n.__cache__[o].push(i.fn))})})};Re.prototype.at=function(n,e,o){let i=this.__find__(n),t=o||{};if(i===-1)throw new Error("Parser rule not found: "+n);this.__rules__[i].fn=e,this.__rules__[i].alt=t.alt||[],this.__cache__=null};Re.prototype.before=function(n,e,o,i){let t=this.__find__(n),u=i||{};if(t===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(t,0,{name:e,enabled:!0,fn:o,alt:u.alt||[]}),this.__cache__=null};Re.prototype.after=function(n,e,o,i){let t=this.__find__(n),u=i||{};if(t===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(t+1,0,{name:e,enabled:!0,fn:o,alt:u.alt||[]}),this.__cache__=null};Re.prototype.push=function(n,e,o){let i=o||{};this.__rules__.push({name:n,enabled:!0,fn:e,alt:i.alt||[]}),this.__cache__=null};Re.prototype.enable=function(n,e){Array.isArray(n)||(n=[n]);let o=[];return n.forEach(function(i){let t=this.__find__(i);if(t<0){if(e)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[t].enabled=!0,o.push(i)},this),this.__cache__=null,o};Re.prototype.enableOnly=function(n,e){Array.isArray(n)||(n=[n]),this.__rules__.forEach(function(o){o.enabled=!1}),this.enable(n,e)};Re.prototype.disable=function(n,e){Array.isArray(n)||(n=[n]);let o=[];return n.forEach(function(i){let t=this.__find__(i);if(t<0){if(e)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[t].enabled=!1,o.push(i)},this),this.__cache__=null,o};Re.prototype.getRules=function(n){return this.__cache__===null&&this.__compile__(),this.__cache__[n]||[]};function Ke(n,e,o){this.type=n,this.tag=e,this.attrs=null,this.map=null,this.nesting=o,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Ke.prototype.attrIndex=function(e){if(!this.attrs)return-1;let o=this.attrs;for(let i=0,t=o.length;i<t;i++)if(o[i][0]===e)return i;return-1};Ke.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};Ke.prototype.attrSet=function(e,o){let i=this.attrIndex(e),t=[e,o];i<0?this.attrPush(t):this.attrs[i]=t};Ke.prototype.attrGet=function(e){let o=this.attrIndex(e),i=null;return o>=0&&(i=this.attrs[o][1]),i};Ke.prototype.attrJoin=function(e,o){let i=this.attrIndex(e);i<0?this.attrPush([e,o]):this.attrs[i][1]=this.attrs[i][1]+" "+o};function Qi(n,e,o){this.src=n,this.env=o,this.tokens=[],this.inlineMode=!1,this.md=e}Qi.prototype.Token=Ke;var Tl=/\r\n?|\n/g,Il=/\0/g;function Rl(n){let e;e=n.src.replace(Tl,`
`),e=e.replace(Il,"\uFFFD"),n.src=e}function Ol(n){let e;n.inlineMode?(e=new n.Token("inline","",0),e.content=n.src,e.map=[0,1],e.children=[],n.tokens.push(e)):n.md.block.parse(n.src,n.md,n.env,n.tokens)}function Pl(n){let e=n.tokens;for(let o=0,i=e.length;o<i;o++){let t=e[o];t.type==="inline"&&n.md.inline.parse(t.content,n.md,n.env,t.children)}}function Ll(n){return/^<a[>\s]/i.test(n)}function Nl(n){return/^<\/a\s*>/i.test(n)}function jl(n){let e=n.tokens;if(n.md.options.linkify)for(let o=0,i=e.length;o<i;o++){if(e[o].type!=="inline"||!n.md.linkify.pretest(e[o].content))continue;let t=e[o].children,u=0;for(let f=t.length-1;f>=0;f--){let d=t[f];if(d.type==="link_close"){for(f--;t[f].level!==d.level&&t[f].type!=="link_open";)f--;continue}if(d.type==="html_inline"&&(Ll(d.content)&&u>0&&u--,Nl(d.content)&&u++),!(u>0)&&d.type==="text"&&n.md.linkify.test(d.content)){let h=d.content,v=n.md.linkify.match(h),D=[],E=d.level,M=0;v.length>0&&v[0].index===0&&f>0&&t[f-1].type==="text_special"&&(v=v.slice(1));for(let w=0;w<v.length;w++){let x=v[w].url,m=n.md.normalizeLink(x);if(!n.md.validateLink(m))continue;let P=v[w].text;v[w].schema?v[w].schema==="mailto:"&&!/^mailto:/i.test(P)?P=n.md.normalizeLinkText("mailto:"+P).replace(/^mailto:/,""):P=n.md.normalizeLinkText(P):P=n.md.normalizeLinkText("http://"+P).replace(/^http:\/\//,"");let U=v[w].index;if(U>M){let A=new n.Token("text","",0);A.content=h.slice(M,U),A.level=E,D.push(A)}let R=new n.Token("link_open","a",1);R.attrs=[["href",m]],R.level=E++,R.markup="linkify",R.info="auto",D.push(R);let I=new n.Token("text","",0);I.content=P,I.level=E,D.push(I);let k=new n.Token("link_close","a",-1);k.level=--E,k.markup="linkify",k.info="auto",D.push(k),M=v[w].lastIndex}if(M<h.length){let w=new n.Token("text","",0);w.content=h.slice(M),w.level=E,D.push(w)}e[o].children=t=Xi(t,f,D)}}}}var Ki=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Yl=/\((c|tm|r)\)/i,Bl=/\((c|tm|r)\)/ig,Ul={c:"\xA9",r:"\xAE",tm:"\u2122"};function Hl(n,e){return Ul[e.toLowerCase()]}function $l(n){let e=0;for(let o=n.length-1;o>=0;o--){let i=n[o];i.type==="text"&&!e&&(i.content=i.content.replace(Bl,Hl)),i.type==="link_open"&&i.info==="auto"&&e--,i.type==="link_close"&&i.info==="auto"&&e++}}function Wl(n){let e=0;for(let o=n.length-1;o>=0;o--){let i=n[o];i.type==="text"&&!e&&Ki.test(i.content)&&(i.content=i.content.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1\u2014").replace(/(^|\s)--(?=\s|$)/mg,"$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1\u2013")),i.type==="link_open"&&i.info==="auto"&&e--,i.type==="link_close"&&i.info==="auto"&&e++}}function Vl(n){let e;if(n.md.options.typographer)for(e=n.tokens.length-1;e>=0;e--)n.tokens[e].type==="inline"&&(Yl.test(n.tokens[e].content)&&$l(n.tokens[e].children),Ki.test(n.tokens[e].content)&&Wl(n.tokens[e].children))}var Gl=/['"]/,Ni=/['"]/g,ji="\u2019";function ou(n,e,o){return n.slice(0,e)+o+n.slice(e+1)}function Zl(n,e){let o,i=[];for(let t=0;t<n.length;t++){let u=n[t],f=n[t].level;for(o=i.length-1;o>=0&&!(i[o].level<=f);o--);if(i.length=o+1,u.type!=="text")continue;let d=u.content,h=0,v=d.length;e:for(;h<v;){Ni.lastIndex=h;let D=Ni.exec(d);if(!D)break;let E=!0,M=!0;h=D.index+1;let w=D[0]==="'",x=32;if(D.index-1>=0)x=d.charCodeAt(D.index-1);else for(o=t-1;o>=0&&!(n[o].type==="softbreak"||n[o].type==="hardbreak");o--)if(n[o].content){x=n[o].content.charCodeAt(n[o].content.length-1);break}let m=32;if(h<v)m=d.charCodeAt(h);else for(o=t+1;o<n.length&&!(n[o].type==="softbreak"||n[o].type==="hardbreak");o++)if(n[o].content){m=n[o].content.charCodeAt(0);break}let P=rt(x)||ut(String.fromCharCode(x)),U=rt(m)||ut(String.fromCharCode(m)),R=tt(x),I=tt(m);if(I?E=!1:U&&(R||P||(E=!1)),R?M=!1:P&&(I||U||(M=!1)),m===34&&D[0]==='"'&&x>=48&&x<=57&&(M=E=!1),E&&M&&(E=P,M=U),!E&&!M){w&&(u.content=ou(u.content,D.index,ji));continue}if(M)for(o=i.length-1;o>=0;o--){let k=i[o];if(i[o].level<f)break;if(k.single===w&&i[o].level===f){k=i[o];let A,q;w?(A=e.md.options.quotes[2],q=e.md.options.quotes[3]):(A=e.md.options.quotes[0],q=e.md.options.quotes[1]),u.content=ou(u.content,D.index,q),n[k.token].content=ou(n[k.token].content,k.pos,A),h+=q.length-1,k.token===t&&(h+=A.length-1),d=u.content,v=d.length,i.length=o;continue e}}E?i.push({token:t,pos:D.index,single:w,level:f}):M&&w&&(u.content=ou(u.content,D.index,ji))}}}function Xl(n){if(n.md.options.typographer)for(let e=n.tokens.length-1;e>=0;e--)n.tokens[e].type!=="inline"||!Gl.test(n.tokens[e].content)||Zl(n.tokens[e].children,n)}function Jl(n){let e,o,i=n.tokens,t=i.length;for(let u=0;u<t;u++){if(i[u].type!=="inline")continue;let f=i[u].children,d=f.length;for(e=0;e<d;e++)f[e].type==="text_special"&&(f[e].type="text");for(e=o=0;e<d;e++)f[e].type==="text"&&e+1<d&&f[e+1].type==="text"?f[e+1].content=f[e].content+f[e+1].content:(e!==o&&(f[o]=f[e]),o++);e!==o&&(f.length=o)}}var Pr=[["normalize",Rl],["block",Ol],["inline",Pl],["linkify",jl],["replacements",Vl],["smartquotes",Xl],["text_join",Jl]];function Hr(){this.ruler=new Re;for(let n=0;n<Pr.length;n++)this.ruler.push(Pr[n][0],Pr[n][1])}Hr.prototype.process=function(n){let e=this.ruler.getRules("");for(let o=0,i=e.length;o<i;o++)e[o](n)};Hr.prototype.State=Qi;function ln(n,e,o,i){this.src=n,this.md=e,this.env=o,this.tokens=i,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;let t=this.src;for(let u=0,f=0,d=0,h=0,v=t.length,D=!1;f<v;f++){let E=t.charCodeAt(f);if(!D)if(be(E)){d++,E===9?h+=4-h%4:h++;continue}else D=!0;(E===10||f===v-1)&&(E!==10&&f++,this.bMarks.push(u),this.eMarks.push(f),this.tShift.push(d),this.sCount.push(h),this.bsCount.push(0),D=!1,d=0,h=0,u=f+1)}this.bMarks.push(t.length),this.eMarks.push(t.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}ln.prototype.push=function(n,e,o){let i=new Ke(n,e,o);return i.block=!0,o<0&&this.level--,i.level=this.level,o>0&&this.level++,this.tokens.push(i),i};ln.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};ln.prototype.skipEmptyLines=function(e){for(let o=this.lineMax;e<o&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};ln.prototype.skipSpaces=function(e){for(let o=this.src.length;e<o;e++){let i=this.src.charCodeAt(e);if(!be(i))break}return e};ln.prototype.skipSpacesBack=function(e,o){if(e<=o)return e;for(;e>o;)if(!be(this.src.charCodeAt(--e)))return e+1;return e};ln.prototype.skipChars=function(e,o){for(let i=this.src.length;e<i&&this.src.charCodeAt(e)===o;e++);return e};ln.prototype.skipCharsBack=function(e,o,i){if(e<=i)return e;for(;e>i;)if(o!==this.src.charCodeAt(--e))return e+1;return e};ln.prototype.getLines=function(e,o,i,t){if(e>=o)return"";let u=new Array(o-e);for(let f=0,d=e;d<o;d++,f++){let h=0,v=this.bMarks[d],D=v,E;for(d+1<o||t?E=this.eMarks[d]+1:E=this.eMarks[d];D<E&&h<i;){let M=this.src.charCodeAt(D);if(be(M))M===9?h+=4-(h+this.bsCount[d])%4:h++;else if(D-v<this.tShift[d])h++;else break;D++}h>i?u[f]=new Array(h-i+1).join(" ")+this.src.slice(D,E):u[f]=this.src.slice(D,E)}return u.join("")};ln.prototype.Token=Ke;var Ql=65536;function Lr(n,e){let o=n.bMarks[e]+n.tShift[e],i=n.eMarks[e];return n.src.slice(o,i)}function Yi(n){let e=[],o=n.length,i=0,t=n.charCodeAt(i),u=!1,f=0,d="";for(;i<o;)t===124&&(u?(d+=n.substring(f,i-1),f=i):(e.push(d+n.substring(f,i)),d="",f=i+1)),u=t===92,i++,t=n.charCodeAt(i);return e.push(d+n.substring(f)),e}function Kl(n,e,o,i){if(e+2>o)return!1;let t=e+1;if(n.sCount[t]<n.blkIndent||n.sCount[t]-n.blkIndent>=4)return!1;let u=n.bMarks[t]+n.tShift[t];if(u>=n.eMarks[t])return!1;let f=n.src.charCodeAt(u++);if(f!==124&&f!==45&&f!==58||u>=n.eMarks[t])return!1;let d=n.src.charCodeAt(u++);if(d!==124&&d!==45&&d!==58&&!be(d)||f===45&&be(d))return!1;for(;u<n.eMarks[t];){let k=n.src.charCodeAt(u);if(k!==124&&k!==45&&k!==58&&!be(k))return!1;u++}let h=Lr(n,e+1),v=h.split("|"),D=[];for(let k=0;k<v.length;k++){let A=v[k].trim();if(!A){if(k===0||k===v.length-1)continue;return!1}if(!/^:?-+:?$/.test(A))return!1;A.charCodeAt(A.length-1)===58?D.push(A.charCodeAt(0)===58?"center":"right"):A.charCodeAt(0)===58?D.push("left"):D.push("")}if(h=Lr(n,e).trim(),h.indexOf("|")===-1||n.sCount[e]-n.blkIndent>=4)return!1;v=Yi(h),v.length&&v[0]===""&&v.shift(),v.length&&v[v.length-1]===""&&v.pop();let E=v.length;if(E===0||E!==D.length)return!1;if(i)return!0;let M=n.parentType;n.parentType="table";let w=n.md.block.ruler.getRules("blockquote"),x=n.push("table_open","table",1),m=[e,0];x.map=m;let P=n.push("thead_open","thead",1);P.map=[e,e+1];let U=n.push("tr_open","tr",1);U.map=[e,e+1];for(let k=0;k<v.length;k++){let A=n.push("th_open","th",1);D[k]&&(A.attrs=[["style","text-align:"+D[k]]]);let q=n.push("inline","",0);q.content=v[k].trim(),q.children=[],n.push("th_close","th",-1)}n.push("tr_close","tr",-1),n.push("thead_close","thead",-1);let R,I=0;for(t=e+2;t<o&&!(n.sCount[t]<n.blkIndent);t++){let k=!1;for(let q=0,Z=w.length;q<Z;q++)if(w[q](n,t,o,!0)){k=!0;break}if(k||(h=Lr(n,t).trim(),!h)||n.sCount[t]-n.blkIndent>=4||(v=Yi(h),v.length&&v[0]===""&&v.shift(),v.length&&v[v.length-1]===""&&v.pop(),I+=E-v.length,I>Ql))break;if(t===e+2){let q=n.push("tbody_open","tbody",1);q.map=R=[e+2,0]}let A=n.push("tr_open","tr",1);A.map=[t,t+1];for(let q=0;q<E;q++){let Z=n.push("td_open","td",1);D[q]&&(Z.attrs=[["style","text-align:"+D[q]]]);let J=n.push("inline","",0);J.content=v[q]?v[q].trim():"",J.children=[],n.push("td_close","td",-1)}n.push("tr_close","tr",-1)}return R&&(n.push("tbody_close","tbody",-1),R[1]=t),n.push("table_close","table",-1),m[1]=t,n.parentType=M,n.line=t,!0}function ec(n,e,o){if(n.sCount[e]-n.blkIndent<4)return!1;let i=e+1,t=i;for(;i<o;){if(n.isEmpty(i)){i++;continue}if(n.sCount[i]-n.blkIndent>=4){i++,t=i;continue}break}n.line=t;let u=n.push("code_block","code",0);return u.content=n.getLines(e,t,4+n.blkIndent,!1)+`
`,u.map=[e,n.line],!0}function nc(n,e,o,i){let t=n.bMarks[e]+n.tShift[e],u=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4||t+3>u)return!1;let f=n.src.charCodeAt(t);if(f!==126&&f!==96)return!1;let d=t;t=n.skipChars(t,f);let h=t-d;if(h<3)return!1;let v=n.src.slice(d,t),D=n.src.slice(t,u);if(f===96&&D.indexOf(String.fromCharCode(f))>=0)return!1;if(i)return!0;let E=e,M=!1;for(;E++,!(E>=o||(t=d=n.bMarks[E]+n.tShift[E],u=n.eMarks[E],t<u&&n.sCount[E]<n.blkIndent));)if(n.src.charCodeAt(t)===f&&!(n.sCount[E]-n.blkIndent>=4)&&(t=n.skipChars(t,f),!(t-d<h)&&(t=n.skipSpaces(t),!(t<u)))){M=!0;break}h=n.sCount[e],n.line=E+(M?1:0);let w=n.push("fence","code",0);return w.info=D,w.content=n.getLines(e+1,E,h,!0),w.markup=v,w.map=[e,n.line],!0}function tc(n,e,o,i){let t=n.bMarks[e]+n.tShift[e],u=n.eMarks[e],f=n.lineMax;if(n.sCount[e]-n.blkIndent>=4||n.src.charCodeAt(t)!==62)return!1;if(i)return!0;let d=[],h=[],v=[],D=[],E=n.md.block.ruler.getRules("blockquote"),M=n.parentType;n.parentType="blockquote";let w=!1,x;for(x=e;x<o;x++){let I=n.sCount[x]<n.blkIndent;if(t=n.bMarks[x]+n.tShift[x],u=n.eMarks[x],t>=u)break;if(n.src.charCodeAt(t++)===62&&!I){let A=n.sCount[x]+1,q,Z;n.src.charCodeAt(t)===32?(t++,A++,Z=!1,q=!0):n.src.charCodeAt(t)===9?(q=!0,(n.bsCount[x]+A)%4===3?(t++,A++,Z=!1):Z=!0):q=!1;let J=A;for(d.push(n.bMarks[x]),n.bMarks[x]=t;t<u;){let se=n.src.charCodeAt(t);if(be(se))se===9?J+=4-(J+n.bsCount[x]+(Z?1:0))%4:J++;else break;t++}w=t>=u,h.push(n.bsCount[x]),n.bsCount[x]=n.sCount[x]+1+(q?1:0),v.push(n.sCount[x]),n.sCount[x]=J-A,D.push(n.tShift[x]),n.tShift[x]=t-n.bMarks[x];continue}if(w)break;let k=!1;for(let A=0,q=E.length;A<q;A++)if(E[A](n,x,o,!0)){k=!0;break}if(k){n.lineMax=x,n.blkIndent!==0&&(d.push(n.bMarks[x]),h.push(n.bsCount[x]),D.push(n.tShift[x]),v.push(n.sCount[x]),n.sCount[x]-=n.blkIndent);break}d.push(n.bMarks[x]),h.push(n.bsCount[x]),D.push(n.tShift[x]),v.push(n.sCount[x]),n.sCount[x]=-1}let m=n.blkIndent;n.blkIndent=0;let P=n.push("blockquote_open","blockquote",1);P.markup=">";let U=[e,0];P.map=U,n.md.block.tokenize(n,e,x);let R=n.push("blockquote_close","blockquote",-1);R.markup=">",n.lineMax=f,n.parentType=M,U[1]=n.line;for(let I=0;I<D.length;I++)n.bMarks[I+e]=d[I],n.tShift[I+e]=D[I],n.sCount[I+e]=v[I],n.bsCount[I+e]=h[I];return n.blkIndent=m,!0}function uc(n,e,o,i){let t=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4)return!1;let u=n.bMarks[e]+n.tShift[e],f=n.src.charCodeAt(u++);if(f!==42&&f!==45&&f!==95)return!1;let d=1;for(;u<t;){let v=n.src.charCodeAt(u++);if(v!==f&&!be(v))return!1;v===f&&d++}if(d<3)return!1;if(i)return!0;n.line=e+1;let h=n.push("hr","hr",0);return h.map=[e,n.line],h.markup=Array(d+1).join(String.fromCharCode(f)),!0}function Bi(n,e){let o=n.eMarks[e],i=n.bMarks[e]+n.tShift[e],t=n.src.charCodeAt(i++);if(t!==42&&t!==45&&t!==43)return-1;if(i<o){let u=n.src.charCodeAt(i);if(!be(u))return-1}return i}function Ui(n,e){let o=n.bMarks[e]+n.tShift[e],i=n.eMarks[e],t=o;if(t+1>=i)return-1;let u=n.src.charCodeAt(t++);if(u<48||u>57)return-1;for(;;){if(t>=i)return-1;if(u=n.src.charCodeAt(t++),u>=48&&u<=57){if(t-o>=10)return-1;continue}if(u===41||u===46)break;return-1}return t<i&&(u=n.src.charCodeAt(t),!be(u))?-1:t}function rc(n,e){let o=n.level+2;for(let i=e+2,t=n.tokens.length-2;i<t;i++)n.tokens[i].level===o&&n.tokens[i].type==="paragraph_open"&&(n.tokens[i+2].hidden=!0,n.tokens[i].hidden=!0,i+=2)}function ic(n,e,o,i){let t,u,f,d,h=e,v=!0;if(n.sCount[h]-n.blkIndent>=4||n.listIndent>=0&&n.sCount[h]-n.listIndent>=4&&n.sCount[h]<n.blkIndent)return!1;let D=!1;i&&n.parentType==="paragraph"&&n.sCount[h]>=n.blkIndent&&(D=!0);let E,M,w;if((w=Ui(n,h))>=0){if(E=!0,f=n.bMarks[h]+n.tShift[h],M=Number(n.src.slice(f,w-1)),D&&M!==1)return!1}else if((w=Bi(n,h))>=0)E=!1;else return!1;if(D&&n.skipSpaces(w)>=n.eMarks[h])return!1;if(i)return!0;let x=n.src.charCodeAt(w-1),m=n.tokens.length;E?(d=n.push("ordered_list_open","ol",1),M!==1&&(d.attrs=[["start",M]])):d=n.push("bullet_list_open","ul",1);let P=[h,0];d.map=P,d.markup=String.fromCharCode(x);let U=!1,R=n.md.block.ruler.getRules("list"),I=n.parentType;for(n.parentType="list";h<o;){u=w,t=n.eMarks[h];let k=n.sCount[h]+w-(n.bMarks[h]+n.tShift[h]),A=k;for(;u<t;){let Ne=n.src.charCodeAt(u);if(Ne===9)A+=4-(A+n.bsCount[h])%4;else if(Ne===32)A++;else break;u++}let q=u,Z;q>=t?Z=1:Z=A-k,Z>4&&(Z=1);let J=k+Z;d=n.push("list_item_open","li",1),d.markup=String.fromCharCode(x);let se=[h,0];d.map=se,E&&(d.info=n.src.slice(f,w-1));let te=n.tight,O=n.tShift[h],Y=n.sCount[h],N=n.listIndent;if(n.listIndent=n.blkIndent,n.blkIndent=J,n.tight=!0,n.tShift[h]=q-n.bMarks[h],n.sCount[h]=A,q>=t&&n.isEmpty(h+1)?n.line=Math.min(n.line+2,o):n.md.block.tokenize(n,h,o,!0),(!n.tight||U)&&(v=!1),U=n.line-h>1&&n.isEmpty(n.line-1),n.blkIndent=n.listIndent,n.listIndent=N,n.tShift[h]=O,n.sCount[h]=Y,n.tight=te,d=n.push("list_item_close","li",-1),d.markup=String.fromCharCode(x),h=n.line,se[1]=h,h>=o||n.sCount[h]<n.blkIndent||n.sCount[h]-n.blkIndent>=4)break;let L=!1;for(let Ne=0,a0=R.length;Ne<a0;Ne++)if(R[Ne](n,h,o,!0)){L=!0;break}if(L)break;if(E){if(w=Ui(n,h),w<0)break;f=n.bMarks[h]+n.tShift[h]}else if(w=Bi(n,h),w<0)break;if(x!==n.src.charCodeAt(w-1))break}return E?d=n.push("ordered_list_close","ol",-1):d=n.push("bullet_list_close","ul",-1),d.markup=String.fromCharCode(x),P[1]=h,n.line=h,n.parentType=I,v&&rc(n,m),!0}function ac(n,e,o,i){let t=n.bMarks[e]+n.tShift[e],u=n.eMarks[e],f=e+1;if(n.sCount[e]-n.blkIndent>=4||n.src.charCodeAt(t)!==91)return!1;function d(R){let I=n.lineMax;if(R>=I||n.isEmpty(R))return null;let k=!1;if(n.sCount[R]-n.blkIndent>3&&(k=!0),n.sCount[R]<0&&(k=!0),!k){let Z=n.md.block.ruler.getRules("reference"),J=n.parentType;n.parentType="reference";let se=!1;for(let te=0,O=Z.length;te<O;te++)if(Z[te](n,R,I,!0)){se=!0;break}if(n.parentType=J,se)return null}let A=n.bMarks[R]+n.tShift[R],q=n.eMarks[R];return n.src.slice(A,q+1)}let h=n.src.slice(t,u+1);u=h.length;let v=-1;for(t=1;t<u;t++){let R=h.charCodeAt(t);if(R===91)return!1;if(R===93){v=t;break}else if(R===10){let I=d(f);I!==null&&(h+=I,u=h.length,f++)}else if(R===92&&(t++,t<u&&h.charCodeAt(t)===10)){let I=d(f);I!==null&&(h+=I,u=h.length,f++)}}if(v<0||h.charCodeAt(v+1)!==58)return!1;for(t=v+2;t<u;t++){let R=h.charCodeAt(t);if(R===10){let I=d(f);I!==null&&(h+=I,u=h.length,f++)}else if(!be(R))break}let D=n.md.helpers.parseLinkDestination(h,t,u);if(!D.ok)return!1;let E=n.md.normalizeLink(D.str);if(!n.md.validateLink(E))return!1;t=D.pos;let M=t,w=f,x=t;for(;t<u;t++){let R=h.charCodeAt(t);if(R===10){let I=d(f);I!==null&&(h+=I,u=h.length,f++)}else if(!be(R))break}let m=n.md.helpers.parseLinkTitle(h,t,u);for(;m.can_continue;){let R=d(f);if(R===null)break;h+=R,t=u,u=h.length,f++,m=n.md.helpers.parseLinkTitle(h,t,u,m)}let P;for(t<u&&x!==t&&m.ok?(P=m.str,t=m.pos):(P="",t=M,f=w);t<u;){let R=h.charCodeAt(t);if(!be(R))break;t++}if(t<u&&h.charCodeAt(t)!==10&&P)for(P="",t=M,f=w;t<u;){let R=h.charCodeAt(t);if(!be(R))break;t++}if(t<u&&h.charCodeAt(t)!==10)return!1;let U=du(h.slice(1,v));return U?(i||(typeof n.env.references>"u"&&(n.env.references={}),typeof n.env.references[U]>"u"&&(n.env.references[U]={title:P,href:E}),n.line=f),!0):!1}var oc=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],sc="[a-zA-Z_:][a-zA-Z0-9:._-]*",lc="[^\"'=<>`\\x00-\\x20]+",cc="'[^']*'",dc='"[^"]*"',fc="(?:"+lc+"|"+cc+"|"+dc+")",pc="(?:\\s+"+sc+"(?:\\s*=\\s*"+fc+")?)",ea="<[A-Za-z][A-Za-z0-9\\-]*"+pc+"*\\s*\\/?>",na="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",gc="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",hc="<[?][\\s\\S]*?[?]>",bc="<![A-Za-z][^>]*>",mc="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",vc=new RegExp("^(?:"+ea+"|"+na+"|"+gc+"|"+hc+"|"+bc+"|"+mc+")"),xc=new RegExp("^(?:"+ea+"|"+na+")"),_0=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+oc.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(xc.source+"\\s*$"),/^$/,!1]];function kc(n,e,o,i){let t=n.bMarks[e]+n.tShift[e],u=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4||!n.md.options.html||n.src.charCodeAt(t)!==60)return!1;let f=n.src.slice(t,u),d=0;for(;d<_0.length&&!_0[d][0].test(f);d++);if(d===_0.length)return!1;if(i)return _0[d][2];let h=e+1;if(!_0[d][1].test(f)){for(;h<o&&!(n.sCount[h]<n.blkIndent);h++)if(t=n.bMarks[h]+n.tShift[h],u=n.eMarks[h],f=n.src.slice(t,u),_0[d][1].test(f)){f.length!==0&&h++;break}}n.line=h;let v=n.push("html_block","",0);return v.map=[e,h],v.content=n.getLines(e,h,n.blkIndent,!0),!0}function yc(n,e,o,i){let t=n.bMarks[e]+n.tShift[e],u=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4)return!1;let f=n.src.charCodeAt(t);if(f!==35||t>=u)return!1;let d=1;for(f=n.src.charCodeAt(++t);f===35&&t<u&&d<=6;)d++,f=n.src.charCodeAt(++t);if(d>6||t<u&&!be(f))return!1;if(i)return!0;u=n.skipSpacesBack(u,t);let h=n.skipCharsBack(u,35,t);h>t&&be(n.src.charCodeAt(h-1))&&(u=h),n.line=e+1;let v=n.push("heading_open","h"+String(d),1);v.markup="########".slice(0,d),v.map=[e,n.line];let D=n.push("inline","",0);D.content=n.src.slice(t,u).trim(),D.map=[e,n.line],D.children=[];let E=n.push("heading_close","h"+String(d),-1);return E.markup="########".slice(0,d),!0}function Fc(n,e,o){let i=n.md.block.ruler.getRules("paragraph");if(n.sCount[e]-n.blkIndent>=4)return!1;let t=n.parentType;n.parentType="paragraph";let u=0,f,d=e+1;for(;d<o&&!n.isEmpty(d);d++){if(n.sCount[d]-n.blkIndent>3)continue;if(n.sCount[d]>=n.blkIndent){let w=n.bMarks[d]+n.tShift[d],x=n.eMarks[d];if(w<x&&(f=n.src.charCodeAt(w),(f===45||f===61)&&(w=n.skipChars(w,f),w=n.skipSpaces(w),w>=x))){u=f===61?1:2;break}}if(n.sCount[d]<0)continue;let M=!1;for(let w=0,x=i.length;w<x;w++)if(i[w](n,d,o,!0)){M=!0;break}if(M)break}if(!u)return!1;let h=n.getLines(e,d,n.blkIndent,!1).trim();n.line=d+1;let v=n.push("heading_open","h"+String(u),1);v.markup=String.fromCharCode(f),v.map=[e,n.line];let D=n.push("inline","",0);D.content=h,D.map=[e,n.line-1],D.children=[];let E=n.push("heading_close","h"+String(u),-1);return E.markup=String.fromCharCode(f),n.parentType=t,!0}function wc(n,e,o){let i=n.md.block.ruler.getRules("paragraph"),t=n.parentType,u=e+1;for(n.parentType="paragraph";u<o&&!n.isEmpty(u);u++){if(n.sCount[u]-n.blkIndent>3||n.sCount[u]<0)continue;let v=!1;for(let D=0,E=i.length;D<E;D++)if(i[D](n,u,o,!0)){v=!0;break}if(v)break}let f=n.getLines(e,u,n.blkIndent,!1).trim();n.line=u;let d=n.push("paragraph_open","p",1);d.map=[e,n.line];let h=n.push("inline","",0);return h.content=f,h.map=[e,n.line],h.children=[],n.push("paragraph_close","p",-1),n.parentType=t,!0}var su=[["table",Kl,["paragraph","reference"]],["code",ec],["fence",nc,["paragraph","reference","blockquote","list"]],["blockquote",tc,["paragraph","reference","blockquote","list"]],["hr",uc,["paragraph","reference","blockquote","list"]],["list",ic,["paragraph","reference","blockquote"]],["reference",ac],["html_block",kc,["paragraph","reference","blockquote"]],["heading",yc,["paragraph","reference","blockquote"]],["lheading",Fc],["paragraph",wc]];function fu(){this.ruler=new Re;for(let n=0;n<su.length;n++)this.ruler.push(su[n][0],su[n][1],{alt:(su[n][2]||[]).slice()})}fu.prototype.tokenize=function(n,e,o){let i=this.ruler.getRules(""),t=i.length,u=n.md.options.maxNesting,f=e,d=!1;for(;f<o&&(n.line=f=n.skipEmptyLines(f),!(f>=o||n.sCount[f]<n.blkIndent));){if(n.level>=u){n.line=o;break}let h=n.line,v=!1;for(let D=0;D<t;D++)if(v=i[D](n,f,o,!1),v){if(h>=n.line)throw new Error("block rule didn't increment state.line");break}if(!v)throw new Error("none of the block rules matched");n.tight=!d,n.isEmpty(n.line-1)&&(d=!0),f=n.line,f<o&&n.isEmpty(f)&&(d=!0,f++,n.line=f)}};fu.prototype.parse=function(n,e,o,i){if(!n)return;let t=new this.State(n,e,o,i);this.tokenize(t,t.line,t.lineMax)};fu.prototype.State=ln;function it(n,e,o,i){this.src=n,this.env=o,this.md=e,this.tokens=i,this.tokens_meta=Array(i.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}it.prototype.pushPending=function(){let n=new Ke("text","",0);return n.content=this.pending,n.level=this.pendingLevel,this.tokens.push(n),this.pending="",n};it.prototype.push=function(n,e,o){this.pending&&this.pushPending();let i=new Ke(n,e,o),t=null;return o<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),i.level=this.level,o>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],t={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(i),this.tokens_meta.push(t),i};it.prototype.scanDelims=function(n,e){let o=this.posMax,i=this.src.charCodeAt(n),t=n>0?this.src.charCodeAt(n-1):32,u=n;for(;u<o&&this.src.charCodeAt(u)===i;)u++;let f=u-n,d=u<o?this.src.charCodeAt(u):32,h=rt(t)||ut(String.fromCharCode(t)),v=rt(d)||ut(String.fromCharCode(d)),D=tt(t),E=tt(d),M=!E&&(!v||D||h),w=!D&&(!h||E||v);return{can_open:M&&(e||!w||h),can_close:w&&(e||!M||v),length:f}};it.prototype.Token=Ke;function _c(n){switch(n){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function Cc(n,e){let o=n.pos;for(;o<n.posMax&&!_c(n.src.charCodeAt(o));)o++;return o===n.pos?!1:(e||(n.pending+=n.src.slice(n.pos,o)),n.pos=o,!0)}var Ec=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function qc(n,e){if(!n.md.options.linkify||n.linkLevel>0)return!1;let o=n.pos,i=n.posMax;if(o+3>i||n.src.charCodeAt(o)!==58||n.src.charCodeAt(o+1)!==47||n.src.charCodeAt(o+2)!==47)return!1;let t=n.pending.match(Ec);if(!t)return!1;let u=t[1],f=n.md.linkify.matchAtStart(n.src.slice(o-u.length));if(!f)return!1;let d=f.url;if(d.length<=u.length)return!1;let h=d.length;for(;h>0&&d.charCodeAt(h-1)===42;)h--;h!==d.length&&(d=d.slice(0,h));let v=n.md.normalizeLink(d);if(!n.md.validateLink(v))return!1;if(!e){n.pending=n.pending.slice(0,-u.length);let D=n.push("link_open","a",1);D.attrs=[["href",v]],D.markup="linkify",D.info="auto";let E=n.push("text","",0);E.content=n.md.normalizeLinkText(d);let M=n.push("link_close","a",-1);M.markup="linkify",M.info="auto"}return n.pos+=d.length-u.length,!0}function Mc(n,e){let o=n.pos;if(n.src.charCodeAt(o)!==10)return!1;let i=n.pending.length-1,t=n.posMax;if(!e)if(i>=0&&n.pending.charCodeAt(i)===32)if(i>=1&&n.pending.charCodeAt(i-1)===32){let u=i-1;for(;u>=1&&n.pending.charCodeAt(u-1)===32;)u--;n.pending=n.pending.slice(0,u),n.push("hardbreak","br",0)}else n.pending=n.pending.slice(0,-1),n.push("softbreak","br",0);else n.push("softbreak","br",0);for(o++;o<t&&be(n.src.charCodeAt(o));)o++;return n.pos=o,!0}var $r=[];for(let n=0;n<256;n++)$r.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n){$r[n.charCodeAt(0)]=1});function zc(n,e){let o=n.pos,i=n.posMax;if(n.src.charCodeAt(o)!==92||(o++,o>=i))return!1;let t=n.src.charCodeAt(o);if(t===10){for(e||n.push("hardbreak","br",0),o++;o<i&&(t=n.src.charCodeAt(o),!!be(t));)o++;return n.pos=o,!0}let u=n.src[o];if(t>=55296&&t<=56319&&o+1<i){let d=n.src.charCodeAt(o+1);d>=56320&&d<=57343&&(u+=n.src[o+1],o++)}let f="\\"+u;if(!e){let d=n.push("text_special","",0);t<256&&$r[t]!==0?d.content=u:d.content=f,d.markup=f,d.info="escape"}return n.pos=o+1,!0}function Dc(n,e){let o=n.pos;if(n.src.charCodeAt(o)!==96)return!1;let t=o;o++;let u=n.posMax;for(;o<u&&n.src.charCodeAt(o)===96;)o++;let f=n.src.slice(t,o),d=f.length;if(n.backticksScanned&&(n.backticks[d]||0)<=t)return e||(n.pending+=f),n.pos+=d,!0;let h=o,v;for(;(v=n.src.indexOf("`",h))!==-1;){for(h=v+1;h<u&&n.src.charCodeAt(h)===96;)h++;let D=h-v;if(D===d){if(!e){let E=n.push("code_inline","code",0);E.markup=f,E.content=n.src.slice(o,v).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return n.pos=h,!0}n.backticks[D]=v}return n.backticksScanned=!0,e||(n.pending+=f),n.pos+=d,!0}function Sc(n,e){let o=n.pos,i=n.src.charCodeAt(o);if(e||i!==126)return!1;let t=n.scanDelims(n.pos,!0),u=t.length,f=String.fromCharCode(i);if(u<2)return!1;let d;u%2&&(d=n.push("text","",0),d.content=f,u--);for(let h=0;h<u;h+=2)d=n.push("text","",0),d.content=f+f,n.delimiters.push({marker:i,length:0,token:n.tokens.length-1,end:-1,open:t.can_open,close:t.can_close});return n.pos+=t.length,!0}function Hi(n,e){let o,i=[],t=e.length;for(let u=0;u<t;u++){let f=e[u];if(f.marker!==126||f.end===-1)continue;let d=e[f.end];o=n.tokens[f.token],o.type="s_open",o.tag="s",o.nesting=1,o.markup="~~",o.content="",o=n.tokens[d.token],o.type="s_close",o.tag="s",o.nesting=-1,o.markup="~~",o.content="",n.tokens[d.token-1].type==="text"&&n.tokens[d.token-1].content==="~"&&i.push(d.token-1)}for(;i.length;){let u=i.pop(),f=u+1;for(;f<n.tokens.length&&n.tokens[f].type==="s_close";)f++;f--,u!==f&&(o=n.tokens[f],n.tokens[f]=n.tokens[u],n.tokens[u]=o)}}function Ac(n){let e=n.tokens_meta,o=n.tokens_meta.length;Hi(n,n.delimiters);for(let i=0;i<o;i++)e[i]&&e[i].delimiters&&Hi(n,e[i].delimiters)}var ta={tokenize:Sc,postProcess:Ac};function Tc(n,e){let o=n.pos,i=n.src.charCodeAt(o);if(e||i!==95&&i!==42)return!1;let t=n.scanDelims(n.pos,i===42);for(let u=0;u<t.length;u++){let f=n.push("text","",0);f.content=String.fromCharCode(i),n.delimiters.push({marker:i,length:t.length,token:n.tokens.length-1,end:-1,open:t.can_open,close:t.can_close})}return n.pos+=t.length,!0}function $i(n,e){let o=e.length;for(let i=o-1;i>=0;i--){let t=e[i];if(t.marker!==95&&t.marker!==42||t.end===-1)continue;let u=e[t.end],f=i>0&&e[i-1].end===t.end+1&&e[i-1].marker===t.marker&&e[i-1].token===t.token-1&&e[t.end+1].token===u.token+1,d=String.fromCharCode(t.marker),h=n.tokens[t.token];h.type=f?"strong_open":"em_open",h.tag=f?"strong":"em",h.nesting=1,h.markup=f?d+d:d,h.content="";let v=n.tokens[u.token];v.type=f?"strong_close":"em_close",v.tag=f?"strong":"em",v.nesting=-1,v.markup=f?d+d:d,v.content="",f&&(n.tokens[e[i-1].token].content="",n.tokens[e[t.end+1].token].content="",i--)}}function Ic(n){let e=n.tokens_meta,o=n.tokens_meta.length;$i(n,n.delimiters);for(let i=0;i<o;i++)e[i]&&e[i].delimiters&&$i(n,e[i].delimiters)}var ua={tokenize:Tc,postProcess:Ic};function Rc(n,e){let o,i,t,u,f="",d="",h=n.pos,v=!0;if(n.src.charCodeAt(n.pos)!==91)return!1;let D=n.pos,E=n.posMax,M=n.pos+1,w=n.md.helpers.parseLinkLabel(n,n.pos,!0);if(w<0)return!1;let x=w+1;if(x<E&&n.src.charCodeAt(x)===40){for(v=!1,x++;x<E&&(o=n.src.charCodeAt(x),!(!be(o)&&o!==10));x++);if(x>=E)return!1;if(h=x,t=n.md.helpers.parseLinkDestination(n.src,x,n.posMax),t.ok){for(f=n.md.normalizeLink(t.str),n.md.validateLink(f)?x=t.pos:f="",h=x;x<E&&(o=n.src.charCodeAt(x),!(!be(o)&&o!==10));x++);if(t=n.md.helpers.parseLinkTitle(n.src,x,n.posMax),x<E&&h!==x&&t.ok)for(d=t.str,x=t.pos;x<E&&(o=n.src.charCodeAt(x),!(!be(o)&&o!==10));x++);}(x>=E||n.src.charCodeAt(x)!==41)&&(v=!0),x++}if(v){if(typeof n.env.references>"u")return!1;if(x<E&&n.src.charCodeAt(x)===91?(h=x+1,x=n.md.helpers.parseLinkLabel(n,x),x>=0?i=n.src.slice(h,x++):x=w+1):x=w+1,i||(i=n.src.slice(M,w)),u=n.env.references[du(i)],!u)return n.pos=D,!1;f=u.href,d=u.title}if(!e){n.pos=M,n.posMax=w;let m=n.push("link_open","a",1),P=[["href",f]];m.attrs=P,d&&P.push(["title",d]),n.linkLevel++,n.md.inline.tokenize(n),n.linkLevel--,n.push("link_close","a",-1)}return n.pos=x,n.posMax=E,!0}function Oc(n,e){let o,i,t,u,f,d,h,v,D="",E=n.pos,M=n.posMax;if(n.src.charCodeAt(n.pos)!==33||n.src.charCodeAt(n.pos+1)!==91)return!1;let w=n.pos+2,x=n.md.helpers.parseLinkLabel(n,n.pos+1,!1);if(x<0)return!1;if(u=x+1,u<M&&n.src.charCodeAt(u)===40){for(u++;u<M&&(o=n.src.charCodeAt(u),!(!be(o)&&o!==10));u++);if(u>=M)return!1;for(v=u,d=n.md.helpers.parseLinkDestination(n.src,u,n.posMax),d.ok&&(D=n.md.normalizeLink(d.str),n.md.validateLink(D)?u=d.pos:D=""),v=u;u<M&&(o=n.src.charCodeAt(u),!(!be(o)&&o!==10));u++);if(d=n.md.helpers.parseLinkTitle(n.src,u,n.posMax),u<M&&v!==u&&d.ok)for(h=d.str,u=d.pos;u<M&&(o=n.src.charCodeAt(u),!(!be(o)&&o!==10));u++);else h="";if(u>=M||n.src.charCodeAt(u)!==41)return n.pos=E,!1;u++}else{if(typeof n.env.references>"u")return!1;if(u<M&&n.src.charCodeAt(u)===91?(v=u+1,u=n.md.helpers.parseLinkLabel(n,u),u>=0?t=n.src.slice(v,u++):u=x+1):u=x+1,t||(t=n.src.slice(w,x)),f=n.env.references[du(t)],!f)return n.pos=E,!1;D=f.href,h=f.title}if(!e){i=n.src.slice(w,x);let m=[];n.md.inline.parse(i,n.md,n.env,m);let P=n.push("image","img",0),U=[["src",D],["alt",""]];P.attrs=U,P.children=m,P.content=i,h&&U.push(["title",h])}return n.pos=u,n.posMax=M,!0}var Pc=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Lc=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Nc(n,e){let o=n.pos;if(n.src.charCodeAt(o)!==60)return!1;let i=n.pos,t=n.posMax;for(;;){if(++o>=t)return!1;let f=n.src.charCodeAt(o);if(f===60)return!1;if(f===62)break}let u=n.src.slice(i+1,o);if(Lc.test(u)){let f=n.md.normalizeLink(u);if(!n.md.validateLink(f))return!1;if(!e){let d=n.push("link_open","a",1);d.attrs=[["href",f]],d.markup="autolink",d.info="auto";let h=n.push("text","",0);h.content=n.md.normalizeLinkText(u);let v=n.push("link_close","a",-1);v.markup="autolink",v.info="auto"}return n.pos+=u.length+2,!0}if(Pc.test(u)){let f=n.md.normalizeLink("mailto:"+u);if(!n.md.validateLink(f))return!1;if(!e){let d=n.push("link_open","a",1);d.attrs=[["href",f]],d.markup="autolink",d.info="auto";let h=n.push("text","",0);h.content=n.md.normalizeLinkText(u);let v=n.push("link_close","a",-1);v.markup="autolink",v.info="auto"}return n.pos+=u.length+2,!0}return!1}function jc(n){return/^<a[>\s]/i.test(n)}function Yc(n){return/^<\/a\s*>/i.test(n)}function Bc(n){let e=n|32;return e>=97&&e<=122}function Uc(n,e){if(!n.md.options.html)return!1;let o=n.posMax,i=n.pos;if(n.src.charCodeAt(i)!==60||i+2>=o)return!1;let t=n.src.charCodeAt(i+1);if(t!==33&&t!==63&&t!==47&&!Bc(t))return!1;let u=n.src.slice(i).match(vc);if(!u)return!1;if(!e){let f=n.push("html_inline","",0);f.content=u[0],jc(f.content)&&n.linkLevel++,Yc(f.content)&&n.linkLevel--}return n.pos+=u[0].length,!0}var Hc=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,$c=/^&([a-z][a-z0-9]{1,31});/i;function Wc(n,e){let o=n.pos,i=n.posMax;if(n.src.charCodeAt(o)!==38||o+1>=i)return!1;if(n.src.charCodeAt(o+1)===35){let u=n.src.slice(o).match(Hc);if(u){if(!e){let f=u[1][0].toLowerCase()==="x"?parseInt(u[1].slice(1),16):parseInt(u[1],10),d=n.push("text_special","",0);d.content=Ur(f)?lu(f):lu(65533),d.markup=u[0],d.info="entity"}return n.pos+=u[0].length,!0}}else{let u=n.src.slice(o).match($c);if(u){let f=Vi.decodeHTML(u[0]);if(f!==u[0]){if(!e){let d=n.push("text_special","",0);d.content=f,d.markup=u[0],d.info="entity"}return n.pos+=u[0].length,!0}}}return!1}function Wi(n){let e={},o=n.length;if(!o)return;let i=0,t=-2,u=[];for(let f=0;f<o;f++){let d=n[f];if(u.push(0),(n[i].marker!==d.marker||t!==d.token-1)&&(i=f),t=d.token,d.length=d.length||0,!d.close)continue;e.hasOwnProperty(d.marker)||(e[d.marker]=[-1,-1,-1,-1,-1,-1]);let h=e[d.marker][(d.open?3:0)+d.length%3],v=i-u[i]-1,D=v;for(;v>h;v-=u[v]+1){let E=n[v];if(E.marker===d.marker&&E.open&&E.end<0){let M=!1;if((E.close||d.open)&&(E.length+d.length)%3===0&&(E.length%3!==0||d.length%3!==0)&&(M=!0),!M){let w=v>0&&!n[v-1].open?u[v-1]+1:0;u[f]=f-v+w,u[v]=w,d.open=!1,E.end=f,E.close=!1,D=-1,t=-2;break}}}D!==-1&&(e[d.marker][(d.open?3:0)+(d.length||0)%3]=D)}}function Vc(n){let e=n.tokens_meta,o=n.tokens_meta.length;Wi(n.delimiters);for(let i=0;i<o;i++)e[i]&&e[i].delimiters&&Wi(e[i].delimiters)}function Gc(n){let e,o,i=0,t=n.tokens,u=n.tokens.length;for(e=o=0;e<u;e++)t[e].nesting<0&&i--,t[e].level=i,t[e].nesting>0&&i++,t[e].type==="text"&&e+1<u&&t[e+1].type==="text"?t[e+1].content=t[e].content+t[e+1].content:(e!==o&&(t[o]=t[e]),o++);e!==o&&(t.length=o)}var Nr=[["text",Cc],["linkify",qc],["newline",Mc],["escape",zc],["backticks",Dc],["strikethrough",ta.tokenize],["emphasis",ua.tokenize],["link",Rc],["image",Oc],["autolink",Nc],["html_inline",Uc],["entity",Wc]],jr=[["balance_pairs",Vc],["strikethrough",ta.postProcess],["emphasis",ua.postProcess],["fragments_join",Gc]];function at(){this.ruler=new Re;for(let n=0;n<Nr.length;n++)this.ruler.push(Nr[n][0],Nr[n][1]);this.ruler2=new Re;for(let n=0;n<jr.length;n++)this.ruler2.push(jr[n][0],jr[n][1])}at.prototype.skipToken=function(n){let e=n.pos,o=this.ruler.getRules(""),i=o.length,t=n.md.options.maxNesting,u=n.cache;if(typeof u[e]<"u"){n.pos=u[e];return}let f=!1;if(n.level<t){for(let d=0;d<i;d++)if(n.level++,f=o[d](n,!0),n.level--,f){if(e>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}else n.pos=n.posMax;f||n.pos++,u[e]=n.pos};at.prototype.tokenize=function(n){let e=this.ruler.getRules(""),o=e.length,i=n.posMax,t=n.md.options.maxNesting;for(;n.pos<i;){let u=n.pos,f=!1;if(n.level<t){for(let d=0;d<o;d++)if(f=e[d](n,!1),f){if(u>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}if(f){if(n.pos>=i)break;continue}n.pending+=n.src[n.pos++]}n.pending&&n.pushPending()};at.prototype.parse=function(n,e,o,i){let t=new this.State(n,e,o,i);this.tokenize(t);let u=this.ruler2.getRules(""),f=u.length;for(let d=0;d<f;d++)u[d](t)};at.prototype.State=it;var Zc={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},Xc={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},Jc={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Qc={default:Zc,zero:Xc,commonmark:Jc},Kc=/^(vbscript|javascript|file|data):/,e4=/^data:image\/(gif|png|jpeg|webp);/;function n4(n){let e=n.trim().toLowerCase();return Kc.test(e)?e4.test(e):!0}var ra=["http:","https:","mailto:"];function t4(n){let e=jn.parse(n,!0);if(e.hostname&&(!e.protocol||ra.indexOf(e.protocol)>=0))try{e.hostname=Gi.toASCII(e.hostname)}catch{}return jn.encode(jn.format(e))}function u4(n){let e=jn.parse(n,!0);if(e.hostname&&(!e.protocol||ra.indexOf(e.protocol)>=0))try{e.hostname=Gi.toUnicode(e.hostname)}catch{}return jn.decode(jn.format(e),jn.decode.defaultChars+"%")}function Be(n,e){if(!(this instanceof Be))return new Be(n,e);e||Br(n)||(e=n||{},n="default"),this.inline=new at,this.block=new fu,this.core=new Hr,this.renderer=new E0,this.linkify=new fl,this.validateLink=n4,this.normalizeLink=t4,this.normalizeLinkText=u4,this.utils=Ml,this.helpers=cu({},Al),this.options={},this.configure(n),e&&this.set(e)}Be.prototype.set=function(n){return cu(this.options,n),this};Be.prototype.configure=function(n){let e=this;if(Br(n)){let o=n;if(n=Qc[o],!n)throw new Error('Wrong `markdown-it` preset "'+o+'", check name')}if(!n)throw new Error("Wrong `markdown-it` preset, can't be empty");return n.options&&e.set(n.options),n.components&&Object.keys(n.components).forEach(function(o){n.components[o].rules&&e[o].ruler.enableOnly(n.components[o].rules),n.components[o].rules2&&e[o].ruler2.enableOnly(n.components[o].rules2)}),this};Be.prototype.enable=function(n,e){let o=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(t){o=o.concat(this[t].ruler.enable(n,!0))},this),o=o.concat(this.inline.ruler2.enable(n,!0));let i=n.filter(function(t){return o.indexOf(t)<0});if(i.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+i);return this};Be.prototype.disable=function(n,e){let o=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(t){o=o.concat(this[t].ruler.disable(n,!0))},this),o=o.concat(this.inline.ruler2.disable(n,!0));let i=n.filter(function(t){return o.indexOf(t)<0});if(i.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+i);return this};Be.prototype.use=function(n){let e=[this].concat(Array.prototype.slice.call(arguments,1));return n.apply(n,e),this};Be.prototype.parse=function(n,e){if(typeof n!="string")throw new Error("Input data should be a String");let o=new this.core.State(n,this,e);return this.core.process(o),o.tokens};Be.prototype.render=function(n,e){return e=e||{},this.renderer.render(this.parse(n,e),this.options,e)};Be.prototype.parseInline=function(n,e){let o=new this.core.State(n,this,e);return o.inlineMode=!0,this.core.process(o),o.tokens};Be.prototype.renderInline=function(n,e){return e=e||{},this.renderer.render(this.parseInline(n,e),this.options,e)};ia.exports=Be});var sa=pe((x3,oa)=>{"use strict";V();function r4(n){let e=n.utils.escapeRE,o=n.utils.arrayReplaceAt,i=" \r\n$+<=>^`|~",t=n.utils.lib.ucmicro.P.source,u=n.utils.lib.ucmicro.Z.source;function f(h,v,D,E){let M,w=h.bMarks[v]+h.tShift[v],x=h.eMarks[v];if(w+2>=x||h.src.charCodeAt(w++)!==42||h.src.charCodeAt(w++)!==91)return!1;let m=w;for(;w<x;w++){let R=h.src.charCodeAt(w);if(R===91)return!1;if(R===93){M=w;break}else R===92&&w++}if(M<0||h.src.charCodeAt(M+1)!==58)return!1;if(E)return!0;let P=h.src.slice(m,M).replace(/\\(.)/g,"$1"),U=h.src.slice(M+2,x).trim();return P.length===0||U.length===0?!1:(h.env.abbreviations||(h.env.abbreviations={}),typeof h.env.abbreviations[":"+P]>"u"&&(h.env.abbreviations[":"+P]=U),h.line=v+1,!0)}function d(h){let v=h.tokens;if(!h.env.abbreviations)return;let D=new RegExp("(?:"+Object.keys(h.env.abbreviations).map(function(w){return w.substr(1)}).sort(function(w,x){return x.length-w.length}).map(e).join("|")+")"),E="(^|"+t+"|"+u+"|["+i.split("").map(e).join("")+"])("+Object.keys(h.env.abbreviations).map(function(w){return w.substr(1)}).sort(function(w,x){return x.length-w.length}).map(e).join("|")+")($|"+t+"|"+u+"|["+i.split("").map(e).join("")+"])",M=new RegExp(E,"g");for(let w=0,x=v.length;w<x;w++){if(v[w].type!=="inline")continue;let m=v[w].children;for(let P=m.length-1;P>=0;P--){let U=m[P];if(U.type!=="text")continue;let R=0,I=U.content;M.lastIndex=0;let k=[];if(!D.test(I))continue;let A;for(;A=M.exec(I);){if(A.index>0||A[1].length>0){let se=new h.Token("text","",0);se.content=I.slice(R,A.index+A[1].length),k.push(se)}let q=new h.Token("abbr_open","abbr",1);q.attrs=[["title",h.env.abbreviations[":"+A[2]]]],k.push(q);let Z=new h.Token("text","",0);Z.content=A[2],k.push(Z);let J=new h.Token("abbr_close","abbr",-1);k.push(J),M.lastIndex-=A[3].length,R=M.lastIndex}if(k.length){if(R<I.length){let q=new h.Token("text","",0);q.content=I.slice(R),k.push(q)}v[w].children=m=o(m,P,k)}}}}n.block.ruler.before("reference","abbr_def",f,{alt:["paragraph","reference"]}),n.core.ruler.after("linkify","abbr_replace",d)}oa.exports=r4});var da=pe((y3,ca)=>{V();function oe(n,e,o,i){if(e===!1||e==null||!e&&(n==="class"||n==="style"))return"";if(e===!0)return" "+(i?n:n+'="'+n+'"');var t=typeof e;return t!=="object"&&t!=="function"||typeof e.toJSON!="function"||(e=e.toJSON()),typeof e=="string"||(e=JSON.stringify(e),o||e.indexOf('"')===-1)?(o&&(e=B(e))," "+n+'="'+e+'"'):" "+n+"='"+e.replace(/'/g,"&#39;")+"'"}function wn(n,e){return Array.isArray(n)?i4(n,e):n&&typeof n=="object"?a4(n):n||""}function i4(n,e){for(var o,i="",t="",u=Array.isArray(e),f=0;f<n.length;f++)(o=wn(n[f]))&&(u&&e[f]&&(o=B(o)),i=i+t+o,t=" ");return i}function a4(n){var e="",o="";for(var i in n)i&&n[i]&&o4.call(n,i)&&(e=e+o+i,o=" ");return e}function B(n){var e=""+n,o=s4.exec(e);if(!o)return n;var i,t,u,f="";for(i=o.index,t=0;i<e.length;i++){switch(e.charCodeAt(i)){case 34:u="&quot;";break;case 38:u="&amp;";break;case 60:u="&lt;";break;case 62:u="&gt;";break;default:continue}t!==i&&(f+=e.substring(t,i)),t=i+1,f+=u}return t!==i?f+e.substring(t,i):f}var o4=Object.prototype.hasOwnProperty,s4=/["&<>]/;function la(n,e,o,i){if(!(n instanceof Error))throw n;if(!(typeof window>"u"&&e||i))throw n.message+=" on line "+o,n;try{i=i||(hr(),b1(gr)).readFileSync(e,"utf8")}catch{la(n,null,o)}var d=3,t=i.split(`
`),u=Math.max(o-d,0),f=Math.min(t.length,o+d),d=t.slice(u,f).map(function(h,v){var D=v+u+1;return(D==o?"  > ":"    ")+D+"| "+h}).join(`
`);throw n.path=e,n.message=(e||"Pug")+":"+o+`
`+d+`

`+n.message,n}function l4(n){var e="",o={},i,t,u;try{var f={"index.pug":`|<!DOCTYPE html>
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
      include background/certificates.pug
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
                if experience.url
                  a(href=experience.url, target="_blank")= experience.name
                else
                  |#{experience.name}

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
                if project.url
                  a(href=project.url, target="_blank")
                    strong=project.name
                else
                  strong=project.name
                if project.entity
                  span
                    |,&nbsp;#{project.entity}

              p.text-muted
                small
                  span.space-right
                    |#{project.startDate} - #{project.endDate || 'Present'}

                  if project.duration
                    span
                      i.icon-clock.mr-5
                      |#{project.duration}

              .mop-wrapper.space-bottom!= project.description

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
                      span.label.label-keyword!= keyword
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
                      span.label.label-keyword!= course

`,"pug/background/certificates.pug":`unless _.isEmpty(resume.certificates)
  .detail#certificates
    .icon
      i.fs-lg.icon-profile
      span.mobile-title Certificates

    .info
      h4.title.text-uppercase Certificates

      .content
        ul.list-unstyled.clear-margin
          each certificate in resume.certificates
            li.card.card-nested
              .content
                p.clear-margin(itemprop="certificate")
                  strong
                    if certificate.url
                      a(href=certificate.url, target="_blank")= certificate.name
                      |,&nbsp;
                    else
                      |#{certificate.name + ', '}
                  |#{certificate.issuer}

                p.text-muted
                  small
                    |Issued on: #{certificate.date}
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
                  |,&nbsp;#{award.awarder}

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
                    if publication.url
                      a(href=publication.url, target="_blank")= publication.name
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
    google: { families: [ 'Raleway' ] }
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
`},d=n||{};(function(h,v,D,E){u=1,t="index.pug",e=e+"<!DOCTYPE html>",u=2,t="index.pug",e=e+'<html lang="en">',u=3,t="index.pug",e=e+"<head>",u=4,t="index.pug",e=e+'<meta charset="utf-8"/>',u=5,t="index.pug",e=e+'<meta http-equiv="X-UA-Compatible" content="IE=edge"/>',u=6,t="index.pug",e=e+'<meta name="viewport" content="width=device-width, initial-scale=1"/>',u=7,t="index.pug",e=e+"<title>",u=7,t="index.pug",e=e+B((i=E.basics.name)==null?"":i)+"</title>",u=1,t="pug/stylesheets.pug",e=e+'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>',u=2,t="pug/stylesheets.pug",e=e+"<style>",u=2,t="pug/stylesheets.pug",e=e+((i=v)==null?"":i)+"</style></head>",u=10,t="index.pug",e=e+"<body"+(oe("itemscope",!0,!0,!1)+' itemtype="http://schema.org/Person"')+">",u=11,t="index.pug",e=e+'<div class="container-fluid">',u=12,t="index.pug",e=e+'<div class="row main clearfix">',u=1,t="pug/floating-nav.pug",o.make_nav_link=i=function(M){var w=this&&this.block,x=this&&this.attributes||{};u=2,t="pug/floating-nav.pug",e=e+"<li>",u=3,t="pug/floating-nav.pug",e=e+"<a"+oe("href","#"+M.target,!0,!1)+">",u=4,t="pug/floating-nav.pug",e=e+"<i"+oe("class",wn(["mr-10","icon-"+M.icon],[!1,!0]),!1,!1)+"></i>",u=5,t="pug/floating-nav.pug",e=e+B((i=M.label)==null?"":i)+"</a></li>"},u=7,t="pug/floating-nav.pug",e=e+'<a class="js-floating-nav-trigger floating-nav-trigger" href="#">',u=8,t="pug/floating-nav.pug",e=e+'<i class="icon-bars"></i>',u=9,t="pug/floating-nav.pug",e=e+'<span class="close-icon">',u=9,t="pug/floating-nav.pug",e=e+"&times;</span></a>",u=11,t="pug/floating-nav.pug",e=e+'<nav class="floating-nav js-floating-nav">',u=12,t="pug/floating-nav.pug",e=e+'<ul class="list-unstyled">',u=13,t="pug/floating-nav.pug",(function(){var M=D;if(typeof M.length=="number")for(var w=0,x=M.length;w<x;w++){var m=M[w];u=14,t="pug/floating-nav.pug",o.make_nav_link(m)}else{var x=0;for(var w in M){x++;var m=M[w];u=14,t="pug/floating-nav.pug",o.make_nav_link(m)}}}).call(this),e=e+"</ul></nav>",u=1,t="pug/profile-card.pug",o.profile_card_detail=i=function(M,w,x,m){var P=this&&this.block,U=this&&this.attributes||{};u=2,t="pug/profile-card.pug",e=e+'<div class="detail">',u=3,t="pug/profile-card.pug",e=e+"<span"+(' class="icon"'+oe("title",m,!0,!1))+">",u=4,t="pug/profile-card.pug",e=e+"<i"+oe("class",wn(["icon","fs-lg",M],[!1,!1,!0]),!1,!1)+"></i></span>",u=5,t="pug/profile-card.pug",e=e+"<span"+(' class="info"'+oe("itemprop",x,!0,!1))+">",u=6,t="pug/profile-card.pug",P?(u=7,t="pug/profile-card.pug",P&&P()):(u=9,t="pug/profile-card.pug",e=e+B((i=w)==null?"":i)),e=e+"</span></div>"},u=11,t="pug/profile-card.pug",o.render_links=i=function(M){var w=this&&this.block,x=this&&this.attributes||{};u=12,t="pug/profile-card.pug",(function(){var m=M;if(typeof m.length=="number")for(var P=0,U=m.length;P<U;P++){var R=m[P];u=13,t="pug/profile-card.pug",e=e+"<a"+(oe("class",wn(["fs-2x","social-link","link-"+R.label+" icon-"+R.label],[!1,!1,!0]),!1,!1)+oe("href",R.url,!0,!1)+' target="_blank" data-toggle="tooltip"'+oe("title",E.basics.name+" on "+R.network,!0,!1))+">",u=19,t="pug/profile-card.pug",R.network.toLowerCase()=="meetup"&&(u=20,t="pug/profile-card.pug",e=e+'<span class="path2"></span>',u=21,t="pug/profile-card.pug",e=e+'<span class="path3"></span>'),u=22,t="pug/profile-card.pug",R.network.toLowerCase()=="gitlab"&&(u=23,t="pug/profile-card.pug",e=e+'<span class="path1"></span>',u=24,t="pug/profile-card.pug",e=e+'<span class="path2"></span>',u=25,t="pug/profile-card.pug",e=e+'<span class="path3"></span>',u=26,t="pug/profile-card.pug",e=e+'<span class="path4"></span>',u=27,t="pug/profile-card.pug",e=e+'<span class="path5"></span>',u=28,t="pug/profile-card.pug",e=e+'<span class="path6"></span>',u=29,t="pug/profile-card.pug",e=e+'<span class="path7"></span>',u=30,t="pug/profile-card.pug",e=e+'<span class="path8"></span>'),e=e+"</a>"}else{var U=0;for(var P in m){U++;var R=m[P];u=13,t="pug/profile-card.pug",e=e+"<a"+(oe("class",wn(["fs-2x","social-link","link-"+R.label+" icon-"+R.label],[!1,!1,!0]),!1,!1)+oe("href",R.url,!0,!1)+' target="_blank" data-toggle="tooltip"'+oe("title",E.basics.name+" on "+R.network,!0,!1))+">",u=19,t="pug/profile-card.pug",R.network.toLowerCase()=="meetup"&&(u=20,t="pug/profile-card.pug",e=e+'<span class="path2"></span>',u=21,t="pug/profile-card.pug",e=e+'<span class="path3"></span>'),u=22,t="pug/profile-card.pug",R.network.toLowerCase()=="gitlab"&&(u=23,t="pug/profile-card.pug",e=e+'<span class="path1"></span>',u=24,t="pug/profile-card.pug",e=e+'<span class="path2"></span>',u=25,t="pug/profile-card.pug",e=e+'<span class="path3"></span>',u=26,t="pug/profile-card.pug",e=e+'<span class="path4"></span>',u=27,t="pug/profile-card.pug",e=e+'<span class="path5"></span>',u=28,t="pug/profile-card.pug",e=e+'<span class="path6"></span>',u=29,t="pug/profile-card.pug",e=e+'<span class="path7"></span>',u=30,t="pug/profile-card.pug",e=e+'<span class="path8"></span>'),e=e+"</a>"}}}).call(this)},u=32,t="pug/profile-card.pug",e=e+'<section class="col-md-3 card-wrapper profile-card-wrapper affix">',u=33,t="pug/profile-card.pug",e=e+'<div class="card profile-card">',u=34,t="pug/profile-card.pug",e=e+'<span class="profile-pic-container">',u=35,t="pug/profile-card.pug",e=e+'<div class="profile-pic">',u=36,t="pug/profile-card.pug",e=e+"<img"+(' class="media-object img-circle center-block" data-src="holder.js/100x100"'+oe("alt",E.basics.name,!0,!1)+oe("src",E.basics.picture,!0,!1)+' itemprop="image"')+"/></div>",u=42,t="pug/profile-card.pug",e=e+'<div class="name-and-profession text-center">',u=43,t="pug/profile-card.pug",e=e+'<h3 itemprop="name">',u=43,t="pug/profile-card.pug",e=e+"<b>",u=43,t="pug/profile-card.pug",e=e+B((i=E.basics.name)==null?"":i)+"</b></h3>",u=44,t="pug/profile-card.pug",e=e+'<h5 class="text-muted" itemprop="jobTitle">',u=44,t="pug/profile-card.pug",e=e+B((i=E.basics.label)==null?"":i)+"</h5></div></span>",u=46,t="pug/profile-card.pug",e=e+"<hr/>",u=48,t="pug/profile-card.pug",e=e+'<div class="contact-details clearfix">',u=49,t="pug/profile-card.pug",E.basics.computed_location&&(u=50,t="pug/profile-card.pug",o.profile_card_detail("icon-location",E.basics.computed_location)),u=51,t="pug/profile-card.pug",E.basics.phone&&(u=52,t="pug/profile-card.pug",o.profile_card_detail("icon-phone",E.basics.phone,"telephone")),u=53,t="pug/profile-card.pug",E.basics.email&&(u=54,t="pug/profile-card.pug",o.profile_card_detail.call({block:function(){u=55,t="pug/profile-card.pug",e=e+"<a"+(' class="link-disguise"'+oe("href","mailto:"+E.basics.email,!0,!1)+' itemprop="email"')+">",u=55,t="pug/profile-card.pug",e=e+B((i=E.basics.email)==null?"":i)+"</a>"}},"icon-mail")),u=56,t="pug/profile-card.pug",E.basics.website&&(u=57,t="pug/profile-card.pug",o.profile_card_detail.call({block:function(){u=58,t="pug/profile-card.pug",e=e+"<a"+(oe("href",E.basics.website,!0,!1)+' target="_blank"')+">",u=58,t="pug/profile-card.pug",e=e+B((i=E.basics.website)==null?"":i)+"</a>"}},"icon-link")),u=59,t="pug/profile-card.pug",E.basics.languages&&(u=60,t="pug/profile-card.pug",o.profile_card_detail("icon-language",E.basics.languages,null,"Languages I speak")),e=e+"</div>",u=62,t="pug/profile-card.pug",e=e+"<hr/>",u=64,t="pug/profile-card.pug",e=e+'<div class="social-links text-center">',u=65,t="pug/profile-card.pug",e=e+"<div>",u=66,t="pug/profile-card.pug",o.render_links(E.basics.top_five_profiles),u=68,t="pug/profile-card.pug",E.basics.remaining_profiles.length>0&&(u=69,t="pug/profile-card.pug",e=e+'<button class="btn btn-default btn-sm btn-circle-sm pull-right js-profiles-collapse" data-toggle="collapse" data-target="#remaining-profiles">',u=72,t="pug/profile-card.pug",e=e+'<i class="icon-chevron-down fs-lg"></i></button>',u=74,t="pug/profile-card.pug",e=e+'<div class="collapse text-left" id="remaining-profiles">',u=75,t="pug/profile-card.pug",o.render_links(E.basics.remaining_profiles),e=e+"</div>"),e=e+"</div></div></div></section>",u=1,t="pug/background-card.pug",e=e+'<section class="col-md-9 card-wrapper pull-right">',u=2,t="pug/background-card.pug",e=e+'<div class="card background-card">',u=3,t="pug/background-card.pug",e=e+'<h4 class="text-uppercase">',u=3,t="pug/background-card.pug",e=e+"Background</h4>",u=4,t="pug/background-card.pug",e=e+"<hr/>",u=6,t="pug/background-card.pug",e=e+'<div class="background-details">',u=1,t="pug/background/about.pug",h.isEmpty(E.basics.summary)||(u=2,t="pug/background/about.pug",e=e+'<div class="detail" id="about">',u=3,t="pug/background/about.pug",e=e+'<div class="icon">',u=4,t="pug/background/about.pug",e=e+'<i class="fs-lg icon-board"></i>',u=5,t="pug/background/about.pug",e=e+'<span class="mobile-title">',u=5,t="pug/background/about.pug",e=e+"About</span></div>",u=6,t="pug/background/about.pug",e=e+'<div class="info">',u=7,t="pug/background/about.pug",e=e+'<h4 class="title text-uppercase">',u=7,t="pug/background/about.pug",e=e+"About</h4>",u=9,t="pug/background/about.pug",e=e+'<div class="card card-nested">',u=10,t="pug/background/about.pug",e=e+'<div class="content mop-wrapper" itemprop="description">',u=10,t="pug/background/about.pug",e=e+((i=E.basics.summary)==null?"":i)+"</div></div></div></div>"),u=1,t="pug/background/work-experience.pug",h.isEmpty(E.work)||(u=2,t="pug/background/work-experience.pug",e=e+'<div class="detail" id="work-experience">',u=3,t="pug/background/work-experience.pug",e=e+'<div class="icon">',u=4,t="pug/background/work-experience.pug",e=e+'<i class="fs-lg icon-office"></i>',u=5,t="pug/background/work-experience.pug",e=e+'<span class="mobile-title">',u=5,t="pug/background/work-experience.pug",e=e+"Work Experience</span></div>",u=7,t="pug/background/work-experience.pug",e=e+'<div class="info">',u=8,t="pug/background/work-experience.pug",e=e+'<h4 class="title text-uppercase">',u=8,t="pug/background/work-experience.pug",e=e+"Work Experience</h4>",u=10,t="pug/background/work-experience.pug",e=e+'<ul class="list-unstyled clear-margin">',u=11,t="pug/background/work-experience.pug",(function(){var M=E.work;if(typeof M.length=="number")for(var w=0,x=M.length;w<x;w++){var m=M[w];u=12,t="pug/background/work-experience.pug",e=e+'<li class="card card-nested clearfix">',u=13,t="pug/background/work-experience.pug",e=e+'<div class="content">',u=14,t="pug/background/work-experience.pug",e=e+'<p class="clear-margin relative">',u=15,t="pug/background/work-experience.pug",m.endDate||(u=16,t="pug/background/work-experience.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),u=21,t="pug/background/work-experience.pug",e=e+"<strong>",u=21,t="pug/background/work-experience.pug",e=e+B((i=m.position)==null?"":i)+"</strong>",u=22,t="pug/background/work-experience.pug",e=e+",&nbsp;",u=23,t="pug/background/work-experience.pug",m.url?(u=24,t="pug/background/work-experience.pug",e=e+"<a"+(oe("href",m.url,!0,!1)+' target="_blank"')+">",u=24,t="pug/background/work-experience.pug",e=e+B((i=m.name)==null?"":i)+"</a>"):(u=26,t="pug/background/work-experience.pug",e=e+B((i=m.name)==null?"":i)),e=e+"</p>",u=28,t="pug/background/work-experience.pug",e=e+'<p class="text-muted">',u=29,t="pug/background/work-experience.pug",e=e+"<small>",u=30,t="pug/background/work-experience.pug",e=e+'<span class="space-right">',u=31,t="pug/background/work-experience.pug",e=e+B((i=m.startDate)==null?"":i),u=31,t="pug/background/work-experience.pug",e=e+" - ",u=31,t="pug/background/work-experience.pug",e=e+B((i=m.endDate||"Present")==null?"":i)+"</span>",u=33,t="pug/background/work-experience.pug",m.duration&&(u=34,t="pug/background/work-experience.pug",e=e+"<span>",u=35,t="pug/background/work-experience.pug",e=e+'<i class="icon-clock mr-5"></i>',u=36,t="pug/background/work-experience.pug",e=e+B((i=m.duration)==null?"":i)+"</span>"),e=e+"</small></p>",u=38,t="pug/background/work-experience.pug",e=e+'<div class="mop-wrapper space-bottom">',u=38,t="pug/background/work-experience.pug",e=e+((i=m.summary)==null?"":i)+"</div>",u=40,t="pug/background/work-experience.pug",h.isEmpty(m.highlights)||(u=41,t="pug/background/work-experience.pug",e=e+"<ul>",u=42,t="pug/background/work-experience.pug",(function(){var P=m.highlights;if(typeof P.length=="number")for(var U=0,R=P.length;U<R;U++){var I=P[U];u=43,t="pug/background/work-experience.pug",e=e+'<li class="mop-wrapper">',u=43,t="pug/background/work-experience.pug",e=e+((i=I)==null?"":i)+"</li>"}else{var R=0;for(var U in P){R++;var I=P[U];u=43,t="pug/background/work-experience.pug",e=e+'<li class="mop-wrapper">',u=43,t="pug/background/work-experience.pug",e=e+((i=I)==null?"":i)+"</li>"}}}).call(this),e=e+"</ul>"),e=e+"</div></li>"}else{var x=0;for(var w in M){x++;var m=M[w];u=12,t="pug/background/work-experience.pug",e=e+'<li class="card card-nested clearfix">',u=13,t="pug/background/work-experience.pug",e=e+'<div class="content">',u=14,t="pug/background/work-experience.pug",e=e+'<p class="clear-margin relative">',u=15,t="pug/background/work-experience.pug",m.endDate||(u=16,t="pug/background/work-experience.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),u=21,t="pug/background/work-experience.pug",e=e+"<strong>",u=21,t="pug/background/work-experience.pug",e=e+B((i=m.position)==null?"":i)+"</strong>",u=22,t="pug/background/work-experience.pug",e=e+",&nbsp;",u=23,t="pug/background/work-experience.pug",m.url?(u=24,t="pug/background/work-experience.pug",e=e+"<a"+(oe("href",m.url,!0,!1)+' target="_blank"')+">",u=24,t="pug/background/work-experience.pug",e=e+B((i=m.name)==null?"":i)+"</a>"):(u=26,t="pug/background/work-experience.pug",e=e+B((i=m.name)==null?"":i)),e=e+"</p>",u=28,t="pug/background/work-experience.pug",e=e+'<p class="text-muted">',u=29,t="pug/background/work-experience.pug",e=e+"<small>",u=30,t="pug/background/work-experience.pug",e=e+'<span class="space-right">',u=31,t="pug/background/work-experience.pug",e=e+B((i=m.startDate)==null?"":i),u=31,t="pug/background/work-experience.pug",e=e+" - ",u=31,t="pug/background/work-experience.pug",e=e+B((i=m.endDate||"Present")==null?"":i)+"</span>",u=33,t="pug/background/work-experience.pug",m.duration&&(u=34,t="pug/background/work-experience.pug",e=e+"<span>",u=35,t="pug/background/work-experience.pug",e=e+'<i class="icon-clock mr-5"></i>',u=36,t="pug/background/work-experience.pug",e=e+B((i=m.duration)==null?"":i)+"</span>"),e=e+"</small></p>",u=38,t="pug/background/work-experience.pug",e=e+'<div class="mop-wrapper space-bottom">',u=38,t="pug/background/work-experience.pug",e=e+((i=m.summary)==null?"":i)+"</div>",u=40,t="pug/background/work-experience.pug",h.isEmpty(m.highlights)||(u=41,t="pug/background/work-experience.pug",e=e+"<ul>",u=42,t="pug/background/work-experience.pug",(function(){var I=m.highlights;if(typeof I.length=="number")for(var k=0,A=I.length;k<A;k++){var q=I[k];u=43,t="pug/background/work-experience.pug",e=e+'<li class="mop-wrapper">',u=43,t="pug/background/work-experience.pug",e=e+((i=q)==null?"":i)+"</li>"}else{var A=0;for(var k in I){A++;var q=I[k];u=43,t="pug/background/work-experience.pug",e=e+'<li class="mop-wrapper">',u=43,t="pug/background/work-experience.pug",e=e+((i=q)==null?"":i)+"</li>"}}}).call(this),e=e+"</ul>"),e=e+"</div></li>"}}}).call(this),e=e+"</ul></div></div>"),u=1,t="pug/background/projects-experience.pug",h.isEmpty(E.projects)||(u=2,t="pug/background/projects-experience.pug",e=e+'<div class="detail" id="projects-experience">',u=3,t="pug/background/projects-experience.pug",e=e+'<div class="icon">',u=4,t="pug/background/projects-experience.pug",e=e+'<i class="fs-lg icon-code"></i>',u=5,t="pug/background/projects-experience.pug",e=e+'<span class="mobile-title">',u=5,t="pug/background/projects-experience.pug",e=e+"Projects Experience</span></div>",u=7,t="pug/background/projects-experience.pug",e=e+'<div class="info">',u=8,t="pug/background/projects-experience.pug",e=e+'<h4 class="title text-uppercase">',u=8,t="pug/background/projects-experience.pug",e=e+"Projects Experience</h4>",u=10,t="pug/background/projects-experience.pug",e=e+'<ul class="list-unstyled clear-margin">',u=11,t="pug/background/projects-experience.pug",(function(){var M=E.projects;if(typeof M.length=="number")for(var w=0,x=M.length;w<x;w++){var m=M[w];u=12,t="pug/background/projects-experience.pug",e=e+'<li class="card card-nested clearfix">',u=13,t="pug/background/projects-experience.pug",e=e+'<div class="content">',u=14,t="pug/background/projects-experience.pug",e=e+'<p class="clear-margin relative">',u=15,t="pug/background/projects-experience.pug",m.endDate||(u=16,t="pug/background/projects-experience.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),u=21,t="pug/background/projects-experience.pug",m.url?(u=22,t="pug/background/projects-experience.pug",e=e+"<a"+(oe("href",m.url,!0,!1)+' target="_blank"')+">",u=23,t="pug/background/projects-experience.pug",e=e+"<strong>",u=23,t="pug/background/projects-experience.pug",e=e+B((i=m.name)==null?"":i)+"</strong></a>"):(u=25,t="pug/background/projects-experience.pug",e=e+"<strong>",u=25,t="pug/background/projects-experience.pug",e=e+B((i=m.name)==null?"":i)+"</strong>"),u=26,t="pug/background/projects-experience.pug",m.entity&&(u=27,t="pug/background/projects-experience.pug",e=e+"<span>",u=28,t="pug/background/projects-experience.pug",e=e+",&nbsp;",u=28,t="pug/background/projects-experience.pug",e=e+B((i=m.entity)==null?"":i)+"</span>"),e=e+"</p>",u=30,t="pug/background/projects-experience.pug",e=e+'<p class="text-muted">',u=31,t="pug/background/projects-experience.pug",e=e+"<small>",u=32,t="pug/background/projects-experience.pug",e=e+'<span class="space-right">',u=33,t="pug/background/projects-experience.pug",e=e+B((i=m.startDate)==null?"":i),u=33,t="pug/background/projects-experience.pug",e=e+" - ",u=33,t="pug/background/projects-experience.pug",e=e+B((i=m.endDate||"Present")==null?"":i)+"</span>",u=35,t="pug/background/projects-experience.pug",m.duration&&(u=36,t="pug/background/projects-experience.pug",e=e+"<span>",u=37,t="pug/background/projects-experience.pug",e=e+'<i class="icon-clock mr-5"></i>',u=38,t="pug/background/projects-experience.pug",e=e+B((i=m.duration)==null?"":i)+"</span>"),e=e+"</small></p>",u=40,t="pug/background/projects-experience.pug",e=e+'<div class="mop-wrapper space-bottom">',u=40,t="pug/background/projects-experience.pug",e=e+((i=m.description)==null?"":i)+"</div>",u=42,t="pug/background/projects-experience.pug",h.isEmpty(m.highlights)||(u=43,t="pug/background/projects-experience.pug",e=e+"<ul>",u=44,t="pug/background/projects-experience.pug",(function(){var P=m.highlights;if(typeof P.length=="number")for(var U=0,R=P.length;U<R;U++){var I=P[U];u=45,t="pug/background/projects-experience.pug",e=e+'<li class="mop-wrapper">',u=45,t="pug/background/projects-experience.pug",e=e+((i=I)==null?"":i)+"</li>"}else{var R=0;for(var U in P){R++;var I=P[U];u=45,t="pug/background/projects-experience.pug",e=e+'<li class="mop-wrapper">',u=45,t="pug/background/projects-experience.pug",e=e+((i=I)==null?"":i)+"</li>"}}}).call(this),e=e+"</ul>"),e=e+"</div></li>"}else{var x=0;for(var w in M){x++;var m=M[w];u=12,t="pug/background/projects-experience.pug",e=e+'<li class="card card-nested clearfix">',u=13,t="pug/background/projects-experience.pug",e=e+'<div class="content">',u=14,t="pug/background/projects-experience.pug",e=e+'<p class="clear-margin relative">',u=15,t="pug/background/projects-experience.pug",m.endDate||(u=16,t="pug/background/projects-experience.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),u=21,t="pug/background/projects-experience.pug",m.url?(u=22,t="pug/background/projects-experience.pug",e=e+"<a"+(oe("href",m.url,!0,!1)+' target="_blank"')+">",u=23,t="pug/background/projects-experience.pug",e=e+"<strong>",u=23,t="pug/background/projects-experience.pug",e=e+B((i=m.name)==null?"":i)+"</strong></a>"):(u=25,t="pug/background/projects-experience.pug",e=e+"<strong>",u=25,t="pug/background/projects-experience.pug",e=e+B((i=m.name)==null?"":i)+"</strong>"),u=26,t="pug/background/projects-experience.pug",m.entity&&(u=27,t="pug/background/projects-experience.pug",e=e+"<span>",u=28,t="pug/background/projects-experience.pug",e=e+",&nbsp;",u=28,t="pug/background/projects-experience.pug",e=e+B((i=m.entity)==null?"":i)+"</span>"),e=e+"</p>",u=30,t="pug/background/projects-experience.pug",e=e+'<p class="text-muted">',u=31,t="pug/background/projects-experience.pug",e=e+"<small>",u=32,t="pug/background/projects-experience.pug",e=e+'<span class="space-right">',u=33,t="pug/background/projects-experience.pug",e=e+B((i=m.startDate)==null?"":i),u=33,t="pug/background/projects-experience.pug",e=e+" - ",u=33,t="pug/background/projects-experience.pug",e=e+B((i=m.endDate||"Present")==null?"":i)+"</span>",u=35,t="pug/background/projects-experience.pug",m.duration&&(u=36,t="pug/background/projects-experience.pug",e=e+"<span>",u=37,t="pug/background/projects-experience.pug",e=e+'<i class="icon-clock mr-5"></i>',u=38,t="pug/background/projects-experience.pug",e=e+B((i=m.duration)==null?"":i)+"</span>"),e=e+"</small></p>",u=40,t="pug/background/projects-experience.pug",e=e+'<div class="mop-wrapper space-bottom">',u=40,t="pug/background/projects-experience.pug",e=e+((i=m.description)==null?"":i)+"</div>",u=42,t="pug/background/projects-experience.pug",h.isEmpty(m.highlights)||(u=43,t="pug/background/projects-experience.pug",e=e+"<ul>",u=44,t="pug/background/projects-experience.pug",(function(){var I=m.highlights;if(typeof I.length=="number")for(var k=0,A=I.length;k<A;k++){var q=I[k];u=45,t="pug/background/projects-experience.pug",e=e+'<li class="mop-wrapper">',u=45,t="pug/background/projects-experience.pug",e=e+((i=q)==null?"":i)+"</li>"}else{var A=0;for(var k in I){A++;var q=I[k];u=45,t="pug/background/projects-experience.pug",e=e+'<li class="mop-wrapper">',u=45,t="pug/background/projects-experience.pug",e=e+((i=q)==null?"":i)+"</li>"}}}).call(this),e=e+"</ul>"),e=e+"</div></li>"}}}).call(this),e=e+"</ul></div></div>"),u=1,t="pug/background/skills.pug",h.isEmpty(E.skills)||(u=2,t="pug/background/skills.pug",e=e+'<div class="detail" id="skills">',u=3,t="pug/background/skills.pug",e=e+'<div class="icon">',u=4,t="pug/background/skills.pug",e=e+'<i class="fs-lg icon-tools"></i>',u=5,t="pug/background/skills.pug",e=e+'<span class="mobile-title">',u=5,t="pug/background/skills.pug",e=e+"Skills</span></div>",u=7,t="pug/background/skills.pug",e=e+'<div class="info">',u=8,t="pug/background/skills.pug",e=e+'<h4 class="title text-uppercase">',u=8,t="pug/background/skills.pug",e=e+"Skills</h4>",u=10,t="pug/background/skills.pug",e=e+'<div class="content">',u=11,t="pug/background/skills.pug",e=e+'<ul class="list-unstyled clear-margin">',u=12,t="pug/background/skills.pug",(function(){var M=E.skills;if(typeof M.length=="number")for(var w=0,x=M.length;w<x;w++){var m=M[w];u=13,t="pug/background/skills.pug",e=e+'<li class="card card-nested card-skills">',u=14,t="pug/background/skills.pug",m.display_progress_bar&&(u=15,t="pug/background/skills.pug",e=e+"<div"+(' class="skill-level" data-toggle="tooltip"'+oe("title",m.level,!0,!1)+' data-placement="left"')+">",u=16,t="pug/background/skills.pug",e=e+"<div"+oe("class",wn(["skill-progress",m.skill_class],[!1,!0]),!1,!1)+"></div></div>"),u=18,t="pug/background/skills.pug",e=e+'<div class="skill-info">',u=19,t="pug/background/skills.pug",e=e+"<strong>",u=19,t="pug/background/skills.pug",e=e+B((i=m.name)==null?"":i)+"</strong>",u=21,t="pug/background/skills.pug",h.isEmpty(m.keywords)||(u=22,t="pug/background/skills.pug",e=e+'<div class="space-top labels">',u=23,t="pug/background/skills.pug",(function(){var P=m.keywords;if(typeof P.length=="number")for(var U=0,R=P.length;U<R;U++){var I=P[U];u=24,t="pug/background/skills.pug",e=e+'<span class="label label-keyword">',u=24,t="pug/background/skills.pug",e=e+((i=I)==null?"":i)+"</span>"}else{var R=0;for(var U in P){R++;var I=P[U];u=24,t="pug/background/skills.pug",e=e+'<span class="label label-keyword">',u=24,t="pug/background/skills.pug",e=e+((i=I)==null?"":i)+"</span>"}}}).call(this),e=e+"</div>"),e=e+"</div></li>"}else{var x=0;for(var w in M){x++;var m=M[w];u=13,t="pug/background/skills.pug",e=e+'<li class="card card-nested card-skills">',u=14,t="pug/background/skills.pug",m.display_progress_bar&&(u=15,t="pug/background/skills.pug",e=e+"<div"+(' class="skill-level" data-toggle="tooltip"'+oe("title",m.level,!0,!1)+' data-placement="left"')+">",u=16,t="pug/background/skills.pug",e=e+"<div"+oe("class",wn(["skill-progress",m.skill_class],[!1,!0]),!1,!1)+"></div></div>"),u=18,t="pug/background/skills.pug",e=e+'<div class="skill-info">',u=19,t="pug/background/skills.pug",e=e+"<strong>",u=19,t="pug/background/skills.pug",e=e+B((i=m.name)==null?"":i)+"</strong>",u=21,t="pug/background/skills.pug",h.isEmpty(m.keywords)||(u=22,t="pug/background/skills.pug",e=e+'<div class="space-top labels">',u=23,t="pug/background/skills.pug",(function(){var I=m.keywords;if(typeof I.length=="number")for(var k=0,A=I.length;k<A;k++){var q=I[k];u=24,t="pug/background/skills.pug",e=e+'<span class="label label-keyword">',u=24,t="pug/background/skills.pug",e=e+((i=q)==null?"":i)+"</span>"}else{var A=0;for(var k in I){A++;var q=I[k];u=24,t="pug/background/skills.pug",e=e+'<span class="label label-keyword">',u=24,t="pug/background/skills.pug",e=e+((i=q)==null?"":i)+"</span>"}}}).call(this),e=e+"</div>"),e=e+"</div></li>"}}}).call(this),e=e+"</ul></div></div></div>"),u=1,t="pug/background/education.pug",h.isEmpty(E.education)||(u=2,t="pug/background/education.pug",e=e+'<div class="detail" id="education">',u=3,t="pug/background/education.pug",e=e+'<div class="icon">',u=4,t="pug/background/education.pug",e=e+'<i class="fs-lg icon-graduation-cap"></i>',u=5,t="pug/background/education.pug",e=e+'<span class="mobile-title">',u=5,t="pug/background/education.pug",e=e+"Education</span></div>",u=7,t="pug/background/education.pug",e=e+'<div class="info">',u=8,t="pug/background/education.pug",e=e+'<h4 class="title text-uppercase">',u=8,t="pug/background/education.pug",e=e+"Education</h4>",u=10,t="pug/background/education.pug",e=e+'<div class="content">',u=11,t="pug/background/education.pug",e=e+'<ul class="list-unstyled clear-margin">',u=12,t="pug/background/education.pug",(function(){var M=E.education;if(typeof M.length=="number")for(var w=0,x=M.length;w<x;w++){var m=M[w];u=13,t="pug/background/education.pug",e=e+'<li class="card card-nested">',u=14,t="pug/background/education.pug",e=e+'<div class="content">',u=15,t="pug/background/education.pug",e=e+'<p class="clear-margin relative">',u=16,t="pug/background/education.pug",m.endDate||(u=17,t="pug/background/education.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Pursuing" data-placement="left"></i>'),u=23,t="pug/background/education.pug",e=e+"<strong>",u=24,t="pug/background/education.pug",e=e+B((i=m.area)==null?"":i),u=24,t="pug/background/education.pug",e=e+", ",u=24,t="pug/background/education.pug",e=e+B((i=m.studyType)==null?"":i),u=24,t="pug/background/education.pug",e=e+",&nbsp;</strong>",u=25,t="pug/background/education.pug",e=e+B((i=m.institution)==null?"":i)+"</p>",u=27,t="pug/background/education.pug",e=e+"<p"+oe("class",wn(["text-muted",!m.gpa&&h.isEmpty(m.courses)?"clear-margin":""],[!1,!0]),!1,!1)+">",u=28,t="pug/background/education.pug",e=e+"<small>",u=29,t="pug/background/education.pug",e=e+B((i=m.startDate)==null?"":i),u=29,t="pug/background/education.pug",e=e+" - ",u=29,t="pug/background/education.pug",e=e+B((i=m.endDate||"Present")==null?"":i)+"</small></p>",u=30,t="pug/background/education.pug",e=e+"<i>",u=30,t="pug/background/education.pug",e=e+B((i=m.gpa)==null?"":i)+"</i>",u=32,t="pug/background/education.pug",h.isEmpty(m.courses)||(u=33,t="pug/background/education.pug",e=e+'<div class="space-top labels">',u=34,t="pug/background/education.pug",(function(){var P=m.courses;if(typeof P.length=="number")for(var U=0,R=P.length;U<R;U++){var I=P[U];u=35,t="pug/background/education.pug",e=e+'<span class="label label-keyword">',u=35,t="pug/background/education.pug",e=e+((i=I)==null?"":i)+"</span>"}else{var R=0;for(var U in P){R++;var I=P[U];u=35,t="pug/background/education.pug",e=e+'<span class="label label-keyword">',u=35,t="pug/background/education.pug",e=e+((i=I)==null?"":i)+"</span>"}}}).call(this),e=e+"</div>"),e=e+"</div></li>"}else{var x=0;for(var w in M){x++;var m=M[w];u=13,t="pug/background/education.pug",e=e+'<li class="card card-nested">',u=14,t="pug/background/education.pug",e=e+'<div class="content">',u=15,t="pug/background/education.pug",e=e+'<p class="clear-margin relative">',u=16,t="pug/background/education.pug",m.endDate||(u=17,t="pug/background/education.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Pursuing" data-placement="left"></i>'),u=23,t="pug/background/education.pug",e=e+"<strong>",u=24,t="pug/background/education.pug",e=e+B((i=m.area)==null?"":i),u=24,t="pug/background/education.pug",e=e+", ",u=24,t="pug/background/education.pug",e=e+B((i=m.studyType)==null?"":i),u=24,t="pug/background/education.pug",e=e+",&nbsp;</strong>",u=25,t="pug/background/education.pug",e=e+B((i=m.institution)==null?"":i)+"</p>",u=27,t="pug/background/education.pug",e=e+"<p"+oe("class",wn(["text-muted",!m.gpa&&h.isEmpty(m.courses)?"clear-margin":""],[!1,!0]),!1,!1)+">",u=28,t="pug/background/education.pug",e=e+"<small>",u=29,t="pug/background/education.pug",e=e+B((i=m.startDate)==null?"":i),u=29,t="pug/background/education.pug",e=e+" - ",u=29,t="pug/background/education.pug",e=e+B((i=m.endDate||"Present")==null?"":i)+"</small></p>",u=30,t="pug/background/education.pug",e=e+"<i>",u=30,t="pug/background/education.pug",e=e+B((i=m.gpa)==null?"":i)+"</i>",u=32,t="pug/background/education.pug",h.isEmpty(m.courses)||(u=33,t="pug/background/education.pug",e=e+'<div class="space-top labels">',u=34,t="pug/background/education.pug",(function(){var I=m.courses;if(typeof I.length=="number")for(var k=0,A=I.length;k<A;k++){var q=I[k];u=35,t="pug/background/education.pug",e=e+'<span class="label label-keyword">',u=35,t="pug/background/education.pug",e=e+((i=q)==null?"":i)+"</span>"}else{var A=0;for(var k in I){A++;var q=I[k];u=35,t="pug/background/education.pug",e=e+'<span class="label label-keyword">',u=35,t="pug/background/education.pug",e=e+((i=q)==null?"":i)+"</span>"}}}).call(this),e=e+"</div>"),e=e+"</div></li>"}}}).call(this),e=e+"</ul></div></div></div>"),u=1,t="pug/background/certificates.pug",h.isEmpty(E.certificates)||(u=2,t="pug/background/certificates.pug",e=e+'<div class="detail" id="certificates">',u=3,t="pug/background/certificates.pug",e=e+'<div class="icon">',u=4,t="pug/background/certificates.pug",e=e+'<i class="fs-lg icon-profile"></i>',u=5,t="pug/background/certificates.pug",e=e+'<span class="mobile-title">',u=5,t="pug/background/certificates.pug",e=e+"Certificates</span></div>",u=7,t="pug/background/certificates.pug",e=e+'<div class="info">',u=8,t="pug/background/certificates.pug",e=e+'<h4 class="title text-uppercase">',u=8,t="pug/background/certificates.pug",e=e+"Certificates</h4>",u=10,t="pug/background/certificates.pug",e=e+'<div class="content">',u=11,t="pug/background/certificates.pug",e=e+'<ul class="list-unstyled clear-margin">',u=12,t="pug/background/certificates.pug",(function(){var M=E.certificates;if(typeof M.length=="number")for(var w=0,x=M.length;w<x;w++){var m=M[w];u=13,t="pug/background/certificates.pug",e=e+'<li class="card card-nested">',u=14,t="pug/background/certificates.pug",e=e+'<div class="content">',u=15,t="pug/background/certificates.pug",e=e+'<p class="clear-margin" itemprop="certificate">',u=16,t="pug/background/certificates.pug",e=e+"<strong>",u=17,t="pug/background/certificates.pug",m.url?(u=18,t="pug/background/certificates.pug",e=e+"<a"+(oe("href",m.url,!0,!1)+' target="_blank"')+">",u=18,t="pug/background/certificates.pug",e=e+B((i=m.name)==null?"":i)+"</a>",u=19,t="pug/background/certificates.pug",e=e+",&nbsp;"):(u=21,t="pug/background/certificates.pug",e=e+B((i=m.name+", ")==null?"":i)),e=e+"</strong>",u=22,t="pug/background/certificates.pug",e=e+B((i=m.issuer)==null?"":i)+"</p>",u=24,t="pug/background/certificates.pug",e=e+'<p class="text-muted">',u=25,t="pug/background/certificates.pug",e=e+"<small>",u=26,t="pug/background/certificates.pug",e=e+"Issued on: ",u=26,t="pug/background/certificates.pug",e=e+B((i=m.date)==null?"":i)+"</small></p></div></li>"}else{var x=0;for(var w in M){x++;var m=M[w];u=13,t="pug/background/certificates.pug",e=e+'<li class="card card-nested">',u=14,t="pug/background/certificates.pug",e=e+'<div class="content">',u=15,t="pug/background/certificates.pug",e=e+'<p class="clear-margin" itemprop="certificate">',u=16,t="pug/background/certificates.pug",e=e+"<strong>",u=17,t="pug/background/certificates.pug",m.url?(u=18,t="pug/background/certificates.pug",e=e+"<a"+(oe("href",m.url,!0,!1)+' target="_blank"')+">",u=18,t="pug/background/certificates.pug",e=e+B((i=m.name)==null?"":i)+"</a>",u=19,t="pug/background/certificates.pug",e=e+",&nbsp;"):(u=21,t="pug/background/certificates.pug",e=e+B((i=m.name+", ")==null?"":i)),e=e+"</strong>",u=22,t="pug/background/certificates.pug",e=e+B((i=m.issuer)==null?"":i)+"</p>",u=24,t="pug/background/certificates.pug",e=e+'<p class="text-muted">',u=25,t="pug/background/certificates.pug",e=e+"<small>",u=26,t="pug/background/certificates.pug",e=e+"Issued on: ",u=26,t="pug/background/certificates.pug",e=e+B((i=m.date)==null?"":i)+"</small></p></div></li>"}}}).call(this),e=e+"</ul></div></div></div>"),u=1,t="pug/background/awards.pug",h.isEmpty(E.awards)||(u=2,t="pug/background/awards.pug",e=e+'<div class="detail" id="awards">',u=3,t="pug/background/awards.pug",e=e+'<div class="icon">',u=4,t="pug/background/awards.pug",e=e+'<i class="fs-lg icon-trophy"></i>',u=5,t="pug/background/awards.pug",e=e+'<span class="mobile-title">',u=5,t="pug/background/awards.pug",e=e+"Awards</span></div>",u=7,t="pug/background/awards.pug",e=e+'<div class="info">',u=8,t="pug/background/awards.pug",e=e+'<h4 class="title text-uppercase">',u=8,t="pug/background/awards.pug",e=e+"Awards</h4>",u=10,t="pug/background/awards.pug",e=e+'<div class="content">',u=11,t="pug/background/awards.pug",e=e+'<ul class="list-unstyled clear-margin">',u=12,t="pug/background/awards.pug",(function(){var M=E.awards;if(typeof M.length=="number")for(var w=0,x=M.length;w<x;w++){var m=M[w];u=13,t="pug/background/awards.pug",e=e+'<li class="card card-nested">',u=14,t="pug/background/awards.pug",e=e+'<div class="content">',u=15,t="pug/background/awards.pug",e=e+'<p class="clear-margin" itemprop="award">',u=16,t="pug/background/awards.pug",e=e+"<strong>",u=16,t="pug/background/awards.pug",e=e+B((i=m.title+" ")==null?"":i)+"</strong>",u=17,t="pug/background/awards.pug",e=e+",&nbsp;",u=17,t="pug/background/awards.pug",e=e+B((i=m.awarder)==null?"":i)+"</p>",u=19,t="pug/background/awards.pug",e=e+'<p class="text-muted">',u=20,t="pug/background/awards.pug",e=e+"<small>",u=21,t="pug/background/awards.pug",e=e+"Awarded on: ",u=21,t="pug/background/awards.pug",e=e+B((i=m.date)==null?"":i)+"</small></p>",u=23,t="pug/background/awards.pug",e=e+'<div class="mop-wrapper">',u=23,t="pug/background/awards.pug",e=e+((i=m.summary)==null?"":i)+"</div></div></li>"}else{var x=0;for(var w in M){x++;var m=M[w];u=13,t="pug/background/awards.pug",e=e+'<li class="card card-nested">',u=14,t="pug/background/awards.pug",e=e+'<div class="content">',u=15,t="pug/background/awards.pug",e=e+'<p class="clear-margin" itemprop="award">',u=16,t="pug/background/awards.pug",e=e+"<strong>",u=16,t="pug/background/awards.pug",e=e+B((i=m.title+" ")==null?"":i)+"</strong>",u=17,t="pug/background/awards.pug",e=e+",&nbsp;",u=17,t="pug/background/awards.pug",e=e+B((i=m.awarder)==null?"":i)+"</p>",u=19,t="pug/background/awards.pug",e=e+'<p class="text-muted">',u=20,t="pug/background/awards.pug",e=e+"<small>",u=21,t="pug/background/awards.pug",e=e+"Awarded on: ",u=21,t="pug/background/awards.pug",e=e+B((i=m.date)==null?"":i)+"</small></p>",u=23,t="pug/background/awards.pug",e=e+'<div class="mop-wrapper">',u=23,t="pug/background/awards.pug",e=e+((i=m.summary)==null?"":i)+"</div></div></li>"}}}).call(this),e=e+"</ul></div></div></div>"),u=1,t="pug/background/volunteer-work.pug",h.isEmpty(E.volunteer)||(u=2,t="pug/background/volunteer-work.pug",e=e+'<div class="detail" id="volunteer-work">',u=3,t="pug/background/volunteer-work.pug",e=e+'<div class="icon">',u=4,t="pug/background/volunteer-work.pug",e=e+'<i class="fs-lg icon-child"></i>',u=5,t="pug/background/volunteer-work.pug",e=e+'<span class="mobile-title">',u=5,t="pug/background/volunteer-work.pug",e=e+"Volunteer Work</span></div>",u=7,t="pug/background/volunteer-work.pug",e=e+'<div class="info">',u=8,t="pug/background/volunteer-work.pug",e=e+'<h4 class="title text-uppercase">',u=8,t="pug/background/volunteer-work.pug",e=e+"Volunteer Work</h4>",u=10,t="pug/background/volunteer-work.pug",e=e+'<div class="content">',u=11,t="pug/background/volunteer-work.pug",e=e+'<ul class="list-unstyled clear-margin">',u=12,t="pug/background/volunteer-work.pug",(function(){var M=E.volunteer;if(typeof M.length=="number")for(var w=0,x=M.length;w<x;w++){var m=M[w];u=13,t="pug/background/volunteer-work.pug",e=e+'<li class="card card-nested">',u=14,t="pug/background/volunteer-work.pug",e=e+'<div class="content">',u=15,t="pug/background/volunteer-work.pug",e=e+'<p class="clear-margin relative">',u=16,t="pug/background/volunteer-work.pug",m.endDate||(u=17,t="pug/background/volunteer-work.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Volunteering" data-placement="left"></i>'),u=23,t="pug/background/volunteer-work.pug",e=e+"<strong>",u=23,t="pug/background/volunteer-work.pug",e=e+B((i=m.position+", ")==null?"":i)+"</strong>",u=24,t="pug/background/volunteer-work.pug",m.website?(u=25,t="pug/background/volunteer-work.pug",e=e+"<a"+(oe("href",m.website,!0,!1)+' target="_blank"')+">",u=25,t="pug/background/volunteer-work.pug",e=e+B((i=m.organization)==null?"":i)+"</a>"):(u=27,t="pug/background/volunteer-work.pug",e=e+B((i=m.organization)==null?"":i)),e=e+"</p>",u=29,t="pug/background/volunteer-work.pug",e=e+'<p class="text-muted">',u=30,t="pug/background/volunteer-work.pug",e=e+"<small>",u=31,t="pug/background/volunteer-work.pug",e=e+B((i=m.startDate)==null?"":i),u=31,t="pug/background/volunteer-work.pug",e=e+" - ",u=31,t="pug/background/volunteer-work.pug",e=e+B((i=m.endDate||"Present")==null?"":i)+"</small></p>",u=33,t="pug/background/volunteer-work.pug",e=e+'<div class="mop-wrapper">',u=33,t="pug/background/volunteer-work.pug",e=e+((i=m.summary)==null?"":i)+"</div>",u=35,t="pug/background/volunteer-work.pug",h.isEmpty(m.highlights)||(u=36,t="pug/background/volunteer-work.pug",e=e+"<ul>",u=37,t="pug/background/volunteer-work.pug",(function(){var P=m.highlights;if(typeof P.length=="number")for(var U=0,R=P.length;U<R;U++){var I=P[U];u=38,t="pug/background/volunteer-work.pug",e=e+'<li class="mop-wrapper">',u=38,t="pug/background/volunteer-work.pug",e=e+((i=I)==null?"":i)+"</li>"}else{var R=0;for(var U in P){R++;var I=P[U];u=38,t="pug/background/volunteer-work.pug",e=e+'<li class="mop-wrapper">',u=38,t="pug/background/volunteer-work.pug",e=e+((i=I)==null?"":i)+"</li>"}}}).call(this),e=e+"</ul>"),e=e+"</div></li>"}else{var x=0;for(var w in M){x++;var m=M[w];u=13,t="pug/background/volunteer-work.pug",e=e+'<li class="card card-nested">',u=14,t="pug/background/volunteer-work.pug",e=e+'<div class="content">',u=15,t="pug/background/volunteer-work.pug",e=e+'<p class="clear-margin relative">',u=16,t="pug/background/volunteer-work.pug",m.endDate||(u=17,t="pug/background/volunteer-work.pug",e=e+'<i class="icon-circle current-event" rel="tooltip" title="Currently Volunteering" data-placement="left"></i>'),u=23,t="pug/background/volunteer-work.pug",e=e+"<strong>",u=23,t="pug/background/volunteer-work.pug",e=e+B((i=m.position+", ")==null?"":i)+"</strong>",u=24,t="pug/background/volunteer-work.pug",m.website?(u=25,t="pug/background/volunteer-work.pug",e=e+"<a"+(oe("href",m.website,!0,!1)+' target="_blank"')+">",u=25,t="pug/background/volunteer-work.pug",e=e+B((i=m.organization)==null?"":i)+"</a>"):(u=27,t="pug/background/volunteer-work.pug",e=e+B((i=m.organization)==null?"":i)),e=e+"</p>",u=29,t="pug/background/volunteer-work.pug",e=e+'<p class="text-muted">',u=30,t="pug/background/volunteer-work.pug",e=e+"<small>",u=31,t="pug/background/volunteer-work.pug",e=e+B((i=m.startDate)==null?"":i),u=31,t="pug/background/volunteer-work.pug",e=e+" - ",u=31,t="pug/background/volunteer-work.pug",e=e+B((i=m.endDate||"Present")==null?"":i)+"</small></p>",u=33,t="pug/background/volunteer-work.pug",e=e+'<div class="mop-wrapper">',u=33,t="pug/background/volunteer-work.pug",e=e+((i=m.summary)==null?"":i)+"</div>",u=35,t="pug/background/volunteer-work.pug",h.isEmpty(m.highlights)||(u=36,t="pug/background/volunteer-work.pug",e=e+"<ul>",u=37,t="pug/background/volunteer-work.pug",(function(){var I=m.highlights;if(typeof I.length=="number")for(var k=0,A=I.length;k<A;k++){var q=I[k];u=38,t="pug/background/volunteer-work.pug",e=e+'<li class="mop-wrapper">',u=38,t="pug/background/volunteer-work.pug",e=e+((i=q)==null?"":i)+"</li>"}else{var A=0;for(var k in I){A++;var q=I[k];u=38,t="pug/background/volunteer-work.pug",e=e+'<li class="mop-wrapper">',u=38,t="pug/background/volunteer-work.pug",e=e+((i=q)==null?"":i)+"</li>"}}}).call(this),e=e+"</ul>"),e=e+"</div></li>"}}}).call(this),e=e+"</ul></div></div></div>"),u=2,t="pug/background/publications.pug",h.isEmpty(E.publications)||(u=3,t="pug/background/publications.pug",e=e+'<div class="detail" id="publications">',u=4,t="pug/background/publications.pug",e=e+'<div class="icon">',u=5,t="pug/background/publications.pug",e=e+'<i class="fs-lg icon-newspaper"></i>',u=6,t="pug/background/publications.pug",e=e+'<span class="mobile-title">',u=6,t="pug/background/publications.pug",e=e+"Publications</span></div>",u=8,t="pug/background/publications.pug",e=e+'<div class="info">',u=9,t="pug/background/publications.pug",e=e+'<h4 class="title text-uppercase">',u=9,t="pug/background/publications.pug",e=e+"Publications</h4>",u=11,t="pug/background/publications.pug",e=e+'<div class="content">',u=12,t="pug/background/publications.pug",e=e+'<ul class="list-unstyled clear-margin">',u=13,t="pug/background/publications.pug",(function(){var M=E.publications;if(typeof M.length=="number")for(var w=0,x=M.length;w<x;w++){var m=M[w];u=14,t="pug/background/publications.pug",e=e+'<li class="card card-nested">',u=15,t="pug/background/publications.pug",e=e+'<div class="content">',u=16,t="pug/background/publications.pug",e=e+'<p class="clear-margin">',u=17,t="pug/background/publications.pug",e=e+"<strong>",u=18,t="pug/background/publications.pug",m.url?(u=19,t="pug/background/publications.pug",e=e+"<a"+(oe("href",m.url,!0,!1)+' target="_blank"')+">",u=19,t="pug/background/publications.pug",e=e+B((i=m.name)==null?"":i)+"</a>",u=20,t="pug/background/publications.pug",e=e+"&nbsp;,&nbsp;"):(u=22,t="pug/background/publications.pug",e=e+B((i=m.name+", ")==null?"":i)),e=e+"</strong>",u=23,t="pug/background/publications.pug",e=e+B((i=m.publisher)==null?"":i)+"</p>",u=25,t="pug/background/publications.pug",e=e+'<p class="text-muted">',u=26,t="pug/background/publications.pug",e=e+"<small>",u=26,t="pug/background/publications.pug",e=e+B((i="Published on: "+m.releaseDate)==null?"":i)+"</small></p>",u=28,t="pug/background/publications.pug",e=e+'<div class="mop-wrapper">',u=28,t="pug/background/publications.pug",e=e+((i=m.summary)==null?"":i)+"</div></div></li>"}else{var x=0;for(var w in M){x++;var m=M[w];u=14,t="pug/background/publications.pug",e=e+'<li class="card card-nested">',u=15,t="pug/background/publications.pug",e=e+'<div class="content">',u=16,t="pug/background/publications.pug",e=e+'<p class="clear-margin">',u=17,t="pug/background/publications.pug",e=e+"<strong>",u=18,t="pug/background/publications.pug",m.url?(u=19,t="pug/background/publications.pug",e=e+"<a"+(oe("href",m.url,!0,!1)+' target="_blank"')+">",u=19,t="pug/background/publications.pug",e=e+B((i=m.name)==null?"":i)+"</a>",u=20,t="pug/background/publications.pug",e=e+"&nbsp;,&nbsp;"):(u=22,t="pug/background/publications.pug",e=e+B((i=m.name+", ")==null?"":i)),e=e+"</strong>",u=23,t="pug/background/publications.pug",e=e+B((i=m.publisher)==null?"":i)+"</p>",u=25,t="pug/background/publications.pug",e=e+'<p class="text-muted">',u=26,t="pug/background/publications.pug",e=e+"<small>",u=26,t="pug/background/publications.pug",e=e+B((i="Published on: "+m.releaseDate)==null?"":i)+"</small></p>",u=28,t="pug/background/publications.pug",e=e+'<div class="mop-wrapper">',u=28,t="pug/background/publications.pug",e=e+((i=m.summary)==null?"":i)+"</div></div></li>"}}}).call(this),e=e+"</ul></div></div></div>"),u=1,t="pug/background/interests.pug",h.isEmpty(E.interests)||(u=2,t="pug/background/interests.pug",e=e+'<div class="detail" id="interests">',u=3,t="pug/background/interests.pug",e=e+'<div class="icon">',u=4,t="pug/background/interests.pug",e=e+'<i class="fs-lg icon-heart"></i>',u=5,t="pug/background/interests.pug",e=e+'<span class="mobile-title">',u=5,t="pug/background/interests.pug",e=e+"Interests</span></div>",u=7,t="pug/background/interests.pug",e=e+'<div class="info">',u=8,t="pug/background/interests.pug",e=e+'<h4 class="title text-uppercase">',u=8,t="pug/background/interests.pug",e=e+"Interests</h4>",u=10,t="pug/background/interests.pug",e=e+'<div class="content">',u=11,t="pug/background/interests.pug",e=e+'<ul class="list-unstyled clear-margin">',u=12,t="pug/background/interests.pug",(function(){var M=E.interests;if(typeof M.length=="number")for(var w=0,x=M.length;w<x;w++){var m=M[w];u=13,t="pug/background/interests.pug",e=e+'<li class="card card-nested">',u=14,t="pug/background/interests.pug",e=e+"<p>",u=15,t="pug/background/interests.pug",e=e+"<strong>",u=15,t="pug/background/interests.pug",e=e+B((i=m.name)==null?"":i)+"</strong></p>",u=17,t="pug/background/interests.pug",h.isEmpty(m.keywords)||(u=18,t="pug/background/interests.pug",e=e+'<div class="space-top labels">',u=19,t="pug/background/interests.pug",(function(){var P=m.keywords;if(typeof P.length=="number")for(var U=0,R=P.length;U<R;U++){var I=P[U];u=20,t="pug/background/interests.pug",e=e+'<span class="label label-keyword">',u=20,t="pug/background/interests.pug",e=e+B((i=I)==null?"":i)+"</span>"}else{var R=0;for(var U in P){R++;var I=P[U];u=20,t="pug/background/interests.pug",e=e+'<span class="label label-keyword">',u=20,t="pug/background/interests.pug",e=e+B((i=I)==null?"":i)+"</span>"}}}).call(this),e=e+"</div>"),e=e+"</li>"}else{var x=0;for(var w in M){x++;var m=M[w];u=13,t="pug/background/interests.pug",e=e+'<li class="card card-nested">',u=14,t="pug/background/interests.pug",e=e+"<p>",u=15,t="pug/background/interests.pug",e=e+"<strong>",u=15,t="pug/background/interests.pug",e=e+B((i=m.name)==null?"":i)+"</strong></p>",u=17,t="pug/background/interests.pug",h.isEmpty(m.keywords)||(u=18,t="pug/background/interests.pug",e=e+'<div class="space-top labels">',u=19,t="pug/background/interests.pug",(function(){var I=m.keywords;if(typeof I.length=="number")for(var k=0,A=I.length;k<A;k++){var q=I[k];u=20,t="pug/background/interests.pug",e=e+'<span class="label label-keyword">',u=20,t="pug/background/interests.pug",e=e+B((i=q)==null?"":i)+"</span>"}else{var A=0;for(var k in I){A++;var q=I[k];u=20,t="pug/background/interests.pug",e=e+'<span class="label label-keyword">',u=20,t="pug/background/interests.pug",e=e+B((i=q)==null?"":i)+"</span>"}}}).call(this),e=e+"</div>"),e=e+"</li>"}}}).call(this),e=e+"</ul></div></div></div>"),u=1,t="pug/background/references.pug",h.isEmpty(E.references)||(u=2,t="pug/background/references.pug",e=e+'<div class="detail" id="references">',u=3,t="pug/background/references.pug",e=e+'<div class="icon">',u=4,t="pug/background/references.pug",e=e+'<i class="fs-lg icon-thumbs-up"></i>',u=5,t="pug/background/references.pug",e=e+'<span class="mobile-title">',u=5,t="pug/background/references.pug",e=e+"References</span></div>",u=7,t="pug/background/references.pug",e=e+'<div class="info">',u=8,t="pug/background/references.pug",e=e+'<h4 class="title text-uppercase">',u=8,t="pug/background/references.pug",e=e+"References</h4>",u=10,t="pug/background/references.pug",e=e+'<div class="content">',u=11,t="pug/background/references.pug",e=e+'<ul class="list-unstyled clear-margin">',u=12,t="pug/background/references.pug",(function(){var M=E.references;if(typeof M.length=="number")for(var w=0,x=M.length;w<x;w++){var m=M[w];u=13,t="pug/background/references.pug",e=e+'<li class="card card-nested">',u=14,t="pug/background/references.pug",m.website?(u=15,t="pug/background/references.pug",e=e+"<a"+(oe("href",m.website,!0,!1)+' target="_blank"')+">",u=15,t="pug/background/references.pug",e=e+B((i=m.name)==null?"":i)+"</a>"):(u=17,t="pug/background/references.pug",e=e+B((i=m.name)==null?"":i)),u=19,t="pug/background/references.pug",e=e+'<blockquote class="quote">',u=20,t="pug/background/references.pug",e=e+'<div class="mop-wrapper">',u=20,t="pug/background/references.pug",e=e+((i=m.reference)==null?"":i)+"</div></blockquote></li>"}else{var x=0;for(var w in M){x++;var m=M[w];u=13,t="pug/background/references.pug",e=e+'<li class="card card-nested">',u=14,t="pug/background/references.pug",m.website?(u=15,t="pug/background/references.pug",e=e+"<a"+(oe("href",m.website,!0,!1)+' target="_blank"')+">",u=15,t="pug/background/references.pug",e=e+B((i=m.name)==null?"":i)+"</a>"):(u=17,t="pug/background/references.pug",e=e+B((i=m.name)==null?"":i)),u=19,t="pug/background/references.pug",e=e+'<blockquote class="quote">',u=20,t="pug/background/references.pug",e=e+'<div class="mop-wrapper">',u=20,t="pug/background/references.pug",e=e+((i=m.reference)==null?"":i)+"</div></blockquote></li>"}}}).call(this),e=e+"</ul></div></div></div>"),e=e+"</div></div></section></div></div>",u=1,t="pug/scripts.pug",e=e+'<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"><\/script>',u=2,t="pug/scripts.pug",e=e+'<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"><\/script>',u=4,t="pug/scripts.pug",e=e+"<script>",u=5,t="pug/scripts.pug",e=e+"$(function () {",u=6,t="pug/scripts.pug",e=e+`
`,u=6,t="pug/scripts.pug",e=e+"  var toggleFloatingMenu = function() {",u=7,t="pug/scripts.pug",e=e+`
`,u=7,t="pug/scripts.pug",e=e+"    $( '.js-floating-nav' ).toggleClass( 'is-visible' );",u=8,t="pug/scripts.pug",e=e+`
`,u=8,t="pug/scripts.pug",e=e+"    $( '.js-floating-nav-trigger' ).toggleClass( 'is-open' );",u=9,t="pug/scripts.pug",e=e+`
`,u=9,t="pug/scripts.pug",e=e+"  };",u=10,t="pug/scripts.pug",e=e+`
`,u=10,t="pug/scripts.pug",e=e+"",u=11,t="pug/scripts.pug",e=e+`
`,u=11,t="pug/scripts.pug",e=e+'  $( ".background-card" ).css( "min-height", window.screen.availHeight + "px" );',u=12,t="pug/scripts.pug",e=e+`
`,u=12,t="pug/scripts.pug",e=e+'  $( "[data-toggle=tooltip]" ).tooltip();',u=13,t="pug/scripts.pug",e=e+`
`,u=13,t="pug/scripts.pug",e=e+"  $( '.js-floating-nav-trigger' ).on( 'click', function(e) {",u=14,t="pug/scripts.pug",e=e+`
`,u=14,t="pug/scripts.pug",e=e+"    e.preventDefault();",u=15,t="pug/scripts.pug",e=e+`
`,u=15,t="pug/scripts.pug",e=e+"    toggleFloatingMenu();",u=16,t="pug/scripts.pug",e=e+`
`,u=16,t="pug/scripts.pug",e=e+"  });",u=17,t="pug/scripts.pug",e=e+`
`,u=17,t="pug/scripts.pug",e=e+"  $( '.js-floating-nav a' ).on( 'click', toggleFloatingMenu );",u=18,t="pug/scripts.pug",e=e+`
`,u=18,t="pug/scripts.pug",e=e+"",u=19,t="pug/scripts.pug",e=e+`
`,u=19,t="pug/scripts.pug",e=e+`  $("#remaining-profiles").on('show.bs.collapse', function() {`,u=20,t="pug/scripts.pug",e=e+`
`,u=20,t="pug/scripts.pug",e=e+"    $( '.js-profiles-collapse > i' )",u=21,t="pug/scripts.pug",e=e+`
`,u=21,t="pug/scripts.pug",e=e+"      .removeClass( 'icon-chevron-down' )",u=22,t="pug/scripts.pug",e=e+`
`,u=22,t="pug/scripts.pug",e=e+"      .addClass( 'icon-chevron-up' );",u=23,t="pug/scripts.pug",e=e+`
`,u=23,t="pug/scripts.pug",e=e+"  });",u=24,t="pug/scripts.pug",e=e+`
`,u=24,t="pug/scripts.pug",e=e+"",u=25,t="pug/scripts.pug",e=e+`
`,u=25,t="pug/scripts.pug",e=e+`  $("#remaining-profiles").on('hidden.bs.collapse', function() {`,u=26,t="pug/scripts.pug",e=e+`
`,u=26,t="pug/scripts.pug",e=e+"    $( '.js-profiles-collapse > i' )",u=27,t="pug/scripts.pug",e=e+`
`,u=27,t="pug/scripts.pug",e=e+"      .removeClass( 'icon-chevron-up' )",u=28,t="pug/scripts.pug",e=e+`
`,u=28,t="pug/scripts.pug",e=e+"      .addClass( 'icon-chevron-down' );",u=29,t="pug/scripts.pug",e=e+`
`,u=29,t="pug/scripts.pug",e=e+"  });",u=30,t="pug/scripts.pug",e=e+`
`,u=30,t="pug/scripts.pug",e=e+"});",u=31,t="pug/scripts.pug",e=e+`
`,u=31,t="pug/scripts.pug",e=e+"<\/script>",u=32,t="pug/scripts.pug",e=e+"<script>",u=33,t="pug/scripts.pug",e=e+"WebFontConfig = {",u=34,t="pug/scripts.pug",e=e+`
`,u=34,t="pug/scripts.pug",e=e+"  google: { families: [ 'Raleway' ] }",u=35,t="pug/scripts.pug",e=e+`
`,u=35,t="pug/scripts.pug",e=e+"};",u=36,t="pug/scripts.pug",e=e+`
`,u=36,t="pug/scripts.pug",e=e+"(function() {",u=37,t="pug/scripts.pug",e=e+`
`,u=37,t="pug/scripts.pug",e=e+"  var wf = document.createElement('script');",u=38,t="pug/scripts.pug",e=e+`
`,u=38,t="pug/scripts.pug",e=e+"  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +",u=39,t="pug/scripts.pug",e=e+`
`,u=39,t="pug/scripts.pug",e=e+"    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';",u=40,t="pug/scripts.pug",e=e+`
`,u=40,t="pug/scripts.pug",e=e+"  wf.type = 'text/javascript';",u=41,t="pug/scripts.pug",e=e+`
`,u=41,t="pug/scripts.pug",e=e+"  wf.async = 'true';",u=42,t="pug/scripts.pug",e=e+`
`,u=42,t="pug/scripts.pug",e=e+"  var s = document.getElementsByTagName('script')[0];",u=43,t="pug/scripts.pug",e=e+`
`,u=43,t="pug/scripts.pug",e=e+"  s.parentNode.insertBefore(wf, s);",u=44,t="pug/scripts.pug",e=e+`
`,u=44,t="pug/scripts.pug",e=e+"})();<\/script></body></html>"}).call(this,"_"in d?d._:typeof _<"u"?_:void 0,"css"in d?d.css:typeof css<"u"?css:void 0,"floating_nav_items"in d?d.floating_nav_items:typeof floating_nav_items<"u"?floating_nav_items:void 0,"resume"in d?d.resume:typeof resume<"u"?resume:void 0)}catch(h){la(h,t,u,f[t])}return e}ca.exports={renderResume:l4}});var ga=pe((w3,pa)=>{V();var fa=Xt();(function(n){var e={nodiff:"",year:"year",years:"years",month:"month",months:"months",day:"day",days:"days",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds",delimiter:" "};n.fn.preciseDiff=function(o){return n.preciseDiff(this,o)},n.preciseDiff=function(o,i){var t=n(o),u=n(i);if(t=t.startOf("day"),u=u.add(1,"day").startOf("day"),t.isSame(u))return e.nodiff;if(t.isAfter(u)){var f=t;t=u,u=f}var d=u.year()-t.year(),h=u.month()-t.month(),v=u.date()-t.date(),D=u.hour()-t.hour(),E=u.minute()-t.minute(),M=u.second()-t.second();if(M<0&&(M=60+M,E--),E<0&&(E=60+E,D--),D<0&&(D=24+D,v--),v<0){var w=n(u.year()+"-"+(u.month()+1),"YYYY-MM").subtract(1,"M").daysInMonth();w<t.date()?v=w+v+(t.date()-w):v=w+v,h--}h<0&&(h=12+h,d--);function x(P,U){return P+" "+e[U+(P===1?"":"s")]}if(!d&&!h)return v>=1?x(v,"day"):"Joined Today";var m=[];return d&&m.push(x(d,"year")),h&&m.push(x(h,"month")),m.join(e.delimiter)}})(fa);pa.exports=fa});var ba=pe((C3,ha)=>{V();var c4=(hr(),b1(gr)),ye=Z0(),He=K1(),cn=Xt(),d4=aa()({breaks:!0}).use(sa()),{renderResume:f4}=da();ga();He.setConfig({date_format:"MMM, YYYY"});function p4(n){let o=["address","city","region","countryCode","postalCode"].map(t=>n.basics.location[t]),i=c4.readFileSync("//assets/css/theme.css","utf-8");return n.basics.picture=He.getUrlForPicture(n),n.basics.summary=Ue(n.basics.summary),n.basics.computed_location=ye.compact(o).join(", "),n.languages&&(n.basics.languages=ye.pluck(n.languages,"language").join(", ")),ye(n.basics.profiles).forEach(t=>{let u=t.network.toLowerCase();t.url=He.getUrlForProfile(n,u),t.label=u}),n.basics.top_five_profiles=n.basics.profiles.slice(0,5),n.basics.remaining_profiles=n.basics.profiles.slice(5),ye(n.projects).forEach(t=>{let u=cn(t.startDate,"YYYY-MM-DD"),f=cn(t.endDate,"YYYY-MM-DD");u.isValid()&&f.isValid()&&(t.duration=t.endDate!=null&&f.isValid()?cn.preciseDiff(u,f):cn.preciseDiff(u,cn())),u.isValid()&&(t.startDate=He.getFormattedDate(u)),f.isValid()&&(t.endDate=He.getFormattedDate(f)),t.description=Ue(t.description),t.highlights=ye(t.highlights).map(h=>Ue(h))}),ye(n.work).forEach(t=>{let u=cn(t.startDate,"YYYY-MM-DD"),f=cn(t.endDate,"YYYY-MM-DD");u.isValid()&&f.isValid()&&(t.duration=t.endDate!=null&&f.isValid()?cn.preciseDiff(u,f):cn.preciseDiff(u,cn())),u.isValid()&&(t.startDate=He.getFormattedDate(u)),f.isValid()&&(t.endDate=He.getFormattedDate(f)),t.summary=Ue(t.summary),t.highlights=ye(t.highlights).map(h=>Ue(h))}),ye(n.skills).forEach(t=>{let u=["Beginner","Intermediate","Advanced","Master"];t.keywords=ye(t.keywords).map(f=>Ue(f)),t.level&&(t.skill_class=t.level.toLowerCase(),t.level=h4(t.level.trim()),t.display_progress_bar=ye.contains(u,t.level))}),ye(n.education).forEach(t=>{["startDate","endDate"].forEach(u=>{let f=t[u];f&&(t[u]=He.getFormattedDate(f))}),t.courses=ye(t.courses).map(u=>Ue(u))}),ye(n.certificates).forEach(t=>{let u=t.date;u&&(t.date=He.getFormattedDate(u,"MMM DD, YYYY"))}),ye(n.awards).forEach(t=>{let u=t.date;t.summary=Ue(t.summary),u&&(t.date=He.getFormattedDate(u,"MMM DD, YYYY"))}),ye(n.volunteer).forEach(t=>{t.summary=Ue(t.summary),["startDate","endDate"].forEach(u=>{let f=t[u];f&&(t[u]=He.getFormattedDate(f))}),t.highlights=ye(t.highlights).map(Ue)}),ye(n.publications).forEach(t=>{let u=t.releaseDate;t.summary=Ue(t.summary),u&&(t.releaseDate=He.getFormattedDate(u,"MMM DD, YYYY"))}),ye(n.references).forEach(t=>{t.reference=Ue(t.reference)}),f4({resume:n,floating_nav_items:b4(n),css:i,_:ye})}function g4(n,e){return e.split(".").reduce((i,t)=>(i||{})[t],n)}function h4(n){return n&&(n=n.toString(),n[0].toUpperCase()+n.slice(1).toLowerCase())}function Ue(n){if(n!=null)return d4.render(n)}function b4(n){return ye([{label:"About",target:"about",icon:"board",requires:"basics.summary"},{label:"Work Experience",target:"work-experience",icon:"office",requires:"work"},{label:"Projects Experience",target:"projects-experience",icon:"code",requires:"projects"},{label:"Skills",target:"skills",icon:"tools",requires:"skills"},{label:"Education",target:"education",icon:"graduation-cap",requires:"education"},{label:"Certificates",target:"certificates",icon:"profile",requires:"certificates"},{label:"Awards",target:"awards",icon:"trophy",requires:"awards"},{label:"Volunteer Work",target:"volunteer-work",icon:"child",requires:"volunteer"},{label:"Publications",target:"publications",icon:"newspaper",requires:"publications"},{label:"Interests",target:"interests",icon:"heart",requires:"interests"},{label:"References",target:"references",icon:"thumbs-up",requires:"references"}]).filter(o=>{let i=g4(n,o.requires);return!ye.isEmpty(i)})}ha.exports={render:p4}});V();var i0=Ts(ba(),1),ma=i0.default??i0,q3=ma.render??i0.render,M3=ma.pdfRenderOptions??i0.pdfRenderOptions;export{M3 as pdfRenderOptions,q3 as render};
/*! Bundled license information:

moment/moment.js:
  (*! moment.js *)
  (*! version : 2.30.1 *)
  (*! authors : Tim Wood, Iskren Chernev, Moment.js contributors *)
  (*! license : MIT *)
  (*! momentjs.com *)
*/
