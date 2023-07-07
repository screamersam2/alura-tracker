<template>
    <section>
        <strong class="display">
            {{ tempoDecorrido }}
        </strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CCronometro',
    data() {
        return {            
            cronometro: 0
        }
    },
    props:{
        tempoEmSegundos:{
            type: Number,
            default: 0
        }
    },
    computed: {
        tempoDecorrido(){
            return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11, 8)
        }
    },
})
</script>

<style scoped>
    .display{
        color: var(--texto-primario);
    }
</style>