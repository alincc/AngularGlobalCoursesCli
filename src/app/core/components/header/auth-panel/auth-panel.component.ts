import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../../../services/authorization.service';

@Component({
  selector: 'agc-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.scss']
})
export class AuthPanelComponent implements OnInit {

  constructor(private authService: AuthorizationService) {
  }

  ngOnInit() {
  }

  public logOut() {
    console.log(this.authService.getUserInfo());
    this.authService.logout();
  }
}
