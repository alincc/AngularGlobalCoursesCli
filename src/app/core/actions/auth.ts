import {Injectable} from '@angular/core';
import {Login} from '../entities/Login';
import {ActionCreatorFactory} from '../services/actionCreator';
import {UserInfo} from '../entities/User';


@Injectable()
export class AuthActions {
  static INIT = '[Auth] init';
  static LOGIN = '[Auth] login';
  static LOGIN_SUCCESS = '[Auth] Login Success';
  static LOGOUT = '[Auth] logout';

  init = ActionCreatorFactory.create(AuthActions.INIT);

  logIn = ActionCreatorFactory.create<Login>(AuthActions.LOGIN);

  loginSuccess = ActionCreatorFactory.create<UserInfo>(AuthActions.LOGIN_SUCCESS);

  logOut = ActionCreatorFactory.create(AuthActions.LOGOUT);
}
