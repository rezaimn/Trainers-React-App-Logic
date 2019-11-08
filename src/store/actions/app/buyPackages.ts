import {ThunkAction} from "redux-thunk";
import {AppState} from "../../reducers";
import {Action} from "redux";
import { startLoading, stopLoading } from "..";
import {
    START_LOADING,
    STOP_LOADING,
    SET_FAILELD,
    SET_PACKAGE_FACTOR,
    SET_PACKAGE_PAYMENT
} from "../../../models";

import {
    putBuyNewPackageApi,
    putBuyNewPackageFactorApi,
    getPaymentReponseApi
} from "../../../api";

export const putBuyNewPackageFactorAction = (userId: string, packageId: string, data: any): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await putBuyNewPackageFactorApi(userId, packageId, data);

            // set account info
            if (response) {
                dispatch({type: SET_PACKAGE_FACTOR, payload: response})
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


export const putBuyNewPackageAction = (userId: string, packageId: string, data: any={}): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await putBuyNewPackageApi(userId, packageId, data);

            // set account info
            if (response) {
                dispatch({type: SET_PACKAGE_PAYMENT, payload: response})
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

export const getPaymentReponseAction = (payment_id: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getPaymentReponseApi(payment_id)
            if (response) {
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