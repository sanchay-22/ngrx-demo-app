import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setLoginAction } from '../../states/auth.actions';
import { AppState } from 'src/app/shared/shared.state';
import { setLoaderAction } from 'src/app/shared/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;

constructor(private store: Store<AppState>) {}

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
  this.store.dispatch(setLoaderAction({ loadingStatus: true }));//dispatching the action to set the status of loader true
  const { email, password } = this.loginForm.value;
  this.store.dispatch(setLoginAction({ email, password }));//dispatching the action to login
  this.store.dispatch(setLoaderAction({ loadingStatus: true }));//dispatching the action to set the status of loader true
}
}
