# Technical Plan — seniority-match

> Owner: **software-engineer** · Phase: `/plan` · Reads: approved `spec.md` (+ `design.md`)
> Status: approved   <!-- flipped to "approved" by /approve · do not edit by hand -->

## Architecture overview

The feature adds one new module (`src/ats/seniority.ts`), one new ATS check
(`seniorityMatch` in `src/ats/checks/match.ts`), one new rubric entry
(`src/ats/rubric.ts`), a pre-filter gate in `src/jobs/normalize.ts`, and a new
optional field on `SearchResult` in `src/jobs/types.ts`.

The dependency graph is:

```
src/jobs/query.ts           (consumer: imports from seniority.ts)
src/ats/checks/match.ts     (consumer: imports from seniority.ts)
        |
        v
src/ats/seniority.ts        (new shared module -- single source of truth)
        |
        |  (re-exports SeniorityLevel, SENIORITY_ORDER)
        v
src/jobs/types.ts           (SeniorityLevel already defined here; NOT duplicated)
```

Key constraint: `src/ats/seniority.ts` MUST NOT import from `src/jobs/query.ts`
(would create a cycle: query -> seniority -> query). Instead, `query.ts` imports
`detectSeniorityFromTitle`, `seniorityFromYoe`, and `SENIORITY_ORDER` from
`seniority.ts` once Task 1 is done.

`SeniorityLevel` type stays in `src/jobs/types.ts` as the canonical type
declaration. `seniority.ts` imports it from there (no cycle: types.ts has no
imports from jobs or ats). `SENIORITY_ORDER` and all extraction logic live only
in `seniority.ts`.

## Components and boundaries

| Component | Responsibility | Depends on | Satisfies |
|---|---|---|---|
| `src/ats/seniority.ts` (new) | Single source of truth: `SENIORITY_ORDER`, `bandLabelToLevel`, `extractJdSeniority`, `extractCvSeniority`, `gapBetween`, `scoreFromGap`, `isManagementRole`, `isIcResume`, `detectSeniorityFromTitle`, `seniorityFromYoe` | `src/jobs/types.ts` (for `SeniorityLevel`), `src/ats/checks/yoe.ts` (for `computeYoeYears`) | FR-3, FR-4, FR-9 |
| `src/jobs/query.ts` (modified) | Remove local `SENIORITY_PATTERNS`, `detectSeniorityFromTitle`, `seniorityFromYoe`, `SENIORITY_ORDER`, `maxSeniority`; import equivalents from `seniority.ts` | `src/ats/seniority.ts` | FR-4, FR-9 |
| `seniorityMatch` check (new fn in `match.ts`) | Implements FR-1 and FR-2 scoring table; detects IC/management skip (FR-5); calls `extractCvSeniority`, `extractJdSeniority`, `gapBetween`, `scoreFromGap`, `isManagementRole`, `isIcResume` | `src/ats/seniority.ts` | FR-1, FR-2, FR-5 |
| `allMatchChecks` reorder (in `match.ts`) | Insert `seniorityMatch` after `roleFamilyMatch`, before `hardSkillOverlap`; extend `SENIORITY` regex used by `tokenize` for FR-7 | `src/ats/checks/match.ts` | FR-7 |
| `src/ats/rubric.ts` (modified) | Add `seniority-match` entry with `evidenceLevel: 'evidence'` and LinkedIn patent + KDD 2024 source | `src/ats/types.ts` | FR-8 |
| `applyQueryFilters` seniority gate (in `normalize.ts`) | Drop postings with JD level gap >= 3; pass no-signal postings through; return `seniorityFilteredCount` | `src/ats/seniority.ts`, `src/jobs/types.ts` | FR-6 |
| `SearchResult.seniorityFilteredCount` (in `types.ts`) | Optional `number` field for pre-filter tally; backward compat (optional) | `src/jobs/types.ts` | FR-6 |
| `searchJobs` plumbing (in `jobs/index.ts`) | Capture `seniorityFilteredCount` returned by `applyQueryFilters` and attach to `SearchResult` | `src/jobs/normalize.ts`, `src/jobs/types.ts` | FR-6 |
| Tests: `src/__tests__/seniority.test.ts` (new) | Unit tests for the shared module (extraction, scoring, management detection) | `src/ats/seniority.ts` | FR-11 |
| Tests: `src/__tests__/checks.seniority.test.ts` (new) | Unit tests for `seniorityMatch` check (all gap values, IC/management skip, no-JD skip) | `src/ats/checks/match.ts` | FR-11 |
| Tests: `src/__tests__/jobs/seniority-filter.test.ts` (new) | Unit tests for pre-filter (gap >= 3 dropped, gap 2 kept, no-signal kept) | `src/jobs/normalize.ts` | FR-11 |

## Data model

No new persisted state. All computation is pure / in-memory.

`SearchResult` gains one optional field:

```typescript
interface SearchResult {
  // ...existing fields...
  seniorityFilteredCount?: number;  // postings dropped by the level-gap pre-filter
}
```

`applyQueryFilters` return type changes from `JobPosting[]` to
`{ postings: JobPosting[]; seniorityFilteredCount: number }` so the count
propagates to `searchJobs`.

The six-level scale and band-label mapping live only in `src/ats/seniority.ts`:

