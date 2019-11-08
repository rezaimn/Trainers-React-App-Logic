import {combineReducers} from "redux";
import { remove as lodashRemove} from 'lodash';

import {
    AccountState,
    assignToRequest,
    currentRequestState,
    OpportunitiesActionType,
    opportunitiesState,
    opportunity,
    RequestActionType,
    RequestState,
    SET_AVAILABLE_TRAINERS,
    SET_REQUEST,
    REMOVE_REQUEST,
    SET_REQUEST_OPPORTUNITIES,
    SET_USER_OPPORTUNITIES,
    TRAINER_TO_REQUEST,
    UPDATE_OPPORTUNITY_STATUS
} from "../../../models";
import {initialAccountState} from "./account";

const initialStateCurrentRequest: currentRequestState = {
    id: 0,
    user_id: 0,
    place: '',
    periodicity: '',
    prefer_sex: '',
    addition_info: '',
    created_at: '',
    updated_at: '',
    user: {},
    goals: [],
    injuries: [],
    hours: [],
    status: '',
}

const initialStateUsers: AccountState[] = []

const initialOpportunity: opportunity = {
    id: 0,
    client_id: 0,
    trainer_id: 0,
    request_id: 0,
    status: '',
    type: '',
    request_info: {
        id: 1,
        place: '',
        user_id: 0,
        created_at: '',
        prefer_sex: '',
        updated_at: '',
        periodicity: '',
        addition_info: ''
    },
    customerInfo:{
        ...initialAccountState
    },
    trainerInfo: {
        ...initialAccountState
    },
    message: '',
    created_at: '',
    updated_at: '',
}
const initialStateAllOpportunities: opportunitiesState = {
    data:{
        data: [],
        lastPage: 0,
        page: 0,
        perPage: 0,
        total: 0,
    },
    RequestData:{
        ...initialStateCurrentRequest
    }

}


const initialStateAllRequests: RequestState = {
    data: [],
    lastPage: 1,
    page: 1,
    perPage: 10,
    total: 0
}

const initialStateAssignToRequest: assignToRequest = {
    client_id: 0,
    request_id: 0,
    trainer_id: 0

}

const initialUserOpportunityList:opportunity[]=[];


export default combineReducers({
    data: (state: RequestState = initialStateAllRequests, action: RequestActionType) => {
        switch (action.type) {
            case SET_REQUEST:
                return action.payload;

            case REMOVE_REQUEST:
                lodashRemove(state.data, {id: action.payload.id});
                return state;

            case TRAINER_TO_REQUEST:
                return [...state.data, action.payload];
            default:
                return state;
        }
    },
    opportunitiesList: (state: opportunitiesState = initialStateAllOpportunities, action: OpportunitiesActionType) => {
        switch (action.type) {
            case SET_REQUEST_OPPORTUNITIES:
                return action.payload;
            case UPDATE_OPPORTUNITY_STATUS:
                 state.data.data = state.data.data.map(item => {
                    item.id === action.payload.oppId ? item.status = action.payload.status : item.status = item.status;
                    return item;
                });
                return state;
            // case SET_CURRENT_REQUEST:
            //     return state.RequestData;
            // case REMOVE_TRAINER_FROM_OPP_LIST:
            //     return action.payload;
            // case ADD_TRAINER_TO_OPP_LIST:
            //     return action.payload;
            default:
                return state;
        }
    },
    userOpportunityList:(state: opportunity[] =initialUserOpportunityList , action: OpportunitiesActionType) => {
        switch (action.type) {
            case SET_USER_OPPORTUNITIES:
                action.payload.filter(item=>{
                    return item.status==='TRAINER_HIRE'
                })
                return action.payload;
            default:
                return state;
        }
    },
    availableTrainerList: (state: AccountState[] = initialStateUsers, action: OpportunitiesActionType) => {
        switch (action.type) {
            case SET_AVAILABLE_TRAINERS:
                return action.payload;
            // case REMOVE_TRAINER_FROM_AVAILABLE_LIST:
            //     lodashRemove(state, {id:  action.payload.id });
            //     return state;
            // case ADD_TRAINER_TO_AVAILABLE_LIST:
            //     return state;
            default:
                return state;
        }
    }

});


