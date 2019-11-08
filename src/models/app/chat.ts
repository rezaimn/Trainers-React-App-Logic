
import { AccountState } from '../index'


export const  SET_CHAT_LIST = "SET_CHAT_LIST";
export const  ADD_TO_CHAT_LIST = "ADD_TO_CHAT_LIST";
export const  Toggle_CURRENT_ROOM_ID = "SET_CURRENT_ROOM_ID";
export const  TOGGLE_NEW_MESSAGE = "TOGGLE_NEW_MESSAGE";


export interface ChatStartWith {
    from: number;
    with: number;
    room: string;
    created_at: string;
    updated_at: string;
    id: number
    messages: any[]
}





export interface ListChat {
    id: number;
    from: number;
    with: number;
    room: string;
    created_at: string;
    updated_at: string;
    fromUser: AccountState;
    withUser: AccountState;
    messages: any[] //TODO add model
}


interface SetChatList {
    type: typeof SET_CHAT_LIST;
    payload: ListChat[];
}

interface AddToChatList {
    type: typeof ADD_TO_CHAT_LIST;
    payload: ListChat;
}

interface ToggleCurrentRoomId {
    type: typeof Toggle_CURRENT_ROOM_ID;
    payload: string;
}


interface ToggleNewMessage {
    type: typeof TOGGLE_NEW_MESSAGE;
    payload: boolean;
}


export type ChatListActionType = SetChatList | ToggleCurrentRoomId | ToggleNewMessage | AddToChatList;
