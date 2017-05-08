import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoursesService} from '../courses/courses.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Course} from '../../core/entities/Course';
import {CoursesActions} from '../../core/actions/courses';
import {AppState} from '../../core/reducers/index';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'agc-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit, OnDestroy {
  public courseForm: FormGroup;

  private courseSubscription: Subscription;

  private routerSubscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private coursesActions: CoursesActions,
              private store: Store<AppState>,
              private coursesService: CoursesService) {
  }

  addCourse() {
    console.log(this.courseForm.value);
    if (this.courseForm.value['id']) {
      this.store.dispatch(this.coursesActions.saveCourse(this.courseForm.value))
    } else {
      this.store.dispatch(this.coursesActions.addCourse(this.courseForm.value))
    }
  }

  ngOnInit() {
    this.courseSubscription = this.store.select(state => state.course)
      .subscribe((course: Course) => {
        this.courseForm.setValue(course);
      });


    this.courseForm = this.formBuilder.group({
      id: [null],
      isTopRated: [false],
      name: ['', Validators.maxLength(50)],
      description: ['', Validators.maxLength(500)],
      date: '',
      length: [0],
      authors: [[]]
    });

    this.routerSubscription = this.route.params
      .map((params: Params) => params['id'])
      .filter((courseId => courseId && courseId !== 'new'))
      .do((courseId: number) => this.store.dispatch(this.coursesActions.getCourse(courseId)))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.courseSubscription.unsubscribe();
    this.routerSubscription.unsubscribe()
  }
}
