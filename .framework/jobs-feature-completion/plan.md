# Technical Plan — jobs-feature-completion

> Owner: **software-engineer** · Phase: `/plan` · Reads: approved `spec.md` (+ `design.md`)
> Status: approved   <!-- flipped to "approved" by /approve · do not edit by hand -->

## Architecture overview

The jobs feature is complete at the library level (`src/jobs/`) and the MCP level (`src/mcp/server.ts`). Three things are broken or missing:

1. **FR-1/FR-2 — specialty coherence bug in `resumeSpecialties` / `roleFamilyMatch`**
   The current `resumeSpecialties` returns every specialty whose signature count reaches >= 2 in the full resume text. A frontend-heavy CV accumulates incidental `backend` tokens (Node.js mentions, microservices, "API development") and returns `{frontend, backend}`. The gate in `roleFamilyMatch` checks `cvSpecs.has(jdSpec)`, so `backend` in the set satisfies a backend JD and the cap never fires.

2. **FR-4/FR-5 — missing CLI subcommands** `jobs score` and `jobs tailor` need to be wired in `src/commands/jobs.ts` and registered in `src/index.ts`.

3. **FR-8/FR-12 — documentation and the `--location` flag** are missing.

Everything else (`searchJobs`, `scorePosting`, `buildTailorPrompt`, all eight providers, `rankPostings`, `dedupeKey`, `isRemoteEligible`, the full test suite at 146 passing) is already implemented correctly.

## FR-2 specialty gate algorithm (the highest-risk change)

**Problem.** `resumeSpecialties` has a flat threshold (any specialty with score >= 2 qualifies). This admits incidental tokens and makes the gate trivially defeatable.

**Design decision (locked in design.md, option b).** Compare the JD's dominant specialty against the resume's *top specialties by score margin*, not against the full set.

**Algorithm contract for `resumeSpecialties`.**

The function signature changes from `(): Set<Specialty>` to `(): Specialty[]`, returning the dominant specialties in descending score order, filtered to a "top tier" by score margin:

```
scores = compute raw score per specialty from resumeRoleText
sorted desc by score
top = scores[0]
if top.score < SPECIALTY_MIN_SCORE (4)  -> return []  (no clear specialty)
margin = min(SPECIALTY_ABS_MARGIN, max(TOP_MARGIN_FACTOR * top.score, 1))
  where TOP_MARGIN_FACTOR = 0.5, SPECIALTY_ABS_MARGIN = 3
top_set = all specialties where score >= top.score - margin
return top_set  (plural for genuine full-stack)
```

Note: the inner `max(..., 1)` floor prevents the margin from being 0 when `TOP_MARGIN_FACTOR * topScore < 1` (very sparse CVs), while the outer `min(SPECIALTY_ABS_MARGIN, ...)` prevents the margin from exceeding 3 on high-scoring CVs. This ensures the threshold is always at least `topScore - 3` but also at least `topScore - max(0.5*topScore, 1)`.

**Worked examples:**
- Frontend-only CV (frontend=18, backend=0): margin = min(3, max(9,1)) = 3. Threshold = 15. Backend 0 < 15 → excluded. Returns `['frontend']`.
- Sparse frontend CV (frontend=4, backend=1): margin = min(3, max(2,1)) = 2. Threshold = 2. Backend 1 < 2 → excluded. Returns `['frontend']`. (Previous formula gave threshold=1, backend=1 would sneak through.)
- Genuine full-stack (frontend=10, backend=10): margin = min(3, max(5,1)) = 3. Threshold = 7. Backend 10 >= 7 → both included. Returns `['frontend','backend']`.
- General engineering (all specialties < 4): returns `[]` → gate passes (no penalty for uncategorised CVs).

**Gate change in `roleFamilyMatch`.**

```
cvTopSpecs = resumeSpecialties(resume)  // Specialty[]
satisfied:
  if cvTopSpecs.length === 0 -> pass (no clear specialty, don't penalize)
  if cvTopSpecs.includes(jdSpec) -> pass
  else -> fail (specialty mismatch)
```

