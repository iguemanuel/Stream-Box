import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRatingStore = defineStore('rating', () => {
  const rating = ref(0)

  function setRating(value: number) {
    rating.value = value
  }

  return { rating, setRating }
})
