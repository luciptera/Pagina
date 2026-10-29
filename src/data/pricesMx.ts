/* ===========================================================================
   Local-currency prices. Rule: English pages show USD; Spanish pages show
   MXN for Mexico and COP for Colombia (COP pages use products.ts directly).
   Derived from the COP catalog (products.ts) so they follow any price change:
   COP ÷ rate, rounded UP to the next 50 pesos. Rate frozen on purpose so the
   prices don't drift between builds — update it deliberately if needed.
=========================================================================== */

import { products, type Product } from "./products";

/** 1 MXN = 168.8 COP (open.er-api.com, 2026-10-29) */
export const COP_PER_MXN = 168.8;

export function mxn(cop: number): number {
  return Math.ceil(cop / COP_PER_MXN / 50) * 50;
}

export function fmtMxn(cop: number): string {
  return `$${mxn(cop).toLocaleString("en-US")} MXN`;
}

/** 1 USD = 3,146.9 COP (open.er-api.com, 2026-10-29) */
export const COP_PER_USD = 3146.9;

/** COP → USD, rounded UP to the next $5 */
export function usd(cop: number): number {
  return Math.ceil(cop / COP_PER_USD / 5) * 5;
}

export function fmtUsd(cop: number): string {
  return `$${usd(cop).toLocaleString("en-US")} USD`;
}

export interface MxRow {
  label: string;
  price: string;
}
export interface MxGroup {
  slug: string;
  name: string;
  rows: MxRow[];
}

const nameEn: Record<string, string> = {
  "retratos-de-mascotas": "Pet portraits on canvas",
  "retratos-de-personas": "People portraits on canvas",
  "retratos-anime": "Anime-style portraits",
  "paisajes-en-lienzo": "Landscapes on canvas",
  "cuadros-en-madera": "Pet portraits on wood (resin)",
  "llaveros-de-mascotas": "Pet keychains (resin)",
  "placas-con-nombre": "Pet name tags",
  "cases-personalizados": "Custom phone cases",
  "chaquetas-pintadas-a-mano": "Hand-painted jackets",
  "jeans-pintados-a-mano": "Hand-painted jeans",
  "camisetas-pintadas-a-mano": "Hand-painted tees, hoodies & caps",
};

const labelEn: [string, string][] = [
  ["15 × 15 cm (cuadrado o circular)", "15 × 15 cm (square or round)"],
  ["De 4 a 5 cm", "4–5 cm"],
  ["Rectangular de 7 cm", "7 cm rectangle"],
  ["Círculo de", "Circle"],
  ["De ", ""],
  ["Case con mascota", "Case with your pet"],
  ["Case básico (flores, paisajes, objetos)", "Basic case (flowers, landscapes, objects)"],
];

const order = Object.keys(nameEn);

// extra-subject charges, from the catalog extras
const extraCop: Record<string, { es: string; en: string; cop: number }> = {
  "retratos-de-mascotas": { es: "Mascota extra en el mismo lienzo", en: "Each extra pet", cop: 90000 },
  "retratos-de-personas": { es: "Persona extra en el mismo lienzo", en: "Each extra person", cop: 100000 },
};

export function mxPriceList(lang: "es" | "en"): MxGroup[] {
  const en = lang === "en";
  const fmt = en ? fmtUsd : fmtMxn;
  return order
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p))
    .map((p) => {
      const rows: MxRow[] = p.sizes.length
        ? p.sizes.map((s) => ({
            label: en ? labelEn.reduce((l, [a, b]) => l.replace(a, b), s.label) : s.label,
            price: fmt(s.priceCOP),
          }))
        : [
            {
              label: en ? "On your own garment" : "Sobre tu propia prenda",
              price: `${en ? "From" : "Desde"} ${fmt(p.fromPrice)}`,
            },
          ];
      const x = extraCop[p.slug];
      if (x) rows.push({ label: en ? x.en : x.es, price: `+${fmt(x.cop)}` });
      return { slug: p.slug, name: en ? nameEn[p.slug] : p.name, rows };
    });
}

/** lowest canvas portrait price, for copy */
export const fromPetMx = fmtMxn(products.find((p) => p.slug === "retratos-de-mascotas")!.fromPrice);
export const fromPeopleMx = fmtMxn(products.find((p) => p.slug === "retratos-de-personas")!.fromPrice);
export const fromClothesMx = fmtMxn(products.find((p) => p.slug === "chaquetas-pintadas-a-mano")!.fromPrice);

const priceOf = (slug: string) => products.find((p) => p.slug === slug)!.fromPrice;
export const fromPetUsd = fmtUsd(priceOf("retratos-de-mascotas"));
export const fromPeopleUsd = fmtUsd(priceOf("retratos-de-personas"));
export const fromClothesUsd = fmtUsd(priceOf("chaquetas-pintadas-a-mano"));
