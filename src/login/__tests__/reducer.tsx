import reducer from '../reducer'

describe('Login reducer', () => {
    it('should should be able to handle login', () => {
        const action = {
            type: 'USER_LOGIN',
            payload: {
                email: 'johndoe22',
                password: 'johndoe22password'
            }
        }

        expect(reducer({ user: {} }, action)).toEqual({
            user: {
                email: 'johndoe22',
                password: 'johndoe22password'
            }
        })
    })

    it('should should be able to handle login even if formInput is empty', () => {
        const action = {
            type: 'USER_LOGIN',
            payload: {}
        }

        expect(reducer({ user: {} }, action)).toEqual({
            user: {}
        })
    })
})