import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppState} from '../reducers/index';

@Injectable()
export class UnauthorizedGuardService implements CanActivate {

  private isLoggedIn$: Observable<boolean>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.isLoggedIn$ = store.select((state) => state.auth.user).map(u => !!u);
  }

  canActivate(): Observable<boolean> {
    return this.isLoggedIn$
      .first()
      .do((allowed) => {
        if (!allowed) {
          this.router.navigate(['/login']);
        }
      });
  }
}
