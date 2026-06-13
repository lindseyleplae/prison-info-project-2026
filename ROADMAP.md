# State Coverage Roadmap

What's live, in progress, and untouched across all 50 states. **Update this file
whenever a state's status changes** — research started, facility batch added,
state completed. CLAUDE.md's "Current Scope" tracks totals; this file tracks the map.

Last updated: 2026-06-12 (New Hampshire published; Mississippi published — 3 of its state prisons)

## Status legend

- **Complete** — overview + 6 guides + statewide rules card + a page for every facility in the system
- **In progress** — overview + guides live, facility pages partial
- **In research** — research/drafting under way, nothing published yet
- **Not started** — untouched

## Prison counts

Counts without `~` are exact, verified during that state's research. Counts with
`~` are planning estimates of main state-run adult prisons — departments count
camps, annexes, and work centers differently, so verify during research before
publishing anything. Federal prisons and county jails are out of scope (the site
covers state systems).

| State | System | Prisons | On site | Status |
|-------|--------|---------|---------|--------|
| Delaware | DDOC | 4 | 4 | Complete |
| New Hampshire | NHDOC | 3 | 3 | Complete |
| Rhode Island | RIDOC | 6 | 6 | Complete |
| Utah | UDC | 2 | 2 | Complete |
| Vermont | VTDOC | 6 | 6 | Complete |
| Wyoming | WDOC | 5 | 5 | Complete |
| California | CDCR | 31 | 20 | In progress |
| Texas | TDCJ | ~100 | 22 | In progress |
| Mississippi | MDOC | 7 state + 2 private + 15 regional | 4 | In progress |
| Alabama | ADOC | ~15 | — | Not started |
| Alaska | AK DOC | ~12 | — | Not started |
| Arizona | ADCRR | ~13 | — | Not started |
| Arkansas | ADC | ~17 | — | Not started |
| Colorado | CDOC | ~19 | — | Not started |
| Connecticut | CT DOC | ~13 | — | Not started |
| Florida | FDC | ~50 | — | Not started |
| Georgia | GDC | ~34 | — | Not started |
| Hawaii | HI DCR | ~8 | — | Not started |
| Idaho | IDOC | ~9 | — | Not started |
| Illinois | IDOC | ~25 | — | Not started |
| Indiana | IDOC | ~18 | — | Not started |
| Iowa | IDOC | ~9 | — | Not started |
| Kansas | KDOC | ~8 | — | Not started |
| Kentucky | KY DOC | ~13 | — | Not started |
| Louisiana | LA DOC | ~8 | — | Not started |
| Maine | MDOC (Maine) | ~6 | — | Not started |
| Maryland | DPSCS | ~15 | — | Not started |
| Massachusetts | MA DOC | ~14 | — | Not started |
| Michigan | MDOC (Michigan) | ~26 | — | Not started |
| Minnesota | MN DOC | ~11 | — | Not started |
| Missouri | MODOC | ~19 | — | Not started |
| Montana | MT DOC | ~5 | — | Not started |
| Nebraska | NDCS | ~9 | — | Not started |
| Nevada | NDOC | ~8 | — | Not started |
| New Jersey | NJDOC | ~9 | — | Not started |
| New Mexico | NMCD | ~10 | — | Not started |
| New York | DOCCS | ~42 | — | Not started |
| North Carolina | NCDAC | ~54 | — | Not started |
| North Dakota | ND DOCR | ~4 | — | Not started |
| Ohio | ODRC | ~28 | — | Not started |
| Oklahoma | ODOC | ~20 | — | Not started |
| Oregon | ODOC (Oregon) | ~12 | — | Not started |
| Pennsylvania | PADOC | ~23 | — | Not started |
| South Carolina | SCDC | ~21 | — | Not started |
| South Dakota | SD DOC | ~5 | — | Not started |
| Tennessee | TDOC | ~14 | — | Not started |
| Virginia | VADOC | ~38 | — | Not started |
| Washington | WA DOC | ~11 | — | Not started |
| West Virginia | WV DCR | ~7 | — | Not started |
| Wisconsin | WI DOC | ~20 | — | Not started |

## Notes

- **Mississippi** (in progress): an unusual three-tier system — 7 state prisons,
  2 privately operated prisons (East Mississippi, Wilkinson County), and 15
  county-run regional facilities that hold state-sentenced people, each tier with
  its own rules. First batch published: the 3 big state prisons (Parchman,
  Central Mississippi in Pearl, South Mississippi in Leakesville), plus
  Tallahatchie (CoreCivic, Tutwiler) — holds Vermont/Montana/Wyoming men under
  CoreCivic's rules, which required making StateVisitingRules operator-aware (it
  now skips the statewide card when a facility's `system` isn't the state DOC;
  the page carries CoreCivic's rules in its body instead, and cross-links to the
  Vermont guides). Next: the other 4 state prisons (Walnut Grove, Marshall
  County, Delta women's, the women's facility), the 2 private prisons, and
  regional facilities as future batches.
- **Maine** would complete northern New England (ME/NH/VT); Massachusetts and
  Connecticut would complete the region.
- **Texas** is a long-term project (~100 units) — batches of 3-5 continue
  alongside other states.
- Three abbreviation collisions exist (Mississippi/Maine/Michigan all use
  "MDOC"; Illinois/Indiana/Iowa all use "IDOC"; Oregon and Oklahoma both use
  "ODOC") — disambiguate in `system-source-labels.ts` keys when those states land.
