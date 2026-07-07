// Spanish rendering of the per-state statewide visiting-rules card values.
//
// Companion to state-visiting-rules.ts (the English source of truth). Only the
// translatable TEXT fields live here — title, guideLabel, dressCode, idRule,
// itemsRule, schedulingRule. The structural fields `system` and `guideHref` are
// deliberately NOT repeated: the <StateVisitingRules> component overlays this
// Spanish text on top of the English entry (which supplies system + guideHref)
// when lang === 'es', falling back to the English text for any field or state
// not translated here. That keeps the English data authoritative and drift-proof.
//
// Added during the Spanish i18n rollout. When a state's rules change, update the
// English file first, then re-translate here — translate meaning only; keep
// proper nouns, facility names, vendor/brand names, addresses, and system codes
// verbatim (see ES-TRANSLATION-GUIDE.md).
import type { StateVisitingRules } from './state-visiting-rules';

export const stateVisitingRulesEs: Record<string, Partial<StateVisitingRules>> = {
  id: {
    title: 'Reglas estatales que aplican en las prisiones de Idaho DOC',
    guideLabel: 'Visitas en Idaho',
    dressCode: [
      'Vístase con modestia — las instituciones de Idaho aplican un código de vestimenta para las visitas que prohíbe la ropa reveladora, transparente o provocativa, los artículos relacionados con pandillas y cualquier prenda que se parezca a lo que usan los residentes o el personal.',
      'Cada institución puede negar la entrada a un visitante que no cumpla el código de vestimenta, y no se permiten dispositivos electrónicos adentro, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitantes aprobados del residente antes de visitar — el residente solicita una solicitud, el visitante la envía por correo a la institución, y la aprobación normalmente tarda entre dos y cuatro semanas después de una verificación de antecedentes. Lleve una identificación con foto emitida por el gobierno a cada visita.',
    itemsRule:
      'Lleve solo lo que la institución permita — la mayoría de los objetos personales no se permiten en la sala de visitas. El dinero para la cuenta de un residente se envía a través de Access Corrections, nunca se entrega en la visita.',
    schedulingRule:
      'Idaho no tiene un programador en línea a nivel estatal para las visitas en persona — cada institución establece sus propios días y horarios de visita, así que confirme con la institución específica. Los hombres ingresan al sistema a través de la Reception and Diagnostic Unit en la Idaho State Correctional Institution (Kuna); las mujeres a través del Pocatello Women\'s Correctional Center. Los residentes alojados fuera del estado en las prisiones de CoreCivic en Arizona (el Saguaro Correctional Center y el Central Arizona Florence Correctional Complex) presentan la solicitud mediante un formulario en línea y visitan según el horario de esa prisión.'
  },
  ia: {
    title: 'Reglas estatales que aplican en las prisiones de Iowa DOC',
    guideLabel: 'Visitas en Iowa',
    dressCode: [
      'Vístase con modestia — las instituciones de Iowa aplican un código de vestimenta para las visitas que prohíbe la ropa reveladora, transparente o provocativa, los artículos relacionados con pandillas y cualquier prenda que se parezca a lo que usan las personas encarceladas o el personal.',
      'Cada institución puede negar la entrada a un visitante que no cumpla el código de vestimenta, y no se permiten dispositivos electrónicos adentro, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitantes aprobados de la persona encarcelada antes de visitar — las solicitudes se envían por correo a la Centralized Visiting Authority en el Mount Pleasant Correctional Facility, y la lista tiene un límite de seis visitantes aprobados además de la familia directa. Lleve una identificación con foto emitida por el gobierno a cada visita.',
    itemsRule:
      'Lleve solo lo que la institución permita — la mayoría de los objetos personales no se permiten en la sala de visitas. El dinero para la cuenta de una persona encarcelada se envía a través de Access Corrections, JPay o Western Union, nunca se entrega en la visita.',
    schedulingRule:
      'Iowa no tiene un único programador en línea a nivel estatal — una vez que un visitante está aprobado, las visitas en persona y por video se programan por institución a través de la aplicación Ameelio Connect, y cada institución ofrece visitas al menos cuatro días a la semana. Los hombres ingresan al sistema en el Iowa Medical and Classification Center (Coralville); las mujeres en el Iowa Correctional Institution for Women (Mitchellville).'
  },
  hi: {
    title: 'Reglas estatales que aplican en las instalaciones de HI DCR',
    guideLabel: 'Visitas en Hawái',
    dressCode: [
      'Vístase con modestia — las instituciones de Hawái aplican un código de vestimenta para las visitas que prohíbe la ropa reveladora, transparente o provocativa, la ropa de playa y cualquier prenda que se parezca a lo que usan los reclusos o el personal; se espera calzado cerrado.',
      'Cada institución establece y aplica sus propias reglas específicas y puede negar la entrada a un visitante que no cumpla el código de vestimenta, y no se permiten dispositivos electrónicos adentro, así que confirme el código de vestimenta con la institución antes de viajar.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitantes aprobados del recluso antes de visitar — el recluso presenta la lista propuesta, DCR hace una verificación de antecedentes, y la institución aprueba o niega. Lleve una identificación con foto emitida por el gobierno a cada visita.',
    itemsRule:
      'Lleve solo lo que la institución permita — la mayoría de los objetos personales no se permiten en la sala de visitas. El dinero para la cuenta de un recluso en una institución dentro del estado se envía a través de GTL / ViaPath ConnectNetwork, nunca se entrega en la visita; la prisión Saguaro en Arizona usa un proceso de dinero aparte.',
    schedulingRule:
      'Hawái no tiene un programador en línea a nivel estatal — cada institución establece sus propios días y horarios de visita y opera su propia línea de visitas, así que confirme con la institución específica. Las visitas por video están disponibles a través de tabletas en las instituciones dentro del estado. Las instituciones en las islas vecinas (en Maui, Kauai y la isla de Hawái) son accesibles desde Oahu principalmente por avión. Los aproximadamente 800 hombres alojados en el Saguaro Correctional Center en Arizona visitan según el horario de esa prisión, con visitas por video reservadas a través de la sucursal continental del estado. Las mujeres están alojadas en el Women\'s Community Correctional Center (Kailua).'
  },
  mn: {
    title: 'Reglas estatales que aplican en las prisiones de MN DOC',
    guideLabel: 'Visitas en Minnesota',
    dressCode: [
      'Vístase con modestia — las instituciones de Minnesota aplican un código de vestimenta para las visitas que prohíbe la ropa reveladora, transparente o provocativa, los artículos relacionados con pandillas y cualquier prenda que se parezca a lo que usan las personas encarceladas o el personal.',
      'Cada institución puede negar la entrada a un visitante que no cumpla el código de vestimenta, y no se permiten dispositivos electrónicos adentro, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe ser aprobado antes de visitar — la solicitud de visitante se envía por correo al centro de ingreso central del Minnesota DOC en MCF-Rush City. Lleve una identificación con foto emitida por el gobierno a cada visita.',
    itemsRule:
      'Lleve solo lo que la institución permita — la mayoría de los objetos personales no se permiten en la sala de visitas. El dinero para la cuenta de una persona encarcelada se envía a través de JPay, nunca se entrega en la visita.',
    schedulingRule:
      'Confirme con la prisión específica los días y horarios de visita, y si las visitas deben programarse con anticipación. Las visitas por video están disponibles a través de JPay Video Connect. Los hombres ingresan al sistema en MCF-St. Cloud; las mujeres en MCF-Shakopee, la única prisión de mujeres.'
  },
  ky: {
    title: 'Reglas estatales que aplican en las prisiones de KY DOC',
    guideLabel: 'Visitas en Kentucky',
    dressCode: [
      'Vístase con modestia — entre los artículos comúnmente prohibidos están la ropa reveladora o transparente, los pantalones cortos o faldas por encima de la rodilla, las prendas sin mangas, y los sombreros u otras prendas que cubran la cabeza (con excepción de las religiosas).',
      'Cada institución puede negar la entrada a un visitante que no cumpla el código de vestimenta, y no se permiten dispositivos electrónicos adentro, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe estar primero en la lista de visitantes aprobados del recluso — por lo general, familiares directos verificados más hasta tres adultos adicionales y un miembro del clero; todos los visitantes adultos presentan una identificación con foto emitida por el gobierno, y los menores deben ir acompañados de un padre, madre o tutor legal.',
    itemsRule:
      'Lleve solo lo que la institución permita — por lo general, una identificación con foto, una llave del auto, una tarjeta de débito o crédito, un monedero pequeño y transparente, anteojos y cualquier medicamento autorizado. El dinero para la cuenta de un recluso se envía a través de JPay, nunca se entrega en la visita.',
    schedulingRule:
      'Kentucky no tiene un programador en línea a nivel estatal — los días y horarios de visita los establece cada institución, y algunas exigen programar con aproximadamente una semana de anticipación, así que confirme con la prisión específica. Los hombres ingresan al sistema a través del Roederer Correctional Complex (cerca de La Grange); las mujeres a través del Kentucky Correctional Institution for Women (Pewee Valley). Una persona que cumple tiempo estatal en una cárcel del condado sigue las reglas de visita de esa cárcel, no las del DOC — consulte KOOL para conocer la ubicación actual.'
  },
  ks: {
    title: 'Reglas estatales que aplican en todas las prisiones de KDOC',
    guideLabel: 'Visitas en Kansas',
    dressCode: [
      'Vístase con modestia — las instituciones de Kansas aplican un código de vestimenta para las visitas que prohíbe la ropa reveladora, transparente o provocativa, los artículos relacionados con pandillas y cualquier prenda que se parezca a lo que usan los residentes o el personal.',
      'Cada institución puede negar la entrada a un visitante que no cumpla el código de vestimenta, y no se permiten dispositivos electrónicos adentro, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitas preaprobada del residente antes de visitar (según la política de KDOC IMPP 10-113D). Lleve una identificación con foto emitida por el gobierno a cada visita.',
    itemsRule:
      'Lleve solo lo que la institución permita — la mayoría de los objetos personales no se permiten en la sala de visitas. El dinero para la cuenta de un residente se envía a través de Access Corrections (por aplicación, en línea, por teléfono, en tiendas minoristas, o mediante un giro postal a Centralized Resident Banking, P.O. Box 9101, Topeka, KS 66608), nunca se entrega en la visita.',
    schedulingRule:
      'Kansas programa las visitas a nivel estatal a través de ICSolutions — reserve en icsolutions.com al menos 72 horas antes. Cada institución ofrece dos turnos por día (uno por la mañana y uno por la tarde); un visitante puede reservar uno o dos turnos en un día, pero no varios días en el mismo fin de semana, con hasta cuatro visitantes por residente, y se permite un contacto apropiado, como un abrazo breve. Las personas recién admitidas en recepción no pueden recibir visitas familiares hasta que superan la etapa de ingreso. Los hombres ingresan a través de la Reception and Diagnostic Unit en la El Dorado Correctional Facility; las mujeres en la Topeka Correctional Facility.'
  },
  nm: {
    title: 'Reglas estatales que aplican en las prisiones de NMCD',
    guideLabel: 'Visitas en Nuevo México',
    dressCode: [
      'Vístase con modestia — las instituciones de Nuevo México aplican un código de vestimenta para las visitas que prohíbe la ropa reveladora, transparente o provocativa, los artículos relacionados con pandillas y cualquier prenda que se parezca a lo que usan las personas encarceladas o el personal.',
      'Cada institución puede negar la entrada a un visitante que no cumpla el código de vestimenta, y no se permiten dispositivos electrónicos adentro, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitantes aprobados del recluso antes de visitar (y antes de depositar dinero) — la persona encarcelada inicia la lista, y la aprobación la maneja cada institución. Lleve una identificación con foto emitida por el gobierno a cada visita.',
    itemsRule:
      'Lleve solo lo que la institución permita — la mayoría de los objetos personales no se permiten en la sala de visitas. El dinero para la cuenta de un recluso se envía mediante un giro postal de USPS a la persona en su institución (la cuenta Securus Debit, separada, cubre las llamadas y los servicios de tableta), nunca se entrega en la visita.',
    schedulingRule:
      'Nuevo México no tiene un programador en línea a nivel estatal — las visitas se organizan con cada institución por teléfono o correo electrónico, y los días, horarios y las reglas de contacto o sin contacto varían según la institución y el nivel de custodia. La Otero County Prison Facility, de operación privada, establece sus propios arreglos de visita. Los hombres ingresan al sistema a través del Reception and Diagnostic Center en la Central New Mexico Correctional Facility (Los Lunas); las mujeres a través del centro de diagnóstico en la Western New Mexico Correctional Facility (Grants).'
  },
  ak: {
    title: 'Reglas estatales que aplican en las instituciones de AK DOC',
    guideLabel: 'Visitas en Alaska',
    dressCode: [
      'Vístase de forma ordenada — se requiere calzado cerrado; nada de cut-offs, pantalones cortos, ropa de playa, minifaldas, prendas escotadas o transparentes, ni tube tops, y no se permiten sombreros en el área de visitas salvo que estén autorizados.',
      'Cada institución puede negar la entrada a un visitante que no cumpla el código de vestimenta, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitantes aprobados de la persona encarcelada (por lo general, una persona solo puede estar en la lista de una sola persona encarcelada) y debe presentar una licencia de conducir o identificación con foto emitida por el gobierno; los visitantes y sus pertenencias son registrados. Durante las primeras 24 horas después de que alguien es registrado por nuevos cargos, familiares y amigos pueden visitar a cualquier hora sin estar en la lista de aprobados — solo se necesita una identificación con foto válida.',
    itemsRule:
      'Lleve solo lo que la institución permita — la mayoría de los objetos deben quedar afuera, y los visitantes son registrados al entrar. El dinero se deposita en la Offender Trust Account de la persona encarcelada (en persona en cualquier institución del DOC, o por correo mediante un giro postal a la persona en su institución), nunca se entrega en la visita.',
    schedulingRule:
      'Alaska no tiene un programador en línea a nivel estatal — los días y horarios de visita los establece cada institución, y muchas exigen una cita, así que consulte la página de la institución o llame antes de viajar. Las visitas suelen durar alrededor de una hora y pueden ser de contacto o seguras (sin contacto) según la institución y el nivel de custodia; el DOC puede aprobar una visita especial más larga para las familias que viajan grandes distancias. Como varias instituciones son accesibles principalmente por avión, confirme el horario antes de reservar el viaje. Todas las mujeres bajo custodia del DOC están alojadas en el Hiland Mountain Correctional Center (Eagle River); la única prisión de máxima seguridad para hombres es Spring Creek (Seward).'
  },
  sd: {
    title: 'Reglas estatales que aplican en las prisiones de SD DOC',
    guideLabel: 'Visitas en Dakota del Sur',
    dressCode: [
      'Vístase con modestia — las instituciones de Dakota del Sur aplican un código de vestimenta para las visitas; evite la ropa reveladora o provocativa, cualquier cosa relacionada con pandillas, y cualquier prenda que se parezca a lo que usan las personas bajo custodia o el personal.',
      'Cada institución establece y aplica sus propias reglas específicas y puede negar la entrada a un visitante que no cumpla el código de vestimenta, así que confirme el código de vestimenta con la institución antes de viajar.'
    ],
    idRule:
      'Todo visitante debe ser aprobado en la lista de visitantes de la persona antes de visitar, y se requiere una identificación con foto emitida por el gobierno para entrar. Confirme el proceso de solicitud y la identificación aceptable con la institución.',
    itemsRule:
      'Lleve solo lo que la institución permita — los teléfonos y otros dispositivos electrónicos no se permiten en la sala de visitas, y la mayoría de los objetos personales deben quedar afuera. Confirme las reglas de máquinas expendedoras y objetos con la institución; el dinero para una cuenta se envía a través de los proveedores del DOC, nunca se entrega en la visita.',
    schedulingRule:
      'Las visitas por video se programan a través del programador estatal de ViaPath (sddoc.gtlvisitme.com); los días y horarios de visita en persona los establece cada prisión, así que confirme el horario vigente con la institución. Los hombres ingresan al sistema en el complejo de la South Dakota State Penitentiary en Sioux Falls (la unidad de recepción Jameson Annex); las mujeres en la South Dakota Women\'s Prison en Pierre.'
  },
  nd: {
    title: 'Reglas estatales que aplican en las prisiones de ND DOCR',
    guideLabel: 'Visitas en Dakota del Norte',
    dressCode: [
      'Ninguna prenda con lenguaje obsceno ni con referencias a pandillas, drogas o alcohol; ninguna ropa interior visible; las faldas deben llegar por lo menos a media pantorrilla; se requiere calzado cerrado (no se permiten los Crocs); y la ropa no puede parecerse a la que usan los residentes.',
      'Cada institución puede negar la entrada a un visitante que no cumpla el código de vestimenta, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe presentar una solicitud y ser aprobado antes de visitar — envíe la solicitud de visitante (en línea o en el formulario imprimible) a la institución; el procesamiento puede tardar unos 15 días hábiles, y los nombres se verifican con los registros estatales y locales de las fuerzas del orden. Se requiere identificación oficial con fotografía para todas las personas de 16 años o más.',
    itemsRule:
      'Lleve solo lo que la institución permita — la mayoría de los objetos personales deben quedar guardados bajo llave en el vehículo. Se permite una pequeña cantidad de efectivo en billetes de un dólar y monedas de veinticinco centavos (entre $10 y $20 aproximadamente, según lo establezca cada institución) para las máquinas expendedoras; el dinero para la cuenta de un residente se envía a través de JPay, nunca se entrega en la visita.',
    schedulingRule:
      'Dakota del Norte no tiene un programador en línea a nivel estatal — los días y horarios de visita los establece cada institución, así que confirme el horario vigente con la prisión específica. Los hombres ingresan al sistema en la North Dakota State Penitentiary (Bismarck); las mujeres en el Dakota Women\'s Correctional and Rehabilitation Center (New England).'
  },
  mt: {
    title: 'Reglas estatales que aplican en las prisiones de MT DOC',
    guideLabel: 'Visitas en Montana',
    dressCode: [
      'Vístase con modestia — las instituciones de Montana aplican un código de vestimenta para las visitas que prohíbe la ropa reveladora, transparente o provocativa, los artículos relacionados con pandillas y cualquier cosa que se parezca a lo que usan las personas encarceladas o el personal.',
      'Cada institución puede rechazar a un visitante que no cumpla con el código, y los teléfonos y otros dispositivos electrónicos no se permiten adentro, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe ser aprobado antes de visitar — cree una cuenta en login.mt.gov y complete la Visitation Application en línea; la aprobación puede tardar hasta 90 días. Lleve una identificación con foto emitida por el gobierno a cada visita. Las prisiones contratadas (Crossroads y Dawson County) manejan su propia aprobación de visitantes, así que confirme con la institución.',
    itemsRule:
      'Lleve solo lo que la institución permita — los teléfonos y la mayoría de los objetos personales no se permiten en la sala de visitas. El dinero para las cuentas de teléfono y tableta se envía a través de ICSolutions, mientras que los cheques y giros postales de la cuenta de fideicomiso van a la institución; el dinero nunca se entrega en la visita.',
    schedulingRule:
      'La programación no está unificada a nivel estatal. En Montana State Prison y Montana Women\'s Prison, las visitas se programan en línea a través de ICSolutions (Montana Women\'s Prison exige programación anticipada en línea). Las prisiones contratadas — Crossroads Correctional Center y Dawson County Correctional Facility — establecen su propio proceso de visitas, así que confirme directamente con la institución. Los hombres ingresan al sistema a través de la Martz Diagnostic Intake Unit en Montana State Prison; las mujeres a través de Montana Women\'s Prison.'
  },
  ok: {
    title: 'Reglas estatales que aplican en las prisiones de Oklahoma DOC',
    guideLabel: 'Visitas en Oklahoma',
    dressCode: [
      'Vístase con modestia y siga la lista de vestimenta aprobada — nada de ropa reveladora, transparente o provocativa, nada que se parezca a lo que usan las personas encarceladas o el personal, y nada relacionado con pandillas; cada institución puede rechazar a un visitante que no cumpla con el código, así que confirme las reglas antes de viajar.',
      'Deje los objetos personales en el vehículo — los visitantes solo pueden llevar identificación, la llave del auto y monedas para las máquinas expendedoras; los teléfonos y otros dispositivos electrónicos no se permiten adentro.'
    ],
    idRule:
      'Todo visitante debe ser aprobado en la lista de la persona encarcelada antes de visitar — presente un Visitor Application Form (en línea o por correo a la Visitation Unit, P.O. Box 11400, Oklahoma City, OK 73136-0400) y pase una verificación de antecedentes (18 años o más); la aprobación puede tardar hasta 90 días. Lleve una identificación con foto emitida por el gobierno a cada visita.',
    itemsRule:
      'Lleve solo identificación, la llave del auto y monedas para las máquinas expendedoras — los teléfonos, bolsos y otros objetos personales no se permiten en la sala de visitas. El dinero para la cuenta de fideicomiso de la persona se envía a través de JPay, nunca se entrega en la visita.',
    schedulingRule:
      'Todas las visitas se programan con anticipación a través de la Visitation Unit estatal (405-768-3269) — no hay visitas sin cita previa, y las solicitudes deben recibirse antes del miércoles a la 1 p.m. de ese período. Las visitas de sábado y domingo están disponibles en todas las instituciones (los días de semana adicionales varían), por lo general de 8 a.m. a 4 p.m. Los hombres ingresan al sistema a través del Lexington Assessment and Reception Center; las mujeres a través del Mabel Bassett Correctional Center.'
  },
  nc: {
    title: 'Reglas estatales que aplican en las prisiones de NCDAC',
    guideLabel: 'Visitas en Carolina del Norte',
    dressCode: [
      'Vístase con modestia — nada de blusas tipo halter, tube, sin tirantes, tank, sin mangas ni estilo ropa interior, nada de abdomen al descubierto y nada de spandex; los shorts y las faldas no deben quedar a más de unas tres pulgadas por encima de la rodilla.',
      'Los teléfonos celulares, relojes inteligentes, cámaras y dispositivos de grabación no se permiten adentro, y cada prisión puede rechazar a un visitante que no cumpla con el código, así que confirme las reglas de la institución antes de viajar.'
    ],
    idRule:
      'Todo visitante debe ser aprobado en la lista de visitas de la persona encarcelada antes de visitar — la persona encarcelada envía por correo una solicitud a cada posible visitante; los solicitantes de 16 años o más adjuntan una copia de una identificación con foto emitida por el gobierno (los menores de 16 años, un acta de nacimiento), y el formulario completado se envía a la prisión donde está alojada la persona. Los visitantes de 16 años o más muestran identificación con foto en la visita.',
    itemsRule:
      'Lleve solo lo que la institución permita — los teléfonos, relojes inteligentes, cámaras, bolsos y la mayoría de los objetos personales no se permiten en la sala de visitas. El dinero para la cuenta de fideicomiso de la persona se envía a través de ViaPath (ConnectNetwork) o TouchPay, nunca se entrega en la visita.',
    schedulingRule:
      'Las visitas son solo con cita previa — llame o envíe un correo electrónico a la prisión específica para programar; no tiene un sistema de programación en línea a nivel estatal, y el estado de la visita debe confirmarse el día anterior. Las visitas generalmente se limitan a una por semana, hasta dos horas, con hasta tres visitantes aprobados. Las mujeres ingresan al sistema a través del centro de diagnóstico en la NC Correctional Institution for Women (Raleigh); los hombres son recibidos en varias prisiones, incluidas Craven y Piedmont.'
  },
  wi: {
    title: 'Reglas estatales que aplican en las prisiones de WI DOC',
    guideLabel: 'Visitas en Wisconsin',
    dressCode: [
      'Nada de camuflaje, ropa transparente o reveladora, blusas sin tirantes o tipo tube, spandex usado como pantalón, shorts o faldas más cortos que la punta de los dedos, artículos relacionados con pandillas u obscenos, ni ropa rota; nada de relojes ni bolsos, y evite los sostenes con varilla y las joyas de metal que no pasen el detector de metales.',
      'Cada institución hace cumplir su propio código de vestimenta para las visitas y puede rechazar a un visitante que no cumpla con el código, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitas aprobada de la persona encarcelada antes de visitar — la persona envía por correo un DOC-21AA Visitor Questionnaire al posible visitante, quien lo completa y lo devuelve a la institución. Los visitantes de 16 años o más muestran una identificación con foto válida emitida por el gobierno en cada visita.',
    itemsRule:
      'Lleve solo lo que la institución permita — los teléfonos, bolsos y la mayoría de los objetos personales no se permiten en la sala de visitas. Un visitante puede llevar hasta $25 en efectivo o una tarjeta de débito/crédito para las máquinas expendedoras; el dinero para la cuenta de la persona se envía a través de Access Corrections, nunca se entrega en la visita.',
    schedulingRule:
      'Wisconsin no tiene un sistema de programación de visitas en línea a nivel estatal — las visitas se coordinan con cada institución (llame a la institución), y los días y horarios varían. Las visitas por video se programan por separado a través de ICSolutions. Una persona recién sentenciada se procesa primero en un centro de recepción — los hombres en la Dodge Correctional Institution (Waupun), las mujeres en la Taycheedah Correctional Institution (Fond du Lac) — antes del traslado.'
  },
  wa: {
    title: 'Reglas estatales que aplican en las prisiones de WA DOC',
    guideLabel: 'Visitas en Washington',
    dressCode: [
      'Vístase con modestia — nada de ropa transparente, reveladora o provocativa, nada de camuflaje, y nada relacionado con pandillas o que se parezca a lo que usan las personas encarceladas o el personal; los shorts y las faldas deben tener al menos el largo de la punta de los dedos, y evite los sostenes con varilla y las joyas de metal que no pasen el detector de metales.',
      'Cada prisión establece y hace cumplir su propio código de vestimenta para las visitas y puede rechazar a un visitante que no cumpla con el código, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe ser aprobado en la Approved Visitor List de la persona encarcelada antes de visitar — solicite electrónicamente con el DOC Form 20-060 (adultos) o 20-181 (menores); el trámite tarda hasta 45 días hábiles, y solo puede haber una solicitud pendiente a la vez. Los visitantes de 18 años o más muestran una identificación con foto válida emitida por el gobierno en cada visita (los visitantes internacionales, un pasaporte).',
    itemsRule:
      'Lleve solo lo que la institución permita — los teléfonos, bolsos y la mayoría de los objetos personales no se permiten en la sala de visitas. Un visitante puede llevar hasta $25 en efectivo o una sola tarjeta de débito/crédito para las máquinas expendedoras; el dinero para la cuenta de la persona se envía a través de JPay o Securus, nunca se entrega en la visita.',
    schedulingRule:
      'No tiene un sistema público de reservas en línea para las visitas en persona — una vez aprobado, comuníquese con el personal de visitas de la institución para conocer los días y la disponibilidad actuales (muchas prisiones admiten visitantes por orden de llegada). Las visitas por video se programan por separado a través de Securus. Una persona recién sentenciada se procesa primero en un centro de recepción — los hombres en el Washington Corrections Center (Shelton), las mujeres en el Reception and Diagnostic Center del Washington Corrections Center for Women (Gig Harbor) — antes del traslado. Washington también ofrece Extended Family Visits para las personas elegibles.'
  },
  fl: {
    title: 'Reglas estatales que aplican en las prisiones de FDC',
    guideLabel: 'Visitas en Florida',
    dressCode: [
      'Nada de ropa azul o naranja (son colores de los reclusos); nada ajustado, corto, transparente o revelador; nada de spandex, leggings ni camisetas sin mangas; calzado cerrado con talón.',
      'Cada institución hace cumplir su propio código de vestimenta para las visitas y puede rechazar a un visitante que no cumpla con el código, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe ser aprobado en la lista de visitantes de la persona encarcelada antes de visitar. La persona encarcelada solicita la solicitud (Form DC6-111A) en su institución permanente y la envía por correo; la aprobación puede tardar entre 30 y 90 días aproximadamente, y al visitante no se le notifica directamente — la persona encarcelada comunica el resultado. Los visitantes adultos muestran una identificación con foto válida emitida por el gobierno.',
    itemsRule:
      'Lleve solo lo que la institución permita — los teléfonos, bolsos y la mayoría de los objetos personales no se permiten en la sala de visitas. El dinero para la cuenta de la persona se envía a través del proveedor de dinero de FDC, nunca se entrega en la visita.',
    schedulingRule:
      'Muchas instituciones exigen una reserva anticipada, y los días y horarios (por lo general fines de semana y días feriados) los establece cada institución — confirme con la prisión específica antes de viajar. Una persona recién sentenciada se procesa primero en un centro de recepción — para los hombres, el Reception and Medical Center (Lake Butler), Central Florida Reception Center (Orlando), South Florida Reception Center (Doral) o Northwest Florida Reception Center; para las mujeres, Lowell — antes del traslado.'
  },
  ny: {
    title: 'Reglas estatales que aplican en las prisiones de DOCCS',
    guideLabel: 'Visitas en Nueva York',
    dressCode: [
      'Nada de ropa reveladora o provocativa, y nada asociado con pandillas; no use verde (se parece a lo que usan las personas encarceladas) ni nada que se parezca a los uniformes del personal.',
      'Cada institución hace cumplir su propio código de vestimenta para las visitas y puede rechazar a un visitante que no cumpla con el código, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitantes aprobados de la persona encarcelada (la persona inicia la solicitud y DOCCS la evalúa). Los visitantes adultos muestran una identificación con foto válida emitida por el gobierno y pasan por el control de seguridad en cada visita.',
    itemsRule:
      'Lleve solo lo que la institución permita — los teléfonos, bolsos y la mayoría de los objetos personales no se permiten en la sala de visitas (se proporcionan casilleros). El dinero para la cuenta de la persona se envía a través de JPay, nunca se entrega en la visita.',
    schedulingRule:
      'La mayoría de las instituciones admiten a los visitantes aprobados dentro de los horarios de visita publicados, aunque algunas exigen programación anticipada y los horarios varían según la institución — confirme con la prisión específica antes de viajar. Una persona recién sentenciada se procesa primero en un centro de recepción y clasificación — Elmira es el centro de recepción principal para hombres; Bedford Hills es el centro de recepción para mujeres — antes del traslado.'
  },
  nv: {
    title: 'Reglas estatales que aplican en las prisiones de NDOC',
    guideLabel: 'Visitas en Nevada',
    dressCode: [
      'Nada de mezclilla azul (se parece a la ropa de los reclusos); nada de shorts, blusas que dejen el abdomen o los hombros al descubierto, ni otra ropa reveladora; vístase de manera conservadora.',
      'Cada institución hace cumplir su propio código de vestimenta para las visitas y puede rechazar a un visitante que no cumpla con el código, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitantes aprobados de la persona encarcelada — la persona solicita agregar a cada visitante, y una lista admite hasta cinco personas (con una excepción para los hijos menores de edad de la persona). Los visitantes adultos muestran una identificación con foto válida emitida por el gobierno en cada visita.',
    itemsRule:
      'Lleve solo lo que la institución permita — los teléfonos, bolsos y la mayoría de los objetos personales no se permiten en la sala de visitas. El dinero para la cuenta de la persona se envía a través del proveedor de NDOC, nunca se entrega en la visita.',
    schedulingRule:
      'Las visitas se coordinan con cada institución (Nevada no tiene un sistema de programación en línea a nivel estatal), y los visitantes se registran antes del horario de visita; los días, horarios y las reglas de contacto o sin contacto varían según la institución y el nivel de custodia. Nevada también ofrece visitas por video a través de GettingOut. Una persona recién sentenciada se procesa primero en un centro de ingreso — High Desert (sur de Nevada) o Northern Nevada Correctional Center (norte de Nevada) para hombres, y Florence McClure para mujeres — antes del traslado.'
  },
  md: {
    title: 'Reglas estatales que aplican en las prisiones estatales de Maryland',
    guideLabel: 'Visitas en Maryland',
    dressCode: [
      'Vístase con modestia — nada de ropa reveladora, transparente o provocativa, y nada que se parezca a lo que usan las personas encarceladas o el personal.',
      'Cada institución hace cumplir su propio código de vestimenta para las visitas y puede rechazar a un visitante que no cumpla con el código, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitantes aprobados de la persona encarcelada, y los visitantes de 16 años o más muestran una identificación con foto válida emitida por el gobierno. Por lo general, la persona encarcelada debe cumplir unos 30 días antes de que puedan comenzar las visitas.',
    itemsRule:
      'Lleve solo lo que la institución permita — los teléfonos, bolsos y la mayoría de los objetos personales no se permiten; se permite una pequeña cantidad de efectivo en billetes de $1 solo donde haya una máquina expendedora disponible. El dinero para la cuenta de la persona se envía a través de Access Corrections, nunca se entrega en la visita.',
    schedulingRule:
      'Las visitas son con cita previa coordinada con cada institución (a menudo por correo electrónico) y se confirman con anticipación — Maryland no tiene un sistema de programación en línea a nivel estatal, y los días y horarios varían según la institución. Maryland también ofrece visitas por video gratuitas a través de Microsoft Teams. Una persona recién sentenciada se procesa primero en un centro de recepción y clasificación — las mujeres en el Maryland Correctional Institution for Women; el ingreso de hombres está en transición, así que confirme la ubicación actual.'
  },
  sc: {
    title: 'Reglas estatales que aplican en las prisiones de SCDC',
    guideLabel: 'Visitas en Carolina del Sur',
    dressCode: [
      'Vístase con modestia — nada de ropa reveladora, transparente o provocativa, y nada que se parezca a lo que usan las personas encarceladas o el personal.',
      'Cada institución hace cumplir su propio código de vestimenta para las visitas y puede rechazar a un visitante que no cumpla con el código, así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitantes aprobados de la persona encarcelada (la persona solicita a sus visitantes desde adentro usando el SCDC Form 19-127; la lista admite hasta 15 personas). Los visitantes adultos muestran una identificación con foto válida emitida por el gobierno en cada visita.',
    itemsRule:
      'Lleve solo lo que la institución permita — los teléfonos, bolsos, alimentos y la mayoría de los objetos personales no se permiten en la sala de visitas. El dinero para la cuenta de la persona se envía a través del proveedor de SCDC, nunca se entrega en la visita.',
    schedulingRule:
      'Las visitas se programan con anticipación a través del sistema de SCDC (ViaPath/GTL) en scdoc.gtlvisitme.com, generalmente los fines de semana en bloques de horario fijos; desde el 1 de junio de 2025, muchos adultos con licencia de Carolina del Sur pueden registrarse en línea, mientras que otros solicitan por correo. Una persona recién sentenciada es alojada primero en un centro de recepción — Kirkland para hombres, Camille Griffin Graham para mujeres — antes del traslado.'
  },
  il: {
    title: 'Reglas estatales que aplican en cada prisión estatal de Illinois',
    guideLabel: 'Visitas en Illinois',
    dressCode: [
      'La ropa debe ser de buen gusto — nada relacionado con pandillas, sexualmente explícito u ofensivo, y nada que se parezca a lo que usan las personas encarceladas o el personal.',
      'Cada prisión establece sus propias reglas de vestimenta y de artículos para las visitas, así que confirme las reglas de la institución específica antes de viajar, ya que un visitante que no cumpla el código de vestimenta puede ser rechazado.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitantes aprobados de la persona encarcelada, que la persona organiza desde adentro — el personal no puede decirle si usted está en una lista. Los visitantes adultos deben llevar dos formas de identificación, una de ellas una identificación con foto emitida por el estado, junto con la información del vehículo.',
    itemsRule:
      'Lleve solo lo que la institución permita — no se permiten teléfonos, tabletas, relojes inteligentes, bolsos, carteras, comida, bebida, libros ni dinero en efectivo en la sala de visitas (se proporcionan casilleros); por lo general solo se puede llevar medicación cardíaca recetada y etiquetada o un inhalador para el asma. El dinero para la cuenta de la persona se envía a través de un proveedor de depósitos, nunca se entrega en la visita.',
    schedulingRule:
      'Las visitas en persona se programan en línea a través de SignUpGenius (el programador de visitas del IDOC); los días, los horarios y si una visita es de contacto o sin contacto varían según la institución y el estatus de la persona, así que confirme con la institución específica. Una persona recién ingresada es procesada primero en un centro de recepción y clasificación — el Northern Reception and Classification Center para los hombres, Logan para las mujeres — antes del traslado.'
  },
  az: {
    title: 'Reglas estatales que aplican en cada prisión estatal de Arizona',
    guideLabel: 'Visitas en Arizona',
    dressCode: [
      'Nada de ropa color naranja, camuflaje, transparente, o de malla abierta; nada de material tipo licra; y nada de ropa quirúrgica (scrubs).',
      'Cada complejo y unidad puede agregar reglas de vestimenta y de artículos para las visitas (bajo la Orden Departamental 911), así que confirme las reglas de la unidad específica antes de viajar.'
    ],
    idRule:
      'Todo visitante debe presentar una Application to Visit an Inmate y ser aprobado antes de visitar — se aplica una verificación de antecedentes, y los documentos de respaldo deben entregarse dentro de unos 30 días, así que solicite con bastante anticipación. Los visitantes adultos deben mostrar una identificación con foto emitida por el gobierno vigente. No solicite mientras la persona todavía esté en la unidad de recepción de Phoenix (Alhambra) o de Perryville.',
    itemsRule:
      'Lleve solo lo que la unidad permita — por lo general una identificación con foto y, donde se permita, una pequeña cantidad de dinero para las máquinas expendedoras en un recipiente transparente; no se permiten teléfonos, bolsos ni regalos. El dinero para la cuenta de la persona se envía a través del proveedor de ADCRR, nunca se entrega en la visita.',
    schedulingRule:
      'Las visitas son con cita previa, y los días, los horarios y las reglas de contacto o sin contacto varían según el complejo, la unidad y el nivel de custodia de la persona — confírmelos con la unidad específica. Una persona recién ingresada permanece primero en una unidad de recepción — Alhambra en ASPC-Phoenix para los hombres, ASPC-Perryville para las mujeres — antes del traslado.'
  },
  ma: {
    title: 'Reglas estatales que aplican en cada prisión estatal de Massachusetts',
    guideLabel: 'Visitas en Massachusetts',
    dressCode: [
      'Vístase con modestia y evite ropa que se parezca a lo que usan las personas encarceladas o el personal; nada revelador, transparente ni provocativo.',
      'Cada prisión publica su propio código de vestimenta para las visitas y sus límites de artículos — confírmelos con la institución antes de viajar, ya que un visitante que no cumpla el código de vestimenta puede ser rechazado.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitantes aprobados de la persona encarcelada y presentar una solicitud de visitante a la prisión; el Departamento realiza una verificación de antecedentes penales antes de la aprobación. Los adultos deben mostrar una identificación con foto emitida por el gobierno vigente en cada visita. La persona encarcelada puede agregar nuevos visitantes solo durante períodos establecidos (los primeros 15 días de marzo, julio y noviembre).',
    itemsRule:
      'Lleve solo una identificación con foto y lo que la institución específica permita en la sala de visitas — no se permiten teléfonos ni bolsos. El dinero para la persona se envía a través de Access Corrections, nunca se entrega en la visita; confirme las reglas de artículos y casilleros de cada institución antes de visitar.',
    schedulingRule:
      'Massachusetts no tiene un sistema de programación de visitas en línea a nivel estatal — cada prisión programa las visitas por teléfono y establece sus propios días y horarios, así que llame a la institución para coordinar una visita y confirmar el horario. Una persona recién ingresada permanece primero en un centro de recepción — Souza-Baranowski para los hombres, MCI-Framingham para las mujeres — antes del traslado a una prisión permanente.'
  },
  mo: {
    title: 'Reglas estatales que aplican en cada prisión estatal de Missouri',
    guideLabel: 'Visitas en Missouri',
    dressCode: [
      'Nada de ropa ajustada, holgada, transparente o reveladora; las faldas, los vestidos y los pantalones cortos deben llegar hasta la parte superior de la rodilla; y las camisas deben cubrir el pecho, el escote, la espalda, el abdomen y los hombros.',
      'Nada de camuflaje ni símbolos o colores relacionados con pandillas. Las normas de vestimenta se aplican en la entrada, así que confirme las reglas vigentes de la institución específica antes de visitar.'
    ],
    idRule:
      'Todo visitante debe estar en la lista de visitantes aprobados de la persona encarcelada antes de visitar — solicite en línea a través de la solicitud de visitas del Missouri DOC, que requiere el número de identificación DOC de la persona y una verificación de antecedentes. Los adultos deben mostrar una identificación con foto emitida por el gobierno; los visitantes de 13 a 18 años deben mostrar una identificación escolar o gubernamental con foto, y cualquier persona menor de 18 años debe estar acompañada por un adulto aprobado.',
    itemsRule:
      'Lleve lo menos posible: una identificación con foto y, para las máquinas expendedoras, monedas en una bolsa transparente (la comida que se lleve a una visita con comida debe estar en recipientes transparentes). No se permiten teléfonos, bolsos ni regalos adentro, y el dinero para la persona se envía a través de JPay, nunca se entrega en la visita.',
    schedulingRule:
      'Solicite las visitas a través de la solicitud de visitas en línea del Missouri DOC (web.mo.gov/doc/pubVisit); cada prisión establece sus propios días, horarios y límites de visita, así que confírmelos con la institución. Pueden visitar a la vez hasta tres visitantes, más hasta tres niños de cinco años o menos. Una persona recién ingresada permanece en un centro de recepción y diagnóstico — Fulton, Bonne Terre (ERDCC) o St. Joseph (WRDCC) para los hombres, y Vandalia (WERDCC) para las mujeres — hasta el traslado a una prisión permanente.'
  },
  in: {
    title: 'Reglas estatales que aplican en cada prisión estatal de Indiana',
    guideLabel: 'Visitas en Indiana',
    dressCode: [
      'Vístase con modestia: nada revelador, transparente ni ajustado; nada de pantalones cortos, minifaldas, ni faldas o vestidos por encima de la rodilla; y nada de tops sin mangas, tops halter ni abdomen al descubierto.',
      'No use ropa que se parezca a lo que usan las personas encarceladas o el personal (por ejemplo, conjuntos completamente color caqui) ni ninguna prenda relacionada con pandillas, y use ropa interior adecuada. Cada institución establece y aplica su propio código de vestimenta específico, así que confírmelo antes de visitar.'
    ],
    idRule:
      'Todo visitante debe primero registrarse y ser aprobado en la lista de visitantes de la persona encarcelada (hasta 12 visitantes aprobados) a través de ViaPath — los visitantes no se agregan en la puerta — y cada visitante de 16 años o más debe mostrar una identificación con foto emitida por el gobierno vigente en cada visita.',
    itemsRule:
      'Lleve solo lo que la institución permita — por lo general una identificación con foto y una llave del vehículo; no se permiten teléfonos, bolsos ni regalos adentro, y el dinero para la persona se envía a través de ViaPath (ConnectNetwork), nunca se entrega en la visita. Confirme las reglas de la institución específica sobre casilleros y máquinas expendedoras.',
    schedulingRule:
      'Regístrese y programe las visitas a través de ViaPath en idoc.gtlvisitme.com; toda la programación de visitas usa la hora del Este, incluso en instituciones ubicadas en la zona horaria Central de Indiana. Cada prisión establece sus propios días, horarios y límites de visita, así que confírmelos con la institución. Una persona recién ingresada permanece en un centro de recepción — el Reception-Diagnostic Center en Plainfield para los hombres, Rockville para las mujeres — hasta la clasificación, y luego es trasladada a una prisión permanente, con visitas limitadas durante la recepción.'
  },
  tn: {
    title: 'Reglas estatales que aplican en cada prisión estatal de Tennessee',
    guideLabel: 'Visitas en Tennessee',
    dressCode: [
      'Nada de licra ni ropa transparente o translúcida; nada de camisas o tops sin mangas que dejen ver el pecho, el abdomen o la espalda; y nada de ropa de camuflaje ni pañoletas.',
      'No se permiten sandalias tipo chancla, sandalias de baño ni zapatos con punta de acero, y nada de joyería excesiva — vista con ropa sencilla y modesta, ya que un visitante que llegue sin cumplir el código de vestimenta puede ser rechazado.'
    ],
    idRule:
      'Todo visitante, sin importar la edad, debe tener una solicitud de visitante aprobada registrada antes de visitar — no hay visitas sin cita previa, y las solicitudes tardan aproximadamente 30 días en procesarse. Los visitantes adultos deben mostrar una identificación con foto emitida por el gobierno.',
    itemsRule:
      'Lleve adentro solo una identificación con foto y las llaves o el control remoto de su vehículo — los teléfonos, las billeteras, los bolsos y los relojes inteligentes deben quedarse en el vehículo. Los artículos para bebés (pañales y fórmula o comida sellada) se permiten en una bolsa de plástico transparente. El dinero para la persona se envía solo a través de JPay o ViaPath, nunca se entrega en la visita.',
    schedulingRule:
      'Cada prisión establece sus propios días, horarios y límites de visita, y las visitas se coordinan con la institución específica — Tennessee no tiene un sistema de programación de visitas en línea a nivel estatal — así que confirme el horario antes de viajar. Una persona recién sentenciada permanece en un centro de recepción (Bledsoe County para los hombres, el Debra K. Johnson Rehabilitation Center para las mujeres) hasta la clasificación, y luego es trasladada a una prisión permanente.'
  },
  pa: {
    title: 'Reglas estatales que aplican en cada prisión estatal de Pensilvania',
    guideLabel: 'Visitas en Pensilvania',
    dressCode: [
      'Nada de trajes de baño, pantalones cortos, ni faldas o vestidos extremadamente cortos o reveladores; nada de tops halter, tops de tubo, tops sin mangas ni tops de tirantes finos; y nada transparente, translúcido ni rasgado.',
      'Nada de licra ni mallas (leggings), y nada de abrigos, chaquetas ni sombreros en la sala de visitas; se requiere un conjunto completo de ropa interior adecuada, y los sostenes con varilla pueden activar el detector de metales.'
    ],
    idRule:
      'Todo visitante debe primero estar en la lista de visitantes aprobados de la persona encarcelada — la persona encarcelada agrega a los visitantes, así que no contacte a la prisión para agregarse usted mismo — y los adultos deben mostrar una identificación con foto emitida por el gobierno o dos identificaciones sin foto (no se aceptan fotocopias ni identificaciones vencidas). Un menor debe estar incluido en el formulario de un padre o tutor (DC-313) y estar acompañado por ese adulto.',
    itemsRule:
      'Lleve solo su identificación y, donde la prisión lo permita, monedas o un pequeño monedero transparente para las máquinas expendedoras — nada de teléfonos, bolsos ni regalos. El dinero para la persona se envía solo a través de JPay, nunca se entrega en la visita; confirme las reglas de máquinas expendedoras y casilleros de la prisión específica.',
    schedulingRule:
      'Todas las visitas — en persona y por video — son con cita previa a través del Inmate Visitation System (inmatevisitation.cor.pa.gov), reservadas de 3 a 60 días antes; cada prisión establece sus propios días y horarios. Una persona recién ingresada permanece en un centro de recepción (Camp Hill para los hombres, Muncy para las mujeres) hasta la clasificación, y luego es trasladada a una prisión permanente.'
  },
  oh: {
    title: 'Reglas estatales que aplican en cada prisión estatal de Ohio',
    guideLabel: 'Visitas en Ohio',
    dressCode: [
      'Nada de ropa transparente, rota o rasgada (que deje ver la piel); nada de tops halter, de tubo, cortos (crop), sin mangas ni de tirantes anchos, y nada que deje ver la ropa interior; las faldas, los vestidos y los pantalones cortos no deben quedar más arriba de la mitad del muslo.',
      'Nada de ropa muy ajustada — mallas (leggings), jeggings, licra o mallas de compresión — y nada de prendas envolventes o desmontables; se requiere ropa interior adecuada, y los sostenes con varilla o las horquillas pueden activar el detector de metales y retrasar el ingreso.',
      'Nada de ropa relacionada con pandillas, obscena u ofensiva. Si un visitante llega sin cumplir el código de vestimenta, la prisión debe ofrecer ropa alternativa (como una camisa quirúrgica) en lugar de rechazar al visitante.'
    ],
    idRule:
      'Todo visitante debe primero ser aprobado en la lista de visitas de la persona (solicite con el formulario DRC-2096 junto con una copia de una identificación con foto; los menores usan el formulario DRC-2238 con un acta de nacimiento). Una persona puede tener hasta 15 visitantes adultos aprobados, de los cuales no más de dos pueden ser amigos. Los visitantes aprobados se registran en gtlvisitme.com y muestran identificación con foto en cada visita.',
    itemsRule:
      'Deje atrás los teléfonos, los relojes inteligentes, las carteras, los bolsos y los coches para bebé — no se permiten adentro; se permite una bolsa de pañales transparente con artículos limitados para bebé. El dinero para la persona se envía a través de ViaPath, nunca se entrega en la visita; confirme con la institución si se permite algún dinero o tarjeta para las máquinas expendedoras.',
    schedulingRule:
      'Las visitas deben reservarse con anticipación a través de ViaPath (gtlvisitme.com); cada prisión establece sus propios días, horarios y límites de visita, así que confírmelos con la institución específica. Una persona recién recibida en recepción tiene visitas restringidas y es trasladada a una prisión permanente después de la clasificación.'
  },
  ga: {
    title: 'Reglas estatales que aplican en cada prisión estatal de Georgia',
    guideLabel: 'Visitas en Georgia',
    dressCode: [
      'Las camisas deben cubrir el pecho, los hombros, la espalda y la cintura; los pantalones, vestidos o faldas de las mujeres no pueden quedar a más de dos pulgadas por encima de la rodilla, y se requiere un conjunto completo de prendas interiores (sostén, fondo y ropa interior).',
      'Nada de tops de tanque, halter, de tubo ni de tirantes finos, nada transparente y nada que deje al descubierto el abdomen.',
      'Nada de pantalones cortos ni pantalones por encima de la rodilla para cualquier persona de 12 años o más (los niños menores de 12 años pueden usar pantalones cortos); se requiere calzado para todo visitante.'
    ],
    idRule:
      'Todo visitante debe primero ser aprobado en la lista de visitas de la persona — solicite con el Application for Visitation Privilege de GDC, enviado por correo a la prisión (el director tiene 14 días hábiles para decidir) — y los visitantes de 16 años o más deben mostrar una identificación con foto emitida por el gobierno, que se retiene durante la visita. La lista de visitas se puede modificar solo cuando la persona llega a una institución permanente o durante mayo o noviembre.',
    itemsRule:
      'Lleve solo una identificación con foto, una llave del vehículo y hasta $20 en monedas (o una tarjeta débito para máquinas expendedoras donde se acepte). No se permite comida ni bebida de afuera (la fórmula para bebé comprada en tienda es la excepción), y nada de teléfonos, cámaras ni bolsos; el dinero para la persona se envía a través de JPay, nunca se entrega en la visita.',
    schedulingRule:
      'Las visitas son con cita previa a través del portal en línea de GDC, los sábados, domingos y días feriados estatales en bloques de dos horas; las solicitudes para una semana determinada se aceptan de lunes a miércoles. Una persona recién recibida en estatus diagnóstico generalmente no es elegible para visitas hasta llegar a una prisión permanente.'
  },
  al: {
    title: 'Reglas estatales que aplican en cada prisión estatal de Alabama',
    guideLabel: 'Visitas en Alabama',
    dressCode: [
      'Nada de ropa color canela (tan) ni nada que se le parezca, y nada de ropa tipo quirúrgica (scrubs) — ambas se parecen a lo que usan los reclusos (los reclusos de Alabama usan blanco, y la ropa de custodia mínima es color canela o blanco).',
      'Los vestidos, las faldas y los pantalones no deben quedar más de tres pulgadas por encima de la rodilla (incluida cualquier abertura), y los pantalones deben llegar al menos hasta el tobillo; nada de pantalones cortos, pantalones elásticos ni ropa ajustada, transparente o translúcida.',
      'Nada de vestidos de sol ni tops sin mangas — las blusas y camisas deben cubrir la cintura y el pecho — y se requiere un conjunto completo de ropa interior.',
      'Nada de sombreros, gorras, pañoletas ni diademas (los tocados religiosos requieren aprobación por escrito con anticipación); nada de lentes de sol a menos que sean recetados, y nada de lentes inteligentes; la joyería se limita a un juego de anillos de matrimonio y aretes de botón sencillos; nada de calzado de casa, de baño ni de playa.'
    ],
    idRule:
      'Todo visitante adulto debe estar en la lista aprobada del recluso (elaborada con el Formulario 303-A) y mostrar una identificación con foto emitida por el gobierno — una licencia de conducir, identificación estatal, identificación militar o identificación de inmigración. Un recluso puede tener hasta ocho visitantes adultos aprobados a la vez.',
    itemsRule:
      'Cada visitante puede llevar hasta $30 (en cambio o en una tarjeta débito de $30) para las máquinas expendedoras, además de una identificación con foto y llaves del vehículo, en una bolsa de plástico transparente — y nada más. No se permiten teléfonos ni aparatos electrónicos, carteras ni bolsos, tabaco ni armas; los padres pueden llevar algunos artículos para bebé.',
    schedulingRule:
      'No hay un horario a nivel estatal y ADOC no publica los horarios de visita en línea, así que confirme los días y horarios con la prisión específica. Bajo las reglas de 2025, todas las visitas deben programarse y aprobarse de antemano, y un recluso recién llegado puede enfrentar una espera de hasta 60 días antes de que puedan comenzar las visitas.'
  },
  ar: {
    title: 'Reglas estatales que aplican en todas las prisiones estatales de Arkansas',
    guideLabel: 'Visitas en Arkansas',
    dressCode: [
      'No se permite ropa blanca ni de camuflaje — ambas se asemejan a lo que usan los reclusos (los reclusos de Arkansas usan blanco).',
      'Los hombros deben permanecer cubiertos: no se permiten camisas sin mangas, camisetas sin mangas ni blusas tipo halter, ni pantalones cortos, minifaldas o vestidos cortos.',
      'No se permite ropa transparente, mallas ni jeggings, ni nada escotado o provocativo; los niños de 10 años o menos pueden usar pantalones cortos de largo apropiado.',
      'Evite el metal en la ropa y los accesorios (varillas, hebillas, broches), que pueden impedir que pase el detector de metales; el código de vestimenta oficial está impreso al reverso del formulario de visitación.'
    ],
    idRule:
      'Todo visitante debe estar aprobado primero en la lista de visitas del recluso — el recluso envía el formulario de solicitud por correo al visitante (no está disponible en línea ni con el personal), y se realiza una verificación de antecedentes penales a cada solicitante. Los visitantes de 12 años o más deben presentar una identificación con foto emitida por el gobierno.',
    itemsRule:
      'Lleve una bolsa de plástico transparente con una pequeña cantidad de efectivo para las máquinas expendedoras (algunas unidades están cambiando a monedas o tarjetas de débito y crédito únicamente), medicamentos recetados a nombre del visitante, una identificación con foto, las llaves del auto y artículos para bebé. Los teléfonos, el tabaco y otros artículos deben quedar bajo llave en el vehículo.',
    schedulingRule:
      'Las visitas se programan de antemano, no son sin cita — solicite una cita a través del portal estatal TeleGov o llamando al Secretario de Visitación de la unidad. Las visitas de rutina son los fines de semana, y cuántas visitas al mes recibe una persona depende del nivel de clase del recluso; el ADC no publica los horarios por unidad en línea, así que confirme con la unidad.'
  },
  ne: {
    title: 'Reglas estatales que aplican en todas las prisiones estatales de Nebraska',
    guideLabel: 'Visitas en Nebraska',
    dressCode: [
      'Se permite calzado de dedo abierto, pero el calzado debe estar en buen estado y usarse en todo momento.',
      'Se requiere ropa interior — para mujeres, un sostén y un par de ropa interior; para hombres, un par de ropa interior — y no se permiten varias capas.',
      'Los pantalones cortos, faldas y vestidos deben llegar a la altura de la rodilla o más abajo estando de pie; las camisas y vestidos deben cubrir los hombros, sin escote visible ni espalda escotada.',
      'No se permite ropa ajustada, transparente o reveladora, ni nada con palabras o imágenes profanas u ofensivas.',
      'No se puede usar pantalón caqui y camisa caqui al mismo tiempo — eso se asemeja a lo que usan las personas encarceladas.',
      'No se permiten sombreros, cintas para la cabeza, capuchas ni ropa de abrigo (el clero puede usar cubiertas religiosas para la cabeza), ni relojes o rastreadores de actividad física; se permite una chaqueta o suéter ligero solo si no tiene bolsillos.'
    ],
    idRule:
      'Todo visitante debe estar aprobado primero en la lista de la persona encarcelada — la persona envía por correo un formulario de solicitud de visita. Los adultos y visitantes de 16 años o más deben mostrar una identificación con foto emitida por el gobierno en cada visita; los menores de 18 años o menos deben llevar un acta de nacimiento en la primera visita y deben estar acompañados de un adulto aprobado de 19 años o más.',
    itemsRule:
      'Deje todo bajo llave en su vehículo o en un casillero de la institución — solo se permiten una identificación con foto, hasta $20 en monedas por visitante para las máquinas expendedoras (donde se permita), anteojos recetados y artículos limitados para bebé en una bolsa transparente. Los teléfonos, relojes inteligentes y otros dispositivos electrónicos están prohibidos, e ingresar uno constituye un delito.',
    schedulingRule:
      'Después de la aprobación, programe la visita en línea en corrections.nebraska.gov (la página "Schedule a Visit" de la institución) con al menos 7 días de anticipación y hasta 4 semanas antes; cada institución establece y publica sus propios días y horarios de visita.'
  },
  ct: {
    title: 'Reglas estatales que aplican en todas las instituciones correccionales de Connecticut',
    guideLabel: 'Visitas en Connecticut',
    dressCode: [
      'Vístase con modestia razonable — no se permite ropa reveladora, provocativa u ofensiva, ni nada que el personal considere un riesgo de seguridad.',
      'No se permite ningún tipo de reloj, para ningún visitante (incluidos los abogados).',
      'Evite el metal en la ropa y los accesorios — varillas, cinturones, joyería, broches para el cabello, perforaciones corporales y calzado con puntera de metal pueden impedir que pase el detector de metales y provocar que se le niegue la entrada.',
      'Connecticut no publica una lista detallada de colores o estilos prohibidos, así que confirme cualquier detalle específico con la institución antes de viajar.'
    ],
    idRule:
      'Todo visitante de 18 años o más debe mostrar una identificación con foto emitida por el gobierno vigente en cada visita (licencia de conducir, identificación estatal, identificación militar, pasaporte o tarjeta de residente permanente), y el adulto que acompaña a un menor debe llevar el acta de nacimiento del menor más otro documento con el nombre del menor. Todo visitante debe estar aprobado primero en la lista de visitas del recluso.',
    itemsRule:
      'Casi nada puede ingresar a la sala de visitas — no se permiten teléfonos, dispositivos electrónicos, comida, bolsos ni abrigos (la única excepción es un biberón transparente, un paño pequeño y un chupete para un bebé). No se puede entregar nada al recluso; hay casilleros disponibles en algunas instituciones bajo su propio riesgo, y el dinero se envía al Fondo Fiduciario de Reclusos (Inmate Trust Fund), nunca se entrega en la visita.',
    schedulingRule:
      'Connecticut opera un sistema unificado, así que estas reglas cubren tanto a personas en detención previa al juicio como a personas sentenciadas, y cada institución establece sus propios días y horarios. Desde 2024, las visitas presenciales de población general en la mayoría de las instituciones son por orden de llegada, mientras que las visitas para reclusos de estatus restrictivo y todas las visitas por video se programan a través del formulario de solicitud en línea del DOC.'
  },
  mi: {
    title: 'Reglas estatales que aplican en todas las prisiones estatales de Michigan',
    guideLabel: 'Visitas en Michigan',
    dressCode: [
      'Los visitantes deben estar completamente vestidos con ropa limpia y en buen estado, con la ropa interior requerida — incluido un sostén para cualquier persona con tejido mamario — y calzado en todo momento.',
      'Nada que exponga demasiada piel: no se permite ropa transparente, ni blusas tipo tubo o halter, y las faldas, vestidos y pantalones cortos no deben quedar a más de tres pulgadas por encima de la rodilla — no se permiten pantalones cortos de ningún tipo.',
      'No se permite ropa exterior extremadamente ajustada como pantalones de yoga, mallas, jeggings o mono ajustado (unitard), ni nada que deje ver la ropa interior.',
      'No se permiten prendas con capucha, abrigos, chaquetas, guantes ni gafas de sol en la sala de visitas (se permiten blazers, sacos de traje y suéteres); la joyería se limita a unas diez piezas, y se permiten las cubiertas religiosas para la cabeza, aunque pueden ser revisadas.'
    ],
    idRule:
      'Todo visitante debe estar ya en la lista aprobada del prisionero (cada visitante presenta una solicitud CAJ-103), y los adultos deben mostrar una identificación con foto emitida por el gobierno en cada visita; un menor sin identificación con foto debe llevar un acta de nacimiento o una orden judicial.',
    itemsRule:
      'Casi nada puede ingresar a la sala de visitas — los únicos artículos permitidos son una llave de casillero, el pase de visitante, una identificación con foto y una tarjeta prepagada del MDOC para las máquinas expendedoras (hasta $30 por persona; no se permite efectivo). Los teléfonos y dispositivos electrónicos están prohibidos, y se proporcionan casilleros en el vestíbulo.',
    schedulingRule:
      'Las visitas son solo con cita previa — no se aceptan visitas sin cita — reservadas a través del sistema ViaPath entre 48 horas y 7 días de anticipación. Los días, horarios y la cantidad de visitas permitidas cada mes los establece cada institución según el nivel de seguridad del prisionero, y no hay visitas personales durante los primeros meses después del ingreso.'
  },
  co: {
    title: 'Reglas estatales que aplican en todas las prisiones estatales de Colorado',
    guideLabel: 'Visitas en Colorado',
    dressCode: [
      'No se permite ropa de color verde sólido, gris, naranja, blanco, amarillo o camuflaje, ni nada que se asemeje a lo que usan las personas encarceladas — los uniformes de las prisiones de Colorado son verdes.',
      'Los pantalones, faldas y vestidos deben llegar al menos hasta la parte superior de la rodilla; no se permiten pantalones cortos de ningún tipo ni pantalones cargo, ni nada ajustado o ceñido al cuerpo como mallas, spandex o pantalones de yoga.',
      'Nada transparente, roto o revelador — no se permite escote, espalda ni abdomen expuestos al estar de pie, sentado o al inclinarse, ni blusas de tirantes finos o tipo espagueti; se requiere ropa interior apropiada y no debe ser visible.',
      'No se permiten sombreros, capuchas, guantes, bufandas ni abrigos en la sala de visitas (excepto cubiertas religiosas para la cabeza), nada que muestre imágenes de pandillas, drogas, o de contenido profano u ofensivo, y la joyería se limita a un juego de anillo de bodas, un medallón religioso y artículos de alerta médica.'
    ],
    idRule:
      'Todo visitante de 18 años o más debe mostrar una identificación con foto válida y vigente emitida por el gobierno — la tarjeta física, no una fotocopia ni una identificación digital — y debe estar ya en la lista aprobada de la persona encarcelada, que tiene un límite de 12 adultos (los menores no cuentan).',
    itemsRule:
      'Casi nada puede ingresar a la sala de visitas. El único artículo permitido para compras es una tarjeta de débito o crédito para las máquinas expendedoras — no se permite efectivo ni monedas — y los teléfonos, relojes y otros dispositivos electrónicos están prohibidos; los medicamentos recetados deben estar en su envase original etiquetado.',
    schedulingRule:
      'Cada visitante presenta la solicitud a la institución donde se encuentra la persona, y las visitas generalmente son con cita previa, con días y horarios establecidos por esa prisión — no existe un horario único a nivel estatal, así que confirme el proceso de la institución y reserve con anticipación antes de viajar.'
  },
  or: {
    title: 'Reglas estatales que aplican en todas las prisiones estatales de Oregón',
    guideLabel: 'Visitas en Oregón',
    dressCode: [
      'Se requiere calzado y ropa interior; la ropa interior no debe ser visible a través de la ropa, y no se permiten sostenes con varilla porque activan el detector de metales.',
      'No se permite ropa de color azul ni mezclilla azul de ningún tipo, ni nada de camuflaje — ambos se asemejan a lo que usan los adultos bajo custodia y el personal.',
      'Los vestidos, faldas y pantalones cortos deben llegar a la rodilla estando de pie; nada transparente, escotado, ajustado o revelador, ni blusas tipo halter, tubo o crop top.',
      'No se permiten sombreros ni cubiertas para la cabeza, excepto las religiosas (que pueden ser inspeccionadas), ni nada con símbolos de pandillas o con palabras o imágenes ofensivas o sugerentes.'
    ],
    idRule:
      'Todo visitante debe estar ya en la lista aprobada del adult in custody (se realiza una verificación de antecedentes a cualquier persona de 15 años o más). Los adultos deben llevar una identificación con foto emitida por el gobierno para una visita de contacto; un visitante sin identificación con foto puede quedar limitado a una visita sin contacto.',
    itemsRule:
      'Casi nada puede ingresar a la sala de visitas — no se permiten teléfonos, dispositivos electrónicos, tabaco ni cigarrillos electrónicos. Los visitantes pueden llevar una pequeña cantidad de cambio para las máquinas expendedoras (comúnmente entre $15 y $20 — confirme con la institución), hasta cinco fotografías y las llaves del auto; los casilleros guardan el resto.',
    schedulingRule:
      'El adult in custody arma la lista de visitas con la solicitud CD-50, y todo visitante debe estar aprobado antes de programar una visita. Si las visitas son con cita previa o por orden de llegada — y los días y horarios — varían según la institución, así que confirme el proceso de la prisión específica antes de viajar.'
  },
  nj: {
    title: 'Reglas estatales que aplican en todas las prisiones estatales de Nueva Jersey',
    guideLabel: 'Visitas en Nueva Jersey',
    dressCode: [
      'Las blusas deben cubrir los hombros y el abdomen — no se permiten blusas tipo tank, tubo o halter, ni escotadas, ni nada transparente, de malla fina, ajustado al cuerpo o con capucha.',
      'La parte inferior debe cubrir desde la cintura hasta la rodilla — los pantalones cortos deben ser estilo Bermuda hasta la rodilla, y las faldas y vestidos deben llegar a la rodilla estando sentado; no se permiten pantalones estilo cargo, ni nada de talle bajo que exponga el abdomen o los glúteos.',
      'Nada que se asemeje a lo que usan las personas encarceladas, los oficiales u otros trabajadores — no se permite ropa de estilo militar o uniforme, ni nada de color caqui, naranja, gris o camuflaje.',
      'No se permiten sombreros ni cubiertas para la cabeza (excepto religiosas o médicas), ni chanclas, sandalias sin talón, calzado con ruedas o botas con puntera de acero, ni nada con mensajes ofensivos o de actividad ilegal.'
    ],
    idRule:
      'Todo visitante adulto necesita una identificación con foto — licencia de conducir, identificación estatal sin licencia, pasaporte, tarjeta de Medicaid con foto o identificación de empleador con foto (no se acepta una tarjeta de Seguro Social). Todo visitante, adulto o menor, debe estar en la lista aprobada de la persona encarcelada.',
    itemsRule:
      'Casi nada puede ingresar a la sala de visitas — no se permiten teléfonos, dinero (efectivo o monedas), bolsos, fotografías ni comida. Una bolsa transparente de plástico o con cierre hermético puede contener artículos autorizados, y se proporcionan casilleros; los medicamentos vitales, como un inhalador, se entregan al supervisor de la visita.',
    schedulingRule:
      'La persona encarcelada designa a los visitantes, y todos deben estar en la lista aprobada (los antecedentes penales deben divulgarse, pero no constituyen una prohibición automática). Las visitas son solo con cita previa — programadas con la institución con al menos 48 horas de anticipación — y la cantidad de visitantes permitidos a la vez varía según la institución (comúnmente hasta cuatro adultos más menores, a veces menos).'
  },
  va: {
    title: 'Reglas estatales que aplican en todas las prisiones estatales de Virginia',
    guideLabel: 'Visitas en Virginia',
    dressCode: [
      'La ropa debe cubrir desde el cuello hasta la rótula de la rodilla. Se requiere ropa interior, y se requiere calzado — no se permite ir descalzo.',
      'No se permite ropa ajustada al cuerpo — mallas, spandex, jeggings o leotardos — a menos que se usen debajo de ropa que cumpla con el código; no se permiten blusas tipo tubo, tank o halter a menos que estén cubiertas.',
      'Nada que exponga el abdomen, el costado, la espalda o el escote, nada transparente, y no se permiten minifaldas, vestidos, pantalones cortos, faldas-pantalón (skorts) o culotes a la altura de la rótula o por encima de ella.',
      'Nada que se asemeje a lo que usan las personas encarceladas, y nada con símbolos de pandillas, racistas o inapropiados. No se permiten relojes ni tecnología vestible; los paraguas deben quedar en el vehículo.'
    ],
    idRule:
      'Todo visitante adulto aprobado debe mostrar una identificación con foto válida emitida por el gobierno, la cual se retiene hasta que termine la visita, con el nombre coincidiendo con el de la solicitud. Un menor es avalado por el adulto aprobado con quien llega (más una declaración notariada de los padres si ese adulto no es el padre, madre o tutor legal).',
    itemsRule:
      'No se permite comida, bebidas ni dinero para máquinas expendedoras — los visitantes deben llevar muy poco además de la identificación, y los abrigos y bolsos van a un área de almacenamiento. Un medicamento que el visitante deba mantener consigo requiere una nota médica y aprobación con al menos una semana de anticipación. Qué más se puede llevar varía según la institución.',
    schedulingRule:
      'Todo visitante solicita en línea y pasa una verificación de antecedentes a través de la Unidad Central de Visitación (la persona encarcelada ya no mantiene una lista); la aprobación dura tres años. Las visitas se reservan a través del programador en línea hasta con 14 días de anticipación — una visita por fin de semana — y una persona recién llegada no puede recibir visitas durante sus primeros 60 días.'
  },
  me: {
    title: 'Reglas estatales que aplican en todas las instalaciones de Maine DOC',
    guideLabel: 'Visitas en Maine',
    dressCode: [
      'Se requiere ropa interior y no debe ser visible. Nada transparente, escotado, ajustado o revelador — no se permiten blusas tipo tank, halter, tubo, sin mangas o crop top, abdomen expuesto ni escote a la vista.',
      'Las faldas, vestidos y pantalones cortos deben llegar a la rodilla, con ninguna abertura de más de dos pulgadas por encima de ella.',
      'No se permiten sombreros, cintas para la cabeza, capuchas ni sudaderas con capucha, ni chaquetas de exterior en la sala de visitas. Las instalaciones de Windham también prohíben camisas con cierre.',
      'No se permiten mallas, spandex, pantalones de yoga o pantalones cortos deportivos, ni nada que se asemeje a la ropa de los residentes o del personal; se requiere calzado cerrado. Cada institución publica su propia lista, así que verifique antes de viajar.'
    ],
    idRule:
      'Los adultos deben presentar una identificación con foto emitida por el gobierno, como una licencia de conducir. Un visitante menor de 18 años debe llevar una identificación con foto emitida por el gobierno o una copia certificada de su acta de nacimiento.',
    itemsRule:
      'Nada puede ingresar a la sala de visitas — las billeteras, teléfonos y bolsos deben quedar en un casillero o en el vehículo. Los medicamentos deben quedarse en el auto, excepto artículos de emergencia (nitroglicerina, un inhalador, un autoinyector de epinefrina). El Southern Maine Women\'s Reentry Center es una excepción, ya que permite algo de comida externa.',
    schedulingRule:
      'Cada visitante solicita y pasa una verificación de antecedentes (realizada por la State Bureau of Identification; puede tardar hasta seis semanas), y se le informa al residente cuando alguien es aprobado. Las visitas son solo con cita previa — solicítela con al menos dos días hábiles de anticipación — con hasta tres visitantes a la vez y sin visitas sin cita.'
  },
  la: {
    title: 'Reglas estatales que aplican en todas las prisiones estatales de Luisiana',
    guideLabel: 'Visitas en Luisiana',
    dressCode: [
      'No se permite mezclilla ni tela de chambray, ni sudaderas grises, azules o blancas, ni camisetas blancas (se asemejan a la ropa de los reclusos); no se permite camuflaje ni ropa estilo BDU que se asemeje al uniforme de los oficiales.',
      'Se requiere ropa interior y no debe ser visible. Nada transparente; no se permiten trajes de baño, blusas sin tirantes, tipo tubo, halter o tank, blusas escotadas o que expongan el abdomen, ni spandex, Lycra o mallas.',
      'Las faldas, pantalones cortos y vestidos no deben quedar a más de una pulgada por encima de la rodilla, sin aberturas o agujeros reveladores.',
      'No se permiten pantuflas de casa, sandalias de ducha ni chanclas — el calzado debe permanecer puesto. No se permiten sombreros ni cubiertas para la cabeza, salvo por motivos religiosos; nada relacionado con pandillas ni obsceno.'
    ],
    idRule:
      'Lleve una identificación con foto válida para cada visitante de 15 años o más — licencia de conducir, identificación estatal, identificación militar o pasaporte. (Un aviso estatal indica 18 años o más, pero las páginas de las instituciones indican 15, así que lleve identificación para cualquier persona de 15 años o más.)',
    itemsRule:
      'Deje billeteras, bolsos, teléfonos y efectivo en su vehículo cerrado con llave. Cada prisión permite artículos limitados en la visita — en Angola, hasta $300 en efectivo por familia y artículos específicos para bebé; algunas prisiones permiten cambio para máquinas expendedoras y una tarjeta de débito para el quiosco de JPay.',
    schedulingRule:
      'La persona encarcelada inicia la solicitud — el visitante la envía por correo postal o electrónico a la institución (no se aceptan faxes), y la aprobación sigue una verificación de antecedentes. Cada persona mantiene hasta 10 visitantes aprobados, modificables cada cuatro meses; la lista de visitantes aprobados generalmente no está vigente durante los primeros 30 días del ingreso (aunque los familiares inmediatos podrían visitar antes); y dos visitas al mes es la norma a nivel estatal.'
  },
  ms: {
    title: 'Reglas estatales que aplican en cada prisión estatal de MDOC',
    guideLabel: 'Visitas en Misisipi',
    dressCode: [
      'Se requieren camisas y zapatos cerrados de exterior; se requiere ropa interior (un sostén para las mujeres). No se permiten tops sin mangas, cortos ni sin tirantes, tirantes finos ni el abdomen descubierto.',
      'Nada transparente, demasiado ajustado ni revelador — no se permiten pantalones de yoga, mallas (leggings), spandex, pantalones de cadera, pantalones cortos de correr o de ciclismo, minifaldas ni pantalones cortados (cutoffs).',
      'Los pantalones cortos deben llegar a la rodilla; las faldas y los vestidos no más cortos que una pulgada por encima de la rodilla, sin abertura por encima de la rodilla al estar sentado.',
      'No se permiten sombreros ni prendas para cubrir la cabeza, salvo por motivos religiosos; la joyería se limita a un anillo de matrimonio, un medallón religioso y una pulsera de alerta médica — no se permite joyería de perforación corporal (piercing).',
      'El código de vestimenta se aplica también a los niños, y una infracción hace que se niegue la visita y puede conllevar una suspensión de visitas de un año.'
    ],
    idRule:
      'Los visitantes de 18 años en adelante presentan una identificación con foto válida emitida por el gobierno (licencia de conducir, identificación estatal o pasaporte). Las edades de 16 a 17 años necesitan una identificación con foto que muestre la fecha de nacimiento; los niños de 15 años o menos llevan un acta de nacimiento legible.',
    itemsRule:
      'No se permiten teléfonos, carteras, bolsos, tabaco ni efectivo dentro — todo queda guardado con llave en el vehículo. Las visitas son sin efectivo, con tarjetas de débito prepagadas que se venden en el área de visitas; se permite una pañalera de bebé (hasta 4 pañales, 2 biberones, un cambio de ropa, un chupete y toallitas).',
    schedulingRule:
      'La persona encarcelada inicia la solicitud de visitante — el formulario solo proviene de ella, nunca en línea. Se permiten hasta 5 visitantes por visita; la frecuencia depende del nivel de custodia (hasta unas cuatro veces al mes en custodia mínima, hasta una vez al mes en custodia cerrada). El MDOC no publica horarios, así que confirme los días y las horas con la institución.'
  },
  nh: {
    title: 'Reglas estatales que aplican en cada institución de NHDOC',
    guideLabel: 'Visitas en New Hampshire',
    dressCode: [
      'Se requiere ropa interior. Nada transparente, escotado, de estilo camiseta sin mangas (tank/halter/tube), sin mangas ni que deje el abdomen al descubierto; nada de ropa deportiva ajustada, pantalones de spandex, sudadera, yoga ni rompevientos.',
      'Las faldas, los vestidos y los pantalones cortos que lleguen a dos o más pulgadas por encima de la rodilla no se permiten, así como las aberturas (los pliegues de hasta cuatro pulgadas sí se permiten).',
      'Nada de sombreros, diademas ni ropa con capucha de ningún tipo; nada de camisas con cierre de ningún tipo, ni chaquetas de exterior, chales, bufandas ni camisas abiertas y sueltas por encima — los abrigos van en un casillero o se quedan en el vehículo.',
      'Nada de ropa con hoyos, rasgaduras ni bolsillos arrancados; nada de overoles; nada que se parezca a la ropa de los reclusos, los uniformes militares o de las fuerzas del orden, ni el uniforme de enfermería (scrubs).',
      'Nada de adornos metálicos para el cabello; la joyería se limita a un juego de anillo de matrimonio, un colgante religioso y artículos de alerta médica.'
    ],
    idRule:
      'Cada visitante debe estar aprobado primero en la lista de visitas de la persona encarcelada, quien inicia toda solicitud. Los adultos presentan una identificación con foto emitida por el gobierno, vigente o vencida, que el oficial de seguridad retiene durante la visita.',
    itemsRule:
      'Casi nada entra a la sala de visitas — los teléfonos celulares, el tabaco y la mayoría de los objetos personales deben quedar en los casilleros pequeños afuera de la sala de visitas o en el vehículo. El dinero para la cuenta de la persona nunca se entrega en la visita.',
    schedulingRule:
      'Las visitas de la población general son sin cita, durante el bloque publicado para la unidad de alojamiento de la persona — ninguna prisión del NHDOC realiza visitas de fin de semana para la población general a mediados de 2026, salvo el sábado en la institución para mujeres. Confirme el horario vigente con la institución específica, ya que puede cambiar sin previo aviso.'
  },
  vt: {
    title: 'Reglas estatales que aplican en cada institución de VTDOC',
    guideLabel: 'Visitas en Vermont',
    dressCode: [
      'Nada con agujeros, roturas, desgarros ni bolsillos rotos; nada que se parezca a un uniforme penitenciario o de las fuerzas del orden; nada de sudaderas.',
      'Nada transparente, ajustado, escotado ni que deje el abdomen al descubierto; nada de camisetas de tirantes, tops halter ni tube tops.',
      'Nada de faldas, vestidos ni pantalones cortos con aberturas que lleguen a dos pulgadas o más por encima de la rodilla; nada de adornos metálicos para el cabello.',
      'El criterio del personal es definitivo, y los niños de 10 años o menos reciben un pase discrecional para algunas reglas.'
    ],
    idRule:
      'Los adultos necesitan una identificación con foto emitida por el gobierno cuyo nombre y dirección coincidan con la lista de visitas. Los niños pueden usar cualquier identificación con foto emitida por el gobierno, una tarjeta de Seguro Social o un certificado de nacimiento.',
    itemsRule:
      'Nada entra en la sala de visitas salvo biberones, chupetes o vasos con pico para niños de dos años o menos — los casilleros guardan todo lo demás, y el tabaco permanece en el vehículo.',
    schedulingRule:
      'Las visitas son sin cita, durante el bloque publicado por unidad de alojamiento (o, en Newport y Swanton, alfabéticamente por apellido) — una visita por semana, hasta dos horas. No se procesa al visitante que llegue con 30 minutos o menos restantes en un período; confirme el bloque vigente con la institución antes de viajar.'
  },
  ri: {
    title: 'Reglas estatales que aplican en todo el campus de las ACI',
    guideLabel: 'Visitas en Rhode Island',
    dressCode: [
      'Nada de caqui ni beige (nada que pueda confundirse con la ropa de los reclusos); los sostenes con varillas metálicas pueden hacer sonar el detector de metales, y la ropa interior es obligatoria.',
      'Nada transparente, escotado, estilo camiseta sin mangas (tank/halter/tube), sin mangas ni que deje el abdomen al descubierto; nada de faldas, vestidos ni pantalones cortos con aberturas de dos pulgadas o más por encima de la rodilla.',
      'Nada de ropa ajustada o deportiva —pantalones de spandex, con estribo, deportivos (sweat) o tipo "swish"; nada de sombreros, cintas para la cabeza ni ropa con capucha; nada de ropa rasgada ni con bolsillos arrancados.',
      'Nada de camuflaje, ropa de estilo militar ni nada que parezca un uniforme —incluida la ropa quirúrgica de enfermería (scrubs); nada de joyería salvo los anillos de boda y de compromiso y los artículos de alerta médica; nada de chanclas.'
    ],
    idRule:
      'La persona encarcelada lo agrega a usted a la lista de visitas — no hay ningún formulario que el visitante deba presentar. Identificación válida de adulto: una licencia de conducir, un pasaporte, una identificación militar o una identificación de las agencias estatales (no se aceptan tarjetas de Seguro Social ni identificaciones de asistencia social).',
    itemsRule:
      'Lleve solo identificación y hasta $10 en monedas en una bolsa de plástico transparente para las máquinas expendedoras — los casilleros de la entrada guardan abrigos, bolsos y teléfonos. La única excepción de medicamentos es la nitroglicerina.',
    schedulingRule:
      'Las visitas en persona no necesitan cita — cada institución publica un horario mensual por unidad de alojamiento, con distintos días cerrados; las visitas por video se solicitan con al menos 24 horas de anticipación a través de Securus. Llame a la línea de información automatizada las 24 horas al (401) 414-2871 para confirmar el horario vigente.'
  },
  de: {
    title: 'Reglas estatales que aplican en cada prisión de Delaware DOC',
    guideLabel: 'Visitas en Delaware',
    dressCode: [
      'Nada de trajes de baño, bodies, tops sin tirantes o escotados, camisas sin mangas ni tops tipo tubo; nada transparente ni nada que el personal considere revelador — el personal tiene la última palabra.',
      'Vestidos, faldas, faldas pantalón (culottes) y bermudas no más cortas de dos pulgadas por encima de la rodilla, medidas desde el pliegue en la parte de atrás de la rodilla.',
      'Nada de pantalones, shorts o leggings de licra (spandex) usados solos — se permiten leggings debajo de una falda.',
      'Algunas instituciones agregan más reglas — Baylor y Howard R. Young prohíben el calzado con punta o talón abiertos, los Crocs y las sudaderas con capucha.'
    ],
    idRule:
      'Todo visitante necesita una identificación con foto (los requisitos de edad varían según la institución; en James T. Vaughn, la dirección en la identificación debe coincidir con la dirección dada al programar la visita). Los niños de 14 a 18 años necesitan su propia identificación con foto en Howard R. Young.',
    itemsRule:
      'Casi nada — todo lo que no esté en la breve lista permitida por cada institución debe quedar guardado en el vehículo; los objetos no autorizados no se pueden dejar en el vestíbulo. El dinero para la cuenta de la persona nunca se entrega en la visita; las cantidades y los artículos permitidos varían por institución.',
    schedulingRule:
      'No hay solicitud de visitante ni lista de aprobados — las visitas se reservan por teléfono llamando a la línea de programación de la institución, por lo general con una semana de anticipación. Cada prisión tiene su propia línea, horario y reglas, y en Howard R. Young y Sussex una visita reservada no se puede cambiar ni cancelar.'
  },
  wy: {
    title: 'Reglas estatales que aplican en cada institución de WDOC',
    guideLabel: 'Visitas en Wyoming',
    dressCode: [
      'Ropa conservadora, no ajustada ni sugerente. Se permiten los jeans azules.',
      'Los vestidos, las faldas y los pantalones cortos no deben quedar a más de dos pulgadas por encima del centro de la rótula, abertura incluida; no se permiten las faldas cruzadas (wrap-around).',
      'Nada que exponga el pecho, la espalda, los muslos o el abdomen — nada de tops halter o tipo tubo, escotes bajos, tops cortos ni telas transparentes. Se exige ropa interior; se exige calzado.',
      'Nada de sudaderas con capucha en el área de visitas; los sombreros, paraguas y abrigos gruesos van en un casillero o se quedan en el vehículo.',
      'Cada institución agrega sus propias restricciones (por ejemplo, la State Penitentiary también prohíbe el rojo, el naranja y el camuflaje), así que confirme las reglas de la institución específica antes de viajar.'
    ],
    idRule:
      'Todos necesitan identificación, incluidos los niños. Los visitantes de 16 años o más presentan una identificación con foto que se intercambia por una credencial de visitante durante la visita.',
    itemsRule:
      'Casi nada — no se permiten teléfonos, cámaras, dispositivos de grabación ni tabaco fuera del vehículo. Se permiten hasta $20 en monedas o fichas para las máquinas expendedoras y una lista publicada de artículos de bebé; el dinero para la cuenta de la persona nunca se entrega en la visita.',
    schedulingRule:
      'La persona encarcelada inicia el trámite de la lista de visitas, y la institución le notifica la decisión a ella, no al visitante. La programación es en su mayoría por orden de llegada según los horarios publicados de cada institución — llegue dentro de los 15 minutos posteriores al inicio de la sesión.'
  },
  ut: {
    title: 'Reglas estatales que aplican en cada prisión estatal de Utah',
    guideLabel: 'Visitas en Utah',
    dressCode: [
      'Ropa modesta y holgada únicamente — nada ajustado o ceñido al cuerpo, incluidos los leggings, los pantalones de yoga y las camisas entalladas.',
      'Las prendas superiores necesitan mangas que cubran todo el hombro, con la línea del escote, la espalda, el abdomen y las axilas cubiertos en todo momento; nada de telas transparentes ni estilos rotos.',
      'Los vestidos, las faldas y los pantalones cortos deben llegar a la rótula al estar de pie, aberturas incluidas.',
      'Nada de ropa lisa blanca, naranja o granate (lo que usan las personas encarceladas), nada de pantalones grises con camisa negra ni uniformes médicos (scrubs), y nada de camuflaje ni ropa con capucha.',
      'Se requiere calzado cerrado. Todo visitante pasa por un escáner corporal — los sostenes con aros y la ropa con exceso de metal no lo pasan.'
    ],
    idRule:
      'Todo visitante de 16 años o más presenta una identificación con foto emitida por el gobierno, que el personal retiene en la entrada a cambio de una tarjeta de visitante hasta el final de la visita.',
    itemsRule:
      'Lleve solo lo que la institución permita — la mayoría de los objetos personales no se permiten en la sala de visitas. Las monedas para las máquinas expendedoras van en una bolsa transparente, y se permite una tarjeta de débito o crédito.',
    schedulingRule:
      'No se admiten visitas sin cita. Los visitantes se inscriben con anticipación a través de los formularios de inscripción por unidad de alojamiento en corrections.utah.gov; las visitas en persona son de viernes a domingo, y las visitas por video, de lunes a jueves.'
  },
  tx: {
    title: 'Reglas estatales que aplican en cada unidad de TDCJ',
    guideLabel: 'Visitas en Texas',
    dressCode: [
      'No se permite ropa ajustada, reveladora ni transparente.',
      'Las camisas y los vestidos sin mangas se permiten solo si los hombros permanecen cubiertos.',
      'Los pantalones cortos y las faldas no deben quedar a más de tres pulgadas por encima del centro de la rodilla estando de pie.',
      'No se permite ropa con imágenes o lenguaje profano u ofensivo.',
      'Los visitantes no pueden usar ropa totalmente blanca (las personas encarceladas visten de blanco). Se permiten sandalias y zapatos de punta abierta.'
    ],
    idRule:
      'Cada visitante adulto (18 años o más) debe presentar una identificación con foto vigente emitida por el gobierno, y al menos un documento de identificación debe mostrar una dirección física actual.',
    itemsRule:
      'No se permiten teléfonos celulares, relojes inteligentes, cámaras, otros dispositivos electrónicos, tabaco, papel moneda, comida ni bebidas de afuera. Se permite una cartera pequeña o un monedero transparente y hasta $35 en monedas para las máquinas expendedoras.',
    schedulingRule:
      'Las visitas se programan a través del Portal de Visitas en Línea de TDCJ, con al menos un día y no más de siete días de anticipación. Una visita por fin de semana es la regla habitual.'
  },
  ca: {
    title: 'Reglas estatales que aplican en cada institución de CDCR',
    guideLabel: 'Visitas en California',
    dressCode: [
      'Evite la mezclilla azul (denim), el naranja, el amarillo brillante, el caqui, el tostado o beige, el verde bosque u oliva, y el camuflaje — estos colores coinciden con lo que visten las personas encarceladas o el personal.',
      'Nada de camisetas sin mangas, tops tipo tubo, tirantes finos, tela transparente ni escotes pronunciados; los hombros deben quedar cubiertos en su mayor parte.',
      'Las faldas y los pantalones cortos deben quedar a menos de dos pulgadas de la rodilla. Los leggings por sí solos por lo general no se permiten.',
      'Solo calzado de punta cerrada — nada de sandalias, chanclas ni zapatos sin talón.',
      'Los sostenes con varilla activan el detector de metales; un sostén sin varilla o deportivo evita el problema.'
    ],
    idRule:
      'Se requiere una identificación con foto vigente emitida por el gobierno que coincida con el nombre en la solicitud aprobada.',
    itemsRule:
      'No se permiten teléfonos celulares, carteras, otros dispositivos electrónicos, comida ni bebidas dentro. Una bolsa transparente pequeña puede contener una llave del auto y dinero para las máquinas expendedoras en monedas y billetes de $1, hasta el límite que la institución publique en su página de visitas.',
    schedulingRule:
      'Los visitantes deben ser aprobados con el Formulario CDCR 106 antes de una primera visita, y luego programar a través del sistema en línea VSA. Por lo general no se permiten visitas sin cita.'
  },
  wv: {
    title: 'Reglas estatales que aplican en cada prisión estatal de Virginia Occidental',
    guideLabel: 'Visitas en Virginia Occidental',
    dressCode: [
      'Virginia Occidental no prohíbe ningún color de ropa a los visitantes, pero la vestimenta debe ser recatada: se exige sostén (sin varilla metálica, que no pasará el detector de metales), y los visitantes hombres deben usar camisa.',
      'No se permiten pantalones cortos, tops sin mangas ni ropa ajustada, transparente, translúcida, escotada o que deje el abdomen al descubierto; y no se permiten sombreros ni prendas para cubrir la cabeza.',
      'No se permite calzado con punta de acero o de material compuesto; la joyería se limita a un anillo de matrimonio (sin relojes), y los artículos con metal o cuentas metálicas pueden no pasar el detector.',
      'Se exige un juego completo de ropa interior, y el comandante de turno tiene la última palabra sobre si un atuendo es apropiado.'
    ],
    idRule:
      'La persona encarcelada le envía por correo a cada posible visitante una Application to Visit (solicitud de visita), que se aprueba tras una verificación de antecedentes; una persona encarcelada puede tener hasta seis visitantes adultos aprobados. Cada adulto lleva una identificación con foto emitida por el gobierno (licencia de conducir, identificación estatal, pasaporte o identificación militar — no una tarjeta de Seguro Social ni una identificación impresa por uno mismo).',
    itemsRule:
      'Casi nada entra a la sala de visitas — no se permiten teléfonos, carteras, bolsos ni tabaco; guárdelos en su vehículo o en un casillero del vestíbulo. No hay máquinas expendedoras para visitantes, ni comida ni bebida en el área de visitas.',
    schedulingRule:
      'Las visitas a la prisión son los sábados y domingos, de 8:00 a. m. a 4:00 p. m., y la persona encarcelada las programa por adelantado a través del procedimiento de la institución — no hay visitas sin cita ni un sistema de programación en línea a nivel estatal, así que confirme con la institución específica.'
  },
};
