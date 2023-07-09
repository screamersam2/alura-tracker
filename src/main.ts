import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import routers from './router'
import { key, store } from './store'

createApp(App).use(routers).use(store, key).mount('#app')
