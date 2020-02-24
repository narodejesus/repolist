
import {FETCH_REPO, FETCH_REPO_NEXT} from './actionTypes'
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

export interface Query {
    query: string;
    currentPage?: number;
}

export const onFetchRepo = (dispatch: Function) => async ({query}: Query) => {
    const repos = await fetchRepo(query)

    dispatch(
        onFetchRepoAction({
            totalCount: repos.total_count,
            currentPage: DEFAULT_PAGE,
            items: repos.items
        })
    )
}

export const onFetchNextRepo = (dispatch: Function) => async ({query, currentPage}: Query) => {
    const INCREMENT_PAGE = 1
    const nextPage = currentPage + INCREMENT_PAGE
    const repos = await fetchRepo(query, nextPage)

    if (!repos.items || repos.items.length <= 0) {
        return
    }

    dispatch(
        onFetchNextRepoAction({
            totalCount: repos.total_count,
            currentPage: nextPage,
            items: repos.items
        })
    )
}