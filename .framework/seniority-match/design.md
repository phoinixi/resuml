# Design — seniority-match

> Owner: **product-designer** · Phase: `/design` · Reads: approved `spec.md`
> Status: approved   <!-- flipped to "approved" by /approve · do not edit by hand -->

Feature slug: `seniority-match`

This is a CLI + MCP terminal tool. There is no web UI (constitution; web UI lives in
`phoinixi/resuml-app`). "Screens" and "visual direction" below mean terminal output design
and MCP response shape. House style matches the approved `jobs-feature-completion/design.md`:
chalk, `tierBadge`, `formatRanked`, `handleCommandError`, `suppressStdout` under `--json`.

---

## User flows

### Flow A — `jobs search` with seniority pre-filter (FR-6, FR-9)

1. Entry: `resuml jobs search -r resume.yaml [--location "..."] [--remote] [--min-score N] [--json]`.
2. Load resume, derive query via `deriveSearchQuery` (reads `detectSeniorityFromTitle` +
   `seniorityFromYoe` from `src/ats/seniority.ts`, per FR-4/FR-9).
3. Print the "Search query" block. The `Seniority:` line already exists; no change needed.
4. Fan out to providers. Print per-provider block.
5. Apply `applyQueryFilters`. This function gains a new seniority pre-filter step (FR-6):
   for each posting, run JD seniority extraction (FR-3 logic from `src/ats/seniority.ts`).
   If the absolute level gap between CV seniority and JD seniority is >= 3, drop the posting.
   Postings with no JD seniority signal are NOT dropped (locked decision: no-signal = no filter).
   Track dropped count as `seniorityFilteredCount` alongside the existing location filter count.
6. Rank, dedupe, apply `minScore` threshold, cap to `limit`.
7. Print ranked queue via `formatRanked`. Extend the summary header with a `P wrong seniority`
   clause (see Visual direction).
8. Exit 0. `--json` extends `SearchResult` with `seniorityFilteredCount: number` in the response
   payload; the `Searching jobs...` line and per-provider block are suppressed.

Key UX decision: the pre-filtered postings are silently absent from the ranked list but
counted honestly in the summary header. This is the same pattern as `off-specialty` and
`wrong location` (established in `jobs-feature-completion`). The user is never left
wondering whether the search found nothing or filtered correctly.

### Flow B — `jobs score` showing `seniority-match` check (FR-1, FR-2, FR-3, FR-5)

1. Entry: `resuml jobs score -r resume.yaml --posting posting.yaml [--json]`.
2. Load resume and posting. Call `scorePosting(resume, posting)` -> `RankedJob`.
3. `analyzeAts` runs all match checks, now including `seniorityMatch` (FR-1).
4. The `seniorityMatch` check appears in the `match` tier breakdown, ordered after
   `role-family-match` and before `hard-skill-overlap` (to group the structural fit checks
   before the keyword checks). Its line follows the same `status  id  message` format.
5. Print the full ATS breakdown. Seniority result is visible alongside all other checks.
6. Exit 0. `--json` emits the `RankedJob` with `ats.tiers.match.checks` including the
   `seniority-match` entry (id, status, score, message, hints).

Possible outcomes for the `seniority-match` line in `jobs score`:
- `pass   seniority-match   CV senior (gap 0): exact match. Score 100.`
- `pass   seniority-match   CV staff, JD senior (gap 1, stretch down): score 90.`
- `warn   seniority-match   CV staff, JD mid (gap 2, overqualified): score 70.`
- `warn   seniority-match   CV junior, JD senior (gap 2, stretch up): score 70.`
- `skip   seniority-match   IC/management track mismatch; comparison skipped.`
- `skip   seniority-match   JD seniority signal not found; check skipped.`

The `skip` status word is printed literally (matching the existing `skip` rendering used by
`education-level` and `yoe-match` when the JD has no signal). Color is not the only signal
(see Interaction notes).

### Flow C — `jobs score` when posting was pre-filtered (gap >= 3)

When a user runs `jobs score` directly on a posting that would have been pre-filtered during
`jobs search`, the pre-filter does NOT apply. `jobs score` is a diagnosis surface: the user
explicitly handed in this posting and deserves to see the full breakdown, including a `warn`
or `fail` on `seniority-match`. This divergence matches the precedent in
`jobs-feature-completion`: search filters, score diagnoses.

