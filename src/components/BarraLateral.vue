<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt=""/>
        </h1>
        <button class="button" @click="alterarTema">
            {{ textoBotao }}
        </button>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/" class="link">
                        <i class="fa fa-tasks"></i>
                        tarefas
                    </router-link>
                </li>
                <li>                    
                    <router-link to="/projetos" class="link">
                        <i class="fa fa-project-diagram"></i>
                        projetos
                    </router-link>
                </li>
                
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CBarraLateral',
    emits: ['aoModoNoturno'],
    data() {
        return {
            modoNoturno: false
        }
    },
    methods: {
        alterarTema() {
            this.modoNoturno = !this.modoNoturno
            this.$emit('aoModoNoturno', this.modoNoturno)
        },        
    },
    computed: {
        textoBotao() {
            if(this.modoNoturno){
                return 'Desativar modo Noturno'
            } else {
                return 'Ativar modo Noturno'
            }
        }
    }
})
</script>

<style scoped>
/*  */
    header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
    }
    
    .panel li {
        margin: 8px 0;
    }
    .link {
        color: #fff;
    }
    .link:hover {
        color: antiquewhite;
    }
    .link:houter-link-active {
        color: aqua;
    }
</style>