// Shared UI "chrome" strings, localized for the bilingual site (English at bare
// paths, Spanish under /es). Every chrome label rendered by a shared component
// or layout lives here so a single lang value drives all of them.
//
// SAFETY CONTRACT: the `en` values must be byte-for-byte identical to the
// strings that used to be hardcoded in the components. English pages pass no
// lang (default 'en'), so their rendered output is unchanged. Only /es routes
// pass lang='es'. If you edit an `en` value here, you are changing 700+ English
// pages — don't, unless that is the intent.
//
// Spanish follows ES-TRANSLATION-GUIDE.md: neutral pan–Latin American Spanish,
// usted / impersonal register, brand and proper names kept verbatim.

export type Lang = 'en' | 'es';

export type UiStringKey = keyof (typeof strings)['en'];

const strings = {
  en: {
    // Header nav
    'nav.nationalGuides': 'National Guides',
    'nav.allNationalGuides': 'All national guides',
    'nav.toggleGuidesSubmenu': 'Toggle National Guides submenu',
    'nav.states': 'States',
    'nav.facilities': 'Facilities',
    'nav.search': 'Search',
    'nav.glossary': 'Glossary',
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'nav.primaryLabel': 'Primary',
    'nav.langLabel': 'Language / Idioma',
    'nav.english': 'English',
    'nav.spanish': 'Español',

    // Skip link (BaseLayout)
    'skip.toContent': 'Skip to content',

    // Footer
    'footer.guides': 'Guides',
    'footer.browse': 'Browse',
    'footer.allStates': 'All states',
    'footer.findFacility': 'Find a facility',
    'footer.search': 'Search',
    'footer.glossary': 'Glossary',
    'footer.site': 'Site',
    'footer.about': 'About',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.disclaimer': 'Not affiliated with any corrections department. Information may change without notice.',
    'footer.contact': 'Contact:',

    // Breadcrumbs
    'crumb.home': 'Home',
    'crumb.states': 'States',
    'crumb.guides': 'Guides',
    'crumb.facilities': 'Facilities',
    'crumb.search': 'Search',
    'crumb.about': 'About',
    'crumb.privacy': 'Privacy',
    'crumb.terms': 'Terms',
    'crumb.tools': 'Tools',
    'crumb.state': 'State',
    'crumb.breadcrumbLabel': 'Breadcrumb',

    // Disclaimer bar
    'disclaimer.text':
      'This site is for informational purposes only and does not constitute legal advice. It is not affiliated with any corrections department or government agency. Information is compiled from publicly available sources and may not reflect current policies. Always verify details directly with the facility before visiting.',

    // Feedback
    'feedback.heading': 'See something that needs updating?',
    'feedback.body':
      'Prison policies change frequently. If you find outdated information, an error, or have something to add, you can report it for this page.',
    'feedback.cta': 'Suggest a correction for this page',
    'feedback.orEmail': 'Or email',
    'feedback.subject': 'Correction or update:',
    'feedback.bodyPage': 'Page:',
    'feedback.bodyWhat': 'What needs updating:',
    'feedback.bodySource': 'Source (link or document), if you have one:',

    // Sources
    'sources.heading': 'Sources',
    'sources.intro':
      'This page is compiled from the following publicly available sources. Policies change without notice — confirm current details with the facility before relying on them.',

    // Table of contents
    'toc.onThisPage': 'On this page',
    'toc.label': 'Table of contents',

    // Guide layout
    'guide.lastReviewed': 'Last reviewed:',
    'guide.relatedIntro': 'For the general, nationwide overview of this topic, see the national guide:',

    // StartHere
    'startHere.heading': 'Someone was just sentenced? Start here.',
    'startHere.step1Strong': 'Find where they are held.',
    'startHere.step1a': 'Search the',
    'startHere.step1b': 'and write down their ID number — every step below needs it.',
    'startHere.step2Strong': 'Phone calls only go one way: they call you.',
    'startHere.step2': 'Set up an account so calls can connect —',
    'startHere.step2Link': 'Phone & Video Calls',
    'startHere.step3Strong': 'Apply to visit early — approval takes weeks.',
    'startHere.step3': 'The process and forms are in',
    'startHere.step3Link': 'Visiting',
    'startHere.step4Strong': 'A letter usually gets through first.',
    'startHere.step4': 'The required address format is in',
    'startHere.step4Link': 'Mail & Packages',
    'startHere.step5Strong': 'Money pays for calls and commissary.',
    'startHere.step5': 'Deposit methods and fees are in',
    'startHere.step5Link': 'Sending Money',

    // QuickFacts
    'quickFacts.label': 'Quick facts',
    'quickFacts.facilityDetails': 'Facility details',
    'quickFacts.location': 'Location',
    'quickFacts.contactVisiting': 'Contact and visiting',
    'quickFacts.verification': 'Verification',
    'quickFacts.state': 'State',
    'quickFacts.system': 'System',
    'quickFacts.type': 'Type',
    'quickFacts.securityLevel': 'Security level',
    'quickFacts.city': 'City',
    'quickFacts.county': 'County',
    'quickFacts.address': 'Address',
    'quickFacts.mainPhone': 'Main phone',
    'quickFacts.visitingHours': 'Visiting hours',
    'quickFacts.visitingDays': 'Visiting days',
    'quickFacts.lastVerified': 'Last verified',
    'quickFacts.callToVerify': 'Call to Verify',
    'quickFacts.getDirections': 'Get Directions',

    // StateVisitingRules
    'stateRules.introBefore': 'These rules are set by',
    'stateRules.introAfter':
      'and apply at every unit. The full list — including all permitted and prohibited items and the approval process — is in',
    'stateRules.dressCode': 'Dress code',
    'stateRules.id': 'ID',
    'stateRules.whatToBring': 'What to bring',
    'stateRules.scheduling': 'Scheduling',
    'stateRules.fullRules': 'Full statewide rules:',
    'stateRules.ariaLabel': 'Statewide visiting rules',

    // StateOrganizations
    'orgs.heading': 'Organizations that help families',
    'orgs.intro':
      'Independent organizations in this state that support families of incarcerated people. They are not affiliated with this site, and their services and contact details can change — contact an organization directly to confirm what it offers.'
  },
  es: {
    // Header nav
    'nav.nationalGuides': 'Guías nacionales',
    'nav.allNationalGuides': 'Todas las guías nacionales',
    'nav.toggleGuidesSubmenu': 'Abrir el submenú de guías nacionales',
    'nav.states': 'Estados',
    'nav.facilities': 'Instalaciones',
    'nav.search': 'Buscar',
    'nav.glossary': 'Glosario',
    'nav.about': 'Acerca de',
    'nav.menu': 'Menú',
    'nav.primaryLabel': 'Principal',
    'nav.langLabel': 'Language / Idioma',
    'nav.english': 'English',
    'nav.spanish': 'Español',

    // Skip link (BaseLayout)
    'skip.toContent': 'Saltar al contenido',

    // Footer
    'footer.guides': 'Guías',
    'footer.browse': 'Explorar',
    'footer.allStates': 'Todos los estados',
    'footer.findFacility': 'Buscar una instalación',
    'footer.search': 'Buscar',
    'footer.glossary': 'Glosario',
    'footer.site': 'Sitio',
    'footer.about': 'Acerca de',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.disclaimer':
      'No está afiliado con ningún departamento penitenciario. La información puede cambiar sin previo aviso.',
    'footer.contact': 'Contacto:',

    // Breadcrumbs
    'crumb.home': 'Inicio',
    'crumb.states': 'Estados',
    'crumb.guides': 'Guías',
    'crumb.facilities': 'Instalaciones',
    'crumb.search': 'Buscar',
    'crumb.about': 'Acerca de',
    'crumb.privacy': 'Privacidad',
    'crumb.terms': 'Términos',
    'crumb.tools': 'Herramientas',
    'crumb.state': 'Estado',
    'crumb.breadcrumbLabel': 'Ruta de navegación',

    // Disclaimer bar
    'disclaimer.text':
      'Este sitio tiene fines únicamente informativos y no constituye asesoría legal. No está afiliado con ningún departamento penitenciario ni agencia gubernamental. La información se recopila de fuentes disponibles al público y puede no reflejar las políticas vigentes. Verifique siempre los detalles directamente con la institución antes de visitar.',

    // Feedback
    'feedback.heading': '¿Ve algo que deba actualizarse?',
    'feedback.body':
      'Las políticas penitenciarias cambian con frecuencia. Si encuentra información desactualizada, un error, o tiene algo que agregar, puede reportarlo para esta página.',
    'feedback.cta': 'Sugiera una corrección para esta página',
    'feedback.orEmail': 'O escriba a',
    'feedback.subject': 'Corrección o actualización:',
    'feedback.bodyPage': 'Página:',
    'feedback.bodyWhat': 'Qué necesita actualizarse:',
    'feedback.bodySource': 'Fuente (enlace o documento), si tiene una:',

    // Sources
    'sources.heading': 'Fuentes',
    'sources.intro':
      'Esta página se compila a partir de las siguientes fuentes disponibles al público. Las políticas cambian sin previo aviso; confirme los detalles vigentes con la institución antes de basarse en ellos.',

    // Table of contents
    'toc.onThisPage': 'En esta página',
    'toc.label': 'Tabla de contenidos',

    // Guide layout
    'guide.lastReviewed': 'Última revisión:',
    'guide.relatedIntro': 'Para ver la descripción general de este tema a nivel nacional, consulte la guía nacional:',

    // StartHere
    'startHere.heading': '¿Alguien acaba de ser sentenciado? Empiece aquí.',
    'startHere.step1Strong': 'Averigüe dónde está detenido.',
    'startHere.step1a': 'Busque en el',
    'startHere.step1b': 'y anote su número de identificación; cada paso a continuación lo necesita.',
    'startHere.step2Strong': 'Las llamadas telefónicas van en un solo sentido: la persona lo llama a usted.',
    'startHere.step2': 'Abra una cuenta para que las llamadas puedan conectarse:',
    'startHere.step2Link': 'Llamadas telefónicas y por video',
    'startHere.step3Strong': 'Solicite la visita con anticipación; la aprobación tarda semanas.',
    'startHere.step3': 'El proceso y los formularios están en',
    'startHere.step3Link': 'Visitas',
    'startHere.step4Strong': 'Una carta suele llegar primero.',
    'startHere.step4': 'El formato de dirección requerido está en',
    'startHere.step4Link': 'Correo y paquetes',
    'startHere.step5Strong': 'El dinero paga las llamadas y la comisaría.',
    'startHere.step5': 'Los métodos de depósito y las tarifas están en',
    'startHere.step5Link': 'Enviar dinero',

    // QuickFacts
    'quickFacts.label': 'Datos rápidos',
    'quickFacts.facilityDetails': 'Detalles de la instalación',
    'quickFacts.location': 'Ubicación',
    'quickFacts.contactVisiting': 'Contacto y visitas',
    'quickFacts.verification': 'Verificación',
    'quickFacts.state': 'Estado',
    'quickFacts.system': 'Sistema',
    'quickFacts.type': 'Tipo',
    'quickFacts.securityLevel': 'Nivel de seguridad',
    'quickFacts.city': 'Ciudad',
    'quickFacts.county': 'Condado',
    'quickFacts.address': 'Dirección',
    'quickFacts.mainPhone': 'Teléfono principal',
    'quickFacts.visitingHours': 'Horario de visitas',
    'quickFacts.visitingDays': 'Días de visita',
    'quickFacts.lastVerified': 'Última verificación',
    'quickFacts.callToVerify': 'Llamar para verificar',
    'quickFacts.getDirections': 'Obtener indicaciones',

    // StateVisitingRules
    'stateRules.introBefore': 'Estas reglas las establece',
    'stateRules.introAfter':
      'y se aplican en cada unidad. La lista completa — incluyendo todos los artículos permitidos y prohibidos y el proceso de aprobación — está en',
    'stateRules.dressCode': 'Código de vestimenta',
    'stateRules.id': 'Identificación',
    'stateRules.whatToBring': 'Qué llevar',
    'stateRules.scheduling': 'Programación',
    'stateRules.fullRules': 'Reglas estatales completas:',
    'stateRules.ariaLabel': 'Reglas de visita a nivel estatal',

    // StateOrganizations
    'orgs.heading': 'Organizaciones que ayudan a las familias',
    'orgs.intro':
      'Organizaciones independientes en este estado que apoyan a las familias de personas encarceladas. No están afiliadas con este sitio, y sus servicios y datos de contacto pueden cambiar; comuníquese directamente con una organización para confirmar lo que ofrece.'
  }
} as const;

/**
 * Look up a chrome string for the given language. Falls back to English when a
 * key somehow has no Spanish value, so a missing translation degrades to
 * English text rather than a broken build.
 */
export function t(lang: Lang, key: UiStringKey): string {
  return strings[lang][key] ?? strings.en[key];
}

/** Prefix an internal path with /es for Spanish routes; leave English as-is. */
export function localizedPath(lang: Lang, path: string): string {
  if (lang !== 'es') return path;
  if (path === '/') return '/es/';
  return path.startsWith('/es/') || path === '/es' ? path : `/es${path}`;
}

export { strings as uiStrings };