The `seniority-match` line reads `warn` (gap 2) or `fail` (gap >= 3 or 4+) per the scoring
table (FR-2). No banner is added for seniority fail; `ROLE_MISMATCH_CAP` is explicitly not
triggered by `seniorityMatch` (FR-10). The score simply takes the weighted penalty.

### Flow D — MCP `resuml_jobs_score` JSON response shape (FR-1, FR-8)

The agent reads `ranked.ats.tiers.match.checks` and finds the `seniority-match` entry:

```
{
  "id": "seniority-match",
  "tier": "match",
  "weight": "high",
  "status": "pass" | "warn" | "fail" | "skipped",
  "score": 0-100,
  "message": "CV senior, JD senior (gap 0): exact match.",
  "hints": []
}
```

When `status` is `skipped`, `score` is 0 and the check is excluded from the tier score
(same contract as `education-level` and `yoe-match` when skipped).

### Flow E — `resuml ats explain seniority-match` / MCP `resuml_ats_explain` (FR-8, FR-12)

1. Entry: `resuml ats explain seniority-match` (CLI) or `resuml_ats_explain("seniority-match")` (MCP).
2. Looks up the rubric entry by `id: 'seniority-match'`.
3. Prints the rubric entry fields: id, tier, weight, description, evidenceLevel, source.
4. Exit 0.

---

## Screen / component inventory

| Screen / component | Purpose | Satisfies |
|---|---|---|
| `search` summary header extended clause | Reports `P wrong seniority` alongside `J off-specialty, L wrong location` so the user sees how many postings the seniority pre-filter dropped | FR-6 |
| `applyQueryFilters` seniority gate | Drops postings with JD level gap >= 3 before ATS scoring; passes no-signal postings through | FR-6, FR-9 |
| `seniority-match` check line in `jobs score` match tier | Prints `status  seniority-match  message` for the one posting being diagnosed; follows the same per-check row format as all other match checks | FR-1, FR-2 |
| `seniority-match` IC/management skip line | When JD is management and CV is IC (or vice versa), prints `skip   seniority-match   IC/management track mismatch; comparison skipped.` | FR-5 |
| `seniority-match` no-signal skip line | When JD has no seniority signal, prints `skip   seniority-match   JD seniority signal not found; check skipped.` | FR-2, FR-3 |
| `--json` `seniorityFilteredCount` field | Extends `SearchResult` so agents see the pre-filter tally alongside `filteredCount` | FR-6 |
| `--json` `seniority-match` check entry in `RankedJob.ats` | Machine-readable check result with id, status, score, message, hints for agent consumption | FR-1, FR-8 |
| `resuml ats explain seniority-match` rubric output | Returns the FR-8 rubric entry (id, tier, weight, description, evidenceLevel, source) | FR-8, FR-12 |
| `src/ats/seniority.ts` module | Shared seniority scale, band-label mapping, JD extraction, CV extraction; imported by both `match.ts` and `query.ts` | FR-3, FR-4, FR-9 |

---

## States

### `seniority-match` check states

**Pass (exact match, gap 0)**
The CV level and JD level are identical.
```
pass   seniority-match   CV senior, JD senior (gap 0): exact match.
```
Score 100. No hints emitted.

**Pass (stretch down 1, gap 1)**
CV is one level above JD. Normal and valid hire (Staff to Senior).
```
pass   seniority-match   CV staff, JD senior (gap 1): within tolerance.
```
Score 90. No hints emitted.

**Pass (stretch up 1, gap 1)**
CV is one level below JD. Candidate reaching up one level.
```
pass   seniority-match   CV senior, JD staff (gap 1): within tolerance.
```
Score 90. No hints emitted.

**Warn (gap 2)**
Two-level gap in either direction. Appears in search queue but with reduced score.
```
warn   seniority-match   CV staff, JD mid (gap 2): overqualified by 2 levels.
```
or
```
warn   seniority-match   CV junior, JD senior (gap 2): 2 levels above current.
```
Score 70. Hint: "Consider roles at [adjacent level] for a stronger match."

**Fail (gap 3)**
Score 40. Status `warn` per spec (FR-2 table: gap 3 = 40/warn). Reaches scoring.
Note: gap >= 3 triggers the pre-filter in `jobs search`, so this state is only
visible in `jobs score` (diagnosis mode), never in `jobs search` results.
```
warn   seniority-match   CV principal, JD junior (gap 3): 3 levels apart.
```
Score 40. Hint: "This posting targets a significantly different seniority level."

