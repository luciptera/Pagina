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
  lines.push(`- Medios de pago: Nequi ${BUSINESS.payments.nequi}, Bancolombia (Llave ${BUSINESS.payments.bancolombiaKey})`);
  lines.push(`- Nota: ${BUSINESS.shippingNote}`);
  lines.push("");
  lines.push("## Productos (precios desde, en COP, no incluyen envío)");
  for (const p of products) {
    const price = p.priceByWhatsApp ? "precio por WhatsApp" : `desde ${cop(lowPrice(p))}`;
    lines.push(`- ${p.name}: ${price} — ${base}/${p.slug}/ (mín. ${p.prepDays} días)`);
  }
  lines.push("");
  lines.push("## Feria de las Flores (Medellín)");
  lines.push(`- Fechas ${FERIA.year}: ${FERIA.rangeLabel}. Acto central: Desfile de Silleteros.`);
  lines.push(`- Luciptera pinta a mano sombreros brisa blancos con flores antioqueñas para la feria.`);
  lines.push(`- Precio por WhatsApp (depende del diseño). Pedir antes del ${FERIA.orderByLabel}.`);
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
