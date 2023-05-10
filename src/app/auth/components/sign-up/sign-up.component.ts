import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/shared.state';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initializer();
  }

  initializer(): void {
    this.initializeSignUpForm();
  }

  initializeSignUpForm(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSignUp(): void {
    const { email, password } = this.signUpForm.value;
    const singUpPayload = { email, password };
    console.log(singUpPayload)
  }

}
