import { createRouter, createWebHistory } from 'vue-router'
import TradingView from '../components/view/TradingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TradingView
    }
  ]
})

export default router
