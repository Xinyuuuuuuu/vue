<template>
  <div class="home">
    <img src="/TX.jpg" alt="Logo TX" class="logo" />
    <h1 class="titulo">Welcome to Vue.js Exam</h1>
    <p class="texto">Ongi etorri Vue.js azterketara</p>
    <p class="texto">Bienvenido al examen de Vue.js</p>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 30px;
}
.logo {
  width: 200px;
  margin-bottom: 20px;
}
.titulo {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
}
.texto {
  font-size: 18px;
}
</style>
