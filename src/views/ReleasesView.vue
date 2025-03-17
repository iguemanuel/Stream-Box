<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api, endPoints, apiKey } from '@/services/ApiConfig.ts'
import MovieCardComponent from '@/components/CardComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import { useRatingStore } from '@/stores/ratingStore.ts'
import MovieModel from '@/model/Movie'

const ratingStore = useRatingStore()
const movies = ref<MovieModel[]>([])
const currentPage = ref(1)
const totalPages = ref(1)

const getMovies = async (page = 1) => {
  try {
    const response = await api.get(endPoints.movies, {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        page: page,
      },
    })

    movies.value = response.data.results || []
    totalPages.value = response.data.total_pages
    currentPage.value = page

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

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    getMovies(currentPage.value + 1)
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    getMovies(currentPage.value - 1)
  }
}
</script>

<template>
  <div>
    <PaginationComponent
      :currentPage="currentPage"
      :totalPages="totalPages"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
    <!-- Grid de Filmes -->
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

    <!-- Componente de Paginação -->
    <PaginationComponent
      :currentPage="currentPage"
      :totalPages="totalPages"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
  </div>
</template>
