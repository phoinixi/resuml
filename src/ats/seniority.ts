import type { ResumeSchema } from '../types/resume';
import type { SeniorityLevel } from '../jobs/types';
import type { CheckStatus } from './types';
import { computeYoeYears } from './checks/yoe';

export const SENIORITY_ORDER: SeniorityLevel[] = [
  'intern',
  'junior',
  'mid',
  'senior',
  'staff',
  'principal',
];

const SENIORITY_PATTERNS: Array<{ level: SeniorityLevel; rx: RegExp }> = [
  { level: 'principal', rx: /\b(principal|distinguished|fellow)\b/i },
  { level: 'staff', rx: /\b(staff|architect|head\s+of|director|vp\b|chief)\b/i },
  { level: 'senior', rx: /\b(senior|sr\.?|lead|tech(?:nical)?\s*lead|tl\b|manager)\b/i },
  { level: 'mid', rx: /\b(mid|ii\b|iii\b|engineer\s*ii)\b/i },
  { level: 'junior', rx: /\b(junior|jr\.?|associate|entry)\b/i },
  { level: 'intern', rx: /\b(intern|trainee|apprentice)\b/i },
];

const MGMT_RE =
  /\b(engineering\s+manager|em\b|director|vp\s+of\s+engineering|head\s+of\s+engineering|chief)\b/i;

const YOE_RE = /\b(\d+)\s*\+?\s*(?:(?:to|[-–])\s*\d+\s*)?\s*years?\b/i;

export function detectSeniorityFromTitle(title: string): SeniorityLevel | null {
  for (const { level, rx } of SENIORITY_PATTERNS) {
    if (rx.test(title)) return level;
  }
  return null;
}

export function seniorityFromYoe(yoe: number): SeniorityLevel {
  if (yoe < 1) return 'junior';
  if (yoe < 3) return 'mid';
  if (yoe < 8) return 'senior';
  if (yoe < 12) return 'staff';
  return 'principal';
}

export function bandLabelToLevel(label: string): SeniorityLevel | null {
  const m = /^(IC|[LEM])(\d)$/i.exec(label);
  if (!m) return null;
  const prefix = (m[1] ?? '').toUpperCase();
  const num = parseInt(m[2] ?? '0', 10);
  if (prefix === 'L' || prefix === 'E') {
    const map: Partial<Record<number, SeniorityLevel>> = {
      3: 'junior', 4: 'mid', 5: 'senior', 6: 'staff', 7: 'principal',
    };
    return map[num] ?? null;
  }
  if (prefix === 'IC') {
    const map: Partial<Record<number, SeniorityLevel>> = {
      3: 'junior', 4: 'mid', 5: 'senior', 6: 'staff',
    };
    return map[num] ?? null;
  }
  if (prefix === 'M') {
    const map: Partial<Record<number, SeniorityLevel>> = {
      1: 'mid', 2: 'senior', 3: 'staff', 4: 'principal',
    };
    return map[num] ?? null;
  }
  return null;
}

function firstBandLabel(text: string): SeniorityLevel | null {
  for (const m of text.matchAll(/\b(IC|[LEM])(\d)\b/gi)) {
    const level = bandLabelToLevel(m[0]);
    if (level) return level;
  }
  return null;
}

export function extractJdSeniority(jd: string, jobTitle?: string): SeniorityLevel | null {
  // Signal 1: title modifier via keyword patterns
  if (jobTitle) {
    const fromTitle = detectSeniorityFromTitle(jobTitle);
    if (fromTitle) return fromTitle;
  }

  // Signal 2: body level strings, then band labels (title then body)
  for (const { level, rx } of SENIORITY_PATTERNS) {
    if (rx.test(jd)) return level;
  }

  if (jobTitle) {
    const fromBand = firstBandLabel(jobTitle);
    if (fromBand) return fromBand;
  }

  const fromBodyBand = firstBandLabel(jd);
  if (fromBodyBand) return fromBodyBand;

  // Signal 3: numeric YOE range
  const yoeMatch = YOE_RE.exec(jd);
  if (yoeMatch) {
    return seniorityFromYoe(parseInt(yoeMatch[1] ?? '0', 10));
  }

  return null;
}

export function extractCvSeniority(resume: ResumeSchema): SeniorityLevel {
  const yoe = computeYoeYears(resume.work);
  let level: SeniorityLevel = seniorityFromYoe(yoe);

  const titleCandidates = [
    ...(resume.work ?? []).map((w) => w.position ?? ''),
    resume.basics?.label ?? '',
  ].filter(Boolean);

  for (const title of titleCandidates) {
    const fromTitle = detectSeniorityFromTitle(title);
    if (fromTitle && SENIORITY_ORDER.indexOf(fromTitle) > SENIORITY_ORDER.indexOf(level)) {
      level = fromTitle;
    }
  }

  return level;
}

export function gapBetween(a: SeniorityLevel, b: SeniorityLevel): number {
  return Math.abs(SENIORITY_ORDER.indexOf(a) - SENIORITY_ORDER.indexOf(b));
}

export function scoreFromGap(gap: number): { score: number; status: CheckStatus } {
  if (gap === 0) return { score: 100, status: 'pass' };
  if (gap === 1) return { score: 90, status: 'pass' };
  if (gap === 2) return { score: 70, status: 'warn' };
  if (gap === 3) return { score: 40, status: 'warn' };
  return { score: 10, status: 'fail' };
}

export function isManagementRole(jobTitle: string, bodyFirstLines: string): boolean {
  return MGMT_RE.test(jobTitle) || MGMT_RE.test(bodyFirstLines);
}

export function isIcResume(resume: ResumeSchema): boolean {
  return !(resume.work ?? []).some((w) => MGMT_RE.test(w.position ?? ''));
}
