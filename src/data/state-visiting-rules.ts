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
