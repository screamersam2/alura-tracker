<template>
    <div class="box">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulario para criação de uma nova tarefa">
                <input class="input" type="text" v-model="descricao" placeholder="Qual tarefa você deseja iniciar?">
            </div>            
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione uma opção</option>
                        <option v-for="projeto in projetos" :key="projeto.id" :value="projeto.id">
                        {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <CTemporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import CTemporizador from './Temporizador.vue';
import { useStore } from 'vuex'
import { key } from '@/store'

export default defineComponent({
    name: 'CFormulario',
    emits: ['aoSalvarTarefa'],
    components: {
        CTemporizador 
    },    
    data() {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    setup(){
        const store = useStore(key)
        return {
            projetos: computed(()=>store.state.projetos)
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id === this.idProjeto)
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