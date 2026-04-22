var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: {}, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Oi=Object.create;var Ae=Object.defineProperty;var Ii=Object.getOwnPropertyDescriptor;var Ni=Object.getOwnPropertyNames;var Ri=Object.getPrototypeOf,qi=Object.prototype.hasOwnProperty;var re=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var yn=(n,e)=>()=>(n&&(e=n(n=0)),e);var v=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),bt=(n,e)=>{for(var t in e)Ae(n,t,{get:e[t],enumerable:!0})},yt=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Ni(e))!qi.call(n,i)&&i!==t&&Ae(n,i,{get:()=>e[i],enumerable:!(r=Ii(e,i))||r.enumerable});return n};var Bi=(n,e,t)=>(t=n!=null?Oi(Ri(n)):{},yt(e||!n||!n.__esModule?Ae(t,"default",{value:n,enumerable:!0}):t,n)),_t=n=>yt(Ae({},"__esModule",{value:!0}),n);var p=yn(()=>{});var x=v(L=>{"use strict";p();L.__esModule=!0;L.extend=kt;L.indexOf=Vi;L.escapeExpression=zi;L.isEmpty=ji;L.createFrame=Wi;L.blockParams=Ui;L.appendContextPath=Ki;var Ti={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},Hi=/[&<>"'`=]/g,Fi=/[&<>"'`=]/;function Gi(n){return Ti[n]}function kt(n){for(var e=1;e<arguments.length;e++)for(var t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&(n[t]=arguments[e][t]);return n}var kn=Object.prototype.toString;L.toString=kn;var _n=function(e){return typeof e=="function"};_n(/x/)&&(L.isFunction=_n=function(n){return typeof n=="function"&&kn.call(n)==="[object Function]"});L.isFunction=_n;var St=Array.isArray||function(n){return n&&typeof n=="object"?kn.call(n)==="[object Array]":!1};L.isArray=St;function Vi(n,e){for(var t=0,r=n.length;t<r;t++)if(n[t]===e)return t;return-1}function zi(n){if(typeof n!="string"){if(n&&n.toHTML)return n.toHTML();if(n==null)return"";if(!n)return n+"";n=""+n}return Fi.test(n)?n.replace(Hi,Gi):n}function ji(n){return!n&&n!==0?!0:!!(St(n)&&n.length===0)}function Wi(n){var e=kt({},n);return e._parent=n,e}function Ui(n,e){return n.path=e,n}function Ki(n,e){return(n?n+".":"")+e}});var M=v((Oe,wt)=>{"use strict";p();Oe.__esModule=!0;var Sn=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function wn(n,e){var t=e&&e.loc,r=void 0,i=void 0,s=void 0,a=void 0;t&&(r=t.start.line,i=t.end.line,s=t.start.column,a=t.end.column,n+=" - "+r+":"+s);for(var l=Error.prototype.constructor.call(this,n),c=0;c<Sn.length;c++)this[Sn[c]]=l[Sn[c]];Error.captureStackTrace&&Error.captureStackTrace(this,wn);try{t&&(this.lineNumber=r,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:a,enumerable:!0})):(this.column=s,this.endColumn=a))}catch{}}wn.prototype=new Error;Oe.default=wn;wt.exports=Oe.default});var Pt=v((Ie,Ct)=>{"use strict";p();Ie.__esModule=!0;var Cn=x();Ie.default=function(n){n.registerHelper("blockHelperMissing",function(e,t){var r=t.inverse,i=t.fn;if(e===!0)return i(this);if(e===!1||e==null)return r(this);if(Cn.isArray(e))return e.length>0?(t.ids&&(t.ids=[t.name]),n.helpers.each(e,t)):r(this);if(t.data&&t.ids){var s=Cn.createFrame(t.data);s.contextPath=Cn.appendContextPath(t.data.contextPath,t.name),t={data:s}}return i(e,t)})};Ct.exports=Ie.default});var Lt=v((Ne,xt)=>{"use strict";p();Ne.__esModule=!0;function Qi(n){return n&&n.__esModule?n:{default:n}}var fe=x(),Ji=M(),Yi=Qi(Ji);Ne.default=function(n){n.registerHelper("each",function(e,t){if(!t)throw new Yi.default("Must pass iterator to #each");var r=t.fn,i=t.inverse,s=0,a="",l=void 0,c=void 0;t.data&&t.ids&&(c=fe.appendContextPath(t.data.contextPath,t.ids[0])+"."),fe.isFunction(e)&&(e=e.call(this)),t.data&&(l=fe.createFrame(t.data));function o(b,_,N){l&&(l.key=b,l.index=_,l.first=_===0,l.last=!!N,c&&(l.contextPath=c+b)),a=a+r(e[b],{data:l,blockParams:fe.blockParams([e[b],b],[c+b,null])})}if(e&&typeof e=="object")if(fe.isArray(e))for(var h=e.length;s<h;s++)s in e&&o(s,s,s===e.length-1);else if(typeof Symbol=="function"&&e[Symbol.iterator]){for(var u=[],d=e[Symbol.iterator](),m=d.next();!m.done;m=d.next())u.push(m.value);e=u;for(var h=e.length;s<h;s++)o(s,s,s===e.length-1)}else(function(){var b=void 0;Object.keys(e).forEach(function(_){b!==void 0&&o(b,s-1),b=_,s++}),b!==void 0&&o(b,s-1,!0)})();return s===0&&(a=i(this)),a})};xt.exports=Ne.default});var Dt=v((Re,Et)=>{"use strict";p();Re.__esModule=!0;function Xi(n){return n&&n.__esModule?n:{default:n}}var Zi=M(),$i=Xi(Zi);Re.default=function(n){n.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new $i.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})};Et.exports=Re.default});var It=v((qe,Ot)=>{"use strict";p();qe.__esModule=!0;function es(n){return n&&n.__esModule?n:{default:n}}var Mt=x(),ns=M(),At=es(ns);qe.default=function(n){n.registerHelper("if",function(e,t){if(arguments.length!=2)throw new At.default("#if requires exactly one argument");return Mt.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||Mt.isEmpty(e)?t.inverse(this):t.fn(this)}),n.registerHelper("unless",function(e,t){if(arguments.length!=2)throw new At.default("#unless requires exactly one argument");return n.helpers.if.call(this,e,{fn:t.inverse,inverse:t.fn,hash:t.hash})})};Ot.exports=qe.default});var Rt=v((Be,Nt)=>{"use strict";p();Be.__esModule=!0;Be.default=function(n){n.registerHelper("log",function(){for(var e=[void 0],t=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)e.push(arguments[r]);var i=1;t.hash.level!=null?i=t.hash.level:t.data&&t.data.level!=null&&(i=t.data.level),e[0]=i,n.log.apply(n,e)})};Nt.exports=Be.default});var Bt=v((Te,qt)=>{"use strict";p();Te.__esModule=!0;Te.default=function(n){n.registerHelper("lookup",function(e,t,r){return e&&r.lookupProperty(e,t)})};qt.exports=Te.default});var Ht=v((He,Tt)=>{"use strict";p();He.__esModule=!0;function ts(n){return n&&n.__esModule?n:{default:n}}var me=x(),rs=M(),is=ts(rs);He.default=function(n){n.registerHelper("with",function(e,t){if(arguments.length!=2)throw new is.default("#with requires exactly one argument");me.isFunction(e)&&(e=e.call(this));var r=t.fn;if(me.isEmpty(e))return t.inverse(this);var i=t.data;return t.data&&t.ids&&(i=me.createFrame(t.data),i.contextPath=me.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:i,blockParams:me.blockParams([e],[i&&i.contextPath])})})};Tt.exports=He.default});var Pn=v(Fe=>{"use strict";p();Fe.__esModule=!0;Fe.registerDefaultHelpers=ys;Fe.moveHelperToHooks=_s;function J(n){return n&&n.__esModule?n:{default:n}}var ss=Pt(),as=J(ss),os=Lt(),ls=J(os),cs=Dt(),us=J(cs),hs=It(),ps=J(hs),ds=Rt(),fs=J(ds),ms=Bt(),gs=J(ms),vs=Ht(),bs=J(vs);function ys(n){as.default(n),ls.default(n),us.default(n),ps.default(n),fs.default(n),gs.default(n),bs.default(n)}function _s(n,e,t){n.helpers[e]&&(n.hooks[e]=n.helpers[e],t||delete n.helpers[e])}});var Gt=v((Ge,Ft)=>{"use strict";p();Ge.__esModule=!0;var ks=x();Ge.default=function(n){n.registerDecorator("inline",function(e,t,r,i){var s=e;return t.partials||(t.partials={},s=function(a,l){var c=r.partials;r.partials=ks.extend({},c,t.partials);var o=e(a,l);return r.partials=c,o}),t.partials[i.args[0]]=i.fn,s})};Ft.exports=Ge.default});var Vt=v(xn=>{"use strict";p();xn.__esModule=!0;xn.registerDefaultDecorators=Ps;function Ss(n){return n&&n.__esModule?n:{default:n}}var ws=Gt(),Cs=Ss(ws);function Ps(n){Cs.default(n)}});var Ln=v((Ve,zt)=>{"use strict";p();Ve.__esModule=!0;var xs=x(),ie={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if(typeof e=="string"){var t=xs.indexOf(ie.methodMap,e.toLowerCase());t>=0?e=t:e=parseInt(e,10)}return e},log:function(e){if(e=ie.lookupLevel(e),typeof console<"u"&&ie.lookupLevel(ie.level)<=e){var t=ie.methodMap[e];console[t]||(t="log");for(var r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];console[t].apply(console,i)}}};Ve.default=ie;zt.exports=Ve.default});var jt=v(En=>{"use strict";p();En.__esModule=!0;En.createNewLookupObject=Es;var Ls=x();function Es(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return Ls.extend.apply(void 0,[Object.create(null)].concat(e))}});var Dn=v(ge=>{"use strict";p();ge.__esModule=!0;ge.createProtoAccessControl=Os;ge.resultIsAllowed=Is;ge.resetLoggedProperties=Rs;function Ds(n){return n&&n.__esModule?n:{default:n}}var Wt=jt(),Ms=Ln(),As=Ds(Ms),ze=Object.create(null);function Os(n){var e=Object.create(null);e.constructor=!1,e.__defineGetter__=!1,e.__defineSetter__=!1,e.__lookupGetter__=!1;var t=Object.create(null);return t.__proto__=!1,{properties:{whitelist:Wt.createNewLookupObject(t,n.allowedProtoProperties),defaultValue:n.allowProtoPropertiesByDefault},methods:{whitelist:Wt.createNewLookupObject(e,n.allowedProtoMethods),defaultValue:n.allowProtoMethodsByDefault}}}function Is(n,e,t){return Ut(typeof n=="function"?e.methods:e.properties,t)}function Ut(n,e){return n.whitelist[e]!==void 0?n.whitelist[e]===!0:n.defaultValue!==void 0?n.defaultValue:(Ns(e),!1)}function Ns(n){ze[n]!==!0&&(ze[n]=!0,As.default.log("error",'Handlebars: Access has been denied to resolve the property "'+n+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function Rs(){Object.keys(ze).forEach(function(n){delete ze[n]})}});var We=v(q=>{"use strict";p();q.__esModule=!0;q.HandlebarsEnvironment=On;function Kt(n){return n&&n.__esModule?n:{default:n}}var Y=x(),qs=M(),Mn=Kt(qs),Bs=Pn(),Ts=Vt(),Hs=Ln(),je=Kt(Hs),Fs=Dn(),Gs="4.7.8";q.VERSION=Gs;var Vs=8;q.COMPILER_REVISION=Vs;var zs=7;q.LAST_COMPATIBLE_COMPILER_REVISION=zs;var js={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};q.REVISION_CHANGES=js;var An="[object Object]";function On(n,e,t){this.helpers=n||{},this.partials=e||{},this.decorators=t||{},Bs.registerDefaultHelpers(this),Ts.registerDefaultDecorators(this)}On.prototype={constructor:On,logger:je.default,log:je.default.log,registerHelper:function(e,t){if(Y.toString.call(e)===An){if(t)throw new Mn.default("Arg not supported with multiple helpers");Y.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(Y.toString.call(e)===An)Y.extend(this.partials,e);else{if(typeof t>"u")throw new Mn.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(Y.toString.call(e)===An){if(t)throw new Mn.default("Arg not supported with multiple decorators");Y.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){Fs.resetLoggedProperties()}};var Ws=je.default.log;q.log=Ws;q.createFrame=Y.createFrame;q.logger=je.default});var Jt=v((Ue,Qt)=>{"use strict";p();Ue.__esModule=!0;function In(n){this.string=n}In.prototype.toString=In.prototype.toHTML=function(){return""+this.string};Ue.default=In;Qt.exports=Ue.default});var Yt=v(Nn=>{"use strict";p();Nn.__esModule=!0;Nn.wrapHelper=Us;function Us(n,e){if(typeof n!="function")return n;var t=function(){var i=arguments[arguments.length-1];return arguments[arguments.length-1]=e(i),n.apply(this,arguments)};return t}});var nr=v(j=>{"use strict";p();j.__esModule=!0;j.checkRevision=Zs;j.template=$s;j.wrapProgram=Ke;j.resolvePartial=ea;j.invokePartial=na;j.noop=$t;function Ks(n){return n&&n.__esModule?n:{default:n}}function Qs(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}var Js=x(),H=Qs(Js),Ys=M(),F=Ks(Ys),G=We(),Xt=Pn(),Xs=Yt(),Zt=Dn();function Zs(n){var e=n&&n[0]||1,t=G.COMPILER_REVISION;if(!(e>=G.LAST_COMPATIBLE_COMPILER_REVISION&&e<=G.COMPILER_REVISION))if(e<G.LAST_COMPATIBLE_COMPILER_REVISION){var r=G.REVISION_CHANGES[t],i=G.REVISION_CHANGES[e];throw new F.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}else throw new F.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+n[1]+").")}function $s(n,e){if(!e)throw new F.default("No environment passed to template");if(!n||!n.main)throw new F.default("Unknown template object: "+typeof n);n.main.decorator=n.main_d,e.VM.checkRevision(n.compiler);var t=n.compiler&&n.compiler[0]===7;function r(a,l,c){c.hash&&(l=H.extend({},l,c.hash),c.ids&&(c.ids[0]=!0)),a=e.VM.resolvePartial.call(this,a,l,c);var o=H.extend({},c,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),h=e.VM.invokePartial.call(this,a,l,o);if(h==null&&e.compile&&(c.partials[c.name]=e.compile(a,n.compilerOptions,e),h=c.partials[c.name](l,o)),h!=null){if(c.indent){for(var u=h.split(`
`),d=0,m=u.length;d<m&&!(!u[d]&&d+1===m);d++)u[d]=c.indent+u[d];h=u.join(`
`)}return h}else throw new F.default("The partial "+c.name+" could not be compiled when running in runtime-only mode")}var i={strict:function(l,c,o){if(!l||!(c in l))throw new F.default('"'+c+'" not defined in '+l,{loc:o});return i.lookupProperty(l,c)},lookupProperty:function(l,c){var o=l[c];if(o==null||Object.prototype.hasOwnProperty.call(l,c)||Zt.resultIsAllowed(o,i.protoAccessControl,c))return o},lookup:function(l,c){for(var o=l.length,h=0;h<o;h++){var u=l[h]&&i.lookupProperty(l[h],c);if(u!=null)return l[h][c]}},lambda:function(l,c){return typeof l=="function"?l.call(c):l},escapeExpression:H.escapeExpression,invokePartial:r,fn:function(l){var c=n[l];return c.decorator=n[l+"_d"],c},programs:[],program:function(l,c,o,h,u){var d=this.programs[l],m=this.fn(l);return c||u||h||o?d=Ke(this,l,m,c,o,h,u):d||(d=this.programs[l]=Ke(this,l,m)),d},data:function(l,c){for(;l&&c--;)l=l._parent;return l},mergeIfNeeded:function(l,c){var o=l||c;return l&&c&&l!==c&&(o=H.extend({},c,l)),o},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:n.compiler};function s(a){var l=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],c=l.data;s._setup(l),!l.partial&&n.useData&&(c=ta(a,c));var o=void 0,h=n.useBlockParams?[]:void 0;n.useDepths&&(l.depths?o=a!=l.depths[0]?[a].concat(l.depths):l.depths:o=[a]);function u(d){return""+n.main(i,d,i.helpers,i.partials,c,h,o)}return u=er(n.main,u,i,l.depths||[],c,h),u(a,l)}return s.isTop=!0,s._setup=function(a){if(a.partial)i.protoAccessControl=a.protoAccessControl,i.helpers=a.helpers,i.partials=a.partials,i.decorators=a.decorators,i.hooks=a.hooks;else{var l=H.extend({},e.helpers,a.helpers);ra(l,i),i.helpers=l,n.usePartial&&(i.partials=i.mergeIfNeeded(a.partials,e.partials)),(n.usePartial||n.useDecorators)&&(i.decorators=H.extend({},e.decorators,a.decorators)),i.hooks={},i.protoAccessControl=Zt.createProtoAccessControl(a);var c=a.allowCallsToHelperMissing||t;Xt.moveHelperToHooks(i,"helperMissing",c),Xt.moveHelperToHooks(i,"blockHelperMissing",c)}},s._child=function(a,l,c,o){if(n.useBlockParams&&!c)throw new F.default("must pass block params");if(n.useDepths&&!o)throw new F.default("must pass parent depths");return Ke(i,a,n[a],l,0,c,o)},s}function Ke(n,e,t,r,i,s,a){function l(c){var o=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],h=a;return a&&c!=a[0]&&!(c===n.nullContext&&a[0]===null)&&(h=[c].concat(a)),t(n,c,n.helpers,n.partials,o.data||r,s&&[o.blockParams].concat(s),h)}return l=er(t,l,n,a,r,s),l.program=e,l.depth=a?a.length:0,l.blockParams=i||0,l}function ea(n,e,t){return n?!n.call&&!t.name&&(t.name=n,n=t.partials[n]):t.name==="@partial-block"?n=t.data["partial-block"]:n=t.partials[t.name],n}function na(n,e,t){var r=t.data&&t.data["partial-block"];t.partial=!0,t.ids&&(t.data.contextPath=t.ids[0]||t.data.contextPath);var i=void 0;if(t.fn&&t.fn!==$t&&(function(){t.data=G.createFrame(t.data);var s=t.fn;i=t.data["partial-block"]=function(l){var c=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return c.data=G.createFrame(c.data),c.data["partial-block"]=r,s(l,c)},s.partials&&(t.partials=H.extend({},t.partials,s.partials))})(),n===void 0&&i&&(n=i),n===void 0)throw new F.default("The partial "+t.name+" could not be found");if(n instanceof Function)return n(e,t)}function $t(){return""}function ta(n,e){return(!e||!("root"in e))&&(e=e?G.createFrame(e):{},e.root=n),e}function er(n,e,t,r,i,s){if(n.decorator){var a={};e=n.decorator(e,a,t,r&&r[0],i,s,r),H.extend(e,a)}return e}function ra(n,e){Object.keys(n).forEach(function(t){var r=n[t];n[t]=ia(r,e)})}function ia(n,e){var t=e.lookupProperty;return Xs.wrapHelper(n,function(r){return H.extend({lookupProperty:t},r)})}});var Rn=v((Qe,tr)=>{"use strict";p();Qe.__esModule=!0;Qe.default=function(n){(function(){typeof globalThis!="object"&&(Object.prototype.__defineGetter__("__magic__",function(){return this}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__)})();var e=globalThis.Handlebars;n.noConflict=function(){return globalThis.Handlebars===n&&(globalThis.Handlebars=e),n}};tr.exports=Qe.default});var or=v((Je,ar)=>{"use strict";p();Je.__esModule=!0;function Bn(n){return n&&n.__esModule?n:{default:n}}function Tn(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}var sa=We(),rr=Tn(sa),aa=Jt(),oa=Bn(aa),la=M(),ca=Bn(la),ua=x(),qn=Tn(ua),ha=nr(),ir=Tn(ha),pa=Rn(),da=Bn(pa);function sr(){var n=new rr.HandlebarsEnvironment;return qn.extend(n,rr),n.SafeString=oa.default,n.Exception=ca.default,n.Utils=qn,n.escapeExpression=qn.escapeExpression,n.VM=ir,n.template=function(e){return ir.template(e,n)},n}var ve=sr();ve.create=sr;da.default(ve);ve.default=ve;Je.default=ve;ar.exports=Je.default});var Hn=v((Ye,cr)=>{"use strict";p();Ye.__esModule=!0;var lr={helpers:{helperExpression:function(e){return e.type==="SubExpression"||(e.type==="MustacheStatement"||e.type==="BlockStatement")&&!!(e.params&&e.params.length||e.hash)},scopedId:function(e){return/^\.|this\b/.test(e.original)},simpleId:function(e){return e.parts.length===1&&!lr.helpers.scopedId(e)&&!e.depth}}};Ye.default=lr;cr.exports=Ye.default});var hr=v((Xe,ur)=>{"use strict";p();Xe.__esModule=!0;var fa=(function(){var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(i,s,a,l,c,o,h){var u=o.length-1;switch(c){case 1:return o[u-1];case 2:this.$=l.prepareProgram(o[u]);break;case 3:this.$=o[u];break;case 4:this.$=o[u];break;case 5:this.$=o[u];break;case 6:this.$=o[u];break;case 7:this.$=o[u];break;case 8:this.$=o[u];break;case 9:this.$={type:"CommentStatement",value:l.stripComment(o[u]),strip:l.stripFlags(o[u],o[u]),loc:l.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:o[u],value:o[u],loc:l.locInfo(this._$)};break;case 11:this.$=l.prepareRawBlock(o[u-2],o[u-1],o[u],this._$);break;case 12:this.$={path:o[u-3],params:o[u-2],hash:o[u-1]};break;case 13:this.$=l.prepareBlock(o[u-3],o[u-2],o[u-1],o[u],!1,this._$);break;case 14:this.$=l.prepareBlock(o[u-3],o[u-2],o[u-1],o[u],!0,this._$);break;case 15:this.$={open:o[u-5],path:o[u-4],params:o[u-3],hash:o[u-2],blockParams:o[u-1],strip:l.stripFlags(o[u-5],o[u])};break;case 16:this.$={path:o[u-4],params:o[u-3],hash:o[u-2],blockParams:o[u-1],strip:l.stripFlags(o[u-5],o[u])};break;case 17:this.$={path:o[u-4],params:o[u-3],hash:o[u-2],blockParams:o[u-1],strip:l.stripFlags(o[u-5],o[u])};break;case 18:this.$={strip:l.stripFlags(o[u-1],o[u-1]),program:o[u]};break;case 19:var d=l.prepareBlock(o[u-2],o[u-1],o[u],o[u],!1,this._$),m=l.prepareProgram([d],o[u-1].loc);m.chained=!0,this.$={strip:o[u-2].strip,program:m,chain:!0};break;case 20:this.$=o[u];break;case 21:this.$={path:o[u-1],strip:l.stripFlags(o[u-2],o[u])};break;case 22:this.$=l.prepareMustache(o[u-3],o[u-2],o[u-1],o[u-4],l.stripFlags(o[u-4],o[u]),this._$);break;case 23:this.$=l.prepareMustache(o[u-3],o[u-2],o[u-1],o[u-4],l.stripFlags(o[u-4],o[u]),this._$);break;case 24:this.$={type:"PartialStatement",name:o[u-3],params:o[u-2],hash:o[u-1],indent:"",strip:l.stripFlags(o[u-4],o[u]),loc:l.locInfo(this._$)};break;case 25:this.$=l.preparePartialBlock(o[u-2],o[u-1],o[u],this._$);break;case 26:this.$={path:o[u-3],params:o[u-2],hash:o[u-1],strip:l.stripFlags(o[u-4],o[u])};break;case 27:this.$=o[u];break;case 28:this.$=o[u];break;case 29:this.$={type:"SubExpression",path:o[u-3],params:o[u-2],hash:o[u-1],loc:l.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:o[u],loc:l.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:l.id(o[u-2]),value:o[u],loc:l.locInfo(this._$)};break;case 32:this.$=l.id(o[u-1]);break;case 33:this.$=o[u];break;case 34:this.$=o[u];break;case 35:this.$={type:"StringLiteral",value:o[u],original:o[u],loc:l.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(o[u]),original:Number(o[u]),loc:l.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:o[u]==="true",original:o[u]==="true",loc:l.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:l.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:l.locInfo(this._$)};break;case 40:this.$=o[u];break;case 41:this.$=o[u];break;case 42:this.$=l.preparePath(!0,o[u],this._$);break;case 43:this.$=l.preparePath(!1,o[u],this._$);break;case 44:o[u-2].push({part:l.id(o[u]),original:o[u],separator:o[u-1]}),this.$=o[u-2];break;case 45:this.$=[{part:l.id(o[u]),original:o[u]}];break;case 46:this.$=[];break;case 47:o[u-1].push(o[u]);break;case 48:this.$=[];break;case 49:o[u-1].push(o[u]);break;case 50:this.$=[];break;case 51:o[u-1].push(o[u]);break;case 58:this.$=[];break;case 59:o[u-1].push(o[u]);break;case 64:this.$=[];break;case 65:o[u-1].push(o[u]);break;case 70:this.$=[];break;case 71:o[u-1].push(o[u]);break;case 78:this.$=[];break;case 79:o[u-1].push(o[u]);break;case 82:this.$=[];break;case 83:o[u-1].push(o[u]);break;case 86:this.$=[];break;case 87:o[u-1].push(o[u]);break;case 90:this.$=[];break;case 91:o[u-1].push(o[u]);break;case 94:this.$=[];break;case 95:o[u-1].push(o[u]);break;case 98:this.$=[o[u]];break;case 99:o[u-1].push(o[u]);break;case 100:this.$=[o[u]];break;case 101:o[u-1].push(o[u]);break}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(i,s){throw new Error(i)},parse:function(i){var s=this,a=[0],l=[null],c=[],o=this.table,h="",u=0,d=0,m=0,b=2,_=1;this.lexer.setInput(i),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var N=this.lexer.yylloc;c.push(N);var S=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function K(R){a.length=a.length-2*R,l.length=l.length-R,c.length=c.length-R}function Ee(){var R;return R=s.lexer.lex()||1,typeof R!="number"&&(R=s.symbols_[R]||R),R}for(var P,gn,Q,D,Ho,vn,te={},De,T,vt,Me;;){if(Q=a[a.length-1],this.defaultActions[Q]?D=this.defaultActions[Q]:((P===null||typeof P>"u")&&(P=Ee()),D=o[Q]&&o[Q][P]),typeof D>"u"||!D.length||!D[0]){var bn="";if(!m){Me=[];for(De in o[Q])this.terminals_[De]&&De>2&&Me.push("'"+this.terminals_[De]+"'");this.lexer.showPosition?bn="Parse error on line "+(u+1)+`:
`+this.lexer.showPosition()+`
Expecting `+Me.join(", ")+", got '"+(this.terminals_[P]||P)+"'":bn="Parse error on line "+(u+1)+": Unexpected "+(P==1?"end of input":"'"+(this.terminals_[P]||P)+"'"),this.parseError(bn,{text:this.lexer.match,token:this.terminals_[P]||P,line:this.lexer.yylineno,loc:N,expected:Me})}}if(D[0]instanceof Array&&D.length>1)throw new Error("Parse Error: multiple actions possible at state: "+Q+", token: "+P);switch(D[0]){case 1:a.push(P),l.push(this.lexer.yytext),c.push(this.lexer.yylloc),a.push(D[1]),P=null,gn?(P=gn,gn=null):(d=this.lexer.yyleng,h=this.lexer.yytext,u=this.lexer.yylineno,N=this.lexer.yylloc,m>0&&m--);break;case 2:if(T=this.productions_[D[1]][1],te.$=l[l.length-T],te._$={first_line:c[c.length-(T||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(T||1)].first_column,last_column:c[c.length-1].last_column},S&&(te._$.range=[c[c.length-(T||1)].range[0],c[c.length-1].range[1]]),vn=this.performAction.call(te,h,d,u,this.yy,D[1],l,c),typeof vn<"u")return vn;T&&(a=a.slice(0,-1*T*2),l=l.slice(0,-1*T),c=c.slice(0,-1*T)),a.push(this.productions_[D[1]][0]),l.push(te.$),c.push(te._$),vt=o[a[a.length-2]][a[a.length-1]],a.push(vt);break;case 3:return!0}}return!0}},e=(function(){var r={EOF:1,parseError:function(s,a){if(this.yy.parser)this.yy.parser.parseError(s,a);else throw new Error(s)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var a=s.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var a=s.length,l=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a-1),this.offset-=a;var c=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var o=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===c.length?this.yylloc.first_column:0)+c[c.length-l.length].length-l[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[o[0],o[0]+this.yyleng-a]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),a=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+a+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,a,l,c,o,h;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),d=0;d<u.length&&(l=this._input.match(this.rules[u[d]]),!(l&&(!a||l[0].length>a[0].length)&&(a=l,c=d,!this.options.flex)));d++);return a?(h=a[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],s=this.performAction.call(this,this.yy,this,u[c],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return typeof s<"u"?s:this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(s){this.begin(s)}};return r.options={},r.performAction=function(s,a,l,c){function o(u,d){return a.yytext=a.yytext.substring(u,a.yyleng-d+u)}var h=c;switch(l){case 0:if(a.yytext.slice(-2)==="\\\\"?(o(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(o(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;break;case 3:return this.begin("raw"),15;break;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(o(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;break;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;break;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;break;case 16:return this.popState(),44;break;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(a.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;break;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;break;case 30:return this.popState(),33;break;case 31:return a.yytext=o(1,2).replace(/\\"/g,'"'),80;break;case 32:return a.yytext=o(1,2).replace(/\\'/g,"'"),80;break;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return a.yytext=a.yytext.replace(/\\([\\\]])/g,"$1"),72;break;case 43:return"INVALID";case 44:return 5}},r.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],r.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},r})();n.lexer=e;function t(){this.yy={}}return t.prototype=n,n.Parser=t,new t})();Xe.default=fa;ur.exports=Xe.default});var Gn=v((en,fr)=>{"use strict";p();en.__esModule=!0;function ma(n){return n&&n.__esModule?n:{default:n}}var ga=M(),Fn=ma(ga);function Ze(){this.parents=[]}Ze.prototype={constructor:Ze,mutating:!1,acceptKey:function(e,t){var r=this.accept(e[t]);if(this.mutating){if(r&&!Ze.prototype[r.type])throw new Fn.default('Unexpected node type "'+r.type+'" found when accepting '+t+" on "+e.type);e[t]=r}},acceptRequired:function(e,t){if(this.acceptKey(e,t),!e[t])throw new Fn.default(e.type+" requires "+t)},acceptArray:function(e){for(var t=0,r=e.length;t<r;t++)this.acceptKey(e,t),e[t]||(e.splice(t,1),t--,r--)},accept:function(e){if(e){if(!this[e.type])throw new Fn.default("Unknown type: "+e.type,e);this.current&&this.parents.unshift(this.current),this.current=e;var t=this[e.type](e);if(this.current=this.parents.shift(),!this.mutating||t)return t;if(t!==!1)return e}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:$e,Decorator:$e,BlockStatement:pr,DecoratorBlock:pr,PartialStatement:dr,PartialBlockStatement:function(e){dr.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:$e,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}};function $e(n){this.acceptRequired(n,"path"),this.acceptArray(n.params),this.acceptKey(n,"hash")}function pr(n){$e.call(this,n),this.acceptKey(n,"program"),this.acceptKey(n,"inverse")}function dr(n){this.acceptRequired(n,"name"),this.acceptArray(n.params),this.acceptKey(n,"hash")}en.default=Ze;fr.exports=en.default});var gr=v((nn,mr)=>{"use strict";p();nn.__esModule=!0;function va(n){return n&&n.__esModule?n:{default:n}}var ba=Gn(),ya=va(ba);function B(){var n=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=n}B.prototype=new ya.default;B.prototype.Program=function(n){var e=!this.options.ignoreStandalone,t=!this.isRootSeen;this.isRootSeen=!0;for(var r=n.body,i=0,s=r.length;i<s;i++){var a=r[i],l=this.accept(a);if(l){var c=Vn(r,i,t),o=zn(r,i,t),h=l.openStandalone&&c,u=l.closeStandalone&&o,d=l.inlineStandalone&&c&&o;l.close&&X(r,i,!0),l.open&&W(r,i,!0),e&&d&&(X(r,i),W(r,i)&&a.type==="PartialStatement"&&(a.indent=/([ \t]+$)/.exec(r[i-1].original)[1])),e&&h&&(X((a.program||a.inverse).body),W(r,i)),e&&u&&(X(r,i),W((a.inverse||a.program).body))}}return n};B.prototype.BlockStatement=B.prototype.DecoratorBlock=B.prototype.PartialBlockStatement=function(n){this.accept(n.program),this.accept(n.inverse);var e=n.program||n.inverse,t=n.program&&n.inverse,r=t,i=t;if(t&&t.chained)for(r=t.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var s={open:n.openStrip.open,close:n.closeStrip.close,openStandalone:zn(e.body),closeStandalone:Vn((r||e).body)};if(n.openStrip.close&&X(e.body,null,!0),t){var a=n.inverseStrip;a.open&&W(e.body,null,!0),a.close&&X(r.body,null,!0),n.closeStrip.open&&W(i.body,null,!0),!this.options.ignoreStandalone&&Vn(e.body)&&zn(r.body)&&(W(e.body),X(r.body))}else n.closeStrip.open&&W(e.body,null,!0);return s};B.prototype.Decorator=B.prototype.MustacheStatement=function(n){return n.strip};B.prototype.PartialStatement=B.prototype.CommentStatement=function(n){var e=n.strip||{};return{inlineStandalone:!0,open:e.open,close:e.close}};function Vn(n,e,t){e===void 0&&(e=n.length);var r=n[e-1],i=n[e-2];if(!r)return t;if(r.type==="ContentStatement")return(i||!t?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(r.original)}function zn(n,e,t){e===void 0&&(e=-1);var r=n[e+1],i=n[e+2];if(!r)return t;if(r.type==="ContentStatement")return(i||!t?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(r.original)}function X(n,e,t){var r=n[e==null?0:e+1];if(!(!r||r.type!=="ContentStatement"||!t&&r.rightStripped)){var i=r.value;r.value=r.value.replace(t?/^\s+/:/^[ \t]*\r?\n?/,""),r.rightStripped=r.value!==i}}function W(n,e,t){var r=n[e==null?n.length-1:e-1];if(!(!r||r.type!=="ContentStatement"||!t&&r.leftStripped)){var i=r.value;return r.value=r.value.replace(t?/\s+$/:/[ \t]+$/,""),r.leftStripped=r.value!==i,r.leftStripped}}nn.default=B;mr.exports=nn.default});var vr=v(A=>{"use strict";p();A.__esModule=!0;A.SourceLocation=Sa;A.id=wa;A.stripFlags=Ca;A.stripComment=Pa;A.preparePath=xa;A.prepareMustache=La;A.prepareRawBlock=Ea;A.prepareBlock=Da;A.prepareProgram=Ma;A.preparePartialBlock=Aa;function _a(n){return n&&n.__esModule?n:{default:n}}var ka=M(),jn=_a(ka);function Wn(n,e){if(e=e.path?e.path.original:e,n.path.original!==e){var t={loc:n.path.loc};throw new jn.default(n.path.original+" doesn't match "+e,t)}}function Sa(n,e){this.source=n,this.start={line:e.first_line,column:e.first_column},this.end={line:e.last_line,column:e.last_column}}function wa(n){return/^\[.*\]$/.test(n)?n.substring(1,n.length-1):n}function Ca(n,e){return{open:n.charAt(2)==="~",close:e.charAt(e.length-3)==="~"}}function Pa(n){return n.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function xa(n,e,t){t=this.locInfo(t);for(var r=n?"@":"",i=[],s=0,a=0,l=e.length;a<l;a++){var c=e[a].part,o=e[a].original!==c;if(r+=(e[a].separator||"")+c,!o&&(c===".."||c==="."||c==="this")){if(i.length>0)throw new jn.default("Invalid path: "+r,{loc:t});c===".."&&s++}else i.push(c)}return{type:"PathExpression",data:n,depth:s,parts:i,original:r,loc:t}}function La(n,e,t,r,i,s){var a=r.charAt(3)||r.charAt(2),l=a!=="{"&&a!=="&",c=/\*/.test(r);return{type:c?"Decorator":"MustacheStatement",path:n,params:e,hash:t,escaped:l,strip:i,loc:this.locInfo(s)}}function Ea(n,e,t,r){Wn(n,t),r=this.locInfo(r);var i={type:"Program",body:e,strip:{},loc:r};return{type:"BlockStatement",path:n.path,params:n.params,hash:n.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:r}}function Da(n,e,t,r,i,s){r&&r.path&&Wn(n,r);var a=/\*/.test(n.open);e.blockParams=n.blockParams;var l=void 0,c=void 0;if(t){if(a)throw new jn.default("Unexpected inverse block on decorator",t);t.chain&&(t.program.body[0].closeStrip=r.strip),c=t.strip,l=t.program}return i&&(i=l,l=e,e=i),{type:a?"DecoratorBlock":"BlockStatement",path:n.path,params:n.params,hash:n.hash,program:e,inverse:l,openStrip:n.strip,inverseStrip:c,closeStrip:r&&r.strip,loc:this.locInfo(s)}}function Ma(n,e){if(!e&&n.length){var t=n[0].loc,r=n[n.length-1].loc;t&&r&&(e={source:t.source,start:{line:t.start.line,column:t.start.column},end:{line:r.end.line,column:r.end.column}})}return{type:"Program",body:n,strip:{},loc:e}}function Aa(n,e,t,r){return Wn(n,t),{type:"PartialBlockStatement",name:n.path,params:n.params,hash:n.hash,program:e,openStrip:n.strip,closeStrip:t&&t.strip,loc:this.locInfo(r)}}});var _r=v(be=>{"use strict";p();be.__esModule=!0;be.parseWithoutProcessing=yr;be.parse=Ha;function Oa(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function br(n){return n&&n.__esModule?n:{default:n}}var Ia=hr(),Un=br(Ia),Na=gr(),Ra=br(Na),qa=vr(),Ba=Oa(qa),Ta=x();be.parser=Un.default;var tn={};Ta.extend(tn,Ba);function yr(n,e){if(n.type==="Program")return n;Un.default.yy=tn,tn.locInfo=function(r){return new tn.SourceLocation(e&&e.srcName,r)};var t=Un.default.parse(n);return t}function Ha(n,e){var t=yr(n,e),r=new Ra.default(e);return r.accept(t)}});var Cr=v(Se=>{"use strict";p();Se.__esModule=!0;Se.Compiler=Kn;Se.precompile=za;Se.compile=ja;function Sr(n){return n&&n.__esModule?n:{default:n}}var Fa=M(),_e=Sr(Fa),ke=x(),Ga=Hn(),ye=Sr(Ga),Va=[].slice;function Kn(){}Kn.prototype={compiler:Kn,equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t)return!1;for(var r=0;r<t;r++){var i=this.opcodes[r],s=e.opcodes[r];if(i.opcode!==s.opcode||!wr(i.args,s.args))return!1}t=this.children.length;for(var r=0;r<t;r++)if(!this.children[r].equals(e.children[r]))return!1;return!0},guid:0,compile:function(e,t){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds,t.blockParams=t.blockParams||[],t.knownHelpers=ke.extend(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},t.knownHelpers),this.accept(e)},compileProgram:function(e){var t=new this.compiler,r=t.compile(e,this.options),i=this.guid++;return this.usePartial=this.usePartial||r.usePartial,this.children[i]=r,this.useDepths=this.useDepths||r.useDepths,i},accept:function(e){if(!this[e.type])throw new _e.default("Unknown type: "+e.type,e);this.sourceNode.unshift(e);var t=this[e.type](e);return this.sourceNode.shift(),t},Program:function(e){this.options.blockParams.unshift(e.blockParams);for(var t=e.body,r=t.length,i=0;i<r;i++)this.accept(t[i]);return this.options.blockParams.shift(),this.isSimple=r===1,this.blockParams=e.blockParams?e.blockParams.length:0,this},BlockStatement:function(e){kr(e);var t=e.program,r=e.inverse;t=t&&this.compileProgram(t),r=r&&this.compileProgram(r);var i=this.classifySexpr(e);i==="helper"?this.helperSexpr(e,t,r):i==="simple"?(this.simpleSexpr(e),this.opcode("pushProgram",t),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("blockValue",e.path.original)):(this.ambiguousSexpr(e,t,r),this.opcode("pushProgram",t),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(e){var t=e.program&&this.compileProgram(e.program),r=this.setupFullMustacheParams(e,t,void 0),i=e.path;this.useDecorators=!0,this.opcode("registerDecorator",r.length,i.original)},PartialStatement:function(e){this.usePartial=!0;var t=e.program;t&&(t=this.compileProgram(e.program));var r=e.params;if(r.length>1)throw new _e.default("Unsupported number of partial arguments: "+r.length,e);r.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):r.push({type:"PathExpression",parts:[],depth:0}));var i=e.name.original,s=e.name.type==="SubExpression";s&&this.accept(e.name),this.setupFullMustacheParams(e,t,void 0,!0);var a=e.indent||"";this.options.preventIndent&&a&&(this.opcode("appendContent",a),a=""),this.opcode("invokePartial",s,i,a),this.opcode("append")},PartialBlockStatement:function(e){this.PartialStatement(e)},MustacheStatement:function(e){this.SubExpression(e),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(e){this.DecoratorBlock(e)},ContentStatement:function(e){e.value&&this.opcode("appendContent",e.value)},CommentStatement:function(){},SubExpression:function(e){kr(e);var t=this.classifySexpr(e);t==="simple"?this.simpleSexpr(e):t==="helper"?this.helperSexpr(e):this.ambiguousSexpr(e)},ambiguousSexpr:function(e,t,r){var i=e.path,s=i.parts[0],a=t!=null||r!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",r),i.strict=!0,this.accept(i),this.opcode("invokeAmbiguous",s,a)},simpleSexpr:function(e){var t=e.path;t.strict=!0,this.accept(t),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,r){var i=this.setupFullMustacheParams(e,t,r),s=e.path,a=s.parts[0];if(this.options.knownHelpers[a])this.opcode("invokeKnownHelper",i.length,a);else{if(this.options.knownHelpersOnly)throw new _e.default("You specified knownHelpersOnly, but used the unknown helper "+a,e);s.strict=!0,s.falsy=!0,this.accept(s),this.opcode("invokeHelper",i.length,s.original,ye.default.helpers.simpleId(s))}},PathExpression:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var t=e.parts[0],r=ye.default.helpers.scopedId(e),i=!e.depth&&!r&&this.blockParamIndex(t);i?this.opcode("lookupBlockParam",i,e.parts):t?e.data?(this.options.data=!0,this.opcode("lookupData",e.depth,e.parts,e.strict)):this.opcode("lookupOnContext",e.parts,e.falsy,e.strict,r):this.opcode("pushContext")},StringLiteral:function(e){this.opcode("pushString",e.value)},NumberLiteral:function(e){this.opcode("pushLiteral",e.value)},BooleanLiteral:function(e){this.opcode("pushLiteral",e.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(e){var t=e.pairs,r=0,i=t.length;for(this.opcode("pushHash");r<i;r++)this.pushParam(t[r].value);for(;r--;)this.opcode("assignToHash",t[r].key);this.opcode("popHash")},opcode:function(e){this.opcodes.push({opcode:e,args:Va.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(e){e&&(this.useDepths=!0)},classifySexpr:function(e){var t=ye.default.helpers.simpleId(e.path),r=t&&!!this.blockParamIndex(e.path.parts[0]),i=!r&&ye.default.helpers.helperExpression(e),s=!r&&(i||t);if(s&&!i){var a=e.path.parts[0],l=this.options;l.knownHelpers[a]?i=!0:l.knownHelpersOnly&&(s=!1)}return i?"helper":s?"ambiguous":"simple"},pushParams:function(e){for(var t=0,r=e.length;t<r;t++)this.pushParam(e[t])},pushParam:function(e){var t=e.value!=null?e.value:e.original||"";if(this.stringParams)t.replace&&(t=t.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",t,e.type),e.type==="SubExpression"&&this.accept(e);else{if(this.trackIds){var r=void 0;if(e.parts&&!ye.default.helpers.scopedId(e)&&!e.depth&&(r=this.blockParamIndex(e.parts[0])),r){var i=e.parts.slice(1).join(".");this.opcode("pushId","BlockParam",r,i)}else t=e.original||t,t.replace&&(t=t.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",e.type,t)}this.accept(e)}},setupFullMustacheParams:function(e,t,r,i){var s=e.params;return this.pushParams(s),this.opcode("pushProgram",t),this.opcode("pushProgram",r),e.hash?this.accept(e.hash):this.opcode("emptyHash",i),s},blockParamIndex:function(e){for(var t=0,r=this.options.blockParams.length;t<r;t++){var i=this.options.blockParams[t],s=i&&ke.indexOf(i,e);if(i&&s>=0)return[t,s]}}};function za(n,e,t){if(n==null||typeof n!="string"&&n.type!=="Program")throw new _e.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+n);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var r=t.parse(n,e),i=new t.Compiler().compile(r,e);return new t.JavaScriptCompiler().compile(i,e)}function ja(n,e,t){if(e===void 0&&(e={}),n==null||typeof n!="string"&&n.type!=="Program")throw new _e.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+n);e=ke.extend({},e),"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var r=void 0;function i(){var a=t.parse(n,e),l=new t.Compiler().compile(a,e),c=new t.JavaScriptCompiler().compile(l,e,void 0,!0);return t.template(c)}function s(a,l){return r||(r=i()),r.call(this,a,l)}return s._setup=function(a){return r||(r=i()),r._setup(a)},s._child=function(a,l,c,o){return r||(r=i()),r._child(a,l,c,o)},s}function wr(n,e){if(n===e)return!0;if(ke.isArray(n)&&ke.isArray(e)&&n.length===e.length){for(var t=0;t<n.length;t++)if(!wr(n[t],e[t]))return!1;return!0}}function kr(n){if(!n.path.parts){var e=n.path;n.path={type:"PathExpression",data:!1,depth:0,parts:[e.original+""],original:e.original+"",loc:e.loc}}}});var xr=v(Qn=>{p();var Pr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");Qn.encode=function(n){if(0<=n&&n<Pr.length)return Pr[n];throw new TypeError("Must be between 0 and 63: "+n)};Qn.decode=function(n){var e=65,t=90,r=97,i=122,s=48,a=57,l=43,c=47,o=26,h=52;return e<=n&&n<=t?n-e:r<=n&&n<=i?n-r+o:s<=n&&n<=a?n-s+h:n==l?62:n==c?63:-1}});var Xn=v(Yn=>{p();var Lr=xr(),Jn=5,Er=1<<Jn,Dr=Er-1,Mr=Er;function Wa(n){return n<0?(-n<<1)+1:(n<<1)+0}function Ua(n){var e=(n&1)===1,t=n>>1;return e?-t:t}Yn.encode=function(e){var t="",r,i=Wa(e);do r=i&Dr,i>>>=Jn,i>0&&(r|=Mr),t+=Lr.encode(r);while(i>0);return t};Yn.decode=function(e,t,r){var i=e.length,s=0,a=0,l,c;do{if(t>=i)throw new Error("Expected more digits in base 64 VLQ value.");if(c=Lr.decode(e.charCodeAt(t++)),c===-1)throw new Error("Invalid base64 digit: "+e.charAt(t-1));l=!!(c&Mr),c&=Dr,s=s+(c<<a),a+=Jn}while(l);r.value=Ua(s),r.rest=t}});var oe=v(C=>{p();function Ka(n,e,t){if(e in n)return n[e];if(arguments.length===3)return t;throw new Error('"'+e+'" is a required argument.')}C.getArg=Ka;var Ar=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,Qa=/^data:.+\,.+$/;function we(n){var e=n.match(Ar);return e?{scheme:e[1],auth:e[2],host:e[3],port:e[4],path:e[5]}:null}C.urlParse=we;function se(n){var e="";return n.scheme&&(e+=n.scheme+":"),e+="//",n.auth&&(e+=n.auth+"@"),n.host&&(e+=n.host),n.port&&(e+=":"+n.port),n.path&&(e+=n.path),e}C.urlGenerate=se;function Zn(n){var e=n,t=we(n);if(t){if(!t.path)return n;e=t.path}for(var r=C.isAbsolute(e),i=e.split(/\/+/),s,a=0,l=i.length-1;l>=0;l--)s=i[l],s==="."?i.splice(l,1):s===".."?a++:a>0&&(s===""?(i.splice(l+1,a),a=0):(i.splice(l,2),a--));return e=i.join("/"),e===""&&(e=r?"/":"."),t?(t.path=e,se(t)):e}C.normalize=Zn;function Or(n,e){n===""&&(n="."),e===""&&(e=".");var t=we(e),r=we(n);if(r&&(n=r.path||"/"),t&&!t.scheme)return r&&(t.scheme=r.scheme),se(t);if(t||e.match(Qa))return e;if(r&&!r.host&&!r.path)return r.host=e,se(r);var i=e.charAt(0)==="/"?e:Zn(n.replace(/\/+$/,"")+"/"+e);return r?(r.path=i,se(r)):i}C.join=Or;C.isAbsolute=function(n){return n.charAt(0)==="/"||Ar.test(n)};function Ja(n,e){n===""&&(n="."),n=n.replace(/\/$/,"");for(var t=0;e.indexOf(n+"/")!==0;){var r=n.lastIndexOf("/");if(r<0||(n=n.slice(0,r),n.match(/^([^\/]+:\/)?\/*$/)))return e;++t}return Array(t+1).join("../")+e.substr(n.length+1)}C.relative=Ja;var Ir=(function(){var n=Object.create(null);return!("__proto__"in n)})();function Nr(n){return n}function Ya(n){return Rr(n)?"$"+n:n}C.toSetString=Ir?Nr:Ya;function Xa(n){return Rr(n)?n.slice(1):n}C.fromSetString=Ir?Nr:Xa;function Rr(n){if(!n)return!1;var e=n.length;if(e<9||n.charCodeAt(e-1)!==95||n.charCodeAt(e-2)!==95||n.charCodeAt(e-3)!==111||n.charCodeAt(e-4)!==116||n.charCodeAt(e-5)!==111||n.charCodeAt(e-6)!==114||n.charCodeAt(e-7)!==112||n.charCodeAt(e-8)!==95||n.charCodeAt(e-9)!==95)return!1;for(var t=e-10;t>=0;t--)if(n.charCodeAt(t)!==36)return!1;return!0}function Za(n,e,t){var r=ae(n.source,e.source);return r!==0||(r=n.originalLine-e.originalLine,r!==0)||(r=n.originalColumn-e.originalColumn,r!==0||t)||(r=n.generatedColumn-e.generatedColumn,r!==0)||(r=n.generatedLine-e.generatedLine,r!==0)?r:ae(n.name,e.name)}C.compareByOriginalPositions=Za;function $a(n,e,t){var r=n.generatedLine-e.generatedLine;return r!==0||(r=n.generatedColumn-e.generatedColumn,r!==0||t)||(r=ae(n.source,e.source),r!==0)||(r=n.originalLine-e.originalLine,r!==0)||(r=n.originalColumn-e.originalColumn,r!==0)?r:ae(n.name,e.name)}C.compareByGeneratedPositionsDeflated=$a;function ae(n,e){return n===e?0:n===null?1:e===null?-1:n>e?1:-1}function eo(n,e){var t=n.generatedLine-e.generatedLine;return t!==0||(t=n.generatedColumn-e.generatedColumn,t!==0)||(t=ae(n.source,e.source),t!==0)||(t=n.originalLine-e.originalLine,t!==0)||(t=n.originalColumn-e.originalColumn,t!==0)?t:ae(n.name,e.name)}C.compareByGeneratedPositionsInflated=eo;function no(n){return JSON.parse(n.replace(/^\)]}'[^\n]*\n/,""))}C.parseSourceMapInput=no;function to(n,e,t){if(e=e||"",n&&(n[n.length-1]!=="/"&&e[0]!=="/"&&(n+="/"),e=n+e),t){var r=we(t);if(!r)throw new Error("sourceMapURL could not be parsed");if(r.path){var i=r.path.lastIndexOf("/");i>=0&&(r.path=r.path.substring(0,i+1))}e=Or(se(r),e)}return Zn(e)}C.computeSourceURL=to});var nt=v(qr=>{p();var $n=oe(),et=Object.prototype.hasOwnProperty,Z=typeof Map<"u";function V(){this._array=[],this._set=Z?new Map:Object.create(null)}V.fromArray=function(e,t){for(var r=new V,i=0,s=e.length;i<s;i++)r.add(e[i],t);return r};V.prototype.size=function(){return Z?this._set.size:Object.getOwnPropertyNames(this._set).length};V.prototype.add=function(e,t){var r=Z?e:$n.toSetString(e),i=Z?this.has(e):et.call(this._set,r),s=this._array.length;(!i||t)&&this._array.push(e),i||(Z?this._set.set(e,s):this._set[r]=s)};V.prototype.has=function(e){if(Z)return this._set.has(e);var t=$n.toSetString(e);return et.call(this._set,t)};V.prototype.indexOf=function(e){if(Z){var t=this._set.get(e);if(t>=0)return t}else{var r=$n.toSetString(e);if(et.call(this._set,r))return this._set[r]}throw new Error('"'+e+'" is not in the set.')};V.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)};V.prototype.toArray=function(){return this._array.slice()};qr.ArraySet=V});var Hr=v(Tr=>{p();var Br=oe();function ro(n,e){var t=n.generatedLine,r=e.generatedLine,i=n.generatedColumn,s=e.generatedColumn;return r>t||r==t&&s>=i||Br.compareByGeneratedPositionsInflated(n,e)<=0}function rn(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}rn.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)};rn.prototype.add=function(e){ro(this._last,e)?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))};rn.prototype.toArray=function(){return this._sorted||(this._array.sort(Br.compareByGeneratedPositionsInflated),this._sorted=!0),this._array};Tr.MappingList=rn});var tt=v(Fr=>{p();var Ce=Xn(),k=oe(),sn=nt().ArraySet,io=Hr().MappingList;function O(n){n||(n={}),this._file=k.getArg(n,"file",null),this._sourceRoot=k.getArg(n,"sourceRoot",null),this._skipValidation=k.getArg(n,"skipValidation",!1),this._sources=new sn,this._names=new sn,this._mappings=new io,this._sourcesContents=null}O.prototype._version=3;O.fromSourceMap=function(e){var t=e.sourceRoot,r=new O({file:e.file,sourceRoot:t});return e.eachMapping(function(i){var s={generated:{line:i.generatedLine,column:i.generatedColumn}};i.source!=null&&(s.source=i.source,t!=null&&(s.source=k.relative(t,s.source)),s.original={line:i.originalLine,column:i.originalColumn},i.name!=null&&(s.name=i.name)),r.addMapping(s)}),e.sources.forEach(function(i){var s=i;t!==null&&(s=k.relative(t,i)),r._sources.has(s)||r._sources.add(s);var a=e.sourceContentFor(i);a!=null&&r.setSourceContent(i,a)}),r};O.prototype.addMapping=function(e){var t=k.getArg(e,"generated"),r=k.getArg(e,"original",null),i=k.getArg(e,"source",null),s=k.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,r,i,s),i!=null&&(i=String(i),this._sources.has(i)||this._sources.add(i)),s!=null&&(s=String(s),this._names.has(s)||this._names.add(s)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:r!=null&&r.line,originalColumn:r!=null&&r.column,source:i,name:s})};O.prototype.setSourceContent=function(e,t){var r=e;this._sourceRoot!=null&&(r=k.relative(this._sourceRoot,r)),t!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[k.toSetString(r)]=t):this._sourcesContents&&(delete this._sourcesContents[k.toSetString(r)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))};O.prototype.applySourceMap=function(e,t,r){var i=t;if(t==null){if(e.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);i=e.file}var s=this._sourceRoot;s!=null&&(i=k.relative(s,i));var a=new sn,l=new sn;this._mappings.unsortedForEach(function(c){if(c.source===i&&c.originalLine!=null){var o=e.originalPositionFor({line:c.originalLine,column:c.originalColumn});o.source!=null&&(c.source=o.source,r!=null&&(c.source=k.join(r,c.source)),s!=null&&(c.source=k.relative(s,c.source)),c.originalLine=o.line,c.originalColumn=o.column,o.name!=null&&(c.name=o.name))}var h=c.source;h!=null&&!a.has(h)&&a.add(h);var u=c.name;u!=null&&!l.has(u)&&l.add(u)},this),this._sources=a,this._names=l,e.sources.forEach(function(c){var o=e.sourceContentFor(c);o!=null&&(r!=null&&(c=k.join(r,c)),s!=null&&(c=k.relative(s,c)),this.setSourceContent(c,o))},this)};O.prototype._validateMapping=function(e,t,r,i){if(t&&typeof t.line!="number"&&typeof t.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0&&!t&&!r&&!i)){if(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&r)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:r,original:t,name:i}))}};O.prototype._serializeMappings=function(){for(var e=0,t=1,r=0,i=0,s=0,a=0,l="",c,o,h,u,d=this._mappings.toArray(),m=0,b=d.length;m<b;m++){if(o=d[m],c="",o.generatedLine!==t)for(e=0;o.generatedLine!==t;)c+=";",t++;else if(m>0){if(!k.compareByGeneratedPositionsInflated(o,d[m-1]))continue;c+=","}c+=Ce.encode(o.generatedColumn-e),e=o.generatedColumn,o.source!=null&&(u=this._sources.indexOf(o.source),c+=Ce.encode(u-a),a=u,c+=Ce.encode(o.originalLine-1-i),i=o.originalLine-1,c+=Ce.encode(o.originalColumn-r),r=o.originalColumn,o.name!=null&&(h=this._names.indexOf(o.name),c+=Ce.encode(h-s),s=h)),l+=c}return l};O.prototype._generateSourcesContent=function(e,t){return e.map(function(r){if(!this._sourcesContents)return null;t!=null&&(r=k.relative(t,r));var i=k.toSetString(r);return Object.prototype.hasOwnProperty.call(this._sourcesContents,i)?this._sourcesContents[i]:null},this)};O.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(e.file=this._file),this._sourceRoot!=null&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e};O.prototype.toString=function(){return JSON.stringify(this.toJSON())};Fr.SourceMapGenerator=O});var Gr=v($=>{p();$.GREATEST_LOWER_BOUND=1;$.LEAST_UPPER_BOUND=2;function rt(n,e,t,r,i,s){var a=Math.floor((e-n)/2)+n,l=i(t,r[a],!0);return l===0?a:l>0?e-a>1?rt(a,e,t,r,i,s):s==$.LEAST_UPPER_BOUND?e<r.length?e:-1:a:a-n>1?rt(n,a,t,r,i,s):s==$.LEAST_UPPER_BOUND?a:n<0?-1:n}$.search=function(e,t,r,i){if(t.length===0)return-1;var s=rt(-1,t.length,e,t,r,i||$.GREATEST_LOWER_BOUND);if(s<0)return-1;for(;s-1>=0&&r(t[s],t[s-1],!0)===0;)--s;return s}});var zr=v(Vr=>{p();function it(n,e,t){var r=n[e];n[e]=n[t],n[t]=r}function so(n,e){return Math.round(n+Math.random()*(e-n))}function st(n,e,t,r){if(t<r){var i=so(t,r),s=t-1;it(n,i,r);for(var a=n[r],l=t;l<r;l++)e(n[l],a)<=0&&(s+=1,it(n,s,l));it(n,s+1,l);var c=s+1;st(n,e,t,c-1),st(n,e,c+1,r)}}Vr.quickSort=function(n,e){st(n,e,0,n.length-1)}});var Wr=v(an=>{p();var f=oe(),at=Gr(),le=nt().ArraySet,ao=Xn(),Pe=zr().quickSort;function y(n,e){var t=n;return typeof n=="string"&&(t=f.parseSourceMapInput(n)),t.sections!=null?new I(t,e):new w(t,e)}y.fromSourceMap=function(n,e){return w.fromSourceMap(n,e)};y.prototype._version=3;y.prototype.__generatedMappings=null;Object.defineProperty(y.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}});y.prototype.__originalMappings=null;Object.defineProperty(y.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}});y.prototype._charIsMappingSeparator=function(e,t){var r=e.charAt(t);return r===";"||r===","};y.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")};y.GENERATED_ORDER=1;y.ORIGINAL_ORDER=2;y.GREATEST_LOWER_BOUND=1;y.LEAST_UPPER_BOUND=2;y.prototype.eachMapping=function(e,t,r){var i=t||null,s=r||y.GENERATED_ORDER,a;switch(s){case y.GENERATED_ORDER:a=this._generatedMappings;break;case y.ORIGINAL_ORDER:a=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var l=this.sourceRoot;a.map(function(c){var o=c.source===null?null:this._sources.at(c.source);return o=f.computeSourceURL(l,o,this._sourceMapURL),{source:o,generatedLine:c.generatedLine,generatedColumn:c.generatedColumn,originalLine:c.originalLine,originalColumn:c.originalColumn,name:c.name===null?null:this._names.at(c.name)}},this).forEach(e,i)};y.prototype.allGeneratedPositionsFor=function(e){var t=f.getArg(e,"line"),r={source:f.getArg(e,"source"),originalLine:t,originalColumn:f.getArg(e,"column",0)};if(r.source=this._findSourceIndex(r.source),r.source<0)return[];var i=[],s=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",f.compareByOriginalPositions,at.LEAST_UPPER_BOUND);if(s>=0){var a=this._originalMappings[s];if(e.column===void 0)for(var l=a.originalLine;a&&a.originalLine===l;)i.push({line:f.getArg(a,"generatedLine",null),column:f.getArg(a,"generatedColumn",null),lastColumn:f.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s];else for(var c=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==c;)i.push({line:f.getArg(a,"generatedLine",null),column:f.getArg(a,"generatedColumn",null),lastColumn:f.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s]}return i};an.SourceMapConsumer=y;function w(n,e){var t=n;typeof n=="string"&&(t=f.parseSourceMapInput(n));var r=f.getArg(t,"version"),i=f.getArg(t,"sources"),s=f.getArg(t,"names",[]),a=f.getArg(t,"sourceRoot",null),l=f.getArg(t,"sourcesContent",null),c=f.getArg(t,"mappings"),o=f.getArg(t,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);a&&(a=f.normalize(a)),i=i.map(String).map(f.normalize).map(function(h){return a&&f.isAbsolute(a)&&f.isAbsolute(h)?f.relative(a,h):h}),this._names=le.fromArray(s.map(String),!0),this._sources=le.fromArray(i,!0),this._absoluteSources=this._sources.toArray().map(function(h){return f.computeSourceURL(a,h,e)}),this.sourceRoot=a,this.sourcesContent=l,this._mappings=c,this._sourceMapURL=e,this.file=o}w.prototype=Object.create(y.prototype);w.prototype.consumer=y;w.prototype._findSourceIndex=function(n){var e=n;if(this.sourceRoot!=null&&(e=f.relative(this.sourceRoot,e)),this._sources.has(e))return this._sources.indexOf(e);var t;for(t=0;t<this._absoluteSources.length;++t)if(this._absoluteSources[t]==n)return t;return-1};w.fromSourceMap=function(e,t){var r=Object.create(w.prototype),i=r._names=le.fromArray(e._names.toArray(),!0),s=r._sources=le.fromArray(e._sources.toArray(),!0);r.sourceRoot=e._sourceRoot,r.sourcesContent=e._generateSourcesContent(r._sources.toArray(),r.sourceRoot),r.file=e._file,r._sourceMapURL=t,r._absoluteSources=r._sources.toArray().map(function(m){return f.computeSourceURL(r.sourceRoot,m,t)});for(var a=e._mappings.toArray().slice(),l=r.__generatedMappings=[],c=r.__originalMappings=[],o=0,h=a.length;o<h;o++){var u=a[o],d=new jr;d.generatedLine=u.generatedLine,d.generatedColumn=u.generatedColumn,u.source&&(d.source=s.indexOf(u.source),d.originalLine=u.originalLine,d.originalColumn=u.originalColumn,u.name&&(d.name=i.indexOf(u.name)),c.push(d)),l.push(d)}return Pe(r.__originalMappings,f.compareByOriginalPositions),r};w.prototype._version=3;Object.defineProperty(w.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function jr(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}w.prototype._parseMappings=function(e,t){for(var r=1,i=0,s=0,a=0,l=0,c=0,o=e.length,h=0,u={},d={},m=[],b=[],_,N,S,K,Ee;h<o;)if(e.charAt(h)===";")r++,h++,i=0;else if(e.charAt(h)===",")h++;else{for(_=new jr,_.generatedLine=r,K=h;K<o&&!this._charIsMappingSeparator(e,K);K++);if(N=e.slice(h,K),S=u[N],S)h+=N.length;else{for(S=[];h<K;)ao.decode(e,h,d),Ee=d.value,h=d.rest,S.push(Ee);if(S.length===2)throw new Error("Found a source, but no line and column");if(S.length===3)throw new Error("Found a source and line, but no column");u[N]=S}_.generatedColumn=i+S[0],i=_.generatedColumn,S.length>1&&(_.source=l+S[1],l+=S[1],_.originalLine=s+S[2],s=_.originalLine,_.originalLine+=1,_.originalColumn=a+S[3],a=_.originalColumn,S.length>4&&(_.name=c+S[4],c+=S[4])),b.push(_),typeof _.originalLine=="number"&&m.push(_)}Pe(b,f.compareByGeneratedPositionsDeflated),this.__generatedMappings=b,Pe(m,f.compareByOriginalPositions),this.__originalMappings=m};w.prototype._findMapping=function(e,t,r,i,s,a){if(e[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[r]);if(e[i]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[i]);return at.search(e,t,s,a)};w.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var r=this._generatedMappings[e+1];if(t.generatedLine===r.generatedLine){t.lastGeneratedColumn=r.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}};w.prototype.originalPositionFor=function(e){var t={generatedLine:f.getArg(e,"line"),generatedColumn:f.getArg(e,"column")},r=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",f.compareByGeneratedPositionsDeflated,f.getArg(e,"bias",y.GREATEST_LOWER_BOUND));if(r>=0){var i=this._generatedMappings[r];if(i.generatedLine===t.generatedLine){var s=f.getArg(i,"source",null);s!==null&&(s=this._sources.at(s),s=f.computeSourceURL(this.sourceRoot,s,this._sourceMapURL));var a=f.getArg(i,"name",null);return a!==null&&(a=this._names.at(a)),{source:s,line:f.getArg(i,"originalLine",null),column:f.getArg(i,"originalColumn",null),name:a}}}return{source:null,line:null,column:null,name:null}};w.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(e){return e==null}):!1};w.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;var r=this._findSourceIndex(e);if(r>=0)return this.sourcesContent[r];var i=e;this.sourceRoot!=null&&(i=f.relative(this.sourceRoot,i));var s;if(this.sourceRoot!=null&&(s=f.urlParse(this.sourceRoot))){var a=i.replace(/^file:\/\//,"");if(s.scheme=="file"&&this._sources.has(a))return this.sourcesContent[this._sources.indexOf(a)];if((!s.path||s.path=="/")&&this._sources.has("/"+i))return this.sourcesContent[this._sources.indexOf("/"+i)]}if(t)return null;throw new Error('"'+i+'" is not in the SourceMap.')};w.prototype.generatedPositionFor=function(e){var t=f.getArg(e,"source");if(t=this._findSourceIndex(t),t<0)return{line:null,column:null,lastColumn:null};var r={source:t,originalLine:f.getArg(e,"line"),originalColumn:f.getArg(e,"column")},i=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",f.compareByOriginalPositions,f.getArg(e,"bias",y.GREATEST_LOWER_BOUND));if(i>=0){var s=this._originalMappings[i];if(s.source===r.source)return{line:f.getArg(s,"generatedLine",null),column:f.getArg(s,"generatedColumn",null),lastColumn:f.getArg(s,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}};an.BasicSourceMapConsumer=w;function I(n,e){var t=n;typeof n=="string"&&(t=f.parseSourceMapInput(n));var r=f.getArg(t,"version"),i=f.getArg(t,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new le,this._names=new le;var s={line:-1,column:0};this._sections=i.map(function(a){if(a.url)throw new Error("Support for url field in sections not implemented.");var l=f.getArg(a,"offset"),c=f.getArg(l,"line"),o=f.getArg(l,"column");if(c<s.line||c===s.line&&o<s.column)throw new Error("Section offsets must be ordered and non-overlapping.");return s=l,{generatedOffset:{generatedLine:c+1,generatedColumn:o+1},consumer:new y(f.getArg(a,"map"),e)}})}I.prototype=Object.create(y.prototype);I.prototype.constructor=y;I.prototype._version=3;Object.defineProperty(I.prototype,"sources",{get:function(){for(var n=[],e=0;e<this._sections.length;e++)for(var t=0;t<this._sections[e].consumer.sources.length;t++)n.push(this._sections[e].consumer.sources[t]);return n}});I.prototype.originalPositionFor=function(e){var t={generatedLine:f.getArg(e,"line"),generatedColumn:f.getArg(e,"column")},r=at.search(t,this._sections,function(s,a){var l=s.generatedLine-a.generatedOffset.generatedLine;return l||s.generatedColumn-a.generatedOffset.generatedColumn}),i=this._sections[r];return i?i.consumer.originalPositionFor({line:t.generatedLine-(i.generatedOffset.generatedLine-1),column:t.generatedColumn-(i.generatedOffset.generatedLine===t.generatedLine?i.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}};I.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(e){return e.consumer.hasContentsOfAllSources()})};I.prototype.sourceContentFor=function(e,t){for(var r=0;r<this._sections.length;r++){var i=this._sections[r],s=i.consumer.sourceContentFor(e,!0);if(s)return s}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')};I.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var r=this._sections[t];if(r.consumer._findSourceIndex(f.getArg(e,"source"))!==-1){var i=r.consumer.generatedPositionFor(e);if(i){var s={line:i.line+(r.generatedOffset.generatedLine-1),column:i.column+(r.generatedOffset.generatedLine===i.line?r.generatedOffset.generatedColumn-1:0)};return s}}}return{line:null,column:null}};I.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var r=0;r<this._sections.length;r++)for(var i=this._sections[r],s=i.consumer._generatedMappings,a=0;a<s.length;a++){var l=s[a],c=i.consumer._sources.at(l.source);c=f.computeSourceURL(i.consumer.sourceRoot,c,this._sourceMapURL),this._sources.add(c),c=this._sources.indexOf(c);var o=null;l.name&&(o=i.consumer._names.at(l.name),this._names.add(o),o=this._names.indexOf(o));var h={source:c,generatedLine:l.generatedLine+(i.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(i.generatedOffset.generatedLine===l.generatedLine?i.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:o};this.__generatedMappings.push(h),typeof h.originalLine=="number"&&this.__originalMappings.push(h)}Pe(this.__generatedMappings,f.compareByGeneratedPositionsDeflated),Pe(this.__originalMappings,f.compareByOriginalPositions)};an.IndexedSourceMapConsumer=I});var Kr=v(Ur=>{p();var oo=tt().SourceMapGenerator,on=oe(),lo=/(\r?\n)/,co=10,ce="$$$isSourceNode$$$";function E(n,e,t,r,i){this.children=[],this.sourceContents={},this.line=n??null,this.column=e??null,this.source=t??null,this.name=i??null,this[ce]=!0,r!=null&&this.add(r)}E.fromStringWithSourceMap=function(e,t,r){var i=new E,s=e.split(lo),a=0,l=function(){var d=b(),m=b()||"";return d+m;function b(){return a<s.length?s[a++]:void 0}},c=1,o=0,h=null;return t.eachMapping(function(d){if(h!==null)if(c<d.generatedLine)u(h,l()),c++,o=0;else{var m=s[a]||"",b=m.substr(0,d.generatedColumn-o);s[a]=m.substr(d.generatedColumn-o),o=d.generatedColumn,u(h,b),h=d;return}for(;c<d.generatedLine;)i.add(l()),c++;if(o<d.generatedColumn){var m=s[a]||"";i.add(m.substr(0,d.generatedColumn)),s[a]=m.substr(d.generatedColumn),o=d.generatedColumn}h=d},this),a<s.length&&(h&&u(h,l()),i.add(s.splice(a).join(""))),t.sources.forEach(function(d){var m=t.sourceContentFor(d);m!=null&&(r!=null&&(d=on.join(r,d)),i.setSourceContent(d,m))}),i;function u(d,m){if(d===null||d.source===void 0)i.add(m);else{var b=r?on.join(r,d.source):d.source;i.add(new E(d.originalLine,d.originalColumn,b,m,d.name))}}};E.prototype.add=function(e){if(Array.isArray(e))e.forEach(function(t){this.add(t)},this);else if(e[ce]||typeof e=="string")e&&this.children.push(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);return this};E.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else if(e[ce]||typeof e=="string")this.children.unshift(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);return this};E.prototype.walk=function(e){for(var t,r=0,i=this.children.length;r<i;r++)t=this.children[r],t[ce]?t.walk(e):t!==""&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})};E.prototype.join=function(e){var t,r,i=this.children.length;if(i>0){for(t=[],r=0;r<i-1;r++)t.push(this.children[r]),t.push(e);t.push(this.children[r]),this.children=t}return this};E.prototype.replaceRight=function(e,t){var r=this.children[this.children.length-1];return r[ce]?r.replaceRight(e,t):typeof r=="string"?this.children[this.children.length-1]=r.replace(e,t):this.children.push("".replace(e,t)),this};E.prototype.setSourceContent=function(e,t){this.sourceContents[on.toSetString(e)]=t};E.prototype.walkSourceContents=function(e){for(var t=0,r=this.children.length;t<r;t++)this.children[t][ce]&&this.children[t].walkSourceContents(e);for(var i=Object.keys(this.sourceContents),t=0,r=i.length;t<r;t++)e(on.fromSetString(i[t]),this.sourceContents[i[t]])};E.prototype.toString=function(){var e="";return this.walk(function(t){e+=t}),e};E.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},r=new oo(e),i=!1,s=null,a=null,l=null,c=null;return this.walk(function(o,h){t.code+=o,h.source!==null&&h.line!==null&&h.column!==null?((s!==h.source||a!==h.line||l!==h.column||c!==h.name)&&r.addMapping({source:h.source,original:{line:h.line,column:h.column},generated:{line:t.line,column:t.column},name:h.name}),s=h.source,a=h.line,l=h.column,c=h.name,i=!0):i&&(r.addMapping({generated:{line:t.line,column:t.column}}),s=null,i=!1);for(var u=0,d=o.length;u<d;u++)o.charCodeAt(u)===co?(t.line++,t.column=0,u+1===d?(s=null,i=!1):i&&r.addMapping({source:h.source,original:{line:h.line,column:h.column},generated:{line:t.line,column:t.column},name:h.name})):t.column++}),this.walkSourceContents(function(o,h){r.setSourceContent(o,h)}),{code:t.code,map:r}};Ur.SourceNode=E});var Qr=v(ln=>{p();ln.SourceMapGenerator=tt().SourceMapGenerator;ln.SourceMapConsumer=Wr().SourceMapConsumer;ln.SourceNode=Kr().SourceNode});var Zr=v((cn,Xr)=>{"use strict";p();cn.__esModule=!0;var lt=x(),ee=void 0;try{(typeof define!="function"||!define.amd)&&(Jr=Qr(),ee=Jr.SourceNode)}catch{}var Jr;ee||(ee=function(n,e,t,r){this.src="",r&&this.add(r)},ee.prototype={add:function(e){lt.isArray(e)&&(e=e.join("")),this.src+=e},prepend:function(e){lt.isArray(e)&&(e=e.join("")),this.src=e+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}});function ot(n,e,t){if(lt.isArray(n)){for(var r=[],i=0,s=n.length;i<s;i++)r.push(e.wrap(n[i],t));return r}else if(typeof n=="boolean"||typeof n=="number")return n+"";return n}function Yr(n){this.srcFile=n,this.source=[]}Yr.prototype={isEmpty:function(){return!this.source.length},prepend:function(e,t){this.source.unshift(this.wrap(e,t))},push:function(e,t){this.source.push(this.wrap(e,t))},merge:function(){var e=this.empty();return this.each(function(t){e.add(["  ",t,`
`])}),e},each:function(e){for(var t=0,r=this.source.length;t<r;t++)e(this.source[t])},empty:function(){var e=this.currentLocation||{start:{}};return new ee(e.start.line,e.start.column,this.srcFile)},wrap:function(e){var t=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return e instanceof ee?e:(e=ot(e,this,t),new ee(t.start.line,t.start.column,this.srcFile,e))},functionCall:function(e,t,r){return r=this.generateList(r),this.wrap([e,t?"."+t+"(":"(",r,")"])},quotedString:function(e){return'"'+(e+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var t=this,r=[];Object.keys(e).forEach(function(s){var a=ot(e[s],t);a!=="undefined"&&r.push([t.quotedString(s),":",a])});var i=this.generateList(r);return i.prepend("{"),i.add("}"),i},generateList:function(e){for(var t=this.empty(),r=0,i=e.length;r<i;r++)r&&t.add(","),t.add(ot(e[r],this));return t},generateArray:function(e){var t=this.generateList(e);return t.prepend("["),t.add("]"),t}};cn.default=Yr;Xr.exports=cn.default});var ri=v((un,ti)=>{"use strict";p();un.__esModule=!0;function ni(n){return n&&n.__esModule?n:{default:n}}var $r=We(),uo=M(),ct=ni(uo),ho=x(),po=Zr(),ei=ni(po);function ue(n){this.value=n}function he(){}he.prototype={nameLookup:function(e,t){return this.internalNameLookup(e,t)},depthedLookup:function(e){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(e),")"]},compilerInfo:function(){var e=$r.COMPILER_REVISION,t=$r.REVISION_CHANGES[e];return[e,t]},appendToBuffer:function(e,t,r){return ho.isArray(e)||(e=[e]),e=this.source.wrap(e,t),this.environment.isSimple?["return ",e,";"]:r?["buffer += ",e,";"]:(e.appendToBuffer=!0,e)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(e,t){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",e,",",JSON.stringify(t),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(e,t,r,i){this.environment=e,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!r,this.context=r||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(e,t),this.useDepths=this.useDepths||e.useDepths||e.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||e.useBlockParams;var s=e.opcodes,a=void 0,l=void 0,c=void 0,o=void 0;for(c=0,o=s.length;c<o;c++)a=s[c],this.source.currentLocation=a.loc,l=l||a.loc,this[a.opcode].apply(this,a.args);if(this.source.currentLocation=l,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new ct.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),i?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var h=this.createFunctionContext(i);if(this.isChild)return h;var u={compiler:this.compilerInfo(),main:h};this.decorators&&(u.main_d=this.decorators,u.useDecorators=!0);var d=this.context,m=d.programs,b=d.decorators;for(c=0,o=m.length;c<o;c++)m[c]&&(u[c]=m[c],b[c]&&(u[c+"_d"]=b[c],u.useDecorators=!0));return this.environment.usePartial&&(u.usePartial=!0),this.options.data&&(u.useData=!0),this.useDepths&&(u.useDepths=!0),this.useBlockParams&&(u.useBlockParams=!0),this.options.compat&&(u.compat=!0),i?u.compilerOptions=this.options:(u.compiler=JSON.stringify(u.compiler),this.source.currentLocation={start:{line:1,column:0}},u=this.objectLiteral(u),t.srcName?(u=u.toStringWithSourceMap({file:t.destName}),u.map=u.map&&u.map.toString()):u=u.toString()),u},preamble:function(){this.lastContext=0,this.source=new ei.default(this.options.srcName),this.decorators=new ei.default(this.options.srcName)},createFunctionContext:function(e){var t=this,r="",i=this.stackVars.concat(this.registers.list);i.length>0&&(r+=", "+i.join(", "));var s=0;Object.keys(this.aliases).forEach(function(c){var o=t.aliases[c];o.children&&o.referenceCount>1&&(r+=", alias"+ ++s+"="+c,o.children[0]="alias"+s)}),this.lookupPropertyFunctionIsUsed&&(r+=", "+this.lookupPropertyFunctionVarDeclaration());var a=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&a.push("blockParams"),this.useDepths&&a.push("depths");var l=this.mergeSource(r);return e?(a.push(l),Function.apply(this,a)):this.source.wrap(["function(",a.join(","),`) {
  `,l,"}"])},mergeSource:function(e){var t=this.environment.isSimple,r=!this.forceBuffer,i=void 0,s=void 0,a=void 0,l=void 0;return this.source.each(function(c){c.appendToBuffer?(a?c.prepend("  + "):a=c,l=c):(a&&(s?a.prepend("buffer += "):i=!0,l.add(";"),a=l=void 0),s=!0,t||(r=!1))}),r?a?(a.prepend("return "),l.add(";")):s||this.source.push('return "";'):(e+=", buffer = "+(i?"":this.initializeBuffer()),a?(a.prepend("return buffer + "),l.add(";")):this.source.push("return buffer;")),e&&this.source.prepend("var "+e.substring(2)+(i?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(e){var t=this.aliasable("container.hooks.blockHelperMissing"),r=[this.contextName(0)];this.setupHelperArgs(e,0,r);var i=this.popStack();r.splice(1,0,i),this.push(this.source.functionCall(t,"call",r))},ambiguousBlockValue:function(){var e=this.aliasable("container.hooks.blockHelperMissing"),t=[this.contextName(0)];this.setupHelperArgs("",0,t,!0),this.flushInline();var r=this.topStack();t.splice(1,0,r),this.pushSource(["if (!",this.lastHelper,") { ",r," = ",this.source.functionCall(e,"call",t),"}"])},appendContent:function(e){this.pendingContent?e=this.pendingContent+e:this.pendingLocation=this.source.currentLocation,this.pendingContent=e},append:function(){if(this.isInline())this.replaceStack(function(t){return[" != null ? ",t,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var e=this.popStack();this.pushSource(["if (",e," != null) { ",this.appendToBuffer(e,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,t,r,i){var s=0;!i&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(e[s++])):this.pushContext(),this.resolvePath("context",e,s,t,r)},lookupBlockParam:function(e,t){this.useBlockParams=!0,this.push(["blockParams[",e[0],"][",e[1],"]"]),this.resolvePath("context",t,1)},lookupData:function(e,t,r){e?this.pushStackLiteral("container.data(data, "+e+")"):this.pushStackLiteral("data"),this.resolvePath("data",t,0,!0,r)},resolvePath:function(e,t,r,i,s){var a=this;if(this.options.strict||this.options.assumeObjects){this.push(fo(this.options.strict&&s,this,t,r,e));return}for(var l=t.length;r<l;r++)this.replaceStack(function(c){var o=a.nameLookup(c,t[r],e);return i?[" && ",o]:[" != null ? ",o," : ",c]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(e,t){this.pushContext(),this.pushString(t),t!=="SubExpression"&&(typeof e=="string"?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(e){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(e?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(e.ids)),this.stringParams&&(this.push(this.objectLiteral(e.contexts)),this.push(this.objectLiteral(e.types))),this.push(this.objectLiteral(e.values))},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){e!=null?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},registerDecorator:function(e,t){var r=this.nameLookup("decorators",t,"decorator"),i=this.setupHelperArgs(t,e);this.decorators.push(["fn = ",this.decorators.functionCall(r,"",["fn","props","container",i])," || fn;"])},invokeHelper:function(e,t,r){var i=this.popStack(),s=this.setupHelper(e,t),a=[];r&&a.push(s.name),a.push(i),this.options.strict||a.push(this.aliasable("container.hooks.helperMissing"));var l=["(",this.itemsSeparatedBy(a,"||"),")"],c=this.source.functionCall(l,"call",s.callParams);this.push(c)},itemsSeparatedBy:function(e,t){var r=[];r.push(e[0]);for(var i=1;i<e.length;i++)r.push(t,e[i]);return r},invokeKnownHelper:function(e,t){var r=this.setupHelper(e,t);this.push(this.source.functionCall(r.name,"call",r.callParams))},invokeAmbiguous:function(e,t){this.useRegister("helper");var r=this.popStack();this.emptyHash();var i=this.setupHelper(0,e,t),s=this.lastHelper=this.nameLookup("helpers",e,"helper"),a=["(","(helper = ",s," || ",r,")"];this.options.strict||(a[0]="(helper = ",a.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",a,i.paramsInit?["),(",i.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",i.callParams)," : helper))"])},invokePartial:function(e,t,r){var i=[],s=this.setupParams(t,1,i);e&&(t=this.popStack(),delete s.name),r&&(s.indent=JSON.stringify(r)),s.helpers="helpers",s.partials="partials",s.decorators="container.decorators",e?i.unshift(t):i.unshift(this.nameLookup("partials",t,"partial")),this.options.compat&&(s.depths="depths"),s=this.objectLiteral(s),i.push(s),this.push(this.source.functionCall("container.invokePartial","",i))},assignToHash:function(e){var t=this.popStack(),r=void 0,i=void 0,s=void 0;this.trackIds&&(s=this.popStack()),this.stringParams&&(i=this.popStack(),r=this.popStack());var a=this.hash;r&&(a.contexts[e]=r),i&&(a.types[e]=i),s&&(a.ids[e]=s),a.values[e]=t},pushId:function(e,t,r){e==="BlockParam"?this.pushStackLiteral("blockParams["+t[0]+"].path["+t[1]+"]"+(r?" + "+JSON.stringify("."+r):"")):e==="PathExpression"?this.pushString(t):e==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:he,compileChildren:function(e,t){for(var r=e.children,i=void 0,s=void 0,a=0,l=r.length;a<l;a++){i=r[a],s=new this.compiler;var c=this.matchExistingProgram(i);if(c==null){this.context.programs.push("");var o=this.context.programs.length;i.index=o,i.name="program"+o,this.context.programs[o]=s.compile(i,t,this.context,!this.precompile),this.context.decorators[o]=s.decorators,this.context.environments[o]=i,this.useDepths=this.useDepths||s.useDepths,this.useBlockParams=this.useBlockParams||s.useBlockParams,i.useDepths=this.useDepths,i.useBlockParams=this.useBlockParams}else i.index=c.index,i.name="program"+c.index,this.useDepths=this.useDepths||c.useDepths,this.useBlockParams=this.useBlockParams||c.useBlockParams}},matchExistingProgram:function(e){for(var t=0,r=this.context.environments.length;t<r;t++){var i=this.context.environments[t];if(i&&i.equals(e))return i}},programExpression:function(e){var t=this.environment.children[e],r=[t.index,"data",t.blockParams];return(this.useBlockParams||this.useDepths)&&r.push("blockParams"),this.useDepths&&r.push("depths"),"container.program("+r.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},push:function(e){return e instanceof ue||(e=this.source.wrap(e)),this.inlineStack.push(e),e},pushStackLiteral:function(e){this.push(new ue(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),e&&this.source.push(e)},replaceStack:function(e){var t=["("],r=void 0,i=void 0,s=void 0;if(!this.isInline())throw new ct.default("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof ue)r=[a.value],t=["(",r],s=!0;else{i=!0;var l=this.incrStack();t=["((",this.push(l)," = ",a,")"],r=this.topStack()}var c=e.call(this,r);s||this.popStack(),i&&this.stackSlot--,this.push(t.concat(c,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;this.inlineStack=[];for(var t=0,r=e.length;t<r;t++){var i=e[t];if(i instanceof ue)this.compileStack.push(i);else{var s=this.incrStack();this.pushSource([s," = ",i,";"]),this.compileStack.push(s)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),r=(t?this.inlineStack:this.compileStack).pop();if(!e&&r instanceof ue)return r.value;if(!t){if(!this.stackSlot)throw new ct.default("Invalid stack pop");this.stackSlot--}return r},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,t=e[e.length-1];return t instanceof ue?t.value:t},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return this.source.quotedString(e)},objectLiteral:function(e){return this.source.objectLiteral(e)},aliasable:function(e){var t=this.aliases[e];return t?(t.referenceCount++,t):(t=this.aliases[e]=this.source.wrap(e),t.aliasable=!0,t.referenceCount=1,t)},setupHelper:function(e,t,r){var i=[],s=this.setupHelperArgs(t,e,i,r),a=this.nameLookup("helpers",t,"helper"),l=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:i,paramsInit:s,name:a,callParams:[l].concat(i)}},setupParams:function(e,t,r){var i={},s=[],a=[],l=[],c=!r,o=void 0;c&&(r=[]),i.name=this.quotedString(e),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack());var h=this.popStack(),u=this.popStack();(u||h)&&(i.fn=u||"container.noop",i.inverse=h||"container.noop");for(var d=t;d--;)o=this.popStack(),r[d]=o,this.trackIds&&(l[d]=this.popStack()),this.stringParams&&(a[d]=this.popStack(),s[d]=this.popStack());return c&&(i.args=this.source.generateArray(r)),this.trackIds&&(i.ids=this.source.generateArray(l)),this.stringParams&&(i.types=this.source.generateArray(a),i.contexts=this.source.generateArray(s)),this.options.data&&(i.data="data"),this.useBlockParams&&(i.blockParams="blockParams"),i},setupHelperArgs:function(e,t,r,i){var s=this.setupParams(e,t,r);return s.loc=JSON.stringify(this.source.currentLocation),s=this.objectLiteral(s),i?(this.useRegister("options"),r.push("options"),["options=",s]):r?(r.push(s),""):s}};(function(){for(var n="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),e=he.RESERVED_WORDS={},t=0,r=n.length;t<r;t++)e[n[t]]=!0})();he.isValidJavaScriptVariableName=function(n){return!he.RESERVED_WORDS[n]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(n)};function fo(n,e,t,r,i){var s=e.popStack(),a=t.length;for(n&&a--;r<a;r++)s=e.nameLookup(s,t[r],i);return n?[e.aliasable("container.strict"),"(",s,", ",e.quotedString(t[r]),", ",JSON.stringify(e.source.currentLocation)," )"]:s}un.default=he;ti.exports=un.default});var ai=v((hn,si)=>{"use strict";p();hn.__esModule=!0;function xe(n){return n&&n.__esModule?n:{default:n}}var mo=or(),go=xe(mo),vo=Hn(),bo=xe(vo),ut=_r(),ht=Cr(),yo=ri(),_o=xe(yo),ko=Gn(),So=xe(ko),wo=Rn(),Co=xe(wo),Po=go.default.create;function ii(){var n=Po();return n.compile=function(e,t){return ht.compile(e,t,n)},n.precompile=function(e,t){return ht.precompile(e,t,n)},n.AST=bo.default,n.Compiler=ht.Compiler,n.JavaScriptCompiler=_o.default,n.Parser=ut.parser,n.parse=ut.parse,n.parseWithoutProcessing=ut.parseWithoutProcessing,n}var pe=ii();pe.create=ii;Co.default(pe);pe.Visitor=So.default;pe.default=pe;hn.default=pe;si.exports=hn.default});var bi={};bt(bi,{createReadStream:()=>gi,createWriteStream:()=>vi,default:()=>xo,existsSync:()=>ui,lstatSync:()=>di,mkdirSync:()=>pi,readFileSync:()=>li,readdirSync:()=>ci,rmdirSync:()=>mi,statSync:()=>ft,unlinkSync:()=>fi,writeFileSync:()=>hi});function dt(n){return String(n).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function oi(n){var e=dt(n);if(pn[e]!==void 0)return pn[e];for(var t=Object.keys(pn),r=0;r<t.length;r++)if(e.endsWith("/"+t[r])||e===t[r])return pn[t[r]]}function pt(n){var e=dt(n);if((e===""||e===".")&&de["."]!==void 0)return de["."];if(de[e]!==void 0)return de[e];for(var t=Object.keys(de),r=0;r<t.length;r++)if(e.endsWith("/"+t[r])||e===t[r])return de[t[r]]}var pn,de,li,ci,ui,hi,pi,ft,di,fi,mi,gi,vi,xo,yi=yn(()=>{"use strict";p();pn={"package.json":`{
  "name": "jsonresume-theme-stackoverflow-ru",
  "version": "3.4.1",
  "description": "Translation of jsonresume-theme-stackoverflow into Russian",
  "author": "Francesco Esposito, translation by Sam Komarov",
  "repository": {
    "type": "git",
    "url": "https://github.com/k0marov/jsonresume-theme-stackoverflow-ru"
  },
  "license": "MIT",
  "main": "index.js",
  "dependencies": {
    "handlebars": "^4.7.7",
    "markdown-it": "^13.0.1",
    "moment": "^2.29.2"
  }
}
`,"public/index.html":`<!doctype html>
<html>
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>\u0421\u0435\u043C\u0451\u043D \u041A\u043E\u043C\u0430\u0440\u043E\u0432</title>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
  <style>
  /********************************************
* 	reset from
* 	http://meyerweb.com/eric/tools/css/reset/
*******************************************/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/****************
*	COMMONS
****************/

body,
html {
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 13px;
  color: #40484f;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.46153846;
  text-align: left;
}

p {
  display: block;
}

a {
  color: #0095ff;
  text-decoration: none;
}

a:hover {
  color: #0c65a5;
  text-decoration: underline;
}

li {
  list-style-type: square;
  list-style-position: outside;
  margin-left: 1.3em;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.67rem;
}

h3 {
  font-size: 1.27rem;
}

em {
  color: #757575;
}

blockquote {
  margin-bottom: 1em;
}

strong {
  font-weight: 700;
}

/* main container */

#resume {
  padding: 1.5rem;
}

/* every section wrapper */

.section {
  margin-bottom: 1rem;
}

section .location {
  margin-right: 0.5em;
  color: #606d76;
  font-weight: 700;
}

#contact {
  margin-top: 0.5rem;
}

