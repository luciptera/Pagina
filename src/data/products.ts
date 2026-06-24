/* ===========================================================================
   Products — canonical names + REAL pricing from the catalog (COP).
   Prices are "desde" (from) and EXCLUDE shipping. Source of truth = catalog PDF.
=========================================================================== */

export interface Size {
  label: string;
  priceCOP: number;
}

export interface Product {
  slug: string;
  /** catalog name */
  name: string;
  /** short name for cards/breadcrumbs */
  shortName: string;
  /** page <h1> (intent-matched) */
  h1: string;
  /** one-line value prop */
  tagline: string;
  fromPrice: number;
  sizes: Size[];
  /** e.g. "Mascota extra +$70.000" */
  extras: string[];
  /** minimum preparation days */
  prepDays: number;
  /** deposit note, if any */
  abono?: string;
  material: "lienzo" | "madera" | "resina" | "paja" | "tela";
  /** custom items priced by chat instead of a fixed table */
  priceByWhatsApp?: boolean;
  /** seasonal campaign label, e.g. "Feria de las Flores" */
  seasonal?: string;
  /** persona segments this product serves (for internal linking) */
  personaTags: string[];
  /** vernacular phrasings → drive alias landing pages */
  aliases: string[];
  /** prefilled WhatsApp message context */
  waContext: string;
  /** related product slugs for "mira también" */
  relatedSlugs: string[];
  /** include in the city × product programmatic matrix */
  inCityMatrix: boolean;
}

