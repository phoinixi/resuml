<h1 align="center">✨ Resuml</h1>
<p align="center"><strong>Write your resume in YAML. Render it beautifully.</strong></p>

<p align="center">
  <a href="https://www.npmjs.com/package/resuml"><img src="https://img.shields.io/npm/v/resuml.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/resuml"><img src="https://img.shields.io/npm/dm/resuml.svg" alt="npm downloads"></a>
  <a href="https://github.com/phoinixi/resuml/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/resuml.svg" alt="license"></a>
  <a href="https://github.com/phoinixi/resuml"><img src="https://img.shields.io/github/stars/phoinixi/resuml.svg?style=social" alt="GitHub stars"></a>
</p>

<p align="center">
   <a href="https://www.buymeacoffee.com/leekbeds55j">
      <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="150" />
   </a>
</p>

---

### YAML in → Beautiful resume out

```yaml
# resume.yaml
basics:
  name: Jane Smith
  label: Senior Software Engineer
  email: jane@example.com
  summary: >-
    Passionate engineer with 8+ years
    building scalable distributed systems.
work:
  - name: Acme Corp
    position: Lead Engineer
    startDate: 2020-01-15
    highlights:
      - Reduced deploy time by 60%
      - Led team of 12 engineers
```

```bash
resuml render --resume resume.yaml --theme stackoverflow --output resume.html
```

Your YAML becomes a polished, professional resume — ready to share, print, or export to PDF.

---

## Why YAML?

| | YAML | JSON |
|---|---|---|
| **Comments** | ✅ `# explain your choices` | ❌ Not supported |
| **Multi-line strings** | ✅ `summary: >-` block syntax | ❌ Escape everything |
| **Readability** | ✅ Clean, minimal syntax | ⚠️ Brackets & quotes everywhere |
| **Diffing** | ✅ Clean git diffs | ⚠️ Noisy diffs |
| **Compatibility** | ✅ Valid JSON Resume schema | ✅ Native |

