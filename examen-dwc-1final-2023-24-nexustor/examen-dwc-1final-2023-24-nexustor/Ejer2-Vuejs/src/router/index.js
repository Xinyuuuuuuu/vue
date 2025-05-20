import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Loginview from '@/views/Loginview.vue'
import ArticulosView from '@/views/ArticulosView.vue'
import CarritoView from '@/views/CarritoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Loginview',
      name: 'LoginviewVue',
      component: Loginview
    },
    {
      path:'/ArticulosView',
      name:'ArticulosView',
      component: ArticulosView
    },
    {
      path:'/CarritoView',
      name:'CarritoView',
      component: CarritoView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
