import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../../core/services/authorization.service';

@Component({
  selector: 'agc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(private authService: AuthorizationService) {
  }

  ngOnInit() {
  }

  public login() {
    this.authService.logIn({login: this.username, password: this.password});
  }

}
