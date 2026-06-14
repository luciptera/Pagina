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
    short: "Orquídea Cattleya, la flor nacional de Colombia.",
    flowers: ["Orquídea Cattleya", "flores moradas", "hojas verdes"],
    description:
      "Un sombrero brisa coronado por la Orquídea Cattleya —la flor nacional de Colombia— en tonos morados intensos. Elegante y muy representativo de la feria.",
    keywords: [
      "sombrero orquídea pintado",
      "sombrero con orquídea cattleya",
      "sombrero flor nacional de colombia",
    ],
    fromConcept: true,
  },
  {
    slug: "sombrero-silleta-tradicional",
    name: "La Silleta Tradicional",
    emoji: "💐",
    short: "Una mini silleta en la copa, como en el desfile de silleteros.",
    flowers: ["Claveles", "crisantemos", "gerberas", "girasoles", "hojas verdes antioqueñas"],
    description:
      "Inspirado en el Desfile de Silleteros: una mini silleta pintada en la copa, rodeada de claveles, crisantemos, gerberas y girasoles sobre hojas verdes antioqueñas. El diseño más tradicional y turístico.",
    keywords: [
      "sombrero silleta feria de las flores",
      "sombrero desfile de silleteros",
      "sombrero silletero pintado",
    ],
    fromConcept: true,
  },
  {
    slug: "sombrero-jardin-de-santa-elena",
    name: "El Jardín de Santa Elena",
    emoji: "🌻",
    short: "Diseño envolvente con girasoles, hortensias, abejas y mariposas.",
    flowers: ["Girasoles", "hortensias", "pompones", "abejas nativas", "mariposas"],
    description:
      "Un jardín que envuelve todo el sombrero: girasoles, hortensias y pompones acompañados de abejas nativas y mariposas, como las fincas silleteras de Santa Elena. Un diseño lleno de vida.",
    keywords: [
      "sombrero girasoles y hortensias",
      "sombrero jardín pintado",
      "sombrero mariposas y flores",
    ],
    fromConcept: true,
  },
  {
    slug: "sombrero-girasoles",
    name: "Girasoles de Antioquia",
    emoji: "🌻",
    short: "El girasol como protagonista, alegre y luminoso.",
    flowers: ["Girasoles", "hojas verdes"],
    description:
      "Un girasol grande y luminoso como protagonista del sombrero, con hojas verdes. Un diseño sencillo, alegre y muy fotogénico para la feria.",
    keywords: ["sombrero girasol pintado", "sombrero con girasoles"],
    fromConcept: true,
  },
  {
    slug: "sombrero-hortensias",
    name: "Hortensias de Santa Elena",
    emoji: "💠",
    short: "Hortensias azules y rosadas, las flores de las fincas silleteras.",
    flowers: ["Hortensias azules", "hortensias rosadas", "hojas verdes"],
    description:
      "Hortensias en tonos azules y rosados, las flores emblemáticas de las fincas de Santa Elena. Un diseño delicado y muy antioqueño.",
    keywords: ["sombrero hortensias pintado", "sombrero flores azules"],
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
