export const siteConfig = {
  name: 'Prison Visitor Guide',
  shortName: 'PVG',
  domain: 'prisonvisitorguide.org',
  email: 'prisonvisitorguide@gmail.com',
  description:
    'Factual prison visiting, communication, money, and rights information organized by state and facility.',
  disclaimer:
    'This site is for informational purposes only and does not constitute legal advice. It is an independent website — not a prison, not a corrections department, and not a government agency — and it cannot contact a facility on anyone\'s behalf. Information is compiled from publicly available sources and may not reflect current policies. Always verify details directly with the facility before visiting.',
  social: {
    github: 'https://github.com/lindseyleplae/prison-info-project-2026'
  }
} as const;

export const siteNavigation = {
  staticLinks: [
    { href: '/facilities/', label: 'Facilities' },
    { href: '/search/', label: 'Search' },
    { href: '/glossary/', label: 'Glossary' },
    { href: '/about/', label: 'About' }
  ],
  footerLinks: [
    { href: '/about/', label: 'About' },
    { href: '/privacy/', label: 'Privacy' },
    { href: '/terms/', label: 'Terms' }
  ]
} as const;
