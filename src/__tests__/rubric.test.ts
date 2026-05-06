import { describe, it, expect } from 'vitest';
import { rubric, getRubricEntry, listRubricMarkdown } from '../ats/rubric';

describe('rubric registry', () => {
  it('contains every check id used by tiers', () => {
    const ids = rubric.map((r) => r.id);
    expect(ids).toEqual(expect.arrayContaining([
      'conventional-sections', 'date-format-consistency', 'contact-in-body',
      'reverse-chron-order', 'education-complete',
      'pdf-text-extractable', 'pdf-size-under-2.5mb',
      'hard-skill-overlap', 'title-alignment', 'education-level', 'yoe-match',
      'summary-length', 'action-verb-start', 'quantification-density',
      'pronoun-leakage', 'bullets-per-role', 'word-count-total', 'highlight-length',
      'has-linkedin', 'skills-populated',
    ]));
  });

  it('marks pronoun-leakage as convention not evidence', () => {
    const entry = getRubricEntry('pronoun-leakage');
    expect(entry?.evidenceLevel).toBe('convention');
  });

  it('renders a markdown reference', () => {
    expect(listRubricMarkdown()).toContain('## Tier: parsing');
  });

  it('throws getRubricEntry for unknown id', () => {
    expect(() => getRubricEntry('bogus', { strict: true })).toThrow();
  });
});
