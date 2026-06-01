import type { ResumeSchema } from '../types/resume';

/**
 * Coarse occupation classification. The ATS match tier otherwise measures
 * keyword overlap and resume hygiene, which lets a well-formatted engineering
 * resume score "good" against, say, a Technical Recruiter role just because the
 * JD mentions "engineering" a lot. Classifying both sides into a role family
 * and comparing them is the missing relevance signal.
 */
export type RoleFamily =
  | 'engineering'
  | 'data'
  | 'design'
  | 'product'
  | 'recruiting'
  | 'sales'
  | 'marketing'
  | 'legal'
  | 'finance'
  | 'support'
  | 'operations';

/**
 * Substring signatures per family. Substring (not word-boundary) matching is
 * deliberate so "engineers"/"engineering" both count toward engineering. The
 * classifier relies on volume: a recruiting JD saturates recruiting terms even
 * when it mentions engineering repeatedly, so recruiting still wins.
 */
const SIGNATURES: Record<RoleFamily, string[]> = {
  engineering: [
    'software engineer',
    'engineer',
    'developer',
    'programmer',
    'swe',
    'backend',
    'back-end',
    'frontend',
    'front-end',
    'full stack',
    'full-stack',
    'devops',
    'sre',
    'site reliability',
    'software development',
    'microservices',
    'codebase',
  ],
  data: [
    'data scientist',
    'data engineer',
    'machine learning',
    'ml engineer',
    'data analyst',
    'analytics engineer',
    'mlops',
  ],
  design: [
    'designer',
    'ux ',
    'ui designer',
    'product design',
    'graphic design',
    'visual design',
    'user research',
  ],
  product: ['product manager', 'product owner', 'program manager', 'product management'],
  recruiting: [
    'recruiter',
    'recruiting',
    'recruitment',
    'talent acquisition',
    'sourcer',
    'sourcing',
    'full-cycle recruiting',
    'candidate experience',
    'hiring manager',
    'people ops',
    'human resources',
  ],
  sales: [
    'account executive',
    'business development',
    'sales development',
    'sales representative',
    'quota',
    'sdr',
    'bdr',
  ],
  marketing: [
    'marketing',
    'growth marketing',
    'demand generation',
    'content marketing',
    'brand manager',
    'seo',
  ],
  legal: ['legal counsel', 'attorney', 'paralegal', 'lawyer', 'litigation', 'general counsel'],
  finance: ['accountant', 'accounting', 'controller', 'fp&a', 'financial analyst', 'bookkeeping'],
  support: [
    'customer support',
    'customer success',
    'support specialist',
    'technical support',
    'help desk',
  ],
  operations: ['operations manager', 'business operations', 'supply chain', 'logistics'],
};

const FAMILIES = Object.keys(SIGNATURES) as RoleFamily[];

function countOccurrences(haystack: string, needle: string): number {
  let count = 0;
  let idx = haystack.indexOf(needle);
  while (idx !== -1) {
    count++;
    idx = haystack.indexOf(needle, idx + needle.length);
  }
  return count;
}

export interface RoleFamilyResult {
  family: RoleFamily;
  score: number;
  /** Margin over the runner-up family. */
  margin: number;
}

/**
 * Classify text into a role family. `title` matches are weighted ×3 because a
 * job/role title is far more diagnostic than body prose.
 *
 * Returns null when no family clears a confidence bar (top score < 2 or it
 * doesn't beat the runner-up) — better to abstain than to force a label.
 */
export function classifyRoleFamily(body: string, title = ''): RoleFamilyResult | null {
  const b = body.toLowerCase();
  const t = title.toLowerCase();

  const scores = FAMILIES.map((family) => {
    let score = 0;
    for (const sig of SIGNATURES[family]) {
      score += countOccurrences(b, sig);
      score += countOccurrences(t, sig) * 3;
    }
    return { family, score };
  }).sort((a, b2) => b2.score - a.score);

  const top = scores[0];
  const second = scores[1];
  if (!top || top.score < 2) return null;
  const margin = top.score - (second?.score ?? 0);
  if (margin < 1) return null;

  return { family: top.family, score: top.score, margin };
}

/**
 * Engineering sub-specialty. "Software engineer" is too coarse: a Frontend
 * Architect and a Security Software Engineer are both `engineering` but are not
 * interchangeable. When a JD's title clearly demands one specialty the resume
 * doesn't evidence, that's a mismatch.
 */
