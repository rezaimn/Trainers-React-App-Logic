import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppState } from '../../reducers'
import {
    //models
    CouponsParams,

    // constants package
    CLEAR_COUPONSE,
    SET_COUPONSE,
    ADD_COUPONSE,
    UPDATE_COUPONSE,
    REMOVE_COUPONSE,
    SET_COUPONSE_CURRENT,
    CLEAR_COUPONSE_CURRENT,
    UPDATE_COUPONSE_CURRENT,

    // loading
    START_LOADING,
    STOP_LOADING,

    // constants alert
    SET_FAILELD,
    SET_SUCCESS,
    CouponFilters,
} from "../../../models";
import {
    getCouponsApi,
    addCouponsApi,
    updateCouponsApi,
    deleteCouponsApi,
    getCouponsApiById,
} from '../../../api';
import {
    startLoading,
    stopLoading
} from '../index'



// get list Coupon
// export const getCouponsAction = (page: number, filters: CouponFilters): ThunkAction<void, AppState, null, Action<string>> => {
export const getCouponsAction = (): ThunkAction<void, AppState, null, Action<string>> => {
return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            // const response = await getCouponsApi(page, filters).xhr;
            const response = await getCouponsApi().xhr;

            // set account info
            if( response ){
                dispatch({type: SET_COUPONSE, payload: response})
            }
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

// add Coupon
export const addCouponsAction = (params: CouponsParams): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {
        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await addCouponsApi(params).xhr;

            // set account info
            if( response ){
                dispatch({type: ADD_COUPONSE, payload: response})
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Coupon added successfully'}})
                return true
            }
        }catch(err){
            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            return false
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

// edit Coupon
export const editCouponsAction = (id: string, params: CouponsParams): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await updateCouponsApi(id, params).xhr;

            // set account info
            if( response ){

                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Coupon edited successfully'}})

                dispatch({type: UPDATE_COUPONSE, payload: response})
                dispatch({type: UPDATE_COUPONSE_CURRENT, payload: response})
            }
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

// delete Coupon
export const deleteCouponsAction = (id: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await deleteCouponsApi(id).xhr;

            // set account info
            if( response ){
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Coupon removed successfully'}})
                
                dispatch({type: REMOVE_COUPONSE, payload: response})
            }
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

// get by id Coupon
export const getByIdCouponsAction = (id: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getCouponsApiById(id).xhr;

            // set account info
            if( response ){
                
                dispatch({type: SET_COUPONSE_CURRENT, payload: response})
            }
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const resetCurrentCoupons = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any) => {
        dispatch({type: CLEAR_COUPONSE_CURRENT})
    };
};
