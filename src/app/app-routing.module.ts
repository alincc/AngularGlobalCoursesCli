import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesComponent} from './pages/courses/courses.component';
import {LoginComponent} from './pages/login/login.component';
import {CourseComponent} from './pages/course/course.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'course',
        component: CourseComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
