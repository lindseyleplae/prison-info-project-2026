// Accessibility check — runs axe-core (WCAG 2.1 A/AA rules) against the built
// site in dist/. CLAUDE.md critical rule #7 promises WCAG 2.1 AA; this script
// is the enforcement. It audits one representative page per layout/page type,
// since pages sharing a layout share their structural accessibility profile.
//
// Usage: npm run build && npm run check:a11y
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';

const distDir = path.join(process.cwd(), 'dist');
const host = '127.0.0.1';
const port = Number(process.env.A11Y_CHECK_PORT ?? 4324);

// One page per distinct layout/template.
const pages = [
  { name: 'home', pathname: '/' },
  { name: 'national-guide', pathname: '/guides/visiting-basics/' },
  { name: 'guides-index', pathname: '/guides/' },
  { name: 'states-index', pathname: '/states/' },
  { name: 'state-overview', pathname: '/states/texas/' },
  { name: 'state-guide', pathname: '/states/texas/guides/visiting/' },
  { name: 'facility', pathname: '/states/texas/facilities/huntsville/' },
  { name: 'facility-directory', pathname: '/facilities/' },
  { name: 'search', pathname: '/search/' },
  { name: 'static-page', pathname: '/about/' },
  { name: 'tool', pathname: '/tools/first-visit-checklist/' },
  { name: 'not-found', pathname: '/404.html' }
];

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.woff2': 'font/woff2'
};

if (!existsSync(distDir)) {
  console.error('dist/ not found. Run `npm run build` before `npm run check:a11y`.');
  process.exit(1);
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${host}:${port}`);
    let filePath = path.join(distDir, decodeURIComponent(url.pathname));
    if (url.pathname.endsWith('/')) {
      filePath = path.join(filePath, 'index.html');
    }
    const body = await readFile(filePath);
    const type = contentTypes[path.extname(filePath)] ?? 'application/octet-stream';
    response.writeHead(200, { 'content-type': type });
    response.end(body);
  } catch {
    response.writeHead(404, { 'content-type': 'text/plain' });
    response.end('not found');
  }
});

await new Promise((resolve) => server.listen(port, host, resolve));

const browser = await chromium.launch({ headless: true });
const failures = [];

try {
  const context = await browser.newContext();
  const page = await context.newPage();

  for (const entry of pages) {
    const url = `http://${host}:${port}${entry.pathname}`;
    const response = await page.goto(url, { waitUntil: 'load' });
    if (!response || (!response.ok() && entry.name !== 'not-found')) {
      failures.push({ page: entry.name, violations: [{ id: 'page-load', description: `Could not load ${url}` }] });
      continue;
    }

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    if (results.violations.length > 0) {
      failures.push({ page: entry.name, violations: results.violations });
    }
  }
} finally {
  await browser.close();
  server.close();
}

if (failures.length > 0) {
  console.error(`Accessibility check FAILED on ${failures.length} page(s):\n`);
  for (const failure of failures) {
    console.error(`✗ ${failure.page}`);
    for (const violation of failure.violations) {
      console.error(`    [${violation.impact ?? 'n/a'}] ${violation.id}: ${violation.description}`);
      for (const node of violation.nodes ?? []) {
        console.error(`      ${node.html?.slice(0, 120) ?? ''}`);
      }
    }
  }
  process.exit(1);
}

console.log(`Accessibility check passed — ${pages.length} pages, WCAG 2.1 A/AA rules, no violations.`);
