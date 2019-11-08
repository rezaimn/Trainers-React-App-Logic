
export const SET_CERTIFICATE = "SET_CERTIFICATE";
export const ADD_CERTIFICATE = "ADD_CERTIFICATE";


export interface CertificateModal {
    id: number;
    name: string;
    status: boolean;
    Certification:any;
}

interface SetCertificate {
    type: typeof SET_CERTIFICATE;
    payload: CertificateModal[];
}

interface AddCertificate {
    type: typeof ADD_CERTIFICATE ;
    payload: CertificateModal[];
}

export type CertificateActionType = SetCertificate | AddCertificate;
