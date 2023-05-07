import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PostModel } from 'src/app/shared/models/shared.model';
import { AppStateModel } from 'src/app/shared/store/app.state';
import { updatePost } from '../states/post.action';
import { ActivatedRoute } from '@angular/router';
import { selectPostById } from '../states/post.selectors';
import { switchMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit{
  editForm!: FormGroup;
  postID!: string;

  constructor(private store: Store<AppStateModel>, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.initializer();
  }

  initializer(): void {
    this.activatedRoute.paramMap.pipe(untilDestroyed(this)).subscribe((params) => {
      this.postID = params.get('id') as string;
      this.getPostByID(this.postID);
    });
  }

  getPostByID(id: string): void {
    this.store.select(selectPostById(id)).pipe(switchMap(async (data) => {
      data && this.patchFormData(data);
    }),untilDestroyed(this)).subscribe();              
  }

  patchFormData(data: PostModel): void {
    this.editForm = new FormGroup({
      title: new FormControl(data?.title,[Validators.required, Validators.minLength(5)]),
      description: new FormControl(data?.description, [Validators.required, Validators.minLength(5)])
    })
  }

  updatePost(): void {
    const { title, description } = this.editForm.value;
    const payload: PostModel = { id: this.postID, title, description };
  
    this.editForm.valid && this.store.dispatch(updatePost({ post: payload }));
  }

  showErrors(formFieldName: string): string {
    const formField = this.editForm.get(`${formFieldName}`);
    const errors = formField?.errors?.['required'] ? `The ${formFieldName} is required.` : formField?.errors?.['minlength'] ? `The ${formFieldName} should be minimum of 5 characters length.` : '';
    
    return errors;
  }

}
