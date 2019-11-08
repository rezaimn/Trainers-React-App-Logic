/**
 * Define interface of State
 */


export enum RoleSignIn {
    PANEL = 'PANEL',
    TR_APP = 'TR_APP',
    CU_APP = 'CU_APP'
}
export interface SignInState {
    state: RoleSignIn;
    email: string;
    password: string;
}

export enum Role {
    FA = 'FA',
    TR = 'TR',
    CU = 'CU'
}

export interface SignUpState {
    role: Role;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    zipcode: string;
    dob: string;
    gender: string;
    phone: string;
    country_id: number;
    state_id: number;
    city_id: number;
}
export interface TrainerDetailsInfo {
    title: string;
    start_year: string;
    profession: string;
    searchable: boolean;
    rate_per_session_amount: number;
    rate_per_session_currency: string;
}

export interface ResponseSignUp extends SignUpState {
    avatar: string;
    code: string;
    reference: string;
    id: number;
}

// forgot password
export interface ForgotPasswordState {
    email: string;
}

export interface ResetPasswordState {
    email: string;
    code: string;
    password: string;
}


