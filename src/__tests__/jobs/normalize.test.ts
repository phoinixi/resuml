import { describe, it, expect } from 'vitest';
import { stripHtml, looksRemote, dedupeKey, applyQueryFilters } from '../../jobs/normalize';
import type { JobPosting, SearchQuery } from '../../jobs/types';

describe('stripHtml', () => {
  it('removes tags and decodes entities', () => {
    const out = stripHtml('<p>Hello&nbsp;<b>world</b> &amp; more</p>');
    expect(out).toBe('Hello world & more');
  });
  it('drops script/style content entirely', () => {
    const out = stripHtml('<style>.x{}</style><p>kept</p><script>evil()</script>');
    expect(out).toBe('kept');
  });
  it('handles empty input', () => {
    expect(stripHtml('')).toBe('');
  });
});

describe('looksRemote', () => {
  it('flags remote locations', () => {
    expect(looksRemote('Remote, US')).toBe(true);
    expect(looksRemote('Anywhere')).toBe(true);
  });
  it('flags remote mentions in body', () => {
    expect(looksRemote('NYC', 'This is a fully remote role')).toBe(true);
  });
  it('returns false otherwise', () => {
    expect(looksRemote('Berlin', 'office based role')).toBe(false);
  });
});

describe('dedupeKey', () => {
  it('collapses minor formatting differences', () => {
    const a = dedupeKey({ company: 'Acme Co', title: 'Senior Engineer', location: 'NYC' });
    const b = dedupeKey({ company: 'acme-co', title: 'senior  engineer', location: 'nyc' });
    expect(a).toBe(b);
  });
  it('handles missing location', () => {
    const k = dedupeKey({ company: 'X', title: 'Y' });
    expect(k).toContain('x::y::');
  });
});

const samplePosting = (overrides: Partial<JobPosting> = {}): JobPosting => ({
  id: 'a',
  source: 'remoteok',
  company: 'Acme',
  title: 'Engineer',
  body: 'body',
  url: 'https://x',
  remote: false,
  ...overrides,
});

describe('applyQueryFilters', () => {
  const baseQuery: SearchQuery = {
    skills: [],
    seniority: 'senior',
    yearsExperience: 5,
    titles: [],
    remoteOnly: false,
    terms: [],
  };

  it('passes everything through when no filter active', () => {
    const postings = [samplePosting(), samplePosting({ id: 'b', remote: true })];
    const { postings: result } = applyQueryFilters(postings, baseQuery);
    expect(result).toHaveLength(2);
  });

  it('keeps only remote postings when remoteOnly set', () => {
    const postings = [samplePosting(), samplePosting({ id: 'b', remote: true })];
    const { postings: result } = applyQueryFilters(postings, { ...baseQuery, remoteOnly: true });
    expect(result).toHaveLength(1);
  });
});

describe('applyQueryFilters on-site country filter', () => {
  const baseQuery: SearchQuery = {
    skills: [],
    seniority: 'senior',
    yearsExperience: 5,
    titles: [],
    remoteOnly: false,
    terms: [],
  };

  it('keeps on-site posting whose location country matches candidate', () => {
    const { postings, wrongLocationCount } = applyQueryFilters(
      [samplePosting({ location: 'Zurich, CH', remote: false })],
      { ...baseQuery, countryCode: 'CH' }
    );
    expect(postings).toHaveLength(1);
    expect(wrongLocationCount).toBe(0);
  });

  it('drops on-site posting whose location country mismatches candidate', () => {
    const { postings, wrongLocationCount } = applyQueryFilters(
      [samplePosting({ location: 'New York, US', remote: false })],
      { ...baseQuery, countryCode: 'CH' }
    );
    expect(postings).toHaveLength(0);
    expect(wrongLocationCount).toBe(1);
  });

  it('keeps remote posting regardless of location country', () => {
    const { postings } = applyQueryFilters(
      [samplePosting({ location: 'New York, US', remote: true })],
      { ...baseQuery, countryCode: 'CH' }
    );
    expect(postings).toHaveLength(1);
  });

  it('does not filter when countryCode is not set', () => {
    const postings = [
      samplePosting({ location: 'New York, US', remote: false }),
      samplePosting({ id: 'b', location: 'Berlin, DE', remote: false }),
    ];
    const { postings: result, wrongLocationCount } = applyQueryFilters(postings, baseQuery);
    expect(result).toHaveLength(2);
    expect(wrongLocationCount).toBe(0);
  });
});
