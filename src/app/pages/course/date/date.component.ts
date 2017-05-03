import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, FormControl} from '@angular/forms';

@Component({
  selector: 'agc-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DateComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DateComponent), multi: true }

  ]
})
export class DateComponent implements OnInit, ControlValueAccessor, Validator {
  private dateRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/(\d{4})$/;
  private propagateChange: Function;
  private date: Date;

  public rawDate: string = '';
  public formControl: FormControl;

  validate(c: FormControl): { [key: string]: any; } {
    this.formControl = c;
    return this.dateRegex.test(this.rawDate) ? null : { invalidDate: true };
  }

  writeValue(date?: Date): void {
    this.date = date;
    if(date instanceof Date){
      this.rawDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }



  setValue(event) {
    const regResult = this.dateRegex.exec(event.target.value);

    const [, day, month, year] = regResult || new Array(4).fill(0);

    this.date = new Date(year, month - 1, day);
    if (regResult) {
      this.rawDate = `${this.date.getMonth() + 1}/${this.date.getDate()}/${this.date.getFullYear()}`;
    }

    this.propagateChange(this.date);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
