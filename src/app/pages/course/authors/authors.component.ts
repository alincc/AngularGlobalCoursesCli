import {Component, forwardRef, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Author} from '../../../core/entities/Author';
import {AuthorsService} from './authors.service';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator} from '@angular/forms';
import {MdCheckboxChange} from '@angular/material';

@Component({
  selector: 'agc-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AuthorsComponent), multi: true},
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => AuthorsComponent), multi: true}
  ]
})
export class AuthorsComponent implements OnInit, ControlValueAccessor, Validator {
  private propagateChange: Function;

  public authors: Observable<Author[]>;
  public selectedAuthors: Author[];

  constructor(private authorsService: AuthorsService) {
  }

  onAuthorSelect(checkbox: MdCheckboxChange, author: Author) {
    if (checkbox.checked) {
      this.selectedAuthors[author.id] = author;
    } else {
      delete this.selectedAuthors[author.id];
    }
    this.propagateChange(this.selectedAuthors.filter(a => a));
  }

  writeValue(authors: Author[]): void {
    this.selectedAuthors = [];
    authors.forEach(a => this.selectedAuthors[a.id] = a)
  }

  registerOnChange(fn: Function): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }


  validate(c: AbstractControl): ValidationErrors | any {
    return !c.value || c.value.length === 0 ? {noAuthors: true} : null;
  }

  ngOnInit() {
    this.authors = this.authorsService.getAuthors();
  }

}
