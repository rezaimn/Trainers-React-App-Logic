import axios from "axios";
import { NotificationModel } from '../models'

export function postSetTokenFcmApi(token: string, os: string, uuid:string) {
    const xhr = axios.request<null, null>({
        method: "post",
        url: `/FCM/setToken`,
        data: {token, os, uuid}
    });
    return xhr;
}

export function getNotificationsApi(userId:  string) {
    const xhr = axios.request<null, NotificationModel>({
        method: "get",
        url: `/FCM/getNotification/${userId}`
    });
    return xhr;
}




