import { Course } from '../../core/entities/Course';
import { Component, OnInit } from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'agc-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: Array<Course>;
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.courses;
  }

}
