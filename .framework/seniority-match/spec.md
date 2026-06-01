# Spec — seniority-match

> Owner: **product-manager** · Phase: `/discover`
> Status: approved   <!-- flipped to "approved" by /approve · do not edit by hand -->

## Problem & context

The `jobs-feature-completion` spec ships a ranked queue of real postings against a CV. That queue already filters for role family and specialty coherence. Seniority coherence is still missing.

**The failure mode is concrete.** A "Senior Engineer" CV set to `basics.label: Senior Software Engineer` with 10+ YOE today scores 91 against a posting titled "Backend Engineer, AI Security" at Stripe. It appears in the ranked queue at the top, above roles that match the candidate's actual level. Conversely, the same engine would surface a principal-level role ("Staff Engineer") to a junior CV if the hard-skill overlap happens to be high. Neither outcome is acceptable: the constitution's hard rule is that job results must be coherent with the CV.

**Why YOE alone is wrong.** The current `yoeMatch` check matches only the regex `\d+ years` against the JD body. That misses:
- Level strings in titles and JD bodies: "senior-level", "entry-level", "experienced engineer", "L5", "E4", "IC4"
- Cases where the JD does not state a numeric YOE requirement at all (common in Greenhouse/Lever/Ashby postings where level is encoded in the title only)
- Management roles that sit on a different ladder than IC roles; a Staff IC and an Engineering Manager are not comparable on a flat scale

**Research grounding.** LinkedIn patent US20180005192A1 (2018) shows that production seniority inference combines title decomposition, explicit seniority modifiers, YOE, and company-level norms. Patent US12105720 (2024) introduces a level-gap filter: postings outside a distance band from the searcher's seniority are dropped. KDD 2024 confirmed-hire data shows that stretch-down by one level is a normal and valid hire (Staff candidate hired into Senior role), but two-plus level gaps in either direction are not. None of that multi-signal logic is implemented in resuml.

**Why now.** The `jobs-feature-completion` feature is being built now (unshipped). Seniority matching must be solved at the same time, not retrofitted: the rank pipeline (`rankPostings`) calls `analyzeAts` for every posting; adding `seniorityMatch` as a scored check in the match tier is a natural extension of the existing pattern. Delaying means shipping a queue that is incoherent on level even after specialty coherence is fixed.

## Goals

- The ranked queue is coherent on seniority level: a junior CV does not surface staff/principal postings as strong matches, and a staff CV does not surface intern/junior postings.
- Seniority is extracted from both the JD title and body using level strings (numeric YOE, modifiers like "senior-level", and company-band labels like L5/E4/IC4), not only from `\d+ years` regex.
- The CV's seniority level is derived from the same multi-signal logic used in `deriveSearchQuery` (already exists in `src/jobs/query.ts`), not independently re-implemented.
- IC and management roles are on separate ladders. A posting for Engineering Manager, Director, or VP is not seniority-compared against an IC candidate.
- The seniority pre-filter in the job search pipeline drops postings with a level gap of 3 or more before ATS scoring, so they never consume scoring budget or appear in results.
- `titleAlignment` uses 5-dimension title decomposition (role / seniority modifier / specialty / accreditation / employment status) so that seniority modifiers stripped from both sides improve the core token overlap, not penalize it.

## Non-goals

- No ML, embeddings, or training data. All seniority extraction is deterministic rule-based pattern matching.
- No company-size lookup, no LinkedIn API, no external enrichment of any kind.
- No changes to the parsing or recruiter tiers. This feature touches only the match tier.
- No new ATS config knobs exposed for seniority matching in this feature. `seniorYoeCutoff` already exists in `AtsConfig.thresholds`; no new config surface is added.
- No change to the existing `yoeMatch` check behavior when a numeric YOE requirement is found in the JD. The new `seniorityMatch` check is additive.
- No changes to the eight job providers or their fetch logic.
- No web UI.

## Users & jobs-to-be-done

- As a **job seeker using the CLI**, I want the ranked queue to reflect my actual seniority level so I stop seeing intern and junior roles when I am a senior engineer, and stop seeing staff/principal postings I am not qualified for. Priority: **P0**
- As a **job seeker using the CLI**, I want the ATS check output to explain the seniority match result (level detected on both sides, gap, score) so I understand why a posting ranked high or low. Priority: **P0**
- As an **AI agent via MCP**, I want `resuml_ats_check` to return a `seniority-match` check in the match tier with a numeric score, level labels, and actionable hints, so I can surface level mismatches in a tailor prompt. Priority: **P0**
- As a **job seeker**, I want postings that are 3 or more seniority levels away from my level to be silently excluded from the queue before scoring, so the ranked list is not polluted by obviously unfit roles. Priority: **P1**
- As an **AI agent via MCP**, I want `resuml_ats_explain seniority-match` to return a rubric entry with evidence level and source URL (LinkedIn patents), so the scoring rationale is traceable. Priority: **P1**
- As a **job seeker with a management role (EM, Director, VP) on their CV**, I want management postings to not be penalized by an IC seniority comparison, since the two tracks are not comparable on a shared scale. Priority: **P1**

