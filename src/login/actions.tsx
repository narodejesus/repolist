import {USER_LOGIN} from './constants'
import {LoginFormValue} from './types'
import * as storage from './storage'

export const onLoginAction = (payload: LoginFormValue) => ({
    type: USER_LOGIN,
    payload
})

export const onLogin = (dispatch: Function) => async (formValue: LoginFormValue) => {
    const {email} = formValue

    await storage.saveUserCredentials({email})
    dispatch(onLoginAction(formValue))
}