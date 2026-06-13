// Single source of truth for the statewide visiting rules that appear, in a
// short "hybrid" form, on every facility page in a state.
//
// WHY THIS FILE EXISTS
// Statewide rules (dress code, ID, prohibited items, scheduling) are identical
// at every unit in a state. Hand-writing them on each facility page caused two
// problems: bloat, and silent drift (one page updated, the rest stale). This
// file holds them once per state. The <StateVisitingRules> component renders
// them on every facility page automatically, so they cannot diverge.
//
// DENSITY ("hybrid"): the dress code is spelled out in full, because it is the
// most common reason a visitor is turned away at the door. ID, items, and
// scheduling are one-line summaries. The full lists live in the state's
// visiting guide, which is linked. Everything here must match that guide
// verbatim in substance — the guide is the cited source.

export interface StateVisitingRules {
  /** Corrections system abbreviation, e.g. "TDCJ", "CDCR". */
  system: string;
  /** Card heading, e.g. "Statewide rules that apply at every TDCJ unit". */
  title: string;
  /** Path to the state's visiting guide (the cited source for these rules). */
  guideHref: string;
  /** Visible link text, e.g. "Visiting in Texas". */
  guideLabel: string;
  /** Dress-code rules, spelled out (the high-stakes "gotcha"). */
  dressCode: string[];
  /** One-line ID summary. */
  idRule: string;
  /** One-line prohibited/permitted-items summary. */
  itemsRule: string;
  /** One-line scheduling summary. */
  schedulingRule: string;
}

