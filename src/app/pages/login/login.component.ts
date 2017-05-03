import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../../core/services/authorization.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'agc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {


  public loginForm: FormGroup;
  constructor(private authService: AuthorizationService, private formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      login: ['' , Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  public login() {
    this.authService.logIn(this.loginForm.value);
  }

}
