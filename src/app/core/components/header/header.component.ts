import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'agc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public user;

  constructor(private authService: AuthorizationService) {
  }

  ngOnInit() {
    this.user = this.authService.isAuthenticated();
  }

}
