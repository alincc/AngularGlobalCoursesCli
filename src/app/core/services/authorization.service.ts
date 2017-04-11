import {Injectable} from '@angular/core';
import {LoaderBlockService} from '../components/loader-block/loader-block.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class AuthorizationService {

  private user = new ReplaySubject<string>(2);

  constructor(private loaderBlockService: LoaderBlockService) {
    const user = localStorage.getItem('user');
    if (user) {
      this.user.next(user);
    }
  }

  logIn(user: string) {
    this.loaderBlockService.show();
    localStorage.setItem('user', user);
    this.user.next(user);

    setTimeout(() => {
      this.loaderBlockService.hide();
    }, 1000);
  }

  logOut() {
    localStorage.removeItem('user');
    this.user.next('');
  }

  public isAuthenticated() {
    return this.user.asObservable();
  }

  public getUserInfo() {
    return this.user.asObservable();
  }


}
