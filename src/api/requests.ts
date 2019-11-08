import axios from "axios";


import {assignToRequest, opportunitiesParams, currentRequestState, requestFilters} from "../models";
// import {
//     PackageState,
//     PackageParams
// } from "../models";


export function getAllRequestList(page: number, filters: requestFilters = {} as any) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, null>({
        method: "get",
        url: `/allrequest?page=${page}${filters.userName!=''?`&userName=${filters.userName}`:''}${filters.periodicity!=''?`&periodicity=${filters.periodicity}`:''}${filters.place!=''?`&place=${filters.place}`:''}${filters.prefer_sex!=''?`&prefer_sex=${filters.prefer_sex}`:''}${filters.created_at!=''?`&created_at=${filters.created_at}`:''}`,
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function getUserRequestList(userId:number,page: number, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, null>({
        method: "get",
        url: `/request/list/${userId}?page=${page}`,
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function deleteRequest(id: string, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, currentRequestState>({
        method: "delete",
        url: `/request/${id}`
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function getUserOpportunityList(userId:number,status:string, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, null>({
        method: "get",
        url: `/requestOpportunities/${userId}${status?`?status[0]=${status}`:``}`,
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function getRequestOpportunitiesList(id: number, page: number, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, opportunitiesParams>({
        method: "get",
        url: `/allrequest/opportunities/${id}?page=${page}`,
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function assignATrainerToARequest(body: assignToRequest, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, null>({
        method: "post",
        data: body,
        url: `/requestOpportunities/create`,
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function deleteATrainerFromARequest(id: number, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, null>({
        method: "delete",
        url: `/requestOpportunities/${id}`,
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function updateOpportunityStatusApi( oppId: number,status: any, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, null>({
        method: "put",
        url: `/requestOpportunities/status/${oppId}`,
        data: status
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function postUserRequestApi(params: currentRequestState, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<currentRequestState, null>({
        method: "post",
        url: `/request`,
        data: params,
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}
