import {Course} from '../../core/entities/Course';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CoursesService} from './courses.service';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'agc-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CoursesComponent implements OnInit {

  public courses: Observable<Course[]>;
  public searchValue = new BehaviorSubject<string>('');


  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  setSearchValue(value: string) {
    this.searchValue.next(value);
  }
}
