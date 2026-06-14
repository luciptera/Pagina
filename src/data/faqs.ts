/* ===========================================================================
   FAQs — answer-first (the direct answer in the first 1–2 sentences, then detail).
   scope: "global" shows everywhere; a productSlug scopes it to that product.
=========================================================================== */

export interface Faq {
  question: string;
  answer: string;
  scope: "global" | string; // "global" or a product slug
}

export const faqs: Faq[] = [
  {
    question: "¿Hacen envíos a toda Colombia?",
    answer:
      "Sí, hacemos envíos a toda Colombia por transportadora. En Medellín y su área metropolitana también ofrecemos entrega a domicilio. El valor del envío o domicilio no está incluido en los precios y se coordina por WhatsApp.",
    scope: "global",
  },
  {
    question: "¿Cuánto cuesta un retrato de mascota?",
    answer:
      "Un retrato de mascota en lienzo cuesta desde $170.000 (tamaño 20×25 cm) y va hasta $650.000 (40×60 cm). Cada mascota adicional en el mismo lienzo tiene un costo extra de $70.000. Los precios no incluyen envío.",
    scope: "global",
  },
  {
    question: "¿Cuánto se demora un trabajo pintado a mano?",
    answer:
      "Los retratos en lienzo (mascotas, personas, anime y paisajes) tienen un tiempo mínimo de preparación de 15 días. Los llaveros y placas en resina toman mínimo 8 días. Te recomendamos encargar con anticipación, sobre todo en fechas especiales.",
    scope: "global",
  },
  {
    question: "¿Cómo encargo mi pedido?",
    answer:
      "Escríbenos por WhatsApp con la foto y el producto que quieres; te confirmamos precio, tamaño y tiempo de entrega. Confirmas con el abono en Nequi o Bancolombia, lo pintamos a mano y coordinamos el envío o domicilio. Todo el proceso es por WhatsApp.",
    scope: "global",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer:
      "Recibimos pagos por Nequi (3022651859) y Bancolombia (Llave @fonseca9180). Para confirmar tu pedido nos envías el comprobante de la transferencia por WhatsApp.",
    scope: "global",
  },
  {
    question: "¿Qué foto debo enviar para mi retrato?",
    answer:
      "Envía la foto más nítida que tengas, con buena luz y donde se vea bien la cara. Entre mejor sea la foto, mejor quedará el retrato. Si tienes dudas, mándanos las opciones por WhatsApp y te ayudamos a elegir la mejor.",
    scope: "global",
  },
  {
    question: "¿El precio incluye el envío?",
    answer:
      "No. Todos los precios son del producto pintado a mano y no incluyen el valor del envío o domicilio, que se calcula aparte según tu ciudad y se coordina por WhatsApp.",
    scope: "global",
  },

  // --- product-scoped ---
  {
    question: "¿Puedo poner más de una mascota en el mismo cuadro?",
    answer:
      "Sí. Puedes agregar mascotas extra al mismo lienzo; cada mascota adicional tiene un costo de $70.000. Mándanos las fotos por WhatsApp y te confirmamos el precio final.",
    scope: "retratos-de-mascotas",
  },
  {
    question: "¿Pueden pintar una mascota que ya falleció?",
    answer:
      "Sí, con todo el cariño. Muchos de nuestros retratos son homenajes a mascotas que partieron. Solo necesitamos una buena foto para pintarla a mano y conservar su recuerdo.",
    scope: "retratos-de-mascotas",
  },
  {
    question: "¿Cuántas personas puede llevar el retrato?",
    answer:
      "Las que quieras. El precio base es por una persona y cada persona adicional en el mismo lienzo cuesta $80.000. Ideal para retratos de pareja o de familia.",
    scope: "retratos-de-personas",
  },
  {
    question: "¿El acabado en resina del cuadro en madera se daña?",
    answer:
      "No. El acabado resinado protege la pintura, le da brillo y resistencia. Tú eliges el color y la decoración del cuadro. Recomendamos limpiarlo con un paño suave.",
    scope: "cuadros-en-madera",
  },
  {
    question: "¿El llavero es resistente?",
    answer:
      "Sí. Los llaveros se pintan 100% a mano y se encapsulan en resina, lo que los hace resistentes para el uso diario. El tiempo de preparación es mínimo de 8 días.",
    scope: "llaveros-de-mascotas",
  },
  {
    question: "¿La placa incluye el collar?",
    answer:
      "No incluye collar ni correa: es la placa con un gancho para añadirla al collar de tu mascota. Lleva el nombre de la mascota y un número de contacto, con los colores que elijas.",
    scope: "placas-con-nombre",
  },
  {
    question: "¿Sirven para cualquier modelo de celular?",
    answer:
      "Indícanos la referencia de tu celular y revisamos si tenemos el modelo en stock. Los cases se hacen en resina y se confirma el pedido con un abono del 50% para iniciar el diseño.",
    scope: "cases-personalizados",
  },
];

export function globalFaqs(): Faq[] {
  return faqs.filter((f) => f.scope === "global");
}
export function productFaqs(slug: string): Faq[] {
  return faqs.filter((f) => f.scope === slug);
}
/** Product FAQ block = its scoped FAQs + a few key global ones. */
export function faqsForProduct(slug: string): Faq[] {
  const scoped = productFaqs(slug);
  const globals = globalFaqs().filter((f) =>
    ["¿Hacen envíos a toda Colombia?", "¿Cómo encargo mi pedido?", "¿Qué medios de pago aceptan?"].includes(
      f.question,
    ),
  );
  return [...scoped, ...globals];
}
