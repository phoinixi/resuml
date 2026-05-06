import { describe, it, expect } from 'vitest';
import { titleAlignment, educationLevel, yoeMatch, hardSkillOverlap } from '../ats/checks/match';
import type { ResumeSchema } from '../types/resume';

const resume: ResumeSchema = {
  basics: { name: 'X', email: 'x@y.com' },
  work: [
    { name: 'Co', position: 'Senior Frontend Engineer', startDate: '2018-01' },
  ],
  education: [{ institution: 'U', area: 'CS', studyType: 'Bachelor of Science' }],
  skills: [{ name: 'FE', keywords: ['react', 'typescript'] }],
};

describe('title-alignment', () => {
  it('passes when titles align', () => {
    expect(titleAlignment(resume, 'en', { jobDescription: 'Looking for a Frontend Engineer with React experience.' }).status).toBe('pass');
  });
  it('warns on partial alignment', () => {
    expect(titleAlignment(resume, 'en', { jobDescription: 'We need a Backend Engineer for Go services.' }).status).not.toBe('pass');
  });
  it('skipped without JD', () => {
    expect(titleAlignment(resume, 'en', {}).status).toBe('skipped');
  });
});

describe('education-level', () => {
  it('passes when bachelor meets bachelor requirement', () => {
    expect(educationLevel(resume, 'en', { jobDescription: 'Bachelor degree required.' }).status).toBe('pass');
  });
  it('fails when JD requires PhD', () => {
    expect(educationLevel(resume, 'en', { jobDescription: 'PhD required.' }).status).toBe('fail');
  });
  it('skipped when JD silent', () => {
    expect(educationLevel(resume, 'en', { jobDescription: 'Great team!' }).status).toBe('skipped');
  });
});

describe('yoe-match', () => {
  it('passes when YOE meets requirement', () => {
    expect(yoeMatch(resume, 'en', { jobDescription: '3+ years of frontend experience.' }).status).toBe('pass');
  });
  it('fails when JD asks 20 years', () => {
    expect(yoeMatch(resume, 'en', { jobDescription: 'Minimum 20 years of experience required.' }).status).toBe('fail');
  });
  it('parses ASCII-hyphen ranges (3-5 years)', () => {
    expect(yoeMatch(resume, 'en', { jobDescription: 'We need 3-5 years of frontend experience.' }).status).toBe('pass');
  });
  it('parses en-dash ranges (3–5 years)', () => {
    expect(yoeMatch(resume, 'en', { jobDescription: 'We need 3–5 years of frontend experience.' }).status).toBe('pass');
  });
});

describe('hard-skill-overlap', () => {
  it('matches react/typescript', () => {
    const r = hardSkillOverlap(resume, 'en', { jobDescription: 'Required: React and TypeScript.' });
    expect(r.status).not.toBe('skipped');
  });
});
