<template>
  <header>
    <UContainer class="flex justify-between p-4">
      <slot name="left">
        <div class="flex">
          <NuxtLink
            to="/"
            class="flex items-end gap-1.5 font-bold text-xl text-gray-900 dark:text-white"
            aria-label="Helper"
          >
            <img
              class="h-8 w-8"
              src="/img/logo.png"
              alt="logo"
            >
            <span>Helper</span>
          </NuxtLink>
        </div>
      </slot>

      <slot name="center">
        <div class="flex justify-center">
          <nav class="flex items-center justify-center gap-4">
            <NuxtLink
              to="/"
              class="hover:text-gray-900 dark:hover:text-white"
            >
              Home
            </NuxtLink>
            <span class="text-gray-500">|</span>
            <NuxtLink
              to="/math"
              class="hover:text-gray-900 dark:hover:text-white"
            >
              Math
            </NuxtLink>
            <span class="text-gray-500">|</span>
            <NuxtLink
              to="/about"
              class="hover:text-gray-900 dark:hover:text-white"
            >
              About
            </NuxtLink>
          </nav>
        </div>
      </slot>

      <slot name="right">
        <div class="flex">
          <div class="mr-2">
            <ColorMode />
          </div>
          <UButton
            to="https://github.com/daodao-bot/helper-web"
            color="gray"
            variant="ghost"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
          />
        </div>
      </slot>
    </UContainer>
    <UDivider />
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
