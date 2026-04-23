var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();if (!require.extensions) require.extensions = {};if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };
var Bn=Object.create;var Y=Object.defineProperty;var Vn=Object.getOwnPropertyDescriptor;var qn=Object.getOwnPropertyNames;var Jn=Object.getPrototypeOf,Un=Object.prototype.hasOwnProperty;var q=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(n,e)=>(typeof require<"u"?require:n)[e]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var Mt=(t,n)=>()=>(t&&(n=t(t=0)),n);var m=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports),Gn=(t,n)=>{for(var e in n)Y(t,e,{get:n[e],enumerable:!0})},jt=(t,n,e,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let s of qn(n))!Un.call(t,s)&&s!==e&&Y(t,s,{get:()=>n[s],enumerable:!(i=Vn(n,s))||i.enumerable});return t};var Wn=(t,n,e)=>(e=t!=null?Bn(Jn(t)):{},jt(n||!t||!t.__esModule?Y(e,"default",{value:t,enumerable:!0}):e,t)),Ft=t=>jt(Y({},"__esModule",{value:!0}),t);var c=Mt(()=>{});var ut={};Gn(ut,{createReadStream:()=>Yt,createWriteStream:()=>Xt,default:()=>Kn,existsSync:()=>Jt,lstatSync:()=>Wt,mkdirSync:()=>Gt,readFileSync:()=>Vt,readdirSync:()=>qt,rmdirSync:()=>zt,statSync:()=>ct,unlinkSync:()=>Kt,writeFileSync:()=>Ut});function pt(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Bt(t){var n=pt(t);if(X[n]!==void 0)return X[n];for(var e=Object.keys(X),i=0;i<e.length;i++)if(n.endsWith("/"+e[i])||n===e[i])return X[e[i]]}function ht(t){var n=pt(t);if((n===""||n===".")&&j["."]!==void 0)return j["."];if(j[n]!==void 0)return j[n];for(var e=Object.keys(j),i=0;i<e.length;i++)if(n.endsWith("/"+e[i])||n===e[i])return j[e[i]]}var X,j,Vt,qt,Jt,Ut,Gt,ct,Wt,Kt,zt,Yt,Xt,Kn,ft=Mt(()=>{"use strict";c();X={"index.html":`<!doctype html>
<html>
	<head>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,300italic,500,200,300' rel='stylesheet' type='text/css'>

	<title>Janne Klouman</title>

	<style>
	* {

    padding:                0;
    margin:                 0;
    font-family:            'Roboto', sans-serif;
    color:                  #5D5D5D;

}

body, html {

	background-color:       #FFFFFF;
	line-height:            1.65;

}

strong {

    font-weight:            500;

}

h1,
h2 {

    color:                  #0177B4;

}

section {

    margin:                 50px 0;

}

    section h1 {

        font-weight:             400;

    }

@media only screen and ( max-device-width: 640px ) {

    .mobile-hide {

        display:                none;

    }

    .mobile-break {

        display:                block;

    }

    section {

        margin:                 30px 0;

    }
}

.mobile-clearfix:before,
.mobile-clearfix:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.mobile-clearfix:after {
    clear: both;
}

#header {

    background-color:       #f8f8f8;

}

    #header .inner {

        max-width:              720px;
        margin:                 0 auto;
        padding:                50px 0;

    }

        #header .inner .picture {

            width:                  110px;
            height:                 110px;
            border-radius:          55px;
            float:                  right;
            margin:                 -9px 0 0 0;

        }

        #header .inner .name-and-label {

            display:                inline-block;

        }

        #header .inner h1 {

            font-weight:            200;
            font-size:              38px;
            color:                  #0177B4;

        }

        #header .inner h2 {

            font-weight:            300;
            color:                  #0177B4;
            margin-top:             -10px;

        }

@media only screen and ( max-device-width: 640px ) {

        #header .inner {

            max-width:              100%;
            padding:                20px 15px;

        }

            #header .inner .picture {

                width:                  40px;
                height:                 40px;
                border-radius:          20px;
                margin:                 8px 0 0 0;

            }

            #header .inner h1 {

                font-size:              24px

            }

            #header .inner h2 {

                font-size:              16px

            }

}


#resume {

	margin:                 0 auto;
	max-width:              720px;
    padding:                0 5px 0 15px;

}

#basics { }

    #basics .contact {

        margin-left:            0px;

    }

    #basics .contact strong,
    #location strong {

        clear:                  both;
        float:                  left;
        line-height:            1.3;
        width:                  170px;

    }

@media only screen and ( max-device-width: 640px ) {

    #basics .contact strong,
    #location strong {

        display:                inline-block;
        line-height:            1.65;
        width:                  auto;
        float:                  none;

    }

}

#work,
#volunteer,
#education,
#awards,
#publications,
#skill,
#interests {}

    #work .item:not(:first-of-type),
    #volunteer .item:not(:first-of-type),
    #awards .item:not(:first-of-type),
    #publications .item:not(:first-of-type) {

        margin-top: 50px

    }

    #work .name,
    #volunteer .name,
    #education .studyType,
    #awards .title,
    #publications .name,
    #skills .name,
    #languages .language,
    #references .name,
    #interests .name {

        font-weight:            500;
        display:                inline-block;

    }

    #interests .name:nth-of-type(2n+2) {

        text-align:             center;

    }

    #interests .name:nth-of-type(3n+3) {

        text-align:             right;

    }

    #work .date,
    #volunteer .date,
    #education .date,
    #awards .date,
    #publications .releaseDate {

        float:                  right;

    }

    #work .highlights,
    #volunteer .highlights,
    #education .courses,
    #skills .keywords {

        padding-left:           25px;
        margin-top:             5px;

    }

    #work .highlights li,
    #volunteer .highlights li,
    #education .courses li,
    #skills .keywords li {

        margin-top:             1px;

    }

    #interests .keywords li {

        display:                inline-block;

    }


    #interests .item {

        max-width:              204px;
        text-align:             justify;
        display:                inline-block;
        margin-right:           0px;

    }

    #skills .item,
    #interests .item:not(:nth-of-type(3n+3)) {

        display:                inline-block;
        vertical-align:         top;
        margin-right:           50px;

    }



    #skills .level {

        margin-top:             -7px;

    }

    #education .item,
    #languages .item {

        margin-bottom:          5px;

    }

    .date,
    #languages .fluency {

        font-style:             italic;

    }

@media only screen and ( max-device-width: 640px ) {

    #work .position {

        font-size: 15px;
        font-style: italic;

    }

    #work .date {

        font-size: 15px;
        float: none;
        margin-top: -8px;
        display: block;
        font-style: normal;
        margin-bottom: 10px;

    }

    #work .item:not(:first-of-type),
    #volunteer .item:not(:first-of-type),
    #awards .item:not(:first-of-type),
    #publications .item:not(:first-of-type) {

        margin-top: 30px

    }

    #education .institution {

        display:    inline-block

    }

    #education .item:not(:last-of-type) {

        margin-bottom: 20px;

    }

    #interests .item {

        max-width: none;
        text-align: inherit;
        margin-right: 0 !important;

    }

    #interests .item:not(:last-of-type),
    #skills .item:not(:last-of-type) {

        margin-bottom: 20px;

    }



}



	</style>
	
	</head>
	<body>


    <!-- Header -->
    <div id="header">
        <div class="inner">

            <div class="name-and-label">
                <h1>Janne Klouman</h1>
                <h2>Junior front-endutvecklare</h2>
            </div>

            <img class="picture" src="https://avatars2.githubusercontent.com/u/9065899?v=3&amp;s=460" alt="" />

        </div>
    </div>

    <div id="resume">
        <section id="basics">

            <div class="contact mobile-clearfix">


                <div class="email">
                    <strong>E-mailadress</strong>
                    <span >janne@klouman.com</span>
                </div>

                <div class="phone">
                    <strong>Telefonnummer</strong>
                    <span>(+46) 707 941 842</span>
                </div>

                    <div class="item">
                        <strong>GitHub</strong>

                        <span><a class="username" href="https://github.com/janneklouman">github.com/janneklouman</a></span>
                    </div>
                    <div class="item">
                        <strong>Facebook</strong>

                        <span><a class="username" href="https://www.facebook.com/janneklouman">facebook.com/janneklouman</a></span>
                    </div>
                    <div class="item">
                        <strong>Vimeo</strong>

                        <span><a class="username" href="https://vimeo.com/user5705728">vimeo.com/user5705728</a></span>
                    </div>
                    <div class="item">
                        <strong>Stack Overflow</strong>

                        <span><a class="username" href="http://stackoverflow.com/u/2298963">stackoverflow/2298963</a></span>
                    </div>

                        <div class="address">
                        <strong class="mobile-clearfix">Adress</strong>
                        <span class="mobile-break">Middagsv\xE4gen 8<span class="mobile-hide">,</span>
                        <span class="mobile-break">146 32 
                        Tullinge</span><span class="mobile-hide">, 
                        Stockholm</span></span>
                        </div>

            </div>

        </section>

        <section id="summary">

                <h1>Kort introduktion</h1>
                <p>Jag \xE4r 25 \xE5r och studerar vanligtvis Systemvetenskap vid Uppsala Universitet, men \xE4r nyss hemkommen fr\xE5n utbytesstudier vid Keio University i Tokyo, Japan. Jag har best\xE4mt mig f\xF6r att ta studieuppeh\xE5ll p\xE5 obest\xE4md tid f\xF6r att p\xE5b\xF6rja min karri\xE4r.  Min passion ligger i utveckling, design (innefattandes anv\xE4ndarv\xE4nlighet, lika v\xE4l som grafisk formgivning), samt f\xF6r skapande och konst i alla dess former. Vid sidan om mina studier har jag frilansat som webbutvecklare och webbdesigner, dessutom \xE4ven programmerat diverse tj\xE4nster och Androidappar f\xF6r n\xF6jets skull.</p>

        </section>

	<section id="work">
		<h1>Arbetslivserfarenhet</h1>

		<div class="item">

            <h3 class="name">
                                    Enskild firma
            </h3>
                <span class="position"><span class="mobile-hide">som </span>Webbutvecklare.</span>

            <div class="date">

                <span class="startDate">
                    Mar 2011, p\xE5g\xE5ende
                </span>


            </div>


			<div class="summary">
				<p>Jag har vid sidan om mina universitetsstudier frilansat som webbutvecklare d\xE5 tillf\xE4lle givits. Mestadels \xE5t mindre f\xF6retag, men \xE4ven tagit konsultuppdrag hos Stockholmsbaserad reklambyr\xE5 och s\xE5ledes jobbat med aningen st\xF6rre klienter som Sj\xF6lins gymnasium samt Nackademins N\xE4ringslivsgymnasium. N\xE5gra av mina senaste verk:</p>
			</div>

			<ul class="highlights">
				<li>Go Muffins, Go! \xE4r en vegansk catering- och matfirma i Tokyo. Jag har formgivit och utvecklat dess hemsida http://gomuffinsgo.com/</li>
				<li>Sj\xF6lins Gymnasium \xE4r en gymnasieskola i Stockholm. Jag har utvecklat deras hemsida http://www.sjolinsgymnasium.se/. Observera att sm\xE5 \xE4ndringar har tillkommit sedan jag utvecklade den (exempelvis popupen p\xE5 landningssidan).</li>
				<li>Next Up \xE4r en t\xE4vling riktad \xE5t \xE5ttondeklassare f\xF6r att inspirera dem till en karri\xE4r inom IT-branschen. Jag har utvecklat hemsidan http://nextup.se/. </li>
			</ul>

		</div>
		<div class="item">

            <h3 class="name">
                <a href="http://www.semantix.se/" title="http://www.semantix.se/">Semantix AB</a>
            </h3>
                <span class="position"><span class="mobile-hide">som </span>Projekttekniker.</span>

            <div class="date">

                <span class="startDate">
                    Dec 2012
                </span>

                <span class="endDate">
                    - Aug 2014
                </span>

            </div>


			<div class="summary">
				<p>Extrajobb d\xE5 och d\xE5 vid sidan om studier, samt sommarjobb. Arbetsuppgifter inkluderade teknisk handledning vid \xF6vers\xE4ttningsprojekt. \xD6vers\xE4ttningsprojekten varierade v\xE4ldigt i natur och s\xE5ledes \xE4ven arbetsuppgifterna. Det r\xF6rde sig ofta om extrahering av text fr\xE5n filer i olika format (ofta med regulj\xE4ra uttryck), samt konvertering av filer till \xF6vers\xE4ttbara format.</p>
			</div>


		</div>
		<div class="item">

            <h3 class="name">
                <a href="http://gengoworld.com/" title="http://gengoworld.com/">\u3053\u3069\u3082\u82F1\u8A9E\u306EGengoWorld!</a>
            </h3>
                <span class="position"><span class="mobile-hide">som </span>Engelskl\xE4rare.</span>

            <div class="date">

                <span class="startDate">
                    Maj 2015
                </span>

                <span class="endDate">
                    - Aug 2015
                </span>

            </div>


			<div class="summary">
				<p>Helgjobb i Tokyo som engelskl\xE4rare f\xF6r barn i \xE5ldern 2-12 \xE5r.</p>
			</div>


		</div>

	</section>

	
	<section id="education">
		<h1>Utbildning</h1>

		<div class="item">

            <h4 class="studyType">Japanska</h4>

                <div class="date">

                <span class="startDate">
                    Jan 2011
                </span>

                        <span class="endDate">- Mar 2011</span>

                </div>

			<span class="institution"> <span class="mobile-hide">vid </span>ISI Language School</span>
			<span class="area">, Tokyo</span>


		</div>
		<div class="item">

            <h4 class="studyType">Japanska</h4>

                <div class="date">

                <span class="startDate">
                    VT 2012, HT 2013
                </span>


                </div>

			<span class="institution"> <span class="mobile-hide">vid </span>H\xF6gskolan Dalarna</span>
			<span class="area">, Distans</span>


		</div>
		<div class="item">

            <h4 class="studyType">Systemvetenskap</h4>

                <div class="date">

                <span class="startDate">
                    Sep 2012
                </span>

                        <span class="endDate">- Jun 2014</span>

                </div>

			<span class="institution"> <span class="mobile-hide">vid </span>Uppsala Universitet</span>
			


		</div>
		<div class="item">

            <h4 class="studyType">Utbytesstudier</h4>

                <div class="date">

                <span class="startDate">
                    Sep 2014
                </span>

                        <span class="endDate">- Aug 2015</span>

                </div>

			<span class="institution"> <span class="mobile-hide">vid </span>Keio University</span>
			<span class="area">, Tokyo</span>


		</div>

	</section>
	
	
	
	<section id="skills">
		<h1>F\xE4rdigheter</h1>

        <div class="inner">

            <div class="item">

                <h4 class="name">
                    Webbutveckling
                </h4>


                <ul class="keywords">
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>WordPress+ACF</li>
                    <li>AngularJS</li>
                    <li>jQuery</li>
                    <li>SVG</li>
                    <li>l10n</li>
                    <li>Regulj\xE4ra uttryck</li>
                </ul>

            </div>
            <div class="item">

                <h4 class="name">
                    \xD6vers\xE4ttningsmilj\xF6er
                </h4>


                <ul class="keywords">
                    <li>Trados Studio</li>
                    <li>SDL WorldServer</li>
                    <li>Passolo</li>
                </ul>

            </div>
            <div class="item">

                <h4 class="name">
                    \xD6vrigt
                </h4>


                <ul class="keywords">
                    <li>Googla saker</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Premiere</li>
                    <li>PHPStorm</li>
                    <li>GitHub</li>
                    <li>Android (Java)</li>
                </ul>

            </div>

        </div>

	</section>

	<section id="languages">
		<h1>Spr\xE5kkunskaper</h1>

		<div class="item">

			<h4 class="language">
				Svenska
			</h4>

			<span class="fluency">- Modersm\xE5l</span>

		</div>
		<div class="item">

			<h4 class="language">
				Engelska
			</h4>

			<span class="fluency">- Akademisk niv\xE5</span>

		</div>
		<div class="item">

			<h4 class="language">
				Japanska
			</h4>

			<span class="fluency">- H\xF6gre medelniv\xE5 (B1 p\xE5 CEFR-skala)</span>

		</div>

	</section>

	<section id="interests">
		<h1>Intressen</h1>

		<div class="item">

			<h4 class="name">
				Skapande
			</h4>

			<ul class="keywords">
				<li>Jag har ett stort intresse f\xF6r skapande i alla dess former. Ut\xF6ver webb s\xE5 \xE4lskar jag att jobba med video, Arduino, LEGO, foto, kl\xE4der, musik.</li>
			</ul>

		</div>
		<div class="item">

			<h4 class="name">
				Japan
			</h4>

			<ul class="keywords">
				<li>Japan har spelat en stor roll i mitt liv, och \xE4r ett land som jag \xE4r djupt fascinerad av. Spr\xE5ket, maten, kulturen, och m\xE4nniskorna ligger mig varmt om hj\xE4rtat.</li>
			</ul>

		</div>
		<div class="item">

			<h4 class="name">
				Snowboarding
			</h4>

			<ul class="keywords">
				<li>Sedan ung \xE5lder har jag \xE5rligen f\xF6rs\xF6kt att komma iv\xE4g p\xE5 vintersemester f\xF6r att \xE5ka snowboard.</li>
			</ul>

		</div>

	</section>

	<section id="references">
		<h1>Referenser</h1>

		<div class="item">

                <h4 class="name">
                    Maria Nilsson.
                </h4>

			<span class="reference">
				Min n\xE4rmsta chef p\xE5 Semantix AB. Kontakt: Maria.Nilsson@semantix.se
			</span>

		</div>

	</section>

	</div>
	
	</body>
</html>
`,"package.json":`{
  "name": "jsonresume-theme-uppsala",
  "version": "0.0.5",
  "description": "Uppsala theme for JSON Resume",
  "author": "Janne Klouman",
  "repository": {
    "type": "git",
    "url": "https://github.com/janneklouman/jsonresume-theme-tokyo"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  }
}
`,"resume.hbs":`<!doctype html>
<html>
	<head>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,300italic,500,200,300' rel='stylesheet' type='text/css'>

	<title>{{#resume.basics}}{{name}}{{/resume.basics}}</title>

	<style>
	{{{css}}}
	</style>
	
	</head>
	<body>

    {{#resume.basics}}

    <!-- Header -->
    <div id="header">
        <div class="inner">

            <div class="name-and-label">
                <h1>{{name}}</h1>
                <h2>{{label}}</h2>
            </div>

            {{#if picture}}<img class="picture" src="{{picture}}" alt="" />{{/if}}

        </div>
    </div>

    <div id="resume">
        <section id="basics">

            <div class="contact mobile-clearfix">

                {{#if website}}
                <div class="website">
                    <strong>Hemsida</strong>
                    <a href="{{website}}">{{website}}</a>
                </div>
                {{/if}}

                {{#if email}}
                <div class="email">
                    <strong>E-mailadress</strong>
                    <span >{{email}}</span>
                </div>
                {{/if}}

                {{#if phone}}
                <div class="phone">
                    <strong>Telefonnummer</strong>
                    <span>{{phone}}</span>
                </div>
                {{/if}}

                {{#if profiles.length}}
                {{#each profiles}}
                    <div class="item">
                        {{#if network}}<strong>{{network}}</strong>{{/if}}

                        {{#if username}}<span><a class="username" href="{{url}}">{{username}}</a></span>{{/if}}
                    </div>
                {{/each}}
                {{/if}}

                {{#location}}
                    {{#if address}}
                        <div class="address">
                        <strong class="mobile-clearfix">Adress</strong>
                        <span class="mobile-break">{{address}}<span class="mobile-hide">,</span>
                        {{#if postalCode}}<span class="mobile-break">{{postalCode}} {{/if}}
                        {{#if city}}{{city}}</span><span class="mobile-hide">, {{/if}}
                        {{#if region}}{{region}}{{/if}}</span></span>
                        </div>
                    {{/if}}
                {{/location}}

            </div>

        </section>

        {{#if summary}}
        <section id="summary">

                <h1>Kort introduktion</h1>
                <p>{{summary}}</p>

        </section>
        {{/if}}
        {{/resume.basics}}

	{{#if resume.work.length}}
	<section id="work">
		<h1>Arbetslivserfarenhet</h1>

		{{#each resume.work}}
		<div class="item">

            {{#if company}}
            <h3 class="name">
                {{#if website}}<a href="{{website}}" title="{{website}}">{{company}}</a>
                {{else}}
                    {{company}}
                {{/if}}
            </h3>
                {{#if position}}<span class="position"><span class="mobile-hide">som </span>{{position}}.</span>{{/if}}
            {{/if}}

            {{#if startDate}}
            <div class="date">

                <span class="startDate">
                    {{startDate}}
                </span>

                {{#if endDate}}
                <span class="endDate">
                    - {{endDate}}
                </span>
                {{/if}}

            </div>
            {{/if}}


			{{#if summary}}
			<div class="summary">
				<p>{{summary}}</p>
			</div>
			{{/if}}

			{{#if highlights.length}}
			<ul class="highlights">
				{{#each highlights}}
				<li>{{.}}</li>
				{{/each}}
			</ul>
			{{/if}}

		</div>
		{{/each}}

	</section>
	{{/if}}

	{{#if resume.volunteer.length}}
	<section id="volunteer">
		<h1>Hackathon</h1>

		{{#each resume.volunteer}}
		<div class="item">
            {{#if organization}}
                <h3 class="name">
                    {{#if website}}<a href="{{website}}" title="{{website}}">{{organization}}</a>
                    {{else}}
                        {{company}}
                    {{/if}}
                </h3>
                {{#if position}}som {{position}}.{{/if}}
            {{/if}}

            {{#if startDate}}
                <div class="date">

                <span class="startDate">
                    {{startDate}}
                </span>

                    {{#if endDate}}
                        <span class="endDate">
                    - {{endDate}}
                </span>
                    {{/if}}

                </div>
            {{/if}}

			{{#if summary}}
			<div class="summary">
				<p>{{summary}}</p>
			</div>
			{{/if}}

			{{#if highlights.length}}
			<ul class="highlights">
				{{#each highlights}}
				<li>{{.}}</li>
				{{/each}}
			</ul>
			{{/if}}

		</div>
		{{/each}}

	</section>
	{{/if}}
	
	{{#if resume.education.length}}
	<section id="education">
		<h1>Utbildning</h1>

		{{#each resume.education}}
		<div class="item">

            {{#if studyType}}<h4 class="studyType">{{studyType}}</h4>{{/if}}

            {{#if startDate}}
                <div class="date">

                <span class="startDate">
                    {{startDate}}
                </span>

                    {{#if endDate}}
                        <span class="endDate">- {{endDate}}</span>
                    {{/if}}

                </div>
            {{/if}}

			{{#if institution}}<span class="institution"> <span class="mobile-hide">vid </span>{{institution}}</span>{{/if}}
			{{#if area}}<span class="area">, {{area}}</span>{{/if}}

			{{#if courses.length}}
			<ul class="courses">
				{{#each courses}}
				<li>{{.}}</li>
				{{/each}}
			</ul>
			{{/if}}

		</div>
		{{/each}}

	</section>
	{{/if}}
	
	{{#if resume.awards.length}}
	<section id="awards">
		<h1>Awards</h1>

		{{#each resume.awards}}
		<div class="item">

            {{#if title}}
			<div class="title">
				{{title}}
			</div>
			{{/if}}

			{{#if date}}
			<div class="date">
				{{date}}
			</div>
			{{/if}}

			{{#if awarder}}
			<div class="awarder">
				{{awarder}}
			</div>
			{{/if}}

			{{#if summary}}
			<div class="summary">
				<p>{{summary}}</p>
			</div>
			{{/if}}

		</div>
		{{/each}}

	</section>
	{{/if}}
	
	{{#if resume.publications.length}}
	<section id="publications">
		<h1>Publiceringar</h1>

		{{#each resume.publications}}
		<div class="item">

			{{#if name}}
			<h3 class="name">
				{{name}}
			</h3>
			{{/if}}

			{{#if publisher}}
			<span class="publisher">
				{{publisher}}
			</span>
			{{/if}}

			{{#if releaseDate}}
			<span class="releaseDate">
				{{releaseDate}}
			</span>
			{{/if}}

			{{#if website}}
			<div class="website">
				<a href="{{website}}">L\xE4nk till publicering</a>
			</div>
			{{/if}}

			{{#if summary}}
			<div class="summary">
				<p>{{summary}}</p>
			</div>
			{{/if}}

		</div>
		{{/each}}

	</section>
	{{/if}}
	
	{{#if resume.skills.length}}
	<section id="skills">
		<h1>F\xE4rdigheter</h1>

        <div class="inner">

            {{#each resume.skills}}
            <div class="item">

                {{#if name}}
                <h4 class="name">
                    {{name}}
                </h4>
                {{/if}}

                {{#if level}}
                <div class="level">
                    <em>{{level}}</em>
                </div>
                {{/if}}

                {{#if keywords.length}}
                <ul class="keywords">
                    {{#each keywords}}
                    <li>{{.}}</li>
                    {{/each}}
                </ul>
                {{/if}}

            </div>
            {{/each}}

        </div>

	</section>
	{{/if}}

	{{#if resume.languages.length}}
	<section id="languages">
		<h1>Spr\xE5kkunskaper</h1>

		{{#each resume.languages}}
		<div class="item">

			{{#if language}}
			<h4 class="language">
				{{language}}
			</h4>
			{{/if}}

			{{#if fluency}}
			<span class="fluency">- {{fluency}}</span>{{/if}}

		</div>
		{{/each}}

	</section>
	{{/if}}

	{{#if resume.interests.length}}
	<section id="interests">
		<h1>Intressen</h1>

		{{#each resume.interests}}
		<div class="item">

			{{#if name}}
			<h4 class="name">
				{{name}}
			</h4>
			{{/if}}

			{{#if keywords.length}}
			<ul class="keywords">
				{{#each keywords}}
				<li>{{.}}</li>
				{{/each}}
			</ul>
			{{/if}}

		</div>
		{{/each}}

	</section>
	{{/if}}

	{{#if resume.references.length}}
	<section id="references">
		<h1>Referenser</h1>

		{{#each resume.references}}
		<div class="item">

            {{#if name}}
                <h4 class="name">
                    {{name}}
                </h4>
            {{/if}}

            {{#if reference}}
			<span class="reference">
				{{reference}}
			</span>
			{{/if}}

		</div>
		{{/each}}

	</section>
	{{/if}}

	</div>
	
	</body>
</html>
`,"style.css":`* {

    padding:                0;
    margin:                 0;
    font-family:            'Roboto', sans-serif;
    color:                  #5D5D5D;

}

body, html {

	background-color:       #FFFFFF;
	line-height:            1.65;

}

strong {

    font-weight:            500;

}

h1,
h2 {

    color:                  #0177B4;

}

section {

    margin:                 50px 0;

}

    section h1 {

        font-weight:             400;

    }

@media only screen and ( max-device-width: 640px ) {

    .mobile-hide {

        display:                none;

    }

    .mobile-break {

        display:                block;

    }

    section {

        margin:                 30px 0;

    }
}

.mobile-clearfix:before,
.mobile-clearfix:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.mobile-clearfix:after {
    clear: both;
}

#header {

    background-color:       #f8f8f8;

}

    #header .inner {

        max-width:              720px;
        margin:                 0 auto;
        padding:                50px 0;

    }

        #header .inner .picture {

            width:                  110px;
            height:                 110px;
            border-radius:          55px;
            float:                  right;
            margin:                 -9px 0 0 0;

        }

        #header .inner .name-and-label {

            display:                inline-block;

        }

        #header .inner h1 {

            font-weight:            200;
            font-size:              38px;
            color:                  #0177B4;

        }

        #header .inner h2 {

            font-weight:            300;
            color:                  #0177B4;
            margin-top:             -10px;

        }

@media only screen and ( max-device-width: 640px ) {

        #header .inner {

            max-width:              100%;
            padding:                20px 15px;

        }

            #header .inner .picture {

                width:                  40px;
                height:                 40px;
                border-radius:          20px;
                margin:                 8px 0 0 0;

            }

            #header .inner h1 {

                font-size:              24px

            }

            #header .inner h2 {

                font-size:              16px

            }

}


#resume {

	margin:                 0 auto;
	max-width:              720px;
    padding:                0 5px 0 15px;

}

#basics { }

    #basics .contact {

        margin-left:            0px;

    }

    #basics .contact strong,
    #location strong {

        clear:                  both;
        float:                  left;
        line-height:            1.3;
        width:                  170px;

    }

@media only screen and ( max-device-width: 640px ) {

    #basics .contact strong,
    #location strong {

        display:                inline-block;
        line-height:            1.65;
        width:                  auto;
        float:                  none;

    }

}

#work,
#volunteer,
#education,
#awards,
#publications,
#skill,
#interests {}

    #work .item:not(:first-of-type),
    #volunteer .item:not(:first-of-type),
    #awards .item:not(:first-of-type),
    #publications .item:not(:first-of-type) {

        margin-top: 50px

    }

    #work .name,
    #volunteer .name,
    #education .studyType,
    #awards .title,
    #publications .name,
    #skills .name,
    #languages .language,
    #references .name,
    #interests .name {

        font-weight:            500;
        display:                inline-block;

    }

    #interests .name:nth-of-type(2n+2) {

        text-align:             center;

    }

    #interests .name:nth-of-type(3n+3) {

        text-align:             right;

    }

    #work .date,
    #volunteer .date,
    #education .date,
    #awards .date,
    #publications .releaseDate {

        float:                  right;

    }

    #work .highlights,
    #volunteer .highlights,
    #education .courses,
    #skills .keywords {

        padding-left:           25px;
        margin-top:             5px;

    }

    #work .highlights li,
    #volunteer .highlights li,
    #education .courses li,
    #skills .keywords li {

        margin-top:             1px;

    }

    #interests .keywords li {

        display:                inline-block;

    }


    #interests .item {

        max-width:              204px;
        text-align:             justify;
        display:                inline-block;
        margin-right:           0px;

    }

    #skills .item,
    #interests .item:not(:nth-of-type(3n+3)) {

        display:                inline-block;
        vertical-align:         top;
        margin-right:           50px;

    }



    #skills .level {

        margin-top:             -7px;

    }

    #education .item,
    #languages .item {

        margin-bottom:          5px;

    }

    .date,
    #languages .fluency {

        font-style:             italic;

    }

@media only screen and ( max-device-width: 640px ) {

    #work .position {

        font-size: 15px;
        font-style: italic;

    }

    #work .date {

        font-size: 15px;
        float: none;
        margin-top: -8px;
        display: block;
        font-style: normal;
        margin-bottom: 10px;

    }

    #work .item:not(:first-of-type),
    #volunteer .item:not(:first-of-type),
    #awards .item:not(:first-of-type),
    #publications .item:not(:first-of-type) {

        margin-top: 30px

    }

    #education .institution {

        display:    inline-block

    }

    #education .item:not(:last-of-type) {

        margin-bottom: 20px;

    }

    #interests .item {

        max-width: none;
        text-align: inherit;
        margin-right: 0 !important;

    }

    #interests .item:not(:last-of-type),
    #skills .item:not(:last-of-type) {

        margin-bottom: 20px;

    }



}


`},j={icons:["facebook.png","github.png","stackoverflow.png","vimeo.png"],".":["README.md","icons","index.html","index.js","package.json","resume.hbs","style.css"]};Vt=function(t,n){var e=Bt(t);return e!==void 0?e:""},qt=function(t,n){var e=ht(t);return e===void 0&&(e=[]),n&&n.withFileTypes?e.map(function(i){var s=pt(t)+"/"+i,r=ht(s)!==void 0;return{name:i,isFile:function(){return!r},isDirectory:function(){return r}}}):e},Jt=function(t){return Bt(t)!==void 0||ht(t)!==void 0},Ut=function(){},Gt=function(){},ct=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Wt=ct,Kt=function(){},zt=function(){},Yt=function(){return{pipe:function(t){return t},on:function(){return this}}},Xt=function(){return{write:function(){},end:function(){},on:function(){return this}}},Kn={readFileSync:Vt,readdirSync:qt,existsSync:Jt,writeFileSync:Ut,mkdirSync:Gt,statSync:ct,lstatSync:Wt,unlinkSync:Kt,rmdirSync:zt,createReadStream:Yt,createWriteStream:Xt}});var dt=m(Zt=>{"use strict";c();function Qt(t){this.string=t}Qt.prototype.toString=function(){return""+this.string};Zt.default=Qt});var F=m(N=>{"use strict";c();var zn=dt().default,Yn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Xn=/[&<>"'`]/g,Qn=/[&<>"'`]/;function Zn(t){return Yn[t]}function $n(t){for(var n=1;n<arguments.length;n++)for(var e in arguments[n])Object.prototype.hasOwnProperty.call(arguments[n],e)&&(t[e]=arguments[n][e]);return t}N.extend=$n;var mt=Object.prototype.toString;N.toString=mt;var Q=function(t){return typeof t=="function"};Q(/x/)&&(Q=function(t){return typeof t=="function"&&mt.call(t)==="[object Function]"});var Q;N.isFunction=Q;var $t=Array.isArray||function(t){return t&&typeof t=="object"?mt.call(t)==="[object Array]":!1};N.isArray=$t;function te(t){return t instanceof zn?t.toString():t==null?"":t?(t=""+t,Qn.test(t)?t.replace(Xn,Zn):t):t+""}N.escapeExpression=te;function ne(t){return!t&&t!==0?!0:!!($t(t)&&t.length===0)}N.isEmpty=ne;function ee(t,n){return(t?t+".":"")+n}N.appendContextPath=ee});var P=m(nn=>{"use strict";c();var gt=["description","fileName","lineNumber","message","name","number","stack"];function tn(t,n){var e;n&&n.firstLine&&(e=n.firstLine,t+=" - "+e+":"+n.firstColumn);for(var i=Error.prototype.constructor.call(this,t),s=0;s<gt.length;s++)this[gt[s]]=i[gt[s]];e&&(this.lineNumber=e,this.column=n.firstColumn)}tn.prototype=new Error;nn.default=tn});var O=m(_=>{"use strict";c();var b=F(),kt=P().default,ie="2.0.0";_.VERSION=ie;var se=6;_.COMPILER_REVISION=se;var re={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};_.REVISION_CHANGES=re;var en=b.isArray,vt=b.isFunction,sn=b.toString,rn="[object Object]";function bt(t,n){this.helpers=t||{},this.partials=n||{},ae(this)}_.HandlebarsEnvironment=bt;bt.prototype={constructor:bt,logger:J,log:an,registerHelper:function(t,n){if(sn.call(t)===rn){if(n)throw new kt("Arg not supported with multiple helpers");b.extend(this.helpers,t)}else this.helpers[t]=n},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,n){sn.call(t)===rn?b.extend(this.partials,t):this.partials[t]=n},unregisterPartial:function(t){delete this.partials[t]}};function ae(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new kt("Missing helper: '"+arguments[arguments.length-1].name+"'")}),t.registerHelper("blockHelperMissing",function(n,e){var i=e.inverse,s=e.fn;if(n===!0)return s(this);if(n===!1||n==null)return i(this);if(en(n))return n.length>0?(e.ids&&(e.ids=[e.name]),t.helpers.each(n,e)):i(this);if(e.data&&e.ids){var r=Z(e.data);r.contextPath=b.appendContextPath(e.data.contextPath,e.name),e={data:r}}return s(n,e)}),t.registerHelper("each",function(n,e){if(!e)throw new kt("Must pass iterator to #each");var i=e.fn,s=e.inverse,r=0,a="",o,p;if(e.data&&e.ids&&(p=b.appendContextPath(e.data.contextPath,e.ids[0])+"."),vt(n)&&(n=n.call(this)),e.data&&(o=Z(e.data)),n&&typeof n=="object")if(en(n))for(var l=n.length;r<l;r++)o&&(o.index=r,o.first=r===0,o.last=r===n.length-1,p&&(o.contextPath=p+r)),a=a+i(n[r],{data:o});else for(var u in n)n.hasOwnProperty(u)&&(o&&(o.key=u,o.index=r,o.first=r===0,p&&(o.contextPath=p+u)),a=a+i(n[u],{data:o}),r++);return r===0&&(a=s(this)),a}),t.registerHelper("if",function(n,e){return vt(n)&&(n=n.call(this)),!e.hash.includeZero&&!n||b.isEmpty(n)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(n,e){return t.helpers.if.call(this,n,{fn:e.inverse,inverse:e.fn,hash:e.hash})}),t.registerHelper("with",function(n,e){vt(n)&&(n=n.call(this));var i=e.fn;if(b.isEmpty(n))return e.inverse(this);if(e.data&&e.ids){var s=Z(e.data);s.contextPath=b.appendContextPath(e.data.contextPath,e.ids[0]),e={data:s}}return i(n,e)}),t.registerHelper("log",function(n,e){var i=e.data&&e.data.level!=null?parseInt(e.data.level,10):1;t.log(i,n)}),t.registerHelper("lookup",function(n,e){return n&&n[e]})}var J={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,n){if(J.level<=t){var e=J.methodMap[t];typeof console<"u"&&console[e]&&console[e].call(console,n)}}};_.logger=J;var an=J.log;_.log=an;var Z=function(t){var n=b.extend({},t);return n._parent=t,n};_.createFrame=Z});var ln=m(B=>{"use strict";c();var yt=F(),I=P().default,oe=O().COMPILER_REVISION,on=O().REVISION_CHANGES,le=O().createFrame;function he(t){var n=t&&t[0]||1,e=oe;if(n!==e)if(n<e){var i=on[e],s=on[n];throw new I("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+s+").")}else throw new I("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}B.checkRevision=he;function pe(t,n){if(!n)throw new I("No environment passed to template");if(!t||!t.main)throw new I("Unknown template object: "+typeof t);n.VM.checkRevision(t.compiler);var e=function(r,a,o,p,l,u,h,w,T){l&&(p=yt.extend({},p,l));var D=n.VM.invokePartial.call(this,r,o,p,u,h,w,T);if(D==null&&n.compile){var Lt={helpers:u,partials:h,data:w,depths:T};h[o]=n.compile(r,{data:w!==void 0,compat:t.compat},n),D=h[o](p,Lt)}if(D!=null){if(a){for(var x=D.split(`
`),E=0,rt=x.length;E<rt&&!(!x[E]&&E+1===rt);E++)x[E]=a+x[E];D=x.join(`
`)}return D}else throw new I("The partial "+o+" could not be compiled when running in runtime-only mode")},i={lookup:function(r,a){for(var o=r.length,p=0;p<o;p++)if(r[p]&&r[p][a]!=null)return r[p][a]},lambda:function(r,a){return typeof r=="function"?r.call(a):r},escapeExpression:yt.escapeExpression,invokePartial:e,fn:function(r){return t[r]},programs:[],program:function(r,a,o){var p=this.programs[r],l=this.fn(r);return a||o?p=$(this,r,l,a,o):p||(p=this.programs[r]=$(this,r,l)),p},data:function(r,a){for(;r&&a--;)r=r._parent;return r},merge:function(r,a){var o=r||a;return r&&a&&r!==a&&(o=yt.extend({},a,r)),o},noop:n.VM.noop,compilerInfo:t.compiler},s=function(r,a){a=a||{};var o=a.data;s._setup(a),!a.partial&&t.useData&&(o=fe(r,o));var p;return t.useDepths&&(p=a.depths?[r].concat(a.depths):[r]),t.main.call(i,r,i.helpers,i.partials,o,p)};return s.isTop=!0,s._setup=function(r){r.partial?(i.helpers=r.helpers,i.partials=r.partials):(i.helpers=i.merge(r.helpers,n.helpers),t.usePartial&&(i.partials=i.merge(r.partials,n.partials)))},s._child=function(r,a,o){if(t.useDepths&&!o)throw new I("must pass parent depths");return $(i,r,t[r],a,o)},s}B.template=pe;function $(t,n,e,i,s){var r=function(a,o){return o=o||{},e.call(t,a,t.helpers,t.partials,o.data||i,s&&[a].concat(s))};return r.program=n,r.depth=s?s.length:0,r}B.program=$;function ce(t,n,e,i,s,r,a){var o={partial:!0,helpers:i,partials:s,data:r,depths:a};if(t===void 0)throw new I("The partial "+n+" could not be found");if(t instanceof Function)return t(e,o)}B.invokePartial=ce;function ue(){return""}B.noop=ue;function fe(t,n){return(!n||!("root"in n))&&(n=n?le(n):{},n.root=t),n}});var fn=m(un=>{"use strict";c();var hn=O(),de=dt().default,me=P().default,xt=F(),pn=ln(),cn=function(){var t=new hn.HandlebarsEnvironment;return xt.extend(t,hn),t.SafeString=de,t.Exception=me,t.Utils=xt,t.escapeExpression=xt.escapeExpression,t.VM=pn,t.template=function(n){return pn.template(n,t)},t},tt=cn();tt.create=cn;tt.default=tt;un.default=tt});var St=m(mn=>{"use strict";c();var dn=P().default;function v(t){t=t||{},this.firstLine=t.first_line,this.firstColumn=t.first_column,this.lastColumn=t.last_column,this.lastLine=t.last_line}var U={ProgramNode:function(t,n,e){v.call(this,e),this.type="program",this.statements=t,this.strip=n},MustacheNode:function(t,n,e,i,s){if(v.call(this,s),this.type="mustache",this.strip=i,e!=null&&e.charAt){var r=e.charAt(3)||e.charAt(2);this.escaped=r!=="{"&&r!=="&"}else this.escaped=!!e;t instanceof U.SexprNode?this.sexpr=t:this.sexpr=new U.SexprNode(t,n),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(t,n,e){v.call(this,e),this.type="sexpr",this.hash=n;var i=this.id=t[0],s=this.params=t.slice(1);this.isHelper=!!(s.length||n),this.eligibleHelper=this.isHelper||i.isSimple},PartialNode:function(t,n,e,i,s){v.call(this,s),this.type="partial",this.partialName=t,this.context=n,this.hash=e,this.strip=i,this.strip.inlineStandalone=!0},BlockNode:function(t,n,e,i,s){v.call(this,s),this.type="block",this.mustache=t,this.program=n,this.inverse=e,this.strip=i,e&&!n&&(this.isInverse=!0)},RawBlockNode:function(t,n,e,i){if(v.call(this,i),t.sexpr.id.original!==e)throw new dn(t.sexpr.id.original+" doesn't match "+e,this);n=new U.ContentNode(n,i),this.type="block",this.mustache=t,this.program=new U.ProgramNode([n],{},i)},ContentNode:function(t,n){v.call(this,n),this.type="content",this.original=this.string=t},HashNode:function(t,n){v.call(this,n),this.type="hash",this.pairs=t},IdNode:function(t,n){v.call(this,n),this.type="ID";for(var e="",i=[],s=0,r="",a=0,o=t.length;a<o;a++){var p=t[a].part;if(e+=(t[a].separator||"")+p,p===".."||p==="."||p==="this"){if(i.length>0)throw new dn("Invalid path: "+e,this);p===".."?(s++,r+="../"):this.isScoped=!0}else i.push(p)}this.original=e,this.parts=i,this.string=i.join("."),this.depth=s,this.idName=r+this.string,this.isSimple=t.length===1&&!this.isScoped&&s===0,this.stringModeValue=this.string},PartialNameNode:function(t,n){v.call(this,n),this.type="PARTIAL_NAME",this.name=t.original},DataNode:function(t,n){v.call(this,n),this.type="DATA",this.id=t,this.stringModeValue=t.stringModeValue,this.idName="@"+t.stringModeValue},StringNode:function(t,n){v.call(this,n),this.type="STRING",this.original=this.string=this.stringModeValue=t},NumberNode:function(t,n){v.call(this,n),this.type="NUMBER",this.original=this.number=t,this.stringModeValue=Number(t)},BooleanNode:function(t,n){v.call(this,n),this.type="BOOLEAN",this.bool=t,this.stringModeValue=t==="true"},CommentNode:function(t,n){v.call(this,n),this.type="comment",this.comment=t,this.strip={inlineStandalone:!0}}};mn.default=U});var vn=m(gn=>{"use strict";c();var ge=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(s,r,a,o,p,l,u){var h=l.length-1;switch(p){case 1:return o.prepareProgram(l[h-1].statements,!0),l[h-1];break;case 2:this.$=new o.ProgramNode(o.prepareProgram(l[h]),{},this._$);break;case 3:this.$=l[h];break;case 4:this.$=l[h];break;case 5:this.$=l[h];break;case 6:this.$=l[h];break;case 7:this.$=new o.ContentNode(l[h],this._$);break;case 8:this.$=new o.CommentNode(l[h],this._$);break;case 9:this.$=new o.RawBlockNode(l[h-2],l[h-1],l[h],this._$);break;case 10:this.$=new o.MustacheNode(l[h-1],null,"","",this._$);break;case 11:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!1,this._$);break;case 12:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!0,this._$);break;case 13:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 14:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 15:this.$={strip:o.stripFlags(l[h-1],l[h-1]),program:l[h]};break;case 16:this.$={path:l[h-1],strip:o.stripFlags(l[h-2],l[h])};break;case 17:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 18:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 19:this.$=new o.PartialNode(l[h-3],l[h-2],l[h-1],o.stripFlags(l[h-4],l[h]),this._$);break;case 20:this.$=new o.PartialNode(l[h-2],void 0,l[h-1],o.stripFlags(l[h-3],l[h]),this._$);break;case 21:this.$=new o.SexprNode([l[h-2]].concat(l[h-1]),l[h],this._$);break;case 22:this.$=new o.SexprNode([l[h]],null,this._$);break;case 23:this.$=l[h];break;case 24:this.$=new o.StringNode(l[h],this._$);break;case 25:this.$=new o.NumberNode(l[h],this._$);break;case 26:this.$=new o.BooleanNode(l[h],this._$);break;case 27:this.$=l[h];break;case 28:l[h-1].isHelper=!0,this.$=l[h-1];break;case 29:this.$=new o.HashNode(l[h],this._$);break;case 30:this.$=[l[h-2],l[h]];break;case 31:this.$=new o.PartialNameNode(l[h],this._$);break;case 32:this.$=new o.PartialNameNode(new o.StringNode(l[h],this._$),this._$);break;case 33:this.$=new o.PartialNameNode(new o.NumberNode(l[h],this._$));break;case 34:this.$=new o.DataNode(l[h],this._$);break;case 35:this.$=new o.IdNode(l[h],this._$);break;case 36:l[h-2].push({part:l[h],separator:l[h-1]}),this.$=l[h-2];break;case 37:this.$=[{part:l[h]}];break;case 38:this.$=[];break;case 39:l[h-1].push(l[h]);break;case 48:this.$=[];break;case 49:l[h-1].push(l[h]);break;case 52:this.$=[l[h]];break;case 53:l[h-1].push(l[h]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(s,r){throw new Error(s)},parse:function(s){var r=this,a=[0],o=[null],p=[],l=this.table,u="",h=0,w=0,T=0,D=2,Lt=1;this.lexer.setInput(s),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var x=this.lexer.yylloc;p.push(x);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function rt(y){a.length=a.length-2*y,o.length=o.length-y,p.length=p.length-y}function Fn(){var y;return y=r.lexer.lex()||1,typeof y!="number"&&(y=r.symbols_[y]||y),y}for(var g,at,C,k,qe,ot,M={},K,S,Tt,z;;){if(C=a[a.length-1],this.defaultActions[C]?k=this.defaultActions[C]:((g===null||typeof g>"u")&&(g=Fn()),k=l[C]&&l[C][g]),typeof k>"u"||!k.length||!k[0]){var lt="";if(!T){z=[];for(K in l[C])this.terminals_[K]&&K>2&&z.push("'"+this.terminals_[K]+"'");this.lexer.showPosition?lt="Parse error on line "+(h+1)+`:
`+this.lexer.showPosition()+`
Expecting `+z.join(", ")+", got '"+(this.terminals_[g]||g)+"'":lt="Parse error on line "+(h+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(lt,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:x,expected:z})}}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+C+", token: "+g);switch(k[0]){case 1:a.push(g),o.push(this.lexer.yytext),p.push(this.lexer.yylloc),a.push(k[1]),g=null,at?(g=at,at=null):(w=this.lexer.yyleng,u=this.lexer.yytext,h=this.lexer.yylineno,x=this.lexer.yylloc,T>0&&T--);break;case 2:if(S=this.productions_[k[1]][1],M.$=o[o.length-S],M._$={first_line:p[p.length-(S||1)].first_line,last_line:p[p.length-1].last_line,first_column:p[p.length-(S||1)].first_column,last_column:p[p.length-1].last_column},E&&(M._$.range=[p[p.length-(S||1)].range[0],p[p.length-1].range[1]]),ot=this.performAction.call(M,u,w,h,this.yy,k[1],o,p),typeof ot<"u")return ot;S&&(a=a.slice(0,-1*S*2),o=o.slice(0,-1*S),p=p.slice(0,-1*S)),a.push(this.productions_[k[1]][0]),o.push(M.$),p.push(M._$),Tt=l[a[a.length-2]][a[a.length-1]],a.push(Tt);break;case 3:return!0}}return!0}},n=(function(){var i={EOF:1,parseError:function(r,a){if(this.yy.parser)this.yy.parser.parseError(r,a);else throw new Error(r)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var r=s.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var r=s.length,a=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var p=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===o.length?this.yylloc.first_column:0)+o[o.length-a.length].length-a[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),r=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,r,a,o,p,l;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),h=0;h<u.length&&(a=this._input.match(this.rules[u[h]]),!(a&&(!r||a[0].length>r[0].length)&&(r=a,o=h,!this.options.flex)));h++);return r?(l=r[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],s=this.performAction.call(this,this.yy,this,u[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return typeof r<"u"?r:this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(r){this.begin(r)}};return i.options={},i.performAction=function(r,a,o,p){function l(h,w){return a.yytext=a.yytext.substr(h,a.yyleng-w)}var u=p;switch(o){case 0:if(a.yytext.slice(-2)==="\\\\"?(l(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(l(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return a.yytext=a.yytext.substr(5,a.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return l(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return l(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return a.yytext=l(1,2).replace(/\\"/g,'"'),42;break;case 30:return a.yytext=l(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return a.yytext=l(1,2),50;break;case 37:return"INVALID";case 38:return 5}},i.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],i.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},i})();t.lexer=n;function e(){this.yy={}}return e.prototype=t,t.Parser=e,new e})();gn.default=ge});var kn=m(nt=>{"use strict";c();var ve=P().default;function ke(t,n){return{left:t.charAt(2)==="~",right:n.charAt(n.length-3)==="~"}}nt.stripFlags=ke;function be(t,n,e,i,s,r){if(t.sexpr.id.original!==i.path.original)throw new ve(t.sexpr.id.original+" doesn't match "+i.path.original,t);var a=e&&e.program,o={left:t.strip.left,right:i.strip.right,openStandalone:Et(n.statements),closeStandalone:wt((a||n).statements)};if(t.strip.right&&H(n.statements,null,!0),a){var p=e.strip;p.left&&A(n.statements,null,!0),p.right&&H(a.statements,null,!0),i.strip.left&&A(a.statements,null,!0),wt(n.statements)&&Et(a.statements)&&(A(n.statements),H(a.statements))}else i.strip.left&&A(n.statements,null,!0);return s?new this.BlockNode(t,a,n,o,r):new this.BlockNode(t,n,a,o,r)}nt.prepareBlock=be;function ye(t,n){for(var e=0,i=t.length;e<i;e++){var s=t[e],r=s.strip;if(r){var a=wt(t,e,n,s.type==="partial"),o=Et(t,e,n),p=r.openStandalone&&a,l=r.closeStandalone&&o,u=r.inlineStandalone&&a&&o;r.right&&H(t,e,!0),r.left&&A(t,e,!0),u&&(H(t,e),A(t,e)&&s.type==="partial"&&(s.indent=/([ \t]+$)/.exec(t[e-1].original)?RegExp.$1:"")),p&&(H((s.program||s.inverse).statements),A(t,e)),l&&(H(t,e),A((s.inverse||s.program).statements))}}return t}nt.prepareProgram=ye;function wt(t,n,e){n===void 0&&(n=t.length);var i=t[n-1],s=t[n-2];if(!i)return e;if(i.type==="content")return(s||!e?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}function Et(t,n,e){n===void 0&&(n=-1);var i=t[n+1],s=t[n+2];if(!i)return e;if(i.type==="content")return(s||!e?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}function H(t,n,e){var i=t[n==null?0:n+1];if(!(!i||i.type!=="content"||!e&&i.rightStripped)){var s=i.string;i.string=i.string.replace(e?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.string!==s}}function A(t,n,e){var i=t[n==null?t.length-1:n-1];if(!(!i||i.type!=="content"||!e&&i.leftStripped)){var s=i.string;return i.string=i.string.replace(e?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.string!==s,i.leftStripped}}});var _t=m(Pt=>{"use strict";c();var Nt=vn().default,bn=St().default,xe=kn(),Se=F().extend;Pt.parser=Nt;var yn={};Se(yn,xe,bn);function we(t){return t.constructor===bn.ProgramNode?t:(Nt.yy=yn,Nt.parse(t))}Pt.parse=we});var it=m(et=>{"use strict";c();var Dt=P().default,xn=F().isArray,Ee=[].slice;function At(){}et.Compiler=At;At.prototype={compiler:At,equals:function(t){var n=this.opcodes.length;if(t.opcodes.length!==n)return!1;for(var e=0;e<n;e++){var i=this.opcodes[e],s=t.opcodes[e];if(i.opcode!==s.opcode||!Sn(i.args,s.args))return!1}for(n=this.children.length,e=0;e<n;e++)if(!this.children[e].equals(t.children[e]))return!1;return!0},guid:0,compile:function(t,n){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=n,this.stringParams=n.stringParams,this.trackIds=n.trackIds;var e=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},e)for(var i in e)this.options.knownHelpers[i]=e[i];return this.accept(t)},accept:function(t){return this[t.type](t)},program:function(t){for(var n=t.statements,e=0,i=n.length;e<i;e++)this.accept(n[e]);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(s,r){return s-r}),this},compileProgram:function(t){var n=new this.compiler().compile(t,this.options),e=this.guid++,i;this.usePartial=this.usePartial||n.usePartial,this.children[e]=n;for(var s=0,r=n.depths.list.length;s<r;s++)i=n.depths.list[s],!(i<2)&&this.addDepth(i-1);return e},block:function(t){var n=t.mustache,e=t.program,i=t.inverse;e&&(e=this.compileProgram(e)),i&&(i=this.compileProgram(i));var s=n.sexpr,r=this.classifySexpr(s);r==="helper"?this.helperSexpr(s,e,i):r==="simple"?(this.simpleSexpr(s),this.opcode("pushProgram",e),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("blockValue",s.id.original)):(this.ambiguousSexpr(s,e,i),this.opcode("pushProgram",e),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var n=t.pairs,e,i;for(this.opcode("pushHash"),e=0,i=n.length;e<i;e++)this.pushParam(n[e][1]);for(;e--;)this.opcode("assignToHash",n[e][0]);this.opcode("popHash")},partial:function(t){var n=t.partialName;this.usePartial=!0,t.hash?this.accept(t.hash):this.opcode("push","undefined"),t.context?this.accept(t.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",n.name,t.indent||""),this.opcode("append")},content:function(t){t.string&&this.opcode("appendContent",t.string)},mustache:function(t){this.sexpr(t.sexpr),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(t,n,e){var i=t.id,s=i.parts[0],r=n!=null||e!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",n),this.opcode("pushProgram",e),this.ID(i),this.opcode("invokeAmbiguous",s,r)},simpleSexpr:function(t){var n=t.id;n.type==="DATA"?this.DATA(n):n.parts.length?this.ID(n):(this.addDepth(n.depth),this.opcode("getContext",n.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,n,e){var i=this.setupFullMustacheParams(t,n,e),s=t.id,r=s.parts[0];if(this.options.knownHelpers[r])this.opcode("invokeKnownHelper",i.length,r);else{if(this.options.knownHelpersOnly)throw new Dt("You specified knownHelpersOnly, but used the unknown helper "+r,t);s.falsy=!0,this.ID(s),this.opcode("invokeHelper",i.length,s.original,s.isSimple)}},sexpr:function(t){var n=this.classifySexpr(t);n==="simple"?this.simpleSexpr(t):n==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var n=t.parts[0];n?this.opcode("lookupOnContext",t.parts,t.falsy,t.isScoped):this.opcode("pushContext")},DATA:function(t){this.options.data=!0,this.opcode("lookupData",t.id.depth,t.id.parts)},STRING:function(t){this.opcode("pushString",t.string)},NUMBER:function(t){this.opcode("pushLiteral",t.number)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:Ee.call(arguments,1)})},addDepth:function(t){t!==0&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifySexpr:function(t){var n=t.isHelper,e=t.eligibleHelper,i=this.options;if(e&&!n){var s=t.id.parts[0];i.knownHelpers[s]?n=!0:i.knownHelpersOnly&&(e=!1)}return n?"helper":e?"ambiguous":"simple"},pushParams:function(t){for(var n=0,e=t.length;n<e;n++)this.pushParam(t[n])},pushParam:function(t){this.stringParams?(t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",t.stringModeValue,t.type),t.type==="sexpr"&&this.sexpr(t)):(this.trackIds&&this.opcode("pushId",t.type,t.idName||t.stringModeValue),this.accept(t))},setupFullMustacheParams:function(t,n,e){var i=t.params;return this.pushParams(i),this.opcode("pushProgram",n),this.opcode("pushProgram",e),t.hash?this.hash(t.hash):this.opcode("emptyHash"),i}};function Ne(t,n,e){if(t==null||typeof t!="string"&&t.constructor!==e.AST.ProgramNode)throw new Dt("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);n=n||{},"data"in n||(n.data=!0),n.compat&&(n.useDepths=!0);var i=e.parse(t),s=new e.Compiler().compile(i,n);return new e.JavaScriptCompiler().compile(s,n)}et.precompile=Ne;function Pe(t,n,e){if(t==null||typeof t!="string"&&t.constructor!==e.AST.ProgramNode)throw new Dt("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);n=n||{},"data"in n||(n.data=!0),n.compat&&(n.useDepths=!0);var i;function s(){var a=e.parse(t),o=new e.Compiler().compile(a,n),p=new e.JavaScriptCompiler().compile(o,n,void 0,!0);return e.template(p)}var r=function(a,o){return i||(i=s()),i.call(this,a,o)};return r._setup=function(a){return i||(i=s()),i._setup(a)},r._child=function(a,o,p){return i||(i=s()),i._child(a,o,p)},r}et.compile=Pe;function Sn(t,n){if(t===n)return!0;if(xn(t)&&xn(n)&&t.length===n.length){for(var e=0;e<t.length;e++)if(!Sn(t[e],n[e]))return!1;return!0}}});var Pn=m(Nn=>{"use strict";c();var _e=O().COMPILER_REVISION,Ae=O().REVISION_CHANGES,Ct=P().default;function G(t){this.value=t}function R(){}R.prototype={nameLookup:function(t,n){return R.isValidJavaScriptVariableName(n)?t+"."+n:t+"['"+n+"']"},depthedLookup:function(t){return this.aliases.lookup="this.lookup",'lookup(depths, "'+t+'")'},compilerInfo:function(){var t=_e,n=Ae[t];return[t,n]},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,n,e,i){this.environment=t,this.options=n,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!e,this.context=e||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(t,n),this.useDepths=this.useDepths||t.depths.list.length||this.options.compat;var s=t.opcodes,r,a,o;for(a=0,o=s.length;a<o;a++)r=s[a],this[r.opcode].apply(this,r.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Ct("Compile completed with content left on stack");var p=this.createFunctionContext(i);if(this.isChild)return p;var l={compiler:this.compilerInfo(),main:p},u=this.context.programs;for(a=0,o=u.length;a<o;a++)u[a]&&(l[a]=u[a]);return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.options.compat&&(l.compat=!0),i||(l.compiler=JSON.stringify(l.compiler),l=this.objectLiteral(l)),l},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(t){var n="",e=this.stackVars.concat(this.registers.list);e.length>0&&(n+=", "+e.join(", "));for(var i in this.aliases)this.aliases.hasOwnProperty(i)&&(n+=", "+i+"="+this.aliases[i]);var s=["depth0","helpers","partials","data"];this.useDepths&&s.push("depths");var r=this.mergeSource(n);return t?(s.push(r),Function.apply(this,s)):"function("+s.join(",")+`) {
  `+r+"}"},mergeSource:function(t){for(var n="",e,i=!this.forceBuffer,s,r=0,a=this.source.length;r<a;r++){var o=this.source[r];o.appendToBuffer?e?e=e+`
    + `+o.content:e=o.content:(e&&(n?n+="buffer += "+e+`;
  `:(s=!0,n=e+`;
  `),e=void 0),n+=o+`
  `,this.environment.isSimple||(i=!1))}return i?(e||!n)&&(n+="return "+(e||'""')+`;
`):(t+=", buffer = "+(s?"":this.initializeBuffer()),e?n+="return buffer + "+e+`;
`:n+=`return buffer;
`),t&&(n="var "+t.substring(2)+(s?"":`;
  `)+n),n},blockValue:function(t){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var n=[this.contextName(0)];this.setupParams(t,0,n);var e=this.popStack();n.splice(1,0,e),this.push("blockHelperMissing.call("+n.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams("",0,t,!0),this.flushInline();var n=this.topStack();t.splice(1,0,n),this.pushSource("if (!"+this.lastHelper+") { "+n+" = blockHelperMissing.call("+t.join(", ")+"); }")},appendContent:function(t){this.pendingContent&&(t=this.pendingContent+t),this.pendingContent=t},append:function(){this.flushInline();var t=this.popStack();this.pushSource("if ("+t+" != null) { "+this.appendToBuffer(t)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,n,e){var i=0,s=t.length;for(!e&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[i++])):this.pushContext();i<s;i++)this.replaceStack(function(r){var a=this.nameLookup(r,t[i],"context");return n?" && "+a:" != null ? "+a+" : "+r})},lookupData:function(t,n){t?this.pushStackLiteral("this.data(data, "+t+")"):this.pushStackLiteral("data");for(var e=n.length,i=0;i<e;i++)this.replaceStack(function(s){return" && "+this.nameLookup(s,n[i],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(t,n){this.pushContext(),this.pushString(n),n!=="sexpr"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+t.ids.join(",")+"}"),this.stringParams&&(this.push("{"+t.contexts.join(",")+"}"),this.push("{"+t.types.join(",")+"}")),this.push(`{
    `+t.values.join(`,
    `)+`
  }`)},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},invokeHelper:function(t,n,e){this.aliases.helperMissing="helpers.helperMissing";var i=this.popStack(),s=this.setupHelper(t,n),r=(e?s.name+" || ":"")+i+" || helperMissing";this.push("(("+r+").call("+s.callParams+"))")},invokeKnownHelper:function(t,n){var e=this.setupHelper(t,n);this.push(e.name+".call("+e.callParams+")")},invokeAmbiguous:function(t,n){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var e=this.popStack();this.emptyHash();var i=this.setupHelper(0,t,n),s=this.lastHelper=this.nameLookup("helpers",t,"helper");this.push("((helper = (helper = "+s+" || "+e+") != null ? helper : helperMissing"+(i.paramsInit?"),("+i.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+i.callParams+") : helper))")},invokePartial:function(t,n){var e=[this.nameLookup("partials",t,"partial"),"'"+n+"'","'"+t+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?e.push("data"):this.options.compat&&e.push("undefined"),this.options.compat&&e.push("depths"),this.push("this.invokePartial("+e.join(", ")+")")},assignToHash:function(t){var n=this.popStack(),e,i,s;this.trackIds&&(s=this.popStack()),this.stringParams&&(i=this.popStack(),e=this.popStack());var r=this.hash;e&&r.contexts.push("'"+t+"': "+e),i&&r.types.push("'"+t+"': "+i),s&&r.ids.push("'"+t+"': "+s),r.values.push("'"+t+"': ("+n+")")},pushId:function(t,n){t==="ID"||t==="DATA"?this.pushString(n):t==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:R,compileChildren:function(t,n){for(var e=t.children,i,s,r=0,a=e.length;r<a;r++){i=e[r],s=new this.compiler;var o=this.matchExistingProgram(i);o==null?(this.context.programs.push(""),o=this.context.programs.length,i.index=o,i.name="program"+o,this.context.programs[o]=s.compile(i,n,this.context,!this.precompile),this.context.environments[o]=i,this.useDepths=this.useDepths||s.useDepths):(i.index=o,i.name="program"+o)}},matchExistingProgram:function(t){for(var n=0,e=this.context.environments.length;n<e;n++){var i=this.context.environments[n];if(i&&i.equals(t))return n}},programExpression:function(t){var n=this.environment.children[t],e=n.depths.list,i=this.useDepths,s,r=[n.index,"data"];return i&&r.push("depths"),"this.program("+r.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new G(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var n=this.incrStack();return this.pushSource(n+" = "+t+";"),this.compileStack.push(n),n},replaceStack:function(t){var n="",e=this.isInline(),i,s,r;if(!this.isInline())throw new Ct("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof G)n=i=a.value,r=!0;else{s=!this.stackSlot;var o=s?this.incrStack():this.topStackName();n="("+this.push(o)+" = "+a+")",i=this.topStack()}var p=t.call(this,i);r||this.popStack(),s&&this.stackSlot--,this.push("("+n+p+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var n=0,e=t.length;n<e;n++){var i=t[n];i instanceof G?this.compileStack.push(i):this.pushStack(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var n=this.isInline(),e=(n?this.inlineStack:this.compileStack).pop();if(!t&&e instanceof G)return e.value;if(!n){if(!this.stackSlot)throw new Ct("Invalid stack pop");this.stackSlot--}return e},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,n=t[t.length-1];return n instanceof G?n.value:n},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var n=[];for(var e in t)t.hasOwnProperty(e)&&n.push(this.quotedString(e)+":"+t[e]);return"{"+n.join(",")+"}"},setupHelper:function(t,n,e){var i=[],s=this.setupParams(n,t,i,e),r=this.nameLookup("helpers",n,"helper");return{params:i,paramsInit:s,name:r,callParams:[this.contextName(0)].concat(i).join(", ")}},setupOptions:function(t,n,e){var i={},s=[],r=[],a=[],o,p,l;i.name=this.quotedString(t),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack()),p=this.popStack(),l=this.popStack(),(l||p)&&(l||(l="this.noop"),p||(p="this.noop"),i.fn=l,i.inverse=p);for(var u=n;u--;)o=this.popStack(),e[u]=o,this.trackIds&&(a[u]=this.popStack()),this.stringParams&&(r[u]=this.popStack(),s[u]=this.popStack());return this.trackIds&&(i.ids="["+a.join(",")+"]"),this.stringParams&&(i.types="["+r.join(",")+"]",i.contexts="["+s.join(",")+"]"),this.options.data&&(i.data="data"),i},setupParams:function(t,n,e,i){var s=this.objectLiteral(this.setupOptions(t,n,e));return i?(this.useRegister("options"),e.push("options"),"options="+s):(e.push(s),"")}};var wn="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),De=R.RESERVED_WORDS={};for(st=0,En=wn.length;st<En;st++)De[wn[st]]=!0;var st,En;R.isValidJavaScriptVariableName=function(t){return!R.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};Nn.default=R});var Dn=m(An=>{"use strict";c();var V=fn().default,Ce=St().default,Oe=_t().parser,Ie=_t().parse,He=it().Compiler,Re=it().compile,Le=it().precompile,Te=Pn().default,Me=V.create,_n=function(){var t=Me();return t.compile=function(n,e){return Re(n,e,t)},t.precompile=function(n,e){return Le(n,e,t)},t.AST=Ce,t.Compiler=He,t.JavaScriptCompiler=Te,t.Parser=Oe,t.parse=Ie,t};V=_n();V.create=_n;V.default=V;An.default=V});var It=m(Cn=>{"use strict";c();function Ot(){}Ot.prototype={constructor:Ot,accept:function(t){return this[t.type](t)}};Cn.default=Ot});var On=m(Ht=>{"use strict";c();var je=It().default;function Fe(t){return new d().accept(t)}Ht.print=Fe;function d(){this.padding=0}Ht.PrintVisitor=d;d.prototype=new je;d.prototype.pad=function(t){for(var n="",e=0,i=this.padding;e<i;e++)n=n+"  ";return n=n+t+`
`,n};d.prototype.program=function(t){var n="",e=t.statements,i,s;for(i=0,s=e.length;i<s;i++)n=n+this.accept(e[i]);return this.padding--,n};d.prototype.block=function(t){var n="";return n=n+this.pad("BLOCK:"),this.padding++,n=n+this.accept(t.mustache),t.program&&(n=n+this.pad("PROGRAM:"),this.padding++,n=n+this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,n=n+this.pad("{{^}}"),this.padding++,n=n+this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,n};d.prototype.sexpr=function(t){for(var n=t.params,e=[],i,s=0,r=n.length;s<r;s++)e.push(this.accept(n[s]));return n="["+e.join(", ")+"]",i=t.hash?" "+this.accept(t.hash):"",this.accept(t.id)+" "+n+i};d.prototype.mustache=function(t){return this.pad("{{ "+this.accept(t.sexpr)+" }}")};d.prototype.partial=function(t){var n=this.accept(t.partialName);return t.context&&(n+=" "+this.accept(t.context)),t.hash&&(n+=" "+this.accept(t.hash)),this.pad("{{> "+n+" }}")};d.prototype.hash=function(t){for(var n=t.pairs,e=[],i,s,r=0,a=n.length;r<a;r++)i=n[r][0],s=this.accept(n[r][1]),e.push(i+"="+s);return"HASH{"+e.join(", ")+"}"};d.prototype.STRING=function(t){return'"'+t.string+'"'};d.prototype.NUMBER=function(t){return"NUMBER{"+t.number+"}"};d.prototype.BOOLEAN=function(t){return"BOOLEAN{"+t.bool+"}"};d.prototype.ID=function(t){var n=t.parts.join("/");return t.parts.length>1?"PATH:"+n:"ID:"+n};d.prototype.PARTIAL_NAME=function(t){return"PARTIAL:"+t.name};d.prototype.DATA=function(t){return"@"+this.accept(t.id)};d.prototype.content=function(t){return this.pad("CONTENT[ '"+t.string+"' ]")};d.prototype.comment=function(t){return this.pad("{{! '"+t.comment+"' }}")}});var Rn=m((wi,Hn)=>{c();var W=Dn().default;W.Visitor=It().default;var In=On();W.PrintVisitor=In.PrintVisitor;W.print=In.print;Hn.exports=W;typeof q<"u"&&q.extensions&&(Rt=function(t,n){var e=(ft(),Ft(ut)),i=e.readFileSync(n,"utf8");t.exports=W.compile(i)},q.extensions[".handlebars"]=Rt,q.extensions[".hbs"]=Rt);var Rt});var Mn=m((Pi,Tn)=>{c();var Ln=(ft(),Ft(ut)),Be=Rn();function Ve(t){var n=Ln.readFileSync("//style.css","utf-8"),e=Ln.readFileSync("//resume.hbs","utf-8");return Be.compile(e)({css:n,resume:t})}Tn.exports={render:Ve}});c();var L=Wn(Mn(),1),jn=L.default??L,Ai=jn.render??L.render,Di=jn.pdfRenderOptions??L.pdfRenderOptions;export{Di as pdfRenderOptions,Ai as render};
