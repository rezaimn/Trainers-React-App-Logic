import axios from "axios";
import {
    CouponState,
    CouponsParams
} from "../models";

export function addCouponsApi(params: CouponsParams ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, CouponState>({
        method: "post",
        url: `/coupon`,
        data: params
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

// export function getCouponsApi(page: number, filters: CouponFilters = {} as any) {
//     const CancelToken = axios.CancelToken;
//     const source = CancelToken.source();
//     const xhr = axios.request<null, CouponState>({
//         method: "get",
//         url: `/coupon?page=${page}${filters.expireTime!=null?`&expireTime=${filters.expireTime}`:''}${filters.sort!=null?`&sort=${filters.sort}`:''}`,
//     });
//     return { xhr, cancel: (message: string) => source.cancel(message) };
// }

export function getCouponsApi() {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, CouponState>({
        method: "get",
        url: `/coupon`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function updateCouponsApi(id: string, params: CouponsParams ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, CouponState>({
        method: "put",
        url: `/coupon/${id}`,
        params
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function deleteCouponsApi(id: string ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, CouponState>({
        method: "delete",
        url: `/coupon/${id}`
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function getCouponsApiById(id: string ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, CouponState>({
        method: "get",
        url: `/coupon/${id}`
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}
