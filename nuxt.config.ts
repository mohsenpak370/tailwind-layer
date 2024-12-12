// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: join(currentDir, './assets/css/tailwind.css'),
    configPath: join(currentDir, './tailwind.config.js'),
  }
})
