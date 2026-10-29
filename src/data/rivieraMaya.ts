/* ===========================================================================
   Riviera Maya season — Lucía paints in person in Tulum for three months.
   Honest local strategy: she is physically in Tulum for a fixed window, so
   these pages describe a real, temporary presence (never a fake address).
   Bilingual: Tulum/Playa/Cancún buyers are largely English-speaking tourists
   and expats, plus Mexican locals (Mexican Spanish: "funda", "lomito").

   Prices in MXN are not set yet → everything here is quoted by WhatsApp and
   the pages publish Service schema only (no Product/price claims).
=========================================================================== */

export const RIVIERA = {
  startISO: "2026-11-24",
  endISO: "2027-02-24",
  rangeEs: "del 24 de noviembre de 2026 al 24 de febrero de 2027",
  rangeEn: "November 24, 2026 – February 24, 2027",
  baseEs: "Tulum",
} as const;

export type RmLang = "es" | "en";

export interface RmSection {
  h2: string;
  paras: string[];
}

export interface RmFaq {
  question: string;
  answer: string;
}

export interface RmPage {
  /** unique key shared by the ES and EN versions of the same page */
  key: string;
  lang: RmLang;
  /** URL path without slashes, e.g. "arte-personalizado-tulum" or "en/custom-art-tulum" */
  path: string;
  kind: "hub" | "city" | "service" | "guide";
  /** place name for schema areaServed */
  place: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: RmSection[];
  faqs: RmFaq[];
  /** product slug whose photos illustrate the page */
  heroProduct: string;
  /** product slugs whose photos fill the gallery */
  galleryProducts: string[];
  waMsg: string;
}

const datesEs = `Lucía estará pintando en persona en Tulum ${RIVIERA.rangeEs}.`;
const datesEn = `Lucía is painting in person in Tulum from ${RIVIERA.rangeEn}.`;

const orderNoteEs =
  "Los retratos en lienzo toman mínimo 15 días, así que si quieres el tuyo antes de que termine la temporada, escríbenos con tiempo (idealmente antes del 9 de febrero).";
const orderNoteEn =
  "Canvas portraits take at least 15 days, so if you want yours before the season ends, message us early (ideally before February 9).";

const commonFaqsEs: RmFaq[] = [
  {
    question: "¿Cuánto cuesta un retrato pintado a mano en Tulum?",
    answer:
      "El precio depende del tamaño, del número de personas o mascotas y del tipo de pieza. Escríbenos por WhatsApp con tu foto y te confirmamos el valor y la forma de pago al instante.",
  },
  {
    question: "¿Cómo encargo?",
    answer:
      "Todo es por WhatsApp: nos mandas tu foto o tu idea, te confirmamos precio y tiempo, apartas con un abono y Lucía lo pinta a mano. Coordinamos la entrega contigo.",
  },
  {
    question: "¿Hasta cuándo puedo hacer un pedido en la Riviera Maya?",
    answer: `${datesEs} ${orderNoteEs}`,
  },
];

const commonFaqsEn: RmFaq[] = [
  {
    question: "How much does a hand-painted portrait cost in Tulum?",
    answer:
      "It depends on size, how many people or pets, and the type of piece. Send us your photo on WhatsApp and we'll confirm the price and payment options right away.",
  },
  {
    question: "How do I order?",
    answer:
      "Everything happens on WhatsApp: send your photo or idea, we confirm price and timing, you place a deposit, and Lucía paints it by hand. We arrange delivery with you.",
  },
  {
    question: "Until when can I order in the Riviera Maya?",
    answer: `${datesEn} ${orderNoteEn}`,
  },
];

