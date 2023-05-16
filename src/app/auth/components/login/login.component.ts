import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginAction } from '../../states/auth.actions';
import { SharedState } from 'src/app/shared/shared.state';
import { loaderAction } from 'src/app/shared/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;

constructor(private store: Store<SharedState>) {}

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
  this.store.dispatch(loaderAction({ loadingStatus: true }));//dispatching the action to set the status of loader true
  const { email, password } = this.loginForm.value;
  this.store.dispatch(loginAction({ email, password }));//dispatching the action to login
}
}
