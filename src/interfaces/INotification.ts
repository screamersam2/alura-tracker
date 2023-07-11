export enum TypeNotification {
    SUCCESS, DANGER, WARNING
}

export interface INotification{
    title: string,
    message: string,
    type: TypeNotification,
    id: number
}