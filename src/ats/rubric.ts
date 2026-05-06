import type { RubricEntry, Tier } from './types';

export const rubric: RubricEntry[] = [
  // Parsing tier - Greenhouse-doc-grounded
  {
    id: 'conventional-sections',
    tier: 'parsing',
    weight: 'high',
    evidenceLevel: 'evidence',
    description: 'Required JSON Resume sections (basics, work, education) are present.',
    source: 'https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse',
  },
  {
    id: 'date-format-consistency',
    tier: 'parsing',
    weight: 'medium',
    evidenceLevel: 'evidence',
    description: 'Dates use ISO-8601 (YYYY-MM-DD or YYYY-MM); no mixed formats; no >6mo gaps.',
    source: 'https://hireflow.net/blog/taleo-resume-parsing-problems-explained',
  },
  {
    id: 'contact-in-body',
    tier: 'parsing',
    weight: 'high',
    evidenceLevel: 'evidence',
    description: 'Email and phone present in basics block (parseable by Textkernel/Sovren).',
    source: 'https://developer.textkernel.com/tx-platform/v10/faq/',
  },
  {
    id: 'reverse-chron-order',
    tier: 'parsing',
    weight: 'medium',
    evidenceLevel: 'evidence',
    description: 'work[] and education[] sorted descending by startDate.',
  },
  {
    id: 'education-complete',
    tier: 'parsing',
    weight: 'low',
    evidenceLevel: 'evidence',
    description: 'Each education entry has institution, area, and studyType.',
  },
  {
    id: 'pdf-text-extractable',
    tier: 'parsing',
    weight: 'high',
    evidenceLevel: 'evidence',
    description: 'Rendered PDF body text is selectable (>=70% of resume word count extractable).',
    source: 'https://www.ashbyhq.com/product-updates/ai-assisted-application-review',
  },
  {
    id: 'pdf-size-under-2.5mb',
    tier: 'parsing',
    weight: 'medium',
    evidenceLevel: 'evidence',
    description: 'Rendered PDF is under 2.5 MB (Greenhouse documented limit).',
    source: 'https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse',
  },

  // Match tier - JD-aware
  {
    id: 'hard-skill-overlap',
    tier: 'match',
    weight: 'high',
    evidenceLevel: 'evidence',
    description:
      'Hard skill overlap with JD using bundled O*NET-trie skill index. ESCO migration tracked separately.',
  },
  {
    id: 'title-alignment',
    tier: 'match',
    weight: 'high',
    evidenceLevel: 'evidence',
    description:
      'Most-recent work[].position aligns with JD title via token Jaccard after stripping seniority modifiers.',
  },
  {
    id: 'education-level',
    tier: 'match',
    weight: 'medium',
    evidenceLevel: 'evidence',
    description:
      'Max studyType meets/exceeds JD education requirement (Bachelor/Master/PhD detection).',
  },
  {
    id: 'yoe-match',
    tier: 'match',
    weight: 'high',
    evidenceLevel: 'evidence',
    description:
      'Total years of experience (overlap-merged from work[]) meets JD years requirement.',
  },

  // Recruiter tier - Rezi/Teal/Enhancv-grounded numbers
  {
    id: 'summary-length',
    tier: 'recruiter',
    weight: 'medium',
    evidenceLevel: 'convention',
    description: 'Professional summary 20-50 words / 2-4 sentences.',
    source: 'https://www.rezi.ai/rezi-docs/the-rezi-score-explained',
  },
  {
    id: 'action-verb-start',
    tier: 'recruiter',
    weight: 'medium',
    evidenceLevel: 'convention',
    description: 'Highlights start with an action verb.',
  },
  {
    id: 'quantification-density',
    tier: 'recruiter',
    weight: 'high',
    evidenceLevel: 'convention',
    description: 'At least 50% of highlights include numbers/metrics.',
  },
  {
    id: 'pronoun-leakage',
    tier: 'recruiter',
    weight: 'low',
    evidenceLevel: 'convention',
    description: 'Convention, not ATS: ATS does not filter on pronouns; this is recruiter style.',
    source: 'https://resume.io/blog/first-person-resume',
  },
  {
    id: 'bullets-per-role',
    tier: 'recruiter',
    weight: 'medium',
    evidenceLevel: 'convention',
    description: 'Each work entry has 3-6 highlights (10 for senior).',
    source: 'https://www.rezi.ai/rezi-docs/the-rezi-score-explained',
  },
  {
    id: 'word-count-total',
    tier: 'recruiter',
    weight: 'low',
    evidenceLevel: 'convention',
    description: 'Total resume body 400-800 words (1600 senior).',
    source: 'https://www.rezi.ai/rezi-docs/the-rezi-score-explained',
  },
  {
    id: 'highlight-length',
    tier: 'recruiter',
    weight: 'low',
    evidenceLevel: 'convention',
    description: 'Each highlight fits within two visual lines (~30 words).',
  },
  {
    id: 'has-linkedin',
    tier: 'recruiter',
    weight: 'low',
    evidenceLevel: 'convention',
    description: 'LinkedIn profile present in basics.profiles.',
  },
  {
    id: 'skills-populated',
    tier: 'recruiter',
    weight: 'medium',
    evidenceLevel: 'convention',
    description: 'At least 3 skill categories with keywords.',
  },
];

const byId: Map<string, RubricEntry> = new Map(rubric.map((r) => [r.id, r]));

export function getRubricEntry(
  id: string,
  opts: { strict?: boolean } = {}
): RubricEntry | undefined {
  const entry = byId.get(id);
  if (!entry && opts.strict) throw new Error(`Unknown rubric id: ${id}`);
  return entry;
}

export function rubricByTier(tier: Tier): RubricEntry[] {
  return rubric.filter((r) => r.tier === tier);
}

export function listRubricMarkdown(): string {
  const tiers: Tier[] = ['parsing', 'match', 'recruiter'];
  const sections = tiers.map((t) => {
    const entries = rubricByTier(t);
    const lines = entries
      .map(
        (e) =>
          `- **${e.id}** (${e.weight}, ${e.evidenceLevel}): ${e.description}${e.source ? `\n  Source: ${e.source}` : ''}`
      )
      .join('\n');
    return `## Tier: ${t}\n\n${lines}`;
  });
  return ['# resuml ATS Rubric', '', ...sections].join('\n\n');
}
