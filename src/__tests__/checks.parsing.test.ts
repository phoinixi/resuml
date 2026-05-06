import { describe, it, expect } from 'vitest';
import {
  conventionalSections, dateFormatConsistency, contactInBody,
  reverseChronOrder, educationComplete,
} from '../ats/checks/parsing';
import type { ResumeSchema } from '../types/resume';

const base: ResumeSchema = {
  basics: { name: 'X', email: 'x@y.com', phone: '+1', location: { city: 'NYC' } },
  work: [{ name: 'A', position: 'Dev', startDate: '2020-01', highlights: ['Built X'] }],
  education: [{ institution: 'U', area: 'CS', studyType: 'BSc', startDate: '2015-01', endDate: '2019-01' }],
  skills: [{ name: 'Code', keywords: ['ts'] }],
};

describe('conventional-sections', () => {
  it('passes when basics+work+education present', () => {
    expect(conventionalSections(base, 'en').status).toBe('pass');
  });
  it('fails when work missing', () => {
    expect(conventionalSections({ ...base, work: [] }, 'en').status).toBe('fail');
  });
});

describe('date-format-consistency', () => {
  it('passes ISO dates', () => {
    expect(dateFormatConsistency(base, 'en').status).toBe('pass');
  });
  it('warns mixed formats', () => {
    const r = { ...base, work: [{ ...base.work![0], startDate: '01/2020' }] };
    expect(dateFormatConsistency(r, 'en').status).not.toBe('pass');
  });
});

describe('contact-in-body', () => {
  it('passes with email+phone', () => {
    expect(contactInBody(base, 'en').status).toBe('pass');
  });
  it('fails without email', () => {
    expect(contactInBody({ ...base, basics: { ...base.basics!, email: undefined } }, 'en').status).toBe('fail');
  });
});

describe('reverse-chron-order', () => {
  it('passes when work descending', () => {
    const r = { ...base, work: [
      { ...base.work![0], startDate: '2022-01' },
      { ...base.work![0], startDate: '2020-01' },
    ]};
    expect(reverseChronOrder(r, 'en').status).toBe('pass');
  });
  it('fails when out of order', () => {
    const r = { ...base, work: [
      { ...base.work![0], startDate: '2018-01' },
      { ...base.work![0], startDate: '2020-01' },
    ]};
    expect(reverseChronOrder(r, 'en').status).toBe('fail');
  });
  it('skipped with single entry', () => {
    expect(reverseChronOrder(base, 'en').status).toBe('skipped');
  });
});

describe('education-complete', () => {
  it('passes when all entries have institution+area+studyType', () => {
    expect(educationComplete(base, 'en').status).toBe('pass');
  });
  it('fails when an entry is missing studyType', () => {
    const r = { ...base, education: [{ ...base.education![0], studyType: undefined }] };
    expect(educationComplete(r, 'en').status).toBe('fail');
  });
});
