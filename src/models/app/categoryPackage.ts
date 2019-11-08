import { FranchiseState } from "./franchise";
import { PackageState } from '..'


/**
 * ACCOUNT ACTIONS
 */
// category package
export const SET_CATEGORY_PACKAGE = "SET_CATEGORY_PACKAGE";
export const UPDATE_CATEGORY_PACKAGE = "UPDATE_CATEGORY_PACKAGE";
export const CLEAR_CATEGORY_PACKAGE = "CLEAR_CATEGORY_PACKAGE";
export const ADD_CATEGORY_PACKAGE = "ADD_CATEGORY_PACKAGE";
export const REMOVE_CATEGORY_PACKAGE = "REMOVE_FCATEGORY_PACKAGE";

// for POST method
export interface CategoryPackageParams {
    name: string;
    description: string;
    icon: any;
}

// for GET method
export interface CategoryPackageState extends CategoryPackageParams {
    id: number;
    status: boolean;
    franchise_id: number;
    Franchise?: FranchiseState;
    Packages?: PackageState;
}

interface UpdateCategoryPackage {
    type: typeof UPDATE_CATEGORY_PACKAGE;
    payload: CategoryPackageState;
}

interface SetCategoryPackage {
    type: typeof SET_CATEGORY_PACKAGE;
    payload: CategoryPackageState[];
}

interface ClearCategoryPackage {
    type: typeof CLEAR_CATEGORY_PACKAGE;
    payload: CategoryPackageState;
}

interface AddCategoryPackage {
    type: typeof ADD_CATEGORY_PACKAGE ;
    payload: CategoryPackageState;
}

interface RemoveCategoryPackage {
    type: typeof REMOVE_CATEGORY_PACKAGE;
    payload: CategoryPackageState;
}

export type CategoryPackageActionType =
    | UpdateCategoryPackage
    | SetCategoryPackage
    | ClearCategoryPackage
    | AddCategoryPackage
    | RemoveCategoryPackage;
