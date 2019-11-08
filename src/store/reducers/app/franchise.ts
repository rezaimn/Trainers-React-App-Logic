import {combineReducers} from "redux";
import {findIndex as lodashFindIndex, remove as lodashRemove} from "lodash";
import {
    ADD_FRANCHISE,
    ADD_NOT_ASSIGNED_FRANCHISE,
    CLEAR_FRANCHISE,
    FranchiseActionType,
    FranchiseState,
    REMOVE_FRANCHISE,
    SET_FRANCHISE,
    SET_NOT_ASSIGNED_FRANCHISE,
    SET_SELECTED_FRANCHISE_FOR_UPDATE,
    START_LOADING_FRANCHISE,
    STOP_LOADING_FRANCHISE,
    UPDATE_FRANCHISE
} from "../../../models";

const initialStateFranchise: FranchiseState[] = [];
const initialStateCurrent: FranchiseState = {
    active: false,
    admin: 0,
    city: {},
    city_id: 0,
    franchise_id: 0,
    geometry: [],
    id: 0,
    name: ""
};

export default combineReducers({
    data: (
        state: FranchiseState[] = initialStateFranchise,
        action: FranchiseActionType
    ) => {
        switch (action.type) {
            case SET_FRANCHISE:
                return action.payload;

            case CLEAR_FRANCHISE:
                return initialStateFranchise;

            case UPDATE_FRANCHISE:
                const index = lodashFindIndex(state, {id: action.payload.id});
                // state = state.slice(0);
                if (index > -1) {
                    state[index] = Object.assign({}, state[index], action.payload);
                }
                return state;

            case REMOVE_FRANCHISE:
                let item = action.payload as any
                lodashRemove(state, {id: item[0].id});
                return state;

            case ADD_FRANCHISE:
                return state.push(action.payload);

            default:
                return state;
        }
    },

    // error: (state = initialStateError, action: FranchiseActionType) => {
    //     switch (action.type) {

    //         case SET_FRANCHISE:
    //         case CLEAR_FRANCHISE:
    //         case ADD_FRANCHISE:
    //             return initialStateError;

    //         case FAILED_FRANCHISE:
    //             return Object.assign({}, state, action.payload);

    //         default:
    //             return state;
    //     }
    // },
    // isSuccessAdded: (state=initialStateSuccess, action: FranchiseActionType) => {
    //     switch (action.type) {

    //         case SET_SUCCESS_FRANCHISE:
    //             return  action.payload;
    //         default:
    //             return state;
    //     }
    // },
    current: (
        state: FranchiseState = initialStateCurrent,
        action: FranchiseActionType
    ) => {
        switch (action.type) {
            case SET_SELECTED_FRANCHISE_FOR_UPDATE:
                return action.payload;
            default:
                return state;
        }
    },
    notAssigned: (
        state: FranchiseState[] = [],
        action: FranchiseActionType
    ) => {
        switch (action.type) {
            case SET_NOT_ASSIGNED_FRANCHISE:
                return action.payload;
            case ADD_NOT_ASSIGNED_FRANCHISE:
                return [...state,action.payload];
            default:
                return state;
        }
    },

    isLoading: (state = false, action: FranchiseActionType) => {
        switch (action.type) {
            case START_LOADING_FRANCHISE:
                return true;

            case STOP_LOADING_FRANCHISE:
                return false;

            default:
                return state;
        }
    }
});
