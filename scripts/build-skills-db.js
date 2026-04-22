#!/usr/bin/env node
/**
 * Build the skills taxonomy used by the ATS keyword matcher.
 *
 * Sources:
 *   1. O*NET (US Department of Labor, public domain) — "Technology Skills"
 *      and "Tools Used" for all IT occupations (SOC codes 15-*).
 *   2. src/ats/skills/emerging.ts — hand-curated allowlist of modern
 *      frameworks/tools O*NET hasn't absorbed yet.
 *
 * Output: data/skills/skills.json — bundled by the app at build time.
 *
 * Run: node scripts/build-skills-db.js
 *   --onet-zip <path>   Use a local O*NET zip instead of downloading
 *   --no-download       Fail if zip isn't cached
 */

import { createWriteStream, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { get } from 'node:https';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_FILE = join(ROOT, 'data/skills/skills.json');
const CACHE_DIR = join(tmpdir(), 'resuml-skills-cache');
const ONET_URL = 'https://www.onetcenter.org/dl_files/database/db_29_0_text.zip';

function parseArgs() {
  const args = process.argv.slice(2);
  const out = { onetZip: null, download: true };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--onet-zip') out.onetZip = args[++i];
    if (args[i] === '--no-download') out.download = false;
  }
  return out;
}

function download(url, dest) {
  return new Promise((resolvePromise, reject) => {
    const file = createWriteStream(dest);
    const req = get(url, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        return download(res.headers.location, dest).then(resolvePromise, reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} from ${url}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(resolvePromise); });
    });
    req.on('error', reject);
  });
}

function unzip(zipPath, destDir) {
  execFileSync('unzip', ['-q', '-o', zipPath, '-d', destDir]);
}

/**
 * Parse a tab-separated O*NET file with a header row.
 * Returns an array of {header: value} objects.
 */
function parseTsv(path) {
  const text = readFileSync(path, 'utf8');
  const lines = text.split(/\r?\n/).filter(Boolean);
  const [headerLine, ...rows] = lines;
  const headers = headerLine.split('\t');
  return rows.map((row) => {
    const cells = row.split('\t');
    const obj = {};
    for (let i = 0; i < headers.length; i++) obj[headers[i]] = cells[i] ?? '';
    return obj;
  });
}

/**
 * Turn a human skill name into a slug id.
 */
