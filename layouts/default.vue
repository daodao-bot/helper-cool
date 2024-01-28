<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <AppMain>
      <template #center>
        <slot />
      </template>
    </AppMain>
    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
