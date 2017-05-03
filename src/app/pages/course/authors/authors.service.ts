import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Author} from '../../../core/entities/Author';

@Injectable()
export class AuthorsService {

  constructor(private http: Http) {
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get('http://localhost:3004/authors').map(res => res.json());
  }

}
