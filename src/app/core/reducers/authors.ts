import {Action} from '@ngrx/store';
import {AuthorsActions} from '../actions/authors';
import {Author} from '../entities/Author';

export interface AuthorsState {
  authors: Author[];
}

const initialState: AuthorsState = {
  authors: []
};

export function reducer(state = initialState, action: Action): AuthorsState {
  switch (action.type) {
    case AuthorsActions.LOAD_AUTHORS_SUCCESS: {
      return {authors: action.payload};
    }
    default: {
      return state;
    }
  }
}
