import {Injectable} from '@angular/core';
import {Course} from '../../core/entities/Course';
import {Observable} from 'rxjs/Observable';
import {Http, URLSearchParams} from '@angular/http';

@Injectable()
export class CoursesService {
  constructor(private http: Http) {
  }

  public getCourses(page, pageSize, query?: string): Observable<Course[]> {
    const params = new URLSearchParams();
    if (query) {
      params.set('query', query);
    }
    params.set('start', page);
    params.set('count', pageSize);
    return this.http.get('http://localhost:3004/courses', {search: params}).map(res => res.json());
  }

  public getCourse(courseId: number): Observable<Course> {
    return this.http.get(`http://localhost:3004/courses/${courseId}`).map(res => res.json());
  }

  public createCourse(course: Course) {
    return this.http.post(`http://localhost:3004/courses`, course);
  }

  public updateCourse(course: Course) {
    return this.http.put(`http://localhost:3004/courses/${course.id}`, course);
  }

  public removeCourse(courseId: number): Observable<any> {
    return this.http.delete(`http://localhost:3004/courses/${courseId}`);
  }
}
