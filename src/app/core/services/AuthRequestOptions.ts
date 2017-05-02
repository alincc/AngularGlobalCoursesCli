import {BaseRequestOptions, RequestOptions, RequestOptionsArgs} from '@angular/http';
import {UserInfo} from '../entities/User';

export class AuthRequestOptions extends BaseRequestOptions {
  merge(options?: RequestOptionsArgs): RequestOptions {
    const mergedOptions = super.merge(options);

    try {
      const user: UserInfo = JSON.parse(localStorage.getItem('user'));

      if (user && user.fakeToken) {
        mergedOptions.headers.set('Authorization', user.fakeToken);
      }
    } catch (e) {
      console.log(e);
    }

    return mergedOptions;
  }
}