#profiles .item {
  padding: 0;
}

#header > #profiles,
#header > #contact,
#skills,
#languages,
#interests {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}

#header > div {
  line-height: 1.5;
}

#header > div > div {
  margin-right: 1.2em;
}

#header h1.name {
  font-size: 2.8rem;
  font-weight: 100;
  line-height: 100%;
}

#header h2.label {
  color: #202931;
  font-size: 1.47rem;
  font-weight: 300;
}

#header .image {
  width: 11em;
  float: right;
  border-radius: 4px;
}

.main-summary {
  background: #f1f8ff;
  padding: 1.2em 1em;
  margin-top: 1rem;
}

.main-summary p {
  margin: 0;
}

.section-title {
  display: inline-block;
  background: #fff;
  padding: 0 1em 0.3em 0;
  color: #ff6d1f;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  font-size: 0.9rem;
}

.section > header {
  position: relative;
}

.fa {
  margin-right: 0.25em;
}

.section > header::after {
  position: absolute;
  left: 0;
  top: 0.7em;
  height: 1px;
  background: #ccc;
  content: "";
  width: 100%;
  z-index: -100;
  display: block;
}

.section.main-summary > section {
  margin: 0;
}

.section > section > header {
  font-size: 1.38rem;
  position: relative;
  margin-top: 0.7em;
}

