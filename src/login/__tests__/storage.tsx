import AsyncStorage from '@react-native-community/async-storage'
import * as storage from '../storage'

describe('Login storage', () => {
    it('should should be able to store the email credential only', async () => {
        await storage.saveUserCredentials({ email: 'juan@gmail.com' });

        expect(AsyncStorage.setItem).toBeCalledWith('USER_CREDENTIALS', JSON.stringify({ email: 'juan@gmail.com' }));
    })

    it('should should be able to return the previously stored credential', async () => {
        const user = await storage.loadUserCredentials();

        expect(user).toEqual({ email: 'juan@gmail.com' });
    })

    it('should return empty email string', async () => {
        AsyncStorage.clear()
        const user = await storage.loadUserCredentials();

        expect(user).toEqual({ email: '' });
    })
})