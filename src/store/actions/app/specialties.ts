import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppState } from '../../reducers'
import {
    //models
    SpecialtiesModal,

    // constants package
    SET_SPECIALITIES,

    // loading
    START_LOADING,
    STOP_LOADING,

    // constants alert
    SET_FAILELD
    
} from "../../../models";
import {
    getListSpecialiesApi
} from '../../../api';
import {
    startLoading,
    stopLoading
} from '../index'



// get list category
export const getSpecialitiesAction = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getListSpecialiesApi().xhr;

            // set account info
            if( response ){
                dispatch({type: SET_SPECIALITIES, payload: response})
            }
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

