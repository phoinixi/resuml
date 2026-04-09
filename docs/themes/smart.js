var En=Object.create;var de=Object.defineProperty;var wn=Object.getOwnPropertyDescriptor;var Tn=Object.getOwnPropertyNames;var Ln=Object.getPrototypeOf,On=Object.prototype.hasOwnProperty;var Ae=(m,k)=>()=>(m&&(k=m(m=0)),k);var oe=(m,k)=>()=>(k||m((k={exports:{}}).exports,k),k.exports),Me=(m,k)=>{for(var v in k)de(m,v,{get:k[v],enumerable:!0})},Ie=(m,k,v,a)=>{if(k&&typeof k=="object"||typeof k=="function")for(let f of Tn(k))!On.call(m,f)&&f!==v&&de(m,f,{get:()=>k[f],enumerable:!(a=wn(k,f))||a.enumerable});return m};var An=(m,k,v)=>(v=m!=null?En(Ln(m)):{},Ie(k||!m||!m.__esModule?de(v,"default",{value:m,enumerable:!0}):v,m)),Pe=m=>Ie(de({},"__esModule",{value:!0}),m);var D=Ae(()=>{});var Xe={};Me(Xe,{createReadStream:()=>Ye,createWriteStream:()=>Je,default:()=>Sn,existsSync:()=>je,lstatSync:()=>We,mkdirSync:()=>Ue,readFileSync:()=>De,readdirSync:()=>$e,rmdirSync:()=>He,statSync:()=>Ce,unlinkSync:()=>Ge,writeFileSync:()=>Ve});function Ne(m){return String(m).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function ze(m){var k=Ne(m);if(me[k]!==void 0)return me[k];for(var v=Object.keys(me),a=0;a<v.length;a++)if(k.endsWith("/"+v[a])||k===v[a])return me[v[a]]}function Se(m){var k=Ne(m);if(ve[k]!==void 0)return ve[k];for(var v=Object.keys(ve),a=0;a<v.length;a++)if(k.endsWith("/"+v[a])||k===v[a])return ve[v[a]]}var me,ve,De,$e,je,Ve,Ue,Ce,We,Ge,He,Ye,Je,Sn,qe=Ae(()=>{"use strict";D();me={"css/css.css":`/* 
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com 
Twitter: @rich_clark
*/
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent; }

body {
  line-height: 1; }

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block; }

nav ul {
  list-style: none; }

blockquote, q {
  quotes: none; }

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none; }

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent; }

/* change colours to suit your needs */
ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none; }

/* change colours to suit your needs */
mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold; }

del {
  text-decoration: line-through; }

abbr[title], dfn[title] {
  border-bottom: 1px dotted;
  cursor: help; }

table {
  border-collapse: collapse;
  border-spacing: 0; }

/* change border colour to suit your needs */
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0; }

input, select {
  vertical-align: middle; }

body {
  font-family: arial;
  font-size: 10.5pt;
  padding: 2em 1em;
  text-align: center; }

small {
  color: #aaa;
  font-size: .8em; }

h1 {
  display: none; }

a {
  text-decoration: none;
  color: inherit; }

/* Outline ------------------------------------------------------------*/
.outline {
  align-items: stretch;
  display: flex;
  justify-content: center; }
  .outline > .left, .outline > .right {
    flex-basis: 100%; }
  .outline .left * .ellipsis, .outline .right * .ellipsis {
    border-radius: 3px;
    background-color: #ddd;
    display: inline-block;
    padding: 2px;
    font-size: .8em;
    margin-top: 5px; }
  .outline .left *:hover .ellipsis, .outline .right *:hover .ellipsis {
    display: none; }
  .outline .left * .limited, .outline .right * .limited {
    transform: scale(1, 0);
    position: absolute;
    transition: none; }
  .outline .left *:hover .limited, .outline .right *:hover .limited {
    transform: scale(1, 1);
    position: static;
    transition: all .35s; }

.roll-out {
  background-color: #ddd;
  border-radius: 4px;
  border: 3px solid #ddd;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.5);
  height: 35px;
  left: 15px;
  overflow: hidden;
  position: fixed;
  top: 20px;
  transition: all .35s;
  width: 30px;
  z-index: 1000; }
  .roll-out:hover + .outline .left * .ellipsis, .roll-out:hover + .outline .right * .ellipsis {
    display: none; }
  .roll-out:hover + .outline .left * .limited, .roll-out:hover + .outline .right * .limited {
    transform: scale(1, 1);
    position: static;
    transition: all .35s; }
  .roll-out:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5); }
    .roll-out:hover:before, .roll-out:hover:after {
      transform: translate(0, -100%); }
    .roll-out:hover:after {
      top: calc(50% + 3px); }
  .roll-out:before, .roll-out:after {
    background-color: #fff;
    border-radius: 1px;
    content: ' ';
    display: block;
    height: 20px;
    border: 1px solid #aaa;
    margin: auto;
    position: relative;
    transform: translate(0, -50%);
    transition: all .35s;
    width: 15px; }
  .roll-out:before {
    top: 50%; }
  .roll-out:after {
    top: calc(50% + 15px); }

.left {
  border-right: 2px dotted #0099b9;
  padding-right: calc(1.4em + 2px); }

.right {
  padding-left: 1.4em; }

.left article {
  text-align: right; }

.right article {
  text-align: left; }

.left article h2 {
  margin-left: auto;
  padding-right: 1.4em;
  right: -1.4em; }

.right article h2 {
  margin-right: auto;
  padding-left: calc(1.4em + 2px);
  left: calc(-1.4em - 2px); }

.outline article h2 {
  width: 60%;
  position: relative;
  display: block;
  color: #0099b9;
  margin-top: .7em;
  margin-bottom: .3em;
  padding-bottom: .1em;
  text-transform: uppercase;
  border-bottom: 1px dotted #0099b9; }

.outline article:first-of-type h2 {
  margin-top: 0; }

.outline article dt {
  font-weight: bold;
  font-size: smaller;
  color: #4b5467; }

.outline article dd {
  font-size: .9em; }

.lineList {
  margin-left: 6em;
  padding-left: 10px;
  border-left: 1px solid #0099b9; }

.lineList .date_range {
  display: block;
  position: relative;
  left: calc(-1px - 6em - 10px * 2);
  width: 6em;
  height: 0;
  text-align: right; }

.lineList dt {
  position: relative; }
  .lineList dt:before {
    background-clip: content-box;
    background-color: #0099b9;
    border-radius: 100%;
    border: 1px solid #0099b9;
    box-sizing: border-box;
    content: ' ';
    display: block;
    height: 10px;
    left: calc(-10px - 10px / 2 - .5px);
    padding: 2px;
    position: absolute;
    width: 10px; }

.date_range, #languages dt {
  font-weight: normal;
  font-size: smaller;
  color: #aaa;
  letter-spacing: .05em;
  margin: .4em 0 0 0;
  font-weight: normal; }

#person h2 {
  display: none; }

#photo {
  display: block;
  margin-right: auto;
  width: 16em;
  height: 16em;
  background-size: cover;
  overflow: hidden;
  border: 0.3em solid #0099b9;
  border-radius: 100%;
  box-shadow: 0, 0, 2em, 0em, #333, inset; }

#photo > img {
  height: 100%;
  position: relative;
  z-index: -1; }

#person > div {
  display: inline-block;
  text-align: center; }

#person span {
  font-size: smaller; }

#skills ul {
  list-style: none; }

#skills .rate {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  box-sizing: border-box; }
  #skills .rate:not(:first-of-type) {
    margin-left: 1.5px; }
  #skills .rate.void {
    border: 1px solid #aaa; }
  #skills .rate.full {
    border: 1px solid #0099b9;
    background-color: #0099b9;
    padding: 2px;
    background-clip: content-box; }

#skills li {
  display: block;
  margin-top: .2em; }

#certificates .date_range {
  margin-top: .7em;
  display: block; }

#certificates dl:first-of-type .date_range {
  margin-top: .2em; }

#hobbies {
  padding-left: 10%; }

#hobbies h2 {
  margin-bottom: .2em; }

#hobbies li {
  list-style: none;
  display: inline-block;
  white-space: nowrap;
  color: #fff;
  padding: .05em .6em .1em .6em;
  margin: .1em 0;
  vertical-align: middle;
  border-radius: 100px; }

@media all and (max-width: 700px) {
  #hobbies li {
    white-space: initial; } }

#hobbies li[data-importance='7'] {
  font-size: 1.1em;
  background-color: #54b1eb; }

#hobbies li[data-importance='6'] {
  font-size: 1.02em;
  background-color: #479ee1; }

#hobbies li[data-importance='5'] {
  font-size: .95em;
  background-color: #3a8cd8; }

#hobbies li[data-importance='4'] {
  font-size: .8em;
  background-color: #2e79cf; }

#hobbies li[data-importance='3'] {
  font-size: .72em;
  background-color: #2367c5; }

#hobbies li[data-importance='2'] {
  font-size: .68em;
  background-color: #1955bc; }

#work_experience .workplace, #education .faculty {
  color: #aaa;
  font-weight: bold; }

/* End of Outline ------------------------------------------------------------*/
/* Header ------------------------------------------------------------*/
header {
  display: flex;
  text-align: center;
  margin-top: 2em;
  justify-content: center;
  align-items: center; }
  header dt {
    display: none; }
  header dl {
    display: inline-block;
    text-align: left;
    vertical-align: middle; }
  header dd {
    display: inline-block;
    text-align: left; }
  header .name {
    font-size: 2.8em;
    font-family: "Trebuchet";
    color: #0099b9;
    text-transform: uppercase; }
  header .name span:first-letter {
    font-size: larger; }
  header .description dd {
    font-style: italic;
    max-width: 400px;
    font-size: .9em;
    color: #aaa; }
  header dd span {
    display: block; }
  header dl:nth-of-type(1) {
    border-right: 2px solid #4b5467;
    padding-right: 10px;
    text-align: right;
    width: 40%; }
  header dl:nth-of-type(2) {
    width: calc(60% - 2px - 10px - 5px - 4px);
    padding-left: 5px; }

/* End of Header ------------------------------------------------------------*/
/* Contact data ------------------------------------------------------------*/
.contact_data {
  margin: 3em 10%;
  padding: 1.5em 0;
  border-width: 1px 0;
  border-color: #0099b9;
  border-style: solid; }
  .contact_data dl {
    align-items: center;
    display: flex;
    justify-content: space-around; }
    .contact_data dl dt {
      display: none; }
    .contact_data dl dd {
      color: #4b5467;
      text-align: center;
      font-size: 1em;
      font-style: italic; }
    .contact_data dl .icon {
      border-radius: 100%;
      border: 2px solid #4b5467;
      display: block;
      font-size: 2em;
      font-style: normal;
      height: 35px;
      line-height: 1.2;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      width: 35px; }

/* End of Contact data ------------------------------------------------------------*/
/* Footer ------------------------------------------------------------*/
footer.legal {
  color: #b9b9b9;
  font-size: .8em;
  display: block;
  width: 80%;
  min-width: 150px;
  margin: 2em auto 0 auto; }

/* End of Footer ------------------------------------------------------------*/
`,"css/print.css":`body {
  width: 21cm;
  /*Makes it print correctly on A4*/ }

.ellipsis {
  display: none !important; }

.roll-out {
  display: none !important; }
`,"package.json":`{
  "name": "jsonresume-theme-smart",
  "version": "1.0.2",
  "description": "Print-friendly & UX-friendly, customizable JSON Resume theme.",
  "keywords": [
    "JSON Resume",
    "resume",
    "theme"
  ],
  "author": "Piotr D\u017Caluk",
  "repository": {
    "type": "git",
    "url": "https://github.com/jalooc/jsonresume-theme-smart"
  },
  "license": "MIT",
  "scripts": {
    "dev": "gulp serve"
  },
  "dependencies": {
    "nunjucks": "^2.3.0"
  },
  "devDependencies": {
    "browser-sync": "^2.11.1",
    "gulp": "^3.9.1",
    "gulp-nunjucks": "^2.2.0",
    "gulp-rename": "^1.2.2",
    "gulp-sass": "^2.2.0",
    "nunjucks": "^2.3.0",
    "resume-schema": "0.0.16"
  }
}
`,"scss/css.scss":`@import "./html5reset-1.6.1";
@import "modules/colors";
@import "modules/measurements";

body {
  font-family: arial;
  font-size: 10.5pt;
  padding: 2em 1em;
  text-align: center;
}

small {
  color: $lightGrey;
  font-size: .8em;
}

h1 {
  display: none;
}

a {
  text-decoration: none;
  color: inherit;
}

@import "partials/outline";
@import "partials/header";
@import "partials/contact_data";
@import "partials/footer";`,"scss/html5reset-1.6.1.css":`/* 
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com 
Twitter: @rich_clark
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section { 
	display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000; 
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;   
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}`,"scss/modules/_colors.scss":`$borderBlue: #79b9ff;
$bulletBlue: #0099b9;
$darkGrey: #4b5467;
$lightGrey: #aaa;`,"scss/modules/_measurements.scss":"$pagePhantomMargin: 4px;","scss/partials/_contact_data.scss":`/* Contact data ------------------------------------------------------------*/

.contact_data {
  margin: 3em 10%;
  padding: 1.5em 0;
  border-width: 1px 0;
  border-color: $bulletBlue;
  border-style: solid;

  dl {

    align-items: center;
    display: flex;
    justify-content: space-around;

    dt {
      display: none;
    }

    dd {
      //display: inline-block;
      color: $darkGrey;
      text-align: center;
      //vertical-align: middle;
      //width: calc((100% - 2 * #{$pagePhantomMargin}) / 3);
      font-size: 1em;
      font-style: italic;
    }

    .icon {
      border-radius: 100%;
      border: 2px solid $darkGrey;
      display: block;
      font-size: 2em;
      font-style: normal;
      height: 35px;
      line-height: 1.2;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      width: 35px;
    }

  }

}

/* End of Contact data ------------------------------------------------------------*/`,"scss/partials/_footer.scss":`/* Footer ------------------------------------------------------------*/

footer.legal {
  color: #b9b9b9;
  font-size: .8em;
  display: block;
  width: 80%;
  min-width: 150px;
  margin: 2em auto 0 auto;
}

/* End of Footer ------------------------------------------------------------*/`,"scss/partials/_header.scss":`/* Header ------------------------------------------------------------*/
header {
  display: flex;
  text-align: center;
  margin-top: 2em;
  justify-content: center;
  align-items: center;

  dt {
    display: none;
  }

  dl {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
  }

  dd {
    display: inline-block;
    text-align: left;
  }

  .name {
    font-size: 2.8em;
    font-family: "Trebuchet";
    color: $bulletBlue;
    text-transform: uppercase;
  }

  .name span:first-letter {
    font-size: larger;
  }

  .description dd {
    font-style: italic;
    max-width: 400px;
    font-size: .9em;
    color: $lightGrey;
  }

  dd span {
    display: block;
  }

  dl:nth-of-type(1) {
    border-right: 2px solid $darkGrey;
    padding-right: 10px;
    text-align: right;
    width: 40%;
  }

  dl:nth-of-type(2) {
    width: calc(60% - 2px - 10px - 5px - #{$pagePhantomMargin});
    padding-left: 5px;
  }

}

/* End of Header ------------------------------------------------------------*/`,"scss/partials/_outline.scss":`/* Outline ------------------------------------------------------------*/

$columnWidth: 200px;
$columnRuleColor: black;
$gapWidth: 1.4em;
$vlSize: 2px;

.outline {

  align-items: stretch;
  display: flex;
  justify-content: center;

  > .left, > .right {
    flex-basis: 100%;
  }

  & .left *, & .right * {

    .ellipsis {
      border-radius: 3px;
      background-color: #ddd;
      display: inline-block;
      padding: 2px;
      font-size: .8em;
      margin-top: 5px;
    }

    &:hover .ellipsis {
      display: none;
    }

    .limited {
      transform: scale(1, 0);
      position: absolute;
      transition: none;
    }

    &:hover {

      .limited {
        transform: scale(1, 1);
        position: static;
        transition: all .35s;
      }

    }

  }

}

.roll-out {

  $root-height: 35px;
  $child-height: 20px;

  background-color: #ddd;
  border-radius: 4px;
  border: 3px solid #ddd;
  box-shadow: 0px 0px 10px -4px rgba(#000, .5);
  height: $root-height;
  left: 15px;
  overflow: hidden;
  position: fixed;
  top: 20px;
  transition: all .35s;
  width: 30px;
  z-index: 1000;

  &:hover {
    + .outline .left *, + .outline .right * {

      .ellipsis {
        display: none;
      }

      .limited {
        transform: scale(1, 1);
        position: static;
        transition: all .35s;
      }

    }
  }

  &:hover {

    box-shadow: 0px 0px 5px 0px rgba(#000, .5);

    &:before, &:after {
      transform: translate(0, -100%);
    }

    &:after {
      top: calc(50% + 3px);
    }

  }

  &:before, &:after {
    background-color: #fff;
    border-radius: 1px;
    content: ' ';
    display: block;
    height: $child-height;
    border: 1px solid $lightGrey;
    margin: auto;
    position: relative;
    transform: translate(0,-50%);
    transition: all .35s;
    width: 15px;
  }

  &:before {
    top: 50%;
  }

  &:after {
    top: calc(50% + #{$root-height - $child-height});
  }

}

.left {
  border-right: $vlSize dotted $bulletBlue;
  padding-right: calc(#{$gapWidth} + #{$vlSize});
}

.right {
  padding-left: $gapWidth;
}

.left article {
  text-align: right;
}

.right article {
  text-align: left;
}

.left article h2 {
  margin-left: auto;
  padding-right: $gapWidth;
  right: -$gapWidth;
}

.right article h2 {
  margin-right: auto;
  padding-left: calc(#{$gapWidth} + #{$vlSize});
  left: calc(-#{$gapWidth} - #{$vlSize});
}

.outline article h2 {
  width: 60%;
  position: relative;
  display: block;
  color: $bulletBlue;
  margin-top: .7em;
  margin-bottom: .3em;
  padding-bottom: .1em;
  text-transform: uppercase;
  border-bottom: 1px dotted $bulletBlue;
}

.outline article:first-of-type h2 {
  margin-top: 0;
}

.outline article dt {
  font-weight: bold;
  font-size: smaller;
  color: $darkGrey;
}

.outline article dd {
  font-size: .9em;
}

$lineListMargin: 6em;
$lineListPadding: 10px;
$lineListBorderWidth: 1px;

.lineList {
  margin-left: $lineListMargin;
  padding-left: $lineListPadding;
  border-left: $lineListBorderWidth solid $bulletBlue;
}

.lineList .date_range {
  display: block;
  position: relative;
  left: calc(-#{$lineListBorderWidth} - #{$lineListMargin} - #{$lineListPadding} * 2);
  width: $lineListMargin;
  height: 0;
  text-align: right;
}

$bulletSize: 10px;

.lineList dt {

    position: relative;

  &:before {
    background-clip: content-box;
    background-color: $bulletBlue;
    border-radius: 100%;
    border: 1px solid $bulletBlue;
    box-sizing: border-box;
    content: ' ';
    display: block;
    height: $bulletSize;
    left: calc(-#{$lineListPadding} - #{$bulletSize} / 2 - .5px);
    padding: 2px;
    position: absolute;
    width: $bulletSize;
  }
}

.date_range, #languages dt  {
  font-weight: normal;
  font-size: smaller;
  color: $lightGrey;
  letter-spacing: .05em;
  margin: .4em 0 0 0;
  font-weight: normal;
}

#person h2 {
  display: none;
}

$photoBlur: 2em;
$photoSpread: 0em;

#photo {
  display: block;
  margin-right: auto;
  width: 16em;
  height: 16em;
  background-size: cover;
  overflow: hidden;
  border: 0.3em solid $bulletBlue;

  border-radius: 100%;

  box-shadow: 0, 0, $photoBlur, $photoSpread, #333, inset;
}

#photo > img {
  height: 100%;
  position: relative;
  z-index: -1;
}

#person > div {
  display: inline-block;
  text-align: center;
}

#person span {
  font-size: smaller;
}

#skills {
  ul {
    list-style: none;
  }

  .rate {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    box-sizing: border-box;

    &:not(:first-of-type) {
      margin-left: 1.5px;
    }

    &.void {
      border: 1px solid $lightGrey;
    }

    &.full {
      border: 1px solid $bulletBlue;
      background-color: $bulletBlue;
      padding: 2px;
      background-clip: content-box;
    }
  }

  li {
    display: block;
    margin-top: .2em;
  }

}

#certificates .date_range {
  margin-top: .7em;
  display: block;
}

#certificates dl:first-of-type .date_range {
  margin-top: .2em;
}

#hobbies {
  padding-left: 10%;
}

#hobbies h2 {
  margin-bottom: .2em;
}

#hobbies li {
  list-style: none;
  display: inline-block;
  white-space: nowrap;
  color: #fff;
  padding: .05em .6em .1em .6em;
  margin: .1em 0;
  vertical-align: middle;

  border-radius: 100px;
}

@media all and (max-width: 700px) {
  #hobbies li {
    white-space: initial;
  }
}

#hobbies li[data-importance='7'] {
  font-size: 1.1em;
  background-color: #54b1eb;
}

#hobbies li[data-importance='6'] {
  font-size: 1.02em;
  background-color: #479ee1;
}

#hobbies li[data-importance='5'] {
  font-size: .95em;
  background-color: #3a8cd8;
}

#hobbies li[data-importance='4'] {
  font-size: .8em;
  background-color: #2e79cf;
}

#hobbies li[data-importance='3'] {
  font-size: .72em;
  background-color: #2367c5}

#hobbies li[data-importance='2'] {
  font-size: .68em;
  background-color: #1955bc;
}

#work_experience .workplace, #education .faculty {
  color: $lightGrey;
  font-weight: bold;
}

/* End of Outline ------------------------------------------------------------*/`,"scss/print.scss":`body {
  width: 21cm; /*Makes it print correctly on A4*/
}

footer {
  //page-break-after: always;
}

.ellipsis {
  display: none !important;
}

.roll-out {
  display: none !important;
}`},ve={css:["css.css","print.css"],"scss/modules":["_colors.scss","_measurements.scss"],"scss/partials":["_contact_data.scss","_footer.scss","_header.scss","_outline.scss"],scss:["css.scss","html5reset-1.6.1.css","modules","partials","print.scss"],".":["LICENSE","README.md","css","gulpfile.js","index.js","index.nunjucks","legalNote.js","nunjucksFilters.js","package.json","resumeLimits.js","scss"]};De=function(m,k){var v=ze(m);return v!==void 0?v:""},$e=function(m,k){var v=Se(m);return v===void 0&&(v=[]),k&&k.withFileTypes?v.map(function(a){var f=Ne(m)+"/"+a,y=Se(f)!==void 0;return{name:a,isFile:function(){return!y},isDirectory:function(){return y}}}):v},je=function(m){return ze(m)!==void 0||Se(m)!==void 0},Ve=function(){},Ue=function(){},Ce=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},We=Ce,Ge=function(){},He=function(){},Ye=function(){return{pipe:function(m){return m},on:function(){return this}}},Je=function(){return{write:function(){},end:function(){},on:function(){return this}}},Sn={readFileSync:De,readdirSync:$e,existsSync:je,writeFileSync:Ve,mkdirSync:Ue,statSync:Ce,lstatSync:We,unlinkSync:Ge,rmdirSync:He,createReadStream:Ye,createWriteStream:Je}});var on={};Me(on,{basename:()=>ge,default:()=>Nn,dirname:()=>_e,extname:()=>xe,isAbsolute:()=>nn,join:()=>Qe,normalize:()=>tn,parse:()=>sn,relative:()=>rn,resolve:()=>Ze,sep:()=>en});var Qe,Ze,_e,ge,xe,en,nn,tn,rn,sn,Nn,an=Ae(()=>{"use strict";D();Qe=function(){return[].slice.call(arguments).join("/")},Ze=function(){return[].slice.call(arguments).join("/")},_e=function(m){return m.split("/").slice(0,-1).join("/")},ge=function(m,k){var v=m.split("/").pop()||"";return k&&v.endsWith(k)?v.slice(0,-k.length):v},xe=function(m){var k=m.match(/\.[^.]+$/);return k?k[0]:""},en="/",nn=function(m){return m.charAt(0)==="/"},tn=function(m){return m},rn=function(m,k){return k},sn=function(m){return{root:"",dir:_e(m),base:ge(m),ext:xe(m),name:ge(m,xe(m))}},Nn={join:Qe,resolve:Ze,dirname:_e,basename:ge,extname:xe,sep:en,isAbsolute:nn,normalize:tn,relative:rn,parse:sn}});var ln=oe((ae,Re)=>{D();(function(k,v){typeof ae=="object"&&typeof Re=="object"?Re.exports=v():typeof define=="function"&&define.amd?define([],v):typeof ae=="object"?ae.nunjucks=v():k.nunjucks=v()})(ae,function(){return(function(m){var k={};function v(a){if(k[a])return k[a].exports;var f=k[a]={exports:{},id:a,loaded:!1};return m[a].call(f.exports,f,f.exports,v),f.loaded=!0,f.exports}return v.m=m,v.c=k,v.p="",v(0)})([function(m,k,v){"use strict";var a=v(1),f=v(2),y=v(15),x=v(14),r=v(3);m.exports={},m.exports.Environment=f.Environment,m.exports.Template=f.Template,m.exports.Loader=y,m.exports.FileSystemLoader=x.FileSystemLoader,m.exports.PrecompiledLoader=x.PrecompiledLoader,m.exports.WebLoader=x.WebLoader,m.exports.compiler=v(7),m.exports.parser=v(8),m.exports.lexer=v(9),m.exports.runtime=v(12),m.exports.lib=a,m.exports.nodes=v(10),m.exports.installJinjaCompat=v(18);var e;m.exports.configure=function(n,t){t=t||{},a.isObject(n)&&(t=n,n=null);var l;return x.FileSystemLoader?l=new x.FileSystemLoader(n,{watch:t.watch,noCache:t.noCache}):x.WebLoader&&(l=new x.WebLoader(n,{useCache:t.web&&t.web.useCache,async:t.web&&t.web.async})),e=new f.Environment(l,t),t&&t.express&&e.express(t.express),e},m.exports.compile=function(n,t,l,i){return e||m.exports.configure(),new m.exports.Template(n,t,l,i)},m.exports.render=function(n,t,l){return e||m.exports.configure(),e.render(n,t,l)},m.exports.renderString=function(n,t,l){return e||m.exports.configure(),e.renderString(n,t,l)},r&&(m.exports.precompile=r.precompile,m.exports.precompileString=r.precompileString)},function(m,r){"use strict";var v=Array.prototype,a=Object.prototype,f={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},y=/[&"'<>]/g,x=function(e){return f[e]},r=m.exports={};r.prettifyError=function(e,n,t){if(t.Update||(t=new r.TemplateError(t)),t.Update(e),!n){var l=t;t=new Error(l.message),t.name=l.name}return t},r.TemplateError=function(e,n,t){var l=this;if(e instanceof Error){l=e,e=e.name+": "+e.message;try{l.name=""}catch{l=this}}else Error.captureStackTrace&&Error.captureStackTrace(l);return l.name="Template render error",l.message=e,l.lineno=n,l.colno=t,l.firstUpdate=!0,l.Update=function(i){var s="("+(i||"unknown path")+")";return this.firstUpdate&&(this.lineno&&this.colno?s+=" [Line "+this.lineno+", Column "+this.colno+"]":this.lineno&&(s+=" [Line "+this.lineno+"]")),s+=`
 `,this.firstUpdate&&(s+=" "),this.message=s+(this.message||""),this.firstUpdate=!1,this},l},r.TemplateError.prototype=Error.prototype,r.escape=function(e){return e.replace(y,x)},r.isFunction=function(e){return a.toString.call(e)==="[object Function]"},r.isArray=Array.isArray||function(e){return a.toString.call(e)==="[object Array]"},r.isString=function(e){return a.toString.call(e)==="[object String]"},r.isObject=function(e){return a.toString.call(e)==="[object Object]"},r.groupBy=function(e,n){for(var t={},l=r.isFunction(n)?n:function(p){return p[n]},i=0;i<e.length;i++){var s=e[i],c=l(s,i);(t[c]||(t[c]=[])).push(s)}return t},r.toArray=function(e){return Array.prototype.slice.call(e)},r.without=function(e){var n=[];if(!e)return n;for(var t=-1,l=e.length,i=r.toArray(arguments).slice(1);++t<l;)r.indexOf(i,e[t])===-1&&n.push(e[t]);return n},r.extend=function(e,n){for(var t in n)e[t]=n[t];return e},r.repeat=function(e,n){for(var t="",l=0;l<n;l++)t+=e;return t},r.each=function(e,n,t){if(e!=null){if(v.each&&e.each===v.each)e.forEach(n,t);else if(e.length===+e.length)for(var l=0,i=e.length;l<i;l++)n.call(t,e[l],l,e)}},r.map=function(e,n){var t=[];if(e==null)return t;if(v.map&&e.map===v.map)return e.map(n);for(var l=0;l<e.length;l++)t[t.length]=n(e[l],l);return e.length===+e.length&&(t.length=e.length),t},r.asyncIter=function(e,n,t){var l=-1;function i(){l++,l<e.length?n(e[l],l,i,t):t()}i()},r.asyncFor=function(e,n,t){var l=r.keys(e),i=l.length,s=-1;function c(){s++;var p=l[s];s<i?n(p,e[p],s,i,c):t()}c()},r.indexOf=Array.prototype.indexOf?function(e,n,t){return Array.prototype.indexOf.call(e,n,t)}:function(e,n,t){var l=this.length>>>0;for(t=+t||0,Math.abs(t)===1/0&&(t=0),t<0&&(t+=l,t<0&&(t=0));t<l;t++)if(e[t]===n)return t;return-1},Array.prototype.map||(Array.prototype.map=function(){throw new Error("map is unimplemented for this js engine")}),r.keys=function(e){if(Object.prototype.keys)return e.keys();var n=[];for(var t in e)e.hasOwnProperty(t)&&n.push(t);return n},r.inOperator=function(e,n){if(r.isArray(n))return r.indexOf(n,e)!==-1;if(r.isObject(n))return e in n;if(r.isString(n))return n.indexOf(e)!==-1;throw new Error('Cannot use "in" operator to search for "'+e+'" in unexpected types.')}},function(m,k,v){"use strict";var a=v(3),f=v(4),y=v(1),x=v(6),r=v(7),e=v(13),n=v(14),t=v(12),l=v(17),i=t.Frame,s;n.PrecompiledLoader=v(16);function c(o,u,g){f(function(){o(u,g)})}var p=x.extend({init:function(o,u){u=this.opts=u||{},this.opts.dev=!!u.dev,this.opts.autoescape=u.autoescape!=null?u.autoescape:!0,this.opts.throwOnUndefined=!!u.throwOnUndefined,this.opts.trimBlocks=!!u.trimBlocks,this.opts.lstripBlocks=!!u.lstripBlocks,this.loaders=[],o?this.loaders=y.isArray(o)?o:[o]:n.FileSystemLoader?this.loaders=[new n.FileSystemLoader("views")]:n.WebLoader&&(this.loaders=[new n.WebLoader("/views")]),window.nunjucksPrecompiled&&this.loaders.unshift(new n.PrecompiledLoader(window.nunjucksPrecompiled)),this.initCache(),this.globals=l(),this.filters={},this.asyncFilters=[],this.extensions={},this.extensionsList=[];for(var g in e)this.addFilter(g,e[g])},initCache:function(){y.each(this.loaders,function(o){o.cache={},typeof o.on=="function"&&o.on("update",function(u){o.cache[u]=null})})},addExtension:function(o,u){return u._name=o,this.extensions[o]=u,this.extensionsList.push(u),this},removeExtension:function(o){var u=this.getExtension(o);u&&(this.extensionsList=y.without(this.extensionsList,u),delete this.extensions[o])},getExtension:function(o){return this.extensions[o]},hasExtension:function(o){return!!this.extensions[o]},addGlobal:function(o,u){return this.globals[o]=u,this},getGlobal:function(o){if(typeof this.globals[o]>"u")throw new Error("global not found: "+o);return this.globals[o]},addFilter:function(o,u,g){var E=u;return g&&this.asyncFilters.push(o),this.filters[o]=E,this},getFilter:function(o){if(!this.filters[o])throw new Error("filter not found: "+o);return this.filters[o]},resolveTemplate:function(o,u,g){var E=o.isRelative&&u?o.isRelative(g):!1;return E&&o.resolve?o.resolve(u,g):g},getTemplate:function(o,u,g,E,h){var b=this,w=null;if(o&&o.raw&&(o=o.raw),y.isFunction(g)&&(h=g,g=null,u=u||!1),y.isFunction(u)&&(h=u,u=!1),o instanceof s)w=o;else{if(typeof o!="string")throw new Error("template names must be a string: "+o);for(var S=0;S<this.loaders.length;S++){var C=this.resolveTemplate(this.loaders[S],g,o);if(w=this.loaders[S].cache[C],w)break}}if(w)if(u&&w.compile(),h)h(null,w);else return w;else{var O,N=this,F=function(R,M){if(!M&&!R&&(E||(R=new Error("template not found: "+o))),R)if(h)h(R);else throw R;else{var $;M?($=new s(M.src,N,M.path,u),M.noCache||(M.loader.cache[o]=$)):$=new s("",N,"",u),h?h(null,$):O=$}};return y.asyncIter(this.loaders,function(R,M,$,G){function H(Y,J){Y?G(Y):J?(J.loader=R,G(null,J)):$()}o=b.resolveTemplate(R,g,o),R.async?R.getSource(o,H):H(null,R.getSource(o))},F),O}},express:function(o){var u=this;function g(E,h){if(this.name=E,this.path=E,this.defaultEngine=h.defaultEngine,this.ext=a.extname(E),!this.ext&&!this.defaultEngine)throw new Error("No default engine was specified and no extension was provided.");this.ext||(this.name+=this.ext=(this.defaultEngine[0]!=="."?".":"")+this.defaultEngine)}return g.prototype.render=function(E,h){u.render(this.name,E,h)},o.set("view",g),o.set("nunjucksEnv",this),this},render:function(o,u,g){y.isFunction(u)&&(g=u,u=null);var E=null;return this.getTemplate(o,function(h,b){if(h&&g)c(g,h);else{if(h)throw h;E=b.render(u,g)}}),E},renderString:function(o,u,g,E){y.isFunction(g)&&(E=g,g={}),g=g||{};var h=new s(o,this,g.path);return h.render(u,E)}}),d=x.extend({init:function(o,u,g){this.env=g||new p,this.ctx={};for(var E in o)o.hasOwnProperty(E)&&(this.ctx[E]=o[E]);this.blocks={},this.exported=[];for(var h in u)this.addBlock(h,u[h])},lookup:function(o){return o in this.env.globals&&!(o in this.ctx)?this.env.globals[o]:this.ctx[o]},setVariable:function(o,u){this.ctx[o]=u},getVariables:function(){return this.ctx},addBlock:function(o,u){return this.blocks[o]=this.blocks[o]||[],this.blocks[o].push(u),this},getBlock:function(o){if(!this.blocks[o])throw new Error('unknown block "'+o+'"');return this.blocks[o][0]},getSuper:function(o,u,g,E,h,b){var w=y.indexOf(this.blocks[u]||[],g),S=this.blocks[u][w+1],C=this;if(w===-1||!S)throw new Error('no super block available for "'+u+'"');S(o,C,E,h,b)},addExport:function(o){this.exported.push(o)},getExported:function(){for(var o={},u=0;u<this.exported.length;u++){var g=this.exported[u];o[g]=this.ctx[g]}return o}});s=x.extend({init:function(o,u,g,E){if(this.env=u||new p,y.isObject(o))switch(o.type){case"code":this.tmplProps=o.obj;break;case"string":this.tmplStr=o.obj;break}else if(y.isString(o))this.tmplStr=o;else throw new Error("src must be a string or an object describing the source");if(this.path=g,E){var h=this;try{h._compile()}catch(b){throw y.prettifyError(this.path,this.env.opts.dev,b)}}else this.compiled=!1},render:function(o,u,g){typeof o=="function"?(g=o,o={}):typeof u=="function"&&(g=u,u=null);var E=!0;u&&(E=!1);var h=this;try{h.compile()}catch(O){var b=y.prettifyError(this.path,this.env.opts.dev,O);if(g)return c(g,b);throw b}var w=new d(o||{},h.blocks,h.env),S=u?u.push(!0):new i;S.topLevel=!0;var C=null;return h.rootRenderFunc(h.env,w,S||new i,t,function(O,N){if(O&&(O=y.prettifyError(h.path,h.env.opts.dev,O)),g)E?c(g,O,N):g(O,N);else{if(O)throw O;C=N}}),C},getExported:function(o,u,g){typeof o=="function"&&(g=o,o={}),typeof u=="function"&&(g=u,u=null);try{this.compile()}catch(b){if(g)return g(b);throw b}var E=u?u.push():new i;E.topLevel=!0;var h=new d(o||{},this.blocks,this.env);this.rootRenderFunc(this.env,h,E,t,function(b){b?g(b,null):g(null,h.getExported())})},compile:function(){this.compiled||this._compile()},_compile:function(){var o;if(this.tmplProps)o=this.tmplProps;else{var u=r.compile(this.tmplStr,this.env.asyncFilters,this.env.extensionsList,this.path,this.env.opts),g=new Function(u);o=g()}this.blocks=this._getBlocks(o),this.rootRenderFunc=o.root,this.compiled=!0},_getBlocks:function(o){var u={};for(var g in o)g.slice(0,2)==="b_"&&(u[g.slice(2)]=o[g]);return u}}),m.exports={Environment:p,Template:s}},function(m,k){},function(m,k,v){"use strict";var a=v(5),f=[],y=[],x=a.makeRequestCallFromTimer(r);function r(){if(y.length)throw y.shift()}m.exports=e;function e(t){var l;f.length?l=f.pop():l=new n,l.task=t,a(l)}function n(){this.task=null}n.prototype.call=function(){try{this.task.call()}catch(t){e.onerror?e.onerror(t):(y.push(t),x())}finally{this.task=null,f[f.length]=this}}},function(m,k){(function(v){"use strict";m.exports=a;function a(s){f.length||(x(),y=!0),f[f.length]=s}var f=[],y=!1,x,r=0,e=1024;function n(){for(;r<f.length;){var s=r;if(r=r+1,f[s].call(),r>e){for(var c=0,p=f.length-r;c<p;c++)f[c]=f[c+r];f.length-=r,r=0}}f.length=0,r=0,y=!1}var t=v.MutationObserver||v.WebKitMutationObserver;typeof t=="function"?x=l(n):x=i(n),a.requestFlush=x;function l(s){var c=1,p=new t(s),d=document.createTextNode("");return p.observe(d,{characterData:!0}),function(){c=-c,d.data=c}}function i(s){return function(){var p=setTimeout(o,0),d=setInterval(o,50);function o(){clearTimeout(p),clearInterval(d),s()}}}a.makeRequestCallFromTimer=i}).call(k,(function(){return this})())},function(m,k){"use strict";function v(a,f,y){var x=function(){};x.prototype=a.prototype;var r=new x,e=/xyz/.test(function(){xyz})?/\bparent\b/:/.*/;y=y||{};for(var n in y){var t=y[n],l=r[n];typeof l=="function"&&typeof t=="function"&&e.test(t)?r[n]=(function(s,c){return function(){var p=this.parent;this.parent=c;var d=s.apply(this,arguments);return this.parent=p,d}})(t,l):r[n]=t}r.typename=f;var i=function(){r.init&&r.init.apply(this,arguments)};return i.prototype=r,i.prototype.constructor=i,i.extend=function(s,c){return typeof s=="object"&&(c=s,s="anonymous"),v(i,s,c)},i}m.exports=v(Object,"Object",{})},function(m,k,v){"use strict";var a=v(1),f=v(8),y=v(11),x=v(10),r=v(6),e=v(12).Frame,n={"==":"==","===":"===","!=":"!=","!==":"!==","<":"<",">":">","<=":"<=",">=":">="};function t(i){return function(s,c){this.compile(s.left,c),this.emit(i),this.compile(s.right,c)}}var l=r.extend({init:function(i,s){this.templateName=i,this.codebuf=[],this.lastId=0,this.buffer=null,this.bufferStack=[],this.scopeClosers="",this.inBlock=!1,this.throwOnUndefined=s},fail:function(i,s,c){throw s!==void 0&&(s+=1),c!==void 0&&(c+=1),new a.TemplateError(i,s,c)},pushBufferId:function(i){this.bufferStack.push(this.buffer),this.buffer=i,this.emit("var "+this.buffer+' = "";')},popBufferId:function(){this.buffer=this.bufferStack.pop()},emit:function(i){this.codebuf.push(i)},emitLine:function(i){this.emit(i+`
`)},emitLines:function(){a.each(a.toArray(arguments),function(i){this.emitLine(i)},this)},emitFuncBegin:function(i){this.buffer="output",this.scopeClosers="",this.emitLine("function "+i+"(env, context, frame, runtime, cb) {"),this.emitLine("var lineno = null;"),this.emitLine("var colno = null;"),this.emitLine("var "+this.buffer+' = "";'),this.emitLine("try {")},emitFuncEnd:function(i){i||this.emitLine("cb(null, "+this.buffer+");"),this.closeScopeLevels(),this.emitLine("} catch (e) {"),this.emitLine("  cb(runtime.handleError(e, lineno, colno));"),this.emitLine("}"),this.emitLine("}"),this.buffer=null},addScopeLevel:function(){this.scopeClosers+="})"},closeScopeLevels:function(){this.emitLine(this.scopeClosers+";"),this.scopeClosers=""},withScopedSyntax:function(i){var s=this.scopeClosers;this.scopeClosers="",i.call(this),this.closeScopeLevels(),this.scopeClosers=s},makeCallback:function(i){var s=this.tmpid();return"function("+s+(i?","+i:"")+`) {
if(`+s+") { cb("+s+"); return; }"},tmpid:function(){return this.lastId++,"t_"+this.lastId},_templateName:function(){return this.templateName==null?"undefined":JSON.stringify(this.templateName)},_compileChildren:function(i,s){for(var c=i.children,p=0,d=c.length;p<d;p++)this.compile(c[p],s)},_compileAggregate:function(i,s,c,p){c&&this.emit(c);for(var d=0;d<i.children.length;d++)d>0&&this.emit(","),this.compile(i.children[d],s);p&&this.emit(p)},_compileExpression:function(i,s){this.assertType(i,x.Literal,x.Symbol,x.Group,x.Array,x.Dict,x.FunCall,x.Caller,x.Filter,x.LookupVal,x.Compare,x.InlineIf,x.In,x.And,x.Or,x.Not,x.Add,x.Concat,x.Sub,x.Mul,x.Div,x.FloorDiv,x.Mod,x.Pow,x.Neg,x.Pos,x.Compare,x.NodeList),this.compile(i,s)},assertType:function(i){for(var s=a.toArray(arguments).slice(1),c=!1,p=0;p<s.length;p++)i instanceof s[p]&&(c=!0);c||this.fail("assertType: invalid type: "+i.typename,i.lineno,i.colno)},compileCallExtension:function(i,s,c){var p=i.args,d=i.contentArgs,o=typeof i.autoescape=="boolean"?i.autoescape:!0;if(c||this.emit(this.buffer+" += runtime.suppressValue("),this.emit('env.getExtension("'+i.extName+'")["'+i.prop+'"]('),this.emit("context"),(p||d)&&this.emit(","),p&&(p instanceof x.NodeList||this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"),a.each(p.children,function(g,E){this._compileExpression(g,s),(E!==p.children.length-1||d.length)&&this.emit(",")},this)),d.length&&a.each(d,function(g,E){if(E>0&&this.emit(","),g){var h=this.tmpid();this.emitLine("function(cb) {"),this.emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}"),this.pushBufferId(h),this.withScopedSyntax(function(){this.compile(g,s),this.emitLine("cb(null, "+h+");")}),this.popBufferId(),this.emitLine("return "+h+";"),this.emitLine("}")}else this.emit("null")},this),c){var u=this.tmpid();this.emitLine(", "+this.makeCallback(u)),this.emitLine(this.buffer+" += runtime.suppressValue("+u+", "+o+" && env.opts.autoescape);"),this.addScopeLevel()}else this.emit(")"),this.emit(", "+o+` && env.opts.autoescape);
`)},compileCallExtensionAsync:function(i,s){this.compileCallExtension(i,s,!0)},compileNodeList:function(i,s){this._compileChildren(i,s)},compileLiteral:function(i){if(typeof i.value=="string"){var s=i.value.replace(/\\/g,"\\\\");s=s.replace(/"/g,'\\"'),s=s.replace(/\n/g,"\\n"),s=s.replace(/\r/g,"\\r"),s=s.replace(/\t/g,"\\t"),this.emit('"'+s+'"')}else i.value===null?this.emit("null"):this.emit(i.value.toString())},compileSymbol:function(i,s){var c=i.value,p;(p=s.lookup(c))?this.emit(p):this.emit('runtime.contextOrFrameLookup(context, frame, "'+c+'")')},compileGroup:function(i,s){this._compileAggregate(i,s,"(",")")},compileArray:function(i,s){this._compileAggregate(i,s,"[","]")},compileDict:function(i,s){this._compileAggregate(i,s,"{","}")},compilePair:function(i,s){var c=i.key,p=i.value;c instanceof x.Symbol?c=new x.Literal(c.lineno,c.colno,c.value):c instanceof x.Literal&&typeof c.value=="string"||this.fail("compilePair: Dict keys must be strings or names",c.lineno,c.colno),this.compile(c,s),this.emit(": "),this._compileExpression(p,s)},compileInlineIf:function(i,s){this.emit("("),this.compile(i.cond,s),this.emit("?"),this.compile(i.body,s),this.emit(":"),i.else_!==null?this.compile(i.else_,s):this.emit('""'),this.emit(")")},compileIn:function(i,s){this.emit("runtime.inOperator("),this.compile(i.left,s),this.emit(","),this.compile(i.right,s),this.emit(")")},compileOr:t(" || "),compileAnd:t(" && "),compileAdd:t(" + "),compileConcat:t(' + "" + '),compileSub:t(" - "),compileMul:t(" * "),compileDiv:t(" / "),compileMod:t(" % "),compileNot:function(i,s){this.emit("!"),this.compile(i.target,s)},compileFloorDiv:function(i,s){this.emit("Math.floor("),this.compile(i.left,s),this.emit(" / "),this.compile(i.right,s),this.emit(")")},compilePow:function(i,s){this.emit("Math.pow("),this.compile(i.left,s),this.emit(", "),this.compile(i.right,s),this.emit(")")},compileNeg:function(i,s){this.emit("-"),this.compile(i.target,s)},compilePos:function(i,s){this.emit("+"),this.compile(i.target,s)},compileCompare:function(i,s){this.compile(i.expr,s);for(var c=0;c<i.ops.length;c++){var p=i.ops[c];this.emit(" "+n[p.type]+" "),this.compile(p.expr,s)}},compileLookupVal:function(i,s){this.emit("runtime.memberLookup(("),this._compileExpression(i.target,s),this.emit("),"),this._compileExpression(i.val,s),this.emit(")")},_getNodeName:function(i){switch(i.typename){case"Symbol":return i.value;case"FunCall":return"the return value of ("+this._getNodeName(i.name)+")";case"LookupVal":return this._getNodeName(i.target)+'["'+this._getNodeName(i.val)+'"]';case"Literal":return i.value.toString();default:return"--expression--"}},compileFunCall:function(i,s){this.emit("(lineno = "+i.lineno+", colno = "+i.colno+", "),this.emit("runtime.callWrap("),this._compileExpression(i.name,s),this.emit(', "'+this._getNodeName(i.name).replace(/"/g,'\\"')+'", context, '),this._compileAggregate(i.args,s,"[","])"),this.emit(")")},compileFilter:function(i,s){var c=i.name;this.assertType(c,x.Symbol),this.emit('env.getFilter("'+c.value+'").call(context, '),this._compileAggregate(i.args,s),this.emit(")")},compileFilterAsync:function(i,s){var c=i.name;this.assertType(c,x.Symbol);var p=i.symbol.value;s.set(p,p),this.emit('env.getFilter("'+c.value+'").call(context, '),this._compileAggregate(i.args,s),this.emitLine(", "+this.makeCallback(p)),this.addScopeLevel()},compileKeywordArgs:function(i,s){var c=[];a.each(i.children,function(p){c.push(p.key.value)}),this.emit("runtime.makeKeywordArgs("),this.compileDict(i,s),this.emit(")")},compileSet:function(i,s){var c=[];a.each(i.targets,function(p){var d=p.value,o=s.lookup(d);o==null&&(o=this.tmpid(),this.emitLine("var "+o+";")),c.push(o)},this),i.value?(this.emit(c.join(" = ")+" = "),this._compileExpression(i.value,s),this.emitLine(";")):(this.emit(c.join(" = ")+" = "),this.compile(i.body,s),this.emitLine(";")),a.each(i.targets,function(p,d){var o=c[d],u=p.value;this.emitLine('frame.set("'+u+'", '+o+", true);"),this.emitLine("if(frame.topLevel) {"),this.emitLine('context.setVariable("'+u+'", '+o+");"),this.emitLine("}"),u.charAt(0)!=="_"&&(this.emitLine("if(frame.topLevel) {"),this.emitLine('context.addExport("'+u+'", '+o+");"),this.emitLine("}"))},this)},compileIf:function(i,s,c){this.emit("if("),this._compileExpression(i.cond,s),this.emitLine(") {"),this.withScopedSyntax(function(){this.compile(i.body,s),c&&this.emit("cb()")}),i.else_?(this.emitLine(`}
else {`),this.withScopedSyntax(function(){this.compile(i.else_,s),c&&this.emit("cb()")})):c&&(this.emitLine(`}
else {`),this.emit("cb()")),this.emitLine("}")},compileIfAsync:function(i,s){this.emit("(function(cb) {"),this.compileIf(i,s,!0),this.emit("})("+this.makeCallback()),this.addScopeLevel()},emitLoopBindings:function(i,s,c,p){var d={index:c+" + 1",index0:c,revindex:p+" - "+c,revindex0:p+" - "+c+" - 1",first:c+" === 0",last:c+" === "+p+" - 1",length:p};for(var o in d)this.emitLine('frame.set("loop.'+o+'", '+d[o]+");")},compileFor:function(i,s){var c,p=this.tmpid(),d=this.tmpid(),o=this.tmpid();if(s=s.push(),this.emitLine("frame = frame.push();"),this.emit("var "+o+" = "),this._compileExpression(i.arr,s),this.emitLine(";"),this.emit("if("+o+") {"),i.name instanceof x.Array){this.emitLine("var "+p+";"),this.emitLine("if(runtime.isArray("+o+")) {");{this.emitLine("var "+d+" = "+o+".length;"),this.emitLine("for("+p+"=0; "+p+" < "+o+".length; "+p+"++) {");for(var u=0;u<i.name.children.length;u++){var g=this.tmpid();this.emitLine("var "+g+" = "+o+"["+p+"]["+u+"]"),this.emitLine('frame.set("'+i.name.children[u].value+'", '+o+"["+p+"]["+u+"]);"),s.set(i.name.children[u].value,g)}this.emitLoopBindings(i,o,p,d),this.withScopedSyntax(function(){this.compile(i.body,s)}),this.emitLine("}")}this.emitLine("} else {");{var E=i.name.children[0],h=i.name.children[1],b=this.tmpid();c=this.tmpid(),s.set(E.value,b),s.set(h.value,c),this.emitLine(p+" = -1;"),this.emitLine("var "+d+" = runtime.keys("+o+").length;"),this.emitLine("for(var "+b+" in "+o+") {"),this.emitLine(p+"++;"),this.emitLine("var "+c+" = "+o+"["+b+"];"),this.emitLine('frame.set("'+E.value+'", '+b+");"),this.emitLine('frame.set("'+h.value+'", '+c+");"),this.emitLoopBindings(i,o,p,d),this.withScopedSyntax(function(){this.compile(i.body,s)}),this.emitLine("}")}this.emitLine("}")}else c=this.tmpid(),s.set(i.name.value,c),this.emitLine("var "+d+" = "+o+".length;"),this.emitLine("for(var "+p+"=0; "+p+" < "+o+".length; "+p+"++) {"),this.emitLine("var "+c+" = "+o+"["+p+"];"),this.emitLine('frame.set("'+i.name.value+'", '+c+");"),this.emitLoopBindings(i,o,p,d),this.withScopedSyntax(function(){this.compile(i.body,s)}),this.emitLine("}");this.emitLine("}"),i.else_&&(this.emitLine("if (!"+d+") {"),this.compile(i.else_,s),this.emitLine("}")),this.emitLine("frame = frame.pop();")},_compileAsyncLoop:function(i,s,c){var p=this.tmpid(),d=this.tmpid(),o=this.tmpid(),u=c?"asyncAll":"asyncEach";if(s=s.push(),this.emitLine("frame = frame.push();"),this.emit("var "+o+" = "),this._compileExpression(i.arr,s),this.emitLine(";"),i.name instanceof x.Array)this.emit("runtime."+u+"("+o+", "+i.name.children.length+", function("),a.each(i.name.children,function(h){this.emit(h.value+",")},this),this.emit(p+","+d+",next) {"),a.each(i.name.children,function(h){var b=h.value;s.set(b,b),this.emitLine('frame.set("'+b+'", '+b+");")},this);else{var g=i.name.value;this.emitLine("runtime."+u+"("+o+", 1, function("+g+", "+p+", "+d+",next) {"),this.emitLine('frame.set("'+g+'", '+g+");"),s.set(g,g)}this.emitLoopBindings(i,o,p,d),this.withScopedSyntax(function(){var h;c&&(h=this.tmpid(),this.pushBufferId(h)),this.compile(i.body,s),this.emitLine("next("+p+(h?","+h:"")+");"),c&&this.popBufferId()});var E=this.tmpid();this.emitLine("}, "+this.makeCallback(E)),this.addScopeLevel(),c&&this.emitLine(this.buffer+" += "+E+";"),i.else_&&(this.emitLine("if (!"+o+".length) {"),this.compile(i.else_,s),this.emitLine("}")),this.emitLine("frame = frame.pop();")},compileAsyncEach:function(i,s){this._compileAsyncLoop(i,s)},compileAsyncAll:function(i,s){this._compileAsyncLoop(i,s,!0)},_compileMacro:function(i,s){var c=[],p=null,d="macro_"+this.tmpid();a.each(i.args.children,function(h,b){b===i.args.children.length-1&&h instanceof x.Dict?p=h:(this.assertType(h,x.Symbol),c.push(h))},this);var o=a.map(c,function(h){return"l_"+h.value});o.push("kwargs");var u=a.map(c,function(h){return'"'+h.value+'"'}),g=a.map(p&&p.children||[],function(h){return'"'+h.key.value+'"'});s=s.push(),this.emitLines("var "+d+" = runtime.makeMacro(","["+u.join(", ")+"], ","["+g.join(", ")+"], ","function ("+o.join(", ")+") {","frame = frame.push(true);","kwargs = kwargs || {};",'if (kwargs.hasOwnProperty("caller")) {','frame.set("caller", kwargs.caller); }'),a.each(c,function(h){this.emitLine('frame.set("'+h.value+'", l_'+h.value+");"),s.set(h.value,"l_"+h.value)},this),p&&a.each(p.children,function(h){var b=h.key.value;this.emit('frame.set("'+b+'", kwargs.hasOwnProperty("'+b+'") ? kwargs["'+b+'"] : '),this._compileExpression(h.value,s),this.emitLine(");")},this);var E=this.tmpid();return this.pushBufferId(E),this.withScopedSyntax(function(){this.compile(i.body,s)}),s=s.pop(),this.emitLine("frame = frame.pop();"),this.emitLine("return new runtime.SafeString("+E+");"),this.emitLine("});"),this.popBufferId(),d},compileMacro:function(i,s){var c=this._compileMacro(i,s),p=i.name.value;s.set(p,c),s.parent?this.emitLine('frame.set("'+p+'", '+c+");"):(i.name.value.charAt(0)!=="_"&&this.emitLine('context.addExport("'+p+'");'),this.emitLine('context.setVariable("'+p+'", '+c+");"))},compileCaller:function(i,s){this.emit("(function (){");var c=this._compileMacro(i,s);this.emit("return "+c+";})()")},compileImport:function(i,s){var c=this.tmpid(),p=i.target.value;this.emit("env.getTemplate("),this._compileExpression(i.template,s),this.emitLine(", false, "+this._templateName()+", false, "+this.makeCallback(c)),this.addScopeLevel(),this.emitLine(c+".getExported("+(i.withContext?"context.getVariables(), frame, ":"")+this.makeCallback(c)),this.addScopeLevel(),s.set(p,c),s.parent?this.emitLine('frame.set("'+p+'", '+c+");"):this.emitLine('context.setVariable("'+p+'", '+c+");")},compileFromImport:function(i,s){var c=this.tmpid();this.emit("env.getTemplate("),this._compileExpression(i.template,s),this.emitLine(", false, "+this._templateName()+", false, "+this.makeCallback(c)),this.addScopeLevel(),this.emitLine(c+".getExported("+(i.withContext?"context.getVariables(), frame, ":"")+this.makeCallback(c)),this.addScopeLevel(),a.each(i.names.children,function(p){var d,o,u=this.tmpid();p instanceof x.Pair?(d=p.key.value,o=p.value.value):(d=p.value,o=d),this.emitLine("if("+c+'.hasOwnProperty("'+d+'")) {'),this.emitLine("var "+u+" = "+c+"."+d+";"),this.emitLine("} else {"),this.emitLine(`cb(new Error("cannot import '`+d+`'")); return;`),this.emitLine("}"),s.set(o,u),s.parent?this.emitLine('frame.set("'+o+'", '+u+");"):this.emitLine('context.setVariable("'+o+'", '+u+");")},this)},compileBlock:function(i){var s=this.tmpid();this.inBlock||this.emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '),this.emit('context.getBlock("'+i.name.value+'")'),this.inBlock||this.emit(")"),this.emitLine("(env, context, frame, runtime, "+this.makeCallback(s)),this.emitLine(this.buffer+" += "+s+";"),this.addScopeLevel()},compileSuper:function(i,s){var c=i.blockName.value,p=i.symbol.value;this.emitLine('context.getSuper(env, "'+c+'", b_'+c+", frame, runtime, "+this.makeCallback(p)),this.emitLine(p+" = runtime.markSafe("+p+");"),this.addScopeLevel(),s.set(p,p)},compileExtends:function(i,s){var c=this.tmpid();this.emit("env.getTemplate("),this._compileExpression(i.template,s),this.emitLine(", true, "+this._templateName()+", false, "+this.makeCallback("_parentTemplate")),this.emitLine("parentTemplate = _parentTemplate"),this.emitLine("for(var "+c+" in parentTemplate.blocks) {"),this.emitLine("context.addBlock("+c+", parentTemplate.blocks["+c+"]);"),this.emitLine("}"),this.addScopeLevel()},compileInclude:function(i,s){var c=this.tmpid(),p=this.tmpid();this.emit("env.getTemplate("),this._compileExpression(i.template,s),this.emitLine(", false, "+this._templateName()+", "+i.ignoreMissing+", "+this.makeCallback(c)),this.addScopeLevel(),this.emitLine(c+".render(context.getVariables(), frame, "+this.makeCallback(p)),this.emitLine(this.buffer+" += "+p),this.addScopeLevel()},compileTemplateData:function(i,s){this.compileLiteral(i,s)},compileCapture:function(i,s){this.emitLine("(function() {"),this.emitLine('var output = "";'),this.withScopedSyntax(function(){this.compile(i.body,s)}),this.emitLine("return output;"),this.emitLine("})()")},compileOutput:function(i,s){for(var c=i.children,p=0,d=c.length;p<d;p++)c[p]instanceof x.TemplateData?c[p].value&&(this.emit(this.buffer+" += "),this.compileLiteral(c[p],s),this.emitLine(";")):(this.emit(this.buffer+" += runtime.suppressValue("),this.throwOnUndefined&&this.emit("runtime.ensureDefined("),this.compile(c[p],s),this.throwOnUndefined&&this.emit(","+i.lineno+","+i.colno+")"),this.emit(`, env.opts.autoescape);
`))},compileRoot:function(i,s){s&&this.fail("compileRoot: root node can't have frame"),s=new e,this.emitFuncBegin("root"),this.emitLine("var parentTemplate = null;"),this._compileChildren(i,s),this.emitLine("if(parentTemplate) {"),this.emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"),this.emitLine("} else {"),this.emitLine("cb(null, "+this.buffer+");"),this.emitLine("}"),this.emitFuncEnd(!0),this.inBlock=!0;var c=[],p,d,o,u=i.findAll(x.Block);for(p=0;p<u.length;p++){if(o=u[p],d=o.name.value,c.indexOf(d)!==-1)throw new Error('Block "'+d+'" defined more than once.');c.push(d),this.emitFuncBegin("b_"+d);var g=new e;this.compile(o.body,g),this.emitFuncEnd()}for(this.emitLine("return {"),p=0;p<u.length;p++)o=u[p],d="b_"+o.name.value,this.emitLine(d+": "+d+",");this.emitLine(`root: root
};`)},compile:function(i,s){var c=this["compile"+i.typename];c?c.call(this,i,s):this.fail("compile: Cannot compile node: "+i.typename,i.lineno,i.colno)},getCode:function(){return this.codebuf.join("")}});m.exports={compile:function(i,s,c,p,d){var o=new l(p,d.throwOnUndefined);if(c&&c.length)for(var u=0;u<c.length;u++)"preprocess"in c[u]&&(i=c[u].preprocess(i,p));return o.compile(y.transform(f.parse(i,c,d),s,p)),o.getCode()},Compiler:l}},function(m,k,v){"use strict";var a=v(9),f=v(10),y=v(6),x=v(1),r=y.extend({init:function(e){this.tokens=e,this.peeked=null,this.breakOnBlocks=null,this.dropLeadingWhitespace=!1,this.extensions=[]},nextToken:function(e){var n;if(this.peeked)if(!e&&this.peeked.type===a.TOKEN_WHITESPACE)this.peeked=null;else return n=this.peeked,this.peeked=null,n;if(n=this.tokens.nextToken(),!e)for(;n&&n.type===a.TOKEN_WHITESPACE;)n=this.tokens.nextToken();return n},peekToken:function(){return this.peeked=this.peeked||this.nextToken(),this.peeked},pushToken:function(e){if(this.peeked)throw new Error("pushToken: can only push one token on between reads");this.peeked=e},fail:function(e,n,t){if((n===void 0||t===void 0)&&this.peekToken()){var l=this.peekToken();n=l.lineno,t=l.colno}throw n!==void 0&&(n+=1),t!==void 0&&(t+=1),new x.TemplateError(e,n,t)},skip:function(e){var n=this.nextToken();return!n||n.type!==e?(this.pushToken(n),!1):!0},expect:function(e){var n=this.nextToken();return n.type!==e&&this.fail("expected "+e+", got "+n.type,n.lineno,n.colno),n},skipValue:function(e,n){var t=this.nextToken();return!t||t.type!==e||t.value!==n?(this.pushToken(t),!1):!0},skipSymbol:function(e){return this.skipValue(a.TOKEN_SYMBOL,e)},advanceAfterBlockEnd:function(e){var n;return e||(n=this.peekToken(),n||this.fail("unexpected end of file"),n.type!==a.TOKEN_SYMBOL&&this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"),e=this.nextToken().value),n=this.nextToken(),n&&n.type===a.TOKEN_BLOCK_END?n.value.charAt(0)==="-"&&(this.dropLeadingWhitespace=!0):this.fail("expected block end in "+e+" statement"),n},advanceAfterVariableEnd:function(){this.skip(a.TOKEN_VARIABLE_END)||this.fail("expected variable end")},parseFor:function(){var e=this.peekToken(),n,t;this.skipSymbol("for")?(n=new f.For(e.lineno,e.colno),t="endfor"):this.skipSymbol("asyncEach")?(n=new f.AsyncEach(e.lineno,e.colno),t="endeach"):this.skipSymbol("asyncAll")?(n=new f.AsyncAll(e.lineno,e.colno),t="endall"):this.fail("parseFor: expected for{Async}",e.lineno,e.colno),n.name=this.parsePrimary(),n.name instanceof f.Symbol||this.fail("parseFor: variable name expected for loop");var l=this.peekToken().type;if(l===a.TOKEN_COMMA){var i=n.name;for(n.name=new f.Array(i.lineno,i.colno),n.name.addChild(i);this.skip(a.TOKEN_COMMA);){var s=this.parsePrimary();n.name.addChild(s)}}return this.skipSymbol("in")||this.fail('parseFor: expected "in" keyword for loop',e.lineno,e.colno),n.arr=this.parseExpression(),this.advanceAfterBlockEnd(e.value),n.body=this.parseUntilBlocks(t,"else"),this.skipSymbol("else")&&(this.advanceAfterBlockEnd("else"),n.else_=this.parseUntilBlocks(t)),this.advanceAfterBlockEnd(),n},parseMacro:function(){var e=this.peekToken();this.skipSymbol("macro")||this.fail("expected macro");var n=this.parsePrimary(!0),t=this.parseSignature(),l=new f.Macro(e.lineno,e.colno,n,t);return this.advanceAfterBlockEnd(e.value),l.body=this.parseUntilBlocks("endmacro"),this.advanceAfterBlockEnd(),l},parseCall:function(){var e=this.peekToken();this.skipSymbol("call")||this.fail("expected call");var n=this.parseSignature(!0)||new f.NodeList,t=this.parsePrimary();this.advanceAfterBlockEnd(e.value);var l=this.parseUntilBlocks("endcall");this.advanceAfterBlockEnd();var i=new f.Symbol(e.lineno,e.colno,"caller"),s=new f.Caller(e.lineno,e.colno,i,n,l),c=t.args.children;c[c.length-1]instanceof f.KeywordArgs||c.push(new f.KeywordArgs);var p=c[c.length-1];return p.addChild(new f.Pair(e.lineno,e.colno,i,s)),new f.Output(e.lineno,e.colno,[t])},parseWithContext:function(){var e=this.peekToken(),n=null;return this.skipSymbol("with")?n=!0:this.skipSymbol("without")&&(n=!1),n!==null&&(this.skipSymbol("context")||this.fail("parseFrom: expected context after with/without",e.lineno,e.colno)),n},parseImport:function(){var e=this.peekToken();this.skipSymbol("import")||this.fail("parseImport: expected import",e.lineno,e.colno);var n=this.parseExpression();this.skipSymbol("as")||this.fail('parseImport: expected "as" keyword',e.lineno,e.colno);var t=this.parseExpression(),l=this.parseWithContext(),i=new f.Import(e.lineno,e.colno,n,t,l);return this.advanceAfterBlockEnd(e.value),i},parseFrom:function(){var e=this.peekToken();this.skipSymbol("from")||this.fail("parseFrom: expected from");var n=this.parseExpression();this.skipSymbol("import")||this.fail("parseFrom: expected import",e.lineno,e.colno);for(var t=new f.NodeList,l;;){var i=this.peekToken();if(i.type===a.TOKEN_BLOCK_END){t.children.length||this.fail("parseFrom: Expected at least one import name",e.lineno,e.colno),i.value.charAt(0)==="-"&&(this.dropLeadingWhitespace=!0),this.nextToken();break}t.children.length>0&&!this.skip(a.TOKEN_COMMA)&&this.fail("parseFrom: expected comma",e.lineno,e.colno);var s=this.parsePrimary();if(s.value.charAt(0)==="_"&&this.fail("parseFrom: names starting with an underscore cannot be imported",s.lineno,s.colno),this.skipSymbol("as")){var c=this.parsePrimary();t.addChild(new f.Pair(s.lineno,s.colno,s,c))}else t.addChild(s);l=this.parseWithContext()}return new f.FromImport(e.lineno,e.colno,n,t,l)},parseBlock:function(){var e=this.peekToken();this.skipSymbol("block")||this.fail("parseBlock: expected block",e.lineno,e.colno);var n=new f.Block(e.lineno,e.colno);n.name=this.parsePrimary(),n.name instanceof f.Symbol||this.fail("parseBlock: variable name expected",e.lineno,e.colno),this.advanceAfterBlockEnd(e.value),n.body=this.parseUntilBlocks("endblock"),this.skipSymbol("endblock"),this.skipSymbol(n.name.value);var t=this.peekToken();return t||this.fail("parseBlock: expected endblock, got end of file"),this.advanceAfterBlockEnd(t.value),n},parseExtends:function(){var e="extends",n=this.peekToken();this.skipSymbol(e)||this.fail("parseTemplateRef: expected "+e);var t=new f.Extends(n.lineno,n.colno);return t.template=this.parseExpression(),this.advanceAfterBlockEnd(n.value),t},parseInclude:function(){var e="include",n=this.peekToken();this.skipSymbol(e)||this.fail("parseInclude: expected "+e);var t=new f.Include(n.lineno,n.colno);return t.template=this.parseExpression(),this.skipSymbol("ignore")&&this.skipSymbol("missing")&&(t.ignoreMissing=!0),this.advanceAfterBlockEnd(n.value),t},parseIf:function(){var e=this.peekToken(),n;this.skipSymbol("if")||this.skipSymbol("elif")||this.skipSymbol("elseif")?n=new f.If(e.lineno,e.colno):this.skipSymbol("ifAsync")?n=new f.IfAsync(e.lineno,e.colno):this.fail("parseIf: expected if, elif, or elseif",e.lineno,e.colno),n.cond=this.parseExpression(),this.advanceAfterBlockEnd(e.value),n.body=this.parseUntilBlocks("elif","elseif","else","endif");var t=this.peekToken();switch(t&&t.value){case"elseif":case"elif":n.else_=this.parseIf();break;case"else":this.advanceAfterBlockEnd(),n.else_=this.parseUntilBlocks("endif"),this.advanceAfterBlockEnd();break;case"endif":n.else_=null,this.advanceAfterBlockEnd();break;default:this.fail("parseIf: expected elif, else, or endif, got end of file")}return n},parseSet:function(){var e=this.peekToken();this.skipSymbol("set")||this.fail("parseSet: expected set",e.lineno,e.colno);for(var n=new f.Set(e.lineno,e.colno,[]),t;(t=this.parsePrimary())&&(n.targets.push(t),!!this.skip(a.TOKEN_COMMA)););return this.skipValue(a.TOKEN_OPERATOR,"=")?(n.value=this.parseExpression(),this.advanceAfterBlockEnd(e.value)):this.skip(a.TOKEN_BLOCK_END)?(n.body=new f.Capture(e.lineno,e.colno,this.parseUntilBlocks("endset")),n.value=null,this.advanceAfterBlockEnd()):this.fail("parseSet: expected = or block end in set tag",e.lineno,e.colno),n},parseStatement:function(){var e=this.peekToken(),n;if(e.type!==a.TOKEN_SYMBOL&&this.fail("tag name expected",e.lineno,e.colno),this.breakOnBlocks&&x.indexOf(this.breakOnBlocks,e.value)!==-1)return null;switch(e.value){case"raw":return this.parseRaw();case"if":case"ifAsync":return this.parseIf();case"for":case"asyncEach":case"asyncAll":return this.parseFor();case"block":return this.parseBlock();case"extends":return this.parseExtends();case"include":return this.parseInclude();case"set":return this.parseSet();case"macro":return this.parseMacro();case"call":return this.parseCall();case"import":return this.parseImport();case"from":return this.parseFrom();case"filter":return this.parseFilterStatement();default:if(this.extensions.length)for(var t=0;t<this.extensions.length;t++){var l=this.extensions[t];if(x.indexOf(l.tags||[],e.value)!==-1)return l.parse(this,f,a)}this.fail("unknown block tag: "+e.value,e.lineno,e.colno)}return n},parseRaw:function(){for(var e=/([\s\S]*?){%\s*(raw|endraw)\s*(?=%})%}/,n=1,t="",l=null,i=this.advanceAfterBlockEnd();(l=this.tokens._extractRegex(e))&&n>0;){var s=l[0],c=l[1],p=l[2];p==="raw"?n+=1:p==="endraw"&&(n-=1),n===0?(t+=c,this.tokens.backN(s.length-c.length)):t+=s}return new f.Output(i.lineno,i.colno,[new f.TemplateData(i.lineno,i.colno,t)])},parsePostfix:function(e){for(var n,t=this.peekToken();t;){if(t.type===a.TOKEN_LEFT_PAREN)e=new f.FunCall(t.lineno,t.colno,e,this.parseSignature());else if(t.type===a.TOKEN_LEFT_BRACKET)n=this.parseAggregate(),n.children.length>1&&this.fail("invalid index"),e=new f.LookupVal(t.lineno,t.colno,e,n.children[0]);else if(t.type===a.TOKEN_OPERATOR&&t.value==="."){this.nextToken();var l=this.nextToken();l.type!==a.TOKEN_SYMBOL&&this.fail("expected name as lookup value, got "+l.value,l.lineno,l.colno),n=new f.Literal(l.lineno,l.colno,l.value),e=new f.LookupVal(t.lineno,t.colno,e,n)}else break;t=this.peekToken()}return e},parseExpression:function(){var e=this.parseInlineIf();return e},parseInlineIf:function(){var e=this.parseOr();if(this.skipSymbol("if")){var n=this.parseOr(),t=e;e=new f.InlineIf(e.lineno,e.colno),e.body=t,e.cond=n,this.skipSymbol("else")?e.else_=this.parseOr():e.else_=null}return e},parseOr:function(){for(var e=this.parseAnd();this.skipSymbol("or");){var n=this.parseAnd();e=new f.Or(e.lineno,e.colno,e,n)}return e},parseAnd:function(){for(var e=this.parseNot();this.skipSymbol("and");){var n=this.parseNot();e=new f.And(e.lineno,e.colno,e,n)}return e},parseNot:function(){var e=this.peekToken();return this.skipSymbol("not")?new f.Not(e.lineno,e.colno,this.parseNot()):this.parseIn()},parseIn:function(){for(var e=this.parseCompare();;){var n=this.nextToken();if(!n)break;var t=n.type===a.TOKEN_SYMBOL&&n.value==="not";if(t||this.pushToken(n),this.skipSymbol("in")){var l=this.parseCompare();e=new f.In(e.lineno,e.colno,e,l),t&&(e=new f.Not(e.lineno,e.colno,e))}else{t&&this.pushToken(n);break}}return e},parseCompare:function(){for(var e=["==","===","!=","!==","<",">","<=",">="],n=this.parseConcat(),t=[];;){var l=this.nextToken();if(l)if(x.indexOf(e,l.value)!==-1)t.push(new f.CompareOperand(l.lineno,l.colno,this.parseConcat(),l.value));else{this.pushToken(l);break}else break}return t.length?new f.Compare(t[0].lineno,t[0].colno,n,t):n},parseConcat:function(){for(var e=this.parseAdd();this.skipValue(a.TOKEN_TILDE,"~");){var n=this.parseAdd();e=new f.Concat(e.lineno,e.colno,e,n)}return e},parseAdd:function(){for(var e=this.parseSub();this.skipValue(a.TOKEN_OPERATOR,"+");){var n=this.parseSub();e=new f.Add(e.lineno,e.colno,e,n)}return e},parseSub:function(){for(var e=this.parseMul();this.skipValue(a.TOKEN_OPERATOR,"-");){var n=this.parseMul();e=new f.Sub(e.lineno,e.colno,e,n)}return e},parseMul:function(){for(var e=this.parseDiv();this.skipValue(a.TOKEN_OPERATOR,"*");){var n=this.parseDiv();e=new f.Mul(e.lineno,e.colno,e,n)}return e},parseDiv:function(){for(var e=this.parseFloorDiv();this.skipValue(a.TOKEN_OPERATOR,"/");){var n=this.parseFloorDiv();e=new f.Div(e.lineno,e.colno,e,n)}return e},parseFloorDiv:function(){for(var e=this.parseMod();this.skipValue(a.TOKEN_OPERATOR,"//");){var n=this.parseMod();e=new f.FloorDiv(e.lineno,e.colno,e,n)}return e},parseMod:function(){for(var e=this.parsePow();this.skipValue(a.TOKEN_OPERATOR,"%");){var n=this.parsePow();e=new f.Mod(e.lineno,e.colno,e,n)}return e},parsePow:function(){for(var e=this.parseUnary();this.skipValue(a.TOKEN_OPERATOR,"**");){var n=this.parseUnary();e=new f.Pow(e.lineno,e.colno,e,n)}return e},parseUnary:function(e){var n=this.peekToken(),t;return this.skipValue(a.TOKEN_OPERATOR,"-")?t=new f.Neg(n.lineno,n.colno,this.parseUnary(!0)):this.skipValue(a.TOKEN_OPERATOR,"+")?t=new f.Pos(n.lineno,n.colno,this.parseUnary(!0)):t=this.parsePrimary(),e||(t=this.parseFilter(t)),t},parsePrimary:function(e){var n=this.nextToken(),t,l=null;if(n?n.type===a.TOKEN_STRING?t=n.value:n.type===a.TOKEN_INT?t=parseInt(n.value,10):n.type===a.TOKEN_FLOAT?t=parseFloat(n.value):n.type===a.TOKEN_BOOLEAN?n.value==="true"?t=!0:n.value==="false"?t=!1:this.fail("invalid boolean: "+n.value,n.lineno,n.colno):n.type===a.TOKEN_NONE?t=null:n.type===a.TOKEN_REGEX&&(t=new RegExp(n.value.body,n.value.flags)):this.fail("expected expression, got end of file"),t!==void 0?l=new f.Literal(n.lineno,n.colno,t):n.type===a.TOKEN_SYMBOL?(l=new f.Symbol(n.lineno,n.colno,n.value),e||(l=this.parsePostfix(l))):(this.pushToken(n),l=this.parseAggregate()),l)return l;this.fail("unexpected token: "+n.value,n.lineno,n.colno)},parseFilterName:function(){for(var e=this.expect(a.TOKEN_SYMBOL),n=e.value;this.skipValue(a.TOKEN_OPERATOR,".");)n+="."+this.expect(a.TOKEN_SYMBOL).value;return new f.Symbol(e.lineno,e.colno,n)},parseFilterArgs:function(e){if(this.peekToken().type===a.TOKEN_LEFT_PAREN){var n=this.parsePostfix(e);return n.args.children}return[]},parseFilter:function(e){for(;this.skip(a.TOKEN_PIPE);){var n=this.parseFilterName();e=new f.Filter(n.lineno,n.colno,n,new f.NodeList(n.lineno,n.colno,[e].concat(this.parseFilterArgs(e))))}return e},parseFilterStatement:function(){var e=this.peekToken();this.skipSymbol("filter")||this.fail("parseFilterStatement: expected filter");var n=this.parseFilterName(),t=this.parseFilterArgs(n);this.advanceAfterBlockEnd(e.value);var l=new f.Capture(n.lineno,n.colno,this.parseUntilBlocks("endfilter"));this.advanceAfterBlockEnd();var i=new f.Filter(n.lineno,n.colno,n,new f.NodeList(n.lineno,n.colno,[l].concat(t)));return new f.Output(n.lineno,n.colno,[i])},parseAggregate:function(){var e=this.nextToken(),n;switch(e.type){case a.TOKEN_LEFT_PAREN:n=new f.Group(e.lineno,e.colno);break;case a.TOKEN_LEFT_BRACKET:n=new f.Array(e.lineno,e.colno);break;case a.TOKEN_LEFT_CURLY:n=new f.Dict(e.lineno,e.colno);break;default:return null}for(;;){var t=this.peekToken().type;if(t===a.TOKEN_RIGHT_PAREN||t===a.TOKEN_RIGHT_BRACKET||t===a.TOKEN_RIGHT_CURLY){this.nextToken();break}if(n.children.length>0&&(this.skip(a.TOKEN_COMMA)||this.fail("parseAggregate: expected comma after expression",e.lineno,e.colno)),n instanceof f.Dict){var l=this.parsePrimary();this.skip(a.TOKEN_COLON)||this.fail("parseAggregate: expected colon after dict key",e.lineno,e.colno);var i=this.parseExpression();n.addChild(new f.Pair(l.lineno,l.colno,l,i))}else{var s=this.parseExpression();n.addChild(s)}}return n},parseSignature:function(e,n){var t=this.peekToken();if(!n&&t.type!==a.TOKEN_LEFT_PAREN){if(e)return null;this.fail("expected arguments",t.lineno,t.colno)}t.type===a.TOKEN_LEFT_PAREN&&(t=this.nextToken());for(var l=new f.NodeList(t.lineno,t.colno),i=new f.KeywordArgs(t.lineno,t.colno),s=!1;;){if(t=this.peekToken(),!n&&t.type===a.TOKEN_RIGHT_PAREN){this.nextToken();break}else if(n&&t.type===a.TOKEN_BLOCK_END)break;if(s&&!this.skip(a.TOKEN_COMMA))this.fail("parseSignature: expected comma after expression",t.lineno,t.colno);else{var c=this.parseExpression();this.skipValue(a.TOKEN_OPERATOR,"=")?i.addChild(new f.Pair(c.lineno,c.colno,c,this.parseExpression())):l.addChild(c)}s=!0}return i.children.length&&l.addChild(i),l},parseUntilBlocks:function(){var e=this.breakOnBlocks;this.breakOnBlocks=x.toArray(arguments);var n=this.parse();return this.breakOnBlocks=e,n},parseNodes:function(){for(var e,n=[];e=this.nextToken();)if(e.type===a.TOKEN_DATA){var t=e.value,l=this.peekToken(),i=l&&l.value;this.dropLeadingWhitespace&&(t=t.replace(/^\s*/,""),this.dropLeadingWhitespace=!1),l&&(l.type===a.TOKEN_BLOCK_START&&i.charAt(i.length-1)==="-"||l.type===a.TOKEN_COMMENT&&i.charAt(this.tokens.tags.COMMENT_START.length)==="-")&&(t=t.replace(/\s*$/,"")),n.push(new f.Output(e.lineno,e.colno,[new f.TemplateData(e.lineno,e.colno,t)]))}else if(e.type===a.TOKEN_BLOCK_START){this.dropLeadingWhitespace=!1;var s=this.parseStatement();if(!s)break;n.push(s)}else if(e.type===a.TOKEN_VARIABLE_START){var c=this.parseExpression();this.advanceAfterVariableEnd(),this.dropLeadingWhitespace=!1,n.push(new f.Output(e.lineno,e.colno,[c]))}else e.type===a.TOKEN_COMMENT?this.dropLeadingWhitespace=e.value.charAt(e.value.length-this.tokens.tags.COMMENT_END.length-1)==="-":this.fail("Unexpected token at top-level: "+e.type,e.lineno,e.colno);return n},parse:function(){return new f.NodeList(0,0,this.parseNodes())},parseAsRoot:function(){return new f.Root(0,0,this.parseNodes())}});m.exports={parse:function(e,n,t){var l=new r(a.lex(e,t));return n!==void 0&&(l.extensions=n),l.parseAsRoot()}}},function(m,k,v){"use strict";var a=v(1),f=` 
	\r\xA0`,y="()[]{}%*-+~/#,:|.<>=!",x="0123456789",r="{%",e="%}",n="{{",t="}}",l="{#",i="#}",s="string",c="whitespace",p="data",d="block-start",o="block-end",u="variable-start",g="variable-end",E="comment",h="left-paren",b="right-paren",w="left-bracket",S="right-bracket",C="left-curly",O="right-curly",N="operator",F="comma",R="colon",M="tilde",$="pipe",G="int",H="float",Y="boolean",J="none",ce="symbol",ye="special",he="regex";function j(L,T,A,I){return{type:L,value:T,lineno:A,colno:I}}function z(L,T){this.str=L,this.index=0,this.len=L.length,this.lineno=0,this.colno=0,this.in_code=!1,T=T||{};var A=T.tags||{};this.tags={BLOCK_START:A.blockStart||r,BLOCK_END:A.blockEnd||e,VARIABLE_START:A.variableStart||n,VARIABLE_END:A.variableEnd||t,COMMENT_START:A.commentStart||l,COMMENT_END:A.commentEnd||i},this.trimBlocks=!!T.trimBlocks,this.lstripBlocks=!!T.lstripBlocks}z.prototype.nextToken=function(){var L=this.lineno,T=this.colno,A;if(this.in_code){var I=this.current();if(this.is_finished())return null;if(I==='"'||I==="'")return j(s,this.parseString(I),L,T);if(A=this._extract(f))return j(c,A,L,T);if((A=this._extractString(this.tags.BLOCK_END))||(A=this._extractString("-"+this.tags.BLOCK_END)))return this.in_code=!1,this.trimBlocks&&(I=this.current(),I===`
`?this.forward():I==="\r"&&(this.forward(),I=this.current(),I===`
`?this.forward():this.back())),j(o,A,L,T);if(A=this._extractString(this.tags.VARIABLE_END))return this.in_code=!1,j(g,A,L,T);if(I==="r"&&this.str.charAt(this.index+1)==="/"){this.forwardN(2);for(var X="";!this.is_finished();)if(this.current()==="/"&&this.previous()!=="\\"){this.forward();break}else X+=this.current(),this.forward();for(var ke=["g","i","m","y"],ue="";!this.is_finished();){var Ee=ke.indexOf(this.current())!==-1;if(Ee)ue+=this.current(),this.forward();else break}return j(he,{body:X,flags:ue},L,T)}else if(y.indexOf(I)!==-1){this.forward();var fe=["==","===","!=","!==","<=",">=","//","**"],ne=I+this.current(),V;switch(a.indexOf(fe,ne)!==-1&&(this.forward(),I=ne,a.indexOf(fe,ne+this.current())!==-1&&(I=ne+this.current(),this.forward())),I){case"(":V=h;break;case")":V=b;break;case"[":V=w;break;case"]":V=S;break;case"{":V=C;break;case"}":V=O;break;case",":V=F;break;case":":V=R;break;case"~":V=M;break;case"|":V=$;break;default:V=N}return j(V,I,L,T)}else if(A=this._extractUntil(f+y),A.match(/^[-+]?[0-9]+$/))if(this.current()==="."){this.forward();var we=this._extract(x);return j(H,A+"."+we,L,T)}else return j(G,A,L,T);else{if(A.match(/^(true|false)$/))return j(Y,A,L,T);if(A==="none")return j(J,A,L,T);if(A)return j(ce,A,L,T);throw new Error("Unexpected value while parsing: "+A)}}else{var Te=this.tags.BLOCK_START.charAt(0)+this.tags.VARIABLE_START.charAt(0)+this.tags.COMMENT_START.charAt(0)+this.tags.COMMENT_END.charAt(0);if(this.is_finished())return null;if((A=this._extractString(this.tags.BLOCK_START+"-"))||(A=this._extractString(this.tags.BLOCK_START)))return this.in_code=!0,j(d,A,L,T);if(A=this._extractString(this.tags.VARIABLE_START))return this.in_code=!0,j(u,A,L,T);A="";var ie,q=!1;for(this._matches(this.tags.COMMENT_START)&&(q=!0,A=this._extractString(this.tags.COMMENT_START));(ie=this._extractUntil(Te))!==null;)if(A+=ie,(this._matches(this.tags.BLOCK_START)||this._matches(this.tags.VARIABLE_START)||this._matches(this.tags.COMMENT_START))&&!q){if(this.lstripBlocks&&this._matches(this.tags.BLOCK_START)&&this.colno>0&&this.colno<=A.length){var Le=A.slice(-this.colno);if(/^\s+$/.test(Le)&&(A=A.slice(0,-this.colno),!A.length))return this.nextToken()}break}else if(this._matches(this.tags.COMMENT_END)){if(!q)throw new Error("unexpected end of comment");A+=this._extractString(this.tags.COMMENT_END);break}else A+=this.current(),this.forward();if(ie===null&&q)throw new Error("expected end of comment, got end of file");return j(q?E:p,A,L,T)}throw new Error("Could not parse text")},z.prototype.parseString=function(L){this.forward();for(var T="";!this.is_finished()&&this.current()!==L;){var A=this.current();if(A==="\\"){switch(this.forward(),this.current()){case"n":T+=`
`;break;case"t":T+="	";break;case"r":T+="\r";break;default:T+=this.current()}this.forward()}else T+=A,this.forward()}return this.forward(),T},z.prototype._matches=function(L){if(this.index+L.length>this.len)return null;var T=this.str.slice(this.index,this.index+L.length);return T===L},z.prototype._extractString=function(L){return this._matches(L)?(this.index+=L.length,L):null},z.prototype._extractUntil=function(L){return this._extractMatching(!0,L||"")},z.prototype._extract=function(L){return this._extractMatching(!1,L)},z.prototype._extractMatching=function(L,T){if(this.is_finished())return null;var A=T.indexOf(this.current());if(L&&A===-1||!L&&A!==-1){var I=this.current();this.forward();for(var X=T.indexOf(this.current());(L&&X===-1||!L&&X!==-1)&&!this.is_finished();)I+=this.current(),this.forward(),X=T.indexOf(this.current());return I}return""},z.prototype._extractRegex=function(L){var T=this.currentStr().match(L);return T?(this.forwardN(T[0].length),T):null},z.prototype.is_finished=function(){return this.index>=this.len},z.prototype.forwardN=function(L){for(var T=0;T<L;T++)this.forward()},z.prototype.forward=function(){this.index++,this.previous()===`
`?(this.lineno++,this.colno=0):this.colno++},z.prototype.backN=function(L){for(var T=0;T<L;T++)this.back()},z.prototype.back=function(){if(this.index--,this.current()===`
`){this.lineno--;var L=this.src.lastIndexOf(`
`,this.index-1);L===-1?this.colno=this.index:this.colno=this.index-L}else this.colno--},z.prototype.current=function(){return this.is_finished()?"":this.str.charAt(this.index)},z.prototype.currentStr=function(){return this.is_finished()?"":this.str.substr(this.index)},z.prototype.previous=function(){return this.str.charAt(this.index-1)},m.exports={lex:function(L,T){return new z(L,T)},TOKEN_STRING:s,TOKEN_WHITESPACE:c,TOKEN_DATA:p,TOKEN_BLOCK_START:d,TOKEN_BLOCK_END:o,TOKEN_VARIABLE_START:u,TOKEN_VARIABLE_END:g,TOKEN_COMMENT:E,TOKEN_LEFT_PAREN:h,TOKEN_RIGHT_PAREN:b,TOKEN_LEFT_BRACKET:w,TOKEN_RIGHT_BRACKET:S,TOKEN_LEFT_CURLY:C,TOKEN_RIGHT_CURLY:O,TOKEN_OPERATOR:N,TOKEN_COMMA:F,TOKEN_COLON:R,TOKEN_TILDE:M,TOKEN_PIPE:$,TOKEN_INT:G,TOKEN_FLOAT:H,TOKEN_BOOLEAN:Y,TOKEN_NONE:J,TOKEN_SYMBOL:ce,TOKEN_SPECIAL:ye,TOKEN_REGEX:he}},function(m,k,v){(function(a){"use strict";var f=v(1),y=v(6);function x(_,B,K){_ instanceof B&&K.push(_),_ instanceof r&&_.findAll(B,K)}var r=y.extend("Node",{init:function(_,B){this.lineno=_,this.colno=B;for(var K=this.fields,P=0,W=K.length;P<W;P++){var te=K[P],U=arguments[P+2];U===void 0&&(U=null),this[te]=U}},findAll:function(_,B){B=B||[];var K,P;if(this instanceof n){var W=this.children;for(K=0,P=W.length;K<P;K++)x(W[K],_,B)}else{var te=this.fields;for(K=0,P=te.length;K<P;K++)x(this[te[K]],_,B)}return B},iterFields:function(_){f.each(this.fields,function(B){_(this[B],B)},this)}}),e=r.extend("Value",{fields:["value"]}),n=r.extend("NodeList",{fields:["children"],init:function(_,B,K){this.parent(_,B,K||[])},addChild:function(_){this.children.push(_)}}),t=n.extend("Root"),l=e.extend("Literal"),i=e.extend("Symbol"),s=n.extend("Group"),c=n.extend("Array"),p=r.extend("Pair",{fields:["key","value"]}),d=n.extend("Dict"),o=r.extend("LookupVal",{fields:["target","val"]}),u=r.extend("If",{fields:["cond","body","else_"]}),g=u.extend("IfAsync"),E=r.extend("InlineIf",{fields:["cond","body","else_"]}),h=r.extend("For",{fields:["arr","name","body","else_"]}),b=h.extend("AsyncEach"),w=h.extend("AsyncAll"),S=r.extend("Macro",{fields:["name","args","body"]}),C=S.extend("Caller"),O=r.extend("Import",{fields:["template","target","withContext"]}),N=r.extend("FromImport",{fields:["template","names","withContext"],init:function(_,B,K,P,W){this.parent(_,B,K,P||new n,W)}}),F=r.extend("FunCall",{fields:["name","args"]}),R=F.extend("Filter"),M=R.extend("FilterAsync",{fields:["name","args","symbol"]}),$=d.extend("KeywordArgs"),G=r.extend("Block",{fields:["name","body"]}),H=r.extend("Super",{fields:["blockName","symbol"]}),Y=r.extend("TemplateRef",{fields:["template"]}),J=Y.extend("Extends"),ce=r.extend("Include",{fields:["template","ignoreMissing"]}),ye=r.extend("Set",{fields:["targets","value"]}),he=n.extend("Output"),j=r.extend("Capture",{fields:["body"]}),z=l.extend("TemplateData"),L=r.extend("UnaryOp",{fields:["target"]}),T=r.extend("BinOp",{fields:["left","right"]}),A=T.extend("In"),I=T.extend("Or"),X=T.extend("And"),ke=L.extend("Not"),ue=T.extend("Add"),Ee=T.extend("Concat"),fe=T.extend("Sub"),ne=T.extend("Mul"),V=T.extend("Div"),we=T.extend("FloorDiv"),Te=T.extend("Mod"),ie=T.extend("Pow"),q=L.extend("Neg"),Le=L.extend("Pos"),bn=r.extend("Compare",{fields:["expr","ops"]}),yn=r.extend("CompareOperand",{fields:["expr","type"]}),Oe=r.extend("CallExtension",{fields:["extName","prop","args","contentArgs"],init:function(_,B,K,P){this.extName=_._name||_,this.prop=B,this.args=K||new n,this.contentArgs=P||[],this.autoescape=_.autoescape}}),kn=Oe.extend("CallExtensionAsync");function re(_,B){B=B||0;function K(U,pe,Ke){for(var se=U.split(`
`),Q=0;Q<se.length;Q++){if(se[Q]&&(Ke&&Q>0||!Ke))for(var Fe=0;Fe<pe;Fe++)a.stdout.write(" ");Q===se.length-1?a.stdout.write(se[Q]):a.stdout.write(se[Q]+`
`)}}if(K(_.typename+": ",B),_ instanceof n)K(`
`),f.each(_.children,function(U){re(U,B+2)});else if(_ instanceof Oe)K(_.extName+"."+_.prop),K(`
`),_.args&&re(_.args,B+2),_.contentArgs&&f.each(_.contentArgs,function(U){re(U,B+2)});else{var P=null,W=null;if(_.iterFields(function(U,pe){U instanceof r?(P=P||{},P[pe]=U):(W=W||{},W[pe]=U)}),W?K(JSON.stringify(W,null,2)+`
`,null,!0):K(`
`),P)for(var te in P)re(P[te],B+2)}}m.exports={Node:r,Root:t,NodeList:n,Value:e,Literal:l,Symbol:i,Group:s,Array:c,Pair:p,Dict:d,Output:he,Capture:j,TemplateData:z,If:u,IfAsync:g,InlineIf:E,For:h,AsyncEach:b,AsyncAll:w,Macro:S,Caller:C,Import:O,FromImport:N,FunCall:F,Filter:R,FilterAsync:M,KeywordArgs:$,Block:G,Super:H,Extends:J,Include:ce,Set:ye,LookupVal:o,BinOp:T,In:A,Or:I,And:X,Not:ke,Add:ue,Concat:Ee,Sub:fe,Mul:ne,Div:V,FloorDiv:we,Mod:Te,Pow:ie,Neg:q,Pos:Le,Compare:bn,CompareOperand:yn,CallExtension:Oe,CallExtensionAsync:kn,printNodes:re}}).call(k,v(3))},function(m,k,v){"use strict";var a=v(10),f=v(1),y=0;function x(){return"hole_"+y++}function r(d,o){for(var u=null,g=0;g<d.length;g++){var E=o(d[g]);E!==d[g]&&(u||(u=d.slice()),u[g]=E)}return u||d}function e(d,o,u){if(!(d instanceof a.Node))return d;if(!u){var g=o(d);if(g&&g!==d)return g}if(d instanceof a.NodeList){var E=r(d.children,function(C){return e(C,o,u)});E!==d.children&&(d=new a[d.typename](d.lineno,d.colno,E))}else if(d instanceof a.CallExtension){var h=e(d.args,o,u),b=r(d.contentArgs,function(C){return e(C,o,u)});(h!==d.args||b!==d.contentArgs)&&(d=new a[d.typename](d.extName,d.prop,h,b))}else{var w=d.fields.map(function(C){return d[C]}),S=r(w,function(C){return e(C,o,u)});S!==w&&(d=new a[d.typename](d.lineno,d.colno),S.forEach(function(C,O){d[d.fields[O]]=C}))}return u&&o(d)||d}function n(d,o){return e(d,o,!0)}function t(d,o,u){var g=[],E=n(u?d[u]:d,function(h){if(h instanceof a.Block)return h;if(h instanceof a.Filter&&f.indexOf(o,h.name.value)!==-1||h instanceof a.CallExtensionAsync){var b=new a.Symbol(h.lineno,h.colno,x());return g.push(new a.FilterAsync(h.lineno,h.colno,h.name,h.args,b)),b}});return u?d[u]=E:d=E,g.length?(g.push(d),new a.NodeList(d.lineno,d.colno,g)):d}function l(d,o){return n(d,function(u){if(u instanceof a.Output)return t(u,o);if(u instanceof a.Set)return t(u,o,"value");if(u instanceof a.For)return t(u,o,"arr");if(u instanceof a.If)return t(u,o,"cond");if(u instanceof a.CallExtension)return t(u,o,"args")})}function i(d){return e(d,function(o){if(o instanceof a.Block){var u=!1,g=x();o.body=e(o.body,function(E){if(E instanceof a.FunCall&&E.name.value==="super")return u=!0,new a.Symbol(E.lineno,E.colno,g)}),u&&o.body.children.unshift(new a.Super(0,0,o.name,new a.Symbol(0,0,g)))}})}function s(d){return n(d,function(o){if(!(!(o instanceof a.If)&&!(o instanceof a.For))){var u=!1;if(e(o,function(g){if(g instanceof a.FilterAsync||g instanceof a.IfAsync||g instanceof a.AsyncEach||g instanceof a.AsyncAll||g instanceof a.CallExtensionAsync)return u=!0,g}),u){if(o instanceof a.If)return new a.IfAsync(o.lineno,o.colno,o.cond,o.body,o.else_);if(o instanceof a.For)return new a.AsyncEach(o.lineno,o.colno,o.arr,o.name,o.body,o.else_)}}})}function c(d,o){return s(i(l(d,o)))}function p(d,o){return c(d,o||[])}m.exports={transform:p}},function(m,k,v){"use strict";var a=v(1),f=v(6),y=f.extend({init:function(h,b){this.variables={},this.parent=h,this.topLevel=!1,this.isolateWrites=b},set:function(h,b,w){var S=h.split("."),C=this.variables,O=this;if(w&&(O=this.resolve(S[0],!0))){O.set(h,b);return}for(var N=0;N<S.length-1;N++){var F=S[N];C[F]||(C[F]={}),C=C[F]}C[S[S.length-1]]=b},get:function(h){var b=this.variables[h];return b??null},lookup:function(h){var b=this.parent,w=this.variables[h];return w??(b&&b.lookup(h))},resolve:function(h,b){var w=b&&this.isolateWrites?void 0:this.parent,S=this.variables[h];return S!=null?this:w&&w.resolve(h)},push:function(h){return new y(this,h)},pop:function(){return this.parent}});function x(h,b,w){return function(){var S=n(arguments),C,O=e(arguments),N;if(S>h.length){C=Array.prototype.slice.call(arguments,0,h.length);var F=Array.prototype.slice.call(arguments,C.length,S);for(N=0;N<F.length;N++)N<b.length&&(O[b[N]]=F[N]);C.push(O)}else if(S<h.length){for(C=Array.prototype.slice.call(arguments,0,S),N=S;N<h.length;N++){var R=h[N];C.push(O[R]),delete O[R]}C.push(O)}else C=arguments;return w.apply(this,C)}}function r(h){return h.__keywords=!0,h}function e(h){var b=h.length;if(b){var w=h[b-1];if(w&&w.hasOwnProperty("__keywords"))return w}return{}}function n(h){var b=h.length;if(b===0)return 0;var w=h[b-1];return w&&w.hasOwnProperty("__keywords")?b-1:b}function t(h){if(typeof h!="string")return h;this.val=h,this.length=h.length}t.prototype=Object.create(String.prototype,{length:{writable:!0,configurable:!0,value:0}}),t.prototype.valueOf=function(){return this.val},t.prototype.toString=function(){return this.val};function l(h,b){return h instanceof t?new t(b):b.toString()}function i(h){var b=typeof h;return b==="string"?new t(h):b!=="function"?h:function(){var w=h.apply(this,arguments);return typeof w=="string"?new t(w):w}}function s(h,b){return h=h??"",b&&!(h instanceof t)&&(h=a.escape(h.toString())),h}function c(h,b,w){if(h==null)throw new a.TemplateError("attempted to output null or undefined value",b+1,w+1);return h}function p(h,b){return h=h||{},typeof h[b]=="function"?function(){return h[b].apply(h,arguments)}:h[b]}function d(h,b,w,S){if(h){if(typeof h!="function")throw new Error("Unable to call `"+b+"`, which is not a function")}else throw new Error("Unable to call `"+b+"`, which is undefined or falsey");return h.apply(w,S)}function o(h,b,w){var S=b.lookup(w);return S??h.lookup(w)}function u(h,b,w){return h.lineno?h:new a.TemplateError(h,b,w)}function g(h,b,w,S){if(a.isArray(h)){var C=h.length;a.asyncIter(h,function(O,N,F){switch(b){case 1:w(O,N,C,F);break;case 2:w(O[0],O[1],N,C,F);break;case 3:w(O[0],O[1],O[2],N,C,F);break;default:O.push(N,F),w.apply(this,O)}},S)}else a.asyncFor(h,function(O,N,F,R,M){w(O,N,F,R,M)},S)}function E(h,b,w,S){var C=0,O,N,F;function R(H,Y){C++,F[H]=Y,C===O&&S(null,F.join(""))}if(a.isArray(h))if(O=h.length,F=new Array(O),O===0)S(null,"");else for(N=0;N<h.length;N++){var M=h[N];switch(b){case 1:w(M,N,O,R);break;case 2:w(M[0],M[1],N,O,R);break;case 3:w(M[0],M[1],M[2],N,O,R);break;default:M.push(N,R),w.apply(this,M)}}else{var $=a.keys(h);if(O=$.length,F=new Array(O),O===0)S(null,"");else for(N=0;N<$.length;N++){var G=$[N];w(G,h[G],N,O,R)}}}m.exports={Frame:y,makeMacro:x,makeKeywordArgs:r,numArgs:n,suppressValue:s,ensureDefined:c,memberLookup:p,contextOrFrameLookup:o,callWrap:d,handleError:u,isArray:a.isArray,keys:a.keys,SafeString:t,copySafeness:l,markSafe:i,asyncEach:g,asyncAll:E,inOperator:a.inOperator}},function(m,k,v){"use strict";var a=v(1),f=v(12);function y(r,e){return r==null||r===!1?e:r}var x={abs:function(r){return Math.abs(r)},batch:function(r,e,n){var t,l=[],i=[];for(t=0;t<r.length;t++)t%e===0&&i.length&&(l.push(i),i=[]),i.push(r[t]);if(i.length){if(n)for(t=i.length;t<e;t++)i.push(n);l.push(i)}return l},capitalize:function(r){r=y(r,"");var e=r.toLowerCase();return f.copySafeness(r,e.charAt(0).toUpperCase()+e.slice(1))},center:function(r,e){if(r=y(r,""),e=e||80,r.length>=e)return r;var n=e-r.length,t=a.repeat(" ",n/2-n%2),l=a.repeat(" ",n/2);return f.copySafeness(r,t+r+l)},default:function(r,e,n){return n?r||e:r!==void 0?r:e},dictsort:function(r,e,n){if(!a.isObject(r))throw new a.TemplateError("dictsort filter: val must be an object");var t=[];for(var l in r)t.push([l,r[l]]);var i;if(n===void 0||n==="key")i=0;else if(n==="value")i=1;else throw new a.TemplateError("dictsort filter: You can only sort by either key or value");return t.sort(function(s,c){var p=s[i],d=c[i];return e||(a.isString(p)&&(p=p.toUpperCase()),a.isString(d)&&(d=d.toUpperCase())),p>d?1:p===d?0:-1}),t},dump:function(r){return JSON.stringify(r)},escape:function(r){return r instanceof f.SafeString?r:(r=r??"",f.markSafe(a.escape(r.toString())))},safe:function(r){return r instanceof f.SafeString?r:(r=r??"",f.markSafe(r.toString()))},first:function(r){return r[0]},groupby:function(r,e){return a.groupBy(r,e)},indent:function(r,e,n){if(r=y(r,""),r==="")return"";e=e||4;for(var t="",l=r.split(`
`),i=a.repeat(" ",e),s=0;s<l.length;s++)s===0&&!n?t+=l[s]+`
`:t+=i+l[s]+`
`;return f.copySafeness(r,t)},join:function(r,e,n){return e=e||"",n&&(r=a.map(r,function(t){return t[n]})),r.join(e)},last:function(r){return r[r.length-1]},length:function(r){var e=y(r,"");return e!==void 0?typeof Map=="function"&&e instanceof Map||typeof Set=="function"&&e instanceof Set?e.size:a.isObject(e)&&!(e instanceof f.SafeString)?Object.keys(e).length:e.length:0},list:function(r){if(a.isString(r))return r.split("");if(a.isObject(r)){var e=[];if(Object.keys)e=Object.keys(r);else for(var n in r)e.push(n);return a.map(e,function(t){return{key:t,value:r[t]}})}else{if(a.isArray(r))return r;throw new a.TemplateError("list filter: type not iterable")}},lower:function(r){return r=y(r,""),r.toLowerCase()},random:function(r){return r[Math.floor(Math.random()*r.length)]},rejectattr:function(r,e){return r.filter(function(n){return!n[e]})},selectattr:function(r,e){return r.filter(function(n){return!!n[e]})},replace:function(r,e,n,t){var l=r;if(e instanceof RegExp)return r.replace(e,n);typeof t>"u"&&(t=-1);var i="";if(typeof e=="number")e=e+"";else if(typeof e!="string")return r;if(typeof r=="number"&&(r=r+""),typeof r!="string"&&!(r instanceof f.SafeString))return r;if(e==="")return i=n+r.split("").join(n)+n,f.copySafeness(r,i);var s=r.indexOf(e);if(t===0||s===-1)return r;for(var c=0,p=0;s>-1&&(t===-1||p<t);)i+=r.substring(c,s)+n,c=s+e.length,p++,s=r.indexOf(e,c);return c<r.length&&(i+=r.substring(c)),f.copySafeness(l,i)},reverse:function(r){var e;return a.isString(r)?e=x.list(r):e=a.map(r,function(n){return n}),e.reverse(),a.isString(r)?f.copySafeness(r,e.join("")):e},round:function(r,e,n){e=e||0;var t=Math.pow(10,e),l;return n==="ceil"?l=Math.ceil:n==="floor"?l=Math.floor:l=Math.round,l(r*t)/t},slice:function(r,e,n){for(var t=Math.floor(r.length/e),l=r.length%e,i=0,s=[],c=0;c<e;c++){var p=i+c*t;c<l&&i++;var d=i+(c+1)*t,o=r.slice(p,d);n&&c>=l&&o.push(n),s.push(o)}return s},sum:function(r,e,n){var t=0;typeof n=="number"&&(t+=n),e&&(r=a.map(r,function(i){return i[e]}));for(var l=0;l<r.length;l++)t+=r[l];return t},sort:f.makeMacro(["value","reverse","case_sensitive","attribute"],[],function(r,e,n,t){return r=a.map(r,function(l){return l}),r.sort(function(l,i){var s,c;return t?(s=l[t],c=i[t]):(s=l,c=i),!n&&a.isString(s)&&a.isString(c)&&(s=s.toLowerCase(),c=c.toLowerCase()),s<c?e?1:-1:s>c?e?-1:1:0}),r}),string:function(r){return f.copySafeness(r,r)},striptags:function(r,e){r=y(r,""),e=e||!1;var n=/<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi,t=x.trim(r.replace(n,"")),l="";return e?l=t.replace(/^ +| +$/gm,"").replace(/ +/g," ").replace(/(\r\n)/g,`
`).replace(/\n\n\n+/g,`

`):l=t.replace(/\s+/gi," "),f.copySafeness(r,l)},title:function(r){r=y(r,"");for(var e=r.split(" "),n=0;n<e.length;n++)e[n]=x.capitalize(e[n]);return f.copySafeness(r,e.join(" "))},trim:function(r){return f.copySafeness(r,r.replace(/^\s*|\s*$/g,""))},truncate:function(r,e,n,t){var l=r;if(r=y(r,""),e=e||255,r.length<=e)return r;if(n)r=r.substring(0,e);else{var i=r.lastIndexOf(" ",e);i===-1&&(i=e),r=r.substring(0,i)}return r+=t??"...",f.copySafeness(l,r)},upper:function(r){return r=y(r,""),r.toUpperCase()},urlencode:function(r){var e=encodeURIComponent;if(a.isString(r))return e(r);var n;if(a.isArray(r))n=r.map(function(l){return e(l[0])+"="+e(l[1])});else{n=[];for(var t in r)r.hasOwnProperty(t)&&n.push(e(t)+"="+e(r[t]))}return n.join("&")},urlize:function(r,e,n){isNaN(e)&&(e=1/0);var t=n===!0?' rel="nofollow"':"",l=/^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,i=/^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i,s=/^https?:\/\/.*$/,c=/^www\./,p=/\.(?:org|net|com)(?:\:|\/|$)/,d=r.split(/(\s+)/).filter(function(o){return o&&o.length}).map(function(o){var u=o.match(l),g=u&&u[1]||o;return s.test(g)?'<a href="'+g+'"'+t+">"+g.substr(0,e)+"</a>":c.test(g)?'<a href="http://'+g+'"'+t+">"+g.substr(0,e)+"</a>":i.test(g)?'<a href="mailto:'+g+'">'+g+"</a>":p.test(g)?'<a href="http://'+g+'"'+t+">"+g.substr(0,e)+"</a>":o});return d.join("")},wordcount:function(r){r=y(r,"");var e=r?r.match(/\w+/g):null;return e?e.length:null},float:function(r,e){var n=parseFloat(r);return isNaN(n)?e:n},int:function(r,e){var n=parseInt(r,10);return isNaN(n)?e:n}};x.d=x.default,x.e=x.escape,m.exports=x},function(m,k,v){"use strict";var a=v(15),f=v(16),y=a.extend({init:function(x,r){this.baseURL=x||".",r=r||{},this.useCache=!!r.useCache,this.async=!!r.async},resolve:function(x,r){throw new Error("relative templates not support in the browser yet")},getSource:function(x,r){var e=this.useCache,n;return this.fetch(this.baseURL+"/"+x,function(t,l){if(t)if(r)r(t.content);else if(t.status===404)n=null;else throw t.content;else n={src:l,path:x,noCache:!e},r&&r(null,n)}),n},fetch:function(x,r){var e,n=!0;window.XMLHttpRequest?e=new XMLHttpRequest:window.ActiveXObject&&(e=new ActiveXObject("Microsoft.XMLHTTP")),e.onreadystatechange=function(){e.readyState===4&&n&&(n=!1,e.status===0||e.status===200?r(null,e.responseText):r({status:e.status,content:e.responseText}))},x+=(x.indexOf("?")===-1?"?":"&")+"s="+new Date().getTime(),e.open("GET",x,this.async),e.send()}});m.exports={WebLoader:y,PrecompiledLoader:f}},function(m,k,v){"use strict";var a=v(3),f=v(6),y=v(1),x=f.extend({on:function(r,e){this.listeners=this.listeners||{},this.listeners[r]=this.listeners[r]||[],this.listeners[r].push(e)},emit:function(r){var e=Array.prototype.slice.call(arguments,1);this.listeners&&this.listeners[r]&&y.each(this.listeners[r],function(n){n.apply(null,e)})},resolve:function(r,e){return a.resolve(a.dirname(r),e)},isRelative:function(r){return r.indexOf("./")===0||r.indexOf("../")===0}});m.exports=x},function(m,k,v){"use strict";var a=v(15),f=a.extend({init:function(y){this.precompiled=y||{}},getSource:function(y){return this.precompiled[y]?{src:{type:"code",obj:this.precompiled[y]},path:y}:null}});m.exports=f},function(m,k){"use strict";function v(y){var x=-1;return{current:null,reset:function(){x=-1,this.current=null},next:function(){return x++,x>=y.length&&(x=0),this.current=y[x],this.current}}}function a(y){y=y||",";var x=!0;return function(){var r=x?"":y;return x=!1,r}}function f(){return{range:function(y,x,r){typeof x>"u"?(x=y,y=0,r=1):r||(r=1);var e=[],n;if(r>0)for(n=y;n<x;n+=r)e.push(n);else for(n=y;n>x;n+=r)e.push(n);return e},cycler:function(){return v(Array.prototype.slice.call(arguments))},joiner:function(y){return a(y)}}}m.exports=f},function(m,k){function v(){"use strict";var a=this.runtime,f=this.lib,y=a.contextOrFrameLookup;a.contextOrFrameLookup=function(n,t,l){var i=y.apply(this,arguments);if(i===void 0)switch(l){case"True":return!0;case"False":return!1;case"None":return null}return i};var x=a.memberLookup,r={pop:function(n){if(n===void 0)return this.pop();if(n>=this.length||n<0)throw new Error("KeyError");return this.splice(n,1)},remove:function(n){for(var t=0;t<this.length;t++)if(this[t]===n)return this.splice(t,1);throw new Error("ValueError")},count:function(n){for(var t=0,l=0;l<this.length;l++)this[l]===n&&t++;return t},index:function(n){var t;if((t=this.indexOf(n))===-1)throw new Error("ValueError");return t},find:function(n){return this.indexOf(n)},insert:function(n,t){return this.splice(n,0,t)}},e={items:function(){var n=[];for(var t in this)n.push([t,this[t]]);return n},values:function(){var n=[];for(var t in this)n.push(this[t]);return n},keys:function(){var n=[];for(var t in this)n.push(t);return n},get:function(n,t){var l=this[n];return l===void 0&&(l=t),l},has_key:function(n){return this.hasOwnProperty(n)},pop:function(n,t){var l=this[n];if(l===void 0&&t!==void 0)l=t;else{if(l===void 0)throw new Error("KeyError");delete this[n]}return l},popitem:function(){for(var n in this){var t=this[n];return delete this[n],[n,t]}throw new Error("KeyError")},setdefault:function(n,t){return n in this?this[n]:(t===void 0&&(t=null),this[n]=t)},update:function(n){for(var t in n)this[t]=n[t];return null}};e.iteritems=e.items,e.itervalues=e.values,e.iterkeys=e.keys,a.memberLookup=function(n,t,l){return n=n||{},f.isArray(n)&&r.hasOwnProperty(t)?function(){return r[t].apply(n,arguments)}:f.isObject(n)&&e.hasOwnProperty(t)?function(){return e[t].apply(n,arguments)}:x.apply(this,arguments)}}m.exports=v}])})});var hn=oe((Un,cn)=>{D();function Cn(m,k){var v=m.split(" ").filter(function(a){return a.length>0});return k||k===0?v[k]:v}function _n(m){return m.indexOf("/")>=0?parseInt(m.substring(m.indexOf("/")+1)):null}function Rn(m){return m.indexOf("/")>=0?parseInt(m):null}function Bn(m,k){if(m){var v=["","January","February","March","April","May","June","July","August","September","October","November","December"],a=parseInt(m);if(k)return a;var f=v[parseInt(m.substr(5,2))];return f+" "+a}}cn.exports={extractWords:Cn,skillRange:_n,skillLevel:Rn,humanizeDateMonth:Bn}});var fn=oe((Gn,un)=>{D();un.exports={profiles:0,work:4,volunteer:1,education:4,awards:1,publications:1,skills:12,languages:3,interests:5,references:0,certifications:5}});var dn=oe((Yn,pn)=>{D();pn.exports=null});var gn=oe((Xn,vn)=>{D();var mn=(qe(),Pe(Xe)),Be=(an(),Pe(on)),Kn=ln(),le=Kn.configure(),be=hn(),Fn=fn(),Mn=dn();le.addFilter("extractWords",be.extractWords);le.addFilter("skillRange",be.skillRange);le.addFilter("skillLevel",be.skillLevel);le.addFilter("humanizeDateMonth",be.humanizeDateMonth);function In(m){var k=mn.readFileSync(Be.join("/","./css/css.css"),"utf-8"),v=mn.readFileSync(Be.join("/","./css/print.css"),"utf-8");return le.render(Be.join("/","./index.nunjucks"),{css:k,cssPrint:v,resume:m,limits:Fn,legalNote:Mn})}vn.exports={render:In}});D();var ee=An(gn(),1),xn=ee.default??ee,Qn=xn.render??ee.render,Zn=xn.pdfRenderOptions??ee.pdfRenderOptions;export{Zn as pdfRenderOptions,Qn as render};
/*! Bundled license information:

nunjucks/browser/nunjucks.js:
  (*! Browser bundle of nunjucks 2.5.2  *)
*/
