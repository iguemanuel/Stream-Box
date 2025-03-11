import HomeView from '@/views/HomeView.vue'
import PopularMoviesView from '@/views/PopularMoviesView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/popular',
      name: 'popular',
      component: PopularMoviesView,
    },
  ],
})

export default router
