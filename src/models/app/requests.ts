//////////request List
import {AccountState} from "./account";

//requests
export const SET_REQUEST = "SET_REQUEST";
export const REMOVE_REQUEST = "REMOVE_REQUEST";
export const SET_CURRENT_REQUEST = "SET_CURRENT_REQUEST";

export const TRAINER_TO_REQUEST = "TRAINER_TO_REQUEST";

export const DELETE_TRAINER_FROM_REQUEST = "DELETE_TRAINER_FROM_REQUEST";

export const REMOVE_TRAINER_FROM_OPP_LIST = "REMOVE_TRAINER_FROM_OPP_LIST";

export const ADD_TRAINER_TO_OPP_LIST = "ADD_TRAINER_TO_OPP_LIST";

export const SET_AVAILABLE_TRAINERS = "SET_AVAILABLE_TRAINERS";

export const REMOVE_TRAINER_FROM_AVAILABLE_LIST = "REMOVE_TRAINER_FROM_AVAILABLE_LIST";

export const ADD_TRAINER_TO_AVAILABLE_LIST = "ADD_TRAINER_TO_AVAILABLE_LIST";

export const UPDATE_OPPORTUNITY_STATUS = "UPDATE_OPPORTUNITY_STATUS";
///////////Opportunities
export const SET_REQUEST_OPPORTUNITIES = "SET_REQUEST_OPPORTUNITIES";

export const SET_USER_OPPORTUNITIES = "SET_USER_OPPORTUNITIES";

export interface currentRequestState {
    id: number;
    user_id: number;
    place: string;
    periodicity: string;
    prefer_sex: string;
    addition_info: string;
    created_at: string;
    updated_at: string;
    user: any;
    goals: any[];
    injuries: any[];
    hours: any[];
    status: string;
}

export interface assignToRequest {
    client_id: number;
    trainer_id: number;
    request_id: number;
}

interface updateOppStatus {
    type: typeof UPDATE_OPPORTUNITY_STATUS;
    payload: { oppId: number, status: string, statusName: string };
}

interface currentRequest {
    type: typeof SET_CURRENT_REQUEST;
    payload: currentRequest;
}

export interface requestFilters {
    periodicity: string,
    place: string,
    prefer_sex: string,
    created_at: string,
    userName: string,
}

interface RemoveRequest {
    type: typeof REMOVE_REQUEST;
    payload: currentRequestState;
}

interface removeTrainerFromOpp {
    type: typeof REMOVE_TRAINER_FROM_OPP_LIST;
    payload: { id: number };
}

interface addTrainerToOpp {
    type: typeof ADD_TRAINER_TO_OPP_LIST;
    payload: {};
}

interface setAvailableTrainers {
    type: typeof SET_AVAILABLE_TRAINERS;
    payload: AccountState[];
}

interface removeTrainerFromAvailable {
    type: typeof REMOVE_TRAINER_FROM_AVAILABLE_LIST;
    payload: { id: number };
}

interface addTrainerToAvailable {
    type: typeof ADD_TRAINER_TO_AVAILABLE_LIST;
    payload: AccountState;
}


export interface RequestState {
    data: currentRequestState[];
    lastPage: number;
    page: number;
    perPage: number;
    total: number;
}

interface RequestList {
    type: typeof SET_REQUEST;
    payload: RequestState;
}

interface TrainerToRequest {
    type: typeof TRAINER_TO_REQUEST;
    payload: RequestState;
}

interface DeleteTrainerFromRequest {
    type: typeof DELETE_TRAINER_FROM_REQUEST;
    payload: RequestState;
}


export interface opportunity {
    id: number;
    client_id: number;
    trainer_id: number;
    request_id: number;
    status: string;
    type: string;
    request_info: {
        id: 1,
        place: string
        user_id: number;
        created_at: string;
        prefer_sex: string;
        updated_at: string;
        periodicity: string;
        addition_info: string;
    },
    trainerInfo: AccountState;
    customerInfo : AccountState;
    message: string;
    created_at: string;
    updated_at: string;
}

export interface opportunitiesParams {
    data:{
        data: opportunity[];
        lastPage: number;
        page: number;
        perPage: number;
        total: number;
    }
    RequestData: currentRequestState;
}

export interface opportunitiesState extends opportunitiesParams {

}

interface OpportunitiesList {
    type: typeof SET_REQUEST_OPPORTUNITIES;
    payload: opportunitiesState;
}

interface UserOpportunitiesList {
    type: typeof SET_USER_OPPORTUNITIES;
    payload: opportunity[];
}
export type RequestActionType =
    RequestList |
    RemoveRequest |
    TrainerToRequest;

export type OpportunitiesActionType =
    OpportunitiesList |
    DeleteTrainerFromRequest |
    removeTrainerFromOpp |
    addTrainerToOpp |
    setAvailableTrainers |
    removeTrainerFromAvailable |
    addTrainerToAvailable |
    currentRequest|
    updateOppStatus|
    UserOpportunitiesList;
