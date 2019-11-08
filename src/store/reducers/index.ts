import { combineReducers } from 'redux';
import account from './app/account'
import loading from './common/loading'
import geo from './app/geo';
import alert from './common/alert';
import franchise from './app/franchise'
import category from './app/categoryPcakage'
import packages from './app/packages'
import coupons from './app/coupons'
import requests from './app/requests'
import sessions from './app/sessions'
import setting from './app/setting'
import goals from './app/goals';
import injury from './app/injury';
import place from './app/place';
import frequency from './app/frequency';
import certificates from './app/certificate';
import specialties from './app/specialties';
import allTrainers from './app/allTrainers';
import chat from './app/chat';
import buyPackage from './app/buyPackage';
import fcm from './app/fcm'
import dashboard from './app/dashboard';
import reviews from './app/reviews';



const rootReducer = combineReducers({
    account,
    loading,
    geo,
    alert,
    franchise,
    category,
    packages,
    sessions,
    coupons,
    requests,
    setting,
    goals,
    injury,
    place,
    frequency,
    certificates,
    specialties,
    allTrainers,
    chat,
    buyPackage,
    fcm,
    dashboard,
    reviews,
});

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;
