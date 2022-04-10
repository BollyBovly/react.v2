import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { profileReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { messagesReducer } from './messages/reducer';
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//     combineReducers({
//         profile: profileReducer,
//         chats: chatsReducer,
//         messages: messagesReducer,
//     }),
//     composeEnhancers(applyMiddleware(thunk))
// );

const persistConfig = {
    key: 'Messanger',
    storage,
    blacklist: ['profile']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)