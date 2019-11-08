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
    TOGGLE_NEW_MESSAGE, ADD_TO_CHAT_LIST, DASHBOARD_DATA
} from "../../../models";

import {
    getChatWithApi,
    getChatListApi
} from "../../../api";
import {getDashboardData} from "../../../api/dashboard";

export const getDashboardDataAction = (userId: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getDashboardData().xhr;

            if (response) {
                dispatch({type: DASHBOARD_DATA, payload: response[0]})
                return response[0];
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

