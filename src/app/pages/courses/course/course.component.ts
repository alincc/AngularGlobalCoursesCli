
import { Component, Input, OnInit } from '@angular/core';
import {Course} from '../../../core/entities/Course';

@Component({
  selector: 'agc-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;
  constructor() { }

  ngOnInit() {
  }

  onCourseDelete(id: number) {
    console.log(id);
  }

}
