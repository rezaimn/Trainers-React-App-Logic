import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppState } from '../../reducers'

export const startLoading = (type: string): ThunkAction<void, AppState, null, Action<string>> => {
    return (dispatch: any) =>
        dispatch({ type });
};

export const stopLoading = (type: string): ThunkAction<void, AppState, null, Action<string>> => {
    return (dispatch) =>
        dispatch({ type });
};
