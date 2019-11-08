

// Frequency
export const SET_FREQUENCY = "SET_FREQUENCY";


export interface FrequencyModal {
    id: number;
    name: string;
    status: boolean;
}

interface SetFrequency {
    type: typeof SET_FREQUENCY;
    payload: FrequencyModal;
}

export type FrequencyActionType = SetFrequency;