<script setup lang="ts">
import StarRatingComponent from './StarRatingComponent.vue'
import { defineProps } from 'vue'

defineProps<{
  id: number
  title: string
  posterPath: string
  vote_average: number
}>()
</script>

<template>
  <div class="card">
    <div class="relative">
      <!-- Estrelas sobre a imagem -->
      <img
        class="w-full"
        :src="`https://image.tmdb.org/t/p/w500/${posterPath}`"
        alt="Capa do filme"
      />
      <div class="px-6 py-4">
        <p class="absolute font-bold text-xl mb-2 bottom-3 left-3">{{ title }}</p>
      </div>
      <StarRatingComponent :rating="vote_average" class="absolute bottom-8 left-3" />
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  margin: 0.5rem;
}

img {
  width: 100%;
  border-radius: 1rem;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}
</style>
