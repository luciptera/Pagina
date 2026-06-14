/* ===========================================================================
   Intent / use-case pages — written FOR the person, by emotion.
=========================================================================== */

export interface Intent {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  /** emotional, query-matched lead paragraph (answer-first where relevant) */
  lead: string;
  /** real search phrasings this page targets */
  intentKeywords: string[];
  relatedProducts: string[];
  /** tone guidance reflected in copy */
  emotionalAngle: string;
  waContext: string;
}

export const intents: Intent[] = [
  {
    slug: "retrato-memorial-de-mascota",
    title: "Retrato memorial de mascota — homenaje pintado a mano",
    h1: "Un retrato para honrar la memoria de tu mascota",
    metaDescription:
      "Homenaje pintado a mano para esa mascota que partió. Convertimos tu foto favorita en un retrato en lienzo, madera o un llavero para llevarlo siempre contigo.",
    lead:
      "Perder a un compañero de vida duele, y conservar su recuerdo ayuda a sanar. En Luciptera pintamos a mano, desde tu foto favorita, un retrato que honra a tu mascota con todo el cariño y el detalle que merece.",
    intentKeywords: [
      "retrato de mascota fallecida",
      "recuerdo de mi mascota que murió",
      "homenaje a mi perro",
      "cuadro en memoria de mi gato",
      "cómo conservar el recuerdo de mi mascota",
    ],
    relatedProducts: ["retratos-de-mascotas", "cuadros-en-madera", "llaveros-de-mascotas"],
    emotionalAngle: "Cálido, digno, nunca insistente. Acompañar, no vender.",
    waContext: "un retrato en memoria de mi mascota",
  },
  {
    slug: "regalo-para-amantes-de-los-perros",
    title: "Regalo para amantes de los perros — personalizado y único",
    h1: "El regalo perfecto para quien ama a su perro",
    metaDescription:
      "¿Buscas un regalo único para alguien que ama a su perro? Retratos, cuadros en madera, llaveros y placas pintados a mano con la foto de su mascota. Envíos a toda Colombia.",
    lead:
      "Si conoces a alguien que adora a su perro, un detalle con la cara de su peludo es un regalo que emociona de verdad. Pintamos a mano retratos, cuadros, llaveros y placas desde la foto de su mascota.",
    intentKeywords: [
      "regalo para amante de los perros",
      "qué regalar a alguien que ama a su mascota",
      "regalo personalizado de mascota",
    ],
    relatedProducts: ["retratos-de-mascotas", "llaveros-de-mascotas", "cuadros-en-madera"],
    emotionalAngle: "Alegre, emocional, celebra el vínculo.",
    waContext: "un regalo para alguien que ama a su perro",
  },
  {
    slug: "regalo-para-amantes-de-los-gatos",
    title: "Regalo para amantes de los gatos — personalizado y único",
    h1: "El regalo ideal para quien ama a su gato",
    metaDescription:
      "Regalos únicos para amantes de los gatos: retratos en lienzo, cuadros en madera, llaveros y placas pintados a mano con la foto de su michi. Envíos a toda Colombia.",
    lead:
      "Para esa persona que vive enamorada de su gato, un detalle con la carita de su michi es un regalo inolvidable. Lo pintamos a mano desde la foto que más te guste.",
    intentKeywords: [
      "regalo para amante de los gatos",
      "regalo para alguien que ama a su gato",
      "retrato de mi michi",
    ],
    relatedProducts: ["retratos-de-mascotas", "llaveros-de-mascotas", "cuadros-en-madera"],
    emotionalAngle: "Alegre, tierno, celebra el vínculo felino.",
    waContext: "un regalo para alguien que ama a su gato",
  },
  {
    slug: "cuadro-de-pareja",
    title: "Cuadro de pareja personalizado — retrato pintado a mano",
    h1: "Un cuadro de pareja pintado a mano",
    metaDescription:
      "Retrato de pareja pintado a mano desde tu foto, sobre lienzo. Un regalo romántico y único para aniversario, San Valentín o solo porque sí. Envíos a toda Colombia.",
    lead:
      "Un retrato de pareja pintado a mano es un regalo que dice más que mil palabras. Tomamos su foto favorita y la convertimos en una obra para colgar y recordar siempre.",
    intentKeywords: [
      "cuadro de pareja",
      "retrato de pareja con foto",
      "regalo romántico personalizado",
    ],
    relatedProducts: ["retratos-de-personas", "retratos-anime", "cases-personalizados"],
    emotionalAngle: "Romántico, cálido.",
    waContext: "un cuadro de pareja",
  },
  {
    slug: "regalo-de-aniversario-personalizado",
    title: "Regalo de aniversario personalizado y pintado a mano",
    h1: "Regalo de aniversario personalizado",
    metaDescription:
      "Sorprende en tu aniversario con un retrato pintado a mano desde su foto: pareja, familia o mascota. Un regalo único hecho con tiempo y cariño. Envíos a toda Colombia.",
    lead:
      "Un aniversario merece algo que no se compre en cualquier parte. Un retrato pintado a mano —de ustedes, de la familia o de su mascota— es un regalo con alma que se atesora por años.",
    intentKeywords: [
      "regalo de aniversario personalizado",
      "regalo de aniversario original",
      "qué regalar en un aniversario",
    ],
    relatedProducts: ["retratos-de-personas", "retratos-de-mascotas", "paisajes-en-lienzo"],
    emotionalAngle: "Romántico, especial.",
    waContext: "un regalo de aniversario personalizado",
  },
  {
    slug: "decoracion-personalizada-para-el-hogar",
    title: "Cuadros personalizados para decorar tu hogar",
    h1: "Arte personalizado para decorar tu hogar",
    metaDescription:
      "Cuadros personalizados pintados a mano para la sala, el cuarto o cualquier espacio: retratos, paisajes y mascotas sobre lienzo. Decoración única. Envíos a toda Colombia.",
    lead:
      "Las paredes cuentan historias. Un cuadro pintado a mano —un paisaje, tu familia o tu mascota— le da calidez y personalidad a tu hogar como ninguna lámina impresa.",
    intentKeywords: [
      "cuadros personalizados para la sala",
      "arte para decorar la casa",
      "cuadro decorativo personalizado",
    ],
    relatedProducts: ["paisajes-en-lienzo", "retratos-de-personas", "retratos-de-mascotas"],
    emotionalAngle: "Cálido, aspiracional, hogareño.",
    waContext: "un cuadro personalizado para decorar mi hogar",
  },
];

export const intentMap: Record<string, Intent> = Object.fromEntries(
  intents.map((i) => [i.slug, i]),
);
export function getIntent(slug: string): Intent | undefined {
  return intentMap[slug];
}
