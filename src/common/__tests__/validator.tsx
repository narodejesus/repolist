import * as validator from '../validator'

describe('validator', () => {
    it('validates email', () => {
        expect(validator.isEmail('juan@gmail.com')).toBeTruthy()
        expect(validator.isEmail('juan@gmail')).toBeFalsy()
    })

    it('validates is field is empty', () => {
        expect(validator.isNotEmpty('juan@gmail.com')).toBeTruthy()
        expect(validator.isNotEmpty('')).toBeFalsy()
        expect(validator.isNotEmpty('12')).toBeTruthy()
        expect(validator.isNotEmpty('1')).toBeTruthy()

    })
})