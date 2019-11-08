import {combineReducers} from "redux";
import {findIndex as lodashFindIndex, remove as lodashRemove,} from 'lodash';
import {
    ADD_SESSION,
    CURRENT_SESSION,
    currentSessionParams,
    DELETE_SESSION,
    GET_SESSION_EARNING,
    SessionActionType,
    SessionEarningTypes,
    sessionList,
    sessionParams,
    SET_SESSION_LIST,
    SET_SESSION_LIST_COMPLETED,
    UPDATE_SESSION,
    UPDATE_SESSION_EARNING,
    updateSessionParams,
    EarningList
} from "../../../models/app/sessions";


const initialStateCurrentSession: sessionParams = {
    late_cancel: false,
    location: '',
    message: '',
    request_opportunity_id: 0,
    session_date: '',
    status: ''

}

// const initialUpdateSession: updateSessionParams = {
//     ...initialStateCurrentSession,
//     id: 0
// }

const initialStateAllSessions: sessionList = {
    data: [],
    lastPage: 1,
    page: 1,
    perPage: 10,
    total: 0

}


export const initialStateEarningList: EarningList = {
    data: [],
    lastPage: 1,
    page: 1,
    perPage: 10,
    total: 0

}

export default combineReducers({
    data: (state: sessionList = initialStateAllSessions, action: SessionActionType) => {
        switch (action.type) {
            case SET_SESSION_LIST:
                return action.payload;
            case CURRENT_SESSION:
                return action.payload;
            // case ADD_SESSION:
            //     state.data.push(action.payload);
            //     return  state;

            case UPDATE_SESSION:
                const index = lodashFindIndex(state.data, {id: action.payload.id});
                if (index > -1) {
                    state.data[index] = Object.assign({}, state.data[index], action.payload);
                }
                return state;

            case ADD_SESSION:
                const sessionData:currentSessionParams=action.payload;
                state.data.push(sessionData);
                return state;
            //     return state;
            case DELETE_SESSION:
                lodashRemove(state.data, {id: action.payload});
                return state;
            default:
                return state;
        }
    },
    completed: (state: sessionList = initialStateAllSessions, action: SessionActionType) => {
        switch (action.type) {
            case SET_SESSION_LIST_COMPLETED:
                return action.payload;
            default:
                return state;
        }
    },
    sessionEarning:(state: EarningList = initialStateEarningList, action: SessionEarningTypes) => {
        switch (action.type) {
            case GET_SESSION_EARNING:
                return action.payload;

            case UPDATE_SESSION_EARNING:
                const index = lodashFindIndex(state.data, {id: action.payload.id});
                if (index > -1) {
                    state.data[index].franchise_amount = action.payload.franchise_amount;
                    state.data[index].trainer_amount = action.payload.trainer_amount;
                    state.data[index].status = action.payload.status;
                }
                return state;

            default:
                return state;
        }
    },

});


