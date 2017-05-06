import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesComponent} from './pages/courses/courses.component';
import {LoginComponent} from './pages/login/login.component';
import {CourseComponent} from './pages/course/course.component';
import {NoContentComponent} from './pages/no-content/no-content.component';
import {UnauthorizedGuardService} from './core/services/unauthorized-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'courses', component: CoursesComponent, pathMatch: 'full'},
  {path: 'courses/new', component: CourseComponent, canActivate: [UnauthorizedGuardService], pathMatch: 'full'},
  {path: 'courses/:id', component: CourseComponent, canActivate: [UnauthorizedGuardService], pathMatch: 'full'},
  {path: '**', component: NoContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
