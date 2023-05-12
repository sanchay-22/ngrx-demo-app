import { Injectable } from '@angular/core';
import { PostApiService } from './post-api.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/shared.model';
import { PostBlService } from './post-bl.service';

@Injectable({
  providedIn: 'root'
})
export class PostFacadeService {

  constructor(private postApiService: PostApiService, private postBlService: PostBlService) { }

  getPostList(): Observable<Post[]> { 
    return this.postBlService.mapPostList(this.postApiService.getPostList());
  }
}
