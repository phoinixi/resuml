import { describe, it, expect } from 'vitest';
import { deriveSearchQuery } from '../../jobs/query';
import type { ResumeSchema } from '../../types/resume';

const baseResume: ResumeSchema = {
  basics: {
    name: 'Jane Doe',
    label: 'Senior Frontend Engineer',
    location: { city: 'Berlin', countryCode: 'DE' },
    summary: 'React and TypeScript specialist building design systems.',
  },
  work: [
    {
      name: 'Acme',
      position: 'Senior Frontend Engineer',
      startDate: '2018-01-01',
      endDate: '2024-12-31',
      highlights: ['Built design system in React and TypeScript using Vite'],
    },
  ],
  skills: [{ name: 'Frontend', keywords: ['React', 'TypeScript', 'Vite'] }],
};

describe('deriveSearchQuery', () => {
  it('extracts top skills from the resume', () => {
    const q = deriveSearchQuery(baseResume);
    expect(q.skills.length).toBeGreaterThan(0);
    expect(q.skills.some((s) => /react/i.test(s))).toBe(true);
  });

  it('derives seniority from title evidence', () => {
    const q = deriveSearchQuery(baseResume);
    expect(['senior', 'staff', 'principal']).toContain(q.seniority);
  });

  it('respects remoteOnly override', () => {
    const q = deriveSearchQuery(baseResume, { remoteOnly: true });
    expect(q.remoteOnly).toBe(true);
  });

  it('captures location from basics', () => {
    const q = deriveSearchQuery(baseResume);
    expect(q.city).toBe('Berlin');
    expect(q.countryCode).toBe('DE');
  });

  it('escalates seniority for staff/principal title evidence', () => {
    const r: ResumeSchema = {
      ...baseResume,
      work: [
        {
          name: 'Acme',
          position: 'Principal Engineer',
          startDate: '2022-01',
        },
      ],
    };
    expect(deriveSearchQuery(r).seniority).toBe('principal');
  });
});
