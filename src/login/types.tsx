import { StackNavigationProp } from '@react-navigation/stack'

import {StackParamList} from '../navigation/types'

export type LoginScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'LOGIN'
>

export interface LoginFormValue {
    username?: string;
    password?: string;
}

