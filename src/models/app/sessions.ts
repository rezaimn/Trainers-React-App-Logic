import {isNumber} from "util";
import {AccountState} from "./account";
import {initialAccountState} from "../../store/reducers/app/account";
import {SessionState} from "http2";


export const SET_SESSION_LIST = "SET_SESSION_LIST";

export const CURRENT_SESSION = "CURRENT_SESSION";

export const SET_SESSION_LIST_COMPLETED = "SET_SESSION_LIST_COMPLETED"


export const ADD_SESSION = "UPDATE_SESSION";

export const UPDATE_SESSION = "UPDATE_SESSION";

export const DELETE_SESSION = "DELETE_SESSION";


export const UPDATE_SESSION_EARNING = "UPDATE_SESSION_EARNING";
export const GET_SESSION_EARNING = "GET_SESSION_EARNING";


export interface sessionParams {
    request_opportunity_id: number;
    location: string;
    session_date: string;
    late_cancel: boolean;
    message: string;
    status:string;
}
export interface sessionFilters {
    customer:string,
    trainer:string,
    sessionDateFrom:string,
    sessionDateTo:string
}
export interface earningUpdateModel {
    trainer_amount: number;
    franchise_amount: number;
    status:string;
}

export interface earningFilterModel {
    status: string;
    page: number;
    trainerId:number;
}

export interface currentSessionParams {
    id: number;
    request_opportunity_id: number;
    package_id: number;
    location: string;
    session_date: string;
    message: string;
    late_cancel: boolean;
    status: string;
    created_at: string;
    updated_at: string;
    requestOpportunity: {
        id: number;
        client_id: number;
        trainer_id: number;
        request_id: number;
        franchise_id: number;
        status: string;
        type: string;
        request_info: {
            id: number;
            place: string;
            user_id: number;
            created_at: string;
            prefer_sex: string;
            updated_at: string;
            periodicity: string;
            addition_info: string;
        };
        message: string;
        created_at: string;
        updated_at: string;
        trainerInfo: AccountState;
        customerInfo:AccountState;
    }

}


export interface Earning {
    id: number;
    session_id: number;
    trainer_id: number;
    franchise_id: number;
    franchise_admin_id: number;
    trainer_amount: string;
    franchise_amount: string;
    status: "NOT_PAID_OUT" | "PAID_OUT" | "CANCELED";
    updated_at: string;
    franchiseAdminInfo:AccountState
    trainerInfo:AccountState,
    session:currentSessionParams
}


export interface updateSessionParams extends sessionParams {
    id: number;
}

export interface sessionList {
    total: number;
    perPage: number;
    page: number;
    lastPage: number;
    data: currentSessionParams[]
};

export interface EarningList {
    total: number;
    perPage: number;
    page: number;
    lastPage: number;
    data: Earning[]
} 

interface getSessionList {
    type: typeof SET_SESSION_LIST;
    payload: sessionList;
}

interface getSessionListCompleted{
    type: typeof SET_SESSION_LIST_COMPLETED;
    payload: sessionList;
}

interface currentSession {
    type: typeof CURRENT_SESSION;
    payload: currentSessionParams;
}

interface addSession {
    type: typeof ADD_SESSION;
    payload: any;
}

interface updateSession {
    type: typeof UPDATE_SESSION;
    payload: updateSessionParams;
}

interface deleteSession {
    type: typeof DELETE_SESSION;
    payload: number;
}

// interface SetEarningList {
//     type: typeof SET_EARNING_LIST,
//     payload: EarningList
// }

export type SessionActionType =
    | getSessionList
    | currentSession
    | addSession
    | updateSession
    | deleteSession
    | getSessionListCompleted
    // | SetEarningList
    ;

interface updateSessionEarning {
    type: typeof UPDATE_SESSION_EARNING;
    payload: Earning;
}
interface getAllEarnings {
    type: typeof GET_SESSION_EARNING;
    payload: EarningList;
}

export type SessionEarningTypes=
    | updateSessionEarning
    | getAllEarnings;
