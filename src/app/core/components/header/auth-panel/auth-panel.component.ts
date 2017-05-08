import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UserInfo} from '../../../entities/User';
import {AppState} from '../../../reducers/index';
import {Store} from '@ngrx/store';
import {AuthActions} from '../../../actions/auth';

@Component({
  selector: 'agc-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPanelComponent implements OnInit {

  @Input()
  public user: UserInfo;

  constructor(private store: Store<AppState>,
              private authActions: AuthActions) {
  }

  ngOnInit() {
  }

  public logOut() {
    this.store.dispatch(this.authActions.logOut());
  }
}
