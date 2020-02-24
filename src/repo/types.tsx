import { StackNavigationProp } from '@react-navigation/stack'

import {StackParamList} from '../navigation/types'

export type RepoListNavigationProp = StackNavigationProp<
  StackParamList,
  'REPO_LIST'
>

export interface Repo {
    id: number;
}

export interface RepoListPayload {
    totalCount: number;
    currentPage: number;
    items: Array<Repo>;
}

export interface SetRepo {
    type: string;
    payload: RepoListPayload;
}

export interface RepoState {
    totalCount: number;
    currentPage: number;
    items: Array<Repo>;
}

