# Spec — jobs-feature-completion

> Owner: **product-manager** · Phase: `/discover`
> Status: approved   <!-- flipped to "approved" by /approve · do not edit by hand -->

## Problem & context
_Who hurts, what's the pain, why now._

The jobs feature (discover + score real postings against a resume) is **entirely uncommitted work-in-progress**. `git status` shows every jobs file as untracked (`src/jobs/`, `src/commands/jobs.ts`, `src/ats/roleFamily.ts`, `data/jobs/`, the new tests) plus modified `src/ats/checks/match.ts`, `src/ats/index.ts`, `src/mcp/server.ts`, `src/index.ts`. Nothing has shipped, so today no user can rely on it.

Two pains, in priority order:

1. **CV-coherence is broken (headline).** The constitution's hard rule is that a senior frontend CV must not surface senior backend roles as strong matches. It still does. Probed against the real CV `francesco-esposito-cv.yml` (a frontend tech lead) versus a synthetic Senior Backend Engineer JD:
   - Total ATS score came back **73 / "needs-work"** — well above the default `minScore` of 60, so the backend role would appear in the ranked queue.
   - `role-family-match` returned **`pass` ("Role family aligned (engineering)")**, not a fail, so the role-mismatch cap (`ROLE_MISMATCH_CAP = 45` in `src/ats/index.ts`) never engaged.
   - Root cause: `resumeSpecialties()` in `src/ats/roleFamily.ts` uses a low bar (signature count >= 2) and returns **both `frontend` and `backend`** for this CV. The specialty gate in `roleFamilyMatch` (`src/ats/checks/match.ts`) only fires when `!cvSpecs.has(jdSpec)`, so an incidentally-present `backend` token in a frontend CV satisfies the guard and the mismatch is never caught. The same gate also silently passes any general-engineering resume (`cvSpecs.size === 0`).

2. **The feature is incomplete across surfaces.** The constitution requires every feature be reachable from both the CLI and the MCP server. It is asymmetric:
   - CLI exposes only `jobs search` (`src/index.ts`, `src/commands/jobs.ts`). There is **no `jobs score` and no `jobs tailor` subcommand**.
   - MCP exposes `resuml_jobs_search`, `resuml_jobs_score`, and `resuml_jobs_tailor` (`src/mcp/server.ts`), backed by `searchJobs` / `scorePosting` / `buildTailorPrompt` in `src/jobs/index.ts`.
   - The CLAUDE.md MCP tool table documents only the pre-jobs tools; the three `resuml_jobs_*` tools are undocumented.

Note on the original "stubbed function bodies" signal: investigation does not confirm it. `src/commands/jobs.ts` is fully implemented, `npx tsc --noEmit` is clean, and the full vitest suite is green (146 passing). The incompleteness is **missing CLI subcommands and missing test coverage of the coherence bug**, not empty function bodies. The spec reflects what the code actually shows.

Why now: the work is unshipped and uncommitted, and the one behavior the constitution names as non-negotiable (CV coherence) demonstrably fails on the project owner's own CV. This is the moment to lock the contract before it is committed and released.

## Goals
- Job results are coherent with the CV: a frontend CV does not surface backend (or other off-specialty) roles as passing matches, verified on a real CV and not only on hand-built fixtures.
- The feature is complete and symmetric: every advertised capability (search, score, tailor) works end-to-end from both the CLI and the MCP server.
- Provider fan-out degrades gracefully: a single failing or slow free source never breaks a search; per-provider errors are surfaced, not thrown.
- The coherence behavior is locked by vitest tests that trace to a stated rationale, and the existing suite stays green.

