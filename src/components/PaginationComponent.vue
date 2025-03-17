<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  currentPage: Number,
  totalPages: Number,
})

const emit = defineEmits(['prevPage', 'nextPage'])
</script>

<template>
  <div class="box flex justify-center gap-4 mt-6">
    <button
      @click="emit('prevPage')"
      :disabled="currentPage === 1"
      class="button px-4 py-2 bg-orange-700 text-white rounded disabled:opacity-50"
    >
      Página Anterior
    </button>

    <span class="text-lg font-semibold">Página {{ currentPage }} de {{ totalPages }}</span>

    <button
      @click="emit('nextPage')"
      :disabled="currentPage === totalPages"
      class="button px-4 py-2 bg-orange-700 text-white rounded disabled:opacity-50 hover:bg-orange-600 transition-all"
    >
      Proxima Página
    </button>
  </div>
</template>
<style>
.box {
  margin: 1rem 0 1rem 0;
  align-items: center;
}
.button {
  cursor: pointer;
  padding: 1rem;
  border-radius: 1rem;
}
</style>
