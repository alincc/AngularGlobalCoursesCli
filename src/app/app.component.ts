import {ChangeDetectionStrategy, Component, NgZone, OnInit} from '@angular/core';
import {AuthActions} from './core/actions/auth';
import {AppState} from './core/reducers/index';
import {Store} from '@ngrx/store';

@Component({
  selector: 'agc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  constructor(private ngZone: NgZone,
              private store: Store<AppState>,
              private authActions: AuthActions) {

    let t1;

    ngZone.onUnstable.subscribe(() => {
      // console.log('goes unstabe');
      t1 = performance.now();
    });

    ngZone.onStable.subscribe(() => {
      // console.log(`time to stabilize = ${performance.now() - t1}ms`);
    });

  }

  ngOnInit(): void {
    this.store.dispatch(this.authActions.init());
  }

}
