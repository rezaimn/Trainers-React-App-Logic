import {combineReducers} from "redux";
import {findIndex as lodashFindIndex ,  remove as lodashRemove,} from 'lodash';
import {
    DELETE_REVIEW,
    GET_REVIEWS,
    ReviewActionTypes,
    ReviewsGetModel,
    SET_REVIEW,
    UPDATE_REVIEW
} from "../../../models";


export default combineReducers({
    data: (state: ReviewsGetModel[] = [], action: ReviewActionTypes) => {
        switch (action.type) {
            case SET_REVIEW:
                return action.payload;

            case GET_REVIEWS:
                return action.payload;
            case UPDATE_REVIEW:
                const index = lodashFindIndex(state, {id: action.payload.id});
                // state = state.slice(0);
                if (index > -1) {
                    state[index] = Object.assign({}, state[index], action.payload);
                }
                return state;
            case DELETE_REVIEW:
                // state = state.slice(0);
                lodashRemove(state, {id: action.payload});
                return state;
            default:
                return state;
        }
    }
});