.section > section > header:first-of-type {
  margin: 0;
}

.section > section > header .space-left {
  position: absolute;
  left: -1.56rem;
  top: 5px;
  color: #aaa;
  line-height: 1;
  opacity: 0;
}

.position,
.company,
.organization,
.institution,
.date,
.area,
.studyType,
.title,
.awarder {
  display: inline;
}

.position,
.studyType,
.area,
.title,
.language,
.name {
  font-weight: 600;
}

.company::before,
.institution::before,
.organization::before,
.awarder::before {
  content: "at ";
}

.company,
.institution,
.organization,
.awarder {
  color: #606d76;
  font-weight: 400;
}

.section header .date {
  display: block;
  font-size: 1rem;
  padding: 0.1em 0;
  color: #606d76;
  font-weight: 400;
}

.keywords,
.courses {
  margin: 0.5em 0;
}

.keywords li,
.courses li {
  display: inline-block;
  margin: 2px 2px 2px 0;
  padding: 4px 5px 5px;
  font-size: 0.9rem;
  line-height: 1;
  color: #3e6d8e;
  background-color: #dfeaf1;
  border: 0 solid #dfeaf1;
  white-space: nowrap;
}

.keywords li:hover,
.courses li:hover {
  background: #dfeaf0;
}

.highlights {
  margin: 1em 0 0 0;
}

