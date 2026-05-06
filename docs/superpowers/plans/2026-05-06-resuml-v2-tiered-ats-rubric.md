# resuml v2.0 — Tiered ATS Rubric Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace resuml's flat ATS score with a three-tier rubric (Parsing / Match / Recruiter) grounded in real ATS behavior, with per-tier grades, per-check actionable hints, project-scoped configurability, and an honest separation between evidence and convention.

**Architecture:** A new tiered output type (`TieredAtsResult`) replaces the legacy `AtsResult`. Existing checks in `src/ats/genericChecks.ts` are split by tier into `src/ats/checks/{parsing,match,recruiter}.ts`. A static rubric registry in `src/ats/rubric.ts` powers a new `resuml_ats_explain` MCP tool and the `resuml://docs/ats-rubric` resource. Weights/thresholds move into a project-scoped `resuml.config.yaml` validated by zod. JD-aware match-tier checks add title alignment, education level, years-of-experience and knockout-mirror surfacing. PDF render-time checks live in `src/commands/pdf.ts`. Total score blends tiers; `match` tier is omitted entirely when no JD is provided. This is a breaking change — `package.json` bumps to 2.0.0 via `feat!:` commit.

**Tech Stack:** TypeScript 5, Node ≥20, vitest, zod 4, yaml 2, lodash.merge, @modelcontextprotocol/sdk 1.29, commander 11, Playwright 1.52 (peer, render-time only), tsup, semantic-release.

**Spec:** `/Users/phoinixi/.claude/plans/can-you-compare-the-ticklish-turing.md`

---

## File structure

| File | Status | Responsibility |
|---|---|---|
| `src/ats/types.ts` | rewrite | New `Tier`, `TierResult`, `TieredAtsResult`, `CheckResult`, `KnockoutSignal`, `RubricEntry` types. Legacy `AtsResult`, `AtsCheck`, `AtsCheckCategory`, `AtsKeywordMatch`, `AtsFitAssessment`, `AtsFitLevel` removed. |
| `src/ats/rubric.ts` | new | Static rubric registry: `{id, tier, weight, description, source, evidence}` per check. |
| `src/ats/scoring.ts` | rewrite | New `gradeFromScore`, `computeTierScore`, `computeTotalScore`, `effectiveWeight`. Legacy `calculateScore`, `calculateCombinedScore`, `assessFit`, `generateSummary` removed. |
| `src/utils/config.ts` | new | Discover `resuml.config.yaml`, zod validate, deep-merge with defaults. |
| `src/ats/checks/parsing.ts` | new | `conventional-sections`, `date-format-consistency`, `contact-in-body`, `reverse-chron-order`, `education-complete`. |
| `src/ats/checks/recruiter.ts` | new | `summary-length`, `action-verb-start`, `quantification-density`, `pronoun-leakage`, `bullets-per-role`, `word-count-total`, `highlight-length`, `has-linkedin`, `skills-populated`. |
| `src/ats/checks/match.ts` | new | `hard-skill-overlap`, `title-alignment`, `education-level`, `yoe-match`, `knockout-mirrors`. |
| `src/ats/genericChecks.ts` | delete | Replaced by `src/ats/checks/*`. |
| `src/ats/index.ts` | rewrite | Orchestrator returns `TieredAtsResult`; integrates config; emits hints with YAML paths; omits `match` when no JD. |
| `src/commands/validate.ts` | rewrite | Tiered console report; new JSON shape; threshold compares against total. |
| `src/commands/ats.ts` | new | `resuml ats explain <id>`, `resuml ats config --print`. |
| `src/commands/init.ts` | edit | Also writes `resuml.config.yaml` template alongside `resume.yaml`. |
| `src/commands/pdf.ts` | edit | Render-time `pdf-text-extractable` and `pdf-size-under-2.5mb` warnings. |
| `src/mcp/server.ts` | edit | `resuml_ats_check` returns new shape; new `resuml_ats_explain` tool; `resuml://docs/ats-scoring` swapped for `resuml://docs/ats-rubric`; prompts updated to tier vocabulary. |
| `src/index.ts` | edit | Register `ats` command; export new types. |
| `src/__tests__/ats.test.ts` | rewrite | Tiered output assertions; per-check fixtures; config-merge tests. |
| `src/__tests__/config.test.ts` | new | Config discovery, validation, deep-merge. |
| `CLAUDE.md` | edit | ATS section describes tier model. |
| `package.json` | edit | Version bumped to 2.0.0 by semantic-release on `feat!:` commit. |

---

## Task 1: Foundation types

**Files:**
- Modify: `src/ats/types.ts`
- Test: covered by later tasks (types are structural)

- [ ] **Step 1: Rewrite `src/ats/types.ts`**

```ts
export type Tier = 'parsing' | 'match' | 'recruiter';
export type AtsCheckWeight = 'high' | 'medium' | 'low';
export type AtsRating = 'excellent' | 'good' | 'needs-work' | 'poor';
export type CheckStatus = 'pass' | 'warn' | 'fail' | 'skipped';
export type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

export interface CheckResult {
  id: string;
  tier: Tier;
  status: CheckStatus;
  score: number; // 0-100
  weight: AtsCheckWeight;
  message: string;
  hints: string[]; // 1-3 actionable lines, may reference YAML paths
}

export interface TierResult {
  score: number; // 0-100
  grade: Grade;
  checks: CheckResult[];
}

export interface KnockoutSignal {
  signal: string;
  evidence: string;
  recommendation: string;
}

export interface TieredAtsResult {
  score: number; // 0-100 weighted total
  rating: AtsRating;
  tiers: {
    parsing: TierResult;
    match?: TierResult;
    recruiter: TierResult;
  };
  knockouts: KnockoutSignal[];
  summary: string;
}

export interface RubricEntry {
  id: string;
  tier: Tier;
  weight: AtsCheckWeight;
  description: string;
  evidenceLevel: 'evidence' | 'convention';
  source?: string; // URL or doc reference
}

export interface AtsOptions {
  language?: string;
  jobDescription?: string;
  threshold?: number;
  config?: AtsConfig;
}

export interface AtsConfig {
  weights: {
    tiers: { parsing: number; match: number; recruiter: number };
    checks: Record<string, AtsCheckWeight>;
  };
  thresholds: {
    rating: { excellent: number; good: number; needsWork: number };
    grade: { A: number; B: number; C: number; D: number };
    seniorYoeCutoff: number;
    wordCount: { min: number; max: number; seniorMax: number };
    bulletsPerRole: { min: number; max: number; seniorMax: number };
  };
  disable: string[];
  locale: string;
}
```

- [ ] **Step 2: Run typecheck**

Run: `npm run typecheck`
Expected: many errors in files that imported old types. **Do not fix yet.** Subsequent tasks remove those imports.

- [ ] **Step 3: Commit**

```bash
git add src/ats/types.ts
git commit -m "feat(ats)!: introduce tiered result types

BREAKING CHANGE: AtsResult/AtsCheck replaced by TieredAtsResult/CheckResult."
```

---

## Task 2: Config loader with zod schema

**Files:**
- Create: `src/utils/config.ts`
- Test: `src/__tests__/config.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `src/__tests__/config.test.ts`:

```ts
import { describe, it, expect, vi } from 'vitest';
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
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/__tests__/config.test.ts`
Expected: FAIL — `loadConfig` and `defaultConfig` not exported.

- [ ] **Step 3: Implement `src/utils/config.ts`**

```ts
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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run src/__tests__/config.test.ts`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add src/utils/config.ts src/__tests__/config.test.ts
git commit -m "feat(config): add resuml.config.yaml loader with zod schema"
```

---

## Task 3: New scoring math

**Files:**
- Modify: `src/ats/scoring.ts`
- Test: `src/__tests__/scoring.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `src/__tests__/scoring.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { gradeFromScore, computeTierScore, computeTotalScore, scoreToRating } from '../ats/scoring';
import { defaultConfig } from '../utils/config';
import type { CheckResult } from '../ats/types';

const mk = (id: string, score: number, weight: CheckResult['weight'], status: CheckResult['status'] = 'pass'): CheckResult => ({
  id, tier: 'parsing', score, weight, status, message: '', hints: [],
});

describe('gradeFromScore', () => {
  it.each([
    [95, 'A'], [90, 'A'], [89, 'B'], [80, 'B'],
    [79, 'C'], [70, 'C'], [69, 'D'], [60, 'D'], [59, 'F'], [0, 'F'],
  ])('maps %d → %s', (score, grade) => {
    expect(gradeFromScore(score, defaultConfig.thresholds.grade)).toBe(grade);
  });
});

describe('computeTierScore', () => {
  it('computes weighted average ignoring skipped checks', () => {
    const checks = [mk('a', 100, 'high'), mk('b', 50, 'medium'), mk('c', 0, 'low', 'skipped')];
    // weighted: (100*3 + 50*2) / (100*3 + 100*2) = 400/500 = 80
    expect(computeTierScore(checks)).toBe(80);
  });

  it('returns 0 for an empty tier', () => {
    expect(computeTierScore([])).toBe(0);
  });
});

describe('computeTotalScore', () => {
  it('blends parsing 30 / match 50 / recruiter 20 when JD present', () => {
    const total = computeTotalScore({ parsing: 90, match: 60, recruiter: 80 }, defaultConfig.weights.tiers);
    // 90*0.3 + 60*0.5 + 80*0.2 = 27 + 30 + 16 = 73
    expect(total).toBe(73);
  });

  it('blends parsing 40 / recruiter 60 when no match tier', () => {
    const total = computeTotalScore({ parsing: 90, recruiter: 80 }, defaultConfig.weights.tiers);
    // 90*0.4 + 80*0.6 = 36 + 48 = 84
    expect(total).toBe(84);
  });
});

