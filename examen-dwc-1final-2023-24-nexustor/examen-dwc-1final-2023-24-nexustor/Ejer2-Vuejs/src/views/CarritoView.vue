<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Artículo</th>
          <th>Unidades</th>
          <th>Precio Unitario</th>
          <th>Precio Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productos" :key="producto.articulo">
          <td>{{ producto.articulo }}</td>
          <td>{{ producto.unidades }}</td>
          <td>{{ producto.precio }}</td>
          <td>{{ producto.precio * producto.unidades }}</td>
        </tr>
      </tbody>
    </table>
    <p>Total:  {{ pt}}€</p>
    <!-- <button @click="añadirProducto({ articulo: 'Producto A', precio: 10 })">Añadir Producto A</button> -->
  </div>
</template>

<script>
import { useCarritoStore } from '../stores/carrito';

export default {
  name: 'CarritoComponent',
  data() {
    return {
      carrito: null
    };
  },
  computed: {
    productos() {
      return this.carrito ? this.carrito.productos : [];
    },
    pt() {
      return this.carrito ? this.carrito.pt : 0.00;
    }
  },
  methods: {
    añadirProducto(producto) {
      if (this.carrito) {
        this.carrito.añadirAlCarrito(producto);
      }
    }
  },
  created() {
    this.carrito = useCarritoStore();
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
  