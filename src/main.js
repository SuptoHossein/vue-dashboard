import { createApp } from 'vue'
import 'vue3-toastify/dist/index.css'
import App from './App.vue'
import router from './router/router'

createApp(App).use(router).mount('#app')
