import axios from "axios";
import { CertificateModal } from '../models'

export function getListCertificateApi() {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, CertificateModal>({
        method: "get",
        url: `/certification`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function addCertificateApi(params: any ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, CertificateModal>({
        method: "post",
        url: `/certification`,
        data: params
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}