export const products: Product[] = [
  {
    slug: "retratos-de-mascotas",
    name: "Retratos de mascotas en lienzo",
    shortName: "Retratos de mascotas",
    h1: "Retratos de mascotas en lienzo, pintados a mano",
    tagline:
      "Convierte la foto de tu peludo en un cuadro pintado 100% a mano sobre lienzo.",
    fromPrice: 170000,
    sizes: [
      { label: "20 × 25 cm", priceCOP: 170000 },
      { label: "23 × 30 cm", priceCOP: 250000 },
      { label: "30 × 30 cm", priceCOP: 300000 },
      { label: "30 × 41 cm", priceCOP: 380000 },
      { label: "40 × 60 cm", priceCOP: 650000 },
    ],
    extras: ["Mascota extra en el mismo lienzo: +$70.000"],
    prepDays: 15,
    material: "lienzo",
    personaTags: ["dueños-de-mascotas", "memorial", "regalo", "decoracion"],
    aliases: [
      "cuadro-de-mi-perro",
      "cuadro-de-mi-gato",
      "pintura-de-mi-mascota",
      "retrato-de-mi-perro",
      "cuadro-personalizado-de-mascota",
      "cuadro-de-mi-peludo",
      "retrato-de-mascota-con-foto",
      "pintura-al-oleo-de-mi-perro",
    ],
    waContext: "un retrato de mi mascota en lienzo",
    relatedSlugs: ["cuadros-en-madera", "llaveros-de-mascotas", "retratos-de-personas"],
    inCityMatrix: true,
  },
  {
    slug: "retratos-de-personas",
    name: "Retratos de personas en lienzo",
    shortName: "Retratos de personas",
    h1: "Retratos de personas en lienzo, pintados a mano",
    tagline:
      "Retratos de familia, pareja o de alguien especial, pintados a mano desde tu foto.",
    fromPrice: 200000,
    sizes: [
      { label: "20 × 25 cm", priceCOP: 200000 },
      { label: "23 × 30 cm", priceCOP: 260000 },
      { label: "30 × 30 cm", priceCOP: 300000 },
      { label: "30 × 41 cm", priceCOP: 400000 },
      { label: "40 × 60 cm", priceCOP: 650000 },
    ],
    extras: ["Persona extra en el mismo lienzo: +$80.000"],
    prepDays: 15,
    material: "lienzo",
    personaTags: ["parejas-familias", "regalo", "decoracion", "memorial"],
    aliases: [
      "retrato-familiar-personalizado",
      "cuadro-de-pareja",
      "retrato-de-pareja-con-foto",
      "cuadro-de-familia",
      "retrato-de-una-persona-con-foto",
    ],
    waContext: "un retrato de personas en lienzo",
    relatedSlugs: ["retratos-de-mascotas", "paisajes-en-lienzo", "retratos-anime"],
    inCityMatrix: true,
  },
  {
    slug: "retratos-anime",
    name: "Retratos estilo anime",
    shortName: "Retratos anime",
    h1: "Retratos estilo anime pintados a mano desde tu foto",
    tagline:
      "Conviértete en personaje de anime: tu foto pintada a mano en estilo anime sobre lienzo.",
    fromPrice: 200000,
    sizes: [
      { label: "20 × 25 cm", priceCOP: 200000 },
      { label: "23 × 30 cm", priceCOP: 250000 },
      { label: "30 × 30 cm", priceCOP: 290000 },
      { label: "30 × 41 cm", priceCOP: 360000 },
    ],
    extras: ["El precio puede variar según la complejidad del diseño"],
    prepDays: 15,
    material: "lienzo",
    personaTags: ["fans-anime", "regalo"],
    aliases: [
      "retrato-estilo-anime",
      "convierteme-en-anime",
      "dibujo-estilo-anime-con-foto",
      "regalo-para-fan-del-anime",
    ],
    waContext: "un retrato estilo anime",
    relatedSlugs: ["retratos-de-personas", "cases-personalizados", "retratos-de-mascotas"],
    inCityMatrix: true,
  },
  {
    slug: "paisajes-en-lienzo",
    name: "Paisajes en lienzo",
    shortName: "Paisajes",
    h1: "Paisajes en lienzo pintados a mano",
    tagline:
      "Paisajes pintados a mano para decorar tu hogar o regalar algo único y artístico.",
    fromPrice: 250000,
    sizes: [
      { label: "20 × 25 cm", priceCOP: 250000 },
      { label: "23 × 30 cm", priceCOP: 300000 },
      { label: "30 × 30 cm", priceCOP: 350000 },
      { label: "30 × 41 cm", priceCOP: 450000 },
      { label: "40 × 60 cm", priceCOP: 650000 },
    ],
    extras: [],
    prepDays: 15,
    material: "lienzo",
    personaTags: ["decoracion", "regalo"],
    aliases: [
      "cuadro-de-paisaje-personalizado",
      "paisaje-pintado-a-mano",
      "cuadro-decorativo-para-la-sala",
    ],
    waContext: "un paisaje en lienzo",
    relatedSlugs: ["retratos-de-personas", "retratos-de-mascotas", "cuadros-en-madera"],
    inCityMatrix: false,
  },
  {
    slug: "cuadros-en-madera",
    name: "Cuadros de mascotas en madera (resina)",
    shortName: "Cuadros en madera",
    h1: "Cuadros de mascotas en madera con acabado en resina",
    tagline:
      "Tu mascota pintada a mano sobre madera, con brillante acabado resinado. Tú eliges el color.",
    fromPrice: 100000,
    sizes: [
      { label: "15 × 15 cm", priceCOP: 100000 },
      { label: "20 × 20 cm", priceCOP: 150000 },
      { label: "Círculo 20 × 20 cm", priceCOP: 150000 },
    ],
    extras: ["Mascota extra: +$50.000", "Eliges el color y la decoración que desees"],
    prepDays: 15,
    material: "madera",
    personaTags: ["dueños-de-mascotas", "decoracion", "regalo", "memorial"],
    aliases: [
      "cuadro-de-mascota-en-madera",
      "retrato-en-madera-con-resina",
      "cuadro-resinado-de-mascota",
    ],
    waContext: "un cuadro de mascota en madera",
    relatedSlugs: ["retratos-de-mascotas", "llaveros-de-mascotas", "placas-con-nombre"],
    inCityMatrix: true,
  },
  {
    slug: "llaveros-de-mascotas",
    name: "Llaveros de mascotas (resina)",
    shortName: "Llaveros de mascotas",
    h1: "Llaveros de mascotas pintados a mano y encapsulados en resina",
    tagline:
      "Lleva a tu peludo contigo a todas partes: llaveros pintados a mano, encapsulados en resina.",
    fromPrice: 60000,
    sizes: [
      { label: "De 4 a 5 cm", priceCOP: 60000 },
      { label: "Rectangular de 7 cm", priceCOP: 70000 },
      { label: "Círculo de 6 × 6 cm", priceCOP: 90000 },
      { label: "Círculo de 8 × 8 cm", priceCOP: 100000 },
    ],
    extras: [
      "Mascota extra: +$40.000 (en llaveros con 2 mascotas, una por cada lado)",
    ],
    prepDays: 8,
    material: "resina",
    personaTags: ["dueños-de-mascotas", "regalo", "memorial"],
    aliases: [
      "llavero-personalizado-de-mascota",
      "llavero-con-foto-de-mi-perro",
      "llavero-de-resina-personalizado",
      "llavero-de-mi-gato",
    ],
    waContext: "un llavero de mi mascota en resina",
    relatedSlugs: ["placas-con-nombre", "cuadros-en-madera", "retratos-de-mascotas"],
    inCityMatrix: true,
  },
  {
    slug: "placas-con-nombre",
    name: "Placas con nombre (resina)",
    shortName: "Placas con nombre",
    h1: "Placas con nombre para el collar de tu mascota",
    tagline:
      "Placa de identificación en resina con el nombre de tu mascota y tu número de contacto.",
    fromPrice: 20000,
    sizes: [
      { label: "De 4 cm", priceCOP: 20000 },
      { label: "De 5 cm", priceCOP: 25000 },
      { label: "De 6 cm", priceCOP: 30000 },
    ],
    extras: [
      "Eliges los colores y detalles (nombre de la mascota y un número de contacto)",
      "No incluye collar ni correa: es la placa con un gancho para añadir al collar",
    ],
    prepDays: 8,
    material: "resina",
    personaTags: ["dueños-de-mascotas", "regalo"],
    aliases: [
      "placa-para-collar-de-perro",
      "placa-con-nombre-para-mascota",
      "chapa-para-collar-con-nombre",
      "placa-de-identificacion-para-perro",
      "placa-para-gato-con-nombre-y-telefono",
    ],
    waContext: "una placa con nombre para el collar de mi mascota",
    relatedSlugs: ["llaveros-de-mascotas", "cuadros-en-madera", "retratos-de-mascotas"],
    inCityMatrix: false,
  },
  {
    slug: "cases-personalizados",
    name: "Cases de celular personalizados (resina)",
    shortName: "Cases personalizados",
    h1: "Cases de celular personalizados, pintados a mano en resina",
    tagline:
      "Tu mascota o tu diseño favorito pintado a mano dentro del case de tu celular, en resina.",
    fromPrice: 100000,
    sizes: [
      { label: "Case con mascota", priceCOP: 100000 },
      { label: "Case básico (flores, paisajes, objetos)", priceCOP: 100000 },
    ],
    extras: [
      "Indícanos la referencia de tu celular (revisamos si tenemos el modelo en stock)",
      "Se confirma con el abono del 50% para iniciar el diseño",
    ],
    prepDays: 10,
    abono: "Abono del 50% para iniciar",
    material: "resina",
    personaTags: ["dueños-de-mascotas", "regalo", "fans-anime"],
    aliases: [
      "case-personalizado-con-foto",
      "funda-de-celular-personalizada",
      "case-de-mi-perro",
      "funda-con-foto-de-mi-mascota",
    ],
    waContext: "un case de celular personalizado en resina",
    relatedSlugs: ["llaveros-de-mascotas", "placas-con-nombre", "retratos-anime"],
    inCityMatrix: false,
  },
  {
    slug: "sombreros-brisa",
    name: "Sombreros brisa pintados a mano",
    shortName: "Sombreros brisa pintados",
    h1: "Sombreros brisa pintados a mano",
    tagline:
      "Sombreros brisa blancos pintados a mano con flores: el accesorio perfecto para la Feria de las Flores y para todo el año.",
    fromPrice: 99000,
    priceByWhatsApp: true,
    seasonal: "Feria de las Flores",
    sizes: [],
    extras: [
      "Cada sombrero se pinta a mano sobre sombrero brisa blanco",
      "Eliges el diseño y las flores que más te gusten",
    ],
    prepDays: 8,
    material: "paja",
    personaTags: ["decoracion", "regalo", "feria"],
    aliases: [
      "sombrero-brisa-pintado",
      "sombrero-aguadeno-pintado-a-mano",
      "sombrero-blanco-para-la-feria-de-las-flores",
      "sombrero-con-flores-pintadas",
      "sombrero-antioqueno-personalizado",
      "sombrero-pintado-a-mano",
    ],
    waContext: "un sombrero brisa pintado para la Feria de las Flores",
    relatedSlugs: ["paisajes-en-lienzo", "retratos-de-mascotas", "cuadros-en-madera"],
    inCityMatrix: false,
  },
  {
    slug: "chaquetas-pintadas-a-mano",
    name: "Chaquetas de jean pintadas a mano",
    shortName: "Chaquetas pintadas",
    h1: "Chaquetas de jean pintadas a mano y personalizadas",
    tagline:
      "Tu chaqueta de jean convertida en una obra única: la pintamos a mano con tu mascota, un retrato o el diseño que quieras.",
    fromPrice: 0,
    priceByWhatsApp: true,
    sizes: [],
    extras: [
      "Pintamos sobre tu chaqueta o conseguimos una nueva, como prefieras",
      "Diseño a tu gusto: mascota, retrato, flores, lo que imagines",
    ],
    prepDays: 10,
    material: "tela",
    personaTags: ["moda", "regalo", "dueños-de-mascotas", "decoracion"],
    aliases: [
      "chaqueta-de-jean-pintada-a-mano",
      "chaqueta-personalizada-pintada",
      "chaqueta-pintada-con-mi-mascota",
      "ropa-personalizada-pintada",
    ],
    waContext: "una chaqueta de jean pintada a mano",
    relatedSlugs: ["jeans-pintados-a-mano", "cases-personalizados", "sombreros-brisa"],
    inCityMatrix: false,
  },
  {
    slug: "jeans-pintados-a-mano",
    name: "Jeans y pantalones pintados a mano",
    shortName: "Jeans pintados",
    h1: "Jeans y pantalones pintados a mano",
    tagline:
      "Tus jeans o pantalones convertidos en arte: los pintamos a mano con el diseño que quieras, del más floral al más rockero.",
    fromPrice: 0,
    priceByWhatsApp: true,
    sizes: [],
    extras: [
      "Pintamos sobre tu prenda o conseguimos una nueva",
      "Cualquier estilo: flores, calaveras, lettering, lo que imagines",
    ],
    prepDays: 10,
    material: "tela",
    personaTags: ["moda", "regalo"],
    aliases: ["jean-pintado-a-mano", "pantalon-pintado-a-mano", "jeans-personalizados-pintados"],
    waContext: "unos jeans / un pantalón pintado a mano",
    relatedSlugs: ["chaquetas-pintadas-a-mano", "tenis-pintados-a-mano", "camisetas-pintadas-a-mano"],
    inCityMatrix: false,
  },
  {
    slug: "tenis-pintados-a-mano",
    name: "Tenis y zapatillas pintados a mano",
    shortName: "Tenis pintados",
    h1: "Tenis y zapatillas pintados a mano",
    tagline:
      "Nuestra pieza más exclusiva: unos tenis únicos en el mundo, pintados a mano con un nivel de detalle que toma varios días de trabajo.",
    fromPrice: 0,
    priceByWhatsApp: true,
    sizes: [],
    extras: [
      "Es nuestro trabajo más detallado y exigente: por eso tiene un valor especial",
      "Pintamos sobre tus tenis o conseguimos un par nuevo",
      "Diseño 100% personalizado, hecho a mano",
    ],
    prepDays: 15,
    material: "tela",
    personaTags: ["moda", "regalo"],
    aliases: ["tenis-personalizados-pintados", "zapatillas-pintadas-a-mano", "zapatos-pintados-a-mano"],
    waContext: "unos tenis pintados a mano",
    relatedSlugs: ["jeans-pintados-a-mano", "chaquetas-pintadas-a-mano", "camisetas-pintadas-a-mano"],
    inCityMatrix: false,
  },
  {
    slug: "camisetas-pintadas-a-mano",
    name: "Camisetas, busos y gorras pintados a mano",
    shortName: "Camisetas pintadas",
    h1: "Camisetas, busos y gorras pintados a mano",
    tagline:
      "Prendas únicas pintadas a mano: camisetas, busos y gorras con el diseño que quieras, imposibles de repetir.",
    fromPrice: 0,
    priceByWhatsApp: true,
    sizes: [],
    extras: [
      "Camisetas, busos (hoodies) y gorras, sobre tu prenda o una nueva",
      "Tu diseño: mascota, retrato, frases, ilustración",
    ],
    prepDays: 10,
    material: "tela",
    personaTags: ["moda", "regalo", "dueños-de-mascotas"],
    aliases: ["camiseta-pintada-a-mano", "buso-pintado-a-mano", "gorra-pintada-a-mano"],
    waContext: "una camiseta / buso / gorra pintada a mano",
    relatedSlugs: ["chaquetas-pintadas-a-mano", "jeans-pintados-a-mano", "tenis-pintados-a-mano"],
    inCityMatrix: false,
  },
];

export const productMap: Record<string, Product> = Object.fromEntries(
  products.map((p) => [p.slug, p]),
);

export function getProduct(slug: string): Product | undefined {
  return productMap[slug];
}

/** Lowest price across a product's sizes (for AggregateOffer lowPrice). */
export function lowPrice(p: Product): number {
  if (!p.sizes.length) return p.fromPrice;
  return Math.min(...p.sizes.map((s) => s.priceCOP));
}
export function highPrice(p: Product): number {
  if (!p.sizes.length) return p.fromPrice;
  return Math.max(...p.sizes.map((s) => s.priceCOP));
}

/** Products included in the programmatic city matrix (the strongest sellers). */
export const cityMatrixProducts = products.filter((p) => p.inCityMatrix);
