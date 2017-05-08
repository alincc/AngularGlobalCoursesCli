import {Course} from '../entities/Course';
import {CoursesActions} from '../actions/courses';
import {Action} from '@ngrx/store';

export interface CoursesState {
  courses: Course[];
  page: number;
  pageSize: number;
  searchQuery: string;
}

export const initialState: CoursesState = {
  courses: [],
  page: 0,
  pageSize: 3,
  searchQuery: ''
};

export function reducer(state = initialState, action: Action): CoursesState {
  switch (action.type) {
    case CoursesActions.LOAD_COURSES_SUCCESS: {
      return Object.assign({}, state, {page: 0, courses: action.payload});
    }
    case CoursesActions.NEXT_PAGE: {
      return Object.assign({}, state, {page: state.page + 1});
    }
    case CoursesActions.NEXT_PAGE_SUCCESS: {
      return Object.assign({}, state, {courses: state.courses.concat(action.payload)});
    }
    case CoursesActions.SEARCH: {
      return Object.assign({}, state, {searchQuery: action.payload});
    }
    default: {
      return state;
    }
  }
}
