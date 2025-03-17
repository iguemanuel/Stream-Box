<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import { api, apiKey, endPoints } from '@/services/ApiConfig'
import MovieModel from '@/model/Movie'

const topRatedMovies = ref<MovieModel[]>([])
const selectedCategory = ref<number>(28) // Inicia com o gênero de Ação (ID: 28)

// Função para buscar os filmes por categoria
const getTopRatedMoviesByCategory = async (genreId: number) => {
  try {
    const response = await api.get(endPoints.topRated, {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        sort_by: 'vote_average.desc',
        with_genres: genreId,
        vote_count_gte: 100,
      },
    })

    console.log(`Filmes do gênero ${genreId}:`, response.data.results)
    return response.data.results.slice(0, 4)
  } catch (error) {
    console.error(`Erro ao buscar filmes do gênero ${genreId}:`, error)
    return []
  }
}

// Função para alterar a categoria
const changeCategory = async (genreId: number) => {
  selectedCategory.value = genreId
  topRatedMovies.value = await getTopRatedMoviesByCategory(genreId)
}

onMounted(async () => {
  topRatedMovies.value = await getTopRatedMoviesByCategory(selectedCategory.value)
})
</script>

<template>
  <div>
    <CarouselComponent />

    <h2 class="text-2xl font-bold text-center mt-6">Melhores Filmes</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-8">
      <CardComponent
        v-for="movie in topRatedMovies"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title"
        :posterPath="movie.poster_path"
        :vote_average="movie.vote_average"
        :overview="movie.overview || 'Sem descrição'"
      />
    </div>
  </div>
</template>

<style scoped></style>
