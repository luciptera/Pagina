/* ===========================================================================
   JSON-LD builders. NOTE: no Review / AggregateRating anywhere — testimonials
   on this site are samples, and fabricated review schema risks Google penalties.
=========================================================================== */

import { BUSINESS, WHATSAPP_NUMBER } from "../consts";
import type { Product } from "../data/products";
import { lowPrice, highPrice } from "../data/products";
import type { Faq } from "../data/faqs";

const phone = "+" + WHATSAPP_NUMBER;

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
    sameAs: [BUSINESS.instagramUrl, BUSINESS.facebookUrl],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: phone,
      availableLanguage: ["Spanish"],
    },
  };
}

export function productSchema(p: Product, url: string, imageUrl?: string) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.tagline,
    ...(imageUrl ? { image: imageUrl } : {}),
    brand: { "@type": "Brand", name: BUSINESS.name },
    category: "Arte personalizado",
  };
  // Custom, made-to-order items are priced by chat — omit price (don't fabricate a number).
  if (!p.priceByWhatsApp && p.sizes.length) {
    base.offers = {
      "@type": "AggregateOffer",
      priceCurrency: "COP",
      lowPrice: lowPrice(p),
      highPrice: highPrice(p),
      offerCount: p.sizes.length,
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
