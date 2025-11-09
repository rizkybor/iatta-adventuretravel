// client/nuxt.config.ts
import tailwindcss from "@tailwindcss/vite"; // Vite plugin for Tailwind v4

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", href: "/favicon_io/favicon.ico" },
        { rel: "manifest", href: "/favicon_io/site.webmanifest" },
        { rel: "apple-touch-icon", href: "/favicon_io/apple-touch-icon.png" },
      ],
      meta: [
        { name: "robots", content: "index, follow" },
        { property: "og:site_name", content: "IATTA" },
        { property: "og:locale", content: "id_ID" },
      ],
    },
  },
  srcDir: "app/",
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // remove @nuxtjs/tailwindcss from modules if present
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/sitemap"],

  // @ts-ignore
  sitemap: {
    siteUrl: "https://iatta.or.id",
  },

  // CSS entry relative to srcDir (app/)
  css: ["~/assets/css/tailwind.css"],

  // register Tailwind's Vite plugin
  vite: {
    plugins: [tailwindcss()],
  },

  // keep a minimal postcss config via nuxt option (autoprefixer)
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: "https://iatta.or.id",
      apiBase: process.env.API_BASE_URL || "http://server:4000/api",
    },
  },

  nitro: { preset: "vercel" },
  components: [{ path: "~/components", pathPrefix: false }],
});