export type Specialty =
  | 'frontend'
  | 'backend'
  | 'security'
  | 'ml'
  | 'mobile'
  | 'devops'
  | 'data'
  | 'embedded'
  | 'qa';

const SPECIALTY_SIGNATURES: Record<Specialty, string[]> = {
  frontend: ['frontend', 'front-end', 'front end', 'react', 'vue', 'angular', 'css', 'ui engineer', 'web developer', 'design system'],
  backend: ['backend', 'back-end', 'back end', 'server-side', 'microservices', 'api development', 'distributed systems'],
  security: ['security', 'appsec', 'application security', 'infosec', 'penetration', 'vulnerability', 'secure coding', 'cryptography', 'threat'],
  ml: ['machine learning', 'ml engineer', 'deep learning', 'nlp', 'computer vision', 'ai engineer', 'pytorch', 'tensorflow'],
  mobile: ['ios engineer', 'android engineer', 'mobile engineer', 'swift', 'kotlin', 'react native', 'flutter'],
  devops: ['devops', 'sre', 'site reliability', 'platform engineer', 'kubernetes', 'terraform', 'infrastructure engineer'],
  data: ['data engineer', 'etl', 'data pipeline', 'spark', 'hadoop', 'data warehouse'],
  embedded: ['embedded', 'firmware', 'rtos', 'microcontroller', 'bare metal'],
  qa: ['qa engineer', 'test engineer', 'sdet', 'automation testing', 'quality assurance'],
};

const SPECIALTIES = Object.keys(SPECIALTY_SIGNATURES) as Specialty[];

/** Single dominant specialty in text (title weighted ×3), or null if unclear. */
export function classifySpecialty(body: string, title = ''): Specialty | null {
  const b = body.toLowerCase();
  const t = title.toLowerCase();
  const scores = SPECIALTIES.map((sp) => {
    let score = 0;
    for (const sig of SPECIALTY_SIGNATURES[sp]) {
      score += countOccurrences(b, sig);
      score += countOccurrences(t, sig) * 3;
    }
    return { sp, score };
  }).sort((a, b2) => b2.score - a.score);
  const top = scores[0];
  const second = scores[1];
  if (!top || top.score < 2) return null;
  if (top.score - (second?.score ?? 0) < 1) return null;
  return top.sp;
}

/**
 * Return the resume's dominant specialties by score margin, in descending score order.
 *
 * Constants (verified against sparse-CV edge case: topScore=4, margin=min(3,max(2,1))=2,
 * threshold=2 -- a runner-up with score=1 is excluded, while topScore=4 itself qualifies):
 *   SPECIALTY_MIN_SCORE   = 4   -- minimum raw score to claim any specialty
 *   TOP_MARGIN_FACTOR     = 0.5 -- relative margin fraction
 *   SPECIALTY_ABS_MARGIN  = 3   -- absolute cap on margin
 */
const SPECIALTY_MIN_SCORE = 4;
const TOP_MARGIN_FACTOR = 0.5;
const SPECIALTY_ABS_MARGIN = 3;

export function resumeSpecialties(resume: ResumeSchema): Specialty[] {
  const text = resumeRoleText(resume).toLowerCase();
  const scored = SPECIALTIES.map((sp) => {
    let score = 0;
    for (const sig of SPECIALTY_SIGNATURES[sp]) score += countOccurrences(text, sig);
    return { sp, score };
  }).sort((a, b) => b.score - a.score);

  const top = scored[0];
  if (!top || top.score < SPECIALTY_MIN_SCORE) return [];

  const margin = Math.min(SPECIALTY_ABS_MARGIN, Math.max(TOP_MARGIN_FACTOR * top.score, 1));
  const threshold = top.score - margin;

  return scored.filter((s) => s.score >= threshold).map((s) => s.sp);
}

/** Concatenate the role-bearing text of a resume for classification. */
export function resumeRoleText(resume: ResumeSchema): string {
  const parts: string[] = [];
  if (resume.basics?.label) parts.push(resume.basics.label);
  if (resume.basics?.summary) parts.push(resume.basics.summary);
  for (const w of resume.work ?? []) {
    if (w.position) parts.push(w.position);
    if (w.summary) parts.push(w.summary);
    parts.push(...(w.highlights ?? []));
  }
  for (const s of resume.skills ?? []) {
    if (s.name) parts.push(s.name);
    parts.push(...(s.keywords ?? []));
  }
  return parts.join(' ');
}
