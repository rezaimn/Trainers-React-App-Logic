import {ThunkAction} from 'redux-thunk'
import {Action} from 'redux'
import {AppState} from '../../reducers'
import {
    //models
    PackageParams,

    // constants package
    CLEAR_PACKAGE,
    SET_PACKAGE,
    ADD_PACKAGE,
    UPDATE_PACKAGE,
    REMOVE_PACKAGE,
    SET_PACKAGE_CURRENT,
    CLEAR_PACKAGE_CURRENT,
    UPDATE_PACKAGE_CURRENT,

    // loading
    START_LOADING,
    STOP_LOADING,

    // constants alert
    SET_FAILELD,
    SET_SUCCESS,
    SET_USER_PACKAGE,
    SET_USER_CURRENT_PACKAGE,
    UPDATE_USER_PACKAGE,
    UserPackage,
    UPDATE_PACKAGE_MODE,
    updatePackageModeState

} from "../../../models";
import {
    getPackageApi,
    addPackageApi,
    updatePackageApi,
    deletePackageApi,
    getPackageApiById, getUserPackageList, updateUserPackage, updatePackageMode,
} from '../../../api';
import {
    startLoading,
    stopLoading
} from '../index'


// get list category
export const getPackageAction = (page: number): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getPackageApi(page).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_PACKAGE, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};
////////////////user package

export const getUserPackageAction = (userId: number, status: string=''): ThunkAction<void, AppState, null, Action<string>> => {

    return async (dispatch: any, getState: any) => {
        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getUserPackageList(userId, status).xhr;
            // set account info
            if (response) {
                dispatch({type: SET_USER_PACKAGE, payload: response})
            }
        } catch (err) {
            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const updateUserPackageAction = (userPackageId: number, body: UserPackage): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await updateUserPackage(userPackageId, body).xhr;
            // set account info
            if (response) {
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'User Package edited successfully'}})
                dispatch({type: UPDATE_USER_PACKAGE, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const updatePackageModeAction = (packageId: number, body: any): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await updatePackageMode(packageId, body).xhr;
            // set account info
            if (response) {
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Package Mode Updated successfully'}})
                const updatedMode:updatePackageModeState={
                    id:packageId,
                    mode:body.mode
                }
                dispatch({type: UPDATE_PACKAGE_MODE, payload:updatedMode })
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};


// add category
export const addPackageAction = (params: PackageParams): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await addPackageApi(params).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Package added successfully'}})
            }

        } catch (err) {
            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

// edit category
export const editPackageAction = (id: string, params: PackageParams): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await updatePackageApi(id, params).xhr;

            // set account info
            if (response) {

                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Package edited successfully'}})

                dispatch({type: UPDATE_PACKAGE, payload: response})
                dispatch({type: UPDATE_PACKAGE_CURRENT, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

// delete category
export const deletePackageAction = (id: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await deletePackageApi(id).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'package removed successfully'}})

                dispatch({type: REMOVE_PACKAGE, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

// get by id category
export const getByIdPackageAction = (id: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getPackageApiById(id).xhr;

            // set account info
            if (response) {

                dispatch({type: SET_PACKAGE_CURRENT, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const resetCurrentPackage = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any) => {
        dispatch({type: CLEAR_PACKAGE_CURRENT})
    };
};
