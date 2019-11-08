
/**
 * ACCOUNT ACTIONS
 */
// Coupons
export const SET_COUPONSE = "SET_COUPONSE";
export const UPDATE_COUPONSE = "UPDATE_COUPONSE";
export const CLEAR_COUPONSE = "CLEAR_COUPONSE";
export const ADD_COUPONSE = "ADD_COUPONSE";
export const REMOVE_COUPONSE = "REMOVE_COUPONSE";

// current Coupons
export const SET_COUPONSE_CURRENT = "SET_COUPONSE_CURRENT";
export const UPDATE_COUPONSE_CURRENT = "UPDATE_COUPONSE_CURRENT";
export const CLEAR_COUPONSE_CURRENT = "CLEAR_COUPONSE_CURRENT";

/**
 * Type Checking Actions
 * Define interface of State
 */

export interface CouponState {
    format: 'create' | 'generate';
    code: string;
    percent: boolean;
    multiple: boolean;
    value: string;
    expireTime: string;
    maxBounce: string;
    maxBounceCurrencyCode: "usd";
    codeLength: string;
    count: string;
    id?: number;
    status?: boolean;
    created_at?: string;
}
// for POST method
export interface CouponsParams {
    data:CouponState[];
    lastPage: number;
    page: number;
    perPage: number;
    total: string;

}

// export interface CouponsListState {
//     data: CouponsState[];
//     lastPage: number;
//     page: number;
//     perPage: number;
//     total: number;
// }

export interface CouponFilters {
    sort: string,
    expireTime: string,
}

interface UpdateCoupons {
    type: typeof UPDATE_COUPONSE;
    payload: CouponState;
}

interface SetCoupons {
    type: typeof SET_COUPONSE;
    payload: CouponState[];
}

interface ClearCoupons {
    type: typeof CLEAR_COUPONSE;
    payload: CouponState;
}

interface AddCoupons {
    type: typeof ADD_COUPONSE ;
    payload: CouponState;
}

interface RemoveCoupons {
    type: typeof REMOVE_COUPONSE;
    payload: CouponState;
}

export type CouponsActionType =
    | UpdateCoupons
    | SetCoupons
    | ClearCoupons
    | AddCoupons
    | RemoveCoupons;

interface UpdateCouponsCurrent {
    type: typeof UPDATE_COUPONSE_CURRENT;
    payload: CouponState;
}

interface SetCouponsCurrent {
    type: typeof SET_COUPONSE_CURRENT;
    payload: CouponState;
}

interface ClearCouponsCurrent {
    type: typeof CLEAR_COUPONSE_CURRENT;
}

export type CouponsCurrentActionType =
    | UpdateCouponsCurrent
    | SetCouponsCurrent
    | ClearCouponsCurrent;
