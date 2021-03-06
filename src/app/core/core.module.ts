import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorizationService} from './services/authorization.service';
import {Ng2Webstorage} from 'ng2-webstorage';
import {MaterialModule} from '@angular/material';
import {ConfirmationDialogComponent} from './components/confiramation-dialog/confirmation-dialog.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LogoComponent} from './components/header/logo/logo.component';
import {NavigationComponent} from './components/header/navigation/navigation.component';
import {AuthPanelComponent} from './components/header/auth-panel/auth-panel.component';
import {LoaderBlockComponent} from './components/loader-block/loader-block.component';
import {IsFreshCourseDirective} from './directives/is-fresh-course.directive';
import 'hammerjs';
import {DurationPipe} from './pipes/duration.pipe';
import {OrderByPublishDatePipe} from './pipes/order-by-publish-date.pipe';
import {AsyncFilterByPipe} from './pipes/async-filter-by.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule, RequestOptions} from '@angular/http';
import {AuthRequestOptions} from './services/AuthRequestOptions';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UnauthorizedGuardService} from './services/unauthorized-guard.service';
import {RouterModule} from '@angular/router';

import {AuthorsService} from '../pages/course/authors/authors.service';
import {CoursesActions} from './actions/courses';
import {AuthActions} from './actions/auth';
import {AuthorsActions} from './actions/authors';
import {LoaderActions} from './actions/loader';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    CommonModule,
    Ng2Webstorage,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [
    {provide: RequestOptions, useClass: AuthRequestOptions},
    AuthorizationService,
    UnauthorizedGuardService,
    AuthorsService,
    CoursesActions,
    AuthActions,
    AuthorsActions,
    LoaderActions

  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    NavigationComponent,
    AuthPanelComponent,
    ConfirmationDialogComponent,
    LoaderBlockComponent,
    IsFreshCourseDirective,
    DurationPipe,
    OrderByPublishDatePipe,
    AsyncFilterByPipe,
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  exports: [
    MaterialModule,
    HttpModule,
    HeaderComponent,
    FooterComponent,
    LoaderBlockComponent,
    RouterModule,
    IsFreshCourseDirective,
    ReactiveFormsModule,
    DurationPipe,
    AsyncFilterByPipe,
    OrderByPublishDatePipe,
  ],


})
export class CoreModule {
}