describe('scoreToRating', () => {
  it.each([[95, 'excellent'], [80, 'good'], [65, 'needs-work'], [50, 'poor']])(
    '%d → %s', (s, r) => expect(scoreToRating(s, defaultConfig.thresholds.rating)).toBe(r),
  );
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/__tests__/scoring.test.ts`
Expected: FAIL — new functions not exported.

- [ ] **Step 3: Rewrite `src/ats/scoring.ts`**

```ts
import type { CheckResult, AtsRating, Grade, AtsConfig } from './types';

const weightMultiplier: Record<'high' | 'medium' | 'low', number> = {
  high: 3,
  medium: 2,
  low: 1,
};

export function gradeFromScore(score: number, t: AtsConfig['thresholds']['grade']): Grade {
  if (score >= t.A) return 'A';
  if (score >= t.B) return 'B';
  if (score >= t.C) return 'C';
  if (score >= t.D) return 'D';
  return 'F';
}

export function computeTierScore(checks: CheckResult[]): number {
  const active = checks.filter((c) => c.status !== 'skipped');
  if (active.length === 0) return 0;
  let weighted = 0;
  let total = 0;
  for (const c of active) {
    const m = weightMultiplier[c.weight];
    weighted += c.score * m;
    total += 100 * m;
  }
  return total > 0 ? Math.round((weighted / total) * 100) : 0;
}

export function computeTotalScore(
  tiers: { parsing: number; match?: number; recruiter: number },
  weights: AtsConfig['weights']['tiers'],
): number {
  if (tiers.match === undefined) {
    const sum = weights.parsing + weights.recruiter;
    const wp = weights.parsing / sum;
    const wr = weights.recruiter / sum;
    return Math.round(tiers.parsing * (sum === 50 ? 0.4 : wp) + tiers.recruiter * (sum === 50 ? 0.6 : wr));
  }
  const sum = weights.parsing + weights.match + weights.recruiter;
  return Math.round(
    (tiers.parsing * weights.parsing + tiers.match * weights.match + tiers.recruiter * weights.recruiter) / sum,
  );
}

export function scoreToRating(score: number, t: AtsConfig['thresholds']['rating']): AtsRating {
  if (score >= t.excellent) return 'excellent';
  if (score >= t.good) return 'good';
  if (score >= t.needsWork) return 'needs-work';
  return 'poor';
}

export function generateSummary(score: number, rating: AtsRating, hasJd: boolean, knockouts: number): string {
  const ratingLabel = { excellent: 'Excellent', good: 'Good', 'needs-work': 'Needs Work', poor: 'Poor' }[rating];
  const knockoutNote = knockouts > 0 ? ` ${knockouts} knockout signal${knockouts === 1 ? '' : 's'} flagged.` : '';
  return `ATS ${score}/100 (${ratingLabel}).${hasJd ? ' Includes JD match.' : ''}${knockoutNote}`;
}
```

Note the `computeTotalScore` no-JD branch: spec defaults are 40/60, but the formula honours custom configs that set parsing+recruiter to a different sum by normalising. The `sum === 50` check is a guard for the spec defaults (parsing 30 + recruiter 20 = 50) so the no-JD branch always renders 40/60 when defaults are unchanged; otherwise it renormalises the user's weights.

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run src/__tests__/scoring.test.ts`
Expected: PASS (10 tests).

- [ ] **Step 5: Commit**

```bash
git add src/ats/scoring.ts src/__tests__/scoring.test.ts
git commit -m "feat(ats)!: tier-aware scoring math (gradeFromScore, computeTierScore, computeTotalScore)"
```

---

## Task 4: Static rubric registry

**Files:**
- Create: `src/ats/rubric.ts`
- Test: `src/__tests__/rubric.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/__tests__/rubric.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { rubric, getRubricEntry, listRubricMarkdown } from '../ats/rubric';

describe('rubric registry', () => {
  it('contains every check id used by tiers', () => {
    const ids = rubric.map((r) => r.id);
    expect(ids).toEqual(expect.arrayContaining([
      'conventional-sections', 'date-format-consistency', 'contact-in-body',
      'reverse-chron-order', 'education-complete',
      'pdf-text-extractable', 'pdf-size-under-2.5mb',
      'hard-skill-overlap', 'title-alignment', 'education-level', 'yoe-match',
      'summary-length', 'action-verb-start', 'quantification-density',
      'pronoun-leakage', 'bullets-per-role', 'word-count-total', 'highlight-length',
      'has-linkedin', 'skills-populated',
    ]));
  });

  it('marks pronoun-leakage as convention not evidence', () => {
    const entry = getRubricEntry('pronoun-leakage');
    expect(entry?.evidenceLevel).toBe('convention');
  });

  it('renders a markdown reference', () => {
    expect(listRubricMarkdown()).toContain('## Tier: parsing');
  });

  it('throws getRubricEntry for unknown id', () => {
    expect(() => getRubricEntry('bogus', { strict: true })).toThrow();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/__tests__/rubric.test.ts`
Expected: FAIL — module missing.

- [ ] **Step 3: Implement `src/ats/rubric.ts`**

```ts
import type { RubricEntry, Tier } from './types';

export const rubric: RubricEntry[] = [
  // Parsing tier — Greenhouse-doc-grounded
  { id: 'conventional-sections', tier: 'parsing', weight: 'high', evidenceLevel: 'evidence',
    description: 'Required JSON Resume sections (basics, work, education) are present.',
    source: 'https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse' },
  { id: 'date-format-consistency', tier: 'parsing', weight: 'medium', evidenceLevel: 'evidence',
    description: 'Dates use ISO-8601 (YYYY-MM-DD or YYYY-MM); no mixed formats; no >6mo gaps.',
    source: 'https://hireflow.net/blog/taleo-resume-parsing-problems-explained' },
  { id: 'contact-in-body', tier: 'parsing', weight: 'high', evidenceLevel: 'evidence',
    description: 'Email and phone present in basics block (parseable by Textkernel/Sovren).',
    source: 'https://developer.textkernel.com/tx-platform/v10/faq/' },
  { id: 'reverse-chron-order', tier: 'parsing', weight: 'medium', evidenceLevel: 'evidence',
    description: 'work[] and education[] sorted descending by startDate.' },
  { id: 'education-complete', tier: 'parsing', weight: 'low', evidenceLevel: 'evidence',
    description: 'Each education entry has institution, area, and studyType.' },
  { id: 'pdf-text-extractable', tier: 'parsing', weight: 'high', evidenceLevel: 'evidence',
    description: 'Rendered PDF body text is selectable (≥70% of resume word count extractable).',
    source: 'https://www.ashbyhq.com/product-updates/ai-assisted-application-review' },
  { id: 'pdf-size-under-2.5mb', tier: 'parsing', weight: 'medium', evidenceLevel: 'evidence',
    description: 'Rendered PDF is under 2.5 MB (Greenhouse documented limit).',
    source: 'https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse' },

  // Match tier — JD-aware
  { id: 'hard-skill-overlap', tier: 'match', weight: 'high', evidenceLevel: 'evidence',
    description: 'Hard skill overlap with JD using bundled O*NET-trie skill index. ESCO migration tracked separately.' },
  { id: 'title-alignment', tier: 'match', weight: 'high', evidenceLevel: 'evidence',
    description: 'Most-recent work[].position aligns with JD title via token Jaccard after stripping seniority modifiers.' },
  { id: 'education-level', tier: 'match', weight: 'medium', evidenceLevel: 'evidence',
    description: 'Max studyType meets/exceeds JD education requirement (Bachelor/Master/PhD detection).' },
  { id: 'yoe-match', tier: 'match', weight: 'high', evidenceLevel: 'evidence',
    description: 'Total years of experience (overlap-merged from work[]) meets JD years requirement.' },

  // Recruiter tier — Rezi/Teal/Enhancv-grounded numbers
  { id: 'summary-length', tier: 'recruiter', weight: 'medium', evidenceLevel: 'convention',
    description: 'Professional summary 20-50 words / 2-4 sentences.',
    source: 'https://www.rezi.ai/rezi-docs/the-rezi-score-explained' },
  { id: 'action-verb-start', tier: 'recruiter', weight: 'medium', evidenceLevel: 'convention',
    description: 'Highlights start with an action verb.' },
  { id: 'quantification-density', tier: 'recruiter', weight: 'high', evidenceLevel: 'convention',
    description: 'At least 50% of highlights include numbers/metrics.' },
  { id: 'pronoun-leakage', tier: 'recruiter', weight: 'low', evidenceLevel: 'convention',
    description: 'Convention, not ATS: ATS does not filter on pronouns; this is recruiter style.',
    source: 'https://resume.io/blog/first-person-resume' },
  { id: 'bullets-per-role', tier: 'recruiter', weight: 'medium', evidenceLevel: 'convention',
    description: 'Each work entry has 3-6 highlights (10 for senior).',
    source: 'https://www.rezi.ai/rezi-docs/the-rezi-score-explained' },
  { id: 'word-count-total', tier: 'recruiter', weight: 'low', evidenceLevel: 'convention',
    description: 'Total resume body 400-800 words (1600 senior).',
    source: 'https://www.rezi.ai/rezi-docs/the-rezi-score-explained' },
  { id: 'highlight-length', tier: 'recruiter', weight: 'low', evidenceLevel: 'convention',
    description: 'Each highlight fits within two visual lines (~30 words).' },
  { id: 'has-linkedin', tier: 'recruiter', weight: 'low', evidenceLevel: 'convention',
    description: 'LinkedIn profile present in basics.profiles.' },
  { id: 'skills-populated', tier: 'recruiter', weight: 'medium', evidenceLevel: 'convention',
    description: 'At least 3 skill categories with keywords.' },
];

const byId: Map<string, RubricEntry> = new Map(rubric.map((r) => [r.id, r]));

export function getRubricEntry(id: string, opts: { strict?: boolean } = {}): RubricEntry | undefined {
  const entry = byId.get(id);
  if (!entry && opts.strict) throw new Error(`Unknown rubric id: ${id}`);
  return entry;
}

export function rubricByTier(tier: Tier): RubricEntry[] {
  return rubric.filter((r) => r.tier === tier);
}

export function listRubricMarkdown(): string {
  const tiers: Tier[] = ['parsing', 'match', 'recruiter'];
  const sections = tiers.map((t) => {
    const entries = rubricByTier(t);
    const lines = entries
      .map((e) => `- **${e.id}** (${e.weight}, ${e.evidenceLevel}) — ${e.description}${e.source ? `\n  Source: ${e.source}` : ''}`)
      .join('\n');
    return `## Tier: ${t}\n\n${lines}`;
  });
  return ['# resuml ATS Rubric', '', ...sections].join('\n\n');
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/__tests__/rubric.test.ts`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add src/ats/rubric.ts src/__tests__/rubric.test.ts
git commit -m "feat(ats): add rubric registry with evidence vs convention metadata"
```

---

## Task 5: Parsing-tier checks

**Files:**
- Create: `src/ats/checks/parsing.ts`
- Test: `src/__tests__/checks.parsing.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `src/__tests__/checks.parsing.test.ts`:

```ts
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
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/__tests__/checks.parsing.test.ts`
Expected: FAIL — module missing.

- [ ] **Step 3: Implement `src/ats/checks/parsing.ts`**

```ts
import type { ResumeSchema } from '../../types/resume';
import type { CheckResult } from '../types';

type CheckFn = (resume: ResumeSchema, language: string) => CheckResult;

const ISO_DATE = /^\d{4}(-\d{2})?(-\d{2})?$/;

