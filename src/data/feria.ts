/* ===========================================================================
   Feria de las Flores — Medellín's biggest cultural event and our top seasonal
   search opportunity. Official dates are announced yearly by the Alcaldía de Medellín.
   The painted "sombreros brisa" line is the hero product for this campaign.

   TODO(owner): drop real photos / mockup files into
   src/assets/sombreros/<design-slug>/<name>.jpg to replace the placeholders.
=========================================================================== */

export const FERIA = {
  year: 2027,
  edition: "Feria de las Flores 2027",
  /**
   * The official 2027 dates have NOT been announced yet. Never print exact
   * dates as fact — the feria is traditionally held between late July and the
   * second week of August. Fill startISO/endISO + set datesConfirmed when the
   * Alcaldía de Medellín publishes them, and the Event schema turns back on.
   */
  datesConfirmed: false,
  startISO: "",
  endISO: "",
  rangeLabel: "a comienzos de agosto de 2027",
  monthLabel: "agosto de 2027",
  typicalWindow: "entre finales de julio y la segunda semana de agosto",
  /** hats painted for the last feria, available for immediate delivery */
  hasReadyStock: true,
  readyStockLabel: "Sombreros ya pintados · entrega inmediata",
} as const;

/**
 * Hat pricing (COP).
 *  ready      → already-painted hats in stock, immediate delivery
 *  customFrom → a hat painted to order with the design you choose
 */
export const HAT_PRICES = {
  ready: 80000,
  customFrom: 100000,
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
    short: "Girasoles luminosos que envuelven copa y ala.",
    flowers: ["Girasoles", "hojas verdes"],
    description:
      "Girasoles grandes y luminosos pintados a mano, recorriendo la copa y el ala del sombrero. Un diseño alegre, radiante y muy fotogénico para la feria.",
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
    slug: "sombrero-hibisco",
    name: "Hibisco",
    emoji: "🌺",
    short: "Un hibisco (cayena) rojo intenso, vibrante y tropical.",
    flowers: ["Hibisco / cayena roja", "flores silvestres", "hojas verdes"],
    description:
      "Un hibisco —la cayena roja tan nuestra— pintado a mano en rojo intenso, acompañado de hojas y pequeñas flores silvestres en el ala. Vibrante, tropical y muy colombiano.",
    keywords: ["sombrero hibisco pintado", "sombrero cayena pintado", "sombrero flor roja"],
    fromConcept: true,
  },
  {
    slug: "sombrero-tulipanes",
    name: "Tulipanes",
    emoji: "🌷",
    short: "Tres tulipanes de colores, delicados y elegantes.",
    flowers: ["Tulipanes (rosado, amarillo y morado)", "hojas verdes"],
    description:
      "Tres tulipanes —rosado, amarillo y morado— pintados a mano con sus hojas, delicados y elegantes. Un diseño primaveral que combina con todo.",
    keywords: ["sombrero tulipanes pintado", "sombrero con tulipanes"],
    fromConcept: true,
  },
  {
    slug: "sombrero-hortensias",
    name: "Hortensias",
    emoji: "💠",
    short: "Hortensias azules de Santa Elena, las flores de las silletas.",
    flowers: ["Hortensias azules", "hojas verdes"],
    description:
      "Hortensias azules pintadas a mano, las flores emblemáticas de las fincas silleteras de Santa Elena. Un diseño fresco y muy antioqueño.",
    keywords: ["sombrero hortensias pintado", "sombrero flores azules"],
    fromConcept: true,
  },
  {
    slug: "sombrero-jardin-floral",
    name: "Jardín Floral",
    emoji: "💐",
    short: "Diseño envolvente con peonía, flores naranjas y silvestres.",
    flowers: ["Peonía roja", "flores naranjas", "flores silvestres", "hojas verdes"],
    description:
      "Un jardín que envuelve todo el sombrero: una peonía roja como protagonista, rodeada de flores naranjas y silvestres que se extienden por el ala. Nuestro diseño más cargado y vistoso.",
    keywords: ["sombrero jardín floral pintado", "sombrero envolvente de flores", "sombrero peonía pintado"],
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
