<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/Logo_Txurdi.png" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>|
        <RouterLink to="/Loginview">Login</RouterLink>
        <RouterLink v-if="isAuthenticated" to="/ArticulosView">| Artículos |</RouterLink>
        <RouterLink v-if="isAuthenticated" to="/CarritoView"> Carrito |</RouterLink>
        <a v-if="isAuthenticated" @click="logout">Logout</a>
        | <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useAuthStore } from './stores/auth';

export default {
  computed: {
    ...mapState(useAuthStore, ['isAuthenticated'])
  },
  methods: {
    ...mapActions(useAuthStore, ['logout'])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>