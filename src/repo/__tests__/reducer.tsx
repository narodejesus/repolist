import reducer from '../reducer'

describe('Repo reducer', () => {
    it('should should be able to store repo', () => {
        const action = {
            type: 'FETCH_REPO',
            payload: {
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

        const initialState = {
            totalCount: 0,
            currentPage: 1,
            items: [],
        }

        expect(reducer(initialState, action)).toEqual({
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
        })
    })

    it('should should be able to fetch next repo', () => {
        const action = {
            type: 'FETCH_REPO_NEXT',
            payload: {
                totalCount: 100,
                currentPage: 2,
                items: [
                    {
                        id: 3
                    },
                    {
                        id: 5
                    },
                ],
            }
        }

        const initialState = {
            totalCount: 0,
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

        expect(reducer(initialState, action)).toEqual({
            totalCount: 100,
            currentPage: 2,
            items: [
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                },
                {
                    id: 5
                },
            ],
        })
    })
})