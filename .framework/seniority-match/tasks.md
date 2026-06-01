# Tasks — seniority-match

> Owner: **software-engineer** · Phase: `/plan` -> `/build`
> Status: approved   <!-- flipped to "approved" by /approve (together with plan.md) · do not edit by hand -->
> `/build` implements exactly ONE unchecked task per run, then stops for review.

---

- [x] **T-1** — Create `src/ats/seniority.ts`: the shared seniority module.
  - Files: `src/ats/seniority.ts` (new), `src/jobs/query.ts` (modified)
  - What to change:
    - Create `src/ats/seniority.ts` exporting: `SENIORITY_ORDER`, `detectSeniorityFromTitle`,
      `seniorityFromYoe`, `bandLabelToLevel`, `extractJdSeniority`, `extractCvSeniority`,
      `gapBetween`, `scoreFromGap`, `isManagementRole`, `isIcResume`.
    - `SENIORITY_ORDER` and `detectSeniorityFromTitle` must use the same patterns already in
      `query.ts` (no behavioral change for existing callers). Band-label coverage: L3-L7, E3-E7,
      IC3-IC6, M1-M4.
    - `extractJdSeniority(jd: string, jobTitle?: string): SeniorityLevel | null` implements
      FR-3 three-signal priority: (1) title modifier, (2) body level strings + band labels,
      (3) numeric YOE range via `YOE_RE`.
    - `extractCvSeniority(resume: ResumeSchema): SeniorityLevel` uses `computeYoeYears` from
      `src/ats/checks/yoe.ts` and `detectSeniorityFromTitle` on all `work[*].position` and
      `basics.label`; returns max of title-derived and YOE-derived levels.
    - `gapBetween(a, b)`: absolute index difference in `SENIORITY_ORDER`.
    - `scoreFromGap(gap)`: gap 0->100/pass, 1->90/pass, 2->70/warn, 3->40/warn, 4+->10/fail.
    - `isManagementRole(jobTitle, bodyFirstLines)`: true if title or first 3 body lines match
      `engineering manager`, `\bem\b`, `director`, `vp of engineering`, `head of engineering`,
      `chief`.
    - `isIcResume(resume)`: true when no `work[*].position` matches the management patterns.
    - In `query.ts`: remove local definitions of `SENIORITY_PATTERNS`, `detectSeniorityFromTitle`,
      `seniorityFromYoe`, `SENIORITY_ORDER`, `maxSeniority`; import
      `detectSeniorityFromTitle`, `seniorityFromYoe`, `SENIORITY_ORDER` from
      `../ats/seniority`. Keep `maxSeniority` as a local helper (it is a trivial one-liner).
    - `SeniorityLevel` type stays in `src/jobs/types.ts`; `seniority.ts` imports it from there.
  - Acceptance: `tsc --noEmit` clean; `vitest run` all existing tests pass (especially
    `src/__tests__/jobs/query.test.ts`); `src/__tests__/seniority.test.ts` is NOT yet written
    (that is T-8) but no regressions.
  - Satisfies: FR-3, FR-4, FR-9

