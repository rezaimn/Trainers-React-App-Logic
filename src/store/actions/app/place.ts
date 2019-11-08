import {ThunkAction} from "redux-thunk";
import {AppState} from "../../reducers";
import {Action} from "redux";
import { startLoading, stopLoading } from "..";
import {
    SET_PLACE,
    START_LOADING,
    STOP_LOADING,
    SET_FAILELD
} from "../../../models";

import {
    getListPlaceApi
} from "../../../api";

export const getAllPlaceAction = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getListPlaceApi().xhr;

            // set account info
            if (response) {
                dispatch({type: SET_PLACE, payload: response})
                return true;
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