// get list category
import {ThunkAction} from "redux-thunk";
import {AppState} from "../../reducers";
import {Action} from "redux";
import {startLoading, stopLoading} from "..";
import {
    SET_FAILELD,
    START_LOADING,
    STOP_LOADING,
    SET_SUCCESS,
    earningUpdateModel,
    UPDATE_SESSION_EARNING,
    earningFilterModel,
    GET_SESSION_EARNING, sessionFilters

} from "../../../models";

import {} from "../../../api/requests";
import {
    addNewSession,
    deleteSession,
    getAllSessionList,
    getOpportunitySessionList,
    getSessionById, getSessionEarnings,
    updateSession, updateSessionEarning
} from "../../../api/sessions";
import {
    ADD_SESSION,
    CURRENT_SESSION, DELETE_SESSION,
    sessionParams,
    SET_SESSION_LIST,
    UPDATE_SESSION,
    SET_SESSION_LIST_COMPLETED,
} from "../../../models/app/sessions";

import {initialStateEarningList} from "../../reducers/app/sessions";


export const getAllSessionsAction = (status: string[], type: 'all' | 'filter' = 'all',filters:sessionFilters): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getAllSessionList(status,filters).xhr;

            // set account info
            if (response) {
                if (type === 'filter') {
                    dispatch({type: SET_SESSION_LIST_COMPLETED, payload: response})
                } else {
                    dispatch({type: SET_SESSION_LIST, payload: response})
                }
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const getOpportunitySessionsAction = (oppId: number, status: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getOpportunitySessionList(oppId, status).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_SESSION_LIST, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const getCurrentSessionAction = (id: number): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getSessionById(id).xhr;

            // set account info
            if (response) {
                dispatch({type: CURRENT_SESSION, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const addSessionAction = (body: sessionParams): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await addNewSession(body).xhr;

            // set account info
            if (response) {
                startLoading(START_LOADING)(dispatch, getState, null)
                const currentSession = await getSessionById(response.id).xhr;
                dispatch({type: ADD_SESSION, payload: currentSession})
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Session added successfully'}})
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

export const updateSessionAction = (body: sessionParams, id: number): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await updateSession(body, id).xhr;

            // set account info
            if (response) {

                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Session edited successfully'}})
                dispatch({type: UPDATE_SESSION, payload: response})
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

export const deleteSessionAction = (id: number): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await deleteSession(id).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Session removed successfully'}})
                dispatch({type: DELETE_SESSION, payload: id})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};


export const updateSessionEarningAction = (id: number, body: earningUpdateModel): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await updateSessionEarning(id, body).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Session Earning updated successfully'}})
                dispatch({type: UPDATE_SESSION_EARNING, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};


export const getAllSessionEarningAction = (earningFilters: earningFilterModel): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getSessionEarnings(earningFilters).xhr;

            // set account info
            if (response) {
                dispatch({type: GET_SESSION_EARNING, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const clearEarningSessions = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            dispatch({type: GET_SESSION_EARNING, payload:initialStateEarningList})
        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};
