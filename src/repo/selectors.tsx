
import {AppState} from '../reducerTypes'
import {RepoState} from './types'

export const getRepoState = (state: AppState): RepoState => state.repo

export const getRepoList = (state: AppState): Array<any> => {
    const repo = getRepoState(state)

    return repo.items || [];
}

export const getCurrentPage = (state: AppState): number => {
    const repo = getRepoState(state)

    return repo.currentPage || 0;
}

export const getCurrentCount =  (state: AppState): number => {
    const repo = getRepoState(state)

    return repo.totalCount || 0;
}