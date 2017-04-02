import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseDetailsComponent} from './pages/course-details/course-details.component';
import {CoursesModule} from './pages/courses/courses.module';
import {CoreModule} from './core/core.module';
import {LoginComponent} from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoursesModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
