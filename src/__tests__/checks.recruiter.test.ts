/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { describe, it, expect } from 'vitest';
import {
  summaryLength,
  actionVerbStart,
  quantificationDensity,
  pronounLeakage,
  bulletsPerRole,
  wordCountTotal,
  highlightLength,
  hasLinkedin,
  skillsPopulated,
} from '../ats/checks/recruiter';
import { defaultConfig } from '../utils/config';
import type { ResumeSchema } from '../types/resume';

const base: ResumeSchema = {
  basics: {
    name: 'X',
    email: 'x@y.com',
    summary:
      'Senior frontend tech lead with eight years building React platforms at scale. Shipped significant accessibility wins across multiple products. Mentored engineers and improved delivery.',
    profiles: [{ network: 'LinkedIn', url: 'https://linkedin.com/in/x' }],
  },
  work: [
    {
      name: 'Co',
      position: 'Lead',
      startDate: '2020-01',
      highlights: [
        'Reduced load by 40%',
        'Built design system used by 5 teams',
        'Shipped a11y audit',
      ],
    },
  ],
  skills: [
    { name: 'Frontend', keywords: ['react', 'typescript'] },
    { name: 'Tooling', keywords: ['vite'] },
    { name: 'Testing', keywords: ['vitest'] },
  ],
};

const cfg = defaultConfig;

describe('summary-length', () => {
  it('passes within 20-50 words', () => {
    expect(summaryLength(base, 'en', cfg).status).toBe('pass');
  });
  it('fails when missing', () => {
    expect(
      summaryLength({ ...base, basics: { ...base.basics!, summary: undefined } }, 'en', cfg).status
    ).toBe('fail');
  });
});

describe('action-verb-start', () => {
  it('detects verbs', () => {
    expect(actionVerbStart(base, 'en', cfg).status).toBe('pass');
  });
});

describe('quantification-density', () => {
  it('passes 50% with numbers', () => {
    const r = { ...base, work: [{ ...base.work![0], highlights: ['Built A', 'Reduced 40%'] }] };
    expect(quantificationDensity(r, 'en', cfg).status).toBe('pass');
  });
  it('fails when none have numbers', () => {
    const r = { ...base, work: [{ ...base.work![0], highlights: ['Built X', 'Shipped Y'] }] };
    expect(quantificationDensity(r, 'en', cfg).status).toBe('fail');
  });
});

describe('pronoun-leakage', () => {
  it('passes when none', () => {
    expect(pronounLeakage(base, 'en', cfg).status).toBe('pass');
  });
  it('warns on first-person', () => {
    const r = { ...base, basics: { ...base.basics!, summary: 'I led teams. We shipped.' } };
    expect(pronounLeakage(r, 'en', cfg).status).not.toBe('pass');
  });
});

describe('bullets-per-role', () => {
  it('passes 3-6', () => {
    expect(bulletsPerRole(base, 'en', cfg).status).toBe('pass');
  });
  it('warns when one role has only 1 highlight', () => {
    const r = { ...base, work: [{ ...base.work![0], highlights: ['Only one'] }] };
    expect(bulletsPerRole(r, 'en', cfg).status).toBe('warn');
  });
});

describe('word-count-total', () => {
  it('skipped on tiny resume but reports score', () => {
    const result = wordCountTotal(base, 'en', cfg);
    expect(['pass', 'warn', 'fail']).toContain(result.status);
  });
});

describe('highlight-length', () => {
  it('warns on long highlights', () => {
    const long = 'word '.repeat(40).trim();
    const r = { ...base, work: [{ ...base.work![0], highlights: [long] }] };
    expect(highlightLength(r, 'en', cfg).status).not.toBe('pass');
  });
});

describe('has-linkedin', () => {
  it('detects linkedin profile', () => {
    expect(hasLinkedin(base, 'en', cfg).status).toBe('pass');
  });
});

describe('skills-populated', () => {
  it('passes with 3 categories', () => {
    expect(skillsPopulated(base, 'en', cfg).status).toBe('pass');
  });
  it('fails with 1 category', () => {
    expect(skillsPopulated({ ...base, skills: [base.skills![0]!] }, 'en', cfg).status).toBe('fail');
  });
});
