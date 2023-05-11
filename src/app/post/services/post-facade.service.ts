import { Injectable } from '@angular/core';
import { PostApiService } from './post-api.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/shared.model';

@Injectable({
  providedIn: 'root'
})
export class PostFacadeService {

  constructor(private postApiService: PostApiService) { }

  getPostList(): Observable<Post[]> {
    return this.postApiService.getPostList();
  }
}
