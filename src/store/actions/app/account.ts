import {ThunkAction} from 'redux-thunk'
import {Action} from 'redux'
import {AppState} from '../../reducers'
import {
    SignInState,
    SET_ACCOUNT_USER_PARAMS,
    SET_TOKEN,
    SignUpState,
    START_LOADING,
    STOP_LOADING,
    SET_SUCCESS,
    SET_FAILELD,
    ForgotPasswordState,
    ResetPasswordState,
    TokenState,
    SET_UPDATE_USER,
    SET_LIST_USERS,
    SET_USER_PROFILE,
    UPDATE_FRANCHISE,
    TrainerDetailsInfo,
    UPDATE_PACKAGE,
    UPDATE_PACKAGE_CURRENT,
    DELETE_USER,
    UserFilters, initialBankAccount, CLEAR_TOKEN, UPDATE_ACCOUNT_USER_PROFILE,
    // FAILED_LIST_USERS
} from "../../../models";
import {
    postLogin,
    postSignUp,
    postForgotPass,
    postResetPass,
    getUserList,
    getUserById,
    changeUserAvatar,
    postUpdateProfile,
    changeUserStatus,
    updateTrainerUpdateDetailsInfo, 
    deleteUser,
    checkUserProfileApi,
    changeOldPasswordApi
} from '../../../api';
import {
    startLoading,
    stopLoading
} from '../index'

// user action to signin through our api
export const userSigninAction = (params: SignInState): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await postLogin(params).xhr;

            // set account info
            if (response && response.user) {
                dispatch({type: SET_ACCOUNT_USER_PARAMS, payload: response.user})
                dispatch({type: SET_USER_PROFILE, payload: response.user})
                dispatch(getUserProfileAction(response.user.id))
            }

            // set token
            if (response && response.token) {
                dispatch({type: SET_TOKEN, payload: response.token})
                return true;
            }

        } catch (err) {
            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
            return false;

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};


// user action to signup through our api
export const userSignUpAction = (params: SignUpState): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        if (!params) {
            dispatch({type: SET_FAILELD, payload: {message: "Please fill all required fields."}})
            return false;
        }

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await postSignUp(params).xhr;

            // 200
            dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Verification code sent to your email.'}});
            return true;
        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
            return false;
        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const userUpdateProfile = (id: number, params: SignUpState): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        if (!params) {
            dispatch({type: SET_FAILELD, payload: {message: "Please fill all required fields."}})
            return;
        }

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await postUpdateProfile(id, params).xhr;
            dispatch({type: UPDATE_ACCOUNT_USER_PROFILE, payload: response});
            // 200
            dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Update profile successful.'}});
            return true;
            //TODO
            // dispatch({type: UPDA, payload: response})
            // dispatch({type: UPDATE_PACKAGE_CURRENT, payload: response})

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
            return false;

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const trainerUpdateDetailsInfo = (id: number, params: any): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        // if (!params) {
        //     dispatch({type: SET_FAILELD, payload: {message: "Please fill all required fields."}})
        //     return;
        // }

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await updateTrainerUpdateDetailsInfo(id, params).xhr;

            // 200
            dispatch({
                type: SET_SUCCESS,
                payload: {success: true, message: 'Update Trainer Details Information successful.'}
            });
            return true;
        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
            return false;

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

// user action to forgotpass through our api
export const userForgotPassAction = (params: ForgotPasswordState): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        if (!params) {
            dispatch({type: SET_FAILELD, payload: {message: "Please fill all required fields."}})
            return;
        }

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await postForgotPass(params).xhr;

            // 200
            dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Code sent to your email'}});
            return true;

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
            return false;

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

// user action to resetPassword through our api
export const userResetPassAction = (params: ResetPasswordState): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        if (!params) {
            dispatch({type: SET_FAILELD, payload: {message: "Please fill all required fields."}})
            return;
        }

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await postResetPass(params).xhr;
            // 200
            dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Reset password'}});
            return true;

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
            return false;

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};


export const getListUserAction = (filters: UserFilters): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getUserList(filters).xhr;
            if (response) {
                dispatch({type: SET_LIST_USERS, payload: response})
            }

        } catch (err) {

            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const getUserProfileAction = (id: number): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await getUserById(id).xhr;

            if (response) {
                response.Franchise.map(fr => {
                    return fr.name = fr._Franchise.name;
                })
                if (response.TrainerDetails && response.TrainerDetails.Specialities) {
                    response.TrainerDetails.Specialities.map(speciality => {
                        speciality.id = speciality.Speciality.id;
                        speciality.name = speciality.Speciality.name;
                        speciality.status = speciality.Speciality.status;
                        delete speciality.Speciality;
                        return speciality;
                    })
                }
                if (response.TrainerDetails && response.TrainerDetails.Certifications) {
                    response.TrainerDetails.Certifications.map(certificate => {
                        certificate.id = certificate.Certification.id;
                        certificate.name = certificate.Certification.name;
                        certificate.status = certificate.Certification.status;
                        delete certificate.Certification;
                        return certificate;
                    })
                }
                response.bankData={...initialBankAccount};
                if (response.bankAccounts && response.bankAccounts.data &&  response.bankAccounts.data.length > 0) {
                    response.bankData={...response.bankAccounts.data[0]};
                }
                dispatch({type: SET_USER_PROFILE, payload: response})
            }
        } catch (err) {
            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})

        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
};

export const setAvatarAction = (id: number, avatar: FormData): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await changeUserAvatar(id, avatar).xhr;
            if (response) {
                dispatch(getUserProfileAction(id))
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Avatar changed successfully'}})
                return true;
            }

        } catch (err) {
            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
            return false;
        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
}

export const setUserStatusAction = (id: number): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {
        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await changeUserStatus(id).xhr;
            if (response) {

                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'User Status changed successfully'}});
                dispatch({type: SET_UPDATE_USER, payload: response})
            }

        } catch (err) {
            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
}


export const deleteUserAction = (id: number): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {
        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await deleteUser(id).xhr;
            if (response) {
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'User Deleted successfully'}});
                dispatch({type: DELETE_USER, payload: id})
                return true;
            }
            return false;

        } catch (err) {
            // show error
            dispatch({type: SET_FAILELD, payload: {message: err}})
            return false;
        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
}

export const setTokenAction = (params: TokenState): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any) => {

        try {
            await dispatch({type: SET_TOKEN, payload: params})
            return true;

        } catch (err) {
            console.log(err, "token")
            return false;
            // TODO: dispatch 401
        }
    };
}

export const removeTokenAction = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any) => {

        try {
            await dispatch({type: CLEAR_TOKEN})
            return true;

        } catch (err) {
            console.log(err, "token")
            return false;
            // TODO: dispatch 401
        }
    };
}


export const checkUserProfileAction = (): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await checkUserProfileApi();
            if (response) {
                return response;
            }
        } catch (err) {
            dispatch({type: SET_FAILELD, payload: {message: err}})
            return false
        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
}

export const changeOldPasswordAction = (oldPassword: string, newPassword: string): ThunkAction<void, AppState, null, Action<string>> => {
    return async (dispatch: any, getState: any) => {

        try {
            startLoading(START_LOADING)(dispatch, getState, null)
            const response = await changeOldPasswordApi(oldPassword, newPassword);
            if (response) {
                dispatch({type: SET_SUCCESS, payload: {success: true, message: 'Password Updated successfully'}});
                return true;
            }
        } catch (err) {
            dispatch({type: SET_FAILELD, payload: {message: err}})
            return false
        } finally {
            stopLoading(STOP_LOADING)(dispatch, getState, null)
        }
    };
}
