import {Injectable} from '@angular/core';
import {Login} from '../entities/Login';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthorizationService {
  constructor(private http: Http) {
  }

  logIn(login: Login) {
    return this.http.post('http://localhost:3004/auth/login', login)
      .map((r: Response) => {
        if (r.status === 200) {
          return r.json();
        } else if (r.status === 401) {
          return Observable.throw('wrong username or password!');
        }
      });
  }


  public getUserInfo() {
    return this.http.get('http://localhost:3004/auth/userinfo');
  }


}
