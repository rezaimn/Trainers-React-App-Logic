import { ThunkAction } from "redux-thunk";
import { AppState } from "../../..";
import {
    getSettigns, updateSettings
} from '../../../api'
import {
  SET_SETTINGS,
  UPDATE_SETTINGS,
  START_LOADING,
  SET_FAILELD,
  STOP_LOADING,
  SettingState, SET_SUCCESS
} from "../../../models";
import { Action } from "redux";
import { startLoading, stopLoading } from "../common/loading";

export const getSettingsAction = (id: number): ThunkAction<void, AppState, null, Action<string>> => {
  return async (dispatch: any, getState: any) => {
    try {
      startLoading(START_LOADING)(dispatch, getState, null);
      const response = await getSettigns(id).xhr;

      dispatch({ type: SET_SETTINGS, payload: response.setting });
    } catch (err) {
      // show error
      dispatch({ type: SET_FAILELD, payload: { message: err } });
    } finally {
      stopLoading(STOP_LOADING)(dispatch, getState, null);
    }
  };
};

export const updateSettingsAction = (id: number, data: SettingState): ThunkAction<void, AppState, null, Action<string>> => {
  return async (dispatch: any, getState: any) => {
    try {
      startLoading(START_LOADING)(dispatch, getState, null);
      const response = await updateSettings(id,data).xhr;
      if(response){
        dispatch({type: SET_SUCCESS, payload: {success: true, message: 'General Settings Updated Successfully'}});
        dispatch({ type: UPDATE_SETTINGS, payload: data });
      }

    } catch (err) {
      // show error
      dispatch({ type: SET_FAILELD, payload: { message: err } });
    } finally {
      stopLoading(STOP_LOADING)(dispatch, getState, null);
    }
  };
};
