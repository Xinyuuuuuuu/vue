<template>
    <h1>tienes favoritos {{ this.numeroFavoritos }}</h1>
</template>
<script>
import { mapWritableState, mapActions } from "pinia";
import { useFavoritos } from '../stores/favoritos';
import CuadroFavoritos from '../components/CuadroFavoritos.vue'

export default {
    data() {
        return {
            
        }

    },
    computed:{
        ...mapWritableState(useFavoritos,["numeroFavoritos"])
    },
    components:{
        CuadroFavoritos
    }
}
</script>