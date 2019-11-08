import axios from "axios";
import {
    earningFilterModel,
    earningUpdateModel,
    sessionFilters,
    sessionParams,
    updateSessionParams
} from "../models/app/sessions";
var qs =  require('qs');




export function getAllSessionList( status:string[], filters:sessionFilters, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    let url = '/session';
    if(filters.sessionDateFrom && filters.sessionDateTo){
        url = `${url}?sessionDateFrom=${filters.sessionDateFrom}&sessionDateTo=${filters.sessionDateTo}`
    }
    const xhr = axios.request<any, null>({
        method: "get",
        url,
        params: {
            status: status ,
            customer:filters.customer,
            trainer:filters.trainer,
            sessionDateFrom:filters.sessionDateFrom,
            sessionDateTo:filters.sessionDateTo
        },
        paramsSerializer: params => {
            return qs.stringify(params)
        }
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function getOpportunitySessionList(opportunityId:number, status:string , config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<sessionParams[], null>({
        method: "get",
        url: `/session?requestOpportunityId=${opportunityId}`,
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function getSessionById(id:number, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<sessionParams, null>({
        method: "get",
        url: `/session/${id}`,
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function addNewSession( body:sessionParams,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, any>({
        method: "post",
        data:body,
        url: `/session`,
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function updateSession(body:sessionParams,id: number, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<sessionParams, sessionParams>({
        method: "put",
        data:body,
        url: `/session/${id}`,
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function deleteSession(id: number, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, null>({
        method: "delete",
        url: `session/${id}`,
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function updateSessionEarning(id: number,body:earningUpdateModel, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, null>({
        method: "put",
        url: `sessionEarning/${id}`,
        data:body
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function getSessionEarnings(earningFilter:earningFilterModel, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, null>({
        method: "get",
        url: `sessionEarning`,
        params:{
            status:earningFilter.status,
            page:earningFilter.page,
            trainerId:earningFilter.trainerId
        },
        paramsSerializer: params => {
            return qs.stringify(params)
        }
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}
