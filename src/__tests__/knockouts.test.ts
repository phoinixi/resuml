import { describe, it, expect } from 'vitest';
import { extractKnockouts } from '../ats/checks/match';
import type { ResumeSchema } from '../types/resume';

const resume: ResumeSchema = {
  basics: { name: 'X', email: 'x@y.com', summary: 'Frontend tech lead.' },
  work: [{ name: 'Co', position: 'Lead', startDate: '2020-01' }],
};

describe('extractKnockouts', () => {
  it('flags work-auth signal when JD requires US auth and resume silent', () => {
    const sigs = extractKnockouts(resume, 'US work authorization required.');
    expect(sigs.some((s) => s.signal === 'work-auth')).toBe(true);
  });

  it('returns empty when JD has no knockout terms', () => {
    expect(extractKnockouts(resume, 'Great culture, fun team!').length).toBe(0);
  });

  it('flags location signal when JD requires NYC and resume silent', () => {
    const sigs = extractKnockouts(resume, 'Must be located in New York City.');
    expect(sigs.some((s) => s.signal === 'location')).toBe(true);
  });

  it('flags clearance signal', () => {
    const sigs = extractKnockouts(resume, 'TS/SCI clearance required.');
    expect(sigs.some((s) => s.signal === 'clearance')).toBe(true);
  });
});
