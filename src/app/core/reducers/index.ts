import {ActionReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';

import {compose} from '@ngrx/core/compose';

import {storeFreeze} from 'ngrx-store-freeze';
import {combineReducers} from '@ngrx/store';

import * as fromAuth from './auth';
import * as fromCourses from './courses';
import * as fromCourse from './course';
import * as fromAuthors from './authors';
import * as fromLoader from './loader';

export interface AppState {
  courses: fromCourses.CoursesState;
  course: fromCourse.CourseState;
  auth: fromAuth.AuthState;
  authors: fromAuthors.AuthorsState;
  loader: fromLoader.LoaderState;
}

const reducers = {
  courses: fromCourses.reducer,
  course: fromCourse.reducer,
  auth: fromAuth.reducer,
  authors: fromAuthors.reducer,
  loader: fromLoader.reducer
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
