<template>
  <div class="examen">
    <h1>Aquí montamos el examen</h1>
    <h2>Examen mínimos 2DW3</h2>
    <form class="formulario" @submit.prevent>
      <label>
        Nombre:
        <input v-model="alumno.nombre" type="text" placeholder="Introduce tu nombre" />
      </label>

      <label>
        Email:
        <!-- ref se usará en validarEmail para quedarme en el input -->
        <!-- @blur se ejecuta cuando el input pierde el foco -->
        <input v-model="alumno.email" ref="emailInput" type="email" placeholder="Introduce tu email"
          @blur="validarEmail" />
        <span v-if="emailInvalido" class="error">correo incorrecto</span>
      </label>

      <label>
        Password:
        <!-- @keyup para actualizar según vamos escribiendo -->
        <input v-model="alumno.password" type="password" placeholder="Introduce tu contraseña" @keyup="validarPassword" />
        <span v-if="passwordInvalido" class="error">Password incorrecto</span>
      </label>

      <!-- Botón solo visible si la contraseña es válida -->
      <button v-if="passwordValido" @click="añadirAlumno">
        Nuevo Alumno/a
      </button>
      <br>
      <table>
        <thead>
          <tr>
            <th>Nombre</th> <th>Email</th> <th>Password</th> 
          </tr>
        </thead>
        <tbody>
          <!-- index hace referencia al índice del array -->
          <tr v-for="(alumno, index) in alumnos" :key="index">
            <!-- Nombre --> 
            <td v-if="!alumno.editando">{{ alumno.nombre }}</td> 
            <td v-else><input v-model="alumno.nombre" /></td> 
            <!-- Email -->
            <td v-if= "!alumno.editando">{{ alumno.email }}</td>
            <td v-else><input v-model="alumno.email" /></td>
            <!-- Password -->
            <td v-if="!alumno.editando">{{ alumno.password }}</td>
            <td v-else><input v-model="alumno.password" type="password"/></td>
            <td>
              <!-- (index) en este caso hace referencia al alumno seleccionado -->
              <button class="eliminarAlumno" @click="eliminarAlumno(index)">Eliminar</button>
              <button class="activarEdicion" @click="alumno.editando=!alumno.editando">{{ alumno.editando ? "Desactivar edición" : "Activar edición" }}</button>
            </td>
          </tr>
        </tbody>
      </table>

    </form>
  </div>
</template>
  
<script>
export default {
  name: 'ExamenView',
  data() {
    return {
      alumno: {
        nombre: '',
        email: '',
        password: ''
      },
      alumnos: [],//array a  mostrar
      emailInvalido: false,
      passwordValido: false,
      passwordInvalido: false,
    }
  },
  methods: {
    validarEmail() {
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!regex.test(this.alumno.email)) {
        this.emailInvalido = true;
        //@blur se ejecuta cuando el input pierde el foco, con $nextTick me aseguro que el input tiene el foco
        this.$nextTick(() => {
          this.$refs.emailInput.focus();
        });
      } else {
        this.emailInvalido = false;
      }
    },
    validarPassword() {
      const pass = this.alumno.password;
      const tieneMayus = /[A-Z]/.test(pass);//.test(pass) devuelve true si encuentra una
      const tieneMinus = /[a-z]/.test(pass);
      const tieneNumero = /[0-9]/.test(pass);
      const longitudValida = pass.length >= 8 && pass.length <= 16;

      this.passwordValido = tieneMayus && tieneMinus && tieneNumero && longitudValida;
      this.passwordInvalido = !this.passwordValido;
    },
    añadirAlumno() {
      //Añadimos a cada alumno la propiedad "editando" para controlar el boton de "Activa edicion"
      // operador spread ... se usa para copiar todas las propiedades de un objeto
      this.alumnos.push({ ...this.alumno, editando: false }); 
      //Limpiamos campos y variables
      this.alumno.nombre = '';
      this.alumno.email = '';
      this.alumno.password = '';
      this.emailInvalido = false;
      this.passwordValido = false;
      this.passwordInvalido = false;

    },
    eliminarAlumno(index) {
      this.alumnos.splice(index, 1); // Elimina el alumno en la posición index
    },
    activarEdicion(index) {
      this.alumnos[index].editando = true;
    },


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
  