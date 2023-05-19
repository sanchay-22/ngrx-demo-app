import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/misc/shared.model';
import { SharedState } from 'src/app/shared/state/shared.state';
import { getPostById } from '../state/post.selectors';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  post$: Observable<Post | null | undefined> = this.store.select(getPostById);

  constructor(private store: Store<SharedState>) {}
}