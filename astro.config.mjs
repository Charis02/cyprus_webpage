import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "http://charis02.github.io/cyprus_webpage/",
    base: "cyprus_webpage",
    integrations: [tailwind()],
  });