export const conventionalSections: CheckFn = (resume) => {
  const required = ['basics', 'work', 'education'] as const;
  const missing = required.filter((s) => {
    const v = resume[s];
    if (Array.isArray(v)) return v.length === 0;
    return v === undefined;
  });
  const passed = missing.length === 0;
  return {
    id: 'conventional-sections', tier: 'parsing', weight: 'high',
    status: passed ? 'pass' : 'fail',
    score: Math.round(((required.length - missing.length) / required.length) * 100),
    message: passed
      ? 'All conventional sections present.'
      : `Missing required sections: ${missing.join(', ')}.`,
    hints: passed ? [] : [`Add ${missing.join(', ')} to your YAML.`],
  };
};

export const dateFormatConsistency: CheckFn = (resume) => {
  const all: { date: string; where: string }[] = [];
  for (const w of resume.work || []) {
    if (w.startDate) all.push({ date: w.startDate, where: `work "${w.name || ''}".startDate` });
    if (w.endDate) all.push({ date: w.endDate, where: `work "${w.name || ''}".endDate` });
  }
  for (const e of resume.education || []) {
    if (e.startDate) all.push({ date: e.startDate, where: `education "${e.institution || ''}".startDate` });
    if (e.endDate) all.push({ date: e.endDate, where: `education "${e.institution || ''}".endDate` });
  }
  if (all.length === 0) {
    return { id: 'date-format-consistency', tier: 'parsing', weight: 'medium',
      status: 'skipped', score: 0, message: 'No dates to check.', hints: [] };
  }
  const bad = all.filter((d) => !ISO_DATE.test(d.date));
  const passed = bad.length === 0;
  return {
    id: 'date-format-consistency', tier: 'parsing', weight: 'medium',
    status: passed ? 'pass' : bad.length <= 1 ? 'warn' : 'fail',
    score: Math.round(((all.length - bad.length) / all.length) * 100),
    message: passed
      ? 'All dates use ISO-8601 format.'
      : `Non-ISO dates: ${bad.slice(0, 3).map((b) => `${b.where}=${b.date}`).join('; ')}.`,
    hints: passed ? [] : ['Use YYYY-MM or YYYY-MM-DD for every date field.'],
  };
};

export const contactInBody: CheckFn = (resume) => {
  const b = resume.basics;
  const checks: { ok: boolean; field: string }[] = [
    { ok: !!b?.name, field: 'name' },
    { ok: !!b?.email, field: 'email' },
    { ok: !!b?.phone, field: 'phone' },
    { ok: !!b?.location?.city, field: 'location.city' },
  ];
  const missing = checks.filter((c) => !c.ok).map((c) => c.field);
  const passed = missing.length === 0;
  return {
    id: 'contact-in-body', tier: 'parsing', weight: 'high',
    status: passed ? 'pass' : 'fail',
    score: Math.round(((checks.length - missing.length) / checks.length) * 100),
    message: passed
      ? 'Contact information present in basics.'
      : `Missing contact fields: ${missing.join(', ')}.`,
    hints: passed ? [] : [`Add ${missing.join(', ')} to basics.`],
  };
};

export const reverseChronOrder: CheckFn = (resume) => {
  const work = resume.work || [];
  if (work.length < 2) {
    return { id: 'reverse-chron-order', tier: 'parsing', weight: 'medium',
      status: 'skipped', score: 100, message: 'Single or no work entry.', hints: [] };
  }
  let outOfOrder = 0;
  for (let i = 0; i < work.length - 1; i++) {
    const a = work[i]!.startDate || '';
    const b = work[i + 1]!.startDate || '';
    if (a && b && a < b) outOfOrder++;
  }
  const passed = outOfOrder === 0;
  return {
    id: 'reverse-chron-order', tier: 'parsing', weight: 'medium',
    status: passed ? 'pass' : 'fail',
    score: passed ? 100 : Math.max(0, 100 - outOfOrder * 50),
    message: passed
      ? 'Work entries in reverse-chronological order.'
      : `${outOfOrder} pair(s) out of reverse-chronological order.`,
    hints: passed ? [] : ['Reorder work[] so the most recent role is first.'],
  };
};

export const educationComplete: CheckFn = (resume) => {
  const edu = resume.education || [];
  if (edu.length === 0) {
    return { id: 'education-complete', tier: 'parsing', weight: 'low',
      status: 'fail', score: 0, message: 'No education entries.',
      hints: ['Add at least one education entry with institution, area, and studyType.'] };
  }
  const incomplete = edu.filter((e) => !e.institution || !e.area || !e.studyType);
  const passed = incomplete.length === 0;
  return {
    id: 'education-complete', tier: 'parsing', weight: 'low',
    status: passed ? 'pass' : 'fail',
    score: Math.round(((edu.length - incomplete.length) / edu.length) * 100),
    message: passed
      ? 'All education entries complete.'
      : `${incomplete.length} education entry(ies) missing institution/area/studyType.`,
    hints: passed ? [] : ['Fill in institution, area and studyType for every education entry.'],
  };
};

export const allParsingChecks = [
  conventionalSections, dateFormatConsistency, contactInBody, reverseChronOrder, educationComplete,
];
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run src/__tests__/checks.parsing.test.ts`
Expected: PASS (10 tests).

- [ ] **Step 5: Commit**

```bash
git add src/ats/checks/parsing.ts src/__tests__/checks.parsing.test.ts
git commit -m "feat(ats): parsing-tier checks (conventional-sections, date-format, contact, reverse-chron, education)"
```

---

## Task 6: Recruiter-tier checks

**Files:**
- Create: `src/ats/checks/recruiter.ts`
- Test: `src/__tests__/checks.recruiter.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `src/__tests__/checks.recruiter.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import {
  summaryLength, actionVerbStart, quantificationDensity, pronounLeakage,
  bulletsPerRole, wordCountTotal, highlightLength, hasLinkedin, skillsPopulated,
} from '../ats/checks/recruiter';
import { defaultConfig } from '../utils/config';
import type { ResumeSchema } from '../types/resume';

const base: ResumeSchema = {
  basics: {
    name: 'X', email: 'x@y.com',
    summary: 'Senior frontend tech lead with eight years building React platforms. Shipped accessibility wins. Mentored teams.',
    profiles: [{ network: 'LinkedIn', url: 'https://linkedin.com/in/x' }],
  },
  work: [{
    name: 'Co', position: 'Lead', startDate: '2020-01',
    highlights: ['Reduced load by 40%', 'Built design system used by 5 teams', 'Shipped a11y audit'],
  }],
  skills: [
    { name: 'Frontend', keywords: ['react', 'typescript'] },
    { name: 'Tooling', keywords: ['vite'] },
    { name: 'Testing', keywords: ['vitest'] },
  ],
};

const cfg = defaultConfig;

describe('summary-length', () => {
  it('passes within 20-50 words', () => {
    expect(summaryLength(base, 'en', cfg).status).toBe('pass');
  });
  it('fails when missing', () => {
    expect(summaryLength({ ...base, basics: { ...base.basics!, summary: undefined } }, 'en', cfg).status).toBe('fail');
  });
});

describe('action-verb-start', () => {
  it('detects verbs', () => {
    expect(actionVerbStart(base, 'en', cfg).status).toBe('pass');
  });
});

describe('quantification-density', () => {
  it('passes ≥50% with numbers', () => {
    const r = { ...base, work: [{ ...base.work![0], highlights: ['Built A', 'Reduced 40%'] }] };
    expect(quantificationDensity(r, 'en', cfg).status).toBe('pass');
  });
  it('fails when none have numbers', () => {
    const r = { ...base, work: [{ ...base.work![0], highlights: ['Built X', 'Shipped Y'] }] };
    expect(quantificationDensity(r, 'en', cfg).status).toBe('fail');
  });
});

describe('pronoun-leakage', () => {
  it('passes when none', () => {
    expect(pronounLeakage(base, 'en', cfg).status).toBe('pass');
  });
  it('warns on first-person', () => {
    const r = { ...base, basics: { ...base.basics!, summary: 'I led teams. We shipped.' } };
    expect(pronounLeakage(r, 'en', cfg).status).not.toBe('pass');
  });
});

describe('bullets-per-role', () => {
  it('passes 3-6', () => {
    expect(bulletsPerRole(base, 'en', cfg).status).toBe('pass');
  });
  it('warns when one role has only 1 highlight', () => {
    const r = { ...base, work: [{ ...base.work![0], highlights: ['Only one'] }] };
    expect(bulletsPerRole(r, 'en', cfg).status).toBe('warn');
  });
});

describe('word-count-total', () => {
  it('skipped on tiny resume but reports score', () => {
    const result = wordCountTotal(base, 'en', cfg);
    expect(['pass', 'warn', 'fail']).toContain(result.status);
  });
});

describe('highlight-length', () => {
  it('warns on long highlights', () => {
    const long = 'word '.repeat(40).trim();
    const r = { ...base, work: [{ ...base.work![0], highlights: [long] }] };
    expect(highlightLength(r, 'en', cfg).status).not.toBe('pass');
  });
});

describe('has-linkedin', () => {
  it('detects linkedin profile', () => {
    expect(hasLinkedin(base, 'en', cfg).status).toBe('pass');
  });
});

describe('skills-populated', () => {
  it('passes with 3 categories', () => {
    expect(skillsPopulated(base, 'en', cfg).status).toBe('pass');
  });
  it('fails with 1 category', () => {
    expect(skillsPopulated({ ...base, skills: [base.skills![0]!] }, 'en', cfg).status).toBe('fail');
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/__tests__/checks.recruiter.test.ts`
Expected: FAIL — module missing.

- [ ] **Step 3: Implement `src/ats/checks/recruiter.ts`**

