import type { APIRoute } from "astro";
import { products } from "../data/products";
import { heroImage } from "../data/images";
import { BUSINESS } from "../consts";

/**
 * Google Merchant Center product feed (RSS 2.0 + g: namespace) for FREE
 * Shopping listings. Submit this URL in Merchant Center → Products → Feeds
 * (or let Merchant Center auto-fetch it).
 *
 * Only priced products WITH a photo are included. "Precio por WhatsApp" items
 * (jackets, jeans, camisetas) and photoless placeholders are omitted, because
 * Merchant Center requires a real price and an image.
 *
 * Category hints per material (Google product taxonomy).
 */
const GCAT: Record<string, string> = {
  lienzo: "Home & Garden > Decor > Artwork > Posters, Prints & Visual Artwork",
  madera: "Home & Garden > Decor > Artwork",
  resina: "Arts & Entertainment > Hobbies & Creative Arts > Arts & Crafts",
  paja: "Apparel & Accessories > Clothing Accessories > Hats",
  tela: "Apparel & Accessories > Clothing",
};

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const GET: APIRoute = ({ site }) => {
  const base = site?.href.replace(/\/$/, "") ?? "";
  const items: string[] = [];

  for (const p of products) {
    const hero = heroImage(p.slug);
    // require a real starting price AND an image
    if (p.fromPrice <= 0 || !hero) continue;

    const link = `${base}/${p.slug}/`;
    const imageLink = new URL(hero.src, site).href;
    const desc = p.tagline + (p.priceByWhatsApp ? " El precio final depende del diseño." : "");

    items.push(
      [
        "    <item>",
        `      <g:id>${p.slug}</g:id>`,
        `      <g:title>${esc(p.name)}</g:title>`,
        `      <g:description>${esc(desc)}</g:description>`,
        `      <g:link>${link}</g:link>`,
        `      <g:image_link>${imageLink}</g:image_link>`,
        `      <g:availability>in_stock</g:availability>`,
        `      <g:price>${p.fromPrice}.00 COP</g:price>`,
        `      <g:condition>new</g:condition>`,
        `      <g:brand>${BUSINESS.name}</g:brand>`,
        `      <g:identifier_exists>no</g:identifier_exists>`,
        `      <g:google_product_category>${esc(GCAT[p.material] ?? GCAT.lienzo)}</g:google_product_category>`,
        `      <g:product_type>${esc(p.shortName)}</g:product_type>`,
        "    </item>",
      ].join("\n"),
    );
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">',
    "  <channel>",
    `    <title>${esc(BUSINESS.name)}</title>`,
    `    <link>${base}/</link>`,
    `    <description>${esc(BUSINESS.description)}</description>`,
    ...items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
