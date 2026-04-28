export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbOptions = {
  pathname: string;
  pageTitle?: string;
  stateLabel?: string;
};

const staticPathLabels = new Map<string, string>([
  ['/facilities/', 'Facilities'],
  ['/search/', 'Search'],
  ['/about/', 'About'],
  ['/privacy/', 'Privacy'],
  ['/terms/', 'Terms']
]);

export function buildBreadcrumbs({ pathname, pageTitle, stateLabel }: BreadcrumbOptions): BreadcrumbItem[] {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  if (normalized === '/') {
    return items;
  }

  const staticLabel = staticPathLabels.get(normalized);
  if (staticLabel) {
    items.push({ label: staticLabel, href: normalized });
    return items;
  }

  const guideMatch = normalized.match(/^\/guides\/[^/]+\/$/);
  if (guideMatch) {
    items.push({ label: 'Guides' });
    if (pageTitle) {
      items.push({ label: pageTitle, href: normalized });
    }
    return items;
  }

  const stateMatch = normalized.match(/^\/states\/[^/]+\/$/);
  if (stateMatch) {
    items.push({ label: 'States' });
    items.push({ label: stateLabel ?? pageTitle ?? 'State', href: normalized });
    return items;
  }

  const stateGuideMatch = normalized.match(/^\/states\/[^/]+\/guides\/[^/]+\/$/);
  if (stateGuideMatch) {
    const parts = normalized.split('/').filter(Boolean);
    items.push({ label: 'States' });
    items.push({ label: stateLabel ?? parts[1], href: `/states/${parts[1]}/` });
    items.push({ label: 'Guides' });
    if (pageTitle) {
      items.push({ label: pageTitle, href: normalized });
    }
    return items;
  }

  const facilityMatch = normalized.match(/^\/states\/[^/]+\/facilities\/[^/]+\/$/);
  if (facilityMatch) {
    const parts = normalized.split('/').filter(Boolean);
    items.push({ label: 'States' });
    items.push({ label: stateLabel ?? parts[1], href: `/states/${parts[1]}/` });
    items.push({ label: 'Facilities' });
    if (pageTitle) {
      items.push({ label: pageTitle, href: normalized });
    }
    return items;
  }

  const toolMatch = normalized.match(/^\/tools\/[^/]+\/$/);
  if (toolMatch) {
    items.push({ label: 'Tools' });
    if (pageTitle) {
      items.push({ label: pageTitle, href: normalized });
    }
    return items;
  }

  return items;
}
