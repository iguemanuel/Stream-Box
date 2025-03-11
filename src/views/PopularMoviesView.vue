<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api, endPoints, apiKey } from '@/services/ApiConfig.ts'
import MovieCardComponent from '@/components/MovieCardComponent.vue'

const movies = ref([])

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
    <h1>Filmes Populares</h1>
    <div class="movies-container">
      <MovieCardComponent
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title || movie.name || 'Sem Nome'"
        :posterPath="movie.poster_path || ''"
        :overview="movie.overview"
      />
    </div>
  </div>
</template>

<style scoped>
.movies-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
