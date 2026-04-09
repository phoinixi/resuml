var s=Object.defineProperty;var a=(e,n)=>{for(var t in n)s(e,t,{get:n[t],enumerable:!0})};var r={};a(r,{default:()=>i,render:()=>h});function d(e){return`
  <!DOCTYPE html>
  <html>
  <head>
      <title>${e.basics.name}'s Resume</title>
  </head>
  <body>
      <h1>${e.basics.name}</h1>
      <p>${e.basics.summary}</p>
      <h2>Work Experience</h2>
      ${m(e.work)}
      <h2>Skills</h2>
      ${$(e.skills)}
  </body>
  </html>
  `}function m(e){let n="";return e.forEach(t=>{n+=`
      <h3>${t.name}</h3>
      <h4>${t.position}</h4>
      <p>${t.startDate} - ${t.endDate||"Present"}</p>
      <ul>
          ${t.highlights.map(l=>`<li>${l}</li>`).join("")}
      </ul>
      `}),n}function $(e){let n="";return e.forEach(t=>{n+=`
      <h3>${t.name}</h3>
      <p>Level: ${t.level}</p>
      <ul>
          ${t.keywords.map(l=>`<li>${l}</li>`).join("")}
      </ul>
      `}),n}var h=e=>d(e),i=h;var o=i??r,u=o.render??h,x=o.pdfRenderOptions??void 0;export{x as pdfRenderOptions,u as render};
