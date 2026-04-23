#!/usr/bin/env node
/**
 * Render a small PNG thumbnail of every theme's `.snapshot.html` so the
 * theme picker can show visual previews instead of "Stackoverfl…" ×5.
 *
 * For each theme in docs/themes/manifest.json that has hasSnapshot=true,
 * open the snapshot in Playwright at 1200×1600 (full page), then
 * screenshot-scale to ~320×420. Output to docs/themes/<name>.thumb.jpg.
 *
 * Requires the dev server to be running (defaults to :3010) so relative
 * URLs inside the snapshot (fonts, CSS) resolve correctly.
 *
 * Usage:
 *   node scripts/render-theme-thumbs.mjs
 *   node scripts/render-theme-thumbs.mjs --only stackoverflow,even
 *   node scripts/render-theme-thumbs.mjs --force   # re-render existing
 */

import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const THEMES_DIR = resolve(ROOT, 'docs/themes');
const MANIFEST = resolve(THEMES_DIR, 'manifest.json');
const DEV_URL = 'http://localhost:3010';

const args = process.argv.slice(2);
const onlyArg = args.find((a) => a.startsWith('--only='));
const only = onlyArg ? new Set(onlyArg.split('=')[1].split(',')) : null;
const force = args.includes('--force');

function pickTargets() {
  const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
  const out = [];
  for (const t of manifest) {
    if (only && !only.has(t.name)) continue;
    if (!t.hasSnapshot) continue;
    const thumbPath = resolve(THEMES_DIR, `${t.name}.thumb.jpg`);
    if (!force && existsSync(thumbPath)) {
      // Skip if thumb is newer than the snapshot
      const snapMtime = statSync(resolve(THEMES_DIR, `${t.name}.snapshot.html`)).mtimeMs;
      const thumbMtime = statSync(thumbPath).mtimeMs;
      if (thumbMtime >= snapMtime) continue;
    }
    out.push(t.name);
  }
  return out;
}

async function probe() {
  try {
    const r = await fetch(DEV_URL);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
  } catch {
    console.error(`Dev server not responding on ${DEV_URL}. Start it with:`);
    console.error('  node scripts/dev-server.js --port 3010');
    process.exit(1);
  }
}

async function main() {
  await probe();
  const targets = pickTargets();
  if (targets.length === 0) {
    console.log('Nothing to render (use --force to regenerate existing).');
    return;
  }
  console.log(`Rendering ${targets.length} thumbnails…`);

  const browser = await chromium.launch();
  // Render at ~2x the display size (display ≈ 240×320 in the picker grid)
  // so thumbnails still look crisp on retina. JPEG keeps repo size down
  // compared to PNG, ~15–25 KB per image vs 150+ for PNG.
  const ctx = await browser.newContext({
    viewport: { width: 480, height: 640 },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  page.on('pageerror', () => {});
  page.on('console', () => {});

  let done = 0;
  let failed = 0;
  for (const name of targets) {
    try {
      await page.goto(`${DEV_URL}/themes/${name}.snapshot.html`, {
        waitUntil: 'networkidle',
        timeout: 15_000,
      });
      // Small wait so webfonts/CSS transitions settle.
      await page.waitForTimeout(400);
      // Clamp to the hero portion, long resumes lose legibility when
      // the whole page is scaled down to thumb size.
      await page.screenshot({
        path: resolve(THEMES_DIR, `${name}.thumb.jpg`),
        clip: { x: 0, y: 0, width: 480, height: 640 },
        type: 'jpeg',
        quality: 72,
      });
      done++;
      if (done % 20 === 0) process.stdout.write(`  ${done}/${targets.length}\r`);
    } catch (e) {
      failed++;
      console.log(`  ⚠ ${name}: ${e.message?.slice(0, 80) ?? 'failed'}`);
    }
  }
  await browser.close();
  console.log(`\n✅ Rendered ${done}/${targets.length} thumbnails (${failed} failed)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