The key change from current code: `cvTopSpecs.length === 0` is the "general engineering" pass (unchanged semantics), but the set now only contains genuinely dominant specialties. The `cvSpecs.size === 0` check that previously passed _any resume with an empty specialty set_ still works -- it just activates far less often because the bar for inclusion is now higher.

**Return type migration.** `resumeSpecialties` currently returns `Set<Specialty>`. Callers: only `roleFamilyMatch` in `src/ats/checks/match.ts`. Changing to `Specialty[]` is a one-caller change. The export from `src/ats/roleFamily.ts` is not in the public `exports` map (only `src/index.ts` re-exports are public), so no library API break.

## Components & boundaries

| Component | Responsibility | Depends on | Satisfies |
|---|---|---|---|
| `src/ats/roleFamily.ts` `resumeSpecialties` | Return dominant resume specialties (score-margin-gated, plural-capable) | `SPECIALTY_SIGNATURES`, `resumeRoleText` | FR-2, FR-3 |
| `src/ats/checks/match.ts` `roleFamilyMatch` | Specialty gate using the new `Specialty[]` return from `resumeSpecialties`; fail message includes resume's top spec list | `resumeSpecialties`, `classifySpecialty` | FR-1, FR-2, FR-3 |
| `src/ats/index.ts` | Unchanged. `ROLE_MISMATCH_CAP` = 45 already correct; the fix is upstream. | `roleFamilyMatch` | FR-1 |
| `src/jobs/index.ts` | Unchanged logic; `DEFAULT_MIN_SCORE` raised from 60 to 85 per design decision | `rankPostings` | FR-1 (threshold alignment) |
| `src/commands/jobs.ts` | Add `jobsScoreAction`, `jobsTailorAction`; add `--location` to `jobsSearchAction` and thread into `searchJobs`; update summary header with off-specialty + wrong-location counts | `scorePosting`, `buildTailorPrompt`, `searchJobs` | FR-4, FR-5, FR-12 |
| `src/index.ts` | Register `jobs score` and `jobs tailor` subcommands; update `--location` option on `jobs search`; update `--min-score` default copy to 85; import `jobsScoreAction`, `jobsTailorAction` | commander | FR-4, FR-5, FR-8, FR-12 |
| `src/jobs/types.ts` | Add `location?: string` to `SearchOptions` so callers can pass an override location | `SearchQuery` | FR-12 |
| `src/jobs/index.ts` | Accept `options.location` override; resolve `countryCode` from it when supplied; thread into `query` and `applyQueryFilters` | `deriveSearchQuery`, `applyQueryFilters` | FR-12 |
| `src/jobs/normalize.ts` / `applyQueryFilters` | Add on-site country filter: drop non-remote postings whose country does not match `query.countryCode` | `isRemoteEligible` | FR-12 |
| `src/__tests__/roleFamily.test.ts` | Extend with: frontend CV vs backend JD => fail (FR-1); `resumeSpecialties` top-set tests (FR-2); full-stack passes both (FR-2); general-engineering pass (FR-3) | | FR-1, FR-2, FR-3 |
| `src/__tests__/jobs/rank.test.ts` (new) | Provider resilience (FR-6); dedupe keeps higher-scoring (FR-7); frontend CV + fixture backend JD => none clear minScore 85 (FR-1 integration) | `searchJobs`, `rankPostings` | FR-1, FR-6, FR-7 |
| `src/__tests__/jobs/providers.test.ts` | Extend HN `parseHeader` with malformed inputs (FR-9) | `hn-whoishiring.__test__` | FR-9 |
| `src/__tests__/jobs/normalize.test.ts` | Extend `applyQueryFilters` with on-site country filter cases (FR-12) | `applyQueryFilters` | FR-12 |
| `CLAUDE.md` | Add `resuml_jobs_search`, `resuml_jobs_score`, `resuml_jobs_tailor` rows to MCP table; add `jobs score` and `jobs tailor` to CLI command list; document `--location` and `--posting` | | FR-8 |

## Data model

No new persistent entities. `SearchOptions` gets one new field:

```typescript
location?: string;  // "<city>, <CC>" override; defaults to resume basics.location
```

