import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://fancy-beijinho-7f3b98.netlify.app',
  integrations: [preact()]
});