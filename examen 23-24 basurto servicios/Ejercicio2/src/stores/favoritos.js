import { defineStore } from 'pinia'

export const useFavoritosStore = defineStore('favoritos', {
  state: () => ({
    numeroFavoritos: 0,
    favoritos: []
  }),
  actions: {
    anadirFavoritos(servicio) {
      if (!this.favoritos.find(s => s.SERVICIO === servicio.SERVICIO)) {
        this.favoritos.push(servicio)
        this.numeroFavoritos++
      }
    },
    eliminarFavoritos(servicio) {
      this.favoritos = this.favoritos.filter(s => s.SERVICIO !== servicio.SERVICIO)
      this.numeroFavoritos--
    }
  }
})
