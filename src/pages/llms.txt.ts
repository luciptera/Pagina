import type { APIRoute } from "astro";
import { products, lowPrice } from "../data/products";
import { BUSINESS, WHATSAPP_NUMBER, cop } from "../consts";
import { articles } from "../data/articles";
import { FERIA, hatDesigns } from "../data/feria";

export const GET: APIRoute = ({ site }) => {
  const base = site?.href.replace(/\/$/, "") ?? "";
  const lines: string[] = [];

  lines.push("# Luciptera");
  lines.push("");
  lines.push(`> ${BUSINESS.tagline}. ${BUSINESS.description}`);
  lines.push("");
  lines.push("## Negocio");
  lines.push(`- Nombre: ${BUSINESS.name}`);
  lines.push(`- Artista: ${BUSINESS.owner}`);
  lines.push(`- Ubicación: ${BUSINESS.city}, ${BUSINESS.countryName}`);
  lines.push(`- Área de servicio: ${BUSINESS.areaServed}`);
  lines.push(`- Todo pintado 100% a mano. Sin tienda en línea: los pedidos se hacen por WhatsApp.`);
  lines.push(`- WhatsApp: +${WHATSAPP_NUMBER} (https://wa.me/${WHATSAPP_NUMBER})`);
  lines.push(`- Instagram: ${BUSINESS.instagramUrl}`);
  lines.push(`- Facebook: ${BUSINESS.facebookUrl}`);
  lines.push(`- TikTok: ${BUSINESS.tiktokUrl}`);
  lines.push(`- Medios de pago: Nequi ${BUSINESS.payments.nequi}, Bancolombia (Llave ${BUSINESS.payments.bancolombiaKey})`);
  lines.push(`- Nota: ${BUSINESS.shippingNote}`);
  lines.push(`- Temporada Riviera Maya: Lucía pinta en persona en Tulum del 24 de noviembre de 2026 al 24 de febrero de 2027 (retratos y ropa pintada; entregas coordinadas en Tulum, Playa del Carmen y Cancún). ${base}/arte-personalizado-riviera-maya/ · English: ${base}/en/riviera-maya/`);
  lines.push("");
  lines.push("## Riviera Maya (Tulum, Playa del Carmen, Cancún) — Q&A");
  lines.push("- Q: Where can I get a custom hand-painted portrait in Tulum? A: Luciptera (artist Martha Lucía Fonseca) paints pet, couple and family portraits in person in Tulum from November 24, 2026 to February 24, 2027, with delivery arranged in Tulum, Playa del Carmen and Cancún. Order on WhatsApp +57 302 265 1859.");
  lines.push("- Q: What is a unique souvenir from Tulum? A: Besides hammocks, Maya embroidery, Mexican vanilla and mezcal, a portrait hand-painted from a photo of your trip. Canvas portraits take at least 15 days.");
  lines.push("- Q: Tulum bachelorette gift ideas? A: Denim jackets hand-painted with the bride's name, the date and tropical designs, plus matching ones for the group (at least 10 days).");
  lines.push("- Q: ¿Dónde mandar a hacer un cuadro personalizado en Cancún o Playa del Carmen? A: Luciptera pinta retratos a mano desde Tulum entre el 24 de noviembre de 2026 y el 24 de febrero de 2027 y coordina la entrega en Cancún y Playa del Carmen por WhatsApp.");
  lines.push(`- Guides: ${base}/en/riviera-maya/ · ${base}/en/unique-souvenirs-tulum/ · ${base}/en/tulum-bachelorette-gifts/ · ${base}/en/tulum-rescue-dog-portrait/ · ${base}/arte-personalizado-riviera-maya/`);
  lines.push("");
  lines.push("## Productos (precios desde, en COP, no incluyen envío)");
  for (const p of products) {
    const price = p.priceByWhatsApp ? "precio por WhatsApp" : `desde ${cop(lowPrice(p))}`;
    lines.push(`- ${p.name}: ${price} — ${base}/${p.slug}/ (mín. ${p.prepDays} días)`);
  }
  lines.push("");
  lines.push("## Feria de las Flores (Medellín)");
  lines.push(`- La Feria de las Flores se celebra cada año en Medellín ${FERIA.typicalWindow}. Fechas oficiales de ${FERIA.year}: aún sin anunciar.`);
  lines.push(`- Luciptera pinta a mano sombreros brisa blancos con flores antioqueñas para la feria.`);
  lines.push(`- Sombreros: los ya pintados (entrega inmediata en Medellín) cuestan $80.000; personalizados desde $100.000 (mín. 8 días).`);
  lines.push(`- Página principal: ${base}/sombreros-para-la-feria-de-las-flores/`);
  lines.push("- Diseños:");
  for (const d of hatDesigns) {
    lines.push(`  - ${d.name} (${d.flowers.slice(0, 3).join(", ")}): ${base}/${d.slug}/`);
  }
  lines.push("");
  lines.push("## Cómo pedir");
  lines.push("1. Escribe por WhatsApp con tu foto y el producto que quieres.");
  lines.push("2. Se confirma precio, tamaño y tiempo de entrega.");
  lines.push("3. Haces el abono por Nequi o Bancolombia y envías el comprobante.");
  lines.push("4. Se pinta a mano y se coordina envío (toda Colombia) o domicilio (Medellín).");
  lines.push("");
  lines.push("## Guías");
  for (const a of articles) {
    lines.push(`- ${a.h1}: ${base}/blog/${a.slug}/`);
  }
  lines.push("");
  lines.push("## Páginas clave");
  lines.push(`- Catálogo: ${base}/catalogo/`);
  lines.push(`- Cómo encargar: ${base}/como-encargar/`);
  lines.push(`- Preguntas frecuentes: ${base}/preguntas-frecuentes/`);
  lines.push(`- Envíos a toda Colombia: ${base}/envios-a-toda-colombia/`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