- [ ] **T-2** — Add `seniorityMatch` check to `src/ats/checks/match.ts` and insert it in `allMatchChecks`.
  - Files: `src/ats/checks/match.ts` (modified)
  - What to change:
    - Add `import { extractJdSeniority, extractCvSeniority, gapBetween, scoreFromGap, isManagementRole, isIcResume } from '../seniority'`.
    - Implement `export const seniorityMatch: MatchCheckFn` following the contract in design.md
      (FR-1, FR-2, FR-5):
      - No JD: `status: 'skipped', score: 0, message: 'No JD.'`
      - IC/management track mismatch (either direction): `status: 'skipped', score: 0,
        message: 'IC/management track mismatch; comparison skipped.'`
      - No JD seniority signal: `status: 'skipped', score: 0,
        message: 'JD seniority signal not found; check skipped.'`
      - Otherwise: use `scoreFromGap` for score+status; message format per design mockups
        (e.g. "CV staff, JD senior (gap 1): within tolerance."); hints per design States section.
      - `weight: 'high'`, `id: 'seniority-match'`, `tier: 'match'`.
    - Insert `seniorityMatch` into `allMatchChecks` after `roleFamilyMatch` and before
      `hardSkillOverlap`: `[hardSkillOverlap, titleAlignment, roleFamilyMatch, seniorityMatch, educationLevel, yoeMatch]`
      -- wait, the design specifies order: `roleFamilyMatch`, `seniorityMatch`,
      `hardSkillOverlap`, `titleAlignment`, `yoeMatch`, `educationLevel`. Reorder
      `allMatchChecks` to: `[roleFamilyMatch, seniorityMatch, hardSkillOverlap, titleAlignment, yoeMatch, educationLevel]`.
  - Acceptance: `tsc --noEmit` clean; `vitest run` all existing tests pass;
    `analyzeAts(resume, { jobDescription: jd })` returns a `match.checks` array that includes
    a `seniority-match` entry.
  - Satisfies: FR-1, FR-2, FR-5, FR-10

- [ ] **T-3** — Extend `SENIORITY` regex in `match.ts` for FR-7 title modifier stripping.
  - Files: `src/ats/checks/match.ts` (modified)
  - What to change:
    - Replace the existing `SENIORITY` regex constant with the full modifier list from FR-7:
      `junior`, `jr`, `associate`, `entry`, `mid`, `senior`, `sr`, `lead`, `staff`,
      `principal`, `distinguished`, `fellow`, `head`, `vp`, `chief`, `director`.
    - The regex is used inside `tokenize`; no other callers. Keep `\b` word boundaries and
      the `gi` flags.
    - Verify "Senior Backend Engineer" tokenized against "Backend Engineer" now produces a
      higher Jaccard score than before the fix.
  - Acceptance: `tsc --noEmit` clean; `vitest run` all existing tests pass; a quick inline
    assertion (or the test added in T-9) confirms the improvement.
  - Satisfies: FR-7

- [ ] **T-4** — Add `seniority-match` rubric entry to `src/ats/rubric.ts`.
  - Files: `src/ats/rubric.ts` (modified)
  - What to change:
    - Insert a new `RubricEntry` object into the `rubric` array inside the match-tier section
      (after `yoe-match`):
      ```typescript
      {
        id: 'seniority-match',
        tier: 'match',
        weight: 'high',
        evidenceLevel: 'evidence',
        description:
          'Seniority level inferred from JD title, body level strings, band labels (L3-L7, E3-E7, IC3-IC6), and numeric YOE. ' +
          'Gap scoring: 0=100/pass, 1=90/pass, 2=70/warn, 3=40/warn, 4+=10/fail. ' +
          'IC/management track mismatches are skipped in both directions.',
        source:
          'LinkedIn patent US12105720 (2024); KDD 2024 confirmed-hire gap analysis.',
      }
      ```
    - No em-dashes in description or source strings.
  - Acceptance: `tsc --noEmit` clean; `vitest run` including `rubric.test.ts` passes;
    `getRubricEntry('seniority-match')` returns a non-undefined entry.
  - Satisfies: FR-8, FR-12

