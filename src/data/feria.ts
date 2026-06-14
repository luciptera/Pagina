/* ===========================================================================
   Feria de las Flores — Medellín's biggest cultural event and our top seasonal
   search opportunity. Dates are official (Feria 2026: 31 jul – 9 ago).
   The painted "sombreros brisa" line is the hero product for this campaign.

   TODO(owner): drop real photos / mockup files into
   src/assets/sombreros/<design-slug>/<name>.jpg to replace the placeholders.
=========================================================================== */

export const FERIA = {
  year: 2026,
  /** ISO dates for schema + countdown */
  startISO: "2026-07-31",
  endISO: "2026-08-09",
  startLabel: "31 de julio",
  endLabel: "9 de agosto",
  rangeLabel: "del 31 de julio al 9 de agosto de 2026",
  /** last recommended order date so a hand-painted hat arrives in time */
  orderByISO: "2026-07-23",
  orderByLabel: "23 de julio",
  edition: "Feria de las Flores 2026",
} as const;

export interface HatDesign {
  slug: string;
  /** collection name */
  name: string;
  emoji: string;
  /** one-line hook */
  short: string;
  /** representative flowers/elements (also good keywords) */
  flowers: string[];
  /** answer-first description */
  description: string;
  /** search phrases this design targets */
  keywords: string[];
  /** true = clearly shown in the owner's concept set; false = suggested option */
  fromConcept: boolean;
}

export const hatDesigns: HatDesign[] = [
  {
    slug: "sombrero-orquidea-cattleya",
    name: "La Reina de la Feria",
    emoji: "🌺",
    short: "Orquídea, la flor nacional de Colombia, en tonos morados y fucsia.",
    flowers: ["Orquídea (Cattleya)", "flores moradas y fucsia", "hojas verdes"],
    description:
      "Un sombrero brisa coronado por orquídeas —la flor nacional de Colombia— en tonos morados y fucsia intensos, pintadas a mano. Elegante y muy representativo de la feria.",
    keywords: [
      "sombrero orquídea pintado",
      "sombrero con orquídeas",
      "sombrero flor nacional de colombia",
    ],
    fromConcept: true,
  },
  {
    slug: "sombrero-girasoles",
    name: "Girasol",
    emoji: "🌻",
    short: "El girasol como protagonista, alegre y luminoso.",
    flowers: ["Girasol", "hojas verdes"],
    description:
      "Un girasol grande y luminoso pintado a mano como protagonista del sombrero, con hojas verdes sobre la cinta negra. Un diseño alegre y muy fotogénico para la feria.",
    keywords: ["sombrero girasol pintado", "sombrero con girasoles"],
    fromConcept: true,
  },
  {
    slug: "sombrero-clavel",
    name: "Clavel",
    emoji: "🌹",
    short: "Claveles rojos, una de las flores más típicas de las silletas.",
    flowers: ["Claveles rojos", "botones", "hojas verdes"],
    description:
      "Claveles rojos pintados a mano, una de las flores más representativas de las silletas antioqueñas. Un diseño clásico, vivo y elegante sobre el sombrero brisa.",
    keywords: ["sombrero clavel pintado", "sombrero flores rojas", "sombrero claveles"],
    fromConcept: true,
  },
  {
    slug: "sombrero-crisantemo",
    name: "Crisantemo",
    emoji: "🌼",
    short: "Crisantemos amarillos, color y tradición silletera.",
    flowers: ["Crisantemos amarillos", "botones", "hojas verdes"],
    description:
      "Crisantemos amarillos pintados a mano, flores típicas de las fincas silleteras de Santa Elena. Un diseño cálido y lleno de color para lucir en la feria.",
    keywords: ["sombrero crisantemo pintado", "sombrero flores amarillas"],
    fromConcept: true,
  },
  {
    slug: "sombrero-flores-moradas",
    name: "Flores Moradas",
    emoji: "💜",
    short: "Un ramo de flores moradas, delicado y femenino.",
    flowers: ["Flores moradas", "lilas", "hojas verdes"],
    description:
      "Un delicado ramo de flores moradas pintado a mano sobre el sombrero brisa. Un diseño femenino y elegante que combina con todo.",
    keywords: ["sombrero flores moradas pintado", "sombrero flores lilas"],
    fromConcept: true,
  },
  {
    slug: "sombrero-silleta-tradicional",
    name: "La Silleta Tradicional",
    emoji: "💐",
    short: "Varias flores antioqueñas juntas, inspiradas en las silletas (a pedido).",
    flowers: ["Claveles", "crisantemos", "girasoles", "hojas verdes antioqueñas"],
    description:
      "Inspirado en el Desfile de Silleteros: un ramo de varias flores antioqueñas —claveles, crisantemos y girasoles— pintado a mano. Un diseño cargado de tradición. Lo pintamos a pedido.",
    keywords: [
      "sombrero silleta feria de las flores",
      "sombrero desfile de silleteros",
      "sombrero silletero pintado",
    ],
    fromConcept: false,
  },
  {
    slug: "sombrero-diseno-personalizado",
    name: "Diseño a tu gusto",
    emoji: "🎨",
    short: "Tú eliges las flores, los colores y el estilo.",
    flowers: ["Las flores que elijas"],
    description:
      "¿Tienes una idea propia? Pintamos tu sombrero brisa con las flores, los colores y el estilo que quieras. Cuéntanos tu idea por WhatsApp y la hacemos realidad.",
    keywords: ["sombrero pintado personalizado", "sombrero a tu gusto feria"],
    fromConcept: false,
  },
];

export const hatDesignMap: Record<string, HatDesign> = Object.fromEntries(
  hatDesigns.map((d) => [d.slug, d]),
);

/** Compute days from a given build date to the feria start (used for urgency copy). */
export function daysUntilFeria(now: Date): number {
  const start = new Date(FERIA.startISO + "T00:00:00-05:00");
  const ms = start.getTime() - now.getTime();
  return Math.max(0, Math.ceil(ms / 86400000));
}
