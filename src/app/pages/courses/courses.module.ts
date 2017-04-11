import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseComponent} from './course/course.component';
import {CoursesComponent} from './courses.component';
import {ToolboxComponent} from './toolbox/toolbox.component';
import {CourseActionsComponent} from './course/course-actions/course-actions.component';
import {CoursesService} from './courses.service';
import {CourseDescriptionComponent} from './course/course-description/course-description.component';
import {CoreModule} from '../../core/core.module';
import {NoCoursesComponent} from './no-courses/no-courses.component';

const components = [
  CoursesComponent,
  CourseComponent,
  ToolboxComponent,
  CourseActionsComponent,
  CourseDescriptionComponent,
  NoCoursesComponent
];


@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: components,
  exports: [CoursesComponent],
  providers: [
    CoursesService,
  ]
})
export class CoursesModule {
}
