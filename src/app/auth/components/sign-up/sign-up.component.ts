import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loaderAction } from 'src/app/shared/store/shared.actions';
import { SharedState } from 'src/app/shared/store/shared.state';
import { signUpAction } from '../../state/auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private store: Store<SharedState>) {}

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
    this.store.dispatch(loaderAction({ loadingStatus : true }));
    this.store.dispatch(signUpAction({ email, password }));
  }

}
