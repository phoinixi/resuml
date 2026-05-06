import type { ResumeSchema } from '../../types/resume';
import type { CheckResult, AtsConfig } from '../types';
import { getLanguageData } from '../i18n/index';
import { computeYoeYears } from './yoe';

type CheckFn = (resume: ResumeSchema, language: string, cfg: AtsConfig) => CheckResult;

const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
const firstWord = (s: string) =>
  s.trim().split(/\s+/)[0]?.toLowerCase().replace(/[^a-zA-ZäöüßÄÖÜàáâãéèêëíìîïóòôõúùûüñç]/g, '') || '';

function isSenior(resume: ResumeSchema, cfg: AtsConfig): boolean {
  return computeYoeYears(resume.work) >= cfg.thresholds.seniorYoeCutoff;
}

export const summaryLength: CheckFn = (resume) => {
  const s = resume.basics?.summary?.trim();
  if (!s) {
    return { id: 'summary-length', tier: 'recruiter', weight: 'medium',
      status: 'fail', score: 0, message: 'No professional summary.',
      hints: ['Add a 2-4 sentence summary (20-50 words) to basics.summary.'] };
  }
  const w = wordCount(s);
  if (w >= 20 && w <= 50) {
    return { id: 'summary-length', tier: 'recruiter', weight: 'medium',
      status: 'pass', score: 100, message: `Summary length good (${w} words).`, hints: [] };
  }
  if (w >= 10 && w <= 80) {
    return { id: 'summary-length', tier: 'recruiter', weight: 'medium',
      status: 'warn', score: 70,
      message: `Summary ${w < 20 ? 'short' : 'long'} (${w} words). Aim for 20-50.`,
      hints: [w < 20 ? 'Expand to 20-50 words.' : 'Trim to the most impactful 20-50 words.'] };
  }
  return { id: 'summary-length', tier: 'recruiter', weight: 'medium',
    status: 'fail', score: Math.max(0, 100 - Math.abs(w - 35) * 2),
    message: `Summary length ${w} words is far from target.`,
    hints: ['Rewrite the summary in 2-4 sentences (20-50 words).'] };
};

export const actionVerbStart: CheckFn = (resume, language) => {
  const verbs = new Set(getLanguageData(language).actionVerbs);
  const all: { text: string; path: string }[] = [];
  (resume.work || []).forEach((w, i) => (w.highlights || []).forEach((h, j) =>
    all.push({ text: h, path: `work[${i}].highlights[${j}]` })));
  (resume.projects || []).forEach((p, i) => (p.highlights || []).forEach((h, j) =>
    all.push({ text: h, path: `projects[${i}].highlights[${j}]` })));
  if (all.length === 0) {
    return { id: 'action-verb-start', tier: 'recruiter', weight: 'medium',
      status: 'skipped', score: 0, message: 'No highlights.', hints: [] };
  }
  const without = all.filter((h) => !verbs.has(firstWord(h.text)));
  const passed = without.length === 0;
  return {
    id: 'action-verb-start', tier: 'recruiter', weight: 'medium',
    status: passed ? 'pass' : without.length / all.length > 0.3 ? 'fail' : 'warn',
    score: Math.round(((all.length - without.length) / all.length) * 100),
    message: passed
      ? 'All highlights start with action verbs.'
      : `${without.length} of ${all.length} highlights miss an action verb.`,
    hints: passed ? [] : without.slice(0, 3).map((h) => `${h.path}: start with an action verb instead of "${firstWord(h.text)}".`),
  };
};

const QUANT_RE = /\d+%?|\$[\d,]+|[\d,]+\+?\s*(users|clients|customers|people|team|members|projects|applications|servers|services|endpoints|requests|transactions)/i;

