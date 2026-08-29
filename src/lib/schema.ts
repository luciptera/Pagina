/* ===========================================================================
   JSON-LD builders. NOTE: no Review / AggregateRating anywhere — testimonials
   on this site are samples, and fabricated review schema risks Google penalties.
=========================================================================== */

import { BUSINESS, WHATSAPP_NUMBER } from "../consts";
import type { Product } from "../data/products";
import { lowPrice, highPrice } from "../data/products";
import type { Faq } from "../data/faqs";

const phone = "+" + WHATSAPP_NUMBER;

/** Google wants a price freshness horizon on Offers; 1 year out from build. */
function priceValidUntil(): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().slice(0, 10);
}

export function localBusiness(siteUrl: string, logoUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    description: BUSINESS.description,
    image: logoUrl,
    logo: logoUrl,
    url: siteUrl,
    telephone: phone,
    founder: BUSINESS.owner,
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Medellín" },
      { "@type": "Country", name: "Colombia" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    sameAs: [BUSINESS.instagramUrl, BUSINESS.facebookUrl, BUSINESS.tiktokUrl, BUSINESS.googleUrl],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: phone,
      availableLanguage: ["Spanish"],
    },
  };
}

export function productSchema(p: Product, url: string, imageUrl?: string) {
  // A Product without a price is invalid for Google Merchant Center ("falta el
  // precio del producto") and blocks the whole account's items from showing.
  // Made-to-order pieces we quote by chat are published as a Service instead,
  // so Google never tries to ingest them as shopping products.
  const hasPrice = (!p.priceByWhatsApp && p.sizes.length > 0) || p.fromPrice > 0;
  // Merchant Center requires price AND image; without either it's a Service.
  if (!hasPrice || !imageUrl) {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: p.name,
      description: p.tagline,
      ...(imageUrl ? { image: imageUrl } : {}),
      serviceType: "Arte personalizado pintado a mano",
      provider: { "@type": "LocalBusiness", name: BUSINESS.name, telephone: phone },
      areaServed: { "@type": "Country", name: "Colombia" },
      url,
    };
  }

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.tagline,
    ...(imageUrl ? { image: imageUrl } : {}),
    brand: { "@type": "Brand", name: BUSINESS.name },
    category: "Arte personalizado",
  };
  if (!p.priceByWhatsApp && p.sizes.length) {
    base.offers = {
      "@type": "AggregateOffer",
      priceCurrency: "COP",
      lowPrice: lowPrice(p),
      highPrice: highPrice(p),
      offerCount: p.sizes.length,
      priceValidUntil: priceValidUntil(),
      availability: "https://schema.org/InStock",
      url,
      seller: { "@type": "Organization", name: BUSINESS.name },
    };
  } else if (p.fromPrice > 0) {
    // made-to-order item with a known "desde" price → a single Offer with lowPrice
    base.offers = {
      "@type": "Offer",
      priceCurrency: "COP",
      price: p.fromPrice,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "COP",
        price: p.fromPrice,
        valueAddedTaxIncluded: true,
      },
      priceValidUntil: priceValidUntil(),
      availability: "https://schema.org/InStock",
      url,
      seller: { "@type": "Organization", name: BUSINESS.name },
    };
  }
  return base;
}

export function faqPage(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function eventSchema(opts: {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: opts.name,
    startDate: opts.startDate,
    endDate: opts.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: opts.description,
    url: opts.url,
    location: {
      "@type": "Place",
      name: "Medellín",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Medellín",
        addressRegion: "Antioquia",
        addressCountry: "CO",
      },
    },
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "LocalBusiness", name: BUSINESS.name, telephone: phone },
    areaServed: { "@type": "Country", name: "Colombia" },
    url,
  };
}
