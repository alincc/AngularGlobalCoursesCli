import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {LoaderBlockService} from '../components/loader-block/loader-block.service';

@Injectable()
export class AuthorizationService {

  private user = new BehaviorSubject<string>('');

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
