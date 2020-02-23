import {USER_LOGIN} from './constants'

interface Payload {
    username?: string;
    password?: string;
}

interface InitialState {
    user: Payload;
}

interface SetLogin {
    type: string;
    payload: Payload;
}

const initialState = {
    user: {}
}

export default (state: InitialState = initialState, action: SetLogin) => {
    if (action.type === USER_LOGIN) {
        const {username, password} = action.payload || {}

        return {
            ...state,
            user: {
                username,
                password,
            }
        }
    }

    return state
}