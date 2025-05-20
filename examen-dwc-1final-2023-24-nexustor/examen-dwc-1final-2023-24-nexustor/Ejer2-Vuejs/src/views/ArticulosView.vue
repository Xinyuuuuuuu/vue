<template>
  <div>
    <h1>Artículos</h1>
    <p v-if="isAuthenticated">Compras de {{ currentUser }}</p>
    <!-- Contenido de la página de artículos -->
  </div>
  <hr>
  <h3>Busquedas</h3>
  <label for="categorias">Categorias</label>
  <input type="checkbox" id="categorias" v-model="checked">&nbsp; 
  <label for="precio">Precio</label>
  <input type="checkbox" id="precio" v-model="checkeado">
  <div v-if="checked">
    <h2>Filtrar por categorias</h2>
    <select v-model="seleccionar">
      <option v-for="categoria in listarcategorias" :key="categoria">{{categoria}}</option>
    </select>
  </div>
  <div v-if="checkeado">
    <h2>Filtrar por precio</h2>
    <label for="precio">Precio entre 0 y 1000</label>
    <input type="range" id="precio" min="0" max="1000" v-model="precio">
    <small>{{ precio }}</small>
  </div>

  <hr>
  <h1>Listado de articulos</h1>  
  
  <table> 
    <tr>
      <th>Articulo</th>
      <th>Categoria</th>
      <th>Descripcion</th>
      <th>Imagen</th>
      <th>Precio</th>
      <th>Comprar</th>
    </tr>
    <tr v-for="producto in filtrarProductos" :key="producto.id">
      <td>{{ producto.title }}</td> 
      <td>{{ producto.category }}</td>
      <td>{{ producto.description }}</td>
      <td><img :src="producto.image" width="50" height="50" alt=""></td>
      <td>{{ producto.price }}</td>
      <td><button @click="añadirProductoAlCarrito(producto)">Añadir al carrito</button></td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import { mapState,mapActions } from 'pinia';
import { useAuthStore } from '../stores/auth';
import { useCarritoStore } from '../stores/carrito';

export default {
  data() {
    return {
      listarproductos: [],
      listarcategorias: [],
      seleccionar: "",
      precio: 1000,
      checked: false,
      checkeado: false
    };
  },
  methods: {
    ...mapActions(useCarritoStore, ['añadirAlCarrito']),
    
      añadirProductoAlCarrito(producto) {
      this.añadirAlCarrito({
        articulo: producto.title,
        precio: producto.price,
        unidades: 1
      });
      console.log(`Añadido al carrito: ${producto.title}`);
    }
  },
  mounted() {
    axios.get('/json/products.json').then((response) => {
      this.listarproductos = response.data; 
      console.log(this.listarproductos);    
    });

    axios.get('/json/categories.json').then((response) => {
      this.listarcategorias = response.data; 
      console.log(this.listarcategorias);    
    });
  },
  computed: {
    filtrarProductos() {
      return this.listarproductos.filter(producto => {
        let pasaFiltroCategoria = !this.checked || producto.category.includes(this.seleccionar);
        let pasaFiltroPrecio = !this.checkeado || producto.price <= this.precio;
        return pasaFiltroCategoria && pasaFiltroPrecio;
      });
    },
    ...mapState(useAuthStore, ['isAuthenticated', 'currentUser']),
    ...mapState(useCarritoStore, ['productos'])
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: #04AA6D;
  color: white;
}
</style>
