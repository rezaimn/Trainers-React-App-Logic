import { combineReducers } from "redux";
import {

    // models
    PaymentPackage,
    FactorPackage,

    // constants
    SET_PACKAGE_FACTOR,
    SET_PACKAGE_PAYMENT,
    BuyPackageActionType
    
} from "../../../models";


const initialFactor: FactorPackage = {

    data: {
        id: 0,
        promo: "",
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
        description: "",
        price_amount: 0,
        price_currency_code: "",
        additional_person_amount: 0,
        additional_person_currency_code: "",
        status: false
    },
    customerId: "",
    allSession: 0,
    allPaidSession: 0,
    allPaidSessionAmount: 0,
    discount: 0,
    additionalPersonAmount: 0,
    totalPrice: 0,
    totalPriceWithDiscount: 0,
}


const initlalPayment: PaymentPackage = {
    id: "",
    metadata: {
        payment_id: ""
    },
    client_secret: ""
}


export default combineReducers({
    factor: (state = initialFactor, action: BuyPackageActionType) => {
        switch (action.type) {
            case SET_PACKAGE_FACTOR:
                return action.payload;
            default:
                return state;
        }
    },
    payment: (state = initlalPayment, action: BuyPackageActionType) => {
        switch (action.type) {
            case SET_PACKAGE_PAYMENT:
                return action.payload;
            default:
                return state;
        }
    },
});
