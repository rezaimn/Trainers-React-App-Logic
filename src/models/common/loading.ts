/**
 * ACCOUNT ACTIONS
 */
// loading
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export interface LoadingState {
    isLoading: boolean;
}

/**
 *  Action Creators && SignIn
 */

interface StartLoading {
    type: typeof START_LOADING;
}

interface StopLoading {
    type: typeof STOP_LOADING;
}

export type LoadingActionType = StartLoading | StopLoading;

