# Design — jobs-feature-completion

> Owner: **product-designer** · Phase: `/design` · Reads: approved `spec.md`
> Status: approved   <!-- flipped to "approved" by /approve · do not edit by hand -->

This is a CLI + MCP terminal tool. There is no web UI here (constitution, web UI lives in `phoinixi/resuml-app`). So "user flows", "screens", and "visual direction" below mean **terminal output design and MCP response shape**, not pixels. The house style to match is `src/commands/jobs.ts` (chalk, `tierBadge`, `formatRanked`) and the existing `resuml_jobs_*` tools in `src/mcp/server.ts`.

## User flows
_Step-by-step primary flows, including entry and exit points._

### Flow A — `jobs search` (P0, exists, FR-1, FR-2, FR-6, FR-7, FR-10, FR-12)
1. Entry: `resuml jobs search -r resume.yaml [--location "Zürich, CH"] [--remote] [--min-score N] [--limit N] [--providers a,b] [--timeout ms] [--json]`.
2. Load + parse resume (`loadResumeFiles` -> `processResumeData`). Resolve location: `--location` overrides `basics.location`, otherwise derive from the CV. Parse city + `countryCode` from the resolved string.
3. Derive query (`deriveSearchQuery`) and print a "Search query (derived from resume)" block so the user can sanity-check seniority / skills / location before reading results.
4. Fan out to providers in parallel (`searchJobs`). Print the per-provider block: count or `error: ...` plus `durationMs`. A failed provider shows red `error:` and the search continues (FR-6).
5. Apply location filter: drop on-site roles whose country does not match the resolved `countryCode`. If `--remote`, also apply remote-eligibility filter using `countryCode` (FR-10, FR-12).
6. Rank, dedupe by `(company,title,location)` keeping the higher score (FR-7), drop below `minScore` (default 85), cap to `limit`.
7. Print the ranked queue via `formatRanked`. Each off-specialty backend role for a frontend CV has been capped at <= 45 by `roleFamilyMatch` -> `ROLE_MISMATCH_CAP` and therefore sits below the default `minScore` 85, so it is absent from the queue (FR-1).
8. Exit: queue printed, exit 0. `--json` prints the whole `SearchResult` and exits.

The headline UX decision (specialty rejection) lives in the **score** surface, not search. In search, an off-specialty role is simply absent from the queue because it scored <= 45 < `minScore`. To keep search honest about *why* the queue is short, the existing header line already reports `filteredCount` ("N below threshold"). We extend that one line with a specialty breakout (see Visual direction) so the user is not left wondering whether the search was empty or whether off-role roles were correctly dropped.

### Flow B — NEW `jobs score` (P1, FR-4)
1. Entry: `resuml jobs score -r resume.yaml --posting posting.yaml [--json]` (input mechanism decision below).
2. Load resume and load **one** posting (company, title, body, url, optional location, optional remote).
3. Call `scorePosting(resume, posting)` -> single `RankedJob`. This is the same ranking path as search, so results are consistent with `resuml_jobs_score` (FR-4 requirement).
4. Print a full ATS breakdown for that one posting: total score + rating, each tier with its grade, the `role-family-match` line verbatim (this is where a specialty mismatch is shown explicitly, see Visual direction), knockouts.
5. Exit 0. `--json` prints the `RankedJob` and exits.

### Flow C — NEW `jobs tailor` (P1, FR-5)
1. Entry: `resuml jobs tailor --posting posting.yaml`.
2. Load one posting (no resume needed; `buildTailorPrompt` only reads the posting).
3. Print the prompt string from `buildTailorPrompt(posting)` to stdout, unchanged. No LLM call, no resume parse, no scoring (constitution: resuml stays deterministic, the agent writes).
4. Exit 0. The prompt is plain text designed to be piped or pasted into an agent; `--json` is offered for parity but wraps the same string in `{ "prompt": "..." }`.

### Flow D — MCP-agent equivalents (P0, FR-8)
- `resuml_jobs_search({ yaml, remote?, minScore?, limit?, providers?, timeoutMs? })` -> JSON `SearchResult`. Already wired.
- `resuml_jobs_score({ yaml, company, title, body, url, location? })` -> JSON `RankedJob`. Already wired. The agent reads `ranked.ats.tiers.match.checks[id="role-family-match"].status`/`message` to learn a specialty rejection.
- `resuml_jobs_tailor({ company, title, body, url, location? })` -> text prompt. Already wired.
- The only MCP change the spec requires is documentation (FR-8): add the three `resuml_jobs_*` rows to CLAUDE.md's MCP tool table. No schema change.

