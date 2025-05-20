<template>
    <div class="servicios-publicos">
        <!-- Despues de importar el COMPONENTE lo agragamos asi -->
        <Basurto />

        <!-- Cuadro favoritos -->
        <CuadroFavoritos />


        <!-- Filtro -->
        <div class="filtro-servicio">
            <h3>Filtrar por servicio</h3>
            <input type="text" v-model="filtro" placeholder="Buscar..." />
        </div>

        <!-- Tabla -->
        <h3>Todos los servicios</h3>
        <table>
            <thead>
                <tr>
                    <th>Icono</th>
                    <th>Servicio</th>
                    <th>Pabellón</th>
                    <th>Fav</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(servicio, index) in serviciosFiltrados" :key="index">
                    <!-- Las IMAGENES se cargan desde assets con esta sintaxis -->
                    <td><img :src="`/src/assets/${servicio.ICONO}`" alt="icono" width="30" /></td>
                    <td>{{ servicio.SERVICIO }}</td>
                    <td>{{ servicio.ENTRADA }}</td>
                    <td>
                        <span @click="toggleFavorito(servicio)" style="cursor:pointer;">
                            <span v-if="esFavorito(servicio)">❤️</span>
                            <span v-else>🤍</span>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script setup>
//Esta es la manera de usar COMPONENTE, la importamos desde su ruta
import Basurto from '@/components/Basurto.vue'
import CuadroFavoritos from '@/components/CuadroFavoritos.vue'


//Importar AXIOS para usar el .json
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

//importar STORE
import { useFavoritosStore } from '@/stores/favoritos.js'

//variables reactivas (data(){ RETURN{ })
const servicios = ref([])
const filtro = ref('')
const store = useFavoritosStore() //definir la variable STORE

//Carga de datos (CREATED())
onMounted(async () => {
    const res = await axios.get('basurto.json')
    servicios.value = res.data.filter(s => s.MOSTRAR === 1)
})

//Variables COMPUTED
const serviciosFiltrados = computed(() => {
    const texto = filtro.value.toLowerCase()
    return servicios.value.filter(s => s.SERVICIO.toLowerCase().includes(texto))
})

//METHODS o funciones, al ser cortas usamos const en vez de function 
const toggleFavorito = (servicio) => {
    if (esFavorito(servicio)) {
        store.eliminarFavoritos(servicio)
    } else {
        store.anadirFavoritos(servicio)
    }
}

//devuelve true o false
const esFavorito = (servicio) => {
    //store.favoritos es el array de favoritops que hay en el archovo store favoritos.js
    //some devuelve true si al menos un elemento cumple la condición
    return store.favoritos.some(f => f.SERVICIO === servicio.SERVICIO)
}

//Si queremos hacer algo mas dentro del bucle
// const esFavorito = (servicio) => {
//     for (const f of store.favoritos) {
//     if (f.SERVICIO === servicio.SERVICIO) {
//       return true
//     }
//   }
//   return false
// }
</script>
  
<style scoped>
.servicios-publicos {
    padding: 1rem;
}

.cuadro-favoritos,
.filtro-servicio {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

th,
td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: left;
}
</style>
  