// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui'],

  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons'],
  },

  colorMode: {
    preference: 'dark',
  },

  typescript: {
    strict: true,
    // typeCheck: true,
  },
})
