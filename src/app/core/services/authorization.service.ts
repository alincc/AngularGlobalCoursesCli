import {Injectable} from '@angular/core';
import {LoaderBlockService} from '../components/loader-block/loader-block.service';
import {Login} from '../entities/Login';
import {UserInfo} from '../entities/User';
import {Http, Response} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

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

    return this.http.post('http://localhost:3004/auth/login', login)
      .map((r: Response) => {
        if (r.status === 200) {
          const user: UserInfo = r.json();
          localStorage.setItem('user', JSON.stringify(user));
          this.user.next(user);
          return this.http.get('http://localhost:3004/auth/userinfo')
        } else if (r.status === 401) {
          return Observable.throw('wrong username or password!')
        }
      })
      .do(() => {
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
