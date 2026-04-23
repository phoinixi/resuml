#!/usr/bin/env node
/**
 * MCP Server Integration Test
 *
 * Spawns the resuml MCP server and exercises every tool, resource, and prompt
 * using the JSON-RPC 2.0 protocol over stdio.
 *
 * Usage: node scripts/test-mcp.mjs
 */

import { spawn } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Job Description ─────────────────────────────────────────────────

const JOB_DESCRIPTION = `
Summary

We are the ML Data Team of the Intelligent System Experience (ISE) group at Apple.
We are responsible for building high quality datasets at scale. Our team produces
datasets used in the training of ML and AI-centric features for many Apple products,
including iPhone, iPad, Mac, Apple Watch and AirPods.

We're looking for an exceptional software & data engineer who is passionate about
Apple products; who has a passion for data, is comfortable in a fast pace environment
and who is committed to improving ML data pipelines.

Responsibilities:
- Design consistent and robust data models
- Design and implement data pipelines to process data at scale (Petabyte scale)
- Automate data flows, build self service tooling
- Production-ize synthetic data workflows
- Preprocess, transform and clean data (tabular, image, video, text) at scale
- Interact with ML models to optimize human-in-the-loop workflows
- Support day-to-day operations of the data team

Minimum Qualifications:
- Bachelors, Masters or PhD in Computer Science, Mathematics, Physics or related field
- Excellent programming skills in Python with strong CS foundations (data structures, parallelization)
- Experience in Machine Learning (model training) in NLP or Computer Vision
- Design, prototype and put in production robust data components that scale

Preferred Qualifications:
- Data orchestration frameworks: Airflow, SQL/NoSQL, Docker, Kubernetes, Spark, Databricks
- Resilient in fast pace environment, comfortable with ambiguity
- Excellent written and verbal communication skills
- Experience designing and implementing agentic workflows
`.trim();

// ── Test Resume YAML ────────────────────────────────────────────────

