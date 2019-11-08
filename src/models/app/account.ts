/**
 * ACCOUNT ACTIONS
 */
import {FranchiseState, CityGeoState, CountryState, StateGeoState, CertificateModal, SpecialtiesModal} from "../";

// account
export const SET_ACCOUNT_USER_PARAMS = "SET_ACCOUNT_USER_PARAMS";
export const UPDATE_ACCOUNT_USER_PARAMS = "UPDATE_ACCOUNT_USER_PARAMS";
export const CLEAR_ACCOUNT_USER_PARAMS = "CLEAR_ACCOUNT_USER_PARAMS";
export const SET_ACCOUNT_USER_FAILED = "SET_ACCOUNT_USER_FAILED";
export const SET_UPDATE_USER = "SET_UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_ACCOUNT_USER_PROFILE = "UPDATE_ACCOUNT_USER_PROFILE";


export const SET_LIST_USERS = "SET_LIST_USERS";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const ADD_LIST_USERS = "ADD_LIST_USERS";
export const CLEAR_LIST_USERS = "CLEAR_LIST_USERS";
// export const FAILED_LIST_USERS = "FAILED_LIST_USERS";

// Token
export const SET_TOKEN = "SET_TOKEN";
export const UPDATE_TOKEN = "UPDATE_TOKEN";
export const CLEAR_TOKEN = "CLEAR_TOKEN";

// Token
export const SET_UNAUTHORIZED = "SET_UNAUTHORIZED";

/**
 * Type Checking Actions
 * Define interface of State
 */
export interface TrainerDetails {
        title: string,
        start_year: string,
        profession: string,
        searchable: boolean,
        rate_per_session_amount: number,
        rate_per_session_currency:string,
        Certifications:CertificateModal[],
        Specialities:SpecialtiesModal[]
}

export interface UserFilters {
    role: string,
    status: any|null,
    email: string,
    fullname: string,
    zipcode: string,
    searchable: any|null,
    userPackage: string,
    registerDate: string,
}

export interface BankData {
    id?: string;
    object?: string;
    account?: string;
    account_holder_name:string;
    account_holder_type: string;
    bank_name?: string;
    country: string;
    currency: string;
    default_for_currency?: boolean;
    fingerprint?: string;
    last4?: number;
    metadata?: {},
    routing_number:string;
    status?: string;
    account_number:string;
}

export interface UserFranchise {
    id: number;
    name: string;
    geometry: any;
    city_id: number;
    admin: number;
    user?: AccountState;
    active: boolean;
    franchise_id?: number;
    city: any;
    _Franchise: FranchiseInner;
}

export interface FranchiseInner {
    admin: number;
    city_id: number;
    created_at: string;
    geometry: any[];
    id: number;
    name: string;
    updated_at: string;

}

export interface Currencies {
    id:number,
    name:string

}

export const initialUserFilters: UserFilters = {
    role: '',
    status: false,
    email: '',
    fullname: '',
    zipcode: '',
    searchable: false,
    userPackage: '',
    registerDate: '',
}
export const initialBankAccount: BankData = {
    country: "us",
    currency: "usd",
    account_holder_name: "",
    account_holder_type: "individual",
    account_number: "",
    routing_number: ""
}

export interface userData {
    id: number;
    email: string;
    firstname?: string;
    lastname?: string;
    avatar?: string;
    reference?: string;
    status?: boolean;
    dob: string;
    zipcode?: string;
    created_at?: string;
    country_id: number;
    state_id: number;
    city_id: number;
    Franchise?: UserFranchise[];
    FranchiseAdmin?: UserFranchise[];
    role: string;
    roles?:any[];
    phone: string;
    password: string;
    gender: string;
    bankData?: BankData;
    bankAccounts?:any;
    bankDataChanged?:boolean;
    City?: CityGeoState;
    Country?: CountryState;
    State?: StateGeoState;
    TrainerDetails?: TrainerDetails;
}

export interface AccountState {
    id: number;
    email: string;
    firstname?: string;
    lastname?: string;
    avatar?: string;
    reference?: string;
    status?: boolean;
    dob: string;
    zipcode?: string;
    created_at?: string;
    country_id: number;
    state_id: number;
    city_id: number;
    Franchise?: FranchiseState[];
    FranchiseAdmin?: FranchiseState[];
    role: string;
    roles?:any[];
    phone: string;
    password: string;
    confirmPassword: string;
    description: string;
    gender: string;
    bankData?: BankData;
    bankAccounts?:any;
    bankDataChanged?:boolean;
    City?: CityGeoState;
    Country?: CountryState;
    State?: StateGeoState;
    TrainerDetails?: TrainerDetails;

}

export interface IUnauthorized {
    message: string;
    status: number;
}

export interface TokenState {
    type?: string;
    token?: string | null | undefined;
}

export interface ResponseAccount {
    user: AccountState;
    token: TokenState;
}

/**
 *  Action Creators && SignIn
 */

interface UpdateAccountUser {
    type: typeof UPDATE_ACCOUNT_USER_PARAMS;
    payload: AccountState;
}

interface SetAccountUser {
    type: typeof SET_ACCOUNT_USER_PARAMS;
    payload: AccountState;
}

interface ClearAccountUser {
    type: typeof CLEAR_ACCOUNT_USER_PARAMS;
    payload: AccountState;
}

interface DeleteUser {
    type: typeof DELETE_USER;
    payload: any;
}

interface FailedAccountUser {
    type: typeof SET_ACCOUNT_USER_FAILED;
    payload: string;
}

interface SetUpdateUser {
    type: typeof SET_UPDATE_USER;
    payload: AccountState;
}

export type AccountActionType =
    | UpdateAccountUser
    | SetAccountUser
    | ClearAccountUser
    | FailedAccountUser;

/**
 *  Action Creators && Token
 */

interface UpdateToken {
    type: typeof UPDATE_TOKEN;
    payload: TokenState;
}

interface SetToken {
    type: typeof SET_TOKEN;
    payload: TokenState;
}

interface ClearToken {
    type: typeof CLEAR_TOKEN;
}

export type TokenActionType = UpdateToken | SetToken | ClearToken;

interface SetListUser {
    type: typeof SET_LIST_USERS;
    payload: AccountState[];
}

interface SetUserProfile {
    type: typeof SET_USER_PROFILE;
    payload: AccountState;
}


interface AddListUser {
    type: typeof ADD_LIST_USERS;
    payload: AccountState[];
}

interface ClearListUser {
    type: typeof CLEAR_LIST_USERS;
}

interface SetUnauthorized {
    type: typeof SET_UNAUTHORIZED;
    payload: IUnauthorized;
}

interface UpdateUserProfile {
    type: typeof UPDATE_ACCOUNT_USER_PROFILE;
    payload: AccountState;
}

export type ListUserActionType =
    | SetListUser
    | AddListUser
    | ClearListUser
    | FailedAccountUser
    | SetUnauthorized
    | SetUserProfile
    | SetUpdateUser
    | DeleteUser
    | UpdateUserProfile;
