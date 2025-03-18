import '@/styles/index.css'
import 'boxicons/css/boxicons.min.css'
import 'boxicons'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
