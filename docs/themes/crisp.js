var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var qr=Object.create;var ft=Object.defineProperty;var Or=Object.getOwnPropertyDescriptor;var Ir=Object.getOwnPropertyNames;var Nr=Object.getPrototypeOf,Dr=Object.prototype.hasOwnProperty;var ke=(c,y)=>()=>(c&&(y=c(c=0)),y);var Gt=(c,y)=>()=>(y||c((y={exports:{}}).exports,y),y.exports),Pr=(c,y)=>{for(var _ in y)ft(c,_,{get:y[_],enumerable:!0})},ze=(c,y,_,w)=>{if(y&&typeof y=="object"||typeof y=="function")for(let J of Ir(y))!Dr.call(c,J)&&J!==_&&ft(c,J,{get:()=>y[J],enumerable:!(w=Or(y,J))||w.enumerable});return c};var Fr=(c,y,_)=>(_=c!=null?qr(Nr(c)):{},ze(y||!c||!c.__esModule?ft(_,"default",{value:c,enumerable:!0}):_,c)),Mr=c=>ze(ft({},"__esModule",{value:!0}),c);var dn=ke(()=>{});var De={};Pr(De,{createReadStream:()=>Ie,createWriteStream:()=>Ne,default:()=>Ur,existsSync:()=>Te,lstatSync:()=>Re,mkdirSync:()=>Ee,readFileSync:()=>je,readdirSync:()=>Ce,rmdirSync:()=>Oe,statSync:()=>Yt,unlinkSync:()=>qe,writeFileSync:()=>Se});function Kt(c){return String(c).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function _e(c){var y=Kt(c);if(gt[y]!==void 0)return gt[y];for(var _=Object.keys(gt),w=0;w<_.length;w++)if(y.endsWith("/"+_[w])||y===_[w])return gt[_[w]]}function $t(c){var y=Kt(c);if((y===""||y===".")&&In["."]!==void 0)return In["."];if(In[y]!==void 0)return In[y];for(var _=Object.keys(In),w=0;w<_.length;w++)if(y.endsWith("/"+_[w])||y===_[w])return In[_[w]]}var gt,In,je,Ce,Te,Se,Ee,Yt,Re,qe,Oe,Ie,Ne,Ur,Pe=ke(()=>{"use strict";dn();gt={"bootstrap.css":`@import url("//fonts.googleapis.com/css?family=News+Cycle:400,700");
/*!
 * bootswatch v3.3.2
 * Homepage: http://bootswatch.com
 * Copyright 2012-2015 Thomas Park
 * Licensed under MIT
 * Based on Bootstrap
*/
/*! normalize.css v3.0.2 | MIT License | git.io/normalize */
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden],
template {
  display: none;
}
a {
  background-color: transparent;
}
a:active,
a:hover {
  outline: 0;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: bold;
}
dfn {
  font-style: italic;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
mark {
  background: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  border: 0;
}
svg:not(:root) {
  overflow: hidden;
}
figure {
  margin: 1em 40px;
}
hr {
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  height: 0;
}
pre {
  overflow: auto;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  border: 0;
  padding: 0;
}
textarea {
  overflow: auto;
}
optgroup {
  font-weight: bold;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}
/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */
/*@media print {
  *,
  *:before,
  *:after {
    background: transparent !important;
    color: #000 !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
    text-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }
  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  select {
    background: #fff !important;
  }
  .navbar {
    display: none;
  }
  .btn > .caret,
  .dropup > .btn > .caret {
    border-top-color: #000 !important;
  }
  .label {
    border: 1px solid #000;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table td,
  .table th {
    background-color: #fff !important;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
}*/
@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('../fonts/glyphicons-halflings-regular.eot');
  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.glyphicon-asterisk:before {
  content: "\\2a";
}
.glyphicon-plus:before {
  content: "\\2b";
}
.glyphicon-euro:before,
.glyphicon-eur:before {
  content: "\\20ac";
}
.glyphicon-minus:before {
  content: "\\2212";
}
.glyphicon-cloud:before {
  content: "\\2601";
}
.glyphicon-envelope:before {
  content: "\\2709";
}
.glyphicon-pencil:before {
  content: "\\270f";
}
.glyphicon-glass:before {
  content: "\\e001";
}
.glyphicon-music:before {
  content: "\\e002";
}
.glyphicon-search:before {
  content: "\\e003";
}
.glyphicon-heart:before {
  content: "\\e005";
}
.glyphicon-star:before {
  content: "\\e006";
}
.glyphicon-star-empty:before {
  content: "\\e007";
}
.glyphicon-user:before {
  content: "\\e008";
}
.glyphicon-film:before {
  content: "\\e009";
}
.glyphicon-th-large:before {
  content: "\\e010";
}
.glyphicon-th:before {
  content: "\\e011";
}
.glyphicon-th-list:before {
  content: "\\e012";
}
.glyphicon-ok:before {
  content: "\\e013";
}
.glyphicon-remove:before {
  content: "\\e014";
}
.glyphicon-zoom-in:before {
  content: "\\e015";
}
.glyphicon-zoom-out:before {
  content: "\\e016";
}
.glyphicon-off:before {
  content: "\\e017";
}
.glyphicon-signal:before {
  content: "\\e018";
}
.glyphicon-cog:before {
  content: "\\e019";
}
.glyphicon-trash:before {
  content: "\\e020";
}
.glyphicon-home:before {
  content: "\\e021";
}
.glyphicon-file:before {
  content: "\\e022";
}
.glyphicon-time:before {
  content: "\\e023";
}
.glyphicon-road:before {
  content: "\\e024";
}
.glyphicon-download-alt:before {
  content: "\\e025";
}
.glyphicon-download:before {
  content: "\\e026";
}
.glyphicon-upload:before {
  content: "\\e027";
}
.glyphicon-inbox:before {
  content: "\\e028";
}
.glyphicon-play-circle:before {
  content: "\\e029";
}
.glyphicon-repeat:before {
  content: "\\e030";
}
.glyphicon-refresh:before {
  content: "\\e031";
}
.glyphicon-list-alt:before {
  content: "\\e032";
}
.glyphicon-lock:before {
  content: "\\e033";
}
.glyphicon-flag:before {
  content: "\\e034";
}
.glyphicon-headphones:before {
  content: "\\e035";
}
.glyphicon-volume-off:before {
  content: "\\e036";
}
.glyphicon-volume-down:before {
  content: "\\e037";
}
.glyphicon-volume-up:before {
  content: "\\e038";
}
.glyphicon-qrcode:before {
  content: "\\e039";
}
.glyphicon-barcode:before {
  content: "\\e040";
}
.glyphicon-tag:before {
  content: "\\e041";
}
.glyphicon-tags:before {
  content: "\\e042";
}
.glyphicon-book:before {
  content: "\\e043";
}
.glyphicon-bookmark:before {
  content: "\\e044";
}
.glyphicon-print:before {
  content: "\\e045";
}
.glyphicon-camera:before {
  content: "\\e046";
}
.glyphicon-font:before {
  content: "\\e047";
}
.glyphicon-bold:before {
  content: "\\e048";
}
.glyphicon-italic:before {
  content: "\\e049";
}
.glyphicon-text-height:before {
  content: "\\e050";
}
.glyphicon-text-width:before {
  content: "\\e051";
}
.glyphicon-align-left:before {
  content: "\\e052";
}
.glyphicon-align-center:before {
  content: "\\e053";
}
.glyphicon-align-right:before {
  content: "\\e054";
}
.glyphicon-align-justify:before {
  content: "\\e055";
}
.glyphicon-list:before {
  content: "\\e056";
}
.glyphicon-indent-left:before {
  content: "\\e057";
}
.glyphicon-indent-right:before {
  content: "\\e058";
}
.glyphicon-facetime-video:before {
  content: "\\e059";
}
.glyphicon-picture:before {
  content: "\\e060";
}
.glyphicon-map-marker:before {
  content: "\\e062";
}
.glyphicon-adjust:before {
  content: "\\e063";
}
.glyphicon-tint:before {
  content: "\\e064";
}
.glyphicon-edit:before {
  content: "\\e065";
}
.glyphicon-share:before {
  content: "\\e066";
}
.glyphicon-check:before {
  content: "\\e067";
}
.glyphicon-move:before {
  content: "\\e068";
}
.glyphicon-step-backward:before {
  content: "\\e069";
}
.glyphicon-fast-backward:before {
  content: "\\e070";
}
.glyphicon-backward:before {
  content: "\\e071";
}
.glyphicon-play:before {
  content: "\\e072";
}
.glyphicon-pause:before {
  content: "\\e073";
}
.glyphicon-stop:before {
  content: "\\e074";
}
.glyphicon-forward:before {
  content: "\\e075";
}
.glyphicon-fast-forward:before {
  content: "\\e076";
}
.glyphicon-step-forward:before {
  content: "\\e077";
}
.glyphicon-eject:before {
  content: "\\e078";
}
.glyphicon-chevron-left:before {
  content: "\\e079";
}
.glyphicon-chevron-right:before {
  content: "\\e080";
}
.glyphicon-plus-sign:before {
  content: "\\e081";
}
.glyphicon-minus-sign:before {
  content: "\\e082";
}
.glyphicon-remove-sign:before {
  content: "\\e083";
}
.glyphicon-ok-sign:before {
  content: "\\e084";
}
.glyphicon-question-sign:before {
  content: "\\e085";
}
.glyphicon-info-sign:before {
  content: "\\e086";
}
.glyphicon-screenshot:before {
  content: "\\e087";
}
.glyphicon-remove-circle:before {
  content: "\\e088";
}
.glyphicon-ok-circle:before {
  content: "\\e089";
}
.glyphicon-ban-circle:before {
  content: "\\e090";
}
.glyphicon-arrow-left:before {
  content: "\\e091";
}
.glyphicon-arrow-right:before {
  content: "\\e092";
}
.glyphicon-arrow-up:before {
  content: "\\e093";
}
.glyphicon-arrow-down:before {
  content: "\\e094";
}
.glyphicon-share-alt:before {
  content: "\\e095";
}
.glyphicon-resize-full:before {
  content: "\\e096";
}
.glyphicon-resize-small:before {
  content: "\\e097";
}
.glyphicon-exclamation-sign:before {
  content: "\\e101";
}
.glyphicon-gift:before {
  content: "\\e102";
}
.glyphicon-leaf:before {
  content: "\\e103";
}
.glyphicon-fire:before {
  content: "\\e104";
}
.glyphicon-eye-open:before {
  content: "\\e105";
}
.glyphicon-eye-close:before {
  content: "\\e106";
}
.glyphicon-warning-sign:before {
  content: "\\e107";
}
.glyphicon-plane:before {
  content: "\\e108";
}
.glyphicon-calendar:before {
  content: "\\e109";
}
.glyphicon-random:before {
  content: "\\e110";
}
.glyphicon-comment:before {
  content: "\\e111";
}
.glyphicon-magnet:before {
  content: "\\e112";
}
.glyphicon-chevron-up:before {
  content: "\\e113";
}
.glyphicon-chevron-down:before {
  content: "\\e114";
}
.glyphicon-retweet:before {
  content: "\\e115";
}
.glyphicon-shopping-cart:before {
  content: "\\e116";
}
.glyphicon-folder-close:before {
  content: "\\e117";
}
.glyphicon-folder-open:before {
  content: "\\e118";
}
.glyphicon-resize-vertical:before {
  content: "\\e119";
}
.glyphicon-resize-horizontal:before {
  content: "\\e120";
}
.glyphicon-hdd:before {
  content: "\\e121";
}
.glyphicon-bullhorn:before {
  content: "\\e122";
}
.glyphicon-bell:before {
  content: "\\e123";
}
.glyphicon-certificate:before {
  content: "\\e124";
}
.glyphicon-thumbs-up:before {
  content: "\\e125";
}
.glyphicon-thumbs-down:before {
  content: "\\e126";
}
.glyphicon-hand-right:before {
  content: "\\e127";
}
.glyphicon-hand-left:before {
  content: "\\e128";
}
.glyphicon-hand-up:before {
  content: "\\e129";
}
.glyphicon-hand-down:before {
  content: "\\e130";
}
.glyphicon-circle-arrow-right:before {
  content: "\\e131";
}
.glyphicon-circle-arrow-left:before {
  content: "\\e132";
}
.glyphicon-circle-arrow-up:before {
  content: "\\e133";
}
.glyphicon-circle-arrow-down:before {
  content: "\\e134";
}
.glyphicon-globe:before {
  content: "\\e135";
}
.glyphicon-wrench:before {
  content: "\\e136";
}
.glyphicon-tasks:before {
  content: "\\e137";
}
.glyphicon-filter:before {
  content: "\\e138";
}
.glyphicon-briefcase:before {
  content: "\\e139";
}
.glyphicon-fullscreen:before {
  content: "\\e140";
}
.glyphicon-dashboard:before {
  content: "\\e141";
}
.glyphicon-paperclip:before {
  content: "\\e142";
}
.glyphicon-heart-empty:before {
  content: "\\e143";
}
.glyphicon-link:before {
  content: "\\e144";
}
.glyphicon-phone:before {
  content: "\\e145";
}
.glyphicon-pushpin:before {
  content: "\\e146";
}
.glyphicon-usd:before {
  content: "\\e148";
}
.glyphicon-gbp:before {
  content: "\\e149";
}
.glyphicon-sort:before {
  content: "\\e150";
}
.glyphicon-sort-by-alphabet:before {
  content: "\\e151";
}
.glyphicon-sort-by-alphabet-alt:before {
  content: "\\e152";
}
.glyphicon-sort-by-order:before {
  content: "\\e153";
}
.glyphicon-sort-by-order-alt:before {
  content: "\\e154";
}
.glyphicon-sort-by-attributes:before {
  content: "\\e155";
}
.glyphicon-sort-by-attributes-alt:before {
  content: "\\e156";
}
.glyphicon-unchecked:before {
  content: "\\e157";
}
.glyphicon-expand:before {
  content: "\\e158";
}
.glyphicon-collapse-down:before {
  content: "\\e159";
}
.glyphicon-collapse-up:before {
  content: "\\e160";
}
.glyphicon-log-in:before {
  content: "\\e161";
}
.glyphicon-flash:before {
  content: "\\e162";
}
.glyphicon-log-out:before {
  content: "\\e163";
}
.glyphicon-new-window:before {
  content: "\\e164";
}
.glyphicon-record:before {
  content: "\\e165";
}
.glyphicon-save:before {
  content: "\\e166";
}
.glyphicon-open:before {
  content: "\\e167";
}
.glyphicon-saved:before {
  content: "\\e168";
}
.glyphicon-import:before {
  content: "\\e169";
}
.glyphicon-export:before {
  content: "\\e170";
}
.glyphicon-send:before {
  content: "\\e171";
}
.glyphicon-floppy-disk:before {
  content: "\\e172";
}
.glyphicon-floppy-saved:before {
  content: "\\e173";
}
.glyphicon-floppy-remove:before {
  content: "\\e174";
}
.glyphicon-floppy-save:before {
  content: "\\e175";
}
.glyphicon-floppy-open:before {
  content: "\\e176";
}
.glyphicon-credit-card:before {
  content: "\\e177";
}
.glyphicon-transfer:before {
  content: "\\e178";
}
.glyphicon-cutlery:before {
  content: "\\e179";
}
.glyphicon-header:before {
  content: "\\e180";
}
.glyphicon-compressed:before {
  content: "\\e181";
}
.glyphicon-earphone:before {
  content: "\\e182";
}
.glyphicon-phone-alt:before {
  content: "\\e183";
}
.glyphicon-tower:before {
  content: "\\e184";
}
.glyphicon-stats:before {
  content: "\\e185";
}
.glyphicon-sd-video:before {
  content: "\\e186";
}
.glyphicon-hd-video:before {
  content: "\\e187";
}
.glyphicon-subtitles:before {
  content: "\\e188";
}
.glyphicon-sound-stereo:before {
  content: "\\e189";
}
.glyphicon-sound-dolby:before {
  content: "\\e190";
}
.glyphicon-sound-5-1:before {
  content: "\\e191";
}
.glyphicon-sound-6-1:before {
  content: "\\e192";
}
.glyphicon-sound-7-1:before {
  content: "\\e193";
}
.glyphicon-copyright-mark:before {
  content: "\\e194";
}
.glyphicon-registration-mark:before {
  content: "\\e195";
}
.glyphicon-cloud-download:before {
  content: "\\e197";
}
.glyphicon-cloud-upload:before {
  content: "\\e198";
}
.glyphicon-tree-conifer:before {
  content: "\\e199";
}
.glyphicon-tree-deciduous:before {
  content: "\\e200";
}
.glyphicon-cd:before {
  content: "\\e201";
}
.glyphicon-save-file:before {
  content: "\\e202";
}
.glyphicon-open-file:before {
  content: "\\e203";
}
.glyphicon-level-up:before {
  content: "\\e204";
}
.glyphicon-copy:before {
  content: "\\e205";
}
.glyphicon-paste:before {
  content: "\\e206";
}
.glyphicon-alert:before {
  content: "\\e209";
}
.glyphicon-equalizer:before {
  content: "\\e210";
}
.glyphicon-king:before {
  content: "\\e211";
}
.glyphicon-queen:before {
  content: "\\e212";
}
.glyphicon-pawn:before {
  content: "\\e213";
}
.glyphicon-bishop:before {
  content: "\\e214";
}
.glyphicon-knight:before {
  content: "\\e215";
}
.glyphicon-baby-formula:before {
  content: "\\e216";
}
.glyphicon-tent:before {
  content: "\\26fa";
}
.glyphicon-blackboard:before {
  content: "\\e218";
}
.glyphicon-bed:before {
  content: "\\e219";
}
.glyphicon-apple:before {
  content: "\\f8ff";
}
.glyphicon-erase:before {
  content: "\\e221";
}
.glyphicon-hourglass:before {
  content: "\\231b";
}
.glyphicon-lamp:before {
  content: "\\e223";
}
.glyphicon-duplicate:before {
  content: "\\e224";
}
.glyphicon-piggy-bank:before {
  content: "\\e225";
}
.glyphicon-scissors:before {
  content: "\\e226";
}
.glyphicon-bitcoin:before {
  content: "\\e227";
}
.glyphicon-yen:before {
  content: "\\00a5";
}
.glyphicon-ruble:before {
  content: "\\20bd";
}
.glyphicon-scale:before {
  content: "\\e230";
}
.glyphicon-ice-lolly:before {
  content: "\\e231";
}
.glyphicon-ice-lolly-tasted:before {
  content: "\\e232";
}
.glyphicon-education:before {
  content: "\\e233";
}
.glyphicon-option-horizontal:before {
  content: "\\e234";
}
.glyphicon-option-vertical:before {
  content: "\\e235";
}
.glyphicon-menu-hamburger:before {
  content: "\\e236";
}
.glyphicon-modal-window:before {
  content: "\\e237";
}
.glyphicon-oil:before {
  content: "\\e238";
}
.glyphicon-grain:before {
  content: "\\e239";
}
.glyphicon-sunglasses:before {
  content: "\\e240";
}
.glyphicon-text-size:before {
  content: "\\e241";
}
.glyphicon-text-color:before {
  content: "\\e242";
}
.glyphicon-text-background:before {
  content: "\\e243";
}
.glyphicon-object-align-top:before {
  content: "\\e244";
}
.glyphicon-object-align-bottom:before {
  content: "\\e245";
}
.glyphicon-object-align-horizontal:before {
  content: "\\e246";
}
.glyphicon-object-align-left:before {
  content: "\\e247";
}
.glyphicon-object-align-vertical:before {
  content: "\\e248";
}
.glyphicon-object-align-right:before {
  content: "\\e249";
}
.glyphicon-triangle-right:before {
  content: "\\e250";
}
.glyphicon-triangle-left:before {
  content: "\\e251";
}
.glyphicon-triangle-bottom:before {
  content: "\\e252";
}
.glyphicon-triangle-top:before {
  content: "\\e253";
}
.glyphicon-console:before {
  content: "\\e254";
}
.glyphicon-superscript:before {
  content: "\\e255";
}
.glyphicon-subscript:before {
  content: "\\e256";
}
.glyphicon-menu-left:before {
  content: "\\e257";
}
.glyphicon-menu-right:before {
  content: "\\e258";
}
.glyphicon-menu-down:before {
  content: "\\e259";
}
.glyphicon-menu-up:before {
  content: "\\e260";
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 15px;
  line-height: 1.42857143;
  color: #777777;
  background-color: #ffffff;
}
input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
a {
  color: #eb6864;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #e22620;
  text-decoration: underline;
}
a:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
figure {
  margin: 0;
}
img {
  vertical-align: middle;
}
.img-responsive,
.thumbnail > img,
.thumbnail a > img,
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  display: block;
  max-width: 100%;
  height: auto;
}
.img-rounded {
  border-radius: 6px;
}
.img-thumbnail {
  padding: 4px;
  line-height: 1.42857143;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  max-width: 100%;
  height: auto;
}
.img-circle {
  border-radius: 50%;
}
hr {
  margin-top: 21px;
  margin-bottom: 21px;
  border: 0;
  border-top: 1px solid #eeeeee;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: "News Cycle", "Arial Narrow Bold", sans-serif;
  font-weight: 700;
  line-height: 1.1;
  color: #000000;
}
h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small,
.h1 small,
.h2 small,
.h3 small,
.h4 small,
.h5 small,
.h6 small,
h1 .small,
h2 .small,
h3 .small,
h4 .small,
h5 .small,
h6 .small,
.h1 .small,
.h2 .small,
.h3 .small,
.h4 .small,
.h5 .small,
.h6 .small {
  font-weight: normal;
  line-height: 1;
  color: #999999;
}
h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 21px;
  margin-bottom: 10.5px;
}
h1 small,
.h1 small,
h2 small,
.h2 small,
h3 small,
.h3 small,
h1 .small,
.h1 .small,
h2 .small,
.h2 .small,
h3 .small,
.h3 .small {
  font-size: 65%;
}
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  margin-top: 10.5px;
  margin-bottom: 10.5px;
}
h4 small,
.h4 small,
h5 small,
.h5 small,
h6 small,
.h6 small,
h4 .small,
.h4 .small,
h5 .small,
.h5 .small,
h6 .small,
.h6 .small {
  font-size: 75%;
}
h1,
.h1 {
  font-size: 39px;
}
h2,
.h2 {
  font-size: 32px;
}
h3,
.h3 {
  font-size: 26px;
}
h4,
.h4 {
  font-size: 19px;
}
h5,
.h5 {
  font-size: 15px;
}
h6,
.h6 {
  font-size: 13px;
}
p {
  margin: 0 0 10.5px;
}
.lead {
  margin-bottom: 21px;
  font-size: 17px;
  font-weight: 300;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .lead {
    font-size: 22.5px;
  }
}
small,
.small {
  font-size: 86%;
}
mark,
.mark {
  background-color: #fcf8e3;
  padding: .2em;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.text-nowrap {
  white-space: nowrap;
}
.text-lowercase {
  text-transform: lowercase;
}
.text-uppercase {
  text-transform: uppercase;
}
.text-capitalize {
  text-transform: capitalize;
}
.text-muted {
  color: #999999;
}
.text-primary {
  color: #eb6864;
}
a.text-primary:hover {
  color: #e53c37;
}
.text-success {
  color: #468847;
}
a.text-success:hover {
  color: #356635;
}
.text-info {
  color: #3a87ad;
}
a.text-info:hover {
  color: #2d6987;
}
.text-warning {
  color: #c09853;
}
a.text-warning:hover {
  color: #a47e3c;
}
.text-danger {
  color: #b94a48;
}
a.text-danger:hover {
  color: #953b39;
}
.bg-primary {
  color: #fff;
  background-color: #eb6864;
}
a.bg-primary:hover {
  background-color: #e53c37;
}
.bg-success {
  background-color: #dff0d8;
}
a.bg-success:hover {
  background-color: #c1e2b3;
}
.bg-info {
  background-color: #d9edf7;
}
a.bg-info:hover {
  background-color: #afd9ee;
}
.bg-warning {
  background-color: #fcf8e3;
}
a.bg-warning:hover {
  background-color: #f7ecb5;
}
.bg-danger {
  background-color: #f2dede;
}
a.bg-danger:hover {
  background-color: #e4b9b9;
}
.page-header {
  padding-bottom: 9.5px;
  margin: 42px 0 21px;
  border-bottom: 1px solid #eeeeee;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10.5px;
}
ul ul,
ol ul,
ul ol,
ol ol {
  margin-bottom: 0;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline {
  padding-left: 0;
  list-style: none;
  margin-left: -5px;
}
.list-inline > li {
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}
dl {
  margin-top: 0;
  margin-bottom: 21px;
}
dt,
dd {
  line-height: 1.42857143;
}
dt {
  font-weight: bold;
}
dd {
  margin-left: 0;
}
@media (min-width: 768px) {
  .dl-horizontal dt {
    float: left;
    width: 160px;
    clear: left;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dl-horizontal dd {
    margin-left: 180px;
  }
}
abbr[title],
abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted #999999;
}
.initialism {
  font-size: 90%;
  text-transform: uppercase;
}
blockquote {
  padding: 10.5px 21px;
  margin: 0 0 21px;
  font-size: 18.75px;
  border-left: 5px solid #eeeeee;
}
blockquote p:last-child,
blockquote ul:last-child,
blockquote ol:last-child {
  margin-bottom: 0;
}
blockquote footer,
blockquote small,
blockquote .small {
  display: block;
  font-size: 80%;
  line-height: 1.42857143;
  color: #999999;
}
blockquote footer:before,
blockquote small:before,
blockquote .small:before {
  content: '\\2014 \\00A0';
}
.blockquote-reverse,
blockquote.pull-right {
  padding-right: 15px;
  padding-left: 0;
  border-right: 5px solid #eeeeee;
  border-left: 0;
  text-align: right;
}
.blockquote-reverse footer:before,
blockquote.pull-right footer:before,
.blockquote-reverse small:before,
blockquote.pull-right small:before,
.blockquote-reverse .small:before,
blockquote.pull-right .small:before {
  content: '';
}
.blockquote-reverse footer:after,
blockquote.pull-right footer:after,
.blockquote-reverse small:after,
blockquote.pull-right small:after,
.blockquote-reverse .small:after,
blockquote.pull-right .small:after {
  content: '\\00A0 \\2014';
}
address {
  margin-bottom: 21px;
  font-style: normal;
  line-height: 1.42857143;
}
code,
kbd,
pre,
samp {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
}
code {
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 4px;
}
kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #ffffff;
  background-color: #333333;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
}
kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: bold;
  -webkit-box-shadow: none;
          box-shadow: none;
}
pre {
  display: block;
  padding: 10px;
  margin: 0 0 10.5px;
  font-size: 14px;
  line-height: 1.42857143;
  word-break: break-all;
  word-wrap: break-word;
  color: #333333;
  background-color: #f5f5f5;
  border: 1px solid #cccccc;
  border-radius: 4px;
}
pre code {
  padding: 0;
  font-size: inherit;
  color: inherit;
  white-space: pre-wrap;
  background-color: transparent;
  border-radius: 0;
}
.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
.container-fluid {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
.row {
  margin-left: -15px;
  margin-right: -15px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
  float: left;
}
.col-xs-12 {
  width: 100%;
}
.col-xs-11 {
  width: 91.66666667%;
}
.col-xs-10 {
  width: 83.33333333%;
}
.col-xs-9 {
  width: 75%;
}
.col-xs-8 {
  width: 66.66666667%;
}
.col-xs-7 {
  width: 58.33333333%;
}
.col-xs-6 {
  width: 50%;
}
.col-xs-5 {
  width: 41.66666667%;
}
.col-xs-4 {
  width: 33.33333333%;
}
.col-xs-3 {
  width: 25%;
}
.col-xs-2 {
  width: 16.66666667%;
}
.col-xs-1 {
  width: 8.33333333%;
}
.col-xs-pull-12 {
  right: 100%;
}
.col-xs-pull-11 {
  right: 91.66666667%;
}
.col-xs-pull-10 {
  right: 83.33333333%;
}
.col-xs-pull-9 {
  right: 75%;
}
.col-xs-pull-8 {
  right: 66.66666667%;
}
.col-xs-pull-7 {
  right: 58.33333333%;
}
.col-xs-pull-6 {
  right: 50%;
}
.col-xs-pull-5 {
  right: 41.66666667%;
}
.col-xs-pull-4 {
  right: 33.33333333%;
}
.col-xs-pull-3 {
  right: 25%;
}
.col-xs-pull-2 {
  right: 16.66666667%;
}
.col-xs-pull-1 {
  right: 8.33333333%;
}
.col-xs-pull-0 {
  right: auto;
}
.col-xs-push-12 {
  left: 100%;
}
.col-xs-push-11 {
  left: 91.66666667%;
}
.col-xs-push-10 {
  left: 83.33333333%;
}
.col-xs-push-9 {
  left: 75%;
}
.col-xs-push-8 {
  left: 66.66666667%;
}
.col-xs-push-7 {
  left: 58.33333333%;
}
.col-xs-push-6 {
  left: 50%;
}
.col-xs-push-5 {
  left: 41.66666667%;
}
.col-xs-push-4 {
  left: 33.33333333%;
}
.col-xs-push-3 {
  left: 25%;
}
.col-xs-push-2 {
  left: 16.66666667%;
}
.col-xs-push-1 {
  left: 8.33333333%;
}
.col-xs-push-0 {
  left: auto;
}
.col-xs-offset-12 {
  margin-left: 100%;
}
.col-xs-offset-11 {
  margin-left: 91.66666667%;
}
.col-xs-offset-10 {
  margin-left: 83.33333333%;
}
.col-xs-offset-9 {
  margin-left: 75%;
}
.col-xs-offset-8 {
  margin-left: 66.66666667%;
}
.col-xs-offset-7 {
  margin-left: 58.33333333%;
}
.col-xs-offset-6 {
  margin-left: 50%;
}
.col-xs-offset-5 {
  margin-left: 41.66666667%;
}
.col-xs-offset-4 {
  margin-left: 33.33333333%;
}
.col-xs-offset-3 {
  margin-left: 25%;
}
.col-xs-offset-2 {
  margin-left: 16.66666667%;
}
.col-xs-offset-1 {
  margin-left: 8.33333333%;
}
.col-xs-offset-0 {
  margin-left: 0%;
}
@media (min-width: 768px) {
  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
    float: left;
  }
  .col-sm-12 {
    width: 100%;
  }
  .col-sm-11 {
    width: 91.66666667%;
  }
  .col-sm-10 {
    width: 83.33333333%;
  }
  .col-sm-9 {
    width: 75%;
  }
  .col-sm-8 {
    width: 66.66666667%;
  }
  .col-sm-7 {
    width: 58.33333333%;
  }
  .col-sm-6 {
    width: 50%;
  }
  .col-sm-5 {
    width: 41.66666667%;
  }
  .col-sm-4 {
    width: 33.33333333%;
  }
  .col-sm-3 {
    width: 25%;
  }
  .col-sm-2 {
    width: 16.66666667%;
  }
  .col-sm-1 {
    width: 8.33333333%;
  }
  .col-sm-pull-12 {
    right: 100%;
  }
  .col-sm-pull-11 {
    right: 91.66666667%;
  }
  .col-sm-pull-10 {
    right: 83.33333333%;
  }
  .col-sm-pull-9 {
    right: 75%;
  }
  .col-sm-pull-8 {
    right: 66.66666667%;
  }
  .col-sm-pull-7 {
    right: 58.33333333%;
  }
  .col-sm-pull-6 {
    right: 50%;
  }
  .col-sm-pull-5 {
    right: 41.66666667%;
  }
  .col-sm-pull-4 {
    right: 33.33333333%;
  }
  .col-sm-pull-3 {
    right: 25%;
  }
  .col-sm-pull-2 {
    right: 16.66666667%;
  }
  .col-sm-pull-1 {
    right: 8.33333333%;
  }
  .col-sm-pull-0 {
    right: auto;
  }
  .col-sm-push-12 {
    left: 100%;
  }
  .col-sm-push-11 {
    left: 91.66666667%;
  }
  .col-sm-push-10 {
    left: 83.33333333%;
  }
  .col-sm-push-9 {
    left: 75%;
  }
  .col-sm-push-8 {
    left: 66.66666667%;
  }
  .col-sm-push-7 {
    left: 58.33333333%;
  }
  .col-sm-push-6 {
    left: 50%;
  }
  .col-sm-push-5 {
    left: 41.66666667%;
  }
  .col-sm-push-4 {
    left: 33.33333333%;
  }
  .col-sm-push-3 {
    left: 25%;
  }
  .col-sm-push-2 {
    left: 16.66666667%;
  }
  .col-sm-push-1 {
    left: 8.33333333%;
  }
  .col-sm-push-0 {
    left: auto;
  }
  .col-sm-offset-12 {
    margin-left: 100%;
  }
  .col-sm-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-sm-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-sm-offset-9 {
    margin-left: 75%;
  }
  .col-sm-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-sm-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-sm-offset-6 {
    margin-left: 50%;
  }
  .col-sm-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-sm-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-sm-offset-3 {
    margin-left: 25%;
  }
  .col-sm-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-sm-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-sm-offset-0 {
    margin-left: 0%;
  }
}
@media (min-width: 992px) {
  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
    float: left;
  }
  .col-md-12 {
    width: 100%;
  }
  .col-md-11 {
    width: 91.66666667%;
  }
  .col-md-10 {
    width: 83.33333333%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-8 {
    width: 66.66666667%;
  }
  .col-md-7 {
    width: 58.33333333%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-5 {
    width: 41.66666667%;
  }
  .col-md-4 {
    width: 33.33333333%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-2 {
    width: 16.66666667%;
  }
  .col-md-1 {
    width: 8.33333333%;
  }
  .col-md-pull-12 {
    right: 100%;
  }
  .col-md-pull-11 {
    right: 91.66666667%;
  }
  .col-md-pull-10 {
    right: 83.33333333%;
  }
  .col-md-pull-9 {
    right: 75%;
  }
  .col-md-pull-8 {
    right: 66.66666667%;
  }
  .col-md-pull-7 {
    right: 58.33333333%;
  }
  .col-md-pull-6 {
    right: 50%;
  }
  .col-md-pull-5 {
    right: 41.66666667%;
  }
  .col-md-pull-4 {
    right: 33.33333333%;
  }
  .col-md-pull-3 {
    right: 25%;
  }
  .col-md-pull-2 {
    right: 16.66666667%;
  }
  .col-md-pull-1 {
    right: 8.33333333%;
  }
  .col-md-pull-0 {
    right: auto;
  }
  .col-md-push-12 {
    left: 100%;
  }
  .col-md-push-11 {
    left: 91.66666667%;
  }
  .col-md-push-10 {
    left: 83.33333333%;
  }
  .col-md-push-9 {
    left: 75%;
  }
  .col-md-push-8 {
    left: 66.66666667%;
  }
  .col-md-push-7 {
    left: 58.33333333%;
  }
  .col-md-push-6 {
    left: 50%;
  }
  .col-md-push-5 {
    left: 41.66666667%;
  }
  .col-md-push-4 {
    left: 33.33333333%;
  }
  .col-md-push-3 {
    left: 25%;
  }
  .col-md-push-2 {
    left: 16.66666667%;
  }
  .col-md-push-1 {
    left: 8.33333333%;
  }
  .col-md-push-0 {
    left: auto;
  }
  .col-md-offset-12 {
    margin-left: 100%;
  }
  .col-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-md-offset-9 {
    margin-left: 75%;
  }
  .col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-md-offset-6 {
    margin-left: 50%;
  }
  .col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
  .col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-md-offset-0 {
    margin-left: 0%;
  }
}
@media (min-width: 1200px) {
  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
    float: left;
  }
  .col-lg-12 {
    width: 100%;
  }
  .col-lg-11 {
    width: 91.66666667%;
  }
  .col-lg-10 {
    width: 83.33333333%;
  }
  .col-lg-9 {
    width: 75%;
  }
  .col-lg-8 {
    width: 66.66666667%;
  }
  .col-lg-7 {
    width: 58.33333333%;
  }
  .col-lg-6 {
    width: 50%;
  }
  .col-lg-5 {
    width: 41.66666667%;
  }
  .col-lg-4 {
    width: 33.33333333%;
  }
  .col-lg-3 {
    width: 25%;
  }
  .col-lg-2 {
    width: 16.66666667%;
  }
  .col-lg-1 {
    width: 8.33333333%;
  }
  .col-lg-pull-12 {
    right: 100%;
  }
  .col-lg-pull-11 {
    right: 91.66666667%;
  }
  .col-lg-pull-10 {
    right: 83.33333333%;
  }
  .col-lg-pull-9 {
    right: 75%;
  }
  .col-lg-pull-8 {
    right: 66.66666667%;
  }
  .col-lg-pull-7 {
    right: 58.33333333%;
  }
  .col-lg-pull-6 {
    right: 50%;
  }
  .col-lg-pull-5 {
    right: 41.66666667%;
  }
  .col-lg-pull-4 {
    right: 33.33333333%;
  }
  .col-lg-pull-3 {
    right: 25%;
  }
  .col-lg-pull-2 {
    right: 16.66666667%;
  }
  .col-lg-pull-1 {
    right: 8.33333333%;
  }
  .col-lg-pull-0 {
    right: auto;
  }
  .col-lg-push-12 {
    left: 100%;
  }
  .col-lg-push-11 {
    left: 91.66666667%;
  }
  .col-lg-push-10 {
    left: 83.33333333%;
  }
  .col-lg-push-9 {
    left: 75%;
  }
  .col-lg-push-8 {
    left: 66.66666667%;
  }
  .col-lg-push-7 {
    left: 58.33333333%;
  }
  .col-lg-push-6 {
    left: 50%;
  }
  .col-lg-push-5 {
    left: 41.66666667%;
  }
  .col-lg-push-4 {
    left: 33.33333333%;
  }
  .col-lg-push-3 {
    left: 25%;
  }
  .col-lg-push-2 {
    left: 16.66666667%;
  }
  .col-lg-push-1 {
    left: 8.33333333%;
  }
  .col-lg-push-0 {
    left: auto;
  }
  .col-lg-offset-12 {
    margin-left: 100%;
  }
  .col-lg-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-lg-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-lg-offset-9 {
    margin-left: 75%;
  }
  .col-lg-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-lg-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-lg-offset-6 {
    margin-left: 50%;
  }
  .col-lg-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-lg-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-lg-offset-3 {
    margin-left: 25%;
  }
  .col-lg-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-lg-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-lg-offset-0 {
    margin-left: 0%;
  }
}
table {
  background-color: transparent;
}
caption {
  padding-top: 8px;
  padding-bottom: 8px;
  color: #999999;
  text-align: left;
}
th {
  text-align: left;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 21px;
}
.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #dddddd;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #dddddd;
}
.table > caption + thead > tr:first-child > th,
.table > colgroup + thead > tr:first-child > th,
.table > thead:first-child > tr:first-child > th,
.table > caption + thead > tr:first-child > td,
.table > colgroup + thead > tr:first-child > td,
.table > thead:first-child > tr:first-child > td {
  border-top: 0;
}
.table > tbody + tbody {
  border-top: 2px solid #dddddd;
}
.table .table {
  background-color: #ffffff;
}
.table-condensed > thead > tr > th,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > tbody > tr > td,
.table-condensed > tfoot > tr > td {
  padding: 5px;
}
.table-bordered {
  border: 1px solid #dddddd;
}
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #dddddd;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}
.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}
.table-hover > tbody > tr:hover {
  background-color: #f5f5f5;
}
table col[class*="col-"] {
  position: static;
  float: none;
  display: table-column;
}
table td[class*="col-"],
table th[class*="col-"] {
  position: static;
  float: none;
  display: table-cell;
}
.table > thead > tr > td.active,
.table > tbody > tr > td.active,
.table > tfoot > tr > td.active,
.table > thead > tr > th.active,
.table > tbody > tr > th.active,
.table > tfoot > tr > th.active,
.table > thead > tr.active > td,
.table > tbody > tr.active > td,
.table > tfoot > tr.active > td,
.table > thead > tr.active > th,
.table > tbody > tr.active > th,
.table > tfoot > tr.active > th {
  background-color: #f5f5f5;
}
.table-hover > tbody > tr > td.active:hover,
.table-hover > tbody > tr > th.active:hover,
.table-hover > tbody > tr.active:hover > td,
.table-hover > tbody > tr:hover > .active,
.table-hover > tbody > tr.active:hover > th {
  background-color: #e8e8e8;
}
.table > thead > tr > td.success,
.table > tbody > tr > td.success,
.table > tfoot > tr > td.success,
.table > thead > tr > th.success,
.table > tbody > tr > th.success,
.table > tfoot > tr > th.success,
.table > thead > tr.success > td,
.table > tbody > tr.success > td,
.table > tfoot > tr.success > td,
.table > thead > tr.success > th,
.table > tbody > tr.success > th,
.table > tfoot > tr.success > th {
  background-color: #dff0d8;
}
.table-hover > tbody > tr > td.success:hover,
.table-hover > tbody > tr > th.success:hover,
.table-hover > tbody > tr.success:hover > td,
.table-hover > tbody > tr:hover > .success,
.table-hover > tbody > tr.success:hover > th {
  background-color: #d0e9c6;
}
.table > thead > tr > td.info,
.table > tbody > tr > td.info,
.table > tfoot > tr > td.info,
.table > thead > tr > th.info,
.table > tbody > tr > th.info,
.table > tfoot > tr > th.info,
.table > thead > tr.info > td,
.table > tbody > tr.info > td,
.table > tfoot > tr.info > td,
.table > thead > tr.info > th,
.table > tbody > tr.info > th,
.table > tfoot > tr.info > th {
  background-color: #d9edf7;
}
.table-hover > tbody > tr > td.info:hover,
.table-hover > tbody > tr > th.info:hover,
.table-hover > tbody > tr.info:hover > td,
.table-hover > tbody > tr:hover > .info,
.table-hover > tbody > tr.info:hover > th {
  background-color: #c4e3f3;
}
.table > thead > tr > td.warning,
.table > tbody > tr > td.warning,
.table > tfoot > tr > td.warning,
.table > thead > tr > th.warning,
.table > tbody > tr > th.warning,
.table > tfoot > tr > th.warning,
.table > thead > tr.warning > td,
.table > tbody > tr.warning > td,
.table > tfoot > tr.warning > td,
.table > thead > tr.warning > th,
.table > tbody > tr.warning > th,
.table > tfoot > tr.warning > th {
  background-color: #fcf8e3;
}
.table-hover > tbody > tr > td.warning:hover,
.table-hover > tbody > tr > th.warning:hover,
.table-hover > tbody > tr.warning:hover > td,
.table-hover > tbody > tr:hover > .warning,
.table-hover > tbody > tr.warning:hover > th {
  background-color: #faf2cc;
}
.table > thead > tr > td.danger,
.table > tbody > tr > td.danger,
.table > tfoot > tr > td.danger,
.table > thead > tr > th.danger,
.table > tbody > tr > th.danger,
.table > tfoot > tr > th.danger,
.table > thead > tr.danger > td,
.table > tbody > tr.danger > td,
.table > tfoot > tr.danger > td,
.table > thead > tr.danger > th,
.table > tbody > tr.danger > th,
.table > tfoot > tr.danger > th {
  background-color: #f2dede;
}
.table-hover > tbody > tr > td.danger:hover,
.table-hover > tbody > tr > th.danger:hover,
.table-hover > tbody > tr.danger:hover > td,
.table-hover > tbody > tr:hover > .danger,
.table-hover > tbody > tr.danger:hover > th {
  background-color: #ebcccc;
}
.table-responsive {
  overflow-x: auto;
  min-height: 0.01%;
}
@media screen and (max-width: 767px) {
  .table-responsive {
    width: 100%;
    margin-bottom: 15.75px;
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #dddddd;
  }
  .table-responsive > .table {
    margin-bottom: 0;
  }
  .table-responsive > .table > thead > tr > th,
  .table-responsive > .table > tbody > tr > th,
  .table-responsive > .table > tfoot > tr > th,
  .table-responsive > .table > thead > tr > td,
  .table-responsive > .table > tbody > tr > td,
  .table-responsive > .table > tfoot > tr > td {
    white-space: nowrap;
  }
  .table-responsive > .table-bordered {
    border: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:first-child,
  .table-responsive > .table-bordered > tbody > tr > th:first-child,
  .table-responsive > .table-bordered > tfoot > tr > th:first-child,
  .table-responsive > .table-bordered > thead > tr > td:first-child,
  .table-responsive > .table-bordered > tbody > tr > td:first-child,
  .table-responsive > .table-bordered > tfoot > tr > td:first-child {
    border-left: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:last-child,
  .table-responsive > .table-bordered > tbody > tr > th:last-child,
  .table-responsive > .table-bordered > tfoot > tr > th:last-child,
  .table-responsive > .table-bordered > thead > tr > td:last-child,
  .table-responsive > .table-bordered > tbody > tr > td:last-child,
  .table-responsive > .table-bordered > tfoot > tr > td:last-child {
    border-right: 0;
  }
  .table-responsive > .table-bordered > tbody > tr:last-child > th,
  .table-responsive > .table-bordered > tfoot > tr:last-child > th,
  .table-responsive > .table-bordered > tbody > tr:last-child > td,
  .table-responsive > .table-bordered > tfoot > tr:last-child > td {
    border-bottom: 0;
  }
}
fieldset {
  padding: 0;
  margin: 0;
  border: 0;
  min-width: 0;
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 21px;
  font-size: 22.5px;
  line-height: inherit;
  color: #777777;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}
input[type="search"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
input[type="radio"],
input[type="checkbox"] {
  margin: 4px 0 0;
  margin-top: 1px \\9;
  line-height: normal;
}
input[type="file"] {
  display: block;
}
input[type="range"] {
  display: block;
  width: 100%;
}
select[multiple],
select[size] {
  height: auto;
}
input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
output {
  display: block;
  padding-top: 9px;
  font-size: 15px;
  line-height: 1.42857143;
  color: #777777;
}
.form-control {
  display: block;
  width: 100%;
  height: 39px;
  padding: 8px 12px;
  font-size: 15px;
  line-height: 1.42857143;
  color: #777777;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #cccccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
.form-control::-moz-placeholder {
  color: #999999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999999;
}
.form-control::-webkit-input-placeholder {
  color: #999999;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  cursor: not-allowed;
  background-color: #eeeeee;
  opacity: 1;
}
textarea.form-control {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: none;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    line-height: 39px;
  }
  input[type="date"].input-sm,
  input[type="time"].input-sm,
  input[type="datetime-local"].input-sm,
  input[type="month"].input-sm,
  .input-group-sm input[type="date"],
  .input-group-sm input[type="time"],
  .input-group-sm input[type="datetime-local"],
  .input-group-sm input[type="month"] {
    line-height: 31px;
  }
  input[type="date"].input-lg,
  input[type="time"].input-lg,
  input[type="datetime-local"].input-lg,
  input[type="month"].input-lg,
  .input-group-lg input[type="date"],
  .input-group-lg input[type="time"],
  .input-group-lg input[type="datetime-local"],
  .input-group-lg input[type="month"] {
    line-height: 56px;
  }
}
.form-group {
  margin-bottom: 15px;
}
.radio,
.checkbox {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.radio label,
.checkbox label {
  min-height: 21px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  position: absolute;
  margin-left: -20px;
  margin-top: 4px \\9;
}
.radio + .radio,
.checkbox + .checkbox {
  margin-top: -5px;
}
.radio-inline,
.checkbox-inline {
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  vertical-align: middle;
  font-weight: normal;
  cursor: pointer;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
input[type="radio"][disabled],
input[type="checkbox"][disabled],
input[type="radio"].disabled,
input[type="checkbox"].disabled,
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"] {
  cursor: not-allowed;
}
.radio-inline.disabled,
.checkbox-inline.disabled,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}
.radio.disabled label,
.checkbox.disabled label,
fieldset[disabled] .radio label,
fieldset[disabled] .checkbox label {
  cursor: not-allowed;
}
.form-control-static {
  padding-top: 9px;
  padding-bottom: 9px;
  margin-bottom: 0;
}
.form-control-static.input-lg,
.form-control-static.input-sm {
  padding-left: 0;
  padding-right: 0;
}
.input-sm {
  height: 31px;
  padding: 5px 10px;
  font-size: 13px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-sm {
  height: 31px;
  line-height: 31px;
}
textarea.input-sm,
select[multiple].input-sm {
  height: auto;
}
.form-group-sm .form-control {
  height: 31px;
  padding: 5px 10px;
  font-size: 13px;
  line-height: 1.5;
  border-radius: 3px;
}
select.form-group-sm .form-control {
  height: 31px;
  line-height: 31px;
}
textarea.form-group-sm .form-control,
select[multiple].form-group-sm .form-control {
  height: auto;
}
.form-group-sm .form-control-static {
  height: 31px;
  padding: 5px 10px;
  font-size: 13px;
  line-height: 1.5;
}
.input-lg {
  height: 56px;
  padding: 14px 16px;
  font-size: 19px;
  line-height: 1.3333333;
  border-radius: 6px;
}
select.input-lg {
  height: 56px;
  line-height: 56px;
}
textarea.input-lg,
select[multiple].input-lg {
  height: auto;
}
.form-group-lg .form-control {
  height: 56px;
  padding: 14px 16px;
  font-size: 19px;
  line-height: 1.3333333;
  border-radius: 6px;
}
select.form-group-lg .form-control {
  height: 56px;
  line-height: 56px;
}
textarea.form-group-lg .form-control,
select[multiple].form-group-lg .form-control {
  height: auto;
}
.form-group-lg .form-control-static {
  height: 56px;
  padding: 14px 16px;
  font-size: 19px;
  line-height: 1.3333333;
}
.has-feedback {
  position: relative;
}
.has-feedback .form-control {
  padding-right: 48.75px;
}
.form-control-feedback {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: block;
  width: 39px;
  height: 39px;
  line-height: 39px;
  text-align: center;
  pointer-events: none;
}
.input-lg + .form-control-feedback {
  width: 56px;
  height: 56px;
  line-height: 56px;
}
.input-sm + .form-control-feedback {
  width: 31px;
  height: 31px;
  line-height: 31px;
}
.has-success .help-block,
.has-success .control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline,
.has-success.radio label,
.has-success.checkbox label,
.has-success.radio-inline label,
.has-success.checkbox-inline label {
  color: #468847;
}
.has-success .form-control {
  border-color: #468847;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.has-success .form-control:focus {
  border-color: #356635;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #7aba7b;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #7aba7b;
}
.has-success .input-group-addon {
  color: #468847;
  border-color: #468847;
  background-color: #dff0d8;
}
.has-success .form-control-feedback {
  color: #468847;
}
.has-warning .help-block,
.has-warning .control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline,
.has-warning.radio label,
.has-warning.checkbox label,
.has-warning.radio-inline label,
.has-warning.checkbox-inline label {
  color: #c09853;
}
.has-warning .form-control {
  border-color: #c09853;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.has-warning .form-control:focus {
  border-color: #a47e3c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #dbc59e;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #dbc59e;
}
.has-warning .input-group-addon {
  color: #c09853;
  border-color: #c09853;
  background-color: #fcf8e3;
}
.has-warning .form-control-feedback {
  color: #c09853;
}
.has-error .help-block,
.has-error .control-label,
.has-error .radio,
.has-error .checkbox,
.has-error .radio-inline,
.has-error .checkbox-inline,
.has-error.radio label,
.has-error.checkbox label,
.has-error.radio-inline label,
.has-error.checkbox-inline label {
  color: #b94a48;
}
.has-error .form-control {
  border-color: #b94a48;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.has-error .form-control:focus {
  border-color: #953b39;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;
}
.has-error .input-group-addon {
  color: #b94a48;
  border-color: #b94a48;
  background-color: #f2dede;
}
.has-error .form-control-feedback {
  color: #b94a48;
}
.has-feedback label ~ .form-control-feedback {
  top: 26px;
}
.has-feedback label.sr-only ~ .form-control-feedback {
  top: 0;
}
.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #b7b7b7;
}
@media (min-width: 768px) {
  .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .form-inline .form-control-static {
    display: inline-block;
  }
  .form-inline .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .form-inline .input-group .input-group-addon,
  .form-inline .input-group .input-group-btn,
  .form-inline .input-group .form-control {
    width: auto;
  }
  .form-inline .input-group > .form-control {
    width: 100%;
  }
  .form-inline .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio,
  .form-inline .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio label,
  .form-inline .checkbox label {
    padding-left: 0;
  }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}
.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 9px;
}
.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 30px;
}
.form-horizontal .form-group {
  margin-left: -15px;
  margin-right: -15px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    text-align: right;
    margin-bottom: 0;
    padding-top: 9px;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
  right: 15px;
}
@media (min-width: 768px) {
  .form-horizontal .form-group-lg .control-label {
    padding-top: 19.6666662px;
  }
}
@media (min-width: 768px) {
  .form-horizontal .form-group-sm .control-label {
    padding-top: 6px;
  }
}
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
      touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 8px 12px;
  font-size: 15px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus,
.btn.focus {
  color: #ffffff;
  text-decoration: none;
}
.btn:active,
.btn.active {
  outline: 0;
  background-image: none;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.65;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-default {
  color: #ffffff;
  background-color: #999999;
  border-color: #999999;
}
.btn-default:hover,
.btn-default:focus,
.btn-default.focus,
.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default {
  color: #ffffff;
  background-color: #808080;
  border-color: #7a7a7a;
}
.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default {
  background-image: none;
}
.btn-default.disabled,
.btn-default[disabled],
fieldset[disabled] .btn-default,
.btn-default.disabled:hover,
.btn-default[disabled]:hover,
fieldset[disabled] .btn-default:hover,
.btn-default.disabled:focus,
.btn-default[disabled]:focus,
fieldset[disabled] .btn-default:focus,
.btn-default.disabled.focus,
.btn-default[disabled].focus,
fieldset[disabled] .btn-default.focus,
.btn-default.disabled:active,
.btn-default[disabled]:active,
fieldset[disabled] .btn-default:active,
.btn-default.disabled.active,
.btn-default[disabled].active,
fieldset[disabled] .btn-default.active {
  background-color: #999999;
  border-color: #999999;
}
.btn-default .badge {
  color: #999999;
  background-color: #ffffff;
}
.btn-primary {
  color: #ffffff;
  background-color: #eb6864;
  border-color: #eb6864;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary.focus,
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  color: #ffffff;
  background-color: #e53c37;
  border-color: #e4332e;
}
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  background-image: none;
}
.btn-primary.disabled,
.btn-primary[disabled],
fieldset[disabled] .btn-primary,
.btn-primary.disabled:hover,
.btn-primary[disabled]:hover,
fieldset[disabled] .btn-primary:hover,
.btn-primary.disabled:focus,
.btn-primary[disabled]:focus,
fieldset[disabled] .btn-primary:focus,
.btn-primary.disabled.focus,
.btn-primary[disabled].focus,
fieldset[disabled] .btn-primary.focus,
.btn-primary.disabled:active,
.btn-primary[disabled]:active,
fieldset[disabled] .btn-primary:active,
.btn-primary.disabled.active,
.btn-primary[disabled].active,
fieldset[disabled] .btn-primary.active {
  background-color: #eb6864;
  border-color: #eb6864;
}
.btn-primary .badge {
  color: #eb6864;
  background-color: #ffffff;
}
.btn-success {
  color: #ffffff;
  background-color: #22b24c;
  border-color: #22b24c;
}
.btn-success:hover,
.btn-success:focus,
.btn-success.focus,
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
  color: #ffffff;
  background-color: #1a873a;
  border-color: #187f36;
}
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
  background-image: none;
}
.btn-success.disabled,
.btn-success[disabled],
fieldset[disabled] .btn-success,
.btn-success.disabled:hover,
.btn-success[disabled]:hover,
fieldset[disabled] .btn-success:hover,
.btn-success.disabled:focus,
.btn-success[disabled]:focus,
fieldset[disabled] .btn-success:focus,
.btn-success.disabled.focus,
.btn-success[disabled].focus,
fieldset[disabled] .btn-success.focus,
.btn-success.disabled:active,
.btn-success[disabled]:active,
fieldset[disabled] .btn-success:active,
.btn-success.disabled.active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success.active {
  background-color: #22b24c;
  border-color: #22b24c;
}
.btn-success .badge {
  color: #22b24c;
  background-color: #ffffff;
}
.btn-info {
  color: #ffffff;
  background-color: #336699;
  border-color: #336699;
}
.btn-info:hover,
.btn-info:focus,
.btn-info.focus,
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info {
  color: #ffffff;
  background-color: #264c73;
  border-color: #24476b;
}
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info {
  background-image: none;
}
.btn-info.disabled,
.btn-info[disabled],
fieldset[disabled] .btn-info,
.btn-info.disabled:hover,
.btn-info[disabled]:hover,
fieldset[disabled] .btn-info:hover,
.btn-info.disabled:focus,
.btn-info[disabled]:focus,
fieldset[disabled] .btn-info:focus,
.btn-info.disabled.focus,
.btn-info[disabled].focus,
fieldset[disabled] .btn-info.focus,
.btn-info.disabled:active,
.btn-info[disabled]:active,
fieldset[disabled] .btn-info:active,
.btn-info.disabled.active,
.btn-info[disabled].active,
fieldset[disabled] .btn-info.active {
  background-color: #336699;
  border-color: #336699;
}
.btn-info .badge {
  color: #336699;
  background-color: #ffffff;
}
.btn-warning {
  color: #ffffff;
  background-color: #f5e625;
  border-color: #f5e625;
}
.btn-warning:hover,
.btn-warning:focus,
.btn-warning.focus,
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning {
  color: #ffffff;
  background-color: #ddce0a;
  border-color: #d3c50a;
}
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning {
  background-image: none;
}
.btn-warning.disabled,
.btn-warning[disabled],
fieldset[disabled] .btn-warning,
.btn-warning.disabled:hover,
.btn-warning[disabled]:hover,
fieldset[disabled] .btn-warning:hover,
.btn-warning.disabled:focus,
.btn-warning[disabled]:focus,
fieldset[disabled] .btn-warning:focus,
.btn-warning.disabled.focus,
.btn-warning[disabled].focus,
fieldset[disabled] .btn-warning.focus,
.btn-warning.disabled:active,
.btn-warning[disabled]:active,
fieldset[disabled] .btn-warning:active,
.btn-warning.disabled.active,
.btn-warning[disabled].active,
fieldset[disabled] .btn-warning.active {
  background-color: #f5e625;
  border-color: #f5e625;
}
.btn-warning .badge {
  color: #f5e625;
  background-color: #ffffff;
}
.btn-danger {
  color: #ffffff;
  background-color: #f57a00;
  border-color: #f57a00;
}
.btn-danger:hover,
.btn-danger:focus,
.btn-danger.focus,
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger {
  color: #ffffff;
  background-color: #c26100;
  border-color: #b85c00;
}
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger {
  background-image: none;
}
.btn-danger.disabled,
.btn-danger[disabled],
fieldset[disabled] .btn-danger,
.btn-danger.disabled:hover,
.btn-danger[disabled]:hover,
fieldset[disabled] .btn-danger:hover,
.btn-danger.disabled:focus,
.btn-danger[disabled]:focus,
fieldset[disabled] .btn-danger:focus,
.btn-danger.disabled.focus,
.btn-danger[disabled].focus,
fieldset[disabled] .btn-danger.focus,
.btn-danger.disabled:active,
.btn-danger[disabled]:active,
fieldset[disabled] .btn-danger:active,
.btn-danger.disabled.active,
.btn-danger[disabled].active,
fieldset[disabled] .btn-danger.active {
  background-color: #f57a00;
  border-color: #f57a00;
}
.btn-danger .badge {
  color: #f57a00;
  background-color: #ffffff;
}
.btn-link {
  color: #eb6864;
  font-weight: normal;
  border-radius: 0;
}
.btn-link,
.btn-link:active,
.btn-link.active,
.btn-link[disabled],
fieldset[disabled] .btn-link {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-link,
.btn-link:hover,
.btn-link:focus,
.btn-link:active {
  border-color: transparent;
}
.btn-link:hover,
.btn-link:focus {
  color: #e22620;
  text-decoration: underline;
  background-color: transparent;
}
.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:focus {
  color: #999999;
  text-decoration: none;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 14px 16px;
  font-size: 19px;
  line-height: 1.3333333;
  border-radius: 6px;
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 13px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 13px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-block {
  display: block;
  width: 100%;
}
.btn-block + .btn-block {
  margin-top: 5px;
}
input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}
.fade {
  opacity: 0;
  -webkit-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}
.fade.in {
  opacity: 1;
}
.collapse {
  display: none;
  visibility: hidden;
}
.collapse.in {
  display: block;
  visibility: visible;
}
tr.collapse.in {
  display: table-row;
}
tbody.collapse.in {
  display: table-row-group;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-property: height, visibility;
  -o-transition-property: height, visibility;
     transition-property: height, visibility;
  -webkit-transition-duration: 0.35s;
  -o-transition-duration: 0.35s;
     transition-duration: 0.35s;
  -webkit-transition-timing-function: ease;
  -o-transition-timing-function: ease;
     transition-timing-function: ease;
}
.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.dropup,
.dropdown {
  position: relative;
}
.dropdown-toggle:focus {
  outline: 0;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 15px;
  text-align: left;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
}
.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}
.dropdown-menu .divider {
  height: 1px;
  margin: 9.5px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333333;
  white-space: nowrap;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  text-decoration: none;
  color: #ffffff;
  background-color: #eb6864;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #ffffff;
  text-decoration: none;
  outline: 0;
  background-color: #eb6864;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  color: #999999;
}
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  cursor: not-allowed;
}
.open > .dropdown-menu {
  display: block;
}
.open > a {
  outline: 0;
}
.dropdown-menu-right {
  left: auto;
  right: 0;
}
.dropdown-menu-left {
  left: 0;
  right: auto;
}
.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #999999;
  white-space: nowrap;
}
.dropdown-backdrop {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 990;
}
.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  border-top: 0;
  border-bottom: 4px solid;
  content: "";
}
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 2px;
}
@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    left: auto;
    right: 0;
  }
  .navbar-right .dropdown-menu-left {
    left: 0;
    right: auto;
  }
}
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  float: left;
}
.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover,
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus,
.btn-group > .btn:active,
.btn-group-vertical > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn.active {
  z-index: 2;
}
.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
  margin-left: -1px;
}
.btn-toolbar {
  margin-left: -5px;
}
.btn-toolbar .btn-group,
.btn-toolbar .input-group {
  float: left;
}
.btn-toolbar > .btn,
.btn-toolbar > .btn-group,
.btn-toolbar > .input-group {
  margin-left: 5px;
}
.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}
.btn-group > .btn:first-child {
  margin-left: 0;
}
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
  padding-left: 8px;
  padding-right: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-left: 12px;
  padding-right: 12px;
}
.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn-group.open .dropdown-toggle.btn-link {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn .caret {
  margin-left: 0;
}
.btn-lg .caret {
  border-width: 5px 5px 0;
  border-bottom-width: 0;
}
.dropup .btn-lg .caret {
  border-width: 0 5px 5px;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group,
.btn-group-vertical > .btn-group > .btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%;
}
.btn-group-vertical > .btn-group > .btn {
  float: none;
}
.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0;
}
.btn-group-vertical > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.btn-group-vertical > .btn:first-child:not(:last-child) {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn:last-child:not(:first-child) {
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  float: none;
  display: table-cell;
  width: 1%;
}
.btn-group-justified > .btn-group .btn {
  width: 100%;
}
.btn-group-justified > .btn-group .dropdown-menu {
  left: auto;
}
[data-toggle="buttons"] > .btn input[type="radio"],
[data-toggle="buttons"] > .btn-group > .btn input[type="radio"],
[data-toggle="buttons"] > .btn input[type="checkbox"],
[data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group[class*="col-"] {
  float: none;
  padding-left: 0;
  padding-right: 0;
}
.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn {
  height: 56px;
  padding: 14px 16px;
  font-size: 19px;
  line-height: 1.3333333;
  border-radius: 6px;
}
select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
  height: 56px;
  line-height: 56px;
}
textarea.input-group-lg > .form-control,
textarea.input-group-lg > .input-group-addon,
textarea.input-group-lg > .input-group-btn > .btn,
select[multiple].input-group-lg > .form-control,
select[multiple].input-group-lg > .input-group-addon,
select[multiple].input-group-lg > .input-group-btn > .btn {
  height: auto;
}
.input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn {
  height: 31px;
  padding: 5px 10px;
  font-size: 13px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
  height: 31px;
  line-height: 31px;
}
textarea.input-group-sm > .form-control,
textarea.input-group-sm > .input-group-addon,
textarea.input-group-sm > .input-group-btn > .btn,
select[multiple].input-group-sm > .form-control,
select[multiple].input-group-sm > .input-group-addon,
select[multiple].input-group-sm > .input-group-btn > .btn {
  height: auto;
}
.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: table-cell;
}
.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.input-group-addon,
.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}
.input-group-addon {
  padding: 8px 12px;
  font-size: 15px;
  font-weight: normal;
  line-height: 1;
  color: #777777;
  text-align: center;
  background-color: #eeeeee;
  border: 1px solid #cccccc;
  border-radius: 4px;
}
.input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 3px;
}
.input-group-addon.input-lg {
  padding: 14px 16px;
  font-size: 19px;
  border-radius: 6px;
}
.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
  margin-top: 0;
}
.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group > .btn,
.input-group-btn:first-child > .dropdown-toggle,
.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.input-group-addon:first-child {
  border-right: 0;
}
.input-group .form-control:last-child,
.input-group-addon:last-child,
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group > .btn,
.input-group-btn:last-child > .dropdown-toggle,
.input-group-btn:first-child > .btn:not(:first-child),
.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.input-group-addon:last-child {
  border-left: 0;
}
.input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap;
}
.input-group-btn > .btn {
  position: relative;
}
.input-group-btn > .btn + .btn {
  margin-left: -1px;
}
.input-group-btn > .btn:hover,
.input-group-btn > .btn:focus,
.input-group-btn > .btn:active {
  z-index: 2;
}
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
  margin-right: -1px;
}
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
  margin-left: -1px;
}
.nav {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.nav > li {
  position: relative;
  display: block;
}
.nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}
.nav > li > a:hover,
.nav > li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.nav > li.disabled > a {
  color: #999999;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #999999;
  text-decoration: none;
  background-color: transparent;
  cursor: not-allowed;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eeeeee;
  border-color: #eb6864;
}
.nav .nav-divider {
  height: 1px;
  margin: 9.5px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
.nav-tabs {
  border-bottom: 1px solid #dddddd;
}
.nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}
.nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}
.nav-tabs > li > a:hover {
  border-color: #eeeeee #eeeeee #dddddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #777777;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-bottom-color: transparent;
  cursor: default;
}
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li {
  float: none;
}
.nav-tabs.nav-justified > li > a {
  text-align: center;
  margin-bottom: 5px;
}
.nav-tabs.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-tabs.nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs.nav-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}
.nav-tabs.nav-justified > .active > a,
.nav-tabs.nav-justified > .active > a:hover,
.nav-tabs.nav-justified > .active > a:focus {
  border: 1px solid #dddddd;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #dddddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #ffffff;
  }
}
.nav-pills > li {
  float: left;
}
.nav-pills > li > a {
  border-radius: 4px;
}
.nav-pills > li + li {
  margin-left: 2px;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
  color: #ffffff;
  background-color: #eb6864;
}
.nav-stacked > li {
  float: none;
}
.nav-stacked > li + li {
  margin-top: 2px;
  margin-left: 0;
}
.nav-justified {
  width: 100%;
}
.nav-justified > li {
  float: none;
}
.nav-justified > li > a {
  text-align: center;
  margin-bottom: 5px;
}
.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs-justified {
  border-bottom: 0;
}
.nav-tabs-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}
.nav-tabs-justified > .active > a,
.nav-tabs-justified > .active > a:hover,
.nav-tabs-justified > .active > a:focus {
  border: 1px solid #dddddd;
}
@media (min-width: 768px) {
  .nav-tabs-justified > li > a {
    border-bottom: 1px solid #dddddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:hover,
  .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #ffffff;
  }
}
.tab-content > .tab-pane {
  display: none;
  visibility: hidden;
}
.tab-content > .active {
  display: block;
  visibility: visible;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.navbar {
  position: relative;
  min-height: 60px;
  margin-bottom: 21px;
  border: 1px solid transparent;
}
@media (min-width: 768px) {
  .navbar {
    border-radius: 4px;
  }
}
@media (min-width: 768px) {
  .navbar-header {
    float: left;
  }
}
.navbar-collapse {
  overflow-x: visible;
  padding-right: 15px;
  padding-left: 15px;
  border-top: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  -webkit-overflow-scrolling: touch;
}
.navbar-collapse.in {
  overflow-y: auto;
}
@media (min-width: 768px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
    visibility: visible !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
  }
  .navbar-collapse.in {
    overflow-y: visible;
  }
  .navbar-fixed-top .navbar-collapse,
  .navbar-static-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    padding-left: 0;
    padding-right: 0;
  }
}
.navbar-fixed-top .navbar-collapse,
.navbar-fixed-bottom .navbar-collapse {
  max-height: 340px;
}
@media (max-device-width: 480px) and (orientation: landscape) {
  .navbar-fixed-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    max-height: 200px;
  }
}
.container > .navbar-header,
.container-fluid > .navbar-header,
.container > .navbar-collapse,
.container-fluid > .navbar-collapse {
  margin-right: -15px;
  margin-left: -15px;
}
@media (min-width: 768px) {
  .container > .navbar-header,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container-fluid > .navbar-collapse {
    margin-right: 0;
    margin-left: 0;
  }
}
.navbar-static-top {
  z-index: 1000;
  border-width: 0 0 1px;
}
@media (min-width: 768px) {
  .navbar-static-top {
    border-radius: 0;
  }
}
.navbar-fixed-top,
.navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
@media (min-width: 768px) {
  .navbar-fixed-top,
  .navbar-fixed-bottom {
    border-radius: 0;
  }
}
.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}
.navbar-fixed-bottom {
  bottom: 0;
  margin-bottom: 0;
  border-width: 1px 0 0;
}
.navbar-brand {
  float: left;
  padding: 19.5px 15px;
  font-size: 19px;
  line-height: 21px;
  height: 60px;
}
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
}
.navbar-brand > img {
  display: block;
}
@media (min-width: 768px) {
  .navbar > .container .navbar-brand,
  .navbar > .container-fluid .navbar-brand {
    margin-left: -15px;
  }
}
.navbar-toggle {
  position: relative;
  float: right;
  margin-right: 15px;
  padding: 9px 10px;
  margin-top: 13px;
  margin-bottom: 13px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.navbar-toggle:focus {
  outline: 0;
}
.navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}
.navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}
@media (min-width: 768px) {
  .navbar-toggle {
    display: none;
  }
}
.navbar-nav {
  margin: 9.75px -15px;
}
.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 21px;
}
@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .navbar-nav .open .dropdown-menu > li > a,
  .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: 21px;
  }
  .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-nav .open .dropdown-menu > li > a:focus {
    background-image: none;
  }
}
@media (min-width: 768px) {
  .navbar-nav {
    float: left;
    margin: 0;
  }
  .navbar-nav > li {
    float: left;
  }
  .navbar-nav > li > a {
    padding-top: 19.5px;
    padding-bottom: 19.5px;
  }
}
.navbar-form {
  margin-left: -15px;
  margin-right: -15px;
  padding: 10px 15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  margin-top: 10.5px;
  margin-bottom: 10.5px;
}
@media (min-width: 768px) {
  .navbar-form .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .navbar-form .form-control-static {
    display: inline-block;
  }
  .navbar-form .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .navbar-form .input-group .input-group-addon,
  .navbar-form .input-group .input-group-btn,
  .navbar-form .input-group .form-control {
    width: auto;
  }
  .navbar-form .input-group > .form-control {
    width: 100%;
  }
  .navbar-form .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio,
  .navbar-form .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio label,
  .navbar-form .checkbox label {
    padding-left: 0;
  }
  .navbar-form .radio input[type="radio"],
  .navbar-form .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .navbar-form .has-feedback .form-control-feedback {
    top: 0;
  }
}
@media (max-width: 767px) {
  .navbar-form .form-group {
    margin-bottom: 5px;
  }
  .navbar-form .form-group:last-child {
    margin-bottom: 0;
  }
}
@media (min-width: 768px) {
  .navbar-form {
    width: auto;
    border: 0;
    margin-left: 0;
    margin-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  margin-bottom: 0;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.navbar-btn {
  margin-top: 10.5px;
  margin-bottom: 10.5px;
}
.navbar-btn.btn-sm {
  margin-top: 14.5px;
  margin-bottom: 14.5px;
}
.navbar-btn.btn-xs {
  margin-top: 19px;
  margin-bottom: 19px;
}
.navbar-text {
  margin-top: 19.5px;
  margin-bottom: 19.5px;
}
@media (min-width: 768px) {
  .navbar-text {
    float: left;
    margin-left: 15px;
    margin-right: 15px;
  }
}
@media (min-width: 768px) {
  .navbar-left {
    float: left !important;
  }
  .navbar-right {
    float: right !important;
    margin-right: -15px;
  }
  .navbar-right ~ .navbar-right {
    margin-right: 0;
  }
}
.navbar-default {
  background-color: #ffffff;
  border-color: #eeeeee;
}
.navbar-default .navbar-brand {
  color: #000000;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #000000;
  background-color: #eeeeee;
}
.navbar-default .navbar-text {
  color: #000000;
}
.navbar-default .navbar-nav > li > a {
  color: #000000;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #000000;
  background-color: #eeeeee;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #000000;
  background-color: #eeeeee;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #cccccc;
  background-color: transparent;
}
.navbar-default .navbar-toggle {
  border-color: #dddddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #dddddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #cccccc;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #eeeeee;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  background-color: #eeeeee;
  color: #000000;
}
@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #000000;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #000000;
    background-color: #eeeeee;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #000000;
    background-color: #eeeeee;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #cccccc;
    background-color: transparent;
  }
}
.navbar-default .navbar-link {
  color: #000000;
}
.navbar-default .navbar-link:hover {
  color: #000000;
}
.navbar-default .btn-link {
  color: #000000;
}
.navbar-default .btn-link:hover,
.navbar-default .btn-link:focus {
  color: #000000;
}
.navbar-default .btn-link[disabled]:hover,
fieldset[disabled] .navbar-default .btn-link:hover,
.navbar-default .btn-link[disabled]:focus,
fieldset[disabled] .navbar-default .btn-link:focus {
  color: #cccccc;
}
.navbar-inverse {
  background-color: #eb6864;
  border-color: #e53c37;
}
.navbar-inverse .navbar-brand {
  color: #ffffff;
}
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #ffffff;
  background-color: #e74b47;
}
.navbar-inverse .navbar-text {
  color: #ffffff;
}
.navbar-inverse .navbar-nav > li > a {
  color: #ffffff;
}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  color: #ffffff;
  background-color: #e74b47;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #ffffff;
  background-color: #e74b47;
}
.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:hover,
.navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444444;
  background-color: transparent;
}
.navbar-inverse .navbar-toggle {
  border-color: #e53c37;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
  background-color: #e53c37;
}
.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #ffffff;
}
.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #e74944;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  background-color: #e74b47;
  color: #ffffff;
}
@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #e53c37;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #e53c37;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #ffffff;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #ffffff;
    background-color: #e74b47;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #ffffff;
    background-color: #e74b47;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444444;
    background-color: transparent;
  }
}
.navbar-inverse .navbar-link {
  color: #ffffff;
}
.navbar-inverse .navbar-link:hover {
  color: #ffffff;
}
.navbar-inverse .btn-link {
  color: #ffffff;
}
.navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link:focus {
  color: #ffffff;
}
.navbar-inverse .btn-link[disabled]:hover,
fieldset[disabled] .navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link[disabled]:focus,
fieldset[disabled] .navbar-inverse .btn-link:focus {
  color: #444444;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 21px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li {
  display: inline-block;
}
.breadcrumb > li + li:before {
  content: "/\\00a0";
  padding: 0 5px;
  color: #cccccc;
}
.breadcrumb > .active {
  color: #999999;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 21px 0;
  border-radius: 4px;
}
.pagination > li {
  display: inline;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 8px 12px;
  line-height: 1.42857143;
  text-decoration: none;
  color: #eb6864;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  margin-left: -1px;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  color: #e22620;
  background-color: #eeeeee;
  border-color: #dddddd;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 2;
  color: #999999;
  background-color: #f5f5f5;
  border-color: #dddddd;
  cursor: default;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #999999;
  background-color: #ffffff;
  border-color: #dddddd;
  cursor: not-allowed;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
  padding: 14px 16px;
  font-size: 19px;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 13px;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
}
.pager {
  padding-left: 0;
  margin: 21px 0;
  list-style: none;
  text-align: center;
}
.pager li {
  display: inline;
}
.pager li > a,
.pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 15px;
}
.pager li > a:hover,
.pager li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.pager .next > a,
.pager .next > span {
  float: right;
}
.pager .previous > a,
.pager .previous > span {
  float: left;
}
.pager .disabled > a,
.pager .disabled > a:hover,
.pager .disabled > a:focus,
.pager .disabled > span {
  color: #999999;
  background-color: #ffffff;
  cursor: not-allowed;
}
.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}
a.label:hover,
a.label:focus {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
.label:empty {
  display: none;
}
.btn .label {
  position: relative;
  top: -1px;
}
.label-default {
  background-color: #999999;
}
.label-default[href]:hover,
.label-default[href]:focus {
  background-color: #808080;
}
.label-primary {
  background-color: #eb6864;
}
.label-primary[href]:hover,
.label-primary[href]:focus {
  background-color: #e53c37;
}
.label-success {
  background-color: #22b24c;
}
.label-success[href]:hover,
.label-success[href]:focus {
  background-color: #1a873a;
}
.label-info {
  background-color: #336699;
}
.label-info[href]:hover,
.label-info[href]:focus {
  background-color: #264c73;
}
.label-warning {
  background-color: #f5e625;
}
.label-warning[href]:hover,
.label-warning[href]:focus {
  background-color: #ddce0a;
}
.label-danger {
  background-color: #f57a00;
}
.label-danger[href]:hover,
.label-danger[href]:focus {
  background-color: #c26100;
}
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  line-height: 1;
  vertical-align: baseline;
  white-space: nowrap;
  text-align: center;
  background-color: #eb6864;
  border-radius: 10px;
}
.badge:empty {
  display: none;
}
.btn .badge {
  position: relative;
  top: -1px;
}
.btn-xs .badge {
  top: 0;
  padding: 1px 5px;
}
a.badge:hover,
a.badge:focus {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
.list-group-item.active > .badge,
.nav-pills > .active > a > .badge {
  color: #eb6864;
  background-color: #ffffff;
}
.list-group-item > .badge {
  float: right;
}
.list-group-item > .badge + .badge {
  margin-right: 5px;
}
.nav-pills > li > a > .badge {
  margin-left: 3px;
}
.jumbotron {
  padding: 30px 15px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eeeeee;
}
.jumbotron h1,
.jumbotron .h1 {
  color: inherit;
}
.jumbotron p {
  margin-bottom: 15px;
  font-size: 23px;
  font-weight: 200;
}
.jumbotron > hr {
  border-top-color: #d5d5d5;
}
.container .jumbotron,
.container-fluid .jumbotron {
  border-radius: 6px;
}
.jumbotron .container {
  max-width: 100%;
}
@media screen and (min-width: 768px) {
  .jumbotron {
    padding: 48px 0;
  }
  .container .jumbotron,
  .container-fluid .jumbotron {
    padding-left: 60px;
    padding-right: 60px;
  }
  .jumbotron h1,
  .jumbotron .h1 {
    font-size: 67.5px;
  }
}
.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 21px;
  line-height: 1.42857143;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  -webkit-transition: border 0.2s ease-in-out;
  -o-transition: border 0.2s ease-in-out;
  transition: border 0.2s ease-in-out;
}
.thumbnail > img,
.thumbnail a > img {
  margin-left: auto;
  margin-right: auto;
}
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: #eb6864;
}
.thumbnail .caption {
  padding: 9px;
  color: #777777;
}
.alert {
  padding: 15px;
  margin-bottom: 21px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.alert h4 {
  margin-top: 0;
  color: inherit;
}
.alert .alert-link {
  font-weight: bold;
}
.alert > p,
.alert > ul {
  margin-bottom: 0;
}
.alert > p + p {
  margin-top: 5px;
}
.alert-dismissable,
.alert-dismissible {
  padding-right: 35px;
}
.alert-dismissable .close,
.alert-dismissible .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.alert-success {
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #468847;
}
.alert-success hr {
  border-top-color: #c9e2b3;
}
.alert-success .alert-link {
  color: #356635;
}
.alert-info {
  background-color: #d9edf7;
  border-color: #bce8f1;
  color: #3a87ad;
}
.alert-info hr {
  border-top-color: #a6e1ec;
}
.alert-info .alert-link {
  color: #2d6987;
}
.alert-warning {
  background-color: #fcf8e3;
  border-color: #fbeed5;
  color: #c09853;
}
.alert-warning hr {
  border-top-color: #f8e5be;
}
.alert-warning .alert-link {
  color: #a47e3c;
}
.alert-danger {
  background-color: #f2dede;
  border-color: #eed3d7;
  color: #b94a48;
}
.alert-danger hr {
  border-top-color: #e6c1c7;
}
.alert-danger .alert-link {
  color: #953b39;
}
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@-o-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
.progress {
  overflow: hidden;
  height: 21px;
  margin-bottom: 21px;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: 13px;
  line-height: 21px;
  color: #ffffff;
  text-align: center;
  background-color: #eb6864;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
}
.progress-striped .progress-bar,
.progress-bar-striped {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  -webkit-background-size: 40px 40px;
          background-size: 40px 40px;
}
.progress.active .progress-bar,
.progress-bar.active {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-success {
  background-color: #22b24c;
}
.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-info {
  background-color: #336699;
}
.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-warning {
  background-color: #f5e625;
}
.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-danger {
  background-color: #f57a00;
}
.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.media {
  margin-top: 15px;
}
.media:first-child {
  margin-top: 0;
}
.media,
.media-body {
  zoom: 1;
  overflow: hidden;
}
.media-body {
  width: 10000px;
}
.media-object {
  display: block;
}
.media-right,
.media > .pull-right {
  padding-left: 10px;
}
.media-left,
.media > .pull-left {
  padding-right: 10px;
}
.media-left,
.media-right,
.media-body {
  display: table-cell;
  vertical-align: top;
}
.media-middle {
  vertical-align: middle;
}
.media-bottom {
  vertical-align: bottom;
}
.media-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.media-list {
  padding-left: 0;
  list-style: none;
}
.list-group {
  margin-bottom: 20px;
  padding-left: 0;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
}
.list-group-item:first-child {
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
a.list-group-item {
  color: #555555;
}
a.list-group-item .list-group-item-heading {
  color: #333333;
}
a.list-group-item:hover,
a.list-group-item:focus {
  text-decoration: none;
  color: #555555;
  background-color: #f5f5f5;
}
.list-group-item.disabled,
.list-group-item.disabled:hover,
.list-group-item.disabled:focus {
  background-color: #eeeeee;
  color: #999999;
  cursor: not-allowed;
}
.list-group-item.disabled .list-group-item-heading,
.list-group-item.disabled:hover .list-group-item-heading,
.list-group-item.disabled:focus .list-group-item-heading {
  color: inherit;
}
.list-group-item.disabled .list-group-item-text,
.list-group-item.disabled:hover .list-group-item-text,
.list-group-item.disabled:focus .list-group-item-text {
  color: #999999;
}
.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  z-index: 2;
  color: #ffffff;
  background-color: #eb6864;
  border-color: #eb6864;
}
.list-group-item.active .list-group-item-heading,
.list-group-item.active:hover .list-group-item-heading,
.list-group-item.active:focus .list-group-item-heading,
.list-group-item.active .list-group-item-heading > small,
.list-group-item.active:hover .list-group-item-heading > small,
.list-group-item.active:focus .list-group-item-heading > small,
.list-group-item.active .list-group-item-heading > .small,
.list-group-item.active:hover .list-group-item-heading > .small,
.list-group-item.active:focus .list-group-item-heading > .small {
  color: inherit;
}
.list-group-item.active .list-group-item-text,
.list-group-item.active:hover .list-group-item-text,
.list-group-item.active:focus .list-group-item-text {
  color: #ffffff;
}
.list-group-item-success {
  color: #468847;
  background-color: #dff0d8;
}
a.list-group-item-success {
  color: #468847;
}
a.list-group-item-success .list-group-item-heading {
  color: inherit;
}
a.list-group-item-success:hover,
a.list-group-item-success:focus {
  color: #468847;
  background-color: #d0e9c6;
}
a.list-group-item-success.active,
a.list-group-item-success.active:hover,
a.list-group-item-success.active:focus {
  color: #fff;
  background-color: #468847;
  border-color: #468847;
}
.list-group-item-info {
  color: #3a87ad;
  background-color: #d9edf7;
}
a.list-group-item-info {
  color: #3a87ad;
}
a.list-group-item-info .list-group-item-heading {
  color: inherit;
}
a.list-group-item-info:hover,
a.list-group-item-info:focus {
  color: #3a87ad;
  background-color: #c4e3f3;
}
a.list-group-item-info.active,
a.list-group-item-info.active:hover,
a.list-group-item-info.active:focus {
  color: #fff;
  background-color: #3a87ad;
  border-color: #3a87ad;
}
.list-group-item-warning {
  color: #c09853;
  background-color: #fcf8e3;
}
a.list-group-item-warning {
  color: #c09853;
}
a.list-group-item-warning .list-group-item-heading {
  color: inherit;
}
a.list-group-item-warning:hover,
a.list-group-item-warning:focus {
  color: #c09853;
  background-color: #faf2cc;
}
a.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus {
  color: #fff;
  background-color: #c09853;
  border-color: #c09853;
}
.list-group-item-danger {
  color: #b94a48;
  background-color: #f2dede;
}
a.list-group-item-danger {
  color: #b94a48;
}
a.list-group-item-danger .list-group-item-heading {
  color: inherit;
}
a.list-group-item-danger:hover,
a.list-group-item-danger:focus {
  color: #b94a48;
  background-color: #ebcccc;
}
a.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus {
  color: #fff;
  background-color: #b94a48;
  border-color: #b94a48;
}
.list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.list-group-item-text {
  margin-bottom: 0;
  line-height: 1.3;
}
.panel {
  margin-bottom: 21px;
  background-color: #ffffff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.panel-body {
  padding: 15px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 17px;
  color: inherit;
}
.panel-title > a,
.panel-title > small,
.panel-title > .small,
.panel-title > small > a,
.panel-title > .small > a {
  color: inherit;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #dddddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .list-group,
.panel > .panel-collapse > .list-group {
  margin-bottom: 0;
}
.panel > .list-group .list-group-item,
.panel > .panel-collapse > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child,
.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.panel > .list-group:last-child .list-group-item:last-child,
.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.list-group + .panel-footer {
  border-top-width: 0;
}
.panel > .table,
.panel > .table-responsive > .table,
.panel > .panel-collapse > .table {
  margin-bottom: 0;
}
.panel > .table caption,
.panel > .table-responsive > .table caption,
.panel > .panel-collapse > .table caption {
  padding-left: 15px;
  padding-right: 15px;
}
.panel > .table:first-child,
.panel > .table-responsive:first-child > .table:first-child {
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {
  border-top-left-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {
  border-top-right-radius: 3px;
}
.panel > .table:last-child,
.panel > .table-responsive:last-child > .table:last-child {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
  border-bottom-left-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
  border-bottom-right-radius: 3px;
}
.panel > .panel-body + .table,
.panel > .panel-body + .table-responsive,
.panel > .table + .panel-body,
.panel > .table-responsive + .panel-body {
  border-top: 1px solid #dddddd;
}
.panel > .table > tbody:first-child > tr:first-child th,
.panel > .table > tbody:first-child > tr:first-child td {
  border-top: 0;
}
.panel > .table-bordered,
.panel > .table-responsive > .table-bordered {
  border: 0;
}
.panel > .table-bordered > thead > tr > th:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,
.panel > .table-bordered > tbody > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,
.panel > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-bordered > thead > tr > td:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,
.panel > .table-bordered > tbody > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,
.panel > .table-bordered > tfoot > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {
  border-left: 0;
}
.panel > .table-bordered > thead > tr > th:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,
.panel > .table-bordered > tbody > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,
.panel > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-bordered > thead > tr > td:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,
.panel > .table-bordered > tbody > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,
.panel > .table-bordered > tfoot > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {
  border-right: 0;
}
.panel > .table-bordered > thead > tr:first-child > td,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,
.panel > .table-bordered > tbody > tr:first-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,
.panel > .table-bordered > thead > tr:first-child > th,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,
.panel > .table-bordered > tbody > tr:first-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {
  border-bottom: 0;
}
.panel > .table-bordered > tbody > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,
.panel > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-bordered > tbody > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,
.panel > .table-bordered > tfoot > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {
  border-bottom: 0;
}
.panel > .table-responsive {
  border: 0;
  margin-bottom: 0;
}
.panel-group {
  margin-bottom: 21px;
}
.panel-group .panel {
  margin-bottom: 0;
  border-radius: 4px;
}
.panel-group .panel + .panel {
  margin-top: 5px;
}
.panel-group .panel-heading {
  border-bottom: 0;
}
.panel-group .panel-heading + .panel-collapse > .panel-body,
.panel-group .panel-heading + .panel-collapse > .list-group {
  border-top: 1px solid #dddddd;
}
.panel-group .panel-footer {
  border-top: 0;
}
.panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #dddddd;
}
.panel-default {
  border-color: #dddddd;
}
.panel-default > .panel-heading {
  color: #777777;
  background-color: #f5f5f5;
  border-color: #dddddd;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #dddddd;
}
.panel-default > .panel-heading .badge {
  color: #f5f5f5;
  background-color: #777777;
}
.panel-default > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #dddddd;
}
.panel-primary {
  border-color: #eb6864;
}
.panel-primary > .panel-heading {
  color: #ffffff;
  background-color: #eb6864;
  border-color: #eb6864;
}
.panel-primary > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #eb6864;
}
.panel-primary > .panel-heading .badge {
  color: #eb6864;
  background-color: #ffffff;
}
.panel-primary > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #eb6864;
}
.panel-success {
  border-color: #22b24c;
}
.panel-success > .panel-heading {
  color: #468847;
  background-color: #22b24c;
  border-color: #22b24c;
}
.panel-success > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #22b24c;
}
.panel-success > .panel-heading .badge {
  color: #22b24c;
  background-color: #468847;
}
.panel-success > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #22b24c;
}
.panel-info {
  border-color: #336699;
}
.panel-info > .panel-heading {
  color: #3a87ad;
  background-color: #336699;
  border-color: #336699;
}
.panel-info > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #336699;
}
.panel-info > .panel-heading .badge {
  color: #336699;
  background-color: #3a87ad;
}
.panel-info > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #336699;
}
.panel-warning {
  border-color: #f5e625;
}
.panel-warning > .panel-heading {
  color: #c09853;
  background-color: #f5e625;
  border-color: #f5e625;
}
.panel-warning > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #f5e625;
}
.panel-warning > .panel-heading .badge {
  color: #f5e625;
  background-color: #c09853;
}
.panel-warning > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #f5e625;
}
.panel-danger {
  border-color: #f57a00;
}
.panel-danger > .panel-heading {
  color: #b94a48;
  background-color: #f57a00;
  border-color: #f57a00;
}
.panel-danger > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #f57a00;
}
.panel-danger > .panel-heading .badge {
  color: #f57a00;
  background-color: #b94a48;
}
.panel-danger > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #f57a00;
}
.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border: 0;
}
.embed-responsive.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}
.embed-responsive.embed-responsive-4by3 {
  padding-bottom: 75%;
}
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
.well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, 0.15);
}
.well-lg {
  padding: 24px;
  border-radius: 6px;
}
.well-sm {
  padding: 9px;
  border-radius: 3px;
}
.close {
  float: right;
  font-size: 22.5px;
  font-weight: bold;
  line-height: 1;
  color: #000000;
  text-shadow: 0 1px 0 #ffffff;
  opacity: 0.2;
  filter: alpha(opacity=20);
}
.close:hover,
.close:focus {
  color: #000000;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.5;
  filter: alpha(opacity=50);
}
button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}
.modal-open {
  overflow: hidden;
}
.modal {
  display: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.modal.fade .modal-dialog {
  -webkit-transform: translate(0, -25%);
  -ms-transform: translate(0, -25%);
  -o-transform: translate(0, -25%);
  transform: translate(0, -25%);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
}
.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
.modal-content {
  position: relative;
  background-color: #ffffff;
  border: 1px solid #999999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  outline: 0;
}
.modal-backdrop {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: #000000;
}
.modal-backdrop.fade {
  opacity: 0;
  filter: alpha(opacity=0);
}
.modal-backdrop.in {
  opacity: 0.5;
  filter: alpha(opacity=50);
}
.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  min-height: 16.42857143px;
}
.modal-header .close {
  margin-top: -2px;
}
.modal-title {
  margin: 0;
  line-height: 1.42857143;
}
.modal-body {
  position: relative;
  padding: 20px;
}
.modal-footer {
  padding: 20px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.modal-footer .btn + .btn {
  margin-left: 5px;
  margin-bottom: 0;
}
.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
.modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}
@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  .modal-sm {
    width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg {
    width: 900px;
  }
}
.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  visibility: visible;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 13px;
  font-weight: normal;
  line-height: 1.4;
  opacity: 0;
  filter: alpha(opacity=0);
}
.tooltip.in {
  opacity: 0.9;
  filter: alpha(opacity=90);
}
.tooltip.top {
  margin-top: -3px;
  padding: 5px 0;
}
.tooltip.right {
  margin-left: 3px;
  padding: 0 5px;
}
.tooltip.bottom {
  margin-top: 3px;
  padding: 5px 0;
}
.tooltip.left {
  margin-left: -3px;
  padding: 0 5px;
}
.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 4px;
}
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.tooltip.top .tooltip-arrow {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: rgba(0, 0, 0, 0.9);
}
.tooltip.top-left .tooltip-arrow {
  bottom: 0;
  right: 5px;
  margin-bottom: -5px;
  border-width: 5px 5px 0;
  border-top-color: rgba(0, 0, 0, 0.9);
}
.tooltip.top-right .tooltip-arrow {
  bottom: 0;
  left: 5px;
  margin-bottom: -5px;
  border-width: 5px 5px 0;
  border-top-color: rgba(0, 0, 0, 0.9);
}
.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: rgba(0, 0, 0, 0.9);
}
.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: rgba(0, 0, 0, 0.9);
}
.tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: rgba(0, 0, 0, 0.9);
}
.tooltip.bottom-left .tooltip-arrow {
  top: 0;
  right: 5px;
  margin-top: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: rgba(0, 0, 0, 0.9);
}
.tooltip.bottom-right .tooltip-arrow {
  top: 0;
  left: 5px;
  margin-top: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: rgba(0, 0, 0, 0.9);
}
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  max-width: 276px;
  padding: 1px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 15px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: left;
  background-color: #ffffff;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid #cccccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  white-space: normal;
}
.popover.top {
  margin-top: -10px;
}
.popover.right {
  margin-left: 10px;
}
.popover.bottom {
  margin-top: 10px;
}
.popover.left {
  margin-left: -10px;
}
.popover-title {
  margin: 0;
  padding: 8px 14px;
  font-size: 15px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 5px 5px 0 0;
}
.popover-content {
  padding: 9px 14px;
}
.popover > .arrow,
.popover > .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.popover > .arrow {
  border-width: 11px;
}
.popover > .arrow:after {
  border-width: 10px;
  content: "";
}
.popover.top > .arrow {
  left: 50%;
  margin-left: -11px;
  border-bottom-width: 0;
  border-top-color: #999999;
  border-top-color: rgba(0, 0, 0, 0.25);
  bottom: -11px;
}
.popover.top > .arrow:after {
  content: " ";
  bottom: 1px;
  margin-left: -10px;
  border-bottom-width: 0;
  border-top-color: #ffffff;
}
.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-left-width: 0;
  border-right-color: #999999;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.popover.right > .arrow:after {
  content: " ";
  left: 1px;
  bottom: -10px;
  border-left-width: 0;
  border-right-color: #ffffff;
}
.popover.bottom > .arrow {
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999999;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  top: -11px;
}
.popover.bottom > .arrow:after {
  content: " ";
  top: 1px;
  margin-left: -10px;
  border-top-width: 0;
  border-bottom-color: #ffffff;
}
.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999999;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.popover.left > .arrow:after {
  content: " ";
  right: 1px;
  border-right-width: 0;
  border-left-color: #ffffff;
  bottom: -10px;
}
.carousel {
  position: relative;
}
.carousel-inner {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.carousel-inner > .item {
  display: none;
  position: relative;
  -webkit-transition: 0.6s ease-in-out left;
  -o-transition: 0.6s ease-in-out left;
  transition: 0.6s ease-in-out left;
}
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  line-height: 1;
}
@media all and (transform-3d), (-webkit-transform-3d) {
  .carousel-inner > .item {
    -webkit-transition: -webkit-transform 0.6s ease-in-out;
    -o-transition: -o-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    perspective: 1000;
  }
  .carousel-inner > .item.next,
  .carousel-inner > .item.active.right {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    left: 0;
  }
  .carousel-inner > .item.prev,
  .carousel-inner > .item.active.left {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    left: 0;
  }
  .carousel-inner > .item.next.left,
  .carousel-inner > .item.prev.right,
  .carousel-inner > .item.active {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    left: 0;
  }
}
.carousel-inner > .active,
.carousel-inner > .next,
.carousel-inner > .prev {
  display: block;
}
.carousel-inner > .active {
  left: 0;
}
.carousel-inner > .next,
.carousel-inner > .prev {
  position: absolute;
  top: 0;
  width: 100%;
}
.carousel-inner > .next {
  left: 100%;
}
.carousel-inner > .prev {
  left: -100%;
}
.carousel-inner > .next.left,
.carousel-inner > .prev.right {
  left: 0;
}
.carousel-inner > .active.left {
  left: -100%;
}
.carousel-inner > .active.right {
  left: 100%;
}
.carousel-control {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 15%;
  opacity: 0.5;
  filter: alpha(opacity=50);
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}
.carousel-control.left {
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.0001)));
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
}
.carousel-control.right {
  left: auto;
  right: 0;
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.0001)), to(rgba(0, 0, 0, 0.5)));
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
}
.carousel-control:hover,
.carousel-control:focus {
  outline: 0;
  color: #ffffff;
  text-decoration: none;
  opacity: 0.9;
  filter: alpha(opacity=90);
}
.carousel-control .icon-prev,
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-left,
.carousel-control .glyphicon-chevron-right {
  position: absolute;
  top: 50%;
  z-index: 5;
  display: inline-block;
}
.carousel-control .icon-prev,
.carousel-control .glyphicon-chevron-left {
  left: 50%;
  margin-left: -10px;
}
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
  right: 50%;
  margin-right: -10px;
}
.carousel-control .icon-prev,
.carousel-control .icon-next {
  width: 20px;
  height: 20px;
  margin-top: -10px;
  line-height: 1;
  font-family: serif;
}
.carousel-control .icon-prev:before {
  content: '\\2039';
}
.carousel-control .icon-next:before {
  content: '\\203a';
}
.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 15;
  width: 60%;
  margin-left: -30%;
  padding-left: 0;
  list-style: none;
  text-align: center;
}
.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  cursor: pointer;
  background-color: #000 \\9;
  background-color: rgba(0, 0, 0, 0);
}
.carousel-indicators .active {
  margin: 0;
  width: 12px;
  height: 12px;
  background-color: #ffffff;
}
.carousel-caption {
  position: absolute;
  left: 15%;
  right: 15%;
  bottom: 20px;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}
.carousel-caption .btn {
  text-shadow: none;
}
@media screen and (min-width: 768px) {
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-prev,
  .carousel-control .icon-next {
    width: 30px;
    height: 30px;
    margin-top: -15px;
    font-size: 30px;
  }
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .icon-prev {
    margin-left: -15px;
  }
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-next {
    margin-right: -15px;
  }
  .carousel-caption {
    left: 20%;
    right: 20%;
    padding-bottom: 30px;
  }
  .carousel-indicators {
    bottom: 20px;
  }
}
.clearfix:before,
.clearfix:after,
.dl-horizontal dd:before,
.dl-horizontal dd:after,
.container:before,
.container:after,
.container-fluid:before,
.container-fluid:after,
.row:before,
.row:after,
.form-horizontal .form-group:before,
.form-horizontal .form-group:after,
.btn-toolbar:before,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:before,
.btn-group-vertical > .btn-group:after,
.nav:before,
.nav:after,
.navbar:before,
.navbar:after,
.navbar-header:before,
.navbar-header:after,
.navbar-collapse:before,
.navbar-collapse:after,
.pager:before,
.pager:after,
.panel-body:before,
.panel-body:after,
.modal-footer:before,
.modal-footer:after {
  content: " ";
  display: table;
}
.clearfix:after,
.dl-horizontal dd:after,
.container:after,
.container-fluid:after,
.row:after,
.form-horizontal .form-group:after,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:after,
.nav:after,
.navbar:after,
.navbar-header:after,
.navbar-collapse:after,
.pager:after,
.panel-body:after,
.modal-footer:after {
  clear: both;
}
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.pull-right {
  float: right !important;
}
.pull-left {
  float: left !important;
}
.hide {
  display: none !important;
}
.show {
  display: block !important;
}
.invisible {
  visibility: hidden;
}
.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
.hidden {
  display: none !important;
  visibility: hidden !important;
}
.affix {
  position: fixed;
}
@-ms-viewport {
  width: device-width;
}
.visible-xs,
.visible-sm,
.visible-md,
.visible-lg {
  display: none !important;
}
.visible-xs-block,
.visible-xs-inline,
.visible-xs-inline-block,
.visible-sm-block,
.visible-sm-inline,
.visible-sm-inline-block,
.visible-md-block,
.visible-md-inline,
.visible-md-inline-block,
.visible-lg-block,
.visible-lg-inline,
.visible-lg-inline-block {
  display: none !important;
}
@media (max-width: 767px) {
  .visible-xs {
    display: block !important;
  }
  table.visible-xs {
    display: table;
  }
  tr.visible-xs {
    display: table-row !important;
  }
  th.visible-xs,
  td.visible-xs {
    display: table-cell !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-block {
    display: block !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-inline {
    display: inline !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm {
    display: block !important;
  }
  table.visible-sm {
    display: table;
  }
  tr.visible-sm {
    display: table-row !important;
  }
  th.visible-sm,
  td.visible-sm {
    display: table-cell !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-block {
    display: block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline {
    display: inline !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md {
    display: block !important;
  }
  table.visible-md {
    display: table;
  }
  tr.visible-md {
    display: table-row !important;
  }
  th.visible-md,
  td.visible-md {
    display: table-cell !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-block {
    display: block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline {
    display: inline !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg {
    display: block !important;
  }
  table.visible-lg {
    display: table;
  }
  tr.visible-lg {
    display: table-row !important;
  }
  th.visible-lg,
  td.visible-lg {
    display: table-cell !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-block {
    display: block !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-inline {
    display: inline !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-inline-block {
    display: inline-block !important;
  }
}
@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .hidden-sm {
    display: none !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-md {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .hidden-lg {
    display: none !important;
  }
}


/*.visible-print {
  display: none !important;
}
@media print {
  .visible-print {
    display: block !important;
  }
  table.visible-print {
    display: table;
  }
  tr.visible-print {
    display: table-row !important;
  }
  th.visible-print,
  td.visible-print {
    display: table-cell !important;
  }
}
.visible-print-block {
  display: none !important;
}
@media print {
  .visible-print-block {
    display: block !important;
  }
}
.visible-print-inline {
  display: none !important;
}
@media print {
  .visible-print-inline {
    display: inline !important;
  }
}
.visible-print-inline-block {
  display: none !important;
}
@media print {
  .visible-print-inline-block {
    display: inline-block !important;
  }
}
@media print {
  .hidden-print {
    display: none !important;
  }
}*/

.navbar {
  font-size: 18px;
  font-family: "News Cycle", "Arial Narrow Bold", sans-serif;
  font-weight: 700;
}
.navbar-default .badge {
  background-color: #000;
  color: #fff;
}
.navbar-inverse .badge {
  background-color: #fff;
  color: #eb6864;
}
.navbar-brand {
  font-size: inherit;
  font-weight: 700;
  text-transform: uppercase;
}
.has-warning .help-block,
.has-warning .control-label,
.has-warning .form-control-feedback {
  color: #f57a00;
}
.has-warning .form-control,
.has-warning .form-control:focus {
  border-color: #f57a00;
}
.has-error .help-block,
.has-error .control-label,
.has-error .form-control-feedback {
  color: #eb6864;
}
.has-error .form-control,
.has-error .form-control:focus {
  border-color: #eb6864;
}
.has-success .help-block,
.has-success .control-label,
.has-success .form-control-feedback {
  color: #22b24c;
}
.has-success .form-control,
.has-success .form-control:focus {
  border-color: #22b24c;
}
.badge {
  padding-bottom: 4px;
  vertical-align: 3px;
  font-size: 10px;
}
.jumbotron h1,
.jumbotron h2,
.jumbotron h3,
.jumbotron h4,
.jumbotron h5,
.jumbotron h6 {
  font-family: "News Cycle", "Arial Narrow Bold", sans-serif;
  font-weight: 700;
  color: #000;
}
.panel-primary .panel-title,
.panel-success .panel-title,
.panel-warning .panel-title,
.panel-danger .panel-title,
.panel-info .panel-title {
  color: #fff;
}
`,"index.html":`<!doctype html>
<html>
	<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">

	<title>Richard Hendriks</title>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css">

	<style type="text/css">
	@import url(
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
#work .position,
#volunteer .position {
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

	</style>

	</head>
	<body>

	<header id="header">
		<div class="container">
			<div class="row">
				<div class="col-sm-9 col-sm-push-3">
					<h1>
						Richard Hendriks
					</h1>
					<h2>
						Programmer
					</h2>
				</div>
			</div>
		</div>
	</header>
	<div id="content" class="container">

	<section id="contact" class="row">
		<aside class="col-sm-3">
			<h3>Contact</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			<div class="col-sm-6">
				<strong>Email</strong>
				<div class="email"><a class="__cf_email__" href="/cdn-cgi/l/email-protection" data-cfemail="e6948f858e879482c88e838882948f8d95a68b878f8ac885898b">[email&#160;protected]</a>
					<script data-cfhash='f9e31' type="text/javascript">
					/* <![CDATA[ */!function(){try{var t="currentScript"in document?document.currentScript:function(){for(var t=document.getElementsByTagName("script"),e=t.length;e--;)if(t[e].getAttribute("data-cfhash"))return t[e]}();if(t&&t.previousSibling){var e,r,n,i,c=t.previousSibling,a=c.getAttribute("data-cfemail");if(a){for(e="",r=parseInt(a.substr(0,2),16),n=2;a.length-n;n+=2)i=parseInt(a.substr(n,2),16)^r,e+=String.fromCharCode(i);e=document.createTextNode(e),c.parentNode.replaceChild(e,c)}t.parentNode.removeChild(t);}}catch(u){}}()/* ]]> */
					<\/script>
				</div>
			</div>
			<div class="col-sm-6">
				<strong>Phone</strong>
				<div class="phone">(912) 555-4321</div>
			</div>
			<div class="col-sm-6">
				<strong>Website</strong>
				<div class="website">
					<a href="http://richardhendricks.com">http://richardhendricks.com</a>
				</div>
			</div>
			</div>
		</div>
	</section>
	<section id="about" class="row">
		<aside class="col-sm-3">
			<h3>About</h3>
		</aside>
		<div class="col-sm-9">
			<p>Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a \u201Clength-limited\u201D conversation!</p>
		</div>
	</section>
	<section id="profiles" class="row">
		<aside class="col-sm-3">
			<h3>Profiles</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
				<div class="col-sm-6">
					<strong class="network">
						Twitter
					</strong>
					<div class="username">
							neutralthoughts
					</div>
				</div>
				<div class="col-sm-6">
					<strong class="network">
						SoundCloud
					</strong>
					<div class="username">
						<div class="url">
							<a href="https://soundcloud.com/dandymusicnl">dandymusicnl</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="work" class="row">
		<aside class="col-sm-3">
			<h3>Work</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			<div class="col-sm-12">
				<h4 class="strike-through">
					<span>Pied Piper</span>
					<span class="date">
						2013-12-01 \u2014 2014-12-01
					</span>
				</h4>
				<div class="website pull-right">
					<a href="http://piedpiper.com">http://piedpiper.com</a>
				</div>
				<div class="position">
					CEO/President
				</div>
				<div class="summary">
					<p>Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores\u2122 that are not merely competitive, but approach the theoretical limit of lossless compression.</p>
				</div>
				<h4>Highlights</h4>
				<ul class="highlights">
					<li class="bullet">Build an algorithm for artist to detect if their music was violating copy right infringement laws</li>
					<li class="bullet">Successfully won Techcrunch Disrupt</li>
					<li class="bullet">Optimized an algorithm that holds the current world record for Weisman Scores</li>
				</ul>
			</div>
			</div>
		</div>
	</section>

	<section id="volunteer" class="row">
		<aside class="col-sm-3">
			<h3>Volunteer</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			<div class="col-sm-12">
				<h4 class="strike-through">
					<span>CoderDojo</span>
					<span class="date">
						2012-01-01 \u2014 2013-01-01
					</span>
				</h4>
				<div class="website pull-right">
					<a href="http://coderdojo.com/">http://coderdojo.com/</a>
				</div>
				<div class="position">
					Teacher
				</div>
				<div class="summary">
					<p>Global movement of free coding clubs for young people.</p>
				</div>
				<h4>Highlights</h4>
				<ul class="highlights">
					<li class="bullet">Awarded &#x27;Teacher of the Month&#x27;</li>
				</ul>
			</div>
			</div>
		</div>
	</section>

	<section id="education" class="row">
		<aside class="col-sm-3">
			<h3>Education</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			<div class="col-sm-12">
				<h4 class="strike-through">
					<span>University of Oklahoma</span>
					<span class="date">
						2011-06-01 \u2014 2014-01-01
					</span>
				</h4>
				<div class="area">
					Information Technology
				</div>
				<div class="studyType">
					Bachelor
				</div>
				<h4>Courses</h4>
				<ul class="courses">
					<li>DB1101 - Basic SQL</li>
					<li>CS2011 - Java Introduction</li>
				</ul>
			</div>
			</div>
		</div>
	</section>

	<section id="awards" class="row">
		<aside class="col-sm-3">
			<h3>Awards</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			<div class="col-sm-12">
				<h4 class="strike-through">
					<span>Digital Compression Pioneer Award</span>
				</h4>
				<div class="date pull-right">
					<em>Awarded</em>
					2014-11-01
				</div>
				<div class="awarder">
					<em>by</em>
					<strong>Techcrunch</strong>
				</div>
				<div class="summary">
					There is no spoon.
				</div>
			</div>
			</div>
		</div>
	</section>

	<section id="publications" class="row">
		<aside class="col-sm-3">
			<h3>Publications</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			<div class="col-sm-12">
				<h4 class="strike-through">
					<span>Video compression for 3d media</span>
					<span class="date">
						2014-10-01
					</span>
				</h4>
				<div class="website pull-right">
					<a href="http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)"></a>
				</div>
				<div class="publisher">
					<em>Published by</em>
					<strong>Hooli</strong>
				</div>
				<div class="summary">
					<p>Innovative middle-out compression algorithm that changes the way we store data.</p>
				</div>
			</div>
			</div>
		</div>
	</section>

	<section id="skills" class="row">
		<aside class="col-sm-3">
			<h3>Skills</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			<div class="col-sm-6">
				<div class="name">
					<h4>Web Development</h4>
				</div>
				<ul class="keywords">
					<li>HTML</li>
					<li>CSS</li>
					<li>Javascript</li>
				</ul>
			</div>
			<div class="col-sm-6">
				<div class="name">
					<h4>Compression</h4>
				</div>
				<ul class="keywords">
					<li>Mpeg</li>
					<li>MP4</li>
					<li>GIF</li>
				</ul>
			</div>
			</div>
		</div>
	</section>

	<section id="languages" class="row">
		<aside class="col-sm-3">
			<h3>Languages</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			<div class="col-sm-6">
				<div class="language">
					<strong>English</strong>
				</div>
				<div class="fluency">
					Native speaker
				</div>
			</div>
			</div>
		</div>
	</section>

	<section id="interests" class="row">
		<aside class="col-sm-3">
			<h3>Interests</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			<div class="col-sm-6">
				<div class="name">
					<h4>Wildlife</h4>
				</div>
				<ul class="keywords">
					<li>Ferrets</li>
					<li>Unicorns</li>
				</ul>
			</div>
			</div>
		</div>
	</section>

	<section id="references" class="row">
		<aside class="col-sm-3">
			<h3>References</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
			<div class="col-sm-12">
				<blockquote class="reference">
					<p>It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company.</p>
					<p class="name">
						<strong>\u2014 Erlich Bachman</strong>
					</p>
				</blockquote>
			</div>
			</div>
		</div>
	</section>

	</div>

	</body>
</html>
`,"package.json":`{
  "name": "jsonresume-theme-crisp",
  "version": "0.2.12",
  "description": "Theme for JSON Resume based on Futura",
  "author": "James Peret",
  "repository": {
    "type": "git",
    "url": "https://github.com/jamesperet/jsonresume-theme-crisp"
  },
  "license": "MIT",
  "dependencies": {
    "lodash": "^2.4.1",
    "mustache": "^0.8.2"
  }
}
`,"resume.template":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{basics.firstName}} {{basics.lastName}}</title>
    <link rel="stylesheet" href="http://bootswatch.com/journal/bootstrap.css" type="text/css" />

   <style>

    p.basics-summary {
      margin: 15px 0 !important;
    }
    p.basics-contact {
      margin: 0 !important;
    }
    h3 {
      margin-top: 10px !important;
    }
    h3.section-heading {
      color: #ef541d !important;
    }
    h4.institution-name {
        color: #777 !important;
    }
    .interest-item {
      line-height: 26px;
    }
    a[href] {
      /* text-decoration: underline !important; */
      color: #ef541d !important;
    }

    @media print {
      a[href] {
        text-decoration: underline !important;
        color: #ef541d !important;
      }
      a[href]:after {
        content: none !important;
      }
      p, strong, li, body, .skill {
        color: #999 !important;
        font-size: 1.2em;
        line-height: 1.4em;
      }
      .basics-contact {
        font-size: 1.2em;
        line-height: 1.4em;
      }
      h3.section-heading {
        font-size: 3em;
        margin-top: 100px;
        margin-bottom: 20px;
        padding-top: 30px;
      }
      h4 {
        font-size: 2em;
      }
      h3.education-type {
        font-size: 1.2em;
        color: #999 !important;
        margin-top: 50px;
        margin-bottom: 8px;
      }
      h4.education-area {
        font-size: 1.5em;
        margin-top: 5px;
        margin-bottom: 5px;
      }
      h4.institution-name {
        font-size: 1.2em;
        margin-top: 5px;
        margin-bottom: 5px;
        color: #999 !important;
      }
      hr {
        display: none;
        margin: 0px;
      }
      h3 {
        margin-top: 25px;
      }
    }

   </style>

  </head>

  <body>
    <div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <img class="media-object img-circle pull-right" data-src="holder.js/64x64" alt="64x64" src="{{basics.picture}}" style="width: 100px; height: 100px; margin-top: 5px;">
	        <h1>{{basics.name}}<h1>
	        <h2>{{basics.location.city}}</h2>
        </div>
        </div>
      <hr />
      <section class="row">
        <header class="col-md-3">
          <h3 class="section-heading">About</h3>
        </header>
        <div class="col-md-9">
        <p class="basics-summary">{{basics.summary}}</p>
        {{#basics.phone}}
        <p class="basics-contact"><strong>Phone:</strong> {{basics.phone}}</p>
        {{/basics.phone}}
        {{#basics.email}}
        <p class="basics-contact"><strong>Email:</strong> <a href="mailto:{{basics.email}}">{{basics.email}}</a></p>
        {{/basics.email}}
        {{#basics.website}}
        <p class="basics-contact"><strong>Website:</strong> <a href="{{basics.website}}">{{basics.website}}</a></p>
        {{/basics.website}}
        <br>
        {{#basics.profiles.length}}
          {{#basics.profiles}}
          <p class="basics-contact"><strong>{{network}}:</strong> <a href="{{url}}">{{url}}</a></p>
          {{/basics.profiles}}
        {{/basics.profiles.length}}
        <hr />
        </div>
      </section>
      {{#work.length}}
      <section class="row">
        <header class="col-md-3">
          <h3 class="section-heading">Work Experience</h3>
        </header>
        <div class="col-md-9">
          <div class="skills">
            {{#work}}
            <h3>{{company}}</h3>
            <strong>{{position}}</strong>
            <p>{{startDateYear}} - {{endDateYear}}</p>
            <p>{{summary}}</p>
            <ul>
              {{#highlights}}
              <li>{{.}}</li>
              {{/highlights}}
            </ul>
            <hr />{{/work}}
          </div>
        </div>
      </section>
      {{/work.length}}

      {{#education.length}}
      <section class="row">
        <header class="col-md-3">
          <h3 class="section-heading">Education</h3>
        </header>
        <div class="col-md-9">
          <div class="skills">
            {{#education}}
            <h3 class="education-type">{{studyType}}</h3>
            <h4 class="education-area">{{area}}</h4>
            <h4 class="institution-name">{{institution}}</h4>
            <p>{{endDateYear}}</p>
            {{#summary}}
            <p>{{summary}}</p>
            {{/summary}}
            <ul>
              {{#highlights}}
              <li>{{.}}</li>
              {{/highlights}}
            </ul>
            <hr />
            {{/education}}
          </div>
        </div>
      </section>
      {{/education.length}}

      {{#publications.length}}
      <section class="row">
        <header class="col-md-3">
          <h3 class="section-heading">Projects</h3>
        </header>
        <div class="col-md-9">
          <div class="skills">
            {{#publications}}
            <h4>{{name}}</h4>
            <p><a href="{{website}}">{{website}}</a></p>
            <p>{{summary}}</p>
            <hr />{{/publications}}
          </div>
        </div>
      </section>
      {{/publications.length}}

      {{#skills.length}}
      <section class="row">
        <header class="col-md-3">
          <h3 class="section-heading">Skills</h3>
        </header>
        <div class="col-md-9">
          <div class="row-fluid skills">
            {{#skills}}
            <ul class="col-md-6">

              <li>
                <h4 class="skill">{{name}}</h4>
                <ul>
                  {{#keywords}}
                  <li>{{.}}</li>
                  {{/keywords}}
                </ul>
              </li>
            </ul>
            {{/skills}}
          </div>
        </div>
      </section>
      {{/skills.length}}

      {{#linkedInterests.length}}
      <section class="row">
        <header class="col-md-3">
          <h3 class="section-heading">Interests</h3>
        </header>
        <div class="col-md-9">
            <ul>
            {{#linkedInterests}}
              <li class="interest-item">{{name}}
              {{#interestWebsiteName}}
                {{#interestWebsiteUrl}}
                (<a href="{{interestWebsiteUrl}}">{{interestWebsiteName}}</a>)
                {{/interestWebsiteUrl}}
              {{/interestWebsiteName}}
              </li>
            {{/linkedInterests}}
            </ul>
            <hr />
        </div>
      </section>
      {{/linkedInterests.length}}

      {{#references.length}}
      <section class="row">
        <header class="col-md-3">
          <h3 class="section-heading">References</h3>
        </header>
        <div class="col-md-9">
          <div class="row-fluid skills">
            {{#references}}

            <p>{{reference}} -
              <strong>{{name}}</strong>
            </p>
            {{/references}}
          </div>
        </div>
      </section>
      {{/references.length}}

    </div>
  </div>
</div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"><\/script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
  </body>
</html>
`},In={".":["README.md","bootstrap.css","index.html","index.js","package.json","resume.template"]};je=function(c,y){var _=_e(c);return _!==void 0?_:""},Ce=function(c,y){var _=$t(c);return _===void 0&&(_=[]),y&&y.withFileTypes?_.map(function(w){var J=Kt(c)+"/"+w,mn=$t(J)!==void 0;return{name:w,isFile:function(){return!mn},isDirectory:function(){return mn}}}):_},Te=function(c){return _e(c)!==void 0||$t(c)!==void 0},Se=function(){},Ee=function(){},Yt=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Re=Yt,qe=function(){},Oe=function(){},Ie=function(){return{pipe:function(c){return c},on:function(){return this}}},Ne=function(){return{write:function(){},end:function(){},on:function(){return this}}},Ur={readFileSync:je,readdirSync:Ce,existsSync:Te,writeFileSync:Se,mkdirSync:Ee,statSync:Yt,lstatSync:Re,unlinkSync:qe,rmdirSync:Oe,createReadStream:Ie,createWriteStream:Ne}});var Fe=Gt((Nn,Qn)=>{dn();(function(){var c,y=[],_=[],w=0,J=+new Date+"",mn=75,Tn=40,kn=` 	\v\f\xA0\uFEFF
\r\u2028\u2029\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000`,Dn=/\b__p \+= '';/g,mt=/\b(__p \+=) '' \+/g,vt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,nt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,xt=/\w*$/,tt=/^\s*function[ \n\r\t]+\w/,Pn=/<%=([\s\S]+?)%>/g,yt=RegExp("^["+kn+"]*0+(?=.$)"),Sn=/($^)/,et=/\bthis\b/,wt=/['\n\r\t\u2028\u2029\\]/g,kt=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],zn=0,nn="[object Arguments]",tn="[object Array]",fn="[object Boolean]",h="[object Date]",g="[object Function]",m="[object Number]",v="[object Object]",k="[object RegExp]",P="[object String]",R={};R[g]=!1,R[nn]=R[tn]=R[fn]=R[h]=R[m]=R[v]=R[k]=R[P]=!0;var T={leading:!1,maxWait:0,trailing:!1},j={configurable:!1,enumerable:!1,value:null,writable:!1},q={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1},rn={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},S=q[typeof window]&&window||this,M=q[typeof Nn]&&Nn&&!Nn.nodeType&&Nn,an=q[typeof Qn]&&Qn&&!Qn.nodeType&&Qn,Fn=an&&an.exports===M&&M,H=q[typeof globalThis]&&globalThis;H&&(H.global===H||H.window===H)&&(S=H);function pn(f,z,C){for(var E=(C||0)-1,I=f?f.length:0;++E<I;)if(f[E]===z)return E;return-1}function En(f,z){var C=typeof z;if(f=f.cache,C=="boolean"||z==null)return f[z]?0:-1;C!="number"&&C!="string"&&(C="object");var E=C=="number"?z:J+z;return f=(f=f[C])&&f[E],C=="object"?f&&pn(f,z)>-1?0:-1:f?0:-1}function Be(f){var z=this.cache,C=typeof f;if(C=="boolean"||f==null)z[f]=!0;else{C!="number"&&C!="string"&&(C="object");var E=C=="number"?f:J+f,I=z[C]||(z[C]={});C=="object"?(I[E]||(I[E]=[])).push(f):I[E]=!0}}function At(f){return f.charCodeAt(0)}function He(f,z){for(var C=f.criteria,E=z.criteria,I=-1,X=C.length;++I<X;){var en=C[I],U=E[I];if(en!==U){if(en>U||typeof en>"u")return 1;if(en<U||typeof U>"u")return-1}}return f.index-z.index}function zt(f){var z=-1,C=f.length,E=f[0],I=f[C/2|0],X=f[C-1];if(E&&typeof E=="object"&&I&&typeof I=="object"&&X&&typeof X=="object")return!1;var en=_t();en.false=en.null=en.true=en.undefined=!1;var U=_t();for(U.array=f,U.cache=en,U.push=Be;++z<C;)U.push(f[z]);return U}function Ge(f){return"\\"+rn[f]}function cn(){return y.pop()||[]}function _t(){return _.pop()||{array:null,cache:null,criteria:null,false:!1,index:0,null:!1,number:null,object:null,push:null,string:null,true:!1,undefined:!1,value:null}}function ln(f){f.length=0,y.length<Tn&&y.push(f)}function Mn(f){var z=f.cache;z&&Mn(z),f.array=f.cache=f.criteria=f.object=f.number=f.string=f.value=null,_.length<Tn&&_.push(f)}function O(f,z,C){z||(z=0),typeof C>"u"&&(C=f?f.length:0);for(var E=-1,I=C-z||0,X=Array(I<0?0:I);++E<I;)X[E]=f[z+E];return X}function jt(f){f=f?vn.defaults(S.Object(),f,vn.pick(S,kt)):S;var z=f.Array,C=f.Boolean,E=f.Date,I=f.Function,X=f.Math,en=f.Number,U=f.Object,Un=f.RegExp,xn=f.String,gn=f.TypeError,Rn=[],Vt=U.prototype,$e=f._,G=Vt.toString,Ke=Un("^"+xn(G).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Ye=X.ceil,ot=f.clearTimeout,Ae=X.floor,Ve=I.prototype.toString,qn=wn(qn=U.getPrototypeOf)&&qn,$=Vt.hasOwnProperty,Wn=Rn.push,Ln=f.setTimeout,Jt=Rn.splice,Je=Rn.unshift,Xt=(function(){try{var n={},t=wn(t=U.defineProperty)&&t,e=t(n,n,n)&&t}catch{}return e})(),rt=wn(rt=U.create)&&rt,Ct=wn(Ct=z.isArray)&&Ct,Xe=f.isFinite,Qe=f.isNaN,it=wn(it=U.keys)&&it,sn=X.max,Bn=X.min,Tt=f.parseInt,Qt=X.random,hn={};hn[tn]=z,hn[fn]=C,hn[h]=E,hn[g]=I,hn[v]=U,hn[m]=en,hn[k]=Un,hn[P]=xn;function a(n){return n&&typeof n=="object"&&!B(n)&&$.call(n,"__wrapped__")?n:new _n(n)}function _n(n,t){this.__chain__=!!t,this.__wrapped__=n}_n.prototype=a.prototype;var Hn=a.support={};Hn.funcDecomp=!wn(f.WinRTError)&&et.test(jt),Hn.funcNames=typeof I.name=="string",a.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:Pn,variable:"",imports:{_:a}};function Ze(n){var t=n[0],e=n[2],o=n[4];function r(){if(e){var i=O(e);Wn.apply(i,arguments)}if(this instanceof r){var l=Gn(t.prototype),s=t.apply(l,i||arguments);return Y(s)?s:l}return t.apply(o,i||arguments)}return Ot(r,n),r}function St(n,t,e,o,r){if(e){var i=e(n);if(typeof i<"u")return i}var l=Y(n);if(l){var s=G.call(n);if(!R[s])return n;var d=hn[s];switch(s){case fn:case h:return new d(+n);case m:case P:return new d(n);case k:return i=d(n.source,xt.exec(n)),i.lastIndex=n.lastIndex,i}}else return n;var b=B(n);if(t){var p=!o;o||(o=cn()),r||(r=cn());for(var x=o.length;x--;)if(o[x]==n)return r[x];i=b?d(n.length):{}}else i=b?O(n):st({},n);return b&&($.call(n,"index")&&(i.index=n.index),$.call(n,"input")&&(i.input=n.input)),t&&(o.push(n),r.push(i),(b?A:F)(n,function(u,N){i[N]=St(u,t,e,o,r)}),p&&(ln(o),ln(r))),i}function Gn(n,t){return Y(n)?rt(n):{}}rt||(Gn=(function(){function n(){}return function(t){if(Y(t)){n.prototype=t;var e=new n;n.prototype=null}return e||f.Object()}})());function Q(n,t,e){if(typeof n!="function")return Lt;if(typeof t>"u"||!("prototype"in n))return n;var o=n.__bindData__;if(typeof o>"u"&&(Hn.funcNames&&(o=!n.name),o=o||!Hn.funcDecomp,!o)){var r=Ve.call(n);Hn.funcNames||(o=!tt.test(r)),o||(o=et.test(r),Ot(n,o))}if(o===!1||o!==!0&&o[1]&1)return n;switch(e){case 1:return function(i){return n.call(t,i)};case 2:return function(i,l){return n.call(t,i,l)};case 3:return function(i,l,s){return n.call(t,i,l,s)};case 4:return function(i,l,s,d){return n.call(t,i,l,s,d)}}return me(n,t)}function Zt(n){var t=n[0],e=n[1],o=n[2],r=n[3],i=n[4],l=n[5],s=e&1,d=e&2,b=e&4,p=e&8,x=t;function u(){var N=s?i:this;if(o){var D=O(o);Wn.apply(D,arguments)}if((r||b)&&(D||(D=O(arguments)),r&&Wn.apply(D,r),b&&D.length<l))return e|=16,Zt([t,p?e:e&-4,D,null,i,l]);if(D||(D=arguments),d&&(t=N[x]),this instanceof u){N=Gn(t.prototype);var Z=t.apply(N,D);return Y(Z)?Z:N}return t.apply(N,D)}return Ot(u,n),u}function $n(n,t){var e=-1,o=at(),r=n?n.length:0,i=r>=mn&&o===pn,l=[];if(i){var s=zt(t);s?(o=En,t=s):i=!1}for(;++e<r;){var d=n[e];o(t,d)<0&&l.push(d)}return i&&Mn(t),l}function yn(n,t,e,o){for(var r=(o||0)-1,i=n?n.length:0,l=[];++r<i;){var s=n[r];if(s&&typeof s=="object"&&typeof s.length=="number"&&(B(s)||lt(s))){t||(s=yn(s,t,e));var d=-1,b=s.length,p=l.length;for(l.length+=b;++d<b;)l[p++]=s[d]}else e||l.push(s)}return l}function On(n,t,e,o,r,i){if(e){var l=e(n,t);if(typeof l<"u")return!!l}if(n===t)return n!==0||1/n==1/t;var s=typeof n,d=typeof t;if(n===n&&!(n&&q[s])&&!(t&&q[d]))return!1;if(n==null||t==null)return n===t;var b=G.call(n),p=G.call(t);if(b==nn&&(b=v),p==nn&&(p=v),b!=p)return!1;switch(b){case fn:case h:return+n==+t;case m:return n!=+n?t!=+t:n==0?1/n==1/t:n==+t;case k:case P:return n==xn(t)}var x=b==tn;if(!x){var u=$.call(n,"__wrapped__"),N=$.call(t,"__wrapped__");if(u||N)return On(u?n.__wrapped__:n,N?t.__wrapped__:t,e,o,r,i);if(b!=v)return!1;var D=n.constructor,Z=t.constructor;if(D!=Z&&!(W(D)&&D instanceof D&&W(Z)&&Z instanceof Z)&&"constructor"in n&&"constructor"in t)return!1}var on=!r;r||(r=cn()),i||(i=cn());for(var V=r.length;V--;)if(r[V]==n)return i[V]==t;var L=0;if(l=!0,r.push(n),i.push(t),x){if(V=n.length,L=t.length,l=L==V,l||o)for(;L--;){var bt=V,Vn=t[L];if(o)for(;bt--&&!(l=On(n[bt],Vn,e,o,r,i)););else if(!(l=On(n[L],Vn,e,o,r,i)))break}}else un(t,function(Jn,Xn,Ht){if($.call(Ht,Xn))return L++,l=$.call(n,Xn)&&On(n[Xn],Jn,e,o,r,i)}),l&&!o&&un(n,function(Jn,Xn,Ht){if($.call(Ht,Xn))return l=--L>-1});return r.pop(),i.pop(),on&&(ln(r),ln(i)),l}function ne(n,t,e,o,r){(B(t)?A:F)(t,function(i,l){var s,d,b=i,p=n[l];if(i&&((d=B(i))||Dt(i))){for(var x=o.length;x--;)if(s=o[x]==i){p=r[x];break}if(!s){var u;e&&(b=e(p,i),(u=typeof b<"u")&&(p=b)),u||(p=d?B(p)?p:[]:Dt(p)?p:{}),o.push(i),r.push(p),u||ne(p,i,e,o,r)}}else e&&(b=e(p,i),typeof b>"u"&&(b=i)),typeof b<"u"&&(p=b);n[l]=p})}function Et(n,t){return n+Ae(Qt()*(t-n+1))}function Rt(n,t,e){var o=-1,r=at(),i=n?n.length:0,l=[],s=!t&&i>=mn&&r===pn,d=e||s?cn():l;if(s){var b=zt(d);r=En,d=b}for(;++o<i;){var p=n[o],x=e?e(p,o,n):p;(t?!o||d[d.length-1]!==x:r(d,x)<0)&&((e||s)&&d.push(x),l.push(p))}return s?(ln(d.array),Mn(d)):e&&ln(d),l}function qt(n){return function(t,e,o){var r={};e=a.createCallback(e,o,3);var i=-1,l=t?t.length:0;if(typeof l=="number")for(;++i<l;){var s=t[i];n(r,s,e(s,i,t),t)}else F(t,function(d,b,p){n(r,d,e(d,b,p),p)});return r}}function bn(n,t,e,o,r,i){var l=t&1,s=t&2,d=t&4,b=t&8,p=t&16,x=t&32;if(!s&&!W(n))throw new gn;p&&!e.length&&(t&=-17,p=e=!1),x&&!o.length&&(t&=-33,x=o=!1);var u=n&&n.__bindData__;if(u&&u!==!0)return u=O(u),u[2]&&(u[2]=O(u[2])),u[3]&&(u[3]=O(u[3])),l&&!(u[1]&1)&&(u[4]=r),!l&&u[1]&1&&(t|=8),d&&!(u[1]&4)&&(u[5]=i),p&&Wn.apply(u[2]||(u[2]=[]),e),x&&Je.apply(u[3]||(u[3]=[]),o),u[1]|=t,bn.apply(null,u);var N=t==1||t===17?Ze:Zt;return N([n,t,e,o,r,i])}function no(n){return It[n]}function at(){var n=(n=a.indexOf)===be?pn:n;return n}function wn(n){return typeof n=="function"&&Ke.test(n)}var Ot=Xt?function(n,t){j.value=t,Xt(n,"__bindData__",j),j.value=null}:xe;function te(n){var t,e;return!(n&&G.call(n)==v)||(t=n.constructor,W(t)&&!(t instanceof t))?!1:(un(n,function(o,r){e=r}),typeof e>"u"||$.call(n,e))}function to(n){return ee[n]}function lt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&G.call(n)==nn||!1}var B=Ct||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&G.call(n)==tn||!1},eo=function(n){var t,e=n,o=[];if(!e||!q[typeof n])return o;for(t in e)$.call(e,t)&&o.push(t);return o},K=it?function(n){return Y(n)?it(n):[]}:eo,It={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ee=re(It),oo=Un("("+K(ee).join("|")+")","g"),ro=Un("["+K(It).join("")+"]","g"),st=function(n,t,e){var o,r=n,i=r;if(!r)return i;var l=arguments,s=0,d=typeof e=="number"?2:l.length;if(d>3&&typeof l[d-2]=="function")var b=Q(l[--d-1],l[d--],2);else d>2&&typeof l[d-1]=="function"&&(b=l[--d]);for(;++s<d;)if(r=l[s],r&&q[typeof r])for(var p=-1,x=q[typeof r]&&K(r),u=x?x.length:0;++p<u;)o=x[p],i[o]=b?b(i[o],r[o]):r[o];return i};function io(n,t,e,o){return typeof t!="boolean"&&t!=null&&(o=e,e=t,t=!1),St(n,t,typeof e=="function"&&Q(e,o,1))}function ao(n,t,e){return St(n,!0,typeof t=="function"&&Q(t,e,1))}function lo(n,t){var e=Gn(n);return t?st(e,t):e}var Nt=function(n,t,e){var o,r=n,i=r;if(!r)return i;for(var l=arguments,s=0,d=typeof e=="number"?2:l.length;++s<d;)if(r=l[s],r&&q[typeof r])for(var b=-1,p=q[typeof r]&&K(r),x=p?p.length:0;++b<x;)o=p[b],typeof i[o]>"u"&&(i[o]=r[o]);return i};function so(n,t,e){var o;return t=a.createCallback(t,e,3),F(n,function(r,i,l){if(t(r,i,l))return o=i,!1}),o}function po(n,t,e){var o;return t=a.createCallback(t,e,3),oe(n,function(r,i,l){if(t(r,i,l))return o=i,!1}),o}var un=function(n,t,e){var o,r=n,i=r;if(!r||!q[typeof r])return i;t=t&&typeof e>"u"?t:Q(t,e,3);for(o in r)if(t(r[o],o,n)===!1)return i;return i};function co(n,t,e){var o=[];un(n,function(i,l){o.push(l,i)});var r=o.length;for(t=Q(t,e,3);r--&&t(o[r--],o[r],n)!==!1;);return n}var F=function(n,t,e){var o,r=n,i=r;if(!r||!q[typeof r])return i;t=t&&typeof e>"u"?t:Q(t,e,3);for(var l=-1,s=q[typeof r]&&K(r),d=s?s.length:0;++l<d;)if(o=s[l],t(r[o],o,n)===!1)return i;return i};function oe(n,t,e){var o=K(n),r=o.length;for(t=Q(t,e,3);r--;){var i=o[r];if(t(n[i],i,n)===!1)break}return n}function Kn(n){var t=[];return un(n,function(e,o){W(e)&&t.push(o)}),t.sort()}function bo(n,t){return n?$.call(n,t):!1}function re(n){for(var t=-1,e=K(n),o=e.length,r={};++t<o;){var i=e[t];r[n[i]]=i}return r}function fo(n){return n===!0||n===!1||n&&typeof n=="object"&&G.call(n)==fn||!1}function go(n){return n&&typeof n=="object"&&G.call(n)==h||!1}function ho(n){return n&&n.nodeType===1||!1}function uo(n){var t=!0;if(!n)return t;var e=G.call(n),o=n.length;return e==tn||e==P||e==nn||e==v&&typeof o=="number"&&W(n.splice)?!o:(F(n,function(){return t=!1}),t)}function mo(n,t,e,o){return On(n,t,typeof e=="function"&&Q(e,o,2))}function vo(n){return Xe(n)&&!Qe(parseFloat(n))}function W(n){return typeof n=="function"}function Y(n){return!!(n&&q[typeof n])}function xo(n){return ie(n)&&n!=+n}function yo(n){return n===null}function ie(n){return typeof n=="number"||n&&typeof n=="object"&&G.call(n)==m||!1}var Dt=qn?function(n){if(!(n&&G.call(n)==v))return!1;var t=n.valueOf,e=wn(t)&&(e=qn(t))&&qn(e);return e?n==e||qn(n)==e:te(n)}:te;function wo(n){return n&&typeof n=="object"&&G.call(n)==k||!1}function Yn(n){return typeof n=="string"||n&&typeof n=="object"&&G.call(n)==P||!1}function ko(n){return typeof n>"u"}function zo(n,t,e){var o={};return t=a.createCallback(t,e,3),F(n,function(r,i,l){o[i]=t(r,i,l)}),o}function _o(n){var t=arguments,e=2;if(!Y(n))return n;if(typeof t[2]!="number"&&(e=t.length),e>3&&typeof t[e-2]=="function")var o=Q(t[--e-1],t[e--],2);else e>2&&typeof t[e-1]=="function"&&(o=t[--e]);for(var r=O(arguments,1,e),i=-1,l=cn(),s=cn();++i<e;)ne(n,r[i],o,l,s);return ln(l),ln(s),n}function jo(n,t,e){var o={};if(typeof t!="function"){var r=[];un(n,function(d,b){r.push(b)}),r=$n(r,yn(arguments,!0,!1,1));for(var i=-1,l=r.length;++i<l;){var s=r[i];o[s]=n[s]}}else t=a.createCallback(t,e,3),un(n,function(d,b,p){t(d,b,p)||(o[b]=d)});return o}function Co(n){for(var t=-1,e=K(n),o=e.length,r=z(o);++t<o;){var i=e[t];r[t]=[i,n[i]]}return r}function To(n,t,e){var o={};if(typeof t!="function")for(var r=-1,i=yn(arguments,!0,!1,1),l=Y(n)?i.length:0;++r<l;){var s=i[r];s in n&&(o[s]=n[s])}else t=a.createCallback(t,e,3),un(n,function(d,b,p){t(d,b,p)&&(o[b]=d)});return o}function So(n,t,e,o){var r=B(n);if(e==null)if(r)e=[];else{var i=n&&n.constructor,l=i&&i.prototype;e=Gn(l)}return t&&(t=a.createCallback(t,o,4),(r?A:F)(n,function(s,d,b){return t(e,s,d,b)})),e}function dt(n){for(var t=-1,e=K(n),o=e.length,r=z(o);++t<o;)r[t]=n[e[t]];return r}function Eo(n){for(var t=arguments,e=-1,o=yn(t,!0,!1,1),r=t[2]&&t[2][t[1]]===n?1:o.length,i=z(r);++e<r;)i[e]=n[o[e]];return i}function ae(n,t,e){var o=-1,r=at(),i=n?n.length:0,l=!1;return e=(e<0?sn(0,i+e):e)||0,B(n)?l=r(n,t,e)>-1:typeof i=="number"?l=(Yn(n)?n.indexOf(t,e):r(n,t,e))>-1:F(n,function(s){if(++o>=e)return!(l=s===t)}),l}var Ro=qt(function(n,t,e){$.call(n,e)?n[e]++:n[e]=1});function le(n,t,e){var o=!0;t=a.createCallback(t,e,3);var r=-1,i=n?n.length:0;if(typeof i=="number")for(;++r<i&&(o=!!t(n[r],r,n)););else F(n,function(l,s,d){return o=!!t(l,s,d)});return o}function pt(n,t,e){var o=[];t=a.createCallback(t,e,3);var r=-1,i=n?n.length:0;if(typeof i=="number")for(;++r<i;){var l=n[r];t(l,r,n)&&o.push(l)}else F(n,function(s,d,b){t(s,d,b)&&o.push(s)});return o}function Pt(n,t,e){t=a.createCallback(t,e,3);var o=-1,r=n?n.length:0;if(typeof r=="number")for(;++o<r;){var i=n[o];if(t(i,o,n))return i}else{var l;return F(n,function(s,d,b){if(t(s,d,b))return l=s,!1}),l}}function qo(n,t,e){var o;return t=a.createCallback(t,e,3),ct(n,function(r,i,l){if(t(r,i,l))return o=r,!1}),o}function A(n,t,e){var o=-1,r=n?n.length:0;if(t=t&&typeof e>"u"?t:Q(t,e,3),typeof r=="number")for(;++o<r&&t(n[o],o,n)!==!1;);else F(n,t);return n}function ct(n,t,e){var o=n?n.length:0;if(t=t&&typeof e>"u"?t:Q(t,e,3),typeof o=="number")for(;o--&&t(n[o],o,n)!==!1;);else{var r=K(n);o=r.length,F(n,function(i,l,s){return l=r?r[--o]:--o,t(s[l],l,s)})}return n}var Oo=qt(function(n,t,e){($.call(n,e)?n[e]:n[e]=[]).push(t)}),Io=qt(function(n,t,e){n[e]=t});function No(n,t){var e=O(arguments,2),o=-1,r=typeof t=="function",i=n?n.length:0,l=z(typeof i=="number"?i:0);return A(n,function(s){l[++o]=(r?t:s[t]).apply(s,e)}),l}function An(n,t,e){var o=-1,r=n?n.length:0;if(t=a.createCallback(t,e,3),typeof r=="number")for(var i=z(r);++o<r;)i[o]=t(n[o],o,n);else i=[],F(n,function(l,s,d){i[++o]=t(l,s,d)});return i}function se(n,t,e){var o=-1/0,r=o;if(typeof t!="function"&&e&&e[t]===n&&(t=null),t==null&&B(n))for(var i=-1,l=n.length;++i<l;){var s=n[i];s>r&&(r=s)}else t=t==null&&Yn(n)?At:a.createCallback(t,e,3),A(n,function(d,b,p){var x=t(d,b,p);x>o&&(o=x,r=d)});return r}function Do(n,t,e){var o=1/0,r=o;if(typeof t!="function"&&e&&e[t]===n&&(t=null),t==null&&B(n))for(var i=-1,l=n.length;++i<l;){var s=n[i];s<r&&(r=s)}else t=t==null&&Yn(n)?At:a.createCallback(t,e,3),A(n,function(d,b,p){var x=t(d,b,p);x<o&&(o=x,r=d)});return r}var Ft=An;function Mt(n,t,e,o){if(!n)return e;var r=arguments.length<3;t=a.createCallback(t,o,4);var i=-1,l=n.length;if(typeof l=="number")for(r&&(e=n[++i]);++i<l;)e=t(e,n[i],i,n);else F(n,function(s,d,b){e=r?(r=!1,s):t(e,s,d,b)});return e}function de(n,t,e,o){var r=arguments.length<3;return t=a.createCallback(t,o,4),ct(n,function(i,l,s){e=r?(r=!1,i):t(e,i,l,s)}),e}function Po(n,t,e){return t=a.createCallback(t,e,3),pt(n,function(o,r,i){return!t(o,r,i)})}function Fo(n,t,e){if(n&&typeof n.length!="number"&&(n=dt(n)),t==null||e)return n?n[Et(0,n.length-1)]:c;var o=pe(n);return o.length=Bn(sn(0,t),o.length),o}function pe(n){var t=-1,e=n?n.length:0,o=z(typeof e=="number"?e:0);return A(n,function(r){var i=Et(0,++t);o[t]=o[i],o[i]=r}),o}function Mo(n){var t=n?n.length:0;return typeof t=="number"?t:K(n).length}function ce(n,t,e){var o;t=a.createCallback(t,e,3);var r=-1,i=n?n.length:0;if(typeof i=="number")for(;++r<i&&!(o=t(n[r],r,n)););else F(n,function(l,s,d){return!(o=t(l,s,d))});return!!o}function Uo(n,t,e){var o=-1,r=B(t),i=n?n.length:0,l=z(typeof i=="number"?i:0);for(r||(t=a.createCallback(t,e,3)),A(n,function(d,b,p){var x=l[++o]=_t();r?x.criteria=An(t,function(u){return d[u]}):(x.criteria=cn())[0]=t(d,b,p),x.index=o,x.value=d}),i=l.length,l.sort(He);i--;){var s=l[i];l[i]=s.value,r||ln(s.criteria),Mn(s)}return l}function Wo(n){return n&&typeof n.length=="number"?O(n):dt(n)}var Lo=pt;function Bo(n){for(var t=-1,e=n?n.length:0,o=[];++t<e;){var r=n[t];r&&o.push(r)}return o}function Ho(n){return $n(n,yn(arguments,!0,!0,1))}function Go(n,t,e){var o=-1,r=n?n.length:0;for(t=a.createCallback(t,e,3);++o<r;)if(t(n[o],o,n))return o;return-1}function $o(n,t,e){var o=n?n.length:0;for(t=a.createCallback(t,e,3);o--;)if(t(n[o],o,n))return o;return-1}function Ut(n,t,e){var o=0,r=n?n.length:0;if(typeof t!="number"&&t!=null){var i=-1;for(t=a.createCallback(t,e,3);++i<r&&t(n[i],i,n);)o++}else if(o=t,o==null||e)return n?n[0]:c;return O(n,0,Bn(sn(0,o),r))}function Ko(n,t,e,o){return typeof t!="boolean"&&t!=null&&(o=e,e=typeof t!="function"&&o&&o[t]===n?null:t,t=!1),e!=null&&(n=An(n,e,o)),yn(n,t)}function be(n,t,e){if(typeof e=="number"){var o=n?n.length:0;e=e<0?sn(0,o+e):e||0}else if(e){var r=fe(n,t);return n[r]===t?r:-1}return pn(n,t,e)}function Yo(n,t,e){var o=0,r=n?n.length:0;if(typeof t!="number"&&t!=null){var i=r;for(t=a.createCallback(t,e,3);i--&&t(n[i],i,n);)o++}else o=t==null||e?1:t||o;return O(n,0,Bn(sn(0,r-o),r))}function Ao(){for(var n=[],t=-1,e=arguments.length,o=cn(),r=at(),i=r===pn,l=cn();++t<e;){var s=arguments[t];(B(s)||lt(s))&&(n.push(s),o.push(i&&s.length>=mn&&zt(t?n[t]:l)))}var d=n[0],b=-1,p=d?d.length:0,x=[];n:for(;++b<p;){var u=o[0];if(s=d[b],(u?En(u,s):r(l,s))<0){for(t=e,(u||l).push(s);--t;)if(u=o[t],(u?En(u,s):r(n[t],s))<0)continue n;x.push(s)}}for(;e--;)u=o[e],u&&Mn(u);return ln(o),ln(l),x}function Vo(n,t,e){var o=0,r=n?n.length:0;if(typeof t!="number"&&t!=null){var i=r;for(t=a.createCallback(t,e,3);i--&&t(n[i],i,n);)o++}else if(o=t,o==null||e)return n?n[r-1]:c;return O(n,sn(0,r-o))}function Jo(n,t,e){var o=n?n.length:0;for(typeof e=="number"&&(o=(e<0?sn(0,o+e):Bn(e,o-1))+1);o--;)if(n[o]===t)return o;return-1}function Xo(n){for(var t=arguments,e=0,o=t.length,r=n?n.length:0;++e<o;)for(var i=-1,l=t[e];++i<r;)n[i]===l&&(Jt.call(n,i--,1),r--);return n}function Qo(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,t==null&&(t=n,n=0);for(var o=-1,r=sn(0,Ye((t-n)/(e||1))),i=z(r);++o<r;)i[o]=n,n+=e;return i}function Zo(n,t,e){var o=-1,r=n?n.length:0,i=[];for(t=a.createCallback(t,e,3);++o<r;){var l=n[o];t(l,o,n)&&(i.push(l),Jt.call(n,o--,1),r--)}return i}function Wt(n,t,e){if(typeof t!="number"&&t!=null){var o=0,r=-1,i=n?n.length:0;for(t=a.createCallback(t,e,3);++r<i&&t(n[r],r,n);)o++}else o=t==null||e?1:sn(0,t);return O(n,o)}function fe(n,t,e,o){var r=0,i=n?n.length:r;for(e=e?a.createCallback(e,o,1):Lt,t=e(t);r<i;){var l=r+i>>>1;e(n[l])<t?r=l+1:i=l}return r}function nr(){return Rt(yn(arguments,!0,!0))}function ge(n,t,e,o){return typeof t!="boolean"&&t!=null&&(o=e,e=typeof t!="function"&&o&&o[t]===n?null:t,t=!1),e!=null&&(e=a.createCallback(e,o,3)),Rt(n,t,e)}function tr(n){return $n(n,O(arguments,1))}function er(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(B(e)||lt(e))var o=o?Rt($n(o,e).concat($n(e,o))):e}return o||[]}function he(){for(var n=arguments.length>1?arguments:arguments[0],t=-1,e=n?se(Ft(n,"length")):0,o=z(e<0?0:e);++t<e;)o[t]=Ft(n,t);return o}function ue(n,t){var e=-1,o=n?n.length:0,r={};for(!t&&o&&!B(n[0])&&(t=[]);++e<o;){var i=n[e];t?r[i]=t[e]:i&&(r[i[0]]=i[1])}return r}function or(n,t){if(!W(t))throw new gn;return function(){if(--n<1)return t.apply(this,arguments)}}function me(n,t){return arguments.length>2?bn(n,17,O(arguments,2),null,t):bn(n,1,null,null,t)}function rr(n){for(var t=arguments.length>1?yn(arguments,!0,!1,1):Kn(n),e=-1,o=t.length;++e<o;){var r=t[e];n[r]=bn(n[r],1,null,null,n)}return n}function ir(n,t){return arguments.length>2?bn(t,19,O(arguments,2),null,n):bn(t,3,null,null,n)}function ar(){for(var n=arguments,t=n.length;t--;)if(!W(n[t]))throw new gn;return function(){for(var e=arguments,o=n.length;o--;)e=[n[o].apply(this,e)];return e[0]}}function lr(n,t){return t=typeof t=="number"?t:+t||n.length,bn(n,4,null,null,null,t)}function ve(n,t,e){var o,r,i,l,s,d,b,p=0,x=!1,u=!0;if(!W(n))throw new gn;if(t=sn(0,t)||0,e===!0){var N=!0;u=!1}else Y(e)&&(N=e.leading,x="maxWait"in e&&(sn(t,e.maxWait)||0),u="trailing"in e?e.trailing:u);var D=function(){var on=t-(jn()-l);if(on<=0){r&&ot(r);var V=b;r=d=b=c,V&&(p=jn(),i=n.apply(s,o),!d&&!r&&(o=s=null))}else d=Ln(D,on)},Z=function(){d&&ot(d),r=d=b=c,(u||x!==t)&&(p=jn(),i=n.apply(s,o),!d&&!r&&(o=s=null))};return function(){if(o=arguments,l=jn(),s=this,b=u&&(d||!N),x===!1)var on=N&&!d;else{!r&&!N&&(p=l);var V=x-(l-p),L=V<=0;L?(r&&(r=ot(r)),p=l,i=n.apply(s,o)):r||(r=Ln(Z,V))}return L&&d?d=ot(d):!d&&t!==x&&(d=Ln(D,t)),on&&(L=!0,i=n.apply(s,o)),L&&!d&&!r&&(o=s=null),i}}function sr(n){if(!W(n))throw new gn;var t=O(arguments,1);return Ln(function(){n.apply(c,t)},1)}function dr(n,t){if(!W(n))throw new gn;var e=O(arguments,2);return Ln(function(){n.apply(c,e)},t)}function pr(n,t){if(!W(n))throw new gn;var e=function(){var o=e.cache,r=t?t.apply(this,arguments):J+arguments[0];return $.call(o,r)?o[r]:o[r]=n.apply(this,arguments)};return e.cache={},e}function cr(n){var t,e;if(!W(n))throw new gn;return function(){return t||(t=!0,e=n.apply(this,arguments),n=null),e}}function br(n){return bn(n,16,O(arguments,1))}function fr(n){return bn(n,32,null,O(arguments,1))}function gr(n,t,e){var o=!0,r=!0;if(!W(n))throw new gn;return e===!1?o=!1:Y(e)&&(o="leading"in e?e.leading:o,r="trailing"in e?e.trailing:r),T.leading=o,T.maxWait=t,T.trailing=r,ve(n,t,T)}function hr(n,t){return bn(t,16,[n])}function ur(n){return function(){return n}}function mr(n,t,e){var o=typeof n;if(n==null||o=="function")return Q(n,t,e);if(o!="object")return ye(n);var r=K(n),i=r[0],l=n[i];return r.length==1&&l===l&&!Y(l)?function(s){var d=s[i];return l===d&&(l!==0||1/l==1/d)}:function(s){for(var d=r.length,b=!1;d--&&(b=On(s[r[d]],n[r[d]],null,!0)););return b}}function vr(n){return n==null?"":xn(n).replace(ro,no)}function Lt(n){return n}function Bt(n,t,e){var o=!0,r=t&&Kn(t);(!t||!e&&!r.length)&&(e==null&&(e=t),i=_n,t=n,n=a,r=Kn(t)),e===!1?o=!1:Y(e)&&"chain"in e&&(o=e.chain);var i=n,l=W(i);A(r,function(s){var d=n[s]=t[s];l&&(i.prototype[s]=function(){var b=this.__chain__,p=this.__wrapped__,x=[p];Wn.apply(x,arguments);var u=d.apply(n,x);if(o||b){if(p===u&&Y(u))return this;u=new i(u),u.__chain__=b}return u})})}function xr(){return f._=$e,this}function xe(){}var jn=wn(jn=E.now)&&jn||function(){return new E().getTime()},yr=Tt(kn+"08")==8?Tt:function(n,t){return Tt(Yn(n)?n.replace(yt,""):n,t||0)};function ye(n){return function(t){return t[n]}}function wr(n,t,e){var o=n==null,r=t==null;if(e==null&&(typeof n=="boolean"&&r?(e=n,n=1):!r&&typeof t=="boolean"&&(e=t,r=!0)),o&&r&&(t=1),n=+n||0,r?(t=n,n=0):t=+t||0,e||n%1||t%1){var i=Qt();return Bn(n+i*(t-n+parseFloat("1e-"+((i+"").length-1))),t)}return Et(n,t)}function kr(n,t){if(n){var e=n[t];return W(e)?n[t]():e}}function zr(n,t,e){var o=a.templateSettings;n=xn(n||""),e=Nt({},e,o);var r=Nt({},e.imports,o.imports),i=K(r),l=dt(r),s,d=0,b=e.interpolate||Sn,p="__p += '",x=Un((e.escape||Sn).source+"|"+b.source+"|"+(b===Pn?nt:Sn).source+"|"+(e.evaluate||Sn).source+"|$","g");n.replace(x,function(on,V,L,bt,Vn,Jn){return L||(L=bt),p+=n.slice(d,Jn).replace(wt,Ge),V&&(p+=`' +
__e(`+V+`) +
'`),Vn&&(s=!0,p+=`';
`+Vn+`;
__p += '`),L&&(p+=`' +
((__t = (`+L+`)) == null ? '' : __t) +
'`),d=Jn+on.length,on}),p+=`';
`;var u=e.variable,N=u;N||(u="obj",p="with ("+u+`) {
`+p+`
}
`),p=(s?p.replace(Dn,""):p).replace(mt,"$1").replace(vt,"$1;"),p="function("+u+`) {
`+(N?"":u+" || ("+u+` = {});
`)+"var __t, __p = '', __e = _.escape"+(s?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+p+`return __p
}`;var D=`
/*
//# sourceURL=`+(e.sourceURL||"/lodash/template/source["+zn+++"]")+`
*/`;try{var Z=I(i,"return "+p+D).apply(c,l)}catch(on){throw on.source=p,on}return t?Z(t):(Z.source=p,Z)}function _r(n,t,e){n=(n=+n)>-1?n:0;var o=-1,r=z(n);for(t=Q(t,e,1);++o<n;)r[o]=t(o);return r}function jr(n){return n==null?"":xn(n).replace(oo,to)}function Cr(n){var t=++w;return xn(n??"")+t}function Tr(n){return n=new _n(n),n.__chain__=!0,n}function Sr(n,t){return t(n),n}function Er(){return this.__chain__=!0,this}function Rr(){return xn(this.__wrapped__)}function we(){return this.__wrapped__}return a.after=or,a.assign=st,a.at=Eo,a.bind=me,a.bindAll=rr,a.bindKey=ir,a.chain=Tr,a.compact=Bo,a.compose=ar,a.constant=ur,a.countBy=Ro,a.create=lo,a.createCallback=mr,a.curry=lr,a.debounce=ve,a.defaults=Nt,a.defer=sr,a.delay=dr,a.difference=Ho,a.filter=pt,a.flatten=Ko,a.forEach=A,a.forEachRight=ct,a.forIn=un,a.forInRight=co,a.forOwn=F,a.forOwnRight=oe,a.functions=Kn,a.groupBy=Oo,a.indexBy=Io,a.initial=Yo,a.intersection=Ao,a.invert=re,a.invoke=No,a.keys=K,a.map=An,a.mapValues=zo,a.max=se,a.memoize=pr,a.merge=_o,a.min=Do,a.omit=jo,a.once=cr,a.pairs=Co,a.partial=br,a.partialRight=fr,a.pick=To,a.pluck=Ft,a.property=ye,a.pull=Xo,a.range=Qo,a.reject=Po,a.remove=Zo,a.rest=Wt,a.shuffle=pe,a.sortBy=Uo,a.tap=Sr,a.throttle=gr,a.times=_r,a.toArray=Wo,a.transform=So,a.union=nr,a.uniq=ge,a.values=dt,a.where=Lo,a.without=tr,a.wrap=hr,a.xor=er,a.zip=he,a.zipObject=ue,a.collect=An,a.drop=Wt,a.each=A,a.eachRight=ct,a.extend=st,a.methods=Kn,a.object=ue,a.select=pt,a.tail=Wt,a.unique=ge,a.unzip=he,Bt(a),a.clone=io,a.cloneDeep=ao,a.contains=ae,a.escape=vr,a.every=le,a.find=Pt,a.findIndex=Go,a.findKey=so,a.findLast=qo,a.findLastIndex=$o,a.findLastKey=po,a.has=bo,a.identity=Lt,a.indexOf=be,a.isArguments=lt,a.isArray=B,a.isBoolean=fo,a.isDate=go,a.isElement=ho,a.isEmpty=uo,a.isEqual=mo,a.isFinite=vo,a.isFunction=W,a.isNaN=xo,a.isNull=yo,a.isNumber=ie,a.isObject=Y,a.isPlainObject=Dt,a.isRegExp=wo,a.isString=Yn,a.isUndefined=ko,a.lastIndexOf=Jo,a.mixin=Bt,a.noConflict=xr,a.noop=xe,a.now=jn,a.parseInt=yr,a.random=wr,a.reduce=Mt,a.reduceRight=de,a.result=kr,a.runInContext=jt,a.size=Mo,a.some=ce,a.sortedIndex=fe,a.template=zr,a.unescape=jr,a.uniqueId=Cr,a.all=le,a.any=ce,a.detect=Pt,a.findWhere=Pt,a.foldl=Mt,a.foldr=de,a.include=ae,a.inject=Mt,Bt((function(){var n={};return F(a,function(t,e){a.prototype[e]||(n[e]=t)}),n})(),!1),a.first=Ut,a.last=Vo,a.sample=Fo,a.take=Ut,a.head=Ut,F(a,function(n,t){var e=t!=="sample";a.prototype[t]||(a.prototype[t]=function(o,r){var i=this.__chain__,l=n(this.__wrapped__,o,r);return!i&&(o==null||r&&!(e&&typeof o=="function"))?l:new _n(l,i)})}),a.VERSION="2.4.2",a.prototype.chain=Er,a.prototype.toString=Rr,a.prototype.value=we,a.prototype.valueOf=we,A(["join","pop","shift"],function(n){var t=Rn[n];a.prototype[n]=function(){var e=this.__chain__,o=t.apply(this.__wrapped__,arguments);return e?new _n(o,e):o}}),A(["push","reverse","sort","unshift"],function(n){var t=Rn[n];a.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),A(["concat","slice","splice"],function(n){var t=Rn[n];a.prototype[n]=function(){return new _n(t.apply(this.__wrapped__,arguments),this.__chain__)}}),a}var vn=jt();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(S._=vn,define(function(){return vn})):M&&an?Fn?(an.exports=vn)._=vn:M._=vn:S._=vn}).call(Nn)});var Me=Gt(Zn=>{dn();(function(c,y){if(typeof Zn=="object"&&Zn)y(Zn);else{var _={};y(_),typeof define=="function"&&define.amd?define(_):c.Mustache=_}})(Zn,function(c){var y=RegExp.prototype.test;function _(h,g){return y.call(h,g)}var w=/\S/;function J(h){return!_(w,h)}var mn=Object.prototype.toString,Tn=Array.isArray||function(h){return mn.call(h)==="[object Array]"};function kn(h){return typeof h=="function"}function Dn(h){return h.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var mt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function vt(h){return String(h).replace(/[&<>"'\/]/g,function(g){return mt[g]})}function nt(h){if(!Tn(h)||h.length!==2)throw new Error("Invalid tags: "+h);return[new RegExp(Dn(h[0])+"\\s*"),new RegExp("\\s*"+Dn(h[1]))]}var xt=/\s*/,tt=/\s+/,Pn=/\s*=/,yt=/\s*\}/,Sn=/#|\^|\/|>|\{|&|=|!/;function et(h,g){g=g||c.tags,h=h||"",typeof g=="string"&&(g=g.split(tt));var m=nt(g),v=new zn(h),k=[],P=[],R=[],T=!1,j=!1;function q(){if(T&&!j)for(;R.length;)delete P[R.pop()];else R=[];T=!1,j=!1}for(var rn,S,M,an,Fn,H;!v.eos();){if(rn=v.pos,M=v.scanUntil(m[0]),M)for(var pn=0,En=M.length;pn<En;++pn)an=M.charAt(pn),J(an)?R.push(P.length):j=!0,P.push(["text",an,rn,rn+1]),rn+=1,an===`
`&&q();if(!v.scan(m[0]))break;if(T=!0,S=v.scan(Sn)||"name",v.scan(xt),S==="="?(M=v.scanUntil(Pn),v.scan(Pn),v.scanUntil(m[1])):S==="{"?(M=v.scanUntil(new RegExp("\\s*"+Dn("}"+g[1]))),v.scan(yt),v.scanUntil(m[1]),S="&"):M=v.scanUntil(m[1]),!v.scan(m[1]))throw new Error("Unclosed tag at "+v.pos);if(Fn=[S,M,rn,v.pos],P.push(Fn),S==="#"||S==="^")k.push(Fn);else if(S==="/"){if(H=k.pop(),!H)throw new Error('Unopened section "'+M+'" at '+rn);if(H[1]!==M)throw new Error('Unclosed section "'+H[1]+'" at '+rn)}else S==="name"||S==="{"||S==="&"?j=!0:S==="="&&(m=nt(g=M.split(tt)))}if(H=k.pop(),H)throw new Error('Unclosed section "'+H[1]+'" at '+v.pos);return kt(wt(P))}function wt(h){for(var g=[],m,v,k=0,P=h.length;k<P;++k)m=h[k],m&&(m[0]==="text"&&v&&v[0]==="text"?(v[1]+=m[1],v[3]=m[3]):(g.push(m),v=m));return g}function kt(h){for(var g=[],m=g,v=[],k,P,R=0,T=h.length;R<T;++R)switch(k=h[R],k[0]){case"#":case"^":m.push(k),v.push(k),m=k[4]=[];break;case"/":P=v.pop(),P[5]=k[2],m=v.length>0?v[v.length-1][4]:g;break;default:m.push(k)}return g}function zn(h){this.string=h,this.tail=h,this.pos=0}zn.prototype.eos=function(){return this.tail===""},zn.prototype.scan=function(h){var g=this.tail.match(h);if(g&&g.index===0){var m=g[0];return this.tail=this.tail.substring(m.length),this.pos+=m.length,m}return""},zn.prototype.scanUntil=function(h){var g=this.tail.search(h),m;switch(g){case-1:m=this.tail,this.tail="";break;case 0:m="";break;default:m=this.tail.substring(0,g),this.tail=this.tail.substring(g)}return this.pos+=m.length,m};function nn(h,g){this.view=h??{},this.cache={".":this.view},this.parent=g}nn.prototype.push=function(h){return new nn(h,this)},nn.prototype.lookup=function(h){var g;if(h in this.cache)g=this.cache[h];else{for(var m=this;m;){if(h.indexOf(".")>0){g=m.view;for(var v=h.split("."),k=0;g!=null&&k<v.length;)g=g[v[k++]]}else g=m.view[h];if(g!=null)break;m=m.parent}this.cache[h]=g}return kn(g)&&(g=g.call(this.view)),g};function tn(){this.cache={}}tn.prototype.clearCache=function(){this.cache={}},tn.prototype.parse=function(h,g){var m=this.cache,v=m[h];return v==null&&(v=m[h]=et(h,g)),v},tn.prototype.render=function(h,g,m){var v=this.parse(h),k=g instanceof nn?g:new nn(g);return this.renderTokens(v,k,m,h)},tn.prototype.renderTokens=function(h,g,m,v){var k="",P=this;function R(an){return P.render(an,g,m)}for(var T,j,q=0,rn=h.length;q<rn;++q)switch(T=h[q],T[0]){case"#":if(j=g.lookup(T[1]),!j)continue;if(Tn(j))for(var S=0,M=j.length;S<M;++S)k+=this.renderTokens(T[4],g.push(j[S]),m,v);else if(typeof j=="object"||typeof j=="string")k+=this.renderTokens(T[4],g.push(j),m,v);else if(kn(j)){if(typeof v!="string")throw new Error("Cannot use higher-order sections without the original template");j=j.call(g.view,v.slice(T[3],T[5]),R),j!=null&&(k+=j)}else k+=this.renderTokens(T[4],g,m,v);break;case"^":j=g.lookup(T[1]),(!j||Tn(j)&&j.length===0)&&(k+=this.renderTokens(T[4],g,m,v));break;case">":if(!m)continue;j=kn(m)?m(T[1]):m[T[1]],j!=null&&(k+=this.renderTokens(this.parse(j),g,m,j));break;case"&":j=g.lookup(T[1]),j!=null&&(k+=j);break;case"name":j=g.lookup(T[1]),j!=null&&(k+=c.escape(j));break;case"text":k+=T[1];break}return k},c.name="mustache.js",c.version="0.8.1",c.tags=["{{","}}"];var fn=new tn;c.clearCache=function(){return fn.clearCache()},c.parse=function(h,g){return fn.parse(h,g)},c.render=function(h,g,m){return fn.render(h,g,m)},c.to_html=function(h,g,m,v){var k=c.render(h,g,m);if(kn(v))v(k);else return k},c.escape=vt,c.Scanner=zn,c.Context=nn,c.Writer=tn})});var We=Gt((Xr,Ue)=>{dn();var Wr=(Pe(),Mr(De)),ut=Fe(),Lr=Me(),Br=!1;function Hr(c){ut.each(c.work,function(w){w.startDateYear=w.startDate.substr(0,4),w.endDate?w.endDateYear=w.endDate.substr(0,4):w.endDateYear="Present"}),ut.each(c.education,function(w){w.startDate?(w.startDateYear=w.startDate.substr(0,4),w.endDate?w.endDateYear=w.endDate.substr(0,4):w.endDateYear="Present"):w.endDateYear=w.endDate.substr(0,4)}),c.linkedInterests=[],ut.each(c.interests,function(w){c.linkedInterests.push({name:w.name,interestWebsiteName:w.keywords[0]||"",interestWebsiteUrl:w.keywords[1]||""})}),c.basics&&c.basics.email&&Br&&(c.basics.gravatar=gravatar.url(c.basics.email,{s:"100",r:"pg",d:"mm"})),c.profiles={},ut.each(c.basics.profiles,function(w){c.profiles[w.network]=w.username}),console.log(c.profiles);var y=Wr.readFileSync("//resume.template","utf8"),_=Lr.render(y,c);return _}Ue.exports={render:Hr}});dn();var Cn=Fr(We(),1),Le=Cn.default??Cn,Zr=Le.render??Cn.render,ni=Le.pdfRenderOptions??Cn.pdfRenderOptions;export{ni as pdfRenderOptions,Zr as render};
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
