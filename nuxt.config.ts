// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui-pro',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@nuxtjs/i18n'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  i18n: {
    locales: [{
      code: 'zh',
      language: 'zh-CN',
      name: '简体中文',
      file: 'zh-CN.ts'
    }, {
      code: 'en',
      language: 'en-US',
      name: 'English',
      file: 'en-US.ts'
    }],
    defaultLocale: 'zh',
    lazy: true,
    langDir: 'lang/',
    // vueI18n: { fallbackLocale: 'zh' },
    strategy: 'prefix_except_default'
  },

  routeRules: {
    '/api/**': {
      cors: true
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
