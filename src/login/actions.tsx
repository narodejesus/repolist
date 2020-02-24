import {USER_LOGIN} from './constants'
import {LoginFormValue} from './types'

const onLoginAction = (payload: LoginFormValue) => ({
    type: USER_LOGIN,
    payload
})

export const onLogin = (dispatch) => (formValue: LoginFormValue) => {
    dispatch(onLoginAction(formValue))
}