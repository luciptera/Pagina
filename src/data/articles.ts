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
  /** optional extra internal links (e.g. to the Feria hub / design pages) */
  extraLinks?: { href: string; label: string }[];
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

  // ---- Feria de las Flores AEO cluster ----
  {
    slug: "cuando-es-la-feria-de-las-flores",
    title: "¿Cuándo es la Feria de las Flores 2026 en Medellín?",
    h1: "¿Cuándo es la Feria de las Flores 2026?",
    description:
      "La Feria de las Flores de Medellín 2026 se celebra del 31 de julio al 9 de agosto. Te contamos las fechas, el Desfile de Silleteros y cómo prepararte.",
    intro:
      "La Feria de las Flores de Medellín 2026 se celebra del 31 de julio al 9 de agosto de 2026, durante diez días. Su acto central y más emblemático es el Desfile de Silleteros.",
    sections: [
      {
        q: "¿Qué días es la Feria de las Flores 2026?",
        a: [
          "La feria va del 31 de julio al 9 de agosto de 2026, son 10 días de programación.",
          "Cada año la fecha varía un poco, pero siempre se realiza a comienzos de agosto en Medellín.",
        ],
      },
      {
        q: "¿Cuál es el evento principal de la feria?",
        a: [
          "El evento central es el Desfile de Silleteros, que normalmente se realiza el último día de la feria.",
          "Los silleteros de Santa Elena cargan enormes arreglos florales (silletas) por las calles de Medellín; es Patrimonio Cultural de la Nación.",
        ],
      },
      {
        q: "¿Cómo me preparo para la Feria de las Flores?",
        a: [
          "Lleva ropa fresca, calzado cómodo, protección solar y un sombrero: el clima de Medellín y el sol del desfile lo piden.",
          "Un sombrero brisa pintado a mano con flores es el accesorio perfecto para lucir en la feria. Pídelo con tiempo porque se pinta sobre pedido.",
        ],
      },
    ],
    relatedProducts: ["sombreros-brisa"],
    heroProduct: "sombreros-brisa",
    extraLinks: [
      { href: "/sombreros-para-la-feria-de-las-flores/", label: "Sombreros pintados para la feria" },
      { href: "/blog/que-llevar-a-la-feria-de-las-flores/", label: "Qué llevar a la feria" },
    ],
  },
  {
    slug: "que-llevar-a-la-feria-de-las-flores",
    title: "Qué llevar (y qué ponerse) a la Feria de las Flores",
    h1: "Qué llevar a la Feria de las Flores",
    description:
      "Para la Feria de las Flores lleva ropa fresca, calzado cómodo, protección solar y un sombrero brisa. Guía práctica de qué ponerse para disfrutar la feria de Medellín.",
    intro:
      "Para la Feria de las Flores lo ideal es ropa fresca, calzado cómodo, protección solar y un sombrero. El sombrero brisa blanco —mejor aún si va pintado a mano con flores— es el accesorio más representativo.",
    sections: [
      {
        q: "¿Qué ropa me pongo para la feria?",
        a: [
          "Ropa fresca y cómoda, en capas ligeras, porque el clima de Medellín cambia entre el sol y la tarde.",
          "Calzado cómodo es clave: vas a caminar y a estar de pie en desfiles y eventos.",
        ],
      },
      {
        q: "¿Por qué usar sombrero en la Feria de las Flores?",
        a: [
          "El sombrero te protege del sol durante los desfiles al aire libre y, además, es parte del atuendo tradicional paisa.",
          "Un sombrero brisa pintado a mano con flores te hace lucir único y muy en el espíritu de la feria.",
        ],
      },
      {
        q: "¿Qué sombrero es el típico de la feria?",
        a: [
          "El típico es el sombrero brisa: blanco, de fibra fina, usado tradicionalmente en Antioquia.",
          "Nosotros lo pintamos a mano con orquídeas, girasoles, hortensias o una silleta para que sea una pieza única.",
        ],
      },
    ],
    relatedProducts: ["sombreros-brisa"],
    heroProduct: "sombreros-brisa",
    extraLinks: [
      { href: "/sombreros-para-la-feria-de-las-flores/", label: "Ver diseños de sombreros" },
      { href: "/sombrero-silleta-tradicional/", label: "Sombrero La Silleta Tradicional" },
    ],
  },
  {
    slug: "flores-tipicas-de-la-feria-de-las-flores",
    title: "Flores típicas de la Feria de las Flores de Medellín",
    h1: "Las flores típicas de la Feria de las Flores",
    description:
      "Orquídea cattleya, hortensias, girasoles, claveles, crisantemos y pompones son las flores típicas de la Feria de las Flores. Te contamos cuáles son y qué representan.",
    intro:
      "Las flores más típicas de la Feria de las Flores son la orquídea cattleya (flor nacional), las hortensias de Santa Elena, los girasoles, los claveles, los crisantemos y los pompones. Son las que llenan las silletas y, en Luciptera, las que pintamos en los sombreros.",
    sections: [
      {
        q: "¿Cuál es la flor nacional de Colombia?",
        a: [
          "La flor nacional de Colombia es la orquídea Cattleya trianae, conocida como la 'Flor de Mayo'.",
          "Por su elegancia y color morado es una de las favoritas para decorar y, en nuestro caso, para el diseño 'La Reina de la Feria'.",
        ],
      },
      {
        q: "¿Qué flores se usan en las silletas?",
        a: [
          "Las silletas se arman con claveles, crisantemos, gerberas, girasoles, hortensias y pompones, entre muchas otras.",
          "Estas mismas flores inspiran nuestros diseños de sombreros pintados a mano.",
        ],
      },
      {
        q: "¿De dónde vienen las flores de la feria?",
        a: [
          "Muchas provienen del corregimiento de Santa Elena, cuna de los silleteros, donde las fincas cultivan flores desde hace generaciones.",
          "Las hortensias azules y rosadas de Santa Elena son especialmente emblemáticas.",
        ],
      },
    ],
    relatedProducts: ["sombreros-brisa"],
    heroProduct: "sombreros-brisa",
    extraLinks: [
      { href: "/sombrero-orquidea-cattleya/", label: "Sombrero La Reina de la Feria (orquídea)" },
      { href: "/sombrero-crisantemo/", label: "Sombrero Crisantemo" },
      { href: "/sombrero-girasoles/", label: "Sombrero Girasol" },
    ],
  },
  {
    slug: "que-es-una-silleta",
    title: "¿Qué es una silleta y qué significa en la feria?",
    h1: "¿Qué es una silleta?",
    description:
      "Una silleta es la estructura de madera donde los silleteros de Santa Elena cargan arreglos florales en el desfile de la Feria de las Flores. Te contamos su historia y significado.",
    intro:
      "Una silleta es una estructura de madera que los silleteros cargan sobre la espalda para transportar grandes arreglos de flores. En la Feria de las Flores, el Desfile de Silleteros es el momento más esperado y representa la tradición campesina de Santa Elena.",
    sections: [
      {
        q: "¿Por qué se llama silleta?",
        a: [
          "Se llama silleta porque originalmente era una silla de madera usada para cargar personas y mercancías por las montañas de Santa Elena.",
          "Con el tiempo se usó para llevar flores al mercado, y de ahí nació la tradición de adornarlas para el desfile.",
        ],
      },
      {
        q: "¿Qué tipos de silletas existen?",
        a: [
          "Hay varios tipos: la tradicional, la monumental, la artística, la comercial y la emblemática, según su tamaño y diseño.",
          "Nuestro diseño 'La Silleta Tradicional' se inspira en estas obras florales, en versión pintada a mano sobre el sombrero.",
        ],
      },
    ],
    relatedProducts: ["sombreros-brisa"],
    heroProduct: "sombreros-brisa",
    extraLinks: [
      { href: "/sombrero-silleta-tradicional/", label: "Sombrero La Silleta Tradicional" },
      { href: "/sombreros-para-la-feria-de-las-flores/", label: "Sombreros para la feria" },
    ],
  },
];

export const articleMap: Record<string, Article> = Object.fromEntries(
  articles.map((a) => [a.slug, a]),
);
