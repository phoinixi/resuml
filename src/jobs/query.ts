import type { ResumeSchema } from '../types/resume';
import { getSkillIndex } from '../ats/skills/index';
import type { SearchQuery, SeniorityLevel } from './types';
import {
  detectSeniorityFromTitle,
  seniorityFromYoe,
  SENIORITY_ORDER,
} from '../ats/seniority';

function maxSeniority(a: SeniorityLevel, b: SeniorityLevel): SeniorityLevel {
  return SENIORITY_ORDER.indexOf(a) > SENIORITY_ORDER.indexOf(b) ? a : b;
}

function parseDate(raw?: string): Date | null {
  if (!raw) return null;
  const d = new Date(raw);
  return isNaN(d.getTime()) ? null : d;
}

function computeYearsExperience(resume: ResumeSchema): number {
  const now = new Date();
  let totalMs = 0;
  for (const w of resume.work ?? []) {
    const start = parseDate(w.startDate);
    if (!start) continue;
    const end = parseDate(w.endDate) ?? now;
    if (end <= start) continue;
    totalMs += end.getTime() - start.getTime();
  }
  return Math.round((totalMs / (1000 * 60 * 60 * 24 * 365.25)) * 10) / 10;
}

function extractResumeText(resume: ResumeSchema): string {
  const parts: string[] = [];
  if (resume.basics?.summary) parts.push(resume.basics.summary);
  if (resume.basics?.label) parts.push(resume.basics.label);
  for (const w of resume.work ?? []) {
    if (w.position) parts.push(w.position);
    if (w.summary) parts.push(w.summary);
    parts.push(...(w.highlights ?? []));
  }
  for (const s of resume.skills ?? []) {
    if (s.name) parts.push(s.name);
    parts.push(...(s.keywords ?? []));
  }
  for (const p of resume.projects ?? []) {
    if (p.name) parts.push(p.name);
    if (p.description) parts.push(p.description);
    parts.push(...(p.highlights ?? []));
    parts.push(...(p.keywords ?? []));
  }
  return parts.join(' ');
}

/**
 * Derive a search query from the resume. Pure function — no IO.
 *
 * Top skills come from the bundled O*NET skill index (same one the ATS
 * matcher uses), ranked by occurrence and the "hot" flag. Seniority is the
 * max of explicit title evidence and a YOE-derived heuristic so a resume
 * with a short tenure but a "Senior" title still maps to senior roles.
 */
export function deriveSearchQuery(
  resume: ResumeSchema,
  overrides: { remoteOnly?: boolean } = {}
): SearchQuery {
  const text = extractResumeText(resume);
  const matches = getSkillIndex().scan(text);
  const skills = matches.slice(0, 15).map((m) => m.skill.canonical);

  const titles = (resume.work ?? [])
    .map((w) => w.position)
    .filter((p): p is string => typeof p === 'string' && p.length > 0);

  const yoe = computeYearsExperience(resume);
  let seniority: SeniorityLevel = seniorityFromYoe(yoe);
  for (const title of titles) {
    const fromTitle = detectSeniorityFromTitle(title);
    if (fromTitle) seniority = maxSeniority(seniority, fromTitle);
  }
  if (resume.basics?.label) {
    const fromLabel = detectSeniorityFromTitle(resume.basics.label);
    if (fromLabel) seniority = maxSeniority(seniority, fromLabel);
  }

  const city = resume.basics?.location?.city;
  const countryCode = resume.basics?.location?.countryCode;

  const headTitle = titles[0] ?? resume.basics?.label ?? '';
  const terms = Array.from(
    new Set(
      [headTitle, ...skills.slice(0, 5)]
        .filter(Boolean)
        .map((t) => t.toLowerCase())
        .flatMap((t) => t.split(/\s+/))
        .filter((t) => t.length > 2)
    )
  );

  return {
    skills,
    seniority,
    yearsExperience: yoe,
    titles,
    city,
    countryCode,
    remoteOnly: overrides.remoteOnly ?? false,
    terms,
  };
}
