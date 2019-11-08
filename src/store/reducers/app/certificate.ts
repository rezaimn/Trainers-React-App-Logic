import { combineReducers } from "redux";
import {

    // models
    CertificateModal,

    // constants
    SET_CERTIFICATE,
    ADD_CERTIFICATE,
    CertificateActionType
    
} from "../../../models";

const initialStateCertificate: CertificateModal[] = []


export default combineReducers({
    data: (state: CertificateModal[] = initialStateCertificate, action: CertificateActionType) => {
        switch (action.type) {
            case SET_CERTIFICATE:
                return action.payload;

            case ADD_CERTIFICATE:
                return [...state, ...action.payload];

            default:
                return state;
        }
    },
});
