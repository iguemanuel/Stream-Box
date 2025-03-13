<script setup lang="ts">
import StarRatingComponent from './StarRatingComponent.vue'
import { defineProps, computed } from 'vue'

const props = defineProps<{
  id: number
  title: string
  posterPath: string
  vote_average: number
}>()

const truncatedTitle = computed(() => {
  return props.title.length > 20 ? props.title.substring(0, 20) + '...' : props.title
})
</script>

<template>
  <div class="card">
    <div class="relative">
      <img
        class="w-full"
        :src="`https://image.tmdb.org/t/p/w500/${posterPath}`"
        alt="Capa do filme"
      />
      <div class="absolute bottom-0 w-full h-20 bg-gray-900 opacity-90 radius rounded-sm">
        <div class="px-6 py-4">
          <!-- Usa o título truncado -->
          <p class="absolute font-bold text-xl mb-2 bottom-3 left-3">{{ truncatedTitle }}</p>
        </div>
        <StarRatingComponent :rating="vote_average" class="absolute bottom-10 left-3" />
      </div>
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
  min-height: 300px;
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
  object-position: center;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}
</style>
