import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {connect, ConnectedProps} from 'react-redux'

import {SCREENS} from './constants'
import {AppState} from '../reducerTypes'

import LoginScreen from '../login/LoginScreen'
import * as loginStorage from '../login/storage'
import * as loginSelector from '../login/selector'
import * as loginAction from '../login/actions'

import RepoListScreen from '../repo/RepoListScreen'
import RepoDetailsComponent from '../repo/RepoDetailsComponent'

const mapStateToProps = (state: AppState) => ({
  email: loginSelector.getEmail(state)
})

const mapDispatchToProps = {
  onLoginAction: loginAction.onLoginAction
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

const Stack = createStackNavigator()

const loadCredentials = async (props: Props): Promise<void> => {
  const {email} = await loginStorage.loadUserCredentials()

  props.onLoginAction({email})
}

const RootNavigator = (props: Props) => {
  useEffect(() => {
    loadCredentials(props)
  }, [])

  const isEmailExist = props.email !== '' 

  return (
    <NavigationContainer>
      {isEmailExist ? (
        <Stack.Navigator>
          <Stack.Screen name={SCREENS.REPO_LIST} component={RepoListScreen} options={{ title: 'Repo List'}}/>
          <Stack.Screen name={SCREENS.REPO} component={RepoDetailsComponent} options={{ title: 'Repo'}}/>
        </Stack.Navigator>
      ): (
        <Stack.Navigator>
          <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}


export default connector(RootNavigator)