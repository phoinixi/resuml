#!/usr/bin/env node
/**
 * Simple MCP client — sends one tool/resource/prompt call and prints the result.
 *
 * Usage:
 *   node scripts/mcp-call.mjs tool <toolName> '<json args>'
 *   node scripts/mcp-call.mjs resource <uri>
 *   node scripts/mcp-call.mjs prompt <name> '<json args>'
 *   node scripts/mcp-call.mjs list-tools
 *   node scripts/mcp-call.mjs list-resources
 *   node scripts/mcp-call.mjs list-prompts
 */
import { spawn } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const entry = existsSync(resolve(ROOT, 'dist/index.js'))
  ? './dist/index.js' : './dist/index.cjs';

const [,, cmd, arg1, arg2] = process.argv;

async function run() {
  const proc = spawn('node', [entry, 'mcp'], { cwd: ROOT, stdio: ['pipe', 'pipe', 'pipe'] });
  let buf = '';
  const pending = new Map();
  let msgId = 0;

  proc.stdout.on('data', (chunk) => {
    buf += chunk.toString();
    let idx;
    while ((idx = buf.indexOf('\n')) !== -1) {
      const line = buf.slice(0, idx).trim();
      buf = buf.slice(idx + 1);
      if (!line) continue;
      try {
        const msg = JSON.parse(line);
        if (msg.id != null && pending.has(msg.id)) {
          const { resolve } = pending.get(msg.id);
          pending.delete(msg.id);
          resolve(msg);
        }
      } catch {}
    }
  });

  function send(method, params) {
    return new Promise((resolve) => {
      const id = ++msgId;
      pending.set(id, { resolve });
      proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
    });
  }

  // Initialize
  await send('initialize', {
    protocolVersion: '2025-03-26',
    capabilities: {},
    clientInfo: { name: 'mcp-call', version: '1.0.0' },
  });
  proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized', params: {} }) + '\n');

  let result;
  switch (cmd) {
    case 'tool': {
      const args = arg2 ? JSON.parse(arg2) : {};
      result = await send('tools/call', { name: arg1, arguments: args });
      break;
    }
    case 'resource':
      result = await send('resources/read', { uri: arg1 });
      break;
    case 'prompt': {
      const args = arg2 ? JSON.parse(arg2) : {};
      result = await send('prompts/get', { name: arg1, arguments: args });
      break;
    }
    case 'list-tools':
      result = await send('tools/list', {});
      break;
    case 'list-resources':
      result = await send('resources/list', {});
      break;
    case 'list-prompts':
      result = await send('prompts/list', {});
      break;
    default:
      console.error('Usage: mcp-call.mjs tool|resource|prompt|list-tools|list-resources|list-prompts');
      process.exit(1);
  }

  console.log(JSON.stringify(result.result ?? result.error, null, 2));
  proc.stdin.end();
  proc.kill();
}

run().catch(e => { console.error(e); process.exit(1); });
