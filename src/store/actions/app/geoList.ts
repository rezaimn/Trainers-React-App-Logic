import {ThunkAction} from 'redux-thunk'
import {Action} from 'redux'
import {AppState} from '../../reducers'
import {
    SET_COUNTRY_LIST,
    START_LOADING_GEO_COUNTRY,
    STOP_LOADING_GEO_COUNTRY,
    START_LOADING_GEO_CITY,
    START_LOADING_GEO_STATE,
    STOP_LOADING_GEO_CITY,
    STOP_LOADING_GEO_STATE,
    SET_STATE_LIST,
    SET_CITY_LIST,

    // constanst
    SET_FAILELD
} from "../../../models";
import {
    getListCountry,
    getListState,
    getListCity,
} from '../../../api';
import {
    startLoading,
    stopLoading
} from '../index'

// user action to signin through our api
export const countryListAction = (all: boolean): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {


        try {
            startLoading(START_LOADING_GEO_COUNTRY)(dispatch, getState, null)
            const response = await getListCountry(all).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_COUNTRY_LIST, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING_GEO_COUNTRY)(dispatch, getState, null)
        }
    };
};

export const stateListAction = (countryId: string, all: boolean): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING_GEO_STATE)(dispatch, getState, null)
            const response = await getListState(countryId, all).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_STATE_LIST, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING_GEO_STATE)(dispatch, getState, null)
        }
    };
};

export const cityListAction = (countryId: string, stateId: string, all: boolean): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {


        try {
            startLoading(START_LOADING_GEO_CITY)(dispatch, getState, null)
            const response = await getListCity(countryId, stateId, all).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_CITY_LIST, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING_GEO_CITY)(dispatch, getState, null)
        }
    };
};

export const clearGeoDataAction = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {
        try {
            dispatch({type: SET_CITY_LIST, payload: []});
            dispatch({type: SET_STATE_LIST, payload: []});
            dispatch({type: SET_COUNTRY_LIST, payload: []});
        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING_GEO_CITY)(dispatch, getState, null)
        }
    };
};

