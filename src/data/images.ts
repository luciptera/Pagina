import type { ImageMetadata } from "astro";
import { hatDesigns } from "./feria";

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
  // The sombreros pillar has no folder of its own — surface the hat DESIGN photos
  // so the catalog card, pillar hero/gallery and alias pages all show real hats.
  if (slug === "sombreros-brisa") return allSombreroDesignImages();
  return byProduct[slug] ?? [];
}

/** Hero photo for a product (first curated image). */
export function heroImage(slug: string): ImageMetadata | undefined {
  return productImages(slug)[0];
}

/* --- Sombrero design photos / mockups (added by the owner over time) --- */
const sombreroModules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/sombreros/*/*.{jpg,jpeg,png,webp}",
  { eager: true },
);
const bySombrero: Record<string, ImageMetadata[]> = {};
for (const [path, mod] of Object.entries(sombreroModules)) {
  const m = path.match(/sombreros\/([^/]+)\/([^/]+)$/);
  if (!m) continue;
  (bySombrero[m[1]] ??= []).push(mod.default);
}
for (const slug of Object.keys(bySombrero)) {
  bySombrero[slug].sort((a, b) => numOf(a) - numOf(b));
}

/** Photos/mockups for a hat design slug (empty until the owner adds files). */
export function designImages(slug: string): ImageMetadata[] {
  return bySombrero[slug] ?? [];
}

/** All hat photos, ordered by design (used for the sombreros pillar + card). */
export function allSombreroDesignImages(): ImageMetadata[] {
  const out: ImageMetadata[] = [];
  for (const d of hatDesigns) out.push(...(bySombrero[d.slug] ?? []));
  return out;
}
export function designHero(slug: string): ImageMetadata | undefined {
  return designImages(slug)[0];
}
/** Any sombrero imagery at all (to decide whether to show galleries vs placeholders). */
export function hasSombreroImages(): boolean {
  return Object.keys(bySombrero).length > 0;
}

/** Brand assets. */
export { default as logoImg } from "../assets/brand/logo.png";
export { default as faviconImg } from "../assets/brand/favicon.png";