**Fail (gap 4+)**
Score 10, status `fail`. Only reachable in `jobs score` (pre-filtered in search).
```
fail   seniority-match   CV principal, JD intern (gap 4): 4 levels apart.
```
Score 10. Hint: "This posting is not a seniority match for your level."

**Skipped (no JD signal)**
JD title and body have no seniority indicator (common in many Greenhouse/Lever postings).
Check is excluded from tier score. No pre-filter applied.
```
skip   seniority-match   JD seniority signal not found; check skipped.
```
Score 0, excluded from tier weighted average.

**Skipped (IC/management track mismatch)**
JD is a management role and CV is IC, or vice versa. Both directions skipped (locked decision).
```
skip   seniority-match   IC/management track mismatch; comparison skipped.
```
Score 0, excluded from tier weighted average.

**Skipped (no JD provided)**
`seniorityMatch` called without a job description (e.g. `resuml validate --ats` without `--jd`).
```
skip   seniority-match   No JD.
```
Score 0, excluded from tier weighted average.

### `jobs search` summary header states

**Normal (some seniority-filtered)**
```
=== Top 4 matches (of 70 fetched, 22 below threshold, 18 off-specialty, 6 wrong location, 9 wrong seniority) ===
```

**No seniority filtering occurred (gap always < 3 or no-signal postings)**
The `wrong seniority` clause is omitted entirely when `seniorityFilteredCount` is 0,
keeping the line lean. This matches how `wrong location` is omitted when 0 wrong-location
postings exist.

**All postings pre-filtered (extreme mismatch scenario)**
```
=== Top 0 matches (of 70 fetched, 0 below threshold, 0 off-specialty, 0 wrong location, 70 wrong seniority) ===
No jobs cleared the minimum score. Try --min-score 70 to see more matches.
```
This edge case is unlikely in practice but handled cleanly.

---

## Interaction & accessibility notes

- **Color is never the only signal.** `pass`, `warn`, `fail`, `skip` are printed as literal
  words in every check row. The text badge `[A]`/`[B]`/`[C]` pattern from the existing tier
  display already satisfies this for tier grades. For the `seniority-match` row, the status
  word in column 1 is load-bearing even with `NO_COLOR`.

- **Status word printed literally.** The four statuses are `pass`, `warn`, `fail`, `skip`
  (all lowercase, matching the existing check row rendering). No abbreviations, no glyphs alone.

- **The `wrong seniority` count in the summary header.** Plain text, no special character
  encoding, greppable. Extends the established `, N wrong location` pattern; same punctuation,
  same position in the comma list.

- **`--json` for machines.** Under `--json` the human-readable blocks (query block, provider
  block, summary header, ranked queue) are suppressed. Only the `SearchResult` JSON emits to
  stdout. `seniorityFilteredCount` is a top-level integer field on `SearchResult`, so agents
  can observe the pre-filter tally without parsing prose.

- **No em-dashes.** All messages, hints, and summary strings use plain hyphens or colons. No
  em-dashes in any user-facing output or source comments (constitution; FR-13).

- **Fixed-width columns.** The `seniority-match` check row follows the same left-column layout
  as all other check rows: `status` left-padded to 6 chars, `id` left-padded to 22 chars,
  then the message. Scannable and greppable in a terminal.

- **Exit codes unchanged.** `seniorityMatch` returning `fail` or `skipped` does not change
  any exit code. Exit codes are 0 for a successful run and non-zero only for real faults
  (unparseable resume, unknown flag) via `handleCommandError`.

---

## Visual direction

Layout, hierarchy, and tone described in words and ASCII wireframes. No production code.

### Mockup 1: `jobs score` — Staff CV vs Senior JD (gap 1, pass)

```
$ resuml jobs score -r resume.yaml --posting stripe-senior-eng.yaml

=== Senior Software Engineer — Stripe ===
  https://boards.greenhouse.io/stripe/jobs/456
  Total: 86/100  good

  parsing    92 [A]
  match      84 [B]
    pass   role-family-match    Role family aligned (engineering).
    pass   seniority-match      CV staff, JD senior (gap 1): within tolerance.
    pass   hard-skill-overlap   17/21 hard skills matched (81%).
    warn   title-alignment      Title overlap 55% (resume "Staff Engineer" vs JD "Senior Software Engineer").
    pass   yoe-match            12 YOE detected vs 5 required.
    skip   education-level      JD does not specify education level.
  recruiter  82 [B]

  No knockouts.
```

