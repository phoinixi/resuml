var Le=Object.create;var K=Object.defineProperty;var Be=Object.getOwnPropertyDescriptor;var Fe=Object.getOwnPropertyNames;var qe=Object.getPrototypeOf,Je=Object.prototype.hasOwnProperty;var F=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var jt=(t,e)=>()=>(t&&(e=t(t=0)),e);var b=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ve=(t,e)=>{for(var n in e)K(t,n,{get:e[n],enumerable:!0})},Lt=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Fe(e))!Je.call(t,a)&&a!==n&&K(t,a,{get:()=>e[a],enumerable:!(r=Be(e,a))||r.enumerable});return t};var Ge=(t,e,n)=>(n=t!=null?Le(qe(t)):{},Lt(e||!t||!t.__esModule?K(n,"default",{value:t,enumerable:!0}):n,t)),Bt=t=>Lt(K({},"__esModule",{value:!0}),t);var c=jt(()=>{});var ut={};Ve(ut,{createReadStream:()=>Xt,createWriteStream:()=>Qt,default:()=>We,existsSync:()=>Vt,lstatSync:()=>Ut,mkdirSync:()=>Wt,readFileSync:()=>qt,readdirSync:()=>Jt,rmdirSync:()=>Kt,statSync:()=>ht,unlinkSync:()=>Yt,writeFileSync:()=>Gt});function ct(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Ft(t){var e=ct(t);if(X[e]!==void 0)return X[e];for(var n=Object.keys(X),r=0;r<n.length;r++)if(e.endsWith("/"+n[r])||e===n[r])return X[n[r]]}function dt(t){var e=ct(t);if(Q[e]!==void 0)return Q[e];for(var n=Object.keys(Q),r=0;r<n.length;r++)if(e.endsWith("/"+n[r])||e===n[r])return Q[n[r]]}var X,Q,qt,Jt,Vt,Gt,Wt,ht,Ut,Yt,Kt,Xt,Qt,We,gt=jt(()=>{"use strict";c();X={"css/bootstrap.min.css":`Skip to content This repository Explore Gist Blog Help Carl V. Lewis carlvlewis 2 Unwatch Unstar 3 Fork 1 carlvlewis/cvStrap branch:master cvStrap/css/bootstrap.css Carl V. Lewid 3 days ago Fixing elements in resume.template not referenced 0 contributors Executable File 5011 lines (4210 sloc) 100.258 kb RawBlameHistory /*!
 * Bootstrap v2.0.4
 *
 * Copyright 2012 Twitter, Inc
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world @twitter by @mdo and @fat.
 */article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}footer{-webkit-column-span:all;column-span:all}audio,canvas,video{display:inline-block}audio:not([controls]){display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a:focus{outline:#333 dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}a:active,a:hover{outline:0}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{max-width:100%;vertical-align:middle;border:0;-ms-interpolation-mode:bicubic}#map_canvas img{max-width:none}button,input,select,textarea{margin:0;font-size:100%;vertical-align:middle}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}button,input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:button}input[type=search]{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-appearance:textfield}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;vertical-align:top}.clearfix:after,.clearfix:before{display:table;content:""}.clearfix:after{clear:both}.hide-text{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.input-block-level{display:block;width:100%;min-height:28px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:13px;line-height:18px;color:#333;background-color:#fff}a{color:#000;text-decoration:none}a:hover{color:#005580;text-decoration:underline}a:visited{color:#000;text-decoration:none}.googlevoice a,.googlevoice a:visited{text-decoration:none!important;color:#000!important}.row{margin-left:-20px}.row:after,.row:before{display:table;content:""}.row:after{clear:both}[class*=span]{float:left;margin-left:20px}.container,.navbar-fixed-bottom .container,.navbar-fixed-top .container,.span12{width:940px}.span11{width:860px}.span10{width:780px}.span9{width:700px}.span7,.span8{width:540px}.span6{width:460px}.span5{width:380px}.span4{width:300px}.span3{width:220px}.span2{width:140px}.span1{width:60px}.offset12{margin-left:980px}.offset11{margin-left:900px}.offset10{margin-left:820px}.offset9{margin-left:740px}.offset8{margin-left:660px}.offset7{margin-left:580px}.offset6{margin-left:500px}.offset5{margin-left:420px}.offset4{margin-left:340px}.offset3{margin-left:260px}.offset2{margin-left:180px}.offset1{margin-left:100px}.row-fluid{width:100%}.row-fluid:after,.row-fluid:before{display:table;content:""}.row-fluid:after{clear:both}.row-fluid [class*=span]{display:block;float:left;width:100%;min-height:28px;margin-left:2.127659574%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.row-fluid [class*=span]:first-child{margin-left:2.127659574%}.row-fluid .span12{width:99.99999998999999%}.row-fluid .span11{width:91.489361693%}.row-fluid .span10{width:82.97872339599999%}.row-fluid .span9{width:74.468085099%}.row-fluid .span8{width:65.95744680199999%}.row-fluid .span7{width:57.446808505%}.row-fluid .span6{width:90%}.row-fluid .span5{width:40.425531911%}.row-fluid .span4{width:31.914893614%}.row-fluid .span3{width:23.404255317%}.row-fluid .span2{width:14.89361702%}.row-fluid .span1{width:6.382978723%}.container{margin-right:auto;margin-left:auto}.container:after,.container:before{display:table;content:""}.container:after{clear:both}.container-fluid{padding-right:20px;padding-left:20px}.container-fluid:after,.container-fluid:before{display:table;content:""}.container-fluid:after{clear:both}p{margin:0 0 9px}p small{font-size:11px;color:#999}p tab{margin-left:18px}.lead{margin-bottom:18px;font-size:20px;font-weight:200;line-height:27px}h1,h2,h3,h4,h5,h6{margin:0;font-family:inherit;font-weight:700;color:inherit;text-rendering:optimizelegibility}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small{font-weight:400;color:#999}h1{font-size:30px;line-height:36px}h1 small{font-size:18px}h2{font-size:24px;line-height:36px}h2 small{font-size:18px}h3{font-size:18px;line-height:27px}h3 small{font-size:14px}h4,h5,h6{line-height:18px}h4{font-size:14px}h4 small{font-size:12px}h5{font-size:12px;margin-left:10px}h6{font-size:11px;color:#999;text-transform:uppercase}.page-header{padding-bottom:17px;margin:18px 0;border-bottom:1px solid #eee}.page-header h1{line-height:1}ol,ul{padding:0;margin:0 0 9px 25px}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}ul{list-style:disc}ol{list-style:decimal}li{line-height:18px}ol.unstyled,ul.unstyled{margin-left:0;list-style:none}dl{margin-bottom:18px}dd,dt{line-height:18px}dt{font-weight:700;line-height:17px}dd{margin-left:9px}.dl-horizontal dt{float:left;width:120px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:130px}hr{margin-bottom:22px;margin-top:-5px border:0;border-top:2px solid #e3e3e3;border-bottom:2px solid #fff}strong{font-weight:700}em{font-style:italic}.muted{color:#999}abbr[title]{cursor:help;border-bottom:1px dotted #999}abbr.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:0 0 0 15px;margin:0 0 18px;border-left:5px solid #eee}blockquote p{margin-bottom:0;font-size:12px;font-weight:300;line-height:16.5px}blockquote small{display:block;line-height:18px;color:#999}blockquote small:before{content:'\\2014 \\00A0'}blockquote.pull-right{float:right;padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0}blockquote.pull-right p,blockquote.pull-right small{text-align:right}blockquote:after,blockquote:before,q:after,q:before{content:""}address{display:block;margin-bottom:18px;font-style:normal;line-height:18px}small{font-size:100%}cite{font-style:normal}code,pre{padding:0 3px 2px;font-family:Menlo,Monaco,Consolas,"Courier New",monospace;font-size:12px;color:#333;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}code{padding:2px 4px;color:#d14;background-color:#f7f7f9;border:1px solid #e1e1e8}pre{display:block;padding:8.5px;margin:0 0 9px;font-size:12.03px;line-height:18px;word-break:break-all;word-wrap:break-word;white-space:pre;white-space:pre-wrap;background-color:#f5f5f5;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}pre.prettyprint{margin-bottom:18px}pre code{padding:0;color:inherit;background-color:transparent;border:0}.pre-scrollable{max-height:340px;overflow-y:scroll}form{margin:0 0 18px}fieldset{padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:27px;font-size:19.5px;line-height:36px;color:#333;border:0;border-bottom:1px solid #e5e5e5}legend small{font-size:13.5px;color:#999}button,input,label,select,textarea{font-size:13px;font-weight:400;line-height:18px}button,input,select,textarea{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}label{display:block;margin-bottom:5px}.uneditable-input,input[type=color],input[type=date],input[type=datetime-local],input[type=datetime],input[type=email],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,textarea{display:inline-block;height:18px;padding:4px;margin-bottom:9px;font-size:13px;line-height:18px;color:#555}input,textarea{width:210px}textarea{height:auto}.uneditable-input,input[type=color],input[type=date],input[type=datetime-local],input[type=datetime],input[type=email],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],textarea{background-color:#fff;border:1px solid #ccc;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border linear .2s,box-shadow linear .2s;-moz-transition:border linear .2s,box-shadow linear .2s;-ms-transition:border linear .2s,box-shadow linear .2s;-o-transition:border linear .2s,box-shadow linear .2s;transition:border linear .2s,box-shadow linear .2s}.uneditable-input:focus,input[type=color]:focus,input[type=date]:focus,input[type=datetime-local]:focus,input[type=datetime]:focus,input[type=email]:focus,input[type=month]:focus,input[type=number]:focus,input[type=password]:focus,input[type=search]:focus,input[type=tel]:focus,input[type=text]:focus,input[type=time]:focus,input[type=url]:focus,input[type=week]:focus,textarea:focus{border-color:rgba(82,168,236,.8);outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)}input[type=checkbox],input[type=radio]{margin:3px 0;line-height:normal;cursor:pointer}input[type=button],input[type=checkbox],input[type=radio],input[type=reset],input[type=submit]{width:auto}.uneditable-textarea{width:auto;height:auto}input[type=file],select{height:28px;line-height:28px}select{width:220px;border:1px solid #bbb}select[multiple],select[size]{height:auto}input[type=checkbox]:focus,input[type=file]:focus,input[type=radio]:focus,select:focus{outline:#333 dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.checkbox,.radio{min-height:18px;padding-left:18px}.checkbox input[type=checkbox],.radio input[type=radio]{float:left;margin-left:-18px}.controls>.checkbox:first-child,.controls>.radio:first-child{padding-top:5px}.checkbox.inline,.radio.inline{display:inline-block;padding-top:5px;margin-bottom:0;vertical-align:middle}.checkbox.inline+.checkbox.inline,.radio.inline+.radio.inline{margin-left:10px}.input-mini{width:60px}.input-small{width:90px}.input-medium{width:150px}.input-large{width:210px}.input-xlarge{width:270px}.input-xxlarge{width:530px}.row-fluid .uneditable-input[class*=span],.row-fluid input[class*=span],.row-fluid select[class*=span],.row-fluid textarea[class*=span],.uneditable-input[class*=span],input[class*=span],select[class*=span],textarea[class*=span]{float:none;margin-left:0}.input-append .uneditable-input[class*=span],.input-append input[class*=span],.input-prepend .uneditable-input[class*=span],.input-prepend input[class*=span],.row-fluid .input-append [class*=span],.row-fluid .input-prepend [class*=span]{display:inline-block}.uneditable-input,input,textarea{margin-left:0}.uneditable-input.span12,input.span12,textarea.span12{width:930px}.uneditable-input.span11,input.span11,textarea.span11{width:850px}.uneditable-input.span10,input.span10,textarea.span10{width:770px}.uneditable-input.span9,input.span9,textarea.span9{width:690px}.uneditable-input.span8,input.span8,textarea.span8{width:610px}.uneditable-input.span7,input.span7,textarea.span7{width:530px}.uneditable-input.span6,input.span6,textarea.span6{width:450px}.uneditable-input.span5,input.span5,textarea.span5{width:370px}.uneditable-input.span4,input.span4,textarea.span4{width:290px}.uneditable-input.span3,input.span3,textarea.span3{width:210px}.uneditable-input.span2,input.span2,textarea.span2{width:130px}.uneditable-input.span1,input.span1,textarea.span1{width:50px}input[disabled],input[readonly],select[disabled],select[readonly],textarea[disabled],textarea[readonly]{cursor:not-allowed;background-color:#eee;border-color:#ddd}input[type=checkbox][disabled],input[type=checkbox][readonly],input[type=radio][disabled],input[type=radio][readonly]{background-color:transparent}.control-group.warning .help-block,.control-group.warning .help-inline,.control-group.warning>label{color:#c09853}.control-group.warning .checkbox,.control-group.warning .radio,.control-group.warning input,.control-group.warning select,.control-group.warning textarea{color:#c09853;border-color:#c09853}.control-group.warning .checkbox:focus,.control-group.warning .radio:focus,.control-group.warning input:focus,.control-group.warning select:focus,.control-group.warning textarea:focus{border-color:#a47e3c;-webkit-box-shadow:0 0 6px #dbc59e;-moz-box-shadow:0 0 6px #dbc59e;box-shadow:0 0 6px #dbc59e}.control-group.warning .input-append .add-on,.control-group.warning .input-prepend .add-on{color:#c09853;background-color:#fcf8e3;border-color:#c09853}.control-group.error .help-block,.control-group.error .help-inline,.control-group.error>label{color:#b94a48}.control-group.error .checkbox,.control-group.error .radio,.control-group.error input,.control-group.error select,.control-group.error textarea{color:#b94a48;border-color:#b94a48}.control-group.error .checkbox:focus,.control-group.error .radio:focus,.control-group.error input:focus,.control-group.error select:focus,.control-group.error textarea:focus{border-color:#953b39;-webkit-box-shadow:0 0 6px #d59392;-moz-box-shadow:0 0 6px #d59392;box-shadow:0 0 6px #d59392}.control-group.error .input-append .add-on,.control-group.error .input-prepend .add-on{color:#b94a48;background-color:#f2dede;border-color:#b94a48}.control-group.success .help-block,.control-group.success .help-inline,.control-group.success>label{color:#468847}.control-group.success .checkbox,.control-group.success .radio,.control-group.success input,.control-group.success select,.control-group.success textarea{color:#468847;border-color:#468847}.control-group.success .checkbox:focus,.control-group.success .radio:focus,.control-group.success input:focus,.control-group.success select:focus,.control-group.success textarea:focus{border-color:#356635;-webkit-box-shadow:0 0 6px #7aba7b;-moz-box-shadow:0 0 6px #7aba7b;box-shadow:0 0 6px #7aba7b}.control-group.success .input-append .add-on,.control-group.success .input-prepend .add-on{color:#468847;background-color:#dff0d8;border-color:#468847}input:focus:required:invalid,select:focus:required:invalid,textarea:focus:required:invalid{color:#b94a48;border-color:#ee5f5b}input:focus:required:invalid:focus,select:focus:required:invalid:focus,textarea:focus:required:invalid:focus{border-color:#e9322d;-webkit-box-shadow:0 0 6px #f8b9b7;-moz-box-shadow:0 0 6px #f8b9b7;box-shadow:0 0 6px #f8b9b7}.form-actions{padding:17px 20px 18px;margin-top:18px;margin-bottom:18px;background-color:#f5f5f5;border-top:1px solid #e5e5e5}.form-actions:after,.form-actions:before{display:table;content:""}.form-actions:after{clear:both}.uneditable-input{overflow:hidden;white-space:nowrap;cursor:not-allowed;background-color:#fff;border-color:#eee;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.025);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.025);box-shadow:inset 0 1px 2px rgba(0,0,0,.025)}:-moz-placeholder{color:#999}:-ms-input-placeholder{color:#999}::-webkit-input-placeholder{color:#999}.help-block,.help-inline{color:#555}.help-block{display:block;margin-bottom:9px}.help-inline{display:inline-block;padding-left:5px;vertical-align:middle}.input-append,.input-prepend{margin-bottom:5px}.input-append .uneditable-input,.input-append input,.input-append select,.input-prepend .uneditable-input,.input-prepend input,.input-prepend select{position:relative;margin-bottom:0;vertical-align:middle;-webkit-border-radius:0 3px 3px 0;-moz-border-radius:0 3px 3px 0;border-radius:0 3px 3px 0}.input-append .uneditable-input:focus,.input-append input:focus,.input-append select:focus,.input-prepend .uneditable-input:focus,.input-prepend input:focus,.input-prepend select:focus{z-index:2}.input-append .uneditable-input,.input-prepend .uneditable-input{border-left-color:#ccc}.input-append .add-on,.input-prepend .add-on{display:inline-block;width:auto;height:18px;min-width:16px;padding:4px 5px;font-weight:400;line-height:18px;text-align:center;text-shadow:0 1px 0 #fff;vertical-align:middle;background-color:#eee;border:1px solid #ccc}.input-append .add-on,.input-append .btn,.input-prepend .add-on,.input-prepend .btn{margin-left:-1px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.input-append .active,.input-prepend .active{background-color:#a9dba9;border-color:#46a546}.input-prepend .add-on,.input-prepend .btn{margin-right:-1px}.input-append .uneditable-input,.input-append input,.input-append select,.input-prepend .add-on:first-child,.input-prepend .btn:first-child{-webkit-border-radius:3px 0 0 3px;-moz-border-radius:3px 0 0 3px;border-radius:3px 0 0 3px}.input-append .uneditable-input{border-right-color:#ccc;border-left-color:#eee}.input-append .add-on:last-child,.input-append .btn:last-child{-webkit-border-radius:0 3px 3px 0;-moz-border-radius:0 3px 3px 0;border-radius:0 3px 3px 0}.input-prepend.input-append .uneditable-input,.input-prepend.input-append input,.input-prepend.input-append select{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.input-prepend.input-append .add-on:first-child,.input-prepend.input-append .btn:first-child{margin-right:-1px;-webkit-border-radius:3px 0 0 3px;-moz-border-radius:3px 0 0 3px;border-radius:3px 0 0 3px}.input-prepend.input-append .add-on:last-child,.input-prepend.input-append .btn:last-child{margin-left:-1px;-webkit-border-radius:0 3px 3px 0;-moz-border-radius:0 3px 3px 0;border-radius:0 3px 3px 0}.search-query{padding-right:14px;padding-left:14px;margin-bottom:0;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px}.form-horizontal .help-inline,.form-horizontal .input-append,.form-horizontal .input-prepend,.form-horizontal .uneditable-input,.form-horizontal input,.form-horizontal select,.form-horizontal textarea,.form-inline .help-inline,.form-inline .input-append,.form-inline .input-prepend,.form-inline .uneditable-input,.form-inline input,.form-inline select,.form-inline textarea,.form-search .help-inline,.form-search .input-append,.form-search .input-prepend,.form-search .uneditable-input,.form-search input,.form-search select,.form-search textarea{display:inline-block;margin-bottom:0}.form-horizontal .hide,.form-inline .hide,.form-search .hide{display:none}.form-inline label,.form-search label{display:inline-block}.form-inline .input-append,.form-inline .input-prepend,.form-search .input-append,.form-search .input-prepend{margin-bottom:0}.form-inline .checkbox,.form-inline .radio,.form-search .checkbox,.form-search .radio{padding-left:0;margin-bottom:0;vertical-align:middle}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio],.form-search .checkbox input[type=checkbox],.form-search .radio input[type=radio]{float:left;margin-right:3px;margin-left:0}.control-group{margin-bottom:9px}legend+.control-group{margin-top:18px;-webkit-margin-top-collapse:separate}.form-horizontal .control-group{margin-bottom:18px}.form-horizontal .control-group:after,.form-horizontal .control-group:before{display:table;content:""}.form-horizontal .control-group:after{clear:both}.form-horizontal .control-label{float:left;width:140px;padding-top:5px;text-align:right}.form-horizontal .controls{margin-left:160px}.form-horizontal .help-block{margin-top:9px;margin-bottom:0}.form-horizontal .form-actions{padding-left:160px}table{max-width:100%;background-color:transparent;border-collapse:collapse;border-spacing:0}.table{width:100%;margin-bottom:18px}.table td,.table th{padding:8px;line-height:18px;text-align:left;vertical-align:top;border-top:1px solid #ddd}.table th{font-weight:700}.table thead th{vertical-align:bottom}.table caption+thead tr:first-child td,.table caption+thead tr:first-child th,.table colgroup+thead tr:first-child td,.table colgroup+thead tr:first-child th,.table thead:first-child tr:first-child td,.table thead:first-child tr:first-child th{border-top:0}.table tbody+tbody{border-top:2px solid #ddd}.table-condensed td,.table-condensed th{padding:4px 5px}.table-bordered{border:1px solid #ddd;border-collapse:separate;border-left:0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.table-bordered td,.table-bordered th{border-left:1px solid #ddd}.table-bordered caption+tbody tr:first-child td,.table-bordered caption+tbody tr:first-child th,.table-bordered caption+thead tr:first-child th,.table-bordered colgroup+tbody tr:first-child td,.table-bordered colgroup+tbody tr:first-child th,.table-bordered colgroup+thead tr:first-child th,.table-bordered tbody:first-child tr:first-child td,.table-bordered tbody:first-child tr:first-child th,.table-bordered thead:first-child tr:first-child th{border-top:0}.table-bordered tbody:first-child tr:first-child td:first-child,.table-bordered thead:first-child tr:first-child th:first-child{-webkit-border-top-left-radius:4px;border-top-left-radius:4px;-moz-border-radius-topleft:4px}.table-bordered tbody:first-child tr:first-child td:last-child,.table-bordered thead:first-child tr:first-child th:last-child{-webkit-border-top-right-radius:4px;border-top-right-radius:4px;-moz-border-radius-topright:4px}.table-bordered tbody:last-child tr:last-child td:first-child,.table-bordered thead:last-child tr:last-child th:first-child{-webkit-border-radius:0 0 0 4px;-moz-border-radius:0 0 0 4px;border-radius:0 0 0 4px;-moz-border-radius-bottomleft:4px}.table-bordered tbody:last-child tr:last-child td:last-child,.table-bordered thead:last-child tr:last-child th:last-child{-webkit-border-bottom-right-radius:4px;border-bottom-right-radius:4px;-moz-border-radius-bottomright:4px}.table-striped tbody tr:nth-child(odd) td,.table-striped tbody tr:nth-child(odd) th{background-color:#f9f9f9}.table tbody tr:hover td,.table tbody tr:hover th{background-color:#f5f5f5}table .span1{float:none;width:44px;margin-left:0}table .span2{float:none;width:124px;margin-left:0}table .span3{float:none;width:204px;margin-left:0}table .span4{float:none;width:284px;margin-left:0}table .span5{float:none;width:364px;margin-left:0}table .span6{float:none;width:444px;margin-left:0}table .span7{float:none;width:524px;margin-left:0}table .span8{float:none;width:604px;margin-left:0}table .span9{float:none;width:684px;margin-left:0}table .span10{float:none;width:764px;margin-left:0}table .span11{float:none;width:844px;margin-left:0}table .span12{float:none;width:924px;margin-left:0}table .span13{float:none;width:1004px;margin-left:0}table .span14{float:none;width:1084px;margin-left:0}table .span15{float:none;width:1164px;margin-left:0}table .span16{float:none;width:1244px;margin-left:0}table .span17{float:none;width:1324px;margin-left:0}table .span18{float:none;width:1404px;margin-left:0}table .span19{float:none;width:1484px;margin-left:0}table .span20{float:none;width:1564px;margin-left:0}table .span21{float:none;width:1644px;margin-left:0}table .span22{float:none;width:1724px;margin-left:0}table .span23{float:none;width:1804px;margin-left:0}table .span24{float:none;width:1884px;margin-left:0}[class*=" icon-"],[class^=icon-]{display:inline-block;width:14px;height:14px;line-height:14px;vertical-align:text-top;background-image:url(../img/glyphicons-halflings.png);background-position:14px 14px;background-repeat:no-repeat}.icon-white{background-image:url(../img/glyphicons-halflings-white.png)}.icon-glass{background-position:0 0}.icon-music{background-position:-24px 0}.icon-search{background-position:-48px 0}.icon-envelope{background-position:-72px 0}.icon-heart{background-position:-96px 0}.icon-star{background-position:-120px 0}.icon-star-empty{background-position:-144px 0}.icon-user{background-position:-168px 0}.icon-film{background-position:-192px 0}.icon-th-large{background-position:-216px 0}.icon-th{background-position:-240px 0}.icon-th-list{background-position:-264px 0}.icon-ok{background-position:-288px 0}.icon-remove{background-position:-312px 0}.icon-zoom-in{background-position:-336px 0}.icon-zoom-out{background-position:-360px 0}.icon-off{background-position:-384px 0}.icon-signal{background-position:-408px 0}.icon-cog{background-position:-432px 0}.icon-trash{background-position:-456px 0}.icon-home{background-position:0 -24px}.icon-file{background-position:-24px -24px}.icon-time{background-position:-48px -24px}.icon-road{background-position:-72px -24px}.icon-download-alt{background-position:-96px -24px}.icon-download{background-position:-120px -24px}.icon-upload{background-position:-144px -24px}.icon-inbox{background-position:-168px -24px}.icon-play-circle{background-position:-192px -24px}.icon-repeat{background-position:-216px -24px}.icon-refresh{background-position:-240px -24px}.icon-list-alt{background-position:-264px -24px}.icon-lock{background-position:-287px -24px}.icon-flag{background-position:-312px -24px}.icon-headphones{background-position:-336px -24px}.icon-volume-off{background-position:-360px -24px}.icon-volume-down{background-position:-384px -24px}.icon-volume-up{background-position:-408px -24px}.icon-qrcode{background-position:-432px -24px}.icon-barcode{background-position:-456px -24px}.icon-tag{background-position:0 -48px}.icon-tags{background-position:-25px -48px}.icon-book{background-position:-48px -48px}.icon-bookmark{background-position:-72px -48px}.icon-print{background-position:-96px -48px}.icon-camera{background-position:-120px -48px}.icon-font{background-position:-144px -48px}.icon-bold{background-position:-167px -48px}.icon-italic{background-position:-192px -48px}.icon-text-height{background-position:-216px -48px}.icon-text-width{background-position:-240px -48px}.icon-align-left{background-position:-264px -48px}.icon-align-center{background-position:-288px -48px}.icon-align-right{background-position:-312px -48px}.icon-align-justify{background-position:-336px -48px}.icon-list{background-position:-360px -48px}.icon-indent-left{background-position:-384px -48px}.icon-indent-right{background-position:-408px -48px}.icon-facetime-video{background-position:-432px -48px}.icon-picture{background-position:-456px -48px}.icon-pencil{background-position:0 -72px}.icon-map-marker{background-position:-24px -72px}.icon-adjust{background-position:-48px -72px}.icon-tint{background-position:-72px -72px}.icon-edit{background-position:-96px -72px}.icon-share{background-position:-120px -72px}.icon-check{background-position:-144px -72px}.icon-move{background-position:-168px -72px}.icon-step-backward{background-position:-192px -72px}.icon-fast-backward{background-position:-216px -72px}.icon-backward{background-position:-240px -72px}.icon-play{background-position:-264px -72px}.icon-pause{background-position:-288px -72px}.icon-stop{background-position:-312px -72px}.icon-forward{background-position:-336px -72px}.icon-fast-forward{background-position:-360px -72px}.icon-step-forward{background-position:-384px -72px}.icon-eject{background-position:-408px -72px}.icon-chevron-left{background-position:-432px -72px}.icon-chevron-right{background-position:-456px -72px}.icon-plus-sign{background-position:0 -96px}.icon-minus-sign{background-position:-24px -96px}.icon-remove-sign{background-position:-48px -96px}.icon-ok-sign{background-position:-72px -96px}.icon-question-sign{background-position:-96px -96px}.icon-info-sign{background-position:-120px -96px}.icon-screenshot{background-position:-144px -96px}.icon-remove-circle{background-position:-168px -96px}.icon-ok-circle{background-position:-192px -96px}.icon-ban-circle{background-position:-216px -96px}.icon-arrow-left{background-position:-240px -96px}.icon-arrow-right{background-position:-264px -96px}.icon-arrow-up{background-position:-289px -96px}.icon-arrow-down{background-position:-312px -96px}.icon-share-alt{background-position:-336px -96px}.icon-resize-full{background-position:-360px -96px}.icon-resize-small{background-position:-384px -96px}.icon-plus{background-position:-408px -96px}.icon-minus{background-position:-433px -96px}.icon-asterisk{background-position:-456px -96px}.icon-exclamation-sign{background-position:0 -120px}.icon-gift{background-position:-24px -120px}.icon-leaf{background-position:-48px -120px}.icon-fire{background-position:-72px -120px}.icon-eye-open{background-position:-96px -120px}.icon-eye-close{background-position:-120px -120px}.icon-warning-sign{background-position:-144px -120px}.icon-plane{background-position:-168px -120px}.icon-calendar{background-position:-192px -120px}.icon-random{background-position:-216px -120px}.icon-comment{background-position:-240px -120px}.icon-magnet{background-position:-264px -120px}.icon-chevron-up{background-position:-288px -120px}.icon-chevron-down{background-position:-313px -119px}.icon-retweet{background-position:-336px -120px}.icon-shopping-cart{background-position:-360px -120px}.icon-folder-close{background-position:-384px -120px}.icon-folder-open{background-position:-408px -120px}.icon-resize-vertical{background-position:-432px -119px}.icon-resize-horizontal{background-position:-456px -118px}.icon-hdd{background-position:0 -144px}.icon-bullhorn{background-position:-24px -144px}.icon-bell{background-position:-48px -144px}.icon-certificate{background-position:-72px -144px}.icon-thumbs-up{background-position:-96px -144px}.icon-thumbs-down{background-position:-120px -144px}.icon-hand-right{background-position:-144px -144px}.icon-hand-left{background-position:-168px -144px}.icon-hand-up{background-position:-192px -144px}.icon-hand-down{background-position:-216px -144px}.icon-circle-arrow-right{background-position:-240px -144px}.icon-circle-arrow-left{background-position:-264px -144px}.icon-circle-arrow-up{background-position:-288px -144px}.icon-circle-arrow-down{background-position:-312px -144px}.icon-globe{background-position:-336px -144px}.icon-wrench{background-position:-360px -144px}.icon-tasks{background-position:-384px -144px}.icon-filter{background-position:-408px -144px}.icon-briefcase{background-position:-432px -144px}.icon-fullscreen{background-position:-456px -144px}.dropdown,.dropup{position:relative}.dropdown-toggle:active,.open .dropdown-toggle{outline:0}.caret{display:inline-block;width:0;height:0;vertical-align:top;border-top:4px solid #000;border-right:4px solid transparent;border-left:4px solid transparent;content:"";opacity:.3;filter:alpha(opacity=30)}.dropdown .caret{margin-top:8px;margin-left:2px}.dropdown:hover .caret,.open .caret{opacity:1;filter:alpha(opacity=100)}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:4px 0;margin:1px 0 0;list-style:none;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);-moz-box-shadow:0 5px 10px rgba(0,0,0,.2);box-shadow:0 5px 10px rgba(0,0,0,.2);-webkit-background-clip:padding-box;-moz-background-clip:padding;background-clip:padding-box}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:8px 1px;overflow:hidden;background-color:#e5e5e5;border-bottom:1px solid #fff}.dropdown-menu a{display:block;padding:3px 15px;clear:both;font-weight:400;line-height:18px;color:#333;white-space:nowrap}.dropdown-menu .active>a,.dropdown-menu .active>a:hover,.dropdown-menu li>a:hover{color:#fff;text-decoration:none;background-color:#08c}.open>.dropdown-menu{display:block}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px solid #000;content:"\\2191"}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:1px}.typeahead{margin-top:2px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #eee;border:1px solid rgba(0,0,0,.05);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.05);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,.05);box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.well-large{padding:24px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.well-small{padding:9px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.fade{opacity:0;-webkit-transition:opacity .15s linear;-moz-transition:opacity .15s linear;-ms-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;-moz-transition:height .35s ease;-ms-transition:height .35s ease;-o-transition:height .35s ease;transition:height .35s ease}.collapse.in{height:auto}.close{float:right;font-size:20px;font-weight:700;line-height:18px;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4;filter:alpha(opacity=40)}button.close{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.btn{display:inline-block;padding:4px 10px;margin-bottom:0;font-size:13px;line-height:18px;color:#333;text-align:center;text-shadow:0 1px 1px rgba(255,255,255,.75);vertical-align:middle;cursor:pointer;background-color:#f5f5f5;background-image:-ms-linear-gradient(top,#fff,#e6e6e6);background-image:-webkit-gradient(linear,0 0,0 100%,from(#fff),to(#e6e6e6));background-image:-webkit-linear-gradient(top,#fff,#e6e6e6);background-image:-o-linear-gradient(top,#fff,#e6e6e6);background-image:linear-gradient(top,#fff,#e6e6e6);background-image:-moz-linear-gradient(top,#fff,#e6e6e6);background-repeat:repeat-x;border:1px solid #ccc;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;filter:progid:dximagetransform.microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0);filter:progid:dximagetransform.microsoft.gradient(enabled=false);-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);-moz-box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05)}.btn:hover{color:#333;text-decoration:none;background-color:#e6e6e6;background-position:0 -15px;-webkit-transition:background-position .1s linear;-moz-transition:background-position .1s linear;-ms-transition:background-position .1s linear;-o-transition:background-position .1s linear;transition:background-position .1s linear}.btn:focus{outline:#333 dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.btn.active,.btn:active{background-color:#e6e6e6;background-image:none;outline:0;-webkit-box-shadow:inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05);-moz-box-shadow:inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)}.btn.disabled,.btn[disabled]{cursor:default;background-color:#e6e6e6;background-image:none;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.btn-large{padding:9px 14px;font-size:15px;line-height:normal;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.btn-large [class^=icon-]{margin-top:1px}.btn-small{padding:5px 9px;font-size:11px;line-height:16px}.btn-small [class^=icon-]{margin-top:-1px}.btn-mini{padding:2px 6px;font-size:11px;line-height:14px}.btn-danger,.btn-danger:hover,.btn-info,.btn-info:hover,.btn-inverse,.btn-inverse:hover,.btn-primary,.btn-primary:hover,.btn-success,.btn-success:hover,.btn-warning,.btn-warning:hover{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.btn-danger.active,.btn-info.active,.btn-inverse.active,.btn-primary.active,.btn-success.active,.btn-warning.active{color:rgba(255,255,255,.75)}.btn{border-color:#ccc;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25)}.btn-primary{background-color:#0074cc;background-image:-ms-linear-gradient(top,#08c,#05c);background-image:-webkit-gradient(linear,0 0,0 100%,from(#08c),to(#05c));background-image:-webkit-linear-gradient(top,#08c,#05c);background-image:-o-linear-gradient(top,#08c,#05c);background-image:-moz-linear-gradient(top,#08c,#05c);background-image:linear-gradient(top,#08c,#05c);background-repeat:repeat-x;border-color:#05c #05c #003580;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:dximagetransform.microsoft.gradient(startColorstr='#0088cc', endColorstr='#0055cc', GradientType=0);filter:progid:dximagetransform.microsoft.gradient(enabled=false)}.btn-primary.active,.btn-primary.disabled,.btn-primary:active,.btn-primary:hover,.btn-primary[disabled]{background-color:#05c}.btn-warning{background-color:#faa732;background-image:-ms-linear-gradient(top,#fbb450,#f89406);background-image:-webkit-gradient(linear,0 0,0 100%,from(#fbb450),to(#f89406));background-image:-webkit-linear-gradient(top,#fbb450,#f89406);background-image:-o-linear-gradient(top,#fbb450,#f89406);background-image:-moz-linear-gradient(top,#fbb450,#f89406);background-image:linear-gradient(top,#fbb450,#f89406);background-repeat:repeat-x;border-color:#f89406 #f89406 #ad6704;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:dximagetransform.microsoft.gradient(startColorstr='#fbb450', endColorstr='#f89406', GradientType=0);filter:progid:dximagetransform.microsoft.gradient(enabled=false)}.btn-warning.active,.btn-warning.disabled,.btn-warning:active,.btn-warning:hover,.btn-warning[disabled]{background-color:#f89406}.btn-danger{background-color:#da4f49;background-image:-ms-linear-gradient(top,#ee5f5b,#bd362f);background-image:-webkit-gradient(linear,0 0,0 100%,from(#ee5f5b),to(#bd362f));background-image:-webkit-linear-gradient(top,#ee5f5b,#bd362f);background-image:-o-linear-gradient(top,#ee5f5b,#bd362f);background-image:-moz-linear-gradient(top,#ee5f5b,#bd362f);background-image:linear-gradient(top,#ee5f5b,#bd362f);background-repeat:repeat-x;border-color:#bd362f #bd362f #802420;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:dximagetransform.microsoft.gradient(startColorstr='#ee5f5b', endColorstr='#bd362f', GradientType=0);filter:progid:dximagetransform.microsoft.gradient(enabled=false)}.btn-danger.active,.btn-danger.disabled,.btn-danger:active,.btn-danger:hover,.btn-danger[disabled]{background-color:#bd362f}.btn-success{background-color:#5bb75b;background-image:-ms-linear-gradient(top,#62c462,#51a351);background-image:-webkit-gradient(linear,0 0,0 100%,from(#62c462),to(#51a351));background-image:-webkit-linear-gradient(top,#62c462,#51a351);background-image:-o-linear-gradient(top,#62c462,#51a351);background-image:-moz-linear-gradient(top,#62c462,#51a351);background-image:linear-gradient(top,#62c462,#51a351);background-repeat:repeat-x;border-color:#51a351 #51a351 #387038;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:dximagetransform.microsoft.gradient(startColorstr='#62c462', endColorstr='#51a351', GradientType=0);filter:progid:dximagetransform.microsoft.gradient(enabled=false)}.btn-success.active,.btn-success.disabled,.btn-success:active,.btn-success:hover,.btn-success[disabled]{background-color:#51a351}.btn-info{background-color:#49afcd;background-image:-ms-linear-gradient(top,#5bc0de,#2f96b4);background-image:-webkit-gradient(linear,0 0,0 100%,from(#5bc0de),to(#2f96b4));background-image:-webkit-linear-gradient(top,#5bc0de,#2f96b4);background-image:-o-linear-gradient(top,#5bc0de,#2f96b4);background-image:-moz-linear-gradient(top,#5bc0de,#2f96b4);background-image:linear-gradient(top,#5bc0de,#2f96b4);background-repeat:repeat-x;border-color:#2f96b4 #2f96b4 #1f6377;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:dximagetransform.microsoft.gradient(startColorstr='#5bc0de', endColorstr='#2f96b4', GradientType=0);filter:progid:dximagetransform.microsoft.gradient(enabled=false)}.btn-info.active,.btn-info.disabled,.btn-info:active,.btn-info:hover,.btn-info[disabled]{background-color:#2f96b4}.btn-inverse{background-color:#414141;background-image:-ms-linear-gradient(top,#555,#222);background-image:-webkit-gradient(linear,0 0,0 100%,from(#555),to(#222));background-image:-webkit-linear-gradient(top,#555,#222);background-image:-o-linear-gradient(top,#555,#222);background-image:-moz-linear-gradient(top,#555,#222);background-image:linear-gradient(top,#555,#222);background-repeat:repeat-x;border-color:#222 #222 #000;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:dximagetransform.microsoft.gradient(startColorstr='#555555', endColorstr='#222222', GradientType=0);filter:progid:dximagetransform.microsoft.gradient(enabled=false)}.btn-inverse.active,.btn-inverse.disabled,.btn-inverse:active,.btn-inverse:hover,.btn-inverse[disabled]{background-color:#222}button.btn::-moz-focus-inner,input[type=submit].btn::-moz-focus-inner{padding:0;border:0}.btn-group{position:relative}.btn-group:after,.btn-group:before{display:table;content:""}.btn-group:after{clear:both}.btn-group+.btn-group{margin-left:5px}.btn-toolbar{margin-top:9px;margin-bottom:9px}.btn-toolbar .btn-group{display:inline-block}.btn-group>.btn{position:relative;float:left;margin-left:-1px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.btn-group>.btn:first-child{margin-left:0;-webkit-border-bottom-left-radius:4px;border-bottom-left-radius:4px;-webkit-border-top-left-radius:4px;border-top-left-radius:4px;-moz-border-radius-bottomleft:4px;-moz-border-radius-topleft:4px}.btn-group>.btn:last-child,.btn-group>.dropdown-toggle{-webkit-border-top-right-radius:4px;border-top-right-radius:4px;-webkit-border-bottom-right-radius:4px;border-bottom-right-radius:4px;-moz-border-radius-topright:4px;-moz-border-radius-bottomright:4px}.btn-group>.btn.large:first-child{margin-left:0;-webkit-border-bottom-left-radius:6px;border-bottom-left-radius:6px;-webkit-border-top-left-radius:6px;border-top-left-radius:6px;-moz-border-radius-bottomleft:6px;-moz-border-radius-topleft:6px}.btn-group>.btn.large:last-child,.btn-group>.large.dropdown-toggle{-webkit-border-top-right-radius:6px;border-top-right-radius:6px;-webkit-border-bottom-right-radius:6px;border-bottom-right-radius:6px;-moz-border-radius-topright:6px;-moz-border-radius-bottomright:6px}.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:2}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.dropdown-toggle{padding-right:8px;padding-left:8px;-webkit-box-shadow:inset 1px 0 0 rgba(255,255,255,.125),inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);-moz-box-shadow:inset 1px 0 0 rgba(255,255,255,.125),inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 1px 0 0 rgba(255,255,255,.125),inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05)}.btn-group>.btn-mini.dropdown-toggle{padding-right:5px;padding-left:5px}.btn-group>.btn-large.dropdown-toggle{padding-right:12px;padding-left:12px}.btn-group.open .dropdown-toggle{background-image:none;-webkit-box-shadow:inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05);-moz-box-shadow:inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)}.btn-group.open .btn.dropdown-toggle{background-color:#e6e6e6}.btn-group.open .btn-primary.dropdown-toggle{background-color:#05c}.btn-group.open .btn-warning.dropdown-toggle{background-color:#f89406}.btn-group.open .btn-danger.dropdown-toggle{background-color:#bd362f}.btn-group.open .btn-success.dropdown-toggle{background-color:#51a351}.btn-group.open .btn-info.dropdown-toggle{background-color:#2f96b4}.btn-group.open .btn-inverse.dropdown-toggle{background-color:#222}.btn .caret{margin-top:7px;margin-left:0}.btn:hover .caret,.open.btn-group .caret{opacity:1;filter:alpha(opacity=100)}.btn-mini .caret{margin-top:5px}.btn-small .caret{margin-top:6px}.btn-large .caret{margin-top:6px;border-top-width:5px;border-right-width:5px;border-left-width:5px}.dropup .btn-large .caret{border-top:0;border-bottom:5px solid #000}.btn-danger .caret,.btn-info .caret,.btn-inverse .caret,.btn-primary .caret,.btn-success .caret,.btn-warning .caret{border-top-color:#fff;border-bottom-color:#fff;opacity:.75;filter:alpha(opacity=75)}.alert{padding:8px 35px 8px 14px;margin-bottom:18px;color:#c09853;text-shadow:0 1px 0 rgba(255,255,255,.5);background-color:#fcf8e3;border:1px solid #fbeed5;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.alert-heading{color:inherit}.alert .close{position:relative;top:-2px;right:-21px;line-height:18px}.alert-success{color:#468847;background-color:#dff0d8;border-color:#d6e9c6}.alert-danger,.alert-error{color:#b94a48;background-color:#f2dede;border-color:#eed3d7}.alert-info{color:#3a87ad;background-color:#d9edf7;border-color:#bce8f1}.alert-block{padding-top:14px;padding-bottom:14px}.alert-block>p,.alert-block>ul{margin-bottom:0}.alert-block p+p{margin-top:5px}.nav{margin-bottom:18px;margin-left:0;list-style:none}.nav>li>a{display:block}.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>.pull-right{float:right}.nav .nav-header{display:block;padding:3px 15px;font-size:11px;font-weight:700;line-height:18px;color:#999;text-shadow:0 1px 0 rgba(255,255,255,.5);text-transform:uppercase}.nav li+.nav-header{margin-top:9px}.nav-list{padding-right:15px;padding-left:15px;margin-bottom:0}.nav-list .nav-header,.nav-list>li>a{margin-right:-15px;margin-left:-15px;text-shadow:0 1px 0 rgba(255,255,255,.5)}.nav-list>li>a{padding:3px 15px}.nav-list>.active>a,.nav-list>.active>a:hover{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.2);background-color:#08c}.nav-list [class^=icon-]{margin-right:2px}.nav-list .divider{height:1px;margin:8px 1px;overflow:hidden;background-color:#e5e5e5;border-bottom:1px solid #fff}.nav-pills:after,.nav-pills:before,.nav-tabs:after,.nav-tabs:before{display:table;content:""}.nav-pills:after,.nav-tabs:after{clear:both}.nav-pills>li,.nav-tabs>li{float:left}.nav-pills>li>a,.nav-tabs>li>a{padding-right:12px;padding-left:12px;margin-right:2px;line-height:14px}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{margin-bottom:-1px}.nav-tabs>li>a{padding-top:8px;padding-bottom:8px;line-height:18px;border:1px solid transparent;-webkit-border-radius:4px 4px 0 0;-moz-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>.active>a,.nav-tabs>.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-pills>li>a{padding-top:8px;padding-bottom:8px;margin-top:2px;margin-bottom:2px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.nav-pills>.active>a,.nav-pills>.active>a:hover{color:#fff;background-color:#08c}.nav-stacked>li{float:none}.nav-stacked>li>a{margin-right:0}.nav-tabs.nav-stacked{border-bottom:0}.nav-tabs.nav-stacked>li>a{border:1px solid #ddd;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.nav-tabs.nav-stacked>li:first-child>a{-webkit-border-radius:4px 4px 0 0;-moz-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0}.nav-tabs.nav-stacked>li:last-child>a{-webkit-border-radius:0 0 4px 4px;-moz-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px}.nav-tabs.nav-stacked>li>a:hover{z-index:2;border-color:#ddd}.nav-pills.nav-stacked>li>a{margin-bottom:3px}.nav-pills.nav-stacked>li:last-child>a{margin-bottom:1px}.nav-tabs .dropdown-menu{-webkit-border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;border-radius:0 0 5px 5px}.nav-pills .dropdown-menu{-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.nav-pills .dropdown-toggle .caret,.nav-tabs .dropdown-toggle .caret{margin-top:6px;border-top-color:#08c;border-bottom-color:#08c}.nav-pills .dropdown-toggle:hover .caret,.nav-tabs .dropdown-toggle:hover .caret{border-top-color:#005580;border-bottom-color:#005580}.nav-pills .active .dropdown-toggle .caret,.nav-tabs .active .dropdown-toggle .caret{border-top-color:#333;border-bottom-color:#333}.nav>.dropdown.active>a:hover{color:#000;cursor:pointer}.nav-pills .open .dropdown-toggle,.nav-tabs .open .dropdown-toggle,.nav>li.dropdown.open.active>a:hover{color:#fff;background-color:#999;border-color:#999}.nav li.dropdown.open .caret,.nav li.dropdown.open a:hover .caret,.nav li.dropdown.open.active .caret{border-top-color:#fff;border-bottom-color:#fff;opacity:1;filter:alpha(opacity=100)}.tabs-stacked .open>a:hover{border-color:#999}.tabbable:after,.tabbable:before{display:table;content:""}.tabbable:after{clear:both}.tab-content{overflow:auto}.tabs-below>.nav-tabs,.tabs-left>.nav-tabs,.tabs-right>.nav-tabs{border-bottom:0}.pill-content>.pill-pane,.tab-content>.tab-pane{display:none}.pill-content>.active,.tab-content>.active{display:block}.tabs-below>.nav-tabs{border-top:1px solid #ddd}.tabs-below>.nav-tabs>li{margin-top:-1px;margin-bottom:0}.tabs-below>.nav-tabs>li>a{-webkit-border-radius:0 0 4px 4px;-moz-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px}.tabs-below>.nav-tabs>li>a:hover{border-top-color:#ddd;border-bottom-color:transparent}.tabs-below>.nav-tabs>.active>a,.tabs-below>.nav-tabs>.active>a:hover{border-color:transparent #ddd #ddd}.tabs-left>.nav-tabs>li,.tabs-right>.nav-tabs>li{float:none}.tabs-left>.nav-tabs>li>a,.tabs-right>.nav-tabs>li>a{min-width:74px;margin-right:0;margin-bottom:3px}.tabs-left>.nav-tabs{float:left;margin-right:19px;border-right:1px solid #ddd}.tabs-left>.nav-tabs>li>a{margin-right:-1px;-webkit-border-radius:4px 0 0 4px;-moz-border-radius:4px 0 0 4px;border-radius:4px 0 0 4px}.tabs-left>.nav-tabs>li>a:hover{border-color:#eee #ddd #eee #eee}.tabs-left>.nav-tabs .active>a,.tabs-left>.nav-tabs .active>a:hover{border-color:#ddd transparent #ddd #ddd}.tabs-right>.nav-tabs{float:right;margin-left:19px;border-left:1px solid #ddd}.tabs-right>.nav-tabs>li>a{margin-left:-1px;-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0}.tabs-right>.nav-tabs>li>a:hover{border-color:#eee #eee #eee #ddd}.tabs-right>.nav-tabs .active>a,.tabs-right>.nav-tabs .active>a:hover{border-color:#ddd #ddd #ddd transparent}.navbar{margin-bottom:18px;overflow:visible}.navbar-inner{min-height:40px;padding-right:20px;padding-left:20px;background-color:#2c2c2c;background-image:-moz-linear-gradient(top,#333,#222);background-image:-ms-linear-gradient(top,#333,#222);background-image:-webkit-gradient(linear,0 0,0 100%,from(#333),to(#222));background-image:-webkit-linear-gradient(top,#333,#222);background-image:-o-linear-gradient(top,#333,#222);background-image:linear-gradient(top,#333,#222);background-repeat:repeat-x;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;filter:progid:dximagetransform.microsoft.gradient(startColorstr='#333333', endColorstr='#222222', GradientType=0);-webkit-box-shadow:0 1px 3px rgba(0,0,0,.25),inset 0 -1px 0 rgba(0,0,0,.1);-moz-box-shadow:0 1px 3px rgba(0,0,0,.25),inset 0 -1px 0 rgba(0,0,0,.1);box-shadow:0 1px 3px rgba(0,0,0,.25),inset 0 -1px 0 rgba(0,0,0,.1)}.navbar .container{width:auto}.nav-collapse.collapse{height:auto}.navbar{color:#999}.navbar .brand:hover{text-decoration:none}.navbar .brand{display:block;float:left;padding:8px 20px 12px;margin-left:-20px;font-size:20px;font-weight:200;line-height:1;color:#999}.navbar .navbar-text{margin-bottom:0;line-height:40px}.navbar .navbar-link{color:#999}.navbar .navbar-link:hover{color:#fff}.navbar .btn-group .btn{margin:0}.navbar-form{margin-bottom:0}.navbar-form:after,.navbar-form:before{display:table;content:""}.navbar-form:after{clear:both}.navbar-form .checkbox,.navbar-form .radio,.navbar-form input,.navbar-form select{margin-top:5px}.navbar-form input,.navbar-form select{display:inline-block;margin-bottom:0}.navbar-form input[type=checkbox],.navbar-form input[type=image],.navbar-form input[type=radio]{margin-top:3px}.navbar-form .input-append,.navbar-form .input-prepend{margin-top:6px;white-space:nowrap}.navbar-form .input-append input,.navbar-form .input-prepend input{margin-top:0}.navbar-search{position:relative;float:left;margin-top:6px;margin-bottom:0}.navbar-search .search-query{padding:4px 9px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:13px;font-weight:400;line-height:1;color:#fff;background-color:#626262;border:1px solid #151515;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1),0 1px 0 rgba(255,255,255,.15);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.1),0 1px 0 rgba(255,255,255,.15);box-shadow:inset 0 1px 2px rgba(0,0,0,.1),0 1px 0 rgba(255,255,255,.15);-webkit-transition:none;-moz-transition:none;-ms-transition:none;-o-transition:none;transition:none}.navbar-search .search-query:-moz-placeholder{color:#ccc}.navbar-search .search-query:-ms-input-placeholder{color:#ccc}.navbar-search .search-query::-webkit-input-placeholder{color:#ccc}.navbar-search .search-query.focused,.navbar-search .search-query:focus{padding:5px 10px;color:#333;text-shadow:0 1px 0 #fff;background-color:#fff;border:0;outline:0;-webkit-box-shadow:0 0 3px rgba(0,0,0,.15);-moz-box-shadow:0 0 3px rgba(0,0,0,.15);box-shadow:0 0 3px rgba(0,0,0,.15)}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030;margin-bottom:0}.navbar-fixed-bottom .navbar-inner,.navbar-fixed-top .navbar-inner{padding-right:0;padding-left:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.navbar-fixed-bottom .container,.navbar-fixed-top .container{width:940px}.navbar-fixed-top{top:0}.navbar-fixed-bottom{bottom:0}.navbar .nav{position:relative;left:0;display:block;float:left;margin:0 10px 0 0}.navbar .nav.pull-right{float:right}.navbar .nav>li{display:block;float:left}.navbar .nav>li>a{float:none;padding:9px 10px 11px;line-height:19px;color:#999;text-decoration:none;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.navbar .btn{display:inline-block;padding:4px 10px;margin:5px 5px 6px;line-height:18px}.navbar .btn-group{padding:5px 5px 6px;margin:0}.navbar .nav>li>a:hover{color:#fff;text-decoration:none;background-color:transparent}.navbar .nav .active>a,.navbar .nav .active>a:hover{color:#fff;text-decoration:none;background-color:#222}.navbar .divider-vertical{width:1px;height:40px;margin:0 9px;overflow:hidden;background-color:#222;border-right:1px solid #333}.navbar .nav.pull-right{margin-right:0;margin-left:10px}.navbar .btn-navbar{display:none;float:right;padding:7px 10px;margin-right:5px;margin-left:5px;background-color:#2c2c2c;background-image:-ms-linear-gradient(top,#333,#222);background-image:-webkit-gradient(linear,0 0,0 100%,from(#333),to(#222));background-image:-webkit-linear-gradient(top,#333,#222);background-image:-o-linear-gradient(top,#333,#222);background-image:linear-gradient(top,#333,#222);background-image:-moz-linear-gradient(top,#333,#222);background-repeat:repeat-x;border-color:#222 #222 #000;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:dximagetransform.microsoft.gradient(startColorstr='#333333', endColorstr='#222222', GradientType=0);filter:progid:dximagetransform.microsoft.gradient(enabled=false);-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.075);-moz-box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.075);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.075)}.navbar .btn-navbar.active,.navbar .btn-navbar.disabled,.navbar .btn-navbar:active,.navbar .btn-navbar:hover,.navbar .btn-navbar[disabled]{background-color:#222}.navbar .btn-navbar .icon-bar{display:block;width:18px;height:2px;background-color:#f5f5f5;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px;-webkit-box-shadow:0 1px 0 rgba(0,0,0,.25);-moz-box-shadow:0 1px 0 rgba(0,0,0,.25);box-shadow:0 1px 0 rgba(0,0,0,.25)}.btn-navbar .icon-bar+.icon-bar{margin-top:3px}.navbar .dropdown-menu:before{position:absolute;top:-7px;left:9px;display:inline-block;border-right:7px solid transparent;border-bottom:7px solid #ccc;border-left:7px solid transparent;border-bottom-color:rgba(0,0,0,.2);content:''}.navbar .dropdown-menu:after{position:absolute;top:-6px;left:10px;display:inline-block;border-right:6px solid transparent;border-bottom:6px solid #fff;border-left:6px solid transparent;content:''}.navbar-fixed-bottom .dropdown-menu:before{top:auto;bottom:-7px;border-top:7px solid #ccc;border-bottom:0;border-top-color:rgba(0,0,0,.2)}.navbar-fixed-bottom .dropdown-menu:after{top:auto;bottom:-6px;border-top:6px solid #fff;border-bottom:0}.navbar .nav li.dropdown .dropdown-toggle .caret,.navbar .nav li.dropdown.open .caret{border-top-color:#fff;border-bottom-color:#fff}.navbar .nav li.dropdown.active .caret{opacity:1;filter:alpha(opacity=100)}.navbar .nav li.dropdown.active>.dropdown-toggle,.navbar .nav li.dropdown.open.active>.dropdown-toggle,.navbar .nav li.dropdown.open>.dropdown-toggle{background-color:transparent}.navbar .nav li.dropdown.active>.dropdown-toggle:hover{color:#fff}.navbar .dropdown-menu.pull-right,.navbar .pull-right .dropdown-menu{right:0;left:auto}.navbar .dropdown-menu.pull-right:before,.navbar .pull-right .dropdown-menu:before{right:12px;left:auto}.navbar .dropdown-menu.pull-right:after,.navbar .pull-right .dropdown-menu:after{right:13px;left:auto}.breadcrumb{padding:7px 14px;margin:0 0 18px;list-style:none;background-color:#fbfbfb;background-image:-moz-linear-gradient(top,#fff,#f5f5f5);background-image:-ms-linear-gradient(top,#fff,#f5f5f5);background-image:-webkit-gradient(linear,0 0,0 100%,from(#fff),to(#f5f5f5));background-image:-webkit-linear-gradient(top,#fff,#f5f5f5);background-image:-o-linear-gradient(top,#fff,#f5f5f5);background-image:linear-gradient(top,#fff,#f5f5f5);background-repeat:repeat-x;border:1px solid #ddd;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;filter:progid:dximagetransform.microsoft.gradient(startColorstr='#ffffff', endColorstr='#f5f5f5', GradientType=0);-webkit-box-shadow:inset 0 1px 0 #fff;-moz-box-shadow:inset 0 1px 0 #fff;box-shadow:inset 0 1px 0 #fff}.breadcrumb li{display:inline-block;text-shadow:0 1px 0 #fff}.breadcrumb .divider{padding:0 5px;color:#999}.breadcrumb .active a{color:#333}.pagination{height:36px;margin:18px 0}.pagination ul{display:inline-block;margin-bottom:0;margin-left:0;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.05);-moz-box-shadow:0 1px 2px rgba(0,0,0,.05);box-shadow:0 1px 2px rgba(0,0,0,.05)}.pagination li{display:inline}.pagination a{float:left;padding:0 14px;line-height:34px;text-decoration:none;border:1px solid #ddd;border-left-width:0}.pagination .active a,.pagination a:hover{background-color:#f5f5f5}.pagination .active a{color:#999;cursor:default}.pagination .disabled a,.pagination .disabled a:hover,.pagination .disabled span{color:#999;cursor:default;background-color:transparent}.pagination li:first-child a{border-left-width:1px;-webkit-border-radius:3px 0 0 3px;-moz-border-radius:3px 0 0 3px;border-radius:3px 0 0 3px}.pagination li:last-child a{-webkit-border-radius:0 3px 3px 0;-moz-border-radius:0 3px 3px 0;border-radius:0 3px 3px 0}.pagination-centered{text-align:center}.pagination-right{text-align:right}.pager{margin-bottom:18px;margin-left:0;text-align:center;list-style:none}.pager:after,.pager:before{display:table;content:""}.pager:after{clear:both}.pager li{display:inline}.pager a{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px}.pager a:hover{text-decoration:none;background-color:#f5f5f5}.pager .next a{float:right}.pager .previous a{float:left}.pager .disabled a,.pager .disabled a:hover{color:#999;cursor:default;background-color:#fff}.modal-open .dropdown-menu{z-index:2050}.modal-open .popover{z-index:2060}.modal-open .tooltip{z-index:2070}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop,.modal-backdrop.fade.in{opacity:.8;filter:alpha(opacity=80)}.modal{position:fixed;top:50%;left:50%;z-index:1050;width:560px;margin:-250px 0 0 -280px;overflow:auto;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,.3);-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-box-shadow:0 3px 7px rgba(0,0,0,.3);-moz-box-shadow:0 3px 7px rgba(0,0,0,.3);box-shadow:0 3px 7px rgba(0,0,0,.3);-webkit-background-clip:padding-box;-moz-background-clip:padding-box;background-clip:padding-box}.modal.fade{top:-25%;-webkit-transition:opacity .3s linear,top .3s ease-out;-moz-transition:opacity .3s linear,top .3s ease-out;-ms-transition:opacity .3s linear,top .3s ease-out;-o-transition:opacity .3s linear,top .3s ease-out;transition:opacity .3s linear,top .3s ease-out}.modal.fade.in{top:50%}.modal-header{padding:9px 15px;border-bottom:1px solid #eee}.modal-header .close{margin-top:2px}.modal-body{max-height:400px;padding:15px;overflow-y:auto}.modal-form{margin-bottom:0}.modal-footer{padding:14px 15px 15px;margin-bottom:0;text-align:right;background-color:#f5f5f5;border-top:1px solid #ddd;-webkit-border-radius:0 0 6px 6px;-moz-border-radius:0 0 6px 6px;border-radius:0 0 6px 6px;-webkit-box-shadow:inset 0 1px 0 #fff;-moz-box-shadow:inset 0 1px 0 #fff;box-shadow:inset 0 1px 0 #fff}.modal-footer:after,.modal-footer:before{display:table;content:""}.modal-footer:after{clear:both}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.tooltip{position:absolute;z-index:1020;display:block;padding:5px;font-size:11px;opacity:0;filter:alpha(opacity=0);visibility:visible}.tooltip.in{opacity:.8;filter:alpha(opacity=80)}.tooltip.top{margin-top:-2px}.tooltip.right{margin-left:2px}.tooltip.bottom{margin-top:2px}.tooltip.left{margin-left:-2px}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-top:5px solid #000;border-right:5px solid transparent;border-left:5px solid transparent}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-right:5px solid transparent;border-bottom:5px solid #000;border-left:5px solid transparent}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-top:5px solid transparent;border-right:5px solid #000;border-bottom:5px solid transparent}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;text-decoration:none;background-color:#000;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0}.popover{position:absolute;top:0;left:0;z-index:1010;display:none;padding:5px}.popover.top{margin-top:-5px}.popover.right{margin-left:5px}.popover.bottom{margin-top:5px}.popover.left{margin-left:-5px}.popover.top .arrow{bottom:0;left:50%;margin-left:-5px;border-top:5px solid #000;border-right:5px solid transparent;border-left:5px solid transparent}.popover.right .arrow{top:50%;left:0;margin-top:-5px;border-top:5px solid transparent;border-right:5px solid #000;border-bottom:5px solid transparent}.popover.bottom .arrow{top:0;left:50%;margin-left:-5px;border-right:5px solid transparent;border-bottom:5px solid #000;border-left:5px solid transparent}.popover.left .arrow{top:50%;right:0;margin-top:-5px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #000}.popover .arrow{position:absolute;width:0;height:0}.popover-inner{width:280px;padding:3px;overflow:hidden;background:#000;background:rgba(0,0,0,.8);-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-box-shadow:0 3px 7px rgba(0,0,0,.3);-moz-box-shadow:0 3px 7px rgba(0,0,0,.3);box-shadow:0 3px 7px rgba(0,0,0,.3)}.popover-title{padding:9px 15px;line-height:1;background-color:#f5f5f5;border-bottom:1px solid #eee;-webkit-border-radius:3px 3px 0 0;-moz-border-radius:3px 3px 0 0;border-radius:3px 3px 0 0}.popover-content{padding:14px;background-color:#fff;-webkit-border-radius:0 0 3px 3px;-moz-border-radius:0 0 3px 3px;border-radius:0 0 3px 3px;-webkit-background-clip:padding-box;-moz-background-clip:padding-box;background-clip:padding-box}.popover-content ol,.popover-content p,.popover-content ul{margin-bottom:0}.thumbnails{margin-left:-20px;list-style:none}.thumbnails:after,.thumbnails:before{display:table;content:""}.thumbnails:after{clear:both}.row-fluid .thumbnails{margin-left:0}.thumbnails>li{float:left;margin-bottom:18px;margin-left:20px}.thumbnail{display:block;padding:4px;line-height:1;border:1px solid #ddd;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.075);-moz-box-shadow:0 1px 1px rgba(0,0,0,.075);box-shadow:0 1px 1px rgba(0,0,0,.075)}a.thumbnail:hover{border-color:#08c;-webkit-box-shadow:0 1px 4px rgba(0,105,214,.25);-moz-box-shadow:0 1px 4px rgba(0,105,214,.25);box-shadow:0 1px 4px rgba(0,105,214,.25)}.thumbnail>img{display:block;max-width:100%;margin-right:auto;margin-left:auto}.thumbnail .caption{padding:9px}.badge,.label{font-size:11px;font-weight:700;line-height:14px;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25);white-space:nowrap;vertical-align:baseline;background-color:#999}.label{padding:1px 4px 2px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.badge{padding:1px 9px 2px;-webkit-border-radius:9px;-moz-border-radius:9px;border-radius:9px}a.badge:hover,a.label:hover{color:#fff;text-decoration:none;cursor:pointer}.badge-important,.label-important{background-color:#b94a48}.badge-important[href],.label-important[href]{background-color:#953b39}.badge-warning,.label-warning{background-color:#f89406}.badge-warning[href],.label-warning[href]{background-color:#c67605}.badge-success,.label-success{background-color:#468847}.badge-success[href],.label-success[href]{background-color:#356635}.badge-info,.label-info{background-color:#3a87ad}.badge-info[href],.label-info[href]{background-color:#2d6987}.badge-inverse,.label-inverse{background-color:#333}.badge-inverse[href],.label-inverse[href]{background-color:#1a1a1a}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-moz-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-ms-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:0 0}to{background-position:40px 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{height:18px;margin-bottom:18px;overflow:hidden;background-color:#f7f7f7;background-image:-moz-linear-gradient(top,#f5f5f5,#f9f9f9);background-image:-ms-linear-gradient(top,#f5f5f5,#f9f9f9);background-image:-webkit-gradient(linear,0 0,0 100%,from(#f5f5f5),to(#f9f9f9));background-image:-webkit-linear-gradient(top,#f5f5f5,#f9f9f9);background-image:-o-linear-gradient(top,#f5f5f5,#f9f9f9);background-image:linear-gradient(top,#f5f5f5,#f9f9f9);background-repeat:repeat-x;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;filter:progid:dximagetransform.microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#f9f9f9', GradientType=0);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress .bar{width:0;height:18px;font-size:12px;color:#fff;text-align:center;text-shadow:0 -1px 0 rgba(0,0,0,.25);background-color:#0e90d2;background-image:-moz-linear-gradient(top,#149bdf,#0480be);background-image:-webkit-gradient(linear,0 0,0 100%,from(#149bdf),to(#0480be));background-image:-webkit-linear-gradient(top,#149bdf,#0480be);background-image:-o-linear-gradient(top,#149bdf,#0480be);background-image:linear-gradient(top,#149bdf,#0480be);background-image:-ms-linear-gradient(top,#149bdf,#0480be);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(startColorstr='#149bdf', endColorstr='#0480be', GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-moz-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-transition:width .6s ease;-moz-transition:width .6s ease;-ms-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.progress-striped .bar{background-color:#149bdf;background-image:-o-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-webkit-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-ms-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,.15)),color-stop(0.75,rgba(255,255,255,.15)),color-stop(0.75,transparent),to(transparent));background-image:linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px}.progress.active .bar{-webkit-animation:progress-bar-stripes 2s linear infinite;-moz-animation:progress-bar-stripes 2s linear infinite;-ms-animation:progress-bar-stripes 2s linear infinite;-o-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-danger .bar{background-color:#dd514c;background-image:-moz-linear-gradient(top,#ee5f5b,#c43c35);background-image:-ms-linear-gradient(top,#ee5f5b,#c43c35);background-image:-webkit-gradient(linear,0 0,0 100%,from(#ee5f5b),to(#c43c35));background-image:-webkit-linear-gradient(top,#ee5f5b,#c43c35);background-image:-o-linear-gradient(top,#ee5f5b,#c43c35);background-image:linear-gradient(top,#ee5f5b,#c43c35);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(startColorstr='#ee5f5b', endColorstr='#c43c35', GradientType=0)}.progress-danger.progress-striped .bar{background-color:#ee5f5b;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,.15)),color-stop(0.75,rgba(255,255,255,.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-ms-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-success .bar{background-color:#5eb95e;background-image:-moz-linear-gradient(top,#62c462,#57a957);background-image:-ms-linear-gradient(top,#62c462,#57a957);background-image:-webkit-gradient(linear,0 0,0 100%,from(#62c462),to(#57a957));background-image:-webkit-linear-gradient(top,#62c462,#57a957);background-image:-o-linear-gradient(top,#62c462,#57a957);background-image:linear-gradient(top,#62c462,#57a957);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(startColorstr='#62c462', endColorstr='#57a957', GradientType=0)}.progress-success.progress-striped .bar{background-color:#62c462;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,.15)),color-stop(0.75,rgba(255,255,255,.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-ms-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-info .bar{background-color:#4bb1cf;background-image:-moz-linear-gradient(top,#5bc0de,#339bb9);background-image:-ms-linear-gradient(top,#5bc0de,#339bb9);background-image:-webkit-gradient(linear,0 0,0 100%,from(#5bc0de),to(#339bb9));background-image:-webkit-linear-gradient(top,#5bc0de,#339bb9);background-image:-o-linear-gradient(top,#5bc0de,#339bb9);background-image:linear-gradient(top,#5bc0de,#339bb9);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(startColorstr='#5bc0de', endColorstr='#339bb9', GradientType=0)}.progress-info.progress-striped .bar{background-color:#5bc0de;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,.15)),color-stop(0.75,rgba(255,255,255,.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-ms-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-warning .bar{background-color:#faa732;background-image:-moz-linear-gradient(top,#fbb450,#f89406);background-image:-ms-linear-gradient(top,#fbb450,#f89406);background-image:-webkit-gradient(linear,0 0,0 100%,from(#fbb450),to(#f89406));background-image:-webkit-linear-gradient(top,#fbb450,#f89406);background-image:-o-linear-gradient(top,#fbb450,#f89406);background-image:linear-gradient(top,#fbb450,#f89406);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(startColorstr='#fbb450', endColorstr='#f89406', GradientType=0)}.progress-warning.progress-striped .bar{background-color:#fbb450;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,.15)),color-stop(0.75,rgba(255,255,255,.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-ms-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.accordion{margin-bottom:18px}.accordion-group{margin-bottom:2px;border:1px solid #e5e5e5;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.accordion-heading{border-bottom:0}.accordion-heading .accordion-toggle{display:block;padding:8px 15px}.accordion-toggle{cursor:pointer}.accordion-inner{padding:9px 15px;border-top:1px solid #e5e5e5}.carousel{position:relative;margin-bottom:18px;line-height:1}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel .item{position:relative;display:none;-webkit-transition:.6s ease-in-out left;-moz-transition:.6s ease-in-out left;-ms-transition:.6s ease-in-out left;-o-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel .item>img{display:block;line-height:1}.carousel .active,.carousel .next,.carousel .prev{display:block}.carousel .active{left:0}.carousel .next,.carousel .prev{position:absolute;top:0;width:100%}.carousel .next{left:100%}.carousel .prev{left:-100%}.carousel .next.left,.carousel .prev.right{left:0}.carousel .active.left{left:-100%}.carousel .active.right{left:100%}.carousel-control{position:absolute;top:40%;left:15px;width:40px;height:40px;margin-top:-20px;font-size:60px;font-weight:100;line-height:30px;color:#fff;text-align:center;background:#222;border:3px solid #fff;-webkit-border-radius:23px;-moz-border-radius:23px;border-radius:23px;opacity:.5;filter:alpha(opacity=50)}.carousel-control.right{right:15px;left:auto}.carousel-control:hover{color:#fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}.carousel-caption{position:absolute;right:0;bottom:0;left:0;padding:10px 15px 5px;background:#333;background:rgba(0,0,0,.75)}.carousel-caption h4,.carousel-caption p{color:#fff}.hero-unit{padding:60px;margin-bottom:30px;background-color:#eee;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.hero-unit h1{margin-bottom:0;font-size:60px;line-height:1;letter-spacing:-1px;color:inherit}.hero-unit p{font-size:18px;font-weight:200;line-height:27px;color:inherit}.pull-right{float:right}.pull-left{float:left}.hide{display:none}.show{display:block}.invisible{visibility:hidden}Status API Training Shop Blog About \xA9 2015 GitHub,Inc. Terms Privacy Security Contact
`,"css/print.css":`.noPrint{
	display: none;
	}
.button {display: none;}

.pageBreak {
page-break-after: always!important; 
page-break-before: avoid!important;
float:none;
	}
}



body {
	  line-height: 14px;
	  font-size: 11px;

}


.icon-plus-sign {
  display:list-item;
}''[===

`,"css/screen.css":`@media (max-device-width: 960px) {
	.span8{
		width:460px !important;
	}
	.container, .navbar-fixed-top .container, .navbar-fixed-bottom .container{
		width:790px !important;
	}
	
.page-break-before{
	display: none!important;
}

}

@media (max-device-width: 780px) {
	.span8{
		width:380px !important;
	}
	.container, .navbar-fixed-top .container, .navbar-fixed-bottom .container{
		width:760px !important;
	}
	
.page-break-before{
	display: none!important;
}

}

@media (max-width:640px) {
	.container, .navbar-fixed-top .container, .navbar-fixed-bottom .container{
		width:350px !important;
	}
	.span4 {
		padding-left: 15px;
		width: 329px;
	}
	.span8{
		width:328px !important;
		padding-left:15px !important;
	}
	
.page-break-before{
	display: none!important;
}

}

@media (max-width:350px) {
	.container, .navbar-fixed-top .container, .navbar-fixed-bottom .container{
		width:305px !important;
	}
	.span4 {
		padding-left: 5px !important;
		width: 298px !important;
	}
	.span8{
		width:298px !important;
		padding-left:5px !important;
	}
	
.page-break-before{
	display: none!important;
}

}

`,"css/shared.css":`body {

  margin: 0;

  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

  font-size: 13px;

  line-height: 18px;

  color: #333333;

  background-color: #ffffff;

  margin-top:20px;

  margin-bottom:10px;
overflow-y: scroll;
overflow-x: hidden;
  overflow: -moz-scrollbars-vertical;

  overflow: -webkit-scrollbars-vertical;

  overflow: -o-scrollbars-vertical;

}

@media print
{    
    .no-print, .no-print *
    {
        display: none !important;
    }
}

.well {

  background-color: #ffffff !important;

  border: 1px solid #ddd !important;

  border: 1px solid rgba(0, 0, 0, 0.1) !important;

  -webkit-border-radius: 0px !important;

     -moz-border-radius: 0px !important;

          border-radius: 0px !important;

  -webkit-box-shadow: none !important;

     -moz-box-shadow: none !important;

          box-shadow: none !important;

}



.hero-unit {

  padding: 30px !important;

  margin-bottom: 30px !important;

  background-color: #e8e8e8 !important;

  -webkit-border-radius: 1px !important;

     -moz-border-radius: 1px !important;

          border-radius: 1px !important;

}



.hero-unit p {

  font-size: 14px !important;

  line-height: 22px !important;
 

}



.avatar{

    border:1px solid #eee;

    padding:5px;

    margin:auto auto;

    width:250px;

    height:290px;

}



.avatar img{

    display:block;

    margin:auto auto;

    width:100%;

    height:100%;

}



.bio{

    width:250px;

    margin:auto auto;

    text-align:center;
    

}



.contact{

    width:250px;

    margin:10px auto;

    text-align:right;

}



.button{

    width:250px;

    margin:20px auto 0 auto;

    text-align:center;

}



.btn-resume{

    padding: 8px 10px;

}



.no-radius{

    border-radius:0 !important;

    -moz-border-radius: 0 !important;

    -o-border-radius: 0 !important;

    -webkit-border-radius: 0 !important;

}



.header{

    clear:both;

}


footer {
 -webkit-column-span: all; /* Chrome, Safari, Opera */
    column-span: all;
}`,"example.html":`<!DOCTYPE html>
<!--Copyright (c) 2015 Carl V. Lewis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.-->


<html lang="en">

  <head>

    <meta charset="utf-8">

    <title>Carl V. Lewis - Curriculum Vitae</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta name="format-detection" content="telephone=no">
	
    <meta name="description" content="Classic Bootstrap, Print-Ready, Minimalist CV/Resume">

    <meta name="author" content="Carl V. Lewis">


    <!-- Styles -->

    <link href="css/bootstrap.min.css" rel="stylesheet">

    <link href="css/shared.css" rel="stylesheet">
      <link href="css/screen.css" rel="stylesheet" media="screen">
        <link href="css/print.css" rel="stylesheet" media="print">

<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->

    <!--[if lt IE 9]>

      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"><\/script>

    <![endif]-->

    <!-- Le fav and touch icons -->

    <link rel="shortcut icon" href="img/favicon.ico">


  </head>


   <div class="container">

      <div class="row">

        <div class="span4">

			<div class="well">

                <div class="avatar">

                    <img width="300" height="400" alt="image" data-bind="attr:{src: imagePath}" />

                </div><!--/avatar -->

                <br class="clearfix" />

                

                <div class="bio">

                    <h1 data-bind="text: name"></h1>

                    <em><p data-bind="text: label"/></p></em>

                </div><!--/bio -->

                <br class="clearfix" />

                

                <div class="contact">

                    <p><span data-bind="text: address"></span>  <i class="fa fa-home"></i></p>

					<p><span data-bind="text: location"></span>  <i class="fa fa-map-marker"></i></p>
					<!--This next span class forces Chrome to disable phone number hyperlinking-->
					<p><span class="googlevoice" data-bind="text: phone"></span>  <i class="fa fa-mobile"></i></p>

					<p><a data-bind="attr: { href: website}"><span data-bind="text: website"></span></a>  <i class="fa fa-globe"></i></p>
                                        
                                        <p><a style="margin-right:3px;" data-bind="attr: { href: mailto},text: email"></a><i class="fa fa-envelope"></i></p>
					
                </div><!--/contact -->

<!-- ko if: profile().length > 0-->
                <div class="profiles" data-bind="foreach: profile" style="margin-bottom: 15px;text-align:right;">

                    <p><a style="margin-right:3px;" data-bind="attr: { href: profilelink},text: profilename"></a><i data-bind="attr: {class: network}"></i></p>

                </div>
                <!--/profiles -->
<!-- /ko -->
                <div class="button no-display" id="nodisp">

                    <p><a class="btn no-radius btn-resume no-display" id="printi" href="javascript:void(0);" onClick="var printButton = document.getElementById('nodisp');printButton.style.visibility = 'hidden';window.print();printButton.style.visibility = 'visible';return false; "><i class="icon-print"></i> Print</a> 

                       

          
                    <!-- The JS below uses PDFSpot's converter to convert the current page to a PDF for download as a PDF, with all print stylesheets. So when you change the JSON, no need to change out the PDF! -->   
                        <a class="btn no-radius btn-resume no-display" href="javascript:void(location.href='http://www.pdfspot.com/html-to-pdf-converter.aspx?url=' + escape(location.href) + '&pdf_name=' + escape('') + '&pdf_orientation=portrait&pdf_page_size=A4&scripts_enabled=true' )"><i class="icon-download-alt"></i> Download</a>                         <!-- Button to trigger modal -->
<a href="#myModal" role="button" class="btn no-radius btn-resume" size="large" data-toggle="modal"><i class="icon-user"></i> About</a>
 
<!-- Modal -->
<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\xD7</button>
    <h3 id="myModalLabel">About this Project</h3>
  </div>
  <div class="modal-body">
    <p>This CV template was coded by <strong><a href="http://carlvlew.is">Carl V. Lewis</a></strong>, and is based on the <strong><a href="http://getbootstrap.com" target="_blank">Bootstrap 2.0</a></strong> framework, with responsive viewports and print-optimized CSS stylesheets added. It is also structured in line with the <strong><a href="http://jsonresume.org" target="_blank">JSON Resume</a></strong> schema, an open-source initiative to create a JSON standard for resumes. The  document is populated by a <strong><a href="json/resume.json" target="_blank">single JSON file</a></strong>, and all hyperlinks are set to "text-decoration: none" so that they appear the same in print as they do on screen, while still taking a user to a relevant URL.</p>
    <p>The entire project has been open-sourced <strong><a href="http://github.com/carlvlewis/cvStrap">here</a></strong> on Github for you to use, fork or contribute.</p>
    <br>
    <h6>C. 2015 Carl V. Lewis. MIT License.</h6>
    
  </div>
  <div class="modal-footer">
    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
  </div>
</div>  <!--<a class="btn no-radius btn-resume no-display" href="http://carlvlewis.s3.amazonaws.com/iVcard.vcf" class="btn"><i class="icon-user"></i> vCard</a>-->

                        <!--<a class="btn no-radius btn-resume no-display" href="javascript:void(location.href='http://www.pdfspot.com/html-to-pdf-converter.aspx?url=' + escape('http://<?php $val=explode("/",$_SERVER['REQUEST_URI']);echo $_SERVER['HTTP_HOST'].$val[1]; ?>/myCV.html')+'&pdf_name=' + escape('') + '&pdf_orientation=portrait&pdf_page_size=A4&scripts_enabled=true' )"><i class="icon-download-alt"></i> Download</a> 


          <!--<a class="btn no-radius btn-resume no-display" href="#"><i class="icon-list-alt"></i> vCard</a></p>
-->
                </div> <!--/button -->

                

			</div><!--/.well -->

        </div><!--/span-->

        

        <div class="span8">

          <div class="hero-unit">

            <p data-bind="text: summary"></p>

		  </div>

		  
<!-- ko if: education().length > 0-->
		  <div class="header">

			<h2>Education</h2>

<hr />

		  </div>


                    <div class="row-fluid" data-bind="foreach: education">

                    <div class="span6">

                        <i class="fa fa-university" style="float: left; margin-right:5px;">  </i>  <h4 data-bind="text: area"></h4>

                      <p><span data-bind="text: institution"></span><span data-bind="text: startend" style="float: right;"></span></p>
<!-- ko if: gpa > 0 -->
                      <p data-bind="if: gpa">GPA: <em><span data-bind="text: gpa"> </span></em></p>
<!-- /ko -->
                      <em><p data-bind="text: recommendations"></p></em>
<!-- ko if: edusummary().length > 0-->
                      <ul data-bind="foreach: edusummary"><li><span data-bind="text: edusum"></span></li></ul>
<!-- /ko -->
                      <!-- ko if: children().length > 0-->
                      <h5>Courses:</h5><ul data-bind="foreach: children"><li><span data-bind="text: courses"></span></li></ul>
                      
                    
<!-- /ko --> <!-- ko if: courses_taught().length > 0-->

                      <h5>Courses Taught:</h5><ul data-bind="foreach: courses_taught"><li><span data-bind="text: coutau"></span></li></ul>
<!-- /ko -->
<!-- ko if: courses_developed().length > 0-->					  
                      <h5>Courses Developed:</h5><ul data-bind="foreach: courses_developed"><li><span data-bind="text: coudev"></span></li></ul>
<!-- /ko -->					  
<!-- ko if: courses_percepted().length > 0-->
                      <h5>Course Preceptor:</h5><ul data-bind="foreach: courses_percepted"><li><span data-bind="text: couper"></span></li></ul>
<!-- /ko -->
                    </div><!--/span-->
                    <br>
                    </div>

<!-- /ko -->            
<!-- ko if: work().length > 0-->
                  <div class="header">

			<h2>Work Experience</h2>

			<hr />

		  </div>

                    <div class="row-fluid" data-bind="foreach: work">

                    <div class="span6">

                      <i class="fa fa-plus" style="float: left;margin:5px; padding-top:2px; padding-right:3px;"></i><h4 data-bind="text: company"></h4>

                      <p><span data-bind="text: position"></span><span data-bind="text: workstart" style="float: right;"></span></p>

                      <!-- ko if: highlights().length > 0--><ul data-bind="foreach: highlights"><li><span data-bind="text: highlight"></span></li></ul><!-- /ko --> 

                    </div><!--/span-->

                    </div>
<!-- /ko -->					
<!-- ko if: awards().length > 0-->
		  <div class="header">

			<h2>Awards</h2>

			<hr />

		  </div>

                    <div class="row-fluid" data-bind="foreach: awards">

                      <div class="span6">

                      <i class="fa fa-trophy" style="float: left; margin-right:5px"></i><h4 data-bind="text: title"></h4>

                      <p><span data-bind="text: awarder"></span><span data-bind="text: awardstart" style="float: right;"></span></p>

                      <!-- ko if: awardsummary !== '' --><ul><li><span data-bind="text: awardsummary"></span></li></ul><!-- /ko --> 

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->				
<!-- ko if: talks().length > 0-->
                  <div class="header">

			<h2>Talks, Presentations, Workshops</h2>

			<hr />

		  </div>

                    <div class="row-fluid" data-bind="foreach: talks">

                      <div class="span6">

                          <i class="fa fa-plus" style="float: left; margin-right:5px"></i><h4 data-bind="text: talk_title"></h4>

                      <p data-bind="text: talk_summary"></p> 

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->
<!-- ko if: publishers().length > 0-->                  
		  <div class="header">

			<h2>Publications</h2>

			<hr />

		  </div>

		    <div class="row-fluid" data-bind="foreach: publishers">

                      <div class="span6">

                          <i class="fa fa-plus" style="float: left;margin:5px;"></i><h4 data-bind="text: pub_name"></h4>

                          <p><span data-bind="text: publisher" style="width: 100px;"></span><span data-bind="text: reldate" style="width: 100px;float: right;"></span></p>

                          <a data-bind="attr: { href: pub_web}"><p data-bind="text: pub_web"></p></a>

                      <p data-bind="text: pub_summary"></p> 

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->					
<!-- ko if: skills().length > 0--> 
                  <div class="header">

			<h2>Skills</h2>

			<hr />

		  </div>

		    <div class="row-fluid" data-bind="foreach: skills">

                      <div class="span6">

                          <i class="fa fa-plus" style="float: left;margin:5px;"></i><h4 data-bind="text:skill_name"></h4>

                          <p><span data-bind="text:level"></span></p>

                          <!-- ko if: skill().length > 0--><ul data-bind="foreach: skill"><li><span data-bind="text: skill_key"></span></li></ul><!-- /ko --> 

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->  
<!-- ko if: prof().length > 0-->                    
                  <div class="header">

			<h2>Professional Affiliations</h2>

			<hr />

		  </div>

		  <div class="row-fluid" data-bind="foreach: prof">

                      <div class="span6">

                          <i class="fa fa-plus" style="float: left; margin-right:5px"></i><h4 data-bind="text: profname"></h4>

                          <p data-bind="text: proflevel"></p>

                          <!-- ko if: profkey().length > 0--> <ul data-bind="foreach: profkey"><li><span data-bind="text :keywordpro"></span></li></ul><!-- /ko -->

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->  
<!-- ko if: interest().length > 0-->
                  <div class="header">

			<h2>Interests</h2>

			<hr />

		  </div>

		   <div class="row-fluid" data-bind="foreach: interest">

                      <div class="span6">

                          <span data-bind="text: keyint"></span>

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->   
<!-- ko if: community().length > 0-->
                  <div class="header">

			<h2>Community and Academic Service</h2>

			<hr />

		  </div>

		 
                    <div class="row-fluid" data-bind="foreach: community">

                      <div class="span6">

                          <!-- ko if: commsumm().length > 0--><ul data-bind="foreach: commsumm"><li><span data-bind="text: commsummary"></span></li></ul><!-- /ko -->     

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->   					
<!-- ko if: projects().length > 0-->

                                   <div class="header">

			<h2>Projects</h2>

			<hr />

		  </div>

                    <div class="row-fluid" data-bind="foreach: projects">

                      <div class="span6">

                          <i class="fa fa-plus" style="float: left;margin:5px;"></i><h4 data-bind="text: projname"></h4>

                      <p data-bind="text: desc"></p>

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->                    
<!-- ko if: references().length > 0-->           
                 <div class="header">

			<h2>References</h2>

			<hr />

		  </div>


                    <div class="row-fluid" data-bind="foreach: references">

                      <div class="span6">

                          <i class="fa fa-plus" style="float: left;margin:5px;"></i><h4 data-bind="text: refname"></h4><blockquote>
<em><smaller><p data-bind="text: reff"></p></blockquote></em></smaller>
                          

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->

      <hr />
</div>
</div>
</div>

<footer><center>
       <p><i class="icon-home"></i><span data-bind="text: address"></span>,&nbsp;<span data-bind="text: location"></span>&nbsp;&nbsp;<i class="fa fa-phone"></i> <span data-bind="text: phone"></span>&nbsp;&nbsp;<i class="fa fa-globe"></i> <a data-bind="attr: { href: website}"><span data-bind="text: website"></span></a>&nbsp;&nbsp;<i class="fa fa-envelope"></i> <span data-bind="text: email"></span></p>
</center>  </div><div class="noPrint"><em><p><center>Click <a href="http://carlvlewis.github.io/cvStrap-jsonresume"><strong>here</strong></a> to read about how I built this CV. Data nerd? Click <strong><a href="json/resume.json"">here</a></strong> to view the JSON data that populated this document.</center></p></em></div>
      </footer>




    <!--Time for some JavaScript-->


    <script src="js/jquery.js"><\/script>

    <script src="js/bootstrap.min.js"><\/script>
    
    <script src="js/knockout-3.2.0.js"><\/script>

    <script src="js/myCV.js"><\/script>
        

  </body>

</html>
`,"json/resume.json":`{
  "basics": {
    "name": "Carl V. Lewis",
    "label": "Data Journalist, Mobile Developer, Digital Educator",
    "picture": "img/avatar.png",
    "email": "hello@carlvlew.is",
    "phone": "+1 (912) 816-7007",
    "website": "http://carlvlewis.net",
    "summary": "A post-platform journalist, web developer, design thinker, product manager, interaction designer, digital media educator and data visualization developer with more than 7 years of experience in data journalism, news graphics, newsroom interactive storytelling, curriculum design, digital publishing, homepage editing, product management, media entrepreneurship, digital strategy/social media management, mobile front-end design/development, interaction programming and Wordpress/Drupal content management development.",
    "location": {
      "address": "266 Washington Ave, D9 Brooklyn",
      "postalCode": "NY 11205",
      "city": "Brooklyn",
      "countryCode": "US",
      "region": "New York"
    },
    "profiles": [
      {
        "network": "twitter",
        "username": "@carlvlewis",
        "url": "http://twitter.com/carlvlewis"
      },
      {
        "network": "github",
        "username": "@carlvlewis",
        "url": "http://github.com/carlvlewis"
      },
      {
        "network": "linkedin",
        "username": "/in/carlvlewis",
        "url": "http://linkedin.com/in/carlvlewis"
      },
      {
        "network": "slideshare",
        "username": "@carlvlewis",
        "url": "http://slideshare.com/carlvlewis"
      }
    ]
  },
  "education": [
        {
      "institution": "Columbia University Graduate School of Journalism",
      "area": "M.S., Digital Media/Data Visualization, Honors.",
      "studyType": "Masters",
      "startDate": "Aug. 2011",
      "endDate": "May 2012",
      "summary": [
          "Specializations in data visualization, interactive design, audience engagement and consumer reporting.","Awarded multiple honors designations, including only honor's status in entire cohort for Data Journalism  and Journalism Business Models.","Elected as online editor and officer for Society of Professional Journalists chapter, the school's official student governing body. Develo[ed a new SPJ site from scratch using Bootstrap as a framework built on top of WordPress to make a custom theme.", "Grew SPJ digital audience reach among class from 150 per week to 1,482 unique impressions per week.",
          "Served as online editor for Society for Hispanic Journalists, building organization's website and leading initial marketing efforts.",
          "Masters thesis given highest honors."
      ],
      "recommendations": "(Recommendations provided from Susan E. McGregor, Ava Seave and Daniel Medina; Arlene Morgan, Sree Srenevasian and Rebecca Castillo may also be contacted as references)."
    },
    
    {
      "institution": "Mercer University",
      "area": "B.A. in Journalism, B.A. in Southern Studies, Honors.",
      "studyType": "Bachelor",
      "startDate": "Aug. 2007",
      "endDate": "May 2011",
      "gpa": "3.94",
      "summary": [
          "Graduated summa cum laude with a 3.94 GPA, University Honors, Presidential Service Fellowship and the annual Jimmy Carter Award for Community Outreach and Public Service","Named 'Most Outstanding Journalism Graduate' and 'Most Outstanding Southern Studies Graduate'."      ],
      "recommendations": "(Recommendations provided from Dr. Jay Black, Grant Blankenship and Josh Rogers; Dr. Sarah Gardner, Debbie Blankenship, Andrew Haeg, Dr. Tom Huber, Dr. David A. Davis, Dr. John Chalfa and Dean Larry Brumley may also be contacted for references).",
      "courses": [
        "Digital Media Storytelling (A)",
        "News Writing Basics (A)",
        "Journalism Ethics (A)",
        "Journalism Law (A)",
        "Southern Food (A)",
        "African-American History I, II (A)",
        "Media Studies (A)",
        "African-American Literature (A)",
        "Southern Journalists (A)",
        "Servant Leadership (A)",
        "Urban Revitalization: Practices and Theories (A)",
        "Applied Statistics (A)",
        "Data Journalism (A)",
        "Introduction to Computer Science (A)"
      ],
      "coursestaught": [
        "'UNV 101' -An introduction to life 'beyond the shadows of Plato's cave,' or an introduction for college freshman to the journey of their next four years. Taught course as a Peer Advisor in a pass/fail environment.",
        "'JMS 262 - Civic and Community Journalism' - After applying for and receiving a micro-grant from the Knight Foundation, I led Dr. Jay Black's Civic and Community Journalism course in the spring of 2008 to build an online student-produced guide to the City of Macon \u2013 a semester-long project in which I regularly provided feedback, scheduled one-on-one time with fellow peers who needed extra learning time and consulted with Dr. Black on the class' progress weekly to help determine student grades based on not just their own content, but their contribution and collaboration with the team."
      ],
      "coursesdeveloped": [
        "'SST 480: Schizoprenia, Relocation and Dislocation in the Minds of Southern Journalists'.","Assembled the curriculum and format for this independent study course, which analyzes the historical writings of prominent southern journalists. The course is now regularly included in the SST and JMS curriculum.","Dr. David A. Davis may be contacted as a reference."
      ],
      "coursesprecepted": [
        "'FYS 101: Composing the Self,' under the leadership of Dr. David A. Davis.",
        "'Southern Studies in the Classroom,' a summer-long course for high-school teachers funded by the National Endowment for the Humanities and held at Mercer University."
      ]
    },
    {
      "institution": "University of Oxford, St. Peter's College",
      "area": "St. Peter's College International Studies Course",
      "studyType": "Course",
      "startDate": "Aug. 2009",
      "endDate": "Jun. 2010",
      "summary": [
          "Earned all 'Alphas' during selective year-long course of study at Oxford's St. Peter's College for visiting students.-Hired as news editor for The Oxford Student newspaper during my second term, which I later parlayed into 'Online Editor' overseeing the successful implementation of a digital overhaul for the publication. Asked to stay on as Editor-in-Chief, but unfortunately had to fulfill requirements at my undergraduate institution and was unable to do so.",
          "Trained student editors, veteran and first-timers, on the basic components of the traditional industrialized American news writing formula.",
          "Assigned stories, laid out news pages, budgeted editorial content and reported dozens of own investigations.",
          "Formatted content for the web, including adding hyperlinks, photos and optimizing stories for social sharing."
      ],
      "recommendations": "(Recommendations provided from Winston Featherly-Bean and Tom Rowley; Penelope Francis-Warner and Dr. John Jackson may also be contacted as references.)",
      "courses": [
        "Celtic History",
        "Cold War Media Propaganda",
        "The Philosophy and Dogma of Nietzsche",
        "Western Media Impact in Developing Nations",
        "British History",
        "Educational Technology"
      ]
    }
  ],
  "work": [
    {
      "company": "Tow Center for Digital Journalism",
      "position": "Research Assistant",
      "website": "",
      "startDate": "Oct. 2014",
      "endDate": "present",
      "summary": "",
      "highlights": [
        "Assisting in Tow Center's research endeavors.",
        "Preparing own research for upcoming report on optimizing data visualization projects for mobile users."
      ]
    },
    {
      "company": "Vocativ",
      "position": "Data Journalism Consultant",
      "website": "",
      "startDate": "Aug. 2014",
      "endDate": "Sept. 2014",
      "summary": "",
      "highlights": [
        "Invited to serve as one-month, in-house training consultant for Vocativ.com's rapidly expanding Manhattan newsroom, primarily teaching reporters how to incorporate and visualize data in their stories in a way that sheds a new light on the story for users."
      ]
    },
    {
      "company": "Center for Collaborative Journalism at Mercer University",
      "position": "Adjunct instructor, faculty news organization advisor",
      "website": "",
      "startDate": "Jun. 2013",
      "endDate": "present",
      "summary": "Teach weeklong workshops on geospatial data, mobile development and JavaScript.",
      "highlights": [
        "Teach courses on JavaScript, HTML and CSS basics, mobile development best-practices, real-time reporting, data journalism and visual storytelling.",
        "Serve alongside faculty, journalists and media professionals as an instructor for annual Camp CCJ for digital media students at Center for Collaborative Journalism.",
        "Spoken on panels with editors and professors, including 'How is Journalism Different in the Digital Age?', 'Social Media for Journalists', 'Building a Brand as a Journalist' and 'Mobile App Development with Little-to-No Programming Experience.'",
        "Led lightning talks on topics including 'Making the Business of Digital Journalism Work', 'Audience and Metrics' and 'Wireframing, Prototyping and UX.'-Serve as advisor for student news organization, The Cluster, leading quarterly workshops and remotely helping fix problems as they may arise on mercercluster.com. Oversaw 2014 redesign of site."
      ]
    },
    {
      "company": "Borrow.ly",
      "position": "Co-Founder",
      "website": "http://staging.borrowly.com",
      "startDate": "March 2003",
      "endDate": "present",
      "summary": "",
      "highlights": [
        "Upon receiving a $5,000 exploratory grant from The Rockefeller Collaborative Fund in early 2014, my business partner and I set out to build the product I long believed could help shift decades of audience and revenue loss at daily newspapers from the once-lucrative classified advertising section, revenue which was swiftly poached by P2P exchanges such as Craigslist and eBay.",
        "Built  product using Ruby on Rails, and it received widespread acclaim and a loyal local audience in our initial target market in Fort Greene, Brooklyn.","Briefly named 'one of Silicon Alley's hottest civic-tech startups' by StartupBoost."
      ]
    },
    {
      "company": "Shuttl.es",
      "position": "Instructor, 'Basics of Modern Web Design'",
      "website": "",
      "startDate": "April 2014",
      "endDate": "July 2014",
      "summary": "",
      "highlights": [
        "Taught a 12-week micro-learning course via email and in person at the Brooklyn-based TinyLabs, NYC.-Instructed students ranging in age from as young as 15 to as old as 52.",
        "5 in-person classes, 20 micro-lessons digitally."
      ]
    },
    {
      "company": "Jacksonville Daily-Record",
      "position": "Newsroom Change Consultant",
      "website": "",
      "startDate": "Jan. 2013",
      "endDate": "Feb. 2014",
      "summary": "",
      "highlights": [
        "Developed device-agnostic stylesheet and more user-friendly editorial placement of content.",
        "Monetized digital presence with local display and inline ads.",
        "Presented legal, real estate and public notice data in interactive format.",
        "Implemented integrated print and digital CMS that uses Google Docs as intermediary between InCopy and Wordpress.",
        "Trained staffers/journalists on new CMS, mobile reporting, social media best practices."
      ]
    },
    {
      "company": "Savannah Morning News (Morning News Media)",
      "position": "Digital Media Manager, Online Editor, Social Media Editor",
      "website": "",
      "startDate": "Aug. 2012",
      "endDate": "Jan. 2014",
      "summary": "",
      "highlights": [
        "Worked as Digital Media Manager in Savannah following the death of my father to be closer to my mom.",
        "Oversaw content production, digital/social outreach and product development for savannahnow.com, dosavannah.com and other cross-platform company products, achieving a nearly 500 percent growth in social reach and a record 7 million monthly pageviews.",
        "Managed team of online producers/digital journalists; collaborated with traditional reporters and editors on optimizing print content for digital platforms; worked with marketing and sales departments to bridge the gap between editorial and sales in an ethical manner.",
        "Developed and executed growth strategies for company-wide social media platforms, including existing accounts on Facebook and Twitter and new accounts on Instagram, Vine, Tumblr and Pinterest to reach younger audiences,",
        "Increased weekly average social reach from 21,000 to an average of 375,000 by end date. Grew Facebook fans from approximately 8.5K to 24K.",
        "Introduced 'sponsored posts' on dosavannah.com, as well as 'sponsored tweets' using retweets from the handle @SMNsponsored.",
        "Increased Facebook following by more than 115 percent in less than a year. Started new Instagram account that gained 1,400 followers within 7 months.",
        "Monitored and responded to metrics using Adobe Omniture, Google Analytics, Chartbeat, Parse.ly, Sprout Social and Sparkwise.",
        "Introduced and trained staffers on new interactive forms of storytelling that allowed producers and reporters to visualize public data with little programming skills.",
        "Led native app development for iOS and Android platforms. Responsible for 19K app downloads.",
        "Developed HTML5/responsive content strategies and products, including the June 2013 launch of dosavannnah.com.",
        "Represented company on Morris Publishing Group's corporate-wide Social Media and Mobile Stategy task-forces",
        "Redesigned Savannah Morning News Mobile App, causing a threefold increase in active users in two weeks."
      ]
    },
    {
      "company": "DoSavannah.com (Morning News Media)",
      "position": "Product Manager, Digital Content Marketer, Front-End Developer",
      "website": "",
      "startDate": "March 2013",
      "endDate": "Nov. 2013",
      "summary": "",
      "highlights": [
        "Developed, designed and launched dosavannah.com and its associated native iOS and Android apps, in addition to my responsibilities as Digital Media Manager.",
        "Introduced 'Sponsored Posts,' a native advertising plan that garnered more than $30,000 in new sponsorship revenue its month-long first sales round.",
        "Created editorial workflow and trained staffers on using Drupal 7 as a CMS.",
        "Introduced 'The Big Calendar,' which quickly became Savannah's top-visited event guide."
      ]
    },
    {
      "company": "Exposition Magazine",
      "position": "Online Editor",
      "website": "",
      "startDate": "March 2010",
      "endDate": "Apr. 2012",
      "summary": "",
      "highlights": [
        "Developed website and online publishing system for current affairs magazine at Oxford University using WordPress backend.",
        "Oversaw online content and site production for expositionmagazine.com, including measuring and reporting site analytics, developing SEO strategies and retooling UX to fit the needs of print redesign.",
        "Managed digital advertising sales and placement with sponsors Pulse Printing and Oxford Castle.",
        "Temporarily maintained and managed site from abroad; wrote detailed site documentation for future maintenance."
      ]
    },
    {
      "company": "The Cluster & mercercluster.com",
      "position": "Director of Digital Media",
      "website": "",
      "startDate": "Nov. 2010",
      "endDate": "Jul. 2012",
      "summary": "",
      "highlights": [
        "Founded, developed and launched MercerCluster.com, the online edition of Mercer University's student newspaper, The Cluster.",
        "Created digital workflow, trained staff in content management, drafted detailed site documentation for future student editors.",
        "Grew Facebook \u2018likes\u2019 from around 30 to more than 900 in less than a month with integrated social media campaign, involving a grassroots contest and non-monetary incentives."
      ]
    },
    {
      "company": "The Oxford Student",
      "position": "News Editor, Online Editor",
      "website": "",
      "startDate": "Jan. 2009",
      "endDate": "June 2009",
      "summary": "",
      "highlights": [
        "Produced and edited entire 12-page news section of the University of Oxford\u2019s official student newspaper.- Managed team of 14 reporters and covered more than 40 stories individually.",
        "Redesigned newspaper website and developed digital workflow.",
        "Trained staff in content management system."
      ]
    },
    {
      "company": "The Telegraph & macon.com",
      "position": "Metro intern, weekend cops reporter",
      "website": "http://macon.com",
      "startDate": "May 2009",
      "endDate": "Dec. 2010",
      "summary": "",
      "highlights": [
        "Worked first as a news reporting intern, then as a weekend beat reporter at Georgia's third-largest daily newspaper.",
        "Covered general news assignments, as well as local/state politics, crime and education beats.",
        "Covered more than 110 deadline news stories as an undergraduate."
      ]
    }
  ],
  "awards": [
    {
      "title": "Excellence in Social Media",
      "date": "Aug. 2013",
      "awarder": "Morris Publishing Group",
      "summary": "Awarded Morris-wide 'Excellence in Social Media' out of all 48 Morris print and broadcast properties for strategic growth of Savannah Morning News & savannahnow.com's social media outreach."
    },
    {
      "title": "MJ Bear Fellowship, Honorable Mention.",
      "date": "June 2012",
      "awarder": "Online News Association",
      "summary": "Received honorable mention for highly-coveted MJ Bear Fellowship for a project I built for Savannah Morning News that sought to reinvent the classifieds ('SavSwap')." 
      },
      {
      "title": "Best Online News Project",
      "date": "June 2013",
      "awarder":"Georgia Press Association",
      "summary":"Led coverage of 187th St. Patrick's Day Parade in Festival in Savannah for savannahnow.com, taking home the award of 'Best Online News Project' in the Georgia Press Association's 2013 Better Newspapers Competition."
    },
    {
      "title": "Data Journalism Honors, Business of Journalism Honors.",
      "date": "May 2012",
      "awarder": "Columbia University",
      "summary": "Awarded one of two school-wide honors designations for both Data Journalism, Business of Journalism courses in 2012."
    },
    {
      "title": "Best Entertainment News Site",
      "date": "April 2014",
      "awarder": "Georgia Press Asssociation",
      "summary": "Led development of the mobile web and native app components of dosavannah.com, which took home the award of 'Best Entertainment News Site' in Georgia Press Association's 2014 Better Newspaper Competition."
    },
    {
      "title": "Best Interactive News Project",
      "date": "May 2013",
      "awarder": "Tow Center for Digital Journalism, 2011 Digital Media Hackathon",
      "summary": "Team-leader of winning project on lack of access to clean water in annual hackathon."
    },
    {
      "title": "Valerie B. Edmonds Student Research Award, 2010.",
      "date": "May 2010",
      "awarder": "Jack Tarver Library at Mercer University.",
      "summary": "Essay on Southern writer Thomas Nelson Payne's use of what I call 'literary blackface' to diminish and distort the African-American voice."
    },
    {
      "title": "Best College Newspaper Website",
      "date": "2012",
      "awarder": "Society of Collegiate Journalists",
      "summary": "MercerCluster.com, the site I built and implemented, took top honors at the state level, ousting longtime frontrunner, UGA's 'Red and Black', as well as 'The Emory Wheel'."
    },
    {
      "title": "Robert C. Byrd Honors Scholar,2007-2011",
      "date": "Aug. 2007",
      "awarder": "U.S. Dept. of Education, State Service Agency.",
      "summary": "Given one of only 50 federally-endowed scholarships in the nation for academic merit."
    },
    {
      "title": "Mercer Service Scholar Fellow, 2007-2011.",
      "date": "Aug. 2007-May 2011",
      "awarder": "Mercer University, Office of Student Life, 2007-2011.",
      "summary": "Chosen as one of five Mercer students to represent the University at alumni and special guest events, taking special Service Scholar courses and tackling local issues."
    }
  ],
  "publications": [
    {
      "name": "Transcending the 'Editorial Thunder': Atlanta's Newspaper Coverage of the 1960 Student Lunch-Counter Sit-ins.",
      "publisher": "University of Mississippi Press",
      "releaseDate": "2011",
      "website": "bit.ly/atl-civil-rights",
      "summary": "Later invited to present findings at 2011 'Southern Writers, Southern Writing' conference in Oxford, Mississippi, the field's pre-eminent research conference."
    },
    {
      "name": "The Newspaper that Fell From its Ivory Tower",
      "publisher": "Columbia Journalism School",
      "releaseDate": "May 2012",
      "website": "bit.ly/philly_fall",
      "summary": "Approved with highest commendation by thesis committee of Columbia Journalism School. -Overseen by Arlene Morgan, dean of Pulitzer Prizes."
    }
  ],
  "professional_affiliations": [
    {
      "name": "Organizations/Institutions",
      "level": "",
      "keywords": [
        "NICAR (National Institute for Computer Assisted Reporting)",
        "Online News Association.",
        "Open Data NYC.",
        "Institute for Southern Studies at Mercer University",
        "Hacks/Hackers NYC.",
        "TedX Savannah.",
        "Georgia Press Association.",
        "The Creative Coast",
        "Center for Collaborative Journalism, Mercer University",
        "Knight Labs at Northwestern University",
        "BetaNYC",
        "CSV Soundsystem",
        "Columbia Entrepreneurship Society",
        "Society for News Design",
        "NYC d3.js Meetup Organizer"
      ]
    }
  ],
  "Talks_Presentations_Workshops": [
      {
        "title": "Big Data, Big Bucks: The Business of Data Parsing for Predictive Analytics.",
        "date": "",
        "awarder": "",
        "summary": "Talk presented at TedX Savannah on the use of browsing history for ad retargeting, personalization and prediction, 2013. Available on SlideShare."
      },
      {
        "title": "Data Visualization in the Newsroom.",
        "date": "",
        "awarder": "",
        "summary": "Two-day workshop tailored to and led at 7 different newsrooms owned by Morris Publishing Group, including Amarillo Globe, Topeka Capital Journal, Florida Times-Union, Athens Banner-Herald and Augusta Chronicle. Available on SlideShare."
      },
      {
        "title": "Data Journalism 101.",
        "date": "",
        "awarder": "",
        "summary": "Talk given to 2014 Camp CCJ retreat introducing the concepts of data journalism to incoming freshman interested in media studies. Available on SlideShare."
      },
      {
        "title": "Visual Storytelling Using Social Media.",
        "date": "",
        "awarder": "",
        "summary": "Lecture given at Digital Media CCJ Retreat 2013 on using visual-centric social networks such as Instagram, Vine and Pinterest both to report the news and engage new audiences with visually-appealing content. Available on Slideshare."
      },
      {
        "title": "The Skills of the Post-Platform Journalist.",
        "date": "",
        "awarder": "",
        "summary": "Lightning talk at Digital Media CCJ Retreat 2014 proposing the term 'post-platform journalist' among journalists, emphasizing the message above all else and the need to stay abreast on communicating via all platforms and mediums in current industry landscape."
      },
      {
        "title": "Why Cities Matter, and What We Can Do To Rebuild Them.",
        "date": "",
        "awarder": "",
        "summary": "Presentation delivered at Mercer University 2009 Freshman Class Orientation on the importance of community involvement, urbanism and socially-responsible revitalization."
      }
  ],
  "skills": [
    {
      "name": "Front-End Development",
      "level": "Advanced",
      "keywords": [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "Markdown",
        "LaTeX",
        "WordPress/Drupal development",
        "Bootstrap, Foundation, basic MVCs",
        "Angular.js (intermediate)"
        ]
       },
    {   "name": "Back-End Development",
	    "level": "Proficient", 
        "keywords": [
         "Python",
         "Django",
         "PHP",
          "Ruby on Rails"          ]
          },
          
        {
	        "name": "Data Analysis/Visualization", 
	        "level": "Proficient-Advanced", 
	        "keywords": [
         "iPython Notebook",
         "Matplotlib",
         "d3.js",
        "Geospatial/Mapping -- ArcGIS, CartoDB API, Google Maps API V3, QGis, geoJSON, Leaflet.js, Mapbox.",
       
        "Resuable d3.js charting libraries (charts.js, d3plus.org)",
        "Microsoft Excel/Google Sheets",
        "Hadoop,, MongoDB, MySQL",
        "Data Scraping: R, Python, Kimono, Beautiful Soup."
      ]
    },
        {   "name": "Digital Media",
	    "level": "Proficient", 
        "keywords": [
         
        "Digital Analytics Dashboards (GA, Chartbeat, Sparkwise, Parsely, Mixpanel, Tableau).",
          "Digital Media Business Models",
            "Hacking the news",
            "iPhoneography/mobile reporting",
            "Multimedia/real-time reporting.",
            "Interactive storytelling.",
            "MapBox Studio-Open Street Maps",
            "News metrics and analytics",
            "Content marketing for newsrooms",
            "Digital audience acquisition and retention strategies"      ]
    }
      ],
  "interests": [
    {
      "keywords": [
        "Machine learning, predictive analytics, newsroom collaboration, future news business models, display of multivariate datasets on mobile devices, journalism education, data visualization, information design, digital security/source protection, d3.js, color psychology."
      ]
    }
  ],
  "community_and_academic_service": [
    {
      "summary": [
        "'The Basics: Committee Chair", "Led College Hill Alliance (Knight Foundation) task-force on ways to rebrand negative perceptions of Macon, Ga.'s urban core and highlight the benefits of intown and downtown living.","High School Web Development Tutor, Savannah-Area Junior League."
      ]
    }
  ],
  "references": [
    {
      "name": "Janay Kingsberry, Digital Journalist, Savannah Morning News (former employee):",
      "reference": "For almost a year-and-a-half, I had the rewarding opportunity to work under Carl\u2019s leadership during his time as Digital Media Manager and Online Editor for the Savannah Morning News and savannahnow.com.During his tenure, Carl reinvigorated my journalistic efforts as an online content producer with hands-on web training, valuable expertise and knowledge of current media trends and exemplary practices for enhancing storytelling and audience engagement.He is a fierce team leader, a thorough communicator and an exceptional motivator, often instilling confidence in me when I didn\u2019t think I could accomplish advanced digital tasks on my own. His strengths as an instructor helped me to master web and mobile app development, data visualization and other interactive tools to produce more effective story packages and creative content.Carl also lobbied for opportunities that would allow his team members to gain professional development and greater exposure in the journalism industry. Most notably, in October 2013, I traveled with him to the Online News Association conference in Atlanta where we joined highly engaged digital professionals to discuss tools and techniques advancing the value of news media. It was my first time networking with leading digital journalists from around the country.Carl\u2019s time at the Savannah Morning News tremendously altered the newsroom\u2019s collective approach to digital practices. Even after his employment, he still readily and generously offers consultation, advice and support in any of our company\u2019s endeavors. We continue to value his passionate work ethics and eagerness to teach, and our team is significantly better because of his contributions."
    },
    {
      "name": "Susan E. McGregor, Assistant Director, Tow Center for Digital Journalism at Columbia University (former professor, current supervisor):",
      "reference": "During the spring of 2012, I was fortunate to have Carl as a student in my class on Data Joumalism and Information Visualization at Columbia Journalism School. Throughout the semester, Carl proved to be a bright, dedicated student and valuable team partner whose enthusiasm, insight, and considerable skills enhanced both classroom discussions and his individual and group projects. Unlike most of his classmates, Carl arrived in my class with a fair amount of experience in programming and web development, having created content management systems for small websites for several years. Though this meant that Carl was already familiar with many of the concepts we discussed in class - especially during our programming labs - he engaged fully with all of the lessons and class discussions, using his existing skills as a springboard to take given assignments above and beyond what was required, rather than using them as a crutch to skate through the material. This was evident most distinctly towards the end of the semester, when, having had to miss some weeks of school due to very significant personal loss, Carl not only made up his missed assignments but went beyond a simple blog response and executed his final critiques with a level of rigor and detail that would be welcome in any professional circle. He also redoubled his contributions to his group\u2019s final project, which was one of the class\u2019s most sophisticated and successful.Carl's unique critical, academic and personal achievement led me to award him the only honor's designation among the 15 students in my class \u2013 a recognition that he richly deserves. He is a person whom I would gladly welcome as a newsroom colleague myself, and I think any organization that has the opportunity to work with him will quickly feel the same."
    },
    {
      "name": "Jonathan Bennett, Web Development Manager, HealthGrades.com:",
      "reference": "Carl is a terrific digital mind. He has proven his fluency in several critical web development languages - HTML5, CSS, Javascript and PHP - and he uses those skills to craft engaging, intuitive digital projects. Better still, Carl is fully capable of disseminating his knowledge to his team and coworkers. He is no closet-and-dark-room developer; he can lead a team from concept to finished project. And like any good journalist, he's detail oriented and deadline driven."
    },
    {
      "name": "Ava Seave, Professor, Columbia Business School. Principal, Quantum Media:",
      "reference": "Carl was a terrific and accomplished participant in the class, 'Making the Business of Journalism Work.' He was super dependable in discussions, always participating and frequently giving an interesting twist. All of his writing was excellent, having practically perfect papers each time. At the end of the semester, Carl had a thorough and sophisticated understanding of the principles of the class. He will be an excellent manager and strategist in any kind of media business \u2013 or company \u2013 that he participates in."
    },
    {
      "name": "Stacy Jennings, Director of Marketing, Savannah Morning News (joint former supervisor):",
      "reference": "Working with Carl is pure joy. He's on top of his digital game no doubt, but he brings his special brand of humor and wit to bear on the marketing and branding department. Carl will thrive in an entrepreneurial environment, wearing multiple hats. He's enthusiastic about 'big data' and tackling complex problems. He's as comfortable working with a team as he is contributing to projects from his own corner of the world. If you're looking for someone who brings a fresh outlook to his work, who is constantly evolving, and who is passionate about building a quality digital experience, look no further than Carl V. Lewis."
    },
    {
      "name": "Josh Rogers, Director, Newtown Macon:",
      "reference": "While Carl was a student at Mercer University, I had the pleasure of working with him on many projects aimed at Macon's revitalization. In general, Mercer University recruits, nurtures and graduates people who are interested in making positive changes in their communities. Carl exemplified this trait at Mercer, spending time in and out of the classroom improving Macon. I cannot imagine any non-profit in Macon would be as successful without the support of Mercer and Mercer students. In particular, I want to recommend Carl's work on CollegeTownMacon.com. Although tens of thousands of college students attend school in Macon, it has been difficult to connect these students with businesses and activities in the community. We want students to see Macon as their college experience, and not just their specific campus. Carl led a 200-level class in Civic and Community Journalism to build a website to provide an online directory for local experiences for College students to solve this problem. The entire course was built around the production of this website, making Carl largely responsible for the syllabus, including organizing and assigning tasks and research, providing instruction and training for technical, interview and writing skills, managing work flow, editing content and ensuring the timely completion of tasks. Carl's management skills in this course brought together two of his best skills: teaching and project management. By the end of the course, Carl's class delivered a functional website that led a cultural shift among college students in Macon that has had a long-term impact in Macon with more students involved in the community and driving economic development. Carl taught students new skills and then helped those students apply those skills to solve real world problems and have a positive impact in the community. That's an accomplishment that many seasoned instructors struggle to achieve."
    },
    {
      "name": "Grant Blankenship, Multimedia Journalist, Georgia Public Broadcasting:",
      "reference": "I've known Carl since he was arguably the brightest student in his university journalism program. Since then he has gone on to be the in house innovator everywhere he has been. Carl not only understands where digital journalism needs to be today, he is also thinking about where it needs to go next and how he can help get it there. Every newsroom needs a Carl."
    },
    {
      "name": "Elizabeth Bibb, M.Sc. Candidate at Medill School of Journalism, Integrated Marketing and Communications:",
      "reference": "During his senior year of college, Carl V. helped me make a long-held dream come true by almost single-handedly conceiving, building and launching the website for The Cluster. Carl V. and I started the conversation about the website in class, and I immediately knew that I had finally found someone who had the skills and drive to make my goal of bringing the newspaper online a reality. Within a month of our initial conversation, Carl had built an easy to use platform, based on Wordpress, for the website. Of our staff of 10 editors, few had experience using Wordpress, and Carl was able to quickly train the editors and myself on posting to and updating the website. He also wrote up documentation for the editors to reference in case they needed help, which allowed them and Carl to use their time more efficiently. The website launched in late February 2011, too late for entry into the Georgia College Press Association awards, but the website that Carl built won 1st place in the 'Best Website' category the following year. Three years later, the website is still running smoothly, which is largely thanks to the extensive manual that Carl developed and left with my successor. Thanks to his effort, The Cluster is now available online and on a mobile app. Carl is able to patiently and efficiently teach new skills to others, and his passion for his work shows through."
    },
    {
      "name": "Amy Brock, Social Media Manager, Visit Savannah:",
      "reference": "I was privileged to work with Carl on several collaborative social media projects during his time with the Savannah Morning News. His innovative ideas and technical skills played an integral role in how information was communicated at key events in Savannah for visitors such as the 189th St. Patrick's Day Parade and Festival. Carl developed digital systems to establish a central calendar and revamped website and smartphone app for DoSavannah that put the Savannah Morning News on the map as a trusted resource for mainstream and alt events in the area that appealed to locals and visitors. Carl's ability to complete projects under tight deadlines and keep a positive attitude made him an enjoyable partner to work with and I enjoyed collaborating on special projects and promotions with him!"
    },
    {
      "name": "Winston Featherly-Bean, Project Manager, Locus Analytics:",
      "reference": "Carl set the bar for news reporting at the Oxford Student, where I had the good fortune of working with him as an editor. He was the model of a dedicated, tenacious reporter, bringing intelligence and a craftsman\u2019s passion to every story. Carl innovated too, pitching and executing a successful redesign of the paper\u2019s website. And working with him was a joy on a personal level \u2013 he made quite a splash in our stolid British student newsroom. We often held up Carl\u2019s work as an exemplar after he left Oxford. I am sure he will inspire future colleagues too."
    }
  ],
  "projects": [
    {
      "title": "Interactive: Savannah-Chatham Restaurant Inspection Database",
      "description": "Worked with the Chatham County Health Department, which serves a population of more than 420,000 residents, to integrate county-wide restaurant inspection scores into an XML feed that populates an interactive map produced with CartoDB + Leaflet.js that includes filterable, color-coded markers for each score, allowing users to drill down geographically or filter to see the worst scores."
    },
    {
      "title": "The 12 Percent: How People in the Bronx are Coping With the Unemployment Crisis",
      "description": "Led design, production, project management, narrative and presentation of class-wide project on the unemployment crisis and its effects on the Bronx for The Bronx Ink."
    },
    {
      "title": "SavannahNow St. Patrick's Day 2013 Mobile App",
      "description": "Managed all aspects of project development for Savannah Morning News' mobile app for the 137th Annual St. Patrick's Day Parade and Festival, the second-largest annual St. Patrick's gathering the nation. Success of app, reaching nearly 10,000 downloads, drove savannahnow.com to reach record unique visitors and pageviews."
    },
    {
      "title": "Storm Guide by savannahnow.com and Georgia Power",
      "description": "For the 2013 hurricane season, I built a native iOS and Android app with an accompanying HTML5 mobile site to tie in with the print edition of our annual \u201CHurricane Guide\uFFFD? sponsored by Georgia Power. Sponsorship netted $30,000 in new revenue for company."
    },
    {
      "title": "Interactive: Who are the biggest polluters in Georgia \u2013 and why?",
      "description": "Worked alongside SMN environmental reporter Mary Landers to distill EPA data into meaningful metrics, using the resulting benchmarks to produce an interactive bubble map, charts and table of the states's worst offenders."
    },
    {
      "title": "Interactive: Chatham County Commission Payments Vary Widely. But why?",
      "description": "Worked alongside SMN county government reporter Eric Curl to take county spending data and break down the logical gaps and holes, which later resulted in a three-part investigative series on the county's inaccurate budgeting habits."
    }
  ]
}
`,"json/schema.json":`{
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "Resume Schema",
	"type": "object",
	"additionalProperties": false,
	"properties": {
		"basics": {
			"type": "object",
			"additionalProperties": false,
			"properties": {
				"name": {
					"type": "string"
				},
				"label": {
					"type": "string",
					"description": "e.g. Web Developer"
				},
				"picture": {
					"type": "string",
					"description": "URL (as per RFC 3986) to a picture in JPEG or PNG format"
				},
				"email": {
					"type": "string",
					"description": "e.g. thomas@gmail.com",
					"format": "email"
				},
				"phone": {
					"type": "string",
					"description": "Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923"
				},
				"website": {
					"type": "string",
					"description": "URL (as per RFC 3986) to your website, e.g. personal homepage",
					"format": "uri"
				},
				"summary": {
					"type": "string",
					"description": "Write a short 2-3 sentence biography about yourself"
				},
				"location": {
					"type": "object",
					"additionalProperties": false,
					"properties": {
						"address": {
							"type": "string",
							"description": "To add multiple address lines, use \\n. For example, 1234 Gl\xFCcklichkeit Stra\xDFe\\nHinterhaus 5. Etage li."
						},
						"postalCode": {
							"type": "string"
						},
						"city": {
							"type": "string"
						},
						"countryCode": {
							"type": "string",
							"description": "code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN"
						},
						"region": {
							"type": "string",
							"description": "The general region where you live. Can be a US state, or a province, for instance."
						}
					}
				},
				"profiles": {
					"type": "array",
					"description": "Specify any number of social networks that you participate in",
					"additionalItems": false,
					"items": {
						"type": "object",
						"additionalProperties": false,
						"properties": {
							"network": {
								"type": "string",
								"description": "e.g. Facebook or Twitter"
							},
							"username": {
								"type": "string",
								"description": "e.g. neutralthoughts"
							},
							"url": {
								"type": "string",
								"description": "e.g. http://twitter.com/neutralthoughts"
							}
						}
					}
				}
			}
		},
                "education": {
			"type": "array",
			"additionalItems": true,
			"items": {
		  	"type": "object",
		  	"additionalProperties": true,
			"properties": {
				  	"institution": {
				  		"type": "string",
				  		"description": "e.g. Massachusetts Institute of Technology"
				  	},
				  	"area": {
				  		"type": "string",
				  		"description": "e.g. Arts"
				  	},
				  	"studyType": {
				  		"type": "string",
				  		"description": "e.g. Bachelor"
				  	},
				  	"startDate": {
				  		"type": "string",
			  			"description": "e.g. 2014-06-29",
			  			"format": "date"
				  	},
				  	"endDate": {
				  		"type": "string",
			  			"description": "e.g. 2012-06-29",
			  			"format": "date"
				  	},
				  	"gpa": {
				  		"type": "string",
				  		"description": "grade point average, e.g. 3.67/4.0"
				  	},
                                        "recommendations": {
				  		"type": "string",
				  		"description": "grade point average, e.g. 3.67/4.0"
				  	},
                                        "summary": {
				  		"type": "array",
				  		"description": "List notable courses/subjects",
				  		"additionalItems": false,
				  		"items": {
				  			"type": "string",
				  			"description": "e.g. H1302 - Introduction to American history"
				  		}
				  	},
				  	"courses": {
				  		"type": "array",
				  		"description": "List notable courses/subjects",
				  		"additionalItems": false,
				  		"items": {
				  			"type": "string",
				  			"description": "e.g. H1302 - Introduction to American history"
				  		}
				  	},
                                        "coursestaught": {
				  		"type": "array",
				  		"description": "List notable courses/subjects",
				  		"additionalItems": false,
				  		"items": {
				  			"type": "string",
				  			"description": "e.g. H1302 - Introduction to American history"
				  		}
				  	},
                                        "coursesdeveloped": {
				  		"type": "array",
				  		"description": "List notable courses/subjects",
				  		"additionalItems": false,
				  		"items": {
				  			"type": "string",
				  			"description": "e.g. H1302 - Introduction to American history"
				  		}
				  	},
                                        "coursesprecepted": {
				  		"type": "array",
				  		"description": "List notable courses/subjects",
				  		"additionalItems": false,
				  		"items": {
				  			"type": "string",
				  			"description": "e.g. H1302 - Introduction to American history"
				  		}
				  	}
			  	}


			}
		},
		"work": {
			"type": "array",
			"additionalItems": false,
			"items": {
		  	"type": "object",
		  	"additionalProperties": false,
			"properties": {
			  	"company": {
			  		"type": "string",
			  		"description": "e.g. Facebook"
			  	},
			  	"position": {
			  		"type": "string",
			  		"description": "e.g. Software Engineer"
			  	},
			  	"website": {
			  		"type": "string",
			  		"description": "e.g. http://facebook.com",
			  		"format": "uri"
			  	},
			  	"startDate": {
			  		"type": "string",
			  		"description": "resume.json uses the ISO 8601 date standard e.g. 2014-06-29",
			  		"format": "date"
			  	},
			  	"endDate": {
			  		"type": "string",
			  		"description": "e.g. 2012-06-29",
			  		"format": "date"
			  	},
			  	"summary": {
			  		"type": "string",
			  		"description": "Give an overview of your responsibilities at the company"
			  	},
			  	"highlights": {
			  		"type": "array",
			  		"description": "Specify multiple accomplishments",
			  		"additionalItems": false,
			  		"items": {
			  			"type": "string",
			  			"description": "e.g. Increased profits by 20% from 2011-2012 through viral advertising"
			  		}
			  	}
			  }

			}
		},
		"awards": {
			"type": "array",
			"description": "Specify any awards you have received throughout your professional career",
			"additionalItems": false,
			"items": {
			  	"type": "object",
			  	"additionalProperties": false,
				"properties": {
				  	"title": {
				  		"type": "string",
				  		"description": "e.g. One of the 100 greatest minds of the century"
				  	},
				  	"date": {
				  		"type": "string",
				  		"description": "e.g. 1989-06-12",
				  		"format": "date"
				  	},
				  	"awarder": {
				  		"type": "string",
				  		"description": "e.g. Time Magazine"
				  	},
				  	"summary": {
				  		"type": "string",
				  		"description": "e.g. Received for my work with Quantum Physics"
				  	}
				}
			}
		},
                "Talks_Presentations_Workshops": {
			"type": "array",
			"description": "Specify any awards you have received throughout your professional career",
			"additionalItems": false,
			"items": {
			  	"type": "object",
			  	"additionalProperties": false,
				"properties": {
				  	"title": {
				  		"type": "string",
				  		"description": "e.g. One of the 100 greatest minds of the century"
				  	},
				  	"date": {
				  		"type": "string",
				  		"description": "e.g. 1989-06-12",
				  		"format": "date"
				  	},
				  	"awarder": {
				  		"type": "string",
				  		"description": "e.g. Time Magazine"
				  	},
				  	"summary": {
				  		"type": "string",
				  		"description": "e.g. Received for my work with Quantum Physics"
				  	}
				}
			}
		},
		"publications": {
			"type": "array",
			"description": "Specify your publications through your career",
			"additionalItems": false,
			"items": {
		  		"type": "object",
		  		"additionalProperties": false,
				"properties": {
				  	"name": {
				  		"type": "string",
				  		"description": "e.g. The World Wide Web"
				  	},
				  	"publisher": {
				  		"type": "string",
				  		"description": "e.g. IEEE, Computer Magazine"
				  	},
				  	"releaseDate": {
				  		"type": "string",
				  		"description": "e.g. 1990-08-01"
				  	},
				  	"website": {
				  		"type": "string",
				  		"description": "e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html"
				  	},
				  	"summary": {
				  		"type": "string",
				  		"description": "Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML."
				  	}
			  	}
			}
		},
                
		"skills": {
			"type": "array",
			"description": "List out your professional skill-set",
			"additionalItems": false,
			"items": {
			  	"type": "object",
			  	"additionalProperties": false,
				"properties": {
				  	"name": {
				  		"type": "string",
				  		"description": "e.g. Web Development"
				  	},
				  	"level": {
				  		"type": "string",
				  		"description": "e.g. Master"
				  	},
				  	"keywords": {
				  		"type": "array",
				  		"description": "List some keywords pertaining to this skill",
				  		"additionalItems": false,
				  		"items": {
				  			"type": "string",
				  			"description": "e.g. HTML"
				  		}
				  	}
				}
			}
		},
                "professional_affiliations": {
			"type": "array",
			"description": "List out your professional skill-set",
			"additionalItems": false,
			"items": {
			  	"type": "object",
			  	"additionalProperties": false,
				"properties": {
				  	"name": {
				  		"type": "string",
				  		"description": "e.g. Web Development"
				  	},
				  	"level": {
				  		"type": "string",
				  		"description": "e.g. Master"
				  	},
				  	"keywords": {
				  		"type": "array",
				  		"description": "List some keywords pertaining to this skill",
				  		"additionalItems": false,
				  		"items": {
				  			"type": "string",
				  			"description": "e.g. HTML"
				  		}
				  	}
				}
			}
		},
		"interests": {
			"type": "array",
			"additionalItems": false,
			"items": {
		  	"type": "object",
		  	"additionalProperties": false,
			"properties": {
			  	"name": {
			  		"type": "string",
			  		"description": "e.g. Philosophy"
			  	},
			  	"keywords": {
			  		"type": "array",
			  		"additionalItems": false,
			  		"items": {
			  			"type": "string",
			  			"description": "e.g. Friedrich Nietzsche"
			  		}
			  	}
			  }

			}
		},
                "community_and_academic_service": {
			"type": "array",
			"additionalItems": false,
			"items": {
		  	"type": "object",
		  	"additionalProperties": false,
			"properties": {
			  	"summary": {
			  		"type": "array",
			  		"additionalItems": false,
			  		"items": {
			  			"type": "string",
			  			"description": "e.g. Friedrich Nietzsche"
			  		}
			  	}
			  }

			}
		},        
		"references": {
			"type": "array",
			"description": "List references you have received",
			"additionalItems": false,
			"items": {
		  	"type": "object",
		  	"additionalProperties": false,
			"properties": {
			  	"name": {
			  		"type": "string",
			  		"description": "e.g. Timothy Cook"
			  	},
			  	"reference": {
			  		"type": "string",
			  		"description": "e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing."
			  	}
			  }

			}
		},
                "projects": {
			"type": "array",
			"description": "List any other languages you speak",
			"additionalItems": false,
			"items": {
				"type": "object",
				"additionalProperties": false,
				"properties": {
					"title": {
						"type": "string",
						"description": "e.g. English, Spanish"
					},
					"description": {
						"type": "string",
						"description": "e.g. Fluent, Beginner"
					}
				}
			}
		}
	}
}
`,"package.json":`{
  "name": "jsonresume-theme-cvstrap",
  "version": "0.0.5",
  "description": "cvStrap is a classic, clean, professional theme for the JSONResume schema with print-ready and responsive stylesheets, based on Bootstrap 2.0.",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/carlvlewis/cvStrap.git"
  },
  "author": "Carl V. Lewis <hello@carlvlew.is> (https://github.com/carlvlewis)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/carlvlewis/cvStrap/issues"
  },
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  },
  "homepage": "https://github.com/carlvlewis/cvStrap",
  "devDependencies": {},
  "keywords": [
    "jsonresume"
  ]
}
`,"resume.template":`<!DOCTYPE html>
<!--Copyright (c) 2015 Carl V. Lewis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.-->


<html lang="en">

  <head>

    <meta charset="utf-8">

    <title>Carl V. Lewis - Curriculum Vitae</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta name="format-detection" content="telephone=no">
	
    <meta name="description" content="Classic Bootstrap, Print-Ready, Minimalist CV/Resume">

    <meta name="author" content="Carl V. Lewis">


    <!-- Styles -->

    <link href="css/bootstrap.min.css" rel="stylesheet">

    <link href="css/shared.css" rel="stylesheet">
      <link href="css/screen.css" rel="stylesheet" media="screen">
        <link href="css/print.css" rel="stylesheet" media="print">

<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->

    <!--[if lt IE 9]>

      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"><\/script>

    <![endif]-->

    <!-- Le fav and touch icons -->

    <link rel="shortcut icon" href="img/favicon.ico">


  </head>


   <div class="container">

      <div class="row">

        <div class="span4">

			<div class="well">

                <div class="avatar">

                    <img width="300" height="400" alt="image" data-bind="attr:{src: imagePath}" />

                </div><!--/avatar -->

                <br class="clearfix" />

                

                <div class="bio">

                    <h1 data-bind="text: name"></h1>

                    <em><p data-bind="text: label"/></p></em>

                </div><!--/bio -->

                <br class="clearfix" />

                

                <div class="contact">

                    <p><span data-bind="text: address"></span>  <i class="fa fa-home"></i></p>

					<p><span data-bind="text: location"></span>  <i class="fa fa-map-marker"></i></p>
					<!--This next span class forces Chrome to disable phone number hyperlinking-->
					<p><span class="googlevoice" data-bind="text: phone"></span>  <i class="fa fa-mobile"></i></p>

					<p><a data-bind="attr: { href: website}"><span data-bind="text: website"></span></a>  <i class="fa fa-globe"></i></p>
                                        
                                        <p><a style="margin-right:3px;" data-bind="attr: { href: mailto},text: email"></a><i class="fa fa-envelope"></i></p>
					
                </div><!--/contact -->

<!-- ko if: profile().length > 0-->
                <div class="profiles" data-bind="foreach: profile" style="margin-bottom: 15px;text-align:right;">

                    <p><a style="margin-right:3px;" data-bind="attr: { href: profilelink},text: profilename"></a><i data-bind="attr: {class: network}"></i></p>

                </div>
                <!--/profiles -->
<!-- /ko -->
               
                

			</div><!--/.well -->

        </div><!--/span-->

        

        <div class="span8">

          <div class="hero-unit">

            <p data-bind="text: summary"></p>

		  </div>

		  
<!-- ko if: education().length > 0-->
		  <div class="header">

			<h2>Education</h2>

<hr />

		  </div>


                    <div class="row-fluid" data-bind="foreach: education">

                    <div class="span6">

                        <i class="fa fa-university" style="float: left; margin-right:5px;">  </i>  <h4 data-bind="text: area"></h4>

                      <p><span data-bind="text: institution"></span><span data-bind="text: startend" style="float: right;"></span></p>
<!-- ko if: gpa > 0 -->
                      <p data-bind="if: gpa">GPA: <em><span data-bind="text: gpa"> </span></em></p>
<!-- /ko -->
                      <em><p data-bind="text: recommendations"></p></em>
<!-- ko if: edusummary().length > 0-->
                      <ul data-bind="foreach: edusummary"><li><span data-bind="text: edusum"></span></li></ul>
<!-- /ko -->
                      <!-- ko if: children().length > 0-->
                      <h5>Courses:</h5><ul data-bind="foreach: children"><li><span data-bind="text: courses"></span></li></ul>
                      
                    
<!-- /ko --> <!-- ko if: courses_taught().length > 0-->

                      <h5>Courses Taught:</h5><ul data-bind="foreach: courses_taught"><li><span data-bind="text: coutau"></span></li></ul>
<!-- /ko -->
<!-- ko if: courses_developed().length > 0-->					  
                      <h5>Courses Developed:</h5><ul data-bind="foreach: courses_developed"><li><span data-bind="text: coudev"></span></li></ul>
<!-- /ko -->					  
<!-- ko if: courses_percepted().length > 0-->
                      <h5>Course Preceptor:</h5><ul data-bind="foreach: courses_percepted"><li><span data-bind="text: couper"></span></li></ul>
<!-- /ko -->
                    </div><!--/span-->
                    <br>
                    </div>

<!-- /ko -->            
<!-- ko if: work().length > 0-->
                  <div class="header">

			<h2>Work Experience</h2>

			<hr />

		  </div>

                    <div class="row-fluid" data-bind="foreach: work">

                    <div class="span6">

                      <i class="fa fa-plus" style="float: left;margin:5px; padding-top:2px; padding-right:3px;"></i><h4 data-bind="text: company"></h4>

                      <p><span data-bind="text: position"></span><span data-bind="text: workstart" style="float: right;"></span></p>

                      <!-- ko if: highlights().length > 0--><ul data-bind="foreach: highlights"><li><span data-bind="text: highlight"></span></li></ul><!-- /ko --> 

                    </div><!--/span-->

                    </div>
<!-- /ko -->					
<!-- ko if: awards().length > 0-->
		  <div class="header">

			<h2>Awards</h2>

			<hr />

		  </div>

                    <div class="row-fluid" data-bind="foreach: awards">

                      <div class="span6">

                      <i class="fa fa-trophy" style="float: left; margin-right:5px"></i><h4 data-bind="text: title"></h4>

                      <p><span data-bind="text: awarder"></span><span data-bind="text: awardstart" style="float: right;"></span></p>

                      <!-- ko if: awardsummary !== '' --><ul><li><span data-bind="text: awardsummary"></span></li></ul><!-- /ko --> 

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->				
<!-- ko if: talks().length > 0-->
                  <div class="header">

			<h2>Talks, Presentations, Workshops</h2>

			<hr />

		  </div>

                    <div class="row-fluid" data-bind="foreach: talks">

                      <div class="span6">

                          <i class="fa fa-plus" style="float: left; margin-right:5px"></i><h4 data-bind="text: talk_title"></h4>

                      <p data-bind="text: talk_summary"></p> 

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->
<!-- ko if: publishers().length > 0-->                  
		  <div class="header">

			<h2>Publications</h2>

			<hr />

		  </div>

		    <div class="row-fluid" data-bind="foreach: publishers">

                      <div class="span6">

                          <i class="fa fa-plus" style="float: left;margin:5px;"></i><h4 data-bind="text: pub_name"></h4>

                          <p><span data-bind="text: publisher" style="width: 100px;"></span><span data-bind="text: reldate" style="width: 100px;float: right;"></span></p>

                          <a data-bind="attr: { href: pub_web}"><p data-bind="text: pub_web"></p></a>

                      <p data-bind="text: pub_summary"></p> 

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->					
<!-- ko if: skills().length > 0--> 
                  <div class="header">

			<h2>Skills</h2>

			<hr />

		  </div>

		    <div class="row-fluid" data-bind="foreach: skills">

                      <div class="span6">

                          <i class="fa fa-plus" style="float: left;margin:5px;"></i><h4 data-bind="text:skill_name"></h4>

                          <p><span data-bind="text:level"></span></p>

                          <!-- ko if: skill().length > 0--><ul data-bind="foreach: skill"><li><span data-bind="text: skill_key"></span></li></ul><!-- /ko --> 

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->  
<!-- ko if: prof().length > 0-->                    
                  <div class="header">

			<h2>Professional Affiliations</h2>

			<hr />

		  </div>

		  <div class="row-fluid" data-bind="foreach: prof">

                      <div class="span6">

                          <i class="fa fa-plus" style="float: left; margin-right:5px"></i><h4 data-bind="text: profname"></h4>

                          <p data-bind="text: proflevel"></p>

                          <!-- ko if: profkey().length > 0--> <ul data-bind="foreach: profkey"><li><span data-bind="text :keywordpro"></span></li></ul><!-- /ko -->

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->  
<!-- ko if: interest().length > 0-->
                  <div class="header">

			<h2>Interests</h2>

			<hr />

		  </div>

		   <div class="row-fluid" data-bind="foreach: interest">

                      <div class="span6">

                          <span data-bind="text: keyint"></span>

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->   
<!-- ko if: community().length > 0-->
                  <div class="header">

			<h2>Community and Academic Service</h2>

			<hr />

		  </div>

		 
                    <div class="row-fluid" data-bind="foreach: community">

                      <div class="span6">

                          <!-- ko if: commsumm().length > 0--><ul data-bind="foreach: commsumm"><li><span data-bind="text: commsummary"></span></li></ul><!-- /ko -->     

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->   					
<!-- ko if: projects().length > 0-->

                                   <div class="header">

			<h2>Projects</h2>

			<hr />

		  </div>

                    <div class="row-fluid" data-bind="foreach: projects">

                      <div class="span6">

                          <i class="fa fa-plus" style="float: left;margin:5px;"></i><h4 data-bind="text: projname"></h4>

                      <p data-bind="text: desc"></p>

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->                    
<!-- ko if: references().length > 0-->           
                 <div class="header">

			<h2>References</h2>

			<hr />

		  </div>


                    <div class="row-fluid" data-bind="foreach: references">

                      <div class="span6">

                          <i class="fa fa-plus" style="float: left;margin:5px;"></i><h4 data-bind="text: refname"></h4><blockquote>
<em><smaller><p data-bind="text: reff"></p></blockquote></em></smaller>
                          

                    </div><!--/span-->

                    </div><!--/row-->
<!-- /ko -->

      <hr />
</div>
</div>
</div>

<footer><center>
       <p><i class="icon-home"></i><span data-bind="text: address"></span>,&nbsp;<span data-bind="text: location"></span>&nbsp;&nbsp;<i class="fa fa-phone"></i> <span data-bind="text: phone"></span>&nbsp;&nbsp;<i class="fa fa-globe"></i> <a data-bind="attr: { href: website}"><span data-bind="text: website"></span></a>&nbsp;&nbsp;<i class="fa fa-envelope"></i> <span data-bind="text: email"></span></p>
</center>  </div><div class="noPrint"><em><p><center>Click <a href="http://carlvlewis.github.io/cvStrap-jsonresume"><strong>here</strong></a> to read about how I built this CV. Data nerd? Click <strong><a href="json/resume.json"">here</a></strong> to view the JSON data that populated this document.</center></p></em></div>
      </footer>




    <!--Time for some JavaScript-->


    <script src="js/jquery.js"><\/script>

    <script src="js/bootstrap.min.js"><\/script>
    
    <script src="js/knockout-3.2.0.js"><\/script>

    <script src="js/myCV.js"><\/script>
        

  </body>

</html>
`},Q={css:["bootstrap.min.css","print.css","screen.css","shared.css"],img:["avatar.png"],js:["bootstrap.js","bootstrap.min.js","jquery.js","knockout-3.2.0.js","libs.min.js","main.js","myCV.js"],json:["resume.json","schema.json"],".":["README.md","css","example.html","img","index.js","js","json","license.md","package.json","resume.template"]};qt=function(t,e){var n=Ft(t);return n!==void 0?n:""},Jt=function(t,e){var n=dt(t);return n===void 0&&(n=[]),e&&e.withFileTypes?n.map(function(r){var a=ct(t)+"/"+r,i=dt(a)!==void 0;return{name:r,isFile:function(){return!i},isDirectory:function(){return i}}}):n},Vt=function(t){return Ft(t)!==void 0||dt(t)!==void 0},Gt=function(){},Wt=function(){},ht=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Ut=ht,Yt=function(){},Kt=function(){},Xt=function(){return{pipe:function(t){return t},on:function(){return this}}},Qt=function(){return{write:function(){},end:function(){},on:function(){return this}}},We={readFileSync:qt,readdirSync:Jt,existsSync:Vt,writeFileSync:Gt,mkdirSync:Wt,statSync:ht,lstatSync:Ut,unlinkSync:Yt,rmdirSync:Kt,createReadStream:Xt,createWriteStream:Qt}});var bt=b($t=>{"use strict";c();function Zt(t){this.string=t}Zt.prototype.toString=function(){return""+this.string};$t.default=Zt});var j=b(P=>{"use strict";c();var Ue=bt().default,Ye={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Ke=/[&<>"'`]/g,Xe=/[&<>"'`]/;function Qe(t){return Ye[t]}function Ze(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}P.extend=Ze;var ft=Object.prototype.toString;P.toString=ft;var Z=function(t){return typeof t=="function"};Z(/x/)&&(Z=function(t){return typeof t=="function"&&ft.call(t)==="[object Function]"});var Z;P.isFunction=Z;var te=Array.isArray||function(t){return t&&typeof t=="object"?ft.call(t)==="[object Array]":!1};P.isArray=te;function $e(t){return t instanceof Ue?t.toString():t==null?"":t?(t=""+t,Xe.test(t)?t.replace(Ke,Qe):t):t+""}P.escapeExpression=$e;function tn(t){return!t&&t!==0?!0:!!(te(t)&&t.length===0)}P.isEmpty=tn;function en(t,e){return(t?t+".":"")+e}P.appendContextPath=en});var E=b(ne=>{"use strict";c();var mt=["description","fileName","lineNumber","message","name","number","stack"];function ee(t,e){var n;e&&e.firstLine&&(n=e.firstLine,t+=" - "+n+":"+e.firstColumn);for(var r=Error.prototype.constructor.call(this,t),a=0;a<mt.length;a++)this[mt[a]]=r[mt[a]];n&&(this.lineNumber=n,this.column=e.firstColumn)}ee.prototype=new Error;ne.default=ee});var T=b(z=>{"use strict";c();var v=j(),vt=E().default,nn="2.0.0";z.VERSION=nn;var rn=6;z.COMPILER_REVISION=rn;var an={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};z.REVISION_CHANGES=an;var re=v.isArray,xt=v.isFunction,ae=v.toString,ie="[object Object]";function wt(t,e){this.helpers=t||{},this.partials=e||{},on(this)}z.HandlebarsEnvironment=wt;wt.prototype={constructor:wt,logger:q,log:oe,registerHelper:function(t,e){if(ae.call(t)===ie){if(e)throw new vt("Arg not supported with multiple helpers");v.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){ae.call(t)===ie?v.extend(this.partials,t):this.partials[t]=e},unregisterPartial:function(t){delete this.partials[t]}};function on(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new vt("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(e,n){var r=n.inverse,a=n.fn;if(e===!0)return a(this);if(e===!1||e==null)return r(this);if(re(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):r(this);if(n.data&&n.ids){var i=$(n.data);i.contextPath=v.appendContextPath(n.data.contextPath,n.name),n={data:i}}return a(e,n)}),t.registerHelper("each",function(e,n){if(!n)throw new vt("Must pass iterator to #each");var r=n.fn,a=n.inverse,i=0,o="",s,d;if(n.data&&n.ids&&(d=v.appendContextPath(n.data.contextPath,n.ids[0])+"."),xt(e)&&(e=e.call(this)),n.data&&(s=$(n.data)),e&&typeof e=="object")if(re(e))for(var p=e.length;i<p;i++)s&&(s.index=i,s.first=i===0,s.last=i===e.length-1,d&&(s.contextPath=d+i)),o=o+r(e[i],{data:s});else for(var h in e)e.hasOwnProperty(h)&&(s&&(s.key=h,s.index=i,s.first=i===0,d&&(s.contextPath=d+h)),o=o+r(e[h],{data:s}),i++);return i===0&&(o=a(this)),o}),t.registerHelper("if",function(e,n){return xt(e)&&(e=e.call(this)),!n.hash.includeZero&&!e||v.isEmpty(e)?n.inverse(this):n.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),t.registerHelper("with",function(e,n){xt(e)&&(e=e.call(this));var r=n.fn;if(v.isEmpty(e))return n.inverse(this);if(n.data&&n.ids){var a=$(n.data);a.contextPath=v.appendContextPath(n.data.contextPath,n.ids[0]),n={data:a}}return r(e,n)}),t.registerHelper("log",function(e,n){var r=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;t.log(r,e)}),t.registerHelper("lookup",function(e,n){return e&&e[n]})}var q={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(q.level<=t){var n=q.methodMap[t];typeof console<"u"&&console[n]&&console[n].call(console,e)}}};z.logger=q;var oe=q.log;z.log=oe;var $=function(t){var e=v.extend({},t);return e._parent=t,e};z.createFrame=$});var pe=b(L=>{"use strict";c();var kt=j(),M=E().default,sn=T().COMPILER_REVISION,se=T().REVISION_CHANGES,pn=T().createFrame;function ln(t){var e=t&&t[0]||1,n=sn;if(e!==n)if(e<n){var r=se[n],a=se[e];throw new M("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+a+").")}else throw new M("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}L.checkRevision=ln;function dn(t,e){if(!e)throw new M("No environment passed to template");if(!t||!t.main)throw new M("Unknown template object: "+typeof t);e.VM.checkRevision(t.compiler);var n=function(i,o,s,d,p,h,l,S,R){p&&(d=kt.extend({},d,p));var A=e.VM.invokePartial.call(this,i,s,d,h,l,S,R);if(A==null&&e.compile){var Rt={helpers:h,partials:l,data:S,depths:R};l[s]=e.compile(i,{data:S!==void 0,compat:t.compat},e),A=l[s](d,Rt)}if(A!=null){if(o){for(var k=A.split(`
`),C=0,ot=k.length;C<ot&&!(!k[C]&&C+1===ot);C++)k[C]=o+k[C];A=k.join(`
`)}return A}else throw new M("The partial "+s+" could not be compiled when running in runtime-only mode")},r={lookup:function(i,o){for(var s=i.length,d=0;d<s;d++)if(i[d]&&i[d][o]!=null)return i[d][o]},lambda:function(i,o){return typeof i=="function"?i.call(o):i},escapeExpression:kt.escapeExpression,invokePartial:n,fn:function(i){return t[i]},programs:[],program:function(i,o,s){var d=this.programs[i],p=this.fn(i);return o||s?d=tt(this,i,p,o,s):d||(d=this.programs[i]=tt(this,i,p)),d},data:function(i,o){for(;i&&o--;)i=i._parent;return i},merge:function(i,o){var s=i||o;return i&&o&&i!==o&&(s=kt.extend({},o,i)),s},noop:e.VM.noop,compilerInfo:t.compiler},a=function(i,o){o=o||{};var s=o.data;a._setup(o),!o.partial&&t.useData&&(s=un(i,s));var d;return t.useDepths&&(d=o.depths?[i].concat(o.depths):[i]),t.main.call(r,i,r.helpers,r.partials,s,d)};return a.isTop=!0,a._setup=function(i){i.partial?(r.helpers=i.helpers,r.partials=i.partials):(r.helpers=r.merge(i.helpers,e.helpers),t.usePartial&&(r.partials=r.merge(i.partials,e.partials)))},a._child=function(i,o,s){if(t.useDepths&&!s)throw new M("must pass parent depths");return tt(r,i,t[i],o,s)},a}L.template=dn;function tt(t,e,n,r,a){var i=function(o,s){return s=s||{},n.call(t,o,t.helpers,t.partials,s.data||r,a&&[o].concat(a))};return i.program=e,i.depth=a?a.length:0,i}L.program=tt;function cn(t,e,n,r,a,i,o){var s={partial:!0,helpers:r,partials:a,data:i,depths:o};if(t===void 0)throw new M("The partial "+e+" could not be found");if(t instanceof Function)return t(n,s)}L.invokePartial=cn;function hn(){return""}L.noop=hn;function un(t,e){return(!e||!("root"in e))&&(e=e?pn(e):{},e.root=t),e}});var ue=b(he=>{"use strict";c();var le=T(),gn=bt().default,bn=E().default,yt=j(),de=pe(),ce=function(){var t=new le.HandlebarsEnvironment;return yt.extend(t,le),t.SafeString=gn,t.Exception=bn,t.Utils=yt,t.escapeExpression=yt.escapeExpression,t.VM=de,t.template=function(e){return de.template(e,t)},t},et=ce();et.create=ce;et.default=et;he.default=et});var St=b(be=>{"use strict";c();var ge=E().default;function m(t){t=t||{},this.firstLine=t.first_line,this.firstColumn=t.first_column,this.lastColumn=t.last_column,this.lastLine=t.last_line}var J={ProgramNode:function(t,e,n){m.call(this,n),this.type="program",this.statements=t,this.strip=e},MustacheNode:function(t,e,n,r,a){if(m.call(this,a),this.type="mustache",this.strip=r,n!=null&&n.charAt){var i=n.charAt(3)||n.charAt(2);this.escaped=i!=="{"&&i!=="&"}else this.escaped=!!n;t instanceof J.SexprNode?this.sexpr=t:this.sexpr=new J.SexprNode(t,e),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(t,e,n){m.call(this,n),this.type="sexpr",this.hash=e;var r=this.id=t[0],a=this.params=t.slice(1);this.isHelper=!!(a.length||e),this.eligibleHelper=this.isHelper||r.isSimple},PartialNode:function(t,e,n,r,a){m.call(this,a),this.type="partial",this.partialName=t,this.context=e,this.hash=n,this.strip=r,this.strip.inlineStandalone=!0},BlockNode:function(t,e,n,r,a){m.call(this,a),this.type="block",this.mustache=t,this.program=e,this.inverse=n,this.strip=r,n&&!e&&(this.isInverse=!0)},RawBlockNode:function(t,e,n,r){if(m.call(this,r),t.sexpr.id.original!==n)throw new ge(t.sexpr.id.original+" doesn't match "+n,this);e=new J.ContentNode(e,r),this.type="block",this.mustache=t,this.program=new J.ProgramNode([e],{},r)},ContentNode:function(t,e){m.call(this,e),this.type="content",this.original=this.string=t},HashNode:function(t,e){m.call(this,e),this.type="hash",this.pairs=t},IdNode:function(t,e){m.call(this,e),this.type="ID";for(var n="",r=[],a=0,i="",o=0,s=t.length;o<s;o++){var d=t[o].part;if(n+=(t[o].separator||"")+d,d===".."||d==="."||d==="this"){if(r.length>0)throw new ge("Invalid path: "+n,this);d===".."?(a++,i+="../"):this.isScoped=!0}else r.push(d)}this.original=n,this.parts=r,this.string=r.join("."),this.depth=a,this.idName=i+this.string,this.isSimple=t.length===1&&!this.isScoped&&a===0,this.stringModeValue=this.string},PartialNameNode:function(t,e){m.call(this,e),this.type="PARTIAL_NAME",this.name=t.original},DataNode:function(t,e){m.call(this,e),this.type="DATA",this.id=t,this.stringModeValue=t.stringModeValue,this.idName="@"+t.stringModeValue},StringNode:function(t,e){m.call(this,e),this.type="STRING",this.original=this.string=this.stringModeValue=t},NumberNode:function(t,e){m.call(this,e),this.type="NUMBER",this.original=this.number=t,this.stringModeValue=Number(t)},BooleanNode:function(t,e){m.call(this,e),this.type="BOOLEAN",this.bool=t,this.stringModeValue=t==="true"},CommentNode:function(t,e){m.call(this,e),this.type="comment",this.comment=t,this.strip={inlineStandalone:!0}}};be.default=J});var me=b(fe=>{"use strict";c();var fn=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(a,i,o,s,d,p,h){var l=p.length-1;switch(d){case 1:return s.prepareProgram(p[l-1].statements,!0),p[l-1];break;case 2:this.$=new s.ProgramNode(s.prepareProgram(p[l]),{},this._$);break;case 3:this.$=p[l];break;case 4:this.$=p[l];break;case 5:this.$=p[l];break;case 6:this.$=p[l];break;case 7:this.$=new s.ContentNode(p[l],this._$);break;case 8:this.$=new s.CommentNode(p[l],this._$);break;case 9:this.$=new s.RawBlockNode(p[l-2],p[l-1],p[l],this._$);break;case 10:this.$=new s.MustacheNode(p[l-1],null,"","",this._$);break;case 11:this.$=s.prepareBlock(p[l-3],p[l-2],p[l-1],p[l],!1,this._$);break;case 12:this.$=s.prepareBlock(p[l-3],p[l-2],p[l-1],p[l],!0,this._$);break;case 13:this.$=new s.MustacheNode(p[l-1],null,p[l-2],s.stripFlags(p[l-2],p[l]),this._$);break;case 14:this.$=new s.MustacheNode(p[l-1],null,p[l-2],s.stripFlags(p[l-2],p[l]),this._$);break;case 15:this.$={strip:s.stripFlags(p[l-1],p[l-1]),program:p[l]};break;case 16:this.$={path:p[l-1],strip:s.stripFlags(p[l-2],p[l])};break;case 17:this.$=new s.MustacheNode(p[l-1],null,p[l-2],s.stripFlags(p[l-2],p[l]),this._$);break;case 18:this.$=new s.MustacheNode(p[l-1],null,p[l-2],s.stripFlags(p[l-2],p[l]),this._$);break;case 19:this.$=new s.PartialNode(p[l-3],p[l-2],p[l-1],s.stripFlags(p[l-4],p[l]),this._$);break;case 20:this.$=new s.PartialNode(p[l-2],void 0,p[l-1],s.stripFlags(p[l-3],p[l]),this._$);break;case 21:this.$=new s.SexprNode([p[l-2]].concat(p[l-1]),p[l],this._$);break;case 22:this.$=new s.SexprNode([p[l]],null,this._$);break;case 23:this.$=p[l];break;case 24:this.$=new s.StringNode(p[l],this._$);break;case 25:this.$=new s.NumberNode(p[l],this._$);break;case 26:this.$=new s.BooleanNode(p[l],this._$);break;case 27:this.$=p[l];break;case 28:p[l-1].isHelper=!0,this.$=p[l-1];break;case 29:this.$=new s.HashNode(p[l],this._$);break;case 30:this.$=[p[l-2],p[l]];break;case 31:this.$=new s.PartialNameNode(p[l],this._$);break;case 32:this.$=new s.PartialNameNode(new s.StringNode(p[l],this._$),this._$);break;case 33:this.$=new s.PartialNameNode(new s.NumberNode(p[l],this._$));break;case 34:this.$=new s.DataNode(p[l],this._$);break;case 35:this.$=new s.IdNode(p[l],this._$);break;case 36:p[l-2].push({part:p[l],separator:p[l-1]}),this.$=p[l-2];break;case 37:this.$=[{part:p[l]}];break;case 38:this.$=[];break;case 39:p[l-1].push(p[l]);break;case 48:this.$=[];break;case 49:p[l-1].push(p[l]);break;case 52:this.$=[p[l]];break;case 53:p[l-1].push(p[l]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(a,i){throw new Error(a)},parse:function(a){var i=this,o=[0],s=[null],d=[],p=this.table,h="",l=0,S=0,R=0,A=2,Rt=1;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var k=this.lexer.yylloc;d.push(k);var C=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function ot(w){o.length=o.length-2*w,s.length=s.length-w,d.length=d.length-w}function je(){var w;return w=i.lexer.lex()||1,typeof w!="number"&&(w=i.symbols_[w]||w),w}for(var f,st,I,x,qn,pt,H={},U,y,Ht,Y;;){if(I=o[o.length-1],this.defaultActions[I]?x=this.defaultActions[I]:((f===null||typeof f>"u")&&(f=je()),x=p[I]&&p[I][f]),typeof x>"u"||!x.length||!x[0]){var lt="";if(!R){Y=[];for(U in p[I])this.terminals_[U]&&U>2&&Y.push("'"+this.terminals_[U]+"'");this.lexer.showPosition?lt="Parse error on line "+(l+1)+`:
`+this.lexer.showPosition()+`
Expecting `+Y.join(", ")+", got '"+(this.terminals_[f]||f)+"'":lt="Parse error on line "+(l+1)+": Unexpected "+(f==1?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(lt,{text:this.lexer.match,token:this.terminals_[f]||f,line:this.lexer.yylineno,loc:k,expected:Y})}}if(x[0]instanceof Array&&x.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+f);switch(x[0]){case 1:o.push(f),s.push(this.lexer.yytext),d.push(this.lexer.yylloc),o.push(x[1]),f=null,st?(f=st,st=null):(S=this.lexer.yyleng,h=this.lexer.yytext,l=this.lexer.yylineno,k=this.lexer.yylloc,R>0&&R--);break;case 2:if(y=this.productions_[x[1]][1],H.$=s[s.length-y],H._$={first_line:d[d.length-(y||1)].first_line,last_line:d[d.length-1].last_line,first_column:d[d.length-(y||1)].first_column,last_column:d[d.length-1].last_column},C&&(H._$.range=[d[d.length-(y||1)].range[0],d[d.length-1].range[1]]),pt=this.performAction.call(H,h,S,l,this.yy,x[1],s,d),typeof pt<"u")return pt;y&&(o=o.slice(0,-1*y*2),s=s.slice(0,-1*y),d=d.slice(0,-1*y)),o.push(this.productions_[x[1]][0]),s.push(H.$),d.push(H._$),Ht=p[o[o.length-2]][o[o.length-1]],o.push(Ht);break;case 3:return!0}}return!0}},e=(function(){var r={EOF:1,parseError:function(i,o){if(this.yy.parser)this.yy.parser.parseError(i,o);else throw new Error(i)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var i=a.match(/(?:\r\n?|\n).*/g);return i?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var i=a.length,o=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i-1),this.offset-=i;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var d=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===s.length?this.yylloc.first_column:0)+s[s.length-o.length].length-o[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[d[0],d[0]+this.yyleng-i]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),i=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+i+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,i,o,s,d,p;this._more||(this.yytext="",this.match="");for(var h=this._currentRules(),l=0;l<h.length&&(o=this._input.match(this.rules[h[l]]),!(o&&(!i||o[0].length>i[0].length)&&(i=o,s=l,!this.options.flex)));l++);return i?(p=i[0].match(/(?:\r\n?|\n).*/g),p&&(this.yylineno+=p.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:p?p[p.length-1].length-p[p.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],a=this.performAction.call(this,this.yy,this,h[s],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return typeof i<"u"?i:this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(i){this.begin(i)}};return r.options={},r.performAction=function(i,o,s,d){function p(l,S){return o.yytext=o.yytext.substr(l,o.yyleng-S)}var h=d;switch(s){case 0:if(o.yytext.slice(-2)==="\\\\"?(p(0,1),this.begin("mu")):o.yytext.slice(-1)==="\\"?(p(0,1),this.begin("emu")):this.begin("mu"),o.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return o.yytext=o.yytext.substr(5,o.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return p(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return p(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return o.yytext=p(1,2).replace(/\\"/g,'"'),42;break;case 30:return o.yytext=p(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return o.yytext=p(1,2),50;break;case 37:return"INVALID";case 38:return 5}},r.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],r.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},r})();t.lexer=e;function n(){this.yy={}}return n.prototype=t,t.Parser=n,new n})();fe.default=fn});var xe=b(nt=>{"use strict";c();var mn=E().default;function xn(t,e){return{left:t.charAt(2)==="~",right:e.charAt(e.length-3)==="~"}}nt.stripFlags=xn;function vn(t,e,n,r,a,i){if(t.sexpr.id.original!==r.path.original)throw new mn(t.sexpr.id.original+" doesn't match "+r.path.original,t);var o=n&&n.program,s={left:t.strip.left,right:r.strip.right,openStandalone:Pt(e.statements),closeStandalone:Ct((o||e).statements)};if(t.strip.right&&D(e.statements,null,!0),o){var d=n.strip;d.left&&N(e.statements,null,!0),d.right&&D(o.statements,null,!0),r.strip.left&&N(o.statements,null,!0),Ct(e.statements)&&Pt(o.statements)&&(N(e.statements),D(o.statements))}else r.strip.left&&N(e.statements,null,!0);return a?new this.BlockNode(t,o,e,s,i):new this.BlockNode(t,e,o,s,i)}nt.prepareBlock=vn;function wn(t,e){for(var n=0,r=t.length;n<r;n++){var a=t[n],i=a.strip;if(i){var o=Ct(t,n,e,a.type==="partial"),s=Pt(t,n,e),d=i.openStandalone&&o,p=i.closeStandalone&&s,h=i.inlineStandalone&&o&&s;i.right&&D(t,n,!0),i.left&&N(t,n,!0),h&&(D(t,n),N(t,n)&&a.type==="partial"&&(a.indent=/([ \t]+$)/.exec(t[n-1].original)?RegExp.$1:"")),d&&(D((a.program||a.inverse).statements),N(t,n)),p&&(D(t,n),N((a.inverse||a.program).statements))}}return t}nt.prepareProgram=wn;function Ct(t,e,n){e===void 0&&(e=t.length);var r=t[e-1],a=t[e-2];if(!r)return n;if(r.type==="content")return(a||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(r.original)}function Pt(t,e,n){e===void 0&&(e=-1);var r=t[e+1],a=t[e+2];if(!r)return n;if(r.type==="content")return(a||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(r.original)}function D(t,e,n){var r=t[e==null?0:e+1];if(!(!r||r.type!=="content"||!n&&r.rightStripped)){var a=r.string;r.string=r.string.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),r.rightStripped=r.string!==a}}function N(t,e,n){var r=t[e==null?t.length-1:e-1];if(!(!r||r.type!=="content"||!n&&r.leftStripped)){var a=r.string;return r.string=r.string.replace(n?/\s+$/:/[ \t]+$/,""),r.leftStripped=r.string!==a,r.leftStripped}}});var Nt=b(zt=>{"use strict";c();var Et=me().default,ve=St().default,kn=xe(),yn=j().extend;zt.parser=Et;var we={};yn(we,kn,ve);function Sn(t){return t.constructor===ve.ProgramNode?t:(Et.yy=we,Et.parse(t))}zt.parse=Sn});var at=b(rt=>{"use strict";c();var It=E().default,ke=j().isArray,Cn=[].slice;function At(){}rt.Compiler=At;At.prototype={compiler:At,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var n=0;n<e;n++){var r=this.opcodes[n],a=t.opcodes[n];if(r.opcode!==a.opcode||!ye(r.args,a.args))return!1}for(e=this.children.length,n=0;n<e;n++)if(!this.children[n].equals(t.children[n]))return!1;return!0},guid:0,compile:function(t,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds;var n=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},n)for(var r in n)this.options.knownHelpers[r]=n[r];return this.accept(t)},accept:function(t){return this[t.type](t)},program:function(t){for(var e=t.statements,n=0,r=e.length;n<r;n++)this.accept(e[n]);return this.isSimple=r===1,this.depths.list=this.depths.list.sort(function(a,i){return a-i}),this},compileProgram:function(t){var e=new this.compiler().compile(t,this.options),n=this.guid++,r;this.usePartial=this.usePartial||e.usePartial,this.children[n]=e;for(var a=0,i=e.depths.list.length;a<i;a++)r=e.depths.list[a],!(r<2)&&this.addDepth(r-1);return n},block:function(t){var e=t.mustache,n=t.program,r=t.inverse;n&&(n=this.compileProgram(n)),r&&(r=this.compileProgram(r));var a=e.sexpr,i=this.classifySexpr(a);i==="helper"?this.helperSexpr(a,n,r):i==="simple"?(this.simpleSexpr(a),this.opcode("pushProgram",n),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("blockValue",a.id.original)):(this.ambiguousSexpr(a,n,r),this.opcode("pushProgram",n),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var e=t.pairs,n,r;for(this.opcode("pushHash"),n=0,r=e.length;n<r;n++)this.pushParam(e[n][1]);for(;n--;)this.opcode("assignToHash",e[n][0]);this.opcode("popHash")},partial:function(t){var e=t.partialName;this.usePartial=!0,t.hash?this.accept(t.hash):this.opcode("push","undefined"),t.context?this.accept(t.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",e.name,t.indent||""),this.opcode("append")},content:function(t){t.string&&this.opcode("appendContent",t.string)},mustache:function(t){this.sexpr(t.sexpr),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(t,e,n){var r=t.id,a=r.parts[0],i=e!=null||n!=null;this.opcode("getContext",r.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.ID(r),this.opcode("invokeAmbiguous",a,i)},simpleSexpr:function(t){var e=t.id;e.type==="DATA"?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,n){var r=this.setupFullMustacheParams(t,e,n),a=t.id,i=a.parts[0];if(this.options.knownHelpers[i])this.opcode("invokeKnownHelper",r.length,i);else{if(this.options.knownHelpersOnly)throw new It("You specified knownHelpersOnly, but used the unknown helper "+i,t);a.falsy=!0,this.ID(a),this.opcode("invokeHelper",r.length,a.original,a.isSimple)}},sexpr:function(t){var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0];e?this.opcode("lookupOnContext",t.parts,t.falsy,t.isScoped):this.opcode("pushContext")},DATA:function(t){this.options.data=!0,this.opcode("lookupData",t.id.depth,t.id.parts)},STRING:function(t){this.opcode("pushString",t.string)},NUMBER:function(t){this.opcode("pushLiteral",t.number)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:Cn.call(arguments,1)})},addDepth:function(t){t!==0&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifySexpr:function(t){var e=t.isHelper,n=t.eligibleHelper,r=this.options;if(n&&!e){var a=t.id.parts[0];r.knownHelpers[a]?e=!0:r.knownHelpersOnly&&(n=!1)}return e?"helper":n?"ambiguous":"simple"},pushParams:function(t){for(var e=0,n=t.length;e<n;e++)this.pushParam(t[e])},pushParam:function(t){this.stringParams?(t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",t.stringModeValue,t.type),t.type==="sexpr"&&this.sexpr(t)):(this.trackIds&&this.opcode("pushId",t.type,t.idName||t.stringModeValue),this.accept(t))},setupFullMustacheParams:function(t,e,n){var r=t.params;return this.pushParams(r),this.opcode("pushProgram",e),this.opcode("pushProgram",n),t.hash?this.hash(t.hash):this.opcode("emptyHash"),r}};function Pn(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new It("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var r=n.parse(t),a=new n.Compiler().compile(r,e);return new n.JavaScriptCompiler().compile(a,e)}rt.precompile=Pn;function En(t,e,n){if(t==null||typeof t!="string"&&t.constructor!==n.AST.ProgramNode)throw new It("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var r;function a(){var o=n.parse(t),s=new n.Compiler().compile(o,e),d=new n.JavaScriptCompiler().compile(s,e,void 0,!0);return n.template(d)}var i=function(o,s){return r||(r=a()),r.call(this,o,s)};return i._setup=function(o){return r||(r=a()),r._setup(o)},i._child=function(o,s,d){return r||(r=a()),r._child(o,s,d)},i}rt.compile=En;function ye(t,e){if(t===e)return!0;if(ke(t)&&ke(e)&&t.length===e.length){for(var n=0;n<t.length;n++)if(!ye(t[n],e[n]))return!1;return!0}}});var Ee=b(Pe=>{"use strict";c();var zn=T().COMPILER_REVISION,Nn=T().REVISION_CHANGES,Tt=E().default;function V(t){this.value=t}function O(){}O.prototype={nameLookup:function(t,e){return O.isValidJavaScriptVariableName(e)?t+"."+e:t+"['"+e+"']"},depthedLookup:function(t){return this.aliases.lookup="this.lookup",'lookup(depths, "'+t+'")'},compilerInfo:function(){var t=zn,e=Nn[t];return[t,e]},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,e,n,r){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!r,this.name=this.environment.name,this.isChild=!!n,this.context=n||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.depths.list.length||this.options.compat;var a=t.opcodes,i,o,s;for(o=0,s=a.length;o<s;o++)i=a[o],this[i.opcode].apply(this,i.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Tt("Compile completed with content left on stack");var d=this.createFunctionContext(r);if(this.isChild)return d;var p={compiler:this.compilerInfo(),main:d},h=this.context.programs;for(o=0,s=h.length;o<s;o++)h[o]&&(p[o]=h[o]);return this.environment.usePartial&&(p.usePartial=!0),this.options.data&&(p.useData=!0),this.useDepths&&(p.useDepths=!0),this.options.compat&&(p.compat=!0),r||(p.compiler=JSON.stringify(p.compiler),p=this.objectLiteral(p)),p},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(t){var e="",n=this.stackVars.concat(this.registers.list);n.length>0&&(e+=", "+n.join(", "));for(var r in this.aliases)this.aliases.hasOwnProperty(r)&&(e+=", "+r+"="+this.aliases[r]);var a=["depth0","helpers","partials","data"];this.useDepths&&a.push("depths");var i=this.mergeSource(e);return t?(a.push(i),Function.apply(this,a)):"function("+a.join(",")+`) {
  `+i+"}"},mergeSource:function(t){for(var e="",n,r=!this.forceBuffer,a,i=0,o=this.source.length;i<o;i++){var s=this.source[i];s.appendToBuffer?n?n=n+`
    + `+s.content:n=s.content:(n&&(e?e+="buffer += "+n+`;
  `:(a=!0,e=n+`;
  `),n=void 0),e+=s+`
  `,this.environment.isSimple||(r=!1))}return r?(n||!e)&&(e+="return "+(n||'""')+`;
`):(t+=", buffer = "+(a?"":this.initializeBuffer()),n?e+="return buffer + "+n+`;
`:e+=`return buffer;
`),t&&(e="var "+t.substring(2)+(a?"":`;
  `)+e),e},blockValue:function(t){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=[this.contextName(0)];this.setupParams(t,0,e);var n=this.popStack();e.splice(1,0,n),this.push("blockHelperMissing.call("+e.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams("",0,t,!0),this.flushInline();var e=this.topStack();t.splice(1,0,e),this.pushSource("if (!"+this.lastHelper+") { "+e+" = blockHelperMissing.call("+t.join(", ")+"); }")},appendContent:function(t){this.pendingContent&&(t=this.pendingContent+t),this.pendingContent=t},append:function(){this.flushInline();var t=this.popStack();this.pushSource("if ("+t+" != null) { "+this.appendToBuffer(t)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,n){var r=0,a=t.length;for(!n&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[r++])):this.pushContext();r<a;r++)this.replaceStack(function(i){var o=this.nameLookup(i,t[r],"context");return e?" && "+o:" != null ? "+o+" : "+i})},lookupData:function(t,e){t?this.pushStackLiteral("this.data(data, "+t+")"):this.pushStackLiteral("data");for(var n=e.length,r=0;r<n;r++)this.replaceStack(function(a){return" && "+this.nameLookup(a,e[r],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),e!=="sexpr"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+t.ids.join(",")+"}"),this.stringParams&&(this.push("{"+t.contexts.join(",")+"}"),this.push("{"+t.types.join(",")+"}")),this.push(`{
    `+t.values.join(`,
    `)+`
  }`)},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},invokeHelper:function(t,e,n){this.aliases.helperMissing="helpers.helperMissing";var r=this.popStack(),a=this.setupHelper(t,e),i=(n?a.name+" || ":"")+r+" || helperMissing";this.push("(("+i+").call("+a.callParams+"))")},invokeKnownHelper:function(t,e){var n=this.setupHelper(t,e);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(t,e){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var n=this.popStack();this.emptyHash();var r=this.setupHelper(0,t,e),a=this.lastHelper=this.nameLookup("helpers",t,"helper");this.push("((helper = (helper = "+a+" || "+n+") != null ? helper : helperMissing"+(r.paramsInit?"),("+r.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+r.callParams+") : helper))")},invokePartial:function(t,e){var n=[this.nameLookup("partials",t,"partial"),"'"+e+"'","'"+t+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?n.push("data"):this.options.compat&&n.push("undefined"),this.options.compat&&n.push("depths"),this.push("this.invokePartial("+n.join(", ")+")")},assignToHash:function(t){var e=this.popStack(),n,r,a;this.trackIds&&(a=this.popStack()),this.stringParams&&(r=this.popStack(),n=this.popStack());var i=this.hash;n&&i.contexts.push("'"+t+"': "+n),r&&i.types.push("'"+t+"': "+r),a&&i.ids.push("'"+t+"': "+a),i.values.push("'"+t+"': ("+e+")")},pushId:function(t,e){t==="ID"||t==="DATA"?this.pushString(e):t==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:O,compileChildren:function(t,e){for(var n=t.children,r,a,i=0,o=n.length;i<o;i++){r=n[i],a=new this.compiler;var s=this.matchExistingProgram(r);s==null?(this.context.programs.push(""),s=this.context.programs.length,r.index=s,r.name="program"+s,this.context.programs[s]=a.compile(r,e,this.context,!this.precompile),this.context.environments[s]=r,this.useDepths=this.useDepths||a.useDepths):(r.index=s,r.name="program"+s)}},matchExistingProgram:function(t){for(var e=0,n=this.context.environments.length;e<n;e++){var r=this.context.environments[e];if(r&&r.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],n=e.depths.list,r=this.useDepths,a,i=[e.index,"data"];return r&&i.push("depths"),"this.program("+i.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new V(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var e=this.incrStack();return this.pushSource(e+" = "+t+";"),this.compileStack.push(e),e},replaceStack:function(t){var e="",n=this.isInline(),r,a,i;if(!this.isInline())throw new Tt("replaceStack on non-inline");var o=this.popStack(!0);if(o instanceof V)e=r=o.value,i=!0;else{a=!this.stackSlot;var s=a?this.incrStack():this.topStackName();e="("+this.push(s)+" = "+o+")",r=this.topStack()}var d=t.call(this,r);i||this.popStack(),a&&this.stackSlot--,this.push("("+e+d+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var e=0,n=t.length;e<n;e++){var r=t[e];r instanceof V?this.compileStack.push(r):this.pushStack(r)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),n=(e?this.inlineStack:this.compileStack).pop();if(!t&&n instanceof V)return n.value;if(!e){if(!this.stackSlot)throw new Tt("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof V?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(this.quotedString(n)+":"+t[n]);return"{"+e.join(",")+"}"},setupHelper:function(t,e,n){var r=[],a=this.setupParams(e,t,r,n),i=this.nameLookup("helpers",e,"helper");return{params:r,paramsInit:a,name:i,callParams:[this.contextName(0)].concat(r).join(", ")}},setupOptions:function(t,e,n){var r={},a=[],i=[],o=[],s,d,p;r.name=this.quotedString(t),r.hash=this.popStack(),this.trackIds&&(r.hashIds=this.popStack()),this.stringParams&&(r.hashTypes=this.popStack(),r.hashContexts=this.popStack()),d=this.popStack(),p=this.popStack(),(p||d)&&(p||(p="this.noop"),d||(d="this.noop"),r.fn=p,r.inverse=d);for(var h=e;h--;)s=this.popStack(),n[h]=s,this.trackIds&&(o[h]=this.popStack()),this.stringParams&&(i[h]=this.popStack(),a[h]=this.popStack());return this.trackIds&&(r.ids="["+o.join(",")+"]"),this.stringParams&&(r.types="["+i.join(",")+"]",r.contexts="["+a.join(",")+"]"),this.options.data&&(r.data="data"),r},setupParams:function(t,e,n,r){var a=this.objectLiteral(this.setupOptions(t,e,n));return r?(this.useRegister("options"),n.push("options"),"options="+a):(n.push(a),"")}};var Se="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),An=O.RESERVED_WORDS={};for(it=0,Ce=Se.length;it<Ce;it++)An[Se[it]]=!0;var it,Ce;O.isValidJavaScriptVariableName=function(t){return!O.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};Pe.default=O});var Ae=b(Ne=>{"use strict";c();var B=ue().default,In=St().default,Tn=Nt().parser,Mn=Nt().parse,Dn=at().Compiler,On=at().compile,_n=at().precompile,Rn=Ee().default,Hn=B.create,ze=function(){var t=Hn();return t.compile=function(e,n){return On(e,n,t)},t.precompile=function(e,n){return _n(e,n,t)},t.AST=In,t.Compiler=Dn,t.JavaScriptCompiler=Rn,t.Parser=Tn,t.parse=Mn,t};B=ze();B.create=ze;B.default=B;Ne.default=B});var Dt=b(Ie=>{"use strict";c();function Mt(){}Mt.prototype={constructor:Mt,accept:function(t){return this[t.type](t)}};Ie.default=Mt});var Te=b(Ot=>{"use strict";c();var jn=Dt().default;function Ln(t){return new g().accept(t)}Ot.print=Ln;function g(){this.padding=0}Ot.PrintVisitor=g;g.prototype=new jn;g.prototype.pad=function(t){for(var e="",n=0,r=this.padding;n<r;n++)e=e+"  ";return e=e+t+`
`,e};g.prototype.program=function(t){var e="",n=t.statements,r,a;for(r=0,a=n.length;r<a;r++)e=e+this.accept(n[r]);return this.padding--,e};g.prototype.block=function(t){var e="";return e=e+this.pad("BLOCK:"),this.padding++,e=e+this.accept(t.mustache),t.program&&(e=e+this.pad("PROGRAM:"),this.padding++,e=e+this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e=e+this.pad("{{^}}"),this.padding++,e=e+this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e};g.prototype.sexpr=function(t){for(var e=t.params,n=[],r,a=0,i=e.length;a<i;a++)n.push(this.accept(e[a]));return e="["+n.join(", ")+"]",r=t.hash?" "+this.accept(t.hash):"",this.accept(t.id)+" "+e+r};g.prototype.mustache=function(t){return this.pad("{{ "+this.accept(t.sexpr)+" }}")};g.prototype.partial=function(t){var e=this.accept(t.partialName);return t.context&&(e+=" "+this.accept(t.context)),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")};g.prototype.hash=function(t){for(var e=t.pairs,n=[],r,a,i=0,o=e.length;i<o;i++)r=e[i][0],a=this.accept(e[i][1]),n.push(r+"="+a);return"HASH{"+n.join(", ")+"}"};g.prototype.STRING=function(t){return'"'+t.string+'"'};g.prototype.NUMBER=function(t){return"NUMBER{"+t.number+"}"};g.prototype.BOOLEAN=function(t){return"BOOLEAN{"+t.bool+"}"};g.prototype.ID=function(t){var e=t.parts.join("/");return t.parts.length>1?"PATH:"+e:"ID:"+e};g.prototype.PARTIAL_NAME=function(t){return"PARTIAL:"+t.name};g.prototype.DATA=function(t){return"@"+this.accept(t.id)};g.prototype.content=function(t){return this.pad("CONTENT[ '"+t.string+"' ]")};g.prototype.comment=function(t){return this.pad("{{! '"+t.comment+"' }}")}});var Oe=b((Sr,De)=>{c();var G=Ae().default;G.Visitor=Dt().default;var Me=Te();G.PrintVisitor=Me.PrintVisitor;G.print=Me.print;De.exports=G;typeof F<"u"&&F.extensions&&(_t=function(t,e){var n=(gt(),Bt(ut)),r=n.readFileSync(e,"utf8");t.exports=G.compile(r)},F.extensions[".handlebars"]=_t,F.extensions[".hbs"]=_t);var _t});var Re=b((Er,_e)=>{c();var W=(gt(),Bt(ut)),Bn=Oe();function Fn(t){var e=W.readFileSync("//css/bootstrap.min.css","utf-8")+W.readFileSync("//css/shared.css","utf-8")+W.readFileSync("//css/screen.css","utf-8")+W.readFileSync("//css/print.css","utf-8"),n=W.readFileSync("//resume.template","utf-8");return Bn.compile(n)({css:e,resume:t})}_e.exports={render:Fn}});c();var _=Ge(Re(),1),He=_.default??_,Nr=He.render??_.render,Ar=He.pdfRenderOptions??_.pdfRenderOptions;export{Ar as pdfRenderOptions,Nr as render};
