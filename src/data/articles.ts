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
    title: "¿Cuánto cuesta un retrato de mascota?",
    h1: "¿Cuánto cuesta un retrato de mascota en Colombia?",
    description:
      "Un retrato de mascota en lienzo cuesta desde $170.000 y hasta $700.000 según el tamaño. Te explicamos los precios, qué incluye y de qué depende el valor final.",
    intro:
      "En Luciptera, un retrato de mascota en lienzo cuesta desde $170.000 (20×25 cm) y llega hasta $700.000 (50×70 cm). El precio depende del tamaño y de cuántas mascotas quieras incluir. Los valores no incluyen el envío.",
    sections: [
      {
        q: "¿Cuál es el precio de un retrato de mascota según el tamaño?",
        a: [
          "Los precios por tamaño son: 20×25 cm $170.000, 23×30 cm $250.000, 30×30 cm $300.000, 30×41 cm $380.000, 40×60 cm $550.000 y 50×70 cm $700.000.",
          "Todos se pintan 100% a mano sobre lienzo. Entre más grande el formato, más detalle y presencia tendrá tu cuadro.",
        ],
      },
      {
        q: "¿Cuánto cuesta agregar otra mascota al cuadro?",
        a: [
          "Cada mascota adicional en el mismo lienzo cuesta $90.000.",
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
          "Recuerda que cada mascota extra cuesta $90.000 y cada persona extra $100.000.",
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
    title: "¿Cuándo es la Feria de las Flores 2027?",
    h1: "¿Cuándo es la Feria de las Flores 2027?",
    description:
      "La Feria de las Flores de Medellín se celebra cada año entre finales de julio y la segunda semana de agosto. Te contamos lo que se sabe de 2027, el Desfile de Silleteros y cómo prepararte.",
    intro:
      "La Feria de las Flores de Medellín se celebra cada año entre finales de julio y la segunda semana de agosto, durante unos diez días. Las fechas oficiales de 2027 aún no han sido anunciadas por la Alcaldía de Medellín. Su acto central y más emblemático es el Desfile de Silleteros.",
    sections: [
      {
        q: "¿Qué días es la Feria de las Flores 2027?",
        a: [
          "Las fechas oficiales de 2027 todavía no se han publicado. Como referencia, en 2026 la feria fue del 31 de julio al 9 de agosto.",
          "Cada año la fecha varía un poco, pero siempre se realiza entre finales de julio y comienzos de agosto en Medellín. Cuando se anuncien las fechas oficiales, las actualizamos aquí.",
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
          "Un sombrero brisa pintado a mano con flores es el accesorio perfecto para lucir en la feria. Tenemos algunos ya pintados listos para entrega inmediata, y también los pintamos a tu gusto sobre pedido.",
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
    title: "Qué llevar a la Feria de las Flores",
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
    title: "Flores típicas de la Feria de las Flores",
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
      { href: "/sombrero-hibisco/", label: "Sombrero Hibisco" },
      { href: "/sombrero-tulipanes/", label: "Sombrero Tulipanes" },
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
  {
    slug: "como-cuidar-la-ropa-pintada-a-mano",
    title: "Cómo cuidar tu ropa pintada a mano",
    h1: "Cómo cuidar tu ropa y chaqueta pintada a mano",
    description:
      "Para que tu chaqueta o prenda pintada a mano dure años: lávala a mano con agua fría, no la restriegues sobre el diseño y sécala a la sombra. Te damos todos los consejos.",
    intro:
      "Para cuidar una prenda pintada a mano, lávala a mano con agua fría y jabón suave, sin restregar sobre el diseño, y déjala secar a la sombra. Con ese cuidado, la pintura dura años sin agrietarse.",
    sections: [
      {
        q: "¿Cómo se lava una chaqueta pintada a mano?",
        a: [
          "Lávala a mano con agua fría y un jabón suave, frotando con cuidado solo las zonas sin pintura.",
          "Evita la lavadora, el blanqueador y el agua caliente: pueden afectar los colores y el detalle del diseño.",
        ],
      },
      {
        q: "¿La pintura se cuartea o se despega?",
        a: [
          "No, si se cuida bien. Usamos pintura especial para tela que queda flexible y resistente al uso.",
          "Para que dure aún más, evita doblar o restregar fuerte sobre el diseño y no la planches directamente encima.",
        ],
      },
      {
        q: "¿Cómo la seco y la guardo?",
        a: [
          "Sécala a la sombra, extendida o colgada; nunca al sol directo por mucho tiempo para que los colores no se desgasten.",
          "Guárdala sin doblar sobre el diseño cuando sea posible.",
        ],
      },
    ],
    relatedProducts: ["chaquetas-pintadas-a-mano", "sombreros-brisa"],
    heroProduct: "chaquetas-pintadas-a-mano",
    extraLinks: [
      { href: "/chaquetas-pintadas-a-mano/", label: "Chaquetas de jean pintadas a mano" },
      { href: "/chaqueta-pintada-con-mi-mascota/", label: "Chaqueta pintada con tu mascota" },
    ],
  },
  // ---- Temporada Riviera Maya (nov 2026 – feb 2027, Lucía pinta en Tulum) ----
  {
    slug: "que-regalar-en-navidad-en-tulum",
    title: "Qué regalar en Navidad en Tulum",
    h1: "Qué regalar en Navidad en Tulum y la Riviera Maya",
    description:
      "Ideas de regalos de Navidad en Tulum, Playa del Carmen y Cancún que no son de tienda: retratos de mascotas, de familia y de pareja pintados a mano esta temporada.",
    intro:
      "El mejor regalo de Navidad en Tulum es uno que no se compra en una tienda: un retrato pintado a mano de las personas o las mascotas que más quieres. Esta temporada, del 24 de noviembre al 24 de febrero, una artista colombiana está pintando en persona en Tulum.",
    sections: [
      {
        q: "¿Qué regalo original puedo dar en Navidad en Tulum?",
        a: [
          "Un retrato pintado a mano desde una foto: de la familia reunida, de tu pareja o de la mascota de la casa. Es único, se hace pensando en esa persona y dura toda la vida.",
          "Si vives en Tulum o en Playa del Carmen, la entrega es en persona, sin envíos internacionales.",
        ],
      },
      {
        q: "¿Con cuánta anticipación tengo que encargarlo para Navidad?",
        a: [
          "Los retratos en lienzo toman mínimo 15 días, así que para recibirlo antes del 24 de diciembre encárgalo durante la primera semana de diciembre, o antes.",
          "Si se te pasó la fecha, el Día de Reyes (6 de enero) es otra excelente ocasión para regalarlo.",
        ],
      },
      {
        q: "¿Qué le regalo a alguien que ama a su perro o su gato?",
        a: [
          "Un retrato de su mascota en lienzo. En Tulum muchísimas personas viven con perros y gatos rescatados que son parte de la familia, y verlos pintados a mano emociona de verdad.",
        ],
      },
    ],
    relatedProducts: ["retratos-de-mascotas", "retratos-de-personas", "paisajes-en-lienzo"],
    heroProduct: "retratos-de-personas",
    extraLinks: [
      { href: "/arte-personalizado-tulum/", label: "Retratos pintados a mano en Tulum" },
      { href: "/arte-personalizado-playa-del-carmen/", label: "Retratos en Playa del Carmen" },
    ],
  },
  {
    slug: "souvenirs-originales-de-tulum",
    title: "Qué comprar en Tulum: souvenirs",
    h1: "Qué comprar en Tulum: souvenirs originales y hechos a mano",
    description:
      "¿Buscas un recuerdo de Tulum que no sea igual a todos? Un retrato pintado a mano de tu viaje, tu pareja o tu mascota. Cómo funciona, tiempos y cómo llevarlo en la maleta.",
    intro:
      "El recuerdo más especial de Tulum no está en una tienda: es una pintura de tu propio viaje. Un retrato pintado a mano desde una foto que tomaste aquí, hecho por una artista que está en Tulum esta temporada.",
    sections: [
      {
        q: "¿Por qué un cuadro personalizado es mejor que un souvenir de tienda?",
        a: [
          "Lo más buscado: hamacas tejidas (la península de Yucatán es famosa por ellas), bordados mayas, vainilla mexicana, mezcal, chocolate y copal. Pregunta siempre quién lo hizo: mucho de lo que se vende en la avenida principal es de fábrica.",
          "La mayoría de souvenirs se fabrican en serie. Un retrato pintado desde tu foto —el cenote, la playa, tú y tu pareja— es único y guarda el recuerdo, no solo el nombre del lugar.",
        ],
      },
      {
        q: "¿Cuánto tiempo toma?",
        a: [
          "Los retratos en lienzo toman mínimo 15 días. Si tu viaje es más corto, escríbenos antes de llegar o al inicio de tu estadía para organizarlo con tus fechas.",
        ],
      },
      {
        q: "¿Cabe en la maleta?",
        a: [
          "Los tamaños pequeños (como 20 × 25 cm) viajan bien en la maleta bien envueltos. Para tamaños más grandes, pregúntanos las opciones antes de encargar.",
        ],
      },
    ],
    relatedProducts: ["retratos-de-personas", "paisajes-en-lienzo", "retratos-de-mascotas"],
    heroProduct: "paisajes-en-lienzo",
    extraLinks: [
      { href: "/arte-personalizado-tulum/", label: "Arte pintado a mano en Tulum" },
      { href: "/arte-personalizado-cancun/", label: "Retratos en Cancún" },
      { href: "/arte-personalizado-riviera-maya/", label: "Temporada Riviera Maya" },
    ],
  },
  {
    slug: "regalo-de-boda-en-tulum",
    title: "Regalo de boda en Tulum: ideas",
    h1: "Regalo de boda en Tulum: un retrato pintado a mano",
    description:
      "¿Vas a una boda en Tulum? Un retrato de los novios pintado a mano es un regalo que de verdad guardan. Ideas, tiempos y cómo encargarlo en la Riviera Maya.",
    intro:
      "Tulum es uno de los destinos de boda favoritos del mundo, y el mejor regalo para los novios es uno que colgarán en su casa por décadas: un retrato de los dos, pintado a mano.",
    sections: [
      {
        q: "¿Por qué un retrato es un buen regalo de boda?",
        a: [
          "Los novios reciben muchas cosas que nunca usan. Un retrato pintado a mano desde su foto de compromiso, o de un momento del fin de semana de la boda, es personal, bonito e irrepetible.",
        ],
      },
      {
        q: "¿Lo encargo antes o después de la boda?",
        a: [
          "Funciona igual para una boda en cenote, en la playa o una boda maya: pintamos el momento que ellos elijan.",
          "Si tienes su foto de compromiso, encárgalo con tiempo para entregarlo en la boda. O pinta un momento de la boda misma y sorpréndelos después: toma mínimo 15 días.",
        ],
      },
      {
        q: "¿Qué regalo para las damas de honor o los padrinos?",
        a: [
          "Detalles pintados a mano más pequeños son un agradecimiento que recuerdan.",
        ],
      },
    ],
    relatedProducts: ["retratos-de-personas", "paisajes-en-lienzo"],
    heroProduct: "retratos-de-personas",
    extraLinks: [
      { href: "/arte-personalizado-tulum/", label: "Retratos pintados a mano en Tulum" },
    ],
  },
  {
    slug: "regalo-de-navidad-original-para-mi-pareja",
    title: "Regalo de Navidad original para tu pareja",
    h1: "Regalo de Navidad original para tu pareja: un retrato pintado a mano",
    description:
      "¿Buscas un regalo de Navidad original para tu novio, novia o esposo? Un retrato de pareja pintado a mano desde su foto favorita. Tiempos, tamaños y cómo pedirlo.",
    intro:
      "El regalo de Navidad más original para tu pareja es uno que nadie más puede darle: un retrato de ustedes dos, pintado a mano desde su foto favorita.",
    sections: [
      {
        q: "¿Por qué un retrato es mejor que un regalo de tienda?",
        a: ["Es único, se hace pensando en ustedes y dura toda la vida. No hay otro igual."],
      },
      {
        q: "¿Con cuánto tiempo lo pido para Navidad?",
        a: ["Los retratos en lienzo toman mínimo 15 días: pídelo a más tardar la primera semana de diciembre."],
      },
      {
        q: "¿Qué foto sirve?",
        a: ["Una foto nítida donde se vean bien sus caras: un viaje, su boda, el día que se conocieron."],
      },
    ],
    relatedProducts: ["retratos-de-personas", "retratos-anime", "retratos-de-mascotas"],
    heroProduct: "retratos-de-personas",
    extraLinks: [
      { href: "/cuadro-de-pareja/", label: "Cuadro de pareja pintado a mano" },
      { href: "/arte-personalizado-tulum/", label: "¿Estás en Tulum? Lo pintamos allá" },
    ],
  },
  {
    slug: "despedida-de-soltera-en-tulum",
    title: "Despedida de soltera en Tulum: regalos",
    h1: "Despedida de soltera en Tulum: chaquetas pintadas a mano para la novia",
    description:
      "Ideas para una despedida de soltera en Tulum: chaquetas de jean pintadas a mano con el nombre de la novia, la fecha y diseños tropicales, también para todo el grupo.",
    intro:
      "El detalle que sale en todas las fotos de una despedida en Tulum: una chaqueta de jean pintada a mano para la novia, con su nombre y la fecha, y otras a juego para las amigas.",
    sections: [
      {
        q: "¿Qué diseño le pinto?",
        a: ["\"Novia\" o su nombre en la espalda, la fecha, hojas de palma, flores tropicales o una luna. Para el grupo, el nombre de cada una o el mismo diseño en otros colores."],
      },
      {
        q: "¿Con cuánta anticipación lo encargo?",
        a: ["La ropa pintada toma mínimo 10 días. Puedes mandarnos tus propias chaquetas o jeans."],
      },
    ],
    relatedProducts: ["chaquetas-pintadas-a-mano", "jeans-pintados-a-mano"],
    heroProduct: "chaquetas-pintadas-a-mano",
    extraLinks: [
      { href: "/arte-personalizado-tulum/", label: "Arte pintado a mano en Tulum" },
      { href: "/chaquetas-pintadas-a-mano/", label: "Chaquetas pintadas a mano" },
    ],
  },
];

export const articleMap: Record<string, Article> = Object.fromEntries(
  articles.map((a) => [a.slug, a]),
);
