// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ]
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_SITE_URL || 'http://localhost:3000'
    }
  },
  css: ["~/assets/css/global.css", "~/assets/css/main.css"],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  supabase: {
    redirect: false,
    types: './types/database.types'
  },
  compatibilityDate: '2025-05-07',
  modules: ['@nuxt/ui', '@pinia/nuxt', "@nuxtjs/supabase", '@vueuse/motion/nuxt'],
  typescript: {
    typeCheck: true
  }
})