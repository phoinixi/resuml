import { describe, it, expect, vi } from 'vitest';
import { atsExplain, atsConfigPrint } from '../commands/ats';

describe('ats explain', () => {
  it('prints rubric entry for a known id', () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    atsExplain('quantification-density');
    const out = log.mock.calls.flat().join('\n');
    expect(out).toMatch(/quantification-density/);
    expect(out).toMatch(/recruiter/);
    log.mockRestore();
  });

  it('errors on unknown id', () => {
    const err = vi.spyOn(console, 'error').mockImplementation(() => {});
    const exit = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
    atsExplain('not-real');
    expect(err).toHaveBeenCalled();
    err.mockRestore();
    exit.mockRestore();
  });
});

describe('ats config --print', () => {
  it('prints merged config as YAML', () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    atsConfigPrint({});
    const out = log.mock.calls.flat().join('\n');
    expect(out).toMatch(/parsing: 30/);
    expect(out).toMatch(/match: 50/);
    log.mockRestore();
  });
});
