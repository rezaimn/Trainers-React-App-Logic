

export const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";

interface Notification {
    body: string;
    title: string;
    collapseKey: string;
}

export interface NotificationModel {
    id: number;
    user_id: number
    notification: Notification
}


export interface SetNotifications {
    type: typeof SET_NOTIFICATIONS,
    payload: NotificationModel[]
}



export type NotificationActionType = SetNotifications;
