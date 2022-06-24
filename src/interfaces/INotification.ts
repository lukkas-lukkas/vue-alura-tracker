export enum NotificationType {
    SUCCESS,
    WARNING,
    DANGER
}

export interface INotification {
    id: number,
    title: string,
    text: string,
    type: NotificationType
}