import {Injectable} from '@angular/core';
import {LocalStorage} from 'ng2-webstorage';


@Injectable()
export class AuthorizationService {

  @LocalStorage()
  private user: string;

  constructor() {
  }

  public login(user) {
    this.user = user;
  }

  public logout() {
    this.user = null;
  }

  public isAuthenticated() {
    return !!this.user;
  }

  public getUserInfo() {
    return this.user;
  }


}
