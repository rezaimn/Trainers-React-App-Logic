import {combineReducers} from "redux";
import {
    remove as lodashRemove,
    findIndex as lodashFindIndex,
} from 'lodash';
import {
    // constants
    CouponsActionType,
    CouponsCurrentActionType,
    SET_COUPONSE,
    CLEAR_COUPONSE,
    UPDATE_COUPONSE,
    REMOVE_COUPONSE,
    ADD_COUPONSE,
    SET_COUPONSE_CURRENT,
    UPDATE_COUPONSE_CURRENT,
    CLEAR_COUPONSE_CURRENT, 
    CouponsParams, 
    CouponState
} from "../../../models";

const initialStateCouponse: CouponsParams = {
    data: [],
    lastPage: 0,
    page: 1,
    perPage: 10,
    total: ''
}

const currentStateCouponse: CouponState = {
    format: 'create',
    code: '',
    percent: false,
    multiple: false,
    value: '',
    expireTime: '',
    maxBounce: '',
    maxBounceCurrencyCode: "usd",
    codeLength: '',
    count: ''
}


export default combineReducers({
    data: (state: CouponsParams = initialStateCouponse, action: CouponsActionType) => {
        switch (action.type) {
            case SET_COUPONSE:
                return action.payload;

            case CLEAR_COUPONSE:
                return initialStateCouponse;

            case UPDATE_COUPONSE:
                const index = lodashFindIndex(state.data, {id: action.payload.id});
                // state = state.slice(0);
                if (index > -1) {
                    state.data[index] = Object.assign({}, state.data[index], action.payload);
                }
                return state;


            case REMOVE_COUPONSE:
                // state = state.slice(0);
                lodashRemove(state.data, {id: action.payload.id});
                return state;

            case ADD_COUPONSE:
                return [...state.data, action.payload];

            default:
                return state;
        }
    },
    current: (state: CouponState = currentStateCouponse, action: CouponsCurrentActionType) => {
        switch (action.type) {
            case SET_COUPONSE_CURRENT:
                return action.payload;

            case CLEAR_COUPONSE_CURRENT:
                return currentStateCouponse;

            case UPDATE_COUPONSE_CURRENT:

                return Object.assign({}, state, action.payload);

            default:
                return state;
        }
    },
});
