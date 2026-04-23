var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var B=Object.create;var f=Object.defineProperty;var J=Object.getOwnPropertyDescriptor;var H=Object.getOwnPropertyNames;var q=Object.getPrototypeOf,Q=Object.prototype.hasOwnProperty;var w=(e,n)=>()=>(e&&(n=e(e=0)),n);var U=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),K=(e,n)=>{for(var i in n)f(e,i,{get:n[i],enumerable:!0})},S=(e,n,i,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let a of H(n))!Q.call(e,a)&&a!==i&&f(e,a,{get:()=>n[a],enumerable:!(r=J(n,a))||r.enumerable});return e};var V=(e,n,i)=>(i=e!=null?B(q(e)):{},S(n||!e||!e.__esModule?f(i,"default",{value:e,enumerable:!0}):i,e)),X=e=>S(f({},"__esModule",{value:!0}),e);var p=w(()=>{});var R={};K(R,{createReadStream:()=>M,createWriteStream:()=>O,default:()=>Y,existsSync:()=>A,lstatSync:()=>z,mkdirSync:()=>I,readFileSync:()=>j,readdirSync:()=>_,rmdirSync:()=>N,statSync:()=>x,unlinkSync:()=>C,writeFileSync:()=>E});function y(e){return String(e).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function D(e){var n=y(e);if(h[n]!==void 0)return h[n];for(var i=Object.keys(h),r=0;r<i.length;r++)if(n.endsWith("/"+i[r])||n===i[r])return h[i[r]]}function g(e){var n=y(e);if((n===""||n===".")&&d["."]!==void 0)return d["."];if(d[n]!==void 0)return d[n];for(var i=Object.keys(d),r=0;r<i.length;r++)if(n.endsWith("/"+i[r])||n===i[r])return d[i[r]]}var h,d,j,_,A,E,I,x,z,C,N,M,O,Y,G=w(()=>{"use strict";p();h={"index.css":`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  color: #000;
  min-width: 320px;
  font-weight: 400;
  line-height: 0.725;
  font-family: "Bebas Neue", Arial, sans-serif;
}
a {
  color: #000;
  transition: text-decoration-color 0.3s ease 0s;
  will-change: text-decoration-color;
}
a:hover {
  text-decoration-color: transparent;
}
.layout {
  padding: 12px;
  margin: 0 auto;
  max-width: 768px;
}

.header {
  display: flex;
  margin-bottom: 30px;
}
.header h1 {
  margin: 0;
  font-size: 83px;
  font-weight: 400;
  line-height: 66px;
  padding-right: 12px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}
.header img {
  width: 120px;
  height: 120px;
  display: block;
  object-fit: cover;
}
@media (max-width: 768px) {
  .header h1 {
    font-size: 57px;
    transform: none;
    letter-spacing: 0;
    line-height: 42px;
  }
  .header img {
    width: 80px;
    height: 80px;
  }
}

.article {
  padding: 30px 0;
  break-inside: avoid;
}
.article time {
  white-space: nowrap;
}
.article h2 {
  font-size: 32px;
  margin: 0 0 12px;
  text-transform: uppercase;
}
.article p {
  font-size: 16px;
  margin: 4px 0 0;
  line-height: 21px;
  font-family: Inter, sans-serif;
}
.article ul {
  margin: 20px 0 0;
}
.article li {
  font-size: 16px;
  margin: 0 0 4px;
  line-height: 1.2;
  font-family: Inter, sans-serif;
}
.highlighted {
  background: #f6f6f6;
  margin-left: -12px;
  margin-right: -12px;
  padding: 20px 12px;
}
@media (max-width: 768px) {
  .article h2 {
    font-size: 38px;
  }
  .article p {
    font-size: 20px;
    line-height: 24px;
  }
  .article .m-smaller {
    font-size: 16px;
    line-height: 1.2;
  }
}

.details {
  padding-left: 20px;
}
@media (max-width: 768px) {
  .details li {
    margin-bottom: 12px;
  }
}

.double {
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
}
.double li {
  flex: 0 0 50%;
}
@media (max-width: 768px) {
  .double li {
    flex: 0 0 100%;
  }
}

.list {
  padding: 0;
  list-style: none;
  margin: 0 !important;
}
.list h3 {
  font-size: 24px;
  margin: 0 0 4px;
  font-weight: 400;
  font-family: "Bebas Neue", Arial, sans-serif;
}
.list > li {
  margin: 0;
  padding: 18px 0;
  break-inside: avoid;
}
.list > li:last-child {
  margin-bottom: 0;
}
.list ul {
  max-width: 50%;
  list-style: disc;
  margin-top: 12px;
  padding-left: 20px;
}
.list ul li {
  font-size: 14px;
  margin-bottom: 8px;
}
@media (max-width: 768px) {
  .list ul {
    max-width: 100%;
  }
  .list h3 {
    font-size: 28px;
    line-height: 26px;
    margin-bottom: 8px;
  }
}

.footer {
  display: flex;
  margin-top: 60px;
  justify-content: space-between;
}
.footer a {
  font-size: 14px;
  font-family: Inter, sans-serif;
}
`,"package.json":`{
  "name": "jsonresume-theme-waterfall",
  "version": "1.0.2",
  "main": "index.js",
  "description": "Minimal jsonresume theme",
  "author": "Aleksandr Yakunichev <npmjs.paqke@aleeas.com>",
  "keywords": [
    "jsonresume",
    "jsonresume-theme",
    "json",
    "theme",
    "minimal",
    "resume",
    "cv",
    "curriculum vitae",
    "portfolio"
  ],
  "homepage": "https://github.com/yacodes/jsonresume-theme-waterfall",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/yacodes/jsonresume-theme-waterfall.git"
  },
  "license": "MIT",
  "scripts": {
    "build": "swc index.tsx --quiet --config module.type=commonjs --out-file index.js",
    "dev": "npm run build && resume serve --theme . --silent",
    "lint": "eslint index.tsx",
    "start": "watchexec --restart --watch . --ignore index.js --exts tsx,json,css yarn dev",
    "prepublishOnly": "yarn build"
  },
  "dependencies": {
    "@swc/cli": "^0.1.57",
    "@swc/core": "^1.3.6",
    "resume-cli": "^3.0.7"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.39.0",
    "@typescript-eslint/parser": "^5.39.0",
    "eslint": "^8.25.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "prettier": "^2.7.1",
    "typescript": "^4.8.4"
  },
  "eslintConfig": {
    "extends": [
      "prettier",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "prettier",
      "@typescript-eslint"
    ],
    "rules": {
      "prettier/prettier": [
        "error"
      ]
    },
    "root": true,
    "env": {
      "node": true
    }
  }
}
`,"public/index.html":`<!doctype html><html><head><title>Aleksandr Iakunichev</title><meta charset="utf-8"></meta><meta http-equiv="x-ua-compatible" content="ie=edge"></meta><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1"></meta><style>@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  color: #000;
  min-width: 320px;
  font-weight: 400;
  line-height: 0.725;
  font-family: "Bebas Neue", Arial, sans-serif;
}
a {
  color: #000;
  transition: text-decoration-color 0.3s ease 0s;
  will-change: text-decoration-color;
}
a:hover {
  text-decoration-color: transparent;
}
.layout {
  padding: 12px;
  margin: 0 auto;
  max-width: 768px;
}

.header {
  display: flex;
  margin-bottom: 30px;
}
.header h1 {
  margin: 0;
  font-size: 83px;
  font-weight: 400;
  line-height: 66px;
  padding-right: 12px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}
.header img {
  width: 120px;
  height: 120px;
  display: block;
  object-fit: cover;
}
@media (max-width: 768px) {
  .header h1 {
    font-size: 57px;
    transform: none;
    letter-spacing: 0;
    line-height: 42px;
  }
  .header img {
    width: 80px;
    height: 80px;
  }
}

.article {
  padding: 30px 0;
  break-inside: avoid;
}
.article time {
  white-space: nowrap;
}
.article h2 {
  font-size: 32px;
  margin: 0 0 12px;
  text-transform: uppercase;
}
.article p {
  font-size: 16px;
  margin: 4px 0 0;
  line-height: 21px;
  font-family: Inter, sans-serif;
}
.article ul {
  margin: 20px 0 0;
}
.article li {
  font-size: 16px;
  margin: 0 0 4px;
  line-height: 1.2;
  font-family: Inter, sans-serif;
}
.highlighted {
  background: #f6f6f6;
  margin-left: -12px;
  margin-right: -12px;
  padding: 20px 12px;
}
@media (max-width: 768px) {
  .article h2 {
    font-size: 38px;
  }
  .article p {
    font-size: 20px;
    line-height: 24px;
  }
  .article .m-smaller {
    font-size: 16px;
    line-height: 1.2;
  }
}

.details {
  padding-left: 20px;
}
@media (max-width: 768px) {
  .details li {
    margin-bottom: 12px;
  }
}

.double {
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
}
.double li {
  flex: 0 0 50%;
}
@media (max-width: 768px) {
  .double li {
    flex: 0 0 100%;
  }
}

.list {
  padding: 0;
  list-style: none;
  margin: 0 !important;
}
.list h3 {
  font-size: 24px;
  margin: 0 0 4px;
  font-weight: 400;
  font-family: "Bebas Neue", Arial, sans-serif;
}
.list > li {
  margin: 0;
  padding: 18px 0;
  break-inside: avoid;
}
.list > li:last-child {
  margin-bottom: 0;
}
.list ul {
  max-width: 50%;
  list-style: disc;
  margin-top: 12px;
  padding-left: 20px;
}
.list ul li {
  font-size: 14px;
  margin-bottom: 8px;
}
@media (max-width: 768px) {
  .list ul {
    max-width: 100%;
  }
  .list h3 {
    font-size: 28px;
    line-height: 26px;
    margin-bottom: 8px;
  }
}

.footer {
  display: flex;
  margin-top: 60px;
  justify-content: space-between;
}
.footer a {
  font-size: 14px;
  font-family: Inter, sans-serif;
}
</style></head><body><main class="layout"><header class="header"><h1>Aleksandr Iakunichev</h1><img src="https://ya.codes/img/cv.jpg" alt="Aleksandr Iakunichev" title="Aleksandr Iakunichev"></img></header><article class="article"><h2>Frontend Engineer</h2><p>Software Engineer with 10+ years of experience building responsive web applications. Got expertise in modern Frontend technologies such as TypeScript, React, Redux, Jest, and others. Capable of developing simple backend services or CLIs with the use of Node.js. Experienced in building CI/CD pipelines for Frontend applications' testing and deployment using GitLab CI/CD. Currently works as a Senior Engineer at TinyMCE.</p></article><article class="article"><h2>Details</h2><ul class="details"><li>Location: Zagreb, Croatia</li><li><span>Email: </span><a href="mailto:hi@ya.codes" rel="noopener noreferrer">hi@ya.codes</a></li><li><span>Website: </span><a href="https://ya.codes" target="_blank" rel="noopener noreferrer">ya.codes</a></li><li>Github: <a href="https://github.com/yacodes" target="_blank" rel="noopener noreferrer">@yacodes</a></li><li>Linkedin: <a href="https://www.linkedin.com/in/ya-codes/" target="_blank" rel="noopener noreferrer">@ya-codes</a></li></ul></article><article class="article"><h2>Skills</h2><ul class="list double"><li><h3>Frontend Development</h3><p class="m-smaller">JavaScript, TypeScript, JSX, React, Redux, HTML, CSS, JSON, Webpack</p></li><li><h3>Backend Development</h3><p class="m-smaller">Node.js, Express.js, NPM, SQLite, MongoDB, Next.js, Gatsby, Netlify, Nginx, Systemd, cron</p></li><li><h3>DevOps & CI/CD</h3><p class="m-smaller">Jenkins, GitLab, Github, Git, Bash</p></li><li><h3>Testing</h3><p class="m-smaller">Jest, Bedrock, TDD, Istanbul, WebDriver, CodeceptJS, Enzyme</p></li></ul></article><article class="article highlighted"><h2>Employment History</h2><ul class="list"><li><h3><span><span>Senior Software Engineer at </span><a href="https://tiny.cloud/" target="_blank" rel="noopener noreferrer">Tiny</a></span><time>, Jul 2021 \u2014 Now</time></h3><p>Supported and developed new features for smart content design platform for distributed teams called Setka Editor. Developed new plugins and reviewed coworkers' code at TinyMCE trusted open source rich text editor.</p><ul><li>Rewrote major part of Setka Editor, reducing the amount of client-side errors by 50%</li><li>Supported Setka Editor by fixing reported bugs, improving clients' user experience</li><li>Developed "Quick Add" feature based on clients' requests, improving user satisfaction rate</li><li>Developed "Hotspot" feature, improving clients' satisfaction rate</li></ul></li><li><h3><span><span>Techincal Consultant at </span><a href="https://eshgruppa.com/" target="_blank" rel="noopener noreferrer">ESH gruppa</a></span><time>, May 2020 \u2014 Now</time></h3><p>Gave techincal consultation and developed fullstack applications.</p><ul><li>Developed eshgruppa.com website with plain HTML, Node.js and Netlify CMS</li><li>Developed eshprint.com website with Gatsby and Netlify CMS</li><li>Developed vyrypaev.com with Golang and Netlify CMS</li></ul></li><li><h3><span><span>Senior Software Engineer at </span><a href="https://setka.io/" target="_blank" rel="noopener noreferrer">Setka</a></span><time>, Sep 2016 \u2014 Jul 2021</time></h3><p>Supported and developed new features for Setka Workflow and Setka Editor projects, working in small agile teams.</p><ul><li>Setka Editor earned 15 badges in the G2 Grid Report as an exceptional no code design tool</li><li>Organized code-review system at Setka Editor</li><li>Configured deployment pipeline for Setka Editor, based on Gitlab CI/CD</li><li>Developed a custom user-based plugin system within Setka Editor</li><li>Developed an Unsplash and Giphy integrations with Setka Editor</li><li>Provided technical support for Setka Editor and Setka Workflow clients</li><li>Rewrote and redesigned Setka Workflow UI</li></ul></li><li><h3><span><span>Frontend Engineer at </span><a href="https://charmerstudio.com/en/" target="_blank" rel="noopener noreferrer">Charmer</a></span><time>, May 2015 \u2014 Sep 2016</time></h3><p>Architectured, developed, and supported several media websites with Ruby, Node.js and React.</p><ul><li>Supported Garage Museum website</li><li>Architectured, developed and supported Gorky Park website</li><li>Developed and supported Novaya Gazeta website</li><li>Developed and supported AIDS.Center website</li></ul></li><li><h3><span><span>Frontend Developer at </span><a href="https://www.linkedin.com/company/look-at-me/" target="_blank" rel="noopener noreferrer">Look At Media</a></span><time>, Dec 2014 \u2014 Apr 2015</time></h3><p>Developed interactive advertisment projects with JavaScript and Ruby.</p><ul><li>Developed award-winning Skype: Bedtime calls advertisment application</li></ul></li><li><h3><span><span>Frontend Developer at </span><a href="https://htdt.github.io/hotdot.pro/" target="_blank" rel="noopener noreferrer">Hot Dot Production</a></span><time>, May 2014 \u2014 Dec 2014</time></h3><p>Developed websites and interactive applications for variety of clients with Django, jQuery and SASS technologies.</p><ul><li>Developed responsive website for Gianfranco restaurant with jQuery & SASS</li><li>Developed Internet Security promo with vanilla JavaScript, CSS, SVG animations</li><li>Developed responsive website with complex animations</li></ul></li><li><h3><span><span>Frontend Developer at </span><span>Datainlife</span></span><time>, Aug 2013 \u2014 May 2014</time></h3><p>Developed websites for a variety of clients, using html, sass & jquery.</p></li></ul></article><article class="article"><h2>References</h2><ul class="list"><li><h3>Valeriy Kozhanov, Director, ESH gruppa</h3><p>We have developed several web projects for our design studio with Alexander. I have to say he is a skilled developer and a reliable professional. He works fast and with attention to detail.</p></li></ul></article><article class="article"><h2>Education</h2><ul class="list"><li><h3><span><span>Bachelor of Engineering at </span><a href="https://www.mpei.ru/lang/en/Pages/default.aspx" target="_blank" rel="noopener noreferrer">MPEI</a></span><time>, Sep 2012 \u2014 Jul 2015</time></h3><p>Computer and Information Systems Security/Information Assurance</p></li><li><h3><span><span>Bachelor of Engineering at </span><span>MGKIT</span></span><time>, Sep 2008 \u2014 Jul 2012</time></h3><p>Computer and Information Systems Security/Information Assurance</p></li></ul></article><article class="article"><h2>Languages</h2><ul class="list double"><li><h3>English</h3><p class="m-smaller">Full professional proficiency</p></li><li><h3>Croatian</h3><p class="m-smaller">Limited working proficiency</p></li><li><h3>German</h3><p class="m-smaller">Limited working proficiency</p></li><li><h3>Russian</h3><p class="m-smaller">Native or bilingual proficiency</p></li></ul></article><footer class="footer"><a href="mailto:hi@ya.codes" rel="noopener noreferrer">hi@ya.codes</a><a href="https://github.com/yacodes" target="_blank" rel="noopener noreferrer">github</a><a href="https://ya.codes" target="_blank" rel="noopener noreferrer">ya.codes</a></footer></main></body></html>`},d={public:["index.html"],".":["README.md","index.css","index.js","index.tsx","package.json","public"]};j=function(e,n){var i=D(e);return i!==void 0?i:""},_=function(e,n){var i=g(e);return i===void 0&&(i=[]),n&&n.withFileTypes?i.map(function(r){var a=y(e)+"/"+r,l=g(a)!==void 0;return{name:r,isFile:function(){return!l},isDirectory:function(){return l}}}):i},A=function(e){return D(e)!==void 0||g(e)!==void 0},E=function(){},I=function(){},x=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},z=x,C=function(){},N=function(){},M=function(){return{pipe:function(e){return e},on:function(){return this}}},O=function(){return{write:function(){},end:function(){},on:function(){return this}}},Y={readFileSync:j,readdirSync:_,existsSync:A,writeFileSync:E,mkdirSync:I,statSync:x,lstatSync:z,unlinkSync:C,rmdirSync:N,createReadStream:M,createWriteStream:O}});var F=U(v=>{"use strict";p();Object.defineProperty(v,"__esModule",{value:!0});Object.defineProperty(v,"render",{enumerable:!0,get:function(){return ye}});var Z=ne((G(),X(R)));function b(e,n){(n==null||n>e.length)&&(n=e.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=e[i];return r}function $(e){if(Array.isArray(e))return e}function ee(e){if(Array.isArray(e))return b(e)}function s(){var e=Object.assign||function(n){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n};return e.apply(this,arguments)}function T(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,i=new WeakMap;return(T=function(r){return r?i:n})(e)}function ne(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var i=T(n);if(i&&i.has(e))return i.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}return r.default=e,i&&i.set(e,r),r}function te(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ie(e,n){var i=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var r=[],a=!0,l=!1,o,u;try{for(i=i.call(e);!(a=(o=i.next()).done)&&(r.push(o.value),!(n&&r.length===n));a=!0);}catch(m){var l=!0,u=m}finally{try{!a&&i.return!=null&&i.return()}finally{if(l)throw u}}return r}}function re(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ae(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function le(e,n){return $(e)||ie(e,n)||W(e,n)||re()}function oe(e){return ee(e)||te(e)||W(e)||ae()}function W(e,n){if(e){if(typeof e=="string")return b(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return b(e,n)}}var t=function(e,n){for(var i=arguments.length,r=new Array(i>2?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];return typeof e=="function"?e.apply(void 0,[n].concat(oe(r))):"<".concat(e).concat(Object.entries(n||{}).reduce(function(l,o){var u=le(o,2),m=u[0],L=u[1];return"".concat(l," ").concat(m,'="').concat(L,'"')},""),">").concat(r.join(""),"</").concat(e,">")},se=function(e){return t("header",{class:"header"},t("h1",null,e.basics.name),t("img",{src:e.basics.image,alt:e.basics.name,title:e.basics.name}))},pe=function(e){return t("article",{class:"article"},t("h2",null,e.basics.label),t("p",null,e.basics.summary))},ce=function(e){return t("article",{class:"article"},t("h2",null,"Details"),t("ul",{class:"details"},t("li",null,"Location: ",e.basics.location.city,", ",e.basics.location.region),t("li",null,t("span",null,"Email: "),t("a",{href:"mailto:".concat(e.basics.email),rel:"noopener noreferrer"},e.basics.email)),t("li",null,t("span",null,"Website: "),t("a",{href:e.basics.url,target:"_blank",rel:"noopener noreferrer"},e.basics.url.replace("https://",""))),e.basics.profiles.map(function(n){return t("li",null,n.network,":"," ",t("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},n.username))}).join("")))},de=function(e){return t("article",{class:"article highlighted"},t("h2",null,"Employment History"),t("ul",{class:"list"},e.work.map(function(n){return t("li",null,t("h3",null,t("span",null,t("span",null,n.position," at "),n.url?t("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},n.name):t("span",null,n.name)),t("time",null,", ",n.startDate," \u2014 ",n.endDate?n.endDate:"Now")),t("p",null,n.summary),n.highlights.length>0?t("ul",null,n.highlights.map(function(i){return t("li",null,i)}).join("")):null)}).join("")))},ue=function(e){return t("article",{class:"article"},t("h2",null,"Education"),t("ul",{class:"list"},e.education.map(function(n){return t("li",null,t("h3",null,t("span",null,t("span",null,n.studyType," at "),n.url?t("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},n.institution):t("span",null,n.institution)),t("time",null,", ",n.startDate," \u2014 ",n.endDate?n.endDate:"Now")),t("p",null,n.area))}).join("")))},fe=function(e){return t("article",{class:"article"},t("h2",null,"Skills"),t("ul",{class:"list double"},e.skills.map(function(n){return t("li",null,t("h3",null,n.name),t("p",{class:"m-smaller"},n.keywords.join(", ")))}).join("")))},he=function(e){return t("article",{class:"article"},t("h2",null,"Languages"),t("ul",{class:"list double"},e.languages.map(function(n){return t("li",null,t("h3",null,n.language),t("p",{class:"m-smaller"},n.fluency))}).join("")))},me=function(e){var n;return!((n=e.references)===null||n===void 0)&&n.length?t("article",{class:"article"},t("h2",null,"References"),t("ul",{class:"list"},e.references.map(function(i){return t("li",null,t("h3",null,i.name),t("p",null,i.reference))}).join(""))):null},ge=function(e){var n=e.basics.profiles.find(function(i){return i.network==="Github"});return t("footer",{class:"footer"},t("a",{href:"mailto:".concat(e.basics.email),rel:"noopener noreferrer"},e.basics.email),n?t("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},"github"):null,t("a",{href:e.basics.url,target:"_blank",rel:"noopener noreferrer"},e.basics.url.replace("https://","")))},ye=function(e){return"<!doctype html>"+t("html",null,t("head",null,t("title",null,e.basics.name),t("meta",{charset:"utf-8"}),t("meta",{"http-equiv":"x-ua-compatible",content:"ie=edge"}),t("meta",{name:"viewport",content:"width=device-width,initial-scale=1,minimum-scale=1"}),t("style",null,Z.readFileSync("./index.css","utf-8"))),t("body",null,t("main",{class:"layout"},t(se,s({},e)),t(pe,s({},e)),t(ce,s({},e)),t(fe,s({},e)),t(de,s({},e)),t(me,s({},e)),t(ue,s({},e)),t(he,s({},e)),t(ge,s({},e)))))}});p();var c=V(F(),1),P=c.default??c,De=P.render??c.render,je=P.pdfRenderOptions??c.pdfRenderOptions;export{je as pdfRenderOptions,De as render};
