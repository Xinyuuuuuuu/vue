<template>
    <Basurto></Basurto>
    <h1>servicios publicos</h1>
    <div>
   <h2>filtra por servicio</h2>
        <input type="text" name="" id="" v-model="busqueda">
   </div>
   
   <h3>{{ titulo }}</h3>
   <table>
    <tr>
        <th>icono</th>
        <th>Servicio</th>
        <th>Pabellon</th>
        <th>fav</th>

    </tr>
    <tr v-for="servicio in serviciosFiltrados"  v-show="servicio.MOSTRAR==1">
        
        <td>
        <img :src="'../../src/assets/iconos/' + servicio.ICONO" width="20" height="20" alt="" > 
        
        </td>
        <td>{{ servicio.SERVICIO }}</td>
        <td>{{ servicio.ENTRADA }}</td>
        <td>
            <a @click="marcarfavorito(servicio)">
            <img v-show="!servicio.clicked" src="../../src/assets/corazon-vacio.png" width="20" height="20" alt="">
            <img v-show="servicio.clicked" src="../../src/assets/corazon-lleno.png" width="20" height="20" alt=""> 
            </a>
        </td>
    
    </tr>


   </table>


</template>
<script>

import Basurto from "@/components/Basurto.vue"
import axios from "axios";

import { useFavoritos } from '../stores/favoritos';
import { mapWritableState, mapActions } from "pinia";
export default{
    data() {
        return {
            titulo: "Todos los servicios",    
            listarservicios: [],
            busqueda:"",
            
        };
    },
    methods: {
        marcarfavorito(servicio){
            this.clicked=true;
        
            this.numeroFavoritos=this.numeroFavoritos+1
            alert(this.numeroFavoritos)
            anadirFavoritos(servicio)

        },

        ...mapActions(useFavoritos,["anadirFavoritos"]), 
    },
    mounted() {
        axios.get('../../src/js/basurto.json').then((response) => {
            console.log(response.data);
            this.listarservicios = response.data;
            
        });
           
    },
    computed:{
        serviciosFiltrados() {
            return this.listarservicios.filter(servicio =>servicio.SERVICIO.toLowerCase().includes(this.busqueda.toLowerCase()));
        },
        ...mapWritableState(useFavoritos,["numeroFavoritos","favoritos"])
    },
    components: { Basurto }
}


</script>

<style scoped>
h1,h2{
    text-align:center;
}

table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  text-align: center;
  margin-top:20px;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
  
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04AA6D;
  color: white;
  font-weight: bolder;
}



</style>




