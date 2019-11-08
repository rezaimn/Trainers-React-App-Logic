
export const SET_SPECIALITIES = "SET_SPECIALITIES";


export interface SpecialtiesModal {
    id: number;
    name: string;
    status: boolean;
    Speciality:any;
}

interface SetSpecialties {
    type: typeof SET_SPECIALITIES;
    payload: SpecialtiesModal[];
}


export type SpecialtiesActionType = SetSpecialties ;
