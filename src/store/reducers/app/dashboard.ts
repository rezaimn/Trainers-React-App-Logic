import {combineReducers} from "redux";
import {

    DASHBOARD_DATA, DashboardActionTypes, DashboardState
} from "../../../models";
import {findIndex as lodashFindIndex, remove as lodashRemove,} from 'lodash';


const initialDashboard:DashboardState={
    activeTrainersCount:0,
    activeUsersCount:0,
    buyPackagesCount:0,
    buyPackagesInWeekCount:0,
    franchiseAdminsCount:0,
    franchiseAdminsInWeekCount:0,
    inActiveTrainersCount:0,
    inActiveUsersCount:0,
    newClientRequestsCount:0,
    openRequestsCount:0,
    sessionsCount:0,
    sessionsInWeekCount:0,
    trainersCount:0,
    trainersInWeekCount:0,
    usersCount:0,
    usersInWeekCount:0
}


export default combineReducers({
    data: (state: DashboardState = initialDashboard, action: DashboardActionTypes) => {
        switch (action.type) {
            case DASHBOARD_DATA:
                return action.payload;
            default:
                return state;
        }
    }
});
