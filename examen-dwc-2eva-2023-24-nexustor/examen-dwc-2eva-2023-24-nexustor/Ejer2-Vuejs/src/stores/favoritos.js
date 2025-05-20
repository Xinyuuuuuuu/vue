import { defineStore } from 'pinia'
export const useFavoritos = defineStore('favoritos', {
    state: () => {
        return {
            numeroFavoritos:0,
            favoritos:[],
            
        };
    },
    getters: {
      
    },
    actions: {
      anadirFavoritos(){
        this.favoritos.push(servicio)
        this.numeroFavoritos++
      },
      eliminarFavoritos(){
        this.favoritos.pop(servicio);
        this.numeroFavoritos--;
      }
  
    },
  })