var fi=Object.create;var Le=Object.defineProperty;var di=Object.getOwnPropertyDescriptor;var mi=Object.getOwnPropertyNames;var gi=Object.getPrototypeOf,vi=Object.prototype.hasOwnProperty;var ln=(t,e)=>()=>(t&&(e=t(t=0)),e);var v=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),_i=(t,e)=>{for(var n in e)Le(t,n,{get:e[n],enumerable:!0})},un=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of mi(e))!vi.call(t,i)&&i!==n&&Le(t,i,{get:()=>e[i],enumerable:!(r=di(e,i))||r.enumerable});return t};var yi=(t,e,n)=>(n=t!=null?fi(gi(t)):{},un(e||!t||!t.__esModule?Le(n,"default",{value:t,enumerable:!0}):n,t)),bi=t=>un(Le({},"__esModule",{value:!0}),t);var p=ln(()=>{});var kn={};_i(kn,{createReadStream:()=>yn,createWriteStream:()=>bn,default:()=>ki,existsSync:()=>fn,lstatSync:()=>gn,mkdirSync:()=>mn,readFileSync:()=>hn,readdirSync:()=>pn,rmdirSync:()=>_n,statSync:()=>ft,unlinkSync:()=>vn,writeFileSync:()=>dn});function pt(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function cn(t){var e=pt(t);if(xe[e]!==void 0)return xe[e];for(var n=Object.keys(xe),r=0;r<n.length;r++)if(e.endsWith("/"+n[r])||e===n[r])return xe[n[r]]}function ht(t){var e=pt(t);if(Ee[e]!==void 0)return Ee[e];for(var n=Object.keys(Ee),r=0;r<n.length;r++)if(e.endsWith("/"+n[r])||e===n[r])return Ee[n[r]]}var xe,Ee,hn,pn,fn,dn,mn,ft,gn,vn,_n,yn,bn,ki,Sn=ln(()=>{"use strict";p();xe={"package.json":`{
  "name": "jsonresume-theme-tech",
  "version": "1.5.1",
  "description": "A clean, modern JSON Resume theme tailored for tech professionals, senior engineers, and startup founders",
  "author": "Gaurav Bansal",
  "repository": {
    "type": "git",
    "url": "https://github.com/bgaurav7/jsonresume-theme-tech.git"
  },
  "license": "MIT",
  "dependencies": {
    "css": "^3.0.0",
    "handlebars": "^4.7.8"
  },
  "bugs": {
    "url": "https://github.com/bgaurav7/jsonresume-theme-tech/issues"
  },
  "homepage": "https://github.com/bgaurav7/jsonresume-theme-tech",
  "main": "index.js",
  "keywords": [
    "resume",
    "jsonresume",
    "theme",
    "tech",
    "professional",
    "ats-friendly"
  ]
}
`,"resume.hbs":`<!doctype html>
<html>
	<head>

	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width, user-scalable=no, minimal-ui'>

	<title>{{resume.basics.name}}</title>

	<style>
	{{{css}}}
	</style>

	</head>
	<body>

	<div class='resume'>
	{{#resume.basics}}
  <div class='nameBlock'>
    <h1 class='name'>{{{name}}}</h1>
    {{#if label}}<div class='label'>{{{label}}}</div>{{/if}}
  </div>
  <div class='basicsBlock'>
    <div class='headerContact'>
      <span class='contactPiece contactLocation'>{{#location}}{{#if address}}{{address}}{{/if}}{{#if city}}{{#if address}}, {{/if}}{{city}}{{/if}}{{#if region}}{{#if city}}, {{/if}}{{region}}{{/if}} {{#if postalCode}}{{postalCode}}{{/if}}{{/location}}</span>
      {{#if phone}}<span class='contactSep' aria-hidden='true'> | </span><span class='contactPiece'><a class='phoneLink' href='tel:{{phone}}'>{{phone}}</a></span>{{/if}}
      {{#if email}}<span class='contactSep' aria-hidden='true'> | </span><span class='contactPiece'><a class='emailLink' href='mailto:{{email}}'>{{email}}</a></span>{{/if}}
      {{#if url}}<span class='contactSep' aria-hidden='true'> | </span><span class='contactPiece'><a class='websiteLink' href='{{url}}'>{{url}}</a></span>{{/if}}
      {{#if profiles.length}}
      {{#each profiles}}
      {{#if url}}<span class='contactSep' aria-hidden='true'> | </span><span class='contactPiece'><a class='profileLink' href='{{url}}'>{{{network}}}</a></span>{{/if}}
      {{/each}}
      {{/if}}
    </div>
  </div>
	{{/resume.basics}}

  {{#if resume.basics._showExecutiveSummary}}
  <div class='summaryBlock'>
    <h2 class='sectionName'>
      <span>Executive Summary</span>
    </h2>
    <div class='sectionContent'>
      {{#if resume.basics.summary}}<p class='summary summaryProse'>{{{resume.basics.summary}}}</p>{{/if}}
      {{#if resume.basics.highlights.length}}
      <h3 class='subSectionName'>Career Highlights</h3>
      <ul class='highlights'>
        {{#each resume.basics.highlights}}
        <li>{{{.}}}</li>
        {{/each}}
      </ul>
      {{/if}}
    </div>
  </div>
  {{/if}}

	{{#if resume.work.length}}
  <div class='workBlock'>
    <h2 class='sectionName'>
      <span>Work Experience</span>
    </h2>
    <div class='sectionContent'>
      {{#each resume.work}}
			<div class="jobBlock">
	      <div class='blockHeader'>
	        <div class='titleGroup'>
	          {{#if position}}<h3 class='title'>{{{position}}}</h3>{{/if}}
	          <div class='metaRow'>
	            {{#if name}}<div class='companyLine'><span class='companyName'>{{{name}}}</span>{{#if location}}, {{{location}}}{{/if}}</div>{{/if}}
	            {{#if startDate}}
	            <div class='dateLine'>
	              <span class='date'>{{#if startDate}}{{startDate}}{{/if}} - {{#if endDate}}{{endDate}}{{else}}Present{{/if}}</span>
	            </div>
	            {{/if}}
	          </div>
	        </div>
	      </div>
	      {{#if summary}}<div class='summary'><p class='summaryProse'>{{{summary}}}</p></div>{{/if}}
	      {{#if highlights.length}}
	      <ul class='highlights'>
	        {{#each highlights}}
	        <li>{{{.}}}</li>
	        {{/each}}
	      </ul>
	      {{/if}}
	      {{#if details.length}}
	      <ul class='details'>
	        {{#each details}}
	        <li>{{#if text}}{{{text}}}{{/if}}{{#if comment}} <em>({{{comment}}})</em>{{/if}}</li>
	        {{/each}}
	      </ul>
	      {{/if}}
	      {{#unless @last}}<div class='separator'></div>{{/unless}}
			</div>
      {{/each}}
    </div>
  </div>
	{{/if}}

  {{#if resume.projects.length}}
  <div class='projects'>
    <h2 class='sectionName'>
      <span>Projects</span>
    </h2>
    <div class='sectionContent'>
      {{#each resume.projects}}
      <div class='projectBlock'>
        <div class='blockHeader blockHeaderInlineMeta'>
          <h3 class='title'>
            {{{name}}}{{#if url}} <span class='projectUrl'>({{url}})</span>{{/if}}
          </h3>
          {{#if startDate}}
          <div class='dateLine'>
            <span class='date'>{{startDate}} - {{#if endDate}}{{endDate}}{{else}}Present{{/if}}</span>
          </div>
          {{/if}}
        </div>
        {{#if description}}
        <div class='description'><p class='summaryProse'>{{{description}}}</p></div>
        {{/if}}
        {{#if highlights.length}}
        <ul class='highlights'>
          {{#each highlights}}
          <li>{{{.}}}</li>
          {{/each}}
        </ul>
        {{/if}}
      </div>
      {{#unless @last}}<div class='separator'></div>{{/unless}}
      {{/each}}
    </div>
  </div>
  {{/if}}

  {{#if resume.leadership._showLeadership}}
	<div class='leadership'>
    <h2 class='sectionName'>
      <span>Leadership</span>
    </h2>
    <div class='sectionContent'>
      <div class='leadershipBlock'>
        {{#if resume.leadership.title}}<h3 class='title'>{{{resume.leadership.title}}}</h3>{{/if}}
        {{#if resume.leadership.summary}}<p class='summary summaryProse'>{{{resume.leadership.summary}}}</p>{{/if}}
        {{#if resume.leadership.highlights.length}}
        <ul class='highlights'>
          {{#each resume.leadership.highlights}}
          <li>{{{.}}}</li>
          {{/each}}
        </ul>
        {{/if}}
      </div>
    </div>
	</div>
  {{/if}}

	{{#if resume.skills.length}}
	<div class='skills'>
    <h2 class='sectionName'>
      <span>Skills</span>
    </h2>
    <div class='sectionContent'>
      {{#each resume.skills}}
      <div class='skillBlock'>
        <span class='skillRow'>
          {{#if name}}<b>{{{name}}}{{#if level}} <em>({{{level}}})</em>{{/if}}:</b>{{/if}}<!--
          -->{{#if keywords.length}}<!--
          -->{{#each keywords}} {{{.}}}{{#unless @last}}, {{/unless}}{{/each}}<!--
          -->{{/if}}
        </span>
        {{#if details.length}}
        <span class='skillDetailsRow'>
          {{#each details}}
          {{#if text}}{{{text}}}{{/if}}{{#if comment}} <em>({{{comment}}})</em>{{/if}}{{#unless @last}}; {{/unless}}
          {{/each}}
        </span>
        {{/if}}
      </div>
      {{/each}}
    </div>
	</div>
	{{/if}}

	{{#if resume.education.length}}
	<div class='education'>
    <h2 class='sectionName'>
      <span>Education</span>
    </h2>
    <div class='sectionContent'>
      {{#each resume.education}}
      <div class='educationBlock'>
        <div class='blockHeader'>
          <h3 class='title'>
            {{#if institution}}{{{institution}}}{{#if location}}, {{{location}}}{{/if}}{{#if score}} <em>({{{score}}}{{#if scoreMax}}/{{{scoreMax}}}{{/if}}{{#if scoreType}} {{{scoreType}}}{{/if}})</em>{{/if}}{{/if}}
          </h3>
          <div class='metaRow'>
            {{#if studyType}}<div class='degree'><em>{{{studyType}}}{{#if area}} ({{{area}}}){{/if}}</em></div>{{/if}}
            {{#if startDate}}
            <div class='dateLine'>
              <span class='date'>{{startDate}} - {{#if endDate}}{{endDate}}{{else}}Present{{/if}}</span>
            </div>
            {{/if}}
          </div>
        </div>
        {{#if courses.length}}
        <div class='coursesBlock'>
          <div class='coursesInline'>
            {{#each courses}}
              <span class='course'>{{{this}}}</span>{{#unless @last}}<span class='courseSep'> \u2022 </span>{{/unless}}
            {{/each}}
          </div>
        </div>
        {{/if}}
      </div>
      {{#unless @last}}<div class='separator'></div>{{/unless}}
      {{/each}}
    </div>
	</div>
	{{/if}}

	{{#if resume.publications.length}}
	<div class='publications'>
    <h2 class='sectionName'>
      <span>Patents</span>
    </h2>
    <div class='sectionContent'>
      {{#each resume.publications}}
      <div class='publicationBlock'>
        <div class='publicationHeader'>
          {{#if name}}<h3 class='title'>{{{name}}}</h3>{{/if}}
          <div class='publicationMeta'>
            {{#if releaseDate}}<span class='publicationMetaLabel'>Year:</span> <span class='publicationMetaValue'>{{releaseDate}}</span>{{#if summary}}<span class='publicationMetaSep'> | </span>{{/if}}{{/if}}{{#if summary}}<span class='publicationMetaLabel'>Patent no.:</span> <span class='publicationMetaValue'>{{summary}}</span>{{/if}}
          </div>
        </div>
        {{#if highlights.length}}
        <ul class='highlights'>
          {{#each highlights}}
          <li>{{{.}}}</li>
          {{/each}}
        </ul>
        {{/if}}
        {{#unless @last}}<div class='separator'></div>{{/unless}}
      </div>
      {{/each}}
    </div>
	</div>
	{{/if}}

  {{#if resume.recognition._showRecognition}}
	<div class='recognition'>
    <h2 class='sectionName'>
      <span>Recognition</span>
    </h2>
    <div class='sectionContent'>
      <div class='recognitionBlock'>
        {{#if resume.recognition.title}}<h3 class='title'>{{{resume.recognition.title}}}</h3>{{/if}}
        {{#if resume.recognition.summary}}<p class='summary summaryProse'>{{{resume.recognition.summary}}}</p>{{/if}}
        {{#if resume.recognition.highlights.length}}
        <ul class='highlights'>
          {{#each resume.recognition.highlights}}
          <li>{{{.}}}</li>
          {{/each}}
        </ul>
        {{/if}}
      </div>
    </div>
	</div>
  {{/if}}

	{{#if resume.awards.length}}
	<div class='awards'>
    <h2 class='sectionName'>
      <span>Awards &amp; Recognition</span>
    </h2>
    <div class='sectionContent'>
      {{#each resume.awards}}
      <div class='awardBlock'>
        <div class='blockHeader blockHeaderInlineMeta'>
          <h3 class='title'>
            {{#if title}}{{{title}}}{{#if awarder}}: {{{awarder}}}{{/if}}{{/if}}
          </h3>
          {{#if date}}
          <div class='dateLine'>
            <span class='date'>{{date}}</span>
          </div>
          {{/if}}
        </div>
        {{#if highlights.length}}
        <ul class='highlights'>
          {{#each highlights}}
          <li>{{{.}}}</li>
          {{/each}}
        </ul>
        {{/if}}
        {{#unless @last}}<div class='separator'></div>{{/unless}}
      </div>
      {{/each}}
    </div>
	</div>
	{{/if}}

	{{#if resume.volunteer.length}}
	<div class='volunteer'>
    <h2 class='sectionName'>
      <span>Volunteering</span>
    </h2>
    <div class='sectionContent'>
      {{#each resume.volunteer}}
      <div class='volunteerBlock'>
        <div class='blockHeader'>
          <h3 class='title'>
            {{#if organization}}{{{organization}}}{{/if}}
          </h3>
          <div class='metaRow'>
            {{#if position}}<div class='position'><strong>{{{position}}}</strong></div>{{/if}}
            {{#if startDate}}
            <div class='dateLine'>
              <span class='date'>{{#if startDate}}{{startDate}}{{/if}} - {{#if endDate}}{{endDate}}{{else}}Present{{/if}}</span>
            </div>
            {{/if}}
          </div>
        </div>
        {{#if summary}}<div class='summary'><p class='summaryProse'>{{{summary}}}</p></div>{{/if}}
        {{#if highlights.length}}
        <ul class='highlights'>
          {{#each highlights}}
          <li>{{{.}}}</li>
          {{/each}}
        </ul>
        {{/if}}
      </div>
      {{#unless @last}}<div class='separator'></div>{{/unless}}
      {{/each}}
    </div>
	</div>
	{{/if}}

  {{#if resume.certificates.length}}
  <div class='certificates'>
    <h2 class='sectionName'>
      <span>Certifications</span>
    </h2>
    <div class='sectionContent'>
      {{#each resume.certificates}}
      <div class='certificateBlock'>
        <div class='blockHeader blockHeaderInlineMeta'>
          <h3 class='title'>
            {{{name}}} - {{{issuer}}}
          </h3>
          {{#if date}}
          <div class='dateLine'>
            <span class='date'>{{date}}</span>
          </div>
          {{/if}}
        </div>
      </div>
      {{#unless @last}}<div class='separator'></div>{{/unless}}
      {{/each}}
    </div>
  </div>
  {{/if}}

	{{#if resume.languages.length}}
	<div class='languages'>
    <h2 class='sectionName'>
      <span>Languages</span>
    </h2>
    <div class='sectionContent'>
      <div class='languageBlock'>
        {{#each resume.languages}}
        <span class='language'>{{{language}}}</span>
        {{#if fluency}}
        <span class='fluency'><em>({{{fluency}}})</em></span>
        {{/if}}
        {{#unless @last}}<span>, </span>{{/unless}}
        {{/each}}
      </div>
    </div>
	</div>
  {{/if}}

	{{#if resume.interests.length}}
	<div class='interests'>
    <h2 class='sectionName'>
      <span>Interests</span>
    </h2>
    <div class='sectionContent'>
      <div class='interestBlock'>
        {{#each resume.interests}}
        <span class='name'>{{{name}}}</span>
        {{#if keywords.length}}
        <span class='keywords'>: <em>{{#each keywords}}{{{.}}}{{#unless @last}}, {{/unless}}{{/each}}</em></span>
        {{/if}}
        {{#unless @last}}<span>; </span>{{/unless}}
        {{/each}}
      </div>
    </div>
	</div>
  {{/if}}

  {{#if resume.references.length}}
  <div class='references'>
    <h2 class='sectionName'>
      <span>References</span>
    </h2>
    <div class='sectionContent'>
      {{#each resume.references}}
      <div class='referenceBlock'>
        <div class='blockHeader'>
          <h3 class='title'>{{{name}}}</h3>
        </div>
        {{#if reference}}
        <div class='reference'>"{{{reference}}}"</div>
        {{/if}}
      </div>
      {{#unless @last}}<div class='separator'></div>{{/unless}}
      {{/each}}
    </div>
  </div>
  {{/if}}

	</div>
	</body>
</html>
`,"resume.json":`{
  "basics": {
    "name": "Gaurav Bansal",
    "label": "Tech Co-founder & CTO",
    "image": "",
    "email": "me@bgaurav.in",
    "phone": "(555) 123-4567",
    "url": "https://bgaurav.in",
    "summary": "Innovative tech leader with 12+ years of experience building scalable products at the intersection of AI, cloud computing, and enterprise software. As Co-founder and CTO of TechNova, I lead engineering teams developing cutting-edge solutions that transform how businesses leverage data and automation. My expertise spans distributed systems, machine learning operations, and full-stack development with a focus on creating resilient architectures that scale seamlessly with business growth.",
    "location": {
      "address": "123 Innovation Drive",
      "postalCode": "400001",
      "city": "Mumbai",
      "countryCode": "IN",
      "region": "Maharashtra"
    },
    "profiles": [
      {
        "network": "Website",
        "url": "https://bgaurav.in"
      },
      {
        "network": "LinkedIn",
        "username": "bgaurav7",
        "url": "https://linkedin.com/in/bgaurav7"
      },
      {
        "network": "Medium",
        "username": "bgaurav7",
        "url": "https://bgaurav7.medium.com/"
      }
    ],
    "highlights": [
      "Scaled engineering from 3 to 45 across four countries with clear technical leadership and hiring bar.",
      "Shipped a cloud-native data platform processing 10TB+ daily with 99.99% uptime and strong security posture."
    ]
  },
  "work": [
    {
      "name": "TechNova",
      "position": "Co-founder & CTO",
      "url": "https://technova.example.com",
      "startDate": "2019",
      "endDate": "",
      "summary": "Co-founded TechNova to revolutionize enterprise data management through AI-powered automation and analytics. Lead all technical strategy, architecture decisions, and engineering teams.",
      "highlights": [
        "Built and scaled engineering team from 3 to 45 across 4 countries",
        "Architected cloud-native platform processing 10TB+ data daily with 99.99% uptime",
        "Secured $12M Series A funding based on technical innovation and product-market fit",
        "Implemented ML Ops pipeline reducing model deployment time from weeks to hours"
      ]
    },
    {
      "name": "DataSphere",
      "position": "VP of Engineering",
      "url": "https://datasphere.example.com",
      "startDate": "2016",
      "endDate": "2019",
      "summary": "Led engineering for enterprise data platform serving Fortune 500 clients, focusing on scalable architecture and performance optimization.",
      "highlights": [
        "Managed team of 25 engineers across backend, frontend, and DevOps",
        "Redesigned core data processing pipeline improving throughput by 300%",
        "Implemented microservices architecture reducing deployment failures by 78%",
        "Established SRE practices resulting in 99.95% platform availability"
      ]
    },
    {
      "name": "CloudMatrix",
      "position": "Senior Software Engineer",
      "url": "https://cloudmatrix.example.com",
      "startDate": "2013",
      "endDate": "2016",
      "summary": "Developed distributed systems for cloud infrastructure management and monitoring.",
      "highlights": [
        "Built real-time monitoring system for multi-region cloud deployments",
        "Implemented fault-tolerant message queue handling 50K+ messages per second",
        "Developed automated scaling algorithms reducing cloud costs by 35%",
        "Created developer SDK adopted by 200+ enterprise customers"
      ]
    }
  ],
  "volunteer": [
    {
      "organization": "Code For Change",
      "position": "Technical Mentor",
      "url": "https://codeforchange.example.org",
      "startDate": "2020",
      "endDate": "",
      "summary": "Mentor aspiring developers from underrepresented communities, providing technical guidance and career advice.",
      "highlights": [
        "Conducted monthly workshops on cloud architecture and system design",
        "Mentored 15+ junior developers who secured roles at top tech companies",
        "Developed open-source curriculum for backend development fundamentals"
      ]
    }
  ],
  "education": [
    {
      "institution": "Stanford University",
      "url": "https://stanford.edu",
      "area": "Computer Science",
      "studyType": "Master of Science (M.S.)",
      "startDate": "2010",
      "endDate": "2012",
      "score": "3.9",
      "courses": [
        "Distributed Systems",
        "Machine Learning",
        "Database Systems",
        "Cloud Computing"
      ]
    },
    {
      "institution": "Indian Institute of Technology, Mumbai",
      "url": "https://iitb.ac.in",
      "area": "Computer Science and Engineering",
      "studyType": "Bachelor of Technology (B.Tech.)",
      "startDate": "2006",
      "endDate": "2010",
      "score": "9.2/10",
      "courses": [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering"
      ]
    }
  ],
  "awards": [
    {
      "title": "Technology Innovator of the Year",
      "date": "2023",
      "awarder": "Tech Founders Association",
      "summary": "Recognized for pioneering work in enterprise data automation and ML Ops."
    },
    {
      "title": "Best Enterprise SaaS Platform",
      "date": "2022",
      "awarder": "Cloud Computing Awards",
      "summary": "TechNova's data platform recognized for innovation, scalability, and business impact."
    }
  ],
  "certificates": [
    {
      "name": "AWS Solutions Architect - Professional",
      "date": "2021",
      "issuer": "Amazon Web Services",
      "url": "https://aws.amazon.com/certification"
    },
    {
      "name": "Google Cloud Professional Data Engineer",
      "date": "2020",
      "issuer": "Google Cloud",
      "url": "https://cloud.google.com/certification"
    }
  ],
  "publications": [
    {
      "name": "Scalable ML Pipelines for Enterprise: Lessons from the Trenches",
      "publisher": "ACM Digital Library",
      "releaseDate": "2022",
      "url": "https://dl.acm.org/example",
      "summary": "Research paper detailing best practices for implementing production ML pipelines in enterprise environments."
    }
  ],
  "recognition": {
    "title": "",
    "summary": "12+ years building data and ML platforms",
    "highlights": [
      "Invited talks on MLOps and production ML at regional engineering forums."
    ]
  },
  "skills": [
    {
      "name": "Engineering Leadership",
      "level": "Advanced",
      "keywords": ["Team Building", "Technical Strategy", "Product Vision", "Agile Methodologies", "Talent Development"]
    },
    {
      "name": "AI & Machine Learning",
      "level": "Advanced",
      "keywords": ["MLOps", "TensorFlow", "PyTorch", "Feature Engineering", "Model Deployment"]
    },
    {
      "name": "System Design",
      "level": "Expert",
      "keywords": ["Distributed Systems", "Scalable Architecture", "High Availability", "Fault Tolerance"]
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Professional"
    },
    {
      "language": "Hindi",
      "fluency": "Native"
    },
    {
      "language": "Spanish",
      "fluency": "Conversational"
    }
  ],
  "interests": [
    {
      "name": "Open Source",
      "keywords": ["Contributor", "Maintainer", "Community Building", "Hackathons"]
    },
    {
      "name": "Technology Trends",
      "keywords": ["Edge Computing", "Quantum Computing", "Sustainable Tech", "Web3"]
    },
    {
      "name": "Travel & Adventure",
      "keywords": ["Hiking", "Photography", "Cultural Immersion", "Digital Nomad"]
    }
  ],
  "references": [
    {
      "name": "Sarah Chen",
      "reference": "Gaurav is an exceptional technical leader who combines deep engineering expertise with strategic vision. His ability to translate complex business requirements into elegant technical solutions has been instrumental to our company's growth."
    }
  ],
  "projects": [
    {
      "name": "DataFlow",
      "startDate": "2021",
      "endDate": "",
      "description": "TechNova's flagship enterprise data platform that enables real-time data processing, analytics, and ML model deployment with minimal engineering overhead.",
      "highlights": [
        "Processes over 10TB of data daily with sub-second latency",
        "Supports 500+ concurrent enterprise users with 99.99% uptime",
        "Reduced data pipeline development time by 70% through no-code interfaces",
        "Integrated with all major cloud providers and data warehouses"
      ],
      "url": "https://technova.example.com/dataflow"
    },
    {
      "name": "AutoML Engine",
      "startDate": "2020",
      "endDate": "2021",
      "description": "An open-source framework for automated machine learning model selection, training, and deployment that democratizes AI for organizations without dedicated data science teams.",
      "highlights": [
        "5,000+ GitHub stars and 50+ contributors",
        "Supports classification, regression, and time-series forecasting",
        "Automated feature engineering and hyperparameter optimization",
        "One-click deployment to production environments"
      ],
      "url": "https://github.com/technova/automl-engine"
    },
    {
      "name": "CloudGuard",
      "startDate": "2018-06-01",
      "endDate": "2019-12-01",
      "description": "Security and compliance automation platform for multi-cloud environments that continuously monitors infrastructure for vulnerabilities and configuration drift.",
      "highlights": [
        "Reduced security incident response time from days to minutes",
        "Automated remediation for 80% of common security findings",
        "Comprehensive compliance reporting for SOC2, HIPAA, and GDPR",
        "Seamless integration with CI/CD pipelines"
      ],
      "url": "https://cloudguard.example.com"
    }
  ],
  "leadership": {
    "title": "",
    "summary": "12+ years leading engineering orgs, hiring, and delivery at scale.",
    "highlights": [
      "Scaled engineering from 3 to 45 across four countries with clear leveling, mentorship, and performance frameworks.",
      "Ran quarterly planning and release trains aligning product, platform, and infrastructure roadmaps."
    ]
  }
}`,"style.css":`/* Palette: navy accents; near-black body/job titles; mid-grey companies; #595959 dates (\u22654.5:1 on white). */
:root {
  --resume-accent: #1b4f8a;
  --resume-body: #1a1a1a;
  --resume-secondary: #555555;
  --resume-company: #555555;
  --resume-date: #595959;
  --resume-rule: #1b4f8a;
}

/* Base styles */
body {
  background: #ffffff;
  font: 11pt/1.15 "Times New Roman", Times, serif;
  margin: 20px 0;
  color: var(--resume-body);
}

h1,
h2,
h3 {
  margin: 0;
  font: inherit;
}

em {
  color: var(--resume-company);
  font-style: italic;
}

strong {
  font-weight: bold;
}

p {
  line-height: 1.15;
}

p.summaryProse {
  margin: 0;
}

ul {
  margin-bottom: 0;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: var(--resume-accent);
}

.normal-weight {
  font-weight: normal;
}

.projectUrl {
  font-weight: normal;
  font-size: inherit;
  color: var(--resume-company);
}

/* Resume container \u2014 no shaded backgrounds */
.resume {
  margin: 0 auto;
  max-width: 750px;
  padding: 20px 30px;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 4px #aaa;
  -webkit-box-shadow: 2px 2px 4px #aaa;
}

/* Section headings \u2014 top border simulates Word paragraph top border; ALL CAPS */
h2.sectionName {
  text-align: left;
  font-weight: bold;
  font-size: 10pt;
  line-height: 1.15;
  margin-top: 10pt;
  margin-bottom: 3pt;
  padding-top: 5pt;
  border-top: 1.5pt solid var(--resume-rule);
  color: var(--resume-accent);
  text-transform: uppercase;
  letter-spacing: 1pt;
}

.sectionContent {
  width: 100%;
  margin-top: 0;
}

/* Add spacing after each section except the last one */
.resume > div:not(:last-child) {
  margin-bottom: 8px;
}

.skills {
  margin-bottom: 6px;
}

/* Allow jobs/education blocks to split across pages (avoid huge gaps when a block
   won't fit in the remaining space). Pagination is tuned in @media print below. */
.sectionContent > div {
  margin-bottom: 2px;
}

/* Extra breathing room between multiple roles (work) and project entries */
.workBlock .sectionContent > .jobBlock:not(:last-child),
.projects .sectionContent > .projectBlock:not(:last-child) {
  margin-bottom: 8pt;
}

/*
 * Company / degree + dates: float layout (right edge \u2248 Word right-tab), not table/flex.
 * Title + date (projects, awards, \u2026): same pattern.
 */
.blockHeader {
  display: block;
  margin-bottom: 1px;
}

.blockHeader::after,
.metaRow::after {
  content: "";
  /* Safer clearfix than \`display: table\` for PDF/ATS extraction */
  display: block;
  clear: both;
}

.blockHeader.blockHeaderInlineMeta {
  display: block;
  width: 100%;
  overflow: hidden;
}

.blockHeader.blockHeaderInlineMeta h3.title {
  float: left;
  /* Patents/Projects titles sit left of a long, nowrap dateLine.
     Keep the title wide enough to avoid wrapping while still leaving
     space for the right-aligned date text. */
  max-width: calc(100% - 12em);
  padding-right: 0.5em;
  min-width: 0;
}

.blockHeader.blockHeaderInlineMeta .dateLine {
  float: right;
  margin-top: 0;
  text-align: right;
  white-space: nowrap;
}

.titleGroup {
  min-width: 0;
}

.titleGroup h3.title {
  padding-right: 0;
}

h3.title {
  font-weight: bold;
  font-size: 11pt;
  color: var(--resume-body);
  display: block;
  line-height: 1.15;
  margin: 0;
  padding-right: 0;
}

h3.subSectionName {
  font-size: 10.5pt;
  font-weight: bold;
  margin: 0.75em 0 0.35em 0;
  color: var(--resume-body);
}

/* Institution line extras (GPA) \u2014 secondary, not job-title weight */
.educationBlock h3.title em {
  font-style: italic;
  font-weight: normal;
  color: var(--resume-secondary);
}

.metaRow {
  display: block;
  width: 100%;
  margin-top: 1px;
  overflow: hidden;
}

.metaRow .companyLine,
.metaRow .degree,
.metaRow .position {
  float: left;
  clear: left;
  max-width: calc(100% - 14em);
  padding-right: 1em;
  min-width: 0;
  margin: 0;
  text-align: left;
}

.metaRow .dateLine {
  float: right;
  margin-top: 0;
  text-align: right;
  white-space: nowrap;
}

.companyLine {
  font-size: 11pt;
  font-weight: normal;
  line-height: 1.15;
  margin: 1px 0 0;
  color: var(--resume-company);
  font-style: normal;
}

.companyLine .companyName {
  color: var(--resume-company);
  font-style: normal;
}

.dateLine {
  white-space: nowrap;
}

.date {
  font-weight: normal;
  font-size: 11pt;
  color: var(--resume-date);
  font-style: italic;
}

.metaRow .degree,
.metaRow .degree em {
  font-style: normal;
  color: var(--resume-company);
}

.position,
.degree {
  margin-top: 1px;
  margin-bottom: 2px;
}

.phoneLink,
.websiteLink,
.profileLink,
.emailLink {
  font-size: inherit;
  font-weight: normal;
  text-decoration: none;
}

/* Header contact line: all black (location, pipes, phone, email, URLs) */
.basicsBlock .headerContact,
.basicsBlock .headerContact .contactSep,
.basicsBlock .phoneLink,
.basicsBlock .emailLink,
.basicsBlock .websiteLink,
.basicsBlock .profileLink {
  color: #000;
}

.basicsBlock .phoneLink:hover,
.basicsBlock .emailLink:hover,
.basicsBlock .websiteLink:hover,
.basicsBlock .profileLink:hover {
  color: #000;
  text-decoration: none;
}

.summary {
  margin-top: 2px;
  margin-bottom: 2px;
  line-height: 1.15;
}

/* Lists \u2014 U+2022 bullet, navy; body text stays near-black */
.sectionContent ul {
  list-style: none;
  padding-left: 0;
  margin-top: 2px;
  margin-bottom: 2px;
}

.sectionContent ul > li {
  position: relative;
  padding-left: 1.15em;
  margin-bottom: 1px;
  color: var(--resume-body);
}

.sectionContent ul > li::before {
  content: "\\2022";
  position: absolute;
  left: 0;
  color: var(--resume-accent);
  font-weight: normal;
}

.skillBlock {
  margin-bottom: 2px;
  line-height: 1.15;
}

.skillRow {
  display: block;
}

.skillRow b {
  font-weight: bold;
  color: var(--resume-body);
}

.skillDetailsRow {
  display: block;
  margin-top: 2px;
  padding-left: 0;
}

.separator {
  height: 0;
  margin-top: 0;
  margin-bottom: 0;
  overflow: hidden;
}

/* Contact row layout (colour set under .basicsBlock) */
.headerContact {
  display: block;
  font-size: 11pt;
  line-height: 1.15;
}

.headerContact .contactPiece {
  display: inline;
  white-space: normal;
}

.contactLocation:empty {
  display: none;
}

.nameBlock {
  font-size: 20pt;
  text-align: left;
  margin-bottom: 0;
}

h1.name {
  font-size: 20pt;
  font-weight: bold;
  display: block;
  color: var(--resume-accent);
  letter-spacing: 1.5pt;
}

.label {
  font-size: 12pt;
  margin-bottom: 0;
  margin-top: 2px;
  color: var(--resume-secondary);
  font-weight: normal;
}

.basicsBlock {
  font-size: 11pt;
  text-align: left;
  margin-top: 2px;
  margin-bottom: 3px;
}

.coursesBlock {
  margin-top: 2px;
}

ul.coursesList {
  display: block;
  width: 100%;
  margin: 0;
  padding-left: 0;
  list-style: none;
}

.coursesInline {
  margin: 0;
  padding: 0;
  line-height: 1.15;
}

.course {
  display: inline;
  margin: 0;
}

.courseSep {
  display: inline;
  color: var(--resume-accent);
  font-weight: normal;
  margin: 0 0.15em;
}

.gpa {
  margin-bottom: 5px;
  font-size: inherit;
}

.publicationBlock {
  margin-bottom: 2px;
}

/* Patents: Year + Patent no. on one line, labeled (clear for ATS text extraction). */
.publicationHeader {
  display: block;
  margin-bottom: 1px;
}

.publicationMeta {
  margin-top: 2px;
  line-height: 1.15;
}

.publicationMetaLabel {
  font-weight: bold;
  color: var(--resume-body);
}

.publicationMetaValue {
  font-weight: normal;
  color: var(--resume-date);
}

.publicationMetaSep {
  font-weight: normal;
  color: var(--resume-secondary);
}

@media only screen and (max-width: 40em) {
  body {
    margin: 0;
    font-size: 12pt;
  }

  .resume {
    margin: 0 auto;
    max-width: 600px;
    padding: 0.5em 1em;
    border: none;
  }

  .sectionContent {
    width: 100%;
  }

  h2.sectionName {
    width: auto;
  }

  .nameBlock {
    font-size: 18pt;
  }

  h1.name {
    font-size: 18pt;
  }

  .basicsBlock {
    font-size: 12pt;
  }
}

@page {
  margin: 0.5in;
}

@media print {
  body {
    background: #ffffff;
    color: var(--resume-body);
  }

  .resume {
    margin: 0 auto;
    max-width: 750px;
    padding: 0px 0px;
    border: 0px;
    background: #fff;
    box-shadow: none;
    -webkit-box-shadow: none;
  }

  a {
    text-decoration: none;
  }

  .basicsBlock .headerContact,
  .basicsBlock .headerContact .contactSep,
  .basicsBlock .phoneLink,
  .basicsBlock .emailLink,
  .basicsBlock .websiteLink,
  .basicsBlock .profileLink {
    color: #000;
  }

  h2.sectionName {
    color: var(--resume-accent);
    border-top-color: var(--resume-rule);
    letter-spacing: 0;
    break-after: avoid;
    page-break-after: avoid;
  }

  h1.name {
    color: var(--resume-accent);
  }

  /* Keep role/company header with the start of its body; bullets may continue on next page. */
  .sectionContent > div > .blockHeader,
  .sectionContent > div > .publicationHeader {
    break-after: avoid;
    page-break-after: avoid;
  }

  /* One bullet = one fragment; breaks between bullets fill the prior page. */
  .sectionContent ul > li {
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
`},Ee={".":["LICENSE","README.md","SKILL-ATS.md","index.js","jsonresume-theme-tech-1.5.1.tgz","package.json","resume.hbs","resume.json","style.css"]};hn=function(t,e){var n=cn(t);return n!==void 0?n:""},pn=function(t,e){var n=ht(t);return n===void 0&&(n=[]),e&&e.withFileTypes?n.map(function(r){var i=pt(t)+"/"+r,s=ht(i)!==void 0;return{name:r,isFile:function(){return!s},isDirectory:function(){return s}}}):n},fn=function(t){return cn(t)!==void 0||ht(t)!==void 0},dn=function(){},mn=function(){},ft=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},gn=ft,vn=function(){},_n=function(){},yn=function(){return{pipe:function(t){return t},on:function(){return this}}},bn=function(){return{write:function(){},end:function(){},on:function(){return this}}},ki={readFileSync:hn,readdirSync:pn,existsSync:fn,writeFileSync:dn,mkdirSync:mn,statSync:ft,lstatSync:gn,unlinkSync:vn,rmdirSync:_n,createReadStream:yn,createWriteStream:bn}});var L=v(x=>{"use strict";p();x.__esModule=!0;x.extend=wn;x.indexOf=Li;x.escapeExpression=xi;x.isEmpty=Ei;x.createFrame=Mi;x.blockParams=Ai;x.appendContextPath=Oi;var Si={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},wi=/[&<>"'`=]/g,Ci=/[&<>"'`=]/;function Pi(t){return Si[t]}function wn(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var mt=Object.prototype.toString;x.toString=mt;var dt=function(e){return typeof e=="function"};dt(/x/)&&(x.isFunction=dt=function(t){return typeof t=="function"&&mt.call(t)==="[object Function]"});x.isFunction=dt;var Cn=Array.isArray||function(t){return t&&typeof t=="object"?mt.call(t)==="[object Array]":!1};x.isArray=Cn;function Li(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}function xi(t){if(typeof t!="string"){if(t&&t.toHTML)return t.toHTML();if(t==null)return"";if(!t)return t+"";t=""+t}return Ci.test(t)?t.replace(wi,Pi):t}function Ei(t){return!t&&t!==0?!0:!!(Cn(t)&&t.length===0)}function Mi(t){var e=wn({},t);return e._parent=t,e}function Ai(t,e){return t.path=e,t}function Oi(t,e){return(t?t+".":"")+e}});var A=v((Me,Pn)=>{"use strict";p();Me.__esModule=!0;var gt=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function vt(t,e){var n=e&&e.loc,r=void 0,i=void 0,s=void 0,a=void 0;n&&(r=n.start.line,i=n.end.line,s=n.start.column,a=n.end.column,t+=" - "+r+":"+s);for(var l=Error.prototype.constructor.call(this,t),u=0;u<gt.length;u++)this[gt[u]]=l[gt[u]];Error.captureStackTrace&&Error.captureStackTrace(this,vt);try{n&&(this.lineNumber=r,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:a,enumerable:!0})):(this.column=s,this.endColumn=a))}catch{}}vt.prototype=new Error;Me.default=vt;Pn.exports=Me.default});var xn=v((Ae,Ln)=>{"use strict";p();Ae.__esModule=!0;var _t=L();Ae.default=function(t){t.registerHelper("blockHelperMissing",function(e,n){var r=n.inverse,i=n.fn;if(e===!0)return i(this);if(e===!1||e==null)return r(this);if(_t.isArray(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):r(this);if(n.data&&n.ids){var s=_t.createFrame(n.data);s.contextPath=_t.appendContextPath(n.data.contextPath,n.name),n={data:s}}return i(e,n)})};Ln.exports=Ae.default});var Mn=v((Oe,En)=>{"use strict";p();Oe.__esModule=!0;function Ii(t){return t&&t.__esModule?t:{default:t}}var ce=L(),Ni=A(),Di=Ii(Ni);Oe.default=function(t){t.registerHelper("each",function(e,n){if(!n)throw new Di.default("Must pass iterator to #each");var r=n.fn,i=n.inverse,s=0,a="",l=void 0,u=void 0;n.data&&n.ids&&(u=ce.appendContextPath(n.data.contextPath,n.ids[0])+"."),ce.isFunction(e)&&(e=e.call(this)),n.data&&(l=ce.createFrame(n.data));function o(_,b,D){l&&(l.key=_,l.index=b,l.first=b===0,l.last=!!D,u&&(l.contextPath=u+_)),a=a+r(e[_],{data:l,blockParams:ce.blockParams([e[_],_],[u+_,null])})}if(e&&typeof e=="object")if(ce.isArray(e))for(var h=e.length;s<h;s++)s in e&&o(s,s,s===e.length-1);else if(typeof Symbol=="function"&&e[Symbol.iterator]){for(var c=[],f=e[Symbol.iterator](),m=f.next();!m.done;m=f.next())c.push(m.value);e=c;for(var h=e.length;s<h;s++)o(s,s,s===e.length-1)}else(function(){var _=void 0;Object.keys(e).forEach(function(b){_!==void 0&&o(_,s-1),_=b,s++}),_!==void 0&&o(_,s-1,!0)})();return s===0&&(a=i(this)),a})};En.exports=Oe.default});var On=v((Ie,An)=>{"use strict";p();Ie.__esModule=!0;function Ri(t){return t&&t.__esModule?t:{default:t}}var Bi=A(),qi=Ri(Bi);Ie.default=function(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new qi.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})};An.exports=Ie.default});var Rn=v((Ne,Dn)=>{"use strict";p();Ne.__esModule=!0;function Ti(t){return t&&t.__esModule?t:{default:t}}var In=L(),Hi=A(),Nn=Ti(Hi);Ne.default=function(t){t.registerHelper("if",function(e,n){if(arguments.length!=2)throw new Nn.default("#if requires exactly one argument");return In.isFunction(e)&&(e=e.call(this)),!n.hash.includeZero&&!e||In.isEmpty(e)?n.inverse(this):n.fn(this)}),t.registerHelper("unless",function(e,n){if(arguments.length!=2)throw new Nn.default("#unless requires exactly one argument");return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})})};Dn.exports=Ne.default});var qn=v((De,Bn)=>{"use strict";p();De.__esModule=!0;De.default=function(t){t.registerHelper("log",function(){for(var e=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)e.push(arguments[r]);var i=1;n.hash.level!=null?i=n.hash.level:n.data&&n.data.level!=null&&(i=n.data.level),e[0]=i,t.log.apply(t,e)})};Bn.exports=De.default});var Hn=v((Re,Tn)=>{"use strict";p();Re.__esModule=!0;Re.default=function(t){t.registerHelper("lookup",function(e,n,r){return e&&r.lookupProperty(e,n)})};Tn.exports=Re.default});var Vn=v((Be,Fn)=>{"use strict";p();Be.__esModule=!0;function Fi(t){return t&&t.__esModule?t:{default:t}}var he=L(),Vi=A(),Gi=Fi(Vi);Be.default=function(t){t.registerHelper("with",function(e,n){if(arguments.length!=2)throw new Gi.default("#with requires exactly one argument");he.isFunction(e)&&(e=e.call(this));var r=n.fn;if(he.isEmpty(e))return n.inverse(this);var i=n.data;return n.data&&n.ids&&(i=he.createFrame(n.data),i.contextPath=he.appendContextPath(n.data.contextPath,n.ids[0])),r(e,{data:i,blockParams:he.blockParams([e],[i&&i.contextPath])})})};Fn.exports=Be.default});var yt=v(qe=>{"use strict";p();qe.__esModule=!0;qe.registerDefaultHelpers=rs;qe.moveHelperToHooks=is;function J(t){return t&&t.__esModule?t:{default:t}}var Wi=xn(),Ui=J(Wi),zi=Mn(),Ki=J(zi),Ji=On(),ji=J(Ji),Qi=Rn(),Yi=J(Qi),Xi=qn(),Zi=J(Xi),$i=Hn(),es=J($i),ts=Vn(),ns=J(ts);function rs(t){Ui.default(t),Ki.default(t),ji.default(t),Yi.default(t),Zi.default(t),es.default(t),ns.default(t)}function is(t,e,n){t.helpers[e]&&(t.hooks[e]=t.helpers[e],n||delete t.helpers[e])}});var Wn=v((Te,Gn)=>{"use strict";p();Te.__esModule=!0;var ss=L();Te.default=function(t){t.registerDecorator("inline",function(e,n,r,i){var s=e;return n.partials||(n.partials={},s=function(a,l){var u=r.partials;r.partials=ss.extend({},u,n.partials);var o=e(a,l);return r.partials=u,o}),n.partials[i.args[0]]=i.fn,s})};Gn.exports=Te.default});var Un=v(bt=>{"use strict";p();bt.__esModule=!0;bt.registerDefaultDecorators=us;function as(t){return t&&t.__esModule?t:{default:t}}var os=Wn(),ls=as(os);function us(t){ls.default(t)}});var kt=v((He,zn)=>{"use strict";p();He.__esModule=!0;var cs=L(),te={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if(typeof e=="string"){var n=cs.indexOf(te.methodMap,e.toLowerCase());n>=0?e=n:e=parseInt(e,10)}return e},log:function(e){if(e=te.lookupLevel(e),typeof console<"u"&&te.lookupLevel(te.level)<=e){var n=te.methodMap[e];console[n]||(n="log");for(var r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];console[n].apply(console,i)}}};He.default=te;zn.exports=He.default});var Kn=v(St=>{"use strict";p();St.__esModule=!0;St.createNewLookupObject=ps;var hs=L();function ps(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return hs.extend.apply(void 0,[Object.create(null)].concat(e))}});var wt=v(pe=>{"use strict";p();pe.__esModule=!0;pe.createProtoAccessControl=gs;pe.resultIsAllowed=vs;pe.resetLoggedProperties=ys;function fs(t){return t&&t.__esModule?t:{default:t}}var Jn=Kn(),ds=kt(),ms=fs(ds),Fe=Object.create(null);function gs(t){var e=Object.create(null);e.constructor=!1,e.__defineGetter__=!1,e.__defineSetter__=!1,e.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:Jn.createNewLookupObject(n,t.allowedProtoProperties),defaultValue:t.allowProtoPropertiesByDefault},methods:{whitelist:Jn.createNewLookupObject(e,t.allowedProtoMethods),defaultValue:t.allowProtoMethodsByDefault}}}function vs(t,e,n){return jn(typeof t=="function"?e.methods:e.properties,n)}function jn(t,e){return t.whitelist[e]!==void 0?t.whitelist[e]===!0:t.defaultValue!==void 0?t.defaultValue:(_s(e),!1)}function _s(t){Fe[t]!==!0&&(Fe[t]=!0,ms.default.log("error",'Handlebars: Access has been denied to resolve the property "'+t+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function ys(){Object.keys(Fe).forEach(function(t){delete Fe[t]})}});var Ge=v(B=>{"use strict";p();B.__esModule=!0;B.HandlebarsEnvironment=Lt;function Qn(t){return t&&t.__esModule?t:{default:t}}var j=L(),bs=A(),Ct=Qn(bs),ks=yt(),Ss=Un(),ws=kt(),Ve=Qn(ws),Cs=wt(),Ps="4.7.8";B.VERSION=Ps;var Ls=8;B.COMPILER_REVISION=Ls;var xs=7;B.LAST_COMPATIBLE_COMPILER_REVISION=xs;var Es={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};B.REVISION_CHANGES=Es;var Pt="[object Object]";function Lt(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},ks.registerDefaultHelpers(this),Ss.registerDefaultDecorators(this)}Lt.prototype={constructor:Lt,logger:Ve.default,log:Ve.default.log,registerHelper:function(e,n){if(j.toString.call(e)===Pt){if(n)throw new Ct.default("Arg not supported with multiple helpers");j.extend(this.helpers,e)}else this.helpers[e]=n},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,n){if(j.toString.call(e)===Pt)j.extend(this.partials,e);else{if(typeof n>"u")throw new Ct.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=n}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,n){if(j.toString.call(e)===Pt){if(n)throw new Ct.default("Arg not supported with multiple decorators");j.extend(this.decorators,e)}else this.decorators[e]=n},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){Cs.resetLoggedProperties()}};var Ms=Ve.default.log;B.log=Ms;B.createFrame=j.createFrame;B.logger=Ve.default});var Xn=v((We,Yn)=>{"use strict";p();We.__esModule=!0;function xt(t){this.string=t}xt.prototype.toString=xt.prototype.toHTML=function(){return""+this.string};We.default=xt;Yn.exports=We.default});var Zn=v(Et=>{"use strict";p();Et.__esModule=!0;Et.wrapHelper=As;function As(t,e){if(typeof t!="function")return t;var n=function(){var i=arguments[arguments.length-1];return arguments[arguments.length-1]=e(i),t.apply(this,arguments)};return n}});var rr=v(W=>{"use strict";p();W.__esModule=!0;W.checkRevision=Bs;W.template=qs;W.wrapProgram=Ue;W.resolvePartial=Ts;W.invokePartial=Hs;W.noop=tr;function Os(t){return t&&t.__esModule?t:{default:t}}function Is(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}var Ns=L(),H=Is(Ns),Ds=A(),F=Os(Ds),V=Ge(),$n=yt(),Rs=Zn(),er=wt();function Bs(t){var e=t&&t[0]||1,n=V.COMPILER_REVISION;if(!(e>=V.LAST_COMPATIBLE_COMPILER_REVISION&&e<=V.COMPILER_REVISION))if(e<V.LAST_COMPATIBLE_COMPILER_REVISION){var r=V.REVISION_CHANGES[n],i=V.REVISION_CHANGES[e];throw new F.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}else throw new F.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}function qs(t,e){if(!e)throw new F.default("No environment passed to template");if(!t||!t.main)throw new F.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n=t.compiler&&t.compiler[0]===7;function r(a,l,u){u.hash&&(l=H.extend({},l,u.hash),u.ids&&(u.ids[0]=!0)),a=e.VM.resolvePartial.call(this,a,l,u);var o=H.extend({},u,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),h=e.VM.invokePartial.call(this,a,l,o);if(h==null&&e.compile&&(u.partials[u.name]=e.compile(a,t.compilerOptions,e),h=u.partials[u.name](l,o)),h!=null){if(u.indent){for(var c=h.split(`
`),f=0,m=c.length;f<m&&!(!c[f]&&f+1===m);f++)c[f]=u.indent+c[f];h=c.join(`
`)}return h}else throw new F.default("The partial "+u.name+" could not be compiled when running in runtime-only mode")}var i={strict:function(l,u,o){if(!l||!(u in l))throw new F.default('"'+u+'" not defined in '+l,{loc:o});return i.lookupProperty(l,u)},lookupProperty:function(l,u){var o=l[u];if(o==null||Object.prototype.hasOwnProperty.call(l,u)||er.resultIsAllowed(o,i.protoAccessControl,u))return o},lookup:function(l,u){for(var o=l.length,h=0;h<o;h++){var c=l[h]&&i.lookupProperty(l[h],u);if(c!=null)return l[h][u]}},lambda:function(l,u){return typeof l=="function"?l.call(u):l},escapeExpression:H.escapeExpression,invokePartial:r,fn:function(l){var u=t[l];return u.decorator=t[l+"_d"],u},programs:[],program:function(l,u,o,h,c){var f=this.programs[l],m=this.fn(l);return u||c||h||o?f=Ue(this,l,m,u,o,h,c):f||(f=this.programs[l]=Ue(this,l,m)),f},data:function(l,u){for(;l&&u--;)l=l._parent;return l},mergeIfNeeded:function(l,u){var o=l||u;return l&&u&&l!==u&&(o=H.extend({},u,l)),o},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function s(a){var l=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],u=l.data;s._setup(l),!l.partial&&t.useData&&(u=Fs(a,u));var o=void 0,h=t.useBlockParams?[]:void 0;t.useDepths&&(l.depths?o=a!=l.depths[0]?[a].concat(l.depths):l.depths:o=[a]);function c(f){return""+t.main(i,f,i.helpers,i.partials,u,h,o)}return c=nr(t.main,c,i,l.depths||[],u,h),c(a,l)}return s.isTop=!0,s._setup=function(a){if(a.partial)i.protoAccessControl=a.protoAccessControl,i.helpers=a.helpers,i.partials=a.partials,i.decorators=a.decorators,i.hooks=a.hooks;else{var l=H.extend({},e.helpers,a.helpers);Vs(l,i),i.helpers=l,t.usePartial&&(i.partials=i.mergeIfNeeded(a.partials,e.partials)),(t.usePartial||t.useDecorators)&&(i.decorators=H.extend({},e.decorators,a.decorators)),i.hooks={},i.protoAccessControl=er.createProtoAccessControl(a);var u=a.allowCallsToHelperMissing||n;$n.moveHelperToHooks(i,"helperMissing",u),$n.moveHelperToHooks(i,"blockHelperMissing",u)}},s._child=function(a,l,u,o){if(t.useBlockParams&&!u)throw new F.default("must pass block params");if(t.useDepths&&!o)throw new F.default("must pass parent depths");return Ue(i,a,t[a],l,0,u,o)},s}function Ue(t,e,n,r,i,s,a){function l(u){var o=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],h=a;return a&&u!=a[0]&&!(u===t.nullContext&&a[0]===null)&&(h=[u].concat(a)),n(t,u,t.helpers,t.partials,o.data||r,s&&[o.blockParams].concat(s),h)}return l=nr(n,l,t,a,r,s),l.program=e,l.depth=a?a.length:0,l.blockParams=i||0,l}function Ts(t,e,n){return t?!t.call&&!n.name&&(n.name=t,t=n.partials[t]):n.name==="@partial-block"?t=n.data["partial-block"]:t=n.partials[n.name],t}function Hs(t,e,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;if(n.fn&&n.fn!==tr&&(function(){n.data=V.createFrame(n.data);var s=n.fn;i=n.data["partial-block"]=function(l){var u=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return u.data=V.createFrame(u.data),u.data["partial-block"]=r,s(l,u)},s.partials&&(n.partials=H.extend({},n.partials,s.partials))})(),t===void 0&&i&&(t=i),t===void 0)throw new F.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)}function tr(){return""}function Fs(t,e){return(!e||!("root"in e))&&(e=e?V.createFrame(e):{},e.root=t),e}function nr(t,e,n,r,i,s){if(t.decorator){var a={};e=t.decorator(e,a,n,r&&r[0],i,s,r),H.extend(e,a)}return e}function Vs(t,e){Object.keys(t).forEach(function(n){var r=t[n];t[n]=Gs(r,e)})}function Gs(t,e){var n=e.lookupProperty;return Rs.wrapHelper(t,function(r){return H.extend({lookupProperty:n},r)})}});var Mt=v((ze,ir)=>{"use strict";p();ze.__esModule=!0;ze.default=function(t){(function(){typeof globalThis!="object"&&(Object.prototype.__defineGetter__("__magic__",function(){return this}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__)})();var e=globalThis.Handlebars;t.noConflict=function(){return globalThis.Handlebars===t&&(globalThis.Handlebars=e),t}};ir.exports=ze.default});var ur=v((Ke,lr)=>{"use strict";p();Ke.__esModule=!0;function Ot(t){return t&&t.__esModule?t:{default:t}}function It(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}var Ws=Ge(),sr=It(Ws),Us=Xn(),zs=Ot(Us),Ks=A(),Js=Ot(Ks),js=L(),At=It(js),Qs=rr(),ar=It(Qs),Ys=Mt(),Xs=Ot(Ys);function or(){var t=new sr.HandlebarsEnvironment;return At.extend(t,sr),t.SafeString=zs.default,t.Exception=Js.default,t.Utils=At,t.escapeExpression=At.escapeExpression,t.VM=ar,t.template=function(e){return ar.template(e,t)},t}var fe=or();fe.create=or;Xs.default(fe);fe.default=fe;Ke.default=fe;lr.exports=Ke.default});var Nt=v((Je,hr)=>{"use strict";p();Je.__esModule=!0;var cr={helpers:{helperExpression:function(e){return e.type==="SubExpression"||(e.type==="MustacheStatement"||e.type==="BlockStatement")&&!!(e.params&&e.params.length||e.hash)},scopedId:function(e){return/^\.|this\b/.test(e.original)},simpleId:function(e){return e.parts.length===1&&!cr.helpers.scopedId(e)&&!e.depth}}};Je.default=cr;hr.exports=Je.default});var fr=v((je,pr)=>{"use strict";p();je.__esModule=!0;var Zs=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(i,s,a,l,u,o,h){var c=o.length-1;switch(u){case 1:return o[c-1];case 2:this.$=l.prepareProgram(o[c]);break;case 3:this.$=o[c];break;case 4:this.$=o[c];break;case 5:this.$=o[c];break;case 6:this.$=o[c];break;case 7:this.$=o[c];break;case 8:this.$=o[c];break;case 9:this.$={type:"CommentStatement",value:l.stripComment(o[c]),strip:l.stripFlags(o[c],o[c]),loc:l.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:o[c],value:o[c],loc:l.locInfo(this._$)};break;case 11:this.$=l.prepareRawBlock(o[c-2],o[c-1],o[c],this._$);break;case 12:this.$={path:o[c-3],params:o[c-2],hash:o[c-1]};break;case 13:this.$=l.prepareBlock(o[c-3],o[c-2],o[c-1],o[c],!1,this._$);break;case 14:this.$=l.prepareBlock(o[c-3],o[c-2],o[c-1],o[c],!0,this._$);break;case 15:this.$={open:o[c-5],path:o[c-4],params:o[c-3],hash:o[c-2],blockParams:o[c-1],strip:l.stripFlags(o[c-5],o[c])};break;case 16:this.$={path:o[c-4],params:o[c-3],hash:o[c-2],blockParams:o[c-1],strip:l.stripFlags(o[c-5],o[c])};break;case 17:this.$={path:o[c-4],params:o[c-3],hash:o[c-2],blockParams:o[c-1],strip:l.stripFlags(o[c-5],o[c])};break;case 18:this.$={strip:l.stripFlags(o[c-1],o[c-1]),program:o[c]};break;case 19:var f=l.prepareBlock(o[c-2],o[c-1],o[c],o[c],!1,this._$),m=l.prepareProgram([f],o[c-1].loc);m.chained=!0,this.$={strip:o[c-2].strip,program:m,chain:!0};break;case 20:this.$=o[c];break;case 21:this.$={path:o[c-1],strip:l.stripFlags(o[c-2],o[c])};break;case 22:this.$=l.prepareMustache(o[c-3],o[c-2],o[c-1],o[c-4],l.stripFlags(o[c-4],o[c]),this._$);break;case 23:this.$=l.prepareMustache(o[c-3],o[c-2],o[c-1],o[c-4],l.stripFlags(o[c-4],o[c]),this._$);break;case 24:this.$={type:"PartialStatement",name:o[c-3],params:o[c-2],hash:o[c-1],indent:"",strip:l.stripFlags(o[c-4],o[c]),loc:l.locInfo(this._$)};break;case 25:this.$=l.preparePartialBlock(o[c-2],o[c-1],o[c],this._$);break;case 26:this.$={path:o[c-3],params:o[c-2],hash:o[c-1],strip:l.stripFlags(o[c-4],o[c])};break;case 27:this.$=o[c];break;case 28:this.$=o[c];break;case 29:this.$={type:"SubExpression",path:o[c-3],params:o[c-2],hash:o[c-1],loc:l.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:o[c],loc:l.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:l.id(o[c-2]),value:o[c],loc:l.locInfo(this._$)};break;case 32:this.$=l.id(o[c-1]);break;case 33:this.$=o[c];break;case 34:this.$=o[c];break;case 35:this.$={type:"StringLiteral",value:o[c],original:o[c],loc:l.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(o[c]),original:Number(o[c]),loc:l.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:o[c]==="true",original:o[c]==="true",loc:l.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:l.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:l.locInfo(this._$)};break;case 40:this.$=o[c];break;case 41:this.$=o[c];break;case 42:this.$=l.preparePath(!0,o[c],this._$);break;case 43:this.$=l.preparePath(!1,o[c],this._$);break;case 44:o[c-2].push({part:l.id(o[c]),original:o[c],separator:o[c-1]}),this.$=o[c-2];break;case 45:this.$=[{part:l.id(o[c]),original:o[c]}];break;case 46:this.$=[];break;case 47:o[c-1].push(o[c]);break;case 48:this.$=[];break;case 49:o[c-1].push(o[c]);break;case 50:this.$=[];break;case 51:o[c-1].push(o[c]);break;case 58:this.$=[];break;case 59:o[c-1].push(o[c]);break;case 64:this.$=[];break;case 65:o[c-1].push(o[c]);break;case 70:this.$=[];break;case 71:o[c-1].push(o[c]);break;case 78:this.$=[];break;case 79:o[c-1].push(o[c]);break;case 82:this.$=[];break;case 83:o[c-1].push(o[c]);break;case 86:this.$=[];break;case 87:o[c-1].push(o[c]);break;case 90:this.$=[];break;case 91:o[c-1].push(o[c]);break;case 94:this.$=[];break;case 95:o[c-1].push(o[c]);break;case 98:this.$=[o[c]];break;case 99:o[c-1].push(o[c]);break;case 100:this.$=[o[c]];break;case 101:o[c-1].push(o[c]);break}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(i,s){throw new Error(i)},parse:function(i){var s=this,a=[0],l=[null],u=[],o=this.table,h="",c=0,f=0,m=0,_=2,b=1;this.lexer.setInput(i),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var D=this.lexer.yylloc;u.push(D);var S=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function z(R){a.length=a.length-2*R,l.length=l.length-R,u.length=u.length-R}function we(){var R;return R=s.lexer.lex()||1,typeof R!="number"&&(R=s.symbols_[R]||R),R}for(var P,lt,K,M,ho,ut,ee={},Ce,T,on,Pe;;){if(K=a[a.length-1],this.defaultActions[K]?M=this.defaultActions[K]:((P===null||typeof P>"u")&&(P=we()),M=o[K]&&o[K][P]),typeof M>"u"||!M.length||!M[0]){var ct="";if(!m){Pe=[];for(Ce in o[K])this.terminals_[Ce]&&Ce>2&&Pe.push("'"+this.terminals_[Ce]+"'");this.lexer.showPosition?ct="Parse error on line "+(c+1)+`:
`+this.lexer.showPosition()+`
Expecting `+Pe.join(", ")+", got '"+(this.terminals_[P]||P)+"'":ct="Parse error on line "+(c+1)+": Unexpected "+(P==1?"end of input":"'"+(this.terminals_[P]||P)+"'"),this.parseError(ct,{text:this.lexer.match,token:this.terminals_[P]||P,line:this.lexer.yylineno,loc:D,expected:Pe})}}if(M[0]instanceof Array&&M.length>1)throw new Error("Parse Error: multiple actions possible at state: "+K+", token: "+P);switch(M[0]){case 1:a.push(P),l.push(this.lexer.yytext),u.push(this.lexer.yylloc),a.push(M[1]),P=null,lt?(P=lt,lt=null):(f=this.lexer.yyleng,h=this.lexer.yytext,c=this.lexer.yylineno,D=this.lexer.yylloc,m>0&&m--);break;case 2:if(T=this.productions_[M[1]][1],ee.$=l[l.length-T],ee._$={first_line:u[u.length-(T||1)].first_line,last_line:u[u.length-1].last_line,first_column:u[u.length-(T||1)].first_column,last_column:u[u.length-1].last_column},S&&(ee._$.range=[u[u.length-(T||1)].range[0],u[u.length-1].range[1]]),ut=this.performAction.call(ee,h,f,c,this.yy,M[1],l,u),typeof ut<"u")return ut;T&&(a=a.slice(0,-1*T*2),l=l.slice(0,-1*T),u=u.slice(0,-1*T)),a.push(this.productions_[M[1]][0]),l.push(ee.$),u.push(ee._$),on=o[a[a.length-2]][a[a.length-1]],a.push(on);break;case 3:return!0}}return!0}},e=(function(){var r={EOF:1,parseError:function(s,a){if(this.yy.parser)this.yy.parser.parseError(s,a);else throw new Error(s)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var a=s.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var a=s.length,l=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a-1),this.offset-=a;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var o=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===u.length?this.yylloc.first_column:0)+u[u.length-l.length].length-l[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[o[0],o[0]+this.yyleng-a]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),a=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+a+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,a,l,u,o,h;this._more||(this.yytext="",this.match="");for(var c=this._currentRules(),f=0;f<c.length&&(l=this._input.match(this.rules[c[f]]),!(l&&(!a||l[0].length>a[0].length)&&(a=l,u=f,!this.options.flex)));f++);return a?(h=a[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],s=this.performAction.call(this,this.yy,this,c[u],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return typeof s<"u"?s:this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(s){this.begin(s)}};return r.options={},r.performAction=function(s,a,l,u){function o(c,f){return a.yytext=a.yytext.substring(c,a.yyleng-f+c)}var h=u;switch(l){case 0:if(a.yytext.slice(-2)==="\\\\"?(o(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(o(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;break;case 3:return this.begin("raw"),15;break;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(o(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;break;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;break;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;break;case 16:return this.popState(),44;break;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(a.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;break;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;break;case 30:return this.popState(),33;break;case 31:return a.yytext=o(1,2).replace(/\\"/g,'"'),80;break;case 32:return a.yytext=o(1,2).replace(/\\'/g,"'"),80;break;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return a.yytext=a.yytext.replace(/\\([\\\]])/g,"$1"),72;break;case 43:return"INVALID";case 44:return 5}},r.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],r.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},r})();t.lexer=e;function n(){this.yy={}}return n.prototype=t,t.Parser=n,new n})();je.default=Zs;pr.exports=je.default});var Rt=v((Xe,gr)=>{"use strict";p();Xe.__esModule=!0;function $s(t){return t&&t.__esModule?t:{default:t}}var ea=A(),Dt=$s(ea);function Qe(){this.parents=[]}Qe.prototype={constructor:Qe,mutating:!1,acceptKey:function(e,n){var r=this.accept(e[n]);if(this.mutating){if(r&&!Qe.prototype[r.type])throw new Dt.default('Unexpected node type "'+r.type+'" found when accepting '+n+" on "+e.type);e[n]=r}},acceptRequired:function(e,n){if(this.acceptKey(e,n),!e[n])throw new Dt.default(e.type+" requires "+n)},acceptArray:function(e){for(var n=0,r=e.length;n<r;n++)this.acceptKey(e,n),e[n]||(e.splice(n,1),n--,r--)},accept:function(e){if(e){if(!this[e.type])throw new Dt.default("Unknown type: "+e.type,e);this.current&&this.parents.unshift(this.current),this.current=e;var n=this[e.type](e);if(this.current=this.parents.shift(),!this.mutating||n)return n;if(n!==!1)return e}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:Ye,Decorator:Ye,BlockStatement:dr,DecoratorBlock:dr,PartialStatement:mr,PartialBlockStatement:function(e){mr.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:Ye,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}};function Ye(t){this.acceptRequired(t,"path"),this.acceptArray(t.params),this.acceptKey(t,"hash")}function dr(t){Ye.call(this,t),this.acceptKey(t,"program"),this.acceptKey(t,"inverse")}function mr(t){this.acceptRequired(t,"name"),this.acceptArray(t.params),this.acceptKey(t,"hash")}Xe.default=Qe;gr.exports=Xe.default});var _r=v((Ze,vr)=>{"use strict";p();Ze.__esModule=!0;function ta(t){return t&&t.__esModule?t:{default:t}}var na=Rt(),ra=ta(na);function q(){var t=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=t}q.prototype=new ra.default;q.prototype.Program=function(t){var e=!this.options.ignoreStandalone,n=!this.isRootSeen;this.isRootSeen=!0;for(var r=t.body,i=0,s=r.length;i<s;i++){var a=r[i],l=this.accept(a);if(l){var u=Bt(r,i,n),o=qt(r,i,n),h=l.openStandalone&&u,c=l.closeStandalone&&o,f=l.inlineStandalone&&u&&o;l.close&&Q(r,i,!0),l.open&&U(r,i,!0),e&&f&&(Q(r,i),U(r,i)&&a.type==="PartialStatement"&&(a.indent=/([ \t]+$)/.exec(r[i-1].original)[1])),e&&h&&(Q((a.program||a.inverse).body),U(r,i)),e&&c&&(Q(r,i),U((a.inverse||a.program).body))}}return t};q.prototype.BlockStatement=q.prototype.DecoratorBlock=q.prototype.PartialBlockStatement=function(t){this.accept(t.program),this.accept(t.inverse);var e=t.program||t.inverse,n=t.program&&t.inverse,r=n,i=n;if(n&&n.chained)for(r=n.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var s={open:t.openStrip.open,close:t.closeStrip.close,openStandalone:qt(e.body),closeStandalone:Bt((r||e).body)};if(t.openStrip.close&&Q(e.body,null,!0),n){var a=t.inverseStrip;a.open&&U(e.body,null,!0),a.close&&Q(r.body,null,!0),t.closeStrip.open&&U(i.body,null,!0),!this.options.ignoreStandalone&&Bt(e.body)&&qt(r.body)&&(U(e.body),Q(r.body))}else t.closeStrip.open&&U(e.body,null,!0);return s};q.prototype.Decorator=q.prototype.MustacheStatement=function(t){return t.strip};q.prototype.PartialStatement=q.prototype.CommentStatement=function(t){var e=t.strip||{};return{inlineStandalone:!0,open:e.open,close:e.close}};function Bt(t,e,n){e===void 0&&(e=t.length);var r=t[e-1],i=t[e-2];if(!r)return n;if(r.type==="ContentStatement")return(i||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(r.original)}function qt(t,e,n){e===void 0&&(e=-1);var r=t[e+1],i=t[e+2];if(!r)return n;if(r.type==="ContentStatement")return(i||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(r.original)}function Q(t,e,n){var r=t[e==null?0:e+1];if(!(!r||r.type!=="ContentStatement"||!n&&r.rightStripped)){var i=r.value;r.value=r.value.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),r.rightStripped=r.value!==i}}function U(t,e,n){var r=t[e==null?t.length-1:e-1];if(!(!r||r.type!=="ContentStatement"||!n&&r.leftStripped)){var i=r.value;return r.value=r.value.replace(n?/\s+$/:/[ \t]+$/,""),r.leftStripped=r.value!==i,r.leftStripped}}Ze.default=q;vr.exports=Ze.default});var yr=v(O=>{"use strict";p();O.__esModule=!0;O.SourceLocation=aa;O.id=oa;O.stripFlags=la;O.stripComment=ua;O.preparePath=ca;O.prepareMustache=ha;O.prepareRawBlock=pa;O.prepareBlock=fa;O.prepareProgram=da;O.preparePartialBlock=ma;function ia(t){return t&&t.__esModule?t:{default:t}}var sa=A(),Tt=ia(sa);function Ht(t,e){if(e=e.path?e.path.original:e,t.path.original!==e){var n={loc:t.path.loc};throw new Tt.default(t.path.original+" doesn't match "+e,n)}}function aa(t,e){this.source=t,this.start={line:e.first_line,column:e.first_column},this.end={line:e.last_line,column:e.last_column}}function oa(t){return/^\[.*\]$/.test(t)?t.substring(1,t.length-1):t}function la(t,e){return{open:t.charAt(2)==="~",close:e.charAt(e.length-3)==="~"}}function ua(t){return t.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function ca(t,e,n){n=this.locInfo(n);for(var r=t?"@":"",i=[],s=0,a=0,l=e.length;a<l;a++){var u=e[a].part,o=e[a].original!==u;if(r+=(e[a].separator||"")+u,!o&&(u===".."||u==="."||u==="this")){if(i.length>0)throw new Tt.default("Invalid path: "+r,{loc:n});u===".."&&s++}else i.push(u)}return{type:"PathExpression",data:t,depth:s,parts:i,original:r,loc:n}}function ha(t,e,n,r,i,s){var a=r.charAt(3)||r.charAt(2),l=a!=="{"&&a!=="&",u=/\*/.test(r);return{type:u?"Decorator":"MustacheStatement",path:t,params:e,hash:n,escaped:l,strip:i,loc:this.locInfo(s)}}function pa(t,e,n,r){Ht(t,n),r=this.locInfo(r);var i={type:"Program",body:e,strip:{},loc:r};return{type:"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:r}}function fa(t,e,n,r,i,s){r&&r.path&&Ht(t,r);var a=/\*/.test(t.open);e.blockParams=t.blockParams;var l=void 0,u=void 0;if(n){if(a)throw new Tt.default("Unexpected inverse block on decorator",n);n.chain&&(n.program.body[0].closeStrip=r.strip),u=n.strip,l=n.program}return i&&(i=l,l=e,e=i),{type:a?"DecoratorBlock":"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:e,inverse:l,openStrip:t.strip,inverseStrip:u,closeStrip:r&&r.strip,loc:this.locInfo(s)}}function da(t,e){if(!e&&t.length){var n=t[0].loc,r=t[t.length-1].loc;n&&r&&(e={source:n.source,start:{line:n.start.line,column:n.start.column},end:{line:r.end.line,column:r.end.column}})}return{type:"Program",body:t,strip:{},loc:e}}function ma(t,e,n,r){return Ht(t,n),{type:"PartialBlockStatement",name:t.path,params:t.params,hash:t.hash,program:e,openStrip:t.strip,closeStrip:n&&n.strip,loc:this.locInfo(r)}}});var Sr=v(de=>{"use strict";p();de.__esModule=!0;de.parseWithoutProcessing=kr;de.parse=wa;function ga(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function br(t){return t&&t.__esModule?t:{default:t}}var va=fr(),Ft=br(va),_a=_r(),ya=br(_a),ba=yr(),ka=ga(ba),Sa=L();de.parser=Ft.default;var $e={};Sa.extend($e,ka);function kr(t,e){if(t.type==="Program")return t;Ft.default.yy=$e,$e.locInfo=function(r){return new $e.SourceLocation(e&&e.srcName,r)};var n=Ft.default.parse(t);return n}function wa(t,e){var n=kr(t,e),r=new ya.default(e);return r.accept(n)}});var Lr=v(_e=>{"use strict";p();_e.__esModule=!0;_e.Compiler=Vt;_e.precompile=xa;_e.compile=Ea;function Cr(t){return t&&t.__esModule?t:{default:t}}var Ca=A(),ge=Cr(Ca),ve=L(),Pa=Nt(),me=Cr(Pa),La=[].slice;function Vt(){}Vt.prototype={compiler:Vt,equals:function(e){var n=this.opcodes.length;if(e.opcodes.length!==n)return!1;for(var r=0;r<n;r++){var i=this.opcodes[r],s=e.opcodes[r];if(i.opcode!==s.opcode||!Pr(i.args,s.args))return!1}n=this.children.length;for(var r=0;r<n;r++)if(!this.children[r].equals(e.children[r]))return!1;return!0},guid:0,compile:function(e,n){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=n,this.stringParams=n.stringParams,this.trackIds=n.trackIds,n.blockParams=n.blockParams||[],n.knownHelpers=ve.extend(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},n.knownHelpers),this.accept(e)},compileProgram:function(e){var n=new this.compiler,r=n.compile(e,this.options),i=this.guid++;return this.usePartial=this.usePartial||r.usePartial,this.children[i]=r,this.useDepths=this.useDepths||r.useDepths,i},accept:function(e){if(!this[e.type])throw new ge.default("Unknown type: "+e.type,e);this.sourceNode.unshift(e);var n=this[e.type](e);return this.sourceNode.shift(),n},Program:function(e){this.options.blockParams.unshift(e.blockParams);for(var n=e.body,r=n.length,i=0;i<r;i++)this.accept(n[i]);return this.options.blockParams.shift(),this.isSimple=r===1,this.blockParams=e.blockParams?e.blockParams.length:0,this},BlockStatement:function(e){wr(e);var n=e.program,r=e.inverse;n=n&&this.compileProgram(n),r=r&&this.compileProgram(r);var i=this.classifySexpr(e);i==="helper"?this.helperSexpr(e,n,r):i==="simple"?(this.simpleSexpr(e),this.opcode("pushProgram",n),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("blockValue",e.path.original)):(this.ambiguousSexpr(e,n,r),this.opcode("pushProgram",n),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(e){var n=e.program&&this.compileProgram(e.program),r=this.setupFullMustacheParams(e,n,void 0),i=e.path;this.useDecorators=!0,this.opcode("registerDecorator",r.length,i.original)},PartialStatement:function(e){this.usePartial=!0;var n=e.program;n&&(n=this.compileProgram(e.program));var r=e.params;if(r.length>1)throw new ge.default("Unsupported number of partial arguments: "+r.length,e);r.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):r.push({type:"PathExpression",parts:[],depth:0}));var i=e.name.original,s=e.name.type==="SubExpression";s&&this.accept(e.name),this.setupFullMustacheParams(e,n,void 0,!0);var a=e.indent||"";this.options.preventIndent&&a&&(this.opcode("appendContent",a),a=""),this.opcode("invokePartial",s,i,a),this.opcode("append")},PartialBlockStatement:function(e){this.PartialStatement(e)},MustacheStatement:function(e){this.SubExpression(e),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(e){this.DecoratorBlock(e)},ContentStatement:function(e){e.value&&this.opcode("appendContent",e.value)},CommentStatement:function(){},SubExpression:function(e){wr(e);var n=this.classifySexpr(e);n==="simple"?this.simpleSexpr(e):n==="helper"?this.helperSexpr(e):this.ambiguousSexpr(e)},ambiguousSexpr:function(e,n,r){var i=e.path,s=i.parts[0],a=n!=null||r!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",n),this.opcode("pushProgram",r),i.strict=!0,this.accept(i),this.opcode("invokeAmbiguous",s,a)},simpleSexpr:function(e){var n=e.path;n.strict=!0,this.accept(n),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,n,r){var i=this.setupFullMustacheParams(e,n,r),s=e.path,a=s.parts[0];if(this.options.knownHelpers[a])this.opcode("invokeKnownHelper",i.length,a);else{if(this.options.knownHelpersOnly)throw new ge.default("You specified knownHelpersOnly, but used the unknown helper "+a,e);s.strict=!0,s.falsy=!0,this.accept(s),this.opcode("invokeHelper",i.length,s.original,me.default.helpers.simpleId(s))}},PathExpression:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var n=e.parts[0],r=me.default.helpers.scopedId(e),i=!e.depth&&!r&&this.blockParamIndex(n);i?this.opcode("lookupBlockParam",i,e.parts):n?e.data?(this.options.data=!0,this.opcode("lookupData",e.depth,e.parts,e.strict)):this.opcode("lookupOnContext",e.parts,e.falsy,e.strict,r):this.opcode("pushContext")},StringLiteral:function(e){this.opcode("pushString",e.value)},NumberLiteral:function(e){this.opcode("pushLiteral",e.value)},BooleanLiteral:function(e){this.opcode("pushLiteral",e.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(e){var n=e.pairs,r=0,i=n.length;for(this.opcode("pushHash");r<i;r++)this.pushParam(n[r].value);for(;r--;)this.opcode("assignToHash",n[r].key);this.opcode("popHash")},opcode:function(e){this.opcodes.push({opcode:e,args:La.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(e){e&&(this.useDepths=!0)},classifySexpr:function(e){var n=me.default.helpers.simpleId(e.path),r=n&&!!this.blockParamIndex(e.path.parts[0]),i=!r&&me.default.helpers.helperExpression(e),s=!r&&(i||n);if(s&&!i){var a=e.path.parts[0],l=this.options;l.knownHelpers[a]?i=!0:l.knownHelpersOnly&&(s=!1)}return i?"helper":s?"ambiguous":"simple"},pushParams:function(e){for(var n=0,r=e.length;n<r;n++)this.pushParam(e[n])},pushParam:function(e){var n=e.value!=null?e.value:e.original||"";if(this.stringParams)n.replace&&(n=n.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",n,e.type),e.type==="SubExpression"&&this.accept(e);else{if(this.trackIds){var r=void 0;if(e.parts&&!me.default.helpers.scopedId(e)&&!e.depth&&(r=this.blockParamIndex(e.parts[0])),r){var i=e.parts.slice(1).join(".");this.opcode("pushId","BlockParam",r,i)}else n=e.original||n,n.replace&&(n=n.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",e.type,n)}this.accept(e)}},setupFullMustacheParams:function(e,n,r,i){var s=e.params;return this.pushParams(s),this.opcode("pushProgram",n),this.opcode("pushProgram",r),e.hash?this.accept(e.hash):this.opcode("emptyHash",i),s},blockParamIndex:function(e){for(var n=0,r=this.options.blockParams.length;n<r;n++){var i=this.options.blockParams[n],s=i&&ve.indexOf(i,e);if(i&&s>=0)return[n,s]}}};function xa(t,e,n){if(t==null||typeof t!="string"&&t.type!=="Program")throw new ge.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var r=n.parse(t,e),i=new n.Compiler().compile(r,e);return new n.JavaScriptCompiler().compile(i,e)}function Ea(t,e,n){if(e===void 0&&(e={}),t==null||typeof t!="string"&&t.type!=="Program")throw new ge.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=ve.extend({},e),"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var r=void 0;function i(){var a=n.parse(t,e),l=new n.Compiler().compile(a,e),u=new n.JavaScriptCompiler().compile(l,e,void 0,!0);return n.template(u)}function s(a,l){return r||(r=i()),r.call(this,a,l)}return s._setup=function(a){return r||(r=i()),r._setup(a)},s._child=function(a,l,u,o){return r||(r=i()),r._child(a,l,u,o)},s}function Pr(t,e){if(t===e)return!0;if(ve.isArray(t)&&ve.isArray(e)&&t.length===e.length){for(var n=0;n<t.length;n++)if(!Pr(t[n],e[n]))return!1;return!0}}function wr(t){if(!t.path.parts){var e=t.path;t.path={type:"PathExpression",data:!1,depth:0,parts:[e.original+""],original:e.original+"",loc:e.loc}}}});var Er=v(Gt=>{p();var xr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");Gt.encode=function(t){if(0<=t&&t<xr.length)return xr[t];throw new TypeError("Must be between 0 and 63: "+t)};Gt.decode=function(t){var e=65,n=90,r=97,i=122,s=48,a=57,l=43,u=47,o=26,h=52;return e<=t&&t<=n?t-e:r<=t&&t<=i?t-r+o:s<=t&&t<=a?t-s+h:t==l?62:t==u?63:-1}});var zt=v(Ut=>{p();var Mr=Er(),Wt=5,Ar=1<<Wt,Or=Ar-1,Ir=Ar;function Ma(t){return t<0?(-t<<1)+1:(t<<1)+0}function Aa(t){var e=(t&1)===1,n=t>>1;return e?-n:n}Ut.encode=function(e){var n="",r,i=Ma(e);do r=i&Or,i>>>=Wt,i>0&&(r|=Ir),n+=Mr.encode(r);while(i>0);return n};Ut.decode=function(e,n,r){var i=e.length,s=0,a=0,l,u;do{if(n>=i)throw new Error("Expected more digits in base 64 VLQ value.");if(u=Mr.decode(e.charCodeAt(n++)),u===-1)throw new Error("Invalid base64 digit: "+e.charAt(n-1));l=!!(u&Ir),u&=Or,s=s+(u<<a),a+=Wt}while(l);r.value=Aa(s),r.rest=n}});var ie=v(C=>{p();function Oa(t,e,n){if(e in t)return t[e];if(arguments.length===3)return n;throw new Error('"'+e+'" is a required argument.')}C.getArg=Oa;var Nr=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,Ia=/^data:.+\,.+$/;function ye(t){var e=t.match(Nr);return e?{scheme:e[1],auth:e[2],host:e[3],port:e[4],path:e[5]}:null}C.urlParse=ye;function ne(t){var e="";return t.scheme&&(e+=t.scheme+":"),e+="//",t.auth&&(e+=t.auth+"@"),t.host&&(e+=t.host),t.port&&(e+=":"+t.port),t.path&&(e+=t.path),e}C.urlGenerate=ne;function Kt(t){var e=t,n=ye(t);if(n){if(!n.path)return t;e=n.path}for(var r=C.isAbsolute(e),i=e.split(/\/+/),s,a=0,l=i.length-1;l>=0;l--)s=i[l],s==="."?i.splice(l,1):s===".."?a++:a>0&&(s===""?(i.splice(l+1,a),a=0):(i.splice(l,2),a--));return e=i.join("/"),e===""&&(e=r?"/":"."),n?(n.path=e,ne(n)):e}C.normalize=Kt;function Dr(t,e){t===""&&(t="."),e===""&&(e=".");var n=ye(e),r=ye(t);if(r&&(t=r.path||"/"),n&&!n.scheme)return r&&(n.scheme=r.scheme),ne(n);if(n||e.match(Ia))return e;if(r&&!r.host&&!r.path)return r.host=e,ne(r);var i=e.charAt(0)==="/"?e:Kt(t.replace(/\/+$/,"")+"/"+e);return r?(r.path=i,ne(r)):i}C.join=Dr;C.isAbsolute=function(t){return t.charAt(0)==="/"||Nr.test(t)};function Na(t,e){t===""&&(t="."),t=t.replace(/\/$/,"");for(var n=0;e.indexOf(t+"/")!==0;){var r=t.lastIndexOf("/");if(r<0||(t=t.slice(0,r),t.match(/^([^\/]+:\/)?\/*$/)))return e;++n}return Array(n+1).join("../")+e.substr(t.length+1)}C.relative=Na;var Rr=(function(){var t=Object.create(null);return!("__proto__"in t)})();function Br(t){return t}function Da(t){return qr(t)?"$"+t:t}C.toSetString=Rr?Br:Da;function Ra(t){return qr(t)?t.slice(1):t}C.fromSetString=Rr?Br:Ra;function qr(t){if(!t)return!1;var e=t.length;if(e<9||t.charCodeAt(e-1)!==95||t.charCodeAt(e-2)!==95||t.charCodeAt(e-3)!==111||t.charCodeAt(e-4)!==116||t.charCodeAt(e-5)!==111||t.charCodeAt(e-6)!==114||t.charCodeAt(e-7)!==112||t.charCodeAt(e-8)!==95||t.charCodeAt(e-9)!==95)return!1;for(var n=e-10;n>=0;n--)if(t.charCodeAt(n)!==36)return!1;return!0}function Ba(t,e,n){var r=re(t.source,e.source);return r!==0||(r=t.originalLine-e.originalLine,r!==0)||(r=t.originalColumn-e.originalColumn,r!==0||n)||(r=t.generatedColumn-e.generatedColumn,r!==0)||(r=t.generatedLine-e.generatedLine,r!==0)?r:re(t.name,e.name)}C.compareByOriginalPositions=Ba;function qa(t,e,n){var r=t.generatedLine-e.generatedLine;return r!==0||(r=t.generatedColumn-e.generatedColumn,r!==0||n)||(r=re(t.source,e.source),r!==0)||(r=t.originalLine-e.originalLine,r!==0)||(r=t.originalColumn-e.originalColumn,r!==0)?r:re(t.name,e.name)}C.compareByGeneratedPositionsDeflated=qa;function re(t,e){return t===e?0:t===null?1:e===null?-1:t>e?1:-1}function Ta(t,e){var n=t.generatedLine-e.generatedLine;return n!==0||(n=t.generatedColumn-e.generatedColumn,n!==0)||(n=re(t.source,e.source),n!==0)||(n=t.originalLine-e.originalLine,n!==0)||(n=t.originalColumn-e.originalColumn,n!==0)?n:re(t.name,e.name)}C.compareByGeneratedPositionsInflated=Ta;function Ha(t){return JSON.parse(t.replace(/^\)]}'[^\n]*\n/,""))}C.parseSourceMapInput=Ha;function Fa(t,e,n){if(e=e||"",t&&(t[t.length-1]!=="/"&&e[0]!=="/"&&(t+="/"),e=t+e),n){var r=ye(n);if(!r)throw new Error("sourceMapURL could not be parsed");if(r.path){var i=r.path.lastIndexOf("/");i>=0&&(r.path=r.path.substring(0,i+1))}e=Dr(ne(r),e)}return Kt(e)}C.computeSourceURL=Fa});var Qt=v(Tr=>{p();var Jt=ie(),jt=Object.prototype.hasOwnProperty,Y=typeof Map<"u";function G(){this._array=[],this._set=Y?new Map:Object.create(null)}G.fromArray=function(e,n){for(var r=new G,i=0,s=e.length;i<s;i++)r.add(e[i],n);return r};G.prototype.size=function(){return Y?this._set.size:Object.getOwnPropertyNames(this._set).length};G.prototype.add=function(e,n){var r=Y?e:Jt.toSetString(e),i=Y?this.has(e):jt.call(this._set,r),s=this._array.length;(!i||n)&&this._array.push(e),i||(Y?this._set.set(e,s):this._set[r]=s)};G.prototype.has=function(e){if(Y)return this._set.has(e);var n=Jt.toSetString(e);return jt.call(this._set,n)};G.prototype.indexOf=function(e){if(Y){var n=this._set.get(e);if(n>=0)return n}else{var r=Jt.toSetString(e);if(jt.call(this._set,r))return this._set[r]}throw new Error('"'+e+'" is not in the set.')};G.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)};G.prototype.toArray=function(){return this._array.slice()};Tr.ArraySet=G});var Vr=v(Fr=>{p();var Hr=ie();function Va(t,e){var n=t.generatedLine,r=e.generatedLine,i=t.generatedColumn,s=e.generatedColumn;return r>n||r==n&&s>=i||Hr.compareByGeneratedPositionsInflated(t,e)<=0}function et(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}et.prototype.unsortedForEach=function(e,n){this._array.forEach(e,n)};et.prototype.add=function(e){Va(this._last,e)?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))};et.prototype.toArray=function(){return this._sorted||(this._array.sort(Hr.compareByGeneratedPositionsInflated),this._sorted=!0),this._array};Fr.MappingList=et});var Yt=v(Gr=>{p();var be=zt(),k=ie(),tt=Qt().ArraySet,Ga=Vr().MappingList;function I(t){t||(t={}),this._file=k.getArg(t,"file",null),this._sourceRoot=k.getArg(t,"sourceRoot",null),this._skipValidation=k.getArg(t,"skipValidation",!1),this._sources=new tt,this._names=new tt,this._mappings=new Ga,this._sourcesContents=null}I.prototype._version=3;I.fromSourceMap=function(e){var n=e.sourceRoot,r=new I({file:e.file,sourceRoot:n});return e.eachMapping(function(i){var s={generated:{line:i.generatedLine,column:i.generatedColumn}};i.source!=null&&(s.source=i.source,n!=null&&(s.source=k.relative(n,s.source)),s.original={line:i.originalLine,column:i.originalColumn},i.name!=null&&(s.name=i.name)),r.addMapping(s)}),e.sources.forEach(function(i){var s=i;n!==null&&(s=k.relative(n,i)),r._sources.has(s)||r._sources.add(s);var a=e.sourceContentFor(i);a!=null&&r.setSourceContent(i,a)}),r};I.prototype.addMapping=function(e){var n=k.getArg(e,"generated"),r=k.getArg(e,"original",null),i=k.getArg(e,"source",null),s=k.getArg(e,"name",null);this._skipValidation||this._validateMapping(n,r,i,s),i!=null&&(i=String(i),this._sources.has(i)||this._sources.add(i)),s!=null&&(s=String(s),this._names.has(s)||this._names.add(s)),this._mappings.add({generatedLine:n.line,generatedColumn:n.column,originalLine:r!=null&&r.line,originalColumn:r!=null&&r.column,source:i,name:s})};I.prototype.setSourceContent=function(e,n){var r=e;this._sourceRoot!=null&&(r=k.relative(this._sourceRoot,r)),n!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[k.toSetString(r)]=n):this._sourcesContents&&(delete this._sourcesContents[k.toSetString(r)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))};I.prototype.applySourceMap=function(e,n,r){var i=n;if(n==null){if(e.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);i=e.file}var s=this._sourceRoot;s!=null&&(i=k.relative(s,i));var a=new tt,l=new tt;this._mappings.unsortedForEach(function(u){if(u.source===i&&u.originalLine!=null){var o=e.originalPositionFor({line:u.originalLine,column:u.originalColumn});o.source!=null&&(u.source=o.source,r!=null&&(u.source=k.join(r,u.source)),s!=null&&(u.source=k.relative(s,u.source)),u.originalLine=o.line,u.originalColumn=o.column,o.name!=null&&(u.name=o.name))}var h=u.source;h!=null&&!a.has(h)&&a.add(h);var c=u.name;c!=null&&!l.has(c)&&l.add(c)},this),this._sources=a,this._names=l,e.sources.forEach(function(u){var o=e.sourceContentFor(u);o!=null&&(r!=null&&(u=k.join(r,u)),s!=null&&(u=k.relative(s,u)),this.setSourceContent(u,o))},this)};I.prototype._validateMapping=function(e,n,r,i){if(n&&typeof n.line!="number"&&typeof n.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0&&!n&&!r&&!i)){if(e&&"line"in e&&"column"in e&&n&&"line"in n&&"column"in n&&e.line>0&&e.column>=0&&n.line>0&&n.column>=0&&r)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:r,original:n,name:i}))}};I.prototype._serializeMappings=function(){for(var e=0,n=1,r=0,i=0,s=0,a=0,l="",u,o,h,c,f=this._mappings.toArray(),m=0,_=f.length;m<_;m++){if(o=f[m],u="",o.generatedLine!==n)for(e=0;o.generatedLine!==n;)u+=";",n++;else if(m>0){if(!k.compareByGeneratedPositionsInflated(o,f[m-1]))continue;u+=","}u+=be.encode(o.generatedColumn-e),e=o.generatedColumn,o.source!=null&&(c=this._sources.indexOf(o.source),u+=be.encode(c-a),a=c,u+=be.encode(o.originalLine-1-i),i=o.originalLine-1,u+=be.encode(o.originalColumn-r),r=o.originalColumn,o.name!=null&&(h=this._names.indexOf(o.name),u+=be.encode(h-s),s=h)),l+=u}return l};I.prototype._generateSourcesContent=function(e,n){return e.map(function(r){if(!this._sourcesContents)return null;n!=null&&(r=k.relative(n,r));var i=k.toSetString(r);return Object.prototype.hasOwnProperty.call(this._sourcesContents,i)?this._sourcesContents[i]:null},this)};I.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(e.file=this._file),this._sourceRoot!=null&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e};I.prototype.toString=function(){return JSON.stringify(this.toJSON())};Gr.SourceMapGenerator=I});var Wr=v(X=>{p();X.GREATEST_LOWER_BOUND=1;X.LEAST_UPPER_BOUND=2;function Xt(t,e,n,r,i,s){var a=Math.floor((e-t)/2)+t,l=i(n,r[a],!0);return l===0?a:l>0?e-a>1?Xt(a,e,n,r,i,s):s==X.LEAST_UPPER_BOUND?e<r.length?e:-1:a:a-t>1?Xt(t,a,n,r,i,s):s==X.LEAST_UPPER_BOUND?a:t<0?-1:t}X.search=function(e,n,r,i){if(n.length===0)return-1;var s=Xt(-1,n.length,e,n,r,i||X.GREATEST_LOWER_BOUND);if(s<0)return-1;for(;s-1>=0&&r(n[s],n[s-1],!0)===0;)--s;return s}});var zr=v(Ur=>{p();function Zt(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function Wa(t,e){return Math.round(t+Math.random()*(e-t))}function $t(t,e,n,r){if(n<r){var i=Wa(n,r),s=n-1;Zt(t,i,r);for(var a=t[r],l=n;l<r;l++)e(t[l],a)<=0&&(s+=1,Zt(t,s,l));Zt(t,s+1,l);var u=s+1;$t(t,e,n,u-1),$t(t,e,u+1,r)}}Ur.quickSort=function(t,e){$t(t,e,0,t.length-1)}});var Jr=v(nt=>{p();var d=ie(),en=Wr(),se=Qt().ArraySet,Ua=zt(),ke=zr().quickSort;function y(t,e){var n=t;return typeof t=="string"&&(n=d.parseSourceMapInput(t)),n.sections!=null?new N(n,e):new w(n,e)}y.fromSourceMap=function(t,e){return w.fromSourceMap(t,e)};y.prototype._version=3;y.prototype.__generatedMappings=null;Object.defineProperty(y.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}});y.prototype.__originalMappings=null;Object.defineProperty(y.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}});y.prototype._charIsMappingSeparator=function(e,n){var r=e.charAt(n);return r===";"||r===","};y.prototype._parseMappings=function(e,n){throw new Error("Subclasses must implement _parseMappings")};y.GENERATED_ORDER=1;y.ORIGINAL_ORDER=2;y.GREATEST_LOWER_BOUND=1;y.LEAST_UPPER_BOUND=2;y.prototype.eachMapping=function(e,n,r){var i=n||null,s=r||y.GENERATED_ORDER,a;switch(s){case y.GENERATED_ORDER:a=this._generatedMappings;break;case y.ORIGINAL_ORDER:a=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var l=this.sourceRoot;a.map(function(u){var o=u.source===null?null:this._sources.at(u.source);return o=d.computeSourceURL(l,o,this._sourceMapURL),{source:o,generatedLine:u.generatedLine,generatedColumn:u.generatedColumn,originalLine:u.originalLine,originalColumn:u.originalColumn,name:u.name===null?null:this._names.at(u.name)}},this).forEach(e,i)};y.prototype.allGeneratedPositionsFor=function(e){var n=d.getArg(e,"line"),r={source:d.getArg(e,"source"),originalLine:n,originalColumn:d.getArg(e,"column",0)};if(r.source=this._findSourceIndex(r.source),r.source<0)return[];var i=[],s=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",d.compareByOriginalPositions,en.LEAST_UPPER_BOUND);if(s>=0){var a=this._originalMappings[s];if(e.column===void 0)for(var l=a.originalLine;a&&a.originalLine===l;)i.push({line:d.getArg(a,"generatedLine",null),column:d.getArg(a,"generatedColumn",null),lastColumn:d.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s];else for(var u=a.originalColumn;a&&a.originalLine===n&&a.originalColumn==u;)i.push({line:d.getArg(a,"generatedLine",null),column:d.getArg(a,"generatedColumn",null),lastColumn:d.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s]}return i};nt.SourceMapConsumer=y;function w(t,e){var n=t;typeof t=="string"&&(n=d.parseSourceMapInput(t));var r=d.getArg(n,"version"),i=d.getArg(n,"sources"),s=d.getArg(n,"names",[]),a=d.getArg(n,"sourceRoot",null),l=d.getArg(n,"sourcesContent",null),u=d.getArg(n,"mappings"),o=d.getArg(n,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);a&&(a=d.normalize(a)),i=i.map(String).map(d.normalize).map(function(h){return a&&d.isAbsolute(a)&&d.isAbsolute(h)?d.relative(a,h):h}),this._names=se.fromArray(s.map(String),!0),this._sources=se.fromArray(i,!0),this._absoluteSources=this._sources.toArray().map(function(h){return d.computeSourceURL(a,h,e)}),this.sourceRoot=a,this.sourcesContent=l,this._mappings=u,this._sourceMapURL=e,this.file=o}w.prototype=Object.create(y.prototype);w.prototype.consumer=y;w.prototype._findSourceIndex=function(t){var e=t;if(this.sourceRoot!=null&&(e=d.relative(this.sourceRoot,e)),this._sources.has(e))return this._sources.indexOf(e);var n;for(n=0;n<this._absoluteSources.length;++n)if(this._absoluteSources[n]==t)return n;return-1};w.fromSourceMap=function(e,n){var r=Object.create(w.prototype),i=r._names=se.fromArray(e._names.toArray(),!0),s=r._sources=se.fromArray(e._sources.toArray(),!0);r.sourceRoot=e._sourceRoot,r.sourcesContent=e._generateSourcesContent(r._sources.toArray(),r.sourceRoot),r.file=e._file,r._sourceMapURL=n,r._absoluteSources=r._sources.toArray().map(function(m){return d.computeSourceURL(r.sourceRoot,m,n)});for(var a=e._mappings.toArray().slice(),l=r.__generatedMappings=[],u=r.__originalMappings=[],o=0,h=a.length;o<h;o++){var c=a[o],f=new Kr;f.generatedLine=c.generatedLine,f.generatedColumn=c.generatedColumn,c.source&&(f.source=s.indexOf(c.source),f.originalLine=c.originalLine,f.originalColumn=c.originalColumn,c.name&&(f.name=i.indexOf(c.name)),u.push(f)),l.push(f)}return ke(r.__originalMappings,d.compareByOriginalPositions),r};w.prototype._version=3;Object.defineProperty(w.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function Kr(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}w.prototype._parseMappings=function(e,n){for(var r=1,i=0,s=0,a=0,l=0,u=0,o=e.length,h=0,c={},f={},m=[],_=[],b,D,S,z,we;h<o;)if(e.charAt(h)===";")r++,h++,i=0;else if(e.charAt(h)===",")h++;else{for(b=new Kr,b.generatedLine=r,z=h;z<o&&!this._charIsMappingSeparator(e,z);z++);if(D=e.slice(h,z),S=c[D],S)h+=D.length;else{for(S=[];h<z;)Ua.decode(e,h,f),we=f.value,h=f.rest,S.push(we);if(S.length===2)throw new Error("Found a source, but no line and column");if(S.length===3)throw new Error("Found a source and line, but no column");c[D]=S}b.generatedColumn=i+S[0],i=b.generatedColumn,S.length>1&&(b.source=l+S[1],l+=S[1],b.originalLine=s+S[2],s=b.originalLine,b.originalLine+=1,b.originalColumn=a+S[3],a=b.originalColumn,S.length>4&&(b.name=u+S[4],u+=S[4])),_.push(b),typeof b.originalLine=="number"&&m.push(b)}ke(_,d.compareByGeneratedPositionsDeflated),this.__generatedMappings=_,ke(m,d.compareByOriginalPositions),this.__originalMappings=m};w.prototype._findMapping=function(e,n,r,i,s,a){if(e[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[r]);if(e[i]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[i]);return en.search(e,n,s,a)};w.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var n=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var r=this._generatedMappings[e+1];if(n.generatedLine===r.generatedLine){n.lastGeneratedColumn=r.generatedColumn-1;continue}}n.lastGeneratedColumn=1/0}};w.prototype.originalPositionFor=function(e){var n={generatedLine:d.getArg(e,"line"),generatedColumn:d.getArg(e,"column")},r=this._findMapping(n,this._generatedMappings,"generatedLine","generatedColumn",d.compareByGeneratedPositionsDeflated,d.getArg(e,"bias",y.GREATEST_LOWER_BOUND));if(r>=0){var i=this._generatedMappings[r];if(i.generatedLine===n.generatedLine){var s=d.getArg(i,"source",null);s!==null&&(s=this._sources.at(s),s=d.computeSourceURL(this.sourceRoot,s,this._sourceMapURL));var a=d.getArg(i,"name",null);return a!==null&&(a=this._names.at(a)),{source:s,line:d.getArg(i,"originalLine",null),column:d.getArg(i,"originalColumn",null),name:a}}}return{source:null,line:null,column:null,name:null}};w.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(e){return e==null}):!1};w.prototype.sourceContentFor=function(e,n){if(!this.sourcesContent)return null;var r=this._findSourceIndex(e);if(r>=0)return this.sourcesContent[r];var i=e;this.sourceRoot!=null&&(i=d.relative(this.sourceRoot,i));var s;if(this.sourceRoot!=null&&(s=d.urlParse(this.sourceRoot))){var a=i.replace(/^file:\/\//,"");if(s.scheme=="file"&&this._sources.has(a))return this.sourcesContent[this._sources.indexOf(a)];if((!s.path||s.path=="/")&&this._sources.has("/"+i))return this.sourcesContent[this._sources.indexOf("/"+i)]}if(n)return null;throw new Error('"'+i+'" is not in the SourceMap.')};w.prototype.generatedPositionFor=function(e){var n=d.getArg(e,"source");if(n=this._findSourceIndex(n),n<0)return{line:null,column:null,lastColumn:null};var r={source:n,originalLine:d.getArg(e,"line"),originalColumn:d.getArg(e,"column")},i=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",d.compareByOriginalPositions,d.getArg(e,"bias",y.GREATEST_LOWER_BOUND));if(i>=0){var s=this._originalMappings[i];if(s.source===r.source)return{line:d.getArg(s,"generatedLine",null),column:d.getArg(s,"generatedColumn",null),lastColumn:d.getArg(s,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}};nt.BasicSourceMapConsumer=w;function N(t,e){var n=t;typeof t=="string"&&(n=d.parseSourceMapInput(t));var r=d.getArg(n,"version"),i=d.getArg(n,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new se,this._names=new se;var s={line:-1,column:0};this._sections=i.map(function(a){if(a.url)throw new Error("Support for url field in sections not implemented.");var l=d.getArg(a,"offset"),u=d.getArg(l,"line"),o=d.getArg(l,"column");if(u<s.line||u===s.line&&o<s.column)throw new Error("Section offsets must be ordered and non-overlapping.");return s=l,{generatedOffset:{generatedLine:u+1,generatedColumn:o+1},consumer:new y(d.getArg(a,"map"),e)}})}N.prototype=Object.create(y.prototype);N.prototype.constructor=y;N.prototype._version=3;Object.defineProperty(N.prototype,"sources",{get:function(){for(var t=[],e=0;e<this._sections.length;e++)for(var n=0;n<this._sections[e].consumer.sources.length;n++)t.push(this._sections[e].consumer.sources[n]);return t}});N.prototype.originalPositionFor=function(e){var n={generatedLine:d.getArg(e,"line"),generatedColumn:d.getArg(e,"column")},r=en.search(n,this._sections,function(s,a){var l=s.generatedLine-a.generatedOffset.generatedLine;return l||s.generatedColumn-a.generatedOffset.generatedColumn}),i=this._sections[r];return i?i.consumer.originalPositionFor({line:n.generatedLine-(i.generatedOffset.generatedLine-1),column:n.generatedColumn-(i.generatedOffset.generatedLine===n.generatedLine?i.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}};N.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(e){return e.consumer.hasContentsOfAllSources()})};N.prototype.sourceContentFor=function(e,n){for(var r=0;r<this._sections.length;r++){var i=this._sections[r],s=i.consumer.sourceContentFor(e,!0);if(s)return s}if(n)return null;throw new Error('"'+e+'" is not in the SourceMap.')};N.prototype.generatedPositionFor=function(e){for(var n=0;n<this._sections.length;n++){var r=this._sections[n];if(r.consumer._findSourceIndex(d.getArg(e,"source"))!==-1){var i=r.consumer.generatedPositionFor(e);if(i){var s={line:i.line+(r.generatedOffset.generatedLine-1),column:i.column+(r.generatedOffset.generatedLine===i.line?r.generatedOffset.generatedColumn-1:0)};return s}}}return{line:null,column:null}};N.prototype._parseMappings=function(e,n){this.__generatedMappings=[],this.__originalMappings=[];for(var r=0;r<this._sections.length;r++)for(var i=this._sections[r],s=i.consumer._generatedMappings,a=0;a<s.length;a++){var l=s[a],u=i.consumer._sources.at(l.source);u=d.computeSourceURL(i.consumer.sourceRoot,u,this._sourceMapURL),this._sources.add(u),u=this._sources.indexOf(u);var o=null;l.name&&(o=i.consumer._names.at(l.name),this._names.add(o),o=this._names.indexOf(o));var h={source:u,generatedLine:l.generatedLine+(i.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(i.generatedOffset.generatedLine===l.generatedLine?i.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:o};this.__generatedMappings.push(h),typeof h.originalLine=="number"&&this.__originalMappings.push(h)}ke(this.__generatedMappings,d.compareByGeneratedPositionsDeflated),ke(this.__originalMappings,d.compareByOriginalPositions)};nt.IndexedSourceMapConsumer=N});var Qr=v(jr=>{p();var za=Yt().SourceMapGenerator,rt=ie(),Ka=/(\r?\n)/,Ja=10,ae="$$$isSourceNode$$$";function E(t,e,n,r,i){this.children=[],this.sourceContents={},this.line=t??null,this.column=e??null,this.source=n??null,this.name=i??null,this[ae]=!0,r!=null&&this.add(r)}E.fromStringWithSourceMap=function(e,n,r){var i=new E,s=e.split(Ka),a=0,l=function(){var f=_(),m=_()||"";return f+m;function _(){return a<s.length?s[a++]:void 0}},u=1,o=0,h=null;return n.eachMapping(function(f){if(h!==null)if(u<f.generatedLine)c(h,l()),u++,o=0;else{var m=s[a]||"",_=m.substr(0,f.generatedColumn-o);s[a]=m.substr(f.generatedColumn-o),o=f.generatedColumn,c(h,_),h=f;return}for(;u<f.generatedLine;)i.add(l()),u++;if(o<f.generatedColumn){var m=s[a]||"";i.add(m.substr(0,f.generatedColumn)),s[a]=m.substr(f.generatedColumn),o=f.generatedColumn}h=f},this),a<s.length&&(h&&c(h,l()),i.add(s.splice(a).join(""))),n.sources.forEach(function(f){var m=n.sourceContentFor(f);m!=null&&(r!=null&&(f=rt.join(r,f)),i.setSourceContent(f,m))}),i;function c(f,m){if(f===null||f.source===void 0)i.add(m);else{var _=r?rt.join(r,f.source):f.source;i.add(new E(f.originalLine,f.originalColumn,_,m,f.name))}}};E.prototype.add=function(e){if(Array.isArray(e))e.forEach(function(n){this.add(n)},this);else if(e[ae]||typeof e=="string")e&&this.children.push(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);return this};E.prototype.prepend=function(e){if(Array.isArray(e))for(var n=e.length-1;n>=0;n--)this.prepend(e[n]);else if(e[ae]||typeof e=="string")this.children.unshift(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);return this};E.prototype.walk=function(e){for(var n,r=0,i=this.children.length;r<i;r++)n=this.children[r],n[ae]?n.walk(e):n!==""&&e(n,{source:this.source,line:this.line,column:this.column,name:this.name})};E.prototype.join=function(e){var n,r,i=this.children.length;if(i>0){for(n=[],r=0;r<i-1;r++)n.push(this.children[r]),n.push(e);n.push(this.children[r]),this.children=n}return this};E.prototype.replaceRight=function(e,n){var r=this.children[this.children.length-1];return r[ae]?r.replaceRight(e,n):typeof r=="string"?this.children[this.children.length-1]=r.replace(e,n):this.children.push("".replace(e,n)),this};E.prototype.setSourceContent=function(e,n){this.sourceContents[rt.toSetString(e)]=n};E.prototype.walkSourceContents=function(e){for(var n=0,r=this.children.length;n<r;n++)this.children[n][ae]&&this.children[n].walkSourceContents(e);for(var i=Object.keys(this.sourceContents),n=0,r=i.length;n<r;n++)e(rt.fromSetString(i[n]),this.sourceContents[i[n]])};E.prototype.toString=function(){var e="";return this.walk(function(n){e+=n}),e};E.prototype.toStringWithSourceMap=function(e){var n={code:"",line:1,column:0},r=new za(e),i=!1,s=null,a=null,l=null,u=null;return this.walk(function(o,h){n.code+=o,h.source!==null&&h.line!==null&&h.column!==null?((s!==h.source||a!==h.line||l!==h.column||u!==h.name)&&r.addMapping({source:h.source,original:{line:h.line,column:h.column},generated:{line:n.line,column:n.column},name:h.name}),s=h.source,a=h.line,l=h.column,u=h.name,i=!0):i&&(r.addMapping({generated:{line:n.line,column:n.column}}),s=null,i=!1);for(var c=0,f=o.length;c<f;c++)o.charCodeAt(c)===Ja?(n.line++,n.column=0,c+1===f?(s=null,i=!1):i&&r.addMapping({source:h.source,original:{line:h.line,column:h.column},generated:{line:n.line,column:n.column},name:h.name})):n.column++}),this.walkSourceContents(function(o,h){r.setSourceContent(o,h)}),{code:n.code,map:r}};jr.SourceNode=E});var Yr=v(it=>{p();it.SourceMapGenerator=Yt().SourceMapGenerator;it.SourceMapConsumer=Jr().SourceMapConsumer;it.SourceNode=Qr().SourceNode});var ei=v((st,$r)=>{"use strict";p();st.__esModule=!0;var nn=L(),Z=void 0;try{(typeof define!="function"||!define.amd)&&(Xr=Yr(),Z=Xr.SourceNode)}catch{}var Xr;Z||(Z=function(t,e,n,r){this.src="",r&&this.add(r)},Z.prototype={add:function(e){nn.isArray(e)&&(e=e.join("")),this.src+=e},prepend:function(e){nn.isArray(e)&&(e=e.join("")),this.src=e+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}});function tn(t,e,n){if(nn.isArray(t)){for(var r=[],i=0,s=t.length;i<s;i++)r.push(e.wrap(t[i],n));return r}else if(typeof t=="boolean"||typeof t=="number")return t+"";return t}function Zr(t){this.srcFile=t,this.source=[]}Zr.prototype={isEmpty:function(){return!this.source.length},prepend:function(e,n){this.source.unshift(this.wrap(e,n))},push:function(e,n){this.source.push(this.wrap(e,n))},merge:function(){var e=this.empty();return this.each(function(n){e.add(["  ",n,`
`])}),e},each:function(e){for(var n=0,r=this.source.length;n<r;n++)e(this.source[n])},empty:function(){var e=this.currentLocation||{start:{}};return new Z(e.start.line,e.start.column,this.srcFile)},wrap:function(e){var n=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return e instanceof Z?e:(e=tn(e,this,n),new Z(n.start.line,n.start.column,this.srcFile,e))},functionCall:function(e,n,r){return r=this.generateList(r),this.wrap([e,n?"."+n+"(":"(",r,")"])},quotedString:function(e){return'"'+(e+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var n=this,r=[];Object.keys(e).forEach(function(s){var a=tn(e[s],n);a!=="undefined"&&r.push([n.quotedString(s),":",a])});var i=this.generateList(r);return i.prepend("{"),i.add("}"),i},generateList:function(e){for(var n=this.empty(),r=0,i=e.length;r<i;r++)r&&n.add(","),n.add(tn(e[r],this));return n},generateArray:function(e){var n=this.generateList(e);return n.prepend("["),n.add("]"),n}};st.default=Zr;$r.exports=st.default});var si=v((at,ii)=>{"use strict";p();at.__esModule=!0;function ri(t){return t&&t.__esModule?t:{default:t}}var ti=Ge(),ja=A(),rn=ri(ja),Qa=L(),Ya=ei(),ni=ri(Ya);function oe(t){this.value=t}function le(){}le.prototype={nameLookup:function(e,n){return this.internalNameLookup(e,n)},depthedLookup:function(e){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(e),")"]},compilerInfo:function(){var e=ti.COMPILER_REVISION,n=ti.REVISION_CHANGES[e];return[e,n]},appendToBuffer:function(e,n,r){return Qa.isArray(e)||(e=[e]),e=this.source.wrap(e,n),this.environment.isSimple?["return ",e,";"]:r?["buffer += ",e,";"]:(e.appendToBuffer=!0,e)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(e,n){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",e,",",JSON.stringify(n),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(e,n,r,i){this.environment=e,this.options=n,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!r,this.context=r||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(e,n),this.useDepths=this.useDepths||e.useDepths||e.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||e.useBlockParams;var s=e.opcodes,a=void 0,l=void 0,u=void 0,o=void 0;for(u=0,o=s.length;u<o;u++)a=s[u],this.source.currentLocation=a.loc,l=l||a.loc,this[a.opcode].apply(this,a.args);if(this.source.currentLocation=l,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new rn.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),i?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var h=this.createFunctionContext(i);if(this.isChild)return h;var c={compiler:this.compilerInfo(),main:h};this.decorators&&(c.main_d=this.decorators,c.useDecorators=!0);var f=this.context,m=f.programs,_=f.decorators;for(u=0,o=m.length;u<o;u++)m[u]&&(c[u]=m[u],_[u]&&(c[u+"_d"]=_[u],c.useDecorators=!0));return this.environment.usePartial&&(c.usePartial=!0),this.options.data&&(c.useData=!0),this.useDepths&&(c.useDepths=!0),this.useBlockParams&&(c.useBlockParams=!0),this.options.compat&&(c.compat=!0),i?c.compilerOptions=this.options:(c.compiler=JSON.stringify(c.compiler),this.source.currentLocation={start:{line:1,column:0}},c=this.objectLiteral(c),n.srcName?(c=c.toStringWithSourceMap({file:n.destName}),c.map=c.map&&c.map.toString()):c=c.toString()),c},preamble:function(){this.lastContext=0,this.source=new ni.default(this.options.srcName),this.decorators=new ni.default(this.options.srcName)},createFunctionContext:function(e){var n=this,r="",i=this.stackVars.concat(this.registers.list);i.length>0&&(r+=", "+i.join(", "));var s=0;Object.keys(this.aliases).forEach(function(u){var o=n.aliases[u];o.children&&o.referenceCount>1&&(r+=", alias"+ ++s+"="+u,o.children[0]="alias"+s)}),this.lookupPropertyFunctionIsUsed&&(r+=", "+this.lookupPropertyFunctionVarDeclaration());var a=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&a.push("blockParams"),this.useDepths&&a.push("depths");var l=this.mergeSource(r);return e?(a.push(l),Function.apply(this,a)):this.source.wrap(["function(",a.join(","),`) {
  `,l,"}"])},mergeSource:function(e){var n=this.environment.isSimple,r=!this.forceBuffer,i=void 0,s=void 0,a=void 0,l=void 0;return this.source.each(function(u){u.appendToBuffer?(a?u.prepend("  + "):a=u,l=u):(a&&(s?a.prepend("buffer += "):i=!0,l.add(";"),a=l=void 0),s=!0,n||(r=!1))}),r?a?(a.prepend("return "),l.add(";")):s||this.source.push('return "";'):(e+=", buffer = "+(i?"":this.initializeBuffer()),a?(a.prepend("return buffer + "),l.add(";")):this.source.push("return buffer;")),e&&this.source.prepend("var "+e.substring(2)+(i?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(e){var n=this.aliasable("container.hooks.blockHelperMissing"),r=[this.contextName(0)];this.setupHelperArgs(e,0,r);var i=this.popStack();r.splice(1,0,i),this.push(this.source.functionCall(n,"call",r))},ambiguousBlockValue:function(){var e=this.aliasable("container.hooks.blockHelperMissing"),n=[this.contextName(0)];this.setupHelperArgs("",0,n,!0),this.flushInline();var r=this.topStack();n.splice(1,0,r),this.pushSource(["if (!",this.lastHelper,") { ",r," = ",this.source.functionCall(e,"call",n),"}"])},appendContent:function(e){this.pendingContent?e=this.pendingContent+e:this.pendingLocation=this.source.currentLocation,this.pendingContent=e},append:function(){if(this.isInline())this.replaceStack(function(n){return[" != null ? ",n,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var e=this.popStack();this.pushSource(["if (",e," != null) { ",this.appendToBuffer(e,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,n,r,i){var s=0;!i&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(e[s++])):this.pushContext(),this.resolvePath("context",e,s,n,r)},lookupBlockParam:function(e,n){this.useBlockParams=!0,this.push(["blockParams[",e[0],"][",e[1],"]"]),this.resolvePath("context",n,1)},lookupData:function(e,n,r){e?this.pushStackLiteral("container.data(data, "+e+")"):this.pushStackLiteral("data"),this.resolvePath("data",n,0,!0,r)},resolvePath:function(e,n,r,i,s){var a=this;if(this.options.strict||this.options.assumeObjects){this.push(Xa(this.options.strict&&s,this,n,r,e));return}for(var l=n.length;r<l;r++)this.replaceStack(function(u){var o=a.nameLookup(u,n[r],e);return i?[" && ",o]:[" != null ? ",o," : ",u]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(e,n){this.pushContext(),this.pushString(n),n!=="SubExpression"&&(typeof e=="string"?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(e){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(e?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(e.ids)),this.stringParams&&(this.push(this.objectLiteral(e.contexts)),this.push(this.objectLiteral(e.types))),this.push(this.objectLiteral(e.values))},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){e!=null?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},registerDecorator:function(e,n){var r=this.nameLookup("decorators",n,"decorator"),i=this.setupHelperArgs(n,e);this.decorators.push(["fn = ",this.decorators.functionCall(r,"",["fn","props","container",i])," || fn;"])},invokeHelper:function(e,n,r){var i=this.popStack(),s=this.setupHelper(e,n),a=[];r&&a.push(s.name),a.push(i),this.options.strict||a.push(this.aliasable("container.hooks.helperMissing"));var l=["(",this.itemsSeparatedBy(a,"||"),")"],u=this.source.functionCall(l,"call",s.callParams);this.push(u)},itemsSeparatedBy:function(e,n){var r=[];r.push(e[0]);for(var i=1;i<e.length;i++)r.push(n,e[i]);return r},invokeKnownHelper:function(e,n){var r=this.setupHelper(e,n);this.push(this.source.functionCall(r.name,"call",r.callParams))},invokeAmbiguous:function(e,n){this.useRegister("helper");var r=this.popStack();this.emptyHash();var i=this.setupHelper(0,e,n),s=this.lastHelper=this.nameLookup("helpers",e,"helper"),a=["(","(helper = ",s," || ",r,")"];this.options.strict||(a[0]="(helper = ",a.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",a,i.paramsInit?["),(",i.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",i.callParams)," : helper))"])},invokePartial:function(e,n,r){var i=[],s=this.setupParams(n,1,i);e&&(n=this.popStack(),delete s.name),r&&(s.indent=JSON.stringify(r)),s.helpers="helpers",s.partials="partials",s.decorators="container.decorators",e?i.unshift(n):i.unshift(this.nameLookup("partials",n,"partial")),this.options.compat&&(s.depths="depths"),s=this.objectLiteral(s),i.push(s),this.push(this.source.functionCall("container.invokePartial","",i))},assignToHash:function(e){var n=this.popStack(),r=void 0,i=void 0,s=void 0;this.trackIds&&(s=this.popStack()),this.stringParams&&(i=this.popStack(),r=this.popStack());var a=this.hash;r&&(a.contexts[e]=r),i&&(a.types[e]=i),s&&(a.ids[e]=s),a.values[e]=n},pushId:function(e,n,r){e==="BlockParam"?this.pushStackLiteral("blockParams["+n[0]+"].path["+n[1]+"]"+(r?" + "+JSON.stringify("."+r):"")):e==="PathExpression"?this.pushString(n):e==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:le,compileChildren:function(e,n){for(var r=e.children,i=void 0,s=void 0,a=0,l=r.length;a<l;a++){i=r[a],s=new this.compiler;var u=this.matchExistingProgram(i);if(u==null){this.context.programs.push("");var o=this.context.programs.length;i.index=o,i.name="program"+o,this.context.programs[o]=s.compile(i,n,this.context,!this.precompile),this.context.decorators[o]=s.decorators,this.context.environments[o]=i,this.useDepths=this.useDepths||s.useDepths,this.useBlockParams=this.useBlockParams||s.useBlockParams,i.useDepths=this.useDepths,i.useBlockParams=this.useBlockParams}else i.index=u.index,i.name="program"+u.index,this.useDepths=this.useDepths||u.useDepths,this.useBlockParams=this.useBlockParams||u.useBlockParams}},matchExistingProgram:function(e){for(var n=0,r=this.context.environments.length;n<r;n++){var i=this.context.environments[n];if(i&&i.equals(e))return i}},programExpression:function(e){var n=this.environment.children[e],r=[n.index,"data",n.blockParams];return(this.useBlockParams||this.useDepths)&&r.push("blockParams"),this.useDepths&&r.push("depths"),"container.program("+r.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},push:function(e){return e instanceof oe||(e=this.source.wrap(e)),this.inlineStack.push(e),e},pushStackLiteral:function(e){this.push(new oe(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),e&&this.source.push(e)},replaceStack:function(e){var n=["("],r=void 0,i=void 0,s=void 0;if(!this.isInline())throw new rn.default("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof oe)r=[a.value],n=["(",r],s=!0;else{i=!0;var l=this.incrStack();n=["((",this.push(l)," = ",a,")"],r=this.topStack()}var u=e.call(this,r);s||this.popStack(),i&&this.stackSlot--,this.push(n.concat(u,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;this.inlineStack=[];for(var n=0,r=e.length;n<r;n++){var i=e[n];if(i instanceof oe)this.compileStack.push(i);else{var s=this.incrStack();this.pushSource([s," = ",i,";"]),this.compileStack.push(s)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var n=this.isInline(),r=(n?this.inlineStack:this.compileStack).pop();if(!e&&r instanceof oe)return r.value;if(!n){if(!this.stackSlot)throw new rn.default("Invalid stack pop");this.stackSlot--}return r},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,n=e[e.length-1];return n instanceof oe?n.value:n},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return this.source.quotedString(e)},objectLiteral:function(e){return this.source.objectLiteral(e)},aliasable:function(e){var n=this.aliases[e];return n?(n.referenceCount++,n):(n=this.aliases[e]=this.source.wrap(e),n.aliasable=!0,n.referenceCount=1,n)},setupHelper:function(e,n,r){var i=[],s=this.setupHelperArgs(n,e,i,r),a=this.nameLookup("helpers",n,"helper"),l=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:i,paramsInit:s,name:a,callParams:[l].concat(i)}},setupParams:function(e,n,r){var i={},s=[],a=[],l=[],u=!r,o=void 0;u&&(r=[]),i.name=this.quotedString(e),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack());var h=this.popStack(),c=this.popStack();(c||h)&&(i.fn=c||"container.noop",i.inverse=h||"container.noop");for(var f=n;f--;)o=this.popStack(),r[f]=o,this.trackIds&&(l[f]=this.popStack()),this.stringParams&&(a[f]=this.popStack(),s[f]=this.popStack());return u&&(i.args=this.source.generateArray(r)),this.trackIds&&(i.ids=this.source.generateArray(l)),this.stringParams&&(i.types=this.source.generateArray(a),i.contexts=this.source.generateArray(s)),this.options.data&&(i.data="data"),this.useBlockParams&&(i.blockParams="blockParams"),i},setupHelperArgs:function(e,n,r,i){var s=this.setupParams(e,n,r);return s.loc=JSON.stringify(this.source.currentLocation),s=this.objectLiteral(s),i?(this.useRegister("options"),r.push("options"),["options=",s]):r?(r.push(s),""):s}};(function(){for(var t="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),e=le.RESERVED_WORDS={},n=0,r=t.length;n<r;n++)e[t[n]]=!0})();le.isValidJavaScriptVariableName=function(t){return!le.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};function Xa(t,e,n,r,i){var s=e.popStack(),a=n.length;for(t&&a--;r<a;r++)s=e.nameLookup(s,n[r],i);return t?[e.aliasable("container.strict"),"(",s,", ",e.quotedString(n[r]),", ",JSON.stringify(e.source.currentLocation)," )"]:s}at.default=le;ii.exports=at.default});var li=v((ot,oi)=>{"use strict";p();ot.__esModule=!0;function Se(t){return t&&t.__esModule?t:{default:t}}var Za=ur(),$a=Se(Za),eo=Nt(),to=Se(eo),sn=Sr(),an=Lr(),no=si(),ro=Se(no),io=Rt(),so=Se(io),ao=Mt(),oo=Se(ao),lo=$a.default.create;function ai(){var t=lo();return t.compile=function(e,n){return an.compile(e,n,t)},t.precompile=function(e,n){return an.precompile(e,n,t)},t.AST=to.default,t.Compiler=an.Compiler,t.JavaScriptCompiler=ro.default,t.Parser=sn.parser,t.parse=sn.parse,t.parseWithoutProcessing=sn.parseWithoutProcessing,t}var ue=ai();ue.create=ai;oo.default(ue);ue.Visitor=so.default;ue.default=ue;ot.default=ue;oi.exports=ot.default});var hi=v((xl,ci)=>{p();var ui=(Sn(),bi(kn)),uo=li();PREPEND_SUMMARY_CATEGORIES=["work","volunteer","awards","publications"];function co(t){if(PREPEND_SUMMARY_CATEGORIES.forEach(function(h){t[h]!==void 0&&t[h].forEach(function(c){c.highlights===void 0&&(c.highlights=[])})}),t.basics){Array.isArray(t.basics.highlights)||(t.basics.highlights=[]);var e=t.basics.summary&&String(t.basics.summary).trim();t.basics._showExecutiveSummary=!!e||t.basics.highlights.length>0}if(t.recognition){Array.isArray(t.recognition.highlights)||(t.recognition.highlights=[]);var n=t.recognition,r=n.title&&String(n.title).trim(),i=n.summary&&String(n.summary).trim();t.recognition._showRecognition=!!r||!!i||n.highlights.length>0}if(t.leadership){Array.isArray(t.leadership.highlights)||(t.leadership.highlights=[]);var s=t.leadership,a=s.title&&String(s.title).trim(),l=s.summary&&String(s.summary).trim();t.leadership._showLeadership=!!a||!!l||s.highlights.length>0}var u=ui.readFileSync("//style.css","utf-8"),o=ui.readFileSync("//resume.hbs","utf-8");return uo.compile(o)({css:u,resume:t})}ci.exports={render:co}});p();var $=yi(hi(),1),pi=$.default??$,Ml=pi.render??$.render,Al=pi.pdfRenderOptions??$.pdfRenderOptions;export{Al as pdfRenderOptions,Ml as render};
