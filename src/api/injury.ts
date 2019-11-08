import axios from "axios";
import { InjuryModal } from '../models'

export function getListInjuryApi() {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, InjuryModal>({
        method: "get",
        url: `/injury`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}