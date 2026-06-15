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
  // Illinois's agency abbreviates itself "IDOC", which collides with Idaho,
  // Indiana, and Iowa, so facility frontmatter uses the display string
  // "Illinois DOC". IDOC calls incarcerated people "individuals in custody".
  'Illinois DOC': {
    official: 'Illinois DOC Facility Page',
    locator: 'Illinois DOC Individual in Custody Search'
  },
  ADCRR: {
    official: 'ADCRR Facility Page',
    locator: 'ADCRR Inmate Data Search'
  },
  // Massachusetts's agency abbreviates "MA DOC"/"DOC"; "MDOC" collides with
  // Mississippi, so facility frontmatter uses the display string "Massachusetts
  // DOC". Massachusetts has no comprehensive public inmate locator; VINELink is
  // the public custody-status tool the DOC participates in.
  'Massachusetts DOC': {
    official: 'Massachusetts DOC Facility Page',
    locator: 'VINELink'
  },
  // Missouri's agency abbreviates itself both "MDOC" and "MODOC"; "MDOC"
  // collides with Michigan and Mississippi, so facility frontmatter uses the
  // display string "Missouri DOC".
  'Missouri DOC': {
    official: 'Missouri DOC Facility Page',
    locator: 'Missouri Offender Search'
  },
  // Indiana's agency abbreviates itself "IDOC", which collides with Idaho,
  // Illinois, and Iowa, so facility frontmatter uses the display string
  // "Indiana DOC".
  'Indiana DOC': {
    official: 'Indiana DOC Facility Page',
    locator: 'Indiana Incarcerated Database Search'
  },
  TDOC: {
    official: 'TDOC Facility Page',
    locator: 'Felony Offender Information Lookup (FOIL)'
  },
  PADOC: {
    official: 'PADOC Facility Page',
    locator: 'PADOC Inmate Locator'
  },
  ODRC: {
    official: 'ODRC Facility Page',
    locator: 'ODRC Offender Search'
  },
  GDC: {
    official: 'GDC Facility Page',
    locator: 'GDC Find an Offender'
  },
  // Maine's agency abbreviates itself "MDOC", which collides with Mississippi
  // and Michigan, so facility frontmatter uses the display string "Maine DOC".
  'Maine DOC': {
    official: 'Maine DOC Facility Page',
    locator: 'Maine DOC Resident Search'
  },
  'DPS&C': {
    official: 'Louisiana DOC Facility Page',
    locator: 'VINELink Offender Locator'
  },
  MDOC: {
    official: 'MDOC Facility Page',
    locator: 'MDOC Inmate Search'
  },
  CoreCivic: {
    official: 'CoreCivic Facility Page',
    locator: 'Inmate Locator'
  },
  NHDOC: {
    official: 'NHDOC Facility Page',
    locator: 'NHDOC Inmate Locator'
  },
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
  },
  VADOC: {
    official: 'VADOC Facility Page',
    locator: 'VADOC Inmate & Supervisee Locator'
  },
  NJDOC: {
    official: 'NJDOC Facility Page',
    locator: 'NJDOC Offender Search'
  },
  ODOC: {
    official: 'ODOC Prison Locations',
    locator: 'Oregon Offender Search'
  },
  CDOC: {
    official: 'CDOC Facilities',
    locator: 'CDOC Offender Search'
  },
  'Michigan DOC': {
    official: 'Michigan DOC Facility Page',
    locator: 'Offender Tracking Information System (OTIS)'
  },
  'Connecticut DOC': {
    official: 'Connecticut DOC Facility Page',
    locator: 'CT DOC Inmate Information Search'
  },
  ADOC: {
    official: 'ADOC Facility Page',
    locator: 'ADOC Inmate Search'
  },
  ADC: {
    official: 'ADC Facility Page',
    locator: 'ADC Inmate Population Search'
  },
  'WV DCR': {
    official: 'WVDCR Facility Page',
    locator: 'WVDCR Offender Search'
  },
  NDCS: {
    official: 'NDCS Facility Page',
    locator: 'NDCS Incarceration Records Search'
  }
};

export const genericSourceLabels: SystemSourceLabels = {
  official: 'Official facility page',
  locator: 'Inmate locator'
};
