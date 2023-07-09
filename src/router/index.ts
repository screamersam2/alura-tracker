import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Tarefas from '../views/Tarefas.vue'
import CProjetos from '../views/Projetos.vue'

const rroutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: CProjetos
    },
]

const routers = createRouter({

    history: createWebHashHistory(),
    routes: rroutes
})

export default routers