## Non-goals
- No paid or auth-gated job sources (no LinkedIn/Indeed scraping, no keyed aggregators). The eight free, keyless providers are the whole set.
- No web UI (that lives in `phoinixi/resuml-app`).
- No bundled LLM calls: `jobs tailor` / `resuml_jobs_tailor` emit a prompt for the agent; resuml does not write the resume itself.
- No PII storage, server-side state, telemetry, caching layer, or database for postings.
- Not a rewrite of the ATS engine, the provider adapters, or the scoring rubric. This is completion and a targeted coherence fix.
- No new provider sources beyond the eight already present.

## Users & jobs-to-be-done
- As a **job seeker using the CLI**, I want to run one command against my resume and get a ranked queue of real postings that actually fit my specialty, so I stop wading through off-target roles. Priority: **P0**
- As a **job seeker using the CLI**, I want to score a single posting I already have, and get a tailoring prompt for a specific posting, without dropping into MCP, so the CLI is self-sufficient. Priority: **P1**
- As an **AI agent via MCP**, I want `resuml_jobs_search` / `resuml_jobs_score` / `resuml_jobs_tailor` to return coherent, machine-readable results, so I can chain discovery into validate/ats-check/render. Priority: **P0**
- As a **job seeker**, I want a single flaky free source to never blank out my whole search, and to see which sources failed, so results stay trustworthy. Priority: **P1**
- As an **EU/CH-based job seeker**, I want remote postings scoped to regions I cannot work in to be filtered out, so the queue reflects roles I can actually take. Priority: **P2**

## Functional requirements
- **FR-1** — A frontend-specialty CV scored against a clearly backend-specialty JD MUST yield `role-family-match` status `fail` and a total ATS score at or below the role-mismatch cap (currently 45), so the posting falls below the default `minScore` (85) and does not appear in the ranked queue. Verified on the real `francesco-esposito-cv.yml`, not only on synthetic fixtures. (Today: status `pass`, score 73.)
- **FR-2** — The specialty-coherence gate in `roleFamilyMatch` MUST NOT be defeated by an incidental off-specialty token in the resume. The decision MUST rest on the resume's **dominant** specialty (or specialties the resume genuinely evidences with depth), not on any signature crossing a low count threshold. Define and document the rule (for example: compare the JD's dominant specialty against the resume's dominant specialty, or require the JD specialty to be among the resume's top specialties), so `resumeSpecialties` returning both `frontend` and `backend` for a frontend CV no longer auto-satisfies the guard.
- **FR-3** — Cross-family mismatches MUST continue to hard-cap (engineering CV vs recruiting/sales/etc. role caps at <= 45). The existing `roleFamily.test.ts` cases MUST stay green; the fix to FR-1/FR-2 MUST NOT regress them.
- **FR-4** — A `jobs score` CLI subcommand MUST exist, accepting a resume plus a single posting (company, title, body, url, optional location) and printing the ranked ATS breakdown, with a `--json` mode. It MUST produce results consistent with `resuml_jobs_score`.
- **FR-5** — A `jobs tailor` CLI subcommand MUST exist, accepting a single posting and printing the tailoring prompt produced by `buildTailorPrompt`, consistent with `resuml_jobs_tailor`. It MUST NOT call any LLM.
- **FR-6** — `searchJobs` MUST fan out to enabled providers in parallel and isolate failures: a provider that throws or times out yields an empty posting list and an `error` on its `ProviderResult`, and never aborts the overall search. (The orchestrator already implements this; it MUST be covered by a test that injects a failing provider.)
- **FR-7** — The ranked queue MUST dedupe cross-provider duplicates by `(company, title, location)` via `dedupeKey`, keeping the higher-scoring instance, and MUST sort descending by total ATS score before applying `minScore` and `limit`.
- **FR-8** — `resuml_jobs_search`, `resuml_jobs_score`, and `resuml_jobs_tailor` MUST be documented in CLAUDE.md's MCP tool table, and the new `jobs score` / `jobs tailor` CLI subcommands added to the CLI command list, so both surfaces are discoverable.
- **FR-9** — The HN "who is hiring" header parser (`parseHeader` in `src/jobs/providers/hn-whoishiring.ts`) MUST degrade safely on malformed first lines: missing company yields `"HN posting"`, missing title yields `"See description"`, and a posting with no parseable structure MUST NOT crash the provider or the ranker. Covered by a unit test over representative malformed inputs.
- **FR-10** — Remote-only search MUST drop postings whose stated remote scope excludes the candidate's country (via `isRemoteEligible` in `src/jobs/geo.ts`), while keeping bare/unknown-scope remote postings. This behavior MUST be covered by tests for at least one supported country (CH).
- **FR-11** — All new and changed behavior ships with vitest tests, the full suite stays green, and any rubric/coherence change traces to a stated rationale (consistent with the existing per-check evidence model). No em-dashes anywhere.
- **FR-12** — `jobs search` MUST accept an explicit `--location <city, CC>` flag (e.g. `--location "Zurich, CH"`). When supplied it overrides the location derived from the CV's `basics.location`. When omitted, the CV location is the default. The resolved country code is used for remote-eligibility filtering (FR-10). On-site roles (not remote) from countries that do not match the resolved country MUST be excluded from the queue. Both the flag and its default derivation MUST be documented alongside `--remote`.

