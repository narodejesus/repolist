
import {LoginState} from './login/types'
import {RepoState} from './repo/types'

export interface AppState {
    login: LoginState;
    repo: RepoState;
}
