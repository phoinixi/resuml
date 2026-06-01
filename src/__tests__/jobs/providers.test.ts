/* eslint-disable @typescript-eslint/no-non-null-assertion, @typescript-eslint/require-await */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

import { greenhouseProvider } from '../../jobs/providers/greenhouse';
import { leverProvider } from '../../jobs/providers/lever';
import { ashbyProvider } from '../../jobs/providers/ashby';
import { workableProvider } from '../../jobs/providers/workable';
import { remoteokProvider } from '../../jobs/providers/remoteok';
import { remotiveProvider } from '../../jobs/providers/remotive';
import { wwrProvider, __test__ as wwrInternals } from '../../jobs/providers/wwr';
import { __test__ as hnInternals } from '../../jobs/providers/hn-whoishiring';
import type { SearchQuery } from '../../jobs/types';

const FIXTURES = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'fixtures');

function loadJsonText(name: string): string {
  return fs.readFileSync(path.join(FIXTURES, name), 'utf-8');
}

function loadText(name: string): string {
  return fs.readFileSync(path.join(FIXTURES, name), 'utf-8');
}

const baseQuery: SearchQuery = {
  skills: ['React', 'TypeScript'],
  seniority: 'senior',
  yearsExperience: 6,
  titles: ['Senior Frontend Engineer'],
  remoteOnly: false,
  terms: ['frontend', 'react'],
};

beforeEach(() => {
  global.fetch = vi.fn();
});

afterEach(() => {
  vi.restoreAllMocks();
});

function mockFetchResponse(body: string, ok = true) {
  const fetchMock = global.fetch as ReturnType<typeof vi.fn>;
  fetchMock.mockResolvedValueOnce({
    ok,
    status: ok ? 200 : 500,
    text: async () => body,
  });
}

describe('greenhouseProvider', () => {
  it('normalizes a board response', async () => {
    mockFetchResponse(loadJsonText('greenhouse.sample.json'));
    const postings = await greenhouseProvider.fetch(baseQuery, {
      companies: ['acme'],
      timeoutMs: 1000,
    });
    expect(postings).toHaveLength(2);
    expect(postings[0]!.source).toBe('greenhouse');
    expect(postings[0]!.title).toBe('Senior Frontend Engineer');
    expect(postings[0]!.remote).toBe(true);
    expect(postings[0]!.body).toMatch(/React/);
  });

  it('swallows per-company errors via Promise.allSettled', async () => {
    mockFetchResponse('boom', false);
    const postings = await greenhouseProvider.fetch(baseQuery, {
      companies: ['nonexistent'],
      timeoutMs: 1000,
    });
    expect(postings).toEqual([]);
  });
});

describe('leverProvider', () => {
  it('assembles description + lists into body', async () => {
    mockFetchResponse(loadJsonText('lever.sample.json'));
    const postings = await leverProvider.fetch(baseQuery, {
      companies: ['acme'],
      timeoutMs: 1000,
    });
    expect(postings).toHaveLength(1);
    expect(postings[0]!.body).toContain('platform');
    expect(postings[0]!.body).toContain('TypeScript');
    expect(postings[0]!.remote).toBe(true);
  });
});

describe('ashbyProvider', () => {
  it('respects isRemote flag from upstream', async () => {
    mockFetchResponse(loadJsonText('ashby.sample.json'));
    const postings = await ashbyProvider.fetch(baseQuery, {
      companies: ['acme'],
      timeoutMs: 1000,
    });
    expect(postings).toHaveLength(1);
    expect(postings[0]!.remote).toBe(true);
  });
});

describe('workableProvider', () => {
  it('concatenates description, requirements, benefits', async () => {
    mockFetchResponse(loadJsonText('workable.sample.json'));
    const postings = await workableProvider.fetch(baseQuery, {
      companies: ['acme'],
      timeoutMs: 1000,
    });
    expect(postings[0]!.body).toContain('5+ years React');
    expect(postings[0]!.location).toBe('Berlin, Germany');
  });
});

