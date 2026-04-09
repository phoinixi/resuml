var pi=Object.create;var kt=Object.defineProperty;var si=Object.getOwnPropertyDescriptor;var ci=Object.getOwnPropertyNames;var bi=Object.getPrototypeOf,hi=Object.prototype.hasOwnProperty;var Pt=(p,m)=>()=>(p&&(m=p(p=0)),m);var Gn=(p,m)=>()=>(m||p((m={exports:{}}).exports,m),m.exports),Ie=(p,m)=>{for(var A in m)kt(p,A,{get:m[A],enumerable:!0})},Ge=(p,m,A,G)=>{if(m&&typeof m=="object"||typeof m=="function")for(let I of ci(m))!hi.call(p,I)&&I!==A&&kt(p,I,{get:()=>m[I],enumerable:!(G=si(m,I))||G.enumerable});return p};var gi=(p,m,A)=>(A=p!=null?pi(bi(p)):{},Ge(m||!p||!p.__esModule?kt(A,"default",{value:p,enumerable:!0}):A,p)),Ne=p=>Ge(kt({},"__esModule",{value:!0}),p);var T=Pt(()=>{});var Fe={};Ie(Fe,{createReadStream:()=>Be,createWriteStream:()=>We,default:()=>fi,existsSync:()=>Ee,lstatSync:()=>Se,mkdirSync:()=>Ye,readFileSync:()=>Ze,readdirSync:()=>De,rmdirSync:()=>Ce,statSync:()=>Kt,unlinkSync:()=>Te,writeFileSync:()=>Ue});function _t(p){return String(p).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Re(p){var m=_t(p);if(zt[m]!==void 0)return zt[m];for(var A=Object.keys(zt),G=0;G<A.length;G++)if(m.endsWith("/"+A[G])||m===A[G])return zt[A[G]]}function Xt(p){var m=_t(p);if(qt[m]!==void 0)return qt[m];for(var A=Object.keys(qt),G=0;G<A.length;G++)if(m.endsWith("/"+A[G])||m===A[G])return qt[A[G]]}var zt,qt,Ze,De,Ee,Ue,Ye,Kt,Se,Te,Ce,Be,We,fi,Ve=Pt(()=>{"use strict";T();zt={"css/bootstrap.css":`
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
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
  background: transparent;
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
  margin: .67em 0;
  font-size: 2em;
}
mark {
  color: #000;
  background: #ff0;
}
small {
  font-size: 80%;
}
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sup {
  top: -.5em;
}
sub {
  bottom: -.25em;
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
  height: 0;
  -moz-box-sizing: content-box;
       box-sizing: content-box;
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
  margin: 0;
  font: inherit;
  color: inherit;
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
  padding: 0;
  border: 0;
}
input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
  -webkit-appearance: textfield;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset {
  padding: .35em .625em .75em;
  margin: 0 2px;
  border: 1px solid #c0c0c0;
}
legend {
  padding: 0;
  border: 0;
}
textarea {
  overflow: auto;
}
optgroup {
  font-weight: bold;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
td,
th {
  padding: 0;
}
@media print {
  * {
    color: #000 !important;
    text-shadow: none !important;
    box-shadow: none !important;
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
  a[href^="javascript:"]:after,
  a[href^="#"]:after {
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
  .table td,
  .table th {
    background-color: #fff !important;
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
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
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
  font-size: 62.5%;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background-color: #fff;
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
  color: #428bca;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #2a6496;
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
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.img-circle {
  border-radius: 50%;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
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
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
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
  color: #999;
}
h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 20px;
  margin-bottom: 10px;
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
  margin-top: 10px;
  margin-bottom: 10px;
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
  font-size: 36px;
}
h2,
.h2 {
  font-size: 30px;
}
h3,
.h3 {
  font-size: 24px;
}
h4,
.h4 {
  font-size: 18px;
}
h5,
.h5 {
  font-size: 14px;
}
h6,
.h6 {
  font-size: 12px;
}
p {
  margin: 0 0 10px;
}
.lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 200;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .lead {
    font-size: 21px;
  }
}
small,
.small {
  font-size: 85%;
}
cite {
  font-style: normal;
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
.text-muted {
  color: #999;
}
.text-primary {
  color: #428bca;
}
a.text-primary:hover {
  color: #3071a9;
}
.text-success {
  color: #3c763d;
}
a.text-success:hover {
  color: #2b542c;
}
.text-info {
  color: #31708f;
}
a.text-info:hover {
  color: #245269;
}
.text-warning {
  color: #8a6d3b;
}
a.text-warning:hover {
  color: #66512c;
}
.text-danger {
  color: #a94442;
}
a.text-danger:hover {
  color: #843534;
}
.bg-primary {
  color: #fff;
  background-color: #428bca;
}
a.bg-primary:hover {
  background-color: #3071a9;
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
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
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
  margin-left: -5px;
  list-style: none;
}
.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
dl {
  margin-top: 0;
  margin-bottom: 20px;
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
    overflow: hidden;
    clear: left;
    text-align: right;
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
  border-bottom: 1px dotted #999;
}
.initialism {
  font-size: 90%;
  text-transform: uppercase;
}
blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
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
  color: #999;
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
  text-align: right;
  border-right: 5px solid #eee;
  border-left: 0;
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
blockquote:before,
blockquote:after {
  content: "";
}
address {
  margin-bottom: 20px;
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
  white-space: nowrap;
  background-color: #f9f2f4;
  border-radius: 4px;
}
kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #fff;
  background-color: #333;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
}
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
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
  right: 0;
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
  left: 0;
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
  margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
  }
}
table {
  max-width: 100%;
  background-color: transparent;
}
th {
  text-align: left;
}
.table {
  width: 100%;
  margin-bottom: 20px;
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
  border-top: 1px solid #ddd;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
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
  border-top: 2px solid #ddd;
}
.table .table {
  background-color: #fff;
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
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}
.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #f9f9f9;
}
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
  background-color: #f5f5f5;
}
table col[class*="col-"] {
  position: static;
  display: table-column;
  float: none;
}
table td[class*="col-"],
table th[class*="col-"] {
  position: static;
  display: table-cell;
  float: none;
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
.table-hover > tbody > tr.danger:hover > th {
  background-color: #ebcccc;
}
@media (max-width: 767px) {
  .table-responsive {
    width: 100%;
    margin-bottom: 15px;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
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
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: inherit;
  color: #333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}
label {
  display: inline-block;
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
  /* IE8-9 */
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
  padding-top: 7px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
}
.form-control::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  cursor: not-allowed;
  background-color: #eee;
  opacity: 1;
}
textarea.form-control {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: none;
}
input[type="date"] {
  line-height: 34px;
}
.form-group {
  margin-bottom: 15px;
}
.radio,
.checkbox {
  display: block;
  min-height: 20px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.radio label,
.checkbox label {
  display: inline;
  font-weight: normal;
  cursor: pointer;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  float: left;
  margin-left: -20px;
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
  font-weight: normal;
  vertical-align: middle;
  cursor: pointer;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
input[type="radio"][disabled],
input[type="checkbox"][disabled],
.radio[disabled],
.radio-inline[disabled],
.checkbox[disabled],
.checkbox-inline[disabled],
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"],
fieldset[disabled] .radio,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}
.input-sm {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-sm {
  height: 30px;
  line-height: 30px;
}
textarea.input-sm,
select[multiple].input-sm {
  height: auto;
}
.input-lg {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
select.input-lg {
  height: 46px;
  line-height: 46px;
}
textarea.input-lg,
select[multiple].input-lg {
  height: auto;
}
.has-feedback {
  position: relative;
}
.has-feedback .form-control {
  padding-right: 42.5px;
}
.has-feedback .form-control-feedback {
  position: absolute;
  top: 25px;
  right: 0;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
}
.has-success .help-block,
.has-success .control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline {
  color: #3c763d;
}
.has-success .form-control {
  border-color: #3c763d;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-success .form-control:focus {
  border-color: #2b542c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
}
.has-success .input-group-addon {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #3c763d;
}
.has-success .form-control-feedback {
  color: #3c763d;
}
.has-warning .help-block,
.has-warning .control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline {
  color: #8a6d3b;
}
.has-warning .form-control {
  border-color: #8a6d3b;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-warning .form-control:focus {
  border-color: #66512c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
}
.has-warning .input-group-addon {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #8a6d3b;
}
.has-warning .form-control-feedback {
  color: #8a6d3b;
}
.has-error .help-block,
.has-error .control-label,
.has-error .radio,
.has-error .checkbox,
.has-error .radio-inline,
.has-error .checkbox-inline {
  color: #a94442;
}
.has-error .form-control {
  border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-error .form-control:focus {
  border-color: #843534;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
}
.has-error .input-group-addon {
  color: #a94442;
  background-color: #f2dede;
  border-color: #a94442;
}
.has-error .form-control-feedback {
  color: #a94442;
}
.form-control-static {
  margin-bottom: 0;
}
.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
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
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    float: none;
    margin-left: 0;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}
.form-horizontal .control-label,
.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  padding-top: 7px;
  margin-top: 0;
  margin-bottom: 0;
}
.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 27px;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
.form-horizontal .form-control-static {
  padding-top: 7px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    text-align: right;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
  top: 0;
  right: 15px;
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus {
  color: #333;
  text-decoration: none;
}
.btn:active,
.btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  pointer-events: none;
  cursor: not-allowed;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
          box-shadow: none;
  opacity: .65;
}
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.btn-default:hover,
.btn-default:focus,
.btn-default:active,
.btn-default.active,
.open .dropdown-toggle.btn-default {
  color: #333;
  background-color: #ebebeb;
  border-color: #adadad;
}
.btn-default:active,
.btn-default.active,
.open .dropdown-toggle.btn-default {
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
.btn-default.disabled:active,
.btn-default[disabled]:active,
fieldset[disabled] .btn-default:active,
.btn-default.disabled.active,
.btn-default[disabled].active,
fieldset[disabled] .btn-default.active {
  background-color: #fff;
  border-color: #ccc;
}
.btn-default .badge {
  color: #fff;
  background-color: #333;
}
.btn-primary {
  color: #fff;
  background-color: #428bca;
  border-color: #357ebd;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #3276b1;
  border-color: #285e8e;
}
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
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
.btn-primary.disabled:active,
.btn-primary[disabled]:active,
fieldset[disabled] .btn-primary:active,
.btn-primary.disabled.active,
.btn-primary[disabled].active,
fieldset[disabled] .btn-primary.active {
  background-color: #428bca;
  border-color: #357ebd;
}
.btn-primary .badge {
  color: #428bca;
  background-color: #fff;
}
.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
  color: #fff;
  background-color: #47a447;
  border-color: #398439;
}
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
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
.btn-success.disabled:active,
.btn-success[disabled]:active,
fieldset[disabled] .btn-success:active,
.btn-success.disabled.active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success.active {
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success .badge {
  color: #5cb85c;
  background-color: #fff;
}
.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info:hover,
.btn-info:focus,
.btn-info:active,
.btn-info.active,
.open .dropdown-toggle.btn-info {
  color: #fff;
  background-color: #39b3d7;
  border-color: #269abc;
}
.btn-info:active,
.btn-info.active,
.open .dropdown-toggle.btn-info {
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
.btn-info.disabled:active,
.btn-info[disabled]:active,
fieldset[disabled] .btn-info:active,
.btn-info.disabled.active,
.btn-info[disabled].active,
fieldset[disabled] .btn-info.active {
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info .badge {
  color: #5bc0de;
  background-color: #fff;
}
.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active,
.btn-warning.active,
.open .dropdown-toggle.btn-warning {
  color: #fff;
  background-color: #ed9c28;
  border-color: #d58512;
}
.btn-warning:active,
.btn-warning.active,
.open .dropdown-toggle.btn-warning {
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
.btn-warning.disabled:active,
.btn-warning[disabled]:active,
fieldset[disabled] .btn-warning:active,
.btn-warning.disabled.active,
.btn-warning[disabled].active,
fieldset[disabled] .btn-warning.active {
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}
.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger:hover,
.btn-danger:focus,
.btn-danger:active,
.btn-danger.active,
.open .dropdown-toggle.btn-danger {
  color: #fff;
  background-color: #d2322d;
  border-color: #ac2925;
}
.btn-danger:active,
.btn-danger.active,
.open .dropdown-toggle.btn-danger {
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
.btn-danger.disabled:active,
.btn-danger[disabled]:active,
fieldset[disabled] .btn-danger:active,
.btn-danger.disabled.active,
.btn-danger[disabled].active,
fieldset[disabled] .btn-danger.active {
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger .badge {
  color: #d9534f;
  background-color: #fff;
}
.btn-link {
  font-weight: normal;
  color: #428bca;
  cursor: pointer;
  border-radius: 0;
}
.btn-link,
.btn-link:active,
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
  color: #2a6496;
  text-decoration: underline;
  background-color: transparent;
}
.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:focus {
  color: #999;
  text-decoration: none;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-block {
  display: block;
  width: 100%;
  padding-right: 0;
  padding-left: 0;
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
  -webkit-transition: opacity .15s linear;
          transition: opacity .15s linear;
}
.fade.in {
  opacity: 1;
}
.collapse {
  display: none;
}
.collapse.in {
  display: block;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height .35s ease;
          transition: height .35s ease;
}
@font-face {
  font-family: 'Glyphicons Halflings';

  src: url('../fonts/glyphicons-halflings-regular.eot');
  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
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
.glyphicon-euro:before {
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
  font-size: 14px;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}
.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}
.dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  color: #262626;
  text-decoration: none;
  background-color: #f5f5f5;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  background-color: #428bca;
  outline: 0;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  color: #999;
}
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
}
.open > .dropdown-menu {
  display: block;
}
.open > a {
  outline: 0;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
}
.dropdown-menu-left {
  right: auto;
  left: 0;
}
.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #999;
}
.dropdown-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
}
.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  content: "";
  border-top: 0;
  border-bottom: 4px solid;
}
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 1px;
}
@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: 0;
    left: auto;
  }
  .navbar-right .dropdown-menu-left {
    right: auto;
    left: 0;
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
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus {
  outline: none;
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
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child > .btn:last-child,
.btn-group > .btn-group:first-child > .dropdown-toggle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn-group:last-child > .btn:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
  padding-right: 8px;
  padding-left: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-right: 12px;
  padding-left: 12px;
}
.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
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
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
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
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  display: table-cell;
  float: none;
  width: 1%;
}
.btn-group-justified > .btn-group .btn {
  width: 100%;
}
[data-toggle="buttons"] > .btn > input[type="radio"],
[data-toggle="buttons"] > .btn > input[type="checkbox"] {
  display: none;
}
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group[class*="col-"] {
  float: none;
  padding-right: 0;
  padding-left: 0;
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
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  line-height: 46px;
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
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
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
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #555;
  text-align: center;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}
.input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 18px;
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
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
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
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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
  padding-left: 0;
  margin-bottom: 0;
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
  background-color: #eee;
}
.nav > li.disabled > a {
  color: #999;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #999;
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eee;
  border-color: #428bca;
}
.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
.nav-tabs {
  border-bottom: 1px solid #ddd;
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
  border-color: #eee #eee #ddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li {
  float: none;
}
.nav-tabs.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
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
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #fff;
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
  color: #fff;
  background-color: #428bca;
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
  margin-bottom: 5px;
  text-align: center;
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
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:hover,
  .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
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
  max-height: 340px;
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
}
.navbar-collapse.in {
  overflow-y: auto;
}
@media (min-width: 768px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
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
    padding-right: 0;
    padding-left: 0;
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
  height: 50px;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
}
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
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
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.navbar-toggle:focus {
  outline: none;
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
  margin: 7.5px -15px;
}
.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}
@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }
  .navbar-nav .open .dropdown-menu > li > a,
  .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: 20px;
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
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .navbar-nav.navbar-right:last-child {
    margin-right: -15px;
  }
}
@media (min-width: 768px) {
  .navbar-left {
    float: left !important;
  }
  .navbar-right {
    float: right !important;
  }
}
.navbar-form {
  padding: 10px 15px;
  margin-top: 8px;
  margin-right: -15px;
  margin-bottom: 8px;
  margin-left: -15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
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
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio input[type="radio"],
  .navbar-form .checkbox input[type="checkbox"] {
    float: none;
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
}
@media (min-width: 768px) {
  .navbar-form {
    width: auto;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0;
    margin-left: 0;
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .navbar-form.navbar-right:last-child {
    margin-right: -15px;
  }
}
.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.navbar-btn {
  margin-top: 8px;
  margin-bottom: 8px;
}
.navbar-btn.btn-sm {
  margin-top: 10px;
  margin-bottom: 10px;
}
.navbar-btn.btn-xs {
  margin-top: 14px;
  margin-bottom: 14px;
}
.navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .navbar-text {
    float: left;
    margin-right: 15px;
    margin-left: 15px;
  }
  .navbar-text.navbar-right:last-child {
    margin-right: 0;
  }
}
.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
.navbar-default .navbar-brand {
  color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
.navbar-default .navbar-text {
  color: #777;
}
.navbar-default .navbar-nav > li > a {
  color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}
.navbar-default .navbar-toggle {
  border-color: #ddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}
.navbar-default .navbar-link {
  color: #777;
}
.navbar-default .navbar-link:hover {
  color: #333;
}
.navbar-inverse {
  background-color: #222;
  border-color: #080808;
}
.navbar-inverse .navbar-brand {
  color: #999;
}
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-text {
  color: #999;
}
.navbar-inverse .navbar-nav > li > a {
  color: #999;
}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #080808;
}
.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:hover,
.navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444;
  background-color: transparent;
}
.navbar-inverse .navbar-toggle {
  border-color: #333;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
  background-color: #333;
}
.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #fff;
}
.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #101010;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  color: #fff;
  background-color: #080808;
}
@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #999;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #fff;
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #fff;
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444;
    background-color: transparent;
  }
}
.navbar-inverse .navbar-link {
  color: #999;
}
.navbar-inverse .navbar-link:hover {
  color: #fff;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li {
  display: inline-block;
}
.breadcrumb > li + li:before {
  padding: 0 5px;
  color: #ccc;
  content: "/\\00a0";
}
.breadcrumb > .active {
  color: #999;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}
.pagination > li {
  display: inline;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #428bca;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  color: #2a6496;
  background-color: #eee;
  border-color: #ddd;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 2;
  color: #fff;
  cursor: default;
  background-color: #428bca;
  border-color: #428bca;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #999;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 18px;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.pager {
  padding-left: 0;
  margin: 20px 0;
  text-align: center;
  list-style: none;
}
.pager li {
  display: inline;
}
.pager li > a,
.pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
}
.pager li > a:hover,
.pager li > a:focus {
  text-decoration: none;
  background-color: #eee;
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
  color: #999;
  cursor: not-allowed;
  background-color: #fff;
}
.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}
.label[href]:hover,
.label[href]:focus {
  color: #fff;
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
  background-color: #999;
}
.label-default[href]:hover,
.label-default[href]:focus {
  background-color: #808080;
}
.label-primary {
  background-color: #428bca;
}
.label-primary[href]:hover,
.label-primary[href]:focus {
  background-color: #3071a9;
}
.label-success {
  background-color: #5cb85c;
}
.label-success[href]:hover,
.label-success[href]:focus {
  background-color: #449d44;
}
.label-info {
  background-color: #5bc0de;
}
.label-info[href]:hover,
.label-info[href]:focus {
  background-color: #31b0d5;
}
.label-warning {
  background-color: #f0ad4e;
}
.label-warning[href]:hover,
.label-warning[href]:focus {
  background-color: #ec971f;
}
.label-danger {
  background-color: #d9534f;
}
.label-danger[href]:hover,
.label-danger[href]:focus {
  background-color: #c9302c;
}
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  background-color: #999;
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
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
a.list-group-item.active > .badge,
.nav-pills > .active > a > .badge {
  color: #428bca;
  background-color: #fff;
}
.nav-pills > li > a > .badge {
  margin-left: 3px;
}
.jumbotron {
  padding: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eee;
}
.jumbotron h1,
.jumbotron .h1 {
  color: inherit;
}
.jumbotron p {
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
}
.container .jumbotron {
  border-radius: 6px;
}
.jumbotron .container {
  max-width: 100%;
}
@media screen and (min-width: 768px) {
  .jumbotron {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .container .jumbotron {
    padding-right: 60px;
    padding-left: 60px;
  }
  .jumbotron h1,
  .jumbotron .h1 {
    font-size: 63px;
  }
}
.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.thumbnail > img,
.thumbnail a > img {
  margin-right: auto;
  margin-left: auto;
}
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: #428bca;
}
.thumbnail .caption {
  padding: 9px;
  color: #333;
}
.alert {
  padding: 15px;
  margin-bottom: 20px;
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
.alert-dismissable {
  padding-right: 35px;
}
.alert-dismissable .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.alert-success hr {
  border-top-color: #c9e2b3;
}
.alert-success .alert-link {
  color: #2b542c;
}
.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.alert-info hr {
  border-top-color: #a6e1ec;
}
.alert-info .alert-link {
  color: #245269;
}
.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.alert-warning hr {
  border-top-color: #f7e1b5;
}
.alert-warning .alert-link {
  color: #66512c;
}
.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.alert-danger hr {
  border-top-color: #e4b9c0;
}
.alert-danger .alert-link {
  color: #843534;
}
@-webkit-keyframes progress-bar-stripes {
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
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
}
.progress-bar {
  float: left;
  width: 0;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #428bca;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
  -webkit-transition: width .6s ease;
          transition: width .6s ease;
}
.progress-striped .progress-bar {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-size: 40px 40px;
}
.progress.active .progress-bar {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
          animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-success {
  background-color: #5cb85c;
}
.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-info {
  background-color: #5bc0de;
}
.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-warning {
  background-color: #f0ad4e;
}
.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-danger {
  background-color: #d9534f;
}
.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.media,
.media-body {
  overflow: hidden;
  zoom: 1;
}
.media,
.media .media {
  margin-top: 15px;
}
.media:first-child {
  margin-top: 0;
}
.media-object {
  display: block;
}
.media-heading {
  margin: 0 0 5px;
}
.media > .pull-left {
  margin-right: 10px;
}
.media > .pull-right {
  margin-left: 10px;
}
.media-list {
  padding-left: 0;
  list-style: none;
}
.list-group {
  padding-left: 0;
  margin-bottom: 20px;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}
.list-group-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.list-group-item > .badge {
  float: right;
}
.list-group-item > .badge + .badge {
  margin-right: 5px;
}
a.list-group-item {
  color: #555;
}
a.list-group-item .list-group-item-heading {
  color: #333;
}
a.list-group-item:hover,
a.list-group-item:focus {
  text-decoration: none;
  background-color: #f5f5f5;
}
a.list-group-item.active,
a.list-group-item.active:hover,
a.list-group-item.active:focus {
  z-index: 2;
  color: #fff;
  background-color: #428bca;
  border-color: #428bca;
}
a.list-group-item.active .list-group-item-heading,
a.list-group-item.active:hover .list-group-item-heading,
a.list-group-item.active:focus .list-group-item-heading {
  color: inherit;
}
a.list-group-item.active .list-group-item-text,
a.list-group-item.active:hover .list-group-item-text,
a.list-group-item.active:focus .list-group-item-text {
  color: #e1edf7;
}
.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}
a.list-group-item-success {
  color: #3c763d;
}
a.list-group-item-success .list-group-item-heading {
  color: inherit;
}
a.list-group-item-success:hover,
a.list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}
a.list-group-item-success.active,
a.list-group-item-success.active:hover,
a.list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}
.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}
a.list-group-item-info {
  color: #31708f;
}
a.list-group-item-info .list-group-item-heading {
  color: inherit;
}
a.list-group-item-info:hover,
a.list-group-item-info:focus {
  color: #31708f;
  background-color: #c4e3f3;
}
a.list-group-item-info.active,
a.list-group-item-info.active:hover,
a.list-group-item-info.active:focus {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}
.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}
a.list-group-item-warning {
  color: #8a6d3b;
}
a.list-group-item-warning .list-group-item-heading {
  color: inherit;
}
a.list-group-item-warning:hover,
a.list-group-item-warning:focus {
  color: #8a6d3b;
  background-color: #faf2cc;
}
a.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}
.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}
a.list-group-item-danger {
  color: #a94442;
}
a.list-group-item-danger .list-group-item-heading {
  color: inherit;
}
a.list-group-item-danger:hover,
a.list-group-item-danger:focus {
  color: #a94442;
  background-color: #ebcccc;
}
a.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
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
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}
.panel-body {
  padding: 15px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}
.panel-title > a {
  color: inherit;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .list-group {
  margin-bottom: 0;
}
.panel > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.panel > .table,
.panel > .table-responsive > .table {
  margin-bottom: 0;
}
.panel > .table:first-child,
.panel > .table-responsive:first-child > .table:first-child {
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
.panel > .panel-body + .table-responsive {
  border-top: 1px solid #ddd;
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
  margin-bottom: 0;
  border: 0;
}
.panel-group {
  margin-bottom: 20px;
}
.panel-group .panel {
  margin-bottom: 0;
  overflow: hidden;
  border-radius: 4px;
}
.panel-group .panel + .panel {
  margin-top: 5px;
}
.panel-group .panel-heading {
  border-bottom: 0;
}
.panel-group .panel-heading + .panel-collapse .panel-body {
  border-top: 1px solid #ddd;
}
.panel-group .panel-footer {
  border-top: 0;
}
.panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #ddd;
}
.panel-default {
  border-color: #ddd;
}
.panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-default > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #ddd;
}
.panel-default > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #ddd;
}
.panel-primary {
  border-color: #428bca;
}
.panel-primary > .panel-heading {
  color: #fff;
  background-color: #428bca;
  border-color: #428bca;
}
.panel-primary > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #428bca;
}
.panel-primary > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #428bca;
}
.panel-success {
  border-color: #d6e9c6;
}
.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #d6e9c6;
}
.panel-info {
  border-color: #bce8f1;
}
.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #bce8f1;
}
.panel-info > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #bce8f1;
}
.panel-warning {
  border-color: #faebcc;
}
.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #faebcc;
}
.panel-warning > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #faebcc;
}
.panel-danger {
  border-color: #ebccd1;
}
.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #ebccd1;
}
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
}
.well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, .15);
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
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  filter: alpha(opacity=20);
  opacity: .2;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  filter: alpha(opacity=50);
  opacity: .5;
}
button.close {
  -webkit-appearance: none;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
}
.modal-open {
  overflow: hidden;
}
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.modal.fade .modal-dialog {
  -webkit-transition: -webkit-transform .3s ease-out;
     -moz-transition:    -moz-transform .3s ease-out;
       -o-transition:      -o-transform .3s ease-out;
          transition:         transform .3s ease-out;
  -webkit-transform: translate(0, -25%);
      -ms-transform: translate(0, -25%);
          transform: translate(0, -25%);
}
.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
          transform: translate(0, 0);
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  outline: none;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
}
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}
.modal-backdrop.fade {
  filter: alpha(opacity=0);
  opacity: 0;
}
.modal-backdrop.in {
  filter: alpha(opacity=50);
  opacity: .5;
}
.modal-header {
  min-height: 16.42857143px;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
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
  padding: 19px 20px 20px;
  margin-top: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.modal-footer .btn + .btn {
  margin-bottom: 0;
  margin-left: 5px;
}
.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
.modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
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
  z-index: 1030;
  display: block;
  font-size: 12px;
  line-height: 1.4;
  visibility: visible;
  filter: alpha(opacity=0);
  opacity: 0;
}
.tooltip.in {
  filter: alpha(opacity=90);
  opacity: .9;
}
.tooltip.top {
  padding: 5px 0;
  margin-top: -3px;
}
.tooltip.right {
  padding: 0 5px;
  margin-left: 3px;
}
.tooltip.bottom {
  padding: 5px 0;
  margin-top: 3px;
}
.tooltip.left {
  padding: 0 5px;
  margin-left: -3px;
}
.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #000;
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
  border-top-color: #000;
}
.tooltip.top-left .tooltip-arrow {
  bottom: 0;
  left: 5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.top-right .tooltip-arrow {
  right: 5px;
  bottom: 0;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}
.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000;
}
.tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-left .tooltip-arrow {
  top: 0;
  left: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-right .tooltip-arrow {
  top: 0;
  right: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1010;
  display: none;
  max-width: 276px;
  padding: 1px;
  text-align: left;
  white-space: normal;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
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
  padding: 8px 14px;
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
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
  content: "";
  border-width: 10px;
}
.popover.top > .arrow {
  bottom: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-color: #999;
  border-top-color: rgba(0, 0, 0, .25);
  border-bottom-width: 0;
}
.popover.top > .arrow:after {
  bottom: 1px;
  margin-left: -10px;
  content: " ";
  border-top-color: #fff;
  border-bottom-width: 0;
}
.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-right-color: #999;
  border-right-color: rgba(0, 0, 0, .25);
  border-left-width: 0;
}
.popover.right > .arrow:after {
  bottom: -10px;
  left: 1px;
  content: " ";
  border-right-color: #fff;
  border-left-width: 0;
}
.popover.bottom > .arrow {
  top: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999;
  border-bottom-color: rgba(0, 0, 0, .25);
}
.popover.bottom > .arrow:after {
  top: 1px;
  margin-left: -10px;
  content: " ";
  border-top-width: 0;
  border-bottom-color: #fff;
}
.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999;
  border-left-color: rgba(0, 0, 0, .25);
}
.popover.left > .arrow:after {
  right: 1px;
  bottom: -10px;
  content: " ";
  border-right-width: 0;
  border-left-color: #fff;
}
.carousel {
  position: relative;
}
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner > .item {
  position: relative;
  display: none;
  -webkit-transition: .6s ease-in-out left;
          transition: .6s ease-in-out left;
}
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  line-height: 1;
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
  bottom: 0;
  left: 0;
  width: 15%;
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
  filter: alpha(opacity=50);
  opacity: .5;
}
.carousel-control.left {
  background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, .5) 0%), color-stop(rgba(0, 0, 0, .0001) 100%));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control.right {
  right: 0;
  left: auto;
  background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, .0001) 0%), color-stop(rgba(0, 0, 0, .5) 100%));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control:hover,
.carousel-control:focus {
  color: #fff;
  text-decoration: none;
  filter: alpha(opacity=90);
  outline: none;
  opacity: .9;
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
}
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
  right: 50%;
}
.carousel-control .icon-prev,
.carousel-control .icon-next {
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
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
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none;
}
.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #000 \\9;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
  border-radius: 10px;
}
.carousel-indicators .active {
  width: 12px;
  height: 12px;
  margin: 0;
  background-color: #fff;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
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
    margin-left: -15px;
    font-size: 30px;
  }
  .carousel-caption {
    right: 20%;
    left: 20%;
    padding-bottom: 30px;
  }
  .carousel-indicators {
    bottom: 20px;
  }
}
.clearfix:before,
.clearfix:after,
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
  display: table;
  content: " ";
}
.clearfix:after,
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
  margin-right: auto;
  margin-left: auto;
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
.visible-print {
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
@media print {
  .hidden-print {
    display: none !important;
  }
}
/*# sourceMappingURL=bootstrap.css.map */
`,"css/custom.css":`\r
body {\r
    background: url('../img/bg.png');\r
    background-position: top center;\r
    background-attachment: fixed;\r
    background-color: #fff;\r
    color: #000;\r
    font-family: 'Open Sans', sans-serif;\r
    font-size: 13px;\r
	overflow-x: hidden;\r
}\r
\r
header {\r
	margin-top: 50px;\r
}\r
\r
a {\r
    color: #000;\r
    text-decoration: none;\r
    outline: none;\r
    outline-offset: 0;\r
    padding-bottom: 3px;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
a:hover, \r
a:active, \r
a:focus {\r
    color: #000;\r
    text-decoration: none;\r
    outline: none;\r
    outline-offset: 0;\r
    border-bottom: 1px solid #000;\r
}\r
\r
\r
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\r
    font-family: 'Segoe UI', 'Open Sans', sans-serif;    \r
}\r
\r
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\r
    padding-right: 15px;\r
    padding-left: 15px;\r
}\r
\r
.title {\r
    font-size: larger;\r
    font-weight: bold;\r
    text-transform: uppercase;\r
    padding-left: 0px;\r
}\r
\r
.title:hover {\r
    padding-left: 0px !important;\r
}\r
\r
.title .glyphicon {\r
    background-color: rgba(0, 0, 0, 0.75);\r
    color: #fff;\r
    left: -110px;\r
    padding: 10px;\r
    -webkit-border-radius: 20px;\r
    -moz-border-radius: 20px;\r
    border-radius: 20px;\r
    font-size: smaller;\r
}\r
\r
hr {\r
    margin-top: 10px;\r
    margin-bottom: 15px;\r
    border: 0;\r
    border-top: 3px solid rgba(0, 0, 0, 0.1);\r
}\r
\r
hr.empty {\r
    padding: 7px 0;\r
    border: 0;\r
}\r
\r
strong {\r
    font-size: larger;\r
    font-weight: normal;\r
}\r
\r
\r
.progress {\r
    background-color: rgba(0, 0, 0, 0.05);\r
    height: 7px;\r
    margin-left: 9px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
.progress-bar {\r
    width: 0;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-box-shadow: none;\r
    -moz-box-shadow: none;\r
    box-shadow: none;\r
    -webkit-transition: width 3s ease;\r
    -moz-transition: width 3s ease;\r
    transition: width 3s ease;\r
}\r
\r
.progress-bar-success {\r
    background-color: #ffa700;\r
}\r
\r
.annotation {\r
    float: right;\r
    opacity: .75;\r
    font-style: italic;\r
}\r
\r
.chart {\r
    position: relative;\r
    display: inline-block;\r
    width: 110px;\r
    height: 110px;\r
    margin-top: 25px;\r
    margin-bottom: 50px;\r
    margin-right: 5%;\r
    text-align: center;\r
}\r
\r
.chart canvas {\r
    position: absolute;\r
    top: 35px;\r
    left: 0;\r
}\r
\r
.percent {\r
    display: inline-block;\r
    line-height: 140px;\r
    z-index: 2;\r
    opacity: .75;\r
    font-style: italic;\r
}\r
\r
.percent:after {\r
    content: '%';\r
    margin-left: 0.1em;\r
}\r
\r
.skill {\r
    display: block;\r
}\r
\r
ul {\r
    padding: 10px 0 0 13px;\r
    margin: 0;\r
    border-left: 3px solid rgba(0, 0, 0, 0.05);\r
}\r
\r
\r
ul li {\r
    list-style-image: url('../img/list-style.png');\r
    padding: 10px 0 10px 27px;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
ul li:hover {\r
    list-style-image: url('../img/list-style-on.png');\r
    padding-left: 40px !important;\r
}\r
\r
.static:hover {\r
    padding-left: 27px !important;\r
}\r
\r
ul li p {\r
    padding-left: 8px;\r
}\r
\r
ul .note {\r
    display: inline-block;\r
    margin: 8px;\r
    opacity: .75;\r
    text-transform: uppercase;\r
}\r
\r
ul .description {\r
    opacity: .75;\r
}\r
\r
.title {\r
    list-style-image: url('../img/ls.png') !important;\r
}\r
\r
.title:hover {\r
    padding-left: 0px !important;\r
}\r
\r
/* Top icons ------------------------------------------------- */\r
\r
.top-icons {\r
	position: fixed;\r
    top: 50px;\r
    left: 47px;\r
	width: 100%;\r
}\r
\r
.top-menu {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-menu:hover {\r
    background-color: #00ce08;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
.top-download-resume {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-download-resume:hover {\r
    background-color: #0093ff;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
.top-contact {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-contact:hover {\r
    background-color: #ff003b;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
/* Nav ------------------------------------------------- */\r
\r
nav {\r
    position: fixed;\r
    top: 33%;\r
    left: 50px;\r
    z-index: 999;\r
}\r
\r
nav ul {\r
    padding: 10px 0 0 10px;\r
    margin: 0px;\r
    border-left: 4px solid rgba(0, 0, 0, 0.05);\r
}\r
\r
nav ul li:first-child {\r
    margin-top: -25px;\r
}\r
\r
nav ul li {\r
    list-style-image: url('../img/list-style-nav.png');\r
    padding: 5px 15px;\r
    font-size: 13px;\r
    text-transform: uppercase;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
nav ul li:hover {\r
    list-style-image: url('../img/list-style-nav-on.png');\r
    padding-left: 25px !important;\r
    color: #000;\r
}\r
\r
nav ul li:hover a {\r
    color: #000;\r
}\r
\r
nav ul li.active {\r
    list-style-image: url('../img/list-style-nav-on.png');\r
    color: #000;\r
}\r
\r
nav a {\r
    border-bottom: 0;\r
}\r
\r
nav a:hover, \r
nav a:active, \r
nav a:focus {\r
    border-bottom: 0;\r
}\r
\r
nav li a {\r
    border-bottom: 0;\r
    color: rgba(0, 0, 0, 0.5);\r
}\r
\r
nav .active a {\r
    color: #000;\r
    font-weight: bold;\r
}\r
\r
#mini-nav {\r
    background-color: #fff;\r
    position: fixed;\r
    width: 100%;\r
    top: 0;\r
    left: 0;\r
    text-align: center;\r
    font-weight: bold;\r
}\r
\r
#mini-nav ul {\r
    width: 100%;\r
    border: 0;\r
    padding: 7px 0 10px 0;\r
    \r
}\r
\r
#mini-nav ul li {\r
    list-style-image: none;\r
    padding: 0 !important;\r
}\r
\r
#mini-nav ul li:first-child {\r
    margin-top: 0;\r
}\r
\r
#mini-nav .dropdown-menu {\r
    margin: 0;\r
    font-size: 14px;\r
    list-style: none;\r
    background-color: #fff;\r
    border: 0;\r
    border-radius: 0;\r
    -webkit-box-shadow: none;\r
    box-shadow: none;\r
}\r
\r
.dropdown-menu > .active > a, \r
.dropdown-menu > .active > a:hover, \r
.dropdown-menu > .active > a:focus {\r
    background-color: #000;\r
}\r
\r
/* Header ------------------------------------------------- */\r
\r
.face {\r
    height: 200px;\r
    width: 200px;\r
    border-radius: 50%;\r
}\r
\r
.header-name {\r
    background-color: #000;\r
    padding: 5px 17px;\r
    display: inline-block;\r
    color: #fff;\r
    font-size: 18px;\r
    font-weight: 700;\r
    text-transform: uppercase;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-left: 3px solid #f00;\r
    border-right: 3px solid #0045ff;\r
}\r
\r
.header-title {\r
    font-size: 16px;\r
}\r
\r
.header-subtitle {\r
    padding-top: 25px;\r
    font-style: italic;\r
    margin-bottom: 100px;\r
}\r
\r
/* Profile ------------------------------------------------- */\r
\r
.profile .title .glyphicon{\r
    background-color: #9300ff;\r
}\r
\r
/* Work experience ------------------------------------------------- */\r
\r
.work-experience .title .glyphicon{\r
    background-color: #00a7ff;\r
}\r
\r
/* Education ------------------------------------------------- */\r
\r
.education .title .glyphicon{\r
    background-color: #07b500;\r
}\r
\r
/* Professional skills ------------------------------------------------- */\r
\r
.professional-skills .title .glyphicon{\r
    background-color: #ffa700;\r
}\r
\r
/* Personal skills ------------------------------------------------- */\r
\r
.personal-skills .title .glyphicon{\r
    background-color: #00aca5;\r
}\r
\r
/* Interests ------------------------------------------------- */\r
\r
.interests .title .glyphicon{\r
    background-color: #f00;\r
}\r
\r
/* Portfolio ------------------------------------------------ */\r
\r
.portfolio .title .glyphicon{\r
    background-color: #0089ff;\r
}\r
\r
.portfolio img {\r
    width: 100px;\r
    margin-right: 5px;\r
    margin-bottom: 5px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.portfolio img:hover {\r
    opacity: .75;\r
}\r
\r
.portfolio img:first-child {\r
    margin-left: 8px;\r
}\r
\r
.dismiss {\r
    position: relative;\r
    background-color: rgba(0, 0, 0, 0.25);\r
    top: -4px;\r
    left: 100%;\r
    color: #fff;\r
    padding: 5px 7px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0 !important;\r
    z-index: -1;\r
    -webkit-transition: all 0.3s ease;\r
    -moz-transition: all 0.3s ease;\r
    transition: all 0.3s ease;\r
}\r
\r
.dismiss:hover {\r
    background-color: #fff;\r
}\r
\r
.modal {\r
	text-align: center;\r
}\r
\r
.modal img {\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
/* Contact Form ------------------------------------------------ */\r
\r
.contact .title .glyphicon{\r
    background-color: #00c60f;\r
}\r
\r
.contact ul li:hover {\r
    padding-left: 27px;\r
}\r
\r
form {\r
    margin-left: 9px;\r
}\r
\r
.contact-on {\r
    position: fixed;\r
    bottom: 50px;\r
    background: #202020;\r
    height: auto;\r
    width: 100%;\r
    padding-top: 35px;\r
    padding-bottom: 25px;\r
    z-index: 999;\r
    display: none;\r
}\r
\r
.form-control {\r
    display: block;\r
    width: 100%;\r
    height: 35px;\r
    padding: 6px 15px;\r
    font-size: 12px;\r
    color: #000;\r
    background-color: rgba(255, 255, 255, 0.75);\r
    background-image: none;\r
    border: 0;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-box-shadow: none;\r
    -moz-box-shadow: none;\r
    box-shadow: none;\r
}\r
\r
.form-control:focus {\r
    border: 0;\r
    background-color: #fff;\r
    color: #000;\r
}\r
\r
textarea.form-control {\r
    height: 85px;\r
    resize: none;\r
}\r
\r
.input-group-addon {\r
    color: #000;\r
    background-color: rgba(0, 0, 0, 0.05);\r
    border: 0;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
form .glyphicon {\r
    opacity: .25;\r
}\r
\r
.btn-success {\r
    font-size: 12px;\r
    color: #000;\r
    background-color: rgba(255, 255, 255, 0.5);\r
    border-color: rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.btn .glyphicon {\r
    margin-right: 7px;\r
    opacity: 1;\r
}\r
\r
.btn-success:hover, \r
.btn-success:focus, \r
.btn-success:active, \r
.btn-success.active {\r
    color: #fff;\r
    background-color: #15b900;\r
    border-color: rgba(0, 0, 0, 0.1);\r
}\r
\r
/* Up ------------------------------------------------ */\r
\r
.contact .title.up .glyphicon{\r
    background-color: #ffad00;\r
}\r
\r
.up {\r
	margin-bottom: 100px;\r
    cursor: pointer;\r
}\r
`,"css/dark.css":`/* ------------------------------------------------------------- */
/* ---------------------------BRKOR----------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------ Dark theme ------------------------- */

body {
    background: url('../img/bg-dark.png');
    background-position: top center;
    background-attachment: fixed;
    background-color: #2a2a2a;
    color: #fff;
}

a {
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

a:hover, 
a:active, 
a:focus {
    color: #fff;
    border-bottom: 1px solid #fff;
}

nav ul {
    border-left: 4px solid rgba(0, 0, 0, 0.05);
}


nav ul li {
    list-style-image: url('../img/list-style-nav.png');
}

nav ul li:hover {
    list-style-image: url('../img/list-style-nav-white-on.png');
    color: #fff;
}

nav ul li:hover a {
    color: #fff;
}

nav ul li.active {
    list-style-image: url('../img/list-style-nav-white-on.png');
    color: #fff;
}

nav li a {
    border-bottom: 0;
    color: rgba(255, 255, 255, 0.5);
}

nav .active a {
    color: #fff;
}

.header-name {
    background-color: #fff;
    color: #000;
}

.dismiss:hover {
    color: #000;
}

.form-control {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.input-group-addon {
    background-color: rgba(255, 255, 255, 0.05);
    color: #fff;
}

.btn-success {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
}`,"css/theme.css":`
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
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
  background: transparent;
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
  margin: .67em 0;
  font-size: 2em;
}
mark {
  color: #000;
  background: #ff0;
}
small {
  font-size: 80%;
}
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sup {
  top: -.5em;
}
sub {
  bottom: -.25em;
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
  height: 0;
  -moz-box-sizing: content-box;
       box-sizing: content-box;
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
  margin: 0;
  font: inherit;
  color: inherit;
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
  padding: 0;
  border: 0;
}
input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
  -webkit-appearance: textfield;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset {
  padding: .35em .625em .75em;
  margin: 0 2px;
  border: 1px solid #c0c0c0;
}
legend {
  padding: 0;
  border: 0;
}
textarea {
  overflow: auto;
}
optgroup {
  font-weight: bold;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
td,
th {
  padding: 0;
}
@media print {
  * {
    color: #000 !important;
    text-shadow: none !important;
    box-shadow: none !important;
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
  a[href^="javascript:"]:after,
  a[href^="#"]:after {
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
  .table td,
  .table th {
    background-color: #fff !important;
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
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
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
  font-size: 62.5%;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background-color: #fff;
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
  color: #428bca;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #2a6496;
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
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.img-circle {
  border-radius: 50%;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
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
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
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
  color: #999;
}
h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 20px;
  margin-bottom: 10px;
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
  margin-top: 10px;
  margin-bottom: 10px;
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
  font-size: 36px;
}
h2,
.h2 {
  font-size: 30px;
}
h3,
.h3 {
  font-size: 24px;
}
h4,
.h4 {
  font-size: 18px;
}
h5,
.h5 {
  font-size: 14px;
}
h6,
.h6 {
  font-size: 12px;
}
p {
  margin: 0 0 10px;
}
.lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 200;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .lead {
    font-size: 21px;
  }
}
small,
.small {
  font-size: 85%;
}
cite {
  font-style: normal;
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
.text-muted {
  color: #999;
}
.text-primary {
  color: #428bca;
}
a.text-primary:hover {
  color: #3071a9;
}
.text-success {
  color: #3c763d;
}
a.text-success:hover {
  color: #2b542c;
}
.text-info {
  color: #31708f;
}
a.text-info:hover {
  color: #245269;
}
.text-warning {
  color: #8a6d3b;
}
a.text-warning:hover {
  color: #66512c;
}
.text-danger {
  color: #a94442;
}
a.text-danger:hover {
  color: #843534;
}
.bg-primary {
  color: #fff;
  background-color: #428bca;
}
a.bg-primary:hover {
  background-color: #3071a9;
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
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
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
  margin-left: -5px;
  list-style: none;
}
.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
dl {
  margin-top: 0;
  margin-bottom: 20px;
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
    overflow: hidden;
    clear: left;
    text-align: right;
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
  border-bottom: 1px dotted #999;
}
.initialism {
  font-size: 90%;
  text-transform: uppercase;
}
blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
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
  color: #999;
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
  text-align: right;
  border-right: 5px solid #eee;
  border-left: 0;
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
blockquote:before,
blockquote:after {
  content: "";
}
address {
  margin-bottom: 20px;
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
  white-space: nowrap;
  background-color: #f9f2f4;
  border-radius: 4px;
}
kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #fff;
  background-color: #333;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
}
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
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
  right: 0;
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
  left: 0;
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
  margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
  }
}
table {
  max-width: 100%;
  background-color: transparent;
}
th {
  text-align: left;
}
.table {
  width: 100%;
  margin-bottom: 20px;
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
  border-top: 1px solid #ddd;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
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
  border-top: 2px solid #ddd;
}
.table .table {
  background-color: #fff;
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
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}
.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #f9f9f9;
}
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
  background-color: #f5f5f5;
}
table col[class*="col-"] {
  position: static;
  display: table-column;
  float: none;
}
table td[class*="col-"],
table th[class*="col-"] {
  position: static;
  display: table-cell;
  float: none;
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
.table-hover > tbody > tr.danger:hover > th {
  background-color: #ebcccc;
}
@media (max-width: 767px) {
  .table-responsive {
    width: 100%;
    margin-bottom: 15px;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
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
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: inherit;
  color: #333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}
label {
  display: inline-block;
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
  /* IE8-9 */
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
  padding-top: 7px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
}
.form-control::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  cursor: not-allowed;
  background-color: #eee;
  opacity: 1;
}
textarea.form-control {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: none;
}
input[type="date"] {
  line-height: 34px;
}
.form-group {
  margin-bottom: 15px;
}
.radio,
.checkbox {
  display: block;
  min-height: 20px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.radio label,
.checkbox label {
  display: inline;
  font-weight: normal;
  cursor: pointer;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  float: left;
  margin-left: -20px;
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
  font-weight: normal;
  vertical-align: middle;
  cursor: pointer;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
input[type="radio"][disabled],
input[type="checkbox"][disabled],
.radio[disabled],
.radio-inline[disabled],
.checkbox[disabled],
.checkbox-inline[disabled],
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"],
fieldset[disabled] .radio,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}
.input-sm {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-sm {
  height: 30px;
  line-height: 30px;
}
textarea.input-sm,
select[multiple].input-sm {
  height: auto;
}
.input-lg {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
select.input-lg {
  height: 46px;
  line-height: 46px;
}
textarea.input-lg,
select[multiple].input-lg {
  height: auto;
}
.has-feedback {
  position: relative;
}
.has-feedback .form-control {
  padding-right: 42.5px;
}
.has-feedback .form-control-feedback {
  position: absolute;
  top: 25px;
  right: 0;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
}
.has-success .help-block,
.has-success .control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline {
  color: #3c763d;
}
.has-success .form-control {
  border-color: #3c763d;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-success .form-control:focus {
  border-color: #2b542c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
}
.has-success .input-group-addon {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #3c763d;
}
.has-success .form-control-feedback {
  color: #3c763d;
}
.has-warning .help-block,
.has-warning .control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline {
  color: #8a6d3b;
}
.has-warning .form-control {
  border-color: #8a6d3b;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-warning .form-control:focus {
  border-color: #66512c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
}
.has-warning .input-group-addon {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #8a6d3b;
}
.has-warning .form-control-feedback {
  color: #8a6d3b;
}
.has-error .help-block,
.has-error .control-label,
.has-error .radio,
.has-error .checkbox,
.has-error .radio-inline,
.has-error .checkbox-inline {
  color: #a94442;
}
.has-error .form-control {
  border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-error .form-control:focus {
  border-color: #843534;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
}
.has-error .input-group-addon {
  color: #a94442;
  background-color: #f2dede;
  border-color: #a94442;
}
.has-error .form-control-feedback {
  color: #a94442;
}
.form-control-static {
  margin-bottom: 0;
}
.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
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
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    float: none;
    margin-left: 0;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}
.form-horizontal .control-label,
.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  padding-top: 7px;
  margin-top: 0;
  margin-bottom: 0;
}
.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 27px;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
.form-horizontal .form-control-static {
  padding-top: 7px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    text-align: right;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
  top: 0;
  right: 15px;
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus {
  color: #333;
  text-decoration: none;
}
.btn:active,
.btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  pointer-events: none;
  cursor: not-allowed;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
          box-shadow: none;
  opacity: .65;
}
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.btn-default:hover,
.btn-default:focus,
.btn-default:active,
.btn-default.active,
.open .dropdown-toggle.btn-default {
  color: #333;
  background-color: #ebebeb;
  border-color: #adadad;
}
.btn-default:active,
.btn-default.active,
.open .dropdown-toggle.btn-default {
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
.btn-default.disabled:active,
.btn-default[disabled]:active,
fieldset[disabled] .btn-default:active,
.btn-default.disabled.active,
.btn-default[disabled].active,
fieldset[disabled] .btn-default.active {
  background-color: #fff;
  border-color: #ccc;
}
.btn-default .badge {
  color: #fff;
  background-color: #333;
}
.btn-primary {
  color: #fff;
  background-color: #428bca;
  border-color: #357ebd;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #3276b1;
  border-color: #285e8e;
}
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
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
.btn-primary.disabled:active,
.btn-primary[disabled]:active,
fieldset[disabled] .btn-primary:active,
.btn-primary.disabled.active,
.btn-primary[disabled].active,
fieldset[disabled] .btn-primary.active {
  background-color: #428bca;
  border-color: #357ebd;
}
.btn-primary .badge {
  color: #428bca;
  background-color: #fff;
}
.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
  color: #fff;
  background-color: #47a447;
  border-color: #398439;
}
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
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
.btn-success.disabled:active,
.btn-success[disabled]:active,
fieldset[disabled] .btn-success:active,
.btn-success.disabled.active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success.active {
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success .badge {
  color: #5cb85c;
  background-color: #fff;
}
.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info:hover,
.btn-info:focus,
.btn-info:active,
.btn-info.active,
.open .dropdown-toggle.btn-info {
  color: #fff;
  background-color: #39b3d7;
  border-color: #269abc;
}
.btn-info:active,
.btn-info.active,
.open .dropdown-toggle.btn-info {
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
.btn-info.disabled:active,
.btn-info[disabled]:active,
fieldset[disabled] .btn-info:active,
.btn-info.disabled.active,
.btn-info[disabled].active,
fieldset[disabled] .btn-info.active {
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info .badge {
  color: #5bc0de;
  background-color: #fff;
}
.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active,
.btn-warning.active,
.open .dropdown-toggle.btn-warning {
  color: #fff;
  background-color: #ed9c28;
  border-color: #d58512;
}
.btn-warning:active,
.btn-warning.active,
.open .dropdown-toggle.btn-warning {
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
.btn-warning.disabled:active,
.btn-warning[disabled]:active,
fieldset[disabled] .btn-warning:active,
.btn-warning.disabled.active,
.btn-warning[disabled].active,
fieldset[disabled] .btn-warning.active {
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}
.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger:hover,
.btn-danger:focus,
.btn-danger:active,
.btn-danger.active,
.open .dropdown-toggle.btn-danger {
  color: #fff;
  background-color: #d2322d;
  border-color: #ac2925;
}
.btn-danger:active,
.btn-danger.active,
.open .dropdown-toggle.btn-danger {
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
.btn-danger.disabled:active,
.btn-danger[disabled]:active,
fieldset[disabled] .btn-danger:active,
.btn-danger.disabled.active,
.btn-danger[disabled].active,
fieldset[disabled] .btn-danger.active {
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger .badge {
  color: #d9534f;
  background-color: #fff;
}
.btn-link {
  font-weight: normal;
  color: #428bca;
  cursor: pointer;
  border-radius: 0;
}
.btn-link,
.btn-link:active,
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
  color: #2a6496;
  text-decoration: underline;
  background-color: transparent;
}
.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:focus {
  color: #999;
  text-decoration: none;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-block {
  display: block;
  width: 100%;
  padding-right: 0;
  padding-left: 0;
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
  -webkit-transition: opacity .15s linear;
          transition: opacity .15s linear;
}
.fade.in {
  opacity: 1;
}
.collapse {
  display: none;
}
.collapse.in {
  display: block;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height .35s ease;
          transition: height .35s ease;
}
@font-face {
  font-family: 'Glyphicons Halflings';

  src: url('../fonts/glyphicons-halflings-regular.eot');
  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
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
.glyphicon-euro:before {
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
  font-size: 14px;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}
.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}
.dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  color: #262626;
  text-decoration: none;
  background-color: #f5f5f5;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  background-color: #428bca;
  outline: 0;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  color: #999;
}
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
}
.open > .dropdown-menu {
  display: block;
}
.open > a {
  outline: 0;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
}
.dropdown-menu-left {
  right: auto;
  left: 0;
}
.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #999;
}
.dropdown-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
}
.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  content: "";
  border-top: 0;
  border-bottom: 4px solid;
}
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 1px;
}
@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: 0;
    left: auto;
  }
  .navbar-right .dropdown-menu-left {
    right: auto;
    left: 0;
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
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus {
  outline: none;
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
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child > .btn:last-child,
.btn-group > .btn-group:first-child > .dropdown-toggle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn-group:last-child > .btn:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
  padding-right: 8px;
  padding-left: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-right: 12px;
  padding-left: 12px;
}
.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
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
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
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
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  display: table-cell;
  float: none;
  width: 1%;
}
.btn-group-justified > .btn-group .btn {
  width: 100%;
}
[data-toggle="buttons"] > .btn > input[type="radio"],
[data-toggle="buttons"] > .btn > input[type="checkbox"] {
  display: none;
}
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group[class*="col-"] {
  float: none;
  padding-right: 0;
  padding-left: 0;
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
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  line-height: 46px;
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
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
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
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #555;
  text-align: center;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}
.input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 18px;
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
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
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
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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
  padding-left: 0;
  margin-bottom: 0;
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
  background-color: #eee;
}
.nav > li.disabled > a {
  color: #999;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #999;
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eee;
  border-color: #428bca;
}
.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
.nav-tabs {
  border-bottom: 1px solid #ddd;
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
  border-color: #eee #eee #ddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li {
  float: none;
}
.nav-tabs.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
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
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #fff;
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
  color: #fff;
  background-color: #428bca;
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
  margin-bottom: 5px;
  text-align: center;
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
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:hover,
  .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
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
  max-height: 340px;
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
}
.navbar-collapse.in {
  overflow-y: auto;
}
@media (min-width: 768px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
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
    padding-right: 0;
    padding-left: 0;
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
  height: 50px;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
}
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
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
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.navbar-toggle:focus {
  outline: none;
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
  margin: 7.5px -15px;
}
.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}
@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }
  .navbar-nav .open .dropdown-menu > li > a,
  .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: 20px;
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
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .navbar-nav.navbar-right:last-child {
    margin-right: -15px;
  }
}
@media (min-width: 768px) {
  .navbar-left {
    float: left !important;
  }
  .navbar-right {
    float: right !important;
  }
}
.navbar-form {
  padding: 10px 15px;
  margin-top: 8px;
  margin-right: -15px;
  margin-bottom: 8px;
  margin-left: -15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
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
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio input[type="radio"],
  .navbar-form .checkbox input[type="checkbox"] {
    float: none;
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
}
@media (min-width: 768px) {
  .navbar-form {
    width: auto;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0;
    margin-left: 0;
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .navbar-form.navbar-right:last-child {
    margin-right: -15px;
  }
}
.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.navbar-btn {
  margin-top: 8px;
  margin-bottom: 8px;
}
.navbar-btn.btn-sm {
  margin-top: 10px;
  margin-bottom: 10px;
}
.navbar-btn.btn-xs {
  margin-top: 14px;
  margin-bottom: 14px;
}
.navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .navbar-text {
    float: left;
    margin-right: 15px;
    margin-left: 15px;
  }
  .navbar-text.navbar-right:last-child {
    margin-right: 0;
  }
}
.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
.navbar-default .navbar-brand {
  color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
.navbar-default .navbar-text {
  color: #777;
}
.navbar-default .navbar-nav > li > a {
  color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}
.navbar-default .navbar-toggle {
  border-color: #ddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}
.navbar-default .navbar-link {
  color: #777;
}
.navbar-default .navbar-link:hover {
  color: #333;
}
.navbar-inverse {
  background-color: #222;
  border-color: #080808;
}
.navbar-inverse .navbar-brand {
  color: #999;
}
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-text {
  color: #999;
}
.navbar-inverse .navbar-nav > li > a {
  color: #999;
}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #080808;
}
.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:hover,
.navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444;
  background-color: transparent;
}
.navbar-inverse .navbar-toggle {
  border-color: #333;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
  background-color: #333;
}
.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #fff;
}
.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #101010;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  color: #fff;
  background-color: #080808;
}
@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #999;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #fff;
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #fff;
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444;
    background-color: transparent;
  }
}
.navbar-inverse .navbar-link {
  color: #999;
}
.navbar-inverse .navbar-link:hover {
  color: #fff;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li {
  display: inline-block;
}
.breadcrumb > li + li:before {
  padding: 0 5px;
  color: #ccc;
  content: "/\\00a0";
}
.breadcrumb > .active {
  color: #999;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}
.pagination > li {
  display: inline;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #428bca;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  color: #2a6496;
  background-color: #eee;
  border-color: #ddd;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 2;
  color: #fff;
  cursor: default;
  background-color: #428bca;
  border-color: #428bca;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #999;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 18px;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.pager {
  padding-left: 0;
  margin: 20px 0;
  text-align: center;
  list-style: none;
}
.pager li {
  display: inline;
}
.pager li > a,
.pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
}
.pager li > a:hover,
.pager li > a:focus {
  text-decoration: none;
  background-color: #eee;
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
  color: #999;
  cursor: not-allowed;
  background-color: #fff;
}
.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}
.label[href]:hover,
.label[href]:focus {
  color: #fff;
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
  background-color: #999;
}
.label-default[href]:hover,
.label-default[href]:focus {
  background-color: #808080;
}
.label-primary {
  background-color: #428bca;
}
.label-primary[href]:hover,
.label-primary[href]:focus {
  background-color: #3071a9;
}
.label-success {
  background-color: #5cb85c;
}
.label-success[href]:hover,
.label-success[href]:focus {
  background-color: #449d44;
}
.label-info {
  background-color: #5bc0de;
}
.label-info[href]:hover,
.label-info[href]:focus {
  background-color: #31b0d5;
}
.label-warning {
  background-color: #f0ad4e;
}
.label-warning[href]:hover,
.label-warning[href]:focus {
  background-color: #ec971f;
}
.label-danger {
  background-color: #d9534f;
}
.label-danger[href]:hover,
.label-danger[href]:focus {
  background-color: #c9302c;
}
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  background-color: #999;
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
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
a.list-group-item.active > .badge,
.nav-pills > .active > a > .badge {
  color: #428bca;
  background-color: #fff;
}
.nav-pills > li > a > .badge {
  margin-left: 3px;
}
.jumbotron {
  padding: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eee;
}
.jumbotron h1,
.jumbotron .h1 {
  color: inherit;
}
.jumbotron p {
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
}
.container .jumbotron {
  border-radius: 6px;
}
.jumbotron .container {
  max-width: 100%;
}
@media screen and (min-width: 768px) {
  .jumbotron {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .container .jumbotron {
    padding-right: 60px;
    padding-left: 60px;
  }
  .jumbotron h1,
  .jumbotron .h1 {
    font-size: 63px;
  }
}
.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.thumbnail > img,
.thumbnail a > img {
  margin-right: auto;
  margin-left: auto;
}
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: #428bca;
}
.thumbnail .caption {
  padding: 9px;
  color: #333;
}
.alert {
  padding: 15px;
  margin-bottom: 20px;
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
.alert-dismissable {
  padding-right: 35px;
}
.alert-dismissable .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.alert-success hr {
  border-top-color: #c9e2b3;
}
.alert-success .alert-link {
  color: #2b542c;
}
.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.alert-info hr {
  border-top-color: #a6e1ec;
}
.alert-info .alert-link {
  color: #245269;
}
.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.alert-warning hr {
  border-top-color: #f7e1b5;
}
.alert-warning .alert-link {
  color: #66512c;
}
.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.alert-danger hr {
  border-top-color: #e4b9c0;
}
.alert-danger .alert-link {
  color: #843534;
}
@-webkit-keyframes progress-bar-stripes {
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
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
}
.progress-bar {
  float: left;
  width: 0;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #428bca;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
  -webkit-transition: width .6s ease;
          transition: width .6s ease;
}
.progress-striped .progress-bar {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-size: 40px 40px;
}
.progress.active .progress-bar {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
          animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-success {
  background-color: #5cb85c;
}
.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-info {
  background-color: #5bc0de;
}
.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-warning {
  background-color: #f0ad4e;
}
.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-danger {
  background-color: #d9534f;
}
.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.media,
.media-body {
  overflow: hidden;
  zoom: 1;
}
.media,
.media .media {
  margin-top: 15px;
}
.media:first-child {
  margin-top: 0;
}
.media-object {
  display: block;
}
.media-heading {
  margin: 0 0 5px;
}
.media > .pull-left {
  margin-right: 10px;
}
.media > .pull-right {
  margin-left: 10px;
}
.media-list {
  padding-left: 0;
  list-style: none;
}
.list-group {
  padding-left: 0;
  margin-bottom: 20px;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}
.list-group-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.list-group-item > .badge {
  float: right;
}
.list-group-item > .badge + .badge {
  margin-right: 5px;
}
a.list-group-item {
  color: #555;
}
a.list-group-item .list-group-item-heading {
  color: #333;
}
a.list-group-item:hover,
a.list-group-item:focus {
  text-decoration: none;
  background-color: #f5f5f5;
}
a.list-group-item.active,
a.list-group-item.active:hover,
a.list-group-item.active:focus {
  z-index: 2;
  color: #fff;
  background-color: #428bca;
  border-color: #428bca;
}
a.list-group-item.active .list-group-item-heading,
a.list-group-item.active:hover .list-group-item-heading,
a.list-group-item.active:focus .list-group-item-heading {
  color: inherit;
}
a.list-group-item.active .list-group-item-text,
a.list-group-item.active:hover .list-group-item-text,
a.list-group-item.active:focus .list-group-item-text {
  color: #e1edf7;
}
.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}
a.list-group-item-success {
  color: #3c763d;
}
a.list-group-item-success .list-group-item-heading {
  color: inherit;
}
a.list-group-item-success:hover,
a.list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}
a.list-group-item-success.active,
a.list-group-item-success.active:hover,
a.list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}
.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}
a.list-group-item-info {
  color: #31708f;
}
a.list-group-item-info .list-group-item-heading {
  color: inherit;
}
a.list-group-item-info:hover,
a.list-group-item-info:focus {
  color: #31708f;
  background-color: #c4e3f3;
}
a.list-group-item-info.active,
a.list-group-item-info.active:hover,
a.list-group-item-info.active:focus {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}
.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}
a.list-group-item-warning {
  color: #8a6d3b;
}
a.list-group-item-warning .list-group-item-heading {
  color: inherit;
}
a.list-group-item-warning:hover,
a.list-group-item-warning:focus {
  color: #8a6d3b;
  background-color: #faf2cc;
}
a.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}
.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}
a.list-group-item-danger {
  color: #a94442;
}
a.list-group-item-danger .list-group-item-heading {
  color: inherit;
}
a.list-group-item-danger:hover,
a.list-group-item-danger:focus {
  color: #a94442;
  background-color: #ebcccc;
}
a.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
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
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}
.panel-body {
  padding: 15px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}
.panel-title > a {
  color: inherit;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .list-group {
  margin-bottom: 0;
}
.panel > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.panel > .table,
.panel > .table-responsive > .table {
  margin-bottom: 0;
}
.panel > .table:first-child,
.panel > .table-responsive:first-child > .table:first-child {
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
.panel > .panel-body + .table-responsive {
  border-top: 1px solid #ddd;
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
  margin-bottom: 0;
  border: 0;
}
.panel-group {
  margin-bottom: 20px;
}
.panel-group .panel {
  margin-bottom: 0;
  overflow: hidden;
  border-radius: 4px;
}
.panel-group .panel + .panel {
  margin-top: 5px;
}
.panel-group .panel-heading {
  border-bottom: 0;
}
.panel-group .panel-heading + .panel-collapse .panel-body {
  border-top: 1px solid #ddd;
}
.panel-group .panel-footer {
  border-top: 0;
}
.panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #ddd;
}
.panel-default {
  border-color: #ddd;
}
.panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-default > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #ddd;
}
.panel-default > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #ddd;
}
.panel-primary {
  border-color: #428bca;
}
.panel-primary > .panel-heading {
  color: #fff;
  background-color: #428bca;
  border-color: #428bca;
}
.panel-primary > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #428bca;
}
.panel-primary > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #428bca;
}
.panel-success {
  border-color: #d6e9c6;
}
.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #d6e9c6;
}
.panel-info {
  border-color: #bce8f1;
}
.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #bce8f1;
}
.panel-info > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #bce8f1;
}
.panel-warning {
  border-color: #faebcc;
}
.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #faebcc;
}
.panel-warning > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #faebcc;
}
.panel-danger {
  border-color: #ebccd1;
}
.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #ebccd1;
}
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
}
.well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, .15);
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
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  filter: alpha(opacity=20);
  opacity: .2;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  filter: alpha(opacity=50);
  opacity: .5;
}
button.close {
  -webkit-appearance: none;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
}
.modal-open {
  overflow: hidden;
}
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.modal.fade .modal-dialog {
  -webkit-transition: -webkit-transform .3s ease-out;
     -moz-transition:    -moz-transform .3s ease-out;
       -o-transition:      -o-transform .3s ease-out;
          transition:         transform .3s ease-out;
  -webkit-transform: translate(0, -25%);
      -ms-transform: translate(0, -25%);
          transform: translate(0, -25%);
}
.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
          transform: translate(0, 0);
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  outline: none;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
}
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}
.modal-backdrop.fade {
  filter: alpha(opacity=0);
  opacity: 0;
}
.modal-backdrop.in {
  filter: alpha(opacity=50);
  opacity: .5;
}
.modal-header {
  min-height: 16.42857143px;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
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
  padding: 19px 20px 20px;
  margin-top: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.modal-footer .btn + .btn {
  margin-bottom: 0;
  margin-left: 5px;
}
.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
.modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
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
  z-index: 1030;
  display: block;
  font-size: 12px;
  line-height: 1.4;
  visibility: visible;
  filter: alpha(opacity=0);
  opacity: 0;
}
.tooltip.in {
  filter: alpha(opacity=90);
  opacity: .9;
}
.tooltip.top {
  padding: 5px 0;
  margin-top: -3px;
}
.tooltip.right {
  padding: 0 5px;
  margin-left: 3px;
}
.tooltip.bottom {
  padding: 5px 0;
  margin-top: 3px;
}
.tooltip.left {
  padding: 0 5px;
  margin-left: -3px;
}
.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #000;
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
  border-top-color: #000;
}
.tooltip.top-left .tooltip-arrow {
  bottom: 0;
  left: 5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.top-right .tooltip-arrow {
  right: 5px;
  bottom: 0;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}
.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000;
}
.tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-left .tooltip-arrow {
  top: 0;
  left: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-right .tooltip-arrow {
  top: 0;
  right: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1010;
  display: none;
  max-width: 276px;
  padding: 1px;
  text-align: left;
  white-space: normal;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
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
  padding: 8px 14px;
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
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
  content: "";
  border-width: 10px;
}
.popover.top > .arrow {
  bottom: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-color: #999;
  border-top-color: rgba(0, 0, 0, .25);
  border-bottom-width: 0;
}
.popover.top > .arrow:after {
  bottom: 1px;
  margin-left: -10px;
  content: " ";
  border-top-color: #fff;
  border-bottom-width: 0;
}
.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-right-color: #999;
  border-right-color: rgba(0, 0, 0, .25);
  border-left-width: 0;
}
.popover.right > .arrow:after {
  bottom: -10px;
  left: 1px;
  content: " ";
  border-right-color: #fff;
  border-left-width: 0;
}
.popover.bottom > .arrow {
  top: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999;
  border-bottom-color: rgba(0, 0, 0, .25);
}
.popover.bottom > .arrow:after {
  top: 1px;
  margin-left: -10px;
  content: " ";
  border-top-width: 0;
  border-bottom-color: #fff;
}
.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999;
  border-left-color: rgba(0, 0, 0, .25);
}
.popover.left > .arrow:after {
  right: 1px;
  bottom: -10px;
  content: " ";
  border-right-width: 0;
  border-left-color: #fff;
}
.carousel {
  position: relative;
}
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner > .item {
  position: relative;
  display: none;
  -webkit-transition: .6s ease-in-out left;
          transition: .6s ease-in-out left;
}
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  line-height: 1;
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
  bottom: 0;
  left: 0;
  width: 15%;
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
  filter: alpha(opacity=50);
  opacity: .5;
}
.carousel-control.left {
  background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, .5) 0%), color-stop(rgba(0, 0, 0, .0001) 100%));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control.right {
  right: 0;
  left: auto;
  background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, .0001) 0%), color-stop(rgba(0, 0, 0, .5) 100%));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control:hover,
.carousel-control:focus {
  color: #fff;
  text-decoration: none;
  filter: alpha(opacity=90);
  outline: none;
  opacity: .9;
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
}
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
  right: 50%;
}
.carousel-control .icon-prev,
.carousel-control .icon-next {
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
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
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none;
}
.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #000 \\9;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
  border-radius: 10px;
}
.carousel-indicators .active {
  width: 12px;
  height: 12px;
  margin: 0;
  background-color: #fff;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
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
    margin-left: -15px;
    font-size: 30px;
  }
  .carousel-caption {
    right: 20%;
    left: 20%;
    padding-bottom: 30px;
  }
  .carousel-indicators {
    bottom: 20px;
  }
}
.clearfix:before,
.clearfix:after,
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
  display: table;
  content: " ";
}
.clearfix:after,
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
  margin-right: auto;
  margin-left: auto;
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
.visible-print {
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
@media print {
  .hidden-print {
    display: none !important;
  }
}
/*# sourceMappingURL=bootstrap.css.map */
\r
body {\r
    background: url('../img/bg.png');\r
    background-position: top center;\r
    background-attachment: fixed;\r
    background-color: #fff;\r
    color: #000;\r
    font-family: 'Open Sans', sans-serif;\r
    font-size: 13px;\r
	overflow-x: hidden;\r
}\r
\r
header {\r
	margin-top: 50px;\r
}\r
\r
a {\r
    color: #000;\r
    text-decoration: none;\r
    outline: none;\r
    outline-offset: 0;\r
    padding-bottom: 3px;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
a:hover, \r
a:active, \r
a:focus {\r
    color: #000;\r
    text-decoration: none;\r
    outline: none;\r
    outline-offset: 0;\r
    border-bottom: 1px solid #000;\r
}\r
\r
\r
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\r
    font-family: 'Segoe UI', 'Open Sans', sans-serif;    \r
}\r
\r
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\r
    padding-right: 15px;\r
    padding-left: 15px;\r
}\r
\r
.title {\r
    font-size: larger;\r
    font-weight: bold;\r
    text-transform: uppercase;\r
    padding-left: 0px;\r
}\r
\r
.title:hover {\r
    padding-left: 0px !important;\r
}\r
\r
.title .glyphicon {\r
    background-color: rgba(0, 0, 0, 0.75);\r
    color: #fff;\r
    left: -110px;\r
    padding: 10px;\r
    -webkit-border-radius: 20px;\r
    -moz-border-radius: 20px;\r
    border-radius: 20px;\r
    font-size: smaller;\r
}\r
\r
hr {\r
    margin-top: 10px;\r
    margin-bottom: 15px;\r
    border: 0;\r
    border-top: 3px solid rgba(0, 0, 0, 0.1);\r
}\r
\r
hr.empty {\r
    padding: 7px 0;\r
    border: 0;\r
}\r
\r
strong {\r
    font-size: larger;\r
    font-weight: normal;\r
}\r
\r
\r
.progress {\r
    background-color: rgba(0, 0, 0, 0.05);\r
    height: 7px;\r
    margin-left: 9px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
.progress-bar {\r
    width: 0;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-box-shadow: none;\r
    -moz-box-shadow: none;\r
    box-shadow: none;\r
    -webkit-transition: width 3s ease;\r
    -moz-transition: width 3s ease;\r
    transition: width 3s ease;\r
}\r
\r
.progress-bar-success {\r
    background-color: #ffa700;\r
}\r
\r
.annotation {\r
    float: right;\r
    opacity: .75;\r
    font-style: italic;\r
}\r
\r
.chart {\r
    position: relative;\r
    display: inline-block;\r
    width: 110px;\r
    height: 110px;\r
    margin-top: 25px;\r
    margin-bottom: 50px;\r
    margin-right: 5%;\r
    text-align: center;\r
}\r
\r
.chart canvas {\r
    position: absolute;\r
    top: 35px;\r
    left: 0;\r
}\r
\r
.percent {\r
    display: inline-block;\r
    line-height: 140px;\r
    z-index: 2;\r
    opacity: .75;\r
    font-style: italic;\r
}\r
\r
.percent:after {\r
    content: '%';\r
    margin-left: 0.1em;\r
}\r
\r
.skill {\r
    display: block;\r
}\r
\r
ul {\r
    padding: 10px 0 0 13px;\r
    margin: 0;\r
    border-left: 3px solid rgba(0, 0, 0, 0.05);\r
}\r
\r
\r
ul li {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzNBNzYwM0Y5NzE4MTFFM0IxNUFEQzNDMjE2Qzc0NEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzNBNzYwNDA5NzE4MTFFM0IxNUFEQzNDMjE2Qzc0NEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozM0E3NjAzRDk3MTgxMUUzQjE1QURDM0MyMTZDNzQ0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozM0E3NjAzRTk3MTgxMUUzQjE1QURDM0MyMTZDNzQ0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqkh2kMAAAD4SURBVHjajJM5C8JAEIWzG2+iYpEoiJWdnf7/32Aj2NjYGgVPFDQeb+StjItGBz7ILvN2zpjg3QyIQRs0QBFcwA4swBLctbOzKhiAevDd9mAKTnIIlXAIakG+lUECViCzjC4RS8F/VqK/CVlf13OQ+uZgxnqlzsjL4CTiPtPWQhEdKZL61hToB0L7oUEpuFHouPJeW2Q5Dm1bNY67+t56fgXLOWprfmmUf//s9t67lFFYtQeG58TzO7g5x7oWUGHdZ9ACPdDxxHP38ujHZn3atLGLvGFa4R9CyWYivXLOGVeuyXnmRZy43TY5f1XEMWYUpeT1Vz0EGAC/GjlN8dYq7QAAAABJRU5ErkJggg==");\r
    padding: 10px 0 10px 27px;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
ul li:hover {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUEzQTFENTg5NzFDMTFFMzlDMURCMzA1OUIwRkY3RjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUEzQTFENTk5NzFDMTFFMzlDMURCMzA1OUIwRkY3RjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQTNBMUQ1Njk3MUMxMUUzOUMxREIzMDU5QjBGRjdGMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQTNBMUQ1Nzk3MUMxMUUzOUMxREIzMDU5QjBGRjdGMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkF2Tn4AAADtSURBVHjanJNLDgFBEIZrJsMJcAAXsCDBnMBGhAVtMaebhSHBMZCwcAAO4HEBk2h/JTXDots8KvlSnVT/Xd3VVY7WmhJztuTCzcAc9EAd3MEeLMBSj+md7k/EEDbhVqBNdjuBKQ64pmIR7kCDsu0G+nyAQxvNVz2ADuW3I+iyUBUUkuxXLA6onAXun6wTUBFvsha/WVuCVRQlRjE9rGND/MWZHxbxEELOPLLEn55UbmAIrjPefObMYcmChSyOJDsV/OfIlV5V0jmUs8MU6zgzYXGB86V3KaO3fdn/HQzDVPGA1LiqyTWZ36n6CDAA+4hJtP39L6kAAAAASUVORK5CYII=");\r
    padding-left: 40px !important;\r
}\r
\r
.static:hover {\r
    padding-left: 27px !important;\r
}\r
\r
ul li p {\r
    padding-left: 8px;\r
}\r
\r
ul .note {\r
    display: inline-block;\r
    margin: 8px;\r
    opacity: .75;\r
    text-transform: uppercase;\r
}\r
\r
ul .description {\r
    opacity: .75;\r
}\r
\r
.title {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDRGNjMzNkI5N0U4MTFFMzkwRjVDMkJBNzczOEJGMzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDRGNjMzNkM5N0U4MTFFMzkwRjVDMkJBNzczOEJGMzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NEY2MzM2OTk3RTgxMUUzOTBGNUMyQkE3NzM4QkYzNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NEY2MzM2QTk3RTgxMUUzOTBGNUMyQkE3NzM4QkYzNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pre7tSgAAACiSURBVHjajJLBDYAgDEXbEjw4gJvo2f3dwxE8giWi+SJUmnwDlFewHyaila44VJsqUjtYNavGNBFIjDnBPeANHx0FPmDinH521aTyedHn+W6B6RfZ2BBgLCWYeuNgsbwBg6jWVKwYcyI0GhZKN6TYYNn0yUulq/Tj8xOuYsdggOjCA1vdjnDiy0a2fASw6fNigOYLkw4QbXw9ZekAmwVOAQYASO4yZdH94skAAAAASUVORK5CYII=") !important;\r
}\r
\r
.title:hover {\r
    padding-left: 0px !important;\r
}\r
\r
/* Top icons ------------------------------------------------- */\r
\r
.top-icons {\r
	position: fixed;\r
    top: 50px;\r
    left: 47px;\r
	width: 100%;\r
}\r
\r
.top-menu {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-menu:hover {\r
    background-color: #00ce08;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
.top-download-resume {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-download-resume:hover {\r
    background-color: #0093ff;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
.top-contact {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-contact:hover {\r
    background-color: #ff003b;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
/* Nav ------------------------------------------------- */\r
\r
nav {\r
    position: fixed;\r
    top: 33%;\r
    left: 50px;\r
    z-index: 999;\r
}\r
\r
nav ul {\r
    padding: 10px 0 0 10px;\r
    margin: 0px;\r
    border-left: 4px solid rgba(0, 0, 0, 0.05);\r
}\r
\r
nav ul li:first-child {\r
    margin-top: -25px;\r
}\r
\r
nav ul li {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTk2QTQ0RUM5NzI4MTFFM0E4NTNBRTI0RDU0Q0U4NjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTk2QTQ0RUQ5NzI4MTFFM0E4NTNBRTI0RDU0Q0U4NjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOTZBNDRFQTk3MjgxMUUzQTg1M0FFMjRENTRDRTg2MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOTZBNDRFQjk3MjgxMUUzQTg1M0FFMjRENTRDRTg2MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhgvmygAAACVSURBVHjaYmRAAFEglgBiXij/MxC/AOLXIA4jVFAeiBUZsIP7QPyQGUiIALE6A24gCMRfQApVgZgTKgiy5jbUSpAcN1SclQWJAwJPgfgDkpNEoTQ3E5o1jEiKGJElQCZ+BWI2KF8KSQ6Z/ZUR6hkdBvzgCsjB36AcARyKHgDxM2Yo5wPUCcxQ/BeIP0LD8BlIAUCAAQAEBBbvNAJsuwAAAABJRU5ErkJggg==");\r
    padding: 5px 15px;\r
    font-size: 13px;\r
    text-transform: uppercase;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
nav ul li:hover {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEzNjNDNzM5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEzNjNDNzQ5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTM2M0M3MTk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTM2M0M3Mjk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr961YUAAABVSURBVHjaYmBAgBAg3gzEz6B4M1QMBdQC8X8cuBamyB+PIhgGqWHYTYRCkBqGl0QofMbEQCQAKbxEhLqrJHkGBOrwKKpDNx4W4E+A+CmUHQqTBAgwABdMO6kaYAQsAAAAAElFTkSuQmCC");\r
    padding-left: 25px !important;\r
    color: #000;\r
}\r
\r
nav ul li:hover a {\r
    color: #000;\r
}\r
\r
nav ul li.active {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEzNjNDNzM5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEzNjNDNzQ5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTM2M0M3MTk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTM2M0M3Mjk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr961YUAAABVSURBVHjaYmBAgBAg3gzEz6B4M1QMBdQC8X8cuBamyB+PIhgGqWHYTYRCkBqGl0QofMbEQCQAKbxEhLqrJHkGBOrwKKpDNx4W4E+A+CmUHQqTBAgwABdMO6kaYAQsAAAAAElFTkSuQmCC");\r
    color: #000;\r
}\r
\r
nav a {\r
    border-bottom: 0;\r
}\r
\r
nav a:hover, \r
nav a:active, \r
nav a:focus {\r
    border-bottom: 0;\r
}\r
\r
nav li a {\r
    border-bottom: 0;\r
    color: rgba(0, 0, 0, 0.5);\r
}\r
\r
nav .active a {\r
    color: #000;\r
    font-weight: bold;\r
}\r
\r
#mini-nav {\r
    background-color: #fff;\r
    position: fixed;\r
    width: 100%;\r
    top: 0;\r
    left: 0;\r
    text-align: center;\r
    font-weight: bold;\r
}\r
\r
#mini-nav ul {\r
    width: 100%;\r
    border: 0;\r
    padding: 7px 0 10px 0;\r
    \r
}\r
\r
#mini-nav ul li {\r
    list-style-image: none;\r
    padding: 0 !important;\r
}\r
\r
#mini-nav ul li:first-child {\r
    margin-top: 0;\r
}\r
\r
#mini-nav .dropdown-menu {\r
    margin: 0;\r
    font-size: 14px;\r
    list-style: none;\r
    background-color: #fff;\r
    border: 0;\r
    border-radius: 0;\r
    -webkit-box-shadow: none;\r
    box-shadow: none;\r
}\r
\r
.dropdown-menu > .active > a, \r
.dropdown-menu > .active > a:hover, \r
.dropdown-menu > .active > a:focus {\r
    background-color: #000;\r
}\r
\r
/* Header ------------------------------------------------- */\r
\r
.face {\r
    height: 200px;\r
    width: 200px;\r
    border-radius: 50%;\r
}\r
\r
.header-name {\r
    background-color: #000;\r
    padding: 5px 17px;\r
    display: inline-block;\r
    color: #fff;\r
    font-size: 18px;\r
    font-weight: 700;\r
    text-transform: uppercase;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-left: 3px solid #f00;\r
    border-right: 3px solid #0045ff;\r
}\r
\r
.header-title {\r
    font-size: 16px;\r
}\r
\r
.header-subtitle {\r
    padding-top: 25px;\r
    font-style: italic;\r
    margin-bottom: 100px;\r
}\r
\r
/* Profile ------------------------------------------------- */\r
\r
.profile .title .glyphicon{\r
    background-color: #9300ff;\r
}\r
\r
/* Work experience ------------------------------------------------- */\r
\r
.work-experience .title .glyphicon{\r
    background-color: #00a7ff;\r
}\r
\r
/* Education ------------------------------------------------- */\r
\r
.education .title .glyphicon{\r
    background-color: #07b500;\r
}\r
\r
/* Professional skills ------------------------------------------------- */\r
\r
.professional-skills .title .glyphicon{\r
    background-color: #ffa700;\r
}\r
\r
/* Personal skills ------------------------------------------------- */\r
\r
.personal-skills .title .glyphicon{\r
    background-color: #00aca5;\r
}\r
\r
/* Interests ------------------------------------------------- */\r
\r
.interests .title .glyphicon{\r
    background-color: #f00;\r
}\r
\r
/* Portfolio ------------------------------------------------ */\r
\r
.portfolio .title .glyphicon{\r
    background-color: #0089ff;\r
}\r
\r
.portfolio img {\r
    width: 100px;\r
    margin-right: 5px;\r
    margin-bottom: 5px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.portfolio img:hover {\r
    opacity: .75;\r
}\r
\r
.portfolio img:first-child {\r
    margin-left: 8px;\r
}\r
\r
.dismiss {\r
    position: relative;\r
    background-color: rgba(0, 0, 0, 0.25);\r
    top: -4px;\r
    left: 100%;\r
    color: #fff;\r
    padding: 5px 7px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0 !important;\r
    z-index: -1;\r
    -webkit-transition: all 0.3s ease;\r
    -moz-transition: all 0.3s ease;\r
    transition: all 0.3s ease;\r
}\r
\r
.dismiss:hover {\r
    background-color: #fff;\r
}\r
\r
.modal {\r
	text-align: center;\r
}\r
\r
.modal img {\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
/* Contact Form ------------------------------------------------ */\r
\r
.contact .title .glyphicon{\r
    background-color: #00c60f;\r
}\r
\r
.contact ul li:hover {\r
    padding-left: 27px;\r
}\r
\r
form {\r
    margin-left: 9px;\r
}\r
\r
.contact-on {\r
    position: fixed;\r
    bottom: 50px;\r
    background: #202020;\r
    height: auto;\r
    width: 100%;\r
    padding-top: 35px;\r
    padding-bottom: 25px;\r
    z-index: 999;\r
    display: none;\r
}\r
\r
.form-control {\r
    display: block;\r
    width: 100%;\r
    height: 35px;\r
    padding: 6px 15px;\r
    font-size: 12px;\r
    color: #000;\r
    background-color: rgba(255, 255, 255, 0.75);\r
    background-image: none;\r
    border: 0;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-box-shadow: none;\r
    -moz-box-shadow: none;\r
    box-shadow: none;\r
}\r
\r
.form-control:focus {\r
    border: 0;\r
    background-color: #fff;\r
    color: #000;\r
}\r
\r
textarea.form-control {\r
    height: 85px;\r
    resize: none;\r
}\r
\r
.input-group-addon {\r
    color: #000;\r
    background-color: rgba(0, 0, 0, 0.05);\r
    border: 0;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
form .glyphicon {\r
    opacity: .25;\r
}\r
\r
.btn-success {\r
    font-size: 12px;\r
    color: #000;\r
    background-color: rgba(255, 255, 255, 0.5);\r
    border-color: rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.btn .glyphicon {\r
    margin-right: 7px;\r
    opacity: 1;\r
}\r
\r
.btn-success:hover, \r
.btn-success:focus, \r
.btn-success:active, \r
.btn-success.active {\r
    color: #fff;\r
    background-color: #15b900;\r
    border-color: rgba(0, 0, 0, 0.1);\r
}\r
\r
/* Up ------------------------------------------------ */\r
\r
.contact .title.up .glyphicon{\r
    background-color: #ffad00;\r
}\r
\r
.up {\r
	margin-bottom: 100px;\r
    cursor: pointer;\r
}\r
`,"documentation/assets/blueprint-css/ie.css":`/* -----------------------------------------------------------------------


 Blueprint CSS Framework 0.9
 http://blueprintcss.org

   * Copyright (c) 2007-Present. See LICENSE for more info.
   * See README for instructions on how to use Blueprint.
   * For credits and origins, see AUTHORS.
   * This is a compressed file. See the sources in the 'src' directory.

----------------------------------------------------------------------- */

/* ie.css */
body {text-align:center;}
.container {text-align:left;}
* html .column, * html div.span-1, * html div.span-2, * html div.span-3, * html div.span-4, * html div.span-5, * html div.span-6, * html div.span-7, * html div.span-8, * html div.span-9, * html div.span-10, * html div.span-11, * html div.span-12, * html div.span-13, * html div.span-14, * html div.span-15, * html div.span-16, * html div.span-17, * html div.span-18, * html div.span-19, * html div.span-20, * html div.span-21, * html div.span-22, * html div.span-23, * html div.span-24 {overflow-x:hidden;}
* html legend {margin:0px -8px 16px 0;padding:0;}
ol {margin-left:2em;}
sup {vertical-align:text-top;}
sub {vertical-align:text-bottom;}
html>body p code {*white-space:normal;}
hr {margin:-8px auto 11px;}
img {-ms-interpolation-mode:bicubic;}
.clearfix, .container {display:inline-block;}
* html .clearfix, * html .container {height:1%;}
fieldset {padding-top:0;}
input.text, input.title {background-color:#fff;border:1px solid #bbb;}
input.text:focus, input.title:focus {border-color:#666;}
input.text, input.title, textarea, select {margin:0.5em 0;}
input.checkbox, input.radio {position:relative;top:.25em;}
form.inline div, form.inline p {vertical-align:middle;}
form.inline label {position:relative;top:-0.25em;}
form.inline input.checkbox, form.inline input.radio, form.inline input.button, form.inline button {margin:0.5em 0;}
button, input.button {position:relative;top:0.25em;}`,"documentation/assets/blueprint-css/plugins/buttons/readme.txt":`Buttons

* Gives you great looking CSS buttons, for both <a> and <button>.
* Demo: particletree.com/features/rediscovering-the-button-element


Credits
----------------------------------------------------------------

* Created by Kevin Hale [particletree.com]
* Adapted for Blueprint by Olav Bjorkoy [bjorkoy.com]


Usage
----------------------------------------------------------------

1) Add this plugin to lib/settings.yml.
   See compress.rb for instructions.

2) Use the following HTML code to place the buttons on your site:

	<button type="submit" class="button positive">
	  <img src="css/blueprint/plugins/buttons/icons/tick.png" alt=""/> Save
	</button>

	<a class="button" href="/password/reset/">
	  <img src="css/blueprint/plugins/buttons/icons/key.png" alt=""/> Change Password
	</a>

	<a href="#" class="button negative">
	  <img src="css/blueprint/plugins/buttons/icons/cross.png" alt=""/> Cancel
	</a>
`,"documentation/assets/blueprint-css/plugins/buttons/screen.css":`/* -------------------------------------------------------------- 
  
   buttons.css
   * Gives you some great CSS-only buttons.
   
   Created by Kevin Hale [particletree.com]
   * particletree.com/features/rediscovering-the-button-element

   See Readme.txt in this folder for instructions.

-------------------------------------------------------------- */

a.button, button {
  display:block;
  float:left;
  margin: 0.7em 0.5em 0.7em 0;
  padding:5px 10px 5px 7px;   /* Links */
  
  border:1px solid #dedede;
  border-top:1px solid #eee;
  border-left:1px solid #eee;

  background-color:#f5f5f5;
  font-family:"Lucida Grande", Tahoma, Arial, Verdana, sans-serif;
  font-size:100%;
  line-height:130%;
  text-decoration:none;
  font-weight:bold;
  color:#565656;
  cursor:pointer;
}
button {
  width:auto;
  overflow:visible;
  padding:4px 10px 3px 7px;   /* IE6 */
}
button[type] {
  padding:4px 10px 4px 7px;   /* Firefox */
  line-height:17px;           /* Safari */
}
*:first-child+html button[type] {
  padding:4px 10px 3px 7px;   /* IE7 */
}
button img, a.button img{
  margin:0 3px -3px 0 !important;
  padding:0;
  border:none;
  width:16px;
  height:16px;
  float:none;
}


/* Button colors
-------------------------------------------------------------- */

/* Standard */
button:hover, a.button:hover{
  background-color:#dff4ff;
  border:1px solid #c2e1ef;
  color:#336699;
}
a.button:active{
  background-color:#6299c5;
  border:1px solid #6299c5;
  color:#fff;
}

/* Positive */
body .positive {
  color:#529214;
}
a.positive:hover, button.positive:hover {
  background-color:#E6EFC2;
  border:1px solid #C6D880;
  color:#529214;
}
a.positive:active {
  background-color:#529214;
  border:1px solid #529214;
  color:#fff;
}

/* Negative */
body .negative {
  color:#d12f19;
}
a.negative:hover, button.negative:hover {
  background-color:#fbe3e4;
  border:1px solid #fbc2c4;
  color:#d12f19;
}
a.negative:active {
  background-color:#d12f19;
  border:1px solid #d12f19;
  color:#fff;
}
`,"documentation/assets/blueprint-css/plugins/fancy-type/readme.txt":`Fancy Type

* Gives you classes to use if you'd like some 
  extra fancy typography. 

Credits and instructions are specified above each class
in the fancy-type.css file in this directory.


Usage
----------------------------------------------------------------

1) Add this plugin to lib/settings.yml.
   See compress.rb for instructions.
`,"documentation/assets/blueprint-css/plugins/fancy-type/screen.css":`/* -------------------------------------------------------------- \r
  \r
   fancy-type.css\r
   * Lots of pretty advanced classes for manipulating text.\r
   \r
   See the Readme file in this folder for additional instructions.\r
\r
-------------------------------------------------------------- */\r
\r
/* Indentation instead of line shifts for sibling paragraphs. */\r
   /* p + p { text-indent:2em; margin-top:-1.5em; } */\r
   form p + p  { text-indent: 0; } /* Don't want this in forms. */\r
   \r
\r
/* For great looking type, use this code instead of asdf: \r
   <span class="alt">asdf</span>  \r
   Best used on prepositions and ampersands. */\r
  \r
.alt { \r
  color: #666; \r
  font-family: "Warnock Pro", "Goudy Old Style","Palatino","Book Antiqua", Georgia, serif; \r
  font-style: italic;\r
  font-weight: normal;\r
}\r
\r
\r
/* For great looking quote marks in titles, replace "asdf" with:\r
   <span class="dquo">&#8220;</span>asdf&#8221;\r
   (That is, when the title starts with a quote mark). \r
   (You may have to change this value depending on your font size). */  \r
   \r
.dquo { margin-left: -.5em; } \r
\r
\r
/* Reduced size type with incremental leading\r
   (http://www.markboulton.co.uk/journal/comments/incremental_leading/)\r
\r
   This could be used for side notes. For smaller type, you don't necessarily want to \r
   follow the 1.5x vertical rhythm -- the line-height is too much. \r
   \r
   Using this class, it reduces your font size and line-height so that for \r
   every four lines of normal sized type, there is five lines of the sidenote. eg:\r
\r
   New type size in em's:\r
     10px (wanted side note size) / 12px (existing base size) = 0.8333 (new type size in ems)\r
\r
   New line-height value:\r
     12px x 1.5 = 18px (old line-height)\r
     18px x 4 = 72px \r
     72px / 5 = 14.4px (new line height)\r
     14.4px / 10px = 1.44 (new line height in em's) */\r
\r
p.incr, .incr p {\r
	font-size: 10px;\r
	line-height: 1.44em;  \r
	margin-bottom: 1.5em;\r
}\r
\r
\r
/* Surround uppercase words and abbreviations with this class.\r
   Based on work by J\xF8rgen Arnor G\xE5rds\xF8 Lom [http://twistedintellect.com/] */\r
   \r
.caps { \r
  font-variant: small-caps; \r
  letter-spacing: 1px; \r
  text-transform: lowercase; \r
  font-size:1.2em;\r
  line-height:1%;\r
  font-weight:bold;\r
  padding:0 2px;\r
}\r
`,"documentation/assets/blueprint-css/plugins/link-icons/readme.txt":`Link Icons
* Icons for links based on protocol or file type.

This is not supported in IE versions < 7.


Credits
----------------------------------------------------------------

* Marc Morgan
* Olav Bjorkoy  [bjorkoy.com]


Usage
----------------------------------------------------------------

1) Add this line to your HTML:
	 <link rel="stylesheet" href="css/blueprint/plugins/link-icons/screen.css" type="text/css" media="screen, projection">	`,"documentation/assets/blueprint-css/plugins/link-icons/screen.css":`/* -------------------------------------------------------------- 
  
   link-icons.css
   * Icons for links based on protocol or file type.
   
   See the Readme file in this folder for additional instructions.

-------------------------------------------------------------- */

/* Use this class if a link gets an icon when it shouldn't. */
body a.noicon { 
	background:transparent none !important; 
	padding:0 !important; 
	margin:0 !important; 
}

/* Make sure the icons are not cut */
a[href^="http:"], a[href^="mailto:"], a[href^="http:"]:visited, 
a[href$=".pdf"], a[href$=".doc"], a[href$=".xls"], a[href$=".rss"], 
a[href$=".rdf"], a[href^="aim:"] {
  padding:2px 22px 2px 0;
  margin:-2px 0;
  background-repeat: no-repeat;
  background-position: right center;
}

/* External links */
a[href^="http:"]          { background-image: url(icons/external.png); } 
a[href^="mailto:"]        { background-image: url(icons/email.png); }
a[href^="http:"]:visited  { background-image: url(icons/visited.png); }

/* Files */
a[href$=".pdf"]   { background-image: url(icons/pdf.png); }  
a[href$=".doc"]   { background-image: url(icons/doc.png); }  
a[href$=".xls"]   { background-image: url(icons/xls.png); }  
 
/* Misc */
a[href$=".rss"], 
a[href$=".rdf"]   { background-image: url(icons/feed.png); }
a[href^="aim:"]   { background-image: url(icons/im.png); }`,"documentation/assets/blueprint-css/plugins/rtl/readme.txt":`RTL
* Mirrors Blueprint, so it can be used with Right-to-Left languages.

By Ran Yaniv Hartstein, ranh.co.il

Usage
----------------------------------------------------------------

1) Add this line to your HTML:
   <link rel="stylesheet" href="css/blueprint/plugins/rtl/screen.css" type="text/css" media="screen, projection">	`,"documentation/assets/blueprint-css/plugins/rtl/screen.css":`/* --------------------------------------------------------------

   rtl.css
   * Mirrors Blueprint for left-to-right languages
   
   By Ran Yaniv Hartstein [ranh.co.il]
   
-------------------------------------------------------------- */

body .container { direction: rtl; }
body .column {
  float: right;
  margin-right: 0;
  margin-left: 10px;
}

body div.last { margin-left: 0; }
body table .last { padding-left: 0; }

body .append-1   { padding-right: 0; padding-left: 40px; }  
body .append-2   { padding-right: 0; padding-left: 80px; }
body .append-3   { padding-right: 0; padding-left: 120px; }
body .append-4   { padding-right: 0; padding-left: 160px; }
body .append-5   { padding-right: 0; padding-left: 200px; }
body .append-6   { padding-right: 0; padding-left: 240px; }
body .append-7   { padding-right: 0; padding-left: 280px; }
body .append-8   { padding-right: 0; padding-left: 320px; }
body .append-9   { padding-right: 0; padding-left: 360px; }
body .append-10  { padding-right: 0; padding-left: 400px; }
body .append-11  { padding-right: 0; padding-left: 440px; }
body .append-12  { padding-right: 0; padding-left: 480px; }
body .append-13  { padding-right: 0; padding-left: 520px; }
body .append-14  { padding-right: 0; padding-left: 560px; }
body .append-15  { padding-right: 0; padding-left: 600px; }
body .append-16  { padding-right: 0; padding-left: 640px; }
body .append-17  { padding-right: 0; padding-left: 680px; }
body .append-18  { padding-right: 0; padding-left: 720px; }
body .append-19  { padding-right: 0; padding-left: 760px; }
body .append-20  { padding-right: 0; padding-left: 800px; }
body .append-21  { padding-right: 0; padding-left: 840px; }
body .append-22  { padding-right: 0; padding-left: 880px; }
body .append-23  { padding-right: 0; padding-left: 920px; }

body .prepend-1   { padding-left: 0; padding-right: 40px; }  
body .prepend-2   { padding-left: 0; padding-right: 80px; }
body .prepend-3   { padding-left: 0; padding-right: 120px; }
body .prepend-4   { padding-left: 0; padding-right: 160px; }
body .prepend-5   { padding-left: 0; padding-right: 200px; }
body .prepend-6   { padding-left: 0; padding-right: 240px; }
body .prepend-7   { padding-left: 0; padding-right: 280px; }
body .prepend-8   { padding-left: 0; padding-right: 320px; }
body .prepend-9   { padding-left: 0; padding-right: 360px; }
body .prepend-10  { padding-left: 0; padding-right: 400px; }
body .prepend-11  { padding-left: 0; padding-right: 440px; }
body .prepend-12  { padding-left: 0; padding-right: 480px; }
body .prepend-13  { padding-left: 0; padding-right: 520px; }
body .prepend-14  { padding-left: 0; padding-right: 560px; }
body .prepend-15  { padding-left: 0; padding-right: 600px; }
body .prepend-16  { padding-left: 0; padding-right: 640px; }
body .prepend-17  { padding-left: 0; padding-right: 680px; }
body .prepend-18  { padding-left: 0; padding-right: 720px; }
body .prepend-19  { padding-left: 0; padding-right: 760px; }
body .prepend-20  { padding-left: 0; padding-right: 800px; }
body .prepend-21  { padding-left: 0; padding-right: 840px; }
body .prepend-22  { padding-left: 0; padding-right: 880px; }
body .prepend-23  { padding-left: 0; padding-right: 920px; }

body .border {
  padding-right: 0;
  padding-left: 4px;
  margin-right: 0;
  margin-left: 5px;
  border-right: none;
  border-left: 1px solid #eee;
}

body .colborder {
  padding-right: 0;
  padding-left: 24px;
  margin-right: 0;
  margin-left: 25px;
  border-right: none;
  border-left: 1px solid #eee;
}

body .pull-1  { margin-left: 0; margin-right: -40px; }
body .pull-2  { margin-left: 0; margin-right: -80px; }
body .pull-3  { margin-left: 0; margin-right: -120px; }
body .pull-4  { margin-left: 0; margin-right: -160px; }

body .push-0  { margin: 0 18px 0 0; }
body .push-1  { margin: 0 18px 0 -40px; }
body .push-2  { margin: 0 18px 0 -80px; }
body .push-3  { margin: 0 18px 0 -120px; }
body .push-4  { margin: 0 18px 0 -160px; }
body .push-0, body .push-1, body .push-2,
body .push-3, body .push-4 { float: left; }


/* Typography with RTL support */
body h1,body h2,body h3,
body h4,body h5,body h6 { font-family: Arial, sans-serif; }
html body { font-family: Arial, sans-serif;  }
body pre,body code,body tt { font-family: monospace; }

/* Mirror floats and margins on typographic elements */
body p img { float: right; margin: 1.5em 0 1.5em 1.5em; }
body dd, body ul, body ol { margin-left: 0; margin-right: 1.5em;}
body td, body th { text-align:right; }`,"documentation/assets/blueprint-css/print.css":`/* -----------------------------------------------------------------------


 Blueprint CSS Framework 0.9
 http://blueprintcss.org

   * Copyright (c) 2007-Present. See LICENSE for more info.
   * See README for instructions on how to use Blueprint.
   * For credits and origins, see AUTHORS.
   * This is a compressed file. See the sources in the 'src' directory.

----------------------------------------------------------------------- */

/* print.css */
body {line-height:1.5;font-family:"Helvetica Neue", Arial, Helvetica, sans-serif;color:#000;background:none;font-size:10pt;}
.container {background:none;}
hr {background:#ccc;color:#ccc;width:100%;height:2px;margin:2em 0;padding:0;border:none;}
hr.space {background:#fff;color:#fff;}
h1, h2, h3, h4, h5, h6 {font-family:"Helvetica Neue", Arial, "Lucida Grande", sans-serif;}
code {font:.9em "Courier New", Monaco, Courier, monospace;}
img {float:left;margin:1.5em 1.5em 1.5em 0;}
a img {border:none;}
p img.top {margin-top:0;}
blockquote {margin:1.5em;padding:1em;font-style:italic;font-size:.9em;}
.small {font-size:.9em;}
.large {font-size:1.1em;}
.quiet {color:#999;}
.hide {display:none;}
a:link, a:visited {background:transparent;font-weight:700;text-decoration:underline;}
a:link:after, a:visited:after {content:" (" attr(href) ")";font-size:90%;}`,"documentation/assets/blueprint-css/screen.css":`/* -----------------------------------------------------------------------


 Blueprint CSS Framework 0.9
 http://blueprintcss.org

   * Copyright (c) 2007-Present. See LICENSE for more info.
   * See README for instructions on how to use Blueprint.
   * For credits and origins, see AUTHORS.
   * This is a compressed file. See the sources in the 'src' directory.

----------------------------------------------------------------------- */

/* reset.css */
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, code, del, dfn, em, img, q, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {margin:0;padding:0;border:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;}
body {line-height:1.5;}
table {border-collapse:separate;border-spacing:0;}
caption, th, td {text-align:left;font-weight:normal;}
table, td, th {vertical-align:middle;}
blockquote:before, blockquote:after, q:before, q:after {content:"";}
blockquote, q {quotes:"" "";}
a img {border:none;}

/* custom.css */
.info { background:#fafcfc; }
.borderTop { border-top: 1px solid #eee;}
.append-0 {padding-right:20px;}

/* typography.css */
body {font-size:80%;color:#222;background:#fff;font-family:"Helvetica Neue", Arial, Helvetica, sans-serif;padding-top:30px;}
h1, h2, h3, h4, h5, h6 {font-weight:normal;color:#111;}
h1 {font-size:2.6em;line-height:1;margin-bottom:0.5em;}
h2 {font-size:1.9em;margin-bottom:0.75em;}
h3 {font-size:1.4em;line-height:1;margin-bottom:1em;}
h4 {font-size:1.1em;line-height:1.25;margin-bottom:1.25em;}
h5 {font-size:1em;font-weight:bold;margin-bottom:1.5em;}
h6 {font-size:1em;font-weight:bold;}
h1 img, h2 img, h3 img, h4 img, h5 img, h6 img {margin:0;}
p {margin:0 0 1.5em;line-height:1.65em;}
p img.left {float:left;margin:1.5em 1.5em 1.5em 0;padding:0;}
p img.right {float:right;margin:1.5em 0 1.5em 1.5em;}
a:focus, a:hover {color:#000;}
a {color:#009;text-decoration:underline;}
blockquote {margin:1.5em;color:#666;font-style:italic;}
strong {font-weight:bold;}
em, dfn {font-style:italic;}
dfn {font-weight:bold;}
sup, sub {line-height:0;}
abbr, acronym {border-bottom:1px dotted #666;}
address {margin:0 0 1.5em;font-style:italic;}
del {color:#666;}
pre {margin:1.5em 0;white-space:pre;}
pre, code, tt {font:13px 'andale mono', 'lucida console', monospace;line-height:1.5;}
li ul, li ol {margin:0 1.5em;}
ul, ol {margin:0 1.5em 1.5em 3.5em;}
ul {list-style-type:disc;}
ol {list-style-type:decimal;}
ol.alpha {list-style:upper-alpha;}
dl {margin:0 0 1.5em 0;}
dl dt {font-weight:bold;}
dd {margin-left:1.5em;}
table {margin-bottom:1.4em;width:100%;}
th {font-weight:bold;}
thead th {background:#c3d9ff;}
th, td, caption {padding:4px 10px 4px 5px;}
tr.even td {background:#e5ecf9;}
tfoot {font-style:italic;}
caption {background:#eee;}
.small {font-size:.85em;margin-bottom:1.875em;line-height:1.875em;}
.large {font-size:1.2em;line-height:2.5em;margin-bottom:1.25em;}
.hide {display:none;}
.quiet {color:#666;}
.loud {color:#000;}
.highlight {background:#ff0;}
.added {background:#060;color:#fff;}
.removed {background:#900;color:#fff;}
.first {margin-left:0;padding-left:0;}
.last {margin-right:0;padding-right:0;}
.top {margin-top:0;padding-top:0;}
.bottom {margin-bottom:0;padding-bottom:0;}
.center {text-align:center;}

/* forms.css */
label {font-weight:bold;}
fieldset {padding:1.4em;margin:0 0 1.5em 0;border:1px solid #ccc;}
legend {font-weight:bold;font-size:1.2em;}
input[type=text], input[type=password], input.text, input.title, textarea, select {background-color:#fff;border:1px solid #bbb;}
input[type=text]:focus, input[type=password]:focus, input.text:focus, input.title:focus, textarea:focus, select:focus {border-color:#666;}
input[type=text], input[type=password], input.text, input.title, textarea, select {margin:0.5em 0;}
input.text, input.title {width:300px;padding:5px;}
input.title {font-size:1.5em;}
textarea {width:390px;height:250px;padding:5px;}
input[type=checkbox], input[type=radio], input.checkbox, input.radio {position:relative;top:.25em;}
form.inline {line-height:3;}
form.inline p {margin-bottom:0;}
.error, .notice, .success {padding:.8em;margin-bottom:1em;border:2px solid #ddd;}
.error {background:#FBE3E4;color:#8a1f11;border-color:#FBC2C4;}
.notice {background:#FFF6BF;color:#514721;border-color:#FFD324;}
.success {background:#E6EFC2;color:#264409;border-color:#C6D880;}
.error a {color:#8a1f11;}
.notice a {color:#514721;}
.success a {color:#264409;}

/* grid.css */
.container {width:790px;margin:0 auto;}
.showgrid {background:url(src/grid.png);}
.column, div.span-1, div.span-2, div.span-3, div.span-4, div.span-5, div.span-6, div.span-7, div.span-8, div.span-9, div.span-10, div.span-11, div.span-12, div.span-13, div.span-14, div.span-15, div.span-16, div.span-17, div.span-18, div.span-19, div.span-20, div.span-21, div.span-22, div.span-23, div.span-24 {float:left;margin-right:10px;}
.last, div.last {margin-right:0;}
.span-1 {width:30px;}
.span-2 {width:70px;}
.span-3 {width:110px;}
.span-4 {width:150px;}
.span-5 {width:190px;}
.span-6 {width:230px;}
.span-7 {width:270px;}
.span-8 {width:310px;}
.span-9 {width:350px;}
.span-10 {width:390px;}
.span-11 {width:430px;}
.span-12 {width:470px;}
.span-13 {width:510px;}
.span-14 {width:550px;}
.span-15 {width:590px;}
.span-16 {width:630px;}
.span-17 {width:670px;}
.span-18 {width:710px;}
.span-19 {width:750px;}
.span-20 {width:790px;}
.span-21 {width:830px;}
.span-22 {width:870px;}
.span-23 {width:910px;}
.span-24, div.span-24 {width:950px;margin:0;}
input.span-1, textarea.span-1, input.span-2, textarea.span-2, input.span-3, textarea.span-3, input.span-4, textarea.span-4, input.span-5, textarea.span-5, input.span-6, textarea.span-6, input.span-7, textarea.span-7, input.span-8, textarea.span-8, input.span-9, textarea.span-9, input.span-10, textarea.span-10, input.span-11, textarea.span-11, input.span-12, textarea.span-12, input.span-13, textarea.span-13, input.span-14, textarea.span-14, input.span-15, textarea.span-15, input.span-16, textarea.span-16, input.span-17, textarea.span-17, input.span-18, textarea.span-18, input.span-19, textarea.span-19, input.span-20, textarea.span-20, input.span-21, textarea.span-21, input.span-22, textarea.span-22, input.span-23, textarea.span-23, input.span-24, textarea.span-24 {border-left-width:1px!important;border-right-width:1px!important;padding-left:5px!important;padding-right:5px!important;}
input.span-1, textarea.span-1 {width:18px!important;}
input.span-2, textarea.span-2 {width:58px!important;}
input.span-3, textarea.span-3 {width:98px!important;}
input.span-4, textarea.span-4 {width:138px!important;}
input.span-5, textarea.span-5 {width:178px!important;}
input.span-6, textarea.span-6 {width:218px!important;}
input.span-7, textarea.span-7 {width:258px!important;}
input.span-8, textarea.span-8 {width:298px!important;}
input.span-9, textarea.span-9 {width:338px!important;}
input.span-10, textarea.span-10 {width:378px!important;}
input.span-11, textarea.span-11 {width:418px!important;}
input.span-12, textarea.span-12 {width:458px!important;}
input.span-13, textarea.span-13 {width:498px!important;}
input.span-14, textarea.span-14 {width:538px!important;}
input.span-15, textarea.span-15 {width:578px!important;}
input.span-16, textarea.span-16 {width:618px!important;}
input.span-17, textarea.span-17 {width:658px!important;}
input.span-18, textarea.span-18 {width:698px!important;}
input.span-19, textarea.span-19 {width:738px!important;}
input.span-20, textarea.span-20 {width:778px!important;}
input.span-21, textarea.span-21 {width:818px!important;}
input.span-22, textarea.span-22 {width:858px!important;}
input.span-23, textarea.span-23 {width:898px!important;}
input.span-24, textarea.span-24 {width:938px!important;}
.append-1 {padding-right:40px;}
.append-2 {padding-right:80px;}
.append-3 {padding-right:120px;}
.append-4 {padding-right:160px;}
.append-5 {padding-right:200px;}
.append-6 {padding-right:240px;}
.append-7 {padding-right:280px;}
.append-8 {padding-right:320px;}
.append-9 {padding-right:360px;}
.append-10 {padding-right:400px;}
.append-11 {padding-right:440px;}
.append-12 {padding-right:480px;}
.append-13 {padding-right:520px;}
.append-14 {padding-right:560px;}
.append-15 {padding-right:600px;}
.append-16 {padding-right:640px;}
.append-17 {padding-right:680px;}
.append-18 {padding-right:720px;}
.append-19 {padding-right:760px;}
.append-20 {padding-right:800px;}
.append-21 {padding-right:840px;}
.append-22 {padding-right:880px;}
.append-23 {padding-right:920px;}
.prepend-1 {padding-left:40px;}
.prepend-2 {padding-left:80px;}
.prepend-3 {padding-left:120px;}
.prepend-4 {padding-left:160px;}
.prepend-5 {padding-left:200px;}
.prepend-6 {padding-left:240px;}
.prepend-7 {padding-left:280px;}
.prepend-8 {padding-left:320px;}
.prepend-9 {padding-left:360px;}
.prepend-10 {padding-left:400px;}
.prepend-11 {padding-left:440px;}
.prepend-12 {padding-left:480px;}
.prepend-13 {padding-left:520px;}
.prepend-14 {padding-left:560px;}
.prepend-15 {padding-left:600px;}
.prepend-16 {padding-left:640px;}
.prepend-17 {padding-left:680px;}
.prepend-18 {padding-left:720px;}
.prepend-19 {padding-left:760px;}
.prepend-20 {padding-left:800px;}
.prepend-21 {padding-left:840px;}
.prepend-22 {padding-left:880px;}
.prepend-23 {padding-left:920px;}
div.border {padding-right:4px;margin-right:5px;border-right:1px solid #eee;}
div.colborder {padding-right:24px;margin-right:25px;border-right:1px solid #eee;}
div.colborderTop {border-top:1px solid #eee;}
.pull-1 {margin-left:-40px;}
.pull-2 {margin-left:-80px;}
.pull-3 {margin-left:-120px;}
.pull-4 {margin-left:-160px;}
.pull-5 {margin-left:-200px;}
.pull-6 {margin-left:-240px;}
.pull-7 {margin-left:-280px;}
.pull-8 {margin-left:-320px;}
.pull-9 {margin-left:-360px;}
.pull-10 {margin-left:-400px;}
.pull-11 {margin-left:-440px;}
.pull-12 {margin-left:-480px;}
.pull-13 {margin-left:-520px;}
.pull-14 {margin-left:-560px;}
.pull-15 {margin-left:-600px;}
.pull-16 {margin-left:-640px;}
.pull-17 {margin-left:-680px;}
.pull-18 {margin-left:-720px;}
.pull-19 {margin-left:-760px;}
.pull-20 {margin-left:-800px;}
.pull-21 {margin-left:-840px;}
.pull-22 {margin-left:-880px;}
.pull-23 {margin-left:-920px;}
.pull-24 {margin-left:-960px;}
.pull-1, .pull-2, .pull-3, .pull-4, .pull-5, .pull-6, .pull-7, .pull-8, .pull-9, .pull-10, .pull-11, .pull-12, .pull-13, .pull-14, .pull-15, .pull-16, .pull-17, .pull-18, .pull-19, .pull-20, .pull-21, .pull-22, .pull-23, .pull-24 {float:left;position:relative;}
.push-1 {margin:0 -40px 1.5em 40px;}
.push-2 {margin:0 -80px 1.5em 80px;}
.push-3 {margin:0 -120px 1.5em 120px;}
.push-4 {margin:0 -160px 1.5em 160px;}
.push-5 {margin:0 -200px 1.5em 200px;}
.push-6 {margin:0 -240px 1.5em 240px;}
.push-7 {margin:0 -280px 1.5em 280px;}
.push-8 {margin:0 -320px 1.5em 320px;}
.push-9 {margin:0 -360px 1.5em 360px;}
.push-10 {margin:0 -400px 1.5em 400px;}
.push-11 {margin:0 -440px 1.5em 440px;}
.push-12 {margin:0 -480px 1.5em 480px;}
.push-13 {margin:0 -520px 1.5em 520px;}
.push-14 {margin:0 -560px 1.5em 560px;}
.push-15 {margin:0 -600px 1.5em 600px;}
.push-16 {margin:0 -640px 1.5em 640px;}
.push-17 {margin:0 -680px 1.5em 680px;}
.push-18 {margin:0 -720px 1.5em 720px;}
.push-19 {margin:0 -760px 1.5em 760px;}
.push-20 {margin:0 -800px 1.5em 800px;}
.push-21 {margin:0 -840px 1.5em 840px;}
.push-22 {margin:0 -880px 1.5em 880px;}
.push-23 {margin:0 -920px 1.5em 920px;}
.push-24 {margin:0 -960px 1.5em 960px;}
.push-1, .push-2, .push-3, .push-4, .push-5, .push-6, .push-7, .push-8, .push-9, .push-10, .push-11, .push-12, .push-13, .push-14, .push-15, .push-16, .push-17, .push-18, .push-19, .push-20, .push-21, .push-22, .push-23, .push-24 {float:right;position:relative;}
.prepend-top {margin-top:1.5em;}
.append-bottom {margin-bottom:1.5em;}
.box {padding:1.5em;margin-bottom:1.5em;background:#E5ECF9;}
hr {background:#ddd;color:#ddd;clear:both;float:none;width:100%;height:.1em;margin:0 0 1.45em;border:none;}
hr.space {background:#fff;color:#fff;}
.clearfix:after, .container:after {content:"\\0020";display:block;height:0;clear:both;visibility:hidden;overflow:hidden;}
.clearfix, .container {display:block;}
.clear {clear:both;}`,"documentation/assets/blueprint-css/src/forms.css":`/* -------------------------------------------------------------- 

   forms.css
   * Sets up some default styling for forms
   * Gives you classes to enhance your forms
   
   Usage:
   * For text fields, use class .title or .text
   * For inline forms, use .inline (even when using columns)
   
-------------------------------------------------------------- */

label       { font-weight: bold; }
fieldset    { padding:1.4em; margin: 0 0 1.5em 0; border: 1px solid #ccc; }
legend      { font-weight: bold; font-size:1.2em; }


/* Form fields
-------------------------------------------------------------- */

input[type=text], input[type=password],
input.text, input.title, 
textarea, select { 
  background-color:#fff; 
  border:1px solid #bbb; 
}
input[type=text]:focus, input[type=password]:focus, 
input.text:focus, input.title:focus, 
textarea:focus, select:focus { 
  border-color:#666; 
}

input[type=text], input[type=password],
input.text, input.title,
textarea, select {
  margin:0.5em 0;
}

input.text, 
input.title   { width: 300px; padding:5px; }
input.title   { font-size:1.5em; }
textarea      { width: 390px; height: 250px; padding:5px; }

input[type=checkbox], input[type=radio], 
input.checkbox, input.radio { 
  position:relative; top:.25em; 
}

form.inline { line-height:3; }
form.inline p { margin-bottom:0; }


/* Success, notice and error boxes
-------------------------------------------------------------- */

.error,
.notice, 
.success    { padding: .8em; margin-bottom: 1em; border: 2px solid #ddd; }

.error      { background: #FBE3E4; color: #8a1f11; border-color: #FBC2C4; }
.notice     { background: #FFF6BF; color: #514721; border-color: #FFD324; }
.success    { background: #E6EFC2; color: #264409; border-color: #C6D880; }
.error a    { color: #8a1f11; }
.notice a   { color: #514721; }
.success a  { color: #264409; }
`,"documentation/assets/blueprint-css/src/grid.css":`/* --------------------------------------------------------------

	grid.css
	* Sets up an easy-to-use grid of 24 columns.
	
	By default, the grid is 950px wide, with 24 columns
	spanning 30px, and a 10px margin between columns.
	
	If you need fewer or more columns, namespaces or semantic
	element names, use the compressor script (lib/compress.rb)
	
	Note: Changes made in this file will not be applied when
	using the compressor: make changes in lib/blueprint/grid.css.rb
	
-------------------------------------------------------------- */

/* A container should group all your columns. */
.container {
  width: 950px;
  margin: 0 auto;
}

/* Use this class on any div.span / container to see the grid. */
.showgrid { 
  background: url(src/grid.png); 
}


/* Columns
-------------------------------------------------------------- */

/* Sets up basic grid floating and margin. */
.column, div.span-1, div.span-2, div.span-3, div.span-4, div.span-5, div.span-6, div.span-7, div.span-8, div.span-9, div.span-10, div.span-11, div.span-12, div.span-13, div.span-14, div.span-15, div.span-16, div.span-17, div.span-18, div.span-19, div.span-20, div.span-21, div.span-22, div.span-23, div.span-24 {
  float: left;
  margin-right: 10px;
}

/* The last column in a row needs this class. */
.last, div.last { margin-right: 0; }

/* Use these classes to set the width of a column. */
.span-1 {width: 30px;}

.span-2 {width: 70px;}
.span-3 {width: 110px;}
.span-4 {width: 150px;}
.span-5 {width: 190px;}
.span-6 {width: 230px;}
.span-7 {width: 270px;}
.span-8 {width: 310px;}
.span-9 {width: 350px;}
.span-10 {width: 390px;}
.span-11 {width: 430px;}
.span-12 {width: 470px;}
.span-13 {width: 510px;}
.span-14 {width: 550px;}
.span-15 {width: 590px;}
.span-16 {width: 630px;}
.span-17 {width: 670px;}
.span-18 {width: 710px;}
.span-19 {width: 750px;}
.span-20 {width: 790px;}
.span-21 {width: 830px;}
.span-22 {width: 870px;}
.span-23 {width: 910px;}
.span-24, div.span-24 { width:950px; margin:0; }

/* Use these classes to set the width of an input. */
input.span-1, textarea.span-1, input.span-2, textarea.span-2, input.span-3, textarea.span-3, input.span-4, textarea.span-4, input.span-5, textarea.span-5, input.span-6, textarea.span-6, input.span-7, textarea.span-7, input.span-8, textarea.span-8, input.span-9, textarea.span-9, input.span-10, textarea.span-10, input.span-11, textarea.span-11, input.span-12, textarea.span-12, input.span-13, textarea.span-13, input.span-14, textarea.span-14, input.span-15, textarea.span-15, input.span-16, textarea.span-16, input.span-17, textarea.span-17, input.span-18, textarea.span-18, input.span-19, textarea.span-19, input.span-20, textarea.span-20, input.span-21, textarea.span-21, input.span-22, textarea.span-22, input.span-23, textarea.span-23, input.span-24, textarea.span-24 {
  border-left-width: 1px!important;
  border-right-width: 1px!important;
  padding-left: 5px!important;
  padding-right: 5px!important;
}

input.span-1, textarea.span-1 { width: 18px!important; }
input.span-2, textarea.span-2 { width: 58px!important; }
input.span-3, textarea.span-3 { width: 98px!important; }
input.span-4, textarea.span-4 { width: 138px!important; }
input.span-5, textarea.span-5 { width: 178px!important; }
input.span-6, textarea.span-6 { width: 218px!important; }
input.span-7, textarea.span-7 { width: 258px!important; }
input.span-8, textarea.span-8 { width: 298px!important; }
input.span-9, textarea.span-9 { width: 338px!important; }
input.span-10, textarea.span-10 { width: 378px!important; }
input.span-11, textarea.span-11 { width: 418px!important; }
input.span-12, textarea.span-12 { width: 458px!important; }
input.span-13, textarea.span-13 { width: 498px!important; }
input.span-14, textarea.span-14 { width: 538px!important; }
input.span-15, textarea.span-15 { width: 578px!important; }
input.span-16, textarea.span-16 { width: 618px!important; }
input.span-17, textarea.span-17 { width: 658px!important; }
input.span-18, textarea.span-18 { width: 698px!important; }
input.span-19, textarea.span-19 { width: 738px!important; }
input.span-20, textarea.span-20 { width: 778px!important; }
input.span-21, textarea.span-21 { width: 818px!important; }
input.span-22, textarea.span-22 { width: 858px!important; }
input.span-23, textarea.span-23 { width: 898px!important; }
input.span-24, textarea.span-24 { width: 938px!important; }

/* Add these to a column to append empty cols. */

.append-1 { padding-right: 40px;}
.append-2 { padding-right: 80px;}
.append-3 { padding-right: 120px;}
.append-4 { padding-right: 160px;}
.append-5 { padding-right: 200px;}
.append-6 { padding-right: 240px;}
.append-7 { padding-right: 280px;}
.append-8 { padding-right: 320px;}
.append-9 { padding-right: 360px;}
.append-10 { padding-right: 400px;}
.append-11 { padding-right: 440px;}
.append-12 { padding-right: 480px;}
.append-13 { padding-right: 520px;}
.append-14 { padding-right: 560px;}
.append-15 { padding-right: 600px;}
.append-16 { padding-right: 640px;}
.append-17 { padding-right: 680px;}
.append-18 { padding-right: 720px;}
.append-19 { padding-right: 760px;}
.append-20 { padding-right: 800px;}
.append-21 { padding-right: 840px;}
.append-22 { padding-right: 880px;}
.append-23 { padding-right: 920px;}

/* Add these to a column to prepend empty cols. */

.prepend-1 { padding-left: 40px;}
.prepend-2 { padding-left: 80px;}
.prepend-3 { padding-left: 120px;}
.prepend-4 { padding-left: 160px;}
.prepend-5 { padding-left: 200px;}
.prepend-6 { padding-left: 240px;}
.prepend-7 { padding-left: 280px;}
.prepend-8 { padding-left: 320px;}
.prepend-9 { padding-left: 360px;}
.prepend-10 { padding-left: 400px;}
.prepend-11 { padding-left: 440px;}
.prepend-12 { padding-left: 480px;}
.prepend-13 { padding-left: 520px;}
.prepend-14 { padding-left: 560px;}
.prepend-15 { padding-left: 600px;}
.prepend-16 { padding-left: 640px;}
.prepend-17 { padding-left: 680px;}
.prepend-18 { padding-left: 720px;}
.prepend-19 { padding-left: 760px;}
.prepend-20 { padding-left: 800px;}
.prepend-21 { padding-left: 840px;}
.prepend-22 { padding-left: 880px;}
.prepend-23 { padding-left: 920px;}


/* Border on right hand side of a column. */
div.border {
  padding-right: 4px;
  margin-right: 5px;
  border-right: 1px solid #eee;
}

/* Border with more whitespace, spans one column. */
div.colborder {
  padding-right: 24px;
  margin-right: 25px;
  border-right: 1px solid #eee;
}


/* Use these classes on an element to push it into the 
next column, or to pull it into the previous column.  */


.pull-1 { margin-left: -40px; }
.pull-2 { margin-left: -80px; }
.pull-3 { margin-left: -120px; }
.pull-4 { margin-left: -160px; }
.pull-5 { margin-left: -200px; }
.pull-6 { margin-left: -240px; }
.pull-7 { margin-left: -280px; }
.pull-8 { margin-left: -320px; }
.pull-9 { margin-left: -360px; }
.pull-10 { margin-left: -400px; }
.pull-11 { margin-left: -440px; }
.pull-12 { margin-left: -480px; }
.pull-13 { margin-left: -520px; }
.pull-14 { margin-left: -560px; }
.pull-15 { margin-left: -600px; }
.pull-16 { margin-left: -640px; }
.pull-17 { margin-left: -680px; }
.pull-18 { margin-left: -720px; }
.pull-19 { margin-left: -760px; }
.pull-20 { margin-left: -800px; }
.pull-21 { margin-left: -840px; }
.pull-22 { margin-left: -880px; }
.pull-23 { margin-left: -920px; }
.pull-24 { margin-left: -960px; }

.pull-1, .pull-2, .pull-3, .pull-4, .pull-5, .pull-6, .pull-7, .pull-8, .pull-9, .pull-10, .pull-11, .pull-12, .pull-13, .pull-14, .pull-15, .pull-16, .pull-17, .pull-18, .pull-19, .pull-20, .pull-21, .pull-22, .pull-23, .pull-24 {float: left; position:relative;}


.push-1 { margin: 0 -40px 1.5em 40px; }
.push-2 { margin: 0 -80px 1.5em 80px; }
.push-3 { margin: 0 -120px 1.5em 120px; }
.push-4 { margin: 0 -160px 1.5em 160px; }
.push-5 { margin: 0 -200px 1.5em 200px; }
.push-6 { margin: 0 -240px 1.5em 240px; }
.push-7 { margin: 0 -280px 1.5em 280px; }
.push-8 { margin: 0 -320px 1.5em 320px; }
.push-9 { margin: 0 -360px 1.5em 360px; }
.push-10 { margin: 0 -400px 1.5em 400px; }
.push-11 { margin: 0 -440px 1.5em 440px; }
.push-12 { margin: 0 -480px 1.5em 480px; }
.push-13 { margin: 0 -520px 1.5em 520px; }
.push-14 { margin: 0 -560px 1.5em 560px; }
.push-15 { margin: 0 -600px 1.5em 600px; }
.push-16 { margin: 0 -640px 1.5em 640px; }
.push-17 { margin: 0 -680px 1.5em 680px; }
.push-18 { margin: 0 -720px 1.5em 720px; }
.push-19 { margin: 0 -760px 1.5em 760px; }
.push-20 { margin: 0 -800px 1.5em 800px; }
.push-21 { margin: 0 -840px 1.5em 840px; }
.push-22 { margin: 0 -880px 1.5em 880px; }
.push-23 { margin: 0 -920px 1.5em 920px; }
.push-24 { margin: 0 -960px 1.5em 960px; }

.push-1, .push-2, .push-3, .push-4, .push-5, .push-6, .push-7, .push-8, .push-9, .push-10, .push-11, .push-12, .push-13, .push-14, .push-15, .push-16, .push-17, .push-18, .push-19, .push-20, .push-21, .push-22, .push-23, .push-24 {float: right; position:relative;}


/* Misc classes and elements
-------------------------------------------------------------- */

/* In case you need to add a gutter above/below an element */
.prepend-top { 
  margin-top:1.5em; 
}
.append-bottom { 
  margin-bottom:1.5em; 
}

/* Use a .box to create a padded box inside a column.  */ 
.box { 
  padding: 1.5em; 
  margin-bottom: 1.5em; 
  background: #E5ECF9; 
}

/* Use this to create a horizontal ruler across a column. */
hr {
  background: #ddd; 
  color: #ddd;
  clear: both; 
  float: none; 
  width: 100%; 
  height: .1em;
  margin: 0 0 1.45em;
  border: none; 
}
hr.space {
  background: #fff;
  color: #fff;
}


/* Clearing floats without extra markup
   Based on How To Clear Floats Without Structural Markup by PiE
   [http://www.positioniseverything.net/easyclearing.html] */

.clearfix:after, .container:after {
  content: "\\0020"; 
  display: block; 
  height: 0; 
  clear: both; 
  visibility: hidden;
  overflow:hidden; 
}
.clearfix, .container {display: block;}

/* Regular clearing
   apply to column that should drop below previous ones. */

.clear { clear:both; }
`,"documentation/assets/blueprint-css/src/ie.css":`/* -------------------------------------------------------------- 
   
   ie.css
   
   Contains every hack for Internet Explorer,
   so that our core files stay sweet and nimble.
   
-------------------------------------------------------------- */

/* Make sure the layout is centered in IE5 */
body { text-align: center; }
.container { text-align: left; }

/* Fixes IE margin bugs */
* html .column, * html div.span-1, * html div.span-2, 
* html div.span-3, * html div.span-4, * html div.span-5, 
* html div.span-6, * html div.span-7, * html div.span-8, 
* html div.span-9, * html div.span-10, * html div.span-11, 
* html div.span-12, * html div.span-13, * html div.span-14, 
* html div.span-15, * html div.span-16, * html div.span-17, 
* html div.span-18, * html div.span-19, * html div.span-20, 
* html div.span-21, * html div.span-22, * html div.span-23, 
* html div.span-24 { overflow-x: hidden; }


/* Elements
-------------------------------------------------------------- */

/* Fixes incorrect styling of legend in IE6. */
* html legend { margin:0px -8px 16px 0; padding:0; }

/* Fixes incorrect placement of ol numbers in IE6/7. */
ol { margin-left:2em; }

/* Fixes wrong line-height on sup/sub in IE. */
sup { vertical-align: text-top; }
sub { vertical-align: text-bottom; }

/* Fixes IE7 missing wrapping of code elements. */
html>body p code { *white-space: normal; } 

/* IE 6&7 has problems with setting proper <hr> margins. */
hr  { margin: -8px auto 11px; }

/* Explicitly set interpolation, allowing dynamically resized images to not look horrible */
img { -ms-interpolation-mode: bicubic; }

/* Clearing 
-------------------------------------------------------------- */

/* Makes clearfix actually work in IE */ 
.clearfix, .container {display: inline-block;}
* html .clearfix,
* html .container {height: 1%;}


/* Forms 
-------------------------------------------------------------- */

/* Fixes padding on fieldset */
fieldset {padding-top: 0;}

/* Fixes rule that IE 6 ignores */
input.text, input.title {background-color:#fff;border:1px solid #bbb;}
input.text:focus, input.title:focus {border-color:#666;}
input.text, input.title, textarea, select {margin:0.5em 0;}
input.checkbox, input.radio {position:relative; top:.25em;}

/* Fixes alignment of inline form elements */ 
form.inline div, form.inline p {vertical-align:middle;}
form.inline label {position:relative;top:-0.25em;}
form.inline input.checkbox, form.inline input.radio,
form.inline input.button, form.inline button { 
  margin:0.5em 0; 
}
button, input.button {position:relative;top:0.25em;}`,"documentation/assets/blueprint-css/src/print.css":`/* -------------------------------------------------------------- 

   print.css
   * Gives you some sensible styles for printing pages.
   * See Readme file in this directory for further instructions.
      
   Some additions you'll want to make, customized to your markup:
   #header, #footer, #navigation { display:none; }
   
-------------------------------------------------------------- */

body {
  line-height: 1.5;
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  color:#000;
  background: none;
  font-size: 10pt;
}


/* Layout
-------------------------------------------------------------- */

.container {
  background: none;
}

hr { 
  background:#ccc; 
  color:#ccc;
  width:100%;
  height:2px;
  margin:2em 0;
  padding:0;
  border:none;
}
hr.space {
  background: #fff;
  color: #fff;
}


/* Text
-------------------------------------------------------------- */

h1,h2,h3,h4,h5,h6 { font-family: "Helvetica Neue", Arial, "Lucida Grande", sans-serif; }
code { font:.9em "Courier New", Monaco, Courier, monospace; } 

img { float:left; margin:1.5em 1.5em 1.5em 0; }
a img { border:none; }
p img.top { margin-top: 0; }

blockquote {
  margin:1.5em;
  padding:1em;
  font-style:italic;
  font-size:.9em;
}

.small  { font-size: .9em; }
.large  { font-size: 1.1em; }
.quiet  { color: #999; }
.hide   { display:none; }


/* Links
-------------------------------------------------------------- */

a:link, a:visited {
  background: transparent;
  font-weight:700;
  text-decoration: underline;
}

a:link:after, a:visited:after {
  content: " (" attr(href) ")";
  font-size: 90%;
}

/* If you're having trouble printing relative links, uncomment and customize this:
   (note: This is valid CSS3, but it still won't go through the W3C CSS Validator) */

/* a[href^="/"]:after {
  content: " (http://www.yourdomain.com" attr(href) ") ";
} */
`,"documentation/assets/blueprint-css/src/reset.css":`/* -------------------------------------------------------------- 
  
   reset.css
   * Resets default browser CSS.
   
-------------------------------------------------------------- */

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, code,
del, dfn, em, img, q, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
}

body { 
  line-height: 1.5; 
}

/* Tables still need 'cellspacing="0"' in the markup. */
table { border-collapse: separate; border-spacing: 0; }
caption, th, td { text-align: left; font-weight: normal; }
table, td, th { vertical-align: middle; }

/* Remove possible quote marks (") from <q>, <blockquote>. */
blockquote:before, blockquote:after, q:before, q:after { content: ""; }
blockquote, q { quotes: "" ""; }

/* Remove annoying border on linked images. */
a img { border: none; }
`,"documentation/assets/blueprint-css/src/typography.css":`/* -------------------------------------------------------------- 

   typography.css
   * Sets up some sensible default typography.
   
-------------------------------------------------------------- */

/* Default font settings. 
   The font-size percentage is of 16px. (0.75 * 16px = 12px) */
body { 
  font-size: 75%;
  color: #222; 
  background: #fff;
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
}


/* Headings
-------------------------------------------------------------- */

h1,h2,h3,h4,h5,h6 { font-weight: normal; color: #111; }

h1 { font-size: 3em; line-height: 1; margin-bottom: 0.5em; }
h2 { font-size: 2em; margin-bottom: 0.75em; }
h3 { font-size: 1.5em; line-height: 1; margin-bottom: 1em; }
h4 { font-size: 1.2em; line-height: 1.25; margin-bottom: 1.25em; }
h5 { font-size: 1em; font-weight: bold; margin-bottom: 1.5em; }
h6 { font-size: 1em; font-weight: bold; }

h1 img, h2 img, h3 img, 
h4 img, h5 img, h6 img {
  margin: 0;
}


/* Text elements
-------------------------------------------------------------- */

p           { margin: 0 0 1.5em; }
p img.left  { float: left; margin: 1.5em 1.5em 1.5em 0; padding: 0; }
p img.right { float: right; margin: 1.5em 0 1.5em 1.5em; }

a:focus, 
a:hover     { color: #000; }
a           { color: #009; text-decoration: underline; }

blockquote  { margin: 1.5em; color: #666; font-style: italic; }
strong      { font-weight: bold; }
em,dfn      { font-style: italic; }
dfn         { font-weight: bold; }
sup, sub    { line-height: 0; }

abbr, 
acronym     { border-bottom: 1px dotted #666; }
address     { margin: 0 0 1.5em; font-style: italic; }
del         { color:#666; }

pre 				{ margin: 1.5em 0; white-space: pre; }
pre,code,tt { font: 1em 'andale mono', 'lucida console', monospace; line-height: 1.5; }


/* Lists
-------------------------------------------------------------- */

li ul, 
li ol       { margin:0 1.5em; }
ul, ol      { margin: 0 1.5em 1.5em 1.5em; }

ul          { list-style-type: disc; }
ol          { list-style-type: decimal; }

dl          { margin: 0 0 1.5em 0; }
dl dt       { font-weight: bold; }
dd          { margin-left: 1.5em;}


/* Tables
-------------------------------------------------------------- */

table       { margin-bottom: 1.4em; width:100%; }
th          { font-weight: bold; }
thead th 		{ background: #c3d9ff; }
th,td,caption { padding: 4px 10px 4px 5px; }
tr.even td  { background: #e5ecf9; }
tfoot       { font-style: italic; }
caption     { background: #eee; }


/* Misc classes
-------------------------------------------------------------- */

.small      { font-size: .8em; margin-bottom: 1.875em; line-height: 1.875em; }
.large      { font-size: 1.2em; line-height: 2.5em; margin-bottom: 1.25em; }
.hide       { display: none; }

.quiet      { color: #666; }
.loud       { color: #000; }
.highlight  { background:#ff0; }
.added      { background:#060; color: #fff; }
.removed    { background:#900; color: #fff; }

.first      { margin-left:0; padding-left:0; }
.last       { margin-right:0; padding-right:0; }
.top        { margin-top:0; padding-top:0; }
.bottom     { margin-bottom:0; padding-bottom:0; }
`,"documentation/index.html":`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<head lang="en">
	<meta http-equiv="content-type" content="text/html;charset=utf-8">
	<title>Resume Timeline Documentation</title>
	<!-- Framework CSS -->
	<link rel="stylesheet" href="assets/blueprint-css/screen.css" type="text/css" media="screen, projection">
	<link rel="stylesheet" href="assets/blueprint-css/print.css" type="text/css" media="print">
	<!--[if lt IE 8]><link rel="stylesheet" href="assets/blueprint-css/ie.css" type="text/css" media="screen, projection"><![endif]-->
	<link rel="stylesheet" href="assets/blueprint-css/plugins/fancy-type/screen.css" type="text/css" media="screen, projection">
	<style type="text/css" media="screen">
		p, table, hr, .box { margin-bottom:25px; }
		.box p { margin-bottom:10px; }
	</style>
</head>


<body>
	<div class="container">
	
		<h3 class="center alt">&ldquo;Resume Timeline&rdquo; Documentation by &ldquo;brkor&rdquo; v1.0</h3>
		
		<hr>
		
		<h1 class="center">&ldquo;Resume Timeline&rdquo;</h1>
		
		<div class="borderTop">
			<div class="span-6 colborder info prepend-1">
				<p class="prepend-top">
					<strong>
					Created: 18/02/2014<br>
					By: brkor<br>
					Email: <a href="mailto:adrian.talaga@gmail.com">Mail me</a>
					</strong>
				</p>
			</div><!-- end div .span-6 -->		
	
			<div class="span-12 last">
				<p class="prepend-top append-0">Thank you for purchasing my theme. If you have any questions that are beyond the scope of this help file, please feel free to email via my user page contact form <a href="http://themeforest.net/user/brkor">here</a>. Thanks so much!</p>
			</div>
		</div><!-- end div .borderTop -->
		
		<hr>
		
		<h2 id="toc" class="alt">Table of Contents</h2>
		<ol class="alpha">
			<li><a href="#htmlStructure">HTML Structure</a></li>
			<li><a href="#cssFiles">CSS Files and Structure</a></li>
			<li><a href="#javascript">JavaScript</a></li>
			<li><a href="#credits">Sources and Credits</a></li>
		</ol>
		
		<hr>
		
		<h3 id="htmlStructure"><strong>A) HTML Structure</strong> - <a href="#toc">top</a></h3>
		<p>This theme is based on responsive Twitter Bootstrap 3 grid and components.<br>
		Source code is well commented so navigation should be easy.</p>
		<p>Content is divided into sections.</p>
		<hr>
		<h3 id="cssFiles"><strong>B) CSS Files and Structure</strong> - <a href="#toc">top</a></h3>
		<p>There are following css files in this theme:<br>
		<ol>
		<li>bootstrap.css - Twitter Bootstrap standard css file</li>
		<li>custom.css - main theme styling, white theme</li>
		<li>dark.css - dark theme styling</li>
		</ol>
		<p>Custom.css file contains all of the specific stylings for the page. The file is separated into easy to find sections.</p>  
		<p>If you would like to edit a specific section of the site, simply find the appropriate label in the CSS file, and then scroll down until you find the appropriate style that needs to be edited.</p> 
		<hr>
		<h3 id="javascript"><strong>C) JavaScript</strong> - <a href="#toc">top</a></h3>
		<p>This theme imports following Javascript files:</p>
		<ol>
			<li>jquery.min.js - Latest jQuery</li>
			<li>bootstrap.min.js</li>
			<li>modernizr.js</li>
			<li>bootstrap-progressbar.js - Progress bar animations </li>
			<li>jquery.easypiechart.js - Charts animations</li>
			<li>chart.js - Charts animations trigger</li>
			<li>spy.js - Navigation spy scroll</li>
			<li>scripts.js - all custom scripts used on site</li>
		</ol>
		  
		<p>On the bottom of the index.html page, you can find additional scripts which makes site run properly.</p>

		<hr>

		<h3 id="credits"><strong>E) Sources and Credits</strong> - <a href="#toc">top</a></h3>
		
		<p>I've used the following images, icons or other files as listed.
		
		<ul>
			<li>Twitter Bootstrap - https://github.com/twitter/bootstrap</li>
			<li>BootstrapProgressBar - https://www.minddust.com/bootstrap-progressbar</li>
			<li>EasyPieChart - http://robert-fleischmann.de</li>
		</ul>
		
		<hr>
		
		<h3>Setting email recepient from contact form</h3>
		<p>Open file contact.php and edit line 2 by putting your email address.</p>
		
		
		<p>Once again, thank you so much for purchasing this theme. As I said at the beginning, I'd be glad to help you if you have any questions relating to this theme. No guarantees, but I'll do my best to assist. If you have a more general question relating to the themes on ThemeForest, you might consider visiting the forums and asking your question in the "Item Discussion" section.</p> 
		
		<p class="append-bottom alt large"><strong>brkor</strong></p>
		<p><a href="#toc">Go To Table of Contents</a></p>
		
		<hr class="space">
	</div><!-- end div .container -->
</body>
</html>`,"example/css/bootstrap.css":`/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*! normalize.css v3.0.0 | MIT License | git.io/normalize */
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
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
  background: transparent;
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
  margin: .67em 0;
  font-size: 2em;
}
mark {
  color: #000;
  background: #ff0;
}
small {
  font-size: 80%;
}
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sup {
  top: -.5em;
}
sub {
  bottom: -.25em;
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
  height: 0;
  -moz-box-sizing: content-box;
       box-sizing: content-box;
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
  margin: 0;
  font: inherit;
  color: inherit;
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
  padding: 0;
  border: 0;
}
input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
  -webkit-appearance: textfield;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset {
  padding: .35em .625em .75em;
  margin: 0 2px;
  border: 1px solid #c0c0c0;
}
legend {
  padding: 0;
  border: 0;
}
textarea {
  overflow: auto;
}
optgroup {
  font-weight: bold;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
td,
th {
  padding: 0;
}
@media print {
  * {
    color: #000 !important;
    text-shadow: none !important;
    box-shadow: none !important;
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
  a[href^="javascript:"]:after,
  a[href^="#"]:after {
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
  .table td,
  .table th {
    background-color: #fff !important;
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
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
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
  font-size: 62.5%;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background-color: #fff;
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
  color: #428bca;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #2a6496;
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
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.img-circle {
  border-radius: 50%;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
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
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
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
  color: #999;
}
h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 20px;
  margin-bottom: 10px;
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
  margin-top: 10px;
  margin-bottom: 10px;
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
  font-size: 36px;
}
h2,
.h2 {
  font-size: 30px;
}
h3,
.h3 {
  font-size: 24px;
}
h4,
.h4 {
  font-size: 18px;
}
h5,
.h5 {
  font-size: 14px;
}
h6,
.h6 {
  font-size: 12px;
}
p {
  margin: 0 0 10px;
}
.lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 200;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .lead {
    font-size: 21px;
  }
}
small,
.small {
  font-size: 85%;
}
cite {
  font-style: normal;
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
.text-muted {
  color: #999;
}
.text-primary {
  color: #428bca;
}
a.text-primary:hover {
  color: #3071a9;
}
.text-success {
  color: #3c763d;
}
a.text-success:hover {
  color: #2b542c;
}
.text-info {
  color: #31708f;
}
a.text-info:hover {
  color: #245269;
}
.text-warning {
  color: #8a6d3b;
}
a.text-warning:hover {
  color: #66512c;
}
.text-danger {
  color: #a94442;
}
a.text-danger:hover {
  color: #843534;
}
.bg-primary {
  color: #fff;
  background-color: #428bca;
}
a.bg-primary:hover {
  background-color: #3071a9;
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
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
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
  margin-left: -5px;
  list-style: none;
}
.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
dl {
  margin-top: 0;
  margin-bottom: 20px;
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
    overflow: hidden;
    clear: left;
    text-align: right;
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
  border-bottom: 1px dotted #999;
}
.initialism {
  font-size: 90%;
  text-transform: uppercase;
}
blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
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
  color: #999;
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
  text-align: right;
  border-right: 5px solid #eee;
  border-left: 0;
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
blockquote:before,
blockquote:after {
  content: "";
}
address {
  margin-bottom: 20px;
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
  white-space: nowrap;
  background-color: #f9f2f4;
  border-radius: 4px;
}
kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #fff;
  background-color: #333;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
}
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
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
  right: 0;
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
  left: 0;
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
  margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
  }
}
table {
  max-width: 100%;
  background-color: transparent;
}
th {
  text-align: left;
}
.table {
  width: 100%;
  margin-bottom: 20px;
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
  border-top: 1px solid #ddd;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
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
  border-top: 2px solid #ddd;
}
.table .table {
  background-color: #fff;
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
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}
.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #f9f9f9;
}
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
  background-color: #f5f5f5;
}
table col[class*="col-"] {
  position: static;
  display: table-column;
  float: none;
}
table td[class*="col-"],
table th[class*="col-"] {
  position: static;
  display: table-cell;
  float: none;
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
.table-hover > tbody > tr.danger:hover > th {
  background-color: #ebcccc;
}
@media (max-width: 767px) {
  .table-responsive {
    width: 100%;
    margin-bottom: 15px;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
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
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: inherit;
  color: #333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}
label {
  display: inline-block;
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
  /* IE8-9 */
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
  padding-top: 7px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
}
.form-control::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  cursor: not-allowed;
  background-color: #eee;
  opacity: 1;
}
textarea.form-control {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: none;
}
input[type="date"] {
  line-height: 34px;
}
.form-group {
  margin-bottom: 15px;
}
.radio,
.checkbox {
  display: block;
  min-height: 20px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.radio label,
.checkbox label {
  display: inline;
  font-weight: normal;
  cursor: pointer;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  float: left;
  margin-left: -20px;
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
  font-weight: normal;
  vertical-align: middle;
  cursor: pointer;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
input[type="radio"][disabled],
input[type="checkbox"][disabled],
.radio[disabled],
.radio-inline[disabled],
.checkbox[disabled],
.checkbox-inline[disabled],
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"],
fieldset[disabled] .radio,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}
.input-sm {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-sm {
  height: 30px;
  line-height: 30px;
}
textarea.input-sm,
select[multiple].input-sm {
  height: auto;
}
.input-lg {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
select.input-lg {
  height: 46px;
  line-height: 46px;
}
textarea.input-lg,
select[multiple].input-lg {
  height: auto;
}
.has-feedback {
  position: relative;
}
.has-feedback .form-control {
  padding-right: 42.5px;
}
.has-feedback .form-control-feedback {
  position: absolute;
  top: 25px;
  right: 0;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
}
.has-success .help-block,
.has-success .control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline {
  color: #3c763d;
}
.has-success .form-control {
  border-color: #3c763d;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-success .form-control:focus {
  border-color: #2b542c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
}
.has-success .input-group-addon {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #3c763d;
}
.has-success .form-control-feedback {
  color: #3c763d;
}
.has-warning .help-block,
.has-warning .control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline {
  color: #8a6d3b;
}
.has-warning .form-control {
  border-color: #8a6d3b;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-warning .form-control:focus {
  border-color: #66512c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
}
.has-warning .input-group-addon {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #8a6d3b;
}
.has-warning .form-control-feedback {
  color: #8a6d3b;
}
.has-error .help-block,
.has-error .control-label,
.has-error .radio,
.has-error .checkbox,
.has-error .radio-inline,
.has-error .checkbox-inline {
  color: #a94442;
}
.has-error .form-control {
  border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-error .form-control:focus {
  border-color: #843534;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
}
.has-error .input-group-addon {
  color: #a94442;
  background-color: #f2dede;
  border-color: #a94442;
}
.has-error .form-control-feedback {
  color: #a94442;
}
.form-control-static {
  margin-bottom: 0;
}
.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
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
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    float: none;
    margin-left: 0;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}
.form-horizontal .control-label,
.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  padding-top: 7px;
  margin-top: 0;
  margin-bottom: 0;
}
.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 27px;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
.form-horizontal .form-control-static {
  padding-top: 7px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    text-align: right;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
  top: 0;
  right: 15px;
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus {
  color: #333;
  text-decoration: none;
}
.btn:active,
.btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  pointer-events: none;
  cursor: not-allowed;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
          box-shadow: none;
  opacity: .65;
}
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.btn-default:hover,
.btn-default:focus,
.btn-default:active,
.btn-default.active,
.open .dropdown-toggle.btn-default {
  color: #333;
  background-color: #ebebeb;
  border-color: #adadad;
}
.btn-default:active,
.btn-default.active,
.open .dropdown-toggle.btn-default {
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
.btn-default.disabled:active,
.btn-default[disabled]:active,
fieldset[disabled] .btn-default:active,
.btn-default.disabled.active,
.btn-default[disabled].active,
fieldset[disabled] .btn-default.active {
  background-color: #fff;
  border-color: #ccc;
}
.btn-default .badge {
  color: #fff;
  background-color: #333;
}
.btn-primary {
  color: #fff;
  background-color: #428bca;
  border-color: #357ebd;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #3276b1;
  border-color: #285e8e;
}
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
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
.btn-primary.disabled:active,
.btn-primary[disabled]:active,
fieldset[disabled] .btn-primary:active,
.btn-primary.disabled.active,
.btn-primary[disabled].active,
fieldset[disabled] .btn-primary.active {
  background-color: #428bca;
  border-color: #357ebd;
}
.btn-primary .badge {
  color: #428bca;
  background-color: #fff;
}
.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
  color: #fff;
  background-color: #47a447;
  border-color: #398439;
}
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
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
.btn-success.disabled:active,
.btn-success[disabled]:active,
fieldset[disabled] .btn-success:active,
.btn-success.disabled.active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success.active {
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success .badge {
  color: #5cb85c;
  background-color: #fff;
}
.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info:hover,
.btn-info:focus,
.btn-info:active,
.btn-info.active,
.open .dropdown-toggle.btn-info {
  color: #fff;
  background-color: #39b3d7;
  border-color: #269abc;
}
.btn-info:active,
.btn-info.active,
.open .dropdown-toggle.btn-info {
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
.btn-info.disabled:active,
.btn-info[disabled]:active,
fieldset[disabled] .btn-info:active,
.btn-info.disabled.active,
.btn-info[disabled].active,
fieldset[disabled] .btn-info.active {
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info .badge {
  color: #5bc0de;
  background-color: #fff;
}
.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active,
.btn-warning.active,
.open .dropdown-toggle.btn-warning {
  color: #fff;
  background-color: #ed9c28;
  border-color: #d58512;
}
.btn-warning:active,
.btn-warning.active,
.open .dropdown-toggle.btn-warning {
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
.btn-warning.disabled:active,
.btn-warning[disabled]:active,
fieldset[disabled] .btn-warning:active,
.btn-warning.disabled.active,
.btn-warning[disabled].active,
fieldset[disabled] .btn-warning.active {
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}
.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger:hover,
.btn-danger:focus,
.btn-danger:active,
.btn-danger.active,
.open .dropdown-toggle.btn-danger {
  color: #fff;
  background-color: #d2322d;
  border-color: #ac2925;
}
.btn-danger:active,
.btn-danger.active,
.open .dropdown-toggle.btn-danger {
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
.btn-danger.disabled:active,
.btn-danger[disabled]:active,
fieldset[disabled] .btn-danger:active,
.btn-danger.disabled.active,
.btn-danger[disabled].active,
fieldset[disabled] .btn-danger.active {
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger .badge {
  color: #d9534f;
  background-color: #fff;
}
.btn-link {
  font-weight: normal;
  color: #428bca;
  cursor: pointer;
  border-radius: 0;
}
.btn-link,
.btn-link:active,
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
  color: #2a6496;
  text-decoration: underline;
  background-color: transparent;
}
.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:focus {
  color: #999;
  text-decoration: none;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-block {
  display: block;
  width: 100%;
  padding-right: 0;
  padding-left: 0;
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
  -webkit-transition: opacity .15s linear;
          transition: opacity .15s linear;
}
.fade.in {
  opacity: 1;
}
.collapse {
  display: none;
}
.collapse.in {
  display: block;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height .35s ease;
          transition: height .35s ease;
}
@font-face {
  font-family: 'Glyphicons Halflings';

  src: url('../fonts/glyphicons-halflings-regular.eot');
  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
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
.glyphicon-euro:before {
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
  font-size: 14px;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}
.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}
.dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  color: #262626;
  text-decoration: none;
  background-color: #f5f5f5;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  background-color: #428bca;
  outline: 0;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  color: #999;
}
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
}
.open > .dropdown-menu {
  display: block;
}
.open > a {
  outline: 0;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
}
.dropdown-menu-left {
  right: auto;
  left: 0;
}
.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #999;
}
.dropdown-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
}
.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  content: "";
  border-top: 0;
  border-bottom: 4px solid;
}
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 1px;
}
@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: 0;
    left: auto;
  }
  .navbar-right .dropdown-menu-left {
    right: auto;
    left: 0;
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
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus {
  outline: none;
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
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child > .btn:last-child,
.btn-group > .btn-group:first-child > .dropdown-toggle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn-group:last-child > .btn:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
  padding-right: 8px;
  padding-left: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-right: 12px;
  padding-left: 12px;
}
.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
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
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
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
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  display: table-cell;
  float: none;
  width: 1%;
}
.btn-group-justified > .btn-group .btn {
  width: 100%;
}
[data-toggle="buttons"] > .btn > input[type="radio"],
[data-toggle="buttons"] > .btn > input[type="checkbox"] {
  display: none;
}
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group[class*="col-"] {
  float: none;
  padding-right: 0;
  padding-left: 0;
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
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  line-height: 46px;
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
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
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
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #555;
  text-align: center;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}
.input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 18px;
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
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
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
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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
  padding-left: 0;
  margin-bottom: 0;
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
  background-color: #eee;
}
.nav > li.disabled > a {
  color: #999;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #999;
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eee;
  border-color: #428bca;
}
.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
.nav-tabs {
  border-bottom: 1px solid #ddd;
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
  border-color: #eee #eee #ddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li {
  float: none;
}
.nav-tabs.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
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
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #fff;
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
  color: #fff;
  background-color: #428bca;
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
  margin-bottom: 5px;
  text-align: center;
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
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:hover,
  .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
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
  max-height: 340px;
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
}
.navbar-collapse.in {
  overflow-y: auto;
}
@media (min-width: 768px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
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
    padding-right: 0;
    padding-left: 0;
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
  height: 50px;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
}
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
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
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.navbar-toggle:focus {
  outline: none;
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
  margin: 7.5px -15px;
}
.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}
@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }
  .navbar-nav .open .dropdown-menu > li > a,
  .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: 20px;
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
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .navbar-nav.navbar-right:last-child {
    margin-right: -15px;
  }
}
@media (min-width: 768px) {
  .navbar-left {
    float: left !important;
  }
  .navbar-right {
    float: right !important;
  }
}
.navbar-form {
  padding: 10px 15px;
  margin-top: 8px;
  margin-right: -15px;
  margin-bottom: 8px;
  margin-left: -15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
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
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio input[type="radio"],
  .navbar-form .checkbox input[type="checkbox"] {
    float: none;
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
}
@media (min-width: 768px) {
  .navbar-form {
    width: auto;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0;
    margin-left: 0;
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .navbar-form.navbar-right:last-child {
    margin-right: -15px;
  }
}
.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.navbar-btn {
  margin-top: 8px;
  margin-bottom: 8px;
}
.navbar-btn.btn-sm {
  margin-top: 10px;
  margin-bottom: 10px;
}
.navbar-btn.btn-xs {
  margin-top: 14px;
  margin-bottom: 14px;
}
.navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .navbar-text {
    float: left;
    margin-right: 15px;
    margin-left: 15px;
  }
  .navbar-text.navbar-right:last-child {
    margin-right: 0;
  }
}
.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
.navbar-default .navbar-brand {
  color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
.navbar-default .navbar-text {
  color: #777;
}
.navbar-default .navbar-nav > li > a {
  color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}
.navbar-default .navbar-toggle {
  border-color: #ddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}
.navbar-default .navbar-link {
  color: #777;
}
.navbar-default .navbar-link:hover {
  color: #333;
}
.navbar-inverse {
  background-color: #222;
  border-color: #080808;
}
.navbar-inverse .navbar-brand {
  color: #999;
}
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-text {
  color: #999;
}
.navbar-inverse .navbar-nav > li > a {
  color: #999;
}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #080808;
}
.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:hover,
.navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444;
  background-color: transparent;
}
.navbar-inverse .navbar-toggle {
  border-color: #333;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
  background-color: #333;
}
.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #fff;
}
.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #101010;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  color: #fff;
  background-color: #080808;
}
@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #999;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #fff;
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #fff;
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444;
    background-color: transparent;
  }
}
.navbar-inverse .navbar-link {
  color: #999;
}
.navbar-inverse .navbar-link:hover {
  color: #fff;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li {
  display: inline-block;
}
.breadcrumb > li + li:before {
  padding: 0 5px;
  color: #ccc;
  content: "/\\00a0";
}
.breadcrumb > .active {
  color: #999;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}
.pagination > li {
  display: inline;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #428bca;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  color: #2a6496;
  background-color: #eee;
  border-color: #ddd;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 2;
  color: #fff;
  cursor: default;
  background-color: #428bca;
  border-color: #428bca;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #999;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 18px;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.pager {
  padding-left: 0;
  margin: 20px 0;
  text-align: center;
  list-style: none;
}
.pager li {
  display: inline;
}
.pager li > a,
.pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
}
.pager li > a:hover,
.pager li > a:focus {
  text-decoration: none;
  background-color: #eee;
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
  color: #999;
  cursor: not-allowed;
  background-color: #fff;
}
.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}
.label[href]:hover,
.label[href]:focus {
  color: #fff;
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
  background-color: #999;
}
.label-default[href]:hover,
.label-default[href]:focus {
  background-color: #808080;
}
.label-primary {
  background-color: #428bca;
}
.label-primary[href]:hover,
.label-primary[href]:focus {
  background-color: #3071a9;
}
.label-success {
  background-color: #5cb85c;
}
.label-success[href]:hover,
.label-success[href]:focus {
  background-color: #449d44;
}
.label-info {
  background-color: #5bc0de;
}
.label-info[href]:hover,
.label-info[href]:focus {
  background-color: #31b0d5;
}
.label-warning {
  background-color: #f0ad4e;
}
.label-warning[href]:hover,
.label-warning[href]:focus {
  background-color: #ec971f;
}
.label-danger {
  background-color: #d9534f;
}
.label-danger[href]:hover,
.label-danger[href]:focus {
  background-color: #c9302c;
}
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  background-color: #999;
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
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
a.list-group-item.active > .badge,
.nav-pills > .active > a > .badge {
  color: #428bca;
  background-color: #fff;
}
.nav-pills > li > a > .badge {
  margin-left: 3px;
}
.jumbotron {
  padding: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eee;
}
.jumbotron h1,
.jumbotron .h1 {
  color: inherit;
}
.jumbotron p {
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
}
.container .jumbotron {
  border-radius: 6px;
}
.jumbotron .container {
  max-width: 100%;
}
@media screen and (min-width: 768px) {
  .jumbotron {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .container .jumbotron {
    padding-right: 60px;
    padding-left: 60px;
  }
  .jumbotron h1,
  .jumbotron .h1 {
    font-size: 63px;
  }
}
.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.thumbnail > img,
.thumbnail a > img {
  margin-right: auto;
  margin-left: auto;
}
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: #428bca;
}
.thumbnail .caption {
  padding: 9px;
  color: #333;
}
.alert {
  padding: 15px;
  margin-bottom: 20px;
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
.alert-dismissable {
  padding-right: 35px;
}
.alert-dismissable .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.alert-success hr {
  border-top-color: #c9e2b3;
}
.alert-success .alert-link {
  color: #2b542c;
}
.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.alert-info hr {
  border-top-color: #a6e1ec;
}
.alert-info .alert-link {
  color: #245269;
}
.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.alert-warning hr {
  border-top-color: #f7e1b5;
}
.alert-warning .alert-link {
  color: #66512c;
}
.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.alert-danger hr {
  border-top-color: #e4b9c0;
}
.alert-danger .alert-link {
  color: #843534;
}
@-webkit-keyframes progress-bar-stripes {
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
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
}
.progress-bar {
  float: left;
  width: 0;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #428bca;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
  -webkit-transition: width .6s ease;
          transition: width .6s ease;
}
.progress-striped .progress-bar {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-size: 40px 40px;
}
.progress.active .progress-bar {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
          animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-success {
  background-color: #5cb85c;
}
.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-info {
  background-color: #5bc0de;
}
.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-warning {
  background-color: #f0ad4e;
}
.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-danger {
  background-color: #d9534f;
}
.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.media,
.media-body {
  overflow: hidden;
  zoom: 1;
}
.media,
.media .media {
  margin-top: 15px;
}
.media:first-child {
  margin-top: 0;
}
.media-object {
  display: block;
}
.media-heading {
  margin: 0 0 5px;
}
.media > .pull-left {
  margin-right: 10px;
}
.media > .pull-right {
  margin-left: 10px;
}
.media-list {
  padding-left: 0;
  list-style: none;
}
.list-group {
  padding-left: 0;
  margin-bottom: 20px;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}
.list-group-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.list-group-item > .badge {
  float: right;
}
.list-group-item > .badge + .badge {
  margin-right: 5px;
}
a.list-group-item {
  color: #555;
}
a.list-group-item .list-group-item-heading {
  color: #333;
}
a.list-group-item:hover,
a.list-group-item:focus {
  text-decoration: none;
  background-color: #f5f5f5;
}
a.list-group-item.active,
a.list-group-item.active:hover,
a.list-group-item.active:focus {
  z-index: 2;
  color: #fff;
  background-color: #428bca;
  border-color: #428bca;
}
a.list-group-item.active .list-group-item-heading,
a.list-group-item.active:hover .list-group-item-heading,
a.list-group-item.active:focus .list-group-item-heading {
  color: inherit;
}
a.list-group-item.active .list-group-item-text,
a.list-group-item.active:hover .list-group-item-text,
a.list-group-item.active:focus .list-group-item-text {
  color: #e1edf7;
}
.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}
a.list-group-item-success {
  color: #3c763d;
}
a.list-group-item-success .list-group-item-heading {
  color: inherit;
}
a.list-group-item-success:hover,
a.list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}
a.list-group-item-success.active,
a.list-group-item-success.active:hover,
a.list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}
.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}
a.list-group-item-info {
  color: #31708f;
}
a.list-group-item-info .list-group-item-heading {
  color: inherit;
}
a.list-group-item-info:hover,
a.list-group-item-info:focus {
  color: #31708f;
  background-color: #c4e3f3;
}
a.list-group-item-info.active,
a.list-group-item-info.active:hover,
a.list-group-item-info.active:focus {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}
.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}
a.list-group-item-warning {
  color: #8a6d3b;
}
a.list-group-item-warning .list-group-item-heading {
  color: inherit;
}
a.list-group-item-warning:hover,
a.list-group-item-warning:focus {
  color: #8a6d3b;
  background-color: #faf2cc;
}
a.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}
.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}
a.list-group-item-danger {
  color: #a94442;
}
a.list-group-item-danger .list-group-item-heading {
  color: inherit;
}
a.list-group-item-danger:hover,
a.list-group-item-danger:focus {
  color: #a94442;
  background-color: #ebcccc;
}
a.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
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
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}
.panel-body {
  padding: 15px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}
.panel-title > a {
  color: inherit;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .list-group {
  margin-bottom: 0;
}
.panel > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.panel > .table,
.panel > .table-responsive > .table {
  margin-bottom: 0;
}
.panel > .table:first-child,
.panel > .table-responsive:first-child > .table:first-child {
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
.panel > .panel-body + .table-responsive {
  border-top: 1px solid #ddd;
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
  margin-bottom: 0;
  border: 0;
}
.panel-group {
  margin-bottom: 20px;
}
.panel-group .panel {
  margin-bottom: 0;
  overflow: hidden;
  border-radius: 4px;
}
.panel-group .panel + .panel {
  margin-top: 5px;
}
.panel-group .panel-heading {
  border-bottom: 0;
}
.panel-group .panel-heading + .panel-collapse .panel-body {
  border-top: 1px solid #ddd;
}
.panel-group .panel-footer {
  border-top: 0;
}
.panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #ddd;
}
.panel-default {
  border-color: #ddd;
}
.panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-default > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #ddd;
}
.panel-default > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #ddd;
}
.panel-primary {
  border-color: #428bca;
}
.panel-primary > .panel-heading {
  color: #fff;
  background-color: #428bca;
  border-color: #428bca;
}
.panel-primary > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #428bca;
}
.panel-primary > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #428bca;
}
.panel-success {
  border-color: #d6e9c6;
}
.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #d6e9c6;
}
.panel-info {
  border-color: #bce8f1;
}
.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #bce8f1;
}
.panel-info > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #bce8f1;
}
.panel-warning {
  border-color: #faebcc;
}
.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #faebcc;
}
.panel-warning > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #faebcc;
}
.panel-danger {
  border-color: #ebccd1;
}
.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #ebccd1;
}
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
}
.well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, .15);
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
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  filter: alpha(opacity=20);
  opacity: .2;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  filter: alpha(opacity=50);
  opacity: .5;
}
button.close {
  -webkit-appearance: none;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
}
.modal-open {
  overflow: hidden;
}
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.modal.fade .modal-dialog {
  -webkit-transition: -webkit-transform .3s ease-out;
     -moz-transition:    -moz-transform .3s ease-out;
       -o-transition:      -o-transform .3s ease-out;
          transition:         transform .3s ease-out;
  -webkit-transform: translate(0, -25%);
      -ms-transform: translate(0, -25%);
          transform: translate(0, -25%);
}
.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
          transform: translate(0, 0);
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  outline: none;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
}
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}
.modal-backdrop.fade {
  filter: alpha(opacity=0);
  opacity: 0;
}
.modal-backdrop.in {
  filter: alpha(opacity=50);
  opacity: .5;
}
.modal-header {
  min-height: 16.42857143px;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
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
  padding: 19px 20px 20px;
  margin-top: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.modal-footer .btn + .btn {
  margin-bottom: 0;
  margin-left: 5px;
}
.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
.modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
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
  z-index: 1030;
  display: block;
  font-size: 12px;
  line-height: 1.4;
  visibility: visible;
  filter: alpha(opacity=0);
  opacity: 0;
}
.tooltip.in {
  filter: alpha(opacity=90);
  opacity: .9;
}
.tooltip.top {
  padding: 5px 0;
  margin-top: -3px;
}
.tooltip.right {
  padding: 0 5px;
  margin-left: 3px;
}
.tooltip.bottom {
  padding: 5px 0;
  margin-top: 3px;
}
.tooltip.left {
  padding: 0 5px;
  margin-left: -3px;
}
.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #000;
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
  border-top-color: #000;
}
.tooltip.top-left .tooltip-arrow {
  bottom: 0;
  left: 5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.top-right .tooltip-arrow {
  right: 5px;
  bottom: 0;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}
.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000;
}
.tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-left .tooltip-arrow {
  top: 0;
  left: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-right .tooltip-arrow {
  top: 0;
  right: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1010;
  display: none;
  max-width: 276px;
  padding: 1px;
  text-align: left;
  white-space: normal;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
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
  padding: 8px 14px;
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
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
  content: "";
  border-width: 10px;
}
.popover.top > .arrow {
  bottom: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-color: #999;
  border-top-color: rgba(0, 0, 0, .25);
  border-bottom-width: 0;
}
.popover.top > .arrow:after {
  bottom: 1px;
  margin-left: -10px;
  content: " ";
  border-top-color: #fff;
  border-bottom-width: 0;
}
.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-right-color: #999;
  border-right-color: rgba(0, 0, 0, .25);
  border-left-width: 0;
}
.popover.right > .arrow:after {
  bottom: -10px;
  left: 1px;
  content: " ";
  border-right-color: #fff;
  border-left-width: 0;
}
.popover.bottom > .arrow {
  top: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999;
  border-bottom-color: rgba(0, 0, 0, .25);
}
.popover.bottom > .arrow:after {
  top: 1px;
  margin-left: -10px;
  content: " ";
  border-top-width: 0;
  border-bottom-color: #fff;
}
.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999;
  border-left-color: rgba(0, 0, 0, .25);
}
.popover.left > .arrow:after {
  right: 1px;
  bottom: -10px;
  content: " ";
  border-right-width: 0;
  border-left-color: #fff;
}
.carousel {
  position: relative;
}
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner > .item {
  position: relative;
  display: none;
  -webkit-transition: .6s ease-in-out left;
          transition: .6s ease-in-out left;
}
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  line-height: 1;
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
  bottom: 0;
  left: 0;
  width: 15%;
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
  filter: alpha(opacity=50);
  opacity: .5;
}
.carousel-control.left {
  background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, .5) 0%), color-stop(rgba(0, 0, 0, .0001) 100%));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control.right {
  right: 0;
  left: auto;
  background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, .0001) 0%), color-stop(rgba(0, 0, 0, .5) 100%));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control:hover,
.carousel-control:focus {
  color: #fff;
  text-decoration: none;
  filter: alpha(opacity=90);
  outline: none;
  opacity: .9;
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
}
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
  right: 50%;
}
.carousel-control .icon-prev,
.carousel-control .icon-next {
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
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
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none;
}
.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #000 \\9;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
  border-radius: 10px;
}
.carousel-indicators .active {
  width: 12px;
  height: 12px;
  margin: 0;
  background-color: #fff;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
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
    margin-left: -15px;
    font-size: 30px;
  }
  .carousel-caption {
    right: 20%;
    left: 20%;
    padding-bottom: 30px;
  }
  .carousel-indicators {
    bottom: 20px;
  }
}
.clearfix:before,
.clearfix:after,
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
  display: table;
  content: " ";
}
.clearfix:after,
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
  margin-right: auto;
  margin-left: auto;
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
.visible-print {
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
@media print {
  .hidden-print {
    display: none !important;
  }
}
/*# sourceMappingURL=bootstrap.css.map */
`,"example/css/custom.css":`/* ------------------------------------------------------------- */\r
/* ---------------------------BRKOR----------------------------- */\r
/* ------------------------------------------------------------- */\r
\r
/* General Styles ---------------------------------------------- */\r
\r
body {\r
    background: url('../img/bg.png');\r
    background-position: top center;\r
    background-attachment: fixed;\r
    background-color: #fff;\r
    color: #000;\r
    font-family: 'Open Sans', sans-serif;\r
    font-size: 13px;\r
	overflow-x: hidden;\r
}\r
\r
header {\r
	margin-top: 50px;\r
}\r
\r
a {\r
    color: #000;\r
    text-decoration: none;\r
    outline: none;\r
    outline-offset: 0;\r
    padding-bottom: 3px;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
a:hover, \r
a:active, \r
a:focus {\r
    color: #000;\r
    text-decoration: none;\r
    outline: none;\r
    outline-offset: 0;\r
    border-bottom: 1px solid #000;\r
}\r
\r
\r
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\r
    font-family: 'Segoe UI', 'Open Sans', sans-serif;    \r
}\r
\r
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\r
    padding-right: 15px;\r
    padding-left: 15px;\r
}\r
\r
.title {\r
    font-size: larger;\r
    font-weight: bold;\r
    text-transform: uppercase;\r
    padding-left: 0px;\r
}\r
\r
.title:hover {\r
    padding-left: 0px !important;\r
}\r
\r
.title .glyphicon {\r
    background-color: rgba(0, 0, 0, 0.75);\r
    color: #fff;\r
    left: -110px;\r
    padding: 10px;\r
    -webkit-border-radius: 20px;\r
    -moz-border-radius: 20px;\r
    border-radius: 20px;\r
    font-size: smaller;\r
}\r
\r
hr {\r
    margin-top: 10px;\r
    margin-bottom: 15px;\r
    border: 0;\r
    border-top: 3px solid rgba(0, 0, 0, 0.1);\r
}\r
\r
hr.empty {\r
    padding: 7px 0;\r
    border: 0;\r
}\r
\r
strong {\r
    font-size: larger;\r
    font-weight: normal;\r
}\r
\r
\r
.progress {\r
    background-color: rgba(0, 0, 0, 0.05);\r
    height: 7px;\r
    margin-left: 9px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
.progress-bar {\r
    width: 0;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-box-shadow: none;\r
    -moz-box-shadow: none;\r
    box-shadow: none;\r
    -webkit-transition: width 3s ease;\r
    -moz-transition: width 3s ease;\r
    transition: width 3s ease;\r
}\r
\r
.progress-bar-success {\r
    background-color: #ffa700;\r
}\r
\r
.annotation {\r
    float: right;\r
    opacity: .75;\r
    font-style: italic;\r
}\r
\r
.chart {\r
    position: relative;\r
    display: inline-block;\r
    width: 110px;\r
    height: 110px;\r
    margin-top: 25px;\r
    margin-bottom: 50px;\r
    margin-right: 5%;\r
    text-align: center;\r
}\r
\r
.chart canvas {\r
    position: absolute;\r
    top: 35px;\r
    left: 0;\r
}\r
\r
.percent {\r
    display: inline-block;\r
    line-height: 140px;\r
    z-index: 2;\r
    opacity: .75;\r
    font-style: italic;\r
}\r
\r
.percent:after {\r
    content: '%';\r
    margin-left: 0.1em;\r
}\r
\r
.skill {\r
    display: block;\r
}\r
\r
ul {\r
    padding: 10px 0 0 13px;\r
    margin: 0;\r
    border-left: 3px solid rgba(0, 0, 0, 0.05);\r
}\r
\r
\r
ul li {\r
    list-style-image: url('../img/list-style.png');\r
    padding: 10px 0 10px 27px;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
ul li:hover {\r
    list-style-image: url('../img/list-style-on.png');\r
    padding-left: 40px !important;\r
}\r
\r
.static:hover {\r
    padding-left: 27px !important;\r
}\r
\r
ul li p {\r
    padding-left: 8px;\r
}\r
\r
ul .note {\r
    display: inline-block;\r
    margin: 8px;\r
    opacity: .75;\r
    text-transform: uppercase;\r
}\r
\r
ul .description {\r
    opacity: .75;\r
}\r
\r
.title {\r
    list-style-image: url('../img/ls.png') !important;\r
}\r
\r
.title:hover {\r
    padding-left: 0px !important;\r
}\r
\r
/* Top icons ------------------------------------------------- */\r
\r
.top-icons {\r
	position: fixed;\r
    top: 50px;\r
    left: 47px;\r
	width: 100%;\r
}\r
\r
.top-menu {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-menu:hover {\r
    background-color: #00ce08;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
.top-download-resume {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-download-resume:hover {\r
    background-color: #0093ff;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
.top-contact {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-contact:hover {\r
    background-color: #ff003b;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
/* Nav ------------------------------------------------- */\r
\r
nav {\r
    position: fixed;\r
    top: 33%;\r
    left: 50px;\r
    z-index: 999;\r
}\r
\r
nav ul {\r
    padding: 10px 0 0 10px;\r
    margin: 0px;\r
    border-left: 4px solid rgba(0, 0, 0, 0.05);\r
}\r
\r
nav ul li:first-child {\r
    margin-top: -25px;\r
}\r
\r
nav ul li {\r
    list-style-image: url('../img/list-style-nav.png');\r
    padding: 5px 15px;\r
    font-size: 13px;\r
    text-transform: uppercase;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
nav ul li:hover {\r
    list-style-image: url('../img/list-style-nav-on.png');\r
    padding-left: 25px !important;\r
    color: #000;\r
}\r
\r
nav ul li:hover a {\r
    color: #000;\r
}\r
\r
nav ul li.active {\r
    list-style-image: url('../img/list-style-nav-on.png');\r
    color: #000;\r
}\r
\r
nav a {\r
    border-bottom: 0;\r
}\r
\r
nav a:hover, \r
nav a:active, \r
nav a:focus {\r
    border-bottom: 0;\r
}\r
\r
nav li a {\r
    border-bottom: 0;\r
    color: rgba(0, 0, 0, 0.5);\r
}\r
\r
nav .active a {\r
    color: #000;\r
    font-weight: bold;\r
}\r
\r
#mini-nav {\r
    background-color: #fff;\r
    position: fixed;\r
    width: 100%;\r
    top: 0;\r
    left: 0;\r
    text-align: center;\r
    font-weight: bold;\r
}\r
\r
#mini-nav ul {\r
    width: 100%;\r
    border: 0;\r
    padding: 7px 0 10px 0;\r
    \r
}\r
\r
#mini-nav ul li {\r
    list-style-image: none;\r
    padding: 0 !important;\r
}\r
\r
#mini-nav ul li:first-child {\r
    margin-top: 0;\r
}\r
\r
#mini-nav .dropdown-menu {\r
    margin: 0;\r
    font-size: 14px;\r
    list-style: none;\r
    background-color: #fff;\r
    border: 0;\r
    border-radius: 0;\r
    -webkit-box-shadow: none;\r
    box-shadow: none;\r
}\r
\r
.dropdown-menu > .active > a, \r
.dropdown-menu > .active > a:hover, \r
.dropdown-menu > .active > a:focus {\r
    background-color: #000;\r
}\r
\r
/* Header ------------------------------------------------- */\r
\r
.face {\r
    height: 200px;\r
    width: 200px;\r
    border-radius: 50%;\r
}\r
\r
.header-name {\r
    background-color: #000;\r
    padding: 5px 17px;\r
    display: inline-block;\r
    color: #fff;\r
    font-size: 18px;\r
    font-weight: 700;\r
    text-transform: uppercase;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-left: 3px solid #f00;\r
    border-right: 3px solid #0045ff;\r
}\r
\r
.header-title {\r
    font-size: 16px;\r
}\r
\r
.header-subtitle {\r
    padding-top: 25px;\r
    font-style: italic;\r
    margin-bottom: 100px;\r
}\r
\r
/* Profile ------------------------------------------------- */\r
\r
.profile .title .glyphicon{\r
    background-color: #9300ff;\r
}\r
\r
/* Work experience ------------------------------------------------- */\r
\r
.work-experience .title .glyphicon{\r
    background-color: #00a7ff;\r
}\r
\r
/* Education ------------------------------------------------- */\r
\r
.education .title .glyphicon{\r
    background-color: #07b500;\r
}\r
\r
/* Professional skills ------------------------------------------------- */\r
\r
.professional-skills .title .glyphicon{\r
    background-color: #ffa700;\r
}\r
\r
/* Personal skills ------------------------------------------------- */\r
\r
.personal-skills .title .glyphicon{\r
    background-color: #00aca5;\r
}\r
\r
/* Interests ------------------------------------------------- */\r
\r
.interests .title .glyphicon{\r
    background-color: #f00;\r
}\r
\r
/* Portfolio ------------------------------------------------ */\r
\r
.portfolio .title .glyphicon{\r
    background-color: #0089ff;\r
}\r
\r
.portfolio img {\r
    width: 100px;\r
    margin-right: 5px;\r
    margin-bottom: 5px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.portfolio img:hover {\r
    opacity: .75;\r
}\r
\r
.portfolio img:first-child {\r
    margin-left: 8px;\r
}\r
\r
.dismiss {\r
    position: relative;\r
    background-color: rgba(0, 0, 0, 0.25);\r
    top: -4px;\r
    left: 100%;\r
    color: #fff;\r
    padding: 5px 7px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0 !important;\r
    z-index: -1;\r
    -webkit-transition: all 0.3s ease;\r
    -moz-transition: all 0.3s ease;\r
    transition: all 0.3s ease;\r
}\r
\r
.dismiss:hover {\r
    background-color: #fff;\r
}\r
\r
.modal {\r
	text-align: center;\r
}\r
\r
.modal img {\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
/* Contact Form ------------------------------------------------ */\r
\r
.contact .title .glyphicon{\r
    background-color: #00c60f;\r
}\r
\r
.contact ul li:hover {\r
    padding-left: 27px;\r
}\r
\r
form {\r
    margin-left: 9px;\r
}\r
\r
.contact-on {\r
    position: fixed;\r
    bottom: 50px;\r
    background: #202020;\r
    height: auto;\r
    width: 100%;\r
    padding-top: 35px;\r
    padding-bottom: 25px;\r
    z-index: 999;\r
    display: none;\r
}\r
\r
.form-control {\r
    display: block;\r
    width: 100%;\r
    height: 35px;\r
    padding: 6px 15px;\r
    font-size: 12px;\r
    color: #000;\r
    background-color: rgba(255, 255, 255, 0.75);\r
    background-image: none;\r
    border: 0;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-box-shadow: none;\r
    -moz-box-shadow: none;\r
    box-shadow: none;\r
}\r
\r
.form-control:focus {\r
    border: 0;\r
    background-color: #fff;\r
    color: #000;\r
}\r
\r
textarea.form-control {\r
    height: 85px;\r
    resize: none;\r
}\r
\r
.input-group-addon {\r
    color: #000;\r
    background-color: rgba(0, 0, 0, 0.05);\r
    border: 0;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
form .glyphicon {\r
    opacity: .25;\r
}\r
\r
.btn-success {\r
    font-size: 12px;\r
    color: #000;\r
    background-color: rgba(255, 255, 255, 0.5);\r
    border-color: rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.btn .glyphicon {\r
    margin-right: 7px;\r
    opacity: 1;\r
}\r
\r
.btn-success:hover, \r
.btn-success:focus, \r
.btn-success:active, \r
.btn-success.active {\r
    color: #fff;\r
    background-color: #15b900;\r
    border-color: rgba(0, 0, 0, 0.1);\r
}\r
\r
/* Up ------------------------------------------------ */\r
\r
.contact .title.up .glyphicon{\r
    background-color: #ffad00;\r
}\r
\r
.up {\r
	margin-bottom: 100px;\r
    cursor: pointer;\r
}\r
`,"example/css/dark.css":`/* ------------------------------------------------------------- */
/* ---------------------------BRKOR----------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------ Dark theme ------------------------- */

body {
    background: url('../img/bg-dark.png');
    background-position: top center;
    background-attachment: fixed;
    background-color: #2a2a2a;
    color: #fff;
}

a {
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

a:hover, 
a:active, 
a:focus {
    color: #fff;
    border-bottom: 1px solid #fff;
}

nav ul {
    border-left: 4px solid rgba(0, 0, 0, 0.05);
}


nav ul li {
    list-style-image: url('../img/list-style-nav.png');
}

nav ul li:hover {
    list-style-image: url('../img/list-style-nav-white-on.png');
    color: #fff;
}

nav ul li:hover a {
    color: #fff;
}

nav ul li.active {
    list-style-image: url('../img/list-style-nav-white-on.png');
    color: #fff;
}

nav li a {
    border-bottom: 0;
    color: rgba(255, 255, 255, 0.5);
}

nav .active a {
    color: #fff;
}

.header-name {
    background-color: #fff;
    color: #000;
}

.dismiss:hover {
    color: #000;
}

.form-control {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.input-group-addon {
    background-color: rgba(255, 255, 255, 0.05);
    color: #fff;
}

.btn-success {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
}`,"example/example.html":`<!DOCTYPE html>

<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->

<html class="not-ie" lang="en">
<!--<![endif]-->
    
<head>
<meta charset="utf-8">
<meta name="description" content="description" />
<meta name="keywords" content="keywords"/>
<meta name="author" content="BRKOR" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<title>Resume Timeline</title>

<!-- google web font-->
<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700' rel='stylesheet' type='text/css'>

<!-- style sheets-->
<style>

html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
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
  background: transparent;
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
  margin: .67em 0;
  font-size: 2em;
}
mark {
  color: #000;
  background: #ff0;
}
small {
  font-size: 80%;
}
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sup {
  top: -.5em;
}
sub {
  bottom: -.25em;
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
  height: 0;
  -moz-box-sizing: content-box;
       box-sizing: content-box;
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
  margin: 0;
  font: inherit;
  color: inherit;
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
  padding: 0;
  border: 0;
}
input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
  -webkit-appearance: textfield;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset {
  padding: .35em .625em .75em;
  margin: 0 2px;
  border: 1px solid #c0c0c0;
}
legend {
  padding: 0;
  border: 0;
}
textarea {
  overflow: auto;
}
optgroup {
  font-weight: bold;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
td,
th {
  padding: 0;
}
@media print {
  * {
    color: #000 !important;
    text-shadow: none !important;
    box-shadow: none !important;
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
  a[href^="javascript:"]:after,
  a[href^="#"]:after {
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
  .table td,
  .table th {
    background-color: #fff !important;
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
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
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
  font-size: 62.5%;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background-color: #fff;
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
  color: #428bca;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #2a6496;
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
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.img-circle {
  border-radius: 50%;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
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
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
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
  color: #999;
}
h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 20px;
  margin-bottom: 10px;
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
  margin-top: 10px;
  margin-bottom: 10px;
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
  font-size: 36px;
}
h2,
.h2 {
  font-size: 30px;
}
h3,
.h3 {
  font-size: 24px;
}
h4,
.h4 {
  font-size: 18px;
}
h5,
.h5 {
  font-size: 14px;
}
h6,
.h6 {
  font-size: 12px;
}
p {
  margin: 0 0 10px;
}
.lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 200;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .lead {
    font-size: 21px;
  }
}
small,
.small {
  font-size: 85%;
}
cite {
  font-style: normal;
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
.text-muted {
  color: #999;
}
.text-primary {
  color: #428bca;
}
a.text-primary:hover {
  color: #3071a9;
}
.text-success {
  color: #3c763d;
}
a.text-success:hover {
  color: #2b542c;
}
.text-info {
  color: #31708f;
}
a.text-info:hover {
  color: #245269;
}
.text-warning {
  color: #8a6d3b;
}
a.text-warning:hover {
  color: #66512c;
}
.text-danger {
  color: #a94442;
}
a.text-danger:hover {
  color: #843534;
}
.bg-primary {
  color: #fff;
  background-color: #428bca;
}
a.bg-primary:hover {
  background-color: #3071a9;
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
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
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
  margin-left: -5px;
  list-style: none;
}
.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
dl {
  margin-top: 0;
  margin-bottom: 20px;
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
    overflow: hidden;
    clear: left;
    text-align: right;
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
  border-bottom: 1px dotted #999;
}
.initialism {
  font-size: 90%;
  text-transform: uppercase;
}
blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
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
  color: #999;
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
  text-align: right;
  border-right: 5px solid #eee;
  border-left: 0;
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
blockquote:before,
blockquote:after {
  content: "";
}
address {
  margin-bottom: 20px;
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
  white-space: nowrap;
  background-color: #f9f2f4;
  border-radius: 4px;
}
kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #fff;
  background-color: #333;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
}
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
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
  right: 0;
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
  left: 0;
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
  margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
  }
}
table {
  max-width: 100%;
  background-color: transparent;
}
th {
  text-align: left;
}
.table {
  width: 100%;
  margin-bottom: 20px;
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
  border-top: 1px solid #ddd;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
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
  border-top: 2px solid #ddd;
}
.table .table {
  background-color: #fff;
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
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}
.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #f9f9f9;
}
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
  background-color: #f5f5f5;
}
table col[class*="col-"] {
  position: static;
  display: table-column;
  float: none;
}
table td[class*="col-"],
table th[class*="col-"] {
  position: static;
  display: table-cell;
  float: none;
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
.table-hover > tbody > tr.danger:hover > th {
  background-color: #ebcccc;
}
@media (max-width: 767px) {
  .table-responsive {
    width: 100%;
    margin-bottom: 15px;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
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
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: inherit;
  color: #333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}
label {
  display: inline-block;
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
  /* IE8-9 */
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
  padding-top: 7px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
}
.form-control::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  cursor: not-allowed;
  background-color: #eee;
  opacity: 1;
}
textarea.form-control {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: none;
}
input[type="date"] {
  line-height: 34px;
}
.form-group {
  margin-bottom: 15px;
}
.radio,
.checkbox {
  display: block;
  min-height: 20px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.radio label,
.checkbox label {
  display: inline;
  font-weight: normal;
  cursor: pointer;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  float: left;
  margin-left: -20px;
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
  font-weight: normal;
  vertical-align: middle;
  cursor: pointer;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
input[type="radio"][disabled],
input[type="checkbox"][disabled],
.radio[disabled],
.radio-inline[disabled],
.checkbox[disabled],
.checkbox-inline[disabled],
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"],
fieldset[disabled] .radio,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}
.input-sm {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-sm {
  height: 30px;
  line-height: 30px;
}
textarea.input-sm,
select[multiple].input-sm {
  height: auto;
}
.input-lg {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
select.input-lg {
  height: 46px;
  line-height: 46px;
}
textarea.input-lg,
select[multiple].input-lg {
  height: auto;
}
.has-feedback {
  position: relative;
}
.has-feedback .form-control {
  padding-right: 42.5px;
}
.has-feedback .form-control-feedback {
  position: absolute;
  top: 25px;
  right: 0;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
}
.has-success .help-block,
.has-success .control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline {
  color: #3c763d;
}
.has-success .form-control {
  border-color: #3c763d;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-success .form-control:focus {
  border-color: #2b542c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
}
.has-success .input-group-addon {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #3c763d;
}
.has-success .form-control-feedback {
  color: #3c763d;
}
.has-warning .help-block,
.has-warning .control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline {
  color: #8a6d3b;
}
.has-warning .form-control {
  border-color: #8a6d3b;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-warning .form-control:focus {
  border-color: #66512c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
}
.has-warning .input-group-addon {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #8a6d3b;
}
.has-warning .form-control-feedback {
  color: #8a6d3b;
}
.has-error .help-block,
.has-error .control-label,
.has-error .radio,
.has-error .checkbox,
.has-error .radio-inline,
.has-error .checkbox-inline {
  color: #a94442;
}
.has-error .form-control {
  border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-error .form-control:focus {
  border-color: #843534;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
}
.has-error .input-group-addon {
  color: #a94442;
  background-color: #f2dede;
  border-color: #a94442;
}
.has-error .form-control-feedback {
  color: #a94442;
}
.form-control-static {
  margin-bottom: 0;
}
.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
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
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    float: none;
    margin-left: 0;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}
.form-horizontal .control-label,
.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  padding-top: 7px;
  margin-top: 0;
  margin-bottom: 0;
}
.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 27px;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
.form-horizontal .form-control-static {
  padding-top: 7px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    text-align: right;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
  top: 0;
  right: 15px;
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus {
  color: #333;
  text-decoration: none;
}
.btn:active,
.btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  pointer-events: none;
  cursor: not-allowed;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
          box-shadow: none;
  opacity: .65;
}
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.btn-default:hover,
.btn-default:focus,
.btn-default:active,
.btn-default.active,
.open .dropdown-toggle.btn-default {
  color: #333;
  background-color: #ebebeb;
  border-color: #adadad;
}
.btn-default:active,
.btn-default.active,
.open .dropdown-toggle.btn-default {
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
.btn-default.disabled:active,
.btn-default[disabled]:active,
fieldset[disabled] .btn-default:active,
.btn-default.disabled.active,
.btn-default[disabled].active,
fieldset[disabled] .btn-default.active {
  background-color: #fff;
  border-color: #ccc;
}
.btn-default .badge {
  color: #fff;
  background-color: #333;
}
.btn-primary {
  color: #fff;
  background-color: #428bca;
  border-color: #357ebd;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #3276b1;
  border-color: #285e8e;
}
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
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
.btn-primary.disabled:active,
.btn-primary[disabled]:active,
fieldset[disabled] .btn-primary:active,
.btn-primary.disabled.active,
.btn-primary[disabled].active,
fieldset[disabled] .btn-primary.active {
  background-color: #428bca;
  border-color: #357ebd;
}
.btn-primary .badge {
  color: #428bca;
  background-color: #fff;
}
.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
  color: #fff;
  background-color: #47a447;
  border-color: #398439;
}
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
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
.btn-success.disabled:active,
.btn-success[disabled]:active,
fieldset[disabled] .btn-success:active,
.btn-success.disabled.active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success.active {
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success .badge {
  color: #5cb85c;
  background-color: #fff;
}
.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info:hover,
.btn-info:focus,
.btn-info:active,
.btn-info.active,
.open .dropdown-toggle.btn-info {
  color: #fff;
  background-color: #39b3d7;
  border-color: #269abc;
}
.btn-info:active,
.btn-info.active,
.open .dropdown-toggle.btn-info {
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
.btn-info.disabled:active,
.btn-info[disabled]:active,
fieldset[disabled] .btn-info:active,
.btn-info.disabled.active,
.btn-info[disabled].active,
fieldset[disabled] .btn-info.active {
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info .badge {
  color: #5bc0de;
  background-color: #fff;
}
.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active,
.btn-warning.active,
.open .dropdown-toggle.btn-warning {
  color: #fff;
  background-color: #ed9c28;
  border-color: #d58512;
}
.btn-warning:active,
.btn-warning.active,
.open .dropdown-toggle.btn-warning {
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
.btn-warning.disabled:active,
.btn-warning[disabled]:active,
fieldset[disabled] .btn-warning:active,
.btn-warning.disabled.active,
.btn-warning[disabled].active,
fieldset[disabled] .btn-warning.active {
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}
.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger:hover,
.btn-danger:focus,
.btn-danger:active,
.btn-danger.active,
.open .dropdown-toggle.btn-danger {
  color: #fff;
  background-color: #d2322d;
  border-color: #ac2925;
}
.btn-danger:active,
.btn-danger.active,
.open .dropdown-toggle.btn-danger {
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
.btn-danger.disabled:active,
.btn-danger[disabled]:active,
fieldset[disabled] .btn-danger:active,
.btn-danger.disabled.active,
.btn-danger[disabled].active,
fieldset[disabled] .btn-danger.active {
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger .badge {
  color: #d9534f;
  background-color: #fff;
}
.btn-link {
  font-weight: normal;
  color: #428bca;
  cursor: pointer;
  border-radius: 0;
}
.btn-link,
.btn-link:active,
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
  color: #2a6496;
  text-decoration: underline;
  background-color: transparent;
}
.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:focus {
  color: #999;
  text-decoration: none;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-block {
  display: block;
  width: 100%;
  padding-right: 0;
  padding-left: 0;
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
  -webkit-transition: opacity .15s linear;
          transition: opacity .15s linear;
}
.fade.in {
  opacity: 1;
}
.collapse {
  display: none;
}
.collapse.in {
  display: block;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height .35s ease;
          transition: height .35s ease;
}
@font-face {
  font-family: 'Glyphicons Halflings';

  src: url('../fonts/glyphicons-halflings-regular.eot');
  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
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
.glyphicon-euro:before {
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
  font-size: 14px;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}
.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}
.dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  color: #262626;
  text-decoration: none;
  background-color: #f5f5f5;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  background-color: #428bca;
  outline: 0;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  color: #999;
}
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
}
.open > .dropdown-menu {
  display: block;
}
.open > a {
  outline: 0;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
}
.dropdown-menu-left {
  right: auto;
  left: 0;
}
.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #999;
}
.dropdown-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
}
.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  content: "";
  border-top: 0;
  border-bottom: 4px solid;
}
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 1px;
}
@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: 0;
    left: auto;
  }
  .navbar-right .dropdown-menu-left {
    right: auto;
    left: 0;
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
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus {
  outline: none;
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
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child > .btn:last-child,
.btn-group > .btn-group:first-child > .dropdown-toggle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn-group:last-child > .btn:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
  padding-right: 8px;
  padding-left: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-right: 12px;
  padding-left: 12px;
}
.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
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
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
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
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  display: table-cell;
  float: none;
  width: 1%;
}
.btn-group-justified > .btn-group .btn {
  width: 100%;
}
[data-toggle="buttons"] > .btn > input[type="radio"],
[data-toggle="buttons"] > .btn > input[type="checkbox"] {
  display: none;
}
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group[class*="col-"] {
  float: none;
  padding-right: 0;
  padding-left: 0;
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
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  line-height: 46px;
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
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
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
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #555;
  text-align: center;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}
.input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 18px;
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
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
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
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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
  padding-left: 0;
  margin-bottom: 0;
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
  background-color: #eee;
}
.nav > li.disabled > a {
  color: #999;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #999;
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eee;
  border-color: #428bca;
}
.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
.nav-tabs {
  border-bottom: 1px solid #ddd;
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
  border-color: #eee #eee #ddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li {
  float: none;
}
.nav-tabs.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
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
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #fff;
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
  color: #fff;
  background-color: #428bca;
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
  margin-bottom: 5px;
  text-align: center;
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
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:hover,
  .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
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
  max-height: 340px;
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
}
.navbar-collapse.in {
  overflow-y: auto;
}
@media (min-width: 768px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
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
    padding-right: 0;
    padding-left: 0;
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
  height: 50px;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
}
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
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
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.navbar-toggle:focus {
  outline: none;
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
  margin: 7.5px -15px;
}
.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}
@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }
  .navbar-nav .open .dropdown-menu > li > a,
  .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: 20px;
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
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .navbar-nav.navbar-right:last-child {
    margin-right: -15px;
  }
}
@media (min-width: 768px) {
  .navbar-left {
    float: left !important;
  }
  .navbar-right {
    float: right !important;
  }
}
.navbar-form {
  padding: 10px 15px;
  margin-top: 8px;
  margin-right: -15px;
  margin-bottom: 8px;
  margin-left: -15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
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
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio input[type="radio"],
  .navbar-form .checkbox input[type="checkbox"] {
    float: none;
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
}
@media (min-width: 768px) {
  .navbar-form {
    width: auto;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0;
    margin-left: 0;
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .navbar-form.navbar-right:last-child {
    margin-right: -15px;
  }
}
.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.navbar-btn {
  margin-top: 8px;
  margin-bottom: 8px;
}
.navbar-btn.btn-sm {
  margin-top: 10px;
  margin-bottom: 10px;
}
.navbar-btn.btn-xs {
  margin-top: 14px;
  margin-bottom: 14px;
}
.navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .navbar-text {
    float: left;
    margin-right: 15px;
    margin-left: 15px;
  }
  .navbar-text.navbar-right:last-child {
    margin-right: 0;
  }
}
.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
.navbar-default .navbar-brand {
  color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
.navbar-default .navbar-text {
  color: #777;
}
.navbar-default .navbar-nav > li > a {
  color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}
.navbar-default .navbar-toggle {
  border-color: #ddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}
.navbar-default .navbar-link {
  color: #777;
}
.navbar-default .navbar-link:hover {
  color: #333;
}
.navbar-inverse {
  background-color: #222;
  border-color: #080808;
}
.navbar-inverse .navbar-brand {
  color: #999;
}
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-text {
  color: #999;
}
.navbar-inverse .navbar-nav > li > a {
  color: #999;
}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #080808;
}
.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:hover,
.navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444;
  background-color: transparent;
}
.navbar-inverse .navbar-toggle {
  border-color: #333;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
  background-color: #333;
}
.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #fff;
}
.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #101010;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  color: #fff;
  background-color: #080808;
}
@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #999;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #fff;
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #fff;
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444;
    background-color: transparent;
  }
}
.navbar-inverse .navbar-link {
  color: #999;
}
.navbar-inverse .navbar-link:hover {
  color: #fff;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li {
  display: inline-block;
}
.breadcrumb > li + li:before {
  padding: 0 5px;
  color: #ccc;
  content: "/\\00a0";
}
.breadcrumb > .active {
  color: #999;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}
.pagination > li {
  display: inline;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #428bca;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  color: #2a6496;
  background-color: #eee;
  border-color: #ddd;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 2;
  color: #fff;
  cursor: default;
  background-color: #428bca;
  border-color: #428bca;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #999;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 18px;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.pager {
  padding-left: 0;
  margin: 20px 0;
  text-align: center;
  list-style: none;
}
.pager li {
  display: inline;
}
.pager li > a,
.pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
}
.pager li > a:hover,
.pager li > a:focus {
  text-decoration: none;
  background-color: #eee;
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
  color: #999;
  cursor: not-allowed;
  background-color: #fff;
}
.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}
.label[href]:hover,
.label[href]:focus {
  color: #fff;
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
  background-color: #999;
}
.label-default[href]:hover,
.label-default[href]:focus {
  background-color: #808080;
}
.label-primary {
  background-color: #428bca;
}
.label-primary[href]:hover,
.label-primary[href]:focus {
  background-color: #3071a9;
}
.label-success {
  background-color: #5cb85c;
}
.label-success[href]:hover,
.label-success[href]:focus {
  background-color: #449d44;
}
.label-info {
  background-color: #5bc0de;
}
.label-info[href]:hover,
.label-info[href]:focus {
  background-color: #31b0d5;
}
.label-warning {
  background-color: #f0ad4e;
}
.label-warning[href]:hover,
.label-warning[href]:focus {
  background-color: #ec971f;
}
.label-danger {
  background-color: #d9534f;
}
.label-danger[href]:hover,
.label-danger[href]:focus {
  background-color: #c9302c;
}
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  background-color: #999;
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
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
a.list-group-item.active > .badge,
.nav-pills > .active > a > .badge {
  color: #428bca;
  background-color: #fff;
}
.nav-pills > li > a > .badge {
  margin-left: 3px;
}
.jumbotron {
  padding: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eee;
}
.jumbotron h1,
.jumbotron .h1 {
  color: inherit;
}
.jumbotron p {
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
}
.container .jumbotron {
  border-radius: 6px;
}
.jumbotron .container {
  max-width: 100%;
}
@media screen and (min-width: 768px) {
  .jumbotron {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .container .jumbotron {
    padding-right: 60px;
    padding-left: 60px;
  }
  .jumbotron h1,
  .jumbotron .h1 {
    font-size: 63px;
  }
}
.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.thumbnail > img,
.thumbnail a > img {
  margin-right: auto;
  margin-left: auto;
}
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: #428bca;
}
.thumbnail .caption {
  padding: 9px;
  color: #333;
}
.alert {
  padding: 15px;
  margin-bottom: 20px;
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
.alert-dismissable {
  padding-right: 35px;
}
.alert-dismissable .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.alert-success hr {
  border-top-color: #c9e2b3;
}
.alert-success .alert-link {
  color: #2b542c;
}
.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.alert-info hr {
  border-top-color: #a6e1ec;
}
.alert-info .alert-link {
  color: #245269;
}
.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.alert-warning hr {
  border-top-color: #f7e1b5;
}
.alert-warning .alert-link {
  color: #66512c;
}
.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.alert-danger hr {
  border-top-color: #e4b9c0;
}
.alert-danger .alert-link {
  color: #843534;
}
@-webkit-keyframes progress-bar-stripes {
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
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
}
.progress-bar {
  float: left;
  width: 0;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #428bca;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
  -webkit-transition: width .6s ease;
          transition: width .6s ease;
}
.progress-striped .progress-bar {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-size: 40px 40px;
}
.progress.active .progress-bar {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
          animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-success {
  background-color: #5cb85c;
}
.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-info {
  background-color: #5bc0de;
}
.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-warning {
  background-color: #f0ad4e;
}
.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-danger {
  background-color: #d9534f;
}
.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.media,
.media-body {
  overflow: hidden;
  zoom: 1;
}
.media,
.media .media {
  margin-top: 15px;
}
.media:first-child {
  margin-top: 0;
}
.media-object {
  display: block;
}
.media-heading {
  margin: 0 0 5px;
}
.media > .pull-left {
  margin-right: 10px;
}
.media > .pull-right {
  margin-left: 10px;
}
.media-list {
  padding-left: 0;
  list-style: none;
}
.list-group {
  padding-left: 0;
  margin-bottom: 20px;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}
.list-group-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.list-group-item > .badge {
  float: right;
}
.list-group-item > .badge + .badge {
  margin-right: 5px;
}
a.list-group-item {
  color: #555;
}
a.list-group-item .list-group-item-heading {
  color: #333;
}
a.list-group-item:hover,
a.list-group-item:focus {
  text-decoration: none;
  background-color: #f5f5f5;
}
a.list-group-item.active,
a.list-group-item.active:hover,
a.list-group-item.active:focus {
  z-index: 2;
  color: #fff;
  background-color: #428bca;
  border-color: #428bca;
}
a.list-group-item.active .list-group-item-heading,
a.list-group-item.active:hover .list-group-item-heading,
a.list-group-item.active:focus .list-group-item-heading {
  color: inherit;
}
a.list-group-item.active .list-group-item-text,
a.list-group-item.active:hover .list-group-item-text,
a.list-group-item.active:focus .list-group-item-text {
  color: #e1edf7;
}
.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}
a.list-group-item-success {
  color: #3c763d;
}
a.list-group-item-success .list-group-item-heading {
  color: inherit;
}
a.list-group-item-success:hover,
a.list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}
a.list-group-item-success.active,
a.list-group-item-success.active:hover,
a.list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}
.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}
a.list-group-item-info {
  color: #31708f;
}
a.list-group-item-info .list-group-item-heading {
  color: inherit;
}
a.list-group-item-info:hover,
a.list-group-item-info:focus {
  color: #31708f;
  background-color: #c4e3f3;
}
a.list-group-item-info.active,
a.list-group-item-info.active:hover,
a.list-group-item-info.active:focus {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}
.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}
a.list-group-item-warning {
  color: #8a6d3b;
}
a.list-group-item-warning .list-group-item-heading {
  color: inherit;
}
a.list-group-item-warning:hover,
a.list-group-item-warning:focus {
  color: #8a6d3b;
  background-color: #faf2cc;
}
a.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}
.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}
a.list-group-item-danger {
  color: #a94442;
}
a.list-group-item-danger .list-group-item-heading {
  color: inherit;
}
a.list-group-item-danger:hover,
a.list-group-item-danger:focus {
  color: #a94442;
  background-color: #ebcccc;
}
a.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
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
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}
.panel-body {
  padding: 15px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}
.panel-title > a {
  color: inherit;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .list-group {
  margin-bottom: 0;
}
.panel > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.panel > .table,
.panel > .table-responsive > .table {
  margin-bottom: 0;
}
.panel > .table:first-child,
.panel > .table-responsive:first-child > .table:first-child {
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
.panel > .panel-body + .table-responsive {
  border-top: 1px solid #ddd;
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
  margin-bottom: 0;
  border: 0;
}
.panel-group {
  margin-bottom: 20px;
}
.panel-group .panel {
  margin-bottom: 0;
  overflow: hidden;
  border-radius: 4px;
}
.panel-group .panel + .panel {
  margin-top: 5px;
}
.panel-group .panel-heading {
  border-bottom: 0;
}
.panel-group .panel-heading + .panel-collapse .panel-body {
  border-top: 1px solid #ddd;
}
.panel-group .panel-footer {
  border-top: 0;
}
.panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #ddd;
}
.panel-default {
  border-color: #ddd;
}
.panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-default > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #ddd;
}
.panel-default > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #ddd;
}
.panel-primary {
  border-color: #428bca;
}
.panel-primary > .panel-heading {
  color: #fff;
  background-color: #428bca;
  border-color: #428bca;
}
.panel-primary > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #428bca;
}
.panel-primary > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #428bca;
}
.panel-success {
  border-color: #d6e9c6;
}
.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #d6e9c6;
}
.panel-info {
  border-color: #bce8f1;
}
.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #bce8f1;
}
.panel-info > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #bce8f1;
}
.panel-warning {
  border-color: #faebcc;
}
.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #faebcc;
}
.panel-warning > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #faebcc;
}
.panel-danger {
  border-color: #ebccd1;
}
.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #ebccd1;
}
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
}
.well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, .15);
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
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  filter: alpha(opacity=20);
  opacity: .2;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  filter: alpha(opacity=50);
  opacity: .5;
}
button.close {
  -webkit-appearance: none;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
}
.modal-open {
  overflow: hidden;
}
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.modal.fade .modal-dialog {
  -webkit-transition: -webkit-transform .3s ease-out;
     -moz-transition:    -moz-transform .3s ease-out;
       -o-transition:      -o-transform .3s ease-out;
          transition:         transform .3s ease-out;
  -webkit-transform: translate(0, -25%);
      -ms-transform: translate(0, -25%);
          transform: translate(0, -25%);
}
.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
          transform: translate(0, 0);
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  outline: none;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
}
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}
.modal-backdrop.fade {
  filter: alpha(opacity=0);
  opacity: 0;
}
.modal-backdrop.in {
  filter: alpha(opacity=50);
  opacity: .5;
}
.modal-header {
  min-height: 16.42857143px;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
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
  padding: 19px 20px 20px;
  margin-top: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.modal-footer .btn + .btn {
  margin-bottom: 0;
  margin-left: 5px;
}
.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
.modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
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
  z-index: 1030;
  display: block;
  font-size: 12px;
  line-height: 1.4;
  visibility: visible;
  filter: alpha(opacity=0);
  opacity: 0;
}
.tooltip.in {
  filter: alpha(opacity=90);
  opacity: .9;
}
.tooltip.top {
  padding: 5px 0;
  margin-top: -3px;
}
.tooltip.right {
  padding: 0 5px;
  margin-left: 3px;
}
.tooltip.bottom {
  padding: 5px 0;
  margin-top: 3px;
}
.tooltip.left {
  padding: 0 5px;
  margin-left: -3px;
}
.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #000;
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
  border-top-color: #000;
}
.tooltip.top-left .tooltip-arrow {
  bottom: 0;
  left: 5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.top-right .tooltip-arrow {
  right: 5px;
  bottom: 0;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}
.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000;
}
.tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-left .tooltip-arrow {
  top: 0;
  left: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-right .tooltip-arrow {
  top: 0;
  right: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1010;
  display: none;
  max-width: 276px;
  padding: 1px;
  text-align: left;
  white-space: normal;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
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
  padding: 8px 14px;
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
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
  content: "";
  border-width: 10px;
}
.popover.top > .arrow {
  bottom: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-color: #999;
  border-top-color: rgba(0, 0, 0, .25);
  border-bottom-width: 0;
}
.popover.top > .arrow:after {
  bottom: 1px;
  margin-left: -10px;
  content: " ";
  border-top-color: #fff;
  border-bottom-width: 0;
}
.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-right-color: #999;
  border-right-color: rgba(0, 0, 0, .25);
  border-left-width: 0;
}
.popover.right > .arrow:after {
  bottom: -10px;
  left: 1px;
  content: " ";
  border-right-color: #fff;
  border-left-width: 0;
}
.popover.bottom > .arrow {
  top: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999;
  border-bottom-color: rgba(0, 0, 0, .25);
}
.popover.bottom > .arrow:after {
  top: 1px;
  margin-left: -10px;
  content: " ";
  border-top-width: 0;
  border-bottom-color: #fff;
}
.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999;
  border-left-color: rgba(0, 0, 0, .25);
}
.popover.left > .arrow:after {
  right: 1px;
  bottom: -10px;
  content: " ";
  border-right-width: 0;
  border-left-color: #fff;
}
.carousel {
  position: relative;
}
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner > .item {
  position: relative;
  display: none;
  -webkit-transition: .6s ease-in-out left;
          transition: .6s ease-in-out left;
}
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  line-height: 1;
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
  bottom: 0;
  left: 0;
  width: 15%;
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
  filter: alpha(opacity=50);
  opacity: .5;
}
.carousel-control.left {
  background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, .5) 0%), color-stop(rgba(0, 0, 0, .0001) 100%));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control.right {
  right: 0;
  left: auto;
  background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, .0001) 0%), color-stop(rgba(0, 0, 0, .5) 100%));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control:hover,
.carousel-control:focus {
  color: #fff;
  text-decoration: none;
  filter: alpha(opacity=90);
  outline: none;
  opacity: .9;
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
}
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
  right: 50%;
}
.carousel-control .icon-prev,
.carousel-control .icon-next {
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
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
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none;
}
.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #000 \\9;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
  border-radius: 10px;
}
.carousel-indicators .active {
  width: 12px;
  height: 12px;
  margin: 0;
  background-color: #fff;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
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
    margin-left: -15px;
    font-size: 30px;
  }
  .carousel-caption {
    right: 20%;
    left: 20%;
    padding-bottom: 30px;
  }
  .carousel-indicators {
    bottom: 20px;
  }
}
.clearfix:before,
.clearfix:after,
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
  display: table;
  content: " ";
}
.clearfix:after,
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
  margin-right: auto;
  margin-left: auto;
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
.visible-print {
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
@media print {
  .hidden-print {
    display: none !important;
  }
}
/*# sourceMappingURL=bootstrap.css.map */
\r
body {\r
    background: url('../img/bg.png');\r
    background-position: top center;\r
    background-attachment: fixed;\r
    background-color: #fff;\r
    color: #000;\r
    font-family: 'Open Sans', sans-serif;\r
    font-size: 13px;\r
	overflow-x: hidden;\r
}\r
\r
header {\r
	margin-top: 50px;\r
}\r
\r
a {\r
    color: #000;\r
    text-decoration: none;\r
    outline: none;\r
    outline-offset: 0;\r
    padding-bottom: 3px;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
a:hover, \r
a:active, \r
a:focus {\r
    color: #000;\r
    text-decoration: none;\r
    outline: none;\r
    outline-offset: 0;\r
    border-bottom: 1px solid #000;\r
}\r
\r
\r
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\r
    font-family: 'Segoe UI', 'Open Sans', sans-serif;    \r
}\r
\r
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\r
    padding-right: 15px;\r
    padding-left: 15px;\r
}\r
\r
.title {\r
    font-size: larger;\r
    font-weight: bold;\r
    text-transform: uppercase;\r
    padding-left: 0px;\r
}\r
\r
.title:hover {\r
    padding-left: 0px !important;\r
}\r
\r
.title .glyphicon {\r
    background-color: rgba(0, 0, 0, 0.75);\r
    color: #fff;\r
    left: -110px;\r
    padding: 10px;\r
    -webkit-border-radius: 20px;\r
    -moz-border-radius: 20px;\r
    border-radius: 20px;\r
    font-size: smaller;\r
}\r
\r
hr {\r
    margin-top: 10px;\r
    margin-bottom: 15px;\r
    border: 0;\r
    border-top: 3px solid rgba(0, 0, 0, 0.1);\r
}\r
\r
hr.empty {\r
    padding: 7px 0;\r
    border: 0;\r
}\r
\r
strong {\r
    font-size: larger;\r
    font-weight: normal;\r
}\r
\r
\r
.progress {\r
    background-color: rgba(0, 0, 0, 0.05);\r
    height: 7px;\r
    margin-left: 9px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
.progress-bar {\r
    width: 0;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-box-shadow: none;\r
    -moz-box-shadow: none;\r
    box-shadow: none;\r
    -webkit-transition: width 3s ease;\r
    -moz-transition: width 3s ease;\r
    transition: width 3s ease;\r
}\r
\r
.progress-bar-success {\r
    background-color: #ffa700;\r
}\r
\r
.annotation {\r
    float: right;\r
    opacity: .75;\r
    font-style: italic;\r
}\r
\r
.chart {\r
    position: relative;\r
    display: inline-block;\r
    width: 110px;\r
    height: 110px;\r
    margin-top: 25px;\r
    margin-bottom: 50px;\r
    margin-right: 5%;\r
    text-align: center;\r
}\r
\r
.chart canvas {\r
    position: absolute;\r
    top: 35px;\r
    left: 0;\r
}\r
\r
.percent {\r
    display: inline-block;\r
    line-height: 140px;\r
    z-index: 2;\r
    opacity: .75;\r
    font-style: italic;\r
}\r
\r
.percent:after {\r
    content: '%';\r
    margin-left: 0.1em;\r
}\r
\r
.skill {\r
    display: block;\r
}\r
\r
ul {\r
    padding: 10px 0 0 13px;\r
    margin: 0;\r
    border-left: 3px solid rgba(0, 0, 0, 0.05);\r
}\r
\r
\r
ul li {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzNBNzYwM0Y5NzE4MTFFM0IxNUFEQzNDMjE2Qzc0NEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzNBNzYwNDA5NzE4MTFFM0IxNUFEQzNDMjE2Qzc0NEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozM0E3NjAzRDk3MTgxMUUzQjE1QURDM0MyMTZDNzQ0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozM0E3NjAzRTk3MTgxMUUzQjE1QURDM0MyMTZDNzQ0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqkh2kMAAAD4SURBVHjajJM5C8JAEIWzG2+iYpEoiJWdnf7/32Aj2NjYGgVPFDQeb+StjItGBz7ILvN2zpjg3QyIQRs0QBFcwA4swBLctbOzKhiAevDd9mAKTnIIlXAIakG+lUECViCzjC4RS8F/VqK/CVlf13OQ+uZgxnqlzsjL4CTiPtPWQhEdKZL61hToB0L7oUEpuFHouPJeW2Q5Dm1bNY67+t56fgXLOWprfmmUf//s9t67lFFYtQeG58TzO7g5x7oWUGHdZ9ACPdDxxHP38ujHZn3atLGLvGFa4R9CyWYivXLOGVeuyXnmRZy43TY5f1XEMWYUpeT1Vz0EGAC/GjlN8dYq7QAAAABJRU5ErkJggg==");\r
    padding: 10px 0 10px 27px;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
ul li:hover {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUEzQTFENTg5NzFDMTFFMzlDMURCMzA1OUIwRkY3RjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUEzQTFENTk5NzFDMTFFMzlDMURCMzA1OUIwRkY3RjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQTNBMUQ1Njk3MUMxMUUzOUMxREIzMDU5QjBGRjdGMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQTNBMUQ1Nzk3MUMxMUUzOUMxREIzMDU5QjBGRjdGMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkF2Tn4AAADtSURBVHjanJNLDgFBEIZrJsMJcAAXsCDBnMBGhAVtMaebhSHBMZCwcAAO4HEBk2h/JTXDots8KvlSnVT/Xd3VVY7WmhJztuTCzcAc9EAd3MEeLMBSj+md7k/EEDbhVqBNdjuBKQ64pmIR7kCDsu0G+nyAQxvNVz2ADuW3I+iyUBUUkuxXLA6onAXun6wTUBFvsha/WVuCVRQlRjE9rGND/MWZHxbxEELOPLLEn55UbmAIrjPefObMYcmChSyOJDsV/OfIlV5V0jmUs8MU6zgzYXGB86V3KaO3fdn/HQzDVPGA1LiqyTWZ36n6CDAA+4hJtP39L6kAAAAASUVORK5CYII=");\r
    padding-left: 40px !important;\r
}\r
\r
.static:hover {\r
    padding-left: 27px !important;\r
}\r
\r
ul li p {\r
    padding-left: 8px;\r
}\r
\r
ul .note {\r
    display: inline-block;\r
    margin: 8px;\r
    opacity: .75;\r
    text-transform: uppercase;\r
}\r
\r
ul .description {\r
    opacity: .75;\r
}\r
\r
.title {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDRGNjMzNkI5N0U4MTFFMzkwRjVDMkJBNzczOEJGMzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDRGNjMzNkM5N0U4MTFFMzkwRjVDMkJBNzczOEJGMzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NEY2MzM2OTk3RTgxMUUzOTBGNUMyQkE3NzM4QkYzNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NEY2MzM2QTk3RTgxMUUzOTBGNUMyQkE3NzM4QkYzNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pre7tSgAAACiSURBVHjajJLBDYAgDEXbEjw4gJvo2f3dwxE8giWi+SJUmnwDlFewHyaila44VJsqUjtYNavGNBFIjDnBPeANHx0FPmDinH521aTyedHn+W6B6RfZ2BBgLCWYeuNgsbwBg6jWVKwYcyI0GhZKN6TYYNn0yUulq/Tj8xOuYsdggOjCA1vdjnDiy0a2fASw6fNigOYLkw4QbXw9ZekAmwVOAQYASO4yZdH94skAAAAASUVORK5CYII=") !important;\r
}\r
\r
.title:hover {\r
    padding-left: 0px !important;\r
}\r
\r
/* Top icons ------------------------------------------------- */\r
\r
.top-icons {\r
	position: fixed;\r
    top: 50px;\r
    left: 47px;\r
	width: 100%;\r
}\r
\r
.top-menu {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-menu:hover {\r
    background-color: #00ce08;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
.top-download-resume {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-download-resume:hover {\r
    background-color: #0093ff;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
.top-contact {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-contact:hover {\r
    background-color: #ff003b;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
/* Nav ------------------------------------------------- */\r
\r
nav {\r
    position: fixed;\r
    top: 33%;\r
    left: 50px;\r
    z-index: 999;\r
}\r
\r
nav ul {\r
    padding: 10px 0 0 10px;\r
    margin: 0px;\r
    border-left: 4px solid rgba(0, 0, 0, 0.05);\r
}\r
\r
nav ul li:first-child {\r
    margin-top: -25px;\r
}\r
\r
nav ul li {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTk2QTQ0RUM5NzI4MTFFM0E4NTNBRTI0RDU0Q0U4NjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTk2QTQ0RUQ5NzI4MTFFM0E4NTNBRTI0RDU0Q0U4NjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOTZBNDRFQTk3MjgxMUUzQTg1M0FFMjRENTRDRTg2MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOTZBNDRFQjk3MjgxMUUzQTg1M0FFMjRENTRDRTg2MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhgvmygAAACVSURBVHjaYmRAAFEglgBiXij/MxC/AOLXIA4jVFAeiBUZsIP7QPyQGUiIALE6A24gCMRfQApVgZgTKgiy5jbUSpAcN1SclQWJAwJPgfgDkpNEoTQ3E5o1jEiKGJElQCZ+BWI2KF8KSQ6Z/ZUR6hkdBvzgCsjB36AcARyKHgDxM2Yo5wPUCcxQ/BeIP0LD8BlIAUCAAQAEBBbvNAJsuwAAAABJRU5ErkJggg==");\r
    padding: 5px 15px;\r
    font-size: 13px;\r
    text-transform: uppercase;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
nav ul li:hover {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEzNjNDNzM5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEzNjNDNzQ5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTM2M0M3MTk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTM2M0M3Mjk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr961YUAAABVSURBVHjaYmBAgBAg3gzEz6B4M1QMBdQC8X8cuBamyB+PIhgGqWHYTYRCkBqGl0QofMbEQCQAKbxEhLqrJHkGBOrwKKpDNx4W4E+A+CmUHQqTBAgwABdMO6kaYAQsAAAAAElFTkSuQmCC");\r
    padding-left: 25px !important;\r
    color: #000;\r
}\r
\r
nav ul li:hover a {\r
    color: #000;\r
}\r
\r
nav ul li.active {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEzNjNDNzM5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEzNjNDNzQ5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTM2M0M3MTk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTM2M0M3Mjk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr961YUAAABVSURBVHjaYmBAgBAg3gzEz6B4M1QMBdQC8X8cuBamyB+PIhgGqWHYTYRCkBqGl0QofMbEQCQAKbxEhLqrJHkGBOrwKKpDNx4W4E+A+CmUHQqTBAgwABdMO6kaYAQsAAAAAElFTkSuQmCC");\r
    color: #000;\r
}\r
\r
nav a {\r
    border-bottom: 0;\r
}\r
\r
nav a:hover, \r
nav a:active, \r
nav a:focus {\r
    border-bottom: 0;\r
}\r
\r
nav li a {\r
    border-bottom: 0;\r
    color: rgba(0, 0, 0, 0.5);\r
}\r
\r
nav .active a {\r
    color: #000;\r
    font-weight: bold;\r
}\r
\r
#mini-nav {\r
    background-color: #fff;\r
    position: fixed;\r
    width: 100%;\r
    top: 0;\r
    left: 0;\r
    text-align: center;\r
    font-weight: bold;\r
}\r
\r
#mini-nav ul {\r
    width: 100%;\r
    border: 0;\r
    padding: 7px 0 10px 0;\r
    \r
}\r
\r
#mini-nav ul li {\r
    list-style-image: none;\r
    padding: 0 !important;\r
}\r
\r
#mini-nav ul li:first-child {\r
    margin-top: 0;\r
}\r
\r
#mini-nav .dropdown-menu {\r
    margin: 0;\r
    font-size: 14px;\r
    list-style: none;\r
    background-color: #fff;\r
    border: 0;\r
    border-radius: 0;\r
    -webkit-box-shadow: none;\r
    box-shadow: none;\r
}\r
\r
.dropdown-menu > .active > a, \r
.dropdown-menu > .active > a:hover, \r
.dropdown-menu > .active > a:focus {\r
    background-color: #000;\r
}\r
\r
/* Header ------------------------------------------------- */\r
\r
.face {\r
    height: 200px;\r
    width: 200px;\r
    border-radius: 50%;\r
}\r
\r
.header-name {\r
    background-color: #000;\r
    padding: 5px 17px;\r
    display: inline-block;\r
    color: #fff;\r
    font-size: 18px;\r
    font-weight: 700;\r
    text-transform: uppercase;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-left: 3px solid #f00;\r
    border-right: 3px solid #0045ff;\r
}\r
\r
.header-title {\r
    font-size: 16px;\r
}\r
\r
.header-subtitle {\r
    padding-top: 25px;\r
    font-style: italic;\r
    margin-bottom: 100px;\r
}\r
\r
/* Profile ------------------------------------------------- */\r
\r
.profile .title .glyphicon{\r
    background-color: #9300ff;\r
}\r
\r
/* Work experience ------------------------------------------------- */\r
\r
.work-experience .title .glyphicon{\r
    background-color: #00a7ff;\r
}\r
\r
/* Education ------------------------------------------------- */\r
\r
.education .title .glyphicon{\r
    background-color: #07b500;\r
}\r
\r
/* Professional skills ------------------------------------------------- */\r
\r
.professional-skills .title .glyphicon{\r
    background-color: #ffa700;\r
}\r
\r
/* Personal skills ------------------------------------------------- */\r
\r
.personal-skills .title .glyphicon{\r
    background-color: #00aca5;\r
}\r
\r
/* Interests ------------------------------------------------- */\r
\r
.interests .title .glyphicon{\r
    background-color: #f00;\r
}\r
\r
/* Portfolio ------------------------------------------------ */\r
\r
.portfolio .title .glyphicon{\r
    background-color: #0089ff;\r
}\r
\r
.portfolio img {\r
    width: 100px;\r
    margin-right: 5px;\r
    margin-bottom: 5px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.portfolio img:hover {\r
    opacity: .75;\r
}\r
\r
.portfolio img:first-child {\r
    margin-left: 8px;\r
}\r
\r
.dismiss {\r
    position: relative;\r
    background-color: rgba(0, 0, 0, 0.25);\r
    top: -4px;\r
    left: 100%;\r
    color: #fff;\r
    padding: 5px 7px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0 !important;\r
    z-index: -1;\r
    -webkit-transition: all 0.3s ease;\r
    -moz-transition: all 0.3s ease;\r
    transition: all 0.3s ease;\r
}\r
\r
.dismiss:hover {\r
    background-color: #fff;\r
}\r
\r
.modal {\r
	text-align: center;\r
}\r
\r
.modal img {\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
/* Contact Form ------------------------------------------------ */\r
\r
.contact .title .glyphicon{\r
    background-color: #00c60f;\r
}\r
\r
.contact ul li:hover {\r
    padding-left: 27px;\r
}\r
\r
form {\r
    margin-left: 9px;\r
}\r
\r
.contact-on {\r
    position: fixed;\r
    bottom: 50px;\r
    background: #202020;\r
    height: auto;\r
    width: 100%;\r
    padding-top: 35px;\r
    padding-bottom: 25px;\r
    z-index: 999;\r
    display: none;\r
}\r
\r
.form-control {\r
    display: block;\r
    width: 100%;\r
    height: 35px;\r
    padding: 6px 15px;\r
    font-size: 12px;\r
    color: #000;\r
    background-color: rgba(255, 255, 255, 0.75);\r
    background-image: none;\r
    border: 0;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-box-shadow: none;\r
    -moz-box-shadow: none;\r
    box-shadow: none;\r
}\r
\r
.form-control:focus {\r
    border: 0;\r
    background-color: #fff;\r
    color: #000;\r
}\r
\r
textarea.form-control {\r
    height: 85px;\r
    resize: none;\r
}\r
\r
.input-group-addon {\r
    color: #000;\r
    background-color: rgba(0, 0, 0, 0.05);\r
    border: 0;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
form .glyphicon {\r
    opacity: .25;\r
}\r
\r
.btn-success {\r
    font-size: 12px;\r
    color: #000;\r
    background-color: rgba(255, 255, 255, 0.5);\r
    border-color: rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.btn .glyphicon {\r
    margin-right: 7px;\r
    opacity: 1;\r
}\r
\r
.btn-success:hover, \r
.btn-success:focus, \r
.btn-success:active, \r
.btn-success.active {\r
    color: #fff;\r
    background-color: #15b900;\r
    border-color: rgba(0, 0, 0, 0.1);\r
}\r
\r
/* Up ------------------------------------------------ */\r
\r
.contact .title.up .glyphicon{\r
    background-color: #ffad00;\r
}\r
\r
.up {\r
	margin-bottom: 100px;\r
    cursor: pointer;\r
}\r

</style>
<!-- main jquery libraries / others are at the bottom-->
<script src="js/jquery.min.js" type="text/javascript"><\/script>
<script src="js/modernizr.js" type="text/javascript"><\/script>

</head>
<body>

<!-- Top icons -->
<div class="top-icons">
	<a class="top-menu hidden-xs hidden-sm" data-toggle="tooltip" data-placement="top" title="Menu toggle"><span class="glyphicon glyphicon-th-list"></span></a>
	<a href="#" class="top-download-resume hidden-xs hidden-sm" data-toggle="tooltip" data-placement="top" title="Download resume"><span class="glyphicon glyphicon-cloud-download"></span></a>
	<a class="top-contact hidden-xs hidden-sm" data-toggle="tooltip" data-placement="top" title="Contact me"><span class="glyphicon glyphicon-send"></span></a>
</div>
<!-- end Top icons -->

<!-- Navigation -->
<nav id="spy" class="spy hidden-sm hidden-xs">
    <ul>
        <li class="active"><a href="#profile">Profile</a></li>
        <li><a href="#work-experience">Work experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#professional-skills">Skills</a></li>
        <li><a href="#interests">Interests</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
<!-- end Navigation -->
    
<!-- Navigation for small devices -->
<nav id="mini-nav" class="spy visible-sm visible-xs">
    <ul>
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown">Menu</a>
            <ul class="dropdown-menu">
                <li class="active"><a href="#profile">Profile</a></li>
                <li><a href="#work-experience">Work experience</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#professional-skills">Skills</a></li>
                <li><a href="#interests">Interests</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </li>
      </ul>
</nav>
<!-- end Navigation for small devices -->
    
<!-- Header -->
<header id="header">
    <div class="container">
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2 text-center">
                <img src="http:&#x2F;&#x2F;www.gravatar.com&#x2F;avatar&#x2F;cff733cf90823edd218a834980379c61?s=200&amp;r=pg&amp;d=mm" class="face" alt="">
                <hr class="empty">
                <p class="header-name">Thomas Davis</p>
                <p class="header-subtitle">Hey guys, I\u2019m a full stack web developer who loves working with open source technology. These days I do politics with EFF and Taskforce.is, I promote independent artist at Earbits, speed up the web with cdnjs.com and building Skynet with DroneHire.org.</p>
            </div>
        </div>
    </div>
</header>
<!-- end Header -->
	
<!-- Profile -->
<section id="profile" class="profile activate">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-user"></span>Profile</li>
                    <li>
                        <span class="note">Full name</span>
                        <p><strong>Thomas Davis</strong></p>
                    </li>
                    
                    
                    <li>
                        <span class="note">Github Profile</span>
                        <p><strong><a href="#">https://www.linkedin.com/markwilliamconnor</a></strong></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Profile -->

<!-- Work experience -->
<section id="work-experience" class="work-experience">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-briefcase"></span>Work experience</li>
                    <li>
                        <span class="note">June 2012 - Current</span>
                        <p><strong>Cdnjs</strong></p>
                        <p><strong>Co-Founder</strong> in Melbourne, AU</p>
                        <p class="description">Following Google\u2019s CDN for jQuery, we decided to start a CDN for the less popular Javascript frameworks. The CDN is community moderated and open source on GitHub. We secured a partnership with Cloudflare.com who now supports the infrastructure.</p>
                    </li>
                    <li>
                        <span class="note">June 2012 - Current</span>
                        <p><strong>Earbits</strong></p>
                        <p><strong>CTO</strong> in Melbourne, AU</p>
                        <p class="description">Started off as a front end developer but took on the role of CTO in early 2013. Managed a large Rails application and did a big server and database(MongoDB) migration from Heroku to Amazon.</p>
                    </li>
                    <li>
                        <span class="note">June 2012 - Current</span>
                        <p><strong>Electronic Frontier Foundation</strong></p>
                        <p><strong>Developer</strong> in Melbourne, AU</p>
                        <p class="description">Hired to take EFF&#39;s campaigning to the next level by building an action centre in Ruby on Rails. The action centre is built around some large open source tools that lower the barrier to entry when contacting congress.</p>
                    </li>
                    <li>
                        <span class="note">June 2012 - Current</span>
                        <p><strong>Taskforce.is</strong></p>
                        <p><strong>Developer</strong> in Melbourne, AU</p>
                        <p class="description">Worked on many politically charged campaigns against mass surveillance. Our latest project was &quot;TheDayWeFightBack&quot; and I worked on all areas of it. The campaign resulted in 37,000,000 banner views, 100,000 phone calls, ~500,000 emails and ~250,000 signatures. I work mostly in the frontend and also running the Heroku servers which are cached by Cloudfront.</p>
                    </li>
                    <li>
                        <span class="note">June 2012 - Current</span>
                        <p><strong>Drone Hire</strong></p>
                        <p><strong>Co-Founder</strong> in Melbourne, AU</p>
                        <p class="description">An international directory of civilian drone &#x2F; UAV operators for hire. Services include aerial photography, aerial video, mapping, surveying, precision agriculture, real estate photography, remote inspections and infrared imaging. Our plan is to be the place to go when looking for UAV&#x2F;Drone services. The website is built in Backbone.js and API is built with Node.js and Postgres. The site and blog combined have managed to receive over 200,000 visitors this year.</p>
                    </li>
                    <li>
                        <span class="note">June 2012 - Current</span>
                        <p><strong>BackboneTutorials.com</strong></p>
                        <p><strong>Founder</strong> in Melbourne, AU</p>
                        <p class="description">I write tutorials and blog post regarding the popular Javascript framework Backbone.js. The tutorials cover a range of topics regarding front end development aimed at beginners, experts and anyone in between.</p>
                    </li>
                    <li>
                        <span class="note">June 2012 - Current</span>
                        <p><strong>Ephox</strong></p>
                        <p><strong>Front-end Developer</strong> in Melbourne, AU</p>
                        <p class="description">Ephox is a worldwide company who is heavily involved with the development of TinyMce and enterprise editors. My primary role included building front-end widgets and applications. Worked on a major product using Backbone.js as a base. Heavily involved in UI&#x2F;UX design and wire-framing. Also spend a lot of time designing API specifications and documentation.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Work experience -->
    
<!-- Education -->
<section id="education" class="education">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-book"></span>Education</li>
                    <li>
                        <span class="note">January 2005 - December 2008</span>
                        <p><strong>Masters Degree</strong></p>
                        <p><strong>University of IT</strong> in Melbourne, Australia</p>
                        <p class="description">Vestibulum ut pharetra diam, vitae hendrerit sapien. Praesent porttitor augue nec semper suscipit. Nulla et cursus lectus. Praesent vel feugiat dolor.</p>
                    </li>
                    <li>
                        <span class="note">January 2002 - December 2005</span>
                        <p><strong>Bachelors Degree</strong></p>
                        <p><strong>University of IT</strong> in Melbourne, Australia</p>
                        <p class="description">Donec vel nulla mollis, mattis orci vel, vulputate tellus. Cras interdum sapien quis risus mattis egestas. Etiam rhoncus lacus turpis, in vulputate arcu imperdiet non.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Education -->
    
<!-- Professional skills -->
<section id="professional-skills" class="professional-skills">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-tasks"></span>Professional skills</li>
                    <li>
                        <p>Adobe InDesign<span class="annotation pull-right">95%</span></p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li>
                        <p>Adobe Photoshop<span class="annotation pull-right">85%</span></p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li>
                        <p>Adobe Illustrator<span class="annotation pull-right">70%</span></p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Professional skills -->
    
<!-- Personal skills -->
<section id="personal-skills" class="personal-skills">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-stats"></span>Personal skills</li>
                    <li>
                        <span class="chart" data-percent="95"><span class="skill">Creativity</span>
                            <span class="percent"></span>
                        </span>
                        <span class="chart" data-percent="85"><span class="skill">Social skills</span>
                            <span class="percent"></span>
                        </span>
                        <span class="chart" data-percent="80"><span class="skill">Leadership</span>
                            <span class="percent"></span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Personal skills -->
    
<!-- Interests -->
<section id="interests" class="interests">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-heart-empty"></span>Interests</li>
                    <li>
                        <p><strong>Books</strong></p>
                        <p class="description">Vestibulum ut pharetra diam, vitae hendrerit sapien. Praesent porttitor augue nec semper suscipit. Nulla et cursus lectus. Praesent vel feugiat dolor.</p>
                    </li>
                    <li>
                        <p><strong>Art</strong></p>
                        <p class="description">Donec vel nulla mollis, mattis orci vel, vulputate tellus. Cras interdum sapien quis risus mattis egestas. Etiam rhoncus lacus turpis, in vulputate arcu imperdiet non.</p>
                    </li>
                    <li>
                        <p><strong>Basketball</strong></p>
                        <p class="description">Maecenas velit eros, congue quis accumsan sed, consequat id magna. Pellentesque at auctor lacus.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Interests -->
    
<!-- Portfolio -->
<section id="portfolio" class="portfolio">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-eye-open"></span>Portfolio</li>
                    <li class="static">
                        <img src="img/1.jpg" alt="" data-toggle="modal" data-target="#modal1">
                        <img src="img/2.jpg" alt="" data-toggle="modal" data-target="#modal2">
                        <img src="img/3.jpg" alt="" data-toggle="modal" data-target="#modal3">
                        <img src="img/4.jpg" alt="" data-toggle="modal" data-target="#modal4">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Portfolio -->
    
<!-- Modal - photos in zoom-->
<div id="modal1" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-box">
            <img src="img/1.jpg" alt="" class="img-responsive">
        </div>
    </div>
</div>
<div id="modal2" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal2" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-box">
            <img src="img/2.jpg" alt="" class="img-responsive">
        </div>
    </div>
</div>
<div id="modal3" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal3" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-box">
            <img src="img/3.jpg" alt="" class="img-responsive">
        </div>
    </div>
</div>
<div id="modal4" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal4" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-box">
            <img src="img/4.jpg" alt="" class="img-responsive">
        </div>
    </div>
</div>
<!-- end Modal - photos in zoom-->
    
<!-- Contact -->
<section id="contact" class="contact">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-envelope"></span>Contact</li>
                    <li class="static">
                        <span class="note">Address</span>
                        <p><strong>121 King Street, Melbourne</strong></p>
                        <p><strong>Victoria 3000 Australia</strong></p>
                        <span class="note">Mobile</span>
                        <p><strong>987 654 321</strong></p>
                        <span class="note">Phone</span>
                        <p><strong>+61 3 8376 6284</strong></p>
                        <span class="note">Email</span>
                        <p><strong><a href="#">mark.william.connor@gmail.com</a></strong></p>
                        <hr class="empty">
                        <form action="contact.php" method="post">
                            <div class="form-group input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                                <input name="yourname" type="text" class="form-control" id="inputname" placeholder="Enter your name">
                            </div>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>
                                <input name="email" type="email" class="form-control" id="inputemail" placeholder="Enter your email">
                            </div>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-bold"></span></span>
                                <input name="subject" type="text" class="form-control" id="inputsubject" placeholder="Enter subject">
                            </div>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-comment"></span></span>
                                <textarea name="comments" class="form-control" id="inputmessage" rows="3" placeholder="Enter message here"></textarea>
                            </div>
                            <button type="submit" class="btn btn-success pull-right"><span class="glyphicon glyphicon-send"></span> Send message</button>
                        </form>
                    </li>
                    <li class="title up"><span class="glyphicon glyphicon-arrow-up"></span>Up</li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Contact -->

<!-- Java Script -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="js/bootstrap.min.js"><\/script>
<script src="js/bootstrap-progressbar.js"><\/script>
<script src="js/spy.js"><\/script>
<script src="js/scripts.js"><\/script>
<!-- Charts -->
<script src="js/jquery.easypiechart.js"><\/script>
<script src="js/chart.js"><\/script>

</body>
</html>`,"example/fonts/glyphicons-halflings-regular.svg":`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" >
<svg xmlns="http://www.w3.org/2000/svg">
<metadata></metadata>
<defs>
<font id="glyphicons_halflingsregular" horiz-adv-x="1200" >
<font-face units-per-em="1200" ascent="960" descent="-240" />
<missing-glyph horiz-adv-x="500" />
<glyph />
<glyph />
<glyph unicode="&#xd;" />
<glyph unicode=" " />
<glyph unicode="*" d="M100 500v200h259l-183 183l141 141l183 -183v259h200v-259l183 183l141 -141l-183 -183h259v-200h-259l183 -183l-141 -141l-183 183v-259h-200v259l-183 -183l-141 141l183 183h-259z" />
<glyph unicode="+" d="M0 400v300h400v400h300v-400h400v-300h-400v-400h-300v400h-400z" />
<glyph unicode="&#xa0;" />
<glyph unicode="&#x2000;" horiz-adv-x="652" />
<glyph unicode="&#x2001;" horiz-adv-x="1304" />
<glyph unicode="&#x2002;" horiz-adv-x="652" />
<glyph unicode="&#x2003;" horiz-adv-x="1304" />
<glyph unicode="&#x2004;" horiz-adv-x="434" />
<glyph unicode="&#x2005;" horiz-adv-x="326" />
<glyph unicode="&#x2006;" horiz-adv-x="217" />
<glyph unicode="&#x2007;" horiz-adv-x="217" />
<glyph unicode="&#x2008;" horiz-adv-x="163" />
<glyph unicode="&#x2009;" horiz-adv-x="260" />
<glyph unicode="&#x200a;" horiz-adv-x="72" />
<glyph unicode="&#x202f;" horiz-adv-x="260" />
<glyph unicode="&#x205f;" horiz-adv-x="326" />
<glyph unicode="&#x20ac;" d="M100 500l100 100h113q0 47 5 100h-218l100 100h135q37 167 112 257q117 141 297 141q242 0 354 -189q60 -103 66 -209h-181q0 55 -25.5 99t-63.5 68t-75 36.5t-67 12.5q-24 0 -52.5 -10t-62.5 -32t-65.5 -67t-50.5 -107h379l-100 -100h-300q-6 -46 -6 -100h406l-100 -100 h-300q9 -74 33 -132t52.5 -91t62 -54.5t59 -29t46.5 -7.5q29 0 66 13t75 37t63.5 67.5t25.5 96.5h174q-31 -172 -128 -278q-107 -117 -274 -117q-205 0 -324 158q-36 46 -69 131.5t-45 205.5h-217z" />
<glyph unicode="&#x2212;" d="M200 400h900v300h-900v-300z" />
<glyph unicode="&#x2601;" d="M-14 494q0 -80 56.5 -137t135.5 -57h750q120 0 205 86t85 208q0 120 -85 206.5t-205 86.5q-46 0 -90 -14q-44 97 -134.5 156.5t-200.5 59.5q-152 0 -260 -107.5t-108 -260.5q0 -25 2 -37q-66 -14 -108.5 -67.5t-42.5 -122.5z" />
<glyph unicode="&#x2709;" d="M0 100l400 400l200 -200l200 200l400 -400h-1200zM0 300v600l300 -300zM0 1100l600 -603l600 603h-1200zM900 600l300 300v-600z" />
<glyph unicode="&#x270f;" d="M-13 -13l333 112l-223 223zM187 403l214 -214l614 614l-214 214zM887 1103l214 -214l99 92q13 13 13 32.5t-13 33.5l-153 153q-15 13 -33 13t-33 -13z" />
<glyph unicode="&#xe000;" horiz-adv-x="500" d="M0 0z" />
<glyph unicode="&#xe001;" d="M0 1200h1200l-500 -550v-550h300v-100h-800v100h300v550z" />
<glyph unicode="&#xe002;" d="M14 84q18 -55 86 -75.5t147 5.5q65 21 109 69t44 90v606l600 155v-521q-64 16 -138 -7q-79 -26 -122.5 -83t-25.5 -111q17 -55 85.5 -75.5t147.5 4.5q70 23 111.5 63.5t41.5 95.5v881q0 10 -7 15.5t-17 2.5l-752 -193q-10 -3 -17 -12.5t-7 -19.5v-689q-64 17 -138 -7 q-79 -25 -122.5 -82t-25.5 -112z" />
<glyph unicode="&#xe003;" d="M23 693q0 200 142 342t342 142t342 -142t142 -342q0 -142 -78 -261l300 -300q7 -8 7 -18t-7 -18l-109 -109q-8 -7 -18 -7t-18 7l-300 300q-119 -78 -261 -78q-200 0 -342 142t-142 342zM176 693q0 -136 97 -233t234 -97t233.5 96.5t96.5 233.5t-96.5 233.5t-233.5 96.5 t-234 -97t-97 -233z" />
<glyph unicode="&#xe005;" d="M100 784q0 64 28 123t73 100.5t104.5 64t119 20.5t120 -38.5t104.5 -104.5q48 69 109.5 105t121.5 38t118.5 -20.5t102.5 -64t71 -100.5t27 -123q0 -57 -33.5 -117.5t-94 -124.5t-126.5 -127.5t-150 -152.5t-146 -174q-62 85 -145.5 174t-149.5 152.5t-126.5 127.5 t-94 124.5t-33.5 117.5z" />
<glyph unicode="&#xe006;" d="M-72 800h479l146 400h2l146 -400h472l-382 -278l145 -449l-384 275l-382 -275l146 447zM168 71l2 1z" />
<glyph unicode="&#xe007;" d="M-72 800h479l146 400h2l146 -400h472l-382 -278l145 -449l-384 275l-382 -275l146 447zM168 71l2 1zM237 700l196 -142l-73 -226l192 140l195 -141l-74 229l193 140h-235l-77 211l-78 -211h-239z" />
<glyph unicode="&#xe008;" d="M0 0v143l400 257v100q-37 0 -68.5 74.5t-31.5 125.5v200q0 124 88 212t212 88t212 -88t88 -212v-200q0 -51 -31.5 -125.5t-68.5 -74.5v-100l400 -257v-143h-1200z" />
<glyph unicode="&#xe009;" d="M0 0v1100h1200v-1100h-1200zM100 100h100v100h-100v-100zM100 300h100v100h-100v-100zM100 500h100v100h-100v-100zM100 700h100v100h-100v-100zM100 900h100v100h-100v-100zM300 100h600v400h-600v-400zM300 600h600v400h-600v-400zM1000 100h100v100h-100v-100z M1000 300h100v100h-100v-100zM1000 500h100v100h-100v-100zM1000 700h100v100h-100v-100zM1000 900h100v100h-100v-100z" />
<glyph unicode="&#xe010;" d="M0 50v400q0 21 14.5 35.5t35.5 14.5h400q21 0 35.5 -14.5t14.5 -35.5v-400q0 -21 -14.5 -35.5t-35.5 -14.5h-400q-21 0 -35.5 14.5t-14.5 35.5zM0 650v400q0 21 14.5 35.5t35.5 14.5h400q21 0 35.5 -14.5t14.5 -35.5v-400q0 -21 -14.5 -35.5t-35.5 -14.5h-400 q-21 0 -35.5 14.5t-14.5 35.5zM600 50v400q0 21 14.5 35.5t35.5 14.5h400q21 0 35.5 -14.5t14.5 -35.5v-400q0 -21 -14.5 -35.5t-35.5 -14.5h-400q-21 0 -35.5 14.5t-14.5 35.5zM600 650v400q0 21 14.5 35.5t35.5 14.5h400q21 0 35.5 -14.5t14.5 -35.5v-400 q0 -21 -14.5 -35.5t-35.5 -14.5h-400q-21 0 -35.5 14.5t-14.5 35.5z" />
<glyph unicode="&#xe011;" d="M0 50v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM0 450v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200 q-21 0 -35.5 14.5t-14.5 35.5zM0 850v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM400 50v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5 t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM400 450v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM400 850v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5 v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM800 50v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM800 450v200q0 21 14.5 35.5t35.5 14.5h200 q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM800 850v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5z" />
<glyph unicode="&#xe012;" d="M0 50v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM0 450q0 -21 14.5 -35.5t35.5 -14.5h200q21 0 35.5 14.5t14.5 35.5v200q0 21 -14.5 35.5t-35.5 14.5h-200q-21 0 -35.5 -14.5 t-14.5 -35.5v-200zM0 850v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM400 50v200q0 21 14.5 35.5t35.5 14.5h700q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5 t-35.5 -14.5h-700q-21 0 -35.5 14.5t-14.5 35.5zM400 450v200q0 21 14.5 35.5t35.5 14.5h700q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-700q-21 0 -35.5 14.5t-14.5 35.5zM400 850v200q0 21 14.5 35.5t35.5 14.5h700q21 0 35.5 -14.5t14.5 -35.5 v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-700q-21 0 -35.5 14.5t-14.5 35.5z" />
<glyph unicode="&#xe013;" d="M29 454l419 -420l818 820l-212 212l-607 -607l-206 207z" />
<glyph unicode="&#xe014;" d="M106 318l282 282l-282 282l212 212l282 -282l282 282l212 -212l-282 -282l282 -282l-212 -212l-282 282l-282 -282z" />
<glyph unicode="&#xe015;" d="M23 693q0 200 142 342t342 142t342 -142t142 -342q0 -142 -78 -261l300 -300q7 -8 7 -18t-7 -18l-109 -109q-8 -7 -18 -7t-18 7l-300 300q-119 -78 -261 -78q-200 0 -342 142t-142 342zM176 693q0 -136 97 -233t234 -97t233.5 96.5t96.5 233.5t-96.5 233.5t-233.5 96.5 t-234 -97t-97 -233zM300 600v200h100v100h200v-100h100v-200h-100v-100h-200v100h-100z" />
<glyph unicode="&#xe016;" d="M23 694q0 200 142 342t342 142t342 -142t142 -342q0 -141 -78 -262l300 -299q7 -7 7 -18t-7 -18l-109 -109q-8 -8 -18 -8t-18 8l-300 299q-120 -77 -261 -77q-200 0 -342 142t-142 342zM176 694q0 -136 97 -233t234 -97t233.5 97t96.5 233t-96.5 233t-233.5 97t-234 -97 t-97 -233zM300 601h400v200h-400v-200z" />
<glyph unicode="&#xe017;" d="M23 600q0 183 105 331t272 210v-166q-103 -55 -165 -155t-62 -220q0 -177 125 -302t302 -125t302 125t125 302q0 120 -62 220t-165 155v166q167 -62 272 -210t105 -331q0 -118 -45.5 -224.5t-123 -184t-184 -123t-224.5 -45.5t-224.5 45.5t-184 123t-123 184t-45.5 224.5 zM500 750q0 -21 14.5 -35.5t35.5 -14.5h100q21 0 35.5 14.5t14.5 35.5v400q0 21 -14.5 35.5t-35.5 14.5h-100q-21 0 -35.5 -14.5t-14.5 -35.5v-400z" />
<glyph unicode="&#xe018;" d="M100 1h200v300h-200v-300zM400 1v500h200v-500h-200zM700 1v800h200v-800h-200zM1000 1v1200h200v-1200h-200z" />
<glyph unicode="&#xe019;" d="M26 601q0 -33 6 -74l151 -38l2 -6q14 -49 38 -93l3 -5l-80 -134q45 -59 105 -105l133 81l5 -3q45 -26 94 -39l5 -2l38 -151q40 -5 74 -5q27 0 74 5l38 151l6 2q46 13 93 39l5 3l134 -81q56 44 104 105l-80 134l3 5q24 44 39 93l1 6l152 38q5 40 5 74q0 28 -5 73l-152 38 l-1 6q-16 51 -39 93l-3 5l80 134q-44 58 -104 105l-134 -81l-5 3q-45 25 -93 39l-6 1l-38 152q-40 5 -74 5q-27 0 -74 -5l-38 -152l-5 -1q-50 -14 -94 -39l-5 -3l-133 81q-59 -47 -105 -105l80 -134l-3 -5q-25 -47 -38 -93l-2 -6l-151 -38q-6 -48 -6 -73zM385 601 q0 88 63 151t152 63t152 -63t63 -151q0 -89 -63 -152t-152 -63t-152 63t-63 152z" />
<glyph unicode="&#xe020;" d="M100 1025v50q0 10 7.5 17.5t17.5 7.5h275v100q0 41 29.5 70.5t70.5 29.5h300q41 0 70.5 -29.5t29.5 -70.5v-100h275q10 0 17.5 -7.5t7.5 -17.5v-50q0 -11 -7 -18t-18 -7h-1050q-11 0 -18 7t-7 18zM200 100v800h900v-800q0 -41 -29.5 -71t-70.5 -30h-700q-41 0 -70.5 30 t-29.5 71zM300 100h100v700h-100v-700zM500 100h100v700h-100v-700zM500 1100h300v100h-300v-100zM700 100h100v700h-100v-700zM900 100h100v700h-100v-700z" />
<glyph unicode="&#xe021;" d="M1 601l656 644l644 -644h-200v-600h-300v400h-300v-400h-300v600h-200z" />
<glyph unicode="&#xe022;" d="M100 25v1150q0 11 7 18t18 7h475v-500h400v-675q0 -11 -7 -18t-18 -7h-850q-11 0 -18 7t-7 18zM700 800v300l300 -300h-300z" />
<glyph unicode="&#xe023;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM500 500v400h100 v-300h200v-100h-300z" />
<glyph unicode="&#xe024;" d="M-100 0l431 1200h209l-21 -300h162l-20 300h208l431 -1200h-538l-41 400h-242l-40 -400h-539zM488 500h224l-27 300h-170z" />
<glyph unicode="&#xe025;" d="M0 0v400h490l-290 300h200v500h300v-500h200l-290 -300h490v-400h-1100zM813 200h175v100h-175v-100z" />
<glyph unicode="&#xe026;" d="M1 600q0 122 47.5 233t127.5 191t191 127.5t233 47.5t233 -47.5t191 -127.5t127.5 -191t47.5 -233t-47.5 -233t-127.5 -191t-191 -127.5t-233 -47.5t-233 47.5t-191 127.5t-127.5 191t-47.5 233zM188 600q0 -170 121 -291t291 -121t291 121t121 291t-121 291t-291 121 t-291 -121t-121 -291zM350 600h150v300h200v-300h150l-250 -300z" />
<glyph unicode="&#xe027;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM350 600l250 300 l250 -300h-150v-300h-200v300h-150z" />
<glyph unicode="&#xe028;" d="M0 25v475l200 700h800q199 -700 200 -700v-475q0 -11 -7 -18t-18 -7h-1150q-11 0 -18 7t-7 18zM200 500h200l50 -200h300l50 200h200l-97 500h-606z" />
<glyph unicode="&#xe029;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -172 121.5 -293t292.5 -121t292.5 121t121.5 293q0 171 -121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM500 397v401 l297 -200z" />
<glyph unicode="&#xe030;" d="M23 600q0 -118 45.5 -224.5t123 -184t184 -123t224.5 -45.5t224.5 45.5t184 123t123 184t45.5 224.5h-150q0 -177 -125 -302t-302 -125t-302 125t-125 302t125 302t302 125q136 0 246 -81l-146 -146h400v400l-145 -145q-157 122 -355 122q-118 0 -224.5 -45.5t-184 -123 t-123 -184t-45.5 -224.5z" />
<glyph unicode="&#xe031;" d="M23 600q0 118 45.5 224.5t123 184t184 123t224.5 45.5q198 0 355 -122l145 145v-400h-400l147 147q-112 80 -247 80q-177 0 -302 -125t-125 -302h-150zM100 0v400h400l-147 -147q112 -80 247 -80q177 0 302 125t125 302h150q0 -118 -45.5 -224.5t-123 -184t-184 -123 t-224.5 -45.5q-198 0 -355 122z" />
<glyph unicode="&#xe032;" d="M100 0h1100v1200h-1100v-1200zM200 100v900h900v-900h-900zM300 200v100h100v-100h-100zM300 400v100h100v-100h-100zM300 600v100h100v-100h-100zM300 800v100h100v-100h-100zM500 200h500v100h-500v-100zM500 400v100h500v-100h-500zM500 600v100h500v-100h-500z M500 800v100h500v-100h-500z" />
<glyph unicode="&#xe033;" d="M0 100v600q0 41 29.5 70.5t70.5 29.5h100v200q0 82 59 141t141 59h300q82 0 141 -59t59 -141v-200h100q41 0 70.5 -29.5t29.5 -70.5v-600q0 -41 -29.5 -70.5t-70.5 -29.5h-900q-41 0 -70.5 29.5t-29.5 70.5zM400 800h300v150q0 21 -14.5 35.5t-35.5 14.5h-200 q-21 0 -35.5 -14.5t-14.5 -35.5v-150z" />
<glyph unicode="&#xe034;" d="M100 0v1100h100v-1100h-100zM300 400q60 60 127.5 84t127.5 17.5t122 -23t119 -30t110 -11t103 42t91 120.5v500q-40 -81 -101.5 -115.5t-127.5 -29.5t-138 25t-139.5 40t-125.5 25t-103 -29.5t-65 -115.5v-500z" />
<glyph unicode="&#xe035;" d="M0 275q0 -11 7 -18t18 -7h50q11 0 18 7t7 18v300q0 127 70.5 231.5t184.5 161.5t245 57t245 -57t184.5 -161.5t70.5 -231.5v-300q0 -11 7 -18t18 -7h50q11 0 18 7t7 18v300q0 116 -49.5 227t-131 192.5t-192.5 131t-227 49.5t-227 -49.5t-192.5 -131t-131 -192.5 t-49.5 -227v-300zM200 20v460q0 8 6 14t14 6h160q8 0 14 -6t6 -14v-460q0 -8 -6 -14t-14 -6h-160q-8 0 -14 6t-6 14zM800 20v460q0 8 6 14t14 6h160q8 0 14 -6t6 -14v-460q0 -8 -6 -14t-14 -6h-160q-8 0 -14 6t-6 14z" />
<glyph unicode="&#xe036;" d="M0 400h300l300 -200v800l-300 -200h-300v-400zM688 459l141 141l-141 141l71 71l141 -141l141 141l71 -71l-141 -141l141 -141l-71 -71l-141 141l-141 -141z" />
<glyph unicode="&#xe037;" d="M0 400h300l300 -200v800l-300 -200h-300v-400zM700 857l69 53q111 -135 111 -310q0 -169 -106 -302l-67 54q86 110 86 248q0 146 -93 257z" />
<glyph unicode="&#xe038;" d="M0 401v400h300l300 200v-800l-300 200h-300zM702 858l69 53q111 -135 111 -310q0 -170 -106 -303l-67 55q86 110 86 248q0 145 -93 257zM889 951l7 -8q123 -151 123 -344q0 -189 -119 -339l-7 -8l81 -66l6 8q142 178 142 405q0 230 -144 408l-6 8z" />
<glyph unicode="&#xe039;" d="M0 0h500v500h-200v100h-100v-100h-200v-500zM0 600h100v100h400v100h100v100h-100v300h-500v-600zM100 100v300h300v-300h-300zM100 800v300h300v-300h-300zM200 200v100h100v-100h-100zM200 900h100v100h-100v-100zM500 500v100h300v-300h200v-100h-100v-100h-200v100 h-100v100h100v200h-200zM600 0v100h100v-100h-100zM600 1000h100v-300h200v-300h300v200h-200v100h200v500h-600v-200zM800 800v300h300v-300h-300zM900 0v100h300v-100h-300zM900 900v100h100v-100h-100zM1100 200v100h100v-100h-100z" />
<glyph unicode="&#xe040;" d="M0 200h100v1000h-100v-1000zM100 0v100h300v-100h-300zM200 200v1000h100v-1000h-100zM500 0v91h100v-91h-100zM500 200v1000h200v-1000h-200zM700 0v91h100v-91h-100zM800 200v1000h100v-1000h-100zM900 0v91h200v-91h-200zM1000 200v1000h200v-1000h-200z" />
<glyph unicode="&#xe041;" d="M1 700v475q0 10 7.5 17.5t17.5 7.5h474l700 -700l-500 -500zM148 953q0 -42 29 -71q30 -30 71.5 -30t71.5 30q29 29 29 71t-29 71q-30 30 -71.5 30t-71.5 -30q-29 -29 -29 -71z" />
<glyph unicode="&#xe042;" d="M2 700v475q0 11 7 18t18 7h474l700 -700l-500 -500zM148 953q0 -42 30 -71q29 -30 71 -30t71 30q30 29 30 71t-30 71q-29 30 -71 30t-71 -30q-30 -29 -30 -71zM701 1200h100l700 -700l-500 -500l-50 50l450 450z" />
<glyph unicode="&#xe043;" d="M100 0v1025l175 175h925v-1000l-100 -100v1000h-750l-100 -100h750v-1000h-900z" />
<glyph unicode="&#xe044;" d="M200 0l450 444l450 -443v1150q0 20 -14.5 35t-35.5 15h-800q-21 0 -35.5 -15t-14.5 -35v-1151z" />
<glyph unicode="&#xe045;" d="M0 100v700h200l100 -200h600l100 200h200v-700h-200v200h-800v-200h-200zM253 829l40 -124h592l62 124l-94 346q-2 11 -10 18t-18 7h-450q-10 0 -18 -7t-10 -18zM281 24l38 152q2 10 11.5 17t19.5 7h500q10 0 19.5 -7t11.5 -17l38 -152q2 -10 -3.5 -17t-15.5 -7h-600 q-10 0 -15.5 7t-3.5 17z" />
<glyph unicode="&#xe046;" d="M0 200q0 -41 29.5 -70.5t70.5 -29.5h1000q41 0 70.5 29.5t29.5 70.5v600q0 41 -29.5 70.5t-70.5 29.5h-150q-4 8 -11.5 21.5t-33 48t-53 61t-69 48t-83.5 21.5h-200q-41 0 -82 -20.5t-70 -50t-52 -59t-34 -50.5l-12 -20h-150q-41 0 -70.5 -29.5t-29.5 -70.5v-600z M356 500q0 100 72 172t172 72t172 -72t72 -172t-72 -172t-172 -72t-172 72t-72 172zM494 500q0 -44 31 -75t75 -31t75 31t31 75t-31 75t-75 31t-75 -31t-31 -75zM900 700v100h100v-100h-100z" />
<glyph unicode="&#xe047;" d="M53 0h365v66q-41 0 -72 11t-49 38t1 71l92 234h391l82 -222q16 -45 -5.5 -88.5t-74.5 -43.5v-66h417v66q-34 1 -74 43q-18 19 -33 42t-21 37l-6 13l-385 998h-93l-399 -1006q-24 -48 -52 -75q-12 -12 -33 -25t-36 -20l-15 -7v-66zM416 521l178 457l46 -140l116 -317h-340 z" />
<glyph unicode="&#xe048;" d="M100 0v89q41 7 70.5 32.5t29.5 65.5v827q0 28 -1 39.5t-5.5 26t-15.5 21t-29 14t-49 14.5v70h471q120 0 213 -88t93 -228q0 -55 -11.5 -101.5t-28 -74t-33.5 -47.5t-28 -28l-12 -7q8 -3 21.5 -9t48 -31.5t60.5 -58t47.5 -91.5t21.5 -129q0 -84 -59 -156.5t-142 -111 t-162 -38.5h-500zM400 200h161q89 0 153 48.5t64 132.5q0 90 -62.5 154.5t-156.5 64.5h-159v-400zM400 700h139q76 0 130 61.5t54 138.5q0 82 -84 130.5t-239 48.5v-379z" />
<glyph unicode="&#xe049;" d="M200 0v57q77 7 134.5 40.5t65.5 80.5l173 849q10 56 -10 74t-91 37q-6 1 -10.5 2.5t-9.5 2.5v57h425l2 -57q-33 -8 -62 -25.5t-46 -37t-29.5 -38t-17.5 -30.5l-5 -12l-128 -825q-10 -52 14 -82t95 -36v-57h-500z" />
<glyph unicode="&#xe050;" d="M-75 200h75v800h-75l125 167l125 -167h-75v-800h75l-125 -167zM300 900v300h150h700h150v-300h-50q0 29 -8 48.5t-18.5 30t-33.5 15t-39.5 5.5t-50.5 1h-200v-850l100 -50v-100h-400v100l100 50v850h-200q-34 0 -50.5 -1t-40 -5.5t-33.5 -15t-18.5 -30t-8.5 -48.5h-49z " />
<glyph unicode="&#xe051;" d="M33 51l167 125v-75h800v75l167 -125l-167 -125v75h-800v-75zM100 901v300h150h700h150v-300h-50q0 29 -8 48.5t-18 30t-33.5 15t-40 5.5t-50.5 1h-200v-650l100 -50v-100h-400v100l100 50v650h-200q-34 0 -50.5 -1t-39.5 -5.5t-33.5 -15t-18.5 -30t-8 -48.5h-50z" />
<glyph unicode="&#xe052;" d="M0 50q0 -20 14.5 -35t35.5 -15h1100q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-1100q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM0 350q0 -20 14.5 -35t35.5 -15h800q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-800q-21 0 -35.5 -14.5t-14.5 -35.5 v-100zM0 650q0 -20 14.5 -35t35.5 -15h1000q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-1000q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM0 950q0 -20 14.5 -35t35.5 -15h600q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-600q-21 0 -35.5 -14.5 t-14.5 -35.5v-100z" />
<glyph unicode="&#xe053;" d="M0 50q0 -20 14.5 -35t35.5 -15h1100q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-1100q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM0 650q0 -20 14.5 -35t35.5 -15h1100q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-1100q-21 0 -35.5 -14.5t-14.5 -35.5 v-100zM200 350q0 -20 14.5 -35t35.5 -15h700q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-700q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM200 950q0 -20 14.5 -35t35.5 -15h700q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-700q-21 0 -35.5 -14.5 t-14.5 -35.5v-100z" />
<glyph unicode="&#xe054;" d="M0 50v100q0 21 14.5 35.5t35.5 14.5h1100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-1100q-21 0 -35.5 15t-14.5 35zM100 650v100q0 21 14.5 35.5t35.5 14.5h1000q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-1000q-21 0 -35.5 15 t-14.5 35zM300 350v100q0 21 14.5 35.5t35.5 14.5h800q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-800q-21 0 -35.5 15t-14.5 35zM500 950v100q0 21 14.5 35.5t35.5 14.5h600q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-600 q-21 0 -35.5 15t-14.5 35z" />
<glyph unicode="&#xe055;" d="M0 50v100q0 21 14.5 35.5t35.5 14.5h1100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-1100q-21 0 -35.5 15t-14.5 35zM0 350v100q0 21 14.5 35.5t35.5 14.5h1100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-1100q-21 0 -35.5 15 t-14.5 35zM0 650v100q0 21 14.5 35.5t35.5 14.5h1100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-1100q-21 0 -35.5 15t-14.5 35zM0 950v100q0 21 14.5 35.5t35.5 14.5h1100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-1100 q-21 0 -35.5 15t-14.5 35z" />
<glyph unicode="&#xe056;" d="M0 50v100q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-100q-21 0 -35.5 15t-14.5 35zM0 350v100q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-100q-21 0 -35.5 15 t-14.5 35zM0 650v100q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-100q-21 0 -35.5 15t-14.5 35zM0 950v100q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-100q-21 0 -35.5 15 t-14.5 35zM300 50v100q0 21 14.5 35.5t35.5 14.5h800q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-800q-21 0 -35.5 15t-14.5 35zM300 350v100q0 21 14.5 35.5t35.5 14.5h800q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-800 q-21 0 -35.5 15t-14.5 35zM300 650v100q0 21 14.5 35.5t35.5 14.5h800q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-800q-21 0 -35.5 15t-14.5 35zM300 950v100q0 21 14.5 35.5t35.5 14.5h800q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15 h-800q-21 0 -35.5 15t-14.5 35z" />
<glyph unicode="&#xe057;" d="M-101 500v100h201v75l166 -125l-166 -125v75h-201zM300 0h100v1100h-100v-1100zM500 50q0 -20 14.5 -35t35.5 -15h600q20 0 35 15t15 35v100q0 21 -15 35.5t-35 14.5h-600q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM500 350q0 -20 14.5 -35t35.5 -15h300q20 0 35 15t15 35 v100q0 21 -15 35.5t-35 14.5h-300q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM500 650q0 -20 14.5 -35t35.5 -15h500q20 0 35 15t15 35v100q0 21 -15 35.5t-35 14.5h-500q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM500 950q0 -20 14.5 -35t35.5 -15h100q20 0 35 15t15 35v100 q0 21 -15 35.5t-35 14.5h-100q-21 0 -35.5 -14.5t-14.5 -35.5v-100z" />
<glyph unicode="&#xe058;" d="M1 50q0 -20 14.5 -35t35.5 -15h600q20 0 35 15t15 35v100q0 21 -15 35.5t-35 14.5h-600q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM1 350q0 -20 14.5 -35t35.5 -15h300q20 0 35 15t15 35v100q0 21 -15 35.5t-35 14.5h-300q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM1 650 q0 -20 14.5 -35t35.5 -15h500q20 0 35 15t15 35v100q0 21 -15 35.5t-35 14.5h-500q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM1 950q0 -20 14.5 -35t35.5 -15h100q20 0 35 15t15 35v100q0 21 -15 35.5t-35 14.5h-100q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM801 0v1100h100v-1100 h-100zM934 550l167 -125v75h200v100h-200v75z" />
<glyph unicode="&#xe059;" d="M0 275v650q0 31 22 53t53 22h750q31 0 53 -22t22 -53v-650q0 -31 -22 -53t-53 -22h-750q-31 0 -53 22t-22 53zM900 600l300 300v-600z" />
<glyph unicode="&#xe060;" d="M0 44v1012q0 18 13 31t31 13h1112q19 0 31.5 -13t12.5 -31v-1012q0 -18 -12.5 -31t-31.5 -13h-1112q-18 0 -31 13t-13 31zM100 263l247 182l298 -131l-74 156l293 318l236 -288v500h-1000v-737zM208 750q0 56 39 95t95 39t95 -39t39 -95t-39 -95t-95 -39t-95 39t-39 95z " />
<glyph unicode="&#xe062;" d="M148 745q0 124 60.5 231.5t165 172t226.5 64.5q123 0 227 -63t164.5 -169.5t60.5 -229.5t-73 -272q-73 -114 -166.5 -237t-150.5 -189l-57 -66q-10 9 -27 26t-66.5 70.5t-96 109t-104 135.5t-100.5 155q-63 139 -63 262zM342 772q0 -107 75.5 -182.5t181.5 -75.5 q107 0 182.5 75.5t75.5 182.5t-75.5 182t-182.5 75t-182 -75.5t-75 -181.5z" />
<glyph unicode="&#xe063;" d="M1 600q0 122 47.5 233t127.5 191t191 127.5t233 47.5t233 -47.5t191 -127.5t127.5 -191t47.5 -233t-47.5 -233t-127.5 -191t-191 -127.5t-233 -47.5t-233 47.5t-191 127.5t-127.5 191t-47.5 233zM173 600q0 -177 125.5 -302t301.5 -125v854q-176 0 -301.5 -125 t-125.5 -302z" />
<glyph unicode="&#xe064;" d="M117 406q0 94 34 186t88.5 172.5t112 159t115 177t87.5 194.5q21 -71 57.5 -142.5t76 -130.5t83 -118.5t82 -117t70 -116t50 -125.5t18.5 -136q0 -89 -39 -165.5t-102 -126.5t-140 -79.5t-156 -33.5q-114 6 -211.5 53t-161.5 138.5t-64 210.5zM243 414q14 -82 59.5 -136 t136.5 -80l16 98q-7 6 -18 17t-34 48t-33 77q-15 73 -14 143.5t10 122.5l9 51q-92 -110 -119.5 -185t-12.5 -156z" />
<glyph unicode="&#xe065;" d="M0 400v300q0 165 117.5 282.5t282.5 117.5q366 -6 397 -14l-186 -186h-311q-41 0 -70.5 -29.5t-29.5 -70.5v-500q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5v125l200 200v-225q0 -165 -117.5 -282.5t-282.5 -117.5h-300q-165 0 -282.5 117.5 t-117.5 282.5zM436 341l161 50l412 412l-114 113l-405 -405zM995 1015l113 -113l113 113l-21 85l-92 28z" />
<glyph unicode="&#xe066;" d="M0 400v300q0 165 117.5 282.5t282.5 117.5h261l2 -80q-133 -32 -218 -120h-145q-41 0 -70.5 -29.5t-29.5 -70.5v-500q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5l200 153v-53q0 -165 -117.5 -282.5t-282.5 -117.5h-300q-165 0 -282.5 117.5t-117.5 282.5 zM423 524q30 38 81.5 64t103 35.5t99 14t77.5 3.5l29 -1v-209l360 324l-359 318v-216q-7 0 -19 -1t-48 -8t-69.5 -18.5t-76.5 -37t-76.5 -59t-62 -88t-39.5 -121.5z" />
<glyph unicode="&#xe067;" d="M0 400v300q0 165 117.5 282.5t282.5 117.5h300q60 0 127 -23l-178 -177h-349q-41 0 -70.5 -29.5t-29.5 -70.5v-500q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5v69l200 200v-169q0 -165 -117.5 -282.5t-282.5 -117.5h-300q-165 0 -282.5 117.5 t-117.5 282.5zM342 632l283 -284l566 567l-136 137l-430 -431l-147 147z" />
<glyph unicode="&#xe068;" d="M0 603l300 296v-198h200v200h-200l300 300l295 -300h-195v-200h200v198l300 -296l-300 -300v198h-200v-200h195l-295 -300l-300 300h200v200h-200v-198z" />
<glyph unicode="&#xe069;" d="M200 50v1000q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-437l500 487v-1100l-500 488v-438q0 -21 -14.5 -35.5t-35.5 -14.5h-100q-21 0 -35.5 14.5t-14.5 35.5z" />
<glyph unicode="&#xe070;" d="M0 50v1000q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-437l500 487v-487l500 487v-1100l-500 488v-488l-500 488v-438q0 -21 -14.5 -35.5t-35.5 -14.5h-100q-21 0 -35.5 14.5t-14.5 35.5z" />
<glyph unicode="&#xe071;" d="M136 550l564 550v-487l500 487v-1100l-500 488v-488z" />
<glyph unicode="&#xe072;" d="M200 0l900 550l-900 550v-1100z" />
<glyph unicode="&#xe073;" d="M200 150q0 -21 14.5 -35.5t35.5 -14.5h200q21 0 35.5 14.5t14.5 35.5v800q0 21 -14.5 35.5t-35.5 14.5h-200q-21 0 -35.5 -14.5t-14.5 -35.5v-800zM600 150q0 -21 14.5 -35.5t35.5 -14.5h200q21 0 35.5 14.5t14.5 35.5v800q0 21 -14.5 35.5t-35.5 14.5h-200 q-21 0 -35.5 -14.5t-14.5 -35.5v-800z" />
<glyph unicode="&#xe074;" d="M200 150q0 -20 14.5 -35t35.5 -15h800q21 0 35.5 15t14.5 35v800q0 21 -14.5 35.5t-35.5 14.5h-800q-21 0 -35.5 -14.5t-14.5 -35.5v-800z" />
<glyph unicode="&#xe075;" d="M0 0v1100l500 -487v487l564 -550l-564 -550v488z" />
<glyph unicode="&#xe076;" d="M0 0v1100l500 -487v487l500 -487v437q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-1000q0 -21 -14.5 -35.5t-35.5 -14.5h-100q-21 0 -35.5 14.5t-14.5 35.5v438l-500 -488v488z" />
<glyph unicode="&#xe077;" d="M300 0v1100l500 -487v437q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-1000q0 -21 -14.5 -35.5t-35.5 -14.5h-100q-21 0 -35.5 14.5t-14.5 35.5v438z" />
<glyph unicode="&#xe078;" d="M100 250v100q0 21 14.5 35.5t35.5 14.5h1000q21 0 35.5 -14.5t14.5 -35.5v-100q0 -21 -14.5 -35.5t-35.5 -14.5h-1000q-21 0 -35.5 14.5t-14.5 35.5zM100 500h1100l-550 564z" />
<glyph unicode="&#xe079;" d="M185 599l592 -592l240 240l-353 353l353 353l-240 240z" />
<glyph unicode="&#xe080;" d="M272 194l353 353l-353 353l241 240l572 -571l21 -22l-1 -1v-1l-592 -591z" />
<glyph unicode="&#xe081;" d="M3 600q0 162 80 299.5t217.5 217.5t299.5 80t299.5 -80t217.5 -217.5t80 -299.5t-80 -300t-217.5 -218t-299.5 -80t-299.5 80t-217.5 218t-80 300zM300 500h200v-200h200v200h200v200h-200v200h-200v-200h-200v-200z" />
<glyph unicode="&#xe082;" d="M3 600q0 162 80 299.5t217.5 217.5t299.5 80t299.5 -80t217.5 -217.5t80 -299.5t-80 -300t-217.5 -218t-299.5 -80t-299.5 80t-217.5 218t-80 300zM300 500h600v200h-600v-200z" />
<glyph unicode="&#xe083;" d="M3 600q0 162 80 299.5t217.5 217.5t299.5 80t299.5 -80t217.5 -217.5t80 -299.5t-80 -300t-217.5 -218t-299.5 -80t-299.5 80t-217.5 218t-80 300zM246 459l213 -213l141 142l141 -142l213 213l-142 141l142 141l-213 212l-141 -141l-141 142l-212 -213l141 -141z" />
<glyph unicode="&#xe084;" d="M3 600q0 162 80 299.5t217.5 217.5t299.5 80t299.5 -80t217.5 -217.5t80 -299.5t-80 -299.5t-217.5 -217.5t-299.5 -80t-299.5 80t-217.5 217.5t-80 299.5zM270 551l276 -277l411 411l-175 174l-236 -236l-102 102z" />
<glyph unicode="&#xe085;" d="M3 600q0 162 80 299.5t217.5 217.5t299.5 80t299.5 -80t217.5 -217.5t80 -299.5t-80 -300t-217.5 -218t-299.5 -80t-299.5 80t-217.5 218t-80 300zM363 700h144q4 0 11.5 -1t11 -1t6.5 3t3 9t1 11t3.5 8.5t3.5 6t5.5 4t6.5 2.5t9 1.5t9 0.5h11.5h12.5q19 0 30 -10t11 -26 q0 -22 -4 -28t-27 -22q-5 -1 -12.5 -3t-27 -13.5t-34 -27t-26.5 -46t-11 -68.5h200q5 3 14 8t31.5 25.5t39.5 45.5t31 69t14 94q0 51 -17.5 89t-42 58t-58.5 32t-58.5 15t-51.5 3q-105 0 -172 -56t-67 -183zM500 300h200v100h-200v-100z" />
<glyph unicode="&#xe086;" d="M3 600q0 162 80 299.5t217.5 217.5t299.5 80t299.5 -80t217.5 -217.5t80 -299.5t-80 -300t-217.5 -218t-299.5 -80t-299.5 80t-217.5 218t-80 300zM400 300h400v100h-100v300h-300v-100h100v-200h-100v-100zM500 800h200v100h-200v-100z" />
<glyph unicode="&#xe087;" d="M0 500v200h194q15 60 36 104.5t55.5 86t88 69t126.5 40.5v200h200v-200q54 -20 113 -60t112.5 -105.5t71.5 -134.5h203v-200h-203q-25 -102 -116.5 -186t-180.5 -117v-197h-200v197q-140 27 -208 102.5t-98 200.5h-194zM290 500q24 -73 79.5 -127.5t130.5 -78.5v206h200 v-206q149 48 201 206h-201v200h200q-25 74 -76 127.5t-124 76.5v-204h-200v203q-75 -24 -130 -77.5t-79 -125.5h209v-200h-210z" />
<glyph unicode="&#xe088;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM356 465l135 135 l-135 135l109 109l135 -135l135 135l109 -109l-135 -135l135 -135l-109 -109l-135 135l-135 -135z" />
<glyph unicode="&#xe089;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM322 537l141 141 l87 -87l204 205l142 -142l-346 -345z" />
<glyph unicode="&#xe090;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -115 62 -215l568 567q-100 62 -216 62q-171 0 -292.5 -121.5t-121.5 -292.5zM391 245q97 -59 209 -59q171 0 292.5 121.5t121.5 292.5 q0 112 -59 209z" />
<glyph unicode="&#xe091;" d="M0 547l600 453v-300h600v-300h-600v-301z" />
<glyph unicode="&#xe092;" d="M0 400v300h600v300l600 -453l-600 -448v301h-600z" />
<glyph unicode="&#xe093;" d="M204 600l450 600l444 -600h-298v-600h-300v600h-296z" />
<glyph unicode="&#xe094;" d="M104 600h296v600h300v-600h298l-449 -600z" />
<glyph unicode="&#xe095;" d="M0 200q6 132 41 238.5t103.5 193t184 138t271.5 59.5v271l600 -453l-600 -448v301q-95 -2 -183 -20t-170 -52t-147 -92.5t-100 -135.5z" />
<glyph unicode="&#xe096;" d="M0 0v400l129 -129l294 294l142 -142l-294 -294l129 -129h-400zM635 777l142 -142l294 294l129 -129v400h-400l129 -129z" />
<glyph unicode="&#xe097;" d="M34 176l295 295l-129 129h400v-400l-129 130l-295 -295zM600 600v400l129 -129l295 295l142 -141l-295 -295l129 -130h-400z" />
<glyph unicode="&#xe101;" d="M23 600q0 118 45.5 224.5t123 184t184 123t224.5 45.5t224.5 -45.5t184 -123t123 -184t45.5 -224.5t-45.5 -224.5t-123 -184t-184 -123t-224.5 -45.5t-224.5 45.5t-184 123t-123 184t-45.5 224.5zM456 851l58 -302q4 -20 21.5 -34.5t37.5 -14.5h54q20 0 37.5 14.5 t21.5 34.5l58 302q4 20 -8 34.5t-33 14.5h-207q-20 0 -32 -14.5t-8 -34.5zM500 300h200v100h-200v-100z" />
<glyph unicode="&#xe102;" d="M0 800h100v-200h400v300h200v-300h400v200h100v100h-111v6t-1 15t-3 18l-34 172q-11 39 -41.5 63t-69.5 24q-32 0 -61 -17l-239 -144q-22 -13 -40 -35q-19 24 -40 36l-238 144q-33 18 -62 18q-39 0 -69.5 -23t-40.5 -61l-35 -177q-2 -8 -3 -18t-1 -15v-6h-111v-100z M100 0h400v400h-400v-400zM200 900q-3 0 14 48t35 96l18 47l214 -191h-281zM700 0v400h400v-400h-400zM731 900l202 197q5 -12 12 -32.5t23 -64t25 -72t7 -28.5h-269z" />
<glyph unicode="&#xe103;" d="M0 -22v143l216 193q-9 53 -13 83t-5.5 94t9 113t38.5 114t74 124q47 60 99.5 102.5t103 68t127.5 48t145.5 37.5t184.5 43.5t220 58.5q0 -189 -22 -343t-59 -258t-89 -181.5t-108.5 -120t-122 -68t-125.5 -30t-121.5 -1.5t-107.5 12.5t-87.5 17t-56.5 7.5l-99 -55z M238.5 300.5q19.5 -6.5 86.5 76.5q55 66 367 234q70 38 118.5 69.5t102 79t99 111.5t86.5 148q22 50 24 60t-6 19q-7 5 -17 5t-26.5 -14.5t-33.5 -39.5q-35 -51 -113.5 -108.5t-139.5 -89.5l-61 -32q-369 -197 -458 -401q-48 -111 -28.5 -117.5z" />
<glyph unicode="&#xe104;" d="M111 408q0 -33 5 -63q9 -56 44 -119.5t105 -108.5q31 -21 64 -16t62 23.5t57 49.5t48 61.5t35 60.5q32 66 39 184.5t-13 157.5q79 -80 122 -164t26 -184q-5 -33 -20.5 -69.5t-37.5 -80.5q-10 -19 -14.5 -29t-12 -26t-9 -23.5t-3 -19t2.5 -15.5t11 -9.5t19.5 -5t30.5 2.5 t42 8q57 20 91 34t87.5 44.5t87 64t65.5 88.5t47 122q38 172 -44.5 341.5t-246.5 278.5q22 -44 43 -129q39 -159 -32 -154q-15 2 -33 9q-79 33 -120.5 100t-44 175.5t48.5 257.5q-13 -8 -34 -23.5t-72.5 -66.5t-88.5 -105.5t-60 -138t-8 -166.5q2 -12 8 -41.5t8 -43t6 -39.5 t3.5 -39.5t-1 -33.5t-6 -31.5t-13.5 -24t-21 -20.5t-31 -12q-38 -10 -67 13t-40.5 61.5t-15 81.5t10.5 75q-52 -46 -83.5 -101t-39 -107t-7.5 -85z" />
<glyph unicode="&#xe105;" d="M-61 600l26 40q6 10 20 30t49 63.5t74.5 85.5t97 90t116.5 83.5t132.5 59t145.5 23.5t145.5 -23.5t132.5 -59t116.5 -83.5t97 -90t74.5 -85.5t49 -63.5t20 -30l26 -40l-26 -40q-6 -10 -20 -30t-49 -63.5t-74.5 -85.5t-97 -90t-116.5 -83.5t-132.5 -59t-145.5 -23.5 t-145.5 23.5t-132.5 59t-116.5 83.5t-97 90t-74.5 85.5t-49 63.5t-20 30zM120 600q7 -10 40.5 -58t56 -78.5t68 -77.5t87.5 -75t103 -49.5t125 -21.5t123.5 20t100.5 45.5t85.5 71.5t66.5 75.5t58 81.5t47 66q-1 1 -28.5 37.5t-42 55t-43.5 53t-57.5 63.5t-58.5 54 q49 -74 49 -163q0 -124 -88 -212t-212 -88t-212 88t-88 212q0 85 46 158q-102 -87 -226 -258zM377 656q49 -124 154 -191l105 105q-37 24 -75 72t-57 84l-20 36z" />
<glyph unicode="&#xe106;" d="M-61 600l26 40q6 10 20 30t49 63.5t74.5 85.5t97 90t116.5 83.5t132.5 59t145.5 23.5q61 0 121 -17l37 142h148l-314 -1200h-148l37 143q-82 21 -165 71.5t-140 102t-109.5 112t-72 88.5t-29.5 43zM120 600q210 -282 393 -336l37 141q-107 18 -178.5 101.5t-71.5 193.5 q0 85 46 158q-102 -87 -226 -258zM377 656q49 -124 154 -191l47 47l23 87q-30 28 -59 69t-44 68l-14 26zM780 161l38 145q22 15 44.5 34t46 44t40.5 44t41 50.5t33.5 43.5t33 44t24.5 34q-97 127 -140 175l39 146q67 -54 131.5 -125.5t87.5 -103.5t36 -52l26 -40l-26 -40 q-7 -12 -25.5 -38t-63.5 -79.5t-95.5 -102.5t-124 -100t-146.5 -79z" />
<glyph unicode="&#xe107;" d="M-97.5 34q13.5 -34 50.5 -34h1294q37 0 50.5 35.5t-7.5 67.5l-642 1056q-20 33 -48 36t-48 -29l-642 -1066q-21 -32 -7.5 -66zM155 200l445 723l445 -723h-345v100h-200v-100h-345zM500 600l100 -300l100 300v100h-200v-100z" />
<glyph unicode="&#xe108;" d="M100 262v41q0 20 11 44.5t26 38.5l363 325v339q0 62 44 106t106 44t106 -44t44 -106v-339l363 -325q15 -14 26 -38.5t11 -44.5v-41q0 -20 -12 -26.5t-29 5.5l-359 249v-263q100 -91 100 -113v-64q0 -21 -13 -29t-32 1l-94 78h-222l-94 -78q-19 -9 -32 -1t-13 29v64 q0 22 100 113v263l-359 -249q-17 -12 -29 -5.5t-12 26.5z" />
<glyph unicode="&#xe109;" d="M0 50q0 -20 14.5 -35t35.5 -15h1000q21 0 35.5 15t14.5 35v750h-1100v-750zM0 900h1100v150q0 21 -14.5 35.5t-35.5 14.5h-150v100h-100v-100h-500v100h-100v-100h-150q-21 0 -35.5 -14.5t-14.5 -35.5v-150zM100 100v100h100v-100h-100zM100 300v100h100v-100h-100z M100 500v100h100v-100h-100zM300 100v100h100v-100h-100zM300 300v100h100v-100h-100zM300 500v100h100v-100h-100zM500 100v100h100v-100h-100zM500 300v100h100v-100h-100zM500 500v100h100v-100h-100zM700 100v100h100v-100h-100zM700 300v100h100v-100h-100zM700 500 v100h100v-100h-100zM900 100v100h100v-100h-100zM900 300v100h100v-100h-100zM900 500v100h100v-100h-100z" />
<glyph unicode="&#xe110;" d="M0 200v200h259l600 600h241v198l300 -295l-300 -300v197h-159l-600 -600h-341zM0 800h259l122 -122l141 142l-181 180h-341v-200zM678 381l141 142l122 -123h159v198l300 -295l-300 -300v197h-241z" />
<glyph unicode="&#xe111;" d="M0 400v600q0 41 29.5 70.5t70.5 29.5h1000q41 0 70.5 -29.5t29.5 -70.5v-600q0 -41 -29.5 -70.5t-70.5 -29.5h-596l-304 -300v300h-100q-41 0 -70.5 29.5t-29.5 70.5z" />
<glyph unicode="&#xe112;" d="M100 600v200h300v-250q0 -113 6 -145q17 -92 102 -117q39 -11 92 -11q37 0 66.5 5.5t50 15.5t36 24t24 31.5t14 37.5t7 42t2.5 45t0 47v25v250h300v-200q0 -42 -3 -83t-15 -104t-31.5 -116t-58 -109.5t-89 -96.5t-129 -65.5t-174.5 -25.5t-174.5 25.5t-129 65.5t-89 96.5 t-58 109.5t-31.5 116t-15 104t-3 83zM100 900v300h300v-300h-300zM800 900v300h300v-300h-300z" />
<glyph unicode="&#xe113;" d="M-30 411l227 -227l352 353l353 -353l226 227l-578 579z" />
<glyph unicode="&#xe114;" d="M70 797l580 -579l578 579l-226 227l-353 -353l-352 353z" />
<glyph unicode="&#xe115;" d="M-198 700l299 283l300 -283h-203v-400h385l215 -200h-800v600h-196zM402 1000l215 -200h381v-400h-198l299 -283l299 283h-200v600h-796z" />
<glyph unicode="&#xe116;" d="M18 939q-5 24 10 42q14 19 39 19h896l38 162q5 17 18.5 27.5t30.5 10.5h94q20 0 35 -14.5t15 -35.5t-15 -35.5t-35 -14.5h-54l-201 -961q-2 -4 -6 -10.5t-19 -17.5t-33 -11h-31v-50q0 -20 -14.5 -35t-35.5 -15t-35.5 15t-14.5 35v50h-300v-50q0 -20 -14.5 -35t-35.5 -15 t-35.5 15t-14.5 35v50h-50q-21 0 -35.5 15t-14.5 35q0 21 14.5 35.5t35.5 14.5h535l48 200h-633q-32 0 -54.5 21t-27.5 43z" />
<glyph unicode="&#xe117;" d="M0 0v800h1200v-800h-1200zM0 900v100h200q0 41 29.5 70.5t70.5 29.5h300q41 0 70.5 -29.5t29.5 -70.5h500v-100h-1200z" />
<glyph unicode="&#xe118;" d="M1 0l300 700h1200l-300 -700h-1200zM1 400v600h200q0 41 29.5 70.5t70.5 29.5h300q41 0 70.5 -29.5t29.5 -70.5h500v-200h-1000z" />
<glyph unicode="&#xe119;" d="M302 300h198v600h-198l298 300l298 -300h-198v-600h198l-298 -300z" />
<glyph unicode="&#xe120;" d="M0 600l300 298v-198h600v198l300 -298l-300 -297v197h-600v-197z" />
<glyph unicode="&#xe121;" d="M0 100v100q0 41 29.5 70.5t70.5 29.5h1000q41 0 70.5 -29.5t29.5 -70.5v-100q0 -41 -29.5 -70.5t-70.5 -29.5h-1000q-41 0 -70.5 29.5t-29.5 70.5zM31 400l172 739q5 22 23 41.5t38 19.5h672q19 0 37.5 -22.5t23.5 -45.5l172 -732h-1138zM800 100h100v100h-100v-100z M1000 100h100v100h-100v-100z" />
<glyph unicode="&#xe122;" d="M-101 600v50q0 24 25 49t50 38l25 13v-250l-11 5.5t-24 14t-30 21.5t-24 27.5t-11 31.5zM99 500v250v5q0 13 0.5 18.5t2.5 13t8 10.5t15 3h200l675 250v-850l-675 200h-38l47 -276q2 -12 -3 -17.5t-11 -6t-21 -0.5h-8h-83q-20 0 -34.5 14t-18.5 35q-56 337 -56 351z M1100 200v850q0 21 14.5 35.5t35.5 14.5q20 0 35 -14.5t15 -35.5v-850q0 -20 -15 -35t-35 -15q-21 0 -35.5 15t-14.5 35z" />
<glyph unicode="&#xe123;" d="M74 350q0 21 13.5 35.5t33.5 14.5h17l118 173l63 327q15 77 76 140t144 83l-18 32q-6 19 3 32t29 13h94q20 0 29 -10.5t3 -29.5l-18 -37q83 -19 144 -82.5t76 -140.5l63 -327l118 -173h17q20 0 33.5 -14.5t13.5 -35.5q0 -20 -13 -40t-31 -27q-22 -9 -63 -23t-167.5 -37 t-251.5 -23t-245.5 20.5t-178.5 41.5l-58 20q-18 7 -31 27.5t-13 40.5zM497 110q12 -49 40 -79.5t63 -30.5t63 30.5t39 79.5q-48 -6 -102 -6t-103 6z" />
<glyph unicode="&#xe124;" d="M21 445l233 -45l-78 -224l224 78l45 -233l155 179l155 -179l45 233l224 -78l-78 224l234 45l-180 155l180 156l-234 44l78 225l-224 -78l-45 233l-155 -180l-155 180l-45 -233l-224 78l78 -225l-233 -44l179 -156z" />
<glyph unicode="&#xe125;" d="M0 200h200v600h-200v-600zM300 275q0 -75 100 -75h61q123 -100 139 -100h250q46 0 83 57l238 344q29 31 29 74v100q0 44 -30.5 84.5t-69.5 40.5h-328q28 118 28 125v150q0 44 -30.5 84.5t-69.5 40.5h-50q-27 0 -51 -20t-38 -48l-96 -198l-145 -196q-20 -26 -20 -63v-400z M400 300v375l150 212l100 213h50v-175l-50 -225h450v-125l-250 -375h-214l-136 100h-100z" />
<glyph unicode="&#xe126;" d="M0 400v600h200v-600h-200zM300 525v400q0 75 100 75h61q123 100 139 100h250q46 0 83 -57l238 -344q29 -31 29 -74v-100q0 -44 -30.5 -84.5t-69.5 -40.5h-328q28 -118 28 -125v-150q0 -44 -30.5 -84.5t-69.5 -40.5h-50q-27 0 -51 20t-38 48l-96 198l-145 196 q-20 26 -20 63zM400 525l150 -212l100 -213h50v175l-50 225h450v125l-250 375h-214l-136 -100h-100v-375z" />
<glyph unicode="&#xe127;" d="M8 200v600h200v-600h-200zM308 275v525q0 17 14 35.5t28 28.5l14 9l362 230q14 6 25 6q17 0 29 -12l109 -112q14 -14 14 -34q0 -18 -11 -32l-85 -121h302q85 0 138.5 -38t53.5 -110t-54.5 -111t-138.5 -39h-107l-130 -339q-7 -22 -20.5 -41.5t-28.5 -19.5h-341 q-7 0 -90 81t-83 94zM408 289l100 -89h293l131 339q6 21 19.5 41t28.5 20h203q16 0 25 15t9 36q0 20 -9 34.5t-25 14.5h-457h-6.5h-7.5t-6.5 0.5t-6 1t-5 1.5t-5.5 2.5t-4 4t-4 5.5q-5 12 -5 20q0 14 10 27l147 183l-86 83l-339 -236v-503z" />
<glyph unicode="&#xe128;" d="M-101 651q0 72 54 110t139 37h302l-85 121q-11 16 -11 32q0 21 14 34l109 113q13 12 29 12q11 0 25 -6l365 -230q7 -4 16.5 -10.5t26 -26t16.5 -36.5v-526q0 -13 -85.5 -93.5t-93.5 -80.5h-342q-15 0 -28.5 20t-19.5 41l-131 339h-106q-84 0 -139 39t-55 111zM-1 601h222 q15 0 28.5 -20.5t19.5 -40.5l131 -339h293l106 89v502l-342 237l-87 -83l145 -184q10 -11 10 -26q0 -11 -5 -20q-1 -3 -3.5 -5.5l-4 -4t-5 -2.5t-5.5 -1.5t-6.5 -1t-6.5 -0.5h-7.5h-6.5h-476v-100zM999 201v600h200v-600h-200z" />
<glyph unicode="&#xe129;" d="M97 719l230 -363q4 -6 10.5 -15.5t26 -25t36.5 -15.5h525q13 0 94 83t81 90v342q0 15 -20 28.5t-41 19.5l-339 131v106q0 84 -39 139t-111 55t-110 -53.5t-38 -138.5v-302l-121 84q-15 12 -33.5 11.5t-32.5 -13.5l-112 -110q-22 -22 -6 -53zM172 739l83 86l183 -146 q22 -18 47 -5q3 1 5.5 3.5l4 4t2.5 5t1.5 5.5t1 6.5t0.5 6v7.5v7v456q0 22 25 31t50 -0.5t25 -30.5v-202q0 -16 20 -29.5t41 -19.5l339 -130v-294l-89 -100h-503zM400 0v200h600v-200h-600z" />
<glyph unicode="&#xe130;" d="M1 585q-15 -31 7 -53l112 -110q13 -13 32 -13.5t34 10.5l121 85l-1 -302q0 -84 38.5 -138t110.5 -54t111 55t39 139v106l339 131q20 6 40.5 19.5t20.5 28.5v342q0 7 -81 90t-94 83h-525q-17 0 -35.5 -14t-28.5 -28l-10 -15zM76 565l237 339h503l89 -100v-294l-340 -130 q-20 -6 -40 -20t-20 -29v-202q0 -22 -25 -31t-50 0t-25 31v456v14.5t-1.5 11.5t-5 12t-9.5 7q-24 13 -46 -5l-184 -146zM305 1104v200h600v-200h-600z" />
<glyph unicode="&#xe131;" d="M5 597q0 122 47.5 232.5t127.5 190.5t190.5 127.5t232.5 47.5q162 0 299.5 -80t217.5 -218t80 -300t-80 -299.5t-217.5 -217.5t-299.5 -80t-300 80t-218 217.5t-80 299.5zM300 500h300l-2 -194l402 294l-402 298v-197h-298v-201z" />
<glyph unicode="&#xe132;" d="M0 597q0 122 47.5 232.5t127.5 190.5t190.5 127.5t231.5 47.5q122 0 232.5 -47.5t190.5 -127.5t127.5 -190.5t47.5 -232.5q0 -162 -80 -299.5t-218 -217.5t-300 -80t-299.5 80t-217.5 217.5t-80 299.5zM200 600l400 -294v194h302v201h-300v197z" />
<glyph unicode="&#xe133;" d="M5 597q0 122 47.5 232.5t127.5 190.5t190.5 127.5t232.5 47.5q121 0 231.5 -47.5t190.5 -127.5t127.5 -190.5t47.5 -232.5q0 -162 -80 -299.5t-217.5 -217.5t-299.5 -80t-300 80t-218 217.5t-80 299.5zM300 600h200v-300h200v300h200l-300 400z" />
<glyph unicode="&#xe134;" d="M5 597q0 122 47.5 232.5t127.5 190.5t190.5 127.5t232.5 47.5q121 0 231.5 -47.5t190.5 -127.5t127.5 -190.5t47.5 -232.5q0 -162 -80 -299.5t-217.5 -217.5t-299.5 -80t-300 80t-218 217.5t-80 299.5zM300 600l300 -400l300 400h-200v300h-200v-300h-200z" />
<glyph unicode="&#xe135;" d="M5 597q0 122 47.5 232.5t127.5 190.5t190.5 127.5t232.5 47.5q121 0 231.5 -47.5t190.5 -127.5t127.5 -190.5t47.5 -232.5q0 -162 -80 -299.5t-217.5 -217.5t-299.5 -80t-300 80t-218 217.5t-80 299.5zM254 780q-8 -34 5.5 -93t7.5 -87q0 -9 17 -44t16 -60q12 0 23 -5.5 t23 -15t20 -13.5q20 -10 108 -42q22 -8 53 -31.5t59.5 -38.5t57.5 -11q8 -18 -15 -55.5t-20 -57.5q12 -21 22.5 -34.5t28 -27t36.5 -17.5q0 -6 -3 -15.5t-3.5 -14.5t4.5 -17q101 -2 221 111q31 30 47 48t34 49t21 62q-14 9 -37.5 9.5t-35.5 7.5q-14 7 -49 15t-52 19 q-9 0 -39.5 -0.5t-46.5 -1.5t-39 -6.5t-39 -16.5q-50 -35 -66 -12q-4 2 -3.5 25.5t0.5 25.5q-6 13 -26.5 17t-24.5 7q2 22 -2 41t-16.5 28t-38.5 -20q-23 -25 -42 4q-19 28 -8 58q8 16 22 22q6 -1 26 -1.5t33.5 -4.5t19.5 -13q12 -19 32 -37.5t34 -27.5l14 -8q0 3 9.5 39.5 t5.5 57.5q-4 23 14.5 44.5t22.5 31.5q5 14 10 35t8.5 31t15.5 22.5t34 21.5q-6 18 10 37q8 0 23.5 -1.5t24.5 -1.5t20.5 4.5t20.5 15.5q-10 23 -30.5 42.5t-38 30t-49 26.5t-43.5 23q11 41 1 44q31 -13 58.5 -14.5t39.5 3.5l11 4q6 36 -17 53.5t-64 28.5t-56 23 q-19 -3 -37 0q-15 -12 -36.5 -21t-34.5 -12t-44 -8t-39 -6q-15 -3 -46 0t-45 -3q-20 -6 -51.5 -25.5t-34.5 -34.5q-3 -11 6.5 -22.5t8.5 -18.5q-3 -34 -27.5 -91t-29.5 -79zM518 915q3 12 16 30.5t16 25.5q10 -10 18.5 -10t14 6t14.5 14.5t16 12.5q0 -18 8 -42.5t16.5 -44 t9.5 -23.5q-6 1 -39 5t-53.5 10t-36.5 16z" />
<glyph unicode="&#xe136;" d="M0 164.5q0 21.5 15 37.5l600 599q-33 101 6 201.5t135 154.5q164 92 306 -9l-259 -138l145 -232l251 126q13 -175 -151 -267q-123 -70 -253 -23l-596 -596q-15 -16 -36.5 -16t-36.5 16l-111 110q-15 15 -15 36.5z" />
<glyph unicode="&#xe137;" horiz-adv-x="1220" d="M0 196v100q0 41 29.5 70.5t70.5 29.5h1000q41 0 70.5 -29.5t29.5 -70.5v-100q0 -41 -29.5 -70.5t-70.5 -29.5h-1000q-41 0 -70.5 29.5t-29.5 70.5zM0 596v100q0 41 29.5 70.5t70.5 29.5h1000q41 0 70.5 -29.5t29.5 -70.5v-100q0 -41 -29.5 -70.5t-70.5 -29.5h-1000 q-41 0 -70.5 29.5t-29.5 70.5zM0 996v100q0 41 29.5 70.5t70.5 29.5h1000q41 0 70.5 -29.5t29.5 -70.5v-100q0 -41 -29.5 -70.5t-70.5 -29.5h-1000q-41 0 -70.5 29.5t-29.5 70.5zM600 596h500v100h-500v-100zM800 196h300v100h-300v-100zM900 996h200v100h-200v-100z" />
<glyph unicode="&#xe138;" d="M100 1100v100h1000v-100h-1000zM150 1000h900l-350 -500v-300l-200 -200v500z" />
<glyph unicode="&#xe139;" d="M0 200v200h1200v-200q0 -41 -29.5 -70.5t-70.5 -29.5h-1000q-41 0 -70.5 29.5t-29.5 70.5zM0 500v400q0 41 29.5 70.5t70.5 29.5h300v100q0 41 29.5 70.5t70.5 29.5h200q41 0 70.5 -29.5t29.5 -70.5v-100h300q41 0 70.5 -29.5t29.5 -70.5v-400h-500v100h-200v-100h-500z M500 1000h200v100h-200v-100z" />
<glyph unicode="&#xe140;" d="M0 0v400l129 -129l200 200l142 -142l-200 -200l129 -129h-400zM0 800l129 129l200 -200l142 142l-200 200l129 129h-400v-400zM729 329l142 142l200 -200l129 129v-400h-400l129 129zM729 871l200 200l-129 129h400v-400l-129 129l-200 -200z" />
<glyph unicode="&#xe141;" d="M0 596q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM182 596q0 -172 121.5 -293t292.5 -121t292.5 121t121.5 293q0 171 -121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM291 655 q0 23 15.5 38.5t38.5 15.5t39 -16t16 -38q0 -23 -16 -39t-39 -16q-22 0 -38 16t-16 39zM400 850q0 22 16 38.5t39 16.5q22 0 38 -16t16 -39t-16 -39t-38 -16q-23 0 -39 16.5t-16 38.5zM513 609q0 32 21 56.5t52 29.5l122 126l1 1q-9 14 -9 28q0 22 16 38.5t39 16.5 q22 0 38 -16t16 -39t-16 -39t-38 -16q-16 0 -29 10l-55 -145q17 -22 17 -51q0 -36 -25.5 -61.5t-61.5 -25.5q-37 0 -62.5 25.5t-25.5 61.5zM800 655q0 22 16 38t39 16t38.5 -15.5t15.5 -38.5t-16 -39t-38 -16q-23 0 -39 16t-16 39z" />
<glyph unicode="&#xe142;" d="M-40 375q-13 -95 35 -173q35 -57 94 -89t129 -32q63 0 119 28q33 16 65 40.5t52.5 45.5t59.5 64q40 44 57 61l394 394q35 35 47 84t-3 96q-27 87 -117 104q-20 2 -29 2q-46 0 -79.5 -17t-67.5 -51l-388 -396l-7 -7l69 -67l377 373q20 22 39 38q23 23 50 23q38 0 53 -36 q16 -39 -20 -75l-547 -547q-52 -52 -125 -52q-55 0 -100 33t-54 96q-5 35 2.5 66t31.5 63t42 50t56 54q24 21 44 41l348 348q52 52 82.5 79.5t84 54t107.5 26.5q25 0 48 -4q95 -17 154 -94.5t51 -175.5q-7 -101 -98 -192l-252 -249l-253 -256l7 -7l69 -60l517 511 q67 67 95 157t11 183q-16 87 -67 154t-130 103q-69 33 -152 33q-107 0 -197 -55q-40 -24 -111 -95l-512 -512q-68 -68 -81 -163z" />
<glyph unicode="&#xe143;" d="M79 784q0 131 99 229.5t230 98.5q144 0 242 -129q103 129 245 129q130 0 227 -98.5t97 -229.5q0 -46 -17.5 -91t-61 -99t-77 -89.5t-104.5 -105.5q-197 -191 -293 -322l-17 -23l-16 23q-43 58 -100 122.5t-92 99.5t-101 100l-84.5 84.5t-68 74t-60 78t-33.5 70.5t-15 78z M250 784q0 -27 30.5 -70t61.5 -75.5t95 -94.5l22 -22q93 -90 190 -201q82 92 195 203l12 12q64 62 97.5 97t64.5 79t31 72q0 71 -48 119.5t-106 48.5q-73 0 -131 -83l-118 -171l-114 174q-51 80 -124 80q-59 0 -108.5 -49.5t-49.5 -118.5z" />
<glyph unicode="&#xe144;" d="M57 353q0 -94 66 -160l141 -141q66 -66 159 -66q95 0 159 66l283 283q66 66 66 159t-66 159l-141 141q-12 12 -19 17l-105 -105l212 -212l-389 -389l-247 248l95 95l-18 18q-46 45 -75 101l-55 -55q-66 -66 -66 -159zM269 706q0 -93 66 -159l141 -141l19 -17l105 105 l-212 212l389 389l247 -247l-95 -96l18 -18q46 -46 77 -99l29 29q35 35 62.5 88t27.5 96q0 93 -66 159l-141 141q-66 66 -159 66q-95 0 -159 -66l-283 -283q-66 -64 -66 -159z" />
<glyph unicode="&#xe145;" d="M200 100v953q0 21 30 46t81 48t129 38t163 15t162 -15t127 -38t79 -48t29 -46v-953q0 -41 -29.5 -70.5t-70.5 -29.5h-600q-41 0 -70.5 29.5t-29.5 70.5zM300 300h600v700h-600v-700zM496 150q0 -43 30.5 -73.5t73.5 -30.5t73.5 30.5t30.5 73.5t-30.5 73.5t-73.5 30.5 t-73.5 -30.5t-30.5 -73.5z" />
<glyph unicode="&#xe146;" d="M0 0l303 380l207 208l-210 212h300l267 279l-35 36q-15 14 -15 35t15 35q14 15 35 15t35 -15l283 -282q15 -15 15 -36t-15 -35q-14 -15 -35 -15t-35 15l-36 35l-279 -267v-300l-212 210l-208 -207z" />
<glyph unicode="&#xe148;" d="M295 433h139q5 -77 48.5 -126.5t117.5 -64.5v335l-27 7q-46 14 -79 26.5t-72 36t-62.5 52t-40 72.5t-16.5 99q0 92 44 159.5t109 101t144 40.5v78h100v-79q38 -4 72.5 -13.5t75.5 -31.5t71 -53.5t51.5 -84t24.5 -118.5h-159q-8 72 -35 109.5t-101 50.5v-307l64 -14 q34 -7 64 -16.5t70 -31.5t67.5 -52t47.5 -80.5t20 -112.5q0 -139 -89 -224t-244 -96v-77h-100v78q-152 17 -237 104q-40 40 -52.5 93.5t-15.5 139.5zM466 889q0 -29 8 -51t16.5 -34t29.5 -22.5t31 -13.5t38 -10q7 -2 11 -3v274q-61 -8 -97.5 -37.5t-36.5 -102.5zM700 237 q170 18 170 151q0 64 -44 99.5t-126 60.5v-311z" />
<glyph unicode="&#xe149;" d="M100 600v100h166q-24 49 -44 104q-10 26 -14.5 55.5t-3 72.5t25 90t68.5 87q97 88 263 88q129 0 230 -89t101 -208h-153q0 52 -34 89.5t-74 51.5t-76 14q-37 0 -79 -14.5t-62 -35.5q-41 -44 -41 -101q0 -11 2.5 -24.5t5.5 -24t9.5 -26.5t10.5 -25t14 -27.5t14 -25.5 t15.5 -27t13.5 -24h242v-100h-197q8 -50 -2.5 -115t-31.5 -94q-41 -59 -99 -113q35 11 84 18t70 7q32 1 102 -16t104 -17q76 0 136 30l50 -147q-41 -25 -80.5 -36.5t-59 -13t-61.5 -1.5q-23 0 -128 33t-155 29q-39 -4 -82 -17t-66 -25l-24 -11l-55 145l16.5 11t15.5 10 t13.5 9.5t14.5 12t14.5 14t17.5 18.5q48 55 54 126.5t-30 142.5h-221z" />
<glyph unicode="&#xe150;" d="M2 300l298 -300l298 300h-198v900h-200v-900h-198zM602 900l298 300l298 -300h-198v-900h-200v900h-198z" />
<glyph unicode="&#xe151;" d="M2 300h198v900h200v-900h198l-298 -300zM700 0v200h100v-100h200v-100h-300zM700 400v100h300v-200h-99v-100h-100v100h99v100h-200zM700 700v500h300v-500h-100v100h-100v-100h-100zM801 900h100v200h-100v-200z" />
<glyph unicode="&#xe152;" d="M2 300h198v900h200v-900h198l-298 -300zM700 0v500h300v-500h-100v100h-100v-100h-100zM700 700v200h100v-100h200v-100h-300zM700 1100v100h300v-200h-99v-100h-100v100h99v100h-200zM801 200h100v200h-100v-200z" />
<glyph unicode="&#xe153;" d="M2 300l298 -300l298 300h-198v900h-200v-900h-198zM800 100v400h300v-500h-100v100h-200zM800 1100v100h200v-500h-100v400h-100zM901 200h100v200h-100v-200z" />
<glyph unicode="&#xe154;" d="M2 300l298 -300l298 300h-198v900h-200v-900h-198zM800 400v100h200v-500h-100v400h-100zM800 800v400h300v-500h-100v100h-200zM901 900h100v200h-100v-200z" />
<glyph unicode="&#xe155;" d="M2 300l298 -300l298 300h-198v900h-200v-900h-198zM700 100v200h500v-200h-500zM700 400v200h400v-200h-400zM700 700v200h300v-200h-300zM700 1000v200h200v-200h-200z" />
<glyph unicode="&#xe156;" d="M2 300l298 -300l298 300h-198v900h-200v-900h-198zM700 100v200h200v-200h-200zM700 400v200h300v-200h-300zM700 700v200h400v-200h-400zM700 1000v200h500v-200h-500z" />
<glyph unicode="&#xe157;" d="M0 400v300q0 165 117.5 282.5t282.5 117.5h300q162 0 281 -118.5t119 -281.5v-300q0 -165 -118.5 -282.5t-281.5 -117.5h-300q-165 0 -282.5 117.5t-117.5 282.5zM200 300q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5v500q0 41 -29.5 70.5t-70.5 29.5 h-500q-41 0 -70.5 -29.5t-29.5 -70.5v-500z" />
<glyph unicode="&#xe158;" d="M0 400v300q0 163 119 281.5t281 118.5h300q165 0 282.5 -117.5t117.5 -282.5v-300q0 -165 -117.5 -282.5t-282.5 -117.5h-300q-163 0 -281.5 117.5t-118.5 282.5zM200 300q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5v500q0 41 -29.5 70.5t-70.5 29.5 h-500q-41 0 -70.5 -29.5t-29.5 -70.5v-500zM400 300l333 250l-333 250v-500z" />
<glyph unicode="&#xe159;" d="M0 400v300q0 163 117.5 281.5t282.5 118.5h300q163 0 281.5 -119t118.5 -281v-300q0 -165 -117.5 -282.5t-282.5 -117.5h-300q-165 0 -282.5 117.5t-117.5 282.5zM200 300q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5v500q0 41 -29.5 70.5t-70.5 29.5 h-500q-41 0 -70.5 -29.5t-29.5 -70.5v-500zM300 700l250 -333l250 333h-500z" />
<glyph unicode="&#xe160;" d="M0 400v300q0 165 117.5 282.5t282.5 117.5h300q165 0 282.5 -117.5t117.5 -282.5v-300q0 -162 -118.5 -281t-281.5 -119h-300q-165 0 -282.5 118.5t-117.5 281.5zM200 300q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5v500q0 41 -29.5 70.5t-70.5 29.5 h-500q-41 0 -70.5 -29.5t-29.5 -70.5v-500zM300 400h500l-250 333z" />
<glyph unicode="&#xe161;" d="M0 400v300h300v200l400 -350l-400 -350v200h-300zM500 0v200h500q41 0 70.5 29.5t29.5 70.5v500q0 41 -29.5 70.5t-70.5 29.5h-500v200h400q165 0 282.5 -117.5t117.5 -282.5v-300q0 -165 -117.5 -282.5t-282.5 -117.5h-400z" />
<glyph unicode="&#xe162;" d="M216 519q10 -19 32 -19h302q-155 -438 -160 -458q-5 -21 4 -32l9 -8l9 -1q13 0 26 16l538 630q15 19 6 36q-8 18 -32 16h-300q1 4 78 219.5t79 227.5q2 17 -6 27l-8 8h-9q-16 0 -25 -15q-4 -5 -98.5 -111.5t-228 -257t-209.5 -238.5q-17 -19 -7 -40z" />
<glyph unicode="&#xe163;" d="M0 400q0 -165 117.5 -282.5t282.5 -117.5h300q47 0 100 15v185h-500q-41 0 -70.5 29.5t-29.5 70.5v500q0 41 29.5 70.5t70.5 29.5h500v185q-14 4 -114 7.5t-193 5.5l-93 2q-165 0 -282.5 -117.5t-117.5 -282.5v-300zM600 400v300h300v200l400 -350l-400 -350v200h-300z " />
<glyph unicode="&#xe164;" d="M0 400q0 -165 117.5 -282.5t282.5 -117.5h300q163 0 281.5 117.5t118.5 282.5v98l-78 73l-122 -123v-148q0 -41 -29.5 -70.5t-70.5 -29.5h-500q-41 0 -70.5 29.5t-29.5 70.5v500q0 41 29.5 70.5t70.5 29.5h156l118 122l-74 78h-100q-165 0 -282.5 -117.5t-117.5 -282.5 v-300zM496 709l353 342l-149 149h500v-500l-149 149l-342 -353z" />
<glyph unicode="&#xe165;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM406 600 q0 80 57 137t137 57t137 -57t57 -137t-57 -137t-137 -57t-137 57t-57 137z" />
<glyph unicode="&#xe166;" d="M0 0v275q0 11 7 18t18 7h1048q11 0 19 -7.5t8 -17.5v-275h-1100zM100 800l445 -500l450 500h-295v400h-300v-400h-300zM900 150h100v50h-100v-50z" />
<glyph unicode="&#xe167;" d="M0 0v275q0 11 7 18t18 7h1048q11 0 19 -7.5t8 -17.5v-275h-1100zM100 700h300v-300h300v300h295l-445 500zM900 150h100v50h-100v-50z" />
<glyph unicode="&#xe168;" d="M0 0v275q0 11 7 18t18 7h1048q11 0 19 -7.5t8 -17.5v-275h-1100zM100 705l305 -305l596 596l-154 155l-442 -442l-150 151zM900 150h100v50h-100v-50z" />
<glyph unicode="&#xe169;" d="M0 0v275q0 11 7 18t18 7h1048q11 0 19 -7.5t8 -17.5v-275h-1100zM100 988l97 -98l212 213l-97 97zM200 401h700v699l-250 -239l-149 149l-212 -212l149 -149zM900 150h100v50h-100v-50z" />
<glyph unicode="&#xe170;" d="M0 0v275q0 11 7 18t18 7h1048q11 0 19 -7.5t8 -17.5v-275h-1100zM200 612l212 -212l98 97l-213 212zM300 1200l239 -250l-149 -149l212 -212l149 148l248 -237v700h-699zM900 150h100v50h-100v-50z" />
<glyph unicode="&#xe171;" d="M23 415l1177 784v-1079l-475 272l-310 -393v416h-392zM494 210l672 938l-672 -712v-226z" />
<glyph unicode="&#xe172;" d="M0 150v1000q0 20 14.5 35t35.5 15h250v-300h500v300h100l200 -200v-850q0 -21 -15 -35.5t-35 -14.5h-150v400h-700v-400h-150q-21 0 -35.5 14.5t-14.5 35.5zM600 1000h100v200h-100v-200z" />
<glyph unicode="&#xe173;" d="M0 150v1000q0 20 14.5 35t35.5 15h250v-300h500v300h100l200 -200v-218l-276 -275l-120 120l-126 -127h-378v-400h-150q-21 0 -35.5 14.5t-14.5 35.5zM581 306l123 123l120 -120l353 352l123 -123l-475 -476zM600 1000h100v200h-100v-200z" />
<glyph unicode="&#xe174;" d="M0 150v1000q0 20 14.5 35t35.5 15h250v-300h500v300h100l200 -200v-269l-103 -103l-170 170l-298 -298h-329v-400h-150q-21 0 -35.5 14.5t-14.5 35.5zM600 1000h100v200h-100v-200zM700 133l170 170l-170 170l127 127l170 -170l170 170l127 -128l-170 -169l170 -170 l-127 -127l-170 170l-170 -170z" />
<glyph unicode="&#xe175;" d="M0 150v1000q0 20 14.5 35t35.5 15h250v-300h500v300h100l200 -200v-300h-400v-200h-500v-400h-150q-21 0 -35.5 14.5t-14.5 35.5zM600 300l300 -300l300 300h-200v300h-200v-300h-200zM600 1000v200h100v-200h-100z" />
<glyph unicode="&#xe176;" d="M0 150v1000q0 20 14.5 35t35.5 15h250v-300h500v300h100l200 -200v-402l-200 200l-298 -298h-402v-400h-150q-21 0 -35.5 14.5t-14.5 35.5zM600 300h200v-300h200v300h200l-300 300zM600 1000v200h100v-200h-100z" />
<glyph unicode="&#xe177;" d="M0 250q0 -21 14.5 -35.5t35.5 -14.5h1100q21 0 35.5 14.5t14.5 35.5v550h-1200v-550zM0 900h1200v150q0 21 -14.5 35.5t-35.5 14.5h-1100q-21 0 -35.5 -14.5t-14.5 -35.5v-150zM100 300v200h400v-200h-400z" />
<glyph unicode="&#xe178;" d="M0 400l300 298v-198h400v-200h-400v-198zM100 800v200h100v-200h-100zM300 800v200h100v-200h-100zM500 800v200h400v198l300 -298l-300 -298v198h-400zM800 300v200h100v-200h-100zM1000 300h100v200h-100v-200z" />
<glyph unicode="&#xe179;" d="M100 700v400l50 100l50 -100v-300h100v300l50 100l50 -100v-300h100v300l50 100l50 -100v-400l-100 -203v-447q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5v447zM800 597q0 -29 10.5 -55.5t25 -43t29 -28.5t25.5 -18l10 -5v-397q0 -21 14.5 -35.5 t35.5 -14.5h200q21 0 35.5 14.5t14.5 35.5v1106q0 31 -18 40.5t-44 -7.5l-276 -117q-25 -16 -43.5 -50.5t-18.5 -65.5v-359z" />
<glyph unicode="&#xe180;" d="M100 0h400v56q-75 0 -87.5 6t-12.5 44v394h500v-394q0 -38 -12.5 -44t-87.5 -6v-56h400v56q-4 0 -11 0.5t-24 3t-30 7t-24 15t-11 24.5v888q0 22 25 34.5t50 13.5l25 2v56h-400v-56q75 0 87.5 -6t12.5 -44v-394h-500v394q0 38 12.5 44t87.5 6v56h-400v-56q4 0 11 -0.5 t24 -3t30 -7t24 -15t11 -24.5v-888q0 -22 -25 -34.5t-50 -13.5l-25 -2v-56z" />
<glyph unicode="&#xe181;" d="M0 300q0 -41 29.5 -70.5t70.5 -29.5h300q41 0 70.5 29.5t29.5 70.5v500q0 41 -29.5 70.5t-70.5 29.5h-300q-41 0 -70.5 -29.5t-29.5 -70.5v-500zM100 100h400l200 200h105l295 98v-298h-425l-100 -100h-375zM100 300v200h300v-200h-300zM100 600v200h300v-200h-300z M100 1000h400l200 -200v-98l295 98h105v200h-425l-100 100h-375zM700 402v163l400 133v-163z" />
<glyph unicode="&#xe182;" d="M16.5 974.5q0.5 -21.5 16 -90t46.5 -140t104 -177.5t175 -208q103 -103 207.5 -176t180 -103.5t137 -47t92.5 -16.5l31 1l163 162q16 17 13 40.5t-22 37.5l-192 136q-19 14 -45 12t-42 -19l-119 -118q-143 103 -267 227q-126 126 -227 268l118 118q17 17 20 41.5 t-11 44.5l-139 194q-14 19 -36.5 22t-40.5 -14l-162 -162q-1 -11 -0.5 -32.5z" />
<glyph unicode="&#xe183;" d="M0 50v212q0 20 10.5 45.5t24.5 39.5l365 303v50q0 4 1 10.5t12 22.5t30 28.5t60 23t97 10.5t97 -10t60 -23.5t30 -27.5t12 -24l1 -10v-50l365 -303q14 -14 24.5 -39.5t10.5 -45.5v-212q0 -21 -15 -35.5t-35 -14.5h-1100q-21 0 -35.5 14.5t-14.5 35.5zM0 712 q0 -21 14.5 -33.5t34.5 -8.5l202 33q20 4 34.5 21t14.5 38v146q141 24 300 24t300 -24v-146q0 -21 14.5 -38t34.5 -21l202 -33q20 -4 34.5 8.5t14.5 33.5v200q-6 8 -19 20.5t-63 45t-112 57t-171 45t-235 20.5q-92 0 -175 -10.5t-141.5 -27t-108.5 -36.5t-81.5 -40 t-53.5 -36.5t-31 -27.5l-9 -10v-200z" />
<glyph unicode="&#xe184;" d="M100 0v100h1100v-100h-1100zM175 200h950l-125 150v250l100 100v400h-100v-200h-100v200h-200v-200h-100v200h-200v-200h-100v200h-100v-400l100 -100v-250z" />
<glyph unicode="&#xe185;" d="M100 0h300v400q0 41 -29.5 70.5t-70.5 29.5h-100q-41 0 -70.5 -29.5t-29.5 -70.5v-400zM500 0v1000q0 41 29.5 70.5t70.5 29.5h100q41 0 70.5 -29.5t29.5 -70.5v-1000h-300zM900 0v700q0 41 29.5 70.5t70.5 29.5h100q41 0 70.5 -29.5t29.5 -70.5v-700h-300z" />
<glyph unicode="&#xe186;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 300h300v300h-200v100h200v100h-300v-300h200v-100h-200v-100zM600 300h200v100h100v300h-100v100h-200v-500 zM700 400v300h100v-300h-100z" />
<glyph unicode="&#xe187;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 300h100v200h100v-200h100v500h-100v-200h-100v200h-100v-500zM600 300h200v100h100v300h-100v100h-200v-500 zM700 400v300h100v-300h-100z" />
<glyph unicode="&#xe188;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 300h300v100h-200v300h200v100h-300v-500zM600 300h300v100h-200v300h200v100h-300v-500z" />
<glyph unicode="&#xe189;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 550l300 -150v300zM600 400l300 150l-300 150v-300z" />
<glyph unicode="&#xe190;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 300v500h700v-500h-700zM300 400h130q41 0 68 42t27 107t-28.5 108t-66.5 43h-130v-300zM575 549 q0 -65 27 -107t68 -42h130v300h-130q-38 0 -66.5 -43t-28.5 -108z" />
<glyph unicode="&#xe191;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 300h300v300h-200v100h200v100h-300v-300h200v-100h-200v-100zM601 300h100v100h-100v-100zM700 700h100 v-400h100v500h-200v-100z" />
<glyph unicode="&#xe192;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 300h300v400h-200v100h-100v-500zM301 400v200h100v-200h-100zM601 300h100v100h-100v-100zM700 700h100 v-400h100v500h-200v-100z" />
<glyph unicode="&#xe193;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 700v100h300v-300h-99v-100h-100v100h99v200h-200zM201 300v100h100v-100h-100zM601 300v100h100v-100h-100z M700 700v100h200v-500h-100v400h-100z" />
<glyph unicode="&#xe194;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM400 500v200 l100 100h300v-100h-300v-200h300v-100h-300z" />
<glyph unicode="&#xe195;" d="M0 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM182 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM400 400v400h300 l100 -100v-100h-100v100h-200v-100h200v-100h-200v-100h-100zM700 400v100h100v-100h-100z" />
<glyph unicode="&#xe197;" d="M-14 494q0 -80 56.5 -137t135.5 -57h222v300h400v-300h128q120 0 205 86t85 208q0 120 -85 206.5t-205 86.5q-46 0 -90 -14q-44 97 -134.5 156.5t-200.5 59.5q-152 0 -260 -107.5t-108 -260.5q0 -25 2 -37q-66 -14 -108.5 -67.5t-42.5 -122.5zM300 200h200v300h200v-300 h200l-300 -300z" />
<glyph unicode="&#xe198;" d="M-14 494q0 -80 56.5 -137t135.5 -57h8l414 414l403 -403q94 26 154.5 104t60.5 178q0 121 -85 207.5t-205 86.5q-46 0 -90 -14q-44 97 -134.5 156.5t-200.5 59.5q-152 0 -260 -107.5t-108 -260.5q0 -25 2 -37q-66 -14 -108.5 -67.5t-42.5 -122.5zM300 200l300 300 l300 -300h-200v-300h-200v300h-200z" />
<glyph unicode="&#xe199;" d="M100 200h400v-155l-75 -45h350l-75 45v155h400l-270 300h170l-270 300h170l-300 333l-300 -333h170l-270 -300h170z" />
<glyph unicode="&#xe200;" d="M121 700q0 -53 28.5 -97t75.5 -65q-4 -16 -4 -38q0 -74 52.5 -126.5t126.5 -52.5q56 0 100 30v-306l-75 -45h350l-75 45v306q46 -30 100 -30q74 0 126.5 52.5t52.5 126.5q0 24 -9 55q50 32 79.5 83t29.5 112q0 90 -61.5 155.5t-150.5 71.5q-26 89 -99.5 145.5 t-167.5 56.5q-116 0 -197.5 -81.5t-81.5 -197.5q0 -4 1 -12t1 -11q-14 2 -23 2q-74 0 -126.5 -52.5t-52.5 -126.5z" />
</font>
</defs></svg> `,"example/resume.json":`{
  "bio": {
      "firstName": "Thomas", 
      "lastName": "Davis",
      "summary": "Hey guys, I\u2019m a full stack web developer who loves working with open source technology. These days I do politics with EFF and Taskforce.is, I promote independent artist at Earbits, speed up the web with cdnjs.com and building Skynet with DroneHire.org.",
      "email": {
          "personal": "thomasalwyndavis@gmail.com"
      },
      "location": {
          "city": "Brisbane",
          "countryCode": "AU"
      },
      "profiles": {
          "twitter": "neutralthoughts",
          "github": "thomasdavis"
      }
    },
  "work": [{
      "startDate":   "2011-06-08",
      "endDate": "2014-06-09",
      "position": "Co-Founder",
      "company": "Cdnjs",
      "website": "http://www.cdnjs.com",
      "summary": "Following Google\u2019s CDN for jQuery, we decided to start a CDN for the less popular Javascript frameworks. The CDN is community moderated and open source on GitHub. We secured a partnership with Cloudflare.com who now supports the infrastructure.",
      "highlights": ["Hundreds of thousands of sites use the cdn in production", "Larger market share than Yahoo's and Microsoft's content distribution network", "We serve tens of billions request a month", "Contains over 800 popular Javascript libraries", "Hundreds of thousands developers visit the site per year"]
  }, {
      "startDate":   "2014-06-08",
      "endDate": "2014-06-09",
      "position": "CTO",
      "company": "Earbits",
      "website": "http://www.earbits.com",
      "summary": "Started off as a front end developer but took on the role of CTO in early 2013. Managed a large Rails application and did a big server and database(MongoDB) migration from Heroku to Amazon.",
      "highlights": ["Managed a small team of developers and designers"]
  }, {
      "startDate":   "2014-01-01",
      "endDate": "2014-06-01",
      "position": "Developer",
      "company": "Electronic Frontier Foundation",
      "website": "http://www.eff.org",
      "summary": "Hired to take EFF's campaigning to the next level by building an action centre in Ruby on Rails. The action centre is built around some large open source tools that lower the barrier to entry when contacting congress.",
      "highlights": ["Developed new tools for contacting congress"]
  }, {
      "startDate":   "2014-01-01",
      "endDate": "2014-06-01",
      "position": "Developer",
      "company": "Taskforce.is",
      "website": "http://www.taskforce.is",
      "summary": "Worked on many politically charged campaigns against mass surveillance. Our latest project was \\"TheDayWeFightBack\\" and I worked on all areas of it. The campaign resulted in 37,000,000 banner views, 100,000 phone calls, ~500,000 emails and ~250,000 signatures. I work mostly in the frontend and also running the Heroku servers which are cached by Cloudfront.",
      "highlights": []
  }, {
      "startDate":   "2013-01-01",
      "endDate": "2014-01-01",
      "position": "Co-Founder",
      "company": "Drone Hire",
      "website": "http://www.dronehire.org",
      "summary": "An international directory of civilian drone / UAV operators for hire. Services include aerial photography, aerial video, mapping, surveying, precision agriculture, real estate photography, remote inspections and infrared imaging. Our plan is to be the place to go when looking for UAV/Drone services. The website is built in Backbone.js and API is built with Node.js and Postgres. The site and blog combined have managed to receive over 200,000 visitors this year.",
      "highlights": []
  }, {
      "startDate":   "2011-01-01",
      "endDate": "2014-06-01",
      "position": "Founder",
      "company": "BackboneTutorials.com",
      "website": "http://backbonetutorials.com",
      "summary": "I write tutorials and blog post regarding the popular Javascript framework Backbone.js. The tutorials cover a range of topics regarding front end development aimed at beginners, experts and anyone in between.",
      "highlights": ["Over two million unique visitors a year", "23,000+ ebook downloads", "150,000 Youtube views", "Spawned another project called backboneboilerplate.com"]
  }, {
      "startDate":   "2011-01-01",
      "endDate": "2012-06-01",
      "position": "Front-end Developer",
      "company": "Ephox",
      "website": "http://ephox.com",
      "summary": "Ephox is a worldwide company who is heavily involved with the development of TinyMce and enterprise editors. My primary role included building front-end widgets and applications. Worked on a major product using Backbone.js as a base. Heavily involved in UI/UX design and wire-framing. Also spend a lot of time designing API specifications and documentation."
  }],
  "education": [{
      "institution": "The University of Queensland",
      "studyType": "Bachelors",
      "area": "Software Engineering",
      "startDate": "2008-02",
      "endDate": "",
      "courses": ["CSSE3002", "..."]
  }],
  "awards": [{
      "name": "Good at study",
      "date": "2009-10-01",
      "awarder": "The University of Queensland"
  }],
  "publications": [{
      "name": "Some study",
      "publisher": "The Journal of Modern Medicine"
  }],
  "profiles": {
      "github": "thomasdavis",
      "twitter": "neutralthoughts"
  },
  "skills": [{
    "name": "Frontend",
    "keywords": ["html", "css", "javascript", "backbone"]
  },
  {
    "name": "Backend",
    "keywords": ["Node", "Ruby", "Python"]
  }],
  "hobbies": [],
  "references": [{
      "name": "Greg Davis",
      "reference": "On Thomas Davis ... Hire this guy. Do not be fooled. Incredibly capable and fast. Plays well with others. Unbelievable at front-end work end programming but that is just the start. Visionary. Hire him before I do."
  }]
}
`,"example/theme.css":`
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
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
  background: transparent;
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
  margin: .67em 0;
  font-size: 2em;
}
mark {
  color: #000;
  background: #ff0;
}
small {
  font-size: 80%;
}
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sup {
  top: -.5em;
}
sub {
  bottom: -.25em;
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
  height: 0;
  -moz-box-sizing: content-box;
       box-sizing: content-box;
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
  margin: 0;
  font: inherit;
  color: inherit;
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
  padding: 0;
  border: 0;
}
input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
  -webkit-appearance: textfield;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset {
  padding: .35em .625em .75em;
  margin: 0 2px;
  border: 1px solid #c0c0c0;
}
legend {
  padding: 0;
  border: 0;
}
textarea {
  overflow: auto;
}
optgroup {
  font-weight: bold;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
td,
th {
  padding: 0;
}
@media print {
  * {
    color: #000 !important;
    text-shadow: none !important;
    box-shadow: none !important;
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
  a[href^="javascript:"]:after,
  a[href^="#"]:after {
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
  .table td,
  .table th {
    background-color: #fff !important;
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
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
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
  font-size: 62.5%;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background-color: #fff;
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
  color: #428bca;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #2a6496;
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
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.img-circle {
  border-radius: 50%;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
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
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
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
  color: #999;
}
h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 20px;
  margin-bottom: 10px;
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
  margin-top: 10px;
  margin-bottom: 10px;
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
  font-size: 36px;
}
h2,
.h2 {
  font-size: 30px;
}
h3,
.h3 {
  font-size: 24px;
}
h4,
.h4 {
  font-size: 18px;
}
h5,
.h5 {
  font-size: 14px;
}
h6,
.h6 {
  font-size: 12px;
}
p {
  margin: 0 0 10px;
}
.lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 200;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .lead {
    font-size: 21px;
  }
}
small,
.small {
  font-size: 85%;
}
cite {
  font-style: normal;
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
.text-muted {
  color: #999;
}
.text-primary {
  color: #428bca;
}
a.text-primary:hover {
  color: #3071a9;
}
.text-success {
  color: #3c763d;
}
a.text-success:hover {
  color: #2b542c;
}
.text-info {
  color: #31708f;
}
a.text-info:hover {
  color: #245269;
}
.text-warning {
  color: #8a6d3b;
}
a.text-warning:hover {
  color: #66512c;
}
.text-danger {
  color: #a94442;
}
a.text-danger:hover {
  color: #843534;
}
.bg-primary {
  color: #fff;
  background-color: #428bca;
}
a.bg-primary:hover {
  background-color: #3071a9;
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
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
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
  margin-left: -5px;
  list-style: none;
}
.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
dl {
  margin-top: 0;
  margin-bottom: 20px;
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
    overflow: hidden;
    clear: left;
    text-align: right;
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
  border-bottom: 1px dotted #999;
}
.initialism {
  font-size: 90%;
  text-transform: uppercase;
}
blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
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
  color: #999;
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
  text-align: right;
  border-right: 5px solid #eee;
  border-left: 0;
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
blockquote:before,
blockquote:after {
  content: "";
}
address {
  margin-bottom: 20px;
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
  white-space: nowrap;
  background-color: #f9f2f4;
  border-radius: 4px;
}
kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #fff;
  background-color: #333;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
}
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
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
  right: 0;
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
  left: 0;
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
  margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
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
    right: 0;
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
    left: 0;
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
    margin-left: 0;
  }
}
table {
  max-width: 100%;
  background-color: transparent;
}
th {
  text-align: left;
}
.table {
  width: 100%;
  margin-bottom: 20px;
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
  border-top: 1px solid #ddd;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
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
  border-top: 2px solid #ddd;
}
.table .table {
  background-color: #fff;
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
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}
.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #f9f9f9;
}
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
  background-color: #f5f5f5;
}
table col[class*="col-"] {
  position: static;
  display: table-column;
  float: none;
}
table td[class*="col-"],
table th[class*="col-"] {
  position: static;
  display: table-cell;
  float: none;
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
.table-hover > tbody > tr.danger:hover > th {
  background-color: #ebcccc;
}
@media (max-width: 767px) {
  .table-responsive {
    width: 100%;
    margin-bottom: 15px;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
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
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: inherit;
  color: #333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}
label {
  display: inline-block;
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
  /* IE8-9 */
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
  padding-top: 7px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
}
.form-control::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  cursor: not-allowed;
  background-color: #eee;
  opacity: 1;
}
textarea.form-control {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: none;
}
input[type="date"] {
  line-height: 34px;
}
.form-group {
  margin-bottom: 15px;
}
.radio,
.checkbox {
  display: block;
  min-height: 20px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.radio label,
.checkbox label {
  display: inline;
  font-weight: normal;
  cursor: pointer;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  float: left;
  margin-left: -20px;
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
  font-weight: normal;
  vertical-align: middle;
  cursor: pointer;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
input[type="radio"][disabled],
input[type="checkbox"][disabled],
.radio[disabled],
.radio-inline[disabled],
.checkbox[disabled],
.checkbox-inline[disabled],
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"],
fieldset[disabled] .radio,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}
.input-sm {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-sm {
  height: 30px;
  line-height: 30px;
}
textarea.input-sm,
select[multiple].input-sm {
  height: auto;
}
.input-lg {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
select.input-lg {
  height: 46px;
  line-height: 46px;
}
textarea.input-lg,
select[multiple].input-lg {
  height: auto;
}
.has-feedback {
  position: relative;
}
.has-feedback .form-control {
  padding-right: 42.5px;
}
.has-feedback .form-control-feedback {
  position: absolute;
  top: 25px;
  right: 0;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
}
.has-success .help-block,
.has-success .control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline {
  color: #3c763d;
}
.has-success .form-control {
  border-color: #3c763d;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-success .form-control:focus {
  border-color: #2b542c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
}
.has-success .input-group-addon {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #3c763d;
}
.has-success .form-control-feedback {
  color: #3c763d;
}
.has-warning .help-block,
.has-warning .control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline {
  color: #8a6d3b;
}
.has-warning .form-control {
  border-color: #8a6d3b;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-warning .form-control:focus {
  border-color: #66512c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
}
.has-warning .input-group-addon {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #8a6d3b;
}
.has-warning .form-control-feedback {
  color: #8a6d3b;
}
.has-error .help-block,
.has-error .control-label,
.has-error .radio,
.has-error .checkbox,
.has-error .radio-inline,
.has-error .checkbox-inline {
  color: #a94442;
}
.has-error .form-control {
  border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-error .form-control:focus {
  border-color: #843534;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
}
.has-error .input-group-addon {
  color: #a94442;
  background-color: #f2dede;
  border-color: #a94442;
}
.has-error .form-control-feedback {
  color: #a94442;
}
.form-control-static {
  margin-bottom: 0;
}
.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
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
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    float: none;
    margin-left: 0;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}
.form-horizontal .control-label,
.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  padding-top: 7px;
  margin-top: 0;
  margin-bottom: 0;
}
.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 27px;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
.form-horizontal .form-control-static {
  padding-top: 7px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    text-align: right;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
  top: 0;
  right: 15px;
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus {
  color: #333;
  text-decoration: none;
}
.btn:active,
.btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  pointer-events: none;
  cursor: not-allowed;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
          box-shadow: none;
  opacity: .65;
}
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.btn-default:hover,
.btn-default:focus,
.btn-default:active,
.btn-default.active,
.open .dropdown-toggle.btn-default {
  color: #333;
  background-color: #ebebeb;
  border-color: #adadad;
}
.btn-default:active,
.btn-default.active,
.open .dropdown-toggle.btn-default {
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
.btn-default.disabled:active,
.btn-default[disabled]:active,
fieldset[disabled] .btn-default:active,
.btn-default.disabled.active,
.btn-default[disabled].active,
fieldset[disabled] .btn-default.active {
  background-color: #fff;
  border-color: #ccc;
}
.btn-default .badge {
  color: #fff;
  background-color: #333;
}
.btn-primary {
  color: #fff;
  background-color: #428bca;
  border-color: #357ebd;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #3276b1;
  border-color: #285e8e;
}
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
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
.btn-primary.disabled:active,
.btn-primary[disabled]:active,
fieldset[disabled] .btn-primary:active,
.btn-primary.disabled.active,
.btn-primary[disabled].active,
fieldset[disabled] .btn-primary.active {
  background-color: #428bca;
  border-color: #357ebd;
}
.btn-primary .badge {
  color: #428bca;
  background-color: #fff;
}
.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
  color: #fff;
  background-color: #47a447;
  border-color: #398439;
}
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
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
.btn-success.disabled:active,
.btn-success[disabled]:active,
fieldset[disabled] .btn-success:active,
.btn-success.disabled.active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success.active {
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success .badge {
  color: #5cb85c;
  background-color: #fff;
}
.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info:hover,
.btn-info:focus,
.btn-info:active,
.btn-info.active,
.open .dropdown-toggle.btn-info {
  color: #fff;
  background-color: #39b3d7;
  border-color: #269abc;
}
.btn-info:active,
.btn-info.active,
.open .dropdown-toggle.btn-info {
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
.btn-info.disabled:active,
.btn-info[disabled]:active,
fieldset[disabled] .btn-info:active,
.btn-info.disabled.active,
.btn-info[disabled].active,
fieldset[disabled] .btn-info.active {
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info .badge {
  color: #5bc0de;
  background-color: #fff;
}
.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active,
.btn-warning.active,
.open .dropdown-toggle.btn-warning {
  color: #fff;
  background-color: #ed9c28;
  border-color: #d58512;
}
.btn-warning:active,
.btn-warning.active,
.open .dropdown-toggle.btn-warning {
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
.btn-warning.disabled:active,
.btn-warning[disabled]:active,
fieldset[disabled] .btn-warning:active,
.btn-warning.disabled.active,
.btn-warning[disabled].active,
fieldset[disabled] .btn-warning.active {
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}
.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger:hover,
.btn-danger:focus,
.btn-danger:active,
.btn-danger.active,
.open .dropdown-toggle.btn-danger {
  color: #fff;
  background-color: #d2322d;
  border-color: #ac2925;
}
.btn-danger:active,
.btn-danger.active,
.open .dropdown-toggle.btn-danger {
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
.btn-danger.disabled:active,
.btn-danger[disabled]:active,
fieldset[disabled] .btn-danger:active,
.btn-danger.disabled.active,
.btn-danger[disabled].active,
fieldset[disabled] .btn-danger.active {
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger .badge {
  color: #d9534f;
  background-color: #fff;
}
.btn-link {
  font-weight: normal;
  color: #428bca;
  cursor: pointer;
  border-radius: 0;
}
.btn-link,
.btn-link:active,
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
  color: #2a6496;
  text-decoration: underline;
  background-color: transparent;
}
.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:focus {
  color: #999;
  text-decoration: none;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-block {
  display: block;
  width: 100%;
  padding-right: 0;
  padding-left: 0;
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
  -webkit-transition: opacity .15s linear;
          transition: opacity .15s linear;
}
.fade.in {
  opacity: 1;
}
.collapse {
  display: none;
}
.collapse.in {
  display: block;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height .35s ease;
          transition: height .35s ease;
}
@font-face {
  font-family: 'Glyphicons Halflings';

  src: url('../fonts/glyphicons-halflings-regular.eot');
  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
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
.glyphicon-euro:before {
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
  font-size: 14px;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}
.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}
.dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  color: #262626;
  text-decoration: none;
  background-color: #f5f5f5;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  background-color: #428bca;
  outline: 0;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  color: #999;
}
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
}
.open > .dropdown-menu {
  display: block;
}
.open > a {
  outline: 0;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
}
.dropdown-menu-left {
  right: auto;
  left: 0;
}
.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #999;
}
.dropdown-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
}
.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  content: "";
  border-top: 0;
  border-bottom: 4px solid;
}
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 1px;
}
@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: 0;
    left: auto;
  }
  .navbar-right .dropdown-menu-left {
    right: auto;
    left: 0;
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
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus {
  outline: none;
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
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child > .btn:last-child,
.btn-group > .btn-group:first-child > .dropdown-toggle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn-group:last-child > .btn:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
  padding-right: 8px;
  padding-left: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-right: 12px;
  padding-left: 12px;
}
.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
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
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
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
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  display: table-cell;
  float: none;
  width: 1%;
}
.btn-group-justified > .btn-group .btn {
  width: 100%;
}
[data-toggle="buttons"] > .btn > input[type="radio"],
[data-toggle="buttons"] > .btn > input[type="checkbox"] {
  display: none;
}
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group[class*="col-"] {
  float: none;
  padding-right: 0;
  padding-left: 0;
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
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  line-height: 46px;
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
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
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
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #555;
  text-align: center;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}
.input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 18px;
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
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
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
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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
  padding-left: 0;
  margin-bottom: 0;
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
  background-color: #eee;
}
.nav > li.disabled > a {
  color: #999;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #999;
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eee;
  border-color: #428bca;
}
.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
.nav-tabs {
  border-bottom: 1px solid #ddd;
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
  border-color: #eee #eee #ddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li {
  float: none;
}
.nav-tabs.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
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
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #fff;
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
  color: #fff;
  background-color: #428bca;
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
  margin-bottom: 5px;
  text-align: center;
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
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:hover,
  .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
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
  max-height: 340px;
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
}
.navbar-collapse.in {
  overflow-y: auto;
}
@media (min-width: 768px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
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
    padding-right: 0;
    padding-left: 0;
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
  height: 50px;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
}
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
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
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.navbar-toggle:focus {
  outline: none;
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
  margin: 7.5px -15px;
}
.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}
@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }
  .navbar-nav .open .dropdown-menu > li > a,
  .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: 20px;
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
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .navbar-nav.navbar-right:last-child {
    margin-right: -15px;
  }
}
@media (min-width: 768px) {
  .navbar-left {
    float: left !important;
  }
  .navbar-right {
    float: right !important;
  }
}
.navbar-form {
  padding: 10px 15px;
  margin-top: 8px;
  margin-right: -15px;
  margin-bottom: 8px;
  margin-left: -15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
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
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio input[type="radio"],
  .navbar-form .checkbox input[type="checkbox"] {
    float: none;
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
}
@media (min-width: 768px) {
  .navbar-form {
    width: auto;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0;
    margin-left: 0;
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .navbar-form.navbar-right:last-child {
    margin-right: -15px;
  }
}
.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.navbar-btn {
  margin-top: 8px;
  margin-bottom: 8px;
}
.navbar-btn.btn-sm {
  margin-top: 10px;
  margin-bottom: 10px;
}
.navbar-btn.btn-xs {
  margin-top: 14px;
  margin-bottom: 14px;
}
.navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .navbar-text {
    float: left;
    margin-right: 15px;
    margin-left: 15px;
  }
  .navbar-text.navbar-right:last-child {
    margin-right: 0;
  }
}
.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
.navbar-default .navbar-brand {
  color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
.navbar-default .navbar-text {
  color: #777;
}
.navbar-default .navbar-nav > li > a {
  color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}
.navbar-default .navbar-toggle {
  border-color: #ddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}
.navbar-default .navbar-link {
  color: #777;
}
.navbar-default .navbar-link:hover {
  color: #333;
}
.navbar-inverse {
  background-color: #222;
  border-color: #080808;
}
.navbar-inverse .navbar-brand {
  color: #999;
}
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-text {
  color: #999;
}
.navbar-inverse .navbar-nav > li > a {
  color: #999;
}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #080808;
}
.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:hover,
.navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444;
  background-color: transparent;
}
.navbar-inverse .navbar-toggle {
  border-color: #333;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
  background-color: #333;
}
.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #fff;
}
.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #101010;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  color: #fff;
  background-color: #080808;
}
@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #999;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #fff;
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #fff;
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444;
    background-color: transparent;
  }
}
.navbar-inverse .navbar-link {
  color: #999;
}
.navbar-inverse .navbar-link:hover {
  color: #fff;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li {
  display: inline-block;
}
.breadcrumb > li + li:before {
  padding: 0 5px;
  color: #ccc;
  content: "/\\00a0";
}
.breadcrumb > .active {
  color: #999;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}
.pagination > li {
  display: inline;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #428bca;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  color: #2a6496;
  background-color: #eee;
  border-color: #ddd;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 2;
  color: #fff;
  cursor: default;
  background-color: #428bca;
  border-color: #428bca;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #999;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 18px;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.pager {
  padding-left: 0;
  margin: 20px 0;
  text-align: center;
  list-style: none;
}
.pager li {
  display: inline;
}
.pager li > a,
.pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
}
.pager li > a:hover,
.pager li > a:focus {
  text-decoration: none;
  background-color: #eee;
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
  color: #999;
  cursor: not-allowed;
  background-color: #fff;
}
.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}
.label[href]:hover,
.label[href]:focus {
  color: #fff;
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
  background-color: #999;
}
.label-default[href]:hover,
.label-default[href]:focus {
  background-color: #808080;
}
.label-primary {
  background-color: #428bca;
}
.label-primary[href]:hover,
.label-primary[href]:focus {
  background-color: #3071a9;
}
.label-success {
  background-color: #5cb85c;
}
.label-success[href]:hover,
.label-success[href]:focus {
  background-color: #449d44;
}
.label-info {
  background-color: #5bc0de;
}
.label-info[href]:hover,
.label-info[href]:focus {
  background-color: #31b0d5;
}
.label-warning {
  background-color: #f0ad4e;
}
.label-warning[href]:hover,
.label-warning[href]:focus {
  background-color: #ec971f;
}
.label-danger {
  background-color: #d9534f;
}
.label-danger[href]:hover,
.label-danger[href]:focus {
  background-color: #c9302c;
}
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  background-color: #999;
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
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
a.list-group-item.active > .badge,
.nav-pills > .active > a > .badge {
  color: #428bca;
  background-color: #fff;
}
.nav-pills > li > a > .badge {
  margin-left: 3px;
}
.jumbotron {
  padding: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eee;
}
.jumbotron h1,
.jumbotron .h1 {
  color: inherit;
}
.jumbotron p {
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
}
.container .jumbotron {
  border-radius: 6px;
}
.jumbotron .container {
  max-width: 100%;
}
@media screen and (min-width: 768px) {
  .jumbotron {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .container .jumbotron {
    padding-right: 60px;
    padding-left: 60px;
  }
  .jumbotron h1,
  .jumbotron .h1 {
    font-size: 63px;
  }
}
.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.thumbnail > img,
.thumbnail a > img {
  margin-right: auto;
  margin-left: auto;
}
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: #428bca;
}
.thumbnail .caption {
  padding: 9px;
  color: #333;
}
.alert {
  padding: 15px;
  margin-bottom: 20px;
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
.alert-dismissable {
  padding-right: 35px;
}
.alert-dismissable .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.alert-success hr {
  border-top-color: #c9e2b3;
}
.alert-success .alert-link {
  color: #2b542c;
}
.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.alert-info hr {
  border-top-color: #a6e1ec;
}
.alert-info .alert-link {
  color: #245269;
}
.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.alert-warning hr {
  border-top-color: #f7e1b5;
}
.alert-warning .alert-link {
  color: #66512c;
}
.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.alert-danger hr {
  border-top-color: #e4b9c0;
}
.alert-danger .alert-link {
  color: #843534;
}
@-webkit-keyframes progress-bar-stripes {
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
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
}
.progress-bar {
  float: left;
  width: 0;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #428bca;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
  -webkit-transition: width .6s ease;
          transition: width .6s ease;
}
.progress-striped .progress-bar {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-size: 40px 40px;
}
.progress.active .progress-bar {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
          animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-success {
  background-color: #5cb85c;
}
.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-info {
  background-color: #5bc0de;
}
.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-warning {
  background-color: #f0ad4e;
}
.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-danger {
  background-color: #d9534f;
}
.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.media,
.media-body {
  overflow: hidden;
  zoom: 1;
}
.media,
.media .media {
  margin-top: 15px;
}
.media:first-child {
  margin-top: 0;
}
.media-object {
  display: block;
}
.media-heading {
  margin: 0 0 5px;
}
.media > .pull-left {
  margin-right: 10px;
}
.media > .pull-right {
  margin-left: 10px;
}
.media-list {
  padding-left: 0;
  list-style: none;
}
.list-group {
  padding-left: 0;
  margin-bottom: 20px;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}
.list-group-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.list-group-item > .badge {
  float: right;
}
.list-group-item > .badge + .badge {
  margin-right: 5px;
}
a.list-group-item {
  color: #555;
}
a.list-group-item .list-group-item-heading {
  color: #333;
}
a.list-group-item:hover,
a.list-group-item:focus {
  text-decoration: none;
  background-color: #f5f5f5;
}
a.list-group-item.active,
a.list-group-item.active:hover,
a.list-group-item.active:focus {
  z-index: 2;
  color: #fff;
  background-color: #428bca;
  border-color: #428bca;
}
a.list-group-item.active .list-group-item-heading,
a.list-group-item.active:hover .list-group-item-heading,
a.list-group-item.active:focus .list-group-item-heading {
  color: inherit;
}
a.list-group-item.active .list-group-item-text,
a.list-group-item.active:hover .list-group-item-text,
a.list-group-item.active:focus .list-group-item-text {
  color: #e1edf7;
}
.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}
a.list-group-item-success {
  color: #3c763d;
}
a.list-group-item-success .list-group-item-heading {
  color: inherit;
}
a.list-group-item-success:hover,
a.list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}
a.list-group-item-success.active,
a.list-group-item-success.active:hover,
a.list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}
.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}
a.list-group-item-info {
  color: #31708f;
}
a.list-group-item-info .list-group-item-heading {
  color: inherit;
}
a.list-group-item-info:hover,
a.list-group-item-info:focus {
  color: #31708f;
  background-color: #c4e3f3;
}
a.list-group-item-info.active,
a.list-group-item-info.active:hover,
a.list-group-item-info.active:focus {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}
.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}
a.list-group-item-warning {
  color: #8a6d3b;
}
a.list-group-item-warning .list-group-item-heading {
  color: inherit;
}
a.list-group-item-warning:hover,
a.list-group-item-warning:focus {
  color: #8a6d3b;
  background-color: #faf2cc;
}
a.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}
.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}
a.list-group-item-danger {
  color: #a94442;
}
a.list-group-item-danger .list-group-item-heading {
  color: inherit;
}
a.list-group-item-danger:hover,
a.list-group-item-danger:focus {
  color: #a94442;
  background-color: #ebcccc;
}
a.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
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
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}
.panel-body {
  padding: 15px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}
.panel-title > a {
  color: inherit;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .list-group {
  margin-bottom: 0;
}
.panel > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.panel > .table,
.panel > .table-responsive > .table {
  margin-bottom: 0;
}
.panel > .table:first-child,
.panel > .table-responsive:first-child > .table:first-child {
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
.panel > .panel-body + .table-responsive {
  border-top: 1px solid #ddd;
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
  margin-bottom: 0;
  border: 0;
}
.panel-group {
  margin-bottom: 20px;
}
.panel-group .panel {
  margin-bottom: 0;
  overflow: hidden;
  border-radius: 4px;
}
.panel-group .panel + .panel {
  margin-top: 5px;
}
.panel-group .panel-heading {
  border-bottom: 0;
}
.panel-group .panel-heading + .panel-collapse .panel-body {
  border-top: 1px solid #ddd;
}
.panel-group .panel-footer {
  border-top: 0;
}
.panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #ddd;
}
.panel-default {
  border-color: #ddd;
}
.panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-default > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #ddd;
}
.panel-default > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #ddd;
}
.panel-primary {
  border-color: #428bca;
}
.panel-primary > .panel-heading {
  color: #fff;
  background-color: #428bca;
  border-color: #428bca;
}
.panel-primary > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #428bca;
}
.panel-primary > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #428bca;
}
.panel-success {
  border-color: #d6e9c6;
}
.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #d6e9c6;
}
.panel-info {
  border-color: #bce8f1;
}
.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #bce8f1;
}
.panel-info > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #bce8f1;
}
.panel-warning {
  border-color: #faebcc;
}
.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #faebcc;
}
.panel-warning > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #faebcc;
}
.panel-danger {
  border-color: #ebccd1;
}
.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse .panel-body {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-footer + .panel-collapse .panel-body {
  border-bottom-color: #ebccd1;
}
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
}
.well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, .15);
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
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  filter: alpha(opacity=20);
  opacity: .2;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  filter: alpha(opacity=50);
  opacity: .5;
}
button.close {
  -webkit-appearance: none;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
}
.modal-open {
  overflow: hidden;
}
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.modal.fade .modal-dialog {
  -webkit-transition: -webkit-transform .3s ease-out;
     -moz-transition:    -moz-transform .3s ease-out;
       -o-transition:      -o-transform .3s ease-out;
          transition:         transform .3s ease-out;
  -webkit-transform: translate(0, -25%);
      -ms-transform: translate(0, -25%);
          transform: translate(0, -25%);
}
.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
          transform: translate(0, 0);
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  outline: none;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
}
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}
.modal-backdrop.fade {
  filter: alpha(opacity=0);
  opacity: 0;
}
.modal-backdrop.in {
  filter: alpha(opacity=50);
  opacity: .5;
}
.modal-header {
  min-height: 16.42857143px;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
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
  padding: 19px 20px 20px;
  margin-top: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.modal-footer .btn + .btn {
  margin-bottom: 0;
  margin-left: 5px;
}
.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
.modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
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
  z-index: 1030;
  display: block;
  font-size: 12px;
  line-height: 1.4;
  visibility: visible;
  filter: alpha(opacity=0);
  opacity: 0;
}
.tooltip.in {
  filter: alpha(opacity=90);
  opacity: .9;
}
.tooltip.top {
  padding: 5px 0;
  margin-top: -3px;
}
.tooltip.right {
  padding: 0 5px;
  margin-left: 3px;
}
.tooltip.bottom {
  padding: 5px 0;
  margin-top: 3px;
}
.tooltip.left {
  padding: 0 5px;
  margin-left: -3px;
}
.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #000;
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
  border-top-color: #000;
}
.tooltip.top-left .tooltip-arrow {
  bottom: 0;
  left: 5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.top-right .tooltip-arrow {
  right: 5px;
  bottom: 0;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}
.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000;
}
.tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-left .tooltip-arrow {
  top: 0;
  left: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-right .tooltip-arrow {
  top: 0;
  right: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1010;
  display: none;
  max-width: 276px;
  padding: 1px;
  text-align: left;
  white-space: normal;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
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
  padding: 8px 14px;
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
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
  content: "";
  border-width: 10px;
}
.popover.top > .arrow {
  bottom: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-color: #999;
  border-top-color: rgba(0, 0, 0, .25);
  border-bottom-width: 0;
}
.popover.top > .arrow:after {
  bottom: 1px;
  margin-left: -10px;
  content: " ";
  border-top-color: #fff;
  border-bottom-width: 0;
}
.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-right-color: #999;
  border-right-color: rgba(0, 0, 0, .25);
  border-left-width: 0;
}
.popover.right > .arrow:after {
  bottom: -10px;
  left: 1px;
  content: " ";
  border-right-color: #fff;
  border-left-width: 0;
}
.popover.bottom > .arrow {
  top: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999;
  border-bottom-color: rgba(0, 0, 0, .25);
}
.popover.bottom > .arrow:after {
  top: 1px;
  margin-left: -10px;
  content: " ";
  border-top-width: 0;
  border-bottom-color: #fff;
}
.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999;
  border-left-color: rgba(0, 0, 0, .25);
}
.popover.left > .arrow:after {
  right: 1px;
  bottom: -10px;
  content: " ";
  border-right-width: 0;
  border-left-color: #fff;
}
.carousel {
  position: relative;
}
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner > .item {
  position: relative;
  display: none;
  -webkit-transition: .6s ease-in-out left;
          transition: .6s ease-in-out left;
}
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  line-height: 1;
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
  bottom: 0;
  left: 0;
  width: 15%;
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
  filter: alpha(opacity=50);
  opacity: .5;
}
.carousel-control.left {
  background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, .5) 0%), color-stop(rgba(0, 0, 0, .0001) 100%));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control.right {
  right: 0;
  left: auto;
  background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, .0001) 0%), color-stop(rgba(0, 0, 0, .5) 100%));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control:hover,
.carousel-control:focus {
  color: #fff;
  text-decoration: none;
  filter: alpha(opacity=90);
  outline: none;
  opacity: .9;
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
}
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
  right: 50%;
}
.carousel-control .icon-prev,
.carousel-control .icon-next {
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
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
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none;
}
.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #000 \\9;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
  border-radius: 10px;
}
.carousel-indicators .active {
  width: 12px;
  height: 12px;
  margin: 0;
  background-color: #fff;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
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
    margin-left: -15px;
    font-size: 30px;
  }
  .carousel-caption {
    right: 20%;
    left: 20%;
    padding-bottom: 30px;
  }
  .carousel-indicators {
    bottom: 20px;
  }
}
.clearfix:before,
.clearfix:after,
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
  display: table;
  content: " ";
}
.clearfix:after,
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
  margin-right: auto;
  margin-left: auto;
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
.visible-print {
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
@media print {
  .hidden-print {
    display: none !important;
  }
}
/*# sourceMappingURL=bootstrap.css.map */
\r
body {\r
    background: url('../img/bg.png');\r
    background-position: top center;\r
    background-attachment: fixed;\r
    background-color: #fff;\r
    color: #000;\r
    font-family: 'Open Sans', sans-serif;\r
    font-size: 13px;\r
	overflow-x: hidden;\r
}\r
\r
header {\r
	margin-top: 50px;\r
}\r
\r
a {\r
    color: #000;\r
    text-decoration: none;\r
    outline: none;\r
    outline-offset: 0;\r
    padding-bottom: 3px;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
a:hover, \r
a:active, \r
a:focus {\r
    color: #000;\r
    text-decoration: none;\r
    outline: none;\r
    outline-offset: 0;\r
    border-bottom: 1px solid #000;\r
}\r
\r
\r
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\r
    font-family: 'Segoe UI', 'Open Sans', sans-serif;    \r
}\r
\r
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\r
    padding-right: 15px;\r
    padding-left: 15px;\r
}\r
\r
.title {\r
    font-size: larger;\r
    font-weight: bold;\r
    text-transform: uppercase;\r
    padding-left: 0px;\r
}\r
\r
.title:hover {\r
    padding-left: 0px !important;\r
}\r
\r
.title .glyphicon {\r
    background-color: rgba(0, 0, 0, 0.75);\r
    color: #fff;\r
    left: -110px;\r
    padding: 10px;\r
    -webkit-border-radius: 20px;\r
    -moz-border-radius: 20px;\r
    border-radius: 20px;\r
    font-size: smaller;\r
}\r
\r
hr {\r
    margin-top: 10px;\r
    margin-bottom: 15px;\r
    border: 0;\r
    border-top: 3px solid rgba(0, 0, 0, 0.1);\r
}\r
\r
hr.empty {\r
    padding: 7px 0;\r
    border: 0;\r
}\r
\r
strong {\r
    font-size: larger;\r
    font-weight: normal;\r
}\r
\r
\r
.progress {\r
    background-color: rgba(0, 0, 0, 0.05);\r
    height: 7px;\r
    margin-left: 9px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
.progress-bar {\r
    width: 0;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-box-shadow: none;\r
    -moz-box-shadow: none;\r
    box-shadow: none;\r
    -webkit-transition: width 3s ease;\r
    -moz-transition: width 3s ease;\r
    transition: width 3s ease;\r
}\r
\r
.progress-bar-success {\r
    background-color: #ffa700;\r
}\r
\r
.annotation {\r
    float: right;\r
    opacity: .75;\r
    font-style: italic;\r
}\r
\r
.chart {\r
    position: relative;\r
    display: inline-block;\r
    width: 110px;\r
    height: 110px;\r
    margin-top: 25px;\r
    margin-bottom: 50px;\r
    margin-right: 5%;\r
    text-align: center;\r
}\r
\r
.chart canvas {\r
    position: absolute;\r
    top: 35px;\r
    left: 0;\r
}\r
\r
.percent {\r
    display: inline-block;\r
    line-height: 140px;\r
    z-index: 2;\r
    opacity: .75;\r
    font-style: italic;\r
}\r
\r
.percent:after {\r
    content: '%';\r
    margin-left: 0.1em;\r
}\r
\r
.skill {\r
    display: block;\r
}\r
\r
ul {\r
    padding: 10px 0 0 13px;\r
    margin: 0;\r
    border-left: 3px solid rgba(0, 0, 0, 0.05);\r
}\r
\r
\r
ul li {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzNBNzYwM0Y5NzE4MTFFM0IxNUFEQzNDMjE2Qzc0NEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzNBNzYwNDA5NzE4MTFFM0IxNUFEQzNDMjE2Qzc0NEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozM0E3NjAzRDk3MTgxMUUzQjE1QURDM0MyMTZDNzQ0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozM0E3NjAzRTk3MTgxMUUzQjE1QURDM0MyMTZDNzQ0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqkh2kMAAAD4SURBVHjajJM5C8JAEIWzG2+iYpEoiJWdnf7/32Aj2NjYGgVPFDQeb+StjItGBz7ILvN2zpjg3QyIQRs0QBFcwA4swBLctbOzKhiAevDd9mAKTnIIlXAIakG+lUECViCzjC4RS8F/VqK/CVlf13OQ+uZgxnqlzsjL4CTiPtPWQhEdKZL61hToB0L7oUEpuFHouPJeW2Q5Dm1bNY67+t56fgXLOWprfmmUf//s9t67lFFYtQeG58TzO7g5x7oWUGHdZ9ACPdDxxHP38ujHZn3atLGLvGFa4R9CyWYivXLOGVeuyXnmRZy43TY5f1XEMWYUpeT1Vz0EGAC/GjlN8dYq7QAAAABJRU5ErkJggg==");\r
    padding: 10px 0 10px 27px;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
ul li:hover {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUEzQTFENTg5NzFDMTFFMzlDMURCMzA1OUIwRkY3RjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUEzQTFENTk5NzFDMTFFMzlDMURCMzA1OUIwRkY3RjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQTNBMUQ1Njk3MUMxMUUzOUMxREIzMDU5QjBGRjdGMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQTNBMUQ1Nzk3MUMxMUUzOUMxREIzMDU5QjBGRjdGMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkF2Tn4AAADtSURBVHjanJNLDgFBEIZrJsMJcAAXsCDBnMBGhAVtMaebhSHBMZCwcAAO4HEBk2h/JTXDots8KvlSnVT/Xd3VVY7WmhJztuTCzcAc9EAd3MEeLMBSj+md7k/EEDbhVqBNdjuBKQ64pmIR7kCDsu0G+nyAQxvNVz2ADuW3I+iyUBUUkuxXLA6onAXun6wTUBFvsha/WVuCVRQlRjE9rGND/MWZHxbxEELOPLLEn55UbmAIrjPefObMYcmChSyOJDsV/OfIlV5V0jmUs8MU6zgzYXGB86V3KaO3fdn/HQzDVPGA1LiqyTWZ36n6CDAA+4hJtP39L6kAAAAASUVORK5CYII=");\r
    padding-left: 40px !important;\r
}\r
\r
.static:hover {\r
    padding-left: 27px !important;\r
}\r
\r
ul li p {\r
    padding-left: 8px;\r
}\r
\r
ul .note {\r
    display: inline-block;\r
    margin: 8px;\r
    opacity: .75;\r
    text-transform: uppercase;\r
}\r
\r
ul .description {\r
    opacity: .75;\r
}\r
\r
.title {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDRGNjMzNkI5N0U4MTFFMzkwRjVDMkJBNzczOEJGMzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDRGNjMzNkM5N0U4MTFFMzkwRjVDMkJBNzczOEJGMzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NEY2MzM2OTk3RTgxMUUzOTBGNUMyQkE3NzM4QkYzNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NEY2MzM2QTk3RTgxMUUzOTBGNUMyQkE3NzM4QkYzNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pre7tSgAAACiSURBVHjajJLBDYAgDEXbEjw4gJvo2f3dwxE8giWi+SJUmnwDlFewHyaila44VJsqUjtYNavGNBFIjDnBPeANHx0FPmDinH521aTyedHn+W6B6RfZ2BBgLCWYeuNgsbwBg6jWVKwYcyI0GhZKN6TYYNn0yUulq/Tj8xOuYsdggOjCA1vdjnDiy0a2fASw6fNigOYLkw4QbXw9ZekAmwVOAQYASO4yZdH94skAAAAASUVORK5CYII=") !important;\r
}\r
\r
.title:hover {\r
    padding-left: 0px !important;\r
}\r
\r
/* Top icons ------------------------------------------------- */\r
\r
.top-icons {\r
	position: fixed;\r
    top: 50px;\r
    left: 47px;\r
	width: 100%;\r
}\r
\r
.top-menu {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-menu:hover {\r
    background-color: #00ce08;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
.top-download-resume {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-download-resume:hover {\r
    background-color: #0093ff;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
.top-contact {\r
    background-color: rgba(0, 0, 0, 0.25);\r
    color: #fff;\r
    padding: 10px;\r
    font-size: 12px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.top-contact:hover {\r
    background-color: #ff003b;\r
    color: #fff;\r
    border-bottom: 0;\r
}\r
\r
/* Nav ------------------------------------------------- */\r
\r
nav {\r
    position: fixed;\r
    top: 33%;\r
    left: 50px;\r
    z-index: 999;\r
}\r
\r
nav ul {\r
    padding: 10px 0 0 10px;\r
    margin: 0px;\r
    border-left: 4px solid rgba(0, 0, 0, 0.05);\r
}\r
\r
nav ul li:first-child {\r
    margin-top: -25px;\r
}\r
\r
nav ul li {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTk2QTQ0RUM5NzI4MTFFM0E4NTNBRTI0RDU0Q0U4NjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTk2QTQ0RUQ5NzI4MTFFM0E4NTNBRTI0RDU0Q0U4NjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOTZBNDRFQTk3MjgxMUUzQTg1M0FFMjRENTRDRTg2MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOTZBNDRFQjk3MjgxMUUzQTg1M0FFMjRENTRDRTg2MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhgvmygAAACVSURBVHjaYmRAAFEglgBiXij/MxC/AOLXIA4jVFAeiBUZsIP7QPyQGUiIALE6A24gCMRfQApVgZgTKgiy5jbUSpAcN1SclQWJAwJPgfgDkpNEoTQ3E5o1jEiKGJElQCZ+BWI2KF8KSQ6Z/ZUR6hkdBvzgCsjB36AcARyKHgDxM2Yo5wPUCcxQ/BeIP0LD8BlIAUCAAQAEBBbvNAJsuwAAAABJRU5ErkJggg==");\r
    padding: 5px 15px;\r
    font-size: 13px;\r
    text-transform: uppercase;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
nav ul li:hover {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEzNjNDNzM5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEzNjNDNzQ5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTM2M0M3MTk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTM2M0M3Mjk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr961YUAAABVSURBVHjaYmBAgBAg3gzEz6B4M1QMBdQC8X8cuBamyB+PIhgGqWHYTYRCkBqGl0QofMbEQCQAKbxEhLqrJHkGBOrwKKpDNx4W4E+A+CmUHQqTBAgwABdMO6kaYAQsAAAAAElFTkSuQmCC");\r
    padding-left: 25px !important;\r
    color: #000;\r
}\r
\r
nav ul li:hover a {\r
    color: #000;\r
}\r
\r
nav ul li.active {\r
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEzNjNDNzM5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEzNjNDNzQ5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTM2M0M3MTk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTM2M0M3Mjk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr961YUAAABVSURBVHjaYmBAgBAg3gzEz6B4M1QMBdQC8X8cuBamyB+PIhgGqWHYTYRCkBqGl0QofMbEQCQAKbxEhLqrJHkGBOrwKKpDNx4W4E+A+CmUHQqTBAgwABdMO6kaYAQsAAAAAElFTkSuQmCC");\r
    color: #000;\r
}\r
\r
nav a {\r
    border-bottom: 0;\r
}\r
\r
nav a:hover, \r
nav a:active, \r
nav a:focus {\r
    border-bottom: 0;\r
}\r
\r
nav li a {\r
    border-bottom: 0;\r
    color: rgba(0, 0, 0, 0.5);\r
}\r
\r
nav .active a {\r
    color: #000;\r
    font-weight: bold;\r
}\r
\r
#mini-nav {\r
    background-color: #fff;\r
    position: fixed;\r
    width: 100%;\r
    top: 0;\r
    left: 0;\r
    text-align: center;\r
    font-weight: bold;\r
}\r
\r
#mini-nav ul {\r
    width: 100%;\r
    border: 0;\r
    padding: 7px 0 10px 0;\r
    \r
}\r
\r
#mini-nav ul li {\r
    list-style-image: none;\r
    padding: 0 !important;\r
}\r
\r
#mini-nav ul li:first-child {\r
    margin-top: 0;\r
}\r
\r
#mini-nav .dropdown-menu {\r
    margin: 0;\r
    font-size: 14px;\r
    list-style: none;\r
    background-color: #fff;\r
    border: 0;\r
    border-radius: 0;\r
    -webkit-box-shadow: none;\r
    box-shadow: none;\r
}\r
\r
.dropdown-menu > .active > a, \r
.dropdown-menu > .active > a:hover, \r
.dropdown-menu > .active > a:focus {\r
    background-color: #000;\r
}\r
\r
/* Header ------------------------------------------------- */\r
\r
.face {\r
    height: 200px;\r
    width: 200px;\r
    border-radius: 50%;\r
}\r
\r
.header-name {\r
    background-color: #000;\r
    padding: 5px 17px;\r
    display: inline-block;\r
    color: #fff;\r
    font-size: 18px;\r
    font-weight: 700;\r
    text-transform: uppercase;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-left: 3px solid #f00;\r
    border-right: 3px solid #0045ff;\r
}\r
\r
.header-title {\r
    font-size: 16px;\r
}\r
\r
.header-subtitle {\r
    padding-top: 25px;\r
    font-style: italic;\r
    margin-bottom: 100px;\r
}\r
\r
/* Profile ------------------------------------------------- */\r
\r
.profile .title .glyphicon{\r
    background-color: #9300ff;\r
}\r
\r
/* Work experience ------------------------------------------------- */\r
\r
.work-experience .title .glyphicon{\r
    background-color: #00a7ff;\r
}\r
\r
/* Education ------------------------------------------------- */\r
\r
.education .title .glyphicon{\r
    background-color: #07b500;\r
}\r
\r
/* Professional skills ------------------------------------------------- */\r
\r
.professional-skills .title .glyphicon{\r
    background-color: #ffa700;\r
}\r
\r
/* Personal skills ------------------------------------------------- */\r
\r
.personal-skills .title .glyphicon{\r
    background-color: #00aca5;\r
}\r
\r
/* Interests ------------------------------------------------- */\r
\r
.interests .title .glyphicon{\r
    background-color: #f00;\r
}\r
\r
/* Portfolio ------------------------------------------------ */\r
\r
.portfolio .title .glyphicon{\r
    background-color: #0089ff;\r
}\r
\r
.portfolio img {\r
    width: 100px;\r
    margin-right: 5px;\r
    margin-bottom: 5px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    cursor: pointer;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.portfolio img:hover {\r
    opacity: .75;\r
}\r
\r
.portfolio img:first-child {\r
    margin-left: 8px;\r
}\r
\r
.dismiss {\r
    position: relative;\r
    background-color: rgba(0, 0, 0, 0.25);\r
    top: -4px;\r
    left: 100%;\r
    color: #fff;\r
    padding: 5px 7px;\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    border-bottom: 0 !important;\r
    z-index: -1;\r
    -webkit-transition: all 0.3s ease;\r
    -moz-transition: all 0.3s ease;\r
    transition: all 0.3s ease;\r
}\r
\r
.dismiss:hover {\r
    background-color: #fff;\r
}\r
\r
.modal {\r
	text-align: center;\r
}\r
\r
.modal img {\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
/* Contact Form ------------------------------------------------ */\r
\r
.contact .title .glyphicon{\r
    background-color: #00c60f;\r
}\r
\r
.contact ul li:hover {\r
    padding-left: 27px;\r
}\r
\r
form {\r
    margin-left: 9px;\r
}\r
\r
.contact-on {\r
    position: fixed;\r
    bottom: 50px;\r
    background: #202020;\r
    height: auto;\r
    width: 100%;\r
    padding-top: 35px;\r
    padding-bottom: 25px;\r
    z-index: 999;\r
    display: none;\r
}\r
\r
.form-control {\r
    display: block;\r
    width: 100%;\r
    height: 35px;\r
    padding: 6px 15px;\r
    font-size: 12px;\r
    color: #000;\r
    background-color: rgba(255, 255, 255, 0.75);\r
    background-image: none;\r
    border: 0;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-box-shadow: none;\r
    -moz-box-shadow: none;\r
    box-shadow: none;\r
}\r
\r
.form-control:focus {\r
    border: 0;\r
    background-color: #fff;\r
    color: #000;\r
}\r
\r
textarea.form-control {\r
    height: 85px;\r
    resize: none;\r
}\r
\r
.input-group-addon {\r
    color: #000;\r
    background-color: rgba(0, 0, 0, 0.05);\r
    border: 0;\r
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
}\r
\r
form .glyphicon {\r
    opacity: .25;\r
}\r
\r
.btn-success {\r
    font-size: 12px;\r
    color: #000;\r
    background-color: rgba(255, 255, 255, 0.5);\r
    border-color: rgba(0, 0, 0, 0.1);\r
    -webkit-border-radius: 3px;\r
    -moz-border-radius: 3px;\r
    border-radius: 3px;\r
    -webkit-transition: all .3s ease;\r
    -moz-transition: all .3s ease;\r
    transition: all .3s ease;\r
}\r
\r
.btn .glyphicon {\r
    margin-right: 7px;\r
    opacity: 1;\r
}\r
\r
.btn-success:hover, \r
.btn-success:focus, \r
.btn-success:active, \r
.btn-success.active {\r
    color: #fff;\r
    background-color: #15b900;\r
    border-color: rgba(0, 0, 0, 0.1);\r
}\r
\r
/* Up ------------------------------------------------ */\r
\r
.contact .title.up .glyphicon{\r
    background-color: #ffad00;\r
}\r
\r
.up {\r
	margin-bottom: 100px;\r
    cursor: pointer;\r
}\r
`,"example.html":"utf8","fonts/glyphicons-halflings-regular.svg":`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" >
<svg xmlns="http://www.w3.org/2000/svg">
<metadata></metadata>
<defs>
<font id="glyphicons_halflingsregular" horiz-adv-x="1200" >
<font-face units-per-em="1200" ascent="960" descent="-240" />
<missing-glyph horiz-adv-x="500" />
<glyph />
<glyph />
<glyph unicode="&#xd;" />
<glyph unicode=" " />
<glyph unicode="*" d="M100 500v200h259l-183 183l141 141l183 -183v259h200v-259l183 183l141 -141l-183 -183h259v-200h-259l183 -183l-141 -141l-183 183v-259h-200v259l-183 -183l-141 141l183 183h-259z" />
<glyph unicode="+" d="M0 400v300h400v400h300v-400h400v-300h-400v-400h-300v400h-400z" />
<glyph unicode="&#xa0;" />
<glyph unicode="&#x2000;" horiz-adv-x="652" />
<glyph unicode="&#x2001;" horiz-adv-x="1304" />
<glyph unicode="&#x2002;" horiz-adv-x="652" />
<glyph unicode="&#x2003;" horiz-adv-x="1304" />
<glyph unicode="&#x2004;" horiz-adv-x="434" />
<glyph unicode="&#x2005;" horiz-adv-x="326" />
<glyph unicode="&#x2006;" horiz-adv-x="217" />
<glyph unicode="&#x2007;" horiz-adv-x="217" />
<glyph unicode="&#x2008;" horiz-adv-x="163" />
<glyph unicode="&#x2009;" horiz-adv-x="260" />
<glyph unicode="&#x200a;" horiz-adv-x="72" />
<glyph unicode="&#x202f;" horiz-adv-x="260" />
<glyph unicode="&#x205f;" horiz-adv-x="326" />
<glyph unicode="&#x20ac;" d="M100 500l100 100h113q0 47 5 100h-218l100 100h135q37 167 112 257q117 141 297 141q242 0 354 -189q60 -103 66 -209h-181q0 55 -25.5 99t-63.5 68t-75 36.5t-67 12.5q-24 0 -52.5 -10t-62.5 -32t-65.5 -67t-50.5 -107h379l-100 -100h-300q-6 -46 -6 -100h406l-100 -100 h-300q9 -74 33 -132t52.5 -91t62 -54.5t59 -29t46.5 -7.5q29 0 66 13t75 37t63.5 67.5t25.5 96.5h174q-31 -172 -128 -278q-107 -117 -274 -117q-205 0 -324 158q-36 46 -69 131.5t-45 205.5h-217z" />
<glyph unicode="&#x2212;" d="M200 400h900v300h-900v-300z" />
<glyph unicode="&#x2601;" d="M-14 494q0 -80 56.5 -137t135.5 -57h750q120 0 205 86t85 208q0 120 -85 206.5t-205 86.5q-46 0 -90 -14q-44 97 -134.5 156.5t-200.5 59.5q-152 0 -260 -107.5t-108 -260.5q0 -25 2 -37q-66 -14 -108.5 -67.5t-42.5 -122.5z" />
<glyph unicode="&#x2709;" d="M0 100l400 400l200 -200l200 200l400 -400h-1200zM0 300v600l300 -300zM0 1100l600 -603l600 603h-1200zM900 600l300 300v-600z" />
<glyph unicode="&#x270f;" d="M-13 -13l333 112l-223 223zM187 403l214 -214l614 614l-214 214zM887 1103l214 -214l99 92q13 13 13 32.5t-13 33.5l-153 153q-15 13 -33 13t-33 -13z" />
<glyph unicode="&#xe000;" horiz-adv-x="500" d="M0 0z" />
<glyph unicode="&#xe001;" d="M0 1200h1200l-500 -550v-550h300v-100h-800v100h300v550z" />
<glyph unicode="&#xe002;" d="M14 84q18 -55 86 -75.5t147 5.5q65 21 109 69t44 90v606l600 155v-521q-64 16 -138 -7q-79 -26 -122.5 -83t-25.5 -111q17 -55 85.5 -75.5t147.5 4.5q70 23 111.5 63.5t41.5 95.5v881q0 10 -7 15.5t-17 2.5l-752 -193q-10 -3 -17 -12.5t-7 -19.5v-689q-64 17 -138 -7 q-79 -25 -122.5 -82t-25.5 -112z" />
<glyph unicode="&#xe003;" d="M23 693q0 200 142 342t342 142t342 -142t142 -342q0 -142 -78 -261l300 -300q7 -8 7 -18t-7 -18l-109 -109q-8 -7 -18 -7t-18 7l-300 300q-119 -78 -261 -78q-200 0 -342 142t-142 342zM176 693q0 -136 97 -233t234 -97t233.5 96.5t96.5 233.5t-96.5 233.5t-233.5 96.5 t-234 -97t-97 -233z" />
<glyph unicode="&#xe005;" d="M100 784q0 64 28 123t73 100.5t104.5 64t119 20.5t120 -38.5t104.5 -104.5q48 69 109.5 105t121.5 38t118.5 -20.5t102.5 -64t71 -100.5t27 -123q0 -57 -33.5 -117.5t-94 -124.5t-126.5 -127.5t-150 -152.5t-146 -174q-62 85 -145.5 174t-149.5 152.5t-126.5 127.5 t-94 124.5t-33.5 117.5z" />
<glyph unicode="&#xe006;" d="M-72 800h479l146 400h2l146 -400h472l-382 -278l145 -449l-384 275l-382 -275l146 447zM168 71l2 1z" />
<glyph unicode="&#xe007;" d="M-72 800h479l146 400h2l146 -400h472l-382 -278l145 -449l-384 275l-382 -275l146 447zM168 71l2 1zM237 700l196 -142l-73 -226l192 140l195 -141l-74 229l193 140h-235l-77 211l-78 -211h-239z" />
<glyph unicode="&#xe008;" d="M0 0v143l400 257v100q-37 0 -68.5 74.5t-31.5 125.5v200q0 124 88 212t212 88t212 -88t88 -212v-200q0 -51 -31.5 -125.5t-68.5 -74.5v-100l400 -257v-143h-1200z" />
<glyph unicode="&#xe009;" d="M0 0v1100h1200v-1100h-1200zM100 100h100v100h-100v-100zM100 300h100v100h-100v-100zM100 500h100v100h-100v-100zM100 700h100v100h-100v-100zM100 900h100v100h-100v-100zM300 100h600v400h-600v-400zM300 600h600v400h-600v-400zM1000 100h100v100h-100v-100z M1000 300h100v100h-100v-100zM1000 500h100v100h-100v-100zM1000 700h100v100h-100v-100zM1000 900h100v100h-100v-100z" />
<glyph unicode="&#xe010;" d="M0 50v400q0 21 14.5 35.5t35.5 14.5h400q21 0 35.5 -14.5t14.5 -35.5v-400q0 -21 -14.5 -35.5t-35.5 -14.5h-400q-21 0 -35.5 14.5t-14.5 35.5zM0 650v400q0 21 14.5 35.5t35.5 14.5h400q21 0 35.5 -14.5t14.5 -35.5v-400q0 -21 -14.5 -35.5t-35.5 -14.5h-400 q-21 0 -35.5 14.5t-14.5 35.5zM600 50v400q0 21 14.5 35.5t35.5 14.5h400q21 0 35.5 -14.5t14.5 -35.5v-400q0 -21 -14.5 -35.5t-35.5 -14.5h-400q-21 0 -35.5 14.5t-14.5 35.5zM600 650v400q0 21 14.5 35.5t35.5 14.5h400q21 0 35.5 -14.5t14.5 -35.5v-400 q0 -21 -14.5 -35.5t-35.5 -14.5h-400q-21 0 -35.5 14.5t-14.5 35.5z" />
<glyph unicode="&#xe011;" d="M0 50v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM0 450v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200 q-21 0 -35.5 14.5t-14.5 35.5zM0 850v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM400 50v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5 t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM400 450v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM400 850v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5 v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM800 50v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM800 450v200q0 21 14.5 35.5t35.5 14.5h200 q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM800 850v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5z" />
<glyph unicode="&#xe012;" d="M0 50v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM0 450q0 -21 14.5 -35.5t35.5 -14.5h200q21 0 35.5 14.5t14.5 35.5v200q0 21 -14.5 35.5t-35.5 14.5h-200q-21 0 -35.5 -14.5 t-14.5 -35.5v-200zM0 850v200q0 21 14.5 35.5t35.5 14.5h200q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5zM400 50v200q0 21 14.5 35.5t35.5 14.5h700q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5 t-35.5 -14.5h-700q-21 0 -35.5 14.5t-14.5 35.5zM400 450v200q0 21 14.5 35.5t35.5 14.5h700q21 0 35.5 -14.5t14.5 -35.5v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-700q-21 0 -35.5 14.5t-14.5 35.5zM400 850v200q0 21 14.5 35.5t35.5 14.5h700q21 0 35.5 -14.5t14.5 -35.5 v-200q0 -21 -14.5 -35.5t-35.5 -14.5h-700q-21 0 -35.5 14.5t-14.5 35.5z" />
<glyph unicode="&#xe013;" d="M29 454l419 -420l818 820l-212 212l-607 -607l-206 207z" />
<glyph unicode="&#xe014;" d="M106 318l282 282l-282 282l212 212l282 -282l282 282l212 -212l-282 -282l282 -282l-212 -212l-282 282l-282 -282z" />
<glyph unicode="&#xe015;" d="M23 693q0 200 142 342t342 142t342 -142t142 -342q0 -142 -78 -261l300 -300q7 -8 7 -18t-7 -18l-109 -109q-8 -7 -18 -7t-18 7l-300 300q-119 -78 -261 -78q-200 0 -342 142t-142 342zM176 693q0 -136 97 -233t234 -97t233.5 96.5t96.5 233.5t-96.5 233.5t-233.5 96.5 t-234 -97t-97 -233zM300 600v200h100v100h200v-100h100v-200h-100v-100h-200v100h-100z" />
<glyph unicode="&#xe016;" d="M23 694q0 200 142 342t342 142t342 -142t142 -342q0 -141 -78 -262l300 -299q7 -7 7 -18t-7 -18l-109 -109q-8 -8 -18 -8t-18 8l-300 299q-120 -77 -261 -77q-200 0 -342 142t-142 342zM176 694q0 -136 97 -233t234 -97t233.5 97t96.5 233t-96.5 233t-233.5 97t-234 -97 t-97 -233zM300 601h400v200h-400v-200z" />
<glyph unicode="&#xe017;" d="M23 600q0 183 105 331t272 210v-166q-103 -55 -165 -155t-62 -220q0 -177 125 -302t302 -125t302 125t125 302q0 120 -62 220t-165 155v166q167 -62 272 -210t105 -331q0 -118 -45.5 -224.5t-123 -184t-184 -123t-224.5 -45.5t-224.5 45.5t-184 123t-123 184t-45.5 224.5 zM500 750q0 -21 14.5 -35.5t35.5 -14.5h100q21 0 35.5 14.5t14.5 35.5v400q0 21 -14.5 35.5t-35.5 14.5h-100q-21 0 -35.5 -14.5t-14.5 -35.5v-400z" />
<glyph unicode="&#xe018;" d="M100 1h200v300h-200v-300zM400 1v500h200v-500h-200zM700 1v800h200v-800h-200zM1000 1v1200h200v-1200h-200z" />
<glyph unicode="&#xe019;" d="M26 601q0 -33 6 -74l151 -38l2 -6q14 -49 38 -93l3 -5l-80 -134q45 -59 105 -105l133 81l5 -3q45 -26 94 -39l5 -2l38 -151q40 -5 74 -5q27 0 74 5l38 151l6 2q46 13 93 39l5 3l134 -81q56 44 104 105l-80 134l3 5q24 44 39 93l1 6l152 38q5 40 5 74q0 28 -5 73l-152 38 l-1 6q-16 51 -39 93l-3 5l80 134q-44 58 -104 105l-134 -81l-5 3q-45 25 -93 39l-6 1l-38 152q-40 5 -74 5q-27 0 -74 -5l-38 -152l-5 -1q-50 -14 -94 -39l-5 -3l-133 81q-59 -47 -105 -105l80 -134l-3 -5q-25 -47 -38 -93l-2 -6l-151 -38q-6 -48 -6 -73zM385 601 q0 88 63 151t152 63t152 -63t63 -151q0 -89 -63 -152t-152 -63t-152 63t-63 152z" />
<glyph unicode="&#xe020;" d="M100 1025v50q0 10 7.5 17.5t17.5 7.5h275v100q0 41 29.5 70.5t70.5 29.5h300q41 0 70.5 -29.5t29.5 -70.5v-100h275q10 0 17.5 -7.5t7.5 -17.5v-50q0 -11 -7 -18t-18 -7h-1050q-11 0 -18 7t-7 18zM200 100v800h900v-800q0 -41 -29.5 -71t-70.5 -30h-700q-41 0 -70.5 30 t-29.5 71zM300 100h100v700h-100v-700zM500 100h100v700h-100v-700zM500 1100h300v100h-300v-100zM700 100h100v700h-100v-700zM900 100h100v700h-100v-700z" />
<glyph unicode="&#xe021;" d="M1 601l656 644l644 -644h-200v-600h-300v400h-300v-400h-300v600h-200z" />
<glyph unicode="&#xe022;" d="M100 25v1150q0 11 7 18t18 7h475v-500h400v-675q0 -11 -7 -18t-18 -7h-850q-11 0 -18 7t-7 18zM700 800v300l300 -300h-300z" />
<glyph unicode="&#xe023;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM500 500v400h100 v-300h200v-100h-300z" />
<glyph unicode="&#xe024;" d="M-100 0l431 1200h209l-21 -300h162l-20 300h208l431 -1200h-538l-41 400h-242l-40 -400h-539zM488 500h224l-27 300h-170z" />
<glyph unicode="&#xe025;" d="M0 0v400h490l-290 300h200v500h300v-500h200l-290 -300h490v-400h-1100zM813 200h175v100h-175v-100z" />
<glyph unicode="&#xe026;" d="M1 600q0 122 47.5 233t127.5 191t191 127.5t233 47.5t233 -47.5t191 -127.5t127.5 -191t47.5 -233t-47.5 -233t-127.5 -191t-191 -127.5t-233 -47.5t-233 47.5t-191 127.5t-127.5 191t-47.5 233zM188 600q0 -170 121 -291t291 -121t291 121t121 291t-121 291t-291 121 t-291 -121t-121 -291zM350 600h150v300h200v-300h150l-250 -300z" />
<glyph unicode="&#xe027;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM350 600l250 300 l250 -300h-150v-300h-200v300h-150z" />
<glyph unicode="&#xe028;" d="M0 25v475l200 700h800q199 -700 200 -700v-475q0 -11 -7 -18t-18 -7h-1150q-11 0 -18 7t-7 18zM200 500h200l50 -200h300l50 200h200l-97 500h-606z" />
<glyph unicode="&#xe029;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -172 121.5 -293t292.5 -121t292.5 121t121.5 293q0 171 -121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM500 397v401 l297 -200z" />
<glyph unicode="&#xe030;" d="M23 600q0 -118 45.5 -224.5t123 -184t184 -123t224.5 -45.5t224.5 45.5t184 123t123 184t45.5 224.5h-150q0 -177 -125 -302t-302 -125t-302 125t-125 302t125 302t302 125q136 0 246 -81l-146 -146h400v400l-145 -145q-157 122 -355 122q-118 0 -224.5 -45.5t-184 -123 t-123 -184t-45.5 -224.5z" />
<glyph unicode="&#xe031;" d="M23 600q0 118 45.5 224.5t123 184t184 123t224.5 45.5q198 0 355 -122l145 145v-400h-400l147 147q-112 80 -247 80q-177 0 -302 -125t-125 -302h-150zM100 0v400h400l-147 -147q112 -80 247 -80q177 0 302 125t125 302h150q0 -118 -45.5 -224.5t-123 -184t-184 -123 t-224.5 -45.5q-198 0 -355 122z" />
<glyph unicode="&#xe032;" d="M100 0h1100v1200h-1100v-1200zM200 100v900h900v-900h-900zM300 200v100h100v-100h-100zM300 400v100h100v-100h-100zM300 600v100h100v-100h-100zM300 800v100h100v-100h-100zM500 200h500v100h-500v-100zM500 400v100h500v-100h-500zM500 600v100h500v-100h-500z M500 800v100h500v-100h-500z" />
<glyph unicode="&#xe033;" d="M0 100v600q0 41 29.5 70.5t70.5 29.5h100v200q0 82 59 141t141 59h300q82 0 141 -59t59 -141v-200h100q41 0 70.5 -29.5t29.5 -70.5v-600q0 -41 -29.5 -70.5t-70.5 -29.5h-900q-41 0 -70.5 29.5t-29.5 70.5zM400 800h300v150q0 21 -14.5 35.5t-35.5 14.5h-200 q-21 0 -35.5 -14.5t-14.5 -35.5v-150z" />
<glyph unicode="&#xe034;" d="M100 0v1100h100v-1100h-100zM300 400q60 60 127.5 84t127.5 17.5t122 -23t119 -30t110 -11t103 42t91 120.5v500q-40 -81 -101.5 -115.5t-127.5 -29.5t-138 25t-139.5 40t-125.5 25t-103 -29.5t-65 -115.5v-500z" />
<glyph unicode="&#xe035;" d="M0 275q0 -11 7 -18t18 -7h50q11 0 18 7t7 18v300q0 127 70.5 231.5t184.5 161.5t245 57t245 -57t184.5 -161.5t70.5 -231.5v-300q0 -11 7 -18t18 -7h50q11 0 18 7t7 18v300q0 116 -49.5 227t-131 192.5t-192.5 131t-227 49.5t-227 -49.5t-192.5 -131t-131 -192.5 t-49.5 -227v-300zM200 20v460q0 8 6 14t14 6h160q8 0 14 -6t6 -14v-460q0 -8 -6 -14t-14 -6h-160q-8 0 -14 6t-6 14zM800 20v460q0 8 6 14t14 6h160q8 0 14 -6t6 -14v-460q0 -8 -6 -14t-14 -6h-160q-8 0 -14 6t-6 14z" />
<glyph unicode="&#xe036;" d="M0 400h300l300 -200v800l-300 -200h-300v-400zM688 459l141 141l-141 141l71 71l141 -141l141 141l71 -71l-141 -141l141 -141l-71 -71l-141 141l-141 -141z" />
<glyph unicode="&#xe037;" d="M0 400h300l300 -200v800l-300 -200h-300v-400zM700 857l69 53q111 -135 111 -310q0 -169 -106 -302l-67 54q86 110 86 248q0 146 -93 257z" />
<glyph unicode="&#xe038;" d="M0 401v400h300l300 200v-800l-300 200h-300zM702 858l69 53q111 -135 111 -310q0 -170 -106 -303l-67 55q86 110 86 248q0 145 -93 257zM889 951l7 -8q123 -151 123 -344q0 -189 -119 -339l-7 -8l81 -66l6 8q142 178 142 405q0 230 -144 408l-6 8z" />
<glyph unicode="&#xe039;" d="M0 0h500v500h-200v100h-100v-100h-200v-500zM0 600h100v100h400v100h100v100h-100v300h-500v-600zM100 100v300h300v-300h-300zM100 800v300h300v-300h-300zM200 200v100h100v-100h-100zM200 900h100v100h-100v-100zM500 500v100h300v-300h200v-100h-100v-100h-200v100 h-100v100h100v200h-200zM600 0v100h100v-100h-100zM600 1000h100v-300h200v-300h300v200h-200v100h200v500h-600v-200zM800 800v300h300v-300h-300zM900 0v100h300v-100h-300zM900 900v100h100v-100h-100zM1100 200v100h100v-100h-100z" />
<glyph unicode="&#xe040;" d="M0 200h100v1000h-100v-1000zM100 0v100h300v-100h-300zM200 200v1000h100v-1000h-100zM500 0v91h100v-91h-100zM500 200v1000h200v-1000h-200zM700 0v91h100v-91h-100zM800 200v1000h100v-1000h-100zM900 0v91h200v-91h-200zM1000 200v1000h200v-1000h-200z" />
<glyph unicode="&#xe041;" d="M1 700v475q0 10 7.5 17.5t17.5 7.5h474l700 -700l-500 -500zM148 953q0 -42 29 -71q30 -30 71.5 -30t71.5 30q29 29 29 71t-29 71q-30 30 -71.5 30t-71.5 -30q-29 -29 -29 -71z" />
<glyph unicode="&#xe042;" d="M2 700v475q0 11 7 18t18 7h474l700 -700l-500 -500zM148 953q0 -42 30 -71q29 -30 71 -30t71 30q30 29 30 71t-30 71q-29 30 -71 30t-71 -30q-30 -29 -30 -71zM701 1200h100l700 -700l-500 -500l-50 50l450 450z" />
<glyph unicode="&#xe043;" d="M100 0v1025l175 175h925v-1000l-100 -100v1000h-750l-100 -100h750v-1000h-900z" />
<glyph unicode="&#xe044;" d="M200 0l450 444l450 -443v1150q0 20 -14.5 35t-35.5 15h-800q-21 0 -35.5 -15t-14.5 -35v-1151z" />
<glyph unicode="&#xe045;" d="M0 100v700h200l100 -200h600l100 200h200v-700h-200v200h-800v-200h-200zM253 829l40 -124h592l62 124l-94 346q-2 11 -10 18t-18 7h-450q-10 0 -18 -7t-10 -18zM281 24l38 152q2 10 11.5 17t19.5 7h500q10 0 19.5 -7t11.5 -17l38 -152q2 -10 -3.5 -17t-15.5 -7h-600 q-10 0 -15.5 7t-3.5 17z" />
<glyph unicode="&#xe046;" d="M0 200q0 -41 29.5 -70.5t70.5 -29.5h1000q41 0 70.5 29.5t29.5 70.5v600q0 41 -29.5 70.5t-70.5 29.5h-150q-4 8 -11.5 21.5t-33 48t-53 61t-69 48t-83.5 21.5h-200q-41 0 -82 -20.5t-70 -50t-52 -59t-34 -50.5l-12 -20h-150q-41 0 -70.5 -29.5t-29.5 -70.5v-600z M356 500q0 100 72 172t172 72t172 -72t72 -172t-72 -172t-172 -72t-172 72t-72 172zM494 500q0 -44 31 -75t75 -31t75 31t31 75t-31 75t-75 31t-75 -31t-31 -75zM900 700v100h100v-100h-100z" />
<glyph unicode="&#xe047;" d="M53 0h365v66q-41 0 -72 11t-49 38t1 71l92 234h391l82 -222q16 -45 -5.5 -88.5t-74.5 -43.5v-66h417v66q-34 1 -74 43q-18 19 -33 42t-21 37l-6 13l-385 998h-93l-399 -1006q-24 -48 -52 -75q-12 -12 -33 -25t-36 -20l-15 -7v-66zM416 521l178 457l46 -140l116 -317h-340 z" />
<glyph unicode="&#xe048;" d="M100 0v89q41 7 70.5 32.5t29.5 65.5v827q0 28 -1 39.5t-5.5 26t-15.5 21t-29 14t-49 14.5v70h471q120 0 213 -88t93 -228q0 -55 -11.5 -101.5t-28 -74t-33.5 -47.5t-28 -28l-12 -7q8 -3 21.5 -9t48 -31.5t60.5 -58t47.5 -91.5t21.5 -129q0 -84 -59 -156.5t-142 -111 t-162 -38.5h-500zM400 200h161q89 0 153 48.5t64 132.5q0 90 -62.5 154.5t-156.5 64.5h-159v-400zM400 700h139q76 0 130 61.5t54 138.5q0 82 -84 130.5t-239 48.5v-379z" />
<glyph unicode="&#xe049;" d="M200 0v57q77 7 134.5 40.5t65.5 80.5l173 849q10 56 -10 74t-91 37q-6 1 -10.5 2.5t-9.5 2.5v57h425l2 -57q-33 -8 -62 -25.5t-46 -37t-29.5 -38t-17.5 -30.5l-5 -12l-128 -825q-10 -52 14 -82t95 -36v-57h-500z" />
<glyph unicode="&#xe050;" d="M-75 200h75v800h-75l125 167l125 -167h-75v-800h75l-125 -167zM300 900v300h150h700h150v-300h-50q0 29 -8 48.5t-18.5 30t-33.5 15t-39.5 5.5t-50.5 1h-200v-850l100 -50v-100h-400v100l100 50v850h-200q-34 0 -50.5 -1t-40 -5.5t-33.5 -15t-18.5 -30t-8.5 -48.5h-49z " />
<glyph unicode="&#xe051;" d="M33 51l167 125v-75h800v75l167 -125l-167 -125v75h-800v-75zM100 901v300h150h700h150v-300h-50q0 29 -8 48.5t-18 30t-33.5 15t-40 5.5t-50.5 1h-200v-650l100 -50v-100h-400v100l100 50v650h-200q-34 0 -50.5 -1t-39.5 -5.5t-33.5 -15t-18.5 -30t-8 -48.5h-50z" />
<glyph unicode="&#xe052;" d="M0 50q0 -20 14.5 -35t35.5 -15h1100q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-1100q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM0 350q0 -20 14.5 -35t35.5 -15h800q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-800q-21 0 -35.5 -14.5t-14.5 -35.5 v-100zM0 650q0 -20 14.5 -35t35.5 -15h1000q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-1000q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM0 950q0 -20 14.5 -35t35.5 -15h600q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-600q-21 0 -35.5 -14.5 t-14.5 -35.5v-100z" />
<glyph unicode="&#xe053;" d="M0 50q0 -20 14.5 -35t35.5 -15h1100q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-1100q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM0 650q0 -20 14.5 -35t35.5 -15h1100q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-1100q-21 0 -35.5 -14.5t-14.5 -35.5 v-100zM200 350q0 -20 14.5 -35t35.5 -15h700q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-700q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM200 950q0 -20 14.5 -35t35.5 -15h700q21 0 35.5 15t14.5 35v100q0 21 -14.5 35.5t-35.5 14.5h-700q-21 0 -35.5 -14.5 t-14.5 -35.5v-100z" />
<glyph unicode="&#xe054;" d="M0 50v100q0 21 14.5 35.5t35.5 14.5h1100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-1100q-21 0 -35.5 15t-14.5 35zM100 650v100q0 21 14.5 35.5t35.5 14.5h1000q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-1000q-21 0 -35.5 15 t-14.5 35zM300 350v100q0 21 14.5 35.5t35.5 14.5h800q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-800q-21 0 -35.5 15t-14.5 35zM500 950v100q0 21 14.5 35.5t35.5 14.5h600q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-600 q-21 0 -35.5 15t-14.5 35z" />
<glyph unicode="&#xe055;" d="M0 50v100q0 21 14.5 35.5t35.5 14.5h1100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-1100q-21 0 -35.5 15t-14.5 35zM0 350v100q0 21 14.5 35.5t35.5 14.5h1100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-1100q-21 0 -35.5 15 t-14.5 35zM0 650v100q0 21 14.5 35.5t35.5 14.5h1100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-1100q-21 0 -35.5 15t-14.5 35zM0 950v100q0 21 14.5 35.5t35.5 14.5h1100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-1100 q-21 0 -35.5 15t-14.5 35z" />
<glyph unicode="&#xe056;" d="M0 50v100q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-100q-21 0 -35.5 15t-14.5 35zM0 350v100q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-100q-21 0 -35.5 15 t-14.5 35zM0 650v100q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-100q-21 0 -35.5 15t-14.5 35zM0 950v100q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-100q-21 0 -35.5 15 t-14.5 35zM300 50v100q0 21 14.5 35.5t35.5 14.5h800q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-800q-21 0 -35.5 15t-14.5 35zM300 350v100q0 21 14.5 35.5t35.5 14.5h800q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-800 q-21 0 -35.5 15t-14.5 35zM300 650v100q0 21 14.5 35.5t35.5 14.5h800q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15h-800q-21 0 -35.5 15t-14.5 35zM300 950v100q0 21 14.5 35.5t35.5 14.5h800q21 0 35.5 -14.5t14.5 -35.5v-100q0 -20 -14.5 -35t-35.5 -15 h-800q-21 0 -35.5 15t-14.5 35z" />
<glyph unicode="&#xe057;" d="M-101 500v100h201v75l166 -125l-166 -125v75h-201zM300 0h100v1100h-100v-1100zM500 50q0 -20 14.5 -35t35.5 -15h600q20 0 35 15t15 35v100q0 21 -15 35.5t-35 14.5h-600q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM500 350q0 -20 14.5 -35t35.5 -15h300q20 0 35 15t15 35 v100q0 21 -15 35.5t-35 14.5h-300q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM500 650q0 -20 14.5 -35t35.5 -15h500q20 0 35 15t15 35v100q0 21 -15 35.5t-35 14.5h-500q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM500 950q0 -20 14.5 -35t35.5 -15h100q20 0 35 15t15 35v100 q0 21 -15 35.5t-35 14.5h-100q-21 0 -35.5 -14.5t-14.5 -35.5v-100z" />
<glyph unicode="&#xe058;" d="M1 50q0 -20 14.5 -35t35.5 -15h600q20 0 35 15t15 35v100q0 21 -15 35.5t-35 14.5h-600q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM1 350q0 -20 14.5 -35t35.5 -15h300q20 0 35 15t15 35v100q0 21 -15 35.5t-35 14.5h-300q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM1 650 q0 -20 14.5 -35t35.5 -15h500q20 0 35 15t15 35v100q0 21 -15 35.5t-35 14.5h-500q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM1 950q0 -20 14.5 -35t35.5 -15h100q20 0 35 15t15 35v100q0 21 -15 35.5t-35 14.5h-100q-21 0 -35.5 -14.5t-14.5 -35.5v-100zM801 0v1100h100v-1100 h-100zM934 550l167 -125v75h200v100h-200v75z" />
<glyph unicode="&#xe059;" d="M0 275v650q0 31 22 53t53 22h750q31 0 53 -22t22 -53v-650q0 -31 -22 -53t-53 -22h-750q-31 0 -53 22t-22 53zM900 600l300 300v-600z" />
<glyph unicode="&#xe060;" d="M0 44v1012q0 18 13 31t31 13h1112q19 0 31.5 -13t12.5 -31v-1012q0 -18 -12.5 -31t-31.5 -13h-1112q-18 0 -31 13t-13 31zM100 263l247 182l298 -131l-74 156l293 318l236 -288v500h-1000v-737zM208 750q0 56 39 95t95 39t95 -39t39 -95t-39 -95t-95 -39t-95 39t-39 95z " />
<glyph unicode="&#xe062;" d="M148 745q0 124 60.5 231.5t165 172t226.5 64.5q123 0 227 -63t164.5 -169.5t60.5 -229.5t-73 -272q-73 -114 -166.5 -237t-150.5 -189l-57 -66q-10 9 -27 26t-66.5 70.5t-96 109t-104 135.5t-100.5 155q-63 139 -63 262zM342 772q0 -107 75.5 -182.5t181.5 -75.5 q107 0 182.5 75.5t75.5 182.5t-75.5 182t-182.5 75t-182 -75.5t-75 -181.5z" />
<glyph unicode="&#xe063;" d="M1 600q0 122 47.5 233t127.5 191t191 127.5t233 47.5t233 -47.5t191 -127.5t127.5 -191t47.5 -233t-47.5 -233t-127.5 -191t-191 -127.5t-233 -47.5t-233 47.5t-191 127.5t-127.5 191t-47.5 233zM173 600q0 -177 125.5 -302t301.5 -125v854q-176 0 -301.5 -125 t-125.5 -302z" />
<glyph unicode="&#xe064;" d="M117 406q0 94 34 186t88.5 172.5t112 159t115 177t87.5 194.5q21 -71 57.5 -142.5t76 -130.5t83 -118.5t82 -117t70 -116t50 -125.5t18.5 -136q0 -89 -39 -165.5t-102 -126.5t-140 -79.5t-156 -33.5q-114 6 -211.5 53t-161.5 138.5t-64 210.5zM243 414q14 -82 59.5 -136 t136.5 -80l16 98q-7 6 -18 17t-34 48t-33 77q-15 73 -14 143.5t10 122.5l9 51q-92 -110 -119.5 -185t-12.5 -156z" />
<glyph unicode="&#xe065;" d="M0 400v300q0 165 117.5 282.5t282.5 117.5q366 -6 397 -14l-186 -186h-311q-41 0 -70.5 -29.5t-29.5 -70.5v-500q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5v125l200 200v-225q0 -165 -117.5 -282.5t-282.5 -117.5h-300q-165 0 -282.5 117.5 t-117.5 282.5zM436 341l161 50l412 412l-114 113l-405 -405zM995 1015l113 -113l113 113l-21 85l-92 28z" />
<glyph unicode="&#xe066;" d="M0 400v300q0 165 117.5 282.5t282.5 117.5h261l2 -80q-133 -32 -218 -120h-145q-41 0 -70.5 -29.5t-29.5 -70.5v-500q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5l200 153v-53q0 -165 -117.5 -282.5t-282.5 -117.5h-300q-165 0 -282.5 117.5t-117.5 282.5 zM423 524q30 38 81.5 64t103 35.5t99 14t77.5 3.5l29 -1v-209l360 324l-359 318v-216q-7 0 -19 -1t-48 -8t-69.5 -18.5t-76.5 -37t-76.5 -59t-62 -88t-39.5 -121.5z" />
<glyph unicode="&#xe067;" d="M0 400v300q0 165 117.5 282.5t282.5 117.5h300q60 0 127 -23l-178 -177h-349q-41 0 -70.5 -29.5t-29.5 -70.5v-500q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5v69l200 200v-169q0 -165 -117.5 -282.5t-282.5 -117.5h-300q-165 0 -282.5 117.5 t-117.5 282.5zM342 632l283 -284l566 567l-136 137l-430 -431l-147 147z" />
<glyph unicode="&#xe068;" d="M0 603l300 296v-198h200v200h-200l300 300l295 -300h-195v-200h200v198l300 -296l-300 -300v198h-200v-200h195l-295 -300l-300 300h200v200h-200v-198z" />
<glyph unicode="&#xe069;" d="M200 50v1000q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-437l500 487v-1100l-500 488v-438q0 -21 -14.5 -35.5t-35.5 -14.5h-100q-21 0 -35.5 14.5t-14.5 35.5z" />
<glyph unicode="&#xe070;" d="M0 50v1000q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-437l500 487v-487l500 487v-1100l-500 488v-488l-500 488v-438q0 -21 -14.5 -35.5t-35.5 -14.5h-100q-21 0 -35.5 14.5t-14.5 35.5z" />
<glyph unicode="&#xe071;" d="M136 550l564 550v-487l500 487v-1100l-500 488v-488z" />
<glyph unicode="&#xe072;" d="M200 0l900 550l-900 550v-1100z" />
<glyph unicode="&#xe073;" d="M200 150q0 -21 14.5 -35.5t35.5 -14.5h200q21 0 35.5 14.5t14.5 35.5v800q0 21 -14.5 35.5t-35.5 14.5h-200q-21 0 -35.5 -14.5t-14.5 -35.5v-800zM600 150q0 -21 14.5 -35.5t35.5 -14.5h200q21 0 35.5 14.5t14.5 35.5v800q0 21 -14.5 35.5t-35.5 14.5h-200 q-21 0 -35.5 -14.5t-14.5 -35.5v-800z" />
<glyph unicode="&#xe074;" d="M200 150q0 -20 14.5 -35t35.5 -15h800q21 0 35.5 15t14.5 35v800q0 21 -14.5 35.5t-35.5 14.5h-800q-21 0 -35.5 -14.5t-14.5 -35.5v-800z" />
<glyph unicode="&#xe075;" d="M0 0v1100l500 -487v487l564 -550l-564 -550v488z" />
<glyph unicode="&#xe076;" d="M0 0v1100l500 -487v487l500 -487v437q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-1000q0 -21 -14.5 -35.5t-35.5 -14.5h-100q-21 0 -35.5 14.5t-14.5 35.5v438l-500 -488v488z" />
<glyph unicode="&#xe077;" d="M300 0v1100l500 -487v437q0 21 14.5 35.5t35.5 14.5h100q21 0 35.5 -14.5t14.5 -35.5v-1000q0 -21 -14.5 -35.5t-35.5 -14.5h-100q-21 0 -35.5 14.5t-14.5 35.5v438z" />
<glyph unicode="&#xe078;" d="M100 250v100q0 21 14.5 35.5t35.5 14.5h1000q21 0 35.5 -14.5t14.5 -35.5v-100q0 -21 -14.5 -35.5t-35.5 -14.5h-1000q-21 0 -35.5 14.5t-14.5 35.5zM100 500h1100l-550 564z" />
<glyph unicode="&#xe079;" d="M185 599l592 -592l240 240l-353 353l353 353l-240 240z" />
<glyph unicode="&#xe080;" d="M272 194l353 353l-353 353l241 240l572 -571l21 -22l-1 -1v-1l-592 -591z" />
<glyph unicode="&#xe081;" d="M3 600q0 162 80 299.5t217.5 217.5t299.5 80t299.5 -80t217.5 -217.5t80 -299.5t-80 -300t-217.5 -218t-299.5 -80t-299.5 80t-217.5 218t-80 300zM300 500h200v-200h200v200h200v200h-200v200h-200v-200h-200v-200z" />
<glyph unicode="&#xe082;" d="M3 600q0 162 80 299.5t217.5 217.5t299.5 80t299.5 -80t217.5 -217.5t80 -299.5t-80 -300t-217.5 -218t-299.5 -80t-299.5 80t-217.5 218t-80 300zM300 500h600v200h-600v-200z" />
<glyph unicode="&#xe083;" d="M3 600q0 162 80 299.5t217.5 217.5t299.5 80t299.5 -80t217.5 -217.5t80 -299.5t-80 -300t-217.5 -218t-299.5 -80t-299.5 80t-217.5 218t-80 300zM246 459l213 -213l141 142l141 -142l213 213l-142 141l142 141l-213 212l-141 -141l-141 142l-212 -213l141 -141z" />
<glyph unicode="&#xe084;" d="M3 600q0 162 80 299.5t217.5 217.5t299.5 80t299.5 -80t217.5 -217.5t80 -299.5t-80 -299.5t-217.5 -217.5t-299.5 -80t-299.5 80t-217.5 217.5t-80 299.5zM270 551l276 -277l411 411l-175 174l-236 -236l-102 102z" />
<glyph unicode="&#xe085;" d="M3 600q0 162 80 299.5t217.5 217.5t299.5 80t299.5 -80t217.5 -217.5t80 -299.5t-80 -300t-217.5 -218t-299.5 -80t-299.5 80t-217.5 218t-80 300zM363 700h144q4 0 11.5 -1t11 -1t6.5 3t3 9t1 11t3.5 8.5t3.5 6t5.5 4t6.5 2.5t9 1.5t9 0.5h11.5h12.5q19 0 30 -10t11 -26 q0 -22 -4 -28t-27 -22q-5 -1 -12.5 -3t-27 -13.5t-34 -27t-26.5 -46t-11 -68.5h200q5 3 14 8t31.5 25.5t39.5 45.5t31 69t14 94q0 51 -17.5 89t-42 58t-58.5 32t-58.5 15t-51.5 3q-105 0 -172 -56t-67 -183zM500 300h200v100h-200v-100z" />
<glyph unicode="&#xe086;" d="M3 600q0 162 80 299.5t217.5 217.5t299.5 80t299.5 -80t217.5 -217.5t80 -299.5t-80 -300t-217.5 -218t-299.5 -80t-299.5 80t-217.5 218t-80 300zM400 300h400v100h-100v300h-300v-100h100v-200h-100v-100zM500 800h200v100h-200v-100z" />
<glyph unicode="&#xe087;" d="M0 500v200h194q15 60 36 104.5t55.5 86t88 69t126.5 40.5v200h200v-200q54 -20 113 -60t112.5 -105.5t71.5 -134.5h203v-200h-203q-25 -102 -116.5 -186t-180.5 -117v-197h-200v197q-140 27 -208 102.5t-98 200.5h-194zM290 500q24 -73 79.5 -127.5t130.5 -78.5v206h200 v-206q149 48 201 206h-201v200h200q-25 74 -76 127.5t-124 76.5v-204h-200v203q-75 -24 -130 -77.5t-79 -125.5h209v-200h-210z" />
<glyph unicode="&#xe088;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM356 465l135 135 l-135 135l109 109l135 -135l135 135l109 -109l-135 -135l135 -135l-109 -109l-135 135l-135 -135z" />
<glyph unicode="&#xe089;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM322 537l141 141 l87 -87l204 205l142 -142l-346 -345z" />
<glyph unicode="&#xe090;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -115 62 -215l568 567q-100 62 -216 62q-171 0 -292.5 -121.5t-121.5 -292.5zM391 245q97 -59 209 -59q171 0 292.5 121.5t121.5 292.5 q0 112 -59 209z" />
<glyph unicode="&#xe091;" d="M0 547l600 453v-300h600v-300h-600v-301z" />
<glyph unicode="&#xe092;" d="M0 400v300h600v300l600 -453l-600 -448v301h-600z" />
<glyph unicode="&#xe093;" d="M204 600l450 600l444 -600h-298v-600h-300v600h-296z" />
<glyph unicode="&#xe094;" d="M104 600h296v600h300v-600h298l-449 -600z" />
<glyph unicode="&#xe095;" d="M0 200q6 132 41 238.5t103.5 193t184 138t271.5 59.5v271l600 -453l-600 -448v301q-95 -2 -183 -20t-170 -52t-147 -92.5t-100 -135.5z" />
<glyph unicode="&#xe096;" d="M0 0v400l129 -129l294 294l142 -142l-294 -294l129 -129h-400zM635 777l142 -142l294 294l129 -129v400h-400l129 -129z" />
<glyph unicode="&#xe097;" d="M34 176l295 295l-129 129h400v-400l-129 130l-295 -295zM600 600v400l129 -129l295 295l142 -141l-295 -295l129 -130h-400z" />
<glyph unicode="&#xe101;" d="M23 600q0 118 45.5 224.5t123 184t184 123t224.5 45.5t224.5 -45.5t184 -123t123 -184t45.5 -224.5t-45.5 -224.5t-123 -184t-184 -123t-224.5 -45.5t-224.5 45.5t-184 123t-123 184t-45.5 224.5zM456 851l58 -302q4 -20 21.5 -34.5t37.5 -14.5h54q20 0 37.5 14.5 t21.5 34.5l58 302q4 20 -8 34.5t-33 14.5h-207q-20 0 -32 -14.5t-8 -34.5zM500 300h200v100h-200v-100z" />
<glyph unicode="&#xe102;" d="M0 800h100v-200h400v300h200v-300h400v200h100v100h-111v6t-1 15t-3 18l-34 172q-11 39 -41.5 63t-69.5 24q-32 0 -61 -17l-239 -144q-22 -13 -40 -35q-19 24 -40 36l-238 144q-33 18 -62 18q-39 0 -69.5 -23t-40.5 -61l-35 -177q-2 -8 -3 -18t-1 -15v-6h-111v-100z M100 0h400v400h-400v-400zM200 900q-3 0 14 48t35 96l18 47l214 -191h-281zM700 0v400h400v-400h-400zM731 900l202 197q5 -12 12 -32.5t23 -64t25 -72t7 -28.5h-269z" />
<glyph unicode="&#xe103;" d="M0 -22v143l216 193q-9 53 -13 83t-5.5 94t9 113t38.5 114t74 124q47 60 99.5 102.5t103 68t127.5 48t145.5 37.5t184.5 43.5t220 58.5q0 -189 -22 -343t-59 -258t-89 -181.5t-108.5 -120t-122 -68t-125.5 -30t-121.5 -1.5t-107.5 12.5t-87.5 17t-56.5 7.5l-99 -55z M238.5 300.5q19.5 -6.5 86.5 76.5q55 66 367 234q70 38 118.5 69.5t102 79t99 111.5t86.5 148q22 50 24 60t-6 19q-7 5 -17 5t-26.5 -14.5t-33.5 -39.5q-35 -51 -113.5 -108.5t-139.5 -89.5l-61 -32q-369 -197 -458 -401q-48 -111 -28.5 -117.5z" />
<glyph unicode="&#xe104;" d="M111 408q0 -33 5 -63q9 -56 44 -119.5t105 -108.5q31 -21 64 -16t62 23.5t57 49.5t48 61.5t35 60.5q32 66 39 184.5t-13 157.5q79 -80 122 -164t26 -184q-5 -33 -20.5 -69.5t-37.5 -80.5q-10 -19 -14.5 -29t-12 -26t-9 -23.5t-3 -19t2.5 -15.5t11 -9.5t19.5 -5t30.5 2.5 t42 8q57 20 91 34t87.5 44.5t87 64t65.5 88.5t47 122q38 172 -44.5 341.5t-246.5 278.5q22 -44 43 -129q39 -159 -32 -154q-15 2 -33 9q-79 33 -120.5 100t-44 175.5t48.5 257.5q-13 -8 -34 -23.5t-72.5 -66.5t-88.5 -105.5t-60 -138t-8 -166.5q2 -12 8 -41.5t8 -43t6 -39.5 t3.5 -39.5t-1 -33.5t-6 -31.5t-13.5 -24t-21 -20.5t-31 -12q-38 -10 -67 13t-40.5 61.5t-15 81.5t10.5 75q-52 -46 -83.5 -101t-39 -107t-7.5 -85z" />
<glyph unicode="&#xe105;" d="M-61 600l26 40q6 10 20 30t49 63.5t74.5 85.5t97 90t116.5 83.5t132.5 59t145.5 23.5t145.5 -23.5t132.5 -59t116.5 -83.5t97 -90t74.5 -85.5t49 -63.5t20 -30l26 -40l-26 -40q-6 -10 -20 -30t-49 -63.5t-74.5 -85.5t-97 -90t-116.5 -83.5t-132.5 -59t-145.5 -23.5 t-145.5 23.5t-132.5 59t-116.5 83.5t-97 90t-74.5 85.5t-49 63.5t-20 30zM120 600q7 -10 40.5 -58t56 -78.5t68 -77.5t87.5 -75t103 -49.5t125 -21.5t123.5 20t100.5 45.5t85.5 71.5t66.5 75.5t58 81.5t47 66q-1 1 -28.5 37.5t-42 55t-43.5 53t-57.5 63.5t-58.5 54 q49 -74 49 -163q0 -124 -88 -212t-212 -88t-212 88t-88 212q0 85 46 158q-102 -87 -226 -258zM377 656q49 -124 154 -191l105 105q-37 24 -75 72t-57 84l-20 36z" />
<glyph unicode="&#xe106;" d="M-61 600l26 40q6 10 20 30t49 63.5t74.5 85.5t97 90t116.5 83.5t132.5 59t145.5 23.5q61 0 121 -17l37 142h148l-314 -1200h-148l37 143q-82 21 -165 71.5t-140 102t-109.5 112t-72 88.5t-29.5 43zM120 600q210 -282 393 -336l37 141q-107 18 -178.5 101.5t-71.5 193.5 q0 85 46 158q-102 -87 -226 -258zM377 656q49 -124 154 -191l47 47l23 87q-30 28 -59 69t-44 68l-14 26zM780 161l38 145q22 15 44.5 34t46 44t40.5 44t41 50.5t33.5 43.5t33 44t24.5 34q-97 127 -140 175l39 146q67 -54 131.5 -125.5t87.5 -103.5t36 -52l26 -40l-26 -40 q-7 -12 -25.5 -38t-63.5 -79.5t-95.5 -102.5t-124 -100t-146.5 -79z" />
<glyph unicode="&#xe107;" d="M-97.5 34q13.5 -34 50.5 -34h1294q37 0 50.5 35.5t-7.5 67.5l-642 1056q-20 33 -48 36t-48 -29l-642 -1066q-21 -32 -7.5 -66zM155 200l445 723l445 -723h-345v100h-200v-100h-345zM500 600l100 -300l100 300v100h-200v-100z" />
<glyph unicode="&#xe108;" d="M100 262v41q0 20 11 44.5t26 38.5l363 325v339q0 62 44 106t106 44t106 -44t44 -106v-339l363 -325q15 -14 26 -38.5t11 -44.5v-41q0 -20 -12 -26.5t-29 5.5l-359 249v-263q100 -91 100 -113v-64q0 -21 -13 -29t-32 1l-94 78h-222l-94 -78q-19 -9 -32 -1t-13 29v64 q0 22 100 113v263l-359 -249q-17 -12 -29 -5.5t-12 26.5z" />
<glyph unicode="&#xe109;" d="M0 50q0 -20 14.5 -35t35.5 -15h1000q21 0 35.5 15t14.5 35v750h-1100v-750zM0 900h1100v150q0 21 -14.5 35.5t-35.5 14.5h-150v100h-100v-100h-500v100h-100v-100h-150q-21 0 -35.5 -14.5t-14.5 -35.5v-150zM100 100v100h100v-100h-100zM100 300v100h100v-100h-100z M100 500v100h100v-100h-100zM300 100v100h100v-100h-100zM300 300v100h100v-100h-100zM300 500v100h100v-100h-100zM500 100v100h100v-100h-100zM500 300v100h100v-100h-100zM500 500v100h100v-100h-100zM700 100v100h100v-100h-100zM700 300v100h100v-100h-100zM700 500 v100h100v-100h-100zM900 100v100h100v-100h-100zM900 300v100h100v-100h-100zM900 500v100h100v-100h-100z" />
<glyph unicode="&#xe110;" d="M0 200v200h259l600 600h241v198l300 -295l-300 -300v197h-159l-600 -600h-341zM0 800h259l122 -122l141 142l-181 180h-341v-200zM678 381l141 142l122 -123h159v198l300 -295l-300 -300v197h-241z" />
<glyph unicode="&#xe111;" d="M0 400v600q0 41 29.5 70.5t70.5 29.5h1000q41 0 70.5 -29.5t29.5 -70.5v-600q0 -41 -29.5 -70.5t-70.5 -29.5h-596l-304 -300v300h-100q-41 0 -70.5 29.5t-29.5 70.5z" />
<glyph unicode="&#xe112;" d="M100 600v200h300v-250q0 -113 6 -145q17 -92 102 -117q39 -11 92 -11q37 0 66.5 5.5t50 15.5t36 24t24 31.5t14 37.5t7 42t2.5 45t0 47v25v250h300v-200q0 -42 -3 -83t-15 -104t-31.5 -116t-58 -109.5t-89 -96.5t-129 -65.5t-174.5 -25.5t-174.5 25.5t-129 65.5t-89 96.5 t-58 109.5t-31.5 116t-15 104t-3 83zM100 900v300h300v-300h-300zM800 900v300h300v-300h-300z" />
<glyph unicode="&#xe113;" d="M-30 411l227 -227l352 353l353 -353l226 227l-578 579z" />
<glyph unicode="&#xe114;" d="M70 797l580 -579l578 579l-226 227l-353 -353l-352 353z" />
<glyph unicode="&#xe115;" d="M-198 700l299 283l300 -283h-203v-400h385l215 -200h-800v600h-196zM402 1000l215 -200h381v-400h-198l299 -283l299 283h-200v600h-796z" />
<glyph unicode="&#xe116;" d="M18 939q-5 24 10 42q14 19 39 19h896l38 162q5 17 18.5 27.5t30.5 10.5h94q20 0 35 -14.5t15 -35.5t-15 -35.5t-35 -14.5h-54l-201 -961q-2 -4 -6 -10.5t-19 -17.5t-33 -11h-31v-50q0 -20 -14.5 -35t-35.5 -15t-35.5 15t-14.5 35v50h-300v-50q0 -20 -14.5 -35t-35.5 -15 t-35.5 15t-14.5 35v50h-50q-21 0 -35.5 15t-14.5 35q0 21 14.5 35.5t35.5 14.5h535l48 200h-633q-32 0 -54.5 21t-27.5 43z" />
<glyph unicode="&#xe117;" d="M0 0v800h1200v-800h-1200zM0 900v100h200q0 41 29.5 70.5t70.5 29.5h300q41 0 70.5 -29.5t29.5 -70.5h500v-100h-1200z" />
<glyph unicode="&#xe118;" d="M1 0l300 700h1200l-300 -700h-1200zM1 400v600h200q0 41 29.5 70.5t70.5 29.5h300q41 0 70.5 -29.5t29.5 -70.5h500v-200h-1000z" />
<glyph unicode="&#xe119;" d="M302 300h198v600h-198l298 300l298 -300h-198v-600h198l-298 -300z" />
<glyph unicode="&#xe120;" d="M0 600l300 298v-198h600v198l300 -298l-300 -297v197h-600v-197z" />
<glyph unicode="&#xe121;" d="M0 100v100q0 41 29.5 70.5t70.5 29.5h1000q41 0 70.5 -29.5t29.5 -70.5v-100q0 -41 -29.5 -70.5t-70.5 -29.5h-1000q-41 0 -70.5 29.5t-29.5 70.5zM31 400l172 739q5 22 23 41.5t38 19.5h672q19 0 37.5 -22.5t23.5 -45.5l172 -732h-1138zM800 100h100v100h-100v-100z M1000 100h100v100h-100v-100z" />
<glyph unicode="&#xe122;" d="M-101 600v50q0 24 25 49t50 38l25 13v-250l-11 5.5t-24 14t-30 21.5t-24 27.5t-11 31.5zM99 500v250v5q0 13 0.5 18.5t2.5 13t8 10.5t15 3h200l675 250v-850l-675 200h-38l47 -276q2 -12 -3 -17.5t-11 -6t-21 -0.5h-8h-83q-20 0 -34.5 14t-18.5 35q-56 337 -56 351z M1100 200v850q0 21 14.5 35.5t35.5 14.5q20 0 35 -14.5t15 -35.5v-850q0 -20 -15 -35t-35 -15q-21 0 -35.5 15t-14.5 35z" />
<glyph unicode="&#xe123;" d="M74 350q0 21 13.5 35.5t33.5 14.5h17l118 173l63 327q15 77 76 140t144 83l-18 32q-6 19 3 32t29 13h94q20 0 29 -10.5t3 -29.5l-18 -37q83 -19 144 -82.5t76 -140.5l63 -327l118 -173h17q20 0 33.5 -14.5t13.5 -35.5q0 -20 -13 -40t-31 -27q-22 -9 -63 -23t-167.5 -37 t-251.5 -23t-245.5 20.5t-178.5 41.5l-58 20q-18 7 -31 27.5t-13 40.5zM497 110q12 -49 40 -79.5t63 -30.5t63 30.5t39 79.5q-48 -6 -102 -6t-103 6z" />
<glyph unicode="&#xe124;" d="M21 445l233 -45l-78 -224l224 78l45 -233l155 179l155 -179l45 233l224 -78l-78 224l234 45l-180 155l180 156l-234 44l78 225l-224 -78l-45 233l-155 -180l-155 180l-45 -233l-224 78l78 -225l-233 -44l179 -156z" />
<glyph unicode="&#xe125;" d="M0 200h200v600h-200v-600zM300 275q0 -75 100 -75h61q123 -100 139 -100h250q46 0 83 57l238 344q29 31 29 74v100q0 44 -30.5 84.5t-69.5 40.5h-328q28 118 28 125v150q0 44 -30.5 84.5t-69.5 40.5h-50q-27 0 -51 -20t-38 -48l-96 -198l-145 -196q-20 -26 -20 -63v-400z M400 300v375l150 212l100 213h50v-175l-50 -225h450v-125l-250 -375h-214l-136 100h-100z" />
<glyph unicode="&#xe126;" d="M0 400v600h200v-600h-200zM300 525v400q0 75 100 75h61q123 100 139 100h250q46 0 83 -57l238 -344q29 -31 29 -74v-100q0 -44 -30.5 -84.5t-69.5 -40.5h-328q28 -118 28 -125v-150q0 -44 -30.5 -84.5t-69.5 -40.5h-50q-27 0 -51 20t-38 48l-96 198l-145 196 q-20 26 -20 63zM400 525l150 -212l100 -213h50v175l-50 225h450v125l-250 375h-214l-136 -100h-100v-375z" />
<glyph unicode="&#xe127;" d="M8 200v600h200v-600h-200zM308 275v525q0 17 14 35.5t28 28.5l14 9l362 230q14 6 25 6q17 0 29 -12l109 -112q14 -14 14 -34q0 -18 -11 -32l-85 -121h302q85 0 138.5 -38t53.5 -110t-54.5 -111t-138.5 -39h-107l-130 -339q-7 -22 -20.5 -41.5t-28.5 -19.5h-341 q-7 0 -90 81t-83 94zM408 289l100 -89h293l131 339q6 21 19.5 41t28.5 20h203q16 0 25 15t9 36q0 20 -9 34.5t-25 14.5h-457h-6.5h-7.5t-6.5 0.5t-6 1t-5 1.5t-5.5 2.5t-4 4t-4 5.5q-5 12 -5 20q0 14 10 27l147 183l-86 83l-339 -236v-503z" />
<glyph unicode="&#xe128;" d="M-101 651q0 72 54 110t139 37h302l-85 121q-11 16 -11 32q0 21 14 34l109 113q13 12 29 12q11 0 25 -6l365 -230q7 -4 16.5 -10.5t26 -26t16.5 -36.5v-526q0 -13 -85.5 -93.5t-93.5 -80.5h-342q-15 0 -28.5 20t-19.5 41l-131 339h-106q-84 0 -139 39t-55 111zM-1 601h222 q15 0 28.5 -20.5t19.5 -40.5l131 -339h293l106 89v502l-342 237l-87 -83l145 -184q10 -11 10 -26q0 -11 -5 -20q-1 -3 -3.5 -5.5l-4 -4t-5 -2.5t-5.5 -1.5t-6.5 -1t-6.5 -0.5h-7.5h-6.5h-476v-100zM999 201v600h200v-600h-200z" />
<glyph unicode="&#xe129;" d="M97 719l230 -363q4 -6 10.5 -15.5t26 -25t36.5 -15.5h525q13 0 94 83t81 90v342q0 15 -20 28.5t-41 19.5l-339 131v106q0 84 -39 139t-111 55t-110 -53.5t-38 -138.5v-302l-121 84q-15 12 -33.5 11.5t-32.5 -13.5l-112 -110q-22 -22 -6 -53zM172 739l83 86l183 -146 q22 -18 47 -5q3 1 5.5 3.5l4 4t2.5 5t1.5 5.5t1 6.5t0.5 6v7.5v7v456q0 22 25 31t50 -0.5t25 -30.5v-202q0 -16 20 -29.5t41 -19.5l339 -130v-294l-89 -100h-503zM400 0v200h600v-200h-600z" />
<glyph unicode="&#xe130;" d="M1 585q-15 -31 7 -53l112 -110q13 -13 32 -13.5t34 10.5l121 85l-1 -302q0 -84 38.5 -138t110.5 -54t111 55t39 139v106l339 131q20 6 40.5 19.5t20.5 28.5v342q0 7 -81 90t-94 83h-525q-17 0 -35.5 -14t-28.5 -28l-10 -15zM76 565l237 339h503l89 -100v-294l-340 -130 q-20 -6 -40 -20t-20 -29v-202q0 -22 -25 -31t-50 0t-25 31v456v14.5t-1.5 11.5t-5 12t-9.5 7q-24 13 -46 -5l-184 -146zM305 1104v200h600v-200h-600z" />
<glyph unicode="&#xe131;" d="M5 597q0 122 47.5 232.5t127.5 190.5t190.5 127.5t232.5 47.5q162 0 299.5 -80t217.5 -218t80 -300t-80 -299.5t-217.5 -217.5t-299.5 -80t-300 80t-218 217.5t-80 299.5zM300 500h300l-2 -194l402 294l-402 298v-197h-298v-201z" />
<glyph unicode="&#xe132;" d="M0 597q0 122 47.5 232.5t127.5 190.5t190.5 127.5t231.5 47.5q122 0 232.5 -47.5t190.5 -127.5t127.5 -190.5t47.5 -232.5q0 -162 -80 -299.5t-218 -217.5t-300 -80t-299.5 80t-217.5 217.5t-80 299.5zM200 600l400 -294v194h302v201h-300v197z" />
<glyph unicode="&#xe133;" d="M5 597q0 122 47.5 232.5t127.5 190.5t190.5 127.5t232.5 47.5q121 0 231.5 -47.5t190.5 -127.5t127.5 -190.5t47.5 -232.5q0 -162 -80 -299.5t-217.5 -217.5t-299.5 -80t-300 80t-218 217.5t-80 299.5zM300 600h200v-300h200v300h200l-300 400z" />
<glyph unicode="&#xe134;" d="M5 597q0 122 47.5 232.5t127.5 190.5t190.5 127.5t232.5 47.5q121 0 231.5 -47.5t190.5 -127.5t127.5 -190.5t47.5 -232.5q0 -162 -80 -299.5t-217.5 -217.5t-299.5 -80t-300 80t-218 217.5t-80 299.5zM300 600l300 -400l300 400h-200v300h-200v-300h-200z" />
<glyph unicode="&#xe135;" d="M5 597q0 122 47.5 232.5t127.5 190.5t190.5 127.5t232.5 47.5q121 0 231.5 -47.5t190.5 -127.5t127.5 -190.5t47.5 -232.5q0 -162 -80 -299.5t-217.5 -217.5t-299.5 -80t-300 80t-218 217.5t-80 299.5zM254 780q-8 -34 5.5 -93t7.5 -87q0 -9 17 -44t16 -60q12 0 23 -5.5 t23 -15t20 -13.5q20 -10 108 -42q22 -8 53 -31.5t59.5 -38.5t57.5 -11q8 -18 -15 -55.5t-20 -57.5q12 -21 22.5 -34.5t28 -27t36.5 -17.5q0 -6 -3 -15.5t-3.5 -14.5t4.5 -17q101 -2 221 111q31 30 47 48t34 49t21 62q-14 9 -37.5 9.5t-35.5 7.5q-14 7 -49 15t-52 19 q-9 0 -39.5 -0.5t-46.5 -1.5t-39 -6.5t-39 -16.5q-50 -35 -66 -12q-4 2 -3.5 25.5t0.5 25.5q-6 13 -26.5 17t-24.5 7q2 22 -2 41t-16.5 28t-38.5 -20q-23 -25 -42 4q-19 28 -8 58q8 16 22 22q6 -1 26 -1.5t33.5 -4.5t19.5 -13q12 -19 32 -37.5t34 -27.5l14 -8q0 3 9.5 39.5 t5.5 57.5q-4 23 14.5 44.5t22.5 31.5q5 14 10 35t8.5 31t15.5 22.5t34 21.5q-6 18 10 37q8 0 23.5 -1.5t24.5 -1.5t20.5 4.5t20.5 15.5q-10 23 -30.5 42.5t-38 30t-49 26.5t-43.5 23q11 41 1 44q31 -13 58.5 -14.5t39.5 3.5l11 4q6 36 -17 53.5t-64 28.5t-56 23 q-19 -3 -37 0q-15 -12 -36.5 -21t-34.5 -12t-44 -8t-39 -6q-15 -3 -46 0t-45 -3q-20 -6 -51.5 -25.5t-34.5 -34.5q-3 -11 6.5 -22.5t8.5 -18.5q-3 -34 -27.5 -91t-29.5 -79zM518 915q3 12 16 30.5t16 25.5q10 -10 18.5 -10t14 6t14.5 14.5t16 12.5q0 -18 8 -42.5t16.5 -44 t9.5 -23.5q-6 1 -39 5t-53.5 10t-36.5 16z" />
<glyph unicode="&#xe136;" d="M0 164.5q0 21.5 15 37.5l600 599q-33 101 6 201.5t135 154.5q164 92 306 -9l-259 -138l145 -232l251 126q13 -175 -151 -267q-123 -70 -253 -23l-596 -596q-15 -16 -36.5 -16t-36.5 16l-111 110q-15 15 -15 36.5z" />
<glyph unicode="&#xe137;" horiz-adv-x="1220" d="M0 196v100q0 41 29.5 70.5t70.5 29.5h1000q41 0 70.5 -29.5t29.5 -70.5v-100q0 -41 -29.5 -70.5t-70.5 -29.5h-1000q-41 0 -70.5 29.5t-29.5 70.5zM0 596v100q0 41 29.5 70.5t70.5 29.5h1000q41 0 70.5 -29.5t29.5 -70.5v-100q0 -41 -29.5 -70.5t-70.5 -29.5h-1000 q-41 0 -70.5 29.5t-29.5 70.5zM0 996v100q0 41 29.5 70.5t70.5 29.5h1000q41 0 70.5 -29.5t29.5 -70.5v-100q0 -41 -29.5 -70.5t-70.5 -29.5h-1000q-41 0 -70.5 29.5t-29.5 70.5zM600 596h500v100h-500v-100zM800 196h300v100h-300v-100zM900 996h200v100h-200v-100z" />
<glyph unicode="&#xe138;" d="M100 1100v100h1000v-100h-1000zM150 1000h900l-350 -500v-300l-200 -200v500z" />
<glyph unicode="&#xe139;" d="M0 200v200h1200v-200q0 -41 -29.5 -70.5t-70.5 -29.5h-1000q-41 0 -70.5 29.5t-29.5 70.5zM0 500v400q0 41 29.5 70.5t70.5 29.5h300v100q0 41 29.5 70.5t70.5 29.5h200q41 0 70.5 -29.5t29.5 -70.5v-100h300q41 0 70.5 -29.5t29.5 -70.5v-400h-500v100h-200v-100h-500z M500 1000h200v100h-200v-100z" />
<glyph unicode="&#xe140;" d="M0 0v400l129 -129l200 200l142 -142l-200 -200l129 -129h-400zM0 800l129 129l200 -200l142 142l-200 200l129 129h-400v-400zM729 329l142 142l200 -200l129 129v-400h-400l129 129zM729 871l200 200l-129 129h400v-400l-129 129l-200 -200z" />
<glyph unicode="&#xe141;" d="M0 596q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM182 596q0 -172 121.5 -293t292.5 -121t292.5 121t121.5 293q0 171 -121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM291 655 q0 23 15.5 38.5t38.5 15.5t39 -16t16 -38q0 -23 -16 -39t-39 -16q-22 0 -38 16t-16 39zM400 850q0 22 16 38.5t39 16.5q22 0 38 -16t16 -39t-16 -39t-38 -16q-23 0 -39 16.5t-16 38.5zM513 609q0 32 21 56.5t52 29.5l122 126l1 1q-9 14 -9 28q0 22 16 38.5t39 16.5 q22 0 38 -16t16 -39t-16 -39t-38 -16q-16 0 -29 10l-55 -145q17 -22 17 -51q0 -36 -25.5 -61.5t-61.5 -25.5q-37 0 -62.5 25.5t-25.5 61.5zM800 655q0 22 16 38t39 16t38.5 -15.5t15.5 -38.5t-16 -39t-38 -16q-23 0 -39 16t-16 39z" />
<glyph unicode="&#xe142;" d="M-40 375q-13 -95 35 -173q35 -57 94 -89t129 -32q63 0 119 28q33 16 65 40.5t52.5 45.5t59.5 64q40 44 57 61l394 394q35 35 47 84t-3 96q-27 87 -117 104q-20 2 -29 2q-46 0 -79.5 -17t-67.5 -51l-388 -396l-7 -7l69 -67l377 373q20 22 39 38q23 23 50 23q38 0 53 -36 q16 -39 -20 -75l-547 -547q-52 -52 -125 -52q-55 0 -100 33t-54 96q-5 35 2.5 66t31.5 63t42 50t56 54q24 21 44 41l348 348q52 52 82.5 79.5t84 54t107.5 26.5q25 0 48 -4q95 -17 154 -94.5t51 -175.5q-7 -101 -98 -192l-252 -249l-253 -256l7 -7l69 -60l517 511 q67 67 95 157t11 183q-16 87 -67 154t-130 103q-69 33 -152 33q-107 0 -197 -55q-40 -24 -111 -95l-512 -512q-68 -68 -81 -163z" />
<glyph unicode="&#xe143;" d="M79 784q0 131 99 229.5t230 98.5q144 0 242 -129q103 129 245 129q130 0 227 -98.5t97 -229.5q0 -46 -17.5 -91t-61 -99t-77 -89.5t-104.5 -105.5q-197 -191 -293 -322l-17 -23l-16 23q-43 58 -100 122.5t-92 99.5t-101 100l-84.5 84.5t-68 74t-60 78t-33.5 70.5t-15 78z M250 784q0 -27 30.5 -70t61.5 -75.5t95 -94.5l22 -22q93 -90 190 -201q82 92 195 203l12 12q64 62 97.5 97t64.5 79t31 72q0 71 -48 119.5t-106 48.5q-73 0 -131 -83l-118 -171l-114 174q-51 80 -124 80q-59 0 -108.5 -49.5t-49.5 -118.5z" />
<glyph unicode="&#xe144;" d="M57 353q0 -94 66 -160l141 -141q66 -66 159 -66q95 0 159 66l283 283q66 66 66 159t-66 159l-141 141q-12 12 -19 17l-105 -105l212 -212l-389 -389l-247 248l95 95l-18 18q-46 45 -75 101l-55 -55q-66 -66 -66 -159zM269 706q0 -93 66 -159l141 -141l19 -17l105 105 l-212 212l389 389l247 -247l-95 -96l18 -18q46 -46 77 -99l29 29q35 35 62.5 88t27.5 96q0 93 -66 159l-141 141q-66 66 -159 66q-95 0 -159 -66l-283 -283q-66 -64 -66 -159z" />
<glyph unicode="&#xe145;" d="M200 100v953q0 21 30 46t81 48t129 38t163 15t162 -15t127 -38t79 -48t29 -46v-953q0 -41 -29.5 -70.5t-70.5 -29.5h-600q-41 0 -70.5 29.5t-29.5 70.5zM300 300h600v700h-600v-700zM496 150q0 -43 30.5 -73.5t73.5 -30.5t73.5 30.5t30.5 73.5t-30.5 73.5t-73.5 30.5 t-73.5 -30.5t-30.5 -73.5z" />
<glyph unicode="&#xe146;" d="M0 0l303 380l207 208l-210 212h300l267 279l-35 36q-15 14 -15 35t15 35q14 15 35 15t35 -15l283 -282q15 -15 15 -36t-15 -35q-14 -15 -35 -15t-35 15l-36 35l-279 -267v-300l-212 210l-208 -207z" />
<glyph unicode="&#xe148;" d="M295 433h139q5 -77 48.5 -126.5t117.5 -64.5v335l-27 7q-46 14 -79 26.5t-72 36t-62.5 52t-40 72.5t-16.5 99q0 92 44 159.5t109 101t144 40.5v78h100v-79q38 -4 72.5 -13.5t75.5 -31.5t71 -53.5t51.5 -84t24.5 -118.5h-159q-8 72 -35 109.5t-101 50.5v-307l64 -14 q34 -7 64 -16.5t70 -31.5t67.5 -52t47.5 -80.5t20 -112.5q0 -139 -89 -224t-244 -96v-77h-100v78q-152 17 -237 104q-40 40 -52.5 93.5t-15.5 139.5zM466 889q0 -29 8 -51t16.5 -34t29.5 -22.5t31 -13.5t38 -10q7 -2 11 -3v274q-61 -8 -97.5 -37.5t-36.5 -102.5zM700 237 q170 18 170 151q0 64 -44 99.5t-126 60.5v-311z" />
<glyph unicode="&#xe149;" d="M100 600v100h166q-24 49 -44 104q-10 26 -14.5 55.5t-3 72.5t25 90t68.5 87q97 88 263 88q129 0 230 -89t101 -208h-153q0 52 -34 89.5t-74 51.5t-76 14q-37 0 -79 -14.5t-62 -35.5q-41 -44 -41 -101q0 -11 2.5 -24.5t5.5 -24t9.5 -26.5t10.5 -25t14 -27.5t14 -25.5 t15.5 -27t13.5 -24h242v-100h-197q8 -50 -2.5 -115t-31.5 -94q-41 -59 -99 -113q35 11 84 18t70 7q32 1 102 -16t104 -17q76 0 136 30l50 -147q-41 -25 -80.5 -36.5t-59 -13t-61.5 -1.5q-23 0 -128 33t-155 29q-39 -4 -82 -17t-66 -25l-24 -11l-55 145l16.5 11t15.5 10 t13.5 9.5t14.5 12t14.5 14t17.5 18.5q48 55 54 126.5t-30 142.5h-221z" />
<glyph unicode="&#xe150;" d="M2 300l298 -300l298 300h-198v900h-200v-900h-198zM602 900l298 300l298 -300h-198v-900h-200v900h-198z" />
<glyph unicode="&#xe151;" d="M2 300h198v900h200v-900h198l-298 -300zM700 0v200h100v-100h200v-100h-300zM700 400v100h300v-200h-99v-100h-100v100h99v100h-200zM700 700v500h300v-500h-100v100h-100v-100h-100zM801 900h100v200h-100v-200z" />
<glyph unicode="&#xe152;" d="M2 300h198v900h200v-900h198l-298 -300zM700 0v500h300v-500h-100v100h-100v-100h-100zM700 700v200h100v-100h200v-100h-300zM700 1100v100h300v-200h-99v-100h-100v100h99v100h-200zM801 200h100v200h-100v-200z" />
<glyph unicode="&#xe153;" d="M2 300l298 -300l298 300h-198v900h-200v-900h-198zM800 100v400h300v-500h-100v100h-200zM800 1100v100h200v-500h-100v400h-100zM901 200h100v200h-100v-200z" />
<glyph unicode="&#xe154;" d="M2 300l298 -300l298 300h-198v900h-200v-900h-198zM800 400v100h200v-500h-100v400h-100zM800 800v400h300v-500h-100v100h-200zM901 900h100v200h-100v-200z" />
<glyph unicode="&#xe155;" d="M2 300l298 -300l298 300h-198v900h-200v-900h-198zM700 100v200h500v-200h-500zM700 400v200h400v-200h-400zM700 700v200h300v-200h-300zM700 1000v200h200v-200h-200z" />
<glyph unicode="&#xe156;" d="M2 300l298 -300l298 300h-198v900h-200v-900h-198zM700 100v200h200v-200h-200zM700 400v200h300v-200h-300zM700 700v200h400v-200h-400zM700 1000v200h500v-200h-500z" />
<glyph unicode="&#xe157;" d="M0 400v300q0 165 117.5 282.5t282.5 117.5h300q162 0 281 -118.5t119 -281.5v-300q0 -165 -118.5 -282.5t-281.5 -117.5h-300q-165 0 -282.5 117.5t-117.5 282.5zM200 300q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5v500q0 41 -29.5 70.5t-70.5 29.5 h-500q-41 0 -70.5 -29.5t-29.5 -70.5v-500z" />
<glyph unicode="&#xe158;" d="M0 400v300q0 163 119 281.5t281 118.5h300q165 0 282.5 -117.5t117.5 -282.5v-300q0 -165 -117.5 -282.5t-282.5 -117.5h-300q-163 0 -281.5 117.5t-118.5 282.5zM200 300q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5v500q0 41 -29.5 70.5t-70.5 29.5 h-500q-41 0 -70.5 -29.5t-29.5 -70.5v-500zM400 300l333 250l-333 250v-500z" />
<glyph unicode="&#xe159;" d="M0 400v300q0 163 117.5 281.5t282.5 118.5h300q163 0 281.5 -119t118.5 -281v-300q0 -165 -117.5 -282.5t-282.5 -117.5h-300q-165 0 -282.5 117.5t-117.5 282.5zM200 300q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5v500q0 41 -29.5 70.5t-70.5 29.5 h-500q-41 0 -70.5 -29.5t-29.5 -70.5v-500zM300 700l250 -333l250 333h-500z" />
<glyph unicode="&#xe160;" d="M0 400v300q0 165 117.5 282.5t282.5 117.5h300q165 0 282.5 -117.5t117.5 -282.5v-300q0 -162 -118.5 -281t-281.5 -119h-300q-165 0 -282.5 118.5t-117.5 281.5zM200 300q0 -41 29.5 -70.5t70.5 -29.5h500q41 0 70.5 29.5t29.5 70.5v500q0 41 -29.5 70.5t-70.5 29.5 h-500q-41 0 -70.5 -29.5t-29.5 -70.5v-500zM300 400h500l-250 333z" />
<glyph unicode="&#xe161;" d="M0 400v300h300v200l400 -350l-400 -350v200h-300zM500 0v200h500q41 0 70.5 29.5t29.5 70.5v500q0 41 -29.5 70.5t-70.5 29.5h-500v200h400q165 0 282.5 -117.5t117.5 -282.5v-300q0 -165 -117.5 -282.5t-282.5 -117.5h-400z" />
<glyph unicode="&#xe162;" d="M216 519q10 -19 32 -19h302q-155 -438 -160 -458q-5 -21 4 -32l9 -8l9 -1q13 0 26 16l538 630q15 19 6 36q-8 18 -32 16h-300q1 4 78 219.5t79 227.5q2 17 -6 27l-8 8h-9q-16 0 -25 -15q-4 -5 -98.5 -111.5t-228 -257t-209.5 -238.5q-17 -19 -7 -40z" />
<glyph unicode="&#xe163;" d="M0 400q0 -165 117.5 -282.5t282.5 -117.5h300q47 0 100 15v185h-500q-41 0 -70.5 29.5t-29.5 70.5v500q0 41 29.5 70.5t70.5 29.5h500v185q-14 4 -114 7.5t-193 5.5l-93 2q-165 0 -282.5 -117.5t-117.5 -282.5v-300zM600 400v300h300v200l400 -350l-400 -350v200h-300z " />
<glyph unicode="&#xe164;" d="M0 400q0 -165 117.5 -282.5t282.5 -117.5h300q163 0 281.5 117.5t118.5 282.5v98l-78 73l-122 -123v-148q0 -41 -29.5 -70.5t-70.5 -29.5h-500q-41 0 -70.5 29.5t-29.5 70.5v500q0 41 29.5 70.5t70.5 29.5h156l118 122l-74 78h-100q-165 0 -282.5 -117.5t-117.5 -282.5 v-300zM496 709l353 342l-149 149h500v-500l-149 149l-342 -353z" />
<glyph unicode="&#xe165;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM406 600 q0 80 57 137t137 57t137 -57t57 -137t-57 -137t-137 -57t-137 57t-57 137z" />
<glyph unicode="&#xe166;" d="M0 0v275q0 11 7 18t18 7h1048q11 0 19 -7.5t8 -17.5v-275h-1100zM100 800l445 -500l450 500h-295v400h-300v-400h-300zM900 150h100v50h-100v-50z" />
<glyph unicode="&#xe167;" d="M0 0v275q0 11 7 18t18 7h1048q11 0 19 -7.5t8 -17.5v-275h-1100zM100 700h300v-300h300v300h295l-445 500zM900 150h100v50h-100v-50z" />
<glyph unicode="&#xe168;" d="M0 0v275q0 11 7 18t18 7h1048q11 0 19 -7.5t8 -17.5v-275h-1100zM100 705l305 -305l596 596l-154 155l-442 -442l-150 151zM900 150h100v50h-100v-50z" />
<glyph unicode="&#xe169;" d="M0 0v275q0 11 7 18t18 7h1048q11 0 19 -7.5t8 -17.5v-275h-1100zM100 988l97 -98l212 213l-97 97zM200 401h700v699l-250 -239l-149 149l-212 -212l149 -149zM900 150h100v50h-100v-50z" />
<glyph unicode="&#xe170;" d="M0 0v275q0 11 7 18t18 7h1048q11 0 19 -7.5t8 -17.5v-275h-1100zM200 612l212 -212l98 97l-213 212zM300 1200l239 -250l-149 -149l212 -212l149 148l248 -237v700h-699zM900 150h100v50h-100v-50z" />
<glyph unicode="&#xe171;" d="M23 415l1177 784v-1079l-475 272l-310 -393v416h-392zM494 210l672 938l-672 -712v-226z" />
<glyph unicode="&#xe172;" d="M0 150v1000q0 20 14.5 35t35.5 15h250v-300h500v300h100l200 -200v-850q0 -21 -15 -35.5t-35 -14.5h-150v400h-700v-400h-150q-21 0 -35.5 14.5t-14.5 35.5zM600 1000h100v200h-100v-200z" />
<glyph unicode="&#xe173;" d="M0 150v1000q0 20 14.5 35t35.5 15h250v-300h500v300h100l200 -200v-218l-276 -275l-120 120l-126 -127h-378v-400h-150q-21 0 -35.5 14.5t-14.5 35.5zM581 306l123 123l120 -120l353 352l123 -123l-475 -476zM600 1000h100v200h-100v-200z" />
<glyph unicode="&#xe174;" d="M0 150v1000q0 20 14.5 35t35.5 15h250v-300h500v300h100l200 -200v-269l-103 -103l-170 170l-298 -298h-329v-400h-150q-21 0 -35.5 14.5t-14.5 35.5zM600 1000h100v200h-100v-200zM700 133l170 170l-170 170l127 127l170 -170l170 170l127 -128l-170 -169l170 -170 l-127 -127l-170 170l-170 -170z" />
<glyph unicode="&#xe175;" d="M0 150v1000q0 20 14.5 35t35.5 15h250v-300h500v300h100l200 -200v-300h-400v-200h-500v-400h-150q-21 0 -35.5 14.5t-14.5 35.5zM600 300l300 -300l300 300h-200v300h-200v-300h-200zM600 1000v200h100v-200h-100z" />
<glyph unicode="&#xe176;" d="M0 150v1000q0 20 14.5 35t35.5 15h250v-300h500v300h100l200 -200v-402l-200 200l-298 -298h-402v-400h-150q-21 0 -35.5 14.5t-14.5 35.5zM600 300h200v-300h200v300h200l-300 300zM600 1000v200h100v-200h-100z" />
<glyph unicode="&#xe177;" d="M0 250q0 -21 14.5 -35.5t35.5 -14.5h1100q21 0 35.5 14.5t14.5 35.5v550h-1200v-550zM0 900h1200v150q0 21 -14.5 35.5t-35.5 14.5h-1100q-21 0 -35.5 -14.5t-14.5 -35.5v-150zM100 300v200h400v-200h-400z" />
<glyph unicode="&#xe178;" d="M0 400l300 298v-198h400v-200h-400v-198zM100 800v200h100v-200h-100zM300 800v200h100v-200h-100zM500 800v200h400v198l300 -298l-300 -298v198h-400zM800 300v200h100v-200h-100zM1000 300h100v200h-100v-200z" />
<glyph unicode="&#xe179;" d="M100 700v400l50 100l50 -100v-300h100v300l50 100l50 -100v-300h100v300l50 100l50 -100v-400l-100 -203v-447q0 -21 -14.5 -35.5t-35.5 -14.5h-200q-21 0 -35.5 14.5t-14.5 35.5v447zM800 597q0 -29 10.5 -55.5t25 -43t29 -28.5t25.5 -18l10 -5v-397q0 -21 14.5 -35.5 t35.5 -14.5h200q21 0 35.5 14.5t14.5 35.5v1106q0 31 -18 40.5t-44 -7.5l-276 -117q-25 -16 -43.5 -50.5t-18.5 -65.5v-359z" />
<glyph unicode="&#xe180;" d="M100 0h400v56q-75 0 -87.5 6t-12.5 44v394h500v-394q0 -38 -12.5 -44t-87.5 -6v-56h400v56q-4 0 -11 0.5t-24 3t-30 7t-24 15t-11 24.5v888q0 22 25 34.5t50 13.5l25 2v56h-400v-56q75 0 87.5 -6t12.5 -44v-394h-500v394q0 38 12.5 44t87.5 6v56h-400v-56q4 0 11 -0.5 t24 -3t30 -7t24 -15t11 -24.5v-888q0 -22 -25 -34.5t-50 -13.5l-25 -2v-56z" />
<glyph unicode="&#xe181;" d="M0 300q0 -41 29.5 -70.5t70.5 -29.5h300q41 0 70.5 29.5t29.5 70.5v500q0 41 -29.5 70.5t-70.5 29.5h-300q-41 0 -70.5 -29.5t-29.5 -70.5v-500zM100 100h400l200 200h105l295 98v-298h-425l-100 -100h-375zM100 300v200h300v-200h-300zM100 600v200h300v-200h-300z M100 1000h400l200 -200v-98l295 98h105v200h-425l-100 100h-375zM700 402v163l400 133v-163z" />
<glyph unicode="&#xe182;" d="M16.5 974.5q0.5 -21.5 16 -90t46.5 -140t104 -177.5t175 -208q103 -103 207.5 -176t180 -103.5t137 -47t92.5 -16.5l31 1l163 162q16 17 13 40.5t-22 37.5l-192 136q-19 14 -45 12t-42 -19l-119 -118q-143 103 -267 227q-126 126 -227 268l118 118q17 17 20 41.5 t-11 44.5l-139 194q-14 19 -36.5 22t-40.5 -14l-162 -162q-1 -11 -0.5 -32.5z" />
<glyph unicode="&#xe183;" d="M0 50v212q0 20 10.5 45.5t24.5 39.5l365 303v50q0 4 1 10.5t12 22.5t30 28.5t60 23t97 10.5t97 -10t60 -23.5t30 -27.5t12 -24l1 -10v-50l365 -303q14 -14 24.5 -39.5t10.5 -45.5v-212q0 -21 -15 -35.5t-35 -14.5h-1100q-21 0 -35.5 14.5t-14.5 35.5zM0 712 q0 -21 14.5 -33.5t34.5 -8.5l202 33q20 4 34.5 21t14.5 38v146q141 24 300 24t300 -24v-146q0 -21 14.5 -38t34.5 -21l202 -33q20 -4 34.5 8.5t14.5 33.5v200q-6 8 -19 20.5t-63 45t-112 57t-171 45t-235 20.5q-92 0 -175 -10.5t-141.5 -27t-108.5 -36.5t-81.5 -40 t-53.5 -36.5t-31 -27.5l-9 -10v-200z" />
<glyph unicode="&#xe184;" d="M100 0v100h1100v-100h-1100zM175 200h950l-125 150v250l100 100v400h-100v-200h-100v200h-200v-200h-100v200h-200v-200h-100v200h-100v-400l100 -100v-250z" />
<glyph unicode="&#xe185;" d="M100 0h300v400q0 41 -29.5 70.5t-70.5 29.5h-100q-41 0 -70.5 -29.5t-29.5 -70.5v-400zM500 0v1000q0 41 29.5 70.5t70.5 29.5h100q41 0 70.5 -29.5t29.5 -70.5v-1000h-300zM900 0v700q0 41 29.5 70.5t70.5 29.5h100q41 0 70.5 -29.5t29.5 -70.5v-700h-300z" />
<glyph unicode="&#xe186;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 300h300v300h-200v100h200v100h-300v-300h200v-100h-200v-100zM600 300h200v100h100v300h-100v100h-200v-500 zM700 400v300h100v-300h-100z" />
<glyph unicode="&#xe187;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 300h100v200h100v-200h100v500h-100v-200h-100v200h-100v-500zM600 300h200v100h100v300h-100v100h-200v-500 zM700 400v300h100v-300h-100z" />
<glyph unicode="&#xe188;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 300h300v100h-200v300h200v100h-300v-500zM600 300h300v100h-200v300h200v100h-300v-500z" />
<glyph unicode="&#xe189;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 550l300 -150v300zM600 400l300 150l-300 150v-300z" />
<glyph unicode="&#xe190;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 300v500h700v-500h-700zM300 400h130q41 0 68 42t27 107t-28.5 108t-66.5 43h-130v-300zM575 549 q0 -65 27 -107t68 -42h130v300h-130q-38 0 -66.5 -43t-28.5 -108z" />
<glyph unicode="&#xe191;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 300h300v300h-200v100h200v100h-300v-300h200v-100h-200v-100zM601 300h100v100h-100v-100zM700 700h100 v-400h100v500h-200v-100z" />
<glyph unicode="&#xe192;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 300h300v400h-200v100h-100v-500zM301 400v200h100v-200h-100zM601 300h100v100h-100v-100zM700 700h100 v-400h100v500h-200v-100z" />
<glyph unicode="&#xe193;" d="M-100 300v500q0 124 88 212t212 88h700q124 0 212 -88t88 -212v-500q0 -124 -88 -212t-212 -88h-700q-124 0 -212 88t-88 212zM100 200h900v700h-900v-700zM200 700v100h300v-300h-99v-100h-100v100h99v200h-200zM201 300v100h100v-100h-100zM601 300v100h100v-100h-100z M700 700v100h200v-500h-100v400h-100z" />
<glyph unicode="&#xe194;" d="M4 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM186 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM400 500v200 l100 100h300v-100h-300v-200h300v-100h-300z" />
<glyph unicode="&#xe195;" d="M0 600q0 162 80 299t217 217t299 80t299 -80t217 -217t80 -299t-80 -299t-217 -217t-299 -80t-299 80t-217 217t-80 299zM182 600q0 -171 121.5 -292.5t292.5 -121.5t292.5 121.5t121.5 292.5t-121.5 292.5t-292.5 121.5t-292.5 -121.5t-121.5 -292.5zM400 400v400h300 l100 -100v-100h-100v100h-200v-100h200v-100h-200v-100h-100zM700 400v100h100v-100h-100z" />
<glyph unicode="&#xe197;" d="M-14 494q0 -80 56.5 -137t135.5 -57h222v300h400v-300h128q120 0 205 86t85 208q0 120 -85 206.5t-205 86.5q-46 0 -90 -14q-44 97 -134.5 156.5t-200.5 59.5q-152 0 -260 -107.5t-108 -260.5q0 -25 2 -37q-66 -14 -108.5 -67.5t-42.5 -122.5zM300 200h200v300h200v-300 h200l-300 -300z" />
<glyph unicode="&#xe198;" d="M-14 494q0 -80 56.5 -137t135.5 -57h8l414 414l403 -403q94 26 154.5 104t60.5 178q0 121 -85 207.5t-205 86.5q-46 0 -90 -14q-44 97 -134.5 156.5t-200.5 59.5q-152 0 -260 -107.5t-108 -260.5q0 -25 2 -37q-66 -14 -108.5 -67.5t-42.5 -122.5zM300 200l300 300 l300 -300h-200v-300h-200v300h-200z" />
<glyph unicode="&#xe199;" d="M100 200h400v-155l-75 -45h350l-75 45v155h400l-270 300h170l-270 300h170l-300 333l-300 -333h170l-270 -300h170z" />
<glyph unicode="&#xe200;" d="M121 700q0 -53 28.5 -97t75.5 -65q-4 -16 -4 -38q0 -74 52.5 -126.5t126.5 -52.5q56 0 100 30v-306l-75 -45h350l-75 45v306q46 -30 100 -30q74 0 126.5 52.5t52.5 126.5q0 24 -9 55q50 32 79.5 83t29.5 112q0 90 -61.5 155.5t-150.5 71.5q-26 89 -99.5 145.5 t-167.5 56.5q-116 0 -197.5 -81.5t-81.5 -197.5q0 -4 1 -12t1 -11q-14 2 -23 2q-74 0 -126.5 -52.5t-52.5 -126.5z" />
</font>
</defs></svg> `,"index.html":`<!DOCTYPE html>

<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->

<html class="not-ie" lang="en">
<!--<![endif]-->
    
<head>
<meta charset="utf-8">
<meta name="description" content="description" />
<meta name="keywords" content="keywords"/>
<meta name="author" content="BRKOR" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<title>Resume Timeline</title>

<!-- google web font-->
<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700' rel='stylesheet' type='text/css'>

<!-- style sheets-->
<style>
{{{csstheme}}}
</style>
<!-- main jquery libraries / others are at the bottom-->
<script src="js/jquery.min.js" type="text/javascript"><\/script>
<script src="js/modernizr.js" type="text/javascript"><\/script>

</head>
<body>

<!-- Top icons -->
<div class="top-icons">
	<a class="top-menu hidden-xs hidden-sm" data-toggle="tooltip" data-placement="top" title="Menu toggle"><span class="glyphicon glyphicon-th-list"></span></a>
	<a href="#" class="top-download-resume hidden-xs hidden-sm" data-toggle="tooltip" data-placement="top" title="Download resume"><span class="glyphicon glyphicon-cloud-download"></span></a>
	<a class="top-contact hidden-xs hidden-sm" data-toggle="tooltip" data-placement="top" title="Contact me"><span class="glyphicon glyphicon-send"></span></a>
</div>
<!-- end Top icons -->

<!-- Navigation -->
<nav id="spy" class="spy hidden-sm hidden-xs">
    <ul>
        <li class="active"><a href="#profile">Profile</a></li>
        <li><a href="#work-experience">Work experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#professional-skills">Skills</a></li>
        <li><a href="#interests">Interests</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
<!-- end Navigation -->
    
<!-- Navigation for small devices -->
<nav id="mini-nav" class="spy visible-sm visible-xs">
    <ul>
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown">Menu</a>
            <ul class="dropdown-menu">
                <li class="active"><a href="#profile">Profile</a></li>
                <li><a href="#work-experience">Work experience</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#professional-skills">Skills</a></li>
                <li><a href="#interests">Interests</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </li>
      </ul>
</nav>
<!-- end Navigation for small devices -->
    
<!-- Header -->
<header id="header">
    <div class="container">
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2 text-center">
                <img src="{{resume.bio.gravatar}}" class="face" alt="">
                <hr class="empty">
                <p class="header-name">{{resume.bio.firstName}} {{resume.bio.lastName}}</p>
                <p class="header-subtitle">{{resume.bio.summary}}</p>
            </div>
        </div>
    </div>
</header>
<!-- end Header -->
	
<!-- Profile -->
<section id="profile" class="profile activate">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-user"></span>Profile</li>
                    <li>
                        <span class="note">Full name</span>
                        <p><strong>{{resume.bio.firstName}} {{resume.bio.lastName}}</strong></p>
                    </li>
                    
                    
                    <li>
                        <span class="note">Github Profile</span>
                        <p><strong><a href="#">https://www.linkedin.com/markwilliamconnor</a></strong></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Profile -->

<!-- Work experience -->
<section id="work-experience" class="work-experience">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-briefcase"></span>Work experience</li>
                    {{#resume.work}}
                    <li>
                        <span class="note">June 2012 - Current</span>
                        <p><strong>{{company}}</strong></p>
                        <p><strong>{{position}}</strong> in Melbourne, AU</p>
                        <p class="description">{{summary}}</p>
                    </li>
                    {{/resume.work}}
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Work experience -->
    
<!-- Education -->
<section id="education" class="education">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-book"></span>Education</li>
                    <li>
                        <span class="note">January 2005 - December 2008</span>
                        <p><strong>Masters Degree</strong></p>
                        <p><strong>University of IT</strong> in Melbourne, Australia</p>
                        <p class="description">Vestibulum ut pharetra diam, vitae hendrerit sapien. Praesent porttitor augue nec semper suscipit. Nulla et cursus lectus. Praesent vel feugiat dolor.</p>
                    </li>
                    <li>
                        <span class="note">January 2002 - December 2005</span>
                        <p><strong>Bachelors Degree</strong></p>
                        <p><strong>University of IT</strong> in Melbourne, Australia</p>
                        <p class="description">Donec vel nulla mollis, mattis orci vel, vulputate tellus. Cras interdum sapien quis risus mattis egestas. Etiam rhoncus lacus turpis, in vulputate arcu imperdiet non.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Education -->
    
<!-- Professional skills -->
<section id="professional-skills" class="professional-skills">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-tasks"></span>Professional skills</li>
                    <li>
                        <p>Adobe InDesign<span class="annotation pull-right">95%</span></p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li>
                        <p>Adobe Photoshop<span class="annotation pull-right">85%</span></p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li>
                        <p>Adobe Illustrator<span class="annotation pull-right">70%</span></p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Professional skills -->
    
<!-- Personal skills -->
<section id="personal-skills" class="personal-skills">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-stats"></span>Personal skills</li>
                    <li>
                        <span class="chart" data-percent="95"><span class="skill">Creativity</span>
                            <span class="percent"></span>
                        </span>
                        <span class="chart" data-percent="85"><span class="skill">Social skills</span>
                            <span class="percent"></span>
                        </span>
                        <span class="chart" data-percent="80"><span class="skill">Leadership</span>
                            <span class="percent"></span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Personal skills -->
    
<!-- Interests -->
<section id="interests" class="interests">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-heart-empty"></span>Interests</li>
                    <li>
                        <p><strong>Books</strong></p>
                        <p class="description">Vestibulum ut pharetra diam, vitae hendrerit sapien. Praesent porttitor augue nec semper suscipit. Nulla et cursus lectus. Praesent vel feugiat dolor.</p>
                    </li>
                    <li>
                        <p><strong>Art</strong></p>
                        <p class="description">Donec vel nulla mollis, mattis orci vel, vulputate tellus. Cras interdum sapien quis risus mattis egestas. Etiam rhoncus lacus turpis, in vulputate arcu imperdiet non.</p>
                    </li>
                    <li>
                        <p><strong>Basketball</strong></p>
                        <p class="description">Maecenas velit eros, congue quis accumsan sed, consequat id magna. Pellentesque at auctor lacus.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Interests -->
    
<!-- Portfolio -->
<section id="portfolio" class="portfolio">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-eye-open"></span>Portfolio</li>
                    <li class="static">
                        <img src="img/1.jpg" alt="" data-toggle="modal" data-target="#modal1">
                        <img src="img/2.jpg" alt="" data-toggle="modal" data-target="#modal2">
                        <img src="img/3.jpg" alt="" data-toggle="modal" data-target="#modal3">
                        <img src="img/4.jpg" alt="" data-toggle="modal" data-target="#modal4">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Portfolio -->
    
<!-- Modal - photos in zoom-->
<div id="modal1" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-box">
            <img src="img/1.jpg" alt="" class="img-responsive">
        </div>
    </div>
</div>
<div id="modal2" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal2" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-box">
            <img src="img/2.jpg" alt="" class="img-responsive">
        </div>
    </div>
</div>
<div id="modal3" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal3" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-box">
            <img src="img/3.jpg" alt="" class="img-responsive">
        </div>
    </div>
</div>
<div id="modal4" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal4" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-box">
            <img src="img/4.jpg" alt="" class="img-responsive">
        </div>
    </div>
</div>
<!-- end Modal - photos in zoom-->
    
<!-- Contact -->
<section id="contact" class="contact">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <ul>
                    <li class="title"><span class="glyphicon glyphicon-envelope"></span>Contact</li>
                    <li class="static">
                        <span class="note">Address</span>
                        <p><strong>121 King Street, Melbourne</strong></p>
                        <p><strong>Victoria 3000 Australia</strong></p>
                        <span class="note">Mobile</span>
                        <p><strong>987 654 321</strong></p>
                        <span class="note">Phone</span>
                        <p><strong>+61 3 8376 6284</strong></p>
                        <span class="note">Email</span>
                        <p><strong><a href="#">mark.william.connor@gmail.com</a></strong></p>
                        <hr class="empty">
                        <form action="contact.php" method="post">
                            <div class="form-group input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                                <input name="yourname" type="text" class="form-control" id="inputname" placeholder="Enter your name">
                            </div>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>
                                <input name="email" type="email" class="form-control" id="inputemail" placeholder="Enter your email">
                            </div>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-bold"></span></span>
                                <input name="subject" type="text" class="form-control" id="inputsubject" placeholder="Enter subject">
                            </div>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-comment"></span></span>
                                <textarea name="comments" class="form-control" id="inputmessage" rows="3" placeholder="Enter message here"></textarea>
                            </div>
                            <button type="submit" class="btn btn-success pull-right"><span class="glyphicon glyphicon-send"></span> Send message</button>
                        </form>
                    </li>
                    <li class="title up"><span class="glyphicon glyphicon-arrow-up"></span>Up</li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- end Contact -->

<!-- Java Script -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="js/bootstrap.min.js"><\/script>
<script src="js/bootstrap-progressbar.js"><\/script>
<script src="js/spy.js"><\/script>
<script src="js/scripts.js"><\/script>
<!-- Charts -->
<script src="js/jquery.easypiechart.js"><\/script>
<script src="js/chart.js"><\/script>

</body>
</html>`,"package.json":`{
  "name": "jsonresume-theme-timeline",
  "version": "0.0.6",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "gravatar": "^1.0.6",
    "lodash": "^2.4.1",
    "mustache": "^0.8.2",
    "resume-schema": "0.0.11"
  }
}
`,"resume.json":`{
  "bio": {
      "firstName": "Thomas", 
      "lastName": "Davis",
      "summary": "Hey guys, I\u2019m a full stack web developer who loves working with open source technology. These days I do politics with EFF and Taskforce.is, I promote independent artist at Earbits, speed up the web with cdnjs.com and building Skynet with DroneHire.org.",
      "email": {
          "personal": "thomasalwyndavis@gmail.com"
      },
      "location": {
          "city": "Brisbane",
          "countryCode": "AU"
      },
      "profiles": {
          "twitter": "neutralthoughts",
          "github": "thomasdavis"
      }
    },
  "work": [{
      "startDate":   "2011-06-08",
      "endDate": "2014-06-09",
      "position": "Co-Founder",
      "company": "Cdnjs",
      "website": "http://www.cdnjs.com",
      "summary": "Following Google\u2019s CDN for jQuery, we decided to start a CDN for the less popular Javascript frameworks. The CDN is community moderated and open source on GitHub. We secured a partnership with Cloudflare.com who now supports the infrastructure.",
      "highlights": ["Hundreds of thousands of sites use the cdn in production", "Larger market share than Yahoo's and Microsoft's content distribution network", "We serve tens of billions request a month", "Contains over 800 popular Javascript libraries", "Hundreds of thousands developers visit the site per year"]
  }, {
      "startDate":   "2014-06-08",
      "endDate": "2014-06-09",
      "position": "CTO",
      "company": "Earbits",
      "website": "http://www.earbits.com",
      "summary": "Started off as a front end developer but took on the role of CTO in early 2013. Managed a large Rails application and did a big server and database(MongoDB) migration from Heroku to Amazon.",
      "highlights": ["Managed a small team of developers and designers"]
  }, {
      "startDate":   "2014-01-01",
      "endDate": "2014-06-01",
      "position": "Developer",
      "company": "Electronic Frontier Foundation",
      "website": "http://www.eff.org",
      "summary": "Hired to take EFF's campaigning to the next level by building an action centre in Ruby on Rails. The action centre is built around some large open source tools that lower the barrier to entry when contacting congress.",
      "highlights": ["Developed new tools for contacting congress"]
  }, {
      "startDate":   "2014-01-01",
      "endDate": "2014-06-01",
      "position": "Developer",
      "company": "Taskforce.is",
      "website": "http://www.taskforce.is",
      "summary": "Worked on many politically charged campaigns against mass surveillance. Our latest project was \\"TheDayWeFightBack\\" and I worked on all areas of it. The campaign resulted in 37,000,000 banner views, 100,000 phone calls, ~500,000 emails and ~250,000 signatures. I work mostly in the frontend and also running the Heroku servers which are cached by Cloudfront.",
      "highlights": []
  }, {
      "startDate":   "2013-01-01",
      "endDate": "2014-01-01",
      "position": "Co-Founder",
      "company": "Drone Hire",
      "website": "http://www.dronehire.org",
      "summary": "An international directory of civilian drone / UAV operators for hire. Services include aerial photography, aerial video, mapping, surveying, precision agriculture, real estate photography, remote inspections and infrared imaging. Our plan is to be the place to go when looking for UAV/Drone services. The website is built in Backbone.js and API is built with Node.js and Postgres. The site and blog combined have managed to receive over 200,000 visitors this year.",
      "highlights": []
  }, {
      "startDate":   "2011-01-01",
      "endDate": "2014-06-01",
      "position": "Founder",
      "company": "BackboneTutorials.com",
      "website": "http://backbonetutorials.com",
      "summary": "I write tutorials and blog post regarding the popular Javascript framework Backbone.js. The tutorials cover a range of topics regarding front end development aimed at beginners, experts and anyone in between.",
      "highlights": ["Over two million unique visitors a year", "23,000+ ebook downloads", "150,000 Youtube views", "Spawned another project called backboneboilerplate.com"]
  }, {
      "startDate":   "2011-01-01",
      "endDate": "2012-06-01",
      "position": "Front-end Developer",
      "company": "Ephox",
      "website": "http://ephox.com",
      "summary": "Ephox is a worldwide company who is heavily involved with the development of TinyMce and enterprise editors. My primary role included building front-end widgets and applications. Worked on a major product using Backbone.js as a base. Heavily involved in UI/UX design and wire-framing. Also spend a lot of time designing API specifications and documentation."
  }],
  "education": [{
      "institution": "The University of Queensland",
      "studyType": "Bachelors",
      "area": "Software Engineering",
      "startDate": "2008-02",
      "endDate": "",
      "courses": ["CSSE3002", "..."]
  }],
  "awards": [{
      "name": "Good at study",
      "date": "2009-10-01",
      "awarder": "The University of Queensland"
  }],
  "publications": [{
      "name": "Some study",
      "publisher": "The Journal of Modern Medicine"
  }],
  "profiles": {
      "github": "thomasdavis",
      "twitter": "neutralthoughts"
  },
  "skills": [{
    "name": "Frontend",
    "keywords": ["html", "css", "javascript", "backbone"]
  },
  {
    "name": "Backend",
    "keywords": ["Node", "Ruby", "Python"]
  }],
  "hobbies": [],
  "references": [{
      "name": "Greg Davis",
      "reference": "On Thomas Davis ... Hire this guy. Do not be fooled. Incredibly capable and fast. Plays well with others. Unbelievable at front-end work end programming but that is just the start. Visionary. Hire him before I do."
  }]
}
`},qt={css:["bootstrap.css","custom.css","dark.css","theme.css"],"documentation/assets/blueprint-css/plugins/buttons/icons":["cross.png","key.png","tick.png"],"documentation/assets/blueprint-css/plugins/buttons":["icons","readme.txt","screen.css"],"documentation/assets/blueprint-css/plugins/fancy-type":["readme.txt","screen.css"],"documentation/assets/blueprint-css/plugins/link-icons/icons":["doc.png","email.png","external.png","feed.png","im.png","pdf.png","visited.png","xls.png"],"documentation/assets/blueprint-css/plugins/link-icons":["icons","readme.txt","screen.css"],"documentation/assets/blueprint-css/plugins/rtl":["readme.txt","screen.css"],"documentation/assets/blueprint-css/plugins":["buttons","fancy-type","link-icons","rtl"],"documentation/assets/blueprint-css/src":["forms.css","grid.css","grid.png","ie.css","print.css","reset.css","typography.css"],"documentation/assets/blueprint-css":["ie.css","plugins","print.css","screen.css","src"],"documentation/assets":["blueprint-css"],documentation:["assets","index.html"],"example/css":["bootstrap.css","custom.css","dark.css"],"example/fonts":["glyphicons-halflings-regular.eot","glyphicons-halflings-regular.svg","glyphicons-halflings-regular.ttf","glyphicons-halflings-regular.woff"],"example/img":["1.jpg","2.jpg","3.jpg","4.jpg","bg-dark.png","bg.png","face.jpg","list-style-nav-on.png","list-style-nav-white-on.png","list-style-nav-white.png","list-style-nav.png","list-style-on.png","list-style-on1.png","list-style-on2.png","list-style.png","ls.png"],"example/js":["bootstrap-progressbar.js","bootstrap.min.js","chart.js","jquery.easypiechart.js","jquery.min.js","modernizr.js","scripts.js","spy.js"],example:["css","example.html","example.js","fonts","img","js","resume.json","theme.css"],fonts:["glyphicons-halflings-regular.eot","glyphicons-halflings-regular.svg","glyphicons-halflings-regular.ttf","glyphicons-halflings-regular.woff"],img:["1.jpg","2.jpg","3.jpg","4.jpg","bg-dark.png","bg.png","face.jpg","list-style-nav-on.png","list-style-nav-white-on.png","list-style-nav-white.png","list-style-nav.png","list-style-on.png","list-style-on1.png","list-style-on2.png","list-style.png","ls.png"],js:["bootstrap-progressbar.js","bootstrap.min.js","chart.js","jquery.easypiechart.js","jquery.min.js","modernizr.js","scripts.js","spy.js"],".":["contact.php","css","documentation","example","example.htlm","example.html","fonts","img","index.html","index.js","js","package.json","resume.json"]};Ze=function(p,m){var A=Re(p);return A!==void 0?A:""},De=function(p,m){var A=Xt(p);return A===void 0&&(A=[]),m&&m.withFileTypes?A.map(function(G){var I=_t(p)+"/"+G,D=Xt(I)!==void 0;return{name:G,isFile:function(){return!D},isDirectory:function(){return D}}}):A},Ee=function(p){return Re(p)!==void 0||Xt(p)!==void 0},Ue=function(){},Ye=function(){},Kt=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Se=Kt,Te=function(){},Ce=function(){},Be=function(){return{pipe:function(p){return p},on:function(){return this}}},We=function(){return{write:function(){},end:function(){},on:function(){return this}}},fi={readFileSync:Ze,readdirSync:De,existsSync:Ee,writeFileSync:Ue,mkdirSync:Ye,statSync:Kt,lstatSync:Se,unlinkSync:Te,rmdirSync:Ce,createReadStream:Be,createWriteStream:We}});var _e={};Ie(_e,{basename:()=>Mt,default:()=>ui,dirname:()=>$t,extname:()=>At,isAbsolute:()=>Oe,join:()=>Le,normalize:()=>He,parse:()=>Xe,relative:()=>Pe,resolve:()=>Qe,sep:()=>Je});var Le,Qe,$t,Mt,At,Je,Oe,He,Pe,Xe,ui,Ke=Pt(()=>{"use strict";T();Le=function(){return[].slice.call(arguments).join("/")},Qe=function(){return[].slice.call(arguments).join("/")},$t=function(p){return p.split("/").slice(0,-1).join("/")},Mt=function(p,m){var A=p.split("/").pop()||"";return m&&A.endsWith(m)?A.slice(0,-m.length):A},At=function(p){var m=p.match(/\.[^.]+$/);return m?m[0]:""},Je="/",Oe=function(p){return p.charAt(0)==="/"},He=function(p){return p},Pe=function(p,m){return m},Xe=function(p){return{root:"",dir:$t(p),base:Mt(p),ext:At(p),name:Mt(p,At(p))}},ui={join:Le,resolve:Qe,dirname:$t,basename:Mt,extname:At,sep:Je,isAbsolute:Oe,normalize:He,relative:Pe,parse:Xe}});var $e=Gn((Qn,dt)=>{T();(function(){var p,m=[],A=[],G=0,I=+new Date+"",D=75,U=40,Y=` 	\v\f\xA0\uFEFF
\r\u2028\u2029\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000`,$=/\b__p \+= '';/g,gn=/\b(__p \+=) '' \+/g,fn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Mn=/\w*$/,_=/^\s*function[ \n\r\t]+\w/,nn=/<%=([\s\S]+?)%>/g,Bn=RegExp("^["+Y+"]*0+(?=.$)"),Nn=/($^)/,Un=/\bthis\b/,Jn=/['\n\r\t\u2028\u2029\\]/g,Yn=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],b=0,q="[object Arguments]",h="[object Array]",N="[object Boolean]",v="[object Date]",x="[object Function]",k="[object Number]",d="[object Object]",c="[object RegExp]",u="[object String]",f={};f[x]=!1,f[q]=f[h]=f[N]=f[v]=f[k]=f[d]=f[c]=f[u]=!0;var S={leading:!1,maxWait:0,trailing:!1},Z={configurable:!1,enumerable:!1,value:null,writable:!1},W={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1},un={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},C=W[typeof window]&&window||this,O=W[typeof Qn]&&Qn&&!Qn.nodeType&&Qn,mn=W[typeof dt]&&dt&&!dt.nodeType&&dt,On=mn&&mn.exports===O&&O,tn=W[typeof globalThis]&&globalThis;tn&&(tn.global===tn||tn.window===tn)&&(C=tn);function kn(z,R,E){for(var B=(E||0)-1,V=z?z.length:0;++B<V;)if(z[B]===R)return B;return-1}function Wn(z,R){var E=typeof R;if(z=z.cache,E=="boolean"||R==null)return z[R]?0:-1;E!="number"&&E!="string"&&(E="object");var B=E=="number"?R:I+R;return z=(z=z[E])&&z[B],E=="object"?z&&kn(z,R)>-1?0:-1:z?0:-1}function wo(z){var R=this.cache,E=typeof z;if(E=="boolean"||z==null)R[z]=!0;else{E!="number"&&E!="string"&&(E="object");var B=E=="number"?z:I+z,V=R[E]||(R[E]={});E=="object"?(V[B]||(V[B]=[])).push(z):V[B]=!0}}function ne(z){return z.charCodeAt(0)}function ko(z,R){for(var E=z.criteria,B=R.criteria,V=-1,pn=E.length;++V<pn;){var bn=E[V],H=B[V];if(bn!==H){if(bn>H||typeof bn>"u")return 1;if(bn<H||typeof H>"u")return-1}}return z.index-R.index}function It(z){var R=-1,E=z.length,B=z[0],V=z[E/2|0],pn=z[E-1];if(B&&typeof B=="object"&&V&&typeof V=="object"&&pn&&typeof pn=="object")return!1;var bn=Gt();bn.false=bn.null=bn.true=bn.undefined=!1;var H=Gt();for(H.array=z,H.cache=bn,H.push=wo;++R<E;)H.push(z[R]);return H}function zo(z){return"\\"+un[z]}function zn(){return m.pop()||[]}function Gt(){return A.pop()||{array:null,cache:null,criteria:null,false:!1,index:0,null:!1,number:null,object:null,push:null,string:null,true:!1,undefined:!1,value:null}}function vn(z){z.length=0,m.length<U&&m.push(z)}function Hn(z){var R=z.cache;R&&Hn(R),z.array=z.cache=z.criteria=z.object=z.number=z.string=z.value=null,A.length<U&&A.push(z)}function F(z,R,E){R||(R=0),typeof E>"u"&&(E=z?z.length:0);for(var B=-1,V=E-R||0,pn=Array(V<0?0:V);++B<V;)pn[B]=z[R+B];return pn}function Nt(z){z=z?Rn.defaults(C.Object(),z,Rn.pick(C,Yn)):C;var R=z.Array,E=z.Boolean,B=z.Date,V=z.Function,pn=z.Math,bn=z.Number,H=z.Object,Pn=z.RegExp,Zn=z.String,An=z.TypeError,Fn=[],te=H.prototype,qo=z._,en=te.toString,Mo=Pn("^"+Zn(en).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Ao=pn.ceil,bt=z.clearTimeout,jo=pn.floor,Io=V.prototype.toString,Vn=En(Vn=H.getPrototypeOf)&&Vn,on=te.hasOwnProperty,Xn=Fn.push,_n=z.setTimeout,ee=Fn.splice,Go=Fn.unshift,oe=(function(){try{var n={},t=En(t=H.defineProperty)&&t,e=t(n,n,n)&&t}catch{}return e})(),ht=En(ht=H.create)&&ht,Rt=En(Rt=R.isArray)&&Rt,No=z.isFinite,Ro=z.isNaN,gt=En(gt=H.keys)&&gt,xn=pn.max,Kn=pn.min,Zt=z.parseInt,re=pn.random,jn={};jn[h]=R,jn[N]=E,jn[v]=B,jn[x]=V,jn[d]=H,jn[k]=bn,jn[c]=Pn,jn[u]=Zn;function a(n){return n&&typeof n=="object"&&!K(n)&&on.call(n,"__wrapped__")?n:new Sn(n)}function Sn(n,t){this.__chain__=!!t,this.__wrapped__=n}Sn.prototype=a.prototype;var $n=a.support={};$n.funcDecomp=!En(z.WinRTError)&&Un.test(Nt),$n.funcNames=typeof V.name=="string",a.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:nn,variable:"",imports:{_:a}};function Zo(n){var t=n[0],e=n[2],o=n[4];function r(){if(e){var i=F(e);Xn.apply(i,arguments)}if(this instanceof r){var l=nt(t.prototype),s=t.apply(l,i||arguments);return an(s)?s:l}return t.apply(o,i||arguments)}return St(r,n),r}function Dt(n,t,e,o,r){if(e){var i=e(n);if(typeof i<"u")return i}var l=an(n);if(l){var s=en.call(n);if(!f[s])return n;var g=jn[s];switch(s){case N:case v:return new g(+n);case k:case u:return new g(n);case c:return i=g(n.source,Mn.exec(n)),i.lastIndex=n.lastIndex,i}}else return n;var w=K(n);if(t){var y=!o;o||(o=zn()),r||(r=zn());for(var j=o.length;j--;)if(o[j]==n)return r[j];i=w?g(n.length):{}}else i=w?F(n):mt({},n);return w&&(on.call(n,"index")&&(i.index=n.index),on.call(n,"input")&&(i.input=n.input)),t&&(o.push(n),r.push(i),(w?ln:J)(n,function(M,L){i[L]=Dt(M,t,e,o,r)}),y&&(vn(o),vn(r))),i}function nt(n,t){return an(n)?ht(n):{}}ht||(nt=(function(){function n(){}return function(t){if(an(t)){n.prototype=t;var e=new n;n.prototype=null}return e||z.Object()}})());function sn(n,t,e){if(typeof n!="function")return Jt;if(typeof t>"u"||!("prototype"in n))return n;var o=n.__bindData__;if(typeof o>"u"&&($n.funcNames&&(o=!n.name),o=o||!$n.funcDecomp,!o)){var r=Io.call(n);$n.funcNames||(o=!_.test(r)),o||(o=Un.test(r),St(n,o))}if(o===!1||o!==!0&&o[1]&1)return n;switch(e){case 1:return function(i){return n.call(t,i)};case 2:return function(i,l){return n.call(t,i,l)};case 3:return function(i,l,s){return n.call(t,i,l,s)};case 4:return function(i,l,s,g){return n.call(t,i,l,s,g)}}return ze(n,t)}function ie(n){var t=n[0],e=n[1],o=n[2],r=n[3],i=n[4],l=n[5],s=e&1,g=e&2,w=e&4,y=e&8,j=t;function M(){var L=s?i:this;if(o){var Q=F(o);Xn.apply(Q,arguments)}if((r||w)&&(Q||(Q=F(arguments)),r&&Xn.apply(Q,r),w&&Q.length<l))return e|=16,ie([t,y?e:e&-4,Q,null,i,l]);if(Q||(Q=arguments),g&&(t=L[j]),this instanceof M){L=nt(t.prototype);var cn=t.apply(L,Q);return an(cn)?cn:L}return t.apply(L,Q)}return St(M,n),M}function tt(n,t){var e=-1,o=ft(),r=n?n.length:0,i=r>=D&&o===kn,l=[];if(i){var s=It(t);s?(o=Wn,t=s):i=!1}for(;++e<r;){var g=n[e];o(t,g)<0&&l.push(g)}return i&&Hn(t),l}function Dn(n,t,e,o){for(var r=(o||0)-1,i=n?n.length:0,l=[];++r<i;){var s=n[r];if(s&&typeof s=="object"&&typeof s.length=="number"&&(K(s)||ut(s))){t||(s=Dn(s,t,e));var g=-1,w=s.length,y=l.length;for(l.length+=w;++g<w;)l[y++]=s[g]}else e||l.push(s)}return l}function Ln(n,t,e,o,r,i){if(e){var l=e(n,t);if(typeof l<"u")return!!l}if(n===t)return n!==0||1/n==1/t;var s=typeof n,g=typeof t;if(n===n&&!(n&&W[s])&&!(t&&W[g]))return!1;if(n==null||t==null)return n===t;var w=en.call(n),y=en.call(t);if(w==q&&(w=d),y==q&&(y=d),w!=y)return!1;switch(w){case N:case v:return+n==+t;case k:return n!=+n?t!=+t:n==0?1/n==1/t:n==+t;case c:case u:return n==Zn(t)}var j=w==h;if(!j){var M=on.call(n,"__wrapped__"),L=on.call(t,"__wrapped__");if(M||L)return Ln(M?n.__wrapped__:n,L?t.__wrapped__:t,e,o,r,i);if(w!=d)return!1;var Q=n.constructor,cn=t.constructor;if(Q!=cn&&!(P(Q)&&Q instanceof Q&&P(cn)&&cn instanceof cn)&&"constructor"in n&&"constructor"in t)return!1}var hn=!r;r||(r=zn()),i||(i=zn());for(var dn=r.length;dn--;)if(r[dn]==n)return i[dn]==t;var X=0;if(l=!0,r.push(n),i.push(t),j){if(dn=n.length,X=t.length,l=X==dn,l||o)for(;X--;){var wt=dn,it=t[X];if(o)for(;wt--&&!(l=Ln(n[wt],it,e,o,r,i)););else if(!(l=Ln(n[X],it,e,o,r,i)))break}}else In(t,function(at,lt,Ht){if(on.call(Ht,lt))return X++,l=on.call(n,lt)&&Ln(n[lt],at,e,o,r,i)}),l&&!o&&In(n,function(at,lt,Ht){if(on.call(Ht,lt))return l=--X>-1});return r.pop(),i.pop(),hn&&(vn(r),vn(i)),l}function ae(n,t,e,o,r){(K(t)?ln:J)(t,function(i,l){var s,g,w=i,y=n[l];if(i&&((g=K(i))||Bt(i))){for(var j=o.length;j--;)if(s=o[j]==i){y=r[j];break}if(!s){var M;e&&(w=e(y,i),(M=typeof w<"u")&&(y=w)),M||(y=g?K(y)?y:[]:Bt(y)?y:{}),o.push(i),r.push(y),M||ae(y,i,e,o,r)}}else e&&(w=e(y,i),typeof w>"u"&&(w=i)),typeof w<"u"&&(y=w);n[l]=y})}function Et(n,t){return n+jo(re()*(t-n+1))}function Ut(n,t,e){var o=-1,r=ft(),i=n?n.length:0,l=[],s=!t&&i>=D&&r===kn,g=e||s?zn():l;if(s){var w=It(g);r=Wn,g=w}for(;++o<i;){var y=n[o],j=e?e(y,o,n):y;(t?!o||g[g.length-1]!==j:r(g,j)<0)&&((e||s)&&g.push(j),l.push(y))}return s?(vn(g.array),Hn(g)):e&&vn(g),l}function Yt(n){return function(t,e,o){var r={};e=a.createCallback(e,o,3);var i=-1,l=t?t.length:0;if(typeof l=="number")for(;++i<l;){var s=t[i];n(r,s,e(s,i,t),t)}else J(t,function(g,w,y){n(r,g,e(g,w,y),y)});return r}}function qn(n,t,e,o,r,i){var l=t&1,s=t&2,g=t&4,w=t&8,y=t&16,j=t&32;if(!s&&!P(n))throw new An;y&&!e.length&&(t&=-17,y=e=!1),j&&!o.length&&(t&=-33,j=o=!1);var M=n&&n.__bindData__;if(M&&M!==!0)return M=F(M),M[2]&&(M[2]=F(M[2])),M[3]&&(M[3]=F(M[3])),l&&!(M[1]&1)&&(M[4]=r),!l&&M[1]&1&&(t|=8),g&&!(M[1]&4)&&(M[5]=i),y&&Xn.apply(M[2]||(M[2]=[]),e),j&&Go.apply(M[3]||(M[3]=[]),o),M[1]|=t,qn.apply(null,M);var L=t==1||t===17?Zo:ie;return L([n,t,e,o,r,i])}function Do(n){return Tt[n]}function ft(){var n=(n=a.indexOf)===ve?kn:n;return n}function En(n){return typeof n=="function"&&Mo.test(n)}var St=oe?function(n,t){Z.value=t,oe(n,"__bindData__",Z),Z.value=null}:Me;function le(n){var t,e;return!(n&&en.call(n)==d)||(t=n.constructor,P(t)&&!(t instanceof t))?!1:(In(n,function(o,r){e=r}),typeof e>"u"||on.call(n,e))}function Eo(n){return de[n]}function ut(n){return n&&typeof n=="object"&&typeof n.length=="number"&&en.call(n)==q||!1}var K=Rt||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&en.call(n)==h||!1},Uo=function(n){var t,e=n,o=[];if(!e||!W[typeof n])return o;for(t in e)on.call(e,t)&&o.push(t);return o},rn=gt?function(n){return an(n)?gt(n):[]}:Uo,Tt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},de=se(Tt),Yo=Pn("("+rn(de).join("|")+")","g"),So=Pn("["+rn(Tt).join("")+"]","g"),mt=function(n,t,e){var o,r=n,i=r;if(!r)return i;var l=arguments,s=0,g=typeof e=="number"?2:l.length;if(g>3&&typeof l[g-2]=="function")var w=sn(l[--g-1],l[g--],2);else g>2&&typeof l[g-1]=="function"&&(w=l[--g]);for(;++s<g;)if(r=l[s],r&&W[typeof r])for(var y=-1,j=W[typeof r]&&rn(r),M=j?j.length:0;++y<M;)o=j[y],i[o]=w?w(i[o],r[o]):r[o];return i};function To(n,t,e,o){return typeof t!="boolean"&&t!=null&&(o=e,e=t,t=!1),Dt(n,t,typeof e=="function"&&sn(e,o,1))}function Co(n,t,e){return Dt(n,!0,typeof t=="function"&&sn(t,e,1))}function Bo(n,t){var e=nt(n);return t?mt(e,t):e}var Ct=function(n,t,e){var o,r=n,i=r;if(!r)return i;for(var l=arguments,s=0,g=typeof e=="number"?2:l.length;++s<g;)if(r=l[s],r&&W[typeof r])for(var w=-1,y=W[typeof r]&&rn(r),j=y?y.length:0;++w<j;)o=y[w],typeof i[o]>"u"&&(i[o]=r[o]);return i};function Wo(n,t,e){var o;return t=a.createCallback(t,e,3),J(n,function(r,i,l){if(t(r,i,l))return o=i,!1}),o}function Fo(n,t,e){var o;return t=a.createCallback(t,e,3),pe(n,function(r,i,l){if(t(r,i,l))return o=i,!1}),o}var In=function(n,t,e){var o,r=n,i=r;if(!r||!W[typeof r])return i;t=t&&typeof e>"u"?t:sn(t,e,3);for(o in r)if(t(r[o],o,n)===!1)return i;return i};function Vo(n,t,e){var o=[];In(n,function(i,l){o.push(l,i)});var r=o.length;for(t=sn(t,e,3);r--&&t(o[r--],o[r],n)!==!1;);return n}var J=function(n,t,e){var o,r=n,i=r;if(!r||!W[typeof r])return i;t=t&&typeof e>"u"?t:sn(t,e,3);for(var l=-1,s=W[typeof r]&&rn(r),g=s?s.length:0;++l<g;)if(o=s[l],t(r[o],o,n)===!1)return i;return i};function pe(n,t,e){var o=rn(n),r=o.length;for(t=sn(t,e,3);r--;){var i=o[r];if(t(n[i],i,n)===!1)break}return n}function et(n){var t=[];return In(n,function(e,o){P(e)&&t.push(o)}),t.sort()}function Lo(n,t){return n?on.call(n,t):!1}function se(n){for(var t=-1,e=rn(n),o=e.length,r={};++t<o;){var i=e[t];r[n[i]]=i}return r}function Qo(n){return n===!0||n===!1||n&&typeof n=="object"&&en.call(n)==N||!1}function Jo(n){return n&&typeof n=="object"&&en.call(n)==v||!1}function Oo(n){return n&&n.nodeType===1||!1}function Ho(n){var t=!0;if(!n)return t;var e=en.call(n),o=n.length;return e==h||e==u||e==q||e==d&&typeof o=="number"&&P(n.splice)?!o:(J(n,function(){return t=!1}),t)}function Po(n,t,e,o){return Ln(n,t,typeof e=="function"&&sn(e,o,2))}function Xo(n){return No(n)&&!Ro(parseFloat(n))}function P(n){return typeof n=="function"}function an(n){return!!(n&&W[typeof n])}function _o(n){return ce(n)&&n!=+n}function Ko(n){return n===null}function ce(n){return typeof n=="number"||n&&typeof n=="object"&&en.call(n)==k||!1}var Bt=Vn?function(n){if(!(n&&en.call(n)==d))return!1;var t=n.valueOf,e=En(t)&&(e=Vn(t))&&Vn(e);return e?n==e||Vn(n)==e:le(n)}:le;function $o(n){return n&&typeof n=="object"&&en.call(n)==c||!1}function ot(n){return typeof n=="string"||n&&typeof n=="object"&&en.call(n)==u||!1}function nr(n){return typeof n>"u"}function tr(n,t,e){var o={};return t=a.createCallback(t,e,3),J(n,function(r,i,l){o[i]=t(r,i,l)}),o}function er(n){var t=arguments,e=2;if(!an(n))return n;if(typeof t[2]!="number"&&(e=t.length),e>3&&typeof t[e-2]=="function")var o=sn(t[--e-1],t[e--],2);else e>2&&typeof t[e-1]=="function"&&(o=t[--e]);for(var r=F(arguments,1,e),i=-1,l=zn(),s=zn();++i<e;)ae(n,r[i],o,l,s);return vn(l),vn(s),n}function or(n,t,e){var o={};if(typeof t!="function"){var r=[];In(n,function(g,w){r.push(w)}),r=tt(r,Dn(arguments,!0,!1,1));for(var i=-1,l=r.length;++i<l;){var s=r[i];o[s]=n[s]}}else t=a.createCallback(t,e,3),In(n,function(g,w,y){t(g,w,y)||(o[w]=g)});return o}function rr(n){for(var t=-1,e=rn(n),o=e.length,r=R(o);++t<o;){var i=e[t];r[t]=[i,n[i]]}return r}function ir(n,t,e){var o={};if(typeof t!="function")for(var r=-1,i=Dn(arguments,!0,!1,1),l=an(n)?i.length:0;++r<l;){var s=i[r];s in n&&(o[s]=n[s])}else t=a.createCallback(t,e,3),In(n,function(g,w,y){t(g,w,y)&&(o[w]=g)});return o}function ar(n,t,e,o){var r=K(n);if(e==null)if(r)e=[];else{var i=n&&n.constructor,l=i&&i.prototype;e=nt(l)}return t&&(t=a.createCallback(t,o,4),(r?ln:J)(n,function(s,g,w){return t(e,s,g,w)})),e}function vt(n){for(var t=-1,e=rn(n),o=e.length,r=R(o);++t<o;)r[t]=n[e[t]];return r}function lr(n){for(var t=arguments,e=-1,o=Dn(t,!0,!1,1),r=t[2]&&t[2][t[1]]===n?1:o.length,i=R(r);++e<r;)i[e]=n[o[e]];return i}function be(n,t,e){var o=-1,r=ft(),i=n?n.length:0,l=!1;return e=(e<0?xn(0,i+e):e)||0,K(n)?l=r(n,t,e)>-1:typeof i=="number"?l=(ot(n)?n.indexOf(t,e):r(n,t,e))>-1:J(n,function(s){if(++o>=e)return!(l=s===t)}),l}var dr=Yt(function(n,t,e){on.call(n,e)?n[e]++:n[e]=1});function he(n,t,e){var o=!0;t=a.createCallback(t,e,3);var r=-1,i=n?n.length:0;if(typeof i=="number")for(;++r<i&&(o=!!t(n[r],r,n)););else J(n,function(l,s,g){return o=!!t(l,s,g)});return o}function xt(n,t,e){var o=[];t=a.createCallback(t,e,3);var r=-1,i=n?n.length:0;if(typeof i=="number")for(;++r<i;){var l=n[r];t(l,r,n)&&o.push(l)}else J(n,function(s,g,w){t(s,g,w)&&o.push(s)});return o}function Wt(n,t,e){t=a.createCallback(t,e,3);var o=-1,r=n?n.length:0;if(typeof r=="number")for(;++o<r;){var i=n[o];if(t(i,o,n))return i}else{var l;return J(n,function(s,g,w){if(t(s,g,w))return l=s,!1}),l}}function pr(n,t,e){var o;return t=a.createCallback(t,e,3),yt(n,function(r,i,l){if(t(r,i,l))return o=r,!1}),o}function ln(n,t,e){var o=-1,r=n?n.length:0;if(t=t&&typeof e>"u"?t:sn(t,e,3),typeof r=="number")for(;++o<r&&t(n[o],o,n)!==!1;);else J(n,t);return n}function yt(n,t,e){var o=n?n.length:0;if(t=t&&typeof e>"u"?t:sn(t,e,3),typeof o=="number")for(;o--&&t(n[o],o,n)!==!1;);else{var r=rn(n);o=r.length,J(n,function(i,l,s){return l=r?r[--o]:--o,t(s[l],l,s)})}return n}var sr=Yt(function(n,t,e){(on.call(n,e)?n[e]:n[e]=[]).push(t)}),cr=Yt(function(n,t,e){n[e]=t});function br(n,t){var e=F(arguments,2),o=-1,r=typeof t=="function",i=n?n.length:0,l=R(typeof i=="number"?i:0);return ln(n,function(s){l[++o]=(r?t:s[t]).apply(s,e)}),l}function rt(n,t,e){var o=-1,r=n?n.length:0;if(t=a.createCallback(t,e,3),typeof r=="number")for(var i=R(r);++o<r;)i[o]=t(n[o],o,n);else i=[],J(n,function(l,s,g){i[++o]=t(l,s,g)});return i}function ge(n,t,e){var o=-1/0,r=o;if(typeof t!="function"&&e&&e[t]===n&&(t=null),t==null&&K(n))for(var i=-1,l=n.length;++i<l;){var s=n[i];s>r&&(r=s)}else t=t==null&&ot(n)?ne:a.createCallback(t,e,3),ln(n,function(g,w,y){var j=t(g,w,y);j>o&&(o=j,r=g)});return r}function hr(n,t,e){var o=1/0,r=o;if(typeof t!="function"&&e&&e[t]===n&&(t=null),t==null&&K(n))for(var i=-1,l=n.length;++i<l;){var s=n[i];s<r&&(r=s)}else t=t==null&&ot(n)?ne:a.createCallback(t,e,3),ln(n,function(g,w,y){var j=t(g,w,y);j<o&&(o=j,r=g)});return r}var Ft=rt;function Vt(n,t,e,o){if(!n)return e;var r=arguments.length<3;t=a.createCallback(t,o,4);var i=-1,l=n.length;if(typeof l=="number")for(r&&(e=n[++i]);++i<l;)e=t(e,n[i],i,n);else J(n,function(s,g,w){e=r?(r=!1,s):t(e,s,g,w)});return e}function fe(n,t,e,o){var r=arguments.length<3;return t=a.createCallback(t,o,4),yt(n,function(i,l,s){e=r?(r=!1,i):t(e,i,l,s)}),e}function gr(n,t,e){return t=a.createCallback(t,e,3),xt(n,function(o,r,i){return!t(o,r,i)})}function fr(n,t,e){if(n&&typeof n.length!="number"&&(n=vt(n)),t==null||e)return n?n[Et(0,n.length-1)]:p;var o=ue(n);return o.length=Kn(xn(0,t),o.length),o}function ue(n){var t=-1,e=n?n.length:0,o=R(typeof e=="number"?e:0);return ln(n,function(r){var i=Et(0,++t);o[t]=o[i],o[i]=r}),o}function ur(n){var t=n?n.length:0;return typeof t=="number"?t:rn(n).length}function me(n,t,e){var o;t=a.createCallback(t,e,3);var r=-1,i=n?n.length:0;if(typeof i=="number")for(;++r<i&&!(o=t(n[r],r,n)););else J(n,function(l,s,g){return!(o=t(l,s,g))});return!!o}function mr(n,t,e){var o=-1,r=K(t),i=n?n.length:0,l=R(typeof i=="number"?i:0);for(r||(t=a.createCallback(t,e,3)),ln(n,function(g,w,y){var j=l[++o]=Gt();r?j.criteria=rt(t,function(M){return g[M]}):(j.criteria=zn())[0]=t(g,w,y),j.index=o,j.value=g}),i=l.length,l.sort(ko);i--;){var s=l[i];l[i]=s.value,r||vn(s.criteria),Hn(s)}return l}function vr(n){return n&&typeof n.length=="number"?F(n):vt(n)}var xr=xt;function yr(n){for(var t=-1,e=n?n.length:0,o=[];++t<e;){var r=n[t];r&&o.push(r)}return o}function wr(n){return tt(n,Dn(arguments,!0,!0,1))}function kr(n,t,e){var o=-1,r=n?n.length:0;for(t=a.createCallback(t,e,3);++o<r;)if(t(n[o],o,n))return o;return-1}function zr(n,t,e){var o=n?n.length:0;for(t=a.createCallback(t,e,3);o--;)if(t(n[o],o,n))return o;return-1}function Lt(n,t,e){var o=0,r=n?n.length:0;if(typeof t!="number"&&t!=null){var i=-1;for(t=a.createCallback(t,e,3);++i<r&&t(n[i],i,n);)o++}else if(o=t,o==null||e)return n?n[0]:p;return F(n,0,Kn(xn(0,o),r))}function qr(n,t,e,o){return typeof t!="boolean"&&t!=null&&(o=e,e=typeof t!="function"&&o&&o[t]===n?null:t,t=!1),e!=null&&(n=rt(n,e,o)),Dn(n,t)}function ve(n,t,e){if(typeof e=="number"){var o=n?n.length:0;e=e<0?xn(0,o+e):e||0}else if(e){var r=xe(n,t);return n[r]===t?r:-1}return kn(n,t,e)}function Mr(n,t,e){var o=0,r=n?n.length:0;if(typeof t!="number"&&t!=null){var i=r;for(t=a.createCallback(t,e,3);i--&&t(n[i],i,n);)o++}else o=t==null||e?1:t||o;return F(n,0,Kn(xn(0,r-o),r))}function Ar(){for(var n=[],t=-1,e=arguments.length,o=zn(),r=ft(),i=r===kn,l=zn();++t<e;){var s=arguments[t];(K(s)||ut(s))&&(n.push(s),o.push(i&&s.length>=D&&It(t?n[t]:l)))}var g=n[0],w=-1,y=g?g.length:0,j=[];n:for(;++w<y;){var M=o[0];if(s=g[w],(M?Wn(M,s):r(l,s))<0){for(t=e,(M||l).push(s);--t;)if(M=o[t],(M?Wn(M,s):r(n[t],s))<0)continue n;j.push(s)}}for(;e--;)M=o[e],M&&Hn(M);return vn(o),vn(l),j}function jr(n,t,e){var o=0,r=n?n.length:0;if(typeof t!="number"&&t!=null){var i=r;for(t=a.createCallback(t,e,3);i--&&t(n[i],i,n);)o++}else if(o=t,o==null||e)return n?n[r-1]:p;return F(n,xn(0,r-o))}function Ir(n,t,e){var o=n?n.length:0;for(typeof e=="number"&&(o=(e<0?xn(0,o+e):Kn(e,o-1))+1);o--;)if(n[o]===t)return o;return-1}function Gr(n){for(var t=arguments,e=0,o=t.length,r=n?n.length:0;++e<o;)for(var i=-1,l=t[e];++i<r;)n[i]===l&&(ee.call(n,i--,1),r--);return n}function Nr(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,t==null&&(t=n,n=0);for(var o=-1,r=xn(0,Ao((t-n)/(e||1))),i=R(r);++o<r;)i[o]=n,n+=e;return i}function Rr(n,t,e){var o=-1,r=n?n.length:0,i=[];for(t=a.createCallback(t,e,3);++o<r;){var l=n[o];t(l,o,n)&&(i.push(l),ee.call(n,o--,1),r--)}return i}function Qt(n,t,e){if(typeof t!="number"&&t!=null){var o=0,r=-1,i=n?n.length:0;for(t=a.createCallback(t,e,3);++r<i&&t(n[r],r,n);)o++}else o=t==null||e?1:xn(0,t);return F(n,o)}function xe(n,t,e,o){var r=0,i=n?n.length:r;for(e=e?a.createCallback(e,o,1):Jt,t=e(t);r<i;){var l=r+i>>>1;e(n[l])<t?r=l+1:i=l}return r}function Zr(){return Ut(Dn(arguments,!0,!0))}function ye(n,t,e,o){return typeof t!="boolean"&&t!=null&&(o=e,e=typeof t!="function"&&o&&o[t]===n?null:t,t=!1),e!=null&&(e=a.createCallback(e,o,3)),Ut(n,t,e)}function Dr(n){return tt(n,F(arguments,1))}function Er(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(K(e)||ut(e))var o=o?Ut(tt(o,e).concat(tt(e,o))):e}return o||[]}function we(){for(var n=arguments.length>1?arguments:arguments[0],t=-1,e=n?ge(Ft(n,"length")):0,o=R(e<0?0:e);++t<e;)o[t]=Ft(n,t);return o}function ke(n,t){var e=-1,o=n?n.length:0,r={};for(!t&&o&&!K(n[0])&&(t=[]);++e<o;){var i=n[e];t?r[i]=t[e]:i&&(r[i[0]]=i[1])}return r}function Ur(n,t){if(!P(t))throw new An;return function(){if(--n<1)return t.apply(this,arguments)}}function ze(n,t){return arguments.length>2?qn(n,17,F(arguments,2),null,t):qn(n,1,null,null,t)}function Yr(n){for(var t=arguments.length>1?Dn(arguments,!0,!1,1):et(n),e=-1,o=t.length;++e<o;){var r=t[e];n[r]=qn(n[r],1,null,null,n)}return n}function Sr(n,t){return arguments.length>2?qn(t,19,F(arguments,2),null,n):qn(t,3,null,null,n)}function Tr(){for(var n=arguments,t=n.length;t--;)if(!P(n[t]))throw new An;return function(){for(var e=arguments,o=n.length;o--;)e=[n[o].apply(this,e)];return e[0]}}function Cr(n,t){return t=typeof t=="number"?t:+t||n.length,qn(n,4,null,null,null,t)}function qe(n,t,e){var o,r,i,l,s,g,w,y=0,j=!1,M=!0;if(!P(n))throw new An;if(t=xn(0,t)||0,e===!0){var L=!0;M=!1}else an(e)&&(L=e.leading,j="maxWait"in e&&(xn(t,e.maxWait)||0),M="trailing"in e?e.trailing:M);var Q=function(){var hn=t-(Tn()-l);if(hn<=0){r&&bt(r);var dn=w;r=g=w=p,dn&&(y=Tn(),i=n.apply(s,o),!g&&!r&&(o=s=null))}else g=_n(Q,hn)},cn=function(){g&&bt(g),r=g=w=p,(M||j!==t)&&(y=Tn(),i=n.apply(s,o),!g&&!r&&(o=s=null))};return function(){if(o=arguments,l=Tn(),s=this,w=M&&(g||!L),j===!1)var hn=L&&!g;else{!r&&!L&&(y=l);var dn=j-(l-y),X=dn<=0;X?(r&&(r=bt(r)),y=l,i=n.apply(s,o)):r||(r=_n(cn,dn))}return X&&g?g=bt(g):!g&&t!==j&&(g=_n(Q,t)),hn&&(X=!0,i=n.apply(s,o)),X&&!g&&!r&&(o=s=null),i}}function Br(n){if(!P(n))throw new An;var t=F(arguments,1);return _n(function(){n.apply(p,t)},1)}function Wr(n,t){if(!P(n))throw new An;var e=F(arguments,2);return _n(function(){n.apply(p,e)},t)}function Fr(n,t){if(!P(n))throw new An;var e=function(){var o=e.cache,r=t?t.apply(this,arguments):I+arguments[0];return on.call(o,r)?o[r]:o[r]=n.apply(this,arguments)};return e.cache={},e}function Vr(n){var t,e;if(!P(n))throw new An;return function(){return t||(t=!0,e=n.apply(this,arguments),n=null),e}}function Lr(n){return qn(n,16,F(arguments,1))}function Qr(n){return qn(n,32,null,F(arguments,1))}function Jr(n,t,e){var o=!0,r=!0;if(!P(n))throw new An;return e===!1?o=!1:an(e)&&(o="leading"in e?e.leading:o,r="trailing"in e?e.trailing:r),S.leading=o,S.maxWait=t,S.trailing=r,qe(n,t,S)}function Or(n,t){return qn(t,16,[n])}function Hr(n){return function(){return n}}function Pr(n,t,e){var o=typeof n;if(n==null||o=="function")return sn(n,t,e);if(o!="object")return Ae(n);var r=rn(n),i=r[0],l=n[i];return r.length==1&&l===l&&!an(l)?function(s){var g=s[i];return l===g&&(l!==0||1/l==1/g)}:function(s){for(var g=r.length,w=!1;g--&&(w=Ln(s[r[g]],n[r[g]],null,!0)););return w}}function Xr(n){return n==null?"":Zn(n).replace(So,Do)}function Jt(n){return n}function Ot(n,t,e){var o=!0,r=t&&et(t);(!t||!e&&!r.length)&&(e==null&&(e=t),i=Sn,t=n,n=a,r=et(t)),e===!1?o=!1:an(e)&&"chain"in e&&(o=e.chain);var i=n,l=P(i);ln(r,function(s){var g=n[s]=t[s];l&&(i.prototype[s]=function(){var w=this.__chain__,y=this.__wrapped__,j=[y];Xn.apply(j,arguments);var M=g.apply(n,j);if(o||w){if(y===M&&an(M))return this;M=new i(M),M.__chain__=w}return M})})}function _r(){return z._=qo,this}function Me(){}var Tn=En(Tn=B.now)&&Tn||function(){return new B().getTime()},Kr=Zt(Y+"08")==8?Zt:function(n,t){return Zt(ot(n)?n.replace(Bn,""):n,t||0)};function Ae(n){return function(t){return t[n]}}function $r(n,t,e){var o=n==null,r=t==null;if(e==null&&(typeof n=="boolean"&&r?(e=n,n=1):!r&&typeof t=="boolean"&&(e=t,r=!0)),o&&r&&(t=1),n=+n||0,r?(t=n,n=0):t=+t||0,e||n%1||t%1){var i=re();return Kn(n+i*(t-n+parseFloat("1e-"+((i+"").length-1))),t)}return Et(n,t)}function ni(n,t){if(n){var e=n[t];return P(e)?n[t]():e}}function ti(n,t,e){var o=a.templateSettings;n=Zn(n||""),e=Ct({},e,o);var r=Ct({},e.imports,o.imports),i=rn(r),l=vt(r),s,g=0,w=e.interpolate||Nn,y="__p += '",j=Pn((e.escape||Nn).source+"|"+w.source+"|"+(w===nn?wn:Nn).source+"|"+(e.evaluate||Nn).source+"|$","g");n.replace(j,function(hn,dn,X,wt,it,at){return X||(X=wt),y+=n.slice(g,at).replace(Jn,zo),dn&&(y+=`' +
__e(`+dn+`) +
'`),it&&(s=!0,y+=`';
`+it+`;
__p += '`),X&&(y+=`' +
((__t = (`+X+`)) == null ? '' : __t) +
'`),g=at+hn.length,hn}),y+=`';
`;var M=e.variable,L=M;L||(M="obj",y="with ("+M+`) {
`+y+`
}
`),y=(s?y.replace($,""):y).replace(gn,"$1").replace(fn,"$1;"),y="function("+M+`) {
`+(L?"":M+" || ("+M+` = {});
`)+"var __t, __p = '', __e = _.escape"+(s?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+y+`return __p
}`;var Q=`
/*
//# sourceURL=`+(e.sourceURL||"/lodash/template/source["+b+++"]")+`
*/`;try{var cn=V(i,"return "+y+Q).apply(p,l)}catch(hn){throw hn.source=y,hn}return t?cn(t):(cn.source=y,cn)}function ei(n,t,e){n=(n=+n)>-1?n:0;var o=-1,r=R(n);for(t=sn(t,e,1);++o<n;)r[o]=t(o);return r}function oi(n){return n==null?"":Zn(n).replace(Yo,Eo)}function ri(n){var t=++G;return Zn(n??"")+t}function ii(n){return n=new Sn(n),n.__chain__=!0,n}function ai(n,t){return t(n),n}function li(){return this.__chain__=!0,this}function di(){return Zn(this.__wrapped__)}function je(){return this.__wrapped__}return a.after=Ur,a.assign=mt,a.at=lr,a.bind=ze,a.bindAll=Yr,a.bindKey=Sr,a.chain=ii,a.compact=yr,a.compose=Tr,a.constant=Hr,a.countBy=dr,a.create=Bo,a.createCallback=Pr,a.curry=Cr,a.debounce=qe,a.defaults=Ct,a.defer=Br,a.delay=Wr,a.difference=wr,a.filter=xt,a.flatten=qr,a.forEach=ln,a.forEachRight=yt,a.forIn=In,a.forInRight=Vo,a.forOwn=J,a.forOwnRight=pe,a.functions=et,a.groupBy=sr,a.indexBy=cr,a.initial=Mr,a.intersection=Ar,a.invert=se,a.invoke=br,a.keys=rn,a.map=rt,a.mapValues=tr,a.max=ge,a.memoize=Fr,a.merge=er,a.min=hr,a.omit=or,a.once=Vr,a.pairs=rr,a.partial=Lr,a.partialRight=Qr,a.pick=ir,a.pluck=Ft,a.property=Ae,a.pull=Gr,a.range=Nr,a.reject=gr,a.remove=Rr,a.rest=Qt,a.shuffle=ue,a.sortBy=mr,a.tap=ai,a.throttle=Jr,a.times=ei,a.toArray=vr,a.transform=ar,a.union=Zr,a.uniq=ye,a.values=vt,a.where=xr,a.without=Dr,a.wrap=Or,a.xor=Er,a.zip=we,a.zipObject=ke,a.collect=rt,a.drop=Qt,a.each=ln,a.eachRight=yt,a.extend=mt,a.methods=et,a.object=ke,a.select=xt,a.tail=Qt,a.unique=ye,a.unzip=we,Ot(a),a.clone=To,a.cloneDeep=Co,a.contains=be,a.escape=Xr,a.every=he,a.find=Wt,a.findIndex=kr,a.findKey=Wo,a.findLast=pr,a.findLastIndex=zr,a.findLastKey=Fo,a.has=Lo,a.identity=Jt,a.indexOf=ve,a.isArguments=ut,a.isArray=K,a.isBoolean=Qo,a.isDate=Jo,a.isElement=Oo,a.isEmpty=Ho,a.isEqual=Po,a.isFinite=Xo,a.isFunction=P,a.isNaN=_o,a.isNull=Ko,a.isNumber=ce,a.isObject=an,a.isPlainObject=Bt,a.isRegExp=$o,a.isString=ot,a.isUndefined=nr,a.lastIndexOf=Ir,a.mixin=Ot,a.noConflict=_r,a.noop=Me,a.now=Tn,a.parseInt=Kr,a.random=$r,a.reduce=Vt,a.reduceRight=fe,a.result=ni,a.runInContext=Nt,a.size=ur,a.some=me,a.sortedIndex=xe,a.template=ti,a.unescape=oi,a.uniqueId=ri,a.all=he,a.any=me,a.detect=Wt,a.findWhere=Wt,a.foldl=Vt,a.foldr=fe,a.include=be,a.inject=Vt,Ot((function(){var n={};return J(a,function(t,e){a.prototype[e]||(n[e]=t)}),n})(),!1),a.first=Lt,a.last=jr,a.sample=fr,a.take=Lt,a.head=Lt,J(a,function(n,t){var e=t!=="sample";a.prototype[t]||(a.prototype[t]=function(o,r){var i=this.__chain__,l=n(this.__wrapped__,o,r);return!i&&(o==null||r&&!(e&&typeof o=="function"))?l:new Sn(l,i)})}),a.VERSION="2.4.2",a.prototype.chain=li,a.prototype.toString=di,a.prototype.value=je,a.prototype.valueOf=je,ln(["join","pop","shift"],function(n){var t=Fn[n];a.prototype[n]=function(){var e=this.__chain__,o=t.apply(this.__wrapped__,arguments);return e?new Sn(o,e):o}}),ln(["push","reverse","sort","unshift"],function(n){var t=Fn[n];a.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),ln(["concat","slice","splice"],function(n){var t=Fn[n];a.prototype[n]=function(){return new Sn(t.apply(this.__wrapped__,arguments),this.__chain__)}}),a}var Rn=Nt();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(C._=Rn,define(function(){return Rn})):O&&mn?On?(mn.exports=Rn)._=Rn:O._=Rn:C._=Rn}).call(Qn)});var no=Gn(pt=>{T();(function(p,m){if(typeof pt=="object"&&pt)m(pt);else{var A={};m(A),typeof define=="function"&&define.amd?define(A):p.Mustache=A}})(pt,function(p){var m=RegExp.prototype.test;function A(v,x){return m.call(v,x)}var G=/\S/;function I(v){return!A(G,v)}var D=Object.prototype.toString,U=Array.isArray||function(v){return D.call(v)==="[object Array]"};function Y(v){return typeof v=="function"}function $(v){return v.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var gn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function fn(v){return String(v).replace(/[&<>"'\/]/g,function(x){return gn[x]})}function wn(v){if(!U(v)||v.length!==2)throw new Error("Invalid tags: "+v);return[new RegExp($(v[0])+"\\s*"),new RegExp("\\s*"+$(v[1]))]}var Mn=/\s*/,_=/\s+/,nn=/\s*=/,Bn=/\s*\}/,Nn=/#|\^|\/|>|\{|&|=|!/;function Un(v,x){x=x||p.tags,v=v||"",typeof x=="string"&&(x=x.split(_));var k=wn(x),d=new b(v),c=[],u=[],f=[],S=!1,Z=!1;function W(){if(S&&!Z)for(;f.length;)delete u[f.pop()];else f=[];S=!1,Z=!1}for(var un,C,O,mn,On,tn;!d.eos();){if(un=d.pos,O=d.scanUntil(k[0]),O)for(var kn=0,Wn=O.length;kn<Wn;++kn)mn=O.charAt(kn),I(mn)?f.push(u.length):Z=!0,u.push(["text",mn,un,un+1]),un+=1,mn===`
`&&W();if(!d.scan(k[0]))break;if(S=!0,C=d.scan(Nn)||"name",d.scan(Mn),C==="="?(O=d.scanUntil(nn),d.scan(nn),d.scanUntil(k[1])):C==="{"?(O=d.scanUntil(new RegExp("\\s*"+$("}"+x[1]))),d.scan(Bn),d.scanUntil(k[1]),C="&"):O=d.scanUntil(k[1]),!d.scan(k[1]))throw new Error("Unclosed tag at "+d.pos);if(On=[C,O,un,d.pos],u.push(On),C==="#"||C==="^")c.push(On);else if(C==="/"){if(tn=c.pop(),!tn)throw new Error('Unopened section "'+O+'" at '+un);if(tn[1]!==O)throw new Error('Unclosed section "'+tn[1]+'" at '+un)}else C==="name"||C==="{"||C==="&"?Z=!0:C==="="&&(k=wn(x=O.split(_)))}if(tn=c.pop(),tn)throw new Error('Unclosed section "'+tn[1]+'" at '+d.pos);return Yn(Jn(u))}function Jn(v){for(var x=[],k,d,c=0,u=v.length;c<u;++c)k=v[c],k&&(k[0]==="text"&&d&&d[0]==="text"?(d[1]+=k[1],d[3]=k[3]):(x.push(k),d=k));return x}function Yn(v){for(var x=[],k=x,d=[],c,u,f=0,S=v.length;f<S;++f)switch(c=v[f],c[0]){case"#":case"^":k.push(c),d.push(c),k=c[4]=[];break;case"/":u=d.pop(),u[5]=c[2],k=d.length>0?d[d.length-1][4]:x;break;default:k.push(c)}return x}function b(v){this.string=v,this.tail=v,this.pos=0}b.prototype.eos=function(){return this.tail===""},b.prototype.scan=function(v){var x=this.tail.match(v);if(x&&x.index===0){var k=x[0];return this.tail=this.tail.substring(k.length),this.pos+=k.length,k}return""},b.prototype.scanUntil=function(v){var x=this.tail.search(v),k;switch(x){case-1:k=this.tail,this.tail="";break;case 0:k="";break;default:k=this.tail.substring(0,x),this.tail=this.tail.substring(x)}return this.pos+=k.length,k};function q(v,x){this.view=v??{},this.cache={".":this.view},this.parent=x}q.prototype.push=function(v){return new q(v,this)},q.prototype.lookup=function(v){var x;if(v in this.cache)x=this.cache[v];else{for(var k=this;k;){if(v.indexOf(".")>0){x=k.view;for(var d=v.split("."),c=0;x!=null&&c<d.length;)x=x[d[c++]]}else x=k.view[v];if(x!=null)break;k=k.parent}this.cache[v]=x}return Y(x)&&(x=x.call(this.view)),x};function h(){this.cache={}}h.prototype.clearCache=function(){this.cache={}},h.prototype.parse=function(v,x){var k=this.cache,d=k[v];return d==null&&(d=k[v]=Un(v,x)),d},h.prototype.render=function(v,x,k){var d=this.parse(v),c=x instanceof q?x:new q(x);return this.renderTokens(d,c,k,v)},h.prototype.renderTokens=function(v,x,k,d){var c="",u=this;function f(mn){return u.render(mn,x,k)}for(var S,Z,W=0,un=v.length;W<un;++W)switch(S=v[W],S[0]){case"#":if(Z=x.lookup(S[1]),!Z)continue;if(U(Z))for(var C=0,O=Z.length;C<O;++C)c+=this.renderTokens(S[4],x.push(Z[C]),k,d);else if(typeof Z=="object"||typeof Z=="string")c+=this.renderTokens(S[4],x.push(Z),k,d);else if(Y(Z)){if(typeof d!="string")throw new Error("Cannot use higher-order sections without the original template");Z=Z.call(x.view,d.slice(S[3],S[5]),f),Z!=null&&(c+=Z)}else c+=this.renderTokens(S[4],x,k,d);break;case"^":Z=x.lookup(S[1]),(!Z||U(Z)&&Z.length===0)&&(c+=this.renderTokens(S[4],x,k,d));break;case">":if(!k)continue;Z=Y(k)?k(S[1]):k[S[1]],Z!=null&&(c+=this.renderTokens(this.parse(Z),x,k,Z));break;case"&":Z=x.lookup(S[1]),Z!=null&&(c+=Z);break;case"name":Z=x.lookup(S[1]),Z!=null&&(c+=p.escape(Z));break;case"text":c+=S[1];break}return c},p.name="mustache.js",p.version="0.8.1",p.tags=["{{","}}"];var N=new h;p.clearCache=function(){return N.clearCache()},p.parse=function(v,x){return N.parse(v,x)},p.render=function(v,x,k){return N.render(v,x,k)},p.to_html=function(v,x,k,d){var c=p.render(v,x,k);if(Y(d))d(c);else return c},p.escape=fn,p.Scanner=b,p.Context=q,p.Writer=h})});var eo=Gn((to,jt)=>{T();(function(p){"use strict";function m(b,q){var h=(b&65535)+(q&65535),N=(b>>16)+(q>>16)+(h>>16);return N<<16|h&65535}function A(b,q){return b<<q|b>>>32-q}function G(b,q,h,N,v,x){return m(A(m(m(q,b),m(N,x)),v),h)}function I(b,q,h,N,v,x,k){return G(q&h|~q&N,b,q,v,x,k)}function D(b,q,h,N,v,x,k){return G(q&N|h&~N,b,q,v,x,k)}function U(b,q,h,N,v,x,k){return G(q^h^N,b,q,v,x,k)}function Y(b,q,h,N,v,x,k){return G(h^(q|~N),b,q,v,x,k)}function $(b,q){b[q>>5]|=128<<q%32,b[(q+64>>>9<<4)+14]=q;var h,N,v,x,k,d=1732584193,c=-271733879,u=-1732584194,f=271733878;for(h=0;h<b.length;h+=16)N=d,v=c,x=u,k=f,d=I(d,c,u,f,b[h],7,-680876936),f=I(f,d,c,u,b[h+1],12,-389564586),u=I(u,f,d,c,b[h+2],17,606105819),c=I(c,u,f,d,b[h+3],22,-1044525330),d=I(d,c,u,f,b[h+4],7,-176418897),f=I(f,d,c,u,b[h+5],12,1200080426),u=I(u,f,d,c,b[h+6],17,-1473231341),c=I(c,u,f,d,b[h+7],22,-45705983),d=I(d,c,u,f,b[h+8],7,1770035416),f=I(f,d,c,u,b[h+9],12,-1958414417),u=I(u,f,d,c,b[h+10],17,-42063),c=I(c,u,f,d,b[h+11],22,-1990404162),d=I(d,c,u,f,b[h+12],7,1804603682),f=I(f,d,c,u,b[h+13],12,-40341101),u=I(u,f,d,c,b[h+14],17,-1502002290),c=I(c,u,f,d,b[h+15],22,1236535329),d=D(d,c,u,f,b[h+1],5,-165796510),f=D(f,d,c,u,b[h+6],9,-1069501632),u=D(u,f,d,c,b[h+11],14,643717713),c=D(c,u,f,d,b[h],20,-373897302),d=D(d,c,u,f,b[h+5],5,-701558691),f=D(f,d,c,u,b[h+10],9,38016083),u=D(u,f,d,c,b[h+15],14,-660478335),c=D(c,u,f,d,b[h+4],20,-405537848),d=D(d,c,u,f,b[h+9],5,568446438),f=D(f,d,c,u,b[h+14],9,-1019803690),u=D(u,f,d,c,b[h+3],14,-187363961),c=D(c,u,f,d,b[h+8],20,1163531501),d=D(d,c,u,f,b[h+13],5,-1444681467),f=D(f,d,c,u,b[h+2],9,-51403784),u=D(u,f,d,c,b[h+7],14,1735328473),c=D(c,u,f,d,b[h+12],20,-1926607734),d=U(d,c,u,f,b[h+5],4,-378558),f=U(f,d,c,u,b[h+8],11,-2022574463),u=U(u,f,d,c,b[h+11],16,1839030562),c=U(c,u,f,d,b[h+14],23,-35309556),d=U(d,c,u,f,b[h+1],4,-1530992060),f=U(f,d,c,u,b[h+4],11,1272893353),u=U(u,f,d,c,b[h+7],16,-155497632),c=U(c,u,f,d,b[h+10],23,-1094730640),d=U(d,c,u,f,b[h+13],4,681279174),f=U(f,d,c,u,b[h],11,-358537222),u=U(u,f,d,c,b[h+3],16,-722521979),c=U(c,u,f,d,b[h+6],23,76029189),d=U(d,c,u,f,b[h+9],4,-640364487),f=U(f,d,c,u,b[h+12],11,-421815835),u=U(u,f,d,c,b[h+15],16,530742520),c=U(c,u,f,d,b[h+2],23,-995338651),d=Y(d,c,u,f,b[h],6,-198630844),f=Y(f,d,c,u,b[h+7],10,1126891415),u=Y(u,f,d,c,b[h+14],15,-1416354905),c=Y(c,u,f,d,b[h+5],21,-57434055),d=Y(d,c,u,f,b[h+12],6,1700485571),f=Y(f,d,c,u,b[h+3],10,-1894986606),u=Y(u,f,d,c,b[h+10],15,-1051523),c=Y(c,u,f,d,b[h+1],21,-2054922799),d=Y(d,c,u,f,b[h+8],6,1873313359),f=Y(f,d,c,u,b[h+15],10,-30611744),u=Y(u,f,d,c,b[h+6],15,-1560198380),c=Y(c,u,f,d,b[h+13],21,1309151649),d=Y(d,c,u,f,b[h+4],6,-145523070),f=Y(f,d,c,u,b[h+11],10,-1120210379),u=Y(u,f,d,c,b[h+2],15,718787259),c=Y(c,u,f,d,b[h+9],21,-343485551),d=m(d,N),c=m(c,v),u=m(u,x),f=m(f,k);return[d,c,u,f]}function gn(b){var q,h="",N=b.length*32;for(q=0;q<N;q+=8)h+=String.fromCharCode(b[q>>5]>>>q%32&255);return h}function fn(b){var q,h=[];for(h[(b.length>>2)-1]=void 0,q=0;q<h.length;q+=1)h[q]=0;var N=b.length*8;for(q=0;q<N;q+=8)h[q>>5]|=(b.charCodeAt(q/8)&255)<<q%32;return h}function wn(b){return gn($(fn(b),b.length*8))}function Mn(b,q){var h,N=fn(b),v=[],x=[],k;for(v[15]=x[15]=void 0,N.length>16&&(N=$(N,b.length*8)),h=0;h<16;h+=1)v[h]=N[h]^909522486,x[h]=N[h]^1549556828;return k=$(v.concat(fn(q)),512+q.length*8),gn($(x.concat(k),640))}function _(b){var q="0123456789abcdef",h="",N,v;for(v=0;v<b.length;v+=1)N=b.charCodeAt(v),h+=q.charAt(N>>>4&15)+q.charAt(N&15);return h}function nn(b){return unescape(encodeURIComponent(b))}function Bn(b){return wn(nn(b))}function Nn(b){return _(Bn(b))}function Un(b,q){return Mn(nn(b),nn(q))}function Jn(b,q){return _(Un(b,q))}function Yn(b,q,h){return q?h?Un(q,b):Jn(q,b):h?Bn(b):Nn(b)}typeof define=="function"&&define.amd?define(function(){return Yn}):typeof jt=="object"&&jt.exports?jt.exports=Yn:p.md5=Yn})(to)});var ro=Gn((Ei,oo)=>{"use strict";T();function mi(p,m){return Object.prototype.hasOwnProperty.call(p,m)}oo.exports=function(p,m,A,G){m=m||"&",A=A||"=";var I={};if(typeof p!="string"||p.length===0)return I;var D=/\+/g;p=p.split(m);var U=1e3;G&&typeof G.maxKeys=="number"&&(U=G.maxKeys);var Y=p.length;U>0&&Y>U&&(Y=U);for(var $=0;$<Y;++$){var gn=p[$].replace(D,"%20"),fn=gn.indexOf(A),wn,Mn,_,nn;fn>=0?(wn=gn.substr(0,fn),Mn=gn.substr(fn+1)):(wn=gn,Mn=""),_=decodeURIComponent(wn),nn=decodeURIComponent(Mn),mi(I,_)?Array.isArray(I[_])?I[_].push(nn):I[_]=[I[_],nn]:I[_]=nn}return I}});var ao=Gn((Yi,io)=>{"use strict";T();var st=function(p){switch(typeof p){case"string":return p;case"boolean":return p?"true":"false";case"number":return isFinite(p)?p:"";default:return""}};io.exports=function(p,m,A,G){return m=m||"&",A=A||"=",p===null&&(p=void 0),typeof p=="object"?Object.keys(p).map(function(I){var D=encodeURIComponent(st(I))+A;return Array.isArray(p[I])?p[I].map(function(U){return D+encodeURIComponent(st(U))}).join(m):D+encodeURIComponent(st(p[I]))}).join(m):G?encodeURIComponent(st(G))+A+encodeURIComponent(st(p)):""}});var lo=Gn(ct=>{"use strict";T();ct.decode=ct.parse=ro();ct.encode=ct.stringify=ao()});var ho=Gn((Wi,bo)=>{T();var vi=eo(),xi=lo(),yi=/^[0-9a-f]{32}$/;function wi(p){var m={},A={protocol:1,format:1};for(var G in p)A[G]||(m[G]=p[G]);return m}function po(p,m){if(p)return typeof p.protocol=="boolean"?p.protocol:p.protocol==="http"?!1:p.protocol==="https"?!0:void 0}function so(p){return p=typeof p=="string"?p.trim().toLowerCase():"unspecified",p.match(yi)?p:vi(p)}function co(p){var m=xi.stringify(wi(p));return m&&"?"+m||""}var Bi=bo.exports={url:function(p,m,A){var G="//www.gravatar.com/avatar/";m&&m.cdn?(G=m.cdn+"/avatar/",delete m.cdn):(m&&m.protocol&&(A=po(m)),typeof A<"u"&&(G=A?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var I=co(m);return G+so(p)+I},profile_url:function(p,m,A){var G=m!=null&&m.format!=null?String(m.format):"json",I;if(m&&m.cdn)I=m.cdn+"/",delete m.cdn;else{m&&m.protocol&&(A=po(m));var I=A&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var D=co(m);return I+so(p)+"."+G+D}}});var fo=Gn((Vi,go)=>{T();go.exports=ho()});var xo=Gn((Ji,vo)=>{T();var uo=(Ve(),Ne(Fe)),mo=(Ke(),Ne(_e)),Qi=$e(),ki=no(),zi=fo();function qi(p){var m=uo.readFileSync(mo.resolve("/","css","theme.css"),"utf8"),A=uo.readFileSync(mo.resolve("/","index.html"),"utf8");p.bio&&p.bio.email&&p.bio.email.personal&&(p.bio.gravatar=zi.url(p.bio.email.personal,{s:"200",r:"pg",d:"mm"}));var G=ki.render(A,{resume:p,csstheme:m});return G}vo.exports={render:qi}});T();var Cn=gi(xo(),1),yo=Cn.default??Cn,Hi=yo.render??Cn.render,Pi=yo.pdfRenderOptions??Cn.pdfRenderOptions;export{Pi as pdfRenderOptions,Hi as render};
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
