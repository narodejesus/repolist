import { StackNavigationProp } from '@react-navigation/stack'

import {StackParamList} from '../navigation/types'

export type RepoListNavigationProp = StackNavigationProp<
  StackParamList,
  'REPO_LIST'
>

export interface Repo {
    id: number;
    owner: {
        avatar_url: string;
    };
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    watchers: number;
    stargazers_count: number;
    forks: number;
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

