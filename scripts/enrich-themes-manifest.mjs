#!/usr/bin/env node
/**
 * Enrich docs/themes/manifest.json with popularity + render-health signals.
 *
 * For each theme we add:
 *   - npmWeeklyDownloads: rough "actual usage" proxy (npm API)
 *   - renderOk: whether the bundled theme renders a sample resume without
 *     throwing (Playwright + blob worker). Themes that fail here are the
 *     ones that silently showed sample data before — surface them as broken.
 *
 * Usage:
 *   node scripts/enrich-themes-manifest.mjs                # both
 *   node scripts/enrich-themes-manifest.mjs --downloads-only
 *   node scripts/enrich-themes-manifest.mjs --render-only  # needs dev server at :3010
 *
 * The render probe is slow (tens of seconds) — keep the output committed.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { get } from 'node:https';

const MANIFEST = 'docs/themes/manifest.json';
const DOWNLOADS_BATCH = 'https://api.npmjs.org/downloads/point/last-week/';
const args = new Set(process.argv.slice(2));

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    get(url, { headers: { 'User-Agent': 'resuml-enrich' } }, (res) => {
      let data = '';
      res.on('data', (c) => { data += c; });
      res.on('end', () => {
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function enrichDownloads(manifest) {
  console.log(`📦 Fetching npm download counts for ${manifest.length} themes…`);
  // npm batch endpoint accepts up to 128 comma-separated packages
  const CHUNK = 100;
  for (let i = 0; i < manifest.length; i += CHUNK) {
    const slice = manifest.slice(i, i + CHUNK);
    const names = slice.map((t) => `jsonresume-theme-${t.name}`).join(',');
    try {
      const resp = await fetchJson(DOWNLOADS_BATCH + encodeURIComponent(names));
      // Batch response shape: { pkg: { downloads, ... }, ... } or { downloads, ... } for single
      for (const t of slice) {
        const key = `jsonresume-theme-${t.name}`;
        const entry = resp[key] ?? (slice.length === 1 ? resp : null);
        t.npmWeeklyDownloads = entry?.downloads ?? 0;
      }
    } catch (e) {
      console.warn(`  batch ${i}-${i + slice.length} failed: ${e.message}`);
      // Fall back per-package so one bad name doesn't kill the batch
      for (const t of slice) {
        try {
          const r = await fetchJson(DOWNLOADS_BATCH + encodeURIComponent(`jsonresume-theme-${t.name}`));
          t.npmWeeklyDownloads = r.downloads ?? 0;
        } catch { t.npmWeeklyDownloads = 0; }
      }
    }
    process.stdout.write(`  ${Math.min(i + CHUNK, manifest.length)}/${manifest.length}\r`);
  }
  console.log('');
}

async function enrichRender(manifest) {
  const { chromium } = await import('playwright');
  console.log(`🎭 Probing render for ${manifest.length} themes via Playwright (dev server must be on :3010)…`);

  const b = await chromium.launch();
  const page = await b.newPage();
  await page.goto('http://localhost:3010', { waitUntil: 'networkidle' });

  // Installed once on the page; reused per theme
  const sampleResume = {
    basics: {
      name: 'Test User',
      label: 'Engineer',
      email: 'test@example.com',
      phone: '+1-555-0123',
      summary: 'Sample summary for render probe.',
      location: { city: 'City', region: 'Region', countryCode: 'US', address: '1 Way', postalCode: '10000' },
      profiles: [{ network: 'GitHub', username: 'x', url: 'https://github.com/x' }],
      url: 'https://example.com',
    },
    work: [{ name: 'Co', position: 'Engineer', startDate: '2020-01-01', endDate: '2022-01-01', summary: 'S', highlights: ['H'] }],
    skills: [{ name: 'Cat', level: 'Expert', keywords: ['K'] }],
    education: [{ institution: 'U', area: 'A', studyType: 'M', startDate: '2015-01-01', endDate: '2019-01-01' }],
    projects: [{ name: 'P', description: 'D', highlights: ['H'] }],
    languages: [{ language: 'English', fluency: 'Native' }],
    interests: [{ name: 'I', keywords: ['k'] }],
    references: [{ name: 'R', reference: 'Ref' }],
    publications: [{ name: 'Pub', publisher: 'Pr', releaseDate: '2020', summary: 'S' }],
    certificates: [{ name: 'C', date: '2020', issuer: 'Is' }],
    awards: [{ title: 'A', date: '2020', awarder: 'Aw', summary: 'S' }],
    volunteer: [{ organization: 'V', position: 'P', startDate: '2020', summary: 'S', highlights: ['H'] }],
    // Include `meta.palette` so themes like material (which set
    // meta.palette.primary without defensive checks) don't trip the probe
    // — matches what the runtime padResume provides.
    meta: { theme: 'test', palette: { primary: '', secondary: '' } },
  };

  for (let i = 0; i < manifest.length; i++) {
    const t = manifest[i];
    if (!t.browserCompatible) { t.renderOk = false; continue; }
    const result = await page.evaluate(async ({ name, resume }) => {
      try {
        if (typeof globalThis.process === 'undefined') {
          globalThis.process = {
            env: { NODE_ENV: 'production' }, browser: true, platform: 'browser',
            version: 'v20.0.0', versions: {}, stdout: { write: () => {} }, stderr: { write: () => {} },
            cwd: () => '/', chdir: () => {}, nextTick: (fn) => Promise.resolve().then(fn),
            argv: [], pid: 1, title: 'browser',
          };
        }
        if (typeof globalThis.global === 'undefined') globalThis.global = globalThis;
        const mod = await import(/* @vite-ignore */ '/themes/' + name + '.js');
        const render = mod.render ?? mod.default?.render;
        if (typeof render !== 'function') return false;
        const out = render(resume);
        const html = typeof out === 'string' ? out : await out;
        return typeof html === 'string' && html.length > 200;
      } catch { return false; }
    }, { name: t.name, resume: sampleResume });
    t.renderOk = !!result;
    if ((i + 1) % 20 === 0 || i === manifest.length - 1) {
      process.stdout.write(`  ${i + 1}/${manifest.length}\r`);
    }
  }
  console.log('');
  await b.close();

  const ok = manifest.filter((t) => t.renderOk).length;
  const broken = manifest.filter((t) => t.browserCompatible && !t.renderOk);
  console.log(`  ${ok}/${manifest.length} render successfully. ${broken.length} marked browserCompatible but fail at render time.`);
  if (broken.length) {
    console.log('  Broken at render time:', broken.map((t) => t.name).slice(0, 20).join(', ') + (broken.length > 20 ? '…' : ''));
  }
}

async function main() {
  const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
  const doDownloads = !args.has('--render-only');
  const doRender = !args.has('--downloads-only');

  if (doDownloads) await enrichDownloads(manifest);
  if (doRender) await enrichRender(manifest);

  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
  console.log(`✅ Wrote ${MANIFEST}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
