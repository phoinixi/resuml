var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var hl=Object.create;var Pr=Object.defineProperty;var bl=Object.getOwnPropertyDescriptor;var ml=Object.getOwnPropertyNames;var vl=Object.getPrototypeOf,kl=Object.prototype.hasOwnProperty;var aa=(a=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(a,{get:(n,u)=>(typeof require<"u"?require:n)[u]}):a)(function(a){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+a+'" is not supported')});var ua=(a,n)=>()=>(a&&(n=a(a=0)),n);var W=(a,n)=>()=>(n||a((n={exports:{}}).exports,n),n.exports),xl=(a,n)=>{for(var u in n)Pr(a,u,{get:n[u],enumerable:!0})},sa=(a,n,u,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let e of ml(n))!kl.call(a,e)&&e!==u&&Pr(a,e,{get:()=>n[e],enumerable:!(o=bl(n,e))||o.enumerable});return a};var Fl=(a,n,u)=>(u=a!=null?hl(vl(a)):{},sa(n||!a||!a.__esModule?Pr(u,"default",{value:a,enumerable:!0}):u,a)),la=a=>sa(Pr({},"__esModule",{value:!0}),a);var M=ua(()=>{});var ao={};xl(ao,{createReadStream:()=>ka,createWriteStream:()=>xa,default:()=>yl,existsSync:()=>fa,lstatSync:()=>ba,mkdirSync:()=>ha,readFileSync:()=>da,readdirSync:()=>pa,rmdirSync:()=>va,statSync:()=>oo,unlinkSync:()=>ma,writeFileSync:()=>ga});function io(a){return String(a).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function ca(a){var n=io(a);if(Yr[n]!==void 0)return Yr[n];for(var u=Object.keys(Yr),o=0;o<u.length;o++)if(n.endsWith("/"+u[o])||n===u[o])return Yr[u[o]]}function ro(a){var n=io(a);if((n===""||n===".")&&dt["."]!==void 0)return dt["."];if(dt[n]!==void 0)return dt[n];for(var u=Object.keys(dt),o=0;o<u.length;o++)if(n.endsWith("/"+u[o])||n===u[o])return dt[u[o]]}var Yr,dt,da,pa,fa,ga,ha,oo,ba,ma,va,ka,xa,yl,uo=ua(()=>{"use strict";M();Yr={"assets/css/icomoon.css":`body {
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
	font-size: 1em;
	margin: 0;
	padding: 0;
	border: 0;
}
input {
    font-family: sans-serif;
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
.glyph .icon {
    font-size: 32px;
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
	font-size: 16px;
}

@font-face {
    font-family: 'IcoMoon-Free';
    src: url('../IcoMoon-Free.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

.icon {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'IcoMoon-Free' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    
    /* Enable Ligatures ================ */
    letter-spacing: 0;
    -webkit-font-feature-settings: "liga";
    -moz-font-feature-settings: "liga=1";
    -moz-font-feature-settings: "liga";
    -ms-font-feature-settings: "liga" 1;
    -o-font-feature-settings: "liga";
    font-feature-settings: "liga";

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-home:before {
    content: "\\e900";
}
.icon-home2:before {
    content: "\\e901";
}
.icon-home3:before {
    content: "\\e902";
}
.icon-office:before {
    content: "\\e903";
}
.icon-newspaper:before {
    content: "\\e904";
}
.icon-pencil:before {
    content: "\\e905";
}
.icon-pencil2:before {
    content: "\\e906";
}
.icon-quill:before {
    content: "\\e907";
}
.icon-pen:before {
    content: "\\e908";
}
.icon-blog:before {
    content: "\\e909";
}
.icon-eyedropper:before {
    content: "\\e90a";
}
.icon-droplet:before {
    content: "\\e90b";
}
.icon-paint-format:before {
    content: "\\e90c";
}
.icon-image:before {
    content: "\\e90d";
}
.icon-images:before {
    content: "\\e90e";
}
.icon-camera:before {
    content: "\\e90f";
}
.icon-headphones:before {
    content: "\\e910";
}
.icon-music:before {
    content: "\\e911";
}
.icon-play:before {
    content: "\\e912";
}
.icon-film:before {
    content: "\\e913";
}
.icon-video-camera:before {
    content: "\\e914";
}
.icon-dice:before {
    content: "\\e915";
}
.icon-pacman:before {
    content: "\\e916";
}
.icon-spades:before {
    content: "\\e917";
}
.icon-clubs:before {
    content: "\\e918";
}
.icon-diamonds:before {
    content: "\\e919";
}
.icon-bullhorn:before {
    content: "\\e91a";
}
.icon-connection:before {
    content: "\\e91b";
}
.icon-podcast:before {
    content: "\\e91c";
}
.icon-feed:before {
    content: "\\e91d";
}
.icon-mic:before {
    content: "\\e91e";
}
.icon-book:before {
    content: "\\e91f";
}
.icon-books:before {
    content: "\\e920";
}
.icon-library:before {
    content: "\\e921";
}
.icon-file-text:before {
    content: "\\e922";
}
.icon-profile:before {
    content: "\\e923";
}
.icon-file-empty:before {
    content: "\\e924";
}
.icon-files-empty:before {
    content: "\\e925";
}
.icon-file-text2:before {
    content: "\\e926";
}
.icon-file-picture:before {
    content: "\\e927";
}
.icon-file-music:before {
    content: "\\e928";
}
.icon-file-play:before {
    content: "\\e929";
}
.icon-file-video:before {
    content: "\\e92a";
}
.icon-file-zip:before {
    content: "\\e92b";
}
.icon-copy:before {
    content: "\\e92c";
}
.icon-paste:before {
    content: "\\e92d";
}
.icon-stack:before {
    content: "\\e92e";
}
.icon-folder:before {
    content: "\\e92f";
}
.icon-folder-open:before {
    content: "\\e930";
}
.icon-folder-plus:before {
    content: "\\e931";
}
.icon-folder-minus:before {
    content: "\\e932";
}
.icon-folder-download:before {
    content: "\\e933";
}
.icon-folder-upload:before {
    content: "\\e934";
}
.icon-price-tag:before {
    content: "\\e935";
}
.icon-price-tags:before {
    content: "\\e936";
}
.icon-barcode:before {
    content: "\\e937";
}
.icon-qrcode:before {
    content: "\\e938";
}
.icon-ticket:before {
    content: "\\e939";
}
.icon-cart:before {
    content: "\\e93a";
}
.icon-coin-dollar:before {
    content: "\\e93b";
}
.icon-coin-euro:before {
    content: "\\e93c";
}
.icon-coin-pound:before {
    content: "\\e93d";
}
.icon-coin-yen:before {
    content: "\\e93e";
}
.icon-credit-card:before {
    content: "\\e93f";
}
.icon-calculator:before {
    content: "\\e940";
}
.icon-lifebuoy:before {
    content: "\\e941";
}
.icon-phone:before {
    content: "\\e942";
}
.icon-phone-hang-up:before {
    content: "\\e943";
}
.icon-address-book:before {
    content: "\\e944";
}
.icon-envelop:before {
    content: "\\e945";
}
.icon-pushpin:before {
    content: "\\e946";
}
.icon-location:before {
    content: "\\e947";
}
.icon-location2:before {
    content: "\\e948";
}
.icon-compass:before {
    content: "\\e949";
}
.icon-compass2:before {
    content: "\\e94a";
}
.icon-map:before {
    content: "\\e94b";
}
.icon-map2:before {
    content: "\\e94c";
}
.icon-history:before {
    content: "\\e94d";
}
.icon-clock:before {
    content: "\\e94e";
}
.icon-clock2:before {
    content: "\\e94f";
}
.icon-alarm:before {
    content: "\\e950";
}
.icon-bell:before {
    content: "\\e951";
}
.icon-stopwatch:before {
    content: "\\e952";
}
.icon-calendar:before {
    content: "\\e953";
}
.icon-printer:before {
    content: "\\e954";
}
.icon-keyboard:before {
    content: "\\e955";
}
.icon-display:before {
    content: "\\e956";
}
.icon-laptop:before {
    content: "\\e957";
}
.icon-mobile:before {
    content: "\\e958";
}
.icon-mobile2:before {
    content: "\\e959";
}
.icon-tablet:before {
    content: "\\e95a";
}
.icon-tv:before {
    content: "\\e95b";
}
.icon-drawer:before {
    content: "\\e95c";
}
.icon-drawer2:before {
    content: "\\e95d";
}
.icon-box-add:before {
    content: "\\e95e";
}
.icon-box-remove:before {
    content: "\\e95f";
}
.icon-download:before {
    content: "\\e960";
}
.icon-upload:before {
    content: "\\e961";
}
.icon-floppy-disk:before {
    content: "\\e962";
}
.icon-drive:before {
    content: "\\e963";
}
.icon-database:before {
    content: "\\e964";
}
.icon-undo:before {
    content: "\\e965";
}
.icon-redo:before {
    content: "\\e966";
}
.icon-undo2:before {
    content: "\\e967";
}
.icon-redo2:before {
    content: "\\e968";
}
.icon-forward:before {
    content: "\\e969";
}
.icon-reply:before {
    content: "\\e96a";
}
.icon-bubble:before {
    content: "\\e96b";
}
.icon-bubbles:before {
    content: "\\e96c";
}
.icon-bubbles2:before {
    content: "\\e96d";
}
.icon-bubble2:before {
    content: "\\e96e";
}
.icon-bubbles3:before {
    content: "\\e96f";
}
.icon-bubbles4:before {
    content: "\\e970";
}
.icon-user:before {
    content: "\\e971";
}
.icon-users:before {
    content: "\\e972";
}
.icon-user-plus:before {
    content: "\\e973";
}
.icon-user-minus:before {
    content: "\\e974";
}
.icon-user-check:before {
    content: "\\e975";
}
.icon-user-tie:before {
    content: "\\e976";
}
.icon-quotes-left:before {
    content: "\\e977";
}
.icon-quotes-right:before {
    content: "\\e978";
}
.icon-hour-glass:before {
    content: "\\e979";
}
.icon-spinner:before {
    content: "\\e97a";
}
.icon-spinner2:before {
    content: "\\e97b";
}
.icon-spinner3:before {
    content: "\\e97c";
}
.icon-spinner4:before {
    content: "\\e97d";
}
.icon-spinner5:before {
    content: "\\e97e";
}
.icon-spinner6:before {
    content: "\\e97f";
}
.icon-spinner7:before {
    content: "\\e980";
}
.icon-spinner8:before {
    content: "\\e981";
}
.icon-spinner9:before {
    content: "\\e982";
}
.icon-spinner10:before {
    content: "\\e983";
}
.icon-spinner11:before {
    content: "\\e984";
}
.icon-binoculars:before {
    content: "\\e985";
}
.icon-search:before {
    content: "\\e986";
}
.icon-zoom-in:before {
    content: "\\e987";
}
.icon-zoom-out:before {
    content: "\\e988";
}
.icon-enlarge:before {
    content: "\\e989";
}
.icon-shrink:before {
    content: "\\e98a";
}
.icon-enlarge2:before {
    content: "\\e98b";
}
.icon-shrink2:before {
    content: "\\e98c";
}
.icon-key:before {
    content: "\\e98d";
}
.icon-key2:before {
    content: "\\e98e";
}
.icon-lock:before {
    content: "\\e98f";
}
.icon-unlocked:before {
    content: "\\e990";
}
.icon-wrench:before {
    content: "\\e991";
}
.icon-equalizer:before {
    content: "\\e992";
}
.icon-equalizer2:before {
    content: "\\e993";
}
.icon-cog:before {
    content: "\\e994";
}
.icon-cogs:before {
    content: "\\e995";
}
.icon-hammer:before {
    content: "\\e996";
}
.icon-magic-wand:before {
    content: "\\e997";
}
.icon-aid-kit:before {
    content: "\\e998";
}
.icon-bug:before {
    content: "\\e999";
}
.icon-pie-chart:before {
    content: "\\e99a";
}
.icon-stats-dots:before {
    content: "\\e99b";
}
.icon-stats-bars:before {
    content: "\\e99c";
}
.icon-stats-bars2:before {
    content: "\\e99d";
}
.icon-trophy:before {
    content: "\\e99e";
}
.icon-gift:before {
    content: "\\e99f";
}
.icon-glass:before {
    content: "\\e9a0";
}
.icon-glass2:before {
    content: "\\e9a1";
}
.icon-mug:before {
    content: "\\e9a2";
}
.icon-spoon-knife:before {
    content: "\\e9a3";
}
.icon-leaf:before {
    content: "\\e9a4";
}
.icon-rocket:before {
    content: "\\e9a5";
}
.icon-meter:before {
    content: "\\e9a6";
}
.icon-meter2:before {
    content: "\\e9a7";
}
.icon-hammer2:before {
    content: "\\e9a8";
}
.icon-fire:before {
    content: "\\e9a9";
}
.icon-lab:before {
    content: "\\e9aa";
}
.icon-magnet:before {
    content: "\\e9ab";
}
.icon-bin:before {
    content: "\\e9ac";
}
.icon-bin2:before {
    content: "\\e9ad";
}
.icon-briefcase:before {
    content: "\\e9ae";
}
.icon-airplane:before {
    content: "\\e9af";
}
.icon-truck:before {
    content: "\\e9b0";
}
.icon-road:before {
    content: "\\e9b1";
}
.icon-accessibility:before {
    content: "\\e9b2";
}
.icon-target:before {
    content: "\\e9b3";
}
.icon-shield:before {
    content: "\\e9b4";
}
.icon-power:before {
    content: "\\e9b5";
}
.icon-switch:before {
    content: "\\e9b6";
}
.icon-power-cord:before {
    content: "\\e9b7";
}
.icon-clipboard:before {
    content: "\\e9b8";
}
.icon-list-numbered:before {
    content: "\\e9b9";
}
.icon-list:before {
    content: "\\e9ba";
}
.icon-list2:before {
    content: "\\e9bb";
}
.icon-tree:before {
    content: "\\e9bc";
}
.icon-menu:before {
    content: "\\e9bd";
}
.icon-menu2:before {
    content: "\\e9be";
}
.icon-menu3:before {
    content: "\\e9bf";
}
.icon-menu4:before {
    content: "\\e9c0";
}
.icon-cloud:before {
    content: "\\e9c1";
}
.icon-cloud-download:before {
    content: "\\e9c2";
}
.icon-cloud-upload:before {
    content: "\\e9c3";
}
.icon-cloud-check:before {
    content: "\\e9c4";
}
.icon-download2:before {
    content: "\\e9c5";
}
.icon-upload2:before {
    content: "\\e9c6";
}
.icon-download3:before {
    content: "\\e9c7";
}
.icon-upload3:before {
    content: "\\e9c8";
}
.icon-sphere:before {
    content: "\\e9c9";
}
.icon-earth:before {
    content: "\\e9ca";
}
.icon-link:before {
    content: "\\e9cb";
}
.icon-flag:before {
    content: "\\e9cc";
}
.icon-attachment:before {
    content: "\\e9cd";
}
.icon-eye:before {
    content: "\\e9ce";
}
.icon-eye-plus:before {
    content: "\\e9cf";
}
.icon-eye-minus:before {
    content: "\\e9d0";
}
.icon-eye-blocked:before {
    content: "\\e9d1";
}
.icon-bookmark:before {
    content: "\\e9d2";
}
.icon-bookmarks:before {
    content: "\\e9d3";
}
.icon-sun:before {
    content: "\\e9d4";
}
.icon-contrast:before {
    content: "\\e9d5";
}
.icon-brightness-contrast:before {
    content: "\\e9d6";
}
.icon-star-empty:before {
    content: "\\e9d7";
}
.icon-star-half:before {
    content: "\\e9d8";
}
.icon-star-full:before {
    content: "\\e9d9";
}
.icon-heart:before {
    content: "\\e9da";
}
.icon-heart-broken:before {
    content: "\\e9db";
}
.icon-man:before {
    content: "\\e9dc";
}
.icon-woman:before {
    content: "\\e9dd";
}
.icon-man-woman:before {
    content: "\\e9de";
}
.icon-happy:before {
    content: "\\e9df";
}
.icon-happy2:before {
    content: "\\e9e0";
}
.icon-smile:before {
    content: "\\e9e1";
}
.icon-smile2:before {
    content: "\\e9e2";
}
.icon-tongue:before {
    content: "\\e9e3";
}
.icon-tongue2:before {
    content: "\\e9e4";
}
.icon-sad:before {
    content: "\\e9e5";
}
.icon-sad2:before {
    content: "\\e9e6";
}
.icon-wink:before {
    content: "\\e9e7";
}
.icon-wink2:before {
    content: "\\e9e8";
}
.icon-grin:before {
    content: "\\e9e9";
}
.icon-grin2:before {
    content: "\\e9ea";
}
.icon-cool:before {
    content: "\\e9eb";
}
.icon-cool2:before {
    content: "\\e9ec";
}
.icon-angry:before {
    content: "\\e9ed";
}
.icon-angry2:before {
    content: "\\e9ee";
}
.icon-evil:before {
    content: "\\e9ef";
}
.icon-evil2:before {
    content: "\\e9f0";
}
.icon-shocked:before {
    content: "\\e9f1";
}
.icon-shocked2:before {
    content: "\\e9f2";
}
.icon-baffled:before {
    content: "\\e9f3";
}
.icon-baffled2:before {
    content: "\\e9f4";
}
.icon-confused:before {
    content: "\\e9f5";
}
.icon-confused2:before {
    content: "\\e9f6";
}
.icon-neutral:before {
    content: "\\e9f7";
}
.icon-neutral2:before {
    content: "\\e9f8";
}
.icon-hipster:before {
    content: "\\e9f9";
}
.icon-hipster2:before {
    content: "\\e9fa";
}
.icon-wondering:before {
    content: "\\e9fb";
}
.icon-wondering2:before {
    content: "\\e9fc";
}
.icon-sleepy:before {
    content: "\\e9fd";
}
.icon-sleepy2:before {
    content: "\\e9fe";
}
.icon-frustrated:before {
    content: "\\e9ff";
}
.icon-frustrated2:before {
    content: "\\ea00";
}
.icon-crying:before {
    content: "\\ea01";
}
.icon-crying2:before {
    content: "\\ea02";
}
.icon-point-up:before {
    content: "\\ea03";
}
.icon-point-right:before {
    content: "\\ea04";
}
.icon-point-down:before {
    content: "\\ea05";
}
.icon-point-left:before {
    content: "\\ea06";
}
.icon-warning:before {
    content: "\\ea07";
}
.icon-notification:before {
    content: "\\ea08";
}
.icon-question:before {
    content: "\\ea09";
}
.icon-plus:before {
    content: "\\ea0a";
}
.icon-minus:before {
    content: "\\ea0b";
}
.icon-info:before {
    content: "\\ea0c";
}
.icon-cancel-circle:before {
    content: "\\ea0d";
}
.icon-blocked:before {
    content: "\\ea0e";
}
.icon-cross:before {
    content: "\\ea0f";
}
.icon-checkmark:before {
    content: "\\ea10";
}
.icon-checkmark2:before {
    content: "\\ea11";
}
.icon-spell-check:before {
    content: "\\ea12";
}
.icon-enter:before {
    content: "\\ea13";
}
.icon-exit:before {
    content: "\\ea14";
}
.icon-play2:before {
    content: "\\ea15";
}
.icon-pause:before {
    content: "\\ea16";
}
.icon-stop:before {
    content: "\\ea17";
}
.icon-previous:before {
    content: "\\ea18";
}
.icon-next:before {
    content: "\\ea19";
}
.icon-backward:before {
    content: "\\ea1a";
}
.icon-forward2:before {
    content: "\\ea1b";
}
.icon-play3:before {
    content: "\\ea1c";
}
.icon-pause2:before {
    content: "\\ea1d";
}
.icon-stop2:before {
    content: "\\ea1e";
}
.icon-backward2:before {
    content: "\\ea1f";
}
.icon-forward3:before {
    content: "\\ea20";
}
.icon-first:before {
    content: "\\ea21";
}
.icon-last:before {
    content: "\\ea22";
}
.icon-previous2:before {
    content: "\\ea23";
}
.icon-next2:before {
    content: "\\ea24";
}
.icon-eject:before {
    content: "\\ea25";
}
.icon-volume-high:before {
    content: "\\ea26";
}
.icon-volume-medium:before {
    content: "\\ea27";
}
.icon-volume-low:before {
    content: "\\ea28";
}
.icon-volume-mute:before {
    content: "\\ea29";
}
.icon-volume-mute2:before {
    content: "\\ea2a";
}
.icon-volume-increase:before {
    content: "\\ea2b";
}
.icon-volume-decrease:before {
    content: "\\ea2c";
}
.icon-loop:before {
    content: "\\ea2d";
}
.icon-loop2:before {
    content: "\\ea2e";
}
.icon-infinite:before {
    content: "\\ea2f";
}
.icon-shuffle:before {
    content: "\\ea30";
}
.icon-arrow-up-left:before {
    content: "\\ea31";
}
.icon-arrow-up:before {
    content: "\\ea32";
}
.icon-arrow-up-right:before {
    content: "\\ea33";
}
.icon-arrow-right:before {
    content: "\\ea34";
}
.icon-arrow-down-right:before {
    content: "\\ea35";
}
.icon-arrow-down:before {
    content: "\\ea36";
}
.icon-arrow-down-left:before {
    content: "\\ea37";
}
.icon-arrow-left:before {
    content: "\\ea38";
}
.icon-arrow-up-left2:before {
    content: "\\ea39";
}
.icon-arrow-up2:before {
    content: "\\ea3a";
}
.icon-arrow-up-right2:before {
    content: "\\ea3b";
}
.icon-arrow-right2:before {
    content: "\\ea3c";
}
.icon-arrow-down-right2:before {
    content: "\\ea3d";
}
.icon-arrow-down2:before {
    content: "\\ea3e";
}
.icon-arrow-down-left2:before {
    content: "\\ea3f";
}
.icon-arrow-left2:before {
    content: "\\ea40";
}
.icon-circle-up:before {
    content: "\\ea41";
}
.icon-circle-right:before {
    content: "\\ea42";
}
.icon-circle-down:before {
    content: "\\ea43";
}
.icon-circle-left:before {
    content: "\\ea44";
}
.icon-tab:before {
    content: "\\ea45";
}
.icon-move-up:before {
    content: "\\ea46";
}
.icon-move-down:before {
    content: "\\ea47";
}
.icon-sort-alpha-asc:before {
    content: "\\ea48";
}
.icon-sort-alpha-desc:before {
    content: "\\ea49";
}
.icon-sort-numeric-asc:before {
    content: "\\ea4a";
}
.icon-sort-numberic-desc:before {
    content: "\\ea4b";
}
.icon-sort-amount-asc:before {
    content: "\\ea4c";
}
.icon-sort-amount-desc:before {
    content: "\\ea4d";
}
.icon-command:before {
    content: "\\ea4e";
}
.icon-shift:before {
    content: "\\ea4f";
}
.icon-ctrl:before {
    content: "\\ea50";
}
.icon-opt:before {
    content: "\\ea51";
}
.icon-checkbox-checked:before {
    content: "\\ea52";
}
.icon-checkbox-unchecked:before {
    content: "\\ea53";
}
.icon-radio-checked:before {
    content: "\\ea54";
}
.icon-radio-checked2:before {
    content: "\\ea55";
}
.icon-radio-unchecked:before {
    content: "\\ea56";
}
.icon-crop:before {
    content: "\\ea57";
}
.icon-make-group:before {
    content: "\\ea58";
}
.icon-ungroup:before {
    content: "\\ea59";
}
.icon-scissors:before {
    content: "\\ea5a";
}
.icon-filter:before {
    content: "\\ea5b";
}
.icon-font:before {
    content: "\\ea5c";
}
.icon-ligature:before {
    content: "\\ea5d";
}
.icon-ligature2:before {
    content: "\\ea5e";
}
.icon-text-height:before {
    content: "\\ea5f";
}
.icon-text-width:before {
    content: "\\ea60";
}
.icon-font-size:before {
    content: "\\ea61";
}
.icon-bold:before {
    content: "\\ea62";
}
.icon-underline:before {
    content: "\\ea63";
}
.icon-italic:before {
    content: "\\ea64";
}
.icon-strikethrough:before {
    content: "\\ea65";
}
.icon-omega:before {
    content: "\\ea66";
}
.icon-sigma:before {
    content: "\\ea67";
}
.icon-page-break:before {
    content: "\\ea68";
}
.icon-superscript:before {
    content: "\\ea69";
}
.icon-subscript:before {
    content: "\\ea6a";
}
.icon-superscript2:before {
    content: "\\ea6b";
}
.icon-subscript2:before {
    content: "\\ea6c";
}
.icon-text-color:before {
    content: "\\ea6d";
}
.icon-pagebreak:before {
    content: "\\ea6e";
}
.icon-clear-formatting:before {
    content: "\\ea6f";
}
.icon-table:before {
    content: "\\ea70";
}
.icon-table2:before {
    content: "\\ea71";
}
.icon-insert-template:before {
    content: "\\ea72";
}
.icon-pilcrow:before {
    content: "\\ea73";
}
.icon-ltr:before {
    content: "\\ea74";
}
.icon-rtl:before {
    content: "\\ea75";
}
.icon-section:before {
    content: "\\ea76";
}
.icon-paragraph-left:before {
    content: "\\ea77";
}
.icon-paragraph-center:before {
    content: "\\ea78";
}
.icon-paragraph-right:before {
    content: "\\ea79";
}
.icon-paragraph-justify:before {
    content: "\\ea7a";
}
.icon-indent-increase:before {
    content: "\\ea7b";
}
.icon-indent-decrease:before {
    content: "\\ea7c";
}
.icon-share:before {
    content: "\\ea7d";
}
.icon-new-tab:before {
    content: "\\ea7e";
}
.icon-embed:before {
    content: "\\ea7f";
}
.icon-embed2:before {
    content: "\\ea80";
}
.icon-terminal:before {
    content: "\\ea81";
}
.icon-share2:before {
    content: "\\ea82";
}
.icon-mail:before {
    content: "\\ea83";
}
.icon-mail2:before {
    content: "\\ea84";
}
.icon-mail3:before {
    content: "\\ea85";
}
.icon-mail4:before {
    content: "\\ea86";
}
.icon-amazon:before {
    content: "\\ea87";
}
.icon-google:before {
    content: "\\ea88";
}
.icon-google2:before {
    content: "\\ea89";
}
.icon-google3:before {
    content: "\\ea8a";
}
.icon-google-plus:before {
    content: "\\ea8b";
}
.icon-google-plus2:before {
    content: "\\ea8c";
}
.icon-google-plus3:before {
    content: "\\ea8d";
}
.icon-hangouts:before {
    content: "\\ea8e";
}
.icon-google-drive:before {
    content: "\\ea8f";
}
.icon-facebook:before {
    content: "\\ea90";
}
.icon-facebook2:before {
    content: "\\ea91";
}
.icon-instagram:before {
    content: "\\ea92";
}
.icon-whatsapp:before {
    content: "\\ea93";
}
.icon-spotify:before {
    content: "\\ea94";
}
.icon-telegram:before {
    content: "\\ea95";
}
.icon-twitter:before {
    content: "\\ea96";
}
.icon-vine:before {
    content: "\\ea97";
}
.icon-vk:before {
    content: "\\ea98";
}
.icon-renren:before {
    content: "\\ea99";
}
.icon-sina-weibo:before {
    content: "\\ea9a";
}
.icon-rss:before {
    content: "\\ea9b";
}
.icon-rss2:before {
    content: "\\ea9c";
}
.icon-youtube:before {
    content: "\\ea9d";
}
.icon-youtube2:before {
    content: "\\ea9e";
}
.icon-twitch:before {
    content: "\\ea9f";
}
.icon-vimeo:before {
    content: "\\eaa0";
}
.icon-vimeo2:before {
    content: "\\eaa1";
}
.icon-lanyrd:before {
    content: "\\eaa2";
}
.icon-flickr:before {
    content: "\\eaa3";
}
.icon-flickr2:before {
    content: "\\eaa4";
}
.icon-flickr3:before {
    content: "\\eaa5";
}
.icon-flickr4:before {
    content: "\\eaa6";
}
.icon-dribbble:before {
    content: "\\eaa7";
}
.icon-behance:before {
    content: "\\eaa8";
}
.icon-behance2:before {
    content: "\\eaa9";
}
.icon-deviantart:before {
    content: "\\eaaa";
}
.icon-500px:before {
    content: "\\eaab";
}
.icon-steam:before {
    content: "\\eaac";
}
.icon-steam2:before {
    content: "\\eaad";
}
.icon-dropbox:before {
    content: "\\eaae";
}
.icon-onedrive:before {
    content: "\\eaaf";
}
.icon-github:before {
    content: "\\eab0";
}
.icon-npm:before {
    content: "\\eab1";
}
.icon-basecamp:before {
    content: "\\eab2";
}
.icon-trello:before {
    content: "\\eab3";
}
.icon-wordpress:before {
    content: "\\eab4";
}
.icon-joomla:before {
    content: "\\eab5";
}
.icon-ello:before {
    content: "\\eab6";
}
.icon-blogger:before {
    content: "\\eab7";
}
.icon-blogger2:before {
    content: "\\eab8";
}
.icon-tumblr:before {
    content: "\\eab9";
}
.icon-tumblr2:before {
    content: "\\eaba";
}
.icon-yahoo:before {
    content: "\\eabb";
}
.icon-yahoo2:before {
    content: "\\eabc";
}
.icon-tux:before {
    content: "\\eabd";
}
.icon-appleinc:before {
    content: "\\eabe";
}
.icon-finder:before {
    content: "\\eabf";
}
.icon-android:before {
    content: "\\eac0";
}
.icon-windows:before {
    content: "\\eac1";
}
.icon-windows8:before {
    content: "\\eac2";
}
.icon-soundcloud:before {
    content: "\\eac3";
}
.icon-soundcloud2:before {
    content: "\\eac4";
}
.icon-skype:before {
    content: "\\eac5";
}
.icon-reddit:before {
    content: "\\eac6";
}
.icon-hackernews:before {
    content: "\\eac7";
}
.icon-wikipedia:before {
    content: "\\eac8";
}
.icon-linkedin:before {
    content: "\\eac9";
}
.icon-linkedin2:before {
    content: "\\eaca";
}
.icon-lastfm:before {
    content: "\\eacb";
}
.icon-lastfm2:before {
    content: "\\eacc";
}
.icon-delicious:before {
    content: "\\eacd";
}
.icon-stumbleupon:before {
    content: "\\eace";
}
.icon-stumbleupon2:before {
    content: "\\eacf";
}
.icon-stackoverflow:before {
    content: "\\ead0";
}
.icon-pinterest:before {
    content: "\\ead1";
}
.icon-pinterest2:before {
    content: "\\ead2";
}
.icon-xing:before {
    content: "\\ead3";
}
.icon-xing2:before {
    content: "\\ead4";
}
.icon-flattr:before {
    content: "\\ead5";
}
.icon-foursquare:before {
    content: "\\ead6";
}
.icon-yelp:before {
    content: "\\ead7";
}
.icon-paypal:before {
    content: "\\ead8";
}
.icon-chrome:before {
    content: "\\ead9";
}
.icon-firefox:before {
    content: "\\eada";
}
.icon-IE:before {
    content: "\\eadb";
}
.icon-edge:before {
    content: "\\eadc";
}
.icon-safari:before {
    content: "\\eadd";
}
.icon-opera:before {
    content: "\\eade";
}
.icon-file-pdf:before {
    content: "\\eadf";
}
.icon-file-openoffice:before {
    content: "\\eae0";
}
.icon-file-word:before {
    content: "\\eae1";
}
.icon-file-excel:before {
    content: "\\eae2";
}
.icon-libreoffice:before {
    content: "\\eae3";
}
.icon-html-five:before {
    content: "\\eae4";
}
.icon-html-five2:before {
    content: "\\eae5";
}
.icon-css3:before {
    content: "\\eae6";
}
.icon-git:before {
    content: "\\eae7";
}
.icon-codepen:before {
    content: "\\eae8";
}
.icon-svg:before {
    content: "\\eae9";
}
.icon-IcoMoon:before {
    content: "\\eaea";
}
.icon-uni21:before {
    content: "\\21";
}
.icon-uni22:before {
    content: "\\22";
}
.icon-uni23:before {
    content: "\\23";
}
.icon-uni24:before {
    content: "\\24";
}
.icon-uni25:before {
    content: "\\25";
}
.icon-uni26:before {
    content: "\\26";
}
.icon-uni27:before {
    content: "\\27";
}
.icon-uni28:before {
    content: "\\28";
}
.icon-uni29:before {
    content: "\\29";
}
.icon-uni2A:before {
    content: "\\2a";
}
.icon-uni2B:before {
    content: "\\2b";
}
.icon-uni2C:before {
    content: "\\2c";
}
.icon-uni2D:before {
    content: "\\2d";
}
.icon-uni2E:before {
    content: "\\2e";
}
.icon-uni2F:before {
    content: "\\2f";
}
.icon-uni30:before {
    content: "\\30";
}
.icon-uni31:before {
    content: "\\31";
}
.icon-uni32:before {
    content: "\\32";
}
.icon-uni33:before {
    content: "\\33";
}
.icon-uni34:before {
    content: "\\34";
}
.icon-uni35:before {
    content: "\\35";
}
.icon-uni36:before {
    content: "\\36";
}
.icon-uni37:before {
    content: "\\37";
}
.icon-uni38:before {
    content: "\\38";
}
.icon-uni39:before {
    content: "\\39";
}
.icon-uni3A:before {
    content: "\\3a";
}
.icon-uni3B:before {
    content: "\\3b";
}
.icon-uni3C:before {
    content: "\\3c";
}
.icon-uni3D:before {
    content: "\\3d";
}
.icon-uni3E:before {
    content: "\\3e";
}
.icon-uni3F:before {
    content: "\\3f";
}
.icon-uni40:before {
    content: "\\40";
}
.icon-uni41:before {
    content: "\\41";
}
.icon-uni42:before {
    content: "\\42";
}
.icon-uni43:before {
    content: "\\43";
}
.icon-uni44:before {
    content: "\\44";
}
.icon-uni45:before {
    content: "\\45";
}
.icon-uni46:before {
    content: "\\46";
}
.icon-uni47:before {
    content: "\\47";
}
.icon-uni48:before {
    content: "\\48";
}
.icon-uni49:before {
    content: "\\49";
}
.icon-uni4A:before {
    content: "\\4a";
}
.icon-uni4B:before {
    content: "\\4b";
}
.icon-uni4C:before {
    content: "\\4c";
}
.icon-uni4D:before {
    content: "\\4d";
}
.icon-uni4E:before {
    content: "\\4e";
}
.icon-uni4F:before {
    content: "\\4f";
}
.icon-uni50:before {
    content: "\\50";
}
.icon-uni51:before {
    content: "\\51";
}
.icon-uni52:before {
    content: "\\52";
}
.icon-uni53:before {
    content: "\\53";
}
.icon-uni54:before {
    content: "\\54";
}
.icon-uni55:before {
    content: "\\55";
}
.icon-uni56:before {
    content: "\\56";
}
.icon-uni57:before {
    content: "\\57";
}
.icon-uni58:before {
    content: "\\58";
}
.icon-uni59:before {
    content: "\\59";
}
.icon-uni5A:before {
    content: "\\5a";
}
.icon-uni5B:before {
    content: "\\5b";
}
.icon-uni5C:before {
    content: "\\5c";
}
.icon-uni5D:before {
    content: "\\5d";
}
.icon-uni5E:before {
    content: "\\5e";
}
.icon-uni5F:before {
    content: "\\5f";
}
.icon-uni60:before {
    content: "\\60";
}
.icon-uni61:before {
    content: "\\61";
}
.icon-uni62:before {
    content: "\\62";
}
.icon-uni63:before {
    content: "\\63";
}
.icon-uni64:before {
    content: "\\64";
}
.icon-uni65:before {
    content: "\\65";
}
.icon-uni66:before {
    content: "\\66";
}
.icon-uni67:before {
    content: "\\67";
}
.icon-uni68:before {
    content: "\\68";
}
.icon-uni69:before {
    content: "\\69";
}
.icon-uni6A:before {
    content: "\\6a";
}
.icon-uni6B:before {
    content: "\\6b";
}
.icon-uni6C:before {
    content: "\\6c";
}
.icon-uni6D:before {
    content: "\\6d";
}
.icon-uni6E:before {
    content: "\\6e";
}
.icon-uni6F:before {
    content: "\\6f";
}
.icon-uni70:before {
    content: "\\70";
}
.icon-uni71:before {
    content: "\\71";
}
.icon-uni72:before {
    content: "\\72";
}
.icon-uni73:before {
    content: "\\73";
}
.icon-uni74:before {
    content: "\\74";
}
.icon-uni75:before {
    content: "\\75";
}
.icon-uni76:before {
    content: "\\76";
}
.icon-uni77:before {
    content: "\\77";
}
.icon-uni78:before {
    content: "\\78";
}
.icon-uni79:before {
    content: "\\79";
}
.icon-uni7A:before {
    content: "\\7a";
}
.icon-uni7B:before {
    content: "\\7b";
}
.icon-uni7C:before {
    content: "\\7c";
}
.icon-uni7D:before {
    content: "\\7d";
}
.icon-uni7E:before {
    content: "\\7e";
}
.icon-uniA9:before {
    content: "\\a9";
}

`,"assets/css/theme.css":`@font-face {
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

.icon-earth:before {
  content: "\\e9ca"
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
  "name": "jsonresume-theme-elephant",
  "version": "1.1.4",
  "description": "Elegant theme for jsonresume",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/blackvvine/jsonresume-theme-elephant.git"
  },
  "keywords": [
    "jsonresume",
    "theme",
    "elegant"
  ],
  "author": "Iman Akbari <imakbari@gmail.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/blackvvine/jsonresume-theme-elephant/issues"
  },
  "homepage": "https://github.com/blackvvine/jsonresume-theme-elephant",
  "dependencies": {
    "gravatar": "^1.0.6",
    "handlebars": "^4.0.11",
    "jsonresume-themeutils": "^1.4.3",
    "markdown-it": "^6.0.1",
    "markdown-it-abbr": "^1.0.3",
    "moment": "^2.22.2",
    "pug": "^2.0.4",
    "pug-cli": "^1.0.0-alpha6",
    "resume-schema": "0.0.16",
    "tarball-extract": "0.0.3",
    "underscore": "^1.6.0"
  },
  "devDependencies": {
    "grunt": "^1.0.3",
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
      h4.title.text-uppercase Personal Interests

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
`,"pug/background/lang.pug":`unless _.isEmpty(resume.languages)
  .detail#languages
    .icon
      i.fas.fa-language(style={"font-size": "1.25em"})
      span.mobile-title Languages

    .info
      h4.title.text-uppercase Languages

      .content
        ul.list-unstyled.clear-margin
          each interest in resume.languages
            li.card.card-nested
              p
                strong= interest.name

              unless _.isEmpty(interest.keywords)
                .space-top.labels
                  each keyword in interest.keywords
                    span.label.label-keyword= keyword
`,"pug/background/projects.pug":`unless _.isEmpty(resume.projects)
  .detail#projects
    .icon
      i.fs-lg.icon-codepen
      span.mobile-title Projects

    .info
      h4.title.text-uppercase Projects

      ul.list-unstyled.clear-margin
        each experience in resume.projects
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
`,"pug/background/publications.pug":`
unless _.isEmpty(resume.publications)
  .detail#publications
    .icon
      i.fs-lg.icon-newspaper
      span.mobile-title Publications 

    .info
      h4.title.text-uppercase Publications & Posts

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
`,"pug/background/rev.pug":`unless _.isEmpty(resume.externalreview)
  .detail#rev
    .icon
      i.fas.fa-glasses(style={"font-size": "1.25em"})
      span.mobile-title External Reviewer

    .info
      h4.title.text-uppercase External Reviewer

      .content
        ul.list-unstyled.clear-margin
          each interest in resume.externalreview
            li.card.card-nested
              p
                strong= interest.name

              unless _.isEmpty(interest.keywords)
                .space-top.labels
                  each keyword in interest.keywords
                    span.label.label-keyword= keyword

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
`,"pug/background/ta.pug":`unless _.isEmpty(resume.teaching)
  .detail#teaching
    .icon
      i.fs-lg.icon-book
      span.mobile-title Teaching

    .info
      h4.title.text-uppercase Teaching

      ul.list-unstyled.clear-margin
        each experience in resume.teaching
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
      include background/projects.pug
      include background/work-experience.pug
      include background/skills.pug
      include background/education.pug
      include background/rev.pug
      include background/ta.pug
      include background/awards.pug
      include background/volunteer-work.pug
      include background/publications.pug
      include background/interests.pug
      include background/lang.pug
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

script(src="https://kit.fontawesome.com/21b8690fdf.js", crossorigin="anonymous")

style!= css
`},dt={"assets/css":["icomoon.css","theme.css"],"assets/icomoon/demo-files":["demo.css","demo.js"],"assets/icomoon/fonts":["icomoon.eot","icomoon.svg","icomoon.ttf","icomoon.woff"],"assets/icomoon":["Read Me.txt","demo-files","demo.html","fonts","selection.json","style.css","style.less","variables.less"],"assets/less/lib/bootstrap/mixins":["alerts.less","background-variant.less","border-radius.less","buttons.less","center-block.less","clearfix.less","forms.less","gradients.less","grid-framework.less","grid.less","hide-text.less","image.less","labels.less","list-group.less","nav-divider.less","nav-vertical-align.less","opacity.less","pagination.less","panels.less","progress-bar.less","reset-filter.less","reset-text.less","resize.less","responsive-visibility.less","size.less","tab-focus.less","table-row.less","text-emphasis.less","text-overflow.less","vendor-prefixes.less"],"assets/less/lib/bootstrap":["mixins","mixins.less","variables.less"],"assets/less/lib":["bootstrap"],"assets/less/sections":["awards.less","education.less","interests.less","publications.less","references.less","skills.less","volunteer_work.less","work_experience.less"],"assets/less":["base.less","floating-nav.less","icon.less","info_card_styles.less","lib","mixins.less","print.less","sections","theme.less","utilities.less","variables.less","vendor-overrides.less"],assets:["css","icomoon","less"],"pug/background":["about.pug","awards.pug","education.pug","interests.pug","lang.pug","projects.pug","publications.pug","references.pug","rev.pug","skills.pug","ta.pug","volunteer-work.pug","work-experience.pug"],pug:["background","background-card.pug","floating-nav.pug","profile-card.pug","scripts.pug","stylesheets.pug"],screenshots:["profile.png"],tpl:["index.js"],".":["Gruntfile.js","README.md","assets","index.js","index.pug","moment-precise-range.js","package.json","pug","render.js","screenshots","serve.js","tpl"]};da=function(a,n){var u=ca(a);return u!==void 0?u:""},pa=function(a,n){var u=ro(a);return u===void 0&&(u=[]),n&&n.withFileTypes?u.map(function(o){var e=io(a)+"/"+o,t=ro(e)!==void 0;return{name:o,isFile:function(){return!t},isDirectory:function(){return t}}}):u},fa=function(a){return ca(a)!==void 0||ro(a)!==void 0},ga=function(){},ha=function(){},oo=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},ba=oo,ma=function(){},va=function(){},ka=function(){return{pipe:function(a){return a},on:function(){return this}}},xa=function(){return{write:function(){},end:function(){},on:function(){return this}}},yl={readFileSync:da,readdirSync:pa,existsSync:fa,writeFileSync:ga,mkdirSync:ha,statSync:oo,lstatSync:ba,unlinkSync:ma,rmdirSync:va,createReadStream:ka,createWriteStream:xa}});var $t=W((so,lo)=>{M();(function(a,n){typeof so=="object"&&typeof lo<"u"?lo.exports=n():typeof define=="function"&&define.amd?define("underscore",n):(a=typeof globalThis<"u"?globalThis:a||self,(function(){var u=a._,o=a._=n();o.noConflict=function(){return a._=u,o}})())})(so,(function(){var a="1.13.8",n=typeof self=="object"&&self.self===self&&self||typeof globalThis=="object"&&globalThis.global===globalThis&&globalThis||Function("return this")()||{},u=Array.prototype,o=Object.prototype,e=typeof Symbol<"u"?Symbol.prototype:null,t=u.push,h=u.slice,p=o.toString,f=o.hasOwnProperty,m=typeof ArrayBuffer<"u",z=typeof DataView<"u",S=Array.isArray,F=Object.keys,w=Object.create,C=m&&ArrayBuffer.isView,b=isNaN,T=isFinite,P=!{toString:null}.propertyIsEnumerable("toString"),R=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],I=Math.pow(2,53)-1;function x(c,d){return d=d==null?c.length-1:+d,function(){for(var v=Math.max(arguments.length-d,0),k=Array(v),A=0;A<v;A++)k[A]=arguments[A+d];switch(d){case 0:return c.call(this,k);case 1:return c.call(this,arguments[0],k);case 2:return c.call(this,arguments[0],arguments[1],k)}var D=Array(d+1);for(A=0;A<d;A++)D[A]=arguments[A];return D[d]=k,c.apply(this,D)}}function q(c){var d=typeof c;return d==="function"||d==="object"&&!!c}function E(c){return c===null}function J(c){return c===void 0}function Q(c){return c===!0||c===!1||p.call(c)==="[object Boolean]"}function fn(c){return!!(c&&c.nodeType===1)}function rn(c){var d="[object "+c+"]";return function(v){return p.call(v)===d}}var L=rn("String"),$=rn("Number"),j=rn("Date"),N=rn("RegExp"),Gn=rn("Error"),Be=rn("Symbol"),ve=rn("ArrayBuffer"),Sn=rn("Function"),Ft=n.document&&n.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof Ft!="function"&&(Sn=function(c){return typeof c=="function"||!1});var Fn=Sn,Je=rn("Object"),oe=z&&(!/\[native code\]/.test(String(DataView))||Je(new DataView(new ArrayBuffer(8)))),X=typeof Map<"u"&&Je(new Map),oi=rn("DataView");function ai(c){return c!=null&&Fn(c.getInt8)&&ve(c.buffer)}var ae=oe?ai:oi,Zn=S||rn("Array");function Xn(c,d){return c!=null&&f.call(c,d)}var yt=rn("Arguments");(function(){yt(arguments)||(yt=function(c){return Xn(c,"callee")})})();var wt=yt;function ui(c){return!Be(c)&&T(c)&&!isNaN(parseFloat(c))}function Kt(c){return $(c)&&b(c)}function nr(c){return function(){return c}}function er(c){return function(d){var v=c(d);return typeof v=="number"&&v>=0&&v<=I}}function tr(c){return function(d){return d?.[c]}}var Qe=tr("byteLength"),si=er(Qe),rr=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function Mn(c){return C?C(c)&&!ae(c):si(c)&&rr.test(p.call(c))}var Ke=m?Mn:nr(!1),wn=tr("length");function li(c){for(var d={},v=c.length,k=0;k<v;++k)d[c[k]]=!0;return{contains:function(A){return d[A]===!0},push:function(A){return d[A]=!0,c.push(A)}}}function Ct(c,d){d=li(d);var v=R.length,k=c.constructor,A=Fn(k)&&k.prototype||o,D="constructor";for(Xn(c,D)&&!d.contains(D)&&d.push(D);v--;)D=R[v],D in c&&c[D]!==A[D]&&!d.contains(D)&&d.push(D)}function cn(c){if(!q(c))return[];if(F)return F(c);var d=[];for(var v in c)Xn(c,v)&&d.push(v);return P&&Ct(c,d),d}function ir(c){if(c==null)return!0;var d=wn(c);return typeof d=="number"&&(Zn(c)||L(c)||wt(c))?d===0:wn(cn(c))===0}function nt(c,d){var v=cn(d),k=v.length;if(c==null)return!k;for(var A=Object(c),D=0;D<k;D++){var B=v[D];if(d[B]!==A[B]||!(B in A))return!1}return!0}function on(c){if(c instanceof on)return c;if(!(this instanceof on))return new on(c);this._wrapped=c}on.VERSION=a,on.prototype.value=function(){return this._wrapped},on.prototype.valueOf=on.prototype.toJSON=on.prototype.value,on.prototype.toString=function(){return String(this._wrapped)};function gn(c){return new Uint8Array(c.buffer||c,c.byteOffset||0,Qe(c))}var Et="[object DataView]";function or(c,d){for(var v=[{a:c,b:d}],k=[],A=[];v.length;){var D=v.pop();if(D===!0){k.pop(),A.pop();continue}if(c=D.a,d=D.b,c===d){if(c!==0||1/c===1/d)continue;return!1}if(c==null||d==null)return!1;if(c!==c){if(d!==d)continue;return!1}var B=typeof c;if(B!=="function"&&B!=="object"&&typeof d!="object")return!1;c instanceof on&&(c=c._wrapped),d instanceof on&&(d=d._wrapped);var H=p.call(c);if(H!==p.call(d))return!1;if(oe&&H=="[object Object]"&&ae(c)){if(!ae(d))return!1;H=Et}switch(H){case"[object RegExp]":case"[object String]":if(""+c==""+d)continue;return!1;case"[object Number]":v.push({a:+c,b:+d});continue;case"[object Date]":case"[object Boolean]":if(+c==+d)continue;return!1;case"[object Symbol]":if(e.valueOf.call(c)===e.valueOf.call(d))continue;return!1;case"[object ArrayBuffer]":case Et:v.push({a:gn(c),b:gn(d)});continue}var nn=H==="[object Array]";if(!nn&&Ke(c)){var en=Qe(c);if(en!==Qe(d))return!1;if(c.buffer===d.buffer&&c.byteOffset===d.byteOffset)continue;nn=!0}if(!nn){if(typeof c!="object"||typeof d!="object")return!1;var xn=c.constructor,qn=d.constructor;if(xn!==qn&&!(Fn(xn)&&xn instanceof xn&&Fn(qn)&&qn instanceof qn)&&"constructor"in c&&"constructor"in d)return!1}for(var En=k.length;En--;)if(k[En]===c){if(A[En]===d)break;return!1}if(!(En>=0))if(k.push(c),A.push(d),v.push(!0),nn){if(En=c.length,En!==d.length)return!1;for(;En--;)v.push({a:c[En],b:d[En]})}else{var $n=cn(c),at;if(En=$n.length,cn(d).length!==En)return!1;for(;En--;){if(at=$n[En],!Xn(d,at))return!1;v.push({a:c[at],b:d[at]})}}}return!0}function Jn(c){if(!q(c))return[];var d=[];for(var v in c)d.push(v);return P&&Ct(c,d),d}function Ie(c){var d=wn(c);return function(v){if(v==null)return!1;var k=Jn(v);if(wn(k))return!1;for(var A=0;A<d;A++)if(!Fn(v[c[A]]))return!1;return c!==ur||!Fn(v[ke])}}var ke="forEach",ue="has",xe=["clear","delete"],ar=["get",ue,"set"],et=xe.concat(ke,ar),ur=xe.concat(ar),Te=["add"].concat(xe,ke,ue),Fe=X?Ie(et):rn("Map"),_t=X?Ie(ur):rn("WeakMap"),tt=X?Ie(Te):rn("Set"),G=rn("WeakSet");function ye(c){for(var d=cn(c),v=d.length,k=Array(v),A=0;A<v;A++)k[A]=c[d[A]];return k}function ci(c){for(var d=cn(c),v=d.length,k=Array(v),A=0;A<v;A++)k[A]=[d[A],c[d[A]]];return k}function In(c){for(var d={},v=cn(c),k=0,A=v.length;k<A;k++)d[c[v[k]]]=v[k];return d}function zn(c){var d=[];for(var v in c)Fn(c[v])&&d.push(v);return d.sort()}function tn(c,d){return function(v){var k=arguments.length;if(d&&(v=Object(v)),k<2||v==null)return v;for(var A=1;A<k;A++)for(var D=arguments[A],B=c(D),H=B.length,nn=0;nn<H;nn++){var en=B[nn];(!d||v[en]===void 0)&&(v[en]=D[en])}return v}}var rt=tn(Jn),ln=tn(cn),we=tn(Jn,!0);function di(){return function(){}}function Re(c){if(!q(c))return{};if(w)return w(c);var d=di();d.prototype=c;var v=new d;return d.prototype=null,v}function Cn(c,d){var v=Re(c);return d&&ln(v,d),v}function Pn(c){return q(c)?Zn(c)?c.slice():rt({},c):c}function Tn(c,d){return d(c),c}function kn(c){return Zn(c)?c:[c]}on.toPath=kn;function _n(c){return on.toPath(c)}function Bn(c,d){for(var v=d.length,k=0;k<v;k++){if(c==null)return;c=c[d[k]]}return v?c:void 0}function Qn(c,d,v){var k=Bn(c,_n(d));return J(k)?v:k}function pi(c,d){d=_n(d);for(var v=d.length,k=0;k<v;k++){var A=d[k];if(!Xn(c,A))return!1;c=c[A]}return!!v}function Dt(c){return c}function Yn(c){return c=ln({},c),function(d){return nt(d,c)}}function it(c){return c=_n(c),function(d){return Bn(d,c)}}function Oe(c,d,v){if(d===void 0)return c;switch(v??3){case 1:return function(k){return c.call(d,k)};case 3:return function(k,A,D){return c.call(d,k,A,D)};case 4:return function(k,A,D,B){return c.call(d,k,A,D,B)}}return function(){return c.apply(d,arguments)}}function se(c,d,v){return c==null?Dt:Fn(c)?Oe(c,d,v):q(c)&&!Zn(c)?Yn(c):it(c)}function le(c,d){return se(c,d,1/0)}on.iteratee=le;function Dn(c,d,v){return on.iteratee!==le?on.iteratee(c,d):se(c,d,v)}function fi(c,d,v){d=Dn(d,v);for(var k=cn(c),A=k.length,D={},B=0;B<A;B++){var H=k[B];D[H]=d(c[H],H,c)}return D}function sr(){}function gi(c){return c==null?sr:function(d){return Qn(c,d)}}function mn(c,d,v){var k=Array(Math.max(0,c));d=Oe(d,v,1);for(var A=0;A<c;A++)k[A]=d(A);return k}function Pe(c,d){return d==null&&(d=c,c=0),c+Math.floor(Math.random()*(d-c+1))}var Ye=Date.now||function(){return new Date().getTime()};function qt(c){var d=function(D){return c[D]},v="(?:"+cn(c).join("|")+")",k=RegExp(v),A=RegExp(v,"g");return function(D){return D=D==null?"":""+D,k.test(D)?D.replace(A,d):D}}var zt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},hi=qt(zt),bi=In(zt),mi=qt(bi),vi=on.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},At=/(.)^/,ki={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},lr=/\\|'|\r|\n|\u2028|\u2029/g;function cr(c){return"\\"+ki[c]}var xi=/^\s*(\w|\$)+\s*$/;function Fi(c,d,v){!d&&v&&(d=v),d=we({},d,on.templateSettings);var k=RegExp([(d.escape||At).source,(d.interpolate||At).source,(d.evaluate||At).source].join("|")+"|$","g"),A=0,D="__p+='";c.replace(k,function(en,xn,qn,En,$n){return D+=c.slice(A,$n).replace(lr,cr),A=$n+en.length,xn?D+=`'+
((__t=(`+xn+`))==null?'':_.escape(__t))+
'`:qn?D+=`'+
((__t=(`+qn+`))==null?'':__t)+
'`:En&&(D+=`';
`+En+`
__p+='`),en}),D+=`';
`;var B=d.variable;if(B){if(!xi.test(B))throw new Error("variable is not a bare identifier: "+B)}else D=`with(obj||{}){
`+D+`}
`,B="obj";D=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+D+`return __p;
`;var H;try{H=new Function(B,"_",D)}catch(en){throw en.source=D,en}var nn=function(en){return H.call(this,en,on)};return nn.source="function("+B+`){
`+D+"}",nn}function yi(c,d,v){d=_n(d);var k=d.length;if(!k)return Fn(v)?v.call(c):v;for(var A=0;A<k;A++){var D=c?.[d[A]];D===void 0&&(D=v,A=k),c=Fn(D)?D.call(c):D}return c}var dr=0;function wi(c){var d=++dr+"";return c?c+d:d}function Ne(c){var d=on(c);return d._chain=!0,d}function Le(c,d,v,k,A){if(!(k instanceof d))return c.apply(v,A);var D=Re(c.prototype),B=c.apply(D,A);return q(B)?B:D}var ce=x(function(c,d){var v=ce.placeholder,k=function(){for(var A=0,D=d.length,B=Array(D),H=0;H<D;H++)B[H]=d[H]===v?arguments[A++]:d[H];for(;A<arguments.length;)B.push(arguments[A++]);return Le(c,k,this,this,B)};return k});ce.placeholder=on;var Ce=x(function(c,d,v){if(!Fn(c))throw new TypeError("Bind must be called on a function");var k=x(function(A){return Le(c,k,d,this,v.concat(A))});return k}),vn=er(wn);function Ee(c,d,v){!d&&d!==0&&(d=1/0);for(var k=[],A=0,D=0,B=wn(c)||0,H=[];;){if(D>=B){if(!H.length)break;var nn=H.pop();D=nn.i,c=nn.v,B=wn(c);continue}var en=c[D++];H.length>=d?k[A++]=en:vn(en)&&(Zn(en)||wt(en))?(H.push({i:D,v:c}),D=0,c=en,B=wn(c)):v||(k[A++]=en)}return k}var Ci=x(function(c,d){d=Ee(d,!1,!1);var v=d.length;if(v<1)throw new Error("bindAll must be passed function names");for(;v--;){var k=d[v];c[k]=Ce(c[k],c)}return c});function Ei(c,d){var v=function(k){var A=v.cache,D=""+(d?d.apply(this,arguments):k);return Xn(A,D)||(A[D]=c.apply(this,arguments)),A[D]};return v.cache={},v}var pr=x(function(c,d,v){return setTimeout(function(){return c.apply(null,v)},d)}),_i=ce(pr,on,1);function Di(c,d,v){var k,A,D,B,H=0;v||(v={});var nn=function(){H=v.leading===!1?0:Ye(),k=null,B=c.apply(A,D),k||(A=D=null)},en=function(){var xn=Ye();!H&&v.leading===!1&&(H=xn);var qn=d-(xn-H);return A=this,D=arguments,qn<=0||qn>d?(k&&(clearTimeout(k),k=null),H=xn,B=c.apply(A,D),k||(A=D=null)):!k&&v.trailing!==!1&&(k=setTimeout(nn,qn)),B};return en.cancel=function(){clearTimeout(k),H=0,k=A=D=null},en}function qi(c,d,v){var k,A,D,B,H,nn=function(){var xn=Ye()-A;d>xn?k=setTimeout(nn,d-xn):(k=null,v||(B=c.apply(H,D)),k||(D=H=null))},en=x(function(xn){return H=this,D=xn,A=Ye(),k||(k=setTimeout(nn,d),v&&(B=c.apply(H,D))),B});return en.cancel=function(){clearTimeout(k),k=D=H=null},en}function zi(c,d){return ce(d,c)}function je(c){return function(){return!c.apply(this,arguments)}}function Ai(){var c=arguments,d=c.length-1;return function(){for(var v=d,k=c[d].apply(this,arguments);v--;)k=c[v].call(this,k);return k}}function fr(c,d){return function(){if(--c<1)return d.apply(this,arguments)}}function gr(c,d){var v;return function(){return--c>0&&(v=d.apply(this,arguments)),c<=1&&(d=null),v}}var Mi=ce(gr,2);function hr(c,d,v){d=Dn(d,v);for(var k=cn(c),A,D=0,B=k.length;D<B;D++)if(A=k[D],d(c[A],A,c))return A}function br(c){return function(d,v,k){v=Dn(v,k);for(var A=wn(d),D=c>0?0:A-1;D>=0&&D<A;D+=c)if(v(d[D],D,d))return D;return-1}}var Mt=br(1),mr=br(-1);function vr(c,d,v,k){v=Dn(v,k,1);for(var A=v(d),D=0,B=wn(c);D<B;){var H=Math.floor((D+B)/2);v(c[H])<A?D=H+1:B=H}return D}function kr(c,d,v){return function(k,A,D){var B=0,H=wn(k);if(typeof D=="number")c>0?B=D>=0?D:Math.max(D+H,B):H=D>=0?Math.min(D+1,H):D+H+1;else if(v&&D&&H)return D=v(k,A),k[D]===A?D:-1;if(A!==A)return D=d(h.call(k,B,H),Kt),D>=0?D+B:-1;for(D=c>0?B:H-1;D>=0&&D<H;D+=c)if(k[D]===A)return D;return-1}}var xr=kr(1,Mt,vr),Si=kr(-1,mr);function St(c,d,v){var k=vn(c)?Mt:hr,A=k(c,d,v);if(A!==void 0&&A!==-1)return c[A]}function Bi(c,d){return St(c,Yn(d))}function Nn(c,d,v){d=Oe(d,v);var k,A;if(vn(c))for(k=0,A=c.length;k<A;k++)d(c[k],k,c);else{var D=cn(c);for(k=0,A=D.length;k<A;k++)d(c[D[k]],D[k],c)}return c}function de(c,d,v){d=Dn(d,v);for(var k=!vn(c)&&cn(c),A=(k||c).length,D=Array(A),B=0;B<A;B++){var H=k?k[B]:B;D[B]=d(c[H],H,c)}return D}function Fr(c){var d=function(v,k,A,D){var B=!vn(v)&&cn(v),H=(B||v).length,nn=c>0?0:H-1;for(D||(A=v[B?B[nn]:nn],nn+=c);nn>=0&&nn<H;nn+=c){var en=B?B[nn]:nn;A=k(A,v[en],en,v)}return A};return function(v,k,A,D){var B=arguments.length>=3;return d(v,Oe(k,D,4),A,B)}}var $e=Fr(1),ot=Fr(-1);function _e(c,d,v){var k=[];return d=Dn(d,v),Nn(c,function(A,D,B){d(A,D,B)&&k.push(A)}),k}function yr(c,d,v){return _e(c,je(Dn(d)),v)}function Bt(c,d,v){d=Dn(d,v);for(var k=!vn(c)&&cn(c),A=(k||c).length,D=0;D<A;D++){var B=k?k[D]:D;if(!d(c[B],B,c))return!1}return!0}function wr(c,d,v){d=Dn(d,v);for(var k=!vn(c)&&cn(c),A=(k||c).length,D=0;D<A;D++){var B=k?k[D]:D;if(d(c[B],B,c))return!0}return!1}function Ln(c,d,v,k){return vn(c)||(c=ye(c)),(typeof v!="number"||k)&&(v=0),xr(c,d,v)>=0}var Ii=x(function(c,d,v){var k,A;return Fn(d)?A=d:(d=_n(d),k=d.slice(0,-1),d=d[d.length-1]),de(c,function(D){var B=A;if(!B){if(k&&k.length&&(D=Bn(D,k)),D==null)return;B=D[d]}return B==null?B:B.apply(D,v)})});function It(c,d){return de(c,it(d))}function Cr(c,d){return _e(c,Yn(d))}function bn(c,d,v){var k=-1/0,A=-1/0,D,B;if(d==null||typeof d=="number"&&typeof c[0]!="object"&&c!=null){c=vn(c)?c:ye(c);for(var H=0,nn=c.length;H<nn;H++)D=c[H],D!=null&&D>k&&(k=D)}else d=Dn(d,v),Nn(c,function(en,xn,qn){B=d(en,xn,qn),(B>A||B===-1/0&&k===-1/0)&&(k=en,A=B)});return k}function Ue(c,d,v){var k=1/0,A=1/0,D,B;if(d==null||typeof d=="number"&&typeof c[0]!="object"&&c!=null){c=vn(c)?c:ye(c);for(var H=0,nn=c.length;H<nn;H++)D=c[H],D!=null&&D<k&&(k=D)}else d=Dn(d,v),Nn(c,function(en,xn,qn){B=d(en,xn,qn),(B<A||B===1/0&&k===1/0)&&(k=en,A=B)});return k}var We=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Er(c){return c?Zn(c)?h.call(c):L(c)?c.match(We):vn(c)?de(c,Dt):ye(c):[]}function Tt(c,d,v){if(d==null||v)return vn(c)||(c=ye(c)),c[Pe(c.length-1)];var k=Er(c),A=wn(k);d=Math.max(Math.min(d,A),0);for(var D=A-1,B=0;B<d;B++){var H=Pe(B,D),nn=k[B];k[B]=k[H],k[H]=nn}return k.slice(0,d)}function Ti(c){return Tt(c,1/0)}function Ri(c,d,v){var k=0;return d=Dn(d,v),It(de(c,function(A,D,B){return{value:A,index:k++,criteria:d(A,D,B)}}).sort(function(A,D){var B=A.criteria,H=D.criteria;if(B!==H){if(B>H||B===void 0)return 1;if(B<H||H===void 0)return-1}return A.index-D.index}),"value")}function pe(c,d){return function(v,k,A){var D=d?[[],[]]:{};return k=Dn(k,A),Nn(v,function(B,H){var nn=k(B,H,v);c(D,B,nn)}),D}}var Kn=pe(function(c,d,v){Xn(c,v)?c[v].push(d):c[v]=[d]}),Rt=pe(function(c,d,v){c[v]=d}),Oi=pe(function(c,d,v){Xn(c,v)?c[v]++:c[v]=1}),jn=pe(function(c,d,v){c[v?0:1].push(d)},!0);function Pi(c){return c==null?0:vn(c)?c.length:cn(c).length}function Ot(c,d,v){return d in v}var _r=x(function(c,d){var v={},k=d[0];if(c==null)return v;Fn(k)?(d.length>1&&(k=Oe(k,d[1])),d=Jn(c)):(k=Ot,d=Ee(d,!1,!1),c=Object(c));for(var A=0,D=d.length;A<D;A++){var B=d[A],H=c[B];k(H,B,c)&&(v[B]=H)}return v}),Yi=x(function(c,d){var v=d[0],k;return Fn(v)?(v=je(v),d.length>1&&(k=d[1])):(d=de(Ee(d,!1,!1),String),v=function(A,D){return!Ln(d,D)}),_r(c,v,k)});function Dr(c,d,v){return h.call(c,0,Math.max(0,c.length-(d==null||v?1:d)))}function De(c,d,v){return c==null||c.length<1?d==null||v?void 0:[]:d==null||v?c[0]:Dr(c,c.length-d)}function qe(c,d,v){return h.call(c,d==null||v?1:d)}function Ni(c,d,v){return c==null||c.length<1?d==null||v?void 0:[]:d==null||v?c[c.length-1]:qe(c,Math.max(0,c.length-d))}function Li(c){return _e(c,Boolean)}function ji(c,d){return Ee(c,d,!1)}var Pt=x(function(c,d){return d=Ee(d,!0,!0),_e(c,function(v){return!Ln(d,v)})}),$i=x(function(c,d){return Pt(c,d)});function Yt(c,d,v,k){Q(d)||(k=v,v=d,d=!1),v!=null&&(v=Dn(v,k));for(var A=[],D=[],B=0,H=wn(c);B<H;B++){var nn=c[B],en=v?v(nn,B,c):nn;d&&!v?((!B||D!==en)&&A.push(nn),D=en):v?Ln(D,en)||(D.push(en),A.push(nn)):Ln(A,nn)||A.push(nn)}return A}var Ui=x(function(c){return Yt(Ee(c,!0,!0))});function Wi(c){for(var d=[],v=arguments.length,k=0,A=wn(c);k<A;k++){var D=c[k];if(!Ln(d,D)){var B;for(B=1;B<v&&Ln(arguments[B],D);B++);B===v&&d.push(D)}}return d}function Nt(c){for(var d=c&&bn(c,wn).length||0,v=Array(d),k=0;k<d;k++)v[k]=It(c,k);return v}var qr=x(Nt);function Vi(c,d){for(var v={},k=0,A=wn(c);k<A;k++)d?v[c[k]]=d[k]:v[c[k][0]]=c[k][1];return v}function ze(c,d,v){d==null&&(d=c||0,c=0),v||(v=d<c?-1:1);for(var k=Math.max(Math.ceil((d-c)/v),0),A=Array(k),D=0;D<k;D++,c+=v)A[D]=c;return A}function Hi(c,d){if(d==null||d<1)return[];for(var v=[],k=0,A=c.length;k<A;)v.push(h.call(c,k,k+=d));return v}function Ve(c,d){return c._chain?on(d).chain():d}function zr(c){return Nn(zn(c),function(d){var v=on[d]=c[d];on.prototype[d]=function(){var k=[this._wrapped];return t.apply(k,arguments),Ve(this,v.apply(on,k))}}),on}Nn(["pop","push","reverse","shift","sort","splice","unshift"],function(c){var d=u[c];on.prototype[c]=function(){var v=this._wrapped;return v!=null&&(d.apply(v,arguments),(c==="shift"||c==="splice")&&v.length===0&&delete v[0]),Ve(this,v)}}),Nn(["concat","join","slice"],function(c){var d=u[c];on.prototype[c]=function(){var v=this._wrapped;return v!=null&&(v=d.apply(v,arguments)),Ve(this,v)}});var Lt={__proto__:null,VERSION:a,restArguments:x,isObject:q,isNull:E,isUndefined:J,isBoolean:Q,isElement:fn,isString:L,isNumber:$,isDate:j,isRegExp:N,isError:Gn,isSymbol:Be,isArrayBuffer:ve,isDataView:ae,isArray:Zn,isFunction:Fn,isArguments:wt,isFinite:ui,isNaN:Kt,isTypedArray:Ke,isEmpty:ir,isMatch:nt,isEqual:or,isMap:Fe,isWeakMap:_t,isSet:tt,isWeakSet:G,keys:cn,allKeys:Jn,values:ye,pairs:ci,invert:In,functions:zn,methods:zn,extend:rt,extendOwn:ln,assign:ln,defaults:we,create:Cn,clone:Pn,tap:Tn,get:Qn,has:pi,mapObject:fi,identity:Dt,constant:nr,noop:sr,toPath:kn,property:it,propertyOf:gi,matcher:Yn,matches:Yn,times:mn,random:Pe,now:Ye,escape:hi,unescape:mi,templateSettings:vi,template:Fi,result:yi,uniqueId:wi,chain:Ne,iteratee:le,partial:ce,bind:Ce,bindAll:Ci,memoize:Ei,delay:pr,defer:_i,throttle:Di,debounce:qi,wrap:zi,negate:je,compose:Ai,after:fr,before:gr,once:Mi,findKey:hr,findIndex:Mt,findLastIndex:mr,sortedIndex:vr,indexOf:xr,lastIndexOf:Si,find:St,detect:St,findWhere:Bi,each:Nn,forEach:Nn,map:de,collect:de,reduce:$e,foldl:$e,inject:$e,reduceRight:ot,foldr:ot,filter:_e,select:_e,reject:yr,every:Bt,all:Bt,some:wr,any:wr,contains:Ln,includes:Ln,include:Ln,invoke:Ii,pluck:It,where:Cr,max:bn,min:Ue,shuffle:Ti,sample:Tt,sortBy:Ri,groupBy:Kn,indexBy:Rt,countBy:Oi,partition:jn,toArray:Er,size:Pi,pick:_r,omit:Yi,first:De,head:De,take:De,initial:Dr,last:Ni,rest:qe,tail:qe,drop:qe,compact:Li,flatten:ji,without:$i,uniq:Yt,unique:Yt,union:Ui,intersection:Wi,difference:Pt,unzip:Nt,transpose:Nt,zip:qr,object:Vi,range:ze,chunk:Hi,mixin:zr,default:on},jt=zr(Lt);return jt._=jt,jt}))});var Ut=W((S3,Fa)=>{M();Fa.exports={date_format:"MMM DD, YYYY",gravatar:{s:"100",r:"pg",d:"mm"}}});var wa=W((ya,Nr)=>{M();(function(a){"use strict";function n(x,q){var E=(x&65535)+(q&65535),J=(x>>16)+(q>>16)+(E>>16);return J<<16|E&65535}function u(x,q){return x<<q|x>>>32-q}function o(x,q,E,J,Q,fn){return n(u(n(n(q,x),n(J,fn)),Q),E)}function e(x,q,E,J,Q,fn,rn){return o(q&E|~q&J,x,q,Q,fn,rn)}function t(x,q,E,J,Q,fn,rn){return o(q&J|E&~J,x,q,Q,fn,rn)}function h(x,q,E,J,Q,fn,rn){return o(q^E^J,x,q,Q,fn,rn)}function p(x,q,E,J,Q,fn,rn){return o(E^(q|~J),x,q,Q,fn,rn)}function f(x,q){x[q>>5]|=128<<q%32,x[(q+64>>>9<<4)+14]=q;var E,J,Q,fn,rn,L=1732584193,$=-271733879,j=-1732584194,N=271733878;for(E=0;E<x.length;E+=16)J=L,Q=$,fn=j,rn=N,L=e(L,$,j,N,x[E],7,-680876936),N=e(N,L,$,j,x[E+1],12,-389564586),j=e(j,N,L,$,x[E+2],17,606105819),$=e($,j,N,L,x[E+3],22,-1044525330),L=e(L,$,j,N,x[E+4],7,-176418897),N=e(N,L,$,j,x[E+5],12,1200080426),j=e(j,N,L,$,x[E+6],17,-1473231341),$=e($,j,N,L,x[E+7],22,-45705983),L=e(L,$,j,N,x[E+8],7,1770035416),N=e(N,L,$,j,x[E+9],12,-1958414417),j=e(j,N,L,$,x[E+10],17,-42063),$=e($,j,N,L,x[E+11],22,-1990404162),L=e(L,$,j,N,x[E+12],7,1804603682),N=e(N,L,$,j,x[E+13],12,-40341101),j=e(j,N,L,$,x[E+14],17,-1502002290),$=e($,j,N,L,x[E+15],22,1236535329),L=t(L,$,j,N,x[E+1],5,-165796510),N=t(N,L,$,j,x[E+6],9,-1069501632),j=t(j,N,L,$,x[E+11],14,643717713),$=t($,j,N,L,x[E],20,-373897302),L=t(L,$,j,N,x[E+5],5,-701558691),N=t(N,L,$,j,x[E+10],9,38016083),j=t(j,N,L,$,x[E+15],14,-660478335),$=t($,j,N,L,x[E+4],20,-405537848),L=t(L,$,j,N,x[E+9],5,568446438),N=t(N,L,$,j,x[E+14],9,-1019803690),j=t(j,N,L,$,x[E+3],14,-187363961),$=t($,j,N,L,x[E+8],20,1163531501),L=t(L,$,j,N,x[E+13],5,-1444681467),N=t(N,L,$,j,x[E+2],9,-51403784),j=t(j,N,L,$,x[E+7],14,1735328473),$=t($,j,N,L,x[E+12],20,-1926607734),L=h(L,$,j,N,x[E+5],4,-378558),N=h(N,L,$,j,x[E+8],11,-2022574463),j=h(j,N,L,$,x[E+11],16,1839030562),$=h($,j,N,L,x[E+14],23,-35309556),L=h(L,$,j,N,x[E+1],4,-1530992060),N=h(N,L,$,j,x[E+4],11,1272893353),j=h(j,N,L,$,x[E+7],16,-155497632),$=h($,j,N,L,x[E+10],23,-1094730640),L=h(L,$,j,N,x[E+13],4,681279174),N=h(N,L,$,j,x[E],11,-358537222),j=h(j,N,L,$,x[E+3],16,-722521979),$=h($,j,N,L,x[E+6],23,76029189),L=h(L,$,j,N,x[E+9],4,-640364487),N=h(N,L,$,j,x[E+12],11,-421815835),j=h(j,N,L,$,x[E+15],16,530742520),$=h($,j,N,L,x[E+2],23,-995338651),L=p(L,$,j,N,x[E],6,-198630844),N=p(N,L,$,j,x[E+7],10,1126891415),j=p(j,N,L,$,x[E+14],15,-1416354905),$=p($,j,N,L,x[E+5],21,-57434055),L=p(L,$,j,N,x[E+12],6,1700485571),N=p(N,L,$,j,x[E+3],10,-1894986606),j=p(j,N,L,$,x[E+10],15,-1051523),$=p($,j,N,L,x[E+1],21,-2054922799),L=p(L,$,j,N,x[E+8],6,1873313359),N=p(N,L,$,j,x[E+15],10,-30611744),j=p(j,N,L,$,x[E+6],15,-1560198380),$=p($,j,N,L,x[E+13],21,1309151649),L=p(L,$,j,N,x[E+4],6,-145523070),N=p(N,L,$,j,x[E+11],10,-1120210379),j=p(j,N,L,$,x[E+2],15,718787259),$=p($,j,N,L,x[E+9],21,-343485551),L=n(L,J),$=n($,Q),j=n(j,fn),N=n(N,rn);return[L,$,j,N]}function m(x){var q,E="",J=x.length*32;for(q=0;q<J;q+=8)E+=String.fromCharCode(x[q>>5]>>>q%32&255);return E}function z(x){var q,E=[];for(E[(x.length>>2)-1]=void 0,q=0;q<E.length;q+=1)E[q]=0;var J=x.length*8;for(q=0;q<J;q+=8)E[q>>5]|=(x.charCodeAt(q/8)&255)<<q%32;return E}function S(x){return m(f(z(x),x.length*8))}function F(x,q){var E,J=z(x),Q=[],fn=[],rn;for(Q[15]=fn[15]=void 0,J.length>16&&(J=f(J,x.length*8)),E=0;E<16;E+=1)Q[E]=J[E]^909522486,fn[E]=J[E]^1549556828;return rn=f(Q.concat(z(q)),512+q.length*8),m(f(fn.concat(rn),640))}function w(x){var q="0123456789abcdef",E="",J,Q;for(Q=0;Q<x.length;Q+=1)J=x.charCodeAt(Q),E+=q.charAt(J>>>4&15)+q.charAt(J&15);return E}function C(x){return unescape(encodeURIComponent(x))}function b(x){return S(C(x))}function T(x){return w(b(x))}function P(x,q){return F(C(x),C(q))}function R(x,q){return w(P(x,q))}function I(x,q,E){return q?E?P(q,x):R(q,x):E?b(x):T(x)}typeof define=="function"&&define.amd?define(function(){return I}):typeof Nr=="object"&&Nr.exports?Nr.exports=I:a.md5=I})(ya)});var Ea=W((T3,Ca)=>{"use strict";M();function wl(a,n){return Object.prototype.hasOwnProperty.call(a,n)}Ca.exports=function(a,n,u,o){n=n||"&",u=u||"=";var e={};if(typeof a!="string"||a.length===0)return e;var t=/\+/g;a=a.split(n);var h=1e3;o&&typeof o.maxKeys=="number"&&(h=o.maxKeys);var p=a.length;h>0&&p>h&&(p=h);for(var f=0;f<p;++f){var m=a[f].replace(t,"%20"),z=m.indexOf(u),S,F,w,C;z>=0?(S=m.substr(0,z),F=m.substr(z+1)):(S=m,F=""),w=decodeURIComponent(S),C=decodeURIComponent(F),wl(e,w)?Array.isArray(e[w])?e[w].push(C):e[w]=[e[w],C]:e[w]=C}return e}});var Da=W((O3,_a)=>{"use strict";M();var Wt=function(a){switch(typeof a){case"string":return a;case"boolean":return a?"true":"false";case"number":return isFinite(a)?a:"";default:return""}};_a.exports=function(a,n,u,o){return n=n||"&",u=u||"=",a===null&&(a=void 0),typeof a=="object"?Object.keys(a).map(function(e){var t=encodeURIComponent(Wt(e))+u;return Array.isArray(a[e])?a[e].map(function(h){return t+encodeURIComponent(Wt(h))}).join(n):t+encodeURIComponent(Wt(a[e]))}).join(n):o?encodeURIComponent(Wt(o))+u+encodeURIComponent(Wt(a)):""}});var qa=W(Vt=>{"use strict";M();Vt.decode=Vt.parse=Ea();Vt.encode=Vt.stringify=Da()});var Ba=W((j3,Sa)=>{M();var Cl=wa(),El=qa(),_l=/^[0-9a-f]{32}$/;function Dl(a){var n={},u={protocol:1,format:1};for(var o in a)u[o]||(n[o]=a[o]);return n}function za(a,n){if(a)return typeof a.protocol=="boolean"?a.protocol:a.protocol==="http"?!1:a.protocol==="https"?!0:void 0}function Aa(a){return a=typeof a=="string"?a.trim().toLowerCase():"unspecified",a.match(_l)?a:Cl(a)}function Ma(a){var n=El.stringify(Dl(a));return n&&"?"+n||""}var L3=Sa.exports={url:function(a,n,u){var o="//www.gravatar.com/avatar/";n&&n.cdn?(o=n.cdn+"/avatar/",delete n.cdn):(n&&n.protocol&&(u=za(n)),typeof u<"u"&&(o=u?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var e=Ma(n);return o+Aa(a)+e},profile_url:function(a,n,u){var o=n!=null&&n.format!=null?String(n.format):"json",e;if(n&&n.cdn)e=n.cdn+"/",delete n.cdn;else{n&&n.protocol&&(u=za(n));var e=u&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var t=Ma(n);return e+Aa(a)+"."+o+t}}});var Ta=W((U3,Ia)=>{M();Ia.exports=Ba()});var Pa=W((V3,Oa)=>{M();var ql=Ut(),zl=$t(),Al=Ta(),Ml={github:"github.com",twitter:"twitter.com",soundcloud:"soundcloud.com",pinterest:"pinterest.com",vimeo:"vimeo.com",behance:"behance.net",codepen:"codepen.io",foursquare:"foursquare.com",reddit:"reddit.com",spotify:"open.spotify.com",dribble:"dribbble.com",dribbble:"dribbble.com",facebook:"facebook.com",angellist:"angel.co",bitbucket:"bitbucket.org",exercism:"exercism.io",instagram:"instagram.com",googleplus:"plus.google.com",gratipay:"gratipay.com",hackernews:"news.ycombinator.com",lastfm:"last.fm",stackexchange:"stackexchange.com",stackoverflow:"stackoverflow.com",tumblr:"tumblr.com",youtube:"youtube.com",medium:"medium.com",blogger:"blogspot.com",meetup:"meetup.com",flickr:"flickr.com",telegram:"telegram.me"};function Sl(a){return Al.url(a,ql.gravatar,"https")}function Bl(a){return a.basics.picture||Sl(a.basics.email)}function Ra(a,n){var u=a.basics.profiles;return zl.find(u,function(o){return o.network.toLowerCase()===n.toLowerCase()})}function Il(a,n){var u,o,e=Ra(a,n);if(e.url)return e.url;if(o=e.username,u=Ml[n],!(!o&&!u))switch(n==="medium"&&!/^@.*/.test(o)&&(o="@"+o),n){case"skype":return"skype:"+o+"?call";case"reddit":case"spotify":case"lastfm":case"foursquare":case"youtube":return"//"+u+"/user/"+o;case"hackernews":return"//"+u+"/user?id="+o;case"stackexchange":case"stackoverflow":return"//"+u+"/users/"+o;case"tumblr":case"blogger":return"//"+o+"."+u;case"meetup":return"//"+u+"/members/"+o;case"flickr":return"//"+u+"/people/"+o;default:return"//"+u+"/"+o}}Oa.exports={getUrlForPicture:Bl,getProfile:Ra,getUrlForProfile:Il}});var Lr=W((co,pt)=>{M();(function(a,n){typeof co=="object"&&typeof pt<"u"?pt.exports=n():typeof define=="function"&&define.amd?define(n):a.moment=n()})(co,(function(){"use strict";var a;function n(){return a.apply(null,arguments)}function u(r){a=r}function o(r){return r instanceof Array||Object.prototype.toString.call(r)==="[object Array]"}function e(r){return r!=null&&Object.prototype.toString.call(r)==="[object Object]"}function t(r,i){return Object.prototype.hasOwnProperty.call(r,i)}function h(r){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(r).length===0;var i;for(i in r)if(t(r,i))return!1;return!0}function p(r){return r===void 0}function f(r){return typeof r=="number"||Object.prototype.toString.call(r)==="[object Number]"}function m(r){return r instanceof Date||Object.prototype.toString.call(r)==="[object Date]"}function z(r,i){var s=[],l,g=r.length;for(l=0;l<g;++l)s.push(i(r[l],l));return s}function S(r,i){for(var s in i)t(i,s)&&(r[s]=i[s]);return t(i,"toString")&&(r.toString=i.toString),t(i,"valueOf")&&(r.valueOf=i.valueOf),r}function F(r,i,s,l){return D(r,i,s,l,!0).utc()}function w(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function C(r){return r._pf==null&&(r._pf=w()),r._pf}var b;Array.prototype.some?b=Array.prototype.some:b=function(r){var i=Object(this),s=i.length>>>0,l;for(l=0;l<s;l++)if(l in i&&r.call(this,i[l],l,i))return!0;return!1};function T(r){var i=null,s=!1,l=r._d&&!isNaN(r._d.getTime());if(l&&(i=C(r),s=b.call(i.parsedDateParts,function(g){return g!=null}),l=i.overflow<0&&!i.empty&&!i.invalidEra&&!i.invalidMonth&&!i.invalidWeekday&&!i.weekdayMismatch&&!i.nullInput&&!i.invalidFormat&&!i.userInvalidated&&(!i.meridiem||i.meridiem&&s),r._strict&&(l=l&&i.charsLeftOver===0&&i.unusedTokens.length===0&&i.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(r))r._isValid=l;else return l;return r._isValid}function P(r){var i=F(NaN);return r!=null?S(C(i),r):C(i).userInvalidated=!0,i}var R=n.momentProperties=[],I=!1;function x(r,i){var s,l,g,y=R.length;if(p(i._isAMomentObject)||(r._isAMomentObject=i._isAMomentObject),p(i._i)||(r._i=i._i),p(i._f)||(r._f=i._f),p(i._l)||(r._l=i._l),p(i._strict)||(r._strict=i._strict),p(i._tzm)||(r._tzm=i._tzm),p(i._isUTC)||(r._isUTC=i._isUTC),p(i._offset)||(r._offset=i._offset),p(i._pf)||(r._pf=C(i)),p(i._locale)||(r._locale=i._locale),y>0)for(s=0;s<y;s++)l=R[s],g=i[l],p(g)||(r[l]=g);return r}function q(r){x(this,r),this._d=new Date(r._d!=null?r._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),I===!1&&(I=!0,n.updateOffset(this),I=!1)}function E(r){return r instanceof q||r!=null&&r._isAMomentObject!=null}function J(r){n.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+r)}function Q(r,i){var s=!0;return S(function(){if(n.deprecationHandler!=null&&n.deprecationHandler(null,r),s){var l=[],g,y,O,Z=arguments.length;for(y=0;y<Z;y++){if(g="",typeof arguments[y]=="object"){g+=`
[`+y+"] ";for(O in arguments[0])t(arguments[0],O)&&(g+=O+": "+arguments[0][O]+", ");g=g.slice(0,-2)}else g=arguments[y];l.push(g)}J(r+`
Arguments: `+Array.prototype.slice.call(l).join("")+`
`+new Error().stack),s=!1}return i.apply(this,arguments)},i)}var fn={};function rn(r,i){n.deprecationHandler!=null&&n.deprecationHandler(r,i),fn[r]||(J(i),fn[r]=!0)}n.suppressDeprecationWarnings=!1,n.deprecationHandler=null;function L(r){return typeof Function<"u"&&r instanceof Function||Object.prototype.toString.call(r)==="[object Function]"}function $(r){var i,s;for(s in r)t(r,s)&&(i=r[s],L(i)?this[s]=i:this["_"+s]=i);this._config=r,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function j(r,i){var s=S({},r),l;for(l in i)t(i,l)&&(e(r[l])&&e(i[l])?(s[l]={},S(s[l],r[l]),S(s[l],i[l])):i[l]!=null?s[l]=i[l]:delete s[l]);for(l in r)t(r,l)&&!t(i,l)&&e(r[l])&&(s[l]=S({},s[l]));return s}function N(r){r!=null&&this.set(r)}var Gn;Object.keys?Gn=Object.keys:Gn=function(r){var i,s=[];for(i in r)t(r,i)&&s.push(i);return s};var Be={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function ve(r,i,s){var l=this._calendar[r]||this._calendar.sameElse;return L(l)?l.call(i,s):l}function Sn(r,i,s){var l=""+Math.abs(r),g=i-l.length,y=r>=0;return(y?s?"+":"":"-")+Math.pow(10,Math.max(0,g)).toString().substr(1)+l}var Ft=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Fn=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Je={},oe={};function X(r,i,s,l){var g=l;typeof l=="string"&&(g=function(){return this[l]()}),r&&(oe[r]=g),i&&(oe[i[0]]=function(){return Sn(g.apply(this,arguments),i[1],i[2])}),s&&(oe[s]=function(){return this.localeData().ordinal(g.apply(this,arguments),r)})}function oi(r){return r.match(/\[[\s\S]/)?r.replace(/^\[|\]$/g,""):r.replace(/\\/g,"")}function ai(r){var i=r.match(Ft),s,l;for(s=0,l=i.length;s<l;s++)oe[i[s]]?i[s]=oe[i[s]]:i[s]=oi(i[s]);return function(g){var y="",O;for(O=0;O<l;O++)y+=L(i[O])?i[O].call(g,r):i[O];return y}}function ae(r,i){return r.isValid()?(i=Zn(i,r.localeData()),Je[i]=Je[i]||ai(i),Je[i](r)):r.localeData().invalidDate()}function Zn(r,i){var s=5;function l(g){return i.longDateFormat(g)||g}for(Fn.lastIndex=0;s>=0&&Fn.test(r);)r=r.replace(Fn,l),Fn.lastIndex=0,s-=1;return r}var Xn={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function yt(r){var i=this._longDateFormat[r],s=this._longDateFormat[r.toUpperCase()];return i||!s?i:(this._longDateFormat[r]=s.match(Ft).map(function(l){return l==="MMMM"||l==="MM"||l==="DD"||l==="dddd"?l.slice(1):l}).join(""),this._longDateFormat[r])}var wt="Invalid date";function ui(){return this._invalidDate}var Kt="%d",nr=/\d{1,2}/;function er(r){return this._ordinal.replace("%d",r)}var tr={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Qe(r,i,s,l){var g=this._relativeTime[s];return L(g)?g(r,i,s,l):g.replace(/%d/i,r)}function si(r,i){var s=this._relativeTime[r>0?"future":"past"];return L(s)?s(i):s.replace(/%s/i,i)}var rr={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Mn(r){return typeof r=="string"?rr[r]||rr[r.toLowerCase()]:void 0}function Ke(r){var i={},s,l;for(l in r)t(r,l)&&(s=Mn(l),s&&(i[s]=r[l]));return i}var wn={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function li(r){var i=[],s;for(s in r)t(r,s)&&i.push({unit:s,priority:wn[s]});return i.sort(function(l,g){return l.priority-g.priority}),i}var Ct=/\d/,cn=/\d\d/,ir=/\d{3}/,nt=/\d{4}/,on=/[+-]?\d{6}/,gn=/\d\d?/,Et=/\d\d\d\d?/,or=/\d\d\d\d\d\d?/,Jn=/\d{1,3}/,Ie=/\d{1,4}/,ke=/[+-]?\d{1,6}/,ue=/\d+/,xe=/[+-]?\d+/,ar=/Z|[+-]\d\d:?\d\d/gi,et=/Z|[+-]\d\d(?::?\d\d)?/gi,ur=/[+-]?\d+(\.\d{1,3})?/,Te=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Fe=/^[1-9]\d?/,_t=/^([1-9]\d|\d)/,tt;tt={};function G(r,i,s){tt[r]=L(i)?i:function(l,g){return l&&s?s:i}}function ye(r,i){return t(tt,r)?tt[r](i._strict,i._locale):new RegExp(ci(r))}function ci(r){return In(r.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(i,s,l,g,y){return s||l||g||y}))}function In(r){return r.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function zn(r){return r<0?Math.ceil(r)||0:Math.floor(r)}function tn(r){var i=+r,s=0;return i!==0&&isFinite(i)&&(s=zn(i)),s}var rt={};function ln(r,i){var s,l=i,g;for(typeof r=="string"&&(r=[r]),f(i)&&(l=function(y,O){O[i]=tn(y)}),g=r.length,s=0;s<g;s++)rt[r[s]]=l}function we(r,i){ln(r,function(s,l,g,y){g._w=g._w||{},i(s,g._w,g,y)})}function di(r,i,s){i!=null&&t(rt,r)&&rt[r](i,s._a,s,r)}function Re(r){return r%4===0&&r%100!==0||r%400===0}var Cn=0,Pn=1,Tn=2,kn=3,_n=4,Bn=5,Qn=6,pi=7,Dt=8;X("Y",0,0,function(){var r=this.year();return r<=9999?Sn(r,4):"+"+r}),X(0,["YY",2],0,function(){return this.year()%100}),X(0,["YYYY",4],0,"year"),X(0,["YYYYY",5],0,"year"),X(0,["YYYYYY",6,!0],0,"year"),G("Y",xe),G("YY",gn,cn),G("YYYY",Ie,nt),G("YYYYY",ke,on),G("YYYYYY",ke,on),ln(["YYYYY","YYYYYY"],Cn),ln("YYYY",function(r,i){i[Cn]=r.length===2?n.parseTwoDigitYear(r):tn(r)}),ln("YY",function(r,i){i[Cn]=n.parseTwoDigitYear(r)}),ln("Y",function(r,i){i[Cn]=parseInt(r,10)});function Yn(r){return Re(r)?366:365}n.parseTwoDigitYear=function(r){return tn(r)+(tn(r)>68?1900:2e3)};var it=se("FullYear",!0);function Oe(){return Re(this.year())}function se(r,i){return function(s){return s!=null?(Dn(this,r,s),n.updateOffset(this,i),this):le(this,r)}}function le(r,i){if(!r.isValid())return NaN;var s=r._d,l=r._isUTC;switch(i){case"Milliseconds":return l?s.getUTCMilliseconds():s.getMilliseconds();case"Seconds":return l?s.getUTCSeconds():s.getSeconds();case"Minutes":return l?s.getUTCMinutes():s.getMinutes();case"Hours":return l?s.getUTCHours():s.getHours();case"Date":return l?s.getUTCDate():s.getDate();case"Day":return l?s.getUTCDay():s.getDay();case"Month":return l?s.getUTCMonth():s.getMonth();case"FullYear":return l?s.getUTCFullYear():s.getFullYear();default:return NaN}}function Dn(r,i,s){var l,g,y,O,Z;if(!(!r.isValid()||isNaN(s))){switch(l=r._d,g=r._isUTC,i){case"Milliseconds":return void(g?l.setUTCMilliseconds(s):l.setMilliseconds(s));case"Seconds":return void(g?l.setUTCSeconds(s):l.setSeconds(s));case"Minutes":return void(g?l.setUTCMinutes(s):l.setMinutes(s));case"Hours":return void(g?l.setUTCHours(s):l.setHours(s));case"Date":return void(g?l.setUTCDate(s):l.setDate(s));case"FullYear":break;default:return}y=s,O=r.month(),Z=r.date(),Z=Z===29&&O===1&&!Re(y)?28:Z,g?l.setUTCFullYear(y,O,Z):l.setFullYear(y,O,Z)}}function fi(r){return r=Mn(r),L(this[r])?this[r]():this}function sr(r,i){if(typeof r=="object"){r=Ke(r);var s=li(r),l,g=s.length;for(l=0;l<g;l++)this[s[l].unit](r[s[l].unit])}else if(r=Mn(r),L(this[r]))return this[r](i);return this}function gi(r,i){return(r%i+i)%i}var mn;Array.prototype.indexOf?mn=Array.prototype.indexOf:mn=function(r){var i;for(i=0;i<this.length;++i)if(this[i]===r)return i;return-1};function Pe(r,i){if(isNaN(r)||isNaN(i))return NaN;var s=gi(i,12);return r+=(i-s)/12,s===1?Re(r)?29:28:31-s%7%2}X("M",["MM",2],"Mo",function(){return this.month()+1}),X("MMM",0,0,function(r){return this.localeData().monthsShort(this,r)}),X("MMMM",0,0,function(r){return this.localeData().months(this,r)}),G("M",gn,Fe),G("MM",gn,cn),G("MMM",function(r,i){return i.monthsShortRegex(r)}),G("MMMM",function(r,i){return i.monthsRegex(r)}),ln(["M","MM"],function(r,i){i[Pn]=tn(r)-1}),ln(["MMM","MMMM"],function(r,i,s,l){var g=s._locale.monthsParse(r,l,s._strict);g!=null?i[Pn]=g:C(s).invalidMonth=r});var Ye="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),zt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,hi=Te,bi=Te;function mi(r,i){return r?o(this._months)?this._months[r.month()]:this._months[(this._months.isFormat||zt).test(i)?"format":"standalone"][r.month()]:o(this._months)?this._months:this._months.standalone}function vi(r,i){return r?o(this._monthsShort)?this._monthsShort[r.month()]:this._monthsShort[zt.test(i)?"format":"standalone"][r.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function At(r,i,s){var l,g,y,O=r.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],l=0;l<12;++l)y=F([2e3,l]),this._shortMonthsParse[l]=this.monthsShort(y,"").toLocaleLowerCase(),this._longMonthsParse[l]=this.months(y,"").toLocaleLowerCase();return s?i==="MMM"?(g=mn.call(this._shortMonthsParse,O),g!==-1?g:null):(g=mn.call(this._longMonthsParse,O),g!==-1?g:null):i==="MMM"?(g=mn.call(this._shortMonthsParse,O),g!==-1?g:(g=mn.call(this._longMonthsParse,O),g!==-1?g:null)):(g=mn.call(this._longMonthsParse,O),g!==-1?g:(g=mn.call(this._shortMonthsParse,O),g!==-1?g:null))}function ki(r,i,s){var l,g,y;if(this._monthsParseExact)return At.call(this,r,i,s);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),l=0;l<12;l++){if(g=F([2e3,l]),s&&!this._longMonthsParse[l]&&(this._longMonthsParse[l]=new RegExp("^"+this.months(g,"").replace(".","")+"$","i"),this._shortMonthsParse[l]=new RegExp("^"+this.monthsShort(g,"").replace(".","")+"$","i")),!s&&!this._monthsParse[l]&&(y="^"+this.months(g,"")+"|^"+this.monthsShort(g,""),this._monthsParse[l]=new RegExp(y.replace(".",""),"i")),s&&i==="MMMM"&&this._longMonthsParse[l].test(r))return l;if(s&&i==="MMM"&&this._shortMonthsParse[l].test(r))return l;if(!s&&this._monthsParse[l].test(r))return l}}function lr(r,i){if(!r.isValid())return r;if(typeof i=="string"){if(/^\d+$/.test(i))i=tn(i);else if(i=r.localeData().monthsParse(i),!f(i))return r}var s=i,l=r.date();return l=l<29?l:Math.min(l,Pe(r.year(),s)),r._isUTC?r._d.setUTCMonth(s,l):r._d.setMonth(s,l),r}function cr(r){return r!=null?(lr(this,r),n.updateOffset(this,!0),this):le(this,"Month")}function xi(){return Pe(this.year(),this.month())}function Fi(r){return this._monthsParseExact?(t(this,"_monthsRegex")||dr.call(this),r?this._monthsShortStrictRegex:this._monthsShortRegex):(t(this,"_monthsShortRegex")||(this._monthsShortRegex=hi),this._monthsShortStrictRegex&&r?this._monthsShortStrictRegex:this._monthsShortRegex)}function yi(r){return this._monthsParseExact?(t(this,"_monthsRegex")||dr.call(this),r?this._monthsStrictRegex:this._monthsRegex):(t(this,"_monthsRegex")||(this._monthsRegex=bi),this._monthsStrictRegex&&r?this._monthsStrictRegex:this._monthsRegex)}function dr(){function r(K,an){return an.length-K.length}var i=[],s=[],l=[],g,y,O,Z;for(g=0;g<12;g++)y=F([2e3,g]),O=In(this.monthsShort(y,"")),Z=In(this.months(y,"")),i.push(O),s.push(Z),l.push(Z),l.push(O);i.sort(r),s.sort(r),l.sort(r),this._monthsRegex=new RegExp("^("+l.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function wi(r,i,s,l,g,y,O){var Z;return r<100&&r>=0?(Z=new Date(r+400,i,s,l,g,y,O),isFinite(Z.getFullYear())&&Z.setFullYear(r)):Z=new Date(r,i,s,l,g,y,O),Z}function Ne(r){var i,s;return r<100&&r>=0?(s=Array.prototype.slice.call(arguments),s[0]=r+400,i=new Date(Date.UTC.apply(null,s)),isFinite(i.getUTCFullYear())&&i.setUTCFullYear(r)):i=new Date(Date.UTC.apply(null,arguments)),i}function Le(r,i,s){var l=7+i-s,g=(7+Ne(r,0,l).getUTCDay()-i)%7;return-g+l-1}function ce(r,i,s,l,g){var y=(7+s-l)%7,O=Le(r,l,g),Z=1+7*(i-1)+y+O,K,an;return Z<=0?(K=r-1,an=Yn(K)+Z):Z>Yn(r)?(K=r+1,an=Z-Yn(r)):(K=r,an=Z),{year:K,dayOfYear:an}}function Ce(r,i,s){var l=Le(r.year(),i,s),g=Math.floor((r.dayOfYear()-l-1)/7)+1,y,O;return g<1?(O=r.year()-1,y=g+vn(O,i,s)):g>vn(r.year(),i,s)?(y=g-vn(r.year(),i,s),O=r.year()+1):(O=r.year(),y=g),{week:y,year:O}}function vn(r,i,s){var l=Le(r,i,s),g=Le(r+1,i,s);return(Yn(r)-l+g)/7}X("w",["ww",2],"wo","week"),X("W",["WW",2],"Wo","isoWeek"),G("w",gn,Fe),G("ww",gn,cn),G("W",gn,Fe),G("WW",gn,cn),we(["w","ww","W","WW"],function(r,i,s,l){i[l.substr(0,1)]=tn(r)});function Ee(r){return Ce(r,this._week.dow,this._week.doy).week}var Ci={dow:0,doy:6};function Ei(){return this._week.dow}function pr(){return this._week.doy}function _i(r){var i=this.localeData().week(this);return r==null?i:this.add((r-i)*7,"d")}function Di(r){var i=Ce(this,1,4).week;return r==null?i:this.add((r-i)*7,"d")}X("d",0,"do","day"),X("dd",0,0,function(r){return this.localeData().weekdaysMin(this,r)}),X("ddd",0,0,function(r){return this.localeData().weekdaysShort(this,r)}),X("dddd",0,0,function(r){return this.localeData().weekdays(this,r)}),X("e",0,0,"weekday"),X("E",0,0,"isoWeekday"),G("d",gn),G("e",gn),G("E",gn),G("dd",function(r,i){return i.weekdaysMinRegex(r)}),G("ddd",function(r,i){return i.weekdaysShortRegex(r)}),G("dddd",function(r,i){return i.weekdaysRegex(r)}),we(["dd","ddd","dddd"],function(r,i,s,l){var g=s._locale.weekdaysParse(r,l,s._strict);g!=null?i.d=g:C(s).invalidWeekday=r}),we(["d","e","E"],function(r,i,s,l){i[l]=tn(r)});function qi(r,i){return typeof r!="string"?r:isNaN(r)?(r=i.weekdaysParse(r),typeof r=="number"?r:null):parseInt(r,10)}function zi(r,i){return typeof r=="string"?i.weekdaysParse(r)%7||7:isNaN(r)?null:r}function je(r,i){return r.slice(i,7).concat(r.slice(0,i))}var Ai="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),fr="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),gr="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Mi=Te,hr=Te,br=Te;function Mt(r,i){var s=o(this._weekdays)?this._weekdays:this._weekdays[r&&r!==!0&&this._weekdays.isFormat.test(i)?"format":"standalone"];return r===!0?je(s,this._week.dow):r?s[r.day()]:s}function mr(r){return r===!0?je(this._weekdaysShort,this._week.dow):r?this._weekdaysShort[r.day()]:this._weekdaysShort}function vr(r){return r===!0?je(this._weekdaysMin,this._week.dow):r?this._weekdaysMin[r.day()]:this._weekdaysMin}function kr(r,i,s){var l,g,y,O=r.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],l=0;l<7;++l)y=F([2e3,1]).day(l),this._minWeekdaysParse[l]=this.weekdaysMin(y,"").toLocaleLowerCase(),this._shortWeekdaysParse[l]=this.weekdaysShort(y,"").toLocaleLowerCase(),this._weekdaysParse[l]=this.weekdays(y,"").toLocaleLowerCase();return s?i==="dddd"?(g=mn.call(this._weekdaysParse,O),g!==-1?g:null):i==="ddd"?(g=mn.call(this._shortWeekdaysParse,O),g!==-1?g:null):(g=mn.call(this._minWeekdaysParse,O),g!==-1?g:null):i==="dddd"?(g=mn.call(this._weekdaysParse,O),g!==-1||(g=mn.call(this._shortWeekdaysParse,O),g!==-1)?g:(g=mn.call(this._minWeekdaysParse,O),g!==-1?g:null)):i==="ddd"?(g=mn.call(this._shortWeekdaysParse,O),g!==-1||(g=mn.call(this._weekdaysParse,O),g!==-1)?g:(g=mn.call(this._minWeekdaysParse,O),g!==-1?g:null)):(g=mn.call(this._minWeekdaysParse,O),g!==-1||(g=mn.call(this._weekdaysParse,O),g!==-1)?g:(g=mn.call(this._shortWeekdaysParse,O),g!==-1?g:null))}function xr(r,i,s){var l,g,y;if(this._weekdaysParseExact)return kr.call(this,r,i,s);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),l=0;l<7;l++){if(g=F([2e3,1]).day(l),s&&!this._fullWeekdaysParse[l]&&(this._fullWeekdaysParse[l]=new RegExp("^"+this.weekdays(g,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[l]=new RegExp("^"+this.weekdaysShort(g,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[l]=new RegExp("^"+this.weekdaysMin(g,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[l]||(y="^"+this.weekdays(g,"")+"|^"+this.weekdaysShort(g,"")+"|^"+this.weekdaysMin(g,""),this._weekdaysParse[l]=new RegExp(y.replace(".",""),"i")),s&&i==="dddd"&&this._fullWeekdaysParse[l].test(r))return l;if(s&&i==="ddd"&&this._shortWeekdaysParse[l].test(r))return l;if(s&&i==="dd"&&this._minWeekdaysParse[l].test(r))return l;if(!s&&this._weekdaysParse[l].test(r))return l}}function Si(r){if(!this.isValid())return r!=null?this:NaN;var i=le(this,"Day");return r!=null?(r=qi(r,this.localeData()),this.add(r-i,"d")):i}function St(r){if(!this.isValid())return r!=null?this:NaN;var i=(this.day()+7-this.localeData()._week.dow)%7;return r==null?i:this.add(r-i,"d")}function Bi(r){if(!this.isValid())return r!=null?this:NaN;if(r!=null){var i=zi(r,this.localeData());return this.day(this.day()%7?i:i-7)}else return this.day()||7}function Nn(r){return this._weekdaysParseExact?(t(this,"_weekdaysRegex")||$e.call(this),r?this._weekdaysStrictRegex:this._weekdaysRegex):(t(this,"_weekdaysRegex")||(this._weekdaysRegex=Mi),this._weekdaysStrictRegex&&r?this._weekdaysStrictRegex:this._weekdaysRegex)}function de(r){return this._weekdaysParseExact?(t(this,"_weekdaysRegex")||$e.call(this),r?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(t(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=hr),this._weekdaysShortStrictRegex&&r?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Fr(r){return this._weekdaysParseExact?(t(this,"_weekdaysRegex")||$e.call(this),r?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(t(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=br),this._weekdaysMinStrictRegex&&r?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function $e(){function r(An,be){return be.length-An.length}var i=[],s=[],l=[],g=[],y,O,Z,K,an;for(y=0;y<7;y++)O=F([2e3,1]).day(y),Z=In(this.weekdaysMin(O,"")),K=In(this.weekdaysShort(O,"")),an=In(this.weekdays(O,"")),i.push(Z),s.push(K),l.push(an),g.push(Z),g.push(K),g.push(an);i.sort(r),s.sort(r),l.sort(r),g.sort(r),this._weekdaysRegex=new RegExp("^("+g.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+i.join("|")+")","i")}function ot(){return this.hours()%12||12}function _e(){return this.hours()||24}X("H",["HH",2],0,"hour"),X("h",["hh",2],0,ot),X("k",["kk",2],0,_e),X("hmm",0,0,function(){return""+ot.apply(this)+Sn(this.minutes(),2)}),X("hmmss",0,0,function(){return""+ot.apply(this)+Sn(this.minutes(),2)+Sn(this.seconds(),2)}),X("Hmm",0,0,function(){return""+this.hours()+Sn(this.minutes(),2)}),X("Hmmss",0,0,function(){return""+this.hours()+Sn(this.minutes(),2)+Sn(this.seconds(),2)});function yr(r,i){X(r,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),i)})}yr("a",!0),yr("A",!1);function Bt(r,i){return i._meridiemParse}G("a",Bt),G("A",Bt),G("H",gn,_t),G("h",gn,Fe),G("k",gn,Fe),G("HH",gn,cn),G("hh",gn,cn),G("kk",gn,cn),G("hmm",Et),G("hmmss",or),G("Hmm",Et),G("Hmmss",or),ln(["H","HH"],kn),ln(["k","kk"],function(r,i,s){var l=tn(r);i[kn]=l===24?0:l}),ln(["a","A"],function(r,i,s){s._isPm=s._locale.isPM(r),s._meridiem=r}),ln(["h","hh"],function(r,i,s){i[kn]=tn(r),C(s).bigHour=!0}),ln("hmm",function(r,i,s){var l=r.length-2;i[kn]=tn(r.substr(0,l)),i[_n]=tn(r.substr(l)),C(s).bigHour=!0}),ln("hmmss",function(r,i,s){var l=r.length-4,g=r.length-2;i[kn]=tn(r.substr(0,l)),i[_n]=tn(r.substr(l,2)),i[Bn]=tn(r.substr(g)),C(s).bigHour=!0}),ln("Hmm",function(r,i,s){var l=r.length-2;i[kn]=tn(r.substr(0,l)),i[_n]=tn(r.substr(l))}),ln("Hmmss",function(r,i,s){var l=r.length-4,g=r.length-2;i[kn]=tn(r.substr(0,l)),i[_n]=tn(r.substr(l,2)),i[Bn]=tn(r.substr(g))});function wr(r){return(r+"").toLowerCase().charAt(0)==="p"}var Ln=/[ap]\.?m?\.?/i,Ii=se("Hours",!0);function It(r,i,s){return r>11?s?"pm":"PM":s?"am":"AM"}var Cr={calendar:Be,longDateFormat:Xn,invalidDate:wt,ordinal:Kt,dayOfMonthOrdinalParse:nr,relativeTime:tr,months:Ye,monthsShort:qt,week:Ci,weekdays:Ai,weekdaysMin:gr,weekdaysShort:fr,meridiemParse:Ln},bn={},Ue={},We;function Er(r,i){var s,l=Math.min(r.length,i.length);for(s=0;s<l;s+=1)if(r[s]!==i[s])return s;return l}function Tt(r){return r&&r.toLowerCase().replace("_","-")}function Ti(r){for(var i=0,s,l,g,y;i<r.length;){for(y=Tt(r[i]).split("-"),s=y.length,l=Tt(r[i+1]),l=l?l.split("-"):null;s>0;){if(g=pe(y.slice(0,s).join("-")),g)return g;if(l&&l.length>=s&&Er(y,l)>=s-1)break;s--}i++}return We}function Ri(r){return!!(r&&r.match("^[^/\\\\]*$"))}function pe(r){var i=null,s;if(bn[r]===void 0&&typeof pt<"u"&&pt&&pt.exports&&Ri(r))try{i=We._abbr,s=aa,s("./locale/"+r),Kn(i)}catch{bn[r]=null}return bn[r]}function Kn(r,i){var s;return r&&(p(i)?s=jn(r):s=Rt(r,i),s?We=s:typeof console<"u"&&console.warn&&console.warn("Locale "+r+" not found. Did you forget to load it?")),We._abbr}function Rt(r,i){if(i!==null){var s,l=Cr;if(i.abbr=r,bn[r]!=null)rn("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),l=bn[r]._config;else if(i.parentLocale!=null)if(bn[i.parentLocale]!=null)l=bn[i.parentLocale]._config;else if(s=pe(i.parentLocale),s!=null)l=s._config;else return Ue[i.parentLocale]||(Ue[i.parentLocale]=[]),Ue[i.parentLocale].push({name:r,config:i}),null;return bn[r]=new N(j(l,i)),Ue[r]&&Ue[r].forEach(function(g){Rt(g.name,g.config)}),Kn(r),bn[r]}else return delete bn[r],null}function Oi(r,i){if(i!=null){var s,l,g=Cr;bn[r]!=null&&bn[r].parentLocale!=null?bn[r].set(j(bn[r]._config,i)):(l=pe(r),l!=null&&(g=l._config),i=j(g,i),l==null&&(i.abbr=r),s=new N(i),s.parentLocale=bn[r],bn[r]=s),Kn(r)}else bn[r]!=null&&(bn[r].parentLocale!=null?(bn[r]=bn[r].parentLocale,r===Kn()&&Kn(r)):bn[r]!=null&&delete bn[r]);return bn[r]}function jn(r){var i;if(r&&r._locale&&r._locale._abbr&&(r=r._locale._abbr),!r)return We;if(!o(r)){if(i=pe(r),i)return i;r=[r]}return Ti(r)}function Pi(){return Gn(bn)}function Ot(r){var i,s=r._a;return s&&C(r).overflow===-2&&(i=s[Pn]<0||s[Pn]>11?Pn:s[Tn]<1||s[Tn]>Pe(s[Cn],s[Pn])?Tn:s[kn]<0||s[kn]>24||s[kn]===24&&(s[_n]!==0||s[Bn]!==0||s[Qn]!==0)?kn:s[_n]<0||s[_n]>59?_n:s[Bn]<0||s[Bn]>59?Bn:s[Qn]<0||s[Qn]>999?Qn:-1,C(r)._overflowDayOfYear&&(i<Cn||i>Tn)&&(i=Tn),C(r)._overflowWeeks&&i===-1&&(i=pi),C(r)._overflowWeekday&&i===-1&&(i=Dt),C(r).overflow=i),r}var _r=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Yi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Dr=/Z|[+-]\d\d(?::?\d\d)?/,De=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],qe=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ni=/^\/?Date\((-?\d+)/i,Li=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,ji={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Pt(r){var i,s,l=r._i,g=_r.exec(l)||Yi.exec(l),y,O,Z,K,an=De.length,An=qe.length;if(g){for(C(r).iso=!0,i=0,s=an;i<s;i++)if(De[i][1].exec(g[1])){O=De[i][0],y=De[i][2]!==!1;break}if(O==null){r._isValid=!1;return}if(g[3]){for(i=0,s=An;i<s;i++)if(qe[i][1].exec(g[3])){Z=(g[2]||" ")+qe[i][0];break}if(Z==null){r._isValid=!1;return}}if(!y&&Z!=null){r._isValid=!1;return}if(g[4])if(Dr.exec(g[4]))K="Z";else{r._isValid=!1;return}r._f=O+(Z||"")+(K||""),Lt(r)}else r._isValid=!1}function $i(r,i,s,l,g,y){var O=[Yt(r),qt.indexOf(i),parseInt(s,10),parseInt(l,10),parseInt(g,10)];return y&&O.push(parseInt(y,10)),O}function Yt(r){var i=parseInt(r,10);return i<=49?2e3+i:i<=999?1900+i:i}function Ui(r){return r.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Wi(r,i,s){if(r){var l=fr.indexOf(r),g=new Date(i[0],i[1],i[2]).getDay();if(l!==g)return C(s).weekdayMismatch=!0,s._isValid=!1,!1}return!0}function Nt(r,i,s){if(r)return ji[r];if(i)return 0;var l=parseInt(s,10),g=l%100,y=(l-g)/100;return y*60+g}function qr(r){var i=Li.exec(Ui(r._i)),s;if(i){if(s=$i(i[4],i[3],i[2],i[5],i[6],i[7]),!Wi(i[1],s,r))return;r._a=s,r._tzm=Nt(i[8],i[9],i[10]),r._d=Ne.apply(null,r._a),r._d.setUTCMinutes(r._d.getUTCMinutes()-r._tzm),C(r).rfc2822=!0}else r._isValid=!1}function Vi(r){var i=Ni.exec(r._i);if(i!==null){r._d=new Date(+i[1]);return}if(Pt(r),r._isValid===!1)delete r._isValid;else return;if(qr(r),r._isValid===!1)delete r._isValid;else return;r._strict?r._isValid=!1:n.createFromInputFallback(r)}n.createFromInputFallback=Q("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(r){r._d=new Date(r._i+(r._useUTC?" UTC":""))});function ze(r,i,s){return r??i??s}function Hi(r){var i=new Date(n.now());return r._useUTC?[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]:[i.getFullYear(),i.getMonth(),i.getDate()]}function Ve(r){var i,s,l=[],g,y,O;if(!r._d){for(g=Hi(r),r._w&&r._a[Tn]==null&&r._a[Pn]==null&&zr(r),r._dayOfYear!=null&&(O=ze(r._a[Cn],g[Cn]),(r._dayOfYear>Yn(O)||r._dayOfYear===0)&&(C(r)._overflowDayOfYear=!0),s=Ne(O,0,r._dayOfYear),r._a[Pn]=s.getUTCMonth(),r._a[Tn]=s.getUTCDate()),i=0;i<3&&r._a[i]==null;++i)r._a[i]=l[i]=g[i];for(;i<7;i++)r._a[i]=l[i]=r._a[i]==null?i===2?1:0:r._a[i];r._a[kn]===24&&r._a[_n]===0&&r._a[Bn]===0&&r._a[Qn]===0&&(r._nextDay=!0,r._a[kn]=0),r._d=(r._useUTC?Ne:wi).apply(null,l),y=r._useUTC?r._d.getUTCDay():r._d.getDay(),r._tzm!=null&&r._d.setUTCMinutes(r._d.getUTCMinutes()-r._tzm),r._nextDay&&(r._a[kn]=24),r._w&&typeof r._w.d<"u"&&r._w.d!==y&&(C(r).weekdayMismatch=!0)}}function zr(r){var i,s,l,g,y,O,Z,K,an;i=r._w,i.GG!=null||i.W!=null||i.E!=null?(y=1,O=4,s=ze(i.GG,r._a[Cn],Ce(B(),1,4).year),l=ze(i.W,1),g=ze(i.E,1),(g<1||g>7)&&(K=!0)):(y=r._locale._week.dow,O=r._locale._week.doy,an=Ce(B(),y,O),s=ze(i.gg,r._a[Cn],an.year),l=ze(i.w,an.week),i.d!=null?(g=i.d,(g<0||g>6)&&(K=!0)):i.e!=null?(g=i.e+y,(i.e<0||i.e>6)&&(K=!0)):g=y),l<1||l>vn(s,y,O)?C(r)._overflowWeeks=!0:K!=null?C(r)._overflowWeekday=!0:(Z=ce(s,l,g,y,O),r._a[Cn]=Z.year,r._dayOfYear=Z.dayOfYear)}n.ISO_8601=function(){},n.RFC_2822=function(){};function Lt(r){if(r._f===n.ISO_8601){Pt(r);return}if(r._f===n.RFC_2822){qr(r);return}r._a=[],C(r).empty=!0;var i=""+r._i,s,l,g,y,O,Z=i.length,K=0,an,An;for(g=Zn(r._f,r._locale).match(Ft)||[],An=g.length,s=0;s<An;s++)y=g[s],l=(i.match(ye(y,r))||[])[0],l&&(O=i.substr(0,i.indexOf(l)),O.length>0&&C(r).unusedInput.push(O),i=i.slice(i.indexOf(l)+l.length),K+=l.length),oe[y]?(l?C(r).empty=!1:C(r).unusedTokens.push(y),di(y,l,r)):r._strict&&!l&&C(r).unusedTokens.push(y);C(r).charsLeftOver=Z-K,i.length>0&&C(r).unusedInput.push(i),r._a[kn]<=12&&C(r).bigHour===!0&&r._a[kn]>0&&(C(r).bigHour=void 0),C(r).parsedDateParts=r._a.slice(0),C(r).meridiem=r._meridiem,r._a[kn]=jt(r._locale,r._a[kn],r._meridiem),an=C(r).era,an!==null&&(r._a[Cn]=r._locale.erasConvertYear(an,r._a[Cn])),Ve(r),Ot(r)}function jt(r,i,s){var l;return s==null?i:r.meridiemHour!=null?r.meridiemHour(i,s):(r.isPM!=null&&(l=r.isPM(s),l&&i<12&&(i+=12),!l&&i===12&&(i=0)),i)}function c(r){var i,s,l,g,y,O,Z=!1,K=r._f.length;if(K===0){C(r).invalidFormat=!0,r._d=new Date(NaN);return}for(g=0;g<K;g++)y=0,O=!1,i=x({},r),r._useUTC!=null&&(i._useUTC=r._useUTC),i._f=r._f[g],Lt(i),T(i)&&(O=!0),y+=C(i).charsLeftOver,y+=C(i).unusedTokens.length*10,C(i).score=y,Z?y<l&&(l=y,s=i):(l==null||y<l||O)&&(l=y,s=i,O&&(Z=!0));S(r,s||i)}function d(r){if(!r._d){var i=Ke(r._i),s=i.day===void 0?i.date:i.day;r._a=z([i.year,i.month,s,i.hour,i.minute,i.second,i.millisecond],function(l){return l&&parseInt(l,10)}),Ve(r)}}function v(r){var i=new q(Ot(k(r)));return i._nextDay&&(i.add(1,"d"),i._nextDay=void 0),i}function k(r){var i=r._i,s=r._f;return r._locale=r._locale||jn(r._l),i===null||s===void 0&&i===""?P({nullInput:!0}):(typeof i=="string"&&(r._i=i=r._locale.preparse(i)),E(i)?new q(Ot(i)):(m(i)?r._d=i:o(s)?c(r):s?Lt(r):A(r),T(r)||(r._d=null),r))}function A(r){var i=r._i;p(i)?r._d=new Date(n.now()):m(i)?r._d=new Date(i.valueOf()):typeof i=="string"?Vi(r):o(i)?(r._a=z(i.slice(0),function(s){return parseInt(s,10)}),Ve(r)):e(i)?d(r):f(i)?r._d=new Date(i):n.createFromInputFallback(r)}function D(r,i,s,l,g){var y={};return(i===!0||i===!1)&&(l=i,i=void 0),(s===!0||s===!1)&&(l=s,s=void 0),(e(r)&&h(r)||o(r)&&r.length===0)&&(r=void 0),y._isAMomentObject=!0,y._useUTC=y._isUTC=g,y._l=s,y._i=r,y._f=i,y._strict=l,v(y)}function B(r,i,s,l){return D(r,i,s,l,!1)}var H=Q("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var r=B.apply(null,arguments);return this.isValid()&&r.isValid()?r<this?this:r:P()}),nn=Q("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var r=B.apply(null,arguments);return this.isValid()&&r.isValid()?r>this?this:r:P()});function en(r,i){var s,l;if(i.length===1&&o(i[0])&&(i=i[0]),!i.length)return B();for(s=i[0],l=1;l<i.length;++l)(!i[l].isValid()||i[l][r](s))&&(s=i[l]);return s}function xn(){var r=[].slice.call(arguments,0);return en("isBefore",r)}function qn(){var r=[].slice.call(arguments,0);return en("isAfter",r)}var En=function(){return Date.now?Date.now():+new Date},$n=["year","quarter","month","week","day","hour","minute","second","millisecond"];function at(r){var i,s=!1,l,g=$n.length;for(i in r)if(t(r,i)&&!(mn.call($n,i)!==-1&&(r[i]==null||!isNaN(r[i]))))return!1;for(l=0;l<g;++l)if(r[$n[l]]){if(s)return!1;parseFloat(r[$n[l]])!==tn(r[$n[l]])&&(s=!0)}return!0}function u1(){return this._isValid}function s1(){return Un(NaN)}function Ar(r){var i=Ke(r),s=i.year||0,l=i.quarter||0,g=i.month||0,y=i.week||i.isoWeek||0,O=i.day||0,Z=i.hour||0,K=i.minute||0,an=i.second||0,An=i.millisecond||0;this._isValid=at(i),this._milliseconds=+An+an*1e3+K*6e4+Z*1e3*60*60,this._days=+O+y*7,this._months=+g+l*3+s*12,this._data={},this._locale=jn(),this._bubble()}function Mr(r){return r instanceof Ar}function Gi(r){return r<0?Math.round(-1*r)*-1:Math.round(r)}function l1(r,i,s){var l=Math.min(r.length,i.length),g=Math.abs(r.length-i.length),y=0,O;for(O=0;O<l;O++)(s&&r[O]!==i[O]||!s&&tn(r[O])!==tn(i[O]))&&y++;return y+g}function Yo(r,i){X(r,0,0,function(){var s=this.utcOffset(),l="+";return s<0&&(s=-s,l="-"),l+Sn(~~(s/60),2)+i+Sn(~~s%60,2)})}Yo("Z",":"),Yo("ZZ",""),G("Z",et),G("ZZ",et),ln(["Z","ZZ"],function(r,i,s){s._useUTC=!0,s._tzm=Zi(et,r)});var c1=/([\+\-]|\d\d)/gi;function Zi(r,i){var s=(i||"").match(r),l,g,y;return s===null?null:(l=s[s.length-1]||[],g=(l+"").match(c1)||["-",0,0],y=+(g[1]*60)+tn(g[2]),y===0?0:g[0]==="+"?y:-y)}function Xi(r,i){var s,l;return i._isUTC?(s=i.clone(),l=(E(r)||m(r)?r.valueOf():B(r).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+l),n.updateOffset(s,!1),s):B(r).local()}function Ji(r){return-Math.round(r._d.getTimezoneOffset())}n.updateOffset=function(){};function d1(r,i,s){var l=this._offset||0,g;if(!this.isValid())return r!=null?this:NaN;if(r!=null){if(typeof r=="string"){if(r=Zi(et,r),r===null)return this}else Math.abs(r)<16&&!s&&(r=r*60);return!this._isUTC&&i&&(g=Ji(this)),this._offset=r,this._isUTC=!0,g!=null&&this.add(g,"m"),l!==r&&(!i||this._changeInProgress?$o(this,Un(r-l,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,n.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?l:Ji(this)}function p1(r,i){return r!=null?(typeof r!="string"&&(r=-r),this.utcOffset(r,i),this):-this.utcOffset()}function f1(r){return this.utcOffset(0,r)}function g1(r){return this._isUTC&&(this.utcOffset(0,r),this._isUTC=!1,r&&this.subtract(Ji(this),"m")),this}function h1(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var r=Zi(ar,this._i);r!=null?this.utcOffset(r):this.utcOffset(0,!0)}return this}function b1(r){return this.isValid()?(r=r?B(r).utcOffset():0,(this.utcOffset()-r)%60===0):!1}function m1(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function v1(){if(!p(this._isDSTShifted))return this._isDSTShifted;var r={},i;return x(r,this),r=k(r),r._a?(i=r._isUTC?F(r._a):B(r._a),this._isDSTShifted=this.isValid()&&l1(r._a,i.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function k1(){return this.isValid()?!this._isUTC:!1}function x1(){return this.isValid()?this._isUTC:!1}function No(){return this.isValid()?this._isUTC&&this._offset===0:!1}var F1=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,y1=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Un(r,i){var s=r,l=null,g,y,O;return Mr(r)?s={ms:r._milliseconds,d:r._days,M:r._months}:f(r)||!isNaN(+r)?(s={},i?s[i]=+r:s.milliseconds=+r):(l=F1.exec(r))?(g=l[1]==="-"?-1:1,s={y:0,d:tn(l[Tn])*g,h:tn(l[kn])*g,m:tn(l[_n])*g,s:tn(l[Bn])*g,ms:tn(Gi(l[Qn]*1e3))*g}):(l=y1.exec(r))?(g=l[1]==="-"?-1:1,s={y:He(l[2],g),M:He(l[3],g),w:He(l[4],g),d:He(l[5],g),h:He(l[6],g),m:He(l[7],g),s:He(l[8],g)}):s==null?s={}:typeof s=="object"&&("from"in s||"to"in s)&&(O=w1(B(s.from),B(s.to)),s={},s.ms=O.milliseconds,s.M=O.months),y=new Ar(s),Mr(r)&&t(r,"_locale")&&(y._locale=r._locale),Mr(r)&&t(r,"_isValid")&&(y._isValid=r._isValid),y}Un.fn=Ar.prototype,Un.invalid=s1;function He(r,i){var s=r&&parseFloat(r.replace(",","."));return(isNaN(s)?0:s)*i}function Lo(r,i){var s={};return s.months=i.month()-r.month()+(i.year()-r.year())*12,r.clone().add(s.months,"M").isAfter(i)&&--s.months,s.milliseconds=+i-+r.clone().add(s.months,"M"),s}function w1(r,i){var s;return r.isValid()&&i.isValid()?(i=Xi(i,r),r.isBefore(i)?s=Lo(r,i):(s=Lo(i,r),s.milliseconds=-s.milliseconds,s.months=-s.months),s):{milliseconds:0,months:0}}function jo(r,i){return function(s,l){var g,y;return l!==null&&!isNaN(+l)&&(rn(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),y=s,s=l,l=y),g=Un(s,l),$o(this,g,r),this}}function $o(r,i,s,l){var g=i._milliseconds,y=Gi(i._days),O=Gi(i._months);r.isValid()&&(l=l??!0,O&&lr(r,le(r,"Month")+O*s),y&&Dn(r,"Date",le(r,"Date")+y*s),g&&r._d.setTime(r._d.valueOf()+g*s),l&&n.updateOffset(r,y||O))}var C1=jo(1,"add"),E1=jo(-1,"subtract");function Uo(r){return typeof r=="string"||r instanceof String}function _1(r){return E(r)||m(r)||Uo(r)||f(r)||q1(r)||D1(r)||r===null||r===void 0}function D1(r){var i=e(r)&&!h(r),s=!1,l=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],g,y,O=l.length;for(g=0;g<O;g+=1)y=l[g],s=s||t(r,y);return i&&s}function q1(r){var i=o(r),s=!1;return i&&(s=r.filter(function(l){return!f(l)&&Uo(r)}).length===0),i&&s}function z1(r){var i=e(r)&&!h(r),s=!1,l=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],g,y;for(g=0;g<l.length;g+=1)y=l[g],s=s||t(r,y);return i&&s}function A1(r,i){var s=r.diff(i,"days",!0);return s<-6?"sameElse":s<-1?"lastWeek":s<0?"lastDay":s<1?"sameDay":s<2?"nextDay":s<7?"nextWeek":"sameElse"}function M1(r,i){arguments.length===1&&(arguments[0]?_1(arguments[0])?(r=arguments[0],i=void 0):z1(arguments[0])&&(i=arguments[0],r=void 0):(r=void 0,i=void 0));var s=r||B(),l=Xi(s,this).startOf("day"),g=n.calendarFormat(this,l)||"sameElse",y=i&&(L(i[g])?i[g].call(this,s):i[g]);return this.format(y||this.localeData().calendar(g,this,B(s)))}function S1(){return new q(this)}function B1(r,i){var s=E(r)?r:B(r);return this.isValid()&&s.isValid()?(i=Mn(i)||"millisecond",i==="millisecond"?this.valueOf()>s.valueOf():s.valueOf()<this.clone().startOf(i).valueOf()):!1}function I1(r,i){var s=E(r)?r:B(r);return this.isValid()&&s.isValid()?(i=Mn(i)||"millisecond",i==="millisecond"?this.valueOf()<s.valueOf():this.clone().endOf(i).valueOf()<s.valueOf()):!1}function T1(r,i,s,l){var g=E(r)?r:B(r),y=E(i)?i:B(i);return this.isValid()&&g.isValid()&&y.isValid()?(l=l||"()",(l[0]==="("?this.isAfter(g,s):!this.isBefore(g,s))&&(l[1]===")"?this.isBefore(y,s):!this.isAfter(y,s))):!1}function R1(r,i){var s=E(r)?r:B(r),l;return this.isValid()&&s.isValid()?(i=Mn(i)||"millisecond",i==="millisecond"?this.valueOf()===s.valueOf():(l=s.valueOf(),this.clone().startOf(i).valueOf()<=l&&l<=this.clone().endOf(i).valueOf())):!1}function O1(r,i){return this.isSame(r,i)||this.isAfter(r,i)}function P1(r,i){return this.isSame(r,i)||this.isBefore(r,i)}function Y1(r,i,s){var l,g,y;if(!this.isValid())return NaN;if(l=Xi(r,this),!l.isValid())return NaN;switch(g=(l.utcOffset()-this.utcOffset())*6e4,i=Mn(i),i){case"year":y=Sr(this,l)/12;break;case"month":y=Sr(this,l);break;case"quarter":y=Sr(this,l)/3;break;case"second":y=(this-l)/1e3;break;case"minute":y=(this-l)/6e4;break;case"hour":y=(this-l)/36e5;break;case"day":y=(this-l-g)/864e5;break;case"week":y=(this-l-g)/6048e5;break;default:y=this-l}return s?y:zn(y)}function Sr(r,i){if(r.date()<i.date())return-Sr(i,r);var s=(i.year()-r.year())*12+(i.month()-r.month()),l=r.clone().add(s,"months"),g,y;return i-l<0?(g=r.clone().add(s-1,"months"),y=(i-l)/(l-g)):(g=r.clone().add(s+1,"months"),y=(i-l)/(g-l)),-(s+y)||0}n.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",n.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function N1(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function L1(r){if(!this.isValid())return null;var i=r!==!0,s=i?this.clone().utc():this;return s.year()<0||s.year()>9999?ae(s,i?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):L(Date.prototype.toISOString)?i?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",ae(s,"Z")):ae(s,i?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function j1(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var r="moment",i="",s,l,g,y;return this.isLocal()||(r=this.utcOffset()===0?"moment.utc":"moment.parseZone",i="Z"),s="["+r+'("]',l=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",g="-MM-DD[T]HH:mm:ss.SSS",y=i+'[")]',this.format(s+l+g+y)}function $1(r){r||(r=this.isUtc()?n.defaultFormatUtc:n.defaultFormat);var i=ae(this,r);return this.localeData().postformat(i)}function U1(r,i){return this.isValid()&&(E(r)&&r.isValid()||B(r).isValid())?Un({to:this,from:r}).locale(this.locale()).humanize(!i):this.localeData().invalidDate()}function W1(r){return this.from(B(),r)}function V1(r,i){return this.isValid()&&(E(r)&&r.isValid()||B(r).isValid())?Un({from:this,to:r}).locale(this.locale()).humanize(!i):this.localeData().invalidDate()}function H1(r){return this.to(B(),r)}function Wo(r){var i;return r===void 0?this._locale._abbr:(i=jn(r),i!=null&&(this._locale=i),this)}var Vo=Q("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(r){return r===void 0?this.localeData():this.locale(r)});function Ho(){return this._locale}var Br=1e3,ut=60*Br,Ir=60*ut,Go=(365*400+97)*24*Ir;function st(r,i){return(r%i+i)%i}function Zo(r,i,s){return r<100&&r>=0?new Date(r+400,i,s)-Go:new Date(r,i,s).valueOf()}function Xo(r,i,s){return r<100&&r>=0?Date.UTC(r+400,i,s)-Go:Date.UTC(r,i,s)}function G1(r){var i,s;if(r=Mn(r),r===void 0||r==="millisecond"||!this.isValid())return this;switch(s=this._isUTC?Xo:Zo,r){case"year":i=s(this.year(),0,1);break;case"quarter":i=s(this.year(),this.month()-this.month()%3,1);break;case"month":i=s(this.year(),this.month(),1);break;case"week":i=s(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":i=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":i=s(this.year(),this.month(),this.date());break;case"hour":i=this._d.valueOf(),i-=st(i+(this._isUTC?0:this.utcOffset()*ut),Ir);break;case"minute":i=this._d.valueOf(),i-=st(i,ut);break;case"second":i=this._d.valueOf(),i-=st(i,Br);break}return this._d.setTime(i),n.updateOffset(this,!0),this}function Z1(r){var i,s;if(r=Mn(r),r===void 0||r==="millisecond"||!this.isValid())return this;switch(s=this._isUTC?Xo:Zo,r){case"year":i=s(this.year()+1,0,1)-1;break;case"quarter":i=s(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":i=s(this.year(),this.month()+1,1)-1;break;case"week":i=s(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":i=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":i=s(this.year(),this.month(),this.date()+1)-1;break;case"hour":i=this._d.valueOf(),i+=Ir-st(i+(this._isUTC?0:this.utcOffset()*ut),Ir)-1;break;case"minute":i=this._d.valueOf(),i+=ut-st(i,ut)-1;break;case"second":i=this._d.valueOf(),i+=Br-st(i,Br)-1;break}return this._d.setTime(i),n.updateOffset(this,!0),this}function X1(){return this._d.valueOf()-(this._offset||0)*6e4}function J1(){return Math.floor(this.valueOf()/1e3)}function Q1(){return new Date(this.valueOf())}function K1(){var r=this;return[r.year(),r.month(),r.date(),r.hour(),r.minute(),r.second(),r.millisecond()]}function ns(){var r=this;return{years:r.year(),months:r.month(),date:r.date(),hours:r.hours(),minutes:r.minutes(),seconds:r.seconds(),milliseconds:r.milliseconds()}}function es(){return this.isValid()?this.toISOString():null}function ts(){return T(this)}function rs(){return S({},C(this))}function is(){return C(this).overflow}function os(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}X("N",0,0,"eraAbbr"),X("NN",0,0,"eraAbbr"),X("NNN",0,0,"eraAbbr"),X("NNNN",0,0,"eraName"),X("NNNNN",0,0,"eraNarrow"),X("y",["y",1],"yo","eraYear"),X("y",["yy",2],0,"eraYear"),X("y",["yyy",3],0,"eraYear"),X("y",["yyyy",4],0,"eraYear"),G("N",Qi),G("NN",Qi),G("NNN",Qi),G("NNNN",bs),G("NNNNN",ms),ln(["N","NN","NNN","NNNN","NNNNN"],function(r,i,s,l){var g=s._locale.erasParse(r,l,s._strict);g?C(s).era=g:C(s).invalidEra=r}),G("y",ue),G("yy",ue),G("yyy",ue),G("yyyy",ue),G("yo",vs),ln(["y","yy","yyy","yyyy"],Cn),ln(["yo"],function(r,i,s,l){var g;s._locale._eraYearOrdinalRegex&&(g=r.match(s._locale._eraYearOrdinalRegex)),s._locale.eraYearOrdinalParse?i[Cn]=s._locale.eraYearOrdinalParse(r,g):i[Cn]=parseInt(r,10)});function as(r,i){var s,l,g,y=this._eras||jn("en")._eras;for(s=0,l=y.length;s<l;++s)switch(typeof y[s].since==="string"&&(g=n(y[s].since).startOf("day"),y[s].since=g.valueOf()),typeof y[s].until){case"undefined":y[s].until=1/0;break;case"string":g=n(y[s].until).startOf("day").valueOf(),y[s].until=g.valueOf();break}return y}function us(r,i,s){var l,g,y=this.eras(),O,Z,K;for(r=r.toUpperCase(),l=0,g=y.length;l<g;++l)if(O=y[l].name.toUpperCase(),Z=y[l].abbr.toUpperCase(),K=y[l].narrow.toUpperCase(),s)switch(i){case"N":case"NN":case"NNN":if(Z===r)return y[l];break;case"NNNN":if(O===r)return y[l];break;case"NNNNN":if(K===r)return y[l];break}else if([O,Z,K].indexOf(r)>=0)return y[l]}function ss(r,i){var s=r.since<=r.until?1:-1;return i===void 0?n(r.since).year():n(r.since).year()+(i-r.offset)*s}function ls(){var r,i,s,l=this.localeData().eras();for(r=0,i=l.length;r<i;++r)if(s=this.clone().startOf("day").valueOf(),l[r].since<=s&&s<=l[r].until||l[r].until<=s&&s<=l[r].since)return l[r].name;return""}function cs(){var r,i,s,l=this.localeData().eras();for(r=0,i=l.length;r<i;++r)if(s=this.clone().startOf("day").valueOf(),l[r].since<=s&&s<=l[r].until||l[r].until<=s&&s<=l[r].since)return l[r].narrow;return""}function ds(){var r,i,s,l=this.localeData().eras();for(r=0,i=l.length;r<i;++r)if(s=this.clone().startOf("day").valueOf(),l[r].since<=s&&s<=l[r].until||l[r].until<=s&&s<=l[r].since)return l[r].abbr;return""}function ps(){var r,i,s,l,g=this.localeData().eras();for(r=0,i=g.length;r<i;++r)if(s=g[r].since<=g[r].until?1:-1,l=this.clone().startOf("day").valueOf(),g[r].since<=l&&l<=g[r].until||g[r].until<=l&&l<=g[r].since)return(this.year()-n(g[r].since).year())*s+g[r].offset;return this.year()}function fs(r){return t(this,"_erasNameRegex")||Ki.call(this),r?this._erasNameRegex:this._erasRegex}function gs(r){return t(this,"_erasAbbrRegex")||Ki.call(this),r?this._erasAbbrRegex:this._erasRegex}function hs(r){return t(this,"_erasNarrowRegex")||Ki.call(this),r?this._erasNarrowRegex:this._erasRegex}function Qi(r,i){return i.erasAbbrRegex(r)}function bs(r,i){return i.erasNameRegex(r)}function ms(r,i){return i.erasNarrowRegex(r)}function vs(r,i){return i._eraYearOrdinalRegex||ue}function Ki(){var r=[],i=[],s=[],l=[],g,y,O,Z,K,an=this.eras();for(g=0,y=an.length;g<y;++g)O=In(an[g].name),Z=In(an[g].abbr),K=In(an[g].narrow),i.push(O),r.push(Z),s.push(K),l.push(O),l.push(Z),l.push(K);this._erasRegex=new RegExp("^("+l.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+i.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+s.join("|")+")","i")}X(0,["gg",2],0,function(){return this.weekYear()%100}),X(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Tr(r,i){X(0,[r,r.length],0,i)}Tr("gggg","weekYear"),Tr("ggggg","weekYear"),Tr("GGGG","isoWeekYear"),Tr("GGGGG","isoWeekYear"),G("G",xe),G("g",xe),G("GG",gn,cn),G("gg",gn,cn),G("GGGG",Ie,nt),G("gggg",Ie,nt),G("GGGGG",ke,on),G("ggggg",ke,on),we(["gggg","ggggg","GGGG","GGGGG"],function(r,i,s,l){i[l.substr(0,2)]=tn(r)}),we(["gg","GG"],function(r,i,s,l){i[l]=n.parseTwoDigitYear(r)});function ks(r){return Jo.call(this,r,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function xs(r){return Jo.call(this,r,this.isoWeek(),this.isoWeekday(),1,4)}function Fs(){return vn(this.year(),1,4)}function ys(){return vn(this.isoWeekYear(),1,4)}function ws(){var r=this.localeData()._week;return vn(this.year(),r.dow,r.doy)}function Cs(){var r=this.localeData()._week;return vn(this.weekYear(),r.dow,r.doy)}function Jo(r,i,s,l,g){var y;return r==null?Ce(this,l,g).year:(y=vn(r,l,g),i>y&&(i=y),Es.call(this,r,i,s,l,g))}function Es(r,i,s,l,g){var y=ce(r,i,s,l,g),O=Ne(y.year,0,y.dayOfYear);return this.year(O.getUTCFullYear()),this.month(O.getUTCMonth()),this.date(O.getUTCDate()),this}X("Q",0,"Qo","quarter"),G("Q",Ct),ln("Q",function(r,i){i[Pn]=(tn(r)-1)*3});function _s(r){return r==null?Math.ceil((this.month()+1)/3):this.month((r-1)*3+this.month()%3)}X("D",["DD",2],"Do","date"),G("D",gn,Fe),G("DD",gn,cn),G("Do",function(r,i){return r?i._dayOfMonthOrdinalParse||i._ordinalParse:i._dayOfMonthOrdinalParseLenient}),ln(["D","DD"],Tn),ln("Do",function(r,i){i[Tn]=tn(r.match(gn)[0])});var Qo=se("Date",!0);X("DDD",["DDDD",3],"DDDo","dayOfYear"),G("DDD",Jn),G("DDDD",ir),ln(["DDD","DDDD"],function(r,i,s){s._dayOfYear=tn(r)});function Ds(r){var i=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return r==null?i:this.add(r-i,"d")}X("m",["mm",2],0,"minute"),G("m",gn,_t),G("mm",gn,cn),ln(["m","mm"],_n);var qs=se("Minutes",!1);X("s",["ss",2],0,"second"),G("s",gn,_t),G("ss",gn,cn),ln(["s","ss"],Bn);var zs=se("Seconds",!1);X("S",0,0,function(){return~~(this.millisecond()/100)}),X(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),X(0,["SSS",3],0,"millisecond"),X(0,["SSSS",4],0,function(){return this.millisecond()*10}),X(0,["SSSSS",5],0,function(){return this.millisecond()*100}),X(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),X(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),X(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),X(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),G("S",Jn,Ct),G("SS",Jn,cn),G("SSS",Jn,ir);var Ae,Ko;for(Ae="SSSS";Ae.length<=9;Ae+="S")G(Ae,ue);function As(r,i){i[Qn]=tn(("0."+r)*1e3)}for(Ae="S";Ae.length<=9;Ae+="S")ln(Ae,As);Ko=se("Milliseconds",!1),X("z",0,0,"zoneAbbr"),X("zz",0,0,"zoneName");function Ms(){return this._isUTC?"UTC":""}function Ss(){return this._isUTC?"Coordinated Universal Time":""}var U=q.prototype;U.add=C1,U.calendar=M1,U.clone=S1,U.diff=Y1,U.endOf=Z1,U.format=$1,U.from=U1,U.fromNow=W1,U.to=V1,U.toNow=H1,U.get=fi,U.invalidAt=is,U.isAfter=B1,U.isBefore=I1,U.isBetween=T1,U.isSame=R1,U.isSameOrAfter=O1,U.isSameOrBefore=P1,U.isValid=ts,U.lang=Vo,U.locale=Wo,U.localeData=Ho,U.max=nn,U.min=H,U.parsingFlags=rs,U.set=sr,U.startOf=G1,U.subtract=E1,U.toArray=K1,U.toObject=ns,U.toDate=Q1,U.toISOString=L1,U.inspect=j1,typeof Symbol<"u"&&Symbol.for!=null&&(U[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),U.toJSON=es,U.toString=N1,U.unix=J1,U.valueOf=X1,U.creationData=os,U.eraName=ls,U.eraNarrow=cs,U.eraAbbr=ds,U.eraYear=ps,U.year=it,U.isLeapYear=Oe,U.weekYear=ks,U.isoWeekYear=xs,U.quarter=U.quarters=_s,U.month=cr,U.daysInMonth=xi,U.week=U.weeks=_i,U.isoWeek=U.isoWeeks=Di,U.weeksInYear=ws,U.weeksInWeekYear=Cs,U.isoWeeksInYear=Fs,U.isoWeeksInISOWeekYear=ys,U.date=Qo,U.day=U.days=Si,U.weekday=St,U.isoWeekday=Bi,U.dayOfYear=Ds,U.hour=U.hours=Ii,U.minute=U.minutes=qs,U.second=U.seconds=zs,U.millisecond=U.milliseconds=Ko,U.utcOffset=d1,U.utc=f1,U.local=g1,U.parseZone=h1,U.hasAlignedHourOffset=b1,U.isDST=m1,U.isLocal=k1,U.isUtcOffset=x1,U.isUtc=No,U.isUTC=No,U.zoneAbbr=Ms,U.zoneName=Ss,U.dates=Q("dates accessor is deprecated. Use date instead.",Qo),U.months=Q("months accessor is deprecated. Use month instead",cr),U.years=Q("years accessor is deprecated. Use year instead",it),U.zone=Q("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",p1),U.isDSTShifted=Q("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",v1);function Bs(r){return B(r*1e3)}function Is(){return B.apply(null,arguments).parseZone()}function na(r){return r}var dn=N.prototype;dn.calendar=ve,dn.longDateFormat=yt,dn.invalidDate=ui,dn.ordinal=er,dn.preparse=na,dn.postformat=na,dn.relativeTime=Qe,dn.pastFuture=si,dn.set=$,dn.eras=as,dn.erasParse=us,dn.erasConvertYear=ss,dn.erasAbbrRegex=gs,dn.erasNameRegex=fs,dn.erasNarrowRegex=hs,dn.months=mi,dn.monthsShort=vi,dn.monthsParse=ki,dn.monthsRegex=yi,dn.monthsShortRegex=Fi,dn.week=Ee,dn.firstDayOfYear=pr,dn.firstDayOfWeek=Ei,dn.weekdays=Mt,dn.weekdaysMin=vr,dn.weekdaysShort=mr,dn.weekdaysParse=xr,dn.weekdaysRegex=Nn,dn.weekdaysShortRegex=de,dn.weekdaysMinRegex=Fr,dn.isPM=wr,dn.meridiem=It;function Rr(r,i,s,l){var g=jn(),y=F().set(l,i);return g[s](y,r)}function ea(r,i,s){if(f(r)&&(i=r,r=void 0),r=r||"",i!=null)return Rr(r,i,s,"month");var l,g=[];for(l=0;l<12;l++)g[l]=Rr(r,l,s,"month");return g}function no(r,i,s,l){typeof r=="boolean"?(f(i)&&(s=i,i=void 0),i=i||""):(i=r,s=i,r=!1,f(i)&&(s=i,i=void 0),i=i||"");var g=jn(),y=r?g._week.dow:0,O,Z=[];if(s!=null)return Rr(i,(s+y)%7,l,"day");for(O=0;O<7;O++)Z[O]=Rr(i,(O+y)%7,l,"day");return Z}function Ts(r,i){return ea(r,i,"months")}function Rs(r,i){return ea(r,i,"monthsShort")}function Os(r,i,s){return no(r,i,s,"weekdays")}function Ps(r,i,s){return no(r,i,s,"weekdaysShort")}function Ys(r,i,s){return no(r,i,s,"weekdaysMin")}Kn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(r){var i=r%10,s=tn(r%100/10)===1?"th":i===1?"st":i===2?"nd":i===3?"rd":"th";return r+s}}),n.lang=Q("moment.lang is deprecated. Use moment.locale instead.",Kn),n.langData=Q("moment.langData is deprecated. Use moment.localeData instead.",jn);var fe=Math.abs;function Ns(){var r=this._data;return this._milliseconds=fe(this._milliseconds),this._days=fe(this._days),this._months=fe(this._months),r.milliseconds=fe(r.milliseconds),r.seconds=fe(r.seconds),r.minutes=fe(r.minutes),r.hours=fe(r.hours),r.months=fe(r.months),r.years=fe(r.years),this}function ta(r,i,s,l){var g=Un(i,s);return r._milliseconds+=l*g._milliseconds,r._days+=l*g._days,r._months+=l*g._months,r._bubble()}function Ls(r,i){return ta(this,r,i,1)}function js(r,i){return ta(this,r,i,-1)}function ra(r){return r<0?Math.floor(r):Math.ceil(r)}function $s(){var r=this._milliseconds,i=this._days,s=this._months,l=this._data,g,y,O,Z,K;return r>=0&&i>=0&&s>=0||r<=0&&i<=0&&s<=0||(r+=ra(eo(s)+i)*864e5,i=0,s=0),l.milliseconds=r%1e3,g=zn(r/1e3),l.seconds=g%60,y=zn(g/60),l.minutes=y%60,O=zn(y/60),l.hours=O%24,i+=zn(O/24),K=zn(ia(i)),s+=K,i-=ra(eo(K)),Z=zn(s/12),s%=12,l.days=i,l.months=s,l.years=Z,this}function ia(r){return r*4800/146097}function eo(r){return r*146097/4800}function Us(r){if(!this.isValid())return NaN;var i,s,l=this._milliseconds;if(r=Mn(r),r==="month"||r==="quarter"||r==="year")switch(i=this._days+l/864e5,s=this._months+ia(i),r){case"month":return s;case"quarter":return s/3;case"year":return s/12}else switch(i=this._days+Math.round(eo(this._months)),r){case"week":return i/7+l/6048e5;case"day":return i+l/864e5;case"hour":return i*24+l/36e5;case"minute":return i*1440+l/6e4;case"second":return i*86400+l/1e3;case"millisecond":return Math.floor(i*864e5)+l;default:throw new Error("Unknown unit "+r)}}function ge(r){return function(){return this.as(r)}}var oa=ge("ms"),Ws=ge("s"),Vs=ge("m"),Hs=ge("h"),Gs=ge("d"),Zs=ge("w"),Xs=ge("M"),Js=ge("Q"),Qs=ge("y"),Ks=oa;function nl(){return Un(this)}function el(r){return r=Mn(r),this.isValid()?this[r+"s"]():NaN}function Ge(r){return function(){return this.isValid()?this._data[r]:NaN}}var tl=Ge("milliseconds"),rl=Ge("seconds"),il=Ge("minutes"),ol=Ge("hours"),al=Ge("days"),ul=Ge("months"),sl=Ge("years");function ll(){return zn(this.days()/7)}var he=Math.round,lt={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function cl(r,i,s,l,g){return g.relativeTime(i||1,!!s,r,l)}function dl(r,i,s,l){var g=Un(r).abs(),y=he(g.as("s")),O=he(g.as("m")),Z=he(g.as("h")),K=he(g.as("d")),an=he(g.as("M")),An=he(g.as("w")),be=he(g.as("y")),Me=y<=s.ss&&["s",y]||y<s.s&&["ss",y]||O<=1&&["m"]||O<s.m&&["mm",O]||Z<=1&&["h"]||Z<s.h&&["hh",Z]||K<=1&&["d"]||K<s.d&&["dd",K];return s.w!=null&&(Me=Me||An<=1&&["w"]||An<s.w&&["ww",An]),Me=Me||an<=1&&["M"]||an<s.M&&["MM",an]||be<=1&&["y"]||["yy",be],Me[2]=i,Me[3]=+r>0,Me[4]=l,cl.apply(null,Me)}function pl(r){return r===void 0?he:typeof r=="function"?(he=r,!0):!1}function fl(r,i){return lt[r]===void 0?!1:i===void 0?lt[r]:(lt[r]=i,r==="s"&&(lt.ss=i-1),!0)}function gl(r,i){if(!this.isValid())return this.localeData().invalidDate();var s=!1,l=lt,g,y;return typeof r=="object"&&(i=r,r=!1),typeof r=="boolean"&&(s=r),typeof i=="object"&&(l=Object.assign({},lt,i),i.s!=null&&i.ss==null&&(l.ss=i.s-1)),g=this.localeData(),y=dl(this,!s,l,g),s&&(y=g.pastFuture(+this,y)),g.postformat(y)}var to=Math.abs;function ct(r){return(r>0)-(r<0)||+r}function Or(){if(!this.isValid())return this.localeData().invalidDate();var r=to(this._milliseconds)/1e3,i=to(this._days),s=to(this._months),l,g,y,O,Z=this.asSeconds(),K,an,An,be;return Z?(l=zn(r/60),g=zn(l/60),r%=60,l%=60,y=zn(s/12),s%=12,O=r?r.toFixed(3).replace(/\.?0+$/,""):"",K=Z<0?"-":"",an=ct(this._months)!==ct(Z)?"-":"",An=ct(this._days)!==ct(Z)?"-":"",be=ct(this._milliseconds)!==ct(Z)?"-":"",K+"P"+(y?an+y+"Y":"")+(s?an+s+"M":"")+(i?An+i+"D":"")+(g||l||r?"T":"")+(g?be+g+"H":"")+(l?be+l+"M":"")+(r?be+O+"S":"")):"P0D"}var un=Ar.prototype;un.isValid=u1,un.abs=Ns,un.add=Ls,un.subtract=js,un.as=Us,un.asMilliseconds=oa,un.asSeconds=Ws,un.asMinutes=Vs,un.asHours=Hs,un.asDays=Gs,un.asWeeks=Zs,un.asMonths=Xs,un.asQuarters=Js,un.asYears=Qs,un.valueOf=Ks,un._bubble=$s,un.clone=nl,un.get=el,un.milliseconds=tl,un.seconds=rl,un.minutes=il,un.hours=ol,un.days=al,un.weeks=ll,un.months=ul,un.years=sl,un.humanize=gl,un.toISOString=Or,un.toString=Or,un.toJSON=Or,un.locale=Wo,un.localeData=Ho,un.toIsoString=Q("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Or),un.lang=Vo,X("X",0,0,"unix"),X("x",0,0,"valueOf"),G("x",xe),G("X",ur),ln("X",function(r,i,s){s._d=new Date(parseFloat(r)*1e3)}),ln("x",function(r,i,s){s._d=new Date(tn(r))});return n.version="2.30.1",u(B),n.fn=U,n.min=xn,n.max=qn,n.now=En,n.utc=F,n.unix=Bs,n.months=Ts,n.isDate=m,n.locale=Kn,n.invalid=P,n.duration=Un,n.isMoment=E,n.weekdays=Os,n.parseZone=Is,n.localeData=jn,n.isDuration=Mr,n.monthsShort=Rs,n.weekdaysMin=Ys,n.defineLocale=Rt,n.updateLocale=Oi,n.locales=Pi,n.weekdaysShort=Ps,n.normalizeUnits=Mn,n.relativeTimeRounding=pl,n.relativeTimeThreshold=fl,n.calendarFormat=A1,n.prototype=U,n.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},n}))});var La=W((X3,Na)=>{M();var Tl=Ut(),Ya=Lr();function Rl(a,n){var u="YYYY-MM-DD";return n=n||Tl.date_format,Ya(a,u).format(n)}function Ol(a){var n,u=a.months(),o=a.years(),e=u>1?"months":"month",t=o>1?"years":"year";return u&&o?o+" "+t+" "+u+" "+e:u?u+" "+e:o?o+" "+t:(n=a.days(),n>1?n+" days":n+" day")}function Pl(a,n,u){var o;return a=new Date(a),n=new Date(n),o=Ya.duration(n.getTime()-a.getTime()),u?Ol(o):o}Na.exports={getFormattedDate:Rl,getDuration:Pl}});var $a=W((K3,ja)=>{M();var Q3=Ut(),Yl=$t();function Nl(a){var n=a.languages;return Yl.find(n,function(u){return u.fluency==="Native speaker"})}ja.exports={getNativeLanguage:Nl}});var Va=W((ed,Wa)=>{M();var Ll=Ut(),po=Pa(),Ua=La(),jl=$a(),$l=$t();function Ul(a){$l.extend(Ll,a||{})}Wa.exports={setConfig:Ul,getUrlForPicture:po.getUrlForPicture,getProfile:po.getProfile,getUrlForProfile:po.getUrlForProfile,getFormattedDate:Ua.getFormattedDate,getDuration:Ua.getDuration,getNativeLanguage:jl.getNativeLanguage}});var Ha=W((rd,Wl)=>{Wl.exports={Aacute:"\xC1",aacute:"\xE1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223E",acd:"\u223F",acE:"\u223E\u0333",Acirc:"\xC2",acirc:"\xE2",acute:"\xB4",Acy:"\u0410",acy:"\u0430",AElig:"\xC6",aelig:"\xE6",af:"\u2061",Afr:"\u{1D504}",afr:"\u{1D51E}",Agrave:"\xC0",agrave:"\xE0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03B1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2A3F",amp:"&",AMP:"&",andand:"\u2A55",And:"\u2A53",and:"\u2227",andd:"\u2A5C",andslope:"\u2A58",andv:"\u2A5A",ang:"\u2220",ange:"\u29A4",angle:"\u2220",angmsdaa:"\u29A8",angmsdab:"\u29A9",angmsdac:"\u29AA",angmsdad:"\u29AB",angmsdae:"\u29AC",angmsdaf:"\u29AD",angmsdag:"\u29AE",angmsdah:"\u29AF",angmsd:"\u2221",angrt:"\u221F",angrtvb:"\u22BE",angrtvbd:"\u299D",angsph:"\u2222",angst:"\xC5",angzarr:"\u237C",Aogon:"\u0104",aogon:"\u0105",Aopf:"\u{1D538}",aopf:"\u{1D552}",apacir:"\u2A6F",ap:"\u2248",apE:"\u2A70",ape:"\u224A",apid:"\u224B",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224A",Aring:"\xC5",aring:"\xE5",Ascr:"\u{1D49C}",ascr:"\u{1D4B6}",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224D",Atilde:"\xC3",atilde:"\xE3",Auml:"\xC4",auml:"\xE4",awconint:"\u2233",awint:"\u2A11",backcong:"\u224C",backepsilon:"\u03F6",backprime:"\u2035",backsim:"\u223D",backsimeq:"\u22CD",Backslash:"\u2216",Barv:"\u2AE7",barvee:"\u22BD",barwed:"\u2305",Barwed:"\u2306",barwedge:"\u2305",bbrk:"\u23B5",bbrktbrk:"\u23B6",bcong:"\u224C",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201E",becaus:"\u2235",because:"\u2235",Because:"\u2235",bemptyv:"\u29B0",bepsi:"\u03F6",bernou:"\u212C",Bernoullis:"\u212C",Beta:"\u0392",beta:"\u03B2",beth:"\u2136",between:"\u226C",Bfr:"\u{1D505}",bfr:"\u{1D51F}",bigcap:"\u22C2",bigcirc:"\u25EF",bigcup:"\u22C3",bigodot:"\u2A00",bigoplus:"\u2A01",bigotimes:"\u2A02",bigsqcup:"\u2A06",bigstar:"\u2605",bigtriangledown:"\u25BD",bigtriangleup:"\u25B3",biguplus:"\u2A04",bigvee:"\u22C1",bigwedge:"\u22C0",bkarow:"\u290D",blacklozenge:"\u29EB",blacksquare:"\u25AA",blacktriangle:"\u25B4",blacktriangledown:"\u25BE",blacktriangleleft:"\u25C2",blacktriangleright:"\u25B8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20E5",bnequiv:"\u2261\u20E5",bNot:"\u2AED",bnot:"\u2310",Bopf:"\u{1D539}",bopf:"\u{1D553}",bot:"\u22A5",bottom:"\u22A5",bowtie:"\u22C8",boxbox:"\u29C9",boxdl:"\u2510",boxdL:"\u2555",boxDl:"\u2556",boxDL:"\u2557",boxdr:"\u250C",boxdR:"\u2552",boxDr:"\u2553",boxDR:"\u2554",boxh:"\u2500",boxH:"\u2550",boxhd:"\u252C",boxHd:"\u2564",boxhD:"\u2565",boxHD:"\u2566",boxhu:"\u2534",boxHu:"\u2567",boxhU:"\u2568",boxHU:"\u2569",boxminus:"\u229F",boxplus:"\u229E",boxtimes:"\u22A0",boxul:"\u2518",boxuL:"\u255B",boxUl:"\u255C",boxUL:"\u255D",boxur:"\u2514",boxuR:"\u2558",boxUr:"\u2559",boxUR:"\u255A",boxv:"\u2502",boxV:"\u2551",boxvh:"\u253C",boxvH:"\u256A",boxVh:"\u256B",boxVH:"\u256C",boxvl:"\u2524",boxvL:"\u2561",boxVl:"\u2562",boxVL:"\u2563",boxvr:"\u251C",boxvR:"\u255E",boxVr:"\u255F",boxVR:"\u2560",bprime:"\u2035",breve:"\u02D8",Breve:"\u02D8",brvbar:"\xA6",bscr:"\u{1D4B7}",Bscr:"\u212C",bsemi:"\u204F",bsim:"\u223D",bsime:"\u22CD",bsolb:"\u29C5",bsol:"\\",bsolhsub:"\u27C8",bull:"\u2022",bullet:"\u2022",bump:"\u224E",bumpE:"\u2AAE",bumpe:"\u224F",Bumpeq:"\u224E",bumpeq:"\u224F",Cacute:"\u0106",cacute:"\u0107",capand:"\u2A44",capbrcup:"\u2A49",capcap:"\u2A4B",cap:"\u2229",Cap:"\u22D2",capcup:"\u2A47",capdot:"\u2A40",CapitalDifferentialD:"\u2145",caps:"\u2229\uFE00",caret:"\u2041",caron:"\u02C7",Cayleys:"\u212D",ccaps:"\u2A4D",Ccaron:"\u010C",ccaron:"\u010D",Ccedil:"\xC7",ccedil:"\xE7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2A4C",ccupssm:"\u2A50",Cdot:"\u010A",cdot:"\u010B",cedil:"\xB8",Cedilla:"\xB8",cemptyv:"\u29B2",cent:"\xA2",centerdot:"\xB7",CenterDot:"\xB7",cfr:"\u{1D520}",Cfr:"\u212D",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03A7",chi:"\u03C7",circ:"\u02C6",circeq:"\u2257",circlearrowleft:"\u21BA",circlearrowright:"\u21BB",circledast:"\u229B",circledcirc:"\u229A",circleddash:"\u229D",CircleDot:"\u2299",circledR:"\xAE",circledS:"\u24C8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cir:"\u25CB",cirE:"\u29C3",cire:"\u2257",cirfnint:"\u2A10",cirmid:"\u2AEF",cirscir:"\u29C2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201D",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",colon:":",Colon:"\u2237",Colone:"\u2A74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2A6D",Congruent:"\u2261",conint:"\u222E",Conint:"\u222F",ContourIntegral:"\u222E",copf:"\u{1D554}",Copf:"\u2102",coprod:"\u2210",Coproduct:"\u2210",copy:"\xA9",COPY:"\xA9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21B5",cross:"\u2717",Cross:"\u2A2F",Cscr:"\u{1D49E}",cscr:"\u{1D4B8}",csub:"\u2ACF",csube:"\u2AD1",csup:"\u2AD0",csupe:"\u2AD2",ctdot:"\u22EF",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22DE",cuesc:"\u22DF",cularr:"\u21B6",cularrp:"\u293D",cupbrcap:"\u2A48",cupcap:"\u2A46",CupCap:"\u224D",cup:"\u222A",Cup:"\u22D3",cupcup:"\u2A4A",cupdot:"\u228D",cupor:"\u2A45",cups:"\u222A\uFE00",curarr:"\u21B7",curarrm:"\u293C",curlyeqprec:"\u22DE",curlyeqsucc:"\u22DF",curlyvee:"\u22CE",curlywedge:"\u22CF",curren:"\xA4",curvearrowleft:"\u21B6",curvearrowright:"\u21B7",cuvee:"\u22CE",cuwed:"\u22CF",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232D",dagger:"\u2020",Dagger:"\u2021",daleth:"\u2138",darr:"\u2193",Darr:"\u21A1",dArr:"\u21D3",dash:"\u2010",Dashv:"\u2AE4",dashv:"\u22A3",dbkarow:"\u290F",dblac:"\u02DD",Dcaron:"\u010E",dcaron:"\u010F",Dcy:"\u0414",dcy:"\u0434",ddagger:"\u2021",ddarr:"\u21CA",DD:"\u2145",dd:"\u2146",DDotrahd:"\u2911",ddotseq:"\u2A77",deg:"\xB0",Del:"\u2207",Delta:"\u0394",delta:"\u03B4",demptyv:"\u29B1",dfisht:"\u297F",Dfr:"\u{1D507}",dfr:"\u{1D521}",dHar:"\u2965",dharl:"\u21C3",dharr:"\u21C2",DiacriticalAcute:"\xB4",DiacriticalDot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",DiacriticalGrave:"`",DiacriticalTilde:"\u02DC",diam:"\u22C4",diamond:"\u22C4",Diamond:"\u22C4",diamondsuit:"\u2666",diams:"\u2666",die:"\xA8",DifferentialD:"\u2146",digamma:"\u03DD",disin:"\u22F2",div:"\xF7",divide:"\xF7",divideontimes:"\u22C7",divonx:"\u22C7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231E",dlcrop:"\u230D",dollar:"$",Dopf:"\u{1D53B}",dopf:"\u{1D555}",Dot:"\xA8",dot:"\u02D9",DotDot:"\u20DC",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22A1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222F",DoubleDot:"\xA8",DoubleDownArrow:"\u21D3",DoubleLeftArrow:"\u21D0",DoubleLeftRightArrow:"\u21D4",DoubleLeftTee:"\u2AE4",DoubleLongLeftArrow:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",DoubleLongRightArrow:"\u27F9",DoubleRightArrow:"\u21D2",DoubleRightTee:"\u22A8",DoubleUpArrow:"\u21D1",DoubleUpDownArrow:"\u21D5",DoubleVerticalBar:"\u2225",DownArrowBar:"\u2913",downarrow:"\u2193",DownArrow:"\u2193",Downarrow:"\u21D3",DownArrowUpArrow:"\u21F5",DownBreve:"\u0311",downdownarrows:"\u21CA",downharpoonleft:"\u21C3",downharpoonright:"\u21C2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVectorBar:"\u2956",DownLeftVector:"\u21BD",DownRightTeeVector:"\u295F",DownRightVectorBar:"\u2957",DownRightVector:"\u21C1",DownTeeArrow:"\u21A7",DownTee:"\u22A4",drbkarow:"\u2910",drcorn:"\u231F",drcrop:"\u230C",Dscr:"\u{1D49F}",dscr:"\u{1D4B9}",DScy:"\u0405",dscy:"\u0455",dsol:"\u29F6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22F1",dtri:"\u25BF",dtrif:"\u25BE",duarr:"\u21F5",duhar:"\u296F",dwangle:"\u29A6",DZcy:"\u040F",dzcy:"\u045F",dzigrarr:"\u27FF",Eacute:"\xC9",eacute:"\xE9",easter:"\u2A6E",Ecaron:"\u011A",ecaron:"\u011B",Ecirc:"\xCA",ecirc:"\xEA",ecir:"\u2256",ecolon:"\u2255",Ecy:"\u042D",ecy:"\u044D",eDDot:"\u2A77",Edot:"\u0116",edot:"\u0117",eDot:"\u2251",ee:"\u2147",efDot:"\u2252",Efr:"\u{1D508}",efr:"\u{1D522}",eg:"\u2A9A",Egrave:"\xC8",egrave:"\xE8",egs:"\u2A96",egsdot:"\u2A98",el:"\u2A99",Element:"\u2208",elinters:"\u23E7",ell:"\u2113",els:"\u2A95",elsdot:"\u2A97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25FB",emptyv:"\u2205",EmptyVerySmallSquare:"\u25AB",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",ENG:"\u014A",eng:"\u014B",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\u{1D53C}",eopf:"\u{1D556}",epar:"\u22D5",eparsl:"\u29E3",eplus:"\u2A71",epsi:"\u03B5",Epsilon:"\u0395",epsilon:"\u03B5",epsiv:"\u03F5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2A96",eqslantless:"\u2A95",Equal:"\u2A75",equals:"=",EqualTilde:"\u2242",equest:"\u225F",Equilibrium:"\u21CC",equiv:"\u2261",equivDD:"\u2A78",eqvparsl:"\u29E5",erarr:"\u2971",erDot:"\u2253",escr:"\u212F",Escr:"\u2130",esdot:"\u2250",Esim:"\u2A73",esim:"\u2242",Eta:"\u0397",eta:"\u03B7",ETH:"\xD0",eth:"\xF0",Euml:"\xCB",euml:"\xEB",euro:"\u20AC",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",exponentiale:"\u2147",ExponentialE:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\uFB03",fflig:"\uFB00",ffllig:"\uFB04",Ffr:"\u{1D509}",ffr:"\u{1D523}",filig:"\uFB01",FilledSmallSquare:"\u25FC",FilledVerySmallSquare:"\u25AA",fjlig:"fj",flat:"\u266D",fllig:"\uFB02",fltns:"\u25B1",fnof:"\u0192",Fopf:"\u{1D53D}",fopf:"\u{1D557}",forall:"\u2200",ForAll:"\u2200",fork:"\u22D4",forkv:"\u2AD9",Fouriertrf:"\u2131",fpartint:"\u2A0D",frac12:"\xBD",frac13:"\u2153",frac14:"\xBC",frac15:"\u2155",frac16:"\u2159",frac18:"\u215B",frac23:"\u2154",frac25:"\u2156",frac34:"\xBE",frac35:"\u2157",frac38:"\u215C",frac45:"\u2158",frac56:"\u215A",frac58:"\u215D",frac78:"\u215E",frasl:"\u2044",frown:"\u2322",fscr:"\u{1D4BB}",Fscr:"\u2131",gacute:"\u01F5",Gamma:"\u0393",gamma:"\u03B3",Gammad:"\u03DC",gammad:"\u03DD",gap:"\u2A86",Gbreve:"\u011E",gbreve:"\u011F",Gcedil:"\u0122",Gcirc:"\u011C",gcirc:"\u011D",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",ge:"\u2265",gE:"\u2267",gEl:"\u2A8C",gel:"\u22DB",geq:"\u2265",geqq:"\u2267",geqslant:"\u2A7E",gescc:"\u2AA9",ges:"\u2A7E",gesdot:"\u2A80",gesdoto:"\u2A82",gesdotol:"\u2A84",gesl:"\u22DB\uFE00",gesles:"\u2A94",Gfr:"\u{1D50A}",gfr:"\u{1D524}",gg:"\u226B",Gg:"\u22D9",ggg:"\u22D9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gla:"\u2AA5",gl:"\u2277",glE:"\u2A92",glj:"\u2AA4",gnap:"\u2A8A",gnapprox:"\u2A8A",gne:"\u2A88",gnE:"\u2269",gneq:"\u2A88",gneqq:"\u2269",gnsim:"\u22E7",Gopf:"\u{1D53E}",gopf:"\u{1D558}",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22DB",GreaterFullEqual:"\u2267",GreaterGreater:"\u2AA2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2A7E",GreaterTilde:"\u2273",Gscr:"\u{1D4A2}",gscr:"\u210A",gsim:"\u2273",gsime:"\u2A8E",gsiml:"\u2A90",gtcc:"\u2AA7",gtcir:"\u2A7A",gt:">",GT:">",Gt:"\u226B",gtdot:"\u22D7",gtlPar:"\u2995",gtquest:"\u2A7C",gtrapprox:"\u2A86",gtrarr:"\u2978",gtrdot:"\u22D7",gtreqless:"\u22DB",gtreqqless:"\u2A8C",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\uFE00",gvnE:"\u2269\uFE00",Hacek:"\u02C7",hairsp:"\u200A",half:"\xBD",hamilt:"\u210B",HARDcy:"\u042A",hardcy:"\u044A",harrcir:"\u2948",harr:"\u2194",hArr:"\u21D4",harrw:"\u21AD",Hat:"^",hbar:"\u210F",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22B9",hfr:"\u{1D525}",Hfr:"\u210C",HilbertSpace:"\u210B",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21FF",homtht:"\u223B",hookleftarrow:"\u21A9",hookrightarrow:"\u21AA",hopf:"\u{1D559}",Hopf:"\u210D",horbar:"\u2015",HorizontalLine:"\u2500",hscr:"\u{1D4BD}",Hscr:"\u210B",hslash:"\u210F",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224E",HumpEqual:"\u224F",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xCD",iacute:"\xED",ic:"\u2063",Icirc:"\xCE",icirc:"\xEE",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xA1",iff:"\u21D4",ifr:"\u{1D526}",Ifr:"\u2111",Igrave:"\xCC",igrave:"\xEC",ii:"\u2148",iiiint:"\u2A0C",iiint:"\u222D",iinfin:"\u29DC",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Imacr:"\u012A",imacr:"\u012B",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",Im:"\u2111",imof:"\u22B7",imped:"\u01B5",Implies:"\u21D2",incare:"\u2105",in:"\u2208",infin:"\u221E",infintie:"\u29DD",inodot:"\u0131",intcal:"\u22BA",int:"\u222B",Int:"\u222C",integers:"\u2124",Integral:"\u222B",intercal:"\u22BA",Intersection:"\u22C2",intlarhk:"\u2A17",intprod:"\u2A3C",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012E",iogon:"\u012F",Iopf:"\u{1D540}",iopf:"\u{1D55A}",Iota:"\u0399",iota:"\u03B9",iprod:"\u2A3C",iquest:"\xBF",iscr:"\u{1D4BE}",Iscr:"\u2110",isin:"\u2208",isindot:"\u22F5",isinE:"\u22F9",isins:"\u22F4",isinsv:"\u22F3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xCF",iuml:"\xEF",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\u{1D50D}",jfr:"\u{1D527}",jmath:"\u0237",Jopf:"\u{1D541}",jopf:"\u{1D55B}",Jscr:"\u{1D4A5}",jscr:"\u{1D4BF}",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039A",kappa:"\u03BA",kappav:"\u03F0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041A",kcy:"\u043A",Kfr:"\u{1D50E}",kfr:"\u{1D528}",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040C",kjcy:"\u045C",Kopf:"\u{1D542}",kopf:"\u{1D55C}",Kscr:"\u{1D4A6}",kscr:"\u{1D4C0}",lAarr:"\u21DA",Lacute:"\u0139",lacute:"\u013A",laemptyv:"\u29B4",lagran:"\u2112",Lambda:"\u039B",lambda:"\u03BB",lang:"\u27E8",Lang:"\u27EA",langd:"\u2991",langle:"\u27E8",lap:"\u2A85",Laplacetrf:"\u2112",laquo:"\xAB",larrb:"\u21E4",larrbfs:"\u291F",larr:"\u2190",Larr:"\u219E",lArr:"\u21D0",larrfs:"\u291D",larrhk:"\u21A9",larrlp:"\u21AB",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21A2",latail:"\u2919",lAtail:"\u291B",lat:"\u2AAB",late:"\u2AAD",lates:"\u2AAD\uFE00",lbarr:"\u290C",lBarr:"\u290E",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298B",lbrksld:"\u298F",lbrkslu:"\u298D",Lcaron:"\u013D",lcaron:"\u013E",Lcedil:"\u013B",lcedil:"\u013C",lceil:"\u2308",lcub:"{",Lcy:"\u041B",lcy:"\u043B",ldca:"\u2936",ldquo:"\u201C",ldquor:"\u201E",ldrdhar:"\u2967",ldrushar:"\u294B",ldsh:"\u21B2",le:"\u2264",lE:"\u2266",LeftAngleBracket:"\u27E8",LeftArrowBar:"\u21E4",leftarrow:"\u2190",LeftArrow:"\u2190",Leftarrow:"\u21D0",LeftArrowRightArrow:"\u21C6",leftarrowtail:"\u21A2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27E6",LeftDownTeeVector:"\u2961",LeftDownVectorBar:"\u2959",LeftDownVector:"\u21C3",LeftFloor:"\u230A",leftharpoondown:"\u21BD",leftharpoonup:"\u21BC",leftleftarrows:"\u21C7",leftrightarrow:"\u2194",LeftRightArrow:"\u2194",Leftrightarrow:"\u21D4",leftrightarrows:"\u21C6",leftrightharpoons:"\u21CB",leftrightsquigarrow:"\u21AD",LeftRightVector:"\u294E",LeftTeeArrow:"\u21A4",LeftTee:"\u22A3",LeftTeeVector:"\u295A",leftthreetimes:"\u22CB",LeftTriangleBar:"\u29CF",LeftTriangle:"\u22B2",LeftTriangleEqual:"\u22B4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVectorBar:"\u2958",LeftUpVector:"\u21BF",LeftVectorBar:"\u2952",LeftVector:"\u21BC",lEg:"\u2A8B",leg:"\u22DA",leq:"\u2264",leqq:"\u2266",leqslant:"\u2A7D",lescc:"\u2AA8",les:"\u2A7D",lesdot:"\u2A7F",lesdoto:"\u2A81",lesdotor:"\u2A83",lesg:"\u22DA\uFE00",lesges:"\u2A93",lessapprox:"\u2A85",lessdot:"\u22D6",lesseqgtr:"\u22DA",lesseqqgtr:"\u2A8B",LessEqualGreater:"\u22DA",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2AA1",lesssim:"\u2272",LessSlantEqual:"\u2A7D",LessTilde:"\u2272",lfisht:"\u297C",lfloor:"\u230A",Lfr:"\u{1D50F}",lfr:"\u{1D529}",lg:"\u2276",lgE:"\u2A91",lHar:"\u2962",lhard:"\u21BD",lharu:"\u21BC",lharul:"\u296A",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",llarr:"\u21C7",ll:"\u226A",Ll:"\u22D8",llcorner:"\u231E",Lleftarrow:"\u21DA",llhard:"\u296B",lltri:"\u25FA",Lmidot:"\u013F",lmidot:"\u0140",lmoustache:"\u23B0",lmoust:"\u23B0",lnap:"\u2A89",lnapprox:"\u2A89",lne:"\u2A87",lnE:"\u2268",lneq:"\u2A87",lneqq:"\u2268",lnsim:"\u22E6",loang:"\u27EC",loarr:"\u21FD",lobrk:"\u27E6",longleftarrow:"\u27F5",LongLeftArrow:"\u27F5",Longleftarrow:"\u27F8",longleftrightarrow:"\u27F7",LongLeftRightArrow:"\u27F7",Longleftrightarrow:"\u27FA",longmapsto:"\u27FC",longrightarrow:"\u27F6",LongRightArrow:"\u27F6",Longrightarrow:"\u27F9",looparrowleft:"\u21AB",looparrowright:"\u21AC",lopar:"\u2985",Lopf:"\u{1D543}",lopf:"\u{1D55D}",loplus:"\u2A2D",lotimes:"\u2A34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25CA",lozenge:"\u25CA",lozf:"\u29EB",lpar:"(",lparlt:"\u2993",lrarr:"\u21C6",lrcorner:"\u231F",lrhar:"\u21CB",lrhard:"\u296D",lrm:"\u200E",lrtri:"\u22BF",lsaquo:"\u2039",lscr:"\u{1D4C1}",Lscr:"\u2112",lsh:"\u21B0",Lsh:"\u21B0",lsim:"\u2272",lsime:"\u2A8D",lsimg:"\u2A8F",lsqb:"[",lsquo:"\u2018",lsquor:"\u201A",Lstrok:"\u0141",lstrok:"\u0142",ltcc:"\u2AA6",ltcir:"\u2A79",lt:"<",LT:"<",Lt:"\u226A",ltdot:"\u22D6",lthree:"\u22CB",ltimes:"\u22C9",ltlarr:"\u2976",ltquest:"\u2A7B",ltri:"\u25C3",ltrie:"\u22B4",ltrif:"\u25C2",ltrPar:"\u2996",lurdshar:"\u294A",luruhar:"\u2966",lvertneqq:"\u2268\uFE00",lvnE:"\u2268\uFE00",macr:"\xAF",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21A6",mapsto:"\u21A6",mapstodown:"\u21A7",mapstoleft:"\u21A4",mapstoup:"\u21A5",marker:"\u25AE",mcomma:"\u2A29",Mcy:"\u041C",mcy:"\u043C",mdash:"\u2014",mDDot:"\u223A",measuredangle:"\u2221",MediumSpace:"\u205F",Mellintrf:"\u2133",Mfr:"\u{1D510}",mfr:"\u{1D52A}",mho:"\u2127",micro:"\xB5",midast:"*",midcir:"\u2AF0",mid:"\u2223",middot:"\xB7",minusb:"\u229F",minus:"\u2212",minusd:"\u2238",minusdu:"\u2A2A",MinusPlus:"\u2213",mlcp:"\u2ADB",mldr:"\u2026",mnplus:"\u2213",models:"\u22A7",Mopf:"\u{1D544}",mopf:"\u{1D55E}",mp:"\u2213",mscr:"\u{1D4C2}",Mscr:"\u2133",mstpos:"\u223E",Mu:"\u039C",mu:"\u03BC",multimap:"\u22B8",mumap:"\u22B8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20D2",nap:"\u2249",napE:"\u2A70\u0338",napid:"\u224B\u0338",napos:"\u0149",napprox:"\u2249",natural:"\u266E",naturals:"\u2115",natur:"\u266E",nbsp:"\xA0",nbump:"\u224E\u0338",nbumpe:"\u224F\u0338",ncap:"\u2A43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2A6D\u0338",ncup:"\u2A42",Ncy:"\u041D",ncy:"\u043D",ndash:"\u2013",nearhk:"\u2924",nearr:"\u2197",neArr:"\u21D7",nearrow:"\u2197",ne:"\u2260",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200B",NegativeThickSpace:"\u200B",NegativeThinSpace:"\u200B",NegativeVeryThinSpace:"\u200B",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226B",NestedLessLess:"\u226A",NewLine:`
`,nexist:"\u2204",nexists:"\u2204",Nfr:"\u{1D511}",nfr:"\u{1D52B}",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2A7E\u0338",nges:"\u2A7E\u0338",nGg:"\u22D9\u0338",ngsim:"\u2275",nGt:"\u226B\u20D2",ngt:"\u226F",ngtr:"\u226F",nGtv:"\u226B\u0338",nharr:"\u21AE",nhArr:"\u21CE",nhpar:"\u2AF2",ni:"\u220B",nis:"\u22FC",nisd:"\u22FA",niv:"\u220B",NJcy:"\u040A",njcy:"\u045A",nlarr:"\u219A",nlArr:"\u21CD",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nleftarrow:"\u219A",nLeftarrow:"\u21CD",nleftrightarrow:"\u21AE",nLeftrightarrow:"\u21CE",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2A7D\u0338",nles:"\u2A7D\u0338",nless:"\u226E",nLl:"\u22D8\u0338",nlsim:"\u2274",nLt:"\u226A\u20D2",nlt:"\u226E",nltri:"\u22EA",nltrie:"\u22EC",nLtv:"\u226A\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xA0",nopf:"\u{1D55F}",Nopf:"\u2115",Not:"\u2AEC",not:"\xAC",NotCongruent:"\u2262",NotCupCap:"\u226D",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226F",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226B\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2A7E\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224E\u0338",NotHumpEqual:"\u224F\u0338",notin:"\u2209",notindot:"\u22F5\u0338",notinE:"\u22F9\u0338",notinva:"\u2209",notinvb:"\u22F7",notinvc:"\u22F6",NotLeftTriangleBar:"\u29CF\u0338",NotLeftTriangle:"\u22EA",NotLeftTriangleEqual:"\u22EC",NotLess:"\u226E",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226A\u0338",NotLessSlantEqual:"\u2A7D\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2AA2\u0338",NotNestedLessLess:"\u2AA1\u0338",notni:"\u220C",notniva:"\u220C",notnivb:"\u22FE",notnivc:"\u22FD",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2AAF\u0338",NotPrecedesSlantEqual:"\u22E0",NotReverseElement:"\u220C",NotRightTriangleBar:"\u29D0\u0338",NotRightTriangle:"\u22EB",NotRightTriangleEqual:"\u22ED",NotSquareSubset:"\u228F\u0338",NotSquareSubsetEqual:"\u22E2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22E3",NotSubset:"\u2282\u20D2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2AB0\u0338",NotSucceedsSlantEqual:"\u22E1",NotSucceedsTilde:"\u227F\u0338",NotSuperset:"\u2283\u20D2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",nparallel:"\u2226",npar:"\u2226",nparsl:"\u2AFD\u20E5",npart:"\u2202\u0338",npolint:"\u2A14",npr:"\u2280",nprcue:"\u22E0",nprec:"\u2280",npreceq:"\u2AAF\u0338",npre:"\u2AAF\u0338",nrarrc:"\u2933\u0338",nrarr:"\u219B",nrArr:"\u21CF",nrarrw:"\u219D\u0338",nrightarrow:"\u219B",nRightarrow:"\u21CF",nrtri:"\u22EB",nrtrie:"\u22ED",nsc:"\u2281",nsccue:"\u22E1",nsce:"\u2AB0\u0338",Nscr:"\u{1D4A9}",nscr:"\u{1D4C3}",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22E2",nsqsupe:"\u22E3",nsub:"\u2284",nsubE:"\u2AC5\u0338",nsube:"\u2288",nsubset:"\u2282\u20D2",nsubseteq:"\u2288",nsubseteqq:"\u2AC5\u0338",nsucc:"\u2281",nsucceq:"\u2AB0\u0338",nsup:"\u2285",nsupE:"\u2AC6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20D2",nsupseteq:"\u2289",nsupseteqq:"\u2AC6\u0338",ntgl:"\u2279",Ntilde:"\xD1",ntilde:"\xF1",ntlg:"\u2278",ntriangleleft:"\u22EA",ntrianglelefteq:"\u22EC",ntriangleright:"\u22EB",ntrianglerighteq:"\u22ED",Nu:"\u039D",nu:"\u03BD",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224D\u20D2",nvdash:"\u22AC",nvDash:"\u22AD",nVdash:"\u22AE",nVDash:"\u22AF",nvge:"\u2265\u20D2",nvgt:">\u20D2",nvHarr:"\u2904",nvinfin:"\u29DE",nvlArr:"\u2902",nvle:"\u2264\u20D2",nvlt:"<\u20D2",nvltrie:"\u22B4\u20D2",nvrArr:"\u2903",nvrtrie:"\u22B5\u20D2",nvsim:"\u223C\u20D2",nwarhk:"\u2923",nwarr:"\u2196",nwArr:"\u21D6",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xD3",oacute:"\xF3",oast:"\u229B",Ocirc:"\xD4",ocirc:"\xF4",ocir:"\u229A",Ocy:"\u041E",ocy:"\u043E",odash:"\u229D",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2A38",odot:"\u2299",odsold:"\u29BC",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29BF",Ofr:"\u{1D512}",ofr:"\u{1D52C}",ogon:"\u02DB",Ograve:"\xD2",ograve:"\xF2",ogt:"\u29C1",ohbar:"\u29B5",ohm:"\u03A9",oint:"\u222E",olarr:"\u21BA",olcir:"\u29BE",olcross:"\u29BB",oline:"\u203E",olt:"\u29C0",Omacr:"\u014C",omacr:"\u014D",Omega:"\u03A9",omega:"\u03C9",Omicron:"\u039F",omicron:"\u03BF",omid:"\u29B6",ominus:"\u2296",Oopf:"\u{1D546}",oopf:"\u{1D560}",opar:"\u29B7",OpenCurlyDoubleQuote:"\u201C",OpenCurlyQuote:"\u2018",operp:"\u29B9",oplus:"\u2295",orarr:"\u21BB",Or:"\u2A54",or:"\u2228",ord:"\u2A5D",order:"\u2134",orderof:"\u2134",ordf:"\xAA",ordm:"\xBA",origof:"\u22B6",oror:"\u2A56",orslope:"\u2A57",orv:"\u2A5B",oS:"\u24C8",Oscr:"\u{1D4AA}",oscr:"\u2134",Oslash:"\xD8",oslash:"\xF8",osol:"\u2298",Otilde:"\xD5",otilde:"\xF5",otimesas:"\u2A36",Otimes:"\u2A37",otimes:"\u2297",Ouml:"\xD6",ouml:"\xF6",ovbar:"\u233D",OverBar:"\u203E",OverBrace:"\u23DE",OverBracket:"\u23B4",OverParenthesis:"\u23DC",para:"\xB6",parallel:"\u2225",par:"\u2225",parsim:"\u2AF3",parsl:"\u2AFD",part:"\u2202",PartialD:"\u2202",Pcy:"\u041F",pcy:"\u043F",percnt:"%",period:".",permil:"\u2030",perp:"\u22A5",pertenk:"\u2031",Pfr:"\u{1D513}",pfr:"\u{1D52D}",Phi:"\u03A6",phi:"\u03C6",phiv:"\u03D5",phmmat:"\u2133",phone:"\u260E",Pi:"\u03A0",pi:"\u03C0",pitchfork:"\u22D4",piv:"\u03D6",planck:"\u210F",planckh:"\u210E",plankv:"\u210F",plusacir:"\u2A23",plusb:"\u229E",pluscir:"\u2A22",plus:"+",plusdo:"\u2214",plusdu:"\u2A25",pluse:"\u2A72",PlusMinus:"\xB1",plusmn:"\xB1",plussim:"\u2A26",plustwo:"\u2A27",pm:"\xB1",Poincareplane:"\u210C",pointint:"\u2A15",popf:"\u{1D561}",Popf:"\u2119",pound:"\xA3",prap:"\u2AB7",Pr:"\u2ABB",pr:"\u227A",prcue:"\u227C",precapprox:"\u2AB7",prec:"\u227A",preccurlyeq:"\u227C",Precedes:"\u227A",PrecedesEqual:"\u2AAF",PrecedesSlantEqual:"\u227C",PrecedesTilde:"\u227E",preceq:"\u2AAF",precnapprox:"\u2AB9",precneqq:"\u2AB5",precnsim:"\u22E8",pre:"\u2AAF",prE:"\u2AB3",precsim:"\u227E",prime:"\u2032",Prime:"\u2033",primes:"\u2119",prnap:"\u2AB9",prnE:"\u2AB5",prnsim:"\u22E8",prod:"\u220F",Product:"\u220F",profalar:"\u232E",profline:"\u2312",profsurf:"\u2313",prop:"\u221D",Proportional:"\u221D",Proportion:"\u2237",propto:"\u221D",prsim:"\u227E",prurel:"\u22B0",Pscr:"\u{1D4AB}",pscr:"\u{1D4C5}",Psi:"\u03A8",psi:"\u03C8",puncsp:"\u2008",Qfr:"\u{1D514}",qfr:"\u{1D52E}",qint:"\u2A0C",qopf:"\u{1D562}",Qopf:"\u211A",qprime:"\u2057",Qscr:"\u{1D4AC}",qscr:"\u{1D4C6}",quaternions:"\u210D",quatint:"\u2A16",quest:"?",questeq:"\u225F",quot:'"',QUOT:'"',rAarr:"\u21DB",race:"\u223D\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221A",raemptyv:"\u29B3",rang:"\u27E9",Rang:"\u27EB",rangd:"\u2992",range:"\u29A5",rangle:"\u27E9",raquo:"\xBB",rarrap:"\u2975",rarrb:"\u21E5",rarrbfs:"\u2920",rarrc:"\u2933",rarr:"\u2192",Rarr:"\u21A0",rArr:"\u21D2",rarrfs:"\u291E",rarrhk:"\u21AA",rarrlp:"\u21AC",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21A3",rarrw:"\u219D",ratail:"\u291A",rAtail:"\u291C",ratio:"\u2236",rationals:"\u211A",rbarr:"\u290D",rBarr:"\u290F",RBarr:"\u2910",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298C",rbrksld:"\u298E",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201D",rdquor:"\u201D",rdsh:"\u21B3",real:"\u211C",realine:"\u211B",realpart:"\u211C",reals:"\u211D",Re:"\u211C",rect:"\u25AD",reg:"\xAE",REG:"\xAE",ReverseElement:"\u220B",ReverseEquilibrium:"\u21CB",ReverseUpEquilibrium:"\u296F",rfisht:"\u297D",rfloor:"\u230B",rfr:"\u{1D52F}",Rfr:"\u211C",rHar:"\u2964",rhard:"\u21C1",rharu:"\u21C0",rharul:"\u296C",Rho:"\u03A1",rho:"\u03C1",rhov:"\u03F1",RightAngleBracket:"\u27E9",RightArrowBar:"\u21E5",rightarrow:"\u2192",RightArrow:"\u2192",Rightarrow:"\u21D2",RightArrowLeftArrow:"\u21C4",rightarrowtail:"\u21A3",RightCeiling:"\u2309",RightDoubleBracket:"\u27E7",RightDownTeeVector:"\u295D",RightDownVectorBar:"\u2955",RightDownVector:"\u21C2",RightFloor:"\u230B",rightharpoondown:"\u21C1",rightharpoonup:"\u21C0",rightleftarrows:"\u21C4",rightleftharpoons:"\u21CC",rightrightarrows:"\u21C9",rightsquigarrow:"\u219D",RightTeeArrow:"\u21A6",RightTee:"\u22A2",RightTeeVector:"\u295B",rightthreetimes:"\u22CC",RightTriangleBar:"\u29D0",RightTriangle:"\u22B3",RightTriangleEqual:"\u22B5",RightUpDownVector:"\u294F",RightUpTeeVector:"\u295C",RightUpVectorBar:"\u2954",RightUpVector:"\u21BE",RightVectorBar:"\u2953",RightVector:"\u21C0",ring:"\u02DA",risingdotseq:"\u2253",rlarr:"\u21C4",rlhar:"\u21CC",rlm:"\u200F",rmoustache:"\u23B1",rmoust:"\u23B1",rnmid:"\u2AEE",roang:"\u27ED",roarr:"\u21FE",robrk:"\u27E7",ropar:"\u2986",ropf:"\u{1D563}",Ropf:"\u211D",roplus:"\u2A2E",rotimes:"\u2A35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2A12",rrarr:"\u21C9",Rrightarrow:"\u21DB",rsaquo:"\u203A",rscr:"\u{1D4C7}",Rscr:"\u211B",rsh:"\u21B1",Rsh:"\u21B1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22CC",rtimes:"\u22CA",rtri:"\u25B9",rtrie:"\u22B5",rtrif:"\u25B8",rtriltri:"\u29CE",RuleDelayed:"\u29F4",ruluhar:"\u2968",rx:"\u211E",Sacute:"\u015A",sacute:"\u015B",sbquo:"\u201A",scap:"\u2AB8",Scaron:"\u0160",scaron:"\u0161",Sc:"\u2ABC",sc:"\u227B",sccue:"\u227D",sce:"\u2AB0",scE:"\u2AB4",Scedil:"\u015E",scedil:"\u015F",Scirc:"\u015C",scirc:"\u015D",scnap:"\u2ABA",scnE:"\u2AB6",scnsim:"\u22E9",scpolint:"\u2A13",scsim:"\u227F",Scy:"\u0421",scy:"\u0441",sdotb:"\u22A1",sdot:"\u22C5",sdote:"\u2A66",searhk:"\u2925",searr:"\u2198",seArr:"\u21D8",searrow:"\u2198",sect:"\xA7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\u{1D516}",sfr:"\u{1D530}",sfrown:"\u2322",sharp:"\u266F",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xAD",Sigma:"\u03A3",sigma:"\u03C3",sigmaf:"\u03C2",sigmav:"\u03C2",sim:"\u223C",simdot:"\u2A6A",sime:"\u2243",simeq:"\u2243",simg:"\u2A9E",simgE:"\u2AA0",siml:"\u2A9D",simlE:"\u2A9F",simne:"\u2246",simplus:"\u2A24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2A33",smeparsl:"\u29E4",smid:"\u2223",smile:"\u2323",smt:"\u2AAA",smte:"\u2AAC",smtes:"\u2AAC\uFE00",SOFTcy:"\u042C",softcy:"\u044C",solbar:"\u233F",solb:"\u29C4",sol:"/",Sopf:"\u{1D54A}",sopf:"\u{1D564}",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\uFE00",sqcup:"\u2294",sqcups:"\u2294\uFE00",Sqrt:"\u221A",sqsub:"\u228F",sqsube:"\u2291",sqsubset:"\u228F",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",square:"\u25A1",Square:"\u25A1",SquareIntersection:"\u2293",SquareSubset:"\u228F",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25AA",squ:"\u25A1",squf:"\u25AA",srarr:"\u2192",Sscr:"\u{1D4AE}",sscr:"\u{1D4C8}",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22C6",Star:"\u22C6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03F5",straightphi:"\u03D5",strns:"\xAF",sub:"\u2282",Sub:"\u22D0",subdot:"\u2ABD",subE:"\u2AC5",sube:"\u2286",subedot:"\u2AC3",submult:"\u2AC1",subnE:"\u2ACB",subne:"\u228A",subplus:"\u2ABF",subrarr:"\u2979",subset:"\u2282",Subset:"\u22D0",subseteq:"\u2286",subseteqq:"\u2AC5",SubsetEqual:"\u2286",subsetneq:"\u228A",subsetneqq:"\u2ACB",subsim:"\u2AC7",subsub:"\u2AD5",subsup:"\u2AD3",succapprox:"\u2AB8",succ:"\u227B",succcurlyeq:"\u227D",Succeeds:"\u227B",SucceedsEqual:"\u2AB0",SucceedsSlantEqual:"\u227D",SucceedsTilde:"\u227F",succeq:"\u2AB0",succnapprox:"\u2ABA",succneqq:"\u2AB6",succnsim:"\u22E9",succsim:"\u227F",SuchThat:"\u220B",sum:"\u2211",Sum:"\u2211",sung:"\u266A",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",sup:"\u2283",Sup:"\u22D1",supdot:"\u2ABE",supdsub:"\u2AD8",supE:"\u2AC6",supe:"\u2287",supedot:"\u2AC4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27C9",suphsub:"\u2AD7",suplarr:"\u297B",supmult:"\u2AC2",supnE:"\u2ACC",supne:"\u228B",supplus:"\u2AC0",supset:"\u2283",Supset:"\u22D1",supseteq:"\u2287",supseteqq:"\u2AC6",supsetneq:"\u228B",supsetneqq:"\u2ACC",supsim:"\u2AC8",supsub:"\u2AD4",supsup:"\u2AD6",swarhk:"\u2926",swarr:"\u2199",swArr:"\u21D9",swarrow:"\u2199",swnwar:"\u292A",szlig:"\xDF",Tab:"	",target:"\u2316",Tau:"\u03A4",tau:"\u03C4",tbrk:"\u23B4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20DB",telrec:"\u2315",Tfr:"\u{1D517}",tfr:"\u{1D531}",there4:"\u2234",therefore:"\u2234",Therefore:"\u2234",Theta:"\u0398",theta:"\u03B8",thetasym:"\u03D1",thetav:"\u03D1",thickapprox:"\u2248",thicksim:"\u223C",ThickSpace:"\u205F\u200A",ThinSpace:"\u2009",thinsp:"\u2009",thkap:"\u2248",thksim:"\u223C",THORN:"\xDE",thorn:"\xFE",tilde:"\u02DC",Tilde:"\u223C",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",timesbar:"\u2A31",timesb:"\u22A0",times:"\xD7",timesd:"\u2A30",tint:"\u222D",toea:"\u2928",topbot:"\u2336",topcir:"\u2AF1",top:"\u22A4",Topf:"\u{1D54B}",topf:"\u{1D565}",topfork:"\u2ADA",tosa:"\u2929",tprime:"\u2034",trade:"\u2122",TRADE:"\u2122",triangle:"\u25B5",triangledown:"\u25BF",triangleleft:"\u25C3",trianglelefteq:"\u22B4",triangleq:"\u225C",triangleright:"\u25B9",trianglerighteq:"\u22B5",tridot:"\u25EC",trie:"\u225C",triminus:"\u2A3A",TripleDot:"\u20DB",triplus:"\u2A39",trisb:"\u29CD",tritime:"\u2A3B",trpezium:"\u23E2",Tscr:"\u{1D4AF}",tscr:"\u{1D4C9}",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040B",tshcy:"\u045B",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226C",twoheadleftarrow:"\u219E",twoheadrightarrow:"\u21A0",Uacute:"\xDA",uacute:"\xFA",uarr:"\u2191",Uarr:"\u219F",uArr:"\u21D1",Uarrocir:"\u2949",Ubrcy:"\u040E",ubrcy:"\u045E",Ubreve:"\u016C",ubreve:"\u016D",Ucirc:"\xDB",ucirc:"\xFB",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21C5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296E",ufisht:"\u297E",Ufr:"\u{1D518}",ufr:"\u{1D532}",Ugrave:"\xD9",ugrave:"\xF9",uHar:"\u2963",uharl:"\u21BF",uharr:"\u21BE",uhblk:"\u2580",ulcorn:"\u231C",ulcorner:"\u231C",ulcrop:"\u230F",ultri:"\u25F8",Umacr:"\u016A",umacr:"\u016B",uml:"\xA8",UnderBar:"_",UnderBrace:"\u23DF",UnderBracket:"\u23B5",UnderParenthesis:"\u23DD",Union:"\u22C3",UnionPlus:"\u228E",Uogon:"\u0172",uogon:"\u0173",Uopf:"\u{1D54C}",uopf:"\u{1D566}",UpArrowBar:"\u2912",uparrow:"\u2191",UpArrow:"\u2191",Uparrow:"\u21D1",UpArrowDownArrow:"\u21C5",updownarrow:"\u2195",UpDownArrow:"\u2195",Updownarrow:"\u21D5",UpEquilibrium:"\u296E",upharpoonleft:"\u21BF",upharpoonright:"\u21BE",uplus:"\u228E",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",upsi:"\u03C5",Upsi:"\u03D2",upsih:"\u03D2",Upsilon:"\u03A5",upsilon:"\u03C5",UpTeeArrow:"\u21A5",UpTee:"\u22A5",upuparrows:"\u21C8",urcorn:"\u231D",urcorner:"\u231D",urcrop:"\u230E",Uring:"\u016E",uring:"\u016F",urtri:"\u25F9",Uscr:"\u{1D4B0}",uscr:"\u{1D4CA}",utdot:"\u22F0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25B5",utrif:"\u25B4",uuarr:"\u21C8",Uuml:"\xDC",uuml:"\xFC",uwangle:"\u29A7",vangrt:"\u299C",varepsilon:"\u03F5",varkappa:"\u03F0",varnothing:"\u2205",varphi:"\u03D5",varpi:"\u03D6",varpropto:"\u221D",varr:"\u2195",vArr:"\u21D5",varrho:"\u03F1",varsigma:"\u03C2",varsubsetneq:"\u228A\uFE00",varsubsetneqq:"\u2ACB\uFE00",varsupsetneq:"\u228B\uFE00",varsupsetneqq:"\u2ACC\uFE00",vartheta:"\u03D1",vartriangleleft:"\u22B2",vartriangleright:"\u22B3",vBar:"\u2AE8",Vbar:"\u2AEB",vBarv:"\u2AE9",Vcy:"\u0412",vcy:"\u0432",vdash:"\u22A2",vDash:"\u22A8",Vdash:"\u22A9",VDash:"\u22AB",Vdashl:"\u2AE6",veebar:"\u22BB",vee:"\u2228",Vee:"\u22C1",veeeq:"\u225A",vellip:"\u22EE",verbar:"|",Verbar:"\u2016",vert:"|",Vert:"\u2016",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200A",Vfr:"\u{1D519}",vfr:"\u{1D533}",vltri:"\u22B2",vnsub:"\u2282\u20D2",vnsup:"\u2283\u20D2",Vopf:"\u{1D54D}",vopf:"\u{1D567}",vprop:"\u221D",vrtri:"\u22B3",Vscr:"\u{1D4B1}",vscr:"\u{1D4CB}",vsubnE:"\u2ACB\uFE00",vsubne:"\u228A\uFE00",vsupnE:"\u2ACC\uFE00",vsupne:"\u228B\uFE00",Vvdash:"\u22AA",vzigzag:"\u299A",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2A5F",wedge:"\u2227",Wedge:"\u22C0",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\u{1D51A}",wfr:"\u{1D534}",Wopf:"\u{1D54E}",wopf:"\u{1D568}",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\u{1D4B2}",wscr:"\u{1D4CC}",xcap:"\u22C2",xcirc:"\u25EF",xcup:"\u22C3",xdtri:"\u25BD",Xfr:"\u{1D51B}",xfr:"\u{1D535}",xharr:"\u27F7",xhArr:"\u27FA",Xi:"\u039E",xi:"\u03BE",xlarr:"\u27F5",xlArr:"\u27F8",xmap:"\u27FC",xnis:"\u22FB",xodot:"\u2A00",Xopf:"\u{1D54F}",xopf:"\u{1D569}",xoplus:"\u2A01",xotime:"\u2A02",xrarr:"\u27F6",xrArr:"\u27F9",Xscr:"\u{1D4B3}",xscr:"\u{1D4CD}",xsqcup:"\u2A06",xuplus:"\u2A04",xutri:"\u25B3",xvee:"\u22C1",xwedge:"\u22C0",Yacute:"\xDD",yacute:"\xFD",YAcy:"\u042F",yacy:"\u044F",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042B",ycy:"\u044B",yen:"\xA5",Yfr:"\u{1D51C}",yfr:"\u{1D536}",YIcy:"\u0407",yicy:"\u0457",Yopf:"\u{1D550}",yopf:"\u{1D56A}",Yscr:"\u{1D4B4}",yscr:"\u{1D4CE}",YUcy:"\u042E",yucy:"\u044E",yuml:"\xFF",Yuml:"\u0178",Zacute:"\u0179",zacute:"\u017A",Zcaron:"\u017D",zcaron:"\u017E",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017B",zdot:"\u017C",zeetrf:"\u2128",ZeroWidthSpace:"\u200B",Zeta:"\u0396",zeta:"\u03B6",zfr:"\u{1D537}",Zfr:"\u2128",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21DD",zopf:"\u{1D56B}",Zopf:"\u2124",Zscr:"\u{1D4B5}",zscr:"\u{1D4CF}",zwj:"\u200D",zwnj:"\u200C"}});var fo=W((id,Ga)=>{"use strict";M();Ga.exports=Ha()});var jr=W((ad,Za)=>{M();Za.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/});var Qa=W((sd,Ja)=>{"use strict";M();var Xa={};function Vl(a){var n,u,o=Xa[a];if(o)return o;for(o=Xa[a]=[],n=0;n<128;n++)u=String.fromCharCode(n),/^[0-9a-z]$/i.test(u)?o.push(u):o.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2));for(n=0;n<a.length;n++)o[a.charCodeAt(n)]=a[n];return o}function $r(a,n,u){var o,e,t,h,p,f="";for(typeof n!="string"&&(u=n,n=$r.defaultChars),typeof u>"u"&&(u=!0),p=Vl(n),o=0,e=a.length;o<e;o++){if(t=a.charCodeAt(o),u&&t===37&&o+2<e&&/^[0-9a-f]{2}$/i.test(a.slice(o+1,o+3))){f+=a.slice(o,o+3),o+=2;continue}if(t<128){f+=p[t];continue}if(t>=55296&&t<=57343){if(t>=55296&&t<=56319&&o+1<e&&(h=a.charCodeAt(o+1),h>=56320&&h<=57343)){f+=encodeURIComponent(a[o]+a[o+1]),o++;continue}f+="%EF%BF%BD";continue}f+=encodeURIComponent(a[o])}return f}$r.defaultChars=";/?:@&=+$,-_.!~*'()#";$r.componentChars="-_.!~*'()";Ja.exports=$r});var eu=W((cd,nu)=>{"use strict";M();var Ka={};function Hl(a){var n,u,o=Ka[a];if(o)return o;for(o=Ka[a]=[],n=0;n<128;n++)u=String.fromCharCode(n),o.push(u);for(n=0;n<a.length;n++)u=a.charCodeAt(n),o[u]="%"+("0"+u.toString(16).toUpperCase()).slice(-2);return o}function Ur(a,n){var u;return typeof n!="string"&&(n=Ur.defaultChars),u=Hl(n),a.replace(/(%[a-f0-9]{2})+/gi,function(o){var e,t,h,p,f,m,z,S="";for(e=0,t=o.length;e<t;e+=3){if(h=parseInt(o.slice(e+1,e+3),16),h<128){S+=u[h];continue}if((h&224)===192&&e+3<t&&(p=parseInt(o.slice(e+4,e+6),16),(p&192)===128)){z=h<<6&1984|p&63,z<128?S+="\uFFFD\uFFFD":S+=String.fromCharCode(z),e+=3;continue}if((h&240)===224&&e+6<t&&(p=parseInt(o.slice(e+4,e+6),16),f=parseInt(o.slice(e+7,e+9),16),(p&192)===128&&(f&192)===128)){z=h<<12&61440|p<<6&4032|f&63,z<2048||z>=55296&&z<=57343?S+="\uFFFD\uFFFD\uFFFD":S+=String.fromCharCode(z),e+=6;continue}if((h&248)===240&&e+9<t&&(p=parseInt(o.slice(e+4,e+6),16),f=parseInt(o.slice(e+7,e+9),16),m=parseInt(o.slice(e+10,e+12),16),(p&192)===128&&(f&192)===128&&(m&192)===128)){z=h<<18&1835008|p<<12&258048|f<<6&4032|m&63,z<65536||z>1114111?S+="\uFFFD\uFFFD\uFFFD\uFFFD":(z-=65536,S+=String.fromCharCode(55296+(z>>10),56320+(z&1023))),e+=9;continue}S+="\uFFFD"}return S})}Ur.defaultChars=";/?:@&=+$,#";Ur.componentChars="";nu.exports=Ur});var ru=W((pd,tu)=>{"use strict";M();tu.exports=function(n){var u="";return u+=n.protocol||"",u+=n.slashes?"//":"",u+=n.auth?n.auth+"@":"",n.hostname&&n.hostname.indexOf(":")!==-1?u+="["+n.hostname+"]":u+=n.hostname||"",u+=n.port?":"+n.port:"",u+=n.pathname||"",u+=n.search||"",u+=n.hash||"",u}});var cu=W((gd,lu)=>{"use strict";M();function Wr(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var Gl=/^([a-z0-9.+-]+:)/i,Zl=/:[0-9]*$/,Xl=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Jl=["<",">",'"',"`"," ","\r",`
`,"	"],Ql=["{","}","|","\\","^","`"].concat(Jl),Kl=["'"].concat(Ql),iu=["%","/","?",";","#"].concat(Kl),ou=["/","?","#"],nc=255,au=/^[+a-z0-9A-Z_-]{0,63}$/,ec=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,uu={javascript:!0,"javascript:":!0},su={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function tc(a,n){if(a&&a instanceof Wr)return a;var u=new Wr;return u.parse(a,n),u}Wr.prototype.parse=function(a,n){var u,o,e,t,h,p=a;if(p=p.trim(),!n&&a.split("#").length===1){var f=Xl.exec(p);if(f)return this.pathname=f[1],f[2]&&(this.search=f[2]),this}var m=Gl.exec(p);if(m&&(m=m[0],e=m.toLowerCase(),this.protocol=m,p=p.substr(m.length)),(n||m||p.match(/^\/\/[^@\/]+@[^@\/]+/))&&(h=p.substr(0,2)==="//",h&&!(m&&uu[m])&&(p=p.substr(2),this.slashes=!0)),!uu[m]&&(h||m&&!su[m])){var z=-1;for(u=0;u<ou.length;u++)t=p.indexOf(ou[u]),t!==-1&&(z===-1||t<z)&&(z=t);var S,F;for(z===-1?F=p.lastIndexOf("@"):F=p.lastIndexOf("@",z),F!==-1&&(S=p.slice(0,F),p=p.slice(F+1),this.auth=S),z=-1,u=0;u<iu.length;u++)t=p.indexOf(iu[u]),t!==-1&&(z===-1||t<z)&&(z=t);z===-1&&(z=p.length),p[z-1]===":"&&z--;var w=p.slice(0,z);p=p.slice(z),this.parseHost(w),this.hostname=this.hostname||"";var C=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!C){var b=this.hostname.split(/\./);for(u=0,o=b.length;u<o;u++){var T=b[u];if(T&&!T.match(au)){for(var P="",R=0,I=T.length;R<I;R++)T.charCodeAt(R)>127?P+="x":P+=T[R];if(!P.match(au)){var x=b.slice(0,u),q=b.slice(u+1),E=T.match(ec);E&&(x.push(E[1]),q.unshift(E[2])),q.length&&(p=q.join(".")+p),this.hostname=x.join(".");break}}}}this.hostname.length>nc&&(this.hostname=""),C&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var J=p.indexOf("#");J!==-1&&(this.hash=p.substr(J),p=p.slice(0,J));var Q=p.indexOf("?");return Q!==-1&&(this.search=p.substr(Q),p=p.slice(0,Q)),p&&(this.pathname=p),su[e]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Wr.prototype.parseHost=function(a){var n=Zl.exec(a);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),a=a.substr(0,a.length-n.length)),a&&(this.hostname=a)};lu.exports=tc});var go=W((bd,Ht)=>{"use strict";M();Ht.exports.encode=Qa();Ht.exports.decode=eu();Ht.exports.format=ru();Ht.exports.parse=cu()});var ho=W((vd,du)=>{M();du.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/});var bo=W((xd,pu)=>{M();pu.exports=/[\0-\x1F\x7F-\x9F]/});var gu=W((yd,fu)=>{M();fu.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/});var mo=W((Cd,hu)=>{M();hu.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/});var bu=W(ft=>{"use strict";M();ft.Any=ho();ft.Cc=bo();ft.Cf=gu();ft.P=jr();ft.Z=mo()});var pn=W(yn=>{"use strict";M();function rc(a){return Object.prototype.toString.call(a)}function ic(a){return rc(a)==="[object String]"}var oc=Object.prototype.hasOwnProperty;function vu(a,n){return oc.call(a,n)}function ac(a){var n=Array.prototype.slice.call(arguments,1);return n.forEach(function(u){if(u){if(typeof u!="object")throw new TypeError(u+"must be object");Object.keys(u).forEach(function(o){a[o]=u[o]})}}),a}function uc(a,n,u){return[].concat(a.slice(0,n),u,a.slice(n+1))}function ku(a){return!(a>=55296&&a<=57343||a>=64976&&a<=65007||(a&65535)===65535||(a&65535)===65534||a>=0&&a<=8||a===11||a>=14&&a<=31||a>=127&&a<=159||a>1114111)}function xu(a){if(a>65535){a-=65536;var n=55296+(a>>10),u=56320+(a&1023);return String.fromCharCode(n,u)}return String.fromCharCode(a)}var Fu=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,sc=/&([a-z#][a-z0-9]{1,31});/gi,lc=new RegExp(Fu.source+"|"+sc.source,"gi"),cc=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,mu=fo();function dc(a,n){var u=0;return vu(mu,n)?mu[n]:n.charCodeAt(0)===35&&cc.test(n)&&(u=n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10),ku(u))?xu(u):a}function pc(a){return a.indexOf("\\")<0?a:a.replace(Fu,"$1")}function fc(a){return a.indexOf("\\")<0&&a.indexOf("&")<0?a:a.replace(lc,function(n,u,o){return u||dc(n,o)})}var gc=/[&<>"]/,hc=/[&<>"]/g,bc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function mc(a){return bc[a]}function vc(a){return gc.test(a)?a.replace(hc,mc):a}var kc=/[.?*+^$[\]\\(){}|-]/g;function xc(a){return a.replace(kc,"\\$&")}function Fc(a){switch(a){case 9:case 32:return!0}return!1}function yc(a){if(a>=8192&&a<=8202)return!0;switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var wc=jr();function Cc(a){return wc.test(a)}function Ec(a){switch(a){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function _c(a){return a.trim().replace(/\s+/g," ").toUpperCase()}yn.lib={};yn.lib.mdurl=go();yn.lib.ucmicro=bu();yn.assign=ac;yn.isString=ic;yn.has=vu;yn.unescapeMd=pc;yn.unescapeAll=fc;yn.isValidEntityCode=ku;yn.fromCodePoint=xu;yn.escapeHtml=vc;yn.arrayReplaceAt=uc;yn.isSpace=Fc;yn.isWhiteSpace=yc;yn.isMdAsciiPunct=Ec;yn.isPunctChar=Cc;yn.escapeRE=xc;yn.normalizeReference=_c});var Vr=W((Ad,yu)=>{"use strict";M();yu.exports=function(n,u,o){var e,t,h,p,f=-1,m=n.posMax,z=n.pos;for(n.pos=u+1,e=1;n.pos<m;){if(h=n.src.charCodeAt(n.pos),h===93&&(e--,e===0)){t=!0;break}if(p=n.pos,n.md.inline.skipToken(n),h===91){if(p===n.pos-1)e++;else if(o)return n.pos=z,-1}}return t&&(f=n.pos),n.pos=z,f}});var Gt=W((Sd,Cu)=>{"use strict";M();var Dc=pn().isSpace,wu=pn().unescapeAll;Cu.exports=function(n,u,o){var e,t,h=0,p=u,f={ok:!1,pos:0,lines:0,str:""};if(n.charCodeAt(u)===60){for(u++;u<o;){if(e=n.charCodeAt(u),e===10||Dc(e))return f;if(e===62)return f.pos=u+1,f.str=wu(n.slice(p+1,u)),f.ok=!0,f;if(e===92&&u+1<o){u+=2;continue}u++}return f}for(t=0;u<o&&(e=n.charCodeAt(u),!(e===32||e<32||e===127));){if(e===92&&u+1<o){u+=2;continue}if(e===40&&(t++,t>1)||e===41&&(t--,t<0))break;u++}return p===u||(f.str=wu(n.slice(p,u)),f.lines=h,f.pos=u,f.ok=!0),f}});var Zt=W((Id,Eu)=>{"use strict";M();var qc=pn().unescapeAll;Eu.exports=function(n,u,o){var e,t,h=0,p=u,f={ok:!1,pos:0,lines:0,str:""};if(u>=o||(t=n.charCodeAt(u),t!==34&&t!==39&&t!==40))return f;for(u++,t===40&&(t=41);u<o;){if(e=n.charCodeAt(u),e===t)return f.pos=u+1,f.lines=h,f.str=qc(n.slice(p+1,u)),f.ok=!0,f;e===10?h++:e===92&&u+1<o&&(u++,n.charCodeAt(u)===10&&h++),u++}return f}});var _u=W(Hr=>{"use strict";M();Hr.parseLinkLabel=Vr();Hr.parseLinkDestination=Gt();Hr.parseLinkTitle=Zt()});var qu=W((Pd,Du)=>{"use strict";M();var zc=pn().assign,Ac=pn().unescapeAll,Ze=pn().escapeHtml,ne={};ne.code_inline=function(a,n,u,o,e){var t=a[n],h=e.renderAttrs(t);return"<code"+(h?" "+h:"")+">"+Ze(a[n].content)+"</code>"};ne.code_block=function(a,n,u,o,e){var t=a[n],h=e.renderAttrs(t);return"<pre"+(h?" "+h:"")+"><code>"+Ze(a[n].content)+`</code></pre>
`};ne.fence=function(a,n,u,o,e){var t=a[n],h=t.info?Ac(t.info).trim():"",p="",f,m,z,S;return h&&(p=h.split(/\s+/g)[0]),u.highlight?f=u.highlight(t.content,p)||Ze(t.content):f=Ze(t.content),f.indexOf("<pre")===0?f+`
`:h?(m=t.attrIndex("class"),z=t.attrs?t.attrs.slice():[],m<0?z.push(["class",u.langPrefix+p]):z[m]+=" "+u.langPrefix+p,S={attrs:z},"<pre><code"+e.renderAttrs(S)+">"+f+`</code></pre>
`):"<pre><code"+e.renderAttrs(t)+">"+f+`</code></pre>
`};ne.image=function(a,n,u,o,e){var t=a[n];return t.attrs[t.attrIndex("alt")][1]=e.renderInlineAsText(t.children,u,o),e.renderToken(a,n,u)};ne.hardbreak=function(a,n,u){return u.xhtmlOut?`<br />
`:`<br>
`};ne.softbreak=function(a,n,u){return u.breaks?u.xhtmlOut?`<br />
`:`<br>
`:`
`};ne.text=function(a,n){return Ze(a[n].content)};ne.html_block=function(a,n){return a[n].content};ne.html_inline=function(a,n){return a[n].content};function gt(){this.rules=zc({},ne)}gt.prototype.renderAttrs=function(n){var u,o,e;if(!n.attrs)return"";for(e="",u=0,o=n.attrs.length;u<o;u++)e+=" "+Ze(n.attrs[u][0])+'="'+Ze(n.attrs[u][1])+'"';return e};gt.prototype.renderToken=function(n,u,o){var e,t="",h=!1,p=n[u];return p.hidden?"":(p.block&&p.nesting!==-1&&u&&n[u-1].hidden&&(t+=`
`),t+=(p.nesting===-1?"</":"<")+p.tag,t+=this.renderAttrs(p),p.nesting===0&&o.xhtmlOut&&(t+=" /"),p.block&&(h=!0,p.nesting===1&&u+1<n.length&&(e=n[u+1],(e.type==="inline"||e.hidden||e.nesting===-1&&e.tag===p.tag)&&(h=!1))),t+=h?`>
`:">",t)};gt.prototype.renderInline=function(a,n,u){for(var o,e="",t=this.rules,h=0,p=a.length;h<p;h++)o=a[h].type,typeof t[o]<"u"?e+=t[o](a,h,n,u,this):e+=this.renderToken(a,h,n);return e};gt.prototype.renderInlineAsText=function(a,n,u){for(var o="",e=0,t=a.length;e<t;e++)a[e].type==="text"?o+=a[e].content:a[e].type==="image"&&(o+=this.renderInlineAsText(a[e].children,n,u));return o};gt.prototype.render=function(a,n,u){var o,e,t,h="",p=this.rules;for(o=0,e=a.length;o<e;o++)t=a[o].type,t==="inline"?h+=this.renderInline(a[o].children,n,u):typeof p[t]<"u"?h+=p[a[o].type](a,o,n,u,this):h+=this.renderToken(a,o,n,u);return h};Du.exports=gt});var Gr=W((Nd,zu)=>{"use strict";M();function Wn(){this.__rules__=[],this.__cache__=null}Wn.prototype.__find__=function(a){for(var n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===a)return n;return-1};Wn.prototype.__compile__=function(){var a=this,n=[""];a.__rules__.forEach(function(u){u.enabled&&u.alt.forEach(function(o){n.indexOf(o)<0&&n.push(o)})}),a.__cache__={},n.forEach(function(u){a.__cache__[u]=[],a.__rules__.forEach(function(o){o.enabled&&(u&&o.alt.indexOf(u)<0||a.__cache__[u].push(o.fn))})})};Wn.prototype.at=function(a,n,u){var o=this.__find__(a),e=u||{};if(o===-1)throw new Error("Parser rule not found: "+a);this.__rules__[o].fn=n,this.__rules__[o].alt=e.alt||[],this.__cache__=null};Wn.prototype.before=function(a,n,u,o){var e=this.__find__(a),t=o||{};if(e===-1)throw new Error("Parser rule not found: "+a);this.__rules__.splice(e,0,{name:n,enabled:!0,fn:u,alt:t.alt||[]}),this.__cache__=null};Wn.prototype.after=function(a,n,u,o){var e=this.__find__(a),t=o||{};if(e===-1)throw new Error("Parser rule not found: "+a);this.__rules__.splice(e+1,0,{name:n,enabled:!0,fn:u,alt:t.alt||[]}),this.__cache__=null};Wn.prototype.push=function(a,n,u){var o=u||{};this.__rules__.push({name:a,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null};Wn.prototype.enable=function(a,n){Array.isArray(a)||(a=[a]);var u=[];return a.forEach(function(o){var e=this.__find__(o);if(e<0){if(n)return;throw new Error("Rules manager: invalid rule name "+o)}this.__rules__[e].enabled=!0,u.push(o)},this),this.__cache__=null,u};Wn.prototype.enableOnly=function(a,n){Array.isArray(a)||(a=[a]),this.__rules__.forEach(function(u){u.enabled=!1}),this.enable(a,n)};Wn.prototype.disable=function(a,n){Array.isArray(a)||(a=[a]);var u=[];return a.forEach(function(o){var e=this.__find__(o);if(e<0){if(n)return;throw new Error("Rules manager: invalid rule name "+o)}this.__rules__[e].enabled=!1,u.push(o)},this),this.__cache__=null,u};Wn.prototype.getRules=function(a){return this.__cache__===null&&this.__compile__(),this.__cache__[a]||[]};zu.exports=Wn});var Mu=W((jd,Au)=>{"use strict";M();var Mc=/\r[\n\u0085]?|[\u2424\u2028\u0085]/g,Sc=/\u0000/g;Au.exports=function(n){var u;u=n.src.replace(Mc,`
`),u=u.replace(Sc,"\uFFFD"),n.src=u}});var Bu=W((Ud,Su)=>{"use strict";M();Su.exports=function(n){var u;n.inlineMode?(u=new n.Token("inline","",0),u.content=n.src,u.map=[0,1],u.children=[],n.tokens.push(u)):n.md.block.parse(n.src,n.md,n.env,n.tokens)}});var Tu=W((Vd,Iu)=>{"use strict";M();Iu.exports=function(n){var u=n.tokens,o,e,t;for(e=0,t=u.length;e<t;e++)o=u[e],o.type==="inline"&&n.md.inline.parse(o.content,n.md,n.env,o.children)}});var Ou=W((Gd,Ru)=>{"use strict";M();var Bc=pn().arrayReplaceAt;function Ic(a){return/^<a[>\s]/i.test(a)}function Tc(a){return/^<\/a\s*>/i.test(a)}Ru.exports=function(n){var u,o,e,t,h,p,f,m,z,S,F,w,C,b,T,P,R=n.tokens,I;if(n.md.options.linkify){for(o=0,e=R.length;o<e;o++)if(!(R[o].type!=="inline"||!n.md.linkify.pretest(R[o].content)))for(t=R[o].children,C=0,u=t.length-1;u>=0;u--){if(p=t[u],p.type==="link_close"){for(u--;t[u].level!==p.level&&t[u].type!=="link_open";)u--;continue}if(p.type==="html_inline"&&(Ic(p.content)&&C>0&&C--,Tc(p.content)&&C++),!(C>0)&&p.type==="text"&&n.md.linkify.test(p.content)){for(z=p.content,I=n.md.linkify.match(z),f=[],w=p.level,F=0,m=0;m<I.length;m++)b=I[m].url,T=n.md.normalizeLink(b),n.md.validateLink(T)&&(P=I[m].text,I[m].schema?I[m].schema==="mailto:"&&!/^mailto:/i.test(P)?P=n.md.normalizeLinkText("mailto:"+P).replace(/^mailto:/,""):P=n.md.normalizeLinkText(P):P=n.md.normalizeLinkText("http://"+P).replace(/^http:\/\//,""),S=I[m].index,S>F&&(h=new n.Token("text","",0),h.content=z.slice(F,S),h.level=w,f.push(h)),h=new n.Token("link_open","a",1),h.attrs=[["href",T]],h.level=w++,h.markup="linkify",h.info="auto",f.push(h),h=new n.Token("text","",0),h.content=P,h.level=w,f.push(h),h=new n.Token("link_close","a",-1),h.level=--w,h.markup="linkify",h.info="auto",f.push(h),F=I[m].lastIndex);F<z.length&&(h=new n.Token("text","",0),h.content=z.slice(F),h.level=w,f.push(h)),R[o].children=t=Bc(t,u,f)}}}}});var Nu=W((Xd,Yu)=>{"use strict";M();var Pu=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Rc=/\((c|tm|r|p)\)/i,Oc=/\((c|tm|r|p)\)/ig,Pc={c:"\xA9",r:"\xAE",p:"\xA7",tm:"\u2122"};function Yc(a,n){return Pc[n.toLowerCase()]}function Nc(a){var n,u;for(n=a.length-1;n>=0;n--)u=a[n],u.type==="text"&&(u.content=u.content.replace(Oc,Yc))}function Lc(a){var n,u;for(n=a.length-1;n>=0;n--)u=a[n],u.type==="text"&&Pu.test(u.content)&&(u.content=u.content.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/mg,"$1\u2014$2").replace(/(^|\s)--(\s|$)/mg,"$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/mg,"$1\u2013$2"))}Yu.exports=function(n){var u;if(n.md.options.typographer)for(u=n.tokens.length-1;u>=0;u--)n.tokens[u].type==="inline"&&(Rc.test(n.tokens[u].content)&&Nc(n.tokens[u].children),Pu.test(n.tokens[u].content)&&Lc(n.tokens[u].children))}});var Hu=W((Qd,Vu)=>{"use strict";M();var Lu=pn().isWhiteSpace,ju=pn().isPunctChar,$u=pn().isMdAsciiPunct,jc=/['"]/,Uu=/['"]/g,Wu="\u2019";function Zr(a,n,u){return a.substr(0,n)+u+a.substr(n+1)}function $c(a,n){var u,o,e,t,h,p,f,m,z,S,F,w,C,b,T,P,R,I,x,q,E;for(x=[],u=0;u<a.length;u++){for(o=a[u],f=a[u].level,R=x.length-1;R>=0&&!(x[R].level<=f);R--);if(x.length=R+1,o.type==="text"){e=o.content,h=0,p=e.length;n:for(;h<p&&(Uu.lastIndex=h,t=Uu.exec(e),!!t);){if(T=P=!0,h=t.index+1,I=t[0]==="'",z=32,t.index-1>=0)z=e.charCodeAt(t.index-1);else for(R=u-1;R>=0;R--)if(a[R].type==="text"){z=a[R].content.charCodeAt(a[R].content.length-1);break}if(S=32,h<p)S=e.charCodeAt(h);else for(R=u+1;R<a.length;R++)if(a[R].type==="text"){S=a[R].content.charCodeAt(0);break}if(F=$u(z)||ju(String.fromCharCode(z)),w=$u(S)||ju(String.fromCharCode(S)),C=Lu(z),b=Lu(S),b?T=!1:w&&(C||F||(T=!1)),C?P=!1:F&&(b||w||(P=!1)),S===34&&t[0]==='"'&&z>=48&&z<=57&&(P=T=!1),T&&P&&(T=!1,P=w),!T&&!P){I&&(o.content=Zr(o.content,t.index,Wu));continue}if(P){for(R=x.length-1;R>=0&&(m=x[R],!(x[R].level<f));R--)if(m.single===I&&x[R].level===f){m=x[R],I?(q=n.md.options.quotes[2],E=n.md.options.quotes[3]):(q=n.md.options.quotes[0],E=n.md.options.quotes[1]),o.content=Zr(o.content,t.index,E),a[m.token].content=Zr(a[m.token].content,m.pos,q),h+=E.length-1,m.token===u&&(h+=q.length-1),e=o.content,p=e.length,x.length=R;continue n}}T?x.push({token:u,pos:t.index,single:I,level:f}):P&&I&&(o.content=Zr(o.content,t.index,Wu))}}}}Vu.exports=function(n){var u;if(n.md.options.typographer)for(u=n.tokens.length-1;u>=0;u--)n.tokens[u].type!=="inline"||!jc.test(n.tokens[u].content)||$c(n.tokens[u].children,n)}});var Xr=W((n5,Gu)=>{"use strict";M();function ht(a,n,u){this.type=a,this.tag=n,this.attrs=null,this.map=null,this.nesting=u,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}ht.prototype.attrIndex=function(n){var u,o,e;if(!this.attrs)return-1;for(u=this.attrs,o=0,e=u.length;o<e;o++)if(u[o][0]===n)return o;return-1};ht.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};ht.prototype.attrSet=function(n,u){var o=this.attrIndex(n),e=[n,u];o<0?this.attrPush(e):this.attrs[o]=e};ht.prototype.attrGet=function(n){var u=this.attrIndex(n),o=null;return u>=0&&(o=this.attrs[u][1]),o};ht.prototype.attrJoin=function(n,u){var o=this.attrIndex(n);o<0?this.attrPush([n,u]):this.attrs[o][1]=this.attrs[o][1]+" "+u};Gu.exports=ht});var Ju=W((t5,Xu)=>{"use strict";M();var Uc=Xr();function Zu(a,n,u){this.src=a,this.env=u,this.tokens=[],this.inlineMode=!1,this.md=n}Zu.prototype.Token=Uc;Xu.exports=Zu});var Ku=W((i5,Qu)=>{"use strict";M();var Wc=Gr(),vo=[["normalize",Mu()],["block",Bu()],["inline",Tu()],["linkify",Ou()],["replacements",Nu()],["smartquotes",Hu()]];function ko(){this.ruler=new Wc;for(var a=0;a<vo.length;a++)this.ruler.push(vo[a][0],vo[a][1])}ko.prototype.process=function(a){var n,u,o;for(o=this.ruler.getRules(""),n=0,u=o.length;n<u;n++)o[n](a)};ko.prototype.State=Ju();Qu.exports=ko});var t0=W((a5,e0)=>{"use strict";M();function xo(a,n){var u=a.bMarks[n]+a.blkIndent,o=a.eMarks[n];return a.src.substr(u,o-u)}function n0(a){var n=[],u=0,o=a.length,e,t=0,h=0,p=!1,f=0;for(e=a.charCodeAt(u);u<o;)e===96&&t%2===0?(p=!p,f=u):e===124&&t%2===0&&!p?(n.push(a.substring(h,u)),h=u+1):e===92?t++:t=0,u++,u===o&&p&&(p=!1,u=f+1),e=a.charCodeAt(u);return n.push(a.substring(h)),n}e0.exports=function(n,u,o,e){var t,h,p,f,m,z,S,F,w,C,b,T;if(u+2>o||(m=u+1,n.sCount[m]<n.blkIndent)||(p=n.bMarks[m]+n.tShift[m],p>=n.eMarks[m])||(t=n.src.charCodeAt(p),t!==124&&t!==45&&t!==58)||(h=xo(n,u+1),!/^[-:| ]+$/.test(h)))return!1;for(z=h.split("|"),w=[],f=0;f<z.length;f++){if(C=z[f].trim(),!C){if(f===0||f===z.length-1)continue;return!1}if(!/^:?-+:?$/.test(C))return!1;C.charCodeAt(C.length-1)===58?w.push(C.charCodeAt(0)===58?"center":"right"):C.charCodeAt(0)===58?w.push("left"):w.push("")}if(h=xo(n,u).trim(),h.indexOf("|")===-1||(z=n0(h.replace(/^\||\|$/g,"")),S=z.length,S>w.length))return!1;if(e)return!0;for(F=n.push("table_open","table",1),F.map=b=[u,0],F=n.push("thead_open","thead",1),F.map=[u,u+1],F=n.push("tr_open","tr",1),F.map=[u,u+1],f=0;f<z.length;f++)F=n.push("th_open","th",1),F.map=[u,u+1],w[f]&&(F.attrs=[["style","text-align:"+w[f]]]),F=n.push("inline","",0),F.content=z[f].trim(),F.map=[u,u+1],F.children=[],F=n.push("th_close","th",-1);for(F=n.push("tr_close","tr",-1),F=n.push("thead_close","thead",-1),F=n.push("tbody_open","tbody",1),F.map=T=[u+2,0],m=u+2;m<o&&!(n.sCount[m]<n.blkIndent||(h=xo(n,m),h.indexOf("|")===-1));m++){for(z=n0(h.replace(/^\||\|\s*$/g,"")),F=n.push("tr_open","tr",1),f=0;f<S;f++)F=n.push("td_open","td",1),w[f]&&(F.attrs=[["style","text-align:"+w[f]]]),F=n.push("inline","",0),F.content=z[f]?z[f].trim():"",F.children=[],F=n.push("td_close","td",-1);F=n.push("tr_close","tr",-1)}return F=n.push("tbody_close","tbody",-1),F=n.push("table_close","table",-1),b[1]=T[1]=m,n.line=m,!0}});var i0=W((s5,r0)=>{"use strict";M();r0.exports=function(n,u,o){var e,t,h,p=0;if(n.sCount[u]-n.blkIndent<4)return!1;for(t=e=u+1;e<o;){if(n.isEmpty(e)){if(p++,p>=2&&n.parentType==="list")break;e++;continue}if(p=0,n.sCount[e]-n.blkIndent>=4){e++,t=e;continue}break}return n.line=t,h=n.push("code_block","code",0),h.content=n.getLines(u,t,4+n.blkIndent,!0),h.map=[u,n.line],!0}});var a0=W((c5,o0)=>{"use strict";M();o0.exports=function(n,u,o,e){var t,h,p,f,m,z,S,F=!1,w=n.bMarks[u]+n.tShift[u],C=n.eMarks[u];if(w+3>C||(t=n.src.charCodeAt(w),t!==126&&t!==96)||(m=w,w=n.skipChars(w,t),h=w-m,h<3)||(S=n.src.slice(m,w),p=n.src.slice(w,C),p.indexOf("`")>=0))return!1;if(e)return!0;for(f=u;f++,!(f>=o||(w=m=n.bMarks[f]+n.tShift[f],C=n.eMarks[f],w<C&&n.sCount[f]<n.blkIndent));)if(n.src.charCodeAt(w)===t&&!(n.sCount[f]-n.blkIndent>=4)&&(w=n.skipChars(w,t),!(w-m<h)&&(w=n.skipSpaces(w),!(w<C)))){F=!0;break}return h=n.sCount[u],n.line=f+(F?1:0),z=n.push("fence","code",0),z.info=p,z.content=n.getLines(u+1,f,h,!0),z.markup=S,z.map=[u,n.line],!0}});var l0=W((p5,s0)=>{"use strict";M();var u0=pn().isSpace;s0.exports=function(n,u,o,e){var t,h,p,f,m,z,S,F,w,C,b,T,P,R,I,x,q=n.bMarks[u]+n.tShift[u],E=n.eMarks[u];if(n.src.charCodeAt(q++)!==62)return!1;if(e)return!0;for(n.src.charCodeAt(q)===32&&q++,z=n.blkIndent,n.blkIndent=0,w=C=n.sCount[u]+q-(n.bMarks[u]+n.tShift[u]),m=[n.bMarks[u]],n.bMarks[u]=q;q<E&&(b=n.src.charCodeAt(q),u0(b));){b===9?C+=4-C%4:C++;q++}for(h=q>=E,f=[n.sCount[u]],n.sCount[u]=C-w,p=[n.tShift[u]],n.tShift[u]=q-n.bMarks[u],T=n.md.block.ruler.getRules("blockquote"),t=u+1;t<o&&!(n.sCount[t]<z||(q=n.bMarks[t]+n.tShift[t],E=n.eMarks[t],q>=E));t++){if(n.src.charCodeAt(q++)===62){for(n.src.charCodeAt(q)===32&&q++,w=C=n.sCount[t]+q-(n.bMarks[t]+n.tShift[t]),m.push(n.bMarks[t]),n.bMarks[t]=q;q<E&&(b=n.src.charCodeAt(q),u0(b));){b===9?C+=4-C%4:C++;q++}h=q>=E,f.push(n.sCount[t]),n.sCount[t]=C-w,p.push(n.tShift[t]),n.tShift[t]=q-n.bMarks[t];continue}if(h)break;for(x=!1,R=0,I=T.length;R<I;R++)if(T[R](n,t,o,!0)){x=!0;break}if(x)break;m.push(n.bMarks[t]),p.push(n.tShift[t]),f.push(n.sCount[t]),n.sCount[t]=-1}for(S=n.parentType,n.parentType="blockquote",P=n.push("blockquote_open","blockquote",1),P.markup=">",P.map=F=[u,0],n.md.block.tokenize(n,u,t),P=n.push("blockquote_close","blockquote",-1),P.markup=">",n.parentType=S,F[1]=n.line,R=0;R<p.length;R++)n.bMarks[R+u]=m[R],n.tShift[R+u]=p[R],n.sCount[R+u]=f[R];return n.blkIndent=z,!0}});var d0=W((g5,c0)=>{"use strict";M();var Vc=pn().isSpace;c0.exports=function(n,u,o,e){var t,h,p,f,m=n.bMarks[u]+n.tShift[u],z=n.eMarks[u];if(t=n.src.charCodeAt(m++),t!==42&&t!==45&&t!==95)return!1;for(h=1;m<z;){if(p=n.src.charCodeAt(m++),p!==t&&!Vc(p))return!1;p===t&&h++}return h<3?!1:(e||(n.line=u+1,f=n.push("hr","hr",0),f.map=[u,n.line],f.markup=Array(h+1).join(String.fromCharCode(t))),!0)}});var h0=W((b5,g0)=>{"use strict";M();var Fo=pn().isSpace;function p0(a,n){var u,o,e,t;return o=a.bMarks[n]+a.tShift[n],e=a.eMarks[n],u=a.src.charCodeAt(o++),u!==42&&u!==45&&u!==43||o<e&&(t=a.src.charCodeAt(o),!Fo(t))?-1:o}function f0(a,n){var u,o=a.bMarks[n]+a.tShift[n],e=o,t=a.eMarks[n];if(e+1>=t||(u=a.src.charCodeAt(e++),u<48||u>57))return-1;for(;;){if(e>=t)return-1;if(u=a.src.charCodeAt(e++),u>=48&&u<=57){if(e-o>=10)return-1;continue}if(u===41||u===46)break;return-1}return e<t&&(u=a.src.charCodeAt(e),!Fo(u))?-1:e}function Hc(a,n){var u,o,e=a.level+2;for(u=n+2,o=a.tokens.length-2;u<o;u++)a.tokens[u].level===e&&a.tokens[u].type==="paragraph_open"&&(a.tokens[u+2].hidden=!0,a.tokens[u].hidden=!0,u+=2)}g0.exports=function(n,u,o,e){var t,h,p,f,m,z,S,F,w,C,b,T,P,R,I,x,q,E,J,Q,fn,rn,L,$=!0,j,N,Gn,Be,ve;if((b=f0(n,u))>=0)E=!0;else if((b=p0(n,u))>=0)E=!1;else return!1;if(q=n.src.charCodeAt(b-1),e)return!0;for(Q=n.tokens.length,E?(C=n.bMarks[u]+n.tShift[u],x=Number(n.src.substr(C,b-C-1)),N=n.push("ordered_list_open","ol",1),x!==1&&(N.attrs=[["start",x]])):N=n.push("bullet_list_open","ul",1),N.map=rn=[u,0],N.markup=String.fromCharCode(q),t=u,fn=!1,j=n.md.block.ruler.getRules("list");t<o;){for(P=b,R=n.eMarks[t],h=p=n.sCount[t]+b-(n.bMarks[u]+n.tShift[u]);P<R&&(T=n.src.charCodeAt(P),Fo(T));){T===9?p+=4-p%4:p++;P++}if(J=P,J>=R?I=1:I=p-h,I>4&&(I=1),f=h+I,N=n.push("list_item_open","li",1),N.markup=String.fromCharCode(q),N.map=L=[u,0],z=n.blkIndent,F=n.tight,m=n.tShift[u],S=n.sCount[u],w=n.parentType,n.blkIndent=f,n.tight=!0,n.parentType="list",n.tShift[u]=J-n.bMarks[u],n.sCount[u]=p,J>=R&&n.isEmpty(u+1)?n.line=Math.min(n.line+2,o):n.md.block.tokenize(n,u,o,!0),(!n.tight||fn)&&($=!1),fn=n.line-u>1&&n.isEmpty(n.line-1),n.blkIndent=z,n.tShift[u]=m,n.sCount[u]=S,n.tight=F,n.parentType=w,N=n.push("list_item_close","li",-1),N.markup=String.fromCharCode(q),t=u=n.line,L[1]=t,J=n.bMarks[u],t>=o||n.isEmpty(t)||n.sCount[t]<n.blkIndent)break;for(ve=!1,Gn=0,Be=j.length;Gn<Be;Gn++)if(j[Gn](n,t,o,!0)){ve=!0;break}if(ve)break;if(E){if(b=f0(n,t),b<0)break}else if(b=p0(n,t),b<0)break;if(q!==n.src.charCodeAt(b-1))break}return E?N=n.push("ordered_list_close","ol",-1):N=n.push("bullet_list_close","ul",-1),N.markup=String.fromCharCode(q),rn[1]=t,n.line=t,$&&Hc(n,Q),!0}});var m0=W((v5,b0)=>{"use strict";M();var Gc=Gt(),Zc=Zt(),Xc=pn().normalizeReference,Jr=pn().isSpace;b0.exports=function(n,u,o,e){var t,h,p,f,m,z,S,F,w,C,b,T,P,R,I,x=0,q=n.bMarks[u]+n.tShift[u],E=n.eMarks[u],J=u+1;if(n.src.charCodeAt(q)!==91)return!1;for(;++q<E;)if(n.src.charCodeAt(q)===93&&n.src.charCodeAt(q-1)!==92){if(q+1===E||n.src.charCodeAt(q+1)!==58)return!1;break}for(f=n.lineMax,R=n.md.block.ruler.getRules("reference");J<f&&!n.isEmpty(J);J++)if(!(n.sCount[J]-n.blkIndent>3)&&!(n.sCount[J]<0)){for(P=!1,z=0,S=R.length;z<S;z++)if(R[z](n,J,f,!0)){P=!0;break}if(P)break}for(T=n.getLines(u,J,n.blkIndent,!1).trim(),E=T.length,q=1;q<E;q++){if(t=T.charCodeAt(q),t===91)return!1;if(t===93){w=q;break}else t===10?x++:t===92&&(q++,q<E&&T.charCodeAt(q)===10&&x++)}if(w<0||T.charCodeAt(w+1)!==58)return!1;for(q=w+2;q<E;q++)if(t=T.charCodeAt(q),t===10)x++;else if(!Jr(t))break;if(C=Gc(T,q,E),!C.ok||(m=n.md.normalizeLink(C.str),!n.md.validateLink(m)))return!1;for(q=C.pos,x+=C.lines,h=q,p=x,b=q;q<E;q++)if(t=T.charCodeAt(q),t===10)x++;else if(!Jr(t))break;for(C=Zc(T,q,E),q<E&&b!==q&&C.ok?(I=C.str,q=C.pos,x+=C.lines):(I="",q=h,x=p);q<E&&(t=T.charCodeAt(q),!!Jr(t));)q++;if(q<E&&T.charCodeAt(q)!==10&&I)for(I="",q=h,x=p;q<E&&(t=T.charCodeAt(q),!!Jr(t));)q++;return q<E&&T.charCodeAt(q)!==10||(F=Xc(T.slice(1,w)),!F)?!1:(e||(typeof n.env.references>"u"&&(n.env.references={}),typeof n.env.references[F]>"u"&&(n.env.references[F]={title:I,href:m}),n.line=u+x+1),!0)}});var k0=W((x5,v0)=>{"use strict";M();var Jc=pn().isSpace;v0.exports=function(n,u,o,e){var t,h,p,f,m=n.bMarks[u]+n.tShift[u],z=n.eMarks[u];if(t=n.src.charCodeAt(m),t!==35||m>=z)return!1;for(h=1,t=n.src.charCodeAt(++m);t===35&&m<z&&h<=6;)h++,t=n.src.charCodeAt(++m);return h>6||m<z&&t!==32?!1:(e||(z=n.skipSpacesBack(z,m),p=n.skipCharsBack(z,35,m),p>m&&Jc(n.src.charCodeAt(p-1))&&(z=p),n.line=u+1,f=n.push("heading_open","h"+String(h),1),f.markup="########".slice(0,h),f.map=[u,n.line],f=n.push("inline","",0),f.content=n.src.slice(m,z).trim(),f.map=[u,n.line],f.children=[],f=n.push("heading_close","h"+String(h),-1),f.markup="########".slice(0,h)),!0)}});var F0=W((y5,x0)=>{"use strict";M();x0.exports=function(n,u,o){for(var e,t,h,p,f,m,z,S,F,w=u+1,C=n.md.block.ruler.getRules("paragraph");w<o&&!n.isEmpty(w);w++)if(!(n.sCount[w]-n.blkIndent>3)){if(n.sCount[w]>=n.blkIndent&&(m=n.bMarks[w]+n.tShift[w],z=n.eMarks[w],m<z&&(F=n.src.charCodeAt(m),(F===45||F===61)&&(m=n.skipChars(m,F),m=n.skipSpaces(m),m>=z)))){S=F===61?1:2;break}if(!(n.sCount[w]<0)){for(t=!1,h=0,p=C.length;h<p;h++)if(C[h](n,w,o,!0)){t=!0;break}if(t)break}}return S?(e=n.getLines(u,w,n.blkIndent,!1).trim(),n.line=w+1,f=n.push("heading_open","h"+String(S),1),f.markup=String.fromCharCode(F),f.map=[u,n.line],f=n.push("inline","",0),f.content=e,f.map=[u,n.line-1],f.children=[],f=n.push("heading_close","h"+String(S),-1),f.markup=String.fromCharCode(F),!0):!1}});var w0=W((C5,y0)=>{"use strict";M();y0.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]});var wo=W((_5,yo)=>{"use strict";M();var Qc="[a-zA-Z_:][a-zA-Z0-9:._-]*",Kc="[^\"'=<>`\\x00-\\x20]+",n4="'[^']*'",e4='"[^"]*"',t4="(?:"+Kc+"|"+n4+"|"+e4+")",r4="(?:\\s+"+Qc+"(?:\\s*=\\s*"+t4+")?)",C0="<[A-Za-z][A-Za-z0-9\\-]*"+r4+"*\\s*\\/?>",E0="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",i4="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",o4="<[?].*?[?]>",a4="<![A-Z]+\\s+[^>]*>",u4="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",s4=new RegExp("^(?:"+C0+"|"+E0+"|"+i4+"|"+o4+"|"+a4+"|"+u4+")"),l4=new RegExp("^(?:"+C0+"|"+E0+")");yo.exports.HTML_TAG_RE=s4;yo.exports.HTML_OPEN_CLOSE_TAG_RE=l4});var D0=W((q5,_0)=>{"use strict";M();var c4=w0(),d4=wo().HTML_OPEN_CLOSE_TAG_RE,bt=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+c4.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(d4.source+"\\s*$"),/^$/,!1]];_0.exports=function(n,u,o,e){var t,h,p,f,m=n.bMarks[u]+n.tShift[u],z=n.eMarks[u];if(!n.md.options.html||n.src.charCodeAt(m)!==60)return!1;for(f=n.src.slice(m,z),t=0;t<bt.length&&!bt[t][0].test(f);t++);if(t===bt.length)return!1;if(e)return bt[t][2];if(h=u+1,!bt[t][1].test(f)){for(;h<o&&!(n.sCount[h]<n.blkIndent);h++)if(m=n.bMarks[h]+n.tShift[h],z=n.eMarks[h],f=n.src.slice(m,z),bt[t][1].test(f)){f.length!==0&&h++;break}}return n.line=h,p=n.push("html_block","",0),p.map=[u,h],p.content=n.getLines(u,h,n.blkIndent,!0),!0}});var z0=W((A5,q0)=>{"use strict";M();q0.exports=function(n,u){for(var o,e,t,h,p,f=u+1,m=n.md.block.ruler.getRules("paragraph"),z=n.lineMax;f<z&&!n.isEmpty(f);f++)if(!(n.sCount[f]-n.blkIndent>3)&&!(n.sCount[f]<0)){for(e=!1,t=0,h=m.length;t<h;t++)if(m[t](n,f,z,!0)){e=!0;break}if(e)break}return o=n.getLines(u,f,n.blkIndent,!1).trim(),n.line=f,p=n.push("paragraph_open","p",1),p.map=[u,n.line],p=n.push("inline","",0),p.content=o,p.map=[u,n.line],p.children=[],p=n.push("paragraph_close","p",-1),!0}});var S0=W((S5,M0)=>{"use strict";M();var A0=Xr(),Qr=pn().isSpace;function ee(a,n,u,o){var e,t,h,p,f,m,z,S;for(this.src=a,this.md=n,this.env=u,this.tokens=o,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.parentType="root",this.ddIndent=-1,this.level=0,this.result="",t=this.src,S=!1,h=p=m=z=0,f=t.length;p<f;p++){if(e=t.charCodeAt(p),!S)if(Qr(e)){m++,e===9?z+=4-z%4:z++;continue}else S=!0;(e===10||p===f-1)&&(e!==10&&p++,this.bMarks.push(h),this.eMarks.push(p),this.tShift.push(m),this.sCount.push(z),S=!1,m=0,z=0,h=p+1)}this.bMarks.push(t.length),this.eMarks.push(t.length),this.tShift.push(0),this.sCount.push(0),this.lineMax=this.bMarks.length-1}ee.prototype.push=function(a,n,u){var o=new A0(a,n,u);return o.block=!0,u<0&&this.level--,o.level=this.level,u>0&&this.level++,this.tokens.push(o),o};ee.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};ee.prototype.skipEmptyLines=function(n){for(var u=this.lineMax;n<u&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};ee.prototype.skipSpaces=function(n){for(var u,o=this.src.length;n<o&&(u=this.src.charCodeAt(n),!!Qr(u));n++);return n};ee.prototype.skipSpacesBack=function(n,u){if(n<=u)return n;for(;n>u;)if(!Qr(this.src.charCodeAt(--n)))return n+1;return n};ee.prototype.skipChars=function(n,u){for(var o=this.src.length;n<o&&this.src.charCodeAt(n)===u;n++);return n};ee.prototype.skipCharsBack=function(n,u,o){if(n<=o)return n;for(;n>o;)if(u!==this.src.charCodeAt(--n))return n+1;return n};ee.prototype.getLines=function(n,u,o,e){var t,h,p,f,m,z,S,F=n;if(n>=u)return"";for(z=new Array(u-n),t=0;F<u;F++,t++){for(h=0,S=f=this.bMarks[F],F+1<u||e?m=this.eMarks[F]+1:m=this.eMarks[F];f<m&&h<o;){if(p=this.src.charCodeAt(f),Qr(p))p===9?h+=4-h%4:h++;else if(f-S<this.tShift[F])h++;else break;f++}z[t]=this.src.slice(f,m)}return z.join("")};ee.prototype.Token=A0;M0.exports=ee});var I0=W((I5,B0)=>{"use strict";M();var p4=Gr(),Kr=[["table",t0(),["paragraph","reference"]],["code",i0()],["fence",a0(),["paragraph","reference","blockquote","list"]],["blockquote",l0(),["paragraph","reference","list"]],["hr",d0(),["paragraph","reference","blockquote","list"]],["list",h0(),["paragraph","reference","blockquote"]],["reference",m0()],["heading",k0(),["paragraph","reference","blockquote"]],["lheading",F0()],["html_block",D0(),["paragraph","reference","blockquote"]],["paragraph",z0()]];function ni(){this.ruler=new p4;for(var a=0;a<Kr.length;a++)this.ruler.push(Kr[a][0],Kr[a][1],{alt:(Kr[a][2]||[]).slice()})}ni.prototype.tokenize=function(a,n,u){for(var o,e,t=this.ruler.getRules(""),h=t.length,p=n,f=!1,m=a.md.options.maxNesting;p<u&&(a.line=p=a.skipEmptyLines(p),!(p>=u||a.sCount[p]<a.blkIndent));){if(a.level>=m){a.line=u;break}for(e=0;e<h&&(o=t[e](a,p,u,!1),!o);e++);if(a.tight=!f,a.isEmpty(a.line-1)&&(f=!0),p=a.line,p<u&&a.isEmpty(p)){if(f=!0,p++,p<u&&a.parentType==="list"&&a.isEmpty(p))break;a.line=p}}};ni.prototype.parse=function(a,n,u,o){var e;a&&(e=new this.State(a,n,u,o),this.tokenize(e,e.line,e.lineMax))};ni.prototype.State=S0();B0.exports=ni});var R0=W((R5,T0)=>{"use strict";M();function f4(a){switch(a){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}T0.exports=function(n,u){for(var o=n.pos;o<n.posMax&&!f4(n.src.charCodeAt(o));)o++;return o===n.pos?!1:(u||(n.pending+=n.src.slice(n.pos,o)),n.pos=o,!0)}});var P0=W((P5,O0)=>{"use strict";M();O0.exports=function(n,u){var o,e,t=n.pos;if(n.src.charCodeAt(t)!==10)return!1;for(o=n.pending.length-1,e=n.posMax,u||(o>=0&&n.pending.charCodeAt(o)===32?o>=1&&n.pending.charCodeAt(o-1)===32?(n.pending=n.pending.replace(/ +$/,""),n.push("hardbreak","br",0)):(n.pending=n.pending.slice(0,-1),n.push("softbreak","br",0)):n.push("softbreak","br",0)),t++;t<e&&n.src.charCodeAt(t)===32;)t++;return n.pos=t,!0}});var N0=W((N5,Y0)=>{"use strict";M();var g4=pn().isSpace,Eo=[];for(Co=0;Co<256;Co++)Eo.push(0);var Co;"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(a){Eo[a.charCodeAt(0)]=1});Y0.exports=function(n,u){var o,e=n.pos,t=n.posMax;if(n.src.charCodeAt(e)!==92)return!1;if(e++,e<t){if(o=n.src.charCodeAt(e),o<256&&Eo[o]!==0)return u||(n.pending+=n.src[e]),n.pos+=2,!0;if(o===10){for(u||n.push("hardbreak","br",0),e++;e<t&&(o=n.src.charCodeAt(e),!!g4(o));)e++;return n.pos=e,!0}}return u||(n.pending+="\\"),n.pos++,!0}});var j0=W((j5,L0)=>{"use strict";M();L0.exports=function(n,u){var o,e,t,h,p,f,m=n.pos,z=n.src.charCodeAt(m);if(z!==96)return!1;for(o=m,m++,e=n.posMax;m<e&&n.src.charCodeAt(m)===96;)m++;for(t=n.src.slice(o,m),h=p=m;(h=n.src.indexOf("`",p))!==-1;){for(p=h+1;p<e&&n.src.charCodeAt(p)===96;)p++;if(p-h===t.length)return u||(f=n.push("code_inline","code",0),f.markup=t,f.content=n.src.slice(m,h).replace(/[ \n]+/g," ").trim()),n.pos=p,!0}return u||(n.pending+=t),n.pos+=t.length,!0}});var Do=W((U5,_o)=>{"use strict";M();_o.exports.tokenize=function(n,u){var o,e,t,h,p,f=n.pos,m=n.src.charCodeAt(f);if(u||m!==126||(e=n.scanDelims(n.pos,!0),h=e.length,p=String.fromCharCode(m),h<2))return!1;for(h%2&&(t=n.push("text","",0),t.content=p,h--),o=0;o<h;o+=2)t=n.push("text","",0),t.content=p+p,n.delimiters.push({marker:m,jump:o,token:n.tokens.length-1,level:n.level,end:-1,open:e.can_open,close:e.can_close});return n.pos+=e.length,!0};_o.exports.postProcess=function(n){var u,o,e,t,h,p=[],f=n.delimiters,m=n.delimiters.length;for(u=0;u<m;u++)e=f[u],e.marker===126&&e.end!==-1&&(t=f[e.end],h=n.tokens[e.token],h.type="s_open",h.tag="s",h.nesting=1,h.markup="~~",h.content="",h=n.tokens[t.token],h.type="s_close",h.tag="s",h.nesting=-1,h.markup="~~",h.content="",n.tokens[t.token-1].type==="text"&&n.tokens[t.token-1].content==="~"&&p.push(t.token-1));for(;p.length;){for(u=p.pop(),o=u+1;o<n.tokens.length&&n.tokens[o].type==="s_close";)o++;o--,u!==o&&(h=n.tokens[o],n.tokens[o]=n.tokens[u],n.tokens[u]=h)}}});var zo=W((V5,qo)=>{"use strict";M();qo.exports.tokenize=function(n,u){var o,e,t,h=n.pos,p=n.src.charCodeAt(h);if(u||p!==95&&p!==42)return!1;for(e=n.scanDelims(n.pos,p===42),o=0;o<e.length;o++)t=n.push("text","",0),t.content=String.fromCharCode(p),n.delimiters.push({marker:p,jump:o,token:n.tokens.length-1,level:n.level,end:-1,open:e.can_open,close:e.can_close});return n.pos+=e.length,!0};qo.exports.postProcess=function(n){var u,o,e,t,h,p,f=n.delimiters,m=n.delimiters.length;for(u=0;u<m;u++)o=f[u],!(o.marker!==95&&o.marker!==42)&&o.end!==-1&&(e=f[o.end],p=u+1<m&&f[u+1].end===o.end-1&&f[u+1].token===o.token+1&&f[o.end-1].token===e.token-1&&f[u+1].marker===o.marker,h=String.fromCharCode(o.marker),t=n.tokens[o.token],t.type=p?"strong_open":"em_open",t.tag=p?"strong":"em",t.nesting=1,t.markup=p?h+h:h,t.content="",t=n.tokens[e.token],t.type=p?"strong_close":"em_close",t.tag=p?"strong":"em",t.nesting=-1,t.markup=p?h+h:h,t.content="",p&&(n.tokens[f[u+1].token].content="",n.tokens[f[o.end-1].token].content="",u++))}});var W0=W((G5,U0)=>{"use strict";M();var $0=Vr(),h4=Gt(),b4=Zt(),m4=pn().normalizeReference,Ao=pn().isSpace;U0.exports=function(n,u){var o,e,t,h,p,f,m,z,S,F,w="",C=n.pos,b=n.posMax,T=n.pos;if(n.src.charCodeAt(n.pos)!==91||(p=n.pos+1,h=$0(n,n.pos,!0),h<0))return!1;if(f=h+1,f<b&&n.src.charCodeAt(f)===40){for(f++;f<b&&(e=n.src.charCodeAt(f),!(!Ao(e)&&e!==10));f++);if(f>=b)return!1;for(T=f,m=h4(n.src,f,n.posMax),m.ok&&(w=n.md.normalizeLink(m.str),n.md.validateLink(w)?f=m.pos:w=""),T=f;f<b&&(e=n.src.charCodeAt(f),!(!Ao(e)&&e!==10));f++);if(m=b4(n.src,f,n.posMax),f<b&&T!==f&&m.ok)for(S=m.str,f=m.pos;f<b&&(e=n.src.charCodeAt(f),!(!Ao(e)&&e!==10));f++);else S="";if(f>=b||n.src.charCodeAt(f)!==41)return n.pos=C,!1;f++}else{if(typeof n.env.references>"u")return!1;if(f<b&&n.src.charCodeAt(f)===91?(T=f+1,f=$0(n,f),f>=0?t=n.src.slice(T,f++):f=h+1):f=h+1,t||(t=n.src.slice(p,h)),z=n.env.references[m4(t)],!z)return n.pos=C,!1;w=z.href,S=z.title}return u||(n.pos=p,n.posMax=h,F=n.push("link_open","a",1),F.attrs=o=[["href",w]],S&&o.push(["title",S]),n.md.inline.tokenize(n),F=n.push("link_close","a",-1)),n.pos=f,n.posMax=b,!0}});var G0=W((X5,H0)=>{"use strict";M();var V0=Vr(),v4=Gt(),k4=Zt(),x4=pn().normalizeReference,Mo=pn().isSpace;H0.exports=function(n,u){var o,e,t,h,p,f,m,z,S,F,w,C,b,T="",P=n.pos,R=n.posMax;if(n.src.charCodeAt(n.pos)!==33||n.src.charCodeAt(n.pos+1)!==91||(f=n.pos+2,p=V0(n,n.pos+1,!1),p<0))return!1;if(m=p+1,m<R&&n.src.charCodeAt(m)===40){for(m++;m<R&&(e=n.src.charCodeAt(m),!(!Mo(e)&&e!==10));m++);if(m>=R)return!1;for(b=m,S=v4(n.src,m,n.posMax),S.ok&&(T=n.md.normalizeLink(S.str),n.md.validateLink(T)?m=S.pos:T=""),b=m;m<R&&(e=n.src.charCodeAt(m),!(!Mo(e)&&e!==10));m++);if(S=k4(n.src,m,n.posMax),m<R&&b!==m&&S.ok)for(F=S.str,m=S.pos;m<R&&(e=n.src.charCodeAt(m),!(!Mo(e)&&e!==10));m++);else F="";if(m>=R||n.src.charCodeAt(m)!==41)return n.pos=P,!1;m++}else{if(typeof n.env.references>"u")return!1;if(m<R&&n.src.charCodeAt(m)===91?(b=m+1,m=V0(n,m),m>=0?h=n.src.slice(b,m++):m=p+1):m=p+1,h||(h=n.src.slice(f,p)),z=n.env.references[x4(h)],!z)return n.pos=P,!1;T=z.href,F=z.title}return u||(t=n.src.slice(f,p),n.md.inline.parse(t,n.md,n.env,C=[]),w=n.push("image","img",0),w.attrs=o=[["src",T],["alt",""]],w.children=C,w.content=t,F&&o.push(["title",F])),n.pos=m,n.posMax=R,!0}});var Q0=W((Q5,J0)=>{"use strict";M();var Z0=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,X0=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;J0.exports=function(n,u){var o,e,t,h,p,f,m=n.pos;return n.src.charCodeAt(m)!==60||(o=n.src.slice(m),o.indexOf(">")<0)?!1:X0.test(o)?(e=o.match(X0),h=e[0].slice(1,-1),p=n.md.normalizeLink(h),n.md.validateLink(p)?(u||(f=n.push("link_open","a",1),f.attrs=[["href",p]],f.markup="autolink",f.info="auto",f=n.push("text","",0),f.content=n.md.normalizeLinkText(h),f=n.push("link_close","a",-1),f.markup="autolink",f.info="auto"),n.pos+=e[0].length,!0):!1):Z0.test(o)?(t=o.match(Z0),h=t[0].slice(1,-1),p=n.md.normalizeLink("mailto:"+h),n.md.validateLink(p)?(u||(f=n.push("link_open","a",1),f.attrs=[["href",p]],f.markup="autolink",f.info="auto",f=n.push("text","",0),f.content=n.md.normalizeLinkText(h),f=n.push("link_close","a",-1),f.markup="autolink",f.info="auto"),n.pos+=t[0].length,!0):!1):!1}});var n2=W((n8,K0)=>{"use strict";M();var F4=wo().HTML_TAG_RE;function y4(a){var n=a|32;return n>=97&&n<=122}K0.exports=function(n,u){var o,e,t,h,p=n.pos;return!n.md.options.html||(t=n.posMax,n.src.charCodeAt(p)!==60||p+2>=t)||(o=n.src.charCodeAt(p+1),o!==33&&o!==63&&o!==47&&!y4(o))||(e=n.src.slice(p).match(F4),!e)?!1:(u||(h=n.push("html_inline","",0),h.content=n.src.slice(p,p+e[0].length)),n.pos+=e[0].length,!0)}});var i2=W((t8,r2)=>{"use strict";M();var e2=fo(),w4=pn().has,C4=pn().isValidEntityCode,t2=pn().fromCodePoint,E4=/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,_4=/^&([a-z][a-z0-9]{1,31});/i;r2.exports=function(n,u){var o,e,t,h=n.pos,p=n.posMax;if(n.src.charCodeAt(h)!==38)return!1;if(h+1<p){if(o=n.src.charCodeAt(h+1),o===35){if(t=n.src.slice(h).match(E4),t)return u||(e=t[1][0].toLowerCase()==="x"?parseInt(t[1].slice(1),16):parseInt(t[1],10),n.pending+=C4(e)?t2(e):t2(65533)),n.pos+=t[0].length,!0}else if(t=n.src.slice(h).match(_4),t&&w4(e2,t[1]))return u||(n.pending+=e2[t[1]]),n.pos+=t[0].length,!0}return u||(n.pending+="&"),n.pos++,!0}});var a2=W((i8,o2)=>{"use strict";M();o2.exports=function(n){var u,o,e,t,h=n.delimiters,p=n.delimiters.length;for(u=0;u<p;u++)if(e=h[u],!!e.close)for(o=u-e.jump-1;o>=0;){if(t=h[o],t.open&&t.marker===e.marker&&t.end<0&&t.level===e.level){e.jump=u-o,e.open=!1,t.end=u,t.jump=0;break}o-=t.jump+1}}});var s2=W((a8,u2)=>{"use strict";M();u2.exports=function(n){var u,o,e=0,t=n.tokens,h=n.tokens.length;for(u=o=0;u<h;u++)e+=t[u].nesting,t[u].level=e,t[u].type==="text"&&u+1<h&&t[u+1].type==="text"?t[u+1].content=t[u].content+t[u+1].content:(u!==o&&(t[o]=t[u]),o++);u!==o&&(t.length=o)}});var f2=W((s8,p2)=>{"use strict";M();var So=Xr(),l2=pn().isWhiteSpace,c2=pn().isPunctChar,d2=pn().isMdAsciiPunct;function Xt(a,n,u,o){this.src=a,this.env=u,this.md=n,this.tokens=o,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[]}Xt.prototype.pushPending=function(){var a=new So("text","",0);return a.content=this.pending,a.level=this.pendingLevel,this.tokens.push(a),this.pending="",a};Xt.prototype.push=function(a,n,u){this.pending&&this.pushPending();var o=new So(a,n,u);return u<0&&this.level--,o.level=this.level,u>0&&this.level++,this.pendingLevel=this.level,this.tokens.push(o),o};Xt.prototype.scanDelims=function(a,n){var u=a,o,e,t,h,p,f,m,z,S,F=!0,w=!0,C=this.posMax,b=this.src.charCodeAt(a);for(o=a>0?this.src.charCodeAt(a-1):32;u<C&&this.src.charCodeAt(u)===b;)u++;return t=u-a,e=u<C?this.src.charCodeAt(u):32,m=d2(o)||c2(String.fromCharCode(o)),S=d2(e)||c2(String.fromCharCode(e)),f=l2(o),z=l2(e),z?F=!1:S&&(f||m||(F=!1)),f?w=!1:m&&(z||S||(w=!1)),n?(h=F,p=w):(h=F&&(!w||m),p=w&&(!F||S)),{can_open:h,can_close:p,length:t}};Xt.prototype.Token=So;p2.exports=Xt});var b2=W((c8,h2)=>{"use strict";M();var g2=Gr(),Bo=[["text",R0()],["newline",P0()],["escape",N0()],["backticks",j0()],["strikethrough",Do().tokenize],["emphasis",zo().tokenize],["link",W0()],["image",G0()],["autolink",Q0()],["html_inline",n2()],["entity",i2()]],Io=[["balance_pairs",a2()],["strikethrough",Do().postProcess],["emphasis",zo().postProcess],["text_collapse",s2()]];function Jt(){var a;for(this.ruler=new g2,a=0;a<Bo.length;a++)this.ruler.push(Bo[a][0],Bo[a][1]);for(this.ruler2=new g2,a=0;a<Io.length;a++)this.ruler2.push(Io[a][0],Io[a][1])}Jt.prototype.skipToken=function(a){var n,u,o=a.pos,e=this.ruler.getRules(""),t=e.length,h=a.md.options.maxNesting,p=a.cache;if(typeof p[o]<"u"){a.pos=p[o];return}if(a.level<h)for(u=0;u<t&&(a.level++,n=e[u](a,!0),a.level--,!n);u++);else a.pos=a.posMax;n||a.pos++,p[o]=a.pos};Jt.prototype.tokenize=function(a){for(var n,u,o=this.ruler.getRules(""),e=o.length,t=a.posMax,h=a.md.options.maxNesting;a.pos<t;){if(a.level<h)for(u=0;u<e&&(n=o[u](a,!1),!n);u++);if(n){if(a.pos>=t)break;continue}a.pending+=a.src[a.pos++]}a.pending&&a.pushPending()};Jt.prototype.parse=function(a,n,u,o){var e,t,h,p=new this.State(a,n,u,o);for(this.tokenize(p),t=this.ruler2.getRules(""),h=t.length,e=0;e<h;e++)t[e](p)};Jt.prototype.State=f2();h2.exports=Jt});var w2=W(hn=>{"use strict";M();var D4=hn.src_Any=ho().source,m2=hn.src_Cc=bo().source,v2=hn.src_Z=mo().source,q4=hn.src_P=jr().source,vt=hn.src_ZPCc=[v2,q4,m2].join("|"),Rn=hn.src_ZCc=[v2,m2].join("|"),mt="(?:(?!>|<|"+vt+")"+D4+")",z4=hn.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";hn.src_auth="(?:(?:(?!"+Rn+"|[@/]).)+@)?";var To=hn.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",Qt=hn.src_host_terminator="(?=$|>|<|"+vt+")(?!-|_|:\\d|\\.-|\\.(?!$|"+vt+"))",k2=hn.src_path="(?:[/?#](?:(?!"+Rn+`|[()[\\]{}.,"'?!\\-<>]).|\\[(?:(?!`+Rn+"|\\]).)*\\]|\\((?:(?!"+Rn+"|[)]).)*\\)|\\{(?:(?!"+Rn+'|[}]).)*\\}|\\"(?:(?!'+Rn+`|["]).)+\\"|\\'(?:(?!`+Rn+"|[']).)+\\'|\\'(?="+mt+").|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!"+Rn+"|[.]).|\\-(?!--(?:[^-]|$))(?:-*)|\\,(?!"+Rn+").|\\!(?!"+Rn+"|[!]).|\\?(?!"+Rn+"|[?]).)+|\\/)?",A4=hn.src_email_name='[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+',x2=hn.src_xn="xn--[a-z0-9\\-]{1,59}",M4=hn.src_domain_root="(?:"+x2+"|"+mt+"{1,63})",Ro=hn.src_domain="(?:"+x2+"|(?:"+mt+")|(?:"+mt+"(?:-(?!-)|"+mt+"){0,61}"+mt+"))",F2=hn.src_host="(?:(?:(?:(?:"+Ro+")\\.)*"+M4+"))",y2=hn.tpl_host_fuzzy="(?:"+z4+"|(?:(?:(?:"+Ro+")\\.)+(?:%TLDS%)))",S4=hn.tpl_host_no_ip_fuzzy="(?:(?:(?:"+Ro+")\\.)+(?:%TLDS%))";hn.src_host_strict=F2+Qt;var B4=hn.tpl_host_fuzzy_strict=y2+Qt;hn.src_host_port_strict=F2+To+Qt;var I4=hn.tpl_host_port_fuzzy_strict=y2+To+Qt,T4=hn.tpl_host_port_no_ip_fuzzy_strict=S4+To+Qt;hn.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+vt+"|>|$))";hn.tpl_email_fuzzy="(^|<|>|\\(|"+Rn+")("+A4+"@"+B4+")";hn.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|]|"+vt+"))((?![$+<=>^`|])"+I4+k2+")";hn.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|]|"+vt+"))((?![$+<=>^`|])"+T4+k2+")"});var z2=W((g8,q2)=>{"use strict";M();function ei(a){var n=Array.prototype.slice.call(arguments,1);return n.forEach(function(u){u&&Object.keys(u).forEach(function(o){a[o]=u[o]})}),a}function ri(a){return Object.prototype.toString.call(a)}function R4(a){return ri(a)==="[object String]"}function O4(a){return ri(a)==="[object Object]"}function P4(a){return ri(a)==="[object RegExp]"}function C2(a){return ri(a)==="[object Function]"}function Y4(a){return a.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var D2={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function N4(a){return Object.keys(a||{}).reduce(function(n,u){return n||D2.hasOwnProperty(u)},!1)}var L4={"http:":{validate:function(a,n,u){var o=a.slice(n);return u.re.http||(u.re.http=new RegExp("^\\/\\/"+u.re.src_auth+u.re.src_host_port_strict+u.re.src_path,"i")),u.re.http.test(o)?o.match(u.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(a,n,u){var o=a.slice(n);return u.re.no_http||(u.re.no_http=new RegExp("^"+u.re.src_auth+"(?:localhost|(?:(?:"+u.re.src_domain+")\\.)+"+u.re.src_domain_root+")"+u.re.src_port+u.re.src_host_terminator+u.re.src_path,"i")),u.re.no_http.test(o)?n>=3&&a[n-3]===":"||n>=3&&a[n-3]==="/"?0:o.match(u.re.no_http)[0].length:0}},"mailto:":{validate:function(a,n,u){var o=a.slice(n);return u.re.mailto||(u.re.mailto=new RegExp("^"+u.re.src_email_name+"@"+u.re.src_host_strict,"i")),u.re.mailto.test(o)?o.match(u.re.mailto)[0].length:0}}},j4="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",$4="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function U4(a){a.__index__=-1,a.__text_cache__=""}function W4(a){return function(n,u){var o=n.slice(u);return a.test(o)?o.match(a)[0].length:0}}function E2(){return function(a,n){n.normalize(a)}}function ti(a){var n=a.re=ei({},w2()),u=a.__tlds__.slice();a.__tlds_replaced__||u.push(j4),u.push(n.src_xn),n.src_tlds=u.join("|");function o(p){return p.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(o(n.tpl_email_fuzzy),"i"),n.link_fuzzy=RegExp(o(n.tpl_link_fuzzy),"i"),n.link_no_ip_fuzzy=RegExp(o(n.tpl_link_no_ip_fuzzy),"i"),n.host_fuzzy_test=RegExp(o(n.tpl_host_fuzzy_test),"i");var e=[];a.__compiled__={};function t(p,f){throw new Error('(LinkifyIt) Invalid schema "'+p+'": '+f)}Object.keys(a.__schemas__).forEach(function(p){var f=a.__schemas__[p];if(f!==null){var m={validate:null,link:null};if(a.__compiled__[p]=m,O4(f)){P4(f.validate)?m.validate=W4(f.validate):C2(f.validate)?m.validate=f.validate:t(p,f),C2(f.normalize)?m.normalize=f.normalize:f.normalize?t(p,f):m.normalize=E2();return}if(R4(f)){e.push(p);return}t(p,f)}}),e.forEach(function(p){a.__compiled__[a.__schemas__[p]]&&(a.__compiled__[p].validate=a.__compiled__[a.__schemas__[p]].validate,a.__compiled__[p].normalize=a.__compiled__[a.__schemas__[p]].normalize)}),a.__compiled__[""]={validate:null,normalize:E2()};var h=Object.keys(a.__compiled__).filter(function(p){return p.length>0&&a.__compiled__[p]}).map(Y4).join("|");a.re.schema_test=RegExp("(^|(?!_)(?:[><]|"+n.src_ZPCc+"))("+h+")","i"),a.re.schema_search=RegExp("(^|(?!_)(?:[><]|"+n.src_ZPCc+"))("+h+")","ig"),a.re.pretest=RegExp("("+a.re.schema_test.source+")|("+a.re.host_fuzzy_test.source+")|@","i"),U4(a)}function V4(a,n){var u=a.__index__,o=a.__last_index__,e=a.__text_cache__.slice(u,o);this.schema=a.__schema__.toLowerCase(),this.index=u+n,this.lastIndex=o+n,this.raw=e,this.text=e,this.url=e}function _2(a,n){var u=new V4(a,n);return a.__compiled__[u.schema].normalize(u,a),u}function Vn(a,n){if(!(this instanceof Vn))return new Vn(a,n);n||N4(a)&&(n=a,a={}),this.__opts__=ei({},D2,n),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=ei({},L4,a),this.__compiled__={},this.__tlds__=$4,this.__tlds_replaced__=!1,this.re={},ti(this)}Vn.prototype.add=function(n,u){return this.__schemas__[n]=u,ti(this),this};Vn.prototype.set=function(n){return this.__opts__=ei(this.__opts__,n),this};Vn.prototype.test=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return!1;var u,o,e,t,h,p,f,m,z;if(this.re.schema_test.test(n)){for(f=this.re.schema_search,f.lastIndex=0;(u=f.exec(n))!==null;)if(t=this.testSchemaAt(n,u[2],f.lastIndex),t){this.__schema__=u[2],this.__index__=u.index+u[1].length,this.__last_index__=u.index+u[0].length+t;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(m=n.search(this.re.host_fuzzy_test),m>=0&&(this.__index__<0||m<this.__index__)&&(o=n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(h=o.index+o[1].length,(this.__index__<0||h<this.__index__)&&(this.__schema__="",this.__index__=h,this.__last_index__=o.index+o[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(z=n.indexOf("@"),z>=0&&(e=n.match(this.re.email_fuzzy))!==null&&(h=e.index+e[1].length,p=e.index+e[0].length,(this.__index__<0||h<this.__index__||h===this.__index__&&p>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=h,this.__last_index__=p))),this.__index__>=0};Vn.prototype.pretest=function(n){return this.re.pretest.test(n)};Vn.prototype.testSchemaAt=function(n,u,o){return this.__compiled__[u.toLowerCase()]?this.__compiled__[u.toLowerCase()].validate(n,o,this):0};Vn.prototype.match=function(n){var u=0,o=[];this.__index__>=0&&this.__text_cache__===n&&(o.push(_2(this,u)),u=this.__last_index__);for(var e=u?n.slice(u):n;this.test(e);)o.push(_2(this,u)),e=e.slice(this.__last_index__),u+=this.__last_index__;return o.length?o:null};Vn.prototype.tlds=function(n,u){return n=Array.isArray(n)?n:[n],u?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(o,e,t){return o!==t[e-1]}).reverse(),ti(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,ti(this),this)};Vn.prototype.normalize=function(n){n.schema||(n.url="http://"+n.url),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url="mailto:"+n.url)};q2.exports=Vn});var O2=W((b8,R2)=>{"use strict";M();var H4=/^xn--/,G4=/[^\0-\x7F]/,Z4=/[\x2E\u3002\uFF0E\uFF61]/g,X4={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Oo=35,te=Math.floor,Po=String.fromCharCode;function Se(a){throw new RangeError(X4[a])}function J4(a,n){let u=[],o=a.length;for(;o--;)u[o]=n(a[o]);return u}function M2(a,n){let u=a.split("@"),o="";u.length>1&&(o=u[0]+"@",a=u[1]),a=a.replace(Z4,".");let e=a.split("."),t=J4(e,n).join(".");return o+t}function S2(a){let n=[],u=0,o=a.length;for(;u<o;){let e=a.charCodeAt(u++);if(e>=55296&&e<=56319&&u<o){let t=a.charCodeAt(u++);(t&64512)==56320?n.push(((e&1023)<<10)+(t&1023)+65536):(n.push(e),u--)}else n.push(e)}return n}var Q4=a=>String.fromCodePoint(...a),K4=function(a){return a>=48&&a<58?26+(a-48):a>=65&&a<91?a-65:a>=97&&a<123?a-97:36},A2=function(a,n){return a+22+75*(a<26)-((n!=0)<<5)},B2=function(a,n,u){let o=0;for(a=u?te(a/700):a>>1,a+=te(a/n);a>Oo*26>>1;o+=36)a=te(a/Oo);return te(o+(Oo+1)*a/(a+38))},I2=function(a){let n=[],u=a.length,o=0,e=128,t=72,h=a.lastIndexOf("-");h<0&&(h=0);for(let p=0;p<h;++p)a.charCodeAt(p)>=128&&Se("not-basic"),n.push(a.charCodeAt(p));for(let p=h>0?h+1:0;p<u;){let f=o;for(let z=1,S=36;;S+=36){p>=u&&Se("invalid-input");let F=K4(a.charCodeAt(p++));F>=36&&Se("invalid-input"),F>te((2147483647-o)/z)&&Se("overflow"),o+=F*z;let w=S<=t?1:S>=t+26?26:S-t;if(F<w)break;let C=36-w;z>te(2147483647/C)&&Se("overflow"),z*=C}let m=n.length+1;t=B2(o-f,m,f==0),te(o/m)>2147483647-e&&Se("overflow"),e+=te(o/m),o%=m,n.splice(o++,0,e)}return String.fromCodePoint(...n)},T2=function(a){let n=[];a=S2(a);let u=a.length,o=128,e=0,t=72;for(let f of a)f<128&&n.push(Po(f));let h=n.length,p=h;for(h&&n.push("-");p<u;){let f=2147483647;for(let z of a)z>=o&&z<f&&(f=z);let m=p+1;f-o>te((2147483647-e)/m)&&Se("overflow"),e+=(f-o)*m,o=f;for(let z of a)if(z<o&&++e>2147483647&&Se("overflow"),z===o){let S=e;for(let F=36;;F+=36){let w=F<=t?1:F>=t+26?26:F-t;if(S<w)break;let C=S-w,b=36-w;n.push(Po(A2(w+C%b,0))),S=te(C/b)}n.push(Po(A2(S,0))),t=B2(e,m,p===h),e=0,++p}++e,++o}return n.join("")},n3=function(a){return M2(a,function(n){return H4.test(n)?I2(n.slice(4).toLowerCase()):n})},e3=function(a){return M2(a,function(n){return G4.test(n)?"xn--"+T2(n):n})},t3={version:"2.3.1",ucs2:{decode:S2,encode:Q4},decode:I2,encode:T2,toASCII:e3,toUnicode:n3};R2.exports=t3});var Y2=W((v8,P2)=>{"use strict";M();P2.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}});var L2=W((x8,N2)=>{"use strict";M();N2.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}}});var $2=W((y8,j2)=>{"use strict";M();j2.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}}});var H2=W((C8,V2)=>{"use strict";M();var ii=pn(),r3=_u(),i3=qu(),o3=Ku(),a3=I0(),u3=b2(),s3=z2(),kt=go(),U2=O2(),l3={default:Y2(),zero:L2(),commonmark:$2()},c3=/^(vbscript|javascript|file|data):/,d3=/^data:image\/(gif|png|jpeg|webp);/;function p3(a){var n=a.trim().toLowerCase();return c3.test(n)?!!d3.test(n):!0}var W2=["http:","https:","mailto:"];function f3(a){var n=kt.parse(a,!0);if(n.hostname&&(!n.protocol||W2.indexOf(n.protocol)>=0))try{n.hostname=U2.toASCII(n.hostname)}catch{}return kt.encode(kt.format(n))}function g3(a){var n=kt.parse(a,!0);if(n.hostname&&(!n.protocol||W2.indexOf(n.protocol)>=0))try{n.hostname=U2.toUnicode(n.hostname)}catch{}return kt.decode(kt.format(n))}function On(a,n){if(!(this instanceof On))return new On(a,n);n||ii.isString(a)||(n=a||{},a="default"),this.inline=new u3,this.block=new a3,this.core=new o3,this.renderer=new i3,this.linkify=new s3,this.validateLink=p3,this.normalizeLink=f3,this.normalizeLinkText=g3,this.utils=ii,this.helpers=r3,this.options={},this.configure(a),n&&this.set(n)}On.prototype.set=function(a){return ii.assign(this.options,a),this};On.prototype.configure=function(a){var n=this,u;if(ii.isString(a)&&(u=a,a=l3[u],!a))throw new Error('Wrong `markdown-it` preset "'+u+'", check name');if(!a)throw new Error("Wrong `markdown-it` preset, can't be empty");return a.options&&n.set(a.options),a.components&&Object.keys(a.components).forEach(function(o){a.components[o].rules&&n[o].ruler.enableOnly(a.components[o].rules),a.components[o].rules2&&n[o].ruler2.enableOnly(a.components[o].rules2)}),this};On.prototype.enable=function(a,n){var u=[];Array.isArray(a)||(a=[a]),["core","block","inline"].forEach(function(e){u=u.concat(this[e].ruler.enable(a,!0))},this),u=u.concat(this.inline.ruler2.enable(a,!0));var o=a.filter(function(e){return u.indexOf(e)<0});if(o.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+o);return this};On.prototype.disable=function(a,n){var u=[];Array.isArray(a)||(a=[a]),["core","block","inline"].forEach(function(e){u=u.concat(this[e].ruler.disable(a,!0))},this),u=u.concat(this.inline.ruler2.disable(a,!0));var o=a.filter(function(e){return u.indexOf(e)<0});if(o.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+o);return this};On.prototype.use=function(a){var n=[this].concat(Array.prototype.slice.call(arguments,1));return a.apply(a,n),this};On.prototype.parse=function(a,n){var u=new this.core.State(a,this,n);return this.core.process(u),u.tokens};On.prototype.render=function(a,n){return n=n||{},this.renderer.render(this.parse(a,n),this.options,n)};On.prototype.parseInline=function(a,n){var u=new this.core.State(a,this,n);return u.inlineMode=!0,this.core.process(u),u.tokens};On.prototype.renderInline=function(a,n){return n=n||{},this.renderer.render(this.parseInline(a,n),this.options,n)};V2.exports=On});var Z2=W((_8,G2)=>{"use strict";M();G2.exports=H2()});var J2=W((q8,X2)=>{"use strict";M();X2.exports=function(n){var u=n.utils.escapeRE,o=n.utils.arrayReplaceAt,e=" \r\n$+<=>^`|~",t=n.utils.lib.ucmicro.P.source,h=n.utils.lib.ucmicro.Z.source;function p(m,z,S,F){var w,C,b,T,P,R=m.bMarks[z]+m.tShift[z],I=m.eMarks[z];if(R+2>=I||m.src.charCodeAt(R++)!==42||m.src.charCodeAt(R++)!==91)return!1;for(T=R;R<I;R++){if(b=m.src.charCodeAt(R),b===91)return!1;if(b===93){P=R;break}else b===92&&R++}return P<0||m.src.charCodeAt(P+1)!==58?!1:F?!0:(w=m.src.slice(T,P).replace(/\\(.)/g,"$1"),C=m.src.slice(P+2,I).trim(),w.length===0||C.length===0?!1:(m.env.abbreviations||(m.env.abbreviations={}),typeof m.env.abbreviations[":"+w]>"u"&&(m.env.abbreviations[":"+w]=C),m.line=z+1,!0))}function f(m){var z,S,F,w,C,b,T,P,R,I,x,q,E,J=m.tokens;if(m.env.abbreviations){for(q=new RegExp("(?:"+Object.keys(m.env.abbreviations).map(function(Q){return Q.substr(1)}).sort(function(Q,fn){return fn.length-Q.length}).map(u).join("|")+")"),x="(^|"+t+"|"+h+"|["+e.split("").map(u).join("")+"])("+Object.keys(m.env.abbreviations).map(function(Q){return Q.substr(1)}).sort(function(Q,fn){return fn.length-Q.length}).map(u).join("|")+")($|"+t+"|"+h+"|["+e.split("").map(u).join("")+"])",R=new RegExp(x,"g"),S=0,F=J.length;S<F;S++)if(J[S].type==="inline"){for(w=J[S].children,z=w.length-1;z>=0;z--)if(E=w[z],E.type==="text"&&(P=0,b=E.content,R.lastIndex=0,T=[],!!q.test(b))){for(;I=R.exec(b);)(I.index>0||I[1].length>0)&&(C=new m.Token("text","",0),C.content=b.slice(P,I.index+I[1].length),T.push(C)),C=new m.Token("abbr_open","abbr",1),C.attrs=[["title",m.env.abbreviations[":"+I[2]]]],T.push(C),C=new m.Token("text","",0),C.content=I[2],T.push(C),C=new m.Token("abbr_close","abbr",-1),T.push(C),R.lastIndex-=I[3].length,P=R.lastIndex;T.length&&(P<b.length&&(C=new m.Token("text","",0),C.content=b.slice(P),T.push(C)),J[S].children=w=o(w,z,T))}}}}n.block.ruler.before("reference","abbr_def",p,{alt:["paragraph","reference"]}),n.core.ruler.after("linkify","abbr_replace",f)}});var n1=W((A8,K2)=>{M();function sn(a,n,u,o){if(n===!1||n==null||!n&&(a==="class"||a==="style"))return"";if(n===!0)return" "+(o?a:a+'="'+a+'"');var e=typeof n;return e!=="object"&&e!=="function"||typeof n.toJSON!="function"||(n=n.toJSON()),typeof n=="string"||(n=JSON.stringify(n),u||n.indexOf('"')===-1)?(u&&(n=Y(n))," "+a+'="'+n+'"'):" "+a+"='"+n.replace(/'/g,"&#39;")+"'"}function me(a,n){return Array.isArray(a)?h3(a,n):a&&typeof a=="object"?b3(a):a||""}function h3(a,n){for(var u,o="",e="",t=Array.isArray(n),h=0;h<a.length;h++)(u=me(a[h]))&&(t&&n[h]&&(u=Y(u)),o=o+e+u,e=" ");return o}function b3(a){var n="",u="";for(var o in a)o&&a[o]&&m3.call(a,o)&&(n=n+u+o,u=" ");return n}function Y(a){var n=""+a,u=v3.exec(n);if(!u)return a;var o,e,t,h="";for(o=u.index,e=0;o<n.length;o++){switch(n.charCodeAt(o)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}e!==o&&(h+=n.substring(e,o)),e=o+1,h+=t}return e!==o?h+n.substring(e,o):h}var m3=Object.prototype.hasOwnProperty,v3=/["&<>]/;function Q2(a,n,u,o){if(!(a instanceof Error))throw a;if(!(typeof window>"u"&&n||o))throw a.message+=" on line "+u,a;try{o=o||(uo(),la(ao)).readFileSync(n,"utf8")}catch{Q2(a,null,u)}var p=3,e=o.split(`
`),t=Math.max(u-p,0),h=Math.min(e.length,u+p),p=e.slice(t,h).map(function(f,m){var z=m+t+1;return(z==u?"  > ":"    ")+z+"| "+f}).join(`
`);throw a.path=n,a.message=(n||"Pug")+":"+u+`
`+p+`

`+a.message,a}function k3(a){var n="",u={},o,e,t;try{var h={"index.pug":`|<!DOCTYPE html>
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

script(src="https://kit.fontawesome.com/21b8690fdf.js", crossorigin="anonymous")

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
      include background/projects.pug
      include background/work-experience.pug
      include background/skills.pug
      include background/education.pug
      include background/rev.pug
      include background/ta.pug
      include background/awards.pug
      include background/volunteer-work.pug
      include background/publications.pug
      include background/interests.pug
      include background/lang.pug
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
`,"pug/background/projects.pug":`unless _.isEmpty(resume.projects)
  .detail#projects
    .icon
      i.fs-lg.icon-codepen
      span.mobile-title Projects

    .info
      h4.title.text-uppercase Projects

      ul.list-unstyled.clear-margin
        each experience in resume.projects
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
`,"pug/background/rev.pug":`unless _.isEmpty(resume.externalreview)
  .detail#rev
    .icon
      i.fas.fa-glasses(style={"font-size": "1.25em"})
      span.mobile-title External Reviewer

    .info
      h4.title.text-uppercase External Reviewer

      .content
        ul.list-unstyled.clear-margin
          each interest in resume.externalreview
            li.card.card-nested
              p
                strong= interest.name

              unless _.isEmpty(interest.keywords)
                .space-top.labels
                  each keyword in interest.keywords
                    span.label.label-keyword= keyword

`,"pug/background/ta.pug":`unless _.isEmpty(resume.teaching)
  .detail#teaching
    .icon
      i.fs-lg.icon-book
      span.mobile-title Teaching

    .info
      h4.title.text-uppercase Teaching

      ul.list-unstyled.clear-margin
        each experience in resume.teaching
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
      h4.title.text-uppercase Publications & Posts

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
      h4.title.text-uppercase Personal Interests

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
`,"pug/background/lang.pug":`unless _.isEmpty(resume.languages)
  .detail#languages
    .icon
      i.fas.fa-language(style={"font-size": "1.25em"})
      span.mobile-title Languages

    .info
      h4.title.text-uppercase Languages

      .content
        ul.list-unstyled.clear-margin
          each interest in resume.languages
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
`},p=a||{};(function(f,m,z,S){t=1,e="index.pug",n=n+"<!DOCTYPE html>",t=2,e="index.pug",n=n+'<html lang="en">',t=3,e="index.pug",n=n+"<head>",t=4,e="index.pug",n=n+'<meta charset="utf-8"/>',t=5,e="index.pug",n=n+'<meta http-equiv="X-UA-Compatible" content="IE=edge"/>',t=6,e="index.pug",n=n+'<meta name="viewport" content="width=device-width, initial-scale=1"/>',t=7,e="index.pug",n=n+"<title>",t=7,e="index.pug",n=n+Y((o=S.basics.name)==null?"":o)+"</title>",t=1,e="pug/stylesheets.pug",n=n+'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>',t=3,e="pug/stylesheets.pug",n=n+'<script src="https://kit.fontawesome.com/21b8690fdf.js" crossorigin="anonymous"><\/script>',t=5,e="pug/stylesheets.pug",n=n+"<style>",t=5,e="pug/stylesheets.pug",n=n+((o=m)==null?"":o)+"</style></head>",t=10,e="index.pug",n=n+"<body"+(sn("itemscope",!0,!0,!1)+' itemtype="http://schema.org/Person"')+">",t=11,e="index.pug",n=n+'<div class="container-fluid">',t=12,e="index.pug",n=n+'<div class="row main clearfix">',t=1,e="pug/floating-nav.pug",u.make_nav_link=o=function(F){var w=this&&this.block,C=this&&this.attributes||{};t=2,e="pug/floating-nav.pug",n=n+"<li>",t=3,e="pug/floating-nav.pug",n=n+"<a"+sn("href","#"+F.target,!0,!1)+">",t=4,e="pug/floating-nav.pug",n=n+"<i"+sn("class",me(["mr-10","icon-"+F.icon],[!1,!0]),!1,!1)+"></i>",t=5,e="pug/floating-nav.pug",n=n+Y((o=F.label)==null?"":o)+"</a></li>"},t=7,e="pug/floating-nav.pug",n=n+'<a class="js-floating-nav-trigger floating-nav-trigger" href="#">',t=8,e="pug/floating-nav.pug",n=n+'<i class="icon-bars"></i>',t=9,e="pug/floating-nav.pug",n=n+'<span class="close-icon">',t=9,e="pug/floating-nav.pug",n=n+"&times;</span></a>",t=11,e="pug/floating-nav.pug",n=n+'<nav class="floating-nav js-floating-nav">',t=12,e="pug/floating-nav.pug",n=n+'<ul class="list-unstyled">',t=13,e="pug/floating-nav.pug",(function(){var F=z;if(typeof F.length=="number")for(var w=0,C=F.length;w<C;w++){var b=F[w];t=14,e="pug/floating-nav.pug",u.make_nav_link(b)}else{var C=0;for(var w in F){C++;var b=F[w];t=14,e="pug/floating-nav.pug",u.make_nav_link(b)}}}).call(this),n=n+"</ul></nav>",t=1,e="pug/profile-card.pug",u.profile_card_detail=o=function(F,w,C,b){var T=this&&this.block,P=this&&this.attributes||{};t=2,e="pug/profile-card.pug",n=n+'<div class="detail">',t=3,e="pug/profile-card.pug",n=n+"<span"+(' class="icon"'+sn("title",b,!0,!1))+">",t=4,e="pug/profile-card.pug",n=n+"<i"+sn("class",me(["icon","fs-lg",F],[!1,!1,!0]),!1,!1)+"></i></span>",t=5,e="pug/profile-card.pug",n=n+"<span"+(' class="info"'+sn("itemprop",C,!0,!1))+">",t=6,e="pug/profile-card.pug",T?(t=7,e="pug/profile-card.pug",T&&T()):(t=9,e="pug/profile-card.pug",n=n+Y((o=w)==null?"":o)),n=n+"</span></div>"},t=11,e="pug/profile-card.pug",u.render_links=o=function(F){var w=this&&this.block,C=this&&this.attributes||{};t=12,e="pug/profile-card.pug",(function(){var b=F;if(typeof b.length=="number")for(var T=0,P=b.length;T<P;T++){var R=b[T];t=13,e="pug/profile-card.pug",n=n+"<a"+(sn("class",me(["fs-2x","social-link","link-"+R.label+" icon-"+R.label],[!1,!1,!0]),!1,!1)+sn("href",R.url,!0,!1)+' target="_blank" data-toggle="tooltip"'+sn("title",S.basics.name+" on "+R.network,!0,!1))+">",t=19,e="pug/profile-card.pug",R.network.toLowerCase()=="meetup"&&(t=20,e="pug/profile-card.pug",n=n+'<span class="path2"></span>',t=21,e="pug/profile-card.pug",n=n+'<span class="path3"></span>'),t=22,e="pug/profile-card.pug",R.network.toLowerCase()=="gitlab"&&(t=23,e="pug/profile-card.pug",n=n+'<span class="path1"></span>',t=24,e="pug/profile-card.pug",n=n+'<span class="path2"></span>',t=25,e="pug/profile-card.pug",n=n+'<span class="path3"></span>',t=26,e="pug/profile-card.pug",n=n+'<span class="path4"></span>',t=27,e="pug/profile-card.pug",n=n+'<span class="path5"></span>',t=28,e="pug/profile-card.pug",n=n+'<span class="path6"></span>',t=29,e="pug/profile-card.pug",n=n+'<span class="path7"></span>',t=30,e="pug/profile-card.pug",n=n+'<span class="path8"></span>'),n=n+"</a>"}else{var P=0;for(var T in b){P++;var R=b[T];t=13,e="pug/profile-card.pug",n=n+"<a"+(sn("class",me(["fs-2x","social-link","link-"+R.label+" icon-"+R.label],[!1,!1,!0]),!1,!1)+sn("href",R.url,!0,!1)+' target="_blank" data-toggle="tooltip"'+sn("title",S.basics.name+" on "+R.network,!0,!1))+">",t=19,e="pug/profile-card.pug",R.network.toLowerCase()=="meetup"&&(t=20,e="pug/profile-card.pug",n=n+'<span class="path2"></span>',t=21,e="pug/profile-card.pug",n=n+'<span class="path3"></span>'),t=22,e="pug/profile-card.pug",R.network.toLowerCase()=="gitlab"&&(t=23,e="pug/profile-card.pug",n=n+'<span class="path1"></span>',t=24,e="pug/profile-card.pug",n=n+'<span class="path2"></span>',t=25,e="pug/profile-card.pug",n=n+'<span class="path3"></span>',t=26,e="pug/profile-card.pug",n=n+'<span class="path4"></span>',t=27,e="pug/profile-card.pug",n=n+'<span class="path5"></span>',t=28,e="pug/profile-card.pug",n=n+'<span class="path6"></span>',t=29,e="pug/profile-card.pug",n=n+'<span class="path7"></span>',t=30,e="pug/profile-card.pug",n=n+'<span class="path8"></span>'),n=n+"</a>"}}}).call(this)},t=32,e="pug/profile-card.pug",n=n+'<section class="col-md-3 card-wrapper profile-card-wrapper affix">',t=33,e="pug/profile-card.pug",n=n+'<div class="card profile-card">',t=34,e="pug/profile-card.pug",n=n+'<span class="profile-pic-container">',t=35,e="pug/profile-card.pug",n=n+'<div class="profile-pic">',t=36,e="pug/profile-card.pug",n=n+"<img"+(' class="media-object img-circle center-block" data-src="holder.js/100x100"'+sn("alt",S.basics.name,!0,!1)+sn("src",S.basics.picture,!0,!1)+' itemprop="image"')+"/></div>",t=42,e="pug/profile-card.pug",n=n+'<div class="name-and-profession text-center">',t=43,e="pug/profile-card.pug",n=n+'<h3 itemprop="name">',t=43,e="pug/profile-card.pug",n=n+"<b>",t=43,e="pug/profile-card.pug",n=n+Y((o=S.basics.name)==null?"":o)+"</b></h3>",t=44,e="pug/profile-card.pug",n=n+'<h5 class="text-muted" itemprop="jobTitle">',t=44,e="pug/profile-card.pug",n=n+Y((o=S.basics.label)==null?"":o)+"</h5></div></span>",t=46,e="pug/profile-card.pug",n=n+"<hr/>",t=48,e="pug/profile-card.pug",n=n+'<div class="contact-details clearfix">',t=49,e="pug/profile-card.pug",S.basics.computed_location&&(t=50,e="pug/profile-card.pug",u.profile_card_detail("icon-location",S.basics.computed_location)),t=51,e="pug/profile-card.pug",S.basics.phone&&(t=52,e="pug/profile-card.pug",u.profile_card_detail("icon-phone",S.basics.phone,"telephone")),t=53,e="pug/profile-card.pug",S.basics.email&&(t=54,e="pug/profile-card.pug",u.profile_card_detail.call({block:function(){t=55,e="pug/profile-card.pug",n=n+"<a"+(' class="link-disguise"'+sn("href","mailto:"+S.basics.email,!0,!1)+' itemprop="email"')+">",t=55,e="pug/profile-card.pug",n=n+Y((o=S.basics.email)==null?"":o)+"</a>"}},"icon-mail")),t=56,e="pug/profile-card.pug",S.basics.website&&(t=57,e="pug/profile-card.pug",u.profile_card_detail.call({block:function(){t=58,e="pug/profile-card.pug",n=n+"<a"+(sn("href",S.basics.website,!0,!1)+' target="_blank"')+">",t=58,e="pug/profile-card.pug",n=n+Y((o=S.basics.website)==null?"":o)+"</a>"}},"icon-link")),t=59,e="pug/profile-card.pug",S.basics.languages&&(t=60,e="pug/profile-card.pug",u.profile_card_detail("icon-language",S.basics.languages,null,"Languages I speak")),n=n+"</div>",t=62,e="pug/profile-card.pug",n=n+"<hr/>",t=64,e="pug/profile-card.pug",n=n+'<div class="social-links text-center">',t=65,e="pug/profile-card.pug",n=n+"<div>",t=66,e="pug/profile-card.pug",u.render_links(S.basics.top_five_profiles),t=68,e="pug/profile-card.pug",S.basics.remaining_profiles.length>0&&(t=69,e="pug/profile-card.pug",n=n+'<button class="btn btn-default btn-sm btn-circle-sm pull-right js-profiles-collapse" data-toggle="collapse" data-target="#remaining-profiles">',t=72,e="pug/profile-card.pug",n=n+'<i class="icon-chevron-down fs-lg"></i></button>',t=74,e="pug/profile-card.pug",n=n+'<div class="collapse text-left" id="remaining-profiles">',t=75,e="pug/profile-card.pug",u.render_links(S.basics.remaining_profiles),n=n+"</div>"),n=n+"</div></div></div></section>",t=1,e="pug/background-card.pug",n=n+'<section class="col-md-9 card-wrapper pull-right">',t=2,e="pug/background-card.pug",n=n+'<div class="card background-card">',t=3,e="pug/background-card.pug",n=n+'<h4 class="text-uppercase">',t=3,e="pug/background-card.pug",n=n+"Background</h4>",t=4,e="pug/background-card.pug",n=n+"<hr/>",t=6,e="pug/background-card.pug",n=n+'<div class="background-details">',t=1,e="pug/background/about.pug",f.isEmpty(S.basics.summary)||(t=2,e="pug/background/about.pug",n=n+'<div class="detail" id="about">',t=3,e="pug/background/about.pug",n=n+'<div class="icon">',t=4,e="pug/background/about.pug",n=n+'<i class="fs-lg icon-board"></i>',t=5,e="pug/background/about.pug",n=n+'<span class="mobile-title">',t=5,e="pug/background/about.pug",n=n+"About</span></div>",t=6,e="pug/background/about.pug",n=n+'<div class="info">',t=7,e="pug/background/about.pug",n=n+'<h4 class="title text-uppercase">',t=7,e="pug/background/about.pug",n=n+"About</h4>",t=9,e="pug/background/about.pug",n=n+'<div class="card card-nested">',t=10,e="pug/background/about.pug",n=n+'<div class="content mop-wrapper" itemprop="description">',t=10,e="pug/background/about.pug",n=n+((o=S.basics.summary)==null?"":o)+"</div></div></div></div>"),t=1,e="pug/background/projects.pug",f.isEmpty(S.projects)||(t=2,e="pug/background/projects.pug",n=n+'<div class="detail" id="projects">',t=3,e="pug/background/projects.pug",n=n+'<div class="icon">',t=4,e="pug/background/projects.pug",n=n+'<i class="fs-lg icon-codepen"></i>',t=5,e="pug/background/projects.pug",n=n+'<span class="mobile-title">',t=5,e="pug/background/projects.pug",n=n+"Projects</span></div>",t=7,e="pug/background/projects.pug",n=n+'<div class="info">',t=8,e="pug/background/projects.pug",n=n+'<h4 class="title text-uppercase">',t=8,e="pug/background/projects.pug",n=n+"Projects</h4>",t=10,e="pug/background/projects.pug",n=n+'<ul class="list-unstyled clear-margin">',t=11,e="pug/background/projects.pug",(function(){var F=S.projects;if(typeof F.length=="number")for(var w=0,C=F.length;w<C;w++){var b=F[w];t=12,e="pug/background/projects.pug",n=n+'<li class="card card-nested clearfix">',t=13,e="pug/background/projects.pug",n=n+'<div class="content">',t=14,e="pug/background/projects.pug",n=n+'<p class="clear-margin relative">',t=15,e="pug/background/projects.pug",b.endDate||(t=16,e="pug/background/projects.pug",n=n+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),t=21,e="pug/background/projects.pug",n=n+"<strong>",t=21,e="pug/background/projects.pug",n=n+Y((o=b.position)==null?"":o)+"</strong>",t=22,e="pug/background/projects.pug",n=n+",&nbsp;",t=23,e="pug/background/projects.pug",b.website?(t=24,e="pug/background/projects.pug",n=n+"<a"+(sn("href",b.website,!0,!1)+' target="_blank"')+">",t=24,e="pug/background/projects.pug",n=n+Y((o=b.company)==null?"":o)+"</a>"):(t=26,e="pug/background/projects.pug",n=n+Y((o=b.company)==null?"":o)),n=n+"</p>",t=28,e="pug/background/projects.pug",n=n+'<p class="text-muted">',t=29,e="pug/background/projects.pug",n=n+"<small>",t=30,e="pug/background/projects.pug",n=n+'<span class="space-right">',t=31,e="pug/background/projects.pug",n=n+Y((o=b.startDate)==null?"":o),t=31,e="pug/background/projects.pug",n=n+" - ",t=31,e="pug/background/projects.pug",n=n+Y((o=b.endDate||"Present")==null?"":o)+"</span>",t=33,e="pug/background/projects.pug",b.duration&&(t=34,e="pug/background/projects.pug",n=n+"<span>",t=35,e="pug/background/projects.pug",n=n+'<i class="icon-clock mr-5"></i>',t=36,e="pug/background/projects.pug",n=n+Y((o=b.duration)==null?"":o)+"</span>"),n=n+"</small></p>",t=38,e="pug/background/projects.pug",n=n+'<div class="mop-wrapper space-bottom">',t=38,e="pug/background/projects.pug",n=n+((o=b.summary)==null?"":o)+"</div>",t=40,e="pug/background/projects.pug",f.isEmpty(b.highlights)||(t=41,e="pug/background/projects.pug",n=n+"<ul>",t=42,e="pug/background/projects.pug",(function(){var T=b.highlights;if(typeof T.length=="number")for(var P=0,R=T.length;P<R;P++){var I=T[P];t=43,e="pug/background/projects.pug",n=n+'<li class="mop-wrapper">',t=43,e="pug/background/projects.pug",n=n+((o=I)==null?"":o)+"</li>"}else{var R=0;for(var P in T){R++;var I=T[P];t=43,e="pug/background/projects.pug",n=n+'<li class="mop-wrapper">',t=43,e="pug/background/projects.pug",n=n+((o=I)==null?"":o)+"</li>"}}}).call(this),n=n+"</ul>"),n=n+"</div></li>"}else{var C=0;for(var w in F){C++;var b=F[w];t=12,e="pug/background/projects.pug",n=n+'<li class="card card-nested clearfix">',t=13,e="pug/background/projects.pug",n=n+'<div class="content">',t=14,e="pug/background/projects.pug",n=n+'<p class="clear-margin relative">',t=15,e="pug/background/projects.pug",b.endDate||(t=16,e="pug/background/projects.pug",n=n+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),t=21,e="pug/background/projects.pug",n=n+"<strong>",t=21,e="pug/background/projects.pug",n=n+Y((o=b.position)==null?"":o)+"</strong>",t=22,e="pug/background/projects.pug",n=n+",&nbsp;",t=23,e="pug/background/projects.pug",b.website?(t=24,e="pug/background/projects.pug",n=n+"<a"+(sn("href",b.website,!0,!1)+' target="_blank"')+">",t=24,e="pug/background/projects.pug",n=n+Y((o=b.company)==null?"":o)+"</a>"):(t=26,e="pug/background/projects.pug",n=n+Y((o=b.company)==null?"":o)),n=n+"</p>",t=28,e="pug/background/projects.pug",n=n+'<p class="text-muted">',t=29,e="pug/background/projects.pug",n=n+"<small>",t=30,e="pug/background/projects.pug",n=n+'<span class="space-right">',t=31,e="pug/background/projects.pug",n=n+Y((o=b.startDate)==null?"":o),t=31,e="pug/background/projects.pug",n=n+" - ",t=31,e="pug/background/projects.pug",n=n+Y((o=b.endDate||"Present")==null?"":o)+"</span>",t=33,e="pug/background/projects.pug",b.duration&&(t=34,e="pug/background/projects.pug",n=n+"<span>",t=35,e="pug/background/projects.pug",n=n+'<i class="icon-clock mr-5"></i>',t=36,e="pug/background/projects.pug",n=n+Y((o=b.duration)==null?"":o)+"</span>"),n=n+"</small></p>",t=38,e="pug/background/projects.pug",n=n+'<div class="mop-wrapper space-bottom">',t=38,e="pug/background/projects.pug",n=n+((o=b.summary)==null?"":o)+"</div>",t=40,e="pug/background/projects.pug",f.isEmpty(b.highlights)||(t=41,e="pug/background/projects.pug",n=n+"<ul>",t=42,e="pug/background/projects.pug",(function(){var I=b.highlights;if(typeof I.length=="number")for(var x=0,q=I.length;x<q;x++){var E=I[x];t=43,e="pug/background/projects.pug",n=n+'<li class="mop-wrapper">',t=43,e="pug/background/projects.pug",n=n+((o=E)==null?"":o)+"</li>"}else{var q=0;for(var x in I){q++;var E=I[x];t=43,e="pug/background/projects.pug",n=n+'<li class="mop-wrapper">',t=43,e="pug/background/projects.pug",n=n+((o=E)==null?"":o)+"</li>"}}}).call(this),n=n+"</ul>"),n=n+"</div></li>"}}}).call(this),n=n+"</ul></div></div>"),t=1,e="pug/background/work-experience.pug",f.isEmpty(S.work)||(t=2,e="pug/background/work-experience.pug",n=n+'<div class="detail" id="work-experience">',t=3,e="pug/background/work-experience.pug",n=n+'<div class="icon">',t=4,e="pug/background/work-experience.pug",n=n+'<i class="fs-lg icon-office"></i>',t=5,e="pug/background/work-experience.pug",n=n+'<span class="mobile-title">',t=5,e="pug/background/work-experience.pug",n=n+"Work Experience</span></div>",t=7,e="pug/background/work-experience.pug",n=n+'<div class="info">',t=8,e="pug/background/work-experience.pug",n=n+'<h4 class="title text-uppercase">',t=8,e="pug/background/work-experience.pug",n=n+"Work Experience</h4>",t=10,e="pug/background/work-experience.pug",n=n+'<ul class="list-unstyled clear-margin">',t=11,e="pug/background/work-experience.pug",(function(){var F=S.work;if(typeof F.length=="number")for(var w=0,C=F.length;w<C;w++){var b=F[w];t=12,e="pug/background/work-experience.pug",n=n+'<li class="card card-nested clearfix">',t=13,e="pug/background/work-experience.pug",n=n+'<div class="content">',t=14,e="pug/background/work-experience.pug",n=n+'<p class="clear-margin relative">',t=15,e="pug/background/work-experience.pug",b.endDate||(t=16,e="pug/background/work-experience.pug",n=n+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),t=21,e="pug/background/work-experience.pug",n=n+"<strong>",t=21,e="pug/background/work-experience.pug",n=n+Y((o=b.position)==null?"":o)+"</strong>",t=22,e="pug/background/work-experience.pug",n=n+",&nbsp;",t=23,e="pug/background/work-experience.pug",b.website?(t=24,e="pug/background/work-experience.pug",n=n+"<a"+(sn("href",b.website,!0,!1)+' target="_blank"')+">",t=24,e="pug/background/work-experience.pug",n=n+Y((o=b.company)==null?"":o)+"</a>"):(t=26,e="pug/background/work-experience.pug",n=n+Y((o=b.company)==null?"":o)),n=n+"</p>",t=28,e="pug/background/work-experience.pug",n=n+'<p class="text-muted">',t=29,e="pug/background/work-experience.pug",n=n+"<small>",t=30,e="pug/background/work-experience.pug",n=n+'<span class="space-right">',t=31,e="pug/background/work-experience.pug",n=n+Y((o=b.startDate)==null?"":o),t=31,e="pug/background/work-experience.pug",n=n+" - ",t=31,e="pug/background/work-experience.pug",n=n+Y((o=b.endDate||"Present")==null?"":o)+"</span>",t=33,e="pug/background/work-experience.pug",b.duration&&(t=34,e="pug/background/work-experience.pug",n=n+"<span>",t=35,e="pug/background/work-experience.pug",n=n+'<i class="icon-clock mr-5"></i>',t=36,e="pug/background/work-experience.pug",n=n+Y((o=b.duration)==null?"":o)+"</span>"),n=n+"</small></p>",t=38,e="pug/background/work-experience.pug",n=n+'<div class="mop-wrapper space-bottom">',t=38,e="pug/background/work-experience.pug",n=n+((o=b.summary)==null?"":o)+"</div>",t=40,e="pug/background/work-experience.pug",f.isEmpty(b.highlights)||(t=41,e="pug/background/work-experience.pug",n=n+"<ul>",t=42,e="pug/background/work-experience.pug",(function(){var T=b.highlights;if(typeof T.length=="number")for(var P=0,R=T.length;P<R;P++){var I=T[P];t=43,e="pug/background/work-experience.pug",n=n+'<li class="mop-wrapper">',t=43,e="pug/background/work-experience.pug",n=n+((o=I)==null?"":o)+"</li>"}else{var R=0;for(var P in T){R++;var I=T[P];t=43,e="pug/background/work-experience.pug",n=n+'<li class="mop-wrapper">',t=43,e="pug/background/work-experience.pug",n=n+((o=I)==null?"":o)+"</li>"}}}).call(this),n=n+"</ul>"),n=n+"</div></li>"}else{var C=0;for(var w in F){C++;var b=F[w];t=12,e="pug/background/work-experience.pug",n=n+'<li class="card card-nested clearfix">',t=13,e="pug/background/work-experience.pug",n=n+'<div class="content">',t=14,e="pug/background/work-experience.pug",n=n+'<p class="clear-margin relative">',t=15,e="pug/background/work-experience.pug",b.endDate||(t=16,e="pug/background/work-experience.pug",n=n+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),t=21,e="pug/background/work-experience.pug",n=n+"<strong>",t=21,e="pug/background/work-experience.pug",n=n+Y((o=b.position)==null?"":o)+"</strong>",t=22,e="pug/background/work-experience.pug",n=n+",&nbsp;",t=23,e="pug/background/work-experience.pug",b.website?(t=24,e="pug/background/work-experience.pug",n=n+"<a"+(sn("href",b.website,!0,!1)+' target="_blank"')+">",t=24,e="pug/background/work-experience.pug",n=n+Y((o=b.company)==null?"":o)+"</a>"):(t=26,e="pug/background/work-experience.pug",n=n+Y((o=b.company)==null?"":o)),n=n+"</p>",t=28,e="pug/background/work-experience.pug",n=n+'<p class="text-muted">',t=29,e="pug/background/work-experience.pug",n=n+"<small>",t=30,e="pug/background/work-experience.pug",n=n+'<span class="space-right">',t=31,e="pug/background/work-experience.pug",n=n+Y((o=b.startDate)==null?"":o),t=31,e="pug/background/work-experience.pug",n=n+" - ",t=31,e="pug/background/work-experience.pug",n=n+Y((o=b.endDate||"Present")==null?"":o)+"</span>",t=33,e="pug/background/work-experience.pug",b.duration&&(t=34,e="pug/background/work-experience.pug",n=n+"<span>",t=35,e="pug/background/work-experience.pug",n=n+'<i class="icon-clock mr-5"></i>',t=36,e="pug/background/work-experience.pug",n=n+Y((o=b.duration)==null?"":o)+"</span>"),n=n+"</small></p>",t=38,e="pug/background/work-experience.pug",n=n+'<div class="mop-wrapper space-bottom">',t=38,e="pug/background/work-experience.pug",n=n+((o=b.summary)==null?"":o)+"</div>",t=40,e="pug/background/work-experience.pug",f.isEmpty(b.highlights)||(t=41,e="pug/background/work-experience.pug",n=n+"<ul>",t=42,e="pug/background/work-experience.pug",(function(){var I=b.highlights;if(typeof I.length=="number")for(var x=0,q=I.length;x<q;x++){var E=I[x];t=43,e="pug/background/work-experience.pug",n=n+'<li class="mop-wrapper">',t=43,e="pug/background/work-experience.pug",n=n+((o=E)==null?"":o)+"</li>"}else{var q=0;for(var x in I){q++;var E=I[x];t=43,e="pug/background/work-experience.pug",n=n+'<li class="mop-wrapper">',t=43,e="pug/background/work-experience.pug",n=n+((o=E)==null?"":o)+"</li>"}}}).call(this),n=n+"</ul>"),n=n+"</div></li>"}}}).call(this),n=n+"</ul></div></div>"),t=1,e="pug/background/skills.pug",f.isEmpty(S.skills)||(t=2,e="pug/background/skills.pug",n=n+'<div class="detail" id="skills">',t=3,e="pug/background/skills.pug",n=n+'<div class="icon">',t=4,e="pug/background/skills.pug",n=n+'<i class="fs-lg icon-tools"></i>',t=5,e="pug/background/skills.pug",n=n+'<span class="mobile-title">',t=5,e="pug/background/skills.pug",n=n+"Skills</span></div>",t=7,e="pug/background/skills.pug",n=n+'<div class="info">',t=8,e="pug/background/skills.pug",n=n+'<h4 class="title text-uppercase">',t=8,e="pug/background/skills.pug",n=n+"Skills</h4>",t=10,e="pug/background/skills.pug",n=n+'<div class="content">',t=11,e="pug/background/skills.pug",n=n+'<ul class="list-unstyled clear-margin">',t=12,e="pug/background/skills.pug",(function(){var F=S.skills;if(typeof F.length=="number")for(var w=0,C=F.length;w<C;w++){var b=F[w];t=13,e="pug/background/skills.pug",n=n+'<li class="card card-nested card-skills">',t=14,e="pug/background/skills.pug",b.display_progress_bar&&(t=15,e="pug/background/skills.pug",n=n+"<div"+(' class="skill-level" data-toggle="tooltip"'+sn("title",b.level,!0,!1)+' data-placement="left"')+">",t=16,e="pug/background/skills.pug",n=n+"<div"+sn("class",me(["skill-progress",b.skill_class],[!1,!0]),!1,!1)+"></div></div>"),t=18,e="pug/background/skills.pug",n=n+'<div class="skill-info">',t=19,e="pug/background/skills.pug",n=n+"<strong>",t=19,e="pug/background/skills.pug",n=n+Y((o=b.name)==null?"":o)+"</strong>",t=21,e="pug/background/skills.pug",f.isEmpty(b.keywords)||(t=22,e="pug/background/skills.pug",n=n+'<div class="space-top labels">',t=23,e="pug/background/skills.pug",(function(){var T=b.keywords;if(typeof T.length=="number")for(var P=0,R=T.length;P<R;P++){var I=T[P];t=24,e="pug/background/skills.pug",n=n+'<span class="label label-keyword">',t=24,e="pug/background/skills.pug",n=n+Y((o=I)==null?"":o)+"</span>"}else{var R=0;for(var P in T){R++;var I=T[P];t=24,e="pug/background/skills.pug",n=n+'<span class="label label-keyword">',t=24,e="pug/background/skills.pug",n=n+Y((o=I)==null?"":o)+"</span>"}}}).call(this),n=n+"</div>"),n=n+"</div></li>"}else{var C=0;for(var w in F){C++;var b=F[w];t=13,e="pug/background/skills.pug",n=n+'<li class="card card-nested card-skills">',t=14,e="pug/background/skills.pug",b.display_progress_bar&&(t=15,e="pug/background/skills.pug",n=n+"<div"+(' class="skill-level" data-toggle="tooltip"'+sn("title",b.level,!0,!1)+' data-placement="left"')+">",t=16,e="pug/background/skills.pug",n=n+"<div"+sn("class",me(["skill-progress",b.skill_class],[!1,!0]),!1,!1)+"></div></div>"),t=18,e="pug/background/skills.pug",n=n+'<div class="skill-info">',t=19,e="pug/background/skills.pug",n=n+"<strong>",t=19,e="pug/background/skills.pug",n=n+Y((o=b.name)==null?"":o)+"</strong>",t=21,e="pug/background/skills.pug",f.isEmpty(b.keywords)||(t=22,e="pug/background/skills.pug",n=n+'<div class="space-top labels">',t=23,e="pug/background/skills.pug",(function(){var I=b.keywords;if(typeof I.length=="number")for(var x=0,q=I.length;x<q;x++){var E=I[x];t=24,e="pug/background/skills.pug",n=n+'<span class="label label-keyword">',t=24,e="pug/background/skills.pug",n=n+Y((o=E)==null?"":o)+"</span>"}else{var q=0;for(var x in I){q++;var E=I[x];t=24,e="pug/background/skills.pug",n=n+'<span class="label label-keyword">',t=24,e="pug/background/skills.pug",n=n+Y((o=E)==null?"":o)+"</span>"}}}).call(this),n=n+"</div>"),n=n+"</div></li>"}}}).call(this),n=n+"</ul></div></div></div>"),t=1,e="pug/background/education.pug",f.isEmpty(S.education)||(t=2,e="pug/background/education.pug",n=n+'<div class="detail" id="education">',t=3,e="pug/background/education.pug",n=n+'<div class="icon">',t=4,e="pug/background/education.pug",n=n+'<i class="fs-lg icon-graduation-cap"></i>',t=5,e="pug/background/education.pug",n=n+'<span class="mobile-title">',t=5,e="pug/background/education.pug",n=n+"Education</span></div>",t=7,e="pug/background/education.pug",n=n+'<div class="info">',t=8,e="pug/background/education.pug",n=n+'<h4 class="title text-uppercase">',t=8,e="pug/background/education.pug",n=n+"Education</h4>",t=10,e="pug/background/education.pug",n=n+'<div class="content">',t=11,e="pug/background/education.pug",n=n+'<ul class="list-unstyled clear-margin">',t=12,e="pug/background/education.pug",(function(){var F=S.education;if(typeof F.length=="number")for(var w=0,C=F.length;w<C;w++){var b=F[w];t=13,e="pug/background/education.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/education.pug",n=n+'<div class="content">',t=15,e="pug/background/education.pug",n=n+'<p class="clear-margin relative">',t=16,e="pug/background/education.pug",b.endDate||(t=17,e="pug/background/education.pug",n=n+'<i class="icon-circle current-event" rel="tooltip" title="Currently Pursuing" data-placement="left"></i>'),t=23,e="pug/background/education.pug",n=n+"<strong>",t=24,e="pug/background/education.pug",n=n+Y((o=b.area)==null?"":o),t=24,e="pug/background/education.pug",n=n+", ",t=24,e="pug/background/education.pug",n=n+Y((o=b.studyType)==null?"":o),t=24,e="pug/background/education.pug",n=n+",&nbsp;</strong>",t=25,e="pug/background/education.pug",n=n+Y((o=b.institution)==null?"":o)+"</p>",t=27,e="pug/background/education.pug",n=n+"<p"+sn("class",me(["text-muted",!b.gpa&&f.isEmpty(b.courses)?"clear-margin":""],[!1,!0]),!1,!1)+">",t=28,e="pug/background/education.pug",n=n+"<small>",t=29,e="pug/background/education.pug",n=n+Y((o=b.startDate)==null?"":o),t=29,e="pug/background/education.pug",n=n+" - ",t=29,e="pug/background/education.pug",n=n+Y((o=b.endDate||"Present")==null?"":o)+"</small></p>",t=30,e="pug/background/education.pug",n=n+"<i>",t=30,e="pug/background/education.pug",n=n+Y((o=b.gpa)==null?"":o)+"</i>",t=32,e="pug/background/education.pug",f.isEmpty(b.courses)||(t=33,e="pug/background/education.pug",n=n+'<div class="space-top labels">',t=34,e="pug/background/education.pug",(function(){var T=b.courses;if(typeof T.length=="number")for(var P=0,R=T.length;P<R;P++){var I=T[P];t=35,e="pug/background/education.pug",n=n+'<span class="label label-keyword">',t=35,e="pug/background/education.pug",n=n+Y((o=I)==null?"":o)+"</span>"}else{var R=0;for(var P in T){R++;var I=T[P];t=35,e="pug/background/education.pug",n=n+'<span class="label label-keyword">',t=35,e="pug/background/education.pug",n=n+Y((o=I)==null?"":o)+"</span>"}}}).call(this),n=n+"</div>"),n=n+"</div></li>"}else{var C=0;for(var w in F){C++;var b=F[w];t=13,e="pug/background/education.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/education.pug",n=n+'<div class="content">',t=15,e="pug/background/education.pug",n=n+'<p class="clear-margin relative">',t=16,e="pug/background/education.pug",b.endDate||(t=17,e="pug/background/education.pug",n=n+'<i class="icon-circle current-event" rel="tooltip" title="Currently Pursuing" data-placement="left"></i>'),t=23,e="pug/background/education.pug",n=n+"<strong>",t=24,e="pug/background/education.pug",n=n+Y((o=b.area)==null?"":o),t=24,e="pug/background/education.pug",n=n+", ",t=24,e="pug/background/education.pug",n=n+Y((o=b.studyType)==null?"":o),t=24,e="pug/background/education.pug",n=n+",&nbsp;</strong>",t=25,e="pug/background/education.pug",n=n+Y((o=b.institution)==null?"":o)+"</p>",t=27,e="pug/background/education.pug",n=n+"<p"+sn("class",me(["text-muted",!b.gpa&&f.isEmpty(b.courses)?"clear-margin":""],[!1,!0]),!1,!1)+">",t=28,e="pug/background/education.pug",n=n+"<small>",t=29,e="pug/background/education.pug",n=n+Y((o=b.startDate)==null?"":o),t=29,e="pug/background/education.pug",n=n+" - ",t=29,e="pug/background/education.pug",n=n+Y((o=b.endDate||"Present")==null?"":o)+"</small></p>",t=30,e="pug/background/education.pug",n=n+"<i>",t=30,e="pug/background/education.pug",n=n+Y((o=b.gpa)==null?"":o)+"</i>",t=32,e="pug/background/education.pug",f.isEmpty(b.courses)||(t=33,e="pug/background/education.pug",n=n+'<div class="space-top labels">',t=34,e="pug/background/education.pug",(function(){var I=b.courses;if(typeof I.length=="number")for(var x=0,q=I.length;x<q;x++){var E=I[x];t=35,e="pug/background/education.pug",n=n+'<span class="label label-keyword">',t=35,e="pug/background/education.pug",n=n+Y((o=E)==null?"":o)+"</span>"}else{var q=0;for(var x in I){q++;var E=I[x];t=35,e="pug/background/education.pug",n=n+'<span class="label label-keyword">',t=35,e="pug/background/education.pug",n=n+Y((o=E)==null?"":o)+"</span>"}}}).call(this),n=n+"</div>"),n=n+"</div></li>"}}}).call(this),n=n+"</ul></div></div></div>"),t=1,e="pug/background/rev.pug",f.isEmpty(S.externalreview)||(t=2,e="pug/background/rev.pug",n=n+'<div class="detail" id="rev">',t=3,e="pug/background/rev.pug",n=n+'<div class="icon">',t=4,e="pug/background/rev.pug",n=n+'<i class="fas fa-glasses" style="font-size:1.25em;"></i>',t=5,e="pug/background/rev.pug",n=n+'<span class="mobile-title">',t=5,e="pug/background/rev.pug",n=n+"External Reviewer</span></div>",t=7,e="pug/background/rev.pug",n=n+'<div class="info">',t=8,e="pug/background/rev.pug",n=n+'<h4 class="title text-uppercase">',t=8,e="pug/background/rev.pug",n=n+"External Reviewer</h4>",t=10,e="pug/background/rev.pug",n=n+'<div class="content">',t=11,e="pug/background/rev.pug",n=n+'<ul class="list-unstyled clear-margin">',t=12,e="pug/background/rev.pug",(function(){var F=S.externalreview;if(typeof F.length=="number")for(var w=0,C=F.length;w<C;w++){var b=F[w];t=13,e="pug/background/rev.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/rev.pug",n=n+"<p>",t=15,e="pug/background/rev.pug",n=n+"<strong>",t=15,e="pug/background/rev.pug",n=n+Y((o=b.name)==null?"":o)+"</strong></p>",t=17,e="pug/background/rev.pug",f.isEmpty(b.keywords)||(t=18,e="pug/background/rev.pug",n=n+'<div class="space-top labels">',t=19,e="pug/background/rev.pug",(function(){var T=b.keywords;if(typeof T.length=="number")for(var P=0,R=T.length;P<R;P++){var I=T[P];t=20,e="pug/background/rev.pug",n=n+'<span class="label label-keyword">',t=20,e="pug/background/rev.pug",n=n+Y((o=I)==null?"":o)+"</span>"}else{var R=0;for(var P in T){R++;var I=T[P];t=20,e="pug/background/rev.pug",n=n+'<span class="label label-keyword">',t=20,e="pug/background/rev.pug",n=n+Y((o=I)==null?"":o)+"</span>"}}}).call(this),n=n+"</div>"),n=n+"</li>"}else{var C=0;for(var w in F){C++;var b=F[w];t=13,e="pug/background/rev.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/rev.pug",n=n+"<p>",t=15,e="pug/background/rev.pug",n=n+"<strong>",t=15,e="pug/background/rev.pug",n=n+Y((o=b.name)==null?"":o)+"</strong></p>",t=17,e="pug/background/rev.pug",f.isEmpty(b.keywords)||(t=18,e="pug/background/rev.pug",n=n+'<div class="space-top labels">',t=19,e="pug/background/rev.pug",(function(){var I=b.keywords;if(typeof I.length=="number")for(var x=0,q=I.length;x<q;x++){var E=I[x];t=20,e="pug/background/rev.pug",n=n+'<span class="label label-keyword">',t=20,e="pug/background/rev.pug",n=n+Y((o=E)==null?"":o)+"</span>"}else{var q=0;for(var x in I){q++;var E=I[x];t=20,e="pug/background/rev.pug",n=n+'<span class="label label-keyword">',t=20,e="pug/background/rev.pug",n=n+Y((o=E)==null?"":o)+"</span>"}}}).call(this),n=n+"</div>"),n=n+"</li>"}}}).call(this),n=n+"</ul></div></div></div>"),t=1,e="pug/background/ta.pug",f.isEmpty(S.teaching)||(t=2,e="pug/background/ta.pug",n=n+'<div class="detail" id="teaching">',t=3,e="pug/background/ta.pug",n=n+'<div class="icon">',t=4,e="pug/background/ta.pug",n=n+'<i class="fs-lg icon-book"></i>',t=5,e="pug/background/ta.pug",n=n+'<span class="mobile-title">',t=5,e="pug/background/ta.pug",n=n+"Teaching</span></div>",t=7,e="pug/background/ta.pug",n=n+'<div class="info">',t=8,e="pug/background/ta.pug",n=n+'<h4 class="title text-uppercase">',t=8,e="pug/background/ta.pug",n=n+"Teaching</h4>",t=10,e="pug/background/ta.pug",n=n+'<ul class="list-unstyled clear-margin">',t=11,e="pug/background/ta.pug",(function(){var F=S.teaching;if(typeof F.length=="number")for(var w=0,C=F.length;w<C;w++){var b=F[w];t=12,e="pug/background/ta.pug",n=n+'<li class="card card-nested clearfix">',t=13,e="pug/background/ta.pug",n=n+'<div class="content">',t=14,e="pug/background/ta.pug",n=n+'<p class="clear-margin relative">',t=15,e="pug/background/ta.pug",b.endDate||(t=16,e="pug/background/ta.pug",n=n+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),t=21,e="pug/background/ta.pug",n=n+"<strong>",t=21,e="pug/background/ta.pug",n=n+Y((o=b.position)==null?"":o)+"</strong>",t=22,e="pug/background/ta.pug",n=n+",&nbsp;",t=23,e="pug/background/ta.pug",b.website?(t=24,e="pug/background/ta.pug",n=n+"<a"+(sn("href",b.website,!0,!1)+' target="_blank"')+">",t=24,e="pug/background/ta.pug",n=n+Y((o=b.company)==null?"":o)+"</a>"):(t=26,e="pug/background/ta.pug",n=n+Y((o=b.company)==null?"":o)),n=n+"</p>",t=28,e="pug/background/ta.pug",n=n+'<p class="text-muted">',t=29,e="pug/background/ta.pug",n=n+"<small>",t=30,e="pug/background/ta.pug",n=n+'<span class="space-right">',t=31,e="pug/background/ta.pug",n=n+Y((o=b.startDate)==null?"":o),t=31,e="pug/background/ta.pug",n=n+" - ",t=31,e="pug/background/ta.pug",n=n+Y((o=b.endDate||"Present")==null?"":o)+"</span>",t=33,e="pug/background/ta.pug",b.duration&&(t=34,e="pug/background/ta.pug",n=n+"<span>",t=35,e="pug/background/ta.pug",n=n+'<i class="icon-clock mr-5"></i>',t=36,e="pug/background/ta.pug",n=n+Y((o=b.duration)==null?"":o)+"</span>"),n=n+"</small></p>",t=38,e="pug/background/ta.pug",n=n+'<div class="mop-wrapper space-bottom">',t=38,e="pug/background/ta.pug",n=n+((o=b.summary)==null?"":o)+"</div>",t=40,e="pug/background/ta.pug",f.isEmpty(b.highlights)||(t=41,e="pug/background/ta.pug",n=n+"<ul>",t=42,e="pug/background/ta.pug",(function(){var T=b.highlights;if(typeof T.length=="number")for(var P=0,R=T.length;P<R;P++){var I=T[P];t=43,e="pug/background/ta.pug",n=n+'<li class="mop-wrapper">',t=43,e="pug/background/ta.pug",n=n+((o=I)==null?"":o)+"</li>"}else{var R=0;for(var P in T){R++;var I=T[P];t=43,e="pug/background/ta.pug",n=n+'<li class="mop-wrapper">',t=43,e="pug/background/ta.pug",n=n+((o=I)==null?"":o)+"</li>"}}}).call(this),n=n+"</ul>"),n=n+"</div></li>"}else{var C=0;for(var w in F){C++;var b=F[w];t=12,e="pug/background/ta.pug",n=n+'<li class="card card-nested clearfix">',t=13,e="pug/background/ta.pug",n=n+'<div class="content">',t=14,e="pug/background/ta.pug",n=n+'<p class="clear-margin relative">',t=15,e="pug/background/ta.pug",b.endDate||(t=16,e="pug/background/ta.pug",n=n+'<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>'),t=21,e="pug/background/ta.pug",n=n+"<strong>",t=21,e="pug/background/ta.pug",n=n+Y((o=b.position)==null?"":o)+"</strong>",t=22,e="pug/background/ta.pug",n=n+",&nbsp;",t=23,e="pug/background/ta.pug",b.website?(t=24,e="pug/background/ta.pug",n=n+"<a"+(sn("href",b.website,!0,!1)+' target="_blank"')+">",t=24,e="pug/background/ta.pug",n=n+Y((o=b.company)==null?"":o)+"</a>"):(t=26,e="pug/background/ta.pug",n=n+Y((o=b.company)==null?"":o)),n=n+"</p>",t=28,e="pug/background/ta.pug",n=n+'<p class="text-muted">',t=29,e="pug/background/ta.pug",n=n+"<small>",t=30,e="pug/background/ta.pug",n=n+'<span class="space-right">',t=31,e="pug/background/ta.pug",n=n+Y((o=b.startDate)==null?"":o),t=31,e="pug/background/ta.pug",n=n+" - ",t=31,e="pug/background/ta.pug",n=n+Y((o=b.endDate||"Present")==null?"":o)+"</span>",t=33,e="pug/background/ta.pug",b.duration&&(t=34,e="pug/background/ta.pug",n=n+"<span>",t=35,e="pug/background/ta.pug",n=n+'<i class="icon-clock mr-5"></i>',t=36,e="pug/background/ta.pug",n=n+Y((o=b.duration)==null?"":o)+"</span>"),n=n+"</small></p>",t=38,e="pug/background/ta.pug",n=n+'<div class="mop-wrapper space-bottom">',t=38,e="pug/background/ta.pug",n=n+((o=b.summary)==null?"":o)+"</div>",t=40,e="pug/background/ta.pug",f.isEmpty(b.highlights)||(t=41,e="pug/background/ta.pug",n=n+"<ul>",t=42,e="pug/background/ta.pug",(function(){var I=b.highlights;if(typeof I.length=="number")for(var x=0,q=I.length;x<q;x++){var E=I[x];t=43,e="pug/background/ta.pug",n=n+'<li class="mop-wrapper">',t=43,e="pug/background/ta.pug",n=n+((o=E)==null?"":o)+"</li>"}else{var q=0;for(var x in I){q++;var E=I[x];t=43,e="pug/background/ta.pug",n=n+'<li class="mop-wrapper">',t=43,e="pug/background/ta.pug",n=n+((o=E)==null?"":o)+"</li>"}}}).call(this),n=n+"</ul>"),n=n+"</div></li>"}}}).call(this),n=n+"</ul></div></div>"),t=1,e="pug/background/awards.pug",f.isEmpty(S.awards)||(t=2,e="pug/background/awards.pug",n=n+'<div class="detail" id="awards">',t=3,e="pug/background/awards.pug",n=n+'<div class="icon">',t=4,e="pug/background/awards.pug",n=n+'<i class="fs-lg icon-trophy"></i>',t=5,e="pug/background/awards.pug",n=n+'<span class="mobile-title">',t=5,e="pug/background/awards.pug",n=n+"Awards</span></div>",t=7,e="pug/background/awards.pug",n=n+'<div class="info">',t=8,e="pug/background/awards.pug",n=n+'<h4 class="title text-uppercase">',t=8,e="pug/background/awards.pug",n=n+"Awards</h4>",t=10,e="pug/background/awards.pug",n=n+'<div class="content">',t=11,e="pug/background/awards.pug",n=n+'<ul class="list-unstyled clear-margin">',t=12,e="pug/background/awards.pug",(function(){var F=S.awards;if(typeof F.length=="number")for(var w=0,C=F.length;w<C;w++){var b=F[w];t=13,e="pug/background/awards.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/awards.pug",n=n+'<div class="content">',t=15,e="pug/background/awards.pug",n=n+'<p class="clear-margin" itemprop="award">',t=16,e="pug/background/awards.pug",n=n+"<strong>",t=16,e="pug/background/awards.pug",n=n+Y((o=b.title+" ")==null?"":o)+"</strong>",t=17,e="pug/background/awards.pug",n=n+Y((o=b.awarder)==null?"":o)+"</p>",t=19,e="pug/background/awards.pug",n=n+'<p class="text-muted">',t=20,e="pug/background/awards.pug",n=n+"<small>",t=21,e="pug/background/awards.pug",n=n+"Awarded on: ",t=21,e="pug/background/awards.pug",n=n+Y((o=b.date)==null?"":o)+"</small></p>",t=23,e="pug/background/awards.pug",n=n+'<div class="mop-wrapper">',t=23,e="pug/background/awards.pug",n=n+((o=b.summary)==null?"":o)+"</div></div></li>"}else{var C=0;for(var w in F){C++;var b=F[w];t=13,e="pug/background/awards.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/awards.pug",n=n+'<div class="content">',t=15,e="pug/background/awards.pug",n=n+'<p class="clear-margin" itemprop="award">',t=16,e="pug/background/awards.pug",n=n+"<strong>",t=16,e="pug/background/awards.pug",n=n+Y((o=b.title+" ")==null?"":o)+"</strong>",t=17,e="pug/background/awards.pug",n=n+Y((o=b.awarder)==null?"":o)+"</p>",t=19,e="pug/background/awards.pug",n=n+'<p class="text-muted">',t=20,e="pug/background/awards.pug",n=n+"<small>",t=21,e="pug/background/awards.pug",n=n+"Awarded on: ",t=21,e="pug/background/awards.pug",n=n+Y((o=b.date)==null?"":o)+"</small></p>",t=23,e="pug/background/awards.pug",n=n+'<div class="mop-wrapper">',t=23,e="pug/background/awards.pug",n=n+((o=b.summary)==null?"":o)+"</div></div></li>"}}}).call(this),n=n+"</ul></div></div></div>"),t=1,e="pug/background/volunteer-work.pug",f.isEmpty(S.volunteer)||(t=2,e="pug/background/volunteer-work.pug",n=n+'<div class="detail" id="volunteer-work">',t=3,e="pug/background/volunteer-work.pug",n=n+'<div class="icon">',t=4,e="pug/background/volunteer-work.pug",n=n+'<i class="fs-lg icon-child"></i>',t=5,e="pug/background/volunteer-work.pug",n=n+'<span class="mobile-title">',t=5,e="pug/background/volunteer-work.pug",n=n+"Volunteer Work</span></div>",t=7,e="pug/background/volunteer-work.pug",n=n+'<div class="info">',t=8,e="pug/background/volunteer-work.pug",n=n+'<h4 class="title text-uppercase">',t=8,e="pug/background/volunteer-work.pug",n=n+"Volunteer Work</h4>",t=10,e="pug/background/volunteer-work.pug",n=n+'<div class="content">',t=11,e="pug/background/volunteer-work.pug",n=n+'<ul class="list-unstyled clear-margin">',t=12,e="pug/background/volunteer-work.pug",(function(){var F=S.volunteer;if(typeof F.length=="number")for(var w=0,C=F.length;w<C;w++){var b=F[w];t=13,e="pug/background/volunteer-work.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/volunteer-work.pug",n=n+'<div class="content">',t=15,e="pug/background/volunteer-work.pug",n=n+'<p class="clear-margin relative">',t=16,e="pug/background/volunteer-work.pug",b.endDate||(t=17,e="pug/background/volunteer-work.pug",n=n+'<i class="icon-circle current-event" rel="tooltip" title="Currently Volunteering" data-placement="left"></i>'),t=23,e="pug/background/volunteer-work.pug",n=n+"<strong>",t=23,e="pug/background/volunteer-work.pug",n=n+Y((o=b.position+", ")==null?"":o)+"</strong>",t=24,e="pug/background/volunteer-work.pug",b.website?(t=25,e="pug/background/volunteer-work.pug",n=n+"<a"+(sn("href",b.website,!0,!1)+' target="_blank"')+">",t=25,e="pug/background/volunteer-work.pug",n=n+Y((o=b.organization)==null?"":o)+"</a>"):(t=27,e="pug/background/volunteer-work.pug",n=n+Y((o=b.organization)==null?"":o)),n=n+"</p>",t=29,e="pug/background/volunteer-work.pug",n=n+'<p class="text-muted">',t=30,e="pug/background/volunteer-work.pug",n=n+"<small>",t=31,e="pug/background/volunteer-work.pug",n=n+Y((o=b.startDate)==null?"":o),t=31,e="pug/background/volunteer-work.pug",n=n+" - ",t=31,e="pug/background/volunteer-work.pug",n=n+Y((o=b.endDate||"Present")==null?"":o)+"</small></p>",t=33,e="pug/background/volunteer-work.pug",n=n+'<div class="mop-wrapper">',t=33,e="pug/background/volunteer-work.pug",n=n+((o=b.summary)==null?"":o)+"</div>",t=35,e="pug/background/volunteer-work.pug",f.isEmpty(b.highlights)||(t=36,e="pug/background/volunteer-work.pug",n=n+"<ul>",t=37,e="pug/background/volunteer-work.pug",(function(){var T=b.highlights;if(typeof T.length=="number")for(var P=0,R=T.length;P<R;P++){var I=T[P];t=38,e="pug/background/volunteer-work.pug",n=n+'<li class="mop-wrapper">',t=38,e="pug/background/volunteer-work.pug",n=n+((o=I)==null?"":o)+"</li>"}else{var R=0;for(var P in T){R++;var I=T[P];t=38,e="pug/background/volunteer-work.pug",n=n+'<li class="mop-wrapper">',t=38,e="pug/background/volunteer-work.pug",n=n+((o=I)==null?"":o)+"</li>"}}}).call(this),n=n+"</ul>"),n=n+"</div></li>"}else{var C=0;for(var w in F){C++;var b=F[w];t=13,e="pug/background/volunteer-work.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/volunteer-work.pug",n=n+'<div class="content">',t=15,e="pug/background/volunteer-work.pug",n=n+'<p class="clear-margin relative">',t=16,e="pug/background/volunteer-work.pug",b.endDate||(t=17,e="pug/background/volunteer-work.pug",n=n+'<i class="icon-circle current-event" rel="tooltip" title="Currently Volunteering" data-placement="left"></i>'),t=23,e="pug/background/volunteer-work.pug",n=n+"<strong>",t=23,e="pug/background/volunteer-work.pug",n=n+Y((o=b.position+", ")==null?"":o)+"</strong>",t=24,e="pug/background/volunteer-work.pug",b.website?(t=25,e="pug/background/volunteer-work.pug",n=n+"<a"+(sn("href",b.website,!0,!1)+' target="_blank"')+">",t=25,e="pug/background/volunteer-work.pug",n=n+Y((o=b.organization)==null?"":o)+"</a>"):(t=27,e="pug/background/volunteer-work.pug",n=n+Y((o=b.organization)==null?"":o)),n=n+"</p>",t=29,e="pug/background/volunteer-work.pug",n=n+'<p class="text-muted">',t=30,e="pug/background/volunteer-work.pug",n=n+"<small>",t=31,e="pug/background/volunteer-work.pug",n=n+Y((o=b.startDate)==null?"":o),t=31,e="pug/background/volunteer-work.pug",n=n+" - ",t=31,e="pug/background/volunteer-work.pug",n=n+Y((o=b.endDate||"Present")==null?"":o)+"</small></p>",t=33,e="pug/background/volunteer-work.pug",n=n+'<div class="mop-wrapper">',t=33,e="pug/background/volunteer-work.pug",n=n+((o=b.summary)==null?"":o)+"</div>",t=35,e="pug/background/volunteer-work.pug",f.isEmpty(b.highlights)||(t=36,e="pug/background/volunteer-work.pug",n=n+"<ul>",t=37,e="pug/background/volunteer-work.pug",(function(){var I=b.highlights;if(typeof I.length=="number")for(var x=0,q=I.length;x<q;x++){var E=I[x];t=38,e="pug/background/volunteer-work.pug",n=n+'<li class="mop-wrapper">',t=38,e="pug/background/volunteer-work.pug",n=n+((o=E)==null?"":o)+"</li>"}else{var q=0;for(var x in I){q++;var E=I[x];t=38,e="pug/background/volunteer-work.pug",n=n+'<li class="mop-wrapper">',t=38,e="pug/background/volunteer-work.pug",n=n+((o=E)==null?"":o)+"</li>"}}}).call(this),n=n+"</ul>"),n=n+"</div></li>"}}}).call(this),n=n+"</ul></div></div></div>"),t=2,e="pug/background/publications.pug",f.isEmpty(S.publications)||(t=3,e="pug/background/publications.pug",n=n+'<div class="detail" id="publications">',t=4,e="pug/background/publications.pug",n=n+'<div class="icon">',t=5,e="pug/background/publications.pug",n=n+'<i class="fs-lg icon-newspaper"></i>',t=6,e="pug/background/publications.pug",n=n+'<span class="mobile-title">',t=6,e="pug/background/publications.pug",n=n+"Publications </span></div>",t=8,e="pug/background/publications.pug",n=n+'<div class="info">',t=9,e="pug/background/publications.pug",n=n+'<h4 class="title text-uppercase">',t=9,e="pug/background/publications.pug",n=n+"Publications & Posts</h4>",t=11,e="pug/background/publications.pug",n=n+'<div class="content">',t=12,e="pug/background/publications.pug",n=n+'<ul class="list-unstyled clear-margin">',t=13,e="pug/background/publications.pug",(function(){var F=S.publications;if(typeof F.length=="number")for(var w=0,C=F.length;w<C;w++){var b=F[w];t=14,e="pug/background/publications.pug",n=n+'<li class="card card-nested">',t=15,e="pug/background/publications.pug",n=n+'<div class="content">',t=16,e="pug/background/publications.pug",n=n+'<p class="clear-margin">',t=17,e="pug/background/publications.pug",n=n+"<strong>",t=18,e="pug/background/publications.pug",b.website?(t=19,e="pug/background/publications.pug",n=n+"<a"+(sn("href",b.website,!0,!1)+' target="_blank"')+">",t=19,e="pug/background/publications.pug",n=n+Y((o=b.name)==null?"":o)+"</a>",t=20,e="pug/background/publications.pug",n=n+"&nbsp;,&nbsp;"):(t=22,e="pug/background/publications.pug",n=n+Y((o=b.name+", ")==null?"":o)),n=n+"</strong>",t=23,e="pug/background/publications.pug",n=n+Y((o=b.publisher)==null?"":o)+"</p>",t=25,e="pug/background/publications.pug",n=n+'<p class="text-muted">',t=26,e="pug/background/publications.pug",n=n+"<small>",t=26,e="pug/background/publications.pug",n=n+Y((o="Published on: "+b.releaseDate)==null?"":o)+"</small></p>",t=28,e="pug/background/publications.pug",n=n+'<div class="mop-wrapper">',t=28,e="pug/background/publications.pug",n=n+((o=b.summary)==null?"":o)+"</div></div></li>"}else{var C=0;for(var w in F){C++;var b=F[w];t=14,e="pug/background/publications.pug",n=n+'<li class="card card-nested">',t=15,e="pug/background/publications.pug",n=n+'<div class="content">',t=16,e="pug/background/publications.pug",n=n+'<p class="clear-margin">',t=17,e="pug/background/publications.pug",n=n+"<strong>",t=18,e="pug/background/publications.pug",b.website?(t=19,e="pug/background/publications.pug",n=n+"<a"+(sn("href",b.website,!0,!1)+' target="_blank"')+">",t=19,e="pug/background/publications.pug",n=n+Y((o=b.name)==null?"":o)+"</a>",t=20,e="pug/background/publications.pug",n=n+"&nbsp;,&nbsp;"):(t=22,e="pug/background/publications.pug",n=n+Y((o=b.name+", ")==null?"":o)),n=n+"</strong>",t=23,e="pug/background/publications.pug",n=n+Y((o=b.publisher)==null?"":o)+"</p>",t=25,e="pug/background/publications.pug",n=n+'<p class="text-muted">',t=26,e="pug/background/publications.pug",n=n+"<small>",t=26,e="pug/background/publications.pug",n=n+Y((o="Published on: "+b.releaseDate)==null?"":o)+"</small></p>",t=28,e="pug/background/publications.pug",n=n+'<div class="mop-wrapper">',t=28,e="pug/background/publications.pug",n=n+((o=b.summary)==null?"":o)+"</div></div></li>"}}}).call(this),n=n+"</ul></div></div></div>"),t=1,e="pug/background/interests.pug",f.isEmpty(S.interests)||(t=2,e="pug/background/interests.pug",n=n+'<div class="detail" id="interests">',t=3,e="pug/background/interests.pug",n=n+'<div class="icon">',t=4,e="pug/background/interests.pug",n=n+'<i class="fs-lg icon-heart"></i>',t=5,e="pug/background/interests.pug",n=n+'<span class="mobile-title">',t=5,e="pug/background/interests.pug",n=n+"Interests</span></div>",t=7,e="pug/background/interests.pug",n=n+'<div class="info">',t=8,e="pug/background/interests.pug",n=n+'<h4 class="title text-uppercase">',t=8,e="pug/background/interests.pug",n=n+"Personal Interests</h4>",t=10,e="pug/background/interests.pug",n=n+'<div class="content">',t=11,e="pug/background/interests.pug",n=n+'<ul class="list-unstyled clear-margin">',t=12,e="pug/background/interests.pug",(function(){var F=S.interests;if(typeof F.length=="number")for(var w=0,C=F.length;w<C;w++){var b=F[w];t=13,e="pug/background/interests.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/interests.pug",n=n+"<p>",t=15,e="pug/background/interests.pug",n=n+"<strong>",t=15,e="pug/background/interests.pug",n=n+Y((o=b.name)==null?"":o)+"</strong></p>",t=17,e="pug/background/interests.pug",f.isEmpty(b.keywords)||(t=18,e="pug/background/interests.pug",n=n+'<div class="space-top labels">',t=19,e="pug/background/interests.pug",(function(){var T=b.keywords;if(typeof T.length=="number")for(var P=0,R=T.length;P<R;P++){var I=T[P];t=20,e="pug/background/interests.pug",n=n+'<span class="label label-keyword">',t=20,e="pug/background/interests.pug",n=n+Y((o=I)==null?"":o)+"</span>"}else{var R=0;for(var P in T){R++;var I=T[P];t=20,e="pug/background/interests.pug",n=n+'<span class="label label-keyword">',t=20,e="pug/background/interests.pug",n=n+Y((o=I)==null?"":o)+"</span>"}}}).call(this),n=n+"</div>"),n=n+"</li>"}else{var C=0;for(var w in F){C++;var b=F[w];t=13,e="pug/background/interests.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/interests.pug",n=n+"<p>",t=15,e="pug/background/interests.pug",n=n+"<strong>",t=15,e="pug/background/interests.pug",n=n+Y((o=b.name)==null?"":o)+"</strong></p>",t=17,e="pug/background/interests.pug",f.isEmpty(b.keywords)||(t=18,e="pug/background/interests.pug",n=n+'<div class="space-top labels">',t=19,e="pug/background/interests.pug",(function(){var I=b.keywords;if(typeof I.length=="number")for(var x=0,q=I.length;x<q;x++){var E=I[x];t=20,e="pug/background/interests.pug",n=n+'<span class="label label-keyword">',t=20,e="pug/background/interests.pug",n=n+Y((o=E)==null?"":o)+"</span>"}else{var q=0;for(var x in I){q++;var E=I[x];t=20,e="pug/background/interests.pug",n=n+'<span class="label label-keyword">',t=20,e="pug/background/interests.pug",n=n+Y((o=E)==null?"":o)+"</span>"}}}).call(this),n=n+"</div>"),n=n+"</li>"}}}).call(this),n=n+"</ul></div></div></div>"),t=1,e="pug/background/lang.pug",f.isEmpty(S.languages)||(t=2,e="pug/background/lang.pug",n=n+'<div class="detail" id="languages">',t=3,e="pug/background/lang.pug",n=n+'<div class="icon">',t=4,e="pug/background/lang.pug",n=n+'<i class="fas fa-language" style="font-size:1.25em;"></i>',t=5,e="pug/background/lang.pug",n=n+'<span class="mobile-title">',t=5,e="pug/background/lang.pug",n=n+"Languages</span></div>",t=7,e="pug/background/lang.pug",n=n+'<div class="info">',t=8,e="pug/background/lang.pug",n=n+'<h4 class="title text-uppercase">',t=8,e="pug/background/lang.pug",n=n+"Languages</h4>",t=10,e="pug/background/lang.pug",n=n+'<div class="content">',t=11,e="pug/background/lang.pug",n=n+'<ul class="list-unstyled clear-margin">',t=12,e="pug/background/lang.pug",(function(){var F=S.languages;if(typeof F.length=="number")for(var w=0,C=F.length;w<C;w++){var b=F[w];t=13,e="pug/background/lang.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/lang.pug",n=n+"<p>",t=15,e="pug/background/lang.pug",n=n+"<strong>",t=15,e="pug/background/lang.pug",n=n+Y((o=b.name)==null?"":o)+"</strong></p>",t=17,e="pug/background/lang.pug",f.isEmpty(b.keywords)||(t=18,e="pug/background/lang.pug",n=n+'<div class="space-top labels">',t=19,e="pug/background/lang.pug",(function(){var T=b.keywords;if(typeof T.length=="number")for(var P=0,R=T.length;P<R;P++){var I=T[P];t=20,e="pug/background/lang.pug",n=n+'<span class="label label-keyword">',t=20,e="pug/background/lang.pug",n=n+Y((o=I)==null?"":o)+"</span>"}else{var R=0;for(var P in T){R++;var I=T[P];t=20,e="pug/background/lang.pug",n=n+'<span class="label label-keyword">',t=20,e="pug/background/lang.pug",n=n+Y((o=I)==null?"":o)+"</span>"}}}).call(this),n=n+"</div>"),n=n+"</li>"}else{var C=0;for(var w in F){C++;var b=F[w];t=13,e="pug/background/lang.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/lang.pug",n=n+"<p>",t=15,e="pug/background/lang.pug",n=n+"<strong>",t=15,e="pug/background/lang.pug",n=n+Y((o=b.name)==null?"":o)+"</strong></p>",t=17,e="pug/background/lang.pug",f.isEmpty(b.keywords)||(t=18,e="pug/background/lang.pug",n=n+'<div class="space-top labels">',t=19,e="pug/background/lang.pug",(function(){var I=b.keywords;if(typeof I.length=="number")for(var x=0,q=I.length;x<q;x++){var E=I[x];t=20,e="pug/background/lang.pug",n=n+'<span class="label label-keyword">',t=20,e="pug/background/lang.pug",n=n+Y((o=E)==null?"":o)+"</span>"}else{var q=0;for(var x in I){q++;var E=I[x];t=20,e="pug/background/lang.pug",n=n+'<span class="label label-keyword">',t=20,e="pug/background/lang.pug",n=n+Y((o=E)==null?"":o)+"</span>"}}}).call(this),n=n+"</div>"),n=n+"</li>"}}}).call(this),n=n+"</ul></div></div></div>"),t=1,e="pug/background/references.pug",f.isEmpty(S.references)||(t=2,e="pug/background/references.pug",n=n+'<div class="detail" id="references">',t=3,e="pug/background/references.pug",n=n+'<div class="icon">',t=4,e="pug/background/references.pug",n=n+'<i class="fs-lg icon-thumbs-up"></i>',t=5,e="pug/background/references.pug",n=n+'<span class="mobile-title">',t=5,e="pug/background/references.pug",n=n+"References</span></div>",t=7,e="pug/background/references.pug",n=n+'<div class="info">',t=8,e="pug/background/references.pug",n=n+'<h4 class="title text-uppercase">',t=8,e="pug/background/references.pug",n=n+"References</h4>",t=10,e="pug/background/references.pug",n=n+'<div class="content">',t=11,e="pug/background/references.pug",n=n+'<ul class="list-unstyled clear-margin">',t=12,e="pug/background/references.pug",(function(){var F=S.references;if(typeof F.length=="number")for(var w=0,C=F.length;w<C;w++){var b=F[w];t=13,e="pug/background/references.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/references.pug",b.website?(t=15,e="pug/background/references.pug",n=n+"<a"+(sn("href",b.website,!0,!1)+' target="_blank"')+">",t=15,e="pug/background/references.pug",n=n+Y((o=b.name)==null?"":o)+"</a>"):(t=17,e="pug/background/references.pug",n=n+Y((o=b.name)==null?"":o)),t=19,e="pug/background/references.pug",n=n+'<blockquote class="quote">',t=20,e="pug/background/references.pug",n=n+'<div class="mop-wrapper">',t=20,e="pug/background/references.pug",n=n+((o=b.reference)==null?"":o)+"</div></blockquote></li>"}else{var C=0;for(var w in F){C++;var b=F[w];t=13,e="pug/background/references.pug",n=n+'<li class="card card-nested">',t=14,e="pug/background/references.pug",b.website?(t=15,e="pug/background/references.pug",n=n+"<a"+(sn("href",b.website,!0,!1)+' target="_blank"')+">",t=15,e="pug/background/references.pug",n=n+Y((o=b.name)==null?"":o)+"</a>"):(t=17,e="pug/background/references.pug",n=n+Y((o=b.name)==null?"":o)),t=19,e="pug/background/references.pug",n=n+'<blockquote class="quote">',t=20,e="pug/background/references.pug",n=n+'<div class="mop-wrapper">',t=20,e="pug/background/references.pug",n=n+((o=b.reference)==null?"":o)+"</div></blockquote></li>"}}}).call(this),n=n+"</ul></div></div></div>"),n=n+"</div></div></section></div></div>",t=1,e="pug/scripts.pug",n=n+'<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"><\/script>',t=2,e="pug/scripts.pug",n=n+'<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"><\/script>',t=4,e="pug/scripts.pug",n=n+"<script>",t=5,e="pug/scripts.pug",n=n+"$(function () {",t=6,e="pug/scripts.pug",n=n+`
`,t=6,e="pug/scripts.pug",n=n+"  var toggleFloatingMenu = function() {",t=7,e="pug/scripts.pug",n=n+`
`,t=7,e="pug/scripts.pug",n=n+"    $( '.js-floating-nav' ).toggleClass( 'is-visible' );",t=8,e="pug/scripts.pug",n=n+`
`,t=8,e="pug/scripts.pug",n=n+"    $( '.js-floating-nav-trigger' ).toggleClass( 'is-open' );",t=9,e="pug/scripts.pug",n=n+`
`,t=9,e="pug/scripts.pug",n=n+"  };",t=10,e="pug/scripts.pug",n=n+`
`,t=10,e="pug/scripts.pug",n=n+"",t=11,e="pug/scripts.pug",n=n+`
`,t=11,e="pug/scripts.pug",n=n+'  $( ".background-card" ).css( "min-height", window.screen.availHeight + "px" );',t=12,e="pug/scripts.pug",n=n+`
`,t=12,e="pug/scripts.pug",n=n+'  $( "[data-toggle=tooltip]" ).tooltip();',t=13,e="pug/scripts.pug",n=n+`
`,t=13,e="pug/scripts.pug",n=n+"  $( '.js-floating-nav-trigger' ).on( 'click', function(e) {",t=14,e="pug/scripts.pug",n=n+`
`,t=14,e="pug/scripts.pug",n=n+"    e.preventDefault();",t=15,e="pug/scripts.pug",n=n+`
`,t=15,e="pug/scripts.pug",n=n+"    toggleFloatingMenu();",t=16,e="pug/scripts.pug",n=n+`
`,t=16,e="pug/scripts.pug",n=n+"  });",t=17,e="pug/scripts.pug",n=n+`
`,t=17,e="pug/scripts.pug",n=n+"  $( '.js-floating-nav a' ).on( 'click', toggleFloatingMenu );",t=18,e="pug/scripts.pug",n=n+`
`,t=18,e="pug/scripts.pug",n=n+"",t=19,e="pug/scripts.pug",n=n+`
`,t=19,e="pug/scripts.pug",n=n+`  $("#remaining-profiles").on('show.bs.collapse', function() {`,t=20,e="pug/scripts.pug",n=n+`
`,t=20,e="pug/scripts.pug",n=n+"    $( '.js-profiles-collapse > i' )",t=21,e="pug/scripts.pug",n=n+`
`,t=21,e="pug/scripts.pug",n=n+"      .removeClass( 'icon-chevron-down' )",t=22,e="pug/scripts.pug",n=n+`
`,t=22,e="pug/scripts.pug",n=n+"      .addClass( 'icon-chevron-up' );",t=23,e="pug/scripts.pug",n=n+`
`,t=23,e="pug/scripts.pug",n=n+"  });",t=24,e="pug/scripts.pug",n=n+`
`,t=24,e="pug/scripts.pug",n=n+"",t=25,e="pug/scripts.pug",n=n+`
`,t=25,e="pug/scripts.pug",n=n+`  $("#remaining-profiles").on('hidden.bs.collapse', function() {`,t=26,e="pug/scripts.pug",n=n+`
`,t=26,e="pug/scripts.pug",n=n+"    $( '.js-profiles-collapse > i' )",t=27,e="pug/scripts.pug",n=n+`
`,t=27,e="pug/scripts.pug",n=n+"      .removeClass( 'icon-chevron-up' )",t=28,e="pug/scripts.pug",n=n+`
`,t=28,e="pug/scripts.pug",n=n+"      .addClass( 'icon-chevron-down' );",t=29,e="pug/scripts.pug",n=n+`
`,t=29,e="pug/scripts.pug",n=n+"  });",t=30,e="pug/scripts.pug",n=n+`
`,t=30,e="pug/scripts.pug",n=n+"});",t=31,e="pug/scripts.pug",n=n+`
`,t=31,e="pug/scripts.pug",n=n+"<\/script>",t=32,e="pug/scripts.pug",n=n+"<script>",t=33,e="pug/scripts.pug",n=n+"WebFontConfig = {",t=34,e="pug/scripts.pug",n=n+`
`,t=34,e="pug/scripts.pug",n=n+"  google: { families: [ 'Lato:300,400,700:latin' ] }",t=35,e="pug/scripts.pug",n=n+`
`,t=35,e="pug/scripts.pug",n=n+"};",t=36,e="pug/scripts.pug",n=n+`
`,t=36,e="pug/scripts.pug",n=n+"(function() {",t=37,e="pug/scripts.pug",n=n+`
`,t=37,e="pug/scripts.pug",n=n+"  var wf = document.createElement('script');",t=38,e="pug/scripts.pug",n=n+`
`,t=38,e="pug/scripts.pug",n=n+"  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +",t=39,e="pug/scripts.pug",n=n+`
`,t=39,e="pug/scripts.pug",n=n+"    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';",t=40,e="pug/scripts.pug",n=n+`
`,t=40,e="pug/scripts.pug",n=n+"  wf.type = 'text/javascript';",t=41,e="pug/scripts.pug",n=n+`
`,t=41,e="pug/scripts.pug",n=n+"  wf.async = 'true';",t=42,e="pug/scripts.pug",n=n+`
`,t=42,e="pug/scripts.pug",n=n+"  var s = document.getElementsByTagName('script')[0];",t=43,e="pug/scripts.pug",n=n+`
`,t=43,e="pug/scripts.pug",n=n+"  s.parentNode.insertBefore(wf, s);",t=44,e="pug/scripts.pug",n=n+`
`,t=44,e="pug/scripts.pug",n=n+"})();<\/script></body></html>"}).call(this,"_"in p?p._:typeof _<"u"?_:void 0,"css"in p?p.css:typeof css<"u"?css:void 0,"floating_nav_items"in p?p.floating_nav_items:typeof floating_nav_items<"u"?floating_nav_items:void 0,"resume"in p?p.resume:typeof resume<"u"?resume:void 0)}catch(f){Q2(f,e,t,h[e])}return n}K2.exports={renderResume:k3}});var r1=W((S8,t1)=>{M();var e1=Lr();(function(a){var n={nodiff:"",year:"year",years:"years",month:"month",months:"months",day:"day",days:"days",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds",delimiter:" "};a.fn.preciseDiff=function(u){return a.preciseDiff(this,u)},a.preciseDiff=function(u,o){var e=a(u),t=a(o);if(e=e.startOf("day"),t=t.add(1,"day").startOf("day"),e.isSame(t))return n.nodiff;if(e.isAfter(t)){var h=e;e=t,t=h}var p=t.year()-e.year(),f=t.month()-e.month(),m=t.date()-e.date(),z=t.hour()-e.hour(),S=t.minute()-e.minute(),F=t.second()-e.second();if(F<0&&(F=60+F,S--),S<0&&(S=60+S,z--),z<0&&(z=24+z,m--),m<0){var w=a(t.year()+"-"+(t.month()+1),"YYYY-MM").subtract(1,"M").daysInMonth();w<e.date()?m=w+m+(e.date()-w):m=w+m,f--}f<0&&(f=12+f,p--);function C(T,P){return T+" "+n[P+(T===1?"":"s")]}if(!p&&!f)return m>=1?C(m,"day"):"Joined Today";var b=[];return p&&b.push(C(p,"year")),f&&b.push(C(f,"month")),b.join(n.delimiter)}})(e1);t1.exports=e1});var o1=W((I8,i1)=>{M();var x3=(uo(),la(ao)),ie=$t(),Hn=Va(),xt=Lr(),F3=Z2()({breaks:!0}).use(J2()),{renderResume:y3}=n1();r1();Hn.setConfig({date_format:"MMM, YYYY"});function w3(a){let u=["address","city","region","countryCode","postalCode"].map(e=>a.basics.location[e]),o=x3.readFileSync("//assets/css/theme.css","utf-8");return a.basics.picture=Hn.getUrlForPicture(a),a.basics.summary=re(a.basics.summary),a.basics.computed_location=ie.compact(u).join(", "),a.languages&&(a.basics.languages=ie.pluck(a.languages,"language").join(", ")),ie(a.basics.profiles).forEach(e=>{let t=e.network.toLowerCase();e.url=Hn.getUrlForProfile(a,t),e.label=t}),a.basics.top_five_profiles=a.basics.profiles.slice(0,5),a.basics.remaining_profiles=a.basics.profiles.slice(5),a.projects.concat(a.teaching).forEach(e=>{let t=xt(e.startDate,"YYYY-MM-DD"),h=xt(e.endDate,"YYYY-MM-DD");t.isValid()&&h.isValid()&&(e.duration=xt.preciseDiff(t,h)),t.isValid()&&(e.startDate=Hn.getFormattedDate(t)),h.isValid()&&(e.endDate=Hn.getFormattedDate(h)),e.summary=re(e.summary),e.highlights=ie(e.highlights).map(f=>re(f))}),a.work.forEach(e=>{let t=xt(e.startDate,"YYYY-MM-DD"),h=xt(e.endDate,"YYYY-MM-DD");t.isValid()&&h.isValid()&&(e.duration=xt.preciseDiff(t,h)),t.isValid()&&(e.startDate=Hn.getFormattedDate(t)),h.isValid()&&(e.endDate=Hn.getFormattedDate(h)),e.summary=re(e.summary),e.highlights=ie(e.highlights).map(f=>re(f))}),a.skills.forEach(e=>{let t=["Beginner","Intermediate","Advanced","Master"];e.level&&(e.skill_class=e.level.toLowerCase(),e.level=E3(e.level.trim()),e.display_progress_bar=ie.contains(t,e.level))}),a.education.forEach(e=>{["startDate","endDate"].forEach(t=>{let h=e[t];h&&(e[t]=Hn.getFormattedDate(h))})}),a.awards.forEach(e=>{let t=e.date;e.summary=re(e.summary),t&&(e.date=Hn.getFormattedDate(t,"MMM DD, YYYY"))}),a.volunteer.forEach(e=>{e.summary=re(e.summary),["startDate","endDate"].forEach(t=>{let h=e[t];h&&(e[t]=Hn.getFormattedDate(h))}),e.highlights=ie(e.highlights).map(re)}),a.publications.forEach(e=>{let t=e.releaseDate;e.summary=re(e.summary),t&&(e.releaseDate=Hn.getFormattedDate(t,"MMM DD, YYYY"))}),a.references.forEach(e=>{e.reference=re(e.reference)}),y3({resume:a,floating_nav_items:_3(a),css:o,_:ie})}function C3(a,n){return n.split(".").reduce((o,e)=>(o||{})[e],a)}function E3(a){return a&&(a=a.toString(),a[0].toUpperCase()+a.slice(1).toLowerCase())}function re(a){if(a!=null)return F3.render(a)}function _3(a){return ie([{label:"About",target:"about",icon:"board",requires:"basics.summary"},{label:"Work Experience",target:"work-experience",icon:"office",requires:"work"},{label:"Skills",target:"skills",icon:"tools",requires:"skills"},{label:"Education",target:"education",icon:"graduation-cap",requires:"education"},{label:"Awards",target:"awards",icon:"trophy",requires:"awards"},{label:"Volunteer Work",target:"volunteer-work",icon:"child",requires:"volunteer"},{label:"Publications",target:"publications",icon:"newspaper",requires:"publications"},{label:"Interests",target:"interests",icon:"heart",requires:"interests"},{label:"References",target:"references",icon:"thumbs-up",requires:"references"}]).filter(u=>{let o=C3(a,u.requires);return!ie.isEmpty(o)})}i1.exports={render:w3}});M();var Xe=Fl(o1(),1),a1=Xe.default??Xe,R8=a1.render??Xe.render,O8=a1.pdfRenderOptions??Xe.pdfRenderOptions;export{O8 as pdfRenderOptions,R8 as render};
/*! Bundled license information:

moment/moment.js:
  (*! moment.js *)
  (*! version : 2.30.1 *)
  (*! authors : Tim Wood, Iskren Chernev, Moment.js contributors *)
  (*! license : MIT *)
  (*! momentjs.com *)
*/
