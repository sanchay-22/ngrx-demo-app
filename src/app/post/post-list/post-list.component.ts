import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllPosts } from '../states/post.selectors';
import { deletePostAction } from '../states/post.action';
import { Post } from 'src/app/shared/shared.model';
import { AppState } from 'src/app/shared/shared.state';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
posts$: Observable<Post[]> = this.store.select(selectAllPosts);

constructor(private store: Store<AppState>){}

deletePost(id: any): void {
  if(confirm('Are you sure, you want to delete')){
    this.store.dispatch(deletePostAction({ id }));
  }
}

}