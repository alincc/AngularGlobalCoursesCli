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
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    Ng2Webstorage,
    MaterialModule
  ],
  providers: [
    AuthorizationService
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    NavigationComponent,
    AuthPanelComponent,
    ConfirmationDialogComponent,
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]

})
export class CoreModule {
}
