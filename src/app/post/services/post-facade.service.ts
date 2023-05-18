import { Injectable } from '@angular/core';
import { PostApiService } from './post-api.service';
import { Observable } from 'rxjs';
import { PostBlService } from './post-bl.service';
import { Post } from 'src/app/shared/misc/shared.model';

@Injectable({
  providedIn: 'root'
})
export class PostFacadeService {

  constructor(private postApiService: PostApiService, private postBlService: PostBlService) { }

  getPostList(): Observable<Post[]> { 
    return this.postBlService.mapPostList(this.postApiService.getPostList());
  }

  createPost(post: Post): Observable<{ name: string }> {
    return this.postApiService.createPost(post);
  }

  updatePost(post: Post): Observable<{ name: string }> {
    return this.postApiService.updatePost(post);
  }

  deletePost(id: string) : Observable<boolean> {
    return this.postApiService.deletePost(id);
  }

  getPostByID(id: string) : Observable<Post> {
    return this.postBlService.formatPostResponse(this.postApiService.getPostByID(id));
  }
}
