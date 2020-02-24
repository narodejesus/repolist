
import AsyncStorage from '@react-native-community/async-storage'

const USER_CREDENTIALS_KEY: string = 'USER_CREDENTIALS'

interface User {
    email: string;
}

export const saveUserCredentials = ({email}: User):Promise<void> => AsyncStorage.setItem(USER_CREDENTIALS_KEY, JSON.stringify({email}))

export const loadUserCredentials = async (): Promise<User> => {
    const userCredentials = await AsyncStorage.getItem(USER_CREDENTIALS_KEY)

    if (!userCredentials) {
        return {
            email: '',
        }
    }

    return JSON.parse(userCredentials)
}
