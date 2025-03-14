<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiperContainer = ref(null)
let swiperInstance = null

const slides = ref([
  '/src/assets/img/cars.jpg',
  '/src/assets/img/batman.jpg',
  '/src/assets/img/spider-man.jpeg',
])

onMounted(() => {
  swiperInstance = new Swiper(swiperContainer.value, {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  })
})

onUnmounted(() => {
  if (swiperInstance) {
    swiperInstance.destroy()
  }
})
</script>

<template>
  <div class="w-full relative">
    <div ref="swiperContainer" class="swiper progress-slide-carousel swiper-container relative">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
          <img :src="slide" :alt="'Slide ' + (index + 1)" class="w-full h-125 object-cover" />
        </div>
      </div>
      <!-- Paginação -->
      <div class="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
    </div>
  </div>
</template>