YAML is a superset of JSON — your resume stays fully compatible with the [JSON Resume](https://jsonresume.org/) ecosystem while being far more pleasant to write and maintain.

## Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0

## Installation

```bash
npm install -g resuml
```

## Quick Start

1. Create a YAML file for your resume (e.g., `resume.yaml`)
2. Validate your resume data:
   ```bash
   resuml validate --resume resume.yaml
   ```
3. Convert to JSON:
   ```bash
   resuml tojson --resume resume.yaml --output resume.json
   ```
4. Render with a theme:
   ```bash
   resuml render --resume resume.yaml --theme stackoverflow --output resume.html
   ```

## Commands

| Command | Description |
|---------|-------------|
| `validate` | Validate resume data against the JSON Resume schema |
| `validate --ats` | Run ATS (Applicant Tracking System) compatibility analysis |
| `tojson` | Convert YAML resume data to JSON format |
| `render` | Render the resume using a specified theme |
| `dev` | Start a development server with hot-reload |

## Options

| Option | Alias | Description |
|--------|-------|-------------|
| `--resume` | `-r` | Input YAML file(s) or directory |
| `--output` | `-o` | Output file path |
| `--theme` | `-t` | Theme to use for rendering |
| `--port` | `-p` | Port for dev server (default: 3000) |
| `--language` | | Language code for localization (default: `en`) |
| `--debug` | | Enable debug mode for detailed errors |
| `--ats` | | Run ATS compatibility analysis (with `validate`) |
| `--jd` | | Path to job description file for keyword matching (with `--ats`) |
| `--ats-threshold` | | Minimum ATS score (0-100); exits with code 1 if below |

## ATS Analysis

Resumls built-in ATS (Applicant Tracking System) analysis helps ensure your resume passes automated screening. Fully offline and deterministic — no API keys or LLMs required.

### Quick Start

```bash
# Basic ATS score
resuml validate --resume resume.yaml --ats

# Match against a specific job description
resuml validate --resume resume.yaml --ats --jd job-description.txt

# CI/CD gate: fail if score is below threshold
resuml validate --resume resume.yaml --ats --ats-threshold 75

# Machine-readable JSON output
resuml validate --resume resume.yaml --ats --format json
```

### What It Checks

The ATS engine runs 11 deterministic checks across 3 categories:

**Contact Information**
- Complete contact details (name, email, phone, city)
- LinkedIn profile present

**Content Quality**
- Professional summary (length and presence)
- Work highlights (minimum 2 per entry)
- Action verbs (highlights start with strong verbs)
- Quantified impact (numbers, percentages, metrics in highlights)
- No first-person pronouns

**Resume Structure**
- Date consistency (no unexplained gaps > 6 months)
- Skills populated (≥ 3 categories with keywords)
- Education completeness
- Essential sections present (basics, work, education, skills)

### Job Description Matching

Provide a job description file to get keyword matching:

```bash
resuml validate --resume resume.yaml --ats --jd job.txt
```

The engine extracts keywords from the job description using TF-based ranking with stem matching, then compares them against your resume. You get:
- **Match percentage** — how many JD keywords appear in your resume
- **Matched keywords** — what you already cover
- **Missing keywords** — what to consider adding

### Scoring

| Score | Rating | Meaning |
|-------|--------|-------------|
| 90-100 | Excellent | Resume is well-optimized for ATS |
| 75-89 | Good | Minor improvements possible |
| 60-74 | Needs Work | Several issues to address |
| 0-59 | Poor | Significant improvements needed |

When a job description is provided, the final score is 60% generic checks + 40% keyword match.

### Multi-Language Support

ATS checks support English and German, with language-specific action verb lists and pronoun detection. Use the `--language` flag:

```bash
resuml validate --resume lebenslauf.yaml --ats --language de
```

## Compatible Themes

Resuml supports themes from the JSON Resume ecosystem. Install a theme, then pass its name to `--theme`:

```bash
npm install jsonresume-theme-stackoverflow
resuml render --resume resume.yaml --theme stackoverflow
```

| Theme | Install | Style |
|-------|---------|-------|
| [stackoverflow](https://github.com/francoislaberge/jsonresume-theme-stackoverflow) | `npm i jsonresume-theme-stackoverflow` | Clean, professional |
| [elegant](https://github.com/mudassir0909/jsonresume-theme-elegant) | `npm i jsonresume-theme-elegant` | Modern, elegant |
| [kendall](https://github.com/LinuxBozo/jsonresume-theme-kendall) | `npm i jsonresume-theme-kendall` | Minimal, classic |
| [flat](https://github.com/erming/jsonresume-theme-flat) | `npm i jsonresume-theme-flat` | Flat design |
| [onepage](https://github.com/aonemd/jsonresume-theme-onepage) | `npm i jsonresume-theme-onepage` | Single page |

> Browse all themes at [jsonresume.org/themes](https://jsonresume.org/themes/) — any `jsonresume-theme-*` package works with resuml.

## Examples

For detailed examples and usage instructions, see the [examples/README.md](examples/README.md) file.

## Example YAML Structure

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
  - company: Tech Corp
    position: Senior Engineer
    startDate: 2020-01
    endDate: Present
    summary: Led development of...
```

## CI/CD: Auto-build on Push

Use GitHub Actions to automatically rebuild your resume when you push changes:

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

      # Validate and check ATS score (fails if below 75)
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

## Node.js API Usage

You can use resuml programmatically from Node.js:

```js
import {
  processResumeData,
  loadResumeFiles,
  loadTheme,
  themeRender,
  analyzeAts
} from 'resuml';

// Load YAML files
const { yamlContents } = await loadResumeFiles('resume.yaml');
// Validate and merge
const resume = await processResumeData(yamlContents);
// Load a theme
const theme = await loadTheme('stackoverflow');
// Render HTML
const html = await theme.render(resume, { locale: 'en' });

// ATS analysis
const atsResult = analyzeAts(resume, { language: 'en' });
console.log(`ATS Score: ${atsResult.score}/100`);

// With job description matching
const jdResult = analyzeAts(resume, {
  language: 'en',
  jobDescription: 'Looking for a senior TypeScript developer...'
});
console.log(`Matched keywords: ${jdResult.keywords?.matched.join(', ')}`);
```

See the CLI and API for more details.

## Troubleshooting

### Common Issues

1. **Validation Errors**
   - Ensure your YAML follows the JSON Resume schema
   - Check for proper indentation in your YAML file
   - Verify all required fields are present

2. **Theme Rendering Issues**
   - Make sure the theme is properly installed
   - Check if all required theme dependencies are installed
   - Try running with `--debug` flag for more information

3. **Development Server Issues**
   - Ensure the specified port is available
   - Check if you have proper permissions to access the port
   - Try a different port if the default is blocked

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC
