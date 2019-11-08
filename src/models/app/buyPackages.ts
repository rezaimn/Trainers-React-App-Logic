
import { PackageState } from '..'


export const SET_PACKAGE_FACTOR = "SET_PACKAGE_FACTOR";
export const SET_PACKAGE_PAYMENT = "SET_PACKAGE_PAYMENT"


export interface FactorPackage {
    data: PackageState;
    customerId: string;
    allSession: number;
    allPaidSession: number;
    allPaidSessionAmount: number;
    discount: number;
    additionalPersonAmount: number;
    totalPrice: number;
    totalPriceWithDiscount: number;
}


interface Metadata {
    payment_id: string;
}

export interface PaymentPackage {
    id: string;
    metadata: Metadata;
    client_secret: string;
}


interface SetPackageFactor {
    type: typeof SET_PACKAGE_FACTOR;
    payload: FactorPackage;
}

interface SetPackagePayment {
    type: typeof SET_PACKAGE_PAYMENT;
    payload: PaymentPackage;
}

export type BuyPackageActionType = SetPackageFactor | SetPackagePayment;