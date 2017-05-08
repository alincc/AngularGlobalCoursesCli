import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoursesModule} from './pages/courses/courses.module';
import {CourseModule} from './pages/course/course.module';
import {CoreModule} from './core/core.module';
import {LoginComponent} from './pages/login/login.component';
import {NoContentComponent} from './pages/no-content/no-content.component';
import {AuthorsEffects} from './core/effects/authors';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './core/effects/auth';
import {CoursesEffects} from './core/effects/courses';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {reducer} from './core/reducers';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoContentComponent,
  ],
  imports: [
    AppRoutingModule,
    CoursesModule,
    CourseModule,
    CoreModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(CoursesEffects),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(AuthorsEffects),


  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
