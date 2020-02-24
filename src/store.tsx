import {createStore, combineReducers} from 'redux'
import loginReducer from './login/reducer'
import repoReducer from './repo/reducer'

const reducers = combineReducers({
    login: loginReducer,
    repo: repoReducer
})

const store = createStore(reducers)

export default store