`SearchResult` already has `filteredCount` and `fetchedCount`. To surface the off-specialty and wrong-location breakdown without a breaking change, two new optional fields are added:

```typescript
offSpecialtyCount?: number;
wrongLocationCount?: number;
```

These are computed in `searchJobs` from the ranked array before the `minScore` filter and threaded into the CLI's summary line.

## Key technical decisions

- **`resumeSpecialties` returns `Specialty[]` not `Set<Specialty>`.** Ordered by score descending; enables the gate to read the dominant specialty explicitly for the fail message (`resume specializes in ${cvTopSpecs[0]}`). Trade-off: breaking change within the module, but zero external callers (not in public exports map). FR-2.

- **Constants `SPECIALTY_MIN_SCORE = 4`, `TOP_MARGIN_FACTOR = 0.5`, `SPECIALTY_ABS_MARGIN = 3`.** Minimum raw score prevents spurious specialties from single-sentence mentions. Margin threshold prevents a runner-up that is close in score from being excluded (genuine full-stack). Verified by manual trace on the real CV. FR-2.

- **`DEFAULT_MIN_SCORE` raised from 60 to 85.** Design decision (locked). Off-specialty roles cap at 45; genuinely unfit roles cluster well below 85. Both the CLI comment and the MCP `description` field reference 85. FR-1 alignment.

- **`--location` flag in `jobs search` and `SearchOptions.location`.** Location is resolved: flag > CV `basics.location`. Parsed to `{city, countryCode}` by splitting on comma and trimming. Applied to both remote-eligibility filter and on-site country filter. FR-12.

- **On-site country filter added to `applyQueryFilters`.** Currently `applyQueryFilters` only applies the remote-only filter. When `query.countryCode` is set, non-remote postings from a different country (detected by `isRemoteEligible` logic or a simpler country substring match) are dropped. This is applied regardless of `remoteOnly` because even a non-remote search should not surface on-site roles in the wrong country. FR-12.

- **`--posting <file>` for `score`/`tailor`.** Design decision (locked). YAML/JSON file with fields matching the MCP input schema. `tailor` also accepts `--body -` for piped stdin. FR-4, FR-5.

- **No new files for `score`/`tailor` commands.** They live in `src/commands/jobs.ts` alongside `jobsSearchAction`. FR-4, FR-5.

## Dependencies & risks

- **`resumeSpecialties` constant tuning.** The algorithm formula uses `min(SPECIALTY_ABS_MARGIN, max(TOP_MARGIN_FACTOR * topScore, 1))` to prevent the margin from collapsing to 0 on sparse CVs. Worked examples in the algorithm section above cover the key cases. The regression fixture (T-1) locks this behavior. Risk: low.

- **`resumeSpecialties` fixture.** `francesco-esposito-cv.yml` does not exist at any path under `data/` or `src/__tests__/`. T-1 creates `src/__tests__/fixtures/frontend-cv.yml` — a minimal YAML fixture capturing the key characteristics (React, TypeScript, Next.js, CSS, senior frontend title, no backend-signature keywords). T-2 loads it with `fs.readFileSync` + `js-yaml.load`. The real CV name is never committed; the fixture is representative.

- **`minScore` default change from 60 to 85.** Affects library API (`searchJobs`), CLI help text, MCP tool description, and the empty-state nudge copy in `src/commands/jobs.ts` (currently says "Try --min-score 50"). All four locations are updated: T-3 updates the constant + CLI help + MCP description; T-5 updates the nudge copy.

- **`SearchResult` new fields are optional.** No existing code breaks. Agents consuming `--json` get richer data; agents that ignore them still parse cleanly.

- **`applyQueryFilters` on-site country filter.** The current function only acts on `remoteOnly`. Adding a country filter that fires regardless of `remoteOnly` (when `countryCode` is set) is a broader behavior change. The design doc confirms it is intended (FR-12). Risk: medium. T-9 must cover the `remoteOnly=false` path explicitly to prevent silent regression.

- **On-site filter relocation-browsing limitation.** A user who wants to browse international on-site roles (e.g. considering relocation from CH to DE) will have those roles silently dropped. Accepted risk for v1; `wrongLocationCount` in the summary header provides transparency. A future `--worldwide` flag is the correct escape hatch if this becomes a reported pain point.

