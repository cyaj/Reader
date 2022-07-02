import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'

import 'normalize.css'
import 'amfe-flexible'
import 'vant/lib/index.css'


createApp(App).use(router).use(Vant).mount('#app')
