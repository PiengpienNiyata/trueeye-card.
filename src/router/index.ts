import { createRouter, createWebHistory } from 'vue-router'
import CardView from '../views/CardView.vue' // Import your CardView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cardview',
      component: CardView
    },

  ]
})

export default router
