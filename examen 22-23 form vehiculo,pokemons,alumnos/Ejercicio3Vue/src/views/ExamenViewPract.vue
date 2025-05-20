<template>
<div class="examen">
  <h1>Aquí montamos el examen</h1>
  <h2>Examen mínimos 2DW3</h2>
  <form>
    <label>
      Nombre:
      <input type="text" v-model="alumno.nombre" placeholder="Introduce tu nombre">
    </label>

    <label>
      Email:
      <input type="email" v-model="alumno.email" placeholder="Introduce tu email" @blur="validarEmail()">
    </label>

    <label>
      Password:
      <input type="password" v-model="alumno.password" placeholder="Introduce tu contraseña">
    </label>
  </form>
</div>
</template>
  
<script>
export default {
  name: 'ExamenViewPract',
  data() {
    return {
      alumno: {
        nombre: '',
        email: '',
        password: ''
      },
      email
    }
  },
  methods: {
    validarEmail() {
      
    },
    validarPassword() {
      
    },
    añadirAlumno() {
    }
  }
}
</script>
  
<style scoped>
.examen {
  text-align: center;
  margin-top: 30px;
}

h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

h2 {
  font-size: 22px;
  margin-bottom: 20px;
}

.formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

label {
  font-weight: bold;
}

input {
  margin-left: 10px;
  padding: 5px;
}

.error {
  color: red;
  font-weight: bold;
  margin-left: 10px;
}
</style>
  