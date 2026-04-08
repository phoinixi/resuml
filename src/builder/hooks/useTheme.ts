import { useState, useCallback, useRef } from 'preact/hooks';
import type { ResumeSchema } from '../../types/resume';

type ThemeRenderer = (resume: ResumeSchema) => string;

// Cache loaded theme renderers
const themeCache = new Map<string, ThemeRenderer>();

export function useTheme(themeName: string) {
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [themeError, setThemeError] = useState<string | null>(null);
  const currentThemeRef = useRef(themeName);

  const renderResume = useCallback(async (resume: ResumeSchema) => {
    currentThemeRef.current = themeName;
    setLoading(true);
    setThemeError(null);

    try {
      let renderer = themeCache.get(themeName);

      if (!renderer) {
        // Load the theme from the bundled themes directory via fetch
        try {
          const response = await fetch(`./themes/${themeName}.js`);
          if (response.ok) {
            const blob = new Blob([await response.text()], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            try {
              const mod = await import(/* @vite-ignore */ url);
              if (mod.render) {
                renderer = mod.render;
              } else if (mod.default?.render) {
                renderer = mod.default.render;
              }
            } finally {
              URL.revokeObjectURL(url);
            }
          }
        } catch {
          // Bundled theme not available
        }

        // Fallback: generate a simple HTML resume
        if (!renderer) {
          renderer = createFallbackRenderer(themeName);
        }

        themeCache.set(themeName, renderer);
      }

      // Only update if we're still on this theme (avoid race conditions)
      if (currentThemeRef.current === themeName) {
        const result = renderer(resume);
        setHtml(result);
        setLoading(false);
      }
    } catch (e: any) {
      if (currentThemeRef.current === themeName) {
        setThemeError(e.message || 'Failed to render theme');
        setLoading(false);
      }
    }
  }, [themeName]);

  return { html, loading, themeError, renderResume };
}

function createFallbackRenderer(themeName: string): ThemeRenderer {
  return (resume: ResumeSchema) => {
    const basics = resume.basics || {};
    const profiles = (basics.profiles || []) as any[];
    const work = (resume.work || []) as any[];
    const education = (resume.education || []) as any[];
    const skills = (resume.skills || []) as any[];
    const projects = (resume.projects || []) as any[];

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(basics.name || 'Resume')}</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; color: #1a1a1a; line-height: 1.6; padding: 40px; max-width: 800px; margin: 0 auto; }
  h1 { font-size: 2rem; margin-bottom: 4px; }
  h2 { font-size: 1.2rem; color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 4px; margin: 24px 0 12px; text-transform: uppercase; letter-spacing: 0.05em; }
  h3 { font-size: 1rem; margin-bottom: 2px; }
  .subtitle { color: #666; font-size: 1.1rem; margin-bottom: 8px; }
  .contact { color: #666; font-size: 0.9rem; margin-bottom: 4px; }
  .contact a { color: #2563eb; text-decoration: none; }
  .summary { margin: 12px 0; color: #444; }
  .entry { margin-bottom: 16px; }
  .entry-header { display: flex; justify-content: space-between; align-items: baseline; }
  .entry-header .date { color: #888; font-size: 0.85rem; }
  .entry-company { color: #666; font-size: 0.95rem; }
  .highlights { padding-left: 20px; margin-top: 6px; }
  .highlights li { margin-bottom: 4px; color: #444; }
  .skills-grid { display: flex; flex-wrap: wrap; gap: 16px; }
  .skill-group { min-width: 200px; }
  .skill-name { font-weight: 600; margin-bottom: 4px; }
  .skill-keywords { color: #666; font-size: 0.9rem; }
  .note { text-align: center; color: #999; margin-top: 24px; font-size: 0.8rem; font-style: italic; }
</style>
</head>
<body>
  <h1>${esc(basics.name || '')}</h1>
  ${basics.label ? `<div class="subtitle">${esc(basics.label)}</div>` : ''}
  <div class="contact">
    ${[basics.email, basics.phone, basics.url].filter(Boolean).map(esc).join(' · ')}
    ${basics.location?.city ? ` · ${esc(basics.location.city)}${basics.location.region ? ', ' + esc(basics.location.region) : ''}` : ''}
  </div>
  ${profiles.length > 0 ? `<div class="contact">${profiles.map((p: any) => p.url ? `<a href="${esc(p.url)}">${esc(p.network || p.username)}</a>` : esc(p.network || '')).join(' · ')}</div>` : ''}
  ${basics.summary ? `<div class="summary">${esc(basics.summary)}</div>` : ''}

  ${work.length > 0 ? `<h2>Experience</h2>${work.map((j: any) => `
  <div class="entry">
    <div class="entry-header">
      <h3>${esc(j.position || '')}</h3>
      <span class="date">${esc(j.startDate || '')} — ${esc(j.endDate || 'Present')}</span>
    </div>
    <div class="entry-company">${esc(j.name || '')}</div>
    ${j.summary ? `<div class="summary">${esc(j.summary)}</div>` : ''}
    ${(j.highlights || []).length > 0 ? `<ul class="highlights">${(j.highlights as string[]).map((h: string) => `<li>${esc(h)}</li>`).join('')}</ul>` : ''}
  </div>`).join('')}` : ''}

  ${education.length > 0 ? `<h2>Education</h2>${education.map((e: any) => `
  <div class="entry">
    <div class="entry-header">
      <h3>${esc(e.institution || '')}</h3>
      <span class="date">${esc(e.startDate || '')} — ${esc(e.endDate || '')}</span>
    </div>
    <div class="entry-company">${[e.studyType, e.area].filter(Boolean).map(esc).join(', ')}${e.score ? ` · GPA: ${esc(e.score)}` : ''}</div>
  </div>`).join('')}` : ''}

  ${skills.length > 0 ? `<h2>Skills</h2><div class="skills-grid">${skills.map((s: any) => `
  <div class="skill-group">
    <div class="skill-name">${esc(s.name || '')}${s.level ? ` (${esc(s.level)})` : ''}</div>
    <div class="skill-keywords">${(s.keywords || []).map(esc).join(', ')}</div>
  </div>`).join('')}</div>` : ''}

  ${projects.length > 0 ? `<h2>Projects</h2>${projects.map((p: any) => `
  <div class="entry">
    <div class="entry-header">
      <h3>${esc(p.name || '')}${p.url ? ` <a href="${esc(p.url)}" style="font-weight:normal;font-size:.85rem">[link]</a>` : ''}</h3>
      <span class="date">${[p.startDate, p.endDate].filter(Boolean).map(esc).join(' — ')}</span>
    </div>
    ${p.description ? `<div class="summary">${esc(p.description)}</div>` : ''}
    ${(p.highlights || []).length > 0 ? `<ul class="highlights">${(p.highlights as string[]).map((h: string) => `<li>${esc(h)}</li>`).join('')}</ul>` : ''}
  </div>`).join('')}` : ''}

  <div class="note">Theme "${esc(themeName)}" is not yet bundled for the browser. Using built-in renderer. Install the theme via CLI for full rendering.</div>
</body>
</html>`;
  };
}

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
