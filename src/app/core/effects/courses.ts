import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {AppState} from '../reducers';
import {CoursesActions} from '../actions/courses';
import {CoursesService} from '../../pages/courses/courses.service';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/distinctUntilChanged';
import {LoaderActions} from '../actions/loader';
import {Router} from '@angular/router';

@Injectable()
export class CoursesEffects {
  @Effect()
  loadCourses$ = this.actions$
    .ofType(CoursesActions.LOAD_COURSES)
    .do(() => this.store.dispatch(this.loaderActions.show()))
    .withLatestFrom(this.store, (action, state) => state.courses)
    .switchMap(({pageSize, searchQuery}) => this.coursesService.getCourses(0, pageSize, searchQuery))
    .distinctUntilChanged()
    .share()
    .map(courses => this.coursesActions.loadCoursesSuccess(courses))
    .do(() => this.store.dispatch(this.loaderActions.hide()));

  @Effect()
  getCourse$ = this.actions$
    .ofType(CoursesActions.GET_COURSE)
    .map(action => action.payload)
    .switchMap(id => this.coursesService.getCourse(id))
    .map(course => this.coursesActions.getCourseSuccess(course));

  @Effect()
  saveCourse$ = this.actions$
    .ofType(CoursesActions.SAVE_COURSE)
    .map(action => action.payload)
    .switchMap(course => this.coursesService.updateCourse(course))
    .map(() => this.coursesActions.loadCourses());

  @Effect()
  addCourse$ = this.actions$
    .ofType(CoursesActions.ADD_COURSE)
    .map(action => action.payload)
    .switchMap(course => this.coursesService.createCourse(course))
    .map(() => this.coursesActions.loadCourses())
    .do(() => this.router.navigate(['/courses']));

  @Effect()
  deleteCourse$ = this.actions$
    .ofType(CoursesActions.DELETE_COURSE)
    .map(action => action.payload)
    .switchMap((courseId: number) => this.coursesService.removeCourse(courseId))
    .map(() => this.coursesActions.loadCourses());

  @Effect()
  nextPage$ = this.actions$
    .ofType(CoursesActions.NEXT_PAGE)
    .do(() => this.store.dispatch(this.loaderActions.show()))
    .withLatestFrom(this.store, (action, state) => state.courses)
    .switchMap(({page, pageSize, searchQuery}) => this.coursesService.getCourses(page, pageSize, searchQuery))
    .map((courses) => this.coursesActions.nextPageSuccess(courses))
    .do(() => this.store.dispatch(this.loaderActions.hide()));


  @Effect()
  search$ = this.actions$
    .ofType(CoursesActions.SEARCH)
    .map(() => this.coursesActions.loadCourses());

  constructor(private actions$: Actions,
              private coursesActions: CoursesActions,
              private loaderActions: LoaderActions,
              private store: Store<AppState>,
              private router: Router,
              private coursesService: CoursesService) {
  }
}
