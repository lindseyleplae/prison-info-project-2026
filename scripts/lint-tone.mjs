import fs from 'node:fs/promises';
import path from 'node:path';

const CONTENT_ROOT = path.resolve('src/content');

const hardFailPhrases = [
  'give yourself grace',
  "you're not alone",
  "it's okay to feel",
  'take care of yourself',
  "don't worry",
  'this is hard',
  'we recommend',
  'pro tip'
];

const softWarnPatterns = [
  { label: 'exclamation mark', regex: /!/g },
  { label: 'unfortunately', regex: /\bunfortunately\b/gi },
  { label: 'frustrating', regex: /\bfrustrating\b/gi },
  { label: 'overwhelming', regex: /\boverwhelming\b/gi },
  { label: 'difficult', regex: /\bdifficult\b/gi },
  { label: 'you may feel', regex: /\byou may feel\b/gi }
];

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

function stripFrontmatter(text) {
  return text.replace(/^---[\s\S]*?---\n?/, '');
}

function countMatches(text, regex) {
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

const files = await walk(CONTENT_ROOT);
const hardFailures = [];
const softWarnings = [];

for (const file of files) {
  const raw = await fs.readFile(file, 'utf8');
  const content = stripFrontmatter(raw);
  const lower = content.toLowerCase();
  const relative = path.relative(process.cwd(), file);

  for (const phrase of hardFailPhrases) {
    if (lower.includes(phrase)) {
      hardFailures.push(`${relative}: hard fail phrase "${phrase}"`);
    }
  }

  const lovedOneCount = countMatches(content, /\bloved one\b/gi);
  if (lovedOneCount >= 3) {
    softWarnings.push(`${relative}: soft warning "loved one" appears ${lovedOneCount} times`);
  }

  for (const rule of softWarnPatterns) {
    const count = countMatches(content, rule.regex);
    if (count > 0) {
      softWarnings.push(`${relative}: soft warning "${rule.label}" matched ${count} time(s)`);
    }
  }
}

if (softWarnings.length > 0) {
  console.warn('\nTone warnings:');
  for (const warning of softWarnings) {
    console.warn(`- ${warning}`);
  }
}

if (hardFailures.length > 0) {
  console.error('\nTone hard failures:');
  for (const failure of hardFailures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Tone lint passed across ${files.length} markdown files.`);
