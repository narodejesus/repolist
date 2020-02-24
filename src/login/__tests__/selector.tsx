import {getEmail} from '../selector'

describe('Login selector', () => {
    it('should be able to return email froms tate ', () => {
        const state = {
            login: {
                user: {
                    email: 'johndoe@gmail.com'
                }
            }
        }

        expect(getEmail(state)).toEqual('johndoe@gmail.com')
    })

    it('should should return empty string if state is empty', () => {
        const state = {
            login: {
                user: {}
            }
        }

        expect(getEmail(state)).toEqual('')
    })
})