### Input mechanism for `score` / `tailor` (real design decision)
The CLI needs to hand a single posting to `score`/`tailor`. Three options:

- **(i) Discrete flags** `--company --title --body --url --location`. Matches MCP exactly, but `--body` is a multi-paragraph JD; quoting a full JD on one shell line is hostile and lossy.
- **(ii) A posting file** `--posting posting.yaml` (or `.json`), fields mirroring the MCP input schema (`company, title, body, url, location?, remote?`). One file, easy to keep, round-trips cleanly, and is the natural artifact when a `jobs search --json` result is split into one posting per file.
- **(iii) stdin** (`--body -` or piping the JD). Good for `tailor` from `curl | resuml jobs tailor`, but loses the structured `company/title/url` needed by `score`.

**Recommendation: (ii) a `--posting <file>` YAML/JSON file as the primary path, with stdin accepted for `tailor` only as a convenience.** Reasoning: the body is the load-bearing field and belongs in a file, not a flag; a file is the same shape the agent already produces and what `jobs search --json` emits per posting, so the two surfaces stay symmetric (FR-4/FR-5 "consistent with the MCP tool"). The file keys are exactly the MCP `inputSchema` keys, so there is one mental model across CLI and MCP. Tradeoff: it forces the user to create a small file rather than type a one-liner; mitigated by documenting a 6-line YAML stub in CLAUDE.md and by accepting `--body -` stdin for the no-structure `tailor` case.

## Screen / component inventory
| Screen / component | Purpose | Satisfies |
|---|---|---|
| `search` query block | Echo derived seniority / skills / location so the user trusts the query | FR-1 (transparency of the matched profile) |
| `search` provider block | One line per provider: count or red `error:` + ms; proves graceful degradation | FR-6 |
| `search` summary header | `Top N of M fetched, K below threshold (J off-specialty, L wrong location)` | FR-1, FR-2, FR-7, FR-12 |
| `search` ranked queue (`formatRanked`) | Score-colored, badge-tagged ranked postings with tier line, url, knockouts | FR-1, FR-7 |
| `score` breakdown block | Full per-tier ATS report for one posting incl. the `role-family-match` verdict line | FR-2, FR-4 |
| `score` rejection line | Explicit `REJECTED specialty mismatch` banner when capped at <= 45 | FR-1, FR-2 |
| `tailor` prompt block | Raw `buildTailorPrompt` text, ready to pipe to an agent | FR-5 |
| `--json` payload (all three) | Machine-readable `SearchResult` / `RankedJob` / `{prompt}` | FR-4, FR-5, FR-8 |
| `resuml_jobs_search/score/tailor` MCP responses | JSON / text mirrors of the CLI for the agent surface | FR-8 |
| CLAUDE.md MCP + CLI tables | Discoverability of all three capabilities on both surfaces | FR-8 |

