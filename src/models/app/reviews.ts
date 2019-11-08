import {SET_CURRENT_REQUEST} from "./requests";
import {AccountState} from "./account";
import {initialAccountState} from "../../store/reducers/app/account";

export const GET_REVIEWS="GET_REVIEWS";
export const UPDATE_REVIEW="UPDATE_REVIEW";
export const SET_REVIEW="SET_REVIEW";
export const DELETE_REVIEW="DELETE_REVIEW";


export interface ReviewsUpdateModel {
    publish:boolean
}

export interface ReviewsStateModel {
    user_id: number,
    trainer_id: number,
    userInfo?:AccountState,
    trainerInfo?:AccountState,
    rating: number,
    note: string,
}

export interface ReviewsGetModel extends ReviewsStateModel {
    id: number,
    publish: boolean,
    created_at: string,
    updated_at:string
}

export const initialReview:ReviewsGetModel={
    created_at:"",
    id:0,
    note:"",
    publish:false,
    rating:0,
    trainer_id:0,
    trainerInfo:initialAccountState,
    updated_at:'',
    user_id:0,
    userInfo:initialAccountState
}

interface setReview {
    type: typeof SET_REVIEW;
    payload: ReviewsStateModel;
}

interface getReviews {
    type: typeof GET_REVIEWS;
    payload: ReviewsGetModel[];
}

interface updateReview {
    type: typeof UPDATE_REVIEW;
    payload: ReviewsGetModel;
}

interface deleteReview {
    type: typeof DELETE_REVIEW;
    payload: number;
}

export type ReviewActionTypes=
    | setReview
    | getReviews
    | updateReview
    | deleteReview;
