import {combineReducers} from "redux";

import {
    AccountActionType,
    AccountState,
    CLEAR_ACCOUNT_USER_PARAMS,
    CLEAR_LIST_USERS,
    CLEAR_TOKEN,
    DELETE_USER,
    IUnauthorized,
    ListUserActionType,
    SET_ACCOUNT_USER_PARAMS,
    SET_LIST_USERS,
    SET_TOKEN,
    SET_UNAUTHORIZED,
    SET_UPDATE_USER,
    SET_USER_PROFILE,
    TokenActionType,
    TokenState, TrainerDetails,
    UPDATE_ACCOUNT_USER_PARAMS,
    UPDATE_ACCOUNT_USER_PROFILE
} from "../../../models";

import {findIndex as lodashFindIndex, remove as lodashRemove} from 'lodash';

export const initialTrainerDetailsState: TrainerDetails = {
    searchable: false,
    profession: 'trainer',
    Certifications: [],
    rate_per_session_amount: 0,
    rate_per_session_currency: 'USD',
    Specialities: [],
    start_year: '',
    title: ''
};
export const initialAccountState: AccountState = {
    id: 0,
    email: "",
    firstname: "",
    lastname: "",
    avatar: "",
    reference: "",
    status: false,
    dob: '',
    zipcode: '',
    created_at: '',
    country_id: 0,
    state_id: 0,
    city_id: 0,
    Franchise: [],
    gender: 'male',
    password: '',
    confirmPassword: '',
    description: '',
    phone: '',
    role: '',
    TrainerDetails: {
      ...initialTrainerDetailsState
    },


};

const initialStateToken: TokenState = {
    type: '',
    token: ''
}

const initialStateUnauthorized: IUnauthorized = {
    message: '',
    status: 0
}

const initialStateUsers: AccountState[] = []


export default combineReducers({
    data: (state = initialAccountState, action: AccountActionType) => {
        switch (action.type) {
            case SET_ACCOUNT_USER_PARAMS:
                return action.payload;

            case CLEAR_ACCOUNT_USER_PARAMS:
                return initialAccountState;

            case UPDATE_ACCOUNT_USER_PARAMS:
                return Object.assign({}, state, action.payload);

            default:
                return state;
        }
    },
    tokenData: (state = initialStateToken, action: TokenActionType) => {
        switch (action.type) {
            case SET_TOKEN:
                return action.payload;

            case CLEAR_TOKEN:
                return initialStateToken;


            default:
                return state;
        }
    },
    users: (state: AccountState[] = initialStateUsers, action: ListUserActionType) => {
        switch (action.type) {
            case SET_LIST_USERS:
                return action.payload;
            case SET_UPDATE_USER:
                const index = lodashFindIndex(state, {id: action.payload.id});
                // state = state.slice(0);
                if (index > -1) {
                    state[index] = Object.assign({}, state[index], action.payload);
                }
                return state;
            case CLEAR_LIST_USERS:
                return initialStateUsers;

            case DELETE_USER:
                lodashRemove(state, {id: action.payload});
                return state;
            default:
                return state;
        }
    },
    userProfile: (state = initialStateUsers, action: ListUserActionType) => {
        switch (action.type) {
            case SET_USER_PROFILE:
                return action.payload;
            case UPDATE_ACCOUNT_USER_PROFILE:
                return Object.assign({}, state, action.payload);
            default:
                return state;
        }
    },
    unauthorized: (state = initialStateUnauthorized, action: ListUserActionType) => {
        switch (action.type) {
            case SET_UNAUTHORIZED:
                return action.payload;

            default:
                return state;
        }
    }
});
