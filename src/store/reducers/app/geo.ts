import { combineReducers } from 'redux';
import {
    SET_COUNTRY_LIST,
    CountryState,
    GeoActionType,
    StateGeoState,
    SET_STATE_LIST,
    CityGeoState,
    SET_CITY_LIST,
    START_LOADING_GEO_COUNTRY,
    STOP_LOADING_GEO_COUNTRY,
    START_LOADING_GEO_STATE,
    STOP_LOADING_GEO_STATE,
    START_LOADING_GEO_CITY,
    STOP_LOADING_GEO_CITY

} from '../../../models'


const initialStateCountry: CountryState[] = []
const initialStateState: StateGeoState[] = []
const initialStateCity: CityGeoState[] = []

export default combineReducers({
    countries: (state = initialStateCountry, action: GeoActionType) => {
        switch (action.type) {
            case SET_COUNTRY_LIST:
                return action.payload;

            default:
                return state;
        }
    },
    states: (state = initialStateState, action: GeoActionType) => {
        switch (action.type) {
            case SET_STATE_LIST:
                return action.payload;

            default:
                return state;
        }
    },
    cities: (state = initialStateCity, action: GeoActionType) => {
        switch (action.type) {
            case SET_CITY_LIST:
                return action.payload;

            default:
                return state;
        }
    },
    isLoadingGeoCountry: (state=false, action: GeoActionType) => {
        switch (action.type) {

            case START_LOADING_GEO_COUNTRY:
                return true;

            case STOP_LOADING_GEO_COUNTRY:
                return false;

            default:
                return state;
        }
    },
    isLoadingGeoState: (state=false, action: GeoActionType) => {
        switch (action.type) {

            case START_LOADING_GEO_STATE:
                return true;

            case STOP_LOADING_GEO_STATE:
                return false;

            default:
                return state;
        }
    },
    isLoadingGeoCity: (state=false, action: GeoActionType) => {
        switch (action.type) {

            case START_LOADING_GEO_CITY:
                return true;

            case STOP_LOADING_GEO_CITY:
                return false;

            default:
                return state;
        }
    },
})

