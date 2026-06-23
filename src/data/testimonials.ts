/* ===========================================================================
   Testimonials — REAL 5★ reviews from the Google Business Profile.

   ⚠️ Displayed for trust/conversion only. We deliberately emit NO Review /
   AggregateRating JSON-LD: Google's structured-data policy disallows
   "self-serving" review markup for a business on its own site, and disallows
   marking up reviews sourced from another platform (Google). The star rating
   lives on the Google Business Profile (Maps / local pack), which the site
   links to. Adding fake review schema would risk a manual penalty.

   To add the owner's 3 remaining reviews: copy a block below (keep it verbatim
   from Google; only fix obvious typos for readability) and assign a productSlug
   just for spreading them across pages — the display doesn't claim a review is
   about that specific product.
=========================================================================== */

export interface Testimonial {
  name: string;
  text: string;
  /** star rating 1–5 */
  rating: number;
  /** where the review came from (shown as a small label) */
  source: string;
  /** product slug used only to distribute reviews across pages */
  productSlug: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Yisela Vargas",
    text: "Me encantó el dibujo de mi mascota 🐕. ¡La mejor! 😍 Recomendada ❤️",
    rating: 5,
    source: "Google",
    productSlug: "retratos-de-mascotas",
  },
  {
    name: "Alejandra Madi",
    text: "Me encantó el llavero que me hizo y la chaqueta con el dibujo personalizado. ¡La recomiendo al 100%!",
    rating: 5,
    source: "Google",
    productSlug: "llaveros-de-mascotas",
  },
  {
    name: "María C.",
    text: "10/10. Es mucho más de lo que esperas 😍 Lu es una completa artista 🤌✨",
    rating: 5,
    source: "Google",
    productSlug: "retratos-de-personas",
  },
  {
    name: "Wendy Vidal",
    text: "Los diseños son preciosos, muy buena con los detalles. Su trabajo, ¡10/10! 🥰🤗",
    rating: 5,
    source: "Google",
    productSlug: "sombreros-brisa",
  },
  {
    name: "Daniel Pérez",
    text: "¡Súper recomendado, 10/10!",
    rating: 5,
    source: "Google",
    productSlug: "cuadros-en-madera",
  },
  {
    name: "Manuel Francisco Peñata",
    text: "Una nota sus creaciones y manualidades.",
    rating: 5,
    source: "Google",
    productSlug: "retratos-de-personas",
  },
  {
    name: "Ty Carson",
    text: "Le encargué a Luciptera un homenaje de mi mascota Buddy y quedé sin palabras. Captó su esencia de una forma que no me esperaba.",
    rating: 5,
    source: "Google",
    productSlug: "retratos-de-mascotas",
  },
  {
    name: "Andrea Ubarnes",
    text: "El mejor emprendimiento que he podido conocer. Sus productos ayudan a plasmar el amor que le tenemos a nuestras mascotas; en mi caso quedé enamorada de sus llaveros personalizados 🥰",
    rating: 5,
    source: "Google",
    productSlug: "llaveros-de-mascotas",
  },
  {
    name: "Gissell Fonseca",
    text: "Excelente calidad, cada artículo o prenda es única e irrepetible. La mejor opción cuando se quiere dar un buen detalle 🥰✨🎨",
    rating: 5,
    source: "Google",
    productSlug: "placas-con-nombre",
  },
  {
    name: "Ximena Guzmán",
    text: "Muy lindos. Trabajo hecho a mano que sin duda vale la pena adquirir 🤗",
    rating: 5,
    source: "Google",
    productSlug: "paisajes-en-lienzo",
  },
];

/** Up to `n` reviews for a product: its own first, then others to fill. */
export function testimonialsForProduct(slug: string, n = 3): Testimonial[] {
  const own = testimonials.filter((t) => t.productSlug === slug);
  const rest = testimonials.filter((t) => t.productSlug !== slug);
  return [...own, ...rest].slice(0, n);
}

/** Deterministic single pick for a given seed (e.g. a city page). */
export function pickTestimonial(seed: number, slug?: string): Testimonial | undefined {
  if (!testimonials.length) return undefined;
  const pool = slug ? testimonialsForProduct(slug, testimonials.length) : testimonials;
  return pool[seed % pool.length];
}
