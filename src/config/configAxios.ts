import axios from "axios";
import { getTokenStore, unauthorizedAction } from '../helper'
import { API_URL } from "./config";


axios.defaults.baseURL = API_URL;

axios.interceptors.response.use(
    response => {
        console.log(response, "success => from response `axios`");
        if (response && response.status === 200) {
            return response && response.data && response.data.result;
        }
        return Promise.reject("Some things error happened");
    },
    err => {
        console.log(err.response, "faild => from error `axios`");

        let response = err && err.response;
        let result = response && response.data && response.data.result;
        if(response.status === 401) {
            unauthorizedAction({message: result, status: 401})
            return;

        }else if (typeof result === "object") {
            if (result && result.length > 0) {
                return Promise.reject(
                    (result[0] && result[0].message) ||
                        "Some things error happened"
                );
            }
        } else if (typeof result === "string") {
            if (result) {
                if(result.includes("Something wrong") && response.data.stack){
                    return Promise.reject(response.data.stack || "Some things error happened");
                }
                return Promise.reject(result || "Some things error happened");
            }
        }
        return Promise.reject("Some things error happened");
    }
);

//Add a request interceptor
axios.interceptors.request.use( config => {
        const token = getTokenStore();
        if(token) {
            config.headers["Authorization"] = 'Bearer '+token;
        }
        return config;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    }
);
