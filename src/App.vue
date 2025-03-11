<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <div class="flex justify-center w-full">
    <RouterView />
  </div>
</template>

<style scoped></style>
