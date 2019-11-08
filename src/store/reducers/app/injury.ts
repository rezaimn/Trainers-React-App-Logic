import { combineReducers } from "redux";
import {

    // models
    InjuryModal,

    // constants
    SET_INJURY,
    InjuryActionType
    
} from "../../../models";

const initialStateInjury: InjuryModal[] = []


export default combineReducers({
    data: (state: InjuryModal[] = initialStateInjury, action: InjuryActionType) => {
        switch (action.type) {
            case SET_INJURY:
                return action.payload;

            default:
                return state;
        }
    },
});
