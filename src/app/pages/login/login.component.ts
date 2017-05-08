import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthActions} from '../../core/actions/auth';
import {AppState} from '../../core/reducers/index';
import {Store} from '@ngrx/store';

@Component({
  selector: 'agc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private store: Store<AppState>,
              private authActions: AuthActions,
              private formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public login() {
    this.store.dispatch(this.authActions.logIn(this.loginForm.value));
  }

}
