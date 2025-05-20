
Copiar código
<template>
  <h1>Página del Login</h1>
  <hr />
  <form @submit.prevent="logear">
    <legend>Datos de acceso</legend>
    <label for="usuario">Usuario:</label>
    <input type="text" id="usuario" v-model="usuarioinput"><br><br>
    <label for="contraseña">Contraseña:</label>
    <input type="password" id="contraseña" v-model="contrainput"><br><br>
    <button type="submit">Login Usuario</button>
  </form>
</template>

<script>
import axios from 'axios';
import { useAuthStore } from '../stores/auth'; // Asegúrate de que la ruta es correcta

export default {
  data() {
    return {
      usuarioinput: '',
      contrainput: ''
    };
  },
  methods: {
    async logear() {
      try {
        const response = await axios.get('/json/users.json');
        const lista = response.data;

        let usuarioEncontrado = false;
        let contraseñaCorrecta = false;
        let usuario = null;

        for (let i = 0; i < lista.length; i++) {
          if (lista[i].username === this.usuarioinput) {
            usuarioEncontrado = true;
            if (lista[i].password === this.contrainput) {
              contraseñaCorrecta = true;
              usuario = lista[i];
            }
            break;
          }
        }

        if (usuarioEncontrado && contraseñaCorrecta) {
          alert("Usuario y contraseña correctos");
          const authStore = useAuthStore();
          authStore.login(usuario.name.firstname);
          this.$router.push('/ArticulosView'); // Redirige a la página de artículos
        } else if (usuarioEncontrado) {
          alert("Contraseña incorrecta");
        } else {
          alert("Usuario no encontrado");
        }
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    }
  }
};
</script>