## Functional requirements

- **FR-1** — A new `seniorityMatch` check MUST be added to the match tier (`allMatchChecks` in `src/ats/checks/match.ts`), with `weight: 'high'` and `id: 'seniority-match'`. It MUST return a `CheckResult` with `score` 0-100 and a `message` that names the detected CV seniority level, the detected JD seniority level, and the gap.

- **FR-2** — The `seniorityMatch` check MUST use the following scoring table based on the absolute gap between CV level and JD level (using the ordered scale intern=0, junior=1, mid=2, senior=3, staff=4, principal=5):
  - Gap 0 (exact match): score 100, status `pass`
  - Gap 1 (stretch up or stretch down by one): score 90, status `pass`
  - Gap 2: score 70, status `warn`
  - Gap 3: score 40, status `warn`
  - Gap 4 or more: score 10, status `fail`
  - When JD seniority cannot be extracted (no signal in title or body): status `skipped`, score 0, check excluded from tier score.

- **FR-3** — JD seniority extraction MUST cover all three signal types, checked in priority order (first match wins):
  1. Explicit seniority modifier in the JD title: `junior`, `jr`, `associate`, `entry`, `mid`, `senior`, `sr`, `lead`, `staff`, `principal`, `distinguished`, `fellow`, `head of`, `vp`, `chief`, `director`
  2. Level strings in the JD body: `entry-level`, `entry level`, `senior-level`, `senior level`, `experienced engineer`, `early-career`, `early career`, as well as band labels `L3`..`L7`, `E3`..`E7`, `IC3`..`IC6`, `M1`..`M4` (these map to the six-level scale)
  3. Numeric YOE range in the body via the existing `\d+ years` pattern (the existing `yoeMatch` mapping: <1=intern/junior, 1-2=junior/mid, 3-5=mid/senior, 6-9=senior/staff, 10+=staff/principal)

- **FR-4** — CV seniority extraction MUST reuse the existing `detectSeniorityFromTitle` function and `seniorityFromYoe` function from `src/jobs/query.ts` (or equivalent extracted utility), taking the max of title-derived and YOE-derived level, consistent with `deriveSearchQuery`. This MUST NOT be re-implemented independently.

- **FR-5** — The `seniorityMatch` check MUST detect when the JD posting is for a management role (the JD title or the first 3 lines of the body contain `engineering manager`, `em`, `director`, `vp of engineering`, `head of engineering`, or `chief`) AND the CV is on the IC track (no management role titles in `resume.work[*].position`). When both conditions are true, the check MUST return `status: 'skipped'` with a `message` noting "IC/management track mismatch; comparison skipped" and score 0, so the IC candidate is not penalized for not being a manager.

- **FR-6** — A seniority pre-filter MUST be applied in `applyQueryFilters` (or equivalent filter step in `src/jobs/query.ts` or `src/jobs/rank.ts`) before ATS scoring. Postings whose JD-extracted seniority level is 3 or more levels away from the CV seniority MUST be dropped before `analyzeAts` is called. The same extraction logic as FR-3 MUST be used. This filter MUST NOT drop postings where JD seniority cannot be extracted (no signal = no filter).

- **FR-7** — The `titleAlignment` check MUST strip seniority modifier tokens from both the resume title and the JD title before computing Jaccard overlap. The set of modifier tokens to strip MUST include at minimum: `junior`, `jr`, `associate`, `entry`, `mid`, `senior`, `sr`, `lead`, `staff`, `principal`, `distinguished`, `fellow`, `head`, `vp`, `chief`, `director`. The existing `SENIORITY` regex in `match.ts` already partially does this; it MUST be extended to cover the full modifier list so that "Senior Backend Engineer" and "Backend Engineer" produce a higher overlap score than they do today.

- **FR-8** — A rubric entry for `seniority-match` MUST be added to the ATS rubric (wherever `resuml_ats_explain` resolves entries). The entry MUST include: `id: 'seniority-match'`, `tier: 'match'`, `weight: 'high'`, a `description` of the scoring logic, `evidenceLevel: 'evidence'`, and `source` referencing LinkedIn patent US12105720 (2024) and KDD 2024.

