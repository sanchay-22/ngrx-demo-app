import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllPosts } from '../states/post.selectors';
import { deletePostAction, loadPostsAction } from '../states/post.action';
import { SharedState } from 'src/app/shared/shared.state';
import { Post } from 'src/app/shared/misc/shared.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
posts$: Observable<Post[]> = this.store.select(selectAllPosts);

constructor(private store: Store<SharedState>){}

ngOnInit(): void {
  this.store.dispatch(loadPostsAction())
}

deletePost(id: any): void {
  if(confirm('Are you sure, you want to delete')){
    this.store.dispatch(deletePostAction({ id }));
  }
}

}
