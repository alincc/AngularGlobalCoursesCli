import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesComponent} from './pages/courses/courses.component';
import {LoginComponent} from './pages/login/login.component';

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