.highlights > li > p {
  margin-bottom: 0.5em;
}

.item {
  overflow: hidden;
}

.gpa {
  clear: both;
  padding-bottom: 0.5em;
}

.fa.social {
  font-size: 1.1em;
}

/* Social Media Brand Colors */

.google-plus {
  color: #dd4b39;
}

.tumblr {
  color: #32506d;
}

.foursquare {
  color: #0072b1;
}

.facebook {
  color: #3b5998;
}

.linkedin {
  color: #007bb6;
}

.pinterest {
  color: #cb2027;
}

.dribbble {
  color: #ea4c89;
}

.instagram {
  color: #517fa4;
}

.twitter {
  color: #00aced;
}

.soundcloud {
  color: #ff3a00;
}

.wordpress {
  color: #21759b;
}

.youtube {
  color: #bb0000;
}

.github {
  color: #171515;
}

.stack-overflow {
  color: #828386;
  position: relative;
}

.flickr {
  color: #ff0084;
}

.reddit {
  color: #ff4500;
}

.hacker-news {
  color: #ff6600;
}

.stack-overflow::after {
  position: absolute;
  left: 0;
  content: "\\f16c";
  color: #f68a1f;
  overflow: hidden;
  height: 100%;
}

.telegram {
  color: #2291c3;
}

