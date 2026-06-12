// Human-readable names for each corrections system's official directory and
// inmate-locator pages, used to label the auto-assembled Sources list on
// facility pages (FacilityLayout). Labels must match what the linked page
// actually calls itself — a label that misnames the destination is an
// accuracy bug.
//
// Adding a state: add one entry keyed by the system abbreviation used in
// facility frontmatter. If a system has no entry, the generic fallbacks
// ("Official facility page" / "Inmate locator") render — accurate, just
// less specific.

export interface SystemSourceLabels {
  /** Name of the system's official facility page/directory, e.g. "TDCJ Unit Directory". */
  official: string;
  /** Name of the system's inmate-search tool, e.g. "TDCJ Inmate Search". */
  locator: string;
}

export const systemSourceLabels: Record<string, SystemSourceLabels> = {
  VTDOC: {
    official: 'Vermont DOC Correctional Facilities',
    locator: 'Vermont DOC Offender Locator'
  },
  RIDOC: {
    official: 'RIDOC Facilities',
    locator: 'RIDOC Incarceration Search'
  },
  DDOC: {
    official: 'Delaware DOC Facilities',
    locator: 'VINELink'
  },
  WDOC: {
    official: 'WDOC Facilities',
    locator: 'Wyoming Offender Locator'
  },
  UDC: {
    official: 'UDC Correctional Facilities',
    locator: 'UDC Offender Search'
  },
  TDCJ: {
    official: 'TDCJ Unit Directory',
    locator: 'TDCJ Inmate Search'
  },
  CDCR: {
    official: 'CDCR Facility Locator',
    locator: 'California Incarcerated Records and Information Search (CIRIS)'
  }
};

export const genericSourceLabels: SystemSourceLabels = {
  official: 'Official facility page',
  locator: 'Inmate locator'
};
