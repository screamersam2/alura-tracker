import { TypeNotification } from "@/interfaces/INotification"
import { store } from "@/store"
import { NOTIFICAR } from "@/store/mutations_enum"

export const notificationMixin = {
    methods: {        
        notificar(type: TypeNotification, title: string, message: string) {
            store.commit(NOTIFICAR, {
                title: title,
                message: message,
                type: type
            })
        }
    },
}