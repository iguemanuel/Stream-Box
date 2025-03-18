<script setup lang="ts">
import StarRatingComponent from './StarRatingComponent.vue'
import { computed, ref } from 'vue'
import { useFavoriteStore } from '@/stores/favoriteStore'

const store = useFavoriteStore()

const props = defineProps<{
  id: number
  title: string
  posterPath: string
  vote_average: number
  overview: string
}>()

const showDetails = ref(false)

console.log('Props do Card:', props)

const toggleFavorite = () => {
  console.log('Clicado no favorito:', props.id)
  if (!props.id) {
    console.error('Erro: ID indefinido no CardComponent')
    return
  }

  const isFav = store.isFavorite(props.id)
  if (isFav) {
    store.removeFavorite(props.id)
  } else {
    store.addFavorite({
      id: props.id,
      title: props.title,
      poster_path: props.posterPath,
      vote_average: props.vote_average,
      overview: props.overview,
    })
  }
}

// Truncar título longo
const truncatedTitle = computed(() => {
  return props.title.length > 20 ? props.title.substring(0, 20) + '...' : props.title
})

// Computar se o filme é favorito
const isFavorite = computed(() => store.isFavorite(props.id))
</script>

<template>
  <div class="card" @mouseenter="showDetails = true" @mouseleave="showDetails = false">
    <div class="relative">
      <img
        class="w-full transition-opacity duration-300"
        :class="{ 'opacity-60': showDetails }"
        :src="`https://image.tmdb.org/t/p/w500/${posterPath}`"
        alt="Capa do filme"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300"
        :class="{ 'opacity-100': showDetails, 'opacity-0': !showDetails }"
      ></div>

      <!-- Ícone de Favorito -->
      <button
        @click="toggleFavorite"
        class="absolute top-3 right-3 text-3xl transition-all duration-300 py-2 px-4 rounded-full text-black"
      >
        <i :class="isFavorite ? 'bx bx-bookmark' : 'bx bx-bookmark-alt'" />
      </button>

      <!-- Título e rating -->
      <div class="absolute bottom-0 w-full p-4 text-white">
        <p class="font-bold text-lg">{{ truncatedTitle }}</p>
        <StarRatingComponent :rating="vote_average" />
      </div>

      <div
        v-if="showDetails"
        class="absolute inset-0 flex items-center justify-center text-white px-4 text-sm text-center"
      >
        <p>{{ props.overview || 'Descrição indisponível' }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  margin: 0.5rem;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

img {
  min-height: 300px;
  max-height: 600px;
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
  object-position: center;
}

button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10; /* Garante que fique acima de outros elementos */
  cursor: pointer;
  border: none;
  padding: 8px;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;
}

button:hover {
  transform: scale(1.1);
}
</style>
