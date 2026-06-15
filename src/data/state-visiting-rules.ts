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
  md: {
    system: 'DPSCS',
    title: 'Statewide rules that apply at every Maryland state prison',
    guideHref: '/states/maryland/guides/visiting/',
    guideLabel: 'Visiting in Maryland',
    dressCode: [
      'Dress modestly — no revealing, sheer, or provocative clothing, and nothing that resembles what incarcerated people or staff wear.',
      'Each facility enforces its own visiting dress code and may turn away a visitor who is dressed out of code, so confirm the specific facility\'s rules before traveling.'
    ],
    idRule:
      'Every visitor must be on the incarcerated person\'s approved visitor list, and visitors 16 and older show a valid government-issued photo ID. The incarcerated person generally must serve about 30 days before visits can begin.',
    itemsRule:
      'Bring only what the facility allows — phones, bags, and most personal items are not permitted; a small amount of cash in $1 bills is allowed only where a vending machine is available. Money for the person\'s account is sent through Access Corrections, never handed over at a visit.',
    schedulingRule:
      'Visits are by appointment arranged with each facility (often by email) and confirmed in advance — Maryland has no single statewide online scheduler, and days and hours vary by facility. Maryland also offers free video visits through Microsoft Teams. A newly committed person is processed at a reception/classification center first — women at the Maryland Correctional Institution for Women; men\'s intake is in transition, so confirm the current location.'
  },
  sc: {
    system: 'SCDC',
    title: 'Statewide rules that apply at every SCDC prison',
    guideHref: '/states/south-carolina/guides/visiting/',
    guideLabel: 'Visiting in South Carolina',
    dressCode: [
      'Dress modestly — no revealing, sheer, or provocative clothing, and nothing that resembles what incarcerated people or staff wear.',
      'Each institution enforces its own visiting dress code and may turn away a visitor who is dressed out of code, so confirm the specific institution\'s rules before traveling.'
    ],
    idRule:
      'Every visitor must be on the incarcerated person\'s approved visitor list (the person requests visitors from inside using SCDC Form 19-127; a list holds up to 15 people). Adult visitors show a valid government-issued photo ID at each visit.',
    itemsRule:
      'Bring only what the institution allows — phones, bags, food, and most personal items are not permitted in the visiting room. Money for the person\'s account is sent through the SCDC vendor, never handed over at a visit.',
    schedulingRule:
      'Visits are scheduled in advance through the SCDC (ViaPath/GTL) scheduler at scdoc.gtlvisitme.com, usually on weekends in set time blocks; since June 1, 2025, many South Carolina–licensed adults can register online, while others apply by mail. A newly committed person is held at a reception center first — Kirkland for men, Camille Griffin Graham for women — before transfer.'
  },
  il: {
    system: 'Illinois DOC',
    title: 'Statewide rules that apply at every Illinois state prison',
    guideHref: '/states/illinois/guides/visiting/',
    guideLabel: 'Visiting in Illinois',
    dressCode: [
      'Clothing must be in good taste — nothing gang-related, sexually explicit, or offensive, and nothing that resembles what incarcerated people or staff wear.',
      'Each prison sets its own visiting dress and item rules, so confirm the specific facility\'s rules before traveling, since a visitor who is dressed out of code can be turned away.'
    ],
    idRule:
      'Every visitor must be on the incarcerated person\'s approved visitor list, which the person arranges from inside — staff cannot tell you whether you are on a list. Adult visitors bring two forms of identification, one a state-issued photo ID, along with vehicle information.',
    itemsRule:
      'Bring only what the facility allows — phones, tablets, smartwatches, bags, purses, food, drink, books, and currency are not permitted in the visiting room (lockers are provided); generally only labeled prescribed heart medication or an asthma inhaler may be carried in. Money for the person\'s account is sent through a deposit vendor, never handed over at a visit.',
    schedulingRule:
      'In-person visits are scheduled online through SignUpGenius (the IDOC visitation scheduler); days, hours, and whether a visit is contact or non-contact vary by facility and the person\'s status, so confirm with the specific prison. A newly committed person is processed at a reception and classification center first — the Northern Reception and Classification Center for men, Logan for women — before transfer.'
  },
  az: {
    system: 'ADCRR',
    title: 'Statewide rules that apply at every Arizona state prison',
    guideHref: '/states/arizona/guides/visiting/',
    guideLabel: 'Visiting in Arizona',
    dressCode: [
      'No clothing that is orange, camouflage, sheer, see-through, or open-net; no spandex-like material; and no medical scrubs.',
      'Each complex and unit may add visiting dress and item rules (under Department Order 911), so confirm the specific unit\'s rules before traveling.'
    ],
    idRule:
      'Every visitor must submit an Application to Visit an Inmate and be approved before visiting — a background check applies, and supporting documents are due within about 30 days, so apply well ahead. Adult visitors show a valid government-issued photo ID. Do not apply while the person is still in intake at the Phoenix (Alhambra) or Perryville reception unit.',
    itemsRule:
      'Bring only what the unit allows — generally a photo ID and, where permitted, a small amount of money for vending in a clear container; phones, bags, and gifts are not allowed. Money for the person\'s account is sent through the ADCRR vendor, never handed over at a visit.',
    schedulingRule:
      'Visits are by appointment, and the days, hours, and contact or non-contact rules vary by complex, unit, and the person\'s custody level — confirm them with the specific unit. A newly committed person is held at a reception unit first — Alhambra at ASPC-Phoenix for men, ASPC-Perryville for women — before transfer.'
  },
  ma: {
    system: 'Massachusetts DOC',
    title: 'Statewide rules that apply at every Massachusetts state prison',
    guideHref: '/states/massachusetts/guides/visiting/',
    guideLabel: 'Visiting in Massachusetts',
    dressCode: [
      'Dress modestly and avoid clothing that resembles what incarcerated people or staff wear; no revealing, sheer, or provocative clothing.',
      'Each prison publishes its own visiting dress code and item limits — confirm them with the facility before traveling, since a visitor who is dressed out of code can be turned away.'
    ],
    idRule:
      'Every visitor must be on the incarcerated person\'s approved visitor list and submit a visitor application to the prison; the Department runs a criminal-history check before approval. Adults must show a valid government-issued photo ID at each visit. The incarcerated person can add new visitors only during set windows (the first 15 days of March, July, and November).',
    itemsRule:
      'Bring only a photo ID and what the specific facility allows in the visiting room — phones and bags are not permitted. Money for the person is sent through Access Corrections, never handed over at a visit; confirm each facility\'s item and locker rules before visiting.',
    schedulingRule:
      'Massachusetts has no statewide online visit scheduler — each prison schedules visits by phone and sets its own days and hours, so call the facility to arrange a visit and confirm the schedule. A newly committed person is held at a reception center first — Souza-Baranowski for men, MCI-Framingham for women — before transfer to a permanent prison.'
  },
  mo: {
    system: 'Missouri DOC',
    title: 'Statewide rules that apply at every Missouri state prison',
    guideHref: '/states/missouri/guides/visiting/',
    guideLabel: 'Visiting in Missouri',
    dressCode: [
      'No tight, baggy, transparent, or revealing clothing; skirts, dresses, and shorts must reach the top of the kneecap; and shirts must cover the chest, cleavage, back, stomach, and shoulders.',
      'No camouflage and no gang-related symbols or colors. Dress standards are enforced at the door, so confirm the specific facility\'s current rules before visiting.'
    ],
    idRule:
      'Every visitor must be on the incarcerated person\'s approved visitor list before visiting — apply online through the Missouri DOC visiting application, which requires the person\'s DOC ID number and a background check. Adults show a valid government photo ID; visitors age 13 to 18 show a school or government photo ID, and anyone under 18 must be accompanied by an approved adult.',
    itemsRule:
      'Bring as little as possible: a photo ID and, for the vending machines, coins in a clear bag (food brought into a food visit must be in clear containers). Phones, bags, and gifts are not allowed inside, and money for the person is sent through JPay, never handed over at a visit.',
    schedulingRule:
      'Apply for visits through the Missouri DOC online visiting application (web.mo.gov/doc/pubVisit); each prison sets its own visiting days, hours, and limits, so confirm them with the facility. Up to three visitors may visit at once, plus up to three children age five and under. A newly committed person is held at a reception and diagnostic center — Fulton, Bonne Terre (ERDCC), or St. Joseph (WRDCC) for men, and Vandalia (WERDCC) for women — until transfer to a permanent prison.'
  },
  in: {
    system: 'Indiana DOC',
    title: 'Statewide rules that apply at every Indiana state prison',
    guideHref: '/states/indiana/guides/visiting/',
    guideLabel: 'Visiting in Indiana',
    dressCode: [
      'Dress modestly: no revealing, sheer, see-through, or tight clothing; no shorts, miniskirts, or skirts and dresses above the knee; and no tank tops, halter tops, or bare midriffs.',
      'Do not wear clothing that resembles what incarcerated people or staff wear (for example, all-khaki outfits) or any gang-related attire, and wear appropriate undergarments. Each facility sets and enforces the specific dress code, so confirm it before visiting.'
    ],
    idRule:
      'Every visitor must first register and be approved on the incarcerated person\'s visitor list (up to 12 approved visitors) through ViaPath — visitors are not added at the door — and each visitor age 16 or older must show a valid government-issued photo ID at every visit.',
    itemsRule:
      'Bring only what the facility allows — generally a photo ID and a car key; phones, bags, and gifts are not permitted inside, and money for the person is sent through ViaPath (ConnectNetwork), never handed over at a visit. Confirm the specific facility\'s rules on lockers and any vending.',
    schedulingRule:
      'Register and schedule visits through ViaPath at idoc.gtlvisitme.com; all visit scheduling uses Eastern time, even at facilities in Indiana\'s Central-time zone. Each prison sets its own visiting days, hours, and limits, so confirm them with the facility. A newly committed person is held at a reception center — the Reception-Diagnostic Center in Plainfield for men, Rockville for women — until classification, then transfers to a permanent prison, with limited visiting during reception.'
  },
  tn: {
    system: 'TDOC',
    title: 'Statewide rules that apply at every Tennessee state prison',
    guideHref: '/states/tennessee/guides/visiting/',
    guideLabel: 'Visiting in Tennessee',
    dressCode: [
      'No spandex or transparent or translucent clothing; no sleeveless shirts or tops that expose the chest, midriff, or back; and no camouflage clothing or bandanas.',
      'No flip-flops, shower shoes, or steel-toed shoes, and no excessive jewelry — dress in plain, modest clothing, since a visitor who arrives dressed out of code may be turned away.'
    ],
    idRule:
      'Every visitor, regardless of age, must have an approved visitor application on file before visiting — there is no walk-on visiting, and applications take about 30 days to process. Adult visitors must show a government-issued photo ID.',
    itemsRule:
      'Bring only a photo ID and your car keys or key fob inside — phones, wallets, purses, and smart watches stay in the vehicle. Baby items (diapers and sealed formula or food) are allowed in a clear plastic bag. Money for the person is sent only through JPay or ViaPath, never handed over at a visit.',
    schedulingRule:
      'Each prison sets its own visiting days, hours, and limits, and visits are arranged with the specific facility — Tennessee has no statewide online visit scheduler — so confirm the schedule before traveling. A newly sentenced person is held at a reception center (Bledsoe County for men, the Debra K. Johnson Rehabilitation Center for women) until classification, then transfers to a permanent prison.'
  },
  pa: {
    system: 'PADOC',
    title: 'Statewide rules that apply at every Pennsylvania state prison',
    guideHref: '/states/pennsylvania/guides/visiting/',
    guideLabel: 'Visiting in Pennsylvania',
    dressCode: [
      'No bathing suits, shorts, or extremely short or revealing skirts or dresses; no halter, tube, tank, or spaghetti-strap tops; and nothing sheer, see-through, or ripped.',
      'No spandex or leggings, and no coats, jackets, or hats in the visiting room; a complete set of appropriate undergarments is required, and underwire bras may set off the metal detector.'
    ],
    idRule:
      'Every visitor must first be on the incarcerated person\'s approved visitor list — the incarcerated person adds visitors, so do not contact the prison to add yourself — and adults must show one government photo ID or two non-photo IDs (no photocopies or expired IDs). A minor must be listed on a parent or guardian\'s form (DC-313) and accompanied by that adult.',
    itemsRule:
      'Bring only your ID and, where the prison allows it, coins or a small clear change purse for the vending machines — no phones, bags, or gifts. Money for the person is sent only through JPay, never handed over at a visit; confirm the specific prison\'s vending and locker rules.',
    schedulingRule:
      'All visits — in person and video — are by appointment through the Inmate Visitation System (inmatevisitation.cor.pa.gov), booked 3 to 60 days ahead; each prison sets its own days and hours. A newly committed person is held at a reception center (Camp Hill for men, Muncy for women) until classification, then transfers to a permanent prison.'
  },
  oh: {
    system: 'ODRC',
    title: 'Statewide rules that apply at every Ohio state prison',
    guideHref: '/states/ohio/guides/visiting/',
    guideLabel: 'Visiting in Ohio',
    dressCode: [
      'No see-through, torn, or ripped clothing (no skin showing through); no halter, tube, crop, tank, or muscle tops, and nothing that exposes undergarments; skirts, dresses, and shorts must be no higher than mid-knee.',
      'No skin-tight clothing — leggings, jeggings, spandex, or tights — and no wrap-around or break-away garments; appropriate undergarments are required, and underwire bras or hairpins may set off the metal detector and delay entry.',
      'No gang-related, obscene, or offensive clothing. If a visitor arrives dressed out of code, the prison must offer alternative clothing (such as a scrub shirt) rather than turn the visitor away.'
    ],
    idRule:
      'Every visitor must first be approved on the person\'s visiting list (apply on form DRC-2096 with a copy of a photo ID; minors use form DRC-2238 with a birth certificate). A person may have up to 15 approved adult visitors, no more than two of whom may be friends. Approved visitors register at gtlvisitme.com and show photo ID at every visit.',
    itemsRule:
      'Leave phones, smart watches, purses, bags, and strollers behind — they are not allowed inside; a clear diaper bag with limited baby items is permitted. Money for the person is sent through ViaPath, never handed over at a visit; confirm with the facility whether any vending money or card is allowed.',
    schedulingRule:
      'Visits must be reserved in advance through ViaPath (gtlvisitme.com); each prison sets its own visiting days, hours, and limits, so confirm them with the specific facility. A newly received person in reception has restricted visiting and transfers to a permanent prison after classification.'
  },
  ga: {
    system: 'GDC',
    title: 'Statewide rules that apply at every Georgia state prison',
    guideHref: '/states/georgia/guides/visiting/',
    guideLabel: 'Visiting in Georgia',
    dressCode: [
      'Shirts must cover the chest, shoulders, back, and waist; women\'s slacks, dresses, or skirts may be no more than two inches above the knee, and a complete set of foundation garments (bra, slip, and underwear) is required.',
      'No tank, halter, tube, or thin-strap tops, nothing sheer or transparent, and nothing that bares the midriff.',
      'No shorts or above-the-knee slacks for anyone 12 or older (children under 12 may wear shorts); shoes are required for every visitor.'
    ],
    idRule:
      'Every visitor must first be approved on the person\'s visiting list — apply on GDC\'s Application for Visitation Privilege, mailed to the prison (the warden has 14 working days to decide) — and visitors 16 and older must show a government-issued photo ID, which is held during the visit. The visiting list can be changed only when the person reaches a permanent facility or during May or November.',
    itemsRule:
      'Bring only a photo ID, a car key, and up to $20 in coins (or a vending debit card where accepted). No outside food or drink (store-bought baby formula is the exception), and no phones, cameras, or bags; money for the person is sent through JPay, never handed over at a visit.',
    schedulingRule:
      'Visits are by appointment through GDC\'s online portal, on Saturdays, Sundays, and state holidays in two-hour blocks; requests for a given week are accepted Monday through Wednesday. A newly received person in diagnostic status is generally not eligible for visits until reaching a permanent prison.'
  },
  al: {
    system: 'ADOC',
    title: 'Statewide rules that apply at every Alabama state prison',
    guideHref: '/states/alabama/guides/visiting/',
    guideLabel: 'Visiting in Alabama',
    dressCode: [
      'No tan clothing or anything that looks tan, and no scrub-style clothing — both resemble what inmates wear (Alabama inmates wear white, and minimum-custody clothing is tan or white).',
      'Dresses, skirts, and pants must be no shorter than three inches above the knee (including any slit), and trousers must be at least ankle-length; no shorts, stretch pants, or tight, sheer, or see-through clothing.',
      'No sundresses or sleeveless tops — blouses and shirts must cover the waist and chest — and a complete set of undergarments is required.',
      'No hats, caps, scarves, or headbands (religious headwear needs advance written approval); no sunglasses unless prescribed and no smart glasses; jewelry limited to a wedding set and simple stud earrings; no house, shower, or beach shoes.'
    ],
    idRule:
      'Every adult visitor must be on the inmate\'s approved list (built with Form 303-A) and show a government-issued photo ID — a driver\'s license, state ID, military ID, or immigration ID. An inmate may have up to eight approved adult visitors at a time.',
    itemsRule:
      'Each visitor may bring up to $30 (in change or on a $30 debit card) for the vending machines, plus a photo ID and car keys, in a clear plastic bag — and nothing else. Phones and electronics, purses and bags, tobacco, and weapons are prohibited; parents may bring a few baby items.',
    schedulingRule:
      'There is no statewide schedule and ADOC does not post visiting hours online, so confirm days and hours with the specific prison. Under the 2025 rules, all visits must be pre-scheduled and approved, and a newly arrived inmate may face up to a 60-day wait before visits can begin.'
  },
  ar: {
    system: 'ADC',
    title: 'Statewide rules that apply at every Arkansas state prison',
    guideHref: '/states/arkansas/guides/visiting/',
    guideLabel: 'Visiting in Arkansas',
    dressCode: [
      'No white or camouflage clothing — both resemble what inmates wear (Arkansas inmates wear white).',
      'Shoulders must stay covered: no sleeveless shirts, tank tops, or halter tops, and no shorts, miniskirts, or short dresses.',
      'No see-through clothing, leggings, or jeggings, and nothing low-cut or otherwise provocative; children 10 and under may wear shorts of an appropriate length.',
      'Avoid metal in clothing and accessories (underwire, buckles, snaps), which can stop you from clearing the metal detector; the authoritative dress code is printed on the back of the visitation form.'
    ],
    idRule:
      'Every visitor must be approved on the inmate\'s visiting list first — the inmate mails the application form to the visitor (it is not available online or from staff), and a criminal-history check is run on each applicant. Visitors 12 and older must show a government-issued photo ID.',
    itemsRule:
      'Bring a clear plastic bag with a small amount of cash for the vending machines (some units are moving to coins or debit and credit cards only), prescription medication in the visitor\'s name, a photo ID, car keys, and baby items. Phones, tobacco, and other items must stay locked in the vehicle.',
    schedulingRule:
      'Visits are pre-scheduled, not walk-in — request an appointment through the state TeleGov portal or by calling the unit\'s Visitation Clerk. Routine visits are on weekends, and how many visits a month a person gets depends on the inmate\'s class level; ADC does not post per-unit hours online, so confirm with the unit.'
  },
  ne: {
    system: 'NDCS',
    title: 'Statewide rules that apply at every Nebraska state prison',
    guideHref: '/states/nebraska/guides/visiting/',
    guideLabel: 'Visiting in Nebraska',
    dressCode: [
      'Open-toe shoes are allowed, but footwear must be in good repair and worn at all times.',
      'Undergarments are required — for women, one bra and one pair of underwear; for men, one pair of underwear — and no multiple layers.',
      'Shorts, skirts, and dresses must reach at or below the knee when standing; shirts and dresses must cover the shoulders, with no visible cleavage and no low-cut back.',
      'No tight, see-through, or revealing clothing, and nothing with profane or offensive words or images.',
      'You may not wear khaki pants and a khaki shirt at the same time — that resembles what incarcerated people wear.',
      'No hats, headbands, hoods, or outerwear (clergy may wear religious headwear), and no watches or fitness trackers; a lightweight jacket or sweater is allowed only if it has no pockets.'
    ],
    idRule:
      'Every visitor must be approved on the incarcerated person\'s list first — the person mails out a Visitation Request Form. Adults and visitors 16 and older show a government photo ID at every visit; minors 18 and under bring a birth certificate to the first visit and must be with an approved adult 19 or older.',
    itemsRule:
      'Lock everything in your vehicle or a facility locker — only a photo ID, up to $20 in coins per visitor for vending (where allowed), prescription glasses, and limited infant items in a clear bag are permitted. Phones, smartwatches, and other electronics are barred, and bringing one in is a crime.',
    schedulingRule:
      'After approval, schedule online at corrections.nebraska.gov (the facility\'s "Schedule a Visit" page) at least 7 days ahead and up to 4 weeks out; each facility sets and posts its own visiting days and hours.'
  },
  ct: {
    system: 'Connecticut DOC',
    title: 'Statewide rules that apply at every Connecticut correctional facility',
    guideHref: '/states/connecticut/guides/visiting/',
    guideLabel: 'Visiting in Connecticut',
    dressCode: [
      'Dress with reasonable modesty — no revealing, seductive, or offensive clothing, and nothing staff consider a safety or security risk.',
      'No watches of any kind, for any visitor (including attorneys).',
      'Avoid metal in clothing and accessories — underwire, belts, jewelry, hair clips, body piercings, and metal-toed shoes can stop you from clearing the metal detector and lead to denied entry.',
      'Connecticut does not publish a detailed list of banned colors or styles, so confirm any specifics with the facility before traveling.'
    ],
    idRule:
      'Every visitor 18 or older shows valid government-issued photo ID at each visit (driver\'s license, state ID, military ID, passport, or permanent resident card), and a child\'s accompanying adult brings the child\'s birth certificate plus one other document with the child\'s name. Every visitor must be approved on the inmate\'s visiting list first.',
    itemsRule:
      'Almost nothing comes into the visit room — no phones, electronics, food, purses, or coats (the one exception is a clear bottle, a small cloth, and a pacifier for an infant). Nothing may be passed to the inmate; lockers are available at some facilities at your own risk, and money goes to the Inmate Trust Fund, never through the visit.',
    schedulingRule:
      'Connecticut runs a unified system, so these rules cover both pretrial and sentenced people, and days and hours are set by each facility. Since 2024, general-population in-person visits at most facilities are first come, first served, while visits for restrictive-status inmates and all video visits are scheduled through the DOC online request form.'
  },
  mi: {
    system: 'Michigan DOC',
    title: 'Statewide rules that apply at every Michigan state prison',
    guideHref: '/states/michigan/guides/visiting/',
    guideLabel: 'Visiting in Michigan',
    dressCode: [
      'Visitors must be fully dressed in clean clothing in good repair, with required undergarments — including a bra for anyone with breast tissue — and footwear at all times.',
      'Nothing that exposes a lot of skin: no see-through clothing, no tube or halter tops, and skirts, dresses, and shorts no more than three inches above the knee — and no shorts of any kind.',
      'No extreme form-fitting outer clothing such as yoga pants, tights, jeggings, or unitards, and nothing that exposes undergarments.',
      'No hooded garments, coats, jackets, gloves, or sunglasses in the visiting room (blazers, suit coats, and sweaters are allowed); jewelry is limited to about ten pieces, and religious head coverings are allowed but may be searched.'
    ],
    idRule:
      'Every visitor must already be on the prisoner\'s approved list (each visitor files a CAJ-103 application), and adults present a government photo ID at every visit; a minor without photo ID brings a birth certificate or court order.',
    itemsRule:
      'Almost nothing comes into the visit room — the only items allowed are a locker key, the visitor pass, a photo ID, and a prepaid MDOC vending card (up to $30 per person; no cash). Phones and electronics are prohibited, and lockers are provided in the lobby.',
    schedulingRule:
      'Visits are by appointment only — no walk-ins — booked through the ViaPath system between 48 hours and 7 days ahead. Days, hours, and the number of visits allowed each month are set by each facility and the prisoner\'s security level, and there are no personal visits during the first months after intake.'
  },
  co: {
    system: 'CDOC',
    title: 'Statewide rules that apply at every Colorado state prison',
    guideHref: '/states/colorado/guides/visiting/',
    guideLabel: 'Visiting in Colorado',
    dressCode: [
      'No clothing that is solid green, gray, orange, white, yellow, or camouflage, or that otherwise resembles what incarcerated people wear — Colorado prison uniforms are green.',
      'Pants, skirts, and dresses must reach at least the top of the knee; no shorts of any kind and no cargo pants, and nothing tight or form-fitting such as leggings, spandex, or yoga pants.',
      'Nothing sheer, ripped, or revealing — no exposed cleavage, back, or midriff when standing, sitting, or bending, and no spaghetti- or thin-strap tops; appropriate undergarments are required and must not be visible.',
      'No hats, hoods, gloves, scarves, or coats in the visiting room (religious head coverings excepted), nothing showing gang, drug, profane, or offensive images, and jewelry limited to a wedding set, one religious medallion, and medical-alert items.'
    ],
    idRule:
      'Every visitor 18 or older shows a valid, unexpired government-issued photo ID — the physical card, not a photocopy or digital ID — and must already be on the incarcerated person\'s approved list, which is capped at 12 adults (minors do not count).',
    itemsRule:
      'Almost nothing comes into the visit room. The only item allowed for purchases is one debit or credit card for the vending machines — no cash or coins — and phones, watches, and other electronics are prohibited; prescription medication must be in its original labeled container.',
    schedulingRule:
      'Each visitor applies to the facility where the person is held, and visits are generally by appointment, with days and hours set by that prison — there is no single statewide schedule, so confirm the facility\'s process and book ahead before traveling.'
  },
  or: {
    system: 'ODOC',
    title: 'Statewide rules that apply at every Oregon state prison',
    guideHref: '/states/oregon/guides/visiting/',
    guideLabel: 'Visiting in Oregon',
    dressCode: [
      'Footwear and undergarments are required; undergarments must not be visible through clothing, and underwire bras are not allowed because they trigger the metal detector.',
      'No blue clothing or blue denim of any kind, and nothing camouflage — both resemble what adults in custody and staff wear.',
      'Dresses, skirts, and shorts must reach the knee when standing; nothing sheer, see-through, low-cut, tight, or revealing, and no halter, tube, or crop tops.',
      'No hats or head coverings except religious ones (which may be inspected), and nothing with gang symbols or with offensive or suggestive words or images.'
    ],
    idRule:
      'Every visitor must already be on the adult in custody\'s approved list (a records check is run on anyone 15 or older). Adults bring a government-issued photo ID for a contact visit; a visitor without photo ID may be limited to a non-contact visit.',
    itemsRule:
      'Almost nothing comes into the visit room — no phones, electronics, tobacco, or vaping. Visitors may bring a small amount of change for vending (commonly $15 to $20 — confirm with the facility), up to five photos, and a car key; lockers hold the rest.',
    schedulingRule:
      'The adult in custody builds the visiting list with the CD-50 application, and every visitor must be approved before scheduling. Whether visits are by appointment or first-come — and the days and hours — vary by facility, so confirm the specific prison\'s process before traveling.'
  },
  nj: {
    system: 'NJDOC',
    title: 'Statewide rules that apply at every New Jersey state prison',
    guideHref: '/states/new-jersey/guides/visiting/',
    guideLabel: 'Visiting in New Jersey',
    dressCode: [
      'Tops must cover the shoulders and midriff — no tank, tube, halter, or low-cut tops, and nothing transparent, fishnet, skin-tight, or hooded.',
      'Bottoms must cover from the waist to the knee — shorts must be Bermuda-style ending at the knee, and skirts and dresses must reach the knee when seated; no cargo-style pants, and nothing low-rise that exposes the midriff or buttocks.',
      'Nothing resembling what incarcerated people, officers, or other workers wear — no military or uniform-style clothing, and nothing in khaki, orange, gray, or camouflage.',
      'No hats or headgear (except religious or medical), no flip-flops, backless sandals, wheeled shoes, or steel-toed boots, and nothing with offensive or illegal-activity messages.'
    ],
    idRule:
      'Every adult visitor needs a photo ID — a driver\'s license, state non-driver ID, passport, photo Medicaid card, or employer photo ID (a Social Security card is not accepted). Every visitor, adult or child, must be on the incarcerated person\'s approved list.',
    itemsRule:
      'Almost nothing comes into the visit room — no phones, money (cash or coin), purses, photos, or food. A clear plastic or zip-lock bag may hold authorized items, and lockers are provided; life-sustaining medication such as an inhaler is handed to the visit supervisor.',
    schedulingRule:
      'The incarcerated person designates the visitors, and everyone must be on the approved list (a criminal record must be disclosed but is not an automatic bar). Visits are by appointment only — scheduled with the facility at least 48 hours ahead — and the number of visitors allowed at once varies by facility (commonly up to four adults plus children, sometimes fewer).'
  },
  va: {
    system: 'VADOC',
    title: 'Statewide rules that apply at every Virginia state prison',
    guideHref: '/states/virginia/guides/visiting/',
    guideLabel: 'Visiting in Virginia',
    dressCode: [
      'Clothing must cover from the neck to the kneecaps. Underwear is required, and footwear is required — bare feet are not allowed.',
      'No form-fitting clothing — leggings, spandex, jeggings, or leotards — unless worn under clothing that meets the code; no tube, tank, or halter tops unless covered.',
      'Nothing that exposes the midriff, side, back, or cleavage, nothing see-through, and no mini-skirts, dresses, shorts, skorts, or culottes at or above the kneecap.',
      'Nothing resembling what incarcerated people wear, and nothing with gang, racist, or inappropriate symbols. No watches or wearable technology; umbrellas stay in the vehicle.'
    ],
    idRule:
      'Every approved adult visitor shows a valid government-issued photo ID, held until the visit ends, with the name matching the application. A minor is vouched for by the approved adult they come with (plus a notarized parental statement if that adult is not the parent or guardian).',
    itemsRule:
      'No food, drinks, or vending money — visitors bring little beyond ID, and coats and bags go in a storage area. Medication a visitor must keep on them needs a doctor\'s note and approval at least a week ahead. What else may be brought in varies by facility.',
    schedulingRule:
      'Every visitor applies online and clears a background check through the Central Visitation Unit (the incarcerated person no longer keeps a list); approval lasts three years. Visits are booked through the online scheduler up to 14 days ahead — one visit per weekend — and a newly arrived person cannot have visits for their first 60 days.'
  },
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
  },
  wv: {
    system: 'WV DCR',
    title: 'Statewide rules that apply at every West Virginia state prison',
    guideHref: '/states/west-virginia/guides/visiting/',
    guideLabel: 'Visiting in West Virginia',
    dressCode: [
      'West Virginia does not ban any clothing color for visitors, but dress must be modest: female visitors must wear a bra (underwire is not allowed because it will not clear the metal detector), and male visitors must wear a shirt.',
      'No shorts, sleeveless tops, or tight, sheer, see-through, low-cut, or midriff-baring clothing, and no hats or head coverings.',
      'No steel- or composite-toe shoes; jewelry is limited to a wedding ring (no watches), and anything with metal or metallic beads may not clear the detector.',
      'Undergarments are required, and the shift commander has the final say on whether an outfit is appropriate.'
    ],
    idRule:
      'Every visitor must be on the inmate\'s approved list first — the inmate mails the visitor an Application to Visit, which is approved after a background check; an inmate may have up to six approved adult visitors. Each adult brings a government-issued photo ID (driver\'s license, state ID, passport, or military ID — not a Social Security or printable card). A minor needs a birth certificate and, if not with a parent or guardian, a notarized Juvenile Visitation Form.',
    itemsRule:
      'Almost nothing comes into the visit room — no phones, purses, bags, or tobacco; secure them in your vehicle or a lobby locker. There is no visitor vending and no food or drink in the visiting area. A parent may bring limited baby items (one clear bottle, a few diapers, a carrier).',
    schedulingRule:
      'At the state prisons, visits are on Saturdays and Sundays between 8:00 a.m. and 4:00 p.m., and the incarcerated person schedules them in advance — there is no walk-in visiting and no public online booking, so confirm the facility\'s specific times. Prison visits are contact visits; the regional jails, by contrast, are non-contact.'
  }
};
