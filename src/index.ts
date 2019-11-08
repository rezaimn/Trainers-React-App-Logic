import store from  './store';
import './config/configAxios';
import { AppState } from './store/reducers'
export * from './store/actions'

export { 
    store,
    AppState
};
