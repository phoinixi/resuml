# resuml — Detailed documentation

> For the short intro, see [README.md](README.md). For the web app, go to [resuml.app](https://resuml.app).

## Table of contents

- [Why YAML](#why-yaml)
- [Installation](#installation)
- [CLI commands and options](#cli-commands-and-options)
- [ATS analysis](#ats-analysis)
- [Themes](#themes)
- [Example YAML structure](#example-yaml-structure)
- [CI/CD integration](#cicd-auto-build-on-push)
- [Node.js API](#nodejs-api)
- [AI agent integration (MCP)](#ai-agent-integration-mcp)
- [Troubleshooting](#troubleshooting)

---

## Why YAML

| | YAML | JSON |
|---|---|---|
| **Comments** | ✅ `# explain your choices` | ❌ Not supported |
| **Multi-line strings** | ✅ `summary: >-` block syntax | ❌ Escape everything |
| **Readability** | ✅ Clean, minimal syntax | ⚠️ Brackets & quotes everywhere |
| **Diffing** | ✅ Clean git diffs | ⚠️ Noisy diffs |
| **Compatibility** | ✅ Valid JSON Resume schema | ✅ Native |

YAML is a superset of JSON, so your resume stays fully compatible with the [JSON Resume](https://jsonresume.org/) ecosystem.

## Installation

```bash
npm install -g resuml
```

Requires Node.js ≥ 20 and npm ≥ 10.

## CLI commands and options

| Command | Description |
|---------|-------------|
| `validate` | Validate resume data against the JSON Resume schema |
| `validate --ats` | Run ATS compatibility analysis |
| `tojson` | Convert YAML to JSON |
| `render` | Render the resume to HTML using a theme |
| `pdf` | Render to PDF |
| `dev` | Dev server with hot-reload |
| `mcp` | Start the MCP server for AI agents |

### Options

| Option | Alias | Description |
|--------|-------|-------------|
| `--resume` | `-r` | Input YAML file(s) or directory |
| `--output` | `-o` | Output file path |
| `--theme` | `-t` | Theme name |
| `--port` | `-p` | Dev server port (default: 3000) |
| `--language` | | Locale (default: `en`) |
| `--debug` | | Detailed errors |
| `--ats` | | Run ATS analysis (with `validate`) |
| `--jd` | | Path to job description file (with `--ats`) |
| `--ats-threshold` | | Minimum score (0-100); exits 1 if below |
| `--format` | | Output format for validate: `text` or `json` |

### Quick start

```bash
resuml validate --resume resume.yaml
resuml tojson   --resume resume.yaml --output resume.json
resuml render   --resume resume.yaml --theme stackoverflow --output resume.html
```

## ATS analysis

Deterministic, offline ATS (Applicant Tracking System) checks. No API keys, no LLMs.

```bash
# Basic ATS score
resuml validate --resume resume.yaml --ats

# Match against a job description
resuml validate --resume resume.yaml --ats --jd job-description.txt

# CI gate: fail if below threshold
resuml validate --resume resume.yaml --ats --ats-threshold 75

# Machine-readable output
resuml validate --resume resume.yaml --ats --format json
```

### What it checks

11 deterministic checks across 3 categories.

**Contact information**
- Complete contact details (name, email, phone, city)
- LinkedIn profile present

**Content quality**
- Professional summary (length and presence)
- Work highlights (≥ 2 per entry)
- Action verbs (highlights start with strong verbs)
- Quantified impact (numbers / percentages / metrics)
- No first-person pronouns

**Resume structure**
- Date consistency (no unexplained gaps > 6 months)
- Skills populated (≥ 3 categories with keywords)
- Education completeness
- Essential sections present

### Job description matching

Passing `--jd` extracts keywords from the job description using TF-based ranking with stem matching, then compares to your resume. You get:

- **Match percentage** — how many JD keywords appear in your resume
- **Matched keywords** — what you already cover
- **Missing keywords** — what to consider adding
- **Extra keywords** — skills in your resume the JD didn't mention

### Scoring

| Score | Rating | Meaning |
|-------|--------|---------|
| 90-100 | Excellent | Well-optimized for ATS |
| 75-89 | Good | Minor improvements possible |
| 60-74 | Needs Work | Several issues to address |
| 0-59 | Poor | Significant improvements needed |

With a JD: final score = 60% generic checks + 40% keyword match.

### Multi-language

Supports English and German (language-specific action verbs and pronouns). Use `--language`:

```bash
resuml validate --resume lebenslauf.yaml --ats --language de
```

## Themes

resuml supports any `jsonresume-theme-*` package from npm. Install a theme, then pass its name to `--theme`:

```bash
npm install jsonresume-theme-stackoverflow
resuml render --resume resume.yaml --theme stackoverflow
```

| Theme | Install | Style |
|-------|---------|-------|
| [stackoverflow](https://github.com/francoislaberge/jsonresume-theme-stackoverflow) | `npm i jsonresume-theme-stackoverflow` | Clean, professional |
| [elegant](https://github.com/mudassir0909/jsonresume-theme-elegant) | `npm i jsonresume-theme-elegant` | Modern |
| [kendall](https://github.com/LinuxBozo/jsonresume-theme-kendall) | `npm i jsonresume-theme-kendall` | Minimal |
| [flat](https://github.com/erming/jsonresume-theme-flat) | `npm i jsonresume-theme-flat` | Flat |
| [onepage](https://github.com/aonemd/jsonresume-theme-onepage) | `npm i jsonresume-theme-onepage` | Single-page |

Browse all at [jsonresume.org/themes](https://jsonresume.org/themes/). The web app at [resuml.app](https://resuml.app) bundles 300+ of them and renders live.

## Example YAML structure

```yaml
basics:
  name: John Doe
  label: Software Engineer
  email: john@example.com
  summary: Experienced software engineer...
  location:
    city: San Francisco
    countryCode: US
  profiles:
    - network: GitHub
      url: https://github.com/johndoe

work:
  - name: Tech Corp
    position: Senior Engineer
    startDate: 2020-01-15
    endDate: 2023-12-31
    summary: Led development of...
    highlights:
      - Reduced latency by 40%
      - Led team of 8 engineers

education:
  - institution: University
    area: Computer Science
    studyType: Bachelor
    startDate: 2014-09-01
    endDate: 2018-06-01

skills:
  - name: Languages
    level: Expert
    keywords: [TypeScript, Python, Go]
```

See [examples/](examples/) for more.

## CI/CD: Auto-build on push

```yaml
# .github/workflows/resume.yml
name: Build Resume

on:
  push:
    paths: ['resume.yaml', 'resume/*.yaml']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install -g resuml
      - run: npm install jsonresume-theme-stackoverflow

      # Fail the job if ATS score < 75
      - run: resuml validate --resume resume.yaml --ats --ats-threshold 75

      - run: resuml render --resume resume.yaml --theme stackoverflow --output resume.html
      - run: resuml tojson --resume resume.yaml --output resume.json

      - uses: actions/upload-artifact@v4
        with:
          name: resume
          path: |
            resume.html
            resume.json
```

## Node.js API

```js
import {
  processResumeData,
  loadResumeFiles,
  loadTheme,
  analyzeAts
} from 'resuml';

const { yamlContents } = await loadResumeFiles('resume.yaml');
const resume = await processResumeData(yamlContents);

const theme = await loadTheme('stackoverflow');
const html = await theme.render(resume, { locale: 'en' });

const ats = analyzeAts(resume, { language: 'en' });
console.log(`ATS score: ${ats.score}/100`);

const matched = analyzeAts(resume, {
  language: 'en',
  jobDescription: 'Looking for a senior TypeScript developer...'
});
console.log(`Matched: ${matched.keywords?.matched.join(', ')}`);
```

## AI agent integration (MCP)

resuml ships with a [Model Context Protocol](https://modelcontextprotocol.io/) server so Claude Code, Claude Desktop, Cursor, Copilot, or any MCP-compatible client can use it directly.

### Setup

Add to your MCP client config:

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

Or run standalone:

```bash
resuml mcp
```

### Using it from Claude Code

Once configured, Claude Code can call every resuml capability through natural language. For example:

> "I saved the job ad as `jd.txt`. Tailor my resume at `resume.yaml` to match it, iterate until the ATS score is ≥ 80, render with the stackoverflow theme, and export a PDF."

Claude Code will:

1. Validate the current YAML.
2. Run the ATS check with the JD.
3. Edit the YAML to close keyword gaps.
4. Re-check until the target score is met.
5. Render the HTML and export the PDF.

### Tools

| Tool | Purpose |
|------|---------|
| `resuml_init_resume` | Generate a starter YAML template |
| `resuml_validate` | Validate resume YAML against the JSON Resume schema |
| `resuml_ats_check` | ATS analysis + JD keyword matching |
| `resuml_render` | Render to HTML using a theme (supports `locale`) |
| `resuml_list_themes` | List available themes and install status |
| `resuml_export_pdf` | Export as PDF (supports `margin`, `locale`) |

### Resources

| URI | Description |
|-----|-------------|
| `resuml://schema/json-resume` | Full JSON Resume schema reference |
| `resuml://docs/ats-scoring` | ATS scoring rubric, checks, weights, and tips |
| `resuml://themes/catalog` | Available themes with descriptions |

### Prompts

| Prompt | Description |
|--------|-------------|
| `tailor-resume-to-jd` | Tailor a resume for a specific job description |
| `optimize-ats-score` | Analyze and improve an existing resume's ATS score |
| `review-resume` | Comprehensive review + improvement suggestions |

## Troubleshooting

**Validation errors**
- Check YAML indentation and required fields
- Run with `--debug` for stack traces

**Theme rendering issues**
- Ensure the theme is installed (`npm install jsonresume-theme-<name>`)
- Third-party themes may have their own bugs — try a different theme
- The web app at [resuml.app](https://resuml.app) pre-checks themes and flags broken ones

**Dev server issues**
- The default port is 3000 — pass `--port` to override
