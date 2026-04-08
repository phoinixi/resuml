import { describe, it, expect } from 'vitest';
import { analyzeAts } from '../ats/index';
import { runGenericChecks } from '../ats/genericChecks';
import { matchJobDescription } from '../ats/jdMatcher';
import { calculateScore, calculateCombinedScore, scoreToRating } from '../ats/scoring';
import type { ResumeSchema } from '../types/resume';

// --- Fixtures ---

const fullResume: ResumeSchema = {
  basics: {
    name: 'Jane Doe',
    label: 'Senior Software Engineer',
    email: 'jane@example.com',
    phone: '+1-555-123-4567',
    summary:
      'Experienced software engineer with 8 years building scalable distributed systems. Proven track record of leading teams and delivering high-impact projects on time.',
    location: {
      city: 'San Francisco',
      countryCode: 'US',
      region: 'California',
    },
    profiles: [
      { network: 'LinkedIn', username: 'janedoe', url: 'https://linkedin.com/in/janedoe' },
      { network: 'GitHub', username: 'janedoe', url: 'https://github.com/janedoe' },
    ],
  },
  work: [
    {
      name: 'Tech Corp',
      position: 'Senior Software Engineer',
      startDate: '2020-01-15',
      summary: 'Led backend engineering team.',
      highlights: [
        'Reduced API response time by 40% through query optimization and caching strategies',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored 5 junior developers through structured pair programming sessions',
      ],
    },
    {
      name: 'StartupXYZ',
      position: 'Full Stack Developer',
      startDate: '2018-06-01',
      endDate: '2019-12-31',
      summary: 'Developed web applications using React and Node.js.',
      highlights: [
        'Built customer dashboard serving 10,000+ users',
        'Integrated payment processing system handling $2M annually',
        'Improved application performance by 50%',
      ],
    },
  ],
  education: [
    {
      institution: 'University of Technology',
      area: 'Computer Science',
      studyType: 'Bachelor of Science',
      startDate: '2014-09',
      endDate: '2018-05',
    },
  ],
  skills: [
    { name: 'Languages', keywords: ['TypeScript', 'Python', 'Go'] },
    { name: 'Frameworks', keywords: ['React', 'Node.js', 'Express'] },
    { name: 'Infrastructure', keywords: ['AWS', 'Docker', 'Kubernetes'] },
  ],
  projects: [
    {
      name: 'Open Source CLI',
      description: 'A resume generation tool.',
      highlights: ['Developed plugin architecture supporting 20+ themes'],
    },
  ],
};

const minimalResume: ResumeSchema = {
  basics: {
    name: 'John',
  },
};

const resumeWithPronouns: ResumeSchema = {
  basics: {
    name: 'Test User',
    email: 'test@test.com',
    phone: '555-1234',
    summary: 'I am a developer and my skills include Python. I have worked on many projects.',
    location: { city: 'Berlin' },
  },
  work: [
    {
      name: 'Company',
      position: 'Dev',
      startDate: '2020-01',
      highlights: ['I built a dashboard', 'Managed a team of 5'],
    },
  ],
  education: [
    { institution: 'Uni', area: 'CS', studyType: 'BSc' },
  ],
  skills: [
    { name: 'Languages', keywords: ['Python'] },
    { name: 'Tools', keywords: ['Git'] },
    { name: 'Cloud', keywords: ['AWS'] },
  ],
};

// --- Tests ---

