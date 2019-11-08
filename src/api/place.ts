import axios from "axios";
import { PlaceModal } from '../models'

export function getListPlaceApi() {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, PlaceModal>({
        method: "get",
        url: `/place`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}