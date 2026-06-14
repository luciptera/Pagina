/* ===========================================================================
   Vernacular alias pages — customers don't use the business's words.
   We sell "Retratos de mascotas en lienzo"; they type "cuadro de mi perro".
   Each alias is its own landing page targeting the real phrasing, linking to
   its pillar product. Copy is intent-matched and unique per alias.
=========================================================================== */

import { products, type Product } from "./products";

export interface Alias {
  slug: string;
  /** human display phrase (the literal search) */
  phrase: string;
  productSlug: string;
  h1: string;
  lead: string;
}

/** Nice display phrase + lead per alias slug. */
const ALIAS_COPY: Record<string, { phrase: string; h1: string; lead: string }> = {
  "cuadro-de-mi-perro": {
    phrase: "cuadro de mi perro",
    h1: "Manda a hacer un cuadro de tu perro, pintado a mano",
    lead: "¿Quieres un cuadro de tu perro? Convertimos tu foto en un retrato pintado 100% a mano sobre lienzo, con todo el detalle de su mirada. Un recuerdo único para siempre.",
  },
  "cuadro-de-mi-gato": {
    phrase: "cuadro de mi gato",
    h1: "Un cuadro de tu gato, pintado a mano desde tu foto",
    lead: "Inmortaliza a tu michi con un cuadro pintado a mano. Tomamos tu foto favorita y la convertimos en un retrato sobre lienzo, lleno de personalidad.",
  },
  "pintura-de-mi-mascota": {
    phrase: "pintura de mi mascota",
    h1: "Pintura de tu mascota, hecha a mano",
    lead: "Una pintura de tu mascota hecha a mano es mucho más que una foto: es arte. La creamos sobre lienzo desde la imagen que más te guste.",
  },
  "retrato-de-mi-perro": {
    phrase: "retrato de mi perro",
    h1: "Retrato de tu perro pintado a mano",
    lead: "Un retrato de tu perro pintado a mano captura su esencia como ninguna foto. Lo hacemos sobre lienzo, cuidando cada detalle.",
  },
  "cuadro-personalizado-de-mascota": {
    phrase: "cuadro personalizado de mascota",
    h1: "Cuadro personalizado de tu mascota",
    lead: "Un cuadro personalizado con la cara de tu mascota, pintado a mano sobre lienzo. Tú eliges el tamaño y nosotros ponemos el cariño.",
  },
  "cuadro-de-mi-peludo": {
    phrase: "cuadro de mi peludo",
    h1: "Un cuadro de tu peludo, pintado a mano",
    lead: "Tu peludo merece estar en la pared. Pintamos a mano su retrato sobre lienzo desde tu foto favorita.",
  },
  "retrato-de-mascota-con-foto": {
    phrase: "retrato de mascota con foto",
    h1: "Retrato de mascota a partir de tu foto",
    lead: "Envíanos la foto de tu mascota y la convertimos en un retrato pintado a mano sobre lienzo. Entre mejor la foto, mejor el resultado.",
  },
  "pintura-al-oleo-de-mi-perro": {
    phrase: "pintura al óleo de mi perro",
    h1: "Pintura de tu perro, pintada a mano",
    lead: "Buscas una pintura tipo óleo de tu perro: la pintamos a mano sobre lienzo con acabado artístico, desde tu foto. Un retrato que dura toda la vida.",
  },
  "retrato-familiar-personalizado": {
    phrase: "retrato familiar personalizado",
    h1: "Retrato familiar personalizado, pintado a mano",
    lead: "Reúne a toda la familia en un solo cuadro. Pintamos a mano un retrato familiar sobre lienzo desde tu foto. Cada persona adicional tiene un costo extra.",
  },
  "cuadro-de-pareja": {
    phrase: "cuadro de pareja",
    h1: "Cuadro de pareja pintado a mano",
    lead: "Un cuadro de pareja pintado a mano es un regalo romántico e inolvidable. Lo creamos sobre lienzo desde su foto favorita.",
  },
  "retrato-de-pareja-con-foto": {
    phrase: "retrato de pareja con foto",
    h1: "Retrato de pareja a partir de su foto",
    lead: "Convierte la foto de ustedes en un retrato pintado a mano sobre lienzo. Ideal para aniversarios y fechas especiales.",
  },
  "cuadro-de-familia": {
    phrase: "cuadro de familia",
    h1: "Cuadro de familia pintado a mano",
    lead: "Un cuadro de familia pintado a mano para tener a todos juntos en la pared. Lo hacemos sobre lienzo desde tu foto.",
  },
  "retrato-de-una-persona-con-foto": {
    phrase: "retrato de una persona con foto",
    h1: "Retrato de una persona, pintado a mano desde su foto",
    lead: "Manda a hacer el retrato de alguien especial. Lo pintamos a mano sobre lienzo desde la foto que elijas.",
  },
  "retrato-estilo-anime": {
    phrase: "retrato estilo anime",
    h1: "Retrato estilo anime pintado a mano",
    lead: "Conviértete en personaje de anime. Pintamos a mano tu retrato en estilo anime sobre lienzo, desde tu foto.",
  },
  "convierteme-en-anime": {
    phrase: "conviérteme en anime",
    h1: "Conviértete en anime: tu retrato pintado a mano",
    lead: "¿Siempre quisiste verte en estilo anime? Pintamos a mano tu retrato anime sobre lienzo desde tu foto. Un regalo perfecto para fans.",
  },
  "dibujo-estilo-anime-con-foto": {
    phrase: "dibujo estilo anime con foto",
    h1: "Dibujo estilo anime a partir de tu foto",
    lead: "Envíanos tu foto y la convertimos en un dibujo estilo anime pintado a mano sobre lienzo. El precio varía según la complejidad del diseño.",
  },
  "regalo-para-fan-del-anime": {
    phrase: "regalo para fan del anime",
    h1: "El regalo ideal para un fan del anime",
    lead: "Sorprende a un fan del anime con su retrato pintado a mano en estilo anime. Un regalo original y muy personal.",
  },
  "cuadro-de-paisaje-personalizado": {
    phrase: "cuadro de paisaje personalizado",
    h1: "Cuadro de paisaje personalizado, pintado a mano",
    lead: "Un paisaje pintado a mano para decorar tu espacio favorito. Lo creamos sobre lienzo en el tamaño que prefieras.",
  },
  "paisaje-pintado-a-mano": {
    phrase: "paisaje pintado a mano",
    h1: "Paisaje pintado a mano sobre lienzo",
    lead: "Atardeceres, mar, árboles… un paisaje pintado a mano le da calidez a cualquier pared. Lo hacemos sobre lienzo.",
  },
  "cuadro-decorativo-para-la-sala": {
    phrase: "cuadro decorativo para la sala",
    h1: "Cuadro decorativo para la sala, pintado a mano",
    lead: "Dale personalidad a tu sala con un cuadro pintado a mano: un paisaje, un retrato o tu mascota. Arte real, no impresiones.",
  },
  "cuadro-de-mascota-en-madera": {
    phrase: "cuadro de mascota en madera",
    h1: "Cuadro de tu mascota en madera, con acabado en resina",
    lead: "Tu mascota pintada a mano sobre madera, con un brillante acabado en resina. Tú eliges el color y la decoración.",
  },
  "retrato-en-madera-con-resina": {
    phrase: "retrato en madera con resina",
    h1: "Retrato en madera con acabado en resina",
    lead: "Un retrato pintado a mano sobre madera y sellado con resina para que dure y brille. Perfecto para tu mascota.",
  },
  "cuadro-resinado-de-mascota": {
    phrase: "cuadro resinado de mascota",
    h1: "Cuadro resinado de mascota, pintado a mano",
    lead: "El acabado resinado protege la pintura y le da un brillo precioso. Pintamos a mano a tu mascota sobre madera.",
  },
  "llavero-personalizado-de-mascota": {
    phrase: "llavero personalizado de mascota",
    h1: "Llavero personalizado de tu mascota, en resina",
    lead: "Lleva a tu mascota contigo a todas partes. Pintamos su carita a mano y la encapsulamos en resina. Desde $60.000.",
  },
  "llavero-con-foto-de-mi-perro": {
    phrase: "llavero con foto de mi perro",
    h1: "Llavero con la cara de tu perro, pintado a mano",
    lead: "Convierte la foto de tu perro en un llavero pintado a mano y encapsulado en resina. Resistente para el uso diario.",
  },
  "llavero-de-resina-personalizado": {
    phrase: "llavero de resina personalizado",
    h1: "Llavero de resina personalizado, pintado a mano",
    lead: "Llaveros pintados a mano y sellados en resina, con la mascota o el diseño que quieras. Varios tamaños disponibles.",
  },
  "llavero-de-mi-gato": {
    phrase: "llavero de mi gato",
    h1: "Llavero de tu gato, pintado a mano en resina",
    lead: "Un llavero con la carita de tu michi, pintado a mano y encapsulado en resina. Un detalle que enamora.",
  },
  "placa-para-collar-de-perro": {
    phrase: "placa para collar de perro",
    h1: "Placa para el collar de tu perro, en resina",
    lead: "Placa de identificación en resina con el nombre de tu perro y tu número de contacto. Desde $20.000. No incluye collar.",
  },
  "placa-con-nombre-para-mascota": {
    phrase: "placa con nombre para mascota",
    h1: "Placa con nombre para tu mascota",
    lead: "Una placa personalizada con el nombre de tu mascota y un número de contacto, hecha en resina con los colores que elijas.",
  },
  "chapa-para-collar-con-nombre": {
    phrase: "chapa para collar con nombre",
    h1: "Chapa para collar con nombre, en resina",
    lead: "La chapa para el collar de tu mascota con su nombre y tu teléfono, hecha a mano en resina. Práctica y bonita.",
  },
  "placa-de-identificacion-para-perro": {
    phrase: "placa de identificación para perro",
    h1: "Placa de identificación para tu perro",
    lead: "Mantén seguro a tu perro con una placa de identificación en resina: nombre y número de contacto. Desde $20.000.",
  },
  "placa-para-gato-con-nombre-y-telefono": {
    phrase: "placa para gato con nombre y teléfono",
    h1: "Placa para gato con nombre y teléfono",
    lead: "Una placa ligera para el collar de tu gato, con su nombre y tu teléfono, hecha a mano en resina.",
  },
  "case-personalizado-con-foto": {
    phrase: "case personalizado con foto",
    h1: "Case de celular personalizado con tu foto",
    lead: "Tu mascota o tu diseño favorito pintado a mano dentro del case de tu celular, en resina. Indícanos la referencia de tu celu.",
  },
  "funda-de-celular-personalizada": {
    phrase: "funda de celular personalizada",
    h1: "Funda de celular personalizada, pintada a mano",
    lead: "Una funda de celular única, pintada a mano y sellada en resina con el diseño que quieras. Revisa con nosotros si tenemos tu modelo.",
  },
  "case-de-mi-perro": {
    phrase: "case de mi perro",
    h1: "Un case con la cara de tu perro",
    lead: "Lleva a tu perro en tu celular: pintamos su carita a mano dentro del case, en resina. Se inicia con un abono del 50%.",
  },
  "funda-con-foto-de-mi-mascota": {
    phrase: "funda con foto de mi mascota",
    h1: "Funda de celular con la foto de tu mascota",
    lead: "Convierte la foto de tu mascota en una funda pintada a mano y sellada en resina. Un accesorio único y personal.",
  },
  "sombrero-brisa-pintado": {
    phrase: "sombrero brisa pintado",
    h1: "Sombrero brisa pintado a mano con flores",
    lead: "Sombreros brisa blancos pintados a mano con flores antioqueñas. El accesorio ideal para la Feria de las Flores y para lucir todo el año. Precio por WhatsApp.",
  },
  "sombrero-aguadeno-pintado-a-mano": {
    phrase: "sombrero aguadeño pintado a mano",
    h1: "Sombrero aguadeño pintado a mano",
    lead: "Pintamos a mano sombreros tipo aguadeño/brisa con diseños florales únicos. Perfectos para la Feria de las Flores en Medellín.",
  },
  "sombrero-blanco-para-la-feria-de-las-flores": {
    phrase: "sombrero blanco para la feria de las flores",
    h1: "Sombrero blanco pintado para la Feria de las Flores",
    lead: "El clásico sombrero brisa blanco de la feria, pintado a mano con flores representativas de Antioquia. Pídelo con tiempo para lucirlo en agosto.",
  },
  "sombrero-con-flores-pintadas": {
    phrase: "sombrero con flores pintadas",
    h1: "Sombrero con flores pintadas a mano",
    lead: "Sombreros pintados a mano con orquídeas, girasoles, hortensias y más. Cada diseño es único y se pinta para ti.",
  },
  "sombrero-antioqueno-personalizado": {
    phrase: "sombrero antioqueño personalizado",
    h1: "Sombrero antioqueño personalizado, pintado a mano",
    lead: "Un sombrero antioqueño pintado a mano con el diseño que elijas: silletas, flores nativas, mariposas. Ideal para la Feria de las Flores.",
  },
  "sombrero-pintado-a-mano": {
    phrase: "sombrero pintado a mano",
    h1: "Sombreros pintados a mano",
    lead: "Sombreros brisa blancos convertidos en arte: pintados a mano con flores y diseños únicos. Precio por WhatsApp, envíos a toda Colombia.",
  },
};

export function buildAliases(): Alias[] {
  const out: Alias[] = [];
  for (const p of products) {
    for (const slug of p.aliases) {
      const copy = ALIAS_COPY[slug];
      if (!copy) continue;
      out.push({ slug, phrase: copy.phrase, productSlug: p.slug, h1: copy.h1, lead: copy.lead });
    }
  }
  return out;
}

export const aliases = buildAliases();
export const aliasMap: Record<string, Alias> = Object.fromEntries(
  aliases.map((a) => [a.slug, a]),
);
export function aliasProduct(a: Alias): Product | undefined {
  return products.find((p) => p.slug === a.productSlug);
}
