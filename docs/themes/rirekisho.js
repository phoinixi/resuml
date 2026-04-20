var j=Object.defineProperty;var R=(e,t)=>{for(var a in t)j(e,a,{get:t[a],enumerable:!0})};var s={};R(s,{render:()=>g});var b=e=>{if(!e)return"";let t=new Date,a=new Date(e),r=t.getFullYear()-a.getFullYear(),n=t.getMonth()-a.getMonth();return(n<0||n===0&&t.getDate()<a.getDate())&&r--,r},d=(e,t="\u3000")=>[`${e.getFullYear()}\u5E74`,`${String(e.getMonth()+1).padStart(2,"0")}\u6708`,`${String(e.getDate()).padStart(2,"0")}\u65E5`].join(t),c=(e,t,a)=>{let r=t.length,n=a-r;return n>0?[...t,...Array(n).fill(e)]:t},k=(e,t)=>{let a=new Date(e),r=t?new Date(t):new Date,n=r.getFullYear()-a.getFullYear(),i=r.getMonth()-a.getMonth(),o=n>0?`${n}\u5E74`:"",p=i>0?`${i}\u30F6\u6708`:"";return o.concat(p)},f=(e,t)=>{let a=e.replace("-","\u5E74")+"\u6708",r=t?t.replace("-","\u5E74")+"\u6708":"\u73FE\u5728";return`<span class="nobreak">${a}\uFF5E</span><br /><span class="nobreak">${r}</span>`};var $=e=>{let{basics:t,certificates:a,education:r,objectives:n,preferences:i,volunteer:o,work:p}=e,x=d(new Date),u=[...m(M(r),"\u5B66\u6B74"),...m(P(o),"\u30A4\u30F3\u30BF\u30FC\u30F3\u30B7\u30C3\u30D7\u30FB\u30A2\u30EB\u30D0\u30A4\u30C8"),...m(A(p),"\u8077\u6B74")],h=`
      <tr>
        <td class="year"></td>
        <td class="month"></td>
        <td>&nbsp;</td>
      </tr>
    `;return`
    <table>
    <tr>
      <td class="title">
        <h1>\u5C65\u6B74\u66F8</h1>
      </td>
      <td class="date">${x} \u73FE\u5728</td>
      <td class="picture" rowspan="3">
        ${z(t)}
      </td>
    </tr>
    <tr>
      <td colspan="2" class="furigana">\u3075\u308A\u304C\u306A\u3000\u3000${t.nameFurigana||""}</td>
    </tr>
    <tr>
      <td colspan="2" class="name">
        <span class="name-title">\u6C0F \u540D</span><br />
        <div class="name-text">${t.name||""}</div>
      </td>
    </tr>
    <tr>
      <td colspan="2" class="birthdate">
      <span class="birthdate-title">\u751F\u5E74\u6708\u65E5</span>
        ${t.birthDate?`${d(new Date(t.birthDate))}\u751F\uFF08\u6E80\u3000${b(t.birthDate)}\u6B73\uFF09`:"\u5E74\u6708\u65E5\u751F\uFF08\u6E80\u6B73\uFF09"}
      </td>
      <td>
        \u203B\u6027\u5225 ${S(t)}
      </td>
    </tr>
  </table>

  <table>
    <tr class="joint">
      <td colspan="2" class="furigana">\u3075\u308A\u304C\u306A\u3000\u3000${t.location?.furigana||""}</td>
      <td rowspan="2" class="telephone">\u96FB\u8A71 <br /> ${t.phone||""}</td>
    </tr>
    <tr>
      <td colspan="2" class="address">
        <span class="address-title">\u73FE\u4F4F\u6240</span> \u3012${t.location?.postalCode||""}
        <br /><div class="address-text">${C(t)||""}</div>
      </td>
    </tr>
    <tr>
      <td colspan="2" class="furigana">\u3075\u308A\u304C\u306A\u3000\u3000${t.alternateContact?.furigana||""}</td>
      <td rowspan="2" class="telephone">\u96FB\u8A71 <br /> ${t.alternateContact?.phone||""}</td>
    </tr>
    <tr>
      <td colspan="2" class="address">
        <span class="address-title">\u9023\u7D61\u5148</span> \u3012${t.alternateContact?.postalCode||""}
        <span class="address-note">\uFF08\u73FE\u4F4F\u6240\u4EE5\u5916\u306B\u9023\u7D61\u3092\u5E0C\u671B\u3059\u308B\u5834\u5408\u306B\u8A18\u5165\uFF09</span><br />
        <div class="address-text">${t.alternateContact?.address.concat("<br />")||""}
        E-mail: ${t.email||""}<br />
        ${F(t)}
        </div>
      </td>
    </tr>
  </table>

  <table class="tablespace">
    <tr>
      <th class="year">\u5E74</th>
      <th class="month">\u6708</th>
      <th>\u5B66\u6B74\u30FB\u8077\u6B74(\u540D\u5225\u306B\u307E\u3068\u3081\u3066\u66F8\u304F)</th>
    </tr>
    ${c(h,u.slice(0,15),15).join("")}
  </table>

  <table>
    <tr>
      <td class="footnote">\u203B\u300C\u6027\u5225\u300D\u6B04\uFF1A\u8A18\u8F09\u306F\u4EFB\u610F\u3067\u3059\u3002\u672A\u8A18\u8F09\u3068\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059</td>
    </tr>
  </table>

  <div class="page-break"></div>

  <table class="tablespace">
    <tr>
      <th class="year">\u5E74</th>
      <th class="month">\u6708</th>
      <th>\u5B66\u6B74\u30FB\u8077\u6B74(\u540D\u5225\u306B\u307E\u3068\u3081\u3066\u66F8\u304F)</th>
    </tr>
    ${c(h,u.slice(15,23),8).join("")}
  </table>

  <table>
    <tr class="joint">
      <th class="year">\u5E74</th>
      <th class="month">\u6708</th>
      <th>\u514D\u8A31\u30FB\u8CC7\u683C</th>
    </tr>
    ${c(h,Y(a).slice(0,8),8).join("")}
  </table>

  <table class="tablespace">
    <tr class="section-title">
      <th>\u5FD7\u671B\u306E\u52D5\u6A5F\u3001\u7279\u6280\u3001\u597D\u304D\u306A\u5B66\u79D1\u3001\u30A2\u30D4\u30FC\u30EB\u30DD\u30A4\u30F3\u30C8\u306A\u3069</th>
    </tr>
    <tr class="objectives">
      <td>${O(n).join("")}</td>
    </tr>
  </table>

  <table class="tablespace">
    <tr>
      <th class="section-title">\u672C\u4EBA\u5E0C\u671B\u8A18\u5165\u6B04\uFF08\u7279\u306B\u7D66\u6599\u30FB\u8077\u7A2E\u30FB\u52E4\u52D9\u6642\u9593\u30FB\u52E4\u52D9\u5730\u30FB\u305D\u306E\u4ED6\u306B\u3064\u3044\u3066\u306E\u5E0C\u671B\u306A\u3069\u304C\u3042\u308C\u3070\u8A18\u5165\uFF09</th>
    </tr>
    ${c("<tr><td>&nbsp</td></tr>",(i||[]).map(v=>`<tr><td>${v}</td></tr>`).slice(0,5),5).join("")}
  </table>
  `},S=e=>{if(!e.gender)return"";let a={male:"\u7537",female:"\u5973"}[e.gender]||"";return a?`<span class="circled">${a}</span>`:""},z=e=>e.image?`<img src="${e.image}" class="image" />`:`
  <div class="picture-instructions">
    <span class="picture-instructions-title">\u5199\u771F\u3092\u306F\u308B\u4F4D\u7F6E</span>
    \u5199\u771F\u3092\u306F\u308B\u5FC5\u8981\u304C<br />
    \u3042\u308B\u5834\u5408<br />
    1. \u7E26\u300036\u301C40mm<br />
    &nbsp;&nbsp;&nbsp;&nbsp;\u6A2A\u300024\u301C30mm<br />
    2. \u672C\u4EBA\u5358\u8EAB\u80F8\u304B\u3089\u4E0A<br />
    3. \u88CF\u9762\u306E\u308A\u3065\u3051
  </div>`,C=e=>e.location?[e.location?.region,e.location?.city,e.location?.address].filter(t=>t).join(""):"",F=e=>!e.profiles||e.profiles.length===0?"":e.profiles.map(t=>`
      ${t.network.concat(":")||""} ${t.url||t.username||""}<br />`).join(""),m=(e,t)=>e.length===0?[]:[`<tr>
      <th class="year"></th>
      <th class="month"></th>
      <th class="history-type">${t}</th>
    </tr>`,...e.sort((a,r)=>new Date(a.date)-new Date(r.date)).map(a=>{let[r,n]=(a.date||"").split("-");return`
        <tr>
          <td class="year">${r||""}</td>
          <td class="month">${n||""}</td>
          <td>${a.event||""}</td>
        </tr>
      `})],M=e=>[...(e||[]).filter(t=>!t.inline).map(t=>({date:t.startDate,event:[t.location,t.institution,t.area,t.studyType,"\u5165\u5B66"].filter(a=>a).join("\u30FB")})),...(e||[]).map(t=>({date:t.endDate,event:[t.location,t.institution,t.area,t.studyType,"\u5352\u696D"].filter(a=>a).join("\u30FB")}))],A=e=>[...(e||[]).map(t=>({date:t.startDate,event:[t.location,t.name,t.position,"\u5165\u793E",!t.endDate&&"\u73FE\u5728\u306B\u81F3\u308B"].filter(a=>a).join("\u30FB")})),...(e||[]).filter(t=>t.endDate).map(t=>({date:t.endDate,event:[t.location,t.name,t.position,"\u9000\u793E"].filter(a=>a).join("\u30FB")}))],P=e=>[...(e||[]).map(t=>({date:t.startDate,event:[t.location,t.organization,t.position,t.summary].filter(a=>a).join("\u30FB")}))],Y=e=>(e||[]).sort((t,a)=>new Date(t.date)-new Date(a.date)).map(t=>{let[a,r]=(t.date||"").split("-");return`
      <tr>
        <td class="year">${a||""}</td>
        <td class="month">${r||""}</td>
        <td>${t.name||""} ${t.score||""}</td>
      </tr>
    `}),O=e=>!e||e.length===0?[]:e.map(t=>`${t}<br />`);var w=e=>{let{basics:t,work:a,skills:r,strengths:n,certificates:i,pr:o}=e;return`
    <div class="shokumu-keirekisho">
      <h1>\u8077\u52D9\u7D4C\u6B74\u66F8</h1>
      <div class="date-name">
        ${d(new Date,"")}<br />
        ${t.name}
      </div>

      <section class="no-page-break">
        <h2>\u3010\u8077\u6B74\u8981\u7D04\u3011</h2>
        ${T(a)}
      </section>

      <section class="no-page-break">
        <h2>\u3010\u7D4C\u9A13\u30FB\u30B9\u30AD\u30EB\u3011</h2>
        <div class="skills-grid">
          ${H(r)}
        </div>
      </section>

      <section>
        <h2>\u3010\u8077\u52D9\u7D4C\u6B74\u3011</h2>
        ${N(a)}
      </section>

      <section class="no-page-break">
        <h2>\u3010\u8CC7\u683C\u30FB\u7279\u6280\u3011</h2>
        ${E(i)}
      </section>

      <section class="no-page-break">
        <h2>\u3010\u6D3B\u304B\u305B\u308B\u7D4C\u9A13\u30FB\u77E5\u8B58\u30FB\u6280\u8853\u7B49\u3011</h2>
        ${K(n)}
      </section>

      <section class="no-page-break">
        <h2>\u3010\u81EA\u5DF1PR\u3011</h2>
        ${G(o)}
      </section>
    </div>
  `},T=e=>e.sort((t,a)=>new Date(a.date)-new Date(t.date)).map(t=>`
    ${t.name}\u306B\u3066${t.position}\u3068\u3057\u3066${k(t.startDate,t.endDate)}\u52E4\u52D9\u3002
    ${t.summary}<br />
  `).join(""),H=e=>e.filter(t=>t.featured).map(t=>`
    <div>
      <h3>\u25CE${t.name}</h3>
      <ul>
        ${t.keywords.slice(0,4).map(a=>`<li>${a}</li>`).join("")}
      </ul>
    </div>
  `).join(""),N=e=>e.sort((t,a)=>new Date(a.date)-new Date(t.date)).map(t=>`
    <div class="job">
      <h3>${t.name}</h3>
      \u4E8B\u696D\u5185\u5BB9\uFF1A${t.summary}
      <table>
        <tr>
          <th class="kikan">\u671F\u9593</th>
          <th>\u696D\u52D9\u5185\u5BB9</th>
        </tr>
        <tr>
          <td class="kikan">${f(t.startDate,t.endDate)}</td>
          <td>
            ${t.position}<br />
            <ul>
              ${t.highlights.map(a=>`<li>${a}</li>`).join("")}
            </ul>
          </td>
        </tr>
      </table>
    </div>
  `).join(""),E=e=>e.filter(t=>t.featured).sort((t,a)=>new Date(a.date)-new Date(t.date)).map(t=>`${t.name} ${t.score||""} (${t.date})<br/>`).join(""),K=e=>e.map(t=>`${t}<br />`).join(""),G=e=>e.map(t=>`${t}<br />`).join("");var y=()=>`
  @page {
    size: A4;
    margin: 0;
  }

  @media print {
    html, body {
      width: 210mm;
      height: 297mm;
    }
    .container {
      width: 190mm;
      height: 277mm;
      margin: 10mm;
      page-break-after: always;
    }
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Hiragino Kaku Gothic Pro", "Mincho MS", "Meiryo", sans-serif;
    font-size: 8pt;
    line-height: 1.3;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    padding: 0px;
  }

  th {
    font-weight: normal;
  }

  th, td {
    border: 1px solid #000;
    padding:6pt;
  }

  .container {
    max-width: 210mm;
    margin: 20pt auto;
  }

  .picture, .title, .date, .footnote  {
    border: 0px;
  }

  .picture {
    width: 120pt;
  }

  .image, .picture-instructions {
    width: 90pt;
    height: 120pt;
    margin-block: 5pt;
    margin-inline: 15pt;
  }

  .picture-instructions {
    border: 1px dotted #000;
    font-size: 8pt;
    padding: 5pt;
  }

  .picture-instructions-title {
    padding: 5pt;
    display: block;
  }

  .birthdate{
    text-align: right;
  }

  .joint > td, .joint > th {
    border-top: 0px;
  }

  .title, .date {
    padding-bottom: 0px;
    vertical-align: bottom;
    width: 50%;
  }

  .title > h1 {
    padding: 0px;
    margin: 0px;
    font-size: 18pt;
    letter-spacing: 15pt;
  }

  .date {
    text-align: right;
  }

  .furigana {
    padding-block: 2pt;
    padding-inline: 5pt;
    margin: 0px;
    font-size: 8pt;
  }

  .birthdate-title {
    float: left;
  }

  .name {
    vertical-align: top;
  }

  .name-title, .section-title, .history-type, .address-title {
    text-align: left;
  }

  .name-title, .birthdate-title, .address-title {
    font-size: 10pt;
  }

  .name-text {
    text-align: center;
    font-size: 16pt;
    margin-bottom: -12pt;
  }

  .year, .month {
    text-align: center;
    vertical-align: center;
  }

  .year {
    width: 12%;
  }

  .month {
    width: 7%;
  }

  .circled {
    border: 1px solid #000;
    border-radius: 100%;
    padding: 3pt;
  }

  .telephone {
    width: 20%;
    vertical-align: top;
  }

  .address {
    height: 60pt;
    vertical-align: top;
  }

  .address-text {
    margin-left: 10%;
  }

  .address-note {
    float: right;
    font-size: 8pt;
  }

  .objectives {
    height: 125pt;
    text-align: left;
    vertical-align: top;
  }

  .tablespace {
    margin-top: 10pt;
  }

  .nobrake {
    white-space: nowrap;
  }

  .kikan {
    width: 100px;
  }

  .shokumu-keirekisho h1,
  .shokumu-keirekisho h2,
  .shokumu-keirekisho h3,
  .shokumu-keirekisho .date-name {
    margin-block: 10pt;
  }

  .shokumu-keirekisho h1 {
    font-size: 18pt;
    text-align: center;
  }

  .shokumu-keirekisho .date-name {
    font-size: 10pt;
    text-align: right;
  }

  .shokumu-keirekisho h2 {
    font-size: 12pt;
    border-bottom: 1px solid #000;
  }

  .shokumu-keirekisho h3 {
    font-size: 10pt;
  }

  .shokumu-keirekisho table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 5pt;
  }

  .shokumu-keirekisho th, .shokumu-keirekisho td {
    border: 1px solid #000;
    padding: 5pt;
  }

  .shokumu-keirekisho th {
    background-color: #f0f0f0;
    font-weight: normal;
    text-align: center;
  }

  .shokumu-keirekisho ul {
    margin: 5pt 0;
    padding-left: 20pt;
  }

  .shokumu-keirekisho .job {
    margin-block: 0;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0rem;
  }

  .skill-category {
    break-inside: avoid;
  }

  @media print {
    .page-break {
      page-break-before: always;
    }

    .no-page-break, .job {
      page-break-inside: avoid;
    }

    h2, h3 {
      page-break-after: avoid;
    }
  }
`;var g=e=>`
    <!DOCTYPE html>
    <html lang="ja">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>\u5C65\u6B74\u66F8 - ${e.basics?.name||""}</title>
      <style>
        ${y()}
      </style>
    </head>

    <body>
      <div class="container">
        ${$(e)}
        <div class="page-break"></div>
        ${w(e)}
      </div>
    </body>
    </html>
  `;var D=void 0??s,nt=D.render??g,st=D.pdfRenderOptions??void 0;export{st as pdfRenderOptions,nt as render};
