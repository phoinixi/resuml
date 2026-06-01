# Tasks — jobs-feature-completion

> Owner: **software-engineer** · Phase: `/plan` -> `/build`
> Status: approved   <!-- flipped to "approved" by /approve (together with plan.md) · do not edit by hand -->
> `/build` implements exactly ONE unchecked task per run, then stops for review.

Each task: small, independently reviewable, traceable to a requirement.

---

- [x] **T-1** — Fix `resumeSpecialties` to return dominant specialties by score margin (not a flat threshold membership set). Create the frontend CV fixture.
  - Files: `src/ats/roleFamily.ts`, `src/__tests__/fixtures/frontend-cv.yml` (new)
  - Changes: Change return type of `resumeSpecialties` from `Set<Specialty>` to `Specialty[]`. Implement score-margin algorithm: compute raw score per specialty; if top score < `SPECIALTY_MIN_SCORE` (4) return `[]`; margin = `min(SPECIALTY_ABS_MARGIN, max(TOP_MARGIN_FACTOR * topScore, 1))`; include all specialties where `score >= topScore - margin` (constants: `TOP_MARGIN_FACTOR = 0.5`, `SPECIALTY_ABS_MARGIN = 3`). Return results in descending score order. Document the algorithm constants with an inline comment citing the worked example from the plan (sparse-CV edge case: topScore=4, margin=2, prevents score=1 backend from entering). Create `src/__tests__/fixtures/frontend-cv.yml` — minimal JSON Resume YAML representing a senior frontend engineer: basics with title "Frontend Tech Lead", work experience with React/TypeScript/Next.js/CSS highlights, skills listing React, TypeScript, Next.js, CSS, Vite, Storybook — no backend-signature keywords (`backend`, `server-side`, `microservices`, `api development`, `distributed systems`). No em-dashes anywhere in new code or comments.
  - Acceptance: `resumeSpecialties` on the fixture returns `['frontend']`. `resumeSpecialties` on a fixture with equal frontend + backend signals returns both. `resumeSpecialties` on a resume with no specialty signals returns `[]`. Fixture file exists at `src/__tests__/fixtures/frontend-cv.yml`. Algorithm constants documented with evidence citation. No em-dashes. `tsc --noEmit` clean.
  - Satisfies: FR-2, FR-11

- [x] **T-2** — Update `roleFamilyMatch` to use the new `Specialty[]` return from `resumeSpecialties`; extend `roleFamily.test.ts` to lock FR-1/FR-2/FR-3 behavior including the `rankPostings` integration path.
  - Files: `src/ats/checks/match.ts`, `src/__tests__/roleFamily.test.ts`
  - Changes: In `roleFamilyMatch`, change `const cvSpecs = resumeSpecialties(resume)` (was `Set`) to `const cvTopSpecs = resumeSpecialties(resume)` (`Specialty[]`). Gate: `satisfied = cvTopSpecs.length === 0 || cvTopSpecs.includes(jdSpec)`. Fail message: `Specialty mismatch: ${jdSpec} role, resume specializes in ${cvTopSpecs[0] ?? 'general engineering'}.` Add tests: (a) `analyzeAts` on `src/__tests__/fixtures/frontend-cv.yml` vs a synthetic backend JD yields `role-family-match.status === 'fail'` and `score <= 45` — this is the FR-1 acceptance test; (b) `resumeSpecialties` on the frontend fixture yields `['frontend']`; (c) full-stack fixture (inline object with equal frontend + backend signals) returns both specialties; (d) general-engineering resume returns `[]` and gate passes. Also add an integration test: call `rankPostings(frontendCv, [backendPosting])` and assert the single result has `ats.score <= 45` — this locks that the fix propagates through the full ranking path. Load fixture with `fs.readFileSync` + `js-yaml.load`. Existing cross-family tests (engineering vs recruiting cap) remain green.
  - Acceptance: All tests in `roleFamily.test.ts` pass including FR-1 real-fixture case and the `rankPostings` integration assertion. `tsc --noEmit` clean.
  - Satisfies: FR-1, FR-2, FR-3

