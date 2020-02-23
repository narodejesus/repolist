import {createStore, combineReducers} from 'redux'
import loginReducer from './login/reducer'

const reducers = combineReducers({
    login: loginReducer
})

const store = createStore(reducers)

export default store