import { combineReducers } from "redux";
import {

    // models
    GolasModal,

    // constants
    SET_GOALS,
    GoalsActionType
    
} from "../../../models";

const initialStateGoals: GolasModal[] = []


export default combineReducers({
    data: (state: GolasModal[] = initialStateGoals, action: GoalsActionType) => {
        switch (action.type) {
            case SET_GOALS:
                return action.payload;

            default:
                return state;
        }
    },
});
