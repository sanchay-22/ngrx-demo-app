import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/shared/models/shared.model';
import { AppStateModel } from 'src/app/shared/store/app.state';
import { selectAllPosts } from '../states/post.selectors';
import { deletePost } from '../states/post.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
posts$: Observable<PostModel[]> = this.store.select(selectAllPosts);

constructor(private store: Store<AppStateModel>){}

deletePost(id: any): void {
  if(confirm('Are you sure, you want to delete')){
    this.store.dispatch(deletePost({ id }));
  }
}

}
