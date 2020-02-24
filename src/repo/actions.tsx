
import {FETCH_REPO, FETCH_REPO_NEXT} from './constants'
import {RepoListPayload} from './types'

const DEFAULT_PAGE = 1
const PAGE_LIMIT = 20
const REPO_ENDPOINT = 'https://api.github.com/search/repositories'

export const onFetchRepoAction = (payload: RepoListPayload) => ({
    type: FETCH_REPO,
    payload
})

export const onFetchNextRepoAction = (payload: RepoListPayload) => ({
    type: FETCH_REPO_NEXT,
    payload
})

const fetchRepo = async (query: string, page: number = 1) => {
    const response = await fetch(`${REPO_ENDPOINT}?q=${query}&per_page=${PAGE_LIMIT}&page=${page}`)

    return response.json()
}

export const onFetchRepo = (dispatch: Function) => async (query: string = '') => {
    const repos = await fetchRepo(query)

    dispatch(
        onFetchRepoAction({
            totalCount: repos.total_count,
            currentPage: DEFAULT_PAGE,
            items: repos.items
        })
    )
}

export const onFetchNextRepo = (dispatch: Function) => async (query: string = '', currentPage: number = DEFAULT_PAGE) => {
    const INCREMENT_PAGE = 1
    const nextPage = currentPage + INCREMENT_PAGE

    const repos = await fetchRepo(query, nextPage)

    dispatch(
        onFetchRepoAction({
            totalCount: repos.total_count,
            currentPage: nextPage,
            items: repos.items
        })
    )
}