function slugify(name) {
  return name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Heuristic cleaner: O*NET entries include parenthetical descriptors ("Microsoft
 * Azure (Cloud)") and vendor prefixes ("Microsoft SQL Server"). Emit the main
 * canonical name plus useful aliases.
 */
function nameToCanonicalAndAliases(raw) {
  const aliases = new Set();
  let canonical = raw.trim();
  // Drop trailing generic suffixes like " software" / " tools" (noise for match)
  const suffixRe = /\s+(software|tools?|systems?|applications?|programs?)$/i;
  if (suffixRe.test(canonical)) {
    const stripped = canonical.replace(suffixRe, '').trim();
    if (stripped.length >= 2) {
      aliases.add(canonical);
      canonical = stripped;
    }
  }
  // Parenthetical expansion: "Microsoft Excel (spreadsheet)" → canonical "Microsoft Excel", alias "Excel"
  const paren = canonical.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (paren) {
    canonical = paren[1].trim();
    const inside = paren[2].trim();
    if (inside && inside.length <= 40) aliases.add(inside);
  }
  // Acronym alias: CapsInitials like "Amazon Web Services" → "AWS". Need at
  // least 3 words to avoid generating 2-letter acronyms that collide with
  // common English words ("IN", "IS", "NO", "IT", "OR", etc.).
  const words = canonical.split(/\s+/);
  if (words.length >= 3 && words.length <= 6 && words.every((w) => /^[A-Z]/.test(w))) {
    const acronym = words.map((w) => w[0]).join('');
    if (acronym.length >= 3 && acronym.length <= 6) aliases.add(acronym);
  }
  // Don't auto-generate vendor-prefix tail aliases — too many collide with
  // common English words ("Microsoft Project" → "Project", "Oracle Forms" →
  // "Forms"). Use data/skills/emerging.json for curated shortforms instead.

  // Final cleanup: drop any alias shorter than 3 chars or identical to canonical
  const clean = [...aliases]
    .filter((a) => a.length >= 3)
    .filter((a) => a.toLowerCase() !== canonical.toLowerCase());
  return { canonical, aliases: clean };
}

/**
 * Single-word skill names that collide with common English prose. O*NET
 * contains obscure products literally named "Switch", "Access", "Contact",
 * "Notes", "Software development" etc. — matching those against prose
 * produces nonsense. Drop them and rely on the emerging-tech allowlist
 * for the genuine single-word brands (e.g. "React", "Docker", "Vite").
 */
const GENERIC_SINGLE_WORD_BAN = new Set([
  'access', 'apps', 'cache', 'channel', 'channels', 'clear', 'clone',
  'code', 'connect', 'contact', 'deploy', 'design', 'drive', 'ease',
  'enable', 'express', 'fast', 'flow', 'focus', 'forms', 'frame',
  'groove', 'hive', 'impact', 'link', 'mail', 'mind', 'monitor',
  'motion', 'notes', 'notify', 'pages', 'plan', 'pop', 'present',
  'publish', 'pulse', 'relay', 'reports', 'schedule', 'scope',
  'sense', 'share', 'shift', 'show', 'simple', 'sketch', 'slate',
  'slides', 'snap', 'source', 'space', 'sphere', 'spotlight', 'stack',
  'stream', 'switch', 'tabs', 'taskmaster', 'teams', 'trigger',
  'update', 'vision', 'voice', 'word',
]);

const GENERIC_PHRASE_BAN = new Set([
  'software development', 'software engineering', 'project management',
  'data management', 'content management', 'information management',
  'knowledge management', 'document management', 'operating system',
  'operating systems', 'computer systems', 'application software',
]);

/**
 * Filter: only keep entries relevant to software/IT work. The O*NET list is
 * enormous and includes entries like "3M Post-it App" that add noise.
 */
function keepEntry(name, _commodityTitle) {
  const lower = name.toLowerCase().trim();
  // Reject obvious non-skills
  if (/^\d+[a-z]{0,3}$/i.test(lower)) return false;  // "3M", "24SevenOffice Project"
  if (lower.length < 2) return false;
  if (lower.length > 60) return false;
  // Skip entries with fluffy qualifiers
  if (/\bproject\b|\binitiative\b/i.test(name)) return false;
  // Drop single-word entries that are common English words / generic verbs
  const tokens = lower.split(/\s+/);
  if (tokens.length === 1 && GENERIC_SINGLE_WORD_BAN.has(lower)) return false;
  // Drop phrases that are too generic to be useful skill labels
  if (GENERIC_PHRASE_BAN.has(lower)) return false;
  return true;
}

/**
 * Map O*NET commodity titles to our coarse type labels.
 */
function commodityToType(commodityTitle) {
  const t = (commodityTitle || '').toLowerCase();
  if (t.includes('programming')) return 'language';
  if (t.includes('platform') || t.includes('operating system')) return 'platform';
  if (t.includes('database')) return 'database';
  if (t.includes('version control') || t.includes('configuration management')) return 'tool';
  if (t.includes('development environment') || t.includes('ide')) return 'tool';
  if (t.includes('framework')) return 'framework';
  if (t.includes('testing')) return 'tool';
  if (t.includes('analytics')) return 'tool';
  return 'tool';
}

async function main() {
  const args = parseArgs();

  if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });
  const zipPath = args.onetZip || join(CACHE_DIR, 'onet.zip');
  const extractDir = join(CACHE_DIR, 'onet');

  if (!existsSync(zipPath)) {
    if (!args.download) throw new Error(`O*NET zip missing at ${zipPath}. Re-run without --no-download.`);
    console.log(`Downloading O*NET from ${ONET_URL}…`);
    await download(ONET_URL, zipPath);
  }

  if (!existsSync(join(extractDir, 'db_29_0_text'))) {
    console.log(`Extracting to ${extractDir}…`);
    mkdirSync(extractDir, { recursive: true });
    unzip(zipPath, extractDir);
  }

  const base = join(extractDir, 'db_29_0_text');
  const techRows = parseTsv(join(base, 'Technology Skills.txt'));
  const toolRows = parseTsv(join(base, 'Tools Used.txt'));

  // Keep only IT/software occupations (SOC 15-*) — drops noise from unrelated jobs
  const itOnly = (rows) => rows.filter((r) => r['O*NET-SOC Code']?.startsWith('15-'));

  const skillsMap = new Map();  // canonical (lowercased) → {id, canonical, aliases, type, hot, sources}

  function upsert(rawName, commodityTitle, hot, source) {
    if (!rawName || !keepEntry(rawName, commodityTitle)) return;
    const { canonical, aliases } = nameToCanonicalAndAliases(rawName);
    if (!canonical || canonical.length < 2) return;
    // Apply ban to the canonical form (post-suffix-strip) — "Software
    // development tools" → "Software development" should trip the phrase ban.
    if (!keepEntry(canonical, commodityTitle)) return;
    const key = canonical.toLowerCase();
    const existing = skillsMap.get(key);
    if (existing) {
      for (const a of aliases) {
        if (!existing.aliases.includes(a)) existing.aliases.push(a);
      }
      existing.hot = existing.hot || hot;
      if (!existing.sources.includes(source)) existing.sources.push(source);
      return;
    }
    skillsMap.set(key, {
      id: slugify(canonical),
      canonical,
      aliases,
      type: commodityToType(commodityTitle),
      hot: !!hot,
      sources: [source],
    });
  }

  for (const row of itOnly(techRows)) {
    upsert(row['Example'], row['Commodity Title'], row['Hot Technology'] === 'Y', 'onet-tech');
  }
  for (const row of itOnly(toolRows)) {
    upsert(row['Example'], row['Commodity Title'], false, 'onet-tools');
  }

  // Merge emerging-tech allowlist (hand-curated JSON)
  const emergingPath = join(ROOT, 'data/skills/emerging.json');
  if (existsSync(emergingPath)) {
    const emerging = JSON.parse(readFileSync(emergingPath, 'utf8'));
    for (const s of (emerging.skills || [])) {
      const key = s.canonical.toLowerCase();
      const existing = skillsMap.get(key);
      if (existing) {
        for (const a of (s.aliases || [])) {
          if (!existing.aliases.includes(a)) existing.aliases.push(a);
        }
        if (!existing.sources.includes('emerging')) existing.sources.push('emerging');
        if (s.type) existing.type = s.type; // emerging takes precedence (better typed)
        if (s.hot) existing.hot = true;
        continue;
      }
      skillsMap.set(key, {
        id: slugify(s.canonical),
        canonical: s.canonical,
        aliases: s.aliases || [],
        type: s.type || 'tool',
        hot: !!s.hot,
        sources: ['emerging'],
      });
    }
  }

  // Output — sorted by canonical name for stable diffs
  const skills = [...skillsMap.values()].sort((a, b) =>
    a.canonical.localeCompare(b.canonical)
  );

  if (!existsSync(dirname(OUT_FILE))) mkdirSync(dirname(OUT_FILE), { recursive: true });
  writeFileSync(OUT_FILE, JSON.stringify({
    version: 1,
    generatedAt: new Date().toISOString(),
    sources: ['onet-29.0', 'resuml-emerging'],
    license: 'O*NET: public domain; emerging list: MIT (this repo)',
    count: skills.length,
    skills,
  }, null, 0));

  console.log(`✅ Wrote ${skills.length} skills → ${OUT_FILE}`);
  const byType = skills.reduce((acc, s) => { acc[s.type] = (acc[s.type] || 0) + 1; return acc; }, {});
  console.log('   Types:', byType);
  console.log('   Hot:', skills.filter((s) => s.hot).length);
  const size = (JSON.stringify(skills).length / 1024).toFixed(1);
  console.log(`   Size (uncompressed): ${size} KB`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
