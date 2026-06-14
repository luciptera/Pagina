# Fotos / mockups de los sombreros pintados

Coloca aquí las imágenes de cada diseño de sombrero. La estructura es:

```
src/assets/sombreros/<slug-del-diseño>/<lo-que-sea>.jpg
```

Los slugs de diseño están en `src/data/feria.ts` (campo `slug`). Por ejemplo:

```
src/assets/sombreros/sombrero-orquidea-cattleya/1.jpg
src/assets/sombreros/sombrero-silleta-tradicional/1.jpg
src/assets/sombreros/sombrero-jardin-de-santa-elena/1.jpg
src/assets/sombreros/sombrero-girasoles/1.jpg
```

- La primera imagen (ordenada alfabéticamente) es la principal (hero) del diseño.
- Acepta `.jpg`, `.png` o `.webp`. Astro las optimiza a WebP en el build.
- Mientras no haya imágenes, el sitio muestra una tarjeta de marcador de posición
  con el nombre del diseño (no se rompe nada).
- Recuerda: las imágenes se presentan como **diseños de referencia** (cada sombrero
  se pinta a mano sobre pedido).

Después de agregar imágenes: `npm run build`.
