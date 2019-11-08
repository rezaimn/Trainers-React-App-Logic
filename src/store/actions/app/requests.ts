// get list category
import {ThunkAction} from "redux-thunk";
import {AppState} from "../../reducers";
import {Action} from "redux";
import {getListUserAction, startLoading, stopLoading} from "..";
import {
    SET_FAILELD,
    SET_REQUEST_OPPORTUNITIES,
    START_LOADING,
    STOP_LOADING,
    SET_REQUEST,
    assignToRequest,
    TRAINER_TO_REQUEST,
    SET_SUCCESS,
    REMOVE_REQUEST,
    DELETE_TRAINER_FROM_REQUEST,
    SET_AVAILABLE_TRAINERS, ADD_TRAINER_TO_OPP_LIST, AccountState, UPDATE_OPPORTUNITY_STATUS, SET_CURRENT_REQUEST,
    currentRequestState, SET_USER_OPPORTUNITIES, UserFilters, initialUserFilters,
    requestFilters,
} from "../../../models";

import {
    assignATrainerToARequest,
    deleteATrainerFromARequest,
    getAllRequestList,
    getRequestOpportunitiesList,
    getUserRequestList,
    updateOpportunityStatusApi,
    postUserRequestApi,
    getUserOpportunityList,
    deleteRequest,
} from "../../../api/requests";
import {getUserList} from "../../../api";

export const getAllRequestAction = (page: number, filters: requestFilters): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getAllRequestList(page, filters).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_REQUEST, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const getUserRequestAction = (userId:number,page: number): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getUserRequestList(userId,page).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_REQUEST, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const currentRequestAction = (selectedRequest: any): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)

            dispatch({type: SET_REQUEST, payload: selectedRequest})


        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};
// delete request
export const deleteRequestAction = (id: string, showMessage=true): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await deleteRequest(id).xhr;

            // set account info
            if (response) {
                if(showMessage)dispatch({type: SET_SUCCESS, payload: {success: true, message: 'request removed'}})
                dispatch({type: REMOVE_REQUEST, payload: response})
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


export const getUserOpportunitiesAction = (id: number, status:string): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getUserOpportunityList(id,status).xhr;

            // set account info

                dispatch({type: SET_USER_OPPORTUNITIES, payload: response})


        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const getAllOpportunitiesAction = (id: number, page: number): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getRequestOpportunitiesList(id, page).xhr;

            // set account info
            if (response) {
                const filters:UserFilters=initialUserFilters;
                filters.role='TR';
                filters.searchable=true;
                filters.status=true;
                const trainerList = await getUserList(filters).xhr;
                const availableTrainers = trainerList.filter(trainer => {
                    let isTrainerAssigned = false;
                    response.data.data.forEach(opp => {
                        if (trainer.id === opp.trainer_id) {
                            isTrainerAssigned = true;
                        }
                    });
                    if (!isTrainerAssigned) {
                        return trainer;
                    }
                })
                dispatch({type: SET_AVAILABLE_TRAINERS, payload: availableTrainers})
                dispatch({type: SET_REQUEST_OPPORTUNITIES, payload: response})
                // dispatch({type: SET_CURRENT_REQUEST,payload:response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const AssignTrainerToARequest = (body: assignToRequest,trainer:AccountState): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await assignATrainerToARequest(body).xhr;

            // set account info
            if (response) {
                dispatch(getAllOpportunitiesAction(body.request_id,1))
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Trainer Assigned Successfully'}})
                dispatch({type: TRAINER_TO_REQUEST, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const deleteTrainerFromRequest = (id: number,request_id:number): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {
        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await deleteATrainerFromARequest(id).xhr;

            // set account info
            if (response) {
                dispatch({
                    type: SET_SUCCESS,
                    payload: {success: true, message: 'Trainer Deleted From Opportunities Successfully'}
                })
                dispatch(getAllOpportunitiesAction(request_id,1))
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const updateOpportunityStatus = (oppId:number,status: string,statusName:string): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {
        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await updateOpportunityStatusApi(oppId,status).xhr;

            // set account info
            if (response) {
                dispatch({type: UPDATE_OPPORTUNITY_STATUS, payload: {oppId:oppId,status:statusName}})
                dispatch({
                    type: SET_SUCCESS,
                    payload: {success: true, message: 'Opportunity status updated Successfully'}
                })

            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const postUserRequestAction = (params: currentRequestState): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await postUserRequestApi(params).xhr;

            // set account info
            if (response) {
                dispatch({
                    type: SET_SUCCESS,
                    payload: {success: true, message: 'User Request created successfully '}
                })
            }
            return true;

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};
