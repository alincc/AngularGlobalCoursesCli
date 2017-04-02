import {ChangeDetectorRef, OnDestroy, Pipe, PipeTransform, WrappedValue} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Course} from '../entities/Course';
import {Subscription} from 'rxjs/Subscription';

@Pipe({
  name: 'asyncFilterBy', pure: false
})
export class AsyncFilterByPipe implements PipeTransform, OnDestroy {

  private _latestValue: Course[] = null;
  private _latestReturnedValue: Course[] = null;

  private _subscription: Subscription = null;
  private _obj: Observable<Course[]> = null;

  constructor(private _ref: ChangeDetectorRef) {
  }

  transform(obj: Observable<Course[]>, searchValue: Observable<string>): any {


    if (!this._obj) {
      if (obj) {
        this._obj = obj;

        this._subscription = Observable.combineLatest(obj, searchValue).subscribe({
          next: ([courses, searchText]) => {
            let result;
            if (searchText) {
              result = courses.filter(c => c.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
            } else {
              result = courses;
            }
            this._updateLatestValue(obj, result);
          },
          error: (e: any) => {
            throw e;
          }
        });

      }
      this._latestReturnedValue = this._latestValue;
      return this._latestValue;
    }

    if (obj !== this._obj) {
      this._dispose();
      return this.transform(obj, searchValue);
    }

    if (this._latestValue === this._latestReturnedValue) {
      return this._latestReturnedValue;
    }

    this._latestReturnedValue = this._latestValue;
    return WrappedValue.wrap(this._latestValue);
  }

  private _updateLatestValue(async: Observable<Course[]>, value: Course[]): void {
    if (async === this._obj) {
      this._latestValue = value;
      this._ref.markForCheck();
    }
  }

  private _dispose(): void {
    this._subscription.unsubscribe();
    this._latestValue = null;
    this._latestReturnedValue = null;
    this._subscription = null;
    this._obj = null;
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._dispose();
    }
  }

}
