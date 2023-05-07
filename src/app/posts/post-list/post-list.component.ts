import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/shared/models/shared.model';
import { AppStateModel } from 'src/app/shared/store/app.state';
import { selectAllPosts } from '../states/post.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
posts$: Observable<PostModel[]> = this.store.select(selectAllPosts);

constructor(private store: Store<AppStateModel>){}

}
