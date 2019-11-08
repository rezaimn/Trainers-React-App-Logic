import { combineReducers } from "redux";
import {

    // models
    SpecialtiesModal,

    // constants
    SET_SPECIALITIES,
    SpecialtiesActionType
    
} from "../../../models";

const initialStateSpecialties: SpecialtiesModal[] = []


export default combineReducers({
    data: (state: SpecialtiesModal[] = initialStateSpecialties, action: SpecialtiesActionType) => {
        switch (action.type) {
            case SET_SPECIALITIES:
                return action.payload;

            default:
                return state;
        }
    },
});
