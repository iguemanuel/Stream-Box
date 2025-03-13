<script lang="ts" setup>
import { api, apiKey, endPoints } from '@/services/ApiConfig'
import { ref, onMounted } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import SerieModel from '@/model/Serie'

const series = ref<SerieModel[]>([])

const getSeries = async () => {
  try {
    const response = await api.get(endPoints.series, {
      params: {
        api_key: apiKey,
      },
    })

    series.value = response.data.results.map((serie: any) => new SerieModel(serie)) || []
  } catch (error) {
    console.error('Erro ao buscar séries:', error)
  }
}

onMounted(() => {
  getSeries()
})
</script>

<template>
  <div>
    <div class="flex items-center justify-center">
      <h2>Séries Populares</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-8">
      <CardComponent
        v-for="serie in series"
        :key="serie.id"
        :id="serie.id"
        :title="serie.originalTitle || serie.title"
        :posterPath="serie.backdropPath"
        :vote_average="serie.voteAverage"
        :rating="serie.voteAverage"
      />
    </div>
  </div>
</template>