export const quantificationDensity: CheckFn = (resume) => {
  const all: { text: string; path: string }[] = [];
  (resume.work || []).forEach((w, i) => (w.highlights || []).forEach((h, j) =>
    all.push({ text: h, path: `work[${i}].highlights[${j}]` })));
  (resume.projects || []).forEach((p, i) => (p.highlights || []).forEach((h, j) =>
    all.push({ text: h, path: `projects[${i}].highlights[${j}]` })));
  if (all.length === 0) {
    return { id: 'quantification-density', tier: 'recruiter', weight: 'high',
      status: 'skipped', score: 0, message: 'No highlights.', hints: [] };
  }
  const quantified = all.filter((h) => QUANT_RE.test(h.text));
  const ratio = quantified.length / all.length;
  const status = ratio >= 0.5 ? 'pass' : ratio >= 0.3 ? 'warn' : 'fail';
  return {
    id: 'quantification-density', tier: 'recruiter', weight: 'high',
    status, score: Math.min(100, Math.round(ratio * 200)),
    message: `${quantified.length}/${all.length} highlights quantified (${Math.round(ratio * 100)}%).`,
    hints: status === 'pass' ? [] : all.filter((h) => !QUANT_RE.test(h.text)).slice(0, 3)
      .map((h) => `${h.path}: add a number/metric.`),
  };
};

export const pronounLeakage: CheckFn = (resume, language) => {
  const set = new Set(getLanguageData(language).pronouns);
  const blocks: { text: string; path: string }[] = [];
  if (resume.basics?.summary) blocks.push({ text: resume.basics.summary, path: 'basics.summary' });
  (resume.work || []).forEach((w, i) => {
    if (w.summary) blocks.push({ text: w.summary, path: `work[${i}].summary` });
    (w.highlights || []).forEach((h, j) => blocks.push({ text: h, path: `work[${i}].highlights[${j}]` }));
  });
  const hits: { pronoun: string; path: string }[] = [];
  for (const b of blocks) {
    for (const w of b.text.toLowerCase().split(/\s+/)) {
      const clean = w.replace(/[^a-zA-ZäöüßÄÖÜ]/g, '');
      if (set.has(clean)) hits.push({ pronoun: clean, path: b.path });
    }
  }
  const passed = hits.length === 0;
  return {
    id: 'pronoun-leakage', tier: 'recruiter', weight: 'low',
    status: passed ? 'pass' : hits.length > 3 ? 'fail' : 'warn',
    score: passed ? 100 : Math.max(0, 100 - hits.length * 15),
    message: passed
      ? 'No first-person pronouns.'
      : `${hits.length} pronoun(s): ${[...new Set(hits.map((h) => h.pronoun))].join(', ')}.`,
    hints: passed ? [] : hits.slice(0, 3).map((h) => `${h.path}: drop "${h.pronoun}" (convention, not ATS).`),
  };
};

export const bulletsPerRole: CheckFn = (resume, _l, cfg) => {
  const work = resume.work || [];
  if (work.length === 0) {
    return { id: 'bullets-per-role', tier: 'recruiter', weight: 'medium',
      status: 'skipped', score: 0, message: 'No work entries.', hints: [] };
  }
  const senior = isSenior(resume, cfg);
  const min = cfg.thresholds.bulletsPerRole.min;
  const max = senior ? cfg.thresholds.bulletsPerRole.seniorMax : cfg.thresholds.bulletsPerRole.max;
  const offenders: { path: string; n: number }[] = [];
  work.forEach((w, i) => {
    const n = (w.highlights || []).length;
    if (n < min || n > max) offenders.push({ path: `work[${i}]`, n });
  });
  const passed = offenders.length === 0;
  return {
    id: 'bullets-per-role', tier: 'recruiter', weight: 'medium',
    status: passed ? 'pass' : work.length === 1 ? 'warn' : offenders.length > work.length / 2 ? 'fail' : 'warn',
    score: Math.round(((work.length - offenders.length) / work.length) * 100),
    message: passed
      ? `All roles have ${min}-${max} highlights.`
      : `${offenders.length} role(s) outside ${min}-${max} highlights.`,
    hints: passed ? [] : offenders.slice(0, 3).map((o) => `${o.path}: ${o.n} highlights, target ${min}-${max}.`),
  };
};

