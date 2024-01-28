<script setup lang="ts"></script>

<template>
  <main>
    <UContainer class="mt-8">
      <slot name="left"></slot>
      <slot name="center"></slot>
      <slot name="right"></slot>
    </UContainer>
  </main>
</template>

<style scoped></style>
