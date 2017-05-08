import {Injectable} from '@angular/core';
import {Course} from '../entities/Course';
import {ActionCreatorFactory} from '../services/actionCreator';

@Injectable()
export class CoursesActions {
  static LOAD_COURSES = '[Courses] Load Courses';
  static LOAD_COURSES_SUCCESS = '[Courses] Load Courses Success';
  static DELETE_COURSE = '[Courses] Delete Course';
  static GET_COURSE = '[Courses] Get Course';
  static GET_COURSE_SUCCESS = '[Courses] Get Course Success';
  static RESET_BLANK_COURSE = '[Courses] Reset Blank Course';
  static SAVE_COURSE = '[Courses] Save Course';
  static ADD_COURSE = '[Courses] Add Course';
  static SEARCH = '[Courses] Search';
  static NEXT_PAGE = '[Courses] Next Page';
  static NEXT_PAGE_SUCCESS = '[Courses] Next Page Success';
  static CHANGE_PAGE_SIZE = '[Courses] Change Page Size';

  loadCourses = ActionCreatorFactory.create(CoursesActions.LOAD_COURSES);

  loadCoursesSuccess = ActionCreatorFactory.create<Course[]>(CoursesActions.LOAD_COURSES_SUCCESS);

  getCourse = ActionCreatorFactory.create<number>(CoursesActions.GET_COURSE);

  getCourseSuccess = ActionCreatorFactory.create<Course>(CoursesActions.GET_COURSE_SUCCESS);

  resetBlankCourse = ActionCreatorFactory.create(CoursesActions.RESET_BLANK_COURSE);

  saveCourse = ActionCreatorFactory.create(CoursesActions.SAVE_COURSE);

  addCourse = ActionCreatorFactory.create<Course>(CoursesActions.ADD_COURSE);

  deleteCourse = ActionCreatorFactory.create<number>(CoursesActions.DELETE_COURSE);

  search = ActionCreatorFactory.create<string>(CoursesActions.SEARCH);

  nextPage = ActionCreatorFactory.create(CoursesActions.NEXT_PAGE);

  nextPageSuccess = ActionCreatorFactory.create<Course[]>(CoursesActions.NEXT_PAGE_SUCCESS);

  changePageSize = ActionCreatorFactory.create(CoursesActions.CHANGE_PAGE_SIZE);
}
