import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { processResumeData } from '../core';
import { analyzeAts } from '../ats/index';
import { loadTheme } from '../utils/themeLoader';
import { generateResumeYaml } from '../utils/resumeTemplate';
import { KNOWN_THEMES, isThemeInstalled, getInstalledVersion } from '../utils/themeInfo';

// Redirect console.log to stderr so it doesn't corrupt the MCP stdio channel
const originalLog = console.log;
const originalWarn = console.warn;

function suppressStdout() {
  console.log = (...args: unknown[]) => { console.error('[resuml]', ...args); };
  console.warn = (...args: unknown[]) => { console.error('[resuml]', ...args); };
}

function restoreStdout() {
  console.log = originalLog;
  console.warn = originalWarn;
}

// ── Shared data ─────────────────────────────────────────────────────

const JSON_RESUME_SCHEMA_REFERENCE = `# JSON Resume Schema Reference

The JSON Resume schema defines the structure for resume data. resuml uses YAML as the input format.

## Top-level sections

| Section | Required | Description |
|---------|----------|-------------|
| basics | Yes | Name, label, email, phone, url, summary, location, profiles |
| work | Recommended | Work experience entries |
| education | Recommended | Education entries |
| skills | Recommended | Skill categories with keywords |
| projects | Optional | Project entries |
| volunteer | Optional | Volunteer experience |
| awards | Optional | Awards and honors |
| certificates | Optional | Professional certifications |
| publications | Optional | Published works |
| languages | Optional | Language proficiencies |
| interests | Optional | Personal interests |
| references | Optional | Professional references |

## Section schemas

### basics
\`\`\`yaml
basics:
  name: "Full Name"           # required
  label: "Professional Title"
  email: "email@example.com"
  phone: "+1-555-123-4567"
  url: "https://website.com"
  summary: "2-4 sentence professional summary"
  location:
    city: "City"
    countryCode: "US"
    region: "State"
  profiles:
    - network: "LinkedIn"
      username: "username"
      url: "https://linkedin.com/in/username"
\`\`\`

### work
\`\`\`yaml
work:
  - name: "Company Name"
    position: "Job Title"
    url: "https://company.com"
    startDate: "2020-01-01"    # ISO 8601
    endDate: "2023-12-31"      # omit for current position
    summary: "Role description"
    highlights:
      - "Achievement with measurable result"
\`\`\`

### education
\`\`\`yaml
education:
  - institution: "University"
    area: "Field of Study"
    studyType: "Degree Type"   # e.g. Bachelor, Master, PhD
    startDate: "2014-09-01"
    endDate: "2018-06-01"
\`\`\`

### skills
\`\`\`yaml
skills:
  - name: "Category"
    level: "Expert"            # Master, Expert, Advanced, Intermediate, Beginner
    keywords: ["Skill1", "Skill2"]
\`\`\`

### projects
\`\`\`yaml
projects:
  - name: "Project Name"
    description: "What it does"
    highlights: ["Key achievement"]
    keywords: ["Tech1", "Tech2"]
    startDate: "2023-01-01"
    url: "https://github.com/..."
\`\`\`

### certificates
\`\`\`yaml
certificates:
  - name: "Certificate Name"
    date: "2023-01-01"
    issuer: "Issuing Organization"
    url: "https://credential-url.com"
\`\`\`

### languages
\`\`\`yaml
languages:
  - language: "English"
    fluency: "Native speaker"  # Native speaker, Fluent, Advanced, Intermediate, Elementary
\`\`\`

## Formatting rules
- Dates: ISO 8601 format (YYYY-MM-DD or YYYY-MM)
- Start highlights with action verbs: Developed, Implemented, Led, Optimized, Reduced, Built, Designed
- Include numbers in 50%+ of highlights (e.g., "Reduced latency by 40%")
- Never use first person (I, my, me, we)
- Summary: 2-4 sentences positioning the candidate for the specific role
`;

