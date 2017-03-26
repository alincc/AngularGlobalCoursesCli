import {Injectable} from '@angular/core';
import {Course} from '../../core/entities/Course';


import {uniqueId, find, findIndex, pullAllBy} from 'lodash';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {mockCourses} from '../../core/mock/courses';
import {LoaderBlockService} from '../../core/components/loader-block/loader-block.service';


@Injectable()
export class CoursesService {

  private _courses: BehaviorSubject<Course[]> = new BehaviorSubject(mockCourses);

  public courses: Observable<Course[]> = this._courses.asObservable();

  constructor(private loaderBlockService: LoaderBlockService) {

  }

  public getCourses(): Observable<Course[]> {
    return this.courses;
  }

  public createCourse(course: Course): void {
    const courses = this._courses.getValue();
    course.id = uniqueId();
    courses.push(course);
    this._courses.next(courses);
  }

  public getCourse(courseId: string) {
    const courses = this._courses.getValue();
    return find(courses, {id: courseId});
  }

  public updateCourse(course: Course) {
    const courses = this._courses.getValue();
    const index = findIndex(courses, {id: course.id});
    courses[index] = course;
    this._courses.next(courses);
  }

  public removeCourse(courseId: number): void {
    this.loaderBlockService.show();
    const courses = this._courses.getValue();
    pullAllBy(courses, [{id: courseId}], 'id');

    setTimeout(() => {
      this._courses.next(courses);
      this.loaderBlockService.hide();
    }, 1000);
  }
}
