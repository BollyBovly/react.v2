import { CHANGE_SHOW_NAME } from "./action"

const initialState = {
    name: 'HEEEELooo',
    showName: true,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SHOW_NAME: {
            return {
                ...state,
                showName: !state.showName,
            }
        }
        default: {
            return state;
        }
    }
}
