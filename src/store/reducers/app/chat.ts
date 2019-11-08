import {combineReducers} from "redux";
import {
    ADD_TO_CHAT_LIST,
    ChatListActionType,
    ListChat,
    SET_CHAT_LIST,
    Toggle_CURRENT_ROOM_ID,
    TOGGLE_NEW_MESSAGE
} from "../../../models";
import {findIndex as lodashFindIndex, remove as lodashRemove,} from 'lodash';


const initialListChat: ListChat[] = []


export default combineReducers({
    data: (state: ListChat[] = initialListChat, action: ChatListActionType) => {
        switch (action.type) {
            case SET_CHAT_LIST:
                return action.payload;
            case ADD_TO_CHAT_LIST:
                const index = lodashFindIndex(state, {id: action.payload.id});
                // state = state.slice(0);

                if (index === -1) {
                    return [action.payload,...state];
                }
                return state;
            default:
                return state;
        }
    },
    currenrRoomId: (state: string = '', action: ChatListActionType) => {
        switch (action.type) {
            case Toggle_CURRENT_ROOM_ID:
                return action.payload;
            default:
                return state;
        }
    },

    isNewMessage: (state: boolean = false, action: ChatListActionType) => {
        switch (action.type) {
            case TOGGLE_NEW_MESSAGE:
                return action.payload;
            default:
                return state;
        }
    },
});
