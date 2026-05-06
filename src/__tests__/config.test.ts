import { describe, it, expect } from 'vitest';
import { loadConfig, defaultConfig } from '../utils/config';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

describe('loadConfig', () => {
  it('returns defaults when no config file exists', () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'resuml-cfg-'));
    const cfg = loadConfig({ cwd: dir });
    expect(cfg).toEqual(defaultConfig);
  });

  it('deep-merges user overrides with defaults', () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'resuml-cfg-'));
    fs.writeFileSync(
      path.join(dir, 'resuml.config.yaml'),
      'ats:\n  weights:\n    tiers:\n      parsing: 50\n  disable: [pronoun-leakage]\n',
    );
    const cfg = loadConfig({ cwd: dir });
    expect(cfg.weights.tiers.parsing).toBe(50);
    expect(cfg.weights.tiers.match).toBe(defaultConfig.weights.tiers.match);
    expect(cfg.disable).toEqual(['pronoun-leakage']);
  });

  it('throws on invalid config', () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'resuml-cfg-'));
    fs.writeFileSync(path.join(dir, 'resuml.config.yaml'), 'ats:\n  weights:\n    tiers:\n      parsing: "high"\n');
    expect(() => loadConfig({ cwd: dir })).toThrow(/parsing/);
  });

  it('honours explicit configPath', () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'resuml-cfg-'));
    const file = path.join(dir, 'custom.yaml');
    fs.writeFileSync(file, 'ats:\n  locale: de\n');
    const cfg = loadConfig({ cwd: dir, configPath: file });
    expect(cfg.locale).toBe('de');
  });
});
