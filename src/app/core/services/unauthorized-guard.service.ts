import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class UnauthorizedGuardService implements CanActivate{
  canActivate(): boolean {
    const user = localStorage.getItem('user');
    return !!user;
  }
}
