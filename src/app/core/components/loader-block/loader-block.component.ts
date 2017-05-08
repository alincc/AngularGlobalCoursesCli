import {Component, OnInit} from '@angular/core';
import {AppState} from '../../reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'agc-loader-block',
  templateUrl: './loader-block.component.html',
  styleUrls: ['./loader-block.component.scss']
})
export class LoaderBlockComponent implements OnInit {

  public visible$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.visible$ = this.store.select(state => state.loader.show);
  }

}
