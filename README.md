<h1 align="center">✨ resuml</h1>
<p align="center"><strong>Resume as code. YAML in, beautiful resume out.</strong></p>

<p align="center">
  <a href="https://www.npmjs.com/package/resuml"><img src="https://img.shields.io/npm/v/resuml.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/resuml"><img src="https://img.shields.io/npm/dm/resuml.svg" alt="npm downloads"></a>
  <a href="https://github.com/phoinixi/resuml/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/resuml.svg" alt="license"></a>
  <a href="https://github.com/phoinixi/resuml"><img src="https://img.shields.io/github/stars/phoinixi/resuml.svg?style=social" alt="GitHub stars"></a>
</p>

<p align="center">
  <a href="https://resuml.app"><strong>👉 Try it in your browser at resuml.app</strong></a>
</p>

---

## Two ways to use it

### 🌐 [resuml.app](https://resuml.app) — the web app

Free, open source, no signup. Your resume data stays in your browser — we don't store or track anything. Write in YAML or use the form editor, pick from 300+ themes, check your ATS match against a job description, and export to PDF.

### 🤖 With Claude Code / AI agents (MCP)

resuml ships with a built-in [MCP server](https://modelcontextprotocol.io/) so Claude Code can read your resume, tailor it to a job description, check the ATS score, and render it — all from a chat.

**One-command setup (recommended):**

```bash
claude mcp add resuml -- npx resuml mcp
```

That registers resuml for the current project. Add `--scope user` to make it available across all projects:

```bash
claude mcp add --scope user resuml -- npx resuml mcp
```

Verify it's wired up:

```bash
claude mcp list
```

**Or, for teams sharing the config via git**, create `.mcp.json` at the repo root:

```json
{
  "mcpServers": {
    "resuml": {
      "command": "npx",
      "args": ["resuml", "mcp"]
    }
  }
}
```

Then ask Claude Code things like:

> "Tailor my resume at `resume.yaml` to this job description, hit ATS score ≥ 80, and render it with the stackoverflow theme."

Claude will generate the YAML, validate it, iterate until the score clears, and render the final HTML. See **[DOCS.md](DOCS.md#ai-agent-integration-mcp)** for all tools, resources, and prompts.

---

## Or use the CLI

```bash
npm install -g resuml

resuml validate --resume resume.yaml --ats --jd job.txt
resuml render   --resume resume.yaml --theme stackoverflow --output resume.html
resuml pdf      --resume resume.yaml --theme stackoverflow --output resume.pdf
```

**Minimal `resume.yaml`:**

```yaml
basics:
  name: Jane Smith
  label: Senior Software Engineer
  email: jane@example.com
  summary: >-
    Engineer with 8+ years building scalable distributed systems.
work:
  - name: Acme Corp
    position: Lead Engineer
    startDate: 2020-01-15
    highlights:
      - Reduced deploy time by 60%
      - Led team of 12 engineers
```

Full CLI reference, Node.js API, ATS rubric, CI/CD setup, and every MCP tool live in **[DOCS.md](DOCS.md)**.

---

## Requirements

- Node.js ≥ 20, npm ≥ 10
- Nothing else — validation, ATS, rendering, and PDF all run locally

## Contributing

PRs welcome. See [DOCS.md](DOCS.md) for architecture and dev setup.

## License

ISC. Support the project: <a href="https://www.buymeacoffee.com/leekbeds55j">☕ Buy me a coffee</a>.
