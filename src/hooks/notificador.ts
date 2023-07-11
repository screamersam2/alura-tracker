import { TypeNotification } from "@/interfaces/INotification"
import { store } from "@/store"
import { NOTIFICAR } from "@/store/mutations_enum"

type Notificator = {
    notify: (type: TypeNotification, title: string, message: string) => void
}

export default () : Notificator => {
    const notify = (type: TypeNotification, title: string, message: string): void => {
        store.commit(NOTIFICAR, {
            title: title,
            message: message,
            type: type
        })
    }

    return {
        notify
    }
}