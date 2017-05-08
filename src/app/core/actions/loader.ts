import {ActionCreatorFactory} from '../services/actionCreator';
import {Injectable} from '@angular/core';

@Injectable()
export class LoaderActions {
  static SHOW = '[Loader] show';
  show = ActionCreatorFactory.create(LoaderActions.SHOW);

  static HIDE = '[Loader] hide';
  hide = ActionCreatorFactory.create(LoaderActions.HIDE);

}
