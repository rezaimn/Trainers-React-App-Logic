import { combineReducers } from "redux";
import {
    remove as lodashRemove,
    findIndex as lodashFindIndex,
    

} from 'lodash';
import {

    // models
    CategoryPackageState,

    // constants
    CategoryPackageActionType,
    SET_CATEGORY_PACKAGE,
    CLEAR_CATEGORY_PACKAGE,
    UPDATE_CATEGORY_PACKAGE,
    REMOVE_CATEGORY_PACKAGE,
    ADD_CATEGORY_PACKAGE,
    
} from "../../../models";

const initialStateCategory: CategoryPackageState[] = []




export default combineReducers({
    data: (state: CategoryPackageState[] = initialStateCategory, action: CategoryPackageActionType) => {
        switch (action.type) {
            case SET_CATEGORY_PACKAGE:
                return action.payload;

            case CLEAR_CATEGORY_PACKAGE:
                return initialStateCategory;

            case UPDATE_CATEGORY_PACKAGE:
                const index = lodashFindIndex(state, {id: action.payload.id});
                // state = state.slice(0);
                if(index > -1) {
                    state[index] = Object.assign({}, state[index], action.payload);
                }
                return state;
                

            case REMOVE_CATEGORY_PACKAGE:
                // state = state.slice(0);
                lodashRemove(state, {id:  action.payload.id });
                return state;

            case ADD_CATEGORY_PACKAGE:
                return [...state, action.payload];

            default:
                return state;
        }
    },
});
