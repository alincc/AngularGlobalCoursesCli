import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoursesService} from '../courses/courses.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Course} from '../../core/entities/Course';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'agc-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {

  public courseForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private coursesService: CoursesService) {
  }

  addCourse() {
    console.log(this.courseForm.value);
    Observable.if(() => this.courseForm.value['id'],
      this.coursesService.updateCourse(this.courseForm.value),
      this.coursesService.createCourse(this.courseForm.value)
    ).subscribe(() => this.router.navigate(['/courses']))
  }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      id: [null],
      isTopRated: [false],
      name: ['', Validators.maxLength(50)],
      description: ['', Validators.maxLength(500)],
      date: '',
      length: [0],
      authors: [[]]
    });

    this.route.params
      .map((params: Params) => params['id'])
      .filter((courseId => courseId && courseId !== 'new'))
      .switchMap((courseId: number) => this.coursesService.getCourse(courseId))
      .subscribe((course: Course) => {
        this.courseForm.setValue(course)
      });
  }
}
