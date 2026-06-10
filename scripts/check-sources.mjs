// Sources lint — flags sourced content that cites nothing.
//
// WHY THIS EXISTS
// Accuracy is the project's first principle (CLAUDE.md): every factual claim is
// either sourced to an official record or attributed. The `sources` frontmatter
// field is how a page declares where its facts came from, and FacilityLayout /
// GuideLayout render those into a visible "Sources" section. A facility or guide
// with no sources is an unverifiable claim wearing a citation's clothes. At 2
// states this is easy to eyeball; at 50 it is not. This script makes the rule
// enforceable.
//
// SCOPE
// Only collections whose layout renders a Sources section: facilities,
// national-guides, state-guides. (pages, tools, and state overviews use other
// layouts and carry no original sourced claims.)
//
// Facilities additionally surface links.official and links.inmateLocator as
// sources, so they "have sources" if EITHER a frontmatter `sources[]` entry OR
// an official link is present. Guides render only frontmatter `sources[]`, so
// for guides that array is required.
//
// MODE
// Warn-only by default (exit 0) so the sources backfill can proceed page by page
// without breaking the build. Set REQUIRE_SOURCES=1 to make a missing source a
// hard failure (exit 1) — this is the switch that locks the standard in once
// every page is populated.

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { parse as parseYaml } from 'yaml';

const CONTENT_ROOT = path.resolve('src/content');
const IN_SCOPE = new Set(['facilities', 'national-guides', 'state-guides']);
const STRICT = process.env.REQUIRE_SOURCES === '1';

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walk(fullPath);
      }
      return entry.isFile() && fullPath.endsWith('.md') ? [fullPath] : [];
    })
  );
  return files.flat();
}

function extractFrontmatter(raw) {
  if (!raw.startsWith('---')) {
    return null;
  }
  const end = raw.indexOf('\n---', 3);
  if (end === -1) {
    return null;
  }
  const block = raw.slice(3, end);
  try {
    return parseYaml(block) ?? {};
  } catch {
    return null;
  }
}

function collectionOf(file) {
  const rel = path.relative(CONTENT_ROOT, file);
  return rel.split(path.sep)[0];
}

function hasSources(data) {
  return Array.isArray(data.sources) && data.sources.length > 0;
}

function hasOfficialLink(data) {
  return Boolean(data.links && typeof data.links.official === 'string' && data.links.official.trim());
}

const files = await walk(CONTENT_ROOT);

const missing = [];
let checked = 0;

for (const file of files) {
  const collection = collectionOf(file);
  if (!IN_SCOPE.has(collection)) {
    continue;
  }

  const raw = await fs.readFile(file, 'utf8');
  const data = extractFrontmatter(raw);
  const rel = path.relative(process.cwd(), file);

  if (!data || data.draft === true) {
    continue;
  }

  checked += 1;

  const isFacility = collection === 'facilities';
  const ok = isFacility ? hasSources(data) || hasOfficialLink(data) : hasSources(data);

  if (!ok) {
    missing.push(`${rel} — no sources${isFacility ? ' and no official link' : ''}`);
  }
}

console.log(`Sources check — ${checked} sourced page(s), ${missing.length} missing.`);

if (missing.length > 0) {
  const label = STRICT ? 'Missing sources (required):' : 'Missing sources (warning):';
  const log = STRICT ? console.error : console.log;
  log(`\n${label}`);
  for (const line of missing) log(`- ${line}`);
  if (STRICT) {
    process.exit(1);
  }
  console.log('\nWarn-only mode (set REQUIRE_SOURCES=1 to enforce).');
} else {
  console.log('\nSources check passed — every in-scope page cites a source.');
}
