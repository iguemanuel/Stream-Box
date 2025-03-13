<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="container">
    <h2>{{ title }}</h2>
  </div>
</template>

<style>
.container {
  display: flex;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-primary);
}
</style>
