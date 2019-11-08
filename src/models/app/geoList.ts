/**
 * ACCOUNT ACTIONS
 */
// GEO List
export const SET_COUNTRY_LIST = "SET_COUNTRY_LIST";
export const CLEAR_COUNTRY_LIST = "CLEAR_COUNTRY_LIST";

export const SET_STATE_LIST = "SET_STATE_LIST";
export const CLEAR_STATE_LIST = "CLEAR_STATE_LIST";

export const SET_CITY_LIST = "SET_CITY_LIST";
export const CLEAR_CITY_LIST = "CLEAR_CITY_LIST";

// loading
export const START_LOADING_GEO_COUNTRY = "START_LOADING_GEO_COUNTRY";
export const STOP_LOADING_GEO_COUNTRY = "STOP_LOADING_GEO_COUNTRY";

export const START_LOADING_GEO_STATE = "START_LOADING_GEO_STATE";
export const STOP_LOADING_GEO_STATE = "STOP_LOADING_GEO_STATE";

export const START_LOADING_GEO_CITY = "START_LOADING_GEO_CITY";
export const STOP_LOADING_GEO_CITY = "STOP_LOADING_GEO_CITY";

// export const SET_GEO_FAILED = 'SET_GEO_FAILED';

export interface CountryState {
    id: number;
    name: string;
    iso: string;
}

export interface StateGeoState {
    id: number;
    name: string;
    country_id: number;
}

export interface CityGeoState {
    id: number;
    name: string;
    state_id: number;
}

interface SetCountry {
    type: typeof SET_COUNTRY_LIST;
    payload: CountryState;
}

interface SetState {
    type: typeof SET_STATE_LIST;
    payload: StateGeoState;
}

interface SetCity {
    type: typeof SET_CITY_LIST;
    payload: CityGeoState;
}

interface StartLoadingGeoCountry {
    type: typeof START_LOADING_GEO_COUNTRY;
}

interface StopLoadingGeoCountry {
    type: typeof STOP_LOADING_GEO_COUNTRY;
}

interface StartLoadingGeoState {
    type: typeof START_LOADING_GEO_STATE;
}

interface StopLoadingGeoState {
    type: typeof STOP_LOADING_GEO_STATE;
}

interface StartLoadingGeoCity {
    type: typeof START_LOADING_GEO_CITY;
}

interface StopLoadingGeoCity {
    type: typeof STOP_LOADING_GEO_CITY;
}

// interface FailedGeo {
//     type: typeof SET_GEO_FAILED;
//     payload: string;
// }

export type GeoActionType =
    | SetCountry
    | SetState
    | SetCity
    | StartLoadingGeoCountry
    | StopLoadingGeoCountry
    | StartLoadingGeoState
    | StopLoadingGeoState
    | StartLoadingGeoCity
    | StopLoadingGeoCity;