export const stateVisitingRules: Record<string, StateVisitingRules> = {
  me: {
    system: 'Maine DOC',
    title: 'Statewide rules that apply at every Maine DOC facility',
    guideHref: '/states/maine/guides/visiting/',
    guideLabel: 'Visiting in Maine',
    dressCode: [
      'Undergarments required and not visible. Nothing see-through, low-cut, tight, or revealing — no tank, halter, tube, sleeveless, or crop tops, bare midriffs, or exposed cleavage.',
      'Skirts, dresses, and shorts must reach the knee, with no slit more than two inches above it.',
      'No hats, headbands, hoods, or hooded sweatshirts, and no outdoor jackets in the visiting room. The Windham facilities also bar zippered shirts.',
      'No leggings, spandex, yoga pants, or gym shorts, and nothing resembling resident or staff clothing; closed-toe shoes required. Each facility posts its own list, so check before traveling.'
    ],
    idRule:
      'Adults present a government-issued photo ID, such as a driver\'s license. A visitor under 18 brings a government photo ID or a certified copy of their birth certificate.',
    itemsRule:
      'Nothing goes into the visiting room — wallets, phones, and bags stay in a locker or the vehicle. Medication stays in the car except emergency items (nitroglycerin, an inhaler, an epi-pen). The Southern Maine Women\'s Reentry Center is an exception, allowing some outside food.',
    schedulingRule:
      'Each visitor applies and clears a background check (run by the State Bureau of Identification; allow up to six weeks), and the resident is told when someone is approved. Visits are by appointment only — request at least two business days ahead — with up to three visitors at a time and no walk-ins.'
  },
  la: {
    system: 'DPS&C',
    title: 'Statewide rules that apply at every Louisiana state prison',
    guideHref: '/states/louisiana/guides/visiting/',
    guideLabel: 'Visiting in Louisiana',
    dressCode: [
      'No denim or chambray, no gray, blue, or white sweatshirts, and no white t-shirts (these resemble inmate clothing); no camouflage or BDU-style clothing that resembles officer dress.',
      'Undergarments required and not visible. Nothing transparent; no swimsuits, strapless, tube, halter, or tank tops, low-cut or midriff-baring tops, or spandex, Lycra, or leggings.',
      'Skirts, shorts, and dresses no shorter than one inch above the knee, with no revealing slits or holes.',
      'No house slippers, shower shoes, or flip-flops — footwear stays on. No hats or head coverings except for religious reasons; nothing gang-related or obscene.'
    ],
    idRule:
      'Bring a valid photo ID for every visitor 15 and older — a driver\'s license, state ID, military ID, or passport. (A statewide notice says 18 and older, but facility pages say 15, so bring ID for anyone 15 or older.)',
    itemsRule:
      'Leave wallets, purses, phones, and cash in your locked vehicle. Each prison allows limited items into the visit — at Angola, up to $300 cash per family and specified baby items; some prisons allow vending change and one debit card for the JPay kiosk.',
    schedulingRule:
      'The incarcerated person starts the application — the visitor mails or emails it to the facility (faxes are not accepted), and approval follows a background check. Each person keeps up to 10 approved visitors, changeable every four months; the approved-visitor list is usually not in place during the first 30 days of intake (though immediate family may be able to visit sooner); and two visits a month is the statewide norm.'
  },
  ms: {
    system: 'MDOC',
    title: 'Statewide rules that apply at every MDOC state prison',
    guideHref: '/states/mississippi/guides/visiting/',
    guideLabel: 'Visiting in Mississippi',
    dressCode: [
      'Shirts and closed outdoor shoes required; underwear required (a bra for women). No tank, crop, sleeveless, or strapless tops, spaghetti straps, or bare midriffs.',
      'Nothing see-through, overly tight, or revealing — no yoga pants, leggings, spandex, hip-huggers, jogging or biking shorts, mini-skirts, or cutoffs.',
      'Shorts must reach the knee; skirts and dresses no shorter than one inch above the knee, with no slit above the knee when seated.',
      'No hats or head coverings except for religious reasons; jewelry limited to a wedding ring, a religious medallion, and a medical-alert bracelet — no body-piercing jewelry.',
      'The dress code applies to children too, and a violation turns the visit away and can carry a one-year visiting suspension.'
    ],
    idRule:
      'Visitors 18 and older present a valid government photo ID (driver\'s license, state ID, or passport). Ages 16-17 need a photo ID showing date of birth; children 15 and under bring a legible birth certificate.',
    itemsRule:
      'No phones, wallets, purses, tobacco, or cash inside — leave them locked in the vehicle. Visits are cashless, with prepaid vending cards sold in the visit area; one infant diaper bag is allowed (up to 4 diapers, 2 bottles, a change of clothes, a pacifier, and wipes).',
    schedulingRule:
      'The incarcerated person starts the visitor application — forms come only from them, never online — lists up to 10 visitors, and tells visitors the days and rules. Up to 5 visitors per visit; frequency runs by custody level (about four times a month at minimum custody down to once a month at close custody). MDOC posts no schedules, so confirm days and hours with the facility.'
  },
  nh: {
    system: 'NHDOC',
    title: 'Statewide rules that apply at every NHDOC facility',
    guideHref: '/states/new-hampshire/guides/visiting/',
    guideLabel: 'Visiting in New Hampshire',
    dressCode: [
      'Undergarments required. Nothing see-through, low-cut, tank/halter/tube style, sleeveless, or midriff-baring; no tight athletic wear, spandex, sweat, or yoga pants.',
      'Skirts, dresses, and shorts that reach two or more inches above the knee fail, as do slits (kick pleats up to four inches pass).',
      'No hats, headbands, or hooded clothing of any kind; no zippered shirts; no outdoor jackets, shawls, scarves, or loose open over-shirts — coats go in a locker or the vehicle.',
      'No ripped clothing, overalls, scrubs, or uniform look-alikes; no metal hair ornaments. Jewelry is limited to a wedding ring set, one religious pendant, and medical-alert items.',
      'Children under 10 are exempt from parts of the code; the Visiting Room Officer judges borderline items, deferring to the shift commander when needed.'
    ],
    idRule:
      'A government-issued photo ID — current or expired — surrendered at the entrance and returned after the visit. Children under 18 can use a photo ID or an original birth certificate.',
    itemsRule:
      'Small lockers outside the visiting room hold what cannot come in; cellphones are prohibited and tobacco stays locked in the vehicle. Published exceptions are infant items for mothers — empty clear bottles, sealed formula, diapers, wipes, and a nursing cover.',
    schedulingRule:
      'The incarcerated person starts every visitor application; the notarized form goes back to them, not to NHDOC, and approval takes about four weeks. Visits are walk-in during the posted block for the person\'s housing unit — two visits a week standard — and no NHDOC prison runs general-population Sunday visiting.'
  },
  vt: {
    system: 'VTDOC',
    title: 'Statewide rules that apply at every Vermont facility',
    guideHref: '/states/vermont/guides/visiting/',
    guideLabel: 'Visiting in Vermont',
    dressCode: [
      'No clothing with holes, rips, or torn pockets; nothing resembling a uniform; no sweat suits, hats, headbands, or hoods.',
      'Nothing see-through, tight-fitting, low-cut, midriff-baring, or tank/halter/tube style.',
      'No skirts, dresses, or shorts with slits reaching two inches or more above the knee; no metal hair ornaments.',
      'Staff judgment is final; children 10 and under get a partial exception at staff discretion.'
    ],
    idRule:
      'A government-issued photo ID whose name and address match the visiting list. Children can use any government-issued photo ID, a Social Security card, or a birth certificate.',
    itemsRule:
      'Nothing comes into the visiting room except bottles, pacifiers, or sippy cups for children 2 and under — lockers hold everything else, and tobacco stays in the vehicle.',
    schedulingRule:
      'The incarcerated person submits the visitor list (up to 10 names, changeable every 90 days). Visits are walk-in during the posted block for their housing unit (alphabetical by last name at two facilities) — one visit a week, up to two hours — and arrivals in the last 30 minutes of a period are not processed.'
  },
  ri: {
    system: 'RIDOC',
    title: 'Statewide rules that apply across the ACI campus',
    guideHref: '/states/rhode-island/guides/visiting/',
    guideLabel: 'Visiting in Rhode Island',
    dressCode: [
      'Undergarments required. Nothing see-through, low-cut, tank/halter/tube style, sleeveless, or midriff-baring; no tight or athletic clothing, spandex, or sweat pants.',
      'No skirts, dresses, or shorts with slits two inches or more above the knee.',
      'No khaki, beige, camouflage, military-style, or uniform-like clothing (including scrubs) — anything mistakable for inmate or staff dress.',
      'No hats, hoods, or headbands; no ripped clothing or flip-flops; jewelry only wedding and engagement rings and medical-alert items. Underwire bras can fail the metal detector.'
    ],
    idRule:
      'Adults: a driver\'s license, passport, military ID, or state-agency photo ID — Social Security cards and welfare IDs are not accepted. For visitors under 18, the birth certificate is the ID.',
    itemsRule:
      'Up to $10 in change in a clear plastic bag for vending machines; lockers at the entrance hold everything else. Nitroglycerin is the only medication allowed in.',
    schedulingRule:
      'The incarcerated person adds visitors to their approved list (up to 9 adults), with background checks at approval and again at every entry. In-person visits follow each facility\'s monthly housing-unit schedule with no appointment; video visits are booked at least 24 hours ahead through Securus.'
  },
  de: {
    system: 'DDOC',
    title: 'Statewide rules that apply at every Delaware DOC prison',
    guideHref: '/states/delaware/guides/visiting/',
    guideLabel: 'Visiting in Delaware',
    dressCode: [
      'No bathing suits, body suits, strapless or low-cut tops, sleeveless shirts, or tube tops; nothing see-through or revealing — staff have the final say.',
      'Dresses, skirts, culottes, and walking shorts no shorter than two inches above the knee, measured from the bend at the back of the knee.',
      'No spandex pants, shorts, or leggings worn alone; leggings under a skirt are permitted.',
      'Some facilities add more — Baylor and Howard R. Young prohibit open-toe or open-heel shoes, Crocs, and hoodies.'
    ],
    idRule:
      'Photo ID for every visitor (any picture ID suffices for children under 16 at Baylor); at James T. Vaughn the address on the ID must match the address given when booking. Children 14-18 need their own photo ID at Howard R. Young.',
    itemsRule:
      'Car keys and ID, little else — everything else stays secured in the vehicle. Infant items go in a clear baggie; small cash or vending allowances vary by facility.',
    schedulingRule:
      'No application form — visits are booked by calling the facility scheduling line, generally one week ahead, and at some facilities cannot be changed once booked. Background checks before entry can bar visitors (10 years after a past incarceration, 5 after probation).'
  },
  wy: {
    system: 'WDOC',
    title: 'Statewide rules that apply at every WDOC institution',
    guideHref: '/states/wyoming/guides/visiting/',
    guideLabel: 'Visiting in Wyoming',
    dressCode: [
      'Conservative clothing that is not form-fitting or suggestive. Blue jean denim is allowed.',
      'Dresses, skirts, and shorts no more than two inches above the middle of the kneecap, slits included; wrap-around skirts are not permitted.',
      'No exposed chest, back, thighs, or midsection — no halter or tube tops, sheer fabrics, low necklines, or crop tops. Undergarments are required.',
      'No hooded sweatshirts in the visiting area; hats, umbrellas, and heavy weather gear stay in a locker or the vehicle.',
      'Individual facilities prohibit additional colors (the penitentiary bans red, orange, and camouflage) — check before traveling. Unless exempted (pregnancy, under 18, documented medical), every visitor entering a secure area passes a full-body scanner.'
    ],
    idRule:
      'Every visitor needs identification — a photo ID for ages 16 and up (exchanged for a visitor badge), and a document such as a birth certificate for younger children.',
    itemsRule:
      'No phones, electronics, or outside food; personal property goes in a locker or the vehicle. Up to $20 in coins or tokens for vending machines (the State Penitentiary takes cards only), plus a published list of baby items.',
    schedulingRule:
      'The incarcerated person starts the visitor application (WDOC Form 531), and the approval decision goes to them — not the visitor. Most visiting is first come, first served on posted facility schedules; arrive within 15 minutes of the session start.'
  },
  ut: {
    system: 'UDC',
    title: 'Statewide rules that apply at every Utah state prison',
    guideHref: '/states/utah/guides/visiting/',
    guideLabel: 'Visiting in Utah',
    dressCode: [
      'Modest, loose-fitting clothing only — no skin-tight or figure-hugging items, including leggings, yoga pants, and form-fitted shirts.',
      'Tops need sleeves that cover the full shoulder, with the cleavage line, back, midriff, and underarms covered at all times; no sheer fabrics or ripped styles.',
      'Dresses, skirts, and shorts must reach the kneecap when standing, slits included.',
      'No plain white, orange, or maroon clothing (what incarcerated people wear), no grey pants with a black shirt or medical scrubs (resemble staff uniforms), and no camouflage or hooded clothing.',
      'Closed-toe shoes required. Every visitor passes a body scanner — underwire bras and clothing with heavy metal or embellishments do not pass.'
    ],
    idRule:
      'Every visitor 16 or older presents a government-issued photo ID, which is held at the entrance in exchange for a visitor card until the visit ends.',
    itemsRule:
      'No phones, electronics, purses, wallets, keys, paper money, or outside food. Lockers are available; vending coins go in a clear bag, and one debit or credit card is allowed.',
    schedulingRule:
      'Visitors apply in advance (processing takes 6-8 weeks, and the application renews annually), then book every visit ahead through the sign-up forms on corrections.utah.gov — no walk-ins. In-person visits run Friday-Sunday.'
  },
  tx: {
    system: 'TDCJ',
    title: 'Statewide rules that apply at every TDCJ unit',
    guideHref: '/states/texas/guides/visiting/',
    guideLabel: 'Visiting in Texas',
    dressCode: [
      'Tight-fitting, revealing, or see-through clothing is not allowed.',
      'Sleeveless shirts and dresses are allowed only if the shoulders stay covered.',
      'Shorts and skirts must be no shorter than three inches above the middle of the knee while standing.',
      'Clothing with profane or offensive images or language is not allowed.',
      'Visitors may not wear all-white clothing (incarcerated people wear white). Sandals and open-toe shoes are allowed.'
    ],
    idRule:
      'Each adult visitor (18 or older) must present a current government-issued photo ID, and at least one ID document must show a current physical address.',
    itemsRule:
      'No cell phones, smartwatches, cameras, other electronics, tobacco, paper money, food, or outside drinks. A small clear bag or change purse and up to $35 in coins for vending machines are allowed.',
    schedulingRule:
      'Visits are booked through the TDCJ Online Visitation Portal, at least one and no more than seven days ahead. One visit per weekend is standard.'
  },
  ca: {
    system: 'CDCR',
    title: 'Statewide rules that apply at every CDCR institution',
    guideHref: '/states/california/guides/visiting/',
    guideLabel: 'Visiting in California',
    dressCode: [
      'Avoid blue denim, orange, bright yellow, khaki, tan, beige, forest or olive green, and camouflage — these match what incarcerated people or staff wear.',
      'No tank tops, tube tops, spaghetti straps, sheer fabric, or low-cut necklines; shoulders should stay mostly covered.',
      'Skirts and shorts must be within two inches of the knee. Leggings on their own usually do not pass.',
      'Closed-toe shoes only — no sandals, flip-flops, or backless shoes.',
      'Underwire bras set off the metal detector; a wireless or sports bra avoids the issue.'
    ],
    idRule:
      'A current government-issued photo ID matching the name on the approved application is required.',
    itemsRule:
      'No cell phones, wallets, other electronics, food, or drinks inside. A small clear bag may hold a car key and vending money in coins and $1 bills, up to the limit the institution posts on its visiting page.',
    schedulingRule:
      'Visitors must be approved on CDCR Form 106 before a first visit, then schedule through the VSA online system. Walk-ins are generally not allowed.'
  }
};
