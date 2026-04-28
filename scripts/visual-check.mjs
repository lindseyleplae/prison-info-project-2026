import { spawn } from 'node:child_process';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const port = Number(process.env.VISUAL_CHECK_PORT ?? 4321);
const host = '127.0.0.1';
const baseUrl = `http://${host}:${port}`;
const timeoutMs = 60_000;
const resultsDir = path.join(process.cwd(), 'test-results');
const screenshotsDir = path.join(resultsDir, 'screenshots');
const baselinesDir = path.join(resultsDir, 'baselines');
const diffsDir = path.join(resultsDir, 'diffs');
const maxDiffRatio = 0.001;

const pages = [
  { name: 'home', pathname: '/' },
  { name: 'guide-first-visit', pathname: '/guides/first-visit/' },
  { name: 'facility-huntsville', pathname: '/states/texas/facilities/huntsville/' },
  { name: 'facility-directory', pathname: '/facilities/' },
  { name: 'states', pathname: '/states/' },
  { name: 'showcase', pathname: '/showcase/' }
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: process.cwd(),
      stdio: 'inherit'
    });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(' ')} exited with code ${code ?? 'unknown'}`));
    });

    child.on('error', reject);
  });
}

async function waitForServer(url) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url, { redirect: 'manual' });
      if (response.ok || response.status === 302) {
        return;
      }
    } catch {
      // Server is still starting.
    }

    await sleep(1_000);
  }

  throw new Error(`Timed out waiting for Astro dev server at ${url}`);
}

async function writeBaselineIfMissing(sourcePath, baselinePath) {
  if (existsSync(baselinePath)) {
    return false;
  }

  await mkdir(path.dirname(baselinePath), { recursive: true });
  await writeFile(baselinePath, await readFile(sourcePath));
  return true;
}

async function compareImages(currentPath, baselinePath, diffPath) {
  const [currentPng, baselinePng] = await Promise.all([
    readFile(currentPath).then((buffer) => PNG.sync.read(buffer)),
    readFile(baselinePath).then((buffer) => PNG.sync.read(buffer))
  ]);

  if (currentPng.width !== baselinePng.width || currentPng.height !== baselinePng.height) {
    throw new Error(
      `Size mismatch for ${path.basename(currentPath)}: current ${currentPng.width}x${currentPng.height}, baseline ${baselinePng.width}x${baselinePng.height}`
    );
  }

  const diffPng = new PNG({ width: currentPng.width, height: currentPng.height });
  const diffPixels = pixelmatch(
    currentPng.data,
    baselinePng.data,
    diffPng.data,
    currentPng.width,
    currentPng.height,
    { threshold: 0.1 }
  );
  const totalPixels = currentPng.width * currentPng.height;
  const diffRatio = diffPixels / totalPixels;

  if (diffPixels > 0) {
    await mkdir(path.dirname(diffPath), { recursive: true });
    await writeFile(diffPath, PNG.sync.write(diffPng));
  } else if (existsSync(diffPath)) {
    await rm(diffPath, { force: true });
  }

  return { diffPixels, diffRatio };
}

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    if (!message.includes("Executable doesn't exist")) {
      throw error;
    }

    console.log('Playwright Chromium is missing. Installing it now...');
    await runCommand('npx', ['playwright', 'install', 'chromium']);
    return chromium.launch({ headless: true });
  }
}

const server = spawn('npm', ['run', 'dev', '--', '--host', host, '--port', String(port)], {
  cwd: process.cwd(),
  stdio: ['ignore', 'pipe', 'pipe']
});

server.stdout.on('data', (chunk) => process.stdout.write(chunk));
server.stderr.on('data', (chunk) => process.stderr.write(chunk));

let browser;

try {
  await mkdir(screenshotsDir, { recursive: true });
  await waitForServer(baseUrl);

  browser = await launchBrowser();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  await page.emulateMedia({ reducedMotion: 'reduce' });

  const baselineDirectoryExists = existsSync(baselinesDir);
  if (!baselineDirectoryExists) {
    await mkdir(baselinesDir, { recursive: true });
  }

  const failures = [];
  const createdBaselines = [];

  for (const entry of pages) {
    const screenshotPath = path.join(screenshotsDir, `${entry.name}.png`);
    const baselinePath = path.join(baselinesDir, `${entry.name}.png`);
    const diffPath = path.join(diffsDir, `${entry.name}.png`);

    await page.goto(new URL(entry.pathname, baseUrl).toString(), { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content:
        '*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important;}'
    });
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot: ${path.relative(process.cwd(), screenshotPath)}`);

    if (!baselineDirectoryExists) {
      await writeFile(baselinePath, await readFile(screenshotPath));
      createdBaselines.push(entry.name);
      continue;
    }

    const baselineWasCreated = await writeBaselineIfMissing(screenshotPath, baselinePath);
    if (baselineWasCreated) {
      createdBaselines.push(entry.name);
      continue;
    }

    const comparison = await compareImages(screenshotPath, baselinePath, diffPath);
    console.log(
      `Compared ${entry.name}: ${(comparison.diffRatio * 100).toFixed(3)}% diff (${comparison.diffPixels} pixels)`
    );

    if (comparison.diffRatio > maxDiffRatio) {
      failures.push({
        name: entry.name,
        diffPixels: comparison.diffPixels,
        diffRatio: comparison.diffRatio,
        diffPath
      });
    }
  }

  if (createdBaselines.length > 0) {
    console.log(`Created baselines for: ${createdBaselines.join(', ')}`);
  }

  if (failures.length > 0) {
    console.error('Visual regression differences exceeded threshold:');
    for (const failure of failures) {
      console.error(
        `- ${failure.name}: ${(failure.diffRatio * 100).toFixed(3)}% diff (${failure.diffPixels} pixels). See ${path.relative(process.cwd(), failure.diffPath)}`
      );
    }
    process.exitCode = 1;
  } else {
    console.log('Visual check passed.');
  }
} finally {
  if (browser) {
    await browser.close();
  }

  server.kill('SIGTERM');
}
