<template>
    <section>        
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
    </section>
</template>
   
<script lang="ts">

import { ADICIONA_PROJETO, ALTERA_PROJETO } from '@/store/mutations_enum';
import { useStore } from '../../store';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CFormulario",
    props: {
        id: {
            type: String
        }
    },    
    setup() {
        const store = useStore()
        return {
            store,            
        }
    },
    data() {
        return {
            nomeDoProjeto: '',            
        }
    },
    methods: {
        salvar() {
            if(this.id) {

                this.store.commit(ALTERA_PROJETO, 
                {
                    id: this.id,
                    nome:this.nomeDoProjeto
                })
            } else {

                this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
            }
            this.nomeDoProjeto = ''
            this.$router.push('/projetos')
        }
    },
    mounted() {
        if(this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id === this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },
})
</script>

<style scoped>


</style>