<script setup lang="ts"></script>

<template>
  <main>
    <UContainer class="mt-8">
      <slot name="left" />
      <slot name="center" />
      <slot name="right" />
    </UContainer>
  </main>
</template>

<style scoped></style>
