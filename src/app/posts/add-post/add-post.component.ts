import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/app.state';
import { ADD_POST_ACTION_CONST } from '../states/post.action';
import { PostModel } from 'src/app/shared/models/shared.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private store: Store<AppStateModel>){}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  addPost(): void {
    const { title, description } = this.postForm.value;
    const payload: PostModel = { title,description };

    this.postForm.valid && this.store.dispatch(ADD_POST_ACTION_CONST({ post: payload }));
  }

  showErrors(formFieldName: string): string {
    const formField = this.postForm.get(`${formFieldName}`);
    const errors = formField?.errors?.['required'] ? `The ${formFieldName} is required.` : formField?.errors?.['minlength'] ? `The ${formFieldName} should be minimum of 5 characters length.` : '';
    
    return errors;
  }

  

}
