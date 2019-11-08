/**
 * ACCOUNT ACTIONS
 */
// account
export const SET_SUCCESS = "SET_SUCCESS";
export const SET_FAILELD = "SET_FAILELD";


export interface ISuccess {
    success: boolean;
    message: string;
}

export interface IError {
    message: string;
}

/**
 *  Action Creators && alert
 */

interface SetSuccess {
    type: typeof SET_SUCCESS;
    payload: ISuccess;
}

interface SetFailed {
    type: typeof SET_FAILELD;
    payload: IError;
}


export type AlertActionType = SetSuccess | SetFailed;