#languages .item,
#skills .item,
#interests .item {
  width: 15em;
  padding: 0 0.5em 0.5em 0;
  border-bottom: none;
}

#skills .item {
  width: 16em;
}

#skills .item .keywords {
  width: 15em;
}

/* Skill chart */

.level {
  margin-bottom: 0.5em;
}

.level em {
  padding-left: 0.2em;
}

.level .bar {
  border: 1px solid #ddd;
  display: block;
  width: 10em;
  height: 5px;
  position: relative;
}

.level .bar::after {
  position: absolute;
  content: " ";
  top: 0;
  left: 0;
  background: black;
  height: 5px;
}

.level.beginner .bar::after {
  background: #eb5f51;
  width: 2.5em;
}

.level.intermediate .bar::after {
  background: #ffdf1f;
  width: 5em;
}

.level.advanced .bar::after,
.level.fluent .bar::after {
  background: #5cb85c;
  width: 7.5em;
}

.level.master .bar::after,
.level.native.speaker .bar::after {
  background: #59c596;
  width: 10em;
}

#references .item {
  padding-left: 0.5em;
  border-left: 5px solid #ff6d1f;
}

.section > section > section {
  margin-bottom: 1rem;
}

/******************
*	HELPER CLASSES
******************/

.clear::after {
  content: "";
  display: table;
  clear: both;
}

.display {
  display: block;
  opacity: 1 !important;
}

/****************
*		TABLET
****************/

@media screen and (min-width: 602px) {
  #resume {
    width: 80%;
    margin: 0 auto;
  }
  .section header .date {
    float: right;
    font-weight: 600;
    color: #000;
  }
}

/****************
*		LAPTOP
****************/

@media screen and (min-width: 1025px) {
  li {
    margin-left: 1.5em;
  }
  #resume {
    width: 820px;
    margin: 2rem auto;
  }
  .section > section > header .space-left {
    opacity: 1;
    cursor: pointer;
  }
  .section > section:not(.main-summary) {
    margin-left: 1.67rem;
  }
  .company::before,
  .institution::before,
  .organization::before,
  .awarder::before {
    content: "| ";
  }
  .header-left {
    float: left;
    width: 70%;
    word-break: normal;
  }
  .section header .date {
    padding: 0.2em;
  }
  .display {
    display: none;
  }
  .display:not(.none) {
    display: block;
  }
}

