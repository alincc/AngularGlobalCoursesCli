import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'agc-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {

  public courseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.courseForm = this.formBuilder.group({
      name: ['', Validators.maxLength(50)],
      description: ['', Validators.maxLength(500)],
      date: '',
      length: [0],
      authors: [[]]
    });


  }

  addCourse() {
    console.log(this.courseForm.value)
  }

  ngOnInit() {
  }

}
