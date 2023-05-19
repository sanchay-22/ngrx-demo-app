import { Injectable } from '@angular/core';
import { Todo } from '../misc/todo.model';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';


@Injectable({
  providedIn: 'root'
})
export class TodoEntityBaseService extends EntityCollectionServiceBase<Todo> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Todo', serviceElementsFactory);
  }
}
