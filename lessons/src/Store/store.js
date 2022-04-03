import { createStore, combineReducers } from 'redux'
import { profileReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';
import { messagesChatsReducer } from './messages/reducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesChatsReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);