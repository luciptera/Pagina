/* ===========================================================================
   Luciptera — site-wide constants (single source of truth)
   Edit business facts here; everything else reads from this file.
=========================================================================== */

/**
 * WhatsApp number in full international format (no +, no spaces).
 * Confirmed from the catalog: 302 265 1859 (Colombia, +57).
 * TODO(owner): confirm this is the WhatsApp line before launch.
 */
export const WHATSAPP_NUMBER = "573022651859";

export const BUSINESS = {
  name: "Luciptera",
  legalName: "Luciptera — Arte personalizado",
  owner: "Martha Lucía Fonseca",
  tagline: "Arte que ilumina recuerdos",
  /** short description used across meta + JSON-LD */
  description:
    "Arte personalizado pintado 100% a mano en Medellín: retratos de mascotas y personas en lienzo, cuadros en madera, llaveros, placas y cases en resina. Envíos a toda Colombia.",
  instagram: "luciptera",
  instagramUrl: "https://www.instagram.com/luciptera/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61590667984007",
  artHandle: "Fonlu_Arte",
  email: "", // TODO(owner): add if desired
  city: "Medellín",
  region: "Antioquia",
  country: "CO",
  countryName: "Colombia",
  /** honest service-area framing — physical/domicilio in Medellín, shipping nationwide */
  areaServed: "Medellín y área metropolitana (domicilio) · Envíos a toda Colombia",
  payments: {
    nequi: "3022651859",
    bancolombiaKey: "@fonseca9180",
  },
  /** shown on every product — prices never include shipping */
  shippingNote: "Los precios no incluyen el valor del envío o domicilio.",
  handmadeNote: "Pintado 100% a mano",
} as const;

/** Default OG image (the firefly + wordmark lockup). */
export const OG_IMAGE = "/og/luciptera-default.jpg";

/**
 * Build a wa.me link with a URL-encoded, page-specific prefilled message,
 * so Lucía instantly knows the context of every chat.
 */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Format a COP integer as "$170.000" (Colombian thousands separator). */
export function cop(value: number): string {
  return "$" + value.toLocaleString("es-CO");
}
