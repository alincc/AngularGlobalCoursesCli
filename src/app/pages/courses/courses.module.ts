import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseComponent} from './course/course.component';
import {CoursesComponent} from './courses.component';
import {ToolboxComponent} from './toolbox/toolbox.component';
import {CourseActionsComponent} from './course/course-actions/course-actions.component';
import {CoursesService} from './courses.service';
import {FormsModule} from '@angular/forms';
import {CourseDescriptionComponent} from './course/course-description/course-description.component';

const components = [
  CoursesComponent,
  CourseComponent,
  ToolboxComponent,
  CourseActionsComponent,
  CourseDescriptionComponent
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: components,
  exports: [CoursesComponent],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