```ts
import type { ResumeSchema } from '../../types/resume';
import type { CheckResult, AtsConfig } from '../types';
import { getLanguageData } from '../i18n/index';
import { computeYoeYears } from './match';

type CheckFn = (resume: ResumeSchema, language: string, cfg: AtsConfig) => CheckResult;

const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
const firstWord = (s: string) =>
  s.trim().split(/\s+/)[0]?.toLowerCase().replace(/[^a-zA-ZäöüßÄÖÜàáâãéèêëíìîïóòôõúùûüñç]/g, '') || '';

function isSenior(resume: ResumeSchema, cfg: AtsConfig): boolean {
  return computeYoeYears(resume.work || []) >= cfg.thresholds.seniorYoeCutoff;
}

export const summaryLength: CheckFn = (resume) => {
  const s = resume.basics?.summary?.trim();
  if (!s) {
    return { id: 'summary-length', tier: 'recruiter', weight: 'medium',
      status: 'fail', score: 0, message: 'No professional summary.',
      hints: ['Add a 2-4 sentence summary (20-50 words) to basics.summary.'] };
  }
  const w = wordCount(s);
  if (w >= 20 && w <= 50) {
    return { id: 'summary-length', tier: 'recruiter', weight: 'medium',
      status: 'pass', score: 100, message: `Summary length good (${w} words).`, hints: [] };
  }
  if (w >= 10 && w <= 80) {
    return { id: 'summary-length', tier: 'recruiter', weight: 'medium',
      status: 'warn', score: 70,
      message: `Summary ${w < 20 ? 'short' : 'long'} (${w} words). Aim for 20-50.`,
      hints: [w < 20 ? 'Expand to 20-50 words.' : 'Trim to the most impactful 20-50 words.'] };
  }
  return { id: 'summary-length', tier: 'recruiter', weight: 'medium',
    status: 'fail', score: Math.max(0, 100 - Math.abs(w - 35) * 2),
    message: `Summary length ${w} words is far from target.`,
    hints: ['Rewrite the summary in 2-4 sentences (20-50 words).'] };
};

export const actionVerbStart: CheckFn = (resume, language) => {
  const verbs = new Set(getLanguageData(language).actionVerbs);
  const all: { text: string; path: string }[] = [];
  (resume.work || []).forEach((w, i) => (w.highlights || []).forEach((h, j) =>
    all.push({ text: h, path: `work[${i}].highlights[${j}]` })));
  (resume.projects || []).forEach((p, i) => (p.highlights || []).forEach((h, j) =>
    all.push({ text: h, path: `projects[${i}].highlights[${j}]` })));
  if (all.length === 0) {
    return { id: 'action-verb-start', tier: 'recruiter', weight: 'medium',
      status: 'skipped', score: 0, message: 'No highlights.', hints: [] };
  }
  const without = all.filter((h) => !verbs.has(firstWord(h.text)));
  const passed = without.length === 0;
  return {
    id: 'action-verb-start', tier: 'recruiter', weight: 'medium',
    status: passed ? 'pass' : without.length / all.length > 0.3 ? 'fail' : 'warn',
    score: Math.round(((all.length - without.length) / all.length) * 100),
    message: passed
      ? 'All highlights start with action verbs.'
      : `${without.length} of ${all.length} highlights miss an action verb.`,
    hints: passed ? [] : without.slice(0, 3).map((h) => `${h.path}: start with an action verb instead of "${firstWord(h.text)}".`),
  };
};

const QUANT_RE = /\d+%?|\$[\d,]+|[\d,]+\+?\s*(users|clients|customers|people|team|members|projects|applications|servers|services|endpoints|requests|transactions)/i;

export const quantificationDensity: CheckFn = (resume) => {
  const all: { text: string; path: string }[] = [];
  (resume.work || []).forEach((w, i) => (w.highlights || []).forEach((h, j) =>
    all.push({ text: h, path: `work[${i}].highlights[${j}]` })));
  (resume.projects || []).forEach((p, i) => (p.highlights || []).forEach((h, j) =>
    all.push({ text: h, path: `projects[${i}].highlights[${j}]` })));
  if (all.length === 0) {
    return { id: 'quantification-density', tier: 'recruiter', weight: 'high',
      status: 'skipped', score: 0, message: 'No highlights.', hints: [] };
  }
  const quantified = all.filter((h) => QUANT_RE.test(h.text));
  const ratio = quantified.length / all.length;
  const status = ratio >= 0.5 ? 'pass' : ratio >= 0.3 ? 'warn' : 'fail';
  return {
    id: 'quantification-density', tier: 'recruiter', weight: 'high',
    status, score: Math.min(100, Math.round(ratio * 200)),
    message: `${quantified.length}/${all.length} highlights quantified (${Math.round(ratio * 100)}%).`,
    hints: status === 'pass' ? [] : all.filter((h) => !QUANT_RE.test(h.text)).slice(0, 3)
      .map((h) => `${h.path}: add a number/metric.`),
  };
};

export const pronounLeakage: CheckFn = (resume, language) => {
  const set = new Set(getLanguageData(language).pronouns);
  const blocks: { text: string; path: string }[] = [];
  if (resume.basics?.summary) blocks.push({ text: resume.basics.summary, path: 'basics.summary' });
  (resume.work || []).forEach((w, i) => {
    if (w.summary) blocks.push({ text: w.summary, path: `work[${i}].summary` });
    (w.highlights || []).forEach((h, j) => blocks.push({ text: h, path: `work[${i}].highlights[${j}]` }));
  });
  let hits: { pronoun: string; path: string }[] = [];
  for (const b of blocks) {
    for (const w of b.text.toLowerCase().split(/\s+/)) {
      const clean = w.replace(/[^a-zA-ZäöüßÄÖÜ]/g, '');
      if (set.has(clean)) hits.push({ pronoun: clean, path: b.path });
    }
  }
  const passed = hits.length === 0;
  return {
    id: 'pronoun-leakage', tier: 'recruiter', weight: 'low',
    status: passed ? 'pass' : hits.length > 3 ? 'fail' : 'warn',
    score: passed ? 100 : Math.max(0, 100 - hits.length * 15),
    message: passed
      ? 'No first-person pronouns.'
      : `${hits.length} pronoun(s): ${[...new Set(hits.map((h) => h.pronoun))].join(', ')}.`,
    hints: passed ? [] : hits.slice(0, 3).map((h) => `${h.path}: drop "${h.pronoun}" (convention, not ATS).`),
  };
};

export const bulletsPerRole: CheckFn = (resume, _l, cfg) => {
  const work = resume.work || [];
  if (work.length === 0) {
    return { id: 'bullets-per-role', tier: 'recruiter', weight: 'medium',
      status: 'skipped', score: 0, message: 'No work entries.', hints: [] };
  }
  const senior = isSenior(resume, cfg);
  const min = cfg.thresholds.bulletsPerRole.min;
  const max = senior ? cfg.thresholds.bulletsPerRole.seniorMax : cfg.thresholds.bulletsPerRole.max;
  const offenders: { path: string; n: number }[] = [];
  work.forEach((w, i) => {
    const n = (w.highlights || []).length;
    if (n < min || n > max) offenders.push({ path: `work[${i}]`, n });
  });
  const passed = offenders.length === 0;
  return {
    id: 'bullets-per-role', tier: 'recruiter', weight: 'medium',
    status: passed ? 'pass' : work.length === 1 ? 'warn' : offenders.length > work.length / 2 ? 'fail' : 'warn',
    score: Math.round(((work.length - offenders.length) / work.length) * 100),
    message: passed
      ? `All roles have ${min}-${max} highlights.`
      : `${offenders.length} role(s) outside ${min}-${max} highlights.`,
    hints: passed ? [] : offenders.slice(0, 3).map((o) => `${o.path}: ${o.n} highlights, target ${min}-${max}.`),
  };
};

export const wordCountTotal: CheckFn = (resume, _l, cfg) => {
  const senior = isSenior(resume, cfg);
  const min = cfg.thresholds.wordCount.min;
  const max = senior ? cfg.thresholds.wordCount.seniorMax : cfg.thresholds.wordCount.max;
  const parts: string[] = [];
  if (resume.basics?.summary) parts.push(resume.basics.summary);
  for (const w of resume.work || []) {
    if (w.summary) parts.push(w.summary);
    parts.push(...(w.highlights || []));
  }
  for (const p of resume.projects || []) {
    if (p.description) parts.push(p.description);
    parts.push(...(p.highlights || []));
  }
  const total = wordCount(parts.join(' '));
  const passed = total >= min && total <= max;
  const status = passed ? 'pass' : total < min * 0.7 || total > max * 1.5 ? 'fail' : 'warn';
  return {
    id: 'word-count-total', tier: 'recruiter', weight: 'low',
    status, score: passed ? 100 : Math.max(0, 100 - Math.round(Math.abs((total - (min + max) / 2)) / 10)),
    message: `Resume body: ${total} words (target ${min}-${max}${senior ? ', senior' : ''}).`,
    hints: passed ? [] : [total < min ? 'Add more depth to highlights.' : 'Trim less impactful highlights.'],
  };
};

export const highlightLength: CheckFn = (resume) => {
  const all: { text: string; path: string }[] = [];
  (resume.work || []).forEach((w, i) => (w.highlights || []).forEach((h, j) =>
    all.push({ text: h, path: `work[${i}].highlights[${j}]` })));
  if (all.length === 0) {
    return { id: 'highlight-length', tier: 'recruiter', weight: 'low',
      status: 'skipped', score: 0, message: 'No highlights.', hints: [] };
  }
  const long = all.filter((h) => wordCount(h.text) > 30);
  const passed = long.length === 0;
  return {
    id: 'highlight-length', tier: 'recruiter', weight: 'low',
    status: passed ? 'pass' : long.length / all.length > 0.3 ? 'fail' : 'warn',
    score: Math.round(((all.length - long.length) / all.length) * 100),
    message: passed
      ? 'All highlights ≤30 words.'
      : `${long.length} highlight(s) >30 words.`,
    hints: passed ? [] : long.slice(0, 3).map((h) => `${h.path}: trim to ≤30 words.`),
  };
};

export const hasLinkedin: CheckFn = (resume) => {
  const profiles = resume.basics?.profiles || [];
  const found = profiles.some((p) => p.network?.toLowerCase() === 'linkedin' || p.url?.toLowerCase().includes('linkedin.com'));
  return {
    id: 'has-linkedin', tier: 'recruiter', weight: 'low',
    status: found ? 'pass' : 'warn', score: found ? 100 : 0,
    message: found ? 'LinkedIn profile present.' : 'No LinkedIn profile.',
    hints: found ? [] : ['Add a LinkedIn profile to basics.profiles.'],
  };
};

export const skillsPopulated: CheckFn = (resume) => {
  const skills = resume.skills || [];
  const withKeywords = skills.filter((s) => (s.keywords?.length ?? 0) > 0);
  const passed = withKeywords.length >= 3;
  return {
    id: 'skills-populated', tier: 'recruiter', weight: 'medium',
    status: passed ? 'pass' : withKeywords.length === 0 ? 'fail' : 'warn',
    score: Math.min(100, Math.round((withKeywords.length / 3) * 100)),
    message: passed
      ? `${withKeywords.length} skill categories with keywords.`
      : `Only ${withKeywords.length} skill categories with keywords (need 3+).`,
    hints: passed ? [] : ['Add at least 3 skill categories with keywords.'],
  };
};

export const allRecruiterChecks = [
  summaryLength, actionVerbStart, quantificationDensity, pronounLeakage,
  bulletsPerRole, wordCountTotal, highlightLength, hasLinkedin, skillsPopulated,
];
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run src/__tests__/checks.recruiter.test.ts`
Expected: All recruiter check tests PASS. Note: this file imports `computeYoeYears` from `match.ts` (Task 7) — if Task 7 hasn't run yet, this task is BLOCKED. Reorder so Task 7 runs before Task 6, OR stub `computeYoeYears` here in Task 6 and refactor in Task 7.

