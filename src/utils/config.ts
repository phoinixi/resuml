import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';
import { z } from 'zod';
import merge from 'lodash.merge';
import type { AtsConfig } from '../ats/types';

const weightEnum = z.enum(['high', 'medium', 'low']);

const atsConfigSchema = z.object({
  weights: z
    .object({
      tiers: z
        .object({
          parsing: z.number().int().min(0).max(100),
          match: z.number().int().min(0).max(100),
          recruiter: z.number().int().min(0).max(100),
        })
        .partial()
        .optional(),
      checks: z.record(z.string(), weightEnum).optional(),
    })
    .partial()
    .optional(),
  thresholds: z
    .object({
      rating: z
        .object({
          excellent: z.number(),
          good: z.number(),
          needsWork: z.number(),
        })
        .partial()
        .optional(),
      grade: z
        .object({ A: z.number(), B: z.number(), C: z.number(), D: z.number() })
        .partial()
        .optional(),
      seniorYoeCutoff: z.number().int().min(0).optional(),
      wordCount: z
        .object({ min: z.number(), max: z.number(), seniorMax: z.number() })
        .partial()
        .optional(),
      bulletsPerRole: z
        .object({ min: z.number(), max: z.number(), seniorMax: z.number() })
        .partial()
        .optional(),
    })
    .partial()
    .optional(),
  disable: z.array(z.string()).optional(),
  locale: z.string().optional(),
});

const fileSchema = z.object({ ats: atsConfigSchema.optional() });

export const defaultConfig: AtsConfig = {
  weights: {
    tiers: { parsing: 30, match: 50, recruiter: 20 },
    checks: {},
  },
  thresholds: {
    rating: { excellent: 90, good: 75, needsWork: 60 },
    grade: { A: 90, B: 80, C: 70, D: 60 },
    seniorYoeCutoff: 10,
    wordCount: { min: 400, max: 800, seniorMax: 1600 },
    bulletsPerRole: { min: 3, max: 6, seniorMax: 10 },
  },
  disable: [],
  locale: 'en',
};

export interface LoadConfigOptions {
  cwd?: string;
  configPath?: string;
}

export function loadConfig(opts: LoadConfigOptions = {}): AtsConfig {
  const cwd = opts.cwd ?? process.cwd();
  const file = opts.configPath ?? path.join(cwd, 'resuml.config.yaml');
  if (!fs.existsSync(file)) return defaultConfig;

  const raw = fs.readFileSync(file, 'utf8');
  const parsed = yaml.parse(raw) ?? {};
  const result = fileSchema.safeParse(parsed);
  if (!result.success) {
    const issue = result.error.issues[0];
    const where = issue?.path.join('.') ?? '<root>';
    throw new Error(`Invalid resuml.config.yaml at "${where}": ${issue?.message}`);
  }
  return merge({}, defaultConfig, result.data.ats ?? {}) as AtsConfig;
}

export function effectiveWeight(checkId: string, defaultWeight: 'high' | 'medium' | 'low', config: AtsConfig): 'high' | 'medium' | 'low' {
  return config.weights.checks[checkId] ?? defaultWeight;
}
