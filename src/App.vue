<template>
 <main class="columns is-gapless is-multiline" :class="{'modo-noturno': modoNoturno}">
  
  <div class="column is-one-quarter">
    <CBarraLateral @aoModoNoturno="alterarTema"/>    
  </div>

  <div class="column is-three-quarter conteudo">

    <CFormulario @aoSalvarTarefa="salvarTarefa"/>
    
    <div class="lista">
      
      <CTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
    
      <CBox v-if="listaEstaVazia">
        Você não está muito produtivo hoje :)
      </CBox>
    </div>
  </div>
 </main>
</template>

<script lang="ts">
  
  import { defineComponent } from 'vue';

  import CBarraLateral from './components/BarraLateral.vue';
  import CFormulario from './components/Formulario.vue';
  import CTarefa from './components/Tarefa.vue';
  import CBox from '@/components/box.vue';
  import ITarefa from '@/interfaces/ITarefa';

  export default defineComponent({ 
    name: "App", 
    components: { 
      CBarraLateral, 
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
    computed: {
      listaEstaVazia() : boolean {
        return this.tarefas.length === 0
      }
    },
    methods: {
      salvarTarefa(tarefa: ITarefa) {
        this.tarefas.push(tarefa)
      },
      alterarTema(modoTema: boolean) {
        this.modoNoturno = modoTema
      }
    }
    })
</script>

<style>
  .lista {
    padding: .5rem;
    background: var(--bg-secundario); 
  }

  main {
    --bg-primario: #fff;
    --texto-primario: #000;
  }
  main.modo-noturno {
    --bg-primario: #2c2a2a;
    --texto-primario: #9d9b6a;
    --bg-secundario: #3f3f2c;
  }

  .conteudo {
    background-color: var(--bg-primario);
  }
</style>
