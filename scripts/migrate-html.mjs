import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { load } from 'cheerio';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const INPUT_ROOT = path.resolve('California Prison Resource Guide/_Website');
const OUTPUT_ROOT = path.resolve('src/content');
const TODAY = new Date('2026-03-29T00:00:00Z');

const STATE_CODE_BY_SLUG = {
  california: 'ca'
};

const NATIONAL_GUIDE_MAP = {
  'visiting-basics': { slug: 'visiting-basics', order: 1 },
  'first-time': { slug: 'first-visit', order: 2 },
  'staying-in-touch': { slug: 'staying-in-touch', order: 3 },
  'sending-money': { slug: 'sending-money', order: 4 },
  'know-your-rights': { slug: 'know-your-rights', order: 5 }
};

const RELATED_GUIDE_BY_TOPIC = {
  visiting: 'visiting-basics',
  mail: 'staying-in-touch',
  'phone-video': 'staying-in-touch',
  money: 'sending-money'
};

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date, days) {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}

function yamlScalar(value) {
  if (value instanceof Date) {
    return formatDate(value);
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  if (typeof value !== 'string') {
    return JSON.stringify(value);
  }
  if (value === '') {
    return '""';
  }
  if (/^[a-zA-Z0-9 ._/@:+-]+$/.test(value) && !value.includes(': ')) {
    return value;
  }
  return JSON.stringify(value);
}

function hasContent(value) {
  if (value === undefined || value === null || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.some((item) => hasContent(item));
  }

  if (value && typeof value === 'object' && !(value instanceof Date)) {
    return Object.values(value).some((item) => hasContent(item));
  }

  return true;
}

function toYaml(data, indent = 0) {
  const pad = '  '.repeat(indent);

  if (Array.isArray(data)) {
    return data
      .map((item) => {
        if (item && typeof item === 'object' && !Array.isArray(item)) {
          const nested = toYaml(item, indent + 1);
          const [firstLine, ...rest] = nested.split('\n');
          return `${pad}- ${firstLine.trimStart()}${rest.length ? `\n${rest.join('\n')}` : ''}`;
        }
        return `${pad}- ${yamlScalar(item)}`;
      })
      .join('\n');
  }

  return Object.entries(data)
    .filter(([, value]) => hasContent(value))
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${pad}${key}:\n${toYaml(value, indent + 1)}`;
      }
      if (value && typeof value === 'object' && !(value instanceof Date)) {
        return `${pad}${key}:\n${toYaml(value, indent + 1)}`;
      }
      return `${pad}${key}: ${yamlScalar(value)}`;
    })
    .join('\n');
}

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

function classifySource(relativePath) {
  const normalized = relativePath.replace(/\\/g, '/');
  const parts = normalized.split('/');
  const basename = path.basename(normalized, '.html');

  if (normalized === 'index.html') {
    return {
      collection: 'pages',
      outputFile: path.join(OUTPUT_ROOT, 'pages', 'home.md'),
      route: '/',
      slug: 'home'
    };
  }

  if (['about.html', 'privacy.html', 'terms.html'].includes(normalized)) {
    const slug = basename;
    return {
      collection: 'pages',
      outputFile: path.join(OUTPUT_ROOT, 'pages', `${slug}.md`),
      route: `/${slug}/`,
      slug
    };
  }

  if (parts[0] === 'guides') {
    const mapped = NATIONAL_GUIDE_MAP[basename] ?? { slug: basename };
    return {
      collection: 'national-guides',
      outputFile: path.join(OUTPUT_ROOT, 'national-guides', `${mapped.slug}.md`),
      route: `/guides/${mapped.slug}/`,
      slug: mapped.slug,
      order: mapped.order
    };
  }

  if (parts[0] === 'states') {
    const stateSlug = parts[1];
    const stateCode = STATE_CODE_BY_SLUG[stateSlug] ?? stateSlug.slice(0, 2);

    if (parts.length === 3 && parts[2] === 'index.html') {
      return {
        collection: 'states',
        outputFile: path.join(OUTPUT_ROOT, 'states', `${stateCode}.md`),
        route: `/states/${stateSlug}/`,
        slug: stateSlug,
        state: stateCode
      };
    }

    if (parts[2] === 'guides') {
      return {
        collection: 'state-guides',
        outputFile: path.join(OUTPUT_ROOT, 'state-guides', `${stateCode}-${basename}.md`),
        route: `/states/${stateSlug}/guides/${basename}/`,
        slug: basename,
        state: stateCode
      };
    }

    if (parts[2] === 'facilities') {
      return {
        collection: 'facilities',
        outputFile: path.join(OUTPUT_ROOT, 'facilities', `${stateCode}-${basename}.md`),
        route: `/states/${stateSlug}/facilities/${basename}/`,
        slug: basename,
        state: stateCode
      };
    }
  }

  return null;
}

function parseBreadcrumbs($) {
  const breadcrumbText = $('.breadcrumb').first().text().trim();
  return breadcrumbText ? breadcrumbText.split('/').map((part) => part.trim()).filter(Boolean) : [];
}

function extractTitle($) {
  return $('.page-header h1').first().text().trim() || $('h1').first().text().trim() || $('title').first().text().replace(/\s+—.+$/, '').trim();
}

function extractDescription($) {
  const subtitle = $('.page-header .subtitle').first().text().trim();
  if (subtitle) {
    return subtitle;
  }

  const heroSubtitle = $('.hero .subtitle').first().text().trim();
  if (heroSubtitle) {
    return heroSubtitle;
  }

  const firstParagraph = $('main p').first().text().trim();
  return firstParagraph || undefined;
}

function parseLabelValuePairs($selection) {
  const pairs = {};

  for (const element of $selection.toArray()) {
    const $ = load(element);
    const labelNode = $('strong, .key-info-label, .reality-check-label').first();
    const rawText = $.text().trim().replace(/\s+/g, ' ');
    const labelText = labelNode.text().trim().replace(/:$/, '');

    if (labelText) {
      const value = rawText.replace(new RegExp(`^${labelText}:?\\s*`, 'i'), '').trim();
      pairs[labelText] = value;
      continue;
    }

    const colonIndex = rawText.indexOf(':');
    if (colonIndex > 0) {
      pairs[rawText.slice(0, colonIndex).trim()] = rawText.slice(colonIndex + 1).trim();
    }
  }

  return pairs;
}

function cleanContentRoot($, meta) {
  $('script, style, noscript, .disclaimer-bar, .site-header, footer, .suggestions, .suggestions-box').remove();
  $('.breadcrumb, .page-toc, .hero-accent, .section-divider').remove();
  $('[style]').removeAttr('style');

  const pageHeader = $('.page-header').first();
  pageHeader.remove();
  $('h1').first().remove();

  if (meta.collection === 'pages' && meta.slug === 'home') {
    $('section.hero, .start-here').remove();
  }

  return $('article').first().length ? $('article').first() : $('main').first();
}

function createTurndownService() {
  const service = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    emDelimiter: '_',
    bulletListMarker: '-'
  });
  const plainService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    emDelimiter: '_',
    bulletListMarker: '-'
  });

  service.use(gfm);
  plainService.use(gfm);

  function convert(html) {
    return service.turndown(html).trim();
  }

  function convertPlain(html) {
    return plainService.turndown(html).trim();
  }

  function quoteAttribute(value) {
    return JSON.stringify(value.replace(/\n+/g, ' ').trim());
  }

  function directive(name, attributes, body) {
    const attributeString = Object.entries(attributes)
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}=${quoteAttribute(value)}`)
      .join(' ');

    return `\n\n:::${name}${attributeString ? `{${attributeString}}` : ''}\n${body.trim()}\n:::\n\n`;
  }

  function getClassList(node) {
    return node.getAttribute?.('class')?.split(/\s+/).filter(Boolean) ?? [];
  }

  function isDirectStepNode(node) {
    if (node.nodeType !== 1) {
      return false;
    }

    return getClassList(node).includes('step') || node.nodeName === 'LI';
  }

  function getDirectStepNodes(node) {
    return Array.from(node.childNodes).filter(isDirectStepNode);
  }

  function getDirectStepContentNode(stepNode) {
    return Array.from(stepNode.childNodes).find((child) => {
      return child.nodeType === 1 && getClassList(child).includes('step-content');
    });
  }

  function removeDirectStepNodes(node) {
    Array.from(node.childNodes)
      .filter(isDirectStepNode)
      .forEach((child) => child.remove());
  }

  function joinBlocks(blocks) {
    return blocks
      .map((block) => block.trim())
      .filter(Boolean)
      .join('\n\n');
  }

  function normalizeCell(cell) {
    return convertPlain(cell.innerHTML)
      .replace(/^\*\*(.*?)\*\*$/s, '$1')
      .replace(/\n+/g, '<br>')
      .replace(/\|/g, '\\|')
      .trim();
  }

  function tableToMarkdown(table) {
    const rows = Array.from(table.querySelectorAll('tr'))
      .map((row) => {
        return Array.from(row.querySelectorAll('th, td')).map((cell) => normalizeCell(cell));
      })
      .filter((row) => row.length > 0);

    if (rows.length === 0) {
      return '';
    }

    const columnCount = Math.max(...rows.map((row) => row.length));
    const normalizedRows = rows.map((row) => {
      return [...row, ...Array(Math.max(0, columnCount - row.length)).fill('')];
    });
    const [header, ...body] = normalizedRows;
    const divider = Array(columnCount).fill('---');

    return [
      `| ${header.join(' | ')} |`,
      `| ${divider.join(' | ')} |`,
      ...body.map((row) => `| ${row.join(' | ')} |`)
    ].join('\n');
  }

  function renderStepNode(stepNode) {
    const contentNode = getDirectStepContentNode(stepNode) ?? stepNode;
    const clone = contentNode.cloneNode(true);
    const headingNode = Array.from(clone.childNodes).find((child) => {
      return child.nodeType === 1 && /^(H3|H4)$/i.test(child.nodeName);
    });
    const headingText = headingNode?.textContent?.trim();
    const headingLevel = headingNode ? Number(headingNode.nodeName.slice(1)) : undefined;
    headingNode?.remove();

    return {
      headingText,
      headingLevel,
      body: convert(clone.innerHTML).trim()
    };
  }

  function flushStepList(stepItems, parts) {
    if (stepItems.length === 0) {
      return;
    }

    const steps = stepItems.map((item) => `1. ${item}`).join('\n');
    parts.push(directive('steps', {}, steps));
    stepItems.length = 0;
  }

  service.addRule('steps', {
    filter(node) {
      return node.nodeType === 1 && node.getAttribute('class')?.split(/\s+/).includes('steps');
    },
    replacement(_content, node) {
      const stepNodes = getDirectStepNodes(node);
      if (stepNodes.length === 0) {
        return '';
      }

      const prefaceClone = node.cloneNode(true);
      removeDirectStepNodes(prefaceClone);

      const parts = [];
      const preface = convert(prefaceClone.innerHTML).trim();
      if (preface) {
        parts.push(preface);
      }

      const pendingSimpleSteps = [];

      for (const stepNode of stepNodes) {
        const { headingText, headingLevel, body } = renderStepNode(stepNode);

        if (headingText) {
          flushStepList(pendingSimpleSteps, parts);
          parts.push(`${'#'.repeat(headingLevel)} ${headingText}`);
          if (body) {
            parts.push(body);
          }
          continue;
        }

        if (body) {
          pendingSimpleSteps.push(body);
        }
      }

      flushStepList(pendingSimpleSteps, parts);

      return `\n\n${joinBlocks(parts)}\n\n`;
    }
  });

  service.addRule('callout', {
    filter(node) {
      if (node.nodeType !== 1) return false;
      const classes = node.getAttribute('class')?.split(/\s+/) ?? [];
      return classes.includes('callout') || classes.some((value) => value.startsWith('callout-'));
    },
    replacement(_content, node) {
      const clone = node.cloneNode(true);
      const titleElement = clone.querySelector('.callout-title');
      const title = titleElement?.textContent?.trim();
      titleElement?.remove();

      const classes = node.getAttribute('class')?.split(/\s+/) ?? [];
      const variant = classes.includes('callout-warning')
        ? 'warning'
        : classes.includes('callout-tip')
          ? 'tip'
          : classes.includes('callout-success')
            ? 'success'
            : 'info';

      const codeElement = clone.querySelector('code');
      const codeText = codeElement?.textContent?.replace(/\r\n/g, '\n').trim();
      const body = codeElement && clone.textContent?.trim() === codeText && codeText?.includes('\n')
        ? `\`\`\`\n${codeText}\n\`\`\``
        : convert(clone.innerHTML);

      return directive('callout', { variant, title }, body);
    }
  });

  service.addRule('realityCheck', {
    filter(node) {
      return node.nodeType === 1 && node.getAttribute('class')?.split(/\s+/).includes('reality-check');
    },
    replacement(_content, node) {
      const clone = node.cloneNode(true);
      const label = clone.querySelector('.reality-check-label')?.textContent?.trim().replace(/:$/, '');
      clone.querySelector('.reality-check-label')?.remove();
      return directive('reality-check', { title: label }, convert(clone.innerHTML));
    }
  });

  service.addRule('keyInfo', {
    filter(node) {
      return node.nodeType === 1 && node.getAttribute('class')?.split(/\s+/).includes('key-info');
    },
    replacement(_content, node) {
      const clone = node.cloneNode(true);
      const label = clone.querySelector('.key-info-label')?.textContent?.trim().replace(/:$/, '');
      clone.querySelector('.key-info-label')?.remove();
      return directive('key-info', { title: label }, convert(clone.innerHTML));
    }
  });

  service.addRule('costTableWrapper', {
    filter(node) {
      return node.nodeType === 1 && node.nodeName === 'DIV' && node.getAttribute('class')?.split(/\s+/).includes('cost-table');
    },
    replacement(_content, node) {
      const table = node.querySelector('table')?.cloneNode(true);
      if (!table) {
        return '';
      }
      table.removeAttribute('class');
      return directive('cost-table', {}, tableToMarkdown(table));
    }
  });

  service.addRule('costTableTable', {
    filter(node) {
      return node.nodeType === 1 && node.nodeName === 'TABLE' && node.getAttribute('class')?.split(/\s+/).includes('cost-table');
    },
    replacement(_content, node) {
      const clone = node.cloneNode(true);
      clone.removeAttribute('class');
      return directive('cost-table', {}, tableToMarkdown(clone));
    }
  });

  return service;
}

