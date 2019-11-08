import {currentRequestState} from "./requests";

/**
 * ACCOUNT ACTIONS
 */
// package
export const SET_PACKAGE = "SET_PACKAGE";
export const UPDATE_PACKAGE = "UPDATE_PACKAGE";
export const UPDATE_PACKAGE_MODE = "UPDATE_PACKAGE_MODE";
export const CLEAR_PACKAGE = "CLEAR_PACKAGE";
export const ADD_PACKAGE = "ADD_PACKAGE";
export const REMOVE_PACKAGE = "REMOVE_PACKAGE";

/////user packages
export const SET_USER_PACKAGE = "SET_USER_PACKAGE";
export const UPDATE_USER_PACKAGE = "UPDATE_USER_PACKAGE";

// current package
export const SET_PACKAGE_CURRENT = "SET_PACKAGE_CURRENT";
export const UPDATE_PACKAGE_CURRENT = "UPDATE_PACKAGE_CURRENT";
export const CLEAR_PACKAGE_CURRENT = "CLEAR_PACKAGE_CURRENT";

export const SET_USER_CURRENT_PACKAGE = "SET_USER_CURRENT_PACKAGE";

// for POST method
export interface PackageParams {
    month: number;
    package_category?: number;
    quantity: number;
    quantity_free: number;
    discount_pay: number;
    payment_periodicity: 'one' | 'monthly';
    package_type: "custom" | 'usual';
    max_additional_person: number;
    coupon?: number;
    mode?:string;
    session_time: number;
    description: string;
    price_amount: number;
    price_currency_code: string;
    additional_person_amount: number;
    additional_person_currency_code: string;
    promo: string;
    status: boolean;
}

export interface UserPackage{
    id:number;
    month: number;
    quantity: number;
    quantity_free: number;
    max_additional_person: number;
    description: string;
    expire_time: string;
    status: string;
};

export interface UserPackageState {
    id: number;
    package: PackageParams;
    status:string;
    description:string;
    expire_time:string;
}

export interface updatePackageModeState{
    id: number;
    mode:string
}

// for GET method
export interface PackageState extends PackageParams {
    id: number;
}

export interface PackageListState {
    data: PackageState[];
    lastPage: number;
    page: number;
    perPage: number;
    total: number;
}

interface UpdatePackage {
    type: typeof UPDATE_PACKAGE;
    payload: PackageState;
}

interface UpdatePackageMode {
    type: typeof UPDATE_PACKAGE_MODE;
    payload: updatePackageModeState;
}

interface SetPackage {
    type: typeof SET_PACKAGE;
    payload: PackageState[];
}

interface SetUserPackage {
    type: typeof SET_USER_PACKAGE;
    payload: UserPackageState[];
}

export interface UpdateUserPackage{
    type: typeof UPDATE_USER_PACKAGE;
    payload: UserPackage;
}

interface ClearPackage {
    type: typeof CLEAR_PACKAGE;
    payload: PackageState;
}

interface AddPackage {
    type: typeof ADD_PACKAGE;
    payload: PackageState;
}

interface RemovePackage {
    type: typeof REMOVE_PACKAGE;
    payload: PackageState;
}

export type PackageActionType =
    | UpdatePackage
    | SetPackage
    | ClearPackage
    | UpdatePackageMode
    | AddPackage
    | RemovePackage;


interface UpdatePackageCurrent {
    type: typeof UPDATE_PACKAGE_CURRENT;
    payload: PackageState;
}

interface SetPackageCurrent {
    type: typeof SET_PACKAGE_CURRENT;
    payload: PackageState;
}

interface ClearPackageCurrent {
    type: typeof CLEAR_PACKAGE_CURRENT;
}

export type PackageCurrentActionType =
    | UpdatePackageCurrent
    | SetPackageCurrent
    | ClearPackageCurrent;



export type UserPackageActionType =
    | SetUserPackage
    | UpdateUserPackage;
