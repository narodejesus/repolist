
import {AppState} from '../reducerTypes'
import {LoginState} from './types'

export const getLoginState = (state: AppState): LoginState => state.login

export const getEmail = (state: AppState): string => {
    const login = getLoginState(state)

    return login.user.email || '';
}