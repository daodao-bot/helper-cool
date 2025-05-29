<script setup lang="ts">
import ThemePicker from '~/components/settings/ThemePicker.vue'

const { locale, setLocale } = useI18n()

const languages = ref([
  {
    code: 'zh',
    language: 'zh-CN',
    label: '简体中文',
    onSelect: () => {
      if (locale.value !== 'zh') {
        switchLocalePath('zh')
      }
    }
  },
  {
    code: 'en',
    language: 'en-US',
    label: 'English',
    onSelect: () => {
      if (locale.value !== 'en') {
        switchLocalePath('en')
      }
    }
  }
])

const switchLocalePath = async (locale: 'en' | 'zh') => {
  await setLocale(locale)
  window.location.reload()
}
</script>

<template>
  <UDropdownMenu
    :items="languages"
  >
    <UButton
      icon="i-lucide-languages"
      aria-label="languages"
      color="neutral"
      variant="ghost"
    />
  </UDropdownMenu>

  <ThemePicker />

  <UColorModeButton />

  <UButton
    to="https://gitee.com/daodao-bot/helper-cool"
    target="_blank"
    icon="i-simple-icons-github"
    aria-label="GitHub"
    color="neutral"
    variant="ghost"
  />
</template>

<style scoped>
</style>
