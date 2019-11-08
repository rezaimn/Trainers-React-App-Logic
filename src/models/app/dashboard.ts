

export const DASHBOARD_DATA = "DASHBOARD_DATA";

export interface DashboardState {
    usersCount: number,
    usersInWeekCount: number,
    activeUsersCount: number,
    inActiveUsersCount: number,
    trainersCount: number,
    trainersInWeekCount: number,
    activeTrainersCount: number,
    inActiveTrainersCount: number,
    franchiseAdminsCount: number,
    franchiseAdminsInWeekCount: number,
    sessionsCount: number,
    sessionsInWeekCount: number,
    buyPackagesCount: number,
    buyPackagesInWeekCount: number,
    openRequestsCount: number,
    newClientRequestsCount: number
}

export interface DashboardState {
    usersCount: number,
    usersInWeekCount: number,
    activeUsersCount: number,
    inActiveUsersCount: number,
    trainersCount: number,
    trainersInWeekCount: number,
    activeTrainersCount: number,
    inActiveTrainersCount: number,
    franchiseAdminsCount: number,
    franchiseAdminsInWeekCount: number,
    sessionsCount: number,
    sessionsInWeekCount: number,
    buyPackagesCount: number,
    buyPackagesInWeekCount: number,
    openRequestsCount: number,
    newClientRequestsCount: number
}

interface SetDashboard {
    type: typeof DASHBOARD_DATA;
    payload: DashboardState;
}

export type DashboardActionTypes =
    | SetDashboard;
