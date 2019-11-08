import { combineReducers } from 'redux';
import {
    LoadingActionType,
    START_LOADING,
    STOP_LOADING,
    LoadingState
} from '../../../models'

// const initialLoadingState : LoadingState = {
//     isLoading: false
// }

export default (state=false, action: LoadingActionType) => {
        switch (action.type) {

            case START_LOADING:
                return true;

            case STOP_LOADING:
            return false;

            default:
                return state;
        }
    }

