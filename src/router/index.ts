import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import CTarefas from '../views/Tarefas.vue'
import CProjetos from '../views/Projetos.vue'
import CFormulario from '../views/projetos/Formulario.vue'
import CLista from '../views/projetos/Lista.vue'


const rroutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: CTarefas
    },
    {
        path: '/projetos',
        component: CProjetos,

        children: [
            {
                path: '',
                name: 'Projetos',
                component: CLista
            },
            {
                path: 'novo',
                name: 'Novo projeto',
                component: CFormulario
            },
            {
                path: ':id',
                name: 'Editar Projeto',
                component: CFormulario,
                props: true
            },
        ]
    },    
]

const routers = createRouter({

    history: createWebHashHistory(),
    routes: rroutes
})

export default routers