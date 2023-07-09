<template>
 <main class="columns is-gapless is-multiline" :class="{'modo-noturno': modoNoturno}">
  
  <div class="column is-one-quarter">
    <CBarraLateral @aoModoNoturno="alterarTema"/>    
  </div>

  <div class="column is-three-quarter conteudo">
    <RouterView></RouterView>
  </div>
 </main>
</template>

<script lang="ts">
  
  import { defineComponent } from 'vue';

  import CBarraLateral from './components/BarraLateral.vue';
  
  export default defineComponent({ 
    name: "App", 
    components: { 
      CBarraLateral,
    },
    
    data() {
      return {
        modoNoturno: false as boolean
      }
    },
    methods: {
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