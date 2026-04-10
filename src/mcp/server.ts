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

function createServer(): McpServer {
  const server = new McpServer({
    name: 'resuml',
    version: '1.0.0',
  });

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
      },
    },
    async ({ yaml, theme }) => {
      suppressStdout();
      try {
        const resume = await processResumeData([yaml]);
        const themeModule = loadTheme(theme, { autoInstall: false });
        const html = await themeModule.render(resume as unknown as Record<string, unknown>);
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
      },
    },
    async ({ yaml, theme, format }) => {
      suppressStdout();
      try {
        const resume = await processResumeData([yaml]);
        const themeModule = loadTheme(theme, { autoInstall: false });
        const html = await themeModule.render(resume as unknown as Record<string, unknown>);

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

        const browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle' });
        const margin = '10mm';
        const pdfBuffer = await page.pdf({
          format,
          printBackground: true,
          margin: { top: margin, bottom: margin, left: margin, right: margin },
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

export async function startMcpServer(): Promise<void> {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