- **HN `parseHeader` already handles the malformed cases** (`company || 'HN posting'`, `segments[1] ?? segments[2] ?? 'See description'`). FR-9 only needs tests to lock the existing behavior.

## Test strategy

All tests are vitest unit/integration tests in `src/__tests__/`.

**FR-1 / FR-2 / FR-3 — `src/__tests__/roleFamily.test.ts` (extend existing)**
- `resumeSpecialties` on `src/__tests__/fixtures/frontend-cv.yml` (created in T-1) returns `['frontend']` (not `['frontend','backend']`). This is the regression lock for the headline bug.
- `resumeSpecialties` on a genuine full-stack fixture (equal React + Django signals) returns `['frontend','backend']` or `['backend','frontend']`.
- `resumeSpecialties` on a general-engineering resume (no specialty signals) returns `[]`.
- `analyzeAts(realFrontendCV, backendJd)` => `role-family-match.status === 'fail'` and `score <= 45`. This is the FR-1 acceptance test, running the real CV.
- Existing cross-family tests (engineering vs recruiting) stay green (FR-3).

**FR-6 / FR-7 — `src/__tests__/jobs/rank.test.ts` (new file)**
- Provider resilience: inject a mock provider that throws; assert `searchJobs` resolves with `provider.error` set and other providers' postings intact, exit not thrown. (FR-6)
- Dedupe: two identical `(company, title, location)` postings with different scores; assert only the higher-scoring survives. (FR-7)

Note: the specialty-coherence integration test (`rankPostings` frontend CV vs backend posting) is in `roleFamily.test.ts` (T-2) to lock the FR-1 regression immediately after the fix, not after T-6.

**FR-9 — `src/__tests__/jobs/providers.test.ts` (extend existing)**
- `parseHeader` on: empty string, only one segment (no `|`), segment with no parentheses (no location). Assert no throw; company defaults to `'HN posting'`, title defaults to `'See description'`.

**FR-10 / FR-12 — `src/__tests__/jobs/normalize.test.ts` (extend existing)**
- On-site CH posting with location `'Zürich, CH'` passes when candidate is CH.
- On-site US posting with location `'New York, US'` is dropped when candidate is CH and `remoteOnly = false`.
- Remote posting with EMEA scope passes CH candidate (existing test stays green).

**FR-4 / FR-5 — manual smoke + CLI presence check**
The CLI subcommands are tested by invoking the action functions directly with a fixture resume + posting. No e2e process spawn needed; the acceptance criterion is that calling `jobsScoreAction` with valid inputs returns without throwing and produces the expected fields.

## Sequencing rationale

The specialty fix (T-1 + T-2) must land first because:
- Every subsequent test that exercises `roleFamilyMatch` depends on the corrected behavior.
- The integration test in T-7 (rank + minScore coherence) asserts the fix is in place.

`DEFAULT_MIN_SCORE` change (T-3) is tiny and follows the specialty fix immediately so the constants are consistent before CLI work begins.

`SearchOptions.location` + `applyQueryFilters` country filter (T-4) is independent of CLI but must precede the CLI `--location` wiring (T-5) because the CLI calls `searchJobs` with the resolved location.

CLI `jobs score` / `jobs tailor` (T-5) and `src/index.ts` registration (T-6) are **sequential, not parallel**: T-6 registers exactly what T-5 built; it cannot be meaningfully tested without T-5 complete. Both depend on T-3 (correct minScore) and T-4 (location in SearchOptions).

The FR-1 specialty-coherence regression test is in T-2 (not T-7) so the headline bug lock lands immediately after the fix and is not hidden behind four more tasks. T-7 retains only the provider-resilience (FR-6) and dedupe (FR-7) tests.

T-8 (HN malformed input tests) and T-9 (normalize country-filter tests) only require T-4 to be complete. They are sequenced after T-7 for simplicity, but could be built in parallel with T-5/T-6 if a parallel build run is used.

Documentation (T-10) is always last.

Documentation (T-10) is always last.
