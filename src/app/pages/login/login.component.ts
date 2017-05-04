import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../../core/services/authorization.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'agc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private authService: AuthorizationService,
              private formBuilder: FormBuilder,
              private router: Router) {

    this.loginForm = formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  public login() {
    this.authService.logIn(this.loginForm.value)
      .subscribe(() => {
        this.router.navigate(['/courses'])
      })
  }

}
