import {Course} from '../../core/entities/Course';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../../core/reducers/index';
import {Store} from '@ngrx/store';
import {CoursesActions} from '../../core/actions/courses';

@Component({
  selector: 'agc-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CoursesComponent implements OnInit {

  public courses$: Observable<Course[]>;

  constructor(private store: Store<AppState>,
              private coursesActions: CoursesActions) {
  }

  ngOnInit() {
    this.courses$ = this.store.select(state => state.courses['courses']);
    this.store.dispatch(this.coursesActions.loadCourses());

  }

  public setSearchValue(value: string) {
    this.store.dispatch(this.coursesActions.search(value));
  }

  public nextPage() {
    this.store.dispatch(this.coursesActions.nextPage());
  }
}
