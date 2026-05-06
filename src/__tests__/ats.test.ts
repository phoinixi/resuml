/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { describe, it, expect } from 'vitest';
import { analyzeAts } from '../ats/index';
import { defaultConfig } from '../utils/config';
import type { ResumeSchema } from '../types/resume';

const resume: ResumeSchema = {
  basics: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+1-555-0100',
    location: { city: 'NYC' },
    summary:
      'Senior frontend tech lead with eight years building React platforms. Shipped accessibility wins at scale. Mentored teams over time.',
    profiles: [{ network: 'LinkedIn', url: 'https://linkedin.com/in/jane' }],
  },
  work: [
    {
      name: 'Co',
      position: 'Senior Frontend Engineer',
      startDate: '2020-01',
      highlights: [
        'Reduced load by 40%',
        'Built design system used by 5 teams',
        'Shipped a11y audit',
      ],
    },
  ],
  education: [
    {
      institution: 'U',
      area: 'CS',
      studyType: 'Bachelor of Science',
      startDate: '2014-09',
      endDate: '2018-06',
    },
  ],
  skills: [
    { name: 'Frontend', keywords: ['react', 'typescript'] },
    { name: 'Tooling', keywords: ['vite'] },
    { name: 'Testing', keywords: ['vitest'] },
  ],
};

function defaultConfigForTest() {
  return JSON.parse(JSON.stringify(defaultConfig));
}

describe('analyzeAts', () => {
  it('returns tiered shape without JD (match tier omitted)', () => {
    const r = analyzeAts(resume);
    expect(r.tiers.parsing).toBeDefined();
    expect(r.tiers.recruiter).toBeDefined();
    expect(r.tiers.match).toBeUndefined();
    expect(r.knockouts).toEqual([]);
    expect(r.score).toBeGreaterThan(0);
    expect(r.score).toBeLessThanOrEqual(100);
  });

  it('includes match tier when JD provided', () => {
    const r = analyzeAts(resume, {
      jobDescription: '3+ years of React + TypeScript. Bachelor required.',
    });
    expect(r.tiers.match).toBeDefined();
    expect(r.tiers.match!.checks.length).toBeGreaterThan(0);
  });

  it('emits knockout signals separately from scoring', () => {
    const r = analyzeAts(resume, { jobDescription: 'TS/SCI clearance required.' });
    expect(r.knockouts.length).toBeGreaterThan(0);
    expect(r.tiers.parsing.score).toBeGreaterThan(0);
  });

  it('honours config.disable to remove a check', () => {
    const r = analyzeAts(resume, {
      config: { ...defaultConfigForTest(), disable: ['has-linkedin'] },
    });
    const ids = r.tiers.recruiter.checks.map((c) => c.id);
    expect(ids).not.toContain('has-linkedin');
  });
});
