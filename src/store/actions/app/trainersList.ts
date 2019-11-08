import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppState } from '../../reducers'
import {
    // constants package
    SET_ALLTRAINERS,
    SET_AVAILABLE_TRAINERS_STATUS,


    // loading
    START_LOADING,
    STOP_LOADING,
    SET_SUCCESS,

    // constants alert
    SET_FAILELD,
    REMOVE_AVAILABLE_TRAINERS,
    SET_CLIENTS_TRAINERS
    
} from "../../../models";
import {
    getAllTrainesApi,
    getTrainersWithStatusApi,
    updateOpportunityStatusApi
} from '../../../api';
import {
    startLoading,
    stopLoading
} from '../index'





export const getAllTrainersAction = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getAllTrainesApi().xhr;

            // set account info
            if( response ){
                dispatch({type: SET_ALLTRAINERS, payload: response})
            }
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};


export const getAVailableTrainersAction = (userId: string, status: string[]): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getTrainersWithStatusApi(userId, status).xhr;

            // set account info
            if( response ){
                dispatch({type: SET_AVAILABLE_TRAINERS_STATUS, payload: response})
            }
            
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const updateOpportunityAvailableAction = (status: any, oppId:number,): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {
        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await updateOpportunityStatusApi(oppId,status).xhr;

            // set account info
            if (response) {
                dispatch({type: REMOVE_AVAILABLE_TRAINERS, payload: oppId})
                dispatch({
                    type: SET_SUCCESS,
                    payload: {success: true, message: 'Opportunity status updated Successfully'}
                })
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

export const getClientsTrainersAction = (userId: string, status: string[]): ThunkAction<void, AppState, null, Action<string>> => {
    return async(dispatch: any, getState: any) => {

        try{
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getTrainersWithStatusApi(userId, status).xhr;

            // set account info
            if( response ){
                dispatch({type: SET_CLIENTS_TRAINERS, payload: response})
            }
        }catch(err){

            // show error
            dispatch({type: SET_FAILELD, payload: { message: err }})
            
        }finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};
