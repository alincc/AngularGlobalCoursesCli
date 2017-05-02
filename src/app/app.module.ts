import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoursesModule} from './pages/courses/courses.module';
import {CourseModule} from './pages/course/course.module';
import {CoreModule} from './core/core.module';
import {LoginComponent} from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    CoursesModule,
    CourseModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
