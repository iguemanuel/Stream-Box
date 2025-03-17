<script lang="ts" setup>
import { api, apiKey, endPoints } from '@/services/ApiConfig'
import { ref, onMounted } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import SerieModel from '@/model/Serie'
import PaginationComponent from '@/components/PaginationComponent.vue'

const series = ref<SerieModel[]>([])
const currentPage = ref(1)
const totalPages = ref(1)

const getSeries = async (page = 1) => {
  try {
    const response = await api.get(endPoints.series, {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        page,
      },
    })

    series.value = response.data.results.map((serie: any) => new SerieModel(serie)) || []
    totalPages.value = response.data.total_pages
    currentPage.value = page // Atualiza a página atual
  } catch (error) {
    console.error('Erro ao buscar séries:', error)
  }
}

onMounted(() => {
  getSeries()
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    getSeries(currentPage.value + 1)
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    getSeries(currentPage.value - 1)
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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-8">
      <CardComponent
        v-for="serie in series"
        :key="serie.id"
        :id="serie.id"
        :title="serie.originalTitle || serie.title"
        :posterPath="serie.backdropPath"
        :vote_average="serie.voteAverage"
        :rating="serie.voteAverage"
        :overview="serie.overview"
      />
    </div>
    <PaginationComponent
      :currentPage="currentPage"
      :totalPages="totalPages"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
  </div>
</template>
