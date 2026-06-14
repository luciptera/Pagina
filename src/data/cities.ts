/* ===========================================================================
   Cities — honest geographic strategy.
   Tier 1 = Medellín + área metropolitana → "domicilio en Medellín".
   Tier 2 = resto de Colombia → "envíos a [ciudad]" (NEVER a fake local presence).
=========================================================================== */

export interface City {
  slug: string;
  name: string;
  tier: 1 | 2;
  region: string;
  /** honest, specific delivery estimate string */
  deliveryEstimate: string;
  /** Tier-1 only: strong neighborhoods for local color */
  neighborhoods?: string[];
}

export const cities: City[] = [
  // ---- Tier 1: Medellín metro (domicilio) ----
  {
    slug: "medellin",
    name: "Medellín",
    tier: 1,
    region: "Antioquia",
    deliveryEstimate: "Entrega a domicilio dentro de Medellín, coordinada por WhatsApp.",
    neighborhoods: ["El Poblado", "Laureles", "Belén", "Envigado", "Estadio", "La América"],
  },
  { slug: "envigado", name: "Envigado", tier: 1, region: "Antioquia", deliveryEstimate: "Domicilio en Envigado y alrededores, coordinado por WhatsApp." },
  { slug: "sabaneta", name: "Sabaneta", tier: 1, region: "Antioquia", deliveryEstimate: "Domicilio en Sabaneta, coordinado por WhatsApp." },
  { slug: "itagui", name: "Itagüí", tier: 1, region: "Antioquia", deliveryEstimate: "Domicilio en Itagüí, coordinado por WhatsApp." },
  { slug: "bello", name: "Bello", tier: 1, region: "Antioquia", deliveryEstimate: "Domicilio en Bello, coordinado por WhatsApp." },
  { slug: "la-estrella", name: "La Estrella", tier: 1, region: "Antioquia", deliveryEstimate: "Domicilio en La Estrella, coordinado por WhatsApp." },
  { slug: "caldas", name: "Caldas", tier: 1, region: "Antioquia", deliveryEstimate: "Domicilio en Caldas (Antioquia), coordinado por WhatsApp." },
  { slug: "copacabana", name: "Copacabana", tier: 1, region: "Antioquia", deliveryEstimate: "Domicilio en Copacabana, coordinado por WhatsApp." },
  { slug: "girardota", name: "Girardota", tier: 1, region: "Antioquia", deliveryEstimate: "Domicilio en Girardota, coordinado por WhatsApp." },

  // ---- Tier 2: resto de Colombia (envíos) ----
  { slug: "bogota", name: "Bogotá", tier: 2, region: "Cundinamarca", deliveryEstimate: "Envíos a Bogotá por transportadora, normalmente 2 a 4 días hábiles." },
  { slug: "cali", name: "Cali", tier: 2, region: "Valle del Cauca", deliveryEstimate: "Envíos a Cali por transportadora, normalmente 2 a 4 días hábiles." },
  { slug: "barranquilla", name: "Barranquilla", tier: 2, region: "Atlántico", deliveryEstimate: "Envíos a Barranquilla por transportadora, normalmente 2 a 5 días hábiles." },
  { slug: "cartagena", name: "Cartagena", tier: 2, region: "Bolívar", deliveryEstimate: "Envíos a Cartagena por transportadora, normalmente 3 a 5 días hábiles." },
  { slug: "bucaramanga", name: "Bucaramanga", tier: 2, region: "Santander", deliveryEstimate: "Envíos a Bucaramanga por transportadora, normalmente 2 a 4 días hábiles." },
  { slug: "pereira", name: "Pereira", tier: 2, region: "Risaralda", deliveryEstimate: "Envíos a Pereira por transportadora, normalmente 1 a 3 días hábiles." },
  { slug: "manizales", name: "Manizales", tier: 2, region: "Caldas", deliveryEstimate: "Envíos a Manizales por transportadora, normalmente 1 a 3 días hábiles." },
  { slug: "santa-marta", name: "Santa Marta", tier: 2, region: "Magdalena", deliveryEstimate: "Envíos a Santa Marta por transportadora, normalmente 3 a 5 días hábiles." },
  { slug: "cucuta", name: "Cúcuta", tier: 2, region: "Norte de Santander", deliveryEstimate: "Envíos a Cúcuta por transportadora, normalmente 3 a 5 días hábiles." },
  { slug: "ibague", name: "Ibagué", tier: 2, region: "Tolima", deliveryEstimate: "Envíos a Ibagué por transportadora, normalmente 2 a 4 días hábiles." },
  { slug: "villavicencio", name: "Villavicencio", tier: 2, region: "Meta", deliveryEstimate: "Envíos a Villavicencio por transportadora, normalmente 2 a 4 días hábiles." },
];

export const cityMap: Record<string, City> = Object.fromEntries(
  cities.map((c) => [c.slug, c]),
);

export const tier1Cities = cities.filter((c) => c.tier === 1);
export const tier2Cities = cities.filter((c) => c.tier === 2);

export function getCity(slug: string): City | undefined {
  return cityMap[slug];
}
