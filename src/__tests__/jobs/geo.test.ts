import { describe, it, expect } from 'vitest';
import { isRemoteEligible } from '../../jobs/geo';

describe('isRemoteEligible (CH candidate)', () => {
  it('drops a US-only remote posting', () => {
    expect(isRemoteEligible('Chicago, IL, US; Remote, US', '', 'CH')).toBe(false);
  });
  it('keeps another European country scope (CH is geographically Europe)', () => {
    // Work authorization is the candidate's to confirm; we only drop clear
    // cross-continent exclusions, not intra-Europe ones.
    expect(isRemoteEligible('Remote, Germany', '', 'CH')).toBe(true);
  });
  it('keeps EMEA / Europe scopes', () => {
    expect(isRemoteEligible('Remote - EMEA', '', 'CH')).toBe(true);
    expect(isRemoteEligible('Remote, Europe', '', 'CH')).toBe(true);
  });
  it('keeps worldwide scopes', () => {
    expect(isRemoteEligible('Remote (Worldwide)', '', 'CH')).toBe(true);
    expect(isRemoteEligible('Anywhere', '', 'CH')).toBe(true);
  });
  it('keeps an unqualified Remote (cannot prove ineligible)', () => {
    expect(isRemoteEligible('Remote', '', 'CH')).toBe(true);
  });
  it('detects scope from the body when location is bare', () => {
    expect(isRemoteEligible('Remote', 'This role is open to US-based applicants only.', 'CH')).toBe(
      false
    );
  });
  it('does not filter when the candidate country has no rules', () => {
    expect(isRemoteEligible('Remote, US', '', 'JP')).toBe(true);
  });
});
