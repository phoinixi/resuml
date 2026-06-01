# Project Constitution

> Durable, project-wide principles. **Every agent reads this first**, every phase.
> Fill this in once per project via `/init-framework`. Keep it short and stable —
> if it changes often, it belongs in a spec, not here.

## Product principles
- resuml serves two co-equal users: **job seekers** (via CLI) and **AI agents**
  (via the MCP server). Neither is primary; every feature is reachable from both.
- The single most important outcome: turn a resume + a job context into an
  honest, ATS-passing, well-matched result — validate, score against a JD,
  discover and rank real postings by fit, render, export.
- **Job results must be coherent with the CV.** A senior frontend CV must not
  surface senior backend roles as strong matches. Occupation and specialty fit
  outrank keyword overlap and resume polish.
- We will NOT build: paid or auth-gated job sources (no LinkedIn/Indeed scraping,
  no keyed aggregator APIs); any PII storage, server-side state, or telemetry;
  bundled LLM API calls (resuml stays deterministic — the agent does the writing);
  a web UI (that lives in the separate `phoinixi/resuml-app` repo).

## Quality bar
- New behavior ships with vitest tests; the existing suite stays green.
- ATS scoring rules and rubric entries trace to a stated source / evidence level,
  matching the existing per-check source URLs.
- Job matches stay coherent with the CV's role family and specialty (frontend vs
  backend vs data, etc.) — verify ranking on a real CV, not just unit fixtures.
- No comments unless the *why* is non-obvious. No premature abstractions, no
  speculative error handling, no backward-compat shims.
- No em-dashes anywhere — code, docs, or user-facing copy.

## Technical constraints
- Fixed stack: TypeScript, Node CLI (commander), vitest, tsup build, MCP server
  (`@modelcontextprotocol/sdk`), JSON Resume schema, theme rendering + PDF export.
- Job sources are free and keyless only (greenhouse, lever, ashby, workable,
  remoteok, wwr, remotive, hn-whoishiring).
- This repo is CLI / MCP / library only. Library API is exposed via the package
  `exports` map; keep new public surface there.
- Off the table: new infra, databases, network calls to paid/authed services,
  storing user resumes anywhere outside the local filesystem.

## Working agreement
- One persona owns each phase; agents hand off via `.framework/` artifacts.
- No phase proceeds without explicit human "approved".
- Agents write only their own artifact and never edit another phase's file.
- Decisions trace back to numbered requirements (FR-#) wherever possible.
