<template>
    <section>        
        <router-link class="button" to="/projetos/novo" >
            <span class="icon is-small">
                <i class="fa fas-plus"></i>                
            </span>
            <span>Novo projeto</span>
        </router-link>        
        <table class="table is-fullwidth">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Ações</th>
            </tr>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <th>{{ projeto.id }}</th>
                    <th>{{ projeto.nome }}</th>
                    <th>
                        <router-link class="button" :to="`/projetos/${projeto.id}`">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>                            
                        </router-link>    
                        <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </th>
                </tr>
            </tbody>
        </table>
    </section>
</template>
   
<script lang="ts">

import { useStore } from '@/store';
import { EXCLUIR_PROJETO } from '@/store/mutations_enum';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: "CLista",
    setup() {
        const store = useStore()
        return {            
            projetos: computed(()=>store.state.projetos),
            store
        }
    },
    methods: {
        excluir(id: string) {
            
            this.store.commit(EXCLUIR_PROJETO, id)
        }
    }
})
</script>

<style scoped>


</style>