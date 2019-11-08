import axios from "axios";
import {
    SignInState,
    ResponseAccount,
    SignUpState,
    ResponseSignUp,
    ForgotPasswordState,
    ResetPasswordState,
    AccountState, TrainerDetailsInfo, userData, UserFilters
} from "../models";
var qs =  require('qs');

export function postLogin(data = {}, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<SignInState, ResponseAccount>({
        method: "post",
        url: "/users/signin",
        data
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function postSignUp(data = {}, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<SignUpState, ResponseSignUp>({
        method: "post",
        url: "/users/signup",
        data
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function postUpdateProfile(id:number , data = {}, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<SignUpState, any>({
        method: "post",
        url: `/users/profile/${id}`,
        data
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function postForgotPass(data = {}, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<ForgotPasswordState, ForgotPasswordState>({
        method: "post",
        url: "/users/forgotPassword",
        data
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function postResetPass(data = {}, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, ResetPasswordState>({
        method: "post",
        url: "/users/changePassword",
        data
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}


export function postUpdateTrainerDetailsInfo(id:number ,data = {}, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, TrainerDetailsInfo>({
        method: "post",
        url: `/trainer/details/${id}`,
        data
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function getUserList(filters:UserFilters, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, AccountState[]>({
        method: "get",
        url: `/users/list`,
        params: {
            role:filters.role,
            email:filters.email,
            fullname:filters.fullname,
            zipcode:filters.zipcode,
            searchable:filters.searchable,
            userPackage:filters.userPackage,
            registerDate:filters.registerDate,
            status: filters.status,

        },
        paramsSerializer: params => {
            return qs.stringify(params)
        }
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function getUserById(id: number, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, userData>({
        method: "get",
        url: `/users/profile/${id}`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}


export function changeUserAvatar(id: number, avatar:FormData) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, any>({
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        url: `/users/profile/avatar/${id}`,
        data:avatar
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function changeUserStatus(id: number) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, any>({
        method: "get",
        url: `/users/status/${id}`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function updateTrainerUpdateDetailsInfo(id:number , data = {}, config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<SignUpState, any>({
        method: "post",
        url: `/trainer/details/${id}`,
        data
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function deleteUser(id: number) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, any>({
        method: "delete",
        url: `users/delete/${id}?force=true`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function checkUserProfileApi() {
    const xhr = axios.request<null, null>({
        method: "get",
        url: `/users/profile`,
    });
    return xhr;
}

export function changeOldPasswordApi(oldPassword: string, newPassword: string) {
    const xhr = axios.request<null, null>({
        method: "post",
        url: "/users/changeOldPassword",
        data: {oldPassword, newPassword}
    });
    return xhr;
}