const RESUME_YAML = `
basics:
  name: "Alex Chen"
  label: "Senior ML Data Engineer"
  email: "alex.chen@example.com"
  phone: "+1-408-555-0142"
  url: "https://alexchen.dev"
  summary: >-
    Senior ML Data Engineer with 7+ years of experience building
    production-grade data pipelines for machine learning at scale.
    Specialized in computer vision and NLP data processing, with deep
    expertise in Python, distributed systems, and data orchestration.
  location:
    city: "Cupertino"
    countryCode: "US"
    region: "California"
  profiles:
    - network: "LinkedIn"
      username: "alexchen-ml"
      url: "https://linkedin.com/in/alexchen-ml"
    - network: "GitHub"
      username: "alexchen"
      url: "https://github.com/alexchen"

work:
  - name: "Meta"
    position: "Senior ML Data Engineer"
    url: "https://meta.com"
    startDate: "2021-06-01"
    summary: "Led data pipeline architecture for ML training infrastructure"
    highlights:
      - "Designed and implemented petabyte-scale data pipelines processing 50TB+ daily for computer vision model training"
      - "Built automated data quality validation framework reducing bad training data by 73%"
      - "Led team of 5 engineers to production-ize synthetic data generation workflows for NLP models"
      - "Optimized Spark jobs reducing preprocessing time by 60% across 2000+ GPU cluster"
      - "Implemented human-in-the-loop annotation pipeline serving 200+ annotators with 99.5% uptime"

  - name: "Amazon Web Services"
    position: "Data Engineer"
    url: "https://aws.amazon.com"
    startDate: "2018-03-01"
    endDate: "2021-05-31"
    summary: "Built ML data infrastructure for Alexa and Rekognition teams"
    highlights:
      - "Designed robust data models for multi-modal ML datasets spanning text, image, and video domains"
      - "Implemented Airflow-based orchestration processing 10TB+ daily with 99.9% reliability"
      - "Built self-service data tooling enabling PMs and researchers to iterate 3x faster on dataset creation"
      - "Preprocessed and transformed training data for NLP models powering Alexa voice recognition"
      - "Reduced data pipeline costs by 40% through Kubernetes-based auto-scaling and resource optimization"

  - name: "Nvidia"
    position: "Junior Data Engineer"
    url: "https://nvidia.com"
    startDate: "2016-07-01"
    endDate: "2018-02-28"
    summary: "Data pipeline development for autonomous driving ML team"
    highlights:
      - "Built data preprocessing pipelines for computer vision training on autonomous driving datasets"
      - "Implemented data cleaning workflows processing 500K+ images daily with automated quality checks"
      - "Developed Python tools for dataset versioning and lineage tracking across ML experiments"

education:
  - institution: "Stanford University"
    area: "Computer Science"
    studyType: "Master"
    startDate: "2014-09-01"
    endDate: "2016-06-01"

  - institution: "UC Berkeley"
    area: "Mathematics and Computer Science"
    studyType: "Bachelor"
    startDate: "2010-09-01"
    endDate: "2014-06-01"

skills:
  - name: "Programming"
    level: "Expert"
    keywords: ["Python", "SQL", "Scala", "Bash", "Go"]

  - name: "Data Engineering"
    level: "Expert"
    keywords: ["Spark", "Airflow", "Databricks", "Kafka", "ETL", "Data Pipelines", "Data Models"]

  - name: "Machine Learning"
    level: "Advanced"
    keywords: ["Computer Vision", "NLP", "Model Training", "PyTorch", "TensorFlow", "Synthetic Data"]

  - name: "Infrastructure"
    level: "Advanced"
    keywords: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "Distributed Systems"]

  - name: "Data Storage"
    level: "Advanced"
    keywords: ["PostgreSQL", "NoSQL", "MongoDB", "Redis", "S3", "HDFS", "Delta Lake"]

projects:
  - name: "ML Data Quality Framework"
    description: "Open-source framework for automated ML training data validation"
    highlights:
      - "Implemented statistical drift detection across 15+ data quality dimensions"
      - "Adopted by 3 internal teams, reducing data incidents by 85%"
    keywords: ["Python", "Data Quality", "ML", "Open Source"]
    startDate: "2023-01-01"
    url: "https://github.com/alexchen/ml-data-quality"

  - name: "Agentic Data Pipeline Orchestrator"
    description: "LLM-powered agent for automated data pipeline debugging and optimization"
    highlights:
      - "Designed agentic workflow that autonomously diagnoses and fixes 60% of pipeline failures"
      - "Reduced on-call burden by 45% through intelligent alert routing"
    keywords: ["Agentic Workflows", "LLM", "Python", "Airflow"]
    startDate: "2024-06-01"

certificates:
  - name: "AWS Certified Data Engineer - Associate"
    date: "2023-03-15"
    issuer: "Amazon Web Services"

  - name: "Databricks Certified Data Engineer Professional"
    date: "2024-01-10"
    issuer: "Databricks"

languages:
  - language: "English"
    fluency: "Native speaker"
  - language: "Mandarin"
    fluency: "Native speaker"
`.trim();

// ── MCP Client ──────────────────────────────────────────────────────

class McpTestClient {
  constructor() {
    this.msgId = 0;
    this.pending = new Map();
    this.buffer = '';
  }

  start() {
    return new Promise((resolve, reject) => {
      const entry = existsSync(resolve(ROOT, 'dist/index.js'))
        ? './dist/index.js'
        : './dist/index.cjs';
      this.proc = spawn('node', [entry, 'mcp'], {
        cwd: ROOT,
        stdio: ['pipe', 'pipe', 'pipe'],
      });

      this.proc.stdout.on('data', (chunk) => this.onData(chunk));
      this.proc.stderr.on('data', (chunk) => {
        // MCP debug output goes to stderr, ignore
      });
      this.proc.on('error', reject);
      this.proc.on('close', (code) => {
        if (this.pending.size > 0) {
          for (const [, { reject: rej }] of this.pending) {
            rej(new Error(`MCP server exited with code ${code}`));
          }
        }
      });

      // Initialize the MCP connection
      this.send('initialize', {
        protocolVersion: '2025-03-26',
        capabilities: {},
        clientInfo: { name: 'test-client', version: '1.0.0' },
      }).then((result) => {
        // Send initialized notification
        this.notify('notifications/initialized', {});
        resolve(result);
      }).catch(reject);
    });
  }