## Success metrics
- **Cross-specialty false positives** · target **0** off-specialty roles (e.g. backend) in the top-N for the real frontend CV on a fixture provider run · measured by a vitest integration test that feeds known backend postings through `rankPostings` / `searchJobs` and asserts none clear `minScore`.
- **Coherence regression guard** · target **100%** of role-family/specialty fixture cases pass, including the new frontend-vs-backend case · measured by `roleFamily.test.ts` (extended).
- **Surface completeness** · target **3/3** capabilities (search, score, tailor) reachable from both CLI and MCP · measured by command/tool presence tests and manual smoke.
- **Provider resilience** · target **0** thrown errors from `searchJobs` when one provider fails · measured by a fault-injection test asserting the search resolves with the failed provider's `error` populated and other providers' postings intact.
- **Suite health** · target **all vitest tests green** and `tsc --noEmit` clean on the branch · measured in CI / pre-commit.

## Open questions / assumptions
- **Specialty strictness (needs a human call).** How strict should the FR-2 gate be? Options: (a) compare dominant specialty vs dominant specialty (strict, may exclude genuine full-stack CVs from frontend or backend roles); (b) require the JD specialty to rank among the resume's top specialties by score margin (medium); (c) keep the membership check but raise the `resumeSpecialties` threshold so incidental tokens do not register. Each trades false positives against false negatives differently. Recommend (b) but defer to design.
- **Full-stack handling.** Should a genuinely full-stack CV (strong frontend AND strong backend) match both frontend and backend roles, or should it be treated as a distinct specialty? The current code treats fullstack as satisfying either via the membership check; FR-2 may change that.
- **`jobs tailor` shape.** Confirm that both the CLI subcommand and MCP tool should only **emit a prompt** (no agent shell-out, no LLM call), consistent with the constitution. Assumed yes.
- **Default `minScore`: 85.** With the coherence fix, off-role postings cap at 45 and unfit roles cluster well below 85. Users can lower with `--min-score`. Decided in design phase.
- **Provider reliability and rate limits.** The eight free sources have no SLA; HN/Algolia, RemoteOK, and the allowlist-based ATS feeds can rate-limit or change shape. Is the current per-provider timeout (8000ms) and silent-empty-on-error behavior the intended contract, and do we need a minimum-providers-succeeded signal in the result? Assume current behavior is acceptable for v1.
- **Seed company allowlist coverage.** Greenhouse/Lever/Ashby/Workable need a company allowlist (`data/jobs/companies.json`, ~1.3K). Is the seed list large enough to be useful, and should users be able to extend it from the CLI (the `extraCompanies` option exists in `SearchOptions` but is not wired to a CLI flag)? Open.