```
SENIORITY_ORDER = ['intern', 'junior', 'mid', 'senior', 'staff', 'principal']

Band-label map (v1 coverage):
  L3=junior, L4=mid, L5=senior, L6=staff, L7=principal
  E3=junior, E4=mid, E5=senior, E6=staff, E7=principal
  IC3=junior, IC4=mid, IC5=senior, IC6=staff
  M1=mid, M2=senior, M3=staff, M4=principal  (management - used only for isManagementRole)
```

## Key technical decisions

- **`seniority.ts` as shared module, not a re-export from `query.ts`** · Alternative was to
  export directly from `query.ts` · Rejected because `query.ts` is in `src/jobs/` and
  `match.ts` is in `src/ats/`; importing across that boundary in both directions would create
  a cycle. `seniority.ts` lives in `src/ats/` (seniority is primarily an ATS concept, per the
  locked decision) and is a clean leaf node. `query.ts` imports from it, not the reverse.
  Satisfies FR-9.

- **`applyQueryFilters` return type change** · Current signature returns `JobPosting[]`.
  Changing to `{ postings, seniorityFilteredCount }` is the only way to propagate the count
  to `searchJobs` without a second pass or a mutable closure. This is a breaking change to the
  function signature but `applyQueryFilters` is not in the public `exports` map (it is exported
  from `src/jobs/normalize.ts` but not re-exported from `src/jobs/index.ts`). The test in
  `src/__tests__/jobs/normalize.test.ts` calls it directly; it must be updated. Satisfies FR-6.

- **`SeniorityLevel` type stays in `src/jobs/types.ts`** · It is already exported from
  `src/jobs/index.ts` as a public type. Moving it to `seniority.ts` would break that export.
  `seniority.ts` imports the type from `types.ts`. No duplication. Satisfies FR-9.

- **`SENIORITY` regex in `match.ts` tokenize extended for FR-7** · The existing regex already
  strips a partial list. Extending in-place (rather than replacing with an import from
  `seniority.ts`) is the minimal change; the regex is private to `tokenize` and not tested
  independently. Satisfies FR-7.

- **FR-2 gap 3 = score 40, status `warn` (not `fail`)** · The design doc states this explicitly
  in the States section ("Fail (gap 3): Score 40. Status `warn` per spec"). `scoreFromGap(3)`
  returns `{ score: 40, status: 'warn' }`. Gap >= 4 is the first `fail`. Satisfies FR-2.

- **No `ROLE_MISMATCH_CAP` for seniority** · `analyzeAts` checks `roleMismatch` by ID
  `'role-family-match'`. `seniorityMatch` ID is `'seniority-match'`; it will never trigger the
  cap. No code change needed in `analyzeAts` to enforce FR-10 -- the cap logic is already
  ID-gated.

- **`extractCvSeniority` uses `computeYoeYears` from `src/ats/checks/yoe.ts`** · That function
  already exists and is used by `yoeMatch`. Avoids duplicating the overlap-merge YOE logic.
  The `computeYearsExperience` in `query.ts` uses a slightly different calculation (non-overlap-
  merged). `seniority.ts` should use `computeYoeYears` to stay consistent with the ATS context.
  For `query.ts`, the existing `computeYearsExperience` call is unchanged.

## Dependencies and risks

- **`applyQueryFilters` signature change** · One test file and one call site in `jobs/index.ts`
  must be updated in the same task to keep the suite green. Risk: low; both are internal.

- **`query.ts` imports from `seniority.ts`** · After Task 1, `query.ts` deletes its local
  definitions and imports from `seniority.ts`. If the shared function signatures differ subtly
  (e.g. `detectSeniorityFromTitle` pattern coverage), `query.test.ts` cases could regress.
  Mitigation: Task 1 preserves the exact existing `SENIORITY_PATTERNS` behavior and adds band-
  label patterns on top; the existing query tests must pass before Task 1 is marked done.

- **`rubric.test.ts` asserts `arrayContaining` on all IDs** · Adding `seniority-match` to the
  rubric is strictly additive; the existing test will not break. The test does not assert an
  exact array, only containment.

- **`checksStatus` type on `skipped`** · The existing `CheckStatus` union in `src/ats/types.ts`
  already includes `'skipped'`. No type change needed.

## Test strategy

| Test file | What it covers | FRs |
|---|---|---|
| `src/__tests__/seniority.test.ts` | `extractJdSeniority` (title signal, body level strings, band labels L5/E4/IC5, numeric YOE fallback, no-signal null), `scoreFromGap` (gaps 0-4+), `gapBetween`, `bandLabelToLevel`, `isManagementRole`, `isIcResume`, `extractCvSeniority` | FR-3, FR-4, FR-9 |
| `src/__tests__/checks.seniority.test.ts` | `seniorityMatch` check: all gap values produce correct score+status, IC/management skip both directions, no-JD skip, no-signal-JD skip | FR-1, FR-2, FR-5, FR-10 |
| `src/__tests__/jobs/seniority-filter.test.ts` | `applyQueryFilters` with seniority pre-filter: gap >= 3 dropped, gap 2 kept, no-signal kept, `seniorityFilteredCount` correct | FR-6 |
| `src/__tests__/checks.match.test.ts` (extended) | `titleAlignment` modifier stripping: "Senior Backend Engineer" vs "Backend Engineer" scores higher after FR-7 fix than baseline | FR-7 |
| `src/__tests__/rubric.test.ts` (existing, updated assertion) | `seniority-match` present in rubric IDs | FR-8, FR-12 |
| All existing tests | Stay green after all refactors | FR-11 |

"Done" per task: `tsc --noEmit` clean and `vitest run` all green.
