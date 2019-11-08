import axios from "axios";
import {
    ChatStartWith,
    ListChat
} from "../models";

export function getChatWithApi(idUser: string ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, ChatStartWith>({
        method: "get",
        url: `chat/start/${idUser}`
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function getChatListApi(idUser: string ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, ListChat>({
        method: "get",
        url: `chat/list/${idUser}`
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}