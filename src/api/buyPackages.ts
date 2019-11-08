import axios from "axios";
import {
    FactorPackage,
    PaymentPackage
} from "../models";



export function putBuyNewPackageFactorApi(userId: string, packageId: string, data: any) {
    const xhr = axios.request<null, FactorPackage>({
        method: "put",
        url: `/package/buy/${userId}/${packageId}?factor=true`,
        data
    });
    return xhr;
}


export function putBuyNewPackageApi(userId: string, packageId: string, data: any) {
    const xhr = axios.request<null, PaymentPackage>({
        method: "put",
        url: `/package/buy/${userId}/${packageId}`,
        data
    });
    return xhr;
}


export function getPaymentReponseApi(paymentId: string) {
    const xhr = axios.request<null, null>({
        method: "get",
        url: `/package/payment/${paymentId}`
    });
    return xhr;
}

