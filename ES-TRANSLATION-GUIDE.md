# Spanish Translation Guide (ES)

How the Prison Visitor Guide is translated into Spanish. Every Spanish page follows this so
terminology and tone stay consistent across the whole site. When in doubt, favor clarity for a
family under stress over literal wording.

## The two rules carry over unchanged
- **Strictly informational tone**, in Spanish too. State what happens; don't advise, reassure, or
  editorialize. No emotional language. If an English sentence is neutral, the Spanish must be too.
- **Accuracy**: translate meaning, never invent. If an English fact is precise (an address, a
  deadline, a phone number), the Spanish must carry it exactly. When unsure of a term, leave the
  English proper noun and note it — don't guess.

## Register
- Neutral, respectful, **pan–Latin American Spanish** — no country-specific slang or regionalisms.
  The audience is diverse U.S. Latino families across many origins.
- Address the reader with **usted** (respectful) or, better, impersonal constructions
  ("Para programar una visita…", "Se debe…"). Never **tú**.
- **Plain language.** Short sentences. Families read this in a hurry, under stress, at varying
  reading levels — the same reason the English is plain.

## Never translate (keep verbatim)
Copy these across exactly as they appear in English:
- **Proper names** — facility/prison/unit names ("San Quentin", "Coffield Unit"), DOC/agency names
  ("CDCR", "Texas Department of Criminal Justice").
- **Vendor / brand / program names** — ViaPath, GTL, JPay, Securus, TextBehind, ConnectNetwork,
  Access Corrections, Pigeonly, GettingOut, Pagefind, etc., and named programs (e.g. "Family Ties
  Inside Out").
- **Addresses, P.O. boxes, phone numbers, fax, email addresses, URLs, form numbers, ID-number
  formats.** Never localize or reformat these — a wrong digit misroutes a family's mail or money.
- **Slugs** — the URL path stays identical (English slug) so the Spanish page mirrors the English
  one 1:1 (`/es/states/california/guides/visiting/`).

## Markdown & frontmatter handling
- Translate the **values** of `title`, `summary`, `description` (and visible heading text). Keep the
  **slug identical** and leave all other frontmatter keys/values unchanged (state code, system,
  addresses, phone, coordinates, dates, `sources` — translate a source's display `name` only if it's
  descriptive, never its URL).
- Keep the **directive-block syntax intact** — `:::callout{variant="warning"}`, `:::key-info`,
  `:::reality-check`, `:::steps` — translate only the human text inside. Never change `variant`
  values or block names.
- **Internal links: leave them as the English target in the source file.** Write
  `/states/california/guides/mail/`, *not* `/es/states/...`. A build-time step (the `esInternalLinks`
  remark plugin, wired in `astro.config.mjs`) automatically rewrites every in-body internal link to
  its `/es` counterpart when the page is Spanish — so the Spanish Markdown stays byte-identical to the
  English and there is no way to accidentally produce a double `/es/es/` prefix. Do not hand-prefix.
- **Same-page anchors are the one exception** — retarget them to the *translated* heading slug, since
  they point within the same Spanish page: `](#mail)` → `](#correo)`, `](#visiting)` → `](#visitas)`,
  `](#money)` → `](#dinero)`. (Cross-page links keep their English slug; only anchors change.)
- **External links** (DOC pages, vendor sites) stay exactly as-is.

## Core glossary (EN → ES)
| English | Spanish |
|---|---|
| visiting / a visit / visitation | las visitas / la visita |
| visitor | visitante |
| approved visitor list | lista de visitantes aprobados |
| approved to visit | aprobado(a) para visitar |
| contact / non-contact visit | visita de contacto / visita sin contacto |
| incarcerated person / person in prison | persona encarcelada / persona privada de libertad |
| *(avoid "inmate"; use a DOC's own Spanish term, e.g. recluso/interno, only if that agency does)* | |
| prison / facility / institution | la prisión / el centro penitenciario / la institución |
| unit | la unidad |
| mail / letter / correspondence | el correo / la carta / la correspondencia |
| package | el paquete |
| send money / deposit to the account | enviar dinero / hacer un depósito a la cuenta |
| money order | giro postal |
| commissary account | la cuenta de la comisaría (el economato/la tienda del centro) |
| phone call | llamada telefónica |
| video call / video visit | videollamada / visita por video |
| medical / health care | atención médica |
| mental health | salud mental |
| co-pay | copago |
| transfer | traslado |
| inmate locator / find someone | el localizador de reclusos / buscar a una persona |
| DOC number / ID number | número de identificación *(keep the exact format)* |
| dress code | código de vestimenta |
| ID / identification | identificación (ID) |
| schedule / appointment | programar / la cita |
| reception / intake center | centro de recepción / centro de ingreso (admisión) |
| release / reentry | liberación / reintegración |

## Corrections & custody terms (standardized across the 50-state rollout)
Use these renderings so the same concept reads the same on every state's pages. For U.S.-specific
program names with no clean Spanish equivalent, give the Spanish gloss and keep the English in
parentheses on first use (as shown).

| English | Spanish |
|---|---|
| maximum / medium / minimum security | máxima / media / mínima seguridad |
| close custody | custodia cerrada |
| general population | población general |
| restrictive housing / segregation | régimen restringido / aislamiento |
| protective custody | custodia protectora |
| reception / diagnostic center | centro de recepción / centro de diagnóstico |
| pre-release facility | centro de preliberación |
| work release | programa de trabajo externo (work release) |
| state jail *(Texas)* | keep **State Jail** (a Texas facility class — proper name) |
| death row | el corredor de la muerte |
| execution chamber | la cámara de ejecución |
| person under a death sentence | persona condenada a muerte |
| warden | alcaide *(duty warden → alcaide de turno)* |
| background check | verificación de antecedentes |
| trust / commissary account | cuenta fiduciaria / cuenta de comisaría |
| sick call | solicitud de atención médica (sick call) |
| committed name | nombre de registro (committed name) |
| parole / probation | libertad condicional / libertad probatoria (probation) |

## Standard phrases (use these exact renderings)
- "Confirm with the facility before traveling." → **"Confirme con la institución antes de viajar."**
- "Rules can change — verify the current information." → **"Las reglas pueden cambiar; verifique la información vigente."**
- "who can be approved, scheduling, dress code, ID, and what you can bring" →
  **"quién puede ser aprobado, cómo programar la visita, el código de vestimenta, la identificación y qué puede llevar"**
- "Suggest a correction for this page" → **"Sugiera una corrección para esta página"**
- Site name **"Prison Visitor Guide"** stays in English (it's the brand); a Spanish tagline may
  appear in body text, e.g. "una guía gratuita e independiente para las familias".

## When a term isn't here
Add it to this table the first time you translate it, so the next page matches. If a state DOC
publishes its own Spanish materials, prefer that agency's wording for that state's pages.