@media print {
  #profiles a:not(.hide-href-print)::after{
    content: " (" attr(href) ") ";
  }
  #resume {
    margin: 0.1em;
    padding: 0.1em;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    line-height: 1.25;
  }
  @page {
    margin: 1cm 1.4cm;
  }
  .item-count {
    display: none;
  }
  .company::before,
  .institution::before,
  .organization::before,
  .awarder::before {
    content: "at ";
  }
  .main-summary {
    padding: 0;
    background: transparent;
  }
  .section {
    margin: 0.8rem 0;
    padding: 0;
  }
  .section header {
    padding-bottom: 0.15rem;
  }
  .section .location {
    padding-bottom: 0.15rem;
  }
  .section > section > section {
    margin: 0 0 1em 0;
  }
  .section > section > section:last-of-type {
    margin: 0;
  }
  .stack-overflow::after {
    content: "";
  }
  .fa.social {
    color: #828386;
  }
  ul {
    margin-top: 0.4em;
  }
  ul,
  li {
    padding: 0;
  }
  ul.keywords li,
  ul.courses li {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    background: transparent;
  }
  ul.keywords li::after,
  ul.courses li::after {
    padding: 0 0 0 0.1rem;
    content: " |";
  }
  ul.keywords::before,
  ul.courses::before {
    font-size: 0.8rem;
    font-weight: 600;
  }
  #skills .item {
    width: calc(100% / 3);
    padding: 0;
  }
  .highlights {
    margin: 0.5em 0 0 0;
  }
  ul.keywords::before {
    content: "Skills acquired: ";
  }
  #skills .keywords::before {
    content: none;
  }
  .section p {
    margin: 0;
    padding: 0;
  }
  ul.courses::before {
    content: "Major courses: ";
  }
  ul.keywords li:last-of-type::after,
  ul.courses li:last-of-type::after {
    content: "";
  }
  .level em {
    font-style: normal;
    padding: 0.1em 0;
  }
  .level .bar {
    display: none;
  }
  #profiles .item {
    padding: 0;
  }
  .item.display {
    display: block;
    opacity: 1 !important;
  }
  .fa-map-marker-alt:before {
    padding-left: 0.1em;
  }
}

  </style>
  
  </head>
  <body>
  
  <div id="resume">
    	<header id="header" class="clear">
    		<img class="image" src="https://skomarov.com/static/photos/photo.png" alt="\u0421\u0435\u043C\u0451\u043D \u041A\u043E\u043C\u0430\u0440\u043E\u0432" />
    		<div class="middle">
    			<h1 class="name">\u0421\u0435\u043C\u0451\u043D \u041A\u043E\u043C\u0430\u0440\u043E\u0432</h1>
    			<h2 class="label">\u0411\u044D\u043A\u0435\u043D\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A, Flutter \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A</h2>
    		</div>
    
    		<span class="location">
    			<span class="city">\u0424\u0422 \u0421\u0438\u0440\u0438\u0443\u0441,</span>
    			<span class="countryCode">\u0420\u043E\u0441\u0441\u0438\u044F</span>
    		</span>
    
    
    		<div id="contact">
    			<div class="email">
    				<span class="far fa-envelope"></span>
    				<a class="hide-href-print" href="mailto:sam@skomarov.com">sam@skomarov.com</a>
    			</div>
    			<div class="phone">
    				<span class="fas fa-mobile-alt"></span>
    				<a class="hide-href-print" href="tel:+7 (952) 974 61 29">+7 (952) 974 61 29</a>
    			</div>
    		</div>
    
    		<div id="profiles">
    			<div class="item">
    				<div class="username">
    					<span class="fab fa-github github social"></span>
    					<span class="url">
    						<a target="_blank" href="https://github.com/k0marov">k0marov</a>
    					</span>
    				</div>
    			</div>
    			<div class="item">
    				<div class="username">
    					<span class="fab fa-gitlab gitlab social"></span>
    					<span class="url">
    						<a target="_blank" href="https://gitlab.com/samkomarov">samkomarov</a>
    					</span>
    				</div>
    			</div>
    			<div class="item">
    				<div class="username">
    					<span class="fab fa-telegram telegram social"></span>
    					<span class="url">
    						<a target="_blank" href="https://t.me/samkomarov">samkomarov</a>
    					</span>
    				</div>
    			</div>
    		</div>
    	</header>
    
    	<section class="section">
    		<section class="main-summary">
    			<div><p><p>\u0417\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043D \u0432 \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445, \u043B\u044E\u0431\u043B\u044E \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0438 \u0438\u0437\u0443\u0447\u0430\u0442\u044C \u043D\u043E\u0432\u043E\u0435. \u041D\u0430\u0447\u0430\u043B \u0441\u0432\u043E\u0439 \u043F\u0443\u0442\u044C \u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0441 2019-\u0433\u043E \u0433\u043E\u0434\u0430. \u0420\u0430\u0431\u043E\u0442\u0430\u043B \u043D\u0430 \u0444\u0440\u0438\u043B\u0430\u043D\u0441\u0435, \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044F \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430 Flutter (\u0431\u044D\u043A \u043D\u0430 Go, Django \u0438\u043B\u0438 Firebase, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430) \u0438 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C-\u0431\u043E\u0442\u044B \u043D\u0430 Python. \u0421\u0435\u0439\u0447\u0430\u0441 \u0440\u0430\u0431\u043E\u0442\u0430\u044E \u0432 \u0418\u0422-\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Golang-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C \u0438 \u0441\u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u0430\u043D \u043D\u0430 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0438 \u0432 Backend.</p></p></div>
    		</section>
    	</section>
    
    <section class="section">\r
    	<header>\r
    		<h2 class='section-title'>\u041D\u0430\u0432\u044B\u043A\u0438</h2>\r
    	</header>\r
    	<section id="skills">\r
    		<div class="item">\r
    			<h3 class="name">\r
    				\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438\r
    			</h3>\r
    			 			<ul class="keywords">\r
    				<li>Go</li>\r
    				<li>Python</li>\r
    				<li>Django</li>\r
    				<li>Flutter</li>\r
    				<li>Dart</li>\r
    				<li>SQL</li>\r
    			</ul>\r
    		</div>\r
    		<div class="item">\r
    			<h3 class="name">\r
    				\u0421\u043E\u043F\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438\r
    			</h3>\r
    			 			<ul class="keywords">\r
    				<li>Linux</li>\r
    				<li>Bash</li>\r
    				<li>Docker</li>\r
    				<li>Git</li>\r
    				<li>MongoDB</li>\r
    				<li>Redis</li>\r
    				<li>Firebase</li>\r
    			</ul>\r
    		</div>\r
    		<div class="item">\r
    			<h3 class="name">\r
    				\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\r
    			</h3>\r
    			 			<ul class="keywords">\r
    				<li>ML</li>\r
    				<li>HTML/CSS/JS</li>\r
    				<li>C++</li>\r
    				<li>\u0427\u0438\u0441\u0442\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430</li>\r
    				<li>TDD</li>\r
    			</ul>\r
    		</div>\r
    	</section>\r
    </section>\r
    <section class="section">
      <header>
        <h2 class='section-title'>\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B <span class="item-count">(2)</span></h2>
      </header>
    
      <section id="work">
        <section class="work-item">
            <label for="work-item-0"></label>
    
            <header class="clear">
              <div class="date">
                <span class="startDate">\u0438\u044E\u043B\u044C 2023</span>
                <span class="endDate">- \u043E\u043A\u0442. 2023</span>
              </div>
              <div class="position">Backend Go \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A, Intern</div>
                <div class="company">\u041E\u0426\u0420\u0412 (\u0420\u0416\u0414)</div>
            </header>
    
          <span class="location">
            <span class="fas fa-map-marker-alt"></span>
            <span class="location">\u0421\u0438\u0440\u0438\u0443\u0441, \u0420\u043E\u0441\u0441\u0438\u044F</span>
          </span>
           <div class="item" id="work-item">
            <div class="summary"><p><p>\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u043E\u0448\u0451\u043B \u0441\u0442\u0430\u0436\u0438\u0440\u043E\u0432\u043A\u0443 \u0432 \u043E\u0442\u0434\u0435\u043B\u0435 \u0411\u043B\u043E\u043A\u0447\u0435\u0439\u043D, \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044F \u043C\u0438\u043A\u0440\u043E\u0441\u0435\u0440\u0432\u0438\u0441\u044B \u043D\u0430 Go, \u0445\u043E\u0440\u043E\u0448\u043E \u0441\u0435\u0431\u044F \u043F\u0440\u043E\u044F\u0432\u0438\u043B \u0438 \u0431\u044B\u043B \u043F\u0440\u0438\u043D\u044F\u0442 \u0432 \u0448\u0442\u0430\u0442.</p></p></div>
            <ul class="highlights">
              <li><p><p>\u0418\u0437\u0443\u0447\u0438\u043B \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438</p></p></li>
              <li><p><p>\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u0441\u0435\u0440\u0432\u0438\u0441\u0430 API Gateway \u043D\u0430 Go, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0443\u044E \u0443\u043C\u043D\u043E\u0435 \u043A\u0435\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044E \u043A\u043E\u043D\u0444\u0438\u0433\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u0441\u044B\u043B\u043E\u043A \u043D\u0430 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0438 \u043C\u0438\u043A\u0440\u043E\u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432 \u043F\u0443\u0442\u0451\u043C \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0438\u0445 \u0441\u0432\u0430\u0433\u0433\u0435\u0440\u043E\u0432. \u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0445\u043E\u0440\u043E\u0448\u043E \u0441\u0435\u0431\u044F \u043F\u0440\u043E\u044F\u0432\u0438\u043B\u0430 \u0438 \u0431\u044B\u043B\u0430 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430 \u0432 \u043E\u0441\u043D\u043E\u0432\u044B\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043E\u0442\u0434\u0435\u043B\u0430.</p></p></li>
              <li><p><p>\u041F\u0440\u043E\u0432\u0451\u043B \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u043D\u044B\u0439 \u0440\u0435\u0444\u0430\u043A\u0442\u043E\u0440\u0438\u043D\u0433 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432</p></p></li>
              <li><p><p>\u041D\u0430\u043F\u0438\u0441\u0430\u043B \u0441\u0435\u0440\u0432\u0438\u0441 E2E-\u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0435\u0439 \u0431\u043E\u043B\u0435\u0435 20 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432, \u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u043B \u0442\u0435\u0441\u0442\u044B \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432</p></p></li>
              <li><p><p>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B \u0431\u043B\u043E\u043A\u0447\u0435\u0439\u043D-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438: Hyperledger Fabric, Tendermint, Cosmos SDK</p></p></li>
            </ul>
          </div>
        </section>
        <section class="work-item">
            <label for="work-item-1"></label>
    
            <header class="clear">
              <div class="date">
                <span class="startDate">\u043E\u043A\u0442. 2023</span>
                <span class="endDate">- \u041D\u044B\u043D\u0435\u0448\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F</span>
              </div>
              <div class="position">Backend Go \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A, Junior</div>
                <div class="company">\u041E\u0426\u0420\u0412 (\u0420\u0416\u0414)</div>
            </header>
    
          <span class="location">
            <span class="fas fa-map-marker-alt"></span>
            <span class="location">\u0421\u0438\u0440\u0438\u0443\u0441, \u0420\u043E\u0441\u0441\u0438\u044F</span>
          </span>
           <div class="item" id="work-item">
            <div class="summary"><p><p>\u041F\u0435\u0440\u0435\u0448\u0451\u043B \u043D\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u044E Junior, \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044E \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B \u0438 \u0443\u043B\u0443\u0447\u0448\u0430\u0442\u044C \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435</p></p></div>
            <ul class="highlights">
              <li><p><p>\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u043C\u0438\u043A\u0440\u043E\u0441\u0435\u0440\u0432\u0438\u0441 \u0434\u043B\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u0430 \u0441\u043C\u0430\u0440\u0442-\u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u043E\u0432</p></p></li>
              <li><p><p>\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u043B \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 API Gateway</p></p></li>
              <li><p><p>\u041F\u0435\u0440\u0435\u0432\u0451\u043B \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 JWT \u0434\u043B\u044F \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438</p></p></li>
              <li><p><p>\u0423\u043B\u0443\u0447\u0448\u0438\u043B \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443, \u0443\u0431\u0440\u0430\u0432 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043B\u0438\u0448\u043D\u0438\u0445 \u0441\u0432\u044F\u0437\u0435\u0439 \u043C\u0435\u0436\u0434\u0443 \u043C\u0438\u043A\u0440\u043E\u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043C\u0438</p></p></li>
              <li><p><p>\u041D\u0430\u043F\u0438\u0441\u0430\u043B \u0431\u044D\u043A\u0435\u043D\u0434 \u0434\u043B\u044F MVP-\u0432\u0435\u0440\u0441\u0438\u0438 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0420\u0416\u0414 \u041F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0430\u043C</p></p></li>
              <li><p><p>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438: Go, gorm, gin, gRPC, PostgreSQL, Redis, LevelDB</p></p></li>
            </ul>
          </div>
        </section>
      </section>
    </section>
    <section class="section">
      <header>
        <h2 class='section-title'>\u041F\u0440\u043E\u0435\u043A\u0442\u044B <span class="item-count">(19)</span></h2>
      </header>
      <section id="projects">
        <section class="project-item">
    
          <header class="clear">
            <div class="position">\u041D\u0430 \u043C\u0435\u0441\u0442\u0435!</div>
            <div class="date">
              <span class="startDate">\u043C\u0430\u0440\u0442 2024</span>
              <span class="endDate">- \u041D\u044B\u043D\u0435\u0448\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Dart</li>
              <li>Flutter</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0424\u0440\u0438\u043B\u0430\u043D\u0441 - \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0435\u0442\u0438 \u043F\u0430\u0440\u043A\u043E\u0432\u043E\u043A</p></p></div>
            <ul class="highlights">
                <li>\u0424\u0440\u0438\u043B\u0430\u043D\u0441 - \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0435\u0442\u0438 \u043F\u0430\u0440\u043A\u043E\u0432\u043E\u043A</li>
                <li>\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F \u0447\u0435\u0440\u0435\u0437 \u0421\u041C\u0421-\u043A\u043E\u0434</li>
                <li>\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F</li>
                <li>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 SDK \u042F\u043D\u0434\u0435\u043A\u0441.\u041A\u0430\u0440\u0442\u044B</li>
                <li>\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043A\u043E\u0432\u043E\u043A \u043D\u0430 \u043A\u0430\u0440\u0442\u0435</li>
                <li>\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 QR-\u043A\u043E\u0434\u0430 \u043D\u0430 \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0435</li>
                <li>\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0438, \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0438</li>
                <li>\u041E\u043F\u043B\u0430\u0442\u0430</li>
                <li>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u0430\u0440\u0442 \u0447\u0435\u0440\u0435\u0437 \u042E\u041A\u0430\u0441\u0441\u0430</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">\u0412\u043A\u043B\u0430\u0434 \u0432 CometBFT (OpenSource)</div>
            <div class="date">
              <span class="startDate">\u044F\u043D\u0432. 2024</span>
              <span class="endDate">- \u0444\u0435\u0432\u0440. 2024</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Go</li>
              <li>SQL</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u0438\u043D\u0434\u0435\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439 \u0432 CometBFT</p></p></div>
            <ul class="highlights">
                <li>\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u0438\u043D\u0434\u0435\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439 \u0432 CometBFT</li>
                <li><a href="https://github.com/cometbft/cometbft/pull/2142"></a></li>
                <li>\u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043B Go \u0438 SQL-\u043A\u043E\u0434 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 cometbft</li>
                <li>x20 \u043F\u0440\u0438\u0440\u043E\u0441\u0442 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0438\u043D\u0434\u0435\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">Ebash (Extended Bash)</div>
            <div class="date">
              <span class="startDate">\u043C\u0430\u0439 2023</span>
              <span class="endDate">- \u043C\u0430\u0439 2023</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Bash</li>
              <li>Linux</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u0432 \u043C\u0435\u0442\u0430\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 - \u043D\u0430\u0434\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043D\u0430\u0434 Bash</p></p></div>
            <ul class="highlights">
                <li>\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u0432 \u043C\u0435\u0442\u0430\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 - \u043D\u0430\u0434\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043D\u0430\u0434 Bash</li>
                <li>github.com/k0marov/ebash</li>
                <li>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u0430\u0445\u0430\u0440\u0430 \u0432 Bash</li>
                <li>\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439</li>
                <li>\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F</li>
                <li>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u0439</li>
                <li>\u0422\u0440\u0430\u043D\u0441\u043F\u0438\u043B\u044F\u0446\u0438\u044F \u0432 Bash</li>
                <li>\u0417\u0430\u043F\u0443\u0441\u043A ebash \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u043D\u0442\u0435\u0440\u043F\u0440\u0435\u0442\u0430\u0442\u043E\u0440\u0430</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0441\u0442\u0443\u0434\u0442\u0443\u0440\u0438\u0437\u043C.\u0440\u0444</div>
            <div class="date">
              <span class="startDate">\u0444\u0435\u0432\u0440. 2023</span>
              <span class="endDate">- \u0444\u0435\u0432\u0440. 2023</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Dart</li>
              <li>Flutter</li>
              <li>Firebase</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u041F\u0440\u043E\u0435\u043A\u0442 \u0434\u043B\u044F \u0445\u0430\u043A\u0430\u0442\u043E\u043D\u0430 \u043E\u0442 \u0420\u043E\u0441\u043C\u043E\u043B\u043E\u0434\u0451\u0436\u0438</p></p></div>
            <ul class="highlights">
                <li>\u041F\u0440\u043E\u0435\u043A\u0442 \u0434\u043B\u044F \u0445\u0430\u043A\u0430\u0442\u043E\u043D\u0430 \u043E\u0442 \u0420\u043E\u0441\u043C\u043E\u043B\u043E\u0434\u0451\u0436\u0438</li>
                <li>github.com/k0marov/studtourism-mobile-app</li>
                <li>\u041B\u043E\u0433\u0438\u043D, \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F, \u043E\u043D\u0431\u043E\u0430\u0440\u0434\u0438\u043D\u0433</li>
                <li>\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u043C\u0443 API</li>
                <li>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 Firebase</li>
                <li>\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 24-\u0451\u0445 \u0447\u0430\u0441\u043E\u0432</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">Web-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0434\u0438\u043A\u0442\u043E\u0440\u043E\u0432</div>
            <div class="date">
              <span class="startDate">\u043D\u043E\u044F\u0431. 2022</span>
              <span class="endDate">- \u0434\u0435\u043A. 2022</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Python</li>
              <li>Django</li>
              <li>SQL</li>
              <li>Docker</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u0432 \u0441\u043E\u0440\u0435\u0432\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u041E\u0426\u0420\u0412</p></p></div>
            <ul class="highlights">
                <li>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u0432 \u0441\u043E\u0440\u0435\u0432\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u041E\u0426\u0420\u0412</li>
                <li>github.com/k0marov/ocrv-web-frontend</li>
                <li>github.com/k0marov/ocrv-backend</li>
                <li>github.com/k0marov/ocrv-deploy</li>
                <li>github.com/k0marov/ocrv-integration-docs</li>
                <li>\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u044F - https://disk.yandex.ru/i/v-q6JVr9W1_iiQ</li>
                <li>\u041B\u043E\u0433\u0438\u043D/\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</li>
                <li>\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 \u043A \u043D\u0438\u043C</li>
                <li>\u0417\u0430\u043F\u0438\u0441\u044C \u0430\u0443\u0434\u0438\u043E \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435</li>
                <li>\u0417\u0430\u043F\u0438\u0441\u044C \u0432\u0438\u0434\u0435\u043E \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435</li>
                <li>\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439 \u043D\u0430 \u0434\u043B\u0438\u043D\u0443 \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0430 \u0431\u044D\u043A\u0435</li>
                <li>\u0412\u044B\u0440\u0435\u0437\u0430\u043D\u0438\u0435 \u0430\u0443\u0434\u0438\u043E\u0434\u043E\u0440\u043E\u0436\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 ffmpeg</li>
                <li>\u041F\u0440\u043E\u043F\u0443\u0441\u043A \u0442\u0435\u043A\u0441\u0442\u043E\u0432</li>
                <li>\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0441\u0434\u0435\u043B\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043F\u0438\u0441\u0435\u0439</li>
                <li>\u041D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 Docker Compose</li>
                <li>\u041F\u043E \u0438\u0442\u043E\u0433\u0430\u043C \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0430 \u0437\u0430\u043D\u044F\u043B 1-\u0435 \u043C\u0435\u0441\u0442\u043E</li>
                <li>\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D, SPA \u043D\u0430 React</li>
                <li>\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u0441\u044F\u0446\u0430</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">\u0421\u043E\u0446. \u043E\u043F\u0440\u043E\u0441\u044B</div>
            <div class="date">
              <span class="startDate">\u043E\u043A\u0442. 2022</span>
              <span class="endDate">- \u043E\u043A\u0442. 2022</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Python</li>
              <li>Telegram Bot</li>
              <li>Redis</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C-\u0431\u043E\u0442 \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0445 \u0441\u043E\u0446. \u043E\u043F\u0440\u043E\u0441\u043E\u0432</p></p></div>
            <ul class="highlights">
                <li>\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C-\u0431\u043E\u0442 \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0445 \u0441\u043E\u0446. \u043E\u043F\u0440\u043E\u0441\u043E\u0432</li>
                <li>github.com/k0marov/pollbot</li>
                <li>\u0421\u0442\u0440\u043E\u0433\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430</li>
                <li>\u0418\u0441\u043F\u043E\u043B\u0437\u043E\u0432\u0430\u043D\u0438\u0435 Redis</li>
                <li>\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u0435\u0434\u0435\u043B\u0438</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C-\u0431\u043E\u0442 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E \u0431\u0430\u0437\u0435 FAQ</div>
            <div class="date">
              <span class="startDate">\u043E\u043A\u0442. 2022</span>
              <span class="endDate">- \u043E\u043A\u0442. 2022</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Python</li>
              <li>Telegram Bot</li>
              <li>ML</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u043B\u044F \u0445\u0430\u043A\u0430\u0442\u043E\u043D\u0430 \u0432 \u043A\u0435\u0439\u0441\u0435 \u043E\u0442 \u0411\u0430\u043D\u043A\u0430 &quot;\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435&quot;</p></p></div>
            <ul class="highlights">
                <li>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u043B\u044F \u0445\u0430\u043A\u0430\u0442\u043E\u043D\u0430 \u0432 \u043A\u0435\u0439\u0441\u0435 \u043E\u0442 \u0411\u0430\u043D\u043A\u0430 "\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435"</li>
                <li>github.com/k0marov/open-bot-release</li>
                <li>\u0414\u043B\u0438\u043D\u043D\u044B\u0439 \u0434\u0438\u0430\u043B\u043E\u0433 \u0441 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u043C\u0430\u0448\u0438\u043D\u0443 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0439</li>
                <li>\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 ML \u0434\u043B\u044F \u0443\u043C\u043D\u043E\u0433\u043E \u043F\u043E\u0438\u0441\u043A\u0430</li>
                <li>\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 24-\u0451\u0445 \u0447\u0430\u0441\u043E\u0432</li>
                <li>\u0421\u0442\u0440\u043E\u0433\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430</li>
                <li>\u041F\u0440\u043E\u0435\u043A\u0442 \u0437\u0430\u043D\u044F\u043B 1-\u0435 \u043C\u0435\u0441\u0442\u043E</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">Avencia - \u041A\u0440\u0438\u043F\u0442\u043E \u0431\u0438\u0440\u0436\u0430</div>
            <div class="date">
              <span class="startDate">\u0430\u0432\u0433. 2022</span>
              <span class="endDate">- \u043D\u043E\u044F\u0431. 2022</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Go</li>
              <li>Firebase</li>
              <li>FoundationDB</li>
              <li>Dart</li>
              <li>Flutter</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0424\u0440\u0438\u043B\u0430\u043D\u0441-\u043F\u0440\u043E\u0435\u043A\u0442: \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0431\u044D\u043A\u0435\u043D\u0434\u0430 \u0438 \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434\u0430 \u0434\u043B\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u043D\u043E\u0439 \u0431\u0438\u0440\u0436\u0438</p></p></div>
            <ul class="highlights">
                <li>\u0424\u0440\u0438\u043B\u0430\u043D\u0441-\u043F\u0440\u043E\u0435\u043A\u0442: \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0431\u044D\u043A\u0435\u043D\u0434\u0430 \u0438 \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434\u0430 \u0434\u043B\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u043D\u043E\u0439 \u0431\u0438\u0440\u0436\u0438</li>
                <li>\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u044F - https://disk.yandex.ru/i/e5Xii2yvNUM66w</li>
                <li>\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B</li>
                <li>\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 QR-\u043A\u043E\u0434\u0430\u043C\u0438 \u0438 JWT</li>
                <li>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u043D\u0430 \u0431\u044D\u043A\u0435: \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0438, \u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u044B, \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 \u0438 \u0442\u0434</li>
                <li>\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F, KYC</li>
                <li>\u041B\u0438\u043C\u0438\u0442\u044B \u043D\u0430 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438</li>
                <li>\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0440\u0430\u0437\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442</li>
                <li>100% \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435 \u0442\u0435\u0441\u0442\u0430\u043C\u0438 \u043D\u0430 \u0431\u044D\u043A\u0435</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">Sreda - \u043C\u043E\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043C\u0438\u0440</div>
            <div class="date">
              <span class="startDate">\u0438\u044E\u043B\u044C 2022</span>
              <span class="endDate">- \u0438\u044E\u043B\u044C 2022</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Dart</li>
              <li>Flutter</li>
              <li>Python</li>
              <li>Django</li>
              <li>SQL</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0414\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u0444\u0440\u0438\u043B\u0430\u043D\u0441\u0435</p></p></div>
            <ul class="highlights">
                <li>\u0424\u0440\u0438\u043B\u0430\u043D\u0441-\u043F\u0440\u043E\u0435\u043A\u0442: \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0431\u044D\u043A\u0435\u043D\u0434\u0430 \u0438 \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434\u0430 \u0434\u043B\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u043D\u043E\u0439 \u0431\u0438\u0440\u0436\u0438</li>
                <li>\u0418\u0441\u043F\u0440\u0430\u0432\u0438\u043B 10 \u0444\u0438\u0447 \u0432 Legacy-\u043A\u043E\u0434\u0435</li>
                <li>\u0424\u0440\u043E\u043D\u0442\u0435\u043D\u0434 \u043D\u0430 Flutter</li>
                <li>\u0411\u044D\u043A\u0435\u043D\u0434 \u043D\u0430 Django</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0435\u0442\u044C</div>
            <div class="date">
              <span class="startDate">\u0438\u044E\u043D\u044C 2022</span>
              <span class="endDate">- \u0438\u044E\u043B\u044C 2022</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Go</li>
              <li>SQL</li>
              <li>Dart</li>
              <li>Flutter</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0435\u0442\u0438 \u043D\u0430 Flutter + Go</p></p></div>
            <ul class="highlights">
                <li>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0435\u0442\u0438 \u043D\u0430 Flutter + Go</li>
                <li>https://github.com/k0marov/go-socnet</li>
                <li>https://github.com/k0marov/socnet-frontend</li>
                <li>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F, \u043B\u043E\u0433\u0438\u043D</li>
                <li>\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F</li>
                <li>\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u043E\u0432</li>
                <li>\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 \u043F\u043E\u0434 \u043F\u043E\u0441\u0442\u0430\u043C\u0438</li>
                <li>\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043F\u043E\u0441\u0442\u043E\u0432</li>
                <li>\u041B\u0430\u0439\u043A \u043F\u043E\u0434 \u043F\u043E\u0441\u0442\u0430\u043C\u0438</li>
                <li>100% \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435 \u0442\u0435\u0441\u0442\u0430\u043C\u0438 \u0438 \u0441\u0442\u0440\u043E\u0433\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">\u0421\u0430\u043C\u043E\u043F\u0438\u0441\u043D\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0430 Go</div>
            <div class="date">
              <span class="startDate">\u043C\u0430\u0439 2022</span>
              <span class="endDate">- \u043C\u0430\u0439 2022</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Go</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043F\u0435\u0442-\u043F\u0440\u043E\u0435\u043A\u0442 - \u043C\u043E\u0434\u0443\u043B\u044C \u0434\u043B\u044F \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0430 Go</p></p></div>
            <ul class="highlights">
                <li>\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043F\u0435\u0442-\u043F\u0440\u043E\u0435\u043A\u0442 - \u043C\u043E\u0434\u0443\u043B\u044C \u0434\u043B\u044F \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0430 Go</li>
                <li>https://github.com/k0marov/golang-auth</li>
                <li>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F, \u043B\u043E\u0433\u0438\u043D</li>
                <li>\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 \u0411\u0414</li>
                <li>\u0412\u044B\u0434\u0430\u0447\u0430 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0442\u043E\u043A\u0435\u043D\u043E\u0432</li>
                <li>Middleware \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">Desktop-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0444\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0445 \u043A\u043B\u0443\u0431\u043E\u0432</div>
            <div class="date">
              <span class="startDate">\u0430\u043F\u0440. 2022</span>
              <span class="endDate">- \u0430\u043F\u0440. 2022</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Dart</li>
              <li>Flutter</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u043D\u0430 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0435 \u0412\u0441\u0435\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0418\u0422-\u0440\u0430\u0443\u043D\u0434</p></p></div>
            <ul class="highlights">
                <li>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u043D\u0430 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0435 \u0412\u0441\u0435\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0418\u0422-\u0440\u0430\u0443\u043D\u0434</li>
                <li>https://github.com/k0marov/itround-football-clubs</li>
                <li>\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 24-\u0445 \u0447\u0430\u0441\u043E\u0432</li>
                <li>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 API \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0445 \u043A\u043E\u043C\u0430\u043D\u0434\u0430\u0445</li>
                <li>\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 Google Translate</li>
                <li>\u0422\u0435\u0441\u0442\u044B \u0438 \u0441\u0442\u0440\u043E\u0433\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">Telegram-\u0411\u043E\u0442 \u0434\u043B\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \u043D\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438\u0437 \u0433\u0440\u0443\u043F\u043F \u0412\u041A</div>
            <div class="date">
              <span class="startDate">\u0430\u043F\u0440. 2022</span>
              <span class="endDate">- \u0430\u043F\u0440. 2022</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Python</li>
              <li>Telegram Bot</li>
              <li>SQL</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u043D\u0430 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0435 IT-Fest</p></p></div>
            <ul class="highlights">
                <li>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u043D\u0430 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0435 IT-Fest</li>
                <li>https://github.com/k0marov/itround-football-clubs</li>
                <li>\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 API VK</li>
                <li>\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 3-\u0435\u0445 \u0434\u043D\u0435\u0439</li>
                <li>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 SQL</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">TODO-\u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A</div>
            <div class="date">
              <span class="startDate">\u043C\u0430\u0440\u0442 2022</span>
              <span class="endDate">- \u043C\u0430\u0440\u0442 2022</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Dart</li>
              <li>Flutter</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043F\u0435\u0442-\u043F\u0440\u043E\u0435\u043A\u0442 \u0434\u043B\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u0447\u0438\u0441\u0442\u043E\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u044B \u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0442\u0435\u0441\u0442\u043E\u0432</p></p></div>
            <ul class="highlights">
                <li>\u0423\u0447\u0435\u0431\u043D\u044B\u0439 \u043F\u0435\u0442-\u043F\u0440\u043E\u0435\u043A\u0442 \u0434\u043B\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u0447\u0438\u0441\u0442\u043E\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u044B \u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0442\u0435\u0441\u0442\u043E\u0432</li>
                <li>github.com/k0marov/cleantodo</li>
                <li>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435, \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440, \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u0432 TODO</li>
                <li>\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440, \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435, \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435, \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u0441\u043F\u0438\u0441\u043A\u0435 TODO</li>
                <li>\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435</li>
                <li>100% \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435 \u0442\u0435\u0441\u0442\u0430\u043C\u0438</li>
                <li>\u0421\u0442\u0440\u043E\u0433\u0430\u044F Clean Architecture</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">\u041C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440 \u043D\u0430 Flutter + Firebase</div>
            <div class="date">
              <span class="startDate">\u0444\u0435\u0432\u0440. 2022</span>
              <span class="endDate">- \u043C\u0430\u0440\u0442 2022</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Dart</li>
              <li>Flutter</li>
              <li>Firebase</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u041F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u0439 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440, \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u0439 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u043E\u0432 \u043F\u043E \u0442\u0438\u043F\u0443 WhatsApp</p></p></div>
            <ul class="highlights">
                <li>\u041F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u0439 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440, \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u0439 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u043E\u0432 \u043F\u043E \u0442\u0438\u043F\u0443 WhatsApp</li>
                <li>github.com/k0marov/messenger-flutter</li>
                <li>\u0412\u0445\u043E\u0434 \u0441 \u0421\u041C\u0421-\u043A\u043E\u0434\u043E\u043C</li>
                <li>\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439</li>
                <li>\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0447\u0430\u0442\u043E\u0432</li>
                <li>\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u0430</li>
                <li>\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043E\u043D\u043B\u0430\u0439\u043D\u0430 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438</li>
                <li>\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0447\u0442\u0435\u043D\u0438\u044F \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439</li>
                <li>\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430\u043C\u0438</li>
                <li>\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u043D\u0438\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439</li>
                <li>\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0444\u043E\u0442\u043E</li>
                <li>\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F</li>
                <li>\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F: \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432, \u0432\u044B\u0434\u0430\u0447\u0430 \u0430\u0434\u043C\u0438\u043D\u0441\u043A\u0438\u0445 \u043F\u0440\u0430\u0432</li>
                <li>\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439, \u0447\u0430\u0442\u043E\u0432</li>
                <li>\u041F\u0435\u0440\u0435\u0441\u044B\u043B\u043A\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439</li>
                <li>\u041E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F</li>
                <li>\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C-\u0431\u043E\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F \u043B\u0435\u043D\u0442\u044B Twitter</div>
            <div class="date">
              <span class="startDate">\u0434\u0435\u043A. 2021</span>
              <span class="endDate">- \u0434\u0435\u043A. 2021</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Python</li>
              <li>Telegram Bot</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0424\u0440\u0438\u043B\u0430\u043D\u0441-\u043F\u0440\u043E\u0435\u043A\u0442 - \u0431\u043E\u0442, \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0439 \u043A API Twitter \u0438 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0432 \u0422\u0413 \u043B\u0435\u043D\u0442\u0443 \u0435\u0433\u043E \u0422\u0432\u0438\u0442\u0442\u0435\u0440\u0430</p></p></div>
            <ul class="highlights">
                <li>\u0424\u0440\u0438\u043B\u0430\u043D\u0441-\u043F\u0440\u043E\u0435\u043A\u0442 - \u0431\u043E\u0442, \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0439 \u043A API Twitter \u0438 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0432 \u0422\u0413 \u043B\u0435\u043D\u0442\u0443 \u0435\u0433\u043E \u0422\u0432\u0438\u0442\u0442\u0435\u0440\u0430</li>
                <li>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 API</li>
                <li>\u041F\u043E\u043B\u043B\u0438\u043D\u0433-\u0437\u0430\u0434\u0430\u0447\u0430 \u043F\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044E \u043F\u043E\u0441\u0442\u043E\u0432 \u0432 \u0444\u043E\u043D\u0435</li>
                <li>\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u043B \u043F\u0440\u043E\u0435\u043A\u0442 \u043D\u0430\u043C\u043D\u043E\u0433\u043E \u0440\u0430\u043D\u044C\u0448\u0435 \u0441\u0440\u043E\u043A\u043E\u0432</li>
                <li>\u0414\u0435\u043F\u043B\u043E\u0439 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">\u0428\u0430\u0445\u043C\u0430\u0442\u044B \u043D\u0430 Flutter</div>
            <div class="date">
              <span class="startDate">\u0434\u0435\u043A. 2021</span>
              <span class="endDate">- \u0434\u0435\u043A. 2021</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Dart</li>
              <li>Flutter</li>
              <li>ML</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0448\u0430\u0445\u043C\u0430\u0442 \u0441 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435\u043C Stockfish AI</p></p></div>
            <ul class="highlights">
                <li>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0448\u0430\u0445\u043C\u0430\u0442 \u0441 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435\u043C Stockfish AI</li>
                <li>github.com/k0marov/ChessFlutter</li>
                <li>\u041F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u0430\u044F \u0438\u0433\u0440\u0430 \u0432 \u0448\u0430\u0445\u043C\u0430\u0442\u044B \u0441 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u0445\u043E\u0434\u043E\u0432</li>
                <li>\u0418\u0433\u0440\u0430 2-\u0443\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u043D\u0430 \u043E\u0434\u043D\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435</li>
                <li>\u0418\u0433\u0440\u0430 \u0441 \u0418\u0418 \u0440\u0430\u0437\u043D\u044B\u0445 \u0443\u0440\u043E\u0432\u043D\u0435\u0439</li>
                <li>\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F Stockfish AI</li>
                <li>\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438\u0433\u0440 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435</li>
                <li>\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0445 \u0438\u0433\u0440</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u043D\u0430 Flutter</div>
            <div class="date">
              <span class="startDate">\u043D\u043E\u044F\u0431. 2021</span>
              <span class="endDate">- \u043D\u043E\u044F\u0431. 2021</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Dart</li>
              <li>Flutter</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0430</p></p></div>
            <ul class="highlights">
                <li>github.com/k0marov/calculator-flutter</li>
            </ul>
          </div>
        </section>
        <section class="project-item">
    
          <header class="clear">
            <div class="position">\u0414\u043D\u0435\u0432\u043D\u0438\u043A \u0434\u043B\u044F \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0445 \u043A\u043D\u0438\u0433 \u0441 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0435\u0442\u0438, Django</div>
            <div class="date">
              <span class="startDate">\u0441\u0435\u043D\u0442. 2021</span>
              <span class="endDate">- \u043E\u043A\u0442. 2021</span>
            </div>
          </header>
          <ul class="keywords">
              <li>Python</li>
              <li>Django</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
          </ul>
          <div class="item">
              <div class="description"><p><p>Web-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0435\u0442\u0438 + \u0434\u043D\u0435\u0432\u043D\u0438\u043A\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0445 \u043A\u043D\u0438\u0433</p></p></div>
            <ul class="highlights">
                <li>\u0414\u043D\u0435\u0432\u043D\u0438\u043A \u0434\u043B\u044F \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0445 \u043A\u043D\u0438\u0433 \u0441 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0435\u0442\u0438, Django</li>
                <li>github.com/k0marov/bookguide</li>
                <li>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0438 \u043B\u043E\u0433\u0438\u043D</li>
                <li>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u043D\u0438\u0433\u0438 \u0432 \u0441\u043F\u0438\u0441\u043E\u043A</li>
                <li>\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u043D\u0438\u0433 \u0441 \u0440\u0430\u0437\u0431\u0438\u0432\u043A\u043E\u0439 \u043F\u043E \u0434\u0430\u0442\u0430\u043C</li>
                <li>\u0410\u0434\u0430\u043F\u0442\u0438\u0432 \u0434\u043B\u044F Desktop/Mobile</li>
                <li>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0446\u0435\u043D\u0437\u0438\u0438 \u043D\u0430 \u043A\u043D\u0438\u0433\u0443</li>
                <li>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 \u043A \u0440\u0435\u0446\u0435\u043D\u0437\u0438\u0438</li>
                <li>\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0441\u043F\u0438\u0441\u043A\u0430 \u0432\u0441\u0435\u0445 \u043A\u043D\u0438\u0433 \u0432\u0441\u0435\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439</li>
                <li>\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439</li>
                <li>\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u0434\u0440\u0443\u0437\u044C\u044F</li>
                <li>\u041F\u0440\u0438\u043D\u044F\u0442\u0438\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u0434\u0440\u0443\u0437\u044C\u044F</li>
                <li>\u0414\u0435\u043F\u043B\u043E\u0439 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435</li>
            </ul>
          </div>
        </section>
      </section>
    </section>
    <section class="section">
      <header>
        <h2 class='section-title'>\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 <span class="item-count">(1)</span></h2>
      </header>
    
      <section id="education">
        <section class="education-item">
          <header class="clear">
            <div class="date">
              <span class="startDate">
              2022
              </span>
              <span class="endDate">
              - 2026
              </span>
            </div>
            <div class="header-left">
              <div class="area">
                \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435
              </div>
              <div class="institution">
                \u041A\u043E\u043B\u043B\u0435\u0434\u0436 \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u0421\u0438\u0440\u0438\u0443\u0441
              </div>
            </div>
          </header>
    
    
    
          <div class="item">
          </div>
        </section>
      </section>
    </section>
      <section class="section">
        <header>
          <h2 class="section-title">\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F</h2>
        </header>
        <section id="awards">
            <section class="award-item">
                <label for="award-item-0"></label>
    
              <header class="clear">
                  <div class="date">
                    2023
                  </div>
                <div class="header-left">
                    <div class="title">
                      \u041F\u043E\u0431\u0435\u0434\u0430 \u043D\u0430 \u0445\u0430\u043A\u0430\u0442\u043E\u043D\u0435
                    </div>
                    <div class="awarder">
                      \u0425\u0430\u043A\u0430\u0442\u043E\u043D \u0426\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u041F\u0440\u043E\u0440\u044B\u0432. \u0418\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442
                    </div>
                </div>
              </header>
    
              <div class="item">
                  <div class="summary"><p><p>\u041E\u0434\u0438\u043D \u0438\u0437 \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0432 \u043A\u0435\u0439\u0441\u0435 \u043E\u0442 \u0421\u0431\u0435\u0440\u0430 \u0438 \u041C\u0424\u0422\u0418 \u0432 \u0437\u0430\u0434\u0430\u0447\u0435 \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u043A\u043E\u043C\u0430\u043D\u0434 \u0434\u043B\u044F \u0440\u043E\u0431\u043E\u0442\u0430-\u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 LLM. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B Python \u0438 ML-\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438</p></p></div>
              </div>
            </section>
            <section class="award-item">
                <label for="award-item-1"></label>
    
              <header class="clear">
                  <div class="date">
                    2022
                  </div>
                <div class="header-left">
                    <div class="title">
                      1-\u0435 \u043C\u0435\u0441\u0442\u043E
                    </div>
                    <div class="awarder">
                      \u0425\u0430\u043A\u0430\u0442\u043E\u043D \u041E\u0426\u0420\u0412
                    </div>
                </div>
              </header>
    
              <div class="item">
                  <div class="summary"><p><p>1-\u0435 \u043C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0432 \u0437\u0430\u0434\u0430\u0447\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0412\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F - \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F \u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u0442\u0435\u043A\u0441\u0442\u0430 \u0434\u0438\u043A\u0442\u043E\u0440\u0430\u043C\u0438. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B Django \u0438 React</p></p></div>
              </div>
            </section>
            <section class="award-item">
                <label for="award-item-2"></label>
    
              <header class="clear">
                  <div class="date">
                    2022
                  </div>
                <div class="header-left">
                    <div class="title">
                      1-\u0435 \u043C\u0435\u0441\u0442\u043E \u043D\u0430 \u0445\u0430\u043A\u0430\u0442\u043E\u043D\u0435
                    </div>
                    <div class="awarder">
                      \u0411\u0430\u043D\u043A &quot;\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435&quot;
                    </div>
                </div>
              </header>
    
              <div class="item">
                  <div class="summary"><p><p>1-\u0435 \u043C\u0435\u0441\u0442\u043E \u0432 \u043A\u0435\u0439\u0441\u0435 \u043E\u0442 \u0431\u0430\u043D\u043A\u0430 &quot;\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435&quot; \u0432 \u0437\u0430\u0434\u0430\u0447\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 Telegram-\u0431\u043E\u0442\u0430 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E \u0431\u0430\u0437\u0435 FAQ \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0418\u0418</p></p></div>
              </div>
            </section>
            <section class="award-item">
                <label for="award-item-3"></label>
    
              <header class="clear">
                  <div class="date">
                    2022
                  </div>
                <div class="header-left">
                    <div class="title">
                      \u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C
                    </div>
                    <div class="awarder">
                      \u0412\u0441\u0435\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0418\u0422-\u0440\u0430\u0443\u043D\u0434
                    </div>
                </div>
              </header>
    
              <div class="item">
                  <div class="summary"><p><p>\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C \u0432 \u043A\u0435\u0439\u0441\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0444\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0445 \u043A\u043B\u0443\u0431\u0430\u0445</p></p></div>
              </div>
            </section>
            <section class="award-item">
                <label for="award-item-4"></label>
    
              <header class="clear">
                  <div class="date">
                    2022
                  </div>
                <div class="header-left">
                    <div class="title">
                      \u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C
                    </div>
                    <div class="awarder">
                      \u0412\u0421\u043E\u0428 \u043F\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0435 \u0438 \u0444\u0438\u0437\u0438\u043A\u0435
                    </div>
                </div>
              </header>
    
              <div class="item">
                  <div class="summary"><p><p>\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u044D\u0442\u0430\u043F\u043E\u0432 \u0412\u0421\u043E\u0428 \u043F\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0435 \u0438 \u0444\u0438\u0437\u0438\u043A\u0435</p></p></div>
              </div>
            </section>
            <section class="award-item">
                <label for="award-item-5"></label>
    
              <header class="clear">
                  <div class="date">
                    2021
                  </div>
                <div class="header-left">
                    <div class="title">
                      1-\u0435 \u043C\u0435\u0441\u0442\u043E \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438
                    </div>
                    <div class="awarder">
                      \u0412\u0421\u043E\u0428 \u043F\u043E \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C\u0443 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443
                    </div>
                </div>
              </header>
    
              <div class="item">
                  <div class="summary"><p><p>1-\u0435 \u043C\u0435\u0441\u0442\u043E \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438 \u043D\u0430 \u043E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0435 \u0448\u043A\u043E\u043B\u044C\u043D\u0438\u043A\u043E\u0432 \u043F\u043E \u0418\u0418</p></p></div>
              </div>
            </section>
        </section>
      </section>
    <section class="section">\r
      <header>\r
        <h2 class='section-title'>\u042F\u0437\u044B\u043A\u0438</h2>\r
      </header>\r
      <section id="languages">\r
        <div class="display">\r
          <h3 class="language">\r
            \u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439\r
          </h3>\r
          <div class="item">\r
            <div class="level fluency b2">\r
              <em>B2</em>\r
              <div class="bar"></div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="display">\r
          <h3 class="language">\r
            \u0420\u0443\u0441\u0441\u043A\u0438\u0439\r
          </h3>\r
          <div class="item">\r
            <div class="level fluency \u0440\u043E\u0434\u043D\u043E\u0439 \u044F\u0437\u044B\u043A">\r
              <em>\u0420\u043E\u0434\u043D\u043E\u0439 \u044F\u0437\u044B\u043A</em>\r
              <div class="bar"></div>\r
            </div>\r
          </div>\r
        </div>\r
      </section>\r
    </section>\r

  </body>
