// client/nuxt.config.ts
import tailwindcss from '@tailwindcss/vite'   // Vite plugin for Tailwind v4

export default defineNuxtConfig({
  srcDir: 'app/',

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // remove @nuxtjs/tailwindcss from modules if present
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui"
  ],

  // CSS entry relative to srcDir (app/)
  css: ['~/assets/css/tailwind.css'],

  // register Tailwind's Vite plugin
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  // keep a minimal postcss config via nuxt option (autoprefixer)
  postcss: {
    plugins: {
      autoprefixer: {}
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || "http://server:4000/api"
    }
  },

  nitro: { preset: "node" },
  components: [{ path: '~/components', pathPrefix: false }]
})