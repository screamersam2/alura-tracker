<template>
    <div class="box has-text-weight-bold comp">
        <slot></slot>
    </div>
</template>

<script lang="ts">

import { defineComponent} from 'vue'

export default defineComponent({
    name: 'CBox',    
})
</script>

<style scoped>
/*  */
.box {    
    background: #faf0ca; 
  }
.box.comp {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>