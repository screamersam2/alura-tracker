<template>
    <CBox>
        <div class="columns">
            <div class="column is-4">
                {{tarefa.descricao || 'tarefa sem descrição'}}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'N/D' }}
            </div>
            <div class="column">
                <CCronometro :tempo-em-segundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>
    </CBox>    
</template>

<script lang="ts">

import { defineComponent, PropType} from 'vue'
import CCronometro from './Cronometro.vue'
import ITarefa from '@/interfaces/ITarefa';
import CBox from '@/components/Box.vue'

export default defineComponent({
    name: 'CTarefa',
    components: {
        CCronometro, CBox
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    },
})
</script>

<style scoped>
/*  */      
</style>