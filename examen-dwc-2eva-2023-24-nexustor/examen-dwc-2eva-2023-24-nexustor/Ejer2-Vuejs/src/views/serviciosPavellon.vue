<template>

<Basurto></Basurto>
<h1>Pabellon</h1>
<select name="" id="" width="50px"  v-model="seleccionar">
    <option v-for="entrada in entradasUnicas" :key="entrada" :value="entrada">{{ entrada }}</option>
    </select>
    <ul>
        <li v-for="servicio in serviciosPabellon">{{servicio.SERVICIO}}</li>
    </ul>

</template>

<script>
import Basurto from "@/components/Basurto.vue"
import axios from 'axios'
export default {
    data() {
        return {
            seleccionar:"",
            listarservicios:[]
        }
    },
    mounted() {
        axios.get('../../src/js/basurto.json').then((response) => {
            console.log(response.data);
            this.listarservicios = response.data;
            
        });
           
    },
    computed:{
        entradasUnicas() {
            const entradas = this.listarservicios.map(servicio => servicio.ENTRADA);
            return [...new Set(entradas)];
        },

        serviciosPabellon(){
            return this.listarservicios.filter(servicios=>servicios.ENTRADA.includes(this.seleccionar))
        }
    },
    components: { Basurto }
}
</script>