export const wordCountTotal: CheckFn = (resume, _l, cfg) => {
  const senior = isSenior(resume, cfg);
  const min = cfg.thresholds.wordCount.min;
  const max = senior ? cfg.thresholds.wordCount.seniorMax : cfg.thresholds.wordCount.max;
  const parts: string[] = [];
  if (resume.basics?.summary) parts.push(resume.basics.summary);
  for (const w of resume.work || []) {
    if (w.summary) parts.push(w.summary);
    parts.push(...(w.highlights || []));
  }
  for (const p of resume.projects || []) {
    if (p.description) parts.push(p.description);
    parts.push(...(p.highlights || []));
  }
  const total = wordCount(parts.join(' '));
  const passed = total >= min && total <= max;
  const status = passed ? 'pass' : total < min * 0.7 || total > max * 1.5 ? 'fail' : 'warn';
  return {
    id: 'word-count-total', tier: 'recruiter', weight: 'low',
    status, score: passed ? 100 : Math.max(0, 100 - Math.round(Math.abs((total - (min + max) / 2)) / 10)),
    message: `Resume body: ${total} words (target ${min}-${max}${senior ? ', senior' : ''}).`,
    hints: passed ? [] : [total < min ? 'Add more depth to highlights.' : 'Trim less impactful highlights.'],
  };
};

export const highlightLength: CheckFn = (resume) => {
  const all: { text: string; path: string }[] = [];
  (resume.work || []).forEach((w, i) => (w.highlights || []).forEach((h, j) =>
    all.push({ text: h, path: `work[${i}].highlights[${j}]` })));
  if (all.length === 0) {
    return { id: 'highlight-length', tier: 'recruiter', weight: 'low',
      status: 'skipped', score: 0, message: 'No highlights.', hints: [] };
  }
  const long = all.filter((h) => wordCount(h.text) > 30);
  const passed = long.length === 0;
  return {
    id: 'highlight-length', tier: 'recruiter', weight: 'low',
    status: passed ? 'pass' : long.length / all.length > 0.3 ? 'fail' : 'warn',
    score: Math.round(((all.length - long.length) / all.length) * 100),
    message: passed
      ? 'All highlights at most 30 words.'
      : `${long.length} highlight(s) over 30 words.`,
    hints: passed ? [] : long.slice(0, 3).map((h) => `${h.path}: trim to 30 words or fewer.`),
  };
};

export const hasLinkedin: CheckFn = (resume) => {
  const profiles = resume.basics?.profiles || [];
  const found = profiles.some((p) => p.network?.toLowerCase() === 'linkedin' || p.url?.toLowerCase().includes('linkedin.com'));
  return {
    id: 'has-linkedin', tier: 'recruiter', weight: 'low',
    status: found ? 'pass' : 'warn', score: found ? 100 : 0,
    message: found ? 'LinkedIn profile present.' : 'No LinkedIn profile.',
    hints: found ? [] : ['Add a LinkedIn profile to basics.profiles.'],
  };
};

export const skillsPopulated: CheckFn = (resume) => {
  const skills = resume.skills || [];
  const withKeywords = skills.filter((s) => (s.keywords?.length ?? 0) > 0);
  const passed = withKeywords.length >= 3;
  return {
    id: 'skills-populated', tier: 'recruiter', weight: 'medium',
    status: passed ? 'pass' : withKeywords.length < 2 ? 'fail' : 'warn',
    score: Math.min(100, Math.round((withKeywords.length / 3) * 100)),
    message: passed
      ? `${withKeywords.length} skill categories with keywords.`
      : `Only ${withKeywords.length} skill categories with keywords (need 3+).`,
    hints: passed ? [] : ['Add at least 3 skill categories with keywords.'],
  };
};

export const allRecruiterChecks = [
  summaryLength, actionVerbStart, quantificationDensity, pronounLeakage,
  bulletsPerRole, wordCountTotal, highlightLength, hasLinkedin, skillsPopulated,
];
