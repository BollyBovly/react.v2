import { ADD_CHAT, DELETE_CHAT } from "../chats/action";
import { ADD_MESSAGE } from "./action"

const initialState = {};

export const messagesChatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state, 
                [action.payload.chatId]:[...state[action.payload.chatId], action.payload.newMsg],
            }
        }
        
        case DELETE_CHAT: {
            const newMessages = {...state};
            delete newMessages[action.payload];
            return newMessages;
        }
        default: {
            return state;
        }
    }
}