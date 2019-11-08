import { combineReducers } from "redux";
import { SettingState, SettingActionType, SET_SETTINGS, UPDATE_SETTINGS } from "../../../models";

const initialStateSetting: SettingState = {
  package_messaging: false,
  request_distance: 5,
  require_admin_approval: false,
  review_session: 0,
  show_trainer: 0,
  minimum_payout:0
};

export default combineReducers({
  data: (
    state: SettingState = initialStateSetting,
    action: SettingActionType
  ) => {
    switch (action.type) {
      case SET_SETTINGS:
        return action.payload;

      case UPDATE_SETTINGS:
        return action.payload;

      default:
        return state;
    }
  }
});
