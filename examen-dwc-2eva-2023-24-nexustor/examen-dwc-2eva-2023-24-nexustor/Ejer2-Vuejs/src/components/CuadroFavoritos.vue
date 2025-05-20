<template>

<label for="">
    <legend>favoritos</legend>
    <p>{{ favoritos }}</p>
    

</label>
        
    
</template>
<script>
import { useFavoritos } from '@/stores/favoritos';
import { mapWritableState } from 'pinia';
export default {
    data() {
        return {
            
        }
    },
    computed:{
        ...mapWritableState(useFavoritos,['favoritos'])
    }
}
</script>