import { getCollection, type CollectionEntry } from 'astro:content';

export type FacilityIndexItem = {
  title: string;
  slug: string;
  state: string;
  stateTitle: string;
  stateSlug: string;
  route: string;
  city?: string;
  county?: string;
  system?: string;
  summary?: string;
  securityLevel?: string;
  facilityType?: string;
  aliases: string[];
  providers: string[];
};

export function buildFacilityIndex(
  facilities: CollectionEntry<'facilities'>[],
  states: CollectionEntry<'states'>[],
  lang: 'en' | 'es' = 'en'
): FacilityIndexItem[] {
  const routePrefix = lang === 'es' ? '/es' : '';

  const stateLookup = new Map(
    states.map((entry) => [
      entry.data.state,
      {
        slug: entry.data.slug,
        title: entry.data.title
      }
    ])
  );

  const items: FacilityIndexItem[] = [];

  for (const entry of facilities) {
      if (entry.data.lang !== lang) {
        continue;
      }

      const stateMeta = stateLookup.get(entry.data.state);
      if (!stateMeta) {
        continue;
      }

      items.push({
        title: entry.data.title,
        slug: entry.data.slug,
        state: entry.data.state,
        stateTitle: stateMeta.title,
        stateSlug: stateMeta.slug,
        route: `${routePrefix}/states/${stateMeta.slug}/facilities/${entry.data.slug}/`,
        city: entry.data.city,
        county: entry.data.county,
        system: entry.data.system,
        summary: entry.data.summary,
        securityLevel: entry.data.securityLevel,
        facilityType: entry.data.facilityType,
        aliases: entry.data.aliases ?? [],
        providers: Object.values(entry.data.providers ?? {})
      });
  }

  return items.sort((left, right) => left.title.localeCompare(right.title));
}

export async function getFacilityIndex(lang: 'en' | 'es' = 'en') {
  const [facilities, states] = await Promise.all([
    getCollection('facilities', ({ data }) => !data.draft && data.lang === lang),
    getCollection('states', ({ data }) => !data.draft && data.lang === lang)
  ]);

  return buildFacilityIndex(facilities, states, lang);
}
