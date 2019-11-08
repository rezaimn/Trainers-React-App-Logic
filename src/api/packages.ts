import axios from "axios";
import {
    PackageState,
    PackageParams, UserPackage
} from "../models";

export function addPackageApi(params: PackageParams, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, PackageState>({
        method: "post",
        url: `/package`,
        data: params
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}


export function getPackageApi(page?: number, mode?: string, type?: string) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    let url = '/package';
    if(page){
        url = `${url}?page=${page}`
    }
    if(mode){
        if(url.includes('?')) {
            url = `${url}&mode=${mode}`
        }else {
            url = `${url}?mode=${mode}`
        }
    }

    if(type){
        if(url.includes('?')) {
            url = `${url}&type=${type}`
        }else {
            url = `${url}?type=${type}`
        }
    }
    const xhr = axios.request<null, PackageState[]>({
        method: "get",
        url
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function updatePackageApi(id: string, params: PackageParams, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, PackageState>({
        method: "put",
        url: `/package/${id}`,
        params
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function deletePackageApi(id: string, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, PackageState>({
        method: "delete",
        url: `/package/${id}`
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}

export function getPackageApiById(id: string, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, PackageState>({
        method: "get",
        url: `/package/${id}`
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}


export function getUserPackageList(userId: number, status: string, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    let url = `/package/list/${userId}`
    if(status){
        url = `/package/list/${userId}?status=${status}`
    }
    const xhr = axios.request<null, any>({
        method: "get",
        url
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}


export function updateUserPackage(userPackageId: number, body: UserPackage, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, any>({
        method: "put",
        data: body,
        url: `/userPackage/update/${userPackageId}`
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}


export function updatePackageMode(packageId: number, body: any, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, any>({
        method: "put",
        data: body,
        url: `/package/mode/${packageId}`
    });
    return {xhr, cancel: (message: string) => source.cancel(message)};
}
