/* ===========================================================================
   Intent / use-case pages — written FOR the person, by emotion.
=========================================================================== */

export interface Intent {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  /** emotional, query-matched lead paragraph (answer-first where relevant) */
  lead: string;
  /** real search phrasings this page targets */
  intentKeywords: string[];
  relatedProducts: string[];
  /** tone guidance reflected in copy */
  emotionalAngle: string;
  waContext: string;
}

export const intents: Intent[] = [
  {
    slug: "retrato-memorial-de-mascota",
    title: "Retrato memorial de mascota — homenaje pintado a mano",
    h1: "Un retrato para honrar la memoria de tu mascota",
    metaDescription:
      "Homenaje pintado a mano para esa mascota que partió. Convertimos tu foto favorita en un retrato en lienzo, madera o un llavero para llevarlo siempre contigo.",
    lead:
      "Perder a un compañero de vida duele, y conservar su recuerdo ayuda a sanar. En Luciptera pintamos a mano, desde tu foto favorita, un retrato que honra a tu mascota con todo el cariño y el detalle que merece.",
    intentKeywords: [
      "retrato de mascota fallecida",
      "recuerdo de mi mascota que murió",
      "homenaje a mi perro",
      "cuadro en memoria de mi gato",
      "cómo conservar el recuerdo de mi mascota",
    ],
    relatedProducts: ["retratos-de-mascotas", "cuadros-en-madera", "llaveros-de-mascotas"],
    emotionalAngle: "Cálido, digno, nunca insistente. Acompañar, no vender.",
    waContext: "un retrato en memoria de mi mascota",
  },
  {
    slug: "regalo-para-amantes-de-los-perros",
    title: "Regalo para amantes de los perros — personalizado y único",
    h1: "El regalo perfecto para quien ama a su perro",
    metaDescription:
      "¿Buscas un regalo único para alguien que ama a su perro? Retratos, cuadros en madera, llaveros y placas pintados a mano con la foto de su mascota. Envíos a toda Colombia.",
    lead:
      "Si conoces a alguien que adora a su perro, un detalle con la cara de su peludo es un regalo que emociona de verdad. Pintamos a mano retratos, cuadros, llaveros y placas desde la foto de su mascota.",
    intentKeywords: [
      "regalo para amante de los perros",
      "qué regalar a alguien que ama a su mascota",
      "regalo personalizado de mascota",
    ],
    relatedProducts: ["retratos-de-mascotas", "llaveros-de-mascotas", "cuadros-en-madera"],
    emotionalAngle: "Alegre, emocional, celebra el vínculo.",
    waContext: "un regalo para alguien que ama a su perro",
  },
  {
    slug: "regalo-para-amantes-de-los-gatos",
    title: "Regalo para amantes de los gatos — personalizado y único",
    h1: "El regalo ideal para quien ama a su gato",
    metaDescription:
      "Regalos únicos para amantes de los gatos: retratos en lienzo, cuadros en madera, llaveros y placas pintados a mano con la foto de su michi. Envíos a toda Colombia.",
    lead:
      "Para esa persona que vive enamorada de su gato, un detalle con la carita de su michi es un regalo inolvidable. Lo pintamos a mano desde la foto que más te guste.",
    intentKeywords: [
      "regalo para amante de los gatos",
      "regalo para alguien que ama a su gato",
      "retrato de mi michi",
    ],
    relatedProducts: ["retratos-de-mascotas", "llaveros-de-mascotas", "cuadros-en-madera"],
    emotionalAngle: "Alegre, tierno, celebra el vínculo felino.",
    waContext: "un regalo para alguien que ama a su gato",
  },
  {
    slug: "cuadro-de-pareja",
    title: "Cuadro de pareja personalizado — retrato pintado a mano",
    h1: "Un cuadro de pareja pintado a mano",
    metaDescription:
      "Retrato de pareja pintado a mano desde tu foto, sobre lienzo. Un regalo romántico y único para aniversario, San Valentín o solo porque sí. Envíos a toda Colombia.",
    lead:
      "Un retrato de pareja pintado a mano es un regalo que dice más que mil palabras. Tomamos su foto favorita y la convertimos en una obra para colgar y recordar siempre.",
    intentKeywords: [
      "cuadro de pareja",
      "retrato de pareja con foto",
      "regalo romántico personalizado",
    ],
    relatedProducts: ["retratos-de-personas", "retratos-anime", "cases-personalizados"],
    emotionalAngle: "Romántico, cálido.",
    waContext: "un cuadro de pareja",
  },
  {
    slug: "regalo-de-aniversario-personalizado",
    title: "Regalo de aniversario personalizado y pintado a mano",
    h1: "Regalo de aniversario personalizado",
    metaDescription:
      "Sorprende en tu aniversario con un retrato pintado a mano desde su foto: pareja, familia o mascota. Un regalo único hecho con tiempo y cariño. Envíos a toda Colombia.",
    lead:
      "Un aniversario merece algo que no se compre en cualquier parte. Un retrato pintado a mano —de ustedes, de la familia o de su mascota— es un regalo con alma que se atesora por años.",
    intentKeywords: [
      "regalo de aniversario personalizado",
      "regalo de aniversario original",
      "qué regalar en un aniversario",
    ],
    relatedProducts: ["retratos-de-personas", "retratos-de-mascotas", "paisajes-en-lienzo"],
    emotionalAngle: "Romántico, especial.",
    waContext: "un regalo de aniversario personalizado",
  },
  {
    slug: "decoracion-personalizada-para-el-hogar",
    title: "Cuadros personalizados para decorar tu hogar",
    h1: "Arte personalizado para decorar tu hogar",
    metaDescription:
      "Cuadros personalizados pintados a mano para la sala, el cuarto o cualquier espacio: retratos, paisajes y mascotas sobre lienzo. Decoración única. Envíos a toda Colombia.",
    lead:
      "Las paredes cuentan historias. Un cuadro pintado a mano —un paisaje, tu familia o tu mascota— le da calidez y personalidad a tu hogar como ninguna lámina impresa.",
    intentKeywords: [
      "cuadros personalizados para la sala",
      "arte para decorar la casa",
      "cuadro decorativo personalizado",
    ],
    relatedProducts: ["paisajes-en-lienzo", "retratos-de-personas", "retratos-de-mascotas"],
    emotionalAngle: "Cálido, aspiracional, hogareño.",
    waContext: "un cuadro personalizado para decorar mi hogar",
  },

  // ---- Recipient-based gift pages (people search by WHO they're buying for) ----
  {
    slug: "regalo-para-mama",
    title: "Regalo para mamá personalizado y pintado a mano",
    h1: "Regalos para mamá, personalizados y pintados a mano",
    metaDescription:
      "Sorprende a mamá con un regalo único: retrato de la familia, de ella o de su mascota, pintado a mano. Detalles que emocionan. Domicilio en Medellín y envíos a toda Colombia.",
    lead:
      "A mamá no se le regala cualquier cosa. Un retrato pintado a mano —de la familia, de ella o de su mascota consentida— es un detalle lleno de amor que va a atesorar para siempre.",
    intentKeywords: ["regalo para mamá personalizado", "regalo para mamá pintado a mano", "qué regalar a mi mamá"],
    relatedProducts: ["retratos-de-personas", "retratos-de-mascotas", "paisajes-en-lienzo"],
    emotionalAngle: "Cálido, agradecido, emotivo.",
    waContext: "un regalo para mi mamá",
  },
  {
    slug: "regalo-para-papa",
    title: "Regalo para papá personalizado y pintado a mano",
    h1: "Regalos para papá, personalizados y pintados a mano",
    metaDescription:
      "Un regalo diferente para papá: retrato de la familia, un paisaje o su mascota, pintado a mano. Único y con significado. Envíos a toda Colombia.",
    lead:
      "Para ese papá que ya lo tiene todo, regálale algo con alma: un retrato de la familia, su lugar favorito o su mascota, pintado a mano. Un detalle que dice más que cualquier objeto comprado.",
    intentKeywords: ["regalo para papá personalizado", "qué regalar a mi papá", "regalo para papá original"],
    relatedProducts: ["retratos-de-personas", "paisajes-en-lienzo", "retratos-de-mascotas"],
    emotionalAngle: "Sincero, cálido.",
    waContext: "un regalo para mi papá",
  },
  {
    slug: "regalo-para-mi-novia",
    title: "Regalo para mi novia personalizado",
    h1: "Regalos para tu novia, personalizados y pintados a mano",
    metaDescription:
      "Enamórala con un regalo único: retrato de los dos, un case o un llavero pintado a mano. Detalles románticos y personales. Envíos a toda Colombia.",
    lead:
      "Si quieres sorprender a tu novia, déjate de lo genérico. Un retrato de los dos, un case o un detalle pintado a mano demuestra que lo pensaste con tiempo y con el corazón.",
    intentKeywords: ["regalo para mi novia", "regalo personalizado para mi novia", "regalo romántico para ella"],
    relatedProducts: ["retratos-de-personas", "cases-personalizados", "retratos-anime"],
    emotionalAngle: "Romántico, detallista.",
    waContext: "un regalo para mi novia",
  },
  {
    slug: "regalo-para-mi-novio",
    title: "Regalo para mi novio personalizado",
    h1: "Regalos para tu novio, personalizados y pintados a mano",
    metaDescription:
      "Sorprende a tu novio con un detalle único: retrato de los dos, su estilo anime favorito o un case pintado a mano. Original y personal. Envíos a toda Colombia.",
    lead:
      "Acertar con el regalo de tu novio es fácil cuando es algo hecho para él: un retrato de los dos, su personaje de anime favorito o un case con su mascota, todo pintado a mano.",
    intentKeywords: ["regalo para mi novio", "regalo personalizado para mi novio", "regalo original para él"],
    relatedProducts: ["retratos-de-personas", "retratos-anime", "cases-personalizados"],
    emotionalAngle: "Romántico, divertido.",
    waContext: "un regalo para mi novio",
  },
  {
    slug: "regalo-para-mi-mejor-amiga",
    title: "Regalo para mi mejor amiga personalizado",
    h1: "Regalos para tu mejor amiga, pintados a mano",
    metaDescription:
      "Un detalle único para tu mejor amiga: un llavero o case de su mascota, un retrato o su flor favorita pintada a mano. Personal y especial. Envíos a toda Colombia.",
    lead:
      "Tu mejor amiga merece un regalo tan especial como ella. Un llavero o un case con su michi, un retrato o un sombrero pintado a mano: detalles que solo tú sabrías elegir.",
    intentKeywords: ["regalo para mi mejor amiga", "regalo personalizado para una amiga", "regalo original para mi amiga"],
    relatedProducts: ["llaveros-de-mascotas", "cases-personalizados", "retratos-de-mascotas"],
    emotionalAngle: "Cercano, alegre.",
    waContext: "un regalo para mi mejor amiga",
  },
  {
    slug: "regalo-para-mi-abuela",
    title: "Regalo para la abuela personalizado",
    h1: "Regalos para la abuela, pintados a mano",
    metaDescription:
      "Un regalo que emociona a la abuela: un retrato de la familia o de su mascota, pintado a mano. Un recuerdo para toda la vida. Domicilio en Medellín y envíos a toda Colombia.",
    lead:
      "Pocas cosas emocionan tanto a una abuela como ver a su familia retratada. Un cuadro pintado a mano de los nietos, la familia o su mascota es un regalo que conserva con todo el cariño.",
    intentKeywords: ["regalo para la abuela", "regalo para mi abuela personalizado", "qué regalar a mi abuela"],
    relatedProducts: ["retratos-de-personas", "retratos-de-mascotas", "cuadros-en-madera"],
    emotionalAngle: "Tierno, familiar.",
    waContext: "un regalo para mi abuela",
  },
  {
    slug: "regalo-para-mi-esposa",
    title: "Regalo para mi esposa personalizado",
    h1: "Regalos para tu esposa, pintados a mano",
    metaDescription:
      "Demuéstrale tu amor con un regalo único: retrato de los dos, de la familia o de su mascota, pintado a mano. Detalles con significado. Envíos a toda Colombia.",
    lead:
      "Después de tantos momentos juntos, regálale algo que los recuerde: un retrato de los dos, de la familia o de su mascota, pintado a mano con dedicación.",
    intentKeywords: ["regalo para mi esposa", "regalo personalizado para mi esposa", "regalo de aniversario para ella"],
    relatedProducts: ["retratos-de-personas", "retratos-de-mascotas", "cases-personalizados"],
    emotionalAngle: "Romántico, agradecido.",
    waContext: "un regalo para mi esposa",
  },
  {
    slug: "regalo-para-mi-esposo",
    title: "Regalo para mi esposo personalizado",
    h1: "Regalos para tu esposo, pintados a mano",
    metaDescription:
      "Un regalo con significado para tu esposo: retrato de los dos, de la familia o su mascota, pintado a mano. Original y personal. Envíos a toda Colombia.",
    lead:
      "Sorprende a tu esposo con un detalle hecho a mano y pensado para él: un retrato de los dos, de la familia o de su mascota, que recuerde todo lo que han construido juntos.",
    intentKeywords: ["regalo para mi esposo", "regalo personalizado para mi esposo", "regalo de aniversario para él"],
    relatedProducts: ["retratos-de-personas", "paisajes-en-lienzo", "cases-personalizados"],
    emotionalAngle: "Sincero, romántico.",
    waContext: "un regalo para mi esposo",
  },

  // ---- Local commercial money pages ----
  {
    slug: "regalos-personalizados-medellin",
    title: "Regalos personalizados en Medellín, pintados a mano",
    h1: "Regalos personalizados en Medellín",
    metaDescription:
      "Regalos personalizados y pintados a mano en Medellín: retratos de mascotas y personas, llaveros, placas, cuadros y sombreros. Entrega a domicilio. Pídelo por WhatsApp.",
    lead:
      "¿Buscas un regalo personalizado en Medellín? En Luciptera pintamos a mano retratos, llaveros, placas, cuadros y sombreros desde tu foto o tu idea, con entrega a domicilio en la ciudad y su área metropolitana.",
    intentKeywords: ["regalos personalizados Medellín", "detalles personalizados Medellín", "regalos pintados a mano Medellín"],
    relatedProducts: ["retratos-de-mascotas", "sombreros-brisa", "llaveros-de-mascotas", "placas-con-nombre", "retratos-de-personas"],
    emotionalAngle: "Local, cercano, confiable.",
    waContext: "un regalo personalizado en Medellín",
  },
  {
    slug: "regalos-personalizados-colombia",
    title: "Regalos personalizados originales en Colombia",
    h1: "Regalos personalizados originales, con envíos a toda Colombia",
    metaDescription:
      "Regalos personalizados y originales pintados a mano: retratos de mascotas y personas, llaveros, placas, cuadros y sombreros. Envíos a toda Colombia. Pídelo por WhatsApp.",
    lead:
      "Un regalo personalizado siempre se siente más especial. Pintamos a mano retratos, llaveros, placas, cuadros y sombreros desde tu foto o tu idea, y los enviamos a cualquier ciudad de Colombia.",
    intentKeywords: ["regalos personalizados Colombia", "regalos personalizados originales", "detalles personalizados con foto"],
    relatedProducts: ["retratos-de-mascotas", "retratos-de-personas", "llaveros-de-mascotas", "cuadros-en-madera", "sombreros-brisa"],
    emotionalAngle: "Original, confiable, nacional.",
    waContext: "un regalo personalizado con envío",
  },

  // ---- More recipient pages ----
  {
    slug: "regalo-para-mi-hermana",
    title: "Regalo para mi hermana personalizado",
    h1: "Regalos para tu hermana, pintados a mano",
    metaDescription:
      "Un regalo único para tu hermana: un llavero o case de su mascota, un retrato o un sombrero pintado a mano. Detalles con cariño. Envíos a toda Colombia.",
    lead:
      "Tu hermana conoce todas tus historias, así que regálale algo a su altura: un llavero o un case con su michi, un retrato o un sombrero pintado a mano, hecho especialmente para ella.",
    intentKeywords: ["regalo para mi hermana", "regalo personalizado para mi hermana", "qué regalar a mi hermana"],
    relatedProducts: ["llaveros-de-mascotas", "cases-personalizados", "retratos-de-mascotas"],
    emotionalAngle: "Cercano, cariñoso.",
    waContext: "un regalo para mi hermana",
  },
  {
    slug: "regalo-para-mi-hermano",
    title: "Regalo para mi hermano personalizado",
    h1: "Regalos para tu hermano, pintados a mano",
    metaDescription:
      "Sorprende a tu hermano con un detalle único: su estilo anime, un case con su mascota o un retrato, pintado a mano. Original y personal. Envíos a toda Colombia.",
    lead:
      "Para ese hermano que lo tiene todo, un detalle hecho a mano gana siempre: su personaje de anime favorito, un case con su perro o un retrato pintado especialmente para él.",
    intentKeywords: ["regalo para mi hermano", "regalo personalizado para mi hermano", "qué regalar a mi hermano"],
    relatedProducts: ["retratos-anime", "cases-personalizados", "retratos-de-mascotas"],
    emotionalAngle: "Divertido, cercano.",
    waContext: "un regalo para mi hermano",
  },
  {
    slug: "regalo-para-mi-hija",
    title: "Regalo para mi hija personalizado",
    h1: "Regalos para tu hija, pintados a mano",
    metaDescription:
      "Un regalo lleno de amor para tu hija: su retrato, su mascota o su estilo anime, pintado a mano. Un recuerdo que guardará siempre. Envíos a toda Colombia.",
    lead:
      "Demuéstrale a tu hija lo especial que es con un regalo hecho a mano: su retrato, su mascota o su personaje favorito, pintado con todo el cariño para ella.",
    intentKeywords: ["regalo para mi hija", "regalo personalizado para mi hija", "qué regalar a mi hija"],
    relatedProducts: ["retratos-de-personas", "llaveros-de-mascotas", "retratos-anime"],
    emotionalAngle: "Tierno, orgulloso.",
    waContext: "un regalo para mi hija",
  },
  {
    slug: "regalo-para-mi-hijo",
    title: "Regalo para mi hijo personalizado",
    h1: "Regalos para tu hijo, pintados a mano",
    metaDescription:
      "Sorprende a tu hijo con un regalo único: su estilo anime, su mascota en un case o un retrato, pintado a mano. Original y personal. Envíos a toda Colombia.",
    lead:
      "A tu hijo le va a encantar un regalo pensado solo para él: su personaje de anime, su mascota en un case o un retrato pintado a mano. Un detalle que recordará por años.",
    intentKeywords: ["regalo para mi hijo", "regalo personalizado para mi hijo", "qué regalar a mi hijo"],
    relatedProducts: ["retratos-anime", "cases-personalizados", "retratos-de-mascotas"],
    emotionalAngle: "Orgulloso, cálido.",
    waContext: "un regalo para mi hijo",
  },
  {
    slug: "regalo-para-un-amigo",
    title: "Regalo para un amigo o amiga personalizado",
    h1: "Regalos para un amigo o amiga, pintados a mano",
    metaDescription:
      "Un detalle único para un amigo o amiga: un llavero o case de su mascota, o un sombrero pintado a mano. Original y económico. Envíos a toda Colombia.",
    lead:
      "Para un buen amigo o amiga, un detalle pintado a mano dice mucho: un llavero o case con su mascota, o un sombrero con su flor favorita. Único, personal y a buen precio.",
    intentKeywords: ["regalo para un amigo", "regalo para una amiga", "regalo personalizado para amigos"],
    relatedProducts: ["llaveros-de-mascotas", "cases-personalizados", "sombreros-brisa"],
    emotionalAngle: "Alegre, cercano.",
    waContext: "un regalo para un amigo",
  },
  {
    slug: "regalo-para-companero-de-trabajo",
    title: "Regalo para un compañero de trabajo (amigo secreto)",
    h1: "Regalos para compañeros de trabajo y amigo secreto",
    metaDescription:
      "Ideas para el amigo secreto o un compañero de trabajo: placas, llaveros y cases personalizados desde $20.000. Económicos y originales. Envíos a toda Colombia.",
    lead:
      "¿Te tocó amigo secreto o quieres un detalle para un compañero? Las placas, llaveros y cases personalizados desde $20.000 son originales, económicos y siempre sacan una sonrisa.",
    intentKeywords: ["regalo para compañero de trabajo", "regalo amigo secreto personalizado", "regalo económico amigo secreto"],
    relatedProducts: ["placas-con-nombre", "llaveros-de-mascotas", "cases-personalizados"],
    emotionalAngle: "Práctico, simpático.",
    waContext: "un regalo para un compañero de trabajo / amigo secreto",
  },
  {
    slug: "regalo-para-profesor",
    title: "Regalo para un profesor o maestra personalizado",
    h1: "Regalos para profesores y maestras, pintados a mano",
    metaDescription:
      "Agradece a ese profe especial con un detalle único: un retrato, un llavero o un paisaje pintado a mano. Original y con significado. Envíos a toda Colombia.",
    lead:
      "Un buen maestro deja huella, y un detalle hecho a mano lo agradece como se debe: un retrato, un llavero o un paisaje pintado a mano para ese profe que tanto enseñó.",
    intentKeywords: ["regalo para profesor", "regalo para maestra personalizado", "regalo día del maestro"],
    relatedProducts: ["retratos-de-personas", "llaveros-de-mascotas", "paisajes-en-lienzo"],
    emotionalAngle: "Agradecido, respetuoso.",
    waContext: "un regalo para un profesor o maestra",
  },

  // ---- Budget / price-led ----
  {
    slug: "regalos-personalizados-economicos",
    title: "Regalos personalizados económicos desde $20.000",
    h1: "Regalos personalizados económicos (desde $20.000)",
    metaDescription:
      "Regalos personalizados y económicos pintados a mano: placas desde $20.000, llaveros desde $60.000 y cases. Originales y a buen precio. Envíos a toda Colombia.",
    lead:
      "No necesitas gastar mucho para regalar algo único. Nuestras placas con nombre desde $20.000 y los llaveros desde $60.000 son detalles pintados a mano, originales y muy bien recibidos.",
    intentKeywords: ["regalos personalizados económicos", "regalos personalizados baratos", "regalos personalizados desde 20000"],
    relatedProducts: ["placas-con-nombre", "llaveros-de-mascotas", "cases-personalizados"],
    emotionalAngle: "Accesible, práctico.",
    waContext: "un regalo personalizado económico",
  },

  // ---- Medellín hyperlocal (domicilio) ----
  {
    slug: "regalos-a-domicilio-medellin",
    title: "Regalos personalizados a domicilio en Medellín",
    h1: "Regalos personalizados a domicilio en Medellín",
    metaDescription:
      "Pide tu regalo personalizado pintado a mano y te lo llevamos a domicilio en Medellín y el área metropolitana: retratos, llaveros, placas, cuadros y sombreros. Coordina por WhatsApp.",
    lead:
      "¿Necesitas un regalo en Medellín sin complicarte? Lo pintamos a mano y te lo llevamos a domicilio en la ciudad y el área metropolitana. Coordinamos día y lugar de entrega por WhatsApp.",
    intentKeywords: ["regalos a domicilio Medellín", "regalos personalizados a domicilio Medellín", "detalles a domicilio Medellín"],
    relatedProducts: ["retratos-de-mascotas", "llaveros-de-mascotas", "placas-con-nombre", "sombreros-brisa"],
    emotionalAngle: "Conveniente, local, rápido.",
    waContext: "un regalo personalizado a domicilio en Medellín",
  },
  {
    slug: "regalos-personalizados-el-poblado",
    title: "Regalos personalizados en El Poblado, Medellín",
    h1: "Regalos personalizados en El Poblado",
    metaDescription:
      "Regalos personalizados pintados a mano con entrega a domicilio en El Poblado, Medellín: retratos de mascotas, sombreros, llaveros y más. Pídelo por WhatsApp.",
    lead:
      "Si estás en El Poblado, te llevamos tu regalo personalizado a domicilio. Pintamos a mano retratos, sombreros, llaveros y placas desde tu foto o tu idea, listos para sorprender.",
    intentKeywords: ["regalos personalizados El Poblado", "regalos a domicilio El Poblado", "detalles personalizados El Poblado"],
    relatedProducts: ["retratos-de-mascotas", "sombreros-brisa", "retratos-de-personas"],
    emotionalAngle: "Local, cercano.",
    waContext: "un regalo personalizado en El Poblado",
  },
  {
    slug: "regalos-personalizados-laureles",
    title: "Regalos personalizados en Laureles, Medellín",
    h1: "Regalos personalizados en Laureles",
    metaDescription:
      "Regalos personalizados pintados a mano con domicilio en Laureles, Medellín: retratos de mascotas, llaveros, sombreros y más. Coordina por WhatsApp.",
    lead:
      "En Laureles te entregamos a domicilio el regalo perfecto, pintado a mano: el retrato de tu mascota, un llavero, una placa o un sombrero con flores. Único y hecho para ti.",
    intentKeywords: ["regalos personalizados Laureles", "regalos a domicilio Laureles", "detalles personalizados Laureles"],
    relatedProducts: ["retratos-de-mascotas", "llaveros-de-mascotas", "sombreros-brisa"],
    emotionalAngle: "Local, cercano.",
    waContext: "un regalo personalizado en Laureles",
  },
  {
    slug: "regalos-personalizados-envigado",
    title: "Regalos personalizados en Envigado",
    h1: "Regalos personalizados en Envigado",
    metaDescription:
      "Regalos personalizados pintados a mano con domicilio en Envigado: retratos de mascotas, placas, llaveros y más. Originales y hechos a mano. Pídelo por WhatsApp.",
    lead:
      "¿Buscas un regalo personalizado en Envigado? Lo pintamos a mano y te lo llevamos a domicilio: retratos de mascotas, placas con nombre, llaveros y más, hechos especialmente para ti.",
    intentKeywords: ["regalos personalizados Envigado", "regalos a domicilio Envigado", "detalles personalizados Envigado"],
    relatedProducts: ["retratos-de-mascotas", "placas-con-nombre", "llaveros-de-mascotas"],
    emotionalAngle: "Local, cercano.",
    waContext: "un regalo personalizado en Envigado",
  },
  {
    slug: "regalos-personalizados-sabaneta",
    title: "Regalos personalizados en Sabaneta",
    h1: "Regalos personalizados en Sabaneta",
    metaDescription:
      "Regalos personalizados pintados a mano con domicilio en Sabaneta: retratos de mascotas, llaveros, cuadros en madera y más. Pídelo por WhatsApp.",
    lead:
      "En Sabaneta te entregamos a domicilio un regalo con alma: el retrato de tu mascota, un llavero o un cuadro en madera, pintado a mano y pensado para esa persona especial.",
    intentKeywords: ["regalos personalizados Sabaneta", "regalos a domicilio Sabaneta", "detalles personalizados Sabaneta"],
    relatedProducts: ["retratos-de-mascotas", "llaveros-de-mascotas", "cuadros-en-madera"],
    emotionalAngle: "Local, cercano.",
    waContext: "un regalo personalizado en Sabaneta",
  },

  // ---- Location pages for the clothing + sombrero lines ----
  {
    slug: "ropa-pintada-a-mano-medellin",
    title: "Ropa pintada a mano en Medellín",
    h1: "Ropa pintada a mano en Medellín",
    metaDescription:
      "Ropa pintada a mano en Medellín con entrega a domicilio: chaquetas de jean, jeans, tenis, camisetas, busos y gorras personalizados con tu diseño. Pídelo por WhatsApp.",
    lead:
      "¿Buscas ropa pintada a mano en Medellín? Convertimos tus prendas en piezas únicas —chaquetas de jean, jeans, tenis, camisetas y más— pintadas a mano con el diseño que quieras, con entrega a domicilio en la ciudad y el área metropolitana.",
    intentKeywords: ["ropa pintada a mano Medellín", "ropa personalizada Medellín", "chaquetas pintadas Medellín"],
    relatedProducts: ["chaquetas-pintadas-a-mano", "jeans-pintados-a-mano", "tenis-pintados-a-mano", "camisetas-pintadas-a-mano"],
    emotionalAngle: "Local, moderno, único.",
    waContext: "ropa pintada a mano en Medellín",
  },
  {
    slug: "chaquetas-pintadas-a-mano-medellin",
    title: "Chaquetas de jean pintadas a mano en Medellín",
    h1: "Chaquetas de jean pintadas a mano en Medellín",
    metaDescription:
      "Chaquetas de jean pintadas a mano en Medellín, personalizadas con tu mascota, flores o el diseño que quieras. Entrega a domicilio. Pídela por WhatsApp.",
    lead:
      "Tu chaqueta de jean convertida en arte, aquí en Medellín. La pintamos a mano con tu mascota, un retrato, flores o el diseño que imagines, y te la entregamos a domicilio en la ciudad y el área metropolitana.",
    intentKeywords: ["chaquetas pintadas a mano Medellín", "chaqueta personalizada Medellín", "chaqueta de jean pintada Medellín"],
    relatedProducts: ["chaquetas-pintadas-a-mano", "jeans-pintados-a-mano", "camisetas-pintadas-a-mano"],
    emotionalAngle: "Local, moda, único.",
    waContext: "una chaqueta de jean pintada a mano en Medellín",
  },
  {
    slug: "sombreros-pintados-a-mano-medellin",
    title: "Sombreros pintados a mano en Medellín",
    h1: "Sombreros pintados a mano en Medellín",
    metaDescription:
      "Sombreros brisa pintados a mano en Medellín con flores y diseños únicos, perfectos para la Feria de las Flores. Entrega a domicilio. Pídelo por WhatsApp.",
    lead:
      "Sombreros brisa pintados a mano en Medellín: el accesorio ideal para la Feria de las Flores y para todo el año. Los pintamos con orquídeas, girasoles y más, con entrega a domicilio en la ciudad y el área metropolitana.",
    intentKeywords: ["sombreros pintados a mano Medellín", "sombreros feria de las flores Medellín", "sombrero brisa pintado Medellín"],
    relatedProducts: ["sombreros-brisa", "chaquetas-pintadas-a-mano", "retratos-de-mascotas"],
    emotionalAngle: "Local, tradicional, festivo.",
    waContext: "un sombrero pintado a mano en Medellín",
  },
  {
    slug: "ropa-pintada-a-mano-bogota",
    title: "Ropa pintada a mano con envíos a Bogotá",
    h1: "Ropa pintada a mano, con envíos a Bogotá",
    metaDescription:
      "Ropa pintada a mano y personalizada con envíos a Bogotá: chaquetas de jean, jeans, tenis y camisetas con tu diseño. Pintamos en Medellín y te enviamos. Pídelo por WhatsApp.",
    lead:
      "¿Estás en Bogotá y quieres una prenda pintada a mano? La pintamos en Medellín y te la enviamos: chaquetas de jean, jeans, tenis, camisetas y más, personalizados con el diseño que imagines.",
    intentKeywords: ["ropa pintada a mano Bogotá", "chaquetas pintadas a mano Bogotá", "ropa personalizada Bogotá"],
    relatedProducts: ["chaquetas-pintadas-a-mano", "jeans-pintados-a-mano", "tenis-pintados-a-mano", "camisetas-pintadas-a-mano"],
    emotionalAngle: "Nacional, moderno, único.",
    waContext: "ropa pintada a mano con envío a Bogotá",
  },
];

export const intentMap: Record<string, Intent> = Object.fromEntries(
  intents.map((i) => [i.slug, i]),
);
export function getIntent(slug: string): Intent | undefined {
  return intentMap[slug];
}
