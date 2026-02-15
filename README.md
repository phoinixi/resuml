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
  themeRender
} from 'resuml';

// Load YAML files
const { yamlContents } = await loadResumeFiles('resume.yaml');
// Validate and merge
const resume = await processResumeData(yamlContents);
// Load a theme
const theme = await loadTheme('stackoverflow');
// Render HTML
const html = await theme.render(resume, { locale: 'en' });
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
