// Per-state family/advocacy/ministry organizations shown on each state overview page.
// Generated from outreach/state-nonprofits.csv (verified links only); strictly-reentry
// orgs are excluded. Independent orgs — not affiliated with this site. To update, edit
// the spreadsheet and regenerate, or edit here directly.

export interface StateOrg {
  name: string;
  url: string;
  description: string;
}

export const stateOrganizations: Record<string, StateOrg[]> =
{
  "alabama": [
    {
      "name": "Aid to Inmate Mothers (AIM)",
      "url": "https://inmatemoms.org/",
      "description": "Founded 1987, AIM provides services to Alabama's incarcerated women with an emphasis on strengthening bonds between incarcerated mothers and their children — including monthly visitation transportation, the Storybook Program, parenting/life-skills classes, reentry preparation, and case management for the guardians caring for the children. Serves Tutwiler Prison for Women, the Tutwiler Annex, Birmingham Work Release, and the Montgomery Women's Facility."
    },
    {
      "name": "Alabama Appleseed Center for Law and Justice",
      "url": "https://alabamaappleseed.org/",
      "description": "Statewide justice-reform nonprofit focused on mass incarceration; provides post-conviction and parole representation, runs a reentry program (housing, employment, case management), and pushed the 2024 legislation (SB322) that created a dedicated family-services unit at the Alabama DOC for families with incarcerated relatives."
    },
    {
      "name": "Alabamians for Fair Justice",
      "url": "https://alabamafairjustice.org",
      "description": "A coalition of individuals directly impacted by the criminal-justice system, plus supporting organizations, advocating evidence-based solutions to Alabama's prison crisis."
    },
    {
      "name": "Alabama Justice Ministries Network (AJMN)",
      "url": "https://ajmn.org/",
      "description": "Birmingham-based faith-based nonprofit that works primarily with Alabama state prisons and metro Birmingham jails, networking prison-ministry and reentry efforts across the state."
    }
  ],
  "alaska": [
    {
      "name": "Alaska Reentry Partnership (Alaska Reentry Network)",
      "url": "https://www.akreentry.org/",
      "description": "Statewide collaboration of individuals, organizations, advocates, and public entities supporting success before, during, and after incarceration; coordinates Alaska's nine regional reentry coalitions (Anchorage, Mat-Su, Fairbanks, Kenai, Juneau, Dillingham, Nome, Ketchikan, Kodiak) and advocates on reentry policy including family reunification."
    },
    {
      "name": "Alaska Native Justice Center (ANJC)",
      "url": "https://anjc.org/",
      "description": "Anchorage statewide nonprofit (est. 1993) addressing the disproportionate victimization and incarceration of Alaska Native people through civil legal services, victim advocacy, and justice programming. (Its adult/youth reentry case-management programs transferred to CITC in 2024; ANJC remains an active legal-services and advocacy partner.)"
    }
  ],
  "arizona": [
    {
      "name": "American Friends Service Committee — Arizona (AFSC-AZ)",
      "url": "https://afscarizona.org/",
      "description": "Established 1981 as one of Arizona's only prisoner-advocacy organizations; documents prison conditions and advocates statewide policy change, explicitly organizing \"directly impacted\" people — defined to include not only current and formerly incarcerated people but also their families, friends, and communities."
    },
    {
      "name": "Middle Ground Prison Reform",
      "url": "https://www.middlegroundprisonreform.org/",
      "description": "All-volunteer nonprofit (since 1983) doing public education, legislative advocacy, litigation, and social-service referral to protect the constitutional rights of Arizona prison and jail inmates and their loved ones; serves as a clearinghouse for prisoners and their supporters (receives 30–45 emails/day from prisoners' families)."
    },
    {
      "name": "Gina's Team",
      "url": "https://ginasteam.org/",
      "description": "Volunteer-run 501(c)(3) (founded 2009, named for Gina Marie Panetta and co-founded by her parents) providing free leadership and self-reliance programming to incarcerated women at Arizona's Perryville prison to prepare them for successful reentry."
    }
  ],
  "arkansas": [
    {
      "name": "decARcerate Arkansas",
      "url": "https://www.decarceratear.org/",
      "description": "Little Rock-based nonprofit working to end mass incarceration in Arkansas through community education, organizing, policy advocacy, and court monitoring; organizes formerly incarcerated people and centers the stories of those directly impacted, and runs an \"End Solitary\" campaign supporting people in solitary confinement."
    },
    {
      "name": "Arkansas Justice Reform Coalition",
      "url": "https://www.arjusticereform.org/",
      "description": "Fayetteville-based coalition working to end mass incarceration, explicitly \"led by the voices of the families and individuals of those directly impacted,\" focused on prevention of harm and alternatives to incarceration."
    },
    {
      "name": "Returning Home Reentry Center",
      "url": "https://www.returninghomenwa.com/",
      "description": "Northwest Arkansas faith-based 501(c)(3) (Springdale/Huntsville) focused on \"repairing lives and restoring families\" of people who are imprisoned or returning home; runs a male transitional-living program (housing, food, case management, mental-health counseling, employment prep) and a substance-abuse/community-rebuilding program."
    },
    {
      "name": "Pathway to Freedom, Inc.",
      "url": "https://www.ptfprison.org/",
      "description": "Christ-centered Arkansas nonprofit running an 18–24-month voluntary pre-release program inside the Arkansas DOC plus 12 months of post-release church/volunteer mentoring, with a stated aim of reducing the detrimental effect of crime on the families and children of those incarcerated."
    }
  ],
  "california": [
    {
      "name": "Friends Outside",
      "url": "https://friendsoutside.org/",
      "description": "Statewide California nonprofit (since 1955) that staffs hospitality/visitor centers at California prisons and provides family-liaison services and reentry services, with a focus on supporting children and families affected by a parent's incarceration (including help with children's visits)."
    },
    {
      "name": "Legal Services for Prisoners with Children (LSPC) / All of Us or None",
      "url": "https://prisonerswithchildren.org/",
      "description": "Oakland-based 501(c)(3) that organizes communities affected by the justice system and advocates to release incarcerated people, restore rights, and reunify families; also home to All of Us or None, a grassroots civil-rights organization of formerly and currently incarcerated people and their families. (Provides manuals/referrals, not individual case representation.)"
    },
    {
      "name": "Root & Rebound",
      "url": "https://rootandrebound.org/",
      "description": "Oakland-based reentry legal-advocacy nonprofit that delivers legal knowledge and skills to people in reentry and the families, agencies, and communities that support them — via a weekly reentry hotline, mobile legal clinics, workshops/trainings, and the \"Roadmap to Reentry\" California legal guide."
    },
    {
      "name": "Initiate Justice",
      "url": "https://initiatejustice.org/",
      "description": "Los Angeles-based nonprofit working \"to end incarceration by activating the power of the people it directly impacts,\" centering currently and formerly incarcerated people and their families through policy advocacy, leadership development (Institute of Impacted Leaders), and rights restoration."
    },
    {
      "name": "CDCR Statewide Inmate Family Council (SIFC) + per-prison Inmate Family Councils (IFCs)",
      "url": "https://www.cdcr.ca.gov/sifc/",
      "description": "A CDCR-recognized advisory body of family members of incarcerated people that works jointly with CDCR to improve communication and resolve systemic visiting/family issues; the statewide council (SIFC) holds quarterly meetings and feeds information to local Inmate Family Councils (IFCs) at individual prisons. A direct conduit to organized California prison families."
    },
    {
      "name": "Centerforce",
      "url": "https://www.centerforce.ngo/",
      "description": "California nonprofit (founded 1977 to shelter families visiting San Quentin) that operates prison visitor centers across the state — including transportation and drop-in childcare — and provides health education, resource navigation, and reentry support for people impacted by incarceration and their families."
    },
    {
      "name": "Anti-Recidivism Coalition (ARC)",
      "url": "https://antirecidivism.org/",
      "description": "Statewide California nonprofit (offices in Los Angeles and Sacramento) that empowers formerly and currently incarcerated people through reentry services (case management, housing, employment, mentorship), in-prison programs, and policy advocacy driven by currently/formerly incarcerated members, youth, and their families."
    }
  ],
  "colorado": [
    {
      "name": "Colorado-CURE (Citizens United for the Rehabilitation of Errants)",
      "url": "https://www.coloradocure.org/",
      "description": "A 501(c)(3) correctional-reform advocacy organization whose membership explicitly includes incarcerated people, parolees, and their family members; it provides members information and tools to understand the criminal justice system and advocate for change."
    },
    {
      "name": "New Horizons Ministries",
      "url": "https://newhorizonsministries.com/",
      "description": "A Cañon City-based Christian ministry serving Colorado families impacted by chronic imprisonment, with dedicated programs for incarcerated adults, parents impacted by incarceration, and children of incarcerated parents (foster care, Kids Clubs, summer camps)."
    },
    {
      "name": "Colorado Criminal Justice Reform Coalition (CCJRC)",
      "url": "https://www.ccjrc.org/",
      "description": "Founded 1999, a statewide reform coalition of people convicted of crime, survivors of crime, and the families and allies of both; publishes family-facing resources such as \"Tell Them You Love Them,\" a guide for incarcerated parents in Colorado."
    },
    {
      "name": "Connections Prison Ministry",
      "url": "https://connectionsprisonministry.org/",
      "description": "A Colorado Springs-based nonprofit Christian ministry that builds relationships with incarcerated men and women in most Colorado prisons and their families, then helps with employment, transportation, housing, clothing, food, mentorship, and church connections."
    },
    {
      "name": "Kairos of Colorado",
      "url": "https://www.kairosofcolorado.org/",
      "description": "The Colorado chapter of Kairos Prison Ministry International, a lay-led interdenominational Christian prison ministry serving prisoners and their families across several Colorado facilities; its Kairos Outside program specifically serves women who have a loved one incarcerated."
    }
  ],
  "connecticut": [
    {
      "name": "CLICC (Connecting through Literacy: Incarcerated Parents, their Children and Caregivers)",
      "url": "https://www.connectingfamilies.org/",
      "description": "A Connecticut nonprofit (501(c)(3) since 2020) that strengthens relationships between incarcerated parents and their children through a literacy-and-mentoring program — parent and child read the same child-selected books and meet weekly with separate mentors. Works with parents at Connecticut DOC facilities including York CI and several men's facilities."
    },
    {
      "name": "Stop Solitary CT",
      "url": "https://stopsolitaryct.org/",
      "description": "A Connecticut coalition working to end solitary confinement and abuse in the state's prisons and to improve conditions for incarcerated people; instrumental in the 2021 closure of Northern CI and passage of the 2022 PROTECT Act creating independent DOC oversight."
    },
    {
      "name": "Full Citizens Coalition",
      "url": "https://www.fullcitizenscoalition.org/",
      "description": "A Connecticut action group, staffed largely by formerly incarcerated people, focused on undoing felony disenfranchisement, restoring voting rights, and civic education in directly-impacted communities."
    }
  ],
  "delaware": [
    {
      "name": "Delaware Center for Justice",
      "url": "https://dcjustice.org/",
      "description": "A Wilmington-based nonprofit (founded 1920) running adult and youth programs for crime victims and justice-impacted people (reintegration, restoration) alongside policy work on decarceration, sentencing reform, compassionate release, and the collateral consequences of conviction."
    },
    {
      "name": "Prison Outreach of Delaware",
      "url": "https://behindthebars.org/about/",
      "description": "A Christian prison ministry (operating since 1963) providing chaplaincy and discipleship inside Delaware facilities (including James T. Vaughn Correctional Center), running the \"Broken Beginnings\" aftercare program, working with families of incarcerated youth, and distributing a DE DOC Family & Friends Handbook."
    },
    {
      "name": "ACLU of Delaware — Campaign for Smart Justice",
      "url": "https://www.aclu-de.org/campaigns/smart-justice/",
      "description": "The Delaware affiliate's criminal-legal-reform campaign works to reduce the state's prison population, reform probation, and address racial disparities; its Smart Justice Ambassadors program recruits, trains (paid), and empowers Delawareans directly impacted by the justice system."
    }
  ],
  "florida": [
    {
      "name": "Florida Cares Charity Corp. (Florida CARES)",
      "url": "https://floridacarescharity.org/",
      "description": "A West Palm Beach nonprofit dedicated to improving the lives of incarcerated people through public awareness, family support, and education; it educates families on how to navigate the corrections and justice system, runs a public knowledge base (including visitation rules), and operates a help-ticket intake for prison-related concerns."
    },
    {
      "name": "Children of Inmates, Inc.",
      "url": "https://www.childrenofinmates.org/",
      "description": "A South Florida organization that reconnects children with their incarcerated parents through free Bonding Visits and care coordination, plus early-childhood and enrichment programming, serving families in Miami, Jacksonville, Tampa, and other parts of Florida."
    },
    {
      "name": "Florida Rights Restoration Coalition (FRRC)",
      "url": "https://floridarrc.com/",
      "description": "A statewide, member-led organization of returning citizens and directly-impacted family members working to end disenfranchisement and discrimination against people with convictions; led the 2018 Amendment 4 voting-rights campaign and runs a Fines & Fees assistance program plus reentry and decarceration policy advocacy."
    },
    {
      "name": "Exchange for Change",
      "url": "https://www.exchange-for-change.org/",
      "description": "A Miami-based nonprofit (founded 2014) that teaches writing and communication courses inside South Florida prisons and jails and runs anonymous letter exchanges between incarcerated students and students on the outside, also providing re-entry resources."
    },
    {
      "name": "KidsMates, Inc.",
      "url": "https://www.kidsmates.org/",
      "description": "A Boca Raton-based nonprofit, co-founded by children of an incarcerated parent, that supports children of incarcerated parents and their caregivers with resources, a caregiver program (C.A.R.E.S.), awareness materials, and \"KidsMates Visits\" to promote bonding between incarcerated parents and their children."
    }
  ],
  "georgia": [
    {
      "name": "Foreverfamily",
      "url": "https://www.foreverfam.org/",
      "description": "An Atlanta nonprofit supporting and advocating for children with an incarcerated parent in Georgia, with family-centered services including transportation for monthly child-centered prison visits, caregiver support, and youth enrichment programs. Formerly Aid to Children of Imprisoned Mothers."
    },
    {
      "name": "Motherhood Beyond Bars",
      "url": "https://www.motherhoodbeyond.org/",
      "description": "An Atlanta-based statewide nonprofit that supports parents who give birth while incarcerated in Georgia, their newborns, and the caregivers raising those infants, providing essential supplies, benefits navigation, peer support, and reentry/reunification planning."
    },
    {
      "name": "Women on the Rise (Georgia)",
      "url": "https://www.womenontherisega.org/",
      "description": "A Hapeville, GA membership-based organization led by Black formerly incarcerated women that supports formerly incarcerated women and their families through reentry services, biweekly support groups, a Welcome Home Fund, and criminal-justice-reform organizing."
    },
    {
      "name": "Georgia Justice Project",
      "url": "https://www.gjp.org/",
      "description": "An Atlanta nonprofit providing free holistic criminal defense and social services to low-income Georgians in the criminal justice system, criminal-records (expungement/restriction) help to reduce reentry barriers, and statewide policy advocacy."
    }
  ],
  "hawaii": [
    {
      "name": "Hawai'i Friends of Restorative Justice",
      "url": "https://hawaiifriends.org/",
      "description": "Long-running restorative-justice nonprofit that runs Huikahi Reentry Circles — facilitated planning circles bringing together the incarcerated person, their family members, and prison staff to build a written reentry/transition plan; also does training, advocacy, and research."
    }
  ],
  "idaho": [
    {
      "name": "Idaho Justice Project",
      "url": "https://www.idahojusticeproject.org/",
      "description": "Nonpartisan nonprofit (launched 2021) working to reduce the size of Idaho's criminal justice system and reinvest in community-based treatment; conducts research and coalition-building and amplifies the voices of directly-impacted people (notes Idaho's high incarceration rate, including the highest rate for women)."
    },
    {
      "name": "Kairos Prison Ministry of Idaho",
      "url": "https://kairosidaho.org/",
      "description": "Idaho chapter of Kairos Prison Ministry; runs Kairos Inside (in-prison retreats), Kairos Torch (mentoring for incarcerated people under 25), and notably Kairos Outside — a family-support program for the spouses, parents, and relatives of people in prison."
    },
    {
      "name": "Diocese of Boise, Office of Prison Ministry",
      "url": "https://www.dioceseofboise.org/prison-ministry",
      "description": "Catholic prison ministry serving 10+ adult correctional facilities and 4 juvenile facilities across Idaho; states it extends ministry to the families of the incarcerated and to people reintegrating from prison."
    }
  ],
  "illinois": [
    {
      "name": "Restore Justice Foundation",
      "url": "https://restorejustice.org/",
      "description": "Statewide reform org that runs CRIIC (Communities & Relatives of Illinois Incarcerated Citizens) — a support group founded and run by people with incarcerated loved ones — plus Loved Ones Self-Advocacy Training and a newsletter for incarcerated people; visitation rights are a major advocacy focus."
    },
    {
      "name": "Illinois Prison Project",
      "url": "https://www.illinoisprisonproject.org/",
      "description": "Chicago-based nonprofit providing direct legal representation to elderly, disabled, and rehabilitated incarcerated people and advocating for sentencing/criminal-justice reform across Illinois."
    },
    {
      "name": "Lutheran Social Services of Illinois — Prisoner and Family Ministry",
      "url": "https://www.lssi.org/services/prisoner-and-family-ministry/",
      "description": "Statewide ministry (since 1981) running the Storybook Project (records incarcerated parents reading books, mailed with the book to their children) and Visits to Mom (free transportation for children to visit incarcerated mothers); also offers case management and reentry support."
    },
    {
      "name": "John Howard Association of Illinois",
      "url": "https://www.thejha.org/",
      "description": "Independent prison-oversight nonprofit that monitors Illinois prisons, publishes facility reports and surveys, and advocates for humane treatment and transparency; a trusted source of conditions information for families."
    }
  ],
  "indiana": [
    {
      "name": "Use What You've Got Prison Ministry",
      "url": "https://www.usewhatyouvegotministry.org/",
      "description": "Indianapolis nonprofit (founded 1988) that provides shuttle-bus transportation for families and friends to visit incarcerated loved ones in Indiana state, federal, and juvenile facilities; also offers family counseling, support groups, a clothing/food distribution center, and referrals. Strongest direct family-visitation fit in the state."
    },
    {
      "name": "Indiana CURE (Citizens United for the Rehabilitation of Errants)",
      "url": "https://www.indianacure.org/",
      "description": "Grassroots membership org of families of prisoners, incarcerated and formerly incarcerated people, and concerned citizens, advancing fair and humane criminal-justice policy in Indiana; holds public monthly Zoom meetings."
    }
  ],
  "iowa": [
    {
      "name": "Iowa CURE (Citizens United for the Rehabilitation of Errants)",
      "url": "https://iowacure.com/",
      "description": "Membership-based prison-reform org bringing together prisoners, families, and concerned citizens; advocates for humane treatment, sentencing reform, quality indigent defense, and reintegration resources, and provides support to families and inmates."
    },
    {
      "name": "Iowa Justice Action Network",
      "url": "https://iowajusticeactionnetwork.org/",
      "description": "Statewide criminal-justice-reform advocacy group whose members include formerly incarcerated people and their families; tracks legislation, runs \"Tuesdays with IJAN\" sessions and an annual conference, and partners with the affiliated family-focused effort \"Living Beyond the Bars.\""
    }
  ],
  "kansas": [
    {
      "name": "Kansas Appleseed Center for Law and Justice",
      "url": "https://www.kansasappleseed.org/",
      "description": "A statewide nonprofit advocacy organization that uses legislative advocacy, administrative advocacy, and impact litigation on adult and youth justice (including ending juvenile fines/fees and reducing incarceration of youth). Serves on the steering committee of Progeny, a directly-impacted youth/adult justice partnership."
    }
  ],
  "kentucky": [
    {
      "name": "Wanda Joyce Robinson Foundation, Inc.",
      "url": "https://wjrfoundation.org/",
      "description": "A Frankfort-based 501(c)(3), founded 2018 by a formerly incarcerated father, that mentors and supports children of incarcerated parents in Kentucky — running the Amachi mentoring program and \"A Familiar Voice,\" a literacy initiative where incarcerated parents record themselves reading to their children."
    },
    {
      "name": "Bluegrass Families of the Incarcerated",
      "url": "https://www.facebook.com/groups/1871368709660890/",
      "description": "A Lexington-area peer support group for families with a currently or formerly incarcerated loved one; members share resources, learn about the justice system, and support one another through incarceration and reentry (monthly meetings)."
    }
  ],
  "louisiana": [
    {
      "name": "VOTE (Voice of the Experienced)",
      "url": "https://www.voiceoftheexperienced.org/",
      "description": "A New Orleans-based grassroots organization founded and run by formerly incarcerated people, their families, and allies, working to restore the full human and civil rights of people impacted by the justice system through organizing, policy advocacy, and civic engagement; chapters in New Orleans, Baton Rouge, and Lafayette."
    },
    {
      "name": "The Promise of Justice Initiative",
      "url": "https://promiseofjustice.org/",
      "description": "A New Orleans legal-advocacy nonprofit whose Client and Family Assistance Project serves 400+ people across Louisiana's prisons — funding phone calls, organizing group family visits to overcome distance/cost barriers, providing basic necessities, and conducting internal advocacy."
    },
    {
      "name": "Families and Friends of Louisiana's Incarcerated Children (FFLIC)",
      "url": "https://fflic.org/",
      "description": "A statewide grassroots membership organization founded in 2001 by parents (mostly Black mothers) to support families and fight the youth-incarceration system; trains parents and youth as organizers and provides urgent advocacy to families."
    }
  ],
  "maine": [
    {
      "name": "Maine Prisoner Advocacy Coalition (MPAC)",
      "url": "https://www.maineprisoneradvocacy.org/",
      "description": "A statewide coalition whose mission is to support and advocate for Maine's incarcerated people, their families, and friends, and to reduce Maine's use of incarceration; runs mentoring (Pathways to Promise), a residential reentry house (Paco's Place), arts programming, and policy advocacy."
    },
    {
      "name": "Maine Prisoner Re-Entry Network (MPRN) / Rose's Room",
      "url": "https://www.guidestar.org/profile/84-2071370",
      "description": "A Maine reentry nonprofit that runs Rose's Room, a monthly support group for the families and loved ones of incarcerated people (motto: \"Individuals don't go to prison, whole families go to prison\"), alongside reentry and mentor-training programs."
    }
  ],
  "maryland": [
    {
      "name": "Out for Justice, Inc. (OFJ)",
      "url": "https://www.out4justice.org/",
      "description": "A Baltimore grassroots nonprofit founded in 2012 by formerly incarcerated people that engages, educates, and empowers people impacted by the legal system — working with justice-impacted individuals, their friends, and families on policy reform, voter outreach, and reducing collateral consequences."
    },
    {
      "name": "Maryland Alliance for Justice Reform (MAJR)",
      "url": "https://www.ma4jr.org/",
      "description": "A nonpartisan, all-volunteer organization of 2,000+ Marylanders advocating for evidence-based corrections and sentencing reform; explicitly emphasizes that family ties and visitation reduce recidivism and works to help incarcerated people maintain family connections."
    }
  ],
  "massachusetts": [
    {
      "name": "Families for Justice as Healing",
      "url": "https://www.justiceashealing.org/",
      "description": "A Roxbury-based organization led by incarcerated women, formerly incarcerated women, and women with incarcerated loved ones, organizing to end the incarceration of women and girls in Massachusetts. Holds weekly open meetings where people being prosecuted and their families receive support and strategize about their cases."
    },
    {
      "name": "Black and Pink Massachusetts",
      "url": "https://www.blackandpinkma.org/",
      "description": "A Massachusetts abolitionist organization supporting LGBTQI people and people living with HIV through the entire criminal-legal process, with a flagship pen-pal program matching incarcerated people with people in the \"free world,\" plus bail/court support, reentry help, and housing (the Alexia Norena House for transgender people leaving incarceration)."
    },
    {
      "name": "Prisoners' Legal Services of Massachusetts (PLS)",
      "url": "https://plsma.org/",
      "description": "A statewide legal-aid organization that promotes the safe, humane, and lawful treatment of Massachusetts prisoners through civil-rights litigation, advocacy, and a community-engagement program connecting with incarcerated people and their families."
    }
  ],
  "michigan": [
    {
      "name": "Citizens for Prison Reform (CPR)",
      "url": "https://micpr.org/",
      "description": "A Michigan nonprofit that assists and empowers justice-impacted families and individuals through advocacy and education; runs a Family Participation Program (FPP) providing family-to-family advocacy assistance to anyone who reaches out for support."
    },
    {
      "name": "Mothers of Incarcerated Sons Society, Inc. (M.I.S.S.)",
      "url": "https://www.mothersofinmates.com/",
      "description": "A Michigan-based (Redford, MI) 501(c)(3) peer support group founded in 1992 for parents of incarcerated adult children (not limited to sons), offering counseling, phone outreach, holiday cards, an online chat forum, MDOC-regulation information, and prison-reform advocacy."
    },
    {
      "name": "Michigan Collaborative to End Mass Incarceration (MI-CEMI)",
      "url": "https://michigancollaborative.org/",
      "description": "A statewide, non-partisan coalition of 115+ nonprofit, faith-based, grassroots, and service organizations working together to reduce incarceration in Michigan across prevention, sentencing reform, prison conditions, and reentry."
    }
  ],
  "minnesota": [
    {
      "name": "Children of Incarcerated Caregivers",
      "url": "https://cicmn.org/",
      "description": "A Minneapolis nonprofit devoted to the best interests of children when a parent is incarcerated or involved in the criminal-legal system; runs free summer camps and enrichment for affected youth and publishes a Parental Incarceration Resource Guide while pursuing policy change."
    },
    {
      "name": "Twin Cities Prison Ministry (TCPM)",
      "url": "https://www.tcprisonministry.com/",
      "description": "A St. Paul, MN Catholic prison-ministry nonprofit fostering a presence for people affected by incarceration; programs include FISH (Families of the Incarcerated Support and Hope), pen pals, prayer companions, mentoring, and prison retreats."
    }
  ],
  "mississippi": [
    {
      "name": "Mississippi Impact Coalition",
      "url": "https://www.mississippiimpactcoalition.org/",
      "description": "A Jackson, MS organization centering justice-impacted people; provides social support for justice-impacted families (employment assistance, housing navigation, wraparound services, peer mentorship) plus participatory defense and reentry programs."
    },
    {
      "name": "Empower Mississippi",
      "url": "https://empowerms.org/",
      "description": "A Ridgeland, MS nonpartisan nonprofit that prioritizes criminal-justice reform, building coalitions and pursuing policy that reduces the prison population while maintaining public safety; has partnered with prisoner-family groups on Mississippi prison-conditions advocacy."
    }
  ],
  "missouri": [
    {
      "name": "Empower Missouri",
      "url": "https://empowermissouri.org/",
      "description": "A statewide Missouri anti-poverty advocacy nonprofit (founded 1901) whose criminal-justice work includes the Community Justice Coalition and the Clean Slate (automated-expungement) campaign, using policy research, field work, and legislative advocacy to fight mass incarceration."
    },
    {
      "name": "Missouri Kairos (Kairos Outside)",
      "url": "https://www.missourikairos.org/",
      "description": "The Missouri arm of Kairos Prison Ministry; its Kairos Outside program runs 2½-day retreat weekends and ongoing reunion groups for women age 20+ whose lives have been affected by a loved one's incarceration, with continuing peer support (no religious affiliation required to attend)."
    }
  ],
  "montana": [
    {
      "name": "Family Tree Center (Family Tree Nurturing Center)",
      "url": "https://www.familytreecenter.org/",
      "description": "A Billings child-abuse-prevention nonprofit that runs a support group for children of incarcerated parents and offers parenting classes inside prison, plus related family-strengthening services."
    },
    {
      "name": "Montana Innocence Project",
      "url": "https://mtinnocenceproject.org/",
      "description": "University of Montana–based 501(c)(3) (est. 2008) providing pro bono representation to people claiming innocence and advocating for justice-system reform; also publishes Montana reentry resource information for the wrongfully and unjustly incarcerated."
    }
  ],
  "nebraska": [
    {
      "name": "Christian Heritage — Beyond Prison",
      "url": "https://chne.org/bp/",
      "description": "A Nebraska nonprofit whose Beyond Prison program directly serves families affected by incarceration — parenting classes (Inside-Out Dad) and relationship programs inside facilities, plus family advocacy, monthly Family Day gatherings, and individual support for families on the outside."
    },
    {
      "name": "Released and Restored",
      "url": "https://releasedandrestored.org/",
      "description": "A Lincoln-based prison-and-reentry ministry (501(c)(3), founded 2004) that prepares people for release and works specifically to restore family relationships harmed or broken by incarceration; runs in-facility classes statewide."
    },
    {
      "name": "Kairos Prison Ministry of Nebraska",
      "url": "https://www.kairosofnebraska.org/",
      "description": "Nebraska chapter of Kairos Prison Ministry; runs Kairos Inside in state facilities and, notably, Kairos Outside — a retreat program specifically for the spouses, parents, and relatives of incarcerated people."
    }
  ],
  "nevada": [
    {
      "name": "Prison Families Alliance (PFA)",
      "url": "https://prisonfamiliesalliance.org/",
      "description": "A Nevada-based nonprofit (\"The Heart of the Prison Family\") providing peer-to-peer support groups, webinars, and resources for adults and youth who have a loved one in the prison system (incarcerated, parole, or probation); offers in-person meetings in Las Vegas plus online speaker meetings, and maintains a Nevada family-resources directory."
    },
    {
      "name": "Nevada CURE (Citizens United for Rehabilitation of Errants)",
      "url": "http://www.nevadacure.org/",
      "description": "A Las Vegas support-and-advocacy group for people harmed by Nevada's criminal-justice system; provides information to help prisoners and their families navigate the system, publishes a bulletin, answers prisoner mail, and meets with prison leadership on systemic problems."
    }
  ],
  "new-hampshire": [
    {
      "name": "Waypoint (Waypoint NH)",
      "url": "https://waypointnh.org/",
      "description": "A statewide New Hampshire human-services nonprofit (HQ Manchester) that runs the \"Family Ties Inside Out\" program — a partnership with the NHDOC Family Connections Center and NH jails connecting children and caregivers to local family resource centers during a parent's incarceration — and provides resources for caregivers of children of incarcerated parents."
    },
    {
      "name": "Kairos of New Hampshire",
      "url": "https://kairosnh.org/",
      "description": "New Hampshire chapter of Kairos Prison Ministry; runs Kairos Inside in NH prisons and Kairos Outside, a retreat program specifically for the spouses, parents, and relatives of incarcerated people."
    },
    {
      "name": "New Hampshire Center for Justice & Equity (NHCJE)",
      "url": "https://nhcje.org/",
      "description": "A Manchester-based nonprofit advancing racial, economic, and health equity in NH; criminal justice/law enforcement is one of its named sectors of work, and it builds capacity for and convenes the state's justice-focused community organizations."
    }
  ],
  "new-jersey": [
    {
      "name": "Reentry Coalition of New Jersey",
      "url": "https://reentrycoalitionofnj.org/",
      "description": "A statewide coalition connecting individuals leaving the justice system to reentry agencies and resources (employment, housing, mental health, treatment) and promoting evidence-based policy to reduce reoffending through collaboration, education, and advocacy."
    },
    {
      "name": "Salvation and Social Justice (SandSJ)",
      "url": "https://www.sandsj.org/",
      "description": "A Black-led, Trenton-based statewide policy organization working to abolish structural racism through restorative justice, voting-rights restoration for people on probation/parole, sentencing reform, and related criminal-justice-reform campaigns grounded in directly-impacted communities."
    }
  ],
  "new-mexico": [
    {
      "name": "Thresholds Prison Ministry",
      "url": "http://www.thresholdsnm.org/",
      "description": "A reentry mentoring program (a partnership between the Archdiocese of Santa Fe and the NM Corrections Department) that pairs volunteer mentor teams with people transitioning out of prison, beginning shortly before release and continuing for about a year afterward. Serves the Albuquerque and Santa Fe areas."
    },
    {
      "name": "P.B. & J. Family Services, Inc.",
      "url": "https://www.pbjfamilyservices.org/",
      "description": "Albuquerque-based family-services nonprofit whose programs include parenting and family support tied to incarceration (it has historically provided enhanced prison visiting, transportation, parent education, case management, and family reunification support at New Mexico facilities, and runs a parenting program connected to the Metropolitan Detention Center)."
    },
    {
      "name": "New Mexico Prison and Jail Project (NMPJP)",
      "url": "https://nmpjp.org/",
      "description": "Albuquerque legal-advocacy nonprofit that takes on cases of abuse and mistreatment in New Mexico prisons and jails, working to improve treatment and conditions of confinement for incarcerated people statewide."
    }
  ],
  "new-york": [
    {
      "name": "Osborne Association",
      "url": "https://www.osborneny.org/",
      "description": "Statewide New York nonprofit serving people and families affected by the criminal legal system, with direct services at court, in jails and prisons, and at community sites; its FamilyWorks program helps incarcerated parents maintain relationships with their children, and it coordinates the NY Initiative for Children of Incarcerated Parents. Offices in the Bronx, Brooklyn, Buffalo, Newburgh, and elsewhere."
    },
    {
      "name": "Hour Children",
      "url": "https://hourchildren.org/",
      "description": "Long Island City nonprofit serving incarcerated and formerly incarcerated women and their families; provides free family/child prison visitation and transportation, a host-family program for children, parenting programs, housing, and reentry services, and runs the prison nursery program at Bedford Hills Correctional Facility."
    },
    {
      "name": "Correctional Association of New York (CANY)",
      "url": "https://www.correctionalassociation.org/",
      "description": "Independent statutory prison-monitoring nonprofit (founded 1844), authorized under NY Correction Law to inspect state prisons, communicate confidentially with incarcerated people, operate a conditions-reporting hotline, and publish post-visit reports and recommendations."
    }
  ],
  "north-carolina": [
    {
      "name": "Our Children's Place of Coastal Horizons Center",
      "url": "https://coastalhorizons.org/services/justice-services/our-childrens-place/",
      "description": "North Carolina's leading advocacy and education resource focused on children of incarcerated and returning parents; works on education, policy/practice, and family support — including a project to redesign prison visitation spaces to be more child-friendly and the MATCH (Mothers and Their Children) program."
    },
    {
      "name": "NC CURE (Citizens United for Restorative Effectiveness)",
      "url": "https://nccure.org/",
      "description": "Volunteer-staffed grassroots prison-advocacy nonprofit (est. 2007) that advocates against inhumane treatment of incarcerated people and works on conditions of confinement, communication access, and recidivism; corresponds with incarcerated people and families by mail."
    }
  ],
  "north-dakota": [
    {
      "name": "Ministry on the Margins",
      "url": "https://ministryonthemargins.org/",
      "description": "Bismarck-based volunteer ecumenical ministry (founded by Sister Kathleen Atkinson, OSB) that runs prison ministry at the state penitentiary and jails, offers family support when a loved one is incarcerated, and assists with reentry needs (documents, housing, employment, food, and peer support)."
    }
  ],
  "ohio": [
    {
      "name": "Ohio Children of Incarcerated Parents (OhioCIP)",
      "url": "https://www.ohiocip.org/",
      "description": "Statewide collaborative providing resources and evidence-based training (Creating Lasting Family Connections) to support incarcerated parents and their families, including programming within the Ohio Department of Rehabilitation and Correction. Administered through Mansfield UMADAOP and partners."
    },
    {
      "name": "Ohio Justice & Policy Center (OJPC)",
      "url": "https://ohiojpc.org/",
      "description": "Statewide nonprofit public-interest law firm (founded 1997 as the Prison Reform Advocacy Center) protecting the rights and dignity of incarcerated people; its Human Rights in Prison work investigates civil-rights claims in Ohio prisons, and Second Chance / Beyond Guilt focus on records relief and over-punishment. Offices in Cincinnati, Columbus, and Cleveland."
    },
    {
      "name": "Healing Broken Circles",
      "url": "https://www.healingbrokencircles.org/",
      "description": "Columbus nonprofit serving people touched by the justice system; its Fatherhood Program helps incarcerated dads build their relationship with their children and connects families to services, alongside arts-based and youth programs. Has run programming inside Ohio facilities (notably Marion Correctional) and with the Franklin County jail."
    }
  ],
  "oklahoma": [
    {
      "name": "Oklahomans for Criminal Justice Reform (OCJR)",
      "url": "https://okjusticereform.org/",
      "description": "A statewide 501(c)(3) coalition of business and community leaders, service providers, and advocates working to reduce mass incarceration and its generational harm to Oklahoma families through data-driven policy reform. Credited with helping cut the state prison population since 2016."
    },
    {
      "name": "Oklahoma Messages Project (OK Messages Project)",
      "url": "https://okmessagesproject.org/",
      "description": "An Oklahoma City nonprofit whose trained volunteers record incarcerated parents reading books aloud, then mail the recordings and books to roughly 1,000 children per year to maintain the parent-child connection and support literacy."
    },
    {
      "name": "New Hope Oklahoma",
      "url": "https://newhopeoklahoma.org/",
      "description": "A Tulsa-based 501(c)(3) (founded 1992) that provides free after-school programs, summer camps, case management, and community events for Oklahoma children who have a parent in prison."
    },
    {
      "name": "Criminal Justice and Mercy Ministries (CJAMM)",
      "url": "https://www.cjamm.org/",
      "description": "A faith-based nonprofit (a ministry of the Oklahoma Conference of the United Methodist Church) serving people and families affected by incarceration through transitional housing, mentorship, and New Day Camp, a summer program for children of incarcerated parents."
    }
  ],
  "oregon": [
    {
      "name": "Partnership for Safety and Justice",
      "url": "https://safetyandjustice.org/",
      "description": "Oregon's leading criminal-justice reform organization, advancing public-safety policy for people convicted of crime, survivors, and the families of both; \"keeping families together\" is a core value, and they helped secure programs like the Family Sentencing Alternative Program so incarcerated parents can remain connected to their children."
    },
    {
      "name": "Oregon Justice Resource Center (OJRC)",
      "url": "https://www.ojrc.info/",
      "description": "A social-justice nonprofit working to dismantle mass incarceration and systemic discrimination through legal services and advocacy, running the Oregon Innocence Project, Women's Justice Project, Youth Justice Project, Immigrant Rights Project, and Civil Rights Project."
    },
    {
      "name": "Oregon CURE",
      "url": "https://oregoncure.org/",
      "description": "A criminal-justice advocacy nonprofit that directly supports families and friends of people in prison — holding monthly regional support-group meetings and quarterly orientations (in cooperation with the Oregon DOC) for families of recently imprisoned people, plus a quarterly newsletter for members and people in custody."
    },
    {
      "name": "Family Preservation Project (FPP)",
      "url": "https://family-preservation-project.org/",
      "description": "A trauma-informed program supporting children impacted by incarceration, their incarcerated mothers, and caregiving families — offering therapeutic visitations, parenting education, reentry assistance, and policy advocacy (it helped pass Oregon's Bill of Rights for Children of Incarcerated Parents), operating primarily at Coffee Creek Correctional Facility."
    },
    {
      "name": "Kairos Prison Ministry of Oregon",
      "url": "https://kairosoforegon.org/",
      "description": "A Christian prison-ministry nonprofit serving incarcerated people and their families in Oregon; its Kairos Outside program specifically supports the spouses, parents, and relatives of incarcerated people, and Kairos Inside builds faith community inside facilities."
    }
  ],
  "pennsylvania": [
    {
      "name": "Pennsylvania Prison Society",
      "url": "https://www.prisonsociety.org/",
      "description": "Pennsylvania's independent prison-oversight nonprofit (the only organization in the Commonwealth with legal authority to visit any prison or jail). It runs extensive family programs: a subsidized bus service to prisons statewide, free virtual family support groups, and a helpline (~300 calls/month) that helps families navigate visiting policies and schedule in-person and virtual visits."
    },
    {
      "name": "Amachi Pittsburgh",
      "url": "https://amachipgh.org/about-us/",
      "description": "An Allegheny County nonprofit that supports youth affected by a parent's incarceration through mentorship, family-strengthening services, and advocacy, with the goal of helping children of incarcerated parents overcome the challenges of parental incarceration."
    },
    {
      "name": "Straight Ahead",
      "url": "https://straight-ahead.org/about-us/",
      "description": "A Pennsylvania abolitionist organization led by formerly incarcerated and directly-impacted people, working on parole and sentencing reform (death by incarceration, geriatric/long-term parole, solitary confinement); its Survivor Justice Network builds a statewide base of families impacted by homicide and long sentences."
    },
    {
      "name": "Abolitionist Law Center",
      "url": "https://abolitionistlawcenter.org/about-us/",
      "description": "A Pittsburgh- and Philadelphia-based nonprofit public-interest law firm and community-organizing project, led by people directly impacted by the criminal punishment system, that uses litigation and organizing on behalf of incarcerated people and their families across Pennsylvania (solitary confinement, jail/prison conditions, and death-by-incarceration sentencing)."
    }
  ],
  "rhode-island": [
    {
      "name": "Direct Action for Rights and Equality (DARE)",
      "url": "https://daretowin.org/",
      "description": "A grassroots Providence organization (founded 1986) organizing low-income families and communities of color for justice; its \"Behind the Walls\" committee works on prison/criminal-justice reform and supports incarcerated people and their families through court support, a community court-debt fund, and help with probation/home-confinement fees. Formerly incarcerated people and their family members are in its decision-making structure."
    },
    {
      "name": "Rhode Islanders Sponsoring Education (RISE)",
      "url": "https://www.riseonline.org/",
      "description": "A Cranston, RI nonprofit (founded 1997) that provides scholarships and mentoring specifically to children of currently and formerly incarcerated parents, aiming to break the intergenerational cycle of poverty, crime, and addiction."
    },
    {
      "name": "The RI Freedom Collective",
      "url": "https://www.rifreedomcollective.org/",
      "description": "A Rhode Island grassroots prison-reform organization founded by three formerly incarcerated men, focused on legislative advocacy at the State House, public education on rights, and building a support network that elevates the voices of currently and formerly incarcerated people and their families."
    }
  ],
  "south-carolina": [
    {
      "name": "JUMPSTART (JUMPSTART SC)",
      "url": "https://jumpstartsc.org/",
      "description": "Christ-centered South Carolina prison ministry (since 2008) offering an in-prison discipleship program plus a continuum of post-release care — transition mentoring, the Restoration Village housing community, and social-enterprise employment — addressing spiritual, housing, employment, and family-relationship needs."
    },
    {
      "name": "South Carolina for Criminal Justice Reform (SC4CJR)",
      "url": "https://www.sc4cjr.org/",
      "description": "Charleston-headquartered statewide, non-partisan criminal-justice-reform nonprofit whose team includes formerly incarcerated individuals, defense attorneys, prosecutors, and academics; it researches injustices in South Carolina's system, educates the community, and advocates for legislative reform."
    },
    {
      "name": "Root & Rebound (South Carolina)",
      "url": "https://www.rootandreboundsc.org/",
      "description": "The South Carolina operation of Root & Rebound (dedicated SC site, SC team, Greenville mailing address, and an SC reentry email hotline) provides reentry legal services, workshops, clinics, and the \"Roadmap to Reentry: A South Carolina Legal Guide,\" helping people with records navigate employment, housing, family law, parole, and probation."
    }
  ],
  "south-dakota": [
    {
      "name": "St. Dysmas of South Dakota",
      "url": "https://www.stdysmas.com/",
      "description": "ELCA Lutheran prison congregation worshipping inside the South Dakota State Penitentiary (Sioux Falls), Mike Durfee State Prison (Springfield), and the Yankton Minimum Unit; runs a Re-Entry and Reintegration Program that pairs returning citizens with congregation mentor teams."
    }
  ],
  "tennessee": [
    {
      "name": "Free Hearts",
      "url": "https://freeheartsorg.com/",
      "description": "Led by formerly incarcerated women; provides support, education, and advocacy to families impacted by incarceration across Tennessee, including support groups/classes for women and children, participatory defense, voting-rights restoration, and statewide grassroots organizing."
    },
    {
      "name": "Tennessee Prison Outreach Ministry (TPOM)",
      "url": "https://www.tpom.org/",
      "description": "Nashville-based prison ministry serving people in most TN state prisons and many county jails; offers family-facing services including free counseling for families impacted by incarceration and youth programs (e.g., a therapeutic camp for children of incarcerated parents), plus transitional housing."
    },
    {
      "name": "Families of Incarcerated Individuals, Inc. (FII)",
      "url": "https://thei.org/guide/families-of-incarcerated-individuals-inc/",
      "description": "Memphis nonprofit serving families affected by incarceration; developed the \"Doorways Reentry Program\" providing transitional services, mentoring, job training, treatment, and family reunification/support for women returning to the Memphis/Shelby County community."
    }
  ],
  "texas": [
    {
      "name": "Texas Inmate Families Association (TIFA) — also styled Texas Incarcerated Families Association",
      "url": "https://tifa.org/",
      "description": "Austin-based 501(c)(3) founded 1996 with ~19 chapters statewide; provides education, resources, and emotional support to families of people in Texas prisons and jails, and advocates for more humane conditions."
    },
    {
      "name": "Hospitality House of Huntsville",
      "url": "https://thehospitalityhouse.org/",
      "description": "Provides free lodging, food, and support to families traveling to Huntsville/Livingston/Navasota to visit incarcerated relatives (and a refuge for families during executions); operating since 1986 under the Texas Baptist prisoner-family ministry tradition."
    },
    {
      "name": "Texas Jail Project",
      "url": "https://texasjailproject.org/",
      "description": "Advocates with and for people held in Texas county jails (pretrial detention focus), documenting conditions and supporting affected families."
    },
    {
      "name": "Texas Prisons Community Advocates (TPCA)",
      "url": "https://www.tpcadvocates.org/",
      "description": "Founded 2021; serves incarcerated people and their families and advocates for humane conditions (e.g., prison heat/temperature standards, medical care, water quality), with volunteer mediators who help families navigate TDCJ."
    },
    {
      "name": "Bridges to Life",
      "url": "https://www.bridgestolife.org/",
      "description": "Houston-based volunteer-led restorative-justice prison program (14-week victim-impact curriculum) operating in most Texas state prisons, aimed at reducing recidivism and supporting reentry."
    },
    {
      "name": "Kairos Prison Ministry of Texas",
      "url": "https://www.kairostexas.org/",
      "description": "State chapter of Kairos serving dozens of Texas prison/jail units; its Kairos Outside program runs retreats specifically for female family members of incarcerated people."
    }
  ],
  "utah": [
    {
      "name": "Utah Prisoner Advocate Network (UPAN)",
      "url": "https://utahprisoneradvocate.org/",
      "description": "Statewide volunteer network supporting families and loved ones of incarcerated people with resources (visiting, funds, phones, medical, mail), a private support group, monthly meetings, and advocacy for better conditions in Utah's correctional facilities."
    }
  ],
  "vermont": [
    {
      "name": "Vermont Just Justice",
      "url": "https://vtjustjustice.org/",
      "description": "All-volunteer Vermont criminal-justice-reform organization working to support incarcerated people and change the state's criminal legal system; publishes firsthand accounts from incarcerated people and addresses how incarceration affects families. Fiscally sponsored by Allies Line (501(c)(3))."
    },
    {
      "name": "Mercy Connections (Vermont Women's Mentoring Program)",
      "url": "https://mercyconnections.org/mentoring",
      "description": "Burlington nonprofit whose Women's Mentoring Program pairs trained volunteer mentors with women reentering from incarceration (and women in treatment court/recovery), with educational programming at Chittenden Regional Correctional Facility and continued post-release support."
    }
  ],
  "virginia": [
    {
      "name": "Assisting Families of Inmates, Inc.",
      "url": "https://afoi.org/",
      "description": "Serving Virginia families since 1978, AFOI runs meaningful-visitation programs (transportation to ~30 Virginia correctional facilities and ~20,000 facilitated video visits monthly), family support services, and children's programs (the MAC program) for youth with an incarcerated parent. It reports serving roughly 26,000 Virginia families affected by incarceration."
    },
    {
      "name": "The Messages Project, Inc.",
      "url": "https://themessagesproject.org/",
      "description": "A Norfolk-based 501(c)(3) that helps children of incarcerated parents maintain and rebuild relationships by recording personalized video messages of parents reading books to their children and mailing the DVDs and books home; it has delivered more than 10,000 messages since 1999 and partners with the Virginia DOC."
    },
    {
      "name": "Virginia CURE (Citizens United for Rehabilitation of Errants — Virginia chapter)",
      "url": "https://www.vacure.org/",
      "description": "An all-volunteer state chapter advocating since 1988 for reform of Virginia's criminal-justice and prison systems; communicates directly with incarcerated people by letter and works on prison conditions, medical/mental-health issues, reentry, and voting rights, with a families resources section on its site."
    }
  ],
  "washington": [
    {
      "name": "Civil Survival",
      "url": "https://civilsurvival.org/",
      "description": "A directly-impacted-led Washington organization that organizes people affected by the criminal legal system to overcome reentry barriers, with legal assistance, job placement, legislative-advocacy training, and community \"Game Changer\" meetings; states most of its team has been directly impacted."
    },
    {
      "name": "Statewide Family Council (Washington DOC family councils)",
      "url": "https://doc.wa.gov/family-support",
      "description": "Volunteer councils of approved visitors at each Washington prison (and a statewide council) that meet with facility leadership so families can ask questions, get information, and share their perspective on the facility; the recognized statewide structure for families of people incarcerated in WA. (Convened under DOC policy rather than an independent 501(c)(3) — a strong family-network touchpoint, not a private nonprofit.)"
    }
  ],
  "west-virginia": [
    {
      "name": "Way Makers",
      "url": "https://wvwaymakers.org/",
      "description": "A faith-based reentry program (a division of Charleston Restoration Ministries) serving people returning from incarceration with a continuum of support including housing, employment, legal aid, education, mentorship/discipleship, counseling, and childcare."
    },
    {
      "name": "ACLU of West Virginia",
      "url": "https://www.acluwv.org/issues/criminal-justice-reform/",
      "description": "State affiliate advocating to reform WV prisons, expand reentry and rehabilitation opportunities, reform bail and fines, and reduce incarceration (its Smart Justice blueprint targets cutting the state prison population in half); offers a legal-assistance intake."
    }
  ],
  "wisconsin": [
    {
      "name": "EXPO of Wisconsin",
      "url": "https://expowisconsin.org/",
      "description": "A statewide, directly-impacted-led organization (since 2014) working to end mass incarceration and support reentry; runs S.A.F.E. housing, peer support, workforce development, restorative-justice circles, and voting-rights advocacy, and supports families through its \"Connecting Families\" campaign and Friends & Family Forums."
    },
    {
      "name": "WISDOM (Wisconsin multi-faith network; sponsor of EXPO and the SIP family group)",
      "url": "https://wisdomwisconsin.org/",
      "description": "A statewide multi-faith organizing network (13 affiliates) that runs criminal-justice campaigns including \"End the Lockdowns\" and \"Connecting Families\" (free communication for incarcerated people and their families); it sponsors EXPO and a newer group, Supporters of Incarcerated People (SIP), for people with loved ones in prison."
    },
    {
      "name": "MOSES — Madison-area Urban Ministry / WISDOM affiliate",
      "url": "https://www.mosesmadison.org/",
      "description": "A Madison-area interfaith WISDOM affiliate organizing on criminal-justice reform and prison issues, partnering on EXPO and family-connection campaigns; a strong local touchpoint for directly-impacted families in the Madison region."
    }
  ],
  "wyoming": [
    {
      "name": "Bethel Outreach Ministries",
      "url": "https://betheloutreachministries.org/",
      "description": "A Cheyenne-area faith-based 501(c)(3) social-service agency providing reentry support to recently released people across Wyoming — housing/rental help, employment and resume help, transportation, ID/phone procurement, GED/vocational training, mentoring, and financial-literacy classes."
    },
    {
      "name": "Second Chance Ministries",
      "url": "https://secondchancegillette.org/",
      "description": "A Gillette/Campbell County faith-based 501(c)(3) (est. 2011) that walks alongside men and women for their first four months after release, assisting with housing, employment needs, IDs/documents, hygiene/clothing, transportation, and transitional housing (House of Hope); states it does not refuse services to anyone meeting its criteria."
    }
  ]
};
