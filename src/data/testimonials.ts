/* ===========================================================================
   Testimonials.
   ⚠️ IMPORTANT — these are SAMPLE/placeholder testimonials (isSample: true).
   They populate the UI but are NOT real customer reviews. For that reason the
   site deliberately emits NO Review / AggregateRating JSON-LD anywhere (marking
   fabricated reviews up as structured data violates Google's policies and risks
   a manual penalty on the whole domain).

   TODO(owner): replace these with REAL testimonials from your customers. Only
   after they are real should you (optionally) enable Review schema.
=========================================================================== */

export interface Testimonial {
  name: string;
  city: string;
  text: string;
  productSlug: string;
  /** true = placeholder sample, not a real review. Keep true until replaced. */
  isSample: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "Valentina R.",
    city: "Medellín",
    text:
      "Le mandé hacer el retrato de mi perrito y quedé sin palabras. Cada detalle de su carita está perfecto. Lloré cuando lo vi.",
    productSlug: "retratos-de-mascotas",
    isSample: true,
  },
  {
    name: "Andrés M.",
    city: "Bogotá",
    text:
      "Pedí un cuadro de mi gata que falleció y fue la forma más linda de recordarla. El envío llegó muy bien empacado. Mil gracias.",
    productSlug: "retratos-de-mascotas",
    isSample: true,
  },
  {
    name: "Daniela G.",
    city: "Envigado",
    text:
      "El llavero quedó idéntico a mi michi. Lo llevo en las llaves a todas partes y todo el mundo me pregunta dónde lo mandé a hacer.",
    productSlug: "llaveros-de-mascotas",
    isSample: true,
  },
  {
    name: "Camilo S.",
    city: "Cali",
    text:
      "Le regalé a mi novia el retrato de los dos para nuestro aniversario. Quedó hermoso y muy bien pintado. Recomendadísimo.",
    productSlug: "retratos-de-personas",
    isSample: true,
  },
  {
    name: "Laura T.",
    city: "Medellín",
    text:
      "El cuadro en madera con resina quedó espectacular, el brillo es precioso. Se nota que está hecho a mano y con cariño.",
    productSlug: "cuadros-en-madera",
    isSample: true,
  },
  {
    name: "Juan David P.",
    city: "Pereira",
    text:
      "Mi case con la cara de mi perro es lo máximo. Llegó rápido a Pereira y la calidad es muy buena. Volveré a pedir.",
    productSlug: "cases-personalizados",
    isSample: true,
  },
  {
    name: "Sara L.",
    city: "Sabaneta",
    text:
      "La placa con el nombre y mi número me dio mucha tranquilidad para mi perrita. Además quedó muy bonita y colorida.",
    productSlug: "placas-con-nombre",
    isSample: true,
  },
  {
    name: "Mateo H.",
    city: "Bogotá",
    text:
      "Pedí mi retrato estilo anime y superó lo que esperaba. El estilo está increíble. Buenísimo para un regalo diferente.",
    productSlug: "retratos-anime",
    isSample: true,
  },
];

export function testimonialsForProduct(slug: string): Testimonial[] {
  return testimonials.filter((t) => t.productSlug === slug);
}

/** Deterministic pick of one testimonial for a given seed (e.g. a city page). */
export function pickTestimonial(seed: number, slug?: string): Testimonial | undefined {
  const pool = slug ? testimonialsForProduct(slug) : testimonials;
  const list = pool.length ? pool : testimonials;
  if (!list.length) return undefined;
  return list[seed % list.length];
}
