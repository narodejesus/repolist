import {getRepoList, getCurrentPage, getCurrentCount} from '../selectors'

describe('Repo selector', () => {
    it('should be able select items and current count ', () => {
        const state = {
            repo: {
                totalCount: 100,
                currentPage: 1,
                items: [
                    {
                        id: 1
                    },
                    {
                        id: 2
                    },
                ],
            }
        }

        expect(getRepoList(state)).toEqual([
            {
                id: 1
            },
            {
                id: 2
            },
        ])
        expect(getCurrentPage(state)).toEqual(1)
        expect(getCurrentCount(state)).toEqual(100)

    })

    it('should should return empty is item is empty', () => {
        const state = {
            repo: {
                totalCount: 100,
                currentPage: 1,
                items: [],
            }
        }

        expect(getRepoList(state)).toEqual([])
    })
})