  onData(chunk) {
    this.buffer += chunk.toString();
    // MCP messages are newline-delimited JSON
    let newlineIdx;
    while ((newlineIdx = this.buffer.indexOf('\n')) !== -1) {
      const line = this.buffer.slice(0, newlineIdx).trim();
      this.buffer = this.buffer.slice(newlineIdx + 1);
      if (!line) continue;
      try {
        const msg = JSON.parse(line);
        if (msg.id != null && this.pending.has(msg.id)) {
          const { resolve, reject } = this.pending.get(msg.id);
          this.pending.delete(msg.id);
          if (msg.error) reject(new Error(JSON.stringify(msg.error)));
          else resolve(msg.result);
        }
      } catch {
        // skip non-JSON lines
      }
    }
  }

  send(method, params) {
    return new Promise((resolve, reject) => {
      const id = ++this.msgId;
      this.pending.set(id, { resolve, reject });
      const msg = JSON.stringify({ jsonrpc: '2.0', id, method, params });
      this.proc.stdin.write(msg + '\n');
    });
  }

  notify(method, params) {
    const msg = JSON.stringify({ jsonrpc: '2.0', method, params });
    this.proc.stdin.write(msg + '\n');
  }

  async callTool(name, args = {}) {
    return this.send('tools/call', { name, arguments: args });
  }

  async listTools() {
    return this.send('tools/list', {});
  }

  async listResources() {
    return this.send('resources/list', {});
  }

  async readResource(uri) {
    return this.send('resources/read', { uri });
  }

  async listPrompts() {
    return this.send('prompts/list', {});
  }

  async getPrompt(name, args = {}) {
    return this.send('prompts/get', { name, arguments: args });
  }

  stop() {
    if (this.proc) {
      this.proc.stdin.end();
      this.proc.kill();
    }
  }
}

// ── Helpers ─────────────────────────────────────────────────────────

function header(text) {
  const line = '═'.repeat(70);
  console.log(`\n\x1b[36m${line}\x1b[0m`);
  console.log(`\x1b[1;36m  ${text}\x1b[0m`);
  console.log(`\x1b[36m${line}\x1b[0m\n`);
}

function subheader(text) {
  console.log(`\n\x1b[33m── ${text} ${'─'.repeat(Math.max(0, 64 - text.length))}\x1b[0m\n`);
}

function ok(msg) { console.log(`  \x1b[32m✓\x1b[0m ${msg}`); }
function fail(msg) { console.log(`  \x1b[31m✗\x1b[0m ${msg}`); }
function info(msg) { console.log(`  \x1b[90m${msg}\x1b[0m`); }

function truncate(str, max = 200) {
  if (str.length <= max) return str;
  return str.slice(0, max) + '…';
}

let passed = 0;
let failed = 0;

function assert(condition, label, detail) {
  if (condition) { ok(label); passed++; }
  else { fail(`${label}${detail ? ': ' + detail : ''}`); failed++; }
}

// ── Main Test ───────────────────────────────────────────────────────

