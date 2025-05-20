<template>
    <div class="compras-page">
        <!-- Título principal -->
        <h1>Compras de {{ sesion.toUpperCase() }}</h1>
        <hr />

        <!-- Tabla de productos -->
        <h2>Productos</h2>
        <table>
            <thead>
                <tr>
                    <th>Productos</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(producto, index) in productos" :key="index">

                    <td>{{ producto.title }}</td>
                    <td>{{ producto.description }}</td>
                    <td>{{ producto.price }}</td>
                    <td>{{ producto.stock }}</td>
                    <td>
                        <button @click="comprar(producto)">Comprar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <br>

        <!-- Tabla de lista de la compra -->
        <h2>Lista de la compra de {{ sesion.toUpperCase() }}</h2>
        <table>
            <thead>
                <tr>
                    <th>Productos</th>
                    <th>Precio Unidad</th>
                    <th>Unidades Compradas</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in carrito" :key="index">
                    <td>{{ item.product.title }}</td>
                    <td>{{ item.product.price }} €</td>
                    <td>{{ item.cantidad }}</td>
                </tr>
            </tbody>
        </table>
        <h3 class="total">TOTAL COMPRA: {{ total }} €</h3>
    </div>
</template>

<script setup>
//Importar AXIOS para usar el .json
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const productos = ref([])
const carrito = ref([])

let sesion = sessionStorage.getItem('usuario')

onMounted(async () => {
    //Con mensajes de depuracion
    try {
        const res = await axios.get('products.json')
        console.log('RAW products.json →', res.data)
        //FIJARSE EN EL archivo.JSON
        //.date te da {un objeto} no un array
        //dentro de este obtero está el array products
        productos.value = res.data.products
    } catch (err) {
        console.error('Error cargando Usuarios.json', err)
    }
})

function comprar(prod) {
    // Buscar item en carrito
    const item = carrito.value.find(i => i.product.title === prod.title)

    if (item) {
        item.cantidad++
    } else {
        carrito.value.push({ product: prod, cantidad: 1 })
    }
}

// Total calculado
const total = computed(() =>
    carrito.value.reduce(
        (sum, { product, cantidad }) => sum + product.price * cantidad,
        0
    )
)

</script>

<style scoped>
.compras-page {
    margin: 2rem auto;
    padding: 1rem;
    text-align: center;
}

.compras-page h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.compras-page h2 {
    font-size: 1.4rem;
    margin: 1rem 0;
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