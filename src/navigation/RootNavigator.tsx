import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../login/LoginScreen'
import {SCREENS} from './constants'

const Stack = createStackNavigator()

const HIDE_HEADER_OPTION = {
  headerShown: false
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} options={HIDE_HEADER_OPTION}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;