import axios from "axios";
import { GolasModal } from '../models'

export function getListGoalsApi() {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, GolasModal>({
        method: "get",
        url: `/goal`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}


