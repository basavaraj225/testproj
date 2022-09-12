import { createRouter, createWebHistory } from 'vue-router'
import username from '@/components/username.vue'
import userlist from '@/components/userlist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'username',
      component: username
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: userlist
    }
  ]
})

export default router