export const rmPages: RmPage[] = [
  // ------------------------------------------------------------------ HUB
  {
    key: "hub",
    lang: "es",
    path: "arte-personalizado-riviera-maya",
    kind: "hub",
    place: "Riviera Maya",
    title: "Arte personalizado en la Riviera Maya | Luciptera",
    description:
      "Retratos de mascotas y personas, ropa pintada y body painting, pintados a mano en persona en Tulum, Playa del Carmen y Cancún. Temporada nov 2026 – feb 2027.",
    h1: "Arte pintado a mano en la Riviera Maya",
    lead:
      "Lucía, la artista detrás de Luciptera, se muda a Tulum por una temporada. Durante tres meses pinta en persona retratos de tus mascotas y de tu gente, ropa personalizada y body painting para tus fiestas, en Tulum, Playa del Carmen y Cancún.",
    sections: [
      {
        h2: "Una artista colombiana pintando en Tulum por tres meses",
        paras: [
          `${datesEs} Es la primera vez que Luciptera trae su arte de Medellín al Caribe mexicano, así que la agenda es limitada: cada pieza se pinta a mano, una por una.`,
          "Si estás de vacaciones, viviendo en la zona o organizando un evento, es la oportunidad de tener una obra original hecha cerca de ti, sin envíos internacionales.",
        ],
      },
      {
        h2: "Qué pinta Lucía en la Riviera Maya",
        paras: [
          "Retratos de mascotas en lienzo: tu lomito o tu gato pintado a mano desde tu foto favorita, ideal para quienes viven con sus mascotas en Tulum o Playa.",
          "Retratos de personas y parejas: un recuerdo de tu viaje, tu luna de miel o tu boda en la playa.",
          "Ropa pintada a mano: chaquetas, jeans y camisetas con el diseño que imagines, pintados sobre tu propia prenda.",
          "Body painting y pintura facial: para fiestas, festivales, sesiones de fotos y celebraciones.",
        ],
      },
      {
        h2: "Tulum, Playa del Carmen y Cancún",
        paras: [
          "Lucía vive en Tulum durante la temporada, así que ahí es donde más fácil coordinamos entregas y sesiones. Para Playa del Carmen (a una hora) y Cancún (a unas dos horas) organizamos la entrega o la cita contigo por WhatsApp.",
        ],
      },
    ],
    faqs: commonFaqsEs,
    heroProduct: "retratos-de-mascotas",
    galleryProducts: ["retratos-de-personas", "retratos-de-mascotas", "chaquetas-pintadas-a-mano", "jeans-pintados-a-mano"],
    waMsg: "Hola Luciptera 🌴 quiero un arte personalizado en la Riviera Maya",
  },
  {
    key: "hub",
    lang: "en",
    path: "en/riviera-maya",
    kind: "hub",
    place: "Riviera Maya",
    title: "Custom Hand-Painted Art in the Riviera Maya | Luciptera",
    description:
      "Pet and people portraits, hand-painted clothing and body painting — painted in person in Tulum, Playa del Carmen and Cancún. Season: Nov 2026 – Feb 2027.",
    h1: "Hand-painted custom art in the Riviera Maya",
    lead:
      "Lucía, the artist behind Luciptera, is moving to Tulum for the season. For three months she's painting in person: portraits of your pets and loved ones, custom clothing, and body painting for your parties — in Tulum, Playa del Carmen and Cancún.",
    sections: [
      {
        h2: "A Colombian artist painting in Tulum for three months",
        paras: [
          `${datesEn} It's the first time Luciptera brings its art from Medellín to the Mexican Caribbean, so the calendar is limited — every piece is painted by hand, one at a time.`,
          "Whether you're on vacation, living in the area or planning an event, it's a chance to get an original painting made close to you, with no international shipping.",
        ],
      },
      {
        h2: "What Lucía paints in the Riviera Maya",
        paras: [
          "Pet portraits on canvas: your dog or cat painted by hand from your favorite photo — perfect if you live with your pets in Tulum or Playa.",
          "People and couple portraits: a keepsake of your trip, your honeymoon or your beach wedding.",
          "Hand-painted clothing: jackets, jeans and tees with any design you imagine, painted on your own garment.",
          "Body painting and face painting: for parties, festivals, photo shoots and celebrations.",
        ],
      },
      {
        h2: "Tulum, Playa del Carmen and Cancún",
        paras: [
          "Lucía is based in Tulum for the season, so that's where deliveries and sessions are easiest. For Playa del Carmen (about an hour away) and Cancún (about two hours) we arrange delivery or your appointment over WhatsApp.",
        ],
      },
    ],
    faqs: commonFaqsEn,
    heroProduct: "retratos-de-mascotas",
    galleryProducts: ["retratos-de-personas", "retratos-de-mascotas", "chaquetas-pintadas-a-mano", "jeans-pintados-a-mano"],
    waMsg: "Hi Luciptera 🌴 I'd like a custom painting in the Riviera Maya",
  },

  // ---------------------------------------------------------------- TULUM
  {
    key: "tulum",
    lang: "es",
    path: "arte-personalizado-tulum",
    kind: "city",
    place: "Tulum",
    title: "Retratos pintados a mano en Tulum | Luciptera",
    description:
      "Retratos de mascotas y personas, ropa pintada y body painting hechos a mano en Tulum por una artista colombiana. Aldea Zamá, La Veleta, Región 15 y centro. Pide por WhatsApp.",
    h1: "Retratos y arte pintado a mano en Tulum",
    lead:
      "Un retrato de tu lomito, un cuadro de tu viaje o tu ropa convertida en arte: Lucía pinta a mano en Tulum durante toda la temporada, y te lo entrega en persona.",
    sections: [
      {
        h2: "Pintado aquí mismo, en Tulum",
        paras: [
          `${datesEs} Al estar en Tulum, la entrega es en persona y sin envíos: coordinamos contigo por WhatsApp para llevarlo a tu casa, tu villa o tu hotel en Aldea Zamá, La Veleta, Región 15, el centro o la zona de playa.`,
        ],
      },
      {
        h2: "Para quienes viven en Tulum con sus mascotas",
        paras: [
          "Tulum tiene una comunidad enorme de perros y gatos rescatados que se volvieron familia. Un retrato en lienzo pintado desde tu foto favorita es la forma más bonita de tenerlos en la pared, o de honrar a uno que ya partió.",
        ],
      },
      {
        h2: "Un recuerdo de tu viaje que no encuentras en ninguna tienda",
        paras: [
          "Si estás de visita, en vez de otro souvenir genérico llévate un retrato tuyo o de tu pareja pintado a mano. Se envuelve para viajar y cabe en la maleta en los tamaños pequeños.",
        ],
      },
      {
        h2: "Body painting para las fiestas de temporada",
        paras: [
          "Diciembre y enero son la temporada fuerte de fiestas y festivales en Tulum. Lucía hace body painting y pintura facial para fiestas, sesiones de fotos y celebraciones; escríbenos con tu idea y coordinamos lugar y hora.",
        ],
      },
    ],
    faqs: [
      ...commonFaqsEs,
      {
        question: "¿Entregan en Aldea Zamá, La Veleta o la zona hotelera?",
        answer: "Sí. Lucía está en Tulum toda la temporada y coordinamos contigo la entrega en tu zona por WhatsApp.",
      },
    ],
    heroProduct: "retratos-de-mascotas",
    galleryProducts: ["retratos-de-mascotas", "retratos-de-personas", "chaquetas-pintadas-a-mano"],
    waMsg: "Hola Luciptera 🌴 estoy en Tulum y quiero un retrato pintado a mano",
  },
  {
    key: "tulum",
    lang: "en",
    path: "en/custom-art-tulum",
    kind: "city",
    place: "Tulum",
    title: "Custom Hand-Painted Portraits in Tulum | Luciptera",
    description:
      "Pet and people portraits, hand-painted clothing and body painting made in Tulum by a Colombian artist. Aldea Zamá, La Veleta, Región 15 and downtown. Order on WhatsApp.",
    h1: "Custom hand-painted portraits in Tulum",
    lead:
      "A portrait of your rescue dog, a painting of your trip, or your clothes turned into art: Lucía paints by hand in Tulum all season long, and hands it to you in person.",
    sections: [
      {
        h2: "Painted right here in Tulum",
        paras: [
          `${datesEn} Because she's in Tulum, delivery is in person with no shipping: we coordinate over WhatsApp to bring it to your home, villa or hotel in Aldea Zamá, La Veleta, Región 15, downtown or the beach zone.`,
        ],
      },
      {
        h2: "For everyone living in Tulum with their pets",
        paras: [
          "Tulum has a huge community of rescue dogs and cats who became family. A canvas portrait painted from your favorite photo is the most beautiful way to hang them on your wall — or to honor one who has passed.",
        ],
      },
      {
        h2: "A souvenir you won't find in any shop",
        paras: [
          "If you're visiting, skip the generic souvenir and take home a hand-painted portrait of yourself or your partner. It's wrapped for travel, and the smaller sizes fit in a suitcase.",
        ],
      },
      {
        h2: "Body painting for the party season",
        paras: [
          "December and January are Tulum's big season for parties and festivals. Lucía does body painting and face painting for parties, photo shoots and celebrations — send us your idea and we'll set the place and time.",
        ],
      },
    ],
    faqs: [
      ...commonFaqsEn,
      {
        question: "Do you deliver to Aldea Zamá, La Veleta or the hotel zone?",
        answer: "Yes. Lucía is in Tulum all season and we arrange delivery in your area over WhatsApp.",
      },
    ],
    heroProduct: "retratos-de-mascotas",
    galleryProducts: ["retratos-de-mascotas", "retratos-de-personas", "chaquetas-pintadas-a-mano"],
    waMsg: "Hi Luciptera 🌴 I'm in Tulum and I'd like a hand-painted portrait",
  },

  // ------------------------------------------------------ PLAYA DEL CARMEN
  {
    key: "playa",
    lang: "es",
    path: "arte-personalizado-playa-del-carmen",
    kind: "city",
    place: "Playa del Carmen",
    title: "Retratos pintados a mano en Playa del Carmen | Luciptera",
    description:
      "Retratos de mascotas, parejas y familias pintados a mano en la Riviera Maya, con entrega coordinada en Playa del Carmen: Quinta Avenida, Playacar y centro. Pide por WhatsApp.",
    h1: "Retratos pintados a mano en Playa del Carmen",
    lead:
      "Familias, parejas y amantes de los animales en Playa del Carmen: Lucía está pintando a una hora de ti esta temporada, así que tu retrato llega sin envíos internacionales.",
    sections: [
      {
        h2: "A una hora de Tulum",
        paras: [
          `${datesEs} Lucía pinta desde Tulum y coordinamos contigo por WhatsApp la entrega en Playa del Carmen, ya sea cerca de la Quinta Avenida, en Playacar o en el centro.`,
        ],
      },
      {
        h2: "Retratos de familia para quienes viven en Playa",
        paras: [
          "Playa del Carmen es hogar de muchas familias mexicanas y extranjeras. Un retrato familiar en lienzo, con todos los integrantes y hasta las mascotas, es un regalo que se queda para siempre, perfecto para Navidad o Día de Reyes.",
        ],
      },
      {
        h2: "El regalo de San Valentín que nadie más va a dar",
        paras: [
          "La temporada termina justo después del 14 de febrero. Un retrato de pareja pintado a mano desde su foto favorita es mucho más personal que flores o chocolates; encárgalo con tiempo porque toma mínimo 15 días.",
        ],
      },
    ],
    faqs: [
      ...commonFaqsEs,
      {
        question: "¿Hacen entregas en Playacar?",
        answer: "Sí, coordinamos la entrega contigo por WhatsApp en Playacar, la Quinta Avenida o donde estés en Playa del Carmen.",
      },
    ],
    heroProduct: "retratos-de-personas",
    galleryProducts: ["retratos-de-personas", "retratos-de-mascotas", "paisajes-en-lienzo"],
    waMsg: "Hola Luciptera 🌴 estoy en Playa del Carmen y quiero un retrato pintado a mano",
  },
  {
    key: "playa",
    lang: "en",
    path: "en/custom-art-playa-del-carmen",
    kind: "city",
    place: "Playa del Carmen",
    title: "Hand-Painted Portraits in Playa del Carmen | Luciptera",
    description:
      "Pet, couple and family portraits hand-painted in the Riviera Maya, with delivery arranged in Playa del Carmen: 5th Avenue, Playacar and downtown. Order on WhatsApp.",
    h1: "Hand-painted portraits in Playa del Carmen",
    lead:
      "Families, couples and animal lovers in Playa del Carmen: Lucía is painting an hour away from you this season, so your portrait arrives with no international shipping.",
    sections: [
      {
        h2: "One hour from Tulum",
        paras: [
          `${datesEn} She paints from Tulum, and we arrange delivery in Playa del Carmen over WhatsApp — near 5th Avenue, in Playacar or downtown.`,
        ],
      },
      {
        h2: "Family portraits for people who live in Playa",
        paras: [
          "Playa del Carmen is home to many Mexican and expat families. A family portrait on canvas — everyone included, pets too — is a gift that stays forever, perfect for Christmas.",
        ],
      },
      {
        h2: "A Valentine's gift nobody else will give",
        paras: [
          "The season ends right after February 14. A couple's portrait painted by hand from your favorite photo is far more personal than flowers or chocolate — order early, since it takes at least 15 days.",
        ],
      },
    ],
    faqs: [
      ...commonFaqsEn,
      {
        question: "Do you deliver to Playacar?",
        answer: "Yes, we arrange delivery over WhatsApp in Playacar, on 5th Avenue or wherever you are in Playa del Carmen.",
      },
    ],
    heroProduct: "retratos-de-personas",
    galleryProducts: ["retratos-de-personas", "retratos-de-mascotas", "paisajes-en-lienzo"],
    waMsg: "Hi Luciptera 🌴 I'm in Playa del Carmen and I'd like a hand-painted portrait",
  },

  // ---------------------------------------------------------------- CANCÚN
  {
    key: "cancun",
    lang: "es",
    path: "arte-personalizado-cancun",
    kind: "city",
    place: "Cancún",
    title: "Retratos pintados a mano en Cancún | Luciptera",
    description:
      "Retratos de pareja, mascotas y familias pintados a mano en la Riviera Maya, con entrega coordinada en Cancún: zona hotelera, centro y Puerto Cancún. Pide por WhatsApp.",
    h1: "Retratos pintados a mano en Cancún",
    lead:
      "Lunas de miel, aniversarios y amantes de las mascotas en Cancún: esta temporada una artista colombiana pinta a mano en la Riviera Maya, y coordinamos la entrega contigo.",
    sections: [
      {
        h2: "Desde Tulum hasta Cancún",
        paras: [
          `${datesEs} Lucía pinta desde Tulum, a unas dos horas de Cancún, así que organizamos contigo por WhatsApp la entrega en la zona hotelera, el centro o Puerto Cancún.`,
        ],
      },
      {
        h2: "Un recuerdo de tu luna de miel",
        paras: [
          "Cancún es destino de lunas de miel y aniversarios. Un retrato de pareja pintado a mano desde una foto del viaje convierte esos días en una obra para colgar en casa. Escríbenos con tiempo: necesita mínimo 15 días, y si regresas pronto a tu país lo coordinamos antes de tu vuelo.",
        ],
      },
      {
        h2: "Retratos de mascotas para quienes viven en Cancún",
        paras: [
          "Si vives en Cancún con tu perro o tu gato, un retrato en lienzo desde tu foto favorita es un regalo que emociona, para ti o para alguien que ama a su mascota.",
        ],
      },
    ],
    faqs: [
      ...commonFaqsEs,
      {
        question: "Me voy de Cancún en pocos días, ¿alcanzo a tener mi retrato?",
        answer:
          "Los retratos en lienzo toman mínimo 15 días. Escríbenos con tus fechas por WhatsApp y te decimos honestamente si alcanzamos; si no, buscamos otra opción contigo.",
      },
    ],
    heroProduct: "retratos-de-personas",
    galleryProducts: ["retratos-de-personas", "retratos-de-mascotas", "paisajes-en-lienzo"],
    waMsg: "Hola Luciptera 🌴 estoy en Cancún y quiero un retrato pintado a mano",
  },
  {
    key: "cancun",
    lang: "en",
    path: "en/custom-art-cancun",
    kind: "city",
    place: "Cancún",
    title: "Hand-Painted Portraits in Cancún | Luciptera",
    description:
      "Couple, pet and family portraits hand-painted in the Riviera Maya, with delivery arranged in Cancún: hotel zone, downtown and Puerto Cancún. Order on WhatsApp.",
    h1: "Hand-painted portraits in Cancún",
    lead:
      "Honeymoons, anniversaries and pet lovers in Cancún: this season a Colombian artist is painting by hand in the Riviera Maya, and we arrange delivery with you.",
    sections: [
      {
        h2: "From Tulum to Cancún",
        paras: [
          `${datesEn} She paints from Tulum, about two hours from Cancún, so we arrange delivery over WhatsApp in the hotel zone, downtown or Puerto Cancún.`,
        ],
      },
      {
        h2: "A keepsake of your honeymoon",
        paras: [
          "Cancún is a honeymoon and anniversary destination. A couple's portrait hand-painted from a photo of your trip turns those days into a piece for your wall at home. Message us early: it takes at least 15 days, and if you're flying home soon we'll plan around your flight.",
        ],
      },
      {
        h2: "Pet portraits for people who live in Cancún",
        paras: [
          "If you live in Cancún with your dog or cat, a canvas portrait from your favorite photo is a gift that moves people — for you or for someone who loves their pet.",
        ],
      },
    ],
    faqs: [
      ...commonFaqsEn,
      {
        question: "I'm leaving Cancún in a few days — can I still get a portrait?",
        answer:
          "Canvas portraits take at least 15 days. Send us your dates on WhatsApp and we'll tell you honestly whether we can make it; if not, we'll find another option with you.",
      },
    ],
    heroProduct: "retratos-de-personas",
    galleryProducts: ["retratos-de-personas", "retratos-de-mascotas", "paisajes-en-lienzo"],
    waMsg: "Hi Luciptera 🌴 I'm in Cancún and I'd like a hand-painted portrait",
  },

  // ------------------------------------------------------- BODY PAINTING
  {
    key: "bodypaint",
    lang: "es",
    path: "body-painting-tulum",
    kind: "service",
    place: "Tulum",
    title: "Body painting y pintura facial en Tulum | Luciptera",
    description:
      "Body painting y pintura facial a mano en Tulum para fiestas, festivales, sesiones de fotos y celebraciones, por una artista colombiana. Temporada nov 2026 – feb 2027.",
    h1: "Body painting y pintura facial en Tulum",
    lead:
      "Llega a la fiesta convertido en arte. Lucía pinta a mano sobre la piel diseños de flores, fauna tropical, estilo catrina o lo que imagines, para fiestas, festivales y sesiones de fotos en Tulum.",
    sections: [
      {
        h2: "Para la temporada de fiestas en Tulum",
        paras: [
          `${datesEs} Diciembre y enero llenan Tulum de fiestas en la playa, en la selva y festivales de música. Un body painting hecho a mano es lo que hace que tus fotos de esa noche se vean distintas a todas las demás.`,
        ],
      },
      {
        h2: "Ideas de diseños",
        paras: [
          "Flores y hojas tropicales, jaguares y fauna de la selva maya, constelaciones y lunas, estilo catrina, o un diseño que combine con tu outfit. Mándanos referencias por WhatsApp y armamos el diseño juntos.",
        ],
      },
      {
        h2: "Sesiones de fotos, cumpleaños y despedidas",
        paras: [
          "También para sesiones de fotos en cenotes o en la playa, cumpleaños, despedidas de soltera y eventos de grupo. Escríbenos con la fecha, el número de personas y la idea, y coordinamos lugar y hora.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta el body painting en Tulum?",
        answer:
          "Depende del tamaño del diseño, del nivel de detalle y del número de personas. Escríbenos por WhatsApp con tu idea y te damos el precio.",
      },
      {
        question: "¿Hacen pintura para grupos?",
        answer:
          "Sí, para grupos de amigos, despedidas y eventos. Cuéntanos cuántas personas son y la fecha para organizar el tiempo de pintura.",
      },
      {
        question: "¿Con cuánta anticipación debo reservar?",
        answer: `La agenda es limitada porque Lucía pinta a cada persona a mano. ${datesEs} Para fechas de fiestas grandes, reserva con varios días de anticipación.`,
      },
    ],
    heroProduct: "retratos-de-personas",
    galleryProducts: ["retratos-de-personas", "chaquetas-pintadas-a-mano", "jeans-pintados-a-mano"],
    waMsg: "Hola Luciptera 🎨 quiero un body painting en Tulum",
  },
  {
    key: "bodypaint",
    lang: "en",
    path: "en/body-painting-tulum",
    kind: "service",
    place: "Tulum",
    title: "Body Painting & Face Painting in Tulum | Luciptera",
    description:
      "Hand-painted body painting and face painting in Tulum for parties, festivals, photo shoots and celebrations, by a Colombian artist. Season: Nov 2026 – Feb 2027.",
    h1: "Body painting and face painting in Tulum",
    lead:
      "Show up to the party as a work of art. Lucía hand-paints designs on skin — tropical flowers, jungle wildlife, catrina style or whatever you imagine — for parties, festivals and photo shoots in Tulum.",
    sections: [
      {
        h2: "Made for Tulum's party season",
        paras: [
          `${datesEn} December and January fill Tulum with beach parties, jungle parties and music festivals. Hand-painted body art is what makes your photos from that night look like nobody else's.`,
        ],
      },
      {
        h2: "Design ideas",
        paras: [
          "Tropical flowers and leaves, jaguars and Mayan jungle wildlife, constellations and moons, catrina style, or a design that matches your outfit. Send us references on WhatsApp and we'll build the design together.",
        ],
      },
      {
        h2: "Photo shoots, birthdays and bachelorettes",
        paras: [
          "Also for photo shoots at cenotes or on the beach, birthdays, bachelorette parties and group events. Send us the date, number of people and your idea, and we'll set the place and time.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does body painting cost in Tulum?",
        answer:
          "It depends on the size of the design, the level of detail and the number of people. Send us your idea on WhatsApp and we'll give you a price.",
      },
      {
        question: "Do you paint groups?",
        answer:
          "Yes — friend groups, bachelorettes and events. Tell us how many people and the date so we can plan the painting time.",
      },
      {
        question: "How far ahead should I book?",
        answer: `The calendar is limited because Lucía paints each person by hand. ${datesEn} For big party dates, book several days ahead.`,
      },
    ],
    heroProduct: "retratos-de-personas",
    galleryProducts: ["retratos-de-personas", "chaquetas-pintadas-a-mano", "jeans-pintados-a-mano"],
    waMsg: "Hi Luciptera 🎨 I'd like body painting in Tulum",
  },

  // ---------------------------------------------------------- EN GUIDES
  {
    key: "guide-souvenirs",
    lang: "en",
    path: "en/unique-souvenirs-tulum",
    kind: "guide",
    place: "Tulum",
    title: "Unique Tulum Souvenirs, Hand-Painted | Luciptera",
    description:
      "Looking for a souvenir from Tulum that isn't mass-produced? A custom hand-painted portrait of your trip, your partner or your pet. How it works, timing and packing tips.",
    h1: "Unique souvenirs from Tulum: something made by hand, just for you",
    lead:
      "The most memorable souvenir from Tulum isn't sold in a shop — it's a painting of your own trip. A hand-painted portrait from a photo you took here, made by an artist who's in Tulum this season.",
    sections: [
      {
        h2: "Why a custom painting beats a store-bought souvenir",
        paras: [
          "Most souvenirs are made in bulk somewhere else. A portrait painted from your own photo — the cenote, the beach, you and your partner — is one of a kind, and it carries the memory instead of just the place name.",
        ],
      },
      {
        h2: "How long does it take?",
        paras: [
          `Canvas portraits take at least 15 days. If your trip is shorter, message us before you arrive or early in your stay. ${datesEn}`,
        ],
      },
      {
        h2: "Will it fit in my suitcase?",
        paras: [
          "The smaller canvas sizes (around 20 × 25 cm, 8 × 10 in) travel easily in a suitcase when wrapped. For larger pieces, ask us about options before you order.",
        ],
      },
    ],
    faqs: commonFaqsEn,
    heroProduct: "retratos-de-personas",
    galleryProducts: ["retratos-de-personas", "paisajes-en-lienzo"],
    waMsg: "Hi Luciptera 🌴 I'd like a hand-painted souvenir from Tulum",
  },
  {
    key: "guide-wedding",
    lang: "en",
    path: "en/tulum-wedding-gift-ideas",
    kind: "guide",
    place: "Tulum",
    title: "Tulum Wedding Gift Ideas | Luciptera",
    description:
      "Going to a destination wedding in Tulum? A custom hand-painted portrait of the couple is a gift they'll actually keep. Ideas, timing and how to order in Tulum.",
    h1: "Tulum wedding gift ideas: a portrait painted by hand",
    lead:
      "Tulum is one of the world's favorite destination-wedding spots, and the best gift for the couple is one they'll hang on their wall for decades: a portrait of the two of them, painted by hand.",
    sections: [
      {
        h2: "Why a portrait works as a wedding gift",
        paras: [
          "Couples get plenty of things they'll never use. A hand-painted portrait from their engagement photo — or a photo from the wedding weekend — is personal, beautiful and genuinely one of a kind.",
        ],
      },
      {
        h2: "Order before the wedding, or after it",
        paras: [
          "If you have their engagement photo, order early so it's ready to give at the wedding. Or paint a moment from the wedding itself and surprise them after — it takes at least 15 days.",
        ],
      },
      {
        h2: "Gifts for the bridal party",
        paras: [
          "For bridesmaids or groomsmen, smaller hand-painted pieces make a memorable thank-you. And for the wedding weekend parties, body painting turns the celebration into something everyone photographs.",
        ],
      },
    ],
    faqs: commonFaqsEn,
    heroProduct: "retratos-de-personas",
    galleryProducts: ["retratos-de-personas", "paisajes-en-lienzo"],
    waMsg: "Hi Luciptera 💍 I'd like a hand-painted portrait as a wedding gift in Tulum",
  },
];

export const rmByLang = (lang: RmLang) => rmPages.filter((p) => p.lang === lang);

/** the other-language twin of a page, for hreflang + language switch */
export function rmTwin(page: RmPage): RmPage | undefined {
  return rmPages.find((p) => p.key === page.key && p.lang !== page.lang);
}
