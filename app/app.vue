<script setup lang="ts">
import * as locales from '@nuxt/ui-pro/locale'

const { locale, t } = useI18n()

const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#1b1718' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'zh-CN'
  }
})

const title = 'Helper - 在线助手'
const description = 'A professional dashboard template built with Nuxt UI Pro, featuring multiple pages, data visualization, and comprehensive management capabilities for creating powerful admin interfaces.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2Rhc2hib2FyZC10ZW1wbGF0ZS5udXh0LmRldiIsImlhdCI6MTczOTQ2MzU2N30._VElt4uvLjvAMdnTLytCInOajMElzWDKbmvOaMZhZUI.jpg?theme=light',
  twitterImage: 'https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2Rhc2hib2FyZC10ZW1wbGF0ZS5udXh0LmRldiIsImlhdCI6MTczOTQ2MzU2N30._VElt4uvLjvAMdnTLytCInOajMElzWDKbmvOaMZhZUI.jpg?theme=light',
  twitterCard: 'summary_large_image'
})

if (window?.location?.hostname === 'helper.cool') {
  const hm = document.createElement('script')
  hm.src = 'https://hm.baidu.com/hm.js?bf4237a9abb5683c1567548d79573229'
  const s = document.getElementsByTagName('script')[0]
  s?.parentNode?.insertBefore(hm, s)
}
</script>

<template>
  <UApp :locale="locales[locale as keyof typeof locales]">
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
