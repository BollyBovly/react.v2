import { ADD_CHAT, CHANGE_SHOW_NAME, DELETE_CHAT } from "./action"

const initialState = [];

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return [...state, {newChat: action.payload.newChat, id: action.payload.id}]
        }
        case DELETE_CHAT: {
            return state.filter(({ id }) => id !== action.payload)
        }
        default: {
            return state;
        }
    }
}
