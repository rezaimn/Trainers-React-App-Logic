export const SET_SETTINGS = "SET_SETTINGS";
export const UPDATE_SETTINGS = "UPDATE_SETTINGS"; 

// for GET method
export interface SettingState {
  require_admin_approval: boolean;
  request_distance: number;
  show_trainer: number;
  package_messaging: boolean;
  review_session: number;
  minimum_payout:number;
}

// interface for action types
interface setSetting {
  type: typeof SET_SETTINGS;
  payload: SettingState;
}

interface updateSetting {
  type: typeof UPDATE_SETTINGS;
  payload: SettingState;
}



export type SettingActionType = setSetting | updateSetting;
