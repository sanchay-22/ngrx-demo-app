import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PostModel } from 'src/app/shared/models/shared.model';
import { AppStateModel } from 'src/app/shared/store/app.state';
import { ADD_POST_ACTION_CONST } from '../states/post.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit{

  editForm!: FormGroup;

  constructor(private store: Store<AppStateModel>){}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.editForm = new FormGroup({
      title: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  editPost(): void {
    const { title, description } = this.editForm.value;
    const payload: PostModel = { title,description };

    this.editForm.valid && this.store.dispatch(ADD_POST_ACTION_CONST({ post: payload }));
  }

  showErrors(formFieldName: string): string {
    const formField = this.editForm.get(`${formFieldName}`);
    const errors = formField?.errors?.['required'] ? `The ${formFieldName} is required.` : formField?.errors?.['minlength'] ? `The ${formFieldName} should be minimum of 5 characters length.` : '';
    
    return errors;
  }

}
