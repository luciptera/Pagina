import type { ImageMetadata } from "astro";

/**
 * Map every product slug to its real catalog photos (extracted from the PDF).
 * Astro optimizes these to responsive WebP at build time via <Image>.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/products/*/*.{jpg,jpeg,png}",
  { eager: true },
);

const byProduct: Record<string, ImageMetadata[]> = {};
for (const [path, mod] of Object.entries(modules)) {
  // path: ../assets/products/<slug>/<slug>-N.jpg
  const m = path.match(/products\/([^/]+)\/([^/]+)$/);
  if (!m) continue;
  const slug = m[1];
  (byProduct[slug] ??= []).push(mod.default);
}

// sort numerically by the trailing -N so ordering is deterministic
const numOf = (img: ImageMetadata) => {
  const mm = img.src.match(/-(\d+)\.[a-z]+/i);
  return mm ? parseInt(mm[1], 10) : 0;
};
for (const slug of Object.keys(byProduct)) {
  byProduct[slug].sort((a, b) => numOf(a) - numOf(b));
}

/** All real photos for a product slug (empty array if none). */
export function productImages(slug: string): ImageMetadata[] {
  return byProduct[slug] ?? [];
}

/** Hero photo for a product (first curated image). */
export function heroImage(slug: string): ImageMetadata | undefined {
  return productImages(slug)[0];
}

/** Brand assets. */
export { default as logoImg } from "../assets/brand/logo.png";
export { default as faviconImg } from "../assets/brand/favicon.png";
