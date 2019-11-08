
// injury
export const SET_INJURY = "SET_INJURY";


export interface InjuryModal {
    id: number;
    name: string;
    status: boolean;
}

interface SetInjury {
    type: typeof SET_INJURY;
    payload: InjuryModal;
}

export type InjuryActionType = SetInjury;