## States
- **Empty (no postings fetched):** providers all returned 0 (or all errored). Queue prints the existing yellow line `No jobs cleared the minimum score. Try --min-score 50 to loosen.` The provider block above it makes the cause obvious (all `0 postings` vs all `error:`).
- **Empty (all below minScore):** same yellow line, but the summary header reads `Top 0 of 42 fetched, 42 below threshold (38 off-specialty, 4 wrong location)`. The off-specialty and wrong-location counts tell the user the search worked and correctly rejected off-role and off-location roles rather than finding nothing (FR-2, FR-12 transparency). Users who see this are nudged to try `--min-score 70` rather than assuming the queue is broken.
- **Loading:** synchronous-feeling. Print `Searching jobs...` (blue) immediately, then the fan-out runs under one `Promise.all`. No spinner/progress bar (would fight `--json` and NO_COLOR); the per-provider `durationMs` line afterward is the "what took long" signal. Keep it.
- **Error (one provider failed, FR-6):** the failing provider renders red `name  error: <message>  123ms` in the provider block; its postings are `[]`; the queue is built from the survivors. The search never throws and exit code stays 0. This is the contract: a single flaky free source must not blank the search.
- **Error (resume/posting unparseable):** routed through `handleCommandError(error, 'jobs score')` like the rest of the CLI; non-zero exit. Distinct from provider failure, which is data, not a crash.
- **Success:** ranked queue as in Visual direction.
- **Edge — all providers fail:** provider block is all-red, queue prints the empty-state yellow line. Exit 0 (the tool ran correctly; the network/sources were down). The agent sees every `ProviderResult.error` populated and `jobs: []`.
- **Edge — single off-specialty role correctly rejected:** in `search` it is absent (capped < minScore) and counted in the off-specialty breakout. In `score` it is shown in full with the `REJECTED specialty mismatch` banner and `role-family-match: fail`. This divergence is intentional: search is a filter, score is a diagnosis.
- **Edge — full-stack CV ambiguity (open question #2):** a CV that genuinely evidences both frontend and backend with depth should pass both frontend and backend JDs. The `score` breakdown surfaces this transparently by printing the resume's detected specialties on the `role-family-match` line (`resume specializes in frontend, backend`), so the user can see *why* a backend role was accepted for them but not for a frontend-only peer. Design relies on FR-2's "dominant specialties" rule being plural-capable (see Open questions).

## Interaction & accessibility notes
- **Color is never the only signal.** Tier grades print as a text badge `[A]`/`[B]` (existing `tierBadge`) right next to the chalk color, so a no-color terminal still conveys grade. The same rule extends to the new `score` block: status words (`pass`/`warn`/`fail`) are printed literally, not only colored.
- **Specialty rejection uses a word, not just red.** The rejection banner is the literal text `REJECTED  specialty mismatch` plus the `role-family-match` message, so it survives NO_COLOR and screen readers.
- **NO_COLOR / no-color:** chalk auto-detects non-TTY and `NO_COLOR`. Because every semantic is duplicated in text (badges, status words, the `error:` / `! knockout:` prefixes), stripping color loses nothing. No new work required; just do not encode any new meaning in color alone.
- **`--json` for machines:** all three subcommands support `--json` and emit nothing else on stdout in that mode (the human blocks and the `Searching jobs...` line must be suppressed under `--json`, matching how MCP uses `suppressStdout()`). Agents consume `--json`; humans consume the formatted blocks.
- **Exit codes:** 0 for a successful run including the all-providers-failed and empty-queue cases (the tool behaved correctly); non-zero only for a real fault (unparseable resume/posting, unknown flag) via `handleCommandError`. Provider failures are data, not faults, so they never change the exit code (FR-6).
- **Stable, greppable layout:** fixed-width left columns (`providerId.padEnd(16)`, `score.padStart(3)`) so output is scannable and `grep`-able in a terminal.

## Visual direction
_Layout, hierarchy, tone — described in words / ASCII wireframes, not code._

### `jobs search` ranked queue (success)
Matches the current `formatRanked` + header exactly, with one new clause in the summary line (the off-specialty breakout).

```
Searching jobs...

=== Search query (derived from resume) ===
  Seniority: senior (11y experience)
  Top skills: React, TypeScript, Next.js, GraphQL, CSS, Node.js, Vite, Storybook
  Location: Zürich CH  (from --location flag)
  Remote-only: yes

=== Providers ===
  greenhouse       12 postings        842ms
  lever            7 postings         655ms
  ashby            error: 429 Too Many Requests   8012ms
  remoteok         20 postings        1203ms
  hn-whoishiring   31 postings        977ms

=== Top 4 matches (of 70 fetched, 22 below threshold, 18 off-specialty, 6 wrong location) ===

 88/100  Senior Frontend Engineer — Acme [remote]
        parsing 92[A]  match 86[B]  recruiter 84[B]
        https://boards.greenhouse.io/acme/jobs/123

 81/100  Staff UI Engineer, Design Systems — Globex
        parsing 90[A]  match 78[B]  recruiter 80[B]
        https://jobs.lever.co/globex/456

 76/100  Frontend Tech Lead — Initech [remote]
        parsing 88[A]  match 72[B]  recruiter 75[B]
        https://initech.com/careers/789
        ! knockout: work-auth (JD: "must have right to work in US"; resume silent.)
```

Hierarchy: query block (trust the profile) -> providers (trust the sources) -> summary (trust the filter) -> ranked list (the payload). The new `, 18 off-specialty` clause is the only addition and it is what tells the frontend candidate that 18 backend/other roles were correctly rejected (FR-2). No off-specialty role appears in the list because each was capped at 45 < 60.

### `jobs score` breakdown (a matching frontend role)
```
$ resuml jobs score -r resume.yaml --posting acme-frontend.yaml

=== Senior Frontend Engineer — Acme ===
  https://boards.greenhouse.io/acme/jobs/123
  Total: 88/100  good

  parsing    92 [A]
  match      86 [B]
    pass   role-family-match   Role family aligned (engineering).
    pass   hard-skill-overlap  18/22 hard skills matched (82%).
    warn   title-alignment     Title overlap 50% (resume "Frontend Tech Lead" vs JD "Senior Frontend Engineer").
    pass   yoe-match           11 YOE detected vs 5 required.
    skip   education-level     JD does not specify education level.
  recruiter  84 [B]

  No knockouts.
```

### `jobs score` breakdown — specialty-REJECTED role (the headline UX, FR-1/FR-2)
A frontend CV scored against a backend JD. The total is capped at `ROLE_MISMATCH_CAP` (45), `role-family-match` is `fail`, and a literal banner names the reason. This is shown in full (not filtered) because `score` is a diagnosis of one posting the user explicitly handed in.

```
$ resuml jobs score -r resume.yaml --posting initech-backend.yaml

=== Senior Backend Engineer — Initech ===
  https://jobs.lever.co/initech/999
  Total: 45/100  poor   (capped: role family does not match this posting)

  REJECTED  specialty mismatch
            backend role; resume specializes in frontend.

  parsing    91 [A]
  match      31 [C]
    fail   role-family-match   Specialty mismatch: backend role, resume specializes in frontend.
    warn   hard-skill-overlap  9/24 hard skills matched (37%).
    fail   title-alignment     Title overlap 14% (resume "Frontend Tech Lead" vs JD "Senior Backend Engineer").
    pass   yoe-match           11 YOE detected vs 5 required.
    skip   education-level     JD does not specify education level.
  recruiter  84 [B]

  No knockouts.
```

Design choices made explicit:
- In `search`: filtered **silently from the list**, but **counted** in the `, N off-specialty` header clause. Silent in the list keeps the queue clean; counted in the header keeps it honest.
- In `score`: **shown in full with a `REJECTED specialty mismatch` banner**. The user asked about this one posting; hiding the verdict would be the wrong answer. The banner is text-first (survives NO_COLOR), echoes the `role-family-match` message, and the capped total + `poor` rating reinforce it three ways (banner, total, tier status).

### `jobs tailor` prompt output
Raw `buildTailorPrompt` text, no chrome, pipe-friendly.

```
$ resuml jobs tailor --posting acme-frontend.yaml

Tailor my resume for the following job posting at Acme.

# Senior Frontend Engineer
Location: Remote (EU)
URL: https://boards.greenhouse.io/acme/jobs/123

## Job description
We are looking for a Senior Frontend Engineer to ...

Use the resuml MCP tools:
  1. resuml_validate to confirm the tailored YAML parses.
  2. resuml_ats_check with the job description above. Target score >= 80.
  3. Show the changes you made and the final score.
```

### `--posting` file shape (the recommended input)
A 6-line YAML stub, keys identical to the MCP `resuml_jobs_score` / `resuml_jobs_tailor` input schema:
```yaml
company: Acme
title: Senior Frontend Engineer
url: https://boards.greenhouse.io/acme/jobs/123
location: Remote (EU)       # optional
remote: true                # optional; defaults from a /remote/i test on location
body: |
  We are looking for a Senior Frontend Engineer to ...
```

## Locked decisions
_All design questions resolved by the human. No remaining blockers for planning._

1. **Specialty gate: option (b) confirmed.** `resumeSpecialties` returns the resume's dominant/top specialties by score margin (plural-capable). The specialty gate in `roleFamilyMatch` checks whether the JD's dominant specialty is in that top set. A frontend-only CV's top set is `{frontend}`, so a backend JD fails the gate and triggers the cap. A genuine full-stack CV's top set is `{frontend, backend}`, so it passes both. The `score` banner reads `backend role; resume specializes in frontend.` (one-line, clear, no ambiguity). Full-stack handling falls out naturally without a separate specialty type.

2. **Input for `score`/`tailor`: `--posting <file>` (YAML/JSON) confirmed.** Keys mirror the MCP `inputSchema` exactly. `tailor` also accepts `--body -` (stdin) as a convenience for piping.

3. **Default `minScore`: 85.** Stricter than the old 60 now that the coherence fix means off-specialty roles cap at 45 and genuinely unfit roles cluster well below 85. Users with sparse providers or narrow skill sets can lower with `--min-score 70` (or lower). The empty-state copy nudges this: `Try --min-score 70 to see more matches.`

4. **`jobs tailor` emits a prompt only, no LLM.** Confirmed. Constitution forbids bundled LLM calls. Both CLI and MCP emit the `buildTailorPrompt` text verbatim.

5. **Provider reliability: keep current behavior (8000ms, silent-empty-on-error, surfaced per provider).** No new "minimum-providers-succeeded" signal. Exit 0 on all-failed.

6. **Location: `--location <city, CC>` flag added (FR-12).** Defaults to `basics.location` from the CV. Resolved `countryCode` used for both remote-eligibility filtering and on-site country filter. Summary header reports `wrong location` count alongside `off-specialty` count.

## Open design questions
_None remaining. All unblocked for planning._
