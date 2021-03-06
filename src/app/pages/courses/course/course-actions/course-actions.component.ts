import {Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'agc-course-actions',
  templateUrl: './course-actions.component.html',
  styleUrls: ['./course-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseActionsComponent implements OnInit {

  @Output()
  deleteCourse = new EventEmitter<void>();

  @Input()
  courseId: number;

  constructor() { }

  ngOnInit() {
  }

}
