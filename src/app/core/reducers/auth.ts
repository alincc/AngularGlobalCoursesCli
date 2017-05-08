import {Action} from '@ngrx/store';

import {UserInfo} from '../entities/User';
import {AuthActions} from '../actions/auth';

export interface AuthState {
  user: UserInfo;
}

const initialState: AuthState = {
  user: null
};

export function reducer(state = initialState, action: Action): AuthState {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS: {
      return {user: action.payload};
    }
    case AuthActions.LOGOUT: {
      return {user: null};
    }
    default: {
      return state;
    }
  }
}
