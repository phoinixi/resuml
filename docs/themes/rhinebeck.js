var Bt=Object.create;var z=Object.defineProperty;var Vt=Object.getOwnPropertyDescriptor;var qt=Object.getOwnPropertyNames;var Jt=Object.getPrototypeOf,Ut=Object.prototype.hasOwnProperty;var V=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var Mn=(n,t)=>()=>(n&&(t=n(n=0)),t);var m=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),Gt=(n,t)=>{for(var e in t)z(n,e,{get:t[e],enumerable:!0})},Fn=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of qt(t))!Ut.call(n,s)&&s!==e&&z(n,s,{get:()=>t[s],enumerable:!(i=Vt(t,s))||i.enumerable});return n};var Wt=(n,t,e)=>(e=n!=null?Bt(Jt(n)):{},Fn(t||!n||!n.__esModule?z(e,"default",{value:n,enumerable:!0}):e,n)),Bn=n=>Fn(z({},"__esModule",{value:!0}),n);var c=Mn(()=>{});var dn={};Gt(dn,{createReadStream:()=>Qn,createWriteStream:()=>Xn,default:()=>Kt,existsSync:()=>Un,lstatSync:()=>Kn,mkdirSync:()=>Wn,readFileSync:()=>qn,readdirSync:()=>Jn,rmdirSync:()=>Yn,statSync:()=>un,unlinkSync:()=>zn,writeFileSync:()=>Gn});function cn(n){return String(n).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function Vn(n){var t=cn(n);if(Y[t]!==void 0)return Y[t];for(var e=Object.keys(Y),i=0;i<e.length;i++)if(t.endsWith("/"+e[i])||t===e[i])return Y[e[i]]}function pn(n){var t=cn(n);if(Q[t]!==void 0)return Q[t];for(var e=Object.keys(Q),i=0;i<e.length;i++)if(t.endsWith("/"+e[i])||t===e[i])return Q[e[i]]}var Y,Q,qn,Jn,Un,Gn,Wn,un,Kn,zn,Yn,Qn,Xn,Kt,fn=Mn(()=>{"use strict";c();Y={"index.html":`<!doctype html>
<html>
	<head>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimal-ui">
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

@media only all and ( max-device-width: 640px ) {

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

@media only all and ( max-device-width: 640px ) {

        #header .inner {

            max-width:              100%;
            padding:                20px 15px;

        }

            #header .inner .picture {

                width:                  60px;
                height:                 60px;
                border-radius:          30px;
                margin:                 0;

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

@media only all and ( max-device-width: 640px ) {

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

@media only all and ( max-device-width: 640px ) {

    #work .position {

        font-size:              15px;
        font-style:             italic;

    }

    #work .date {

        font-size:              15px;
        float:                  none;
        margin-top:             -8px;
        display:                block;
        font-style:             normal;
        margin-bottom:          10px;

    }

    #work .item:not(:first-of-type),
    #volunteer .item:not(:first-of-type),
    #awards .item:not(:first-of-type),
    #publications .item:not(:first-of-type) {

        margin-top:             30px

    }

    #education .institution {

        display:                inline-block

    }

    #education .item:not(:last-of-type) {

        margin-bottom:          20px;

    }

    #interests .item {

        max-width:              none;
        text-align:             inherit;
        margin-right:           0 !important;

    }

    #interests .item:not(:last-of-type),
    #skills .item:not(:last-of-type) {

        margin-bottom:          20px;

    }



}

#footer {

    background:             #f8f8f8;
    margin:                 0;

}

    #footer .inner {

        width:                  720px;
        padding:                50px 5px;
        margin:                 0 auto;

    }

	</style>
	
	</head>
	<body>


    <!-- Header -->
    <div id="header">
        <div class="inner">

            <div class="name-and-label">
                <h1>Janne Klouman</h1>
                <h2>Front-endutvecklare</h2>
            </div>

            <img class="picture" src="http://resume.japmag.net/cvbild.jpg" alt="" />

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

                        <span><a class="username" target="_blank" href="https://github.com/janneklouman">github.com/janneklouman</a></span>
                    </div>
                    <div class="item">
                        <strong>Facebook</strong>

                        <span><a class="username" target="_blank" href="https://www.facebook.com/janneklouman">facebook.com/janneklouman</a></span>
                    </div>
                    <div class="item">
                        <strong>Vimeo</strong>

                        <span><a class="username" target="_blank" href="https://vimeo.com/user5705728">vimeo.com/user5705728</a></span>
                    </div>
                    <div class="item">
                        <strong>Stack Overflow</strong>

                        <span><a class="username" target="_blank" href="http://stackoverflow.com/u/2298963">stackoverflow/2298963</a></span>
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
                <p>Min passion ligger i webb- och systemutveckling, design (anv\xE4ndarv\xE4nlighet, estetik och grafisk formgivning), samt f\xF6r skapande i alla dess former. Jag \xE4r snabb, noggrann, och l\xE4raktig. Jag \xE4r duktigast inom HTML, CSS, PHP, och WordPress. Jag \xE4r \xE4ven bekv\xE4m med JavaScript och har utvecklat i AngularJS, samt i Java f\xF6r Android. Ut\xF6ver det har jag jobbat lite med C# i diverse skolarbeten.</p>

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
				<p>Frilansning \xE5t mestadels mindre f\xF6retag, men jag har \xE4ven utf\xF6rt konsultuppdrag hos reklambyr\xE5n Rodolfo och s\xE5ledes jobbat med aningen st\xF6rre klienter som Sj\xF6lins gymnasium samt Nackademins N\xE4ringslivsgymnasium. N\xE5gra av mina projekt:</p>
			</div>

			<ul class="highlights">
				<li>Go Muffins, Go! \xE4r en vegansk catering- och matfirma i Tokyo. Jag har formgivit och utvecklat dess hemsida http://www.gomuffinsgo.com</li>
				<li>colorhelper \xE4r ett sidoprojekt som jag utvecklat p\xE5 fritiden f\xF6r att bekanta mig med AngularJS, SVG, samt L10n. http://colorhelper.japmag.net</li>
				<li>Next Up \xE4r en t\xE4vling riktad \xE5t \xE5ttondeklassare f\xF6r att inspirera dem till en karri\xE4r inom IT-branschen. Jag har utvecklat hemsidan http://www.nextup.se</li>
				<li>Sj\xF6lins Gymnasium \xE4r en gymnasieskola i Stockholm. Jag har utvecklat st\xF6rsta delen av hemsidan http://www.sjolinsgymnasium.se</li>
				<li>Mitt f\xF6rsta androidprojekt, skapat \xE5t Emmabodafestivalen 2011. V\xE4l mottaget och finns att h\xE4mta h\xE4r: https://play.google.com/store/apps/details?id=com.spelschema</li>
				<li>Fler projekt delas g\xE4rna vid intresse.</li>
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
				<p>Extrajobb d\xE5 och d\xE5 vid sidan om studier, samt sommarjobb. Arbetsuppgifterna var v\xE4ldigt varierande men r\xF6rde sig ofta om att konvertera filer till \xF6vers\xE4ttbara format, samt om att extrahera text fr\xE5n filer (ofta med hj\xE4lp av regulj\xE4ra uttryck). Jag l\xE4rde mig mycket om \xF6vers\xE4ttningsprocesser som nu ligger i bakhuvudet n\xE4r jag utvecklar.</p>
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
				<p>Helgjobb i Tokyo som engelskl\xE4rare f\xF6r barn i \xE5ldern 2-12 \xE5r. Ett mycket roligt jobb.</p>
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
                    <li>CSS/LESS</li>
                    <li>PHP</li>
                    <li>WordPress+ACF</li>
                    <li>AngularJS</li>
                    <li>jQuery</li>
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
                    <li>Adobe Photoshop</li>
                    <li>Adobe Premiere</li>
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
				<li>Jag har ett stort intresse f\xF6r skapande i alla dess former. Ut\xF6ver webb och mobil s\xE5 \xE4lskar jag att jobba med video, Arduino, LEGO, foto, kl\xE4der, musik.</li>
			</ul>

		</div>
		<div class="item">

			<h4 class="name">
				Japan
			</h4>

			<ul class="keywords">
				<li>Japan har spelat en stor roll i mitt liv, och \xE4r ett land som jag \xE4r djupt fascinerad av. Spr\xE5ket, maten, kulturen, och m\xE4nniskorna ligger mig varmt om hj\xE4rtat. Jag f\xF6rs\xF6ker bes\xF6ka minst en g\xE5ng om \xE5ret.</li>
			</ul>

		</div>
		<div class="item">

			<h4 class="name">
				Spel
			</h4>

			<ul class="keywords">
				<li>Sedan ung \xE5lder har jag vart v\xE4ldigt intresserad av spel. Nu f\xF6r tiden spelar jag ett spel som heter Dota lite d\xE5 och d\xE5 och f\xF6ljer t\xE4vlingsscenen.</li>
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

    <section id="footer">

        <div class="inner shake">

            Driven av <a href="https://jsonresume.org/">JSONResume</a>.<br/>
            Tema: <a href="https://github.com/janneklouman/jsonresume-theme-uppsala" title="Visa p\xE5 GitHub">Uppsala</a>, utvecklat av Janne Klouman.

        </div>

    </section>
	
	</body>
</html>
`,"package.json":`{
  "name": "jsonresume-theme-rhinebeck",
  "version": "0.0.1",
  "description": "Rhinebeck theme for JSON Resume",
  "author": "Janne Klouman",
  "repository": {
    "type": "git",
    "url": "https://github.com/janneklouman/jsonresume-theme-rhinebeck"
  },
  "license": "MIT",
  "dependencies": {
    "handlebars": "^2.0.0-alpha.4"
  }
}
`,"resume.en.json":`{
  "basics": {
    "name": "Janne Klouman",
    "label": "Front end developer",
    "picture": "http://resume.japmag.net/cvbild.jpg",
    "email": "janne@klouman.com",
    "phone": "(+46) 707 941 842",
    "website": "",
    "summary": "I'm passionate about web development, design (user friendliness, aethetics and graphic design), and about creating in all aspects. I'm fast, pay attention to detail, and a quick learner. My primary skills lie within HTML, CSS, PHP, and WordPress. I also feel comfortable with JavaScript and I have developed using AngularJS, also in Java for Android. Finally I had brief experience with C# in some school projects.",
    "location": {
      "address": "Middagsv\xE4gen 8",
      "postalCode": "146 32",
      "city": "Tullinge",
      "countryCode": "SE",
      "region": "Stockholm"
    },
    "profiles": [
      {
        "network": "GitHub",
        "username": "github.com/janneklouman",
        "url": "https://github.com/janneklouman"
      },
      {
        "network": "Facebook",
        "username": "facebook.com/janneklouman",
        "url": "https://www.facebook.com/janneklouman"
      },
      {
        "network": "Vimeo",
        "username": "vimeo.com/user5705728",
        "url": "https://vimeo.com/user5705728"
      },
      {
        "network": "Stack Overflow",
        "username": "stackoverflow/2298963",
        "url": "http://stackoverflow.com/u/2298963"
      }
    ]
  },
  "work": [
    {
      "company": "One-man business",
      "position": "Web developer",
      "website": "",
      "startDate": "Mar 2011, ongoing",
      "endDate": "",
      "summary": "Mostly freelance work for smaller businesses. I've also done some work through advertisement agency Rodolfo, and thus worked with some larger clients like Sj\xF6lins Gymnasium and Nackademiens N\xE4ringslivsgymnasium. Here are some of my projects:",
      "highlights": [
        "Go Muffins, Go! is a vegan catering and food business in Tokyo. I've developed and designed the website http://www.gomuffinsgo.com",
        "colorhelper is a side project that I developed to learn AngularJS, SVG, and L10n. http://colorhelper.japmag.net",
        "Next Up is a competition for grade eight students held to inspire them into choosing a an IT-career I've developed the website http://www.nextup.se",
        "Sj\xF6lins Gymnasium is a high school in Stockholm. I've developed most part of the website http://www.sjolinsgymnasium.se",
        "My first Android project, made for Emmabodafestivalen 2011. It was well received and can be downloaded here: https://play.google.com/store/apps/details?id=com.spelschema",
        "I'll gladly share more projects if there's interest."
      ]
    },
    {
      "company": "Semantix AB",
      "position": "Project technician",
      "website": "http://www.semantix.se/",
      "startDate": "Dec 2012",
      "endDate": "Aug 2014",
      "summary": "Extra work alongside my university studies. My work duties were varying in nature, but often had to do with converting files into translatable formats, and extracting translatable text from different files. I learned a lot about the translation process, and gained a deeper respect for languages.",
      "highlights": []
    },
    {
      "company": "\u3053\u3069\u3082\u82F1\u8A9E\u306EGengoWorld!",
      "position": "English teacher",
      "website": "http://gengoworld.com/",
      "startDate": "Maj 2015",
      "endDate": "Aug 2015",
      "summary": "Weekend job as an English teacher for young kids (2-10 years old). A very fun job",
      "highlights": []
    }
  ],
  "volunteer": [],
  "education": [
    {
      "institution": "ISI Language School",
      "area": "Tokyo",
      "studyType": "Japanese",
      "startDate": "Jan 2011",
      "endDate": "Mar 2011",
      "gpa": "",
      "courses": []
    },
    {
      "institution": "Dalarna University",
      "area": "Distance",
      "studyType": "Japanese",
      "startDate": "Spring 2012, Fall 2013",
      "endDate": "",
      "gpa": "",
      "courses": []
    },
    {
      "institution": "Uppsala University",
      "area": "",
      "studyType": "Information Systems",
      "startDate": "Sep 2012",
      "endDate": "Jun 2014",
      "gpa": "",
      "courses": []
    },
    {
      "institution": "Keio University",
      "area": "Tokyo",
      "studyType": "Japanese & culture courses",
      "startDate": "Sep 2014",
      "endDate": "Aug 2015",
      "gpa": "",
      "courses": []
    }
  ],
  "awards": [],
  "publications": [],
  "skills": [
    {
      "name": "Web development",
      "level": "",
      "keywords": [
        "HTML5",
        "CSS/LESS",
        "PHP",
        "WordPress+ACF",
        "AngularJS",
        "jQuery"
      ]
    },
    {
      "name": "Translation tools",
      "level": "",
      "keywords": [
        "Trados Studio",
        "SDL WorldServer",
        "Passolo"
      ]
    },
    {
      "name": "Other",
      "level": "",
      "keywords": [
        "Adobe Photoshop",
        "Adobe Premiere",
        "GitHub",
        "Android (Java)"
      ]
    }
  ],
  "languages": [
    {
      "language": "Swedish",
      "fluency": "Mother tongue"
    },
    {
      "language": "English",
      "fluency": "Academic reading / Advanced speaking"
    },
    {
      "language": "Japanese",
      "fluency": "Intermediate"
    }
  ],
  "interests": [
    {
      "name": "Creating",
      "keywords": [
        "I love making things, and I easily get inspired by all aspects of creating. Besides web and mobile I love working with video, Arduino, LEGO, photo, clothes, music."
      ]
    },
    {
      "name": "Japan",
      "keywords": [
        "Japan has played a big role in my life, and is a country that I'm deeply fascinated by. I hold the language, culture, and people close to my heart. I try to visit at least once per year."
      ]
    },
    {
      "name": "Gaming",
      "keywords": [
        "Since I was a kid I've been interested in computer games. Nowadays I play a game called Dota every now and then, and follow the competitive scene."
      ]
    }
  ],
  "references": [
    {
      "name": "Maria Nilsson.",
      "reference": "My closest boss at Semantix AB. Contact: Maria.Nilsson@semantix.se"
    }
  ]
}`,"resume.hbs":`<!doctype html>
<html>
	<head>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimal-ui">
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

                        {{#if username}}<span><a class="username" target="_blank" href="{{url}}">{{username}}</a></span>{{/if}}
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

    <section id="footer">

        <div class="inner shake">

            Driven av <a href="https://jsonresume.org/">JSONResume</a>.<br/>
            Tema: <a href="https://github.com/janneklouman/jsonresume-theme-uppsala" title="Visa p\xE5 GitHub">Uppsala</a>, utvecklat av Janne Klouman.

        </div>

    </section>
	
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

@media only all and ( max-device-width: 640px ) {

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

@media only all and ( max-device-width: 640px ) {

        #header .inner {

            max-width:              100%;
            padding:                20px 15px;

        }

            #header .inner .picture {

                width:                  60px;
                height:                 60px;
                border-radius:          30px;
                margin:                 0;

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

@media only all and ( max-device-width: 640px ) {

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

@media only all and ( max-device-width: 640px ) {

    #work .position {

        font-size:              15px;
        font-style:             italic;

    }

    #work .date {

        font-size:              15px;
        float:                  none;
        margin-top:             -8px;
        display:                block;
        font-style:             normal;
        margin-bottom:          10px;

    }

    #work .item:not(:first-of-type),
    #volunteer .item:not(:first-of-type),
    #awards .item:not(:first-of-type),
    #publications .item:not(:first-of-type) {

        margin-top:             30px

    }

    #education .institution {

        display:                inline-block

    }

    #education .item:not(:last-of-type) {

        margin-bottom:          20px;

    }

    #interests .item {

        max-width:              none;
        text-align:             inherit;
        margin-right:           0 !important;

    }

    #interests .item:not(:last-of-type),
    #skills .item:not(:last-of-type) {

        margin-bottom:          20px;

    }



}

#footer {

    background:             #f8f8f8;
    margin:                 0;

}

    #footer .inner {

        width:                  720px;
        padding:                50px 5px;
        margin:                 0 auto;

    }
`},Q={".":["README.md","index.html","index.js","package.json","resume.en.json","resume.hbs","style.css"]};qn=function(n,t){var e=Vn(n);return e!==void 0?e:""},Jn=function(n,t){var e=pn(n);return e===void 0&&(e=[]),t&&t.withFileTypes?e.map(function(i){var s=cn(n)+"/"+i,a=pn(s)!==void 0;return{name:i,isFile:function(){return!a},isDirectory:function(){return a}}}):e},Un=function(n){return Vn(n)!==void 0||pn(n)!==void 0},Gn=function(){},Wn=function(){},un=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},Kn=un,zn=function(){},Yn=function(){},Qn=function(){return{pipe:function(n){return n},on:function(){return this}}},Xn=function(){return{write:function(){},end:function(){},on:function(){return this}}},Kt={readFileSync:qn,readdirSync:Jn,existsSync:Un,writeFileSync:Gn,mkdirSync:Wn,statSync:un,lstatSync:Kn,unlinkSync:zn,rmdirSync:Yn,createReadStream:Qn,createWriteStream:Xn}});var mn=m($n=>{"use strict";c();function Zn(n){this.string=n}Zn.prototype.toString=function(){return""+this.string};$n.default=Zn});var M=m(N=>{"use strict";c();var zt=mn().default,Yt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Qt=/[&<>"'`]/g,Xt=/[&<>"'`]/;function Zt(n){return Yt[n]}function $t(n){for(var t=1;t<arguments.length;t++)for(var e in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],e)&&(n[e]=arguments[t][e]);return n}N.extend=$t;var gn=Object.prototype.toString;N.toString=gn;var X=function(n){return typeof n=="function"};X(/x/)&&(X=function(n){return typeof n=="function"&&gn.call(n)==="[object Function]"});var X;N.isFunction=X;var nt=Array.isArray||function(n){return n&&typeof n=="object"?gn.call(n)==="[object Array]":!1};N.isArray=nt;function ne(n){return n instanceof zt?n.toString():n==null?"":n?(n=""+n,Xt.test(n)?n.replace(Qt,Zt):n):n+""}N.escapeExpression=ne;function te(n){return!n&&n!==0?!0:!!(nt(n)&&n.length===0)}N.isEmpty=te;function ee(n,t){return(n?n+".":"")+t}N.appendContextPath=ee});var P=m(et=>{"use strict";c();var vn=["description","fileName","lineNumber","message","name","number","stack"];function tt(n,t){var e;t&&t.firstLine&&(e=t.firstLine,n+=" - "+e+":"+t.firstColumn);for(var i=Error.prototype.constructor.call(this,n),s=0;s<vn.length;s++)this[vn[s]]=i[vn[s]];e&&(this.lineNumber=e,this.column=t.firstColumn)}tt.prototype=new Error;et.default=tt});var C=m(_=>{"use strict";c();var y=M(),yn=P().default,ie="2.0.0";_.VERSION=ie;var se=6;_.COMPILER_REVISION=se;var ae={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};_.REVISION_CHANGES=ae;var it=y.isArray,kn=y.isFunction,st=y.toString,at="[object Object]";function bn(n,t){this.helpers=n||{},this.partials=t||{},re(this)}_.HandlebarsEnvironment=bn;bn.prototype={constructor:bn,logger:q,log:rt,registerHelper:function(n,t){if(st.call(n)===at){if(t)throw new yn("Arg not supported with multiple helpers");y.extend(this.helpers,n)}else this.helpers[n]=t},unregisterHelper:function(n){delete this.helpers[n]},registerPartial:function(n,t){st.call(n)===at?y.extend(this.partials,n):this.partials[n]=t},unregisterPartial:function(n){delete this.partials[n]}};function re(n){n.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new yn("Missing helper: '"+arguments[arguments.length-1].name+"'")}),n.registerHelper("blockHelperMissing",function(t,e){var i=e.inverse,s=e.fn;if(t===!0)return s(this);if(t===!1||t==null)return i(this);if(it(t))return t.length>0?(e.ids&&(e.ids=[e.name]),n.helpers.each(t,e)):i(this);if(e.data&&e.ids){var a=Z(e.data);a.contextPath=y.appendContextPath(e.data.contextPath,e.name),e={data:a}}return s(t,e)}),n.registerHelper("each",function(t,e){if(!e)throw new yn("Must pass iterator to #each");var i=e.fn,s=e.inverse,a=0,r="",o,p;if(e.data&&e.ids&&(p=y.appendContextPath(e.data.contextPath,e.ids[0])+"."),kn(t)&&(t=t.call(this)),e.data&&(o=Z(e.data)),t&&typeof t=="object")if(it(t))for(var l=t.length;a<l;a++)o&&(o.index=a,o.first=a===0,o.last=a===t.length-1,p&&(o.contextPath=p+a)),r=r+i(t[a],{data:o});else for(var u in t)t.hasOwnProperty(u)&&(o&&(o.key=u,o.index=a,o.first=a===0,p&&(o.contextPath=p+u)),r=r+i(t[u],{data:o}),a++);return a===0&&(r=s(this)),r}),n.registerHelper("if",function(t,e){return kn(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||y.isEmpty(t)?e.inverse(this):e.fn(this)}),n.registerHelper("unless",function(t,e){return n.helpers.if.call(this,t,{fn:e.inverse,inverse:e.fn,hash:e.hash})}),n.registerHelper("with",function(t,e){kn(t)&&(t=t.call(this));var i=e.fn;if(y.isEmpty(t))return e.inverse(this);if(e.data&&e.ids){var s=Z(e.data);s.contextPath=y.appendContextPath(e.data.contextPath,e.ids[0]),e={data:s}}return i(t,e)}),n.registerHelper("log",function(t,e){var i=e.data&&e.data.level!=null?parseInt(e.data.level,10):1;n.log(i,t)}),n.registerHelper("lookup",function(t,e){return t&&t[e]})}var q={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(n,t){if(q.level<=n){var e=q.methodMap[n];typeof console<"u"&&console[e]&&console[e].call(console,t)}}};_.logger=q;var rt=q.log;_.log=rt;var Z=function(n){var t=y.extend({},n);return t._parent=n,t};_.createFrame=Z});var lt=m(F=>{"use strict";c();var wn=M(),H=P().default,oe=C().COMPILER_REVISION,ot=C().REVISION_CHANGES,le=C().createFrame;function he(n){var t=n&&n[0]||1,e=oe;if(t!==e)if(t<e){var i=ot[e],s=ot[t];throw new H("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+s+").")}else throw new H("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+n[1]+").")}F.checkRevision=he;function pe(n,t){if(!t)throw new H("No environment passed to template");if(!n||!n.main)throw new H("Unknown template object: "+typeof n);t.VM.checkRevision(n.compiler);var e=function(a,r,o,p,l,u,h,x,T){l&&(p=wn.extend({},p,l));var I=t.VM.invokePartial.call(this,a,o,p,u,h,x,T);if(I==null&&t.compile){var Tn={helpers:u,partials:h,data:x,depths:T};h[o]=t.compile(a,{data:x!==void 0,compat:n.compat},t),I=h[o](p,Tn)}if(I!=null){if(r){for(var w=I.split(`
`),E=0,rn=w.length;E<rn&&!(!w[E]&&E+1===rn);E++)w[E]=r+w[E];I=w.join(`
`)}return I}else throw new H("The partial "+o+" could not be compiled when running in runtime-only mode")},i={lookup:function(a,r){for(var o=a.length,p=0;p<o;p++)if(a[p]&&a[p][r]!=null)return a[p][r]},lambda:function(a,r){return typeof a=="function"?a.call(r):a},escapeExpression:wn.escapeExpression,invokePartial:e,fn:function(a){return n[a]},programs:[],program:function(a,r,o){var p=this.programs[a],l=this.fn(a);return r||o?p=$(this,a,l,r,o):p||(p=this.programs[a]=$(this,a,l)),p},data:function(a,r){for(;a&&r--;)a=a._parent;return a},merge:function(a,r){var o=a||r;return a&&r&&a!==r&&(o=wn.extend({},r,a)),o},noop:t.VM.noop,compilerInfo:n.compiler},s=function(a,r){r=r||{};var o=r.data;s._setup(r),!r.partial&&n.useData&&(o=de(a,o));var p;return n.useDepths&&(p=r.depths?[a].concat(r.depths):[a]),n.main.call(i,a,i.helpers,i.partials,o,p)};return s.isTop=!0,s._setup=function(a){a.partial?(i.helpers=a.helpers,i.partials=a.partials):(i.helpers=i.merge(a.helpers,t.helpers),n.usePartial&&(i.partials=i.merge(a.partials,t.partials)))},s._child=function(a,r,o){if(n.useDepths&&!o)throw new H("must pass parent depths");return $(i,a,n[a],r,o)},s}F.template=pe;function $(n,t,e,i,s){var a=function(r,o){return o=o||{},e.call(n,r,n.helpers,n.partials,o.data||i,s&&[r].concat(s))};return a.program=t,a.depth=s?s.length:0,a}F.program=$;function ce(n,t,e,i,s,a,r){var o={partial:!0,helpers:i,partials:s,data:a,depths:r};if(n===void 0)throw new H("The partial "+t+" could not be found");if(n instanceof Function)return n(e,o)}F.invokePartial=ce;function ue(){return""}F.noop=ue;function de(n,t){return(!t||!("root"in t))&&(t=t?le(t):{},t.root=n),t}});var dt=m(ut=>{"use strict";c();var ht=C(),fe=mn().default,me=P().default,Sn=M(),pt=lt(),ct=function(){var n=new ht.HandlebarsEnvironment;return Sn.extend(n,ht),n.SafeString=fe,n.Exception=me,n.Utils=Sn,n.escapeExpression=Sn.escapeExpression,n.VM=pt,n.template=function(t){return pt.template(t,n)},n},nn=ct();nn.create=ct;nn.default=nn;ut.default=nn});var xn=m(mt=>{"use strict";c();var ft=P().default;function v(n){n=n||{},this.firstLine=n.first_line,this.firstColumn=n.first_column,this.lastColumn=n.last_column,this.lastLine=n.last_line}var J={ProgramNode:function(n,t,e){v.call(this,e),this.type="program",this.statements=n,this.strip=t},MustacheNode:function(n,t,e,i,s){if(v.call(this,s),this.type="mustache",this.strip=i,e!=null&&e.charAt){var a=e.charAt(3)||e.charAt(2);this.escaped=a!=="{"&&a!=="&"}else this.escaped=!!e;n instanceof J.SexprNode?this.sexpr=n:this.sexpr=new J.SexprNode(n,t),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(n,t,e){v.call(this,e),this.type="sexpr",this.hash=t;var i=this.id=n[0],s=this.params=n.slice(1);this.isHelper=!!(s.length||t),this.eligibleHelper=this.isHelper||i.isSimple},PartialNode:function(n,t,e,i,s){v.call(this,s),this.type="partial",this.partialName=n,this.context=t,this.hash=e,this.strip=i,this.strip.inlineStandalone=!0},BlockNode:function(n,t,e,i,s){v.call(this,s),this.type="block",this.mustache=n,this.program=t,this.inverse=e,this.strip=i,e&&!t&&(this.isInverse=!0)},RawBlockNode:function(n,t,e,i){if(v.call(this,i),n.sexpr.id.original!==e)throw new ft(n.sexpr.id.original+" doesn't match "+e,this);t=new J.ContentNode(t,i),this.type="block",this.mustache=n,this.program=new J.ProgramNode([t],{},i)},ContentNode:function(n,t){v.call(this,t),this.type="content",this.original=this.string=n},HashNode:function(n,t){v.call(this,t),this.type="hash",this.pairs=n},IdNode:function(n,t){v.call(this,t),this.type="ID";for(var e="",i=[],s=0,a="",r=0,o=n.length;r<o;r++){var p=n[r].part;if(e+=(n[r].separator||"")+p,p===".."||p==="."||p==="this"){if(i.length>0)throw new ft("Invalid path: "+e,this);p===".."?(s++,a+="../"):this.isScoped=!0}else i.push(p)}this.original=e,this.parts=i,this.string=i.join("."),this.depth=s,this.idName=a+this.string,this.isSimple=n.length===1&&!this.isScoped&&s===0,this.stringModeValue=this.string},PartialNameNode:function(n,t){v.call(this,t),this.type="PARTIAL_NAME",this.name=n.original},DataNode:function(n,t){v.call(this,t),this.type="DATA",this.id=n,this.stringModeValue=n.stringModeValue,this.idName="@"+n.stringModeValue},StringNode:function(n,t){v.call(this,t),this.type="STRING",this.original=this.string=this.stringModeValue=n},NumberNode:function(n,t){v.call(this,t),this.type="NUMBER",this.original=this.number=n,this.stringModeValue=Number(n)},BooleanNode:function(n,t){v.call(this,t),this.type="BOOLEAN",this.bool=n,this.stringModeValue=n==="true"},CommentNode:function(n,t){v.call(this,t),this.type="comment",this.comment=n,this.strip={inlineStandalone:!0}}};mt.default=J});var vt=m(gt=>{"use strict";c();var ge=(function(){var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(s,a,r,o,p,l,u){var h=l.length-1;switch(p){case 1:return o.prepareProgram(l[h-1].statements,!0),l[h-1];break;case 2:this.$=new o.ProgramNode(o.prepareProgram(l[h]),{},this._$);break;case 3:this.$=l[h];break;case 4:this.$=l[h];break;case 5:this.$=l[h];break;case 6:this.$=l[h];break;case 7:this.$=new o.ContentNode(l[h],this._$);break;case 8:this.$=new o.CommentNode(l[h],this._$);break;case 9:this.$=new o.RawBlockNode(l[h-2],l[h-1],l[h],this._$);break;case 10:this.$=new o.MustacheNode(l[h-1],null,"","",this._$);break;case 11:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!1,this._$);break;case 12:this.$=o.prepareBlock(l[h-3],l[h-2],l[h-1],l[h],!0,this._$);break;case 13:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 14:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 15:this.$={strip:o.stripFlags(l[h-1],l[h-1]),program:l[h]};break;case 16:this.$={path:l[h-1],strip:o.stripFlags(l[h-2],l[h])};break;case 17:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 18:this.$=new o.MustacheNode(l[h-1],null,l[h-2],o.stripFlags(l[h-2],l[h]),this._$);break;case 19:this.$=new o.PartialNode(l[h-3],l[h-2],l[h-1],o.stripFlags(l[h-4],l[h]),this._$);break;case 20:this.$=new o.PartialNode(l[h-2],void 0,l[h-1],o.stripFlags(l[h-3],l[h]),this._$);break;case 21:this.$=new o.SexprNode([l[h-2]].concat(l[h-1]),l[h],this._$);break;case 22:this.$=new o.SexprNode([l[h]],null,this._$);break;case 23:this.$=l[h];break;case 24:this.$=new o.StringNode(l[h],this._$);break;case 25:this.$=new o.NumberNode(l[h],this._$);break;case 26:this.$=new o.BooleanNode(l[h],this._$);break;case 27:this.$=l[h];break;case 28:l[h-1].isHelper=!0,this.$=l[h-1];break;case 29:this.$=new o.HashNode(l[h],this._$);break;case 30:this.$=[l[h-2],l[h]];break;case 31:this.$=new o.PartialNameNode(l[h],this._$);break;case 32:this.$=new o.PartialNameNode(new o.StringNode(l[h],this._$),this._$);break;case 33:this.$=new o.PartialNameNode(new o.NumberNode(l[h],this._$));break;case 34:this.$=new o.DataNode(l[h],this._$);break;case 35:this.$=new o.IdNode(l[h],this._$);break;case 36:l[h-2].push({part:l[h],separator:l[h-1]}),this.$=l[h-2];break;case 37:this.$=[{part:l[h]}];break;case 38:this.$=[];break;case 39:l[h-1].push(l[h]);break;case 48:this.$=[];break;case 49:l[h-1].push(l[h]);break;case 52:this.$=[l[h]];break;case 53:l[h-1].push(l[h]);break}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(s,a){throw new Error(s)},parse:function(s){var a=this,r=[0],o=[null],p=[],l=this.table,u="",h=0,x=0,T=0,I=2,Tn=1;this.lexer.setInput(s),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var w=this.lexer.yylloc;p.push(w);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function rn(b){r.length=r.length-2*b,o.length=o.length-b,p.length=p.length-b}function Ft(){var b;return b=a.lexer.lex()||1,typeof b!="number"&&(b=a.symbols_[b]||b),b}for(var g,on,D,k,qe,ln,L={},W,S,Ln,K;;){if(D=r[r.length-1],this.defaultActions[D]?k=this.defaultActions[D]:((g===null||typeof g>"u")&&(g=Ft()),k=l[D]&&l[D][g]),typeof k>"u"||!k.length||!k[0]){var hn="";if(!T){K=[];for(W in l[D])this.terminals_[W]&&W>2&&K.push("'"+this.terminals_[W]+"'");this.lexer.showPosition?hn="Parse error on line "+(h+1)+`:
`+this.lexer.showPosition()+`
Expecting `+K.join(", ")+", got '"+(this.terminals_[g]||g)+"'":hn="Parse error on line "+(h+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(hn,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:w,expected:K})}}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+D+", token: "+g);switch(k[0]){case 1:r.push(g),o.push(this.lexer.yytext),p.push(this.lexer.yylloc),r.push(k[1]),g=null,on?(g=on,on=null):(x=this.lexer.yyleng,u=this.lexer.yytext,h=this.lexer.yylineno,w=this.lexer.yylloc,T>0&&T--);break;case 2:if(S=this.productions_[k[1]][1],L.$=o[o.length-S],L._$={first_line:p[p.length-(S||1)].first_line,last_line:p[p.length-1].last_line,first_column:p[p.length-(S||1)].first_column,last_column:p[p.length-1].last_column},E&&(L._$.range=[p[p.length-(S||1)].range[0],p[p.length-1].range[1]]),ln=this.performAction.call(L,u,x,h,this.yy,k[1],o,p),typeof ln<"u")return ln;S&&(r=r.slice(0,-1*S*2),o=o.slice(0,-1*S),p=p.slice(0,-1*S)),r.push(this.productions_[k[1]][0]),o.push(L.$),p.push(L._$),Ln=l[r[r.length-2]][r[r.length-1]],r.push(Ln);break;case 3:return!0}}return!0}},t=(function(){var i={EOF:1,parseError:function(a,r){if(this.yy.parser)this.yy.parser.parseError(a,r);else throw new Error(a)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var a=s.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var a=s.length,r=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a-1),this.offset-=a;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var p=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===o.length?this.yylloc.first_column:0)+o[o.length-r.length].length-r[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-a]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),a=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+a+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,a,r,o,p,l;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),h=0;h<u.length&&(r=this._input.match(this.rules[u[h]]),!(r&&(!a||r[0].length>a[0].length)&&(a=r,o=h,!this.options.flex)));h++);return a?(l=a[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],s=this.performAction.call(this,this.yy,this,u[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return typeof a<"u"?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return i.options={},i.performAction=function(a,r,o,p){function l(h,x){return r.yytext=r.yytext.substr(h,r.yyleng-x)}var u=p;switch(o){case 0:if(r.yytext.slice(-2)==="\\\\"?(l(0,1),this.begin("mu")):r.yytext.slice(-1)==="\\"?(l(0,1),this.begin("emu")):this.begin("mu"),r.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;break;case 3:return r.yytext=r.yytext.substr(5,r.yyleng-9),this.popState(),15;break;case 4:return 12;case 5:return l(0,4),this.popState(),13;break;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;break;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;break;case 14:return this.popState(),28;break;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return l(3,5),this.popState(),13;break;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;break;case 28:return this.popState(),25;break;case 29:return r.yytext=l(1,2).replace(/\\"/g,'"'),42;break;case 30:return r.yytext=l(1,2).replace(/\\'/g,"'"),42;break;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return r.yytext=l(1,2),50;break;case 37:return"INVALID";case 38:return 5}},i.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],i.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},i})();n.lexer=t;function e(){this.yy={}}return e.prototype=n,n.Parser=e,new e})();gt.default=ge});var kt=m(tn=>{"use strict";c();var ve=P().default;function ke(n,t){return{left:n.charAt(2)==="~",right:t.charAt(t.length-3)==="~"}}tn.stripFlags=ke;function ye(n,t,e,i,s,a){if(n.sexpr.id.original!==i.path.original)throw new ve(n.sexpr.id.original+" doesn't match "+i.path.original,n);var r=e&&e.program,o={left:n.strip.left,right:i.strip.right,openStandalone:Nn(t.statements),closeStandalone:En((r||t).statements)};if(n.strip.right&&O(t.statements,null,!0),r){var p=e.strip;p.left&&A(t.statements,null,!0),p.right&&O(r.statements,null,!0),i.strip.left&&A(r.statements,null,!0),En(t.statements)&&Nn(r.statements)&&(A(t.statements),O(r.statements))}else i.strip.left&&A(t.statements,null,!0);return s?new this.BlockNode(n,r,t,o,a):new this.BlockNode(n,t,r,o,a)}tn.prepareBlock=ye;function be(n,t){for(var e=0,i=n.length;e<i;e++){var s=n[e],a=s.strip;if(a){var r=En(n,e,t,s.type==="partial"),o=Nn(n,e,t),p=a.openStandalone&&r,l=a.closeStandalone&&o,u=a.inlineStandalone&&r&&o;a.right&&O(n,e,!0),a.left&&A(n,e,!0),u&&(O(n,e),A(n,e)&&s.type==="partial"&&(s.indent=/([ \t]+$)/.exec(n[e-1].original)?RegExp.$1:"")),p&&(O((s.program||s.inverse).statements),A(n,e)),l&&(O(n,e),A((s.inverse||s.program).statements))}}return n}tn.prepareProgram=be;function En(n,t,e){t===void 0&&(t=n.length);var i=n[t-1],s=n[t-2];if(!i)return e;if(i.type==="content")return(s||!e?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}function Nn(n,t,e){t===void 0&&(t=-1);var i=n[t+1],s=n[t+2];if(!i)return e;if(i.type==="content")return(s||!e?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}function O(n,t,e){var i=n[t==null?0:t+1];if(!(!i||i.type!=="content"||!e&&i.rightStripped)){var s=i.string;i.string=i.string.replace(e?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.string!==s}}function A(n,t,e){var i=n[t==null?n.length-1:t-1];if(!(!i||i.type!=="content"||!e&&i.leftStripped)){var s=i.string;return i.string=i.string.replace(e?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.string!==s,i.leftStripped}}});var An=m(_n=>{"use strict";c();var Pn=vt().default,yt=xn().default,we=kt(),Se=M().extend;_n.parser=Pn;var bt={};Se(bt,we,yt);function xe(n){return n.constructor===yt.ProgramNode?n:(Pn.yy=bt,Pn.parse(n))}_n.parse=xe});var sn=m(en=>{"use strict";c();var Dn=P().default,wt=M().isArray,Ee=[].slice;function In(){}en.Compiler=In;In.prototype={compiler:In,equals:function(n){var t=this.opcodes.length;if(n.opcodes.length!==t)return!1;for(var e=0;e<t;e++){var i=this.opcodes[e],s=n.opcodes[e];if(i.opcode!==s.opcode||!St(i.args,s.args))return!1}for(t=this.children.length,e=0;e<t;e++)if(!this.children[e].equals(n.children[e]))return!1;return!0},guid:0,compile:function(n,t){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds;var e=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},e)for(var i in e)this.options.knownHelpers[i]=e[i];return this.accept(n)},accept:function(n){return this[n.type](n)},program:function(n){for(var t=n.statements,e=0,i=t.length;e<i;e++)this.accept(t[e]);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(s,a){return s-a}),this},compileProgram:function(n){var t=new this.compiler().compile(n,this.options),e=this.guid++,i;this.usePartial=this.usePartial||t.usePartial,this.children[e]=t;for(var s=0,a=t.depths.list.length;s<a;s++)i=t.depths.list[s],!(i<2)&&this.addDepth(i-1);return e},block:function(n){var t=n.mustache,e=n.program,i=n.inverse;e&&(e=this.compileProgram(e)),i&&(i=this.compileProgram(i));var s=t.sexpr,a=this.classifySexpr(s);a==="helper"?this.helperSexpr(s,e,i):a==="simple"?(this.simpleSexpr(s),this.opcode("pushProgram",e),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("blockValue",s.id.original)):(this.ambiguousSexpr(s,e,i),this.opcode("pushProgram",e),this.opcode("pushProgram",i),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(n){var t=n.pairs,e,i;for(this.opcode("pushHash"),e=0,i=t.length;e<i;e++)this.pushParam(t[e][1]);for(;e--;)this.opcode("assignToHash",t[e][0]);this.opcode("popHash")},partial:function(n){var t=n.partialName;this.usePartial=!0,n.hash?this.accept(n.hash):this.opcode("push","undefined"),n.context?this.accept(n.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",t.name,n.indent||""),this.opcode("append")},content:function(n){n.string&&this.opcode("appendContent",n.string)},mustache:function(n){this.sexpr(n.sexpr),n.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(n,t,e){var i=n.id,s=i.parts[0],a=t!=null||e!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",e),this.ID(i),this.opcode("invokeAmbiguous",s,a)},simpleSexpr:function(n){var t=n.id;t.type==="DATA"?this.DATA(t):t.parts.length?this.ID(t):(this.addDepth(t.depth),this.opcode("getContext",t.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(n,t,e){var i=this.setupFullMustacheParams(n,t,e),s=n.id,a=s.parts[0];if(this.options.knownHelpers[a])this.opcode("invokeKnownHelper",i.length,a);else{if(this.options.knownHelpersOnly)throw new Dn("You specified knownHelpersOnly, but used the unknown helper "+a,n);s.falsy=!0,this.ID(s),this.opcode("invokeHelper",i.length,s.original,s.isSimple)}},sexpr:function(n){var t=this.classifySexpr(n);t==="simple"?this.simpleSexpr(n):t==="helper"?this.helperSexpr(n):this.ambiguousSexpr(n)},ID:function(n){this.addDepth(n.depth),this.opcode("getContext",n.depth);var t=n.parts[0];t?this.opcode("lookupOnContext",n.parts,n.falsy,n.isScoped):this.opcode("pushContext")},DATA:function(n){this.options.data=!0,this.opcode("lookupData",n.id.depth,n.id.parts)},STRING:function(n){this.opcode("pushString",n.string)},NUMBER:function(n){this.opcode("pushLiteral",n.number)},BOOLEAN:function(n){this.opcode("pushLiteral",n.bool)},comment:function(){},opcode:function(n){this.opcodes.push({opcode:n,args:Ee.call(arguments,1)})},addDepth:function(n){n!==0&&(this.depths[n]||(this.depths[n]=!0,this.depths.list.push(n)))},classifySexpr:function(n){var t=n.isHelper,e=n.eligibleHelper,i=this.options;if(e&&!t){var s=n.id.parts[0];i.knownHelpers[s]?t=!0:i.knownHelpersOnly&&(e=!1)}return t?"helper":e?"ambiguous":"simple"},pushParams:function(n){for(var t=0,e=n.length;t<e;t++)this.pushParam(n[t])},pushParam:function(n){this.stringParams?(n.depth&&this.addDepth(n.depth),this.opcode("getContext",n.depth||0),this.opcode("pushStringParam",n.stringModeValue,n.type),n.type==="sexpr"&&this.sexpr(n)):(this.trackIds&&this.opcode("pushId",n.type,n.idName||n.stringModeValue),this.accept(n))},setupFullMustacheParams:function(n,t,e){var i=n.params;return this.pushParams(i),this.opcode("pushProgram",t),this.opcode("pushProgram",e),n.hash?this.hash(n.hash):this.opcode("emptyHash"),i}};function Ne(n,t,e){if(n==null||typeof n!="string"&&n.constructor!==e.AST.ProgramNode)throw new Dn("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+n);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var i=e.parse(n),s=new e.Compiler().compile(i,t);return new e.JavaScriptCompiler().compile(s,t)}en.precompile=Ne;function Pe(n,t,e){if(n==null||typeof n!="string"&&n.constructor!==e.AST.ProgramNode)throw new Dn("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+n);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var i;function s(){var r=e.parse(n),o=new e.Compiler().compile(r,t),p=new e.JavaScriptCompiler().compile(o,t,void 0,!0);return e.template(p)}var a=function(r,o){return i||(i=s()),i.call(this,r,o)};return a._setup=function(r){return i||(i=s()),i._setup(r)},a._child=function(r,o,p){return i||(i=s()),i._child(r,o,p)},a}en.compile=Pe;function St(n,t){if(n===t)return!0;if(wt(n)&&wt(t)&&n.length===t.length){for(var e=0;e<n.length;e++)if(!St(n[e],t[e]))return!1;return!0}}});var Pt=m(Nt=>{"use strict";c();var _e=C().COMPILER_REVISION,Ae=C().REVISION_CHANGES,Cn=P().default;function U(n){this.value=n}function j(){}j.prototype={nameLookup:function(n,t){return j.isValidJavaScriptVariableName(t)?n+"."+t:n+"['"+t+"']"},depthedLookup:function(n){return this.aliases.lookup="this.lookup",'lookup(depths, "'+n+'")'},compilerInfo:function(){var n=_e,t=Ae[n];return[n,t]},appendToBuffer:function(n){return this.environment.isSimple?"return "+n+";":{appendToBuffer:!0,content:n,toString:function(){return"buffer += "+n+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(n,t,e,i){this.environment=n,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!e,this.context=e||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(n,t),this.useDepths=this.useDepths||n.depths.list.length||this.options.compat;var s=n.opcodes,a,r,o;for(r=0,o=s.length;r<o;r++)a=s[r],this[a.opcode].apply(this,a.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Cn("Compile completed with content left on stack");var p=this.createFunctionContext(i);if(this.isChild)return p;var l={compiler:this.compilerInfo(),main:p},u=this.context.programs;for(r=0,o=u.length;r<o;r++)u[r]&&(l[r]=u[r]);return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.options.compat&&(l.compat=!0),i||(l.compiler=JSON.stringify(l.compiler),l=this.objectLiteral(l)),l},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(n){var t="",e=this.stackVars.concat(this.registers.list);e.length>0&&(t+=", "+e.join(", "));for(var i in this.aliases)this.aliases.hasOwnProperty(i)&&(t+=", "+i+"="+this.aliases[i]);var s=["depth0","helpers","partials","data"];this.useDepths&&s.push("depths");var a=this.mergeSource(t);return n?(s.push(a),Function.apply(this,s)):"function("+s.join(",")+`) {
  `+a+"}"},mergeSource:function(n){for(var t="",e,i=!this.forceBuffer,s,a=0,r=this.source.length;a<r;a++){var o=this.source[a];o.appendToBuffer?e?e=e+`
    + `+o.content:e=o.content:(e&&(t?t+="buffer += "+e+`;
  `:(s=!0,t=e+`;
  `),e=void 0),t+=o+`
  `,this.environment.isSimple||(i=!1))}return i?(e||!t)&&(t+="return "+(e||'""')+`;
`):(n+=", buffer = "+(s?"":this.initializeBuffer()),e?t+="return buffer + "+e+`;
`:t+=`return buffer;
`),n&&(t="var "+n.substring(2)+(s?"":`;
  `)+t),t},blockValue:function(n){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=[this.contextName(0)];this.setupParams(n,0,t);var e=this.popStack();t.splice(1,0,e),this.push("blockHelperMissing.call("+t.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var n=[this.contextName(0)];this.setupParams("",0,n,!0),this.flushInline();var t=this.topStack();n.splice(1,0,t),this.pushSource("if (!"+this.lastHelper+") { "+t+" = blockHelperMissing.call("+n.join(", ")+"); }")},appendContent:function(n){this.pendingContent&&(n=this.pendingContent+n),this.pendingContent=n},append:function(){this.flushInline();var n=this.popStack();this.pushSource("if ("+n+" != null) { "+this.appendToBuffer(n)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(n){this.lastContext=n},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(n,t,e){var i=0,s=n.length;for(!e&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(n[i++])):this.pushContext();i<s;i++)this.replaceStack(function(a){var r=this.nameLookup(a,n[i],"context");return t?" && "+r:" != null ? "+r+" : "+a})},lookupData:function(n,t){n?this.pushStackLiteral("this.data(data, "+n+")"):this.pushStackLiteral("data");for(var e=t.length,i=0;i<e;i++)this.replaceStack(function(s){return" && "+this.nameLookup(s,t[i],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(n,t){this.pushContext(),this.pushString(t),t!=="sexpr"&&(typeof n=="string"?this.pushString(n):this.pushStackLiteral(n))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var n=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+n.ids.join(",")+"}"),this.stringParams&&(this.push("{"+n.contexts.join(",")+"}"),this.push("{"+n.types.join(",")+"}")),this.push(`{
    `+n.values.join(`,
    `)+`
  }`)},pushString:function(n){this.pushStackLiteral(this.quotedString(n))},push:function(n){return this.inlineStack.push(n),n},pushLiteral:function(n){this.pushStackLiteral(n)},pushProgram:function(n){n!=null?this.pushStackLiteral(this.programExpression(n)):this.pushStackLiteral(null)},invokeHelper:function(n,t,e){this.aliases.helperMissing="helpers.helperMissing";var i=this.popStack(),s=this.setupHelper(n,t),a=(e?s.name+" || ":"")+i+" || helperMissing";this.push("(("+a+").call("+s.callParams+"))")},invokeKnownHelper:function(n,t){var e=this.setupHelper(n,t);this.push(e.name+".call("+e.callParams+")")},invokeAmbiguous:function(n,t){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var e=this.popStack();this.emptyHash();var i=this.setupHelper(0,n,t),s=this.lastHelper=this.nameLookup("helpers",n,"helper");this.push("((helper = (helper = "+s+" || "+e+") != null ? helper : helperMissing"+(i.paramsInit?"),("+i.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+i.callParams+") : helper))")},invokePartial:function(n,t){var e=[this.nameLookup("partials",n,"partial"),"'"+t+"'","'"+n+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?e.push("data"):this.options.compat&&e.push("undefined"),this.options.compat&&e.push("depths"),this.push("this.invokePartial("+e.join(", ")+")")},assignToHash:function(n){var t=this.popStack(),e,i,s;this.trackIds&&(s=this.popStack()),this.stringParams&&(i=this.popStack(),e=this.popStack());var a=this.hash;e&&a.contexts.push("'"+n+"': "+e),i&&a.types.push("'"+n+"': "+i),s&&a.ids.push("'"+n+"': "+s),a.values.push("'"+n+"': ("+t+")")},pushId:function(n,t){n==="ID"||n==="DATA"?this.pushString(t):n==="sexpr"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:j,compileChildren:function(n,t){for(var e=n.children,i,s,a=0,r=e.length;a<r;a++){i=e[a],s=new this.compiler;var o=this.matchExistingProgram(i);o==null?(this.context.programs.push(""),o=this.context.programs.length,i.index=o,i.name="program"+o,this.context.programs[o]=s.compile(i,t,this.context,!this.precompile),this.context.environments[o]=i,this.useDepths=this.useDepths||s.useDepths):(i.index=o,i.name="program"+o)}},matchExistingProgram:function(n){for(var t=0,e=this.context.environments.length;t<e;t++){var i=this.context.environments[t];if(i&&i.equals(n))return t}},programExpression:function(n){var t=this.environment.children[n],e=t.depths.list,i=this.useDepths,s,a=[t.index,"data"];return i&&a.push("depths"),"this.program("+a.join(", ")+")"},useRegister:function(n){this.registers[n]||(this.registers[n]=!0,this.registers.list.push(n))},pushStackLiteral:function(n){return this.push(new U(n))},pushSource:function(n){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),n&&this.source.push(n)},pushStack:function(n){this.flushInline();var t=this.incrStack();return this.pushSource(t+" = "+n+";"),this.compileStack.push(t),t},replaceStack:function(n){var t="",e=this.isInline(),i,s,a;if(!this.isInline())throw new Cn("replaceStack on non-inline");var r=this.popStack(!0);if(r instanceof U)t=i=r.value,a=!0;else{s=!this.stackSlot;var o=s?this.incrStack():this.topStackName();t="("+this.push(o)+" = "+r+")",i=this.topStack()}var p=n.call(this,i);a||this.popStack(),s&&this.stackSlot--,this.push("("+t+p+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var n=this.inlineStack;if(n.length){this.inlineStack=[];for(var t=0,e=n.length;t<e;t++){var i=n[t];i instanceof U?this.compileStack.push(i):this.pushStack(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(n){var t=this.isInline(),e=(t?this.inlineStack:this.compileStack).pop();if(!n&&e instanceof U)return e.value;if(!t){if(!this.stackSlot)throw new Cn("Invalid stack pop");this.stackSlot--}return e},topStack:function(){var n=this.isInline()?this.inlineStack:this.compileStack,t=n[n.length-1];return t instanceof U?t.value:t},contextName:function(n){return this.useDepths&&n?"depths["+n+"]":"depth"+n},quotedString:function(n){return'"'+n.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(n){var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push(this.quotedString(e)+":"+n[e]);return"{"+t.join(",")+"}"},setupHelper:function(n,t,e){var i=[],s=this.setupParams(t,n,i,e),a=this.nameLookup("helpers",t,"helper");return{params:i,paramsInit:s,name:a,callParams:[this.contextName(0)].concat(i).join(", ")}},setupOptions:function(n,t,e){var i={},s=[],a=[],r=[],o,p,l;i.name=this.quotedString(n),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack()),p=this.popStack(),l=this.popStack(),(l||p)&&(l||(l="this.noop"),p||(p="this.noop"),i.fn=l,i.inverse=p);for(var u=t;u--;)o=this.popStack(),e[u]=o,this.trackIds&&(r[u]=this.popStack()),this.stringParams&&(a[u]=this.popStack(),s[u]=this.popStack());return this.trackIds&&(i.ids="["+r.join(",")+"]"),this.stringParams&&(i.types="["+a.join(",")+"]",i.contexts="["+s.join(",")+"]"),this.options.data&&(i.data="data"),i},setupParams:function(n,t,e,i){var s=this.objectLiteral(this.setupOptions(n,t,e));return i?(this.useRegister("options"),e.push("options"),"options="+s):(e.push(s),"")}};var xt="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),Ie=j.RESERVED_WORDS={};for(an=0,Et=xt.length;an<Et;an++)Ie[xt[an]]=!0;var an,Et;j.isValidJavaScriptVariableName=function(n){return!j.RESERVED_WORDS[n]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(n)};Nt.default=j});var It=m(At=>{"use strict";c();var B=dt().default,De=xn().default,Ce=An().parser,He=An().parse,Oe=sn().Compiler,je=sn().compile,Re=sn().precompile,Te=Pt().default,Le=B.create,_t=function(){var n=Le();return n.compile=function(t,e){return je(t,e,n)},n.precompile=function(t,e){return Re(t,e,n)},n.AST=De,n.Compiler=Oe,n.JavaScriptCompiler=Te,n.Parser=Ce,n.parse=He,n};B=_t();B.create=_t;B.default=B;At.default=B});var On=m(Dt=>{"use strict";c();function Hn(){}Hn.prototype={constructor:Hn,accept:function(n){return this[n.type](n)}};Dt.default=Hn});var Ct=m(jn=>{"use strict";c();var Me=On().default;function Fe(n){return new f().accept(n)}jn.print=Fe;function f(){this.padding=0}jn.PrintVisitor=f;f.prototype=new Me;f.prototype.pad=function(n){for(var t="",e=0,i=this.padding;e<i;e++)t=t+"  ";return t=t+n+`
`,t};f.prototype.program=function(n){var t="",e=n.statements,i,s;for(i=0,s=e.length;i<s;i++)t=t+this.accept(e[i]);return this.padding--,t};f.prototype.block=function(n){var t="";return t=t+this.pad("BLOCK:"),this.padding++,t=t+this.accept(n.mustache),n.program&&(t=t+this.pad("PROGRAM:"),this.padding++,t=t+this.accept(n.program),this.padding--),n.inverse&&(n.program&&this.padding++,t=t+this.pad("{{^}}"),this.padding++,t=t+this.accept(n.inverse),this.padding--,n.program&&this.padding--),this.padding--,t};f.prototype.sexpr=function(n){for(var t=n.params,e=[],i,s=0,a=t.length;s<a;s++)e.push(this.accept(t[s]));return t="["+e.join(", ")+"]",i=n.hash?" "+this.accept(n.hash):"",this.accept(n.id)+" "+t+i};f.prototype.mustache=function(n){return this.pad("{{ "+this.accept(n.sexpr)+" }}")};f.prototype.partial=function(n){var t=this.accept(n.partialName);return n.context&&(t+=" "+this.accept(n.context)),n.hash&&(t+=" "+this.accept(n.hash)),this.pad("{{> "+t+" }}")};f.prototype.hash=function(n){for(var t=n.pairs,e=[],i,s,a=0,r=t.length;a<r;a++)i=t[a][0],s=this.accept(t[a][1]),e.push(i+"="+s);return"HASH{"+e.join(", ")+"}"};f.prototype.STRING=function(n){return'"'+n.string+'"'};f.prototype.NUMBER=function(n){return"NUMBER{"+n.number+"}"};f.prototype.BOOLEAN=function(n){return"BOOLEAN{"+n.bool+"}"};f.prototype.ID=function(n){var t=n.parts.join("/");return n.parts.length>1?"PATH:"+t:"ID:"+t};f.prototype.PARTIAL_NAME=function(n){return"PARTIAL:"+n.name};f.prototype.DATA=function(n){return"@"+this.accept(n.id)};f.prototype.content=function(n){return this.pad("CONTENT[ '"+n.string+"' ]")};f.prototype.comment=function(n){return this.pad("{{! '"+n.comment+"' }}")}});var jt=m((xi,Ot)=>{c();var G=It().default;G.Visitor=On().default;var Ht=Ct();G.PrintVisitor=Ht.PrintVisitor;G.print=Ht.print;Ot.exports=G;typeof V<"u"&&V.extensions&&(Rn=function(n,t){var e=(fn(),Bn(dn)),i=e.readFileSync(t,"utf8");n.exports=G.compile(i)},V.extensions[".handlebars"]=Rn,V.extensions[".hbs"]=Rn);var Rn});var Lt=m((Pi,Tt)=>{c();var Rt=(fn(),Bn(dn)),Be=jt();function Ve(n){var t=Rt.readFileSync("//style.css","utf-8"),e=Rt.readFileSync("//resume.hbs","utf-8");return Be.compile(e)({css:t,resume:n})}Tt.exports={render:Ve}});c();var R=Wt(Lt(),1),Mt=R.default??R,Ai=Mt.render??R.render,Ii=Mt.pdfRenderOptions??R.pdfRenderOptions;export{Ii as pdfRenderOptions,Ai as render};