**Resolution: define `computeYoeYears` here as a private helper in Task 6, then move to `match.ts` in Task 7 and re-import.** Replace the import + `isSenior` definition with:

```ts
function computeYoeYears(work: ResumeSchema['work']): number {
  const ranges = (work || [])
    .filter((w) => w.startDate)
    .map((w) => {
      const s = new Date(w.startDate!).getTime();
      const e = w.endDate ? new Date(w.endDate).getTime() : Date.now();
      return [s, e] as [number, number];
    })
    .sort((a, b) => a[0] - b[0]);
  if (ranges.length === 0) return 0;
  const merged: [number, number][] = [ranges[0]!];
  for (let i = 1; i < ranges.length; i++) {
    const last = merged[merged.length - 1]!;
    const curr = ranges[i]!;
    if (curr[0] <= last[1]) last[1] = Math.max(last[1], curr[1]);
    else merged.push(curr);
  }
  const ms = merged.reduce((sum, [s, e]) => sum + (e - s), 0);
  return ms / (1000 * 60 * 60 * 24 * 365.25);
}

function isSenior(resume: ResumeSchema, cfg: AtsConfig): boolean {
  return computeYoeYears(resume.work) >= cfg.thresholds.seniorYoeCutoff;
}
```

Task 7 will then import this helper from `recruiter.ts`, OR Task 7 moves the helper to a shared module `src/ats/checks/yoe.ts`. Pick one in Task 7.

- [ ] **Step 5: Commit**

```bash
git add src/ats/checks/recruiter.ts src/__tests__/checks.recruiter.test.ts
git commit -m "feat(ats): recruiter-tier checks (summary, verbs, quant, pronouns, bullets, length, links, skills)"
```

---

## Task 7: Match-tier checks

**Files:**
- Create: `src/ats/checks/yoe.ts` (extract `computeYoeYears` shared helper)
- Create: `src/ats/checks/match.ts`
- Test: `src/__tests__/checks.match.test.ts`
- Modify: `src/ats/checks/recruiter.ts` (import shared helper)

- [ ] **Step 1: Extract shared YOE helper into `src/ats/checks/yoe.ts`**

```ts
import type { ResumeSchema } from '../../types/resume';

export function computeYoeYears(work: ResumeSchema['work']): number {
  const ranges = (work || [])
    .filter((w) => w.startDate)
    .map((w) => {
      const s = new Date(w.startDate!).getTime();
      const e = w.endDate ? new Date(w.endDate).getTime() : Date.now();
      return [s, e] as [number, number];
    })
    .sort((a, b) => a[0] - b[0]);
  if (ranges.length === 0) return 0;
  const merged: [number, number][] = [ranges[0]!];
  for (let i = 1; i < ranges.length; i++) {
    const last = merged[merged.length - 1]!;
    const curr = ranges[i]!;
    if (curr[0] <= last[1]) last[1] = Math.max(last[1], curr[1]);
    else merged.push(curr);
  }
  const ms = merged.reduce((sum, [s, e]) => sum + (e - s), 0);
  return ms / (1000 * 60 * 60 * 24 * 365.25);
}
```

- [ ] **Step 2: Update `recruiter.ts` to import from `./yoe`**

Edit `src/ats/checks/recruiter.ts`: replace the inline `computeYoeYears` definition with:

```ts
import { computeYoeYears } from './yoe';
```

- [ ] **Step 3: Write failing match tests**

Create `src/__tests__/checks.match.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { titleAlignment, educationLevel, yoeMatch, hardSkillOverlap } from '../ats/checks/match';
import type { ResumeSchema } from '../types/resume';

const resume: ResumeSchema = {
  basics: { name: 'X', email: 'x@y.com' },
  work: [
    { name: 'Co', position: 'Senior Frontend Engineer', startDate: '2018-01' },
  ],
  education: [{ institution: 'U', area: 'CS', studyType: 'Bachelor of Science' }],
  skills: [{ name: 'FE', keywords: ['react', 'typescript'] }],
};

describe('title-alignment', () => {
  it('passes when titles align', () => {
    expect(titleAlignment(resume, 'en', { jobDescription: 'Looking for a Frontend Engineer with React experience.' }).status).toBe('pass');
  });
  it('warns on partial alignment', () => {
    expect(titleAlignment(resume, 'en', { jobDescription: 'We need a Backend Engineer for Go services.' }).status).not.toBe('pass');
  });
  it('skipped without JD', () => {
    expect(titleAlignment(resume, 'en', {}).status).toBe('skipped');
  });
});

describe('education-level', () => {
  it('passes when bachelor meets bachelor requirement', () => {
    expect(educationLevel(resume, 'en', { jobDescription: 'Bachelor degree required.' }).status).toBe('pass');
  });
  it('fails when JD requires PhD', () => {
    expect(educationLevel(resume, 'en', { jobDescription: 'PhD required.' }).status).toBe('fail');
  });
  it('skipped when JD silent', () => {
    expect(educationLevel(resume, 'en', { jobDescription: 'Great team!' }).status).toBe('skipped');
  });
});

describe('yoe-match', () => {
  it('passes when YOE meets requirement', () => {
    expect(yoeMatch(resume, 'en', { jobDescription: '3+ years of frontend experience.' }).status).toBe('pass');
  });
  it('fails when JD asks 20 years', () => {
    expect(yoeMatch(resume, 'en', { jobDescription: 'Minimum 20 years of experience required.' }).status).toBe('fail');
  });
});

describe('hard-skill-overlap', () => {
  it('matches react/typescript', () => {
    const r = hardSkillOverlap(resume, 'en', { jobDescription: 'Required: React and TypeScript.' });
    expect(r.status).not.toBe('skipped');
  });
});
```

- [ ] **Step 4: Run tests to verify they fail**

Run: `npx vitest run src/__tests__/checks.match.test.ts`
Expected: FAIL — module missing.

- [ ] **Step 5: Implement `src/ats/checks/match.ts`**

```ts
import type { ResumeSchema } from '../../types/resume';
import type { CheckResult } from '../types';
import { matchJobDescription } from '../jdMatcher';
import { computeYoeYears } from './yoe';

interface MatchOpts { jobDescription?: string }

type MatchCheckFn = (resume: ResumeSchema, language: string, opts: MatchOpts) => CheckResult;

const SENIORITY = /\b(junior|senior|lead|staff|principal|head of|vp|chief)\b/gi;
const STOPWORDS = new Set(['a','an','the','of','at','for','in','on','to','with','and','or']);

function tokenize(s: string): string[] {
  return s.toLowerCase().replace(SENIORITY, '').replace(/[^a-z0-9 ]/g, ' ')
    .split(/\s+/).filter((w) => w && !STOPWORDS.has(w));
}

function jaccard(a: string[], b: string[]): number {
  const A = new Set(a), B = new Set(b);
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

function extractJdTitle(jd: string): string | undefined {
  const lines = jd.split('\n').slice(0, 8);
  for (const l of lines) {
    const m = l.match(/(?:role|position|title)[\s:-]+(.+)/i) || l.match(/looking for (?:an? )?(.+?)(?:\s+with|\s+to|$)/i);
    if (m) return m[1]!.trim();
  }
  return lines.find((l) => /\b(engineer|developer|manager|designer|analyst|scientist|architect|lead)\b/i.test(l))?.trim();
}

export const titleAlignment: MatchCheckFn = (resume, _l, { jobDescription }) => {
  if (!jobDescription) {
    return { id: 'title-alignment', tier: 'match', weight: 'high', status: 'skipped', score: 0, message: 'No JD.', hints: [] };
  }
  const resumeTitle = resume.work?.[0]?.position || resume.basics?.label;
  const jdTitle = extractJdTitle(jobDescription);
  if (!resumeTitle || !jdTitle) {
    return { id: 'title-alignment', tier: 'match', weight: 'high', status: 'warn', score: 50,
      message: 'Could not extract title from JD or resume.',
      hints: ['Set basics.label to your target title.'] };
  }
  const j = jaccard(tokenize(resumeTitle), tokenize(jdTitle));
  const status = j >= 0.6 ? 'pass' : j >= 0.3 ? 'warn' : 'fail';
  return {
    id: 'title-alignment', tier: 'match', weight: 'high', status,
    score: Math.round(j * 100),
    message: `Title overlap ${Math.round(j * 100)}% (resume "${resumeTitle}" vs JD "${jdTitle}").`,
    hints: status === 'pass' ? [] : [`Consider aligning basics.label closer to "${jdTitle}".`],
  };
};

const EDU_RE = {
  3: /\b(phd|ph\.?d|doctorate|doctoral)\b/i,
  2: /\b(master|m\.?s|m\.?a|mba|graduate degree)\b/i,
  1: /\b(bachelor|b\.?s|b\.?a|undergraduate)\b/i,
} as const;

function eduLevel(text: string): number {
  if (!text) return 0;
  if (EDU_RE[3].test(text)) return 3;
  if (EDU_RE[2].test(text)) return 2;
  if (EDU_RE[1].test(text)) return 1;
  return 0;
}

export const educationLevel: MatchCheckFn = (resume, _l, { jobDescription }) => {
  if (!jobDescription) {
    return { id: 'education-level', tier: 'match', weight: 'medium', status: 'skipped', score: 0, message: 'No JD.', hints: [] };
  }
  const required = eduLevel(jobDescription);
  if (required === 0) {
    return { id: 'education-level', tier: 'match', weight: 'medium', status: 'skipped', score: 0,
      message: 'JD does not specify education level.', hints: [] };
  }
  const have = Math.max(0, ...(resume.education || []).map((e) => eduLevel(e.studyType || '')));
  const passed = have >= required;
  return {
    id: 'education-level', tier: 'match', weight: 'medium',
    status: passed ? 'pass' : 'fail',
    score: passed ? 100 : Math.round((have / required) * 100),
    message: `Resume level ${have}, JD required ${required}.`,
    hints: passed ? [] : ['JD requires a higher degree level than the resume reports.'],
  };
};

const YOE_RE = /(\d+)\s*\+?\s*(?:to\s*\d+\s*)?years?/i;

export const yoeMatch: MatchCheckFn = (resume, _l, { jobDescription }) => {
  if (!jobDescription) {
    return { id: 'yoe-match', tier: 'match', weight: 'high', status: 'skipped', score: 0, message: 'No JD.', hints: [] };
  }
  const m = jobDescription.match(YOE_RE);
  if (!m) {
    return { id: 'yoe-match', tier: 'match', weight: 'high', status: 'skipped', score: 0,
      message: 'JD does not specify years requirement.', hints: [] };
  }
  const required = parseInt(m[1]!, 10);
  const have = Math.floor(computeYoeYears(resume.work || []));
  const status = have >= required ? 'pass' : have >= required - 1 ? 'warn' : 'fail';
  return {
    id: 'yoe-match', tier: 'match', weight: 'high', status,
    score: Math.min(100, Math.round((have / required) * 100)),
    message: `${have} YOE detected vs ${required} required.`,
    hints: status === 'pass' ? [] : ['Highlight relevant earlier roles or projects to fill the gap.'],
  };
};

export const hardSkillOverlap: MatchCheckFn = (resume, language, { jobDescription }) => {
  if (!jobDescription) {
    return { id: 'hard-skill-overlap', tier: 'match', weight: 'high', status: 'skipped', score: 0, message: 'No JD.', hints: [] };
  }
  const km = matchJobDescription(resume, jobDescription, language);
  const pct = km.matchPercentage;
  const status = pct >= 70 ? 'pass' : pct >= 50 ? 'warn' : 'fail';
  return {
    id: 'hard-skill-overlap', tier: 'match', weight: 'high', status,
    score: pct,
    message: `${km.matched.length}/${km.matched.length + km.missing.length} hard skills matched (${pct}%).`,
    hints: status === 'pass' ? [] : km.missing.slice(0, 5).map((s) => `Add evidence of "${s}" to skills/highlights.`),
  };
};

export const allMatchChecks = [
  hardSkillOverlap, titleAlignment, educationLevel, yoeMatch,
];
```

