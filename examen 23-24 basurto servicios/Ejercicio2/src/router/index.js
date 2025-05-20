import { createRouter, createWebHistory } from 'vue-router'
import Bienvenida from '../views/Bienvenida.vue'
import TodosServiciosView from '../views/TodosServiciosView.vue'
import ServiciosPublicosView from '../views/ServiciosPublicosView.vue'
import ServiciosPabellonView from '../views/ServiciosPabellonView.vue'
import FavoritosView from '../views/FavoritosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bienvenida',
      component: Bienvenida,
    },
    {
      path: '/todosservicios',
      name: 'todosservicios',
      component: TodosServiciosView,
    },
    {
      path: '/serviciospublicos',
      name: 'serviciospublicos',
      component: ServiciosPublicosView,
    },
    {
      path: '/serviciospabellon',
      name: 'serviciospabellon',
      component: ServiciosPabellonView,
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: FavoritosView,
    },
  ],
})

export default router
