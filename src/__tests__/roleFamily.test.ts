import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'yaml';
import { classifyRoleFamily, resumeRoleText, resumeSpecialties } from '../ats/roleFamily';
import { analyzeAts } from '../ats/index';
import { rankPostings } from '../jobs/rank';
import type { ResumeSchema } from '../types/resume';
import type { JobPosting } from '../jobs/types';

const frontendCv = parse(
  readFileSync(join(__dirname, 'fixtures/frontend-cv.yml'), 'utf8')
) as ResumeSchema;

// Well-formed enough that parsing + recruiter tiers score high — so the
// pre-cap total clears 45 and the role-mismatch cap is actually exercised.
const engineerResume: ResumeSchema = {
  basics: {
    name: 'Jane Doe',
    email: 'j@x.com',
    phone: '+1-555-0100',
    location: { city: 'Berlin', countryCode: 'DE' },
    label: 'Senior Frontend Engineer',
    summary:
      'Senior frontend engineer with eight years building React platforms and design systems. Shipped accessibility and performance wins at scale.',
    profiles: [{ network: 'LinkedIn', url: 'https://linkedin.com/in/jane' }],
  },
  work: [
    {
      name: 'Co',
      position: 'Senior Frontend Engineer',
      startDate: '2015-01',
      highlights: [
        'Built a React component library adopted by 8 teams',
        'Led the migration from Angular to React, cutting bundle size 40%',
        'Reduced page load time by 35% through code-splitting',
      ],
    },
  ],
  education: [
    {
      institution: 'U',
      area: 'Computer Science',
      studyType: 'Bachelor of Science',
      startDate: '2011-09',
      endDate: '2015-06',
    },
  ],
  skills: [{ name: 'Frontend', keywords: ['React', 'TypeScript', 'Node.js'] }],
};

const recruiterJd = `Technical Recruiter | Engineering
We are looking for a Technical Recruiter to own full-cycle recruiting for our
engineering organization. You will manage candidate pipelines, partner with
hiring managers, run sourcing, and obsess over candidate experience and
calibration. Recruiting at our company is owned end-to-end.`;

const engineerJd = `Senior Frontend Engineer
We are looking for a senior frontend engineer with deep React and TypeScript
experience to build our design system and lead frontend architecture. 5+ years
of software development required.`;

describe('classifyRoleFamily', () => {
  it('classifies a recruiting JD as recruiting even when it mentions engineering', () => {
    const r = classifyRoleFamily(recruiterJd, 'Technical Recruiter | Engineering');
    expect(r?.family).toBe('recruiting');
  });

  it('classifies an engineering JD as engineering', () => {
    const r = classifyRoleFamily(engineerJd, 'Senior Frontend Engineer');
    expect(r?.family).toBe('engineering');
  });

  it('classifies an engineering resume as engineering', () => {
    const r = classifyRoleFamily(resumeRoleText(engineerResume));
    expect(r?.family).toBe('engineering');
  });

  it('abstains on text with no clear family', () => {
    expect(classifyRoleFamily('We value passion, ownership, and great culture.')).toBeNull();
  });
});

describe('analyzeAts role-family cap', () => {
  it('caps the total when resume and JD are different occupations', () => {
    const r = analyzeAts(engineerResume, {
      jobDescription: recruiterJd,
      jobTitle: 'Technical Recruiter | Engineering',
    });
    expect(r.score).toBeLessThanOrEqual(45);
    expect(r.rating).toBe('poor');
    expect(r.summary).toMatch(/capped/i);
    const rf = r.tiers.match?.checks.find((c) => c.id === 'role-family-match');
    expect(rf?.status).toBe('fail');
  });

  it('does not cap when the role family matches', () => {
    const r = analyzeAts(engineerResume, {
      jobDescription: engineerJd,
      jobTitle: 'Senior Frontend Engineer',
    });
    expect(r.summary).not.toMatch(/capped/i);
    const rf = r.tiers.match?.checks.find((c) => c.id === 'role-family-match');
    expect(rf?.status).toBe('pass');
  });
});

const backendJd = `Senior Backend Engineer
We are looking for a senior backend engineer with 5+ years experience in
server-side development. You will build and maintain microservices, api development,
and distributed systems. Experience with Go, PostgreSQL, Redis required.`;

const backendPosting: JobPosting = {
  id: 'backend-1',
  source: 'greenhouse',
  company: 'Acme',
  title: 'Senior Backend Engineer',
  remote: true,
  url: 'https://example.com/job/1',
  body: backendJd,
};

const fullStackResume: ResumeSchema = {
  basics: { name: 'Full', email: 'f@s.com', label: 'Full Stack Engineer' },
  work: [
    {
      name: 'Co',
      position: 'Full Stack Engineer',
      startDate: '2018-01',
      highlights: [
        'Built React frontend features and CSS design system',
        'Developed backend microservices using server-side Node.js and api development',
      ],
    },
  ],
};

const generalResume: ResumeSchema = {
  basics: { name: 'Pat', email: 'p@s.com', label: 'Software Engineer' },
  work: [{ name: 'Co', position: 'Software Engineer', startDate: '2020-01' }],
};

describe('resumeSpecialties', () => {
  it('returns frontend for the frontend fixture', () => {
    expect(resumeSpecialties(frontendCv)).toEqual(['frontend']);
  });

  it('returns both specialties for a full-stack resume with equal signals', () => {
    const specs = resumeSpecialties(fullStackResume);
    expect(specs).toEqual(expect.arrayContaining(['frontend', 'backend']));
    expect(specs.length).toBe(2);
  });

  it('returns [] for a general-engineering resume with no specialty signals', () => {
    expect(resumeSpecialties(generalResume)).toEqual([]);
  });
});

describe('analyzeAts specialty mismatch', () => {
  it('fails role-family-match and caps score for frontend CV vs backend JD', () => {
    const r = analyzeAts(frontendCv, {
      jobDescription: backendJd,
      jobTitle: 'Senior Backend Engineer',
    });
    const rf = r.tiers.match?.checks.find((c) => c.id === 'role-family-match');
    expect(rf?.status).toBe('fail');
    expect(r.score).toBeLessThanOrEqual(45);
  });

  it('passes role-family-match for general-engineering resume vs backend JD', () => {
    const r = analyzeAts(generalResume, {
      jobDescription: backendJd,
      jobTitle: 'Senior Backend Engineer',
    });
    const rf = r.tiers.match?.checks.find((c) => c.id === 'role-family-match');
    expect(rf?.status).not.toBe('fail');
  });
});

describe('rankPostings specialty integration', () => {
  it('caps ATS score for frontend CV against a backend posting', () => {
    const results = rankPostings(frontendCv, [backendPosting]);
    expect(results).toHaveLength(1);
    expect(results[0]!.ats.score).toBeLessThanOrEqual(45);
  });
});
