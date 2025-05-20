import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import serviciosPublicos from '../views/serviciosPublicos.vue'
import favoritos from '../views/favoritos.vue'
import serviciosPavellon from '../views/serviciosPavellon.vue'
import todosServicios from '../views/todosServicios.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todosServicios',
      name: 'todosServicios',
      component: todosServicios
    },
    {
      path: '/serviciosPublicos',
      name: 'serviciosPublicos',
      component: serviciosPublicos
    },
    {
      path: '/serviciosPavellon',
      name: 'serviciosPavellon',
      component: serviciosPavellon
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: favoritos
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
