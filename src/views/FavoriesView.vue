<script setup lang="ts">
import { useFavoriteStore } from '@/stores/favoriteStore'
import CardComponent from '@/components/CardComponent.vue'

const store = useFavoriteStore()
const favorites = store.favorites
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Favoritos</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <CardComponent
        v-for="favorite in favorites"
        :key="favorite.id"
        :id="favorite.id"
        :title="favorite.title"
        :posterPath="favorite.poster_path"
        :vote_average="favorite.vote_average"
        :overview="favorite.overview || 'Descrição indisponível'"
      />
    </div>
  </div>
</template>
