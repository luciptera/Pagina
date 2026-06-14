// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Production domain (canonical URLs, sitemap, OG tags). Must match the deployed
// origin. Netlify serves www as primary (apex 301→www), so canonical = www.
const SITE = "https://www.luciptera.art";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es-CO" } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
