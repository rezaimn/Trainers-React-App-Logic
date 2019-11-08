import {ThunkAction} from 'redux-thunk'
import {Action} from 'redux'
import {AppState} from '../../reducers'
import {
    //models
    FranchiseParams,

    // constants franchise
    SET_FRANCHISE,
    UPDATE_FRANCHISE,
    ADD_FRANCHISE,
    START_LOADING_FRANCHISE,
    STOP_LOADING_FRANCHISE,
    REMOVE_FRANCHISE,
    SET_SELECTED_FRANCHISE_FOR_UPDATE,

    // constants alert
    SET_FAILELD,
    SET_SUCCESS,
    CLEAR_FRANCHISE,
    SET_CITY_LIST,
    SET_STATE_LIST,
    SET_COUNTRY_LIST,
    STOP_LOADING_GEO_CITY,
    SET_NOT_ASSIGNED_FRANCHISE,
    FranchiseState, ADD_NOT_ASSIGNED_FRANCHISE, updateAdminFranchiseList,
} from "../../../models";
import {
    getListFranchise,
    addFranchiseApi,
    editFranchiseApi,
    deleteFranchiseApi,
    getFranchiseById,
    getUserFranchiseBaseRoleApi, updateAdminFranchiseApi
} from '../../../api';
import {
    getUserProfileAction,
    startLoading,
    stopLoading
} from '../index'
import {
    stateListAction,
    cityListAction
} from '../index'


// get list franchise
export const franchiseListAction = (cityId: string = ''): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING_FRANCHISE)(dispatch, getState, null)
            const response = await getListFranchise(cityId, '').xhr;

            // set account info
            if (response) {
                dispatch({type: SET_FRANCHISE, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING_FRANCHISE)(dispatch, getState, null)
        }
    };
};

export const franchiseResetAction = (): ThunkAction<void, AppState, null, Action<string>> => {
    return (dispatch: any) => {
        dispatch({type: CLEAR_FRANCHISE});
    }
}

// get list franchise
export const getFranchiseByIdAction = (franchiseId: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING_FRANCHISE)(dispatch, getState, null)
            const response = await getFranchiseById(franchiseId).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_SELECTED_FRANCHISE_FOR_UPDATE, payload: response});
                dispatch(stateListAction(response.city.State.Country.id, true));
                dispatch(cityListAction(response.city.State.Country.id, response.city.State.id, true));
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING_FRANCHISE)(dispatch, getState, null)
        }
    };
};

// add franchise
export const addFranchiseAction = (params: FranchiseParams): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING_FRANCHISE)(dispatch, getState, null)
            const response = await addFranchiseApi(params).xhr;

            // set account info
            if (response) {
                dispatch({type: ADD_FRANCHISE, payload: response})

                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'franchise added successfully'}})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING_FRANCHISE)(dispatch, getState, null)
        }
    };
};

// edit franchise
export const editFranchiseAction = (id: string, params: FranchiseParams): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING_FRANCHISE)(dispatch, getState, null)
            const response = await editFranchiseApi(id, params).xhr;

            // set account info
            if (response) {

                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'franchise edited successfully'}})

                dispatch({type: UPDATE_FRANCHISE, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING_FRANCHISE)(dispatch, getState, null)
        }
    };
};

// delete franchise
export const deleteFranchiseAction = (id: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING_FRANCHISE)(dispatch, getState, null)
            const response = await deleteFranchiseApi(id).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'franchise removed successfully'}})

                dispatch({type: REMOVE_FRANCHISE, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING_FRANCHISE)(dispatch, getState, null)
        }
    };
};

// get user franchises base on his role
export const getUserFranchisesBaseOnRoleAction = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING_FRANCHISE)(dispatch, getState, null)
            const response = await getUserFranchiseBaseRoleApi().xhr;

            // set account info
            if (response) {
                dispatch({type: SET_FRANCHISE, payload: response});
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING_FRANCHISE)(dispatch, getState, null)
        }
    };
};

export const notAssignedFranchiseListAction = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING_FRANCHISE)(dispatch, getState, null)
            const response = await getListFranchise('', false).xhr;
            if (response) {
                dispatch({type: SET_NOT_ASSIGNED_FRANCHISE, payload: response});
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING_FRANCHISE)(dispatch, getState, null)
        }
    };
}

export const addToNotAssignedFranchiseListAction = (franchise: FranchiseState): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            dispatch({type: ADD_NOT_ASSIGNED_FRANCHISE, payload: franchise});
        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING_FRANCHISE)(dispatch, getState, null)
        }
    };
}


export const updateAdminFranchiseAction = (body: updateAdminFranchiseList): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING_FRANCHISE)(dispatch, getState, null)
            const response = await updateAdminFranchiseApi(body).xhr;

            // set account info
            if (response) {
                dispatch(getUserProfileAction(body.admin))
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'franchise added successfully'}})
            }

        } catch (err) {
            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING_FRANCHISE)(dispatch, getState, null)
        }
    };
};
