import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppState } from '../../reducers'
import {
    //models
    CertificateModal,

    // constants package
    SET_CERTIFICATE,
    ADD_CERTIFICATE,

    // loading
    START_LOADING,
    STOP_LOADING,

    // constants alert
    SET_FAILELD,
    SET_SUCCESS,

} from "../../../models";
import {
    addCertificateApi,
    getListCertificateApi
} from '../../../api';
import {
    getAllOpportunitiesAction,
    startLoading,
    stopLoading
} from '../index'



// get list category
export const getCertificateAction = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getListCertificateApi().xhr;

            // set account info
            if( response ){
                dispatch({type: SET_CERTIFICATE, payload: response})
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
export const addCertificateAction = (params: any): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await addCertificateApi(params).xhr;

            // set account info
            if( response ){
                dispatch({type: ADD_CERTIFICATE, payload: response})

                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Certificates added successfully'}})
                return true;
            }
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            return false;
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};
