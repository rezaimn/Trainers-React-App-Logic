import { combineReducers } from 'redux';
import {
    SET_SUCCESS,
    SET_FAILELD,
    IError,
    ISuccess,
    AlertActionType
} from '../../../models'


const initialStateSuccess: ISuccess = {
    success: false,
    message: ''
};

const initialStateError: IError = {
    message: ''
};


export default combineReducers({
    success: (state=initialStateSuccess, action: AlertActionType) => {
        switch (action.type) {

            case SET_SUCCESS:
                return  action.payload;
            default:
                return state;
        }
    },
    error: (state=initialStateError, action: AlertActionType) => {
        switch (action.type) {

            case SET_FAILELD:
                return  action.payload;
            default:
                return state;
        }
    },

})

