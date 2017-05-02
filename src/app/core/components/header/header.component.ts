import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';
import {UserInfo} from '../../entities/User';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'agc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public $user: Observable<UserInfo>;

  constructor(private authService: AuthorizationService) {
  }

  ngOnInit() {
    this.$user = this.authService.getUserInfo();
  }

}