</html>
`,"resume.hbs":`<!doctype html>
<html>
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>{{#resume.basics}}{{name}}{{/resume.basics}}</title>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
  <style>
  {{{css}}}
  </style>
  
  </head>
  <body>
  
  <div id="resume">
    {{> basics }}
    {{> skills }}
    {{> work }}
    {{> projects }}
    {{> volunteer }}
    {{> education }}
    {{> awards }}
    {{> certificates }}
    {{> publications }}
    {{> languages }}
    {{> interests }}
    {{> references }}

  </body>
</html>
`,"style.css":`/********************************************
* 	reset from
* 	http://meyerweb.com/eric/tools/css/reset/
*******************************************/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/****************
*	COMMONS
****************/

body,
html {
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 13px;
  color: #40484f;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.46153846;
  text-align: left;
}

p {
  display: block;
}

a {
  color: #0095ff;
  text-decoration: none;
}

a:hover {
  color: #0c65a5;
  text-decoration: underline;
}

li {
  list-style-type: square;
  list-style-position: outside;
  margin-left: 1.3em;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.67rem;
}

h3 {
  font-size: 1.27rem;
}

em {
  color: #757575;
}

blockquote {
  margin-bottom: 1em;
}

strong {
  font-weight: 700;
}

/* main container */

#resume {
  padding: 1.5rem;
}

/* every section wrapper */

.section {
  margin-bottom: 1rem;
}

section .location {
  margin-right: 0.5em;
  color: #606d76;
  font-weight: 700;
}

#contact {
  margin-top: 0.5rem;
}

#profiles .item {
  padding: 0;
}

#header > #profiles,
#header > #contact,
#skills,
#languages,
#interests {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}

#header > div {
  line-height: 1.5;
}

#header > div > div {
  margin-right: 1.2em;
}

#header h1.name {
  font-size: 2.8rem;
  font-weight: 100;
  line-height: 100%;
}

#header h2.label {
  color: #202931;
  font-size: 1.47rem;
  font-weight: 300;
}

#header .image {
  width: 11em;
  float: right;
  border-radius: 4px;
}

.main-summary {
  background: #f1f8ff;
  padding: 1.2em 1em;
  margin-top: 1rem;
}

.main-summary p {
  margin: 0;
}

.section-title {
  display: inline-block;
  background: #fff;
  padding: 0 1em 0.3em 0;
  color: #ff6d1f;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  font-size: 0.9rem;
}

.section > header {
  position: relative;
}

.fa {
  margin-right: 0.25em;
}

.section > header::after {
  position: absolute;
  left: 0;
  top: 0.7em;
  height: 1px;
  background: #ccc;
  content: "";
  width: 100%;
  z-index: -100;
  display: block;
}

.section.main-summary > section {
  margin: 0;
}

.section > section > header {
  font-size: 1.38rem;
  position: relative;
  margin-top: 0.7em;
}

.section > section > header:first-of-type {
  margin: 0;
}

.section > section > header .space-left {
  position: absolute;
  left: -1.56rem;
  top: 5px;
  color: #aaa;
  line-height: 1;
  opacity: 0;
}

.position,
.company,
.organization,
.institution,
.date,
.area,
.studyType,
.title,
.awarder {
  display: inline;
}

.position,
.studyType,
.area,
.title,
.language,
.name {
  font-weight: 600;
}

.company::before,
.institution::before,
.organization::before,
.awarder::before {
  content: "at ";
}

.company,
.institution,
.organization,
.awarder {
  color: #606d76;
  font-weight: 400;
}

.section header .date {
  display: block;
  font-size: 1rem;
  padding: 0.1em 0;
  color: #606d76;
  font-weight: 400;
}

.keywords,
.courses {
  margin: 0.5em 0;
}

.keywords li,
.courses li {
  display: inline-block;
  margin: 2px 2px 2px 0;
  padding: 4px 5px 5px;
  font-size: 0.9rem;
  line-height: 1;
  color: #3e6d8e;
  background-color: #dfeaf1;
  border: 0 solid #dfeaf1;
  white-space: nowrap;
}

.keywords li:hover,
.courses li:hover {
  background: #dfeaf0;
}

.highlights {
  margin: 1em 0 0 0;
}

.highlights > li > p {
  margin-bottom: 0.5em;
}

.item {
  overflow: hidden;
}

.gpa {
  clear: both;
  padding-bottom: 0.5em;
}

.fa.social {
  font-size: 1.1em;
}

/* Social Media Brand Colors */

.google-plus {
  color: #dd4b39;
}

.tumblr {
  color: #32506d;
}

.foursquare {
  color: #0072b1;
}

.facebook {
  color: #3b5998;
}

.linkedin {
  color: #007bb6;
}

.pinterest {
  color: #cb2027;
}

.dribbble {
  color: #ea4c89;
}

.instagram {
  color: #517fa4;
}

.twitter {
  color: #00aced;
}

.soundcloud {
  color: #ff3a00;
}

.wordpress {
  color: #21759b;
}

.youtube {
  color: #bb0000;
}

.github {
  color: #171515;
}

.stack-overflow {
  color: #828386;
  position: relative;
}

.flickr {
  color: #ff0084;
}

.reddit {
  color: #ff4500;
}

.hacker-news {
  color: #ff6600;
}

.stack-overflow::after {
  position: absolute;
  left: 0;
  content: "\\f16c";
  color: #f68a1f;
  overflow: hidden;
  height: 100%;
}

.telegram {
  color: #2291c3;
}

#languages .item,
#skills .item,
#interests .item {
  width: 15em;
  padding: 0 0.5em 0.5em 0;
  border-bottom: none;
}

#skills .item {
  width: 16em;
}

#skills .item .keywords {
  width: 15em;
}

/* Skill chart */

.level {
  margin-bottom: 0.5em;
}

.level em {
  padding-left: 0.2em;
}

.level .bar {
  border: 1px solid #ddd;
  display: block;
  width: 10em;
  height: 5px;
  position: relative;
}

.level .bar::after {
  position: absolute;
  content: " ";
  top: 0;
  left: 0;
  background: black;
  height: 5px;
}

.level.beginner .bar::after {
  background: #eb5f51;
  width: 2.5em;
}

.level.intermediate .bar::after {
  background: #ffdf1f;
  width: 5em;
}

.level.advanced .bar::after,
.level.fluent .bar::after {
  background: #5cb85c;
  width: 7.5em;
}

.level.master .bar::after,
.level.native.speaker .bar::after {
  background: #59c596;
  width: 10em;
}

#references .item {
  padding-left: 0.5em;
  border-left: 5px solid #ff6d1f;
}

.section > section > section {
  margin-bottom: 1rem;
}

/******************
*	HELPER CLASSES
******************/

.clear::after {
  content: "";
  display: table;
  clear: both;
}

.display {
  display: block;
  opacity: 1 !important;
}

/****************
*		TABLET
****************/

@media screen and (min-width: 602px) {
  #resume {
    width: 80%;
    margin: 0 auto;
  }
  .section header .date {
    float: right;
    font-weight: 600;
    color: #000;
  }
}

/****************
*		LAPTOP
****************/

@media screen and (min-width: 1025px) {
  li {
    margin-left: 1.5em;
  }
  #resume {
    width: 820px;
    margin: 2rem auto;
  }
  .section > section > header .space-left {
    opacity: 1;
    cursor: pointer;
  }
  .section > section:not(.main-summary) {
    margin-left: 1.67rem;
  }
  .company::before,
  .institution::before,
  .organization::before,
  .awarder::before {
    content: "| ";
  }
  .header-left {
    float: left;
    width: 70%;
    word-break: normal;
  }
  .section header .date {
    padding: 0.2em;
  }
  .display {
    display: none;
  }
  .display:not(.none) {
    display: block;
  }
}

