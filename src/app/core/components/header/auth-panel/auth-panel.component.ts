import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {AuthorizationService} from '../../../services/authorization.service';
import {UserInfo} from '../../../entities/User';

@Component({
  selector: 'agc-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPanelComponent implements OnInit {

  @Input()
  public user: UserInfo;

  constructor(private authService: AuthorizationService) {
  }

  ngOnInit() {
  }

  public logOut() {
    this.authService.logOut();
  }
}
