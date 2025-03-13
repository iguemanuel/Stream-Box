import HomeView from '@/views/HomeView.vue'
import ReleasesView from '@/views/ReleasesView.vue'
import SeriesView from '@/views/SeriesView.vue'
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
      path: '/releases',
      component: ReleasesView,
    },
    {
      path: '/series',
      component: SeriesView,
    },
  ],
})

export default router
