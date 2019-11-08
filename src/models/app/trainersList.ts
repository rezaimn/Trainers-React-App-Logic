
import {CityGeoState, CountryState, StateGeoState,  CertificateModal, SpecialtiesModal, opportunity} from '..'

export const SET_ALLTRAINERS = "SET_ALLTRAINERS";
export const SET_AVAILABLE_TRAINERS_STATUS = "SET_AVAILABLE_TRAINERS_STATUS"
export const REMOVE_AVAILABLE_TRAINERS = "REMOVE_AVAILABLE_TRAINERS"
export const SET_CLIENTS_TRAINERS = "SET_CLIENTS_TRAINERS"



export enum StateMachineRequest  {
    NEW = 'NW',
    TrainerAccept = 'TA',
    TrainerReject = 'TR',
    CustomerAccept = 'CA',
    CustomerReject = 'CR',
    TrainerHire = 'TH',
    TrainerOpportunity = 'TOA',
    Done = 'DO'

}



export enum StateMachineGet {
    NW = 'NEW',
    TA = 'TRAINER_ACCEPT',
    TR = 'TRAINER_REJECT',
    CA = 'CLIENT_ACCEPT',
    CR = 'CLIENT_REJECT',
    TH = 'TRAINER_HIRE',
    DO = 'DONE'

}
export interface Certifications {
    id: number;
    trainer_id: number;
    certification_id: number;
    Certification: CertificateModal
}

export interface Specialities {
    id: number;
    trainer_id: number;
    speciality_id: number;
    Speciality: SpecialtiesModal;
}

interface TrainerDetails {
    id: number;
    user_id: number;
    title: string;
    start_year: number;
    profession: string;
    searchable: boolean;
    rate_per_session_amount: number;
    rate_per_session_currency: "usd";
    bio: string;
    Certifications: Certifications[];
    Specialities: Specialities[];
}


export interface AllTrainers {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    avatar: string;
    stripe_id: string;
    gender: string;
    zipcode: string;
    dob: string;
    phone: string;
    Country: CountryState;
    State: StateGeoState;
    City: CityGeoState;
    TrainerDetails: TrainerDetails;
}



interface SetAllTrainers {
    type: typeof SET_ALLTRAINERS;
    payload: AllTrainers[];
}


interface SetAvailableTrainers {
    type: typeof SET_AVAILABLE_TRAINERS_STATUS;
    payload: opportunity[];
}

interface RemoveAvailableTrainers {
    type: typeof REMOVE_AVAILABLE_TRAINERS;
    payload: number;
}

interface SetClientsTrainers {
    type: typeof SET_CLIENTS_TRAINERS;
    payload: opportunity[];
}



export type AllTrainersActionType = SetAllTrainers | SetAvailableTrainers | RemoveAvailableTrainers |SetClientsTrainers;