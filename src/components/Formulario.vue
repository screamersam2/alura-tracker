<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulario para criação de uma nova tarefa">
                <input type="text" class="input" v-model="descricao" placeholder="Qual tarefa você deseja iniciar?">
            </div>
            <div class="column">
                <CTemporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CTemporizador from './Temporizador.vue';


export default defineComponent({
    name: 'CFormulario',
    emits: ['aoSalvarTarefa'],
    components: {
        CTemporizador 
    },    
    data() {
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao
            })
            console.log('temporizador finalizado', tempoDecorrido)
            this.descricao = ''
        }
    }    
})
</script>

<style scoped>
/*  */
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}

</style>