import {ThunkAction} from "redux-thunk";
import {AppState} from "../../reducers";
import {Action} from "redux";
import { startLoading, stopLoading } from "..";
import {
    START_LOADING,
    SET_FAILELD,
    STOP_LOADING,
    SET_CHAT_LIST,
    Toggle_CURRENT_ROOM_ID,
    TOGGLE_NEW_MESSAGE, ADD_TO_CHAT_LIST
} from "../../../models";

import {
    getChatWithApi,
    getChatListApi
} from "../../../api";

export const getChatWithAction = (userId: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getChatWithApi(userId).xhr;

            if (response) {
                dispatch({type: Toggle_CURRENT_ROOM_ID, payload: response.room })
                dispatch({type: ADD_TO_CHAT_LIST, payload: response})
                return response;
            }

        } catch (err) {
            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
            return false;

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const getChatListyAction = (userId: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getChatListApi(userId).xhr;

            if (response) {
                dispatch({type: SET_CHAT_LIST, payload: response})
                return response;
            }

        } catch (err) {
            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
            return false;

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const toggleCurrentRoomId = (roomId: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {
        dispatch({type: Toggle_CURRENT_ROOM_ID, payload: roomId })
    };
};

export const toggleNewMessage = (isNewMessage: boolean): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {
        dispatch({type: TOGGLE_NEW_MESSAGE, payload: isNewMessage })
    };
};
