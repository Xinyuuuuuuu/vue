<template>
<Basurto />

<div class="cuadro-favoritos">
    <h3>Tienes {{ store.numeroFavoritos }} favoritos</h3>
     
    <ul>
        <li v-for="(fav, index) in store.favoritos" :key="index">
            <img :src="`/src/assets/${fav.ICONO}`" alt="icono" width="20" style="margin-right: 5px;" />
            {{ fav.SERVICIO }}
             <span class="eliminar" @click="store.eliminarFavoritos(fav)">❌</span>
        </li>
    </ul>
</div>
</template>

<script setup>
import Basurto from '@/components/Basurto.vue'
//importar STORE
import { useFavoritosStore } from '@/stores/favoritos.js'

const store = useFavoritosStore()

</script>


<style scoped>
.favoritos-view {
  padding: 1rem;
}

.cuadro-favoritos {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.eliminar {
  color: white;
  background-color: red;
  border-radius: 50%;
  padding: 0.2rem 0.4rem;
  margin-left: 0.5rem;
  cursor: pointer;
  font-weight: bold;
}
</style>