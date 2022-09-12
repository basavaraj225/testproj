import { createRouter, createWebHistory } from 'vue-router'
import username from '@/components/username.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'username',
      component: username
    },

  ]
})

export default router