- [x] **T-3** — Raise `DEFAULT_MIN_SCORE` from 60 to 85; update all three locations where the default is referenced.
  - Files: `src/jobs/index.ts`, `src/index.ts`, `src/mcp/server.ts`
  - Changes: In `src/jobs/index.ts`, change `const DEFAULT_MIN_SCORE = 60` to `85`. In `src/index.ts`, update the `--min-score` option description to `'Minimum total ATS score (0-100). Default 85.'`. In `src/mcp/server.ts`, update the `resuml_jobs_search` `minScore` field description from `'default 60'` to `'default 85'`. Note: `src/commands/jobs.ts` has a fourth hardcoded number in its empty-state nudge (`'Try --min-score 50 to loosen.'`) — that string is updated in T-5 as part of the broader `jobsSearchAction` changes; it is not touched here to avoid a mid-task partial state.
  - Acceptance: `DEFAULT_MIN_SCORE` is 85 in `src/jobs/index.ts`. `--min-score` help text says `Default 85`. MCP `minScore` description says `default 85`. Suite stays green.
  - Satisfies: FR-1 (threshold alignment)

- [x] **T-4** — Add `location` override to `SearchOptions`; resolve `countryCode` from it in `searchJobs`; add on-site country filter to `applyQueryFilters`; update `SearchResult` with `offSpecialtyCount`/`wrongLocationCount` fields; extend normalize tests.
  - Files: `src/jobs/types.ts`, `src/jobs/index.ts`, `src/jobs/normalize.ts`, `src/__tests__/jobs/normalize.test.ts`
  - Changes: `SearchOptions`: add `location?: string`. `SearchResult`: add `offSpecialtyCount?: number` and `wrongLocationCount?: number`. In `searchJobs`: parse `options.location` (split on last comma, trim city + countryCode) and pass the resolved `countryCode` override into `deriveSearchQuery` (add a `countryCode?` override parameter to `deriveSearchQuery` or pass it directly into the query object after construction). Compute `offSpecialtyCount` (ranked entries where `role-family-match` status is `'fail'`) and `wrongLocationCount` (entries dropped by location filter) and include in the returned `SearchResult`. In `applyQueryFilters`: when `query.countryCode` is set, additionally drop non-remote postings that clearly mismatch the country (reuse or inline logic from `isRemoteEligible` for country detection on the location string). Extend normalize tests: on-site CH posting passes; on-site US posting is dropped for CH candidate.
  - Acceptance: `applyQueryFilters` drops non-remote postings with wrong country when `countryCode` set. `searchJobs` returns `offSpecialtyCount` and `wrongLocationCount` — both fields present and set to 0 (not undefined) even when nothing is filtered. `tsc --noEmit` clean. All normalize tests pass.
  - Satisfies: FR-10, FR-12

- [x] **T-5** — Add `jobs score` and `jobs tailor` CLI subcommand action functions; add `--location` flag to the search action.
  - Files: `src/commands/jobs.ts`
  - Changes: Add `interface JobsScoreOptions` and `interface JobsTailorOptions`. Implement `jobsScoreAction`: load resume via `loadResumeFiles`/`processResumeData`; load `--posting <file>` via `fs.readFileSync` + `yaml.load` / `JSON.parse`; call `scorePosting(resume, posting)`; print the full ATS breakdown (per-tier scores with grade badge, per-check status + message for `match` tier, knockouts); if `posting.ats.score <= 45` and `roleFamilyMatch` failed, print the `REJECTED  specialty mismatch` banner; `--json` prints the `RankedJob`. Implement `jobsTailorAction`: load `--posting <file>` (no resume needed); call `buildTailorPrompt(posting)`; print to stdout; `--json` wraps in `{ "prompt": "..." }`. Also accept `--body -` for stdin on tailor. Update `jobsSearchAction` to accept `--location <city, CC>`: parse it and pass as `options.location` into `searchJobs`; update the "Location:" line in the query block to show the source (`from --location flag` vs `from CV`); update the summary header line to include `, ${offSpecialtyCount} off-specialty, ${wrongLocationCount} wrong location` using the new `SearchResult` fields; update the empty-state nudge to `'Try --min-score 70 to see more matches.'`. Use `handleCommandError` for all top-level catches. Follow existing house style (chalk, `tierBadge`, padEnd/padStart column alignment).
  - Acceptance: `jobsScoreAction` and `jobsTailorAction` exist and are exported. `jobsSearchAction` accepts `--location`. Empty-state nudge reads exactly `'Try --min-score 70 to see more matches.'` (not the old `50`). Rejection banner is exactly two lines: first `REJECTED  specialty mismatch` (two spaces), second line indented to align, text `${jdSpec} role; resume specializes in ${cvTopSpecs[0]}.` Summary header off-specialty / wrong-location breakout is in parentheses: `(${offSpecialtyCount} off-specialty, ${wrongLocationCount} wrong location)`. `--json` on `jobs search` suppresses `Searching jobs...`, the query block, and the provider block — only the `SearchResult` JSON goes to stdout. No em-dashes in any new string or banner copy. `tsc --noEmit` clean.
  - Satisfies: FR-4, FR-5, FR-11, FR-12

