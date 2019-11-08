import axios from "axios";
import {
    CategoryPackageParams,
    CategoryPackageState
} from "../models";

export function addCategoryPackageApi(params: FormData ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, CategoryPackageState>({
        method: "post",
        url: `/categoryPackage`,
        data: params
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}


export function getCategoryPackageApi(status: boolean, mode?: string) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    let url = `/categoryPackage?status=${status}`
    if(mode){
        url = url+`&mode=${mode}`
    }
    const xhr = axios.request<null, CategoryPackageState>({
        method: "get",
        url,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function updateCategoryPackageApi(id: string, params: FormData ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, CategoryPackageState>({
        method: "put",
        url: `/categoryPackage/${id}`,
        data: params
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function deleteCategoryPackageApi(id: string ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, CategoryPackageState>({
        method: "delete",
        url: `/categoryPackage/${id}`
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function getCategoryPackageApiById(id: string ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, CategoryPackageState>({
        method: "get",
        url: `/categoryPackage/${id}`
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}