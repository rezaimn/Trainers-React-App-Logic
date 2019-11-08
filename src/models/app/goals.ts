/**
 * Goals ACTIONS
 */

// goals
export const SET_GOALS = "SET_GOALS";


export interface GolasModal {
    id: number;
    name: string;
    icon: string;
    status: boolean;
}

interface SetGoals {
    type: typeof SET_GOALS;
    payload: GolasModal;
}

export type GoalsActionType = SetGoals;