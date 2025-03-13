<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api, endPoints, apiKey } from '@/services/ApiConfig.ts'
import MovieCardComponent from '@/components/CardComponent.vue'
import { useRatingStore } from '@/stores/ratingStore.ts'
import MovieModel from '@/model/Movie'

const movie = MovieModel

const ratingStore = useRatingStore()
const movies = ref<MovieModel[]>([])

const getMovies = async () => {
  try {
    const response = await api.get(endPoints.movies, {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
      },
    })

    console.log('Filmes:', response.data.results)
    movies.value = response.data.results || []

    // Definir a média dos ratings no Pinia
    const averageRating =
      movies.value.reduce((sum, movie) => sum + movie.vote_average, 0) / movies.value.length || 0
    ratingStore.setRating(averageRating)
  } catch (error) {
    console.error('Erro ao buscar filmes:', error)
  }
}

onMounted(() => {
  getMovies()
})
</script>
<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-8">
      <MovieCardComponent
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title || movie.name || 'Sem Nome'"
        :posterPath="movie.poster_path || ''"
        :vote_average="movie.vote_average"
        :rating="movie.vote_average"
        :overview="movie.overview || 'Descrição indisponível'"
      />
    </div>
  </div>
</template>
