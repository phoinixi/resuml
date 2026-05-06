# resuml - AI Resume Generation Guide

resuml is a CLI tool for generating professional resumes from YAML files using the JSON Resume schema. It supports 300+ themes, ATS (Applicant Tracking System) analysis with job description matching, and PDF export.

## MCP Integration

resuml exposes an MCP server for AI agent integration. Add to your Claude Code config:

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

### Available Tools

| Tool                 | Purpose                                                                 |
| -------------------- | ----------------------------------------------------------------------- |
| `resuml_init_resume` | Generate a starter YAML template                                        |
| `resuml_validate`    | Validate resume YAML against JSON Resume schema                         |
| `resuml_ats_check`   | Tiered ATS analysis (Parsing / Match / Recruiter) with knockout signals |
| `resuml_ats_explain` | Return the rubric entry for a check id                                  |
| `resuml_render`      | Render resume to HTML using a theme (supports `locale` param)           |
| `resuml_list_themes` | List available themes and install status                                |
| `resuml_export_pdf`  | Export resume as PDF (supports `margin` and `locale` params)            |

### Available Resources

| Resource           | URI                           | Description                                                            |
| ------------------ | ----------------------------- | ---------------------------------------------------------------------- |
| JSON Resume Schema | `resuml://schema/json-resume` | Full schema reference with sections, field types, and formatting rules |
| Tiered ATS Rubric  | `resuml://docs/ats-rubric`    | Per-tier rubric with evidence level and source URL per check           |
| Theme Catalog      | `resuml://themes/catalog`     | Available themes with descriptions and installation status             |

### Available Prompts

| Prompt                | Description                                                         |
| --------------------- | ------------------------------------------------------------------- |
| `tailor-resume-to-jd` | Generate a tailored resume optimized for a specific job description |
| `optimize-ats-score`  | Analyze and improve an existing resume to maximize ATS score        |
| `review-resume`       | Comprehensive review with ATS analysis and improvement suggestions  |

## Workflow: Generate a Tailored Resume from a Job Description

1. **Analyze the JD**: identify required skills, technologies, experience level, and industry terms
2. **Generate YAML**: create resume YAML following the schema below, aligning keywords with the JD
3. **Validate**: use `resuml_validate` to check schema compliance
4. **ATS check**: use `resuml_ats_check` with the JD text. Result has three tiers:
   - **Parsing** (target grade A): conventional sections, ISO dates, contact in body, reverse-chron order
   - **Match** (when JD provided): hard skill overlap, title alignment, education level, years of experience
   - **Recruiter** (style): action verbs, quantification 50%+, summary 20-50 words, 3-6 bullets per role
     Total target: 75+. Knockout signals (work-auth, location, clearance) are surfaced separately and not scored. Use `resuml_ats_explain <check-id>` to read the rubric entry for any flagged check.
5. **Iterate**: if total score is low, revise YAML and re-check
6. **Render**: use `resuml_render` with a theme (recommended: `even`, `stackoverflow`, `elegant`, `paper`)
7. **Export**: use `resuml_export_pdf` for the final PDF

## Resume Writing Rules

- Start every highlight with an action verb (Developed, Implemented, Led, Optimized, Reduced, Built, Designed)
- Include numbers in 50%+ of highlights (e.g., "Reduced latency by 40%", "Managed team of 8")
- Never use "I", "my", "me", "we"
- Mirror exact terminology from the job description in skills and highlights
- Summary: 2-4 sentences positioning the candidate for the specific role
- Dates: ISO 8601 format (YYYY-MM-DD or YYYY-MM)

## JSON Resume Schema Reference

```yaml
basics:
  name: 'Full Name'
  label: 'Professional Title'
  email: 'email@example.com'
  phone: '+1-555-123-4567'
  url: 'https://website.com'
  summary: 'Professional summary...'
  location:
    city: 'City'
    countryCode: 'US'
    region: 'State'
  profiles:
    - network: 'LinkedIn'
      username: 'username'
      url: 'https://linkedin.com/in/username'

work:
  - name: 'Company Name'
    position: 'Job Title'
    url: 'https://company.com'
    startDate: '2020-01-01'
    endDate: '2023-12-31' # omit for current position
    summary: 'Role description'
    highlights:
      - 'Achievement with measurable result'

education:
  - institution: 'University'
    area: 'Field of Study'
    studyType: 'Degree Type'
    startDate: '2014-09-01'
    endDate: '2018-06-01'

skills:
  - name: 'Category'
    level: 'Expert'
    keywords: ['Skill1', 'Skill2']

projects:
  - name: 'Project Name'
    description: 'Description'
    highlights: ['Achievement']
    keywords: ['Tech1']
    startDate: '2023-01-01'
    url: 'https://github.com/...'

certificates:
  - name: 'Certificate Name'
    date: '2023-01-01'
    issuer: 'Issuer'

languages:
  - language: 'English'
    fluency: 'Native speaker'
```

## CLI Commands (alternative to MCP)

```bash
resuml validate -r resume.yaml --ats --jd job-description.txt --format json
resuml validate -r resume.yaml --ats --config resuml.config.yaml
resuml render -r resume.yaml -t even -o resume.html
resuml pdf -r resume.yaml -t even -o resume.pdf --format A4
resuml themes
resuml themes --install stackoverflow
resuml ats explain quantification-density
resuml ats config
```

## ATS Configuration (`resuml.config.yaml`)

Optional file alongside `resume.yaml`. Override tier weights, thresholds, or disable specific checks. `resuml init` writes a starter template. Run `resuml ats config` to print the merged effective config.

```yaml
ats:
  weights:
    tiers:
      parsing: 30
      match: 50
      recruiter: 20
  thresholds:
    seniorYoeCutoff: 10
  disable: [pronoun-leakage]
```
