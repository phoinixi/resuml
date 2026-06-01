import type { ResumeSchema } from '../../types/resume';
import type { CheckResult, KnockoutSignal } from '../types';
import { matchJobDescription } from '../jdMatcher';
import { computeYoeYears } from './yoe';
import {
  classifyRoleFamily,
  classifySpecialty,
  resumeRoleText,
  resumeSpecialties,
} from '../roleFamily';

interface MatchOpts {
  jobDescription?: string;
  /** Posting title, when available separately from the body (e.g. job search). */
  jobTitle?: string;
}

type MatchCheckFn = (resume: ResumeSchema, language: string, opts: MatchOpts) => CheckResult;

const SENIORITY = /\b(junior|senior|lead|staff|principal|head of|vp|chief)\b/gi;
const STOPWORDS = new Set([
  'a',
  'an',
  'the',
  'of',
  'at',
  'for',
  'in',
  'on',
  'to',
  'with',
  'and',
  'or',
]);

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(SENIORITY, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w));
}

function jaccard(a: string[], b: string[]): number {
  const A = new Set(a),
    B = new Set(b);
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

function trimTitle(t: string): string {
  // Drop trailing ", X" or " - X" segments that bring company/team noise into Jaccard.
  return t
    .trim()
    .replace(/\s*[,\-–—]\s.*$/, '')
    .trim();
}

function extractJdTitle(jd: string): string | undefined {
  const lines = jd.split('\n').slice(0, 8);
  for (const l of lines) {
    const m =
      l.match(/(?:role|position|title)[\s:-]+(.+)/i) ||
      l.match(/looking for (?:an? )?(.+?)(?:\s+with|\s+to|$)/i);
    if (m?.[1]) return trimTitle(m[1]);
  }
  const fallback = lines.find((l) =>
    /\b(engineer|developer|manager|designer|analyst|scientist|architect|lead)\b/i.test(l)
  );
  return fallback ? trimTitle(fallback) : undefined;
}

export const titleAlignment: MatchCheckFn = (resume, _l, { jobDescription, jobTitle }) => {
  if (!jobDescription) {
    return {
      id: 'title-alignment',
      tier: 'match',
      weight: 'high',
      status: 'skipped',
      score: 0,
      message: 'No JD.',
      hints: [],
    };
  }
  const resumeTitle = resume.work?.[0]?.position || resume.basics?.label;
  // Prefer an explicitly-supplied posting title; fall back to mining the body.
  const jdTitle = jobTitle?.trim() ? trimTitle(jobTitle) : extractJdTitle(jobDescription);
  if (!resumeTitle || !jdTitle) {
    // Don't reward or punish on missing data — exclude from the tier score.
    return {
      id: 'title-alignment',
      tier: 'match',
      weight: 'high',
      status: 'skipped',
      score: 0,
      message: 'Could not extract a title from the JD or resume.',
      hints: ['Set basics.label to your target title, or supply the posting title.'],
    };
  }
  const j = jaccard(tokenize(resumeTitle), tokenize(jdTitle));
  const status = j >= 0.6 ? 'pass' : j >= 0.3 ? 'warn' : 'fail';
  return {
    id: 'title-alignment',
    tier: 'match',
    weight: 'high',
    status,
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
    return {
      id: 'education-level',
      tier: 'match',
      weight: 'medium',
      status: 'skipped',
      score: 0,
      message: 'No JD.',
      hints: [],
    };
  }
  const required = eduLevel(jobDescription);
  if (required === 0) {
    return {
      id: 'education-level',
      tier: 'match',
      weight: 'medium',
      status: 'skipped',
      score: 0,
      message: 'JD does not specify education level.',
      hints: [],
    };
  }
  const have = Math.max(0, ...(resume.education || []).map((e) => eduLevel(e.studyType || '')));
  const passed = have >= required;
  return {
    id: 'education-level',
    tier: 'match',
    weight: 'medium',
    status: passed ? 'pass' : 'fail',
    score: passed ? 100 : Math.round((have / required) * 100),
    message: `Resume level ${have}, JD required ${required}.`,
    hints: passed ? [] : ['JD requires a higher degree level than the resume reports.'],
  };
};

const YOE_RE = /(\d+)\s*(?:\+|[-–—]\s*\d+|to\s*\d+)?\s*years?/i;

export const yoeMatch: MatchCheckFn = (resume, _l, { jobDescription }) => {
  if (!jobDescription) {
    return {
      id: 'yoe-match',
      tier: 'match',
      weight: 'high',
      status: 'skipped',
      score: 0,
      message: 'No JD.',
      hints: [],
    };
  }
  const m = jobDescription.match(YOE_RE);
  if (!m) {
    return {
      id: 'yoe-match',
      tier: 'match',
      weight: 'high',
      status: 'skipped',
      score: 0,
      message: 'JD does not specify years requirement.',
      hints: [],
    };
  }
  const required = parseInt(m[1] ?? '0', 10);
  const have = Math.floor(computeYoeYears(resume.work || []));
  const status = have >= required ? 'pass' : have >= required - 1 ? 'warn' : 'fail';
  return {
    id: 'yoe-match',
    tier: 'match',
    weight: 'high',
    status,
    score: Math.min(100, Math.round((have / required) * 100)),
    message: `${have} YOE detected vs ${required} required.`,
    hints:
      status === 'pass' ? [] : ['Highlight relevant earlier roles or projects to fill the gap.'],
  };
};

export const hardSkillOverlap: MatchCheckFn = (resume, language, { jobDescription }) => {
  if (!jobDescription) {
    return {
      id: 'hard-skill-overlap',
      tier: 'match',
      weight: 'high',
      status: 'skipped',
      score: 0,
      message: 'No JD.',
      hints: [],
    };
  }
  const km = matchJobDescription(resume, jobDescription, language);
  const pct = km.matchPercentage;
  const status = pct >= 70 ? 'pass' : pct >= 50 ? 'warn' : 'fail';
  return {
    id: 'hard-skill-overlap',
    tier: 'match',
    weight: 'high',
    status,
    score: pct,
    message: `${km.matched.length}/${km.matched.length + km.missing.length} hard skills matched (${pct}%).`,
    hints:
      status === 'pass'
        ? []
        : km.missing.slice(0, 5).map((s) => `Add evidence of "${s}" to skills/highlights.`),
  };
};

/**
 * Occupation fit. Classifies the resume and the JD (title + body) into a coarse
 * role family and compares them. A hard mismatch (engineering resume vs a
 * recruiting role) is the single most important relevance signal and, unlike
 * the other checks, also caps the overall score in analyzeAts.
 */
export const roleFamilyMatch: MatchCheckFn = (resume, _l, { jobDescription, jobTitle }) => {
  if (!jobDescription) {
    return {
      id: 'role-family-match',
      tier: 'match',
      weight: 'high',
      status: 'skipped',
      score: 0,
      message: 'No JD.',
      hints: [],
    };
  }
  const jd = classifyRoleFamily(jobDescription, jobTitle ?? '');
  const cv = classifyRoleFamily(resumeRoleText(resume));
  if (!jd || !cv) {
    return {
      id: 'role-family-match',
      tier: 'match',
      weight: 'high',
      status: 'skipped',
      score: 0,
      message: 'Could not confidently classify the role family of the JD or resume.',
      hints: [],
    };
  }
  if (jd.family !== cv.family) {
    return {
      id: 'role-family-match',
      tier: 'match',
      weight: 'high',
      status: 'fail',
      score: 0,
      message: `Role mismatch: ${cv.family} resume vs ${jd.family} role.`,
      hints: [
        `This posting reads as a ${jd.family} role; your resume reads as ${cv.family}. Likely not a fit.`,
      ],
    };
  }

  // Same family — for engineering, also gate on sub-specialty. A Frontend
  // Architect is not an Application Security engineer even though both are
  // "engineering". Only fires when the JD title/body names a clear specialty
  // the resume doesn't evidence (fullstack ↔ frontend/backend treated as ok).
  if (cv.family === 'engineering') {
    const jdSpec = classifySpecialty(jobDescription, jobTitle ?? '');
    if (jdSpec) {
      const cvTopSpecs = resumeSpecialties(resume);
      // Penalize only when the resume has clear specialties and none is the one
      // the JD demands. A general-engineering resume (no clear specialty) isn't
      // penalized — it could plausibly fit.
      const satisfied = cvTopSpecs.length === 0 || cvTopSpecs.includes(jdSpec);
      if (!satisfied) {
        return {
          id: 'role-family-match',
          tier: 'match',
          weight: 'high',
          status: 'fail',
          score: 0,
          message: `Specialty mismatch: ${jdSpec} role, resume specializes in ${cvTopSpecs[0] ?? 'general engineering'}.`,
          hints: [
            `This is a ${jdSpec} engineering role; your resume doesn't show ${jdSpec} depth. Likely not a fit.`,
          ],
        };
      }
    }
  }

  return {
    id: 'role-family-match',
    tier: 'match',
    weight: 'high',
    status: 'pass',
    score: 100,
    message: `Role family aligned (${cv.family}).`,
    hints: [],
  };
};

export const allMatchChecks = [
  hardSkillOverlap,
  titleAlignment,
  roleFamilyMatch,
  educationLevel,
  yoeMatch,
];

interface KnockoutPattern {
  signal: string;
  jdPattern: RegExp;
  resumeMatch: (r: ResumeSchema, m: RegExpMatchArray) => boolean;
  recommendation: string;
}

const KNOCKOUTS: KnockoutPattern[] = [
  {
    signal: 'work-auth',
    jdPattern:
      /(work\s*auth|authorization to work|right to work|us citizen|green card|h-?1b|visa sponsorship)/i,
    resumeMatch: (r) =>
      /(work auth|authorized|citizen|green card|visa)/i.test(r.basics?.summary || ''),
    recommendation: 'Confirm authorization status in the application form.',
  },
  {
    signal: 'location',
    jdPattern: /(must be located|on-?site|relocate|based in)\s+([a-zA-Z ,]+)/i,
    resumeMatch: (r, m) => {
      const jdLoc = (m[2] ?? '').toLowerCase().trim();
      const resumeCity = (r.basics?.location?.city ?? '').toLowerCase().trim();
      if (!jdLoc || !resumeCity) return false;
      return jdLoc.includes(resumeCity) || resumeCity.includes(jdLoc.split(/[, ]+/)[0] ?? '');
    },
    recommendation: 'Verify location requirement against your basics.location.city.',
  },
  {
    signal: 'clearance',
    jdPattern: /(ts\/sci|secret clearance|security clearance|active clearance)/i,
    resumeMatch: (r) => /clearance/i.test(JSON.stringify(r)),
    recommendation: 'Confirm clearance level on the application form.',
  },
  {
    signal: 'certification',
    jdPattern: /(cissp|aws certified|pmp|ccna|cpa|required certification)/i,
    resumeMatch: (r) => (r.certificates?.length ?? 0) > 0,
    recommendation: 'List required certificates in the certificates section if held.',
  },
];

export function extractKnockouts(resume: ResumeSchema, jobDescription: string): KnockoutSignal[] {
  const out: KnockoutSignal[] = [];
  for (const k of KNOCKOUTS) {
    const m = jobDescription.match(k.jdPattern);
    if (!m) continue;
    if (k.resumeMatch(resume, m)) continue;
    out.push({
      signal: k.signal,
      evidence: `JD: "${m[0]}"; resume silent.`,
      recommendation: k.recommendation,
    });
  }
  return out;
}