describe('ATS Generic Checks', () => {
  it('should pass all checks for a well-structured resume', () => {
    const checks = runGenericChecks(fullResume, 'en');
    // The full resume may not pass every single check perfectly, but should pass most
    expect(checks.length).toBeGreaterThanOrEqual(10);
    // Contact, summary, linkedin, work-highlights, skills, education, section-completeness should pass
    expect(checks.find((c) => c.id === 'contact-complete')?.passed).toBe(true);
    expect(checks.find((c) => c.id === 'has-summary')?.passed).toBe(true);
    expect(checks.find((c) => c.id === 'has-linkedin')?.passed).toBe(true);
    expect(checks.find((c) => c.id === 'work-highlights')?.passed).toBe(true);
    expect(checks.find((c) => c.id === 'skills-populated')?.passed).toBe(true);
    expect(checks.find((c) => c.id === 'education-complete')?.passed).toBe(true);
    expect(checks.find((c) => c.id === 'section-completeness')?.passed).toBe(true);
    expect(checks.find((c) => c.id === 'no-pronouns')?.passed).toBe(true);
  });

  it('should fail contact-complete for minimal resume', () => {
    const checks = runGenericChecks(minimalResume, 'en');
    const contact = checks.find((c) => c.id === 'contact-complete');
    expect(contact?.passed).toBe(false);
    expect(contact?.score).toBe(25); // 1 out of 4 fields
    expect(contact?.suggestion).toContain('email');
  });

  it('should fail has-summary for resume without summary', () => {
    const checks = runGenericChecks(minimalResume, 'en');
    const summary = checks.find((c) => c.id === 'has-summary');
    expect(summary?.passed).toBe(false);
    expect(summary?.score).toBe(0);
  });

  it('should detect pronouns in resume content', () => {
    const checks = runGenericChecks(resumeWithPronouns, 'en');
    const pronounCheck = checks.find((c) => c.id === 'no-pronouns');
    expect(pronounCheck?.passed).toBe(false);
    expect(pronounCheck?.message).toContain('pronoun');
  });

  it('should fail section-completeness for minimal resume', () => {
    const checks = runGenericChecks(minimalResume, 'en');
    const sections = checks.find((c) => c.id === 'section-completeness');
    expect(sections?.passed).toBe(false);
    expect(sections?.message).toContain('work');
    expect(sections?.message).toContain('education');
    expect(sections?.message).toContain('skills');
  });

  it('should work with German language', () => {
    const germanResume: ResumeSchema = {
      basics: {
        name: 'Max Mustermann',
        email: 'max@example.de',
        phone: '+49-123-456',
        summary: 'Erfahrener Softwareentwickler mit Schwerpunkt auf verteilten Systemen und Cloud-Infrastruktur.',
        location: { city: 'Berlin' },
        profiles: [
          { network: 'LinkedIn', url: 'https://linkedin.com/in/max' },
        ],
      },
      work: [
        {
          name: 'TechFirma',
          position: 'Senior Entwickler',
          startDate: '2020-01',
          highlights: [
            'Entwickelt eine Microservice-Architektur für 100.000+ Nutzer',
            'Optimiert die Datenbankabfragen um 50%',
          ],
        },
      ],
      education: [
        { institution: 'TU Berlin', area: 'Informatik', studyType: 'Master' },
      ],
      skills: [
        { name: 'Sprachen', keywords: ['TypeScript', 'Java'] },
        { name: 'Frameworks', keywords: ['Spring', 'React'] },
        { name: 'Cloud', keywords: ['AWS', 'GCP'] },
      ],
    };

    const checks = runGenericChecks(germanResume, 'de');
    expect(checks.find((c) => c.id === 'contact-complete')?.passed).toBe(true);
    expect(checks.find((c) => c.id === 'action-verbs')?.score).toBeGreaterThan(0);
  });
});

