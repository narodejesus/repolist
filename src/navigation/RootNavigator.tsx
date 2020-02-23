import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../login/LoginScreen'

const SCREENS = {
  LOGIN: 'LOGIN'
}

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;