- [ ] **T-5** — Change `applyQueryFilters` signature to return `{ postings, seniorityFilteredCount }` and add the seniority pre-filter gate.
  - Files: `src/jobs/normalize.ts` (modified), `src/jobs/index.ts` (modified),
    `src/__tests__/jobs/normalize.test.ts` (modified)
  - What to change:
    - In `normalize.ts`: change `applyQueryFilters` return type from `JobPosting[]` to
      `{ postings: JobPosting[]; seniorityFilteredCount: number }`.
    - Add seniority pre-filter logic: import `extractJdSeniority`, `gapBetween` from
      `../ats/seniority`; for each posting call `extractJdSeniority(posting.body, posting.title)`;
      if signal found AND `gapBetween(query.seniority, jdLevel) >= 3`, drop the posting and
      increment `seniorityFilteredCount`. No-signal postings pass through.
    - Remote-only filter runs first (existing behavior); seniority pre-filter runs after.
      Return `{ postings: filtered, seniorityFilteredCount }`.
    - In `jobs/index.ts`: destructure `{ postings: filtered, seniorityFilteredCount }` from
      `applyQueryFilters`; include `seniorityFilteredCount` in the `SearchResult` return.
    - In `normalize.test.ts`: update the `applyQueryFilters` call sites to destructure
      `{ postings }` from the return value; add one new `describe('seniority pre-filter')` block
      with three cases:
        1. Posting with JD title "Junior Engineer" vs query `seniority: 'staff'` (gap 3): dropped.
        2. Posting with JD title "Mid Engineer" vs query `seniority: 'staff'` (gap 2): kept.
        3. Posting with JD body with no seniority signal vs any query seniority: kept.
  - Acceptance: `tsc --noEmit` clean; `vitest run` all passing including updated normalize
    tests; `searchJobs` result has `seniorityFilteredCount` field.
  - Satisfies: FR-6

- [ ] **T-6** — Add `seniorityFilteredCount` to `SearchResult` in `src/jobs/types.ts`.
  - Files: `src/jobs/types.ts` (modified)
  - What to change:
    - Add `seniorityFilteredCount?: number` as an optional field on `SearchResult`.
    - Optional (not required) for backward compatibility: existing consumers of `SearchResult`
      that do not read this field are unaffected.
  - Acceptance: `tsc --noEmit` clean; `vitest run` all passing; `SearchResult` type has the
    new optional field.
  - Note: this task has no runtime logic and is a prerequisite for T-5 (the type must exist
    before T-5 assigns it). T-6 should be done BEFORE T-5, so reorder execution: T-6, then T-5.
  - Satisfies: FR-6

- [ ] **T-7** — Write unit tests for `src/ats/seniority.ts` (`src/__tests__/seniority.test.ts`).
  - Files: `src/__tests__/seniority.test.ts` (new)
  - What to change:
    - Test `extractJdSeniority`:
      - Title signal: "Senior Backend Engineer" -> `senior`; "Junior Software Engineer" -> `junior`; "Staff Engineer" -> `staff`
      - Body level string: body with "senior-level experience required" -> `senior`; "entry level" -> `junior`
      - Band labels: title "L5 Engineer" -> `senior`; title "E4 Software Engineer" -> `mid`; body "IC5" -> `senior`
      - Numeric YOE fallback: body "10+ years" with no other signal -> `staff` or `principal`
      - No-signal: body "Great team, collaborative culture." -> `null`
    - Test `scoreFromGap`: gaps 0, 1, 2, 3, 4, 5 each produce correct score and status from FR-2 table.
    - Test `gapBetween`: `gapBetween('staff', 'junior') === 3`; `gapBetween('senior', 'senior') === 0`.
    - Test `bandLabelToLevel`: `L5` -> `senior`; `E4` -> `mid`; `IC6` -> `staff`; unknown -> `null`.
    - Test `isManagementRole`: "Engineering Manager, Platform" is management; "Senior Engineer" is not.
    - Test `isIcResume`: resume with `position: 'Senior Engineer'` is IC; resume with `position: 'Engineering Manager'` is not.
    - Test `extractCvSeniority`: senior title with low YOE returns at least `senior`.
  - Acceptance: `vitest run src/__tests__/seniority.test.ts` all cases pass; `tsc --noEmit` clean.
  - Satisfies: FR-3, FR-4, FR-9, FR-11

