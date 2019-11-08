import axios from "axios";
import { FrequencyModal } from '../models'

export function getListFrequencyApi() {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, FrequencyModal>({
        method: "get",
        url: `/frequency`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}