describe('remoteokProvider', () => {
  it('skips the legal metadata entry and always marks remote', async () => {
    mockFetchResponse(loadJsonText('remoteok.sample.json'));
    const postings = await remoteokProvider.fetch(baseQuery, { timeoutMs: 1000 });
    expect(postings).toHaveLength(1);
    expect(postings[0]!.remote).toBe(true);
    expect(postings[0]!.compensation).toContain('90000');
  });
});

describe('remotiveProvider', () => {
  it('normalizes a remotive response', async () => {
    mockFetchResponse(
      JSON.stringify({
        jobs: [
          {
            id: 42,
            url: 'https://remotive.com/remote-jobs/42',
            title: 'Frontend Engineer',
            company_name: 'Acme',
            description: '<p>React role</p>',
            publication_date: '2026-05-15',
            candidate_required_location: 'EU',
            tags: ['react'],
          },
        ],
      })
    );
    const postings = await remotiveProvider.fetch(baseQuery, { timeoutMs: 1000 });
    expect(postings).toHaveLength(1);
    expect(postings[0]!.remote).toBe(true);
    expect(postings[0]!.tags).toContain('react');
  });
});

describe('wwrProvider', () => {
  it('parses RSS into postings', async () => {
    // Each of the 7 categories fires a fetch — return the same fixture for all.
    (global.fetch as ReturnType<typeof vi.fn>).mockImplementation(
      async () =>
        ({
          ok: true,
          status: 200,
          text: async () => loadText('wwr.sample.xml'),
        }) as Response
    );
    const postings = await wwrProvider.fetch(baseQuery, { timeoutMs: 1000 });
    expect(postings.length).toBeGreaterThanOrEqual(1);
    expect(postings[0]!.title).toContain('Senior Frontend Engineer');
    expect(postings[0]!.company).toBe('Acme');
  });

  it('parseRss splits company from title on the leading colon', () => {
    const xml = loadText('wwr.sample.xml');
    const parsed = wwrInternals.parseRss(xml, 'programming');
    expect(parsed[0]!.company).toBe('Acme');
    expect(parsed[0]!.title).toMatch(/Senior Frontend/);
  });
});

describe('hn-whoishiring parseHeader', () => {
  it('extracts company, location, and title from a typical HN comment header', () => {
    const body =
      'Acme (Berlin / Remote) | Senior Frontend Engineer | Full-time | https://example.com\n\nWe are hiring...';
    const parsed = hnInternals.parseHeader(body);
    expect(parsed.company).toBe('Acme');
    expect(parsed.location).toBe('Berlin / Remote');
    expect(parsed.title).toBe('Senior Frontend Engineer');
  });

  it('handles empty string without throwing', () => {
    expect(() => hnInternals.parseHeader('')).not.toThrow();
    const parsed = hnInternals.parseHeader('');
    expect(parsed.company).toBe('HN posting');
    expect(parsed.title).toBe('See description');
  });

  it('handles single segment with no pipe separator', () => {
    const parsed = hnInternals.parseHeader('Acme Corp doing cool things');
    expect(parsed.company).toBe('Acme Corp doing cool things');
    expect(parsed.title).toBe('See description');
  });

  it('handles first line with no parentheses — location is undefined', () => {
    const parsed = hnInternals.parseHeader('Acme Corp | Senior Engineer | Full-time');
    expect(parsed.company).toBe('Acme Corp');
    expect(parsed.location).toBeUndefined();
    expect(parsed.title).toBe('Senior Engineer');
  });

  it('handles only pipe separators with no meaningful text without crashing', () => {
    expect(() => hnInternals.parseHeader(' | | | ')).not.toThrow();
    const parsed = hnInternals.parseHeader(' | | | ');
    expect(parsed.company).toBe('HN posting');
  });
});
