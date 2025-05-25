import fs from 'fs';
import path from 'node:path';
import { processResumeData } from '../core';
import { loadResumeFiles } from '../utils/loadResume';
import { loadThemeConfig } from '../utils/loadThemeConfig';
import { loadTheme } from '../utils/themeLoader';
import { handleCommandError } from '../utils/errorHandler';
import chalk from 'chalk';

interface DevCommandOptions {
  resume?: string;
  theme?: string;
  themeConfig?: string;
  port?: number;
  language: string;
  debug?: boolean;
}

export async function devAction(options: DevCommandOptions): Promise<void> {
  if (!options.theme) {
    throw new Error(
      '--theme option is required. Please specify a theme name (e.g., stackoverflow, react).'
    );
  }

  console.log(chalk.blue('Starting resuml development server...'));

  const port = options.port || 3000;
  const inputPath = options.resume;

  if (!inputPath) {
    throw new Error('Resume path is required. Use -r or --resume option.');
  }

  try {
    // Initial render
    await renderResume(options);

    console.log(chalk.green(`🚀 Development server running at http://localhost:${port}`));
    console.log(chalk.blue('Watching for file changes...'));

    // Watch for file changes if inputPath is a directory
    if (fs.existsSync(inputPath) && fs.statSync(inputPath).isDirectory()) {
      watchDirectory(inputPath, () => renderResume(options));
    } else if (fs.existsSync(inputPath)) {
      watchFile(inputPath, () => renderResume(options));
    }

    // Simple HTTP server
    await startDevServer(port);
  } catch (error: unknown) {
    handleCommandError(error, 'dev', options.debug);
  }
}

async function renderResume(options: DevCommandOptions): Promise<void> {
  try {
    const inputPath = options.resume;
    if (!inputPath) {
      throw new Error('Resume path is required');
    }

    const { yamlContents } = await loadResumeFiles(inputPath);

    console.log(chalk.blue('🔄 Processing resume data...'));
    const resumeData = await processResumeData(yamlContents);

    const userThemeConfig = loadThemeConfig(options.themeConfig);
    const theme = await loadTheme(options.theme!);

    const htmlOutput = await theme.render(resumeData, {
      ...userThemeConfig,
      locale: options.language,
    });

    // Write to a temp directory for the dev server
    const outputPath = path.join(process.cwd(), '.resuml-dev', 'index.html');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, htmlOutput, 'utf8');

    console.log(chalk.green('✅ Resume updated!'));
  } catch (error: unknown) {
    console.error(chalk.red('❌ Error rendering resume:'), (error as Error).message);
  }
}

function watchDirectory(dirPath: string, callback: () => void): void {
  fs.watch(dirPath, { recursive: true }, (eventType, filename) => {
    if (filename && (filename.endsWith('.yaml') || filename.endsWith('.yml'))) {
      console.log(chalk.blue(`📁 File changed: ${filename}`));
      callback();
    }
  });
}

function watchFile(filePath: string, callback: () => void): void {
  fs.watch(filePath, (eventType) => {
    if (eventType === 'change') {
      console.log(chalk.blue(`📄 File changed: ${path.basename(filePath)}`));
      callback();
    }
  });
}

async function startDevServer(port: number): Promise<void> {
  // Simple HTTP server implementation
  const http = await import('http');
  const url = await import('url');

  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url || '', true);
    const pathname = parsedUrl.pathname || '/';

    if (pathname === '/' || pathname === '/index.html') {
      const htmlPath = path.join(process.cwd(), '.resuml-dev', 'index.html');

      if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, 'utf8');

        // Inject live reload script
        const liveReloadScript = `
          <script>
            setInterval(() => {
              fetch('/health').then(() => {
                location.reload();
              }).catch(() => {
                // Server might be restarting
              });
            }, 1000);
          </script>
        `;

        const modifiedHtml = html.replace('</body>', `${liveReloadScript}</body>`);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(modifiedHtml);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Resume not found. Make sure to provide a valid resume path.');
      }
    } else if (pathname === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('{"status":"ok"}');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    }
  });

  server.listen(port, () => {
    console.log(chalk.green(`🌐 Server listening on port ${port}`));
  });
}
