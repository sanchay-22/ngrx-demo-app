import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updatePostAction } from '../states/post.action';
import { ActivatedRoute, Router } from '@angular/router';
import { getPostById } from '../states/post.selectors';
import { switchMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SharedState } from 'src/app/shared/store/shared.state';
import { Post } from 'src/app/shared/misc/shared.model';

@UntilDestroy()

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit{
  editForm!: FormGroup;
  postID!: string;

  constructor(private store: Store<SharedState>, private router: Router){}

  ngOnInit(): void {
    this.initializer();
  }

  initializer(): void {
    this.getPostByID();
  }

  getPostByID(): void {
    this.store.select(getPostById).pipe(untilDestroyed(this),
    switchMap(async (post) => {
      if(!!post) this.patchFormData(post);
    })).subscribe();
  }

  patchFormData(data: Post): void {
    this.editForm = new FormGroup({
      title: new FormControl(data?.title || null,[Validators.required, Validators.minLength(3)]),
      description: new FormControl(data?.description || null, [Validators.required, Validators.minLength(3)])
    })
  }

  updatePost(): void {
    const { title, description } = this.editForm.value;
    const payload: Post = { id: this.postID, title, description };

    this.editForm.valid && this.store.dispatch(updatePostAction({ post: payload }));
    this.router.navigate(['posts']);
  }

  showErrors(formFieldName: string): string {
    const formField = this.editForm.get(`${formFieldName}`);
    const errors = formField?.errors?.['required'] ? `The ${formFieldName} is required.` : formField?.errors?.['minlength'] ? `The ${formFieldName} should be minimum of 3 characters length.` : '';

    return errors;
  }

}
