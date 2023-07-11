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

import { ADICIONA_PROJETO, ALTERA_PROJETO, NOTIFICAR } from '@/store/mutations_enum';
import { useStore } from '../../store';
import { defineComponent } from 'vue';
import { TypeNotification } from '@/interfaces/INotification';
import { notificationMixin } from '@/mixins/notificar'
import useNotificator from '@/hooks/notificador'

export default defineComponent({
    name: "CFormulario",
        
    setup() {
        const store = useStore()
        const { notify } = useNotificator()
        return {
            store,
            notify            
        }
    },

    props: {
        id: {
            type: String
        }
    },

    data() {
        return {
            nomeDoProjeto: '',            
        }
    },

    //mixins: [notificationMixin],

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
            //this.notificar(TypeNotification.SUCCESS, 'sucesso', 'novo projeto criado!')
            this.notify(TypeNotification.SUCCESS, 'sucesso', 'novo projeto criado!')
            /*
            this.store.commit(NOTIFICAR, {
                title: 'sucesso',
                message: 'novo projeto criado!',
                type: TypeNotification.SUCCESS
            })
            */
            this.$router.push('/projetos')
        },
        /*
        notificar(type: TypeNotification, title: string, message: string) {
            this.store.commit(NOTIFICAR, {
                title: title,
                message: message,
                type: type
            })
        }
        */
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