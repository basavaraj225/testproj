import * as Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/main.css'


const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)

app.mount('#app')
