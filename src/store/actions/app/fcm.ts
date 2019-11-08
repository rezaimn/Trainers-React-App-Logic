import {ThunkAction} from "redux-thunk";
import {AppState} from "../../reducers";
import {Action} from "redux";

import {
    postSetTokenFcmApi,
    getNotificationsApi
} from "../../../api";

import { START_LOADING , STOP_LOADING, SET_NOTIFICATIONS, SET_FAILELD}  from '../../../models'

import {
    startLoading,
    stopLoading
} from '../index'

export const setTokenFcmAction = (token: string, android: string, uuid:string): ThunkAction<void, AppState, null, Action<string>> => {
    return async () => {

        try {
            const response = await postSetTokenFcmApi(token, android, uuid);
            if (response) {
                return true;
            }
        } catch (err) {
            return false;
        }
    };
};

export const getNotifcationsFcmAction = (userId: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getNotificationsApi(userId);
            if (response) {
                dispatch({type: SET_NOTIFICATIONS, payload: response})
                return true;
            }
        } catch (err) {
            dispatch({type: SET_FAILELD, payload: { message: err }})
            return false;
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};