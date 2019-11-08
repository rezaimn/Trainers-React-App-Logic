import {combineReducers} from "redux";
import {findIndex as lodashFindIndex, remove as lodashRemove,} from 'lodash';
import {
    ADD_PACKAGE,
    CLEAR_PACKAGE,
    PackageActionType,
    PackageCurrentActionType,
    PackageState,
    REMOVE_PACKAGE,
    SET_PACKAGE,
    SET_PACKAGE_CURRENT,
    SET_USER_PACKAGE,
    UPDATE_PACKAGE,
    UPDATE_PACKAGE_MODE,
    UPDATE_USER_PACKAGE,
    UserPackageActionType,
    UserPackageState,
    PackageListState
} from "../../../models";

const initialStatePackage: PackageListState = {} as any

const initialStateUserPackage: UserPackageState[] = []

const currentStatePackage: PackageState = {
    id: 0,
    package_category: 0,
    month: 0,
    quantity: 0,
    quantity_free: 0,
    discount_pay: 0,
    payment_periodicity: "one",
    package_type: "custom",
    max_additional_person: 0,
    session_time: 0,
    description: "",
    price_amount: 0,
    price_currency_code: "usd",
    additional_person_amount: 0,
    additional_person_currency_code: "usd",
    promo: '',
    status: false
}

const currentUserPackage: UserPackageState = {
    id: 0,
    package: {
        month: 0,
        package_category: 0,
        quantity: 0,
        quantity_free: 0,
        discount_pay: 0,
        payment_periodicity: 'one',
        package_type: "custom",
        max_additional_person: 0,
        coupon: 0,
        session_time: 0,
        description: '',
        price_amount: 0,
        price_currency_code: '',
        additional_person_amount: 0,
        additional_person_currency_code: '',
        promo: '',
        status: false
    },
    status:'',
    description:'',
    expire_time:''

}


export default combineReducers({
    data: (state: PackageListState = initialStatePackage, action: PackageActionType) => {
        switch (action.type) {
            case SET_PACKAGE:
                return action.payload;

            case CLEAR_PACKAGE:
                return initialStatePackage;

            case UPDATE_PACKAGE:
                const index = lodashFindIndex(state.data, {id: action.payload.id});
                // state = state.slice(0);
                if (index > -1) {
                    state.data[index] = Object.assign({}, state.data[index], action.payload);
                }
                return state;

            case UPDATE_PACKAGE_MODE:
                const packageIndex = lodashFindIndex(state.data, {id: action.payload.id});
                // state = state.slice(0);
                if (packageIndex > -1) {
                    state.data[packageIndex] = Object.assign({}, state.data[packageIndex], state.data[packageIndex].mode=action.payload.mode);
                }
                return state;

            case REMOVE_PACKAGE:
                // state = state.slice(0);
                lodashRemove(state.data, {id: action.payload.id});
                return state;

            default:
                return state;
        }
    },
    currentPackage:(state: PackageState = currentStatePackage, action: PackageCurrentActionType) => {
        switch (action.type) {
            case SET_PACKAGE_CURRENT:
                return action.payload;
            default:
                return state;
        }
    },
    userPackage: (state: UserPackageState[] = initialStateUserPackage, action: UserPackageActionType) => {
        switch (action.type) {
            case SET_USER_PACKAGE:
                return action.payload;
            case UPDATE_USER_PACKAGE:
                const index = lodashFindIndex(state, {id: action.payload.id});
                // state = state.slice(0);
                if (index > -1) {
                    state[index].package.max_additional_person=action.payload.max_additional_person;
                    state[index].package.month=action.payload.month;
                    state[index].package.quantity=action.payload.quantity;
                    state[index].package.quantity_free=action.payload.quantity_free;
                    state[index].description=action.payload.description;
                    state[index].expire_time=action.payload.expire_time;
                    state[index].status=action.payload.status;
                }
                return state;

            default:
                return state;
        }
    },
    current: (state: PackageState = currentStatePackage, action: PackageCurrentActionType) => {
        switch (action.type) {
            case SET_PACKAGE_CURRENT:
                return action.payload;
            default:
                return state;
        }
    },
});
