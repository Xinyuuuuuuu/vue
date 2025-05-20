<template>
    <div>
        <h1 class="titulo">CRUD DE POKEMONS</h1>

        <h2>Filtrar Pokemons</h2>
        <div>
            <select v-model="filtroTipo">
                <option value="">Todos</option>
                <option v-for="tipo in tiposUnicos" :key="tipo" :value="tipo">
                    {{ tipo }}
                </option>

            </select>
        </div>

        <table class="tabla">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Habilidad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- v-for="(valor, clave) in lista"
                valor: el elemento actual del array 
                clave o index: la posición en el array (0, 1, 2...) 
                lista: el array  -->
                <tr v-for="(pokemon, index) in pokemonsFiltrados" :key="index">
                    <td>{{ pokemon.name }}</td>
                    <td>{{ pokemon.type }}</td>
                    <td>{{ pokemon.ability }}</td>
                    <td>
                        <button class="boton-eliminar" @click="eliminarPokemon(index)">✖</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <h2>Añadir Pokémon</h2>
<div class="formulario">
  <label>
    Nombre:
    <input v-model="nuevoPokemon.name" />
  </label>

  <label>
    Tipo:
    <input v-model="nuevoPokemon.type" />
  </label>

  <label>
    Habilidad:
    <input v-model="nuevoPokemon.ability" />
  </label>

  <!-- No necesita prevent porque no es un form -->
  <button class="boton-agregar" @click="añadirPokemon">＋</button>
</div>

       

    </div>
</template>


<script>
import axios from 'axios' //lo necesitamos cuando extraemos datos de un .json

export default {
    name: 'PokemonsView',
    data() {
        return {
            pokemons: [],
            filtroTipo: '',//tipo seleccionado
            nuevoPokemon: {
                name: '',
                type: '',
                ability: ''
            }
        }
    },
    created() {
        axios.get('pokemons.json')//sin ruta completa
            .then(response => {
                this.pokemons = response.data.results//se guarda el array del .json en results dentro de la variable pokemons
            })
            .catch(error => {
                console.error('Error al cargar pokemons:', error)
            })
    },
    //methods: funciones normales que se ejecutan cuadno lo llamas, no se almacenan en el caché.
    //(añadir, eliminar, validar...)
    methods: {
        eliminarPokemon(index) {
            // array.splice(inicio, cantidad, elemento1, elemento2, ...)
            // array.splice(1, 0, evee,) si lo que queremos es añadir uno
            this.pokemons.splice(index, 1)
        },
        añadirPokemon() {
            if (this.nuevoPokemon.name && this.nuevoPokemon.type && this.nuevoPokemon.ability) {
                this.pokemons.push({ ...this.nuevoPokemon })// ... COPIA el objeto nuevoPokemon al array pokemons, 
                //sin ellos se añadiría la referencia pudiendo modificar el nuevo pokemon de la tabla si sigue escribiendo 
                // Limpiar campos
                this.nuevoPokemon.name = ''
                this.nuevoPokemon.type = ''
                this.nuevoPokemon.ability = ''
            }
        }
    },
    //computed: es una variable, se calcula un valor automaticamente a partir de otras variables, lo almacena en el caché.
    //(filtrar, transformar, mostrar...)
    computed: {
        tiposUnicos() {
            const tipos = this.pokemons.map(p => p.type)
            return [...new Set(tipos)]
        },
        pokemonsFiltrados() {
            return this.filtroTipo
                ? this.pokemons.filter(p => p.type === this.filtroTipo)
                : this.pokemons
        }
    }

}

</script>

<!-- Versión mas moderna -->
<!-- <script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

// ARRAY DE POKEMONS (reactivo)
const pokemons = ref([])

// FILTRO
const filtroTipo = ref('')

// NUEVO POKEMON
const nuevoPokemon = ref({
  name: '',
  type: '',
  ability: ''
})

// CARGAR JSON AL INICIAR (sustituye created())
onMounted(() => {
  axios.get('pokemons.json')
    .then(res => {
      pokemons.value = res.data.results
    })
    .catch(err => {
      console.error('Error al cargar pokemons:', err)
    })
})

// FUNCIONES
function eliminarPokemon(index) {
  pokemons.value.splice(index, 1)
}

function añadirPokemon() {
  if (nuevoPokemon.value.name && nuevoPokemon.value.type && nuevoPokemon.value.ability) {
    pokemons.value.push({ ...nuevoPokemon.value })
    // Limpiar el formulario
    nuevoPokemon.value.name = ''
    nuevoPokemon.value.type = ''
    nuevoPokemon.value.ability = ''
  }
}

// PROPIEDADES COMPUTADAS
const tiposUnicos = computed(() => {
  const tipos = pokemons.value.map(p => p.type)
  return [...new Set(tipos)]
})

const pokemonsFiltrados = computed(() => {
  return filtroTipo.value
    ? pokemons.value.filter(p => p.type === filtroTipo.value)
    : pokemons.value
})
</script> -->

<style scoped>
.titulo {
    text-align: center;
    background-color: #ff7f50;
    color: white;
    padding: 10px;
    font-size: 24px;
    font-weight: bold;
}

.tabla {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.tabla th,
.tabla td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
}

.boton-eliminar {
    background-color: #e74c3c;
    border: none;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
}

.boton-eliminar:hover {
    background-color: #c0392b;
}

.formulario {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    font-weight: bold;
}

.formulario input {
    padding: 5px;
    border: 1px solid #ccc;
}

.boton-agregar {
    background-color: #2ecc71;
    color: white;
    font-weight: bold;
    border: none;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
}

.boton-agregar:hover {
    background-color: #27ae60;
}
</style>
  