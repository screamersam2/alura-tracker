import IProjeto from "@/interfaces/IProjeto";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR } from "./mutations_enum";
import { INotification } from "@/interfaces/INotification";

interface Estado {
    projetos: IProjeto[],
    notifications: INotification[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [],
        notifications: []
        /*
        notifications: [
            {
                id: 1, 
                title: 'sucess', 
                message: 'uma notificao de sucesso', 
                type: TypeNotification.SUCCESS},
            {
                id: 2, 
                title: 'warning', 
                message: 'uma notificao de sucesso', 
                type: TypeNotification.WARNING},
            {
                id: 3, 
                title: 'danger', 
                message: 'uma notificao de sucesso', 
                type: TypeNotification.DANGER},
        ]
        */
    },
    mutations: {
        [ADICIONA_PROJETO] (state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO] (state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id === projeto.id)           
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO] (state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id !== id)
        },
        [NOTIFICAR] (state, novaNotificacao: INotification) {
            novaNotificacao.id = new Date().getTime()
            state.notifications.push(novaNotificacao)

            setTimeout(() => {
                state.notifications = state.notifications.filter(n => n.id !== novaNotificacao.id)
            }, 3000);
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}