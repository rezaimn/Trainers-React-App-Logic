import { combineReducers } from "redux";
import {
    NotificationModel,
    NotificationActionType,
    SET_NOTIFICATIONS
} from "../../../models";

const initialNotifications: NotificationModel[] = []


export default combineReducers({
    data: (state: NotificationModel[] = initialNotifications, action: NotificationActionType) => {
        switch (action.type) {
            case SET_NOTIFICATIONS:
                return action.payload;
            default:
                return state;
        }
    }
});
