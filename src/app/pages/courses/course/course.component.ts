import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../core/entities/Course';
import {CoursesService} from '../courses.service';
import {MdDialog} from '@angular/material';
import {ConfirmationDialogComponent} from '../../../core/components/confiramation-dialog/confirmation-dialog.component';

@Component({
  selector: 'agc-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {

  @Input() course: Course;

  constructor(private coursesService: CoursesService, private dialog: MdDialog) {
  }

  ngOnInit() {
  }

  onCourseDelete(id: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.coursesService.removeCourse(id);
      }
    });
  }

}