- **FR-9** — The six-level seniority scale (`intern`, `junior`, `mid`, `senior`, `staff`, `principal`) and the band-label-to-level mapping (L3=junior, L4=mid, L5=senior, L6=staff, L7=principal, E3/IC3=junior, etc.) MUST be defined in a single shared location (a constant or utility, not duplicated across `query.ts` and `match.ts`). Both `deriveSearchQuery` and `seniorityMatch` MUST import from this shared definition.

- **FR-10** — When `seniorityMatch` returns `fail` (gap >= 4), it MUST NOT alone trigger the `ROLE_MISMATCH_CAP` (45). The cap is reserved for role-family mismatches (`roleFamilyMatch`). A seniority fail contributes to the match tier score through normal weighted averaging. The spec documents this explicitly so no implementer adds a second cap path.

- **FR-11** — All new behavior MUST ship with vitest unit tests. Required cases at minimum:
  - JD title extraction: each signal type in FR-3, including band labels (L5, E4, IC5) and level strings ("senior-level experience required")
  - Scoring table: all gap values 0 through 4+, including the skip case (no JD signal)
  - IC/management track skip rule (FR-5): a management-title JD vs IC CV returns `skipped`
  - Pre-filter (FR-6): posting with gap >= 3 is excluded from results; posting with gap 2 is not; posting with no JD seniority signal is not excluded
  - `titleAlignment` modifier stripping (FR-7): "Senior Backend Engineer" vs "Backend Engineer" scores higher after the fix than before
  - The full existing test suite MUST stay green after the change

- **FR-12** — `resuml ats explain seniority-match` (CLI) and `resuml_ats_explain seniority-match` (MCP) MUST return the rubric entry added in FR-8.

- **FR-13** — No em-dashes in any user-facing messages, hints, documentation strings, or source file comments introduced by this feature.

## Success metrics

- **Seniority coherence on real CV** · A "Senior Software Engineer" CV (10+ YOE) scored against a posting explicitly titled "Junior Software Engineer" MUST yield `seniority-match` status `fail` (gap >= 2) and a total score below 85 (the `jobs-feature-completion` default `minScore`), so it does not appear in the ranked queue · measured by a vitest integration test using the real `francesco-esposito-cv.yml` fixture and a synthetic junior posting.

- **No regression on specialty coherence** · 100% of existing `roleFamily.test.ts` cases pass after the change · measured by the existing suite.

- **Pre-filter exclusion rate** · Postings with JD seniority gap >= 3 are dropped before scoring in 100% of cases · measured by a fault-injection test that injects a principal-level posting against a junior CV and asserts it never reaches `analyzeAts`.

- **Rubric traceability** · `resuml ats explain seniority-match` returns a non-empty entry with a source URL · measured by a CLI smoke test.

- **Suite health** · All vitest tests green and `tsc --noEmit` clean after the change · measured in CI.

- **Scoring table accuracy** · Gap-0 through gap-4+ cases each produce the correct score from FR-2 · 6 test cases, 6/6 passing.

## Locked decisions (resolved before design phase)

- **Tolerance band width: gap-2 = warn at 70. Locked.** The hard cut is the pre-filter at gap >= 3. Overqualified candidates with a 2-level gap still appear in the queue with a warning; they are not failed or filtered. Rationale: gap-2 (e.g. staff applying to mid) is unusual but not invalid, and false exclusions are worse than false inclusions at this threshold.

- **IC/management skip: both directions. Locked.** When the JD is a management role and the CV is IC, skip. When the JD is IC and the CV is management, also skip. Manager-to-IC is a known career transition; position title detection is too coarse to penalise this without unacceptable false positives.

- **No-signal postings: skipped, not pre-filtered. Locked.** When the JD has no seniority signal (common in Greenhouse/Lever postings), `seniorityMatch` returns `skipped` and the pre-filter does not apply. Filtering no-signal postings would exclude too many valid roles.

- **`yoeMatch` weight: unchanged. Locked.** Both `yoeMatch` and `seniorityMatch` remain `high` weight. They measure different things (raw years vs. inferred level bucket); the overlap is acceptable and actually reinforces numeric YOE requirements in the score.

- **Band label coverage: partial for v1. Locked.** L3-L7 (Google), E3-E7 (Meta), IC3-IC6 (Stripe-style), M1-M4 (management) are covered. Stripe L1-L4 and Microsoft level numbers are not covered and fall through to signal type 2 or 3. Acceptable for v1.

- **Shared utility file: `src/ats/seniority.ts`. Locked.** Seniority is primarily an ATS concept. Imported by both `src/jobs/query.ts` and `src/ats/checks/match.ts`.
