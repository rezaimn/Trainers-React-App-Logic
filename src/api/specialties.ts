import axios from "axios";
import { SpecialtiesModal } from '../models'

export function getListSpecialiesApi() {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, SpecialtiesModal>({
        method: "get",
        url: `/speciality`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}
