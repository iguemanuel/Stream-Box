<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  rating: number
}>()

const numberStars = Math.round(props.rating / 2)

const fullStars: any[] = []
const emptyStars: any[] = []

for (let i = 0; i < 5; i++) {
  if (i < numberStars) {
    fullStars.push(i)
  } else {
    emptyStars.push(i)
  }
}
</script>
<template>
  <div>
    <box-icon
      v-for="i in fullStars"
      :key="'full-' + i"
      type="solid"
      name="star"
      color="gold"
    ></box-icon>

    <box-icon v-for="i in emptyStars" :key="'empty-' + i" name="star" color="gray"></box-icon>
  </div>
</template>
