import {FETCH_REPO, FETCH_REPO_NEXT} from './actionTypes'
import {RepoListPayload, SetRepo} from './types'

const initialState = {
    totalCount: 0,
    currentPage: 1,
    items: []
}

export default (state: RepoListPayload = initialState, action: SetRepo) => {
    if (action.type === FETCH_REPO) {
        const {totalCount, currentPage, items} = action.payload || {}

        return {
            ...state,
            totalCount, 
            currentPage, 
            items
        }
    }

    if (action.type === FETCH_REPO_NEXT) {
        const {totalCount, currentPage, items} = action.payload || {}

        return {
            ...state,
            totalCount, 
            currentPage, 
            items: state.items.concat(items),
        }
    }

    return state
}