Notes on hierarchy: `seniority-match` sits directly below `role-family-match` because both
are structural fit checks (who you are vs the role), before `hard-skill-overlap` (what you
know). The `warn` on `title-alignment` is expected: "Staff" vs "Senior" differs, but the
`seniority-match` `pass` makes clear the level gap is acceptable. The user sees these two
checks as complementary, not contradictory.

### Mockup 2: `jobs score` — Staff CV vs Junior JD (gap 3 pre-filtered; score shown in diagnosis mode)

This posting would never appear in `jobs search` results (pre-filtered, gap 3). But if the
user runs `jobs score` directly, they get the full diagnostic:

```
$ resuml jobs score -r resume.yaml --posting acme-junior-eng.yaml

=== Junior Software Engineer — Acme ===
  https://boards.greenhouse.io/acme/jobs/789
  Total: 61/100  poor

  parsing    92 [A]
  match      44 [D]
    pass   role-family-match    Role family aligned (engineering).
    warn   seniority-match      CV staff, JD junior (gap 3): 3 levels apart.
    pass   hard-skill-overlap   16/20 hard skills matched (80%).
    warn   title-alignment      Title overlap 22% (resume "Staff Engineer" vs JD "Junior Software Engineer").
    skip   yoe-match            JD does not specify years requirement.
    skip   education-level      JD does not specify education level.
  recruiter  85 [A]

  No knockouts.
```

Note: score 61 is below the default `minScore` 85, so this posting would not appear in
`jobs search` output even without the pre-filter (the pre-filter is a performance optimization
that saves scoring budget; the threshold would handle it anyway). In `jobs score` no minimum
is applied; the full breakdown is always shown.

The pre-filter exclusion message, shown in `jobs search` summary, would read:
```
=== Top 5 matches (of 48 fetched, 12 below threshold, 3 off-specialty, 1 wrong location, 4 wrong seniority) ===
```
The 4 `wrong seniority` postings (including this junior one) never reached `analyzeAts`.

### Mockup 3: `jobs score` — IC CV vs Engineering Manager JD (skipped)

```
$ resuml jobs score -r resume.yaml --posting stripe-eng-manager.yaml

=== Engineering Manager, Platform — Stripe ===
  https://boards.greenhouse.io/stripe/jobs/999
  Total: 74/100  good

  parsing    92 [A]
  match      62 [C]
    pass   role-family-match    Role family aligned (engineering).
    skip   seniority-match      IC/management track mismatch; comparison skipped.
    warn   hard-skill-overlap   12/22 hard skills matched (55%).
    warn   title-alignment      Title overlap 20% (resume "Staff Engineer" vs JD "Engineering Manager, Platform").
    pass   yoe-match            12 YOE detected vs 7 required.
    skip   education-level      JD does not specify education level.
  recruiter  82 [B]

  No knockouts.
```

The `skip` on `seniority-match` means the check contributes 0 to the tier score and is
excluded from the weighted average. The IC candidate is not penalized for not being a manager;
the total score reflects only the checks that ran. `title-alignment` still `warn`s because
"Staff Engineer" vs "Engineering Manager" is a genuine title mismatch regardless of track.

### Mockup 4: `jobs search` summary line with seniority pre-filter count

Extending the existing `(N off-specialty, M wrong location)` pattern from
`jobs-feature-completion`:

```
=== Top 4 matches (of 70 fetched, 22 below threshold, 18 off-specialty, 6 wrong location, 9 wrong seniority) ===
```

When seniority filtering did not drop any postings (`seniorityFilteredCount` = 0), the
clause is omitted:
```
=== Top 4 matches (of 70 fetched, 22 below threshold, 18 off-specialty, 6 wrong location) ===
```

Clause order: `off-specialty` before `wrong location` before `wrong seniority`. This matches
the rough precedence in the filter pipeline: specialty and family are checked first
(scoring-time), location next (`applyQueryFilters`), seniority pre-filter last (also
`applyQueryFilters`, added by this feature). Order is also roughly from "most rejections"
to "fewest" in the typical case, keeping the most informative count first.

### Mockup 5: `src/ats/seniority.ts` module contract

