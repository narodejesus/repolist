import * as React from 'react'
import RootNavigator from './src/navigation/RootNavigator'
import {Provider as ReduxProvider} from 'react-redux'
import store from './src/store'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <RootNavigator />
    </ReduxProvider>
  )
}

export default App