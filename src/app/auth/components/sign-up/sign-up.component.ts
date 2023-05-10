import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.initializer();
  }

  initializer(): void {
    this.initializeSignUpForm();
  }

  initializeSignUpForm(): void {

  }

  onSignUp(): void {
    throw new Error('Method not implemented.');
  }

}
