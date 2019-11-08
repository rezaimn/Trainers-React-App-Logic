import store from '../store'
import { TokenState, SET_UNAUTHORIZED, IUnauthorized } from '../models';

export const parseNullItem = (data : any) => {
    data = { ...data };
    Object.keys(data).map(key => {
        if (data[key] === null || data[key] === "null") {
            delete data[key];
        }
    });
    return data;
};

export const getTokenStore = (): string | null => {
    const {
        account: {
            tokenData
        },
    } = store.getState();
    
    if(tokenData){
        const token = (tokenData as TokenState).token;
        return token;
    }
    return null
};

export const unauthorizedAction = (payload: IUnauthorized): void => {
    store.dispatch({type: SET_UNAUTHORIZED, payload})
};
