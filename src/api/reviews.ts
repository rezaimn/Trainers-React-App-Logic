import axios from "axios";
import {ReviewsGetModel, ReviewsStateModel, ReviewsUpdateModel} from "../models/app/reviews";


export function getReviewListAPI() {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, ReviewsGetModel>({
        method: "get",
        url: `/review`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function setReviewAPI(body:ReviewsStateModel) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<ReviewsStateModel, null>({
        method: "post",
        url: `/review`,
        data:body
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function updateReviewAPI(id:number, body:ReviewsUpdateModel) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<ReviewsUpdateModel, null>({
        method: "put",
        url: `/review/${id}`,
        data:body
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function deleteReviewAPI(id:number) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, null>({
        method: "delete",
        url: `/review/${id}`
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}
