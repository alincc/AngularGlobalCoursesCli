import {Injectable} from '@angular/core';
import {Author} from '../entities/Author';
import {ActionCreatorFactory} from '../services/actionCreator';


@Injectable()
export class AuthorsActions {

  static LOAD_AUTHORS = '[Authors] Load Authors';
  loadAuthors = ActionCreatorFactory.create(AuthorsActions.LOAD_AUTHORS);


  static LOAD_AUTHORS_SUCCESS = '[Authors] Load Authors Success';
  loadAuthorsSuccess = ActionCreatorFactory.create<Author[]>(AuthorsActions.LOAD_AUTHORS_SUCCESS);

}