- [x] **T-6** — Register `jobs score` and `jobs tailor` in commander; wire `--location` on `jobs search`.
  - Files: `src/index.ts`
  - Changes: Import `jobsScoreAction` and `jobsTailorAction` from `'./commands/jobs'`. Add `jobs score` subcommand with options `-r/--resume`, `--posting <file>`, `--json`. Add `jobs tailor` subcommand with options `--posting <file>`, `--body <text>` (accepts `-` for stdin), `--json`. Add `--location <city, CC>` option to the existing `jobs search` subcommand. Update `--min-score` default copy to `'Default 85.'`. Export `scorePosting` and `buildTailorPrompt` are already in the exports map; no change needed there.
  - Acceptance: `resuml jobs --help` shows `score` and `tailor` subcommands. `resuml jobs search --help` shows `--location`. `tsc --noEmit` clean.
  - Satisfies: FR-4, FR-5, FR-8, FR-12

- [x] **T-7** — New test file: provider resilience and dedupe tests.
  - Files: `src/__tests__/jobs/rank.test.ts` (new)
  - Changes: Two test groups: (a) **Provider resilience** -- use `vi.mock` or inject a stub provider that throws; call `searchJobs` with the stub; assert it resolves (no throw), the failed provider has `.error` set, `.jobs` contains results from surviving providers. (b) **Dedupe** -- call `rankPostings` with two postings sharing identical `(company, title, location)` but different scores; assert exactly one result, the higher-scoring one. Note: the specialty-coherence integration test is in T-2 (not here) so the FR-1 regression lock lands immediately after the fix rather than behind four more tasks.
  - Acceptance: Both test groups pass. Suite count increases. `tsc --noEmit` clean.
  - Satisfies: FR-6, FR-7

- [x] **T-8** — Extend HN `parseHeader` tests to cover malformed inputs (FR-9).
  - Files: `src/__tests__/jobs/providers.test.ts`
  - Changes: Add test cases to the existing `'hn-whoishiring parseHeader'` describe block: (a) empty string input -- no throw, `company === 'HN posting'`, `title === 'See description'`; (b) single segment with no `|` separator -- `company` is the stripped text (or default), `title === 'See description'`; (c) first line with no parentheses -- `location` is `undefined`, `company` is the raw first segment; (d) first line with only pipe separators and no meaningful text -- defaults apply without crash.
  - Acceptance: All new HN tests pass. Existing provider tests stay green. `tsc --noEmit` clean.
  - Satisfies: FR-9

- [x] **T-9** — Extend normalize tests for on-site country filter; add `applyQueryFilters` location-filter cases.
  - Files: `src/__tests__/jobs/normalize.test.ts`
  - Changes: Add a describe block `'applyQueryFilters on-site country filter'`: (a) on-site posting with `location: 'Zurich, CH'` and `query.countryCode = 'CH'` -- kept; (b) on-site posting with `location: 'New York, US'` and `query.countryCode = 'CH'` -- dropped; (c) remote posting with US location and `query.countryCode = 'CH'` -- kept (remote is not filtered by country here, `isRemoteEligible` path handles it separately); (d) `countryCode` undefined -- no postings dropped (existing behavior preserved).
  - Acceptance: All normalize tests pass. `tsc --noEmit` clean.
  - Satisfies: FR-10, FR-12

- [x] **T-10** — Update CLAUDE.md to document the three `resuml_jobs_*` MCP tools and the two new CLI subcommands.
  - Files: `CLAUDE.md`
  - Changes: In the MCP tool table, add three rows: `resuml_jobs_search` (Discover and rank job postings from free sources against the resume), `resuml_jobs_score` (Score a single job posting against the resume), `resuml_jobs_tailor` (Build a tailoring prompt for a specific posting). In the CLI command section, add `resuml jobs score` and `resuml jobs tailor` entries with their flag signatures. Document the `--posting <file>` YAML stub shape (6-line example). Document `--location <city, CC>` alongside `--remote` on `jobs search`. No em-dashes.
  - Acceptance: All three tools appear in the MCP tool table. `jobs score` and `jobs tailor` appear in the CLI command list. `--location` documented on search.
  - Satisfies: FR-8