async function main() {
  console.log('\x1b[1m\n🚀 resuml MCP Server Integration Test\x1b[0m');
  console.log('   Testing all tools, resources, and prompts\n');

  // Build first
  header('0. Build');
  console.log('  Building dist/index.js...');
  const { execSync } = await import('child_process');
  try {
    execSync('npm run build:lib', { cwd: ROOT, stdio: 'pipe' });
    ok('Build succeeded');
  } catch (e) {
    fail('Build failed: ' + e.message);
    process.exit(1);
  }

  const client = new McpTestClient();

  try {
    // ── Initialize ────────────────────────────────────────────────

    header('1. Initialize MCP Connection');
    const initResult = await client.start();
    assert(initResult != null, 'Server initialized successfully');
    info(`Init response keys: ${Object.keys(initResult).join(', ')}`);
    info(`Protocol version: ${initResult.protocolVersion || 'negotiated'}`);

    // ── List Tools ────────────────────────────────────────────────

    header('2. List Tools');
    const { tools } = await client.listTools();
    const toolNames = tools.map(t => t.name);
    info(`Found ${tools.length} tools: ${toolNames.join(', ')}`);
    for (const expected of ['resuml_init_resume', 'resuml_validate', 'resuml_ats_check', 'resuml_render', 'resuml_list_themes', 'resuml_export_pdf']) {
      assert(toolNames.includes(expected), `Tool "${expected}" registered`);
    }

    // ── List Resources ────────────────────────────────────────────

    header('3. List Resources');
    const { resources } = await client.listResources();
    const resourceUris = resources.map(r => r.uri);
    info(`Found ${resources.length} resources:`);
    for (const r of resources) {
      info(`  ${r.uri}, ${r.description?.slice(0, 60) || r.name}`);
    }
    assert(resourceUris.includes('resuml://schema/json-resume'), 'Resource: json-resume schema');
    assert(resourceUris.includes('resuml://docs/ats-scoring'), 'Resource: ats-scoring rubric');
    assert(resourceUris.includes('resuml://themes/catalog'), 'Resource: theme catalog');

    // ── Read Resources ────────────────────────────────────────────

    header('4. Read Resources');

    subheader('4a. JSON Resume Schema');
    const schema = await client.readResource('resuml://schema/json-resume');
    const schemaText = schema.contents[0].text;
    assert(schemaText.includes('basics'), 'Schema contains "basics" section');
    assert(schemaText.includes('work'), 'Schema contains "work" section');
    assert(schemaText.includes('ISO 8601'), 'Schema mentions ISO 8601 dates');
    info(`Schema length: ${schemaText.length} chars`);

    subheader('4b. ATS Scoring Rubric');
    const rubric = await client.readResource('resuml://docs/ats-scoring');
    const rubricText = rubric.contents[0].text;
    assert(rubricText.includes('contact-complete'), 'Rubric lists contact-complete check');
    assert(rubricText.includes('action-verbs'), 'Rubric lists action-verbs check');
    assert(rubricText.includes('90-100'), 'Rubric defines scoring scale');
    info(`Rubric length: ${rubricText.length} chars`);

    subheader('4c. Theme Catalog');
    const catalog = await client.readResource('resuml://themes/catalog');
    const catalogData = JSON.parse(catalog.contents[0].text);
    assert(catalogData.themes.length > 0, `Theme catalog has ${catalogData.themes.length} themes`);
    assert(catalogData.themes.some(t => t.name === 'even'), 'Catalog includes "even" theme');
    assert(catalogData.themes.some(t => t.name === 'stackoverflow'), 'Catalog includes "stackoverflow" theme');
    const installedThemes = catalogData.themes.filter(t => t.installed);
    info(`Installed themes: ${installedThemes.map(t => t.name).join(', ') || 'none'}`);

    // ── List Prompts ──────────────────────────────────────────────

    header('5. List Prompts');
    const { prompts } = await client.listPrompts();
    const promptNames = prompts.map(p => p.name);
    info(`Found ${prompts.length} prompts: ${promptNames.join(', ')}`);
    assert(promptNames.includes('tailor-resume-to-jd'), 'Prompt: tailor-resume-to-jd');
    assert(promptNames.includes('optimize-ats-score'), 'Prompt: optimize-ats-score');
    assert(promptNames.includes('review-resume'), 'Prompt: review-resume');

    // ── Get Prompt ────────────────────────────────────────────────

    header('6. Get Prompt: tailor-resume-to-jd');
    const prompt = await client.getPrompt('tailor-resume-to-jd', {
      jobDescription: JOB_DESCRIPTION,
      candidateName: 'Alex Chen',
      candidateEmail: 'alex.chen@example.com',
      candidateBackground: '7 years ML data engineering at Meta, AWS, Nvidia. Expert in Python, Spark, Airflow.',
    });
    assert(prompt.messages?.length > 0, 'Prompt returns messages');
    const promptText = prompt.messages[0].content.text;
    assert(promptText.includes('Job Description'), 'Prompt includes JD');
    assert(promptText.includes('Alex Chen'), 'Prompt includes candidate name');
    assert(promptText.includes('resuml_validate'), 'Prompt instructs to use resuml_validate');
    assert(promptText.includes('resuml_ats_check'), 'Prompt instructs to use resuml_ats_check');
    info(`Prompt text length: ${promptText.length} chars`);
    info(`Preview: ${truncate(promptText, 150)}`);

    // ── Tool: resuml_init_resume ──────────────────────────────────

    header('7. Tool: resuml_init_resume');
    const initRes = await client.callTool('resuml_init_resume', {
      name: 'Alex Chen',
      title: 'Senior ML Data Engineer',
      email: 'alex.chen@example.com',
    });
    const initYaml = initRes.content[0].text;
    assert(initYaml.includes('Alex Chen'), 'Init template has candidate name');
    assert(initYaml.includes('Senior ML Data Engineer'), 'Init template has title');
    assert(initYaml.includes('alex.chen@example.com'), 'Init template has email');
    info(`Template length: ${initYaml.length} chars`);

    // ── Tool: resuml_validate ─────────────────────────────────────

    header('8. Tool: resuml_validate');

    subheader('8a. Valid resume');
    const valResult = await client.callTool('resuml_validate', { yaml: RESUME_YAML });
    const valData = JSON.parse(valResult.content[0].text);
    assert(valData.valid === true, `Validation passed (valid=${valData.valid})`);
    assert(valData.errors.length === 0, `No errors (count=${valData.errors.length})`);

    subheader('8b. Invalid resume');
    const badResult = await client.callTool('resuml_validate', { yaml: 'this is not valid yaml: [' });
    const badData = JSON.parse(badResult.content[0].text);
    assert(badData.valid === false, `Invalid YAML detected (valid=${badData.valid})`);
    assert(badData.errors.length > 0, `Errors reported (count=${badData.errors.length})`);
    info(`Error: ${truncate(badData.errors[0], 100)}`);

    // ── Tool: resuml_ats_check ────────────────────────────────────

    header('9. Tool: resuml_ats_check');

    subheader('9a. ATS check without JD');
    const atsBasic = await client.callTool('resuml_ats_check', { yaml: RESUME_YAML });
    const atsBasicData = JSON.parse(atsBasic.content[0].text);
    assert(typeof atsBasicData.score === 'number', `Score is a number (${atsBasicData.score})`);
    assert(atsBasicData.rating, `Rating: ${atsBasicData.rating}`);
    assert(Array.isArray(atsBasicData.checks), `Has ${atsBasicData.checks.length} checks`);
    assert(atsBasicData.summary, 'Has summary text');
    info(`Score: ${atsBasicData.score}/100, Rating: ${atsBasicData.rating}`);
    info(`Summary: ${truncate(atsBasicData.summary, 150)}`);

    const passedChecks = atsBasicData.checks.filter(c => c.passed);
    const failedChecks = atsBasicData.checks.filter(c => !c.passed);
    info(`Checks: ${passedChecks.length} passed, ${failedChecks.length} failed`);
    for (const c of failedChecks) {
      info(`  ⚠ [${c.id}] ${c.message}`);
    }

    subheader('9b. ATS check WITH Apple JD');
    const atsJd = await client.callTool('resuml_ats_check', {
      yaml: RESUME_YAML,
      jobDescription: JOB_DESCRIPTION,
      language: 'en',
    });
    const atsJdData = JSON.parse(atsJd.content[0].text);
    assert(typeof atsJdData.score === 'number', `Score: ${atsJdData.score}/100`);
    assert(atsJdData.keywords, 'Has keyword match data');
    assert(Array.isArray(atsJdData.keywords?.matched), 'Has matched keywords');
    assert(Array.isArray(atsJdData.keywords?.missing), 'Has missing keywords');
    assert(typeof atsJdData.keywords?.matchPercentage === 'number', 'Has match percentage');
    info(`Score: ${atsJdData.score}/100, Rating: ${atsJdData.rating}`);
    info(`Keyword match: ${atsJdData.keywords.matchPercentage}%`);
    info(`Matched (${atsJdData.keywords.matched.length}): ${atsJdData.keywords.matched.join(', ')}`);
    info(`Missing (${atsJdData.keywords.missing.length}): ${atsJdData.keywords.missing.join(', ')}`);

    // ── Tool: resuml_list_themes ──────────────────────────────────

    header('10. Tool: resuml_list_themes');
    const themesResult = await client.callTool('resuml_list_themes');
    const themesData = JSON.parse(themesResult.content[0].text);
    assert(Array.isArray(themesData.themes), `Has ${themesData.themes.length} themes`);
    const installed = themesData.themes.filter(t => t.installed);
    info(`Total themes: ${themesData.themes.length}, Installed: ${installed.length}`);
    for (const t of installed) {
      info(`  📦 ${t.name} (${t.version})`);
    }

    // ── Tool: resuml_render ───────────────────────────────────────

    header('11. Tool: resuml_render');
    const renderResult = await client.callTool('resuml_render', {
      yaml: RESUME_YAML,
      theme: 'stackoverflow',
      locale: 'en',
    });
    const html = renderResult.content[0].text;
    const renderIsError = renderResult.isError || html.startsWith('{"error"');
    assert(!renderIsError, 'Render succeeded (no error)');
    if (renderIsError) {
      info(`Render error: ${truncate(html, 150)}`);
    } else {
      assert(html.includes('Alex Chen'), 'HTML contains candidate name');
      assert(html.includes('Senior ML') || html.includes('Meta') || html.includes('Stanford'), 'HTML contains resume content');
      assert(html.length > 1000, `HTML is substantial (${html.length} chars)`);
      info(`HTML output: ${html.length} chars`);
      info(`Preview: ${truncate(html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '), 150)}`);
    }

    // ── Tool: resuml_export_pdf (skip if no Playwright) ──────────

    header('12. Tool: resuml_export_pdf');
    info('Attempting PDF export (requires Playwright)...');
    const pdfResult = await client.callTool('resuml_export_pdf', {
      yaml: RESUME_YAML,
      theme: 'stackoverflow',
      format: 'A4',
      locale: 'en',
      margin: '15mm',
    });
    const pdfContent = JSON.parse(pdfResult.content[0].text);
    if (pdfContent.error?.includes('Playwright')) {
      info('⏭  Skipped, Playwright not installed (expected in CI)');
      ok('Graceful error when Playwright missing');
      passed++;
    } else if (pdfContent.pdf) {
      assert(pdfContent.encoding === 'base64', 'PDF is base64 encoded');
      assert(pdfContent.format === 'A4', 'Format is A4');
      const pdfSize = Buffer.from(pdfContent.pdf, 'base64').length;
      assert(pdfSize > 1000, `PDF has content (${(pdfSize / 1024).toFixed(1)} KB)`);
      info(`PDF size: ${(pdfSize / 1024).toFixed(1)} KB`);
    } else {
      fail('Unexpected PDF response: ' + truncate(JSON.stringify(pdfContent), 150));
      failed++;
    }

    // ── Summary ───────────────────────────────────────────────────

    header('Results');
    console.log(`  \x1b[32m${passed} passed\x1b[0m, \x1b[31m${failed} failed\x1b[0m`);
    console.log('');

    if (failed > 0) process.exitCode = 1;

  } catch (err) {
    console.error('\n\x1b[31mFatal error:\x1b[0m', err.message || err);
    process.exitCode = 1;
  } finally {
    client.stop();
  }
}

main();
