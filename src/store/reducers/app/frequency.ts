import { combineReducers } from "redux";
import {

    // models
    FrequencyModal,

    // constants
    SET_FREQUENCY,
    FrequencyActionType
    
} from "../../../models";

const initialStateFrquency: FrequencyModal[] = []


export default combineReducers({
    data: (state: FrequencyModal[] = initialStateFrquency, action: FrequencyActionType) => {
        switch (action.type) {
            case SET_FREQUENCY:
                return action.payload;

            default:
                return state;
        }
    },
});