const ATS_SCORING_RUBRIC = `# ATS Scoring Rubric

resuml performs deterministic, offline ATS (Applicant Tracking System) analysis.

## Scoring system

### Rating scale
| Score | Rating | Description |
|-------|--------|-------------|
| 90-100 | Excellent | Resume is well-optimized for ATS |
| 75-89 | Good | Resume passes most ATS checks |
| 60-74 | Needs Work | Several improvements recommended |
| 0-59 | Poor | Significant issues found |

### Weight system
Each check has a weight that affects the final score:
- **High weight (3x)**: Critical checks that significantly impact ATS parsing
- **Medium weight (2x)**: Important but not critical checks
- **Low weight (1x)**: Nice-to-have improvements

### Combined scoring (with job description)
When a job description is provided:
- Generic checks: 60% of final score
- Keyword match: 40% of final score

## Checks performed

### Contact Information (category: contact)
| Check | Weight | What it verifies |
|-------|--------|-----------------|
| contact-complete | High | Name, email, phone, and city are all present |
| has-linkedin | Medium | LinkedIn profile exists in profiles section |

### Content Quality (category: content)
| Check | Weight | What it verifies |
|-------|--------|-----------------|
| has-summary | High | Professional summary exists (15-100 words) |
| work-highlights | High | Each work entry has at least 2 highlights |
| action-verbs | Medium | Highlights start with action verbs |
| quantified-impact | Medium | 50%+ of highlights include numbers/metrics |
| no-first-person | Low | No first-person pronouns (I, my, me, we) |

### Resume Structure (category: structure)
| Check | Weight | What it verifies |
|-------|--------|-----------------|
| date-consistency | Medium | All dates are valid ISO 8601 format |
| skills-populated | Medium | At least 3 skill categories defined |
| education-complete | Medium | Education section has institution and area |
| essential-sections | High | Work, education, and skills sections present |

## Job description matching
When a job description is provided, resuml extracts keywords using TF-based extraction
and matches them against the resume using stem matching. Results include:
- **matched**: Keywords found in the resume
- **missing**: Keywords not found (add these to improve score)
- **matchPercentage**: Percentage of JD keywords found in resume

## Fit Assessment
When a job description is provided, a \`fitAssessment\` field is included in the result:
| Match % | Level | Meaning |
|---------|-------|---------|
| >= 70% | strong | Resume aligns well with the job description |
| 50-69% | partial | Some alignment; emphasize transferable skills |
| < 50% | weak | Significant skill gaps; role may not match profile |

The assessment includes the top 5 missing keywords as specific gaps to address.
Use this to advise users whether to apply or focus effort elsewhere.

## Tips for improving ATS score
1. Include all contact information (name, email, phone, city)
2. Add a LinkedIn profile URL
3. Write a 2-4 sentence professional summary
4. Use action verbs to start each highlight
5. Quantify achievements with numbers (%, $, time saved, team size)
6. Include at least 3 skill categories with relevant keywords
7. When targeting a job, mirror exact terminology from the job description
`;

