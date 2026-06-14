/* ===========================================================================
   Content-variation system — keeps programmatic (product × city) pages
   genuinely unique and useful, not find-and-replace clones.

   A deterministic hash of (productSlug + citySlug) selects a variant combo,
   so each page reads naturally but is stable across builds.
=========================================================================== */

import type { Product } from "./products";
import type { City } from "./cities";

/** Stable string hash → non-negative int. */
export function hashSeed(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function pick<T>(arr: T[], seed: number, offset = 0): T {
  return arr[(seed + offset) % arr.length];
}

// --- intro paragraph variants (Tier-1 = domicilio, Tier-2 = envíos) ---
const introTier1 = [
  (p: Product, c: City) =>
    `¿Buscas ${lower(p.shortName)} en ${c.name}? En Luciptera pintamos a mano, desde tu foto, ${lower(p.name)} con todo el detalle. ${c.deliveryEstimate}`,
  (p: Product, c: City) =>
    `Si estás en ${c.name} o el área metropolitana, podemos hacerte ${lower(p.name)} pintado 100% a mano. ${c.deliveryEstimate}`,
  (p: Product, c: City) =>
    `En ${c.name}, ${lower(p.shortName)} pintado a mano desde tu foto es un detalle que enamora. ${c.deliveryEstimate}`,
];

const introTier2 = [
  (p: Product, c: City) =>
    `¿Quieres ${lower(p.shortName)} y vives en ${c.name}? Lo pintamos a mano en Medellín y te lo enviamos. ${c.deliveryEstimate}`,
  (p: Product, c: City) =>
    `Desde Medellín hacemos ${lower(p.name)} pintado a mano y enviamos a ${c.name}. ${c.deliveryEstimate}`,
  (p: Product, c: City) =>
    `No importa que estés en ${c.name}: pintamos a mano ${lower(p.shortName)} desde tu foto y te lo hacemos llegar. ${c.deliveryEstimate}`,
];

// --- secondary value-prop paragraph variants ---
const valueProps = [
  (p: Product) =>
    `Cada pieza se pinta a mano, una por una, así que tu ${lower(p.shortName)} es completamente único. Nada de impresiones: arte real hecho con tiempo y cariño.`,
  (p: Product) =>
    `Trabajamos desde tu foto favorita y cuidamos cada detalle —los colores, la mirada, los gestos— para que el resultado se sienta vivo.`,
  (p: Product) =>
    `Más que un producto, es un recuerdo. Por eso ${lower(p.shortName)} de Luciptera se pinta a mano con la dedicación que merece esa persona o mascota tan especial.`,
  (p: Product) =>
    `El precio es desde ${formatFrom(p.fromPrice)} y varía según el tamaño que elijas. Te asesoramos por WhatsApp para encontrar la opción perfecta para ti.`,
];

// --- closing nudge variants ---
const closers = [
  (c: City) =>
    `Escríbenos por WhatsApp con tu foto y coordinamos todo para ${c.name}. Te contamos precio, tiempos y resolvemos cualquier duda.`,
  (c: City) =>
    `¿Lista o listo para encargarlo en ${c.name}? Mándanos un mensaje por WhatsApp con tu idea y empezamos.`,
  (c: City) =>
    `Cuéntanos por WhatsApp qué tienes en mente; con gusto te ayudamos a hacer tu pedido para ${c.name}.`,
];

function lower(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1);
}
function formatFrom(n: number): string {
  return "$" + n.toLocaleString("es-CO");
}

export interface CityCopy {
  intro: string;
  valueProp: string;
  closer: string;
}

export function cityCopy(p: Product, c: City): CityCopy {
  const seed = hashSeed(p.slug + "|" + c.slug);
  const intro = c.tier === 1 ? pick(introTier1, seed) : pick(introTier2, seed);
  return {
    intro: intro(p, c),
    valueProp: pick(valueProps, seed, 1)(p),
    closer: pick(closers, seed, 2)(c),
  };
}

/**
 * Quality gate: only build a (product × city) page if it carries enough unique
 * content. Returns true when the generated copy clears the word-count floor.
 */
export function meetsContentFloor(p: Product, c: City, minWords = 60): boolean {
  const { intro, valueProp, closer } = cityCopy(p, c);
  const words = (intro + " " + valueProp + " " + closer).split(/\s+/).filter(Boolean).length;
  return words >= minWords;
}
