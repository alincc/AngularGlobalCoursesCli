import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {AuthorsActions} from '../actions/authors';
import {AuthorsService} from '../../pages/course/authors/authors.service';

@Injectable()
export class AuthorsEffects {
  constructor(private actions$: Actions,
              private authorsActions: AuthorsActions,
              private authorsService: AuthorsService){}

  @Effect()
  loadAuthors$ = this.actions$
    .ofType(AuthorsActions.LOAD_AUTHORS)
    .switchMap(() => this.authorsService.getAuthors())
    .map(authors => this.authorsActions.loadAuthorsSuccess(authors));

}
