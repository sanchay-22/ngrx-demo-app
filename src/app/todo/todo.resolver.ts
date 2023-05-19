import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, first, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { TodoEntityBaseService } from './services/todo-entity-base.service';

@Injectable()
export class TodosResolver implements Resolve<boolean> {
    constructor(private todoEntityBaseService: TodoEntityBaseService) {}
    /*
    This resolve fucntion is for route guard. It is responsible for resolving the data before activating the route. It return boolean indicating whether to activate the route or not.
     */

  /*Method 1
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.todoEntityBaseService.loaded$.pipe(//    Firstly, it is accessing the loaded$ property of the TodoEntityBaseService, it is observable which returns boolean indicating whether the 'Todo' entity has been loaded or not...
            mergeMap(loaded => {//    In mergeMap if the loaded$ emits true, then the route is activated immedately, if not then it call the getAll methods of TodoEntityBaseService which will hit the api end point and fetch all the todos and returns true.
                if(loaded) {
                    return of(true);
                }
                return this.todoEntityBaseService.getAll().pipe(
                    map((todos) => !!todos)// If todos is present then it is converting to boolean and returning true, else fasle.
                );
            }),first()//    Finally the mergemap and map are chained together, resulting the first observable is passed to the operator, which ensures the first emitted value is returned.

        );
        
    }
  */

    //Method 2
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.todoEntityBaseService.loaded$.pipe(
          switchMap((loaded) => (loaded ? of(true) : this.todoEntityBaseService.getAll().pipe(map(() => true))))
        );
      }

}