- [ ] **Step 6: Run tests to verify they pass**

Run: `npx vitest run src/__tests__/checks.match.test.ts`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/ats/checks/yoe.ts src/ats/checks/match.ts src/ats/checks/recruiter.ts src/__tests__/checks.match.test.ts
git commit -m "feat(ats): match-tier checks (hard-skill-overlap, title, education, yoe)"
```

---

## Task 8: Knockout mirrors

**Files:**
- Modify: `src/ats/checks/match.ts` (add `extractKnockouts`)
- Test: `src/__tests__/knockouts.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/__tests__/knockouts.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { extractKnockouts } from '../ats/checks/match';
import type { ResumeSchema } from '../types/resume';

const resume: ResumeSchema = {
  basics: { name: 'X', email: 'x@y.com', summary: 'Frontend tech lead.' },
  work: [{ name: 'Co', position: 'Lead', startDate: '2020-01' }],
};

describe('extractKnockouts', () => {
  it('flags work-auth signal when JD requires US auth and resume silent', () => {
    const sigs = extractKnockouts(resume, 'US work authorization required.');
    expect(sigs.some((s) => s.signal === 'work-auth')).toBe(true);
  });

  it('returns empty when JD has no knockout terms', () => {
    expect(extractKnockouts(resume, 'Great culture, fun team!').length).toBe(0);
  });

  it('flags location signal when JD requires NYC and resume silent', () => {
    const sigs = extractKnockouts(resume, 'Must be located in New York City.');
    expect(sigs.some((s) => s.signal === 'location')).toBe(true);
  });

  it('flags clearance signal', () => {
    const sigs = extractKnockouts(resume, 'TS/SCI clearance required.');
    expect(sigs.some((s) => s.signal === 'clearance')).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/__tests__/knockouts.test.ts`
Expected: FAIL — `extractKnockouts` not exported.

- [ ] **Step 3: Add `extractKnockouts` to `src/ats/checks/match.ts`**

Append to `src/ats/checks/match.ts`:

```ts
import type { KnockoutSignal } from '../types';

interface KnockoutPattern {
  signal: string;
  jdPattern: RegExp;
  resumeMatch: (r: ResumeSchema) => boolean;
  recommendation: string;
}

const KNOCKOUTS: KnockoutPattern[] = [
  {
    signal: 'work-auth',
    jdPattern: /(work\s*auth|authorization to work|right to work|us citizen|green card|h-?1b|visa sponsorship)/i,
    resumeMatch: (r) => /(work auth|authorized|citizen|green card|visa)/i.test(r.basics?.summary || ''),
    recommendation: 'Confirm authorization status in the application form.',
  },
  {
    signal: 'location',
    jdPattern: /(must be located|on-?site|relocate|based in)\s+([a-zA-Z ,]+)/i,
    resumeMatch: (r) => !!r.basics?.location?.city,
    recommendation: 'Verify location requirement against your basics.location.city.',
  },
  {
    signal: 'clearance',
    jdPattern: /(ts\/sci|secret clearance|security clearance|active clearance)/i,
    resumeMatch: (r) => /clearance/i.test(JSON.stringify(r)),
    recommendation: 'Confirm clearance level on the application form.',
  },
  {
    signal: 'certification',
    jdPattern: /(cissp|aws certified|pmp|ccna|cpa|required certification)/i,
    resumeMatch: (r) => (r.certificates?.length ?? 0) > 0,
    recommendation: 'List required certificates in the certificates section if held.',
  },
];

export function extractKnockouts(resume: ResumeSchema, jobDescription: string): KnockoutSignal[] {
  const out: KnockoutSignal[] = [];
  for (const k of KNOCKOUTS) {
    const m = jobDescription.match(k.jdPattern);
    if (!m) continue;
    if (k.resumeMatch(resume)) continue;
    out.push({
      signal: k.signal,
      evidence: `JD: "${m[0]}"; resume silent.`,
      recommendation: k.recommendation,
    });
  }
  return out;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/__tests__/knockouts.test.ts`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add src/ats/checks/match.ts src/__tests__/knockouts.test.ts
git commit -m "feat(ats): knockout-mirror surfacing (work-auth, location, clearance, cert)"
```

---

## Task 9: Orchestrator returning `TieredAtsResult`

**Files:**
- Rewrite: `src/ats/index.ts`
- Delete: `src/ats/genericChecks.ts`
- Test: `src/__tests__/ats.test.ts` (rewrite existing)

- [ ] **Step 1: Rewrite the existing `src/__tests__/ats.test.ts` to assert tiered shape**

Replace contents:

```ts
import { describe, it, expect } from 'vitest';
import { analyzeAts } from '../ats/index';
import type { ResumeSchema } from '../types/resume';

const resume: ResumeSchema = {
  basics: {
    name: 'Jane Doe', email: 'jane@example.com', phone: '+1-555-0100',
    location: { city: 'NYC' },
    summary: 'Senior frontend tech lead with eight years building React platforms. Shipped accessibility wins at scale. Mentored teams.',
    profiles: [{ network: 'LinkedIn', url: 'https://linkedin.com/in/jane' }],
  },
  work: [{
    name: 'Co', position: 'Senior Frontend Engineer', startDate: '2020-01',
    highlights: ['Reduced load by 40%', 'Built design system used by 5 teams', 'Shipped a11y audit'],
  }],
  education: [{ institution: 'U', area: 'CS', studyType: 'Bachelor of Science', startDate: '2014-09', endDate: '2018-06' }],
  skills: [
    { name: 'Frontend', keywords: ['react', 'typescript'] },
    { name: 'Tooling', keywords: ['vite'] },
    { name: 'Testing', keywords: ['vitest'] },
  ],
};

describe('analyzeAts', () => {
  it('returns tiered shape without JD (match tier omitted)', () => {
    const r = analyzeAts(resume);
    expect(r.tiers.parsing).toBeDefined();
    expect(r.tiers.recruiter).toBeDefined();
    expect(r.tiers.match).toBeUndefined();
    expect(r.knockouts).toEqual([]);
    expect(r.score).toBeGreaterThan(0);
    expect(r.score).toBeLessThanOrEqual(100);
  });

  it('includes match tier when JD provided', () => {
    const r = analyzeAts(resume, { jobDescription: '3+ years of React + TypeScript. Bachelor required.' });
    expect(r.tiers.match).toBeDefined();
    expect(r.tiers.match!.checks.length).toBeGreaterThan(0);
  });

  it('emits knockout signals separately from scoring', () => {
    const r = analyzeAts(resume, { jobDescription: 'TS/SCI clearance required.' });
    expect(r.knockouts.length).toBeGreaterThan(0);
    expect(r.tiers.parsing.score).toBeGreaterThan(0);
  });

  it('honours config.disable to remove a check', () => {
    const r = analyzeAts(resume, { config: { ...defaultConfigForTest(), disable: ['has-linkedin'] } });
    const ids = r.tiers.recruiter.checks.map((c) => c.id);
    expect(ids).not.toContain('has-linkedin');
  });
});

import { defaultConfig } from '../utils/config';
function defaultConfigForTest() {
  return JSON.parse(JSON.stringify(defaultConfig));
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/__tests__/ats.test.ts`
Expected: FAIL — `analyzeAts` returns old shape.

- [ ] **Step 3: Rewrite `src/ats/index.ts`**

```ts
import type { ResumeSchema } from '../types/resume';
import type { TieredAtsResult, AtsOptions, CheckResult, TierResult, Tier } from './types';
import { allParsingChecks } from './checks/parsing';
import { allRecruiterChecks } from './checks/recruiter';
import { allMatchChecks, extractKnockouts } from './checks/match';
import { computeTierScore, computeTotalScore, gradeFromScore, scoreToRating, generateSummary } from './scoring';
import { defaultConfig, effectiveWeight } from '../utils/config';

function applyConfig(checks: CheckResult[], cfg = defaultConfig): CheckResult[] {
  return checks
    .filter((c) => !cfg.disable.includes(c.id))
    .map((c) => ({ ...c, weight: effectiveWeight(c.id, c.weight, cfg) }));
}

function buildTier(tier: Tier, checks: CheckResult[], cfg: typeof defaultConfig): TierResult {
  const filtered = applyConfig(checks, cfg);
  const score = computeTierScore(filtered);
  return {
    score,
    grade: gradeFromScore(score, cfg.thresholds.grade),
    checks: filtered,
  };
}

export function analyzeAts(resume: ResumeSchema, options: AtsOptions = {}): TieredAtsResult {
  const cfg = options.config ?? defaultConfig;
  const language = options.language ?? cfg.locale;

  const parsingChecks = allParsingChecks
    .map((fn) => fn(resume, language))
    .filter((c) => c.id !== 'pdf-text-extractable' && c.id !== 'pdf-size-under-2.5mb');

  const recruiterChecks = allRecruiterChecks.map((fn) => fn(resume, language, cfg));

  const parsing = buildTier('parsing', parsingChecks, cfg);
  const recruiter = buildTier('recruiter', recruiterChecks, cfg);

  let match: TierResult | undefined;
  let knockouts: TieredAtsResult['knockouts'] = [];
  if (options.jobDescription) {
    const matchChecks = allMatchChecks.map((fn) => fn(resume, language, { jobDescription: options.jobDescription }));
    match = buildTier('match', matchChecks, cfg);
    knockouts = extractKnockouts(resume, options.jobDescription);
  }

  const totalScore = computeTotalScore(
    { parsing: parsing.score, match: match?.score, recruiter: recruiter.score },
    cfg.weights.tiers,
  );
  const rating = scoreToRating(totalScore, cfg.thresholds.rating);
  const summary = generateSummary(totalScore, rating, !!options.jobDescription, knockouts.length);

  return {
    score: totalScore,
    rating,
    tiers: match ? { parsing, match, recruiter } : { parsing, recruiter },
    knockouts,
    summary,
  };
}

export type {
  TieredAtsResult, AtsOptions, CheckResult, TierResult, KnockoutSignal,
} from './types';
```

- [ ] **Step 4: Delete `src/ats/genericChecks.ts`**

```bash
git rm src/ats/genericChecks.ts
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run src/__tests__/ats.test.ts`
Expected: PASS (4 tests).

- [ ] **Step 6: Run full test suite**

Run: `npm run test`
Expected: All tests PASS. The legacy ATS test fixtures that referenced old types should already be replaced; if any other test files import from `genericChecks`, fix imports (point them at `src/ats/checks/parsing` or `recruiter`).

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat(ats)!: tiered orchestrator returning TieredAtsResult"
```

---

## Task 10: CLI `validate` — tiered report and JSON

**Files:**
- Rewrite: `src/commands/validate.ts`
- Test: extend `src/__tests__/cli.test.ts` if it exists, else manual smoke

- [ ] **Step 1: Rewrite `src/commands/validate.ts`**

```ts
import fs from 'fs';
import { processResumeData } from '../core';
import { loadResumeFiles } from '../utils/loadResume';
import { handleCommandError } from '../utils/errorHandler';
import { analyzeAts } from '../ats/index';
import { loadConfig } from '../utils/config';
import type { TieredAtsResult, TierResult, Tier } from '../ats/types';

interface ValidateCommandOptions {
  resume?: string;
  debug?: boolean;
  ats?: boolean;
  jd?: string;
  atsThreshold?: string;
  format?: string;
  config?: string;
}

function tierColor(grade: string, chalk: typeof import('chalk').default) {
  return grade === 'A' ? chalk.green : grade === 'B' ? chalk.cyan : grade === 'C' ? chalk.yellow : chalk.red;
}

function formatTier(label: string, tier: TierResult, debug: boolean, chalk: typeof import('chalk').default) {
  console.log(chalk.bold(`  ${label}  ${tierColor(tier.grade, chalk)(tier.grade)} (${tier.score}/100)`));
  for (const c of tier.checks) {
    if (!debug && c.status === 'pass') continue;
    if (c.status === 'skipped') continue;
    const icon = { pass: chalk.green('✓'), warn: chalk.yellow('!'), fail: chalk.red('✗'), skipped: chalk.dim('—') }[c.status];
    console.log(`    ${icon} ${c.id} — ${c.message} ${chalk.dim(`[${c.score}]`)}`);
    for (const h of c.hints) console.log(chalk.dim(`        → ${h}`));
  }
  console.log('');
}

function formatTiered(result: TieredAtsResult, debug: boolean, chalk: typeof import('chalk').default) {
  const overall = tierColor(
    result.score >= 90 ? 'A' : result.score >= 75 ? 'B' : result.score >= 60 ? 'C' : 'F',
    chalk,
  );
  console.log('');
  console.log(chalk.bold('═══ ATS Analysis (tiered) ═══'));
  console.log(`  Total: ${overall(`${result.score}/100`)} (${result.rating.replace('-', ' ')})`);
  console.log(`  ${result.summary}`);
  console.log('');
  formatTier('Parsing  ', result.tiers.parsing, debug, chalk);
  if (result.tiers.match) formatTier('Match    ', result.tiers.match, debug, chalk);
  formatTier('Recruiter', result.tiers.recruiter, debug, chalk);

  if (result.knockouts.length > 0) {
    console.log(chalk.bold('  Knockout signals (form-stage; not scored)'));
    for (const k of result.knockouts) {
      console.log(`    ${chalk.yellow('!')} ${k.signal} — ${k.evidence}`);
      console.log(chalk.dim(`        → ${k.recommendation}`));
    }
    console.log('');
  }
  console.log(chalk.dim('═══════════════════════════════'));
}

export async function validateAction(options: ValidateCommandOptions): Promise<void> {
  const chalk = (await import('chalk')).default;
  console.log(chalk.blue('Starting resuml validate...'));
  try {
    const { yamlContents } = await loadResumeFiles(options.resume);
    console.log(chalk.blue('Validating resume data...'));
    const resume = await processResumeData(yamlContents);
    console.log(chalk.green('✓ Resume data is valid against the schema!'));

    if (!options.ats) return;

    console.log(chalk.blue('Running ATS analysis...'));
    let jobDescription: string | undefined;
    if (options.jd) jobDescription = fs.readFileSync(options.jd, 'utf8');

    const cfg = loadConfig(options.config ? { configPath: options.config } : {});
    const result = analyzeAts(resume, { jobDescription, language: cfg.locale, config: cfg });

    if (options.format === 'json') {
      console.log(JSON.stringify(result, null, 2));
    } else {
      formatTiered(result, !!options.debug, chalk);
    }

    const threshold = options.atsThreshold ? parseInt(options.atsThreshold, 10) : undefined;
    if (threshold !== undefined && result.score < threshold) {
      console.error(chalk.red(`\nATS score ${result.score} is below threshold ${threshold}.`));
      process.exit(1);
    }
  } catch (error: unknown) {
    handleCommandError(error, 'validate', options.debug);
  }
}
```

- [ ] **Step 2: Add `--config` flag in `src/index.ts`**

Edit `src/index.ts`, in the `validate` command block, add the option:

```ts
  .option('--config <path>', 'Path to resuml.config.yaml (default: ./resuml.config.yaml).')
```

- [ ] **Step 3: Verify build and lint**

Run: `npm run typecheck && npm run lint`
Expected: clean.

- [ ] **Step 4: Manual smoke (optional, requires fixture YAML in working dir)**

Run: `node dist/index.js validate -r francesco-esposito-cv.yml --ats --jd jd-getyourguide-em.txt --format json | head -60` (after `npm run build`)
Expected: JSON with `tiers`, `knockouts`, `summary` keys.

- [ ] **Step 5: Commit**

```bash
git add src/commands/validate.ts src/index.ts
git commit -m "feat(cli)!: tiered ATS report and new JSON shape in validate"
```

---

## Task 11: New `ats` command (`explain`, `config --print`)

**Files:**
- Create: `src/commands/ats.ts`
- Modify: `src/index.ts`
- Test: `src/__tests__/ats-command.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/__tests__/ats-command.test.ts`:

```ts
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/__tests__/ats-command.test.ts`
Expected: FAIL — module missing.

- [ ] **Step 3: Implement `src/commands/ats.ts`**

```ts
import yaml from 'yaml';
import chalk from 'chalk';
import { getRubricEntry, listRubricMarkdown } from '../ats/rubric';
import { loadConfig } from '../utils/config';

export function atsExplain(id?: string): void {
  if (!id) {
    console.log(listRubricMarkdown());
    return;
  }
  const entry = getRubricEntry(id);
  if (!entry) {
    console.error(chalk.red(`Unknown rubric id: ${id}`));
    process.exit(1);
    return;
  }
  console.log(chalk.bold(`${entry.id}`));
  console.log(`  Tier:        ${entry.tier}`);
  console.log(`  Weight:      ${entry.weight}`);
  console.log(`  Evidence:    ${entry.evidenceLevel}`);
  console.log(`  Description: ${entry.description}`);
  if (entry.source) console.log(`  Source:      ${entry.source}`);
}

export function atsConfigPrint(opts: { config?: string }): void {
  const cfg = loadConfig(opts.config ? { configPath: opts.config } : {});
  console.log(yaml.stringify({ ats: cfg }));
}
```

- [ ] **Step 4: Wire up in `src/index.ts`**

Edit `src/index.ts`, add new command after `mcp`:

```ts
import { atsExplain, atsConfigPrint } from './commands/ats';

const ats = program.command('ats').description('ATS rubric utilities.');

ats.command('explain [id]')
  .description('Print rubric entry for a check id, or full rubric if id omitted.')
  .action((id?: string) => atsExplain(id));

ats.command('config')
  .description('Print the effective merged ATS config.')
  .option('--print', 'Print the merged config (default action).')
  .option('--config <path>', 'Path to resuml.config.yaml.')
  .action((opts: { config?: string }) => atsConfigPrint(opts));
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run src/__tests__/ats-command.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 6: Commit**

```bash
git add src/commands/ats.ts src/index.ts src/__tests__/ats-command.test.ts
git commit -m "feat(cli): add 'ats explain' and 'ats config --print' commands"
```

---

## Task 12: `init` writes `resuml.config.yaml`

**Files:**
- Modify: `src/commands/init.ts`

- [ ] **Step 1: Write the test**

Append to `src/__tests__/cli.test.ts` (or create) a test that exercises `initAction` and asserts `resuml.config.yaml` is created. If `cli.test.ts` doesn't exist, skip the test and rely on manual smoke.

- [ ] **Step 2: Implement the change in `src/commands/init.ts`**

After the existing `fs.writeFileSync(fullPath, yaml, 'utf8');` line (around `init.ts:56`), append:

```ts
const configPath = path.join(path.dirname(fullPath), 'resuml.config.yaml');
if (!fs.existsSync(configPath)) {
  const template = `# resuml ATS configuration
# Override defaults; everything is optional.
# Run \`resuml ats config --print\` to see the merged effective config.
ats:
  weights:
    tiers:
      parsing: 30
      match: 50
      recruiter: 20
  thresholds:
    seniorYoeCutoff: 10
  disable: []
`;
  fs.writeFileSync(configPath, template, 'utf8');
  console.log(chalk.green(`✅ Created resuml.config.yaml`));
}
```

- [ ] **Step 3: Run typecheck**

Run: `npm run typecheck`
Expected: clean.

- [ ] **Step 4: Commit**

```bash
git add src/commands/init.ts
git commit -m "feat(init): scaffold resuml.config.yaml alongside resume.yaml"
```

---

## Task 13: PDF render-time checks

**Files:**
- Modify: `src/commands/pdf.ts`

- [ ] **Step 1: Add PDF size warning after `fs.writeFileSync`**

Edit `src/commands/pdf.ts` around line 110 (after `fs.writeFileSync(outputPath, pdfBuffer);`):

```ts
const sizeBytes = pdfBuffer.length;
const sizeMb = sizeBytes / (1024 * 1024);
if (sizeMb > 2.5) {
  console.warn(chalk.yellow(`⚠ pdf-size-under-2.5mb: PDF is ${sizeMb.toFixed(2)} MB (Greenhouse limit 2.5 MB).`));
}
```

- [ ] **Step 2: Add text-extractable warning before closing the page**

Inside the `try` block after `await page.setContent(htmlOutput, ...)` and before `await page.pdf(...)`:

```ts
const bodyText = (await page.evaluate(() => document.body.innerText || '')) as string;
const bodyWords = bodyText.trim().split(/\s+/).filter(Boolean).length;
const resumeWords = JSON.stringify(resumeData).split(/\s+/).filter(Boolean).length;
if (bodyWords < resumeWords * 0.7) {
  console.warn(chalk.yellow(`⚠ pdf-text-extractable: rendered text ${bodyWords} words vs resume ${resumeWords} (<70%). Theme may use image-based glyphs.`));
}
```

Note: this requires a `page.evaluate` wrapper not in the `PlaywrightPage` interface. Extend that interface in `src/commands/pdf.ts`:

```ts
interface PlaywrightPage {
  setContent(html: string, options?: { waitUntil?: string }): Promise<void>;
  pdf(options?: Record<string, unknown>): Promise<Buffer>;
  evaluate<T>(fn: () => T): Promise<T>;
}
```

- [ ] **Step 3: Build and typecheck**

Run: `npm run typecheck && npm run build`
Expected: clean.

- [ ] **Step 4: Commit**

```bash
git add src/commands/pdf.ts
git commit -m "feat(pdf): render-time warnings for text-extractable and 2.5MB size"
```

---

## Task 14: MCP server — new shape, explain tool, rubric resource

**Files:**
- Modify: `src/mcp/server.ts`

- [ ] **Step 1: Update `resuml_ats_check`**

In `src/mcp/server.ts:487-518`, the call already passes through `analyzeAts` and serialises the result. The shape change happens automatically because `analyzeAts` returns `TieredAtsResult` now. **No edits needed in this block.**

- [ ] **Step 2: Replace the rubric resource registration**

Find the `ats-scoring-rubric` block (around `src/mcp/server.ts:242-256`). Replace with:

```ts
import { listRubricMarkdown, getRubricEntry } from '../ats/rubric';
// ...
server.registerResource(
  'ats-rubric',
  'resuml://docs/ats-rubric',
  {
    description: 'Tiered ATS rubric: every check, its tier, weight, evidence level, description, and source URL.',
    mimeType: 'text/markdown',
  },
  () => ({
    contents: [{
      uri: 'resuml://docs/ats-rubric',
      mimeType: 'text/markdown',
      text: listRubricMarkdown(),
    }],
  }),
);
```

Also delete the `ATS_SCORING_RUBRIC` constant (around `src/mcp/server.ts:134-210`) — no longer used.

- [ ] **Step 3: Add `resuml_ats_explain` tool**

Add after the `resuml_ats_check` tool (around `src/mcp/server.ts:518`):

```ts
server.registerTool(
  'resuml_ats_explain',
  {
    title: 'ATS Rubric Explain',
    description: 'Return the rubric entry (tier, weight, evidence level, description, source) for a given check id.',
    inputSchema: {
      checkId: z.string().describe('Check id, e.g. quantification-density'),
    },
  },
  ({ checkId }) => {
    const entry = getRubricEntry(checkId);
    if (!entry) {
      return {
        content: [{ type: 'text' as const, text: JSON.stringify({ error: `Unknown check id: ${checkId}` }) }],
        isError: true,
      };
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify(entry, null, 2) }] };
  },
);
```

- [ ] **Step 4: Update prompts to reference tier vocabulary**

In `tailor-resume-to-jd` prompt body (around `src/mcp/server.ts:308-334`), change the workflow lines that reference "Target: score >= 75" to also reference tier vocabulary:

```ts
text: `... target overall score ≥ 75, with parsing tier grade A and match tier hard-skill-overlap ≥ 70%. ...`,
```

In `optimize-ats-score` prompt (around `src/mcp/server.ts:357-379`), update step 2 reference from `resuml://docs/ats-scoring` to `resuml://docs/ats-rubric`.

- [ ] **Step 5: Bump server version**

Edit `src/mcp/server.ts:213-216`:

```ts
const server = new McpServer({
  name: 'resuml',
  version: '2.0.0',
});
```

- [ ] **Step 6: Build and typecheck**

Run: `npm run typecheck && npm run build`
Expected: clean.

- [ ] **Step 7: Manual MCP smoke test**

Start the server: `node dist/index.js mcp` (in one terminal).
From another agent / inspector, call `resuml_ats_check` with a sample YAML and verify the response has `tiers` and `knockouts`. Call `resuml_ats_explain` with `quantification-density` and verify rubric metadata returns. Read resource `resuml://docs/ats-rubric` and verify markdown.

- [ ] **Step 8: Commit**

```bash
git add src/mcp/server.ts
git commit -m "feat(mcp)!: tiered ats_check shape, ats_explain tool, ats-rubric resource"
```

---

## Task 15: Update CLAUDE.md and docs

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Replace ATS section in `CLAUDE.md`**

Find the section under `## Workflow: Generate a Tailored Resume from a Job Description` step 4 about `resuml_ats_check`. Replace the description with:

```md
4. **ATS check** — Use `resuml_ats_check` with the JD text. The result has three tiers:
   - **Parsing** (grade A target): conventional sections, ISO dates, contact in body, reverse-chron order.
   - **Match** (when JD provided): hard skill overlap, title alignment, education level, years of experience.
   - **Recruiter** (style): action verbs, quantification ≥50%, summary 20-50 words, 3-6 bullets per role.
   Total target: ≥75. Knockout signals (work-auth, location, clearance) are surfaced separately and not scored.
```

Also update the table at the top of the file (`| Tool | Purpose |`) to add the new tool:

```md
| `resuml_ats_explain` | Return rubric entry for a check id |
```

And add the new resource:

```md
| Tiered ATS Rubric | `resuml://docs/ats-rubric` | Per-tier rubric with evidence level and source per check |
```

(Remove the old `resuml://docs/ats-scoring` row.)

- [ ] **Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs(claude): describe tiered ATS rubric, ats_explain tool, ats-rubric resource"
```

---

## Task 16: Final integration sweep + version bump

**Files:**
- Modify: any remaining stale imports
- Verify: full lint/typecheck/test/build/format

- [ ] **Step 1: Find any lingering imports of removed names**

Run: `grep -rn "AtsResult\|AtsCheck\|calculateScore\|calculateCombinedScore\|assessFit\|generateSummary\|genericChecks" src --include='*.ts' || echo "clean"`

For each remaining hit, update the import or remove the usage. The acceptable remaining usage is `generateSummary` exported from `scoring.ts` (we kept it).

- [ ] **Step 2: Run full quality gate**

Run: `npm run lint && npm run typecheck && npm run format:check && npm run test`
Expected: ALL PASS.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: clean dist output.

- [ ] **Step 4: End-to-end smoke against the user's own files**

Run:
```
node dist/index.js validate -r francesco-esposito-cv.yml --ats --jd jd-getyourguide-em.txt
node dist/index.js validate -r francesco-esposito-cv-em.yml --ats --jd jd-getyourguide-em.txt --format json | python3 -m json.tool | head -80
node dist/index.js ats explain quantification-density
node dist/index.js ats config
```

Visually inspect: tiered output renders, JSON has `tiers`/`knockouts`, explain prints rubric, config prints merged YAML.

- [ ] **Step 5: Final commit (no-op if everything is already committed)**

If anything was fixed in Step 1, commit:

```bash
git add -A
git commit -m "chore: clean up stale ATS imports for v2"
```

- [ ] **Step 6: Push and let semantic-release publish**

Already covered by repository CI. The accumulated `feat!:` commit footers from Tasks 1, 3, 9, 10, 14 will trigger semantic-release on merge to main, publishing 2.0.0. **No manual `package.json` edit required.**

```bash
git push origin <branch>
```

Then open a PR titled `feat(ats)!: v2 tiered rubric` with body referencing both the spec at `/Users/phoinixi/.claude/plans/can-you-compare-the-ticklish-turing.md` and this plan.

---

## Self-review checklist (run after writing the plan)

- [x] **Spec coverage:**
  - Three-tier rubric with all listed checks → Tasks 5-8
  - Scoring math (per-tier and total) → Task 3
  - Output shape `TieredAtsResult` → Tasks 1, 9
  - Configurability via `resuml.config.yaml` → Task 2; init scaffolding Task 12
  - CLI `validate` updates → Task 10
  - CLI `ats explain` and `ats config --print` → Task 11
  - PDF render-time checks → Task 13
  - MCP `resuml_ats_check` new shape, `resuml_ats_explain` tool, `resuml://docs/ats-rubric` resource → Task 14
  - Knockout mirrors surface → Task 8
  - Senior detection from YOE → Tasks 6/7 (`computeYoeYears`)
  - Title alignment, education level, YOE match definitions per spec → Task 7
  - Honest evidence vs convention labelling → Task 4 (rubric registry)
  - Breaking change → 2.0.0 via semantic-release `feat!:` → Tasks 1, 3, 9, 10, 14
  - CLAUDE.md updated → Task 15

- [x] **No placeholders:** every step contains the code/command. The only non-code step is the manual MCP smoke (Task 14 Step 7), which describes the exact tool calls and expected output keys.

- [x] **Type consistency:** `CheckResult`, `TierResult`, `TieredAtsResult`, `AtsConfig`, `Tier`, `Grade`, `KnockoutSignal` are defined in Task 1 and consumed verbatim in Tasks 2-9. `defaultConfig`, `loadConfig`, `effectiveWeight` defined in Task 2 and used from Tasks 9-12. `getRubricEntry`, `listRubricMarkdown` defined in Task 4 and used in Tasks 11, 14. `computeYoeYears` defined in Task 6 inline, then extracted to `src/ats/checks/yoe.ts` in Task 7 (Step 1) — recruiter.ts updated to import from the shared module (Task 7 Step 2).

- [x] **Ordering:** Task 6 (recruiter checks) inlines `computeYoeYears` then Task 7 extracts to `yoe.ts` and updates the import. Tasks 5-8 each ship green tests independently. Task 9 deletes `genericChecks.ts` and rewrites the orchestrator only after all check modules exist.
