<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <Main>
      <template #center>
        <slot />
      </template>
    </Main>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
