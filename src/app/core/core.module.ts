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
import {LoaderBlockService} from './components/loader-block/loader-block.service';
import {IsFreshCourseDirective} from './directives/is-fresh-course.directive';
import 'hammerjs';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPublishDatePipe } from './pipes/order-by-publish-date.pipe';
import { AsyncFilterByPipe } from './pipes/async-filter-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    Ng2Webstorage,
    MaterialModule,
  ],
  providers: [
    AuthorizationService,
    LoaderBlockService,
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
    HeaderComponent,
    FooterComponent,
    LoaderBlockComponent,
    IsFreshCourseDirective,
    DurationPipe,
    AsyncFilterByPipe,
    OrderByPublishDatePipe,
  ]

})
export class CoreModule {
}
