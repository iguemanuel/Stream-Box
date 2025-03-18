<script setup lang="ts">
import { computed } from 'vue'

// Definição das props
const props = defineProps<{
  rating: number
}>()

// Cálculo da quantidade de estrelas cheias e vazias
const numberStars = computed(() => Math.round(props.rating / 2))

const fullStars = computed(() => Array(numberStars.value).fill(0))
const emptyStars = computed(() => Array(5 - numberStars.value).fill(0))
</script>

<template>
  <div>
    <!-- Estrelas cheias -->
    <i
      v-for="(star, index) in fullStars"
      :key="'full-' + index"
      class="bx bxs-star text-yellow-400"
    ></i>

    <!-- Estrelas vazias -->
    <i
      v-for="(star, index) in emptyStars"
      :key="'empty-' + index"
      class="bx bx-star text-gray-300"
    ></i>
  </div>
</template>

<style scoped>
.bx {
  font-size: 1.5rem;
}
</style>
