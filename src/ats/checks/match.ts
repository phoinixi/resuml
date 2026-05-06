import type { ResumeSchema } from '../../types/resume';
import type { CheckResult } from '../types';
import { matchJobDescription } from '../jdMatcher';
import { computeYoeYears } from './yoe';

interface MatchOpts { jobDescription?: string }

type MatchCheckFn = (resume: ResumeSchema, language: string, opts: MatchOpts) => CheckResult;

const SENIORITY = /\b(junior|senior|lead|staff|principal|head of|vp|chief)\b/gi;
const STOPWORDS = new Set(['a','an','the','of','at','for','in','on','to','with','and','or']);

function tokenize(s: string): string[] {
  return s.toLowerCase().replace(SENIORITY, '').replace(/[^a-z0-9 ]/g, ' ')
    .split(/\s+/).filter((w) => w && !STOPWORDS.has(w));
}

function jaccard(a: string[], b: string[]): number {
  const A = new Set(a), B = new Set(b);
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

function extractJdTitle(jd: string): string | undefined {
  const lines = jd.split('\n').slice(0, 8);
  for (const l of lines) {
    const m = l.match(/(?:role|position|title)[\s:-]+(.+)/i) || l.match(/looking for (?:an? )?(.+?)(?:\s+with|\s+to|$)/i);
    if (m) return m[1]!.trim();
  }
  return lines.find((l) => /\b(engineer|developer|manager|designer|analyst|scientist|architect|lead)\b/i.test(l))?.trim();
}

export const titleAlignment: MatchCheckFn = (resume, _l, { jobDescription }) => {
  if (!jobDescription) {
    return { id: 'title-alignment', tier: 'match', weight: 'high', status: 'skipped', score: 0, message: 'No JD.', hints: [] };
  }
  const resumeTitle = resume.work?.[0]?.position || resume.basics?.label;
  const jdTitle = extractJdTitle(jobDescription);
  if (!resumeTitle || !jdTitle) {
    return { id: 'title-alignment', tier: 'match', weight: 'high', status: 'warn', score: 50,
      message: 'Could not extract title from JD or resume.',
      hints: ['Set basics.label to your target title.'] };
  }
  const j = jaccard(tokenize(resumeTitle), tokenize(jdTitle));
  const status = j >= 0.6 ? 'pass' : j >= 0.3 ? 'warn' : 'fail';
  return {
    id: 'title-alignment', tier: 'match', weight: 'high', status,
    score: Math.round(j * 100),
    message: `Title overlap ${Math.round(j * 100)}% (resume "${resumeTitle}" vs JD "${jdTitle}").`,
    hints: status === 'pass' ? [] : [`Consider aligning basics.label closer to "${jdTitle}".`],
  };
};

const EDU_RE = {
  3: /\b(phd|ph\.?d|doctorate|doctoral)\b/i,
  2: /\b(master|m\.?s|m\.?a|mba|graduate degree)\b/i,
  1: /\b(bachelor|b\.?s|b\.?a|undergraduate)\b/i,
} as const;

function eduLevel(text: string): number {
  if (!text) return 0;
  if (EDU_RE[3].test(text)) return 3;
  if (EDU_RE[2].test(text)) return 2;
  if (EDU_RE[1].test(text)) return 1;
  return 0;
}

export const educationLevel: MatchCheckFn = (resume, _l, { jobDescription }) => {
  if (!jobDescription) {
    return { id: 'education-level', tier: 'match', weight: 'medium', status: 'skipped', score: 0, message: 'No JD.', hints: [] };
  }
  const required = eduLevel(jobDescription);
  if (required === 0) {
    return { id: 'education-level', tier: 'match', weight: 'medium', status: 'skipped', score: 0,
      message: 'JD does not specify education level.', hints: [] };
  }
  const have = Math.max(0, ...(resume.education || []).map((e) => eduLevel(e.studyType || '')));
  const passed = have >= required;
  return {
    id: 'education-level', tier: 'match', weight: 'medium',
    status: passed ? 'pass' : 'fail',
    score: passed ? 100 : Math.round((have / required) * 100),
    message: `Resume level ${have}, JD required ${required}.`,
    hints: passed ? [] : ['JD requires a higher degree level than the resume reports.'],
  };
};

const YOE_RE = /(\d+)\s*(?:\+|[-–—]\s*\d+|to\s*\d+)?\s*years?/i;

export const yoeMatch: MatchCheckFn = (resume, _l, { jobDescription }) => {
  if (!jobDescription) {
    return { id: 'yoe-match', tier: 'match', weight: 'high', status: 'skipped', score: 0, message: 'No JD.', hints: [] };
  }
  const m = jobDescription.match(YOE_RE);
  if (!m) {
    return { id: 'yoe-match', tier: 'match', weight: 'high', status: 'skipped', score: 0,
      message: 'JD does not specify years requirement.', hints: [] };
  }
  const required = parseInt(m[1]!, 10);
  const have = Math.floor(computeYoeYears(resume.work || []));
  const status = have >= required ? 'pass' : have >= required - 1 ? 'warn' : 'fail';
  return {
    id: 'yoe-match', tier: 'match', weight: 'high', status,
    score: Math.min(100, Math.round((have / required) * 100)),
    message: `${have} YOE detected vs ${required} required.`,
    hints: status === 'pass' ? [] : ['Highlight relevant earlier roles or projects to fill the gap.'],
  };
};

export const hardSkillOverlap: MatchCheckFn = (resume, language, { jobDescription }) => {
  if (!jobDescription) {
    return { id: 'hard-skill-overlap', tier: 'match', weight: 'high', status: 'skipped', score: 0, message: 'No JD.', hints: [] };
  }
  const km = matchJobDescription(resume, jobDescription, language);
  const pct = km.matchPercentage;
  const status = pct >= 70 ? 'pass' : pct >= 50 ? 'warn' : 'fail';
  return {
    id: 'hard-skill-overlap', tier: 'match', weight: 'high', status,
    score: pct,
    message: `${km.matched.length}/${km.matched.length + km.missing.length} hard skills matched (${pct}%).`,
    hints: status === 'pass' ? [] : km.missing.slice(0, 5).map((s) => `Add evidence of "${s}" to skills/highlights.`),
  };
};

export const allMatchChecks = [
  hardSkillOverlap, titleAlignment, educationLevel, yoeMatch,
];
