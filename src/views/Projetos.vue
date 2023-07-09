<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="salvar">
            <div class="field">
                <label class="label" for="nomeDoProjeto">
                    Nome do Projeto
                </label>
                <input class="input" id="nomeDoProjeto" type="text" v-model="nomeDoProjeto">
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
        <table class="table is-fullwidth">
            <tr>
                <th>Id</th>
                <th>Nome</th>
            </tr>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <th>{{ projeto.id }}</th>
                    <th>{{ projeto.nome }}</th>
                </tr>
            </tbody>
        </table>
    </section>
</template>
   
<script lang="ts">

import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
    name: "CProjetos",    
    data() {
        return {
            nomeDoProjeto: '',            
        }
    },
    methods: {
        salvar() {
            this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)            
            this.nomeDoProjeto = ''            
        }
    },
    setup() {
        const store = useStore()
        return {
            store,
            projetos: computed(()=>store.state.projetos)
        }
    },    
})
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>