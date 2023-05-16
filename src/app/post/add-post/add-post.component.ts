import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createPostAction } from '../states/post.action';
import { Post } from 'src/app/shared/shared.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AppState } from 'src/app/shared/shared.state';

@UntilDestroy()
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  addPost(): void {
    const { title, description } = this.postForm.value;
    const payload: Post = { title,description };

    this.postForm.valid && this.store.dispatch(createPostAction({ post: payload }));
  }

  showErrors(formFieldName: string): string {
    const formField = this.postForm.get(`${formFieldName}`);
    const errors = formField?.errors?.['required'] ? `The ${formFieldName} is required.` : formField?.errors?.['minlength'] ? `The ${formFieldName} should be minimum of 3 characters length.` : '';
    
    return errors;
  }
}
