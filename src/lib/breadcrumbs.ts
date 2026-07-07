import { t, type Lang } from './ui-strings';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbOptions = {
  pathname: string;
  pageTitle?: string;
  stateLabel?: string;
  lang?: Lang;
};

export function buildBreadcrumbs({ pathname, pageTitle, stateLabel, lang = 'en' }: BreadcrumbOptions): BreadcrumbItem[] {
  const normalizedRaw = pathname.endsWith('/') ? pathname : `${pathname}/`;

  // Spanish pages mirror English under /es. Match the crumb pattern against the
  // bare (English) path, then re-add the /es prefix to every generated href so
  // the crumbs point at the Spanish counterparts. Labels come from the dict.
  const prefix = lang === 'es' ? '/es' : '';
  const normalized = lang === 'es' ? normalizedRaw.replace(/^\/es(?=\/|$)/, '') || '/' : normalizedRaw;

  const p = (path: string) => `${prefix}${path}`;
  // Keep the current page's crumb href pointing at the actual current URL
  // (already /es-prefixed for Spanish), matching prior behavior for English.
  const currentHref = normalizedRaw;

  const staticPathLabels = new Map<string, string>([
    ['/facilities/', t(lang, 'crumb.facilities')],
    ['/search/', t(lang, 'crumb.search')],
    ['/about/', t(lang, 'crumb.about')],
    ['/privacy/', t(lang, 'crumb.privacy')],
    ['/terms/', t(lang, 'crumb.terms')]
  ]);

  const items: BreadcrumbItem[] = [{ label: t(lang, 'crumb.home'), href: p('/') }];

  if (normalized === '/') {
    return items;
  }

  const staticLabel = staticPathLabels.get(normalized);
  if (staticLabel) {
    items.push({ label: staticLabel, href: currentHref });
    return items;
  }

  // Every intermediate crumb links to a real destination: /states/ and
  // /guides/ have index pages, and the state-level Guides/Facilities crumbs
  // jump to those sections of the state page (ids added June 2026).
  const guideMatch = normalized.match(/^\/guides\/[^/]+\/$/);
  if (guideMatch) {
    items.push({ label: t(lang, 'crumb.guides'), href: p('/guides/') });
    if (pageTitle) {
      items.push({ label: pageTitle, href: currentHref });
    }
    return items;
  }

  const stateMatch = normalized.match(/^\/states\/[^/]+\/$/);
  if (stateMatch) {
    items.push({ label: t(lang, 'crumb.states'), href: p('/states/') });
    items.push({ label: stateLabel ?? pageTitle ?? t(lang, 'crumb.state'), href: currentHref });
    return items;
  }

  const stateGuideMatch = normalized.match(/^\/states\/[^/]+\/guides\/[^/]+\/$/);
  if (stateGuideMatch) {
    const parts = normalized.split('/').filter(Boolean);
    items.push({ label: t(lang, 'crumb.states'), href: p('/states/') });
    items.push({ label: stateLabel ?? parts[1], href: p(`/states/${parts[1]}/`) });
    items.push({ label: t(lang, 'crumb.guides'), href: p(`/states/${parts[1]}/#state-guides`) });
    if (pageTitle) {
      items.push({ label: pageTitle, href: currentHref });
    }
    return items;
  }

  const facilityMatch = normalized.match(/^\/states\/[^/]+\/facilities\/[^/]+\/$/);
  if (facilityMatch) {
    const parts = normalized.split('/').filter(Boolean);
    items.push({ label: t(lang, 'crumb.states'), href: p('/states/') });
    items.push({ label: stateLabel ?? parts[1], href: p(`/states/${parts[1]}/`) });
    items.push({ label: t(lang, 'crumb.facilities'), href: p(`/states/${parts[1]}/#facilities`) });
    if (pageTitle) {
      items.push({ label: pageTitle, href: currentHref });
    }
    return items;
  }

  const toolMatch = normalized.match(/^\/tools\/[^/]+\/$/);
  if (toolMatch) {
    items.push({ label: t(lang, 'crumb.tools') });
    if (pageTitle) {
      items.push({ label: pageTitle, href: currentHref });
    }
    return items;
  }

  return items;
}
