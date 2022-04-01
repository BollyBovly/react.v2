import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { profileReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';
import thunk from 'redux-thunk'
import { messagesChatsReducer } from './messages/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        messages: messagesChatsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
);