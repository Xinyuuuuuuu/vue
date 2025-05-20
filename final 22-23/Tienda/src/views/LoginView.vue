<template>
    <div class="login-page">
        <!-- Título principal -->
        <h1>Página de Login | Login orrialdea</h1>
        <hr />

        <!-- Subtítulo -->
        <h2>Datos de acceso</h2>

        <!-- Formulario de login -->
        <form class="login-form" @submit.prevent="onLoginUsuario">
            <div class="form-group">
                <label for="email">Email:</label>
                <input id="email" type="email" v-model="email" placeholder="Introduce tu email" required />
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input id="password" type="password" v-model="password" placeholder="Introduce tu contraseña" required />
            </div>

            <!-- Botón para login de usuario registrado -->
            <!-- hacemos el @submit en la etiqueta de form para aprovechar el required, si no tengo que validar manualmente en la funcion -->
            <button type="submit">Login usuario</button> 

            <!-- Botón para invitado -->
            <button type="button" @click="onLoginInvitado">Usuario Invitado</button>
        </form>
    </div>
</template>
  
<script setup>
//Importar  para usar el .json
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

// Campos ligados con v-model
const email = ref('')
const password = ref('')

const usuarios = ref([])//viene del json

//Carga de datos (CREATED())
onMounted(async () => {
    // const res = await axios.get('basurto.json')
    // usuarios.value = res.data

    //Con mensajes de depuracion
     try {
    const res = await axios.get('Usuarios.json')
    console.log('RAW Usuarios.json →', res.data)
    usuarios.value = res.data
  } catch (err) {
    console.error('Error cargando Usuarios.json', err)
  }
})



// Handler de submit (puedes ampliarlo con lógica real)
function onLoginUsuario() {
    // Buscamos en el array un objeto con ese email y password
  const encontrado = usuarios.value.find(u =>
    u.email === email.value && u.password === password.value
  )

  if (encontrado) {
    alert(`¡Bienvenido, ${encontrado.name || encontrado.email}!`)//or
    sessionStorage.setItem('usuario', encontrado.name || encontrado.email)
    //Redirigimos a Compras
    window.location.href = '/compras'
  } else {
    alert('Login Incorrecto. Vuelve a intentarlo')
    
    // Vaciamos el password y ponemos foco al campo
    password.value = ''
    // Damos foco manualmente
    document.getElementById('password').focus()
  } 
}

function onLoginInvitado() {
  // 2.c) Guardamos rol invitado
  sessionStorage.setItem('usuario', 'invitado')

  alert('Entrada como invitado')

  // Redirigimos a Compras
  window.location.href = '/compras'
}
</script>
  
<style scoped>
.login-page {
    max-width: 400px;
    margin: 2rem auto;
    padding: 1rem;
    text-align: center;
}

.login-page h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.login-page h2 {
    font-size: 1.4rem;
    margin: 1rem 0;
}

.form-group {
    margin-bottom: 1rem;
    text-align: left;
}

.form-group label {
    display: inline-block;
    width: 80px;
}

.form-group input {
    width: calc(100% - 90px);
    padding: 0.4rem;
}

button {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
}
</style>
  