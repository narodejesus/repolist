import {USER_LOGIN} from './actionTypes'
import {SetLogin, LoginState} from './types'

const initialState = {
    user: {}
}

export default (state: LoginState = initialState, action: SetLogin) => {
    if (action.type === USER_LOGIN) {
        const {email, password} = action.payload || {}

        return {
            ...state,
            user: {
                email,
                password,
            }
        }
    }

    return state
}