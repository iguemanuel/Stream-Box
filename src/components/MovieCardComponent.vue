<script setup lang="ts">
defineProps<{
  id: number
  title: string
  posterPath: string
  overview: string
}>()
</script>

<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 rounded-lg"
    style="padding: 1rem; margin: 1rem"
  >
    <img
      class="w-full"
      :src="`https://image.tmdb.org/t/p/w500/${posterPath}`"
      alt="Capa do filme"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p class="text-gray-300 text-base">
        {{ overview || 'Sem descrição disponível.' }}
      </p>
    </div>
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
