import {Course} from '../../core/entities/Course';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CoursesService} from './courses.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'agc-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CoursesComponent implements OnInit {

  public $courses: Observable<Course[]>;


  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.$courses = this.coursesService.$courses;
  }

  public setSearchValue(value: string) {
    this.coursesService.search(value);
  }

  public nextPage() {
    this.coursesService.nextPage();
  }
}
