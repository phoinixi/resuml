import { describe, it, expect } from 'vitest';

describe('public package surface', () => {
  it('root entry exports library API (no CLI side effects)', async () => {
    const mod = await import('../index');
    expect(typeof mod.processResumeData).toBe('function');
    expect(typeof mod.loadResumeFiles).toBe('function');
    expect(typeof mod.loadTheme).toBe('function');
    expect(typeof mod.analyzeAts).toBe('function');
    expect(mod.themeRender).toBeDefined();
  });

  it('resuml/ats subpath exports analyzeAts and result types', async () => {
    const mod = await import('../ats/index');
    expect(typeof mod.analyzeAts).toBe('function');
  });

  it('resuml/skills subpath exports the skills index loader', async () => {
    const mod = await import('../skills/index');
    expect(typeof mod.getSkillIndex).toBe('function');
    expect(typeof mod.tokenize).toBe('function');
    const idx = mod.getSkillIndex();
    expect(idx).toBeTruthy();
  });

  it('resuml/types subpath is type-only and importable at runtime', async () => {
    const mod = await import('../types/index');
    expect(mod).toBeDefined();
  });

  it('analyzeAts produces a tiered result for a minimal resume', async () => {
    const { analyzeAts } = await import('../ats/index');
    const result = analyzeAts({
      basics: { name: 'Test User', email: 'test@example.com' },
      work: [
        {
          name: 'Acme',
          position: 'Engineer',
          startDate: '2020-01-01',
          endDate: '2023-12-31',
          highlights: ['Built systems'],
        },
      ],
      education: [
        {
          institution: 'University',
          area: 'Computer Science',
          studyType: 'BSc',
          startDate: '2014-09-01',
          endDate: '2018-06-01',
        },
      ],
    });
    expect(typeof result.score).toBe('number');
    expect(result.tiers.parsing).toBeDefined();
    expect(result.tiers.recruiter).toBeDefined();
    expect(Array.isArray(result.knockouts)).toBe(true);
  });
});
