import { defineStore } from 'pinia';

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    productos: [],
    pu: 0.00,
    pt: 0.00
  }),
  actions: {
    añadirAlCarrito(producto) {
      const productoExistente = this.productos.find(item => item.articulo === producto.articulo);
      if (productoExistente) {
        productoExistente.unidades += 1;
      } else {
        this.productos.push({ ...producto, unidades: 1 });
      }
      this.actualizarPrecioTotal();
    },
    actualizarPrecioTotal() {
      this.pt = this.productos.reduce((total, producto) => {
        return total + producto.precio * producto.unidades;
      }, 0);
    }
  }
});
