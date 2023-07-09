<template>
    <CFormulario @aoSalvarTarefa="salvarTarefa" />

    <div class="lista">

        <CTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />

        <CBox v-if="listaEstaVazia">
            Você não está muito produtivo hoje :)
        </CBox>
    </div>
</template>
   
<script lang="ts">

import { defineComponent } from 'vue';

import ITarefa from '../interfaces/ITarefa';
import CFormulario from './../components/Formulario.vue';
import CTarefa from './../components/Tarefa.vue';
import CBox from './../components/Box.vue';

export default defineComponent({
    name: "App",
    components: {
        CFormulario,
        CTarefa,
        CBox
    },

    data() {
        return {
            tarefas: [] as ITarefa[],
            modoNoturno: false as boolean
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa)
        },
        alterarTema(modoTema: boolean) {
            this.modoNoturno = modoTema
        }
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },    
})
</script>