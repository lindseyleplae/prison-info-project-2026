// Freshness lint — flags content whose review promise has lapsed.
//
// WHY THIS EXISTS
// Every facility page carries a `reviewBy` date and every guide carries a
// `lastReviewed` date. Those dates are promises to the reader. A page past its
// review date is, by our own standard (SCALING.md "Decay"), unverified until
// re-checked. At 2 states this is easy to track by hand; at 50 it is not. This
// script makes the promise enforceable: overdue pages fail, soon-due pages warn.
//
// Facilities: `reviewBy` is explicit — overdue when reviewBy < today.
// Guides/states: only `lastReviewed` exists, so the effective review-by is
// lastReviewed + REVIEW_WINDOW_DAYS.
//
// Reference "today" defaults to the system clock; override with
// FRESHNESS_NOW=YYYY-MM-DD for deterministic checks.

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { parse as parseYaml } from 'yaml';

const CONTENT_ROOT = path.resolve('src/content');
const REVIEW_WINDOW_DAYS = 180; // guides/states: how long a review stays "fresh"
const SOON_DAYS = 30; // within this many days of due = soft warning
const MS_PER_DAY = 24 * 60 * 60 * 1000;

function referenceNow() {
  const override = process.env.FRESHNESS_NOW;
  if (override) {
    const parsed = new Date(`${override}T00:00:00Z`);
    if (Number.isNaN(parsed.getTime())) {
      throw new Error(`Invalid FRESHNESS_NOW="${override}" (expected YYYY-MM-DD)`);
    }
    return parsed;
  }
  return new Date();
}

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

function toDate(value) {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value;
  }
  if (typeof value === 'string') {
    const parsed = new Date(`${value}T00:00:00Z`);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }
  return null;
}

function daysBetween(a, b) {
  return Math.round((a.getTime() - b.getTime()) / MS_PER_DAY);
}

const now = referenceNow();
const files = await walk(CONTENT_ROOT);

const overdue = [];
const soon = [];
const missing = [];
let checked = 0;

for (const file of files) {
  const raw = await fs.readFile(file, 'utf8');
  const data = extractFrontmatter(raw);
  const rel = path.relative(process.cwd(), file);

  if (!data || data.draft === true) {
    continue;
  }

  const isFacility = file.includes(`${path.sep}facilities${path.sep}`);
  let dueDate = null;
  let basis = '';

  if (isFacility) {
    dueDate = toDate(data.reviewBy);
    basis = 'reviewBy';
  } else if (data.lastReviewed != null) {
    const reviewed = toDate(data.lastReviewed);
    if (reviewed) {
      dueDate = new Date(reviewed.getTime() + REVIEW_WINDOW_DAYS * MS_PER_DAY);
      basis = `lastReviewed + ${REVIEW_WINDOW_DAYS}d`;
    }
  } else {
    // Pages with no review metadata (e.g. static pages, tools) are out of scope.
    continue;
  }

  if (!dueDate) {
    missing.push(`${rel} — missing/invalid ${isFacility ? 'reviewBy' : 'lastReviewed'}`);
    continue;
  }

  checked += 1;
  const remaining = daysBetween(dueDate, now);
  const due = dueDate.toISOString().slice(0, 10);

  if (remaining < 0) {
    overdue.push(`${rel} — due ${due} (${-remaining} day(s) overdue, ${basis})`);
  } else if (remaining <= SOON_DAYS) {
    soon.push(`${rel} — due ${due} (in ${remaining} day(s), ${basis})`);
  }
}

console.log(`Freshness check — reference date ${now.toISOString().slice(0, 10)}, ${checked} dated page(s).`);

if (soon.length > 0) {
  console.log(`\nDue within ${SOON_DAYS} days (warning):`);
  for (const line of soon) console.log(`- ${line}`);
}

if (missing.length > 0) {
  console.log('\nMissing review metadata (warning):');
  for (const line of missing) console.log(`- ${line}`);
}

if (overdue.length > 0) {
  console.error('\nOverdue — treat as unverified until re-checked:');
  for (const line of overdue) console.error(`- ${line}`);
  process.exit(1);
}

console.log('\nFreshness check passed — no overdue pages.');
