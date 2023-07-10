<template>
    <div class="projeto">
        <h1 class="title">Projetos</h1>
        <router-view></router-view>
    </div>    
</template>
   
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: "CProjetos",    
})
</script>

<style scoped>
.projeto {
    padding: 1.25rem;
}
</style>