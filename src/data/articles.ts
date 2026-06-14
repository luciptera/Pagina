/* ===========================================================================
   AEO / informational articles — answer-first structure.
   Each section leads with a direct, factual answer (LLMs lift the lede), then
   detail. Sections double as FAQPage entries for structured data.
=========================================================================== */

export interface ArticleSection {
  /** natural-language question used as the H2 */
  q: string;
  /** answer-first paragraphs (first 1–2 sentences = the direct answer) */
  a: string[];
}

export interface Article {
  slug: string;
  title: string;
  h1: string;
  description: string;
  /** short answer-first intro shown under the H1 */
  intro: string;
  sections: ArticleSection[];
  relatedProducts: string[];
  /** product slug to use for the hero image */
  heroProduct: string;
}

export const articles: Article[] = [
  {
    slug: "cuanto-cuesta-un-retrato-de-mascota",
    title: "¿Cuánto cuesta un retrato de mascota en Colombia?",
    h1: "¿Cuánto cuesta un retrato de mascota en Colombia?",
    description:
      "Un retrato de mascota en lienzo cuesta desde $170.000 y hasta $650.000 según el tamaño. Te explicamos los precios, qué incluye y de qué depende el valor final.",
    intro:
      "En Luciptera, un retrato de mascota en lienzo cuesta desde $170.000 (20×25 cm) y llega hasta $650.000 (40×60 cm). El precio depende del tamaño y de cuántas mascotas quieras incluir. Los valores no incluyen el envío.",
    sections: [
      {
        q: "¿Cuál es el precio de un retrato de mascota según el tamaño?",
        a: [
          "Los precios por tamaño son: 20×25 cm $170.000, 23×30 cm $250.000, 30×30 cm $300.000, 30×41 cm $380.000 y 40×60 cm $650.000.",
          "Todos se pintan 100% a mano sobre lienzo. Entre más grande el formato, más detalle y presencia tendrá tu cuadro.",
        ],
      },
      {
        q: "¿Cuánto cuesta agregar otra mascota al cuadro?",
        a: [
          "Cada mascota adicional en el mismo lienzo cuesta $70.000.",
          "Es ideal si quieres a tus dos peludos juntos o a toda la familia animal en una sola obra.",
        ],
      },
      {
        q: "¿El precio incluye el envío?",
        a: [
          "No, los precios no incluyen el valor del envío o domicilio.",
          "El envío se calcula aparte según tu ciudad y se coordina por WhatsApp. En Medellín ofrecemos entrega a domicilio.",
        ],
      },
      {
        q: "¿De qué depende el precio final?",
        a: [
          "El precio final depende del tamaño del lienzo y del número de mascotas o personas que incluyas.",
          "Cuéntanos qué tienes en mente por WhatsApp y te damos el valor exacto sin compromiso.",
        ],
      },
    ],
    relatedProducts: ["retratos-de-mascotas", "cuadros-en-madera", "llaveros-de-mascotas"],
    heroProduct: "retratos-de-mascotas",
  },
  {
    slug: "como-elegir-la-foto-para-tu-retrato",
    title: "Cómo elegir la foto perfecta para tu retrato",
    h1: "Cómo elegir la mejor foto para tu retrato",
    description:
      "La mejor foto para un retrato es nítida, con buena luz y donde se vea bien la cara. Te damos consejos prácticos para que tu retrato pintado a mano quede increíble.",
    intro:
      "La mejor foto para tu retrato es una imagen nítida, con buena iluminación y donde se vea claramente la cara y la mirada. Entre mejor sea la foto, mejor quedará el retrato pintado a mano.",
    sections: [
      {
        q: "¿Qué hace que una foto sea buena para un retrato?",
        a: [
          "Una buena foto tiene buena luz (preferiblemente natural), está enfocada y muestra la cara de frente o en tres cuartos.",
          "Evita fotos borrosas, muy oscuras o tomadas muy de lejos: los detalles importan para capturar la esencia.",
        ],
      },
      {
        q: "¿Puedo enviar una foto desde el celular?",
        a: [
          "Sí, una foto de celular sirve perfectamente, siempre que sea nítida y con buena luz.",
          "Envíala en la mejor calidad posible, sin recortar demasiado, para que se vean todos los detalles.",
        ],
      },
      {
        q: "¿Qué hago si solo tengo una foto antigua o de baja calidad?",
        a: [
          "Aún así podemos trabajar: mándanos todas las opciones que tengas y elegimos juntos la mejor.",
          "En retratos memoriales muchas veces solo hay una foto, y la pintamos con todo el cariño para honrar ese recuerdo.",
        ],
      },
      {
        q: "¿Puedo combinar varias fotos en un solo retrato?",
        a: [
          "Sí. Si quieres juntar a varias mascotas o personas que no están en la misma foto, podemos combinarlas en una sola composición.",
          "Cuéntanos tu idea por WhatsApp y te asesoramos.",
        ],
      },
    ],
    relatedProducts: ["retratos-de-mascotas", "retratos-de-personas", "retratos-anime"],
    heroProduct: "retratos-de-personas",
  },
  {
    slug: "como-honrar-la-memoria-de-tu-mascota",
    title: "Cómo honrar la memoria de tu mascota",
    h1: "Cómo honrar la memoria de tu mascota",
    description:
      "Un retrato pintado a mano es una forma hermosa de honrar la memoria de una mascota que partió. Te contamos ideas para conservar su recuerdo con cariño y dignidad.",
    intro:
      "Una de las formas más bonitas de honrar a una mascota que partió es con un retrato pintado a mano desde su foto favorita. Es un homenaje que conserva su mirada y te acompaña cada día.",
    sections: [
      {
        q: "¿Cómo puedo conservar el recuerdo de mi mascota?",
        a: [
          "Puedes conservar su recuerdo con un retrato en lienzo, un cuadro en madera o un llavero que lleves siempre contigo.",
          "Cada pieza se pinta a mano desde su foto, capturando los detalles que la hacían única.",
        ],
      },
      {
        q: "¿Es buena idea regalar un homenaje a alguien que perdió su mascota?",
        a: [
          "Sí, hecho con sensibilidad es un gesto profundamente significativo.",
          "Un retrato o un detalle con la cara de su compañero le dice que ese amor no se olvida. Lo manejamos siempre con calidez y respeto.",
        ],
      },
      {
        q: "¿Qué producto es mejor para un homenaje?",
        a: [
          "Un retrato en lienzo es el homenaje más presente para la casa; un cuadro en madera con resina es más pequeño y duradero; un llavero permite llevarlo a todas partes.",
          "Te ayudamos a elegir según lo que sientas y tu presupuesto.",
        ],
      },
    ],
    relatedProducts: ["retratos-de-mascotas", "cuadros-en-madera", "llaveros-de-mascotas"],
    heroProduct: "retratos-de-mascotas",
  },
  {
    slug: "que-tamano-de-cuadro-elegir",
    title: "¿Qué tamaño de cuadro elegir?",
    h1: "¿Qué tamaño de cuadro elegir para tu retrato?",
    description:
      "Para un retrato individual, los tamaños 20×25 o 23×30 cm son ideales; para varias mascotas o más presencia, elige 30×41 o 40×60 cm. Te ayudamos a decidir.",
    intro:
      "Para un retrato de una sola mascota o persona, los tamaños 20×25 cm y 23×30 cm funcionan muy bien. Si quieres más presencia o incluir a varios, te conviene 30×41 cm o 40×60 cm.",
    sections: [
      {
        q: "¿Qué tamaño es mejor para una sola mascota?",
        a: [
          "Para una sola mascota, 20×25 cm o 23×30 cm son perfectos y los más populares.",
          "Se ven muy bien en un escritorio, una repisa o una pared pequeña.",
        ],
      },
      {
        q: "¿Qué tamaño elijo para varias mascotas o personas?",
        a: [
          "Para dos o más, recomendamos 30×41 cm o 40×60 cm para que cada uno tenga su espacio y detalle.",
          "Recuerda que cada mascota extra cuesta $70.000 y cada persona extra $80.000.",
        ],
      },
      {
        q: "¿Cómo sé qué tamaño se verá bien en mi pared?",
        a: [
          "Como guía, mide el espacio de tu pared y elige un cuadro que ocupe entre la mitad y dos tercios del ancho disponible.",
          "Si tienes dudas, mándanos una foto del espacio por WhatsApp y te recomendamos el tamaño ideal.",
        ],
      },
    ],
    relatedProducts: ["retratos-de-mascotas", "retratos-de-personas", "paisajes-en-lienzo"],
    heroProduct: "paisajes-en-lienzo",
  },
  {
    slug: "lienzo-vs-madera",
    title: "Lienzo vs. madera: ¿cuál elegir para tu mascota?",
    h1: "Lienzo vs. madera con resina: ¿cuál elegir?",
    description:
      "El lienzo es ideal para cuadros más grandes y clásicos; la madera con resina ofrece un acabado brillante, compacto y muy resistente. Comparamos ambas opciones.",
    intro:
      "Elige lienzo si quieres un cuadro más grande, clásico y con textura de pintura; elige madera con resina si prefieres una pieza más pequeña, brillante y muy resistente. Ambas se pintan a mano.",
    sections: [
      {
        q: "¿Cuál es la diferencia entre lienzo y madera con resina?",
        a: [
          "El lienzo es tela montada sobre bastidor, ideal para formatos medianos y grandes con acabado mate artístico. La madera lleva un acabado en resina que da brillo, profundidad y mucha resistencia.",
          "Las dos son pintadas 100% a mano desde tu foto.",
        ],
      },
      {
        q: "¿Cuál es más económica?",
        a: [
          "El cuadro de mascota en madera empieza desde $100.000, mientras que el retrato en lienzo empieza desde $170.000.",
          "La madera es una excelente opción si buscas algo más compacto y con un presupuesto menor.",
        ],
      },
      {
        q: "¿Cuál dura más?",
        a: [
          "Ambas duran muchos años con un cuidado básico. La resina de la madera añade una capa protectora extra contra el polvo y la humedad.",
          "Para limpiarlas, basta un paño suave y seco.",
        ],
      },
    ],
    relatedProducts: ["retratos-de-mascotas", "cuadros-en-madera"],
    heroProduct: "cuadros-en-madera",
  },
];

export const articleMap: Record<string, Article> = Object.fromEntries(
  articles.map((a) => [a.slug, a]),
);
