import { combineReducers } from "redux";
import {

    // models
    AllTrainers,
    opportunity,

    // constants
    SET_ALLTRAINERS,
    SET_AVAILABLE_TRAINERS_STATUS,
    AllTrainersActionType,
    REMOVE_AVAILABLE_TRAINERS,
    SET_CLIENTS_TRAINERS
    
} from "../../../models";

import {
    remove as lodashRemove,
} from 'lodash';

const initialStateAllTrainers: AllTrainers[] = []
const initialStateAvailable: opportunity[] = []


export default combineReducers({
    data: (state: AllTrainers[] = initialStateAllTrainers, action: AllTrainersActionType) => {
        switch (action.type) {
            case SET_ALLTRAINERS:
                return action.payload;

            default:
                return state;
        }
    },
    availableTrianers: (state: opportunity[] = initialStateAvailable, action: AllTrainersActionType) => {
        switch (action.type) {
            case SET_AVAILABLE_TRAINERS_STATUS:
                return action.payload;

            case REMOVE_AVAILABLE_TRAINERS:
                // state = state.slice(0);
                lodashRemove(state, {id:  action.payload });
                return state;


            default:
                return state;
        }
    },

    clients: (state: opportunity[] = initialStateAvailable, action: AllTrainersActionType) => {
        switch (action.type) {
            case SET_CLIENTS_TRAINERS:
                return action.payload;

            default:
                return state;
        }
    },
});
