import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { searchJobs } from '../../jobs/index';
import { rankPostings } from '../../jobs/rank';
import type { ResumeSchema } from '../../types/resume';
import type { JobPosting } from '../../jobs/types';

const minimalResume: ResumeSchema = {
  basics: {
    name: 'Dev Person',
    email: 'd@x.com',
    label: 'Software Engineer',
    phone: '+1-555-0100',
    location: { city: 'Remote', countryCode: 'US' },
  },
  work: [
    {
      name: 'Acme',
      position: 'Software Engineer',
      startDate: '2019-01',
      highlights: ['Built React applications', 'Led TypeScript migration'],
    },
  ],
  skills: [{ name: 'Frontend', keywords: ['React', 'TypeScript'] }],
};

const posting = (id: string, body: string, overrides: Partial<JobPosting> = {}): JobPosting => ({
  id,
  source: 'greenhouse',
  company: 'Acme',
  title: 'Software Engineer',
  location: 'Remote',
  remote: true,
  url: 'https://example.com/job',
  body,
  ...overrides,
});

beforeEach(() => {
  global.fetch = vi.fn();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('provider resilience', () => {
  it('resolves even when all providers throw; each has error set', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('network down'));
    const result = await searchJobs(minimalResume, { providers: ['remoteok'], timeoutMs: 500 });
    expect(result.providers).toHaveLength(1);
    expect(result.providers.at(0)?.error).toMatch(/network/i);
    expect(result.jobs).toEqual([]);
  });

  it('returns results from surviving providers when one fails', async () => {
    const fetchMock = global.fetch as ReturnType<typeof vi.fn>;
    fetchMock.mockRejectedValueOnce(new Error('remoteok down'));
    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      text: () => Promise.resolve(JSON.stringify([])),
    });
    const result = await searchJobs(minimalResume, {
      providers: ['remoteok', 'remotive'],
      timeoutMs: 500,
    });
    const failedProvider = result.providers.find((p) => p.error);
    expect(failedProvider).toBeDefined();
    expect(result).toBeDefined();
    expect(result.jobs).toBeDefined();
  });
});

describe('dedupe', () => {
  it('keeps the higher-scoring posting when (company, title, location) matches', () => {
    const highBody =
      'Software Engineer with React and TypeScript. Build frontend applications. 3+ years experience.';
    const lowBody = 'Administrative assistant role. Filing and scheduling.';
    const results = rankPostings(minimalResume, [
      posting('low', lowBody),
      posting('high', highBody),
    ]);
    expect(results).toHaveLength(1);
    expect(results.at(0)?.id).toBe('high');
  });

  it('keeps both when (company, title, location) differ', () => {
    const results = rankPostings(minimalResume, [
      posting('a', 'React engineer role', { company: 'Acme' }),
      posting('b', 'React engineer role', { company: 'Beta' }),
    ]);
    expect(results).toHaveLength(2);
  });
});
