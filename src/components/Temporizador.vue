<template>
    <div class="is-flex is-align-itens-center is-justify-content-space-between">
        <CCronometro :tempoEmSegundos="tempoEmSegundos" />
        <button @click="iniciar" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fa fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button @click="finalizar" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fa fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CCronometro from './Cronometro.vue'

export default defineComponent({
    name: 'CTemporizador',
    components: {
        CCronometro
    },
    emits: 
        ['aoTemporizadorFinalizado']
    ,
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },    
    methods: {
        iniciar(){
            // começa a contagem
            // 1 seg = 1000 ms
            console.log('iniciando')
            this.cronometroRodando = true
            this.cronometro = setInterval(()=>{
                this.tempoEmSegundos += 1
            }, 1000)
        },
        finalizar(){
            console.log('finalizando')
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    }    
})
</script>

<style scoped>
/*  */
</style>