function createServer(): McpServer {
  const server = new McpServer({
    name: 'resuml',
    version: '1.0.0',
  });

  // ═══════════════════════════════════════════════════════════════════
  // RESOURCES
  // ═══════════════════════════════════════════════════════════════════

  // ── JSON Resume Schema Reference ──────────────────────────────────

  server.registerResource(
    'json-resume-schema',
    'resuml://schema/json-resume',
    {
      description: 'JSON Resume schema reference with all sections, field types, and formatting rules',
      mimeType: 'text/markdown',
    },
    () => ({
      contents: [{
        uri: 'resuml://schema/json-resume',
        mimeType: 'text/markdown',
        text: JSON_RESUME_SCHEMA_REFERENCE,
      }],
    }),
  );

  // ── ATS Scoring Rubric ────────────────────────────────────────────

  server.registerResource(
    'ats-scoring-rubric',
    'resuml://docs/ats-scoring',
    {
      description: 'ATS scoring rubric: checks performed, weight system, rating scale, and tips for improving score',
      mimeType: 'text/markdown',
    },
    () => ({
      contents: [{
        uri: 'resuml://docs/ats-scoring',
        mimeType: 'text/markdown',
        text: ATS_SCORING_RUBRIC,
      }],
    }),
  );

  // ── Theme Catalog ─────────────────────────────────────────────────

  server.registerResource(
    'theme-catalog',
    'resuml://themes/catalog',
    {
      description: 'Available resume themes with descriptions and installation status',
      mimeType: 'application/json',
    },
    () => {
      const themes = KNOWN_THEMES.map((t) => ({
        name: t.name,
        package: t.pkg,
        description: t.description,
        installed: isThemeInstalled(t.pkg),
        version: getInstalledVersion(t.pkg),
      }));
      return {
        contents: [{
          uri: 'resuml://themes/catalog',
          mimeType: 'application/json',
          text: JSON.stringify({ themes, totalCount: themes.length }, null, 2),
        }],
      };
    },
  );

  // ═══════════════════════════════════════════════════════════════════
  // PROMPTS
  // ═══════════════════════════════════════════════════════════════════

  // ── Tailor Resume to Job Description ──────────────────────────────

  server.registerPrompt(
    'tailor-resume-to-jd',
    {
      title: 'Tailor Resume to Job Description',
      description: 'Generate a tailored resume YAML optimized for a specific job description',
      argsSchema: {
        jobDescription: z.string().describe('The full job description text'),
        candidateName: z.string().optional().describe('Candidate full name'),
        candidateEmail: z.string().optional().describe('Candidate email address'),
        candidateBackground: z.string().optional().describe('Brief summary of the candidate background, skills, and experience to incorporate'),
      },
    },
    ({ jobDescription, candidateName, candidateEmail, candidateBackground }) => ({
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `Create a tailored resume in YAML format optimized for the following job description.

## Job Description
${jobDescription}

${candidateBackground ? `## Candidate Background\n${candidateBackground}\n` : ''}
## Instructions

1. Analyze the job description to identify required skills, technologies, experience level, and industry terms
2. Generate a complete resume YAML following the JSON Resume schema (read the resuml://schema/json-resume resource for the full schema)
3. Mirror exact terminology from the job description in skills and highlights
4. Start every highlight with an action verb (Developed, Implemented, Led, Optimized, Reduced, Built, Designed)
5. Include numbers in 50%+ of highlights (e.g., "Reduced latency by 40%", "Managed team of 8")
6. Never use "I", "my", "me", "we"
7. Write a 2-4 sentence summary positioning the candidate for this specific role
8. Use ISO 8601 dates (YYYY-MM-DD or YYYY-MM)
${candidateName ? `9. Use candidate name: ${candidateName}` : ''}
${candidateEmail ? `10. Use candidate email: ${candidateEmail}` : ''}

## Workflow
After generating the YAML:
1. Use \`resuml_validate\` to check schema compliance
2. Use \`resuml_ats_check\` with the job description text. Target: score >= 75, keyword match >= 70%
3. If ATS score is low, revise the YAML and re-check
4. Use \`resuml_render\` with theme "even" for the final output

Output the resume YAML first, then run the validation and ATS check tools.`,
        },
      }],
    }),
  );

  // ── Optimize ATS Score ────────────────────────────────────────────

  server.registerPrompt(
    'optimize-ats-score',
    {
      title: 'Optimize ATS Score',
      description: 'Analyze and improve an existing resume YAML to maximize its ATS score',
      argsSchema: {
        resumeYaml: z.string().describe('The current resume YAML content'),
        jobDescription: z.string().optional().describe('Optional job description to optimize against'),
        targetScore: z.string().optional().describe('Target ATS score (default: 85)'),
      },
    },
    ({ resumeYaml, jobDescription, targetScore }) => ({
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `Optimize this resume YAML to maximize its ATS score${targetScore ? ` (target: ${targetScore})` : ' (target: 85+)'}.

## Current Resume YAML
\`\`\`yaml
${resumeYaml}
\`\`\`

${jobDescription ? `## Job Description\n${jobDescription}\n` : ''}
## Instructions

1. First, run \`resuml_ats_check\` on the current YAML${jobDescription ? ' with the job description' : ''} to get the baseline score
2. Read the ATS scoring rubric (resuml://docs/ats-scoring) to understand what checks are performed
3. Review each failed or low-scoring check and fix the issues:
   - Missing contact info → add it
   - No summary → write a 2-4 sentence professional summary
   - Weak highlights → rewrite with action verbs and quantified metrics
   - Missing keywords → incorporate them naturally into skills and highlights
   - Structural issues → ensure all essential sections are present
4. Run \`resuml_ats_check\` again to verify improvement
5. Repeat until the target score is reached

Output the improved YAML with a summary of changes made.`,
        },
      }],
    }),
  );

  // ── Review Resume ─────────────────────────────────────────────────

  server.registerPrompt(
    'review-resume',
    {
      title: 'Review Resume',
      description: 'Comprehensive review of a resume YAML with ATS analysis and improvement suggestions',
      argsSchema: {
        resumeYaml: z.string().describe('The resume YAML content to review'),
      },
    },
    ({ resumeYaml }) => ({
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `Perform a comprehensive review of this resume.

## Resume YAML
\`\`\`yaml
${resumeYaml}
\`\`\`

## Review steps

1. Run \`resuml_validate\` to check schema compliance
2. Run \`resuml_ats_check\` for ATS analysis
3. Review content quality:
   - Is the summary compelling and role-specific?
   - Do highlights use strong action verbs?
   - Are achievements quantified with metrics?
   - Are skills well-organized and comprehensive?
   - Is the work history clear and impactful?
4. Provide a structured review with:
   - **ATS Score**: Current score and rating
   - **Schema Issues**: Any validation errors
   - **Strengths**: What the resume does well
   - **Improvements**: Specific, actionable suggestions
   - **Revised YAML**: An improved version if significant changes are recommended`,
        },
      }],
    }),
  );

  // ═══════════════════════════════════════════════════════════════════
  // TOOLS
  // ═══════════════════════════════════════════════════════════════════

  // ── resuml_init_resume ──────────────────────────────────────────────

  server.registerTool(
    'resuml_init_resume',
    {
      title: 'Init Resume',
      description: 'Generate a starter resume YAML template following the JSON Resume schema',
      inputSchema: {
        name: z.string().optional().describe('Full name for the resume'),
        title: z.string().optional().describe('Professional title/label'),
        email: z.string().optional().describe('Email address'),
      },
    },
    ({ name, title, email }) => {
      const yaml = generateResumeYaml(
        name ?? 'Your Name',
        email ?? 'email@example.com',
        title ?? 'Professional Title',
      );
      return { content: [{ type: 'text' as const, text: yaml }] };
    },
  );

  // ── resuml_validate ─────────────────────────────────────────────────

  server.registerTool(
    'resuml_validate',
    {
      title: 'Validate Resume',
      description: 'Validate resume YAML against the JSON Resume schema',
      inputSchema: {
        yaml: z.string().describe('Resume content in YAML format'),
      },
    },
    async ({ yaml }) => {
      suppressStdout();
      try {
        await processResumeData([yaml]);
        restoreStdout();
        return {
          content: [{ type: 'text' as const, text: JSON.stringify({ valid: true, errors: [] }, null, 2) }],
        };
      } catch (e: unknown) {
        restoreStdout();
        const message = e instanceof Error ? e.message : String(e);
        return {
          content: [{ type: 'text' as const, text: JSON.stringify({ valid: false, errors: [message] }, null, 2) }],
        };
      }
    },
  );

  // ── resuml_ats_check ────────────────────────────────────────────────

  server.registerTool(
    'resuml_ats_check',
    {
      title: 'ATS Check',
      description: 'Run ATS (Applicant Tracking System) analysis on a resume, optionally matching against a job description',
      inputSchema: {
        yaml: z.string().describe('Resume content in YAML format'),
        jobDescription: z.string().optional().describe('Job description text to match keywords against'),
        language: z.enum(['en', 'de']).optional().describe('Language for analysis (default: en)'),
      },
    },
    async ({ yaml, jobDescription, language }) => {
      suppressStdout();
      try {
        const resume = await processResumeData([yaml]);
        const result = analyzeAts(resume, {
          language: language ?? 'en',
          jobDescription,
        });
        restoreStdout();
        return {
          content: [{ type: 'text' as const, text: JSON.stringify(result, null, 2) }],
        };
      } catch (e: unknown) {
        restoreStdout();
        return {
          content: [{ type: 'text' as const, text: JSON.stringify({ error: e instanceof Error ? e.message : String(e) }) }],
          isError: true,
        };
      }
    },
  );

  // ── resuml_render ───────────────────────────────────────────────────

  server.registerTool(
    'resuml_render',
    {
      title: 'Render Resume',
      description: 'Render a resume to HTML using a specified theme',
      inputSchema: {
        yaml: z.string().describe('Resume content in YAML format'),
        theme: z.string().default('even').describe('Theme name (e.g. even, stackoverflow, elegant, paper, kendall)'),
        locale: z.string().optional().describe('Locale for theme rendering (e.g. en, de)'),
      },
    },
    async (args) => {
      const { yaml, theme } = args;
      const locale = args['locale'];
      suppressStdout();
      try {
        const resume = await processResumeData([yaml]);
        const themeModule = loadTheme(theme, { autoInstall: false });
        const renderOptions: Record<string, unknown> = {};
        if (locale) renderOptions['locale'] = locale;
        const html = await themeModule.render(resume, renderOptions);
        restoreStdout();
        return { content: [{ type: 'text' as const, text: html }] };
      } catch (e: unknown) {
        restoreStdout();
        const message = e instanceof Error ? e.message : String(e);
        const hint = message.includes('Cannot find module')
          ? `. Install with: resuml themes --install ${theme}`
          : '';
        return {
          content: [{ type: 'text' as const, text: JSON.stringify({ error: message + hint }) }],
          isError: true,
        };
      }
    },
  );

  // ── resuml_list_themes ──────────────────────────────────────────────

  server.registerTool(
    'resuml_list_themes',
    {
      title: 'List Themes',
      description: 'List available resume themes with their installation status',
    },
    () => {
      const themes = KNOWN_THEMES.map((t) => ({
        name: t.name,
        package: t.pkg,
        description: t.description,
        installed: isThemeInstalled(t.pkg),
        version: getInstalledVersion(t.pkg),
      }));
      return {
        content: [{ type: 'text' as const, text: JSON.stringify({ themes }, null, 2) }],
      };
    },
  );

  // ── resuml_export_pdf ───────────────────────────────────────────────

  server.registerTool(
    'resuml_export_pdf',
    {
      title: 'Export PDF',
      description: 'Export a resume as PDF (requires Playwright to be installed)',
      inputSchema: {
        yaml: z.string().describe('Resume content in YAML format'),
        theme: z.string().default('even').describe('Theme name'),
        format: z.enum(['A4', 'Letter']).default('A4').describe('Paper format'),
        locale: z.string().optional().describe('Locale for theme rendering (e.g. en, de)'),
        margin: z.string().optional().describe('Page margins. Single value (e.g. "10mm") for all sides, two values (e.g. "10mm,15mm") for vertical/horizontal, or four values (e.g. "10mm,15mm,10mm,15mm") for top/right/bottom/left'),
      },
    },
    async (args) => {
      const { yaml, theme, format } = args;
      const locale = args['locale'];
      const margin = args['margin'];
      suppressStdout();
      try {
        const resume = await processResumeData([yaml]);
        const themeModule = loadTheme(theme, { autoInstall: false });
        const renderOptions: Record<string, unknown> = {};
        if (locale) renderOptions['locale'] = locale;
        const html = await themeModule.render(resume, renderOptions);

        let chromium;
        try {
          const pw = await import('playwright');
          chromium = pw.chromium;
        } catch {
          restoreStdout();
          return {
            content: [{ type: 'text' as const, text: JSON.stringify({ error: 'Playwright is not installed. Run: npm install playwright' }) }],
            isError: true,
          };
        }

        const parsedMargin = parseMargin(margin);
        const browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle' });
        const pdfBuffer = await page.pdf({
          format,
          printBackground: true,
          margin: parsedMargin,
        });
        await browser.close();
        restoreStdout();

        return {
          content: [{
            type: 'text' as const,
            text: JSON.stringify({
              pdf: Buffer.from(pdfBuffer).toString('base64'),
              encoding: 'base64',
              format,
            }),
          }],
        };
      } catch (e: unknown) {
        restoreStdout();
        return {
          content: [{ type: 'text' as const, text: JSON.stringify({ error: e instanceof Error ? e.message : String(e) }) }],
          isError: true,
        };
      }
    },
  );

  return server;
}

function parseMargin(margin?: string): Record<string, string> {
  const defaultMargin = { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' };
  if (!margin) return defaultMargin;

  const parts = margin.split(',').map((s) => s.trim());
  if (parts.length === 1 && parts[0]) {
    return { top: parts[0], right: parts[0], bottom: parts[0], left: parts[0] };
  }
  if (parts.length === 2 && parts[0] && parts[1]) {
    return { top: parts[0], right: parts[1], bottom: parts[0], left: parts[1] };
  }
  if (parts.length === 4 && parts[0] && parts[1] && parts[2] && parts[3]) {
    return { top: parts[0], right: parts[1], bottom: parts[2], left: parts[3] };
  }
  return defaultMargin;
}

export async function startMcpServer(): Promise<void> {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
