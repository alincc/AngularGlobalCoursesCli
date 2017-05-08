import {Action} from '@ngrx/store';
import {LoaderActions} from '../actions/loader';

export interface LoaderState {
  show: boolean;
}

const initialState: LoaderState = {
  show: false
};

export function reducer(state = initialState, action: Action): LoaderState {
  switch (action.type) {
    case LoaderActions.SHOW: {
      return {show: true};
    }
    case LoaderActions.HIDE: {
      return {show: false};
    }
    default: {
      return state;
    }
  }
}
