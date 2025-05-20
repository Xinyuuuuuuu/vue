<template>
    <Basurto />

    <div class="cuadro-pabellon">
        <h3>Servicios por pabellon</h3>
        <select v-model="filtroTipo">
            <option value="">Todos</option>
            <option v-for="tipo in tiposUnicos" :key="tipo" :value="tipo">
                {{ tipo }}
            </option>

        </select>
        <ul>
            <li v-for="(entrada, index) in serviciosFiltrado" :key="index">
                <img :src="`/src/assets/${entrada.ICONO}`" alt="icono" width="20" style="margin-right: 5px;" />
                {{ entrada.SERVICIO }}
               
            </li>
        </ul>
    </div>
</template>

<script setup>
import Basurto from '@/components/Basurto.vue'

import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const servicios = ref([])
const filtroTipo = ref('')

onMounted(async () => {
    const res = await axios.get('basurto.json')
    servicios.value = res.data
})

//COMPUTED
const tiposUnicos = computed(() => {
  const tipos = servicios.value.map(p => p.ENTRADA)
  return [...new Set(tipos)]
})

const serviciosFiltrado = computed(() =>{
    return filtroTipo.value 
    ? servicios.value.filter(p => p.ENTRADA === filtroTipo.value) 
    : servicios.value
})
</script>

<style scoped>
.cuadro-pabellon {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}
</style>