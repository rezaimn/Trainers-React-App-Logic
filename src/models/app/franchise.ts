import { AccountState } from "..";

/**
 * ACCOUNT ACTIONS
 */
// franchise
export const SET_FRANCHISE = "SET_FRANCHISE";
export const SET_NOT_ASSIGNED_FRANCHISE = "SET_NOT_ASSIGNED_FRANCHISE";
export const ADD_NOT_ASSIGNED_FRANCHISE = "ADD_NOT_ASSIGNED_FRANCHISE";
export const UPDATE_ADMIN_FRANCHISE = "UPDATE_ADMIN_FRANCHISE";
export const UPDATE_FRANCHISE = "UPDATE_FRANCHISE";
export const CLEAR_FRANCHISE = "CLEAR_FRANCHISE";
export const ADD_FRANCHISE = "ADD_FRANCHISE";
// export const SET_SUCCESS_FRANCHISE = "SET_SUCCESS_FRANCHISE";
export const REMOVE_FRANCHISE = "REMOVE_FRANCHISE";
// export const FAILED_FRANCHISE = "FAILED_FRANCHISE";
export const START_LOADING_FRANCHISE = "START_LOADING_FRANCHISE";
export const STOP_LOADING_FRANCHISE = "STOP_LOADING_FRANCHISE";
export const SET_SELECTED_FRANCHISE_FOR_UPDATE = "SET_SELECTED_FRANCHISE_FOR_UPDATE";
// export const RESET_FRANCHISE = "RESET_FRANCHISE";

/**
 * Type Checking Actions
 * Define interface of State
 */

export interface updateAdminFranchiseList {
    franchise:number[]
    admin: number
}

// for GET method
export interface FranchiseState {
    id: number;
    name: string;
    geometry: any;
    city_id: number;
    admin: number;
    user?: AccountState;
    active: boolean;
    franchise_id?: number;
    city: any;

}

export interface SetSelectedFranchiseForUpdate{
    type: typeof SET_SELECTED_FRANCHISE_FOR_UPDATE;
    payload: FranchiseState;
}

// for POST method
export interface FranchiseParams {
    name: string;
    city: number;
    geometry: [];
}

interface UpdateFranchise {
    type: typeof UPDATE_FRANCHISE;
    payload: FranchiseState;
}

interface SetFranchise {
    type: typeof SET_FRANCHISE;
    payload: FranchiseState[];
}

interface SetNotAssignedFranchise {
    type: typeof SET_NOT_ASSIGNED_FRANCHISE;
    payload: FranchiseState[];
}

interface AddNotAssignedFranchise {
    type: typeof ADD_NOT_ASSIGNED_FRANCHISE;
    payload: FranchiseState;
}

interface ClearFranchise {
    type: typeof CLEAR_FRANCHISE;
    payload: FranchiseState;
}

// interface ResetFranchise {
//     type: typeof RESET_FRANCHISE;
// }

interface AddFranchise {
    type: typeof ADD_FRANCHISE;
    payload: FranchiseState;
}

interface StartLoadingFranchise {
    type: typeof START_LOADING_FRANCHISE;
}

interface RemoveFranchise {
    type: typeof REMOVE_FRANCHISE;
    payload: FranchiseState;
}

interface StopLoadingFranchise {
    type: typeof STOP_LOADING_FRANCHISE;
}

// interface SuccessFranchise {
//     type: typeof SET_SUCCESS_FRANCHISE;
//     payload: AlertState;
// }

export type FranchiseActionType =
    | UpdateFranchise
    | SetFranchise
    | ClearFranchise
    // | FailedFranchise
    | AddFranchise
    | StartLoadingFranchise
    | StopLoadingFranchise
    // | SuccessFranchise
    | RemoveFranchise
    | SetNotAssignedFranchise
    | SetSelectedFranchiseForUpdate
    | AddNotAssignedFranchise;
    // | ResetFranchise;
