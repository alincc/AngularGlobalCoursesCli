import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthorizationService} from './authorization.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UnauthorizedGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthorizationService) {
  }

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn()
      .first()
      .do((allowed) => {
        if (!allowed) {
          this.router.navigate(['/login']);
        }
      })
  }
}
