import axios from "axios";
import { AllTrainers, opportunity } from '../models'
var qs =  require('qs');

export function getAllTrainesApi() {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, AllTrainers>({
        method: "get",
        url: `/trainers/list`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}


export function getTrainersWithStatusApi(userId: string, status: string[]) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, opportunity>({
        method: "get",
        url: `/requestOpportunities/${userId}`,
        params: {
            status: status
        },
        paramsSerializer: params => {
            return qs.stringify(params)
        }
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}
