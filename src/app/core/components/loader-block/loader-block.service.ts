import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoaderBlockService {

  private _visible: BehaviorSubject<boolean> = new BehaviorSubject(false);

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
