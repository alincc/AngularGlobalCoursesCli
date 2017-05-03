import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator, FormControl} from '@angular/forms';

@Component({
  selector: 'agc-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DurationComponent), multi: true},
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => DurationComponent), multi: true}
  ]
})
export class DurationComponent implements OnInit, ControlValueAccessor, Validator {
  private  propagateChange: Function;

  public length: string;
  public formControl: FormControl;

  constructor() {
  }

  validate(c: FormControl): { [key: string]: any; } {
    this.formControl = c;
    return Number.isSafeInteger(c.value) ? null : {digitsOnly: true};

  }

  setValue(input) {
    this.length = input.target.value;

    if (/^\d+$/.test(this.length)) {
      this.propagateChange(parseInt(this.length))
    } else {
      this.propagateChange(this.length)
    }
  }

  writeValue(value): void {
    this.length = value;
  }

  registerOnChange(fn: Function): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  ngOnInit() {
  }

}
