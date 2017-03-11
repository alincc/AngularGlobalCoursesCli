import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'agc-course-actions',
  templateUrl: './course-actions.component.html',
  styleUrls: ['./course-actions.component.scss']
})
export class CourseActionsComponent implements OnInit {

  @Output()
  deleteCourse = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
