import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {AuthActions} from '../actions/auth';
import {AuthorizationService} from '../services/authorization.service';
import {Login} from '../entities/Login';
import {UserInfo} from '../entities/User';
import {LoaderActions} from '../actions/loader';
import {Router} from '@angular/router';
import {AppState} from '../reducers/index';
import {Store} from '@ngrx/store';


@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private authActions: AuthActions,
              private loaderActions: LoaderActions,
              private store: Store<AppState>,
              private authService: AuthorizationService,
              private router: Router) {
  }

  @Effect()
  login$ = this.actions$
    .ofType(AuthActions.LOGIN)
    .do(() => this.store.dispatch(this.loaderActions.show()))
    .map(action => action.payload)
    .switchMap((loginData: Login) => this.authService.logIn(loginData))
    .do((user) => localStorage.setItem('user', JSON.stringify(user)))
    .map((user: UserInfo) => this.authActions.loginSuccess(user))
    .do(() => this.store.dispatch(this.loaderActions.hide()))
    .do(() => this.router.navigate(['/courses']));

  @Effect()
  logout$ = this.actions$
    .ofType(AuthActions.LOGOUT)
    .map(() => localStorage.removeItem('user'));


  @Effect()
  init$ = this.actions$
    .ofType(AuthActions.INIT)
    .map(() => {
      let user: UserInfo;
      const userJson = localStorage.getItem('user');
      if (userJson) {
        try {
          user = JSON.parse(userJson);
        } catch (e) {
          console.log(e);
        }
      }
      return this.authActions.loginSuccess(user);
    });

}
