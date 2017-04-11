import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class LoaderBlockService {

  private _visible: ReplaySubject<boolean> = new ReplaySubject(2);

  get visible(): Observable<boolean> {
    return this._visible.asObservable();
  }

  constructor() {
  }


  public show() {
    this._visible.next(true);
  }

  public hide() {
    this._visible.next(false);
  }
}
