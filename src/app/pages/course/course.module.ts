import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseComponent} from './course.component';
import {CoreModule} from '../../core/core.module';
import {DurationComponent} from './duration/duration.component';
import {DateComponent} from './date/date.component';
import {AuthorsComponent} from './authors/authors.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    CourseComponent,
    DurationComponent,
    DateComponent,
    AuthorsComponent
  ],
  exports: [
    CourseComponent
  ],
})
export class CourseModule {
}
