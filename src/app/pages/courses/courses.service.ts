import {Injectable} from '@angular/core';
import {Course} from '../../core/entities/Course';

import {Observable} from 'rxjs/Observable';
import {LoaderBlockService} from '../../core/components/loader-block/loader-block.service';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concatMap';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CoursesService {

  private searchQuery: BehaviorSubject<string> = new BehaviorSubject('');
  private page: BehaviorSubject<number> = new BehaviorSubject(0);
  private pageSize: BehaviorSubject<number> = new BehaviorSubject(3);

  public $courses: Observable<Course[]>;

  constructor(private loaderBlockService: LoaderBlockService, private http: Http) {


    this.$courses = Observable.combineLatest(
      this.pageSize,
      this.searchQuery
        .map((query: string) => query.trim())
        .map((query: string) => query && query.length >= 3 ? query : '')
        .debounce(() => Observable.timer(250))
    )
      .do(() => this.loaderBlockService.show())
      .switchMap(([pageSize, searchQuery]) => this.page
        .concatMap((_, page) => this.fetchCourses(page, pageSize, searchQuery))
        .scan((courses, next) => courses.concat(next)))
      .do(() => this.loaderBlockService.hide())
      .share();

  }

  public search(query: string) {
    this.searchQuery.next(query);
  }

  public nextPage() {
    this.page.next(this.page.value + 1);
  }

  public changePageSize(size: number) {
    this.pageSize.next(size);
  }

  public createCourse(course: Course) {
    this.loaderBlockService.show();
    return this.http.post(`http://localhost:3004/courses`, course)
      .do(() => this.loaderBlockService.hide());
  }

  public getCourse(courseId: number): Observable<Course> {
    return this.http.get(`http://localhost:3004/courses/${courseId}`).map(res => res.json());
  }

  public updateCourse(course: Course) {
    this.loaderBlockService.show();
    return this.http.put(`http://localhost:3004/courses/${course.id}`, course)
      .do(() => this.loaderBlockService.hide())
      .do(() => this.searchQuery.next(''));
  }

  public removeCourse(courseId: number): void {
    this.http.delete(`http://localhost:3004/courses/${courseId}`)
      .do(() => this.loaderBlockService.show())
      .subscribe(() => {
        this.searchQuery.next('');
      });
  }

  private fetchCourses(page, pageSize, query?: string): Observable<Course[]> {
    const params = new URLSearchParams();
    if (query) {
      params.set('query', query);
    }
    params.set('start', page);
    params.set('count', pageSize);
    return this.http.get('http://localhost:3004/courses', {search: params}).map(res => res.json());
  }
}
