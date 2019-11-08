import axios from "axios";
import {
    CountryState,
    StateGeoState,
    CityGeoState,
} from "../models";
var qs =  require('qs');

export function getListCountry(all:boolean,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, CountryState>({
        method: "get",
        url: "/geo",
        params:{
            all:all
        },
        paramsSerializer: params => {
            return qs.stringify(params)
        }
    });

    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function getListState(countryId: string, all:boolean ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, StateGeoState>({
        method: "get",
        url: `/geo`,
        params:{
            all:all,
            country:countryId
        },
        paramsSerializer: params => {
            return qs.stringify(params)
        }
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function getListCity(countryId: string, stateId: string,all:boolean ,config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, CityGeoState>({
        method: "get",
        url: `/geo`,
        params:{
            all:all,
            country:countryId,
            state:stateId
        },
        paramsSerializer: params => {
            return qs.stringify(params)
        }
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}

