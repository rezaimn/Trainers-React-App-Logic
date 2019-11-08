import axios from "axios";
import {
    FranchiseState,
    FranchiseParams, updateAdminFranchiseList
} from "../models";
var qs =  require('qs');

export function getListFranchise(cityId: string ,hasAdmin:any,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    let params:any={
        city:cityId,
    };
    if(hasAdmin!==''){
        params.hasAdmin=hasAdmin;
    }

    const xhr = axios.request<null, FranchiseState>({
        method: "get",
        url: `/franchise`,
        params:params,
        paramsSerializer: params => {
            return qs.stringify(params)
        }
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function getFranchiseById(franchiseId: string ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, FranchiseState>({
        method: "get",
        url: `/franchise/${franchiseId}`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function addFranchiseApi(params: FranchiseParams ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, FranchiseState>({
        method: "post",
        url: `/franchise`,
        data: params
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function editFranchiseApi(id: string, params: FranchiseParams ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, FranchiseState>({
        method: "put",
        url: `/franchise/${id}`,
        data: params
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function deleteFranchiseApi(id: string ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, FranchiseState>({
        method: "delete",
        url: `/franchise/${id}`
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function getUserFranchiseBaseRoleApi(config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, FranchiseState>({
        method: "get",
        url: `/franchiseRole`
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function updateAdminFranchiseApi(body: updateAdminFranchiseList ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, updateAdminFranchiseList>({
        method: "post",
        url: `/franchiseAdmin`,
        data:body
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}
