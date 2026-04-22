import type { ResumeSchema } from '../types/resume';
import type { AtsKeywordMatch } from './types';
import { getSkillIndex, type SkillMatch } from './skills';

/**
 * Extract text content from a resume for skill matching.
 */
function extractResumeText(resume: ResumeSchema): string {
  const parts: string[] = [];

  if (resume.basics?.summary) parts.push(resume.basics.summary);
  if (resume.basics?.label) parts.push(resume.basics.label);

  for (const w of resume.work || []) {
    if (w.position) parts.push(w.position);
    if (w.summary) parts.push(w.summary);
    parts.push(...(w.highlights || []));
  }
  for (const s of resume.skills || []) {
    if (s.name) parts.push(s.name);
    parts.push(...(s.keywords || []));
  }
  for (const p of resume.projects || []) {
    if (p.name) parts.push(p.name);
    if (p.description) parts.push(p.description);
    parts.push(...(p.highlights || []));
  }
  for (const e of resume.education || []) {
    if (e.area) parts.push(e.area);
    if (e.studyType) parts.push(e.studyType);
    parts.push(...(e.courses || []));
  }
  for (const c of resume.certificates || []) {
    if (c.name) parts.push(c.name);
  }

  return parts.join(' ');
}

/**
 * Split JD into sections and identify which contain the actual requirements.
 * Skills mentioned in requirement sections get prioritized over skills only
 * mentioned in the company-blurb / benefits sections.
 */
function splitJdSections(text: string): { requirementText: string; fullText: string } {
  const lines = text.split('\n');
  const reqPatterns = /^(required|requirements?|minimum|preferred|qualifications?|must[\s-]have|nice[\s-]to[\s-]have|what you.?ll|what we.?re looking|skills|technical|you.?ll need|responsibilities|you will)/i;
  const nonReqPatterns = /^(about|summary|who we are|our (company|team|mission)|description|overview|benefits|perks|compensation|salary)/i;

  let inReqSection = false;
  const reqLines: string[] = [];

  for (const line of lines) {
    const header = line.trim().replace(/[:#*-]/g, '').trim();
    if (reqPatterns.test(header)) inReqSection = true;
    else if (nonReqPatterns.test(header)) inReqSection = false;
    if (inReqSection) reqLines.push(line);
  }

  return {
    requirementText: reqLines.join('\n'),
    fullText: text,
  };
}

/**
 * Rank skills found in the JD. Gives precedence to skills that appear in
 * requirement sections, are flagged as "hot technologies" by O*NET, or
 * appear multiple times.
 */
interface RankedSkill {
  canonical: string;
  occurrences: number;
  inRequirementSection: boolean;
  hot: boolean;
  score: number;
}

function rankSkills(
  fullMatches: SkillMatch[],
  requirementMatches: SkillMatch[],
): RankedSkill[] {
  const reqIds = new Set(requirementMatches.map((m) => m.skill.id));
  return fullMatches.map((m) => {
    const inRequirementSection = reqIds.has(m.skill.id);
    const score =
      m.occurrences * 1.0 +
      (inRequirementSection ? 3.0 : 0) +
      (m.skill.hot ? 1.5 : 0);
    return {
      canonical: m.skill.canonical,
      occurrences: m.occurrences,
      inRequirementSection,
      hot: m.skill.hot,
      score,
    };
  }).sort((a, b) => {
    if (a.inRequirementSection !== b.inRequirementSection) return a.inRequirementSection ? -1 : 1;
    if (a.score !== b.score) return b.score - a.score;
    return a.canonical.localeCompare(b.canonical);
  });
}

/**
 * Match a job description against a resume using the bundled skills taxonomy.
 *
 * Extraction is positive-filter: only terms recognised as known skills surface
 * as keywords, so prose verbs ("actually", "ship", "move"), contractions
 * ("doesn't" → "doesn") and generic nouns never leak through.
 */
export function matchJobDescription(
  resume: ResumeSchema,
  jobDescription: string,
  _language: string = 'en',
): AtsKeywordMatch {
  if (!jobDescription.trim()) {
    return { matched: [], missing: [], extra: [], matchPercentage: 0 };
  }

  const skillIndex = getSkillIndex();

  // Extract skills from the full JD + requirement-only section
  const fullMatches = skillIndex.scan(jobDescription);
  const { requirementText } = splitJdSections(jobDescription);
  const requirementMatches = requirementText.trim()
    ? skillIndex.scan(requirementText)
    : fullMatches;

  // Rank and cap: top 25 most relevant skills, prioritising requirements + hot
  const ranked = rankSkills(fullMatches, requirementMatches).slice(0, 25);

  // Skills in the resume
  const resumeText = extractResumeText(resume);
  const resumeMatches = skillIndex.scan(resumeText);
  const resumeSkillIds = new Set(resumeMatches.map((m) => m.skill.id));

  const matched: string[] = [];
  const missing: string[] = [];
  for (const r of ranked) {
    // Find the skill object by canonical name to resolve id
    const match = fullMatches.find((m) => m.skill.canonical === r.canonical);
    if (!match) continue;
    if (resumeSkillIds.has(match.skill.id)) matched.push(r.canonical);
    else missing.push(r.canonical);
  }

  const matchPercentage = ranked.length > 0
    ? Math.round((matched.length / ranked.length) * 100)
    : 0;

  // Resume skills not referenced by the JD
  const jdSkillIds = new Set(fullMatches.map((m) => m.skill.id));
  const extra: string[] = [];
  for (const m of resumeMatches) {
    if (!jdSkillIds.has(m.skill.id)) extra.push(m.skill.canonical);
  }
  // Cap extras to avoid overwhelming the UI
  extra.splice(25);

  return { matched, missing, extra, matchPercentage };
}
