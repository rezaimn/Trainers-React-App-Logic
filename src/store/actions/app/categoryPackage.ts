import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppState } from '../../reducers'
import {
    //models
    CategoryPackageParams,

    // constants package
    CLEAR_CATEGORY_PACKAGE,
    SET_CATEGORY_PACKAGE,
    ADD_CATEGORY_PACKAGE,
    UPDATE_CATEGORY_PACKAGE,
    REMOVE_CATEGORY_PACKAGE,

    // loading
    START_LOADING,
    STOP_LOADING,

    // constants alert
    SET_FAILELD,
    SET_SUCCESS
    
} from "../../../models";
import {
    getCategoryPackageApi,
    addCategoryPackageApi,
    updateCategoryPackageApi,
    deleteCategoryPackageApi,
    getCategoryPackageApiById,
    getPackageApi
} from '../../../api';
import {
    startLoading,
    stopLoading
} from '../index'



// get list category
export const getCategoryPackageAction = (status: boolean = true, mode?: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getCategoryPackageApi(status, mode).xhr;

            // set account info
            if( response ){
                dispatch({type: SET_CATEGORY_PACKAGE, payload: response})
            }
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

// add category
export const addCategoryPackageAction = (params: FormData): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await addCategoryPackageApi(params).xhr;

            // set account info
            if( response ){
                dispatch({type: ADD_CATEGORY_PACKAGE, payload: response})

                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'category added successfully'}})
            }
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

// edit category
export const editCategoryPackageAction = (id: string, params: FormData): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await updateCategoryPackageApi(id, params).xhr;

            // set account info
            if( response ){

                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'category edited successfully'}})

                dispatch({type: UPDATE_CATEGORY_PACKAGE, payload: response})
            }
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

// delete category
export const deleteCategoryPackageAction = (id: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await deleteCategoryPackageApi(id).xhr;

            // set account info
            if( response ){
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'category removed successfully'}})
                
                dispatch({type: REMOVE_CATEGORY_PACKAGE, payload: response})
            }
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

// get by id category
export const getByIdCategoryPackageAction = (id: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getCategoryPackageApiById(id).xhr;

            // set account info
            if( response ){
                // dispatch({type: SET_SUCCESS, payload: {success: true, message: 'franchise removed'}})
                
                // dispatch({type: REMOVE_CATEGORY_PACKAGE, payload: response})
            }
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};


// TODO : fix server
export const getAllPackagesPackageAction = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            //startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getPackageApi(null, 'PUBLISH', 'custom').xhr;
            
            if( response ){
                const res = {
                    type: 'custom',
                    id: 'custom_package',
                    Packages: response
                }
                if(response){
                    dispatch({type: ADD_CATEGORY_PACKAGE, payload: res})
                }
            }
            return true;
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            return false;
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};