- [ ] **T-8** — Write unit tests for `seniorityMatch` check (`src/__tests__/checks.seniority.test.ts`).
  - Files: `src/__tests__/checks.seniority.test.ts` (new)
  - What to change:
    - Import `seniorityMatch` from `../ats/checks/match`.
    - Build a `staffResume` fixture: basics.label "Staff Engineer", work with startDate 2013.
    - Test all gap cases using JD bodies/titles that produce gaps 0-4+:
      - Gap 0 (staff vs staff JD): score 100, status `pass`
      - Gap 1 (staff vs senior JD): score 90, status `pass`
      - Gap 2 (staff vs mid JD): score 70, status `warn`
      - Gap 3 (staff vs junior JD): score 40, status `warn`
      - Gap 4 (staff vs intern JD): score 10, status `fail`
    - Test IC/management skip: JD title "Engineering Manager, Platform" vs IC CV -> `skipped`,
      message contains "IC/management track mismatch".
    - Test management-CV vs IC-JD skip: CV with position "Engineering Manager" vs plain IC JD
      -> `skipped`.
    - Test no-signal JD: JD body with no seniority indicator -> `skipped`, message contains
      "JD seniority signal not found".
    - Test no-JD: `seniorityMatch(resume, 'en', {})` -> `skipped`, message `'No JD.'`.
    - Verify `seniorityMatch` `fail` does NOT set `id` to `'role-family-match'` (sanity for FR-10).
  - Acceptance: `vitest run src/__tests__/checks.seniority.test.ts` all passing; `tsc --noEmit` clean.
  - Satisfies: FR-1, FR-2, FR-5, FR-10, FR-11

- [ ] **T-9** — Write/extend tests for `titleAlignment` modifier stripping (FR-7) and update `rubric.test.ts`.
  - Files: `src/__tests__/checks.match.test.ts` (modified), `src/__tests__/rubric.test.ts` (modified)
  - What to change:
    - In `checks.match.test.ts`: add a new `describe('title-alignment modifier stripping')` block
      with one test: `titleAlignment` on a resume with `position: 'Senior Backend Engineer'`
      against a JD with title "Backend Engineer" must produce a higher score than it did before
      T-3 (i.e. score > 0 and status not `fail`; a comment noting the pre-fix baseline).
      Also add a test for a newly stripped token: "Associate Engineer" vs "Engineer" -> not `fail`.
    - In `rubric.test.ts`: extend the `arrayContaining` list to include `'seniority-match'` and
      `'role-family-match'` (the latter was already there if present; confirm it is, add if not).
  - Acceptance: `vitest run` all passing; `tsc --noEmit` clean.
  - Satisfies: FR-7, FR-8, FR-11

- [ ] **T-10** -- Write unit tests for the seniority pre-filter in `src/__tests__/jobs/seniority-filter.test.ts`.
  - Files: `src/__tests__/jobs/seniority-filter.test.ts` (new)
  - What to change:
    - Import `applyQueryFilters` from `../../jobs/normalize`.
    - Build a helper `posting(title, body)` factory returning a minimal `JobPosting`.
    - Test: posting titled "Junior Software Engineer" (gap 3 from `staff`) is dropped;
      `seniorityFilteredCount` is 1.
    - Test: posting titled "Mid Software Engineer" (gap 2 from `staff`) is kept;
      `seniorityFilteredCount` is 0.
    - Test: posting with no seniority signal in title or body is kept;
      `seniorityFilteredCount` is 0.
    - Test: posting titled "Principal Engineer" (gap 1 from `staff`) is kept (gap < 3).
    - Test: multiple postings -- 2 junior postings + 1 senior posting against a `staff` query:
      `postings.length === 1`, `seniorityFilteredCount === 2`.
    - Test: remote-only filter still works alongside seniority filter (a non-remote posting is
      dropped by the remote filter even if it passes the seniority filter).
  - Acceptance: `vitest run src/__tests__/jobs/seniority-filter.test.ts` all passing;
    `tsc --noEmit` clean; existing `normalize.test.ts` unchanged and passing.
  - Satisfies: FR-6, FR-11
