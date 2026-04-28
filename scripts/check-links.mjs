import fs from 'node:fs/promises';
import path from 'node:path';
import { load } from 'cheerio';

const DIST_ROOT = path.resolve('dist');
const SITE_ORIGIN = 'https://prisonvisitorguide.org';

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walk(fullPath);
      }
      return entry.isFile() && fullPath.endsWith('.html') ? [fullPath] : [];
    })
  );
  return files.flat();
}

async function pathExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

function shouldSkip(href) {
  return (
    !href ||
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('javascript:')
  );
}

async function resolveBuiltPath(urlPath) {
  const cleanPath = urlPath.replace(/\/+$/, '') || '/';
  const direct = path.join(DIST_ROOT, cleanPath);

  if (await pathExists(direct)) {
    return direct;
  }

  const indexPath = cleanPath === '/' ? path.join(DIST_ROOT, 'index.html') : path.join(DIST_ROOT, cleanPath, 'index.html');
  if (await pathExists(indexPath)) {
    return indexPath;
  }

  const htmlPath = path.join(DIST_ROOT, `${cleanPath}.html`);
  if (await pathExists(htmlPath)) {
    return htmlPath;
  }

  return null;
}

const htmlFiles = await walk(DIST_ROOT);
const failures = [];

for (const file of htmlFiles) {
  const html = await fs.readFile(file, 'utf8');
  const $ = load(html);

  for (const element of $('a[href]').toArray()) {
    const href = $(element).attr('href');
    if (shouldSkip(href)) {
      continue;
    }

    let resolved;
    try {
      resolved = new URL(href, new URL(path.relative(DIST_ROOT, file) || 'index.html', `${SITE_ORIGIN}/`));
    } catch {
      failures.push(`${path.relative(process.cwd(), file)} -> invalid URL "${href}"`);
      continue;
    }

    if (resolved.origin !== SITE_ORIGIN) {
      continue;
    }

    const target = await resolveBuiltPath(resolved.pathname);
    if (!target) {
      failures.push(`${path.relative(process.cwd(), file)} -> missing target "${href}"`);
    }
  }
}

if (failures.length > 0) {
  console.error('\nBroken internal links:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Internal link check passed across ${htmlFiles.length} built pages.`);
