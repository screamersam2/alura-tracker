<template>
    <div class="notification">
        <article class="message" 
            :class="context[notification.type]" 
            v-for="notification in notifications" :key="notification.id">
            <div class="message-header">
                {{ notification.title }}
            </div>
            <div class="message-body">
                {{ notification.message }}
            </div>
        </article>        
    </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import { TypeNotification } from '@/interfaces/INotification'

export default defineComponent({
    name: 'CNotification',
    emits: ['aoNotification'],
    setup() {
        const store = useStore()
        return {
            notifications: computed(() => store.state.notifications )
        }
    },
    data() {
        return {
            context: {
                [TypeNotification.SUCCESS]: 'is-success',
                [TypeNotification.WARNING]: 'is-warning',
                [TypeNotification.DANGER]: 'is-danger'
            }
        }
    },    
})
</script>

<style scoped>
/*  */
.notification {
    position: absolute;
    z-index: 20;
    right: 30%;
    top: 50%;
    width: 30%;
    padding: 1rem;
}
</style>