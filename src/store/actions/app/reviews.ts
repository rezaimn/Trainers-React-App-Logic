import {ThunkAction} from "redux-thunk";
import {AppState} from "../../reducers";
import {Action} from "redux";
import { startLoading, stopLoading } from "..";

import {

} from "../../../api";
import {
    DELETE_REVIEW,
    GET_REVIEWS,
    ReviewsStateModel,
    ReviewsUpdateModel,
    SET_FAILELD,
    SET_REVIEW, SET_SUCCESS,
    START_LOADING,
    STOP_LOADING, UPDATE_REVIEW
} from "../../../models";
import {deleteReviewAPI, getReviewListAPI, setReviewAPI, updateReviewAPI} from "../../../api/reviews";

export const getAllReviewsAction = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getReviewListAPI().xhr;

            // set account info
            if (response) {
                dispatch({type: GET_REVIEWS, payload: response})
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

export const setReviewAction = (body:ReviewsStateModel): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await setReviewAPI(body).xhr;

            // set account info
            if (response) {
                dispatch({type: SET_REVIEW, payload: response});
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Add New Review Successfully'}})
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

export const updateReviewAction = (id:number,body:ReviewsUpdateModel): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await updateReviewAPI(id,body).xhr;

            // set account info
            if (response) {
                dispatch({type: UPDATE_REVIEW, payload: response})
                return true;
            }

        } catch (err) {
            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}});
            dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Review Updated Successfully'}})
            return false;

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};


export const deleteReviewAction = (id:number): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await deleteReviewAPI(id).xhr;

            // set account info
            if (response) {
                dispatch({type: DELETE_REVIEW, payload: id});
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Review Removed Successfully'}})
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
