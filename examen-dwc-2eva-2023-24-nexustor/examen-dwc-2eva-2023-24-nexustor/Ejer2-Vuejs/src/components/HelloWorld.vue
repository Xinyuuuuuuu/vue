<script>
  //import axios from 'axios'
  export default {
      name: 'HelloWorld',
      components: {},
      data(){
          return{

          }
      },
      methods:{
          
      }
  }
</script>


<template>
  <div>
    <img alt="logo" class="logo" src="@/assets/logotipo.png" />
    <h1 class="green">{{ msg }}</h1>
    <h2>Te damos la bienvenida al hospital Basurto</h2>
    
  </div> 
</template>

<style scoped>
div{
  text-align: center;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
