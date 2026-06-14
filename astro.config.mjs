// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// TODO(owner): set this to the final production domain before launch.
// Used for canonical URLs, sitemap, OG tags. Must match the deployed origin.
const SITE = "https://www.luciptera.com";

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