describe('ATS JD Matcher', () => {
  it('should match keywords from job description', () => {
    const jd = `
      We are looking for a Senior Software Engineer with experience in TypeScript,
      React, Node.js, and AWS. The ideal candidate has experience with CI/CD pipelines,
      microservices architecture, and team leadership. Experience with Docker and
      Kubernetes is a plus.
    `;

    const result = matchJobDescription(fullResume, jd, 'en');
    expect(result.matched.length).toBeGreaterThan(0);
    expect(result.matchPercentage).toBeGreaterThan(0);
    // TypeScript, React, Node.js, AWS, Docker, Kubernetes should be matched
    const matchedLower = result.matched.map((m) => m.toLowerCase());
    expect(matchedLower).toContain('typescript');
    expect(matchedLower).toContain('react');
  });

  it('should identify missing keywords', () => {
    const jd = `
      Required: Rust, Scala, Haskell, machine learning, quantum computing,
      blockchain, WebAssembly. Must have PhD in Computer Science.
    `;

    const result = matchJobDescription(fullResume, jd, 'en');
    expect(result.missing.length).toBeGreaterThan(0);
    expect(result.matchPercentage).toBeLessThan(50);
  });

  it('should handle empty job description', () => {
    const result = matchJobDescription(fullResume, '', 'en');
    expect(result.matched).toEqual([]);
    expect(result.missing).toEqual([]);
    expect(result.matchPercentage).toBe(0);
  });

  it('should work with stemmed matching', () => {
    const jd = 'Looking for someone who optimizes performance and implements solutions.';
    const result = matchJobDescription(fullResume, jd, 'en');
    // "optimization" in resume should stem-match "optimizes" in JD
    expect(result.matchPercentage).toBeGreaterThan(0);
  });
});

describe('ATS Scoring', () => {
  it('should calculate weighted score correctly', () => {
    const checks = [
      { id: 'a', category: 'contact' as const, weight: 'high' as const, passed: true, score: 100, message: '' },
      { id: 'b', category: 'content' as const, weight: 'medium' as const, passed: true, score: 50, message: '' },
      { id: 'c', category: 'structure' as const, weight: 'low' as const, passed: false, score: 0, message: '' },
    ];
    const score = calculateScore(checks);
    // Weighted: (100*3 + 50*2 + 0*1) / (100*3 + 100*2 + 100*1) = 400/600 = 67
    expect(score).toBe(67);
  });

  it('should calculate combined score with JD', () => {
    const combined = calculateCombinedScore(80, 60);
    // 80 * 0.6 + 60 * 0.4 = 48 + 24 = 72
    expect(combined).toBe(72);
  });

  it('should return generic score when no JD', () => {
    expect(calculateCombinedScore(80)).toBe(80);
  });

  it('should map scores to correct ratings', () => {
    expect(scoreToRating(95)).toBe('excellent');
    expect(scoreToRating(90)).toBe('excellent');
    expect(scoreToRating(80)).toBe('good');
    expect(scoreToRating(75)).toBe('good');
    expect(scoreToRating(65)).toBe('needs-work');
    expect(scoreToRating(60)).toBe('needs-work');
    expect(scoreToRating(50)).toBe('poor');
    expect(scoreToRating(0)).toBe('poor');
  });
});

describe('analyzeAts (integration)', () => {
  it('should return a high score for a well-structured resume', () => {
    const result = analyzeAts(fullResume, { language: 'en' });
    expect(result.score).toBeGreaterThanOrEqual(60);
    expect(result.checks.length).toBeGreaterThanOrEqual(10);
    expect(result.summary).toContain('ATS Score');
    expect(result.keywords).toBeUndefined();
  });

  it('should return a low score for a minimal resume', () => {
    const result = analyzeAts(minimalResume, { language: 'en' });
    expect(result.score).toBeLessThan(40);
    expect(result.rating).toBe('poor');
  });

  it('should include keyword match when JD is provided', () => {
    const jd = 'Senior TypeScript developer with React and AWS experience.';
    const result = analyzeAts(fullResume, { language: 'en', jobDescription: jd });
    expect(result.keywords).toBeDefined();
    expect(result.keywords?.matched.length).toBeGreaterThan(0);
    expect(result.summary).toContain('job description');
  });

  it('should have suggestions for failed checks', () => {
    const result = analyzeAts(minimalResume, { language: 'en' });
    const failedWithSuggestions = result.checks.filter((c) => !c.passed && c.suggestion);
    expect(failedWithSuggestions.length).toBeGreaterThan(0);
  });
});
