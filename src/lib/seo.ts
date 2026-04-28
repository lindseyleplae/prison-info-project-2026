import { siteConfig } from '../data/site';

export type StructuredData = Record<string, unknown>;

export type SeoInput = {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  noindex?: boolean;
  structuredData?: StructuredData[];
};

export type BreadcrumbInput = {
  label: string;
  href?: string;
};

function toAbsoluteUrl(path: string) {
  return new URL(path, `https://${siteConfig.domain}`).toString();
}

export function buildSeo(input: SeoInput) {
  const description = input.description ?? siteConfig.description;
  const pageTitle = input.title ? `${input.title} | ${siteConfig.name}` : siteConfig.name;
  const canonical = input.canonicalPath ? toAbsoluteUrl(input.canonicalPath) : toAbsoluteUrl('/');

  return {
    title: pageTitle,
    description,
    canonical,
    image: input.image ? toAbsoluteUrl(input.image) : undefined,
    noindex: input.noindex ?? false,
    structuredData: input.structuredData ?? []
  };
}

export function createBreadcrumbStructuredData(items: BreadcrumbInput[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: toAbsoluteUrl(item.href ?? '/')
    }))
  };
}

export function createWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: toAbsoluteUrl('/'),
    description: siteConfig.description
  };
}
