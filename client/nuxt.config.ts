// client/nuxt.config.ts
import tailwindcss from "@tailwindcss/vite"; // Vite plugin for Tailwind v4

export default defineNuxtConfig({
  app: {
    head: {
      title: "IATTA – Indonesia Adventure Travel Trade Association",
      meta: [
        {
          name: "description",
          content:
            "Indonesia Adventure Travel Trade Association (IATTA) adalah organisasi yang berfokus pada pengembangan industri wisata petualangan di Indonesia, mendorong kolaborasi, sertifikasi, dan promosi destinasi berkelanjutan di tingkat nasional dan global.",
        },
        {
          name: "keywords",
          content:
            "IATTA, adventure tourism, sustainable travel, Indonesia tourism, ecotourism, adventure trade association, travel industry, Amalia Yunita",
        },
        {
          property: "og:title",
          content: "IATTA – Indonesia Adventure Travel Trade Association",
        },
        {
          property: "og:description",
          content:
            "Organisasi yang memimpin pengembangan pariwisata petualangan Indonesia melalui kolaborasi, sertifikasi, dan inovasi berkelanjutan.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: "/favicon_io/favicon-32x32.png",
        },
        {
          property: "og:url",
          content: "https://www.iatta.or.id",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "IATTA – Indonesia Adventure Travel Trade Association",
        },
        {
          name: "twitter:description",
          content:
            "Mendorong ekosistem wisata petualangan berkelanjutan di Indonesia.",
        },
      ],
      link: [
        // Favicon default
        { rel: "icon", type: "image/x-icon", href: "/favicon_io/favicon.ico" },
        { rel: "canonical", href: "https://www.iatta.or.id" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon_io/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon_io/favicon-32x32.png",
        },
        // Apple Touch Icon
        { rel: "apple-touch-icon", href: "/favicon_io/apple-touch-icon.png" },
        // Web manifest (untuk progressive web app)
        { rel: "manifest", href: "/favicon_io/site.webmanifest" },
      ],
    },
  },
  srcDir: "app/",
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // remove @nuxtjs/tailwindcss from modules if present
  modules: ["@nuxt/eslint", "@nuxt/ui"],

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
      apiBase: process.env.API_BASE_URL || "http://server:4000/api",
    },
  },

  nitro: { preset: "vercel" },
  components: [{ path: "~/components", pathPrefix: false }],
});