function rewriteLinks($, currentFile, routeMap) {
  $('a[href]').each((_, element) => {
    const href = $(element).attr('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }

    let resolved;
    try {
      resolved = new URL(href, pathToFileURL(currentFile));
    } catch {
      return;
    }

    if (resolved.protocol !== 'file:') {
      return;
    }

    const targetFile = fileURLToPath(resolved);
    const mapped = routeMap.get(path.normalize(targetFile));
    if (!mapped) {
      return;
    }

    $(element).attr('href', `${mapped.route}${resolved.hash}`);
  });
}

function detectProviders(html) {
  const text = html.toLowerCase();
  const providers = {};

  if (text.includes('gtl') || text.includes('viapath')) {
    providers.phone = 'ViaPath (GTL)';
  }
  if (text.includes('gettingout')) {
    providers.video = 'GettingOut';
  }
  if (text.includes('connectnetwork')) {
    providers.money = 'ConnectNetwork';
  }
  if (text.includes('jpay')) {
    providers.messaging = 'JPay';
  }

  return Object.keys(providers).length > 0 ? providers : undefined;
}

function buildFrontmatter(meta, $, html) {
  const title = extractTitle($);
  const description = extractDescription($);
  const breadcrumbs = parseBreadcrumbs($);

  if (meta.collection === 'pages') {
    return {
      title,
      slug: meta.slug,
      description
    };
  }

  if (meta.collection === 'national-guides') {
    return {
      title,
      slug: meta.slug,
      description,
      summary: description,
      order: meta.order,
      lastReviewed: TODAY
    };
  }

  if (meta.collection === 'states') {
    const infoPairs = parseLabelValuePairs($('.key-info p, .key-info li, .key-info-item'));
    const facilityCountMatch = html.match(/(\d+)\s+CDCR adult institutions/i);
    return {
      title,
      slug: meta.slug,
      state: meta.state,
      abbreviation: meta.state.toUpperCase(),
      system: infoPairs.System?.split('(').pop()?.replace(')', '').trim() ?? infoPairs.System,
      systemFullName: infoPairs.System,
      summary: description,
      hotlines: infoPairs['Visiting hotline']
        ? {
            'visiting status': infoPairs['Visiting hotline']
          }
        : undefined,
      links: {
        'schedule visits': $('.key-info a').eq(0).attr('href'),
        'inmate locator': $('.key-info a').eq(1).attr('href')
      },
      facilityCount: facilityCountMatch ? Number(facilityCountMatch[1]) : undefined,
      lastReviewed: TODAY
    };
  }

  if (meta.collection === 'state-guides') {
    return {
      title,
      slug: meta.slug,
      state: meta.state,
      topic: meta.slug,
      relatedNationalGuide: RELATED_GUIDE_BY_TOPIC[meta.slug],
      system: breadcrumbs[1] === 'California' ? 'CDCR' : undefined,
      order: undefined,
      description,
      lastReviewed: TODAY
    };
  }

  if (meta.collection === 'facilities') {
    const infoPairs = parseLabelValuePairs($('.quick-facts .key-info-item, .quick-facts p, .key-info-item'));
    const address = infoPairs.Address || infoPairs.address;
    const mainPhone = infoPairs['Main Phone'] || infoPairs['Main phone'] || infoPairs.Phone || 'See official facility listing';
    const alias = infoPairs['Facility Code'] || infoPairs.Code;
    const securityLevel = infoPairs['Security Level'];
    const type = infoPairs.Type;

    return {
      title,
      slug: meta.slug,
      state: meta.state,
      system: breadcrumbs[1] === 'California' ? 'CDCR' : undefined,
      summary: description,
      aliases: alias ? [alias] : undefined,
      city: address?.split(',')[0],
      county: breadcrumbs[1] === 'California' ? undefined : undefined,
      address,
      securityLevel,
      facilityType: type,
      contact: {
        mainPhone
      },
      providers: detectProviders(html),
      links: {
        official: $('.more-info a[href*="cdcr"], .key-info a[href*="cdcr"]').first().attr('href')
      },
      lastVerified: TODAY,
      reviewBy: addDays(TODAY, 90)
    };
  }

  return {
    title,
    slug: meta.slug
  };
}

const requestedFiles = process.argv.slice(2).map((value) => value.replace(/\\/g, '/'));
const allHtmlFiles = await walk(INPUT_ROOT);
const htmlFiles = requestedFiles.length
  ? allHtmlFiles.filter((file) => {
      const relative = path.relative(INPUT_ROOT, file).replace(/\\/g, '/');
      return requestedFiles.some((value) => relative === value || relative.endsWith(`/${value}`) || path.basename(relative) === value);
    })
  : allHtmlFiles;
const sourceMap = new Map();

for (const file of allHtmlFiles) {
  const relative = path.relative(INPUT_ROOT, file);
  const meta = classifySource(relative);
  if (meta) {
    sourceMap.set(path.normalize(file), meta);
  }
}

const turndownService = createTurndownService();

for (const file of htmlFiles) {
  const relative = path.relative(INPUT_ROOT, file);
  const meta = classifySource(relative);
  if (!meta) {
    continue;
  }

  const html = await fs.readFile(file, 'utf8');
  const $ = load(html);
  rewriteLinks($, file, sourceMap);

  const frontmatter = buildFrontmatter(meta, $, $.html());
  const root = cleanContentRoot($, meta);
  const bodyHtml = root.html() ?? '';
  const markdown = turndownService.turndown(bodyHtml).replace(/\n{3,}/g, '\n\n').trim();
  const document = `---\n${toYaml(frontmatter)}\n---\n\n${markdown}\n`;

  await fs.mkdir(path.dirname(meta.outputFile), { recursive: true });
  await fs.writeFile(meta.outputFile, document, 'utf8');

  console.log(`Migrated ${relative} -> ${path.relative(process.cwd(), meta.outputFile)}`);
}
