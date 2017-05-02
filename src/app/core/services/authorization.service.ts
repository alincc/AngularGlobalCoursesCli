import {Injectable} from '@angular/core';
import {LoaderBlockService} from '../components/loader-block/loader-block.service';
import {Login} from '../entities/Login';
import {UserInfo} from '../entities/User';
import {Http, Response} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthorizationService {

  private user = new BehaviorSubject<UserInfo>(null);

  constructor(private loaderBlockService: LoaderBlockService, private http: Http) {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        this.user.next(JSON.parse(user));
      } catch (e) {
        console.log(e);
      }
    }
  }

  logIn(login: Login) {
    this.loaderBlockService.show();

    this.http.post('http://localhost:3004/auth/login', login)
      .subscribe((res: Response) => {
        const user: UserInfo = res.json();
        localStorage.setItem('user', JSON.stringify(user));
        this.user.next(user);
        this.loaderBlockService.hide();
      });
  }

  logOut() {
    localStorage.removeItem('user');
    this.user.next(null);
  }

  public getUserInfo() {
    return this.user.asObservable();
  }


}
