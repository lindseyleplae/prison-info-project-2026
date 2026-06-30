import { siteConfig } from '../data/site';

export type StructuredData = Record<string, unknown>;

export type SeoInput = {
  title?: string;
  /**
   * A keyword-richer title for the <title> tag and social share cards, when the
   * visible page heading should stay short. Falls back to `title` when unset.
   */
  seoTitle?: string;
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
  const titleBase = input.seoTitle ?? input.title;
  const pageTitle = titleBase ? `${titleBase} | ${siteConfig.name}` : siteConfig.name;
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

export type FacilityStructuredDataInput = {
  name: string;
  url: string;
  description?: string;
  address?: string;
  telephone?: string;
  latitude?: number;
  longitude?: number;
};

export function createFacilityStructuredData(input: FacilityStructuredDataInput) {
  const schema: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentBuilding',
    name: input.name,
    url: toAbsoluteUrl(input.url)
  };
  if (input.description) schema.description = input.description;
  if (input.address) schema.address = input.address;
  if (input.telephone) schema.telephone = input.telephone;
  if (input.latitude != null && input.longitude != null) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: input.latitude,
      longitude: input.longitude
    };
  }
  return schema;
}
