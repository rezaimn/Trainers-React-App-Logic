
// Place
export const SET_PLACE = "SET_PLACE";


export interface PlaceModal {
    id: number;
    name: string;
    status: boolean;
}

interface SetPlace {
    type: typeof SET_PLACE;
    payload: PlaceModal;
}

export type PlaceActionType = SetPlace;