This is not runnable production code. It is the TypeScript interface comment block that
specifies the shape the shared module must export, so engineering knows what to build.
Both `src/jobs/query.ts` (for `deriveSearchQuery`) and `src/ats/checks/match.ts` (for
`seniorityMatch`) import from this module (FR-9, locked decision).

```
/**
 * Shared seniority utilities. Single source of truth for:
 *   - The six-level scale (intern..principal)
 *   - Band-label-to-level mapping (L5=senior, E4=mid, IC6=staff, M2=manager, etc.)
 *   - JD seniority extraction (FR-3 three-signal priority order)
 *   - CV seniority derivation (FR-4 max of title + YOE)
 *   - Level-gap scoring table (FR-2)
 *   - Management-role detection (FR-5)
 *
 * Imported by: src/jobs/query.ts, src/ats/checks/match.ts
 * Do NOT import from src/jobs/query.ts in this file (would create a cycle).
 */

/** The six canonical IC seniority levels, ordered low to high. */
export type SeniorityLevel = 'intern' | 'junior' | 'mid' | 'senior' | 'staff' | 'principal';

/** Ordered scale used for gap arithmetic. Index = numeric rank. */
export const SENIORITY_ORDER: SeniorityLevel[];

/**
 * Map a company band label to a SeniorityLevel.
 * Covers L3-L7 (Google), E3-E7 (Meta), IC3-IC6 (Stripe-style), M1-M4 (management).
 * Returns null when the label is not recognized (fall through to next signal).
 */
export function bandLabelToLevel(label: string): SeniorityLevel | null;

/**
 * Extract the seniority level from a JD, using the three-signal priority order
 * defined in FR-3:
 *   1. Seniority modifier in the JD title
 *   2. Level strings and band labels in the JD body
 *   3. Numeric YOE range in the body (YOE_RE pattern)
 * Returns null when none of the three signals produce a level (no-signal case).
 * The jobTitle param is optional; pass the posting title separately when available.
 */
export function extractJdSeniority(
  jobDescription: string,
  jobTitle?: string
): SeniorityLevel | null;

/**
 * Derive the CV seniority level by taking the max of:
 *   - detectSeniorityFromTitle applied to each work[*].position and basics.label
 *   - seniorityFromYoe applied to computeYearsExperience(resume.work)
 * Reuses the same logic as deriveSearchQuery (FR-4).
 */
export function extractCvSeniority(resume: ResumeSchema): SeniorityLevel;

/**
 * Return the integer gap between two levels (absolute value).
 * Example: gapBetween('staff', 'junior') === 3
 */
export function gapBetween(a: SeniorityLevel, b: SeniorityLevel): number;

/**
 * Map a gap integer to the FR-2 scoring table.
 * gap 0 -> { score: 100, status: 'pass' }
 * gap 1 -> { score: 90,  status: 'pass' }
 * gap 2 -> { score: 70,  status: 'warn' }
 * gap 3 -> { score: 40,  status: 'warn' }
 * gap 4+ -> { score: 10,  status: 'fail' }
 */
export function scoreFromGap(gap: number): { score: number; status: 'pass' | 'warn' | 'fail' };

/**
 * Detect whether a posting title / opening lines indicate a management role
 * (Engineering Manager, Director, VP, Head of Engineering, Chief).
 * Used by FR-5 to decide whether to skip the IC/management comparison.
 * Checks the JD title and the first 3 lines of the body.
 */
export function isManagementRole(jobTitle: string, jobDescriptionBody: string): boolean;

/**
 * Detect whether a resume is on the IC track.
 * Returns true when none of resume.work[*].position contains a management-role
 * title (Engineering Manager, EM, Director, VP, Head of, Chief).
 * Used by FR-5 together with isManagementRole.
 */
export function isIcResume(resume: ResumeSchema): boolean;
```

---

## Open design questions

None. All decisions are locked in the spec's "Locked decisions" section. No remaining
blockers for the engineering phase.

Summary of locked decisions that directly affect this design:
- Gap-2 = `warn` at score 70, not filtered.
- IC/management skip applies in both directions.
- No-signal JDs are skipped, never pre-filtered.
- `yoeMatch` weight unchanged; both checks stay `high`.
- Shared module at `src/ats/seniority.ts`.
- Band coverage: L3-L7, E3-E7, IC3-IC6, M1-M4 for v1.
- `ROLE_MISMATCH_CAP` is not triggered by `seniorityMatch` (FR-10).
