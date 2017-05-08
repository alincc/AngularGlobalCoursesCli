import {Action} from '@ngrx/store';

import {Course} from '../entities/Course';
import {CoursesActions} from '../actions/courses';

export type CourseState = Course;

const initialState: CourseState = {
  id: null,
  name: '',
  description: '',
  date: null,
  length: 0,
  topRated: false,
};

export function reducer(state = initialState, action: Action): CourseState {
  switch (action.type) {
    case CoursesActions.RESET_BLANK_COURSE: {
      return initialState;
    }
    case CoursesActions.GET_COURSE_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
