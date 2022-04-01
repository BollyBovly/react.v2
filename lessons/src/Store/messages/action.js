export const ADD_MESSAGE = 'MESSAGE::ADD_MESSAGE';

export const addMessage = (chatId, newMsg) => {
    return ({
        type: ADD_MESSAGE,
        payload: {
            chatId,
            newMsg,
        }
    })
}