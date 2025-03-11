<script setup lang="ts">
defineProps<{
  id: number
  title: string
  posterPath: string
  overview: string
}>()
</script>

<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <img :src="`https://image.tmdb.org/t/p/w500/${posterPath}`" alt="Capa do Filme" />
    <p>{{ overview || 'Sem descrição disponível.' }}</p>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}
img {
  width: 100%;
  border-radius: 1rem;
}
</style>
