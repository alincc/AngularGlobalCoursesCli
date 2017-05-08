import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../../reducers/index';
import {Store} from '@ngrx/store';
import {AuthState} from '../../reducers/auth';

@Component({
  selector: 'agc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public auth$: Observable<AuthState> = new Observable();

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.auth$ = this.store.select(state => state.auth);
  }

}
