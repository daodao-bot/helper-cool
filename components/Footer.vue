<template>
  <footer class="mt-auto">
    <UDivider icon="i-heroicons-heart" />
    <UContainer class="flex justify-between p-2">
      <slot name="left">
        <div class="flex">
          <span class="text-gray-500 dark:text-gray-400 text-sm">
            Copyright © 2024 Helper
          </span>
        </div>
      </slot>
      <slot name="center">
        <div class="flex justify-center">
          <span class="text-gray-500 dark:text-gray-400 text-sm">
            Made with ❤️ by DaoDao
          </span>
        </div>
      </slot>
      <slot name="right">
        <div class="flex">
          <UButton
            class="mr-2"
            aria-label="Helper on Gitee"
            color="gray"
            variant="ghost"
            to="https://gitee.com/daodao-bot/helper-web"
            target="_blank"
            icon="i-simple-icons-gitee"
          />
          <UButton
            aria-label="Helper on GitHub"
            color="gray"
            variant="ghost"
            to="https://github.com/daodao-bot/helper-web"
            target="_blank"
            icon="i-simple-icons-github"
          />
        </div>
      </slot>
    </UContainer>
  </footer>
</template>

<script setup lang="ts"></script>