@media print {
  #profiles a:not(.hide-href-print)::after{
    content: " (" attr(href) ") ";
  }
  #resume {
    margin: 0.1em;
    padding: 0.1em;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    line-height: 1.25;
  }
  @page {
    margin: 1cm 1.4cm;
  }
  .item-count {
    display: none;
  }
  .company::before,
  .institution::before,
  .organization::before,
  .awarder::before {
    content: "at ";
  }
  .main-summary {
    padding: 0;
    background: transparent;
  }
  .section {
    margin: 0.8rem 0;
    padding: 0;
  }
  .section header {
    padding-bottom: 0.15rem;
  }
  .section .location {
    padding-bottom: 0.15rem;
  }
  .section > section > section {
    margin: 0 0 1em 0;
  }
  .section > section > section:last-of-type {
    margin: 0;
  }
  .stack-overflow::after {
    content: "";
  }
  .fa.social {
    color: #828386;
  }
  ul {
    margin-top: 0.4em;
  }
  ul,
  li {
    padding: 0;
  }
  ul.keywords li,
  ul.courses li {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    background: transparent;
  }
  ul.keywords li::after,
  ul.courses li::after {
    padding: 0 0 0 0.1rem;
    content: " |";
  }
  ul.keywords::before,
  ul.courses::before {
    font-size: 0.8rem;
    font-weight: 600;
  }
  #skills .item {
    width: calc(100% / 3);
    padding: 0;
  }
  .highlights {
    margin: 0.5em 0 0 0;
  }
  ul.keywords::before {
    content: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438: ";
  }
  #skills .keywords::before {
    content: none;
  }
  .section p {
    margin: 0;
    padding: 0;
  }
  ul.courses::before {
    content: "Major courses: ";
  }
  ul.keywords li:last-of-type::after,
  ul.courses li:last-of-type::after {
    content: "";
  }
  .level em {
    font-style: normal;
    padding: 0.1em 0;
  }
  .level .bar {
    display: none;
  }
  #profiles .item {
    padding: 0;
  }
  .item.display {
    display: block;
    opacity: 1 !important;
  }
  .fa-map-marker-alt:before {
    padding-left: 0.1em;
  }
}
`,"theme/partials/awards.hbs":`{{#if resume.awards.length}}
  <section class="section">
    <header>
      <h2 class="section-title">\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F</h2>
    </header>
    <section id="awards">
      {{#each resume.awards}}
        <section class="award-item">
          {{#if summary}}
            <label for="award-item-{{@index}}"></label>
          {{/if}}

          <header class="clear">
            {{#if date}}
              <div class="date">
                {{Y date}}
              </div>
            {{/if}}
            <div class="header-left">
              {{#if title}}
                <div class="title">
                  {{title}}
                </div>
              {{/if}}
              {{#if awarder}}
                <div class="awarder">
                  {{awarder}}
                </div>
              {{/if}}
            </div>
          </header>

          <div class="item">
            {{#if summary}}
              <div class="summary">{{paragraphSplit summary}}</div>
            {{/if}}
          </div>
        </section>
      {{/each}}
    </section>
  </section>
{{/if}}
`,"theme/partials/basics.hbs":`{{#resume.basics}}
	<header id="header" class="clear">
		{{#if image}}
		<img class="image" src="{{image}}" alt="{{name}}" />
		<div class="middle">
			<h1 class="name">{{name}}</h1>
			<h2 class="label">{{label}}</h2>
		</div>
		{{else}}
		<div>
			<h1 class="name">{{name}}</h1>
			<h2 class="label">{{label}}</h2>
		</div>
		{{/if}}

		{{#location}}
		<span class="location">
			{{#if address}}
			<span class="address">{{address}},</span>
			{{/if}}
			{{#if postalCode}}
			<span class="postalCode">{{postalCode}},</span>
			{{/if}}
			{{#if city}}
			<span class="city">{{city}},</span>
			{{/if}}
			{{#if region}}
			<span class="region">{{region}}</span>
			{{/if}}
			{{#if countryCode}}
			<span class="countryCode">{{countryCode}}</span>
			{{/if}}
		</span>
		{{/location}}

		{{#birthDate birth}}
		{{/birthDate}}

		<div id="contact">
			{{#if website}}
			<div class="website">
				<span class="fas fa-external-link-alt"></span>
				<a class="hide-href-print" target="_blank" target="_blank" href="{{website}}">{{website}}</a>
			</div>
			{{/if}}
			{{#if email}}
			<div class="email">
				<span class="far fa-envelope"></span>
				<a class="hide-href-print" href="mailto:{{email}}">{{email}}</a>
			</div>
			{{/if}}
			{{#if phone}}
			<div class="phone">
				<span class="fas fa-mobile-alt"></span>
				<a class="hide-href-print" href="tel:{{phone}}">{{phone}}</a>
			</div>
			{{/if}}
		</div>

		{{#if profiles.length}}
		<div id="profiles">
			{{#each profiles}}
			<div class="item">
				{{#if network}}
				<div class="username">
					<span class="fab fa-{{spaceToDash network}} {{spaceToDash network}} social"></span>
					{{#if url}}
					<span class="url">
						<a target="_blank" href="{{url}}">{{username}}</a>
					</span>
					{{else}}
					<span>{{username}}</span>
					{{/if}}
				</div>
				{{/if}}
			</div>
			{{/each}}
		</div>
		{{/if}}
	</header>

	{{#if summary}}
	<section class="section">
		<section class="main-summary">
			<div>{{paragraphSplit summary}}</div>
		</section>
	</section>
	{{/if}}

{{/resume.basics}}
`,"theme/partials/certificates.hbs":`{{#if resume.certificates.length}}
  <section class="section">
    <header>
      <h2 class="section-title">\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B</h2>
    </header>
    <section id="certificates">
      {{#each resume.certificates}}
        <section class="certificate-item">
          <header class="clear">
            {{#if date}}
              <div class="date">
                {{date}}
              </div>
            {{/if}}
            <div class="header-left">
              {{#if name}}
                <div class="name">
                  {{name}}
                </div>
              {{/if}}
              {{#if issuer}}
                <div class="issuer">
                  {{issuer}}
                </div>
              {{/if}}
            </div>
          </header>

          <div class="item">
            {{#if url}}
              <span class="url">
                <span class="fas fa-external-link-alt"></span>
                <a target="_blank" href="{{url}}">{{url}}</a>
              </span>
            {{/if}}
          </div>
        </section>
      {{/each}}
    </section>
  </section>
{{/if}}
`,"theme/partials/education.hbs":`{{#if resume.education.length}}
<section class="section">
  <header>
    <h2 class='section-title'>\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 <span class="item-count">({{resume.education.length}})</span></h2>
  </header>

  <section id="education">
    {{#each resume.education}}
    <section class="education-item">
      {{#if summary}}
        <label for="education-item-{{@index}}"></label>
      {{/if}}
      <header class="clear">
        <div class="date">
          {{#if startDate}}
          <span class="startDate">
          {{Y startDate}}
          </span>
          {{/if}}
          {{#if endDate}}
          <span class="endDate">
          - {{Y endDate}}
          </span>
          {{else}}
          <span class="endDate">
          - \u041D\u044B\u043D\u0435\u0448\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F
          </span>
          {{/if}}
        </div>
        <div class="header-left">
          {{#if studyType}}
          <div class="studyType">
            {{studyType}}
          </div>
          {{/if}}
          {{#if area}}
          <div class="area">
            {{area}}
          </div>
          {{/if}}
          {{#if institution}}
          <div class="institution">
            {{institution}}
          </div>
          {{/if}}
        </div>
      </header>

      {{#location}}
      <span class="location">
        <span class="fas fa-map-marker-alt"></span>
        {{#if city}}
        <span class="city">{{city}}</span>
        {{/if}}
        {{#if countryCode}}
        <span class="countryCode">({{countryCode}})</span>
        {{/if}}
        {{#if region}}
        <span class="region">{{region}}</span>
        {{/if}}
      </span>
      {{/location}}

      {{#if courses.length}}
      <ul class="courses">
        {{#each courses}}
        <li>{{.}}</li>
        {{/each}}
      </ul>
      {{/if}}

      <div class="item">
        {{#if gpa}}
        <div class='gpa'>
          <strong> Grade:</strong> <span>{{gpa}}</span>
        </div>
        {{/if}}
        {{#if summary}}
          <div class="summary">{{paragraphSplit summary}}</div>
        {{/if}}
      </div>
    </section>
    {{/each}}
  </section>
</section>
{{/if}}
`,"theme/partials/interests.hbs":`{{#if resume.interests.length}}\r
<section class="section">\r
  <header>\r
    <h2 class='section-title' class='section-title'>\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u044B</h2>\r
  </header>\r
  <section id="interests">\r
    {{#each resume.interests}}\r
    <div class="item">\r
      {{#if name}}\r
      <h3 class="name">\r
        {{name}}\r
      </h3>\r
      {{/if}}\r
      {{#if keywords.length}}\r
      <ul class="keywords">\r
        {{#each keywords}}\r
        <li>{{.}}</li>\r
        {{/each}}\r
      </ul>\r
      {{/if}}\r
      {{#if summary}}\r
        <div class="summary">{{paragraphSplit summary}}</div>\r
      {{/if}}\r
    </div>\r
    {{/each}}\r
  </section>\r
</section>\r
{{/if}}\r
`,"theme/partials/languages.hbs":`{{#if resume.languages.length}}\r
<section class="section">\r
  <header>\r
    <h2 class='section-title'>\u042F\u0437\u044B\u043A\u0438</h2>\r
  </header>\r
  <section id="languages">\r
    {{#each resume.languages}}\r
    <div class="display">\r
      {{#if language}}\r
      <h3 class="language">\r
        {{language}}\r
      </h3>\r
      {{/if}}\r
      <div class="item">\r
        {{#if fluency}}\r
        <div class="level fluency {{toLowerCase fluency}}">\r
          {{#if fluencyDisplay}}\r
          <em>{{fluencyDisplay}}</em>\r
          {{else}}\r
          <em>{{fluency}}</em>\r
          {{/if}}\r
          <div class="bar"></div>\r
        </div>\r
        {{/if}}\r
      </div>\r
    </div>\r
    {{/each}}\r
  </section>\r
</section>\r
{{/if}}\r
`,"theme/partials/projects.hbs":`{{#if resume.projects.length}}
<section class="section">
  <header>
    <h2 class='section-title'>\u041F\u0440\u043E\u0435\u043A\u0442\u044B <span class="item-count">({{resume.projects.length}})</span></h2>
  </header>
  <section id="projects">
    {{#each resume.projects}}
    <section class="project-item">
      {{#if summary}}
        <label for="project-item-{{@index}}"></label>
      {{/if}}

      {{#if name}}
      <header class="clear">
        {{#if name}}
        <div class="position">{{name}}</div>
        {{/if}}
        {{#if startDate}}
        <div class="date">
          <span class="startDate">{{MY startDate}}</span>
          {{#if endDate}}
          <span class="endDate">- {{MY endDate}}</span>
          {{else}}
          <span class="endDate">- \u041D\u044B\u043D\u0435\u0448\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F</span>
          {{/if}}
        </div>
        {{/if}}
      </header>
      {{/if}}
      {{#location}}
      <span class="location">
      <span class="fas fa-map-marker-alt"></span>
      {{#if city}}
      <span class="city">{{city}},</span>
      {{/if}}
      {{#if countryCode}}
      <span class="countryCode">({{countryCode}})</span>
      {{/if}}
      {{#if region}}
      <span class="region">
      {{region}}
      </span>
      {{/if}}
      </span>
      {{/location}}
      {{#if url}}
      <span class="website">
        <span class="fas fa-external-link-alt"></span>
        <a target="_blank" href="{{url}}">{{url}}</a>
      </span>
      {{/if}}
      {{#if keywords.length}}
      <ul class="keywords">
        {{#each keywords}}
          <li>{{.}}</li>
        {{/each}}
      </ul>
      {{/if}}
      <div class="item">
        {{#if description}}
          <div class="description">{{paragraphSplit description}}</div>
        {{/if}}
        {{#if highlights.length}}
        <ul class="highlights">
          {{#each highlights}}
            <li>{{{.}}}</li>
          {{/each}}
        </ul>
        {{/if}}
      </div>
    </section>
    {{/each}}
  </section>
</section>
{{/if}}
`,"theme/partials/publications.hbs":`{{#if resume.publications.length}}
<section class="section">
  <header>
    <h2 class='section-title'>\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438</h2>
  </header>
  <section id="publications">
    {{#each resume.publications}}
    <section class="publication-item">
      {{#if summary}}
      <label for="publication-item-{{@index}}"></label>
      {{/if}}

      <header class="clear">
         {{#if releaseDate}}
        <span class="date">
          {{DMY releaseDate}}
        </span>
        {{/if}}
        <div class="header-left">
          {{#if name}}
          <span class="name">
            {{#if website}}
            <span class="website">
              <span class="fas fa-external-link-alt"></span>
              <a target="_blank" href="{{website}}">{{name}}</a>
            </span>
            {{else}}
            {{name}}
            {{/if}}
          </span>
          {{/if}}
          {{#if publisher}}
          <span class="publisher">
            in {{publisher}}
          </span>
          {{/if}}
        </div>
       
      </header>
      {{#if keywords.length}}
      <ul class="keywords">
        {{#each keywords}}
        <li>{{.}}</li>
        {{/each}}
      </ul>
      {{/if}}

      <div class="item">
        {{#if summary}}
        <div class="summary">{{paragraphSplit summary}}</div>
        {{/if}}
      </div>
    </section>
    {{/each}}
  </section>
</section>
{{/if}}
`,"theme/partials/references.hbs":`{{#if resume.references.length}}\r
<section class="section">\r
  <header>\r
    <h2 class='section-title'>\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438</h2>\r
  </header>\r
  <section id="references">\r
    {{#each resume.references}}\r
    <div class="item">\r
      {{#if reference}}\r
      <blockquote class="reference">\r
        &#8220;&#32;{{reference}}&#32;&#8221;\r
      </blockquote>\r
      {{/if}}\r
      {{#if name}}\r
      <div class="name">\r
        {{name}}\r
      </div>\r
      {{/if}}\r
    </div>\r
    {{/each}}\r
  </section>\r
</section>\r
{{/if}}\r
`,"theme/partials/skills.hbs":`{{#if resume.skills.length}}\r
<section class="section">\r
	<header>\r
		<h2 class='section-title'>\u041D\u0430\u0432\u044B\u043A\u0438</h2>\r
	</header>\r
	<section id="skills">\r
		{{#each resume.skills}}\r
		<div class="item">\r
			{{#if name}}\r
			<h3 class="name">\r
				{{name}}\r
			</h3>\r
			{{/if}} {{#if level}}\r
			<div class="level {{toLowerCase level}}">\r
				{{#if levelDisplay}}\r
				<em>{{levelDisplay}}</em>\r
				{{else}}\r
				<em>{{level}}</em>\r
				{{/if}}\r
				<div class="bar"></div>\r
			</div>\r
			{{/if}}\r
			{{#if keywords.length}}\r
			<ul class="keywords">\r
				{{#each keywords}}\r
				<li>{{.}}</li>\r
				{{/each}}\r
			</ul>\r
			{{/if}}\r
		</div>\r
		{{/each}}\r
	</section>\r
</section>\r
{{/if}}\r
`,"theme/partials/volunteer.hbs":`{{#if resume.volunteer.length}}
<section class="section">
  <header>
    <h2 class='section-title'>\u0412\u043E\u043B\u043D\u043E\u0442\u0451\u0440\u0441\u0442\u0432\u043E</h2>
  </header>
  <section id="volunteer">
    {{#each resume.volunteer}}
    <section class="volunteer-item">
      {{#if organization}}

      {{#if summary}}
      <label for="volunteer-item-{{@index}}"></label>
      {{/if}}

      <header class="clear">
         <div class="date">
          {{#if startDate}}
          <span class="startDate">
            {{MY startDate}}
          </span>
          {{/if}}
          {{#if endDate}}
          <span class="endDate">
            - {{MY endDate}}
          </span>
          {{else}}
          <span class="endDate">
            - \u041D\u044B\u043D\u0435\u0448\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F
          </span>
          {{/if}}
        </div>
        <div class="header-left">
          {{#if position}}
          <div class="position">
            {{position}}
          </div>
          {{/if}}
          <div class="organization">
            {{organization}}
          </div>
        </div>
       
      </header>
      {{/if}}
      {{#if website}}
      <div class="website">
        <span class="fas fa-external-link-alt"></span>
        <a target="_blank" href="{{website}}">{{website}}</a>
      </div>
      {{/if}}
      {{#location}}
      <span class="location">
        <span class="fas fa-map-marker-alt"></span>
        {{#if city}}
        <span class="city">
          {{city}},
        </span>
        {{/if}}
        {{#if countryCode}}
        <span class="countryCode">
          ({{countryCode}})
        </span>
        {{/if}}
        {{#if region}}
        <span class="region">
          {{region}}
        </span>
        {{/if}}
      </span>
      {{/location}}
      {{#if keywords.length}}
      <ul class="keywords">
        {{#each keywords}}
        <li>{{.}}</li>
        {{/each}}
      </ul>
      {{/if}}
      <div class="item">
        {{#if summary}}
        <div class="summary">{{paragraphSplit summary}}</div>
        {{/if}}
        {{#if highlights.length}}
        <ul class="highlights">
          {{#each highlights}}
          <li>{{paragraphSplit .}}</li>
          {{/each}}
        </ul>
        {{/if}}
      </div>
    </section>
    {{/each}}
  </section>
</section>
{{/if}}
`,"theme/partials/work.hbs":`{{#if resume.work.length}}
<section class="section">
  <header>
    <h2 class='section-title'>\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B <span class="item-count">({{resume.work.length}})</span></h2>
  </header>

  <section id="work">
    {{#each resume.work}}
    <section class="work-item">
        {{#if summary}}
        <label for="work-item-{{@index}}"></label>
        {{/if}}

        <header class="clear">
          <div class="date">
            {{#if startDate}}
            <span class="startDate">{{MY startDate}}</span>
            {{/if}}
            {{#if endDate}}
            <span class="endDate">- {{MY endDate}}</span>
            {{else}}
            <span class="endDate">- \u041D\u044B\u043D\u0435\u0448\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F</span>
            {{/if}}
          </div>
          {{#if position}}
          <div class="position">{{position}}</div>
          {{/if}}
          {{#if website}}
            <span class="company">
              <a target="_blank" href="{{website}}">{{name}}</a>
            </span>
          {{else}}
            <div class="company">{{name}}</div>
          {{/if}}
        </header>

      {{#if location}}
      <span class="location">
        <span class="fas fa-map-marker-alt"></span>
        <span class="location">{{location}}</span>
      </span>
      {{/if}}
      {{#if url}}
      <span class="url">
        <span class="fas fa-external-link-alt"></span>
        <a target="_blank" href="{{url}}">{{url}}</a>
      </span> {{/if}} {{#if keywords.length}}
      <ul class="keywords">
        {{#each keywords}}
        <li>{{.}}</li>
        {{/each}}
      </ul>
      {{/if}}
      <div class="item" id="work-item">
        {{#if summary}}
        <div class="summary">{{paragraphSplit summary}}</div>
        {{/if}}
        {{#if highlights.length}}
        <ul class="highlights">
          {{#each highlights}}
          <li>{{paragraphSplit .}}</li>
          {{/each}}
        </ul>
        {{/if}}
      </div>
    </section>
    {{/each}}
  </section>
</section>
{{/if}}
`},de={public:["index.html"],"theme/hbs-helpers":["birth-date.js","date-helpers.js","paragraph-split.js","space-to-dash.js","to-lower-case.js"],"theme/partials":["awards.hbs","basics.hbs","certificates.hbs","education.hbs","interests.hbs","languages.hbs","projects.hbs","publications.hbs","references.hbs","skills.hbs","volunteer.hbs","work.hbs"],theme:["hbs-helpers","partials"],".":["README.md","index.js","package.json","public","resume.hbs","style.css","theme"]};li=function(n,e){var t=oi(n);return t!==void 0?t:""},ci=function(n,e){var t=pt(n);return t===void 0&&(t=[]),e&&e.withFileTypes?t.map(function(r){var i=dt(n)+"/"+r,s=pt(i)!==void 0;return{name:r,isFile:function(){return!s},isDirectory:function(){return s}}}):t},ui=function(n){return oi(n)!==void 0||pt(n)!==void 0},hi=function(){},pi=function(){},ft=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},di=ft,fi=function(){},mi=function(){},gi=function(){return{pipe:function(n){return n},on:function(){return this}}},vi=function(){return{write:function(){},end:function(){},on:function(){return this}}},xo={readFileSync:li,readdirSync:ci,existsSync:ui,writeFileSync:hi,mkdirSync:pi,statSync:ft,lstatSync:di,unlinkSync:fi,rmdirSync:mi,createReadStream:gi,createWriteStream:vi}});var Li={};bt(Li,{basename:()=>dn,default:()=>Lo,dirname:()=>mt,extname:()=>fn,isAbsolute:()=>wi,join:()=>_i,normalize:()=>Ci,parse:()=>xi,relative:()=>Pi,resolve:()=>ki,sep:()=>Si});var _i,ki,mt,dn,fn,Si,wi,Ci,Pi,xi,Lo,Ei=yn(()=>{"use strict";p();_i=function(){return[].slice.call(arguments).join("/")},ki=function(){return[].slice.call(arguments).join("/")},mt=function(n){return n.split("/").slice(0,-1).join("/")},dn=function(n,e){var t=n.split("/").pop()||"";return e&&t.endsWith(e)?t.slice(0,-e.length):t},fn=function(n){var e=n.match(/\.[^.]+$/);return e?e[0]:""},Si="/",wi=function(n){return n.charAt(0)==="/"},Ci=function(n){return n},Pi=function(n,e){return e},xi=function(n){return{root:"",dir:mt(n),base:dn(n),ext:fn(n),name:dn(n,fn(n))}},Lo={join:_i,resolve:ki,dirname:mt,basename:dn,extname:fn,sep:Si,isAbsolute:wi,normalize:Ci,relative:Pi,parse:xi}});var Mi=v((nc,Di)=>{p();var z=ai(),{readFileSync:gt,readdirSync:Eo}=(yi(),_t(bi)),{join:U}=(Ei(),_t(Li)),Le=U("/","theme/hbs-helpers"),{birthDate:Do}=re(U(Le,"birth-date.js")),{dateHelpers:Mo}=re(U(Le,"date-helpers.js")),{paragraphSplit:Ao}=re(U(Le,"paragraph-split.js")),{toLowerCase:Oo}=re(U(Le,"to-lower-case.js")),{spaceToDash:Io}=re(U(Le,"space-to-dash.js")),{MY:No,Y:Ro,DMY:qo}=Mo;z.registerHelper("birthDate",Do);z.registerHelper("MY",No);z.registerHelper("Y",Ro);z.registerHelper("DMY",qo);z.registerHelper("paragraphSplit",Ao);z.registerHelper("toLowerCase",Oo);z.registerHelper("spaceToDash",Io);function Bo(n){let e=gt("//style.css","utf-8"),t=gt("//resume.hbs","utf-8"),r=U("/","theme/partials");return Eo(r).forEach(s=>{let a=/^([^.]+).hbs$/.exec(s);if(!a)return;let l=a[1],c=U(r,s),o=gt(c,"utf8");z.registerPartial(l,o)}),z.compile(t)({css:e,resume:n})}var mn="0.8 cm",To={margin:{top:mn,bottom:mn,left:mn,right:mn}};Di.exports={render:Bo,pdfRenderOptions:To}});p();var ne=Bi(Mi(),1),Ai=ne.default??ne,ic=Ai.render??ne.render,sc=Ai.pdfRenderOptions??ne.pdfRenderOptions;export{sc as pdfRenderOptions,ic as render};
