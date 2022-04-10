import { AUTHORS } from "../../components/utils/constans";

export const ADD_MESSAGE = 'MESSAGE::ADD_MESSAGE';

export const addMessage = (chatId, newMsg) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        newMsg,
    },
});

let timeout;

export const addMessageWithThunk = (chatId, newMsg) => (dispatch, getState) => {
    dispatch(addMessage(chatId, newMsg));

    

    if(newMsg.author !== AUTHORS.BOT) {
        timeout = setTimeout(() =>{
            const msgFromBot = {
                text: 'i follow you',
                author: AUTHORS.BOT,
                id: `msg-${Date.now()}`,
            };
            dispatch(addMessage(chatId, msgFromBot))
        }, 1000)
        return () => clearTimeout(timeout);
    }

}