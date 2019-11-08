import { combineReducers } from "redux";
import {

    // models
    PlaceModal,

    // constants
    SET_PLACE,
    PlaceActionType
    
} from "../../../models";

const initialStatePlace: PlaceModal[] = []


export default combineReducers({
    data: (state: PlaceModal[] = initialStatePlace, action: PlaceActionType) => {
        switch (action.type) {
            case SET_PLACE:
                return action.payload;

            default:
                return state;
        }
    },
});
