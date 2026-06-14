# Luciptera — sitio web

Sitio estático (Astro + Tailwind) para **Luciptera**, arte personalizado pintado a mano en
Medellín. Optimizado para SEO y AEO; la única conversión es **WhatsApp** (no hay carrito ni
formularios). Spanish (es-CO).

- **Stack:** Astro 5 · Tailwind v4 · TypeScript · imágenes WebP (astro:assets) · sitemap automático
- **Despliegue:** Netlify (`netlify.toml` incluido)
- **Lighthouse:** 98 / 100 / 100 / 100 (Perf / A11y / Best-Practices / SEO)

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera /dist
npm run preview    # sirve /dist localmente
```

## Lo más importante para la dueña

### 1. Número de WhatsApp
Vive en un solo lugar: **`src/consts.ts` → `WHATSAPP_NUMBER`** (actualmente `573022651859`).
Todos los botones del sitio lo usan automáticamente. Si cambia, edítalo ahí y reconstruye.

### 2. Fotos de los productos
Las fotos reales se extrajeron del catálogo y viven en `src/assets/products/<slug>/`.
Para cambiar o agregar una foto:
1. Copia la imagen nueva (JPG) en la carpeta del producto, por ejemplo
   `src/assets/products/retratos-de-mascotas/retratos-de-mascotas-5.jpg`.
2. La primera foto (la que termina en `-1`) es la principal (hero). Renombra para reordenar.
3. `npm run build`. Astro la optimiza a WebP sola.

> El script `scripts/extract-assets.sh` documenta cómo se sacaron del PDF (no es necesario
> volver a correrlo).

### 3. Testimonios ⚠️
Los testimonios actuales en `src/data/testimonials.ts` son **de ejemplo** (`isSample: true`),
NO son reseñas reales. Por eso el sitio **no** genera schema de reseñas (`Review` /
`AggregateRating`): marcar reseñas inventadas viola las políticas de Google y puede penalizar
todo el dominio. Reemplázalos por testimonios reales cuando los tengas.

## Cómo editar el contenido (sin tocar el diseño)

Todo el contenido vive en `src/data/`:

| Archivo | Qué controla |
|---|---|
| `products.ts` | Productos, precios por tamaño, extras, tiempos, aliases (palabras clave) |
| `cities.ts` | Ciudades del SEO local (Tier 1 = domicilio Medellín, Tier 2 = envíos) |
| `intents.ts` | Páginas por intención/uso (regalos, memorial, decoración…) |
| `occasions.ts` | Páginas por fecha (Día de la Madre, Navidad, San Valentín…) |
| `aliases.ts` | Páginas por la forma real en que la gente busca ("cuadro de mi perro") |
| `faqs.ts` | Preguntas frecuentes (globales y por producto) |
| `articles.ts` | Guías del blog (formato "respuesta primero" para AEO) |
| `variations.ts`| Sistema de variación de texto para las páginas por ciudad |

### Agregar una ciudad
Añade un objeto a `cities.ts` (con `slug`, `name`, `tier`, `region`, `deliveryEstimate`). El sitio
genera automáticamente las páginas `producto × ciudad` para los productos marcados con
`inCityMatrix: true`, siempre que el texto generado supere el mínimo de palabras (anti contenido
pobre). Reconstruye con `npm run build`.

### Agregar un producto
Añade un objeto a `products.ts` y crea su carpeta de fotos en `src/assets/products/<slug>/`.
La página pilar `/<slug>/` se genera sola.

## Arquitectura de páginas (165+ páginas)
- Home, catálogo, cómo encargar, preguntas frecuentes, envíos a toda Colombia
- 8 páginas pilar de producto · ~36 páginas de alias (búsquedas reales)
- páginas de intención y de ocasión · 100 páginas `producto × ciudad`
- 5 guías AEO (blog) · `sitemap-index.xml`, `robots.txt`, `llms.txt`

El enrutamiento programático vive en `src/pages/[...slug].astro` (productos, aliases, intenciones,
ocasiones, ciudades). Cada tipo de página tiene su plantilla en `src/components/pages/`.

## SEO / AEO
- Títulos, descripciones, canónicos y Open Graph únicos por página
- JSON-LD: `LocalBusiness`, `Product` + `AggregateOffer` (COP), `FAQPage`, `BreadcrumbList`, `Service`
- `/llms.txt` con resumen del negocio para crawlers de IA
- Sin `Review`/`AggregateRating` hasta tener reseñas reales

## Despliegue en Netlify
Conecta el repo `luciptera/Pagina` en Netlify. La configuración (`netlify.toml`) ya define
`npm run build` y `dist`. Antes de publicar, confirma:
- `WHATSAPP_NUMBER` en `src/consts.ts`
- `SITE` (dominio final) en `astro.config.mjs` — afecta canónicos, sitemap y OG

## Campaña Feria de las Flores 🌸
Línea de **sombreros brisa pintados a mano** + páginas para dominar las búsquedas de la feria
(Feria 2026: 31 jul – 9 ago). Todo en `src/data/feria.ts` (fechas + diseños).
- Página principal: `/sombreros-para-la-feria-de-las-flores/` (con cuenta regresiva).
- Una página por diseño (orquídea, silleta, jardín de Santa Elena, girasoles, hortensias).
- Guías AEO en `/blog/` (cuándo es la feria, qué llevar, flores típicas, qué es una silleta).
- **Precio:** los sombreros se cotizan por WhatsApp (no muestran precio fijo). Si luego defines
  precios, cambia `priceByWhatsApp` en `src/data/products.ts` y agrega `sizes`.
- **Fotos:** los diseños muestran un marcador de posición hasta que agregues imágenes en
  `src/assets/sombreros/<slug-del-diseño>/` (ver el README de esa carpeta). Se presentan como
  *diseños de referencia* (cada sombrero se pinta a mano).
- Para cambiar las fechas en años siguientes: edita `FERIA` en `src/data/feria.ts`.

## TODOs antes de lanzar
- [ ] Confirmar el número de WhatsApp (`src/consts.ts`)
- [ ] Definir el dominio final (`astro.config.mjs` → `SITE`)
- [ ] Reemplazar testimonios de ejemplo por reales (`src/data/testimonials.ts`)
- [ ] Revisar la asignación foto → producto y reordenar si se desea
- [ ] Agregar fotos/mockups de los sombreros en `src/assets/sombreros/` y confirmar precios
