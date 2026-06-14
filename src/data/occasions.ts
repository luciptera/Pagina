/* ===========================================================================
   Occasion pages — high purchase-intent calendar moments (Colombia).
=========================================================================== */

export interface Occasion {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  lead: string;
  /** when this occasion happens (for copy + planning lead time) */
  dateWindow: string;
  keywords: string[];
  relatedProducts: string[];
  waContext: string;
}

export const occasions: Occasion[] = [
  {
    slug: "regalo-dia-de-la-madre",
    title: "Regalo para el Día de la Madre personalizado",
    h1: "Regalo para el Día de la Madre, pintado a mano",
    metaDescription:
      "Sorprende a mamá con un retrato pintado a mano: de la familia, de ella o de su mascota. Pídelo con tiempo para el Día de la Madre. Envíos a toda Colombia.",
    lead:
      "El Día de la Madre en Colombia se celebra en mayo. Un retrato pintado a mano —de la familia o de su mascota consentida— es el regalo que la hará llorar de la emoción.",
    dateWindow: "Segundo domingo de mayo (Colombia)",
    keywords: ["regalo día de la madre personalizado", "regalo para mamá pintado a mano"],
    relatedProducts: ["retratos-de-personas", "retratos-de-mascotas", "paisajes-en-lienzo"],
    waContext: "un regalo para el Día de la Madre",
  },
  {
    slug: "regalo-amor-y-amistad",
    title: "Regalo de Amor y Amistad personalizado",
    h1: "Regalo de Amor y Amistad, pintado a mano",
    metaDescription:
      "Regalos de Amor y Amistad únicos y personalizados: retratos de pareja, llaveros y cases pintados a mano. Pídelo con tiempo. Envíos a toda Colombia.",
    lead:
      "Amor y Amistad se celebra en septiembre en Colombia. Sal del detalle genérico: un retrato de pareja, un llavero o un case pintado a mano dice mucho más.",
    dateWindow: "Tercer sábado de septiembre (Colombia)",
    keywords: ["regalo de amor y amistad", "regalo amor y amistad personalizado"],
    relatedProducts: ["retratos-de-personas", "llaveros-de-mascotas", "cases-personalizados"],
    waContext: "un regalo de Amor y Amistad",
  },
  {
    slug: "regalo-de-navidad-personalizado",
    title: "Regalo de Navidad personalizado y pintado a mano",
    h1: "Regalos de Navidad personalizados, pintados a mano",
    metaDescription:
      "Regalos de Navidad únicos: retratos de familia y mascota, cuadros en madera, llaveros y placas pintados a mano. Encarga con tiempo. Envíos a toda Colombia.",
    lead:
      "La Navidad es para regalar con el corazón. Un retrato pintado a mano de la familia o de la mascota es un regalo que se queda para siempre debajo del árbol… y en la pared.",
    dateWindow: "Diciembre — encarga con anticipación por la demanda",
    keywords: ["regalo navideño personalizado", "regalo de navidad pintado a mano"],
    relatedProducts: ["retratos-de-mascotas", "retratos-de-personas", "cuadros-en-madera"],
    waContext: "un regalo de Navidad personalizado",
  },
  {
    slug: "regalo-san-valentin",
    title: "Regalo de San Valentín personalizado",
    h1: "Regalo de San Valentín, pintado a mano",
    metaDescription:
      "Sorprende en San Valentín con un retrato de pareja pintado a mano, un case o un llavero personalizado. Un detalle romántico y único. Envíos a toda Colombia.",
    lead:
      "Para San Valentín, un retrato de pareja pintado a mano es el detalle romántico que nadie espera y todos recuerdan. También cases y llaveros para llevar el amor a todas partes.",
    dateWindow: "14 de febrero",
    keywords: ["regalo san valentín personalizado", "regalo romántico día de los enamorados"],
    relatedProducts: ["retratos-de-personas", "cases-personalizados", "llaveros-de-mascotas"],
    waContext: "un regalo de San Valentín",
  },
  {
    slug: "regalo-de-cumpleanos-personalizado",
    title: "Regalo de cumpleaños personalizado y pintado a mano",
    h1: "Regalo de cumpleaños personalizado",
    metaDescription:
      "Un regalo de cumpleaños que sorprende: retrato pintado a mano de la persona o de su mascota, anime, llavero o case. Pídelo con tiempo. Envíos a toda Colombia.",
    lead:
      "Para un cumpleaños especial, regala algo hecho a mano y pensado para esa persona: su retrato, su mascota, su estilo anime favorito. Un detalle que no se olvida.",
    dateWindow: "Todo el año — encarga con 8 a 15 días de anticipación",
    keywords: ["regalo de cumpleaños personalizado", "regalo de cumpleaños original"],
    relatedProducts: ["retratos-anime", "retratos-de-personas", "retratos-de-mascotas"],
    waContext: "un regalo de cumpleaños personalizado",
  },
];

export const occasionMap: Record<string, Occasion> = Object.fromEntries(
  occasions.map((o) => [o.slug, o]),
);
export function getOccasion(slug: string): Occasion | undefined {
  return occasionMap[slug];
}
