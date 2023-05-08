import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/app.state';
import { login } from '../states/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;

constructor(private store: Store<AppStateModel>) {}

ngOnInit(): void {
  this.initializer();
}

initializer(): void {
  this.initializeLoginForm();
}

initializeLoginForm(): void {
  this.loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });
}

login(): void {
  const { email, password } = this.loginForm.value;
  this.store.dispatch(login({ email, password }));
}
}
