<template>
<div class="cuadro-favoritos">
    <h3>Favoritos</h3>
    <p>Tienes {{ store.numeroFavoritos }} favoritos</p>
    <ul>
        <li v-for="(fav, index) in store.favoritos" :key="index">
            <img :src="`/src/assets/${fav.ICONO}`" alt="icono" width="20" style="margin-right: 5px;" />
            {{ fav.SERVICIO }}
        </li>
    </ul>
</div>
</template>

<script setup>
import  {useFavoritosStore} from '@/stores/favoritos.js'
const store = useFavoritosStore() //definir la variable STORE
</script>

<style scoped>
.cuadro-favoritos {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}
</style>